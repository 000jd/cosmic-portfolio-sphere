import { Github, Linkedin, Mail, Phone, Instagram, Link2 } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-space-dark">
      {/* Space background with planets */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-space-purple/5 via-space-dark to-space-darker" />
        
        {/* Large planets */}
        <div className="absolute left-3/4 top-1/4 w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-space-purple/30 to-space-cyan/30 animate-float-reverse shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.5)]" />
        <div className="absolute left-1/4 top-3/4 w-[25vw] h-[25vw] rounded-full bg-gradient-to-br from-space-orange/30 to-space-purple/30 animate-float shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.5)]" />
        
        {/* Small orbiting planets */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[20vw] h-[20vw] rounded-full bg-gradient-to-br from-space-orange/40 to-space-purple/40 animate-orbit" />
          <div className="w-[3vw] h-[3vw] rounded-full bg-gradient-to-br from-space-cyan/40 to-space-purple/40 animate-orbit-reverse" 
               style={{ animationDelay: "-5s" }} />
          <div className="w-[5vw] h-[5vw] rounded-full bg-gradient-to-br from-space-purple/40 to-space-orange/40 animate-orbit" 
               style={{ animationDelay: "-10s" }} />
        </div>
      </div>
      
      {/* Asteroid Belt */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-orbit"
            style={{
              width: `${Math.random() * 2 + 1}vw`,
              height: `${Math.random() * 2 + 1}vw`,
              animationDuration: `${15 + Math.random() * 10}s`,
              transform: `rotate(${i * (360 / 30)}deg) translateX(${150 + Math.random() * 50}px)`,
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-600/40 to-gray-800/40 animate-spin-slow" />
          </div>
        ))}
      </div>

      {/* Astronauts floating around */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={`astronaut-${i}`}
          className="absolute animate-float"
          style={{
            top: `${15 + i * 20}%`,
            left: `${10 + i * 18}%`,
            animationDelay: `${i * 0.5}s`,
            zIndex: 1,
          }}
        >
          <div className="text-4xl">👨‍🚀</div>
        </div>
      ))}

      {/* Rockets flying */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={`rocket-${i}`}
          className="absolute animate-float-reverse"
          style={{
            top: `${25 + i * 15}%`,
            right: `${5 + i * 20}%`,
            animationDelay: `${i * 0.7}s`,
            zIndex: 1,
          }}
        >
          <div className="text-4xl">🚀</div>
        </div>
      ))}

      {/* Spaceships */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={`spaceship-${i}`}
          className="absolute animate-float"
          style={{
            top: `${40 + i * 25}%`,
            left: `${30 + i * 25}%`,
            animationDelay: `${i * 1}s`,
            zIndex: 1,
          }}
        >
          <div className="text-4xl">🛸</div>
        </div>
      ))}
      
      {/* Moving meteors */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-meteor"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1}s`,
              transform: `rotate(${45 + Math.random() * 30}deg)`,
            }}
          >
            <div className="w-[70px] h-[1px] bg-gradient-to-r from-transparent via-space-orange to-transparent" />
          </div>
        ))}
      </div>
      
      {/* Stars background */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Content container */}
      <div className="relative z-10 text-center p-8">
        <div className="animate-slide-up backdrop-blur-sm bg-black/40 p-8 rounded-lg border border-space-purple/20">
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
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-space-darker to-transparent" />
    </div>
  );
};