function VisitPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] border border-[#e4e2e2] bg-[#000000] p-8 text-[#ffffff] shadow-[0_20px_70px_rgba(27,28,28,0.08)] opacity-0 animate-[fadeIn_0.9s_ease-out_forwards]">
        <p className="text-sm uppercase tracking-[0.3em] text-[#fed65b]">Private appointment</p>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl">
          Book a personal styling session at the studio.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#e2e2e2]">
          Discover the collection in person, guided by a dedicated stylist and tailored to your wardrobe needs.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.85fr] items-center">
          <div className="space-y-6">
            <div className="rounded-[1.7rem] border border-[#ffffff]/10 bg-white/5 p-7 shadow-[0_18px_40px_rgba(255,255,255,0.07)]">
              <p className="text-sm uppercase tracking-[0.25em] text-[#fed65b]">Studio hours</p>
              <p className="mt-3 text-lg leading-8 text-[#f5f3f3]">Monday to Saturday · 10:00 to 19:00</p>
            </div>

            <div className="rounded-[1.7rem] border border-[#e4e2e2] bg-[#ffffff] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(27,28,28,0.06)]">
              <p className="text-sm uppercase tracking-[0.25em] text-[#735c00]">Reservation</p>
              <p className="mt-3 text-lg leading-8 text-[#1b1c1c]">
                Reserve your appointment via email or through our private concierge.
              </p>
              <p className="mt-5 text-sm uppercase tracking-[0.3em] text-[#735c00]">Email</p>
              <p className="mt-2 text-lg font-medium text-[#000000]">bookings@eleganceatelier.com</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[#e4e2e2] bg-[#f5f3f3]">
            <img src="/photo7.jpg" alt="Studio interior" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[1.4rem] bg-[#ffffff]/90 p-5 text-[#1b1c1c] shadow-lg backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#735c00]">Studio</p>
              <p className="mt-2 text-lg font-semibold">A calm space to explore texture, proportion, and quiet details.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VisitPage
