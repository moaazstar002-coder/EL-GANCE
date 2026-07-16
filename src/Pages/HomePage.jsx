import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { AnimatedButton, AnimatedCard } from '../components/UI/button'
import { Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

const highlights = [
  {
    title: 'Curated essentials',
    description: 'Quiet luxury pieces designed for everyday rituals.',
  },
  {
    title: 'Hand-finished details',
    description: 'Every silhouette is shaped with soft structure and balance.',
  },
  {
    title: 'Limited seasonal drop',
    description: 'A fresh edit of tailoring, accessories, and statement layers.',
  },
]

const featuredPieces = [
  {
    name: 'Signature Tote',
    detail: 'Italian leather - soft gold hardware',
    price: '$980',
  },
  {
    name: 'Tailored Coat',
    detail: 'Structured wool - satin lining',
    price: '$1,240',
  },
  {
    name: 'Sculptural Heel',
    detail: 'Minimalist form - midnight finish',
    price: '$720',
  },
]

function HomePage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="space-y-8"
    >
      <Helmet>
        <title>ELÉGANCE | Quiet Luxury</title>
        <meta name="description" content="Discover a refined wardrobe of tailored layers, sculptural accessories, and softly structured essentials." />
      </Helmet>
      <section className="grid gap-8 rounded-[2rem] border border-white/40 bg-white/40 backdrop-blur-md p-6 shadow-[0_20px_80px_rgba(27,28,28,0.06)] opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
        <div className="flex flex-col justify-between">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-[#735c00]">
              New season - 2026 edit
            </p>
            <h1 className="font-display text-4xl leading-tight text-[#000000] sm:text-5xl lg:text-6xl">
              Quiet luxury, shaped for modern rituals.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-[#4c4546]">
              Discover a refined wardrobe of tailored layers, sculptural accessories,
              and softly structured essentials inspired by the ELEGANCE studio.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <AnimatedButton to="/collection" variant="primary">
              Shop collection
            </AnimatedButton>
            <AnimatedButton to="/journal" variant="secondary">
              Read journal
            </AnimatedButton>
            <AnimatedButton to="/visit" variant="ghost">
              Book visit
            </AnimatedButton>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/50 bg-white/30 backdrop-blur-sm p-4">
          <div className="absolute right-4 top-4 h-24 w-24 rounded-full bg-[#fed65b]/70 blur-3xl" />
          <div className="absolute bottom-6 left-6 h-28 w-28 rounded-full bg-[#dbdad9] blur-2xl" />
          <div className="relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[1.4rem] border border-white/80 bg-gradient-to-br from-[#fdfcfb] to-[#efeded] p-6">
            <img
              src="/images/products/product-1.jpg"
              alt="Editorial fashion portrait"
              className="absolute inset-0 h-full w-full object-contain object-center p-3"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.3em] text-[#fed65b]">Atelier note</p>
              <p className="mt-4 max-w-sm font-display text-3xl leading-snug text-[#ffffff]">
                A study in balance: rich texture, soft structure, and calm presence.
              </p>
            </div>
            <div className="relative rounded-[1.2rem] border border-white/30 bg-white/60 p-4 shadow-sm backdrop-blur-md">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-[#4c4546]">
                <span>Private preview</span>
                <span className="rounded-full bg-[#fed65b] px-3 py-1 text-[#745c00]">
                  Limited
                </span>
              </div>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="font-display text-2xl text-[#000000]">Soft structure</p>
                  <p className="mt-1 text-sm text-[#4c4546]">Signature capsule - 12 pieces</p>
                </div>
                <div className="h-16 w-16 rounded-full border border-[#000000]" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {highlights.map((item, index) => (
          <AnimatedCard
            key={item.title}
            delay={index * 0.12}
            className="rounded-[1.3rem] border border-white/40 bg-white/40 backdrop-blur-md p-6 shadow-sm transition-colors hover:bg-white/60"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#735c00]">0{index + 1}</p>
            <p className="mt-3 font-display text-xl text-[#000000]">{item.title}</p>
            <p className="mt-3 text-sm leading-7 text-[#4c4546]">{item.description}</p>
          </AnimatedCard>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[1.8rem] border border-white/10 bg-black/90 backdrop-blur-lg p-8 text-[#ffffff] shadow-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#fed65b]">Foundations</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">
            Built around calm, confident dressing.
          </h2>
          <p className="mt-4 max-w-md text-base leading-8 text-[#e2e2e2]">
            The collection balances cream neutrals, rich gold accents, and polished
            black forms to create a refined wardrobe experience.
          </p>
          <div className="mt-8 rounded-[1.2rem] border border-white/20 bg-white/10 backdrop-blur-md p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-[#cfc4c5]">Editorial note</p>
            <p className="mt-3 text-lg leading-8 text-[#f8f6f6]">Less noise, more presence.</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {featuredPieces.map((piece, index) => (
            <AnimatedCard
              key={piece.name}
              delay={index * 0.12}
              className="rounded-[1.4rem] border border-white/50 bg-white/50 backdrop-blur-md p-5 shadow-sm transition-all hover:shadow-md hover:bg-white/70"
            >
              <div className="relative overflow-hidden rounded-[1rem] group">
                <img
                  src={`/images/products/product-${index + 2}.jpg`}
                  alt={piece.name}
                  className="h-32 w-full bg-[#f8f6f6] object-contain p-2 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <Link to="/shop" className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[2px]">
                  <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-black shadow-lg">
                    <Eye size={16} /> Quick View
                  </div>
                </Link>
              </div>
              <p className="mt-5 font-display text-xl text-[#000000]">{piece.name}</p>
              <p className="mt-2 text-sm leading-7 text-[#4c4546]">{piece.detail}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#735c00]">
                  {piece.price}
                </span>
                <Link to="/shop" className="rounded-full border border-[#cfc4c5] px-3 py-2 text-sm text-[#1b1c1c] transition duration-300 hover:-translate-y-0.5 hover:border-[#735c00] hover:text-[#735c00]">
                  View
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

export default HomePage
