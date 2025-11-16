import {BrowserRouter} from "react-router-dom";
import {AppFrame} from "./AppFrame";
import {AppRoutes} from "./AppRoutes";

export function App() {
    return <BrowserRouter basename="/spot-problems-2">
        <AppFrame>
            <AppRoutes/>
        </AppFrame>
    </BrowserRouter>;
}
