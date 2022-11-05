import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import "./main.css";
import "./main.scss";


// var mountNode = document.getElementById("app");
ReactDOM.render( 
<BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app"), 
//   mountNode
  );