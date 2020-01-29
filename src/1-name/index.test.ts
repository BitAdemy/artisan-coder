/* eslint-disable max-nested-callbacks */
/* eslint-disable max-lines-per-function */
import {
  enforceLimits,
  getGrammarKindForFlagVariableNames,
  getGrammarKindForVariableNames,
  getGrammarKindsForFunctionNames,
  getLimits,
  shouldUseAnStyleGuide,
} from './index';

describe('Plain crystal clear Code', () => {
  test('Use an style guide', () => {
    expect(shouldUseAnStyleGuide()).toBeTruthy();
  });
  test('Set Your Limits', () => {
    expect(getLimits()).toEqual({ lineLenght: 100, fileLength: 200 });
  });
  test('Enforce limits using tools', () => {
    expect(enforceLimits({ lineLenght: 100, fileLength: 200 })).toEqual([
      'Prettier:100',
      'EsLint:200',
    ]);
  });
  test('Use nouns for variables and classes', () => {
    expect(getGrammarKindForVariableNames()).toEqual('noun');
  });
  test('Use verbs and nouns for flag variables', () => {
    expect(getGrammarKindForFlagVariableNames()).toEqual('verbNoun');
  });
  test('Use verbs for functions', () => {
    expect(
      getGrammarKindsForFunctionNames().every(grammarKind => grammarKind.startsWith('verb'))
    ).toBeTruthy();
  });
});
