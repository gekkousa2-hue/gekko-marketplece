'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import MainLayoutGekko from '@/components/MainLayoutGekko'
import { useCartStore } from '@/store/cart'
import { PRODUCTS } from '@/data/products'
import { formatPrice } from '@/utils/formatting'

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore()

  const cartItems = items
    .map((item) => ({
      ...item,
      product: PRODUCTS.find((p) => p.id === item.productId),
    }))
    .filter((item) => item.product !== undefined)

  const subtotal = cartItems.reduce((sum, item) => {
    const product = item.product!
    const tier = product.priceTiers.find((t) => {
      if (t.maxQty === null) {
        return item.quantity >= t.minQty
      }
      return item.quantity >= t.minQty && item.quantity <= t.maxQty
    })
    const price = tier ? tier.price : product.price
    return sum + price * item.quantity
  }, 0)

  const tax = subtotal * 0.1
  const shipping = subtotal > 100 ? 0 : 15
  const total = subtotal + tax + shipping

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <MainLayoutGekko>
      <div className="container-alt py-8">
        {/* Page Header */}
        <motion.h1
          className="text-4xl md:text-5xl font-black text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className="text-neon">🛒</span> Shopping Cart
        </motion.h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {cartItems.map((item, idx) => {
                  const product = item.product!
                  const tier = product.priceTiers.find((t) => {
                    if (t.maxQty === null) {
                      return item.quantity >= t.minQty
                    }
                    return item.quantity >= t.minQty && item.quantity <= t.maxQty
                  })
                  const price = tier ? tier.price : product.price
                  const subtotalItem = price * item.quantity

                  return (
                    <motion.div
                      key={item.productId}
                      className="card-premium flex flex-col gap-4 p-4 md:flex-row md:items-center group"
                      variants={itemVariants}
                      whileHover={{ y: -4 }}
                    >
                      {/* Product Image */}
                      <motion.div
                        className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-midnight-800 to-midnight-900"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </motion.div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <Link href={`/product/${product.id}`}>
                          <motion.h3
                            className="text-lg font-bold text-white hover:text-electric-400 transition-colors"
                            whileHover={{ x: 5 }}
                          >
                            {product.name}
                          </motion.h3>
                        </Link>
                        <p className="text-sm text-gray-400 mt-1">
                          {product.supplier}
                        </p>
                        <motion.p
                          className="text-sm text-electric-400 font-semibold mt-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          Unit Price: {formatPrice(price)}
                        </motion.p>
                      </div>

                      {/* Quantity Controls */}
                      <motion.div
                        className="flex items-center gap-3 glass px-4 py-2 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.button
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              Math.max(product.minOrderQty, item.quantity - 1)
                            )
                          }
                          className="text-electric-400 hover:text-electric-300 font-bold transition-colors"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          −
                        </motion.button>
                        <motion.span
                          className="w-8 text-center font-bold text-white"
                          key={item.quantity}
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                        >
                          {item.quantity}
                        </motion.span>
                        <motion.button
                          onClick={() =>
                            updateQuantity(item.productId, item.quantity + 1)
                          }
                          className="text-electric-400 hover:text-electric-300 font-bold transition-colors"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          +
                        </motion.button>
                      </motion.div>

                      {/* Subtotal */}
                      <div className="text-right">
                        <motion.p
                          className="text-lg font-black text-neon"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {formatPrice(subtotalItem)}
                        </motion.p>
                        <motion.button
                          onClick={() => removeItem(item.productId)}
                          className="text-sm text-red-500 hover:text-red-400 font-bold mt-2 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          ✕ Remove
                        </motion.button>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Continue Shopping */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-electric-400 hover:text-electric-300 font-bold transition-colors text-lg"
                >
                  ← Continue Shopping
                </Link>
              </motion.div>
            </div>

            {/* Order Summary */}
            <motion.div
              className="card-premium h-fit p-6 lg:sticky lg:top-32"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-black text-white mb-6">
                <span className="text-neon">📊</span> Order Summary
              </h2>

              <div className="space-y-3 border-b border-electric-500/30 pb-4">
                <motion.div
                  className="flex justify-between text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  <span className="text-gray-400">Subtotal</span>
                  <span className="font-semibold text-white">{formatPrice(subtotal)}</span>
                </motion.div>
                <motion.div
                  className="flex justify-between text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-gray-400">Tax (10%)</span>
                  <span className="font-semibold text-white">{formatPrice(tax)}</span>
                </motion.div>
                <motion.div
                  className="flex justify-between text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  <span className="text-gray-400">
                    Shipping
                    {shipping === 0 && (
                      <span className="text-electric-400 ml-2 font-bold">(FREE)</span>
                    )}
                  </span>
                  <span className="font-semibold text-white">{formatPrice(shipping)}</span>
                </motion.div>
              </div>

              <motion.div
                className="my-6 flex justify-between text-2xl font-black text-white"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: 'spring' }}
              >
                <span>Total</span>
                <span className="text-neon">{formatPrice(total)}</span>
              </motion.div>

              {/* Checkout Button */}
              <motion.button
                className="btn-primary w-full py-4 mb-3 font-bold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ⚡ Proceed to Checkout
              </motion.button>

              {/* Clear Cart */}
              <motion.button
                onClick={() => clearCart()}
                className="glass w-full py-3 border-2 border-electric-500/30 text-electric-400 hover:border-electric-500 font-bold transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear Cart
              </motion.button>

              {/* Info Banner */}
              <motion.div
                className="mt-6 rounded-lg glass bg-electric-500/10 border border-electric-500/30 p-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <motion.p
                  className="text-xs font-bold text-electric-400 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🚀 FREE SHIPPING AVAILABLE
                </motion.p>
                <p className="text-xs text-gray-400">
                  Free shipping on orders over $100 (Save ${shipping.toFixed(2)})
                </p>
              </motion.div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            className="card-premium flex flex-col items-center justify-center py-20 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <motion.div
              className="text-7xl mb-4"
              animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🛒
            </motion.div>
            <h2 className="text-3xl font-black text-white mb-3">
              Your Cart is Empty
            </h2>
            <motion.p
              className="text-gray-400 mb-8 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Start shopping to add premium tech products to your cart
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/products" className="btn-primary px-8 py-4 text-lg font-bold inline-flex items-center gap-2">
                ⚡ Start Shopping
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </MainLayoutGekko>
  )
}
