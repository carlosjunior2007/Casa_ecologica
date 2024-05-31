import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import idiomas from "../idiomas.json";

import Navbar from '../componentes/navbar.jsx'
import '../css/Quiz.css'

function Quiz() {
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

    const resultado = ()=>{
      var p1, p2, p3, p4, p5, nota;
      // 1a pregunta
      if (document.getElementById('p14').checked==true) {p1=1}
      else {p1=0}
      // 2a pregunta
      if (document.getElementById('p23').checked==true) {p2=1}
      else {p2=0}
      // 3a pregunta
      if (document.getElementById('p32').checked==true) {p3=1}
      else {p3=0}
      // 4a pregunta
      if (document.getElementById('p42').checked==true) {p4=1}
      else {p4=0}
      // 5a pregunta
      if (document.getElementById('p52').checked==true) {p5=1}
      else {p5=0}
      nota = p1 + p2 + p3 + p4 + p5;
      alert("Tuviste " + nota + " aciertos");
    }

    const clean = ()=>{
      const botones = document.querySelectorAll("input");
      botones.forEach((boton) => {
        boton.checked = false;
      })
    }

return (
    <div className='preguntas'>
    <Navbar />
    <h1 className='h1qz'>{cookieValue.quiz ? cookieValue.quiz.titulo : ''}</h1>
    <div className="container">
        <form>
          <table className='tabquiz'>
            <tr>
              <td className='tdqz'>
                <p className='pqz'><strong>{cookieValue.quiz ? cookieValue.quiz.pregunta1.pregunta : ''}</strong></p> 
                <ol type='A' className='olqz'>
                <li><input type="radio" name="pregunta1" id="p11" /> {cookieValue.quiz ? cookieValue.quiz.pregunta1.A : ''}</li>
                <li><input type="radio" name="pregunta1" id="p12" /> {cookieValue.quiz ? cookieValue.quiz.pregunta1.B : ''}</li>
                <li><input type="radio" name="pregunta1" id="p13" /> {cookieValue.quiz ? cookieValue.quiz.pregunta1.C : ''}</li>
                <li><input type="radio" name="pregunta1" id="p14" /> {cookieValue.quiz ? cookieValue.quiz.pregunta1.D : ''}</li>
                </ol>
              </td>
              <td className='tdqz'>
                <p className='pqz'><strong>{cookieValue.quiz ? cookieValue.quiz.pregunta2.pregunta : ''}</strong></p>
                <ol type='A' className='olqz'>
                <li><input type="radio" name="pregunta2" id="p21" /> {cookieValue.quiz ? cookieValue.quiz.pregunta2.A : ''}</li>
                <li><input type="radio" name="pregunta2" id="p23" /> {cookieValue.quiz ? cookieValue.quiz.pregunta2.B : ''}</li>
                <li><input type="radio" name="pregunta2" id="p22" /> {cookieValue.quiz ? cookieValue.quiz.pregunta2.C : ''}</li>
                <li><input type="radio" name="pregunta2" id="p24" /> {cookieValue.quiz ? cookieValue.quiz.pregunta2.D : ''}</li>
                </ol>
              </td>
            </tr>
            <tr>
              <td className='tdqz'>
                <p className='pqz'><strong>{cookieValue.quiz ? cookieValue.quiz.pregunta3.pregunta : ''}</strong></p>
                <ol type='A' className='olqz'>
                <li><input type="radio" name="pregunta3" id="p31" /> {cookieValue.quiz ? cookieValue.quiz.pregunta3.A : ''}</li>
                <li><input type="radio" name="pregunta3" id="p33" /> {cookieValue.quiz ? cookieValue.quiz.pregunta3.B : ''}</li>
                <li><input type="radio" name="pregunta3" id="p32" /> {cookieValue.quiz ? cookieValue.quiz.pregunta3.C : ''}</li>
                <li><input type="radio" name="pregunta3" id="p34" /> {cookieValue.quiz ? cookieValue.quiz.pregunta3.D : ''}</li>
                </ol>
                </td>
              <td className='tdqz'>
                <p className='pqz'><strong>{cookieValue.quiz ? cookieValue.quiz.pregunta4.pregunta : ''}</strong></p> 
                <ol type='A' className='olqz'>
                <li><input type="radio" name="pregunta4" id="p41" /> {cookieValue.quiz ? cookieValue.quiz.pregunta4.A : ''}</li>
                <li><input type="radio" name="pregunta4" id="p42" /> {cookieValue.quiz ? cookieValue.quiz.pregunta4.B : ''}</li>
                <li><input type="radio" name="pregunta4" id="p43" /> {cookieValue.quiz ? cookieValue.quiz.pregunta4.C : ''}</li>
                <li><input type="radio" name="pregunta4" id="p44" /> {cookieValue.quiz ? cookieValue.quiz.pregunta4.D : ''}</li>
                </ol>
              </td>
            </tr>
            <tr>
              <td className='tdqz'>
                <p className='pqz'><strong>{cookieValue.quiz ? cookieValue.quiz.pregunta2.pregunta : ''}</strong></p>
                <ol type='A' className='olqz'>
                <li><input type="radio" name="pregunta5" id="p55" /> {cookieValue.quiz ? cookieValue.quiz.pregunta1.A : ''}</li>
                <li><input type="radio" name="pregunta5" id="p51" /> {cookieValue.quiz ? cookieValue.quiz.pregunta1.B : ''}</li>
                <li><input type="radio" name="pregunta5" id="p52" /> {cookieValue.quiz ? cookieValue.quiz.pregunta1.C : ''}</li>
                <li><input type="radio" name="pregunta5" id="p53" /> {cookieValue.quiz ? cookieValue.quiz.pregunta1.D : ''}</li>
                </ol>
              </td>
              <td className='tdqz tdrestqz'>
                <button type="button" className="btn btn-primary btnqz" onClick={resultado}>{cookieValue.quiz ? cookieValue.quiz.botonRes : ''}</button>
                <button type="button" className="btn btn-secundary btnqz" onClick={clean}>{cookieValue.quiz ? cookieValue.quiz.lim : ''}</button>
              </td>
            </tr>
          </table>
        </form>
    </div>
    </div>
);
}

export default Quiz;
