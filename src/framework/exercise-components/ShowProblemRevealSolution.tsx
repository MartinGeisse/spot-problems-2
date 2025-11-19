import {type StreamComponent, type StreamComponentProps} from "../types.tsx";
import {type ReactElement, type ReactNode, useState} from "react";
import {Button} from "@mui/material";

// Implements a very simple kind of exercise that shows a problem to the user, then reveals the solution after clicking
// a button. This is a way to at least show problems when no better kind of exercise implementation is available.

export interface ShowProblemRevealSolutionProps extends StreamComponentProps {
  problem: ReactNode;
  solution: ReactNode;
}

export function ShowProblemRevealSolution(props: ShowProblemRevealSolutionProps): ReactElement {
  const [revealed, setRevealed] = useState(false);
  
  function reveal() {
    setRevealed(true);
    props.onFinish();
  }
  
  return (
    <div>
      <div style={{marginBottom: "1em"}}>{props.problem}</div>
      {!revealed && <Button onClick={reveal} disabled={props.disabled}>Show solution</Button>}
      {revealed && <div>{props.solution}</div>}
    </div>
  );
}

export function createShowProblemRevealSolution(problem: ReactNode, solution: ReactNode): StreamComponent {
  return props => <ShowProblemRevealSolution problem={problem} solution={solution} disabled={props.disabled} onFinish={props.onFinish} />;
}
