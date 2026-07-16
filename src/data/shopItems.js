const createSlug = (title, index) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') + `-${index}`

export const shopItems = [
  {
    title: 'Monochrome Edit',
    description: 'Refined silhouettes in black, cream, and warm gold.',
    details:
      'A carefully considered set of wardrobe essentials that balance sharp tailoring with soft drape. Perfect for a polished yet effortless presence.',
    image: '/images/products/product-6.jpg',
    price: 385,
    accent: 'from-[#000000] via-[#4c4546] to-[#fed65b]',
  },
  {
    title: 'Evening Layering',
    description: 'Soft structure designed for late-night elegance.',
    details:
      'Elevated layering pieces with subtle texture, designed to move quietly through evening events with a refined sense of ease.',
    image: '/images/products/product-7.jpg',
    price: 625,
    accent: 'from-[#1b1c1c] via-[#735c00] to-[#e9c349]',
  },
  {
    title: 'Studio Accessories',
    description: 'Polished pieces that complete the wardrobe with ease.',
    details:
      'A selection of modern accents and sculptural minimalism that add finishing clarity to a calm, considered outfit.',
    image: '/images/products/product-8.jpg',
    price: 275,
    accent: 'from-[#f5f3f3] via-[#e4e2e2] to-[#cfc4c5]',
  },
  {
    title: 'Tailored Essentials',
    description: 'Minimal forms with a quiet but confident presence.',
    details:
      'Structured staples built for seamless translation across day and evening. Clean lines grounded by thoughtful fabrication.',
    image: '/images/products/product-9.jpg',
    price: 450,
    accent: 'from-[#ffffff] via-[#efeded] to-[#dbdad9]',
  },
  {
    title: 'Evening Layering',
    description: 'Soft structure designed for late-night elegance.',
    details:
      'A refined reprise of eveningwear pieces with a focus on texture, depth, and subtle shine.',
    image: '/images/products/product-10.jpg',
    price: 595,
    accent: 'from-[#1b1c1c] via-[#735c00] to-[#e9c349]',
  },
  {
    title: 'Studio Accessories',
    description: 'Polished pieces that complete the wardrobe with ease.',
    details:
      'Accessory essentials that feel modern and precise, with a warm, tactile finish.',
    image: '/images/products/product-2.jpg',
    price: 320,
    accent: 'from-[#f5f3f3] via-[#e4e2e2] to-[#cfc4c5]',
  },
  {
    title: 'Tailored Essentials',
    description: 'Minimal forms with a quiet but confident presence.',
    details:
      'Minimal tailoring in soft neutrals, designed to be layered and revisited across seasons.',
    image: '/images/products/product-1.jpg',
    price: 480,
    accent: 'from-[#ffffff] via-[#efeded] to-[#dbdad9]',
  },
  {
    title: 'Monochrome Edit',
    description: 'Refined silhouettes in black, cream, and warm gold.',
    details:
      'A second edit of refined monochrome focused on elevated texture, high contrast, and clean volume.',
    image: '/images/products/product-3.jpg',
    price: 410,
    accent: 'from-[#000000] via-[#4c4546] to-[#fed65b]',
  },
].map((item, index) => ({
  ...item,
  slug: createSlug(item.title, index),
}))

export function getItemBySlug(slug) {
  return shopItems.find((item) => item.slug === slug)
}