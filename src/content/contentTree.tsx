import {type ContentNode} from "./types";
import {inductionSubtree} from "./math/induction/inductionSubtree.tsx";

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
          inductionSubtree,
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
