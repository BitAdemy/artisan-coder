/* eslint-disable no-magic-numbers */
/* eslint-disable max-nested-callbacks */
import { avoidPrimitiveObsession, getNumberOfParams, shouldAvoidCondionals } from './index';

describe('Data structures everywhere', () => {
  test('Avoid primitive obsession', () => {
    expect(avoidPrimitiveObsession([])).toBeUndefined();
  });
  test('Reduce function parameters', () => {
    expect(getNumberOfParams()).toBeLessThanOrEqual(2);
  });
  test('Avoid conditionals using data', () => {
    expect(shouldAvoidCondionals()).toEqual(true);
  });
});
