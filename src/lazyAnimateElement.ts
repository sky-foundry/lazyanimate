import animationInit from './utils/animationInit'
import applyStyle from './utils/applyStyle'

interface AnimateSettings {
  name: string | { [key: string]: string | boolean }
  delay?: string | number
  direction?: string
  duration?: string | number
  fillMode?: string
  iterationCount?: number
  playState?: string
  timingFunction?: string
}

/**
 * Applies a CSS animation to an element based on it's data-animate.
 *
 * @param el element to apply animation to
 */
export function lazyAnimateElement(el: HTMLElement) {
  const animateData = el.getAttribute('data-animate')
  if (!animateData) {
    return
  }

  let animateSettings: AnimateSettings | null = null

  if (animateData.indexOf('{') !== -1) {
    animateSettings = eval(`(${animateData})`) as AnimateSettings
    let fallbackAnimationName = null
    let setAnimationName = null

    if (typeof animateSettings.name === 'string') {
      setAnimationName = animateSettings.name
    } else {
      for (const animationName in animateSettings.name) {
        if (animateSettings.name.hasOwnProperty(animationName)) {
          const value = animateSettings.name[animationName]
          if (value === true) {
            fallbackAnimationName = animationName
            continue
          }
          if (typeof value === 'string' && window.matchMedia(value).matches) {
            setAnimationName = animationName
          }
        }
      }
    }

    if (!setAnimationName) {
      setAnimationName = fallbackAnimationName
    }
    if (!setAnimationName) {
      return
    }

    animateSettings.name = setAnimationName
  } else {
    animateSettings = {
      name: animateData,
    }
  }

  if (animateSettings) {
    applyStyle(el, 'animationTimingFunction', animateSettings.timingFunction)
    applyStyle(el, 'animationPlayState', animateSettings.playState)
    applyStyle(el, 'animationIterationCount', animateSettings.iterationCount)
    applyStyle(el, 'animationFillMode', animateSettings.fillMode)
    applyStyle(el, 'animationDuration', animateSettings.duration, true)
    applyStyle(el, 'animationDirection', animateSettings.direction)
    applyStyle(el, 'animationDelay', animateSettings.delay, true)

    el.style.animationName = animateSettings.name as string

    animationInit(el)
  }
}
