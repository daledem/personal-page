import './style.css'

/* ------------------------------------------------------------------ *
 * 1. Translations
 * ------------------------------------------------------------------ */

const translations = {
  en: {
    metaTitle: 'David Ledesma — Network Security Engineer',
    metaDescription:
      'Junior ICT Network Security Engineer with a Software Engineering background. SIEM monitoring, zero-trust IAM and network segmentation.',
    switchLabel: 'Switch to Spanish',

    'hero.location': 'Valencia, Spain',
    'hero.role': 'Junior ICT Network Security Engineer',
    'hero.pitch':
      'I sit between software engineering and security operations — building systems, then hardening them.',
    'hero.cta.contact': 'Get in touch',

    'about.title': 'About',
    'about.body':
      "I hold a degree in Software Engineering and I am currently studying a Master's in Cybersecurity and Cyberintelligence. My day-to-day work has been SIEM monitoring, zero-trust identity in Active Directory and network segmentation — the practical side of keeping an infrastructure trustworthy.",
    'about.body2':
      'Outside of work I run my own hardened lab: self-hosted services, a full SIEM stack and automated deployment, because I would rather learn a system by breaking and rebuilding it.',

    'experience.title': 'Experience',
    'experience.ssh.role': 'Junior ICT Network Security Engineer',
    'experience.ssh.period': '2024 — 2025',
    'experience.ssh.b1': 'Detected anomalies through SIEM telemetry to pre-empt breaches.',
    'experience.ssh.b2':
      'Enforced zero-trust IAM in Active Directory: MFA, least privilege, orphaned account removal.',
    'experience.ssh.b3':
      'Segmented traffic with VLANs, port security and strict ACL enforcement.',
    'experience.ssh.b4':
      'Documented vulnerabilities and asset lifecycles to speed up incident response.',
    'experience.dialnet.role': 'ICT Network Technician (Internship)',
    'experience.dialnet.period': '2023',
    'experience.dialnet.b1':
      'Monitored dashboards to detect and resolve network outages before users reported them.',
    'experience.dialnet.b2':
      'Verified, labelled and terminated copper and fibre cabling in server racks.',
    'experience.dialnet.b3':
      'Configured VLANs, switch ports and IP assignments on routers and switches.',
    'experience.dialnet.b4':
      'Maintained equipment inventories and documented recurring failures.',

    'education.title': 'Education',
    'education.upv.degree': 'MSc Cybersecurity and Cyberintelligence',
    'education.upv.period': '2025 — present',
    'education.upv.note':
      'Threat hunting, incident response, digital forensics, pentesting and OSINT; cryptography, malware analysis; SIEM, SOAR, EDR, IDS/IPS; GDPR, ISO/IEC 27001, NIS2 and ENS.',
    'education.unir.degree': 'BSc Software Engineering',
    'education.unir.period': '2021 — 2025',
    'education.unir.note': 'Software and applications development and analysis.',

    'lab.title': 'Self-hosted lab',
    'lab.intro':
      'A personal infrastructure I built and hardened end to end — the project I use to test everything I learn.',
    'lab.b1': 'OpenVPN and Pi-hole for secure remote access and internal service discovery.',
    'lab.b2':
      'Docker containers on Debian hosting GitLab with CI/CD and a private container registry.',
    'lab.b3': 'Elastic SIEM stack for real-time log aggregation and file integrity monitoring.',
    'lab.b4': "UFW firewalls, Let's Encrypt TLS and VLAN segmentation.",
    'lab.b5': 'Bash automation for reproducible deployment and fast disaster recovery.',

    'skills.title': 'Toolkit',
    'skills.security': 'Security',
    'skills.infra': 'Infrastructure',
    'skills.dev': 'Development',

    'footer.title': "Let's talk",
    'footer.body': 'Open to junior security engineering roles and internships.',
    'footer.email': 'Email',
    'footer.aria.email': 'Email David Ledesma',
    'footer.aria.github': 'GitHub profile',
    'footer.aria.linkedin': 'LinkedIn profile',
  },

  es: {
    metaTitle: 'David Ledesma — Ingeniero de Seguridad de Redes',
    metaDescription:
      'Ingeniero junior de seguridad de redes TIC con formación en Ingeniería del Software. Monitorización SIEM, IAM de confianza cero y segmentación de redes.',
    switchLabel: 'Cambiar a inglés',

    'hero.location': 'Valencia, España',
    'hero.role': 'Ingeniero Junior de Seguridad de Redes TIC',
    'hero.pitch':
      'Me muevo entre la ingeniería del software y las operaciones de seguridad: construyo sistemas y después los endurezco.',
    'hero.cta.contact': 'Contacto',

    'about.title': 'Sobre mí',
    'about.body':
      'Soy graduado en Ingeniería del Software y actualmente curso un Máster en Ciberseguridad y Ciberinteligencia. Mi trabajo diario ha sido la monitorización SIEM, la identidad de confianza cero en Active Directory y la segmentación de redes: la parte práctica de mantener una infraestructura fiable.',
    'about.body2':
      'Fuera del trabajo mantengo mi propio laboratorio endurecido: servicios autoalojados, una pila SIEM completa y despliegue automatizado, porque prefiero aprender un sistema rompiéndolo y reconstruyéndolo.',

    'experience.title': 'Experiencia',
    'experience.ssh.role': 'Ingeniero Junior de Seguridad de Redes TIC',
    'experience.ssh.period': '2024 — 2025',
    'experience.ssh.b1':
      'Detección de anomalías mediante telemetría SIEM para anticipar brechas de seguridad.',
    'experience.ssh.b2':
      'Aplicación de IAM de confianza cero en Active Directory: MFA, mínimo privilegio y eliminación de cuentas huérfanas.',
    'experience.ssh.b3':
      'Segmentación del tráfico mediante VLANs, seguridad de puertos y aplicación estricta de ACL.',
    'experience.ssh.b4':
      'Documentación de vulnerabilidades y ciclos de vida de activos para acelerar la respuesta a incidentes.',
    'experience.dialnet.role': 'Técnico de Redes TIC (Prácticas)',
    'experience.dialnet.period': '2023',
    'experience.dialnet.b1':
      'Monitorización de paneles para detectar y resolver cortes de red antes de que los usuarios los reportaran.',
    'experience.dialnet.b2':
      'Verificación, etiquetado y terminación de cableado de cobre y fibra óptica en racks de servidores.',
    'experience.dialnet.b3':
      'Configuración de VLANs, puertos de switch y asignación de direcciones IP en routers y switches.',
    'experience.dialnet.b4':
      'Mantenimiento de inventarios de equipos y documentación de fallos recurrentes.',

    'education.title': 'Formación',
    'education.upv.degree': 'Máster en Ciberseguridad y Ciberinteligencia',
    'education.upv.period': '2025 — actualidad',
    'education.upv.note':
      'Threat hunting, respuesta a incidentes, informática forense, pentesting y OSINT; criptografía, análisis de malware; SIEM, SOAR, EDR, IDS/IPS; RGPD, ISO/IEC 27001, NIS2 y ENS.',
    'education.unir.degree': 'Grado en Ingeniería del Software',
    'education.unir.period': '2021 — 2025',
    'education.unir.note': 'Desarrollo y análisis de software y aplicaciones.',

    'lab.title': 'Laboratorio autoalojado',
    'lab.intro':
      'Una infraestructura personal que construí y endurecí de principio a fin: el proyecto con el que pruebo todo lo que aprendo.',
    'lab.b1':
      'OpenVPN y Pi-hole para acceso remoto seguro y descubrimiento de servicios internos.',
    'lab.b2':
      'Contenedores Docker sobre Debian alojando GitLab con CI/CD y un registro de contenedores privado.',
    'lab.b3':
      'Pila SIEM Elastic para agregación de logs en tiempo real y monitorización de integridad de ficheros.',
    'lab.b4': 'Cortafuegos UFW, TLS con Let\u2019s Encrypt y segmentación por VLAN.',
    'lab.b5':
      'Automatización con Bash para un despliegue reproducible y una recuperación rápida ante desastres.',

    'skills.title': 'Herramientas',
    'skills.security': 'Seguridad',
    'skills.infra': 'Infraestructura',
    'skills.dev': 'Desarrollo',

    'footer.title': 'Hablemos',
    'footer.body': 'Abierto a puestos junior de ingeniería de seguridad y a prácticas.',
    'footer.email': 'Correo',
    'footer.aria.email': 'Enviar correo a David Ledesma',
    'footer.aria.github': 'Perfil de GitHub',
    'footer.aria.linkedin': 'Perfil de LinkedIn',
  },
}

/* ------------------------------------------------------------------ *
 * 2. Language detection
 *
 * Order of precedence:
 *   1. Explicit choice the user made before (localStorage)
 *   2. navigator.languages — any tag whose primary subtag is "es"
 *   3. English
 *
 * Matching the primary subtag catches es / es-ES / es-419 alike, and
 * lowercasing handles legacy iOS Safari returning "es-es".
 * ------------------------------------------------------------------ */

const STORAGE_KEY = 'dl-lang'
const SUPPORTED = ['en', 'es']

function readStoredLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return SUPPORTED.includes(stored) ? stored : null
  } catch {
    // Storage can throw in private modes / when disabled — detection still works.
    return null
  }
}

function storeLanguage(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    /* non-fatal */
  }
}

function detectLanguage() {
  const stored = readStoredLanguage()
  if (stored) return stored

  const tags =
    Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language || '']

  for (const tag of tags) {
    if (String(tag).toLowerCase().split('-')[0] === 'es') return 'es'
  }

  return 'en'
}

/* ------------------------------------------------------------------ *
 * 3. Applying a language
 * ------------------------------------------------------------------ */

function applyLanguage(lang) {
  const dict = translations[lang]
  if (!dict) return

  // WCAG 3.1.1 — the page language must be programmatically determinable.
  document.documentElement.lang = lang
  document.documentElement.dataset.lang = lang

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = dict[el.dataset.i18n]
    if (typeof value === 'string') el.textContent = value
  })

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const value = dict[el.dataset.i18nAria]
    if (typeof value === 'string') el.setAttribute('aria-label', value)
  })

  document.title = dict.metaTitle

  const description = document.querySelector('meta[name="description"]')
  if (description) description.setAttribute('content', dict.metaDescription)

  const toggle = document.getElementById('lang-toggle')
  if (toggle) {
    const target = lang === 'es' ? 'en' : 'es'
    toggle.textContent = target.toUpperCase()
    toggle.lang = target
    toggle.setAttribute('aria-label', dict.switchLabel)
  }
}

let currentLanguage = detectLanguage()
applyLanguage(currentLanguage)

const toggleButton = document.getElementById('lang-toggle')
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es'
    storeLanguage(currentLanguage)
    applyLanguage(currentLanguage)
  })
}

// The user may change their OS/browser language mid-session. Only follow that
// if they have not expressed an explicit preference via the toggle.
window.addEventListener('languagechange', () => {
  if (readStoredLanguage()) return
  const next = detectLanguage()
  if (next !== currentLanguage) {
    currentLanguage = next
    applyLanguage(next)
  }
})

/* ------------------------------------------------------------------ *
 * 4. Scroll reveal
 *
 * One IntersectionObserver for every .reveal element. Each target is
 * unobserved after its first reveal so scrolling back does not re-trigger.
 * ------------------------------------------------------------------ */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const revealTargets = document.querySelectorAll('.reveal')

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealTargets.forEach((el) => el.classList.add('is-visible'))
} else {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        obs.unobserve(entry.target)
      })
    },
    // Fire slightly before the element is fully in view.
    { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0 }
  )

  revealTargets.forEach((el) => observer.observe(el))
}

/* ------------------------------------------------------------------ *
 * 5. Footer year
 * ------------------------------------------------------------------ */

const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = String(new Date().getFullYear())


/* ------------------------------------------------------------------ *
 * 6. Typewriter name
 * ------------------------------------------------------------------ */

const typewriter = document.querySelector('.typewriter')

if (typewriter) {
  const fullText = (typewriter.dataset.text || typewriter.textContent).trim()

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    typewriter.textContent = ''

    const START_DELAY = 240
    const CHAR_DELAY = 55

    setTimeout(() => {
      let index = 0
      const timer = setInterval(() => {
        typewriter.textContent = fullText.slice(0, ++index)
        if (index >= fullText.length) clearInterval(timer)
      }, CHAR_DELAY)
    }, START_DELAY)
  }
}
