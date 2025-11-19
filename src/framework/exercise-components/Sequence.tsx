import {type ReactElement, type ReactNode, useState} from "react";
import {type StreamComponent, type StreamComponentProps} from "../types.tsx";
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
      const stepDisabled = props.disabled || index < finishedSteps;
      function onFinishStep(): void {
        setFinishedSteps(nextIndex);
        if (nextIndex === props.steps.length) {
          props.onFinish();
        } 
      }
      return <div key={index} style={{ display: index <= finishedSteps ? "block" : "none", marginTop: index === 0 ? "0.2em" : "1em"}}>
        <StepComponent disabled={stepDisabled} onFinish={onFinishStep} />
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
