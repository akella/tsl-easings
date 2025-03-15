import { pow, Fn, sqrt, oneMinus,float } from "three/tsl";

const easeInBack = Fn(([t]) => {
  let c1 = float(1.70158);
  let c3 = c1.add(1);
  return c3.mul(t).mul(t).mul(t).sub(c1.mul(t).mul(t));
});

export { easeInBack };
