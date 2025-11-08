import {ContentNode} from "./types";
import {anaysisSubtree} from "./analysis/analysisSubtree";

export const contentTree: ContentNode = {
    id: "root",
    name: "Inhalte",
    type: "folder",
    children: [
        anaysisSubtree,
    ],
};
