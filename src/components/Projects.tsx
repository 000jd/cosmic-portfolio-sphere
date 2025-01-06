import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Globe } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Flower ResNet Image Classifier",
    description: "Built a custom PyTorch ResNet model for accurate classification of 299 flower varieties. Achieved 87.84% training accuracy and 75.30% validation accuracy and Deployed a user-friendly Streamlit app for interactive model use.",
    tools: "PyTorch, ResNet, Streamlit",
    github: "https://github.com/000jd/FlowerResNet",
    demo: "https://flowerresnet.streamlit.app/",
  },
  {
    title: "Plant Diseases Classifier",
    description: "Developed a PyTorch ResNet model to effectively classify plant diseases. Processed a large dataset of 70,295 RGB images of healthy and diseased crop leaves. Achieved high accuracy in disease identification.",
    tools: "PyTorch, ResNet, Computer Vision",
    github: "https://github.com/000jd/Plant-Diseases",
    demo: "https://plant-diseases.streamlit.app/",
  },
  {
    title: "Depression Categories Datection with BERT",
    description: "Employed BERT transformers to classify 5 distinct depression classes. Achieved 94.59% training accuracy and 85.99% validation accuracy. Demonstrated the model\'s potential for mental health assessment.",
    tools: "BERT, Transformers, NLP",
    github: "https://github.com/000jd/",
  },
  {
    title: "PandasChoice Django RestAPI",
    description: "Designed and implemented a RESTful API using Django REST Framework. Powered a fully functional e-commerce platform specializing in bamboo crafts and bonsai products. Enabled efficient product catalog management, user registration, shopping cart, and order processing.",
    tools: "Django, REST API, PostgreSQL",
    github: "https://github.com/000jd/thepandaschoice-django-backend",
  },
  {
    title: "Accident Detection YOLOv8",
    description: "This project utilizes YOLOv8 object detection model combined with Streamlit to perform real-time accident detection in videos. The application provides a user-friendly interface to upload videos, detect objects, and visualize the detection results.",
    tools: "YOLOv8, Streamlit, Computer Vision",
    github: "https://github.com/000jd/Accident-Detection-yolov8-streamlit",
  },
];

export const Projects = () => {
  return (
    <section className="py-12 px-4" id="projects">
      <h2 className="font-pixel text-4xl font-bold text-center mb-12 text-space-purple animate-glow">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Card key={index} className="bg-space-darker/50 backdrop-blur-sm border-space-purple/20 hover:border-space-purple/50 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="font-pixel text-space-purple group-hover:text-space-cyan transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="font-pixel text-gray-400">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-pixel text-sm text-gray-400 mb-4">{project.tools}</p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent border-space-purple/50 hover:border-space-purple hover:bg-space-purple/10 font-pixel"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="mr-2" />
                  GitHub
                </Button>
                {project.demo && (
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent border-space-cyan/50 hover:border-space-cyan hover:bg-space-cyan/10 font-pixel"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <Globe className="mr-2" />
                    Demo
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};