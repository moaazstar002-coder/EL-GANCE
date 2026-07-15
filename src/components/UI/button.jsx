import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const buttonBase =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#735c00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf9f9]'

const buttonStyles = {
  primary: 'bg-[#000000] text-[#ffffff] hover:bg-[#1b1b1b]',
  secondary: 'border border-[#cfc4c5] bg-transparent text-[#1b1c1c] hover:border-[#735c00] hover:text-[#735c00]',
  ghost: 'bg-[#f5f3f3] text-[#1b1c1c] hover:bg-[#efeded]',
}

export function AnimatedButton({ children, to, href, variant = 'primary', className = '', ...props }) {
  const classes = `${buttonBase} ${buttonStyles[variant] || buttonStyles.primary} ${className}`.trim()

  const motionProps = {
    whileHover: { y: -3, scale: 1.01 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  }

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a {...motionProps} href={href} className={classes} {...props}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" {...motionProps} className={classes} {...props}>
      {children}
    </motion.button>
  )
}

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
      {eyebrow ? <p className="text-sm uppercase tracking-[0.3em] text-[#735c00]">{eyebrow}</p> : null}
      {title ? <h2 className="mt-3 font-display text-3xl text-[#000000] sm:text-4xl">{title}</h2> : null}
      {description ? <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4c4546]">{description}</p> : null}
    </motion.div>
  )
}

export function AnimatedCard({ children, className = '', delay = 0, hover = true, ...props }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay }}
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      whileTap={hover ? { scale: 0.99 } : undefined}
      className={className}
      {...props}
    >
      {children}
    </motion.article>
  )
}
