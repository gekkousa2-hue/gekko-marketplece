'use client'

import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import MainLayoutGekko from '@/components/MainLayoutGekko'
import ProductCardGekko from '@/components/ProductCardGekko'
import FilterSidebar from '@/components/FilterSidebar'
import CategorySidebarGekko from '@/components/CategorySidebarGekko'
import { useProductFilter } from '@/hooks/useProductFilter'
import { PRODUCTS } from '@/data/products'

export default function ProductsPageClient() {
  const searchParams = useSearchParams()
  const { filters, setFilters, filteredProducts } = useProductFilter(PRODUCTS)

  // Handle URL search params
  useEffect(() => {
    const searchQuery = searchParams.get('search') || ''
    const category = searchParams.get('category') || ''

    if (searchQuery || category) {
      setFilters({
        ...filters,
        searchQuery,
        category,
      })
    }
  }, [searchParams])

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <MainLayoutGekko>
      <div className="bg-transparent min-h-screen">
        <div className="container-alt py-8">
          {/* Page Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl font-black text-white">
              {filters.category ? (
                <>
                  <span className="text-neon">⚡</span> {filters.category}
                </>
              ) : (
                <>
                  <span className="text-neon">🔥</span> All Products
                </>
              )}
            </h1>
            <motion.p
              className="mt-2 text-gray-400 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Found <span className="text-electric-400 font-bold">{filteredProducts.length}</span> premium tech products
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            {/* Left Sidebar - CategorySidebarGekko */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
            >
              <CategorySidebarGekko selectedCategory={filters.category} />
            </motion.div>

            {/* Main Content */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                {/* Filter Sidebar */}
                <motion.div
                  className="lg:col-span-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <FilterSidebar
                    filters={filters}
                    onFilterChange={setFilters}
                  />
                </motion.div>

                {/* Products Grid */}
                <div className="lg:col-span-3">
                  {filteredProducts.length > 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {/* Sort Options */}
                      <motion.div
                        className="mb-6 flex items-center justify-between"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="text-sm text-gray-400">
                          Showing <span className="text-electric-400 font-bold">{filteredProducts.length}</span> products
                        </div>
                        <motion.select
                          className="glass text-sm py-2 px-4 text-white rounded-lg border border-electric-500/30 focus:border-electric-500 focus:outline-none transition-all cursor-pointer"
                          whileHover={{ borderColor: 'rgba(46, 255, 46, 0.5)' }}
                        >
                          <option>Sort by: Relevance</option>
                          <option>Price: Low to High</option>
                          <option>Price: High to Low</option>
                          <option>Rating: High to Low</option>
                          <option>Newest First</option>
                        </motion.select>
                      </motion.div>

                      {/* Dense Products Grid */}
                      <motion.div
                        className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-max"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                      >
                        {filteredProducts.map((product, idx) => (
                          <motion.div key={product.id} variants={itemVariants}>
                            <ProductCardGekko product={product} index={idx} />
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      className="card-premium flex flex-col items-center justify-center py-16 text-center col-span-full"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.div
                        className="mb-4 text-6xl"
                        animate={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🔍
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white">
                        No Products Found
                      </h3>
                      <motion.p
                        className="mt-2 text-gray-400 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        Try adjusting your filters or search terms
                      </motion.p>
                      <motion.button
                        onClick={() => {
                          setFilters({ searchQuery: '', category: '', priceRange: [0, 1000], minRating: 0, minOrderQty: 0 })
                        }}
                        className="btn-primary px-6 py-3 font-bold inline-flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        ↺ Reset Filters
                      </motion.button>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayoutGekko>
  )
}
