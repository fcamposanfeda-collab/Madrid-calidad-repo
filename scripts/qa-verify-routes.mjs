const routes = [
  '/',
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

console.log('\nTodas las rutas responden correctamente.');
