import type { ReactNode } from 'react'

import { cn } from '../../lib/cn'

type ContainerProps = {
  children: ReactNode
  className?: string
  size?: 'default' | 'narrow' | 'wide'
}

const maxWidth: Record<Exclude<ContainerProps['size'], undefined>, string> = {
  default: 'max-w-[1200px]',
  narrow: 'max-w-[840px]',
  wide: 'max-w-[1440px]',
}

export function Container({
  children,
  className = '',
  size = 'default',
}: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full px-5 sm:px-8', maxWidth[size], className)}>
      {children}
    </div>
  )
}