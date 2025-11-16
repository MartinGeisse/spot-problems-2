import styles from "./AppFrame.module.css";
import {type ReactElement, type ReactNode} from "react";

export interface AppFrameProps {
    children: ReactNode;
}

export function AppFrame({children}: AppFrameProps): ReactElement {
    return <div className={styles.AppFrame}>
        {children}
    </div>;
}
