/** Testimonios orientativos — sustituir por reseñas reales verificables */
export const testimonialsIntro = {
  title: 'Opiniones de nuestros clientes',
  subtitle:
    'La satisfacción de comunidades y particulares es el mejor reflejo de nuestro trabajo en rehabilitación y reformas.',
  ratingLabel: '4,8 / 5 valoración media orientativa',
} as const;

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Gestionaron la rehabilitación de fachada y las subvenciones de principio a fin. Muy claros en plazos y en la comunicación con la comunidad.',
    author: 'María G.',
    role: 'Presidenta de comunidad',
    location: 'Chamberí, Madrid',
  },
  {
    id: '2',
    quote:
      'Reforma integral de piso con buen asesoramiento en materiales y cumplimiento de fechas. El resultado superó lo que esperábamos.',
    author: 'Carlos R.',
    role: 'Propietario',
    location: 'Arganzuela, Madrid',
  },
  {
    id: '3',
    quote:
      'Instalación de SATE en nuestro edificio con mínimas molestias para los vecinos. Notamos mejoría de confort desde el primer invierno.',
    author: 'Ana L.',
    role: 'Administradora de fincas',
    location: 'Móstoles',
  },
];
