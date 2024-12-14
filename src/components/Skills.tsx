import React from "react";
import { Code2, Database, GitBranch, TestTube, Brain } from "lucide-react";
import SkillCard from "./ui/SkillCard";
import SectionTitle from "./ui/SectionTitle";

const skillCategories = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Frontend",
    skills: ["React.js", "Next.js", "Redux", "TypeScript"],
    color: "primary" as "primary" | "secondary" | "accent",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "Postgres"],
    color: "secondary" as "primary" | "secondary" | "accent",
  },
  {
    icon: <TestTube className="w-8 h-8" />,
    title: "Testing",
    skills: ["Jest", "React Testing Library", "Cypress", "Postman"],
    color: "accent" as "primary" | "secondary" | "accent",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI & LLM",
    skills: ["Python", "TensorFlow", "Fine Tuning", "RAG"],
    color: "primary" as "primary" | "secondary" | "accent",
  },
  {
    icon: <GitBranch className="w-8 h-8" />,
    title: "DevOps",
    skills: ["Docker", "Nginx", "Git", "CI/CD Pipelines"],
    color: "accent" as "primary" | "secondary" | "accent",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "UI/UX",
    skills: ["Figma", "Adobe XD", "Material-UI", "Tailwind CSS"],
    color: "secondary" as "primary" | "secondary" | "accent",
  },
];

export default function Skills() {
  return (
    <section className="py-32 bg-background" id="skills">
      <div className="container mx-auto px-4">
        <SectionTitle>Skills & Expertise</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              {...category}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
