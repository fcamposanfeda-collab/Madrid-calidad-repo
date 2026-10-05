/**
 * Comprueba que las variables de entorno del formulario están definidas.
 * Uso: node scripts/check-form-env.mjs [.env | .env.production]
 */
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { isWeb3FormsAccessKey } from '../src/utils/web3forms-key.mjs';

const envFile = process.argv[2] ?? '.env';
const envPath = resolve(process.cwd(), envFile);

if (!existsSync(envPath)) {
  console.error(`✗ No existe ${envFile}`);
  console.error('  Copia .env.example → .env y añade tu Access Key de Web3Forms.');
  process.exit(1);
}

function parseEnvFile(content) {
  const vars = {};
  for (const rawLine of content.replace(/^\uFEFF/, '').split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    const value = line.slice(eq + 1).trim();
    if (key) vars[key] = value;
  }
  return vars;
}

const vars = parseEnvFile(readFileSync(envPath, 'utf8'));

const endpoint = vars.PUBLIC_FORM_ENDPOINT ?? '';
const key = vars.PUBLIC_WEB3FORMS_ACCESS_KEY ?? '';

let ok = true;

if (!endpoint) {
  console.error('✗ Falta PUBLIC_FORM_ENDPOINT');
  console.error('  FormSubmit: https://formsubmit.co/ajax/dcampos@madridcalidad.es');
  console.error('  Web3Forms:  https://api.web3forms.com/submit');
  console.error('  Formspree:  https://formspree.io/f/xxxxxxxx');
  ok = false;
} else {
  console.log(`✓ PUBLIC_FORM_ENDPOINT = ${endpoint}`);
}

const usesWeb3Forms = endpoint.includes('web3forms.com');

if (usesWeb3Forms && !isWeb3FormsAccessKey(key)) {
  if (!key.trim()) {
    console.error('✗ Falta PUBLIC_WEB3FORMS_ACCESS_KEY');
    console.error('  Obtén la clave en https://web3forms.com (gratis) con destino dcampos@madridcalidad.es');
  } else {
    console.error('✗ PUBLIC_WEB3FORMS_ACCESS_KEY no es una Access Key válida');
    console.error('  Tiene que ser el UUID de https://web3forms.com, no un texto de ejemplo.');
  }
  ok = false;
} else if (usesWeb3Forms) {
  console.log(`✓ PUBLIC_WEB3FORMS_ACCESS_KEY = ${key.slice(0, 8)}…`);
} else if (isWeb3FormsAccessKey(key)) {
  console.log('✓ PUBLIC_WEB3FORMS_ACCESS_KEY presente (no se usa con este endpoint)');
} else if (key) {
  console.error('✗ PUBLIC_WEB3FORMS_ACCESS_KEY no es una Access Key válida');
  console.error('  Tiene que ser el UUID de https://web3forms.com, no un texto de ejemplo.');
  ok = false;
}

if (!ok) {
  console.error('\nLos formularios no enviarán correos hasta completar la configuración.');
  process.exit(1);
}

console.log('\nFormularios listos. Reinicia "npm run dev" si estaba en marcha.');
