import { _ as H, __tla as __tla_0 } from "./RepaymentPlan.vue_vue_type_script_setup_true_lang-7R7pyOPb.js";
import { d as F, c as r, i as l, I as K, f as c, t as i, u as Q, a as W, r as v, q as k, g as o, m as L, e as m, w as P, F as I, n as C, z as E, k as X, E as Y, J as Z, v as tt, _ as et, __tla as __tla_1 } from "./index-CVQHjKiH.js";
import { L as st, __tla as __tla_2 } from "./index-Bbv1NXtA.js";
import { a as h, b as at, __tla as __tla_3 } from "./useType-GHSO8guk.js";
import { _ as ot, __tla as __tla_4 } from "./LoanMethodLabel.vue_vue_type_script_setup_true_lang-CaY1KaEz.js";
import { _ as nt, __tla as __tla_5 } from "./Empty.vue_vue_type_script_setup_true_lang-DHv6J42C.js";
import { _ as lt, __tla as __tla_6 } from "./BackIcon-CdrC5To7.js";
import { c as rt, b as it, __tla as __tla_7 } from "./loan-DUx-0XpN.js";
import { u as ct, __tla as __tla_8 } from "./useLoan-BhqL0FVa.js";
import { u as ut, __tla as __tla_9 } from "./index-Culc1QRb.js";
import { __tla as __tla_10 } from "./index.es-CLwpJEin.js";
let Mt;
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
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_8;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_9;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_10;
    } catch {
    }
  })()
]).then(async () => {
  let dt, pt, ft, mt, _t, gt, vt, ht, bt, xt, yt, wt, kt, Lt;
  dt = F({
    __name: "RepayStatusLabel",
    props: {
      status: {}
    },
    setup(S) {
      return (u, b) => (l(), r("div", {
        class: "text-xxs px-1.5 py-1 rounded flex-shrink-0",
        style: K({
          backgroundColor: c(h)(u.status).bgColor,
          color: c(h)(u.status).color
        })
      }, i(c(h)(u.status).label), 5));
    }
  });
  pt = {
    class: "bg-[#F2F0EF] bg h-full"
  };
  ft = {
    class: "flex justify-between items-center h-[46px] px-2.5 bg-white"
  };
  mt = {
    class: "flex items-center px-4 py-2.5 gap-2.5 overflow-x-auto"
  };
  _t = [
    "onClick"
  ];
  gt = {
    class: "px-4"
  };
  vt = [
    "onClick"
  ];
  ht = {
    class: "flex items-center gap-2"
  };
  bt = {
    class: "text-sm font-normal line-clamp-1"
  };
  xt = {
    class: "flex items-center gap-2"
  };
  yt = {
    class: "flex items-center justify-between mt-2"
  };
  wt = {
    class: "text-sm font-bold text-[#2E2008]/50"
  };
  kt = {
    class: "text-sm font-normal text-[#87837E]"
  };
  Lt = F({
    __name: "LoanRecord",
    setup(S) {
      const { checkOverdue: u } = ct(), { accountStore: b } = Q(), z = X(), t = W({
        status: null,
        page: 0,
        size: 10,
        finished: false,
        list: [],
        loading: false,
        total: 0
      }), [B, x] = ut(false), R = (s) => {
        z.push(s);
      }, T = (s) => {
        t.status !== s.id && (t.status = s.id, $());
      }, $ = () => {
        t.page = 0, t.total = 0, t.finished = false, t.list = [], y();
      }, y = async () => {
        t.loading = true, t.page += 1, await M(), t.loading = false;
      }, M = async () => {
        let s = {
          page: t.page,
          size: t.size,
          status: t.status,
          borrowerAddr: b.sign.address
        };
        const e = await rt(s);
        if (t.loading = false, !e.success) {
          t.finished = true;
          return;
        }
        if (!e.data || !+e.total) {
          t.finished = true;
          return;
        }
        t.total = e.total, t.list = t.page === 1 ? e.data : t.list.concat(e.data), t.list.length >= t.total && (t.finished = true);
      }, d = v(null), n = v(null), p = v(null), N = async (s) => {
        var _a, _b, _c, _d, _e, _f, _g;
        if (s.status === 1 || s.status === 3) return R("/ecology-loan/detail?id=" + s.id);
        const { data: e, success: _ } = await it({
          loanId: s.id || 0
        });
        if (_) {
          n.value = (_a = e == null ? void 0 : e.loanDtos[0]) == null ? void 0 : _a.planList, p.value = (_b = e == null ? void 0 : e.loanDtos[0]) == null ? void 0 : _b.curPlan, d.value = {
            ...(_c = e == null ? void 0 : e.loanDtos[0]) == null ? void 0 : _c.fmLoan,
            totalInterest: (_d = e == null ? void 0 : e.loanDtos[0]) == null ? void 0 : _d.totalInterest,
            totalManageFee: (_e = e == null ? void 0 : e.loanDtos[0]) == null ? void 0 : _e.totalManageFee
          };
          const g = await u(s == null ? void 0 : s.id);
          (_f = n.value) == null ? void 0 : _f.forEach((f, w) => {
            var _a2, _b2;
            return f.period === ((_a2 = p.value) == null ? void 0 : _a2.period) && (f.status = g.status > 1 ? 3 : (_b2 = p.value) == null ? void 0 : _b2.status), f;
          }), ((_g = n.value) == null ? void 0 : _g.length) > 0 && x(true);
        }
      }, j = () => {
        var _a;
        return (_a = n.value) == null ? void 0 : _a.reduce((s, e) => E(s).plus(e.principal).plus(e.interest).plus(e.manageFee).toString(), 0);
      }, q = () => {
        var _a;
        return (_a = n.value) == null ? void 0 : _a.reduce((s, e) => E(s).plus(e.interest).plus(e.manageFee).toString(), 0);
      }, D = () => {
        p.value = null, d.value = null, n.value = null, x(false);
      }, V = k(() => {
        var _a;
        return (_a = d.value) == null ? void 0 : _a.amount;
      }), A = k(() => {
        var _a;
        return (_a = n.value) == null ? void 0 : _a.filter((s) => s.status !== 2).length;
      });
      return (s, e) => {
        var _a, _b, _c;
        const _ = lt, g = nt, f = ot, w = dt, O = Z, J = st, U = H;
        return l(), r("div", pt, [
          o("div", ft, [
            m(_, null, {
              default: P(() => e[1] || (e[1] = [
                o("div", {
                  class: "text-sm font-semibold ml-1"
                }, "\u501F\u6B3E/\u8FD8\u6B3E\u8BB0\u5F55", -1)
              ])),
              _: 1,
              __: [
                1
              ]
            })
          ]),
          o("div", mt, [
            (l(true), r(I, null, C(c(at)(), (a) => (l(), r("div", {
              key: a.id,
              class: Y([
                "text-sm font-semibold rounded-lg text-center flex-1 py-1.5 whitespace-nowrap",
                t.status === a.id ? "bg-[#FED73A]" : "font-normal text-black/50 bg-white"
              ]),
              onClick: (G) => T(a)
            }, i(a.label), 11, _t))), 128))
          ]),
          t.finished && t.total === 0 ? (l(), L(g, {
            key: 0,
            name: "\u6682\u65E0\u8BB0\u5F55"
          })) : (l(), L(J, {
            key: 1,
            loading: t.loading,
            "onUpdate:loading": e[0] || (e[0] = (a) => t.loading = a),
            finished: t.finished,
            "finished-text": "\u6CA1\u6709\u66F4\u591A\u4E86",
            "loading-text": "\u6B63\u5728\u52A0\u8F7D",
            onLoad: y
          }, {
            default: P(() => [
              o("div", gt, [
                (l(true), r(I, null, C(t.list, (a) => (l(), r("div", {
                  key: a.id,
                  class: "bg-white rounded-lg p-4 mb-3"
                }, [
                  o("div", {
                    class: "flex items-center justify-between border-solid border-b border-[#E0E0E0] pb-4",
                    onClick: (G) => N(a)
                  }, [
                    o("div", ht, [
                      m(f, {
                        status: a.interestType
                      }, null, 8, [
                        "status"
                      ]),
                      o("div", bt, i(a.title) + " " + i(a.orderNo), 1)
                    ]),
                    o("div", xt, [
                      m(w, {
                        status: a.status
                      }, null, 8, [
                        "status"
                      ]),
                      m(O, {
                        name: "arrow"
                      })
                    ])
                  ], 8, vt),
                  o("div", yt, [
                    o("div", wt, " \u501F\u6B3E\u91D1\u989D " + i(a.amount) + " Mcoin ", 1),
                    o("div", kt, i(c(tt)(a.createTime)), 1)
                  ])
                ]))), 128))
              ])
            ]),
            _: 1
          }, 8, [
            "loading",
            "finished"
          ])),
          m(U, {
            show: c(B),
            "repay-method": (_a = d.value) == null ? void 0 : _a.interestType,
            payments: n.value,
            principal: V.value,
            interest: q(),
            periods: (_b = n.value) == null ? void 0 : _b.length,
            total: j(),
            loanInfo: d.value,
            remainPeriod: A.value,
            "current-period": (_c = p.value) == null ? void 0 : _c.period,
            onClose: D
          }, null, 8, [
            "show",
            "repay-method",
            "payments",
            "principal",
            "interest",
            "periods",
            "total",
            "loanInfo",
            "remainPeriod",
            "current-period"
          ])
        ]);
      };
    }
  });
  Mt = et(Lt, [
    [
      "__scopeId",
      "data-v-e5327a89"
    ]
  ]);
});
export {
  __tla,
  Mt as default
};
