import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { shopItems } from '../data/shopItems'
import { api } from '../services/api'
import { AnimatedButton } from '../components/ui/button'
import { AnimatedCard, TagList } from '../components/ui/card'
import { SectionHeader } from '../components/ui/section'
import { Badge } from '../components/ui/advanced'
import { LoadingState, EmptyState } from '../components/ui/feedback'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Eye, X } from 'lucide-react'
import SearchBar from '../feature/products/SearchBar'
import Sort from '../feature/products/Sort'
import Filter from '../feature/products/Filter'
import useProductFilter from '../feature/products/useProductFilter'

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
  const [quickViewProduct, setQuickViewProduct] = useState(null)

  const {
    search,
    setSearch,
    sort,
    setSort,
    category,
    setCategory,
    categories,
    filteredProducts,
  } = useProductFilter(products)

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

      {!loading && products.length === 0 ? (
        <EmptyState
          title="No pieces available"
          description="We are currently updating our private collection. Please check back shortly."
        />
      ) : null}

      {!loading && products.length > 0 ? (
        <section className="rounded-[2rem] border border-white/50 bg-white/55 p-6 shadow-[0_12px_36px_rgba(27,28,28,0.05)]">
          <div className="grid gap-4 lg:grid-cols-[minmax(280px,1fr)_auto_auto] lg:items-end">
            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.28em] text-[#5c4a00]">
                Search the edit
              </label>
              <SearchBar value={search} onChange={setSearch} placeholder="Search by piece or mood..." />
            </div>
            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.28em] text-[#5c4a00]">
                Sort by
              </label>
              <Sort value={sort} onChange={setSort} />
            </div>
            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.28em] text-[#5c4a00]">
                Categories
              </label>
              <Filter categories={categories} activeCategory={category} onChangeCategory={setCategory} />
            </div>
          </div>
        </section>
      ) : null}

      <section className="grid gap-6 md:grid-cols-2">
        {filteredProducts.map((item, index) => (
          <AnimatedCard
            key={item.id}
            delay={Math.min(index * 0.08, 0.4)}
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
                loading="lazy"
                className="h-80 w-full bg-[#ffffff] object-contain object-center p-3 transition duration-700 group-hover:scale-105"
              />
              <button
                type="button"
                onClick={() => setQuickViewProduct(item)}
                className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[2px]"
                aria-label={`Quick view ${item.title}`}
              >
                <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-black shadow-lg">
                  <Eye size={16} /> Quick View
                </div>
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-display text-2xl text-[#000000]">{item.title}</p>
                <Badge variant="default">Private</Badge>
              </div>
              <p className="mt-3 text-sm leading-7 text-[#4c4546]">{item.description}</p>
              {item.price ? (
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#5c4a00]">
                  ${item.price}
                </p>
              ) : null}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <AnimatedButton to={`/shop/${item.slug}`} variant="primary">
                  View piece
                </AnimatedButton>
                <span className="text-xs uppercase tracking-[0.25em] text-[#5c4a00]">
                  Hand-selected
                </span>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </section>

      {!loading && filteredProducts.length === 0 && products.length > 0 ? (
        <EmptyState
          title="No matching pieces"
          description="Try adjusting your search or category filter to reopen the private edit."
        />
      ) : null}

      <AnimatePresence>
        {quickViewProduct ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setQuickViewProduct(null)}
          >
            <motion.article
              initial={{ y: 20, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/50 bg-[#fdfbf7] shadow-2xl"
            >
              <button
                type="button"
                aria-label="Close quick view"
                onClick={() => setQuickViewProduct(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-[#1b1c1c] shadow-md transition hover:bg-[#fed65b]"
              >
                <X size={16} />
              </button>
              <div className="grid md:grid-cols-[0.88fr_1fr]">
                <div className="bg-white p-5">
                  <img src={quickViewProduct.image} alt={quickViewProduct.title} className="h-full min-h-72 w-full object-cover object-center" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#5c4a00]">Private preview</p>
                    <Badge variant="default">{quickViewProduct.isNew ? 'New' : quickViewProduct.category}</Badge>
                  </div>
                  <h3 className="mt-4 font-display text-4xl leading-none text-[#000000]">{quickViewProduct.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-[#4c4546]">{quickViewProduct.description}</p>
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.3em] text-[#5c4a00]">
                    {quickViewProduct.price ? `$${quickViewProduct.price}` : 'Private inquiry'}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <AnimatedButton to={`/shop/${quickViewProduct.slug}`} variant="primary">
                      View piece
                    </AnimatedButton>
                    <AnimatedButton variant="secondary" onClick={() => setQuickViewProduct(null)}>
                      Continue browsing
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  )
}

export default ShopPage
