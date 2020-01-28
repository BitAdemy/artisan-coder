export function becomeAnArtisan(principles: string[], discipline: Discipline): string[] {
  let artisan: string[] = [...principles];
  artisan = [...artisan, ...discipline.values];
  artisan = [...artisan, ...discipline.skills];
  artisan = [...artisan, 'craftsmanship'];
  return artisan;
}
type Discipline = { values: string[]; skills: string[] };
