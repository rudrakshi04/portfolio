import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', icon: '🐍', level: 85, color: '#3776AB' },
  { name: 'React', icon: '⚛️', level: 88, color: '#61DAFB' },
  { name: 'Machine Learning', icon: '🧠', level: 75, color: '#FF6B6B' },
  { name: 'JavaScript', icon: '💛', level: 90, color: '#F7DF1E' },
  { name: 'Java', icon: '☕', level: 82, color: '#007396' },
  { name: 'SQL', icon: '🗃️', level: 85, color: '#4479A1' },
  { name: 'TailwindCSS', icon: '🎨', level: 92, color: '#38B2AC' },
  { name: 'DSA', icon: '🏗️', level: 80, color: '#FF4500' }
];

const softSkills = [
  { icon: "🤝", title: "Team Collaboration" },
  { icon: "🧩", title: "Problem Solving" },
  { icon: "📢", title: "Communication Skills" },
  { icon: "⚡", title: "Leadership & Initiative" },
  { icon: "🧘‍♀️", title: "Calm Under Pressure" },
  { icon: "🎯", title: "Fast Learner" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative bg-[#0a0a0a]">

      {/* 🔥 Glowing Background */}
      <div className="absolute inset-0 bg-[#8b5cf6]/10 blur-[140px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tech stack that fuels my projects — and the soft skills that keep me sane 😭🔥
          </p>
        </motion.div>

        {/* Hard Skills */}
        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="flex items-center justify-between mb-3 text-gray-300">
                <span className="flex items-center gap-2 text-lg">
                  {skill.icon} {skill.name}
                </span>
                <span className="text-sm">{skill.level}%</span>
              </div>

              {/* Progress Bar Container */}
              <div className="h-3 bg-[#1a1a1a] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, delay: index * 0.1 }}
                  className="h-full rounded-full shadow-[0_0_20px]"
                  style={{
                    background: `linear-gradient(to right, ${skill.color}, #8b5cf6)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-4xl font-bold mb-12 text-center text-white">
            Soft Skills
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.07, y: -6 }}
                className="p-6 rounded-2xl bg-[#111]/80 backdrop-blur-md border border-white/10
                           shadow-lg hover:shadow-[0_0_25px_#8b5cf677] hover:border-[#8b5cf6] 
                           transition-all cursor-pointer text-center"
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h4 className="text-xl text-gray-200 font-semibold">
                  {skill.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
