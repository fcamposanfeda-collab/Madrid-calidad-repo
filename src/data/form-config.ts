import { company } from './company';
import { isWeb3FormsAccessKey } from '../utils/web3forms-key.mjs';

const envEndpoint = (import.meta.env.PUBLIC_FORM_ENDPOINT ?? '').trim();
const rawWeb3formsAccessKey = (import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY ?? '').trim();
const rawContactAccessKey = (import.meta.env.PUBLIC_WEB3FORMS_CONTACT_ACCESS_KEY ?? '').trim();
const web3formsAccessKey = isWeb3FormsAccessKey(rawWeb3formsAccessKey) ? rawWeb3formsAccessKey : '';
const contactAccessKey = isWeb3FormsAccessKey(rawContactAccessKey) ? rawContactAccessKey : '';
const fallbackEndpoint = `https://formsubmit.co/ajax/${company.email}`;
const endpoint = envEndpoint || fallbackEndpoint;
const isWeb3Forms = endpoint.includes('web3forms.com');

/**
 * PUBLIC_FORM_ENDPOINT elige el servicio (FormSubmit, Web3Forms, Formspree).
 * PUBLIC_WEB3FORMS_ACCESS_KEY es la clave de presupuestos.
 * PUBLIC_WEB3FORMS_CONTACT_ACCESS_KEY es la clave del formulario de contacto.
 */
export const formConfig = {
  endpoint,
  web3formsAccessKey,
  contactAccessKey,
  isWeb3Forms,
  isFormSubmit: endpoint.includes('formsubmit.co'),
  isConfigured: Boolean(endpoint) && (!isWeb3Forms || Boolean(web3formsAccessKey)),
  isContactConfigured: Boolean(endpoint) && (!isWeb3Forms || Boolean(contactAccessKey)),
} as const;
