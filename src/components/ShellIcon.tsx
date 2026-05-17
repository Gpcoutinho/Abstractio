import React from 'react';
import cascaPng from '../assets/casca.png';

interface ShellIconProps {
  className?: string;
  style?: React.CSSProperties;
}

const ShellIcon: React.FC<ShellIconProps> = ({ className, style }) => (
  <span
    className={`inline-block flex-shrink-0 ${className ?? ''}`.trim()}
    style={{
      WebkitMaskImage: `url(${cascaPng})`,
      WebkitMaskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskImage: `url(${cascaPng})`,
      maskSize: 'contain',
      maskRepeat: 'no-repeat',
      maskPosition: 'center',
      backgroundColor: 'currentColor',
      ...style,
    }}
  />
);

export default ShellIcon;
