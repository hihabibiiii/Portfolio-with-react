import { motion } from 'framer-motion';
import About from '../sections/About';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.45, ease: 'easeInOut' } },
};

export default function AboutPage() {
  return (
    <motion.main {...pageTransition} className="min-h-screen bg-dark-900">
      <About />
    </motion.main>
  );
}
