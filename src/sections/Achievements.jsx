import Section from "../components/ui/Section";
import { Award, CheckCircle } from "lucide-react";

const achievements = [
  {
    title: "Diploma Rank 1",
    issuer: "State Board of Technical Education",
    year: "2023",
    color: "text-yellow-400"
  },
  {
    title: "IBM Certified Full Stack Developer",
    issuer: "IBM",
    year: "2024",
    color: "text-blue-400"
  },
  {
    title: "IBM Certified DevOps Engineer",
    issuer: "IBM",
    year: "2024",
    color: "text-blue-400"
  }
];

const Achievements = () => {
  return (
    <Section id="achievements" className="bg-background-light/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Key <span className="text-primary">Achievements</span></h2>
            <p className="text-white/50 mt-2 md:mt-0 max-w-md text-right">
                Recognition of dedication and technical expertise.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
                <div key={index} className="glass p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all group">
                    <div className="flex justify-between items-start mb-4">
                        <div className={`p-3 bg-white/5 rounded-lg ${item.color} group-hover:scale-110 transition-transform`}>
                            <Award size={24} />
                        </div>
                        <span className="text-xs font-mono text-white/40 border border-white/10 px-2 py-1 rounded">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-white/50 flex items-center gap-1">
                        <CheckCircle size={12} /> {item.issuer}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Achievements;
