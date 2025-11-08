import {ExerciseInstance} from "../../../../content/types";
import {ReactElement} from "react";
import {Button} from "@mui/material";

// TODO we need a concept how streams and stream selection should interact with the browser back button
// current "solution" is "don't use the back button"

export interface StreamSelectionProps {
  exerciseInstance: ExerciseInstance;
  selectedStreamIndex: number;
  selectStream: (index: number) => void;
  close: () => void;
}

export function StreamSelection(props: StreamSelectionProps): ReactElement {
  return <>
    {props.exerciseInstance.streams.map((stream, index) => <div key={index}>
      <Button onClick={() => props.selectStream(index)}>{stream.name}</Button>
    </div>)}
  </>;
}
