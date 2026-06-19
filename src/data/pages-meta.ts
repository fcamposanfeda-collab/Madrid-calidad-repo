export const pagesMeta = {
  '/': {
    title: 'Servicios de construcción en Madrid | Madrid Calidad Constructiva',
    description:
      'Ofrecemos servicios de construcción de alta calidad en Madrid, con atención personalizada y procesos claros para garantizar proyectos duraderos y seguros. Confía en nuestra experiencia para tus necesidades de construcción.',
  },
  '/como-lo-hacemos': {
    title: 'Servicios de construcción en Madrid con calidad | Madrid Calidad Constructiva',
    description:
      'En Madrid Calidad Constructiva ofrecemos servicios de construcción y reformas con atención al detalle y materiales premium para resultados duraderos.',
  },
  '/articulos': {
    title: 'Ventajas de elegir Madrid Calidad Constructiva | Madrid Calidad Constructiva',
    description:
      'Calidad premium en construcción local, atención personalizada y procesos transparentes que garantizan resultados duraderos y confianza total.',
  },
  '/contacto': {
    title: 'Contacto Madrid Calidad Constructiva | Madrid Calidad Constructiva',
    description:
      'Ponte en contacto con Madrid Calidad Constructiva para asesoría personalizada y servicios de construcción premium en Madrid.',
  },
  '/terminos-y-condiciones': {
    title: 'Términos y condiciones | Madrid Calidad Constructiva',
    description: 'Términos y condiciones de uso del sitio web de Madrid Calidad Constructiva.',
  },
  '/politica-de-privacidad': {
    title: 'Política de privacidad | Madrid Calidad Constructiva',
    description: 'Política de privacidad y protección de datos de Madrid Calidad Constructiva.',
  },
  '/politica-de-cookies': {
    title: 'Política de cookies | Madrid Calidad Constructiva',
    description: 'Política de cookies del sitio web de Madrid Calidad Constructiva.',
  },
} as const;

export type PagePath = keyof typeof pagesMeta;

export function getPageMeta(path: string) {
  const normalized = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
  return pagesMeta[normalized as PagePath] ?? pagesMeta['/'];
}
