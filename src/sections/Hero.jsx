
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Download, Mail } from "lucide-react";
import HackerText from "../components/ui/HackerText";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);

  const toRotate = [ "Full Stack Developer", "AI Builder", "Problem Solver" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    } else {
        setDelta(100);
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-10 animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 mb-4 text-sm font-medium border border-primary/30 rounded-full text-primary bg-primary/5"
          >
            Available for Hire
          </motion.div>
          
          <div className="inline-block">
             <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight flex flex-col md:block">
                <span>Hi, I'm </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                    <HackerText text="Aditya" />
                </span>
             </h1>
          </div>


          <h2 className="text-2xl md:text-3xl text-white/70 mb-6 font-light h-[40px]">
             <span className="text-primary">{text}</span><span className="animate-pulse">|</span>
          </h2>


          <p className="text-lg text-white/50 mb-8 max-w-lg leading-relaxed">
            I architect and build premium digital experiences. Merging full-stack engineering with modern AI solutions to solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center gap-2 cursor-pointer"
            >
              View Projects <ArrowRight size={18} />
            </Link>
            
            <a
              href="/Aditya_RP.pdf" 
              download
              className="px-8 py-3 glass hover:bg-white/10 text-white font-medium rounded-lg transition-all flex items-center gap-2"
            >
              Download Resume <Download size={18} />
            </a>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-4 py-3 text-white/70 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Abstract 3D-like representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden md:block relative"
        >
            <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Code Card Window */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl border border-white/10 backdrop-blur-md p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="space-y-3 font-mono text-sm">
                        <div className="flex gap-2">
                            <span className="text-purple-400">const</span>
                            <span className="text-yellow-200">developer</span>
                            <span>=</span>
                            <span className="text-blue-400">{"{"}</span>
                        </div>
                        <div className="pl-4 flex gap-2">
                            <span className="text-white/70">name:</span>
                            <span className="text-green-300">'Aditya'</span>,
                        </div>
                        <div className="pl-4 flex gap-2">
                            <span className="text-white/70">role:</span>
                            <span className="text-green-300">'Full Stack Engineer'</span>,
                        </div>
                        <div className="pl-4 flex gap-2">
                            <span className="text-white/70">skills:</span>
                            <span className="text-blue-400">[</span>
                            <span className="text-green-300">'React'</span>,
                            <span className="text-green-300">'Node'</span>,
                            <span className="text-green-300">'AI'</span>
                            <span className="text-blue-400">]</span>
                        </div>
                        <div className="text-blue-400">{"}"}</div>
                    </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -top-10 -right-10 p-4 glass rounded-lg border border-white/20"
                >
                    <span className="text-2xl">🚀</span>
                </motion.div>
                <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-5 -left-10 p-4 glass rounded-lg border border-white/20"
                >
                    <span className="text-2xl">⚡</span>
                </motion.div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
