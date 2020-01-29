/* eslint-disable no-magic-numbers */
/* eslint-disable max-nested-callbacks */
import {
  getAbstractionLevels,
  getLimitCyclomaticComplexity,
  getMaximumFunctionsLenght,
  getNestedBlocks,
  writeOneSentencePerLine,
} from './index';

describe('Structure your code in blocks', () => {
  test('One simple sentence per line', () => {
    expect(writeOneSentencePerLine()).toBeTruthy();
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
    expect(getMaximumFunctionsLenght()).toBe(20);
  });
});
