import Section from "../components/ui/Section";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Counter = ({ value, label, suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = parseInt(value);
            const duration = 2000;
            const incrementTime = duration / end;

            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="text-center p-6 glass rounded-2xl border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-colors">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold mb-2 tabular-nums">
                    {count}{suffix}
                </div>
                <div className="text-sm text-white/50 uppercase tracking-widest font-medium">
                    {label}
                </div>
            </div>
        </div>
    );
};

const Stats = () => {
    return (
        <Section className="py-10">
            <div className="max-w-7xl mx-auto px-6">
                 <div className="flex items-center gap-2 mb-8 opacity-50">
                    <div className="h-px bg-white/20 flex-1" />
                    <span className="text-sm font-mono uppercase tracking-wider">Engineering Metrics</span>
                    <div className="h-px bg-white/20 flex-1" />
                 </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    <Counter value="87" label="Lighthouse Score" />
                    <Counter value="15" label="Projects Built" suffix="+" />
                    <Counter value="1200" label="Hours Coding" suffix="+" />
                </div>
            </div>
        </Section>
    );
};

export default Stats;
