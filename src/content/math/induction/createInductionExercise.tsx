import {createStream, ExerciseInstance} from "../../types";
import {createShowProblemRevealSolution} from "../../../framework/exercise-components/ShowProblemRevealSolution";
import {mathDiv, mathSpan} from "../../../framework/technical-components/Math/Math";
import {ReactElement, ReactNode} from "react";
import {isNatPlus} from "../../../framework/exercise-components/math/math-atoms";
import {randomElement} from "../../../framework/util/random/randomElement";

type DetailLevel = 0 | 1 | 2;

type DetailLevelApplicable = ReactNode | ((detailLevel: DetailLevel) => ReactNode);

function applyDetailLevel(detailLevel: DetailLevel, applicable: DetailLevelApplicable): ReactNode {
  return typeof applicable === "function" ? applicable(detailLevel) : applicable;
}

function threeDetailLevels(problem: DetailLevelApplicable, solution: DetailLevelApplicable): ExerciseInstance {
  return {
    streams: [
      createStream("compact solution", createShowProblemRevealSolution(applyDetailLevel(0, problem), applyDetailLevel(0, solution))),
      createStream("show detailed steps", createShowProblemRevealSolution(applyDetailLevel(1, problem), applyDetailLevel(1, solution))),
      createStream("show even more details", createShowProblemRevealSolution(applyDetailLevel(2, problem), applyDetailLevel(2, solution))),
    ],
  };
}

function prove(what: ReactNode): ReactElement {
  return <>Prove that {what} for all {isNatPlus("n")}.</>;
}

function natInductionExercise(
    proveWhat: ReactNode,
    baseCaseProof: DetailLevelApplicable,
    inductionConclusion: DetailLevelApplicable,
    inductionStepProof: DetailLevelApplicable,
    baseCaseValue: number = 1,
): ExerciseInstance {
  return threeDetailLevels(
      prove(proveWhat),
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
            Let {mathSpan("n")} be chosen such that {proveWhat}. {detailLevel < 2 ? <> Then</> : <>
              Using that hypothesis, we now have to show that {inductionConclusionApplied}:
            </>}
          </div>
          {inductionStepProofApplied}
          {detailLevel > 0 && <div>Thus, {inductionConclusionApplied}.</div>}
        </>;
      },
  );
}

// nothing is randomized in the instances, only the choice of instance is
const exerciseInstances: ExerciseInstance[] = [
  natInductionExercise(
      <>{mathSpan("n^2+n")} is even</>,
      mathDiv("n^2+n = 1^2+1 = 1+1 = 2"),
      <>{mathSpan("(n+1)^2+(n+1)")} is even</>,
      _detailLevel => <>
        {mathDiv("(n+1)^2 + (n+1)")}
        {mathDiv("= n^2 + 2n + 1 + n + 1")}
        {mathDiv("= n^2 + 3n + 2")}
        {mathDiv("= (n^2 + n) + (2n + 2)")}
        {mathDiv("= (n^2 + n) + 2#cdot (n + 1)")}
        <div>The first part is even by the induction hypothesis, so the sum is even too.</div>
      </>,
  ),
  natInductionExercise(
      <>{mathSpan("n^3+2n")} is divisible by {mathSpan("3")}</>,
      mathDiv("n^3+2n = 1^3+2#cdot 1 = 1 + 2 = 3"),
      <>{mathSpan("(n+1)^3+2#cdot (n+1)")} is divisible by {mathSpan("3")}</>,
      _detailLevel => <>
        {mathDiv("(n+1)^3 + 2#cdot (n+1)")}
        {mathDiv("= n^3 + 3n^2 + 3n + 1 + 2n + 2")}
        {mathDiv("= n^3 + 3n^2 + 5n + 3")}
        {mathDiv("= (n^3 + 2n) + (3n^2 + 3n + 3)")}
        <div>The first part is divisible by 3 by the induction hypothesis, so the sum is divisible by 3 too.</div>
      </>,
  ),
];

export function createInductionExercise(): ExerciseInstance {
  return randomElement(exerciseInstances);
}
