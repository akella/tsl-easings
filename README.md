# TSL Easings

A collection of Robert Penner's easing functions implemented in TSL (Three.js Shader Language) for use with Three.js, WebGL, and WebGPU.

Read more about TSL [here](https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language#ternary)

## Installation

```bash
npm install tsl-easings
```

## Usage

```javascript
import { easeInOutCubic, easeOutQuad } from 'tsl-easings';
// Use in your TSL code context
let easedValue = easeInOutCubic(value);
```

## Available Easing Functions

### Linear
- `easeLinear`

### Quadratic
- `easeInQuad`
- `easeOutQuad`
- `easeInOutQuad`

### Cubic
- `easeInCubic`
- `easeOutCubic`
- `easeInOutCubic`

### Quartic
- `easeInQuart`
- `easeOutQuart`
- `easeInOutQuart`

### Quintic
- `easeInQuint`
- `easeOutQuint`
- `easeInOutQuint`

### Sine
- `easeInSine`
- `easeOutSine`
- `easeInOutSine`

### Exponential
- `easeInExpo`
- `easeOutExpo`
- `easeInOutExpo`

### Circular
- `easeInCircular`
- `easeOutCircular`
- `easeInOutCircular`

### Back
- `easeInBack`
- `easeOutBack`
- `easeInOutBack`

### Elastic
- `easeInElastic`
- `easeOutElastic`
- `easeInOutElastic`

### Bounce
- `easeInBounce`
- `easeOutBounce`
- `easeInOutBounce`

## API

Each easing function takes a single parameter `t` which should be a value between 0 and 1, and returns an eased value.



## License

MIT © [Yuri Artiukh](https://github.com/akella)
