// nothing is randomized in the instances, only the choice of instance is
import {natInductionExercise} from "./util/framework.tsx";
import {mathDiv, mathSpan} from "../../../framework/technical-components/Math/Math.tsx";
import {universalOrFixedHint} from "./util/blocks.tsx";
import {isNatPlusWithoutDefinition} from "../../../framework/exercise-components/math/math-atoms.tsx";
import {Alert} from "@mui/material";
import {type ContentNode, type ExerciseInstance} from "../../../framework/types.tsx";
import {randomElement} from "../../../framework/util/random/randomElement.ts";

// nothing is randomized in the instances, only the choice of instance is
export const divisibilityExerciseInstances: ExerciseInstance[] = [
    
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

  natInductionExercise(
      <>{mathSpan("4n^3-n")} is divisible by {mathSpan("3")}</>,
      mathDiv("4n^3-n = 4#cdot 1^3 - 1 = 4 - 1 = 3"),
      <>{mathSpan("4(n+1)^3-(n+1)")} is divisible by {mathSpan("3")}</>,
      _detailLevel => <>
        {mathDiv("4(n+1)^3-(n+1)")}
        {mathDiv("= 4#cdot (n^3 + 3n^2 + 3n + 1) - n - 1")}
        {mathDiv("= 4n^3 + 12n^2 + 12n + 4 - n - 1")}
        {mathDiv("= 4n^3 - n + 12n^2 + 12n + 3")}
        {mathDiv("= (4n^3 - n) + 3#cdot (4n^2 + 4n + 1)")}
        <div>The first part is divisible by 3 by the induction hypothesis, so the sum is divisible by 3 too.</div>
      </>,
  ),

  natInductionExercise(
      <>{mathSpan("n^3-n")} is divisible by {mathSpan("6")}</>,
      mathDiv("n^3-n = 1^3-1 = 0"),
      <>{mathSpan("(n+1)^3 - (n+1)")} is divisible by {mathSpan("6")}</>,
      _detailLevel => <>
        {mathDiv("(n+1)^3 - (n+1)")}
        {mathDiv("= n^3 + 3n^2 + 3n + 1 - n - 1")}
        {mathDiv("= n^3 - n + 3n^2 + 3n")}
        {mathDiv("= (n^3 - n) + 3n(n + 1)")}
        <div>The first part is divisible by 6 by the induction hypothesis. The second part is divisible by 6 because
          of the obvious factor of {mathSpan("3")}, as well as the fact that either {mathSpan("n")} or
          {mathSpan("(n+1)")} is even.</div>
      </>,
  ),

  natInductionExercise(
      <>{mathSpan("2n^3+3n^2+n")} is divisible by {mathSpan("6")}</>,
      mathDiv("2n^3+3n^2+n = 2#cdot 1^3 + 3#cdot 1^2 + 1 = 2 + 3 + 1 = 6"),
      <>{mathSpan("2(n+1)^3+3(n+1)^2+(n+1)")} is divisible by {mathSpan("6")}</>,
      _detailLevel => <>
        {mathDiv("2(n+1)^3+3(n+1)^2+(n+1)")}
        {mathDiv("= 2(n^3 + 3n^2 + 3n + 1) + 3(n^2 + 2n + 1) + n + 1")}
        {mathDiv("= 2n^3 + 6n^2 + 6n + 2 + 3n^2 + 6n + 3 + n + 1")}
        {mathDiv("= 2n^3 + 3n^2 + n + 6n^2 + 6n + 2 + 6n + 3 + 1")}
        {mathDiv("= (2n^3 + 3n^2 + n) + (6n^2 + 12n + 6)")}
        {mathDiv("= (2n^3 + 3n^2 + n) + 6(n^2 + 2n + 1)")}
        <div>The first part is divisible by 6 by the induction hypothesis, so the sum is divisible by 6 too.</div>
      </>,
  ),

  natInductionExercise(
      <>{mathSpan("n^3-6n^2+14n")} is divisible by {mathSpan("3")}</>,
      mathDiv("n^3-6n^2+14n = 1^3-6#cdot 1^2+14#cdot 1 = 1 - 6 + 14 = 9"),
      <>{mathSpan("(n+1)^3-6(n+1)^2+14(n+1)")} is divisible by {mathSpan("3")}</>,
      _detailLevel => <>
        {mathDiv("(n+1)^3-6(n+1)^2+14(n+1)")}
        {mathDiv("= (n^3 + 3n^2 + 3n + 1) - 6(n^2 + 2n + 1) + (14n + 14)")}
        {mathDiv("= n^3 + 3n^2 + 3n + 1 - 6n^2 - 12n - 6 + 14n + 14")}
        {mathDiv("= n^3 - 6n^2 + 14n + 3n^2 + 3n + 1 - 12n - 6 + 14")}
        {mathDiv("= (n^3 - 6n^2 + 14n) + (3n^2 + - 9n + 9)")}
        {mathDiv("= (n^3 - 6n^2 + 14n) + 3(n^2 + - 3n + 3)")}
        <div>The first part is divisible by 3 by the induction hypothesis, so the sum is divisible by 3 too.</div>
      </>,
  ),

  natInductionExercise(
      <>{mathSpan("3^n - 3")} is divisible by {mathSpan("6")}</>,
      mathDiv("3^n - 3 = 3^1 - 3 = 3 - 3 = 0"),
      <>{mathSpan("3^{n+1} - 3")} is divisible by {mathSpan("6")}</>,
      _detailLevel => <>
        {mathDiv("3^{n+1} - 3")}
        {mathDiv("= (3#cdot 3^n) + (6 - 9)")}
        {mathDiv("= (3#cdot 3^n - 9) + 6")}
        {mathDiv("= 3#cdot (3^n - 3) + 6")}
        <div>The first part is divisible by 6 by the induction hypothesis, so the sum is divisible by 6 too.</div>
      </>,
  ),

  natInductionExercise(
      <>{mathSpan("n^3 + (n+1)^3 + (n+2)^3")} is divisible by {mathSpan("9")}</>,
      mathDiv("n^3 + (n+1)^3 + (n+2)^3 = 1^3 + (1+1)^3 + (1+2)^3 = 1 + 2^3 + 3^3 = 1 + 8 + 27 = 36"),
      <>{mathSpan("(n+1)^3 + ((n+1)+1)^3 + ((n+1)+2)^3")} is divisible by {mathSpan("9")}</>,
      _detailLevel => <>
        {mathDiv("(n+1)^3 + ((n+1)+1)^3 + ((n+1)+2)^3")}
        {mathDiv("= (n+1)^3 + (n+2)^3 + (n+3)^3")}
        {mathDiv("= (n^3 + 3n^2 + 3n + 1) + (n^3 + 6n^2 + 12n + 8) + (n^3 + 9n^2 + 27n + 27)")}
        {mathDiv("= n^3 + (n^3 + 3n^2 + 3n + 1) + (n^3 + 6n^2 + 12n + 8) + (9n^2 + 27n + 27)")}
        {mathDiv("= (n^3 + (n+1)^3 (n+2)^3) + 9(n^2 + 3n + 3)")}
        <div>The first part is divisible by 9 by the induction hypothesis, so the sum is divisible by 9 too.</div>
      </>,
  ),

  natInductionExercise(
      <>{mathSpan("7^{2n}-2^n")} is divisible by {mathSpan("47")}</>,
      mathDiv("7^{2n}-2^n = 7^2-2^1 = 49 - 2 = 47"),
      <>{mathSpan("7^{2(n+1)}-2^{n+1}")} is divisible by {mathSpan("47")}</>,
      _detailLevel => <>
        {mathDiv("7^{2(n+1)}-2^{n+1}")}
        {mathDiv("= 7^{2n+2}-2^{n+1}")}
        {mathDiv("= 49#cdot 7^{2n} - 2#cdot 2^n")}
        {mathDiv("= 2#cdot 7^{2n} - 2#cdot 2^n + 47#cdot 7^{2n}")}
        {mathDiv("= 2#cdot (7^{2n} - 2^n) + 47#cdot 7^{2n}")}
        <div>The first part is divisible by 47 by the induction hypothesis, so the sum is divisible by 47 too.</div>
      </>,
  ),

  natInductionExercise(
      <>{mathSpan("5^n + 7")} is divisible by {mathSpan("4")}</>,
      mathDiv("5^n + 7 = 5^1 + 7 = 5 + 7 = 12"),
      <>{mathSpan("5^{n+1} + 7")} is divisible by {mathSpan("4")}</>,
      _detailLevel => <>
        {mathDiv("5^{n+1} + 7")}
        {mathDiv("= 5#cdot 5^n + 7")}
        {mathDiv("= (5^n + 7) + 4#cdot 5^n")}
        <div>The first part is divisible by 4 by the induction hypothesis, so the sum is divisible by 4 too.</div>
      </>,
  ),

  natInductionExercise(
      <>{mathSpan("5^{2n} - 3^{2n}")} is divisible by {mathSpan("8")}</>,
      mathDiv("5^{2#cdot 1} - 3^{2#cdot 1} = 5^2 - 3^2 = 25 - 9 = 16"),
      <>{mathSpan("5^{2(n + 1)} - 3^{2(n + 1)}")} is divisible by {mathSpan("8")}</>,
      _detailLevel => <>
        {mathDiv("5^{2(n + 1)} - 3^{2(n + 1)}")}
        {mathDiv("= 5^{2n + 2} - 3^{2n + 2}")}
        {mathDiv("= 25#cdot 5^{2n} - 9#cdot 3^{2n}")}
        {mathDiv("= 9#cdot 5^{2n} - 9#cdot 3^{2n} + 16#cdot 5^{2n}")}
        {mathDiv("= 9#cdot (5^{2n} - 3^{2n}) + 16#cdot 5^{2n}")}
        <div>The first part is divisible by 8 by the induction hypothesis, so the sum is divisible by 8 too.</div>
      </>,
  ),

  natInductionExercise(
      <>{mathSpan("2^{3n} + 13")} is divisible by {mathSpan("7")}</>,
      mathDiv("2^{3n} + 13 = 2^{3#cdot 1} + 13 = 2^3 + 13 = 8 + 13 = 21"),
      <>{mathSpan("2^{3(n + 1)} + 13")} is divisible by {mathSpan("7")}</>,
      _detailLevel => <>
        {mathDiv("2^{3(n + 1)} + 13")}
        {mathDiv("= 2^{3n + 3} + 13")}
        {mathDiv("= 8#cdot 2^{3n} + 13")}
        {mathDiv("= 1#cdot 2^{3n} + 13 + 7#cdot 2^{3n}")}
        {mathDiv("= (2^{3n} + 13) + 7#cdot 2^{3n}")}
        <div>The first part is divisible by 7 by the induction hypothesis, so the sum is divisible by 7 too.</div>
      </>,
  ),

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
        solutionFooter: universalOrFixedHint,
      }
  ),

  natInductionExercise(
      <>{mathSpan("n^7 - n")} is divisible by {mathSpan("7")}</>,
      mathDiv("n^7 - n = 1^7 - 1 = 1 - 1 = 0"),
      <>{mathSpan("(n+1)^7 - (n+1)")} is divisible by {mathSpan("7")}</>,
      _detailLevel => <>
        {mathDiv("(n+1)^7 - (n+1)")}
        {mathDiv("= (n^7 + 7n^6 + 21n^5 + 35n^4 + 35n^3 + 21n^2 + 7n + 1) - (n + 1)")}
        {mathDiv("= (n^7 - n) + (7n^6 + 21n^5 + 35n^4 + 35n^3 + 21n^2 + 7n + 1 - 1)")}
        {mathDiv("= (n^7 - n) + 7(n^6 + 3n^5 + 5n^4 + 5n^3 + 3n^2 + n)")}
        <div>The first part is divisible by 7 by the induction hypothesis, so the sum is divisible by 7 too.</div>
      </>,
  ),

  natInductionExercise(
      <>{mathSpan("3^{n+1} + 2^{3n+1}")} is divisible by {mathSpan("5")}</>,
      mathDiv("3^{n+1} + 2^{3n+1} = 3^{1+1} + 2^{3+1} = 3^2 + 2^4 = 9 + 16 = 25"),
      <>{mathSpan("3^{(n+1)+1} + 2^{3(n+1)+1}")} is divisible by {mathSpan("5")}</>,
      _detailLevel => <>
        {mathDiv("3^{(n+1)+1} + 2^{3(n+1)+1}")}
        {mathDiv("= 3^{n+2} + 2^{3n+4}")}
        {mathDiv("= 3#cdot 3^{n+1} + 8#cdot 2^{3n+1}")}
        {mathDiv("= 3#cdot 3^{n+1} + 3#cdot 2^{3n+1} + 5#cdot 2^{3n+1}")}
        {mathDiv("= 3#cdot (3^{n+1} + 2^{3n+1}) + 5#cdot 2^{3n+1}")}
        <div>The first part is divisible by 5 by the induction hypothesis, so the sum is divisible by 5 too.</div>
      </>,
  ),

  natInductionExercise(
      <>{mathSpan("3n^5 + 5n^3 + 7n")} is divisible by {mathSpan("15")}</>,
      mathDiv("3n^5 + 5n^3 + 7n = 3#cdot 1^5 + 5#cdot 1^3 + 7#cdot 1 = 3 + 5 + 7 = 15"),
      <>{mathSpan("3(n + 1)^5 + 5(n + 1)^3 + 7(n + 1)")} is divisible by {mathSpan("15")}</>,
      _detailLevel => <>
        {mathDiv("3(n + 1)^5 + 5(n + 1)^3 + 7(n + 1)")}
        {mathDiv("= 3(n^5 + 5n^4 + 10n^3 + 10n^2 + 5n + 1) + 5(n^3 + 3n^2 + 3n + 1) + 7(n + 1)")}
        {mathDiv("= (3n^5 + 15n^4 + 30n^3 + 30n^2 + 15n + 3) + (5n^3 + 15n^2 + 15n + 5) + (7n + 7)")}
        {mathDiv("= (3n^5 + 5n^3 + 7n) + (15n^4 + 30n^3 + 45n^2 + 30n + 15)")}
        {mathDiv("= (3n^5 + 5n^3 + 7n) + 15(n^4 + 2n^3 + 3n^2 + 2n + 1)")}
        <div>The first part is divisible by 15 by the induction hypothesis, so the sum is divisible by 15 too.</div>
      </>,
  ),

  natInductionExercise(
      <>{mathSpan("3^{2n} + 7")} is divisible by {mathSpan("8")}</>,
      mathDiv("3^{2n} + 7 = 3^2 + 7 = 9 + 7 = 16"),
      <>{mathSpan("3^{2(n+1)} + 7")} is divisible by {mathSpan("8")}</>,
      _detailLevel => <>
        {mathDiv("3^{2(n+1)} + 7")}
        {mathDiv("= 3^{2n+2} + 7")}
        {mathDiv("= 9#cdot 3^{2n} + 7")}
        {mathDiv("= (3^{2n} + 7) + 8#cdot 3^{2n}")}
        <div>The first part is divisible by 8 by the induction hypothesis, so the sum is divisible by 8 too.</div>
      </>,
  ),

  natInductionExercise(
      <>{mathSpan("n^3 + 5n")} is divisible by {mathSpan("6")}</>,
      mathDiv("n^3 + 5n = 1^3 + 5#cdot 1 = 1 + 5 = 6"),
      <>{mathSpan("(n + 1)^3 + 5(n + 1)")} is divisible by {mathSpan("6")}</>,
      _detailLevel => <>
        {mathDiv("(n + 1)^3 + 5(n + 1)")}
        {mathDiv("= (n^3 + 3n^2 + 3n + 1) + (5n + 5)")}
        {mathDiv("= (n^3 + 5n) + (3n^2 + 3n + 1 + 5)")}
        {mathDiv("= (n^3 + 5n) + 3(n^2 + n + 2)")}
        {mathDiv("= (n^3 + 5n) + 3(n^2 + n + 2)")}
        <div>The first part is divisible by 6 by the induction hypothesis. The second part is obviously divisible by
          3, and it is also even because {mathSpan("n^2")} and {mathSpan("n")} are either both odd or both even.</div>
      </>,
  ),

  natInductionExercise(
      <>{mathSpan("n^4-4n^2")} is divisible by {mathSpan("3")}</>,
      mathDiv("n^4-4n^2 = 1^4-4#cdot 1^2 = 1 - 4 = -3"),
      <>{mathSpan("(n+1)^4 - 4(n+1)^2")} is divisible by {mathSpan("3")}</>,
      _detailLevel => <>
        {mathDiv("(n+1)^4 - 4(n+1)^2")}
        {mathDiv("= (n^4 + 4n^3 + 6n^2 + 4n + 1) - 4(n^2 + 2n + 1)")}
        {mathDiv("= (n^4 + 4n^3 + 6n^2 + 4n + 1) - (4n^2 + 8n + 4)")}
        {mathDiv("= (n^4 - 4n^2) + (4n^3 + 6n^2 + 4n + 1 - 8n - 4)")}
        {mathDiv("= (n^4 - 4n^2) + (4n^3 + 6n^2 - 4n - 3)")}
        {mathDiv("= (n^4 - 4n^2) + 3(2n^2 - 1) + 4n(n+1)(n-1)")}
        <div>The first part is divisible by 3 by the induction hypothesis. The second part has an obvious factor of 3.
          In the third part, either {mathSpan("n")}, {mathSpan("(n+1)")} or {mathSpan("(n-1)")} is divisible by 3.</div>
      </>,
      {
        solutionFooter: <Alert severity="info" sx={{ marginTop: "1em" }}>
          <div>The proof by induction does not really make things easier for this problem:</div>
          {mathDiv("n^4 - 4n^2 = n^2(n^2 - 4) = n^2(n + 2)(n - 2)")}
          <div>Either {mathSpan("n")}, {mathSpan("(n+2)")} or {mathSpan("(n-2)")} is divisible by 3.</div>
        </Alert>,
      }
  ),

  natInductionExercise(
      <>{mathSpan("10^n + 3#cdot 4^{n + 2} + 5")} is divisible by {mathSpan("9")}</>,
      <>
        {mathDiv("10^n + 3#cdot 4^{n + 2} + 5")}
        {mathDiv("= 10^1 + 3#cdot 4^{1 + 2} + 5")}
        {mathDiv("= 10 + 3#cdot 4^3 + 5")}
        {mathDiv("= 15 + 3#cdot 64")}
        {mathDiv("= 15 + 192")}
        {mathDiv("= 207")}
      </>,
      <>{mathSpan("10^{n + 1} + 3#cdot 4^{(n + 1) + 2} + 5")} is divisible by {mathSpan("9")}</>,
      _detailLevel => <>
        {mathDiv("10^{n + 1} + 3#cdot 4^{(n + 1) + 2} + 5")}
        {mathDiv("10#cdot 10^n + 4#cdot 3#cdot 4^{n + 2} + 5")}
        {mathDiv("9#cdot 10^n + 1#cdot 10^n + 3#cdot 3#cdot 4^{n + 2} + 1#cdot 3#cdot 4^{n + 2} + 5")}
        {mathDiv("9#cdot 10^n + 9#cdot 4^{n + 2} + 10^n + 3#cdot 4^{n + 2} + 5")}
        {mathDiv("9(10^n + 4^{n + 2}) + (10^n + 3#cdot 4^{n + 2} + 5)")}
        <div>The second part is divisible by 9 by the induction hypothesis, so the sum is divisible by 9 too.</div>
      </>,
  ),

  natInductionExercise(
      <>{mathSpan("4^n + 15n - 1")} is divisible by {mathSpan("9")}</>,
      mathDiv("4^n + 15n - 1 = 4^1 + 15 - 1 = 18"),
      <>{mathSpan("4^{n+1} + 15(n+1) - 1")} is divisible by {mathSpan("9")}</>,
      _detailLevel => <>
        {mathDiv("4^{n+1} + 15(n+1) - 1")}
        {mathDiv("= 4#cdot 4^n + 15n + 14")}
        {mathDiv("= 4#cdot 4^n + 60n - 4 - 45n + 18")}
        {mathDiv("= 4#cdot (4^n + 15n - 1) - 9#cdot (5n + 2)")}
        <div>The first part is divisible by 9 by the induction hypothesis, so the sum is divisible by 9 too.</div>
      </>,
  ),

  natInductionExercise(
      <>{mathSpan("5^{2n} + 24n - 1")} is divisible by {mathSpan("48")}</>,
      mathDiv("5^{2n} + 24n - 1 = 5^2 + 24 - 1 = 25 + 24 - 1 = 48"),
      <>{mathSpan("5^{2(n + 1)} + 24(n + 1) - 1")} is divisible by {mathSpan("48")}</>,
      _detailLevel => <>
        {mathDiv("5^{2(n + 1)} + 24(n + 1) - 1")}
        {mathDiv("= 5^{2n + 2} + 24n + 23")}
        {mathDiv("= 25#cdot 5^{2n} + 24n - 1 + 24")}
        {mathDiv("= 5^{2n} + 24n - 1 + 24 + 24#cdot 5^{2n}")}
        {mathDiv("= (5^{2n} + 24n - 1) + 24#cdot(1 + 5^{2n})")}
        <div>The first part is divisible by 48 by the induction hypothesis. The second part has an obvious factor of
          24, and {mathSpan("(1 + 5^{2n})")} is even, so the second part (and thus the sum) is divisible by 48 too.</div>
      </>,
  ),

  natInductionExercise(
      <>{mathSpan("11^{n+1} + 12{2n-1}")} is divisible by {mathSpan("133")}</>,
      mathDiv("11^{n+1} + 12{2n-1} = 11^{1+1} + 12{2-1} = 11^2 + 12^1 = 121 + 12 = 133"),
      <>{mathSpan("11^{(n+1)+1} + 12{2(n+1)-1}")} is divisible by {mathSpan("133")}</>,
      _detailLevel => <>
        {mathDiv("11^{(n+1)+1} + 12{2(n+1)-1}")}
        {mathDiv("11^{n+2} + 12{2n+1}")}
        {mathDiv("11#cdot 11^{n+1} + 144#cdot 12{2n-1}")}
        {mathDiv("144#cdot 11^{n+1} + 144#cdot 12{2n-1} - 133#cdot 11^{n+1}")}
        {mathDiv("144#cdot (11^{n+1} + 12{2n-1}) - 133#cdot 11^{n+1}")}
        <div>The first part is divisible by 133 by the induction hypothesis, so the sum is divisible by 133 too.</div>
      </>,
  ),

  natInductionExercise(
      <>{mathSpan("(2a-1)^n-1")} is even</>,
      mathDiv("(2a-1)^n - 1 = (2a-1)^1 - 1 = 2a - 1 - 1 = 2(a - 1)"),
      <>{mathSpan("(2a-1)^{n+1} - 1")} is even</>,
      _detailLevel => <>
        {mathDiv("(2a-1)^{n+1} - 1")}
        {mathDiv("= (2a-1)#cdot (2a-1)^n - 1")}
        {mathDiv("= (2a-1)#cdot (2a-1)^n - 1 + (2a-1) - (2a-1)")}
        {mathDiv("= (2a-1)#cdot ((2a-1)^n-1) - 1 + (2a-1)")}
        {mathDiv("= (2a-1)#cdot ((2a-1)^n-1) 2(a-1)")}
        <div>The first part is even by the induction hypothesis, so the sum is even too.</div>
      </>,
      {
        problemPrelude: <>Let {isNatPlusWithoutDefinition("a")}.</>,
        solutionFooter: <>
          <Alert severity="info" sx={{ marginTop: "1em" }}>
            <div>This problem can also be solved without induction:</div>
            <div>{mathSpan("2a")} is even.</div>
            <div>{mathSpan("2a-1")} is odd.</div>
            <div>{mathSpan("(2a-1)^n")} is odd (note that {mathSpan("(2a-1)^0 = 1")} which is odd too).</div>
            <div>{mathSpan("(2a-1)^n-1")} is even.</div>
          </Alert>
          {universalOrFixedHint}
        </>,
      }
  ),

  natInductionExercise(
      <>{mathSpan("a^{n+1} + (a+1)^{2n-1}")} is divisible by {mathSpan("(a^2+a+1)")}</>,
      mathDiv("a^{n+1} + (a+1)^{2n-1} = a^{1+1} + (a+1)^{2-1} = a^2 + (a+1)^1 = a^2+a+1"),
      <>{mathSpan("a^{(n+1)+1} + (a+1)^{2(n+1)-1}")} is divisible by {mathSpan("(a^2+a+1)")}</>,
      _detailLevel => <>
        {mathDiv("a^{(n+1)+1} + (a+1)^{2(n+1)-1}")}
        {mathDiv("= a^{n+2} + (a+1)^{2n+1}")}
        {mathDiv("= a#cdot a^{n+1} + (a+1)^2(a+1)^{2n-1}")}
        {mathDiv("= a#cdot a^{n+1} + (a^2+2a+1)(a+1)^{2n-1}")}
        {mathDiv("= a#cdot a^{n+1} + (a^2+a+1)(a+1)^{2n-1} + a(a+1)^{2n-1}")}
        {mathDiv("= a#cdot (a^{n+1} + (a+1)^{2n-1}) + (a^2+a+1)(a+1)^{2n-1}")}
        <div>The first part is divisible by {mathSpan("(a^2+a+1)")} by the induction hypothesis, so the sum is divisible by {mathSpan("(a^2+a+1)")} too.</div>
      </>,
      {
        problemPrelude: <>Let {isNatPlusWithoutDefinition("a")}.</>,
        solutionFooter: universalOrFixedHint,
      }
  ),

];

export const divisibilitySubtree: ContentNode = {
  id: "divisibility",
  name: "Divisibility",
  type: "exercise",
  exercise: () => randomElement(divisibilityExerciseInstances),
  repeat: true,
};
