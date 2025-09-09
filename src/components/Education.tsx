import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B. Tech in Computer Science & Engineering",
      institution: "Ideal Institute of Technology",
      duration: "2024 - 2028",
      status: "Pursuing Currently",
      icon: GraduationCap,
      cgpa: null
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College",
      duration: "2022 - 2024",
      status: "Completed",
      icon: Award,
      cgpa: "8.2 CGPA"
    },
    {
      degree: "Class X",
      institution: "Prathibha High School",
      duration: "2021 - 2022",
      status: "Completed",
      icon: Award,
      cgpa: "7.8 CGPA"
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and educational achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((education, index) => {
            const IconComponent = education.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {education.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight">{education.degree}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <p className="font-medium text-primary">{education.institution}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        education.status === "Pursuing Currently" 
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400" 
                          : "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                      }`}>
                        {education.status}
                      </span>
                      {education.cgpa && (
                        <span className="text-sm font-semibold text-muted-foreground">
                          {education.cgpa}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;