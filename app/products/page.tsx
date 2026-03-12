'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import MainLayoutGekko from '@/components/MainLayoutGekko'
import ProductsPageClient from './products-client'

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsPageSkeleton />}>
      <ProductsPageClient />
    </Suspense>
  )
}

function ProductsPageSkeleton() {
  return (
    <MainLayoutGekko>
      <div className="container-alt py-8">
        <motion.div
          className="h-12 w-64 bg-gradient-to-r from-midnight-800 to-midnight-900 rounded-lg animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </div>
    </MainLayoutGekko>
  )
}
