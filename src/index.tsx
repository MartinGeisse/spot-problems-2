import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./framework/technical-components/App/App";
import "katex/dist/katex.min.css";
import {initializeDeveloperControls} from "./framework/technical-components/App/developer";
import "./framework/technical-components/App/global.css"

initializeDeveloperControls();

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(<App/>);
