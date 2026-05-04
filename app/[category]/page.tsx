'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import { CATEGORIES } from '@/lib/constants';
import { containerVariants, itemVariants } from '@/lib/animations';

// All boy shortlisted images
const BOYS_IMAGES = [
  '/images/boys shortlisted/Full Sleeves/Gemini_Generated_Image_18rius18rius18ri.jpg',
  '/images/boys shortlisted/Full Sleeves/Gemini_Generated_Image_wv47eqwv47eqwv47.jpg',
  '/images/boys shortlisted/Full Sleeves/Gemini_Generated_Image_xvmfptxvmfptxvmf.jpg',
  '/images/boys shortlisted/Hoodie/Gemini_Generated_Image_1a68y31a68y31a68.jpg',
  '/images/boys shortlisted/Hoodie/Gemini_Generated_Image_igprgwigprgwigpr.jpg',
  '/images/boys shortlisted/Hoodie/Gemini_Generated_Image_llsctyllsctyllsc.jpg',
  '/images/boys shortlisted/Joggers/Gemini_Generated_Image_7o1x087o1x087o1x.jpg',
  '/images/boys shortlisted/Joggers/Gemini_Generated_Image_95ssly95ssly95ss.jpg',
  '/images/boys shortlisted/Joggers/img 2.jpg',
  '/images/boys shortlisted/Polos/Gemini_Generated_Image_f9yaibf9yaibf9ya.jpg',
  '/images/boys shortlisted/Polos/Gemini_Generated_Image_fpbfc8fpbfc8fpbf.jpg',
  '/images/boys shortlisted/Printed Full Sleeves/Gemini_Generated_Image_22d0fi22d0fi22d0.jpg',
  '/images/boys shortlisted/Printed Polo/Gemini_Generated_Image_d1b7d3d1b7d3d1b7.jpg',
  '/images/boys shortlisted/Printed Polo/Gemini_Generated_Image_h3z66th3z66th3z6.jpg',
  '/images/boys shortlisted/Printed Polo/Gemini_Generated_Image_tv95iytv95iytv95.jpg',
  '/images/boys shortlisted/Shorts/ChatGPT Image Mar 18, 2026, 02_05_31 PM.jpg',
  '/images/boys shortlisted/Shorts/Gemini_Generated_Image_5925s85925s85925.jpg',
  '/images/boys shortlisted/Shorts/Gemini_Generated_Image_syaucksyaucksyau.jpg',
  '/images/boys shortlisted/Slub Shorts/Gemini_Generated_Image_8wnziu8wnziu8wnz (1).jpg',
  '/images/boys shortlisted/Slub Shorts/Gemini_Generated_Image_fzlizjfzlizjfzli.jpg',
  '/images/boys shortlisted/Slub Shorts/Gemini_Generated_Image_m57e6vm57e6vm57e-Photoroom.jpg',
  '/images/boys shortlisted/Solid Tshirts/Gemini_Generated_Image_e2phu9e2phu9e2ph-Photoroom.jpg',
  '/images/boys shortlisted/Solid Tshirts/JWiOr-Photoroom.jpg',
  '/images/boys shortlisted/Solid Tshirts/qYMfp-Photoroom.jpg',
];

// All girls shortlisted images
const GIRLS_IMAGES = [
  '/images/girls shortlisted/Coord Set/ChatGPT Image Feb 17, 2026, 01_18_00 PM.jpg',
  '/images/girls shortlisted/Coord Set/Gemini_Generated_Image_69clf769clf769cl.jpg',
  '/images/girls shortlisted/Coord Set/Gemini_Generated_Image_awt7r6awt7r6awt7.jpg',
  '/images/girls shortlisted/Coord Set/Gemini_Generated_Image_pi4zu3pi4zu3pi4z.jpg',
  '/images/girls shortlisted/Hoodies/2a9ff8f8-f775-488e-9642-d40eec8c0a70.jpg',
  '/images/girls shortlisted/Hoodies/780db7b2-826b-432f-99f1-b99ca7cfc5af.jpg',
  '/images/girls shortlisted/Hoodies/Gemini_Generated_Image_2v5wzi2v5wzi2v5w.jpg',
  '/images/girls shortlisted/Joggers/Gemini_Generated_Image_2o6ugp2o6ugp2o6u.jpg',
  '/images/girls shortlisted/Joggers/Gemini_Generated_Image_7z75ub7z75ub7z75.jpg',
  '/images/girls shortlisted/Joggers/Gemini_Generated_Image_v9rjijv9rjijv9rj.jpg',
  '/images/girls shortlisted/Pajamas/Gemini_Generated_Image_69clf769clf769cl.jpg',
  '/images/girls shortlisted/Shorts/Firefly_Gemini Flash_intha image vanthu 13-14 years rendu girl model wear panni irukura maari venum and av 203503-Photoroom.jpg',
  '/images/girls shortlisted/Shorts/Gemini_Generated_Image_2ubpkf2ubpkf2ubp.jpg',
  '/images/girls shortlisted/Sleeper/Gemini_Generated_Image_mbojr0mbojr0mboj.jpg',
  '/images/girls shortlisted/Sleeper/Gemini_Generated_Image_udde4budde4budde.jpg',
  '/images/girls shortlisted/Sleeper/Gemini_Generated_Image_x09j6dx09j6dx09j.jpg',
];

const getRandomImages = (images: string[], count: number) => {
  const shuffled = [...images].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

function CategoryPage() {
  const params = useParams();
  const categorySlug = (params.category as string).toLowerCase();
  const categoryData = CATEGORIES.find(cat => cat.slug === categorySlug);
  const category = categoryData?.name || categorySlug.toUpperCase();

  const selectedImages = useMemo(() => {
    if (categorySlug === 'boys') {
      return getRandomImages(BOYS_IMAGES, 4);
    } else if (categorySlug === 'girls') {
      return getRandomImages(GIRLS_IMAGES, 4);
    }
    return [];
  }, []);

  return (
    <main className="relative z-0 min-h-screen bg-light dark:bg-dark">
      <Navbar />

      {/* Editorial Banner */}
      <motion.section
        className="relative min-h-[60vh] md:min-h-screen overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={categorySlug === 'boys' ? '/images/boys-page-main.jpg' : categorySlug === 'girls' ? '/images/girls-main-first.jpg' : `https://picsum.photos/seed/${categorySlug}1/1920/1080`}
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
          className="relative z-10 text-4xl md:text-6xl lg:text-8xl font-black drop-shadow-2xl"
          style={{ color: '#FDF8F2' }}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          {category}
        </motion.h1>
      </motion.section>

      {/* Feature Block */}
      <motion.section
        className="py-12 md:py-20 px-4 md:px-6 bg-light dark:bg-dark"
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
              src={categorySlug === 'boys' ? '/images/boys-second.jpg' : categorySlug === 'girls' ? '/images/girls-second.jpg' : `https://picsum.photos/seed/${categorySlug}2/800/800`}
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
        className="py-12 md:py-20 px-4 md:px-6 bg-light dark:bg-dark"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-black mb-8 md:mb-12 text-center text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            LOOKBOOK
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {(categorySlug === 'boys' || categorySlug === 'girls') && selectedImages.length > 0
              ? selectedImages.map((imagePath, index) => (
                  <motion.div
                    key={index}
                    className="group relative h-48 md:h-80 lg:h-96 rounded-lg overflow-hidden cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={imagePath}
                      alt={`Look ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />

                    {/* Overlay on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-text-dark/40 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link href="/shop">
                        <motion.button
                          className="px-6 py-2 border-2 border-warm-accent text-warm-accent rounded-full font-semibold hover:bg-warm-accent hover:text-luxury-bg transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View
                        </motion.button>
                      </Link>
                    </motion.div>
                  </motion.div>
                ))
              : [3, 4, 5, 6].map((num) => (
                  <motion.div
                    key={num}
                    className="group relative h-48 md:h-80 lg:h-96 rounded-lg overflow-hidden cursor-pointer"
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
                      <Link href="/shop">
                        <motion.button
                          className="px-6 py-2 border-2 border-warm-accent text-warm-accent rounded-full font-semibold hover:bg-warm-accent hover:text-luxury-bg transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View
                        </motion.button>
                      </Link>
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
