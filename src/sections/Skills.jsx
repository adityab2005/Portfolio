import Section from "../components/ui/Section";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  LineChart, 
  Terminal, 
  Cpu, 
  Globe, 
  Layout, 
  Server, 
  Layers, 
  Braces, 
  FileType, 
  Box,
  Cloud,
  Container,
  GitBranch,
  Workflow
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    icon: Code2,
    color: "text-blue-400",
    barColor: "#60A5FA", // Blue-400
    skills: [
      { name: "React.js", level: 90, icon: Globe },
      { name: "Next.js", level: 85, icon: Layers },
      { name: "JavaScript", level: 88, icon: Braces },
      { name: "HTML5", level: 95, icon: FileType },
      { name: "CSS3", level: 92, icon: Layout },
      { name: "Tailwind CSS", level: 85, icon: Box }
    ]
  },
  {
    title: "Backend Development",
    description: "Server-side development and database management",
    icon: Server,
    color: "text-emerald-400",
    barColor: "#34D399", // Emerald-400
    skills: [
      { name: "Node.js", level: 85, icon: Terminal },
      { name: "Python", level: 80, icon: FileType },
      { name: "MongoDB", level: 82, icon: Database },
      { name: "MySQL", level: 78, icon: Database },
      { name: "Firebase", level: 88, icon: Box },
      { name: "REST APIs", level: 85, icon: Globe }
    ]
  },
  {
    title: "Data Science & ML",
    description: "Machine learning and data analysis",
    icon: LineChart,
    color: "text-purple-400",
    barColor: "#A78BFA", // Purple-400
    skills: [
      { name: "Python", level: 80, icon: FileType },
      { name: "TensorFlow", level: 75, icon: Cpu },
      { name: "Jupyter", level: 85, icon: Terminal },
      { name: "NumPy", level: 82, icon: Braces },
      { name: "Matplotlib", level: 78, icon: LineChart }, 
      { name: "R", level: 70, icon: FileType }
    ]
  },
  {
    title: "Databases",
    description: "Scalable data storage and management solutions",
    icon: Database,
    color: "text-cyan-400",
    barColor: "#22D3EE", // Cyan-400
    skills: [
      { name: "MongoDB", level: 82, icon: Database },
      { name: "PostgreSQL", level: 80, icon: Database },
      { name: "MySQL", level: 78, icon: Database },
      { name: "Redis", level: 75, icon: Layers }
    ]
  },
  {
    title: "DevOps & Cloud",
    description: "Infrastructure automation and deployment pipelines",
    icon: Cloud,
    color: "text-pink-400",
    barColor: "#F472B6", // Pink-400
    skills: [
      { name: "AWS", level: 80, icon: Cloud },
      { name: "Docker", level: 85, icon: Container },
      { name: "Kubernetes", level: 75, icon: Box },
      { name: "Git", level: 90, icon: GitBranch },
      { name: "CI/CD", level: 82, icon: Workflow }
    ]
  }
];

const Skills = () => {
  return (
    <Section id="skills">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Technical <span className="text-secondary">Arsenal</span></h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#111] rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors"
          >
            <div className="flex items-start gap-4 mb-8">
              <div className={`p-3 rounded-lg bg-white/5 ${category.color}`}>
                <category.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{category.description}</p>
              </div>
            </div>

            <div className="space-y-6">
              {category.skills.map((skill, i) => (
                <div key={i} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {/* Using a colored dot or simple icon for list items to keep it clean */}
                      <skill.icon size={16} className="text-white/60 group-hover:text-white transition-colors" />
                      <span className="text-white/80 font-medium group-hover:text-white transition-colors">{skill.name}</span>
                    </div>
                    <span className="text-sm text-white/40 group-hover:text-white/80 transition-colors">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full rounded-full relative overflow-hidden"
                      style={{ backgroundColor: category.barColor }} 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                      viewport={{ once: true }}
                    >
                        {/* Shimmer effect */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
