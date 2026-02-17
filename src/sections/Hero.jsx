import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { about } from '../data/about';
import { textContainer, textItem, fadeUpSmall, staggerContainerSmall } from '../animations/variants';

export default function Hero() {
  const navigate = useNavigate();
  // Split name into words for reveal animation
  const nameWords = about.name.split(' ');
  const roleWords = about.role.split(' ');

  return (
    <section className="w-full min-h-screen flex flex-col justify-center pt-20 pb-20">
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={staggerContainerSmall}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Title with Text Reveal */}
        <motion.div
          className="mb-8 relative"
          variants={textContainer}
        >
          <div className="absolute inset-0 bg-radial-gradient from-cyan-500/20 via-transparent to-transparent blur-3xl opacity-50" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-cyber bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-move tracking-wide relative z-10">
            {nameWords.map((word, idx) => (
              <motion.span
                key={idx}
                variants={textItem}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Hero Subtitle with stagger */}
        <motion.div
          className="mb-12"
          variants={textContainer}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
            {roleWords.map((word, idx) => (
              <motion.span
                key={idx}
                variants={textItem}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="px-10 py-4 rounded-lg text-base font-semibold border border-cyan-500/50 bg-cyan-500/10 hover:bg-cyan-500/20 neon-glow-cyan transition-colors"
          variants={fadeUpSmall}
          whileHover={{ 
            scale: 1.03,
            boxShadow: '0 0 60px rgba(6, 182, 212, 1.0)'
          }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            boxShadow: [
              '0 0 20px rgba(6, 182, 212, 0.4)',
              '0 0 40px rgba(6, 182, 212, 0.6)',
              '0 0 20px rgba(6, 182, 212, 0.4)'
            ],
            scale: [1, 1.01, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => navigate('/projects')}
        >
          View Projects
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="mt-16 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}