import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color: 'primary' | 'secondary' | 'accent';
  className?: string;
  style?: React.CSSProperties;
}

export default function SkillCard({ icon, title, skills, color, className = '', style }: SkillCardProps) {
  const colorClasses = {
    primary: 'bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light',
    secondary: 'bg-secondary/10 dark:bg-secondary-light/10 text-secondary dark:text-secondary-light',
    accent: 'bg-accent/10 dark:bg-accent-light/10 text-accent dark:text-accent-light'
  };

  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 
        hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 
        border border-gray-100 dark:border-gray-700 ${className}`}
      style={style}
    >
      <div className={`inline-block p-4 rounded-xl mb-6 ${colorClasses[color]}`}>
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${colorClasses[color]}`} />
            <span className="text-gray-700 dark:text-gray-300">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}