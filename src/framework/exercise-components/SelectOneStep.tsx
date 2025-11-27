import {type ReactNode, useState} from "react";
import {Button} from "@mui/material";
import type {ExerciseComponent, ExerciseComponentProps} from "../types.tsx";
import {showInternalError} from "./InternalError.tsx";
import {createIndexArray} from "../util/createIndexArray.ts";
import {shuffleInPlace} from "../util/random/shuffleInPlace.ts";

// TODO possibly extend ExerciseComponentProps by disabled flag to support usage in ScrollingSequence
export interface SelectOneStepProps extends ExerciseComponentProps {
  readContent: ReactNode;
  choices: ReactNode[];
  correctChoiceIndex: number;
}

export function SelectOneStep(props: SelectOneStepProps) {
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  if (props.correctChoiceIndex < 0 || props.correctChoiceIndex >= props.choices.length) {
    return showInternalError(props, "correctChoiceIndex is out of bounds");
  }
  
  function onClickChoice(index: number) {
    setSelectedChoice(index);
    setTimeout(() => props.onFinish(), 500);
  }
  
  // gets applied only to disabled buttons, i.e. after clicking a choice
  function getGradingColor(index: number) {
    if (index === selectedChoice) {
      if (index === props.correctChoiceIndex) {
        return "#cfc";
      } else {
        return "#fcc";
      }
    } else {
      if (index === props.correctChoiceIndex) {
        return "#ffc";
      } else {
        return "#fff";
      }
    }
  }
  
  return <>
    <div>{props.readContent}</div>
    {props.choices.map((choice, index) => <div>
      <Button
          variant="outlined"
          disabled={props.finished || (selectedChoice !== null)}
          sx={{
            "&.Mui-disabled": {
              background: getGradingColor(index),
              color: "#444"
            },
            background: "#ddf",
            marginTop: "0.5em",
            textTransform: "none",
          }}
          fullWidth={true}
          onClick={() => onClickChoice(index)}
      >
        {choice}
      </Button>
    </div>)}
  </>;
}

export function createSelectOneStep(
  readContent: ReactNode,
  choices: ReactNode[],
  correctChoiceIndex: number,
  shuffle: boolean,
): ExerciseComponent {
  if (shuffle) {
    const originalIndexToShufflesIndex = createIndexArray(choices.length);
    shuffleInPlace(originalIndexToShufflesIndex);
    
    const originalChoices = choices;
    choices = [...choices];
    for (let originalIndex = 0; originalIndex < choices.length; originalIndex++) {
      choices[originalIndexToShufflesIndex[originalIndex]] = originalChoices[originalIndex];
    }
    
    correctChoiceIndex = originalIndexToShufflesIndex[correctChoiceIndex] ?? -1;
  }
  return props => <SelectOneStep
      readContent={readContent}
      choices={choices}
      correctChoiceIndex={correctChoiceIndex}
      finished={props.finished}
      hintLevel={props.hintLevel}
      onFinish={props.onFinish}
  />;
}
