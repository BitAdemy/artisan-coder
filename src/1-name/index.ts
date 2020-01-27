export function writeReadableCode(priciples: string[]) {}

export function useAnStyleGuide(): boolean {
  return true;
}

export function getLimits(): any {
  return { lineLenght: 80, fileLength: 160 };
}

export function enforceLimits(): string[] {
  return ["Prettier", "EsLint"];
}

export function getGrammarKindForVariableNames(
  isAFlagVariable: boolean
): string {
  if (isAFlagVariable) {
    return "verbNoun";
  } else {
    return "noun";
  }
}

export function getGrammarKindsForFunctionNames(): string[] {
  return ["verb", "verbNoun", "verbNounAdjective", "verbAdverbe", "verb*"];
}
