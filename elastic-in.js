import { pow, Fn, sin,float } from "three/tsl";


const easeInElastic = Fn(([t]) => {
  const c4 = float((2 * Math.PI) / 3);
  return sin(t.mul(10).sub(10.75).mul(c4)).mul( pow(2, t.mul(10).sub(10))).mul(-1);
});

export { easeInElastic };
