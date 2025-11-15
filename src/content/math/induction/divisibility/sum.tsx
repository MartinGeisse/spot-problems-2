
// nothing is randomized in the instances, only the choice of instance is
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math";
import {natInductionExercise} from "../util/framework";
import {ExerciseInstance} from "../../../types";

export const sumExerciseInstances: ExerciseInstance[] = [

  // natInductionExercise(
  //     <>{mathSpan("1+2+3+...+n = #sum_{i=1}^ni = #frac{n(n+1)}2")}</>,
  //     mathDiv("#sum_{i=1}^ni = #sum_{i=1}^1i = 1 = #frac{1(1+1)}2"),
  //     <>{mathSpan("#sum_{i=1}^{n+1}i = #frac{(n+1)((n+1)+1)}2")}</>,
  //     _detailLevel => <>
  //       {mathDiv("#sum_{i=1}^{n+1}i")}
  //       {mathDiv("= (n+1) + #sum_{i=1}^ni")}
  //       <div>using the induction hypothesis:</div>
  //       {mathDiv("= (n+1) + #frac{n(n+1)}2")}
  //       {mathDiv("= #frac{2(n+1)}2 + #frac{n(n+1)}2")}
  //       {mathDiv("= #frac{2(n+1) + n(n+1)}2")}
  //       {mathDiv("= #frac{(n+1)(n+2)}2")}
  //     </>
  // ),

  // natInductionExercise(
  //     <>{mathSpan("1^2+2^2+3^2+...+n^2 = #sum_{i=1}^ni^2 = #frac{n(n+1)(2n+1)}6")}</>,
  //     mathDiv("#sum_{i=1}^ni^2 = #sum_{i=1}^1i^2 = 1^2 = 1 = #frac{1#cdot 2#cdot 3}6 = #frac{n(n+1)(2n+1)}6"),
  //     <>{mathSpan("#sum_{i=1}^{n+1}i^2 = #frac{(n+1)((n+1)+1)(2(n+1)+1)}6 = #frac{(n+1)(n+2)(2n+3)}6")}</>,
  //     _detailLevel => <>
  //       {mathDiv("#sum_{i=1}^{n+1}i^2")}
  //       {mathDiv("= (n+1)^2 + #sum_{i=1}^ni^2")}
  //       <div>using the induction hypothesis:</div>
  //       {mathDiv("= (n+1)^2 + #frac{n(n+1)(2n+1)}6")}
  //       {mathDiv("= #frac{6(n+1)^2}6 + #frac{n(n+1)(2n+1)}6")}
  //       {mathDiv("= #frac{6(n+1)^2 + n(n+1)(2n+1)}6")}
  //       {mathDiv("= #frac{(n+1)(6(n+1) + n(2n+1))}6")}
  //       {mathDiv("= #frac{(n+1)(6n + 6 + 2n^2 + n))}6")}
  //       {mathDiv("= #frac{(n+1)(2n^2 + 7n + 6))}6")}
  //       {mathDiv("= #frac{(n+1)(n+2)(2n+3)}6")}
  //     </>
  // ),

  // natInductionExercise(
  //     <>{mathSpan("1^3+2^3+3^3+...+n^3 = #sum_{i=1}^ni^3 = #frac{n^2(n+1)^2}4")}</>,
  //     mathDiv("#sum_{i=1}^ni^3 = #sum_{i=1}^1i^3 = 1^3 = 1 = #frac{1^2(1+1)^2}4"),
  //     mathSpan("#sum_{i=1}^{n+1}i^3 = #frac{(n+1)^2(n+2)^2}4"),
  //     _detailLevel => <>
  //       {mathDiv("#sum_{i=1}^{n+1}i^3")}
  //       {mathDiv("= (n+1)^3 + #sum_{i=1}^ni^3")}
  //       <div>using the induction hypothesis:</div>
  //       {mathDiv("= (n+1)^3 + #frac{n^2(n+1)^2}4")}
  //       {mathDiv("= #frac{4(n+1)^3}4 + #frac{n^2(n+1)^2}4")}
  //       {mathDiv("= #frac{4(n+1)^3 + n^2(n+1)^2}4")}
  //       {mathDiv("= #frac{(n+1)^2(4(n+1) + n^2)}4")}
  //       {mathDiv("= #frac{(n+1)^2(n^2 + 4n + 4)}4")}
  //       {mathDiv("= #frac{(n+1)^2(n+2)^2}4")}
  //     </>
  // ),

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
