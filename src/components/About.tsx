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
            Passionate developer with a love for creating digital solutions that make a difference
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold mb-8">Crafting Digital Experiences</h3>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I am currently pursuing a Bachelor of Technology in Computer Science and Engineering. 
              I am passionate about programming, web development, and building practical projects. 
              Through my studies, I aim to enhance my technical skills and apply them in real-world applications.
            </p>
            <p>
              I believe in continuous learning and staying up-to-date with industry trends. When I'm not coding, 
              you can find me exploring new technologies, contributing to open-source projects, or sharing 
              knowledge with the developer community.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {})}
        </div>
      </div>
    </section>;
};
export default About;