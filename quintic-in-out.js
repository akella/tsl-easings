import { step, pow, mix, Fn } from "three/tsl";

const easeInOutQuint = Fn(([t]) => {
  let a1 = pow(t, 5).mul(16);
  let a2 = pow(t.mul(-2).add(2), 5).mul(0.5).oneMinus();
  let final = mix(a1, a2, step(0.5, t));
  return final;
});

export { easeInOutQuint };
