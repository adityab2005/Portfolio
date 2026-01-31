import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Terminal from "./components/Terminal";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import Background from "./components/Background";
import ScrollProgress from "./components/ScrollProgress";
import CommandPalette from "./components/CommandPalette";
import Stats from "./sections/Stats";
import Philosophy from "./sections/Philosophy";
import Now from "./sections/Now";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [accentColor, setAccentColor] = useState('blue');

  useEffect(() => {
    // Apply theme color to CSS variables
    const themes = {
      blue: { primary: '#3b82f6', secondary: '#60a5fa' },
      green: { primary: '#10b981', secondary: '#34d399' },
      purple: { primary: '#8b5cf6', secondary: '#a78bfa' },
      orange: { primary: '#f97316', secondary: '#fb923c' },
      red: { primary: '#ef4444', secondary: '#f87171' }
    };
    
    document.documentElement.style.setProperty('--primary', themes[accentColor].primary);
    document.documentElement.style.setProperty('--secondary', themes[accentColor].secondary);
  }, [accentColor]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      <div className={`bg-background min-h-screen text-white relative ${!isLoaded ? 'overflow-hidden h-screen' : ''}`}>
        <div className="noise-overlay fixed inset-0 opacity-5 pointer-events-none z-[100]" />
        
        <CustomCursor />
        <ScrollProgress />
        <Background />
        <Navbar />
        <CommandPalette setAccentColor={setAccentColor} />
        
        <main className="relative z-10">
          <Hero />
          <Stats />
          <About />
          <Now /> 
          <Skills />
          <Experience />
          <Philosophy /> 
          <Projects />
          <Achievements />
          <Contact />
        </main>

        <Footer />
        <Terminal />
      </div>
    </>
  );
}



export default App;
