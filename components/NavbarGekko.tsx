'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/store/cart'
import { CATEGORIES } from '@/data/products'

export default function NavbarGekko() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const cartTotal = useCartStore((state) => state.getTotal())

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <nav className="sticky top-0 z-50">
      {/* Main Header */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className={`transition-all duration-300 ${
          isScrolled
            ? 'glass border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container-alt py-3 md:py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-electric-500 to-midnight-600 text-white font-black text-xl"
              >
                G
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="hidden sm:inline text-lg font-bold text-neon group-hover:drop-shadow-lg transition-all"
              >
                Gekko
              </motion.span>
            </Link>

            {/* Floating Search */}
            <motion.div
              layout
              className="flex-1 max-w-xl mx-4 relative"
            >
              <motion.form
                onSubmit={handleSearch}
                className="flex gap-2 relative"
              >
                <motion.div
                  className="flex-1 relative"
                  animate={{
                    scale: isSearchOpen ? 1.05 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchOpen(true)}
                    onBlur={() => !searchQuery && setIsSearchOpen(false)}
                    placeholder="Search tech products..."
                    className="input-field w-full py-3"
                  />
                  {searchQuery && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-electric-400 cursor-pointer"
                      onClick={() => setSearchQuery('')}
                    >
                      ✕
                    </motion.div>
                  )}
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-4 py-3"
                >
                  🔍
                </motion.button>
              </motion.form>
            </motion.div>

            {/* Right Section */}
            <div className="flex items-center gap-4 flex-shrink-0">
              {/* Cart */}
              <Link href="/cart" className="relative group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-2xl text-electric-400 group-hover:text-electric-300 transition-colors"
                >
                  🛒
                </motion.div>
                <AnimatePresence>
                  {cartTotal > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-electric-500 to-electric-600 text-xs font-bold text-black animate-glow-pulse"
                    >
                      {cartTotal}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>

              {/* Account */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl text-midnight-400 hover:text-electric-400 transition-colors"
              >
                👤
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sub Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="border-b border-white/5 glass-dark"
      >
        <div className="container-alt py-2 flex items-center gap-6 overflow-x-auto text-sm">
          <a href="#" className="whitespace-nowrap text-gray-400 hover:text-electric-400 font-medium transition-colors">
            🌎 Explore
          </a>
          <a href="#" className="whitespace-nowrap text-gray-400 hover:text-electric-400 font-medium transition-colors">
            ⚡ Trending
          </a>
          <a href="#" className="whitespace-nowrap text-gray-400 hover:text-electric-400 font-medium transition-colors">
            🎮 Tech Hub
          </a>
          <a href="#" className="whitespace-nowrap text-gray-400 hover:text-electric-400 font-medium transition-colors">
            🏪 Seller Center
          </a>
          <div className="ml-auto flex gap-4">
            <button className="whitespace-nowrap text-gray-400 hover:text-electric-400 font-medium transition-colors">
              🌍 Language
            </button>
          </div>
        </div>
      </motion.div>

      {/* Categories Bar */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        transition={{ delay: 0.3 }}
        className="border-b border-white/5 glass-dark"
      >
        <div className="container-alt py-3 flex items-center gap-4">
          {/* Categories Menu */}
          <div className="relative">
            <motion.button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg border border-electric-500/30 text-electric-400 font-semibold hover:border-electric-500 transition-all"
            >
              ☰ Categories
              <motion.span
                animate={{ rotate: isCategoriesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▼
              </motion.span>
            </motion.button>

            {/* Dropdown */}
            <AnimatePresence>
              {isCategoriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-2 w-80 glass-glow rounded-xl overflow-hidden z-50"
                >
                  {CATEGORIES.map((category, idx) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={`/products?category=${category.name}`}
                        onClick={() => setIsCategoriesOpen(false)}
                        className="flex items-center justify-between px-4 py-3 border-b border-white/5 hover:bg-electric-500/10 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl group-hover:scale-125 transition-transform">
                            {category.icon}
                          </span>
                          <span className="text-gray-300 group-hover:text-electric-400">
                            {category.name}
                          </span>
                        </div>
                        <span className="text-xs text-electric-400 bg-electric-500/20 px-2 py-1 rounded">
                          {category.count}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick links */}
          {CATEGORIES.slice(0, 5).map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + idx * 0.05 }}
            >
              <Link
                href={`/products?category=${category.name}`}
                className="flex items-center gap-1 whitespace-nowrap text-gray-400 hover:text-electric-400 text-sm font-medium transition-colors"
              >
                <span>{category.icon}</span>
                <span className="hidden sm:inline">{category.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  )
}