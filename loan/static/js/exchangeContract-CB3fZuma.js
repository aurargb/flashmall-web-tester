import { ap as a, aq as e, ar as c, __tla as __tla_0 } from "./index-CVQHjKiH.js";
let o;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  o = () => {
    const r = a();
    return {
      lastPrice: async () => {
        try {
          const t = await r.lastPrice();
          return e(t);
        } catch (t) {
          return c(t);
        }
      }
    };
  };
});
export {
  __tla,
  o as e
};
