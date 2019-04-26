import { lazyAnimateElement } from './lazyAnimateElement'

/**
 * Applies lazy animate to all elements when intersection observer fires.
 *
 * @param parentEl element to add intersection observer to
 * @param threshold percentages to watch for intersection
 * @returns method to destroy listener
 */
export function lazyAnimateOnScroll(
  parentEl: HTMLElement,
  threshold: number | number[],
  className: string = 'lazyanimate'
): () => void {
  const observer = new IntersectionObserver(
    (observed, observer) => {
      if (!observed.length) {
        observer.disconnect()
        return
      }

      if (observed[0].isIntersecting) {
        observer.disconnect()
        const els = observed[0].target.getElementsByClassName(className)
        if (!els) {
          return
        }
        for (let i = 0; i < els.length; ++i) {
          const el = els.item(i)
          if (!el) {
            continue
          }
          lazyAnimateElement(el as HTMLElement)
        }
      }
    },
    {
      root: null,
      rootMargin: undefined,
      threshold,
    }
  )
  observer.observe(parentEl)

  return observer.disconnect
}
