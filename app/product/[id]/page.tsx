'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import MainLayoutGekko from '@/components/MainLayoutGekko'
import { useCartStore } from '@/store/cart'
import { PRODUCTS } from '@/data/products'
import { formatPrice, getRatingColor } from '@/utils/formatting'

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  const product = PRODUCTS.find((p) => p.id === productId)
  const addToCart = useCartStore((state) => state.addItem)

  const [quantity, setQuantity] = useState(product?.minOrderQty || 1)
  const [selectedTier, setSelectedTier] = useState(0)
  const [isAdded, setIsAdded] = useState(false)

  if (!product) {
    return (
      <MainLayoutGekko>
        <div className="container-alt py-12 text-center">
          <motion.h1
            className="text-4xl font-black text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="text-neon">🔍</span> Product Not Found
          </motion.h1>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/products" className="btn-primary inline-block mt-4">
              ← Back to Products
            </Link>
          </motion.div>
        </div>
      </MainLayoutGekko>
    )
  }

  const getCurrentPrice = () => {
    const tier = product.priceTiers.find((t) => {
      if (t.maxQty === null) {
        return quantity >= t.minQty
      }
      return quantity >= t.minQty && quantity <= t.maxQty
    })
    return tier ? tier.price : product.price
  }

  const handleAddToCart = () => {
    addToCart(product.id, quantity)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const currentPrice = getCurrentPrice()
  const totalPrice = currentPrice * quantity

  return (
    <MainLayoutGekko>
      <div className="container-alt py-8">
        {/* Breadcrumb */}
        <motion.div
          className="mb-8 flex items-center gap-2 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Link href="/" className="hover:text-electric-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-electric-400 transition-colors">Products</Link>
          <span>/</span>
          <motion.span
            className="text-electric-400 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {product.name}
          </motion.span>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Product Image */}
          <motion.div
            className="card-premium overflow-hidden group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            <div className="relative h-96 w-full bg-gradient-to-br from-midnight-800 to-midnight-900">
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            </div>
            {!product.inStock && (
              <motion.div
                className="bg-red-500/20 border border-red-500 p-4 text-center text-red-400 font-bold"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✗ Out of Stock
              </motion.div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Title & Rating */}
            <motion.h1
              className="text-3xl md:text-4xl font-black text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              {product.name}
            </motion.h1>

            <motion.div
              className="mt-4 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.span
                className={`text-2xl font-black ${getRatingColor(product.rating) === 'text-yellow-600' ? 'text-yellow-400' : 'text-electric-400'}`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⭐ {product.rating}
              </motion.span>
              <span className="text-sm text-gray-400">
                ({product.reviews} customer reviews)
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="mt-6 text-gray-400 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              {product.description}
            </motion.p>

            {/* Supplier Info */}
            <motion.div
              className="mt-6 rounded-lg glass bg-electric-500/10 p-4 border border-electric-500/30"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-sm text-gray-300">
                <span className="font-bold text-electric-400">Supplier:</span> {product.supplier}
              </p>
              <p className="text-sm text-gray-300 mt-2">
                <span className="font-bold text-electric-400">Min Order:</span> {product.minOrderQty} units
              </p>
            </motion.div>

            {/* Pricing Table */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <h3 className="mb-4 text-lg font-bold text-white">
                📊 Bulk Pricing
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-midnight-800/50 border border-electric-500/30">
                      <th className="px-4 py-3 text-left font-bold text-electric-400">
                        Quantity
                      </th>
                      <th className="px-4 py-3 text-left font-bold text-electric-400">
                        Unit Price
                      </th>
                      <th className="px-4 py-3 text-left font-bold text-electric-400">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.priceTiers.map((tier, index) => {
                      const tierTotal = tier.price * (tier.minQty || 0)
                      const qtyLabel = tier.maxQty
                        ? `${tier.minQty}-${tier.maxQty}`
                        : `${tier.minQty}+`
                      return (
                        <motion.tr
                          key={index}
                          className={`cursor-pointer border border-electric-500/20 transition-all ${
                            index === selectedTier
                              ? 'glass bg-electric-500/10'
                              : 'hover:bg-midnight-800/50'
                          }`}
                          onClick={() => setSelectedTier(index)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <td className="px-4 py-3 text-gray-300 font-semibold">
                            {qtyLabel} units
                          </td>
                          <td className="px-4 py-3 text-electric-400 font-bold">
                            {formatPrice(tier.price)}
                          </td>
                          <td className="px-4 py-3 text-gray-300">
                            {formatPrice(tierTotal)}
                          </td>
                        </motion.tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Quantity & Price Selection */}
            <motion.div
              className="mt-8 rounded-lg glass bg-midnight-800/50 p-6 border border-electric-500/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="mb-6">
                <label className="block text-sm font-bold text-electric-400 mb-3">
                  📦 Order Quantity
                </label>
                <div className="flex items-center gap-4">
                  <motion.button
                    onClick={() => setQuantity(Math.max(product.minOrderQty, quantity - 1))}
                    className="text-electric-400 hover:text-electric-300 font-bold text-xl transition-colors glass px-3 py-2 rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    −
                  </motion.button>
                  <motion.input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(
                        Math.max(product.minOrderQty, Number(e.target.value) || 0)
                      )
                    }
                    className="glass w-20 text-center py-2 px-3 text-white font-bold rounded-lg border border-electric-500/30 focus:border-electric-500 focus:outline-none"
                    min={product.minOrderQty}
                    key={quantity}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                  />
                  <motion.button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-electric-400 hover:text-electric-300 font-bold text-xl transition-colors glass px-3 py-2 rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    +
                  </motion.button>
                </div>
                <p className="mt-3 text-xs text-gray-400">
                  Minimum order: <span className="text-electric-400 font-bold">{product.minOrderQty}</span> units
                </p>
              </div>

              {/* Price Summary */}
              <div className="space-y-3 border-t border-electric-500/30 pt-4">
                <motion.div
                  className="flex justify-between text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 }}
                >
                  <span className="text-gray-400">Unit Price:</span>
                  <span className="font-bold text-white">{formatPrice(currentPrice)}</span>
                </motion.div>
                <motion.div
                  className="flex justify-between text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-gray-400">Quantity:</span>
                  <span className="font-bold text-white">{quantity}</span>
                </motion.div>
                <motion.div
                  className="flex justify-between border-t border-electric-500/30 pt-3 text-2xl font-black text-neon"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.65, type: 'spring' }}
                >
                  <span>Total:</span>
                  <span>{formatPrice(totalPrice)}</span>
                </motion.div>
              </div>

              {/* Add to Cart Button */}
              <motion.button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`btn-primary w-full mt-6 py-4 font-bold text-lg transition-all ${
                  !product.inStock ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                whileHover={product.inStock ? { scale: 1.05 } : {}}
                whileTap={product.inStock ? { scale: 0.95 } : {}}
                animate={isAdded ? { scale: [1, 1.1, 1] } : {}}
              >
                {isAdded ? '✓ Added to Cart' : '⚡ Add to Cart'}
              </motion.button>
            </motion.div>

            {/* Product Status */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.span
                className={`inline-block rounded-full px-6 py-2 font-bold transition-all ${
                  product.inStock
                    ? 'bg-electric-500/20 text-electric-400 border border-electric-500'
                    : 'bg-red-500/20 text-red-400 border border-red-500'
                }`}
                animate={product.inStock ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
              </motion.span>
            </motion.div>
          </motion.div>
        </div>

        {/* Related Products Section */}
        <motion.div
          className="mt-16 border-t border-electric-500/30 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-black text-white mb-2">
            <span className="text-neon">🔗</span> Related Products
          </h2>
          <p className="text-gray-400 text-lg">
            Other similar products in the <span className="text-electric-400 font-bold">{product.category}</span> category
          </p>
        </motion.div>
      </div>
    </MainLayoutGekko>
  )
}
