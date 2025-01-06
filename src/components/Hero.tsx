import { Github, Linkedin, Mail, Phone, Instagram, Link2 } from "lucide-react";
import { Button } from "./ui/button";
import { HeroAnimation } from "./HeroAnimation";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-space-dark">
      {/* Background stars */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-space-purple/20 via-space-dark to-space-darker opacity-50" />
      
      {/* 3D Animation */}
      <div className="absolute inset-0">
        <HeroAnimation />
      </div>
      
      {/* Content container */}
      <div className="relative z-10 text-center p-8">
        <div className="animate-slide-up backdrop-blur-sm bg-black/20 p-8 rounded-lg">
          <h1 className="font-pixel text-4xl md:text-6xl font-bold mb-4 text-white/90 tracking-wider">
            JOYDIP DAS
          </h1>
          <p className="font-pixel text-lg md:text-2xl text-white/80 mb-8 tracking-wide">
            Engineer ~ Student
          </p>
          
          {/* Contact buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              onClick={() => window.open("tel:7005475598")}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Me
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              onClick={() => window.open("mailto:joydip@tutanota.com")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              onClick={() => window.open("https://github.com/000jd")}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              onClick={() => window.open("https://linkedin.com/in/joydip-das-61ab731b5/")}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              onClick={() => window.open("https://www.instagram.com/joydipdas856/")}
            >
              <Instagram className="mr-2 h-4 w-4" />
              Instagram
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              onClick={() => window.open("000jd.hashnode.dev")}
            >
              <Link2 className="mr-2 h-4 w-4" />
              Blog
            </Button>
          </div>
          
          {/* Resume button */}
          <Button
            className="bg-space-purple hover:bg-space-purple/80 text-white px-8 py-6 rounded-full animate-float"
            onClick={() => window.open("https://drive.google.com/file/d/1UaJp3k3enOpESBkDhGcc7oomPyc43jR6/view?usp=sharing")}
          >
            Download Resume
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-space-darker to-transparent" />
    </div>
  );
};