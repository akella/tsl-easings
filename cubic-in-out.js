import { pow, Fn, step, mix,float } from "three/tsl";

const easeInOutCubic = Fn(([t]) => {
  let a = float(4).mul(pow(t, 3));
  let b = float(0.5).mul(pow(t.mul(2).sub(2), 3)).add(1);
  return mix(a, b, step(0.5, t));
});

export { easeInOutCubic };
