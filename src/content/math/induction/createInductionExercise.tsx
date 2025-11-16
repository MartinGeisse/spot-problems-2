import {ExerciseInstance} from "../../types";
import {randomElement} from "../../../framework/util/random/randomElement";
import {sumExerciseInstances} from "./divisibility/sum";

// nothing is randomized in the instances, only the choice of instance is
const exerciseInstances: ExerciseInstance[] = [
    // TODO uncomment ...divisibilityExerciseInstances,
    ...sumExerciseInstances,
];

export function createInductionExercise(): ExerciseInstance {
  return randomElement(exerciseInstances);
}
