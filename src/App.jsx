import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
// Components
import Header from './components/Header';
// Pages
import { Inicio } from './pages/Inicio';
import { ProductosYServicios } from './pages/ProductosYServicios';
import { SobreNosotros } from './pages/SobreNosotros';
import { Contacto } from './pages/Contacto';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/productos-y-servicios" element={<ProductosYServicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
