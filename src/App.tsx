import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ProgressProvider } from './contexts/ProgressContext';
import Header from './components/Header';
import Home from './pages/Home';
import Trilha from './pages/Trilha';
import Missao from './pages/Missao';
import Conquistas from './pages/Conquistas';
import Perfil from './pages/Perfil';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <ProgressProvider>
      <div className="min-h-screen bg-bgPrimary">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trilha" element={<Trilha />} />
            <Route path="/missao/:nivelIdx/:missaoIdx" element={<Missao />} />
            <Route path="/conquistas" element={<Conquistas />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </main>
      </div>
    </ProgressProvider>
  );
};

export default App;
