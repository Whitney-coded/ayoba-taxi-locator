
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import CalculatorPage from './pages/CalculatorPage';
import Marketplace from './pages/Marketplace';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MapPage from './pages/MapPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
