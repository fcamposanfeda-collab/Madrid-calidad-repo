# Preparación SEO — Análisis de competencia

> Documento de trabajo para la siguiente fase: posicionamiento frente a la competencia.  
> **Estado:** Pendiente de URLs de referencia del cliente

## Qué necesitamos de ti

Envía 3–5 URLs de competidores directos en Madrid (construcción, rehabilitación energética, reformas integrales). Con ellas analizaremos:

1. **Keywords y titles** — qué términos posicionan en `<title>`, H1 y meta description
2. **Estructura de contenido** — secciones, longitud de textos, blog/artículos
3. **Schema.org** — tipos de datos estructurados que usan
4. **URLs y arquitectura** — slugs, profundidad, enlazado interno
5. **Core Web Vitals** — rendimiento comparativo
6. **Backlinks visibles** — directorios, Google Business, redes

## Acciones previstas (tras recibir URLs)

| Prioridad | Acción | Impacto SEO |
|-----------|--------|-------------|
| Alta | Optimizar titles/descriptions por keyword | Snippets en Google |
| Alta | Ampliar textos en home y servicios (500+ palabras/sección) | Relevancia semántica |
| Alta | Crear artículos en `/articulos` (Content Collections) | Long-tail keywords |
| Media | Landing pages por servicio (`/servicios/rehabilitacion`, etc.) | Intención de búsqueda |
| Media | FAQ con schema `FAQPage` | Rich results |
| Media | Google Business Profile alineado con NAP (nombre, dirección, teléfono) | Local SEO |
| Baja | Hreflang (solo si multi-idioma) | — |

## Base actual del proyecto

Ya implementado:

- Sitemap XML automático
- `robots.txt`
- Meta OG + Twitter Card
- JSON-LD `GeneralContractor` + `WebSite`
- Canonical URLs
- `lang="es"`
- Lighthouse SEO: 100 (mobile, 22/06/2026)

## Keywords objetivo (borrador)

Basado en el sitio original y sector:

- rehabilitación energética Madrid
- construcción Madrid
- reformas integrales Madrid
- subvenciones rehabilitación edificios
- certificado energético comunidad de edificios
- eficiencia energética edificios

> Se refinarán tras analizar la competencia.

## NAP consistency (crítico para local SEO)

Antes de posicionar, confirmar un único conjunto de datos:

| Campo | Valor provisional |
|-------|-------------------|
| Nombre | Madrid Calidad Constructiva |
| Teléfono | +34 694 24 40 40 |
| Email | dcampos@madridcalidad.es |
| Dirección | Paseo de la Castellana 40, 8º |

Debe coincidir en web, Google Business, schema.org y directorios.

## Próximo paso

Cuando envíes las URLs de competencia, crearemos `docs/ANALISIS-COMPETENCIA.md` con el gap analysis y un plan de cambios concreto en el código.
