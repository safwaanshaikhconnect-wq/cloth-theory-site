'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import { CATEGORIES } from '@/lib/constants';
import { containerVariants, itemVariants } from '@/lib/animations';

function CategoryPage() {
  const params = useParams();
  const categorySlug = (params.category as string).toLowerCase();
  const categoryData = CATEGORIES.find(cat => cat.slug === categorySlug);
  const category = categoryData?.name || categorySlug.toUpperCase();

  return (
    <main className="relative z-0 min-h-screen bg-light dark:bg-dark">
      <Navbar />

      {/* Editorial Banner */}
      <motion.section
        className="relative h-96 md:h-screen overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={`https://picsum.photos/seed/${categorySlug}1/1920/1080`}
          alt={`${category} Editorial`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-light dark:from-dark via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />

        {/* Title */}
        <motion.h1
          className="relative z-10 text-7xl md:text-8xl font-black drop-shadow-2xl text-gray-900 dark:text-white"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          {category}
        </motion.h1>
      </motion.section>

      {/* Feature Block */}
      <motion.section
        className="py-20 px-6 bg-light dark:bg-dark"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-5xl md:text-6xl font-black mb-6 leading-tight text-gray-900 dark:text-white"
              whileHover={{ textShadow: '0 0 20px rgba(193, 127, 74, 0.5)' }}
            >
              The New Standard
            </motion.h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {categoryData?.description || `Redefining everyday wear with bold cuts and uncompromising quality. This is the ${category} collection.`}
            </p>

            <Link href="/shop">
              <motion.button
                className="px-8 py-4 border-2 border-warm-accent rounded-full font-bold uppercase tracking-widest text-warm-accent hover:bg-warm-accent hover:text-luxury-bg transition-all"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(193, 127, 74, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Collection
              </motion.button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative h-96 md:h-full rounded-xl overflow-hidden"
            variants={itemVariants}
          >
            <motion.img
              src={`https://picsum.photos/seed/${categorySlug}2/800/800`}
              alt={`${category} Feature`}
              className="w-full h-full object-cover rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Lookbook Grid */}
      <motion.section
        className="py-20 px-6 bg-light dark:bg-dark"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-black mb-12 text-center text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            LOOKBOOK
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[3, 4, 5, 6].map((num) => (
              <motion.div
                key={num}
                className="group relative h-96 rounded-lg overflow-hidden cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  src={`https://picsum.photos/seed/${categorySlug}${num}/600/800`}
                  alt={`Look ${num - 2}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Overlay on Hover */}
                <motion.div
                  className="absolute inset-0 bg-text-dark/40 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="px-6 py-2 border-2 border-warm-accent text-warm-accent rounded-full font-semibold hover:bg-warm-accent hover:text-luxury-bg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}

export default memo(CategoryPage);
