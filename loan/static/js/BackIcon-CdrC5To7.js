import { d as i, c as l, e as u, aF as p, J as k, E as m, k as _, G as d, i as f, _ as b, __tla as __tla_0 } from "./index-CVQHjKiH.js";
let y;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let h;
  h = i({
    __name: "BackIcon",
    props: {
      isWhite: {
        type: Boolean,
        default: false
      },
      url: {},
      backNum: {}
    },
    emits: [
      "back"
    ],
    setup(o, { emit: n }) {
      const e = _(), a = o, t = n, c = () => {
        if (a.url) return t("back"), e.replace(a.url);
        if (a.backNum > 1) return e.go(-a.backNum);
        try {
          window.history.state.back ? e.back() : window.history.length > 2 ? window.history.back() : d();
        } catch {
          e.push("/");
        }
        t("back");
      };
      return (s, w) => {
        const r = k;
        return f(), l("div", {
          class: "z-10 flex items-center gap-1",
          onClick: c
        }, [
          u(r, {
            name: "arrow-left",
            class: m([
              "text-lg font-black",
              {
                white: s.isWhite
              }
            ])
          }, null, 8, [
            "class"
          ]),
          p(s.$slots, "default", {}, void 0, true)
        ]);
      };
    }
  });
  y = b(h, [
    [
      "__scopeId",
      "data-v-a3bc0764"
    ]
  ]);
});
export {
  y as _,
  __tla
};
