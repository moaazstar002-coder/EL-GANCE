import mongoose from 'mongoose'

const colorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    hex: { type: String, required: true, trim: true },
  },
  { _id: false },
)

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, required: true, trim: true, index: true },
    images: [{ type: String, required: true }],
    sizes: [{ type: String, required: true }],
    colors: [colorSchema],
    description: { type: String, required: true, trim: true },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviewsCount: { type: Number, default: 0, min: 0 },
    stock: { type: Number, default: 0, min: 0 },
    featured: { type: Boolean, default: false },
    isNew: { type: Boolean, default: false },
    discount: { type: Number, default: 0, min: 0, max: 100 },
  },
  { timestamps: true, suppressReservedKeysWarning: true },
)

export default mongoose.model('Product', productSchema)
