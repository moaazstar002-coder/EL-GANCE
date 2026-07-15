import { shopItems } from '../data/shopItems'
import { AnimatedButton, AnimatedCard, SectionHeader } from '../components/UI/button'
import { TagList } from '../components/UI/card'
import { Badge } from '../components/UI/advanced'

function ShopPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-8 rounded-[2rem] border border-[#e4e2e2] bg-[#ffffff] p-8 shadow-[0_20px_70px_rgba(27,28,28,0.06)] lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
        <div>
          <SectionHeader
            eyebrow="Shop"
            title="Discover the latest pieces from the private edit."
            description="Each item is curated to feel timeless, tactile, and quietly luxurious."
          />
          <TagList items={['Private preview', 'Limited access', 'By appointment']} className="mt-6" />
        </div>
        <div className="rounded-[1.6rem] border border-[#e4e2e2] bg-[linear-gradient(180deg,#111,#2b2b2b)] p-6 text-[#ffffff]">
          <p className="text-sm uppercase tracking-[0.3em] text-[#fed65b]">Buying guide</p>
          <p className="mt-3 font-display text-2xl">
            Every piece is presented with context, material notes, and a direct route to inquire.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#e2e2e2]">
            Browse the edit, open a detail page, and move through the collection with fewer distractions.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {shopItems.map((item, index) => (
          <AnimatedCard
            key={item.slug}
            delay={index * 0.12}
            className="group overflow-hidden rounded-[1.8rem] border border-[#e4e2e2] bg-[#f5f3f3] shadow-[0_18px_50px_rgba(27,28,28,0.08)]"
          >
            <div className="relative overflow-hidden rounded-[1.6rem] p-0">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-10`} />
              <div className="absolute left-4 top-4 z-10 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1b1c1c] backdrop-blur">
                New
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="h-80 w-full bg-[#ffffff] object-contain object-center p-3 transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-display text-2xl text-[#000000]">{item.title}</p>
                <Badge variant="default">Private</Badge>
              </div>
              <p className="mt-3 text-sm leading-7 text-[#4c4546]">{item.description}</p>
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
    </div>
  )
}

export default ShopPage
