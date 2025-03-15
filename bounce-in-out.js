import { pow, Fn,select } from "three/tsl";
import { easeOutBounce } from "./bounce-out";

const easeInOutBounce = Fn(([t]) => {
    let a = easeOutBounce(t.mul(-2).add(1)).oneMinus().div(2);
    let b = easeOutBounce(t.mul(2).sub(1)).add(1).div(2);
    return select(t.lessThan(0.5), a, b);
});

export { easeInOutBounce };
