import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/collection', label: 'Collection' },
  { to: '/shop', label: 'Shop' },
  { to: '/journal', label: 'Journal' },
  { to: '/visit', label: 'Visit' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b border-white/20 transition-all duration-300 ${
          scrolled
            ? 'bg-white/60 shadow-[0_8px_30px_rgba(27,28,28,0.06)] backdrop-blur-xl'
            : 'bg-white/40 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 md:px-8 lg:px-12">
          <NavLink
            to="/"
            onClick={() => setMobileMenuOpen(false)}
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

          <div className="flex items-center gap-4">
            <NavLink
              to="/visit"
              className="hidden items-center justify-center rounded-full border border-[#cfc4c5] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1b1c1c] transition duration-300 hover:-translate-y-0.5 hover:border-[#735c00] hover:text-[#735c00] md:inline-flex"
            >
              Book visit
            </NavLink>
            <button
              className="md:hidden p-2 text-[#1b1c1c]"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-white/95 backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between px-5 py-6">
              <span className="font-display text-xl font-semibold tracking-[0.24em] text-[#000000]">
                ELEGANCE
              </span>
              <button
                className="p-2 text-[#1b1c1c]"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-1 flex-col items-center justify-center gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-3xl font-display uppercase tracking-widest ${
                        isActive ? 'text-[#fed65b]' : 'text-[#000000]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + links.length * 0.1 }}
                className="mt-8"
              >
                <NavLink
                  to="/visit"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-[#000000] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffffff] transition duration-300 hover:bg-[#1b1c1c]"
                >
                  Book visit
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
