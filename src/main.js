/* ------------------------------------------------------------------ *
 * Shared entry point for every page.
 *
 * Each page loads this same module. Vite bundles it once and shares
 * the chunk across pages, so a second page costs almost nothing.
 *
 * Page-specific behaviour? Add src/pages/<name>.js and reference it
 * with an extra <script type="module"> in that page's HTML.
 * ------------------------------------------------------------------ */

import './styles/index.css'

import { initI18n } from './js/i18n.js'
import { initReveal, initTypewriter } from './js/motion.js'

initI18n()
initReveal()
initTypewriter()

/* --- Footer year --------------------------------------------------- */

const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = String(new Date().getFullYear())

/* --- Mark the current page in the nav ------------------------------ */

const currentPage = window.location.pathname.split('/').pop() || 'index.html'

document.querySelectorAll('.site-nav a').forEach((link) => {
  const target = (link.getAttribute('href') || '')
    .replace(/^\.\//, '')
    .split('#')[0]

  if (target === currentPage) link.setAttribute('aria-current', 'page')
})
