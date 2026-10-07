import { images } from './images';
import { catalogExtraLandings } from './service-catalog';

export type ServiceFaq = { question: string; answer: string };

export type ServiceLanding = {
  slug: string;
  shortTitle: string;
  navLabel: string;
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  intro: string;
  whatIs?: { title: string; paragraphs: string[] };
  benefits: { title: string; description: string }[];
  sections: { title: string; paragraphs: string[] }[];
  faq: ServiceFaq[];
  relatedSlugs: string[];
  image: { src: string; alt: string };
};

export const serviceLandings: ServiceLanding[] = [
  {
    slug: 'rehabilitacion-energetica-madrid',
    shortTitle: 'Rehabilitación energética',
    navLabel: 'Rehabilitación energética',
    title: 'Rehabilitación energética en Madrid | Madrid Calidad Constructiva',
    description:
      'Rehabilitación energética integral de edificios en Madrid. Mejora del confort, ahorro y gestión de subvenciones. Presupuesto sin compromiso.',
    h1: 'Rehabilitación energética en Madrid',
    subtitle: 'Soluciones integrales para mejorar la eficiencia, el confort y el valor de tu edificio.',
    intro:
      'En Madrid Calidad Constructiva desarrollamos proyectos de rehabilitación energética en la Comunidad de Madrid para comunidades de propietarios, promotores y particulares. Analizamos el estado del edificio, definimos las actuaciones prioritarias y gestionamos ayudas públicas para que la inversión sea viable.',
    whatIs: {
      title: '¿Qué es la rehabilitación energética de un edificio?',
      paragraphs: [
        'La rehabilitación energética consiste en un conjunto de obras orientadas a reducir el consumo energético del edificio y mejorar el confort interior: aislamiento de fachadas y cubiertas, renovación de carpinterías, mejora de instalaciones y optimización de sistemas de climatización.',
        'En Madrid, gran parte del parque inmobiliario tiene más de 40 años y presenta deficiencias de aislamiento. Una actuación bien planificada puede reducir significativamente las facturas y mejorar la calificación energética del inmueble.',
      ],
    },
    benefits: [
      { title: 'Ahorro energético', description: 'Menor consumo de calefacción y refrigeración durante todo el año.' },
      { title: 'Confort interior', description: 'Temperaturas más estables y menor sensación de frío o calor en viviendas.' },
      { title: 'Revalorización', description: 'Un edificio eficiente aumenta su atractivo en venta y alquiler.' },
      { title: 'Gestión integral', description: 'Desde el estudio técnico hasta la ejecución y certificación final.' },
    ],
    sections: [
      {
        title: 'Para quién trabajamos',
        paragraphs: [
          'Atendemos comunidades de propietarios, administradores de fincas, propietarios de viviendas unifamiliares y promotores que necesitan una visión global del edificio, no solo una obra puntual.',
          'Nuestro equipo técnico coordina arquitectura, ingeniería y ejecución para que todas las actuaciones encajen en un plan coherente de rehabilitación energética.',
        ],
      },
      {
        title: 'Cómo abordamos cada proyecto',
        paragraphs: [
          'Comenzamos con un diagnóstico del inmueble y una reunión con la junta o el propietario. Elaboramos documentación, presupuesto detallado y, si procede, tramitamos subvenciones antes de iniciar la obra.',
          'Puedes conocer nuestro método completo en la página Cómo lo hacemos, donde detallamos cada fase del proceso.',
        ],
      },
    ],
    faq: [
      {
        question: '¿Cuánto tarda una rehabilitación energética integral?',
        answer:
          'Depende del alcance: actuaciones en fachada o cubierta pueden ejecutarse en semanas; proyectos integrales de edificio suelen planificarse en varios meses. Te damos un calendario realista en el presupuesto.',
      },
      {
        question: '¿Se pueden combinar varias ayudas públicas?',
        answer:
          'En muchos casos sí, siempre que se cumplan los requisitos de cada convocatoria. Te asesoramos sobre compatibilidad entre subvenciones, deducciones y financiación.',
      },
      {
        question: '¿Necesito un proyecto técnico previo?',
        answer:
          'Para obras de cierta envergadura y para acceder a ayudas suele ser necesario. Podemos coordinar la redacción del proyecto y la tramitación ante el ayuntamiento.',
      },
    ],
    relatedSlugs: ['sate-madrid', 'subvenciones-rehabilitacion-madrid', 'certificados-energeticos-madrid'],
    image: images.servicios.rehabilitacion,
  },
  {
    slug: 'sate-madrid',
    shortTitle: 'SATE Madrid',
    navLabel: 'SATE Madrid',
    title: 'SATE Madrid | Aislamiento térmico exterior | Madrid Calidad Constructiva',
    description:
      'Instalación de SATE en Madrid. Aislamiento térmico exterior para fachadas, ahorro energético y mejora estética. Presupuesto gratuito.',
    h1: 'SATE en Madrid: aislamiento térmico exterior',
    subtitle: 'Sistema de Aislamiento Térmico por el Exterior para edificios y comunidades en Madrid.',
    intro:
      'El SATE (Sistema de Aislamiento Térmico por el Exterior) es una de las soluciones más eficaces para rehabilitar fachadas en Madrid sin reducir la superficie interior de las viviendas. Instalamos sistemas adaptados a cada edificio, con acabados duraderos y gestión de licencias y subvenciones.',
    whatIs: {
      title: '¿Qué es el SATE?',
      paragraphs: [
        'El SATE consiste en fijar paneles aislantes en el exterior de la fachada, protegidos con una capa de refuerzo y un acabado decorativo. Mejora el aislamiento térmico y acústico, reduce humedades por condensación y renueva la imagen del edificio.',
        'Es especialmente recomendable en edificios de varias plantas en los que el aislamiento interior no es viable o resulta más costoso para los vecinos.',
      ],
    },
    benefits: [
      { title: 'Hasta 50% menos consumo', description: 'Reducción notable de pérdidas térmicas en invierno y sobrecalentamiento en verano.' },
      { title: 'Sin perder metros', description: 'El aislamiento se instala por fuera; no se reduce la superficie de las viviendas.' },
      { title: 'Fachada renovada', description: 'Amplia variedad de texturas y colores para modernizar el edificio.' },
      { title: 'Obras ordenadas', description: 'Planificación por fases para minimizar molestias en comunidades de vecinos.' },
    ],
    sections: [
      {
        title: 'Proceso de instalación',
        paragraphs: [
          'Preparamos la superficie de la fachada, colocamos el aislamiento con adhesivos y anclajes mecánicos, aplicamos la malla de refuerzo y finalizamos con el revestimiento elegido por la comunidad.',
          'Cada fase se supervisa técnicamente para garantizar adherencia, estanqueidad y cumplimiento normativo.',
        ],
      },
      {
        title: 'SATE y subvenciones en Madrid',
        paragraphs: [
          'Muchas actuaciones de SATE pueden acogerse a ayudas de rehabilitación energética. Te informamos sobre convocatorias vigentes y nos encargamos de la documentación necesaria.',
        ],
      },
    ],
    faq: [
      {
        question: '¿Cuánto cuesta el SATE en Madrid?',
        answer:
          'El precio depende de metros de fachada, tipo de aislamiento, altura del edificio y acabado. Solicita presupuesto personalizado; te damos un rango orientativo tras la visita técnica.',
      },
      {
        question: '¿El SATE sirve para cualquier fachada?',
        answer:
          'La mayoría de fachadas de edificios residenciales son aptas. Realizamos un estudio previo para detectar patologías, humedades o necesidad de reparaciones antes del aislamiento.',
      },
      {
        question: '¿Cuánto dura la obra de SATE?',
        answer:
          'En un edificio medio, la ejecución suele durar entre varias semanas y dos meses, según plantas, accesos y condiciones meteorológicas.',
      },
    ],
    relatedSlugs: ['rehabilitacion-energetica-madrid', 'rehabilitacion-fachadas-madrid', 'subvenciones-rehabilitacion-madrid'],
    image: images.servicios.soluciones,
  },
  {
    slug: 'rehabilitacion-fachadas-madrid',
    shortTitle: 'Fachadas',
    navLabel: 'Rehabilitación de fachadas',
    title: 'Rehabilitación de fachadas en Madrid | Madrid Calidad Constructiva',
    description:
      'Rehabilitación y restauración de fachadas en Madrid. Reparación de patologías, SATE, monocapa y acabados. Presupuesto para comunidades.',
    h1: 'Rehabilitación de fachadas en Madrid',
    subtitle: 'Reparación, aislamiento y renovación estética de fachadas para edificios y comunidades.',
    intro:
      'Las fachadas soportan lluvia, sol y ciclos térmicos que generan grietas, desconchones y humedades. Rehabilitamos fachadas en toda la Comunidad de Madrid con soluciones técnicas adaptadas: reparación estructural, SATE, monocapa, pintura industrial y trabajos en altura.',
    benefits: [
      { title: 'Reparación de patologías', description: 'Grietas, desprendimientos y humedades tratadas con criterio técnico.' },
      { title: 'Eficiencia energética', description: 'Combinamos restauración con aislamiento cuando el edificio lo necesita.' },
      { title: 'Seguridad', description: 'Eliminación de riesgos por elementos deteriorados en zonas comunes.' },
      { title: 'Valor del inmueble', description: 'Una fachada rehabilitada mejora la imagen y la comercialización del edificio.' },
    ],
    sections: [
      {
        title: 'Rehabilitación de fachadas en comunidades',
        paragraphs: [
          'Trabajamos con presidentes de comunidad y administradores de fincas. Coordinamos plazos, accesos, permisos y comunicación con los vecinos para que la obra transcurra con el mínimo impacto.',
        ],
      },
      {
        title: 'Soluciones según el estado del edificio',
        paragraphs: [
          'No todas las fachadas necesitan el mismo tratamiento. A veces basta con reparación localizada y pintura; en otros casos conviene un SATE integral o un sistema monocapa continuo.',
        ],
      },
    ],
    faq: [
      {
        question: '¿Cómo rehabilitar la fachada de una comunidad de propietarios?',
        answer:
          'Se requiere acuerdo en junta, diagnóstico técnico, presupuesto comparativo y, según la obra, licencia municipal. Te acompañamos en todo el proceso.',
      },
      {
        question: '¿Fachada con SATE o solo reparación?',
        answer:
          'Si el edificio tiene mal aislamiento y consumo elevado, el SATE suele ser la opción más rentable a medio plazo. Si la estructura está sana y solo hay deterioro superficial, puede bastar reparación y acabado.',
      },
    ],
    relatedSlugs: ['sate-madrid', 'trabajos-verticales-madrid', 'rehabilitacion-energetica-madrid'],
    image: images.servicios.enfoque,
  },
  {
    slug: 'rehabilitacion-cubiertas-madrid',
    shortTitle: 'Cubiertas',
    navLabel: 'Rehabilitación de cubiertas',
    title: 'Rehabilitación de cubiertas en Madrid | Madrid Calidad Constructiva',
    description:
      'Rehabilitación de cubiertas y azoteas en Madrid. Reparación estructural, impermeabilización y mejora térmica. Presupuesto sin compromiso.',
    h1: 'Rehabilitación de cubiertas en Madrid',
    subtitle: 'Reparación, impermeabilización y mejora energética de cubiertas planas y inclinadas.',
    intro:
      'La cubierta es la primera barrera contra la intemperie. Filtraciones, humedades en azoteas y deterioro del aislamiento afectan a todo el edificio. Rehabilitamos cubiertas en Madrid con soluciones de impermeabilización, renovación de aislamiento y refuerzo estructural cuando es necesario.',
    benefits: [
      { title: 'Estanqueidad', description: 'Eliminación de filtraciones y humedades en bajos y áticos.' },
      { title: 'Aislamiento térmico', description: 'Mejora del confort en últimas plantas y reducción de consumo.' },
      { title: 'Durabilidad', description: 'Materiales y sistemas con garantía y mantenimiento planificado.' },
      { title: 'Inspección técnica', description: 'Diagnóstico previo para priorizar actuaciones y presupuesto.' },
    ],
    sections: [
      {
        title: 'Tipos de cubierta que rehabilitamos',
        paragraphs: [
          'Cubiertas planas transitables y no transitables, tejados inclinados, azoteas comunitarias y cubiertas industriales. Adaptamos el sistema constructivo a cada caso.',
        ],
      },
    ],
    faq: [
      {
        question: '¿Cuándo rehabilitar una cubierta?',
        answer:
          'Ante filtraciones recurrentes, burbujas en impermeabilización, aislamiento húmedo o más de 15–20 años sin actuación relevante. Una inspección anual en comunidades evita daños mayores.',
      },
      {
        question: '¿Se puede mejorar el aislamiento sin cambiar toda la cubierta?',
        answer:
          'A veces sí, según el estado de las capas existentes. En la visita técnica definimos si conviene reparación localizada o renovación integral.',
      },
    ],
    relatedSlugs: ['impermeabilizacion-madrid', 'rehabilitacion-energetica-madrid', 'trabajos-verticales-madrid'],
    image: images.servicios.gestion,
  },
  {
    slug: 'impermeabilizacion-madrid',
    shortTitle: 'Impermeabilización',
    navLabel: 'Impermeabilización',
    title: 'Impermeabilización en Madrid | Cubiertas y terrazas | Madrid Calidad Constructiva',
    description:
      'Impermeabilización de cubiertas, terrazas y sótanos en Madrid. Soluciones duraderas contra filtraciones y humedades.',
    h1: 'Impermeabilización en Madrid',
    subtitle: 'Protección contra filtraciones en cubiertas, terrazas, balcones y elementos singulares.',
    intro:
      'La impermeabilización correcta evita daños estructurales, humedades en viviendas y costes de reparación recurrentes. Aplicamos sistemas de impermeabilización en cubiertas planas, terrazas, patios y zonas enterradas en edificios de Madrid y alrededores.',
    benefits: [
      { title: 'Sin filtraciones', description: 'Barrera continua contra agua de lluvia y filtraciones capilares.' },
      { title: 'Sistemas certificados', description: 'Membranas, poliuretanos y morteros según el soporte y uso.' },
      { title: 'Garantía', description: 'Control de calidad en aplicación y pruebas de estanqueidad.' },
      { title: 'Mantenimiento', description: 'Recomendaciones de revisión periódica para alargar la vida útil.' },
    ],
    sections: [
      {
        title: 'Impermeabilización en comunidades de propietarios',
        paragraphs: [
          'Las filtraciones desde cubierta o terrazas comunitarias son una de las causas más frecuentes de conflictos entre vecinos. Actuamos con rapidez, documentamos el origen del problema y ejecutamos la solución con mínima afectación al vecindario.',
        ],
      },
    ],
    faq: [
      {
        question: '¿Cuándo impermeabilizar una cubierta?',
        answer:
          'Cuando aparecen manchas en techos, goteras tras lluvia, burbujas en la capa impermeable o el sistema tiene más de su vida útil recomendada. Una inspección profesional aclara el momento óptimo.',
      },
    ],
    relatedSlugs: ['rehabilitacion-cubiertas-madrid', 'rehabilitacion-fachadas-madrid'],
    image: images.servicios.soluciones,
  },
  {
    slug: 'trabajos-verticales-madrid',
    shortTitle: 'Trabajos verticales',
    navLabel: 'Trabajos verticales',
    title: 'Trabajos verticales en Madrid | Madrid Calidad Constructiva',
    description:
      'Trabajos verticales y en altura en Madrid. Rehabilitación de fachadas, limpieza e impermeabilización con técnicas de descuelgue.',
    h1: 'Trabajos verticales en Madrid',
    subtitle: 'Acceso seguro en altura para rehabilitación, reparación y mantenimiento de edificios.',
    intro:
      'Los trabajos verticales permiten actuar en fachadas y cubiertas sin montar andamiaje completo, reduciendo plazos y molestias en vías urbanas y patios estrechos. Nuestro equipo está formado para rehabilitación, reparación puntual, limpieza e impermeabilización en altura en Madrid.',
    benefits: [
      { title: 'Menos molestias', description: 'Ideal en calles estrechas y patios donde el andamio no es viable.' },
      { title: 'Rapidez', description: 'Montaje ágil para reparaciones y mantenimiento programado.' },
      { title: 'Seguridad', description: 'Personal con formación específica y equipos homologados.' },
      { title: 'Coste optimizado', description: 'En muchos casos más económico que un andamio tradicional.' },
    ],
    sections: [
      {
        title: 'Trabajos verticales vs andamio',
        paragraphs: [
          'El andamio conviene en reformas integrales de gran superficie. Los trabajos verticales son preferibles para reparaciones localizadas, limpieza, sellados y actuaciones en zonas de difícil acceso. Te asesoramos sobre la opción más eficiente.',
        ],
      },
    ],
    faq: [
      {
        question: '¿Qué trabajos se pueden hacer con descuelgue?',
        answer:
          'Reparación de fachada, sellado de juntas, limpieza, pintura, instalación de elementos ligeros e inspección visual. Para obras de gran envergadura evaluamos combinación con otros medios de acceso.',
      },
    ],
    relatedSlugs: ['rehabilitacion-fachadas-madrid', 'rehabilitacion-cubiertas-madrid'],
    image: images.servicios.accesibilidad,
  },
  {
    slug: 'subvenciones-rehabilitacion-madrid',
    shortTitle: 'Subvenciones',
    navLabel: 'Subvenciones',
    title: 'Subvenciones rehabilitación Madrid | Madrid Calidad Constructiva',
    description:
      'Gestión de subvenciones para rehabilitación energética en Madrid. Next Generation, ayudas autonómicas y tramitación completa.',
    h1: 'Subvenciones para rehabilitación en Madrid',
    subtitle: 'Te ayudamos a identificar, solicitar y justificar ayudas públicas para tu edificio.',
    intro:
      'Acceder a subvenciones puede reducir de forma muy significativa el coste de una rehabilitación energética. En Madrid Calidad Constructiva gestionamos la tramitación ante administraciones, preparamos la documentación técnica y coordinamos plazos para que la obra cumpla los requisitos de cada convocatoria.',
    benefits: [
      { title: 'Convocatorias vigentes', description: 'Información actualizada sobre ayudas europeas, estatales y autonómicas.' },
      { title: 'Tramitación completa', description: 'Solicitud, justificación y seguimiento administrativo.' },
      { title: 'Proyecto técnico', description: 'Coordinación con técnicos colegiados cuando la ayuda lo exige.' },
      { title: 'Financiación', description: 'Opciones para complementar el importe no cubierto por subvención.' },
    ],
    sections: [
      {
        title: 'Next Generation y rehabilitación de edificios',
        paragraphs: [
          'Los fondos europeos han impulsado programas de rehabilitación a nivel de edificio con intensidades de ayuda elevadas según el ahorro energético alcanzado. Te explicamos requisitos, plazos y documentación en una reunión sin compromiso.',
        ],
      },
    ],
    faq: [
      {
        question: '¿Qué porcentaje de la obra puede cubrir una subvención?',
        answer:
          'Varía según programa, tipo de actuación y ahorro energético. En proyectos de edificio completo pueden alcanzarse ayudas muy significativas. Analizamos tu caso concreto.',
      },
    ],
    relatedSlugs: ['rehabilitacion-energetica-madrid', 'certificados-energeticos-madrid'],
    image: images.servicios.subvenciones,
  },
  {
    slug: 'certificados-energeticos-madrid',
    shortTitle: 'Certificados energéticos',
    navLabel: 'Certificados energéticos',
    title: 'Certificados energéticos Madrid | Madrid Calidad Constructiva',
    description:
      'Certificados de eficiencia energética y CAE en Madrid. Tramitación, asesoramiento y mejora de la calificación del edificio.',
    h1: 'Certificados energéticos en Madrid',
    subtitle: 'Certificación, diagnóstico energético y certificados de ahorro energético (CAE).',
    intro:
      'El certificado energético es obligatorio en compraventa y alquiler, y es la base para planificar mejoras en el edificio. Gestionamos certificados energéticos, estudios de viabilidad y certificados de ahorro energético (CAE) vinculados a actuaciones de rehabilitación.',
    benefits: [
      { title: 'Cumplimiento legal', description: 'Certificación conforme a normativa vigente.' },
      { title: 'Hoja de ruta', description: 'Recomendaciones de mejora ordenadas por rentabilidad.' },
      { title: 'CAE', description: 'Gestión de certificados de ahorro cuando aplica a tu proyecto.' },
      { title: 'Integración con obra', description: 'Certificación antes y después de la rehabilitación.' },
    ],
    sections: [
      {
        title: 'Certificado energético y rehabilitación',
        paragraphs: [
          'Una rehabilitación bien ejecutada mejora la calificación del edificio. Coordinamos la certificación con las obras para demostrar el ahorro ante administraciones y compradores potenciales.',
        ],
      },
    ],
    faq: [
      {
        question: '¿Cuánto tarda un certificado energético?',
        answer:
          'Tras la visita al inmueble, la emisión suele completarse en pocos días laborables según complejidad del edificio.',
      },
    ],
    relatedSlugs: ['rehabilitacion-energetica-madrid', 'subvenciones-rehabilitacion-madrid'],
    image: images.servicios.certificados,
  },
  {
    slug: 'accesibilidad-edificios-madrid',
    shortTitle: 'Accesibilidad',
    navLabel: 'Accesibilidad en edificios',
    title: 'Accesibilidad en edificios Madrid | Madrid Calidad Constructiva',
    description:
      'Obras de accesibilidad en edificios de Madrid. Rampas, ascensores, portal y zonas comunes adaptadas a normativa.',
    h1: 'Accesibilidad en edificios en Madrid',
    subtitle: 'Mejora de accesos, ascensores y zonas comunes para cumplir normativa y ganar confort.',
    intro:
      'La accesibilidad es un derecho y una inversión en valor del edificio. Ejecutamos obras de adaptación en portales, rampas, ascensores, escaleras y zonas comunes, coordinando proyecto y licencias en la Comunidad de Madrid.',
    benefits: [
      { title: 'Cumplimiento normativo', description: 'Actuaciones alineadas con legislación de accesibilidad.' },
      { title: 'Ascensores y rampas', description: 'Soluciones técnicas para edificios sin ascensor.' },
      { title: 'Zonas comunes', description: 'Portales, pasillos y accesos adaptados.' },
      { title: 'Subvenciones', description: 'Información sobre ayudas para accesibilidad cuando existan.' },
    ],
    sections: [
      {
        title: 'Accesibilidad en comunidades de propietarios',
        paragraphs: [
          'La instalación de ascensor o la eliminación de barreras arquitectónicas requiere acuerdo vecinal y proyecto técnico. Te acompañamos desde la viabilidad hasta la puesta en servicio.',
        ],
      },
    ],
    faq: [
      {
        question: '¿Es obligatorio el ascensor en mi edificio?',
        answer:
          'Depende de la normativa aplicable según año de construcción, número de plantas y reformas previas. Realizamos un estudio de viabilidad para tu caso.',
      },
    ],
    relatedSlugs: ['reforma-integral-madrid', 'rehabilitacion-energetica-madrid'],
    image: images.servicios.accesibilidad,
  },
  {
    slug: 'reforma-integral-madrid',
    shortTitle: 'Reforma integral',
    navLabel: 'Reforma integral',
    title: 'Reforma integral en Madrid | Madrid Calidad Constructiva',
    description:
      'Reformas integrales de viviendas y locales en Madrid. Proyecto, ejecución y acabados con gestión completa de la obra.',
    h1: 'Reforma integral en Madrid',
    subtitle: 'Reformas completas de viviendas, locales y espacios con un único interlocutor.',
    intro:
      'Una reforma integral exige coordinación de gremios, plazos y calidad de acabados. En Madrid Calidad Constructiva asumimos la gestión completa: desde el diseño y la licencia hasta la entrega llave en mano, con la misma exigencia técnica que aplicamos a la rehabilitación de edificios.',
    benefits: [
      { title: 'Un solo interlocutor', description: 'Coordinación de albañilería, instalaciones y acabados.' },
      { title: 'Presupuesto cerrado', description: 'Partidas detalladas y seguimiento de desviaciones.' },
      { title: 'Plazos definidos', description: 'Calendario de obra acordado desde el inicio.' },
      { title: 'Calidad MCC', description: 'Materiales y procesos alineados con nuestros estándares.' },
    ],
    sections: [
      {
        title: 'Reformas para particulares y locales',
        paragraphs: [
          'Viviendas, áticos, locales comerciales y oficinas. Adaptamos el alcance a tu presupuesto: reforma integral o por fases.',
        ],
      },
    ],
    faq: [
      {
        question: '¿Cuánto tarda una reforma integral de piso?',
        answer:
          'Una vivienda media suele estar entre 2 y 4 meses según metros, cambios de distribución y calidad de acabados. Definimos plazos en el presupuesto.',
      },
    ],
    relatedSlugs: ['rehabilitacion-energetica-madrid', 'accesibilidad-edificios-madrid'],
    image: images.servicios.financiacion,
  },
];

const combinedServiceLandings = [...serviceLandings, ...catalogExtraLandings];
const featuredServiceSlug = 'trabajos-verticales-madrid';

export const allServiceLandings = [
  ...combinedServiceLandings.filter((service) => service.slug === featuredServiceSlug),
  ...combinedServiceLandings.filter((service) => service.slug !== featuredServiceSlug),
];

export const serviceSlugs = allServiceLandings.map((s) => s.slug);

export function getServiceBySlug(slug: string): ServiceLanding | undefined {
  return allServiceLandings.find((s) => s.slug === slug);
}

export function getServiceHref(slug: string): string {
  return `/servicios/${slug}`;
}
