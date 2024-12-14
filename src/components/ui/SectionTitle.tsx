import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`text-4xl font-bold mb-12 text-center bg-clip-text text-transparent 
      bg-gradient-to-r from-blue-600 to-blue-800 
      animate-fade-in-up ${className}`}>
      {children}
    </h2>
  );
}