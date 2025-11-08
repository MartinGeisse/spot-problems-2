import {ReactElement} from "react";
import {NonEmptyArray} from "../framework/util/NonEmptyArray";

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
