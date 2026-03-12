'use client'

import { useState, useMemo } from 'react'
import { Product } from '@/types'

export interface FilterOptions {
  searchQuery: string
  category: string
  priceRange: [number, number]
  minRating: number
  minOrderQty: number
}

export const useProductFilter = (products: Product[]) => {
  const [filters, setFilters] = useState<FilterOptions>({
    searchQuery: '',
    category: '',
    priceRange: [0, 1000],
    minRating: 0,
    minOrderQty: 0,
  })

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search query filter
      if (
        filters.searchQuery &&
        !product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
        !product.description.toLowerCase().includes(filters.searchQuery.toLowerCase())
      ) {
        return false
      }

      // Category filter
      if (filters.category && product.category !== filters.category) {
        return false
      }

      // Price range filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }

      // Rating filter
      if (product.rating < filters.minRating) {
        return false
      }

      // Min order quantity filter
      if (product.minOrderQty > filters.minOrderQty && filters.minOrderQty > 0) {
        return false
      }

      return true
    })
  }, [products, filters])

  return {
    filters,
    setFilters,
    filteredProducts,
  }
}
