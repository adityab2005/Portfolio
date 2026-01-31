import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  FileText, 
  Moon, 
  Zap, 
  Command,
  Monitor
} from "lucide-react";

const CommandPalette = ({ isOpen, onClose, setAccentColor }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const actions = [
    { 
        id: "projects", 
        label: "Go to Projects", 
        icon: <Zap size={18} />, 
        action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) 
    },
    { 
        id: "about", 
        label: "Go to About", 
        icon: <Monitor size={18} />, 
        action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) 
    },
    { 
        id: "contact", 
        label: "Contact Me", 
        icon: <Mail size={18} />, 
        action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) 
    },
    { 
        id: "resume", 
        label: "Download Resume", 
        icon: <FileText size={18} />, 
        action: () => window.open("/Aditya_RP.pdf", "_blank") 
    },
    { 
        id: "theme-blue", 
        label: "Theme: Electric Blue", 
        icon: <div className="w-4 h-4 rounded-full bg-blue-500" />, 
        action: () => setAccentColor("59, 130, 246") 
    },
    { 
        id: "theme-purple", 
        label: "Theme: Neon Purple", 
        icon: <div className="w-4 h-4 rounded-full bg-purple-500" />, 
        action: () => setAccentColor("139, 92, 246") 
    },
    { 
        id: "theme-cyan", 
        label: "Theme: Cyber Cyan", 
        icon: <div className="w-4 h-4 rounded-full bg-cyan-400" />, 
        action: () => setAccentColor("34, 211, 238") 
    },
    { 
        id: "github", 
        label: "Open GitHub", 
        icon: <Github size={18} />, 
        action: () => window.open("https://github.com", "_blank") 
    },
    { 
        id: "linkedin", 
        label: "Open LinkedIn", 
        icon: <Linkedin size={18} />, 
        action: () => window.open("https://linkedin.com", "_blank") 
    },
  ];

  const filteredActions = actions.filter(action => 
    action.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            setSelectedIndex(prev => (prev + 1) % filteredActions.length);
        } else if (e.key === "ArrowUp") {
            setSelectedIndex(prev => (prev - 1 + filteredActions.length) % filteredActions.length);
        } else if (e.key === "Enter") {
            filteredActions[selectedIndex]?.action();
            onClose();
        }
    }
    
    if (isOpen) {
        window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="w-full max-w-lg bg-[#111] border border-white/10 rounded-xl shadow-2xl overflow-hidden relative z-10"
          >
            <div className="flex items-center px-4 py-4 border-b border-white/10">
                <Search className="text-white/40 mr-3" size={20} />
                <input
                    autoFocus
                    type="text"
                    placeholder="Type a command or search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 bg-transparent text-white text-lg placeholder-white/20 focus:outline-none"
                    // Prevent closing when clicking input
                    onClick={(e) => e.stopPropagation()} 
                />
                <div className="hidden md:flex items-center gap-1">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded text-white/50">Esc</span>
                </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto py-2 custom-scrollbar">
                {filteredActions.length === 0 ? (
                    <div className="px-4 py-8 text-center text-white/30">
                        No results found.
                    </div>
                ) : (
                    filteredActions.map((action, index) => (
                        <button
                            key={action.id}
                            onClick={() => { action.action(); onClose(); }}
                            onMouseEnter={() => setSelectedIndex(index)}
                            className={`w-full text-left px-4 py-3 flex items-center justify-between transition-colors ${
                                index === selectedIndex ? "bg-primary/10 border-l-2 border-primary" : "text-white/60 hover:text-white"
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                <span className={index === selectedIndex ? "text-primary" : "text-white/40"}>
                                    {action.icon}
                                </span>
                                <span className={index === selectedIndex ? "text-white font-medium" : ""}>
                                    {action.label}
                                </span>
                            </div>
                            {index === selectedIndex && (
                                <span className="text-xs text-white/40">Enter</span>
                            )}
                        </button>
                    ))
                )}
            </div>
            
            <div className="bg-white/5 px-4 py-2 border-t border-white/5 flex items-center justify-between text-xs text-white/30">
                <span>Pro tip: Themes are saved automatically.</span>
                <div className="flex gap-4">
                    <span className="flex items-center gap-1"><Command size={10} /> + K</span>
                    <span className="flex items-center gap-1">↑↓ to navigate</span>
                </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
