import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LeaderBoard from "./LeaderBoard";
import Footer from "./Footer"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <LeaderBoard />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
