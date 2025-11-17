import {type ReactElement, useState} from "react";
import {type Stream} from "../../../../content/types";
import {Button} from "@mui/material";

export interface StreamWrapperProps {
  stream: Stream;
  switchToNewInstance: () => void;
  leaveExercise: () => void;
}

export function StreamWrapper(props: StreamWrapperProps): ReactElement {
  const [finished, setFinished] = useState(false);
  const StreamComponent = props.stream.component;
  if (typeof StreamComponent !== "function") {
    console.error("invalid stream component", props.stream);
    throw new Error("invalid stream component (see console error for details)");
  }

  return <>
    <StreamComponent disabled={finished} onFinish={() => setFinished(true)} />
    {finished && <>
      <br /><br />
      <div>
        &nbsp;
        <Button variant={"contained"} onClick={props.switchToNewInstance}>Neue Aufgabe</Button>
        &nbsp;
        <Button variant={"outlined"} onClick={props.leaveExercise}>Zurück</Button>
      </div>
    </>}
  </>;
}
