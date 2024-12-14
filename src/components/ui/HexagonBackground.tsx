import React from 'react';

export default function HexagonBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30"></div>
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5})`
          }}
        >
          <svg
            className="w-12 h-12 text-gray-200"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l10 6v8l-10 6-10-6V8z" />
          </svg>
        </div>
      ))}
    </div>
  );
}