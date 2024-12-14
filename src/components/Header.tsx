import React from "react";
import { Github, Linkedin, Mail, MapPin, Code } from "lucide-react";
import HexagonBackground from "./ui/HexagonBackground";
import ContactButton from "./ui/ContactButton";

export default function Header() {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">
      <HexagonBackground />
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-8">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-primary/20 dark:bg-primary/40 rounded-full blur-xl"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-full shadow-xl">
                <Code
                  size={64}
                  className="text-primary dark:text-primary-light"
                />
              </div>
            </div>

            <div className="text-center space-y-4">
              <h1
                className="text-4xl xs:text-5xl md:text-6xl font-bold animate-slide-in 
                bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent
                dark:from-primary-light dark:to-secondary-light"
              >
                Gyasuddin Ansari
              </h1>
              <h2 className="text-2xl xs:text-3xl animate-scale-in text-gray-700 dark:text-gray-300">
                Full-Stack Developer & Team Lead
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4 xs:gap-6 animate-rotate-in">
              <ContactButton
                icon={<Mail />}
                text="gya7329@gmail.com"
                href="mailto:gya7329@gmail.com"
              />
              <ContactButton icon={<MapPin />} text="Thane, Mumbai" />
              <ContactButton
                icon={<Linkedin />}
                text="LinkedIn"
                href="https://www.linkedin.com/in/gyasuddin-ansari-a6235a1b6/"
              />
              <ContactButton
                icon={<Github />}
                text="GitHub"
                
                href="https://github.com/gya7329"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
