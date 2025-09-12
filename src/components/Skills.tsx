import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: 95 },
        { name: "Java", level: 30 },
        { name: "Python", level: 70 }
      ]
    },
    {
      title: "Web Development", 
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "React.js", level: 70 },
        { name: "Node.js", level: 30 }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "GitHub", level: 95 },
        { name: "VS Code", level: 95 }
      ]
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "Operating Systems", level: 95 },
        { name: "Object-Oriented Programming", level: 70 },
        { name: "Database Management", level: 30 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Programming languages and tools I use to build software solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-6">
              <h3 className="text-2xl font-bold text-center mb-8">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;