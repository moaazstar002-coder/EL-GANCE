# ELEGANCE

Luxury women's clothing e-commerce project with a React + Vite frontend and a Node.js + Express + MongoDB backend.

## Frontend

```bash
npm install
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

Production build:

```bash
npm run build
```

## Backend

```bash
cd backend
npm install
```

The backend includes a ready local `.env` and an `.env.example`.

API URL:

```text
http://localhost:5000/api
```

Start MongoDB locally, then seed the database:

```bash
npm run seed
```

Start the API:

```bash
npm run dev
```

## API Routes

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

Order routes require:

```text
Authorization: Bearer <token>
```

## Images

Product images are stored in:

```text
public/images/products
```

The backend seed uses:

```text
/images/products/product-1.jpg
...
/images/products/product-40.jpg
```

## Notes

- The shop and product detail pages call `http://localhost:5000/api`.
- If the API is offline during frontend development, the frontend falls back to local sample products.
- MongoDB must be running locally before `npm run seed` or `npm run dev` in `backend`.
