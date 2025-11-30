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

export type Exercise = () => ExerciseInstance;

export interface ExerciseNode extends ContentNodeBase {
  exercise: Exercise;
  repeat: boolean;
}

export type ContentNode = FolderNode | ExerciseNode;

// --------------------------------------------------------------------------------------------------------------------
// exercise instances
// --------------------------------------------------------------------------------------------------------------------

export type HintLevel = 0 | 1 | 2;

export interface ExerciseComponentProps {
  hintLevel: HintLevel;
  onFinish: () => void;
  finished: boolean;
}

export type ExerciseComponent = (props: ExerciseComponentProps) => ReactElement;

export interface ExerciseInstance {
  component: ExerciseComponent;
  maxHintLevel: HintLevel;
}

// --------------------------------------------------------------------------------------------------------------------
// content tree helper functions
// --------------------------------------------------------------------------------------------------------------------

export function checkForDuplicateChildIds(folderNode: FolderNode) {
  const ids = new Set<string>();
  for (const child of folderNode.children) {
    if (ids.has(child.id)) {
      const message = `Duplicate child id '${child.id}' in folder '${folderNode.id}'`;
      alert(message);
      throw new Error(message);
    }
    ids.add(child.id);
  }
}

// --------------------------------------------------------------------------------------------------------------------
// hint level-aware content
// --------------------------------------------------------------------------------------------------------------------

export type HintLevelApplicable = ReactNode | ((detailLevel: HintLevel) => ReactNode);

export function applyHintLevel(hintLevel: HintLevel, applicable: HintLevelApplicable): ReactNode {
  return typeof applicable === "function" ? applicable(hintLevel) : applicable;
}
