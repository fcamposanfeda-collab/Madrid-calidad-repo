/** Pasos resumidos para la home — versión ampliada en /como-lo-hacemos */
export const homeProcessIntro = {
  title: 'Proceso de trabajo',
  subtitle: 'Una ruta clara desde el primer contacto hasta la entrega de tu proyecto.',
  ctaLabel: 'Ver proceso completo',
  ctaHref: '/como-lo-hacemos',
} as const;

export const homeProcessSteps = [
  {
    step: 1,
    title: 'Valoración inicial',
    description:
      'Visitamos el inmueble, analizamos necesidades técnicas y energéticas y definimos el alcance de la actuación.',
  },
  {
    step: 2,
    title: 'Presupuesto personalizado',
    description:
      'Elaboramos un presupuesto detallado, gratuito y sin compromiso, con plazos y calidades acordadas.',
  },
  {
    step: 3,
    title: 'Ayudas y documentación',
    description:
      'Gestionamos subvenciones, licencias y documentación técnica necesaria ante la administración.',
  },
  {
    step: 4,
    title: 'Ejecución de obra',
    description:
      'Coordinamos gremios y materiales con seguimiento continuo del jefe de proyecto.',
  },
  {
    step: 5,
    title: 'Entrega y certificación',
    description:
      'Revisión final de acabados, certificados energéticos y documentación de cierre de obra.',
  },
  {
    step: 6,
    title: 'Garantía y post-venta',
    description:
      'Seguimiento tras la entrega y atención para cualquier ajuste cubierto por garantía.',
  },
] as const;
