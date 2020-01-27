/* eslint-disable max-nested-callbacks */
/* eslint-disable max-lines-per-function */
import { applyPrinciples, getCleanPrinciples, isMyCodeClean, shouldICleanMyCode } from './main';

describe('Clean Code', () => {
  test('Code always smells', () => {
    expect(isMyCodeClean()).toEqual(false);
  });
  test('I should clean my Code', () => {
    expect(shouldICleanMyCode()).toEqual(true);
  });
  const refacotringPrinciples = [
    'Show intention and hide details.',
    'Avoid globalization and coupling.',
    'Separate responsibilities.',
    "Don't Repeat Yourself (DRY)",
    'Keep It Simple, (not) Stupid (KISS)',
  ];
  test('Get the Principles of improvement', () => {
    expect(getCleanPrinciples()).toEqual(refacotringPrinciples);
  });
  test('Clean your code', () => {
    expect(applyPrinciples(refacotringPrinciples)).toEqual(undefined);
  });
});
