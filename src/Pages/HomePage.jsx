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
    detail: 'Italian leather • Soft gold hardware',
    price: '$980',
  },
  {
    name: 'Tailored Coat',
    detail: 'Structured wool • Satin lining',
    price: '$1,240',
  },
  {
    name: 'Sculptural Heel',
    detail: 'Minimalist form • Midnight finish',
    price: '$720',
  },
]

function HomePage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-8 rounded-[2rem] border border-[#e4e2e2] bg-white/70 p-6 shadow-[0_20px_80px_rgba(27,28,28,0.06)] opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <div className="flex flex-col justify-between">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-[#735c00]">
              New season · 2026 edit
            </p>
            <h1 className="font-display text-4xl leading-tight text-[#000000] sm:text-5xl lg:text-6xl">
              Quiet luxury, shaped for modern rituals.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-[#4c4546]">
              Discover a refined wardrobe of tailored layers, sculptural accessories,
              and softly structured essentials inspired by the ELÉGANCE studio.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/collection"
              className="rounded-full bg-[#000000] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffffff] transition hover:bg-[#1b1b1b]"
            >
              Shop collection
            </a>
            <a
              href="/journal"
              className="rounded-full border border-[#cfc4c5] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b1c1c] transition hover:border-[#735c00] hover:text-[#735c00]"
            >
              Read journal
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] border border-[#e4e2e2] bg-[#f5f3f3] p-6">
          <div className="absolute right-4 top-4 h-24 w-24 rounded-full bg-[#fed65b]/70 blur-3xl" />
          <div className="absolute bottom-6 left-6 h-28 w-28 rounded-full bg-[#dbdad9] blur-2xl" />
          <div className="relative flex h-full min-h-[360px] flex-col justify-between overflow-hidden rounded-[1.4rem] border border-white/80 bg-gradient-to-br from-[#fdfcfb] to-[#efeded] p-6">
            <img
              src="/photo1.jpg"
              alt="Editorial fashion portrait"
              className="absolute inset-0 h-full w-full bg-[#f5f3f3] object-contain object-center p-3"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.3em] text-[#fed65b]">Atelier note</p>
              <p className="mt-4 max-w-sm font-display text-3xl leading-snug text-[#ffffff]">
                A study in balance: rich texture, soft structure, and calm presence.
              </p>
            </div>
            <div className="relative rounded-[1.2rem] border border-white/20 bg-white/85 p-4 shadow-sm backdrop-blur">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-[#4c4546]">
                <span>Private preview</span>
                <span className="rounded-full bg-[#fed65b] px-3 py-1 text-[#745c00]">
                  Limited
                </span>
              </div>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="font-display text-2xl text-[#000000]">Soft structure</p>
                  <p className="mt-1 text-sm text-[#4c4546]">Signature capsule • 12 pieces</p>
                </div>
                <div className="h-16 w-16 rounded-full border border-[#000000]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {highlights.map((item, index) => (
          <article
            key={item.title}
            className="rounded-[1.3rem] border border-[#e4e2e2] bg-[#f5f3f3] p-6 opacity-0 animate-[fadeIn_0.9s_ease-out_forwards] transition duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(27,28,28,0.08)]"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#735c00]">0{index + 1}</p>
            <p className="mt-3 font-display text-xl text-[#000000]">{item.title}</p>
            <p className="mt-3 text-sm leading-7 text-[#4c4546]">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[1.8rem] border border-[#e4e2e2] bg-[#000000] p-8 text-[#ffffff]">
          <p className="text-sm uppercase tracking-[0.3em] text-[#fed65b]">Foundations</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">
            Built around calm, confident dressing.
          </h2>
          <p className="mt-4 max-w-md text-base leading-8 text-[#e2e2e2]">
            The collection balances cream neutrals, rich gold accents, and polished
            black forms to create a refined wardrobe experience.
          </p>
          <div className="mt-8 rounded-[1.2rem] border border-white/10 bg-white/10 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-[#cfc4c5]">Editorial note</p>
            <p className="mt-3 text-lg leading-8 text-[#f8f6f6]">“Less noise, more presence.”</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {featuredPieces.map((piece, index) => (
            <article
              key={piece.name}
              className="rounded-[1.4rem] border border-[#e4e2e2] bg-[#ffffff] p-5 shadow-sm opacity-0 animate-[fadeIn_0.9s_ease-out_forwards] transition duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(27,28,28,0.1)]"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="relative overflow-hidden rounded-[1rem]">
                <img
                  src={`/photo${index + 2}.jpg`}
                  alt={piece.name}
                  className="h-32 w-full bg-[#f8f6f6] object-contain p-2 transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <p className="mt-5 font-display text-xl text-[#000000]">{piece.name}</p>
              <p className="mt-2 text-sm leading-7 text-[#4c4546]">{piece.detail}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#735c00]">
                  {piece.price}
                </span>
                <button className="rounded-full border border-[#cfc4c5] px-3 py-2 text-sm text-[#1b1c1c] transition duration-300 hover:-translate-y-0.5 hover:border-[#735c00] hover:text-[#735c00]">
                  View
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
