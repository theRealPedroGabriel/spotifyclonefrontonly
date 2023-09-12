import React, { useEffect ,useState} from "react";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Rodape from "../components/layout/Rodape2";
import Rotas from "../components/layout/Rotas";
import Navbarlogado from "../components/layout/Navbarlogado";



const App = (props) => (
  
  <div className="App">
    <BrowserRouter>
      <Navbarlogado />
      <Rotas />
      <Rodape />
    </BrowserRouter>
  </div>
);
export default App;
