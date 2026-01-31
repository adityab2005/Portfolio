const Footer = () => {
    return (
      <footer className="py-8 bg-background-light border-t border-white/5 text-center">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Aditya. Built with <span className="text-primary hover:text-white transition-colors cursor-pointer">React</span> & <span className="text-primary hover:text-white transition-colors cursor-pointer">Tailwind</span>.
        </p>
      </footer>
    );
  };
  
  export default Footer;
