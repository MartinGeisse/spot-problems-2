import {type ReactNode} from "react";
import {applyHintLevel, type ExerciseInstance, type HintLevelApplicable} from "../../../../framework/types.tsx";
import {isNatPlus} from "../../../../framework/exercise-components/math/math-atoms";
import {mathSpan} from "../../../../framework/technical-components/Math/Math";
import {createShowProblemRevealSolution} from "../../../../framework/exercise-components/ShowProblemRevealSolution.tsx";

export interface ExtraExerciseOptions {
  baseCaseValue: number;
  problemPrelude: HintLevelApplicable;
  solutionFooter: HintLevelApplicable;
}

export const defaultExtraExerciseOptions: ExtraExerciseOptions = {
  baseCaseValue: 1,
  problemPrelude: <></>,
  solutionFooter: <></>,
};

export function natInductionExercise(
    proveWhat: ReactNode,
    baseCaseProof: HintLevelApplicable,
    inductionConclusion: HintLevelApplicable,
    inductionStepProof: HintLevelApplicable,
    extraOptions?: Partial<ExtraExerciseOptions>,
): ExerciseInstance {
  const materializedExtraOptions: ExtraExerciseOptions = {...defaultExtraExerciseOptions, ...extraOptions};
  const baseCaseValue = materializedExtraOptions.baseCaseValue;
  return {
    maxHintLevel: 2,
    component: createShowProblemRevealSolution(
        _hintLevel => <>
          {materializedExtraOptions.problemPrelude} Prove that {proveWhat} for all {isNatPlus("n")}.
        </>,
        hintLevel => {
          const baseCaseProofApplied = applyHintLevel(hintLevel, baseCaseProof);
          const inductionConclusionApplied = applyHintLevel(hintLevel, inductionConclusion);
          const inductionStepProofApplied = applyHintLevel(hintLevel, inductionStepProof);
          return <>
            <h4>Base case</h4>
            {hintLevel === 2 && <div>
                For the base case, set {mathSpan("n")} to the smallest value for which we have to prove the initial
                statement. In this exercise, that smallest value is {baseCaseValue}.
            </div>}
            {hintLevel > 0 && <div>
                Let {mathSpan(`n = ${baseCaseValue}`)}. Then
            </div>}
            {baseCaseProofApplied}
            {hintLevel > 0 && <div>
                Thus, {proveWhat}.
            </div>}
            {hintLevel === 2 && <div>
                We have now proven the initial statement for {mathSpan(`n = ${baseCaseValue}`)}.
            </div>}

            <h4>Induction Step</h4>
            {hintLevel === 2 && <div>
                For the induction step, we take a value of {mathSpan("n")} for which the initial statement has been
                proven. We then use that statement to prove the same for {mathSpan("n+1")}. Doing so repeatedly will
                prove the statement for all {mathSpan("n")} starting at the base case, that is, for all {mathSpan(`n >= ${baseCaseValue}`)}.
            </div>}
            <div>
              Let {mathSpan("n")} be chosen such that {proveWhat}. {hintLevel === 0 ? <> Then</> : <>
              Using that hypothesis, we now have to show that {inductionConclusionApplied}:
            </>}
            </div>
            {inductionStepProofApplied}
            {hintLevel > 0 && <div>Thus, {inductionConclusionApplied}.</div>}
            {applyHintLevel(hintLevel, materializedExtraOptions.solutionFooter)}
          </>;
        },
    ),
  };
}
