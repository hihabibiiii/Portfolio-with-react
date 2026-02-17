import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      className="sticky top-0 z-50 w-full bg-dark-900/60 backdrop-blur-xl border-b border-white/5 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl font-bold bg-gradient-cyan bg-clip-text text-transparent">Habib</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div
              className="relative"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/" className={`text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}>
                Home
              </Link>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-cyan"
                initial={{ width: 0 }}
                animate={{ width: location.pathname === '/' ? '100%' : 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.25 }}
              />
            </motion.div>

            <motion.div
              className="relative"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/about" className={`text-sm font-medium transition-colors ${
                location.pathname === '/about' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}>
                About
              </Link>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-cyan"
                initial={{ width: 0 }}
                animate={{ width: location.pathname === '/about' ? '100%' : 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.25 }}
              />
            </motion.div>

            <motion.div
              className="relative"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/projects" className={`text-sm font-medium transition-colors ${
                location.pathname === '/projects' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}>
                Projects
              </Link>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-cyan"
                initial={{ width: 0 }}
                animate={{ width: location.pathname === '/projects' ? '100%' : 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.25 }}
              />
            </motion.div>

            <motion.div
              className="relative"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/contact" className={`text-sm font-medium transition-colors ${
                location.pathname === '/contact' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}>
                Contact
              </Link>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-cyan"
                initial={{ width: 0 }}
                animate={{ width: location.pathname === '/contact' ? '100%' : 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.25 }}
              />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-cyan-400"></div>
              <div className="w-6 h-0.5 bg-cyan-400"></div>
              <div className="w-6 h-0.5 bg-cyan-400"></div>
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden pb-4 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className={`block text-sm font-medium py-2 transition-colors ${
              location.pathname === '/' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
            }`}>
              Home
            </Link>
            <Link to="/about" className={`block text-sm font-medium py-2 transition-colors ${
              location.pathname === '/about' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
            }`}>
              About
            </Link>
            <Link to="/projects" className={`block text-sm font-medium py-2 transition-colors ${
              location.pathname === '/projects' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
            }`}>
              Projects
            </Link>
            <Link to="/contact" className={`block text-sm font-medium py-2 transition-colors ${
              location.pathname === '/contact' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
            }`}>
              Contact
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}