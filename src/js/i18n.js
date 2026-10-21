/* ------------------------------------------------------------------ *
 * Internationalisation
 *
 * Two languages, detected from the browser and overridable by a
 * visible toggle. Strings live in the `translations` object below and
 * are applied to elements carrying a data-i18n key.
 *
 *   data-i18n="key"        -> element.textContent
 *   data-i18n-aria="key"   -> element aria-label
 *
 * Never put data-i18n on an element that contains an icon: applying
 * textContent would delete its children. Wrap the text in a <span>.
 *
 * Adding a page? Give <body> a data-page value and add matching
 * `page.<name>.title` and `page.<name>.description` keys.
 * ------------------------------------------------------------------ */

const translations = {
  en: {
    // Header
    'nav.label': 'Main',
    'nav.home': 'Home',
    'nav.projects': 'Projects',

    switchLabel: 'Switch to Spanish',


    // Main Page
    'page.home.title': 'David Ledesma',
    'page.home.description':
      'Cybersecurity student with a Software Engineering background, focused on blue team: detection, monitoring and incident response.',
    'page.projects.title': 'Projects — David Ledesma',
    'page.projects.description':
      'Hands-on infrastructure and security work by David Ledesma.',

    skip: 'Skip to content',

    'hero.location': 'Valencia, Spain',
    'hero.role': 'Cibersecurity Student',
    'hero.pitch':
      "Cybersecurity student with a Software Engineering background, moving toward blue team: detection, monitoring, incident response. I'm looking for a first role where I can learn from people who do this every day.",
    'hero.cta.contact': 'Get in touch',

    'about.title': 'About',
    'about.body':
      "I'm finishing a Master's in Cybersecurity and Cyberintelligence, after a degree in Software Engineering. What draws me to blue team is the detective work: reading telemetry, spotting the anomaly that doesn't belong, and working out why. My placements gave me a first taste of it (SIEM monitoring, zero-trust identity in Active Directory, network segmentation) and that's the direction I want to keep going.",
    'about.body2':
      "Outside of my studies I run a hardened lab of my own: self-hosted services, a full SIEM stack, automated deployment. I'd rather learn a system by breaking it and rebuilding it than by reading about it.",

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

    'projects.kicker': 'Work',
    'projects.title': 'Projects',
    'projects.pitch':
      'Things I have built and broken. Mostly infrastructure, mostly on purpose.',
    'projects.lab.title': 'Self-hosted lab',
    'projects.lab.role': 'Hardened self-hosted infrastructure',
    'projects.lab.org': 'Personal project',
    'projects.lab.period': 'Ongoing',
    'projects.lab.b1':
      'OpenVPN and Pi-hole for secure remote access and internal service discovery.',
    'projects.lab.b2':
      'Docker containers on Debian hosting GitLab with CI/CD and a private container registry.',
    'projects.lab.b3':
      'Elastic SIEM stack for real-time log aggregation, file integrity monitoring and centralised threat detection.',
    'projects.lab.b4':
      "Hardening via UFW firewalls, Let's Encrypt TLS and VLAN segmentation.",
    'projects.lab.b5':
      'Bash automation for reproducible deployment and rapid disaster recovery.',
    'projects.more.title': 'More',
    'projects.more.body':
      'This page is a starter — add a card per project as you build them. The header and footer are included from shared partials, so a new page only needs its own content.',

    // Footer
    'footer.title': "Let's talk",
    'footer.body': 'Open to junior security engineering roles and internships.',
    'footer.aria.email': 'Email David Ledesma',
    'footer.aria.github': 'GitHub profile',
    'footer.aria.linkedin': 'LinkedIn profile',

    // 404 page
    'page.404.title': 'Page not found',
    'page.404.description': 'That page does not exist.',
    '404.title': 'Page not found',
    '404.body': 'The link may be broken, or the page may have moved.',
    '404.cta': 'Back to home',

    // Write Ups index
    'page.writeups.title': 'Writeups',
    'page.writeups.description':
      'Notes from CTFs and labs',

    'writeups.kicker': 'CTF & labs',
    'writeups.title': 'Writeups',
    'writeups.pitch':
      'Notes from CTFs and labs I work through',
    'writeups.listTitle': 'Published',
    'writeups.empty': 'No write-ups published yet.',
    'writeups.back': 'Writeups',


    'writeups.toc': 'On this page',
  },

  es: {
    // Header
    'nav.label': 'Principal',
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',

    switchLabel: 'Cambiar a inglés',

    // Main Page
    'page.home.title': 'David Ledesma',
    'page.home.description':
      'Estudiante de ciberseguridad con formación en Ingeniería del Software, orientado al blue team: detección, monitorización y respuesta a incidentes.',
    'page.projects.title': 'Proyectos',
    'page.projects.description':
      'Trabajo práctico de infraestructura y seguridad de David Ledesma.',

    skip: 'Saltar al contenido',

    'hero.location': 'Valencia, España',
    'hero.role': 'Estudiante de ciberseguridad',
    'hero.pitch':
      'Estudiante de ciberseguridad con formación en Ingeniería del Software, orientado al blue team: detección, monitorización y respuesta a incidentes. Busco un primer puesto donde aprender de quien lo hace a diario.',
    'hero.cta.contact': 'Contacto',

    'about.title': 'Sobre mí',
    'about.body':
      'Estoy terminando un Máster en Ciberseguridad y Ciberinteligencia, después del Grado en Ingeniería del Software. Lo que me atrae del blue team es el trabajo de detective: leer telemetría, detectar la anomalía que no encaja y entender por qué. Mis prácticas me dieron un primer contacto (monitorización SIEM, identidad de confianza cero en Active Directory, segmentación de redes) y es la dirección en la que quiero seguir.',
    'about.body2':
      'Fuera de los estudios mantengo un laboratorio endurecido propio: servicios autoalojados, una pila SIEM completa, despliegue automatizado. Prefiero aprender un sistema rompiéndolo y reconstruyéndolo que leyéndolo.',

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

    'projects.kicker': 'Trabajo',
    'projects.title': 'Proyectos',
    'projects.pitch':
      'Cosas que he construido y roto. Sobre todo infraestructura, y casi siempre a propósito.',
    'projects.lab.title': 'Laboratorio autoalojado',
    'projects.lab.role': 'Infraestructura autoalojada endurecida',
    'projects.lab.org': 'Proyecto personal',
    'projects.lab.period': 'En curso',
    'projects.lab.b1':
      'OpenVPN y Pi-hole para acceso remoto seguro y descubrimiento de servicios internos.',
    'projects.lab.b2':
      'Contenedores Docker sobre Debian alojando GitLab con CI/CD y un registro de contenedores privado.',
    'projects.lab.b3':
      'Pila SIEM Elastic para agregación de logs en tiempo real, monitorización de integridad de ficheros y detección centralizada de amenazas.',
    'projects.lab.b4':
      'Endurecimiento mediante cortafuegos UFW, TLS con Let\u2019s Encrypt y segmentación por VLAN.',
    'projects.lab.b5':
      'Automatización con Bash para un despliegue reproducible y una recuperación rápida ante desastres.',
    'projects.more.title': 'Más',
    'projects.more.body':
      'Esta página es un punto de partida: añade una tarjeta por cada proyecto según los vayas construyendo. La cabecera y el pie se incluyen desde parciales compartidos, así que una página nueva solo necesita su propio contenido.',

    // Footer
    'footer.title': 'Hablemos',
    'footer.body': 'Abierto a puestos junior de ingeniería de seguridad y a prácticas.',
    'footer.aria.email': 'Enviar correo a David Ledesma',
    'footer.aria.github': 'Perfil de GitHub',
    'footer.aria.linkedin': 'Perfil de LinkedIn',

    // 404 page
    'page.404.title': 'Página no encontrada',
    'page.404.description': 'Esa página no existe.',
    '404.title': 'Página no encontrada',
    '404.body': 'Puede que el enlace esté roto o que la página se haya movido.',
    '404.cta': 'Volver al inicio',

    // Write Ups index
    'page.writeups.title': 'Writeups',
    'page.writeups.description':
      'Notas de CTF y laboratorios.',

    'writeups.kicker': 'CTF y labs',
    'writeups.title': 'Writeups',
    'writeups.pitch':
      'Notas de los CTF y laboratorios que voy resolviendo.',
    'writeups.listTitle': 'Publicados',
    'writeups.empty': 'Todavía no hay write-ups publicados.',
    'writeups.back': 'Writeups',


    'writeups.toc': 'En esta página',
  },
}

/* ------------------------------------------------------------------ *
 * Detection
 *
 * Precedence:
 *   1. A choice the visitor made before (localStorage)
 *   2. navigator.languages — any tag whose primary subtag is "es"
 *   3. English
 *
 * Matching the primary subtag catches es / es-ES / es-419 alike, and
 * lowercasing handles legacy iOS Safari returning "es-es".
 *
 * The array may be truncated to one entry in Safari and Chrome
 * incognito for fingerprinting reasons, which is why the toggle exists.
 * ------------------------------------------------------------------ */

const STORAGE_KEY = 'dl-lang'
const SUPPORTED = ['en', 'es']

function readStoredLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return SUPPORTED.includes(stored) ? stored : null
  } catch {
    return null
  }
}

function storeLanguage(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    /* storage may be unavailable; detection still works */
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
 * Application
 * ------------------------------------------------------------------ */

let currentLanguage = detectLanguage()

export function applyLanguage(lang) {
  const dict = translations[lang]
  if (!dict) return

  // WCAG 3.1.1 — the page language must be programmatically determinable.
  document.documentElement.lang = lang
  document.documentElement.dataset.lang = lang

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    // Remember the markup's own text the first time we see this element.
    if (!el.dataset.i18nOriginal) {
      el.dataset.i18nOriginal = el.textContent
    }
    const value = dict[el.dataset.i18n]
    el.textContent = typeof value === 'string' ? value : el.dataset.i18nOriginal
  })

  // Icon-only links have no text to translate, so their accessible name
  // is translated via aria-label instead.
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const value = dict[el.dataset.i18nAria]
    if (typeof value === 'string') el.setAttribute('aria-label', value)
  })

  const page = document.body.dataset.page || 'home'
  const title = dict[`page.${page}.title`]
  const description = dict[`page.${page}.description`]

  if (title) document.title = title

  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription && description) metaDescription.setAttribute('content', description)

  const toggle = document.getElementById('lang-toggle')
  if (toggle) {
    const target = lang === 'es' ? 'en' : 'es'
    toggle.textContent = target.toUpperCase()
    toggle.lang = target
    toggle.setAttribute('aria-label', dict.switchLabel)
  }
}

export function initI18n() {
  applyLanguage(currentLanguage)

  const toggle = document.getElementById('lang-toggle')

  if (toggle) {
    toggle.addEventListener('click', () => {
      currentLanguage = currentLanguage === 'es' ? 'en' : 'es'
      storeLanguage(currentLanguage)
      applyLanguage(currentLanguage)
    })
  }

  // The visitor may change their OS language mid-session. Only follow
  // that if they have not expressed an explicit preference.
  window.addEventListener('languagechange', () => {
    if (readStoredLanguage()) return
    const next = detectLanguage()
    if (next !== currentLanguage) {
      currentLanguage = next
      applyLanguage(next)
    }
  })
}
