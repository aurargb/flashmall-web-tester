import { _ as N, __tla as __tla_0 } from "./RightPop.vue_vue_type_script_setup_true_lang-B1_7GVJX.js";
import { d as H, j as U, u as G, a as C, r as p, k as J, l as K, o as O, c as F, g as n, e as a, w as i, m as _, F as Q, n as W, f as v, B as X, p as Y, i as f, _ as Z, __tla as __tla_1 } from "./index-CVQHjKiH.js";
import { _ as ee, F as te, P as oe, a as ne, __tla as __tla_2 } from "./MarketItem.vue_vue_type_script_setup_true_lang-CL575LZk.js";
import { L as le, __tla as __tla_3 } from "./index-Bbv1NXtA.js";
import { _ as se, __tla as __tla_4 } from "./BackIcon-CdrC5To7.js";
import { _ as ae, __tla as __tla_5 } from "./Empty.vue_vue_type_script_setup_true_lang-DHv6J42C.js";
import { q as ie, __tla as __tla_6 } from "./loan-DUx-0XpN.js";
import { e as re, __tla as __tla_7 } from "./exchangeContract-CB3fZuma.js";
import { u as de, __tla as __tla_8 } from "./index-Culc1QRb.js";
import { __tla as __tla_9 } from "./LoanMethodLabel.vue_vue_type_script_setup_true_lang-CaY1KaEz.js";
import { __tla as __tla_10 } from "./useType-GHSO8guk.js";
import { __tla as __tla_11 } from "./index.es-CLwpJEin.js";
import { __tla as __tla_12 } from "./useLpData-C285s8xY.js";
import { __tla as __tla_13 } from "./erc20Contract-DFn00mXD.js";
let Ae;
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
  let ce, ue, pe, fe, me, ge, _e;
  ce = {
    class: "pb-[68px]"
  };
  ue = {
    class: "sticky top-0 z-50 bg-white"
  };
  pe = {
    class: "flex items-center px-2.5 h-[44px]"
  };
  fe = {
    class: "relative px-4 pb-4"
  };
  me = {
    class: "fixed left-0 right-0 m-auto w-full sm:w-[375px] bottom-[20px] w-full px-4 flex items-center gap-4"
  };
  ge = {
    class: "flex justify-between gap-2"
  };
  _e = H({
    __name: "index",
    setup(ve) {
      const { mcoinRate: P } = U(), { lastPrice: T } = re(), { reloadStore: E, accountStore: x } = G(), b = J(), o = C({
        active: 0,
        page: 0,
        size: 10,
        finished: false,
        list: [],
        loading: false,
        total: 0,
        sortType: 1
      }), r = (t) => {
        b.push(t);
      }, m = p(null), d = p(null), L = (t) => {
        if (t === 5) return c(true);
        m.value = t, u();
      }, [B, c] = de(false), s = C([
        {
          label: "\u671F\u9650",
          index: 0,
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
        },
        {
          label: "\u8FD8\u6B3E\u65B9\u5F0F",
          index: 1,
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
        }
      ]), R = (t) => {
        s[t.key].currentType !== t.value && (s[t.key].currentType = t.value);
      }, $ = () => {
        const t = s.map((e) => e.currentType);
        if (t[0] == -1 && t[1] == -1 && t[2] == -1) return c(false);
        d.value = {
          cycle: t[0] !== -1 ? t[0] : null,
          interestType: t[1] !== -1 ? t[1] : null
        };
        for (let e = 0; e < s.length; e++) {
          const g = s[e];
          g.value = t[e];
        }
        u(), c(false);
      }, A = () => {
        d.value = null;
        for (let t = 0; t < s.length; t++) {
          const e = s[t];
          e.value = -1;
        }
        u(), c(false);
      }, u = () => {
        o.page = 0, o.total = 0, o.finished = false, o.list = [], h();
      }, h = async () => {
        o.loading = true, o.page += 1, x.linked && await D();
      }, D = async () => {
        let t = {
          page: o.page,
          size: o.size,
          sort: m.value
        };
        d.value && (t = {
          ...t,
          ...d.value
        });
        const e = await ie(t);
        if (!e.success || !e.data || !+e.total) {
          o.finished = true, o.loading = false;
          return;
        }
        o.total = e.total, o.list = o.page === 1 ? e.data : o.list.concat(e.data), setTimeout(() => {
          o.loading = false;
        }, 1e3), o.list.length >= o.total && (o.finished = true);
      };
      b.beforeEach((t, e) => {
        var _a;
        e.path === "/ecology-loan/detail" && t.path === "/ecology-loan" && ((_a = e.params) == null ? void 0 : _a.refresh) && (console.log("beforeEach"), u());
      });
      const y = p(null), S = async () => {
        const t = await T();
        y.value = t;
      }, I = p(null), w = p(null), z = async () => {
        const t = await P();
        I.value = t, w.value = t;
      };
      return K(() => x.linked, (t) => {
        t && u();
      }, {
        immediate: true,
        deep: true
      }), O(() => {
        z(), S();
      }), (t, e) => {
        const g = se, V = le, j = oe, k = X, q = N, M = Y("router-view");
        return f(), F("div", ce, [
          n("div", ue, [
            n("div", pe, [
              a(g, null, {
                default: i(() => e[6] || (e[6] = [
                  n("div", null, "\u5E02\u573A", -1)
                ])),
                _: 1,
                __: [
                  6
                ]
              }),
              n("div", {
                class: "ml-auto",
                onClick: e[0] || (e[0] = (l) => r("/my"))
              }, e[7] || (e[7] = [
                n("img", {
                  src: ee,
                  class: "w-[24px]"
                }, null, -1)
              ]))
            ]),
            a(te, {
              sortId: m.value,
              filterdata: d.value,
              onSortChange: L
            }, null, 8, [
              "sortId",
              "filterdata"
            ]),
            e[8] || (e[8] = n("div", {
              class: "h-5 bg-[#fddf6e] rounded-t-3xl"
            }, null, -1))
          ]),
          a(j, {
            "pull-distance": "80",
            class: "min-h-[70vh]",
            onRefresh: v(E).reload
          }, {
            default: i(() => [
              o.finished && o.total === 0 ? (f(), _(ae, {
                key: 0,
                name: "\u6682\u65E0\u6807\u7684"
              })) : (f(), _(V, {
                key: 1,
                loading: o.loading,
                "onUpdate:loading": e[1] || (e[1] = (l) => o.loading = l),
                finished: o.finished,
                "finished-text": "\u6CA1\u6709\u66F4\u591A\u4E86",
                "loading-text": "\u6B63\u5728\u52A0\u8F7D",
                "immediate-check": false,
                onLoad: h
              }, {
                default: i(() => [
                  n("div", fe, [
                    (f(true), F(Q, null, W(o.list, (l) => (f(), _(ne, {
                      key: l.id,
                      data: l,
                      maiPrice: y.value,
                      mcPrice: w.value,
                      onHandleTo: r
                    }, null, 8, [
                      "data",
                      "maiPrice",
                      "mcPrice"
                    ]))), 128))
                  ])
                ]),
                _: 1
              }, 8, [
                "loading",
                "finished"
              ]))
            ]),
            _: 1
          }, 8, [
            "onRefresh"
          ]),
          n("div", me, [
            n("div", {
              class: "shadow-btn font-semibold flex-1 text-base h-[44px] leading-[44px] text-center rounded-full bg-white border border-[#FED73A] text-[#FED73A]",
              onClick: e[2] || (e[2] = (l) => r("/ecology-loan-matchmaking"))
            }, " \u5386\u53F2\u64AE\u5408 "),
            n("div", {
              class: "shadow-btn font-semibold flex-1 text-base h-[44px] leading-[44px] text-center rounded-full bg-white border border-[#FED73A] text-[#FED73A]",
              onClick: e[3] || (e[3] = (l) => r("/ecology-loan-my"))
            }, " \u6211\u7684\u501F\u6B3E "),
            n("div", {
              class: "shadow-btn font-semibold flex-1 text-base h-[44px] leading-[44px] text-center rounded-full border border-[#FED73A] bg-[#FED73A]",
              onClick: e[4] || (e[4] = (l) => r("/releaseLoan"))
            }, " \u6211\u8981\u501F\u6B3E ")
          ]),
          a(q, {
            show: v(B),
            options: s,
            onChangeFilter: R,
            onClose: e[5] || (e[5] = (l) => v(c)(false))
          }, {
            footer: i(() => [
              n("div", ge, [
                a(k, {
                  round: "",
                  class: "btn w-full",
                  style: {
                    border: "1px solid #cdcdcd !important"
                  },
                  onClick: A
                }, {
                  default: i(() => e[9] || (e[9] = [
                    n("span", null, "\u91CD\u7F6E", -1)
                  ])),
                  _: 1,
                  __: [
                    9
                  ]
                }),
                a(k, {
                  round: "",
                  background: "#FED73A",
                  class: "btn w-full btn-yellow",
                  onClick: $
                }, {
                  default: i(() => e[10] || (e[10] = [
                    n("span", null, "\u786E\u8BA4", -1)
                  ])),
                  _: 1,
                  __: [
                    10
                  ]
                })
              ])
            ]),
            _: 1
          }, 8, [
            "show",
            "options"
          ]),
          a(M, {
            class: "child-view"
          })
        ]);
      };
    }
  });
  Ae = Z(_e, [
    [
      "__scopeId",
      "data-v-07a9c7aa"
    ]
  ]);
});
export {
  __tla,
  Ae as default
};
