import Section from "../components/ui/Section";
import { motion } from "framer-motion";
import { Lightbulb, Zap, Search, Box } from "lucide-react";
import Spotlight from "../components/ui/Spotlight";

const philosophies = [
  {
    icon: <Search size={24} className="text-blue-400" />,
    title: "Root Cause Analysis",
    description: "I don't just patch bugs. I trace stacks, analyze logs, and understand the 'why' before writing a single line of fix code."
  },
  {
    icon: <Zap size={24} className="text-yellow-400" />,
    title: "Performance First",
    description: "O(n) over O(n²) always. I obsess over render cycles, bundle sizes, and database query optimization."
  },
  {
    icon: <Box size={24} className="text-purple-400" />,
    title: "System Thinking",
    description: "Code doesn't exist in a vacuum. I build scalable architectures having considering future trade-offs, not just immediate requirements."
  },
  {
    icon: <Lightbulb size={24} className="text-green-400" />,
    title: "Product Mindset",
    description: "Engineering serves the product. I bridge the gap between technical constraints and user experience requirements."
  }
];

const Philosophy = () => {
    return (
        <Section id="philosophy" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Engineering <span className="text-primary">Philosophy</span></h2>
                    <p className="text-xl text-white/50 max-w-2xl">
                        Writing code is easy. Solving problems effectively, scalably, and maintainably is what I do.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {philosophies.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Spotlight className="h-full p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-colors group">
                                <div className="mb-6 bg-white/5 w-fit p-4 rounded-xl border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-white/60 leading-relaxed">
                                    {item.description}
                                </p>
                            </Spotlight>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Philosophy;
