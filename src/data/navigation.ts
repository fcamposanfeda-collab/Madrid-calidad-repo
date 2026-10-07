import { getServiceHref } from './services-seo';

export type NavLink = { label: string; href: string };

export type NavDropdown = {
  type: 'dropdown';
  label: string;
  columns: { title?: string; links: NavLink[] }[];
};

export type NavSimple = {
  type: 'link';
  label: string;
  href: string;
};

export type NavItem = NavDropdown | NavSimple;

const rehabLinks: NavLink[] = [
  { label: 'Trabajos verticales', href: getServiceHref('trabajos-verticales-madrid') },
  { label: 'Rehabilitación de fachadas', href: getServiceHref('rehabilitacion-fachadas-madrid') },
  { label: 'Rehabilitación de cubiertas', href: getServiceHref('rehabilitacion-cubiertas-madrid') },
  { label: 'Impermeabilización', href: getServiceHref('impermeabilizacion-madrid') },
  { label: 'Rehabilitación energética', href: getServiceHref('rehabilitacion-energetica-madrid') },
  { label: 'SATE Madrid', href: getServiceHref('sate-madrid') },
  { label: 'Accesibilidad en edificios', href: getServiceHref('accesibilidad-edificios-madrid') },
];

const reformasLinks: NavLink[] = [
  { label: 'Reforma integral', href: getServiceHref('reforma-integral-madrid') },
  { label: 'Reforma de cocina', href: getServiceHref('reforma-cocina-madrid') },
  { label: 'Reforma de baño', href: getServiceHref('reforma-bano-madrid') },
  { label: 'Reforma de piso', href: getServiceHref('reforma-piso-madrid') },
  { label: 'Reforma de chalets', href: getServiceHref('reforma-chalets-madrid') },
  { label: 'Reforma de locales', href: getServiceHref('reforma-locales-madrid') },
];

const serviciosLinks: NavLink[] = [
  { label: 'Electricidad', href: getServiceHref('electricidad-madrid') },
  { label: 'Fontanería', href: getServiceHref('fontaneria-madrid') },
  { label: 'Albañilería', href: getServiceHref('albanileria-madrid') },
  { label: 'Pintura', href: getServiceHref('pintura-madrid') },
  { label: 'Carpintería', href: getServiceHref('carpinteria-madrid') },
  { label: 'Certificados energéticos', href: getServiceHref('certificados-energeticos-madrid') },
  { label: 'Subvenciones', href: getServiceHref('subvenciones-rehabilitacion-madrid') },
  { label: 'Ayudas y subvenciones', href: '/ayudas-y-subvenciones' },
  { label: 'Comunidades de propietarios', href: '/comunidades-de-propietarios' },
];

export const mainNav: NavItem[] = [
  {
    type: 'dropdown',
    label: 'Rehabilitación',
    columns: [
      { title: 'En altura', links: rehabLinks.slice(0, 4) },
      { title: 'Energía y envolvente', links: rehabLinks.slice(4) },
    ],
  },
  {
    type: 'dropdown',
    label: 'Reformas',
    columns: [{ links: reformasLinks }],
  },
  {
    type: 'dropdown',
    label: 'Servicios',
    columns: [
      { title: 'Gremios', links: serviciosLinks.slice(0, 5) },
      { title: 'Gestión y ayudas', links: serviciosLinks.slice(5) },
    ],
  },
  { type: 'link', label: 'Proyectos', href: '/proyectos' },
  { type: 'link', label: 'Blog', href: '/articulos' },
  { type: 'link', label: 'Nosotros', href: '/nosotros' },
  { type: 'link', label: 'Presupuestos', href: '/presupuestos' },
];

/** Enlaces planos para footer */
export const footerServiceLinks: NavLink[] = [
  ...rehabLinks.slice(0, 4),
  ...reformasLinks.slice(0, 3),
  { label: 'Ver todos los servicios', href: '/servicios' },
];

export const legalNav = [
  { label: 'Términos y condiciones', href: '/terminos-y-condiciones' },
  { label: 'Política de privacidad', href: '/politica-de-privacidad' },
  { label: 'Política de cookies', href: '/politica-de-cookies' },
] as const;

export type LegalNavItem = (typeof legalNav)[number];
