import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers/index";

import App from "components/App";

const initalState = {};

ReactDOM.render(
  <Provider store={createStore(reducers, initalState)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
