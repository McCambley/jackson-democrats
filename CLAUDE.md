# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for the Jackson Democrats (a local Democratic caucus in Jackson, New Hampshire), hosted on GitHub Pages at `jacksondemocrats.org`. No build tools, no package manager, no frameworks — pure HTML/CSS/JS.

## Development

Open any `.html` file directly in a browser, or serve with any static HTTP server:

```bash
python3 -m http.server 8000
```

Prettier is configured (`.prettierrc`) for formatting, but there are no npm scripts — run it directly if installed.

## Architecture

### Content Pattern

Content for the **minutes** and **representatives** pages is stored as Markdown strings embedded directly in JavaScript files (`/minutes/index.js`, `/representatives/index.js`). At page load, [Marked.js](https://cdn.jsdelivr.net/npm/marked/marked.min.js) (CDN) converts the Markdown to HTML and injects it into a `#content` placeholder in the corresponding `index.html`.

To add new meeting minutes or update representative info, edit the markdown string in the relevant `.js` file.

### Styling

All styles live in `/style.css`. The layout uses a centered container (`max-width: ~420px`), flexbox for buttons, and a grid for the CTA section. Color palette: navy `#2a3d6c`, light gray `#f7f9fa`. Font: Roboto (Google Fonts CDN).

### Pages

- `/` — Landing page with meeting info, newsletter signup, and voting resource links
- `/minutes/` — Meeting minutes rendered from Markdown
- `/representatives/` — Rep contact info and district maps rendered from Markdown

District map images are in `/assets/`.
