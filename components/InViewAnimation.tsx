'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface InViewAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  type?: 'fadeUp' | 'fadeDown' | 'slideLeft' | 'slideRight' | 'scale';
}

export default function InViewAnimation({
  children,
  delay = 0,
  duration = 0.8,
  type = 'fadeUp',
}: InViewAnimationProps) {
  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { delay, duration, ease: 'easeOut' },
      },
    },
    fadeDown: {
      hidden: { opacity: 0, y: -40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { delay, duration, ease: 'easeOut' },
      },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { delay, duration, ease: 'easeOut' },
      },
    },
    slideRight: {
      hidden: { opacity: 0, x: 60 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { delay, duration, ease: 'easeOut' },
      },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { delay, duration, ease: 'easeOut' },
      },
    },
  };

  const selectedVariant = variants[type];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={selectedVariant}
    >
      {children}
    </motion.div>
  );
}
