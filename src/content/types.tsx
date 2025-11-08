import {ReactElement} from "react";

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

export interface ExerciseInstanceProps {
    onProgress: () => void;
    onMistake: () => void;
    onFinish: () => void;
}

export type ExerciseInstance = (props: ExerciseInstanceProps) => ReactElement;
