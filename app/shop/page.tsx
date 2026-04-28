'use client';

import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { containerVariants, itemVariants } from '@/lib/animations';

const WOMEN_CATEGORIES = [
  'Coord Set Pajama',
  'Holi T-Shirt',
  'Hoodie',
  'Joggers',
  'Joggers Pack of 2',
  'PKT Shorts',
  'Printed Hoodie',
  'Set',
  'Shorts',
  'Sleeper',
  'Sleeper Po2',
];

const MEN_CATEGORIES = [
  'Full Sleeve',
  'Holi T-Shirt',
  'Hoodie',
  'Joggers',
  'Polo',
  'Printed Polo',
  'Printed Full Sleeve',
  'Shorts',
  'Slub Shorts',
  'Solid T-Shirt',
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
  const [activeTab, setActiveTab] = useState('BOYS');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-warm-beige text-text-dark">
      <Navbar />

      <div className="flex pt-20">
        {/* Left Sidebar */}
        <motion.aside
          className="w-64 bg-dark-primary border-r border-border-light px-6 py-8 fixed h-screen overflow-y-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            {(activeTab === 'BOYS' ? WOMEN_CATEGORIES : MEN_CATEGORIES).map((category, index) => (
              <motion.a
                key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-sm text-text-dark hover:text-warm-accent transition-colors py-2 cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ paddingLeft: '0.5rem', color: '#C17F4A' }}
              >
                {category}
              </motion.a>
            ))}
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
              {['BOYS', 'GIRLS'].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-lg font-medium tracking-wider transition-colors ${
                    activeTab === tab
                      ? 'text-text-dark border-b-2 border-warm-accent'
                      : 'text-text-muted hover:text-text-dark'
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
              className="px-4 py-2 bg-transparent border border-border-light rounded text-sm text-text-dark cursor-pointer hover:border-warm-accent transition-colors focus:outline-none focus:border-warm-accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <option value="0" className="text-text-dark">
                filter (0)
              </option>
              <option value="1" className="text-text-dark">
                Price: Low to High
              </option>
              <option value="2" className="text-text-dark">
                Price: High to Low
              </option>
              <option value="3" className="text-text-dark">
                Newest
              </option>
            </motion.select>
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
                <div className="relative bg-dark-primary border border-border-light rounded-lg overflow-hidden aspect-[3/4] mb-4">
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-primary to-warm-light flex items-center justify-center">
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
                    className="absolute bottom-4 left-4 bg-amber-900 text-luxury-bg px-3 py-1 text-xs font-semibold tracking-wider"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: hoveredIndex === index ? 0.8 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    COMING SOON
                  </motion.div>

                  {/* Heart Icon */}
                  <motion.button
                    className="absolute bottom-4 right-4 w-8 h-8 border-2 border-text-muted text-text-muted rounded-full flex items-center justify-center hover:bg-warm-accent hover:text-luxury-bg hover:border-warm-accent transition-colors"
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
                  <h3 className="text-sm font-medium text-text-dark truncate">
                    {product.name}
                  </h3>
                  {product.color && (
                    <p className="text-xs text-text-muted mt-1">{product.color}</p>
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
