'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const BANNERS = [
  {
    id: 1,
    title: 'Wholesale Electronics',
    subtitle: 'Get the best prices on bulk orders',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=300&fit=crop',
    cta: 'Shop Now',
    bgGradient: 'from-blue-600 to-blue-800',
  },
  {
    id: 2,
    title: 'Quality Fashion',
    subtitle: 'Premium clothing for wholesale buyers',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=300&fit=crop',
    cta: 'Explore',
    bgGradient: 'from-purple-600 to-purple-800',
  },
  {
    id: 3,
    title: 'Home & Garden',
    subtitle: 'Complete your home with bulk discounts',
    image: 'https://images.unsplash.com/photo-1585521537919-b3999a47dd8d?w=500&h=300&fit=crop',
    cta: 'Browse',
    bgGradient: 'from-green-600 to-green-800',
  },
]

export default function BannerSlider() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BANNERS.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % BANNERS.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + BANNERS.length) % BANNERS.length)
    setAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrent(index)
    setAutoPlay(false)
  }

  const banner = BANNERS[current]

  return (
    <div
      className={`relative h-80 w-full rounded-lg overflow-hidden bg-gradient-to-r ${banner.bgGradient} shadow-lg`}
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Banner Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{banner.title}</h2>
        <p className="text-lg md:text-xl text-white/90 mb-6">{banner.subtitle}</p>
        <Link
          href="/products"
          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
        >
          {banner.cta}
        </Link>
      </div>

      {/* Previous Button */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {BANNERS.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? 'bg-white w-8'
                : 'bg-white/50 w-2 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
