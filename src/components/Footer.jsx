import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      {/* Glowing Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

      <footer className="w-full py-16 px-3 sm:px-6 lg:px-8 bg-dark-900/50 relative overflow-hidden">
        {/* Radial Glow Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(circle at center, rgba(6,182,212,0.1) 0%, transparent 70%)' }}
        />

        <motion.div
          className="mx-auto max-w-7xl relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div variants={fadeInUp} className="mb-8 md:mb-0">
              <motion.h2
                className="text-2xl font-bold mb-6 bg-gradient-cyan bg-clip-text text-transparent"
                whileHover={{ textShadow: '0 0 20px rgba(6, 182, 212, 0.8)', letterSpacing: '0.05em' }}
              >
                Habibullah Salmani
              </motion.h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Data Scientist & Full Stack Developer building data-driven and scalable web applications.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeInUp} className="mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.35 }}>
                    <NavLink
                      to="/"
                      className="text-gray-500 hover:text-cyan-300 transition-all duration-300 relative block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Home
                    </NavLink>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.35 }}>
                    <NavLink
                      to="/about"
                      className="text-gray-500 hover:text-cyan-300 transition-all duration-300 relative block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      About
                    </NavLink>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.35 }}>
                    <NavLink
                      to="/projects"
                      className="text-gray-500 hover:text-cyan-300 transition-all duration-300 relative block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Projects
                    </NavLink>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.35 }}>
                    <NavLink
                      to="/contact"
                      className="text-gray-500 hover:text-cyan-300 transition-all duration-300 relative block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Contact
                    </NavLink>
                  </motion.div>
                </li>
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-semibold mb-6 text-white">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <motion.a
                    href="https://github.com/hihabibiiii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-cyan-300 transition-all duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <Github className="w-4 h-4 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-300" />
                    GitHub
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="https://www.linkedin.com/in/habibullah-salmani-49385928b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-cyan-300 transition-all duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <Linkedin className="w-4 h-4 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-300" />
                    LinkedIn
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="https://x.com/HabibullahHs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-cyan-300 transition-all duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <Twitter className="w-4 h-4 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-300" />
                    Twitter/X
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="https://instagram.com/hihabibiiii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-cyan-300 transition-all duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <Instagram className="w-4 h-4 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-300" />
                    Instagram
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="mailto:hshabibullah@gmail.com"
                    className="text-gray-500 hover:text-cyan-300 transition-all duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="w-4 h-4 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-300" />
                    Email
                  </motion.a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-cyan-500/10 text-center">
            <p className="text-gray-600/80 text-sm">
              © {currentYear} Habibullah Salmani. All rights reserved.
            </p>
          </div>
        </motion.div>
      </footer>
    </>
  );
}
