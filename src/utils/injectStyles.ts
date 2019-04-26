/**
 * Injects styles to head with specified class name.
 * If class name has already had styles injected,
 * no duplicate styles will be injected.
 *
 * @param className name of class to search for when applying animations
 */
export default function injectStyles(className = 'lazyanimate') {
  // Check for existing styles
  if (
    document.querySelector(
      `#lazyanimate-styles[data-class-name="${className}"]`
    )
  ) {
    return
  }

  const styleEl = document.createElement('style')
  styleEl.id = 'lazyanimate-styles'
  styleEl.type = 'text/css'
  styleEl.dataset.className = className
  document.head.appendChild(styleEl)

  const textNodeEl = document.createTextNode(`
    .${className}:not(.${className}-init) {
      opacity: 0;
    }
  `)
  styleEl.appendChild(textNodeEl)
}
