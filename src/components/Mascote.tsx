// src/components/Mascote.tsx
import React from 'react';

// Importe a imagem do mascote (Assumindo que está em src/assets)
// Nota: Em um projeto real com Vite, você precisará ter o arquivo de imagem
// (ex: 'polvo-mascote.png') na pasta /src/assets.
import PolvoMascote from '../assets/polvo-mascote-removebg.png'; 

interface MascoteProps {
  className?: string;
  alt?: string;
}

const Mascote: React.FC<MascoteProps> = ({ className = '', alt = 'Mascote Polvo Abstractio' }) => (
  <img
    src={PolvoMascote}
    alt={alt}
    // Não definir posicionamento/size por padrão aqui — deixe o pai controlar.
    // Mantemos apenas a animação e a interação (hover).
    className={`${className} animate-float transition-transform duration-500 hover:scale-105`}
  />
);

export default Mascote;