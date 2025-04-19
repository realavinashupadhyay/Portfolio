
const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", proficiency: 90 },
        { name: "CSS", proficiency: 85 },
        { name: "JavaScript", proficiency: 85 },
        { name: "React.js", proficiency: 80 },
        { name: "TypeScript", proficiency: 75 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", proficiency: 75 },
      ],
    },
    {
      category: "Additional Skills",
      skills: [
        { name: "Git & GitHub", proficiency: 85 },
        { name: "Responsive Design", proficiency: 90 },
        { name: "RESTful APIs", proficiency: 80 },
        { name: "Problem Solving", proficiency: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-background to-muted/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I specialize in full-stack development with expertise in modern web
            technologies. Here's a breakdown of my technical skills:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-gradient p-6 rounded-lg shadow-lg border border-muted">
              <h3 className="text-xl font-bold mb-6">{category.category}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <p className="font-medium">{skill.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {skill.proficiency}%
                      </p>
                    </div>
                    <div className="h-2 bg-muted/50 rounded-full w-full">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-6">Additional Interests</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Full Stack Development", "Cybersecurity", "AI Applications"].map(
              (interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-muted rounded-full text-primary border border-primary/20"
                >
                  {interest}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
