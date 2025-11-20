import type {ReactNode} from "react";
import {Button} from "@mui/material";
import type {ExerciseComponent, ExerciseComponentProps} from "../src/framework/types.tsx";

export interface ReadStepProps extends ExerciseComponentProps {
  content: ReactNode
}

export function ReadStep(props: ReadStepProps) {
  return <>
    <div>{props.content}</div>
    <div><Button disabled={props.disabled} onClick={props.onFinish}>Weiter</Button></div>
  </>;
}

export function createReadStep(content: ReactNode): ExerciseComponent {
  return props => <ReadStep content={content} disabled={props.disabled} onFinish={props.onFinish} />;
}
