import type { LegalDocument } from '../../types/legal';

export const privacidadDocument: LegalDocument = {
  title: 'POLÍTICA DE PRIVACIDAD',
  sections: [
    {
      title: '1. Responsable del tratamiento',
      paragraphs: [
        'MADRID CALIDAD COSNTRUCTIVA SL',
        'CIF: B56413214',
        'Domicilio: Paseo de la Castellana 140, 14B, 28046, Madrid',
        'Correo electrónico: fcampos.anfeda@gmail.com',
      ],
    },
    {
      title: '2. Normativa aplicable',
      paragraphs: ['Esta política se ha elaborado conforme a:'],
      list: [
        'Reglamento (UE) 2016/679 (RGPD)',
        'Ley Orgánica 3/2018 de Protección de Datos y Garantía de los Derechos Digitales',
        'Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico',
      ],
    },
    {
      title: '3. Datos que se recogen',
      paragraphs: ['A través del sitio web se podrán recoger:'],
      list: [
        'Nombre y apellidos',
        'Teléfono',
        'Correo electrónico',
        'Dirección del inmueble (en caso de solicitar presupuesto)',
        'Cualquier información facilitada voluntariamente en formularios o correos electrónicos',
      ],
    },
    {
      title: '4. Finalidad del tratamiento',
      paragraphs: ['Los datos personales serán tratados para:'],
      list: [
        'Gestionar solicitudes de información o presupuestos',
        'Contactar con el interesado',
        'Gestionar la relación contractual en caso de contratación',
        'Cumplir obligaciones legales',
        'Atender consultas',
      ],
      subsections: [
        {
          title: '',
          paragraphs: [
            'No se realizarán decisiones automatizadas ni elaboración de perfiles.',
          ],
        },
      ],
    },
    {
      title: '5. Base jurídica',
      paragraphs: ['El tratamiento se basa en:'],
      list: [
        'El consentimiento del interesado al enviar formularios',
        'La ejecución de un contrato o medidas precontractuales',
        'El cumplimiento de obligaciones legales',
      ],
    },
    {
      title: '6. Conservación de los datos',
      paragraphs: ['Los datos se conservarán:'],
      list: [
        'Mientras exista relación contractual',
        'Mientras el interesado no solicite su supresión',
        'Durante los plazos legales necesarios para atender responsabilidades',
      ],
    },
    {
      title: '7. Destinatarios',
      paragraphs: [
        'No se cederán datos a terceros salvo obligación legal.',
        'Podrán tener acceso a los datos proveedores de servicios (alojamiento web, gestoría, asesoría, etc.), con los correspondientes contratos de encargado del tratamiento.',
      ],
    },
    {
      title: '8. Derechos del interesado',
      paragraphs: ['El usuario puede ejercer los siguientes derechos:'],
      list: [
        'Acceso',
        'Rectificación',
        'Supresión',
        'Oposición',
        'Limitación del tratamiento',
        'Portabilidad',
      ],
      subsections: [
        {
          title: '',
          paragraphs: [
            'Para ejercerlos deberá enviar solicitud junto con copia de documento identificativo al correo: fcampos.anfeda@gmail.com.',
            'Asimismo, podrá presentar reclamación ante la Agencia Española de Protección de Datos si considera que sus derechos no han sido vulnerados adecuadamente.',
          ],
        },
      ],
    },
    {
      title: '9. Seguridad',
      paragraphs: [
        'La empresa aplica las medidas técnicas y organizativas necesarias para garantizar la confidencialidad, integridad y disponibilidad de los datos personales.',
      ],
    },
    {
      title: '10. Modificaciones',
      paragraphs: [
        'La presente Política de Privacidad podrá modificarse para adaptarse a cambios normativos o a la actividad de la empresa. Se recomienda revisarla periódicamente.',
      ],
    },
  ],
};
