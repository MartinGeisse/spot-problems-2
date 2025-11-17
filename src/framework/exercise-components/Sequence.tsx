import {type ReactElement, type ReactNode, useState} from "react";
import {type StreamComponent, type StreamComponentProps} from "../../content/types";
import {type NonEmptyArray} from "../util/NonEmptyArray";

export interface SequenceProps extends StreamComponentProps {
  steps: NonEmptyArray<StreamComponent>;
  finalStep?: ReactNode | undefined | null;
}

export function Sequence(props: SequenceProps): ReactElement {
  const [finishedSteps, setFinishedSteps] = useState(0);
  return <>
    {props.steps.map((StepComponent, index) => {
      const nextIndex = index + 1;
      return <div key={index} style={{ display: index <= finishedSteps ? "block" : "none"}}>
        <StepComponent
            disabled={props.disabled || index < finishedSteps}
            onFinish={() => nextIndex === props.steps.length ? props.onFinish() : setFinishedSteps(nextIndex)}
        />
      </div>;
    })}
    <div style={{ display: finishedSteps === props.steps.length ? "block" : "none"}}>
      {props.finalStep}
    </div>
  </>;
}

export function createSequence(steps: NonEmptyArray<StreamComponent>, finalStep?: ReactNode | undefined | null): StreamComponent {
  return (props: StreamComponentProps) => {
    return <Sequence disabled={props.disabled} onFinish={props.onFinish} steps={steps} finalStep={finalStep} />;
  };
}
