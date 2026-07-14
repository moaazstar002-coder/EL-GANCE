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
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-[#e4e2e2] bg-[#ffffff] p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.3em] text-[#735c00]">Journal</p>
        <h1 className="mt-3 font-display text-3xl text-[#000000] sm:text-4xl">
          The art of dressing with restraint.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4c4546]">
          A journal of thoughtful styling, polished essentials, and the calm confidence of modern luxury.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {stories.map((story) => (
          <article key={story.title} className="rounded-[1.4rem] border border-[#e4e2e2] bg-[#f5f3f3] p-6">
            <p className="font-display text-xl text-[#000000]">{story.title}</p>
            <p className="mt-3 text-sm leading-7 text-[#4c4546]">{story.body}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default JournalPage
