import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '../../lib/cn'

type CardProps = {
  children: ReactNode
  className?: string
} & HTMLAttributes<HTMLDivElement>

export function Card({ children, className = '', ...rest }: CardProps) {
  return (
    <div className={cn('rounded-2xl bg-peach p-6 sm:p-8', className)} {...rest}>
      {children}
    </div>
  )
}