import { pow, Fn,float } from "three/tsl";

const easeOutBack = Fn(([t]) => {
  let c1 = float(1.70158);
  let c3 = c1.add(1);
  return c1.mul(pow(t.sub(1), 2)).add(1).add(c3.mul(pow(t.sub(1), 3)));
});

export { easeOutBack };
