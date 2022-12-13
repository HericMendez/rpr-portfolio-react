import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/rpgui/rpgui.css";
import App from "./App";

import { ThemeChanger } from "Theme";
import "./Theme/variables.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeChanger>
      <App />
    </ThemeChanger>
  </React.StrictMode>
);
