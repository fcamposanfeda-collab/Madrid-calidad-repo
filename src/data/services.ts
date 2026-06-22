import { images } from './images';

export const servicesIntro =
  'Ofrecemos soluciones integrales para mejorar la eficiencia, accesibilidad y sostenibilidad de tu edificio. Nuestro equipo técnico te acompaña en cada etapa, desde el análisis hasta la ejecución final.';

export const services = [
  { id: 'tramites', title: 'Trámites', ...images.servicios.tramites },
  { id: 'accesibilidad', title: 'Accesibilidad', ...images.servicios.accesibilidad },
  { id: 'enfoque', title: 'Enfoque técnico', ...images.servicios.enfoque },
  { id: 'financiacion', title: 'Financiación', ...images.servicios.financiacion },
  { id: 'soluciones', title: 'Soluciones', ...images.servicios.soluciones },
  { id: 'subvenciones', title: 'Subvenciones', ...images.servicios.subvenciones },
  { id: 'certificados', title: 'Certificados', ...images.servicios.certificados },
  { id: 'gestion', title: 'Gestión', ...images.servicios.gestion },
  { id: 'rehabilitacion', title: 'Rehabilitación', ...images.servicios.rehabilitacion },
] as const;
