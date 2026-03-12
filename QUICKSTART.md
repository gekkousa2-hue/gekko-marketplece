# Quick Start Guide

## 🚀 Get Running in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
```
http://localhost:3000
```

---

## 📍 Key Routes

| Route | Purpose |
|-------|---------|
| `/` | Homepage with featured products |
| `/products` | Product listing with filters |
| `/product/[id]` | Product detail page |
| `/cart` | Shopping cart |

---

## 🔍 Explore the Features

### 1. Home Page (`/`)
- Hero banner with CTA
- Category showcase
- Featured products grid
- Why choose us section

### 2. Browse Products (`/products`)
- Click category from navbar
- Use search bar
- Apply filters (price, rating, MOQ)
- Responsive grid

### 3. Product Details (`/product/1` - `product/10`)
- View full product info
- See pricing tiers table
- Adjust quantity
- Add to cart

### 4. Shopping Cart (`/cart`)
- View all items
- Update quantities
- See order summary
- Auto-calculated tax/shipping

---

## 🛠️ Available Commands

```bash
# Development
npm run dev          # Start dev server on port 3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 📁 Key Directories

```
components/    - Reusable UI components
types/         - TypeScript interfaces
data/          - Mock data and constants
hooks/         - Custom React hooks
store/         - Zustand state management
utils/         - Helper functions
app/           - Next.js App Router pages
```

---

## 🎨 Customize Theme

Edit `tailwind.config.ts` to change:
- Colors
- Fonts
- Spacing
- Breakpoints

---

## ➕ Add New Products

Edit `data/products.ts` and add to the `PRODUCTS` array:

```typescript
{
  id: '11',
  name: 'Product Name',
  price: 99.99,
  rating: 4.5,
  reviews: 100,
  minOrderQty: 5,
  image: 'https://...',
  category: 'Electronics',
  description: 'Product description',
  supplier: 'Supplier Name',
  inStock: true,
  priceTiers: [
    { minQty: 5, maxQty: 49, price: 99.99 },
    { minQty: 50, maxQty: null, price: 89.99 },
  ],
}
```

---

## 📱 Test Responsive Design

Use Chrome DevTools:
1. Press `F12`
2. Click device toolbar icon
3. Select device or resize window

---

## 🐛 Troubleshooting

### Dev server won't start
```bash
rm -rf .next
npm install
npm run dev
```

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### TypeScript errors
```bash
npm run build
```

---

## 💡 Next Steps

1. Install recommended VSCode extensions
2. Explore component files
3. Test all features
4. Customize theme colors
5. Add your own products
6. Deploy to Vercel

---

**Happy Coding! 🎉**
