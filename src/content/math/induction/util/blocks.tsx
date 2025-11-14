import {Alert} from "@mui/material";
import {mathSpan} from "../../../../framework/technical-components/Math/Math";

export const universalOrFixedHint = <Alert severity="info" sx={{ marginTop: "1em" }}>
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
</Alert>;
