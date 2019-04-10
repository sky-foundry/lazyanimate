export default function animationInit(el: HTMLElement) {
  const onAnimationStart = (ev: AnimationEvent) => {
    if (!ev.target) {
      return
    }
    // tslint:disable-next-line: semicolon
    ;(ev.target as HTMLElement).classList.add('lazyanimate-init')
  }

  el.addEventListener('animationstart', onAnimationStart, { once: true }) // Standard syntax
  // el.addEventListener('webkitAnimationStart', onAnimationStart, { once: true })
  // Code for Chrome, Safari and Opera
}
