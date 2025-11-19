import {createStream, type ExerciseNode, type Stream, type StreamComponentProps} from "../types.tsx";
import {type ReactElement} from "react";
import {Button} from "@mui/material";

export function DummyStreamComponent(props: StreamComponentProps): ReactElement {
  return <>
    Drücke den Button, um die Aufgabe zu lösen: <Button onClick={() => props.onFinish()}>BUTTON</Button>
  </>;
}

export function createDummyStream(name: string = "---"): Stream {
  return createStream(name, DummyStreamComponent);
}

export function createDummyExerciseNode(name: string): ExerciseNode {
  return {
    id: "dummy" + Math.random(),
    name,
    type: "exercise",
    instantiate: () => ({ streams: [createDummyStream()] }),
  };
}
