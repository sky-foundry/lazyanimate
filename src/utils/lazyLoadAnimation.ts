import { lazyAnimateElement } from '../lazyAnimateElement'

export default function lazyLoadAnimation() {
  const els = document.getElementsByClassName('lazyanimate')
  for (let i = 0; i < els.length; ++i) {
    const el = els.item(i)
    if (!el) {
      continue
    }
    lazyAnimateElement(el as HTMLElement)
  }
}
