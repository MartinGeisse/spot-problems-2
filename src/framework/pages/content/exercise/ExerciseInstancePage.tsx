import {type ExerciseInstance} from "../../../types.tsx";
import CancelIcon from '@mui/icons-material/Cancel';
import {Button, IconButton} from "@mui/material";
import {useState} from "react";
import {PageWithHeader} from "../../../technical-components/layout/PageWithHeader";
import {StreamSelection} from "./StreamSelection";
import {StreamWrapper} from "./StreamWrapper";

export interface UnitInstancePageProps {
  exerciseName: string;
    exerciseInstance: ExerciseInstance;
    switchToNewInstance: () => void;
    leaveExercise: () => void;
}

export function ExerciseInstancePage(props: UnitInstancePageProps) {
    
    const [selectedStreamIndex, setSelectedStreamIndex] = useState(0);
    const [streamSelectionOpen, setStreamSelectionOpen] = useState(false);
    
    function onClickCancel() {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("wirklich abbrechen?")) {
          props.leaveExercise();
        }
    }
    
    return <>
        <PageWithHeader
            header={<>
              {props.exerciseInstance.streams.length > 1 && <div style={{float: "right", marginTop: "0.25em", marginRight: "0.25em"}}>
                <Button variant={"contained"} color={"warning"} onClick={() => setStreamSelectionOpen(true)}>Hint</Button>
              </div>}
              <h1 style={{margin: 0}}>
                  <IconButton onClick={onClickCancel} sx={{marginRight: "1em"}}>
                      <CancelIcon fontSize={"large"} />
                  </IconButton>
                  {props.exerciseName}
              </h1>
            </>}
        >
          <div style={{ display: streamSelectionOpen ? "block" : "none" }}>
            <StreamSelection
                exerciseInstance={props.exerciseInstance}
                selectedStreamIndex={selectedStreamIndex}
                selectStream={(index: number) => { setSelectedStreamIndex(index); setStreamSelectionOpen(false); }}
                close={() => setStreamSelectionOpen(false)}
            />
          </div>
          {props.exerciseInstance.streams.map((stream, index) =>
            <div key={index} style={{ marginTop: "0.2em", display: (selectedStreamIndex === index && !streamSelectionOpen) ? "block" : "none" }}>
              <StreamWrapper stream={stream} switchToNewInstance={props.switchToNewInstance} leaveExercise={props.leaveExercise} />
            </div>
          )}
        </PageWithHeader>
    </>;
}
