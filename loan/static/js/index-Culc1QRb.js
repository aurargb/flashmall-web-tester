import { aG as f, r as v, f as n, __tla as __tla_0 } from "./index-CVQHjKiH.js";
let w;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var r;
  const d = typeof window < "u";
  d && ((r = window == null ? void 0 : window.navigator) != null && r.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
  w = function(t = false, o = {}) {
    const { truthyValue: u = true, falsyValue: s = false } = o, l = f(t), e = v(t);
    function a(i) {
      return arguments.length ? (e.value = i, e.value) : (e.value = e.value === n(u) ? n(s) : n(u), e.value);
    }
    return l ? a : [
      e,
      a
    ];
  };
});
export {
  __tla,
  w as u
};
