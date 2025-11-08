import {ContentNode, createReadStep, createStream} from "./types";

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
                streams: [
                    createStream("Kleinbuchstaben", createReadStep("eins"), createReadStep("zwei"), createReadStep("drei")),
                    createStream("Großbuchstaben", createReadStep("EINS"), createReadStep("ZWEI"), createReadStep("DREI")),
                ],
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
