import React from 'react';
import { motion } from 'framer-motion';
import { Network, HelpCircle, GraduationCap, Flame, Globe } from 'lucide-react';

const communities = [
  {
    name: "IEEE SB CEAL",
    fullName: "Institute of Electrical & Electronics Engineers",
    role: "Women in Engineering SB Joint Secretary",
    details: "Serving in the Women in Engineering (WIE) committee to coordinate tech sessions and skill bootcamps, encouraging young women to excel in STEM.",
    icon: <Network className="w-5 h-5 text-accent" />
  },
  {
    name: "Alchemy IEDC CEAL",
    fullName: "Innovation & Entrepreneurship Development Cell",
    role: "Operations Core Team Member",
    details: "Driving entrepreneurial mindset among engineering students, facilitating incubation ideas, organizing hackathons and startup workshops.",
    icon: <Flame className="w-5 h-5 text-accent" />
  },
  {
    name: "TinkerHub CEAL",
    fullName: "Peer Learning Network",
    role: "Technical Volunteer & Mentor",
    details: "Supporting the open learning model by mentoring beginners, organizing coding challenges, and helping students learn by building projects.",
    icon: <Globe className="w-5 h-5 text-accent" />
  },
  {
    name: "Wisdom Girls Organisation",
    fullName: "Social & Leadership Outreach",
    role: "State Council Member & Tech Lead",
    details: "Empowering girls through technology, leading digital literacy campaigns, and organizing development programs across the region.",
    icon: <UsersIcon className="w-5 h-5 text-accent" /> // Wait, UsersIcon can be imported or simple Lucide icon. Let's use simple Lucide Users or HelpCircle
  },
  {
    name: "College of Engineering Attingal",
    fullName: "CEAL (Academic Hub)",
    role: "Computer Science & Engineering Student",
    details: "Pursuing her Bachelor's degree, actively bridging academic excellence with co-curricular student networks.",
    icon: <GraduationCap className="w-5 h-5 text-accent" />
  }
];

// Helper component since "Users" isn't a direct Lucide import name (actually Users is, but let's map it safely)
function UsersIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default function Communities() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto border-t border-zinc-900">
      {/* Title */}
      <div className="flex items-center space-x-3 mb-12">
        <div className="h-[1px] w-8 bg-accent" />
        <h2 className="text-2xl font-display font-bold uppercase tracking-wider text-white">
          Affiliated Networks
        </h2>
        <span className="text-xs font-mono text-zinc-500">// COMMUNITY_ROOTS</span>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {communities.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="lg:col-span-1 bg-[#111113] border border-[#27272A] rounded-lg p-5 flex flex-col justify-between hover:border-accent/40 hover:scale-[1.02] transition-all duration-300 group"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="bg-zinc-900 border border-zinc-800 p-2 rounded group-hover:border-accent/30 transition-colors duration-300">
                  {item.icon}
                </div>
              </div>

              <h3 className="font-display font-bold text-white text-base mb-1 group-hover:text-accent transition-colors duration-200">
                {item.name}
              </h3>
              
              <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider mb-3 leading-tight">
                {item.role}
              </div>

              <p className="text-zinc-400 text-xs leading-relaxed font-sans mt-2">
                {item.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
