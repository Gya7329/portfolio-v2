import React from "react";

interface ContactButtonProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

export default function ContactButton({
  icon,
  text,
  href,
}: ContactButtonProps) {
  const Button = href ? "a" : "div";

  return (
    <Button
      href={href}
      target="_blank"
      className="flex items-center gap-2 px-4 xs:px-6 py-3 bg-white dark:bg-gray-800 rounded-full 
        shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1
        border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300 
        hover:text-primary dark:hover:text-primary-light text-sm xs:text-base"
    >
      {icon}
      <span>{text}</span>
    </Button>
  );
}
