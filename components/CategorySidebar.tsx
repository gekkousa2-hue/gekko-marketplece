'use client'

import Link from 'next/link'
import { useState } from 'react'
import { CATEGORIES } from '@/data/products'

interface CategorySidebarProps {
  selectedCategory?: string
}

export default function CategorySidebar({ selectedCategory }: CategorySidebarProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  return (
    <aside className="hidden w-56 border-r border-gray-200 bg-white lg:block">
      {/* Header */}
      <div className="border-b border-gray-200 px-4 py-4">
        <h3 className="font-bold text-gray-800">All Categories</h3>
      </div>

      {/* Categories List */}
      <nav className="space-y-1 px-2 py-4">
        {CATEGORIES.map((category) => (
          <div key={category.id}>
            <Link
              href={`/products?category=${category.name}`}
              className={`flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-200 ${
                selectedCategory === category.name
                  ? 'bg-primary-100 text-primary-700 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-3 flex-1">
                <span className="text-lg">{category.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium">{category.name}</p>
                </div>
              </div>
              <span className="text-xs bg-gray-200 rounded-full px-2 py-1 text-gray-600">
                {category.count}
              </span>
            </Link>
          </div>
        ))}
      </nav>

      {/* All Products Link */}
      <div className="border-t border-gray-200 p-4">
        <Link
          href="/products"
          className="block w-full rounded-lg bg-primary-600 py-2 text-center text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
        >
          View All Products
        </Link>
      </div>

      {/* Supplier Banner */}
      <div className="m-4 rounded-lg bg-secondary-50 p-4">
        <h4 className="text-sm font-bold text-gray-800 mb-2">Become a Supplier</h4>
        <p className="text-xs text-gray-600 mb-3">
          Start selling to millions of buyers worldwide
        </p>
        <button className="w-full rounded bg-primary-600 px-3 py-2 text-xs font-semibold text-white hover:bg-primary-700 transition-colors">
          Join Now
        </button>
      </div>
    </aside>
  )
}
