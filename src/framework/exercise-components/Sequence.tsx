import {type ReactElement, useState} from "react";
import {type StreamComponent, type StreamComponentProps} from "../../content/types";
import {type NonEmptyArray} from "../util/NonEmptyArray";

export interface SequenceProps extends StreamComponentProps {
  steps: NonEmptyArray<StreamComponent>;
}

export function Sequence(props: SequenceProps): ReactElement {
  const [finishedSteps, setFinishedSteps] = useState(0);
  return <>
    {props.steps.map((StepComponent, index) => {
      const nextIndex = index + 1;
      return <div style={{ display: index <= finishedSteps ? "block" : "none"}}>
        <StepComponent
            disabled={props.disabled || index < finishedSteps}
            onFinish={() => nextIndex === props.steps.length ? props.onFinish() : setFinishedSteps(nextIndex)}
        />
      </div>;
    })}
  </>;
}

export function createSequence(steps: NonEmptyArray<StreamComponent>): StreamComponent {
  return (props: StreamComponentProps) => {
    return <Sequence disabled={props.disabled} onFinish={props.onFinish} steps={steps} />;
  };
}
