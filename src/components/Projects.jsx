import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      name: 'Smart Wardrobe',
      desc: 'Virtual closet & outfit recommendations system.',
      tech: ['React', 'Python', 'ML'],
      github: 'https://github.com/rudrakshi04/SmartWardrobe.git',
      live: 'https://rudrakshi04.github.io/SmartWardrobe/web/index.html'
    },
    {
      name: 'Zenith Expense Tracker',
      desc: 'Full-stack expense management app.',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/rude/zenith-expense-tracker',
      live: 'https://zenith-expense.live'
    },
    {
      name: 'Data Scraper Bot',
      desc: 'Automated web scraper with analytics.',
      tech: ['Python', 'BeautifulSoup', 'Pandas'],
      github: 'https://github.com/rude/data-scraper-bot',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-32 relative" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
            My Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some projects I’ve built—real-world apps with live links and code!
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-2xl border relative overflow-hidden group"
              style={{ backgroundColor: '#1a1a1a', borderColor: '#2a2a2a' }}
            >
              {/* Gradient Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>

              <div className="relative z-10 mb-4">
                <h3 className="text-xl font-bold text-white mb-2">{proj.name}</h3>
                <p className="text-gray-400 mb-2">{proj.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((tech, i) => (
                    <span key={i} className="text-xs text-gray-300 px-2 py-1 border rounded">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-4 relative z-10">
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white text-sm transition">
                    GitHub
                  </a>
                )}
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded text-white text-sm transition">
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
