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
    image: '/photo6.jpg',
    accent: 'from-[#000000] via-[#4c4546] to-[#fed65b]',
  },
  {
    title: 'Evening Layering',
    description: 'Soft structure designed for late-night elegance.',
    details:
      'Elevated layering pieces with subtle texture, designed to move quietly through evening events with a refined sense of ease.',
    image: '/photo7.jpg',
    accent: 'from-[#1b1c1c] via-[#735c00] to-[#e9c349]',
  },
  {
    title: 'Studio Accessories',
    description: 'Polished pieces that complete the wardrobe with ease.',
    details:
      'A selection of modern accents and sculptural minimalism that add finishing clarity to a calm, considered outfit.',
    image: '/photo8.jpg',
    accent: 'from-[#f5f3f3] via-[#e4e2e2] to-[#cfc4c5]',
  },
  {
    title: 'Tailored Essentials',
    description: 'Minimal forms with a quiet but confident presence.',
    details:
      'Structured staples built for seamless translation across day and evening. Clean lines grounded by thoughtful fabrication.',
    image: '/photo9.jpg',
    accent: 'from-[#ffffff] via-[#efeded] to-[#dbdad9]',
  },
  {
    title: 'Evening Layering',
    description: 'Soft structure designed for late-night elegance.',
    details:
      'A refined reprise of eveningwear pieces with a focus on texture, depth, and subtle shine.',
    image: '/photo10.jpg',
    accent: 'from-[#1b1c1c] via-[#735c00] to-[#e9c349]',
  },
  {
    title: 'Studio Accessories',
    description: 'Polished pieces that complete the wardrobe with ease.',
    details:
      'Accessory essentials that feel modern and precise, with a warm, tactile finish.',
    image: '/photo2.jpg',
    accent: 'from-[#f5f3f3] via-[#e4e2e2] to-[#cfc4c5]',
  },
  {
    title: 'Tailored Essentials',
    description: 'Minimal forms with a quiet but confident presence.',
    details:
      'Minimal tailoring in soft neutrals, designed to be layered and revisited across seasons.',
    image: '/photo1.jpg',
    accent: 'from-[#ffffff] via-[#efeded] to-[#dbdad9]',
  },
  {
    title: 'Monochrome Edit',
    description: 'Refined silhouettes in black, cream, and warm gold.',
    details:
      'A second edit of refined monochrome focused on elevated texture, high contrast, and clean volume.',
    image: '/photo3.jpg',
    accent: 'from-[#000000] via-[#4c4546] to-[#fed65b]',
  },
].map((item, index) => ({
  ...item,
  slug: createSlug(item.title, index),
}))

export function getItemBySlug(slug) {
  return shopItems.find((item) => item.slug === slug)
}
