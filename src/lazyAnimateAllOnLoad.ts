import lazyLoadAnimation from './utils/lazyLoadAnimation'

/**
 * Loads all lazyanimate animations on load or instantly if already loaded.
 */
export function lazyAnimateAllOnLoad() {
  if (
    document.readyState === 'complete' ||
    document.readyState === 'interactive'
  ) {
    lazyLoadAnimation()
  } else {
    document.addEventListener('DOMContentLoaded', lazyLoadAnimation)
  }
}
