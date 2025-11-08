import {ExerciseNode, ExerciseInstance} from "../../../content/types";
import CancelIcon from '@mui/icons-material/Cancel';
import {IconButton} from "@mui/material";
import {useNavigateToContentNode} from "../../../components/navigation/ContentNodeLink/useNavigateToContentNode";
import {useState} from "react";
import {PageWithHeader} from "../../../components/layout/PageWithHeader";
import {FlashExerciseBackgroundProvider} from "../../../components/effects/useFlashExerciseBackground";

export interface UnitInstancePageProps {
    path: string[];
    exerciseNode: ExerciseNode;
    exerciseInstance: ExerciseInstance;
    switchToNewInstance: () => void;
}

export function ExerciseInstancePage(props: UnitInstancePageProps) {
    const navigateToContentNode = useNavigateToContentNode();
    const [progressCounter, setProgressCounter] = useState(0);
    const [mistakeCounter, setMistakeCounter] = useState(0);
    const [finished, setFinished] = useState(false);

    function onClickCancel() {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("wirklich abbrechen?")) {
            const parentPath = [...props.path];
            parentPath.pop();
            navigateToContentNode(parentPath);
        }
    }

    function onProgress() {
        setProgressCounter(progressCounter + 1);
    }

    function onMistake() {
        setMistakeCounter(mistakeCounter + 1);
    }

    function onFinish() {
        setFinished(true);
    }

    function onRepeat() {
        props.switchToNewInstance();
    }

    function onContinue() {
      // TODO there should be no "continue". Either repeat or back to navigation. We don't have a useful order in the
      // exercist list, nor do we know whether "finished" means finished learning this exercise or finished reading
      // a walkthrough.
        if (props.path.length === 0) {
            navigateToContentNode([]);
        } else {
            const parentPath = [...props.path];
            parentPath.pop();
            navigateToContentNode(parentPath);
        }
    }

    const MyUnitInstance = props.exerciseInstance;
    return <>
        <PageWithHeader
            header={
                <h1 style={{margin: 0}}>
                    <IconButton onClick={onClickCancel} sx={{marginRight: "1em"}}>
                        <CancelIcon fontSize={"large"} />
                    </IconButton>
                    {props.exerciseNode.name}
                </h1>
            }
        >
            <FlashExerciseBackgroundProvider>
                <MyUnitInstance
                    onProgress={onProgress}
                    onMistake={onMistake}
                    onFinish={onFinish}
                />
            </FlashExerciseBackgroundProvider>
        </PageWithHeader>
    </>;
}
