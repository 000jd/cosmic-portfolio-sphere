import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

const skills = {
  Languages: [
    "Python",
    "NumPy",
    "Matplotlib",
    "Pandas",
    "Scikit-learn",
    "PyTorch",
  ],
  Development: [
    "Django",
    "Django REST Framework",
    "Streamlit",
    "MySQL",
    "PostgreSQL",
  ],
  Tools: [
    "PyCharm",
    "Jupyter Notebook",
    "Colab",
    "Git",
    "GitHub",
    "Bash",
    "Linux",
  ],
};

export const Skills = () => {
  return (
    <div className="min-h-screen bg-space-dark py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-space-purple to-space-cyan">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <Card
              key={category}
              className="p-6 bg-white/5 backdrop-blur-sm border-space-purple/20 hover:border-space-purple/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center text-space-purple">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-space-purple/20 hover:bg-space-purple/30 text-white animate-float"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};