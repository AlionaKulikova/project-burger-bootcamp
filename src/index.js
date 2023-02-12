import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers/index.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({reducer: rootReducer,});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);