import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import idiomas from "../idiomas.json";

import "../css/navbar.css";
import { Link } from "react-router-dom";
import planta from "../img/plnata_barra.png";

import mexico from "../img/mexico_bandera.png";
import estadoUnidos from "../img/estadosUnidos.png";
import aleman from "../img/aleman.png";

function Navbar() {
  const [cookieValue, setCookieValue] = useState({});
  const [idioma , setIdioma] = useState("");

  useEffect(() => {
    const value = Cookies.get("idioma");
    if (value === "EN") {
      setCookieValue(idiomas.EN);
    } else if (value === "DE") {
      setCookieValue(idiomas.DE);
    } else {
      setCookieValue(idiomas.ES);
    }
  }, []);

  function changeBandera() {
    const value = Cookies.get("idioma");
    if (value) {
      if (value === "ES") {
        Cookies.set("idioma", "EN", { expires: 24 });
        window.location.reload();
        setIdioma(value);
      } else if (value === "EN") {
        Cookies.set("idioma", "DE", { expires: 24 });
        window.location.reload();
        setIdioma(value);
      } else if (value === "DE") {
        Cookies.set("idioma", "ES", { expires: 24 });
        window.location.reload();
        setIdioma(value);
      }else{
        Cookies.set("idioma", "ES", { expires: 24 });
        window.location.reload();
        setIdioma(value);
      }
    } else {
      Cookies.set("idioma", "ES", { expires: 24 });
      window.location.reload();
    }
  }

  function renderBandera(){
    const value = Cookies.get("idioma");
    if (value === "ES") {
      return <img src={estadoUnidos} alt="" /> 
    } else if (value === "EN") {
      return  <img src={aleman} alt="" />
    } else if (value === "DE") {
      return <img src={mexico} alt="" />
    }else{
      return <img src={mexico} alt="" />
    }
  }

  return (
    <nav className="navegacion">
      <Link to="/" className="navbar-logo">
        <div className="logo">
          <div className="plant_ico">
            <img src={planta} alt="" />
          </div>
          <h1>
          {cookieValue.quiz ? cookieValue.navegacion.titulo : ''}
          </h1>
        </div>
      </Link>
      <div className="nav_opcions">
        <div className="flag" onClick={changeBandera}>
          {renderBandera()}
        </div>
        <Link to="/historia" className="navbar-link">
        {cookieValue.quiz ? cookieValue.navegacion.historia : ''}
        </Link>
        <Link to="/quiz" className="navbar-link">
        {cookieValue.quiz ? cookieValue.navegacion.quiz : ''}
        </Link>
        <Link to="/contact" className="navbar-link">
        {cookieValue.quiz ? cookieValue.navegacion.Ayuda : ''}
        </Link>{" "}
        {/* Corregido */}
      </div>
    </nav>
  );
}

export default Navbar;
