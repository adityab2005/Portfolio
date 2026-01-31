import Section from "../components/ui/Section";
import { motion } from "framer-motion";
import { GitCommit, Star, GitBranch, Github as GithubIcon } from "lucide-react";

// Mock data to simulate API response
const repos = [
    { name: "portfolio-v2", description: "Premium, product-grade developer portfolio built with React + Vite.", stars: 12, language: "JavaScript", color: "#f1e05a" },
    { name: "learn-dev-ai", description: "AI-powered learning platform using Next.js and TensorFlow.", stars: 24, language: "TypeScript", color: "#2b7489" },
    { name: "taskify-pro", description: "Real-time task management system with Socket.io.", stars: 8, language: "JavaScript", color: "#f1e05a" },
    { name: "system-design-notes", description: "Comprehensive notes on scalable system architecture.", stars: 45, language: "Markdown", color: "#ffffff" },
];

const GithubActivity = () => {
    return (
        <Section id="activity" className="py-20 bg-black/20">
             <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                        <GithubIcon className="text-white" />
                        Open Source <span className="text-white/40">Activity</span>
                    </h2>
                    <a href="https://github.com" target="_blank" className="text-sm text-primary hover:text-white transition-colors flex items-center gap-1">
                        View Profile <GitBranch size={14} />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {repos.map((repo, index) => (
                        <motion.a
                            href="#"
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group block p-6 bg-white/5 border border-white/5 hover:border-white/20 rounded-xl transition-all hover:bg-white/10"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-lg font-bold text-blue-400 group-hover:text-blue-300 transition-colors flex items-center gap-2">
                                    {repo.name}
                                </h3>
                                <div className="flex items-center gap-1 text-white/40 text-sm">
                                    <Star size={14} />
                                    <span>{repo.stars}</span>
                                </div>
                            </div>
                            <p className="text-white/60 text-sm mb-6 h-10 line-clamp-2">
                                {repo.description}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-white/40">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.color }} />
                                {repo.language}
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Simulated Contribution Graph */}
                <div className="mt-8 p-6 border border-white/5 rounded-xl bg-black/40 overflow-hidden hidden md:block">
                    <div className="flex items-center gap-2 mb-4 text-xs text-white/40">
                        <GitCommit size={14} />
                        <span>Recent Contributions</span>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        {Array.from({ length: 52 }).map((_, i) => (
                            <div key={i} className="flex flex-col gap-1">
                                {Array.from({ length: 7 }).map((_, j) => {
                                    const opacity = Math.random() > 0.7 ? Math.random() : 0.1;
                                    return (
                                        <div 
                                            key={`${i}-${j}`} 
                                            className="w-2.5 h-2.5 rounded-sm bg-primary transition-opacity duration-1000"
                                            style={{ opacity: opacity < 0.2 ? 0.1 : opacity }} 
                                        />
                                    )
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default GithubActivity;
