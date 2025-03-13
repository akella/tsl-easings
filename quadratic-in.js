import { Fn } from "three/tsl";

const easeInQuad = Fn(([t]) => {
  return t.mul(t);
});

export { easeInQuad };
