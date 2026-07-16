import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { connectDB } from '../config/db.js'
import Category from '../models/Category.js'
import Product from '../models/Product.js'

dotenv.config()

const categories = ['Dresses', 'Blazers', 'Tops', 'Pants', 'Skirts', 'Accessories']

const palette = [
  { name: 'Black', hex: '#111111' },
  { name: 'Ivory', hex: '#f8f3ea' },
  { name: 'Champagne', hex: '#d8bd83' },
  { name: 'Burgundy', hex: '#6f1d2e' },
  { name: 'Sage', hex: '#8d9b83' },
  { name: 'Navy', hex: '#18243b' },
]

const products = [
  ['Aurelia Satin Midi Dress', 285, 'Dresses'],
  ['Celeste Draped Evening Dress', 340, 'Dresses'],
  ['Noir Column Gown', 420, 'Dresses'],
  ['Ivory Pleated Day Dress', 260, 'Dresses'],
  ['Bordeaux Wrap Dress', 295, 'Dresses'],
  ['Sage Garden Slip Dress', 245, 'Dresses'],
  ['Lumiere Knit Dress', 230, 'Dresses'],
  ['Maison Tailored Blazer', 315, 'Blazers'],
  ['Heritage Wool Blazer', 365, 'Blazers'],
  ['Pearl Double-Breasted Blazer', 390, 'Blazers'],
  ['Midnight Velvet Blazer', 430, 'Blazers'],
  ['Sculpted Cropped Blazer', 275, 'Blazers'],
  ['Soft Linen Atelier Blazer', 295, 'Blazers'],
  ['Executive Crepe Blazer', 350, 'Blazers'],
  ['Silk Bow Blouse', 180, 'Tops'],
  ['Ribbed Merino Turtleneck', 145, 'Tops'],
  ['Satin Cami Top', 120, 'Tops'],
  ['Couture Poplin Shirt', 165, 'Tops'],
  ['Fine Gauge Cardigan', 195, 'Tops'],
  ['Off-Shoulder Knit Top', 155, 'Tops'],
  ['Sheer Organza Blouse', 210, 'Tops'],
  ['High-Waist Wide Pants', 220, 'Pants'],
  ['Tailored Cigarette Pants', 195, 'Pants'],
  ['Fluid Satin Trousers', 235, 'Pants'],
  ['Ivory Palazzo Pants', 250, 'Pants'],
  ['Structured Crepe Pants', 215, 'Pants'],
  ['Minimal Straight-Leg Pants', 175, 'Pants'],
  ['Pleated Midi Skirt', 190, 'Skirts'],
  ['Satin Bias Skirt', 205, 'Skirts'],
  ['Pencil Atelier Skirt', 175, 'Skirts'],
  ['Tweed Mini Skirt', 165, 'Skirts'],
  ['Organza Overlay Skirt', 245, 'Skirts'],
  ['Leather Belted Skirt', 260, 'Skirts'],
  ['Signature Leather Belt', 95, 'Accessories'],
  ['Gold Knot Earrings', 125, 'Accessories'],
  ['Sculptural Evening Clutch', 210, 'Accessories'],
  ['Silk Square Scarf', 135, 'Accessories'],
  ['Pearl Hair Pin Set', 85, 'Accessories'],
  ['Minimal Chain Necklace', 150, 'Accessories'],
  ['Atelier Leather Gloves', 170, 'Accessories'],
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
