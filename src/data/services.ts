import { images } from './images';
import { getServiceHref } from './services-seo';

export const servicesIntro =
  'Ofrecemos soluciones integrales para mejorar la eficiencia, accesibilidad y sostenibilidad de tu edificio. Nuestro equipo técnico te acompaña en cada etapa, desde el análisis hasta la ejecución final.';

export const services = [
  {
    id: 'tramites',
    title: 'Trámites',
    href: getServiceHref('subvenciones-rehabilitacion-madrid'),
    ...images.servicios.tramites,
  },
  {
    id: 'accesibilidad',
    title: 'Accesibilidad',
    href: getServiceHref('accesibilidad-edificios-madrid'),
    ...images.servicios.accesibilidad,
  },
  {
    id: 'enfoque',
    title: 'Enfoque técnico',
    href: getServiceHref('rehabilitacion-energetica-madrid'),
    ...images.servicios.enfoque,
  },
  {
    id: 'financiacion',
    title: 'Financiación',
    href: '/ayudas-y-subvenciones',
    ...images.servicios.financiacion,
  },
  {
    id: 'soluciones',
    title: 'Soluciones',
    href: getServiceHref('sate-madrid'),
    ...images.servicios.soluciones,
  },
  {
    id: 'subvenciones',
    title: 'Subvenciones',
    href: getServiceHref('subvenciones-rehabilitacion-madrid'),
    ...images.servicios.subvenciones,
  },
  {
    id: 'certificados',
    title: 'Certificados',
    href: getServiceHref('certificados-energeticos-madrid'),
    ...images.servicios.certificados,
  },
  {
    id: 'gestion',
    title: 'Gestión',
    href: getServiceHref('reforma-integral-madrid'),
    ...images.servicios.gestion,
  },
  {
    id: 'rehabilitacion',
    title: 'Rehabilitación',
    href: getServiceHref('rehabilitacion-energetica-madrid'),
    ...images.servicios.rehabilitacion,
  },
] as const;
