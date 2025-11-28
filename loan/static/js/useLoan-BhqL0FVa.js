import { u as h, g as W, __tla as __tla_0 } from "./index.es-CLwpJEin.js";
import { aW as K, aX as d, aK as o, aS as u, ar as i, aR as A, aI as k, aq as l, q as X, z as w, __tla as __tla_1 } from "./index-CVQHjKiH.js";
let j, Q;
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
  j = () => {
    const n = K();
    return {
      currentDay: async () => {
        try {
          const t = await n.currentDay();
          return Number(t);
        } catch {
          return 0;
        }
      },
      DAY_SECOND: async () => {
        try {
          const t = await n.DAY_SECOND();
          return Number(t);
        } catch {
          return 864e5;
        }
      },
      MONTH: async () => {
        try {
          const t = await n.MONTH();
          return Number(t);
        } catch {
          return 30;
        }
      },
      calcOverdueInterest: async (t) => {
        try {
          const e = await n.calcOverdueInterest(t);
          return Number(l(e));
        } catch {
          return 0;
        }
      },
      calcRepayAmount: async (t) => {
        try {
          const e = await n.calcRepayAmount(t);
          return o(e);
        } catch (e) {
          return u(e), i(e);
        }
      },
      getParams: async () => {
        try {
          const t = await n.getParams();
          return o(t);
        } catch (t) {
          return u(t), i(t);
        }
      },
      releaseLoan: async (t, e, s, g, C, b, D) => {
        try {
          const y = await (await n.releaseLoan(A(t), A(e), s, g, A(C), b, D, d)).wait();
          return o(y);
        } catch (y) {
          return u(y), i(y);
        }
      },
      getUserLoans: async (t) => {
        var _a;
        const e = t || ((_a = k()) == null ? void 0 : _a.getCurrentAccount());
        try {
          const s = await n.getUserLoans(e);
          return o(s);
        } catch (s) {
          return u(s), i(s);
        }
      },
      loans: async (t) => {
        try {
          const e = await n.loans(t);
          return o(e);
        } catch (e) {
          return u(e), i(e);
        }
      },
      loanHandler: async (t) => {
        try {
          const e = await (await n.loanHandler(t, d)).wait();
          return o(e);
        } catch (e) {
          return u(e), i(e);
        }
      },
      repayPrincipal: async (t, e) => {
        try {
          const s = await (await n.repayPrincipal(t, A(e), d)).wait();
          return o(s);
        } catch (s) {
          return u(s), i(s);
        }
      },
      repay: async (t) => {
        try {
          const e = await (await n.repay(t, d)).wait();
          return o(e);
        } catch (e) {
          return u(e), i(e);
        }
      },
      cancel: async (t) => {
        try {
          const e = await (await n.cancel(t, d)).wait();
          return o(e);
        } catch (e) {
          return u(e), i(e);
        }
      },
      repayBatch: async (t) => {
        try {
          const e = await (await n.repayBatch(t, d)).wait();
          return o(e);
        } catch (e) {
          return u(e), i(e);
        }
      }
    };
  };
  Q = function() {
    const { getParams: n, getUserLoans: L, loans: T, MONTH: R, DAY_SECOND: _, currentDay: B, calcOverdueInterest: S } = j(), { getCurrentAccount: P } = k(), m = X(() => !!P()), H = async () => {
      const c = await Promise.all([
        n()
      ]);
      return {
        serviceFee_: l(c[0].result[0]).toString(),
        managementFee_: l(c[0].result[1]).toString()
      };
    }, { data: N, loading: U, refreshAsync: x } = h(H, {
      initialData: {
        serviceFee_: "",
        managementFee_: ""
      },
      ready: m
    }), { data: F, loading: M, refreshAsync: t } = h(L, {
      defaultParams: [
        P()
      ],
      initialData: [],
      ready: m
    }), { data: e } = h(R, {
      initialData: 0,
      ready: m
    }), { data: s } = h(_, {
      initialData: 0,
      ready: m
    }), { data: g } = h(B, {
      initialData: 0,
      ready: m
    }), C = async (c) => {
      var _a;
      const a = await T(c), r = {
        id: c,
        amount: l(a.result[0]),
        originalAmount: l(a.result[1]),
        paidAmount: l(a.result[2]),
        depositMai: l(a.result[3]),
        unlockedLp: l(a.result[4]),
        nextPaymentTime: Number(a.result[5]) * 1e3,
        annualizedInterestRate: +l(a.result[6]) / 100,
        releaser: a.result[7],
        loaner: a.result[8],
        interestType: Number(a.result[9]),
        paidCount: Number(a.result[10]),
        cycle: Number(a.result[11]),
        depositType: Number(a.result[12])
      };
      return r.currentCount = r.paidCount + 1, r.TotalCount = r.cycle > 30 ? r.cycle / 30 : 1, r.amountInfo = W(r.interestType, r.originalAmount, r.annualizedInterestRate, r.cycle, N.value.managementFee_), r.repayDays = D(Number(a.result[3]), g.value), r.overdueInfo = await y(c), r.currentTime = g.value * 1e3, r.status = ((_a = r.overdueInfo) == null ? void 0 : _a.isOverdue) ? 3 : 1, r;
    }, b = async () => {
      const c = [], { success: a, result: r } = await L();
      if (!a) return [];
      for (var f in r) {
        const v = Number(r[f]), p = await C(v);
        c.push(p);
      }
      let q = 0, E = 0, Y = 0, z = 0;
      for (let v = 0; v < c.length; v++) {
        const p = c[v];
        for (let I = p.paidCount; I < p.amountInfo.length; I++) {
          const O = p.amountInfo[I];
          I === p.paidCount && (q += +O.payment, +O.payment > 0 && (E += 1)), Y += +O.payment, +O.payment > 0 && (z += 1);
        }
      }
      return {
        repayAmount: q,
        repayCount: E,
        remainAmount: Y,
        remainCount: z,
        loanBills: c
      };
    }, D = (c, a) => {
      const r = c, f = a;
      return f > r ? {
        days: +w(f || 0).minus(r || 0).div(s.value).plus(1) || 0,
        isOverdue: true
      } : {
        days: +w(r).minus(f || 0).div(s.value) || 0,
        isOverdue: false
      };
    }, y = async (c) => {
      const a = await S(c);
      return w(a) > w(0) ? {
        isOverdue: true,
        overdueInterest: +new w(a).plus(+new w(a).times(N.value.managementFee_)),
        status: 3
      } : {
        isOverdue: false,
        overdueInterest: 0,
        status: 1
      };
    };
    return {
      getLoanBills: b,
      month: e,
      daySecond: s,
      currentTime: g,
      loanParams: N,
      paramsLoading: U,
      loanById: C,
      repaymentDays: D,
      checkOverdue: y,
      refreshAsync: x,
      userLoans: F,
      loading: M,
      refreshUserLoans: t
    };
  };
});
export {
  __tla,
  j as l,
  Q as u
};
