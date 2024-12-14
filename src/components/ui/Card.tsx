import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg 
      hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 
      border border-gray-100 dark:border-gray-700 ${className}`}
    >
      {children}
    </div>
  );
}
