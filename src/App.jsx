import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/navBar';
import HomePage from './screens/home';
import LanguePage from './screens/langue';
import TraditionCulture from './screens/tradition';
import Footer from './components/Footer';
import EquipePage from './screens/equipe/equipe'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/equipe" element={<EquipePage />} />
        <Route path="/langue" element={<LanguePage />} />
        <Route path="/tradition" element={<TraditionCulture />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;