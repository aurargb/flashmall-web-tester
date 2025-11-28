import { d as P, ac as E, P as x, a1 as I, Q as G, U, l as _, a6 as y, R as B, e as b, O as S, V as z, r as q, q as v, Z as O, ax as w, J as A, S as C, W as F, X as K, Y as N, T, __tla as __tla_0 } from "./index-CVQHjKiH.js";
let M, Z, $, j;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const [D, X] = G("checkbox-group"), Y = {
    max: x,
    shape: I("round"),
    disabled: Boolean,
    iconSize: x,
    direction: String,
    modelValue: E(),
    checkedColor: String
  }, R = Symbol(D);
  Z = P({
    name: D,
    props: Y,
    emits: [
      "change",
      "update:modelValue"
    ],
    setup(e, { emit: i, slots: u }) {
      const { children: c, linkChildren: t } = U(R), l = (n) => i("update:modelValue", n), h = (n = {}) => {
        typeof n == "boolean" && (n = {
          checked: n
        });
        const { checked: d, skipDisabled: m } = n, o = c.filter((a) => a.props.bindGroup ? a.props.disabled && m ? a.checked.value : d ?? !a.checked.value : false).map((a) => a.name);
        l(o);
      };
      return _(() => e.modelValue, (n) => i("change", n)), y({
        toggleAll: h
      }), B(() => e.modelValue), t({
        props: e,
        updateValue: l
      }), () => {
        var n;
        return b("div", {
          class: X([
            e.direction
          ])
        }, [
          (n = u.default) == null ? void 0 : n.call(u)
        ]);
      };
    }
  });
  $ = {
    name: S,
    disabled: Boolean,
    iconSize: x,
    modelValue: S,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean
  };
  j = P({
    props: z({}, $, {
      bem: w(Function),
      role: String,
      shape: String,
      parent: Object,
      checked: Boolean,
      bindGroup: O,
      indeterminate: {
        type: Boolean,
        default: null
      }
    }),
    emits: [
      "click",
      "toggle"
    ],
    setup(e, { emit: i, slots: u }) {
      const c = q(), t = (a) => {
        if (e.parent && e.bindGroup) return e.parent.props[a];
      }, l = v(() => {
        if (e.parent && e.bindGroup) {
          const a = t("disabled") || e.disabled;
          if (e.role === "checkbox") {
            const s = t("modelValue").length, r = t("max"), k = r && s >= +r;
            return a || k && !e.checked;
          }
          return a;
        }
        return e.disabled;
      }), h = v(() => t("direction")), n = v(() => {
        const a = e.checkedColor || t("checkedColor");
        if (a && e.checked && !l.value) return {
          borderColor: a,
          backgroundColor: a
        };
      }), d = v(() => e.shape || t("shape") || "round"), m = (a) => {
        const { target: s } = a, r = c.value, k = r === s || (r == null ? void 0 : r.contains(s));
        !l.value && (k || !e.labelDisabled) && i("toggle"), i("click", a);
      }, f = () => {
        var a, s;
        const { bem: r, checked: k, indeterminate: V } = e, g = e.iconSize || t("iconSize");
        return b("div", {
          ref: c,
          class: r("icon", [
            d.value,
            {
              disabled: l.value,
              checked: k,
              indeterminate: V
            }
          ]),
          style: d.value !== "dot" ? {
            fontSize: C(g)
          } : {
            width: C(g),
            height: C(g),
            borderColor: (a = n.value) == null ? void 0 : a.borderColor
          }
        }, [
          u.icon ? u.icon({
            checked: k,
            disabled: l.value
          }) : d.value !== "dot" ? b(A, {
            name: V ? "minus" : "success",
            style: n.value
          }, null) : b("div", {
            class: r("icon--dot__icon"),
            style: {
              backgroundColor: (s = n.value) == null ? void 0 : s.backgroundColor
            }
          }, null)
        ]);
      }, o = () => {
        const { checked: a } = e;
        if (u.default) return b("span", {
          class: e.bem("label", [
            e.labelPosition,
            {
              disabled: l.value
            }
          ])
        }, [
          u.default({
            checked: a,
            disabled: l.value
          })
        ]);
      };
      return () => {
        const a = e.labelPosition === "left" ? [
          o(),
          f()
        ] : [
          f(),
          o()
        ];
        return b("div", {
          role: e.role,
          class: e.bem([
            {
              disabled: l.value,
              "label-disabled": e.labelDisabled
            },
            h.value
          ]),
          tabindex: l.value ? void 0 : 0,
          "aria-checked": e.checked,
          onClick: m
        }, [
          a
        ]);
      };
    }
  });
  const [H, J] = G("checkbox"), L = z({}, $, {
    shape: String,
    bindGroup: O,
    indeterminate: {
      type: Boolean,
      default: null
    }
  });
  var Q = P({
    name: H,
    props: L,
    emits: [
      "change",
      "update:modelValue"
    ],
    setup(e, { emit: i, slots: u }) {
      const { parent: c } = F(R), t = (n) => {
        const { name: d } = e, { max: m, modelValue: f } = c.props, o = f.slice();
        if (n) !(m && o.length >= +m) && !o.includes(d) && (o.push(d), e.bindGroup && c.updateValue(o));
        else {
          const a = o.indexOf(d);
          a !== -1 && (o.splice(a, 1), e.bindGroup && c.updateValue(o));
        }
      }, l = v(() => c && e.bindGroup ? c.props.modelValue.indexOf(e.name) !== -1 : !!e.modelValue), h = (n = !l.value) => {
        c && e.bindGroup ? t(n) : i("update:modelValue", n), e.indeterminate !== null && i("change", n);
      };
      return _(() => e.modelValue, (n) => {
        e.indeterminate === null && i("change", n);
      }), y({
        toggle: h,
        props: e,
        checked: l
      }), B(() => e.modelValue), () => b(j, N({
        bem: J,
        role: "checkbox",
        parent: c,
        checked: l.value,
        onToggle: h
      }, e), K(u, [
        "default",
        "icon"
      ]));
    }
  });
  M = T(Q);
});
export {
  M as C,
  __tla,
  Z as a,
  $ as c,
  j as s
};
