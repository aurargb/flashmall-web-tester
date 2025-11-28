import { _ as k, __tla as __tla_0 } from "./RightPop.vue_vue_type_script_setup_true_lang-B1_7GVJX.js";
import { d as w, u as C, r as f, a as B, o as T, c as F, b as m, e as a, t as s, f as r, w as n, g as o, B as h, h as c, F as E, i as M, _ as N, __tla as __tla_1 } from "./index-CVQHjKiH.js";
import { e as S, __tla as __tla_2 } from "./erc20Contract-DFn00mXD.js";
import { _ as V, __tla as __tla_3 } from "./ApproveButton-Dic8X4Em.js";
import { _ as $, __tla as __tla_4 } from "./BackIcon-CdrC5To7.js";
import { u as A, __tla as __tla_5 } from "./index-Culc1QRb.js";
let L;
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
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })()
]).then(async () => {
  let D, I;
  D = {
    class: "flex justify-between gap-2"
  };
  I = w({
    __name: "index",
    setup(O) {
      const { accountStore: _ } = C(), i = f(0), b = async () => {
        const { balanceOf: e } = S(c.MCOIN);
        i.value = +await e();
      }, [P, d] = A(false), l = B([
        {
          label: "\u671F\u9650",
          value: 0,
          currentType: 1,
          option: [
            {
              type: 1,
              label: "\u5929\u6807"
            },
            {
              type: 2,
              label: "1\u6708\u6807"
            },
            {
              type: 3,
              label: "3\u6708\u6807"
            },
            {
              type: 4,
              label: "6\u6708\u6807"
            },
            {
              type: 5,
              label: "12\u6708\u6807"
            }
          ]
        },
        {
          label: "\u5229\u7387",
          value: 1,
          currentType: 1,
          option: [
            {
              type: 1,
              label: "6%\u4EE5\u4E0A"
            },
            {
              type: 2,
              label: "9%\u4EE5\u4E0A"
            },
            {
              type: 3,
              label: "12%\u4EE5\u4E0A"
            }
          ]
        },
        {
          label: "\u8FD8\u6B3E\u65B9\u5F0F",
          value: 2,
          currentType: 2,
          option: [
            {
              type: 1,
              label: "\u7B49\u672C\u7B49\u606F"
            },
            {
              type: 2,
              label: "\u5148\u606F\u540E\u672C"
            },
            {
              type: 3,
              label: "\u8FD8\u672C\u4ED8\u606F"
            }
          ]
        }
      ]), p = f(false), y = async () => {
        p.value = true, p.value = false;
      }, g = (e) => {
        l[e.key].currentType !== e.value && (l[e.key].currentType = e.value);
      }, x = () => {
        const e = l.map((t) => t.currentType);
        e[0], e[1], e[2];
      };
      return T(() => {
        b();
      }), (e, t) => {
        var _a;
        const u = h, v = k;
        return M(), F(E, null, [
          m(s((_a = r(_)) == null ? void 0 : _a.account) + " " + s(e.$t("dui-huan")) + " ", 1),
          a($),
          m(" " + s(e.$t("zi-chan")) + " MC:" + s(i.value) + " ", 1),
          a(u, {
            onClick: t[0] || (t[0] = (j) => r(d)(true))
          }, {
            default: n(() => t[1] || (t[1] = [
              o("span", {
                class: "text-[#2E2008] text-base"
              }, " \u4FA7\u8FB9\u680F ", -1)
            ])),
            _: 1,
            __: [
              1
            ]
          }),
          a(V, {
            loading: p.value,
            approveAmount: 10,
            contract: r(c).flashMall,
            token: r(c).MCOIN,
            fallBack: y,
            class: "btn mt-5 mb-1.5 block font-normal bg-[#FED73A] h-[50px] w-full px-4 text-base text-center leading-[50px]"
          }, {
            default: n(() => t[2] || (t[2] = [
              o("span", {
                class: "text-[#2E2008] text-base"
              }, " \u8F6C\u5E10 ", -1)
            ])),
            _: 1,
            __: [
              2
            ]
          }, 8, [
            "loading",
            "contract",
            "token"
          ]),
          a(v, {
            show: true,
            options: l,
            onChangeFilter: g
          }, {
            footer: n(() => [
              o("div", D, [
                a(u, {
                  class: "btn w-full",
                  style: {
                    border: "1px solid #cdcdcd !important"
                  }
                }, {
                  default: n(() => t[3] || (t[3] = [
                    o("span", null, "\u91CD\u7F6E", -1)
                  ])),
                  _: 1,
                  __: [
                    3
                  ]
                }),
                a(u, {
                  background: "#FED73A",
                  class: "btn w-full btn-yellow",
                  onClick: x
                }, {
                  default: n(() => t[4] || (t[4] = [
                    o("span", null, "\u786E\u8BA4", -1)
                  ])),
                  _: 1,
                  __: [
                    4
                  ]
                })
              ])
            ]),
            _: 1
          }, 8, [
            "options"
          ])
        ], 64);
      };
    }
  });
  L = N(I, [
    [
      "__scopeId",
      "data-v-dc2e0747"
    ]
  ]);
});
export {
  __tla,
  L as default
};
