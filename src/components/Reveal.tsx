import type {
  ComponentType,
  CSSProperties,
  ReactNode,
  Ref,
} from 'react'

import { useInView } from '../hooks/useInView'
import { cn } from '../lib/cn'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li' | 'article' | 'section'
}

type RevealHostProps = {
  ref?: Ref<HTMLElement>
  style?: CSSProperties
  className?: string
  children?: ReactNode
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>()
  const Host = as as unknown as ComponentType<RevealHostProps>

  const style: CSSProperties | undefined = delay
    ? { transitionDelay: `${delay}ms` }
    : undefined

  return (
    <Host
      ref={ref as Ref<HTMLElement>}
      style={style}
      className={cn(
        'transition-[opacity,transform] duration-700 ease-out will-change-transform',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0',
        className,
      )}
    >
      {children}
    </Host>
  )
}