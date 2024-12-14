import { ExternalLink, Github } from "lucide-react";
import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";

const projects = [
  {
    title: "Vision and ASR Integration Platform",
    description:
      "Backend system integrating Ollama 3.2 for vision models and ASR for audio-to-text conversion, deployed on scalable architectures.",
    image: "/ai_llm.png",
    link: "mailto:gya7329@gmail.com?subject=Let's%20Collaborate&body=Hi%20Gyasuddin%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20collaboration.%20Please%20let%20me%20know%20your%20availability.%0A%0AThanks%2C%0A%5BYour%20Name%5D",
    tags: ["React", "Node.js", "ASR", "Vision AI"],
  },
  {
    title: "Publisher Hub Platform",
    description:
      "Publisher platform for managing and distributing digital content with a custom uploader and chunking capabilities.",
    link: "https://publisherhub.ajnavidya.com",
    image: "/publisher_hub.png",
    tags: ["React.js", "MongoDB", "Custom Uploader", "Chunking", "Node.js"],
  },
  {
    title: "SSO Platform",
    description:
      "Architected and deployed SSO services with a super admin dashboard for enhanced multi-platform authentication.",
    link: "https://ajnalens.com/ajnavidya",
    github: "https://github.com/username/sso-platform",
    image: "/sso.png",
    tags: ["TypeScript", "Express", "SSO", "Admin Dashboard"],
  },
  {
    title: "Bookstore Platform",
    description:
      "Online bookstore platform with a custom cart and payment gateway integration for seamless transactions.",
    link: "https://www.hindirachna.com",
    github: "",
    image: "/bookstore.png",
    tags: [
      "Next.js",
      "Razorpay",
      "MongoDB",
      "Express",
      "Node.js",
      "TypeScript",
    ],
  },
  {
    title: "Viosa Edtech Platform",
    description:
      "VIOSA is the EdTech industry's first unified technology platform that coaches students in acquiring sector-based competencies, help them build their professional profiles, & guides them to achieve their aspirational employment.",
    link: "https://www.viosa.in",
    github: "",
    image: "/viosa.png",
    tags: ["React.js", "MongoDB", "Express", "Node.js", "JavaScript"],
  },
  {
    title: "More Projects ...",
    description:
      "Contact me for more projects and details. I am happy to share my work with you.",
    link: "mailto:gya7329@gmail.com?subject=Let's%20Collaborate&body=Hi%20Gyasuddin%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20collaboration.%20Please%20let%20me%20know%20your%20availability.%0A%0AThanks%2C%0A%5BYour%20Name%5D",
    image: "/contact.png",
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Postgres",
      "TypeScript",
      "LLM",
      "AI",
      "Python",
      "TensorFlow",
      "Fine Tuning",
      "RAG",
      "Docker",
      "Nginx",
      "Git",
      "CI/CD Pipelines",
      "Figma",
      "More ...",
    ],
  },
];

export default function Projects() {
  return (
    <section
      className="py-32 bg-background dark:bg-gray-800 transition-colors duration-300"
      id="projects"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Featured Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative group h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 
                      transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="absolute bottom-4 left-4 right-4 flex justify-end space-x-2">
                      <a
                        href={project.link}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full 
                          hover:bg-white/30 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary
                          dark:bg-primary-light/10 dark:text-primary-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
