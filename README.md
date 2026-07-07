# joernberkefeld.com

Source for [joernberkefeld.com](https://joernberkefeld.com) — the personal landing page of Jörn Berkefeld, Senior Salesforce Technical Architect and open-source tooling author.

A single-page professional "poster" built with [Jekyll](https://jekyllrb.com/) and served via GitHub Pages.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

> Google Analytics only loads on the production build (`JEKYLL_ENV=production`), so local previews do not send analytics events.

## Structure

| Path | Purpose |
| --- | --- |
| `index.md` | The poster content (hero + grouped project cards) |
| `_layouts/default.html` | Page shell (header + content + footer) |
| `_includes/` | `head`, `header`, `footer`, analytics, and reusable SVG icons |
| `_sass/` | Light-theme design system (`_variables`, `_base`, `_header`, `_poster`) |
| `assets/css/main.scss` | SASS entry point |
| `assets/portrait.png` | Hero portrait |
| `CNAME` | Custom domain for GitHub Pages |

## Deployment

Pushing to the default branch triggers the native GitHub Pages Jekyll build. The custom domain is configured via the `CNAME` file and the repository's Pages settings.
