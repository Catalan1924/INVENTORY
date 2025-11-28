import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeWrapper from "./theme/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeWrapper>
    <App />
  </ThemeWrapper>
);
