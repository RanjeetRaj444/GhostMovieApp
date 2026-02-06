import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

import { store } from "./store/store";
import { Provider } from "react-redux";

import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HelmetProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </HelmetProvider>
  </Provider>,
);
