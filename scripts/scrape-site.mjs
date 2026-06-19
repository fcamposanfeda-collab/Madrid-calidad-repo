const urls = [
  'https://madridcalidad.es/',
  'https://madridcalidad.es/como-lo-hacemos',
  'https://madridcalidad.es/articulos',
  'https://madridcalidad.es/contacto',
  'https://madridcalidad.es/terminos-y-condiciones',
  'https://madridcalidad.es/politica-de-privacidad',
  'https://madridcalidad.es/politica-de-cookies',
];

function stripTags(s) {
  return s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

for (const url of urls) {
  try {
    const r = await fetch(url);
    const html = await r.text();
    console.log('\n==========', url, r.status, '==========');
    console.log('LENGTH:', html.length);
    const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1];
    console.log('TITLE:', title);
    const desc = html.match(/<meta[^>]+name="description"[^>]+content="([^"]+)"/i)?.[1]
      || html.match(/<meta[^>]+content="([^"]+)"[^>]+name="description"/i)?.[1];
    console.log('DESCRIPTION:', desc);
    const ogImage = html.match(/property="og:image"[^>]+content="([^"]+)"/i)?.[1];
    console.log('OG_IMAGE:', ogImage);
    const generator = html.match(/<meta[^>]+name="generator"[^>]+content="([^"]+)"/i)?.[1];
    console.log('GENERATOR:', generator);
    const links = [...html.matchAll(/href="([^"]+)"/g)]
      .map((m) => m[1])
      .filter((h) => h.startsWith('/') || h.includes('madridcalidad'));
    console.log('INTERNAL_LINKS:', [...new Set(links)].join(' | '));
    const imgs = [...html.matchAll(/<img[^>]+src="([^"]+)"/gi)].map((m) => m[1]);
    console.log('IMAGES:', [...new Set(imgs)].join(' | '));
    const scripts = [...html.matchAll(/<script[^>]+src="([^"]+)"/gi)].map((m) => m[1]);
    console.log('SCRIPTS:', [...new Set(scripts)].join(' | '));
    const styles = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/gi)].map((m) => m[1]);
    console.log('STYLES:', [...new Set(styles)].join(' | '));
    const fonts = [...html.matchAll(/fonts\.googleapis\.com[^"']+/gi)].map((m) => m[0]);
    console.log('FONTS:', [...new Set(fonts)].join(' | '));
    for (const tag of ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']) {
      const headings = [...html.matchAll(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi'))].map((m) => stripTags(m[1]));
      if (headings.length) console.log(tag.toUpperCase() + ':', headings.join(' // '));
    }
    const sections = [...html.matchAll(/data-testid="([^"]+)"/g)].map((m) => m[1]);
    if (sections.length) console.log('DATA_TESTID:', [...new Set(sections)].join(' | '));
    const navItems = [...html.matchAll(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)]
      .filter((m) => stripTags(m[2]).length < 40)
      .slice(0, 20)
      .map((m) => `${stripTags(m[2])} -> ${m[1]}`);
    console.log('NAV_SAMPLE:', navItems.join(' | '));
    const forms = [...html.matchAll(/<form[\s\S]*?<\/form>/gi)];
    console.log('FORMS_COUNT:', forms.length);
    forms.forEach((f, i) => {
      const inputs = [...f[0].matchAll(/<(?:input|textarea|select)[^>]+name="([^"]+)"/gi)].map((m) => m[1]);
      const action = f[0].match(/action="([^"]*)"/i)?.[1] || '(none)';
      console.log(`FORM_${i}: action=${action} fields=${inputs.join(',')}`);
    });
    const iframes = [...html.matchAll(/<iframe[^>]+src="([^"]+)"/gi)].map((m) => m[1]);
    if (iframes.length) console.log('IFRAMES:', iframes.join(' | '));
    const social = [...html.matchAll(/https?:\/\/(?:www\.)?(?:instagram|facebook|linkedin|twitter|youtube)\.com[^"'\s]*/gi)];
    if (social.length) console.log('SOCIAL:', [...new Set(social)].join(' | '));
  } catch (e) {
    console.log('ERR', url, e.message);
  }
}
