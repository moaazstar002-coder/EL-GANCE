import { Link } from 'react-router-dom'
import { shopItems } from '../data/shopItems'

function ShopPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-[#e4e2e2] bg-[#ffffff] p-8 shadow-[0_20px_70px_rgba(27,28,28,0.06)] opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
        <p className="text-sm uppercase tracking-[0.3em] text-[#735c00]">Shop</p>
        <h1 className="mt-3 font-display text-3xl text-[#000000] sm:text-4xl">
          Discover the latest pieces from the private edit.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4c4546]">
          Each item is curated to feel timeless, tactile, and quietly luxurious.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm uppercase tracking-[0.25em] text-[#4c4546]">
          <span className="rounded-full border border-[#e4e2e2] px-4 py-2">Private preview</span>
          <span className="rounded-full border border-[#e4e2e2] px-4 py-2">Limited access</span>
          <span className="rounded-full border border-[#e4e2e2] px-4 py-2">By appointment</span>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {shopItems.map((item, index) => (
          <article
            key={item.slug}
            className="group overflow-hidden rounded-[1.8rem] border border-[#e4e2e2] bg-[#f5f3f3] shadow-[0_18px_50px_rgba(27,28,28,0.08)] opacity-0 animate-[fadeIn_0.9s_ease-out_forwards] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(27,28,28,0.12)]"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="relative overflow-hidden rounded-[1.6rem] p-0">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-10`} />
              <img
                src={item.image}
                alt={item.title}
                className="h-80 w-full bg-[#ffffff] object-contain object-center p-3 transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="font-display text-2xl text-[#000000]">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-[#4c4546]">{item.description}</p>
              <Link
                to={`/shop/${item.slug}`}
                className="mt-5 inline-flex rounded-full bg-[#000000] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffffff] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1b1b1b]"
              >
                View piece
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default ShopPage
