'use client';

import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CATEGORIES, BRAND_NAME } from '@/lib/constants';
import { navigationVariants, logoVariants } from '@/lib/animations';
import { useTheme } from '@/contexts/ThemeContext';

function NavbarContent() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (idx: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.05 * idx, duration: 0.4 },
    }),
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-light dark:bg-dark-secondary backdrop-blur-md border-b border-light dark:border-dark text-light dark:text-dark"
      style={{ zIndex: 9999 }}
      variants={navigationVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 w-full">
        {/* Left Section - Menu Button */}
        <div className="w-10 md:w-24">
          <motion.button
            className="p-2 hover:bg-light-secondary dark:hover:bg-dark text-light dark:text-dark rounded-lg transition-colors"
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
              className="font-heading text-xl md:text-2xl font-bold tracking-widest uppercase text-light dark:text-dark drop-shadow-lg"
            >
              {BRAND_NAME}
            </Link>
          </motion.div>
        </div>

        {/* Right Section - Icons */}
        <div className="w-10 md:w-24 flex justify-end gap-3">
          <motion.button
            className="p-2 hover:bg-light-secondary dark:hover:bg-dark text-light dark:text-dark rounded-lg transition-colors"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            transition={{ duration: 0.6 }}
          >
            {theme === 'light' ? (
              // Moon icon for light mode
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              // Sun icon for dark mode
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
            )}
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
        <div className="w-fit rounded-xl border border-light dark:border-dark bg-light-secondary dark:bg-dark-secondary/50 dark:backdrop-blur-md backdrop-blur-md overflow-hidden max-h-56">
          <div className="flex flex-col gap-0 py-2 px-2">
            {CATEGORIES.map((category, i) => (
              <motion.div
                key={category.slug}
                custom={i}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={`/${category.slug}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="group relative flex items-center py-3 px-4 rounded-lg text-sm font-semibold uppercase tracking-widest text-light-muted dark:text-dark-muted hover:text-light dark:hover:text-dark transition-all duration-200 hover:bg-light-secondary dark:hover:bg-dark"
                >
                  <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-red-500 rounded-r opacity-0 group-hover:opacity-100"
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="ml-2">{category.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default memo(NavbarContent);
