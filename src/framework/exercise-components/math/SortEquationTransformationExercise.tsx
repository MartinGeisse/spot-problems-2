import {mathDiv} from "../../technical-components/Math/Math.tsx";
import {SortExercise} from "./SortExercise.tsx";
import styles from "./SortEquationTransformationExercise.module.css";
import type {ExerciseComponent, ExerciseComponentProps} from "../../types.tsx";
import type {ReactNode} from "react";

export interface SortEquationTransformationExerciseParameters {
  description: ReactNode;
  equations: string[];
  equationSize?: number | undefined | null;
}

export interface SortEquationTransformationExerciseProps extends ExerciseComponentProps, SortEquationTransformationExerciseParameters {
}

export function SortEquationTransformationExercise(props: SortEquationTransformationExerciseProps) {
    return <div className={styles.sortEquationTransformationExercise} style={props.equationSize ? {fontSize: props.equationSize + "em"} : {}}>
        <SortExercise
            description={props.description}
            items={props.equations.map(mathDiv)}
            hintLevel={props.hintLevel}
            onFinish={props.onFinish}
            finished={props.finished}
        />
    </div>;
}

export function createSortEquationTransformationExercise(
    parameters: SortEquationTransformationExerciseParameters
): ExerciseComponent {
  return props => <SortEquationTransformationExercise {...props} {...parameters} />;
}
