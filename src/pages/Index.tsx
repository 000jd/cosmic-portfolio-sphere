import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SpaceBackground } from "@/components/SpaceBackground";
import { SpaceParallax } from "@/components/SpaceParallax";
import { InstagramFeed } from "@/components/InstagramFeed";

const Index = () => {
  return (
    <div className="bg-space-dark text-white min-h-screen relative">
      <SpaceBackground />
      <SpaceParallax />
      <div className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <InstagramFeed />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;