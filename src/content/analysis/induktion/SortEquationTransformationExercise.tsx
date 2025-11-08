import {StepInstanceProps} from "../../../framework/exercise/step/createSteppedUnit";
import {mathDiv} from "../../../framework/components/Math/Math";
import {SortExercise} from "./SortExercise";
import {ReactNode} from "react";
import styles from "./SortEquationTransformationExercise.module.css";

export interface SortEquationTransformationExerciseProps extends StepInstanceProps {
    description: ReactNode;
    equations: string[];
}

export function SortEquationTransformationExercise(props: SortEquationTransformationExerciseProps) {
    return <div className={styles.sortEquationTransformationExercise}>
        <SortExercise {...props} items={props.equations.map(mathDiv)} />
    </div>;
}
