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

export interface Folder extends ContentNodeBase {
    children: ContentNode[];
}

export interface Unit extends ContentNodeBase {
    instantiate(): UnitInstance;
}

export type ContentNode = Folder | Unit;

// --------------------------------------------------------------------------------------------------------------------
// exercise instances
// --------------------------------------------------------------------------------------------------------------------

export interface UnitInstanceProps {
    onProgress: () => void;
    onMistake: () => void;
    onFinish: () => void;
}

export type UnitInstance = (props: UnitInstanceProps) => ReactElement;
