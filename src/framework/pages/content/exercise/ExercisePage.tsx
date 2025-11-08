import {ExerciseNode} from "../../../../content/types";
import {useState} from "react";
import {ExerciseInstancePage} from "./ExerciseInstancePage";
import {useNavigateToContentNode} from "../../../technical-components/navigation/ContentNodeLink/useNavigateToContentNode";

export interface ExercisePageProps {
    exerciseNode: ExerciseNode;
    path: string[];
}

export function ExercisePage(props: ExercisePageProps) {
    const navigateToContentNode = useNavigateToContentNode();
    
    const [instanceCounter, setInstanceCounter] = useState(0);
    const [unitInstance, setUnitInstance] = useState(() => props.exerciseNode.instantiate());
    
    function switchToNewInstance() {
        setInstanceCounter(instanceCounter + 1);
        setUnitInstance(() => props.exerciseNode.instantiate());
    }
    
    function leaveExercise() {
      const parentPath = [...props.path];
      parentPath.pop();
      navigateToContentNode(parentPath);
    }
    
    return <ExerciseInstancePage
        key={instanceCounter}
        exerciseName={props.exerciseNode.name}
        exerciseInstance={unitInstance}
        switchToNewInstance={switchToNewInstance}
        leaveExercise={leaveExercise}
    />;
}
