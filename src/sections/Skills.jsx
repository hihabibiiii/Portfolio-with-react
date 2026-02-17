import { motion } from 'framer-motion';
import { skills as skillsData } from '../data/skills';
import { staggerContainerSmall, fadeUpMedium } from '../animations/variants';

export default function Skills() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-cyan bg-clip-text text-transparent"
            variants={fadeUpMedium}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg"
            variants={fadeUpMedium}
            transition={{ delay: 0.1 }}
          >
            Technologies and tools I work with
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainerSmall}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              className="group relative border border-cyan-500/20 rounded-lg p-6 bg-dark-800/40 backdrop-blur-xl transition-all duration-300 overflow-hidden"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)',
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Gradient accent line */}
              <motion.div
                className="absolute top-0 left-0 h-1 w-0 bg-gradient-cyan transition-all duration-300 group-hover:w-full"
              />
              
              {/* Glow background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">{category.title}</h3>
                  <motion.div 
                    className="w-8 h-8 rounded bg-dark-700 border border-cyan-500/20 group-hover:border-cyan-500/50 group-hover:shadow-neon-cyan transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                <div className="text-gray-400 text-sm mb-4">
                  {category.items.map((item, i) => (
                    <span key={i} className="inline-block bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded mr-2 mb-2 text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
