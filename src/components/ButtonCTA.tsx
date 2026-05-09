import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { compact?: boolean };

const ButtonCTA: React.FC<Props> = ({ children, className = '', compact, ...props }) => (
  <button
    className={`inline-flex items-center justify-center ${compact ? 'px-5 py-2' : 'px-6 py-3'} text-white font-semibold rounded-lg bg-gradient-to-r from-primary to-accent shadow-[0_6px_18px_rgba(76,29,149,0.12)] transition duration-150 ease-in-out hover:-translate-y-[3px] ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default ButtonCTA;
