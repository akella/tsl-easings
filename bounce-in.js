import {Fn, oneMinus } from "three/tsl";
import { easeOutBounce } from "./bounce-out";

const easeInBounce = Fn(([t]) => {
    return oneMinus(easeOutBounce(t.oneMinus()));
});

export { easeInBounce };
