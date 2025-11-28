import { aY as L, d as B, Z as C, a1 as w, a2 as R, Q as _, r as h, a4 as N, q as j, l as m, b8 as y, o as A, a6 as U, a8 as Y, e as r, at as q, a9 as b, b6 as F, L as H, T as I, __tla as __tla_0 } from "./index-CVQHjKiH.js";
let D;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const K = Symbol(), M = () => L(K, null), [O, o, Q] = _("list"), V = {
    error: Boolean,
    offset: R(300),
    loading: Boolean,
    disabled: Boolean,
    finished: Boolean,
    scroller: Object,
    errorText: String,
    direction: w("down"),
    loadingText: String,
    finishedText: String,
    immediateCheck: C
  };
  var Z = B({
    name: O,
    props: V,
    emits: [
      "load",
      "update:error",
      "update:loading"
    ],
    setup(e, { emit: c, slots: a }) {
      const l = h(e.loading), u = h(), g = h(), s = M(), T = N(u), v = j(() => e.scroller || T.value), n = () => {
        q(() => {
          if (l.value || e.finished || e.disabled || e.error || (s == null ? void 0 : s.value) === false) return;
          const { direction: t } = e, d = +e.offset, i = b(v);
          if (!i.height || F(u)) return;
          let f = false;
          const x = b(g);
          t === "up" ? f = i.top - x.top <= d : f = x.bottom - i.bottom <= d, f && (l.value = true, c("update:loading", true), c("load"));
        });
      }, S = () => {
        if (e.finished) {
          const t = a.finished ? a.finished() : e.finishedText;
          if (t) return r("div", {
            class: o("finished-text")
          }, [
            t
          ]);
        }
      }, k = () => {
        c("update:error", false), n();
      }, P = () => {
        if (e.error) {
          const t = a.error ? a.error() : e.errorText;
          if (t) return r("div", {
            role: "button",
            class: o("error-text"),
            tabindex: 0,
            onClick: k
          }, [
            t
          ]);
        }
      }, E = () => {
        if (l.value && !e.finished && !e.disabled) return r("div", {
          class: o("loading")
        }, [
          a.loading ? a.loading() : r(H, {
            class: o("loading-icon")
          }, {
            default: () => [
              e.loadingText || Q("loading")
            ]
          })
        ]);
      };
      return m(() => [
        e.loading,
        e.finished,
        e.error
      ], n), s && m(s, (t) => {
        t && n();
      }), y(() => {
        l.value = e.loading;
      }), A(() => {
        e.immediateCheck && n();
      }), U({
        check: n
      }), Y("scroll", n, {
        target: v,
        passive: true
      }), () => {
        var t;
        const d = (t = a.default) == null ? void 0 : t.call(a), i = r("div", {
          ref: g,
          class: o("placeholder")
        }, null);
        return r("div", {
          ref: u,
          role: "feed",
          class: o(),
          "aria-busy": l.value
        }, [
          e.direction === "down" ? d : i,
          E(),
          S(),
          P(),
          e.direction === "up" ? d : i
        ]);
      };
    }
  });
  D = I(Z);
});
export {
  D as L,
  __tla
};
