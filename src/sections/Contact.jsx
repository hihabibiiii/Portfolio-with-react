import { motion } from 'framer-motion';
import { useState } from 'react';
import { social } from '../data/social';
import { staggerContainerSmall, fadeUpSmall, fadeUpMedium } from '../animations/variants';

export default function Contact() {
  const [focusedInput, setFocusedInput] = useState(null);

  const inputVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="mx-auto max-w-2xl">
        {/* Section Heading */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-cyan bg-clip-text text-transparent"
            variants={fadeUpMedium}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg"
            variants={fadeUpMedium}
            transition={{ delay: 0.1 }}
          >
            Send me a message and I'll respond as soon as possible
          </motion.p>
        </motion.div>

        {/* Contact Form Container */}
        <motion.div
          className="relative p-8 rounded-xl bg-dark-800/30 backdrop-blur-xl border border-cyan-500/20 overflow-hidden hover:border-cyan-500/40 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          whileHover={{
            boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)',
            transition: { duration: 0.3, ease: 'easeOut' }
          }}
        >
          {/* Gradient accent background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />

          {/* Form */}
          <motion.form
            className="space-y-6 relative z-10"
            variants={staggerContainerSmall}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Name Input */}
            <motion.div
              className="relative space-y-2"
              variants={inputVariant}
            >
              <label className="block text-sm font-medium text-gray-300 transition-colors">Name</label>
              <motion.input
                type="text"
                placeholder="Your name"
                onFocus={() => setFocusedInput('name')}
                onBlur={() => setFocusedInput(null)}
                className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-cyan-500/20 text-white placeholder-gray-600 transition-all duration-300 focus:outline-none focus:border-cyan-500/60"
                whileFocus={{ 
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)',
                  borderColor: 'rgba(6, 182, 212, 0.6)',
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              className="relative space-y-2"
              variants={inputVariant}
            >
              <label className="block text-sm font-medium text-gray-300 transition-colors">Email</label>
              <motion.input
                type="email"
                placeholder="your.email@example.com"
                onFocus={() => setFocusedInput('email')}
                onBlur={() => setFocusedInput(null)}
                className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-cyan-500/20 text-white placeholder-gray-600 transition-all duration-300 focus:outline-none focus:border-cyan-500/60"
                whileFocus={{ 
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)',
                  borderColor: 'rgba(6, 182, 212, 0.6)',
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>

            {/* Message Input */}
            <motion.div
              className="relative space-y-2"
              variants={inputVariant}
            >
              <label className="block text-sm font-medium text-gray-300 transition-colors">Message</label>
              <motion.textarea
                placeholder="Your message"
                rows="6"
                onFocus={() => setFocusedInput('message')}
                onBlur={() => setFocusedInput(null)}
                className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-cyan-500/20 text-white placeholder-gray-600 transition-all duration-300 focus:outline-none focus:border-cyan-500/60 resize-none"
                whileFocus={{ 
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)',
                  borderColor: 'rgba(6, 182, 212, 0.6)',
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full px-6 py-3 rounded-lg text-base font-semibold border border-cyan-500/50 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/80 transition-all duration-300"
              variants={fadeUpSmall}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)',
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              whileTap={{ scale: 0.98 }}
              animate={focusedInput ? {
                boxShadow: [
                  '0 0 20px rgba(6, 182, 212, 0.4)',
                  '0 0 30px rgba(6, 182, 212, 0.6)',
                  '0 0 20px rgba(6, 182, 212, 0.4)'
                ]
              } : {}}
              transition={{ duration: 2, repeat: focusedInput ? Infinity : 0 }}
            >
              Send Message
            </motion.button>

            {/* Contact Info */}
            <motion.p 
              className="text-center text-sm text-gray-400"
              variants={fadeUpSmall}
              transition={{ delay: 0.1 }}
            >
              Or email me directly at <a href={`mailto:${social.email}`} className="text-cyan-300 hover:text-cyan-200 transition-colors">{social.email}</a>
            </motion.p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
