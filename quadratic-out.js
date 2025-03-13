import { Fn } from "three/tsl";

const easeOutQuad = Fn(([t]) => {
  return t.mul(float(2).sub(t));
});

export { easeOutQuad };
