import { pow, Fn, sin } from "three/tsl";


const easeOutElastic = Fn(([t]) => {
  return sin(t.add(1).mul(-13*Math.PI / 2)).mul(pow(2, t.mul(-10))).add(1);
});

export { easeOutElastic };
