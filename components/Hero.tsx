'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { containerVariants, itemVariants, titleVariants, scrollIndicatorVariants } from '@/lib/animations';
import { ANIMATION_DELAY } from '@/lib/constants';

function Hero() {

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-warm-beige">
      {/* Background Gradient Animation - Warm Accent */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-warm-accent rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-warm-accent rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        className="relative z-10 text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title - Playfair Display */}
        <motion.h1
          className="font-heading text-7xl md:text-8xl font-bold tracking-tighter mb-6 drop-shadow-2xl text-text-dark"
          variants={titleVariants}
        >
          <motion.span
            className="inline-block"
            whileHover={{
              scale: 1.05,
              textShadow: '0 0 30px rgba(193, 127, 74, 0.8)',
            }}
            transition={{ duration: 0.3 }}
          >
            CLOTH
          </motion.span>
          <motion.span
            className="inline-block ml-4"
            whileHover={{
              scale: 1.05,
              textShadow: '0 0 30px rgba(193, 127, 74, 0.8)',
            }}
            transition={{ duration: 0.3 }}
          >
            THEORY
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl font-light tracking-[0.3em] text-text-muted uppercase"
          variants={itemVariants}
        >
          WEAR THE THOUGHT
        </motion.p>

        {/* Accent Line */}
        <motion.div
          className="h-1 w-32 bg-warm-accent mx-auto mt-8 rounded-full"
          variants={itemVariants}
          whileHover={{ scaleX: 1.5 }}
        />

        {/* Shop Button */}
        <motion.div
          variants={itemVariants}
          className="mt-12"
        >
          <Link href="/shop">
            <motion.button
              className="px-8 py-3 border-2 border-warm-accent rounded-full text-sm font-semibold uppercase tracking-wider text-warm-accent hover:bg-warm-accent hover:text-luxury-bg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SHOP COLLECTION
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-3 hover:bg-warm-light/50 rounded-full transition-colors border border-border-light text-text-dark"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate={['visible', 'animate']}
        whileHover={{ scale: 1.2 }}
        aria-label="Scroll down"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </motion.button>
    </section>
  );
}

export default memo(Hero);
