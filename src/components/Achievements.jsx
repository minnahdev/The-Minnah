import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Users, Video, BookOpen, Presentation } from 'lucide-react';

const achievementsList = [
  {
    icon: <Award className="w-5 h-5 text-accent" />,
    title: "NASA Space Apps Challenge 2025 Local Winner",
    role: "Team Member // CEAL Node",
    desc: "Co-developed an interactive 2D climate and environmental telemetric city mapping dashboard. Honored as the local winner for solving complex scientific visualization prompts."
  },
  //{
  //  icon: <Presentation className="w-5 h-5 text-accent" />,
  //  title: "Technical Speaker & Workshop Instructor",
  //  role: "CEAL TinkerHub Chapter",
  //  desc: "Structured and delivered Python coding fundamentals and Git/GitHub workflow workshops to over 60+ junior engineering students, enhancing peer programming practices."
  //},
  {
    icon: <Users className="w-5 h-5 text-accent" />,
    title: "Community Event Coordinator & Emcee",
    role: "IEEE WIE & Alchemy IEDC",
    desc: "Organized and hosted panel discussions, tech talks, and regional entrepreneurship summits. Anchored college events, ensuring smooth delivery and audience engagement."
  },
  {
    icon: <BookOpen className="w-5 h-5 text-accent" />,
    title: "Zonal Leadership & Mentorship Campaigner",
    role: "Wisdom Girls Organisation",
    desc: "Directed a regional technology literacy drive, instructing school-age girls in rural districts on online security, digital tools, and basic coding pathways."
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 max-w-7xl mx-auto border-t border-zinc-900 scroll-mt-16">
      {/* Title */}
      <div className="flex items-center space-x-3 mb-12">
        <div className="h-[1px] w-8 bg-accent" />
        <h2 className="text-2xl font-display font-bold uppercase tracking-wider text-white">
          Achievements & Milestones
        </h2>
        <span className="text-xs font-mono text-zinc-500">// COMMENDATIONS</span>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievementsList.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="bg-[#111113] border border-[#27272A] rounded-lg p-6 flex items-start space-x-4 hover:border-zinc-800 transition-colors duration-200"
          >
            <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded flex-shrink-0">
              {item.icon}
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-bold text-white text-base md:text-lg">
                {item.title}
              </h3>

              <div className="font-mono text-[10px] text-accent uppercase tracking-wider">
                {item.role}
              </div>

              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
