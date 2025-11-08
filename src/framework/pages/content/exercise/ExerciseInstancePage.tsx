import {ExerciseInstance} from "../../../../content/types";
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
            header={
                <h1 style={{margin: 0}}>
                    <IconButton onClick={onClickCancel} sx={{marginRight: "1em"}}>
                        <CancelIcon fontSize={"large"} />
                    </IconButton>
                    {props.exerciseName}
                </h1>
            }
        >
          <div style={{ visibility: streamSelectionOpen ? "hidden" : "visible" }}>
            {selectedStreamIndex === 0 && <>Wenn du nicht weiterkommst, klicke hier: &nbsp;&nbsp;</>}
            {selectedStreamIndex !== 0 && <>Tipps auswählen: &nbsp;&nbsp;</>}
            <Button variant={"contained"} color={"warning"} onClick={() => setStreamSelectionOpen(true)}>Hilfe</Button>
          </div>
          <div style={{ visibility: streamSelectionOpen ? "visible" : "hidden" }}>
            <StreamSelection
                exerciseInstance={props.exerciseInstance}
                selectedStreamIndex={selectedStreamIndex}
                selectStream={(index: number) => { setSelectedStreamIndex(index); setStreamSelectionOpen(false); }}
                close={() => setStreamSelectionOpen(false)}
            />
          </div>
          {props.exerciseInstance.streams.map((stream, index) =>
            <div style={{ visibility: (selectedStreamIndex === index && !streamSelectionOpen) ? "visible" : "hidden" }}>
              <StreamWrapper stream={stream} switchToNewInstance={props.switchToNewInstance} leaveExercise={props.leaveExercise} />
            </div>
          )}
        </PageWithHeader>
    </>;
}
