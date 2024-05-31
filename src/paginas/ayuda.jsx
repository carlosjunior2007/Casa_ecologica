import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import idiomas from "../idiomas.json";

import "../css/ayuda.css";
import imagen1 from "../img/bici2.jpg";
import imagen2 from "../img/bicicleta.jpg";
import imagen3 from "../img/perrito.jpg";
import svg1 from "../img/plantita.svg";
import svg2 from "../img/plantita2.svg";
import svg3 from "../img/plantita3.svg";
import svg4 from "../img/plantita4.svg";
import svg5 from "../img/plantita5.svg";
import Navbar from "../componentes/navbar.jsx";

function Ayuda() {
    const [cookieValue, setCookieValue] = useState({});

    useEffect(() => {
        const value = Cookies.get('idioma')
        if (value === "EN") {
            setCookieValue(idiomas.EN);
        } else if (value === "DE") {
            setCookieValue(idiomas.DE);
        } else {
            setCookieValue(idiomas.ES);
        }
    }, []);

  return (
    <>
      <Navbar></Navbar>

      <section className="sec-Titulos">
        <img src={svg2} alt="" className="svg svg1" />
        <img src={svg1} alt="" className="svg svg2" />
        <img src={svg3} alt="" className="svg svg3" />
        <div className="div-content">
          <h1 className="titulo">
            <span className="spanvolteado">{cookieValue.ayuda ? cookieValue.ayuda.titulo.pt1 : ''}</span>{cookieValue.ayuda ? cookieValue.ayuda.titulo.pt2 : ''}
          </h1>
        </div>
        <div className="div-elementos">
          <div className="elemento1">
            <h2 className="h2ayuda">
            {cookieValue.ayuda ? cookieValue.ayuda.cards.reutilizables.pt1 : ''} <br /> {cookieValue.ayuda ? cookieValue.ayuda.cards.reutilizables.pt2 : ''}
            </h2>
          </div>
          <div className="elemento2">
            <h2 className="h2ayuda">
            {cookieValue.ayuda ? cookieValue.ayuda.cards.recicables.pt1 : ''} <br /> {cookieValue.ayuda ? cookieValue.ayuda.cards.recicables.pt2 : ''}
            </h2>
          </div>
          <div className="elemento3">
            <h2 className="h2ayuda">
            {cookieValue.ayuda ? cookieValue.ayuda.cards.contaminantes.pt1 : ''} <br />{cookieValue.ayuda ? cookieValue.ayuda.cards.contaminantes.pt2 : ''}
            </h2>
          </div>
        </div>
      </section>
      <section className="sec-elementos">
        <div className="cajas caja1">
          <div>
            <img src={imagen1} alt="" className="imagen" />
          </div>
          <div>
            <p className="letrap">
            {cookieValue.ayuda ? cookieValue.ayuda.txt1 : ''}
            </p>
          </div>
        </div>
        <div className="cajas caja2">
          <div>
            <img src={imagen2} alt="" className="imagen" />
          </div>
          <div>
            <p className="letrap">
            {cookieValue.ayuda ? cookieValue.ayuda.txt2 : ''}
            </p>
          </div>
        </div>
        <div className="cajas caja3">
          <div>
            <img src={imagen3} alt="" className="imagen" />
          </div>
          <div>
            <p className="letrap">
            {cookieValue.ayuda ? cookieValue.ayuda.txt3 : ''}
            </p>
          </div>
        </div>
        <img src={svg4} alt="" className="svg svg4" />
        <img src={svg5} alt="" className="svg svg5" />
      </section>
    </>
  );
}

export default Ayuda;
