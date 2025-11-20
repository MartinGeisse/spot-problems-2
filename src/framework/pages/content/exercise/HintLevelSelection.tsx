import {type HintLevel} from "../../../types.tsx";
import {type ReactElement} from "react";
import {Button} from "@mui/material";

// TODO we need a concept how hints and hint selection should interact with the browser back button
// current "solution" is "don't use the back button"

export interface StreamSelectionProps {
  maxHintLevel: HintLevel;
  selectedHintLevel: HintLevel;
  selectHintLevel: (hintLevel: HintLevel) => void;
  close: () => void;
}

const texts = ["No Hints", "Show Hints", "Show Extra Hints"];

export function HintLevelSelection(props: StreamSelectionProps): ReactElement {
  return <>
    {texts.map((text, index) => <div>
      <Button disabled={index > props.maxHintLevel} onClick={() => props.selectHintLevel(index as HintLevel)}>
        <div style={{ display: "inlineBlock", width: "2em" }}>
          {props.selectedHintLevel === index && "👉"}
        </div>
        {text}
      </Button>
    </div>)}
  </>;
}
