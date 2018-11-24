import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers/index";

const initalState = {};

// props children - wraps any child components
// with the parent component
// in this case - parent - Providor
// child can be App component for example

export default props => {
  return (
    <Provider store={createStore(reducers, initalState)}>
      {props.children}
    </Provider>
  );
};
