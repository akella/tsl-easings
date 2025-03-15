import {  Fn,sin } from "three/tsl";
const easeOutSine = Fn(([t]) => {
  return sin(t.mul(Math.PI*0.5));
});

export { easeOutSine };
