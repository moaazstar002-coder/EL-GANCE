import { useParams, Link } from 'react-router-dom'
import { getItemBySlug } from '../data/shopItems'
import { AnimatedButton, AnimatedCard, SectionHeader } from '../components/UI/button'

function ProductDetails() {
  const { slug } = useParams()
  const item = getItemBySlug(slug)

  if (!item) {
    return (
      <div className="rounded-[2rem] border border-[#e4e2e2] bg-[#ffffff] p-10 shadow-[0_20px_70px_rgba(27,28,28,0.06)]">
        <p className="text-sm uppercase tracking-[0.3em] text-[#735c00]">Product not found</p>
        <h1 className="mt-3 font-display text-3xl text-[#000000]">That piece is no longer available.</h1>
        <p className="mt-4 text-lg leading-8 text-[#4c4546]">
          Please return to the shop to explore the current curated edit.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block rounded-full bg-[#000000] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffffff] transition duration-300 hover:bg-[#1b1b1b]"
        >
          Back to shop
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-10">
      <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2rem] overflow-hidden border border-[#e4e2e2] shadow-[0_20px_70px_rgba(27,28,28,0.08)]">
          <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
        </div>

        <AnimatedCard className="space-y-8 rounded-[2rem] border border-[#e4e2e2] bg-[#ffffff] p-10 shadow-[0_20px_70px_rgba(27,28,28,0.06)]">
          <SectionHeader eyebrow="Piece details" title={item.title} description={item.description} className="!space-y-0" />
          <p className="text-base leading-8 text-[#4c4546]">{item.details}</p>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-[#e4e2e2] bg-[#f5f3f3] p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#735c00]">Material</p>
              <p className="mt-3 text-lg text-[#1b1c1c]">Wool blend, silk, and cotton.</p>
            </div>
            <div className="rounded-[1.5rem] border border-[#e4e2e2] bg-[#f5f3f3] p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#735c00]">Care</p>
              <p className="mt-3 text-lg text-[#1b1c1c]">Dry clean only. Handle with care.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <AnimatedButton variant="primary">Inquire now</AnimatedButton>
            <Link
              to="/shop"
              className="text-sm uppercase tracking-[0.2em] text-[#4c4546] transition duration-300 hover:text-[#000000]"
            >
              Back to shop
            </Link>
          </div>
        </AnimatedCard>
      </section>
    </div>
  )
}

export default ProductDetails
