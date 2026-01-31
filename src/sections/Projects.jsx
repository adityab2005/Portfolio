import { useState } from "react";
import Section from "../components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Layers, Code, Zap } from "lucide-react";

const projects = [
  {
    title: "LearnDev",
    subtitle: "AI-Powered Learning Platform",
    tags: ["Next.js", "Python", "TensorFlow", "FastAPI"],
    description: "An intelligent education platform that personalizes learning paths using Machine Learning algorithms.",
    architecture: "Microservices architecture with Next.js frontend and Python-based AI inference engine.",
    challenges: "Optimizing model inference time for real-time recommendations and handling concurrent user sessions.",
    github: "#",
    live: "#",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Taskify Pro",
    subtitle: "Real-Time Team Task Manager",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    description: "A collaborative workspace tool featuring real-time updates, drag-and-drop kanban boards, and team chat.",
    architecture: "Event-driven architecture using Socket.io for bi-directional communication.",
    challenges: "Ensuring data consistency across multiple connected clients in real-time without latency.",
    github: "#",
    live: "#",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Campus Connect",
    subtitle: "College Management System",
    tags: ["MERN Stack", "Redux", "AWS"],
    description: "Comprehensive ERP solution for digitalizing campus operations, from attendance to grade management.",
    architecture: "Monolithic MERN architecture deployed on AWS EC2 with S3 for document storage.",
    challenges: "Designing a role-based access control (RBAC) system for thousands of students and faculty members.",
    github: "#",
    live: "#",
    color: "from-green-400 to-emerald-600"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Section id="projects" className="bg-background">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Featured <span className="text-primary">Projects</span></h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            layoutId={`card-${index}`}
            onClick={() => setSelectedProject({ ...project, index })}
            className="group relative h-96 cursor-pointer rounded-2xl overflow-hidden glass hover:bg-white/10 transition-colors border border-white/10"
          >
             {/* Gradient Overlay */}
             <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
             
             <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-primary font-medium mb-4">{project.subtitle}</p>
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-3 py-1 bg-white/10 rounded-full">{tag}</span>
                      ))}
                    </div>
                </div>
             </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={`card-${selectedProject.index}`}
              className="w-full max-w-2xl bg-background-light rounded-2xl border border-white/10 overflow-hidden relative z-10 max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <div className={`h-40 bg-gradient-to-r ${selectedProject.color} p-8 flex items-end relative`}>
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                  className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
                >
                  <X size={24} />
                </button>
                <div>
                   <h2 className="text-4xl font-bold text-white">{selectedProject.title}</h2>
                   <p className="text-white/80">{selectedProject.subtitle}</p>
                </div>
              </div>

              <div className="p-8 space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                    <Zap size={20} /> Overview
                  </h4>
                  <p className="text-white/70 leading-relaxed">{selectedProject.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-lg font-semibold text-secondary mb-3 flex items-center gap-2">
                            <Layers size={20} /> Architecture
                        </h4>
                        <p className="text-white/60 text-sm">{selectedProject.architecture}</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-pink-500 mb-3 flex items-center gap-2">
                            <Code size={20} /> Key Challenges
                        </h4>
                        <p className="text-white/60 text-sm">{selectedProject.challenges}</p>
                    </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex gap-4">
                    <a href={selectedProject.github} className="flex-1 py-3 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors font-medium border border-white/10">
                        <Github size={20} /> View Source
                    </a>
                    <a href={selectedProject.live} className="flex-1 py-3 flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 rounded-lg transition-colors font-medium text-white shadow-lg shadow-blue-500/20">
                        <ExternalLink size={20} /> Live Demo
                    </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;
