/* ------------------------------------------------------------------ *
 * Table of contents
 *
 * Builds a nav from the <h2>s in .article, assigns stable ids, and
 * highlights the section currently in view.
 *
 * Translation: each link inherits its heading's data-i18n key, so the
 * existing i18n pass translates the heading and its TOC entry together
 * from a single dictionary entry. There is no separate sync step.
 *
 * Ids are derived ONCE, from the initial heading text, then frozen —
 * re-deriving them per language would break every existing anchor.
 * ------------------------------------------------------------------ */

const ACTIVE_CLASS = 'is-active'

function slugify(text) {
  return text
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // "Explotación" -> "explotacion"
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function initToc() {
  const toc = document.querySelector('.toc')
  const article = document.querySelector('.article')
  if (!toc || !article) return

  const headings = Array.from(article.querySelectorAll('h2'))

  // One section is not a table of contents.
  if (headings.length < 2) {
    toc.remove()
    return
  }

  const list = toc.querySelector('.toc-list')
  if (!list) {
    console.warn('[toc] .toc-list not found inside .toc')
    return
  }

  const links = new Map()
  const usedIds = new Set()

  headings.forEach((heading, index) => {
    if (!heading.id) {
      const base = slugify(heading.textContent) || `section-${index + 1}`
      let id = base
      let suffix = 2
      while (usedIds.has(id)) id = `${base}-${suffix++}`
      heading.id = id
    }
    usedIds.add(heading.id)

    const item = document.createElement('li')
    const link = document.createElement('a')
    link.className = 'toc-link'
    link.href = `#${heading.id}`

    // Same translation key as the heading, so both stay in sync via the
    // normal translation pass. Headings without a key simply don't translate.
    if (heading.dataset.i18n) {
      link.dataset.i18n = heading.dataset.i18n
    }

    link.textContent = heading.textContent.trim()
    item.append(link)
    list.append(item)

    links.set(heading.id, link)
  })

  /* --- Scroll spy -------------------------------------------------- */

  const setActive = (id) => {
    links.forEach((link, key) => {
      const active = key === id
      link.classList.toggle(ACTIVE_CLASS, active)
      if (active) link.setAttribute('aria-current', 'location')
      else link.removeAttribute('aria-current')
    })
  }

  const inBand = new Set()

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) inBand.add(entry.target.id)
        else inBand.delete(entry.target.id)
      }

      // Topmost heading currently inside the band wins.
      if (inBand.size > 0) {
        const first = headings.find((h) => inBand.has(h.id))
        if (first) setActive(first.id)
      }
    },
    { rootMargin: '-84px 0px -60% 0px', threshold: 0 }
  )

  headings.forEach((heading) => observer.observe(heading))

  /* Two states the observer cannot express: very top, very bottom. */
  const handleScroll = () => {
    if (window.scrollY < 120) {
      setActive(null)
      return
    }

    const atBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 4

    if (atBottom) setActive(headings[headings.length - 1].id)
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
}