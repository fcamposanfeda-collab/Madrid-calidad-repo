# Formulario en Hostinger — Guía rápida

La web de Madrid Calidad se genera como **sitio estático** (`npm run build` → carpeta `dist/`). En Hostinger subes ese contenido por FTP o el administrador de archivos. **No hace falta PHP ni base de datos** para el formulario.

## ¿Afecta Hostinger al formulario?

**No de forma negativa.** Lo único que importa es que el navegador pueda hacer una petición HTTPS a un servicio que reciba el formulario y te envíe un email. Eso funciona igual estés en Hostinger, Netlify o cualquier hosting.

Lo que **no** usarás en este proyecto (salvo que lo pidáis expresamente):

- Formularios del **Website Builder** de Hostinger (esta web es Astro, no el builder).
- Scripts **PHP** en el servidor (opcional, pero innecesario con Web3Forms/Formspree).

## Opción recomendada: Web3Forms

1. Entra en [web3forms.com](https://web3forms.com) y crea una cuenta gratuita.
2. Crea un formulario con el email donde quieres recibir los leads (ej. `dcampos@madridcalidad.es`).
3. Copia tu **Access Key**.
4. En el servidor / variables de entorno del build, define:

```env
PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit
PUBLIC_WEB3FORMS_ACCESS_KEY=tu-clave-aqui
```

Al publicar en Hostinger, crea también `.env.production` con las mismas variables (está en `.gitignore`) y ejecuta `npm run build` antes de subir `dist/`.

Los envíos llegarán al email configurado en Web3Forms. El plan gratuito suele bastar para empezar.

## Alternativa: Formspree

1. Crea un formulario en [formspree.io](https://formspree.io).
2. Usa la URL que te dan:

```env
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

No hace falta `PUBLIC_WEB3FORMS_ACCESS_KEY`.

## Despliegue en Hostinger

1. En local: `npm run build`
2. Sube todo el contenido de `dist/` a `public_html` (o la carpeta del dominio).
3. Asegúrate de que el dominio apunta al hosting y tiene **SSL activo** (HTTPS).

## Probar en local

Crea un archivo `.env` en la raíz del proyecto (no lo subas a git) con las variables anteriores. Reinicia `npm run dev` y envía el formulario del hero.

Sin `.env`, el formulario se muestra pero al enviar verás un aviso de que falta configurar el endpoint.

## Campos que envía el formulario del hero

| Campo | Nombre |
|-------|--------|
| Nombre | `nombre` |
| Email | `email` |
| Teléfono | `telefono` |
| Tipo de servicio | `tipo_servicio` |
| Aceptación privacidad | `privacidad` |

Incluye honeypot anti-spam (`company`, oculto).

## RGPD

El checkbox enlaza a `/politica-de-privacidad`. Mantén esa página actualizada con el responsable del tratamiento y la finalidad (gestión de solicitudes de presupuesto).
