/* ------------------------------------------------------------------ *
 * Motion
 *
 * Both initialisers are safe to call on any page: they no-op when
 * their target elements are absent, and they respect the user's
 * reduced-motion preference.
 * ------------------------------------------------------------------ */

/* --- Scroll reveal ------------------------------------------------ */

export function initReveal() {
  const targets = document.querySelectorAll('.reveal')
  if (!targets.length) return

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        // Unobserve after the first reveal so scrolling back does not
        // re-trigger it.
        obs.unobserve(entry.target)
      })
    },
    // Fire slightly before the element is fully in view.
    { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0 }
  )

  targets.forEach((el) => observer.observe(el))
}

/* --- Typewriter ---------------------------------------------------- *
 *
 * The heading keeps its real text in the markup, so with JavaScript
 * disabled — or with reduced motion — the name is simply there. The
 * h1 carries an aria-label so assistive tech reads it once instead of
 * announcing every keystroke.
 * ------------------------------------------------------------------ */

export function initTypewriter() {
  const target = document.querySelector('.typewriter')
  if (!target) return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const fullText = (target.dataset.text || target.textContent).trim()
  if (!fullText) return

  const START_DELAY = 240
  const CHAR_DELAY = 55

  target.textContent = ''

  setTimeout(() => {
    let index = 0
    const timer = setInterval(() => {
      target.textContent = fullText.slice(0, ++index)
      if (index >= fullText.length) clearInterval(timer)
    }, CHAR_DELAY)
  }, START_DELAY)
}
