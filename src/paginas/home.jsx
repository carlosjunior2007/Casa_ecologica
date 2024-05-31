import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import Navbar from '../componentes/navbar.jsx';
import Card from '../componentes/card.jsx';

import equipo from '../img/equipo.jpg';
import apartamento from '../img/apartamento.jpg';
import icono_fuego from '../img/icono_fuego.png';
import tala from '../img/tala.png';
import abajo from '../img/abajo.png';
import Spline from '@splinetool/react-spline';

import '../css/App.css';
import idiomas from "../idiomas.json";

function Home() {
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
            <Navbar />
            <div className='contenedor_head'>
                <h1 className='titulo'>
                    {cookieValue.home ? cookieValue.home.titulo : ''}
                </h1>
                <div className='d_object'>
                <Spline scene="https://prod.spline.design/9YFiYuQJgDPSvVFu/scene.splinecode" />
                </div>
            </div>
            <div className='firstsection'>
                <div className='caja'>
                    <p>
                        {cookieValue.home ? cookieValue.home.txt1 : ''}
                    </p>
                </div>
                <div className="img">
                    <img src={equipo} alt="" />
                </div>
            </div>
            <div className='secondsection'>
                <div className='imagen_container'>
                    <img src={apartamento} alt="" />
                </div>
                <div className='texto_section2'>
                    <p>{cookieValue.home ? cookieValue.home.txt2 : ''}</p>
                </div>
            </div>
            <div className='cards'>
                <Card icono={icono_fuego} titulo={cookieValue.home ? cookieValue.home.cardCaletamientoTitulo : ''} descripcion={cookieValue.home ? cookieValue.home.cardCaletamientoDescrip : ''} />
                <Card icono={abajo} titulo={cookieValue.home ? cookieValue.home.cardTasaTitulo : ''} descripcion={cookieValue.home ? cookieValue.home.cardTasaDescrip : ''} />
                <Card icono={tala} titulo={cookieValue.home ? cookieValue.home.cardArbolesTitulo : ''} descripcion={cookieValue.home ? cookieValue.home.cardArbolesDescrip : ''} />
            </div>
        </>
    );
}

export default Home;
