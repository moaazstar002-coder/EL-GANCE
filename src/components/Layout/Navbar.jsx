import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/collection', label: 'Collection' },
  { to: '/shop', label: 'Shop' },
  { to: '/journal', label: 'Journal' },
  { to: '/visit', label: 'Visit' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#e4e2e2]/80 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fbf9f9]/88 shadow-[0_8px_30px_rgba(27,28,28,0.06)] backdrop-blur-xl'
          : 'bg-[#fbf9f9]/80 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 md:px-8 lg:px-12">
        <NavLink
          to="/"
          className="flex flex-col transition duration-300 hover:-translate-y-0.5 hover:text-[#000000]"
        >
          <span className="font-display text-xl font-semibold tracking-[0.24em] text-[#000000]">
            ELEGANCE
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#4c4546] transition duration-300 hover:text-[#735c00]">
            Editorial fashion house
          </span>
        </NavLink>

        <nav className="hidden items-center gap-4 text-sm uppercase tracking-[0.2em] text-[#4c4546] md:flex md:gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-[#000000] underline decoration-[#fed65b] decoration-2 underline-offset-4 transition duration-300'
                  : 'relative transition duration-300 hover:-translate-y-0.5 hover:text-[#000000] after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-[#fed65b] after:transition-all after:duration-300 hover:after:w-full'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/visit"
          className="inline-flex items-center justify-center rounded-full border border-[#cfc4c5] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1b1c1c] transition duration-300 hover:-translate-y-0.5 hover:border-[#735c00] hover:text-[#735c00]"
        >
          Book visit
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar
