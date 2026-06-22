const serviceSlugs = [
  'rehabilitacion-energetica-madrid',
  'sate-madrid',
  'rehabilitacion-fachadas-madrid',
  'rehabilitacion-cubiertas-madrid',
  'impermeabilizacion-madrid',
  'trabajos-verticales-madrid',
  'subvenciones-rehabilitacion-madrid',
  'certificados-energeticos-madrid',
  'accesibilidad-edificios-madrid',
  'reforma-integral-madrid',
  'reforma-cocina-madrid',
  'reforma-bano-madrid',
  'reforma-piso-madrid',
  'reforma-chalets-madrid',
  'reforma-locales-madrid',
  'electricidad-madrid',
  'fontaneria-madrid',
  'albanileria-madrid',
  'pintura-madrid',
  'carpinteria-madrid',
];

const projectSlugs = [
  'rehabilitacion-energetica-chamberi',
  'sate-mostoles',
  'reforma-integral-arganzuela',
  'fachada-alcorcon',
  'cubierta-pozuelo',
  'reforma-cocina-lista',
];

const routes = [
  '/',
  '/servicios',
  ...serviceSlugs.map((slug) => `/servicios/${slug}`),
  '/ayudas-y-subvenciones',
  '/comunidades-de-propietarios',
  '/nosotros',
  '/presupuestos',
  '/proyectos',
  ...projectSlugs.map((slug) => `/proyectos/${slug}`),
  '/como-lo-hacemos',
  '/articulos',
  '/contacto',
  '/terminos-y-condiciones',
  '/politica-de-privacidad',
  '/politica-de-cookies',
  '/robots.txt',
  '/sitemap-index.xml',
];

const baseUrl = process.argv[2] ?? 'http://localhost:4321';
let failed = 0;

console.log(`Verificando rutas en ${baseUrl}\n`);

for (const route of routes) {
  const url = `${baseUrl}${route}`;
  try {
    const response = await fetch(url, { redirect: 'follow' });
    const status = response.status;
    const ok = status >= 200 && status < 400;
    console.log(`${ok ? '✓' : '✗'} ${route} → ${status}`);
    if (!ok) failed += 1;
  } catch (error) {
    console.log(`✗ ${route} → ERROR: ${error.message}`);
    failed += 1;
  }
}

if (failed > 0) {
  console.log(`\n${failed} ruta(s) fallida(s).`);
  process.exit(1);
}

console.log(`\nTodas las ${routes.length} rutas responden correctamente.`);
