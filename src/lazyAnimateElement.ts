import animationInit from './utils/animationInit'

/**
 * Applies a CSS animation to an element based on it's data-animate.
 *
 * @param el element to apply animation to
 */
export function lazyAnimateElement(el: HTMLElement) {
  const animations = el.getAttribute('data-animate')
  if (!animations) {
    return
  }

  if (animations.indexOf('{') !== -1) {
    // Interpret as JS object
    // tslint:disable-next-line: no-eval
    const animationsObj = eval(`(${animations})`)
    let fallbackAnimationName = null
    let setAnimationName = null
    for (const animationName in animationsObj) {
      if (animationsObj.hasOwnProperty(animationName)) {
        if (animationsObj[animationName] === true) {
          fallbackAnimationName = animationName
          continue
        }
        if (window.matchMedia(animationsObj[animationName]).matches) {
          setAnimationName = animationName
        }
      }
    }
    if (!setAnimationName) {
      setAnimationName = fallbackAnimationName
    }
    if (!setAnimationName) {
      return
    }

    el.style.animationName = setAnimationName
    animationInit(el)

    return
  }

  el.style.animationName = animations
  animationInit(el)
}
