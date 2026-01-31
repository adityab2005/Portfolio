import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "< System.Initialize />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl md:text-6xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        {text}
        <span className="animate-pulse cursor-block inline-block w-3 h-8 md:h-12 bg-white ml-2"></span>
      </div>
      
      <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mt-4">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-full bg-blue-500"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
