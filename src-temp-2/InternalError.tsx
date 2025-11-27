import type {ExerciseComponentProps} from "../src/framework/types.tsx";
import type {ReactNode} from "react";
import {ReadStep} from "../src/framework/exercise-components/ReadStep.tsx";
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
  return <ReadStep content={content} disabled={props.disabled} onFinish={props.onFinish} />;
}

export function showInternalError(props: ExerciseComponentProps, details: ReactNode): ReactNode {
  return <InternalError details={details} disabled={props.disabled} onFinish={props.onFinish} />;
}
