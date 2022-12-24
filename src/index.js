import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from "./App.jsx";
import "./main.css";
import "./main.scss";


ReactDOM.render( 
<BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app"), 

  );