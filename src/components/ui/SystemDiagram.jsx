import { motion } from "framer-motion";

// SVGs for schematic components
const DatabaseIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
);

const ServerIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
);

const GlobeIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

const BrainIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
);

const SystemDiagram = () => {
    return (
        <div className="w-full bg-[#0a0a0a] rounded-xl p-8 border border-white/5 relative overflow-hidden group">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 max-w-3xl mx-auto h-[300px]">
                
                {/* Client Layer */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col items-center gap-2 group/node"
                >
                    <div className="w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover/node:bg-blue-500/20 transition-all cursor-pointer relative z-20">
                        <GlobeIcon className="w-8 h-8" />
                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 border border-white/10 px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover/node:opacity-100 transition-opacity">
                            Next.js 14 Client
                        </div>
                    </div>
                    <span className="text-xs font-mono text-white/50">Client</span>
                </motion.div>

                {/* Connection Line 1 */}
                <div className="md:h-0.5 md:w-full w-0.5 h-16 bg-gradient-to-r from-blue-500/50 to-purple-500/50 relative overflow-hidden">
                    <motion.div 
                        className="absolute inset-0 bg-white blur-[2px]"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    />
                </div>

                {/* API Gateway */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center gap-2 group/node"
                >
                    <div className="w-20 h-20 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover/node:bg-purple-500/20 transition-all cursor-pointer relative z-20">
                        <ServerIcon className="w-10 h-10" />
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 border border-white/10 px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover/node:opacity-100 transition-opacity">
                            Node.js API Gateway
                        </div>
                    </div>
                    <span className="text-xs font-mono text-white/50">API Gateway</span>
                </motion.div>

                {/* Connection Line 2 Split */}
                <div className="flex-1 flex flex-col md:flex-row justify-center items-center relative">
                    {/* Horizontal to vertical split */}
                     <div className="hidden md:block w-full h-0.5 bg-white/10 relative">
                        <motion.div 
                            className="absolute inset-0 bg-white/50 blur-[1px]"
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.5 }}
                        />
                     </div>
                     <div className="md:absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-16 md:gap-24 h-full md:grid md:grid-rows-2 w-full md:w-auto mt-8 md:mt-0">
                         {/* Connecting vertical lines handled by layout or SVGs usually, simplifying here with flex gap */}
                     </div>
                </div>

                {/* Backend Nodes Container */}
                <div className="flex md:flex-col gap-8 md:gap-12">
                     {/* ML Service */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center gap-2 group/node"
                    >
                        <div className="w-16 h-16 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)] group-hover/node:bg-green-500/20 transition-all cursor-pointer relative z-20">
                            <BrainIcon className="w-8 h-8" />
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 border border-white/10 px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover/node:opacity-100 transition-opacity">
                                Python ML Service
                            </div>
                        </div>
                        <span className="text-xs font-mono text-white/50">AI Engine</span>
                    </motion.div>

                     {/* DB Service */}
                     <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center gap-2 group/node"
                    >
                        <div className="w-16 h-16 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.2)] group-hover/node:bg-yellow-500/20 transition-all cursor-pointer relative z-20">
                            <DatabaseIcon className="w-8 h-8" />
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 border border-white/10 px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover/node:opacity-100 transition-opacity">
                                MongoDB Cluster
                            </div>
                        </div>
                        <span className="text-xs font-mono text-white/50">Database</span>
                    </motion.div>
                </div>
            </div>
            
            <div className="absolute bottom-4 right-4 text-[10px] text-white/20 font-mono">
                System Architecture v1.0
            </div>
        </div>
    );
};

export default SystemDiagram;
