import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    const element = document.getElementById('resume-content');
    if (element) {
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Reddy Krishna Satya Manohar - Resume</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; color: #333; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px; }
            .name { font-size: 28px; font-weight: bold; margin-bottom: 5px; }
            .title { font-size: 18px; color: #666; margin-bottom: 10px; }
            .contact { font-size: 14px; }
            .section { margin: 25px 0; }
            .section-title { font-size: 20px; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid #ccc; padding-bottom: 5px; }
            .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
            .skill-category { margin-bottom: 15px; }
            .skill-title { font-weight: bold; margin-bottom: 5px; }
            .project { margin-bottom: 20px; }
            .project-title { font-weight: bold; margin-bottom: 5px; }
            .project-tech { font-style: italic; color: #666; margin-bottom: 5px; }
            ul { padding-left: 20px; }
            li { margin-bottom: 3px; }
            @media print { body { margin: 20px; } }
          </style>
        </head>
        <body>
          ${element.innerHTML}
        </body>
        </html>
      `;
      
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Reddy_Krishna_Satya_Manohar_Resume.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-center mb-6 no-print">
          <h1 className="text-2xl font-bold">My Resume</h1>
          <div className="flex gap-2">
            <Button onClick={handleDownload} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download HTML
            </Button>
            <Button onClick={handlePrint} variant="outline" className="flex items-center gap-2">
              <Printer className="h-4 w-4" />
              Print/Save as PDF
            </Button>
          </div>
        </div>

        <div id="resume-content" className="bg-white text-black p-8 shadow-lg print:shadow-none print:p-0">
          {/* Header */}
          <div className="header text-center mb-8 border-b-2 border-black pb-6">
            <div className="name text-3xl font-bold mb-2">REDDY KRISHNA SATYA MANOHAR</div>
            <div className="title text-lg mb-3 text-gray-600">Full Stack Developer & Ethical Hacker</div>
            <div className="contact text-sm">
              📧 manohar.r.k.s.139@gmail.com | 🔗 GitHub: github.com/Manohar-rks
            </div>
          </div>

          {/* Professional Summary */}
          <div className="section mb-6">
            <div className="section-title text-xl font-bold mb-4 border-b border-gray-300 pb-2">PROFESSIONAL SUMMARY</div>
            <p className="text-sm leading-relaxed">
              Passionate Computer Science Engineering student with expertise in full-stack development and ethical hacking. 
              Proficient in modern web technologies including React, TypeScript, Node.js, and Python. Committed to writing 
              clean, maintainable code and creating exceptional digital experiences. Strong foundation in both frontend and 
              backend development with a focus on security and performance optimization.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="section mb-6">
            <div className="section-title text-xl font-bold mb-4 border-b border-gray-300 pb-2">TECHNICAL SKILLS</div>
            <div className="skills-grid grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="skill-category">
                <div className="skill-title font-bold mb-1">Frontend Development:</div>
                <div className="text-sm">React (95%), TypeScript (90%), Next.js (85%), Tailwind CSS (92%), Vue.js (80%), HTML5, CSS3, JavaScript</div>
              </div>
              <div className="skill-category">
                <div className="skill-title font-bold mb-1">Backend Development:</div>
                <div className="text-sm">Node.js (88%), Python (85%), PostgreSQL (82%), MongoDB (80%), GraphQL (75%), REST APIs</div>
              </div>
              <div className="skill-category">
                <div className="skill-title font-bold mb-1">Tools & Technologies:</div>
                <div className="text-sm">Git (95%), Docker (78%), AWS (72%), Figma (85%), Jest (80%), Linux, Security Testing</div>
              </div>
              <div className="skill-category">
                <div className="skill-title font-bold mb-1">Core Competencies:</div>
                <div className="text-sm">Clean Code Architecture, Responsive Design, Performance Optimization, Cross-functional Collaboration</div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="section mb-6">
            <div className="section-title text-xl font-bold mb-4 border-b border-gray-300 pb-2">EDUCATION</div>
            <div className="space-y-3">
              <div>
                <div className="font-bold">Bachelor of Technology in Computer Science & Engineering</div>
                <div className="text-sm"><em>Ideal Institute of Technology</em> | 2024 - 2028 (Currently Pursuing)</div>
              </div>
              <div>
                <div className="font-bold">Intermediate (MPC)</div>
                <div className="text-sm"><em>Sri Chaitanya Junior College</em> | 2022 - 2024 | <strong>CGPA: 8.2/10.0</strong></div>
              </div>
              <div>
                <div className="font-bold">Class X</div>
                <div className="text-sm"><em>Prathibha High School</em> | 2021 - 2022 | <strong>CGPA: 7.8/10.0</strong></div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="section mb-6">
            <div className="section-title text-xl font-bold mb-4 border-b border-gray-300 pb-2">PROJECTS</div>
            <div className="space-y-4">
              <div className="project">
                <div className="project-title font-bold">Portfolio Website</div>
                <div className="project-tech text-sm italic text-gray-600 mb-1">React, TypeScript, Tailwind CSS</div>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li>Developed a modern, responsive portfolio website with smooth animations and contemporary design</li>
                  <li>Implemented responsive design principles ensuring optimal user experience across all devices</li>
                  <li>Utilized React hooks and TypeScript for type-safe, maintainable code architecture</li>
                </ul>
              </div>
              
              <div className="project">
                <div className="project-title font-bold">Python Calculator</div>
                <div className="project-tech text-sm italic text-gray-600 mb-1">Python, Tkinter, GUI Development</div>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li>Built a feature-rich calculator application with comprehensive arithmetic and scientific functions</li>
                  <li>Designed intuitive GUI interface using Tkinter for enhanced user experience</li>
                  <li>Implemented error handling and input validation for robust application performance</li>
                </ul>
              </div>
              
              <div className="project">
                <div className="project-title font-bold">Password Generator</div>
                <div className="project-tech text-sm italic text-gray-600 mb-1">JavaScript, HTML5, CSS3, Security</div>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li>Created a secure password generation tool with customizable complexity options</li>
                  <li>Implemented advanced security algorithms for generating cryptographically strong passwords</li>
                  <li>Designed responsive interface with options for length, character types, and security levels</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Core Strengths */}
          <div className="section">
            <div className="section-title text-xl font-bold mb-4 border-b border-gray-300 pb-2">CORE STRENGTHS</div>
            <ul className="text-sm list-disc list-inside space-y-2">
              <li><strong>Clean Code Development:</strong> Writing maintainable, scalable, and efficient code following industry best practices</li>
              <li><strong>Creative Problem Solving:</strong> Crafting innovative solutions with focus on user experience and interface design</li>
              <li><strong>Performance Optimization:</strong> Optimizing applications for speed and performance across all platforms</li>
              <li><strong>Team Collaboration:</strong> Effective communication and collaboration with cross-functional development teams</li>
              <li><strong>Continuous Learning:</strong> Staying current with emerging technologies and industry trends</li>
              <li><strong>Security Focus:</strong> Ethical hacking background with emphasis on secure coding practices</li>
            </ul>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @media print {
            .no-print {
              display: none !important;
            }
            body {
              margin: 0;
              padding: 0;
            }
            #resume-content {
              box-shadow: none !important;
              margin: 0;
              padding: 20px !important;
            }
          }
        `
      }} />
    </div>
  );
};

export default Resume;