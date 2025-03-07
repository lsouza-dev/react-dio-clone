import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalSyles } from "./styles/global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalSyles />
    <App />
  </React.StrictMode>
);
