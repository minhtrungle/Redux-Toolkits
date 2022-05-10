// todo: Buổi 13 redux
import React from "react";
import "./index.css";
import reportWebVitals from "./reportwebvitals";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "store/store";

const container=document.getElementById("root");
const root=createRoot (container);
root.render(
  <Provider store = {store}>
    <App />                      
  </Provider>
);
reportwebVitals ();