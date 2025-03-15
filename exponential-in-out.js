import {  Fn,pow, select,mix,step } from "three/tsl";


const easeInOutExpo = Fn(([t]) => {
  let a = pow(2,t.mul(20).sub(10)).mul(0.5);
  let b = pow(2,t.mul(-20).add(10)).mul(-0.5).add(1);
  let final =mix(b,a,step(t,0.5));
  final.assign(select(t.equal(0),0,final));
  final.assign(select(t.equal(1),1,final));
  return final;
});

export { easeInOutExpo };
