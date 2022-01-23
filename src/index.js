// Source: https://github.com/udacity/reactnd-redux-todos-goals/blob/1177c07de724399ba9f8b1573c4c9711caa23daa/src/index.js Accessed: 1/22/22
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";

import App from "./components/App";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
