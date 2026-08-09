import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getItemBySlug } from '../data/shopItems'
import { api } from '../services/api'
import { AnimatedButton } from '../components/ui/button'
import { AnimatedCard } from '../components/ui/card'
import { SectionHeader } from '../components/ui/section'
import { EmptyState, LoadingState } from '../components/ui/feedback'
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
    images: Array.isArray(item.images) ? item.images : item.image ? [item.image] : [],
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
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [activeImage, setActiveImage] = useState('')
  const { addToCart } = useCart()

  useEffect(() => {
    let ignore = false

    async function loadProduct() {
      try {
        const product = await api.getProductById(slug)
        if (!ignore) {
          const normalized = normalizeProduct(product)
          setItem(normalized)
          setSelectedSize(normalized?.sizes?.[0] || '')
          setSelectedColor(normalized?.colors?.[0]?.name || '')
          const imageList = normalizeProduct(product)?.image ? [normalizeProduct(product)?.image, ...(normalized.images || [])] : []
          setActiveImage(imageList[0] || '')
        }
      } catch {
        if (!ignore) {
          const normalized = normalizeProduct(getItemBySlug(slug))
          setItem(normalized)
          setSelectedSize(normalized?.sizes?.[0] || '')
          setSelectedColor(normalized?.colors?.[0]?.name || '')
          const imageList = normalized?.image ? [normalized.image, ...(normalized.images || [])] : []
          setActiveImage(imageList[0] || '')
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

  useEffect(() => {
    if (!item) return

    const gallery = item.images?.length ? item.images : [item.image]
    setActiveImage((current) => current || gallery[0])
  }, [item])

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
          <div className="relative">
            <img src={activeImage || item.image} alt={item.title} className="relative h-full w-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-3 p-4">
            {(item.images?.length ? item.images : [item.image]).map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveImage(image)}
                className={`overflow-hidden rounded-xl border p-1 ${activeImage === image ? 'border-[#5c4a00]' : 'border-[#e4e2e2]'}`}
              >
                <img src={image} alt={`${item.title} gallery ${index + 1}`} className="h-20 w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <AnimatedCard className="space-y-8 rounded-[2rem] border border-white/50 bg-white/60 backdrop-blur-lg p-10 shadow-[0_20px_70px_rgba(27,28,28,0.06)]">
          <SectionHeader
            eyebrow="Piece details"
            title={item.title}
            description={item.description}
            className="!space-y-0"
          />
          <p className="text-base leading-8 text-[#4c4546]">{item.details}</p>

          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#5c4a00]">Choose your size</p>
            <div className="flex flex-wrap gap-3">
              {item.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-full border px-4 py-2 text-sm uppercase tracking-[0.2em] transition ${selectedSize === size ? 'border-[#1b1c1c] bg-[#1b1c1c] text-[#ffffff]' : 'border-[#e4e2e2] text-[#4c4546] hover:border-[#5c4a00]'}`}
                  aria-pressed={selectedSize === size}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#5c4a00]">Choose your finish</p>
            <div className="flex flex-wrap gap-3">
              {item.colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedColor(color.name)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${selectedColor === color.name ? 'border-[#1b1c1c] bg-[#1b1c1c] text-[#ffffff]' : 'border-[#e4e2e2] text-[#4c4546] hover:border-[#5c4a00]'}`}
                  aria-pressed={selectedColor === color.name}
                >
                  <span className="h-3 w-3 rounded-full border border-black/10" style={{ backgroundColor: color.hex || color.name }} />
                  {color.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/40 bg-white/40 backdrop-blur-md p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#5c4a00]">Price</p>
              <p className="mt-3 text-lg text-[#1b1c1c]">
                {item.price ? `$${item.price}` : 'Available on request'}
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/40 bg-white/40 backdrop-blur-md p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#5c4a00]">Stock</p>
              <p className="mt-3 text-lg text-[#1b1c1c]">
                {typeof item.stock === 'number' ? `${item.stock} pieces` : 'Limited availability'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <AnimatedButton
              variant="primary"
              onClick={() => addToCart(item, 1, { size: selectedSize, color: selectedColor })}
            >
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
            <p className="text-sm uppercase tracking-[0.25em] text-[#5c4a00]">Delivery notes</p>
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
