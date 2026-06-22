import { stockImages } from './placeholders';
import type { ServiceLanding } from './services-seo';

function createLanding(
  slug: string,
  shortTitle: string,
  h1: string,
  intro: string,
  image: { src: string; alt: string },
  relatedSlugs: string[],
): ServiceLanding {
  return {
    slug,
    shortTitle,
    navLabel: shortTitle,
    title: `${h1} | Madrid Calidad Constructiva`,
    description: `${intro.slice(0, 150)}… Presupuesto sin compromiso en Madrid.`,
    h1,
    subtitle: `Servicio profesional en Madrid y Comunidad de Madrid.`,
    intro,
    benefits: [
      { title: 'Equipo propio', description: 'Profesionales coordinados bajo un único interlocutor.' },
      { title: 'Presupuesto claro', description: 'Partidas detalladas y sin compromiso inicial.' },
      { title: 'Plazos acordados', description: 'Planificación realista y seguimiento de obra.' },
      { title: 'Calidad MCC', description: 'Materiales y acabados según estándares de la empresa.' },
    ],
    sections: [
      {
        title: 'Cómo trabajamos',
        paragraphs: [
          'Visitamos el inmueble, definimos alcance y calidades, tramitamos licencias si procede y ejecutamos la obra con jefe de proyecto asignado.',
          'Consulta nuestro proceso completo en la sección Cómo lo hacemos.',
        ],
      },
    ],
    faq: [
      {
        question: `¿Cuánto cuesta ${shortTitle.toLowerCase()} en Madrid?`,
        answer:
          'El precio depende de metros, estado del inmueble y calidades. Solicita presupuesto personalizado tras visita técnica gratuita.',
      },
      {
        question: '¿Gestionáis licencias y permisos?',
        answer: 'Sí, nos encargamos de la documentación necesaria ante el ayuntamiento cuando la obra lo requiere.',
      },
    ],
    relatedSlugs,
    image,
  };
}

export const catalogExtraLandings: ServiceLanding[] = [
  createLanding(
    'reforma-cocina-madrid',
    'Reforma de cocina',
    'Reforma de cocina en Madrid',
    'Diseño, distribución, mobiliario e instalaciones para cocinas funcionales y actuales. Reformamos cocinas en pisos, chalets y locales con gestión integral de gremios.',
    stockImages.cocina,
    ['reforma-integral-madrid', 'fontaneria-madrid', 'electricidad-madrid'],
  ),
  createLanding(
    'reforma-bano-madrid',
    'Reforma de baño',
    'Reforma de baño en Madrid',
    'Renovación completa de baños: cambio de bañera por ducha, sanitarios, alicatado, fontanería y ventilación. Soluciones adaptadas a cada vivienda.',
    stockImages.bano,
    ['reforma-integral-madrid', 'fontaneria-madrid'],
  ),
  createLanding(
    'reforma-piso-madrid',
    'Reforma de piso',
    'Reforma de piso en Madrid',
    'Reformas integrales y parciales de pisos en Madrid: distribución, instalaciones, suelos, pintura y acabados con un único equipo.',
    stockImages.piso,
    ['reforma-integral-madrid', 'pintura-madrid'],
  ),
  createLanding(
    'reforma-chalets-madrid',
    'Reforma de chalets',
    'Reforma de chalets en Madrid',
    'Rehabilitación y reforma de chalets y viviendas unifamiliares: fachada, cubierta, interior y eficiencia energética.',
    stockImages.chalet,
    ['rehabilitacion-energetica-madrid', 'reforma-integral-madrid'],
  ),
  createLanding(
    'reforma-locales-madrid',
    'Reforma de locales',
    'Reforma de locales y oficinas en Madrid',
    'Adecuación de locales comerciales y oficinas: distribución, instalaciones, accesibilidad y acabados corporativos.',
    stockImages.local,
    ['reforma-integral-madrid', 'electricidad-madrid'],
  ),
  createLanding(
    'electricidad-madrid',
    'Electricidad',
    'Electricidad en Madrid',
    'Instalaciones eléctricas nuevas y renovaciones completas. Cuadros, puntos de luz, domótica y boletines conforme a normativa.',
    stockImages.electricidad,
    ['reforma-integral-madrid', 'reforma-piso-madrid'],
  ),
  createLanding(
    'fontaneria-madrid',
    'Fontanería',
    'Fontanería en Madrid',
    'Fontanería para reformas y rehabilitación: sustitución de tuberías, baños, cocinas y detección de averías.',
    stockImages.fontaneria,
    ['reforma-bano-madrid', 'reforma-cocina-madrid'],
  ),
  createLanding(
    'albanileria-madrid',
    'Albañilería',
    'Albañilería en Madrid',
    'Obra de albañilería, tabiquería, enlucidos y pequeña estructura para reformas integrales y rehabilitación de edificios.',
    stockImages.albanileria,
    ['reforma-integral-madrid', 'reforma-piso-madrid'],
  ),
  createLanding(
    'pintura-madrid',
    'Pintura',
    'Pintura en Madrid',
    'Pintura de interiores y exteriores, alisados y acabados decorativos para viviendas, locales y zonas comunes.',
    stockImages.pintura,
    ['reforma-piso-madrid', 'rehabilitacion-fachadas-madrid'],
  ),
  createLanding(
    'carpinteria-madrid',
    'Carpintería',
    'Carpintería en Madrid',
    'Carpintería de madera y PVC: puertas, armarios, tarimas y cerramientos con acabados de calidad.',
    stockImages.carpinteria,
    ['reforma-integral-madrid', 'accesibilidad-edificios-madrid'],
  ),
];

export const catalogLinks = catalogExtraLandings.map((s) => ({
  label: s.navLabel,
  href: `/servicios/${s.slug}`,
}));
