import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const whatIDo = [
    { emoji: '🏗️', title: 'Build Apps', desc: 'Clean logic + clean UI = perfect apps' },
    { emoji: '🧠', title: 'Explore ML', desc: 'kNN, classification, recommendation systems' },
    { emoji: '🚀', title: 'Real Projects', desc: 'Product-style projects that actually work' }
  ];

  const cardClasses =
    "p-6 rounded-2xl bg-[#111] border border-white/10 hover:border-[#8b5cf6] transition-all shadow-lg hover:shadow-[0_0_20px_#8b5cf655] backdrop-blur-md";

  return (
    <section id="about" className="py-32 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hey! I'm Rude — a Computer Science undergrad who loves building smart, aesthetic, and user-friendly tech while vibing with real-world problems.
          </p>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start relative">
          
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center space-y-20"
          >

            {/* IMAGE + FLOATING CARD */}
            <div className="relative w-full flex justify-center pb-16">

              <motion.img
                src="public/rude.png"
                alt="Rude Cutout"
                className="w-[320px] md:w-[420px] lg:w-[500px] object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.5)]"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ duration: 0.3 }}
                className={`
                  absolute bottom-[-40px] w-[85%] md:w-[70%]
                  ${cardClasses}
                `}
              >
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <span>👩‍💻</span> The Real Me
                </h3>
                <p className="text-gray-300 italic mb-2">
                  “I code, I vibe, I panic-debug — all at once.”
                </p>
                <p className="text-gray-400">
                  Obsessed with ML, full-stack builds, and making projects look way cooler than they should.
                </p>
              </motion.div>
            </div>

            {/* WHAT I DO */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <span>🎯</span> What I Do
              </h3>

              <div className="flex flex-wrap justify-between gap-6 w-full">
                {whatIDo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className={`flex-1 min-w-[200px] ${cardClasses}`}
                  >
                    <div className="text-3xl mb-3">{item.emoji}</div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >

            {/* CURRENT FOCUS */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className={cardClasses}
            >
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <span className="animate-pulse">🚀</span> Current Focus
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>📊 ML (beginner but getting deadly good)</p>
                <p>🔥 DSA & Algorithms</p>
                <p>🚀 Full-Stack Development</p>
                <p>📈 Data Scraping & Automation</p>
                <p>✨ UI/UX & Clean Architecture</p>
              </div>
            </motion.div>

            {/* TECH STACK */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className=""
            >
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <span>🛠️</span> Tech Stack
              </h3>

              <div className="grid grid-cols-2 gap-6 text-gray-300">

                <div className={cardClasses}>
                  <h4 className="text-lg font-semibold mb-3 text-[#8b5cf6]">Languages</h4>
                  <p>🐍 Python</p>
                  <p>☕ Java</p>
                  <p>💛 JavaScript</p>
                  <p>🗃️ SQL</p>
                  <p>🎨 HTML/CSS</p>
                </div>

                <div className={cardClasses}>
                  <h4 className="text-lg font-semibold mb-3 text-[#3b82f6]">Frameworks & Tools</h4>
                  <p>⚛️ React</p>
                  <p>🟢 Node.js</p>
                  <p>⚡ Express</p>
                  <p>🍃 MySQL / MongoDB</p>
                  <p>🎨 TailwindCSS</p>
                  <p>🧠 Scikit-Learn / Pandas</p>
                </div>
              </div>
            </motion.div>

            {/* ACHIEVEMENTS */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className={cardClasses}
            >
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <span>🏆</span> Achievements
              </h3>

              <div className="space-y-4 text-gray-300">
                <p>
                  🥋 <span className="text-white font-semibold">Black Belt in Karate</span> —  
                  competed in <span className="text-[#8b5cf6] font-semibold">4 National Championships</span>.
                </p>

                <p>
                  🧪 Secured <span className="text-white font-semibold">2nd Prize</span> in  
                  <span className="text-[#3b82f6] font-semibold">National Science Day Ideation Fair</span>.
                </p>

                <p>
                  🏛️ Awarded <span className="text-white font-semibold">MOP (Party Member)</span>  
                  at the college Mock Parliament event.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
