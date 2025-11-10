import {createStream, ExerciseInstance} from "../../types";
import {createShowProblemRevealSolution} from "../../../framework/exercise-components/ShowProblemRevealSolution";
import {mathDiv, mathSpan} from "../../../framework/technical-components/Math/Math";
import {ReactNode} from "react";
import {isNatPlus, isNatPlusWithoutDefinition} from "../../../framework/exercise-components/math/math-atoms";
import {randomElement} from "../../../framework/util/random/randomElement";
import {Alert} from "@mui/material";

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

interface ExtraExerciseOptions {
  baseCaseValue: number;
  problemPrelude: ReactNode;
  solutionFooter: DetailLevelApplicable;
}
const defaultExtraExerciseOptions: ExtraExerciseOptions = {
  baseCaseValue: 1,
  problemPrelude: <></>,
  solutionFooter: <></>,
};

function natInductionExercise(
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
            Let {mathSpan("n")} be chosen such that {proveWhat}. {detailLevel < 2 ? <> Then</> : <>
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

// nothing is randomized in the instances, only the choice of instance is
const exerciseInstances: ExerciseInstance[] = [
  // natInductionExercise(
  //     <>{mathSpan("n^2+n")} is even</>,
  //     mathDiv("n^2+n = 1^2+1 = 1+1 = 2"),
  //     <>{mathSpan("(n+1)^2+(n+1)")} is even</>,
  //     _detailLevel => <>
  //       {mathDiv("(n+1)^2 + (n+1)")}
  //       {mathDiv("= n^2 + 2n + 1 + n + 1")}
  //       {mathDiv("= n^2 + 3n + 2")}
  //       {mathDiv("= (n^2 + n) + (2n + 2)")}
  //       {mathDiv("= (n^2 + n) + 2#cdot (n + 1)")}
  //       <div>The first part is even by the induction hypothesis, so the sum is even too.</div>
  //     </>,
  // ),

  // natInductionExercise(
  //     <>{mathSpan("n^3+2n")} is divisible by {mathSpan("3")}</>,
  //     mathDiv("n^3+2n = 1^3+2#cdot 1 = 1 + 2 = 3"),
  //     <>{mathSpan("(n+1)^3+2#cdot (n+1)")} is divisible by {mathSpan("3")}</>,
  //     _detailLevel => <>
  //       {mathDiv("(n+1)^3 + 2#cdot (n+1)")}
  //       {mathDiv("= n^3 + 3n^2 + 3n + 1 + 2n + 2")}
  //       {mathDiv("= n^3 + 3n^2 + 5n + 3")}
  //       {mathDiv("= (n^3 + 2n) + (3n^2 + 3n + 3)")}
  //       <div>The first part is divisible by 3 by the induction hypothesis, so the sum is divisible by 3 too.</div>
  //     </>,
  // ),

  // natInductionExercise(
  //     <>{mathSpan("4n^3-n")} is divisible by {mathSpan("3")}</>,
  //     mathDiv("4n^3-n = 4#cdot 1^3 - 1 = 4 - 1 = 3"),
  //     <>{mathSpan("4(n+1)^3-(n+1)")} is divisible by {mathSpan("3")}</>,
  //     _detailLevel => <>
  //       {mathDiv("4(n+1)^3-(n+1)")}
  //       {mathDiv("= 4#cdot (n^3 + 3n^2 + 3n + 1) - n - 1")}
  //       {mathDiv("= 4n^3 + 12n^2 + 12n + 4 - n - 1")}
  //       {mathDiv("= 4n^3 - n + 12n^2 + 12n + 3")}
  //       {mathDiv("= (4n^3 - n) + 3#cdot (4n^2 + 4n + 1)")}
  //       <div>The first part is divisible by 3 by the induction hypothesis, so the sum is divisible by 3 too.</div>
  //     </>,
  // ),

  // natInductionExercise(
  //     <>{mathSpan("n^3-n")} is divisible by {mathSpan("6")}</>,
  //     mathDiv("n^3-n = 1^3-1 = 0"),
  //     <>{mathSpan("(n+1)^3 - (n+1)")} is divisible by {mathSpan("6")}</>,
  //     _detailLevel => <>
  //       {mathDiv("(n+1)^3 - (n+1)")}
  //       {mathDiv("= n^3 + 3n^2 + 3n + 1 - n - 1")}
  //       {mathDiv("= n^3 - n + 3n^2 + 3n")}
  //       {mathDiv("= (n^3 - n) + 3n(n + 1)")}
  //       <div>The first part is divisible by 6 by the induction hypothesis. The second part is divisible by 6 because
  //         of the obvious factor of {mathSpan("3")}, as well as the fact that either {mathSpan("n")} or
  //         {mathSpan("(n+1)")} is even.</div>
  //     </>,
  // ),

  // natInductionExercise(
  //     <>{mathSpan("2n^3+3n^2+n")} is divisible by {mathSpan("6")}</>,
  //     mathDiv("2n^3+3n^2+n = 2#cdot 1^3 + 3#cdot 1^2 + 1 = 2 + 3 + 1 = 6"),
  //     <>{mathSpan("2(n+1)^3+3(n+1)^2+(n+1)")} is divisible by {mathSpan("6")}</>,
  //     _detailLevel => <>
  //       {mathDiv("2(n+1)^3+3(n+1)^2+(n+1)")}
  //       {mathDiv("= 2(n^3 + 3n^2 + 3n + 1) + 3(n^2 + 2n + 1) + n + 1")}
  //       {mathDiv("= 2n^3 + 6n^2 + 6n + 2 + 3n^2 + 6n + 3 + n + 1")}
  //       {mathDiv("= 2n^3 + 3n^2 + n + 6n^2 + 6n + 2 + 6n + 3 + 1")}
  //       {mathDiv("= (2n^3 + 3n^2 + n) + (6n^2 + 12n + 6)")}
  //       {mathDiv("= (2n^3 + 3n^2 + n) + 6(n^2 + 2n + 1)")}
  //       <div>The first part is divisible by 6 by the induction hypothesis, so the sum is divisible by 6 too.</div>
  //     </>,
  // ),

  // natInductionExercise(
  //     <>{mathSpan("n^3-6n^2+14n")} is divisible by {mathSpan("3")}</>,
  //     mathDiv("n^3-6n^2+14n = 1^3-6#cdot 1^2+14#cdot 1 = 1 - 6 + 14 = 9"),
  //     <>{mathSpan("(n+1)^3-6(n+1)^2+14(n+1)")} is divisible by {mathSpan("3")}</>,
  //     _detailLevel => <>
  //       {mathDiv("(n+1)^3-6(n+1)^2+14(n+1)")}
  //       {mathDiv("= (n^3 + 3n^2 + 3n + 1) - 6(n^2 + 2n + 1) + (14n + 14)")}
  //       {mathDiv("= n^3 + 3n^2 + 3n + 1 - 6n^2 - 12n - 6 + 14n + 14")}
  //       {mathDiv("= n^3 - 6n^2 + 14n + 3n^2 + 3n + 1 - 12n - 6 + 14")}
  //       {mathDiv("= (n^3 - 6n^2 + 14n) + (3n^2 + - 9n + 9)")}
  //       {mathDiv("= (n^3 - 6n^2 + 14n) + 3(n^2 + - 3n + 3)")}
  //       <div>The first part is divisible by 3 by the induction hypothesis, so the sum is divisible by 3 too.</div>
  //     </>,
  // ),

  // natInductionExercise(
  //     <>{mathSpan("3^n - 3")} is divisible by {mathSpan("6")}</>,
  //     mathDiv("3^n - 3 = 3^1 - 3 = 3 - 3 = 0"),
  //     <>{mathSpan("3^{n+1} - 3")} is divisible by {mathSpan("6")}</>,
  //     _detailLevel => <>
  //       {mathDiv("3^{n+1} - 3")}
  //       {mathDiv("= (3#cdot 3^n) + (6 - 9)")}
  //       {mathDiv("= (3#cdot 3^n - 9) + 6")}
  //       {mathDiv("= 3#cdot (3^n - 3) + 6")}
  //       <div>The first part is divisible by 6 by the induction hypothesis, so the sum is divisible by 6 too.</div>
  //     </>,
  // ),

  // natInductionExercise(
  //     <>{mathSpan("n^3 + (n+1)^3 + (n+2)^3")} is divisible by {mathSpan("9")}</>,
  //     mathDiv("n^3 + (n+1)^3 + (n+2)^3 = 1^3 + (1+1)^3 + (1+2)^3 = 1 + 2^3 + 3^3 = 1 + 8 + 27 = 36"),
  //     <>{mathSpan("(n+1)^3 + ((n+1)+1)^3 + ((n+1)+2)^3")} is divisible by {mathSpan("9")}</>,
  //     _detailLevel => <>
  //       {mathDiv("(n+1)^3 + ((n+1)+1)^3 + ((n+1)+2)^3")}
  //       {mathDiv("= (n+1)^3 + (n+2)^3 + (n+3)^3")}
  //       {mathDiv("= (n^3 + 3n^2 + 3n + 1) + (n^3 + 6n^2 + 12n + 8) + (n^3 + 9n^2 + 27n + 27)")}
  //       {mathDiv("= n^3 + (n^3 + 3n^2 + 3n + 1) + (n^3 + 6n^2 + 12n + 8) + (9n^2 + 27n + 27)")}
  //       {mathDiv("= (n^3 + (n+1)^3 (n+2)^3) + 9(n^2 + 3n + 3)")}
  //       <div>The first part is divisible by 9 by the induction hypothesis, so the sum is divisible by 9 too.</div>
  //     </>,
  // ),

  // natInductionExercise(
  //     <>{mathSpan("7^{2n}-2^n")} is divisible by {mathSpan("47")}</>,
  //     mathDiv("7^{2n}-2^n = 7^2-2^1 = 49 - 2 = 47"),
  //     <>{mathSpan("7^{2(n+1)}-2^{n+1}")} is divisible by {mathSpan("47")}</>,
  //     _detailLevel => <>
  //       {mathDiv("7^{2(n+1)}-2^{n+1}")}
  //       {mathDiv("= 7^{2n+2}-2^{n+1}")}
  //       {mathDiv("= 49#cdot 7^{2n} - 2#cdot 2^n")}
  //       {mathDiv("= 2#cdot 7^{2n} - 2#cdot 2^n + 47#cdot 7^{2n}")}
  //       {mathDiv("= 2#cdot (7^{2n} - 2^n) + 47#cdot 7^{2n}")}
  //       <div>The first part is divisible by 47 by the induction hypothesis, so the sum is divisible by 47 too.</div>
  //     </>,
  // ),

  // natInductionExercise(
  //     <>{mathSpan("5^n + 7")} is divisible by {mathSpan("4")}</>,
  //     mathDiv("5^n + 7 = 5^1 + 7 = 5 + 7 = 12"),
  //     <>{mathSpan("5^{n+1} + 7")} is divisible by {mathSpan("4")}</>,
  //     _detailLevel => <>
  //       {mathDiv("5^{n+1} + 7")}
  //       {mathDiv("= 5#cdot 5^n + 7")}
  //       {mathDiv("= (5^n + 7) + 4#cdot 5^n")}
  //       <div>The first part is divisible by 4 by the induction hypothesis, so the sum is divisible by 4 too.</div>
  //     </>,
  // ),

  // natInductionExercise(
  //     <>{mathSpan("5^{2n} - 3^{2n}")} is divisible by {mathSpan("8")}</>,
  //     mathDiv("5^{2#cdot 1} - 3^{2#cdot 1} = 5^2 - 3^2 = 25 - 9 = 16"),
  //     <>{mathSpan("5^{2(n + 1)} - 3^{2(n + 1)}")} is divisible by {mathSpan("8")}</>,
  //     _detailLevel => <>
  //       {mathDiv("5^{2(n + 1)} - 3^{2(n + 1)}")}
  //       {mathDiv("= 5^{2n + 2} - 3^{2n + 2}")}
  //       {mathDiv("= 25#cdot 5^{2n} - 9#cdot 3^{2n}")}
  //       {mathDiv("= 9#cdot 5^{2n} - 9#cdot 3^{2n} + 16#cdot 5^{2n}")}
  //       {mathDiv("= 9#cdot (5^{2n} - 3^{2n}) + 16#cdot 5^{2n}")}
  //       <div>The first part is divisible by 8 by the induction hypothesis, so the sum is divisible by 8 too.</div>
  //     </>,
  // ),

  // natInductionExercise(
  //     <>{mathSpan("2^{3n} + 13")} is divisible by {mathSpan("7")}</>,
  //     mathDiv("2^{3n} + 13 = 2^{3#cdot 1} + 13 = 2^3 + 13 = 8 + 13 = 21"),
  //     <>{mathSpan("2^{3(n + 1)} + 13")} is divisible by {mathSpan("7")}</>,
  //     _detailLevel => <>
  //       {mathDiv("2^{3(n + 1)} + 13")}
  //       {mathDiv("= 2^{3n + 3} + 13")}
  //       {mathDiv("= 8#cdot 2^{3n} + 13")}
  //       {mathDiv("= 1#cdot 2^{3n} + 13 + 7#cdot 2^{3n}")}
  //       {mathDiv("= (2^{3n} + 13) + 7#cdot 2^{3n}")}
  //       <div>The first part is divisible by 7 by the induction hypothesis, so the sum is divisible by 7 too.</div>
  //     </>,
  // ),

  natInductionExercise(
      <>{mathSpan("a^n-1")} is divisible by {mathSpan("a-1")}</>,
      mathDiv("a^n-1 = a^1-1 = a-1"),
      <>{mathSpan("a^{n+1}-1")} is divisible by {mathSpan("a-1")}</>,
      _detailLevel => <>
        {mathDiv("a^{n+1}-1")}
        {mathDiv("= a#cdot a^n - 1")}
        {mathDiv("= a#cdot a^n - a + a - 1")}
        {mathDiv("= a#cdot (a^n - 1) + (a - 1)")}
        <div>The first part is divisible by {mathSpan("(a-1)")} by the induction hypothesis, so the sum is divisible by {mathSpan("(a-1)")} too.</div>
      </>,
      {
        problemPrelude: <>Let {isNatPlusWithoutDefinition("a")}, and {mathSpan("a>1")}.</>,
        solutionFooter: <Alert severity="info" sx={{ marginTop: "1em" }}>
          <p>
            Hidden here are actually to different ways to solve this problem. The more straightforward, but actually
            weaker approach is to treat {mathSpan("a")} as arbitrary, but chosen at the beginning of the problem, and
            have it stay fixed throughout the whole problem. We then solve the problem for a single value
            of {mathSpan("a")}. This means that the induction hypothesis "{mathSpan("a^n-1")} is divisible
            by {mathSpan("a-1")}" is applicable for that value of a (and the current value of {mathSpan("n")}), and we have
            to prove the same for the next value of {mathSpan("n")} <i>for the same value of {mathSpan("a")}</i>.
          </p>
          <p>
            There is a more powerful approach, but it comes it a cost. It is also harder to grasp for a beginner.
            First we note that the above approach actually solves the problem for every value of {mathSpan("a")} since
            we chose it arbitrarily.  We can utilize this and put the induction over {mathSpan("n")} at the beginning,
            and then, for each  value of {mathSpan("n")}, solve the problem for <i>all</i> values
            of {mathSpan("a")} at the same time.  The base case looks the same in this approach
            since {mathSpan("a")} is arbitrary.
          </p>
          <p>
            In the induction step, we now have a stronger induction hypothesis: For <i>all</i> values
            of {mathSpan("a")}, not just for a single value, {mathSpan("a^n-1")} is divisible by {mathSpan("a-1")}.
            This allows us to invoke the induction hypothesis for any value of {mathSpan("a")}, even a different one
            than the  one we are trying to prove the induction step for. However, it comes at a cost: Now we have to
            prove the induction step for all values of {mathSpan("a")} at the same time, not just a single value that
            we can choose conveniently.
          </p>
          <p>
            Why would you do that? Because some problems require it. This problem was simple enough that we could
            get away with a weaker induction hypothesis that applies only to the same value of {mathSpan("a")} that
            we wanted to prove the induction step for. A more complex problem might be unsolvable this way and
            require the more powerful approach.
          </p>
        </Alert>
      }
  ),

    
    
    
    
    


  // natInductionExercise(
  //     <>{mathSpan("n^3+2n")} is divisible by {mathSpan("3")}</>,
  //     mathDiv("n^3+2n = 1^3+2#cdot 1 = 1 + 2 = 3"),
  //     <>{mathSpan("(n+1)^3+2#cdot (n+1)")} is divisible by {mathSpan("3")}</>,
  //     _detailLevel => <>
  //       {mathDiv("(n+1)^3 + 2#cdot (n+1)")}
  //       {mathDiv("= n^3 + 3n^2 + 3n + 1 + 2n + 2")}
  //       {mathDiv("= n^3 + 3n^2 + 5n + 3")}
  //       {mathDiv("= (n^3 + 2n) + (3n^2 + 3n + 3)")}
  //       <div>The first part is divisible by 3 by the induction hypothesis, so the sum is divisible by 3 too.</div>
  //     </>,
  // ),
];

export function createInductionExercise(): ExerciseInstance {
  return randomElement(exerciseInstances);
}
