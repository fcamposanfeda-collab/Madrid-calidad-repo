export const contactPageContent = {
  title: 'Contáctanos',
  welcomeTitle: 'Ponte en contacto con nosotros',
  welcomeText:
    'Estaremos encantados de ayudarte con tu proyecto de forma personalizada.',
  actions: {
    call: { label: 'Llámanos', key: 'phone' as const },
    email: { label: 'Escríbenos', key: 'email' as const },
    visit: { label: 'Visítanos', key: 'maps' as const },
  },
  details: {
    phoneLabel: 'Teléfono',
    emailLabel: 'Email',
    addressLabel: 'Dirección',
  },
} as const;

export const articlesPageContent = {
  title: 'Artículos',
  emptyTitle: 'Próximamente',
  emptyText:
    'Estamos preparando contenido sobre construcción, rehabilitación energética y eficiencia sostenible. Vuelve pronto para descubrir nuestros artículos.',
} as const;
