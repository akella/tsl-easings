import { Fn, sqrt,float } from "three/tsl";

const easeOutCircular = Fn(([t]) => {
  return sqrt(t.mul(float(2).sub(t)));
});

export { easeOutCircular };
