import { useState, useRef, useEffect } from "react";
import { X, Terminal as TerminalIcon, Maximize2, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const commands = {
  about: "Full Stack Developer | Rank 1 Diploma Holder | AI Enthusiast",
  skills: "React, Node.js, Python, TensorFlow, Docker, AWS",
  projects: "1. LearnDev (AI Platform)\n2. Taskify Pro (Task Manager)\n3. Campus Connect (ERP)",
  help: "Available commands: about, skills, projects, clear, help",
  contact: "Email: aditya@example.com",
};

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    { type: "output", content: "Welcome to Adi's Terminal. Type 'help' for commands." }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      
      const newHistory = [...history, { type: "input", content: input }];

      if (cmd === "clear") {
        setHistory([]);
      } else if (commands[cmd]) {
        newHistory.push({ type: "output", content: commands[cmd] });
        setHistory(newHistory);
      } else if (cmd !== "") {
        newHistory.push({ type: "error", content: `Command not found: ${cmd}` });
        setHistory(newHistory);
      }
      
      setInput("");
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 p-4 bg-black/80 text-primary border border-primary/30 rounded-full shadow-2xl hover:bg-black z-50 group"
        >
          <TerminalIcon size={24} className="group-hover:rotate-12 transition-transform" />
        </motion.button>
      )}

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-6 right-6 w-full max-w-lg shadow-2xl z-50 rounded-xl overflow-hidden glass border border-white/10"
          >
            {/* Header */}
            <div className="bg-black/80 px-4 py-2 flex items-center justify-between border-b border-white/10">
              <span className="text-xs font-mono text-white/50 flex items-center gap-2">
                <TerminalIcon size={14} /> ADI-TERMINAL ~ bash
              </span>
              <div className="flex gap-2">
                <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
                  <Minimize2 size={14} />
                </button>
                <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-red-400">
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div 
                ref={scrollRef}
                className="bg-black/90 p-4 h-64 overflow-y-auto font-mono text-sm custom-scrollbar"
                onClick={() => document.getElementById('terminal-input')?.focus()}
            >
              <div className="space-y-2">
                {history.map((line, i) => (
                  <div key={i} className={`${line.type === "error" ? "text-red-400" : line.type === "input" ? "text-white" : "text-green-400"}`}>
                    {line.type === "input" && <span className="text-blue-400 mr-2">➜ ~</span>}
                    <span className="whitespace-pre-wrap">{line.content}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center mt-2">
                <span className="text-blue-400 mr-2">➜ ~</span>
                <input
                  id="terminal-input"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  className="bg-transparent border-none outline-none text-white w-full"
                  autoFocus
                  autoComplete="off"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Terminal;
