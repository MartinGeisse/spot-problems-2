import {type ReactNode, useState} from "react";
import {Button} from "@mui/material";
import type {ExerciseComponent, ExerciseComponentProps} from "../types.tsx";
import {showInternalError} from "./InternalError.tsx";
import {createIndexArray} from "../util/createIndexArray.ts";
import {shuffleInPlace} from "../util/random/shuffleInPlace.ts";

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
    props.onFinish();
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
          disabled={props.disabled}
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
    
    correctChoiceIndex = originalIndexToShufflesIndex[correctChoiceIndex];
  }
  return props => <SelectOneStep
      readContent={readContent}
      choices={choices}
      correctChoiceIndex={correctChoiceIndex}
      disabled={props.disabled}
      onFinish={props.onFinish}
  />;
}
