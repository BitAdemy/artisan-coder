import {
  useAnStyleGuide,
  getLimits,
  enforceLimits,
  getGrammarKindForVariableNames,
  getGrammarKindsForFunctionNames
} from "./index";

describe("Plain crystal clear Code", () => {
  test("Use an style guide", () => {
    expect(useAnStyleGuide()).toEqual(true);
  });
  test("Set Your Limits", () => {
    expect(getLimits()).toEqual({ lineLenght: 80, fileLength: 160 });
  });
  test("Enforce limits using tools", () => {
    expect(enforceLimits()).toEqual(["Prettier", "EsLint"]);
  });
  test("Use nouns for variables and classes", () => {
    expect(getGrammarKindForVariableNames(false)).toEqual("noun");
  });
  test("Use verbs and nouns for flag variables", () => {
    const isAFlagVariable = true;
    expect(getGrammarKindForVariableNames(isAFlagVariable)).toEqual("verbNoun");
  });
  test("Use verbs for functions", () => {
    expect(
      getGrammarKindsForFunctionNames().every(grammarKind =>
        grammarKind.startsWith("verb")
      )
    ).toEqual(true);
  });
});
