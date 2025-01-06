import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

export const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    institution: 'ICFAI University, Tripura',
    type: 'university'
  },
  {
    degree: 'Higher Secondary',
    institution: 'Kendriya Vidyalaya Agartala No. 1, Kunjaban',
    type: 'school'
  }
];

export const Education = () => {
  return (
    <section className="py-12 px-4" id="education">
      <h2 className="font-pixel text-4xl font-bold text-center mb-12 text-space-purple animate-glow">
        Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {education.map((edu, index) => (
          <Card key={index} className="bg-space-darker/50 backdrop-blur-sm border-space-purple/20 hover:border-space-purple/50 transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center gap-2">
                {edu.type === 'university' ? (
                  <GraduationCap className="w-6 h-6 text-space-purple" />
                ) : (
                  <School className="w-6 h-6 text-space-purple" />
                )}
                <CardTitle className="font-pixel text-space-purple group-hover:text-space-cyan transition-colors">
                  {edu.degree}
                </CardTitle>
              </div>
              {edu.field && (
                <CardDescription className="font-pixel text-gray-400">
                  {edu.field}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <p className="font-pixel text-sm text-gray-400">{edu.institution}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};