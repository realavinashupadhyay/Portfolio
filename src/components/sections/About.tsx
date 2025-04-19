
import { Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-muted/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Profile Image */}
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/20">
                {/* Profile placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-muted text-accent">
                  <Code size={64} />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl -z-10"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>

            <p className="text-lg mb-6">
              I'm an aspiring Full Stack Developer with a passion for creating scalable, secure, and user-centric applications. Currently pursuing my B.Tech in Computer Science and Engineering at Noida Institute of Engineering and Technology (2022-2026).
            </p>

            <p className="text-lg mb-6">
              My tech journey is driven by a desire to solve real-world problems through innovative solutions. I'm particularly interested in developing applications that make a meaningful impact, whether it's through enhancing user experiences or optimizing backend systems.
            </p>

            <p className="text-lg mb-6">
              When I'm not coding, I'm exploring new technologies, enhancing my cybersecurity knowledge, or diving into AI applications. I believe in continuous learning and staying updated with the latest industry trends.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-2">Email:</h3>
                <p className="text-muted-foreground">realavinashupadhay@gmail.com</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Phone:</h3>
                <p className="text-muted-foreground">+91-9473696044</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Location:</h3>
                <p className="text-muted-foreground">Noida, India</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Education:</h3>
                <p className="text-muted-foreground">B.Tech in Computer Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
