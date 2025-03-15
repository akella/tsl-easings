import {  Fn,pow, select,equal } from "three/tsl";
const easeOutExpo = Fn(([t]) => {
  return select(t.equal(1), 1, pow(2, t.mul(-10)).add(1));
});

export { easeOutExpo };
