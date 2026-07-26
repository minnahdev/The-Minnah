import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, User, Briefcase, Award } from 'lucide-react';

export default function CharacterProfile() {
  const profileDetails = [
    { label: "NAME", value: "MINNAH PATTAR KADAVAN" },
    { label: "INSTITUTION", value: "College of Engineering Attingal (CEAL), Kerala" },
    { label: "SPECIALIZATION", value: "Computer Science & Engineering" },
    { label: "STATUS", value: "Available for Freelance, Collaborations and Opportunities", isStatus: true },
    { label: "CURRENT FOCUS", value: "Software Engineering, Web Development ,Community Building & Skill Development" }
  ];

  return (
    <section id="profile" className="py-20 px-4 max-w-7xl mx-auto border-t border-zinc-900 scroll-mt-16">
      {/* Section Title */}
      <div className="flex items-center space-x-3 mb-12">
        <div className="h-[1px] w-8 bg-accent" />
        <h2 className="text-2xl font-display font-bold uppercase tracking-wider text-white">
          Character Dossier
        </h2>
        <span className="text-xs font-mono text-zinc-500">// PROFILE_SHEET</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        {/* Left Column: Dossier Metadata (lg:col-span-7) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 bg-[#111113] border border-[#27272A] rounded-lg p-6 md:p-8 flex flex-col justify-between relative overflow-hidden"
        >
          {/* Subtle design details */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/5 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 right-4 text-[10px] font-mono text-zinc-800 pointer-events-none select-none">
            DOC_REF: CEAL-CS-2026
          </div>

          <div>
            <div className="flex items-center space-x-2.5 mb-6 pb-4 border-b border-zinc-800">
              <Shield className="w-5 h-5 text-accent" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">
                Personnel Specifications
              </h3>
            </div>

            <div className="space-y-6">
              {profileDetails.map((detail, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-b border-zinc-900 pb-4 last:border-0 last:pb-0">
                  <div className="font-mono text-xs text-zinc-500 uppercase font-semibold">
                    {detail.label}
                  </div>
                  <div className="sm:col-span-2 text-sm text-white font-medium">
                    {detail.isStatus ? (
                      <span className="inline-flex items-center space-x-2 text-accent">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        <span className="font-semibold">{detail.value}</span>
                      </span>
                    ) : (
                      detail.value
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-zinc-900 text-xs font-mono text-zinc-500 flex justify-between items-center">
            <span>REGIONAL_SECTOR: SOUTH_INDIA</span>

            <a
              href="/documents/Minnah_Pattar_Kadavan_Resume.pdf"
              download
              className="text-accent hover:text-white transition-colors"
            >
              {'> EXPORT_DOSSIER.PDF'}
            </a>
          </div>
        </motion.div>

        {/* Right Column: Mission Statement + Avatar (lg:col-span-5) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Avatar Card */}
          <div className="bg-[#111113] border border-[#27272A] rounded-lg p-6 flex items-center space-x-6 relative overflow-hidden group">
            <div className="w-24 h-24 rounded border border-zinc-800 overflow-hidden bg-black flex-shrink-0 relative">
              <img
                src="/avatar.jpg"
                alt="Minnah Pattar Kadavan Avatar"
                className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  // fallback simple placeholder if image not loaded
                  e.target.parentNode.innerHTML = `<div class="w-full h-full bg-zinc-950 flex items-center justify-center text-accent text-xs">MINNAH</div>`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div>
              <div className="flex items-center space-x-1.5 text-xs text-accent font-mono mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>MEMBER IDENTIFIER</span>
              </div>
              <h4 className="font-display font-bold text-white text-lg leading-tight">
                Minnah P. Kadavan
              </h4>
              <p className="text-zinc-500 text-xs mt-1 font-mono uppercase">
                CSE STUDENT • COMMUNITY BUILDER
              </p>
            </div>
          </div>

          {/* Mission Statement Card */}
          <div className="bg-[#111113] border border-[#27272A] rounded-lg p-6 md:p-8 flex-1 flex flex-col justify-between relative">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                <h4 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  MISSION STATEMENT
                </h4>
              </div>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed italic">
                "My mission is to build highly functional, elegant, and useful software that solves actual,
                everyday challenges. As an engineer, my goal is to constantly expand my technical boundaries,
                nurture open learning communities through leadership and teaching, and eventually design
                scalable digital products and startups that drive social progress."
              </p>
            </div>

            <div className="mt-6 border-t border-zinc-900 pt-4 flex items-center justify-between text-xs text-zinc-500 font-mono">
              <span>TARGET: IMPACT</span>
              <span>EST: 2023 // ACTIVE</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
