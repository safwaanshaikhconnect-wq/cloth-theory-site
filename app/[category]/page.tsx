'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';

export default function CategoryPage() {
  const params = useParams();
  const category = (params.category as string).toUpperCase();

  const categoryInfo = {
    title: category,
    description: `Redefining everyday wear with bold cuts and uncompromising quality. This is the ${category} collection.`,
    imageSeed: params.category as string,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  return (
    <main className="relative z-0 min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black">
      <Navbar />

      {/* Editorial Banner */}
      <motion.section
        className="relative h-96 md:h-screen overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={`https://picsum.photos/seed/${categoryInfo.imageSeed}1/1920/1080`}
          alt={`${category} Editorial`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />

        {/* Title */}
        <motion.h1
          className="relative z-10 text-7xl md:text-8xl font-black drop-shadow-2xl"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          {category}
        </motion.h1>
      </motion.section>

      {/* Feature Block */}
      <motion.section
        className="py-20 px-6 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-5xl md:text-6xl font-black mb-6 leading-tight"
              whileHover={{ textShadow: '0 0 20px rgba(255, 51, 51, 0.5)' }}
            >
              The New Standard
            </motion.h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {categoryInfo.description}
            </p>

            <motion.button
              className="px-8 py-4 border-2 border-white rounded-full font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 51, 51, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Collection
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative h-96 md:h-full rounded-xl overflow-hidden"
            variants={itemVariants}
          >
            <motion.img
              src={`https://picsum.photos/seed/${categoryInfo.imageSeed}2/800/800`}
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
        className="py-20 px-6 bg-gradient-to-b from-black via-zinc-950 to-black"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-black mb-12 text-center"
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
                  src={`https://picsum.photos/seed/${categoryInfo.imageSeed}${num}/600/800`}
                  alt={`Look ${num - 2}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Overlay on Hover */}
                <motion.div
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="px-6 py-2 border-2 border-white text-white rounded-full font-semibold"
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

      {/* Fit Guide */}
      <motion.section
        className="py-20 px-6 bg-gradient-to-b from-zinc-950 via-black to-black"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-black mb-12 text-center"
            variants={itemVariants}
          >
            FIT GUIDE
          </motion.h2>

          <motion.div
            className="overflow-x-auto rounded-xl border border-gray-800"
            variants={itemVariants}
          >
            <table className="w-full">
              <thead className="bg-gray-900">
                <tr>
                  <motion.th
                    className="px-6 py-4 text-left font-bold uppercase tracking-wider"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    Size
                  </motion.th>
                  <motion.th
                    className="px-6 py-4 text-left font-bold uppercase tracking-wider"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Age
                  </motion.th>
                  <motion.th
                    className="px-6 py-4 text-left font-bold uppercase tracking-wider"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Height
                  </motion.th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: 'S', age: '6-8', height: '45" - 50"' },
                  { size: 'M', age: '8-10', height: '50" - 55"' },
                  { size: 'L', age: '10-12', height: '55" - 60"' },
                ].map((row, i) => (
                  <motion.tr
                    key={i}
                    className="border-t border-gray-800 hover:bg-gray-900/50 transition-colors"
                    whileHover={{ backgroundColor: 'rgba(17, 24, 39, 0.5)' }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <td className="px-6 py-4 font-semibold">{row.size}</td>
                    <td className="px-6 py-4">{row.age}</td>
                    <td className="px-6 py-4">{row.height}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
