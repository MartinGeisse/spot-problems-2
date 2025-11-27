import {type ReactElement, useState} from "react";
import type {ExerciseComponent, ExerciseComponentProps} from "../types.tsx";
import type {NonEmptyArray} from "../util/NonEmptyArray.ts";

export interface ReplacingSequenceProps extends ExerciseComponentProps {
  steps: NonEmptyArray<ExerciseComponent>;
}

/**
 * This component shows a sequence of components, one after the other. Each time a new component gets shown, the
 * previous component gets replaced. Each component can therefore use the full below-header area, and can use
 * CSS to fill that area. Finishing the last step immediately finishes the sequence.
 */
export function ReplacingSequence(props: ReplacingSequenceProps): ReactElement {
  const [finishedSteps, setFinishedSteps] = useState(0);
  return <>
    {props.steps.map((StepComponent, index) => {
      const nextIndex = index + 1;
      function onFinishStep(): void {
        setFinishedSteps(nextIndex);
        if (nextIndex === props.steps.length) {
          props.onFinish();
        } 
      }
      return <div key={index} style={{ display: index === finishedSteps ? "block" : "none"}}>
        <StepComponent
            hintLevel={props.hintLevel}
            onFinish={onFinishStep}
            finished={props.finished || index < finishedSteps}
        />
      </div>;
    })}
  </>;
}

export function createReplacingSequence(steps: NonEmptyArray<ExerciseComponent>): ExerciseComponent {
  return (props: ExerciseComponentProps) => {
    return <ReplacingSequence
        hintLevel={props.hintLevel}
        onFinish={props.onFinish}
        finished={props.finished}
        steps={steps}
    />;
  };
}
