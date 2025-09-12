import { Card } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";
const About = () => {
  const values = [{
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code following best practices."
  }, {
    icon: Palette,
    title: "Creative Design",
    description: "Crafting beautiful and intuitive user interfaces that enhance user experience."
  }, {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimizing applications for speed and performance across all devices."
  }, {
    icon: Users,
    title: "Team Player",
    description: "Collaborating effectively with cross-functional teams to deliver results."
  }];
  return <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate programmer with a love for creating software solutions that make a difference
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold mb-8">Building Software Solutions</h3>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I am currently pursuing a Bachelor of Technology in Computer Science and Engineering. 
              I am passionate about programming, algorithm design, and building efficient software applications. 
              Through my studies, I aim to enhance my programming skills and apply them in real-world problem solving.
            </p>
            <p>
              I believe in continuous learning and staying up-to-date with programming languages and frameworks. When I'm not coding, 
              you can find me exploring new programming paradigms, contributing to open-source projects, or sharing 
              knowledge with the programming community.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <value.icon className="h-8 w-8" />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>

      </div>
    </section>;
};
export default About;