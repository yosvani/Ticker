import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.getState = store.getState; //for testing
  window.dispatch = store.dispatch; //for testing

  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to Robinhood</h1>, root);
  sdfjsda;fsdf
});