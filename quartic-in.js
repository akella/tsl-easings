import { pow, Fn } from "three/tsl";

const easeInQuart = Fn(([t]) => {
  return pow(t, 4);
});

export { easeInQuart };
