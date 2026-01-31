import { useState } from "react";
import Section from "../components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import Spotlight from "../components/ui/Spotlight";

const categories = {

  Programming: ["JavaScript", "Python", "Java", "C++", "TypeScript"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Redux", "HTML5/CSS3"],
  Backend: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL"],
  DevOps: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"],
  "AI / ML": ["TensorFlow", "Pandas", "NumPy", "Scikit-learn"]
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Programming");

  return (
    <Section id="skills">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Technical <span className="text-secondary">Arsenal</span></h2>

      <div className="flex flex-col items-center">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeTab === category
                  ? "bg-secondary text-white border-secondary shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                  : "bg-transparent text-white/50 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="w-full max-w-4xl min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              {categories[activeTab].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                    <Spotlight className="h-full w-full p-6 flex items-center justify-center text-lg font-medium text-white/80 hover:text-secondary transition-colors cursor-default">
                        {skill}
                    </Spotlight>
                </motion.div>
              ))}
            </motion.div>

          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
