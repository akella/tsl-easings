import {  Fn,pow, select } from "three/tsl";
const easeInExpo = Fn(([t]) => {
  return select(t.equal(0), 0, pow(2, t.mul(10).sub(10)));
});

export { easeInExpo };
