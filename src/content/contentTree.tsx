import {ContentNode} from "./types";
import {createInductionExercise} from "./math/induction/createInductionExercise";

export const contentTree: ContentNode = {
    id: "root",
    name: "Topics",
    type: "folder",
    children: [
      {
        id: "math",
        name: "Math",
        type: "folder",
        children: [
          {
            id: "induction",
            name: "Induction",
            type: "exercise",
            instantiate: createInductionExercise,
          }
        ],
      },
      {
        id: "two",
        name: "Two",
        type: "folder",
        children: [
        ],
      },
    ],
};
