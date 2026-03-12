'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/types'
import { formatPrice, getRatingColor } from '@/utils/formatting'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const lowestPrice = Math.min(...product.priceTiers.map(tier => tier.price))
  const highestPrice = Math.max(...product.priceTiers.map(tier => tier.price))

  return (
    <Link href={`/product/${product.id}`}>
      <div className="card overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow">
        {/* Image Container - Smaller */}
        <div className="relative h-40 w-full overflow-hidden bg-gray-100 flex-shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <span className="text-xs font-bold text-white">Out of Stock</span>
            </div>
          )}
          {product.inStock && (
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded font-semibold">
              In Stock
            </div>
          )}
        </div>

        {/* Content - Compact */}
        <div className="p-3 flex-1 flex flex-col">
          {/* Title - Single line */}
          <h3 className="line-clamp-1 text-xs font-semibold text-gray-800 mb-1">
            {product.name}
          </h3>

          {/* Supplier - Smaller text */}
          <p className="text-xs text-gray-600 mb-2 line-clamp-1">
            {product.supplier}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <span className={`text-xs font-bold ${getRatingColor(product.rating)}`}>
              ⭐ {product.rating}
            </span>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>

          {/* Price Range Badge */}
          <div className="mb-2 inline-flex items-center gap-1">
            <span className="text-xs font-bold text-primary-600 bg-primary-100 px-2 py-1 rounded">
              {formatPrice(lowestPrice)}
            </span>
            {lowestPrice !== highestPrice && (
              <>
                <span className="text-xs text-gray-500">-</span>
                <span className="text-xs font-bold text-primary-600 bg-primary-100 px-2 py-1 rounded">
                  {formatPrice(highestPrice)}
                </span>
              </>
            )}
          </div>

          {/* MOQ Badge */}
          <div className="inline-flex items-center gap-2 text-xs mb-2">
            <span className="bg-accent-100 text-accent-700 px-2 py-1 rounded font-semibold">
              MOQ: {product.minOrderQty}
            </span>
          </div>

          {/* View Details Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
            }}
            className="mt-auto btn-outline w-full py-1 text-xs font-medium"
          >
            View Details
          </button>
        </div>
      </div>
    </Link>
  )
}
