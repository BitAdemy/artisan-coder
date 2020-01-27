import { printToConsole } from '../1-name';

export function writeSmallFunctions(priciples: string[]): void {
  priciples.forEach(printToConsole);
}

export function writeOneSentencePerLine(): void {
  const year = '2020';
  const category = 'Código limpio';
  const title = 'Código artesano: limpia tu código con la artesanía del Software.';
  let slug = `${year}-${category}-${title}`;
  const isComplex = true;
  if (isComplex) {
    slug = getSlug(slug);
  }
  printToConsole(slug);
}

// https://gist.github.com/codeguy/6684588

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
    slug = slug.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
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
