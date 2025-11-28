import { T as he, d as U, q as z, z as L, x as F, m as k, w as g, g as t, ak as K, e as y, J as ae, c as m, F as le, n as re, B as ie, ai as ue, i as s, E as M, t as w, C as J, aF as te, I as Ce, r as f, a as Ie, o as Pe, L as Be, f as d, b as O, h as oe, k as Le, H as ne, _ as Fe, __tla as __tla_0 } from "./index-CVQHjKiH.js";
import { _ as $e, __tla as __tla_1 } from "./RepaymentPlan.vue_vue_type_script_setup_true_lang-7R7pyOPb.js";
import { a as Ae, C as ze, __tla as __tla_2 } from "./index-DzuQWI3K.js";
import { _ as Te, __tla as __tla_3 } from "./Empty.vue_vue_type_script_setup_true_lang-DHv6J42C.js";
import { _ as Ee, __tla as __tla_4 } from "./BackIcon-CdrC5To7.js";
import { _ as Oe, __tla as __tla_5 } from "./RepayItem.vue_vue_type_script_setup_true_lang-C23b9J81.js";
import { u as De, l as Me, __tla as __tla_6 } from "./useLoan-BhqL0FVa.js";
import { _ as Re, __tla as __tla_7 } from "./ApproveButton-Dic8X4Em.js";
import { b as se, __tla as __tla_8 } from "./loan-DUx-0XpN.js";
import { u as D, __tla as __tla_9 } from "./index-Culc1QRb.js";
import { __tla as __tla_10 } from "./useType-GHSO8guk.js";
import { __tla as __tla_11 } from "./index.es-CLwpJEin.js";
import { __tla as __tla_12 } from "./LoanMethodLabel.vue_vue_type_script_setup_true_lang-CaY1KaEz.js";
import { __tla as __tla_13 } from "./erc20Contract-DFn00mXD.js";
let zt;
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
  })(),
  (() => {
    try {
      return __tla_11;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_12;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_13;
    } catch {
    }
  })()
]).then(async () => {
  let Ve, Ne, Se, je, qe, He, Ge, Je, Ue, Ke, Qe, We, Xe, Ye, Ze, et, tt, ot, nt, st, at, lt, rt, it, ut, dt, pt, ct, mt, vt, ft, yt, _t;
  Ve = he(Ae);
  Ne = {
    class: "w-full h-[100%] px-4 rounded-xl bg-[#F5F5F5] overflow-hidden"
  };
  Se = {
    class: "h-[53px] flex items-center justify-center relative"
  };
  je = {
    class: "bg-white rounded-xl px-4"
  };
  qe = {
    class: "text-black/50 text-sm"
  };
  He = {
    class: "text-sm font-semibold"
  };
  Ge = {
    class: "pb-5 pt-4"
  };
  Je = U({
    __name: "OverduePaymentPop",
    props: {
      show: {
        type: Boolean
      },
      info: {},
      repayLoading: {
        type: Boolean
      },
      overdueInterest: {}
    },
    emits: [
      "close",
      "repayOverdue"
    ],
    setup(R, { emit: C }) {
      const l = R, a = C;
      z(() => {
        var _a, _b;
        return (_b = (_a = l.info) == null ? void 0 : _a.amountInfo) == null ? void 0 : _b.find((h) => {
          var _a2;
          return h.period === ((_a2 = l.info) == null ? void 0 : _a2.currentCount);
        });
      });
      const v = z(() => {
        var _a, _b;
        return L((_a = l.info) == null ? void 0 : _a.interest).plus((_b = l.info) == null ? void 0 : _b.manageFee);
      }), I = z(() => {
        var _a, _b, _c, _d;
        return [
          {
            id: 1,
            label: "\u671F\u6570",
            value: "\u7B2C" + ((_a = l.info) == null ? void 0 : _a.period) + "\u671F"
          },
          {
            id: 2,
            label: "\u672C\u91D1",
            value: F((_b = l.info) == null ? void 0 : _b.principal) + "Mcoin"
          },
          {
            id: 3,
            label: "\u5229\u606F\uFF08\u542B\u7BA1\u7406\u8D39\uFF09",
            value: F(v.value) + "Mcoin"
          },
          {
            id: 4,
            label: "\u903E\u671F\u5229\u7387",
            value: L((_c = l.info) == null ? void 0 : _c.annualizedInterestRate).times(100) + "%"
          },
          {
            id: 5,
            label: "\u903E\u671F\u5229\u606F\uFF08\u542B\u7BA1\u7406\u8D39\uFF09",
            value: F((_d = l.info) == null ? void 0 : _d.overdueInterest) + "Mcoin"
          }
        ];
      }), $ = () => {
        a("repayOverdue");
      };
      return (h, r) => {
        const V = ae, T = ie, N = ue;
        return s(), k(N, {
          show: h.show,
          teleport: "body",
          "close-on-click-overlay": true,
          "z-index": "9999999",
          style: {
            background: "transparent",
            "min-width": "280px",
            "max-width": "335px",
            width: "90%"
          },
          onClose: r[1] || (r[1] = () => a("close"))
        }, {
          default: g(() => [
            t("div", Ne, [
              t("div", Se, [
                r[2] || (r[2] = t("div", {
                  class: "text-base font-semibold text-[#2E2008]"
                }, "\u903E\u671F\u8FD8\u6E05", -1)),
                t("div", {
                  class: "absolute flex right-4 top-1/2 -translate-y-1/2",
                  onClick: r[0] || (r[0] = K(() => a("close"), [
                    "stop"
                  ]))
                }, [
                  y(V, {
                    size: "22",
                    name: "cross",
                    color: "#000"
                  })
                ])
              ]),
              t("div", je, [
                (s(true), m(le, null, re(I.value, (P, E) => (s(), m("div", {
                  key: E,
                  class: M([
                    "flex items-center justify-between py-4",
                    {
                      "border-b border-black/10": E !== I.value.length - 1
                    }
                  ])
                }, [
                  t("div", qe, w(P.label), 1),
                  t("div", He, w(P.value), 1)
                ], 2))), 128))
              ]),
              r[4] || (r[4] = t("div", {
                class: "pt-4 text-xs text-black/50"
              }, " *\u5B58\u5728\u591A\u671F\u903E\u671F\u65F6\uFF0C\u9700\u9010\u671F\u5F52\u8FD8\u903E\u671F\u5229\u606F ", -1)),
              r[5] || (r[5] = t("div", {
                class: "text-xs text-black/50"
              }, " *\u903E\u671F\u8FD8\u6B3E\u91D1\u989D=\u903E\u671F\u672C\u91D1+\u57FA\u7840\u5229\u606F+\u57FA\u7840\u5229\u606F\u7BA1\u7406\u8D39+\u903E\u671F\u5229\u606F+\u903E\u671F\u5229\u606F\u7BA1\u7406\u8D39 ", -1)),
              t("div", Ge, [
                y(T, {
                  round: "",
                  color: "#FED73A",
                  block: "",
                  loading: h.repayLoading,
                  class: "h-[48px]",
                  onClick: $
                }, {
                  default: g(() => r[3] || (r[3] = [
                    t("span", {
                      class: "text-black font-semibold"
                    }, "\u903E\u671F\u7ED3\u6E05", -1)
                  ])),
                  _: 1,
                  __: [
                    3
                  ]
                }, 8, [
                  "loading"
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, [
          "show"
        ]);
      };
    }
  });
  Ue = {
    class: "w-full h-[100%] rounded-xl p-5 bg-[#FEFFF9] overflow-hidden"
  };
  Ke = {
    class: "flex items-center text-sm"
  };
  Qe = {
    key: 0,
    class: "font-bold"
  };
  We = U({
    __name: "CommonPop",
    props: {
      show: {
        type: Boolean
      },
      name: {},
      width: {},
      noClose: {
        type: Boolean
      },
      noHeader: {
        type: Boolean
      },
      noBorder: {
        type: Boolean
      },
      position: {
        default: "center"
      }
    },
    emits: [
      "close",
      "open"
    ],
    setup(R, { emit: C }) {
      const l = C;
      return (a, v) => {
        const I = ae, $ = ue;
        return s(), k($, {
          show: a.show,
          teleport: "body",
          position: a.position,
          "close-on-click-overlay": true,
          onOpen: v[1] || (v[1] = () => l("open")),
          onClose: v[2] || (v[2] = () => l("close")),
          "z-index": "9999999",
          style: Ce([
            {
              background: "transparent",
              "min-width": "280px",
              "max-width": "335px"
            },
            {
              width: a.width || "80%"
            }
          ])
        }, {
          default: g(() => [
            t("div", Ue, [
              a.noHeader ? J("", true) : (s(), m("div", {
                key: 0,
                class: M([
                  a.noBorder ? "" : "border-b border-solid border-[#E1E1E1]",
                  "flex justify-between items-center pb-2.5"
                ])
              }, [
                t("div", Ke, [
                  a.name ? (s(), m("span", Qe, w(a.name), 1)) : J("", true),
                  te(a.$slots, "header")
                ]),
                a.noClose ? J("", true) : (s(), k(I, {
                  key: 0,
                  name: "cross",
                  color: "#000",
                  onClick: v[0] || (v[0] = K(() => l("close"), [
                    "stop"
                  ]))
                }))
              ], 2)),
              te(a.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, [
          "show",
          "position",
          "style"
        ]);
      };
    }
  });
  Xe = {
    class: "bg-[#F2F0EF] h-full overflow-y-auto font-normal relative pb-[62px]"
  };
  Ye = {
    class: "sticky top-0 z-50 bg-white"
  };
  Ze = {
    class: "flex items-center px-2.5 h-[44px]"
  };
  et = {
    key: 1
  };
  tt = {
    class: "p-4"
  };
  ot = {
    class: "linear-box py-5 px-4 rounded-xl"
  };
  nt = {
    class: "pb-4 border-b border-black/20"
  };
  st = {
    key: 1,
    class: "text-2xl font-semibold"
  };
  at = {
    class: "text-black/70 text-sm ml-auto flex items-center"
  };
  lt = {
    key: 1
  };
  rt = {
    class: "pt-4"
  };
  it = {
    key: 1,
    class: "text-2xl font-semibold"
  };
  ut = {
    class: "text-black/70 text-sm ml-auto flex items-center"
  };
  dt = {
    key: 1
  };
  pt = {
    class: "mt-4"
  };
  ct = {
    class: "fixed px-4 bottom-0 left-0 h-[62px] w-full bg-white flex justify-between items-center"
  };
  mt = {
    class: "text-xl font-semibold"
  };
  vt = {
    class: "text-[#87837E] text-xs"
  };
  ft = {
    class: "ml-auto"
  };
  yt = {
    class: "mt-6 text-center"
  };
  _t = U({
    __name: "index",
    setup(R) {
      const { checkOverdue: C, repaymentDays: l } = De(), { repayBatch: a, repay: v, currentDay: I } = Me(), [$, h] = D(false), r = Le(), [V, T] = D(false), [N, P] = D(false), [E, S] = D(false), u = f([]), Q = f([]), de = (o) => {
        Q.value[o].toggle();
      }, W = z(() => {
        let o = [];
        for (var e in u.value) o.push(u.value[e]);
        return o.reduce((i, c) => L(i).plus(c.payment).toString(), 0);
      }), pe = (o) => {
        r.push(o);
      }, _ = Ie({
        repayAmount: 0,
        repayCount: 0,
        remainAmount: 0,
        remainCount: 0
      }), X = f(null), ce = async () => {
        X.value = await I();
      }, Y = f([]), p = f(false), j = async () => {
        var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l;
        p.value = true;
        const { success: o, data: e } = await se({
          queryType: 1
        });
        if (p.value = false, o) {
          _.repayAmount = e.recent30Amount, _.repayCount = e.recent30Count, _.remainAmount = e.remainAmount, _.remainCount = e.remainCount;
          const i = [];
          for (let c = 0; c < e.loanDtos.length; c++) {
            const n = e.loanDtos[c], G = {
              ...n.curPlan,
              surplusAmount: (_a = n.fmLoan) == null ? void 0 : _a.surplusAmount,
              amount: (_b = n.fmLoan) == null ? void 0 : _b.amount,
              interestType: (_c = n.fmLoan) == null ? void 0 : _c.interestType,
              repayDays: await l((_d = n.curPlan) == null ? void 0 : _d.repayTime, X.value),
              annualizedInterestRate: (_e2 = n.fmLoan) == null ? void 0 : _e2.annualizedInterestRate,
              overdueInfo: await C(n.curPlan.loanId),
              TotalCount: ((_f = n.fmLoan) == null ? void 0 : _f.cycle) > 30 ? ((_g = n.fmLoan) == null ? void 0 : _g.cycle) / 30 : 1,
              payment: +new L((_h = n.curPlan) == null ? void 0 : _h.principal).plus((_i = n.curPlan) == null ? void 0 : _i.manageFee).plus((_j = n.curPlan) == null ? void 0 : _j.interest),
              title: (_k = n.fmLoan) == null ? void 0 : _k.title,
              orderNo: (_l = n.fmLoan) == null ? void 0 : _l.orderNo
            };
            i.push(G);
          }
          Y.value = i;
        }
      }, q = f(null), B = f(false), me = async () => {
        B.value = true;
        const o = u.value.findIndex((i) => {
          var _a;
          return ((_a = i.overdueInfo) == null ? void 0 : _a.status) === 3;
        });
        if (u.value.length > 1 && o > -1) {
          P(true), B.value = false;
          return;
        }
        if (o > -1) {
          q.value = {
            ...u.value[o],
            overdueInterest: (await C(u.value[o].loanId)).overdueInterest
          }, S(true), B.value = false;
          return;
        }
        const e = u.value.map((i) => i.loanId);
        try {
          const { success: i } = await a(e);
          i && (u.value = [], ne("success", "\u8FD8\u6B3E\u6210\u529F"), j());
        } catch {
          B.value = false;
        }
        B.value = false;
      }, ve = () => {
        var _a;
        return (_a = x.value) == null ? void 0 : _a.reduce((o, e) => L(o).plus(e.principal).plus(e.interest).plus(e.manageFee).toString(), 0);
      }, fe = () => {
        var _a;
        return (_a = x.value) == null ? void 0 : _a.reduce((o, e) => L(o).plus(e.interest).plus(e.manageFee).toString(), 0);
      }, A = f(null), x = f(null), H = f(null), ye = async (o) => {
        var _a, _b, _c, _d, _e2, _f, _g;
        const { data: e, success: i } = await se({
          loanId: o.loanId || 0
        });
        i && (x.value = (_a = e == null ? void 0 : e.loanDtos[0]) == null ? void 0 : _a.planList, H.value = (_b = e == null ? void 0 : e.loanDtos[0]) == null ? void 0 : _b.curPlan, A.value = {
          ...(_c = e == null ? void 0 : e.loanDtos[0]) == null ? void 0 : _c.fmLoan,
          totalInterest: (_d = e == null ? void 0 : e.loanDtos[0]) == null ? void 0 : _d.totalInterest,
          totalManageFee: (_e2 = e == null ? void 0 : e.loanDtos[0]) == null ? void 0 : _e2.totalManageFee
        }, (_f = x.value) == null ? void 0 : _f.forEach((c, n) => {
          var _a2;
          return c.period === o.period && (c.status = ((_a2 = o.overdueInfo) == null ? void 0 : _a2.status) > 1 ? 3 : o.status), c;
        }), ((_g = x.value) == null ? void 0 : _g.length) > 0 && T(true));
      }, _e = z(() => {
        var _a;
        return (_a = x.value) == null ? void 0 : _a.filter((o) => o.status !== 2).length;
      }), xe = async () => {
        var _a;
        h(true);
        try {
          (await v((_a = q.value) == null ? void 0 : _a.loanId)).success && (h(false), S(false), ne("success", "\u8FD8\u6B3E\u6210\u529F"), j(), u.value = []);
        } catch {
          h(false);
        }
      }, be = () => {
        H.value = null, A.value = null, x.value = null, T(false);
      };
      return Pe(async () => {
        await ce(), j();
      }), (o, e) => {
        var _a, _b, _c, _d;
        const i = Ee, c = Te, n = Be, G = ze, ke = Ve, ge = $e, we = ie;
        return s(), m("div", Xe, [
          t("div", Ye, [
            t("div", Ze, [
              y(i, null, {
                default: g(() => e[6] || (e[6] = [
                  t("div", {
                    class: "font-semibold text-sm"
                  }, "\u6211\u8981\u8FD8\u6B3E", -1)
                ])),
                _: 1,
                __: [
                  6
                ]
              }),
              t("div", {
                class: "ml-auto",
                onClick: e[0] || (e[0] = (b) => pe("/loan-record"))
              }, "\u8BB0\u5F55")
            ])
          ]),
          !p.value && !_.repayAmount ? (s(), k(c, {
            key: 0,
            name: "\u6682\u65E0\u8BB0\u5F55"
          })) : (s(), m("div", et, [
            t("div", tt, [
              t("div", ot, [
                t("div", nt, [
                  e[10] || (e[10] = t("div", {
                    class: "text-sm text-black/50"
                  }, "\u6700\u8FD130\u5929\u5E94\u8FD8\uFF08\u542B\u672C\u606F\uFF09", -1)),
                  t("div", {
                    class: M([
                      "flex mt-0.5",
                      {
                        " items-center ": p.value,
                        " items-baseline": !p.value
                      }
                    ])
                  }, [
                    p.value ? (s(), k(n, {
                      key: 0,
                      size: "24"
                    })) : (s(), m("span", st, w(d(F)(_.repayAmount) || 0), 1)),
                    e[9] || (e[9] = t("span", {
                      class: "text-sm ml-1"
                    }, "Mcoin", -1)),
                    t("span", at, [
                      e[7] || (e[7] = O("\u5171 ")),
                      p.value ? (s(), k(n, {
                        key: 0,
                        size: "16"
                      })) : (s(), m("span", lt, w(_.repayCount || 0), 1)),
                      e[8] || (e[8] = O(" \u7B14\u5F85\u8FD8"))
                    ])
                  ], 2)
                ]),
                t("div", rt, [
                  e[14] || (e[14] = t("div", {
                    class: "text-sm text-black/50"
                  }, "\u5269\u4F59\u5E94\u8FD8\uFF08\u542B\u672C\u606F\uFF09", -1)),
                  t("div", {
                    class: M([
                      "flex mt-0.5",
                      {
                        " items-center ": p.value,
                        " items-baseline": !p.value
                      }
                    ])
                  }, [
                    p.value ? (s(), k(n, {
                      key: 0,
                      size: "24"
                    })) : (s(), m("span", it, w(d(F)(_.remainAmount) || 0), 1)),
                    e[13] || (e[13] = t("span", {
                      class: "text-sm ml-1"
                    }, "Mcoin", -1)),
                    t("span", ut, [
                      e[11] || (e[11] = O("\u5171 ")),
                      p.value ? (s(), k(n, {
                        key: 0,
                        size: "16"
                      })) : (s(), m("span", dt, w(_.remainCount || 0), 1)),
                      e[12] || (e[12] = O(" \u7B14\u5F85\u8FD8"))
                    ])
                  ], 2)
                ])
              ]),
              t("div", pt, [
                y(ke, {
                  modelValue: u.value,
                  "onUpdate:modelValue": e[2] || (e[2] = (b) => u.value = b)
                }, {
                  default: g(() => [
                    (s(true), m(le, null, re(Y.value, (b, Z) => (s(), k(Oe, {
                      key: b.id,
                      data: b,
                      onOpen: ye
                    }, {
                      default: g(() => [
                        y(G, {
                          ref_for: true,
                          ref: (ee) => Q.value[Z] = ee,
                          class: "mr-2.5",
                          "checked-color": "#FEA021",
                          "icon-size": "16",
                          name: b,
                          onClick: [
                            (ee) => de(Z),
                            e[1] || (e[1] = K(() => {
                            }, [
                              "stop"
                            ]))
                          ]
                        }, null, 8, [
                          "name",
                          "onClick"
                        ])
                      ]),
                      _: 2
                    }, 1032, [
                      "data"
                    ]))), 128))
                  ]),
                  _: 1
                }, 8, [
                  "modelValue"
                ])
              ])
            ]),
            t("div", ct, [
              t("div", null, [
                t("div", mt, w(d(F)(W.value)) + " Mcoin ", 1),
                t("div", vt, "\u5DF2\u9009" + w(u.value.length) + "\u7B14", 1)
              ]),
              t("div", ft, [
                y(Re, {
                  disabled: u.value.length == 0,
                  loading: B.value,
                  approveAmount: +W.value,
                  contract: d(oe).loan,
                  token: d(oe).MCOIN,
                  fallBack: me,
                  style: {
                    background: "#fed73a"
                  },
                  class: "min-w-[120px]"
                }, {
                  default: g(() => e[15] || (e[15] = [
                    t("span", {
                      class: "text-black font-semibold px-8"
                    }, " \u786E\u8BA4\u8FD8\u6B3E ", -1)
                  ])),
                  _: 1,
                  __: [
                    15
                  ]
                }, 8, [
                  "disabled",
                  "loading",
                  "approveAmount",
                  "contract",
                  "token"
                ])
              ])
            ])
          ])),
          y(ge, {
            show: d(V),
            "repay-method": (_a = A.value) == null ? void 0 : _a.interestType,
            payments: x.value,
            principal: (_b = A.value) == null ? void 0 : _b.amount,
            loanInfo: A.value,
            interest: fe(),
            periods: (_c = x.value) == null ? void 0 : _c.length,
            total: ve(),
            remainPeriod: _e.value,
            "current-period": (_d = H.value) == null ? void 0 : _d.period,
            onClose: be
          }, null, 8, [
            "show",
            "repay-method",
            "payments",
            "principal",
            "loanInfo",
            "interest",
            "periods",
            "total",
            "remainPeriod",
            "current-period"
          ]),
          y(We, {
            show: d(N),
            noBorder: true,
            width: "85%",
            onClose: e[4] || (e[4] = (b) => d(P)(false))
          }, {
            default: g(() => [
              e[17] || (e[17] = t("div", {
                class: "text-center text-sm"
              }, [
                t("p", null, "\u5F53\u524D\u9009\u4E2D\u5305\u542B\u903E\u671F\u8FD8\u6B3E"),
                t("p", null, "\u903E\u671F\u90E8\u5206\u9700\u5355\u72EC\u8FD8\u6B3E")
              ], -1)),
              t("div", yt, [
                y(we, {
                  round: "",
                  color: "#FED73A",
                  class: "px-8 min-w-[160px]",
                  onClick: e[3] || (e[3] = (b) => d(P)(false))
                }, {
                  default: g(() => e[16] || (e[16] = [
                    t("span", {
                      class: "text-black font-semibold px-5"
                    }, "\u786E\u8BA4", -1)
                  ])),
                  _: 1,
                  __: [
                    16
                  ]
                })
              ])
            ]),
            _: 1,
            __: [
              17
            ]
          }, 8, [
            "show"
          ]),
          y(Je, {
            info: q.value,
            repayLoading: d($),
            show: d(E),
            onClose: e[5] || (e[5] = (b) => d(S)(false)),
            onRepayOverdue: xe
          }, null, 8, [
            "info",
            "repayLoading",
            "show"
          ])
        ]);
      };
    }
  });
  zt = Fe(_t, [
    [
      "__scopeId",
      "data-v-a71ac52f"
    ]
  ]);
});
export {
  __tla,
  zt as default
};
