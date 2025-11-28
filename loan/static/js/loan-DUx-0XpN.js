import { b9 as n, __tla as __tla_0 } from "./index-CVQHjKiH.js";
let e, r, u, L, m, T, o, l, a;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  a = (t) => n("POST", "/fmLoan/update", t);
  o = (t) => n("GET", "/fmLoan/list", t);
  e = (t) => n("GET", "/fmLoan/get", t);
  r = (t) => n("GET", "/fmLoan/planList", t);
  u = (t) => n("GET", "fmLoan/list", t);
  L = () => n("GET", "/fmLoan/lendTotal", null);
  m = (t) => n("GET", "/fmLoan/msgList", t);
  l = (t) => n("GET", "/fmLoan/getMsg", t);
  T = () => n("GET", "fmLoan/msgCount", null);
});
export {
  __tla,
  e as a,
  r as b,
  u as c,
  L as d,
  m as e,
  T as g,
  o as q,
  l as s,
  a as u
};
