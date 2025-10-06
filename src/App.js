import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AñadirReceta from './components/AñadirReceta/AñadirReceta';
import RecetasLista from "./pages/RecetasLista/RecetasLista";
import DetalleReceta from './pages/DetalleReceta/DetalleReceta';


import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agregar" element={<AñadirReceta />} />
        <Route path="/listado" element={<RecetasLista />} />
        <Route path="/recetas/:id" element={<DetalleReceta />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;



