import { d as T, P as N, Q as $, r as b, as as M, e as a, av as _, L as D, Z as w, a1 as K, a2 as L, q as O, l as p, a7 as E, aL as U, ad as j, ab as q, ag as H, ah as Z, Y as F, aM as Q, ae as Y, T as G, aN as J, c as P, C as R, aO as W, ak as X, E as ee, aP as A, i as I, _ as te, __tla as __tla_0 } from "./index-CVQHjKiH.js";
let fe;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const [ae, V] = $("key"), le = a("svg", {
    class: V("collapse-icon"),
    viewBox: "0 0 30 24"
  }, [
    a("path", {
      d: "M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",
      fill: "currentColor"
    }, null)
  ]), oe = a("svg", {
    class: V("delete-icon"),
    viewBox: "0 0 32 22"
  }, [
    a("path", {
      d: "M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",
      fill: "currentColor"
    }, null)
  ]);
  var C = T({
    name: ae,
    props: {
      type: String,
      text: N,
      color: String,
      wider: Boolean,
      large: Boolean,
      loading: Boolean
    },
    emits: [
      "press"
    ],
    setup(e, { emit: l, slots: c }) {
      const o = b(false), u = M(), h = (r) => {
        u.start(r), o.value = true;
      }, n = (r) => {
        u.move(r), u.direction.value && (o.value = false);
      }, y = (r) => {
        o.value && (c.default || _(r), o.value = false, l("press", e.text, e.type));
      }, g = () => {
        if (e.loading) return a(D, {
          class: V("loading-icon")
        }, null);
        const r = c.default ? c.default() : e.text;
        switch (e.type) {
          case "delete":
            return r || oe;
          case "extra":
            return r || le;
          default:
            return r;
        }
      };
      return () => a("div", {
        class: V("wrapper", {
          wider: e.wider
        }),
        onTouchstartPassive: h,
        onTouchmovePassive: n,
        onTouchend: y,
        onTouchcancel: y
      }, [
        a("div", {
          role: "button",
          tabindex: 0,
          class: V([
            e.color,
            {
              large: e.large,
              active: o.value,
              delete: e.type === "delete"
            }
          ])
        }, [
          g()
        ])
      ]);
    }
  });
  const [ne, f] = $("number-keyboard"), se = {
    show: Boolean,
    title: String,
    theme: K("default"),
    zIndex: N,
    teleport: [
      String,
      Object
    ],
    maxlength: L(1 / 0),
    modelValue: K(""),
    transition: w,
    blurOnClose: w,
    showDeleteKey: w,
    randomKeyOrder: Boolean,
    closeButtonText: String,
    deleteButtonText: String,
    closeButtonLoading: Boolean,
    hideOnClickOutside: w,
    safeAreaInsetBottom: w,
    extraKey: {
      type: [
        String,
        Array
      ],
      default: ""
    }
  };
  function ue(e) {
    for (let l = e.length - 1; l > 0; l--) {
      const c = Math.floor(Math.random() * (l + 1)), o = e[l];
      e[l] = e[c], e[c] = o;
    }
    return e;
  }
  var re = T({
    name: ne,
    inheritAttrs: false,
    props: se,
    emits: [
      "show",
      "hide",
      "blur",
      "input",
      "close",
      "delete",
      "update:modelValue"
    ],
    setup(e, { emit: l, slots: c, attrs: o }) {
      const u = b(), h = () => {
        const t = Array(9).fill("").map((s, i) => ({
          text: i + 1
        }));
        return e.randomKeyOrder && ue(t), t;
      }, n = () => [
        ...h(),
        {
          text: e.extraKey,
          type: "extra"
        },
        {
          text: 0
        },
        {
          text: e.showDeleteKey ? e.deleteButtonText : "",
          type: e.showDeleteKey ? "delete" : ""
        }
      ], y = () => {
        const t = h(), { extraKey: s } = e, i = Array.isArray(s) ? s : [
          s
        ];
        return i.length === 0 ? t.push({
          text: 0,
          wider: true
        }) : i.length === 1 ? t.push({
          text: 0,
          wider: true
        }, {
          text: i[0],
          type: "extra"
        }) : i.length === 2 && t.push({
          text: i[0],
          type: "extra"
        }, {
          text: 0
        }, {
          text: i[1],
          type: "extra"
        }), t;
      }, g = O(() => e.theme === "custom" ? y() : n()), r = () => {
        e.show && l("blur");
      }, v = () => {
        l("close"), e.blurOnClose && r();
      }, z = () => l(e.show ? "show" : "hide"), d = (t, s) => {
        if (t === "") {
          s === "extra" && r();
          return;
        }
        const i = e.modelValue;
        s === "delete" ? (l("delete"), l("update:modelValue", i.slice(0, i.length - 1))) : s === "close" ? v() : i.length < +e.maxlength && (l("input", t), l("update:modelValue", i + t));
      }, m = () => {
        const { title: t, theme: s, closeButtonText: i } = e, S = c["title-left"], k = i && s === "default";
        if (t || k || S) return a("div", {
          class: f("header")
        }, [
          S && a("span", {
            class: f("title-left")
          }, [
            S()
          ]),
          t && a("h2", {
            class: f("title")
          }, [
            t
          ]),
          k && a("button", {
            type: "button",
            class: [
              f("close"),
              q
            ],
            onClick: v
          }, [
            i
          ])
        ]);
      }, B = () => g.value.map((t) => {
        const s = {};
        return t.type === "delete" && (s.default = c.delete), t.type === "extra" && (s.default = c["extra-key"]), a(C, {
          key: t.text,
          text: t.text,
          type: t.type,
          wider: t.wider,
          color: t.color,
          onPress: d
        }, s);
      }), x = () => {
        if (e.theme === "custom") return a("div", {
          class: f("sidebar")
        }, [
          e.showDeleteKey && a(C, {
            large: true,
            text: e.deleteButtonText,
            type: "delete",
            onPress: d
          }, {
            default: c.delete
          }),
          a(C, {
            large: true,
            text: e.closeButtonText,
            type: "close",
            color: "blue",
            loading: e.closeButtonLoading,
            onPress: d
          }, null)
        ]);
      };
      return p(() => e.show, (t) => {
        e.transition || l(t ? "show" : "hide");
      }), e.hideOnClickOutside && E(u, r, {
        eventName: "touchstart"
      }), () => {
        const t = m(), s = a(U, {
          name: e.transition ? "van-slide-up" : ""
        }, {
          default: () => [
            H(a("div", F({
              ref: u,
              style: Y(e.zIndex),
              class: f({
                unfit: !e.safeAreaInsetBottom,
                "with-title": !!t
              }),
              onAnimationend: z,
              onTouchstartPassive: Q
            }, o), [
              t,
              a("div", {
                class: f("body")
              }, [
                a("div", {
                  class: f("keys")
                }, [
                  B()
                ]),
                x()
              ])
            ]), [
              [
                Z,
                e.show
              ]
            ])
          ]
        });
        return e.teleport ? a(j, {
          to: e.teleport
        }, {
          default: () => [
            s
          ]
        }) : s;
      };
    }
  });
  let ie, de, ce, me;
  ie = G(re);
  de = {
    class: "keyboard-input"
  };
  ce = [
    "placeholder"
  ];
  me = T({
    __name: "NumberKeyBoardInput",
    props: {
      modelValue: {},
      placeholder: {},
      max: {},
      reg: {
        default: /^\d+(\.\d{0,4})?$/
      },
      inputShow: {
        type: Boolean,
        default: true
      },
      classStyle: {}
    },
    emits: [
      "update:modelValue",
      "onConfirm",
      "keybordShow"
    ],
    setup(e, { expose: l, emit: c }) {
      const o = b(false), u = e, h = b(u.modelValue ?? ""), n = b(u.modelValue ?? ""), y = (d) => {
        if (u.max && +`${n.value}${d}` > +u.max) {
          n.value = A(Number(u.max)), h.value = A(Number(u.max)), v("update:modelValue", n.value);
          return;
        }
        (u.reg ? u.reg.test(`${n.value}${d}`) : true) && (n.value = `${n.value}${d}`, v("update:modelValue", n.value));
      }, g = () => {
        n.value = n.value.slice(0, -1), v("update:modelValue", n.value);
      }, r = () => {
        v("onConfirm");
      };
      p(() => u.modelValue, (d) => {
        n.value = d ?? "", h.value = d ?? "";
      }), p(() => o.value, () => {
        v("keybordShow", o.value);
      });
      const v = c;
      return J(() => {
      }), l({
        toShow: () => {
          o.value = true;
        },
        show: o
      }), (d, m) => {
        const B = ie;
        return I(), P("div", de, [
          d.inputShow ? H((I(), P("input", {
            key: 0,
            "onUpdate:modelValue": m[0] || (m[0] = (x) => n.value = x),
            style: {
              width: "100%"
            },
            readonly: "",
            clickable: "",
            placeholder: d.placeholder,
            class: ee(d.classStyle),
            onClick: m[1] || (m[1] = X((x) => o.value = true, [
              "stop"
            ]))
          }, null, 10, ce)), [
            [
              W,
              n.value
            ]
          ]) : R("", true),
          a(B, {
            modelValue: h.value,
            "onUpdate:modelValue": m[2] || (m[2] = (x) => h.value = x),
            class: "flash-keyboard",
            theme: "custom",
            "extra-key": ".",
            "close-button-text": d.$t("que-ren"),
            show: o.value,
            "safe-area-inset-bottom": "",
            onBlur: m[3] || (m[3] = (x) => o.value = false),
            onInput: y,
            onDelete: g,
            onClose: r,
            onHide: r
          }, null, 8, [
            "modelValue",
            "close-button-text",
            "show"
          ])
        ]);
      };
    }
  });
  fe = te(me, [
    [
      "__scopeId",
      "data-v-ab9420f9"
    ]
  ]);
});
export {
  fe as N,
  __tla
};
