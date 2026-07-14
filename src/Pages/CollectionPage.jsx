const pieces = [
  {
    name: 'The Atelier Blazer',
    category: 'Tailoring',
    description: 'Clean shoulders, soft drape, and a sculpted silhouette.',
    image: '/photo2.jpg',
  },
  {
    name: 'Linen Evening Set',
    category: 'Essentials',
    description: 'Fluid layers in warm ivory and muted stone.',
    image: '/photo3.jpg',
  },
  {
    name: 'Gilded Clutch',
    category: 'Accessories',
    description: 'A polished accent with brushed metallic detailing.',
    image: '/photo4.jpg',
  },
  {
    name: 'Structured Sandal',
    category: 'Footwear',
    description: 'Minimalist form with a grounding, elegant profile.',
    image: '/photo7.jpg',
  },
]

function CollectionPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-[#e4e2e2] bg-[#ffffff] p-8 shadow-[0_20px_70px_rgba(27,28,28,0.06)] opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
        <p className="text-sm uppercase tracking-[0.3em] text-[#735c00]">Collection</p>
        <h1 className="mt-3 font-display text-3xl text-[#000000] sm:text-4xl">
          An edit of refined staples for every hour of the day.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4c4546]">
          The collection is composed of gentle contrasts: black and bone, texture and
          polish, softness and command.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm uppercase tracking-[0.25em] text-[#4c4546]">
          <span className="rounded-full border border-[#e4e2e2] px-4 py-2">Tailoring</span>
          <span className="rounded-full border border-[#e4e2e2] px-4 py-2">Accessories</span>
          <span className="rounded-full border border-[#e4e2e2] px-4 py-2">Evening essentials</span>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {pieces.map((piece, index) => (
          <article
            key={piece.name}
            className="overflow-hidden rounded-[1.4rem] border border-[#e4e2e2] bg-[#f5f3f3] p-5 opacity-0 animate-[fadeIn_0.9s_ease-out_forwards] transition duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(27,28,28,0.08)]"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <img src={piece.image} alt={piece.name} className="h-40 w-full rounded-[1rem] bg-[#ffffff] object-contain p-2" />
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[#735c00]">{piece.category}</p>
            <h2 className="mt-2 font-display text-xl text-[#000000]">{piece.name}</h2>
            <p className="mt-3 text-sm leading-7 text-[#4c4546]">{piece.description}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default CollectionPage
