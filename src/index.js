import "./index.css";
import ReactDOM from "react-dom";
import React from "react";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import App from "./views/App";

if(process.env.NODE_ENV === 'production') disableReactDevTools()



ReactDOM.render(
  <App />,

  document.getElementById("root")
);
