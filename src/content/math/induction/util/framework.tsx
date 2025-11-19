import {type ReactNode} from "react";
import {type ExerciseInstance} from "../../../../framework/types.tsx";
import {isNatPlus} from "../../../../framework/exercise-components/math/math-atoms";
import {mathSpan} from "../../../../framework/technical-components/Math/Math";
import {applyDetailLevel, type DetailLevelApplicable, threeDetailLevels} from "./detail";

export interface ExtraExerciseOptions {
  baseCaseValue: number;
  problemPrelude: ReactNode;
  solutionFooter: DetailLevelApplicable;
}

export const defaultExtraExerciseOptions: ExtraExerciseOptions = {
  baseCaseValue: 1,
  problemPrelude: <></>,
  solutionFooter: <></>,
};

export function natInductionExercise(
    proveWhat: ReactNode,
    baseCaseProof: DetailLevelApplicable,
    inductionConclusion: DetailLevelApplicable,
    inductionStepProof: DetailLevelApplicable,
    extraOptions?: Partial<ExtraExerciseOptions>,
): ExerciseInstance {
  const materializedExtraOptions: ExtraExerciseOptions = {...defaultExtraExerciseOptions, ...extraOptions};
  const baseCaseValue = materializedExtraOptions.baseCaseValue;
  return threeDetailLevels(
      <>{materializedExtraOptions.problemPrelude} Prove that {proveWhat} for all {isNatPlus("n")}.</>,
      detailLevel => {
        const baseCaseProofApplied = applyDetailLevel(detailLevel, baseCaseProof);
        const inductionConclusionApplied = applyDetailLevel(detailLevel, inductionConclusion);
        const inductionStepProofApplied = applyDetailLevel(detailLevel, inductionStepProof);
        return <>
          <h4>Base case</h4>
          {detailLevel === 2 && <div>
              For the base case, set {mathSpan("n")} to the smallest value for which we have to prove the initial
              statement. In this exercise, that smallest value is {baseCaseValue}.
          </div>}
          {detailLevel > 0 && <div>
              Let {mathSpan(`n = ${baseCaseValue}`)}. Then
          </div>}
          {baseCaseProofApplied}
          {detailLevel > 0 && <div>
              Thus, {proveWhat}.
          </div>}
          {detailLevel === 2 && <div>
              We have now proven the initial statement for {mathSpan(`n = ${baseCaseValue}`)}.
          </div>}

          <h4>Induction Step</h4>
          {detailLevel === 2 && <div>
              For the induction step, we take a value of {mathSpan("n")} for which the initial statement has been
              proven. We then use that statement to prove the same for {mathSpan("n+1")}. Doing so repeatedly will
              prove the statement for all {mathSpan("n")} starting at the base case, that is, for all {mathSpan(`n >= ${baseCaseValue}`)}.
          </div>}
          <div>
            Let {mathSpan("n")} be chosen such that {proveWhat}. {detailLevel === 0 ? <> Then</> : <>
            Using that hypothesis, we now have to show that {inductionConclusionApplied}:
          </>}
          </div>
          {inductionStepProofApplied}
          {detailLevel > 0 && <div>Thus, {inductionConclusionApplied}.</div>}
          {applyDetailLevel(detailLevel, materializedExtraOptions.solutionFooter)}
        </>;
      },
  );
}
