import React from "react";
import { render } from "react-dom";
import App from "./components/App";

import listenBroadcasts from "./statesman/listener";
listenBroadcasts(); // Start listening and responding to state changes

render(<App />, document.getElementById("root"));
