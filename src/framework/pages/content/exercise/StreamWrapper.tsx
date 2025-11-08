import {ReactElement, useState} from "react";
import {Stream} from "../../../../content/types";

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
      <button onClick={props.switchToNewInstance}>Neue Aufgabe</button>
      <button onClick={props.leaveExercise}>Zurück</button>
    </>}
  </>;
}
