import { _ as te, __tla as __tla_0 } from "./RepaymentPlan.vue_vue_type_script_setup_true_lang-7R7pyOPb.js";
import { _ as ae, __tla as __tla_1 } from "./RightPop.vue_vue_type_script_setup_true_lang-B1_7GVJX.js";
import { d as z, q as R, c as v, i as u, I as ne, f as l, t as p, g as n, e as i, J as se, C as B, z as w, x as oe, v as le, r as _, a as re, o as ie, m as E, w as g, K as ue, F as de, n as ce, b as pe, L as me, B as fe, M as N, k as ve, _ as ye, __tla as __tla_2 } from "./index-CVQHjKiH.js";
import { u as _e, l as ge, __tla as __tla_3 } from "./useLoan-BhqL0FVa.js";
import { _ as be, __tla as __tla_4 } from "./BackIcon-CdrC5To7.js";
import { _ as xe, __tla as __tla_5 } from "./Empty.vue_vue_type_script_setup_true_lang-DHv6J42C.js";
import { i as F, __tla as __tla_6 } from "./useType-GHSO8guk.js";
import { _ as he, __tla as __tla_7 } from "./LoanMethodLabel.vue_vue_type_script_setup_true_lang-CaY1KaEz.js";
import { b as j, __tla as __tla_8 } from "./loan-DUx-0XpN.js";
import { S as we, __tla as __tla_9 } from "./index-CTBrWdf5.js";
import { u as M, __tla as __tla_10 } from "./index-Culc1QRb.js";
import { __tla as __tla_11 } from "./index.es-CLwpJEin.js";
let nt;
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
  })()
]).then(async () => {
  let ke, Te, Ie, Le, Pe, Ce, $e, De, Se, Fe, Re, Be, ze, Ee, Ne, je, Me, Ve, Ae, qe, Oe;
  ke = z({
    __name: "InvestmentStatusLabel",
    props: {
      info: {},
      currentTime: {}
    },
    setup(k) {
      const a = k, o = R(() => {
        var _a, _b, _c;
        return a.info ? ((_a = a.info) == null ? void 0 : _a.status) === 1 ? a.currentTime > ((_b = a.info) == null ? void 0 : _b.repayTime) ? 3 : 1 : (_c = a.info) == null ? void 0 : _c.status : "";
      });
      return (x, y) => {
        var _a, _b, _c;
        return u(), v("div", {
          style: ne({
            backgroundColor: (_a = l(F)(o.value)) == null ? void 0 : _a.bgColor,
            color: (_b = l(F)(o.value)) == null ? void 0 : _b.color
          }),
          class: "px-1 py-0.5 rounded text-xs font-bold whitespace-nowrap flex-shrink-0"
        }, p((_c = l(F)(o.value)) == null ? void 0 : _c.label), 5);
      };
    }
  });
  Te = {
    class: "bg-white rounded-xl px-4 font-normal mb-2.5"
  };
  Ie = {
    class: "flex items-center py-4 text-sm"
  };
  Le = {
    class: "ml-2.5 line-clamp-1"
  };
  Pe = {
    class: "py-4 border-t border-black-200"
  };
  Ce = {
    class: "flex items-center justify-between"
  };
  $e = {
    class: "text-base"
  };
  De = {
    class: "text-base"
  };
  Se = {
    class: "text-base"
  };
  Fe = {
    key: 0,
    class: "flex items-center text-sm text-black-400 mt-4"
  };
  Re = {
    class: "font-semibold text-black ml-1"
  };
  Be = {
    key: 0,
    class: "ml-auto text-xs"
  };
  ze = z({
    __name: "InvestmentRecordItem",
    props: {
      data: {
        default: () => {
        }
      }
    },
    setup(k) {
      return (a, o) => {
        var _a, _b, _c, _d, _e2, _f, _g, _h, _i;
        const x = ke, y = se;
        return u(), v("div", Te, [
          n("div", Ie, [
            i(he, {
              status: a.data.interestType
            }, null, 8, [
              "status"
            ]),
            n("span", Le, p((_a = a.data.fmLoan) == null ? void 0 : _a.title) + " " + p((_b = a.data.fmLoan) == null ? void 0 : _b.orderNo), 1),
            i(x, {
              class: "ml-auto",
              info: a.data,
              currentTime: a.data.currentTime
            }, null, 8, [
              "info",
              "currentTime"
            ]),
            i(y, {
              class: "text-black-400 ml-1",
              name: "arrow"
            })
          ]),
          n("div", Pe, [
            n("div", Ce, [
              n("div", null, [
                o[0] || (o[0] = n("div", {
                  class: "text-xs text-black-400"
                }, "\u6295\u8D44\u91D1\u989D(mcoin)", -1)),
                n("div", $e, p(a.data.amount), 1)
              ]),
              n("div", null, [
                o[1] || (o[1] = n("div", {
                  class: "text-xs text-black-400"
                }, "\u5E74\u5316\u5229\u7387", -1)),
                n("div", De, p(new (l(w))(a.data.annualizedInterestRate).times(100)) + "% ", 1)
              ]),
              n("div", null, [
                o[2] || (o[2] = n("div", {
                  class: "text-xs text-black-400"
                }, "\u5DF2\u8FD8/\u501F\u6B3E\u671F\u6570", -1)),
                n("div", Se, p(a.data.payCount) + "/" + p(a.data.TotalCount), 1)
              ])
            ]),
            !((_c = a.data) == null ? void 0 : _c.status) && ((_e2 = (_d = a.data) == null ? void 0 : _d.fmLoan) == null ? void 0 : _e2.status) !== 4 ? (u(), v("div", Fe, [
              o[3] || (o[3] = n("span", null, "\u5F85\u6536\u672C\u606F", -1)),
              n("span", Re, p(l(oe)(a.data.awaitingRepayment)) + " Mcoin", 1),
              a.data.status !== 2 && a.data.fmLoan.status !== 4 ? (u(), v("span", Be, p(((_f = a.data.overdueInfo) == null ? void 0 : _f.isOverdue) ? `\u5DF2\u903E\u671F${(_g = a.data.repayDays) == null ? void 0 : _g.days}\u5929` : ((_h = a.data.repayDays) == null ? void 0 : _h.days) > 0 ? ((_i = a.data.repayDays) == null ? void 0 : _i.days) + "\u5929\u540E\u8FD8\u6B3E" : "\u4E0B\u6B21\u8FD8\u6B3E\u65F6\u95F4" + l(le)(a.data.repayTime * 1e3, "Y-m-d H:i:s")), 1)) : B("", true)
            ])) : B("", true)
          ])
        ]);
      };
    }
  });
  Ee = {
    class: "bg-[#F2F0EF] bg h-full overflow-y-auto"
  };
  Ne = {
    class: "flex justify-between items-center h-[46px] px-2.5 bg-white"
  };
  je = [
    "src"
  ];
  Me = {
    key: 1
  };
  Ve = {
    class: "py-2.5 px-4"
  };
  Ae = {
    key: 0,
    class: "flex justify-center items-center py-10"
  };
  qe = {
    class: "flex justify-between gap-2"
  };
  Oe = z({
    __name: "InvestmentRecord",
    setup(k) {
      const [a, o] = M(false), [x, y] = M(false), V = ve(), { checkOverdue: A, repaymentDays: q } = _e(), { currentDay: O } = ge(), T = _({}), m = re([
        {
          label: "\u8FD8\u6B3E\u65B9\u5F0F",
          index: 0,
          currentType: -1,
          value: -1,
          option: [
            {
              type: 0,
              label: "\u7B49\u672C\u7B49\u606F"
            },
            {
              type: 1,
              label: "\u5148\u606F\u540E\u672C"
            },
            {
              type: 2,
              label: "\u8FD8\u672C\u4ED8\u606F"
            }
          ]
        },
        {
          label: "\u6295\u8D44\u65F6\u95F4",
          tag: "time",
          index: 1,
          currentType: [],
          value: []
        },
        {
          label: "\u6807\u7684\u7C7B\u578B",
          index: 2,
          currentType: -1,
          value: -1,
          option: [
            {
              type: 1,
              label: "\u5929\u6807"
            },
            {
              type: 30,
              label: "1\u6708\u6807"
            },
            {
              type: 90,
              label: "3\u6708\u6807"
            },
            {
              type: 180,
              label: "6\u6708\u6807"
            },
            {
              type: 360,
              label: "12\u6708\u6807"
            }
          ]
        }
      ]), H = (t) => {
        m[t.key].currentType !== t.value && (m[t.key].currentType = t.value);
      }, J = () => {
        const t = m.map((e) => e.currentType);
        T.value = {
          interestType: t[0] !== -1 ? t[0] : null,
          investStartTime: t[1][0] ? N(t[1][0]) : null,
          investEndTime: t[1][1] ? N(t[1][1]) : null,
          cycle: t[2] !== -1 ? t[2] : null,
          annualizedInterestRate: t[3] !== -1 ? t[3] : null
        };
        for (let e = 0; e < m.length; e++) {
          const f = m[e];
          f.value = t[e];
        }
        P(), y(false);
      }, K = () => {
        T.value = {};
        for (let t = 0; t < m.length; t++) {
          const e = m[t];
          e.tag === "time" ? e.value = [] : e.value = -1;
        }
        P(), y(false);
      }, U = (t) => {
        V.push(t);
      }, I = _(null), Y = async () => {
        I.value = await O();
      }, h = _(false), L = _([]), P = async () => {
        var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n;
        h.value = true;
        const { success: t, data: e } = await j({
          queryType: 4,
          ...T.value
        });
        if (t) {
          const f = [];
          for (let c = 0; c < e.loanDtos.length; c++) {
            const s = e.loanDtos[c], $ = s.planList.filter((r) => r.status === 1).reduce((r, S) => w(r).plus(S.interest).plus(S.principal).toString(), 0), D = {
              ...s,
              currentTime: I,
              status: ((_a = s.fmLoan) == null ? void 0 : _a.status) === 4 ? 2 : (_b = s.curPlan) == null ? void 0 : _b.status,
              awaitingRepayment: $,
              surplusAmount: (_c = s.fmLoan) == null ? void 0 : _c.surplusAmount,
              annualizedInterestRate: (_d = s.fmLoan) == null ? void 0 : _d.annualizedInterestRate,
              amount: (_e2 = s.fmLoan) == null ? void 0 : _e2.amount,
              interestType: (_f = s.fmLoan) == null ? void 0 : _f.interestType,
              repayDays: await q(((_g = s == null ? void 0 : s.curPlan) == null ? void 0 : _g.repayTime) || 0, I.value),
              overdueInfo: await A((_h = s.curPlan) == null ? void 0 : _h.loanId),
              TotalCount: ((_i = s.fmLoan) == null ? void 0 : _i.cycle) > 30 ? ((_j = s.fmLoan) == null ? void 0 : _j.cycle) / 30 : 1,
              payCount: ((_k = s.fmLoan) == null ? void 0 : _k.status) === 4 ? s.fmLoan.allPeriod : ((_l = s == null ? void 0 : s.curPlan) == null ? void 0 : _l.trueRepayTime) ? (_m = s == null ? void 0 : s.curPlan) == null ? void 0 : _m.period : ((_n = s == null ? void 0 : s.curPlan) == null ? void 0 : _n.period) - 1
            };
            f.push(D);
          }
          L.value = f;
        }
        h.value = false;
      }, b = _(null), d = _(null), C = _(null), G = () => {
        var _a;
        return (_a = d.value) == null ? void 0 : _a.reduce((t, e) => w(t).plus(e.principal).plus(e.interest).plus(e.manageFee).toString(), 0);
      }, Q = () => {
        var _a;
        return (_a = d.value) == null ? void 0 : _a.reduce((t, e) => w(t).plus(e.interest).plus(e.manageFee).toString(), 0);
      }, W = () => {
        C.value = null, b.value = null, d.value = null, o(false);
      }, X = async (t) => {
        var _a, _b, _c, _d, _e2, _f, _g, _h;
        const { data: e, success: f } = await j({
          loanId: ((_a = t.fmLoan) == null ? void 0 : _a.id) || 0
        });
        f && (d.value = (_b = e == null ? void 0 : e.loanDtos[0]) == null ? void 0 : _b.planList, C.value = (_c = e == null ? void 0 : e.loanDtos[0]) == null ? void 0 : _c.curPlan, b.value = {
          ...(_d = e == null ? void 0 : e.loanDtos[0]) == null ? void 0 : _d.fmLoan,
          totalInterest: (_e2 = e == null ? void 0 : e.loanDtos[0]) == null ? void 0 : _e2.totalInterest,
          totalManageFee: (_f = e == null ? void 0 : e.loanDtos[0]) == null ? void 0 : _f.totalManageFee
        }, (_g = d.value) == null ? void 0 : _g.forEach((c, s) => {
          var _a2, _b2;
          return c.period === (t == null ? void 0 : t.period) && (c.status = ((_a2 = t.overdueInfo) == null ? void 0 : _a2.status) > 1 ? 3 : (_b2 = t.overdueInfo) == null ? void 0 : _b2.status), c;
        }), ((_h = d.value) == null ? void 0 : _h.length) > 0 && o(true));
      }, Z = R(() => {
        var _a;
        return (_a = b.value) == null ? void 0 : _a.amount;
      }), ee = R(() => {
        var _a;
        return (_a = d.value) == null ? void 0 : _a.filter((t) => t.status !== 2).length;
      });
      return ie(async () => {
        await Y(), P();
      }), (t, e) => {
        var _a, _b, _c;
        const f = we, c = me, s = fe, $ = ae, D = te;
        return u(), v("div", Ee, [
          i(f, null, {
            default: g(() => [
              n("div", Ne, [
                i(be, null, {
                  default: g(() => e[3] || (e[3] = [
                    n("div", {
                      class: "text-sm font-semibold ml-1"
                    }, "\u6295\u8D44\u8BB0\u5F55", -1)
                  ])),
                  _: 1,
                  __: [
                    3
                  ]
                }),
                n("div", {
                  class: "px-3",
                  onClick: e[0] || (e[0] = (r) => l(y)(true))
                }, [
                  n("img", {
                    src: l(ue)("images/loan/filter-o.png"),
                    class: "w-6"
                  }, null, 8, je)
                ])
              ])
            ]),
            _: 1
          }),
          !h.value && L.value.length <= 0 ? (u(), E(xe, {
            key: 0,
            imgUrl: "empty-2.png",
            name: "\u6682\u65E0\u6295\u8D44\u8BB0\u5F55"
          }, {
            default: g(() => [
              n("div", {
                class: "text-base mt-7 font-semibold bg-[#FED73A] rounded-full w-[240px] h-[48px] flex justify-center items-center",
                onClick: e[1] || (e[1] = (r) => U("/ecology-loan"))
              }, " \u53BB\u6295\u8D44 ")
            ]),
            _: 1
          })) : (u(), v("div", Me, [
            n("div", Ve, [
              (u(true), v(de, null, ce(L.value, (r) => (u(), E(ze, {
                key: r.id,
                data: r,
                onClick: (S) => X(r)
              }, null, 8, [
                "data",
                "onClick"
              ]))), 128))
            ]),
            h.value ? (u(), v("div", Ae, [
              i(c, {
                size: "20"
              }, {
                default: g(() => e[4] || (e[4] = [
                  pe("\u52A0\u8F7D\u4E2D")
                ])),
                _: 1,
                __: [
                  4
                ]
              })
            ])) : B("", true)
          ])),
          i($, {
            show: l(x),
            options: m,
            onChangeFilter: H,
            onClose: e[2] || (e[2] = (r) => l(y)(false))
          }, {
            footer: g(() => [
              n("div", qe, [
                i(s, {
                  round: "",
                  class: "btn w-full",
                  style: {
                    border: "1px solid #cdcdcd !important"
                  },
                  onClick: K
                }, {
                  default: g(() => e[5] || (e[5] = [
                    n("span", null, "\u91CD\u7F6E", -1)
                  ])),
                  _: 1,
                  __: [
                    5
                  ]
                }),
                i(s, {
                  round: "",
                  background: "#FED73A",
                  class: "btn w-full btn-yellow",
                  onClick: J
                }, {
                  default: g(() => e[6] || (e[6] = [
                    n("span", null, "\u786E\u8BA4", -1)
                  ])),
                  _: 1,
                  __: [
                    6
                  ]
                })
              ])
            ]),
            _: 1
          }, 8, [
            "show",
            "options"
          ]),
          i(D, {
            show: l(a),
            "repay-method": (_a = b.value) == null ? void 0 : _a.interestType,
            payments: d.value,
            principal: Z.value,
            interest: Q(),
            periods: (_b = d.value) == null ? void 0 : _b.length,
            total: G(),
            loanInfo: b.value,
            remainPeriod: ee.value,
            "current-period": (_c = C.value) == null ? void 0 : _c.period,
            onClose: W
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
  nt = ye(Oe, [
    [
      "__scopeId",
      "data-v-544c51a6"
    ]
  ]);
});
export {
  __tla,
  nt as default
};
