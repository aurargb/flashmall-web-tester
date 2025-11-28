import { b3 as T, b4 as I, aN as $, b5 as B, d as N, a2 as p, a1 as O, P as z, Q as H, r as w, a4 as V, a as C, q as v, az as E, V as _, ae as j, l as b, a8 as q, e as g, b6 as y, at as A, a9 as u, b7 as D, aa as F, au as L, T as M, __tla as __tla_0 } from "./index-CVQHjKiH.js";
let K;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function Q(o, f) {
    if (!T || !window.IntersectionObserver) return;
    const r = new IntersectionObserver((e) => {
      f(e[0].intersectionRatio > 0);
    }, {
      root: document.body
    }), s = () => {
      o.value && r.observe(o.value);
    }, d = () => {
      o.value && r.unobserve(o.value);
    };
    I(d), $(d), B(s);
  }
  const [U, W] = H("sticky"), Z = {
    zIndex: z,
    position: O("top"),
    container: Object,
    offsetTop: p(0),
    offsetBottom: p(0)
  };
  var G = N({
    name: U,
    props: Z,
    emits: [
      "scroll",
      "change"
    ],
    setup(o, { emit: f, slots: r }) {
      const s = w(), d = V(s), e = C({
        fixed: false,
        width: 0,
        height: 0,
        transform: 0
      }), c = w(false), i = v(() => E(o.position === "top" ? o.offsetTop : o.offsetBottom)), S = v(() => {
        if (c.value) return;
        const { fixed: t, height: h, width: n } = e;
        if (t) return {
          width: `${n}px`,
          height: `${h}px`
        };
      }), P = v(() => {
        if (!e.fixed || c.value) return;
        const t = _(j(o.zIndex), {
          width: `${e.width}px`,
          height: `${e.height}px`,
          [o.position]: `${i.value}px`
        });
        return e.transform && (t.transform = `translate3d(0, ${e.transform}px, 0)`), t;
      }), k = (t) => f("scroll", {
        scrollTop: t,
        isFixed: e.fixed
      }), m = () => {
        if (!s.value || y(s)) return;
        const { container: t, position: h } = o, n = u(s), R = L(window);
        if (e.width = n.width, e.height = n.height, h === "top") if (t) {
          const a = u(t), l = a.bottom - i.value - e.height;
          e.fixed = i.value > n.top && a.bottom > 0, e.transform = l < 0 ? l : 0;
        } else e.fixed = i.value > n.top;
        else {
          const { clientHeight: a } = document.documentElement;
          if (t) {
            const l = u(t), x = a - l.top - i.value - e.height;
            e.fixed = a - i.value < n.bottom && a > l.top, e.transform = x < 0 ? -x : 0;
          } else e.fixed = a - i.value < n.bottom;
        }
        k(R);
      };
      return b(() => e.fixed, (t) => f("change", t)), q("scroll", m, {
        target: d,
        passive: true
      }), Q(s, m), b([
        D,
        F
      ], () => {
        !s.value || y(s) || !e.fixed || (c.value = true, A(() => {
          const t = u(s);
          e.width = t.width, e.height = t.height, c.value = false;
        }));
      }), () => {
        var t;
        return g("div", {
          ref: s,
          style: S.value
        }, [
          g("div", {
            class: W({
              fixed: e.fixed && !c.value
            }),
            style: P.value
          }, [
            (t = r.default) == null ? void 0 : t.call(r)
          ])
        ]);
      };
    }
  });
  K = M(G);
});
export {
  K as S,
  __tla
};
