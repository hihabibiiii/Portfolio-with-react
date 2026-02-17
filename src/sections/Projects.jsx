import { motion } from 'framer-motion';
import { projects as projectsData } from '../data/projects';
import { staggerContainerMedium, fadeUpMedium } from '../animations/variants';

export default function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/30">
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
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg"
            variants={fadeUpMedium}
            transition={{ delay: 0.1 }}
          >
            A selection of my recent work
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={staggerContainerMedium}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="group relative rounded-lg overflow-hidden bg-dark-800/40 backdrop-blur-xl border border-cyan-500/20 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                boxShadow: '0 0 40px rgba(6, 182, 212, 0.5)',
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              whileTap={{ scale: 0.98 }}
              style={{ perspective: 1000 }}
            >
              {/* Gradient accent border on hover */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
              />

              {/* Glow effect background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />

              {/* Project Image */}
              <div className="relative w-full h-48 bg-dark-700 border-b border-cyan-500/10 group-hover:border-cyan-500/30 transition-colors duration-300 overflow-hidden">
                <motion.a
                  href={project.live || project.demo || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
                </motion.a>
              </div>

              {/* Project Content */}
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-300 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex gap-3">
                  <motion.a 
                    href={project.demo}
                    className="flex-1 px-4 py-2 rounded text-sm font-medium border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-neon-cyan text-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    VIEW
                  </motion.a>
                  <motion.a 
                    href={project.github}
                    className="flex-1 px-4 py-2 rounded text-sm font-medium border border-blue-500/30 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-neon-blue text-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    CODE
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
