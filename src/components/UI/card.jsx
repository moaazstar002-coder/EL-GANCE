import { AnimatedCard } from './button'

export function TagList({ items, className = '', itemClassName = '' }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`.trim()}>
      {items.map((item) => (
        <span
          key={item}
          className={`rounded-full border border-[#e4e2e2] px-4 py-2 text-sm uppercase tracking-[0.25em] text-[#4c4546] ${itemClassName}`.trim()}
        >
          {item}
        </span>
      ))}
    </div>
  )
}

export function InfoPanel({ eyebrow, title, description, children, className = '', tone = 'light' }) {
  const toneStyles = {
    light: 'border-[#e4e2e2] bg-[#f5f3f3] text-[#1b1c1c]',
    dark: 'border-white/10 bg-white/10 text-[#f5f3f3]',
    solid: 'border-[#e4e2e2] bg-[#ffffff] text-[#1b1c1c]',
  }

  const eyebrowColor = tone === 'dark' ? 'text-[#fed65b]' : 'text-[#735c00]'
  const titleColor = tone === 'dark' ? 'text-[#ffffff]' : 'text-[#000000]'
  const descriptionColor = tone === 'dark' ? 'text-[#e2e2e2]' : 'text-[#4c4546]'

  return (
    <div className={`rounded-[1.5rem] border p-6 shadow-sm ${toneStyles[tone] || toneStyles.light} ${className}`.trim()}>
      {eyebrow ? <p className={`text-sm uppercase tracking-[0.25em] ${eyebrowColor}`}>{eyebrow}</p> : null}
      {title ? <h3 className={`mt-3 font-display text-xl ${titleColor}`}>{title}</h3> : null}
      {description ? <p className={`mt-3 text-sm leading-7 ${descriptionColor}`}>{description}</p> : null}
      {children}
    </div>
  )
}

export function ContentCard({ children, className = '', delay = 0, hover = true, ...props }) {
  return (
    <AnimatedCard className={className} delay={delay} hover={hover} {...props}>
      {children}
    </AnimatedCard>
  )
}
