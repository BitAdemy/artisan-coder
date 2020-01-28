/* eslint-disable max-nested-callbacks */
import {
  getAbstractionLevels,
  getLimitCyclomaticComplexity,
  getNestedBlocks,
  writeOneSentencePerLine,
} from './index';

describe('Structure your code in blocks', () => {
  test('One simple sentence per line', () => {
    expect(writeOneSentencePerLine()).toEqual(true);
  });
  test('Avoid nested blocks', () => {
    expect(getNestedBlocks()).toEqual(2);
  });
  test('Limit the cyclomatic complexity', () => {
    expect(getLimitCyclomaticComplexity()).toEqual(8);
  });
  test('One abstraction level per function', () => {
    expect(getAbstractionLevels()).toEqual(1);
  });
  test('Limit your functions length', () => {
    expect(true).toEqual(true);
  });
});
