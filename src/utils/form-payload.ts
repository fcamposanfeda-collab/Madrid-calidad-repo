/** Cuerpo JSON para APIs de formulario. Los campos repetidos se conservan. */
export function formToJsonBody(form: HTMLFormElement): string {
  const formData = new FormData(form);
  formData.delete('company');

  const payload: Record<string, FormDataEntryValue | FormDataEntryValue[]> = Object.fromEntries(
    formData.entries(),
  );

  const seen = new Set<string>();
  for (const key of formData.keys()) {
    if (seen.has(key)) continue;
    seen.add(key);
    const values = formData.getAll(key);
    if (values.length > 1) payload[key] = values;
  }

  return JSON.stringify(payload);
}
