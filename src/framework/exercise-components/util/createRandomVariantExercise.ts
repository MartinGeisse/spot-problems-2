import type {Exercise} from "../../types.tsx";
import {randomElement} from "../../util/random/randomElement.ts";

// upon instantiation, selects one of the variants to instantiate
export function createRandomVariantExercise(variants: Exercise[]): Exercise {
  return () => randomElement(variants)();
}
