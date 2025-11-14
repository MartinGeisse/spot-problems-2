import {ExerciseInstance} from "../../types";
import {randomElement} from "../../../framework/util/random/randomElement";
import {divisibilityExerciseInstances} from "./divisibility/divisibility";
import {sumExerciseInstances} from "./divisibility/sum";

// nothing is randomized in the instances, only the choice of instance is
const exerciseInstances: ExerciseInstance[] = [
    ...divisibilityExerciseInstances,
    ...sumExerciseInstances,
];

export function createInductionExercise(): ExerciseInstance {
  return randomElement(exerciseInstances);
}
