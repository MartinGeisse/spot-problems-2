import {mathDiv} from "../../technical-components/Math/Math.tsx";
import styles from "./EquationTransformationArrowExercise.module.css";
import type {ExerciseComponent, ExerciseComponentProps} from "../../types.tsx";
import {useExerciseFeedback} from "../useExerciseFeedback.tsx";
import type {ReactNode} from "react";

export interface EquationTransformationArrowExerciseProps extends ExerciseComponentProps {
  description: ReactNode;
  equations: string[];
  correctArrowIndex: number;
}

/**
 * No create* functions are provided here as this exercise is often embedded between paragraphs of text, so
 * such a function would be useless.
 */
export function EquationTransformationArrowExercise(props: EquationTransformationArrowExerciseProps) {
  const feedback = useExerciseFeedback();
  
  function onClickArrow(index: number) {
    feedback.finish(props, index === props.correctArrowIndex);
  }
  
  return <>
    <div>{props.description}</div>
    {props.equations.map((equation, index) => {
      return <div className={styles.equation}>
        <div className={styles.arrowContainer} onClick={() => onClickArrow(index)}>
          <span className={styles.arrow}>{"\u21b7"}</span>
        </div>
        {mathDiv(equation)}
      </div>;
    })}
  </>;
}

export function createEquationTransformationArrowExercise(
  description: ReactNode,
  equations: string[],
  correctArrowIndex: number,
): ExerciseComponent {
  return (props) => <EquationTransformationArrowExercise {...props} description={description} equations={equations} correctArrowIndex={correctArrowIndex} />;
}
