'use client';

import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CATEGORIES, ANIMATION_DELAY } from '@/lib/constants';
import { containerVariants, panelVariants } from '@/lib/animations';

function PanelsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative z-0 py-12 md:py-20 bg-light dark:bg-dark">
      {/* Section Title */}
      <motion.div
        className="text-center mb-12 md:mb-16 px-4 md:px-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-light dark:text-dark">
          COLLECTIONS
        </h2>
        <motion.div
          className="h-1 w-24 bg-warm-accent mx-auto rounded-full"
          layoutId="underline"
        />
      </motion.div>

      {/* Panels Grid */}
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {CATEGORIES.map((category, index) => (
          <motion.div
            key={category.slug}
            className="group relative h-96 overflow-hidden rounded-xl cursor-pointer"
            variants={panelVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image Background */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              initial={{ scale: 1 }}
              animate={{
                scale: hoveredIndex === index ? 1.1 : 1,
              }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={category.slug === 'boys' ? '/images/boys-collection.jpg' : category.slug === 'girls' ? '/images/girls-collection.jpg' : `https://picsum.photos/seed/${category.seed}/600/800?random=${index}`}
                alt={`${category.name} Collection`}
                fill
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-light/20 dark:bg-dark/30"
                initial={{ opacity: 0.2 }}
                animate={{
                  opacity: hoveredIndex === index ? 0.4 : 0.2,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Content */}
            <Link href={`/${category.slug}`}>
              <motion.div
                className="absolute bottom-4 left-4 z-10"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-2xl font-bold tracking-widest uppercase"
                  style={{
                    color: '#FDF8F2',
                    textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
                  }}
                  animate={{
                    y: hoveredIndex === index ? -10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {category.name}
                </motion.h3>

                <motion.button
                  className="px-6 py-2 border-2 border-warm-accent rounded-full text-sm font-semibold uppercase tracking-wider text-warm-accent hover:bg-warm-accent hover:text-light dark:hover:text-dark transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore
                </motion.button>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default memo(PanelsGrid);
