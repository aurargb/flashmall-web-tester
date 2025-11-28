import { I as r, __tla as __tla_0 } from "./index.es-CLwpJEin.js";
let n, b, d, F, s, u, c, C, t;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  t = () => [
    {
      type: r.EqualInterest,
      label: "\u7B49\u672C\u7B49\u606F",
      des: "\u6BCF\u6708\u8FD8\u6B3E\u672C\u91D1\u5229\u606F\u76F8\u540C",
      legend: "methods1"
    },
    {
      type: r.PrincipalBeforeInterest,
      label: "\u5148\u606F\u540E\u672C",
      des: "\u5148\u8FD8\u5229\u606F\uFF0C\u6700\u540E\u4E00\u671F\u8FD8\u672C\u91D1",
      legend: "methods2"
    },
    {
      type: r.PrincipalAndInterest,
      label: "\u8FD8\u672C\u4ED8\u606F",
      des: "\u5230\u671F\u4E00\u6B21\u6027\u8FD8\u4ED8\u672C\u606F",
      legend: "methods3"
    }
  ];
  s = (e) => {
    switch (e) {
      case 1:
        return {
          label: "\u5F85\u8FD8\u6B3E",
          bgColor: "#FFF7D2",
          color: "#AD941A"
        };
      case 2:
        return {
          label: "\u5DF2\u8FD8\u6B3E",
          bgColor: "#EDEFEF",
          color: "#87837E"
        };
      case 3:
        return {
          label: "\u5DF2\u903E\u671F",
          bgColor: "#FB1A18",
          color: "#FFF"
        };
      case 4:
        return {
          label: "\u5F85\u64AE\u5408",
          bgColor: "#84C61A",
          color: "#84C61A"
        };
    }
  };
  c = (e) => {
    switch (e) {
      case 0:
        return {
          label: "\u7B49\u672C\u7B49\u606F",
          bgColor: "#fef7d6",
          color: "#AD941A"
        };
      case 1:
        return {
          label: "\u5148\u606F\u540E\u672C",
          bgColor: "#e4ebf9",
          color: "#4078E0"
        };
      case 2:
        return {
          label: "\u8FD8\u672C\u4ED8\u606F",
          bgColor: "#f4fff2",
          color: "#14C877"
        };
    }
  };
  b = () => [
    {
      id: null,
      label: "\u5168\u90E8"
    },
    {
      id: 1,
      label: "\u5F85\u64AE\u5408"
    },
    {
      id: 2,
      label: "\u5F85\u8FD8\u6B3E"
    },
    {
      id: 3,
      label: "\u5DF2\u53D6\u6D88"
    },
    {
      id: 4,
      label: "\u5DF2\u7ED3\u6E05"
    }
  ];
  n = (e) => {
    switch (e) {
      case 1:
        return {
          label: "\u5F85\u64AE\u5408",
          bgColor: "#e9f4d4",
          color: "#84C61A"
        };
      case 2:
        return {
          label: "\u5F85\u8FD8\u6B3E",
          bgColor: "#FFF7D2",
          color: "#AD941A"
        };
      case 3:
        return {
          label: "\u5DF2\u53D6\u6D88",
          bgColor: "#f9d9e0",
          color: "#ec5e7c"
        };
      case 4:
        return {
          label: "\u5DF2\u7ED3\u6E05",
          bgColor: "#EDEFEF",
          color: "#87837E"
        };
    }
  };
  d = (e) => {
    switch (e) {
      case 1:
        return {
          label: "\u5F85\u8FD8\u6B3E",
          bgColor: "#FFF7D2",
          color: "#AD941A"
        };
      case 2:
        return {
          label: "\u5DF2\u8FD8\u6B3E",
          bgColor: "#EDEFEF",
          color: "#87837E"
        };
      case 3:
        return {
          label: "\u5DF2\u903E\u671F",
          bgColor: "#FB1A18",
          color: "#FFF"
        };
      case 4:
        return {
          label: "\u5DF2\u8FD8\u6B3E",
          bgColor: "#EDEFEF",
          color: "#87837E"
        };
      default:
        return {
          label: "",
          bgColor: "",
          color: ""
        };
    }
  };
  u = (e) => {
    switch (e) {
      case 1:
        return {
          label: "\u56DE\u6B3E\u4E2D",
          bgColor: "#FFF7D2",
          color: "#AD941A"
        };
      case 2:
        return {
          label: "\u5DF2\u5B8C\u7ED3",
          bgColor: "#EDEFEF",
          color: "#87837E"
        };
      case 3:
        return {
          label: "\u5DF2\u903E\u671F",
          bgColor: "#FB1A18",
          color: "#FFF"
        };
      default:
        return {
          label: "",
          bgColor: "",
          color: ""
        };
    }
  };
  F = () => {
    const o = [];
    for (let l = 1; l <= 30; l++) o.push({
      label: l + "\u5929",
      id: l
    });
    return o;
  };
  C = () => [
    {
      id: 30,
      label: "1\u6708\u6807"
    },
    {
      id: 90,
      label: "3\u6708\u6807"
    },
    {
      id: 180,
      label: "6\u6708\u6807"
    },
    {
      id: 360,
      label: "12\u6708\u6807"
    }
  ];
});
export {
  __tla,
  n as a,
  b,
  d as c,
  F as d,
  s as e,
  u as i,
  c as l,
  C as m,
  t as r
};
