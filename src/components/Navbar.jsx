import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'profile', label: 'Profile' },
  { id: 'arsenal', label: 'Arsenal' },
  { id: 'missions', label: 'Missions' },
  { id: 'log', label: 'Mission Log' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar({ onTerminalToggle, isTerminalOpen }) {
  const [activeSection, setActiveSection] = useState('profile');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset for nav height

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // nav height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md font-mono text-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Shield className="w-5 h-5 text-accent text-glow-accent" />
          <span className="font-display font-bold tracking-tight text-white select-none">
            MINNAH <span className="text-accent">PATTAR KADAVAN</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative px-3 py-2 transition-colors duration-200 hover:text-white ${
                activeSection === item.id ? 'text-accent' : 'text-zinc-400'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent glow-accent" />
              )}
            </button>
          ))}

          {/* Terminal Toggle Button */}
          <button
            onClick={onTerminalToggle}
            className={`flex items-center space-x-2 border px-3 py-1.5 rounded transition-all duration-200 ${
              isTerminalOpen 
                ? 'bg-accent/10 border-accent text-accent border-glow-accent' 
                : 'border-zinc-800 text-zinc-400 hover:border-accent hover:text-accent'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span className="text-xs uppercase">Terminal</span>
          </button>
        </div>

        {/* Mobile Hamburger menu & Terminal toggle */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={onTerminalToggle}
            className={`p-2 border rounded ${
              isTerminalOpen ? 'border-accent text-accent' : 'border-zinc-800 text-zinc-400'
            }`}
          >
            <Terminal className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                activeSection === item.id ? 'bg-accent/10 text-accent font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
