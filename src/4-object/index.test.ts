/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
import { getRecomendations, Solid, writeShortModules } from './index';

describe('Business logic abstractions', () => {
  test('Limit the module size', () => {
    expect(writeShortModules([])).toEqual(true);
  });
  test('Favors high cohesion', () => {
    expect(getRecomendations().cohesion).toEqual(true);
  });
  test('Favors low coupling', () => {
    expect(getRecomendations().coupling).toEqual(false);
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
