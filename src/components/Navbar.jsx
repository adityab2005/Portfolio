import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import Magnetic from "./ui/Magnetic";
import HackerText from "./ui/HackerText";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-bold tracking-tighter cursor-pointer hover:text-primary transition-colors flex items-center gap-1"
        >
          <HackerText text="Adi" />
          <span className="text-primary">.</span>
        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Magnetic key={link.name}>
                <Link
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-primary font-medium"
                className="text-white/70 hover:text-white cursor-pointer transition-colors text-sm uppercase tracking-wider px-2 py-4" // added padding for better magnetic feel
                >
                {link.name}
                </Link>
            </Magnetic>
          ))}
          <Magnetic>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors block p-2"
              >
                <Github size={20} />
              </a>
          </Magnetic>
        </div>


        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-white/80 hover:text-primary transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex space-x-6 pt-4">
                <a href="#" className="text-white/60 hover:text-primary">
                  <Github size={24} />
                </a>
                <a href="#" className="text-white/60 hover:text-primary">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-white/60 hover:text-primary">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
