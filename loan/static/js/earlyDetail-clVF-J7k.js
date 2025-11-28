import { d as J, r as o, l as Q, q as f, z as u, y as W, o as X, c as A, g as t, e as L, w as k, t as l, f as n, x as r, F as Y, n as Z, I as tt, b as N, m as C, h as w, B as et, aq as h, k as st, i as b, an as at, H as lt, __tla as __tla_0 } from "./index-CVQHjKiH.js";
import { _ as nt, __tla as __tla_1 } from "./ApproveButton-Dic8X4Em.js";
import { _ as ot, __tla as __tla_2 } from "./BackIcon-CdrC5To7.js";
import { N as rt, __tla as __tla_3 } from "./NumberKeyBoardInput-BHPjsVku.js";
import { u as it, l as ut, __tla as __tla_4 } from "./useLoan-BhqL0FVa.js";
import { e as ct, __tla as __tla_5 } from "./erc20Contract-DFn00mXD.js";
import { b as dt, __tla as __tla_6 } from "./loan-DUx-0XpN.js";
import { I as mt, __tla as __tla_7 } from "./index.es-CLwpJEin.js";
import { u as pt, __tla as __tla_8 } from "./index-Culc1QRb.js";
let Jt;
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
  })()
]).then(async () => {
  let vt, ft, bt, xt, _t, yt, gt, kt, wt, ht, It, Mt, Bt, Ft, At, Lt, Nt, Ct, Pt, Rt, Vt, Tt, Et, jt;
  vt = {
    style: {
      background: "#f2f0ef"
    },
    class: "pb-4"
  };
  ft = {
    class: "sticky top-0 z-50 bg-white"
  };
  bt = {
    class: "flex items-center px-2.5 h-[44px]"
  };
  xt = {
    class: "p-4"
  };
  _t = {
    class: "bg-white rounded-xl p-5 relative"
  };
  yt = {
    class: "border-b border-black/10 relative pb-5"
  };
  gt = {
    class: "text-3xl font-bold leading-9"
  };
  kt = {
    class: "mt-1.5 flex gap-4"
  };
  wt = {
    class: "flex-1"
  };
  ht = {
    class: "text-base mt-1 text-black"
  };
  It = {
    class: "flex-1"
  };
  Mt = {
    class: "text-base mt-1 text-black"
  };
  Bt = {
    class: "flex items-center justify-between py-4 border-b border-black/10"
  };
  Ft = {
    class: "text-sm font-bold text-primary"
  };
  At = {
    class: "flex items-center justify-between py-4 border-b border-black/10"
  };
  Lt = {
    class: "text-black/50 text-sm"
  };
  Nt = {
    class: "text-sm font-bold"
  };
  Ct = {
    class: "flex items-center justify-between py-4"
  };
  Pt = {
    class: "text-sm font-bold"
  };
  Rt = {
    class: "absolute w-full bottom-0 left-0 flex justify-evenly translate-y-1/2"
  };
  Vt = {
    class: "bg-[#FFF8EC] py-3 rounded-xl mt-2.5 px-4 flex items-center"
  };
  Tt = {
    class: "text-xs text-[#87837E] mt-2.5 px-3"
  };
  Et = {
    class: "text-primary font-bold"
  };
  jt = {
    class: "pb-4 pt-6"
  };
  Jt = J({
    __name: "earlyDetail",
    setup(qt) {
      const { loanById: P, loanParams: x } = it(), { repayPrincipal: R, calcRepayAmount: V } = ut(), I = W(), c = o(null), T = st(), a = o(null), M = o(null), _ = o(null), E = () => {
        a.value = r(i.value, 4) + "", _.value = i.value + "";
      }, d = o({
        currentPrincipal: null,
        currentInterest: null,
        currentManageFee: null
      }), y = o(null);
      Q(() => {
        var _a;
        return (_a = M.value) == null ? void 0 : _a.show;
      }, (s) => {
        s ? y.value = "150px" : y.value = null;
      });
      const j = async () => {
        var _a;
        const s = await V(m);
        d.value.currentPrincipal = Number(h(s.result[0])), d.value.currentInterest = Number(h(s.result[1])), d.value.currentManageFee = u(h(s.result[1])).times((_a = x.value) == null ? void 0 : _a.managementFee_);
      }, [q, p] = pt(false), O = async () => {
        var _a;
        if (((_a = v.value) == null ? void 0 : _a.interestType) === mt.PrincipalAndInterest) {
          at("\u8FD8\u672C\u4ED8\u606F\u4E0D\u80FD\u63D0\u524D\u8FD8\u6B3E");
          return;
        }
        p(true);
        let s = a.value;
        _.value && r(a.value, 4) >= r(i.value) && (s = _.value), s === i.value && (s = H.value);
        try {
          (await R(m, s)).success && (lt("success", "\u8FD8\u6B3E\u6210\u529F"), p(false), I.params.refresh = "1", T.back());
        } catch {
          p(false);
        } finally {
          p(false);
        }
      }, S = f(() => u(a.value || 0).plus(d.value.currentInterest).plus(B.value)), B = f(() => {
        var _a;
        return u(a.value || 0).times((_a = x.value) == null ? void 0 : _a.serviceFee_);
      }), F = o(null), z = async () => {
        F.value = await ct(w.MCOIN).balanceOf();
      }, i = f(() => {
        var _a, _b;
        return (_b = (_a = c.value) == null ? void 0 : _a.planList) == null ? void 0 : _b.filter((s) => s.status !== 2).reduce((s, e) => u(s).plus(e.principal).toString(), 0);
      }), m = +I.query.id || 0, D = async () => {
        const { data: s, success: e } = await dt({
          loanId: m || 0
        });
        e && (c.value = s.loanDtos[0]);
      }, H = f(() => u(v.value.originalAmount).minus(v.value.paidAmount).toString()), v = o(null), K = async () => {
        v.value = await P(m);
      };
      return X(() => {
        j(), D(), K(), z();
      }), (s, e) => {
        var _a, _b, _c, _d, _e, _f, _g;
        const U = ot, $ = nt, G = et;
        return b(), A("div", vt, [
          t("div", ft, [
            t("div", bt, [
              L(U, null, {
                default: k(() => e[1] || (e[1] = [
                  t("div", {
                    class: "font-semibold text-sm"
                  }, "\u63D0\u524D\u8FD8\u6B3E", -1)
                ])),
                _: 1,
                __: [
                  1
                ]
              })
            ])
          ]),
          t("div", xt, [
            t("div", _t, [
              t("div", yt, [
                e[4] || (e[4] = t("div", {
                  class: "w-5 h-5 bg-[#f2f0ef] rounded-full absolute bottom-0 -left-5 -translate-x-1/2 translate-y-1/2"
                }, null, -1)),
                e[5] || (e[5] = t("div", {
                  class: "w-5 h-5 bg-[#f2f0ef] rounded-full absolute bottom-0 -right-5 translate-x-1/2 translate-y-1/2"
                }, null, -1)),
                e[6] || (e[6] = t("div", {
                  class: "text-xs text-black/50 whitespace-nowrap"
                }, " \u501F\u6B3E\u672C\u91D1(Mcoin) ", -1)),
                t("div", gt, l((_b = (_a = c.value) == null ? void 0 : _a.fmLoan) == null ? void 0 : _b.amount), 1),
                t("div", kt, [
                  t("div", wt, [
                    e[2] || (e[2] = t("div", {
                      class: "text-xs text-black/50"
                    }, "\u672A\u8FD8\u672C\u91D1(Mcoin)", -1)),
                    t("div", ht, l(n(r)(i.value)), 1)
                  ]),
                  t("div", It, [
                    e[3] || (e[3] = t("div", {
                      class: "text-xs text-black/50"
                    }, "\u5F53\u671F\u5229\u606F(Mcoin)", -1)),
                    t("div", Mt, l((_c = d.value) == null ? void 0 : _c.currentInterest), 1)
                  ])
                ])
              ]),
              t("div", Bt, [
                e[7] || (e[7] = t("div", {
                  class: "text-black/50 text-sm"
                }, "\u501F\u6B3E\u7F16\u53F7", -1)),
                t("div", Ft, "\u5148\u606F\u540E\u672C " + l(n(m)), 1)
              ]),
              t("div", At, [
                t("div", Lt, l(((_e = (_d = c.value) == null ? void 0 : _d.fmLoan) == null ? void 0 : _e.depositType) === 0 ? "\u8D28\u62BCMai" : "\u9501\u5B9ALP"), 1),
                t("div", Nt, l((_g = (_f = c.value) == null ? void 0 : _f.fmLoan) == null ? void 0 : _g.depositMai), 1)
              ]),
              t("div", Ct, [
                e[8] || (e[8] = t("div", {
                  class: "text-black/50 text-sm"
                }, "\u624B\u7EED\u8D39", -1)),
                t("div", Pt, " \u6536\u53D6\u5F52\u8FD8\u672C\u91D1" + l(n(u)(n(x).serviceFee_).times(100)) + "%\u7684\u624B\u7EED\u8D39 ", 1)
              ]),
              t("div", Rt, [
                (b(), A(Y, null, Z(10, (g) => t("div", {
                  key: g,
                  class: "w-5 h-5 bg-[#f2f0ef] rounded-full"
                })), 64))
              ])
            ]),
            t("div", {
              class: "bg-white rounded-xl px-4 pt-5 mt-2.5",
              style: tt({
                paddingBottom: y.value || "20px"
              })
            }, [
              e[10] || (e[10] = t("div", {
                class: "text-sm text-black"
              }, "\u8FD8\u6B3E\u672C\u91D1", -1)),
              t("div", Vt, [
                L(rt, {
                  ref_key: "repayRef",
                  ref: M,
                  modelValue: a.value,
                  "onUpdate:modelValue": e[0] || (e[0] = (g) => a.value = g),
                  max: n(r)(i.value),
                  class: "bg-[#FFF8EC] text-lg font-bold text-[#2E2008] flex-1",
                  placeholder: "0",
                  reg: /^\d+(\.\d{0,4})?$/
                }, null, 8, [
                  "modelValue",
                  "max"
                ]),
                t("div", {
                  class: "text-primary text-sm",
                  onClick: E
                }, "\u5168\u90E8\u8FD8\u6B3E")
              ]),
              t("div", Tt, [
                e[9] || (e[9] = N(" \u5B9E\u9645\u8FD8\u6B3E\u91D1\u989D")),
                t("span", Et, l(n(r)(S.value)) + "Mcoin", 1),
                N(" = \u8FD8\u6B3E\u672C\u91D1" + l(a.value || 0) + "Mcoin + \u63D0\u524D\u8FD8\u6B3E\u624B\u7EED\u8D39" + l(n(r)(B.value)) + "Mcoin ", 1)
              ])
            ], 4),
            t("div", jt, [
              a.value <= F.value ? (b(), C($, {
                key: 0,
                approveAmount: +a.value,
                disabled: !+a.value,
                classes: "btn-yellow flex-1 w-full",
                fallBack: O,
                token: n(w).MCOIN,
                contract: n(w).loan,
                loading: n(q),
                symbol: "MCOIN"
              }, {
                default: k(() => e[11] || (e[11] = [
                  t("span", null, "\u63D0\u524D\u8FD8\u6B3E", -1)
                ])),
                _: 1,
                __: [
                  11
                ]
              }, 8, [
                "approveAmount",
                "disabled",
                "token",
                "contract",
                "loading"
              ])) : (b(), C(G, {
                key: 1,
                round: "",
                class: "w-full btn-yellow",
                disabled: true
              }, {
                default: k(() => e[12] || (e[12] = [
                  t("span", null, "\u4F59\u989D\u4E0D\u8DB3", -1)
                ])),
                _: 1,
                __: [
                  12
                ]
              }))
            ])
          ])
        ]);
      };
    }
  });
});
export {
  __tla,
  Jt as default
};
