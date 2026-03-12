export interface Product {
  id: string
  name: string
  price: number
  rating: number
  reviews: number
  minOrderQty: number
  image: string
  category: string
  description: string
  supplier: string
  inStock: boolean
  priceTiers: PriceTier[]
}

export interface PriceTier {
  minQty: number
  maxQty: number | null
  price: number
}

export interface CartItem {
  productId: string
  quantity: number
  addedAt: Date
}

export interface Cart {
  items: CartItem[]
  total: number
}

export interface Category {
  id: string
  name: string
  icon: string
  count: number
}
