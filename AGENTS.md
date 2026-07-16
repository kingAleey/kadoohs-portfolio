# AGENTS.md

## Architecture

Static site — plain HTML, CSS, and JavaScript, no build step or framework:

- `index.html`, `work.html`, `resume.html`, `contact.html` — one file per page, each a complete standalone document with its own `<head>`, header, main content, and footer
- `styles.css` — single shared stylesheet for all pages
- `script.js` — shared logic (highlights the active nav link, fills in the footer year)
- `contact.html` — contains its own inline `<script>` for form submission (AJAX POST to Netlify Forms) and toggling the success state
- `favicon.ico` — site favicon

## Conventions

- Content that used to come from markdown collections (jobs, education, projects) is now hand-written directly into `resume.html` and `work.html` as static markup. To update a job, project, or education entry, edit the corresponding block in that file directly.
- Navigation, header, and footer markup is duplicated across the four HTML files (no templating layer exists). When changing the nav or footer, update all four files.
- Icons are inline SVGs matching the Lucide icon set used in the original React version, so no icon library dependency is needed.

## Netlify

- `netlify.toml` publishes the repo root as-is (`publish = "."`) since there's no build step.
- The contact form uses Netlify Forms (`data-netlify="true"` on the `<form>` in `contact.html`). Because the form lives directly in static HTML (not injected client-side), Netlify's build-time form detection can parse it without needing a separate skeleton file.
