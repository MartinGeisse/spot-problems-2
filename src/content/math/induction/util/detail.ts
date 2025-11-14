import {ReactNode} from "react";
import {createStream, ExerciseInstance} from "../../../types";
import {createShowProblemRevealSolution} from "../../../../framework/exercise-components/ShowProblemRevealSolution";

export type DetailLevel = 0 | 1 | 2;

export type DetailLevelApplicable = ReactNode | ((detailLevel: DetailLevel) => ReactNode);

export function applyDetailLevel(detailLevel: DetailLevel, applicable: DetailLevelApplicable): ReactNode {
  return typeof applicable === "function" ? applicable(detailLevel) : applicable;
}

export function threeDetailLevels(problem: DetailLevelApplicable, solution: DetailLevelApplicable): ExerciseInstance {
  return {
    streams: [
      createStream("compact solution", createShowProblemRevealSolution(applyDetailLevel(0, problem), applyDetailLevel(0, solution))),
      createStream("show detailed steps", createShowProblemRevealSolution(applyDetailLevel(1, problem), applyDetailLevel(1, solution))),
      createStream("show even more details", createShowProblemRevealSolution(applyDetailLevel(2, problem), applyDetailLevel(2, solution))),
    ],
  };
}
