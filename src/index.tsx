import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers/index";
import { configureStore } from "@reduxjs/toolkit";
import { HashRouter } from "react-router-dom";
import { socketMiddleware } from '../src/middleware/socketMiddleware';
import {
   WS_CONNECTION_START,
   WS_CONNECTION_SUCCESS,
   WS_CONNECTION_CLOSED,
   WS_CONNECTION_ERROR,
   WS_GET_MESSAGE
} from "../src/utils/types";
import {
   WS_USER_CONNECTION_START,
   WS_USER_CONNECTION_SUCCESS,
   WS_USER_CONNECTION_CLOSED,
   WS_USER_CONNECTION_ERROR,
   WS_USER_GET_MESSAGE
} from "../src/utils/types";


const wsOrdersActions = {
   wsInit: WS_CONNECTION_START,
   onOpen: WS_CONNECTION_SUCCESS,
   onClose: WS_CONNECTION_CLOSED,
   onError: WS_CONNECTION_ERROR,
   onMessage: WS_GET_MESSAGE
};
const wsUserOrdersActions = {
   wsInit: WS_USER_CONNECTION_START,
   onOpen: WS_USER_CONNECTION_SUCCESS,
   onClose: WS_USER_CONNECTION_CLOSED,
   onError: WS_USER_CONNECTION_ERROR,
   onMessage: WS_USER_GET_MESSAGE,
};

export const allUrl = 'wss:/norma.nomoreparties.space/orders/all';
export const userUrl = 'wss://norma.nomoreparties.space/orders';
const urlordersMiddleware = socketMiddleware(userUrl, wsUserOrdersActions);
const ordersMiddleware = socketMiddleware(allUrl, wsOrdersActions);

const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(ordersMiddleware, urlordersMiddleware)
});
const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
   <Provider store={store}>
      <HashRouter>
         <App />
      </HashRouter>
   </Provider>
);