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

        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-12 text-center">My Work Showcase</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group overflow-hidden border-0 bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-10 w-10" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-2">50+</h4>
                <p className="text-muted-foreground font-medium">Projects Completed</p>
              </div>
            </Card>

            <Card className="group overflow-hidden border-0 bg-gradient-to-br from-secondary/5 to-secondary/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-10 w-10" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-2">95%</h4>
                <p className="text-muted-foreground font-medium">Client Satisfaction</p>
              </div>
            </Card>

            <Card className="group overflow-hidden border-0 bg-gradient-to-br from-accent/5 to-accent/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-gradient-to-br from-accent to-accent/80 text-accent-foreground group-hover:scale-110 transition-transform duration-300">
                    <Palette className="h-10 w-10" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-2">3+</h4>
                <p className="text-muted-foreground font-medium">Years Experience</p>
              </div>
            </Card>

            <Card className="group overflow-hidden border-0 bg-gradient-to-br from-destructive/5 to-destructive/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-gradient-to-br from-destructive to-destructive/80 text-destructive-foreground group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-10 w-10" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-2">100+</h4>
                <p className="text-muted-foreground font-medium">Happy Clients</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default About;