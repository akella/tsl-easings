import { pow, Fn, sqrt, oneMinus,float,select } from "three/tsl";

const easeInOutBack = Fn(([t]) => {
  let c1 = float(1.70158);
  let c2 = c1.mul(1.525);

  let a = pow(t.mul(2), 2).mul(
    c2.add(1).mul(t).mul(2).sub(c2)
  ).div(2);
  let b = pow(t.mul(2).sub(2), 2).mul(
    c2.add(1).mul( t.mul(2).sub(2)).add(c2)
  ).add(2).div(2);

  return select(t.lessThan(0.5), a, b);
});

export { easeInOutBack };
