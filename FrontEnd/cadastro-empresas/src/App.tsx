import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Nav from './Components/Nav';
import EmpresaDetails from './Components/EmpresaDetails';


function App() {
  return ( <div>
    <Router>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/empresa/:Id" Component={EmpresaDetails}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
