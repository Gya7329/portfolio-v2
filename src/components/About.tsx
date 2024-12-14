import React from "react";
import { Code2, Brain, Coffee } from "lucide-react";

export default function About() {
  return (
    <section
      className="py-20 bg-background dark:bg-gray-800 transition-colors duration-300"
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary 
              bg-clip-text text-transparent dark:from-primary-light dark:to-secondary-light"
            >
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Developer",
                description: "Full-stack expertise with modern technologies",
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Problem Solver",
                description: "Innovative solutions to complex challenges",
              },
              {
                icon: <Coffee className="w-8 h-8" />,
                title: "Team Leader",
                description: "Mentoring and guiding development teams",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl
                  transform hover:-translate-y-1 transition-all duration-300
                  animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div
                    className="p-3 bg-primary/10 dark:bg-primary-light/10 rounded-lg
                    text-primary dark:text-primary-light"
                  >
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-fade-in-up
            bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg"
          >
            Innovative problem-solver and experienced Full-Stack Developer with
            a strong foundation in backend architecture, frontend development,
            and integrating advanced technologies like Generative AI, LLMs
            (Large Language Models), and ASR (Automatic Speech Recognition).
            <br />
            <br />
            Highly skilled in building scalable, maintainable solutions using
            modern frameworks such as React.js, Next.js, Angular, Node.js, and
            TypeScript, alongside robust backend systems powered by Express,
            NestJS, and Django. Proficient in managing databases, including both
            SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Firebase) solutions,
            with an emphasis on optimization and data integrity.
            <br />
            <br />A proactive team leader with a passion for mentoring and
            empowering teams to achieve technical excellence. Proven expertise
            in designing and implementing end-to-end software architectures,
            integrating CI/CD pipelines, and optimizing development lifecycles
            for faster and more reliable deployments.
          </p>
        </div>
      </div>
    </section>
  );
}
