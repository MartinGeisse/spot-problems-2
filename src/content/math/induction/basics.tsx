import {mathDiv, mathSpan} from "../../../framework/technical-components/Math/Math.tsx";
import {type ContentNode, createStream, type ExerciseInstance} from "../../../framework/types.tsx";
import {randomElement} from "../../../framework/util/random/randomElement.ts";
import {createSequence} from "../../../framework/exercise-components/Sequence.tsx";
import {createReadStep} from "../../../framework/exercise-components/ReadStep.tsx";
import {createOrderedSelectOneStep} from "../../../framework/exercise-components/OrderedSelectOneStep.tsx";
import type {ReactNode} from "react";

interface MyExerciseInstanceParameters {
  leftSideFormula: string;
  rightSideFormula: string;
}

function instantiateFormula(formula: string, n: number | string) {
  return formula.replaceAll(/\bn\b/g, n.toString());
}

function createInstatiationStep(prelude: ReactNode, parameters: MyExerciseInstanceParameters, n: number) {
  return createOrderedSelectOneStep(
      <>
        {prelude}
        <p>
          Phrase the problem specifically for the case {mathSpan("n=" + n)}.
        </p>
      </>,
      [
        mathSpan("n=" + n),
        mathSpan(parameters.leftSideFormula),
        mathSpan(parameters.rightSideFormula),
        mathSpan(parameters.leftSideFormula + " = " + parameters.rightSideFormula),
        mathSpan(instantiateFormula(parameters.leftSideFormula, n)),
        mathSpan(instantiateFormula(parameters.rightSideFormula, n)),
        mathSpan(instantiateFormula(parameters.leftSideFormula, n) + " = " + instantiateFormula(parameters.rightSideFormula, n)),
      ],
      6
  );
}

function createMyExerciseInstance(parameters: MyExerciseInstanceParameters): ExerciseInstance {
  return {
    streams: [createStream("default", createSequence(
        [
          createInstatiationStep(
            <>
              Problem: Prove that {mathSpan(parameters.leftSideFormula + " = " + parameters.rightSideFormula)} for all
              {mathSpan("n #in #mathbb{N}^+=\\{1, 2, 3, ...\\}")}.
            </>,
            parameters,
            1
          ),
          createInstatiationStep(
            <>
              Problem: Prove that {mathSpan(parameters.leftSideFormula + " = " + parameters.rightSideFormula)} for all
              {mathSpan("n #in #mathbb{N}^+=\\{1, 2, 3, ...\\}")}.
            </>,
            parameters,
            2
          ),
          createInstatiationStep(
            <>
              Problem: Prove that {mathSpan(parameters.leftSideFormula + " = " + parameters.rightSideFormula)} for all
              {mathSpan("n #in #mathbb{N}^+=\\{1, 2, 3, ...\\}")}.
            </>,
            parameters,
            3
          ),
        ],
        <>
          Solution.
        </>
    ))],
  };
}

/*
const sumNatExerciseInstance: ExerciseInstance = {
  streams: [createStream("default", createSequence(
      [
        createOrderedSelectOneStep(
          <>
            <p>
              Problem: Prove that the sum of the first {mathSpan("n")} natural numbers is equal to
              {mathSpan("#frac{n(n+1)}2")} for all {mathSpan("n #in #mathbb{N}^+=\\{1, 2, 3, ...\\}")}.
            </p>
            <hr />
            <p>
              For the sum of the first n numbers, we write {mathSpan("#sum_{i=1}^ni")}, or alternatively,
            </p>
            <p>
              {mathDiv()}
            </p>
            <p>
              so the above claim then reads as:
            </p>
            <p>
              {mathDiv("#sum_{i=1}^ni = #frac{n(n+1)}2")}
            </p>
            <p>
              First, phrase the problem specifically for the case {mathSpan("n=1")}.
            </p>
          </>,
          [
            mathSpan("n=1"),
            mathSpan("#frac{n(n+1)}2"),
            mathSpan("#sum_{i=1}^ni = #frac{n(n+1)}2"),
            mathSpan("#sum_{i=1}^1i = #frac{1#cdot(1+1)}2"),
            mathSpan("#sum_{i=1}^ni"),
            mathSpan("#sum_{i=1}^1i"), 
            mathSpan("#frac{1#cdot (1+1)}2"),
          ],
          3
        ),
        createOrderedSelectOneStep(
            <>
              <p>
                Now, phrase the problem for the case {mathSpan("n=2")}.
              </p>
            </>,
            [
              mathSpan("#frac{2#cdot (2+1)}2"),
              mathSpan("#sum_{i=1}^2i = #frac{2#cdot(2+1)}2"),
              mathSpan("n=2"),
              mathSpan("#sum_{i=1}^2i"),
              mathSpan("#frac{n(n+1)}2"),
              mathSpan("#sum_{i=1}^ni"),
              mathSpan("#sum_{i=1}^ni = #frac{n(n+1)}2"),
            ],
            1
        ),




        createReadStep(<>
          middle step
        </>),
      ],
      <>
        Solution.
      </>
  ))],
};
*/
/*
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
  // sumNatExerciseInstance,
  createMyExerciseInstance({ leftSideFormula: "#sum_{i=1}^{n}i", rightSideFormula: "#frac{n(n+1)}2"}),
];

export const basicInductionSubtree: ContentNode = {
  id: "basics",
  name: "Basics",
  type: "exercise",
  instantiate: () => randomElement(basicInductionExerciseInstances),
};
