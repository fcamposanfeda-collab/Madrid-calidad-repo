import { company } from './company';

export const contact = {
  email: company.email,
  phone: '+34 694 24 40 40',
  phoneDisplay: '694 24 40 40',
  /** Número en formato internacional sin '+' para enlaces wa.me */
  whatsapp: '34694244040',
  address: company.address,
  instagram: 'https://www.instagram.com/mcc_constructora/',
  mapsUrl: 'https://share.google/VX6wLFWHA8ThX7isC',
} as const;

/** Enlace de WhatsApp con mensaje precargado */
export function whatsappHref(message = 'Hola, quiero información sobre una obra.') {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
