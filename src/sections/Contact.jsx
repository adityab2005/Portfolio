import Section from "../components/ui/Section";
import { Send, Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <Section id="contact" className="min-h-[70vh] flex items-center">
      <div className="w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="text-primary">Connect</span></h2>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
                Have a project in mind or want to discuss the latest in AI and Web Dev? I'm always open to new opportunities and interesting conversations.
            </p>
            
            <div className="space-y-4">
                <a href="mailto:aditya@example.com" className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/10 transition-colors group cursor-pointer">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Mail size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-white/50">Email Me</p>
                        <p className="text-white font-medium">aditya@example.com</p>
                    </div>
                </a>
                
                <div className="grid grid-cols-2 gap-4">
                    <a href="#" className="p-4 glass rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-3 text-white/80 hover:text-white">
                        <Github size={20} /> GitHub
                    </a>
                    <a href="#" className="p-4 glass rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-3 text-white/80 hover:text-white">
                        <Linkedin size={20} /> LinkedIn
                    </a>
                </div>
            </div>
        </div>

        <form className="glass p-8 rounded-2xl border border-white/10 space-y-6">
            <div className="space-y-2">
                <label className="text-sm text-white/60 font-medium">Name</label>
                <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors text-white"
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm text-white/60 font-medium">Email</label>
                <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors text-white"
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm text-white/60 font-medium">Message</label>
                <textarea 
                    rows="4" 
                    placeholder="Your message..." 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors text-white resize-none"
                />
            </div>
            
            <button className="w-full py-4 bg-primary hover:bg-blue-600 rounded-lg font-bold text-white transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2">
                Send Message <Send size={18} />
            </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
