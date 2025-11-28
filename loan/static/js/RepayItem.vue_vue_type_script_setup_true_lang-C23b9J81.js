import { d as y, c as d, i, g as s, e as n, aF as u, t as e, f as o, x as l, v as h, B as _, w as v, J as k, __tla as __tla_0 } from "./index-CVQHjKiH.js";
import { _ as w, __tla as __tla_1 } from "./LoanMethodLabel.vue_vue_type_script_setup_true_lang-CaY1KaEz.js";
import { a as b, __tla as __tla_2 } from "./RepaymentPlan.vue_vue_type_script_setup_true_lang-7R7pyOPb.js";
let J;
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
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })()
]).then(async () => {
  let B, D, x, $, g, C, M, T, E, F, I, N, V;
  B = {
    class: "flex bg-white rounded-xl items-center p-4 mb-2.5"
  };
  D = {
    class: "flex-shrink-0"
  };
  x = {
    class: "flex-1"
  };
  $ = {
    class: "flex items-center text-sm text-[#222221]"
  };
  g = {
    class: "ml-1 line-clamp-1"
  };
  C = {
    class: "ml-1.5 whitespace-nowrap flex-shrink-0"
  };
  M = {
    class: "flex mt-3 font-bold text-lg"
  };
  T = {
    class: "ml-1.5"
  };
  E = {
    class: "mt-0.5 text-xxs text-[#87837E]"
  };
  F = {
    class: "flex justify-between items-center text-sm mt-2.5"
  };
  I = {
    class: "text-black font-semibold"
  };
  N = {
    key: 0,
    class: "text-[#2E2008]"
  };
  V = {
    key: 1,
    class: "ml-auto"
  };
  J = y({
    __name: "RepayItem",
    props: {
      data: {
        default: () => {
        }
      },
      early: {
        type: Boolean,
        default: () => false
      }
    },
    emits: [
      "open",
      "handleTo"
    ],
    setup(z, { emit: p }) {
      const r = p;
      return (a, t) => {
        var _a, _b, _c, _d, _e, _f, _g;
        const m = _, c = k;
        return i(), d("div", B, [
          s("div", D, [
            u(a.$slots, "default")
          ]),
          s("div", x, [
            s("div", $, [
              n(w, {
                class: "flex-shrink-0",
                status: a.data.interestType
              }, null, 8, [
                "status"
              ]),
              s("span", g, e(a.data.title) + " " + e(a.data.orderNo), 1),
              s("span", C, e(a.data.amount) + " Mcoin", 1),
              n(b, {
                status: a.data.overdueInfo.status,
                class: "ml-auto flex-shrink-0"
              }, null, 8, [
                "status"
              ])
            ]),
            s("div", {
              onClick: t[0] || (t[0] = (f) => r("open", a.data))
            }, [
              s("div", M, [
                t[2] || (t[2] = s("span", {
                  class: "whitespace-nowrap"
                }, "\u5F85\u8FD8\u91D1\u989D", -1)),
                s("span", T, e(o(l)(a.data.payment)) + " Mcoin", 1)
              ]),
              s("div", E, " \u672C\u91D1" + e(o(l)(a.data.principal)) + " Mcoin+\u5229\u606F" + e(o(l)(a.data.interest)) + "Mcoin+\u5229\u606F\u7BA1\u7406\u8D39" + e(o(l)(a.data.manageFee)) + "Mcoin ", 1)
            ]),
            s("div", F, [
              s("span", I, e(a.data.period) + "/" + e(a.data.TotalCount), 1),
              a.early ? (i(), d("div", V, [
                n(m, {
                  size: "small",
                  round: "",
                  color: "#FED73A",
                  class: "px-8",
                  onClick: t[1] || (t[1] = (f) => r("handleTo", a.data))
                }, {
                  default: v(() => t[3] || (t[3] = [
                    s("span", {
                      class: "text-black text-sm font-semibold px-3 whitespace-nowrap"
                    }, "\u63D0\u524D\u8FD8\u6B3E", -1)
                  ])),
                  _: 1,
                  __: [
                    3
                  ]
                })
              ])) : (i(), d("span", N, [
                s("span", null, e(((_a = a.data.overdueInfo) == null ? void 0 : _a.isOverdue) ? `\u5DF2\u903E\u671F${((_b = a.data.repayDays) == null ? void 0 : _b.days) === 0 ? "" : ((_c = a.data.repayDays) == null ? void 0 : _c.days) + "\u5929"}` : ((_d = a.data.repayDays) == null ? void 0 : _d.days) > 0 && ((_e = a.data.repayDays) == null ? void 0 : _e.days) < 1 ? "\u4ECA\u65E5\u5230\u671F" : ((_f = a.data.repayDays) == null ? void 0 : _f.days) >= 1 ? ((_g = a.data.repayDays) == null ? void 0 : _g.days) + "\u5929\u540E\u4E3A\u6700\u540E\u8FD8\u6B3E\u65E5" : o(h)(a.data.repayTime * 1e3, "Y-m-d") + "\u4E3A\u6700\u540E\u8FD8\u6B3E\u65E5"), 1)
              ]))
            ])
          ]),
          n(c, {
            name: "arrow",
            class: "text-black/40 flex-shrink-0",
            size: "10"
          })
        ]);
      };
    }
  });
});
export {
  J as _,
  __tla
};
