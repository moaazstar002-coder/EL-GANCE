import { useEffect, useState } from 'react'
import { shopItems } from '../data/shopItems'
import { api } from '../services/api'
import { AnimatedButton, AnimatedCard, SectionHeader } from '../components/UI/button'
import { TagList } from '../components/UI/card'
import { Badge, LoadingState } from '../components/UI/advanced'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Eye } from 'lucide-react'

function normalizeProduct(item) {
  return {
    id: item._id || item.slug,
    title: item.name || item.title,
    description: item.description,
    image: item.images?.[0] || item.image,
    category: item.category || 'Private',
    price: item.price,
    slug: item._id || item.slug,
    accent: item.accent || 'from-[#000000] via-[#4c4546] to-[#fed65b]',
    isNew: item.isNew,
  }
}

function ShopPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let ignore = false

    async function loadProducts() {
      try {
        const data = await api.getProducts({ limit: 40, sort: 'newest' })
        if (!ignore) {
          setProducts(data.products.map(normalizeProduct))
        }
      } catch {
        if (!ignore) {
          setProducts(shopItems.map(normalizeProduct))
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    loadProducts()

    return () => {
      ignore = true
    }
  }, [])

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="space-y-8"
    >
      <Helmet>
        <title>Shop | ELÉGANCE</title>
        <meta name="description" content="Discover the latest pieces from the private edit. Curated to feel timeless and luxurious." />
      </Helmet>
      <section className="grid gap-8 rounded-[2rem] border border-white/40 bg-white/40 backdrop-blur-md p-8 shadow-[0_20px_70px_rgba(27,28,28,0.06)] lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
        <div>
          <SectionHeader
            eyebrow="Shop"
            title="Discover the latest pieces from the private edit."
            description="Each item is curated to feel timeless, tactile, and quietly luxurious."
          />
          <TagList items={['Private preview', 'Limited access', 'By appointment']} className="mt-6" />
        </div>
        <div className="rounded-[1.6rem] border border-white/20 bg-black/90 backdrop-blur-lg p-6 text-[#ffffff] shadow-lg">
          <p className="text-sm uppercase tracking-[0.3em] text-[#fed65b]">Buying guide</p>
          <p className="mt-3 font-display text-2xl">
            Every piece is presented with context, material notes, and a direct route to inquire.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#e2e2e2]">
            Browse the edit, open a detail page, and move through the collection with fewer distractions.
          </p>
        </div>
      </section>

      {loading ? <LoadingState label="Loading the private edit..." /> : null}

      <section className="grid gap-6 md:grid-cols-2">
        {products.map((item, index) => (
          <AnimatedCard
            key={item.id}
            delay={index * 0.12}
            className="group overflow-hidden rounded-[1.8rem] border border-white/50 bg-white/50 backdrop-blur-md shadow-[0_18px_50px_rgba(27,28,28,0.08)] transition-all hover:bg-white/70"
          >
            <div className="relative overflow-hidden rounded-[1.6rem] p-0">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-10`} />
              <div className="absolute left-4 top-4 z-10 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1b1c1c] backdrop-blur">
                {item.isNew ? 'New' : item.category}
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="h-80 w-full bg-[#ffffff] object-contain object-center p-3 transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[2px]">
                <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-black shadow-lg">
                  <Eye size={16} /> Quick View
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-display text-2xl text-[#000000]">{item.title}</p>
                <Badge variant="default">Private</Badge>
              </div>
              <p className="mt-3 text-sm leading-7 text-[#4c4546]">{item.description}</p>
              {item.price ? (
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#735c00]">
                  ${item.price}
                </p>
              ) : null}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <AnimatedButton to={`/shop/${item.slug}`} variant="primary">
                  View piece
                </AnimatedButton>
                <span className="text-xs uppercase tracking-[0.25em] text-[#735c00]">
                  Hand-selected
                </span>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </section>
    </motion.div>
  )
}

export default ShopPage
