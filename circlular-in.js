import { pow, Fn, sqrt, oneMinus } from "three/tsl";

const easeInCircular = Fn(([t]) => {
  return sqrt(t.mul(t).oneMinus()).oneMinus();
});

export { easeInCircular };
