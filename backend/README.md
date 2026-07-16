# ELEGANCE Backend

Node.js, Express, and MongoDB API for the luxury women's clothing store.

## Setup

```bash
cd backend
npm install
```

Create `.env` from `.env.example`:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/elegance
JWT_SECRET=replace_this_with_a_long_random_secret
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:5173
```

## Seed Products

The seed script creates 40 products and expects frontend image files at:

```text
public/images/products/product-1.jpg
...
public/images/products/product-40.jpg
```

Run:

```bash
npm run seed
```

## Start API

```bash
npm run dev
```

Production style:

```bash
npm start
```

Base URL:

```text
http://localhost:5000/api
```

## Main Routes

```text
GET    /api/products
GET    /api/products?category=Dresses&minPrice=100&maxPrice=300&sort=price_asc&page=1&limit=12
GET    /api/products/featured
GET    /api/products/category/:category
GET    /api/products/:id

GET    /api/categories

POST   /api/users/register
POST   /api/users/login

POST   /api/orders
GET    /api/orders/my-orders
```

Protected order routes require:

```text
Authorization: Bearer <token>
```
