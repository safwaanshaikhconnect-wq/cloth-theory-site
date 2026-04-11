'use client';

import { ReactNode, useMemo } from 'react';
import { motion } from 'framer-motion';
import { inViewAnimationVariants } from '@/lib/animations';
import { AnimationType } from '@/lib/types';

interface InViewAnimationProps {
  children: ReactNode;
  delay?: number;
  type?: AnimationType;
}

export default function InViewAnimation({
  children,
  delay = 0,
  type = 'fadeUp',
}: InViewAnimationProps) {
  const variants = useMemo(() => {
    const selectedVariant = inViewAnimationVariants[type];
    if (delay > 0 && selectedVariant.visible.transition) {
      return {
        ...selectedVariant,
        visible: {
          ...selectedVariant.visible,
          transition: {
            ...selectedVariant.visible.transition,
            delay,
          },
        },
      };
    }
    return selectedVariant;
  }, [type, delay]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
