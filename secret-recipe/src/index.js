import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  // Wrap the <App /> in a provider
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);
