import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
const Hero = () => {
  return <section id="home" className="min-h-screen flex flex-col justify-center relative pt-16 bg-gradient-to-b from-muted/50 to-background">
      <div className="container-custom py-16">
        <div className="max-w-3xl">
          <h2 className="text-xl text-accent mb-2 font-medium animate-fade-in">
            Hello, I'm
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            Avinash Upadhyay
          </h1>
          <h3 className="text-2xl sm:text-3xl mb-6 text-muted-foreground animate-fade-in">
            <span className="text-gradient font-semibold">Full Stack Developer</span> with a
            passion for creating scalable & user-centric applications
          </h3>
          <p className="text-lg mb-8 text-muted-foreground animate-fade-in max-w-2xl">
            I specialize in building modern web applications with React, TypeScript, and
            Node.js, focusing on solving real-world problems through innovative solutions.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in">
            <a href="#contact" className="btn-primary">
              Get in touch
            </a>
            
          </div>

          <div className="mt-12 flex items-center gap-6 animate-fade-in">
            <a href="https://github.com/realavinashupadhyay" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub Profile">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/realavinashupadhyay" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn Profile">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown className="text-muted-foreground hover:text-primary transition-colors" />
        </a>
      </div>
    </section>;
};
export default Hero;