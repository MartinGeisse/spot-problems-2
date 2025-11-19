import {Link} from "react-router-dom";
import {buildUrlPathForContentPath} from "../../../paths.tsx";

export interface ContentNodeLinkProps {
    label: string;
    path: string[];
}

export function ContentNodeLink(props: ContentNodeLinkProps) {
    return <Link to={buildUrlPathForContentPath(props.path)}>{props.label}</Link>
}
