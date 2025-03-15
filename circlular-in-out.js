import { pow, Fn, sqrt, oneMinus,float,select } from "three/tsl";

const easeInOutCircular = Fn(([t]) => {
  let a = sqrt(
    float(1).sub(pow(float(2).mul(t),2))
  ).oneMinus().mul(0.5);
  let b = sqrt(
    float(1).sub(
      pow(float(-2).mul(t).add(2),2)
    )
  ).add(1).mul(0.5);
  return select(t.lessThan(0.5), a, b);
});

export { easeInOutCircular };
