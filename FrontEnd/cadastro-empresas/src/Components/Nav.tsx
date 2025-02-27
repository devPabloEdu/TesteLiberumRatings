import React from "react";
import "../Styles/Nav.css"
import { Link } from "react-router-dom";


function Nav() {
    return <div>
    <nav>
        <Link to="/"><img src="https://www.liberumratings.com.br/wp-content/themes/liberum_site/assets/images/logo-liberum-ratings-white.svg" alt="LogoLiberum" /></Link>
        <a href="#" className="CriarEmpresa">CRIAR EMPRESA +</a>
    </nav>
    </div>
}

export default Nav;