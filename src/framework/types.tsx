import {type ReactElement, type ReactNode} from "react";

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

export type HintLevel = 0 | 1 | 2;

export interface ExerciseComponentProps {
  hintLevel: HintLevel;
  onFinish: () => void;
}

export type ExerciseComponent = (props: ExerciseComponentProps) => ReactElement;

export interface ExerciseInstance {
  component: ExerciseComponent;
  maxHintLevel: HintLevel;
}

// --------------------------------------------------------------------------------------------------------------------
// hint level-aware content
// --------------------------------------------------------------------------------------------------------------------

export type HintLevelApplicable = ReactNode | ((detailLevel: HintLevel) => ReactNode);

export function applyHintLevel(hintLevel: HintLevel, applicable: HintLevelApplicable): ReactNode {
  return typeof applicable === "function" ? applicable(hintLevel) : applicable;
}
