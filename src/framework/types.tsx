import {type ReactElement} from "react";
import {type NonEmptyArray} from "./util/NonEmptyArray.ts";

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

export function createStream(name: string, component: StreamComponent): Stream {
  return { name, component };
}
