import React, { useEffect } from 'react';
import { useMotionValue, useSpring, motion } from 'framer-motion';

export default function BackgroundGrid() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for a premium parallax feel
  const springConfig = { damping: 40, stiffness: 200, mass: 1 };
  const translateX = useSpring(mouseX, springConfig);
  const translateY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate delta from center of window
      const { innerWidth, innerHeight } = window;
      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;

      // Max displacement is 20px
      const deltaX = ((e.clientX - centerX) / centerX) * 15;
      const deltaY = ((e.clientY - centerY) / centerY) * 15;

      mouseX.set(deltaX);
      mouseY.set(deltaY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#09090B]">
      {/* Parallax Container */}
      <motion.div
        style={{
          x: translateX,
          y: translateY,
          scale: 1.02, // slightly larger to prevent showing edges on parallax shift
        }}
        className="absolute -inset-10 bg-grid-subtle"
      />

      {/* Non-moving overlay layers (Noise and Scanlines) */}
      <div className="absolute inset-0 noise-overlay opacity-60" />
      <div className="absolute inset-0 scanlines-overlay opacity-40" />

      {/* Subtle radial ambient dark green glow in the center */}
      <motion.div
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.03),transparent_70%)]"
      />
    </div>
  );
}
