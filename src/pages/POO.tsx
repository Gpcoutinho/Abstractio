import React from 'react';
import CoursePage from '../components/CoursePage';
import Footer from '../components/Footer';
import { ProgressProvider } from '../contexts/ProgressContext';
import modules from '../data/modules';

const POO: React.FC = () => {
  return (
    <>
      <ProgressProvider courseId="poo-1" initialModules={modules}>
        <CoursePage title="Programação Orientada a Objetos" overview="Este curso apresenta os conceitos fundamentais de Programação Orientada a Objetos (POO). Você vai aprender sobre classes, objetos, encapsulamento, herança e polimorfismo, com exemplos práticos e exercícios curtos para consolidar o aprendizado." />
      </ProgressProvider>

      <Footer />
    </>
  );
}

export default POO;