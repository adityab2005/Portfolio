import Section from "../components/ui/Section";
import { motion } from "framer-motion";
import { Coffee, Book, Target } from "lucide-react";

const Now = () => {
    return (
        <Section className="py-10 border-t border-white/5">
            <div className="max-w-3xl mx-auto px-6">
                <div className="flex items-center gap-3 mb-6">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <h2 className="text-xl font-bold uppercase tracking-widest text-white/80">Now</h2>
                </div>
                
                <div className="space-y-4">
                    <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-4 text-white/60 hover:text-white transition-colors p-4 hover:bg-white/5 rounded-lg"
                    >
                        <Target className="text-primary" />
                        <span>Preparing for extensive System Design interviews.</span>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-4 text-white/60 hover:text-white transition-colors p-4 hover:bg-white/5 rounded-lg"
                    >
                        <Book className="text-secondary" />
                        <span>Reading "Designing Data-Intensive Applications" by Martin Kleppmann.</span>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-4 text-white/60 hover:text-white transition-colors p-4 hover:bg-white/5 rounded-lg"
                    >
                        <Coffee className="text-yellow-500" />
                        <span>Solving 3 DSA problems daily.</span>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default Now;
