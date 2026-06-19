# Plan de desarrollo — Clon de madridcalidad.es

> **Documento de referencia** para el desarrollo iterativo del sitio en Astro.  
> **Origen analizado:** [https://madridcalidad.es/](https://madridcalidad.es/)  
> **Fecha del análisis:** 19/06/2026  
> **Estado del proyecto:** Astro 6.4.7 instalado (plantilla `minimal`), sin desarrollo de la web.

---

## 1. Objetivo

Recrear fielmente el sitio corporativo de **Madrid Calidad Constructiva** usando **Astro** como framework, con HTML semántico, CSS mantenible y rendimiento superior al sitio original generado por Hostinger Website Builder.

**Alcance inicial:** réplica visual y funcional de todas las páginas públicas detectadas.  
**Fuera de alcance (fase 1):** panel de administración, CMS externo, blog dinámico con backend propio.

---

## 2. Análisis del sitio original

### 2.1 Plataforma detectada

| Aspecto | Valor |
|---------|-------|
| Generador | Hostinger Website Builder |
| Motor subyacente | Astro (build estático en `/_astro-*`) |
| CDN de imágenes | `assets.zyrosite.com` |
| Imágenes stock | Unsplash |
| Scripts externos | Ninguno detectado en páginas públicas |
| Cookie consent | Sí (`cookieconsent.*.css`) |

### 2.2 Mapa del sitio

```
/                           → Inicio
/como-lo-hacemos            → Proceso de trabajo
/articulos                  → Listado de artículos (sin entradas individuales detectadas)
/contacto                   → Formulario y datos de contacto
/terminos-y-condiciones     → Legal
/politica-de-privacidad     → Legal (RGPD)
/politica-de-cookies        → Legal (LSSI-CE)
```

**Navegación principal (header):** Inicio · Como lo hacemos · Artículos · Contacto  
**Navegación footer:** Términos y condiciones · Política de privacidad · Política de cookies

### 2.3 Datos de contacto y empresa

> ⚠️ **Inconsistencias detectadas** — confirmar con el cliente antes de implementar.

| Campo | Valor en web pública | Ubicación |
|-------|---------------------|-----------|
| Razón social | MADRID CALIDAD CONSTRUCTIVA SL | Legal |
| CIF | B56413214 | Legal |
| Email público (footer) | dcampos@madridcalidad.es | Footer en todas las páginas |
| Email legal/formulario | fcampos.anfeda@gmail.com | Contacto, páginas legales |
| Teléfono footer | +34 694 24 40 40 | Footer |
| Teléfono CTA hero | 711 22 17 61 (`tel:711221761`) | Botón "Contáctanos" en inicio |
| Dirección contacto | Paseo de la Castellana **40**, 8º | Página contacto |
| Dirección legal | Paseo de la Castellana **140**, 14B, 28046 Madrid | Términos, privacidad, cookies |
| Instagram | [instagram.com/mcc_constructora](https://www.instagram.com/mcc_constructora/) | Footer / redes |
| Google Maps | Enlace share.google (ubicación) | Página contacto |

### 2.4 Identidad visual (extraída del scraping)

| Token | Valor |
|-------|-------|
| Color texto oscuro | `#0d141a` |
| Color acento / marca | `#295A82` |
| Color secundario oscuro | `#1A2A38` |
| Color fondo claro | `#ffffff` |
| Tipografía primaria | **Poppins** |
| Tipografía secundaria (titulares) | **Oswald** |
| Iconos redes | Blanco `#ffffff`, 24px |

**Estilo general:** corporativo, limpio, predominio de blancos y azules, fotografías de obra/rehabilitación, tipografía condensada en titulares.

---

## 3. Arquitectura propuesta en Astro

### 3.1 Estructura de carpetas objetivo

```
src/
├── components/
│   ├── layout/
│   │   ├── BaseLayout.astro
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── ui/
│   │   ├── Button.astro
│   │   ├── SectionTitle.astro
│   │   └── ServiceCard.astro
│   ├── sections/
│   │   ├── Hero.astro
│   │   ├── ServicePills.astro
│   │   ├── AboutSection.astro
│   │   ├── ServicesGrid.astro
│   │   ├── RehabPlan.astro
│   │   ├── ContactForm.astro
│   │   ├── ContactCTA.astro
│   │   ├── ProcessTimeline.astro
│   │   └── LegalContent.astro
│   └── forms/
│       └── ContactForm.astro
├── layouts/
│   └── PageLayout.astro
├── pages/
│   ├── index.astro
│   ├── como-lo-hacemos.astro
│   ├── articulos/
│   │   └── index.astro
│   ├── contacto.astro
│   ├── terminos-y-condiciones.astro
│   ├── politica-de-privacidad.astro
│   └── politica-de-cookies.astro
├── styles/
│   ├── global.css
│   ├── tokens.css          # variables CSS
│   └── typography.css
├── data/
│   ├── navigation.ts
│   ├── contact.ts
│   ├── services.ts
│   ├── process-steps.ts
│   └── site.ts             # meta SEO por página
└── content/                # (fase 2) artículos en Markdown
    └── articulos/
public/
├── images/
│   ├── logo-madrid-calidad.png
│   ├── hero/
│   ├── servicios/
│   └── proceso/
└── favicon.svg
```

### 3.2 Integraciones Astro recomendadas

| Integración | Prioridad | Motivo |
|-------------|-----------|--------|
| CSS nativo + variables | Alta | Suficiente para este sitio; evitar dependencias innecesarias |
| `@astrojs/sitemap` | Media | SEO |
| `@astrojs/image` o `<Image>` nativo | Media | Optimización de imágenes locales |
| Content Collections | Baja (fase 2) | Artículos en Markdown si se añaden entradas |
| `astro-icon` o SVG inline | Baja | Iconos redes sociales |

**No instalar de inicio:** React, Tailwind (salvo preferencia explícita), animaciones pesadas.

---

## 4. Desglose por página

### 4.1 Inicio (`/`)

**SEO**
- Title: `Servicios de construcción en Madrid | Madrid Calidad Constructiva`
- Description: `Ofrecemos servicios de construcción de alta calidad en Madrid, con atención personalizada y procesos claros para garantizar proyectos duraderos y seguros. Confía en nuestra experiencia para tus necesidades de construcción.`

**Secciones (orden vertical):**

| # | Sección | Contenido | Componente |
|---|---------|-----------|------------|
| 1 | Header | Logo + nav + menú móvil | `Header.astro` |
| 2 | Hero | Imagen fondo (sofá/interior), H1, subtítulo, CTA "Contáctanos" | `Hero.astro` |
| 3 | Píldoras de servicio | Reformas / Construcción / Asesoría con textos descriptivos | `ServicePills.astro` |
| 4 | Sobre Nosotros | Texto rehabilitación energética + CTA | `AboutSection.astro` |
| 5 | Servicios | Grid de tarjetas con imágenes | `ServicesGrid.astro` |
| 6 | Plan rehabilitación | Título + imagen monitor + CTA | `RehabPlan.astro` |
| 7 | Formulario contacto | Nombre, email*, mensaje*, "Enviar consulta" | `ContactForm.astro` |
| 8 | Footer contacto | Email, teléfono, mini-formulario, redes, legal | `Footer.astro` |

**Textos clave — Píldora Reformas:**
- Renovamos tu espacio con precisión y estilo
- Materiales de primera para acabados duraderos
- Cumplimos plazos y superamos expectativas

**Textos clave — Sobre Nosotros:**
> Ofrecemos un **servicio integral de rehabilitación energética**, desde el análisis técnico inicial a medida, la solicitud y gestión de subvenciones y el estudio financiero hasta la ejecución de las obras, asegurando que tu edificio cumpla con los estándares actuales de eficiencia, accesibilidad y conservación.

**Textos clave — Servicios:**
> Ofrecemos soluciones integrales para mejorar la eficiencia, accesibilidad y sostenibilidad de tu edificio. Nuestro equipo técnico te acompaña en cada etapa, desde el análisis hasta la ejecución final.

**Tarjetas del grid de servicios** (inferidas por nombres de imagen en CDN):

| Imagen origen | Título sugerido |
|---------------|-----------------|
| tramites | Trámites |
| accesibilidad | Accesibilidad |
| enfoque | Enfoque técnico |
| financiacion | Financiación |
| soluciones | Soluciones |
| subvenciones | Subvenciones |
| certificados | Certificados |
| gestion | Gestión |
| rehabilitacion | Rehabilitación |

**Imágenes a descargar/localizar:**

| Uso | URL origen |
|-----|------------|
| Logo | `https://assets.zyrosite.com/.../logo-madrid-calidad-WNHOi4ILpZcoMBAY.png` |
| Hero | `https://images.unsplash.com/photo-1654302861319-849671c254cf` |
| Servicios (9 imgs) | CDN Zyrosite (ver `scripts/scrape-output.txt`) |
| Plan rehab | `https://assets.zyrosite.com/.../captura-de-pantalla-2026-02-13-105219-ATAw6anrnyrDFAyH.png` |
| Fondo contacto | `https://images.unsplash.com/photo-1619972898592-5de4b1c68025` |

---

### 4.2 Como lo hacemos (`/como-lo-hacemos`)

**SEO**
- Title: `Servicios de construcción en Madrid con calidad | Madrid Calidad Constructiva`
- Description: `En Madrid Calidad Constructiva ofrecemos servicios de construcción y reformas con atención al detalle y materiales premium para resultados duraderos.`

**Contenido:**
- H1: `¿Cómo Lo Hacemos?`
- Subtítulo: `La ruta clara hacia la eficiencia energética y la sostenibilidad.`
- Timeline/proceso visual con imágenes (10 pasos detectados)

**Pasos del proceso** (inferidos por assets):

| # | Asset | Título sugerido |
|---|-------|-----------------|
| 1 | estudio | Estudio inicial |
| 2 | reunion | Reunión con el cliente |
| 3 | doc | Documentación |
| 4 | pres | Presupuesto |
| 5 | segui | Seguimiento |
| 6 | ejec | Ejecución de obra |
| 7 | cierr | Cierre de obra |
| 8 | cae | Certificados de ahorro energético (CAE) |
| 9 | garant | Garantía |
| 10 | aten | Atención post-obra |

**Componente:** `ProcessTimeline.astro` — layout alternado imagen/texto en desktop, apilado en móvil.

---

### 4.3 Artículos (`/articulos`)

**SEO**
- Title: `Ventajas de elegir Madrid Calidad Constructiva | Madrid Calidad Constructiva`
- Description: `Calidad premium en construcción local, atención personalizada y procesos transparentes que garantizan resultados duraderos y confianza total.`

**Estado actual en origen:** página existente pero **sin artículos individuales** (`/articulos/slug`) detectados en el scraping.

**Estrategia fase 1:** página placeholder con mensaje tipo "Próximamente" o grid vacío, replicando layout del original.

**Estrategia fase 2:** Content Collections en `src/content/articulos/*.md` con frontmatter (title, date, description, image).

---

### 4.4 Contacto (`/contacto`)

**SEO**
- Title: `Contacto Madrid Calidad Constructiva | Madrid Calidad Constructiva`
- Description: `Ponte en contacto con Madrid Calidad Constructiva para asesoría personalizada y servicios de construcción premium en Madrid.`

**Contenido:**
- H1: `CONTÁCTANOS`
- H2: `Ponte en contacto con nosotros` + subtítulo personalizado
- Formulario: Nombre completo, Correo electrónico*, Mensaje*, Enviar
- Bloques de acción:
  - **Llámanos** → `tel:711221761`
  - **Escríbenos** → `mailto:fcampos.anfeda@gmail.com`
  - **Visítanos** → enlace Google Maps
- Datos visibles:
  - Teléfono: 694 24 40 40
  - Email: dcampos@madridcalidad.es
  - Dirección: Paseo de la Castellana 40, 8º

---

### 4.5 Páginas legales

Tres páginas con layout común (`LegalContent.astro`): título H1, secciones H2 numeradas, tipografía legible, ancho máximo ~720px.

| Ruta | H1 |
|------|-----|
| `/terminos-y-condiciones` | TÉRMINOS Y CONDICIONES DE USO |
| `/politica-de-privacidad` | POLÍTICA DE PRIVACIDAD |
| `/politica-de-cookies` | POLÍTICA DE COOKIES |

**Contenido:** copiar textualmente del sitio original (ya extraído en scraping). Mantener estructura de 8–10 secciones por documento.

---

## 5. Componentes compartidos

### 5.1 Header

- Logo enlazado a `/`
- Nav desktop horizontal
- Menú hamburguesa en móvil (< 768px)
- Sticky o estático según original (verificar en implementación visual)
- Duplicado en original: nav aparece dos veces (posible header + overlay móvil)

### 5.2 Footer

Bloques:
1. **Contacto** — "Estamos aquí para ayudarte siempre"
2. Email + teléfono
3. Mini formulario (nombre + enviar) — evaluar si es funcional o decorativo en original
4. **SOLUCIONES QUE AHORRAN** (tagline)
5. Enlaces legales
6. Icono Instagram
7. Copyright `© 2025 TODOS LOS DERECHOS RESERVADOS`

### 5.3 Formulario de contacto

**Campos:**
- `nombre` — Nombre completo (text)
- `email` — Correo electrónico (email, requerido)
- `mensaje` — Mensaje (textarea, requerido)

**En original:** formularios sin `action` HTML → gestionados por Hostinger (JS embebido).

**Opciones de implementación (decidir en fase de formularios):**

| Opción | Pros | Contras |
|--------|------|---------|
| Formspree / Web3Forms | Rápido, sin backend | Dependencia externa |
| API Route Astro + Resend/SMTP | Control total | Requiere servidor/serverless |
| `mailto:` fallback | Cero config | Mala UX |

**Recomendación:** Formspree o endpoint serverless; evitar `mailto` como solución principal.

### 5.4 Banner cookies

Replicar panel de consentimiento conforme a política de cookies:
- Aceptar todas / Rechazar / Configurar
- Cookies técnicas sin consentimiento
- Analytics (Google Analytics) solo con consentimiento

**Librería sugerida:** implementación ligera propia o `vanilla-cookieconsent`.

---

## 6. Sistema de diseño

### 6.1 Breakpoints

```css
--bp-sm: 375px;   /* móvil */
--bp-md: 768px;   /* tablet */
--bp-lg: 1024px;  /* desktop */
--bp-xl: 1440px;  /* pantallas grandes */
```

### 6.2 Escala tipográfica

| Elemento | Fuente | Peso | Notas |
|----------|--------|------|-------|
| H1 | Oswald | 700 | Mayúsculas en hero |
| H2–H3 | Oswald | 600 | Secciones |
| H5–H6 | Poppins | 600 | Subtítulos, pills |
| Body | Poppins | 400 | 16–18px |
| Botones | Poppins | 500 | Uppercase opcional |

### 6.3 Espaciado

- Secciones: `padding-block: 4rem` (desktop), `2.5rem` (móvil)
- Contenedor: `max-width: 1200px`, `padding-inline: 1.5rem`

---

## 7. Plan de implementación por fases

### Fase 0 — Preparación ✅ (completada)

- [x] Instalar Astro 6 + TypeScript strict
- [x] Análisis/scraping del sitio original
- [x] Redactar este plan

### Fase 1 — Fundamentos (prioridad alta)

- [ ] Crear `tokens.css` y `global.css` con paleta y tipografías (Google Fonts: Poppins + Oswald)
- [ ] Descargar y optimizar assets a `public/images/`
- [ ] Implementar `BaseLayout`, `Header`, `Footer`
- [ ] Configurar `site.ts` con metadatos globales y datos de contacto unificados
- [ ] Configurar `astro.config.mjs` (`site: 'https://madridcalidad.es'`)

**Criterio de aceptación:** layout navegable entre páginas vacías con header/footer correctos.

### Fase 2 — Página de inicio (prioridad alta)

- [ ] `Hero.astro`
- [ ] `ServicePills.astro`
- [ ] `AboutSection.astro`
- [ ] `ServicesGrid.astro`
- [ ] `RehabPlan.astro`
- [ ] `ContactForm.astro` (markup + estilos, sin backend)
- [ ] Responsive completo

**Criterio de aceptación:** comparación visual lado a lado con original en 375px, 768px y 1280px.

### Fase 3 — Páginas secundarias de contenido (prioridad media)

- [ ] `/como-lo-hacemos` con `ProcessTimeline.astro`
- [ ] `/contacto` con formulario y bloques de acción
- [ ] `/articulos` placeholder

### Fase 4 — Páginas legales (prioridad media)

- [ ] Migrar textos legales a archivos de datos o Markdown
- [ ] Layout `LegalContent.astro`
- [ ] Las 3 rutas legales

### Fase 5 — Funcionalidad y calidad (prioridad media-baja)

- [ ] Integrar envío de formularios
- [ ] Banner de cookies + RGPD
- [ ] `@astrojs/sitemap`
- [ ] Favicon y meta Open Graph
- [ ] Optimización imágenes (WebP/AVIF)
- [ ] Auditoría Lighthouse (objetivo: > 90 en todas las métricas)

### Fase 6 — Artículos y mejoras (prioridad baja / futuro)

- [ ] Content Collections para blog
- [ ] Páginas individuales `/articulos/[slug]`
- [ ] Google Analytics (solo con consentimiento)

---

## 8. Checklist de assets a obtener

```
public/images/
├── logo-madrid-calidad.png
├── hero-interior.jpg
├── contacto-bg.jpg
├── servicios/
│   ├── tramites.png
│   ├── accesibilidad.png
│   ├── enfoque.png
│   ├── financiacion.png
│   ├── soluciones.png
│   ├── subvenciones.png
│   ├── certificados.png
│   ├── gestion.png
│   └── rehabilitacion.png
├── rehab-plan-monitor.png
└── proceso/
    ├── estudio.png
    ├── reunion.png
    ├── doc.png
    ├── pres.png
    ├── segui.png
    ├── ejec.png
    ├── cierr.png
    ├── cae.png
    ├── garant.png
    └── aten.png
```

**Script de referencia:** URLs completas en `scripts/scrape-output.txt`.

---

## 9. SEO y accesibilidad

- HTML semántico: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Un único `<h1>` por página
- `alt` descriptivo en todas las imágenes
- Contraste mínimo WCAG AA
- Focus visible en enlaces y botones
- `lang="es"` en `<html>`
- Canonical URLs por página
- `robots.txt` y `sitemap.xml`

---

## 10. Preguntas abiertas para el cliente

Antes de implementar formularios y datos de contacto, confirmar:

1. ¿Email de contacto oficial: `dcampos@madridcalidad.es` o `fcampos.anfeda@gmail.com`?
2. ¿Teléfono oficial: `694 24 40 40` o `711 22 17 61`?
3. ¿Dirección correcta: Castellana 40 o Castellana 140?
4. ¿Los artículos del blog existirán o la sección queda vacía?
5. ¿Servicio de envío de formularios preferido (Formspree, email SMTP propio)?
6. ¿Se requiere Google Analytics?
7. ¿Copyright actualizar a 2026?

---

## 11. Comandos de desarrollo

```bash
npm run dev       # http://localhost:4321
npm run build     # genera ./dist/
npm run preview   # previsualiza build
```

---

## 12. Referencias internas del proyecto

| Recurso | Ubicación |
|---------|-----------|
| Scraping estructural | `scripts/scrape-output.txt` |
| Script de scraping | `scripts/scrape-site.mjs` |
| Config Astro | `astro.config.mjs` |
| Este plan | `docs/PLAN-DESARROLLO.md` |

---

## 13. Notas para el agente de desarrollo

Al implementar cada fase:

1. Consultar la sección correspondiente de este documento.
2. Marcar tareas completadas actualizando los checkboxes de la Fase correspondiente.
3. Priorizar fidelidad visual sobre perfección pixel-perfect en la primera iteración.
4. No añadir dependencias no listadas sin justificación.
5. Resolver las preguntas abiertas (sección 10) antes de hardcodear datos de contacto en producción.
6. Mantener textos legales idénticos al original salvo corrección expresa del cliente.
