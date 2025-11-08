import {ExerciseNode} from "../../../content/types";
import {useState} from "react";
import {ExerciseInstancePage} from "./ExerciseInstancePage";

export interface UnitPageProps {
    unit: ExerciseNode;
    path: string[];
}

export function ExercisePage(props: UnitPageProps) {
    const [instanceCounter, setInstanceCounter] = useState(0);
    const [unitInstance, setUnitInstance] = useState(() => props.unit.instantiate());
    
    function switchToNewInstance() {
        setInstanceCounter(instanceCounter + 1);
        setUnitInstance(() => props.unit.instantiate());
    }
    
    return <ExerciseInstancePage
        key={instanceCounter}
        path={props.path}
        exerciseNode={props.unit}
        exerciseInstance={unitInstance}
        switchToNewInstance={switchToNewInstance}
    />;
}
