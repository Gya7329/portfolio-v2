import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ui/ThemeToggle";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ThemeToggle />
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
