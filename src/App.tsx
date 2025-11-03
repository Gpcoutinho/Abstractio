// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destaques from './components/Destaques';
import PorQue from './components/PorQue';
import Footer from './components/Footer';
// Importa o componente do mascote (se você optar por usá-lo na Hero Section)
// import Mascote from './components/Mascote'; 


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-Primary">
      <Header />
      <div>
        <Hero />
        <Destaques />
        <PorQue />
        <Footer />
      </div>
    </div>
  );
}

export default App;