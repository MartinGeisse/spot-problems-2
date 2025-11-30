// nothing is randomized in the instances, only the choice of instance is
import {mathDiv, mathSpan} from "../../../framework/technical-components/Math/Math.tsx";
import {natInductionExercise} from "./util/framework.tsx";
import {type ContentNode, type ExerciseInstance} from "../../../framework/types.tsx";
import {isNatPlusWithoutDefinition} from "../../../framework/exercise-components/math/math-atoms.tsx";
import {universalOrFixedHint} from "./util/blocks.tsx";
import {randomElement} from "../../../framework/util/random/randomElement.ts";

// TODO hieraus ergeben sich aufgaben zur summenschreibweise an sich: "schreibe (informelle beschreibung) mit dem summenzeichen"
// nothing is randomized in the instances, only the choice of instance is
export const sumExerciseInstances: ExerciseInstance[] = [
    
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

  natInductionExercise(
      <>{mathSpan("1^2+2^2+3^2+...+n^2 = #sum_{i=1}^ni^2 = #frac{n(n+1)(2n+1)}6")}</>,
      mathDiv("#sum_{i=1}^ni^2 = #sum_{i=1}^1i^2 = 1^2 = 1 = #frac{1#cdot 2#cdot 3}6 = #frac{n(n+1)(2n+1)}6"),
      <>{mathSpan("#sum_{i=1}^{n+1}i^2 = #frac{(n+1)((n+1)+1)(2(n+1)+1)}6 = #frac{(n+1)(n+2)(2n+3)}6")}</>,
      _detailLevel => <>
        {mathDiv("#sum_{i=1}^{n+1}i^2")}
        {mathDiv("= (n+1)^2 + #sum_{i=1}^ni^2")}
        <div>using the induction hypothesis:</div>
        {mathDiv("= (n+1)^2 + #frac{n(n+1)(2n+1)}6")}
        {mathDiv("= #frac{6(n+1)^2}6 + #frac{n(n+1)(2n+1)}6")}
        {mathDiv("= #frac{6(n+1)^2 + n(n+1)(2n+1)}6")}
        {mathDiv("= #frac{(n+1)(6(n+1) + n(2n+1))}6")}
        {mathDiv("= #frac{(n+1)(6n + 6 + 2n^2 + n))}6")}
        {mathDiv("= #frac{(n+1)(2n^2 + 7n + 6))}6")}
        {mathDiv("= #frac{(n+1)(n+2)(2n+3)}6")}
      </>
  ),

  natInductionExercise(
      <>{mathSpan("1^3+2^3+3^3+...+n^3 = #sum_{i=1}^ni^3 = #frac{n^2(n+1)^2}4")}</>,
      mathDiv("#sum_{i=1}^ni^3 = #sum_{i=1}^1i^3 = 1^3 = 1 = #frac{1^2(1+1)^2}4"),
      mathSpan("#sum_{i=1}^{n+1}i^3 = #frac{(n+1)^2(n+2)^2}4"),
      _detailLevel => <>
        {mathDiv("#sum_{i=1}^{n+1}i^3")}
        {mathDiv("= (n+1)^3 + #sum_{i=1}^ni^3")}
        <div>using the induction hypothesis:</div>
        {mathDiv("= (n+1)^3 + #frac{n^2(n+1)^2}4")}
        {mathDiv("= #frac{4(n+1)^3}4 + #frac{n^2(n+1)^2}4")}
        {mathDiv("= #frac{4(n+1)^3 + n^2(n+1)^2}4")}
        {mathDiv("= #frac{(n+1)^2(4(n+1) + n^2)}4")}
        {mathDiv("= #frac{(n+1)^2(n^2 + 4n + 4)}4")}
        {mathDiv("= #frac{(n+1)^2(n+2)^2}4")}
      </>
  ),

  natInductionExercise(
      <>{mathSpan("1^4+2^4+3^4+...+n^4 = #sum_{i=1}^ni^4 = #frac{n(n+1)(2n+1)(3n^2+3n-1)}{30}")}</>,
      <>
        {mathDiv("#sum_{i=1}^ni^4 = #sum_{i=1}^1i^4 = 1^4 = 1 = #frac{30}{30}")}
        {mathDiv("= #frac{1#cdot 2#cdot 3#cdot 5}{30}")}
        {mathDiv("= #frac{1(1+1)(2#cdot 1+1)(3#cdot 1^2+3#cdot 1-1)}{30}")}
        {mathDiv("= #frac{n(n+1)(2n+1)(3n^2+3n-1)}{30}")}
      </>,
      mathSpan("#sum_{i=1}^{n+1}i^4 = #frac{(n+1)((n+1)+1)(2(n+1)+1)(3(n+1)^2+3(n+1)-1)}{30}"),
      _detailLevel => <>
        {mathDiv("#sum_{i=1}^{n+1}i^4")}
        {mathDiv("= (n+1)^4 + #sum_{i=1}^ni^4")}
        <div>using the induction hypothesis:</div>
        {mathDiv("= (n+1)^4 + #frac{n(n+1)(2n+1)(3n^2+3n-1)}{30}")}
        {mathDiv("= #frac{30(n+1)^4}{30} + #frac{n(n+1)(2n+1)(3n^2+3n-1)}{30}")}
        {mathDiv("= #frac{30(n+1)^4 + n(n+1)(2n+1)(3n^2+3n-1)}{30}")}
        {mathDiv("= #frac{n+1}{30}(30(n+1)^3 + n(2n+1)(3n^2+3n-1))")}
        <div style={{fontSize: "0.87em"}}>{mathDiv("= #frac{n+1}{30}(30n^3 + 90n^2 + 90n + 30 + 6n^4 + 6n^3 - 2n^2 + 3n^3 + 3n^2 - n)")}</div>
        {mathDiv("= #frac{n+1}{30}(6n^4 + 39n^3 + 91n^2 + 89n + 30)")}
        {mathDiv("= #frac{(n+1)(n+2)}{30}(6n^3 + 27n^2 + 37n + 15)")}
        {mathDiv("= #frac{(n+1)(n+2)}{30}(2n + 3)(3n^2 + 9n + 5)")}
        <div style={{fontSize: "0.9em"}}>{mathDiv("= #frac{(n+1)((n+1)+1)(2(n+1)+1)(3(n+1)^2+3(n+1)-1)}{30}")}</div>
      </>
  ),

  natInductionExercise(
      <>{mathSpan("1+3+5+...+(2n-1) = #sum_{i=1}^n(2i-1) = n^2")}</>,
      <>{mathDiv("#sum_{i=1}^n(2i-1) = #sum_{i=1}^1(2i-1) = 2#cdot 1 - 1 = 1 = 1^2")}</>,
      mathSpan("#sum_{i=1}^{n+1}(2i-1) = (n+1)^2"),
      _detailLevel => <>
        {mathDiv("#sum_{i=1}^{n+1}(2i-1)")}
        {mathDiv("= (2(n+1)-1) + #sum_{i=1}^n(2i-1)")}
        {mathDiv("= (2n+1) + #sum_{i=1}^n(2i-1)")}
        <div>using the induction hypothesis:</div>
        {mathDiv("= 2n + 1 + n^2")}
        {mathDiv("= (n+1)^2")}
      </>
  ),

  natInductionExercise(
      <>{mathSpan("1^2+3^2+5^2+...+(2n-1)^2 = #sum_{i=1}^n(2i-1)^2 = #frac{(2n-1)2n(2n+1)}{6}")}</>,
      <>{mathDiv("#sum_{i=1}^n(2i-1)^2 = #sum_{i=1}^1(2i-1)^2 = (2#cdot 1 - 1)^2 = 1 = #frac{1#cdot 2#cdot 3}{6}")}</>,
      mathSpan("#sum_{i=1}^{n + 1}(2i-1)^2 = #frac{(2(n+1)-1)2(n+1)(2(n+1)+1)}{6}"),
      _detailLevel => <>
        {mathDiv("#sum_{i=1}^{n + 1}(2i-1)^2")}
        {mathDiv("= (2(n+1)-1)^2 + #sum_{i=1}^n(2i-1)^2")}
        {mathDiv("= (2n+1)^2 + #sum_{i=1}^n(2i-1)^2")}
        <div>using the induction hypothesis:</div>
        {mathDiv("= (2n+1)^2 + #frac{(2n-1)2n(2n+1)}{6}")}
        {mathDiv("= #frac{6(2n+1)^2}{6} + #frac{(2n-1)2n(2n+1)}{6}")}
        {mathDiv("= #frac{6(2n+1)^2 + (2n-1)2n(2n+1)}{6}")}
        {mathDiv("= #frac{(2n+1)(6(2n+1) + (2n-1)2n)}{6}")}
        {mathDiv("= #frac{(2n+1)(12n + 6 + 4n^4 - 2n)}{6}")}
        {mathDiv("= #frac{(2n+1)(4n^4 + 10n + 6)}{6}")}
        {mathDiv(" = #frac{(2n+1)(2n+2)(2n+3)}{6}")}
        {mathDiv(" = #frac{(2(n+1)-1)2(n+1)(2(n+1)+1)}{6}")}
      </>
  ),

  natInductionExercise(
      <>{mathSpan("1+4+7+...+(3n-2) = #sum_{i=1}^n(3i-2) = #frac{n(3n-1)}{2}")}</>,
      <>{mathDiv("#sum_{i=1}^n(3i-2) = #sum_{i=1}^1(3i-2) = (3#cdot 1-2) = 1 = #frac{2}{2} = #frac{1#cdot (3#cdot 1 - 1)}{2}")}</>,
      mathSpan("#sum_{i=1}^{n+1}(3i-2) = #frac{(n+1)(3(n+1)-1)}{2}"),
      _detailLevel => <>
        {mathDiv("#sum_{i=1}^{n+1}(3i-2)")}
        {mathDiv("= 3(n+1)-2 + #sum_{i=1}^n(3i-2)")}
        <div>using the induction hypothesis:</div>
        {mathDiv("= 3(n+1)-2 + #frac{n(3n-1)}{2}")}
        {mathDiv("= #frac{2(3(n+1)-2)}{2} + #frac{n(3n-1)}{2}")}
        {mathDiv("= #frac{2(3(n+1)-2) + n(3n-1)}{2}")}
        {mathDiv("= #frac{6n + 6 - 4 + 3n^2 - n}{2}")}
        {mathDiv("= #frac{3n^2 + 5n + 2}{2}")}
        {mathDiv("= #frac{(n+1)(3n+2)}{2}")}
        {mathDiv("= #frac{(n+1)(3(n+1)-1)}{2}")}
      </>
  ),

  natInductionExercise(
      <>{mathSpan("3+7+11+...+(4n-1) = #sum_{i=1}^n(4i-1) = 2n^2 + n")}</>,
      <>{mathDiv("#sum_{i=1}^n(4i-1) = #sum_{i=1}^1(4i-1) = 4#cdot 1 - 1 = 3 = 2 + 1 = 2#cdot 1^2 + 1")}</>,
      mathSpan("#sum_{i=1}^{n+1}(4i-1) = 2(n+1)^2 + (n+1)"),
      _detailLevel => <>
        {mathDiv("#sum_{i=1}^{n+1}(4i-1)")}
        {mathDiv("= 4(n+1)-1 + #sum_{i=1}^n(4i-1)")}
        <div>using the induction hypothesis:</div>
        {mathDiv("= 4(n+1)-1 + 2n^2 + n")}
        {mathDiv("= 4n + 3 + 2n^2 + n")}
        {mathDiv("= 2n^2 + 5n + 3")}
        {mathDiv("= (2n^2 + 4n + 2) + (n + 1)")}
        {mathDiv("= 2(n+1)^2 + (n + 1)")}
      </>
  ),

  natInductionExercise(
      <>{mathSpan("1+2+4+8+...+2^n = #sum_{i=0}^n2^i = 2^{n+1}-1")}</>,
      <>{mathDiv("#sum_{i=0}^n2^i = #sum_{i=0}^12^i = 2^0 + 2^1 = 3 = 4 - 1 = 2^2 - 1 = 2^{n+1}-1")}</>,
      mathSpan("#sum_{i=0}^{n+1}2^i = 2^{(n+1)+1}-1"),
      _detailLevel => <>
        {mathDiv("#sum_{i=0}^{n+1}2^i")}
        {mathDiv("= #sum_{i=0}^{n}2^i + 2^{n+1}")}
        <div>using the induction hypothesis:</div>
        {mathDiv("= 2^{n+1}-1 + 2^{n+1}")}
        {mathDiv("= 2#cdot 2^{n+1} - 1")}
        {mathDiv("= 2^{n+2} - 1")}
        {mathDiv("= 2^{(n+1)+1} - 1")}
      </>
  ),

  natInductionExercise(
      <>{mathSpan("1 + a + a^2 + ... + a^n = #sum_{i=0}^na^i = #frac{a^{n+1}-1}{a-1}")}</>,
      <>
        {mathDiv("#sum_{i=0}^na^i = #sum_{i=0}^1a^i = a^0 + a^1 = a + 1")}
        <div>and</div>
        {mathDiv("#frac{a^{n+1}-1}{a-1} = #frac{a^{1+1}-1}{a-1} = #frac{a^2-1}{a-1} = #frac{(a+1)(a-1)}{a-1} = a + 1")}
      </>,
      mathSpan("#sum_{i=0}^{n+1}a^i = #frac{a^{(n+1)+1}-1}{a-1}"),
      _detailLevel => <>
        {mathDiv("#sum_{i=0}^{n+1}a^i")}
        {mathDiv("= #sum_{i=0}^na^i + a^{n+1}")}
        <div>using the induction hypothesis:</div>
        {mathDiv("= #frac{a^{n+1}-1}{a-1} + a^{n+1}")}
        {mathDiv("= #frac{a^{n+1}-1}{a-1} + #frac{a^{n+1}(a-1)}{a-1}")}
        {mathDiv("= #frac{a^{n+1}-1 + a^{n+1}(a-1)}{a-1}")}
        {mathDiv("= #frac{a^{n+1}(1 + (a-1)) - 1}{a-1}")}
        {mathDiv("= #frac{a^{n+1}#cdot a - 1}{a-1}")}
        {mathDiv("= #frac{a^{n+2} - 1}{a-1}")}
        {mathDiv("= #frac{a^{(n+1) + 1}-1}{a-1}")}
      </>,
      {
        problemPrelude: <>Let {isNatPlusWithoutDefinition("a")}.</>,
        solutionFooter: universalOrFixedHint,
      }
  ),

  natInductionExercise(
      <>{mathSpan("1 + #frac{2^0}{3^1} + #frac{2^2}{3^2} + ... + #frac{2^{2(n-1)}}{3^n} = 1 + #sum_{i=1}^n#frac{2^{2(i-1)}}{3^i} = (#frac{4}{3})^n")}</>,
      <>
        {mathDiv("1 + #sum_{i=1}^n#frac{2^{2(i-1)}}{3^i} = 1 + #sum_{i=1}^1#frac{2^{2(i-1)}}{3^i} = 1 + #frac{2^{2(1-1)}}{3^1}")}
        {mathDiv("= 1 + #frac{2^0}{3} = 1 + #frac{1}{3} = (#frac{4}{3})^1 = (#frac{4}{3})^n")}
      </>,
      mathSpan("1 + #sum_{i=1}^{n+1}#frac{2^{2(i-1)}}{3^i} = (#frac{4}{3})^{n+1}"),
      _detailLevel => <>
        {mathDiv("1 + #sum_{i=1}^{n+1}#frac{2^{2(i-1)}}{3^i}")}
        {mathDiv("= 1 + #sum_{i=1}^n#frac{2^{2(i-1)}}{3^i} + #frac{2^{2((n+1)-1)}}{3^{n+1}}")}
        <div>using the induction hypothesis:</div>
        {mathDiv("= (#frac{4}{3})^n + #frac{2^{2((n+1)-1)}}{3^{n+1}}")}
        {mathDiv("= (#frac{4}{3})^n + #frac{2^{2n}}{3^{n+1}}")}
        {mathDiv("= (#frac{4}{3})^n + #frac{1}{3}#cdot #frac{4^n}{3^n}")}
        {mathDiv("= 1#cdot (#frac{4}{3})^n + #frac{1}{3}#cdot (#frac{4}{3})^n")}
        {mathDiv("= (1 + #frac{1}{3})#cdot (#frac{4}{3})^n")}
        {mathDiv("= #frac{4}{3}#cdot (#frac{4}{3})^n")}
        {mathDiv("= (#frac{4}{3})^{n+1}")}
      </>
  ),

  natInductionExercise(
      <>{mathSpan("1^2 - 2^2 + 3^2 - 4^2 + ... + -1^{n-1}n^2 = #sum_{i=1}^n-1^{i-1}i^2 = -1^{n-1}#frac{n(n+1)}{2}")}</>,
      <>
        {mathDiv("#sum_{i=1}^n-1^{i-1}i^2 = #sum_{i=1}^1-1^{i-1}i^2 = -1^{1-1}1^2 = -1^0#cdot 1 = 1")}
        <div>and</div>
        {mathDiv("-1^{n-1}#frac{n(n+1)}{2} = -1^{1-1}#frac{1(1+1)}{2} = #frac{1#cdot 2}{2} = 1")}
      </>,
      mathSpan("#sum_{i=1}^{n+1}-1^{i-1}i^2 = -1^{(n+1)-1}#frac{(n+1)((n+1)+1)}{2}"),
      _detailLevel => <>
        {mathDiv("#sum_{i=1}^{n+1}-1^{i-1}i^2")}
        {mathDiv("= #sum_{i=1}^n-1^{i-1}i^2 + (-1^{(n+1)-1}(n+1)^2)")}
        <div>using the induction hypothesis:</div>
        {mathDiv("= (-1^{n-1}#frac{n(n+1)}{2}) + (-1^{(n+1)-1}(n+1)^2)")}
        {mathDiv("= (-1^{n-1}#frac{n(n+1)}{2}) - (-1^{n-1}(n+1)^2)")}
        {mathDiv("= (-1^{n-1})(n+1)(#frac{n}{2} - (n+1))")}
        {mathDiv("= (-1^{n-1})(n+1)(-#frac{n}{2} - 1))")}
        {mathDiv("= -1^{n-1}#frac{(n+1)(-n - 2))}{2}")}
        {mathDiv("= -(-1^{n-1}#frac{(n+1)(n+2)}{2})")}
        {mathDiv("= -(-1^{n-1}#frac{(n+1)((n+1)+1)}{2})")}
        {mathDiv("= -1^{(n+1)-1}#frac{(n+1)((n+1)+1)}{2}")}
      </>
  ),

  natInductionExercise(
      <>{mathSpan("1#cdot 2 + 2#cdot 3 + 3#cdot 4 + ... + n(n+1) = #sum_{i=1}^ni(i+1) = #frac{n(n+1)(n+2)}{3}")}</>,
      <>{mathDiv("#sum_{i=1}^ni(i+1) = #sum_{i=1}^1i(i+1) = 1(1+1) = 2 = #frac{6}{3} = #frac{1#cdot 2#cdot 3}{3}")}</>,
      mathSpan("#sum_{i=1}^{n+1}i(i+1) = #frac{(n+1)(n+2)(n+3)}{3}"),
      _detailLevel => <>
        {mathDiv("#sum_{i=1}^{n+1}i(i+1)")}
        {mathDiv("= #sum_{i=1}^ni(i+1) + (n+1)((n+1)+1)")}
        <div>using the induction hypothesis:</div>
        {mathDiv("= #frac{n(n+1)(n+2)}{3} + (n+1)(n+2)")}
        {mathDiv("= (n+1)(n+2)(#frac{n}{3} + 1)")}
        {mathDiv("= (n+1)(n+2)(#frac{n}{3} + #frac{3}{3})")}
        {mathDiv("= #frac{(n+1)(n+2)(n+3)}{3}")}
      </>
  ),

  natInductionExercise(
      <>{mathSpan("1#cdot 1! + 2#cdot 2! + ... + n#cdot n! = #sum_{i=1}^ni#cdot i! = (n+1)!-1")}</>,
      <>{mathDiv("#sum_{i=1}^ni#cdot i! = #sum_{i=1}^1i#cdot i! = 1#cdot 1! = 1 = 2 - 1 = 2! - 1 = (n+1)! - 1")}</>,
      mathSpan("#sum_{i=1}^{n+1}i#cdot i! = ((n+1)+1)!-1"),
      _detailLevel => <>
        {mathDiv("#sum_{i=1}^{n+1}i#cdot i!")}
        {mathDiv("= #sum_{i=1}^ni#cdot i! + (n+1)#cdot (n+1)!")}
        <div>using the induction hypothesis:</div>
        {mathDiv("= (n+1)!-1 + (n+1)#cdot (n+1)!")}
        {mathDiv("= (n+1)!(1 + (n+1)) - 1")}
        {mathDiv("= (n+1)!(n+2) - 1")}
        {mathDiv("= (n+2)! - 1")}
      </>
  ),

  natInductionExercise(
      <>{mathSpan("1#cdot 2#cdot 3 + 2#cdot 3#cdot 4 + 3#cdot 4#cdot 5 + ... + n(n+1)(n+2) = #sum_{i=1}^ni(i+1)(i+2) = #frac{n(n+1)(n+2)(n+3)}{4}")}</>,
      <>{mathDiv("#sum_{i=1}^ni(i+1)(i+2) = #sum_{i=1}^1i(i+1)(i+2) = 1(1+1)(1+2) = 1#cdot 2#cdot 3 = #frac{1#cdot 2#cdot 3#cdot 4}{4}")}</>,
      mathSpan("#sum_{i=1}^{n+1}i(i+1)(i+2) = #frac{(n+1)(n+2)(n+3)(n+4)}{4}"),
      _detailLevel => <>
        {mathDiv("#sum_{i=1}^{n+1}i(i+1)(i+2)")}
        {mathDiv("= (n+1)((n+1)+1)((n+1)+2) + #sum_{i=1}^ni(i+1)(i+2)")}
        <div>using the induction hypothesis:</div>
        {mathDiv("= (n+1)((n+1)+1)((n+1)+2) + #frac{n(n+1)(n+2)(n+3)}{4}")}
        {mathDiv("= #frac{4(n+1)(n+2)(n+3)}{4} + #frac{n(n+1)(n+2)(n+3)}{4}")}
        {mathDiv("= #frac{4(n+1)(n+2)(n+3) + n(n+1)(n+2)(n+3)}{4}")}
        {mathDiv("= #frac{(n+1)(n+2)(n+3)(n+4)}{4}")}
      </>
  ),


  // komplizierter -- summe auf beiden seiten!
  natInductionExercise(
      <>{mathSpan("#sum_{i=1}^{n}(#frac{1}{2i-1} - #frac{1}{2i}) = #sum_{i=n+1}^{2n}#frac{1}{i}")}</>,
      <>
        {mathDiv("#sum_{i=1}^{n}(#frac{1}{2i-1} - #frac{1}{2i})")}
        {mathDiv("= #sum_{i=1}^{1}(#frac{1}{2i-1} - #frac{1}{2i})")}
        {mathDiv("= #frac{1}{2#cdot 1-1} - #frac{1}{2#cdot 1}")}
        {mathDiv("= #frac{1}{2 - 1} - #frac{1}{2}")}
        {mathDiv("= #frac{1}{2}")}
        {mathDiv("= #sum_{i=2}^{2}#frac{1}{i}")}
        {mathDiv("= #sum_{i=1+1}^{2#cdot 1}#frac{1}{i}")}
      </>,
      mathSpan("#sum_{i=1}^{n+1}(#frac{1}{2i-1} - #frac{1}{2i}) = #sum_{i=(n+1)+1}^{2(n+1)}#frac{1}{i}"),
      _detailLevel => <>
        {mathDiv("#sum_{i=1}^{n+1}(#frac{1}{2i-1} - #frac{1}{2i})")}
        {mathDiv("= (#frac{1}{2(n+1)-1} - #frac{1}{2(n+1)}) + #sum_{i=1}^n(#frac{1}{2i-1} - #frac{1}{2i})")}
        <div>using the induction hypothesis:</div>
        {mathDiv("= (#frac{1}{2n+1} - #frac{1}{2n+2}) + #sum_{i=n+1}^{2n}#frac{1}{i}")}
        {mathDiv("= (#frac{1}{2n+1} - #frac{1}{2n+2}) + (#frac{1}{n+1} - #frac{1}{2n+1} - #frac{1}{2n+2}) + #sum_{i=n+2}^{2n+2}#frac{1}{i}")}
        {mathDiv("= (#frac{1}{2n+1} - #frac{1}{2n+1} + #frac{1}{n+1} - #frac{1}{2n+2} - #frac{1}{2n+2}) + #sum_{i=n+2}^{2n+2}#frac{1}{i}")}
        {mathDiv("= (#frac{2}{2n+2} - #frac{1}{2n+2} - #frac{1}{2n+2}) + #sum_{i=n+2}^{2n+2}#frac{1}{i}")}
        {mathDiv("= #sum_{i=(n+1)+1}^{2(n+1)}#frac{1}{i}")}
      </>,
      {
        problemPrelude: <>
          {mathDiv("#frac{1}{1} - #frac{1}{2} + #frac{1}{3} - #frac{1}{4} + ... + #frac{1}{2n-1} - #frac{1}{2n} = #sum_{i=1}^{n}(#frac{1}{2i-1} - #frac{1}{2i})")}
          {mathDiv("#frac{1}{n+1} + #frac{1}{n+2} + #frac{1}{n+3} + ... + #frac{1}{2n} = #sum_{i=n+1}^{2n}#frac{1}{i}")}
        </>,
      },
  ),

  natInductionExercise(
      <>{mathSpan("1 + #frac{1}{2} + #frac{1}{4} + ... + #frac{1}{2^{n-1}} = #sum_{i=0}^{n-1}#frac{1}{2^i} = 2#cdot (1 - #frac{1}{2^n})")}</>,
      <>{mathDiv("#sum_{i=0}^{n-1}#frac{1}{2^i} = #sum_{i=0}^{1-1}#frac{1}{2^i} = #frac{1}{2^0} = 1 = 2#cdot #frac{1}{2} = 2#cdot (1 - #frac{1}{2}) = 2#cdot (1 - #frac{1}{2^n})")}</>,
      mathSpan("#sum_{i=0}^{(n+1)-1}#frac{1}{2^i} = 2#cdot (1 - #frac{1}{2^{n+1}})"),
      _detailLevel => <>
        {mathDiv("#sum_{i=0}^{(n+1)-1}#frac{1}{2^i}")}
        {mathDiv("= #sum_{i=0}^n#frac{1}{2^i}")}
        {mathDiv("= #frac{1}{2^n} + #sum_{i=0}^{n-1}#frac{1}{2^i}")}
        <div>using the induction hypothesis:</div>
        {mathDiv("= #frac{1}{2^n} + 2#cdot (1 - #frac{1}{2^n})")}
        {mathDiv("= 2#cdot #frac{1}{2^{n+1}} + 2#cdot (1 - #frac{1}{2^n})")}
        {mathDiv("= 2#cdot (#frac{1}{2^{n+1}} + 1 - #frac{1}{2^n})")}
        {mathDiv("= 2#cdot (1 - #frac{1}{2^n} + #frac{1}{2^{n+1}})")}
        {mathDiv("= 2#cdot (1 - (#frac{2}{2^{n+1}} - #frac{1}{2^{n+1}}))")}
        {mathDiv("= 2#cdot (1 - #frac{1}{2^{n+1}})")}
      </>
  ),

  natInductionExercise(
      <>{mathSpan("#frac{1}{1#cdot 2} + #frac{1}{2#cdot 3} + #frac{1}{3#cdot 4} + ... + #frac{1}{n(n+1)} = #sum_{i=1}^{n}#frac{1}{i(i+1)} = #frac{n}{n+1}")}</>,
      <>{mathDiv("#sum_{i=1}^{n}#frac{1}{i(i+1)} = #sum_{i=1}^{1}#frac{1}{i(i+1)} = #frac{1}{1(1+1)} = #frac{1}{2} = #frac{1}{1#cdot 2} = #frac{n}{n+1}")}</>,
      mathSpan("#sum_{i=1}^{n+1}#frac{1}{i(i+1)} = #frac{n+1}{n+2}"),
      _detailLevel => <>
        {mathDiv("#sum_{i=1}^{n+1}#frac{1}{i(i+1)}")}
        {mathDiv("= #frac{1}{(n+1)(n+2)} + #sum_{i=1}^{n}#frac{1}{i(i+1)}")}
        <div>using the induction hypothesis:</div>
        {mathDiv("= #frac{1}{(n+1)(n+2)} + #frac{n}{n+1}")}
        {mathDiv("= #frac{1}{(n+1)(n+2)} + #frac{n(n+2)}{(n+1)(n+2)}")}
        {mathDiv("= #frac{1 + n(n+2)}{(n+1)(n+2)}")}
        {mathDiv("= #frac{n^2 + 2n + 1}{(n+1)(n+2)}")}
        {mathDiv("= #frac{(n+1)^2}{(n+1)(n+2)}")}
        {mathDiv("= #frac{n+1}{n+2}")}
      </>
  ),
    
    // (next 19)






  // TODO add more exercises
  // natInductionExercise(
  //     <>{mathSpan("1+4+7+...+(3n-2) = #sum_{i=1}^n() = #frac{n(3n-1)}{2}")}</>,
  //     <>{mathDiv("#sum_{i=1}^n(3i-2) = #sum_{i=1}^1(3i-2) = (3#cdot 1-2) = 1 = #frac{2}{2} = #frac{1#cdot (3#cdot 1 - 1)}{2}")}</>,
  //     mathSpan("#sum_{i=1}^{n+1}(3i-2) = #frac{(n+1)(3(n+1)-1)}{2}"),
  //     _detailLevel => <>
  //       {mathDiv("#sum_{i=1}^{n+1}(3i-2)")}
  //       {mathDiv("= 3(n+1)-2 + #sum_{i=1}^n(3i-2)")}
  //       <div>using the induction hypothesis:</div>
  //       {mathDiv("= 3(n+1)-2 + #frac{n(3n-1)}{2}")}
  //     </>
  // ),

];

export const sumSubtree: ContentNode = {
  id: "sum",
  name: "Sums",
  type: "exercise",
  exercise: () => randomElement(sumExerciseInstances),
  repeat: true,
};
