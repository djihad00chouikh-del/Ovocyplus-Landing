import type { ReactNode } from 'react'

import { cn } from '../../lib/cn'

type BadgeProps = {
  children: ReactNode
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full bg-peach px-4 py-2 text-sm font-medium text-ink',
        className,
      )}
    >
      {children}
    </span>
  )
}