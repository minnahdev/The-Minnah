import React from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  { name: "Leadership", level: 9, category: "Core" },
  { name: "Problem Solving", level: 9, category: "Engineering" },
  { name: "Communication", level: 8, category: "Core" },
  { name: "Public Speaking", level: 9, category: "Core" },
  { name: "Teaching", level: 8, category: "Education" },
  { name: "UI/UX Design", level: 7, category: "Design" },
  { name: "Frontend Development", level: 7, category: "Engineering" },
  { name: "Backend Development", level: 8, category: "Engineering" },
  { name: "Community Building", level: 9, category: "Core" },
  { name: "Continuous Learning", level: 10, category: "Core" }
];

export default function Capabilities() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="flex items-center space-x-3 mb-10">
        <div className="h-[1px] w-8 bg-accent" />
        <h2 className="text-2xl font-display font-bold uppercase tracking-wider text-white">
          Capability Matrix
        </h2>
        <span className="text-xs font-mono text-zinc-500">// OPERATIONAL_STRENGTHS</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {capabilities.map((cap, idx) => (
          <motion.div
            key={cap.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="flex flex-col space-y-2 group"
          >
            {/* Metric Info Header */}
            <div className="flex justify-between items-baseline font-mono text-xs">
              <span className="text-white font-semibold tracking-wide uppercase group-hover:text-accent transition-colors duration-200">
                {cap.name}
              </span>
              <span className="text-zinc-500 uppercase tracking-widest text-[9px]">
                {cap.category} // LVL_{cap.level}
              </span>
            </div>

            {/* Segmented Progress Bar */}
            <div className="flex items-center space-x-1 w-full bg-[#111113] p-1.5 rounded border border-[#27272A] h-8">
              {Array.from({ length: 10 }).map((_, segmentIdx) => {
                const isActive = segmentIdx < cap.level;
                return (
                  <motion.div
                    key={segmentIdx}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: (idx * 0.05) + (segmentIdx * 0.03),
                      ease: "easeOut"
                    }}
                    className={`h-full flex-1 rounded-sm origin-left ${isActive
                      ? 'bg-accent/80 group-hover:bg-accent transition-colors duration-300'
                      : 'bg-zinc-800/40'
                      } ${isActive && segmentIdx === cap.level - 1 ? 'glow-accent' : ''}`}
                  />
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
