'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCartStore } from '@/store/cart'
import { CATEGORIES } from '@/data/products'

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const cartTotal = useCartStore((state) => state.getTotal())

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar - Logo & Main Search */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container-alt flex items-center justify-between gap-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white font-bold text-lg">
              A
            </div>
            <span className="hidden sm:inline text-lg font-bold text-gray-800">
              Alibaba-Uz
            </span>
          </Link>

          {/* Large Search Bar - Center */}
          <div className="flex-1 max-w-2xl">
            <form onSubmit={handleSearch} className="flex gap-1">
              <div className="flex-1 flex">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by keyword (e.g., electronics, clothing...)"
                  className="w-full rounded-l-lg border-2 border-primary-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                />
                <button
                  type="submit"
                  className="rounded-r-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700 transition-colors"
                >
                  🔍
                </button>
              </div>
            </form>
          </div>

          {/* Right Section - Cart & Account */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link href="/cart" className="relative hover:opacity-80 transition-opacity">
              <div className="text-2xl">🛒</div>
              {cartTotal > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {cartTotal}
                </span>
              )}
            </Link>
            <button className="text-2xl hover:opacity-80 transition-opacity">👤</button>
          </div>
        </div>
      </div>

      {/* Sub Navigation Bar */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="container-alt flex items-center justify-between py-2 overflow-x-auto text-sm">
          {/* Left Links */}
          <div className="flex items-center gap-6 whitespace-nowrap">
            <a href="#" className="font-medium text-gray-700 hover:text-primary-600 transition-colors">
              Source by Region
            </a>
            <a href="#" className="font-medium text-gray-700 hover:text-primary-600 transition-colors">
              Buyer Central
            </a>
            <a href="#" className="font-medium text-gray-700 hover:text-primary-600 transition-colors">
              Help & Support
            </a>
            <a href="#" className="font-medium text-gray-700 hover:text-primary-600 transition-colors">
              Logistics
            </a>
          </div>

          {/* Right Links */}
          <div className="flex items-center gap-4 whitespace-nowrap ml-6">
            <button className="font-medium text-gray-700 hover:text-primary-600 transition-colors">
              🌍 Language
            </button>
            <button className="font-medium text-gray-700 hover:text-primary-600 transition-colors">
              ⚙️ Settings
            </button>
          </div>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="container-alt py-3">
          <div className="flex items-center gap-6 overflow-x-auto pb-2">
            {/* Categories Button */}
            <div className="relative">
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center gap-2 whitespace-nowrap rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                ☰ All Categories
              </button>

              {/* Categories Dropdown */}
              {isCategoriesOpen && (
                <div className="absolute left-0 top-full mt-1 w-72 rounded-lg border border-gray-200 bg-white shadow-lg z-50">
                  {CATEGORIES.map((category) => (
                    <Link
                      key={category.id}
                      href={`/products?category=${category.name}`}
                      onClick={() => setIsCategoriesOpen(false)}
                      className="flex items-center justify-between border-b border-gray-100 px-4 py-3 hover:bg-primary-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{category.icon}</span>
                        <span className="font-medium text-gray-700">{category.name}</span>
                      </div>
                      <span className="text-xs rounded bg-gray-100 px-2 py-1 text-gray-600">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Category Links */}
            {CATEGORIES.slice(0, 6).map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.name}`}
                className="flex items-center gap-1 whitespace-nowrap text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
              >
                <span>{category.icon}</span>
                <span className="hidden sm:inline">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
