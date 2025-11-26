import {createContext, useContext} from "react";

export interface ExerciseFeedback {
  flashBackground(correct: boolean, callback?: () => void): void;
  playSound(correct: boolean): void;
}

export const exerciseFeedbackContext = createContext<ExerciseFeedback>({
  flashBackground() {
    alert("no context");
  },
  playSound(_correct: boolean) {
    alert("no context");
  }
});

export function useExerciseFeedback() {
  return useContext(exerciseFeedbackContext);
}
