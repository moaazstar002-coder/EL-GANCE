import { motion } from 'framer-motion'

export function LoadingState({ label = 'Loading content...' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[2rem] border border-[#e4e2e2] bg-[#f8f6f5] p-8 text-center"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-[#5c4a00]">Please wait</p>
      <p className="mt-3 text-lg text-[#1b1c1c]">{label}</p>
    </motion.div>
  )
}

export function EmptyState({ title, description, action }) {
  return (
    <div className="rounded-[2rem] border border-[#e4e2e2] bg-[#ffffff] p-10 text-center shadow-[0_20px_70px_rgba(27,28,28,0.06)]">
      <p className="text-sm uppercase tracking-[0.3em] text-[#5c4a00]">No items yet</p>
      <h3 className="mt-3 font-display text-3xl text-[#000000]">{title}</h3>
      <p className="mt-4 text-lg leading-8 text-[#4c4546]">{description}</p>
      {action ? <div className="mt-8">{action}</div> : null}
    </div>
  )
}
