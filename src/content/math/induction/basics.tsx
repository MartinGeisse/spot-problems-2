import type {ReactNode} from "react";
import type {ContentNode, Exercise} from "../../../framework/types.tsx";
import {mathSpan} from "../../../framework/technical-components/Math/Math.tsx";
import {createSelectOneStep} from "../../../framework/exercise-components/SelectOneStep.tsx";
import {createRandomVariantExercise} from "../../../framework/exercise-components/util/createRandomVariantExercise.ts";
import {randomInt} from "../../../framework/util/random/randomInt.ts";
import {createReplacingSequence} from "../../../framework/exercise-components/ReplacingSequence.tsx";

interface MyExerciseInstanceParameters {
  leftSideFormula: string;
  rightSideFormula: string;
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

function createMyExerciseInstance(parameters: MyExerciseInstanceParameters): Exercise {
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
    ]),
    maxHintLevel: 0, // TODO add hints
  });
  
  /*
  TODO ScrollingSequence
   
  return {
    streams: [createStream("default", createSequence(
        [
          createInstatiationStep(problem, parameters, 1),
          createInstatiationStep(null, parameters, n2),
          createInstatiationStep(null, parameters, n3),
        ],
        <>
          Solution.
        </>
    ))],
  };
  
   */
}

// nothing is randomized in the instances, only the choice of instance is
export const basicInductionExercises: Exercise[] = [
  createMyExerciseInstance({ leftSideFormula: "#sum_{i=1}^{n}i", rightSideFormula: "#frac{n(n+1)}2"}),
];

export const basicInductionSubtree: ContentNode = {
  id: "basics",
  name: "Basics",
  type: "exercise",
  exercise: createRandomVariantExercise(basicInductionExercises),
};
