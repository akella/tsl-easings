import {  Fn,sin } from "three/tsl";
const easeInSine = Fn(([t]) => {
  return sin(t.sub(1).mul(Math.PI*0.5)).add(1);
});

export { easeInSine };
