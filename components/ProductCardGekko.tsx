'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/types'
import { formatPrice, getRatingColor } from '@/utils/formatting'
import { motion } from 'framer-motion'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCardGekko({ product, index = 0 }: ProductCardProps) {
  const lowestPrice = Math.min(...product.priceTiers.map(tier => tier.price))
  const highestPrice = Math.max(...product.priceTiers.map(tier => tier.price))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/product/${product.id}`}>
        <motion.div
          className="card-premium overflow-hidden h-full flex flex-col cursor-pointer group"
          whileHover={{ borderColor: 'rgba(46, 255, 46, 0.5)' }}
          transition={{ duration: 0.3 }}
        >
          {/* Image Container */}
          <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-midnight-700 to-midnight-900">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-125"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Status Badge */}
            <div className="absolute top-2 right-2 flex items-center gap-2">
              {product.inStock ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-gradient-to-r from-electric-500 to-green-500 text-black text-xs px-2 py-1 rounded-full font-bold shadow-glow text-nowrap animate-glow-pulse"
                >
                  ✓ In Stock
                </motion.div>
              ) : (
                <div className="bg-red-500/80 text-white text-xs px-2 py-1 rounded-full font-bold">
                  Out of Stock
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-3 flex-1 flex flex-col">
            {/* Title */}
            <motion.h3
              className="line-clamp-1 text-xs font-bold text-gray-100 mb-1 group-hover:text-electric-400 transition-colors"
              whileHover={{ x: 2 }}
            >
              {product.name}
            </motion.h3>

            {/* Supplier */}
            <p className="text-xs text-gray-500 mb-2 line-clamp-1 group-hover:text-gray-400">
              {product.supplier}
            </p>

            {/* Rating */}
            <motion.div
              className="flex items-center gap-1 mb-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className={`text-xs font-bold ${getRatingColor(product.rating)}`}>
                ⭐ {product.rating}
              </span>
              <span className="text-xs text-gray-500">({product.reviews})</span>
            </motion.div>

            {/* Price Badges */}
            <div className="mb-2 inline-flex items-center gap-1 flex-wrap">
              <motion.span
                className="text-xs font-bold text-black bg-gradient-to-r from-electric-500 to-electric-600 px-2 py-1 rounded-lg shadow-glow text-nowrap"
                whileHover={{ scale: 1.05 }}
              >
                {formatPrice(lowestPrice)}
              </motion.span>
              {lowestPrice !== highestPrice && (
                <>
                  <span className="text-xs text-gray-500">→</span>
                  <motion.span
                    className="text-xs font-bold text-black bg-gradient-to-r from-midnight-600 to-electric-500 px-2 py-1 rounded-lg shadow-neon text-nowrap"
                    whileHover={{ scale: 1.05 }}
                  >
                    {formatPrice(highestPrice)}
                  </motion.span>
                </>
              )}
            </div>

            {/* MOQ Badge */}
            <motion.div
              className="inline-flex items-center gap-2 text-xs mb-3 text-electric-400 bg-electric-500/10 px-2 py-1 rounded-lg border border-electric-500/20 w-fit"
              whileHover={{ scale: 1.05, borderColor: 'rgba(46, 255, 46, 0.6)' }}
            >
              <span className="text-nowrap font-bold">📦 MOQ: {product.minOrderQty}</span>
            </motion.div>

            {/* View Button */}
            <motion.button
              onClick={(e) => e.preventDefault()}
              className="mt-auto btn-secondary w-full py-2 text-xs font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ⚡ View Details
            </motion.button>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}