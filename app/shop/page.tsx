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

  const categories = useMemo(() => {
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
    return getCategories();
  }, [activeTab, shuffledAllProducts]);

  const filteredProducts = useMemo(() => {
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
    return getFilteredProducts();
  }, [activeTab, activeCategory, shuffledAllProducts]);

  return (
    <div className="min-h-screen bg-light dark:bg-dark text-light dark:text-dark">
      <Navbar />

      <div className="flex pt-20">
        {/* Left Sidebar */}
        <aside className="hidden md:block w-64 bg-light-secondary dark:bg-dark-secondary border-r border-light dark:border-dark px-6 py-8 fixed h-screen overflow-y-auto">
          <div className="space-y-4">
            {/* All Button */}
            <button
              onClick={() => setActiveCategory('all')}
              className={`block text-sm font-medium py-2 cursor-pointer transition-colors ${
                activeCategory === 'all'
                  ? 'text-warm-accent'
                  : 'text-gray-900 dark:text-white hover:text-warm-accent dark:hover:text-warm-accent'
              }`}
            >
              All
            </button>

            {/* Category List */}
            {categories.map((categoryItem, index) => (
              <button
                key={categoryItem.original}
                onClick={() => setActiveCategory(categoryItem.original)}
                className={`block text-sm font-medium py-2 cursor-pointer transition-colors text-left w-full ${
                  activeCategory === categoryItem.original
                    ? 'text-warm-accent'
                    : 'text-gray-900 dark:text-white hover:text-warm-accent dark:hover:text-warm-accent'
                }`}
              >
                {categoryItem.display}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-0 md:ml-64 flex-1 px-4 py-4 md:px-8 md:py-8">
          {/* Top Controls */}
          <div className="flex items-center justify-between mb-8 bg-transparent">
            {/* Tab Toggle */}
            <div className="flex gap-4 md:gap-6 bg-transparent" style={{ backgroundColor: 'transparent' }}>
              {['ALL', 'BOYS', 'GIRLS'].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setActiveCategory('all');
                  }}
                  className={`text-base md:text-lg font-bold tracking-wider transition-colors bg-transparent ${
                    activeTab === tab
                      ? 'text-gray-900 dark:text-white border-b-2 border-warm-accent'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  style={{ backgroundColor: 'transparent' }}
                >
                  {tab}
                </motion.button>
              ))}
            </div>

          </div>

          {/* Mobile Category Dropdown */}
          <div className="block md:hidden mb-6">
            <label htmlFor="category-filter" className="sr-only">Filter</label>
            <select
              id="category-filter"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full bg-transparent border border-warm-accent text-sm text-gray-900 dark:text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-warm-accent"
            >
              <option value="all">All Products</option>
              {categories.map((categoryItem) => (
                <option key={categoryItem.original} value={categoryItem.original}>
                  {categoryItem.display}
                </option>
              ))}
            </select>
          </div>

          {/* Product Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="group relative"
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
                      priority={index === 0}
                    />
                  </div>

                  {/* Coming Soon Badge */}
                  {/* Removed */}

                  {/* Heart Icon */}
                  {/* Removed */}
                </div>

                {/* Product Info */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export default memo(ShopPage);
