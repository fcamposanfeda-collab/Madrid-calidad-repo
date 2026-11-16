export const pagesMeta = {
  '/': {
    title: 'Trabajos verticales en Madrid | Madrid Calidad Constructiva',
    description:
      'Trabajos verticales en Madrid: fachadas, cubiertas e impermeabilización en altura. Rehabilitación y reformas con presupuesto sin compromiso.',
  },
  '/como-lo-hacemos': {
    title: 'Servicios de construcción en Madrid con calidad | Madrid Calidad Constructiva',
    description:
      'En Madrid Calidad Constructiva ofrecemos servicios de construcción y reformas con atención al detalle y materiales premium para resultados duraderos.',
  },
  '/articulos': {
    title: 'Blog de rehabilitación y reformas en Madrid | Madrid Calidad Constructiva',
    description:
      'Guías prácticas sobre rehabilitación energética, SATE, subvenciones Next Generation, reformas integrales, fachadas y cubiertas en Madrid. Consejos de expertos.',
  },
  '/contacto': {
    title: 'Contacto Madrid Calidad Constructiva | Madrid Calidad Constructiva',
    description:
      'Ponte en contacto con Madrid Calidad Constructiva para asesoría personalizada y servicios de construcción premium en Madrid.',
  },
  '/servicios': {
    title: 'Servicios de rehabilitación en Madrid | Madrid Calidad Constructiva',
    description:
      'Rehabilitación energética, SATE, fachadas, cubiertas, impermeabilización y reformas integrales en Madrid.',
  },
  '/ayudas-y-subvenciones': {
    title: 'Ayudas y subvenciones rehabilitación Madrid | Madrid Calidad Constructiva',
    description:
      'Ayudas Next Generation y subvenciones para rehabilitación energética de edificios en Madrid.',
  },
  '/comunidades-de-propietarios': {
    title: 'Rehabilitación comunidades de propietarios Madrid | Madrid Calidad Constructiva',
    description:
      'Rehabilitación de fachadas, cubiertas y eficiencia energética para comunidades de propietarios en Madrid.',
  },
  '/nosotros': {
    title: 'Sobre nosotros | Madrid Calidad Constructiva',
    description: 'Conoce Madrid Calidad Constructiva: rehabilitación energética y reformas integrales en Madrid.',
  },
  '/presupuestos': {
    title: 'Presupuesto reforma y rehabilitación Madrid | Madrid Calidad Constructiva',
    description:
      'Solicita presupuesto orientativo para reformas integrales, rehabilitación energética y SATE en Madrid.',
  },
  '/proyectos': {
    title: 'Proyectos en Madrid | Madrid Calidad Constructiva',
    description: 'Portfolio de obras de rehabilitación y reformas en la Comunidad de Madrid.',
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
