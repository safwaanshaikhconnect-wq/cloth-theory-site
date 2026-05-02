'use client';

import { memo, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { containerVariants, itemVariants } from '@/lib/animations';
import { BOYS_PRODUCTS, GIRLS_PRODUCTS } from '@/lib/constants';
import type { Product } from '@/lib/constants';

const ALL_PRODUCTS = [...BOYS_PRODUCTS, ...GIRLS_PRODUCTS];

const fisherYatesShuffle = (array: Product[]): Product[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Helper function to get categories by gender
const getCategoriesByGender = (products: Product[], gender: 'boys' | 'girls') => {
  return new Set(products.filter(p => p.gender === gender).map(p => p.category));
};

function ShopPage() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const shuffledAllProducts = useMemo(() => fisherYatesShuffle(ALL_PRODUCTS), []);

  const getSourceProducts = () => {
    if (activeTab === 'BOYS') return BOYS_PRODUCTS;
    if (activeTab === 'GIRLS') return GIRLS_PRODUCTS;
    return shuffledAllProducts;
  };

  const getCategories = () => {
    const sourceProducts = getSourceProducts();
    const uniqueCategories = Array.from(new Set(sourceProducts.map(p => p.category)));
    
    // If viewing ALL tab, add gender labels to duplicate categories
    if (activeTab === 'ALL') {
      const boysCategories = getCategoriesByGender(BOYS_PRODUCTS, 'boys');
      const girlsCategories = getCategoriesByGender(GIRLS_PRODUCTS, 'girls');
      
      const categoriesWithLabels: Array<{ original: string; display: string; gender?: 'boys' | 'girls' }> = [];
      
      uniqueCategories.forEach(category => {
        const inBoys = boysCategories.has(category);
        const inGirls = girlsCategories.has(category);
        
        // If category exists in both, add both versions with labels
        if (inBoys && inGirls) {
          categoriesWithLabels.push({ 
            original: `${category}-boys`, 
            display: `${category} - Boys`,
            gender: 'boys'
          });
          categoriesWithLabels.push({ 
            original: `${category}-girls`, 
            display: `${category} - Girls`,
            gender: 'girls'
          });
        } else {
          // Single gender category
          categoriesWithLabels.push({ 
            original: category, 
            display: category,
            gender: inBoys ? 'boys' : 'girls'
          });
        }
      });
      
      return categoriesWithLabels;
    }
    
    // For BOYS and GIRLS tabs, no gender labels needed
    return uniqueCategories.map(category => ({
      original: category,
      display: category
    }));
  };

  const getFilteredProducts = () => {
    const sourceProducts = getSourceProducts();
    if (activeCategory === 'all') {
      return sourceProducts;
    }
    
    // Handle both standard categories and gender-labeled categories
    let categoryToFilter = activeCategory;
    let filterByGender: 'boys' | 'girls' | null = null;
    
    if (activeCategory.endsWith('-boys')) {
      categoryToFilter = activeCategory.replace('-boys', '');
      filterByGender = 'boys';
    } else if (activeCategory.endsWith('-girls')) {
      categoryToFilter = activeCategory.replace('-girls', '');
      filterByGender = 'girls';
    }
    
    return sourceProducts.filter(product => {
      if (product.category !== categoryToFilter) return false;
      if (filterByGender && product.gender !== filterByGender) return false;
      return true;
    });
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
            {/* All Button */}
            <motion.button
              onClick={() => setActiveCategory('all')}
              className={`block text-sm font-medium py-2 cursor-pointer transition-colors ${
                activeCategory === 'all'
                  ? 'text-warm-accent'
                  : 'text-gray-900 dark:text-white hover:text-warm-accent dark:hover:text-warm-accent'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0 }}
              whileHover={{ paddingLeft: '0.5rem' }}
            >
              All
            </motion.button>

            {/* Category List */}
            {getCategories().map((categoryItem, index) => (
              <motion.button
                key={categoryItem.original}
                onClick={() => setActiveCategory(categoryItem.original)}
                className={`block text-sm font-medium py-2 cursor-pointer transition-colors text-left w-full ${
                  activeCategory === categoryItem.original
                    ? 'text-warm-accent'
                    : 'text-gray-900 dark:text-white hover:text-warm-accent dark:hover:text-warm-accent'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (index + 1) * 0.03 }}
                whileHover={{ paddingLeft: '0.5rem' }}
              >
                {categoryItem.display}
              </motion.button>
            ))}
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="ml-64 flex-1 px-8 py-8">
          {/* Top Controls */}
          <motion.div
            className="flex items-center justify-between mb-8 bg-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Tab Toggle */}
            <div className="flex gap-6 bg-transparent" style={{ backgroundColor: 'transparent' }}>
              {['ALL', 'BOYS', 'GIRLS'].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setActiveCategory('all');
                  }}
                  className={`text-lg font-bold tracking-wider transition-colors bg-transparent ${
                    activeTab === tab
                      ? 'text-gray-900 dark:text-white border-b-2 border-warm-accent'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  style={{ backgroundColor: 'transparent' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab}
                </motion.button>
              ))}
            </div>

          </motion.div>

          {/* Product Grid */}
          <motion.div
            className="grid grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {getFilteredProducts().map((product, index) => (
              <motion.div
                key={product.id}
                className="group relative"
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Product Card */}
                <div className="relative bg-light-secondary dark:bg-dark-secondary border border-light dark:border-dark rounded-lg overflow-hidden aspect-[3/4] mb-4">
                  {/* Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-light-secondary dark:from-dark-secondary to-light dark:to-dark flex items-center justify-center">
                    <Image
                      src={product.images}
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
