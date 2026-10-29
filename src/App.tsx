import React, { useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { SessionProvider } from './contexts/SessionContext';
import { TrilhaProvider } from './contexts/TrilhaContext';
import { ProgressProvider } from './contexts/ProgressContext';
import RequireAuth from './components/RequireAuth';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Trilha from './pages/Trilha';
import Missao from './pages/Missao';
import Conquistas from './pages/Conquistas';
import ExerciciosPage from './pages/ExerciciosPage';
import Perfil from './pages/Perfil';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import CompletarCadastro from './pages/CompletarCadastro';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => { if (!hash) window.scrollTo(0, 0); }, [pathname, hash]);
  return null;
};

const ProtectedLayout: React.FC = () => (
  <RequireAuth>
    <div className="min-h-screen bg-bgPrimary">
      <Sidebar />
      <main className="md:ml-[220px] pt-12 md:pt-0">
        <Outlet />
      </main>
    </div>
  </RequireAuth>
);

const App: React.FC = () => {
  return (
    <AuthProvider>
      <SessionProvider>
        <TrilhaProvider>
          <ProgressProvider>
            <ScrollToTop />
            <Routes>
              {/* Rotas públicas — sem sidebar, sem guard */}
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/completar-cadastro" element={<CompletarCadastro />} />

              {/* Rotas protegidas — exigem sessão completa */}
              <Route element={<ProtectedLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/trilha" element={<Trilha />} />
                <Route path="/missao/:nivelIdx/:missaoIdx" element={<Missao />} />
                <Route path="/conquistas" element={<Conquistas />} />
                <Route path="/exercicios" element={<ExerciciosPage />} />
                <Route path="/perfil" element={<Perfil />} />
              </Route>
            </Routes>
          </ProgressProvider>
        </TrilhaProvider>
      </SessionProvider>
    </AuthProvider>
  );
};

export default App;
