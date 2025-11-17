import {mathDiv, mathSpan} from "../../../framework/technical-components/Math/Math.tsx";
import {defaultExtraExerciseOptions, type ExtraExerciseOptions} from "./util/framework.tsx";
import {type ContentNode, createStream, type ExerciseInstance} from "../../types.tsx";
import {randomElement} from "../../../framework/util/random/randomElement.ts";
import type {ReactNode} from "react";
import {applyDetailLevel, type DetailLevelApplicable, threeDetailLevels} from "./util/detail.ts";
import {isNatPlus} from "../../../framework/exercise-components/math/math-atoms.tsx";
import {createShowProblemRevealSolution} from "../../../framework/exercise-components/ShowProblemRevealSolution.tsx";

/*
export function natInductionExercise(
    proveWhat: ReactNode,
    baseCaseProof: DetailLevelApplicable,
    inductionConclusion: DetailLevelApplicable,
    inductionStepProof: DetailLevelApplicable
): ExerciseInstance {
  return {
    streams: [
      createStream("default", createShowProblemRevealSolution(
          <>Prove that {proveWhat} for all {isNatPlus("n")}.</>,
          <>
            <h4>Base case</h4>
            <div>
                For the base case, set {mathSpan("n")} to the smallest value for which we have to prove the initial
                statement. In this exercise, that smallest value is 1.
            </div>
            <div>
                Let {mathSpan(`n = 1`)}. Then
            </div>
            {baseCaseProof}
            <div>
                Thus, {proveWhat}.
            </div>
            <div>
                We have now proven the initial statement for {mathSpan(`n = 1`)}.
            </div>

            <h4>Induction Step</h4>
            <div>
                For the induction step, we take a value of {mathSpan("n")} for which the initial statement has been
                proven. We then use that statement to prove the same for {mathSpan("n+1")}. Doing so repeatedly will
                prove the statement for all {mathSpan("n")} starting at the base case, that is, for all {mathSpan(`n >= 1`)}.
            </div>
            <div>
              Let {mathSpan("n")} be chosen such that {proveWhat}.
              Using that hypothesis, we now have to show that {inductionConclusion}:
            </div>
            {inductionStepProof}
            <div>Thus, {inductionConclusion}.</div>
          </>,
      )),
    ],
  };
}
*/

// nothing is randomized in the instances, only the choice of instance is
export const basicInductionExerciseInstances: ExerciseInstance[] = [

  natInductionExercise(
      <>{mathSpan("1+2+3+...+n = #sum_{i=1}^ni = #frac{n(n+1)}2")}</>,
      mathDiv("#sum_{i=1}^ni = #sum_{i=1}^1i = 1 = #frac{1(1+1)}2"),
      <>{mathSpan("#sum_{i=1}^{n+1}i = #frac{(n+1)((n+1)+1)}2")}</>,
      _detailLevel => <>
        {mathDiv("#sum_{i=1}^{n+1}i")}
        {mathDiv("= (n+1) + #sum_{i=1}^ni")}
        <div>using the induction hypothesis:</div>
        {mathDiv("= (n+1) + #frac{n(n+1)}2")}
        {mathDiv("= #frac{2(n+1)}2 + #frac{n(n+1)}2")}
        {mathDiv("= #frac{2(n+1) + n(n+1)}2")}
        {mathDiv("= #frac{(n+1)(n+2)}2")}
      </>
  ),

];

export const basicInductionSubtree: ContentNode = {
  id: "basics",
  name: "Basics",
  type: "exercise",
  instantiate: () => randomElement(basicInductionExerciseInstances),
};
