import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    const handleMouseEnter = () => setCursorVariant("text");
    const handleMouseLeave = () => setCursorVariant("default");

    const targets = document.querySelectorAll("a, button, .cursor-pointer");
    targets.forEach(target => {
        target.addEventListener("mouseenter", handleMouseEnter);
        target.addEventListener("mouseleave", handleMouseLeave);    
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      targets.forEach(target => {
        target.removeEventListener("mouseenter", handleMouseEnter);
        target.removeEventListener("mouseleave", handleMouseLeave);    
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "transparent",
      border: "1px solid rgba(59, 130, 246, 0.5)",
    },
    text: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      border: "1px solid rgba(59, 130, 246, 0)",
      mixBlendMode: "screen"
    }
  };

  const centerVariants = {
    default: {
        x: mousePosition.x - 4,
        y: mousePosition.y - 4,
    },
    text: {
        x: mousePosition.x - 4,
        y: mousePosition.y - 4,
        opacity: 0
    }
  }

  return (
    <>
        <motion.div
            className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[999]"
            variants={variants}
            animate={cursorVariant}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
        <motion.div 
            className="hidden md:block fixed top-0 left-0 w-2 h-2 bg-blue-400 rounded-full pointer-events-none z-[999]"
            variants={centerVariants}
            animate={cursorVariant}
            transition={{ type: "tween", duration: 0 }}
        />
    </>
  );
};

export default CustomCursor;
