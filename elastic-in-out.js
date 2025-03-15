import { pow, Fn, sin, select,float,step,mix } from "three/tsl";

const easeInOutElastic = Fn(([t]) => {
  const c5 = float((2 * Math.PI) / 4.5);
  let a = pow(2,t.mul(20).sub(10)).mul(
    sin(t.mul(20).sub(11.125).mul(c5))
  ).div(2);
  let b = pow(2,t.mul(-20).add(10)).mul(
    sin(t.mul(20).sub(11.125).mul(c5))
  ).div(2).add(1);
  let final =mix(b,a,step(t,0.5));

  final.assign(select(t.equal(0),0,final));
  final.assign(select(t.equal(1),1,final));
  return final;
});



export { easeInOutElastic };
