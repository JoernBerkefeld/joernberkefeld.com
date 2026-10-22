'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('CMS project card separates released support from unreleased capabilities', () => {
    const page = fs.readFileSync(path.join(__dirname, '..', 'index.md'), 'utf8');
    const card = page
        .split('<div class="project-title">sf-plugin-cms</div>')[1]
        .split('<div class="project-tags">')[0];
    assert.match(card, /Email, Email Template, Image, Document and Audio/);
    assert.match(card, /version 0\.20\.0/);
    assert.match(card, /Deploy executes by default; use --preview for read-only preflight/);
    assert.match(card, /Unreleased 0\.21\.0 adds bounded five-family metadata publish\/unpublish/);
    assert.match(card, /qualification limits/);
    assert.match(card, /not a complete CMS backup or restore tool/);
    assert.doesNotMatch(
        card,
        /workspace export|workspace import|0\.12\.0|Phase 3|dry-run-default Draft creation/,
    );
});
