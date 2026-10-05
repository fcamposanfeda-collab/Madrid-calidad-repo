/** Access Key real de Web3Forms: UUID. Los textos de ejemplo no cuentan. */
const ACCESS_KEY_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isWeb3FormsAccessKey(value) {
  return ACCESS_KEY_PATTERN.test(String(value ?? '').trim());
}
