export function writeReadableCode(priciples: string[]): void {
  priciples.forEach(printToConsole);
  shouldUseAnStyleGuide();
  const limits = getLimits();
  enforceLimits(limits);
  let grammarForVariables;
  const isAFlagVariable = true;
  if (isAFlagVariable) {
    grammarForVariables = getGrammarKindForFlagVariableNames();
  } else {
    grammarForVariables = getGrammarKindForVariableNames();
  }
  printGrammar([grammarForVariables]);
  const grammarForFunctions = getGrammarKindsForFunctionNames();
  printGrammar(grammarForFunctions);
}

export function shouldUseAnStyleGuide(): boolean {
  return true;
}

export function getLimits(): Limits {
  return { lineLenght: 100, fileLength: 200 };
}

export function enforceLimits(limits: Limits): string[] {
  return ['Prettier:' + limits.lineLenght, 'EsLint:' + limits.fileLength];
}

export function getGrammarKindForVariableNames(): string {
  return 'noun';
}

export function getGrammarKindForFlagVariableNames(): string {
  return 'verbNoun';
}

export function getGrammarKindsForFunctionNames(): string[] {
  return ['verb', 'verbNoun', 'verbNounAdjective', 'verbAdverbe', 'verb*'];
}

function printGrammar(grammar: string[]): void {
  grammar.forEach(printToConsole);
}
function printToConsole(message: string): void {
  console.log(message);
}
export type Limits = { lineLenght: number; fileLength: number };
