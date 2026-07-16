import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getItemBySlug } from '../data/shopItems'
import { api } from '../services/api'
import { AnimatedButton, AnimatedCard, SectionHeader } from '../components/UI/button'
import { EmptyState, LoadingState } from '../components/UI/advanced'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useCart } from '../context/CartContext'

function normalizeProduct(item) {
  if (!item) return null

  return {
    id: item._id || item.slug,
    slug: item._id || item.slug,
    title: item.name || item.title,
    description: item.description,
    details: item.details || item.description,
    image: item.images?.[0] || item.image,
    price: item.price,
    sizes: item.sizes || [],
    colors: item.colors || [],
    stock: item.stock,
    discount: item.discount || 0,
    accent: item.accent || 'from-[#000000] via-[#4c4546] to-[#fed65b]',
  }
}

function ProductDetails() {
  const { slug } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const { addToCart } = useCart()

  useEffect(() => {
    let ignore = false

    async function loadProduct() {
      try {
        const product = await api.getProductById(slug)
        if (!ignore) {
          setItem(normalizeProduct(product))
        }
      } catch {
        if (!ignore) {
          setItem(normalizeProduct(getItemBySlug(slug)))
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    loadProduct()

    return () => {
      ignore = true
    }
  }, [slug])

  if (loading) {
    return <LoadingState label="Loading product details..." />
  }

  if (!item) {
    return (
      <EmptyState
        title="That piece is no longer available."
        description="Please return to the shop to explore the current curated edit."
        action={
          <Link
            to="/shop"
            className="inline-flex rounded-full bg-[#000000] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffffff] transition duration-300 hover:bg-[#1b1b1b]"
          >
            Back to shop
          </Link>
        }
      />
    )
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="space-y-10"
    >
      <Helmet>
        <title>{item.title} | ELÉGANCE</title>
        <meta name="description" content={item.description} />
      </Helmet>
      <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/40 backdrop-blur-md shadow-[0_20px_70px_rgba(27,28,28,0.08)]">
          <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-15`} />
          <div className="absolute left-6 top-6 z-10 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1b1c1c] backdrop-blur">
            Signature piece
          </div>
          <img src={item.image} alt={item.title} className="relative h-full w-full object-cover" />
        </div>

        <AnimatedCard className="space-y-8 rounded-[2rem] border border-white/50 bg-white/60 backdrop-blur-lg p-10 shadow-[0_20px_70px_rgba(27,28,28,0.06)]">
          <SectionHeader
            eyebrow="Piece details"
            title={item.title}
            description={item.description}
            className="!space-y-0"
          />
          <p className="text-base leading-8 text-[#4c4546]">{item.details}</p>

          <div className="flex flex-wrap gap-3">
            {item.sizes.map((size) => (
              <span
                key={size}
                className="rounded-full border border-[#e4e2e2] px-4 py-2 text-sm uppercase tracking-[0.2em] text-[#4c4546]"
              >
                {size}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {item.colors.map((color) => (
              <span
                key={color.name}
                className="inline-flex items-center gap-2 rounded-full border border-[#e4e2e2] px-4 py-2 text-sm text-[#4c4546]"
              >
                <span className="h-3 w-3 rounded-full border border-black/10" style={{ backgroundColor: color.hex }} />
                {color.name}
              </span>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/40 bg-white/40 backdrop-blur-md p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#735c00]">Price</p>
              <p className="mt-3 text-lg text-[#1b1c1c]">
                {item.price ? `$${item.price}` : 'Available on request'}
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/40 bg-white/40 backdrop-blur-md p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#735c00]">Stock</p>
              <p className="mt-3 text-lg text-[#1b1c1c]">
                {typeof item.stock === 'number' ? `${item.stock} pieces` : 'Limited availability'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <AnimatedButton variant="primary" onClick={() => addToCart(item)}>
              Add to bag
            </AnimatedButton>
            <Link
              to="/shop"
              className="text-sm uppercase tracking-[0.2em] text-[#4c4546] transition duration-300 hover:text-[#000000]"
            >
              Back to shop
            </Link>
          </div>

          <div className="rounded-[1.5rem] border border-white/30 bg-white/30 backdrop-blur-sm p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-[#735c00]">Delivery notes</p>
            <p className="mt-3 text-sm leading-7 text-[#4c4546]">
              Private purchases are handled by appointment. We recommend pairing this piece with the studio edit for a complete look.
            </p>
          </div>
        </AnimatedCard>
      </section>
    </motion.div>
  )
}

export default ProductDetails
