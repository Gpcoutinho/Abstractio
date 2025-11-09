import React from 'react';
import Hero from '../components/Hero';
import Destaques from '../components/Destaques';
import PorQue from '../components/PorQue';
import Footer from '../components/Footer';


const Home: React.FC = () => {
  return (
    // Usando Fragment (<>) pois o div principal está no App.tsx
    <>
        <Hero />
        <Destaques />
        <PorQue />
        <Footer />
    </>
  );
}

export default Home;