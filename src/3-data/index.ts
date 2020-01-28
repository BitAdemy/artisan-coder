export function avoidPrimitiveObsession(principles: string[]): void {
  const code = { isCLean: true, hasTests: true, principles };
  console.log(code);
}
export function getNumberOfParams(): number {
  const MAX_PARAMS = 2;
  return MAX_PARAMS;
}

export function shouldAvoidCondionals(): boolean {
  return true;
}
