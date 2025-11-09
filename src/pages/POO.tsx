import React from 'react';
import CoursePage from '../components/CoursePage';
import Footer from '../components/Footer';
import { ProgressProvider } from '../contexts/ProgressContext';

const initialModules = [
  {
    id: 'm1',
    title: 'Módulo 1 — Introdução',
    lessons: [
      { id: 'l1', title: 'O que é POO?', completed: true },
      { id: 'l2', title: 'Classes', completed: true },
      { id: 'l3', title: 'Objetos', completed: false },
      { id: 'l4', title: 'Métodos', completed: false },
    ],
  },
  {
    id: 'm1',
    title: 'Módulo 2 — Lorem Ipsum',
    lessons: [
      { id: 'l1', title: 'Lorem Ipsum', completed: false },
      { id: 'l2', title: 'Lorem Ipsum', completed: false },
      { id: 'l3', title: 'Lorem Ipsum', completed: false },
      { id: 'l4', title: 'Lorem Ipsum', completed: false },
      { id: 'l5', title: 'Lorem Ipsum', completed: false },
      { id: 'l6', title: 'Lorem Ipsum', completed: false },
    ],
  },
];

const POO: React.FC = () => {
  return (
    <>
      <ProgressProvider courseId="poo-1" initialModules={initialModules}>
        <CoursePage title="Programação Orientada a Objetos" overview="Este curso apresenta os conceitos fundamentais de Programação Orientada a Objetos (POO). Você vai aprender sobre classes, objetos, encapsulamento, herança e polimorfismo, com exemplos práticos e exercícios curtos para consolidar o aprendizado." />
      </ProgressProvider>

      <Footer />
    </>
  );
}

export default POO;