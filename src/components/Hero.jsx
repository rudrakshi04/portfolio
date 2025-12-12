import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [coffees, setCoffees] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const timer = setInterval(() => {
      setCoffees((prev) => (prev < 3 ? prev + 1 : 0));
    }, 2000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  const coffeeCups = ['☕', '🫖', '☕', '☕'];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
  
      {/* Floating gradient blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-600 rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Mouse reactive light */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 transition-all duration-1000 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(139,92,246,0.4) 50%, rgba(236,72,153,0.3) 100%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transform: 'scale(1.5)',
        }}
      />

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Coffee Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-900/60">
              <span className="text-lg">{coffeeCups[coffees]}</span>
              <span className="text-sm text-gray-400">Powered by caffeine & chaos</span>
              <span className="text-lg">{coffeeCups[coffees]}</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 leading-none"
          >
            <span className="text-white">Hi, I'm</span>
            <br />
            <span
              className="animate-pulse"
              style={{
                background:
                  'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 3s ease infinite',
              }}
            >
              Rudrakshi
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-4 font-medium"
          >
            B.Tech CS Student | ML Enthusiast | Full-Stack New-Gen Builder
          </motion.p>

          {/* One-liner */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto italic"
          >
            "Turning caffeine, curiosity, and chaotic ideas into clean code."
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#projects"
              className="group px-8 py-4 rounded-2xl font-semibold text-lg bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30 hover:scale-105 transition flex items-center gap-2"
            >
              View Projects →
            </a>

            <a
              href="/public/CV.pdf"
              download
              className="group px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-purple-500 bg-purple-500/10 hover:bg-purple-600/20 transition flex items-center gap-2"
            >
              <FaDownload /> Download Resume
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12"
          >
            {[
              { number: '2+', label: 'Major Projects' },
              { number: '5+', label: 'Technologies Learned' },
              { number: '3+', label: 'Hackathons Participated' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-blue-500">{s.number}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex gap-6 justify-center"
          >
            {[
              { icon: FaGithub, href: 'https://github.com/rudrakshi04', color: '#8b5cf6' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/rudrakshi-kapse-92a412252', color: '#3b82f6' },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  className="w-14 h-14 rounded-full flex items-center justify-center border transition"
                  style={{ borderColor: s.color + '40' }}
                >
                  <Icon className="text-xl" style={{ color: s.color }} />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
