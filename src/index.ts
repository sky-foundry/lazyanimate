import { lazyAnimateAllOnLoad } from './lazyAnimateAllOnLoad'
import { lazyAnimateElement } from './lazyAnimateElement'
import { lazyAnimateOnScroll } from './lazyAnimateOnScroll'
import { default as _injectStyles } from './utils/injectStyles'

export default class LazyAnimate {
  public lazyAnimateAllOnLoad = lazyAnimateAllOnLoad
  public lazyAnimateElement = lazyAnimateElement

  private className: string

  constructor({ injectStyles = true, className = 'lazyanimate' }) {
    this.className = className
    injectStyles && _injectStyles(this.className)
  }

  public lazyAnimateOnScroll(
    parentEl: HTMLElement,
    threshold: number | number[]
  ) {
    return lazyAnimateOnScroll(parentEl, threshold, this.className)
  }
}
