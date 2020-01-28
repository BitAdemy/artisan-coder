export function becomeAnArtisan(principles: string[], discipline: Discipline): string[] {
  let artisan: string[] = [...principles];
  discipline.activities = activities;
  artisan = [...artisan, ...discipline.values];
  artisan = [...artisan, ...discipline.skills];
  artisan = [...artisan, ...discipline.activities];
  artisan = [...artisan, 'craftsmanship'];
  return artisan;
}
type Discipline = { values: string[]; skills: string[]; activities?: string[] };

export const activities = [
  'Rename until reveal intention with names.',
  'Extract instructions until your functions become simples.',
  'Group primitive variables in data structures.',
  'Apply SOLID principles until to ensure that your systems have low coupling and high cohesion.',
];
