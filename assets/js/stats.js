/*
 * Live, token-free project stats for joernberkefeld.com.
 *
 * Scans each `.project-card`, reads the links it already renders, and appends a
 * row of stat chips:
 *   - GitHub stars       (github.com/{owner}/{repo})
 *   - npm weekly installs (npmjs.com/package/{name})
 *   - Marketplace installs (marketplace.visualstudio.com/items?itemName={pub.ext})
 *
 * All data comes from public APIs that work in the browser without any token.
 * Results are cached in localStorage for 1 hour, so repeat loads make ~0 calls.
 * Chips render as animated skeletons first, then swap to real values in place
 * (no layout shift); a failed metric removes its own chip.
 */

const TTL = 3600_000; // 1 hour
const CACHE_PREFIX = 'jbstats:v1:';

const compact = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
});

// ── localStorage cache ────────────────────────────────────────────────────────

/**
 * Reads a cached value if it is still fresh.
 *
 * @param {string} key cache key (without prefix)
 * @returns {number|null} the cached value or null when missing/stale/unusable
 */
function cacheGet(key) {
    try {
        const raw = localStorage.getItem(CACHE_PREFIX + key);
        if (!raw) return null;
        const { t, v } = JSON.parse(raw);
        if (typeof t !== 'number' || Date.now() - t > TTL) return null;
        return v;
    } catch {
        return null;
    }
}

/**
 * Stores a value with the current timestamp.
 *
 * @param {string} key cache key (without prefix)
 * @param {number} v value to cache
 * @returns {void}
 */
function cacheSet(key, v) {
    try {
        localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ t: Date.now(), v }));
    } catch {
        // storage full or disabled — ignore, we just refetch next time
    }
}

// ── Fetchers ──────────────────────────────────────────────────────────────────

/**
 * Fetches GitHub star count for a single repo.
 *
 * @param {string} slug "owner/repo"
 * @returns {Promise<number>} star count
 */
async function fetchStars(slug) {
    const res = await fetch(`https://api.github.com/repos/${slug}`, {
        headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) throw new Error(`GitHub ${res.status}`);
    const data = await res.json();
    return data.stargazers_count ?? 0;
}

/**
 * Fetches npm weekly downloads for many packages in a single batched request.
 *
 * @param {string[]} names npm package names
 * @returns {Promise<Object<string, number>>} map of name -> weekly downloads
 */
async function fetchNpmBatch(names) {
    if (!names.length) return {};
    const encoded = names.map((n) => encodeURIComponent(n)).join(',');
    const res = await fetch(`https://api.npmjs.org/downloads/point/last-week/${encoded}`);
    if (!res.ok) throw new Error(`npm ${res.status}`);
    const data = await res.json();
    // Single package -> flat object; multiple -> keyed by name.
    if (names.length === 1) {
        return { [names[0]]: data.downloads ?? 0 };
    }
    const out = {};
    for (const name of names) {
        out[name] = data[name]?.downloads ?? 0;
    }
    return out;
}

/**
 * Fetches VS Code Marketplace install counts for many extensions in one query.
 *
 * @param {string[]} ids extension ids ("publisher.extension")
 * @returns {Promise<Object<string, number>>} map of lowercased id -> installs
 */
async function fetchMarketplaceBatch(ids) {
    if (!ids.length) return {};
    const body = {
        filters: [
            {
                criteria: ids.map((value) => ({ filterType: 7, value })),
                pageNumber: 1,
                pageSize: ids.length,
            },
        ],
        flags: 0x1 | 0x100, // IncludeVersions | IncludeStatistics
    };
    const res = await fetch(
        'https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                Accept: 'application/json; charset=utf-8; api-version=7.2-preview.1',
            },
            body: JSON.stringify(body),
        }
    );
    if (!res.ok) throw new Error(`Marketplace ${res.status}`);
    const data = await res.json();
    const out = {};
    for (const ext of data.results?.[0]?.extensions ?? []) {
        const id = `${ext.publisher?.publisherName}.${ext.extensionName}`.toLowerCase();
        let installs = 0;
        for (const s of ext.statistics ?? []) {
            if (s.statisticName === 'install') installs = Math.round(s.value ?? 0);
        }
        out[id] = installs;
    }
    return out;
}

// ── Link parsing ──────────────────────────────────────────────────────────────

const GH_RE = /github\.com\/([^/]+\/[^/?#]+)/i;
const NPM_RE = /npmjs\.com\/package\/((?:@[^/]+\/)?[^/?#]+)/i;
const VSCE_RE = /marketplace\.visualstudio\.com\/items\?itemName=([^&#]+)/i;

/**
 * Extracts stat identifiers from a card's anchors.
 *
 * @param {HTMLElement} card a `.project-card` element
 * @returns {{gh?: string, npm?: string, vsce?: string}} discovered ids
 */
function parseCard(card) {
    const ids = {};
    // Optional stars-only source: a repo whose link isn't shown on the card
    // (e.g. website cards that want a star count but no GitHub link).
    const ghAttr = card.dataset.gh;
    if (ghAttr) {
        const m = GH_RE.exec(`github.com/${ghAttr}`) || /^([^/]+\/[^/?#]+)$/.exec(ghAttr);
        if (m) ids.gh = m[1].replace(/\.git$/, '');
    }
    for (const a of card.querySelectorAll('a[href]')) {
        const href = a.getAttribute('href');
        if (!ids.gh) {
            const m = GH_RE.exec(href);
            if (m) ids.gh = m[1].replace(/\.git$/, '');
        }
        if (!ids.npm) {
            const m = NPM_RE.exec(href);
            if (m) ids.npm = decodeURIComponent(m[1]);
        }
        if (!ids.vsce) {
            const m = VSCE_RE.exec(href);
            if (m) ids.vsce = decodeURIComponent(m[1]);
        }
    }
    return ids;
}

// ── DOM ───────────────────────────────────────────────────────────────────────

const ICONS = {
    star: '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/></svg>',
    npm: '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 1.5a.75.75 0 0 1 .75.75v7.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 1.06-1.06l2.72 2.72V2.25A.75.75 0 0 1 8 1.5ZM2.75 13.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H2.75Z"/></svg>',
    install: '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 1.5a.75.75 0 0 1 .75.75v7.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 1.06-1.06l2.72 2.72V2.25A.75.75 0 0 1 8 1.5ZM2.75 13.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H2.75Z"/></svg>',
};

/**
 * Creates a skeleton stat chip.
 *
 * @param {string} kind "star" | "npm" | "vsce"
 * @param {string} label accessible label for the metric
 * @returns {HTMLElement} the chip element
 */
function makeChip(kind, label) {
    const chip = document.createElement('span');
    chip.className = 'stat-chip is-loading';
    chip.dataset.kind = kind;
    chip.setAttribute('aria-label', label);
    chip.setAttribute('title', label);
    return chip;
}

/**
 * Fills a chip with its icon and value, clearing the loading state.
 *
 * @param {HTMLElement} chip the chip element
 * @param {string} icon inline SVG markup
 * @param {number} value numeric value to render
 * @param {string} suffix optional suffix (e.g. "/wk")
 * @returns {void}
 */
function fillChip(chip, icon, value, suffix = '') {
    chip.classList.remove('is-loading');
    chip.innerHTML = `${icon}<span>${compact.format(value)}${suffix}</span>`;
}

// ── Orchestration ─────────────────────────────────────────────────────────────

/**
 * Scans cards, injects skeleton chips, and resolves values from cache/network.
 *
 * @returns {Promise<void>}
 */
async function run() {
    const cards = document.querySelectorAll('.project-card');
    if (!cards.length) return;

    /** @type {Array<{chip: HTMLElement, kind: string, id: string}>} */
    const pending = [];
    const npmWanted = new Set();
    const vsceWanted = new Set();

    for (const card of cards) {
        const ids = parseCard(card);
        if (!ids.gh && !ids.npm && !ids.vsce) continue;

        const row = document.createElement('div');
        row.className = 'project-stats';

        if (ids.gh) {
            const chip = makeChip('star', `${ids.gh} — GitHub stars`);
            row.appendChild(chip);
            const cached = cacheGet(`gh:${ids.gh}`);
            if (cached != null) {
                fillChip(chip, ICONS.star, cached);
            } else {
                pending.push({ chip, kind: 'gh', id: ids.gh });
            }
        }
        if (ids.npm) {
            const chip = makeChip('npm', `${ids.npm} — npm weekly downloads`);
            row.appendChild(chip);
            const cached = cacheGet(`npm:${ids.npm}`);
            if (cached != null) {
                fillChip(chip, ICONS.npm, cached, '/wk');
            } else {
                pending.push({ chip, kind: 'npm', id: ids.npm });
                npmWanted.add(ids.npm);
            }
        }
        if (ids.vsce) {
            const key = ids.vsce.toLowerCase();
            const chip = makeChip('vsce', `${ids.vsce} — Marketplace installs`);
            row.appendChild(chip);
            const cached = cacheGet(`vsce:${key}`);
            if (cached != null) {
                fillChip(chip, ICONS.install, cached);
            } else {
                pending.push({ chip, kind: 'vsce', id: key });
                vsceWanted.add(ids.vsce);
            }
        }

        if (row.children.length) card.appendChild(row);
    }

    if (!pending.length) return;

    // Each group resolves independently: a failure in one metric (or a single
    // rate-limited GitHub call) never removes another group's chips. Any chip
    // still in the loading state after its own fetch settles is removed.
    const ghPending = pending.filter((p) => p.kind === 'gh');

    const tasks = [
        // GitHub stars: one call per repo, each settled on its own so a single
        // rate-limited response only drops its own chip.
        ...ghPending.map((p) =>
            fetchStars(p.id)
                .then((v) => {
                    cacheSet(`gh:${p.id}`, v);
                    fillChip(p.chip, ICONS.star, v);
                })
                .catch(() => p.chip.remove())
        ),
        npmWanted.size
            ? fetchNpmBatch([...npmWanted])
                  .then((map) => {
                      for (const p of pending) {
                          if (p.kind !== 'npm') continue;
                          const v = map[p.id];
                          if (v == null) {
                              p.chip.remove();
                              continue;
                          }
                          cacheSet(`npm:${p.id}`, v);
                          fillChip(p.chip, ICONS.npm, v, '/wk');
                      }
                  })
                  .catch(() => {
                      for (const p of pending) {
                          if (p.kind === 'npm') p.chip.remove();
                      }
                  })
            : Promise.resolve(),
        vsceWanted.size
            ? fetchMarketplaceBatch([...vsceWanted])
                  .then((map) => {
                      for (const p of pending) {
                          if (p.kind !== 'vsce') continue;
                          const v = map[p.id];
                          if (v == null) {
                              p.chip.remove();
                              continue;
                          }
                          cacheSet(`vsce:${p.id}`, v);
                          fillChip(p.chip, ICONS.install, v);
                      }
                  })
                  .catch(() => {
                      for (const p of pending) {
                          if (p.kind === 'vsce') p.chip.remove();
                      }
                  })
            : Promise.resolve(),
    ];

    await Promise.allSettled(tasks);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
} else {
    run();
}
