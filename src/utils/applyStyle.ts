import cssDuration from './cssDuration'

export default function applyStyle<T extends keyof CSSStyleDeclaration>(
  el: HTMLElement,
  style: T,
  value: string | number | undefined,
  duration: boolean = false
) {
  if (value != null) {
    el.style[style] = duration ? cssDuration(value) : value
  }
}
