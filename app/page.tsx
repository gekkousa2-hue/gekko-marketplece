'use client'

import Link from 'next/link'
import MainLayoutGekko from '@/components/MainLayoutGekko'
import ProductCardGekko from '@/components/ProductCardGekko'
import CategorySidebarGekko from '@/components/CategorySidebarGekko'
import PremiumHeroGekko from '@/components/PremiumHeroGekko'
import { motion } from 'framer-motion'
import { PRODUCTS, CATEGORIES } from '@/data/products'

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 12)

  return (
    <MainLayoutGekko>
      {/* Premium Hero Section */}
      <PremiumHeroGekko products={PRODUCTS} />

      {/* Main Content with Sidebar */}
      <div className="bg-transparent">
        <div className="container-alt py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Left Sidebar */}
            <CategorySidebarGekko />

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Trending Categories Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
                  <span className="text-neon">⚡</span> Trending Now
                </h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {CATEGORIES.map((category, idx) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + idx * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Link
                        href={`/products?category=${category.name}`}
                        className="card-premium p-6 text-center hover:shadow-glow-lg transition-all group cursor-pointer"
                      >
                        <motion.div
                          className="text-5xl mb-3 group-hover:scale-125 transition-transform"
                          whileHover={{ rotate: 10 }}
                        >
                          {category.icon}
                        </motion.div>
                        <h3 className="font-bold text-white group-hover:text-electric-400 text-sm mb-1">
                          {category.name}
                        </h3>
                        <p className="text-xs text-gray-500 group-hover:text-gray-400">
                          {category.count} products
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="py-16 relative">
        <div className="container-alt">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  🔥 Featured Collection
                </h2>
                <p className="text-gray-400 mt-2">Premium tech products curated just for you</p>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-electric-400 hover:text-electric-300 font-bold transition-colors"
              >
                View All →
              </Link>
            </div>

            {/* Dense Product Grid */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 auto-rows-max">
              {featuredProducts.map((product, idx) => (
                <ProductCardGekko
                  key={product.id}
                  product={product}
                  index={idx}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Gekko Section */}
      <section className="py-16 relative">
        <div className="container-alt">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
              Why Choose <span className="text-neon">Gekko</span>?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '⚡', title: 'Lightning Fast', desc: 'Ultra-optimized performance' },
                { icon: '🎨', title: 'Modern Design', desc: 'Cutting-edge interface' },
                { icon: '🛡️', title: 'Secure Checkout', desc: 'Bank-level encryption' },
                { icon: '🚀', title: 'Tech-Focused', desc: 'Premium tech products only' },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="card-premium p-6 space-y-3 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-4xl group-hover:scale-125 transition-transform"
                    whileHover={{ rotate: 10 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="font-bold text-white text-lg group-hover:text-electric-400">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="py-16 relative overflow-hidden rounded-3xl my-12"
      >
        {/* Background Effect */}
        <div className="absolute inset-0 glass-dark border border-electric-500/30 rounded-3xl" />

        <div className="container-alt relative z-10 text-center space-y-6">
          <motion.h2
            className="text-3xl md:text-4xl font-black text-white"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: 'spring' }}
          >
            Ready to Join the <span className="text-neon">Future</span>?
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Discover thousands of premium tech products with lightning-fast shipping and our legendary customer support.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/products"
                className="btn-primary px-8 py-4 text-lg font-bold inline-flex items-center gap-2"
              >
                ⚡ Start Shopping
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="glass px-8 py-4 text-lg font-bold rounded-lg border-2 border-electric-500/30 text-electric-400 hover:border-electric-500 transition-all">
                📖 Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </MainLayoutGekko>
  )
}
