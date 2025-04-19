
import { Github, ExternalLink, BrainCog, Camera, Calculator, Key, Square, ListTodo } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Triage System",
      description:
        "An AI-powered decision support tool designed for prioritizing tasks or incidents. Helps businesses and organizations effectively manage and respond to various situations based on urgency and importance.",
      technologies: [
        "Python",
        "AI/ML",
        "Decision Systems"
      ],
      github: "https://github.com/realavinashupadhyay/PROJECT/tree/main/AI%20Triage%20System",
      live: "#",
      period: "Dec 2024 - Jan 2025",
      icon: <BrainCog className="text-primary" size={24} />
    },
    {
      title: "VORTEX AI",
      description:
        "Smart voice assistant designed with privacy-focused architecture. Executes tasks, retrieves information, and automates personal workflows. Future use: government helpdesks, senior citizen assistance, and citizen engagement platforms.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "AI/ML",
        "Voice Recognition",
      ],
      github: "https://github.com/realavinashupadhyay/PROJECT/tree/main/VORTEX%20AI",
      live: "#",
      period: "Feb 2024 - Mar 2024",
      icon: <BrainCog className="text-primary" size={24} />
    },
    {
      title: "Live-view-bridge",
      description:
        "Real-time security camera app using IoT, WebRTC, and cloud storage. Features include motion detection and secure remote access.",
      technologies: [
        "IoT",
        "WebRTC",
        "Cloud Storage",
        "Real-time Processing",
        "Security",
      ],
      github: "https://github.com/realavinashupadhyay/PROJECT/tree/main/live-view-bridge-main",
      live: "#",
      period: "Mar 2024 - Nov 2024",
      icon: <Camera className="text-primary" size={24} />
    },
    {
      title: "PINK CALCULATOR",
      description:
        "A uniquely themed calculator application featuring a pink user interface, offering standard arithmetic operations.",
      technologies: ["Python"],
      github: "https://github.com/realavinashupadhyay/Projects/blob/main/PINK%20CALCULATOR.py",
      live: "#",
      period: "2023",
      icon: <Calculator className="text-primary" size={24} />
    },
    {
      title: "Password Strength Checker",
      description:
        "A tool that evaluates the strength of user-generated passwords, providing feedback to enhance security.",
      technologies: ["Python"],
      github: "https://github.com/realavinashupadhyay/Projects/blob/main/Password%20Strength%20Checker.py",
      live: "#",
      period: "2023",
      icon: <Key className="text-primary" size={24} />
    },
    {
      title: "Pink Snake",
      description:
        "A variant of the classic Snake game, featuring a pink-themed interface for an engaging user experience.",
      technologies: ["Python"],
      github: "https://github.com/realavinashupadhyay/Projects/blob/main/Pink%20Snake.py",
      live: "#",
      period: "2023",
      icon: <Square className="text-primary" size={24} />
    },
    {
      title: "TO-DO LIST",
      description:
        "A simple yet effective to-do list application to help users manage their tasks efficiently.",
      technologies: ["Python"],
      github: "https://github.com/realavinashupadhyay/Projects/blob/main/TO-DO%20LIST.py",
      live: "#",
      period: "2023",
      icon: <ListTodo className="text-primary" size={24} />
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-muted/50 to-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and
            experience in web development, IoT, AI applications, and Python programming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-gradient rounded-lg overflow-hidden shadow-lg shadow-primary/5 border border-muted hover:border-primary/30 transition-all h-full flex flex-col p-6"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  {project.icon}
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <span className="text-xs text-muted-foreground">
                  {project.period}
                </span>
              </div>
              <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-muted rounded-full text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  aria-label={`View ${project.title} GitHub repository`}
                >
                  <Github size={16} />
                  <span>Repository</span>
                </a>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
