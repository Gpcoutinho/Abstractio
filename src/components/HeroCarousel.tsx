import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Mascote from './Mascote';
import { useProgress } from '../hooks/useProgress';

const STEPS = [
  { num: '01', title: 'Leia a teoria', desc: 'Cada missão começa com uma explicação clara do conceito.' },
  { num: '02', title: 'Resolva o exercício', desc: 'Teste seu entendimento com uma questão de múltipla escolha.' },
  { num: '03', title: 'Ganhe o troféu', desc: 'Complete a missão e conquiste seu troféu na estante.' },
];

const HeroCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const { nivelDisplay, progressoGeral } = useProgress();

  const prev = () => setCurrent(c => (c === 0 ? 1 : 0));
  const next = () => setCurrent(c => (c === 1 ? 0 : 1));

  return (
    <section className="relative mt-20 overflow-hidden" style={{ minHeight: '420px' }}>

      {/* Track */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >

        {/* Slide 1 — Roxo */}
        <div
          className="min-w-full py-20 px-5"
          style={{ background: 'linear-gradient(135deg, #4c1d95, #6d28d9, #7c3aed)' }}
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm font-semibold text-purple-200 uppercase tracking-widest mb-2">
                {nivelDisplay}
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                Bem-vindo ao<br />Abstractio
              </h1>
              <p className="text-purple-100 text-lg mb-6">
                Aprenda Programação Orientada a Objetos em Python com missões interativas e conquistas.
              </p>
              {progressoGeral > 0 && (
                <p className="text-purple-200 text-sm mb-4">{progressoGeral}% da trilha concluída</p>
              )}
              <Link
                to="/trilha"
                className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-primary to-accent shadow-[0_6px_18px_rgba(76,29,149,0.12)] transition duration-150 ease-in-out hover:-translate-y-[3px]"
              >
                {progressoGeral > 0 ? 'Continuar trilha' : 'Começar trilha'}
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <Mascote className="w-56 h-56 md:w-72 md:h-72" />
            </div>
          </div>
        </div>

        {/* Slide 2 — Verde menta */}
        <div
          className="min-w-full py-20 px-5"
          style={{ background: 'linear-gradient(135deg, #065f46, #059669, #10b981)' }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">
              Como funciona
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {STEPS.map(step => (
                <div key={step.num} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.num}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-green-100 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeftIcon className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors"
        aria-label="Próximo slide"
      >
        <ChevronRightIcon className="w-5 h-5 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {[0, 1].map(i => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-white w-6' : 'bg-white/40 w-2'
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroCarousel;
