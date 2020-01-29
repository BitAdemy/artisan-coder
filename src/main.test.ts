/* eslint-disable max-nested-callbacks */
/* eslint-disable max-lines-per-function */
import { applyPrinciples, getCleanPrinciples, isMyCodeClean, shouldICleanMyCode } from './main';

describe('Clean Code', () => {
  test('Code always smells', () => {
    expect(isMyCodeClean()).toBeFalsy();
  });
  test('I should clean my Code', () => {
    expect(shouldICleanMyCode()).toBeTruthy();
  });
  const refactoringPrinciples = [
    'Show intention and hide details.',
    'Avoid globalization and coupling.',
    'Separate responsibilities.',
    "Don't Repeat Yourself (DRY)",
    'Keep It Simple, (not) Stupid (KISS)',
  ];
  test('Get the Principles of improvement', () => {
    expect(getCleanPrinciples()).toEqual(refactoringPrinciples);
  });
  test('Clean your code', () => {
    expect(applyPrinciples(refactoringPrinciples)).toEqual(undefined);
  });
});
