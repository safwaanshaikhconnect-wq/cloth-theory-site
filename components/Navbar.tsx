'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    hover: {
      letterSpacing: '0.15em',
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800"
      style={{ zIndex: 9999 }}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center justify-between px-6 py-4 w-full">
        {/* Left Section - Menu Button */}
        <div className="w-24">
          <motion.button
            className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </motion.button>
        </div>

        {/* Center Section - Logo */}
        <div className="flex-1 flex justify-center">
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Link
              href="/"
              className="text-xl font-black tracking-widest uppercase text-white drop-shadow-lg"
            >
              CLOTHTHEORY
            </Link>
          </motion.div>
        </div>

        {/* Right Section - Icons */}
        <div className="w-24 flex justify-end gap-3">
          <motion.button
            className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Account"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </motion.button>

          <motion.button
            className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            transition={{ duration: 0.6 }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, pointerEvents: 'auto' },
          closed: { opacity: 0, pointerEvents: 'none' },
        }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-6 z-40 mt-2"
      >
        <div className="w-fit rounded-xl border border-gray-800 bg-black/50 backdrop-blur-md overflow-hidden max-h-56">
          <div className="flex flex-col gap-0 py-2 px-2">
            {['Boys', 'Girls', 'Infant', 'Men', 'Women'].map((cat, i) => (
              <motion.div
                key={cat}
                custom={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: (idx: number) => ({
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.05 * idx, duration: 0.4 },
                  }),
                }}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={`/${cat.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="group relative flex items-center py-3 px-4 rounded-lg text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-white transition-all duration-200 hover:bg-gray-900/50"
                >
                  <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-red-500 rounded-r opacity-0 group-hover:opacity-100"
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="ml-2">{cat}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
