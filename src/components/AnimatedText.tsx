import React from 'react';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedText({ children, className = '', delay = 0 }: AnimatedTextProps) {
  return (
    <div
      className={`animate-fade-in ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}