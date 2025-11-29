import {type ExerciseComponentProps, type ExerciseInstance, type HintLevel} from "../../../types.tsx";
import CancelIcon from '@mui/icons-material/Cancel';
import {Button, IconButton} from "@mui/material";
import {useState} from "react";
import {PageWithHeader} from "../../../technical-components/layout/PageWithHeader";
import {HintLevelSelection} from "./HintLevelSelection.tsx";
import {type ExerciseFeedback, exerciseFeedbackContext} from "../../../exercise-components/useExerciseFeedback.tsx";
import {sounds} from "../../../sounds.ts";

export interface UnitInstancePageProps {
  exerciseName: string;
  exerciseInstance: ExerciseInstance;
  onFinishExerciseInstance: () => void;
  leaveExercise: () => void;
}

export function ExerciseInstancePage(props: UnitInstancePageProps) {
  const ExerciseComponent = props.exerciseInstance.component;
    
  const [selectedHintLevel, setselectedHintLevel] = useState<HintLevel>(0);
  const [hintLevelSelectionOpen, sethintLevelSelectionOpen] = useState(false);
  const [feedbackState, setFeedbackState] = useState<boolean | null>(null);
  
  function onClickCancel() {
      // eslint-disable-next-line no-restricted-globals
      if (confirm("wirklich abbrechen?")) {
        props.leaveExercise();
      }
  }
  
  const exerciseFeedback: ExerciseFeedback = {
    show(correct: boolean, callback?: () => void) {
      (correct ? sounds.correct : sounds.wrong).play();
      setFeedbackState(correct);
      setTimeout(() => {
        setFeedbackState(null);
        if (callback) {
          callback();
        }
      }, 500);
    },
    finish(props: ExerciseComponentProps, correct: boolean, onWrong?: () => void) {
      if (feedbackState === null && !props.finished) {
        this.show(correct, () => {
          if (correct) {
            props.onFinish();
          } else if (onWrong) {
            onWrong();
          }
        });
      }
    },
    disabled: feedbackState !== null,
  };
  
  return <>
      <PageWithHeader
          header={<>
            {props.exerciseInstance.maxHintLevel > 0 && <div style={{float: "right", marginTop: "0.25em", marginRight: "0.25em"}}>
              <Button variant={"contained"} color={"warning"} onClick={() => sethintLevelSelectionOpen(true)}>Hint</Button>
            </div>}
            <h1 style={{margin: 0}}>
                <IconButton onClick={onClickCancel} sx={{marginRight: "1em"}}>
                    <CancelIcon fontSize={"large"} />
                </IconButton>
                {props.exerciseName}
            </h1>
          </>}
      >
        <div style={{ display: hintLevelSelectionOpen ? "block" : "none" }}>
          <HintLevelSelection
              maxHintLevel={props.exerciseInstance.maxHintLevel}
              selectedHintLevel={selectedHintLevel}
              selectHintLevel={(index: HintLevel) => { setselectedHintLevel(index); sethintLevelSelectionOpen(false); }}
              close={() => sethintLevelSelectionOpen(false)}
          />
        </div>
        <div style={{
          display: hintLevelSelectionOpen ? "none" : "block",
          backgroundColor: feedbackState === null ? "white" : feedbackState ? "#0f0" : "#f00",
        }}>
          <exerciseFeedbackContext.Provider value={exerciseFeedback}>
            <ExerciseComponent hintLevel={selectedHintLevel} finished={false} onFinish={props.onFinishExerciseInstance} />
          </exerciseFeedbackContext.Provider>
        </div>
      </PageWithHeader>
  </>;
}
