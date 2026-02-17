import { motion } from 'framer-motion';
import { about } from '../data/about';
import { fadeUpSmall, fadeUpMedium, scaleUp } from '../animations/variants';

export default function About() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
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
            About Me
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg"
            variants={fadeUpMedium}
            transition={{ delay: 0.1 }}
          >
            {about.subtitle}
          </motion.p>
        </motion.div>

        {/* About Content */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="p-8 rounded-xl bg-dark-800/30 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
            whileHover={{
              boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)',
              transition: { duration: 0.3, ease: 'easeOut' }
            }}
          >
            {/* About Paragraphs */}
            <div className="space-y-4 mb-8">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Skills Overview Grid */}
            <div className="mb-8 pt-8 border-t border-cyan-500/20">
              <h3 className="text-xl font-semibold text-cyan-300 mb-6">Skills Overview</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {about.skillsOverview.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">{skillGroup.category}</h4>
                    <ul className="space-y-2">
                      {skillGroup.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-400 text-sm flex items-start">
                          <span className="text-cyan-300 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-8 pt-8 border-t border-cyan-500/20">
              <h3 className="text-xl font-semibold text-cyan-300 mb-6">Education</h3>
              <div className="space-y-4">
                {about.education.map((edu, index) => (
                  <div key={index} className="flex flex-col">
                    <p className="text-gray-300 font-medium">{edu.degree}</p>
                    <p className="text-gray-400 text-sm">{edu.school}</p>
                    <p className="text-cyan-400 text-xs mt-1">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Button */}
            <motion.a
              href={about.resumeLink}
              className="inline-block px-8 py-3 rounded-lg text-base font-semibold border border-cyan-500/50 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/80 transition-all duration-300 hover:shadow-neon-cyan"
              variants={fadeUpSmall}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)',
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
