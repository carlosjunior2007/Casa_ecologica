import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import idiomas from "../idiomas.json";

import Navbar from "../componentes/navbar.jsx";
import Histori from "../componentes/historia_card.jsx";
import '../css/historia.css';

import attempuno from "../img/design3d/1er attemp.jpg";
import fotojannel from '../img/equipo.jpg';
import attempdos from "../img/design3d/2nd attemp.jpg";
import attemptres from "../img/design3d/3 attemp.jpg";
import attempcuatro from "../img/design3d/4 attemp.jpg"
import attempcinco from "../img/design3d/5 attemp.jpg"
import attempseis from "../img/design3d/6 attemp.jpg"
import attempsiete from "../img/design3d/7 attemp.jpg"

import ft1 from "../img/proceso_casa_ecologica/imagen1.jpg";
import ft2 from "../img/proceso_casa_ecologica/imagen2.jpg";
import ft3 from "../img/proceso_casa_ecologica/imagen3.jpg";
import ft4 from "../img/proceso_casa_ecologica/imagen4.jpg";
import ft5 from "../img/proceso_casa_ecologica/imagen5.jpg";
import ft6 from "../img/proceso_casa_ecologica/final_1.jpg";
import ft7 from "../img/proceso_casa_ecologica/final_2.jpg";
import ft8 from "../img/proceso_casa_ecologica/final_3.jpg";
import ft9 from "../img/proceso_casa_ecologica/final_4.jpg";

import jannelMar from "../img/fotos_equipo/jannel_marciano.jpeg";
import antoniodef from "../img/fotos_equipo/antonio_deforme.jpeg";
import diseno from "../img/fotos_equipo/diseno.jpg";
import diseno_pg from "../img/fotos_diseno/diseno_pagina.jpg";
import trabajando1 from "../img/fotos_diseno/trabajando_1.jpg";
import trabajando2 from "../img/fotos_diseno/trabajando_2.jpg";
import imagen1_galeria  from "../img/galeria_pg/1.jpg";
import imagen2_galeria  from "../img/galeria_pg/2.jpg";
import imagen3_galeria  from "../img/galeria_pg/3.jpg";
import imagen4_galeria  from "../img/galeria_pg/4.jpg";

import concu1 from "../img/conclucion/casa_final.jpg";
import concu2 from "../img/conclucion/equipo_sin_jannel.jpg";

function Historia() {

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
    <main className="papa">
      <Navbar />
      <div className="svg_linea">
      <svg
          height="1900"
          viewBox="0 0 200 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M86 0.5V99M86 99C88.1667 128.5 86 174 0 174M86 99V288M86 288C86 328 86 328 181 328M86 288V446M86 446C84.6667 458.333 86 475.5 0 475.5M86 446V602.5M86 602.5C86 616.833 86 636 181 636M86 602.5V752M86 752C86 761.5 86 782.5 0 782.5M86 752V872.5C83.1667 892.667 98.2 927.8 181 907"
            stroke="#6ABF5B"
            strokeWidth="8"
          />
        </svg>
      </div>
      <Histori numero="uno" titulo={cookieValue.historia ? cookieValue.historia.inicio.carta_titulo : ''} fecha="(01/05/2024)" identificardor="inicio" txtBtt={cookieValue.historia ? cookieValue.historia.leer : ''}>
        <h1 className="h1_inicio">{cookieValue.historia ? cookieValue.historia.inicio.titulo : ''}</h1>
        <div className="firstsection_inicio">
          <div className="titulo_inicio">
            <p>
              {cookieValue.historia ? cookieValue.historia.inicio.txt1 : ''}
            </p>
          </div>
          
          <div className="image_aside">
              <img src={fotojannel} alt="" />
          </div>
        </div>
        <div className="secondsection_inicio">
            <div className="description_inicio">
              <p>
                {cookieValue.historia ? cookieValue.historia.inicio.txt2 : ''}
              </p>
            </div>
            <div className="imagen_des_aside">
              <img src={jannelMar} alt="" />
              <img src={antoniodef} alt="" />
              <img src={diseno} alt="" className="diseno_incio"/>
            </div>
        </div>
      </Histori>
      <Histori numero="dos" titulo={cookieValue.historia ? cookieValue.historia.objeto_3d.carta_titulo : ''} fecha="(08/05/2024)" identificardor="casa3d" txtBtt={cookieValue.historia ? cookieValue.historia.leer : ''}>
        <div className="historyobject">
          <h1>{cookieValue.historia ? cookieValue.historia.objeto_3d.titulo : ''}</h1>
          <div className="texto">
            <div className="div3d">
              <p>
                {cookieValue.historia ? cookieValue.historia.objeto_3d.txt1 : ''}
              </p>
            </div>
            <img src={attempuno} alt="" />
          </div>
          <div className="texto">
            <div className="div3d">
              <p>
                {cookieValue.historia ? cookieValue.historia.objeto_3d.txt2 : ''}
              </p>
            </div>
            <img src={attempdos} alt="" />
          </div>
          <div className="texto">
            <div className="div3d">
              <p>
                {cookieValue.historia ? cookieValue.historia.objeto_3d.txt3 : ''}
              </p>
            </div>
            <img src={attemptres} alt="" />
          </div>
          <div className="texto">
            <div className="div3d">
              <p>
                {cookieValue.historia ? cookieValue.historia.objeto_3d.txt4 : ''}
              </p>
            </div>
            <img src={attempcuatro} alt="" />
          </div>
          <div className="texto">
            <div className="div3d">
              <p>
                {cookieValue.historia ? cookieValue.historia.objeto_3d.txt5 : ''}
              </p>
            </div>
            <img src={attempcinco} alt="" />
          </div>
          <div className="texto">
            <div className="div3d">
            <p>
              {cookieValue.historia ? cookieValue.historia.objeto_3d.txt6 : ''}
            </p>
            </div>
            <img src={attempseis} alt="" />
          </div>
          <div className="texto">
            <img src={attempsiete} alt="" />
            <div className="div3d">
              <p>
                {cookieValue.historia ? cookieValue.historia.objeto_3d.txt7 : ''}
              </p>
            </div>
          </div>
          <div className="texto">
            <div className="div3d ">
              <p>
                {cookieValue.historia ? cookieValue.historia.objeto_3d.txt8 : ''}
              </p>
            </div>
          </div>
        </div>
      </Histori>
      <Histori numero="tres" titulo={cookieValue.historia ? cookieValue.historia.construccion.carta_titulo : ''} fecha="(09/05/2024)" identificardor="construcion" txtBtt={cookieValue.historia ? cookieValue.historia.leer : ''}>
        <div className="construccion">
          <h1>{cookieValue.historia ? cookieValue.historia.construccion.titulo : ''}</h1>
          <div className='fotoscons'>
            <img src={ft1} alt="" />
            <img src={ft2} alt="" />
            <img src={ft3} alt="" />
          </div>
          <div className='fotoscons'>
            <img src={ft4} alt="" />
            <img src={ft5} alt="" />
            <img src={ft6} alt="" />
          </div>
          <div className='fotoscons'>
            <img src={ft7} alt="" />
            <img src={ft8} alt="" />
            <img src={ft9} alt="" />  
          </div>
        </div>
      </Histori>
      <Histori numero="cuatro" titulo={cookieValue.historia ? cookieValue.historia.diseno_pg.carta_titulo : ''} fecha="(19/05/2024)" identificardor="pg" txtBtt={cookieValue.historia ? cookieValue.historia.leer : ''}>
        <h1 className="titulo_pg_diseno">{cookieValue.historia ? cookieValue.historia.diseno_pg.titulo : ''}</h1>
        <div className="firtsection_diseno_pg">
          <div className="drecription_pagina">
            {cookieValue.historia ? cookieValue.historia.diseno_pg.txt1 : ''}
          </div>
          <div className="image_pg_des">
            <img src={diseno_pg} alt="" />
          </div>
        </div>
        <div className="seconddescription_diseno_pg">
          <div className="text_second_pg">
            {cookieValue.historia ? cookieValue.historia.diseno_pg.txt2 : ''}
          </div>
          <div className="foto_description_second">
              <img src={trabajando1} alt="" />
              <img src={trabajando2} alt="" />
          </div>
        </div>
      </Histori>
      <Histori numero="cinco" titulo={cookieValue.historia ? cookieValue.historia.pagina.carta_titulo : ''} fecha="(29/05/2024)" identificardor="pagina_web" txtBtt={cookieValue.historia ? cookieValue.historia.leer : ''}>
        <h1 className="titulo_resultado_pg">{cookieValue.historia ? cookieValue.historia.pagina.titulo : ''}</h1>
        <div className="galeria_de_imagen">
          <img src={imagen1_galeria} alt="" />
          <img src={imagen2_galeria} alt="" />
          <img src={imagen3_galeria} alt="" />
          <img src={imagen4_galeria} alt="" />
        </div>
      </Histori>
      <Histori numero="seis" titulo={cookieValue.historia ? cookieValue.historia.conclucion.carta_titulo : ''} fecha="(25/05/2024)" identificardor="conclusion" txtBtt={cookieValue.historia ? cookieValue.historia.leer : ''}>
        <h1 className="ctitulo">{cookieValue.historia ? cookieValue.historia.conclucion.titulo : ''}</h1><br />

        <p className="pconclusion">
          {cookieValue.historia ? cookieValue.historia.conclucion.txt1 : ''}
        </p>
        <p className="pconclusion">
          {cookieValue.historia ? cookieValue.historia.conclucion.txt2 : ''}
          </p>      
        <p className="pconclusion">
          {cookieValue.historia ? cookieValue.historia.conclucion.txt3 : ''}
        </p>
        <div className='fotosdov'>
          <img src={concu1} alt="" />
          <img src={concu2} alt="" />
        </div>
      </Histori>
    </main>
  );
}

export default Historia;
