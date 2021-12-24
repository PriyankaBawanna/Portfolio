import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Profile from "./Profile";
import RoutesPath from "./Routes";
ReactDOM.render(
  <React.StrictMode>
    <RoutesPath />
  </React.StrictMode>,
  document.getElementById("root")
);
