'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { FOOTER_LINKS, ANIMATION_DELAY } from '@/lib/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_DELAY.STAGGER,
      delayChildren: ANIMATION_DELAY.STAGGER,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function Footer() {

  return (
    <motion.footer
      className="relative z-0 bg-gradient-to-t from-black to-zinc-950 border-t border-gray-800 py-12 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Links Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {FOOTER_LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              variants={itemVariants}
              className="text-sm uppercase tracking-wider text-gray-300 hover:text-red-500 transition-colors relative group"
              whileHover={{ scale: 1.05 }}
            >
              {link.label}
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-red-500"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            &copy; 2026 ClothTheory. All rights reserved.
          </p>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          className="mt-8 h-0.5 w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.footer>
  );
}

export default memo(Footer);
