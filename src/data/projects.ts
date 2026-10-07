import { getServiceHref } from './services-seo';

export type Project = {
  slug: string;
  title: string;
  location: string;
  service: string;
  serviceSlug: string;
  excerpt: string;
  image: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    slug: 'rehabilitacion-energetica-chamberi',
    title: 'Rehabilitación energética en Chamberí',
    location: 'Chamberí, Madrid',
    service: 'Rehabilitación energética',
    serviceSlug: 'rehabilitacion-energetica-madrid',
    excerpt: 'Actuación integral en comunidad de vecinos con mejora de envolvente y gestión de subvenciones.',
    image: {
      src: 'https://images.unsplash.com/photo-1753223386004-6485ef89db5e?w=1200&q=80',
      alt: 'Edificio de viviendas con andamio en una rehabilitación de fachada',
    },
  },
  {
    slug: 'sate-mostoles',
    title: 'Instalación SATE en Móstoles',
    location: 'Móstoles',
    service: 'SATE',
    serviceSlug: 'sate-madrid',
    excerpt: 'Aislamiento térmico exterior en edificio residencial de cinco plantas.',
    image: {
      src: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=80',
      alt: 'Fachada de edificio residencial de varias plantas',
    },
  },
  {
    slug: 'reforma-integral-arganzuela',
    title: 'Reforma integral en Arganzuela',
    location: 'Arganzuela, Madrid',
    service: 'Reforma integral',
    serviceSlug: 'reforma-integral-madrid',
    excerpt: 'Renovación completa de vivienda con nueva distribución y eficiencia energética.',
    image: {
      src: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80',
      alt: 'Interior de vivienda reformada, con salón y cocina',
    },
  },
  {
    slug: 'fachada-alcorcon',
    title: 'Rehabilitación de fachada en Alcorcón',
    location: 'Alcorcón',
    service: 'Fachadas',
    serviceSlug: 'rehabilitacion-fachadas-madrid',
    excerpt: 'Reparación de patologías y acabado monocapa en comunidad de propietarios.',
    image: {
      src: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=80',
      alt: 'Fachada de ladrillo de un edificio rehabilitado',
    },
  },
  {
    slug: 'cubierta-pozuelo',
    title: 'Impermeabilización de cubierta en Pozuelo',
    location: 'Pozuelo de Alarcón',
    service: 'Cubiertas',
    serviceSlug: 'impermeabilizacion-madrid',
    excerpt: 'Renovación de impermeabilización en cubierta plana comunitaria.',
    image: {
      src: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80',
      alt: 'Operario reparando la cubierta de un edificio',
    },
  },
  {
    slug: 'reforma-cocina-lista',
    title: 'Reforma de cocina en Lista',
    location: 'Lista, Madrid',
    service: 'Reforma de cocina',
    serviceSlug: 'reforma-cocina-madrid',
    excerpt: 'Cocina abierta al salón con mobiliario a medida e instalaciones renovadas.',
    image: {
      src: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=1200&q=80',
      alt: 'Cocina reformada con mobiliario blanco e isla',
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectHref(slug: string): string {
  return `/proyectos/${slug}`;
}

export function getProjectServiceHref(project: Project): string {
  return getServiceHref(project.serviceSlug);
}
