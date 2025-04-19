
import { BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Noida Institute of Engineering and Technology",
      period: "2022 - 2026",
      score: "CGPA: 6.57",
    },
    {
      degree: "Class 12",
      institution: "Praxis Vidyapeeth, Basti",
      period: "2021 - 2022",
      score: "Percentage: 71.2%",
    },
    {
      degree: "Class 10",
      institution: "Praxis Vidyapeeth, Basti",
      period: "2019 - 2020",
      score: "Percentage: 84.3%",
    },
  ];

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-muted/50 to-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic journey has equipped me with strong foundations in computer science and problem-solving skills.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary/30 pl-8 space-y-16">
            {education.map((item, index) => (
              <div key={index} className="relative animate-fade-in">
                {/* Timeline dot */}
                <div className="absolute -left-10 w-5 h-5 rounded-full bg-primary"></div>
                {/* Timeline content */}
                <div className="card-gradient p-6 rounded-lg shadow-lg border border-muted hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen size={20} className="text-primary" />
                    <h3 className="text-xl font-bold">{item.degree}</h3>
                  </div>
                  <p className="text-muted-foreground mb-2">{item.institution}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                    <p className="text-sm font-medium text-accent">{item.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
