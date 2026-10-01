import { company } from './company';

/** El destino va en la URL para que los envíos lleguen siempre a este buzón. */
export const formConfig = {
  endpoint: `https://formsubmit.co/ajax/${company.email}`,
  isConfigured: true,
} as const;
