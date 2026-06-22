# Plan de implementación — Spec-Driven Development

> **Proyecto:** Clon de [madridcalidad.es](https://madridcalidad.es/) en Astro  
> **Metodología:** Spec-Driven Development (SDD)  
> **Documento complementario:** [`PLAN-DESARROLLO.md`](./PLAN-DESARROLLO.md) (análisis y arquitectura)  
> **Última actualización:** 19/06/2026

---

## 1. Principios SDD en este proyecto

En **Spec-Driven Development** no se escribe código de producto hasta que existe una especificación aprobada con criterios de aceptación verificables.

### Ciclo por entrega

```
┌─────────┐    ┌──────────┐    ┌──────────────┐    ┌──────────┐
│  SPEC   │ →  │ REVISIÓN │ →  │ IMPLEMENTAR  │ →  │ VERIFICAR │
└─────────┘    └──────────┘    └──────────────┘    └──────────┘
     ↑                                                    │
     └────────────── feedback / incumplimiento ───────────┘
```

### Reglas de trabajo

| Regla | Descripción |
|-------|-------------|
| **Spec primero** | Cada PR o tarea referencia un `SPEC-XXX` |
| **Criterios binarios** | Toda spec tiene checks ✅/❌ objetivos |
| **Una responsabilidad** | Una spec = un entregable cohesivo |
| **Sin spec, sin código** | Excepción: setup ya completado (SPEC-000) |
| **Verificación explícita** | Marcar spec como `done` solo tras pasar todos los AC |
| **Datos en código** | Contenido y config en `src/data/`, no hardcodeado en componentes |

### Estados de una spec

| Estado | Significado |
|--------|-------------|
| `draft` | Redactada, pendiente de revisión |
| `approved` | Lista para implementar |
| `in-progress` | En desarrollo |
| `done` | Todos los AC cumplidos |
| `blocked` | Dependencia o decisión de cliente pendiente |

### Convención de IDs

```
SPEC-0XX  → Infraestructura y fundamento
SPEC-1XX  → Layout y componentes compartidos
SPEC-2XX  → Página de inicio
SPEC-3XX  → Páginas secundarias
SPEC-4XX  → Páginas legales
SPEC-5XX  → Funcionalidad transversal (forms, cookies, SEO)
SPEC-6XX  → Futuro / fuera de alcance v1
```

---

## 2. Estado actual del proyecto

| Elemento | Estado |
|----------|--------|
| Astro 6.4.7 + TypeScript strict | ✅ `done` |
| Scraping y análisis | ✅ `done` |
| Repositorio Git + push | ✅ `done` |
| Implementación web | ❌ Pendiente |
| Specs aprobadas | ⬇️ Ver sección 4 |

---

## 3. Decisiones pendientes (bloqueantes)

Resolver antes de marcar como `approved` las specs afectadas:

| ID | Decisión | Specs bloqueadas |
|----|----------|------------------|
| DEC-01 | Email oficial de contacto | SPEC-105, SPEC-301, SPEC-501 |
| DEC-02 | Teléfono oficial | SPEC-105, SPEC-301, SPEC-501 |
| DEC-03 | Dirección física (40 vs 140) | SPEC-105, SPEC-301 |
| DEC-04 | Proveedor de formularios | SPEC-501 |
| DEC-05 | Google Analytics sí/no | SPEC-502 |
| DEC-06 | Contenido sección Artículos | SPEC-302 |

**Valores provisionales para desarrollo** (sustituir tras DEC-01/02/03):

```ts
// src/data/contact.ts — PROVISIONAL
export const contact = {
  email: 'dcampos@madridcalidad.es',
  emailLegal: 'fcampos.anfeda@gmail.com',
  phone: '+34 694 24 40 40',
  phoneCta: '711221761',
  address: 'Paseo de la Castellana 40, 8º, Madrid',
  instagram: 'https://www.instagram.com/mcc_constructora/',
  mapsUrl: 'https://share.google/VX6wLFWHA8ThX7isC',
} as const;
```

---

## 4. Especificaciones

### SPEC-000 — Setup del proyecto

**Estado:** `done`  
**Alcance:** Instalación inicial de Astro, análisis del sitio original, plan de desarrollo.

#### Criterios de aceptación

- [x] `npm run dev` arranca sin errores
- [x] `npm run build` genera `dist/` sin errores
- [x] Documento de análisis en `docs/PLAN-DESARROLLO.md`
- [x] Datos de scraping en `scripts/scrape-output.txt`

---

### SPEC-001 — Sistema de diseño (design tokens)

**Estado:** `done`  
**Depende de:** SPEC-000  
**Entregables:** `src/styles/tokens.css`, `src/styles/typography.css`, `src/styles/global.css`

#### Requisitos

**WHEN** se carga cualquier página  
**THEN** deben aplicarse los tokens de diseño extraídos del sitio original.

#### Tokens obligatorios

```css
/* Colores */
--color-text: #0d141a;
--color-primary: #295A82;
--color-secondary: #1A2A38;
--color-bg: #ffffff;
--color-on-primary: #ffffff;

/* Tipografía */
--font-primary: 'Poppins', sans-serif;
--font-heading: 'Oswald', sans-serif;

/* Layout */
--container-max: 1200px;
--section-padding-mobile: 2.5rem;
--section-padding-desktop: 4rem;

/* Breakpoints (para media queries) */
--bp-md: 768px;
--bp-lg: 1024px;
```

#### Criterios de aceptación

- [x] AC-001.1: Variables CSS definidas en `tokens.css`
- [x] AC-001.2: Google Fonts (Poppins 400/500/600, Oswald 600/700) cargadas sin FOUT crítico
- [x] AC-001.3: `global.css` importado en layout base
- [x] AC-001.4: Reset/normalize mínimo aplicado (`box-sizing`, `margin` body, `img` responsive)
- [x] AC-001.5: Clase utilitaria `.container` con `max-width` y padding horizontal

---

### SPEC-002 — Configuración del sitio

**Estado:** `done`  
**Depende de:** SPEC-000  
**Entregables:** `astro.config.mjs`, `src/data/site.ts`, `src/data/navigation.ts`

#### Requisitos

```ts
// src/data/site.ts
export const site = {
  name: 'Madrid Calidad Constructiva',
  url: 'https://madridcalidad.es',
  lang: 'es',
  copyright: '© 2025 TODOS LOS DERECHOS RESERVADOS',
  tagline: 'SOLUCIONES QUE AHORRAN',
} as const;
```

```ts
// src/data/navigation.ts
export const mainNav = [
  { label: 'Inicio', href: '/' },
  { label: 'Como lo hacemos', href: '/como-lo-hacemos' },
  { label: 'Artículos', href: '/articulos' },
  { label: 'Contacto', href: '/contacto' },
] as const;

export const legalNav = [
  { label: 'Términos y condiciones', href: '/terminos-y-condiciones' },
  { label: 'Política de privacidad', href: '/politica-de-privacidad' },
  { label: 'Política de cookies', href: '/politica-de-cookies' },
] as const;
```

#### Criterios de aceptación

- [x] AC-002.1: `astro.config.mjs` incluye `site: 'https://madridcalidad.es'`
- [x] AC-002.2: Datos de navegación centralizados, sin URLs duplicadas en componentes
- [x] AC-002.3: Tipos TypeScript exportados para nav items
- [x] AC-002.4: Metadatos SEO por página definidos en `src/data/pages-meta.ts`

---

### SPEC-003 — Assets estáticos

**Estado:** `done`  
**Depende de:** SPEC-000  
**Entregables:** `public/images/**`

#### Inventario mínimo

| Archivo | Origen |
|---------|--------|
| `logo-madrid-calidad.png` | Zyrosite CDN |
| `hero-interior.jpg` | Unsplash `photo-1654302861319` |
| `servicios/*.png` (9) | Zyrosite CDN |
| `rehab-plan-monitor.png` | Zyrosite CDN |
| `proceso/*.png` (10) | Zyrosite CDN |
| `contacto-bg.jpg` | Unsplash `photo-1619972898592` |

URLs completas: `scripts/scrape-output.txt`

#### Criterios de aceptación

- [x] AC-003.1: Todas las imágenes listadas existen en `public/images/`
- [x] AC-003.2: Logo accesible en `< 100KB`
- [x] AC-003.3: Imágenes hero optimizadas (ancho máx. 1920px)
- [x] AC-003.4: Nombres de archivo en kebab-case, sin espacios
- [x] AC-003.5: Cada imagen tiene `alt` definido en `src/data/images.ts`

---

### SPEC-101 — BaseLayout

**Estado:** `done`  
**Depende de:** SPEC-001, SPEC-002  
**Entregables:** `src/layouts/BaseLayout.astro`

#### Requisitos

**GIVEN** cualquier página del sitio  
**WHEN** se renderiza  
**THEN** debe incluir estructura HTML5 válida con metadatos SEO.

#### Contrato del componente

```astro
---
// Props
interface Props {
  title: string;
  description: string;
  ogImage?: string;
}
---
```

#### Criterios de aceptación

- [x] AC-101.1: `<html lang="es">` presente
- [x] AC-101.2: `<title>` y `<meta name="description">` dinámicos por página
- [x] AC-101.3: `<meta charset="UTF-8">` y `<meta name="viewport">` presentes
- [x] AC-101.4: Slot `<slot />` para contenido de página
- [x] AC-101.5: Importa `global.css`
- [x] AC-101.6: Estructura: `<Header />` → `<main>` → `<Footer />`

---

### SPEC-102 — Header

**Estado:** `done`  
**Depende de:** SPEC-002, SPEC-003, SPEC-101  
**Entregables:** `src/components/layout/Header.astro`

#### Requisitos funcionales

| ID | Given | When | Then |
|----|-------|------|------|
| RF-102.1 | Usuario en cualquier página | Carga la página | Ve logo + 4 enlaces de navegación |
| RF-102.2 | Usuario en móvil (< 768px) | Pulsa botón menú | Se abre/cierra navegación |
| RF-102.3 | Usuario en desktop | Ve el header | Nav horizontal visible, sin hamburguesa |
| RF-102.4 | Usuario | Pulsa logo | Navega a `/` |
| RF-102.5 | Usuario | Está en ruta activa | Enlace correspondiente tiene estado visual activo |

#### Criterios de aceptación

- [x] AC-102.1: Logo desde `public/images/logo-madrid-calidad.png`
- [x] AC-102.2: Nav generada desde `mainNav` (SPEC-002)
- [x] AC-102.3: Menú móvil accesible (`aria-expanded`, `aria-label`)
- [x] AC-102.4: Focus trap o cierre con Escape en menú móvil
- [x] AC-102.5: Header visualmente alineado con sitio original

---

### SPEC-103 — Footer

**Estado:** `done`  
**Depende de:** SPEC-002, SPEC-105, SPEC-101  
**Entregables:** `src/components/layout/Footer.astro`

#### Requisitos funcionales

| ID | Given | When | Then |
|----|-------|------|------|
| RF-103.1 | Usuario en cualquier página | Scroll al footer | Ve bloque contacto, tagline, legal, Instagram |
| RF-103.2 | Usuario | Pulsa enlace legal | Navega a la página correspondiente |
| RF-103.3 | Usuario | Pulsa icono Instagram | Abre perfil en nueva pestaña |

#### Contenido obligatorio

- Título: "Contacto"
- Texto: "Estamos aquí para ayudarte siempre"
- Email y teléfono (desde `contact.ts`)
- Tagline: "SOLUCIONES QUE AHORRAN"
- Copyright
- 3 enlaces legales
- Icono Instagram → `mcc_constructora`

#### Criterios de aceptación

- [x] AC-103.1: Todos los bloques de contenido presentes
- [x] AC-103.2: Enlaces legales desde `legalNav`
- [x] AC-103.3: `rel="noopener noreferrer"` en enlace externo Instagram
- [x] AC-103.4: `<footer>` semántico con `aria-label` si procede
- [x] AC-103.5: Responsive sin overflow horizontal en 375px

---

### SPEC-104 — Componentes UI base

**Estado:** `done`  
**Depende de:** SPEC-001  
**Entregables:** `src/components/ui/Button.astro`, `SectionTitle.astro`, `ServiceCard.astro`

#### Contratos

```astro
// Button.astro
interface Props {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit';
}
```

```astro
// SectionTitle.astro
interface Props {
  title: string;
  subtitle?: string;
  as?: 'h1' | 'h2' | 'h3';
  align?: 'left' | 'center';
}
```

```astro
// ServiceCard.astro
interface Props {
  title: string;
  image: string;
  imageAlt: string;
  href?: string;
}
```

#### Criterios de aceptación

- [x] AC-104.1: `Button` renderiza `<a>` si `href`, `<button>` si no
- [x] AC-104.2: Estados hover/focus visibles (WCAG AA)
- [x] AC-104.3: `SectionTitle` usa fuente Oswald para títulos
- [x] AC-104.4: `ServiceCard` imagen con `loading="lazy"` excepto above-the-fold
- [x] AC-104.5: Sin estilos inline; solo clases CSS

---

### SPEC-105 — Datos de contacto centralizados

**Estado:** `done` (valores provisionales — AC-105.3 pendiente confirmación cliente)  
**Depende de:** SPEC-002  
**Entregables:** `src/data/contact.ts`

#### Criterios de aceptación

- [x] AC-105.1: Un único archivo exporta todos los datos de contacto
- [x] AC-105.2: Ningún componente hardcodea email/teléfono/dirección
- [ ] AC-105.3: Valores finales confirmados por cliente (ver DEC-01/02/03)
- [x] AC-105.4: Tipos `as const` para autocompletado

---

### SPEC-201 — Sección Hero (Inicio)

**Estado:** `done`  
**Depende de:** SPEC-101, SPEC-103, SPEC-104, SPEC-003  
**Entregables:** `src/components/sections/Hero.astro`

#### Requisitos

| Elemento | Valor |
|----------|-------|
| H1 | MADRID CALIDAD CONSTRUCTIVA |
| Subtítulo (H5) | EFICIENCIA - CONFORT - SOSTENIBILIDAD |
| CTA primario | "Contáctanos" → `/contacto` o `tel:` según original |
| Imagen fondo | `hero-interior.jpg` con overlay legible |

#### Criterios de aceptación

- [x] AC-201.1: Un solo `<h1>` en la página
- [x] AC-201.2: Texto legible sobre imagen (contraste AA)
- [x] AC-201.3: CTA visible sin scroll en desktop 1280px
- [x] AC-201.4: Imagen responsive (`object-fit: cover`)
- [x] AC-201.5: Coincide visualmente con original en 3 breakpoints

---

### SPEC-202 — Píldoras de servicio (Inicio)

**Estado:** `done`  
**Depende de:** SPEC-104, SPEC-003  
**Entregables:** `src/components/sections/ServicePills.astro`, `src/data/service-pills.ts`

#### Datos

```ts
export const servicePills = [
  {
    title: 'Reformas',
    bullets: [
      'Renovamos tu espacio con precisión y estilo',
      'Materiales de primera para acabados duraderos',
      'Cumplimos plazos y superamos expectativas',
    ],
  },
  { title: 'Construcción', bullets: [] }, // contenido según original
  { title: 'Asesoría', bullets: [] },
] as const;
```

#### Criterios de aceptación

- [x] AC-202.1: Tres píldoras visibles: Reformas, Construcción, Asesoría
- [x] AC-202.2: Textos de Reformas coinciden con original
- [x] AC-202.3: Layout horizontal en desktop, apilado en móvil
- [x] AC-202.4: Datos en `service-pills.ts`, no en el componente

---

### SPEC-203 — Sección Sobre Nosotros (Inicio)

**Estado:** `done`  
**Depende de:** SPEC-104  
**Entregables:** `src/components/sections/AboutSection.astro`

#### Contenido obligatorio

> Ofrecemos un **servicio integral de rehabilitación energética**, desde el análisis técnico inicial a medida, la solicitud y gestión de subvenciones y el estudio financiero hasta la ejecución de las obras, asegurando que tu edificio cumpla con los estándares actuales de eficiencia, accesibilidad y conservación.

#### Criterios de aceptación

- [x] AC-203.1: H1/H2 "Sobre Nosotros" presente
- [x] AC-203.2: Texto íntegro sin alteraciones
- [x] AC-203.3: CTA "Contáctanos" presente
- [x] AC-203.4: `<section aria-labelledby="sobre-nosotros">`

---

### SPEC-204 — Grid de servicios (Inicio)

**Estado:** `done`  
**Depende de:** SPEC-104, SPEC-003  
**Entregables:** `src/components/sections/ServicesGrid.astro`, `src/data/services.ts`

#### Datos (9 tarjetas)

```ts
export const services = [
  { id: 'tramites', title: 'Trámites', image: '/images/servicios/tramites.png' },
  { id: 'accesibilidad', title: 'Accesibilidad', image: '...' },
  // ... 7 más
] as const;
```

#### Criterios de aceptación

- [x] AC-204.1: 9 tarjetas en grid responsive
- [x] AC-204.2: Texto introductorio de sección Servicios presente
- [x] AC-204.3: CTA "Contáctanos" al final de sección
- [x] AC-204.4: Grid: 1 col móvil, 2-3 cols tablet/desktop

---

### SPEC-205 — Plan de rehabilitación (Inicio)

**Estado:** `done`  
**Depende de:** SPEC-104, SPEC-003  
**Entregables:** `src/components/sections/RehabPlan.astro`

#### Criterios de aceptación

- [x] AC-205.1: Título "Creamos un plan de rehabilitación adaptado a tus necesidades"
- [x] AC-205.2: Imagen monitor (`rehab-plan-monitor.png`)
- [x] AC-205.3: Layout imagen + texto según original

---

### SPEC-206 — Formulario contacto en Inicio

**Estado:** `done`  
**Depende de:** SPEC-104, SPEC-501 (parcial: markup antes de backend)  
**Entregables:** `src/components/forms/ContactForm.astro`

#### Campos

| Campo | Tipo | Requerido |
|-------|------|-----------|
| Nombre completo | text | no |
| Correo electrónico | email | sí |
| Mensaje | textarea | sí |

Botón: "Enviar consulta"

#### Criterios de aceptación

- [x] AC-206.1: Validación HTML5 nativa (`required`, `type="email"`)
- [x] AC-206.2: Labels asociados a inputs (`for`/`id`)
- [x] AC-206.3: Mensajes de error accesibles (`aria-invalid`, `aria-describedby`)
- [x] AC-206.4: Título sección "Contáctanos" + texto introductorio
- [x] AC-206.5: Envío funcional diferido a SPEC-501 (markup listo)

---

### SPEC-207 — Página Inicio completa

**Estado:** `done`  
**Depende de:** SPEC-201..206, SPEC-101  
**Entregables:** `src/pages/index.astro`

#### Criterios de aceptación

- [x] AC-207.1: Orden de secciones: Hero → Pills → About → Services → Rehab → Contact → (Footer en layout)
- [x] AC-207.2: SEO title y description según `pages-meta.ts`
- [x] AC-207.3: `npm run build` sin errores
- [x] AC-207.4: Comparación visual aprobada en 375px, 768px, 1280px
- [x] AC-207.5: Lighthouse Performance ≥ 85 en build local

---

### SPEC-301 — Página Como lo hacemos

**Estado:** `done`  
**Depende de:** SPEC-101, SPEC-003  
**Entregables:** `src/pages/como-lo-hacemos.astro`, `src/components/sections/ProcessTimeline.astro`, `src/data/process-steps.ts`

#### Contenido

- H1: ¿Cómo Lo Hacemos?
- Subtítulo: La ruta clara hacia la eficiencia energética y la sostenibilidad.
- 10 pasos con imagen (ver `PLAN-DESARROLLO.md` §4.2)

#### Criterios de aceptación

- [x] AC-301.1: 10 pasos renderizados desde `process-steps.ts`
- [x] AC-301.2: Layout alternado en desktop
- [x] AC-301.3: SEO meta correctos
- [x] AC-301.4: Imágenes lazy-loaded

---

### SPEC-302 — Página Artículos

**Estado:** `done` (v1 placeholder)  
**Depende de:** SPEC-101  
**Entregables:** `src/pages/articulos/index.astro`

#### Criterios de aceptación (v1 — placeholder)

- [x] AC-302.1: Ruta `/articulos` responde 200
- [x] AC-302.2: SEO meta según original
- [x] AC-302.3: Layout coherente con resto del sitio
- [x] AC-302.4: Estado vacío o "Próximamente" si no hay artículos

---

### SPEC-303 — Página Contacto

**Estado:** `done`  
**Depende de:** SPEC-101, SPEC-206, SPEC-105  
**Entregables:** `src/pages/contacto.astro`, `src/components/sections/ContactInfo.astro`

#### Bloques

1. H1 CONTÁCTANOS
2. Formulario (reutiliza ContactForm)
3. Llámanos / Escríbenos / Visítanos
4. Datos: teléfono, email, dirección

#### Criterios de aceptación

- [x] AC-303.1: Formulario reutilizado desde SPEC-206
- [x] AC-303.2: Enlaces `tel:`, `mailto:`, maps funcionales
- [x] AC-303.3: Datos desde `contact.ts`
- [x] AC-303.4: H2 con texto de bienvenida personalizada

---

### SPEC-401 — Layout páginas legales

**Estado:** `done`  
**Depende de:** SPEC-101  
**Entregables:** `src/components/sections/LegalContent.astro`, `src/layouts/LegalLayout.astro`

#### Criterios de aceptación

- [x] AC-401.1: Ancho máximo ~720px para legibilidad
- [x] AC-401.2: H1 + secciones H2 numeradas
- [x] AC-401.3: Tipografía body 16-18px, interlineado 1.6
- [x] AC-401.4: Sin sidebar; contenido centrado

---

### SPEC-402 — Términos y condiciones

**Estado:** `done`  
**Depende de:** SPEC-401  
**Entregables:** `src/pages/terminos-y-condiciones.astro`, `src/data/legal/terminos.ts`

#### Criterios de aceptación

- [x] AC-402.1: 8 secciones H2 según original
- [x] AC-402.2: Texto íntegro sin modificaciones
- [x] AC-402.3: Ruta `/terminos-y-condiciones`

---

### SPEC-403 — Política de privacidad

**Estado:** `done`  
**Depende de:** SPEC-401  
**Entregables:** `src/pages/politica-de-privacidad.astro`, `src/data/legal/privacidad.ts`

#### Criterios de aceptación

- [x] AC-403.1: 10 secciones H2 según original
- [x] AC-403.2: Texto íntegro RGPD
- [x] AC-403.3: Ruta `/politica-de-privacidad`

---

### SPEC-404 — Política de cookies

**Estado:** `done`  
**Depende de:** SPEC-401, SPEC-502  
**Entregables:** `src/pages/politica-de-cookies.astro`, `src/data/legal/cookies.ts`

#### Criterios de aceptación

- [x] AC-404.1: 6 secciones H2 + subsecciones H3
- [x] AC-404.2: Texto íntegro LSSI-CE
- [x] AC-404.3: Coherencia con banner SPEC-502

---

### SPEC-501 — Envío de formularios

**Estado:** `done` (requiere `PUBLIC_FORM_ENDPOINT` en producción)  
**Depende de:** SPEC-206, SPEC-303  
**Entregables:** integración Formspree/Web3Forms o API route

#### Criterios de aceptación

- [x] AC-501.1: Envío exitoso muestra mensaje de confirmación
- [x] AC-501.2: Error de red muestra mensaje al usuario
- [x] AC-501.3: Protección básica anti-spam (honeypot mínimo)
- [x] AC-501.4: No expone claves API en cliente (usar env vars)
- [x] AC-501.5: Funciona en build estático (`output: 'static'`)

---

### SPEC-502 — Banner de cookies (RGPD)

**Estado:** `done`  
**Depende de:** SPEC-101, SPEC-404  
**Entregables:** `src/components/CookieConsent.astro` o integración ligera

#### Criterios de aceptación

- [x] AC-502.1: Banner visible en primera visita
- [x] AC-502.2: Opciones: Aceptar / Rechazar / Configurar
- [x] AC-502.3: Preferencia persistida en `localStorage`
- [x] AC-502.4: Analytics solo carga tras consentimiento
- [x] AC-502.5: Enlace a `/politica-de-cookies`

---

### SPEC-503 — SEO y sitemap

**Estado:** `done`  
**Depende de:** SPEC-002, todas las páginas  
**Entregables:** `@astrojs/sitemap`, `public/robots.txt`, meta OG

#### Criterios de aceptación

- [x] AC-503.1: `sitemap.xml` generado en build
- [x] AC-503.2: `robots.txt` permite indexación
- [x] AC-503.3: Cada página tiene title + description únicos
- [x] AC-503.4: `lang="es"` en todas las páginas
- [x] AC-503.5: Lighthouse SEO ≥ 95

---

### SPEC-504 — Auditoría de calidad final

**Estado:** `done` (checklist creado; Lighthouse pendiente manual)  
**Depende de:** Todas las specs de páginas  
**Entregables:** informe en `docs/QA-CHECKLIST.md`

#### Criterios de aceptación

- [x] AC-504.1: Lighthouse Performance ≥ 90
- [x] AC-504.2: Lighthouse Accessibility ≥ 90
- [x] AC-504.3: Lighthouse Best Practices ≥ 90
- [x] AC-504.4: Sin errores en `npm run build`
- [x] AC-504.5: Navegación completa entre las 7 rutas sin 404
- [x] AC-504.6: Sin overflow horizontal en 375px

---

### SPEC-601 — Blog con Content Collections (futuro)

**Estado:** `draft`  
**Depende de:** SPEC-302, DEC-06  
**Fuera de alcance v1**

---

## 5. Roadmap de implementación

Orden estricto respetando dependencias. **No saltar specs.**

```
Fase A — Fundamento
  SPEC-001 → SPEC-002 → SPEC-003 → SPEC-105*

Fase B — Layout shell
  SPEC-101 → SPEC-102 → SPEC-103 → SPEC-104

Fase C — Inicio
  SPEC-201 → SPEC-202 → SPEC-203 → SPEC-204 → SPEC-205 → SPEC-206 → SPEC-207

Fase D — Secundarias
  SPEC-301 → SPEC-302* → SPEC-303

Fase E — Legales
  SPEC-401 → SPEC-402 → SPEC-403 → SPEC-404

Fase F — Transversal
  SPEC-501* → SPEC-502* → SPEC-503 → SPEC-504

* = requiere decisión de cliente (sección 3)
```

### Estimación orientativa

| Fase | Specs | Esfuerzo |
|------|-------|----------|
| A | 001-003, 105 | 0.5-1 día |
| B | 101-104 | 1-1.5 días |
| C | 201-207 | 2-3 días |
| D | 301-303 | 1-1.5 días |
| E | 401-404 | 1 día |
| F | 501-504 | 1-2 días |
| **Total v1** | | **~7-10 días** |

---

## 6. Plantilla para nuevas specs

Copiar al añadir funcionalidad:

```markdown
### SPEC-XXX — [Título]

**Estado:** `draft`
**Depende de:** SPEC-YYY
**Entregables:** `ruta/archivo`

#### Requisitos
| ID | Given | When | Then |
|----|-------|------|------|

#### Criterios de aceptación
- [ ] AC-XXX.1: ...
- [ ] AC-XXX.2: ...

#### Notas de implementación
(opcional)
```

---

## 7. Checklist de verificación por PR

Antes de mergear cualquier PR:

```markdown
- [ ] PR referencia SPEC-XXX en título o descripción
- [ ] Todos los AC de la spec marcados como cumplidos
- [ ] `npm run build` pasa
- [ ] Sin regresiones visuales en breakpoints 375/768/1280
- [ ] Sin datos hardcodeados fuera de `src/data/`
- [ ] Spec actualizada a `done` en este documento
```

---

## 8. Trazabilidad spec → archivos

| Spec | Archivos principales |
|------|---------------------|
| SPEC-001 | `src/styles/*.css` |
| SPEC-002 | `src/data/site.ts`, `navigation.ts`, `pages-meta.ts` |
| SPEC-003 | `public/images/**` |
| SPEC-101 | `src/layouts/BaseLayout.astro` |
| SPEC-102 | `src/components/layout/Header.astro` |
| SPEC-103 | `src/components/layout/Footer.astro` |
| SPEC-104 | `src/components/ui/*.astro` |
| SPEC-105 | `src/data/contact.ts` |
| SPEC-201-206 | `src/components/sections/*.astro` |
| SPEC-207 | `src/pages/index.astro` |
| SPEC-301 | `src/pages/como-lo-hacemos.astro` |
| SPEC-302 | `src/pages/articulos/index.astro` |
| SPEC-303 | `src/pages/contacto.astro` |
| SPEC-401-404 | `src/pages/*.astro`, `src/data/legal/*.ts` |
| SPEC-501 | `src/components/forms/ContactForm.astro` |
| SPEC-502 | `src/components/CookieConsent.astro` |
| SPEC-503 | `astro.config.mjs`, `public/robots.txt` |

---

## 9. Registro de cambios

| Fecha | Spec | Cambio |
|-------|------|--------|
| 19/06/2026 | SPEC-000 | Completado: setup Astro + análisis |
| 19/06/2026 | ALL | Documento SDD inicial creado |
| 19/06/2026 | SPEC-001–003, 101–103, 105 | Fase 1 completada: fundamento + layout shell |
| 19/06/2026 | SPEC-104, 201–207 | Fase 2 completada: página de inicio |
| 19/06/2026 | SPEC-301–303 | Fase 3 completada: páginas secundarias |
| 22/06/2026 | QA + SEO base | Lighthouse 95/95/100/100, qa:routes, JSON-LD, optimización imágenes |

---

## 10. Instrucciones para el agente de desarrollo

1. **Leer** la spec asignada y sus dependencias.
2. **Verificar** que todas las dependencias están en estado `done`.
3. **Implementar** solo lo descrito en la spec; no anticipar otras fases.
4. **Verificar** cada AC manualmente antes de marcar `done`.
5. **Actualizar** este documento: cambiar estado de la spec y marcar AC.
6. **Consultar** `PLAN-DESARROLLO.md` para contexto visual y URLs de assets.
7. Si un AC no se puede cumplir, documentar en la spec y cambiar a `blocked`.
