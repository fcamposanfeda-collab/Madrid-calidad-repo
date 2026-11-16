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
  // Solo obras reales con fotos propias. Añadir cada obra terminada con fotos reales.
  {
    slug: 'cubierta-pozuelo',
    title: 'Impermeabilización de cubierta en Pozuelo',
    location: 'Pozuelo de Alarcón',
    service: 'Cubiertas',
    serviceSlug: 'impermeabilizacion-madrid',
    excerpt: 'Renovación de impermeabilización en cubierta plana comunitaria.',
    image: {
      src: '/img/cubierta-pozuelo.jpg',
      alt: 'Cubierta plana con la lámina de impermeabilización colocada',
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
