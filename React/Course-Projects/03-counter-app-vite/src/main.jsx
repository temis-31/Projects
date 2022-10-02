import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

// import { App } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
// import CounterApp from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirstApp title="Hello, Im goku" />
  </StrictMode>
);
