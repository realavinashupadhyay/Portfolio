
import { Award, CheckCircle, ExternalLink } from "lucide-react";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
    {
      title: "Digital Forensics Essentials (DFE)",
      issuer: "EC-Council",
      date: "Aug 2024",
      skills: [],
      category: "Cybersecurity",
      credentialId: ""
    },
    {
      title: "Introduction to Dark Web, Anonymity, and Cryptocurrency",
      issuer: "EC-Council",
      date: "Aug 2024",
      skills: [],
      category: "Cybersecurity",
      credentialId: ""
    },
    {
      title: "Make In-house Hacking and Pentesting Lab",
      issuer: "EC-Council",
      date: "Aug 2024",
      skills: [],
      category: "Cybersecurity",
      credentialId: ""
    },
    {
      title: "Network Defence Essential (NDE)",
      issuer: "EC-Council",
      date: "Aug 2024",
      skills: ["Network traffic monitoring", "Data Encryption", "Data Security"],
      category: "Cybersecurity",
      credentialId: ""
    },
    {
      title: "SQL Injection Attacks",
      issuer: "EC-Council",
      date: "Aug 2024",
      skills: [],
      category: "Cybersecurity",
      credentialId: ""
    },
    {
      title: "Ethical Hacking Essentials (EHE)",
      issuer: "Coursera",
      date: "Mar 2024",
      skills: ["Cybersecurity"],
      category: "Cybersecurity",
      credentialId: "D6CJB53BALRH"
    },
    {
      title: "Exploiting and Securing Vulnerabilities in Java Applications",
      issuer: "Coursera",
      date: "Nov 2023",
      skills: ["Java", "Security"],
      category: "Programming & Security",
      credentialId: "7UBBQC4CHZM7"
    },
    {
      title: "Hands-on Introduction to Linux Commands and Shell Scripting",
      issuer: "Coursera",
      date: "Nov 2023",
      skills: ["Linux"],
      category: "Programming",
      credentialId: "B K X R X 9 U K B W C U"
    },
    {
      title: "Learn Java",
      issuer: "CodeChef",
      date: "Sep 2023",
      skills: [],
      category: "Programming",
      credentialId: "c371b51"
    },
    {
      title: "Human-Centered Design for Inclusive Innovation",
      issuer: "Coursera",
      date: "Jun 2023",
      skills: ["Design Thinking", "Creativity and Innovation", "Inclusive Innovation", "Problem Solving", "Prototyping"],
      category: "Design",
      credentialId: "RYS4RG7Q7JMR"
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "Coursera",
      date: "Jun 2023",
      skills: ["Data Analysis", "Data Science", "Python (Programming Language)", "NumPy"],
      category: "AI/ML",
      credentialId: "VMD852PZ6WSV"
    },
    {
      title: "Introduction to Artificial Intelligence (AI)",
      issuer: "Coursera",
      date: "Jan 2023",
      skills: ["Deep Learning", "Machine Learning", "Data Science", "Artificial Intelligence (AI)"],
      category: "AI/ML",
      credentialId: "88G9WD3PP8V2"
    },
    {
      title: "Python Basics",
      issuer: "Coursera",
      date: "Jan 2023",
      skills: [],
      category: "Programming",
      credentialId: "HN7EUDTNN4EP"
    },
  ];

  // Group certifications by year
  const certsByYear = certifications.reduce((acc, cert) => {
    const year = cert.date.split(' ')[1]; // Extract year from "Month Year"
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(cert);
    return acc;
  }, {} as Record<string, typeof certifications>);

  // Sort years in descending order
  const sortedYears = Object.keys(certsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-background to-muted/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I continuously expand my knowledge through specialized courses and certifications. Here's a comprehensive list of my credentials.
          </p>
        </div>

        {sortedYears.map(year => (
          <div key={year} className="mb-12">
            <h3 className="text-2xl font-bold mb-6 border-b border-border pb-2">{year}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certsByYear[year].map((cert, index) => (
                <Card 
                  key={index}
                  className="card-gradient border border-muted hover:border-primary/30 transition-all h-full"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-3 items-center">
                        <div className="p-2 rounded-full bg-muted/70">
                          <Award size={20} className="text-primary" />
                        </div>
                        <CardTitle className="text-lg line-clamp-2">{cert.title}</CardTitle>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {cert.date}
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pb-2">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-accent shrink-0" />
                        <p className="text-muted-foreground text-sm">
                          <span className="font-medium">Issuer:</span> {cert.issuer}
                        </p>
                      </div>
                      {cert.credentialId && (
                        <div className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-accent shrink-0" />
                          <p className="text-muted-foreground text-sm line-clamp-1">
                            <span className="font-medium">Credential ID:</span> {cert.credentialId}
                          </p>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-accent shrink-0" />
                        <p className="text-muted-foreground text-sm">
                          <span className="font-medium">Category:</span> {cert.category}
                        </p>
                      </div>
                    </div>
                    
                    {cert.skills.length > 0 && (
                      <div className="mt-3">
                        <p className="text-sm font-medium mb-1">Skills</p>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill, i) => (
                            <span key={i} className="text-xs px-2 py-0.5 bg-muted rounded-full text-primary">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                  
                  <CardFooter className="pt-2">
                    <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1 group">
                      <span>Show credential</span>
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
