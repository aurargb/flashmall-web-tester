import { aH as W, aq as l, aI as k, aJ as B, aK as x, ar as z, q as i, z as o, h as L, __tla as __tla_0 } from "./index-CVQHjKiH.js";
import { u as c, __tla as __tla_1 } from "./index.es-CLwpJEin.js";
import { e as v, __tla as __tla_2 } from "./erc20Contract-DFn00mXD.js";
let G;
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
  })()
]).then(async () => {
  const H = () => {
    const n = W(), s = async (t) => {
      const a = k().getCurrentAccount(), r = t || a;
      try {
        return Number(await n.queryId(r));
      } catch {
        return 0;
      }
    };
    return {
      queryId: s,
      userTotalLp: async (t) => {
        try {
          const a = t || +await s(), r = await n.userTotalLp(a);
          return l(r).toString();
        } catch {
          return "";
        }
      },
      pendingLp: async (t) => {
        try {
          const a = t || +await s(), r = await n.pendingLp(a);
          return l(r).toString();
        } catch {
          return "";
        }
      },
      lpLock: async (t) => {
        try {
          const a = t || +await s(), r = await n.merchantCriditOrderLpLock(a);
          return l(r).toString();
        } catch {
          return "";
        }
      },
      userLpLockFromP2P: async (t) => {
        try {
          const a = t || +await s(), r = await n.userLpLockFromP2P(a);
          return l(r).toString();
        } catch {
          return "";
        }
      }
    };
  }, J = () => {
    const n = B();
    return {
      getReserves: async () => {
        try {
          const e = await n.getReserves();
          return x(e);
        } catch (e) {
          return z(e);
        }
      },
      totalSupply: async () => {
        try {
          const e = await n.totalSupply();
          return l(e);
        } catch {
          return "";
        }
      }
    };
  };
  G = function() {
    const { getCurrentAccount: n } = k(), { totalSupply: s } = J(), { userTotalLp: d, pendingLp: e, userLpLockFromP2P: g, lpLock: m } = H(), t = i(() => !!n()), { data: a, loading: r, refreshAsync: u } = c(e, {
      defaultParams: [],
      initialData: "",
      ready: t
    }), C = async () => {
      h(), u();
    }, { data: y, loading: A, refreshAsync: F } = c(m, {
      defaultParams: [],
      initialData: "",
      ready: t
    }), { data: f } = c(g, {
      defaultParams: [],
      initialData: "",
      ready: t
    }), { data: P, loading: D, refreshAsync: h } = c(d, {
      defaultParams: [],
      initialData: "",
      ready: t
    }), { data: w, loading: b, refreshAsync: M } = c(s, {
      defaultParams: [],
      initialData: "",
      ready: t
    }), R = async () => {
      const p = await Promise.all([
        v(L.WMAI).balanceOf(L.LP),
        v(L.MCOIN).balanceOf(L.LP)
      ]);
      return {
        mcoinPrice: o(p[1]).div(p[0]).toString(),
        poolWmai: o(p[0]).toString(),
        poolMcoin: o(p[1]).toString()
      };
    }, { data: S, loading: q, refreshAsync: I } = c(R, {
      initialData: {
        mcoinPrice: "",
        poolWmai: "",
        poolMcoin: ""
      },
      ready: t
    }), T = i(() => o(a.value).plus(P.value).toString()), N = i(() => o(P.value).minus(y.value).minus(f.value).toString()), O = i(() => o(o(1).div(w.value)).times(S.value.poolMcoin).times(1).toString()), V = i(() => o(o(1).div(w.value)).times(S.value.poolWmai).times(1).toString());
    return {
      refreshLpSupply: M,
      refreshLp: u,
      refreshTotal: h,
      refresh: C,
      refreshFlowValue: I,
      refreshLockLp: F,
      flowValueLoading: q,
      lpSupplyLoading: b,
      lpMaiPrice: V,
      lpMcoinPrice: O,
      availableLp: N,
      lpLoading: D,
      pendLpLoading: r,
      pendingLpData: a,
      lpLockFromP2P: f,
      lockLpAmount: y,
      lockLoading: A,
      totalLp: T
    };
  };
});
export {
  __tla,
  G as u
};
