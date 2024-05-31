import "../css/card.css";

function Navbar(props) {
  return (
    <div className="card">
        <div className="title_card">
            <div className="icon">
                <img src={props.icono}/>
            </div>
            <div className="titulo_card">
                <h2>{props.titulo}</h2>
            </div>
        </div>
        <div className="content_card">
            <p>
                {props.descripcion}
            </p>
        </div>
    </div>
  );
}

export default Navbar;
