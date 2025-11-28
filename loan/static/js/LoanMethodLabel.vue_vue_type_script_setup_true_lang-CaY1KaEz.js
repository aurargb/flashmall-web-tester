import { l as s, __tla as __tla_0 } from "./useType-GHSO8guk.js";
import { d as a, c as e, i as r, I as n, f as t, t as l, __tla as __tla_1 } from "./index-CVQHjKiH.js";
let d;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  d = a({
    __name: "LoanMethodLabel",
    props: {
      status: {}
    },
    setup(p) {
      return (o, c) => {
        var _a, _b, _c;
        return r(), e("div", {
          style: n({
            backgroundColor: (_a = t(s)(o.status)) == null ? void 0 : _a.bgColor,
            color: (_b = t(s)(o.status)) == null ? void 0 : _b.color
          }),
          class: "px-1 py-0.5 rounded text-xs font-bold whitespace-nowrap flex-shrink-0"
        }, l((_c = t(s)(o.status)) == null ? void 0 : _c.label), 5);
      };
    }
  });
});
export {
  d as _,
  __tla
};
