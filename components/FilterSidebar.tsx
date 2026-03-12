'use client'

import { FilterOptions } from '@/hooks/useProductFilter'
import { CATEGORIES } from '@/data/products'

interface FilterSidebarProps {
  filters: FilterOptions
  onFilterChange: (filters: FilterOptions) => void
}

export default function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const handlePriceChange = (type: 'min' | 'max', value: number) => {
    const newRange: [number, number] = [...filters.priceRange]
    if (type === 'min') newRange[0] = value
    else newRange[1] = value
    onFilterChange({ ...filters, priceRange: newRange })
  }

  const handleCategoryChange = (category: string) => {
    onFilterChange({
      ...filters,
      category: filters.category === category ? '' : category,
    })
  }

  const handleRatingChange = (rating: number) => {
    onFilterChange({
      ...filters,
      minRating: filters.minRating === rating ? 0 : rating,
    })
  }

  const handleMinOrderQtyChange = (qty: number) => {
    onFilterChange({
      ...filters,
      minOrderQty: qty,
    })
  }

  return (
    <div className="card h-fit p-6">
      <h3 className="mb-4 text-lg font-bold text-gray-800">Filters</h3>

      {/* Price Range */}
      <div className="border-b border-gray-200 pb-4">
        <h4 className="mb-3 font-semibold text-gray-700">Price Range</h4>
        <div className="space-y-2">
          <div>
            <label className="text-xs text-gray-600">Min Price</label>
            <input
              type="range"
              min="0"
              max="1000"
              value={filters.priceRange[0]}
              onChange={(e) => handlePriceChange('min', Number(e.target.value))}
              className="w-full"
            />
            <span className="text-sm font-semibold">${filters.priceRange[0]}</span>
          </div>
          <div>
            <label className="text-xs text-gray-600">Max Price</label>
            <input
              type="range"
              min="0"
              max="1000"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceChange('max', Number(e.target.value))}
              className="w-full"
            />
            <span className="text-sm font-semibold">${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="border-b border-gray-200 py-4">
        <h4 className="mb-3 font-semibold text-gray-700">Category</h4>
        <div className="space-y-2">
          {CATEGORIES.map((category) => (
            <label key={category.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.category === category.name}
                onChange={() => handleCategoryChange(category.name)}
                className="rounded border-gray-300"
              />
              <span className="text-sm text-gray-700">{category.name}</span>
              <span className="text-xs text-gray-500">({category.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="border-b border-gray-200 py-4">
        <h4 className="mb-3 font-semibold text-gray-700">Rating</h4>
        <div className="space-y-2">
          {[4.5, 3.5, 2.5, 1.5].map((rating) => (
            <label key={rating} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={filters.minRating === rating}
                onChange={() => handleRatingChange(rating)}
                className="rounded-full"
              />
              <span className="text-sm text-gray-700">
                ⭐ {rating}+ ({rating > 4 ? '1K+' : rating > 3 ? '2K+' : '3K+'})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Min Order Quantity */}
      <div className="py-4">
        <h4 className="mb-3 font-semibold text-gray-700">Min Order Qty</h4>
        <input
          type="number"
          min="0"
          max="1000"
          value={filters.minOrderQty}
          onChange={(e) => handleMinOrderQtyChange(Number(e.target.value))}
          placeholder="Enter min qty"
          className="input-field w-full"
        />
      </div>

      {/* Reset Button */}
      <button
        onClick={() =>
          onFilterChange({
            searchQuery: '',
            category: '',
            priceRange: [0, 1000],
            minRating: 0,
            minOrderQty: 0,
          })
        }
        className="btn-outline w-full py-2"
      >
        Reset Filters
      </button>
    </div>
  )
}
