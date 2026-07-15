import { AnimatedCard, SectionHeader } from '../components/UI/button'
import { TagList } from '../components/UI/card'
import { Badge } from '../components/UI/advanced'

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
      <section className="rounded-[2rem] border border-[#e4e2e2] bg-[#ffffff] p-8 shadow-[0_20px_70px_rgba(27,28,28,0.06)]">
        <SectionHeader
          eyebrow="Collection"
          title="An edit of refined staples for every hour of the day."
          description="The collection is composed of gentle contrasts: black and bone, texture and polish, softness and command."
        />
        <TagList items={['Tailoring', 'Accessories', 'Evening essentials']} className="mt-6" />
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {pieces.map((piece, index) => (
          <AnimatedCard
            key={piece.name}
            delay={index * 0.12}
            className="overflow-hidden rounded-[1.4rem] border border-[#e4e2e2] bg-[#f5f3f3] p-5"
          >
            <img src={piece.image} alt={piece.name} className="h-40 w-full rounded-[1rem] bg-[#ffffff] object-contain p-2" />
            <Badge variant="accent" className="mt-4">{piece.category}</Badge>
            <h2 className="mt-2 font-display text-xl text-[#000000]">{piece.name}</h2>
            <p className="mt-3 text-sm leading-7 text-[#4c4546]">{piece.description}</p>
          </AnimatedCard>
        ))}
      </section>
    </div>
  )
}

export default CollectionPage
