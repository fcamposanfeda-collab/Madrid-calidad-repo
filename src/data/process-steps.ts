import { images } from './images';

export const processIntro = {
  title: '¿Cómo Lo Hacemos?',
  subtitle: 'La ruta clara hacia la eficiencia energética y la sostenibilidad.',
} as const;

export const processSteps = [
  {
    id: 'estudio',
    step: 1,
    title: 'Estudio inicial',
    description:
      'Analizamos tu edificio y definimos las necesidades técnicas, energéticas y normativas para trazar un plan de actuación a medida.',
    ...images.proceso.estudio,
  },
  {
    id: 'reunion',
    step: 2,
    title: 'Reunión con el cliente',
    description:
      'Te presentamos el diagnóstico, resolvemos dudas y alineamos objetivos, plazos y expectativas del proyecto.',
    ...images.proceso.reunion,
  },
  {
    id: 'doc',
    step: 3,
    title: 'Documentación',
    description:
      'Preparamos la documentación técnica necesaria para la tramitación, licencias y gestión administrativa del proyecto.',
    ...images.proceso.doc,
  },
  {
    id: 'pres',
    step: 4,
    title: 'Presupuesto',
    description:
      'Elaboramos un presupuesto detallado y transparente, con desglose de partidas, materiales y calendario de ejecución.',
    ...images.proceso.pres,
  },
  {
    id: 'segui',
    step: 5,
    title: 'Seguimiento',
    description:
      'Coordinamos cada fase de la obra con informes periódicos para que tengas visibilidad total del avance.',
    ...images.proceso.segui,
  },
  {
    id: 'ejec',
    step: 6,
    title: 'Ejecución de obra',
    description:
      'Ejecutamos las actuaciones con equipos cualificados, materiales de calidad y cumplimiento estricto de plazos.',
    ...images.proceso.ejec,
  },
  {
    id: 'cierr',
    step: 7,
    title: 'Cierre de obra',
    description:
      'Realizamos la entrega formal del proyecto, verificando acabados, funcionamiento y conformidad con lo acordado.',
    ...images.proceso.cierr,
  },
  {
    id: 'cae',
    step: 8,
    title: 'Certificados de ahorro energético (CAE)',
    description:
      'Gestionamos la certificación energética y los certificados de ahorro cuando aplican a tu rehabilitación.',
    ...images.proceso.cae,
  },
  {
    id: 'garant',
    step: 9,
    title: 'Garantía',
    description:
      'Activamos las garantías correspondientes y documentamos las condiciones de cobertura post-obra.',
    ...images.proceso.garant,
  },
  {
    id: 'aten',
    step: 10,
    title: 'Atención post-obra',
    description:
      'Seguimos a tu disposición para incidencias, mantenimiento y futuras mejoras de eficiencia en tu edificio.',
    ...images.proceso.aten,
  },
] as const;
