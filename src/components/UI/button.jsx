import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const buttonBase =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5c4a00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf9f9]'

const buttonStyles = {
  primary: 'bg-[#000000] text-[#ffffff] hover:bg-[#1b1b1b]',
  secondary: 'border border-[#cfc4c5] bg-transparent text-[#1b1c1c] hover:border-[#5c4a00] hover:text-[#5c4a00]',
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

