'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { CATEGORIES } from '@/data/products'

interface CategorySidebarProps {
  selectedCategory?: string
}

export default function CategorySidebarGekko({ selectedCategory }: CategorySidebarProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="hidden w-64 glass-dark lg:block sticky top-32 rounded-2xl overflow-hidden h-fit"
    >
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-4 bg-gradient-to-r from-midnight-700/50 to-transparent">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-bold text-neon"
        >
          ⚡ All Categories
        </motion.h3>
      </div>

      {/* Categories List */}
      <nav className="space-y-1 px-2 py-4 max-h-96 overflow-y-auto">
        {CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * idx }}
          >
            <Link
              href={`/products?category=${category.name}`}
              className={`flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200 group ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-electric-500/30 to-midnight-600/30 border border-electric-500/50 text-electric-300'
                  : 'text-gray-300 hover:bg-white/5 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-3 flex-1">
                <motion.span
                  className="text-xl group-hover:scale-125 transition-transform"
                  whileHover={{ rotate: 10 }}
                >
                  {category.icon}
                </motion.span>
                <div className="flex-1">
                  <p className="text-sm font-medium group-hover:text-electric-400 transition-colors">
                    {category.name}
                  </p>
                </div>
              </div>
              <motion.span
                className="text-xs bg-electric-500/20 text-electric-400 rounded-full px-2 py-1 group-hover:bg-electric-500/40 transition-colors"
              >
                {category.count}
              </motion.span>
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Action Button */}
      <div className="border-t border-white/10 p-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/products"
            className="block w-full rounded-lg bg-gradient-to-r from-electric-500 to-electric-600 py-3 text-center text-sm font-bold text-black hover:shadow-glow-lg transition-all"
          >
            ⚡ View All
          </Link>
        </motion.div>
      </div>

      {/* Supplier CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="m-4 rounded-xl glass-glow p-4 border border-electric-500/20"
      >
        <h4 className="text-sm font-bold text-neon mb-2">🚀 Join Gekko</h4>
        <p className="text-xs text-gray-400 mb-3">
          Reach millions of buyers globally
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full rounded bg-gradient-to-r from-electric-500 to-midnight-600 px-3 py-2 text-xs font-bold text-white hover:shadow-glow transition-all"
        >
          Seller Portal
        </motion.button>
      </motion.div>
    </motion.aside>
  )
}