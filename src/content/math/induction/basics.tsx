import type {ReactNode} from "react";
import type {ContentNode, Exercise} from "../../../framework/types.tsx";
import {mathSpan} from "../../../framework/technical-components/Math/Math.tsx";
import {createSelectOneStep} from "../../../framework/exercise-components/SelectOneStep.tsx";
import {randomInt} from "../../../framework/util/random/randomInt.ts";
import {createReplacingSequence} from "../../../framework/exercise-components/ReplacingSequence.tsx";
import {
  createSortEquationTransformationExercise
} from "../../../framework/exercise-components/math/SortEquationTransformationExercise.tsx";
import {
  createEquationTransformationArrowExercise
} from "../../../framework/exercise-components/math/EquationTransformationArrowExercise.tsx";

// --------------------------------------------------------------------------------------------------------------------
// mini-framework for basic exercises
// --------------------------------------------------------------------------------------------------------------------

interface MyExerciseInstanceParameters {
  leftSideFormula: string;
  rightSideFormula: string;
  inductionStepEquations: string[];
  inductionHypothesisUsageStepIndex: number;
}

function instantiateFormula(formula: string, n: number | string) {
  return formula.replaceAll(/\bn\b/g, n.toString());
}

function createNumberCaseStep(prelude: ReactNode, parameters: MyExerciseInstanceParameters, n: number) {
  return createSelectOneStep(
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
      6,
      true
  );
}

function createMyExercise(parameters: MyExerciseInstanceParameters): Exercise {
  const problem = <>
    Problem: Prove that {mathSpan(parameters.leftSideFormula + " = " + parameters.rightSideFormula)} for all
    {mathSpan("n #in #mathbb{N}^+=\\{1, 2, 3, ...\\}")}.
  </>;
  const n2 = 2 + randomInt(3);
  const n3 = n2 + 1 + randomInt(3);
  
  return () => ({
    component: createReplacingSequence([
      createNumberCaseStep(problem, parameters, 1),
      createNumberCaseStep(problem, parameters, n2),
      createNumberCaseStep(problem, parameters, n3),
      createSortEquationTransformationExercise({
        description: <>
          <p>In the induction step, we can assume that {mathSpan("#sum_{i=1}^ni = #frac{n(n+1)}2")}
            (induction hypothesis), and we have to prove that {mathSpan("#sum_{i=1}^{n+1}i = #frac{(n+1)((n+1)+1)}2")}.</p>
          <p>Prove this by putting the equations in the correct order.</p>
        </>,
        equations: parameters.inductionStepEquations,
        equationSize: 0.8,
      }),
      createEquationTransformationArrowExercise(
          <>In which step has the induction hypothesis been used?</>,
          parameters.inductionStepEquations,
          parameters.inductionHypothesisUsageStepIndex,
        ),
    ]),
    maxHintLevel: 0, // TODO add hints
  });
}

// --------------------------------------------------------------------------------------------------------------------
// actual exercises
// --------------------------------------------------------------------------------------------------------------------

export const basicInductionSubtree: ContentNode = {
  id: "basics",
  type: "folder",
  name: "Basics",
  children: [
    {
      id: "sumNat",
      name: "sum of the first n numbers",
      type: "exercise",
      exercise: createMyExercise({
        leftSideFormula: "#sum_{i=1}^{n}i",
        rightSideFormula: "#frac{n(n+1)}2",
        inductionStepEquations: [
          "#sum_{i=1}^{n+1}i",
          "= (n+1) + #sum_{i=1}^ni",
          "= (n+1) + #frac{n(n+1)}2",
          "= #frac{2(n+1)}2 + #frac{n(n+1)}2",
          "= #frac{2(n+1) + n(n+1)}2",
          "= #frac{(n+1)(n+2)}2",
        ],
        inductionHypothesisUsageStepIndex: 1,
      }),
      repeat: false,
    },
    {
      id: "sumNatSquares",
      name: "sum of the first n square numbers",
      type: "exercise",
      exercise: createMyExercise({
        leftSideFormula: "#sum_{i=1}^{n}(2i-1)",
        rightSideFormula: "n^2",
        inductionStepEquations: [
          "#sum_{i=1}^{n+1}(2i-1)",
          "= (2(n+1)-1) + #sum_{i=1}^n(2i-1)",
          "= (2n+1) + #sum_{i=1}^n(2i-1)",
          "= 2n + 1 + n^2",
          "= (n+1)^2",
        ],
        inductionHypothesisUsageStepIndex: 2,
      }),
      repeat: false,
    },
  ],
};
