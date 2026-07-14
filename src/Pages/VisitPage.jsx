function VisitPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-[#e4e2e2] bg-[#000000] p-8 text-[#ffffff] shadow-sm">
        <p className="text-sm uppercase tracking-[0.3em] text-[#fed65b]">Private appointment</p>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl">
          Book a personal styling session at the studio.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#e2e2e2]">
          Discover the collection in person, guided by a dedicated stylist and tailored to your wardrobe needs.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[1.4rem] border border-[#e4e2e2] bg-[#ffffff] p-6">
          <p className="text-sm uppercase tracking-[0.25em] text-[#735c00]">Studio hours</p>
          <p className="mt-3 text-lg leading-8 text-[#1b1c1c]">Monday to Saturday · 10:00 to 19:00</p>
        </div>
        <div className="rounded-[1.4rem] border border-[#e4e2e2] bg-[#f5f3f3] p-6">
          <p className="text-sm uppercase tracking-[0.25em] text-[#735c00]">Reservation</p>
          <p className="mt-3 text-lg leading-8 text-[#1b1c1c]">Reserve your appointment via email or through our private concierge.</p>
        </div>
      </section>
    </div>
  )
}

export default VisitPage
