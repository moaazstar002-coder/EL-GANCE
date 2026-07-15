import { motion } from 'framer-motion'

export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'border-[#e4e2e2] bg-[#f5f3f3] text-[#4c4546]',
    accent: 'border-[#fed65b] bg-[#fed65b]/20 text-[#735c00]',
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

export function SectionShell({ eyebrow, title, description, children, className = '', tone = 'light' }) {
  const toneStyles = {
    light: 'border-[#e4e2e2] bg-[#ffffff] text-[#1b1c1c]',
    dark: 'border-[#000000] bg-[#000000] text-[#ffffff]',
  }

  return (
    <section
      className={`rounded-[2rem] border p-8 shadow-[0_20px_70px_rgba(27,28,28,0.06)] ${toneStyles[tone] || toneStyles.light} ${className}`.trim()}
    >
      {eyebrow || title || description ? (
        <div className="mb-6">
          {eyebrow ? (
            <p className={`text-sm uppercase tracking-[0.3em] ${tone === 'dark' ? 'text-[#fed65b]' : 'text-[#735c00]'}`}>
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h2 className={`mt-3 font-display text-3xl sm:text-4xl ${tone === 'dark' ? 'text-[#ffffff]' : 'text-[#000000]'}`}>
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className={`mt-4 max-w-2xl text-lg leading-8 ${tone === 'dark' ? 'text-[#e2e2e2]' : 'text-[#4c4546]'}`}>
              {description}
            </p>
          ) : null}
        </div>
      ) : null}
      {children}
    </section>
  )
}

export function InputField({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  helperText,
  textarea = false,
  className = '',
}) {
  const inputClassName =
    `mt-2 w-full rounded-[1rem] border border-[#e4e2e2] bg-[#f8f6f5] px-4 py-3 text-sm text-[#1b1c1c] outline-none transition focus:border-[#735c00] ${className}`.trim()

  return (
    <label className="block text-sm text-[#4c4546]">
      <span className="font-medium uppercase tracking-[0.2em] text-[#735c00]">{label}</span>
      {textarea ? (
        <textarea placeholder={placeholder} value={value} onChange={onChange} rows={4} className={inputClassName} />
      ) : (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={inputClassName} />
      )}
      {helperText ? <span className="mt-2 block text-xs leading-6 text-[#4c4546]">{helperText}</span> : null}
    </label>
  )
}

export function LoadingState({ label = 'Loading content...' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[2rem] border border-[#e4e2e2] bg-[#f8f6f5] p-8 text-center"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-[#735c00]">Please wait</p>
      <p className="mt-3 text-lg text-[#1b1c1c]">{label}</p>
    </motion.div>
  )
}

export function EmptyState({ title, description, action }) {
  return (
    <div className="rounded-[2rem] border border-[#e4e2e2] bg-[#ffffff] p-10 text-center shadow-[0_20px_70px_rgba(27,28,28,0.06)]">
      <p className="text-sm uppercase tracking-[0.3em] text-[#735c00]">No items yet</p>
      <h3 className="mt-3 font-display text-3xl text-[#000000]">{title}</h3>
      <p className="mt-4 text-lg leading-8 text-[#4c4546]">{description}</p>
      {action ? <div className="mt-8">{action}</div> : null}
    </div>
  )
}
