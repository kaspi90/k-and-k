import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./styles/tokens.css";
import "./styles/site.css";
import "./i18n";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Für Messungen z. B. reportWebVitals(console.log) – https://bit.ly/CRA-vitals
reportWebVitals();
