# David Ledesma — Personal Site

A bilingual (EN/ES) multi-page site built with **Vite** and **vanilla
JavaScript**. No frameworks, no runtime dependencies, no animation libraries.

Positioning: cybersecurity student with a Software Engineering background,
heading toward blue team.

---

## Requirements

- **Node.js `^20.19.0 || >=22.12.0`** — enforced by Vite 8.
  Node 21 and Node 20.18-or-below are not supported.

```bash
node -v
```

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # writes to dist/
npm run preview    # serves dist/ in http://localhost:4173
```

---

## Structure

```
.
├── index.html                 # home            -> /
├── 404.html                   # error page, must stay at the root
├── vite.config.js             # BASE, partials plugin, multi-page inputs
├── public/                    # served verbatim, URLs preserved
│   ├── favicon.svg
│   ├── github.svg
│   ├── linkedin.svg
│   └── email.svg
└── src/
    ├── partials/
    │   ├── header.html        # shared by every page
    │   └── footer.html        # shared by every page
    ├── styles/
    │   ├── index.css          # imports the four below, in this order
    │   ├── tokens.css         # ← palette and fonts live here
    │   ├── base.css           # reset, typography, layout primitives
    │   ├── components.css     # header, hero, cards, icons, 404, wide layouts
    │   └── motion.css         # reveal, typewriter, reduced-motion
    ├── js/
    │   ├── i18n.js            # translations, detection, language toggle
    │   └── motion.js          # scroll reveal, typewriter
    └── main.js                # shared entry: imports CSS, boots modules
```

CSS and JS are split for authoring only — Vite bundles them into single files
at build time, so there is no runtime cost.

**Pages are directories, not files.** `projects.html` was moved to
`projects/index.html` so the URL is `/projects/` rather than
`/projects.html`. This is what forces the absolute base described below.

---

## Shared header and footer

Both live in `src/partials/` as plain HTML and are inlined at build time:

```html
<!-- @include header.html -->
```

Handled by a small Vite plugin in `vite.config.js` (no dependency). It runs in
dev and in the build, so the markup is present in the served document — good
for crawlers, and no flash of unstyled content. Editing a partial triggers a
browser reload.

**Order matters inside the plugin.** Partials are inlined *first*, then
`{{BASE}}` is substituted across the whole document. Reversing those two steps
leaves the placeholders inside partials untouched — the icons silently break.

---

## Adding a page

1. **Create a directory** with an `index.html` — `contact/index.html`, not
   `contact.html`.
2. **Copy `projects/index.html`** as a starting point. Give `<body>` a name:
   `<body data-page="contact">`.
3. **Register it** in `vite.config.js` or it won't be built:

   ```js
   input: {
     main: resolve(root, 'index.html'),
     projects: resolve(root, 'projects/index.html'),
     notFound: resolve(root, '404.html'),
     contact: resolve(root, 'contact/index.html'),   // ← new line
   },
   ```

4. **Add its text** to both languages in `src/js/i18n.js`:

   ```js
   'page.contact.title': 'Contact — David Ledesma',
   'page.contact.description': 'How to reach David Ledesma.',
   'nav.contact': 'Contact',   // if it goes in the nav
   ```

   Plus the Spanish equivalents. The title and description are looked up
   automatically from `data-page`.

5. **Add it to the nav** in `src/partials/header.html`:

   ```html
   <a href="{{BASE}}contact/" data-i18n="nav.contact">Contact</a>
   ```

Header, footer, styles, language switching, scroll reveal and the
`aria-current` marker all come for free.

---

## Changing the palette

Edit `src/styles/tokens.css` only. Two tokens define the character:

- `--bg` — page background
- `--accent` — links, the role line, chips, the typewriter caret

Everything else is support: `--surface` is `--bg` lightened ~7%, `--border` a
step further, `--text` near-white, `--muted` a desaturated mid-tone.

**Two things that will silently break if you forget them:**

1. **`--accent-soft` is a literal rgba, not derived.** Change `--accent` and
   you must regenerate it (`rgba(r, g, b, 0.12)`), or the panel gradient and
   toggle hover drift out of sync.
2. **Light mode needs a darker accent than dark mode.** A colour that reads
   well on near-black is usually invisible on near-white. The two accents are
   set independently for this reason.

To preview light mode without changing your OS setting: devtools → Rendering →
*Emulate CSS media feature `prefers-color-scheme`*.

---

## Editing text

All translatable strings are in the `translations` object at the top of
`src/js/i18n.js`, keyed by `data-i18n` attributes in the HTML. Change a
sentence → edit both the `en` and `es` entries.

Two attribute variants:

| Attribute | Applies to |
|---|---|
| `data-i18n="key"` | `element.textContent` |
| `data-i18n-aria="key"` | `element[aria-label]` — for icon-only links |

**Never put `data-i18n` on an element that contains an icon.** Applying
`textContent` deletes its children. Wrap the text in a `<span>`:

```html
<a class="btn" href="{{BASE}}...">
  <img class="btn-icon" src="{{BASE}}github.svg" alt="" aria-hidden="true" />
  <span>GitHub</span>
</a>
```

Proper nouns (GitHub, LinkedIn, company and university names) are not
translated by design. Neither is *blue team* in the Spanish version — it is the
term used in Spanish security circles and in job postings.

---

## Icons

`public/github.svg`, `public/linkedin.svg` and `public/email.svg` are expected
to exist; they are not generated by this project.

The layout assumes **monochrome logos**. `<img>` cannot inherit
`currentColor`, so black logos are invisible on the dark background. This is
handled by a token in `tokens.css`:

```css
:root                        { --icon-filter: invert(1); }
@media (prefers-color-scheme: light) {
  :root                      { --icon-filter: none; }
}
```

Applied in `components.css` via `filter: var(--icon-filter)` on `.btn-icon`
and `.footer-links img`.

If a logo carries real colour (LinkedIn's blue, say), inverting produces its
complement and will look wrong. Either supply a monochrome version or switch
that icon to a CSS mask.

---

## Accessibility notes

- `<html lang>` is updated on every language switch — a **WCAG 3.1.1**
  requirement, since screen readers pick pronunciation from it.
- Spanish/Catalan proper nouns carry their own `lang` attribute (`lang="es"`
  for *Universidad de La Rioja* and *Logroño*, `lang="ca"` for *Universitat
  Politècnica de València*). This satisfies **WCAG 3.1.2**.
- Icon-only footer links carry `aria-label`, translated via `data-i18n-aria`.
  Without it they are announced as bare "link".
- Decorative icons use `alt=""` + `aria-hidden="true"` so screen readers do not
  announce "GitHub GitHub".
- The typewriter heading keeps its text in the markup and carries an
  `aria-label` on the `<h1>`, so the name is read once rather than per
  keystroke.
- All motion is opacity + small vertical offsets. No large-scale transforms —
  those are the vestibular triggers.
- `@media (prefers-reduced-motion: reduce)` disables animation, transitions,
  the caret and the typewriter. It is the **last** block in `motion.css`: at
  equal specificity, later source order wins. Moving it earlier silently
  breaks the override.

---