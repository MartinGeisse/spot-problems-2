import type {ExerciseComponentProps} from "../types.tsx";
import type {ReactNode} from "react";
import {ReadStep} from "./ReadStep.tsx";
import {Alert} from "@mui/material";

export interface InternalErrorProps extends ExerciseComponentProps {
  details: ReactNode;
}

export function InternalError(props: InternalErrorProps) {
  const content = <Alert severity="error">
    <div>An internal error occurred. This part of the exercise cannot be displayed.</div>
    <div>Details:</div>
    <div>{props.details}</div>
  </Alert>;
  return <ReadStep content={content} hintLevel={props.hintLevel} finished={props.finished} onFinish={props.onFinish} />;
}

export function showInternalError(props: ExerciseComponentProps, details: ReactNode): ReactNode {
  return <InternalError details={details} hintLevel={props.hintLevel} finished={props.finished} onFinish={props.onFinish} />;
}
