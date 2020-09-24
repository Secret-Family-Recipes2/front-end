import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import recipesReducer from "./reducers/recipesReducer";

const store = createStore(recipesReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  // Wrap the <App /> in a provider
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.querySelector("#root")
);
