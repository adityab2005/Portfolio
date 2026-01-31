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
                    I am a forward-thinking <span className="text-white font-medium">B.Tech IT Student</span> with a strong foundation in software engineering. My journey started with a <span className="text-white font-medium">Diploma in Computer Engineering where I secured Rank 1</span>, proving my dedication to the craft.
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
            </div>
        </div>
    </Section>
  );
};

export default About;
