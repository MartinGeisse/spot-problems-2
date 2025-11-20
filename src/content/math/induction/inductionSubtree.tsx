import type {ContentNode} from "../../../framework/types.tsx";
import {sumSubtree} from "./sum.tsx";
import {divisibilitySubtree} from "./divisibility.tsx";

export const inductionSubtree: ContentNode = {
  id: "induction",
  name: "Induction",
  type: "folder",
  children: [
    // basicInductionSubtree,
    divisibilitySubtree,
    sumSubtree,
  ],
};
