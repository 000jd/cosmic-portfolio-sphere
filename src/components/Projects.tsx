import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Globe, Package } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Flower ResNet Image Classifier",
    description: "Custom PyTorch ResNet for classifying 299 flower varieties",
    tools: "PyTorch, ResNet, Streamlit",
    github: "https://github.com/yourusername/flower-classifier",
    demo: "https://flower-classifier-demo.com",
  },
  {
    title: "Plant Diseases Classifier",
    description: "PyTorch ResNet for classifying plant diseases in 70,295 RGB images",
    tools: "PyTorch, ResNet, Computer Vision",
    github: "https://github.com/yourusername/plant-diseases",
    demo: "https://plant-diseases-demo.com",
  },
  {
    title: "Depression Classification with BERT",
    description: "BERT transformers to classify 5 depression classes",
    tools: "BERT, Transformers, NLP",
    github: "https://github.com/yourusername/depression-classifier",
    demo: "https://depression-classifier-demo.com",
  },
  {
    title: "PandasChoice Django RestAPI",
    description: "RESTful API for an e-commerce platform",
    tools: "Django, REST API, PostgreSQL",
    github: "https://github.com/yourusername/pandaschoice-api",
    demo: "https://pandaschoice-api-demo.com",
  },
  {
    title: "Accident Detection YOLOv8",
    description: "Real-time accident detection in videos",
    tools: "YOLOv8, Streamlit, Computer Vision",
    github: "https://github.com/yourusername/accident-detection",
    demo: "https://accident-detection-demo.com",
  },
];

export const Projects = () => {
  return (
    <section className="py-16 px-4" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12 text-space-purple animate-glow">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Card key={index} className="bg-space-darker/50 backdrop-blur-sm border-space-purple/20 hover:border-space-purple/50 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="text-space-purple group-hover:text-space-cyan transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400 mb-4">{project.tools}</p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent border-space-purple/50 hover:border-space-purple hover:bg-space-purple/10"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="mr-2" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent border-space-cyan/50 hover:border-space-cyan hover:bg-space-cyan/10"
                  onClick={() => window.open(project.demo, "_blank")}
                >
                  <Globe className="mr-2" />
                  Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};