import Order from '../models/Order.js'
import Product from '../models/Product.js'
import { asyncHandler } from '../middlewares/asyncHandler.js'

export const createOrder = asyncHandler(async (req, res) => {
  const { items } = req.body

  if (!Array.isArray(items) || items.length === 0) {
    res.status(400)
    throw new Error('Order items are required.')
  }

  const productIds = items.map((item) => item.productId)
  const products = await Product.find({ _id: { $in: productIds } })
  const productMap = new Map(products.map((product) => [product._id.toString(), product]))

  let totalPrice = 0

  const normalizedItems = items.map((item) => {
    const product = productMap.get(item.productId)

    if (!product) {
      res.status(404)
      throw new Error(`Product not found: ${item.productId}`)
    }

    const quantity = Number(item.quantity) || 1
    const discountedPrice = product.price * (1 - product.discount / 100)
    totalPrice += discountedPrice * quantity

    return {
      productId: product._id,
      size: item.size,
      color: item.color,
      quantity,
    }
  })

  const order = await Order.create({
    user: req.user._id,
    items: normalizedItems,
    totalPrice: Number(totalPrice.toFixed(2)),
    status: 'pending',
  })

  const populatedOrder = await order.populate('items.productId')
  res.status(201).json(populatedOrder)
})

export const getUserOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
    .populate('items.productId')
    .sort({ createdAt: -1 })

  res.json(orders)
})
