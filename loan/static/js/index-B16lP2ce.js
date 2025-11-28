import { d as $, Z as F, Q as R, U as Y, a6 as H, e as _, a0 as Q, T as M, V as W, r as L, W as X, q as T, a_ as Z, l as G, X as V, a$ as O, Y as ee, aj as ae, ag as te, ah as ne, P as se, at as le, b0 as oe, b1 as re, m as A, w as h, g as i, c as C, F as j, n as D, i as y, E as S, N as U, t as w, _ as J, b2 as ie, f as E, v as z, b as I, K as de, C as P, a as ce, o as ue, __tla as __tla_0 } from "./index-CVQHjKiH.js";
import { L as pe, __tla as __tla_1 } from "./index-Bbv1NXtA.js";
import { _ as fe, __tla as __tla_2 } from "./BackIcon-CdrC5To7.js";
import { S as me, __tla as __tla_3 } from "./index-CTBrWdf5.js";
import { e as ve, g as ge, s as be, __tla as __tla_4 } from "./loan-DUx-0XpN.js";
let aa;
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
  })()
]).then(async () => {
  const [K, _e] = R("collapse"), q = Symbol(K), he = {
    border: F,
    accordion: Boolean,
    modelValue: {
      type: [
        String,
        Number,
        Array
      ],
      default: ""
    }
  };
  var ye = $({
    name: K,
    props: he,
    emits: [
      "change",
      "update:modelValue"
    ],
    setup(o, { emit: u, slots: l }) {
      const { linkChildren: p, children: m } = Y(q), e = (t) => {
        u("change", t), u("update:modelValue", t);
      }, v = (t, s) => {
        const { accordion: f, modelValue: n } = o;
        e(f ? t === n ? "" : t : s ? n.concat(t) : n.filter((d) => d !== t));
      }, r = (t = {}) => {
        if (o.accordion) return;
        typeof t == "boolean" && (t = {
          expanded: t
        });
        const { expanded: s, skipDisabled: f } = t, d = m.filter((g) => g.disabled && f ? g.expanded.value : s ?? !g.expanded.value).map((g) => g.itemName.value);
        e(d);
      }, a = (t) => {
        const { accordion: s, modelValue: f } = o;
        return s ? f === t : f.includes(t);
      };
      return H({
        toggleAll: r
      }), p({
        toggle: v,
        isExpanded: a
      }), () => {
        var t;
        return _("div", {
          class: [
            _e(),
            {
              [Q]: o.border
            }
          ]
        }, [
          (t = l.default) == null ? void 0 : t.call(l)
        ]);
      };
    }
  });
  const xe = M(ye), [Ce, B] = R("collapse-item"), ke = [
    "icon",
    "title",
    "value",
    "label",
    "right-icon"
  ], we = W({}, O, {
    name: se,
    isLink: F,
    disabled: Boolean,
    readonly: Boolean,
    lazyRender: F
  });
  var Le = $({
    name: Ce,
    props: we,
    setup(o, { slots: u }) {
      const l = L(), p = L(), { parent: m, index: e } = X(q);
      if (!m) return;
      const v = T(() => {
        var c;
        return (c = o.name) != null ? c : e.value;
      }), r = T(() => m.isExpanded(v.value)), a = L(r.value), t = Z(() => a.value || !o.lazyRender), s = () => {
        r.value ? l.value && (l.value.style.height = "") : a.value = false;
      };
      G(r, (c, k) => {
        if (k === null) return;
        c && (a.value = true), (c ? le : oe)(() => {
          if (!p.value || !l.value) return;
          const { offsetHeight: x } = p.value;
          if (x) {
            const N = `${x}px`;
            l.value.style.height = c ? "0" : N, re(() => {
              l.value && (l.value.style.height = c ? N : "0");
            });
          } else s();
        });
      });
      const f = (c = !r.value) => {
        m.toggle(v.value, c);
      }, n = () => {
        !o.disabled && !o.readonly && f();
      }, d = () => {
        const { border: c, disabled: k, readonly: b } = o, x = V(o, Object.keys(O));
        return b && (x.isLink = false), (k || b) && (x.clickable = false), _(ae, ee({
          role: "button",
          class: B("title", {
            disabled: k,
            expanded: r.value,
            borderless: !c
          }),
          "aria-expanded": String(r.value),
          onClick: n
        }, x), V(u, ke));
      }, g = t(() => {
        var c;
        return te(_("div", {
          ref: l,
          class: B("wrapper"),
          onTransitionend: s
        }, [
          _("div", {
            ref: p,
            class: B("content")
          }, [
            (c = u.default) == null ? void 0 : c.call(u)
          ])
        ]), [
          [
            ne,
            a.value
          ]
        ]);
      });
      return H({
        toggle: f,
        expanded: r,
        itemName: v
      }), () => _("div", {
        class: [
          B({
            border: e.value && o.border
          })
        ]
      }, [
        d(),
        g()
      ]);
    }
  });
  const Te = M(Le), $e = {
    class: "p-4 bg-[#F2F0EF]"
  }, Ee = {
    class: "flex items-center bg-white rounded-full"
  }, Be = [
    "onClick"
  ], Fe = {
    class: "p-2"
  }, Se = $({
    __name: "TabBar",
    props: {
      list: {
        default: () => []
      },
      current: {
        default: () => null
      }
    },
    emits: [
      "changeTab"
    ],
    setup(o, { emit: u }) {
      const l = u;
      return (p, m) => {
        const e = U, v = me;
        return y(), A(v, {
          "offset-top": "44"
        }, {
          default: h(() => [
            i("div", $e, [
              i("div", Ee, [
                (y(true), C(j, null, D(p.list, (r) => (y(), C("div", {
                  class: S([
                    "flex-1 text-center py-0.5 leading-4 text-xs whitespace-nowrap text-[#2E2008]",
                    {
                      "active-tab bg-[#2E2008] rounded-full font-semibold text-white": p.current === r.value
                    }
                  ]),
                  onClick: (a) => l("changeTab", r.value),
                  key: r.value
                }, [
                  _(e, {
                    content: r.number,
                    "show-zero": false,
                    max: "99"
                  }, {
                    default: h(() => [
                      i("div", Fe, w(r.label), 1)
                    ]),
                    _: 2
                  }, 1032, [
                    "content"
                  ])
                ], 10, Be))), 128))
              ])
            ])
          ]),
          _: 1
        });
      };
    }
  }), Ne = J(Se, [
    [
      "__scopeId",
      "data-v-4558bb36"
    ]
  ]);
  function Ve() {
    const o = ie(), u = T(() => o.locale.value);
    return {
      i18n: o,
      currentLocale: u,
      changeLocale: (p) => {
        o.locale.value = p, localStorage.setItem("locale", p);
      }
    };
  }
  let ze, Ie, Pe, Re, He, Me, Oe, Ae, je, De, Ue, Je, Ke, qe, Ye;
  ze = {
    class: "flex items-center gap-2.5 font-bold text-lg"
  };
  Ie = [
    "src"
  ];
  Pe = [
    "innerHTML"
  ];
  Re = {
    class: "pl-8 pr-1.5 text-sm text-black"
  };
  He = {
    class: "flex"
  };
  Me = {
    class: "flex my-2.5"
  };
  Oe = {
    class: "pl-9 pr-6 pb-3 flex justify-between"
  };
  Ae = {
    class: "text-xs text-black/50"
  };
  je = {
    key: 0
  };
  De = $({
    __name: "Item",
    props: {
      active: {},
      current: {},
      data: {}
    },
    emits: [
      "changeHandle"
    ],
    setup(o, { emit: u }) {
      const l = o, p = u, { currentLocale: m } = Ve(), e = {
        "zh-CN": "Jt",
        "zh-HK": "Ft",
        "en-US": "En",
        "ja-JP": "Jp"
      }, v = T(() => {
        var _a;
        switch ((_a = l.data) == null ? void 0 : _a.type) {
          case 1:
            return {
              label: "\u5E73\u53F0\u901A\u77E5",
              img: "platform"
            };
          case 2:
            return {
              label: "\u8FD8\u6B3E\u6D88\u606F",
              img: "Repayment"
            };
          case 3:
            return {
              label: "\u56DE\u6B3E\u6D88\u606F",
              img: "Refund"
            };
          case 4:
            return {
              label: "\u501F\u51FA",
              img: "lend"
            };
          case 5:
            return {
              label: "\u501F\u5165",
              img: "Borrow"
            };
          default:
            return {
              label: "",
              img: ""
            };
        }
      }), r = () => {
        var _a;
        ((_a = l.data) == null ? void 0 : _a.readFlag) || p("changeHandle");
      };
      return (a, t) => {
        const s = U, f = Te;
        return y(), C("div", {
          class: "bg-white rounded-xl overflow-hidden news-box mb-2.5",
          onClick: r
        }, [
          _(f, {
            name: a.current,
            border: false
          }, {
            title: h(() => {
              var _a;
              return [
                i("div", ze, [
                  _(s, {
                    dot: !a.data.readFlag,
                    offset: [
                      -3,
                      3
                    ]
                  }, {
                    default: h(() => {
                      var _a2;
                      return [
                        i("img", {
                          src: E(de)(`images/news/${(_a2 = v.value) == null ? void 0 : _a2.img}.png`),
                          class: "w-6 h-6"
                        }, null, 8, Ie)
                      ];
                    }),
                    _: 1
                  }, 8, [
                    "dot"
                  ]),
                  I(" " + w((_a = v.value) == null ? void 0 : _a.label), 1)
                ])
              ];
            }),
            label: h(() => [
              i("div", {
                class: S([
                  "text-base pl-8 text-black",
                  {
                    "line-clamp-2 ": a.current !== a.active,
                    " opacity-60": a.data.readFlag
                  }
                ]),
                innerHTML: a.data[`content${e[E(m)]}`]
              }, null, 10, Pe)
            ]),
            default: h(() => [
              i("div", Re, [
                i("div", He, [
                  t[0] || (t[0] = i("div", {
                    class: "flex-shrink-0 w-[80px] text-[#87837E]"
                  }, "\u521B\u5EFA\u65F6\u95F4", -1)),
                  i("div", null, w(E(z)(a.data.createTime)), 1)
                ]),
                i("div", Me, [
                  t[1] || (t[1] = i("div", {
                    class: "flex-shrink-0 w-[80px] text-[#87837E]"
                  }, "\u56DE\u6B3E\u7F16\u53F7", -1)),
                  i("div", null, w(a.data.loanId), 1)
                ])
              ])
            ]),
            _: 1
          }, 8, [
            "name"
          ]),
          i("div", Oe, [
            i("span", Ae, w(E(z)(a.data.createTime)), 1),
            a.data.amount ? (y(), C("span", {
              key: 0,
              class: S([
                "text-base",
                {
                  "text-[#20E1A7]": a.data.type === 2 || a.data.type === 4,
                  "text-[#FB1A18]": a.data.type === 3 || a.data.type === 5
                }
              ])
            }, [
              a.data.type === 2 || a.data.type === 4 ? (y(), C("span", je, "-")) : P("", true),
              I(w(a.data.amount), 1)
            ], 2)) : P("", true)
          ])
        ]);
      };
    }
  });
  Ue = J(De, [
    [
      "__scopeId",
      "data-v-b62673cb"
    ]
  ]);
  Je = {
    class: "bg-[#F2F0EF] h-full overflow-y-auto font-normal"
  };
  Ke = {
    class: "sticky top-0 z-50 bg-white"
  };
  qe = {
    class: "flex items-center px-2.5 h-[44px]"
  };
  Ye = {
    class: "px-4 pb-4"
  };
  aa = $({
    __name: "index",
    setup(o) {
      const u = T(() => [
        {
          label: "\u5168\u90E8",
          value: null,
          number: s.value.repaymentCount + s.value.refundCount + s.value.lendCount + s.value.borrowCount
        },
        {
          label: "\u8FD8\u6B3E",
          value: 2,
          key: "repaymentCount",
          number: s.value.repaymentCount
        },
        {
          label: "\u56DE\u6B3E",
          value: 3,
          key: "refundCount",
          number: s.value.refundCount
        },
        {
          label: "\u501F\u51FA",
          value: 4,
          key: "lendCount",
          number: s.value.lendCount
        },
        {
          label: "\u501F\u5165",
          value: 5,
          key: "borrowCount",
          number: s.value.borrowCount
        }
      ]), l = L(null), p = (n) => {
        l.value !== n && (l.value = n, v());
      }, m = L(""), e = ce({
        page: 0,
        size: 10,
        finished: false,
        list: [],
        loading: false,
        total: 0
      }), v = () => {
        e.page = 0, e.total = 0, e.finished = false, e.list = [], r();
      }, r = async () => {
        e.loading = true, e.page += 1, await a(), e.loading = false;
      }, a = async () => {
        const n = await ve({
          page: e.page,
          size: e.size,
          type: l.value
        });
        if (e.loading = false, !n.success) {
          e.finished = true;
          return;
        }
        if (!n.data || !+n.total) {
          e.finished = true;
          return;
        }
        e.total = n.total, e.list = e.page === 1 ? n.data : e.list.concat(n.data), e.list.length >= e.total && (e.finished = true);
      }, t = (n) => {
        n.readFlag = 1;
        const d = u.value.find((g) => g.value === n.type);
        try {
          s.value[d.key] -= 1;
        } catch {
        }
        be({
          id: n.id
        });
      }, s = L({
        borrowCount: 0,
        lendCount: 0,
        refundCount: 0,
        repaymentCount: 0
      }), f = async () => {
        const { success: n, data: d } = await ge();
        n && (s.value = d);
      };
      return ue(() => {
        f();
      }), (n, d) => {
        const g = fe, c = pe, k = xe;
        return y(), C("div", Je, [
          i("div", Ke, [
            i("div", qe, [
              _(g, null, {
                default: h(() => d[2] || (d[2] = [
                  i("div", {
                    class: "font-semibold text-sm"
                  }, "\u6D88\u606F\u5217\u8868", -1)
                ])),
                _: 1,
                __: [
                  2
                ]
              })
            ])
          ]),
          _(Ne, {
            list: u.value,
            current: l.value,
            onChangeTab: p
          }, null, 8, [
            "list",
            "current"
          ]),
          i("div", Ye, [
            _(k, {
              modelValue: m.value,
              "onUpdate:modelValue": d[1] || (d[1] = (b) => m.value = b),
              accordion: ""
            }, {
              default: h(() => [
                _(c, {
                  loading: e.loading,
                  "onUpdate:loading": d[0] || (d[0] = (b) => e.loading = b),
                  finished: e.finished,
                  "finished-text": "\u6CA1\u6709\u66F4\u591A\u4E86",
                  "loading-text": "\u6B63\u5728\u52A0\u8F7D",
                  onLoad: r
                }, {
                  default: h(() => [
                    (y(true), C(j, null, D(e.list, (b) => (y(), A(Ue, {
                      key: b.id,
                      active: m.value,
                      current: b.id,
                      data: b,
                      onChangeHandle: (x) => t(b)
                    }, null, 8, [
                      "active",
                      "current",
                      "data",
                      "onChangeHandle"
                    ]))), 128))
                  ]),
                  _: 1
                }, 8, [
                  "loading",
                  "finished"
                ])
              ]),
              _: 1
            }, 8, [
              "modelValue"
            ])
          ])
        ]);
      };
    }
  });
});
export {
  __tla,
  aa as default
};
