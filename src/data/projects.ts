import { stockImages } from './placeholders';
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
    image: stockImages.proyecto1,
  },
  {
    slug: 'sate-mostoles',
    title: 'Instalación SATE en Móstoles',
    location: 'Móstoles',
    service: 'SATE',
    serviceSlug: 'sate-madrid',
    excerpt: 'Aislamiento térmico exterior en edificio residencial de cinco plantas.',
    image: stockImages.proyecto2,
  },
  {
    slug: 'reforma-integral-arganzuela',
    title: 'Reforma integral en Arganzuela',
    location: 'Arganzuela, Madrid',
    service: 'Reforma integral',
    serviceSlug: 'reforma-integral-madrid',
    excerpt: 'Renovación completa de vivienda con nueva distribución y eficiencia energética.',
    image: stockImages.proyecto3,
  },
  {
    slug: 'fachada-alcorcon',
    title: 'Rehabilitación de fachada en Alcorcón',
    location: 'Alcorcón',
    service: 'Fachadas',
    serviceSlug: 'rehabilitacion-fachadas-madrid',
    excerpt: 'Reparación de patologías y acabado monocapa en comunidad de propietarios.',
    image: stockImages.fachada,
  },
  {
    slug: 'cubierta-pozuelo',
    title: 'Impermeabilización de cubierta en Pozuelo',
    location: 'Pozuelo de Alarcón',
    service: 'Cubiertas',
    serviceSlug: 'impermeabilizacion-madrid',
    excerpt: 'Renovación de impermeabilización en cubierta plana comunitaria.',
    image: stockImages.cubierta,
  },
  {
    slug: 'reforma-cocina-lista',
    title: 'Reforma de cocina en Lista',
    location: 'Lista, Madrid',
    service: 'Reforma de cocina',
    serviceSlug: 'reforma-cocina-madrid',
    excerpt: 'Cocina abierta al salón con mobiliario a medida e instalaciones renovadas.',
    image: stockImages.cocina,
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
