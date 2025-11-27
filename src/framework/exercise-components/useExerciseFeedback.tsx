import {createContext, useContext} from "react";

export interface ExerciseFeedback {
  show(correct: boolean, callback?: () => void): void;
  disabled: boolean;
}

export const exerciseFeedbackContext = createContext<ExerciseFeedback>({
  show() {
    alert("no context");
  },
  disabled: false,
});

export function useExerciseFeedback() {
  return useContext(exerciseFeedbackContext);
}
