import {type ExerciseInstance, type HintLevel} from "../../../types.tsx";
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
  switchToNewInstance: () => void;
  leaveExercise: () => void;
}

export function ExerciseInstancePage(props: UnitInstancePageProps) {
  const ExerciseComponent = props.exerciseInstance.component;
    
  const [selectedHintLevel, setselectedHintLevel] = useState<HintLevel>(0);
  const [hintLevelSelectionOpen, sethintLevelSelectionOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("white");
  
  function onClickCancel() {
      // eslint-disable-next-line no-restricted-globals
      if (confirm("wirklich abbrechen?")) {
        props.leaveExercise();
      }
  }
  
  const exerciseFeedback: ExerciseFeedback = {
    flashBackground(correct: boolean, callback?: () => void) {
      setBackgroundColor(correct ? "#0f0" : "#f00");
      setTimeout(() => {
        setBackgroundColor("white");
        if (callback) {
          callback();
        }
      }, 500);
    },
    playSound(correct: boolean) {
      (correct ? sounds.correct : sounds.wrong).play();
    },
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
          backgroundColor,
        }}>
          <exerciseFeedbackContext.Provider value={exerciseFeedback}>
            <ExerciseComponent hintLevel={selectedHintLevel} onFinish={props.switchToNewInstance} />
          </exerciseFeedbackContext.Provider>
        </div>
      </PageWithHeader>
  </>;
}
