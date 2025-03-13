import { pow, Fn, step, mix } from "three/tsl";

const easeInOutQuad = Fn(([t]) => {
  let a = pow(t, 2).mul(2);
  let b = pow(t, 2).mul(-2).add(t.mul(4)).sub(1);
  return mix(a, b, step(0.5, t));
});

export { easeInOutQuad };
