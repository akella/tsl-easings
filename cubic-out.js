import { pow, Fn } from "three/tsl";

const easeOutCubic = Fn(([t]) => {
  return pow(t.sub(1), 3).add(1);
});

export { easeOutCubic };
