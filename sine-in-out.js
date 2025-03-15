import {  Fn,cos } from "three/tsl";
const easeInOutSine = Fn(([t]) => {
  return cos(t.mul(Math.PI)).sub(1).mul(-0.5);
});

export { easeInOutSine };
