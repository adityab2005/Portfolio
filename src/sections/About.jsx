import Section from "../components/ui/Section";
import { User, Award, Code, BookOpen } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Award size={24} className="text-primary" />,
      title: "Diploma Rank 1",
      desc: "Academic Excellence"
    },
    {
      icon: <Code size={24} className="text-secondary" />,
      title: "Full Stack",
      desc: "Modern Web Tech"
    },
    {
      icon: <BookOpen size={24} className="text-pink-500" />,
      title: "B.Tech IT",
      desc: "Problem Solving"
    }
  ];

  return (
    <Section id="about" className="bg-background-light/30">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About <span className="text-primary">Me</span></h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                <p>
                    I am a forward-thinking <span className="text-white font-medium">B.Tech IT Student</span> with a strong foundation in software engineering. My journey started with a <span className="text-white font-medium">Diploma in Information Technology where I secured Rank 1</span>, proving my dedication to the craft.
                </p>
                <p>
                    Passionate about bridging the gap between complex backend logic and intuitive frontend design. I specialize in building scalable applications using the <span className="text-primary">MERN stack, Next.js, and Cloud technologies</span>.
                </p>
                <p>
                    Beyond code, I am an AI enthusiast, constantly exploring how machine learning can optimize real-world workflows. I don't just write code; I build solutions.
                </p>
            </div>

            <div className="grid gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="glass p-6 rounded-xl flex items-center gap-6 hover:bg-white/5 transition-all group">
                        <div className="p-4 bg-white/5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                            {stat.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">{stat.title}</h3>
                            <p className="text-white/50">{stat.desc}</p>
                        </div>
                    </div>
                ))}

                {/* Hobbies Section */}
                <div className="glass p-6 rounded-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                         <User size={64} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Beyond the Code</h3>
                    <p className="text-white/60 text-sm mb-3">When I'm not engineering systems, I'm analyzing moves on the 64 squares or training in the ring.</p>
                    <div className="flex gap-3">
                        <span className="text-xs font-medium px-3 py-1 bg-white/5 rounded-full border border-white/10 flex items-center gap-1.5 hover:bg-white/10 transition-colors">
                            ♟️ Chess Enthusiast
                        </span>
                        <span className="text-xs font-medium px-3 py-1 bg-white/5 rounded-full border border-white/10 flex items-center gap-1.5 hover:bg-white/10 transition-colors">
                            🥊 Amateur Boxer
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </Section>
  );
};

export default About;
