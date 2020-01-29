/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
import { getRecomendations, Solid, writeShortModules } from './index';

describe('Business logic abstractions', () => {
  test('Limit the module size', () => {
    expect(writeShortModules([])).toBeTruthy();
  });
  test('Favors high cohesion', () => {
    expect(getRecomendations().cohesion).toBeTruthy();
  });
  test('Favors low coupling', () => {
    expect(getRecomendations().coupling).toBeFalsy();
  });
  test('Follow the SOLID principles', () => {
    const myCode = new Solid();
    myCode
      .doSingleResponsability()
      .doOpenClose()
      .doLiskovSubstitution()
      .doInterfaceSegregation()
      .doDependencyInversion();
    expect(myCode instanceof Solid).toBeTruthy();
  });
});
