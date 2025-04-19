
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-muted/50 to-background"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm currently open to new opportunities and collaborations. Feel
            free to reach out through any of the channels below!
          </p>
        </div>

        <div className="max-w-3xl mx-auto card-gradient rounded-lg p-8 border border-muted shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-muted rounded-lg">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <a
                  href="mailto:realavinashupadhay@gmail.com"
                  className="text-muted-foreground hover:text-primary"
                >
                  realavinashupadhay@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-muted rounded-lg">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Phone</h4>
                <a
                  href="tel:+919473696044"
                  className="text-muted-foreground hover:text-primary"
                >
                  +91 9473696044
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-muted rounded-lg">
                <Github className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-medium mb-1">GitHub</h4>
                <a
                  href="https://github.com/realavinashupadhyay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  @realavinashupadhyay
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-muted rounded-lg">
                <Linkedin className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-medium mb-1">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/realavinashupadhyay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  @realavinashupadhyay
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
