export const projectTypes = [
  { value: 'reforma-integral', label: 'Reforma integral', group: 'reforma' },
  { value: 'reforma-cocina', label: 'Reforma de cocina', group: 'reforma' },
  { value: 'reforma-bano', label: 'Reforma de baño', group: 'reforma' },
  { value: 'reforma-cocina-bano', label: 'Reforma de cocina y baño', group: 'reforma' },
  { value: 'reforma-piso', label: 'Reforma de piso', group: 'reforma' },
  { value: 'rehabilitacion', label: 'Rehabilitación energética', group: 'rehabilitacion' },
  { value: 'sate-fachadas', label: 'SATE / Fachadas', group: 'rehabilitacion' },
  { value: 'cubiertas', label: 'Cubiertas / Impermeabilización', group: 'rehabilitacion' },
  { value: 'comunidad', label: 'Comunidad de propietarios', group: 'comunidad' },
  { value: 'otros', label: 'Otros / No estoy seguro', group: 'general' },
] as const;

export type ProjectGroup = (typeof projectTypes)[number]['group'];

export const yesNoOptions = [
  { value: 'si', label: 'Sí' },
  { value: 'no', label: 'No' },
] as const;

export const alisarOptions = [
  { value: 'paredes', label: 'Sí, solo paredes' },
  { value: 'paredes-techos', label: 'Sí, paredes y techos' },
  { value: 'no', label: 'No' },
] as const;

export const subsidiesOptions = [
  { value: 'si', label: 'Sí, me interesa' },
  { value: 'no', label: 'No' },
  { value: 'ns', label: 'No lo sé' },
] as const;

export const buildingProblems = [
  { value: 'humedades', label: 'Humedades' },
  { value: 'aislamiento', label: 'Mal aislamiento' },
  { value: 'grietas', label: 'Grietas o patologías' },
  { value: 'fachada', label: 'Fachada deteriorada' },
  { value: 'cubierta', label: 'Problemas en cubierta' },
  { value: 'ns', label: 'No estoy seguro' },
] as const;
