import { lazyAnimateAllOnLoad } from './lazyAnimateAllOnLoad'
import { lazyAnimateElement } from './lazyAnimateElement'
import { lazyAnimateOnScroll } from './lazyAnimateOnScroll'

export default class LazyAnimate {
  public lazyAnimateAllOnLoad = lazyAnimateAllOnLoad
  public lazyAnimateElement = lazyAnimateElement
  public lazyAnimateOnScroll = lazyAnimateOnScroll

  constructor(injectStyles: boolean = true) {
    injectStyles && this.injectStyles()
  }

  private injectStyles() {
    const styleEl = document.createElement('style')
    styleEl.type = 'text/css'
    document.head.appendChild(styleEl)

    const textNodeEl = document.createTextNode(`
      .lazyanimate:not(.lazyanimate-init) {
        opacity: 0;
      }
    `)
    styleEl.appendChild(textNodeEl)
  }
}
