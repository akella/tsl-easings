import { pow, Fn } from "three/tsl";

const easeOutQuart = Fn(([t]) => {
  return pow(t.sub(1), 3).mul(t.oneMinus()).add(1);
});

export { easeOutQuart };
