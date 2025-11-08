import {ContentNode} from "./types";
import {createDummyStream} from "../framework/exercise-components/dummy";

export const contentTree: ContentNode = {
    id: "root",
    name: "Inhalte",
    type: "folder",
    children: [
      {
        id: "one",
        name: "One",
        type: "folder",
        children: [
          {
            id: "one-one",
            name: "One-One",
            type: "exercise",
            instantiate() {
              return {
                streams: [createDummyStream()],
              };
            }
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
