import type { ReactNode } from 'react'

import { cn } from '../../lib/cn'
import { Container } from './Container'

type SectionProps = {
  id?: string
  index: string
  kicker: string
  title?: ReactNode
  description?: ReactNode
  children: ReactNode
  className?: string
  align?: 'left' | 'center'
}

export function Section({
  id,
  index,
  kicker,
  title,
  description,
  children,
  className = '',
  align = 'left',
}: SectionProps) {
  return (
    <section id={id} className={cn('py-20 lg:py-28', className)}>
      <Container>
        <div className="border-t border-ink/12 pt-8">
          <header
            className={cn(
              'grid gap-6 lg:grid-cols-12 lg:items-start',
              align === 'center' && 'lg:text-center',
            )}
          >
            <div className="lg:col-span-3">
              <p className="font-display text-3xl text-berry">{index}</p>
              <p className="kicker mt-3">{kicker}</p>
            </div>
            <div className={cn('lg:col-span-9', align === 'center' && 'lg:mx-auto')}>
              {title ? (
                <h2 className="max-w-[22ch] text-3xl sm:text-4xl">{title}</h2>
              ) : null}
              {description ? (
                <p className="mt-4 max-w-[62ch] text-lg text-ink-soft">
                  {description}
                </p>
              ) : null}
            </div>
          </header>
          <div className="mt-10 lg:mt-14">{children}</div>
        </div>
      </Container>
    </section>
  )
}