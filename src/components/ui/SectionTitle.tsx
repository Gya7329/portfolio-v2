import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <div className="text-center mb-12 animate-fade-in-up">
      <h2
        className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary 
              bg-clip-text text-transparent dark:from-primary-light dark:to-secondary-light"
      >
        {children}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
    </div>
  );
}
