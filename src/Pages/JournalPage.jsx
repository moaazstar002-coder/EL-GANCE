import { AnimatedCard, SectionHeader } from '../components/UI/button'
import { InfoPanel } from '../components/UI/card'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const stories = [
  {
    title: 'Texture is the new statement',
    body: 'Brushed wool, smooth leather, and polished metal come together to create calm luxury.',
  },
  {
    title: 'The power of a neutral palette',
    body: 'Black, ivory, and warm gold form a restrained language of elegance and confidence.',
  },
  {
    title: 'Quiet accessories, louder presence',
    body: 'A single sculptural detail can elevate a complete look without adding noise.',
  },
]

function JournalPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="space-y-10"
    >
      <Helmet>
        <title>Journal | ELÉGANCE</title>
        <meta name="description" content="A journal of thoughtful styling, polished essentials, and the calm confidence of modern luxury." />
      </Helmet>
      <section className="rounded-[2rem] border border-white/40 bg-white/40 backdrop-blur-md p-8 shadow-[0_20px_70px_rgba(27,28,28,0.06)]">
        <SectionHeader
          eyebrow="Journal"
          title="The art of dressing with restraint."
          description="A journal of thoughtful styling, polished essentials, and the calm confidence of modern luxury."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_0.9fr]">
          <div className="grid gap-6">
            {stories.map((story, index) => (
              <AnimatedCard
                key={story.title}
                delay={index * 0.08}
                className="rounded-[1.7rem] border border-white/50 bg-white/50 backdrop-blur-sm p-7 shadow-sm transition-colors hover:bg-white/70"
              >
                <p className="font-display text-xl text-[#000000]">{story.title}</p>
                <p className="mt-4 text-sm leading-7 text-[#4c4546]">{story.body}</p>
              </AnimatedCard>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#1b1c1c]">
            <img
              src="/images/products/product-6.jpg"
              alt="Editorial silhouette"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <InfoPanel
                eyebrow="Editorial"
                title="Quiet moments in a wardrobe built around ease and enduring form."
                tone="dark"
                className="border-white/10 bg-white/10 p-6 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default JournalPage
