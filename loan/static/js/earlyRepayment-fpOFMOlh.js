import { _ as S, __tla as __tla_0 } from "./RepaymentPlan.vue_vue_type_script_setup_true_lang-7R7pyOPb.js";
import { _ as q, __tla as __tla_1 } from "./BackIcon-CdrC5To7.js";
import { d as A, r as l, q as E, k as M, o as z, c as P, g as r, e as m, w as O, t as V, F as $, n as H, p as j, f as G, z as d, i as f, m as J, aq as K, an as Q, __tla as __tla_2 } from "./index-CVQHjKiH.js";
import { _ as U, __tla as __tla_3 } from "./RepayItem.vue_vue_type_script_setup_true_lang-C23b9J81.js";
import { l as W, u as X, __tla as __tla_4 } from "./useLoan-BhqL0FVa.js";
import { b as I, __tla as __tla_5 } from "./loan-DUx-0XpN.js";
import { I as Y, __tla as __tla_6 } from "./index.es-CLwpJEin.js";
import { u as Z, __tla as __tla_7 } from "./index-Culc1QRb.js";
import { __tla as __tla_8 } from "./useType-GHSO8guk.js";
import { __tla as __tla_9 } from "./LoanMethodLabel.vue_vue_type_script_setup_true_lang-CaY1KaEz.js";
let _e;
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
  })()
]).then(async () => {
  let ee, te, ne, ae, oe, se;
  ee = {
    class: "bg-[#F2F0EF] h-full overflow-y-auto font-normal relative pb-[62px]"
  };
  te = {
    class: "sticky top-0 z-50 bg-white"
  };
  ne = {
    class: "flex items-center px-2.5 h-[44px]"
  };
  ae = {
    class: "p-4"
  };
  oe = {
    class: "text-sm"
  };
  se = {
    class: "mt-2.5"
  };
  _e = A({
    __name: "earlyRepayment",
    setup(le) {
      const { calcRepayAmount: w, currentDay: L } = W(), { checkOverdue: T, repaymentDays: x } = X(), y = M(), F = async (t) => {
        const e = await w(t.loanId);
        if (Number(K(e.result[1])) || t.interestType === Y.PrincipalAndInterest) {
          Q("\u3010\u8FD130\u65E0\u8FD8\u6B3E/\u5F53\u671F\u8FD8\u6B3E\u65E0\u5229\u606F/\u975E\u8FD8\u672C\u4ED8\u606F\u3011\u7684\u501F\u6B3E\u624D\u5141\u8BB8\u63D0\u524D\u8FD8\u6B3E");
          return;
        }
        y.push("/loan-earlyRepayment/detail?id=" + t.loanId);
      }, [b, v] = Z(), a = l(null), c = l(null), u = l(null), B = async (t) => {
        var _a, _b, _c, _d, _e2, _f, _g;
        const { data: e, success: s } = await I({
          loanId: t.loanId || 0
        });
        s && (a.value = (_a = e == null ? void 0 : e.loanDtos[0]) == null ? void 0 : _a.planList, c.value = (_b = e == null ? void 0 : e.loanDtos[0]) == null ? void 0 : _b.curPlan, u.value = {
          ...(_c = e == null ? void 0 : e.loanDtos[0]) == null ? void 0 : _c.fmLoan,
          totalInterest: (_d = e == null ? void 0 : e.loanDtos[0]) == null ? void 0 : _d.totalInterest,
          totalManageFee: (_e2 = e == null ? void 0 : e.loanDtos[0]) == null ? void 0 : _e2.totalManageFee
        }, (_f = a.value) == null ? void 0 : _f.forEach((o, n) => (o.period === t.period && (o.status = t.overdueStatus > 1 ? 3 : t.status), o)), ((_g = a.value) == null ? void 0 : _g.length) > 0 && v(true));
      }, D = () => {
        c.value = null, u.value = null, a.value = null, v(false);
      }, k = E(() => {
        var _a;
        return (_a = a.value) == null ? void 0 : _a.filter((t) => t.status !== 2).length;
      }), _ = l(null), C = async () => {
        _.value = await L();
      }, p = l([]), h = l(false), g = async () => {
        var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j;
        h.value = true;
        const { success: t, data: e } = await I({
          queryType: 2
        });
        if (h.value = false, t) {
          const s = [];
          for (let o = 0; o < e.loanDtos.length; o++) {
            const n = e.loanDtos[o], i = {
              ...n.curPlan,
              surplusAmount: (_a = n.fmLoan) == null ? void 0 : _a.surplusAmount,
              amount: (_b = n.fmLoan) == null ? void 0 : _b.amount,
              interestType: (_c = n.fmLoan) == null ? void 0 : _c.interestType,
              repayDays: x(n.curPlan.repayTime, _.value),
              overdueInfo: await T(n.curPlan.loanId),
              TotalCount: ((_d = n.fmLoan) == null ? void 0 : _d.cycle) > 30 ? ((_e2 = n.fmLoan) == null ? void 0 : _e2.cycle) / 30 : 1,
              payment: +new d((_f = n.curPlan) == null ? void 0 : _f.principal).plus((_g = n.curPlan) == null ? void 0 : _g.manageFee).plus((_h = n.curPlan) == null ? void 0 : _h.interest),
              title: (_i = n.fmLoan) == null ? void 0 : _i.title,
              orderNo: (_j = n.fmLoan) == null ? void 0 : _j.orderNo
            };
            s.push(i);
          }
          p.value = s;
        }
      }, N = () => {
        var _a;
        return (_a = a.value) == null ? void 0 : _a.reduce((t, e) => d(t).plus(e.principal).plus(e.interest).plus(e.manageFee).toString(), 0);
      }, R = () => {
        var _a;
        return (_a = a.value) == null ? void 0 : _a.reduce((t, e) => d(t).plus(e.interest).plus(e.manageFee).toString(), 0);
      };
      return y.beforeEach((t, e) => {
        var _a;
        e.path === "/loan-earlyRepayment/detail" && t.path === "/loan-earlyRepayment" && ((_a = e.params) == null ? void 0 : _a.refresh) && g();
      }), z(async () => {
        await C(), g();
      }), (t, e) => {
        var _a, _b, _c, _d;
        const s = q, o = j("router-view"), n = S;
        return f(), P("div", ee, [
          r("div", te, [
            r("div", ne, [
              m(s, null, {
                default: O(() => e[0] || (e[0] = [
                  r("div", {
                    class: "font-semibold text-sm"
                  }, "\u63D0\u524D\u8FD8\u6B3E", -1)
                ])),
                _: 1,
                __: [
                  0
                ]
              })
            ])
          ]),
          r("div", ae, [
            r("div", oe, "\u5171" + V(p.value.length) + "\u6761\u7B26\u5408\u6761\u4EF6\u7684\u8BB0\u5F55", 1),
            r("div", se, [
              (f(true), P($, null, H(p.value, (i) => (f(), J(U, {
                key: i.id,
                data: i,
                early: true,
                onHandleTo: F,
                onOpen: B
              }, null, 8, [
                "data"
              ]))), 128))
            ])
          ]),
          m(o, {
            class: "child-view"
          }),
          m(n, {
            show: G(b),
            "repay-method": (_a = u.value) == null ? void 0 : _a.interestType,
            payments: a.value,
            principal: (_b = u.value) == null ? void 0 : _b.amount,
            interest: R(),
            periods: (_c = a.value) == null ? void 0 : _c.length,
            total: N(),
            loanInfo: u.value,
            remainPeriod: k.value,
            "current-period": (_d = c.value) == null ? void 0 : _d.period,
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
});
export {
  __tla,
  _e as default
};
