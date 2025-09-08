import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      image: "/placeholder.svg"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
      image: "/placeholder.svg"
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive social media analytics dashboard with real-time data visualization and performance metrics.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Chart.js"],
      image: "/placeholder.svg"
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course management, student progress tracking, and interactive learning modules.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "/placeholder.svg"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and modern design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "/placeholder.svg"
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
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;