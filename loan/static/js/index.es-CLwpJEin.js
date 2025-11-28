import { z as L, aY as ae, al as G, r as b, aZ as V, q as I, ay as X, l as z, aG as se, __tla as __tla_0 } from "./index-CVQHjKiH.js";
let ue, Q, D, $e, je;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  Q = ((e) => (e[e.EqualInterest = 0] = "EqualInterest", e[e.PrincipalBeforeInterest = 1] = "PrincipalBeforeInterest", e[e.PrincipalAndInterest = 2] = "PrincipalAndInterest", e))(Q || {});
  ue = ((e) => (e[e.MAI = 0] = "MAI", e[e.LP = 1] = "LP", e))(ue || {});
  function le(e, n, t, o) {
    const i = t > 30 ? t / 30 : 1, u = L(e).div(i).toString(), s = t < 30 ? D(e, n, t) : D(e, n, 30), r = L(s).times(o).toString(), a = L(s).plus(r).toString(), l = L(u).plus(a).toString(), f = [];
    for (let c = 1; c <= i; c++) f.push({
      period: c,
      principal: u,
      managementFee: r,
      manageFee: r,
      interest: s,
      totalInterest: a,
      payment: l
    });
    return f;
  }
  function ce(e, n, t, o) {
    const i = t > 30 ? t / 30 : 1, u = t < 30 ? D(e, n, t) : D(e, n, 30), s = L(u).times(o).toString(), r = L(u).plus(s).toString(), a = L(0).plus(r).toString(), l = L(e).plus(r).toString(), f = [];
    for (let c = 1; c < i; c++) f.push({
      period: c,
      interest: u,
      manageFee: s,
      managementFee: s,
      totalInterest: 0,
      principal: 0,
      payment: a
    });
    return f.push({
      period: i,
      interest: u,
      managementFee: s,
      manageFee: s,
      totalInterest: r,
      principal: e,
      payment: l
    }), f;
  }
  function fe(e, n, t, o) {
    const i = t > 30 ? t / 30 : 1, u = D(e, n, t), s = L(u).times(o).toString(), r = L(u).plus(s).toString(), a = L(e).plus(r).toString(), l = [];
    for (let f = 1; f < i; f++) l.push({
      period: f,
      interest: 0,
      managementFee: 0,
      manageFee: 0,
      totalInterest: 0,
      principal: 0,
      payment: 0
    });
    return l.push({
      period: i,
      interest: u,
      managementFee: s,
      manageFee: s,
      totalInterest: r,
      principal: e,
      payment: a
    }), l;
  }
  let de, ve, me, F, J, k, q, M, ee, te, ge, U, y, he, $, pe, Pe;
  D = (e, n, t) => L(e).times(n).times(t).div(360).toString();
  $e = (e, n, t, o, i) => {
    if (e === Q.EqualInterest) return le(n, t, o, i);
    if (e === Q.PrincipalBeforeInterest) return ce(n, t, o, i);
    if (e === Q.PrincipalAndInterest) return fe(n, t, o, i);
  };
  de = {};
  ve = Symbol("GLOBAL_OPTIONS_PROVIDE_KEY");
  me = () => de;
  F = (e) => e;
  J = (e) => Array.isArray(e);
  k = (e) => e !== null && typeof e == "object";
  q = (e) => e instanceof Function;
  M = (e) => e == null;
  ee = typeof window > "u";
  te = () => {
    var e;
    return ee || M((e = window.document) === null || e === void 0 ? void 0 : e.visibilityState) ? true : window.document.visibilityState === "visible";
  };
  ge = () => {
    var e, n;
    return (e = !ee && ((n = window.navigator) === null || n === void 0 ? void 0 : n.onLine)) !== null && e !== void 0 ? e : true;
  };
  U = () => new Promise(() => {
  });
  y = (e) => se(e) ? e.value : e;
  he = (e) => k(e) ? Object.assign(J(e) ? [] : {}, e) : e;
  $ = /* @__PURE__ */ new Map();
  pe = (e) => M(e) ? void 0 : $.get(e);
  Pe = (e, n, t) => {
    const o = $.get(e);
    o != null && o.timer && clearTimeout(o.timer);
    const i = setTimeout(() => $.delete(e), n);
    $.set(e, {
      ...t,
      timer: i
    });
  };
  function ne(e, n, t) {
    let o, i, u, s, r, a, l = 0, f = false, c = false, R = true;
    const v = !n && n !== 0 && typeof window.requestAnimationFrame == "function";
    if (typeof e != "function") throw new TypeError("Expected a function");
    n = +n || 0, k(t) && (f = !!t.leading, c = "maxWait" in t, u = c ? Math.max(+t.maxWait || 0, n) : u, R = "trailing" in t ? !!t.trailing : R);
    function P(d) {
      const T = o, C = i;
      return o = i = void 0, l = d, s = e.apply(C, T), s;
    }
    function m(d, T) {
      return v ? (window.cancelAnimationFrame(r), window.requestAnimationFrame(d)) : setTimeout(d, T);
    }
    function w(d) {
      if (v) return window.cancelAnimationFrame(d);
      clearTimeout(d);
    }
    function g(d) {
      return l = d, r = m(E, n), f ? P(d) : s;
    }
    function p(d) {
      const T = d - a, C = d - l, N = n - T;
      return c ? Math.min(N, u - C) : N;
    }
    function h(d) {
      const T = d - a, C = d - l;
      return a === void 0 || T >= n || T < 0 || c && C >= u;
    }
    function E() {
      const d = Date.now();
      if (h(d)) return S(d);
      r = m(E, p(d));
    }
    function S(d) {
      return r = void 0, R && o ? P(d) : (o = i = void 0, s);
    }
    function A() {
      r !== void 0 && w(r), l = 0, o = a = i = r = void 0;
    }
    function O() {
      return r === void 0 ? s : S(Date.now());
    }
    function B() {
      return r !== void 0;
    }
    function x() {
      const d = Date.now(), T = h(d);
      for (var C = arguments.length, N = new Array(C), W = 0; W < C; W++) N[W] = arguments[W];
      if (o = N, i = this, a = d, T) {
        if (r === void 0) return g(a);
        if (c) return r = m(E, n), P(a);
      }
      return r === void 0 && (r = m(E, n)), s;
    }
    return x.cancel = A, x.flush = O, x.pending = B, x;
  }
  function Ee(e, n, t) {
    let o = true, i = true;
    if (typeof e != "function") throw new TypeError("Expected a function");
    return k(t) && (o = "leading" in t ? !!t.leading : o, i = "trailing" in t ? !!t.trailing : i), ne(e, n, {
      leading: o,
      trailing: i,
      maxWait: n
    });
  }
  var we = F((e, n) => {
    let { debounceInterval: t, debounceOptions: o, manual: i } = n;
    const u = b(false), s = b(), r = I(() => o), a = I(() => y(t)), l = b(e.context.runAsync);
    return i || (u.value = true), X((f) => {
      M(a.value) || (s.value = ne((c) => c(), a.value, r.value), e.context.runAsync = function() {
        for (var c = arguments.length, R = new Array(c), v = 0; v < c; v++) R[v] = arguments[v];
        return new Promise((P, m) => {
          u.value ? (u.value = false, l.value(...R).then(P).catch(m)) : s.value(() => {
            l.value(...R).then(P).catch(m);
          });
        });
      }, f(() => {
        var c;
        (c = s.value) === null || c === void 0 || c.cancel(), e.context.runAsync = l.value;
      }));
    }), {
      onCancel() {
        var f;
        (f = s.value) === null || f === void 0 || f.cancel();
      }
    };
  }), Re = F((e, n) => {
    let { errorRetryCount: t = 0, errorRetryInterval: o = 0 } = n;
    const i = b(), u = b(0), s = I(() => y(t)), r = I(() => y(o));
    let a = false;
    const l = () => {
      u.value = 0;
    }, f = I(() => {
      if (r.value) return r.value;
      const v = 1e3, w = Math.floor(Math.random() * 2 ** Math.min(u.value, 9) + 1);
      return v * w;
    }), c = () => {
      let v;
      const P = s.value === -1, m = u.value < s.value;
      return (P || m) && (P || (u.value += 1), v = setTimeout(() => {
        a = true, e.context.refresh();
      }, f.value)), () => v && clearTimeout(v);
    }, R = () => {
      i.value && i.value();
    };
    return {
      onBefore() {
        a || l(), a = false, R();
      },
      onSuccess() {
        l();
      },
      onError() {
        i.value = c();
      },
      onCancel() {
        l(), R();
      }
    };
  }), Se = F((e, n) => {
    let { ready: t = b(true), manual: o, defaultParams: i = [] } = n;
    return z(t, (u) => {
      !o && u && e.context.run(...i);
    }, {
      flush: "sync"
    }), {
      onBefore() {
        if (!(q(t) ? t() : t.value)) return e.loading.value = false, {
          isBreak: true
        };
      }
    };
  }), be = F((e, n) => {
    let { refreshDeps: t, refreshDepsAction: o, manual: i } = n;
    if (t === void 0 || J(t) && t.length === 0) return {};
    const u = J(t) ? t : [
      t
    ];
    return z(u, () => {
      o ? o() : !i && e.context.refresh();
    }), {};
  }), Te = F((e, n) => {
    let { throttleInterval: t, throttleOptions: o } = n;
    const i = b(), u = I(() => y(t)), s = I(() => o), r = b(e.context.runAsync);
    return X((a) => {
      if (M(t)) return {};
      i.value = Ee((l) => l(), u.value, s.value), e.context.runAsync = function() {
        for (var l = arguments.length, f = new Array(l), c = 0; c < l; c++) f[c] = arguments[c];
        return new Promise((R, v) => {
          i.value(() => {
            r.value(...f).then(R).catch(v);
          });
        });
      }, a(() => {
        var l;
        (l = i.value) === null || l === void 0 || l.cancel(), e.context.runAsync = r.value;
      });
    }), {
      onCancel() {
        var a;
        (a = i.value) === null || a === void 0 || a.cancel();
      }
    };
  });
  const Ce = (e, n) => (t) => {
    Object.keys(t).forEach((o) => {
      e[o].value = t[o];
    }), n.forEach((o) => o(e));
  }, Ae = (e, n) => () => {
    let t = n;
    for (let o = e.length; o-- > 0; ) t = e[o](t);
    return t();
  }, Ie = (e, n, t) => {
    var o, i;
    const { initialData: u, onSuccess: s, onError: r, onBefore: a, onAfter: l } = n, f = b((o = void 0) !== null && o !== void 0 ? o : false), c = V((i = void 0) !== null && i !== void 0 ? i : u), R = V(void 0), v = b(void 0), P = b([]), m = V("pending"), w = {}, g = Ce({
      status: m,
      loading: f,
      data: c,
      error: R,
      params: v
    }, []), p = function(E) {
      for (var S = arguments.length, A = new Array(S > 1 ? S - 1 : 0), O = 1; O < S; O++) A[O - 1] = arguments[O];
      if (E === "onQuery") {
        const B = P.value.map((x) => x.onQuery).filter(Boolean);
        return {
          servicePromise: Ae(B, A[0])()
        };
      } else {
        const B = P.value.map((x) => {
          var d;
          return (d = x[E]) === null || d === void 0 ? void 0 : d.call(x, ...A);
        });
        return Object.assign({}, ...B);
      }
    }, h = b(0);
    return w.runAsync = async function() {
      for (var E = arguments.length, S = new Array(E), A = 0; A < E; A++) S[A] = arguments[A];
      g({
        loading: true,
        params: S,
        status: "pending"
      }), h.value += 1;
      const O = h.value, { isBreak: B, breakResult: x = U() } = p("onBefore", S);
      if (B) return g({
        status: "settled"
      }), x;
      a == null ? void 0 : a(S);
      try {
        const d = () => new Promise((N) => N(e(...v.value)));
        let { servicePromise: T } = p("onQuery", d);
        T || (T = d());
        const C = await T;
        return O !== h.value ? U() : (g({
          data: C,
          loading: false,
          error: void 0,
          status: "settled"
        }), p("onSuccess", C, S), s == null ? void 0 : s(C, S), O === h.value && p("onAfter", S, C, void 0), l == null ? void 0 : l(S), C);
      } catch (d) {
        if (O !== h.value) return U();
        throw g({
          loading: false,
          error: d,
          status: "settled"
        }), p("onError", d, S), r == null ? void 0 : r(d, S), O === h.value && p("onAfter", S, void 0, d), l == null ? void 0 : l(S), d;
      }
    }, w.run = function() {
      w.runAsync(...arguments).catch((E) => {
        r || console.error(E);
      });
    }, w.cancel = () => {
      h.value += 1, g({
        loading: false
      }), p("onCancel");
    }, w.refresh = () => {
      w.run(...v.value || []);
    }, w.refreshAsync = () => w.runAsync(...v.value || []), w.mutate = (E) => {
      const S = q(E) ? E(c.value) : E, A = he(S);
      g({
        data: A
      }), p("onMutate", A);
    }, {
      status: m,
      loading: f,
      data: c,
      error: R,
      params: v,
      plugins: P,
      context: w
    };
  };
  function Le(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
    const o = ae(ve, {}), i = {
      ...me(),
      ...o,
      ...n
    }, { manual: u = false, defaultParams: s = [] } = i, r = Ie(e, i);
    if (r.plugins.value = t.map((a) => a(r, i)), !u) {
      const a = r.params.value || s;
      r.context.run(...a);
    }
    return G(() => {
      r.context.cancel();
    }), {
      loading: r.loading,
      data: r.data,
      error: r.error,
      params: r.params,
      cancel: r.context.cancel,
      refresh: r.context.refresh,
      refreshAsync: r.context.refreshAsync,
      mutate: r.context.mutate,
      run: r.context.run,
      runAsync: r.context.runAsync
    };
  }
  const j = /* @__PURE__ */ new Map(), Oe = (e, n) => {
    j.set(e, n), n.then((t) => (j.delete(e), t)).catch(() => {
      j.delete(e);
    });
  }, xe = (e) => j.get(e), _ = /* @__PURE__ */ new Map(), ye = (e, n) => {
    _.has(e) && _.get(e).forEach((t) => t(n));
  }, Fe = (e, n) => (_.has(e) ? _.get(e).push(n) : _.set(e, [
    n
  ]), () => {
    const t = _.get(e).indexOf(n);
    _.get(e).splice(t, 1);
  });
  var Be = F((e, n) => {
    let { cacheKey: t, cacheTime: o = 6e5, staleTime: i = 0, getCache: u, setCache: s } = n;
    if (!t) return {};
    const r = q(t) ? t : () => t, a = b(() => {
    });
    let l;
    const f = (g) => u ? u(g) : pe(g), c = (g, p, h) => {
      s ? s(g, h) : Pe(g, p, h), ye(g, h.data);
    }, R = (g) => i === -1 || g + i > (/* @__PURE__ */ new Date()).getTime(), v = (g, p) => Object.prototype.hasOwnProperty.call(g, p), P = (g) => {
      const p = r(g);
      return Fe(p, (h) => {
        e.data.value = h;
      });
    }, m = r(), w = f(m);
    return w && v(w, "data") && (e.data.value = w.data, e.params.value = w.params), m && (a.value = P()), G(() => {
      a.value();
    }), {
      onBefore(g) {
        const p = r(g), h = f(p);
        if (!h || !v(h, "data")) return {};
        if (R(h.time)) return e.data.value = h.data, e.loading.value = false, {
          isBreak: true,
          breakResult: h.data
        };
        e.data.value = h.data;
      },
      onQuery(g) {
        const p = e.params.value, h = r(p);
        let E = xe(h);
        return E && E !== l ? () => E : (E = g(), l = E, Oe(h, E), () => E);
      },
      onSuccess(g, p) {
        const h = r(p);
        h && (a.value(), c(h, o, {
          data: g,
          params: p,
          time: (/* @__PURE__ */ new Date()).getTime()
        }), a.value = P(p));
      },
      onMutate(g) {
        const p = r(e.params.value);
        p && (a.value(), c(p, o, {
          data: g,
          params: e.params.value,
          time: (/* @__PURE__ */ new Date()).getTime()
        }), a.value = P(e.params.value));
      }
    };
  });
  function Ne(e) {
    let n, t;
    class o extends Promise {
      constructor(u) {
        super(u), this.cancel = () => {
          t(), clearTimeout(n);
        };
      }
    }
    return new o((i) => {
      t = i, n = setTimeout(t, e);
    });
  }
  function H() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  var _e = F((e, n) => {
    let { loadingDelay: t = 0, loadingKeep: o = 0 } = n;
    const i = b(() => {
    }), u = I(() => y(t)), s = I(() => y(o));
    let r = 0, a = {};
    const l = () => {
      let f;
      return u.value && (f = setTimeout(() => {
        e.status.value === "pending" && (e.loading.value = true);
      }, u.value)), () => f && clearTimeout(f);
    };
    return {
      onBefore() {
        e.loading.value = !u.value, i.value(), i.value = l(), r = H();
      },
      onQuery(f) {
        if (!s.value) return () => f();
        a = Ne(s.value + u.value);
        const c = async () => {
          try {
            const v = await f();
            return H() - r <= u.value && a.cancel(), Promise.resolve(v);
          } catch (v) {
            return H() - r <= u.value && a.cancel(), Promise.reject(v);
          }
        }, R = Promise.allSettled([
          c(),
          a
        ]).then((v) => {
          const P = v[0];
          return P.status === "fulfilled" ? P.value : Promise.reject(P.reason);
        });
        return () => R;
      },
      onCancel() {
        i.value();
      },
      onAfter() {
        i.value();
      }
    };
  }), Y;
  const re = /* @__PURE__ */ new Set(), oe = /* @__PURE__ */ new Set(), ie = /* @__PURE__ */ new Set(), K = (e, n) => {
    let t;
    switch (e) {
      case "FOCUS_LISTENER":
        t = re;
        break;
      case "RECONNECT_LISTENER":
        t = ie;
        break;
      case "VISIBLE_LISTENER":
        t = oe;
        break;
    }
    if (!t.has(n)) return t.add(n), () => {
      t.delete(n);
    };
  }, Z = (e) => {
    e.forEach((n) => {
      n();
    });
  };
  !ee && (Y = window) !== null && Y !== void 0 && Y.addEventListener && (window.addEventListener("visibilitychange", () => {
    te() && Z(oe);
  }, false), window.addEventListener("focus", () => Z(re), false), window.addEventListener("online", () => Z(ie), false));
  var De = F((e, n) => {
    let { pollingInterval: t, pollingWhenHidden: o = false, pollingWhenOffline: i = false, errorRetryCount: u = 0 } = n;
    const s = b(), r = b(false), a = I(() => y(t)), l = I(() => y(u)), f = [], c = (m) => {
      m && f.push(m);
    }, R = () => (o || te()) && (i || ge()), v = (m) => {
      if (e.error.value && l.value !== 0) return;
      let w;
      if (!M(a.value) && a.value >= 0) if (R()) w = setTimeout(m, a.value);
      else {
        r.value = true;
        return;
      }
      return () => w && clearTimeout(w);
    }, P = () => {
      r.value && R() && (e.context.refresh(), r.value = false);
    };
    return z(a, () => {
      s.value && (s.value(), s.value = v(() => e.context.refresh()));
    }), o || c(K("VISIBLE_LISTENER", P)), i || c(K("RECONNECT_LISTENER", P)), G(() => {
      f.forEach((m) => m());
    }), {
      onBefore() {
        var m;
        (m = s.value) === null || m === void 0 || m.call(s);
      },
      onCancel() {
        var m;
        (m = s.value) === null || m === void 0 || m.call(s);
      },
      onAfter() {
        s.value = v(() => e.context.refresh());
      }
    };
  });
  const Me = (e, n) => {
    let t = false;
    return function() {
      t || (t = true, e(...arguments), setTimeout(() => {
        t = false;
      }, n));
    };
  };
  var We = F((e, n) => {
    let { refreshOnWindowFocus: t = false, refocusTimespan: o = 5e3 } = n;
    const i = I(() => y(t)), u = I(() => y(o)), s = [], r = (l) => {
      l && s.push(l);
    }, a = () => {
      s.forEach((l) => l());
    };
    return X(() => {
      if (a(), i.value) {
        const l = Me(e.context.refresh, u.value);
        r(K("VISIBLE_LISTENER", l)), r(K("FOCUS_LISTENER", l));
      }
    }), G(() => {
      a();
    }), {};
  });
  je = function(e, n, t) {
    return Le(e, n, [
      _e,
      Re,
      we,
      De,
      Te,
      We,
      be,
      Se,
      Be
    ]);
  };
});
export {
  ue as D,
  Q as I,
  __tla,
  D as e,
  $e as g,
  je as u
};
