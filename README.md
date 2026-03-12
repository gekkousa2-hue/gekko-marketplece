# Gekko Marketplace - Ultra-Modern Tech Store

A premium, futuristic e-commerce marketplace powered by **Next.js 14**, **Tailwind CSS**, **TypeScript**, and **Framer Motion**. Built with cutting-edge dark theme (Midnight Blue + Electric Green), glassmorphism effects, smooth animations, and a 3D hero section for the ultimate tech shopping experience.

## 🎯 Features

### Core Features
- ✅ **Floating Search Bar** with minimalist design and Framer Motion animations
- ✅ **Premium Product Cards** with glassmorphism and neon styling
- ✅ **Advanced Product Filtering** (price, category, rating, MOQ)
- ✅ **3D Premium Hero Section** with animated floating elements
- ✅ **Shopping Cart** with glass effects and smooth transitions
- ✅ **Dark Theme UI** with Midnight Blue (#0a1428-#001999) & Electric Green (#2eff2e)
- ✅ **Responsive Mobile-First Design** optimized for all devices
- ✅ **Bulk Pricing Tiers** for wholesale orders
- ✅ **Dynamic Pricing Tables** with tier selection

### Advanced Features
- 🎬 **Framer Motion Animations** throughout entire platform
- 🌌 **Glassmorphism Effects** on cards, sidebar, and buttons
- ✨ **Neon Glowing Text and Icons** for premium aesthetic
- 🎮 **Interactive 3D Transforms** on hero section and product cards
- 🎯 **Staggered Category Animations** when switching categories
- 🌟 **Smooth Page Transitions** with optimized performance
- 🔥 **Hover Effects** with scale and glow animations
- 💎 **Premium Visual Effects** (custom shadows, gradients, blur)

## 📁 Project Structure

```
gekko-marketplace/
├── app/
│   ├── layout.tsx              # Root layout (Gekko branding)
│   ├── page.tsx                # Homepage with PremiumHero
│   ├── globals.css             # Dark theme + glassmorphism styles
│   ├── products/
│   │   └── page.tsx            # Products listing with animations
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx        # Product detail (dark theme)
│   └── cart/
│       └── page.tsx            # Shopping cart (glassmorphic)
├── components/
│   ├── NavbarGekko.tsx         # Floating navbar with search
│   ├── FooterGekko.tsx         # Animated footer
│   ├── MainLayoutGekko.tsx     # Layout wrapper
│   ├── ProductCardGekko.tsx    # Premium product cards
│   ├── CategorySidebarGekko.tsx | Glassmorphic sidebar
│   ├── PremiumHeroGekko.tsx    # 3D hero section
│   └── FilterSidebar.tsx       # Advanced filters
├── data/
│   └── products.ts             # Mock product and category data
├── hooks/
│   └── useProductFilter.ts     # Custom filtering hook
├── store/
│   └── cart.ts                 # Zustand state management
├── types/
│   └── index.ts                # TypeScript interfaces
├── utils/
│   └── formatting.ts           # Utility functions
├── package.json                # Dependencies (includes Framer Motion)
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # Tailwind (Midnight + Electric colors)
├── postcss.config.js           # PostCSS config
└── next.config.js              # Next.js config
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or higher
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory:**
```bash
cd gekko-marketplace
```

2. **Install dependencies (includes Framer Motion):**
```bash
npm install
# or
yarn install
```

3. **Start development server:**
```bash
npm run dev
# or
yarn dev
```

4. **Open browser and visit:**
```
http://localhost:3000
```

## 📖 Usage Guide

### Homepage
- Browse stunning 3D hero section with animated products
- Explore trending tech categories with hover effects
- View featured premium tech products in dense grid
- Discover why Gekko stands out

### Product Listing Page (`/products`)
- Advanced filters with glassmorphic UI
- Search powered by Framer Motion animations
- Dense 4-column responsive grid
- Smooth staggered card animations
- Real-time product count

### Product Detail Page (`/product/[id]`)
- Premium dark theme product showcase
- Animated rating with pulsing effects
- Dynamic bulk pricing table with hover states
- Real-time price calculation
- Glassmorphic order form
- Smooth quantity controls

### Shopping Cart (`/cart`)
- Glassmorphic card design for each item
- Animated quantity controls
- Premium order summary with neon pricing
- Real-time total calculation
- Free shipping banner with pulsing animation
- Smooth remove/update animations

## 🎨 Design System - Gekko

### Color Palette
- **Midnight Blue:** #0a1428 to #001999 (backgrounds, gradients)
- **Electric Green:** #f0ffee to #007700 (accents, CTAs, badges)
- **Glass White:** rgba(255, 255, 255, 0.05) (glassmorphism)
- **Neon Glow:** Electric green with box-shadow effects

### Typography
- **Font:** System font stack (Inter compatible)
- **Bold Headlines:** Font-black for premium feel
- **Dark Mode:** White text on dark backgrounds

### Component Styling
- **Glass Effect:** backdrop-blur-md/lg with transparent borders
- **Glow Effects:** Electric green shadow animations
- **Hover States:** Scale transforms + color transitions
- **Borders:** Electric green with reduced opacity

### Responsive Breakpoints
- Mobile: < 640px (1-2 columns)
- Tablet: 640px - 1024px (3-4 columns)
- Desktop: > 1024px (4-6 columns)

## 🛠️ Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript 5.0** - Type safety
- **Tailwind CSS 3.4** - Utility-first styling
- **Framer Motion 10.16** - Smooth animations and interactions
- **Zustand 4.4** - Lightweight state management
- **React 18.2** - UI library
- **PostCSS 8.4** - CSS transformation
- **Autoprefixer 10.4** - Vendor prefixes
- **Next Image** - Optimized images

## 🎬 Animation Library - Framer Motion

This project extensively uses **Framer Motion** for:
- **Staggered Animations:** Sequential reveal of elements
- **Hover Effects:** Scale, glow, and position transforms
- **Page Transitions:** Smooth opacity and scale transitions
- **3D Transforms:** rotateX, rotateY for hero section
- **Keyframe Animations:** Breathing effects, floating, pulsing
- **Gesture Recognition:** whileHover, whileTap effects

### Common Animation Patterns
```tsx
// Staggered emergence
<motion.div variants={containerVariants} initial="hidden" animate="show">
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants} />
  ))}
</motion.div>

// Hover effects
<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} />

// 3D transforms
<motion.div animate={{ rotateY: [0, 10, 0], rotateX: [0, -5, 0] }} />
```

## 🌟 Key Features Showcase

### PremiumHeroGekko Component
- 3D rotating product card with perspective
- Animated background gradients
- Floating emoji elements with orbital motion
- Left side content with staggered text reveal
- Call-to-action buttons with motion effects

### ProductCardGekko Component
- Glassmorphic card with neon borders
- Hover lift animation (-5px on Y axis)
- Image scale and gradient overlay on hover
- Animated status badge with glow pulse
- Electric green price and MOQ displays
- View Details button with motion response

### NavbarGekko Component
- Sticky navbar with glass effect on scroll
- Floating search bar with scale animation on focus
- Gradient electric-green glow in search
- Categories dropdown with staggered animations
- Cart badge with AnimatePresence
- Responsive logo with hover scale

### CategorySidebarGekko Component  
- Sticky glassmorphic sidebar
- Staggered category animations
- Icon scale animations on hover
- Category count badges with electric styling
- "Join Gekko" seller CTA with glow effect
- Responsive (hidden mobile, visible lg+)

## 🎨 CSS Utilities Added

### Global Styles (`app/globals.css`)
```css
/* Glass effects */
.glass { backdrop-blur-md + white/[0.05] background }
.glass-dark { backdrop-blur-lg + slate-900/[0.4] background }
.glass-glow { glass + electric-green glow }

/* Premium card */
.card-premium { glass-dark + neon border + shadow-glow }

/* Text effects */
.text-neon { electric-green color }
.text-glow { electric-green with text-shadow }

/* Animations */
@keyframes glow-pulse { 3s pulsing box-shadow }
@keyframes float { 3s vertical translation }
```

## 🔧 Configuration Files Updated

### `tailwind.config.ts`
- Midnight palette (9 shades from #f0f7ff to #001999)
- Electric palette (9 shades from #f0ffee to #007700)
- Custom shadows: glow, glow-lg, neon
- Keyframes: glow-pulse, float
- Backdrop blur utilities: xs, sm, md, lg, xl

### `package.json`
- Name: "gekko-marketplace"
- Version: "2.0.0"
- Added: "framer-motion": "^10.16.0"
- Description: Ultra-modern futuristic tech marketplace

## 📊 Performance Optimization

- Lazy loading for product images
- Optimized animation performance with will-change
- Staggered animations prevent simultaneous renders
- CSS containment for glass effects
- Next Image optimization for hero section
- Dark mode reduces eye strain and GPU usage

## 🎯 Future Enhancements

- [ ] Product reviews and ratings system
- [ ] Advanced search with autocomplete
- [ ] User accounts and wish lists
- [ ] Payment integration
- [ ] Inventory management
- [ ] Supplier dashboard
- [ ] Real-time notifications
- [ ] Multi-language support

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the GitHub repository.

---

**Built with ❤️ for the future of tech shopping**
- **React 18** - UI library

## 📊 Mock Data

### 10 Sample Products
Electronics, clothing, home goods, and sports equipment with bulk pricing tiers

### 8 Categories
Electronics, Clothing, Home & Garden, Sports, Beauty, Toys, Office Supplies, Automotive

## 🔄 State Management (Zustand)

Cart store with localStorage persistence:
- Add/remove items
- Update quantities
- Clear cart
- Get total count

## 🚀 Deployment

### Vercel
```bash
npm run build
vercel deploy
```

### Local Production Build
```bash
npm run build
npm start
```

## 📄 License

MIT License - Open source project

---

**Version:** 1.0.0  
**Status:** Production Ready