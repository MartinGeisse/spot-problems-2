import {type ContentNode, type FolderNode} from "./types.tsx";
import {contentTree} from "../content/contentTree.tsx";

export function getContentNodeChildById(node: ContentNode, id: string): ContentNode | null {
    if (node.type === "folder") {
        let child = (node as FolderNode).children.find(child => child.id === id);
        if (child) {
            return child;
        }
    }
    return null;
}

export function getContentNodeByPath(path: string[]): ContentNode | null {
    let currentNode = contentTree;
    for (const segment of path) {
        const child = getContentNodeChildById(currentNode, segment);
        if (!child) {
            return null;
        }
        currentNode = child;
    }
    return currentNode;
}

export function buildUrlPathForContentPath(path: string[]): string {
    return "/" + path.join("/");
}


