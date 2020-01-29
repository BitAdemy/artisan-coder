import { printToConsole } from '../1-name';

export function writeSmallFunctions(priciples: string[]): void {
  priciples.forEach(printToConsole);
}

export function writeOneSentencePerLine(): boolean {
  const year = '2020';
  const category = 'Código limpio';
  const title =
    'Código artesano: limpia tu código con la artesanía del Software.';
  let slug = `${year}-${category}-${title}`;
  const isComplex = true;
  if (isComplex) {
    slug = getSlug(slug);
  }
  printToConsole(slug);
  return true;
}

export function getNestedBlocks(): number {
  const MAX_DEPTH = 2;
  return MAX_DEPTH;
}

export function getLimitCyclomaticComplexity(): number {
  const COMPLEXITY = 8;
  return COMPLEXITY;
}

export function getAbstractionLevels(): number {
  const LEVELS_OF_ABSTRACTION = 1;
  return LEVELS_OF_ABSTRACTION;
}

export function getMaximumFunctionsLenght(): number {
  const MAX_LINES_PER_FUNCTION = 20;
  return MAX_LINES_PER_FUNCTION;
}

// ORIGINAL: https://gist.github.com/codeguy/6684588

function getSlug(slug: string): string {
  slug = slug.replace(/^\s+|\s+$/g, '');
  slug = slug.toLowerCase();
  slug = replaceNonCommonChars(slug);
  slug = replaceUndesiredChars(slug);
  return slug;
}

function replaceNonCommonChars(slug: string): string {
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/,:;';
  const to = 'aaaaeeeeiiiioooouuuunc-----';
  const START = 0;
  const END = from.length;
  for (let i = START; i < END; i++) {
    const nonCommonCharacter = new RegExp(from.charAt(i), 'g');
    const similarCommonCharacter = to.charAt(i);
    slug = slug.replace(nonCommonCharacter, similarCommonCharacter);
  }
  return slug;
}

function replaceUndesiredChars(slug: string): string {
  const invalidChars = /[^a-z0-9 -]/g;
  const multipleWhiteSpaces = /\s+/g;
  const multipleDashes = /-+/g;
  slug = slug
    .replace(invalidChars, '')
    .replace(multipleWhiteSpaces, '-')
    .replace(multipleDashes, '-');
  return slug;
}
