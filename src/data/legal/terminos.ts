import type { LegalDocument } from '../../types/legal';
import { company } from '../company';

export const terminosDocument: LegalDocument = {
  title: 'TÉRMINOS Y CONDICIONES DE USO',
  intro: [
    `Titular: ${company.legalName}`,
    `CIF: ${company.cif}`,
    `Domicilio: ${company.address}`,
    `Correo electrónico: ${company.email}`,
    `Sitio web: ${company.website}`,
  ],
  sections: [
    {
      title: '1. Objeto',
      paragraphs: [
        'Los presentes Términos y Condiciones regulan el acceso y uso del sitio web madridcalidad.es, titularidad de MADRID CALIDAD COSNTRUCTIVA SL, empresa dedicada a la prestación de servicios de construcción, reformas, rehabilitación y gestión de obras.',
        'El acceso al sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de las presentes condiciones.',
      ],
    },
    {
      title: '2. Condiciones de acceso y uso',
      paragraphs: ['El usuario se compromete a:'],
      list: [
        'Utilizar el sitio web conforme a la legislación vigente.',
        'No realizar actividades ilícitas o contrarias a la buena fe.',
        'No dañar, inutilizar o sobrecargar la web.',
        'No introducir virus o cualquier otro sistema perjudicial.',
      ],
      subsections: [
        {
          title: '',
          paragraphs: [
            'La empresa se reserva el derecho a interrumpir el acceso al sitio web en cualquier momento si detecta un uso contrario a la ley o a las presentes condiciones.',
          ],
        },
      ],
    },
    {
      title: '3. Servicios ofrecidos',
      paragraphs: [
        'La información publicada en el sitio web tiene carácter meramente informativo. La contratación de servicios se formalizará mediante presupuesto aceptado por el cliente o contrato específico.',
        'La empresa se reserva el derecho a modificar, ampliar o eliminar los servicios ofrecidos en la web sin previo aviso.',
      ],
    },
    {
      title: '4. Propiedad intelectual e industrial',
      paragraphs: [
        'Todos los contenidos del sitio web (textos, imágenes, diseños, logotipos, estructura, código fuente y demás elementos) son titularidad de MADRID CALIDAD COSNTRUCTIVA SL o dispone de los derechos necesarios para su uso.',
        'Queda prohibida su reproducción, distribución o modificación sin autorización expresa.',
      ],
    },
    {
      title: '5. Exclusión de responsabilidad',
      paragraphs: [
        'La empresa no garantiza la ausencia de errores en el acceso al sitio web ni en su contenido, aunque adoptará las medidas necesarias para evitarlos y corregirlos.',
        'No se responsabiliza de los daños derivados del uso indebido del sitio web ni de interrupciones técnicas.',
      ],
    },
    {
      title: '6. Enlaces a terceros',
      paragraphs: [
        'En caso de que el sitio web incluya enlaces a páginas externas, la empresa no se responsabiliza de sus contenidos ni de sus políticas de privacidad.',
      ],
    },
    {
      title: '7. Protección de datos',
      paragraphs: [
        'El tratamiento de datos personales se rige por lo dispuesto en la Política de Privacidad disponible en este sitio web.',
      ],
    },
    {
      title: '8. Legislación aplicable y jurisdicción',
      paragraphs: [
        'Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier conflicto, las partes se someterán a los Juzgados y Tribunales de Madrid.',
      ],
    },
  ],
};
