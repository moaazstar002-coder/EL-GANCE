import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { connectDB } from '../config/db.js'
import Category from '../models/Category.js'
import Product from '../models/Product.js'

dotenv.config()

const categories = ['Dresses', 'Blazers', 'Tops', 'suits ', 'Skirts', 'Accessories']

const palette = [
  { name: 'Black', hex: '#111111' },
  { name: 'Ivory', hex: '#f8f3ea' },
  { name: 'Champagne', hex: '#d8bd83' },
  { name: 'Burgundy', hex: '#6f1d2e' },
  { name: 'Sage', hex: '#8d9b83' },
  { name: 'Navy', hex: '#18243b' },
]

const products = [
  ['Aurelia Satin Midi Dress', 285, 'suits '],
  ['Celeste Draped Evening Dress', 340, 'suits '],
  ['Noir Column Gown', 420, 'suits '],
  ['Ivory Pleated Day Dress', 260, 'suits '],
  ['Bordeaux Wrap Dress', 295, 'suits '],
  ['Sage Garden Slip Dress', 245, 'suits '],
  ['Lumiere Knit Dress', 230, 'suits '],
  ['Maison Tailored Blazer', 315, 'suits '],
  ['Heritage Wool Blazer', 365, 'suits '],
  ['Pearl Double-Breasted Blazer', 390, 'suits '],
  ['Midnight Velvet Blazer', 430, 'suits '],
  ['Sculpted Cropped Blazer', 275, 'suits '],
  ['Soft Linen Atelier Blazer', 295, 'suits '],
  ['Executive Crepe Blazer', 350, 'suits '],
  ['Silk Bow Blouse', 180, 'suits '],
  ['Ribbed Merino Turtleneck', 145, 'suits '],
  ['Satin Cami Top', 120, 'suits '],
  ['Couture Poplin Shirt', 165, 'suits '],
  ['Fine Gauge Cardigan', 195, 'suits '],
  ['Off-Shoulder Knit Top', 155, 'suits '],
  ['Sheer Organza Blouse', 210, 'suits '],
  ['High-Waist Wide Pants', 220, 'suits '],
  ['Tailored Cigarette Pants', 195, 'suits '],
  ['Fluid Satin Trousers', 235, 'suits '],
  ['Ivory Palazzo Pants', 250, 'suits '],
  ['Structured Crepe Pants', 215, 'suits '],
  ['Minimal Straight-Leg Pants', 175, 'suits '],
  ['Pleated Midi Skirt', 190, 'suits '],
  ['Satin Bias Skirt', 205, 'suits '],
  ['Pencil Atelier Skirt', 175, 'suits '],
  ['Tweed Mini Skirt', 165, 'suits '],
  ['Organza Overlay Skirt', 245, 'suits '],
  ['Leather Belted Skirt', 260, 'suits '],
  ['Signature Leather Belt', 95, 'suits '],
  ['Gold Knot Earrings', 125, 'suits '],
  ['Sculptural Evening Clutch', 210, 'suits '],
  ['Silk Square Scarf', 135, 'suits '],
  ['Pearl Hair Pin Set', 85, 'suits '],
  ['Minimal Chain Necklace', 150, 'suits '],
  ['Atelier Leather Gloves', 170, 'suits '],
].map(([name, price, category], index) => {
  const productNumber = index + 1
  const colorStart = index % palette.length

  return {
    name,
    price,
    category,
    images: [`/images/products/product-${productNumber}.jpg`],
    sizes: category === 'Accessories' ? ['One Size'] : ['XS', 'S', 'M', 'L', 'XL'],
    colors: [palette[colorStart], palette[(colorStart + 2) % palette.length]],
    description:
      'A refined luxury piece designed for modern wardrobes, finished with elegant proportions, polished texture, and lasting comfort.',
    rating: Number((4.2 + (index % 8) * 0.1).toFixed(1)),
    reviewsCount: 18 + index * 3,
    stock: 8 + (index % 12),
    featured: index < 8 || index % 9 === 0,
    isNew: index >= 30 || index % 7 === 0,
    discount: index % 10 === 0 ? 15 : index % 6 === 0 ? 10 : 0,
  }
})

async function seed() {
  try {
    await connectDB()

    await Promise.all([Product.deleteMany({}), Category.deleteMany({})])
    await Category.insertMany(categories.map((name) => ({ name })))
    await Product.insertMany(products)

    console.log(`Seeded ${categories.length} categories and ${products.length} products.`)
    await mongoose.connection.close()
    process.exit(0)
  } catch (error) {
    console.error(`Seed failed: ${error.message}`)
    await mongoose.connection.close()
    process.exit(1)
  }
}

seed()
