//Import de react
import React from "react";
//Import de reactdom
import ReactDOM from "react-dom";
//Import de bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//Import de App Ou se trouve tout mais element
import App from "./components/App";
import "./css/ToDo.css";

//place mon App dans ma div Root de mon html (dans public)
ReactDOM.render(<App />, document.getElementById("root"));
