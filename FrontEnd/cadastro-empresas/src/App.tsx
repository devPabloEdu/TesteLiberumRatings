import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Nav from './Components/Nav';
import EmpresaDetails from './Components/EmpresaDetails';
import EmpresaForm from "./Components/EmpresaForm";
import Footer from './Components/Footer';


function App() {
  return ( <div>
    <Router>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/empresa/:Id" element={<EmpresaDetails />} />
        <Route path='/CriarEmpresa' Component={EmpresaForm}/>
      </Routes>
      <footer>
        <Footer />
      </footer>
    </Router>
  </div>
  );
}

export default App;
