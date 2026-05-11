import React from 'react';

const PageWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`mx-auto pt-8 px-5 ${className}`}>{children}</div>
);

export default PageWrapper;
