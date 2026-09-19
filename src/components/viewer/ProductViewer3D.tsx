import { lazy, Suspense } from 'react'

import ovocyplusFrame1 from '../../assets/product/ovocyplus-frame-1.webp'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useInView } from '../../hooks/useInView'

const ViewerInner = lazy(() => import('./ViewerInner'))

export function ProductViewer3D() {
  const reduced = useReducedMotion()
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: '0px 0px 300px 0px' })

  return (
    <div
      ref={ref}
      className="relative min-h-[320px] w-full overflow-hidden sm:min-h-[420px]"
    >
      <img
        src={ovocyplusFrame1}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-contain p-6"
      />
      {inView ? (
        <Suspense fallback={null}>
          <div className="absolute inset-0">
            <ViewerInner reduced={reduced} />
          </div>
        </Suspense>
      ) : null}
    </div>
  )
}