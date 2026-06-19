const pages = {
  home: 'https://madridcalidad.es/',
  articulos: 'https://madridcalidad.es/articulos',
  como: 'https://madridcalidad.es/como-lo-hacemos',
};

for (const [name, url] of Object.entries(pages)) {
  const html = await (await fetch(url)).text();
  console.log(`\n=== ${name} ===`);
  const paragraphs = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((m) => m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim())
    .filter((t) => t.length > 15);
  console.log('P:', [...new Set(paragraphs)].join('\n'));
  const lis = [...html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
    .map((m) => m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim())
    .filter((t) => t.length > 5);
  if (lis.length) console.log('LI:', [...new Set(lis)].join(' | '));
  const spans = [...html.matchAll(/<span[^>]*>([\s\S]*?)<\/span>/gi)]
    .map((m) => m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim())
    .filter((t) => t.length > 20 && t.length < 200);
  if (spans.length) console.log('SPAN:', [...new Set(spans)].slice(0, 25).join('\n'));
  const links = [...html.matchAll(/href="(\/[^"#?]+)"/g)].map((m) => m[1]);
  const unique = [...new Set(links)].filter((l) => !l.startsWith('/_astro'));
  console.log('ROUTES:', unique.join(' | '));
}
