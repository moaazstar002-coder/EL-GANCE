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
    <div className="space-y-10">
      <section className="rounded-[2rem] border border-[#e4e2e2] bg-[#ffffff] p-8 shadow-[0_20px_70px_rgba(27,28,28,0.06)] opacity-0 animate-[fadeIn_0.9s_ease-out_forwards]">
        <p className="text-sm uppercase tracking-[0.3em] text-[#735c00]">Journal</p>
        <h1 className="mt-3 font-display text-3xl text-[#000000] sm:text-4xl">
          The art of dressing with restraint.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4c4546]">
          A journal of thoughtful styling, polished essentials, and the calm confidence of modern luxury.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_0.9fr]">
          <div className="grid gap-6">
            {stories.map((story, index) => (
              <article
                key={story.title}
                className="rounded-[1.7rem] border border-[#e4e2e2] bg-[#f8f6f5] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(27,28,28,0.07)]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <p className="font-display text-xl text-[#000000]">{story.title}</p>
                <p className="mt-4 text-sm leading-7 text-[#4c4546]">{story.body}</p>
              </article>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#1b1c1c]">
            <img
              src="/photo6.jpg"
              alt="Editorial silhouette"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[1.4rem] border border-white/10 bg-white/10 p-6 backdrop-blur-sm text-white shadow-lg">
              <p className="text-sm uppercase tracking-[0.3em] text-[#fed65b]">Editorial</p>
              <p className="mt-3 text-xl font-semibold leading-8">
                Quiet moments in a wardrobe built around ease and enduring form.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JournalPage
