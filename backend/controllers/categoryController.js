import Category from '../models/Category.js'
import { asyncHandler } from '../middlewares/asyncHandler.js'

export const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find().sort({ name: 1 })
  res.json(categories)
})
