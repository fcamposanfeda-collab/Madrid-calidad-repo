/** Configuración de formularios (variables PUBLIC_* en .env / .env.production) */
export const formConfig = {
  endpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
  web3formsAccessKey: import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY ?? '',
  isConfigured:
    Boolean(import.meta.env.PUBLIC_FORM_ENDPOINT) &&
    Boolean(import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY),
} as const;
