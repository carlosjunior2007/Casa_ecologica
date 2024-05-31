import "../css/historia.css";
import React, { useState } from 'react';

function Histori(props) {
  const [modal, Setmodal] = useState(false);
  
  const openModal = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
    Setmodal(true)
    document.body.classList.add('no-scroll');
  }

  const closeModal = () =>{
    Setmodal(false)
    document.body.classList.remove('no-scroll');
  }

  return (
    <div className="contenedor_historia">
      <div className="card_historia" id={props.numero}>
        <h1 className="h1cards">{props.titulo}</h1>
        <p className="pcards">{props.fecha}</p>
        <button className="btncards" onClick={openModal}>{props.txtBtt}</button>
      </div>
        {modal ? 
        <div className="ModalContainer" id={props.identificardor}>
            <div className="Modal">
                <button className="close" onClick={closeModal}> X </button>
                {props.children}
            </div>
        </div> 
          : <></>}
    </div>
  );
}

export default Histori;
