import React from 'react';
import type { Moldura } from '../data/molduras';

interface AvatarFrameProps {
  moldura: Moldura;
  children: React.ReactNode;
  className?: string;
}

const AvatarFrame: React.FC<AvatarFrameProps> = ({ moldura, children, className }) => {
  const hasFrame = moldura.id !== 'none';

  return (
    <div
      className={`relative inline-flex rounded-full flex-shrink-0 ${className ?? ''}`}
      style={hasFrame ? { padding: '3px' } : undefined}
    >
      {hasFrame && (
        <div
          className={`absolute inset-0 rounded-full ${moldura.animClass ?? ''}`}
          style={{
            background: moldura.background,
            ...(moldura.backgroundSize ? { backgroundSize: moldura.backgroundSize } : {}),
          }}
        />
      )}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default AvatarFrame;
