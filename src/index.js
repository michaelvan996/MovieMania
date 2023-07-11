import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

// const el = document.getElementById("root");

// ReactDOM.render(<App />, el);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
