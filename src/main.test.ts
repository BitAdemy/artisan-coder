import {
  isMyCodeClean,
  shouldICleanMyCode,
  getCleanPrinciples,
  applyPrinciples
} from "./main";

describe("Clean Code", () => {
  const dummyPrinciples = [
    "Show intention and hide details.",
    "Avoid globalization and coupling.",
    "Separate responsibilities.",
    "Don't Repeat Yourself (DRY)",
    "Keep It Simple, (not) Stupid (KISS)"
  ];

  test("Code always smells", () => {
    expect(isMyCodeClean()).toEqual(false);
  });
  test("I should clean my Code", () => {
    expect(shouldICleanMyCode()).toEqual(true);
  });
  test("Get the Principles of improvement", () => {
    expect(getCleanPrinciples()).toEqual(dummyPrinciples);
  });
  test("Clean your code", () => {
    expect(applyPrinciples(dummyPrinciples)).toEqual(undefined);
  });
});
