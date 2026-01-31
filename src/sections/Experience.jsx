import Section from "../components/ui/Section";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Web Development Trainee",
    company: "Tech Solutions Inc.", // Placeholder company
    period: "2023 - Present",
    description: "Developed and maintained responsive web applications. Collaborated with senior developers to implement new features using React.js."
  },
  {
    role: "General Secretary",
    company: "Student Council",
    period: "2022 - 2023",
    description: "Led a team of 50+ students in organizing technical events and workshops. Improved campus technical engagement by 40%."
  }
];

const Experience = () => {
  return (
    <Section id="experience">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Professional <span className="text-primary">Journey</span></h2>
      
      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-white/10 pl-8 space-y-12">
            {experiences.map((exp, index) => (
                <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-secondary border-4 border-background" />
                    
                    <div className="glass p-8 rounded-xl hover:bg-white/5 transition-colors border border-white/5">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                <div className="flex items-center gap-2 text-primary font-medium mt-1">
                                    <Briefcase size={16} />
                                    <span>{exp.company}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-white/50 text-sm mt-2 md:mt-0">
                                <Calendar size={16} />
                                <span>{exp.period}</span>
                            </div>
                        </div>
                        <p className="text-white/70 leading-relaxed">
                            {exp.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
