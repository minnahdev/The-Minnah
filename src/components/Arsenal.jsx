import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Layout, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: "Core Languages",
    icon: <Cpu className="w-4 h-4 text-accent" />,
    skills: ["Java", "Python", "C", "C++"]
  },
  {
    title: "Web & Frontend",
    icon: <Layout className="w-4 h-4 text-accent" />,
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
  },
  {
    title: "Backend & Systems",
    icon: <Code className="w-4 h-4 text-accent" />,
    skills: ["Flask", "Firebase"]
  },
  {
    title: "Development Tools",
    icon: <Settings className="w-4 h-4 text-accent" />,
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"]
  }
];

const skillMetadata = {
  "Java": { desc: "Object-oriented language used for academic projects and data structures.", related: ["C", "C++"] },
  "Python": { desc: "Primary language for scripts, automation, and backend web APIs.", related: ["Flask"] },
  "C": { desc: "Systems programming language used for core algorithm implementations.", related: ["C++", "Java"] },
  "C++": { desc: "Object-oriented extension of C used for algorithmic problem solving.", related: ["C", "Java"] },
  "HTML": { desc: "Standard markup language used to structure modern web projects.", related: ["CSS", "JavaScript", "React", "Tailwind CSS"] },
  "CSS": { desc: "Styling system for clean, fluid, and responsive layout interfaces.", related: ["HTML", "Tailwind CSS", "Figma"] },
  "JavaScript": { desc: "Modern ES6+ language used to script rich, interactive web logic.", related: ["React", "HTML"] },
  "React": { desc: "Component-based UI library for crafting state-driven web apps.", related: ["JavaScript", "Tailwind CSS", "HTML", "CSS"] },
  "Tailwind CSS": { desc: "Utility-first framework for rapid, premium styling implementations.", related: ["CSS", "React", "Figma"] },
  "Flask": { desc: "Lightweight Python micro-framework for building rest APIs.", related: ["Python", "Postman"] },
  "Firebase": { desc: "BaaS platform utilized for database, authentication, and hosting.", related: ["React", "JavaScript"] },
  "Git": { desc: "Distributed version control system for tracking repository history.", related: ["GitHub"] },
  "GitHub": { desc: "Cloud collaboration platform for open-source and team projects.", related: ["Git"] },
  "VS Code": { desc: "Primary code editor, customized with development extensions.", related: ["Git", "GitHub"] },
  "Figma": { desc: "Vector graphics editor used for UI prototyping and design mockups.", related: ["CSS", "Tailwind CSS"] },
  "Postman": { desc: "API testing platform for validating endpoints and response payloads.", related: ["Flask"] }
};

export default function Arsenal() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const isRelated = (skillName) => {
    if (!hoveredSkill) return false;
    if (hoveredSkill === skillName) return true;
    return skillMetadata[hoveredSkill]?.related.includes(skillName);
  };

  return (
    <section id="arsenal" className="py-20 px-4 max-w-7xl mx-auto border-t border-zinc-900 scroll-mt-16">
      {/* Title */}
      <div className="flex items-center space-x-3 mb-12">
        <div className="h-[1px] w-8 bg-accent" />
        <h2 className="text-2xl font-display font-bold uppercase tracking-wider text-white">
          Weaponry Arsenal
        </h2>
        <span className="text-xs font-mono text-zinc-500">// TECH_STACK</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Columns: Categories grid (lg:col-span-8) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="bg-[#111113] border border-[#27272A] rounded-lg p-6 flex flex-col space-y-4"
            >
              <div className="flex items-center space-x-2 pb-2 border-b border-zinc-900">
                {category.icon}
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => {
                  const active = isRelated(skill);
                  const isDimmed = hoveredSkill && !active;
                  
                  return (
                    <div
                      key={skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`cursor-default px-3.5 py-2 font-mono text-xs rounded border select-none transition-all duration-300 ${
                        active 
                          ? 'border-accent text-accent bg-accent/5 scale-105 border-glow-accent'
                          : isDimmed 
                            ? 'border-zinc-900 text-zinc-600 opacity-40 scale-95'
                            : 'border-zinc-800 text-zinc-300 hover:border-accent hover:text-accent'
                      }`}
                    >
                      {skill}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Terminal Diagnostics & Relations (lg:col-span-4) */}
        <div className="lg:col-span-4 bg-[#111113] border border-[#27272A] rounded-lg p-6 h-full flex flex-col justify-between font-mono min-h-[300px] lg:min-h-[360px]">
          <div>
            <div className="flex items-center space-x-2 pb-3 border-b border-zinc-900 text-zinc-400 text-xs">
              <Terminal className="w-4 h-4 text-accent" />
              <span>ARSENAL_DIAGNOSTICS v1.0.4</span>
            </div>

            <div className="mt-6 space-y-4 text-xs">
              {hoveredSkill ? (
                <>
                  <div className="space-y-1">
                    <span className="text-zinc-500 uppercase">SELECTED TECH:</span>
                    <h4 className="text-accent text-glow-accent text-lg font-bold tracking-wider font-display">
                      {hoveredSkill}
                    </h4>
                  </div>

                  <div className="space-y-1 mt-4">
                    <span className="text-zinc-500 uppercase">SPECIFICATION:</span>
                    <p className="text-zinc-300 text-xs leading-relaxed font-sans normal-case">
                      {skillMetadata[hoveredSkill]?.desc}
                    </p>
                  </div>

                  <div className="space-y-1 mt-4">
                    <span className="text-zinc-500 uppercase">INTEGRATION SCHEME:</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {skillMetadata[hoveredSkill]?.related.map(rel => (
                        <span key={rel} className="bg-zinc-900 border border-zinc-800 text-white px-2 py-0.5 rounded text-[10px]">
                          +{rel}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-zinc-500 italic py-12 text-center text-xs">
                  [ Hover over any technology cell on the left to initialize diagnostic stream. ]
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 border-t border-zinc-900 pt-4 text-[10px] text-zinc-500 flex justify-between">
            <span>SYS_LINK: ACTIVE</span>
            <span>CELL_DETECT: {hoveredSkill ? "ON" : "STBY"}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
