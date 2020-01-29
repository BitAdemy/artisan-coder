export function writeShortModules(principles: string[]): boolean {
  const guard = Array.isArray(principles);
  return guard;
}

export function getRecomendations(): Recomendation {
  const recomendations = {
    cohesion: true,
    coupling: false,
  };
  return recomendations;
}

export class Solid {
  doSingleResponsability(): Solid {
    return this;
  }
  doOpenClose(): Solid {
    return this;
  }
  doLiskovSubstitution(): Solid {
    return this;
  }
  doInterfaceSegregation(): Solid {
    return this;
  }
  doDependencyInversion(): Solid {
    return this;
  }
}

type Recomendation = { cohesion: boolean; coupling: boolean };
