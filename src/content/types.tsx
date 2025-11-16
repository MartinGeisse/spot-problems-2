import {type ReactElement, type ReactNode} from "react";
import {type NonEmptyArray} from "../framework/util/NonEmptyArray";
import {createSequence} from "../framework/exercise-components/Sequence";
import {Button} from "@mui/material";

// --------------------------------------------------------------------------------------------------------------------
// content nodes
// --------------------------------------------------------------------------------------------------------------------

export type ContentNodeType = "folder" | "exercise";

export interface ContentNodeBase {
    id: string;
    name: string;
    type: ContentNodeType;
}

export interface FolderNode extends ContentNodeBase {
    children: ContentNode[];
}

export interface ExerciseNode extends ContentNodeBase {
    instantiate(): ExerciseInstance;
}

export type ContentNode = FolderNode | ExerciseNode;

// --------------------------------------------------------------------------------------------------------------------
// exercise instances
// --------------------------------------------------------------------------------------------------------------------

export interface StreamComponentProps {
  disabled: boolean;
  onFinish: () => void;
}

export type StreamComponent = (props: StreamComponentProps) => ReactElement;

export interface Stream {
  name: string;
  component: StreamComponent;
}

export interface ExerciseInstance {
  streams: NonEmptyArray<Stream>;
}

// --------------------------------------------------------------------------------------------------------------------
// helper functions
// --------------------------------------------------------------------------------------------------------------------

export function createStream(name: string, ...steps: NonEmptyArray<StreamComponent>): Stream {
  return {
    name,
    component: steps.length === 1 ? steps[0] : createSequence(steps),
  };
}

export function createReadStep(content: ReactNode): StreamComponent {
  return props => <>
    <div>{content}</div>
    <div><Button disabled={props.disabled} onClick={props.onFinish}>Weiter</Button></div>
  </>;
}
