import { d as k, r as c, q as p, l as f, o as y, m as B, w as b, c as u, t as d, aF as g, E as w, B as h, i as l, _ as A, __tla as __tla_0 } from "./index-CVQHjKiH.js";
import { e as C, __tla as __tla_1 } from "./erc20Contract-DFn00mXD.js";
let S;
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
  })()
]).then(async () => {
  let N, $, q;
  N = {
    key: 0
  };
  $ = {
    key: 1
  };
  q = k({
    __name: "ApproveButton",
    props: {
      contract: {},
      token: {},
      fallBack: {
        type: Function
      },
      loading: {
        type: Boolean
      },
      symbol: {},
      approveAmount: {},
      disabled: {
        type: Boolean
      },
      classes: {}
    },
    setup(i) {
      const a = i, o = c(false), t = c(0), n = p(() => Number(t.value) > 0 && Number(t.value) >= Number(a.approveAmount ?? 0) || a.approveAmount <= 0), r = p(() => C(a.token)), s = async () => {
        o.value = true, t.value = +await (await r.value.allowance(a.contract)).result, o.value = false;
      }, v = async () => {
        o.value = true, await r.value.approve(a.contract), await s();
      }, m = () => {
        n.value ? a == null ? void 0 : a.fallBack() : v();
      };
      return f(() => a.token, () => {
        s();
      }), y(() => {
        s();
      }), (e, E) => {
        const _ = h;
        return l(), B(_, {
          round: "",
          loading: e.loading || o.value,
          disabled: n.value && e.disabled,
          class: w(`${e.classes ?? "text-red-600 px-4 py-2 bg-gray3"}`),
          onClick: m
        }, {
          default: b(() => [
            n.value ? (l(), u("div", $, [
              g(e.$slots, "default", {}, void 0, true)
            ])) : (l(), u("div", N, d(e.$t("shou-quan")) + d(e.symbol ?? null), 1))
          ]),
          _: 3
        }, 8, [
          "loading",
          "disabled",
          "class"
        ]);
      };
    }
  });
  S = A(q, [
    [
      "__scopeId",
      "data-v-93549dae"
    ]
  ]);
});
export {
  S as _,
  __tla
};
