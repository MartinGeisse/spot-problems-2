import {type ContentNode, type ExerciseNode, type FolderNode} from "../../types.tsx";
import {FolderPage} from "./folder/FolderPage";
import {ExercisePage} from "./exercise/ExercisePage";

export interface ContentNodePageProps {
    node: ContentNode;
    path: string[];
}

export function ContentNodePage(props: ContentNodePageProps) {
    switch (props.node.type) {
        case "folder":
            return <FolderPage folder={props.node as FolderNode} path={props.path} />;
        case "exercise":
            return <ExercisePage exerciseNode={props.node as ExerciseNode} path={props.path} />;
    }
}
