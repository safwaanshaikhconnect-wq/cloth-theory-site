'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedLinkProps {
  href?: string;
  children: ReactNode;
  className?: string;
  whileHover?: any;
  onClick?: () => void;
}

export default function AnimatedLink({
  href,
  children,
  className = '',
  whileHover = {},
  onClick,
}: AnimatedLinkProps) {
  const defaultHoverEffect = {
    scale: 1.05,
    color: '#ff3333',
  };

  return (
    <motion.a
      href={href}
      className={className}
      whileHover={whileHover || defaultHoverEffect}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.a>
  );
}
