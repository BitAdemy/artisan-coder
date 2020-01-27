/* eslint-disable max-nested-callbacks */
import { writeOneSentencePerLine } from './index';

describe('Structure your code in blocks', () => {
  test('One simple sentence per line', () => {
    expect(writeOneSentencePerLine()).toEqual(undefined);
  });
  test('Avoid nested blocks', () => {
    expect(true).toEqual(true);
  });
  test('Limit the cyclomatic complexity', () => {
    expect(true).toEqual(true);
  });
  test('One abstraction level per function', () => {
    expect(true).toEqual(true);
  });
  test('Limit your functions length', () => {
    expect(true).toEqual(true);
  });
});
