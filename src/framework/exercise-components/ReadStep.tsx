import type {ReactNode} from "react";
import {Button} from "@mui/material";
import type {StreamComponent, StreamComponentProps} from "../types.tsx";

export interface ReadStepProps extends StreamComponentProps {
  content: ReactNode
}

export function ReadStep(props: ReadStepProps) {
  return <>
    <div>{props.content}</div>
    <div><Button disabled={props.disabled} onClick={props.onFinish}>Weiter</Button></div>
  </>;
}

export function createReadStep(content: ReactNode): StreamComponent {
  return props => <ReadStep content={content} disabled={props.disabled} onFinish={props.onFinish} />;
}
