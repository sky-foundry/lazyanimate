# Lazy Animate

### Use CSS animations on load or scroll.

## Installation

1. Install package as dependency

   ```bash
   yarn add lazyanimate
   # or
   npm install lazyanimate
   ```

2. Import functions in your script and create an instance

   ```js
   import LazyAnimate from 'lazyanimate'

   const lazyAnimate = new LazyAnimate()
   ```

## Basic Usage

Lazy animate an element by adding a class of `lazyanimate` and a `data-animate` attribute with the CSS keyframes animation name:

```html
<!-- HTML -->
<div class="my-div lazyanimate" data-animate="slide-in"></div>
```

Add CSS animation keyframes and apply duration and timing function:

_Note that you should not apply the animation name to your elements as lazyanimate will do this for you via the data-animate attribute._

```css
/* CSS */
.my-div {
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
}

@keyframes slide-in {
  from {
    transform: translateX(-60px);
  }
}
```

Initialize lazyanimate in your JavaScript:

```js
import LazyAnimate from 'lazyanimate'

const lazyAnimate = new LazyAnimate()
lazyAnimate.lazyAnimateAllOnLoad()
```

## data-animate attribute

The `data-animate` attribute accepts either a string or a JavaScript object.

**If a string is passed in**, the element will have the CSS property `animation-name` applied to it when your lazyAnimate JS triggers it.

Eg: `data-animate="slide-in"`

**If a JS object is passed in**, you can apply any css property prefixed with `animation-`.

```html
data-animate="{ name: '', delay: 0, direction: '', duration: 0, fillMode: '',
iterationCount: 1, playState: '', timingFunction: '' }"
```

You can also change the animation name using a media query string.
You should have one key with a value of `true` which will be the fallback animation.

```html
data-animate="{ name: { 'slide-in': true, 'slide-in-tablet': '(min-width:
768px)' } }"
```

## API

### lazyAnimateAllOnLoad

Loads all lazyanimate animations on load or instantly if already loaded.

```js
import LazyAnimate from 'lazyanimate'

const lazyAnimate = new LazyAnimate()
lazyAnimate.lazyAnimateAllOnLoad()
```

### lazyAnimateElement

Applies a CSS animation to an element based on it's data-animate.

```js
import LazyAnimate from 'lazyanimate'

const el = document.getElementById('...')

const lazyAnimate = new LazyAnimate()
lazyAnimate.lazyAnimateElement(el)
```

### lazyAnimateOnScroll

Applies lazy animate to all elements when intersection observer fires.

```js
import LazyAnimate from 'lazyanimate'

const scrollContainer = document.getElementById('...')
const thresholdPercent = 0.8

const lazyAnimate = new LazyAnimate()
lazyAnimate.lazyAnimateOnScroll(scrollContainer, thresholdPercent)
```
