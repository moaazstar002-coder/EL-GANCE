export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'border-[#e4e2e2] bg-[#f5f3f3] text-[#4c4546]',
    accent: 'border-[#fed65b] bg-[#fed65b]/20 text-[#5c4a00]',
    dark: 'border-white/10 bg-white/10 text-[#f8f6f6]',
    solid: 'border-[#000000] bg-[#000000] text-[#ffffff]',
  }

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${
        variants[variant] || variants.default
      } ${className}`.trim()}
    >
      {children}
    </span>
  )
}

