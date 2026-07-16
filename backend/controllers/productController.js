import mongoose from 'mongoose'
import Product from '../models/Product.js'
import { asyncHandler } from '../middlewares/asyncHandler.js'

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function buildProductQuery(query) {
  const filters = {}

  if (query.category) {
    filters.category = { $regex: `^${escapeRegex(query.category)}$`, $options: 'i' }
  }

  const minPrice = Number(query.minPrice)
  const maxPrice = Number(query.maxPrice)

  if (!Number.isNaN(minPrice) || !Number.isNaN(maxPrice)) {
    filters.price = {}
    if (!Number.isNaN(minPrice)) filters.price.$gte = minPrice
    if (!Number.isNaN(maxPrice)) filters.price.$lte = maxPrice
  }

  return filters
}

function buildSort(sort) {
  const sortOptions = {
    price_asc: { price: 1 },
    price_desc: { price: -1 },
    newest: { createdAt: -1 },
    rating: { rating: -1 },
  }

  return sortOptions[sort] || { createdAt: -1 }
}

export const getProducts = asyncHandler(async (req, res) => {
  const page = Math.max(Number(req.query.page) || 1, 1)
  const limit = Math.min(Math.max(Number(req.query.limit) || 12, 1), 40)
  const skip = (page - 1) * limit
  const filters = buildProductQuery(req.query)
  const sort = buildSort(req.query.sort)

  const [products, total] = await Promise.all([
    Product.find(filters).sort(sort).skip(skip).limit(limit),
    Product.countDocuments(filters),
  ])

  res.json({
    products,
    page,
    pages: Math.ceil(total / limit) || 1,
    total,
  })
})

export const getProductById = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404)
    throw new Error('Product not found.')
  }

  const product = await Product.findById(req.params.id)

  if (!product) {
    res.status(404)
    throw new Error('Product not found.')
  }

  res.json(product)
})

export const getProductsByCategory = asyncHandler(async (req, res) => {
  const products = await Product.find({
    category: { $regex: `^${escapeRegex(req.params.category)}$`, $options: 'i' },
  }).sort({ createdAt: -1 })

  res.json(products)
})

export const getFeaturedProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ featured: true }).sort({ createdAt: -1 }).limit(12)
  res.json(products)
})
