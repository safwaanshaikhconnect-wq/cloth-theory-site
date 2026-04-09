'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const categories = [
  { name: 'Boys', slug: 'boys', seed: 'boys' },
  { name: 'Girls', slug: 'girls', seed: 'girls' },
  { name: 'Infant', slug: 'infant', seed: 'infant' },
  { name: 'Men', slug: 'men', seed: 'men' },
  { name: 'Women', slug: 'women', seed: 'women' },
];

export default function PanelsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const panelVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative z-0 py-20 bg-gradient-to-b from-black via-zinc-950 to-black">
      {/* Section Title */}
      <motion.div
        className="text-center mb-16 px-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
          COLLECTIONS
        </h2>
        <motion.div
          className="h-1 w-24 bg-red-500 mx-auto rounded-full"
          layoutId="underline"
        />
      </motion.div>

      {/* Panels Grid */}
      <motion.div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {categories.map((category, index) => (
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
              <img
                src={`https://picsum.photos/seed/${category.seed}/600/800?random=${index}`}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-black"
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: hoveredIndex === index ? 0.5 : 0.3,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Content */}
            <Link href={`/${category.slug}`}>
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-center z-10"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-4xl md:text-3xl font-black tracking-widest uppercase mb-4 drop-shadow-lg"
                  animate={{
                    y: hoveredIndex === index ? -10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {category.name}
                </motion.h3>

                <motion.button
                  className="px-6 py-2 border-2 border-white rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
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
