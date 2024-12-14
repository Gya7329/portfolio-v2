import React from "react";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";

const experiences = [
  {
    role: "Software Development Engineer - 2",
    company: "AjnaLens",
    period: "03/2023 - Present",
    location: "Thane, MH",
    achievements: [
      "Spearheaded the deployment of Ollama 3.2 for vision models, enhancing AI-powered processing pipelines",
      "Designed a scalable backend for ASR solutions, reducing latency from 700ms to 300ms",
      "Mentored 5 developers, enhancing team productivity by 30%",
      "Integrated generative AI models and LLMs into product pipelines, enabling advanced text processing and automation",
      "Implemented CI/CD pipelines to automate deployments, reducing development cycles by 35% and accelerating time-to-market",
      "Developed reusable NPM packages to standardize functionalities across projects, improving development efficiency",
      "Enhanced real-time data streaming and WebSocket handling for low-latency live applications",
      "Architected cross-platform Single Sign-On (SSO) services, ensuring secure and seamless authentication across applications",
      "Integrated payment systems like Stripe and Razorpay, boosting transaction reliability by 20%",
      "Revamped job portal platforms with video viewers and 3D content sharing, impacting over 100 users",
      "Led database schema redesigns, improving query performance by 40% and ensuring smooth data migrations",
      "Designed highly interactive React.js and Next.js applications, improving user engagement by 25% and reducing load times by 30%",
    ],
  },
  {
    role: "Software Development Engineer - 1",
    company: "KyloApps",
    period: "01/2022 - 03/2023",
    location: "New Delhi",
    achievements: [
      "Successfully contributed to a diverse range of software development projects, showcasing expertise in designing and optimizing workflows for seamless project execution",
      "Took a leadership role in mentoring and guiding interns, ensuring their smooth integration into the development team. Efficiently resolved bugs and queries, maintaining project timelines and quality standards",
      "Successfully delivered and completed over five key projects, consistently meeting and exceeding project goals, while supporting more than 10 additional projects, contributing to the overall success of the team",
      "Demonstrated strong proficiency in Angular, React, Node.js, and MongoDB, effectively leveraging this diverse technology stack to deliver high-quality software solutions",
      "Skillfully integrated a variety of payment gateways, including Razorpay, Paytm, Stripe, and CCAvenue, enhancing the organization's capability to handle secure and seamless transactions",
    ],
  },
];

export default function Experience() {
  return (
    <section
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      id="experience"
    >
      <div className="container mx-auto px-4">
        <SectionTitle>Work Experience</SectionTitle>
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8
                hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className="absolute -left-3 top-8 w-6 h-6 bg-primary dark:bg-primary-light 
                rounded-full border-4 border-white dark:border-gray-900"
              ></div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-primary dark:text-primary-light font-semibold">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <ChevronRight className="w-5 h-5 text-primary dark:text-primary-light flex-shrink-0 mt-1" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
