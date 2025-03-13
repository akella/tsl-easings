import { pow, Fn } from "three/tsl";

const easeInCubic = Fn(([t]) => {
  return pow(t, 3);
});

export { easeInCubic };
