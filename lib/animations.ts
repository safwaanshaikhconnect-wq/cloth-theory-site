/**
 * Reusable animation variants for Framer Motion
 * Centralizes all animation definitions to avoid duplication
 */

import { ANIMATION_DELAY, ANIMATION_DURATION } from './constants';

export const navigationVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.SLOW,
      ease: 'easeOut',
    },
  },
};

export const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.SLOW,
      ease: 'easeOut',
    },
  },
  hover: {
    letterSpacing: '0.15em',
    transition: { duration: ANIMATION_DURATION.FAST },
  },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_DELAY.STAGGER,
      delayChildren: delay,
    },
  }),
};

export const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: ANIMATION_DURATION.SLOW,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
};

export const titleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.SLOWER,
      ease: 'easeOut',
    },
  },
};

export const scrollIndicatorVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1.2, duration: ANIMATION_DURATION.SLOW },
  },
  animate: {
    y: [0, 10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const panelVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.SLOW,
      ease: 'easeOut',
    },
  },
};

export const inViewAnimationVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: ANIMATION_DURATION.SLOW, ease: 'easeOut' },
    },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: ANIMATION_DURATION.SLOW, ease: 'easeOut' },
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: ANIMATION_DURATION.SLOW, ease: 'easeOut' },
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: ANIMATION_DURATION.SLOW, ease: 'easeOut' },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: ANIMATION_DURATION.SLOW, ease: 'easeOut' },
    },
  },
};
