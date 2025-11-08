import {createStream, ExerciseInstance} from "../../types";
import {createShowProblemRevealSolution} from "../../../framework/exercise-components/ShowProblemRevealSolution";
import {mathDiv, mathSpan} from "../../../framework/technical-components/Math/Math";
import {ReactElement, ReactNode} from "react";
import {isNatPlus} from "../../../framework/exercise-components/math/math-atoms";
import {randomElement} from "../../../framework/util/random/randomElement";

function prove(what: ReactNode): ReactElement {
  return <>Prove that {what} for all {isNatPlus("n")}.</>;
}

// nothing is randomized in the instances, only the choice of instance is
const exerciseInstances: ExerciseInstance[] = [
  {
    streams: [
      createStream("compact solution", createShowProblemRevealSolution(
          prove(<>{mathSpan("n^2+n")} is even</>),
          <>
            <div><b>Base case</b></div>
            {mathDiv("1^2+1 = 1+1 = 2")}
            <div><b>Induction Step</b></div>
            <br />
            <div>Let {mathSpan("n^2+n")} be even. Then</div>
            {mathDiv("(n+1)^2 + (n+1)")}
            {mathDiv("= n^2 + 2n + 1 + n + 1")}
            {mathDiv("= n^2 + 3n + 2")}
            {mathDiv("= (n^2 + n) + (2n + 2)")}
            {mathDiv("= (n^2 + n) + 2#cdot (n + 1)")}
            <div>The first part is even by the induction hypothesis, so the sum is even too.</div>
          </>
      )),
    ],
  },
  {
    streams: [
      createStream("compact solution", createShowProblemRevealSolution(
          prove(<>{mathSpan("n^3+2n")} is divisible by {mathSpan("3")}</>),
          <>
            <div><b>Base case</b></div>
            {mathDiv("1^3+2#cdot 1 = 1 + 2 = 3")}
            <div><b>Induction Step</b></div>
            <br />
            <div>Let {mathSpan("n^3+2n")} be divisible by {mathSpan("3")}. Then</div>
            {mathDiv("(n+1)^3 + 2#cdot (n+1)")}
            {mathDiv("= n^3 + 3n^2 + 3n + 1 + 2n + 2")}
            {mathDiv("= n^3 + 3n^2 + 5n + 3")}
            {mathDiv("= (n^3 + 2n) + (3n^2 + 3n + 3)")}
            <div>The first part is divisible by 3 by the induction hypothesis, so the sum is divisible by 3 too.</div>
          </>
      )),
    ],
  },
];

export function createInductionExercise(): ExerciseInstance {
  return randomElement(exerciseInstances);
}
