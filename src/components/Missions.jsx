import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Cpu, FileText, X, Calendar } from 'lucide-react';

const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const missions = [
  {
    id: "cycora",
    name: "Mission: Cycora",
    type: "IoT & WEB ECOSYSTEM",
    date: "Q3 2025",
    overview: "A smart cycling companion and anti-theft security system utilizing IoT hardware integrated with a real-time tracking web panel.",
    problem: "Commuter cyclists face high rates of bicycle theft and lack reliable localized data on route conditions, hazards, and cycling infrastructure.",
    solution: "Designed and engineered an IoT-enabled hardware module that mounts to a bicycle frame, sending real-time coordinates and motion alerts to a responsive web dashboard. Integrates crowdsourced route hazard reporting.",
    tech: ["React", "Flask", "Firebase", "Leaflet API", "Python", "IoT Sensors"],
    github: "https://github.com/minnahdev/cycora",

  },
  {
    id: "nutriscan",
    name: "Mission: NutriScan",
    type: "COMPUTER VISION & HEALTH",
    date: "Q4 2025",
    overview: "A mobile-friendly scanner web application that analyzes grocery ingredients list photos to flag food allergens and toxic additives.",
    problem: "People with dietary constraints, allergies, or chronic health issues face difficulties decoding micro-printed, complex scientific chemical names on food packaging labels.",
    solution: "Built a web app that captures label photos, processes them using OCR engines, parses the text against medical allergen profiles, and instantly alerts the user to dangerous ingredients.",
    tech: ["React", "Python", "Flask", "OpenCV", "Tesseract OCR", "Tailwind CSS"],
    github: "https://github.com/minnahdev/Team3-Nutriscan",

  },
  {
    id: "signalless",
    name: "Mission: SignalLess",
    type: "SAFETY & CONNECTIVITY",
    date: "Q1 2026",
    overview: "A Bluetooth-based personal distress signal sender designed to broadcast emergency alerts to nearby devices without internet connectivity.",
    problem: "In remote areas, emergencies, or situations with no cellular coverage, individuals have no reliable way to send a distress signal or call for help from nearby people.",
    solution: "Conceptualized a low-cost wearable device that uses Bluetooth Low Energy (BLE) to broadcast encrypted SOS signals to nearby smartphones, triggering alert notifications even without internet access.",
    tech: ["Bluetooth LE", "Embedded C", "React Native", "Firebase"],

  },
  {
    id: "nasa-apps",
    name: "Mission: NASA Space Apps",
    type: "CITY PLANNING / WINNER",
    date: "Q4 2025",
    overview: "A data-driven city planning tool that leverages NASA satellite data — terrestrial, humidity, and weather datasets — to assist urban planners in making smarter infrastructure decisions.",
    problem: "Urban planners lack accessible, real-time geospatial intelligence. NASA's rich open datasets on land surface temperature, moisture, and atmospheric conditions remain siloed from practical city development tools.",
    solution: "Built an interactive city planning dashboard that ingests NASA terrestrial, humidity, and weather API streams to visualize risk zones, green cover indices, and climate impact patterns — helping city developers plan infrastructure with environmental intelligence. Won Local Winner at NASA Space Apps Challenge, CEAL.",
    tech: ["React", "Three.js", "Tailwind CSS", "NASA Open APIs", "Framer Motion"],
    github: "https://github.com/minnahdev/nasa-space-apps-2025",

  }
];

export default function Missions() {
  const [selectedMission, setSelectedMission] = useState(null);

  return (
    <section id="missions" className="py-20 px-4 max-w-7xl mx-auto border-t border-zinc-900 scroll-mt-16">
      {/* Title */}
      <div className="flex items-center space-x-3 mb-12">
        <div className="h-[1px] w-8 bg-accent" />
        <h2 className="text-2xl font-display font-bold uppercase tracking-wider text-white">
          Active Missions
        </h2>
        <span className="text-xs font-mono text-zinc-500">// COMPLETED_PROJECTS</span>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {missions.map((mission) => (
          <motion.div
            key={mission.id}
            layoutId={`card-container-${mission.id}`}
            onClick={() => setSelectedMission(mission)}
            className="bg-[#111113] border border-[#27272A] rounded-lg p-6 flex flex-col justify-between cursor-pointer hover:border-accent/40 transition-colors duration-300 relative group overflow-hidden"
          >
            {/* Corner Bracket styling to make it feel dossier-like */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-accent/30 transition-colors duration-300 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-transparent group-hover:border-accent/30 transition-colors duration-300 pointer-events-none" />

            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-[10px] text-accent tracking-widest uppercase">
                  {mission.type}
                </span>
                <span className="font-mono text-[10px] text-zinc-500 flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{mission.date}</span>
                </span>
              </div>

              <h3 className="font-display font-bold text-white text-lg md:text-xl mb-3 group-hover:text-accent transition-colors duration-200 uppercase">
                {mission.name}
              </h3>

              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6">
                {mission.overview}
              </p>
            </div>

            <div className="border-t border-zinc-900 pt-4 flex flex-wrap gap-1.5 mt-auto">
              {mission.tech.slice(0, 4).map((t) => (
                <span key={t} className="bg-zinc-900/50 border border-zinc-800 text-zinc-500 px-2 py-0.5 rounded font-mono text-[10px]">
                  {t}
                </span>
              ))}
              {mission.tech.length > 4 && (
                <span className="text-zinc-600 font-mono text-[10px] self-center">
                  +{mission.tech.length - 4} more
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {selectedMission && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMission(null)}
              className="fixed inset-0 bg-black/90 z-50 backdrop-blur-sm"
            />

            {/* Expanded Card */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
              <motion.div
                layoutId={`card-container-${selectedMission.id}`}
                className="bg-[#111113] border border-[#27272A] rounded-lg p-6 md:p-8 max-w-2xl w-full relative shadow-2xl font-mono text-xs max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMission(null)}
                  className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white border border-zinc-800 hover:border-accent rounded transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Mission Badge */}
                <div className="flex items-center space-x-2 text-[10px] text-accent font-semibold tracking-widest uppercase mb-4">
                  <Target className="w-4 h-4" />
                  <span>{selectedMission.type} // {selectedMission.date}</span>
                </div>

                {/* Mission Name */}
                <h3 className="font-display font-bold text-white text-xl md:text-2xl uppercase mb-6 text-glow-accent">
                  {selectedMission.name}
                </h3>

                {/* Details Sections */}
                <div className="space-y-6 text-zinc-300 font-sans text-sm">
                  
                  {/* Overview */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-zinc-500 font-mono text-xs uppercase tracking-wider">
                      <FileText className="w-3.5 h-3.5" />
                      <span>MISSION OVERVIEW</span>
                    </div>
                    <p className="leading-relaxed text-zinc-300">
                      {selectedMission.overview}
                    </p>
                  </div>

                  {/* Problem Statement */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-zinc-500 font-mono text-xs uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                      <span>THE CONSTRAINTS & PROBLEM</span>
                    </div>
                    <p className="leading-relaxed text-zinc-400">
                      {selectedMission.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-zinc-500 font-mono text-xs uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>TACTICAL SOLUTION</span>
                    </div>
                    <p className="leading-relaxed text-zinc-300">
                      {selectedMission.solution}
                    </p>
                  </div>

                  {/* Technologies Used */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-zinc-500 font-mono text-xs uppercase tracking-wider">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>ENGINEERING arsenal</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                      {selectedMission.tech.map((t) => (
                        <span key={t} className="bg-zinc-900 border border-zinc-800 text-white px-2.5 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Action Buttons */}
                <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-wrap gap-4 font-mono">
                  {/* GitHub Repo — only shown when a link exists */}
                  {selectedMission.github ? (
                    <a
                      href={selectedMission.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 bg-zinc-900 border border-zinc-800 hover:border-white text-white px-4 py-2.5 rounded transition-all duration-200"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GET_SOURCE_CODE</span>
                    </a>
                  ) : (
                    <span className="flex items-center space-x-2 border border-zinc-800 text-zinc-600 px-4 py-2.5 rounded font-mono text-xs">
                      <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
                      <span>CONCEPT_STAGE — NO_REPO_YET</span>
                    </span>
                  )}


                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
