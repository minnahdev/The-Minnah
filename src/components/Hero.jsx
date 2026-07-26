import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Globe, Radio } from 'lucide-react';

const descriptors = [
  "Developer", "Leader", "Teacher", "Learner",
  "Coordinator", "Host", "Curious", "Dreamer", "Doer"
];

export default function Hero() {
  return (
    <section className="relative pt-20 pb-12 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
      {/* Dossier Header Details */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center space-x-6 text-[10px] md:text-xs font-mono text-zinc-400 mb-8 border border-zinc-800 px-4 py-1.5 bg-background-card/50 rounded-full"
      >
        <span className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span className="text-white font-semibold uppercase">Live Session</span>
        </span>
        <span className="w-[1px] h-3 bg-zinc-800" />
        <span className="flex items-center space-x-1">
          <Globe className="w-3.5 h-3.5 text-zinc-500" />
          <span>CEAL, KERALA, IN</span>
        </span>
        <span className="w-[1px] h-3 bg-zinc-800" />
        <span className="flex items-center space-x-1">
          <Compass className="w-3.5 h-3.5 text-zinc-500" />
          <span>LAT: 8.68° N / LON: 76.81° E</span>
        </span>
      </motion.div>

      {/* Main Identity Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-6 uppercase text-glow-accent"
      >
        Minnah Pattar Kadavan
      </motion.h1>

      {/* Descriptors list */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 max-w-3xl font-mono text-xs md:text-sm text-accent mb-10"
      >
        {descriptors.map((desc, idx) => (
          <React.Fragment key={desc}>
            <span className="hover:text-white transition-colors duration-200 cursor-default uppercase tracking-wider font-semibold">
              {desc}
            </span>
            {idx < descriptors.length - 1 && (
              <span className="text-zinc-700 font-bold select-none">•</span>
            )}
          </React.Fragment>
        ))}
      </motion.div>

      {/* Human-written Introduction paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-2xl text-zinc-400 text-base md:text-lg leading-relaxed font-sans"
      >
        <p>
          Personnel file unlocked.
          <br /><br />
          Minnah Pattar Kadavan is a Computer Science & Engineering student,
          software developer, community leader and technical educator currently
          operating from Kerala, India.
          <br /><br />
          Primary objectives include building scalable software, leading engineering
          communities, mentoring aspiring developers and creating products that solve
          practical problems.
          <br /><br />
          Current status: Available for ambitious projects and meaningful
          collaborations.
        </p>
      </motion.div>

      {/* Action Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute right-4 bottom-0 hidden xl:flex flex-col items-end space-y-1 text-[10px] font-mono text-zinc-600"
      >
        <div className="flex items-center space-x-1.5">
          <span>TX_FREQ: 5.8 GHZ</span>
          <Radio className="w-3 h-3 text-zinc-700" />
        </div>
        <span>CONSOLE_BOOT_OK</span>
      </motion.div>
    </section>
  );
}
