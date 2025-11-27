import {
  applyHintLevel,
  type ExerciseComponent,
  type ExerciseComponentProps,
  type HintLevelApplicable
} from "../types.tsx";
import {type ReactElement, useState} from "react";
import {Button} from "@mui/material";

// Implements a very simple kind of exercise that shows a problem to the user, then reveals the solution after clicking
// a button. This is a way to at least show problems when no better kind of exercise implementation is available.

export interface ShowProblemRevealSolutionProps extends ExerciseComponentProps {
  problem: HintLevelApplicable;
  solution: HintLevelApplicable;
}

export function ShowProblemRevealSolution(props: ShowProblemRevealSolutionProps): ReactElement {
  const [revealed, setRevealed] = useState(false);
  
  return (
    <div>
      <div style={{marginBottom: "1em"}}>{applyHintLevel(props.hintLevel, props.problem)}</div>
      {!revealed && <Button onClick={() => setRevealed(true)} disabled={revealed}>Show solution</Button>}
      {revealed && <div style={{marginBottom: "1em"}}>{applyHintLevel(props.hintLevel, props.solution)}</div>}
      {revealed && <Button onClick={props.onFinish} disabled={props.finished}>Next Problem</Button>}
    </div>
  );
}

export function createShowProblemRevealSolution(problem: HintLevelApplicable, solution: HintLevelApplicable): ExerciseComponent {
  return props => <ShowProblemRevealSolution {...props} problem={problem} solution={solution} />;
}
