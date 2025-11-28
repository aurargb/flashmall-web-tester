import { d as t, c as a, g as s, aF as o, f as n, K as r, t as l, i as c, __tla as __tla_0 } from "./index-CVQHjKiH.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let m, i, p;
  m = {
    class: "py-24 flex flex-col items-center justify-center"
  };
  i = [
    "src"
  ];
  p = {
    class: "mt-4 font-normal"
  };
  g = t({
    __name: "Empty",
    props: {
      name: {},
      imgUrl: {
        default: () => "empty.png"
      }
    },
    setup(_) {
      return (e, d) => (c(), a("div", m, [
        s("img", {
          src: n(r)(`images/loan/${e.imgUrl}`),
          class: "w-[146px] h-auto"
        }, null, 8, i),
        s("div", p, l(e.name || "\u6682\u65E0\u6570\u636E"), 1),
        o(e.$slots, "default")
      ]));
    }
  });
});
export {
  g as _,
  __tla
};
