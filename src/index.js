import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import { createStore } from "./app/store/createStore";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = createStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
