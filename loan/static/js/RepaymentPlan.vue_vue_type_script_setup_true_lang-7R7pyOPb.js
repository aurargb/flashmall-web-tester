import { d as k, c as l, i as e, t as n, f as a, I as M, m as g, w as b, g as o, x as r, C as d, aV as P, K as C, z as u, F as L, n as B, e as h, B as E, ak as S, ai as D, E as _, J as T, v as V, __tla as __tla_0 } from "./index-CVQHjKiH.js";
import { e as y, r as z, __tla as __tla_1 } from "./useType-GHSO8guk.js";
import { u as N, __tla as __tla_2 } from "./useLoan-BhqL0FVa.js";
import { I as A, D as j, __tla as __tla_3 } from "./index.es-CLwpJEin.js";
let xs, R;
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
  })()
]).then(async () => {
  let $, H, J, K, O, Y, q, G, Q, U, W, X, Z, ss, os, ts, es, ns, as, ls, is, rs, ps, ds, cs, us, ms, fs, ys, vs, gs, bs, hs;
  R = k({
    __name: "PlanStatusLabel",
    props: {
      status: {}
    },
    setup(I) {
      return (p, v) => (e(), l("div", {
        class: "text-xxs px-1.5 py-1 rounded flex-shrink-0",
        style: M({
          backgroundColor: a(y)(p.status).bgColor,
          color: a(y)(p.status).color
        })
      }, n(a(y)(p.status).label), 5));
    }
  });
  $ = {
    class: "w-full p-4 bg-[#F5F5F5] overflow-hidden relative h-full"
  };
  H = {
    class: "font-normal text-base text-left mb-4"
  };
  J = {
    key: 0,
    class: "text-xs font-normal opacity-60 mt-1"
  };
  K = {
    key: 0
  };
  O = {
    key: 1
  };
  Y = {
    key: 1,
    class: "text-xs font-normal opacity-60 mt-1"
  };
  q = {
    style: {
      overflow: "scroll",
      height: "calc(100% - 64px)"
    },
    class: "pb-[68px]"
  };
  G = {
    class: "bg-gradient-to-r from-white to-[#FEF7D7] relative rounded-lg p-4 overflow-hidden"
  };
  Q = [
    "src"
  ];
  U = [
    "src"
  ];
  W = {
    class: "text-sm font-normal opacity-80"
  };
  X = {
    key: 0
  };
  Z = {
    key: 1
  };
  ss = {
    key: 1,
    class: "mt-2"
  };
  os = {
    class: "text-3xl text-primary font-bold mr-1.5"
  };
  ts = {
    key: 2,
    class: "mt-2 text-3xl text-primary font-bold"
  };
  es = {
    class: "flex items-center text-xs pt-4"
  };
  ns = {
    class: ""
  };
  as = {
    class: "flex items-center text-xs pt-2"
  };
  ls = {
    class: "flex items-center font-bold gap-1 flex-1"
  };
  is = {
    class: "flex items-center text-xs pt-2"
  };
  rs = {
    class: "flex items-center font-bold gap-1"
  };
  ps = {
    key: 3,
    class: "flex items-center text-xs pt-2"
  };
  ds = {
    key: 0,
    class: "flex items-center font-bold gap-1"
  };
  cs = {
    key: 1,
    class: "flex items-center font-bold gap-1"
  };
  us = {
    class: "rounded-lg bg-white mt-4 p-4"
  };
  ms = {
    class: "flex flex-col items-center"
  };
  fs = {
    key: 0,
    class: "w-[1px] min-h-[80px] bg-[#EFEFEF]"
  };
  ys = {
    class: "flex-1 mb-2"
  };
  vs = {
    class: "flex items-center justify-between"
  };
  gs = {
    class: "text-xs font-normal opacity-60 mt-1"
  };
  bs = {
    key: 0,
    class: "text-xxs font-normal text-primary mt-1.5"
  };
  hs = {
    class: "flex justify-between bg-[#F5F5F5] gap-2 mt-4 pb-4 px-4 pt-2 fixed bottom-0 left-0 w-full"
  };
  xs = k({
    __name: "RepaymentPlan",
    props: {
      show: {
        type: Boolean
      },
      repayMethod: {},
      payments: {},
      periods: {},
      principal: {},
      interest: {},
      total: {},
      currentPeriod: {},
      currentId: {},
      billStatus: {},
      remainPeriod: {},
      loanInfo: {}
    },
    emits: [
      "confirm",
      "close"
    ],
    setup(I, { emit: p }) {
      N();
      const v = (s, t, f) => u(s).plus(t).plus(f).toString(), m = p;
      return (s, t) => {
        const f = T, w = R, x = E, F = D;
        return e(), g(F, {
          round: "",
          show: s.show,
          style: {
            height: "84%"
          },
          position: "bottom",
          closeable: "",
          "close-on-click-overlay": true,
          onClickCloseIcon: t[1] || (t[1] = () => m("close")),
          onClickOverlay: t[2] || (t[2] = S(() => m("close"), [
            "stop"
          ]))
        }, {
          default: b(() => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
            return [
              o("div", $, [
                o("div", H, [
                  t[3] || (t[3] = o("div", null, "\u8FD8\u6B3E\u8BA1\u5212", -1)),
                  s.currentPeriod ? (e(), l("div", Y, " \u5F85\u8FD8\u603B\u91D1\u989D" + n(a(r)(s.total)) + " Mcoin\uFF08\u542B\u672C\u606F\uFF09\u5269\u4F59" + n(s.remainPeriod) + "\u671F\u8FD8\u5B8C ", 1)) : (e(), l("div", J, [
                    ((_a = s.loanInfo) == null ? void 0 : _a.status) === 4 ? (e(), l("div", K, "\u5DF2\u5168\u90E8\u7ED3\u6E05")) : (e(), l("div", O, "\u8FD8\u6B3E\u65E5\u4ECE\u5B9E\u9645\u64AE\u5408\u65F6\u95F4\u5F00\u59CB\u8BA1\u7B97"))
                  ]))
                ]),
                o("div", q, [
                  o("div", G, [
                    o("img", {
                      src: a(P)("mai-bg.svg"),
                      class: "w-[120px] absolute -bottom-[10px] right-0"
                    }, null, 8, Q),
                    ((_b = s.loanInfo) == null ? void 0 : _b.status) === 4 ? (e(), l("img", {
                      key: 0,
                      src: a(C)("images/loan/clear.png"),
                      class: "w-[101px] absolute -top-[10px] right-0"
                    }, null, 8, U)) : d("", true),
                    o("div", W, [
                      s.currentPeriod || ((_c = s.loanInfo) == null ? void 0 : _c.status) === 4 ? (e(), l("span", X, " \u5F85\u8FD8\u603B\u989D\uFF08\u542B\u672C\u606F\uFF09\uFF1A ")) : (e(), l("span", Z, " \u501F\u6EE1" + n(s.repayMethod === a(A).PrincipalAndInterest ? s.periods + "\u5929" : s.periods + "\u4E2A\u6708") + "\uFF0C\u5E94\u8FD8\u603B\u989D\uFF08\u542B\u672C\u606F\uFF09\uFF1A ", 1))
                    ]),
                    ((_d = s.loanInfo) == null ? void 0 : _d.status) !== 4 ? (e(), l("div", ss, [
                      o("span", os, n(a(r)(s.total)), 1),
                      t[4] || (t[4] = o("span", {
                        class: "text-sm"
                      }, "Mcoin", -1))
                    ])) : (e(), l("div", ts, "\u5DF2\u7ED3\u6E05")),
                    o("div", es, [
                      t[5] || (t[5] = o("div", {
                        class: "font-normal opacity-60 w-[90px]"
                      }, "\u8FD8\u6B3E\u65B9\u5F0F", -1)),
                      o("div", ns, n((_e = a(z)()[s.repayMethod]) == null ? void 0 : _e.label), 1)
                    ]),
                    o("div", as, [
                      t[7] || (t[7] = o("div", {
                        class: "font-normal opacity-60 w-[90px]"
                      }, "\u501F\u6B3E\u672C\u91D1", -1)),
                      o("div", ls, [
                        o("span", null, n(s.principal), 1),
                        t[6] || (t[6] = o("span", null, "Mcoin", -1))
                      ])
                    ]),
                    o("div", is, [
                      t[9] || (t[9] = o("div", {
                        class: "font-normal opacity-60 w-[90px]"
                      }, "\u603B\u5229\u606F", -1)),
                      o("div", rs, [
                        o("span", null, n(a(r)(new (a(u))(((_f = s.loanInfo) == null ? void 0 : _f.totalInterest) || s.interest).plus(new (a(u))(((_g = s.loanInfo) == null ? void 0 : _g.totalManageFee) || 0)))), 1),
                        t[8] || (t[8] = o("span", null, "Mcoin", -1))
                      ])
                    ]),
                    ((_h = s.loanInfo) == null ? void 0 : _h.depositMai) ? (e(), l("div", ps, [
                      t[10] || (t[10] = o("div", {
                        class: "font-normal opacity-60 w-[90px]"
                      }, "\u8D28\u62BC\u7269\u6570\u91CF", -1)),
                      ((_i = s.loanInfo) == null ? void 0 : _i.depositType) === a(j).MAI ? (e(), l("div", ds, [
                        o("span", null, "\u8D28\u62BC" + n((_j = s.loanInfo) == null ? void 0 : _j.depositMai) + "Mai", 1)
                      ])) : (e(), l("div", cs, " \u9501\u5B9A" + n((_k = s.loanInfo) == null ? void 0 : _k.depositMai) + "LP\uFF08\u5DF2\u89E3\u9501" + n(((_l = s.loanInfo) == null ? void 0 : _l.unlockedLp) > 0 ? (_m = s.loanInfo) == null ? void 0 : _m.unlockedLp : ((_n = s.loanInfo) == null ? void 0 : _n.unlockedLp) === 0 ? s.loanInfo.depositMai : 0) + "LP\u9501\u5B9A\u4E2D" + n(((_o = s.loanInfo) == null ? void 0 : _o.unlockedLp) > 0 ? a(u)((_p = s.loanInfo) == null ? void 0 : _p.depositMai).minus((_q = s.loanInfo) == null ? void 0 : _q.unlockedLp) : ((_r = s.loanInfo) == null ? void 0 : _r.unlockedLp) === 0 ? 0 : s.loanInfo.depositMai) + "LP\uFF09 ", 1))
                    ])) : d("", true)
                  ]),
                  o("div", us, [
                    (e(true), l(L, null, B(s.payments, (i, c) => (e(), l("div", {
                      key: i,
                      class: "w-full flex items-start"
                    }, [
                      o("div", {
                        class: _([
                          "text-sm w-[30px]",
                          s.currentPeriod > c + 1 ? "opacity-40" : ""
                        ])
                      }, n(i.period) + "\u671F ", 3),
                      o("div", ms, [
                        h(f, {
                          name: "circle",
                          color: c + 1 === s.currentPeriod ? "#FFD81F" : "#EFEFEF",
                          size: "12",
                          class: "py-1 px-2"
                        }, null, 8, [
                          "color"
                        ]),
                        s.payments.length - 1 !== c ? (e(), l("div", fs)) : d("", true)
                      ]),
                      o("div", ys, [
                        o("div", vs, [
                          o("div", {
                            class: _([
                              "text-sm font-bold",
                              s.currentPeriod > c + 1 ? "opacity-40" : ""
                            ])
                          }, n(a(r)(v(i.principal, i.interest, i.manageFee))) + "Mcoin ", 3),
                          i.status ? (e(), g(w, {
                            key: 0,
                            status: i.status
                          }, null, 8, [
                            "status"
                          ])) : d("", true)
                        ]),
                        o("div", gs, " \u672C\u91D1" + n(a(r)(i.principal)) + "Mcoin+\u5229\u606F" + n(a(r)(i.interest)) + " Mcoin+" + n(a(r)(i.manageFee)) + "Mcoin\u5229\u606F\u7BA1\u7406\u8D39 ", 1),
                        i.repayTime ? (e(), l("div", bs, n(i.status === 2 ? "\u5B9E\u9645\u8FD8\u6B3E\u65F6\u95F4 " : "\u9884\u8BA1\u8FD8\u6B3E\u65F6\u95F4 ") + " " + n(a(V)(i.status === 2 ? i.trueRepayTime : i.repayTime * 1e3, "Y-m-d H:i:s")), 1)) : d("", true)
                      ])
                    ]))), 128))
                  ])
                ]),
                o("div", hs, [
                  h(x, {
                    round: "",
                    background: "#FED73A",
                    class: "btn w-full btn-yellow",
                    onClick: t[0] || (t[0] = (i) => m("close"))
                  }, {
                    default: b(() => t[11] || (t[11] = [
                      o("span", null, "\u6211\u77E5\u9053\u4E86", -1)
                    ])),
                    _: 1,
                    __: [
                      11
                    ]
                  })
                ])
              ])
            ];
          }),
          _: 1
        }, 8, [
          "show"
        ]);
      };
    }
  });
});
export {
  xs as _,
  __tla,
  R as a
};
