import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers/index";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";


export const store = configureStore({ reducer: rootReducer, });
const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>
);