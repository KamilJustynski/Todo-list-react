import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./globalStyle";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
