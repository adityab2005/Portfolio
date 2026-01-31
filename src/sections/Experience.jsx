import Section from "../components/ui/Section";
import { Briefcase, Calendar, GraduationCap, Code } from "lucide-react";
import { motion } from "framer-motion";

const timeline = [
  {
    role: "Actively Learning System Design & DSA",
    company: "Personal Growth",
    period: "Present",
    description: "Deep diving into scalable backend architectures, microservices patterns, and advanced data structures. Building diverse projects to apply theoretical knowledge.",
    icon: <Code size={20} />,
    current: true
  },
  {
    role: "Web Development Trainee",
    company: "Tech Solutions Inc.", 
    period: "2023 - 2024",
    description: "Developed and maintained responsive web applications. Collaborated with senior developers to implement new features using React.js. Reduced load times by 40% via image optimization.",
    icon: <Briefcase size={20} />,
    current: false
  },
  {
    role: "General Secretary",
    company: "Student Council",
    period: "2023 - 2024",
    description: "Led a team of 50+ students in organizing technical events and workshops. Improved campus technical engagement by 40%.",
    icon: <Briefcase size={20} />,
    current: false
  },
  {
    role: "Diploma Rank 1",
    company: "State Board of Technical Education",
    period: "2024",
    description: "Secured 1st rank across the state in Information Technology diploma for the batch of 2024. Consistently maintained top academic performance while building projects.",
    icon: <GraduationCap size={20} />,
    current: false
  }
];

const Experience = () => {
  return (
    <Section id="experience">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Growth <span className="text-primary">Trajectory</span></h2>
      
      <div className="max-w-3xl mx-auto px-4">
        <div className="relative border-l border-white/10 pl-8 space-y-12">
            {/* Animated Line Overlay */}
            <motion.div 
                className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {timeline.map((exp, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                >
                    {/* Timeline Dot */}
                    <div className={`absolute -left-[42px] top-0 w-6 h-6 rounded-full flex items-center justify-center border-4 border-background ${exp.current ? 'bg-primary shadow-[0_0_15px_rgba(59,130,246,0.6)]' : 'bg-white/20'}`}>
                        {exp.current && <div className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                    </div>
                    
                    <div className={`glass p-8 rounded-xl hover:bg-white/5 transition-all border border-white/5 ${exp.current ? 'border-primary/30' : ''}`}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <div>
                                <h3 className={`text-2xl font-bold ${exp.current ? 'text-white' : 'text-white/80'}`}>{exp.role}</h3>
                                <div className="flex items-center gap-2 text-primary font-medium mt-1">
                                    {exp.icon}
                                    <span>{exp.company}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-white/50 text-sm mt-2 md:mt-0 font-mono">
                                <Calendar size={14} />
                                <span>{exp.period}</span>
                            </div>
                        </div>
                        <p className="text-white/60 leading-relaxed text-sm md:text-base">
                            {exp.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </Section>
  );
};


export default Experience;
