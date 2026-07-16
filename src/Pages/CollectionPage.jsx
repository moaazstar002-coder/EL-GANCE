import { AnimatedCard, SectionHeader } from '../components/UI/button'
import { TagList } from '../components/UI/card'
import { Badge } from '../components/UI/advanced'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

const pieces = [
  {
    name: 'The Atelier Blazer',
    category: 'Tailoring',
    description: 'Clean shoulders, soft drape, and a sculpted silhouette.',
    image: '/images/products/product-2.jpg',
  },
  {
    name: 'Linen Evening Set',
    category: 'Essentials',
    description: 'Fluid layers in warm ivory and muted stone.',
    image: '/images/products/product-3.jpg',
  },
  {
    name: 'Gilded Clutch',
    category: 'Accessories',
    description: 'A polished accent with brushed metallic detailing.',
    image: '/images/products/product-4.jpg',
  },
  {
    name: 'Structured Sandal',
    category: 'Footwear',
    description: 'Minimalist form with a grounding, elegant profile.',
    image: '/images/products/product-7.jpg',
  },
]

function CollectionPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="space-y-8"
    >
      <Helmet>
        <title>Collection | ELÉGANCE</title>
        <meta name="description" content="An edit of refined staples for every hour of the day." />
      </Helmet>
      <section className="rounded-[2rem] border border-white/40 bg-white/40 backdrop-blur-md p-8 shadow-[0_20px_70px_rgba(27,28,28,0.06)]">
        <SectionHeader
          eyebrow="Collection"
          title="An edit of refined staples for every hour of the day."
          description="The collection is composed of gentle contrasts: black and bone, texture and polish, softness and command."
        />
        <TagList items={['Tailoring', 'Accessories', 'Evening essentials']} className="mt-6" />
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {pieces.map((piece, index) => (
          <AnimatedCard
            key={piece.name}
            delay={index * 0.12}
            className="group overflow-hidden rounded-[1.4rem] border border-white/50 bg-white/50 backdrop-blur-md p-5 transition-colors hover:bg-white/70"
          >
            <div className="relative overflow-hidden rounded-[1rem]">
              <img
                src={piece.image}
                alt={piece.name}
                className="h-40 w-full bg-[#ffffff] object-contain p-2 transition duration-500 group-hover:scale-[1.02]"
              />
              <Link to="/shop" className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[2px]">
                <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-black shadow-lg">
                  <Eye size={16} /> Quick View
                </div>
              </Link>
            </div>
            <Badge variant="accent" className="mt-4">
              {piece.category}
            </Badge>
            <h2 className="mt-2 font-display text-xl text-[#000000]">{piece.name}</h2>
            <p className="mt-3 text-sm leading-7 text-[#4c4546]">{piece.description}</p>
          </AnimatedCard>
        ))}
      </section>
    </motion.div>
  )
}

export default CollectionPage
