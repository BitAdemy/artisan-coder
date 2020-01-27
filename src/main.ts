import { writeReadableCode } from './1-name';
import { writeSmallFunctions } from './2-function';
import { avoidPrimitiveObsession } from './3-data';
import { writeShortModules } from './4-object';
import { becomeAnArtisan } from './artisan';

export function isMyCodeClean(): boolean {
  return false;
}

export function shouldICleanMyCode(): boolean {
  return true;
}

export function getCleanPrinciples(): string[] {
  const principles: string[] = [
    'Show intention and hide details.',
    'Avoid globalization and coupling.',
    'Separate responsibilities.',
    "Don't Repeat Yourself (DRY)",
    'Keep It Simple, (not) Stupid (KISS)',
  ];
  return principles;
}

export function applyPrinciples(principles: string[]): void {
  console.log(principles);
  writeReadableCode(principles);
  writeSmallFunctions(principles);
  avoidPrimitiveObsession(principles);
  writeShortModules(principles);
  const discipline = {
    values: true,
  };
  console.log({ discipline });
  const artisan = becomeAnArtisan(principles, discipline);
  console.log(artisan);
}
