import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLogs = [
  { text: "Initializing system...", delay: 0 },
  { text: "Loading visual assets & texture layers...", delay: 400 },
  { text: "Authenticating security key: minnahdev...", delay: 800 },
  { text: "Verifying CEAL academic achievements...", delay: 1200 },
  { text: "Preparing dossier console interface...", delay: 1600 },
  { text: "Access Granted. Welcome, Agent Minnah.", delay: 2000, isHighlight: true }
];

export default function BootLoader({ onComplete }) {
  const [visibleLogs, setVisibleLogs] = useState([]);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Typing log simulation
    bootLogs.forEach((log) => {
      setTimeout(() => {
        setVisibleLogs((prev) => [...prev, log]);
      }, log.delay);
    });

    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 450);

    // Call onComplete after 2500ms + some fade buffer
    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearInterval(cursorInterval);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col justify-between p-6 md:p-12 font-mono text-accent text-sm md:text-base selection:bg-accent selection:text-black">
      {/* Top Console Bar */}
      <div className="flex justify-between items-center opacity-60 text-xs border-b border-accent/20 pb-4">
        <span>SECURITY LEVEL: CLASSIFIED</span>
        <span>SYS_CORE: v1.0.4 // HOST: CEAL.KERALA.IN</span>
      </div>

      {/* Main Terminal Output */}
      <div className="flex-1 my-8 font-mono-jetbrains flex flex-col justify-start space-y-3 max-w-4xl mx-auto w-full pt-10">
        <AnimatePresence>
          {visibleLogs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className={`flex items-start ${log.isHighlight ? 'text-white text-base md:text-lg font-bold mt-4' : ''}`}
            >
              <span className="text-accent/60 mr-3 select-none">{">"}</span>
              <span className={log.isHighlight ? 'text-glow-accent' : ''}>
                {log.text}
                {index === visibleLogs.length - 1 && log.isHighlight && (
                  <span className="ml-1 text-accent">[OK]</span>
                )}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Blinking Cursor at the end */}
        <div className="flex items-center text-accent/80 pl-6 h-6">
          <span className={`w-2 h-4 bg-accent ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </div>

      {/* Bottom Status Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] md:text-xs opacity-50 border-t border-accent/20 pt-4">
        <div>STATUS: DISCONNECTED_LOCKOUT</div>
        <div>IP: 192.168.42.100</div>
        <div>LATENCY: 14MS (CEAL_SERVER)</div>
        <div className="text-right">SECURE_DDR_TUNNEL: ENCRYPTED</div>
      </div>
    </div>
  );
}
