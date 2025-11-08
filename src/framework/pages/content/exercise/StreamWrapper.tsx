import {ReactElement, useState} from "react";
import {Stream} from "../../../../content/types";
import {Button} from "@mui/material";

export interface StreamWrapperProps {
  stream: Stream;
  switchToNewInstance: () => void;
  leaveExercise: () => void;
}

export function StreamWrapper(props: StreamWrapperProps): ReactElement {
  const [finished, setFinished] = useState(false);
  const StreamComponent = props.stream.component;

  return <>
    <StreamComponent onFinish={() => setFinished(true)} />
    {finished && <>
      <p>Super, du hast es geschafft!</p>
      <div>
        &nbsp;
        <Button variant={"contained"} onClick={props.switchToNewInstance}>Neue Aufgabe</Button>
        &nbsp;
        <Button variant={"outlined"} onClick={props.leaveExercise}>Zurück</Button>
      </div>
    </>}
  </>;
}
