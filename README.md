# 🛍️ EL-GANCE

**A Luxury E-Commerce Platform Built with Modern Web Technologies**

> Elegance redefined. Where luxury meets technology.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [State Management](#state-management)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)

---

## 📱 Overview

**EL-GANCE** is a full-stack luxury e-commerce platform showcasing high-end clothing collections. Built with React 19, Vite, and a robust Node.js/Express backend, it demonstrates modern web development best practices with clean architecture, responsive design, and smooth animations.

### Key Highlights:
- 🎨 **Luxury-Focused UI** — Gradient backgrounds, smooth animations, premium aesthetics
- 🛒 **Advanced Cart System** — Persistent storage, price normalization, real-time calculations
- 📦 **Full Product Catalog** — Categories, filtering, detailed views with reviews
- 👤 **User Authentication** — JWT-based auth with secure password hashing
- 🔐 **Security First** — CORS, input validation, secure session management
- ⚡ **Performance Optimized** — Vite bundling, memoized calculations, lazy loading

---

## 🛠️ Tech Stack

### Frontend
```
React 19          → Modern hooks & concurrent features
Vite              → Lightning-fast build & dev server
TypeScript (recommended)
Tailwind CSS 4    → Utility-first styling with JIT
Framer Motion     → Smooth page & component animations
React Router v7   → Client-side routing with animation support
Lucide React      → Beautiful icon library
React Helmet      → SEO meta tag management
```

### Backend
```
Node.js           → Runtime
Express.js        → Web framework
MongoDB           → Document database
Mongoose          → ODM with schema validation
JWT              → Stateless authentication
Bcrypt           → Password hashing & security
CORS             → Cross-origin request handling
Nodemon          → Development auto-reload
```

### DevTools
```
ESLint            → Code quality
Tailwind CSS      → CSS framework
Vite              → Build tool
npm               → Package manager
```

---

## ✨ Features

### 🛍️ Shopping Experience
- [x] Browse luxury clothing collections
- [x] Advanced product filtering (category, price, rating)
- [x] Detailed product views with images, colors, sizes
- [x] Real-time cart updates with price calculations
- [x] Persistent cart (localStorage)
- [x] Wishlist functionality
- [x] Product reviews & ratings
- [x] Search functionality

### 👤 User Management
- [x] User registration with email validation
- [x] Secure login with JWT tokens
- [x] Password hashing with bcrypt
- [x] User profiles & order history
- [x] Session persistence

### 📦 Order Management
- [x] Create orders from cart
- [x] Order tracking
- [x] Order history per user
- [x] Invoice generation ready

### 🎨 UI/UX
- [x] Responsive design (mobile, tablet, desktop)
- [x] Smooth page transitions with Framer Motion
- [x] Accessibility considerations
- [x] Loading states & error handling
- [x] Empty states with CTAs
- [x] Toast notifications ready

### 📊 Admin/Backend
- [x] Product management (CRUD)
- [x] Category management
- [x] Inventory tracking
- [x] User order queries
- [x] Database seeding script

---

## 📁 Project Structure

```
EL-GANCE/
│
├── 📂 frontend (React + Vite)
│   ├── src/
│   │   ├── Pages/                 # Route components
│   │   │   ├── HomePage.jsx
│   │   │   ├── Shop.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── cart.jsx
│   │   │   ├── CollectionPage.jsx
│   │   │   ├── JournalPage.jsx
│   │   │   ├── VisitPage.jsx
│   │   │   └── 404_NotFound.jsx
│   │   │
│   │   ├── components/
│   │   │   ├── Layout/
│   │   │   │   ├── Navbar.jsx     # Navigation with cart indicator
│   │   │   │   └── Footer.jsx
│   │   │   │
│   │   │   └── UI/
│   │   │       ├── button.jsx     # Animated button components
│   │   │       ├── card.jsx       # Reusable card layout
│   │   │       └── advanced.jsx   # Complex UI components
│   │   │
│   │   ├── context/
│   │   │   └── CartContext.jsx    # Global cart state management
│   │   │
│   │   ├── services/
│   │   │   └── api.js             # API layer with request wrapper
│   │   │
│   │   ├── data/
│   │   │   └── shopItems.js       # Mock/static data
│   │   │
│   │   ├── App.jsx                # Main app component
│   │   ├── main.jsx               # Entry point
│   │   └── index.css              # Global styles
│   │
│   ├── vite.config.js             # Vite configuration
│   ├── eslint.config.js           # ESLint rules
│   ├── package.json
│   └── index.html
│
├── 📂 backend (Node.js + Express)
│   ├── config/
│   │   └── db.js                  # MongoDB connection
│   │
│   ├── models/
│   │   ├── Product.js             # Product schema
│   │   ├── Category.js            # Category schema
│   │   ├── User.js                # User schema with auth
│   │   └── Order.js               # Order schema
│   │
│   ├── controllers/
│   │   ├── productController.js   # Product CRUD logic
│   │   ├── categoryController.js  # Category logic
│   │   ├── userController.js      # Auth & user logic
│   │   └── orderController.js     # Order processing
│   │
│   ├── routes/
│   │   ├── productRoutes.js       # /api/products
│   │   ├── categoryRoutes.js      # /api/categories
│   │   ├── userRoutes.js          # /api/users (auth)
│   │   └── orderRoutes.js         # /api/orders
│   │
│   ├── middlewares/
│   │   ├── authMiddleware.js      # JWT verification
│   │   ├── errorMiddleware.js     # Error handling
│   │   └── asyncHandler.js        # Async/await wrapper
│   │
│   ├── utils/
│   │   └── (Utility functions)
│   │
│   ├── scripts/
│   │   └── seed.js                # Database seeding
│   │
│   ├── server.js                  # Express server setup
│   ├── .env.example               # Environment template
│   └── package.json
│
├── public/
│   └── images/                    # Product images
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

```bash
# Node.js version 18+ required
node --version

# npm version 9+ required
npm --version

# MongoDB instance (local or Atlas)
# Ensure MongoDB is running or have connection string ready
```

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/moaazstar002-coder/EL-GANCE.git
cd EL-GANCE
```

#### 2. Install Frontend Dependencies
```bash
npm install
```

#### 3. Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

#### 4. Configure Environment Variables

**Frontend** (create `.env` in root):
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=ELEGANCE
```

**Backend** (create `.env` in `backend/` folder):
```env
# Database
MONGODB_URI=mongodb://localhost:27017/elegance
# or MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/elegance

# Server
PORT=5000
NODE_ENV=development

# CORS
CLIENT_URL=http://localhost:5173

# JWT (Add if implementing token refresh)
JWT_SECRET=your-super-secret-key-change-in-production
JWT_EXPIRE=7d
```

#### 5. Seed the Database (Optional)
```bash
cd backend
npm run seed
cd ..
```

This populates MongoDB with sample products and categories.

#### 6. Start Development Servers

**Terminal 1 — Frontend:**
```bash
npm run dev
```
Opens on `http://localhost:5173`

**Terminal 2 — Backend:**
```bash
cd backend
npm run dev
```
Server runs on `http://localhost:5000`

### ✅ Verify Setup
- Frontend: http://localhost:5173 (should load with smooth animations)
- Backend API: http://localhost:5000/api/health (should return `{ status: 'ok' }`)

---

## ⚙️ Configuration

### Tailwind CSS

Already configured with JIT mode (`@tailwindcss/vite`). Customize colors in your CSS:

```css
/* src/index.css */
@theme {
  --color-primary: #1b1c1c;
  --color-background: #fffaf0;
}
```

### Vite Configuration

Optimize builds in `vite.config.js`:

```javascript
build: {
  target: 'ES2020',
  minify: 'terser',
  rollupOptions: {
    output: {
      manualChunks: {
        react: ['react', 'react-dom'],
        motion: ['framer-motion'],
      }
    }
  }
}
```

### API Base URL

Change API endpoint in `src/services/api.js`:

```javascript
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
```

Or use `.env` file (recommended).

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Products

#### Get All Products
```http
GET /api/products
Query Parameters:
  - category?: string
  - search?: string
  - minPrice?: number
  - maxPrice?: number
  - sortBy?: 'price' | 'rating' | 'newest'
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "64f3a2b1c4e5d6f7g8h9i0j1",
      "name": "Premium Silk Blazer",
      "price": 299.99,
      "category": "Blazers",
      "images": ["url1", "url2"],
      "sizes": ["XS", "S", "M", "L", "XL"],
      "colors": [
        { "name": "Black", "hex": "#000000" }
      ],
      "rating": 4.8,
      "reviewsCount": 24,
      "stock": 15,
      "discount": 10
    }
  ]
}
```

#### Get Product by ID
```http
GET /api/products/:id
```

#### Get Featured Products
```http
GET /api/products/featured
```

### Categories

#### Get All Categories
```http
GET /api/categories
```

**Response:**
```json
{
  "success": true,
  "data": [
    { "id": "1", "name": "Dresses", "slug": "dresses" },
    { "id": "2", "name": "Blazers", "slug": "blazers" }
  ]
}
```

### Users (Authentication)

#### Register
```http
POST /api/users/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "64f...",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIs..."
  }
}
```

#### Login
```http
POST /api/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123"
}
```

### Orders

#### Create Order
```http
POST /api/orders
Authorization: Bearer <token>
Content-Type: application/json

{
  "items": [
    {
      "productId": "64f...",
      "quantity": 2,
      "price": 299.99
    }
  ],
  "totalAmount": 599.98,
  "shippingAddress": "123 Main St, City, State 12345"
}
```

#### Get My Orders
```http
GET /api/orders/my-orders
Authorization: Bearer <token>
```

---

## 🗄️ Database Schema

### Product Schema
```javascript
{
  name: String (required),
  price: Number (required, min: 0),
  category: String (required, indexed),
  images: [String],
  sizes: [String],
  colors: [{
    name: String,
    hex: String
  }],
  description: String,
  rating: Number (0-5, default: 0),
  reviewsCount: Number (default: 0),
  stock: Number (default: 0),
  featured: Boolean (default: false),
  isNew: Boolean (default: false),
  discount: Number (0-100, default: 0),
  createdAt: Date,
  updatedAt: Date
}
```

### User Schema
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed with bcrypt),
  createdAt: Date,
  updatedAt: Date
}
```

### Order Schema
```javascript
{
  userId: ObjectId (required),
  items: [{
    productId: ObjectId,
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  status: String (enum: pending, processing, shipped, delivered),
  shippingAddress: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Category Schema
```javascript
{
  name: String (required, unique),
  slug: String (unique),
  description: String,
  image: String,
  createdAt: Date
}
```

---

## 🎯 State Management

### CartContext
**Location:** `src/context/CartContext.jsx`

**Purpose:** Global cart state with localStorage persistence

**API:**
```javascript
const {
  cart,           // Array of cart items
  addToCart,      // (product, quantity) => void
  removeFromCart, // (productId) => void
  updateQuantity, // (productId, amount) => void
  clearCart,      // () => void
  totalItems,     // computed: number
  subtotal,       // computed: number
  normalizePrice, // (price) => number (handles NaN/null)
  isInCart,       // (productId) => boolean
  getItemQuantity // (productId) => number
} = useCart()
```

**Usage Example:**
```jsx
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart, isInCart } = useCart()
  
  return (
    <button onClick={() => addToCart(product, 1)}>
      {isInCart(product.id) ? 'In Cart ✓' : 'Add to Cart'}
    </button>
  )
}
```

**Key Features:**
- ✅ Defensive price normalization (handles NaN, null, strings)
- ✅ Memoized calculations (prevent unnecessary re-renders)
- ✅ localStorage persistence with SSR safety
- ✅ Quantity validation (minimum 1)

---

## 🚀 Deployment

### Frontend Deployment (Vercel)

```bash
# Build
npm run build

# Deploy
npx vercel
```

### Backend Deployment (Railway/Render)

```bash
# Set environment variables on platform
MONGODB_URI=<your-atlas-connection-string>
PORT=<port-assigned-by-platform>
CLIENT_URL=<your-frontend-url>
JWT_SECRET=<secure-random-key>

# Deploy
git push origin main
```

### Environment Variables for Production

```env
# Backend
NODE_ENV=production
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/elegance
PORT=5000
CLIENT_URL=https://your-frontend.com
JWT_SECRET=<super-secret-key>

# Frontend
VITE_API_URL=https://your-backend.com/api
VITE_APP_NAME=ELEGANCE
```

---

## 📚 Key Concepts

### Price Normalization
Handles edge cases in price calculations:

```javascript
normalizePrice(value) {
  if (value === null || value === undefined || value === '') return 0
  if (typeof value === 'number') return Math.max(0, value)
  
  const cleanPrice = String(value).replace(/[^\d.]/g, '')
  const numPrice = parseFloat(cleanPrice)
  
  return isNaN(numPrice) ? 0 : Math.max(0, numPrice)
}
```

### Responsive Design
Tailwind breakpoints used:

```
sm: 640px   → Mobile
md: 768px   → Tablet
lg: 1024px  → Desktop
xl: 1280px  → Large Desktop
```

### Animations
Framer Motion for smooth transitions:

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>
```

---

## 🔐 Security Considerations

- [x] **Password Hashing** — bcrypt with salt rounds 12
- [x] **CORS** — Restricted to frontend origin
- [x] **JWT** — Stateless authentication
- [x] **Input Validation** — Mongoose schema validation
- [ ] **Rate Limiting** — Recommended (express-rate-limit)
- [ ] **HTTPS** — Required in production
- [ ] **Content Security Policy** — Recommended
- [ ] **SQL Injection** — Not applicable (NoSQL), but validate inputs

**Next Steps for Security:**
1. Add rate limiting on auth endpoints
2. Implement HTTPS with secure cookies
3. Add CSP headers
4. Add input sanitization (xss-filters)
5. Implement password strength requirements

---

## 🧪 Testing

### Frontend Testing (Recommended)
```bash
npm install --save-dev @testing-library/react vitest

# Write tests in __tests__/ folders
npm run test
```

### Backend Testing (Recommended)
```bash
npm install --save-dev jest supertest

# Write tests in __tests__/ folders
npm test
```

---

## 🐛 Troubleshooting

### "Cannot POST /api/products"
**Solution:** Ensure backend is running on port 5000

```bash
cd backend
npm run dev
```

### "CORS Error"
**Solution:** Check `.env` file has correct `CLIENT_URL`

**Backend `backend/.env`:**
```env
CLIENT_URL=http://localhost:5173
```

### "Cart not persisting"
**Solution:** Check browser localStorage not disabled

```javascript
// Debug in console
localStorage.setItem('test', 'value')
localStorage.getItem('test')  // Should return 'value'
```

### "Products showing NaN prices"
**Solution:** Ensure API response includes valid `price` field

```bash
# Test API
curl http://localhost:5000/api/products
# Price should be a number, not string
```

### "MongoDB Connection Failed"
**Solution:** Verify MongoDB is running

```bash
# Local MongoDB
mongod

# Or check Atlas connection string format
# mongodb+srv://username:password@cluster.mongodb.net/elegance
```

### "Port already in use"
**Frontend on different port:**
```bash
npm run dev -- --port 5174
```

**Backend on different port:**
```bash
# backend/.env
PORT=5001
```

---

## 📝 Scripts

### Frontend
```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend
```bash
npm run dev          # Start with nodemon
npm start            # Start production server
npm run seed         # Seed database with sample data
```

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Code Standards
- Follow ESLint rules
- Use functional components & hooks
- Keep components small & reusable
- Add comments for complex logic
- Test your changes

---

## 📄 License

This project is licensed under the MIT License — see [LICENSE](./LICENSE) file for details.

---

## 👤 Author

**ميذو (Zero)** — [@moaazstar002-coder](https://github.com/moaazstar002-coder)

---

## 🔗 Resources

- [React 19 Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Express.js](https://expressjs.com)
- [MongoDB](https://docs.mongodb.com)
- [Mongoose](https://mongoosejs.com)

---

## 📞 Support

For issues or questions:
1. Check [Troubleshooting](#troubleshooting) section
2. Search GitHub Issues
3. Create a new issue with detailed description

---

## 🎉 Thank You

Thanks for exploring EL-GANCE! If you found this helpful, please give it a ⭐ on GitHub.

**Elegance redefined. Where luxury meets technology.**

---

**Last Updated:** July 2026  
**Version:** 1.0.0
