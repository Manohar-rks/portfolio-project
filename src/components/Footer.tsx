import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Manohar.R.K.S</h3>
            <p className="text-muted-foreground mb-6">
              Creating exceptional digital experiences through innovative web development and beautiful design.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:manohar.r.k.s.139@gmail.com"
                className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>mail.manohar.r.k.s.139@gmail.com</p>
              <p>contact no: +919390557599</p>
              <p>Hyderabad, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Manohar.r.k.s
          </p>
          <p className="text-muted-foreground mt-2 md:mt-0">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;