import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'

import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

type ButtonProps = {
  href?: string
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 select-none'

const variants: Record<Variant, string> = {
  primary: 'bg-berry text-white hover:bg-berry-deep active:bg-berry-deep',
  secondary: 'border border-ink/15 bg-base text-ink hover:border-berry hover:text-berry',
  ghost: 'text-berry underline-offset-4 hover:text-berry-deep hover:underline',
}

const sizes: Record<Size, string> = {
  sm: 'min-h-10 px-4 text-sm',
  md: 'min-h-11 px-6 text-sm sm:text-[15px]',
  lg: 'min-h-12 px-8 text-base',
}

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (href !== undefined) {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}