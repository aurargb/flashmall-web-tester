import { d as A, q as $, r as F, o as j, c as l, e as t, g as e, w as u, F as _, n as m, k as I, i as r, E as p, f as v, K as h, t as b, J as N, N as M, __tla as __tla_0 } from "./index-CVQHjKiH.js";
import { _ as S, __tla as __tla_1 } from "./BackIcon-CdrC5To7.js";
import { g as T, __tla as __tla_2 } from "./loan-DUx-0XpN.js";
import { S as z, __tla as __tla_3 } from "./index-CTBrWdf5.js";
let ce;
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
  let R, V, q, D, J, K, L, O, G, H, P, Q, U, W, X, Y, Z, ee;
  R = {
    class: "bg-[#F2F0EF] bg h-full"
  };
  V = {
    class: "flex justify-between items-center h-[46px] px-2.5 bg-white"
  };
  q = {
    class: "px-4"
  };
  D = {
    class: "rounded-xl bg-white px-3 mt-4"
  };
  J = [
    "onClick"
  ];
  K = {
    class: "flex items-center"
  };
  L = {
    class: "mr-2.5"
  };
  O = [
    "src"
  ];
  G = {
    class: "rounded-xl bg-white px-3 mt-4"
  };
  H = [
    "onClick"
  ];
  P = {
    class: "flex items-center"
  };
  Q = {
    class: "mr-2.5"
  };
  U = [
    "src"
  ];
  W = {
    class: "rounded-xl bg-white px-3 mt-4"
  };
  X = [
    "onClick"
  ];
  Y = {
    class: "flex items-center"
  };
  Z = {
    class: "mr-2.5"
  };
  ee = [
    "src"
  ];
  ce = A({
    __name: "Index",
    setup(ne) {
      const C = I(), i = (c) => {
        C.push(c);
      }, g = [
        {
          title: "\u6211\u8981\u8FD8\u6B3E",
          icon: "repayment",
          url: "/loan-repayment"
        },
        {
          title: "\u63D0\u524D\u8FD8\u6B3E",
          icon: "in-advance",
          url: "/loan-earlyRepayment"
        },
        {
          title: "\u501F\u6B3E/\u8FD8\u6B3E\u8BB0\u5F55",
          icon: "record",
          url: "/loan-record"
        }
      ], f = [
        {
          title: "\u56DE\u6B3E\u65E5\u5386",
          icon: "calendar",
          url: "/loan-calendar"
        },
        {
          title: "\u6295\u8D44\u8BB0\u5F55",
          icon: "invest-record",
          url: "/investment-record"
        }
      ], x = $(() => [
        {
          title: "\u6D88\u606F\u63D0\u9192",
          icon: "notice",
          url: "/loan-news",
          number: o.value.repaymentCount + o.value.refundCount + o.value.lendCount + o.value.borrowCount
        }
      ]), o = F({
        borrowCount: 0,
        lendCount: 0,
        refundCount: 0,
        repaymentCount: 0
      }), y = async () => {
        const { success: c, data: a } = await T();
        c && (o.value = a);
      };
      return j(() => {
        y();
      }), (c, a) => {
        const k = S, E = z, d = N, B = M;
        return r(), l("div", R, [
          t(E, null, {
            default: u(() => [
              e("div", V, [
                t(k, null, {
                  default: u(() => a[0] || (a[0] = [
                    e("div", {
                      class: "text-sm font-semibold ml-1"
                    }, "\u6211\u7684", -1)
                  ])),
                  _: 1,
                  __: [
                    0
                  ]
                })
              ])
            ]),
            _: 1
          }),
          e("div", q, [
            e("div", D, [
              (r(), l(_, null, m(g, (n, s) => e("div", {
                key: n.title,
                class: p([
                  "flex items-center justify-between py-3",
                  g.length - 1 !== s ? "border-b border-solid border-b-[#E8E8E8] " : ""
                ]),
                onClick: (w) => i(n.url)
              }, [
                e("div", K, [
                  e("div", L, [
                    e("img", {
                      class: "w-[24px] h-[24px]",
                      src: v(h)(`images/loan/${n.icon}.png`)
                    }, null, 8, O)
                  ]),
                  e("div", null, b(n.title), 1)
                ]),
                t(d, {
                  name: "arrow",
                  color: "#ABA69C"
                })
              ], 10, J)), 64))
            ]),
            e("div", G, [
              (r(), l(_, null, m(f, (n, s) => e("div", {
                key: n.title,
                class: p([
                  f.length - 1 !== s ? "border-b border-solid border-b-[#E8E8E8] " : "",
                  "flex items-center justify-between py-3"
                ]),
                onClick: (w) => i(n.url)
              }, [
                e("div", P, [
                  e("div", Q, [
                    e("img", {
                      class: "w-[24px] h-[24px]",
                      src: v(h)(`images/loan/${n.icon}.png`)
                    }, null, 8, U)
                  ]),
                  e("div", null, b(n.title), 1)
                ]),
                t(d, {
                  name: "arrow",
                  color: "#ABA69C"
                })
              ], 10, H)), 64))
            ]),
            e("div", W, [
              (r(true), l(_, null, m(x.value, (n, s) => (r(), l("div", {
                key: n.title,
                class: p([
                  x.value.length - 1 !== s ? "border-b border-solid border-b-[#E8E8E8] " : "",
                  "flex items-center justify-between py-3"
                ]),
                onClick: (w) => i(n.url)
              }, [
                e("div", Y, [
                  e("div", Z, [
                    t(B, {
                      "show-zero": false,
                      content: n.number,
                      max: "99"
                    }, {
                      default: u(() => [
                        e("img", {
                          class: "w-[24px] h-[24px]",
                          src: v(h)(`images/loan/${n.icon}.png`)
                        }, null, 8, ee)
                      ]),
                      _: 2
                    }, 1032, [
                      "content"
                    ])
                  ]),
                  e("div", null, b(n.title), 1)
                ]),
                t(d, {
                  name: "arrow",
                  color: "#ABA69C"
                })
              ], 10, X))), 128))
            ])
          ])
        ]);
      };
    }
  });
});
export {
  __tla,
  ce as default
};
