import React, { useState, useRef, useEffect } from 'react';
import { Terminal, ShieldAlert } from 'lucide-react';

export default function TerminalWidget({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Minnah Dossier CLI v1.0.4 initialized.' },
    { type: 'system', text: 'Type "help" to view list of available operations.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    // Scroll terminal output to bottom
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const command = inputVal.trim().toLowerCase();
    if (!command) return;

    // Append command to history
    const newHistory = [...history, { type: 'input', text: command }];

    // Handle commands
    switch (command) {
      case 'help':
        setHistory([
          ...newHistory,
          { type: 'output', text: 'AVAILABLE COMMANDS:' },
          { type: 'output', text: '  about      - Navigate to Profile Section' },
          { type: 'output', text: '  missions   - Navigate to Completed Missions (Projects)' },
          { type: 'output', text: '  github     - Launch Minnah\'s GitHub in a new tab' },
          { type: 'output', text: '  linkedin   - Launch Minnah\'s LinkedIn in a new tab' },
          { type: 'output', text: '  contact    - Navigate to Contact Information' },
          { type: 'output', text: '  clear      - Reset console history' }
        ]);
        break;

      case 'about':
        setHistory([...newHistory, { type: 'output', text: 'Navigating to Profile...' }]);
        setTimeout(() => scrollToSection('profile'), 300);
        break;

      case 'missions':
        setHistory([...newHistory, { type: 'output', text: 'Navigating to Missions...' }]);
        setTimeout(() => scrollToSection('missions'), 300);
        break;

      case 'contact':
        setHistory([...newHistory, { type: 'output', text: 'Navigating to Contact...' }]);
        setTimeout(() => scrollToSection('contact'), 300);
        break;

      case 'github':
        setHistory([...newHistory, { type: 'output', text: 'Launching GitHub profile...' }]);
        window.open('https://github.com/minnahdev', '_blank');
        break;

      case 'linkedin':
        setHistory([...newHistory, { type: 'output', text: 'Launching LinkedIn profile...' }]);
        window.open('https://www.linkedin.com/in/minnah-ameenullah/', '_blank');
        break;

      case 'clear':
        setHistory([]);
        break;

      default:
        setHistory([
          ...newHistory,
          { type: 'error', text: `Command not recognized: "${command}". Type "help" for a list of valid operations.` }
        ]);
    }

    setInputVal('');
  };

  const scrollToSection = (id) => {
    // Closes mobile terminal drawer
    if (window.innerWidth < 768 && onClose) {
      onClose();
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-lg mx-auto md:mx-0 px-4 md:px-0">
      <div className="bg-black/95 border border-[#27272A] rounded-lg shadow-2xl overflow-hidden glow-accent flex flex-col h-[320px] font-mono text-xs md:text-sm text-accent">
        
        {/* Terminal Header */}
        <div className="bg-[#111113] border-b border-[#27272A] px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-accent" />
            <span className="text-white text-[11px] font-semibold tracking-wider font-mono uppercase">
              MINNAH_DOSSIER_CLI // v1.0.4
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setHistory([])}
              className="text-zinc-500 hover:text-zinc-300 px-1 text-[10px] uppercase font-mono"
            >
              [Clear]
            </button>
            <button 
              onClick={onClose}
              className="text-zinc-500 hover:text-red-500 font-bold px-1"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Terminal History */}
        <div 
          className="flex-1 p-4 overflow-y-auto space-y-2 select-text font-mono-jetbrains"
          onClick={() => inputRef.current && inputRef.current.focus()}
        >
          {history.map((log, index) => (
            <div key={index} className="leading-relaxed">
              {log.type === 'input' && (
                <div className="flex">
                  <span className="text-zinc-500 mr-2">minnahdev@ceal:~$</span>
                  <span className="text-white">{log.text}</span>
                </div>
              )}
              {log.type === 'output' && (
                <div className="text-accent/80 whitespace-pre">{log.text}</div>
              )}
              {log.type === 'system' && (
                <div className="text-zinc-500">{log.text}</div>
              )}
              {log.type === 'error' && (
                <div className="text-red-500 flex items-start space-x-1">
                  <ShieldAlert className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span>{log.text}</span>
                </div>
              )}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Input Form */}
        <form 
          onSubmit={handleCommandSubmit}
          className="bg-black border-t border-[#27272A] px-4 py-2.5 flex items-center"
        >
          <span className="text-zinc-500 mr-2 select-none">minnahdev@ceal:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="flex-1 bg-transparent border-0 outline-none text-white focus:ring-0 p-0 m-0 font-mono-jetbrains"
            placeholder="type commands..."
            autoFocus
          />
        </form>

      </div>
    </div>
  );
}
