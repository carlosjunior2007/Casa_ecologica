import { Route, Routes } from 'react-router-dom';
import Home from './paginas/home';
import Historia from './paginas/historia';
import Quiz from './paginas/quiz';
import Ayuda from './paginas/ayuda';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/contact" element={<Ayuda />} />
      </Routes>
    </>
  );
}

export default App;
