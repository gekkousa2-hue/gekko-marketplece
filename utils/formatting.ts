export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(price)
}

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export const getRatingColor = (rating: number): string => {
  if (rating >= 4.5) return 'text-green-600'
  if (rating >= 3.5) return 'text-blue-600'
  if (rating >= 2.5) return 'text-yellow-600'
  return 'text-red-600'
}

export const getStockStatus = (inStock: boolean): { text: string; color: string } => {
  return inStock
    ? { text: 'In Stock', color: 'text-green-600' }
    : { text: 'Out of Stock', color: 'text-red-600' }
}
