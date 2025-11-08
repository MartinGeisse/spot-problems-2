import {FolderNode} from "../../../content/types";
import {FolderPageBreadcrumbs} from "./FolderPageBreadcrumbs";
import {NavigationList} from "../../../components/navigation/NavigationList/NavigationList";
import {useNavigateToContentNode} from "../../../components/navigation/ContentNodeLink/useNavigateToContentNode";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {WithHeader} from "../../../components/layout/WithHeader";

export interface FolderPageProps {
    folder: FolderNode;
    path: string[];
}

export function FolderPage(props: FolderPageProps) {
    const navigateToContentNode = useNavigateToContentNode();
    const navigationElements = props.folder.children.map(child => {
        return {
            label: child.name,
            decoration: child.type === "folder" ? <ChevronRightIcon /> : <></>,
            onClick: () => navigateToContentNode([...props.path, child.id]),
        };
    });
    return <WithHeader
        header={<div style={{backgroundColor: "#ccc", borderBottom: "1px solid #aaa"}}>
            <FolderPageBreadcrumbs path={props.path} />
            <h1 style={{margin: 0}}>{props.folder.name}</h1>
        </div>}
        overflow={"hidden scroll"}
    >
        <NavigationList elements={navigationElements} />
    </WithHeader>;
}
