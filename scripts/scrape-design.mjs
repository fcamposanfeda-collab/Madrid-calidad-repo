const url = 'https://madridcalidad.es/';
const r = await fetch(url);
const html = await r.text();

// Colors from inline JSON/styles
const colors = [...html.matchAll(/#[0-9a-fA-F]{3,8}/g)].map((m) => m[0]);
const colorFreq = {};
colors.forEach((c) => { colorFreq[c] = (colorFreq[c] || 0) + 1; });
console.log('TOP_COLORS:', Object.entries(colorFreq).sort((a, b) => b[1] - a[1]).slice(0, 20).map(([c, n]) => `${c}(${n})`).join(' | '));

// Font families
const fonts = [...html.matchAll(/font-family[^;]{0,80}/gi)].map((m) => m[0]);
console.log('FONT_SAMPLES:', [...new Set(fonts)].slice(0, 10).join('\n'));

// Text blocks from page (paragraph-like content)
const texts = [...html.matchAll(/"text":"([^"]{20,200})"/g)].map((m) => m[1].replace(/\\n/g, ' '));
console.log('TEXT_BLOCKS:', [...new Set(texts)].slice(0, 40).join('\n---\n'));

// Section titles from alt texts and aria
const alts = [...html.matchAll(/alt="([^"]+)"/gi)].map((m) => m[1]);
console.log('ALT_TEXTS:', [...new Set(alts)].join(' | '));

// Article links on articulos page
const artUrl = 'https://madridcalidad.es/articulos';
const artHtml = (await fetch(artUrl)).text();
const articleLinks = [...artHtml.matchAll(/href="(\/articulos\/[^"]+)"/g)].map((m) => m[1]);
console.log('ARTICLE_LINKS:', [...new Set(articleLinks)].join(' | '));
const articleTitles = [...artHtml.matchAll(/"title":"([^"]+)"/g)].map((m) => m[1]);
console.log('ARTICLE_TITLES:', [...new Set(articleTitles)].slice(0, 20).join(' | '));

// Como lo hacemos steps
const comoHtml = (await fetch('https://madridcalidad.es/como-lo-hacemos')).text();
const comoTexts = [...comoHtml.matchAll(/"text":"([^"]{10,150})"/g)].map((m) => m[1].replace(/\\n/g, ' '));
console.log('COMO_TEXTS:', [...new Set(comoTexts)].join('\n---\n'));

// Fetch CSS for design tokens
const cssPath = html.match(/href="(\/_astro[^"]+\.css)"/)?.[1];
if (cssPath) {
  const css = await (await fetch('https://madridcalidad.es' + cssPath)).text();
  const vars = [...css.matchAll(/--[a-zA-Z0-9-]+:\s*[^;]+/g)].map((m) => m[0]);
  console.log('CSS_VARS:', [...new Set(vars)].slice(0, 30).join(' | '));
  const fontFaces = [...css.matchAll(/@font-face\s*\{[^}]+\}/g)].map((m) => m[0].slice(0, 120));
  console.log('FONT_FACES:', fontFaces.join('\n'));
}
