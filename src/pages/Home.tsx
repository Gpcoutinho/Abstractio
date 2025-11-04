import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Destaques from '../components/Destaques';
import PorQue from '../components/PorQue';
import Footer from '../components/Footer';
import { Routes, Route } from 'react-router-dom';


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