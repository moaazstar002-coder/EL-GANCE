import { motion } from 'framer-motion'

export function SectionHeader({ eyebrow, title, description, align = 'left', className = '' }) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`${alignClass} ${className}`.trim()}
    >
      {eyebrow ? <p className="text-sm uppercase tracking-[0.3em] text-[#5c4a00]">{eyebrow}</p> : null}
      {title ? <h2 className="mt-3 font-display text-3xl text-[#000000] sm:text-4xl">{title}</h2> : null}
      {description ? <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4c4546]">{description}</p> : null}
    </motion.div>
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
            <p className={`text-sm uppercase tracking-[0.3em] ${tone === 'dark' ? 'text-[#fed65b]' : 'text-[#5c4a00]'}`}>
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
