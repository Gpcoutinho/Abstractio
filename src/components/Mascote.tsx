// src/components/Mascote.tsx
import React from 'react';

// Importe a imagem do mascote (Assumindo que está em src/assets)
// Nota: Em um projeto real com Vite, você precisará ter o arquivo de imagem
// (ex: 'polvo-mascote.png') na pasta /src/assets.
import PolvoMascote from '../assets/polvo-mascote.png'; 

interface MascoteProps {
  className?: string;
  alt?: string;
}

const Mascote: React.FC<MascoteProps> = ({ className = '', alt = 'Mascote Polvo Abstractio' }) => (
  <img 
    src={PolvoMascote} 
    alt={alt} 
    // Classes de posicionamento e tamanho
    className={`w-24 h-24 absolute right-5 -top-12 hidden lg:block ${className}`}
  />
);

export default Mascote;