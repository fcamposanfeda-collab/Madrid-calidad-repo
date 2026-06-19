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

export type NavItem = (typeof mainNav)[number];
