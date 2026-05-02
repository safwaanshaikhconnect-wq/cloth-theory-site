'use client';

import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { containerVariants, itemVariants } from '@/lib/animations';

const GIRLS_CATEGORIES = [
  'Coord Set',
  'Hoodies',
  'Joggers',
  'Pajamas',
  'Printed Hoodies',
  'Shorts',
  'Sleeper',
];

const BOYS_CATEGORIES = [
  'Full Sleeves',
  'Hoodie',
  'Joggers',
  'Polos',
  'Printed Full Sleeves',
  'Printed Polo',
  'Shorts',
  'Slub Shorts',
  'Solid Tshirts',
];

const PRODUCTS = [
  { id: 1, name: 'Asymmetric top', color: '+1 Color' },
  { id: 2, name: 'T-shirt with print', color: '+1 Color' },
  { id: 3, name: 'Low waist shorts', color: '' },
  { id: 4, name: 'Fitted dress', color: '+2 Colors' },
  { id: 5, name: 'Classic hoodie', color: '+3 Colors' },
  { id: 6, name: 'Tailored jacket', color: '+1 Color' },
];

function ShopPage() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getCategories = () => {
    if (activeTab === 'ALL') {
      return [
        ...GIRLS_CATEGORIES.map(cat => ({ name: cat, gender: 'Girls' })),
        ...BOYS_CATEGORIES.map(cat => ({ name: cat, gender: 'Boys' })),
      ];
    } else if (activeTab === 'GIRLS') {
      return GIRLS_CATEGORIES.map(cat => ({ name: cat, gender: 'Girls' }));
    } else {
      return BOYS_CATEGORIES.map(cat => ({ name: cat, gender: 'Boys' }));
    }
  };

  const getCategoryLabel = (category: { name: string; gender: string } | string) => {
    if (typeof category === 'string') {
      return category;
    }
    return activeTab === 'ALL' ? `${category.name} - ${category.gender}` : category.name;
  };

  return (
    <div className="min-h-screen bg-light dark:bg-dark text-light dark:text-dark">
      <Navbar />

      <div className="flex pt-20">
        {/* Left Sidebar */}
        <motion.aside
          className="w-64 bg-light-secondary dark:bg-dark-secondary border-r border-light dark:border-dark px-6 py-8 fixed h-screen overflow-y-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            {getCategories().map((category, index) => {
              const categoryObj = typeof category === 'string' ? { name: category, gender: '' } : category;
              const key = typeof category === 'string' ? category : `${category.name}-${category.gender}`;
              return (
                <motion.a
                  key={key}
                  href={`#${categoryObj.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-sm text-gray-900 dark:text-white hover:text-warm-accent dark:hover:text-warm-accent transition-colors py-2 cursor-pointer font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ paddingLeft: '0.5rem' }}
                >
                  {getCategoryLabel(category)}
                </motion.a>
              );
            })}
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="ml-64 flex-1 px-8 py-8">
          {/* Top Controls */}
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Tab Toggle */}
            <div className="flex gap-6">
              {['ALL', 'BOYS', 'GIRLS'].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-lg font-bold tracking-wider transition-colors ${
                    activeTab === tab
                      ? 'text-gray-900 dark:text-white border-b-2 border-warm-accent'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab}
                </motion.button>
              ))}
            </div>

            {/* Filter Dropdown */}
            <motion.select
              className="px-4 py-2 bg-light dark:bg-dark-secondary border border-light dark:border-dark rounded text-sm text-gray-900 dark:text-white cursor-pointer hover:border-warm-accent transition-colors focus:outline-none focus:border-warm-accent font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <option value="0">
                filter (0)
              </option>
              <option value="1">
                Price: Low to High
              </option>
              <option value="2">
                Price: High to Low
              </option>
              <option value="3">
                Newest
              </option>
            </motion.select>
            <style>{`
              select option {
                background-color: #2C2416;
                color: #EDE8DC;
              }
              html:not(.dark) select option {
                background-color: #F5F0E8;
                color: #2C2416;
              }
            `}</style>
          </motion.div>

          {/* Product Grid */}
          <motion.div
            className="grid grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                className="group relative"
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Product Card */}
                <div className="relative bg-light-secondary dark:bg-dark-secondary border border-light dark:border-dark rounded-lg overflow-hidden aspect-[3/4] mb-4">
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-light-secondary dark:from-dark-secondary to-light dark:to-dark flex items-center justify-center">
                    <Image
                      src={`https://picsum.photos/seed/product-${product.id}/400/550`}
                      alt={product.name}
                      fill
                      className="w-full h-full object-cover"
                      sizes="(max-width: 1024px) 33vw, 25vw"
                    />
                  </div>

                  {/* Coming Soon Badge */}
                  <motion.div
                    className="absolute bottom-4 left-4 bg-amber-900 text-white px-3 py-1 text-xs font-bold tracking-wider"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: hoveredIndex === index ? 0.8 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    COMING SOON
                  </motion.div>

                  {/* Heart Icon */}
                  <motion.button
                    className="absolute bottom-4 right-4 w-8 h-8 border-2 border-light-muted dark:border-dark-muted text-light-muted dark:text-dark-muted rounded-full flex items-center justify-center hover:bg-warm-accent hover:text-light dark:hover:text-dark hover:border-warm-accent transition-colors"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Add to wishlist"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </motion.button>
                </div>

                {/* Product Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.02 }}
                >
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                    {product.name}
                  </h3>
                  {product.color && (
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{product.color}</p>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export default memo(ShopPage);
