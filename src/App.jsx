import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Component Imports
import BootLoader from './components/BootLoader';
import BackgroundGrid from './components/BackgroundGrid';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CharacterProfile from './components/CharacterProfile';
import Capabilities from './components/Capabilities';
import Arsenal from './components/Arsenal';
import Missions from './components/Missions';
import MissionLog from './components/MissionLog';
import Achievements from './components/Achievements';
import Communities from './components/Communities';
import Contact from './components/Contact';
import TerminalWidget from './components/TerminalWidget';

import './App.css';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded ? (
          <motion.div key="loader" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <BootLoader onComplete={() => setIsLoaded(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen text-white selection:bg-accent selection:text-black"
          >
            {/* Interactive Background Matrix */}
            <BackgroundGrid />

            {/* Content Foreground */}
            <div className="relative z-10 flex flex-col min-h-screen">
              
              {/* Navigation Header */}
              <Navbar 
                onTerminalToggle={() => setIsTerminalOpen(prev => !prev)} 
                isTerminalOpen={isTerminalOpen} 
              />

              {/* Main Content Sections */}
              <main className="flex-grow space-y-4 pb-24">
                <Hero />
                <CharacterProfile />
                <Capabilities />
                <Arsenal />
                <Missions />
                <MissionLog />
                <Achievements />
                <Communities />
                <Contact />
              </main>

              {/* Editorial Tactical Footer */}
              <footer className="border-t border-zinc-900 bg-black/40 backdrop-blur-sm py-8 px-4 font-mono text-[10px] text-zinc-500 text-center uppercase tracking-widest relative z-25">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                  <span>DESIGNED & HANDCRAFTED BY MINNAH PATTAR KADAVAN</span>
                  <span>SYS_STATUS: NOMINAL // ALL SYSTEMS GO // © 2026</span>
                </div>
              </footer>

              {/* Interactive Terminal CLI Widget */}
              <TerminalWidget 
                isOpen={isTerminalOpen} 
                onClose={() => setIsTerminalOpen(false)} 
              />

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
