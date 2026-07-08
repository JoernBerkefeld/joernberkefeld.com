---
layout: default
title: null
description: "Jörn Berkefeld — Senior Salesforce Technical Architect and open-source tooling author. Creator of ssjs.guide, SFMC DevTools, SFMC Data Loader, and a suite of SFMC developer tools."
---

<section class="hero">
  <img class="hero-portrait" src="{{ '/assets/portrait.png' | relative_url }}" alt="Portrait of Jörn Berkefeld" width="200" height="200">
  <div class="hero-body">
    <h1 class="hero-name">Jörn Berkefeld</h1>
    <p class="hero-role">Senior Salesforce Technical Architect<br>🏆Salesforce Marketing Champion '23<br>Open-Source Tooling Author</p>
    <p class="hero-bio">I am an Enterprise Technical Architect specializing in Salesforce. In my free-time I build developer tooling for Salesforce Marketing Cloud Engagement and Next — CLIs, VS Code extensions, linters, formatters, language intelligence, and reference documentation used by SFMC developers worldwide.</p>
    <div class="hero-cta">
      <a class="btn btn-primary" href="https://www.linkedin.com/in/joernberkefeld/" target="_blank" rel="noopener">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        LinkedIn
      </a>
      <a class="btn btn-secondary" href="https://github.com/JoernBerkefeld" target="_blank" rel="noopener">
        {% include icons/github.svg %}
        GitHub
      </a>
      <a class="btn btn-secondary" href="https://marketplace.visualstudio.com/publishers/joernberkefeld" target="_blank" rel="noopener">
        {% include icons/vscode.svg %}
        Marketplace
      </a>
      <a class="btn btn-secondary" href="https://ssjs.guide" target="_blank" rel="noopener">
        {% include icons/ssjs-guide.svg %}
        ssjs.guide
      </a>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-heading">Websites</h2>
  <div class="project-grid">
    <div class="project-card" data-gh="JoernBerkefeld/ssjs.guide">
      <div class="project-title">ssjs.guide</div>
      <p class="project-desc">The complete Server-Side JavaScript reference for Salesforce Marketing Cloud — every function, object, and platform API, with examples.</p>
      <div class="project-tags"><span class="project-tag">SSJS</span><span class="project-tag">Reference</span></div>
      <div class="project-links">
        <a class="project-link" href="https://ssjs.guide" target="_blank" rel="noopener">{% include icons/ssjs-guide.svg %} Website</a>
      </div>
    </div>
    <div class="project-card" data-gh="JoernBerkefeld/SFMC-Cookbook">
      <div class="project-title">SFMC Cookbook</div>
      <p class="project-desc">My earlier collection of practical Salesforce Marketing Cloud recipes and how-tos.</p>
      <div class="project-tags"><span class="project-tag">SFMC</span><span class="project-tag">Guides</span></div>
      <div class="project-links">
        <a class="project-link" href="https://joernberkefeld.github.io/SFMC-Cookbook/" target="_blank" rel="noopener">{% include icons/chef-hat.svg %} Website</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-heading">SFMC DevTools</h2>
  <p class="section-intro">Retrieve, deploy, and manage SFMC metadata as code — the de-facto CI/CD toolchain for Marketing Cloud.</p>
  <div class="project-grid">
    <div class="project-card">
      <div class="project-title">mcdev</div>
      <p class="project-desc">Command-line tool to manage Salesforce Marketing Cloud metadata across business units — retrieve, deploy, and version everything as code.</p>
      <div class="project-tags"><span class="project-tag">CLI</span><span class="project-tag">CI/CD</span></div>
      <div class="project-links">
        <a class="project-link" href="https://www.npmjs.com/package/mcdev" target="_blank" rel="noopener">{% include icons/npm.svg %} npm</a>
        <a class="project-link" href="https://github.com/Accenture/sfmc-devtools" target="_blank" rel="noopener">{% include icons/github.svg %} GitHub</a>
      </div>
    </div>
    <div class="project-card">
      <div class="project-title">SFMC DevTools for VS Code</div>
      <p class="project-desc">A graphical VS Code interface for mcdev — retrieve and deploy SFMC metadata without touching the command line.</p>
      <div class="project-tags"><span class="project-tag">VS Code</span></div>
      <div class="project-links">
        <a class="project-link" href="https://marketplace.visualstudio.com/items?itemName=Accenture-oss.sfmc-devtools-vscode" target="_blank" rel="noopener">{% include icons/vscode.svg %} Marketplace</a>
        <a class="project-link" href="https://github.com/Accenture/sfmc-devtools-vscode" target="_blank" rel="noopener">{% include icons/github.svg %} GitHub</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-heading">SFMC Data Loader</h2>
  <p class="section-intro">Bulk import and export of Data Extension records for Salesforce Marketing Cloud.</p>
  <div class="project-grid">
    <div class="project-card">
      <div class="project-title">sfmc-dataloader</div>
      <p class="project-desc">CLI to bulk load and extract Data Extension rows in Salesforce Marketing Cloud, built for automation.</p>
      <div class="project-tags"><span class="project-tag">CLI</span><span class="project-tag">Data</span></div>
      <div class="project-links">
        <a class="project-link" href="https://www.npmjs.com/package/sfmc-dataloader" target="_blank" rel="noopener">{% include icons/npm.svg %} npm</a>
        <a class="project-link" href="https://github.com/JoernBerkefeld/sfmc-dataloader" target="_blank" rel="noopener">{% include icons/github.svg %} GitHub</a>
      </div>
    </div>
    <div class="project-card">
      <div class="project-title">SFMC Data Loader for VS Code</div>
      <p class="project-desc">Load and export Data Extension records directly from the VS Code editor.</p>
      <div class="project-tags"><span class="project-tag">VS Code</span></div>
      <div class="project-links">
        <a class="project-link" href="https://marketplace.visualstudio.com/items?itemName=joernberkefeld.sfmc-data" target="_blank" rel="noopener">{% include icons/vscode.svg %} Marketplace</a>
        <a class="project-link" href="https://github.com/JoernBerkefeld/vscode-sfmc-dataloader" target="_blank" rel="noopener">{% include icons/github.svg %} GitHub</a>
      </div>
    </div>
    <div class="project-card">
      <div class="project-title">SFMC Data Loader App</div>
      <p class="project-desc">A cross-platform desktop application for bulk Data Extension imports and exports.</p>
      <div class="project-tags"><span class="project-tag">Desktop</span></div>
      <div class="project-links">
        <a class="project-link" href="https://github.com/JoernBerkefeld/sfmc-dataloader-app" target="_blank" rel="noopener">{% include icons/github.svg %} GitHub</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-heading">Language Intelligence &amp; AI</h2>
  <p class="section-intro">Editor smarts and AI integration for AMPscript and SSJS.</p>
  <div class="project-grid">
    <div class="project-card">
      <div class="project-title">SFMC Language for VS Code</div>
      <p class="project-desc">A VS Code extension bringing syntax highlighting, autocompletion, hover docs, and diagnostics for AMPscript, SSJS, and Handlebars to Salesforce Marketing Cloud Engagement+Next — powered by ssjs.guide.</p>
      <div class="project-tags"><span class="project-tag">VS Code</span><span class="project-tag">SFMC</span></div>
      <div class="project-links">
        <a class="project-link" href="https://marketplace.visualstudio.com/items?itemName=joernberkefeld.sfmc-language" target="_blank" rel="noopener">{% include icons/vscode.svg %} Marketplace</a>
        <a class="project-link" href="https://github.com/JoernBerkefeld/vscode-sfmc-language" target="_blank" rel="noopener">{% include icons/github.svg %} GitHub</a>
      </div>
    </div>
    <div class="project-card">
      <div class="project-title">sfmc-language-lsp</div>
      <p class="project-desc">The language server behind the VS Code extension — a reusable Language Server Protocol implementation providing AMPscript, SSJS, and Handlebars intelligence for Salesforce Marketing Cloud Engagement+Next.</p>
      <div class="project-tags"><span class="project-tag">LSP</span><span class="project-tag">SFMC</span></div>
      <div class="project-links">
        <a class="project-link" href="https://www.npmjs.com/package/sfmc-language-lsp" target="_blank" rel="noopener">{% include icons/npm.svg %} npm</a>
        <a class="project-link" href="https://github.com/JoernBerkefeld/sfmc-language-lsp" target="_blank" rel="noopener">{% include icons/github.svg %} GitHub</a>
      </div>
    </div>
    <div class="project-card">
      <div class="project-title">MCP Server for SFMC</div>
      <p class="project-desc">A Model Context Protocol server that gives AI assistants deep, accurate knowledge of AMPscript, SSJS, and Handlebars for Salesforce Marketing Cloud Engagement+Next.</p>
      <div class="project-tags"><span class="project-tag">MCP</span><span class="project-tag">AI</span></div>
      <div class="project-links">
        <a class="project-link" href="https://github.com/JoernBerkefeld/mcp-server-sfmc" target="_blank" rel="noopener">{% include icons/github.svg %} GitHub</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-heading">Linting &amp; Formatting</h2>
  <p class="section-intro">Keep SFMC and email code clean, consistent, and error-free.</p>
  <div class="project-grid">
    <div class="project-card">
      <div class="project-title">eslint-plugin-sfmc</div>
      <p class="project-desc">ESLint rules for AMPscript, SSJS, and Handlebars that catch Salesforce Marketing Cloud Engagement+Next mistakes before they ship — powered by ssjs.guide.</p>
      <div class="project-tags"><span class="project-tag">ESLint</span><span class="project-tag">SFMC</span></div>
      <div class="project-links">
        <a class="project-link" href="https://www.npmjs.com/package/eslint-plugin-sfmc" target="_blank" rel="noopener">{% include icons/npm.svg %} npm</a>
        <a class="project-link" href="https://github.com/JoernBerkefeld/eslint-plugin-sfmc" target="_blank" rel="noopener">{% include icons/github.svg %} GitHub</a>
      </div>
    </div>
    <div class="project-card">
      <div class="project-title">eslint-plugin-mso-email</div>
      <p class="project-desc">ESLint rules for HTML email — Outlook (MSO) conditional comments, VML, and layout-table pitfalls.</p>
      <div class="project-tags"><span class="project-tag">ESLint</span><span class="project-tag">Email</span></div>
      <div class="project-links">
        <a class="project-link" href="https://www.npmjs.com/package/eslint-plugin-mso-email" target="_blank" rel="noopener">{% include icons/npm.svg %} npm</a>
        <a class="project-link" href="https://github.com/JoernBerkefeld/eslint-plugin-mso-email" target="_blank" rel="noopener">{% include icons/github.svg %} GitHub</a>
      </div>
    </div>
    <div class="project-card">
      <div class="project-title">prettier-plugin-sfmc</div>
      <p class="project-desc">A Prettier plugin that formats AMPscript, SSJS, and Handlebars consistently for Salesforce Marketing Cloud Engagement+Next — powered by ssjs.guide.</p>
      <div class="project-tags"><span class="project-tag">Prettier</span><span class="project-tag">SFMC</span></div>
      <div class="project-links">
        <a class="project-link" href="https://www.npmjs.com/package/prettier-plugin-sfmc" target="_blank" rel="noopener">{% include icons/npm.svg %} npm</a>
        <a class="project-link" href="https://github.com/JoernBerkefeld/prettier-plugin-sfmc" target="_blank" rel="noopener">{% include icons/github.svg %} GitHub</a>
      </div>
    </div>
    <div class="project-card">
      <div class="project-title">eslint-config-ssjs</div>
      <span class="project-badge">Deprecated</span>
      <p class="project-desc">The original SSJS ESLint config — now superseded by eslint-plugin-sfmc.</p>
      <div class="project-tags"><span class="project-tag">ESLint</span></div>
      <div class="project-links">
        <a class="project-link" href="https://www.npmjs.com/package/eslint-config-ssjs" target="_blank" rel="noopener">{% include icons/npm.svg %} npm</a>
        <a class="project-link" href="https://github.com/JoernBerkefeld/eslint-config-ssjs" target="_blank" rel="noopener">{% include icons/github.svg %} GitHub</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-heading">Extension Packs</h2>
  <p class="section-intro">One-click bundles that install my full SFMC toolset in VS Code.</p>
  <div class="project-grid">
    <div class="project-card">
      <div class="project-title">SFMC Extension Pack</div>
      <p class="project-desc">The essential SFMC extensions bundled together for a ready-to-go Marketing Cloud development setup.</p>
      <div class="project-tags"><span class="project-tag">VS Code</span><span class="project-tag">Pack</span></div>
      <div class="project-links">
        <a class="project-link" href="https://marketplace.visualstudio.com/items?itemName=joernberkefeld.sfmc-extension-pack" target="_blank" rel="noopener">{% include icons/vscode.svg %} Marketplace</a>
        <a class="project-link" href="https://github.com/JoernBerkefeld/vscode-sfmc-extension-pack" target="_blank" rel="noopener">{% include icons/github.svg %} GitHub</a>
      </div>
    </div>
    <div class="project-card">
      <div class="project-title">SFMC Extension Pack (Expanded)</div>
      <p class="project-desc">The full toolset — every SFMC extension plus complementary editor tooling for power users.</p>
      <div class="project-tags"><span class="project-tag">VS Code</span><span class="project-tag">Pack</span></div>
      <div class="project-links">
        <a class="project-link" href="https://marketplace.visualstudio.com/items?itemName=joernberkefeld.sfmc-extension-pack-expanded" target="_blank" rel="noopener">{% include icons/vscode.svg %} Marketplace</a>
        <a class="project-link" href="https://github.com/JoernBerkefeld/vscode-sfmc-extension-pack-expanded" target="_blank" rel="noopener">{% include icons/github.svg %} GitHub</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-heading">More Tools &amp; Extensions</h2>
  <div class="project-grid">
    <div class="project-card">
      <div class="project-title">MSO Conditionals</div>
      <p class="project-desc">Hover translations and completion snippets for Outlook (MSO) conditional comments in HTML email.</p>
      <div class="project-tags"><span class="project-tag">VS Code</span><span class="project-tag">Email</span></div>
      <div class="project-links">
        <a class="project-link" href="https://marketplace.visualstudio.com/items?itemName=joernberkefeld.mso-conditionals" target="_blank" rel="noopener">{% include icons/vscode.svg %} Marketplace</a>
        <a class="project-link" href="https://github.com/JoernBerkefeld/vscode-mso-conditionals" target="_blank" rel="noopener">{% include icons/github.svg %} GitHub</a>
      </div>
    </div>
    <div class="project-card">
      <div class="project-title">Markdown Preview: Bitbucket InnerSource</div>
      <p class="project-desc">Preview Markdown in VS Code the way Bitbucket renders it, for accurate InnerSource documentation.</p>
      <div class="project-tags"><span class="project-tag">VS Code</span><span class="project-tag">Markdown</span></div>
      <div class="project-links">
        <a class="project-link" href="https://marketplace.visualstudio.com/items?itemName=joernberkefeld.markdown-preview-bitbucket-innersource" target="_blank" rel="noopener">{% include icons/vscode.svg %} Marketplace</a>
        <a class="project-link" href="https://github.com/JoernBerkefeld/markdown-preview-bitbucket-innersource" target="_blank" rel="noopener">{% include icons/github.svg %} GitHub</a>
      </div>
    </div>
    <div class="project-card">
      <div class="project-title">SFMC Boilerplate</div>
      <p class="project-desc">Automatically bundle your SSJS, AMPscript, and front-end files into deployable CloudPages and emails for Salesforce Marketing Cloud.</p>
      <div class="project-tags"><span class="project-tag">CLI</span><span class="project-tag">SFMC</span></div>
      <div class="project-links">
        <a class="project-link" href="https://www.npmjs.com/package/sfmc-boilerplate" target="_blank" rel="noopener">{% include icons/npm.svg %} npm</a>
        <a class="project-link" href="https://github.com/JoernBerkefeld/SFMC-boilerplate" target="_blank" rel="noopener">{% include icons/github.svg %} GitHub</a>
      </div>
    </div>
    <div class="project-card">
      <div class="project-title">SFMC numberToLocaleString</div>
      <p class="project-desc">An SSJS polyfill that converts numbers into localized strings with the right thousand and decimal separators for Salesforce Marketing Cloud.</p>
      <div class="project-tags"><span class="project-tag">SSJS</span><span class="project-tag">Polyfill</span></div>
      <div class="project-links">
        <a class="project-link" href="https://github.com/JoernBerkefeld/SFMC-numberToLocaleString" target="_blank" rel="noopener">{% include icons/github.svg %} GitHub</a>
      </div>
    </div>
  </div>
</section>
