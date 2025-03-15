import { pow, Fn,float,mix,step } from "three/tsl";

const easeOutBounce = Fn(([t]) => {
 let n1 = float(7.5625);
 let d1 = float(2.75);

 let a = t.mul(t).mul(n1);
 let b = n1.mul(pow(t.sub(float(1.5).div(d1)),2)).add(0.75);
 let c = n1.mul(pow(t.sub(float(2.25).div(d1)),2)).add(0.9375);
 let d = n1.mul(pow(t.sub(float(2.625).div(d1)),2)).add(0.984375);

 let final = d;

 final = mix(final, c, step(t,float(2.5).div(d1)));
 final = mix(final, b, step(t,float(2).div(d1)));
 final = mix(final, a, step(t,float(1).div(d1)));

 return final;
 
});

export { easeOutBounce };
