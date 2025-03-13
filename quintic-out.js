import { pow, Fn,oneMinus } from "three/tsl";

const easeOutQuint = Fn(([t]) => {
  return pow(t.oneMinus(), 5).oneMinus();
});

export { easeOutQuint };
