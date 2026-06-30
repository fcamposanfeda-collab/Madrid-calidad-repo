const CDN = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/TIEPVkHe2s8H0jez';
const CDN_WIDE = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/TIEPVkHe2s8H0jez';

const assets = [
  { url: `${CDN}/logo-madrid-calidad-WNHOi4ILpZcoMBAY.png`, dest: 'public/images/logo-madrid-calidad.png' },
  {
    url: 'https://images.unsplash.com/photo-1654302861319-849671c254cf?auto=format&fit=crop&w=1280&q=75',
    dest: 'public/images/hero-interior.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1619972898592-5de4b1c68025?auto=format&fit=crop&w=1280&q=75',
    dest: 'public/images/contacto-bg.jpg',
  },
  {
    url: `${CDN_WIDE}/captura-de-pantalla-2026-02-13-105219-ATAw6anrnyrDFAyH.png`,
    dest: 'public/images/rehab-plan-monitor.png',
  },
  { url: `${CDN}/tramites-Kqo04dOpjT5RhVCW.png`, dest: 'public/images/servicios/tramites.png' },
  { url: `${CDN}/accesibilidad-1R10GdzGIltnWvMh.png`, dest: 'public/images/servicios/accesibilidad.png' },
  { url: `${CDN}/enfoque-eisJGrl8Md6XqHah.png`, dest: 'public/images/servicios/enfoque.png' },
  { url: `${CDN}/financiacia3n-ZPICi4tMvkfcHY6H.png`, dest: 'public/images/servicios/financiacion.png' },
  { url: `${CDN}/soluciones-o8DVwlj84YN7TmpS.png`, dest: 'public/images/servicios/soluciones.png' },
  { url: `${CDN}/subvenciones-zYl7as0uAXIFT6rP.png`, dest: 'public/images/servicios/subvenciones.png' },
  { url: `${CDN}/certificados-usYMTg3Xl6XS048w.png`, dest: 'public/images/servicios/certificados.png' },
  { url: `${CDN}/gestion-JdEwqdQihpkxSIb8.png`, dest: 'public/images/servicios/gestion.png' },
  { url: `${CDN}/rehabilitacia3n-aSDuP3xUDQWWVZTg.png`, dest: 'public/images/servicios/rehabilitacion.png' },
  { url: `${CDN}/estudio-zTrXMJLNaCSitvhE.png`, dest: 'public/images/proceso/estudio.png' },
  { url: `${CDN}/reunion-YfkgDNGf9LlUJGVr.png`, dest: 'public/images/proceso/reunion.png' },
  { url: `${CDN}/doc-rjHLYxAbb1brWABc.png`, dest: 'public/images/proceso/doc.png' },
  { url: `${CDN}/pres-XvaUFh1QBKi57CIo.png`, dest: 'public/images/proceso/pres.png' },
  { url: `${CDN}/segui-fWGcWEP3RyRzXSDW.png`, dest: 'public/images/proceso/segui.png' },
  { url: `${CDN}/ejec-xT3PcUV6VEmYkRdj.png`, dest: 'public/images/proceso/ejec.png' },
  { url: `${CDN}/cierr-L4U0vcqsUqBOEMOb.png`, dest: 'public/images/proceso/cierr.png' },
  { url: `${CDN}/cae-MQweLTYCORMgcfIv.png`, dest: 'public/images/proceso/cae.png' },
  { url: `${CDN}/garant-y0rB5dmEDF4y6YpS.png`, dest: 'public/images/proceso/garant.png' },
  { url: `${CDN}/aten-sxqVM29oQ7lB5iDS.png`, dest: 'public/images/proceso/aten.png' },
];

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

for (const { url, dest } of assets) {
  await mkdir(dirname(dest), { recursive: true });
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed ${url}: ${response.status}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(dest, buffer);
  console.log(`✓ ${dest} (${(buffer.length / 1024).toFixed(1)} KB)`);
}

console.log(`\nDescargadas ${assets.length} imágenes.`);
