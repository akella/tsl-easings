import { pow, Fn } from "three/tsl";

const easeInQuint = Fn(([t]) => {
  return pow(t, 5);
});

export { easeInQuint };
