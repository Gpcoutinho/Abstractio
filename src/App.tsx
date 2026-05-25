import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ProgressProvider } from './contexts/ProgressContext';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Trilha from './pages/Trilha';
import Missao from './pages/Missao';
import Conquistas from './pages/Conquistas';
import BauPage from './pages/BauPage';
import Perfil from './pages/Perfil';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => { if (!hash) window.scrollTo(0, 0); }, [pathname, hash]);
  return null;
};

const App: React.FC = () => {
  return (
    <ProgressProvider>
      <div className="min-h-screen bg-bgPrimary">
        <ScrollToTop />
        <Sidebar />
        <main className="md:ml-[220px] pt-12 md:pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trilha" element={<Trilha />} />
            <Route path="/missao/:nivelIdx/:missaoIdx" element={<Missao />} />
            <Route path="/conquistas" element={<Conquistas />} />
            <Route path="/bau" element={<BauPage />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </main>
      </div>
    </ProgressProvider>
  );
};

export default App;
