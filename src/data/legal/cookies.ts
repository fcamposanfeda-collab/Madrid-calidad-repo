import type { LegalDocument } from '../../types/legal';

export const cookiesDocument: LegalDocument = {
  title: 'POLÍTICA DE COOKIES',
  intro: [
    'Titular: MADRID CALIDAD COSNTRUCTIVA SL',
    'CIF: B56413214',
    'Domicilio social: Paseo de la Castellana 140, 14B, 28046, Madrid, España',
    'Correo electrónico: fcampos.anfeda@gmail.com',
    'Sitio web: madridcalidad.es',
    'En cumplimiento del artículo 22.2 de la Ley 34/2002, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), y del Reglamento (UE) 2016/679 (RGPD), se informa al usuario sobre el uso de cookies en este sitio web.',
  ],
  sections: [
    {
      title: '1. ¿Qué son las cookies?',
      paragraphs: [
        'Las cookies son archivos que se descargan en el dispositivo del usuario al acceder a determinadas páginas web. Permiten almacenar y recuperar información sobre la navegación realizada desde dicho equipo y, dependiendo de la información que contengan, pueden utilizarse para reconocer al usuario.',
      ],
    },
    {
      title: '2. Tipos de cookies utilizadas',
      paragraphs: [
        'El sitio web madridcalidad.es puede utilizar las siguientes categorías de cookies:',
      ],
      subsections: [
        {
          title: 'a) Cookies técnicas o necesarias',
          paragraphs: [
            'Permiten la navegación y el funcionamiento básico del sitio web (formularios de contacto, seguridad, preferencias de consentimiento, etc.).',
            'Estas cookies no requieren consentimiento previo.',
          ],
        },
        {
          title: 'b) Cookies de análisis',
          paragraphs: [
            'Permiten cuantificar el número de usuarios y analizar la utilización que hacen los usuarios del sitio web, con la finalidad de mejorar los servicios ofrecidos.',
            'Este sitio puede utilizar herramientas de análisis proporcionadas por Google LLC, a través de Google Analytics.',
            'Estas cookies solo se instalarán si el usuario presta su consentimiento expreso.',
            'La información recogida puede implicar transferencias internacionales de datos a Estados Unidos, con las garantías adecuadas conforme al RGPD.',
          ],
        },
        {
          title: 'c) Cookies de personalización (en su caso)',
          paragraphs: [
            'Permiten recordar preferencias del usuario como idioma o configuración regional.',
          ],
        },
        {
          title: 'd) Cookies publicitarias (solo si se implementan en el futuro)',
          paragraphs: [
            'Gestionan los espacios publicitarios y pueden analizar hábitos de navegación para mostrar publicidad personalizada. Actualmente, salvo que se indique lo contrario, este sitio web no utiliza cookies publicitarias.',
          ],
        },
      ],
    },
    {
      title: '3. Base jurídica',
      paragraphs: [
        'Cookies técnicas: interés legítimo del responsable.',
        'Cookies analíticas y de personalización: consentimiento del usuario.',
        'El usuario puede retirar su consentimiento en cualquier momento.',
      ],
    },
    {
      title: '4. Conservación de las cookies',
      paragraphs: [
        'Las cookies se conservarán durante el tiempo necesario para cumplir con su finalidad o hasta que el usuario las elimine manualmente desde su navegador.',
        'Las cookies analíticas suelen tener una duración máxima de 24 meses.',
      ],
    },
    {
      title: '5. Gestión y configuración de cookies',
      paragraphs: [
        'El usuario puede aceptar todas las cookies, rechazarlas o configurarlas individualmente a través del panel de configuración disponible en el sitio web.',
        'Asimismo, puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración del navegador: Google Chrome, Mozilla Firefox, Microsoft Edge o Safari.',
        'La desactivación de determinadas cookies puede afectar al funcionamiento correcto del sitio web.',
      ],
    },
    {
      title: '6. Actualización de la Política de Cookies',
      paragraphs: [
        'MADRID CALIDAD COSNTRUCTIVA SL podrá modificar la presente Política de Cookies en función de exigencias legislativas o con la finalidad de adaptarla a nuevas instrucciones de la Agencia Española de Protección de Datos.',
        'Se recomienda revisar esta política periódicamente.',
      ],
    },
  ],
};
