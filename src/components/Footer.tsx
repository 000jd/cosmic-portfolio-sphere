import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-space-darker/80 backdrop-blur-sm border-t border-space-purple/20 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-pixel text-xl font-bold text-space-purple mb-2">JOYDIP DAS</h3>
          <p className="font-pixel text-gray-400">Engineer ~ Student</p>
        </div>
        <div className="flex gap-6">
          <a
            href="tel:7005475598"
            className="text-gray-400 hover:text-space-purple transition-colors"
            aria-label="Phone"
          >
            <Phone className="h-6 w-6" />
          </a>
          <a
            href="mailto:joydip@tutanota.com"
            className="text-gray-400 hover:text-space-purple transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-space-purple transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-space-purple transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <div className="text-center md:text-right">
          <p className="font-pixel text-gray-400">© 2024 JOYDIP DAS</p>
          <p className="font-pixel text-gray-500 text-sm">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};