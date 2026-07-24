import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

const timelineEntries = [
  {
    role: "State Council Member",
    organization: "Wisdom Girls Organisation",
    period: "2025 - Present",
    details: "Representing regional sectors at the state level. Directing initiatives focused on women's empowerment, educational mentorship, and technical literacy campaigns across Kerala."
  },
  {
    role: "Media & Tech Lead",
    organization: "Wisdom Girls Organisation",
    period: "2024 - Present",
    details: "Managing digital operations, leading tech outreach programs, and structuring visual brand identities. Spearheaded digital skill workshops for young girls."
  },
  {
    role: "Vengara Zonal Secretary",
    organization: "Wisdom Girls Organisation",
    period: "2023 - 2025",
    details: "Coordinated local chapters, organized zonal empowerment conferences, and managed operations for community engagement programs."
  },
  {
    role: "Joint Secretary",
    organization: "IEEE Women in Engineering (WIE) SB CEAL",
    period: "2024 - 2025",
    details: "Directed female student recruitment, organized engineering workshops, and coordinated networking summits for women in technology under IEEE SB CEAL."
  },
  {
    role: "Operations Team Member",
    organization: "Alchemy IEDC CEAL",
    period: "2023 - 2024",
    details: "Coordinated entrepreneurship events, hackathons, and incubation drives. Worked closely with founders to foster startup culture in Attingal."
  },
  {
    role: "Volunteer",
    organization: "TinkerHub CEAL",
    period: "2023 - Present",
    details: "Mentored peers in beginner programming courses (Python, HTML/CSS). Assisted in organizing peer-learning circles and tech talks."
  }
];

export default function MissionLog() {
  return (
    <section id="log" className="py-20 px-4 max-w-7xl mx-auto border-t border-zinc-900 scroll-mt-16">
      {/* Title */}
      <div className="flex items-center space-x-3 mb-16">
        <div className="h-[1px] w-8 bg-accent" />
        <h2 className="text-2xl font-display font-bold uppercase tracking-wider text-white">
          Mission Log
        </h2>
        <span className="text-xs font-mono text-zinc-500">// EXPERIENCE_TIMELINE</span>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-zinc-800 ml-4 md:ml-32 pl-6 md:pl-8 space-y-12">
        {timelineEntries.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[31px] md:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center">
              <span className="absolute h-2.5 w-2.5 rounded-full bg-[#09090B] border-2 border-zinc-600 group-hover:border-accent transition-colors duration-300" />
              <motion.span 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 + 0.2 }}
                className="absolute h-2 w-2 rounded-full bg-accent glow-accent" 
              />
            </span>

            {/* Timeline Content card */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              
              {/* Date Column (md:col-span-3) */}
              <div className="md:col-span-3 md:-ml-36 font-mono text-xs text-zinc-500 flex items-center space-x-1.5 pt-1">
                <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                <span>{item.period}</span>
              </div>

              {/* Body Column (md:col-span-9) */}
              <div className="md:col-span-9 bg-[#111113] border border-[#27272A] rounded-lg p-5 hover:border-zinc-700 transition-colors duration-300 relative group">
                <div className="flex items-center space-x-2 mb-2">
                  <Briefcase className="w-4 h-4 text-accent/80" />
                  <h3 className="font-display font-bold text-white text-base">
                    {item.role}
                  </h3>
                </div>

                <div className="font-mono text-xs text-accent mb-3 flex items-center uppercase tracking-wide">
                  <span>{item.organization}</span>
                </div>

                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  {item.details}
                </p>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
