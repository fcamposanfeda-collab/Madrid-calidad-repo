import { company } from './company';

const envEndpoint = (import.meta.env.PUBLIC_FORM_ENDPOINT ?? '').trim();
const web3formsAccessKey = (import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY ?? '').trim();
const fallbackEndpoint = `https://formsubmit.co/ajax/${company.email}`;
const endpoint = envEndpoint || fallbackEndpoint;
const isWeb3Forms = endpoint.includes('web3forms.com');

/**
 * PUBLIC_FORM_ENDPOINT elige el servicio (FormSubmit, Web3Forms, Formspree).
 * Sin variable, el envío va a FormSubmit y al correo de la empresa.
 * Web3Forms además necesita PUBLIC_WEB3FORMS_ACCESS_KEY.
 */
export const formConfig = {
  endpoint,
  web3formsAccessKey,
  isWeb3Forms,
  isFormSubmit: endpoint.includes('formsubmit.co'),
  isConfigured: Boolean(endpoint) && (!isWeb3Forms || Boolean(web3formsAccessKey)),
} as const;
