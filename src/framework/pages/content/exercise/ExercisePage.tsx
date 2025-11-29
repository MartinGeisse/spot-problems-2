import {type ExerciseNode} from "../../../types.tsx";
import {useState} from "react";
import {ExerciseInstancePage} from "./ExerciseInstancePage";
import {
  useNavigateToContentNode
} from "../../../technical-components/navigation/ContentNodeLink/useNavigateToContentNode";

export interface ExercisePageProps {
    exerciseNode: ExerciseNode;
    path: string[];
}

export function ExercisePage(props: ExercisePageProps) {
    const navigateToContentNode = useNavigateToContentNode();
    
    const [instanceCounter, setInstanceCounter] = useState(0);
    const [unitInstance, setUnitInstance] = useState(() => props.exerciseNode.exercise());
    
    function onFinishExerciseInstance() {
      if (props.exerciseNode.repeat) {
        setInstanceCounter(instanceCounter + 1);
        setUnitInstance(() => props.exerciseNode.exercise());
      } else {
        leaveExercise();
      }
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
        onFinishExerciseInstance={onFinishExerciseInstance}
        leaveExercise={leaveExercise}
    />;
}
