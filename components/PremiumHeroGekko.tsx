'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types'

interface PremiumHeroProps {
  products: Product[]
}

export default function PremiumHeroSection({ products }: PremiumHeroProps) {
  const featuredProduct = products[0]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden py-12 md:py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(46, 255, 46, 0.2) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '-100% -100%'],
          }}
          transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 80% 80%, rgba(95, 140, 255, 0.2) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      <div className="container-alt relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.div variants={itemVariants}>
              <span className="inline-block text-electric-400 font-bold text-sm px-4 py-2 bg-electric-500/10 rounded-full border border-electric-500/30">
                ✨ Welcome to Gekko
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-black text-white leading-tight"
            >
              <span className="bg-gradient-to-r from-electric-400 via-white to-midnight-400 bg-clip-text text-transparent">
                The Future of Tech Commerce
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 leading-relaxed"
            >
              Experience ultramodern shopping with cutting-edge design, premium products, and lightning-fast checkout. Gekko isn't just a marketplace—it's a tech revolution.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/products"
                  className="btn-primary px-8 py-4 text-lg font-bold inline-flex items-center gap-2"
                >
                  ⚡ Explore Now
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="glass px-8 py-4 text-lg font-bold rounded-lg border-2 border-electric-500/30 text-electric-400 hover:border-electric-500 transition-all">
                  🎬 See Demo
                </button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              {[
                { label: 'Products', value: '50K+' },
                { label: 'Users', value: '100K+' },
                { label: 'Categories', value: '100+' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="glass rounded-lg p-4 text-center"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(46, 255, 46, 0.5)' }}
                >
                  <div className="text-2xl font-bold text-neon">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - 3D Product Display */}
          <motion.div
            className="relative h-96 md:h-[500px]"
            variants={itemVariants}
          >
            {/* 3D Card Container */}
            <motion.div
              className="absolute inset-0 glass-dark rounded-3xl overflow-hidden"
              animate={{ rotateY: [0, 10, 0], rotateX: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
              style={{ perspective: '1000px' }}
            >
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-500/20 to-midnight-600/20" />

              {/* Product Image */}
              <motion.div
                className="relative w-full h-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
              >
                <Image
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  fill
                  className="object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-900 via-transparent to-transparent" />

                {/* Featured Badge */}
                <motion.div
                  className="absolute top-4 left-4 bg-gradient-to-r from-electric-500 to-electric-600 text-black px-4 py-2 rounded-lg font-bold text-sm shadow-glow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🌟 Featured
                </motion.div>

                {/* Product Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-2xl font-bold mb-2"
                  >
                    {featuredProduct.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-electric-400 font-bold text-lg"
                  >
                    Starting from ${featuredProduct.price.toFixed(2)}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="absolute w-20 h-20 rounded-lg glass border border-electric-500/30"
                animate={{
                  x: [0, 30, 0],
                  y: [0, -30, 0],
                  rotate: [0, 360, 0],
                }}
                transition={{
                  duration: 4 + item * 0.5,
                  repeat: Infinity,
                  delay: item * 0.3,
                }}
                style={{
                  top: `${20 + item * 25}%`,
                  right: `${-30 + item * 20}%`,
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-2xl">
                  {['⚡', '🎮', '💎'][item - 1]}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}