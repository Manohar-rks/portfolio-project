import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Python Calculator",
      description: "A feature-rich calculator application built with Python and Tkinter. Includes basic arithmetic operations, scientific functions, and a user-friendly GUI interface.",
      technologies: ["Python", "Tkinter", "GUI Development"],
      image: "/python-calculator.jpg",
      githubUrl: "https://github.com/Manohar-rks"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and modern design built with React and Tailwind CSS.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      image: "/portfolio-website.jpg",
      githubUrl: "https://github.com/Manohar-rks"
    },
    {
      title: "Password Generator",
      description: "A secure password generator with customizable options for length, character types, and complexity. Built with modern web technologies for enhanced security.",
      technologies: ["JavaScript", "HTML", "CSS", "Security"],
      image: "/password-generator.jpg",
      githubUrl: "https://github.com/Manohar-rks"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-6 rounded-full bg-muted">
                    <Github className="h-16 w-16 text-muted-foreground" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button size="sm" variant="outline" asChild className="w-full">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;