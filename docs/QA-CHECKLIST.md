# QA Checklist — Madrid Calidad Constructiva

> Verificación tras completar el plan SDD.  
> **Última actualización:** 22/06/2026

## Build y despliegue

- [x] `npm run build` completa sin errores
- [x] 7 rutas generadas en `dist/`
- [x] `npm run preview` — navegación completa sin 404 (`npm run qa:routes`)
- [ ] Despliegue en entorno de staging/producción

## Navegación (SPEC-504.5)

- [x] `/` — Inicio con todas las secciones
- [x] `/como-lo-hacemos` — 10 pasos del proceso
- [x] `/articulos` — estado vacío "Próximamente"
- [x] `/contacto` — formulario + datos de contacto
- [x] `/terminos-y-condiciones` — contenido legal
- [x] `/politica-de-privacidad` — contenido legal
- [x] `/politica-de-cookies` — contenido legal
- [x] `/robots.txt` y `/sitemap-index.xml` accesibles
- [x] Header: 4 enlaces + logo
- [x] Footer: contacto, legal, Instagram

## Responsive (SPEC-504.6)

- [x] `overflow-x: clip` en html/body (prevención scroll horizontal)
- [x] Menú móvil con `aria-expanded` y cierre con Escape
- [ ] Revisión visual manual en 375px / 768px / 1280px

## Formularios (SPEC-501)

- [x] Validación HTML5 en campos requeridos
- [x] Honeypot anti-spam presente
- [ ] Con `PUBLIC_FORM_ENDPOINT` configurado: envío exitoso en producción
- [x] Sin endpoint: mensaje de error informativo
- [x] Mensaje de éxito/error visible (`role="status"`)

## Cookies (SPEC-502)

- [x] Banner visible en primera visita
- [x] Aceptar / Rechazar / Configurar disponibles
- [x] Preferencia persistida en `localStorage` (`mcc-cookie-consent`)
- [x] Enlace a `/politica-de-cookies`
- [x] Analytics no carga sin consentimiento

## SEO (SPEC-503)

- [x] `sitemap-index.xml` generado en build
- [x] `robots.txt` en `public/`
- [x] `<html lang="es">` en todas las páginas
- [x] Title + description únicos por página
- [x] Meta Open Graph y Twitter Card
- [x] JSON-LD (`GeneralContractor` + `WebSite`)
- [x] Lighthouse SEO ≥ 95

## Lighthouse — Mobile (22/06/2026, localhost preview)

| Métrica | Objetivo | Resultado |
|---------|----------|-----------|
| Performance | ≥ 90 | **95** |
| Accessibility | ≥ 90 | **95** |
| Best Practices | ≥ 90 | **100** |
| SEO | ≥ 95 | **100** |

Informe: `scripts/lighthouse-full.json` (generar con comando abajo)

## Mejoras aplicadas en QA

- Enlace "Saltar al contenido principal" (accesibilidad)
- Schema.org JSON-LD para negocio local
- Preload imagen hero (LCP)
- Fuentes Google con carga no bloqueante
- Imágenes hero/contacto optimizadas (~231 KB / ~66 KB)
- Script `npm run qa:routes` para verificación automatizada

## Contenido pendiente de cliente

- [ ] Confirmar email oficial (DEC-01)
- [ ] Confirmar teléfono oficial (DEC-02)
- [ ] Confirmar dirección (DEC-03)
- [ ] Configurar `PUBLIC_FORM_ENDPOINT` en producción (DEC-04)
- [ ] Decidir Google Analytics (DEC-05)
- [ ] Contenido blog / artículos (DEC-06)

## Comandos de verificación

```bash
npm run build
npm run preview
npm run qa:routes -- http://localhost:4321

# Lighthouse (requiere preview activo)
npx lighthouse http://localhost:4321/ --output=json --output-path=scripts/lighthouse-full.json --chrome-flags="--headless"
```
