import {createContext, useContext} from "react";
import type {ExerciseComponentProps} from "../types.tsx";

export interface ExerciseFeedback {
  show(correct: boolean, callback?: () => void): void;
  finish(props: ExerciseComponentProps, correct: boolean, onWrong?: () => void): void;
  disabled: boolean;
}

export const exerciseFeedbackContext = createContext<ExerciseFeedback>({
  show() {
    alert("no context");
  },
  finish() {
    alert("no context");
  },
  disabled: false,
});

export function useExerciseFeedback() {
  return useContext(exerciseFeedbackContext);
}
