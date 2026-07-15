function Footer() {
  return (
    <footer className="border-t border-[#e4e2e2] bg-[#ffffff]/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-[#4c4546] md:flex-row md:items-center md:justify-between md:px-8 lg:px-12">
        <p>Copyright 2026 ELEGANCE. Quiet luxury for modern living.</p>
        <div className="flex flex-wrap gap-4 uppercase tracking-[0.2em]">
          <a href="mailto:atelier@elegance.com" className="transition hover:text-[#000000]">
            Contact
          </a>
          <a href="/visit" className="transition hover:text-[#000000]">
            Book visit
          </a>
          <a href="/shop" className="transition hover:text-[#000000]">
            Private edit
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
