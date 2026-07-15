import { Link } from 'react-router-dom'
import { AnimatedButton, AnimatedCard, SectionHeader } from '../components/UI/button'

function NotFound() {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <AnimatedCard className="w-full max-w-3xl rounded-[2rem] border border-[#e4e2e2] bg-[#ffffff] p-8 text-center shadow-[0_20px_70px_rgba(27,28,28,0.06)] md:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#735c00]">404</p>
        <SectionHeader
          align="center"
          title="The page you are looking for could not be found."
          description="It may have moved, been renamed, or never existed. Let us take you back to the curated edit."
          className="mt-3"
        />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <AnimatedButton to="/" variant="primary">
            Go home
          </AnimatedButton>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-full border border-[#cfc4c5] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b1c1c] transition duration-300 hover:border-[#735c00] hover:text-[#735c00]"
          >
            Browse shop
          </Link>
        </div>
      </AnimatedCard>
    </div>
  )
}

export default NotFound
