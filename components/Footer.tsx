'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';

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
      className="relative z-0 bg-light dark:bg-dark-secondary border-t border-light dark:border-dark py-6 md:py-12 px-4 md:px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Copyright */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-light-muted dark:text-dark-muted text-sm">
            &copy; 2026 ClothTheory. All rights reserved.
          </p>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          className="mt-8 h-0.5 w-32 bg-gradient-to-r from-transparent via-warm-accent to-transparent mx-auto"
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
