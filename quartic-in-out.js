import { pow, Fn, step, mix } from "three/tsl";

const easeInOutQuart = Fn(([t]) => {
  let a = float(8).mul(pow(t, 4));
  let b = float(-8).mul(pow(t.sub(1), 4)).add(1);
  return mix(a, b, step(0.5, t));
});

export { easeInOutQuart };
