
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient">Avinash Upadhyay</h3>
            <p className="mt-2 text-muted-foreground">
              Full Stack Developer with a passion for creating scalable, secure, and user-centric applications.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/realavinashupadhyay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/realavinashupadhyay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:realavinashupadhay@gmail.com"
              aria-label="Email"
              className="hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Avinash Upadhyay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
