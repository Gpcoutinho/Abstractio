import React from 'react';

type CardProps = {
  title: string;
  description: string;
  buttonLabel?: string;
  className?: string;
};

const Card: React.FC<CardProps> = ({ title, description, buttonLabel = 'Explorar', className = '' }) => {
  return (
    <div className={`card flex flex-col justify-between h-full ${className}`}>
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-textPrimary">{title}</h3>
        <p className="text-textSecondary mb-6 min-h-16">{description}</p>
      </div>
      <div className="mt-4 flex justify-center">
        <button type="button" className="bg-purpleAccent text-textPrimary px-6 py-3 rounded-md font-medium hover:bg-purpleAccent/80 transition-colors">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Card;
