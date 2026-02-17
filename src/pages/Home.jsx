import { motion } from 'framer-motion';
import Hero from '../sections/Hero';
import Skills from '../sections/Skills';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.45, ease: 'easeInOut' } },
};

export default function Home() {
  return (
    <motion.main {...pageTransition} className="min-h-screen bg-dark-900">
      <Hero />
      <Skills />
    </motion.main>
  );
}
