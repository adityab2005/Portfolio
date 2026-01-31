import { useState } from "react";
import Section from "../components/ui/Section";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { X, Github, ExternalLink, Activity, Server, Box, Zap, Maximize2 } from "lucide-react";
import SystemDiagram from "../components/ui/SystemDiagram";
import learnDevImg from "../public/learndev.jpeg";
import taskifyImg from "../public/taskify.jpeg";

const projects = [
  {
    title: "LearnDev",
    subtitle: "AI-Powered Learning Platform",
    tags: ["Next.js", "Python", "TensorFlow", "FastAPI"],
    description: "An intelligent education platform that personalizes learning paths using Machine Learning algorithms. It adapts to student performance in real-time.",
    architecture: "Microservices architecture utilizing Next.js for the frontend client, Node.js for the API Gateway, and a dedicated Python FastAPI service for ML inference. Communications are handled via REST.",
    challenges: "Optimizing model inference time to sub-200ms for real-time recommendations and handling concurrent user sessions with stateless JWT authentication.",
    feature: "System Diagram",
    complexity: "Advanced",
    github: "#",
    live: "https://learn-dev-seven.vercel.app/",
    color: "from-blue-500 to-cyan-400",
    image: learnDevImg
  },
  {
    title: "Taskify Pro",
    subtitle: "Real-Time Team Task Manager",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    description: "A collaborative workspace tool featuring real-time updates, drag-and-drop kanban boards, and team chat. Designed for high availability.",
    architecture: "Event-driven architecture using Socket.io for bi-directional communication. Implemented Redis for caching frequent task updates and presence data.",
    challenges: "Ensuring data consistency across multiple connected clients (Optimistic UI updates) and handling reconnection logic gracefully.",
    complexity: "Intermediate",
    github: "#",
    live: "https://taskify-frontend-sage.vercel.app/",
    color: "from-purple-500 to-pink-500",
    image: taskifyImg
  },
  {
    title: "Campus Connect",
    subtitle: "College Management System",
    tags: ["MERN Stack", "Redux", "AWS"],
    description: "Comprehensive ERP solution for digitalizing campus operations, from attendance to grade management. Role-based access for 5 user types.",
    architecture: "Monolithic MERN architecture deployed on AWS EC2 with auto-scaling groups. S3 is used for document storage and CloudFront for CDN.",
    challenges: "Designing a robust Role-Based Access Control (RBAC) middleware and optimizing database queries for complex reporting dashboards.",
    complexity: "Intermediate",
    github: "#",
    live: "#",
    color: "from-green-400 to-emerald-600",
    image: null
  }
];

const ProjectCard = ({ project, index, onClick }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    // Increased perspective and rotation for better 3D effect
    const rotateX = useTransform(y, [0, 400], [5, -5]); 
    const rotateY = useTransform(x, [0, 400], [-5, 5]);

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }
    
    function handleMouseLeave() {
        x.set(200); 
        y.set(200);
    }

    const badgeColors = {
        "Advanced": "bg-red-500/10 text-red-500 border-red-500/20",
        "Intermediate": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
        "Beginner": "bg-green-500/10 text-green-500 border-green-500/20"
    };

    return (
        <motion.div
            layoutId={`card-${index}`}
            onClick={onClick}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            style={{ 
                rotateX, 
                rotateY, 
                transformStyle: "preserve-3d" 
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-96 cursor-pointer rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all perspective-1000 overflow-hidden"
        >
             {/* Image Background */}
             <div className="absolute inset-0 z-0">
                {project.image && (
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-110"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
             </div>
             
             {/* Complexity Badge */}
             <div className="absolute top-6 right-6 z-20 transform translate-z-20">
                 <span className={`text-xs px-2 py-1 rounded border backdrop-blur-md ${badgeColors[project.complexity] || "text-white bg-white/10 border-white/10"}`}>
                    {project.complexity}
                 </span>
             </div>

             {/* Click to expand tooltip */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/80 backdrop-blur-sm border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl transform translate-z-30">
                    <Maximize2 size={14} />
                    <span>Click to expand</span>
                </div>
             </div>

             <div className="absolute inset-0 p-8 flex flex-col justify-end transform-gpu z-20" style={{ transform: "translateZ(20px)" }}>
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-primary transition-colors drop-shadow-lg">{project.title}</h3>
                    <p className="text-white/80 font-medium mb-4 line-clamp-1 drop-shadow-md">{project.subtitle}</p>
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/10 text-white">{tag}</span>
                      ))}
                    </div>
                </div>
             </div>
        </motion.div>
    )
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Section id="projects" className="bg-background relative z-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Featured <span className="text-primary">Projects</span></h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
        {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} onClick={() => setSelectedProject({ ...project, index })} />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            <motion.div
              layoutId={`card-${selectedProject.index}`}
              className="w-full max-w-4xl bg-[#111] rounded-2xl border border-white/10 overflow-hidden relative z-10 max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl"
            >
              <div className="h-64 relative group">
                {selectedProject.image ? (
                    <img src={selectedProject.image} alt={selectedProject.title} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color}`} />
                )}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors z-20 border border-white/10"
                >
                  <X size={24} />
                </button>

                <div className="absolute bottom-0 left-0 p-8 w-full z-10 flex items-end justify-between">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">{selectedProject.title}</h2>
                        <p className="text-white/80 text-lg drop-shadow-md">{selectedProject.subtitle}</p>
                    </div>
                </div>
              </div>

              <div className="p-8 space-y-8">
                
                {selectedProject.feature === "System Diagram" && (
                     <div className="mb-8">
                         <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                             <Activity size={20} className="text-primary" /> Live Architecture
                         </h4>
                         <SystemDiagram />
                     </div>
                )}

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                            <Box size={20} className="text-blue-400" /> Project Overview
                        </h4>
                        <p className="text-white/60 leading-relaxed text-sm">{selectedProject.description}</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                            <Zap size={20} className="text-yellow-400" /> Key Challenges
                        </h4>
                        <p className="text-white/60 leading-relaxed text-sm">{selectedProject.challenges}</p>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                         <Server size={20} className="text-purple-400" /> Technical Architecture
                    </h4>
                    <p className="text-white/60 leading-relaxed text-sm bg-white/5 p-4 rounded-lg border border-white/5 font-mono">
                        {selectedProject.architecture}
                    </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex gap-4">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors font-medium border border-white/10">
                        <Github size={20} /> View Source
                    </a>
                    {selectedProject.live !== "#" ? (
                        <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 rounded-lg transition-colors font-medium text-white shadow-lg shadow-blue-500/20">
                            <ExternalLink size={20} /> Live Demo
                        </a>
                    ) : (
                        <button disabled className="flex-1 py-3 flex items-center justify-center gap-2 bg-white/5 text-white/30 rounded-lg font-medium border border-white/5 cursor-not-allowed">
                            <ExternalLink size={20} /> Coming Soon
                        </button>
                    )}
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
