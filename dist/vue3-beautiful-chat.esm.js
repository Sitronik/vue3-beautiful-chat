import { reactive as y1, openBlock as b, createElementBlock as m, normalizeStyle as j, createCommentVNode as z, renderSlot as k, createTextVNode as Nu, toDisplayString as Z, createElementVNode as p, resolveComponent as O, createVNode as L, withCtx as x, resolveDirective as w1, normalizeClass as DD, withDirectives as qf, createBlock as V, Fragment as qu, renderList as Ku, vShow as k1, withModifiers as Gu, pushScopeId as x1, popScopeId as S1, nextTick as T1, withScopeId as $1, withKeys as O1, mergeProps as Lf, createApp as j1, h as P1 } from "vue";
const Du = {
  state: y1({
    editMessage: null
  }),
  setState(D, u) {
    this.state[D] = u;
  }
};
function Rf(D) {
  const u = {};
  return D.forEach((f) => {
    u[f] = function() {
      return Du.state[f];
    };
  }), u;
}
const M = (D, u) => {
  const f = D.__vccOpts || D;
  for (const [e, F] of u)
    f[e] = F;
  return f;
}, I1 = {
  props: {
    /*icons: {
      type: Object,
      default: function () {
        return {
          close: {
            img: null,
            name: 'default'
          },
          minimize: {
            img: null,
            name: 'default'
          }
        }
      }
    },*/
    title: {
      type: String,
      required: !0
    },
    colors: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      inUserList: !1
    };
  },
  computed: {
    ...Rf(["disableUserListToggle", "titleImageUrl", "showCloseButton", "showMinimizeButton"])
  },
  methods: {
    toggleUserList() {
      this.inUserList = !this.inUserList, this.$emit("userList", this.inUserList);
    }
  }
}, z1 = ["src"], N1 = {
  key: 2,
  class: "sc-header--title"
};
function q1(D, u, f, e, F, t) {
  return b(), m("div", {
    class: "sc-header",
    style: j({ background: f.colors.header.bg, color: f.colors.header.text, zIndex: 1 })
  }, [
    D.titleImageUrl ? (b(), m("img", {
      key: 0,
      class: "sc-header--img",
      src: D.titleImageUrl,
      alt: ""
    }, null, 8, z1)) : z("", !0),
    D.disableUserListToggle ? (b(), m("div", N1, [
      k(D.$slots, "default", {}, () => [
        Nu(Z(f.title), 1)
      ], !0)
    ])) : (b(), m("div", {
      key: 1,
      class: "sc-header--title enabled",
      onClick: u[0] || (u[0] = (...a) => t.toggleUserList && t.toggleUserList(...a))
    }, [
      k(D.$slots, "default", {}, () => [
        Nu(Z(f.title), 1)
      ], !0)
    ])),
    D.showMinimizeButton ? (b(), m("div", {
      key: 3,
      class: "sc-header--minimize-button",
      onClick: u[1] || (u[1] = (a) => D.$emit("minimize"))
    }, [
      (b(), m("svg", {
        style: j({ fill: f.colors.header.text }),
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 47.971 47.971"
      }, u[3] || (u[3] = [
        p("g", null, [
          p("rect", {
            x: "0",
            y: "20",
            width: "47.971",
            height: "6.5",
            rx: "3",
            ry: "3"
          })
        ], -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1)
      ]), 4))
    ])) : z("", !0),
    D.showCloseButton ? (b(), m("div", {
      key: 4,
      class: "sc-header--close-button",
      onClick: u[2] || (u[2] = (a) => D.$emit("close"))
    }, [
      (b(), m("svg", {
        style: j({ fill: f.colors.header.text }),
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 47.971 47.971"
      }, u[4] || (u[4] = [
        p("g", null, [
          p("path", { d: `M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
		c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
		C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
		s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z` })
        ], -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1),
        p("g", null, null, -1)
      ]), 4))
    ])) : z("", !0)
  ], 4);
}
const L1 = /* @__PURE__ */ M(I1, [["render", q1], ["__scopeId", "data-v-83a4c0f7"]]), R1 = {
  props: {
    iconName: {
      type: String,
      default: "box"
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: "currentColor"
    }
  }
}, M1 = ["width", "height", "aria-labelledby"], H1 = ["id"], U1 = ["fill"];
function V1(D, u, f, e, F, t) {
  return b(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: f.width,
    height: f.height,
    viewBox: "0 0 18 18",
    "aria-labelledby": f.iconName,
    role: "presentation"
  }, [
    p("title", {
      id: f.iconName,
      lang: "en"
    }, Z(f.iconName), 9, H1),
    p("g", { fill: f.iconColor }, [
      k(D.$slots, "default", {}, void 0, !0)
    ], 8, U1)
  ], 8, M1);
}
const Mf = /* @__PURE__ */ M(R1, [["render", V1], ["__scopeId", "data-v-1fd45a6c"]]), W1 = {}, G1 = { d: "M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z" };
function Y1(D, u) {
  return b(), m("path", G1);
}
const X1 = /* @__PURE__ */ M(W1, [["render", Y1]]), K1 = {}, Z1 = { d: "M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z" };
function Q1(D, u) {
  return b(), m("path", Z1);
}
const Hf = /* @__PURE__ */ M(K1, [["render", Q1]]), df = (D) => D.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function J1(D, ...u) {
  if (typeof D == "string")
    return df(D);
  let f = D[0];
  for (const [e, F] of u.entries())
    f = f + df(String(F)) + D[e + 1];
  return f;
}
var u0 = "4.1.0";
function D0(D) {
  return D === void 0;
}
function fu(D) {
  return typeof D == "boolean";
}
function f0(D, u) {
  for (var f in u)
    u.hasOwnProperty(f) && D0(D[f]) && (D[f] = u[f]);
  return D;
}
function e0(D, u, f) {
  var e;
  return D.length > u && (f == null ? (f = "&hellip;", e = 3) : e = f.length, D = D.substring(0, u - e) + f), D;
}
function I(D, u) {
  for (var f = D.length - 1; f >= 0; f--)
    D[f] === u && D.splice(f, 1);
}
function wu(D, u) {
  for (var f = D.length - 1; f >= 0; f--)
    u(D[f]) === !0 && D.splice(f, 1);
}
function Iu(D) {
  throw new Error("Unhandled case for value: '".concat(D, "'"));
}
var zu = /[A-Za-z]/, J = /[\d]/, du = /\s/, OD = /['"]/, t0 = /[\x00-\x1F\x7F]/, F0 = /A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC/.source, n0 = /\u2700-\u27bf\udde6-\uddff\ud800-\udbff\udc00-\udfff\ufe0e\ufe0f\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0\ud83c\udffb-\udfff\u200d\u3299\u3297\u303d\u3030\u24c2\ud83c\udd70-\udd71\udd7e-\udd7f\udd8e\udd91-\udd9a\udde6-\uddff\ude01-\ude02\ude1a\ude2f\ude32-\ude3a\ude50-\ude51\u203c\u2049\u25aa-\u25ab\u25b6\u25c0\u25fb-\u25fe\u00a9\u00ae\u2122\u2139\udc04\u2600-\u26FF\u2b05\u2b06\u2b07\u2b1b\u2b1c\u2b50\u2b55\u231a\u231b\u2328\u23cf\u23e9-\u23f3\u23f8-\u23fa\udccf\u2935\u2934\u2190-\u21ff/.source, a0 = /\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F/.source, d0 = F0 + n0 + a0, r0 = /0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19/.source, Uf = d0 + r0, Su = new RegExp("[".concat(Uf, "]")), Vf = (
  /** @class */
  function() {
    function D(u) {
      u === void 0 && (u = {}), this.tagName = "", this.attrs = {}, this.innerHTML = "", this.tagName = u.tagName || "", this.attrs = u.attrs || {}, this.innerHTML = u.innerHtml || u.innerHTML || "";
    }
    return D.prototype.setTagName = function(u) {
      return this.tagName = u, this;
    }, D.prototype.getTagName = function() {
      return this.tagName || "";
    }, D.prototype.setAttr = function(u, f) {
      var e = this.getAttrs();
      return e[u] = f, this;
    }, D.prototype.getAttr = function(u) {
      return this.getAttrs()[u];
    }, D.prototype.setAttrs = function(u) {
      return Object.assign(this.getAttrs(), u), this;
    }, D.prototype.getAttrs = function() {
      return this.attrs || (this.attrs = {});
    }, D.prototype.setClass = function(u) {
      return this.setAttr("class", u);
    }, D.prototype.addClass = function(u) {
      for (var f = this.getClass(), e = f ? f.split(du) : [], F = u.split(du), t; t = F.shift(); )
        e.indexOf(t) === -1 && e.push(t);
      return this.getAttrs().class = e.join(" "), this;
    }, D.prototype.removeClass = function(u) {
      for (var f = this.getClass(), e = f ? f.split(du) : [], F = u.split(du), t; e.length && (t = F.shift()); ) {
        var a = e.indexOf(t);
        a !== -1 && e.splice(a, 1);
      }
      return this.getAttrs().class = e.join(" "), this;
    }, D.prototype.getClass = function() {
      return this.getAttrs().class || "";
    }, D.prototype.hasClass = function(u) {
      return (" " + this.getClass() + " ").indexOf(" " + u + " ") !== -1;
    }, D.prototype.setInnerHTML = function(u) {
      return this.innerHTML = u, this;
    }, D.prototype.setInnerHtml = function(u) {
      return this.setInnerHTML(u);
    }, D.prototype.getInnerHTML = function() {
      return this.innerHTML || "";
    }, D.prototype.getInnerHtml = function() {
      return this.getInnerHTML();
    }, D.prototype.toAnchorString = function() {
      var u = this.getTagName(), f = this.buildAttrsStr();
      return f = f ? " " + f : "", ["<", u, f, ">", this.getInnerHtml(), "</", u, ">"].join("");
    }, D.prototype.buildAttrsStr = function() {
      if (!this.attrs)
        return "";
      var u = this.getAttrs(), f = [];
      for (var e in u)
        u.hasOwnProperty(e) && f.push(e + '="' + u[e] + '"');
      return f.join(" ");
    }, D;
  }()
);
function i0(D, u, f) {
  var e, F;
  f == null ? (f = "&hellip;", F = 3, e = 8) : (F = f.length, e = f.length);
  var t = function(v) {
    var A = {}, g = v, h = g.match(/^([a-z]+):\/\//i);
    return h && (A.scheme = h[1], g = g.substr(h[0].length)), h = g.match(/^(.*?)(?=(\?|#|\/|$))/i), h && (A.host = h[1], g = g.substr(h[0].length)), h = g.match(/^\/(.*?)(?=(\?|#|$))/i), h && (A.path = h[1], g = g.substr(h[0].length)), h = g.match(/^\?(.*?)(?=(#|$))/i), h && (A.query = h[1], g = g.substr(h[0].length)), h = g.match(/^#(.*?)$/i), h && (A.fragment = h[1]), A;
  }, a = function(v) {
    var A = "";
    return v.scheme && v.host && (A += v.scheme + "://"), v.host && (A += v.host), v.path && (A += "/" + v.path), v.query && (A += "?" + v.query), v.fragment && (A += "#" + v.fragment), A;
  }, n = function(v, A) {
    var g = A / 2, h = Math.ceil(g), S = -1 * Math.floor(g), T = "";
    return S < 0 && (T = v.substr(S)), v.substr(0, h) + f + T;
  };
  if (D.length <= u)
    return D;
  var r = u - F, o = t(D);
  if (o.query) {
    var d = o.query.match(/^(.*?)(?=(\?|\#))(.*?)$/i);
    d && (o.query = o.query.substr(0, d[1].length), D = a(o));
  }
  if (D.length <= u || (o.host && (o.host = o.host.replace(/^www\./, ""), D = a(o)), D.length <= u))
    return D;
  var c = "";
  if (o.host && (c += o.host), c.length >= r)
    return o.host.length == u ? (o.host.substr(0, u - F) + f).substr(0, r + e) : n(c, r).substr(0, r + e);
  var s = "";
  if (o.path && (s += "/" + o.path), o.query && (s += "?" + o.query), s)
    if ((c + s).length >= r) {
      if ((c + s).length == u)
        return (c + s).substr(0, u);
      var B = r - c.length;
      return (c + n(s, B)).substr(0, r + e);
    } else
      c += s;
  if (o.fragment) {
    var E = "#" + o.fragment;
    if ((c + E).length >= r) {
      if ((c + E).length == u)
        return (c + E).substr(0, u);
      var y = r - c.length;
      return (c + n(E, y)).substr(0, r + e);
    } else
      c += E;
  }
  if (o.scheme && o.host) {
    var _ = o.scheme + "://";
    if ((c + _).length < r)
      return (_ + c).substr(0, u);
  }
  if (c.length <= u)
    return c;
  var w = "";
  return r > 0 && (w = c.substr(-1 * Math.floor(r / 2))), (c.substr(0, Math.ceil(r / 2)) + f + w).substr(0, r + e);
}
function s0(D, u, f) {
  if (D.length <= u)
    return D;
  var e, F;
  f == null ? (f = "&hellip;", e = 8, F = 3) : (e = f.length, F = f.length);
  var t = u - F, a = "";
  return t > 0 && (a = D.substr(-1 * Math.floor(t / 2))), (D.substr(0, Math.ceil(t / 2)) + f + a).substr(0, t + e);
}
function o0(D, u, f) {
  return e0(D, u, f);
}
var C0 = (
  /** @class */
  function() {
    function D(u) {
      u === void 0 && (u = {}), this.newWindow = !1, this.truncate = {}, this.className = "", this.newWindow = u.newWindow || !1, this.truncate = u.truncate || {}, this.className = u.className || "";
    }
    return D.prototype.build = function(u) {
      return new Vf({
        tagName: "a",
        attrs: this.createAttrs(u),
        innerHtml: this.processAnchorText(u.getAnchorText())
      });
    }, D.prototype.createAttrs = function(u) {
      var f = {
        href: u.getAnchorHref()
        // we'll always have the `href` attribute
      }, e = this.createCssClass(u);
      return e && (f.class = e), this.newWindow && (f.target = "_blank", f.rel = "noopener noreferrer"), this.truncate && this.truncate.length && this.truncate.length < u.getAnchorText().length && (f.title = u.getAnchorHref()), f;
    }, D.prototype.createCssClass = function(u) {
      var f = this.className;
      if (f) {
        for (var e = [f], F = u.getCssClassSuffixes(), t = 0, a = F.length; t < a; t++)
          e.push(f + "-" + F[t]);
        return e.join(" ");
      } else
        return "";
    }, D.prototype.processAnchorText = function(u) {
      return u = this.doTruncate(u), u;
    }, D.prototype.doTruncate = function(u) {
      var f = this.truncate;
      if (!f || !f.length)
        return u;
      var e = f.length, F = f.location;
      return F === "smart" ? i0(u, e) : F === "middle" ? s0(u, e) : o0(u, e);
    }, D;
  }()
), HD = function(D, u) {
  return HD = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(f, e) {
    f.__proto__ = e;
  } || function(f, e) {
    for (var F in e) Object.prototype.hasOwnProperty.call(e, F) && (f[F] = e[F]);
  }, HD(D, u);
};
function fD(D, u) {
  if (typeof u != "function" && u !== null)
    throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
  HD(D, u);
  function f() {
    this.constructor = D;
  }
  D.prototype = u === null ? Object.create(u) : (f.prototype = u.prototype, new f());
}
var Y = function() {
  return Y = Object.assign || function(u) {
    for (var f, e = 1, F = arguments.length; e < F; e++) {
      f = arguments[e];
      for (var t in f) Object.prototype.hasOwnProperty.call(f, t) && (u[t] = f[t]);
    }
    return u;
  }, Y.apply(this, arguments);
};
var eD = (
  /** @class */
  function() {
    function D(u) {
      this._ = null, this.matchedText = "", this.offset = 0, this.tagBuilder = u.tagBuilder, this.matchedText = u.matchedText, this.offset = u.offset;
    }
    return D.prototype.getMatchedText = function() {
      return this.matchedText;
    }, D.prototype.setOffset = function(u) {
      this.offset = u;
    }, D.prototype.getOffset = function() {
      return this.offset;
    }, D.prototype.getCssClassSuffixes = function() {
      return [this.type];
    }, D.prototype.buildTag = function() {
      return this.tagBuilder.build(this);
    }, D;
  }()
), c0 = "(?:xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--clchc0ea0b2g2a9gcd|xn--w4r85el8fhu5dnra|travelersinsurance|vermögensberatung|xn--5su34j936bgsg|xn--bck1b9a5dre4c|xn--mgbah1a3hjkrd|xn--mgbai9azgqp6j|xn--mgberp4a5d4ar|xn--xkc2dl3a5ee0h|vermögensberater|xn--fzys8d69uvgm|xn--mgba7c0bbn0a|xn--mgbcpq6gpa1a|xn--xkc2al3hye2a|americanexpress|kerryproperties|sandvikcoromant|xn--i1b6b1a6a2e|xn--kcrx77d1x4a|xn--lgbbat1ad8j|xn--mgba3a4f16a|xn--mgbc0a9azcg|xn--nqv7fs00ema|americanfamily|kerrylogistics|weatherchannel|xn--54b7fta0cc|xn--6qq986b3xl|xn--80aqecdr1a|xn--b4w605ferd|xn--fiq228c5hs|xn--h2breg3eve|xn--jlq480n2rg|xn--mgba3a3ejt|xn--mgbaam7a8h|xn--mgbayh7gpa|xn--mgbbh1a71e|xn--mgbca7dzdo|xn--mgbi4ecexp|xn--mgbx4cd0ab|xn--rvc1e0am3e|international|lifeinsurance|wolterskluwer|xn--cckwcxetd|xn--eckvdtc9d|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--h2brj9c8c|xn--tiq49xqyj|xn--yfro4i67o|xn--ygbi2ammx|construction|lplfinancial|scholarships|versicherung|xn--3e0b707e|xn--45br5cyl|xn--4dbrk0ce|xn--80adxhks|xn--80asehdb|xn--8y0a063a|xn--gckr3f0f|xn--mgb9awbf|xn--mgbab2bd|xn--mgbgu82a|xn--mgbpl2fh|xn--mgbt3dhd|xn--mk1bu44c|xn--ngbc5azd|xn--ngbe9e0a|xn--ogbpf8fl|xn--qcka1pmc|accountants|barclaycard|blackfriday|blockbuster|bridgestone|calvinklein|contractors|creditunion|engineering|enterprises|investments|kerryhotels|lamborghini|motorcycles|olayangroup|photography|playstation|productions|progressive|redumbrella|williamhill|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--3bst00m|xn--3ds443g|xn--3hcrj9c|xn--42c2d9a|xn--45brj9c|xn--55qw42g|xn--6frz82g|xn--80ao21a|xn--9krt00a|xn--cck2b3b|xn--czr694b|xn--d1acj3b|xn--efvy88h|xn--fct429k|xn--fjq720a|xn--flw351e|xn--g2xx48c|xn--gecrj9c|xn--gk3at1e|xn--h2brj9c|xn--hxt814e|xn--imr513n|xn--j6w193g|xn--jvr189m|xn--kprw13d|xn--kpry57d|xn--mgbbh1a|xn--mgbtx2b|xn--mix891f|xn--nyqy26a|xn--otu796d|xn--pgbs0dh|xn--q9jyb4c|xn--rhqv96g|xn--rovu88b|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--vuq861b|xn--w4rs40l|xn--xhq521b|xn--zfr164b|சிங்கப்பூர்|accountant|apartments|associates|basketball|bnpparibas|boehringer|capitalone|consulting|creditcard|cuisinella|eurovision|extraspace|foundation|healthcare|immobilien|industries|management|mitsubishi|nextdirect|properties|protection|prudential|realestate|republican|restaurant|schaeffler|tatamotors|technology|university|vlaanderen|xn--30rr7y|xn--3pxu8k|xn--45q11c|xn--4gbrim|xn--55qx5d|xn--5tzm5g|xn--80aswg|xn--90a3ac|xn--9dbq2a|xn--9et52u|xn--c2br7g|xn--cg4bki|xn--czrs0t|xn--czru2d|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--io0a7i|xn--kput3i|xn--mxtq1m|xn--o3cw4h|xn--pssy2u|xn--q7ce6a|xn--unup4y|xn--wgbh1c|xn--wgbl6a|xn--y9a3aq|accenture|allfinanz|amsterdam|analytics|aquarelle|barcelona|bloomberg|christmas|community|directory|education|equipment|fairwinds|financial|firestone|fresenius|furniture|goldpoint|hisamitsu|homedepot|homegoods|homesense|institute|insurance|kuokgroup|lancaster|landrover|lifestyle|marketing|marshalls|melbourne|microsoft|panasonic|pramerica|richardli|shangrila|solutions|statebank|statefarm|stockholm|travelers|vacations|xn--90ais|xn--c1avg|xn--d1alf|xn--e1a4c|xn--fhbei|xn--j1aef|xn--j1amh|xn--l1acc|xn--ngbrx|xn--nqv7f|xn--p1acf|xn--qxa6a|xn--tckwe|xn--vhquv|yodobashi|موريتانيا|abudhabi|airforce|allstate|attorney|barclays|barefoot|bargains|baseball|boutique|bradesco|broadway|brussels|builders|business|capetown|catering|catholic|cipriani|cleaning|clinique|clothing|commbank|computer|delivery|deloitte|democrat|diamonds|discount|discover|download|engineer|ericsson|exchange|feedback|fidelity|firmdale|football|frontier|goodyear|grainger|graphics|hdfcbank|helsinki|holdings|hospital|infiniti|ipiranga|istanbul|jpmorgan|lighting|lundbeck|marriott|mckinsey|memorial|merckmsd|mortgage|observer|partners|pharmacy|pictures|plumbing|property|redstone|reliance|saarland|samsclub|security|services|shopping|softbank|software|stcgroup|supplies|training|vanguard|ventures|verisign|woodside|xn--90ae|xn--node|xn--p1ai|xn--qxam|yokohama|السعودية|abogado|academy|agakhan|alibaba|android|athleta|auction|audible|auspost|banamex|bauhaus|bentley|bestbuy|booking|brother|capital|caravan|careers|channel|charity|chintai|citadel|clubmed|college|cologne|company|compare|contact|cooking|corsica|country|coupons|courses|cricket|cruises|dentist|digital|domains|exposed|express|farmers|fashion|ferrari|ferrero|finance|fishing|fitness|flights|florist|flowers|forsale|frogans|fujitsu|gallery|genting|godaddy|grocery|guitars|hamburg|hangout|hitachi|holiday|hosting|hotmail|hyundai|ismaili|jewelry|juniper|kitchen|komatsu|lacaixa|lanxess|lasalle|latrobe|leclerc|limited|lincoln|markets|monster|netbank|netflix|network|neustar|okinawa|organic|origins|philips|pioneer|politie|realtor|recipes|rentals|reviews|rexroth|samsung|sandvik|schmidt|schwarz|science|shiksha|singles|staples|storage|support|surgery|systems|temasek|theater|theatre|tickets|toshiba|trading|walmart|wanggou|watches|weather|website|wedding|whoswho|windows|winners|yamaxun|youtube|zuerich|католик|البحرين|الجزائر|العليان|پاکستان|كاثوليك|இந்தியா|abbott|abbvie|africa|agency|airbus|airtel|alipay|alsace|alstom|amazon|anquan|aramco|author|bayern|beauty|berlin|bharti|bostik|boston|broker|camera|career|casino|center|chanel|chrome|church|circle|claims|clinic|coffee|comsec|condos|coupon|credit|cruise|dating|datsun|dealer|degree|dental|design|direct|doctor|dunlop|dupont|durban|emerck|energy|estate|events|expert|family|flickr|futbol|gallup|garden|george|giving|global|google|gratis|health|hermes|hiphop|hockey|hotels|hughes|imamat|insure|intuit|jaguar|joburg|juegos|kaufen|kindle|kosher|latino|lawyer|lefrak|living|locker|london|luxury|madrid|maison|makeup|market|mattel|mobile|monash|mormon|moscow|museum|nagoya|nissan|nissay|norton|nowruz|office|olayan|online|oracle|orange|otsuka|pfizer|photos|physio|pictet|quebec|racing|realty|reisen|repair|report|review|rogers|ryukyu|safety|sakura|sanofi|school|schule|search|secure|select|shouji|soccer|social|stream|studio|supply|suzuki|swatch|sydney|taipei|taobao|target|tattoo|tennis|tienda|tjmaxx|tkmaxx|toyota|travel|unicom|viajes|viking|villas|virgin|vision|voting|voyage|walter|webcam|xihuan|yachts|yandex|zappos|москва|онлайн|ابوظبي|ارامكو|الاردن|المغرب|امارات|فلسطين|مليسيا|भारतम्|இலங்கை|ファッション|actor|adult|aetna|amfam|amica|apple|archi|audio|autos|azure|baidu|beats|bible|bingo|black|boats|bosch|build|canon|cards|chase|cheap|cisco|citic|click|cloud|coach|codes|crown|cymru|dance|deals|delta|drive|dubai|earth|edeka|email|epson|faith|fedex|final|forex|forum|gallo|games|gifts|gives|glass|globo|gmail|green|gripe|group|gucci|guide|homes|honda|horse|house|hyatt|ikano|irish|jetzt|koeln|kyoto|lamer|lease|legal|lexus|lilly|lipsy|loans|locus|lotte|lotto|mango|media|miami|money|movie|music|nexus|nikon|ninja|nokia|nowtv|omega|osaka|paris|parts|party|phone|photo|pizza|place|poker|praxi|press|prime|promo|quest|radio|rehab|reise|ricoh|rocks|rodeo|rugby|salon|sener|seven|sharp|shell|shoes|skype|sling|smart|smile|solar|space|sport|stada|store|study|style|sucks|swiss|tatar|tires|tirol|tmall|today|tokyo|tools|toray|total|tours|trade|trust|tunes|tushu|ubank|vegas|video|vodka|volvo|wales|watch|weber|weibo|works|world|xerox|yahoo|ישראל|ایران|بازار|بھارت|سودان|سورية|همراه|भारोत|संगठन|বাংলা|భారత్|ഭാരതം|嘉里大酒店|aarp|able|aero|akdn|ally|amex|arab|army|arpa|arte|asda|asia|audi|auto|baby|band|bank|bbva|beer|best|bike|bing|blog|blue|bofa|bond|book|buzz|cafe|call|camp|care|cars|casa|case|cash|cbre|cern|chat|citi|city|club|cool|coop|cyou|data|date|dclk|deal|dell|desi|diet|dish|docs|dvag|erni|fage|fail|fans|farm|fast|fido|film|fire|fish|flir|food|ford|free|fund|game|gbiz|gent|ggee|gift|gmbh|gold|golf|goog|guge|guru|hair|haus|hdfc|help|here|host|hsbc|icbc|ieee|imdb|immo|info|itau|java|jeep|jobs|jprs|kddi|kids|kiwi|kpmg|kred|land|lego|lgbt|lidl|life|like|limo|link|live|loan|love|ltda|luxe|maif|meet|meme|menu|mini|mint|mobi|moda|moto|name|navy|news|next|nico|nike|ollo|open|page|pars|pccw|pics|ping|pink|play|plus|pohl|porn|post|prod|prof|qpon|read|reit|rent|rest|rich|room|rsvp|ruhr|safe|sale|sarl|save|saxo|scot|seat|seek|sexy|shia|shop|show|silk|sina|site|skin|sncf|sohu|song|sony|spot|star|surf|talk|taxi|team|tech|teva|tiaa|tips|town|toys|tube|vana|visa|viva|vivo|vote|voto|wang|weir|wien|wiki|wine|work|xbox|yoga|zara|zero|zone|дети|сайт|بارت|بيتك|ڀارت|تونس|شبكة|عراق|عمان|موقع|भारत|ভারত|ভাৰত|ਭਾਰਤ|ભારત|ଭାରତ|ಭಾರತ|ලංකා|アマゾン|グーグル|クラウド|ポイント|组织机构|電訊盈科|香格里拉|aaa|abb|abc|aco|ads|aeg|afl|aig|anz|aol|app|art|aws|axa|bar|bbc|bbt|bcg|bcn|bet|bid|bio|biz|bms|bmw|bom|boo|bot|box|buy|bzh|cab|cal|cam|car|cat|cba|cbn|ceo|cfa|cfd|com|cpa|crs|dad|day|dds|dev|dhl|diy|dnp|dog|dot|dtv|dvr|eat|eco|edu|esq|eus|fan|fit|fly|foo|fox|frl|ftr|fun|fyi|gal|gap|gay|gdn|gea|gle|gmo|gmx|goo|gop|got|gov|hbo|hiv|hkt|hot|how|ibm|ice|icu|ifm|inc|ing|ink|int|ist|itv|jcb|jio|jll|jmp|jnj|jot|joy|kfh|kia|kim|kpn|krd|lat|law|lds|llc|llp|lol|lpl|ltd|man|map|mba|med|men|mil|mit|mlb|mls|mma|moe|moi|mom|mov|msd|mtn|mtr|nab|nba|nec|net|new|nfl|ngo|nhk|now|nra|nrw|ntt|nyc|obi|one|ong|onl|ooo|org|ott|ovh|pay|pet|phd|pid|pin|pnc|pro|pru|pub|pwc|red|ren|ril|rio|rip|run|rwe|sap|sas|sbi|sbs|scb|sew|sex|sfr|ski|sky|soy|spa|srl|stc|tab|tax|tci|tdk|tel|thd|tjx|top|trv|tui|tvs|ubs|uno|uol|ups|vet|vig|vin|vip|wed|win|wme|wow|wtc|wtf|xin|xxx|xyz|you|yun|zip|бел|ком|қаз|мкд|мон|орг|рус|срб|укр|հայ|קום|عرب|قطر|كوم|مصر|कॉम|नेट|คอม|ไทย|ລາວ|ストア|セール|みんな|中文网|亚马逊|天主教|我爱你|新加坡|淡马锡|飞利浦|ac|ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|ελ|ευ|бг|ею|рф|გე|닷넷|닷컴|삼성|한국|コム|世界|中信|中国|中國|企业|佛山|信息|健康|八卦|公司|公益|台湾|台灣|商城|商店|商标|嘉里|在线|大拿|娱乐|家電|广东|微博|慈善|手机|招聘|政务|政府|新闻|时尚|書籍|机构|游戏|澳門|点看|移动|网址|网店|网站|网络|联通|谷歌|购物|通販|集团|食品|餐厅|香港)", E0 = new RegExp("^" + c0 + "$"), l0 = /[\/?#]/, B0 = /[-+&@#/%=~_()|'$*\[\]{}\u2713]/, Wf = /[?!:,.;^]/, Gf = /https?:\/\//i, b0 = new RegExp("^" + Gf.source, "i"), p0 = new RegExp(Wf.source + "$"), g0 = /^(javascript|vbscript):/i, m0 = /^[A-Za-z][-.+A-Za-z0-9]*:(\/\/)?([^:/]*)/, h0 = /^(?:\/\/)?([^/#?:]+)/;
function Vu(D) {
  return zu.test(D);
}
function rf(D) {
  return zu.test(D) || J.test(D) || D === "+" || D === "-" || D === ".";
}
function _u(D) {
  return Su.test(D);
}
function jD(D) {
  return D === "_" || _u(D);
}
function sf(D) {
  return Su.test(D) || B0.test(D) || Wf.test(D);
}
function PD(D) {
  return l0.test(D);
}
function Yf(D) {
  return E0.test(D.toLowerCase());
}
function _0(D) {
  if (g0.test(D))
    return !1;
  var u = D.match(m0);
  if (!u)
    return !1;
  var f = !!u[1], e = u[2];
  return f ? !0 : !(e.indexOf(".") === -1 || !zu.test(e));
}
function v0(D) {
  var u = D.match(h0);
  if (!u)
    return !1;
  var f = u[0], e = f.split(".");
  if (e.length < 2)
    return !1;
  var F = e[e.length - 1];
  return !!Yf(F);
}
var A0 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/, y0 = /[:/?#]/;
function w0(D) {
  var u = D.split(y0, 1)[0];
  return A0.test(u);
}
var k0 = /^(https?:\/\/)?(www\.)?/i, x0 = /^\/\//, S0 = (
  /** @class */
  function(D) {
    fD(u, D);
    function u(f) {
      var e = D.call(this, f) || this;
      return e.type = "url", e.url = "", e.urlMatchType = "scheme", e.protocolRelativeMatch = !1, e.stripPrefix = {
        scheme: !0,
        www: !0
      }, e.stripTrailingSlash = !0, e.decodePercentEncoding = !0, e.protocolPrepended = !1, e.urlMatchType = f.urlMatchType, e.url = f.url, e.protocolRelativeMatch = f.protocolRelativeMatch, e.stripPrefix = f.stripPrefix, e.stripTrailingSlash = f.stripTrailingSlash, e.decodePercentEncoding = f.decodePercentEncoding, e;
    }
    return u.prototype.getType = function() {
      return "url";
    }, u.prototype.getUrlMatchType = function() {
      return this.urlMatchType;
    }, u.prototype.getUrl = function() {
      var f = this.url;
      return !this.protocolRelativeMatch && this.urlMatchType !== "scheme" && !this.protocolPrepended && (f = this.url = "http://" + f, this.protocolPrepended = !0), f;
    }, u.prototype.getAnchorHref = function() {
      var f = this.getUrl();
      return f.replace(/&amp;/g, "&");
    }, u.prototype.getAnchorText = function() {
      var f = this.getMatchedText();
      return this.protocolRelativeMatch && (f = O0(f)), this.stripPrefix.scheme && (f = T0(f)), this.stripPrefix.www && (f = $0(f)), this.stripTrailingSlash && (f = j0(f)), this.decodePercentEncoding && (f = P0(f)), f;
    }, u;
  }(eD)
);
function T0(D) {
  return D.replace(b0, "");
}
function $0(D) {
  return D.replace(k0, "$1");
}
function O0(D) {
  return D.replace(x0, "");
}
function j0(D) {
  return D.charAt(D.length - 1) === "/" && (D = D.slice(0, -1)), D;
}
function P0(D) {
  var u = D.replace(/%22/gi, "&quot;").replace(/%26/gi, "&amp;").replace(/%27/gi, "&#39;").replace(/%3C/gi, "&lt;").replace(/%3E/gi, "&gt;");
  try {
    return decodeURIComponent(u);
  } catch {
    return u;
  }
}
var I0 = /^mailto:/i, z0 = new RegExp("[".concat(Uf, "!#$%&'*+/=?^_`{|}~-]"));
function N0(D) {
  return Su.test(D);
}
function ID(D) {
  return z0.test(D);
}
function q0(D) {
  var u = D.split(".").pop() || "";
  return Yf(u);
}
var L0 = (
  /** @class */
  function(D) {
    fD(u, D);
    function u(f) {
      var e = D.call(this, f) || this;
      return e.type = "email", e.email = "", e.email = f.email, e;
    }
    return u.prototype.getType = function() {
      return "email";
    }, u.prototype.getEmail = function() {
      return this.email;
    }, u.prototype.getAnchorHref = function() {
      return "mailto:" + this.email;
    }, u.prototype.getAnchorText = function() {
      return this.email;
    }, u;
  }(eD)
);
function of(D) {
  return D === "_" || Su.test(D);
}
function R0(D) {
  return D.length <= 140;
}
var M0 = [
  "twitter",
  "facebook",
  "instagram",
  "tiktok",
  "youtube"
], H0 = (
  /** @class */
  function(D) {
    fD(u, D);
    function u(f) {
      var e = D.call(this, f) || this;
      return e.type = "hashtag", e.serviceName = "twitter", e.hashtag = "", e.serviceName = f.serviceName, e.hashtag = f.hashtag, e;
    }
    return u.prototype.getType = function() {
      return "hashtag";
    }, u.prototype.getServiceName = function() {
      return this.serviceName;
    }, u.prototype.getHashtag = function() {
      return this.hashtag;
    }, u.prototype.getAnchorHref = function() {
      var f = this.serviceName, e = this.hashtag;
      switch (f) {
        case "twitter":
          return "https://twitter.com/hashtag/" + e;
        case "facebook":
          return "https://www.facebook.com/hashtag/" + e;
        case "instagram":
          return "https://instagram.com/explore/tags/" + e;
        case "tiktok":
          return "https://www.tiktok.com/tag/" + e;
        case "youtube":
          return "https://youtube.com/hashtag/" + e;
        default:
          throw Iu(f), new Error("Invalid hashtag service: ".concat(f));
      }
    }, u.prototype.getAnchorText = function() {
      return "#" + this.hashtag;
    }, u.prototype.getCssClassSuffixes = function() {
      var f = D.prototype.getCssClassSuffixes.call(this), e = this.getServiceName();
      return e && f.push(e), f;
    }, u;
  }(eD)
), U0 = {
  twitter: /^@\w{1,15}$/,
  instagram: /^@[_\w]{1,30}$/,
  soundcloud: /^@[-a-z0-9_]{3,25}$/,
  // TikTok usernames are 1-24 characters containing letters, numbers, underscores
  // and periods, but cannot end in a period: https://support.tiktok.com/en/getting-started/setting-up-your-profile/changing-your-username
  tiktok: /^@[.\w]{1,23}[\w]$/,
  // Youtube usernames are 3-30 characters containing letters, numbers, underscores,
  // dashes, or latin middle dots ('·').
  // https://support.google.com/youtube/answer/11585688?hl=en&co=GENIE.Platform%3DAndroid#tns
  youtube: /^@[-.·\w]{3,30}$/
}, V0 = /[-\w.]/;
function Cf(D) {
  return V0.test(D);
}
function W0(D, u) {
  var f = U0[u];
  return f.test(D);
}
var G0 = [
  "twitter",
  "instagram",
  "soundcloud",
  "tiktok",
  "youtube"
], Y0 = (
  /** @class */
  function(D) {
    fD(u, D);
    function u(f) {
      var e = D.call(this, f) || this;
      return e.type = "mention", e.serviceName = "twitter", e.mention = "", e.mention = f.mention, e.serviceName = f.serviceName, e;
    }
    return u.prototype.getType = function() {
      return "mention";
    }, u.prototype.getMention = function() {
      return this.mention;
    }, u.prototype.getServiceName = function() {
      return this.serviceName;
    }, u.prototype.getAnchorHref = function() {
      switch (this.serviceName) {
        case "twitter":
          return "https://twitter.com/" + this.mention;
        case "instagram":
          return "https://instagram.com/" + this.mention;
        case "soundcloud":
          return "https://soundcloud.com/" + this.mention;
        case "tiktok":
          return "https://www.tiktok.com/@" + this.mention;
        case "youtube":
          return "https://youtube.com/@" + this.mention;
        default:
          throw Iu(this.serviceName), new Error("Unknown service name to point mention to: " + this.serviceName);
      }
    }, u.prototype.getAnchorText = function() {
      return "@" + this.mention;
    }, u.prototype.getCssClassSuffixes = function() {
      var f = D.prototype.getCssClassSuffixes.call(this), e = this.getServiceName();
      return e && f.push(e), f;
    }, u;
  }(eD)
), X0 = /[-. ]/, K0 = /[-. ()]/, Z0 = /[,;]/, Q0 = /(?:(?:(?:(\+)?\d{1,3}[-. ]?)?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4})|(?:(\+)(?:9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)[-. ]?(?:\d[-. ]?){6,12}\d+))([,;]+[0-9]+#?)*/, J0 = /(0([1-9]-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})/, u3 = new RegExp("^".concat(Q0.source, "|").concat(J0.source, "$"));
function cf(D) {
  return X0.test(D);
}
function zD(D) {
  return Z0.test(D);
}
function D3(D) {
  var u = D.charAt(0) === "+" || K0.test(D);
  return u && u3.test(D);
}
var f3 = (
  /** @class */
  function(D) {
    fD(u, D);
    function u(f) {
      var e = D.call(this, f) || this;
      return e.type = "phone", e.number = "", e.plusSign = !1, e.number = f.number, e.plusSign = f.plusSign, e;
    }
    return u.prototype.getType = function() {
      return "phone";
    }, u.prototype.getPhoneNumber = function() {
      return this.number;
    }, u.prototype.getNumber = function() {
      return this.getPhoneNumber();
    }, u.prototype.getAnchorHref = function() {
      return "tel:" + (this.plusSign ? "+" : "") + this.number;
    }, u.prototype.getAnchorText = function() {
      return this.matchedText;
    }, u;
  }(eD)
);
function e3(D, u) {
  for (var f = u.tagBuilder, e = u.stripPrefix, F = u.stripTrailingSlash, t = u.decodePercentEncoding, a = u.hashtagServiceName, n = u.mentionServiceName, r = [], o = D.length, d = [], c = 0; c < o; c++) {
    var s = D.charAt(c);
    if (d.length === 0)
      w(s);
    else {
      for (var B = d.length - 1; B >= 0; B--) {
        var E = d[B];
        switch (E.state) {
          // Protocol-relative URL states
          case 11:
            T(E, s);
            break;
          case 12:
            $(E, s);
            break;
          case 0:
            v(E, s);
            break;
          case 1:
            A(E, s);
            break;
          case 2:
            g(E, s);
            break;
          case 3:
            h(E, s);
            break;
          case 4:
            S(E, s);
            break;
          case 5:
            H(E, s);
            break;
          case 6:
            N(E, s);
            break;
          case 7:
            U(E, s);
            break;
          case 13:
            uu(E, s);
            break;
          case 14:
            G(E, s);
            break;
          case 8:
            nu(E, s);
            break;
          case 9:
            gu(E, s);
            break;
          case 10:
            Eu(E, s);
            break;
          // Email States
          case 15:
            au(E, s);
            break;
          case 16:
            yu(E, s);
            break;
          case 17:
            W(E, s);
            break;
          case 18:
            X(E, s);
            break;
          case 19:
            Q(E, s);
            break;
          case 20:
            lu(E, s);
            break;
          case 21:
            Bu(E, s);
            break;
          case 22:
            K(E, s);
            break;
          case 23:
            l(E, s);
            break;
          case 24:
            $u(E, s);
            break;
          case 25:
            Mu(E, s);
            break;
          case 26:
            mu(E, s);
            break;
          case 27:
            Hu(E, s);
            break;
          // Hashtag states
          case 28:
            aD(E, s);
            break;
          case 29:
            dD(E, s);
            break;
          // Mention states
          case 30:
            rD(E, s);
            break;
          case 31:
            iD(E, s);
            break;
          // Phone number states
          case 32:
            TD(E, s);
            break;
          case 33:
            Ou(E, s);
            break;
          case 34:
            sD(E, s);
            break;
          case 35:
            oD(E, s);
            break;
          case 36:
            CD(E, s);
            break;
          case 37:
            SD(E, s);
            break;
          case 38:
            g1(E, s);
            break;
          case 39:
            m1(E, s);
            break;
          case 40:
            h1(E, s);
            break;
          case 41:
            _1(E, s);
            break;
          default:
            Iu(E.state);
        }
      }
      if (c > 0 && Vu(s)) {
        var y = D.charAt(c - 1);
        !Vu(y) && !d.some(i3) && d.push(cD(
          c,
          0
          /* State.SchemeChar */
        ));
      }
    }
  }
  for (var _ = d.length - 1; _ >= 0; _--)
    d.forEach(function(i) {
      return R(i);
    });
  return r;
  function w(i) {
    if (i === "#")
      d.push(d3(
        c,
        28
        /* State.HashtagHashChar */
      ));
    else if (i === "@")
      d.push(r3(
        c,
        30
        /* State.MentionAtChar */
      ));
    else if (i === "/")
      d.push(ND(
        c,
        11
        /* State.ProtocolRelativeSlash1 */
      ));
    else if (i === "+")
      d.push(qD(
        c,
        37
        /* State.PhoneNumberPlus */
      ));
    else if (i === "(")
      d.push(qD(
        c,
        32
        /* State.PhoneNumberOpenParen */
      ));
    else {
      if (J.test(i) && (d.push(qD(
        c,
        38
        /* State.PhoneNumberDigit */
      )), d.push(n3(
        c,
        13
        /* State.IpV4Digit */
      ))), N0(i)) {
        var C = i.toLowerCase() === "m" ? 15 : 22;
        d.push(a3(c, C));
      }
      Vu(i) && d.push(cD(
        c,
        0
        /* State.SchemeChar */
      )), Su.test(i) && d.push(ND(
        c,
        5
        /* State.DomainLabelChar */
      ));
    }
  }
  function v(i, C) {
    C === ":" ? i.state = 2 : C === "-" ? i.state = 1 : rf(C) || I(d, i);
  }
  function A(i, C) {
    C === "-" || (C === "/" ? (I(d, i), d.push(ND(
      c,
      11
      /* State.ProtocolRelativeSlash1 */
    ))) : rf(C) ? i.state = 0 : I(d, i));
  }
  function g(i, C) {
    C === "/" ? i.state = 3 : C === "." ? I(d, i) : _u(C) ? (i.state = 5, Vu(C) && d.push(cD(
      c,
      0
      /* State.SchemeChar */
    ))) : I(d, i);
  }
  function h(i, C) {
    C === "/" ? i.state = 4 : sf(C) ? (i.state = 10, i.acceptStateReached = !0) : R(i);
  }
  function S(i, C) {
    C === "/" ? i.state = 10 : _u(C) ? (i.state = 5, i.acceptStateReached = !0) : I(d, i);
  }
  function T(i, C) {
    C === "/" ? i.state = 12 : I(d, i);
  }
  function $(i, C) {
    _u(C) ? i.state = 5 : I(d, i);
  }
  function H(i, C) {
    C === "." ? i.state = 7 : C === "-" ? i.state = 6 : C === ":" ? i.state = 8 : PD(C) ? i.state = 10 : jD(C) || R(i);
  }
  function N(i, C) {
    C === "-" || (C === "." ? R(i) : _u(C) ? i.state = 5 : R(i));
  }
  function U(i, C) {
    C === "." ? R(i) : _u(C) ? (i.state = 5, i.acceptStateReached = !0) : R(i);
  }
  function uu(i, C) {
    C === "." ? i.state = 14 : C === ":" ? i.state = 8 : J.test(C) || (PD(C) ? i.state = 10 : Su.test(C) ? I(d, i) : R(i));
  }
  function G(i, C) {
    J.test(C) ? (i.octetsEncountered++, i.octetsEncountered === 4 && (i.acceptStateReached = !0), i.state = 13) : R(i);
  }
  function nu(i, C) {
    J.test(C) ? i.state = 9 : R(i);
  }
  function gu(i, C) {
    J.test(C) || (PD(C) ? i.state = 10 : R(i));
  }
  function Eu(i, C) {
    sf(C) || R(i);
  }
  function au(i, C) {
    C.toLowerCase() === "a" ? i.state = 16 : K(i, C);
  }
  function yu(i, C) {
    C.toLowerCase() === "i" ? i.state = 17 : K(i, C);
  }
  function W(i, C) {
    C.toLowerCase() === "l" ? i.state = 18 : K(i, C);
  }
  function X(i, C) {
    C.toLowerCase() === "t" ? i.state = 19 : K(i, C);
  }
  function Q(i, C) {
    C.toLowerCase() === "o" ? i.state = 20 : K(i, C);
  }
  function lu(i, C) {
    C.toLowerCase() === ":" ? i.state = 21 : K(i, C);
  }
  function Bu(i, C) {
    ID(C) ? i.state = 22 : I(d, i);
  }
  function K(i, C) {
    C === "." ? i.state = 23 : C === "@" ? i.state = 24 : ID(C) ? i.state = 22 : I(d, i);
  }
  function l(i, C) {
    C === "." || C === "@" ? I(d, i) : ID(C) ? i.state = 22 : I(d, i);
  }
  function $u(i, C) {
    _u(C) ? i.state = 25 : I(d, i);
  }
  function Mu(i, C) {
    C === "." ? i.state = 27 : C === "-" ? i.state = 26 : jD(C) || R(i);
  }
  function mu(i, C) {
    C === "-" || C === "." ? R(i) : jD(C) ? i.state = 25 : R(i);
  }
  function Hu(i, C) {
    C === "." || C === "-" ? R(i) : _u(C) ? (i.state = 25, i.acceptStateReached = !0) : R(i);
  }
  function aD(i, C) {
    of(C) ? (i.state = 29, i.acceptStateReached = !0) : I(d, i);
  }
  function dD(i, C) {
    of(C) || R(i);
  }
  function rD(i, C) {
    Cf(C) ? (i.state = 31, i.acceptStateReached = !0) : I(d, i);
  }
  function iD(i, C) {
    Cf(C) || (Su.test(C) ? I(d, i) : R(i));
  }
  function SD(i, C) {
    J.test(C) ? i.state = 38 : (I(d, i), w(C));
  }
  function TD(i, C) {
    J.test(C) ? i.state = 33 : I(d, i), w(C);
  }
  function Ou(i, C) {
    J.test(C) ? i.state = 34 : I(d, i);
  }
  function sD(i, C) {
    J.test(C) ? i.state = 35 : I(d, i);
  }
  function oD(i, C) {
    C === ")" ? i.state = 36 : I(d, i);
  }
  function CD(i, C) {
    J.test(C) ? i.state = 38 : cf(C) ? i.state = 39 : I(d, i);
  }
  function g1(i, C) {
    i.acceptStateReached = !0, zD(C) ? i.state = 40 : C === "#" ? i.state = 41 : J.test(C) || (C === "(" ? i.state = 32 : cf(C) ? i.state = 39 : (R(i), Vu(C) && d.push(cD(
      c,
      0
      /* State.SchemeChar */
    ))));
  }
  function m1(i, C) {
    J.test(C) ? i.state = 38 : C === "(" ? i.state = 32 : (R(i), w(C));
  }
  function h1(i, C) {
    zD(C) || (C === "#" ? i.state = 41 : J.test(C) ? i.state = 38 : R(i));
  }
  function _1(i, C) {
    zD(C) ? i.state = 40 : J.test(C) ? I(d, i) : R(i);
  }
  function R(i) {
    if (I(d, i), !!i.acceptStateReached) {
      var C = i.startIdx, P = D.slice(i.startIdx, c);
      if (P = F3(P), i.type === "url") {
        var v1 = D.charAt(i.startIdx - 1);
        if (v1 === "@")
          return;
        var Uu = i.matchType;
        if (Uu === "scheme") {
          var $D = Gf.exec(P);
          if ($D && (C = C + $D.index, P = P.slice($D.index)), !_0(P))
            return;
        } else if (Uu === "tld") {
          if (!v0(P))
            return;
        } else if (Uu === "ipV4") {
          if (!w0(P))
            return;
        } else
          Iu(Uu);
        r.push(new S0({
          tagBuilder: f,
          matchedText: P,
          offset: C,
          urlMatchType: Uu,
          url: P,
          protocolRelativeMatch: P.slice(0, 2) === "//",
          // TODO: Do these settings need to be passed to the match,
          // or should we handle them here in UrlMatcher?
          stripPrefix: e,
          stripTrailingSlash: F,
          decodePercentEncoding: t
        }));
      } else if (i.type === "email")
        q0(P) && r.push(new L0({
          tagBuilder: f,
          matchedText: P,
          offset: C,
          email: P.replace(I0, "")
        }));
      else if (i.type === "hashtag")
        R0(P) && r.push(new H0({
          tagBuilder: f,
          matchedText: P,
          offset: C,
          serviceName: a,
          hashtag: P.slice(1)
        }));
      else if (i.type === "mention")
        W0(P, n) && r.push(new Y0({
          tagBuilder: f,
          matchedText: P,
          offset: C,
          serviceName: n,
          mention: P.slice(1)
          // strip off the '@' character at the beginning
        }));
      else if (i.type === "phone") {
        if (P = P.replace(/ +$/g, ""), D3(P)) {
          var A1 = P.replace(/[^0-9,;#]/g, "");
          r.push(new f3({
            tagBuilder: f,
            matchedText: P,
            offset: C,
            number: A1,
            plusSign: P.charAt(0) === "+"
          }));
        }
      } else
        Iu(i);
    }
  }
}
var t3 = /[\(\{\[]/, Ef = /[\)\}\]]/, lf = {
  ")": "(",
  "}": "{",
  "]": "["
};
function F3(D) {
  for (var u = {
    "(": 0,
    "{": 0,
    "[": 0
  }, f = 0; f < D.length; f++) {
    var e = D.charAt(f);
    t3.test(e) ? u[e]++ : Ef.test(e) && u[lf[e]]--;
  }
  for (var F = D.length - 1, t; F >= 0; )
    if (t = D.charAt(F), Ef.test(t)) {
      var a = lf[t];
      if (u[a] < 0)
        u[a]++, F--;
      else
        break;
    } else if (p0.test(t))
      F--;
    else
      break;
  return D.slice(0, F + 1);
}
function cD(D, u) {
  return {
    type: "url",
    startIdx: D,
    state: u,
    acceptStateReached: !1,
    matchType: "scheme"
  };
}
function ND(D, u) {
  return {
    type: "url",
    startIdx: D,
    state: u,
    acceptStateReached: !1,
    matchType: "tld"
  };
}
function n3(D, u) {
  return {
    type: "url",
    startIdx: D,
    state: u,
    acceptStateReached: !1,
    matchType: "ipV4",
    octetsEncountered: 1
    // starts at 1 because we create this machine when encountering the first octet
  };
}
function a3(D, u) {
  return {
    type: "email",
    startIdx: D,
    state: u,
    acceptStateReached: !1
  };
}
function d3(D, u) {
  return {
    type: "hashtag",
    startIdx: D,
    state: u,
    acceptStateReached: !1
  };
}
function r3(D, u) {
  return {
    type: "mention",
    startIdx: D,
    state: u,
    acceptStateReached: !1
  };
}
function qD(D, u) {
  return {
    type: "phone",
    startIdx: D,
    state: u,
    acceptStateReached: !1
  };
}
function i3(D) {
  return D.type === "url" && D.matchType === "scheme";
}
function s3(D, u) {
  for (var f = u.onOpenTag, e = u.onCloseTag, F = u.onText, t = u.onComment, a = u.onDoctype, n = new bu(), r = 0, o = D.length, d = 0, c = 0, s = n; r < o; ) {
    var B = D.charAt(r);
    switch (d) {
      case 0:
        E(B);
        break;
      case 1:
        y(B);
        break;
      case 2:
        w(B);
        break;
      case 3:
        _(B);
        break;
      case 4:
        v(B);
        break;
      case 5:
        A(B);
        break;
      case 6:
        g(B);
        break;
      case 7:
        h(B);
        break;
      case 8:
        S(B);
        break;
      case 9:
        T(B);
        break;
      case 10:
        $(B);
        break;
      case 11:
        H(B);
        break;
      case 12:
        N(B);
        break;
      case 13:
        U();
        break;
      case 14:
        uu(B);
        break;
      case 15:
        G(B);
        break;
      case 16:
        nu(B);
        break;
      case 17:
        gu(B);
        break;
      case 18:
        Eu(B);
        break;
      case 19:
        au(B);
        break;
      case 20:
        yu(B);
        break;
      default:
        Iu(d);
    }
    r++;
  }
  c < r && lu();
  function E(l) {
    l === "<" && X();
  }
  function y(l) {
    l === "!" ? d = 13 : l === "/" ? (d = 2, s = new bu(Y(Y({}, s), { isClosing: !0 }))) : l === "<" ? X() : zu.test(l) ? (d = 3, s = new bu(Y(Y({}, s), { isOpening: !0 }))) : (d = 0, s = n);
  }
  function _(l) {
    du.test(l) ? (s = new bu(Y(Y({}, s), { name: Bu() })), d = 4) : l === "<" ? X() : l === "/" ? (s = new bu(Y(Y({}, s), { name: Bu() })), d = 12) : l === ">" ? (s = new bu(Y(Y({}, s), { name: Bu() })), Q()) : !zu.test(l) && !J.test(l) && l !== ":" && W();
  }
  function w(l) {
    l === ">" ? W() : zu.test(l) ? d = 3 : W();
  }
  function v(l) {
    du.test(l) || (l === "/" ? d = 12 : l === ">" ? Q() : l === "<" ? X() : l === "=" || OD.test(l) || t0.test(l) ? W() : d = 5);
  }
  function A(l) {
    du.test(l) ? d = 6 : l === "/" ? d = 12 : l === "=" ? d = 7 : l === ">" ? Q() : l === "<" ? X() : OD.test(l) && W();
  }
  function g(l) {
    du.test(l) || (l === "/" ? d = 12 : l === "=" ? d = 7 : l === ">" ? Q() : l === "<" ? X() : OD.test(l) ? W() : d = 5);
  }
  function h(l) {
    du.test(l) || (l === '"' ? d = 8 : l === "'" ? d = 9 : /[>=`]/.test(l) ? W() : l === "<" ? X() : d = 10);
  }
  function S(l) {
    l === '"' && (d = 11);
  }
  function T(l) {
    l === "'" && (d = 11);
  }
  function $(l) {
    du.test(l) ? d = 4 : l === ">" ? Q() : l === "<" && X();
  }
  function H(l) {
    du.test(l) ? d = 4 : l === "/" ? d = 12 : l === ">" ? Q() : l === "<" ? X() : (d = 4, K());
  }
  function N(l) {
    l === ">" ? (s = new bu(Y(Y({}, s), { isClosing: !0 })), Q()) : d = 4;
  }
  function U(l) {
    D.substr(r, 2) === "--" ? (r += 2, s = new bu(Y(Y({}, s), { type: "comment" })), d = 14) : D.substr(r, 7).toUpperCase() === "DOCTYPE" ? (r += 7, s = new bu(Y(Y({}, s), { type: "doctype" })), d = 20) : W();
  }
  function uu(l) {
    l === "-" ? d = 15 : l === ">" ? W() : d = 16;
  }
  function G(l) {
    l === "-" ? d = 18 : l === ">" ? W() : d = 16;
  }
  function nu(l) {
    l === "-" && (d = 17);
  }
  function gu(l) {
    l === "-" ? d = 18 : d = 16;
  }
  function Eu(l) {
    l === ">" ? Q() : l === "!" ? d = 19 : l === "-" || (d = 16);
  }
  function au(l) {
    l === "-" ? d = 17 : l === ">" ? Q() : d = 16;
  }
  function yu(l) {
    l === ">" ? Q() : l === "<" && X();
  }
  function W() {
    d = 0, s = n;
  }
  function X() {
    d = 1, s = new bu({ idx: r });
  }
  function Q() {
    var l = D.slice(c, s.idx);
    l && F(l, c), s.type === "comment" ? t(s.idx) : s.type === "doctype" ? a(s.idx) : (s.isOpening && f(s.name, s.idx), s.isClosing && e(s.name, s.idx)), W(), c = r + 1;
  }
  function lu() {
    var l = D.slice(c, r);
    F(l, c), c = r + 1;
  }
  function Bu() {
    var l = s.idx + (s.isClosing ? 2 : 1);
    return D.slice(l, r).toLowerCase();
  }
  function K() {
    r--;
  }
}
var bu = (
  /** @class */
  /* @__PURE__ */ function() {
    function D(u) {
      u === void 0 && (u = {}), this.idx = u.idx !== void 0 ? u.idx : -1, this.type = u.type || "tag", this.name = u.name || "", this.isOpening = !!u.isOpening, this.isClosing = !!u.isClosing;
    }
    return D;
  }()
), o3 = (
  /** @class */
  function() {
    function D(u) {
      u === void 0 && (u = {}), this.version = D.version, this.urls = {}, this.email = !0, this.phone = !0, this.hashtag = !1, this.mention = !1, this.newWindow = !0, this.stripPrefix = {
        scheme: !0,
        www: !0
      }, this.stripTrailingSlash = !0, this.decodePercentEncoding = !0, this.truncate = {
        length: 0,
        location: "end"
      }, this.className = "", this.replaceFn = null, this.context = void 0, this.sanitizeHtml = !1, this.tagBuilder = null, this.urls = C3(u.urls), this.email = fu(u.email) ? u.email : this.email, this.phone = fu(u.phone) ? u.phone : this.phone, this.hashtag = u.hashtag || this.hashtag, this.mention = u.mention || this.mention, this.newWindow = fu(u.newWindow) ? u.newWindow : this.newWindow, this.stripPrefix = c3(u.stripPrefix), this.stripTrailingSlash = fu(u.stripTrailingSlash) ? u.stripTrailingSlash : this.stripTrailingSlash, this.decodePercentEncoding = fu(u.decodePercentEncoding) ? u.decodePercentEncoding : this.decodePercentEncoding, this.sanitizeHtml = u.sanitizeHtml || !1;
      var f = this.mention;
      if (f !== !1 && G0.indexOf(f) === -1)
        throw new Error("invalid `mention` cfg '".concat(f, "' - see docs"));
      var e = this.hashtag;
      if (e !== !1 && M0.indexOf(e) === -1)
        throw new Error("invalid `hashtag` cfg '".concat(e, "' - see docs"));
      this.truncate = E3(u.truncate), this.className = u.className || this.className, this.replaceFn = u.replaceFn || this.replaceFn, this.context = u.context || this;
    }
    return D.link = function(u, f) {
      var e = new D(f);
      return e.link(u);
    }, D.parse = function(u, f) {
      var e = new D(f);
      return e.parse(u);
    }, D.prototype.parse = function(u) {
      var f = this, e = ["a", "style", "script"], F = 0, t = [];
      return s3(u, {
        onOpenTag: function(a) {
          e.indexOf(a) >= 0 && F++;
        },
        onText: function(a, n) {
          if (F === 0) {
            var r = /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi, o = a.split(r), d = n;
            o.forEach(function(c, s) {
              if (s % 2 === 0) {
                var B = f.parseText(c, d);
                t.push.apply(t, B);
              }
              d += c.length;
            });
          }
        },
        onCloseTag: function(a) {
          e.indexOf(a) >= 0 && (F = Math.max(F - 1, 0));
        },
        onComment: function(a) {
        },
        // no need to process comment nodes
        onDoctype: function(a) {
        }
        // no need to process doctype nodes
      }), t = this.compactMatches(t), t = this.removeUnwantedMatches(t), t;
    }, D.prototype.compactMatches = function(u) {
      u.sort(function(r, o) {
        return r.getOffset() - o.getOffset();
      });
      for (var f = 0; f < u.length - 1; ) {
        var e = u[f], F = e.getOffset(), t = e.getMatchedText().length, a = F + t;
        if (f + 1 < u.length) {
          if (u[f + 1].getOffset() === F) {
            var n = u[f + 1].getMatchedText().length > t ? f : f + 1;
            u.splice(n, 1);
            continue;
          }
          if (u[f + 1].getOffset() < a) {
            u.splice(f + 1, 1);
            continue;
          }
        }
        f++;
      }
      return u;
    }, D.prototype.removeUnwantedMatches = function(u) {
      return this.hashtag || wu(u, function(f) {
        return f.getType() === "hashtag";
      }), this.email || wu(u, function(f) {
        return f.getType() === "email";
      }), this.phone || wu(u, function(f) {
        return f.getType() === "phone";
      }), this.mention || wu(u, function(f) {
        return f.getType() === "mention";
      }), this.urls.schemeMatches || wu(u, function(f) {
        return f.getType() === "url" && f.getUrlMatchType() === "scheme";
      }), this.urls.tldMatches || wu(u, function(f) {
        return f.getType() === "url" && f.getUrlMatchType() === "tld";
      }), this.urls.ipV4Matches || wu(u, function(f) {
        return f.getType() === "url" && f.getUrlMatchType() === "ipV4";
      }), u;
    }, D.prototype.parseText = function(u, f) {
      f === void 0 && (f = 0), f = f || 0;
      for (var e = e3(u, {
        tagBuilder: this.getTagBuilder(),
        stripPrefix: this.stripPrefix,
        stripTrailingSlash: this.stripTrailingSlash,
        decodePercentEncoding: this.decodePercentEncoding,
        hashtagServiceName: this.hashtag,
        mentionServiceName: this.mention || "twitter"
      }), F = 0, t = e.length; F < t; F++)
        e[F].setOffset(f + e[F].getOffset());
      return e;
    }, D.prototype.link = function(u) {
      if (!u)
        return "";
      this.sanitizeHtml && (u = u.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
      for (var f = this.parse(u), e = [], F = 0, t = 0, a = f.length; t < a; t++) {
        var n = f[t];
        e.push(u.substring(F, n.getOffset())), e.push(this.createMatchReturnVal(n)), F = n.getOffset() + n.getMatchedText().length;
      }
      return e.push(u.substring(F)), e.join("");
    }, D.prototype.createMatchReturnVal = function(u) {
      var f;
      if (this.replaceFn && (f = this.replaceFn.call(this.context, u)), typeof f == "string")
        return f;
      if (f === !1)
        return u.getMatchedText();
      if (f instanceof Vf)
        return f.toAnchorString();
      var e = u.buildTag();
      return e.toAnchorString();
    }, D.prototype.getTagBuilder = function() {
      var u = this.tagBuilder;
      return u || (u = this.tagBuilder = new C0({
        newWindow: this.newWindow,
        truncate: this.truncate,
        className: this.className
      })), u;
    }, D.version = u0, D;
  }()
);
function C3(D) {
  return D == null && (D = !0), fu(D) ? { schemeMatches: D, tldMatches: D, ipV4Matches: D } : {
    schemeMatches: fu(D.schemeMatches) ? D.schemeMatches : !0,
    tldMatches: fu(D.tldMatches) ? D.tldMatches : !0,
    ipV4Matches: fu(D.ipV4Matches) ? D.ipV4Matches : !0
  };
}
function c3(D) {
  return D == null && (D = !0), fu(D) ? { scheme: D, www: D } : {
    scheme: fu(D.scheme) ? D.scheme : !0,
    www: fu(D.www) ? D.www : !0
  };
}
function E3(D) {
  return typeof D == "number" ? { length: D, location: "end" } : f0(D || {}, {
    length: Number.POSITIVE_INFINITY,
    location: "end"
  });
}
var l3 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function uf(D) {
  return D && D.__esModule && Object.prototype.hasOwnProperty.call(D, "default") ? D.default : D;
}
var LD, Bf;
function B3() {
  if (Bf) return LD;
  Bf = 1;
  const D = {
    bold: { delimiter: "*", tag: "strong" },
    italic: { delimiter: "/", tag: "em" },
    underline: { delimiter: "_", tag: "u" },
    strike: { delimiter: "~", tag: "del" },
    code: { delimiter: "`", tag: "code" },
    sup: { delimiter: "^", tag: "sup" },
    sub: { delimiter: "¡", tag: "sub" }
  }, u = (t) => `<${t}>`, f = (t) => `</${t}>`, e = (t, a) => `${u(a)}${t}${f(a)}`, F = (t, a) => {
    let n = 0, r = "";
    for (; n < t.length && t[n] !== a; )
      r += t[n], n++;
    return n === t.length ? "" : r;
  };
  return LD = (t, a = D) => {
    a = Object.assign({}, D, a);
    let n = "", r = 0;
    const o = () => {
      n += t[r], r++;
    }, d = (s, B) => {
      n += B + s, r += s.length;
    }, c = (s) => {
      if (r++, t[r] === " ")
        n += s.delimiter, o();
      else {
        const B = t.substr(r), E = F(B, s.delimiter);
        E.length === 0 ? d(B, s.delimiter) : (n += e(E, s.tag), r += E.length + 1);
      }
    };
    for (; r < t.length; ) {
      const s = t[r];
      s === a.bold.delimiter ? c(a.bold) : s === a.italic.delimiter ? c(a.italic) : s === a.underline.delimiter ? c(a.underline) : s === a.strike.delimiter ? c(a.strike) : s === a.code.delimiter ? c(a.code) : s === a.sup.delimiter ? c(a.sup) : s === a.sub.delimiter ? c(a.sub) : o();
    }
    return n;
  }, LD;
}
var b3 = B3();
const p3 = /* @__PURE__ */ uf(b3), g3 = {
  components: {
    IconBase: Mf,
    IconCross: Hf,
    IconEdit: X1
  },
  props: {
    message: {
      type: Object,
      required: !0
    },
    messageColors: {
      type: Object,
      required: !0
    },
    messageStyling: {
      type: Boolean,
      required: !0
    },
    showConfirmationDeletion: {
      type: Boolean,
      required: !0
    },
    confirmationDeletionMessage: {
      type: String,
      required: !0
    }
  },
  computed: {
    messageText() {
      const D = J1(this.message.data.text);
      return o3.link(this.messageStyling ? p3(D) : D, {
        className: "chatLink",
        truncate: { length: 50, location: "smart" }
      });
    },
    me() {
      return this.message.author === "me";
    },
    isEditing() {
      return (Du.state.editMessage && Du.state.editMessage.id) === this.message.id;
    },
    ...Rf(["showDeletion", "showEdition"])
  },
  methods: {
    edit() {
      Du.setState("editMessage", this.message);
    },
    ifelse(D, u, f) {
      return () => {
        u && D ? u() : f && f();
      };
    },
    withConfirm(D, u) {
      return () => {
        confirm(D) && u();
      };
    }
  }
}, m3 = ["disabled"], h3 = { key: 1 }, _3 = ["innerHTML"], v3 = {
  key: 1,
  class: "sc-message--edited"
};
function A3(D, u, f, e, F, t) {
  const a = O("IconEdit"), n = O("IconBase"), r = O("IconCross");
  return b(), m("div", {
    class: "sc-message--text",
    style: j(f.messageColors)
  }, [
    p("div", {
      class: "sc-message--toolbox",
      style: j({ background: f.messageColors.backgroundColor })
    }, [
      D.showEdition && t.me && f.message.id ? (b(), m("button", {
        key: 0,
        disabled: t.isEditing,
        onClick: u[0] || (u[0] = (...o) => t.edit && t.edit(...o))
      }, [
        L(n, {
          color: t.isEditing ? "black" : f.messageColors.color,
          width: "10",
          "icon-name": "edit"
        }, {
          default: x(() => [
            L(a)
          ]),
          _: 1
        }, 8, ["color"])
      ], 8, m3)) : z("", !0),
      D.showDeletion ? (b(), m("div", h3, [
        t.me && f.message.id != null && f.message.id != null ? (b(), m("button", {
          key: 0,
          onClick: u[1] || (u[1] = (o) => t.ifelse(
            f.showConfirmationDeletion,
            t.withConfirm(f.confirmationDeletionMessage, () => D.$emit("remove")),
            () => D.$emit("remove")
          )())
        }, [
          L(n, {
            color: f.messageColors.color,
            width: "10",
            "icon-name": "remove"
          }, {
            default: x(() => [
              L(r)
            ]),
            _: 1
          }, 8, ["color"])
        ])) : z("", !0)
      ])) : z("", !0),
      k(D.$slots, "text-message-toolbox", {
        message: f.message,
        me: t.me
      }, void 0, !0)
    ], 4),
    k(D.$slots, "default", {
      message: f.message,
      messageText: t.messageText,
      messageColors: f.messageColors,
      me: t.me
    }, () => [
      p("p", {
        class: "sc-message--text-content",
        innerHTML: t.messageText
      }, null, 8, _3),
      f.message.data.meta ? (b(), m("p", {
        key: 0,
        class: "sc-message--meta",
        style: j({ color: f.messageColors.color })
      }, Z(f.message.data.meta), 5)) : z("", !0),
      f.message.isEdited ? (b(), m("p", v3, [
        L(n, {
          width: "10",
          "icon-name": "edited"
        }, {
          default: x(() => [
            L(a)
          ]),
          _: 1
        }),
        u[2] || (u[2] = Nu(" edited "))
      ])) : z("", !0)
    ], !0)
  ], 4);
}
const y3 = /* @__PURE__ */ M(g3, [["render", A3], ["__scopeId", "data-v-329dc07b"]]), w3 = {
  props: {
    message: {
      type: Object,
      required: !0
    },
    messageColors: {
      type: Object,
      required: !0
    }
  }
}, k3 = { class: "sc-message--file-icon" }, x3 = ["src"], S3 = ["href"];
function T3(D, u, f, e, F, t) {
  return b(), m("div", {
    class: "sc-message--file",
    style: j(f.messageColors)
  }, [
    k(D.$slots, "default", {
      message: f.message,
      messagecolors: f.messageColors
    }, () => {
      var a, n, r, o;
      return [
        p("div", k3, [
          p("img", {
            src: (a = f.message.data.file) == null ? void 0 : a.url,
            class: "sc-image"
          }, null, 8, x3)
        ]),
        p("div", {
          class: "sc-message--file-name",
          style: j(f.messageColors)
        }, [
          p("a", {
            href: (n = f.message.data.file) != null && n.url ? (r = f.message.data.file) == null ? void 0 : r.url : "#",
            target: "_blank"
          }, Z(((o = f.message.data.file) == null ? void 0 : o.name) || ""), 9, S3)
        ], 4),
        p("div", {
          class: "sc-message--file-text",
          style: j(f.messageColors)
        }, [
          Nu(Z(f.message.data.text) + " ", 1),
          D.data.meta ? (b(), m("p", {
            key: 0,
            class: "sc-message--meta",
            style: j(f.messageColors)
          }, Z(f.message.data.meta), 5)) : z("", !0)
        ], 4)
      ];
    }, !0)
  ], 4);
}
const $3 = /* @__PURE__ */ M(w3, [["render", T3], ["__scopeId", "data-v-5a292881"]]), O3 = {
  props: {
    message: {
      type: Object,
      required: !0
    }
  }
}, j3 = { class: "sc-message--emoji" };
function P3(D, u, f, e, F, t) {
  return b(), m("div", j3, [
    k(D.$slots, "default", { message: f.message }, () => [
      Nu(Z(f.message.data.emoji), 1)
    ], !0)
  ]);
}
const I3 = /* @__PURE__ */ M(O3, [["render", P3], ["__scopeId", "data-v-e27f2e7b"]]), z3 = {
  props: {
    messageColors: {
      type: Object,
      required: !0
    }
  }
};
function N3(D, u, f, e, F, t) {
  return b(), m("div", {
    class: "sc-typing-indicator",
    style: j(f.messageColors)
  }, u[0] || (u[0] = [
    p("span", null, null, -1),
    p("span", null, null, -1),
    p("span", null, null, -1)
  ]), 4);
}
const q3 = /* @__PURE__ */ M(z3, [["render", N3], ["__scopeId", "data-v-3df57161"]]), L3 = {
  props: {
    data: {
      type: Object,
      required: !0
    },
    messageColors: {
      type: Object,
      required: !0
    }
  }
};
function R3(D, u, f, e, F, t) {
  return b(), m("div", {
    class: "sc-message--system",
    style: j(f.messageColors)
  }, [
    k(D.$slots, "default", { message: f.data }, () => [
      Nu(Z(f.data.text) + " ", 1),
      f.data.meta ? (b(), m("p", {
        key: 0,
        class: "sc-message--meta",
        style: j({ color: f.messageColors.color })
      }, Z(f.data.meta), 5)) : z("", !0)
    ], !0)
  ], 4);
}
const M3 = /* @__PURE__ */ M(L3, [["render", R3], ["__scopeId", "data-v-c0484e01"]]), Xf = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='-4749.48%20-5020%2035.036%2035.036'%3e%3cdefs%3e%3cstyle%3e.a{fill:none;}.b{fill:%234e8cff;}.c{clip-path:url(%23a);}.d{fill:%23fff;}.e{fill:%23eff4f9;}%3c/style%3e%3cclipPath%20id='a'%3e%3cpath%20class='a'%20d='M0-399.479H17.555v17.555H0Z'%20transform='translate(0%20399.479)'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20transform='translate(-4886%20-5075)'%3e%3ccircle%20class='b'%20cx='17.518'%20cy='17.518'%20r='17.518'%20transform='translate(136.52%2055)'/%3e%3cg%20transform='translate(145.13%2064)'%3e%3cg%20class='c'%3e%3cg%20transform='translate(0%200)'%3e%3cpath%20class='d'%20d='M-381.924-190.962a8.778,8.778,0,0,0-8.778-8.778,8.778,8.778,0,0,0-8.778,8.778,8.745,8.745,0,0,0,2.26,5.879v1.442c0,.8.492,1.457,1.1,1.457h5.83a.843.843,0,0,0,.183-.02,8.778,8.778,0,0,0,8.184-8.757'%20transform='translate(399.479%20199.74)'/%3e%3c/g%3e%3cg%20transform='translate(0%200)'%3e%3cpath%20class='e'%20d='M-68.763-194.079a9.292,9.292,0,0,1,6.38-8.888c-.252-.022-.506-.033-.763-.033a8.774,8.774,0,0,0-8.778,8.778A9.508,9.508,0,0,0-69.7-188.3c.005,0,0,.009,0,.01-.311.352-1.924,2.849.021,2.849h2.25c-1.23-.022,1.263-2.107.269-3.494a8.225,8.225,0,0,1-1.6-5.141'%20transform='translate(71.924%20203)'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", H3 = {
  components: {
    TextMessage: y3,
    FileMessage: $3,
    EmojiMessage: I3,
    TypingMessage: q3,
    SystemMessage: M3
  },
  props: {
    message: {
      type: Object,
      required: !0
    },
    colors: {
      type: Object,
      required: !0
    },
    messageStyling: {
      type: Boolean,
      required: !0
    },
    user: {
      type: Object,
      required: !0
    },
    showConfirmationDeletion: {
      type: Boolean,
      required: !0
    },
    confirmationDeletionMessage: {
      type: String,
      required: !0
    },
    messageMargin: {
      type: Object,
      required: !1
    }
  },
  computed: {
    authorName() {
      return this.user && this.user.name;
    },
    chatImageUrl() {
      return this.user && this.user.imageUrl || Xf;
    },
    messageColors() {
      return this.message.author === "me" ? this.sentColorsStyle : this.receivedColorsStyle;
    },
    receivedColorsStyle() {
      return {
        color: this.colors.receivedMessage.text,
        backgroundColor: this.colors.receivedMessage.bg
      };
    },
    sentColorsStyle() {
      return {
        color: this.colors.sentMessage.text,
        backgroundColor: this.colors.sentMessage.bg
      };
    },
    marginStyle() {
      return this.messageMargin ? this.message.author === "me" && this.messageMargin.sender ? this.messageMargin.sender : this.message.type === "system" && this.messageMargin.system ? this.messageMargin.system : this.messageMargin.recipient ? this.messageMargin.recipient : "auto" : "auto";
    }
  }
}, U3 = ["id"], V3 = ["title"];
function W3(D, u, f, e, F, t) {
  const a = O("TextMessage"), n = O("EmojiMessage"), r = O("FileMessage"), o = O("TypingMessage"), d = O("SystemMessage"), c = w1("tooltip");
  return b(), m("div", {
    id: f.message.id,
    class: "sc-message",
    style: j({
      margin: t.marginStyle
    })
  }, [
    p("div", {
      class: DD(["sc-message--content", {
        sent: f.message.author === "me",
        received: f.message.author !== "me" && f.message.type !== "system",
        system: f.message.type === "system"
      }])
    }, [
      k(D.$slots, "user-avatar", {
        message: f.message,
        user: f.user
      }, () => [
        f.message.type !== "system" && t.authorName && t.authorName !== "me" ? qf((b(), m("div", {
          key: 0,
          title: t.authorName,
          class: "sc-message--avatar",
          style: j({
            backgroundImage: `url(${t.chatImageUrl})`
          })
        }, null, 12, V3)), [
          [c, t.authorName]
        ]) : z("", !0)
      ]),
      f.message.type === "text" ? (b(), V(a, {
        key: 0,
        message: f.message,
        "message-colors": t.messageColors,
        "message-styling": f.messageStyling,
        "show-confirmation-deletion": f.showConfirmationDeletion,
        "confirmation-deletion-message": f.confirmationDeletionMessage,
        onRemove: u[0] || (u[0] = (s) => D.$emit("remove"))
      }, {
        default: x((s) => [
          k(D.$slots, "text-message-body", {
            message: s.message,
            messageText: s.messageText,
            messageColors: s.messageColors,
            me: s.me
          })
        ]),
        "text-message-toolbox": x((s) => [
          k(D.$slots, "text-message-toolbox", {
            message: s.message,
            me: s.me
          })
        ]),
        _: 3
      }, 8, ["message", "message-colors", "message-styling", "show-confirmation-deletion", "confirmation-deletion-message"])) : f.message.type === "emoji" ? (b(), V(n, {
        key: 1,
        message: f.message
      }, {
        default: x((s) => [
          k(D.$slots, "emoji-message-body", {
            message: s.message
          })
        ]),
        _: 3
      }, 8, ["message"])) : f.message.type === "file" ? (b(), V(r, {
        key: 2,
        message: f.message,
        "message-colors": t.messageColors
      }, {
        default: x((s) => [
          k(D.$slots, "file-message-body", {
            message: s.message,
            messageColors: s.messageColors
          })
        ]),
        _: 3
      }, 8, ["message", "message-colors"])) : f.message.type === "typing" ? (b(), V(o, {
        key: 3,
        "message-colors": t.messageColors
      }, null, 8, ["message-colors"])) : f.message.type === "system" ? (b(), V(d, {
        key: 4,
        data: f.message.data,
        "message-colors": t.messageColors
      }, {
        default: x(() => [
          k(D.$slots, "system-message-body", {
            message: f.message.data
          })
        ]),
        _: 3
      }, 8, ["data", "message-colors"])) : z("", !0)
    ], 2)
  ], 12, U3);
}
const G3 = /* @__PURE__ */ M(H3, [["render", W3]]);
let RD;
const Y3 = {
  components: {
    Message: G3
  },
  props: {
    participants: {
      type: Array,
      required: !0
    },
    messages: {
      type: Array,
      required: !0
    },
    showTypingIndicator: {
      type: String,
      required: !0
    },
    colors: {
      type: Object,
      required: !0
    },
    alwaysScrollToBottom: {
      type: Boolean,
      required: !0
    },
    messageStyling: {
      type: Boolean,
      required: !0
    },
    showConfirmationDeletion: {
      type: Boolean,
      required: !0
    },
    confirmationDeletionMessage: {
      type: String,
      required: !0
    },
    messageMargin: {
      type: Object,
      required: !1
    }
  },
  data() {
    return {
      initialScrollTop: null
    };
  },
  computed: {
    defaultChatIcon() {
      return Xf;
    }
  },
  mounted() {
    this.watchScrollList(), this.$nextTick(this._scrollDown());
  },
  beforeUnmount() {
    RD.unobserve(this.$refs.scrollList);
  },
  updated() {
    this.shouldScrollToBottom() && this.$nextTick(this._scrollDown());
  },
  methods: {
    _scrollDown() {
      this.$refs.scrollList.scrollTop = this.$refs.scrollList.scrollHeight, this.initialScrollTop || (this.initialScrollTop = this.$refs.scrollList.scrollTop);
    },
    handleScroll(D) {
      D.target.scrollTop === 0 && this.$emit("scrollToTop");
    },
    shouldScrollToBottom() {
      const u = this.$refs.scrollList.scrollTop > this.$refs.scrollList.scrollHeight - 600;
      return this.alwaysScrollToBottom || u;
    },
    profile(D) {
      return this.participants.find((f) => f.id === D) || { imageUrl: "", name: "" };
    },
    watchScrollList() {
      RD = new ResizeObserver(() => {
        const D = this.$refs.scrollList.scrollHeight - this.$refs.scrollList.scrollTop;
        (this.initialScrollTop === this.$refs.scrollList.scrollTop || this.$refs.scrollList.scrollTop > this.initialScrollTop && D > this.$refs.scrollList.offsetHeight) && this._scrollDown();
      }), RD.observe(this.$refs.scrollList);
    }
  }
};
function X3(D, u, f, e, F, t) {
  const a = O("Message");
  return b(), m("div", {
    ref: "scrollList",
    class: "sc-message-list",
    style: j({ backgroundColor: f.colors.messageList.bg }),
    onScroll: u[0] || (u[0] = (...n) => t.handleScroll && t.handleScroll(...n))
  }, [
    (b(!0), m(qu, null, Ku(f.messages, (n, r) => (b(), V(a, {
      key: n.id ? n.id : r,
      message: n,
      user: t.profile(n.author),
      colors: f.colors,
      "message-styling": f.messageStyling,
      "show-confirmation-deletion": f.showConfirmationDeletion,
      "confirmation-deletion-message": f.confirmationDeletionMessage,
      "message-margin": f.messageMargin,
      onRemove: (o) => D.$emit("remove", n)
    }, {
      "user-avatar": x((o) => [
        k(D.$slots, "user-avatar", {
          user: o.user,
          message: o.message
        }, void 0, !0)
      ]),
      "text-message-body": x((o) => [
        k(D.$slots, "text-message-body", {
          message: o.message,
          messageText: o.messageText,
          messageColors: o.messageColors,
          me: o.me
        }, void 0, !0)
      ]),
      "system-message-body": x((o) => [
        k(D.$slots, "system-message-body", {
          message: o.message
        }, void 0, !0)
      ]),
      "text-message-toolbox": x((o) => [
        k(D.$slots, "text-message-toolbox", {
          message: o.message,
          me: o.me
        }, void 0, !0)
      ]),
      "file-message-body": x((o) => [
        k(D.$slots, "file-message-body", {
          message: o.message,
          messageColors: o.messageColors
        }, void 0, !0)
      ]),
      "emoji-message-body": x((o) => [
        k(D.$slots, "emoji-message-body", {
          message: o.message
        }, void 0, !0)
      ]),
      _: 2
    }, 1032, ["message", "user", "colors", "message-styling", "show-confirmation-deletion", "confirmation-deletion-message", "message-margin", "onRemove"]))), 128)),
    qf(L(a, {
      message: { author: f.showTypingIndicator, type: "typing" },
      user: t.profile(f.showTypingIndicator),
      colors: f.colors,
      "message-styling": f.messageStyling,
      "show-confirmation-deletion": f.showConfirmationDeletion,
      "confirmation-deletion-message": f.confirmationDeletionMessage
    }, null, 8, ["message", "user", "colors", "message-styling", "show-confirmation-deletion", "confirmation-deletion-message"]), [
      [k1, f.showTypingIndicator !== ""]
    ])
  ], 36);
}
const K3 = /* @__PURE__ */ M(Y3, [["render", X3], ["__scopeId", "data-v-91976411"]]);
var ED = { exports: {} }, bf;
function Z3() {
  return bf || (bf = 1, function(D, u) {
    (function() {
      var f = this, e = f.EmojiConvertor, F = function() {
        var t = this;
        return t.img_set = "apple", t.img_sets = {
          apple: { path: "/emoji-data/img-apple-64/", sheet: "/emoji-data/sheet_apple_64.png", sheet_size: 64, mask: 1 },
          google: { path: "/emoji-data/img-google-64/", sheet: "/emoji-data/sheet_google_64.png", sheet_size: 64, mask: 2 },
          twitter: { path: "/emoji-data/img-twitter-64/", sheet: "/emoji-data/sheet_twitter_64.png", sheet_size: 64, mask: 4 },
          facebook: { path: "/emoji-data/img-facebook-64/", sheet: "/emoji-data/sheet_facebook_64.png", sheet_size: 64, mask: 8 }
        }, t.use_css_imgs = !1, t.colons_mode = !1, t.text_mode = !1, t.include_title = !1, t.include_text = !1, t.allow_native = !0, t.wrap_native = !1, t.use_sheet = !1, t.avoid_ms_emoji = !0, t.allow_caps = !1, t.img_suffix = "", t.inits = {}, t.map = {}, t.init_env(), t;
      };
      F.prototype.noConflict = function() {
        return f.EmojiConvertor = e, F;
      }, F.prototype.replace_emoticons = function(t) {
        var a = this, n = a.replace_emoticons_with_colons(t);
        return a.replace_colons(n);
      }, F.prototype.replace_emoticons_with_colons = function(t) {
        var a = this;
        a.init_emoticons();
        var n = 0, r = [], o = t.replace(a.rx_emoticons, function(s, B, E, y) {
          var _ = n;
          n = y + s.length;
          var w = E.indexOf("(") !== -1, v = E.indexOf(")") !== -1;
          if ((w || v) && r.indexOf(E) == -1 && r.push(E), v && !w) {
            var A = t.substring(_, y);
            if (A.indexOf("(") !== -1 && A.indexOf(")") === -1) return s;
          }
          if (s === `
8)`) {
            var g = t.substring(0, y);
            if (/\n?(6\)|7\))/.test(g)) return s;
          }
          var h = a.data[a.map.emoticons[E]][3][0];
          return h ? B + ":" + h + ":" : s;
        });
        if (r.length) {
          var d = r.map(a.escape_rx), c = new RegExp("(\\(.+)(" + d.join("|") + ")(.+\\))", "g");
          o = o.replace(c, function(s, B, E, y) {
            var _ = a.data[a.map.emoticons[E]][3][0];
            return _ ? B + ":" + _ + ":" + y : s;
          });
        }
        return o;
      }, F.prototype.replace_colons = function(t) {
        var a = this;
        return a.init_colons(), t.replace(a.rx_colons, function(n) {
          var r = n.substr(1, n.length - 2);
          if (a.allow_caps && (r = r.toLowerCase()), r.indexOf("::skin-tone-") > -1) {
            var o = r.substr(-1, 1), d = "skin-tone-" + o, c = a.map.colons[d];
            r = r.substr(0, r.length - 13);
            var s = a.map.colons[r];
            return s ? a.replacement(s, r, ":", {
              idx: c,
              actual: d,
              wrapper: ":"
            }) : ":" + r + ":" + a.replacement(c, d, ":");
          } else {
            var s = a.map.colons[r];
            return s ? a.replacement(s, r, ":") : n;
          }
        });
      }, F.prototype.replace_unified = function(t) {
        var a = this;
        return a.init_unified(), t.replace(a.rx_unified, function(n, r, o) {
          var d = a.map.unified[r];
          if (d) {
            var c = null;
            return o == "🏻" && (c = "1f3fb"), o == "🏼" && (c = "1f3fc"), o == "🏽" && (c = "1f3fd"), o == "🏾" && (c = "1f3fe"), o == "🏿" && (c = "1f3ff"), c ? a.replacement(d, null, null, {
              idx: c,
              actual: o,
              wrapper: ""
            }) : a.replacement(d);
          }
          return d = a.map.unified_vars[r], d ? a.replacement(d[0], null, null, {
            idx: d[1],
            actual: "",
            wrapper: ""
          }) : n;
        });
      }, F.prototype.addAliases = function(t) {
        var a = this;
        a.init_colons();
        for (var n in t)
          a.map.colons[n] = t[n];
      }, F.prototype.removeAliases = function(t) {
        for (var a = this, n = 0; n < t.length; n++) {
          var r = t[n];
          delete a.map.colons[r];
          u:
            for (var o in a.data)
              for (var d = 0; d < a.data[o][3].length; d++)
                if (r == a.data[o][3][d]) {
                  a.map.colons[r] = o;
                  break u;
                }
        }
      }, F.prototype.replacement = function(t, a, n, r, o) {
        var d = this, c = "", s = null;
        if (typeof r == "object" && (c = d.replacement(r.idx, r.actual, r.wrapper, void 0, !0), s = r.idx), n = n || "", d.colons_mode) return ":" + d.data[t][3][0] + ":" + c;
        var B = a ? n + a + n : d.data[t][8] || n + d.data[t][3][0] + n;
        if (d.text_mode) return B + c;
        var E = d.find_image(t, s);
        if (d.init_env(), d.replace_mode == "softbank" && d.allow_native && d.data[t][1]) return d.format_native(d.data[t][1] + c, !o);
        if (d.replace_mode == "google" && d.allow_native && d.data[t][2]) return d.format_native(d.data[t][2] + c, !o);
        if (E.is_var && (c = ""), d.replace_mode == "unified" && d.allow_native) return d.format_native(E.unified + c, !o);
        var y = d.include_title ? ' title="' + (a || d.data[t][3][0]) + '"' : "", _ = d.include_text ? n + (a || d.data[t][3][0]) + n : "";
        if (d.data[t][7] && (E.path = d.data[t][7], E.px = null, E.py = null, E.is_var = !1), E.is_var && d.include_text && r && r.actual && r.wrapper && (_ += r.wrapper + r.actual + r.wrapper), d.replace_mode == "css")
          if (d.use_sheet && E.px != null && E.py != null) {
            var w = 100 * E.px / (d.sheet_size - 1), v = 100 * E.py / (d.sheet_size - 1), A = 100 * d.sheet_size, g = "background: url(" + E.sheet + ");background-position:" + w + "% " + v + "%;background-size:" + A + "% " + A + "%";
            return '<span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="' + g + '"' + y + ' data-codepoints="' + E.full_idx + '">' + _ + "</span></span>" + c;
          } else return d.use_css_imgs ? '<span class="emoji emoji-' + t + '"' + y + ' data-codepoints="' + E.full_idx + '">' + _ + "</span>" + c : '<span class="emoji emoji-sizer" style="background-image:url(' + E.path + ')"' + y + ' data-codepoints="' + E.full_idx + '">' + _ + "</span>" + c;
        return '<img src="' + E.path + '" class="emoji" data-codepoints="' + E.full_idx + '" ' + y + "/>" + c;
      }, F.prototype.format_native = function(t, a) {
        var n = this;
        return n.wrap_native && a ? '<span class="emoji-native">' + t + "</span>" : t;
      }, F.prototype.find_image = function(t, a) {
        var n = this, r = {
          path: "",
          sheet: "",
          sheet_size: 0,
          px: n.data[t][4],
          py: n.data[t][5],
          full_idx: t,
          is_var: !1,
          unified: n.data[t][0][0]
        }, o = n.data[t][6];
        if (a && n.variations_data[t] && n.variations_data[t][a]) {
          var d = n.variations_data[t][a];
          r.px = d[1], r.py = d[2], r.full_idx = d[0], r.is_var = !0, r.unified = d[4][0], o = d[3];
        }
        for (var c = [n.img_set, "apple", "google", "twitter", "facebook", "messenger"], s = 0; s < c.length; s++) {
          if (!n.img_sets[c[s]])
            throw Error("Invalid value for img_set");
          if (o & n.img_sets[c[s]].mask)
            return r.path = n.img_sets[c[s]].path + r.full_idx + ".png" + n.img_suffix, r.sheet = n.img_sets[n.img_set].sheet, r.sheet_size = n.img_sets[n.img_set].sheet_size, r;
          if (n.obsoletes_data[r.full_idx]) {
            var B = n.obsoletes_data[r.full_idx];
            if (B[3] & n.img_sets[c[s]].mask)
              return r.path = n.img_sets[c[s]].path + B[0] + ".png" + n.img_suffix, r.sheet = n.img_sets[c[s]].sheet, r.sheet_size = n.img_sets[c[s]].sheet_size, r.px = B[1], r.py = B[2], r;
          }
        }
        return r;
      }, F.prototype.init_emoticons = function() {
        var t = this;
        if (!t.inits.emoticons) {
          t.init_colons(), t.inits.emoticons = 1;
          var a = [];
          t.map.emoticons = {};
          for (var n in t.emoticons_data) {
            var r = n.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
            t.map.colons[t.emoticons_data[n]] && (t.map.emoticons[r] = t.map.colons[t.emoticons_data[n]], a.push(t.escape_rx(r)));
          }
          t.rx_emoticons = new RegExp("(^|\\s)(" + a.join("|") + ")(?=$|[\\s|\\?\\.,!])", "g");
        }
      }, F.prototype.init_colons = function() {
        var t = this;
        if (!t.inits.colons) {
          t.inits.colons = 1, t.rx_colons = new RegExp(":[a-zA-Z0-9-_+]+:(:skin-tone-[2-6]:)?", "g"), t.map.colons = {};
          for (var a in t.data)
            for (var n = 0; n < t.data[a][3].length; n++)
              t.map.colons[t.data[a][3][n]] = a;
        }
      }, F.prototype.init_unified = function() {
        var t = this;
        if (!t.inits.unified) {
          t.inits.unified = 1;
          var a = [];
          t.map.unified = {}, t.map.unified_vars = {};
          for (var n in t.data)
            for (var r = 0; r < t.data[n][0].length; r++)
              a.push(t.data[n][0][r].replace("*", "\\*")), t.map.unified[t.data[n][0][r]] = n;
          for (var n in t.variations_data)
            if (!(t.variations_data[n]["1f3fb"] && t.variations_data[n]["1f3fb"][0] == n + "-1f3fb"))
              for (var o in t.variations_data[n])
                for (var r = 0; r < t.variations_data[n][o][4].length; r++)
                  a.push(t.variations_data[n][o][4][r].replace("*", "\\*")), t.map.unified_vars[t.variations_data[n][o][4][r]] = [n, o];
          a = a.sort(function(d, c) {
            return c.length - d.length;
          }), t.rx_unified = new RegExp("(" + a.join("|") + ")(\uD83C[\uDFFB-\uDFFF])?", "g");
        }
      }, F.prototype.init_env = function() {
        var t = this;
        if (!t.inits.env) {
          t.inits.env = 1, t.replace_mode = "img";
          var a = !1;
          if (typeof navigator < "u" && "userAgent" in navigator) {
            var n = navigator.userAgent;
            if (typeof window < "u" && window.getComputedStyle)
              try {
                var r = window.getComputedStyle(document.body);
                (r["background-size"] || r.backgroundSize) && (a = !0);
              } catch {
                n.match(/Firefox/i) && (a = !0);
              }
            if ("product" in navigator && /ReactNative/i.test(navigator.product)) {
              t.replace_mode = "unified";
              return;
            }
            if (n.match(/(iPhone|iPod|iPad|iPhone\s+Simulator)/i)) {
              if (n.match(/OS\s+[12345]/i)) {
                t.replace_mode = "softbank";
                return;
              }
              if (n.match(/OS\s+[6789]/i)) {
                t.replace_mode = "unified";
                return;
              }
            }
            if (n.match(/Mac OS X (10[._ ](?:[789]|1)|11[._ ]\d)/i)) {
              t.replace_mode = "unified";
              return;
            }
            if (!t.avoid_ms_emoji && (n.match(/Windows NT 6.[1-9]/i) || n.match(/Windows NT 10.[0-9]/i)) && !n.match(/Chrome/i) && !n.match(/MSIE 8/i)) {
              t.replace_mode = "unified";
              return;
            }
          }
          if (a) {
            t.replace_mode = "css";
            return;
          }
        }
      }, F.prototype.escape_rx = function(t) {
        return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      }, F.prototype.sheet_size = 61, F.prototype.data = {
        "0023-fe0f-20e3": [["#️⃣", "#⃣"], "", "󾠬", ["hash"], 0, 0, 7, 0],
        "002a-fe0f-20e3": [["*️⃣", "*⃣"], "", "", ["keycap_star"], 0, 1, 7, 0],
        "0030-fe0f-20e3": [["0️⃣", "0⃣"], "", "󾠷", ["zero"], 0, 2, 7, 0],
        "0031-fe0f-20e3": [["1️⃣", "1⃣"], "", "󾠮", ["one"], 0, 3, 7, 0],
        "0032-fe0f-20e3": [["2️⃣", "2⃣"], "", "󾠯", ["two"], 0, 4, 7, 0],
        "0033-fe0f-20e3": [["3️⃣", "3⃣"], "", "󾠰", ["three"], 0, 5, 7, 0],
        "0034-fe0f-20e3": [["4️⃣", "4⃣"], "", "󾠱", ["four"], 0, 6, 7, 0],
        "0035-fe0f-20e3": [["5️⃣", "5⃣"], "", "󾠲", ["five"], 0, 7, 7, 0],
        "0036-fe0f-20e3": [["6️⃣", "6⃣"], "", "󾠳", ["six"], 0, 8, 7, 0],
        "0037-fe0f-20e3": [["7️⃣", "7⃣"], "", "󾠴", ["seven"], 0, 9, 7, 0],
        "0038-fe0f-20e3": [["8️⃣", "8⃣"], "", "󾠵", ["eight"], 0, 10, 7, 0],
        "0039-fe0f-20e3": [["9️⃣", "9⃣"], "", "󾠶", ["nine"], 0, 11, 7, 0],
        "00a9-fe0f": [["©️", "©"], "", "󾬩", ["copyright"], 0, 12, 7, 0],
        "00ae-fe0f": [["®️", "®"], "", "󾬭", ["registered"], 0, 13, 7, 0],
        "1f004": [["🀄"], "", "󾠋", ["mahjong"], 0, 14, 15, 0],
        "1f0cf": [["🃏"], "", "󾠒", ["black_joker"], 0, 15, 15, 0],
        "1f170-fe0f": [["🅰️", "🅰"], "", "󾔋", ["a"], 0, 16, 15, 0],
        "1f171-fe0f": [["🅱️", "🅱"], "", "󾔌", ["b"], 0, 17, 15, 0],
        "1f17e-fe0f": [["🅾️", "🅾"], "", "󾔎", ["o2"], 0, 18, 15, 0],
        "1f17f-fe0f": [["🅿️", "🅿"], "", "󾟶", ["parking"], 0, 19, 15, 0],
        "1f18e": [["🆎"], "", "󾔍", ["ab"], 0, 20, 15, 0],
        "1f191": [["🆑"], "", "󾮄", ["cl"], 0, 21, 15, 0],
        "1f192": [["🆒"], "", "󾬸", ["cool"], 0, 22, 15, 0],
        "1f193": [["🆓"], "", "󾬡", ["free"], 0, 23, 15, 0],
        "1f194": [["🆔"], "", "󾮁", ["id"], 0, 24, 15, 0],
        "1f195": [["🆕"], "", "󾬶", ["new"], 0, 25, 15, 0],
        "1f196": [["🆖"], "", "󾬨", ["ng"], 0, 26, 15, 0],
        "1f197": [["🆗"], "", "󾬧", ["ok"], 0, 27, 15, 0],
        "1f198": [["🆘"], "", "󾭏", ["sos"], 0, 28, 15, 0],
        "1f199": [["🆙"], "", "󾬷", ["up"], 0, 29, 15, 0],
        "1f19a": [["🆚"], "", "󾬲", ["vs"], 0, 30, 15, 0],
        "1f1e6-1f1e8": [["🇦🇨"], "", "", ["flag-ac"], 0, 31, 15, 0],
        "1f1e6-1f1e9": [["🇦🇩"], "", "", ["flag-ad"], 0, 32, 15, 0],
        "1f1e6-1f1ea": [["🇦🇪"], "", "", ["flag-ae"], 0, 33, 15, 0],
        "1f1e6-1f1eb": [["🇦🇫"], "", "", ["flag-af"], 0, 34, 15, 0],
        "1f1e6-1f1ec": [["🇦🇬"], "", "", ["flag-ag"], 0, 35, 15, 0],
        "1f1e6-1f1ee": [["🇦🇮"], "", "", ["flag-ai"], 0, 36, 15, 0],
        "1f1e6-1f1f1": [["🇦🇱"], "", "", ["flag-al"], 0, 37, 15, 0],
        "1f1e6-1f1f2": [["🇦🇲"], "", "", ["flag-am"], 0, 38, 15, 0],
        "1f1e6-1f1f4": [["🇦🇴"], "", "", ["flag-ao"], 0, 39, 15, 0],
        "1f1e6-1f1f6": [["🇦🇶"], "", "", ["flag-aq"], 0, 40, 15, 0],
        "1f1e6-1f1f7": [["🇦🇷"], "", "", ["flag-ar"], 0, 41, 15, 0],
        "1f1e6-1f1f8": [["🇦🇸"], "", "", ["flag-as"], 0, 42, 15, 0],
        "1f1e6-1f1f9": [["🇦🇹"], "", "", ["flag-at"], 0, 43, 15, 0],
        "1f1e6-1f1fa": [["🇦🇺"], "", "", ["flag-au"], 0, 44, 15, 0],
        "1f1e6-1f1fc": [["🇦🇼"], "", "", ["flag-aw"], 0, 45, 15, 0],
        "1f1e6-1f1fd": [["🇦🇽"], "", "", ["flag-ax"], 0, 46, 15, 0],
        "1f1e6-1f1ff": [["🇦🇿"], "", "", ["flag-az"], 0, 47, 15, 0],
        "1f1e7-1f1e6": [["🇧🇦"], "", "", ["flag-ba"], 0, 48, 15, 0],
        "1f1e7-1f1e7": [["🇧🇧"], "", "", ["flag-bb"], 0, 49, 15, 0],
        "1f1e7-1f1e9": [["🇧🇩"], "", "", ["flag-bd"], 0, 50, 15, 0],
        "1f1e7-1f1ea": [["🇧🇪"], "", "", ["flag-be"], 0, 51, 15, 0],
        "1f1e7-1f1eb": [["🇧🇫"], "", "", ["flag-bf"], 0, 52, 15, 0],
        "1f1e7-1f1ec": [["🇧🇬"], "", "", ["flag-bg"], 0, 53, 15, 0],
        "1f1e7-1f1ed": [["🇧🇭"], "", "", ["flag-bh"], 0, 54, 15, 0],
        "1f1e7-1f1ee": [["🇧🇮"], "", "", ["flag-bi"], 0, 55, 15, 0],
        "1f1e7-1f1ef": [["🇧🇯"], "", "", ["flag-bj"], 0, 56, 15, 0],
        "1f1e7-1f1f1": [["🇧🇱"], "", "", ["flag-bl"], 0, 57, 15, 0],
        "1f1e7-1f1f2": [["🇧🇲"], "", "", ["flag-bm"], 0, 58, 15, 0],
        "1f1e7-1f1f3": [["🇧🇳"], "", "", ["flag-bn"], 0, 59, 15, 0],
        "1f1e7-1f1f4": [["🇧🇴"], "", "", ["flag-bo"], 0, 60, 15, 0],
        "1f1e7-1f1f6": [["🇧🇶"], "", "", ["flag-bq"], 1, 0, 15, 0],
        "1f1e7-1f1f7": [["🇧🇷"], "", "", ["flag-br"], 1, 1, 15, 0],
        "1f1e7-1f1f8": [["🇧🇸"], "", "", ["flag-bs"], 1, 2, 15, 0],
        "1f1e7-1f1f9": [["🇧🇹"], "", "", ["flag-bt"], 1, 3, 15, 0],
        "1f1e7-1f1fb": [["🇧🇻"], "", "", ["flag-bv"], 1, 4, 15, 0],
        "1f1e7-1f1fc": [["🇧🇼"], "", "", ["flag-bw"], 1, 5, 15, 0],
        "1f1e7-1f1fe": [["🇧🇾"], "", "", ["flag-by"], 1, 6, 15, 0],
        "1f1e7-1f1ff": [["🇧🇿"], "", "", ["flag-bz"], 1, 7, 15, 0],
        "1f1e8-1f1e6": [["🇨🇦"], "", "", ["flag-ca"], 1, 8, 15, 0],
        "1f1e8-1f1e8": [["🇨🇨"], "", "", ["flag-cc"], 1, 9, 15, 0],
        "1f1e8-1f1e9": [["🇨🇩"], "", "", ["flag-cd"], 1, 10, 15, 0],
        "1f1e8-1f1eb": [["🇨🇫"], "", "", ["flag-cf"], 1, 11, 15, 0],
        "1f1e8-1f1ec": [["🇨🇬"], "", "", ["flag-cg"], 1, 12, 15, 0],
        "1f1e8-1f1ed": [["🇨🇭"], "", "", ["flag-ch"], 1, 13, 15, 0],
        "1f1e8-1f1ee": [["🇨🇮"], "", "", ["flag-ci"], 1, 14, 15, 0],
        "1f1e8-1f1f0": [["🇨🇰"], "", "", ["flag-ck"], 1, 15, 15, 0],
        "1f1e8-1f1f1": [["🇨🇱"], "", "", ["flag-cl"], 1, 16, 15, 0],
        "1f1e8-1f1f2": [["🇨🇲"], "", "", ["flag-cm"], 1, 17, 15, 0],
        "1f1e8-1f1f3": [["🇨🇳"], "", "󾓭", ["cn", "flag-cn"], 1, 18, 15, 0],
        "1f1e8-1f1f4": [["🇨🇴"], "", "", ["flag-co"], 1, 19, 15, 0],
        "1f1e8-1f1f5": [["🇨🇵"], "", "", ["flag-cp"], 1, 20, 15, 0],
        "1f1e8-1f1f7": [["🇨🇷"], "", "", ["flag-cr"], 1, 21, 15, 0],
        "1f1e8-1f1fa": [["🇨🇺"], "", "", ["flag-cu"], 1, 22, 15, 0],
        "1f1e8-1f1fb": [["🇨🇻"], "", "", ["flag-cv"], 1, 23, 15, 0],
        "1f1e8-1f1fc": [["🇨🇼"], "", "", ["flag-cw"], 1, 24, 15, 0],
        "1f1e8-1f1fd": [["🇨🇽"], "", "", ["flag-cx"], 1, 25, 15, 0],
        "1f1e8-1f1fe": [["🇨🇾"], "", "", ["flag-cy"], 1, 26, 15, 0],
        "1f1e8-1f1ff": [["🇨🇿"], "", "", ["flag-cz"], 1, 27, 15, 0],
        "1f1e9-1f1ea": [["🇩🇪"], "", "󾓨", ["de", "flag-de"], 1, 28, 15, 0],
        "1f1e9-1f1ec": [["🇩🇬"], "", "", ["flag-dg"], 1, 29, 15, 0],
        "1f1e9-1f1ef": [["🇩🇯"], "", "", ["flag-dj"], 1, 30, 15, 0],
        "1f1e9-1f1f0": [["🇩🇰"], "", "", ["flag-dk"], 1, 31, 15, 0],
        "1f1e9-1f1f2": [["🇩🇲"], "", "", ["flag-dm"], 1, 32, 15, 0],
        "1f1e9-1f1f4": [["🇩🇴"], "", "", ["flag-do"], 1, 33, 15, 0],
        "1f1e9-1f1ff": [["🇩🇿"], "", "", ["flag-dz"], 1, 34, 15, 0],
        "1f1ea-1f1e6": [["🇪🇦"], "", "", ["flag-ea"], 1, 35, 15, 0],
        "1f1ea-1f1e8": [["🇪🇨"], "", "", ["flag-ec"], 1, 36, 15, 0],
        "1f1ea-1f1ea": [["🇪🇪"], "", "", ["flag-ee"], 1, 37, 15, 0],
        "1f1ea-1f1ec": [["🇪🇬"], "", "", ["flag-eg"], 1, 38, 15, 0],
        "1f1ea-1f1ed": [["🇪🇭"], "", "", ["flag-eh"], 1, 39, 15, 0],
        "1f1ea-1f1f7": [["🇪🇷"], "", "", ["flag-er"], 1, 40, 15, 0],
        "1f1ea-1f1f8": [["🇪🇸"], "", "󾓫", ["es", "flag-es"], 1, 41, 15, 0],
        "1f1ea-1f1f9": [["🇪🇹"], "", "", ["flag-et"], 1, 42, 15, 0],
        "1f1ea-1f1fa": [["🇪🇺"], "", "", ["flag-eu"], 1, 43, 15, 0],
        "1f1eb-1f1ee": [["🇫🇮"], "", "", ["flag-fi"], 1, 44, 15, 0],
        "1f1eb-1f1ef": [["🇫🇯"], "", "", ["flag-fj"], 1, 45, 15, 0],
        "1f1eb-1f1f0": [["🇫🇰"], "", "", ["flag-fk"], 1, 46, 15, 0],
        "1f1eb-1f1f2": [["🇫🇲"], "", "", ["flag-fm"], 1, 47, 15, 0],
        "1f1eb-1f1f4": [["🇫🇴"], "", "", ["flag-fo"], 1, 48, 15, 0],
        "1f1eb-1f1f7": [["🇫🇷"], "", "󾓧", ["fr", "flag-fr"], 1, 49, 15, 0],
        "1f1ec-1f1e6": [["🇬🇦"], "", "", ["flag-ga"], 1, 50, 15, 0],
        "1f1ec-1f1e7": [["🇬🇧"], "", "󾓪", ["gb", "uk", "flag-gb"], 1, 51, 15, 0],
        "1f1ec-1f1e9": [["🇬🇩"], "", "", ["flag-gd"], 1, 52, 15, 0],
        "1f1ec-1f1ea": [["🇬🇪"], "", "", ["flag-ge"], 1, 53, 15, 0],
        "1f1ec-1f1eb": [["🇬🇫"], "", "", ["flag-gf"], 1, 54, 15, 0],
        "1f1ec-1f1ec": [["🇬🇬"], "", "", ["flag-gg"], 1, 55, 15, 0],
        "1f1ec-1f1ed": [["🇬🇭"], "", "", ["flag-gh"], 1, 56, 15, 0],
        "1f1ec-1f1ee": [["🇬🇮"], "", "", ["flag-gi"], 1, 57, 15, 0],
        "1f1ec-1f1f1": [["🇬🇱"], "", "", ["flag-gl"], 1, 58, 15, 0],
        "1f1ec-1f1f2": [["🇬🇲"], "", "", ["flag-gm"], 1, 59, 15, 0],
        "1f1ec-1f1f3": [["🇬🇳"], "", "", ["flag-gn"], 1, 60, 15, 0],
        "1f1ec-1f1f5": [["🇬🇵"], "", "", ["flag-gp"], 2, 0, 15, 0],
        "1f1ec-1f1f6": [["🇬🇶"], "", "", ["flag-gq"], 2, 1, 15, 0],
        "1f1ec-1f1f7": [["🇬🇷"], "", "", ["flag-gr"], 2, 2, 15, 0],
        "1f1ec-1f1f8": [["🇬🇸"], "", "", ["flag-gs"], 2, 3, 15, 0],
        "1f1ec-1f1f9": [["🇬🇹"], "", "", ["flag-gt"], 2, 4, 15, 0],
        "1f1ec-1f1fa": [["🇬🇺"], "", "", ["flag-gu"], 2, 5, 15, 0],
        "1f1ec-1f1fc": [["🇬🇼"], "", "", ["flag-gw"], 2, 6, 15, 0],
        "1f1ec-1f1fe": [["🇬🇾"], "", "", ["flag-gy"], 2, 7, 15, 0],
        "1f1ed-1f1f0": [["🇭🇰"], "", "", ["flag-hk"], 2, 8, 15, 0],
        "1f1ed-1f1f2": [["🇭🇲"], "", "", ["flag-hm"], 2, 9, 15, 0],
        "1f1ed-1f1f3": [["🇭🇳"], "", "", ["flag-hn"], 2, 10, 15, 0],
        "1f1ed-1f1f7": [["🇭🇷"], "", "", ["flag-hr"], 2, 11, 15, 0],
        "1f1ed-1f1f9": [["🇭🇹"], "", "", ["flag-ht"], 2, 12, 15, 0],
        "1f1ed-1f1fa": [["🇭🇺"], "", "", ["flag-hu"], 2, 13, 15, 0],
        "1f1ee-1f1e8": [["🇮🇨"], "", "", ["flag-ic"], 2, 14, 15, 0],
        "1f1ee-1f1e9": [["🇮🇩"], "", "", ["flag-id"], 2, 15, 15, 0],
        "1f1ee-1f1ea": [["🇮🇪"], "", "", ["flag-ie"], 2, 16, 15, 0],
        "1f1ee-1f1f1": [["🇮🇱"], "", "", ["flag-il"], 2, 17, 15, 0],
        "1f1ee-1f1f2": [["🇮🇲"], "", "", ["flag-im"], 2, 18, 15, 0],
        "1f1ee-1f1f3": [["🇮🇳"], "", "", ["flag-in"], 2, 19, 15, 0],
        "1f1ee-1f1f4": [["🇮🇴"], "", "", ["flag-io"], 2, 20, 15, 0],
        "1f1ee-1f1f6": [["🇮🇶"], "", "", ["flag-iq"], 2, 21, 15, 0],
        "1f1ee-1f1f7": [["🇮🇷"], "", "", ["flag-ir"], 2, 22, 15, 0],
        "1f1ee-1f1f8": [["🇮🇸"], "", "", ["flag-is"], 2, 23, 15, 0],
        "1f1ee-1f1f9": [["🇮🇹"], "", "󾓩", ["it", "flag-it"], 2, 24, 15, 0],
        "1f1ef-1f1ea": [["🇯🇪"], "", "", ["flag-je"], 2, 25, 15, 0],
        "1f1ef-1f1f2": [["🇯🇲"], "", "", ["flag-jm"], 2, 26, 15, 0],
        "1f1ef-1f1f4": [["🇯🇴"], "", "", ["flag-jo"], 2, 27, 15, 0],
        "1f1ef-1f1f5": [["🇯🇵"], "", "󾓥", ["jp", "flag-jp"], 2, 28, 15, 0],
        "1f1f0-1f1ea": [["🇰🇪"], "", "", ["flag-ke"], 2, 29, 15, 0],
        "1f1f0-1f1ec": [["🇰🇬"], "", "", ["flag-kg"], 2, 30, 15, 0],
        "1f1f0-1f1ed": [["🇰🇭"], "", "", ["flag-kh"], 2, 31, 15, 0],
        "1f1f0-1f1ee": [["🇰🇮"], "", "", ["flag-ki"], 2, 32, 15, 0],
        "1f1f0-1f1f2": [["🇰🇲"], "", "", ["flag-km"], 2, 33, 15, 0],
        "1f1f0-1f1f3": [["🇰🇳"], "", "", ["flag-kn"], 2, 34, 15, 0],
        "1f1f0-1f1f5": [["🇰🇵"], "", "", ["flag-kp"], 2, 35, 15, 0],
        "1f1f0-1f1f7": [["🇰🇷"], "", "󾓮", ["kr", "flag-kr"], 2, 36, 15, 0],
        "1f1f0-1f1fc": [["🇰🇼"], "", "", ["flag-kw"], 2, 37, 15, 0],
        "1f1f0-1f1fe": [["🇰🇾"], "", "", ["flag-ky"], 2, 38, 15, 0],
        "1f1f0-1f1ff": [["🇰🇿"], "", "", ["flag-kz"], 2, 39, 15, 0],
        "1f1f1-1f1e6": [["🇱🇦"], "", "", ["flag-la"], 2, 40, 15, 0],
        "1f1f1-1f1e7": [["🇱🇧"], "", "", ["flag-lb"], 2, 41, 15, 0],
        "1f1f1-1f1e8": [["🇱🇨"], "", "", ["flag-lc"], 2, 42, 15, 0],
        "1f1f1-1f1ee": [["🇱🇮"], "", "", ["flag-li"], 2, 43, 15, 0],
        "1f1f1-1f1f0": [["🇱🇰"], "", "", ["flag-lk"], 2, 44, 15, 0],
        "1f1f1-1f1f7": [["🇱🇷"], "", "", ["flag-lr"], 2, 45, 15, 0],
        "1f1f1-1f1f8": [["🇱🇸"], "", "", ["flag-ls"], 2, 46, 15, 0],
        "1f1f1-1f1f9": [["🇱🇹"], "", "", ["flag-lt"], 2, 47, 15, 0],
        "1f1f1-1f1fa": [["🇱🇺"], "", "", ["flag-lu"], 2, 48, 15, 0],
        "1f1f1-1f1fb": [["🇱🇻"], "", "", ["flag-lv"], 2, 49, 15, 0],
        "1f1f1-1f1fe": [["🇱🇾"], "", "", ["flag-ly"], 2, 50, 15, 0],
        "1f1f2-1f1e6": [["🇲🇦"], "", "", ["flag-ma"], 2, 51, 15, 0],
        "1f1f2-1f1e8": [["🇲🇨"], "", "", ["flag-mc"], 2, 52, 15, 0],
        "1f1f2-1f1e9": [["🇲🇩"], "", "", ["flag-md"], 2, 53, 15, 0],
        "1f1f2-1f1ea": [["🇲🇪"], "", "", ["flag-me"], 2, 54, 15, 0],
        "1f1f2-1f1eb": [["🇲🇫"], "", "", ["flag-mf"], 2, 55, 15, 0],
        "1f1f2-1f1ec": [["🇲🇬"], "", "", ["flag-mg"], 2, 56, 15, 0],
        "1f1f2-1f1ed": [["🇲🇭"], "", "", ["flag-mh"], 2, 57, 15, 0],
        "1f1f2-1f1f0": [["🇲🇰"], "", "", ["flag-mk"], 2, 58, 15, 0],
        "1f1f2-1f1f1": [["🇲🇱"], "", "", ["flag-ml"], 2, 59, 15, 0],
        "1f1f2-1f1f2": [["🇲🇲"], "", "", ["flag-mm"], 2, 60, 15, 0],
        "1f1f2-1f1f3": [["🇲🇳"], "", "", ["flag-mn"], 3, 0, 15, 0],
        "1f1f2-1f1f4": [["🇲🇴"], "", "", ["flag-mo"], 3, 1, 15, 0],
        "1f1f2-1f1f5": [["🇲🇵"], "", "", ["flag-mp"], 3, 2, 15, 0],
        "1f1f2-1f1f6": [["🇲🇶"], "", "", ["flag-mq"], 3, 3, 15, 0],
        "1f1f2-1f1f7": [["🇲🇷"], "", "", ["flag-mr"], 3, 4, 15, 0],
        "1f1f2-1f1f8": [["🇲🇸"], "", "", ["flag-ms"], 3, 5, 15, 0],
        "1f1f2-1f1f9": [["🇲🇹"], "", "", ["flag-mt"], 3, 6, 15, 0],
        "1f1f2-1f1fa": [["🇲🇺"], "", "", ["flag-mu"], 3, 7, 15, 0],
        "1f1f2-1f1fb": [["🇲🇻"], "", "", ["flag-mv"], 3, 8, 15, 0],
        "1f1f2-1f1fc": [["🇲🇼"], "", "", ["flag-mw"], 3, 9, 15, 0],
        "1f1f2-1f1fd": [["🇲🇽"], "", "", ["flag-mx"], 3, 10, 15, 0],
        "1f1f2-1f1fe": [["🇲🇾"], "", "", ["flag-my"], 3, 11, 15, 0],
        "1f1f2-1f1ff": [["🇲🇿"], "", "", ["flag-mz"], 3, 12, 15, 0],
        "1f1f3-1f1e6": [["🇳🇦"], "", "", ["flag-na"], 3, 13, 15, 0],
        "1f1f3-1f1e8": [["🇳🇨"], "", "", ["flag-nc"], 3, 14, 15, 0],
        "1f1f3-1f1ea": [["🇳🇪"], "", "", ["flag-ne"], 3, 15, 15, 0],
        "1f1f3-1f1eb": [["🇳🇫"], "", "", ["flag-nf"], 3, 16, 15, 0],
        "1f1f3-1f1ec": [["🇳🇬"], "", "", ["flag-ng"], 3, 17, 15, 0],
        "1f1f3-1f1ee": [["🇳🇮"], "", "", ["flag-ni"], 3, 18, 15, 0],
        "1f1f3-1f1f1": [["🇳🇱"], "", "", ["flag-nl"], 3, 19, 15, 0],
        "1f1f3-1f1f4": [["🇳🇴"], "", "", ["flag-no"], 3, 20, 15, 0],
        "1f1f3-1f1f5": [["🇳🇵"], "", "", ["flag-np"], 3, 21, 15, 0],
        "1f1f3-1f1f7": [["🇳🇷"], "", "", ["flag-nr"], 3, 22, 15, 0],
        "1f1f3-1f1fa": [["🇳🇺"], "", "", ["flag-nu"], 3, 23, 15, 0],
        "1f1f3-1f1ff": [["🇳🇿"], "", "", ["flag-nz"], 3, 24, 15, 0],
        "1f1f4-1f1f2": [["🇴🇲"], "", "", ["flag-om"], 3, 25, 15, 0],
        "1f1f5-1f1e6": [["🇵🇦"], "", "", ["flag-pa"], 3, 26, 15, 0],
        "1f1f5-1f1ea": [["🇵🇪"], "", "", ["flag-pe"], 3, 27, 15, 0],
        "1f1f5-1f1eb": [["🇵🇫"], "", "", ["flag-pf"], 3, 28, 15, 0],
        "1f1f5-1f1ec": [["🇵🇬"], "", "", ["flag-pg"], 3, 29, 15, 0],
        "1f1f5-1f1ed": [["🇵🇭"], "", "", ["flag-ph"], 3, 30, 15, 0],
        "1f1f5-1f1f0": [["🇵🇰"], "", "", ["flag-pk"], 3, 31, 15, 0],
        "1f1f5-1f1f1": [["🇵🇱"], "", "", ["flag-pl"], 3, 32, 15, 0],
        "1f1f5-1f1f2": [["🇵🇲"], "", "", ["flag-pm"], 3, 33, 15, 0],
        "1f1f5-1f1f3": [["🇵🇳"], "", "", ["flag-pn"], 3, 34, 15, 0],
        "1f1f5-1f1f7": [["🇵🇷"], "", "", ["flag-pr"], 3, 35, 15, 0],
        "1f1f5-1f1f8": [["🇵🇸"], "", "", ["flag-ps"], 3, 36, 15, 0],
        "1f1f5-1f1f9": [["🇵🇹"], "", "", ["flag-pt"], 3, 37, 15, 0],
        "1f1f5-1f1fc": [["🇵🇼"], "", "", ["flag-pw"], 3, 38, 15, 0],
        "1f1f5-1f1fe": [["🇵🇾"], "", "", ["flag-py"], 3, 39, 15, 0],
        "1f1f6-1f1e6": [["🇶🇦"], "", "", ["flag-qa"], 3, 40, 15, 0],
        "1f1f7-1f1ea": [["🇷🇪"], "", "", ["flag-re"], 3, 41, 15, 0],
        "1f1f7-1f1f4": [["🇷🇴"], "", "", ["flag-ro"], 3, 42, 15, 0],
        "1f1f7-1f1f8": [["🇷🇸"], "", "", ["flag-rs"], 3, 43, 15, 0],
        "1f1f7-1f1fa": [["🇷🇺"], "", "󾓬", ["ru", "flag-ru"], 3, 44, 15, 0],
        "1f1f7-1f1fc": [["🇷🇼"], "", "", ["flag-rw"], 3, 45, 15, 0],
        "1f1f8-1f1e6": [["🇸🇦"], "", "", ["flag-sa"], 3, 46, 15, 0],
        "1f1f8-1f1e7": [["🇸🇧"], "", "", ["flag-sb"], 3, 47, 15, 0],
        "1f1f8-1f1e8": [["🇸🇨"], "", "", ["flag-sc"], 3, 48, 15, 0],
        "1f1f8-1f1e9": [["🇸🇩"], "", "", ["flag-sd"], 3, 49, 15, 0],
        "1f1f8-1f1ea": [["🇸🇪"], "", "", ["flag-se"], 3, 50, 15, 0],
        "1f1f8-1f1ec": [["🇸🇬"], "", "", ["flag-sg"], 3, 51, 15, 0],
        "1f1f8-1f1ed": [["🇸🇭"], "", "", ["flag-sh"], 3, 52, 15, 0],
        "1f1f8-1f1ee": [["🇸🇮"], "", "", ["flag-si"], 3, 53, 15, 0],
        "1f1f8-1f1ef": [["🇸🇯"], "", "", ["flag-sj"], 3, 54, 15, 0],
        "1f1f8-1f1f0": [["🇸🇰"], "", "", ["flag-sk"], 3, 55, 15, 0],
        "1f1f8-1f1f1": [["🇸🇱"], "", "", ["flag-sl"], 3, 56, 15, 0],
        "1f1f8-1f1f2": [["🇸🇲"], "", "", ["flag-sm"], 3, 57, 15, 0],
        "1f1f8-1f1f3": [["🇸🇳"], "", "", ["flag-sn"], 3, 58, 15, 0],
        "1f1f8-1f1f4": [["🇸🇴"], "", "", ["flag-so"], 3, 59, 15, 0],
        "1f1f8-1f1f7": [["🇸🇷"], "", "", ["flag-sr"], 3, 60, 15, 0],
        "1f1f8-1f1f8": [["🇸🇸"], "", "", ["flag-ss"], 4, 0, 15, 0],
        "1f1f8-1f1f9": [["🇸🇹"], "", "", ["flag-st"], 4, 1, 15, 0],
        "1f1f8-1f1fb": [["🇸🇻"], "", "", ["flag-sv"], 4, 2, 15, 0],
        "1f1f8-1f1fd": [["🇸🇽"], "", "", ["flag-sx"], 4, 3, 15, 0],
        "1f1f8-1f1fe": [["🇸🇾"], "", "", ["flag-sy"], 4, 4, 15, 0],
        "1f1f8-1f1ff": [["🇸🇿"], "", "", ["flag-sz"], 4, 5, 15, 0],
        "1f1f9-1f1e6": [["🇹🇦"], "", "", ["flag-ta"], 4, 6, 15, 0],
        "1f1f9-1f1e8": [["🇹🇨"], "", "", ["flag-tc"], 4, 7, 15, 0],
        "1f1f9-1f1e9": [["🇹🇩"], "", "", ["flag-td"], 4, 8, 15, 0],
        "1f1f9-1f1eb": [["🇹🇫"], "", "", ["flag-tf"], 4, 9, 15, 0],
        "1f1f9-1f1ec": [["🇹🇬"], "", "", ["flag-tg"], 4, 10, 15, 0],
        "1f1f9-1f1ed": [["🇹🇭"], "", "", ["flag-th"], 4, 11, 15, 0],
        "1f1f9-1f1ef": [["🇹🇯"], "", "", ["flag-tj"], 4, 12, 15, 0],
        "1f1f9-1f1f0": [["🇹🇰"], "", "", ["flag-tk"], 4, 13, 15, 0],
        "1f1f9-1f1f1": [["🇹🇱"], "", "", ["flag-tl"], 4, 14, 15, 0],
        "1f1f9-1f1f2": [["🇹🇲"], "", "", ["flag-tm"], 4, 15, 15, 0],
        "1f1f9-1f1f3": [["🇹🇳"], "", "", ["flag-tn"], 4, 16, 15, 0],
        "1f1f9-1f1f4": [["🇹🇴"], "", "", ["flag-to"], 4, 17, 15, 0],
        "1f1f9-1f1f7": [["🇹🇷"], "", "", ["flag-tr"], 4, 18, 15, 0],
        "1f1f9-1f1f9": [["🇹🇹"], "", "", ["flag-tt"], 4, 19, 15, 0],
        "1f1f9-1f1fb": [["🇹🇻"], "", "", ["flag-tv"], 4, 20, 15, 0],
        "1f1f9-1f1fc": [["🇹🇼"], "", "", ["flag-tw"], 4, 21, 15, 0],
        "1f1f9-1f1ff": [["🇹🇿"], "", "", ["flag-tz"], 4, 22, 15, 0],
        "1f1fa-1f1e6": [["🇺🇦"], "", "", ["flag-ua"], 4, 23, 15, 0],
        "1f1fa-1f1ec": [["🇺🇬"], "", "", ["flag-ug"], 4, 24, 15, 0],
        "1f1fa-1f1f2": [["🇺🇲"], "", "", ["flag-um"], 4, 25, 15, 0],
        "1f1fa-1f1f3": [["🇺🇳"], "", "", ["flag-un"], 4, 26, 15, 0],
        "1f1fa-1f1f8": [["🇺🇸"], "", "󾓦", ["us", "flag-us"], 4, 27, 15, 0],
        "1f1fa-1f1fe": [["🇺🇾"], "", "", ["flag-uy"], 4, 28, 15, 0],
        "1f1fa-1f1ff": [["🇺🇿"], "", "", ["flag-uz"], 4, 29, 15, 0],
        "1f1fb-1f1e6": [["🇻🇦"], "", "", ["flag-va"], 4, 30, 15, 0],
        "1f1fb-1f1e8": [["🇻🇨"], "", "", ["flag-vc"], 4, 31, 15, 0],
        "1f1fb-1f1ea": [["🇻🇪"], "", "", ["flag-ve"], 4, 32, 15, 0],
        "1f1fb-1f1ec": [["🇻🇬"], "", "", ["flag-vg"], 4, 33, 15, 0],
        "1f1fb-1f1ee": [["🇻🇮"], "", "", ["flag-vi"], 4, 34, 15, 0],
        "1f1fb-1f1f3": [["🇻🇳"], "", "", ["flag-vn"], 4, 35, 15, 0],
        "1f1fb-1f1fa": [["🇻🇺"], "", "", ["flag-vu"], 4, 36, 15, 0],
        "1f1fc-1f1eb": [["🇼🇫"], "", "", ["flag-wf"], 4, 37, 15, 0],
        "1f1fc-1f1f8": [["🇼🇸"], "", "", ["flag-ws"], 4, 38, 15, 0],
        "1f1fd-1f1f0": [["🇽🇰"], "", "", ["flag-xk"], 4, 39, 15, 0],
        "1f1fe-1f1ea": [["🇾🇪"], "", "", ["flag-ye"], 4, 40, 15, 0],
        "1f1fe-1f1f9": [["🇾🇹"], "", "", ["flag-yt"], 4, 41, 15, 0],
        "1f1ff-1f1e6": [["🇿🇦"], "", "", ["flag-za"], 4, 42, 15, 0],
        "1f1ff-1f1f2": [["🇿🇲"], "", "", ["flag-zm"], 4, 43, 15, 0],
        "1f1ff-1f1fc": [["🇿🇼"], "", "", ["flag-zw"], 4, 44, 15, 0],
        "1f201": [["🈁"], "", "󾬤", ["koko"], 4, 45, 15, 0],
        "1f202-fe0f": [["🈂️", "🈂"], "", "󾬿", ["sa"], 4, 46, 15, 0],
        "1f21a": [["🈚"], "", "󾬺", ["u7121"], 4, 47, 15, 0],
        "1f22f": [["🈯"], "", "󾭀", ["u6307"], 4, 48, 15, 0],
        "1f232": [["🈲"], "", "󾬮", ["u7981"], 4, 49, 15, 0],
        "1f233": [["🈳"], "", "󾬯", ["u7a7a"], 4, 50, 15, 0],
        "1f234": [["🈴"], "", "󾬰", ["u5408"], 4, 51, 15, 0],
        "1f235": [["🈵"], "", "󾬱", ["u6e80"], 4, 52, 15, 0],
        "1f236": [["🈶"], "", "󾬹", ["u6709"], 4, 53, 15, 0],
        "1f237-fe0f": [["🈷️", "🈷"], "", "󾬻", ["u6708"], 4, 54, 15, 0],
        "1f238": [["🈸"], "", "󾬼", ["u7533"], 4, 55, 15, 0],
        "1f239": [["🈹"], "", "󾬾", ["u5272"], 4, 56, 15, 0],
        "1f23a": [["🈺"], "", "󾭁", ["u55b6"], 4, 57, 15, 0],
        "1f250": [["🉐"], "", "󾬽", ["ideograph_advantage"], 4, 58, 15, 0],
        "1f251": [["🉑"], "", "󾭐", ["accept"], 4, 59, 15, 0],
        "1f300": [["🌀"], "", "󾀅", ["cyclone"], 4, 60, 15, 0],
        "1f301": [["🌁"], "", "󾀆", ["foggy"], 5, 0, 15, 0],
        "1f302": [["🌂"], "", "󾀇", ["closed_umbrella"], 5, 1, 15, 0],
        "1f303": [["🌃"], "", "󾀈", ["night_with_stars"], 5, 2, 15, 0],
        "1f304": [["🌄"], "", "󾀉", ["sunrise_over_mountains"], 5, 3, 15, 0],
        "1f305": [["🌅"], "", "󾀊", ["sunrise"], 5, 4, 15, 0],
        "1f306": [["🌆"], "", "󾀋", ["city_sunset"], 5, 5, 15, 0],
        "1f307": [["🌇"], "", "󾀌", ["city_sunrise"], 5, 6, 15, 0],
        "1f308": [["🌈"], "", "󾀍", ["rainbow"], 5, 7, 15, 0],
        "1f309": [["🌉"], "", "󾀐", ["bridge_at_night"], 5, 8, 15, 0],
        "1f30a": [["🌊"], "", "󾀸", ["ocean"], 5, 9, 15, 0],
        "1f30b": [["🌋"], "", "󾀺", ["volcano"], 5, 10, 15, 0],
        "1f30c": [["🌌"], "", "󾀻", ["milky_way"], 5, 11, 15, 0],
        "1f30d": [["🌍"], "", "", ["earth_africa"], 5, 12, 15, 0],
        "1f30e": [["🌎"], "", "", ["earth_americas"], 5, 13, 15, 0],
        "1f30f": [["🌏"], "", "󾀹", ["earth_asia"], 5, 14, 15, 0],
        "1f310": [["🌐"], "", "", ["globe_with_meridians"], 5, 15, 15, 0],
        "1f311": [["🌑"], "", "󾀑", ["new_moon"], 5, 16, 15, 0],
        "1f312": [["🌒"], "", "", ["waxing_crescent_moon"], 5, 17, 15, 0],
        "1f313": [["🌓"], "", "󾀓", ["first_quarter_moon"], 5, 18, 15, 0],
        "1f314": [["🌔"], "", "󾀒", ["moon", "waxing_gibbous_moon"], 5, 19, 15, 0],
        "1f315": [["🌕"], "", "󾀕", ["full_moon"], 5, 20, 15, 0],
        "1f316": [["🌖"], "", "", ["waning_gibbous_moon"], 5, 21, 15, 0],
        "1f317": [["🌗"], "", "", ["last_quarter_moon"], 5, 22, 15, 0],
        "1f318": [["🌘"], "", "", ["waning_crescent_moon"], 5, 23, 15, 0],
        "1f319": [["🌙"], "", "󾀔", ["crescent_moon"], 5, 24, 15, 0],
        "1f31a": [["🌚"], "", "", ["new_moon_with_face"], 5, 25, 15, 0],
        "1f31b": [["🌛"], "", "󾀖", ["first_quarter_moon_with_face"], 5, 26, 15, 0],
        "1f31c": [["🌜"], "", "", ["last_quarter_moon_with_face"], 5, 27, 15, 0],
        "1f31d": [["🌝"], "", "", ["full_moon_with_face"], 5, 28, 15, 0],
        "1f31e": [["🌞"], "", "", ["sun_with_face"], 5, 29, 15, 0],
        "1f31f": [["🌟"], "", "󾭩", ["star2"], 5, 30, 15, 0],
        "1f320": [["🌠"], "", "󾭪", ["stars"], 5, 31, 15, 0],
        "1f321-fe0f": [["🌡️", "🌡"], "", "", ["thermometer"], 5, 32, 15, 0],
        "1f324-fe0f": [["🌤️", "🌤"], "", "", ["mostly_sunny", "sun_small_cloud"], 5, 33, 15, 0],
        "1f325-fe0f": [["🌥️", "🌥"], "", "", ["barely_sunny", "sun_behind_cloud"], 5, 34, 15, 0],
        "1f326-fe0f": [["🌦️", "🌦"], "", "", ["partly_sunny_rain", "sun_behind_rain_cloud"], 5, 35, 15, 0],
        "1f327-fe0f": [["🌧️", "🌧"], "", "", ["rain_cloud"], 5, 36, 15, 0],
        "1f328-fe0f": [["🌨️", "🌨"], "", "", ["snow_cloud"], 5, 37, 15, 0],
        "1f329-fe0f": [["🌩️", "🌩"], "", "", ["lightning", "lightning_cloud"], 5, 38, 15, 0],
        "1f32a-fe0f": [["🌪️", "🌪"], "", "", ["tornado", "tornado_cloud"], 5, 39, 15, 0],
        "1f32b-fe0f": [["🌫️", "🌫"], "", "", ["fog"], 5, 40, 15, 0],
        "1f32c-fe0f": [["🌬️", "🌬"], "", "", ["wind_blowing_face"], 5, 41, 15, 0],
        "1f32d": [["🌭"], "", "", ["hotdog"], 5, 42, 15, 0],
        "1f32e": [["🌮"], "", "", ["taco"], 5, 43, 15, 0],
        "1f32f": [["🌯"], "", "", ["burrito"], 5, 44, 15, 0],
        "1f330": [["🌰"], "", "󾁌", ["chestnut"], 5, 45, 15, 0],
        "1f331": [["🌱"], "", "󾀾", ["seedling"], 5, 46, 15, 0],
        "1f332": [["🌲"], "", "", ["evergreen_tree"], 5, 47, 15, 0],
        "1f333": [["🌳"], "", "", ["deciduous_tree"], 5, 48, 15, 0],
        "1f334": [["🌴"], "", "󾁇", ["palm_tree"], 5, 49, 15, 0],
        "1f335": [["🌵"], "", "󾁈", ["cactus"], 5, 50, 15, 0],
        "1f336-fe0f": [["🌶️", "🌶"], "", "", ["hot_pepper"], 5, 51, 15, 0],
        "1f337": [["🌷"], "", "󾀽", ["tulip"], 5, 52, 15, 0],
        "1f338": [["🌸"], "", "󾁀", ["cherry_blossom"], 5, 53, 15, 0],
        "1f339": [["🌹"], "", "󾁁", ["rose"], 5, 54, 15, 0],
        "1f33a": [["🌺"], "", "󾁅", ["hibiscus"], 5, 55, 15, 0],
        "1f33b": [["🌻"], "", "󾁆", ["sunflower"], 5, 56, 15, 0],
        "1f33c": [["🌼"], "", "󾁍", ["blossom"], 5, 57, 15, 0],
        "1f33d": [["🌽"], "", "󾁊", ["corn"], 5, 58, 15, 0],
        "1f33e": [["🌾"], "", "󾁉", ["ear_of_rice"], 5, 59, 15, 0],
        "1f33f": [["🌿"], "", "󾁎", ["herb"], 5, 60, 15, 0],
        "1f340": [["🍀"], "", "󾀼", ["four_leaf_clover"], 6, 0, 15, 0],
        "1f341": [["🍁"], "", "󾀿", ["maple_leaf"], 6, 1, 15, 0],
        "1f342": [["🍂"], "", "󾁂", ["fallen_leaf"], 6, 2, 15, 0],
        "1f343": [["🍃"], "", "󾁃", ["leaves"], 6, 3, 15, 0],
        "1f344": [["🍄"], "", "󾁋", ["mushroom"], 6, 4, 15, 0],
        "1f345": [["🍅"], "", "󾁕", ["tomato"], 6, 5, 15, 0],
        "1f346": [["🍆"], "", "󾁖", ["eggplant"], 6, 6, 15, 0],
        "1f347": [["🍇"], "", "󾁙", ["grapes"], 6, 7, 15, 0],
        "1f348": [["🍈"], "", "󾁗", ["melon"], 6, 8, 15, 0],
        "1f349": [["🍉"], "", "󾁔", ["watermelon"], 6, 9, 15, 0],
        "1f34a": [["🍊"], "", "󾁒", ["tangerine"], 6, 10, 15, 0],
        "1f34b": [["🍋"], "", "", ["lemon"], 6, 11, 15, 0],
        "1f34c": [["🍌"], "", "󾁐", ["banana"], 6, 12, 15, 0],
        "1f34d": [["🍍"], "", "󾁘", ["pineapple"], 6, 13, 15, 0],
        "1f34e": [["🍎"], "", "󾁑", ["apple"], 6, 14, 15, 0],
        "1f34f": [["🍏"], "", "󾁛", ["green_apple"], 6, 15, 15, 0],
        "1f350": [["🍐"], "", "", ["pear"], 6, 16, 15, 0],
        "1f351": [["🍑"], "", "󾁚", ["peach"], 6, 17, 15, 0],
        "1f352": [["🍒"], "", "󾁏", ["cherries"], 6, 18, 15, 0],
        "1f353": [["🍓"], "", "󾁓", ["strawberry"], 6, 19, 15, 0],
        "1f354": [["🍔"], "", "󾥠", ["hamburger"], 6, 20, 15, 0],
        "1f355": [["🍕"], "", "󾥵", ["pizza"], 6, 21, 15, 0],
        "1f356": [["🍖"], "", "󾥲", ["meat_on_bone"], 6, 22, 15, 0],
        "1f357": [["🍗"], "", "󾥶", ["poultry_leg"], 6, 23, 15, 0],
        "1f358": [["🍘"], "", "󾥩", ["rice_cracker"], 6, 24, 15, 0],
        "1f359": [["🍙"], "", "󾥡", ["rice_ball"], 6, 25, 15, 0],
        "1f35a": [["🍚"], "", "󾥪", ["rice"], 6, 26, 15, 0],
        "1f35b": [["🍛"], "", "󾥬", ["curry"], 6, 27, 15, 0],
        "1f35c": [["🍜"], "", "󾥣", ["ramen"], 6, 28, 15, 0],
        "1f35d": [["🍝"], "", "󾥫", ["spaghetti"], 6, 29, 15, 0],
        "1f35e": [["🍞"], "", "󾥤", ["bread"], 6, 30, 15, 0],
        "1f35f": [["🍟"], "", "󾥧", ["fries"], 6, 31, 15, 0],
        "1f360": [["🍠"], "", "󾥴", ["sweet_potato"], 6, 32, 15, 0],
        "1f361": [["🍡"], "", "󾥨", ["dango"], 6, 33, 15, 0],
        "1f362": [["🍢"], "", "󾥭", ["oden"], 6, 34, 15, 0],
        "1f363": [["🍣"], "", "󾥮", ["sushi"], 6, 35, 15, 0],
        "1f364": [["🍤"], "", "󾥿", ["fried_shrimp"], 6, 36, 15, 0],
        "1f365": [["🍥"], "", "󾥳", ["fish_cake"], 6, 37, 15, 0],
        "1f366": [["🍦"], "", "󾥦", ["icecream"], 6, 38, 15, 0],
        "1f367": [["🍧"], "", "󾥱", ["shaved_ice"], 6, 39, 15, 0],
        "1f368": [["🍨"], "", "󾥷", ["ice_cream"], 6, 40, 15, 0],
        "1f369": [["🍩"], "", "󾥸", ["doughnut"], 6, 41, 15, 0],
        "1f36a": [["🍪"], "", "󾥹", ["cookie"], 6, 42, 15, 0],
        "1f36b": [["🍫"], "", "󾥺", ["chocolate_bar"], 6, 43, 15, 0],
        "1f36c": [["🍬"], "", "󾥻", ["candy"], 6, 44, 15, 0],
        "1f36d": [["🍭"], "", "󾥼", ["lollipop"], 6, 45, 15, 0],
        "1f36e": [["🍮"], "", "󾥽", ["custard"], 6, 46, 15, 0],
        "1f36f": [["🍯"], "", "󾥾", ["honey_pot"], 6, 47, 15, 0],
        "1f370": [["🍰"], "", "󾥢", ["cake"], 6, 48, 15, 0],
        "1f371": [["🍱"], "", "󾥯", ["bento"], 6, 49, 15, 0],
        "1f372": [["🍲"], "", "󾥰", ["stew"], 6, 50, 15, 0],
        "1f373": [["🍳"], "", "󾥥", ["fried_egg", "cooking"], 6, 51, 15, 0],
        "1f374": [["🍴"], "", "󾦀", ["fork_and_knife"], 6, 52, 15, 0],
        "1f375": [["🍵"], "", "󾦄", ["tea"], 6, 53, 15, 0],
        "1f376": [["🍶"], "", "󾦅", ["sake"], 6, 54, 15, 0],
        "1f377": [["🍷"], "", "󾦆", ["wine_glass"], 6, 55, 15, 0],
        "1f378": [["🍸"], "", "󾦂", ["cocktail"], 6, 56, 15, 0],
        "1f379": [["🍹"], "", "󾦈", ["tropical_drink"], 6, 57, 15, 0],
        "1f37a": [["🍺"], "", "󾦃", ["beer"], 6, 58, 15, 0],
        "1f37b": [["🍻"], "", "󾦇", ["beers"], 6, 59, 15, 0],
        "1f37c": [["🍼"], "", "", ["baby_bottle"], 6, 60, 15, 0],
        "1f37d-fe0f": [["🍽️", "🍽"], "", "", ["knife_fork_plate"], 7, 0, 15, 0],
        "1f37e": [["🍾"], "", "", ["champagne"], 7, 1, 15, 0],
        "1f37f": [["🍿"], "", "", ["popcorn"], 7, 2, 15, 0],
        "1f380": [["🎀"], "", "󾔏", ["ribbon"], 7, 3, 15, 0],
        "1f381": [["🎁"], "", "󾔐", ["gift"], 7, 4, 15, 0],
        "1f382": [["🎂"], "", "󾔑", ["birthday"], 7, 5, 15, 0],
        "1f383": [["🎃"], "", "󾔟", ["jack_o_lantern"], 7, 6, 15, 0],
        "1f384": [["🎄"], "", "󾔒", ["christmas_tree"], 7, 7, 15, 0],
        "1f385": [["🎅"], "", "󾔓", ["santa"], 7, 8, 15, 0],
        "1f386": [["🎆"], "", "󾔕", ["fireworks"], 7, 14, 15, 0],
        "1f387": [["🎇"], "", "󾔝", ["sparkler"], 7, 15, 15, 0],
        "1f388": [["🎈"], "", "󾔖", ["balloon"], 7, 16, 15, 0],
        "1f389": [["🎉"], "", "󾔗", ["tada"], 7, 17, 15, 0],
        "1f38a": [["🎊"], "", "󾔠", ["confetti_ball"], 7, 18, 15, 0],
        "1f38b": [["🎋"], "", "󾔡", ["tanabata_tree"], 7, 19, 15, 0],
        "1f38c": [["🎌"], "", "󾔔", ["crossed_flags"], 7, 20, 15, 0],
        "1f38d": [["🎍"], "", "󾔘", ["bamboo"], 7, 21, 15, 0],
        "1f38e": [["🎎"], "", "󾔙", ["dolls"], 7, 22, 15, 0],
        "1f38f": [["🎏"], "", "󾔜", ["flags"], 7, 23, 15, 0],
        "1f390": [["🎐"], "", "󾔞", ["wind_chime"], 7, 24, 15, 0],
        "1f391": [["🎑"], "", "󾀗", ["rice_scene"], 7, 25, 15, 0],
        "1f392": [["🎒"], "", "󾔛", ["school_satchel"], 7, 26, 15, 0],
        "1f393": [["🎓"], "", "󾔚", ["mortar_board"], 7, 27, 15, 0],
        "1f396-fe0f": [["🎖️", "🎖"], "", "", ["medal"], 7, 28, 15, 0],
        "1f397-fe0f": [["🎗️", "🎗"], "", "", ["reminder_ribbon"], 7, 29, 15, 0],
        "1f399-fe0f": [["🎙️", "🎙"], "", "", ["studio_microphone"], 7, 30, 15, 0],
        "1f39a-fe0f": [["🎚️", "🎚"], "", "", ["level_slider"], 7, 31, 15, 0],
        "1f39b-fe0f": [["🎛️", "🎛"], "", "", ["control_knobs"], 7, 32, 15, 0],
        "1f39e-fe0f": [["🎞️", "🎞"], "", "", ["film_frames"], 7, 33, 15, 0],
        "1f39f-fe0f": [["🎟️", "🎟"], "", "", ["admission_tickets"], 7, 34, 15, 0],
        "1f3a0": [["🎠"], "", "󾟼", ["carousel_horse"], 7, 35, 15, 0],
        "1f3a1": [["🎡"], "", "󾟽", ["ferris_wheel"], 7, 36, 15, 0],
        "1f3a2": [["🎢"], "", "󾟾", ["roller_coaster"], 7, 37, 15, 0],
        "1f3a3": [["🎣"], "", "󾟿", ["fishing_pole_and_fish"], 7, 38, 15, 0],
        "1f3a4": [["🎤"], "", "󾠀", ["microphone"], 7, 39, 15, 0],
        "1f3a5": [["🎥"], "", "󾠁", ["movie_camera"], 7, 40, 15, 0],
        "1f3a6": [["🎦"], "", "󾠂", ["cinema"], 7, 41, 15, 0],
        "1f3a7": [["🎧"], "", "󾠃", ["headphones"], 7, 42, 15, 0],
        "1f3a8": [["🎨"], "", "󾠄", ["art"], 7, 43, 15, 0],
        "1f3a9": [["🎩"], "", "󾠅", ["tophat"], 7, 44, 15, 0],
        "1f3aa": [["🎪"], "", "󾠆", ["circus_tent"], 7, 45, 15, 0],
        "1f3ab": [["🎫"], "", "󾠇", ["ticket"], 7, 46, 15, 0],
        "1f3ac": [["🎬"], "", "󾠈", ["clapper"], 7, 47, 15, 0],
        "1f3ad": [["🎭"], "", "󾠉", ["performing_arts"], 7, 48, 15, 0],
        "1f3ae": [["🎮"], "", "󾠊", ["video_game"], 7, 49, 15, 0],
        "1f3af": [["🎯"], "", "󾠌", ["dart"], 7, 50, 15, 0],
        "1f3b0": [["🎰"], "", "󾠍", ["slot_machine"], 7, 51, 15, 0],
        "1f3b1": [["🎱"], "", "󾠎", ["8ball"], 7, 52, 15, 0],
        "1f3b2": [["🎲"], "", "󾠏", ["game_die"], 7, 53, 15, 0],
        "1f3b3": [["🎳"], "", "󾠐", ["bowling"], 7, 54, 15, 0],
        "1f3b4": [["🎴"], "", "󾠑", ["flower_playing_cards"], 7, 55, 15, 0],
        "1f3b5": [["🎵"], "", "󾠓", ["musical_note"], 7, 56, 15, 0],
        "1f3b6": [["🎶"], "", "󾠔", ["notes"], 7, 57, 15, 0],
        "1f3b7": [["🎷"], "", "󾠕", ["saxophone"], 7, 58, 15, 0],
        "1f3b8": [["🎸"], "", "󾠖", ["guitar"], 7, 59, 15, 0],
        "1f3b9": [["🎹"], "", "󾠗", ["musical_keyboard"], 7, 60, 15, 0],
        "1f3ba": [["🎺"], "", "󾠘", ["trumpet"], 8, 0, 15, 0],
        "1f3bb": [["🎻"], "", "󾠙", ["violin"], 8, 1, 15, 0],
        "1f3bc": [["🎼"], "", "󾠚", ["musical_score"], 8, 2, 15, 0],
        "1f3bd": [["🎽"], "", "󾟐", ["running_shirt_with_sash"], 8, 3, 15, 0],
        "1f3be": [["🎾"], "", "󾟓", ["tennis"], 8, 4, 15, 0],
        "1f3bf": [["🎿"], "", "󾟕", ["ski"], 8, 5, 15, 0],
        "1f3c0": [["🏀"], "", "󾟖", ["basketball"], 8, 6, 15, 0],
        "1f3c1": [["🏁"], "", "󾟗", ["checkered_flag"], 8, 7, 15, 0],
        "1f3c2": [["🏂"], "", "󾟘", ["snowboarder"], 8, 8, 15, 0],
        "1f3c3-200d-2640-fe0f": [["🏃‍♀️", "🏃‍♀"], "", "", ["woman-running"], 8, 14, 15, 0],
        "1f3c3-200d-2642-fe0f": [["🏃‍♂️", "🏃‍♂", "🏃"], "", "", ["man-running", "runner", "running"], 8, 20, 15, 0],
        "1f3c4-200d-2640-fe0f": [["🏄‍♀️", "🏄‍♀"], "", "", ["woman-surfing"], 8, 32, 15, 0],
        "1f3c4-200d-2642-fe0f": [["🏄‍♂️", "🏄‍♂", "🏄"], "", "", ["man-surfing", "surfer"], 8, 38, 15, 0],
        "1f3c5": [["🏅"], "", "", ["sports_medal"], 8, 50, 15, 0],
        "1f3c6": [["🏆"], "", "󾟛", ["trophy"], 8, 51, 15, 0],
        "1f3c7": [["🏇"], "", "", ["horse_racing"], 8, 52, 15, 0],
        "1f3c8": [["🏈"], "", "󾟝", ["football"], 8, 58, 15, 0],
        "1f3c9": [["🏉"], "", "", ["rugby_football"], 8, 59, 15, 0],
        "1f3ca-200d-2640-fe0f": [["🏊‍♀️", "🏊‍♀"], "", "", ["woman-swimming"], 8, 60, 15, 0],
        "1f3ca-200d-2642-fe0f": [["🏊‍♂️", "🏊‍♂", "🏊"], "", "", ["man-swimming", "swimmer"], 9, 5, 15, 0],
        "1f3cb-fe0f-200d-2640-fe0f": [["🏋️‍♀️"], "", "", ["woman-lifting-weights"], 9, 17, 7, 0],
        "1f3cb-fe0f-200d-2642-fe0f": [["🏋️‍♂️", "🏋️", "🏋"], "", "", ["man-lifting-weights", "weight_lifter"], 9, 23, 7, 0],
        "1f3cc-fe0f-200d-2640-fe0f": [["🏌️‍♀️"], "", "", ["woman-golfing"], 9, 35, 7, 0],
        "1f3cc-fe0f-200d-2642-fe0f": [["🏌️‍♂️", "🏌️", "🏌"], "", "", ["man-golfing", "golfer"], 9, 41, 7, 0],
        "1f3cd-fe0f": [["🏍️", "🏍"], "", "", ["racing_motorcycle"], 9, 53, 15, 0],
        "1f3ce-fe0f": [["🏎️", "🏎"], "", "", ["racing_car"], 9, 54, 15, 0],
        "1f3cf": [["🏏"], "", "", ["cricket_bat_and_ball"], 9, 55, 15, 0],
        "1f3d0": [["🏐"], "", "", ["volleyball"], 9, 56, 15, 0],
        "1f3d1": [["🏑"], "", "", ["field_hockey_stick_and_ball"], 9, 57, 15, 0],
        "1f3d2": [["🏒"], "", "", ["ice_hockey_stick_and_puck"], 9, 58, 15, 0],
        "1f3d3": [["🏓"], "", "", ["table_tennis_paddle_and_ball"], 9, 59, 15, 0],
        "1f3d4-fe0f": [["🏔️", "🏔"], "", "", ["snow_capped_mountain"], 9, 60, 15, 0],
        "1f3d5-fe0f": [["🏕️", "🏕"], "", "", ["camping"], 10, 0, 15, 0],
        "1f3d6-fe0f": [["🏖️", "🏖"], "", "", ["beach_with_umbrella"], 10, 1, 15, 0],
        "1f3d7-fe0f": [["🏗️", "🏗"], "", "", ["building_construction"], 10, 2, 15, 0],
        "1f3d8-fe0f": [["🏘️", "🏘"], "", "", ["house_buildings"], 10, 3, 15, 0],
        "1f3d9-fe0f": [["🏙️", "🏙"], "", "", ["cityscape"], 10, 4, 15, 0],
        "1f3da-fe0f": [["🏚️", "🏚"], "", "", ["derelict_house_building"], 10, 5, 15, 0],
        "1f3db-fe0f": [["🏛️", "🏛"], "", "", ["classical_building"], 10, 6, 15, 0],
        "1f3dc-fe0f": [["🏜️", "🏜"], "", "", ["desert"], 10, 7, 15, 0],
        "1f3dd-fe0f": [["🏝️", "🏝"], "", "", ["desert_island"], 10, 8, 15, 0],
        "1f3de-fe0f": [["🏞️", "🏞"], "", "", ["national_park"], 10, 9, 15, 0],
        "1f3df-fe0f": [["🏟️", "🏟"], "", "", ["stadium"], 10, 10, 15, 0],
        "1f3e0": [["🏠"], "", "󾒰", ["house"], 10, 11, 15, 0],
        "1f3e1": [["🏡"], "", "󾒱", ["house_with_garden"], 10, 12, 15, 0],
        "1f3e2": [["🏢"], "", "󾒲", ["office"], 10, 13, 15, 0],
        "1f3e3": [["🏣"], "", "󾒳", ["post_office"], 10, 14, 15, 0],
        "1f3e4": [["🏤"], "", "", ["european_post_office"], 10, 15, 15, 0],
        "1f3e5": [["🏥"], "", "󾒴", ["hospital"], 10, 16, 15, 0],
        "1f3e6": [["🏦"], "", "󾒵", ["bank"], 10, 17, 15, 0],
        "1f3e7": [["🏧"], "", "󾒶", ["atm"], 10, 18, 15, 0],
        "1f3e8": [["🏨"], "", "󾒷", ["hotel"], 10, 19, 15, 0],
        "1f3e9": [["🏩"], "", "󾒸", ["love_hotel"], 10, 20, 15, 0],
        "1f3ea": [["🏪"], "", "󾒹", ["convenience_store"], 10, 21, 15, 0],
        "1f3eb": [["🏫"], "", "󾒺", ["school"], 10, 22, 15, 0],
        "1f3ec": [["🏬"], "", "󾒽", ["department_store"], 10, 23, 15, 0],
        "1f3ed": [["🏭"], "", "󾓀", ["factory"], 10, 24, 15, 0],
        "1f3ee": [["🏮"], "", "󾓂", ["izakaya_lantern", "lantern"], 10, 25, 15, 0],
        "1f3ef": [["🏯"], "", "󾒾", ["japanese_castle"], 10, 26, 15, 0],
        "1f3f0": [["🏰"], "", "󾒿", ["european_castle"], 10, 27, 15, 0],
        "1f3f3-fe0f-200d-1f308": [["🏳️‍🌈", "🏳‍🌈"], "", "", ["rainbow-flag"], 10, 28, 15, 0],
        "1f3f3-fe0f-200d-26a7-fe0f": [["🏳️‍⚧️"], "", "", ["transgender_flag"], 10, 29, 7, 0],
        "1f3f3-fe0f": [["🏳️", "🏳"], "", "", ["waving_white_flag"], 10, 30, 15, 0],
        "1f3f4-200d-2620-fe0f": [["🏴‍☠️", "🏴‍☠"], "", "", ["pirate_flag"], 10, 31, 15, 0],
        "1f3f4-e0067-e0062-e0065-e006e-e0067-e007f": [["🏴󠁧󠁢󠁥󠁮󠁧󠁿"], "", "", ["flag-england"], 10, 32, 15, 0],
        "1f3f4-e0067-e0062-e0073-e0063-e0074-e007f": [["🏴󠁧󠁢󠁳󠁣󠁴󠁿"], "", "", ["flag-scotland"], 10, 33, 15, 0],
        "1f3f4-e0067-e0062-e0077-e006c-e0073-e007f": [["🏴󠁧󠁢󠁷󠁬󠁳󠁿"], "", "", ["flag-wales"], 10, 34, 15, 0],
        "1f3f4": [["🏴"], "", "", ["waving_black_flag"], 10, 35, 15, 0],
        "1f3f5-fe0f": [["🏵️", "🏵"], "", "", ["rosette"], 10, 36, 15, 0],
        "1f3f7-fe0f": [["🏷️", "🏷"], "", "", ["label"], 10, 37, 15, 0],
        "1f3f8": [["🏸"], "", "", ["badminton_racquet_and_shuttlecock"], 10, 38, 15, 0],
        "1f3f9": [["🏹"], "", "", ["bow_and_arrow"], 10, 39, 15, 0],
        "1f3fa": [["🏺"], "", "", ["amphora"], 10, 40, 15, 0],
        "1f3fb": [["🏻"], "", "", ["skin-tone-2"], 10, 41, 15, 0],
        "1f3fc": [["🏼"], "", "", ["skin-tone-3"], 10, 42, 15, 0],
        "1f3fd": [["🏽"], "", "", ["skin-tone-4"], 10, 43, 15, 0],
        "1f3fe": [["🏾"], "", "", ["skin-tone-5"], 10, 44, 15, 0],
        "1f3ff": [["🏿"], "", "", ["skin-tone-6"], 10, 45, 15, 0],
        "1f400": [["🐀"], "", "", ["rat"], 10, 46, 15, 0],
        "1f401": [["🐁"], "", "", ["mouse2"], 10, 47, 15, 0],
        "1f402": [["🐂"], "", "", ["ox"], 10, 48, 15, 0],
        "1f403": [["🐃"], "", "", ["water_buffalo"], 10, 49, 15, 0],
        "1f404": [["🐄"], "", "", ["cow2"], 10, 50, 15, 0],
        "1f405": [["🐅"], "", "", ["tiger2"], 10, 51, 15, 0],
        "1f406": [["🐆"], "", "", ["leopard"], 10, 52, 15, 0],
        "1f407": [["🐇"], "", "", ["rabbit2"], 10, 53, 15, 0],
        "1f408-200d-2b1b": [["🐈‍⬛"], "", "", ["black_cat"], 10, 54, 15, 0],
        "1f408": [["🐈"], "", "", ["cat2"], 10, 55, 15, 0],
        "1f409": [["🐉"], "", "", ["dragon"], 10, 56, 15, 0],
        "1f40a": [["🐊"], "", "", ["crocodile"], 10, 57, 15, 0],
        "1f40b": [["🐋"], "", "", ["whale2"], 10, 58, 15, 0],
        "1f40c": [["🐌"], "", "󾆹", ["snail"], 10, 59, 15, 0],
        "1f40d": [["🐍"], "", "󾇓", ["snake"], 10, 60, 15, 0],
        "1f40e": [["🐎"], "", "󾟜", ["racehorse"], 11, 0, 15, 0],
        "1f40f": [["🐏"], "", "", ["ram"], 11, 1, 15, 0],
        "1f410": [["🐐"], "", "", ["goat"], 11, 2, 15, 0],
        "1f411": [["🐑"], "", "󾇏", ["sheep"], 11, 3, 15, 0],
        "1f412": [["🐒"], "", "󾇎", ["monkey"], 11, 4, 15, 0],
        "1f413": [["🐓"], "", "", ["rooster"], 11, 5, 15, 0],
        "1f414": [["🐔"], "", "󾇔", ["chicken"], 11, 6, 15, 0],
        "1f415-200d-1f9ba": [["🐕‍🦺"], "", "", ["service_dog"], 11, 7, 15, 0],
        "1f415": [["🐕"], "", "", ["dog2"], 11, 8, 15, 0],
        "1f416": [["🐖"], "", "", ["pig2"], 11, 9, 15, 0],
        "1f417": [["🐗"], "", "󾇕", ["boar"], 11, 10, 15, 0],
        "1f418": [["🐘"], "", "󾇌", ["elephant"], 11, 11, 15, 0],
        "1f419": [["🐙"], "", "󾇅", ["octopus"], 11, 12, 15, 0],
        "1f41a": [["🐚"], "", "󾇆", ["shell"], 11, 13, 15, 0],
        "1f41b": [["🐛"], "", "󾇋", ["bug"], 11, 14, 15, 0],
        "1f41c": [["🐜"], "", "󾇚", ["ant"], 11, 15, 15, 0],
        "1f41d": [["🐝"], "", "󾇡", ["bee", "honeybee"], 11, 16, 15, 0],
        "1f41e": [["🐞"], "", "󾇢", ["ladybug", "lady_beetle"], 11, 17, 15, 0],
        "1f41f": [["🐟"], "", "󾆽", ["fish"], 11, 18, 15, 0],
        "1f420": [["🐠"], "", "󾇉", ["tropical_fish"], 11, 19, 15, 0],
        "1f421": [["🐡"], "", "󾇙", ["blowfish"], 11, 20, 15, 0],
        "1f422": [["🐢"], "", "󾇜", ["turtle"], 11, 21, 15, 0],
        "1f423": [["🐣"], "", "󾇝", ["hatching_chick"], 11, 22, 15, 0],
        "1f424": [["🐤"], "", "󾆺", ["baby_chick"], 11, 23, 15, 0],
        "1f425": [["🐥"], "", "󾆻", ["hatched_chick"], 11, 24, 15, 0],
        "1f426-200d-2b1b": [["🐦‍⬛"], "", "", ["black_bird"], 11, 25, 3, 0],
        "1f426": [["🐦"], "", "󾇈", ["bird"], 11, 26, 15, 0],
        "1f427": [["🐧"], "", "󾆼", ["penguin"], 11, 27, 15, 0],
        "1f428": [["🐨"], "", "󾇍", ["koala"], 11, 28, 15, 0],
        "1f429": [["🐩"], "", "󾇘", ["poodle"], 11, 29, 15, 0],
        "1f42a": [["🐪"], "", "", ["dromedary_camel"], 11, 30, 15, 0],
        "1f42b": [["🐫"], "", "󾇖", ["camel"], 11, 31, 15, 0],
        "1f42c": [["🐬"], "", "󾇇", ["dolphin", "flipper"], 11, 32, 15, 0],
        "1f42d": [["🐭"], "", "󾇂", ["mouse"], 11, 33, 15, 0],
        "1f42e": [["🐮"], "", "󾇑", ["cow"], 11, 34, 15, 0],
        "1f42f": [["🐯"], "", "󾇀", ["tiger"], 11, 35, 15, 0],
        "1f430": [["🐰"], "", "󾇒", ["rabbit"], 11, 36, 15, 0],
        "1f431": [["🐱"], "", "󾆸", ["cat"], 11, 37, 15, 0],
        "1f432": [["🐲"], "", "󾇞", ["dragon_face"], 11, 38, 15, 0],
        "1f433": [["🐳"], "", "󾇃", ["whale"], 11, 39, 15, 0],
        "1f434": [["🐴"], "", "󾆾", ["horse"], 11, 40, 15, 0],
        "1f435": [["🐵"], "", "󾇄", ["monkey_face"], 11, 41, 15, 0],
        "1f436": [["🐶"], "", "󾆷", ["dog"], 11, 42, 15, 0],
        "1f437": [["🐷"], "", "󾆿", ["pig"], 11, 43, 15, 0],
        "1f438": [["🐸"], "", "󾇗", ["frog"], 11, 44, 15, 0],
        "1f439": [["🐹"], "", "󾇊", ["hamster"], 11, 45, 15, 0],
        "1f43a": [["🐺"], "", "󾇐", ["wolf"], 11, 46, 15, 0],
        "1f43b-200d-2744-fe0f": [["🐻‍❄️", "🐻‍❄"], "", "", ["polar_bear"], 11, 47, 15, 0],
        "1f43b": [["🐻"], "", "󾇁", ["bear"], 11, 48, 15, 0],
        "1f43c": [["🐼"], "", "󾇟", ["panda_face"], 11, 49, 15, 0],
        "1f43d": [["🐽"], "", "󾇠", ["pig_nose"], 11, 50, 15, 0],
        "1f43e": [["🐾"], "", "󾇛", ["feet", "paw_prints"], 11, 51, 15, 0],
        "1f43f-fe0f": [["🐿️", "🐿"], "", "", ["chipmunk"], 11, 52, 15, 0],
        "1f440": [["👀"], "", "󾆐", ["eyes"], 11, 53, 15, 0],
        "1f441-fe0f-200d-1f5e8-fe0f": [["👁️‍🗨️"], "", "", ["eye-in-speech-bubble"], 11, 54, 7, 0],
        "1f441-fe0f": [["👁️", "👁"], "", "", ["eye"], 11, 55, 15, 0],
        "1f442": [["👂"], "", "󾆑", ["ear"], 11, 56, 15, 0],
        "1f443": [["👃"], "", "󾆒", ["nose"], 12, 1, 15, 0],
        "1f444": [["👄"], "", "󾆓", ["lips"], 12, 7, 15, 0],
        "1f445": [["👅"], "", "󾆔", ["tongue"], 12, 8, 15, 0],
        "1f446": [["👆"], "", "󾮙", ["point_up_2"], 12, 9, 15, 0],
        "1f447": [["👇"], "", "󾮚", ["point_down"], 12, 15, 15, 0],
        "1f448": [["👈"], "", "󾮛", ["point_left"], 12, 21, 15, 0],
        "1f449": [["👉"], "", "󾮜", ["point_right"], 12, 27, 15, 0],
        "1f44a": [["👊"], "", "󾮖", ["facepunch", "punch"], 12, 33, 15, 0],
        "1f44b": [["👋"], "", "󾮝", ["wave"], 12, 39, 15, 0],
        "1f44c": [["👌"], "", "󾮟", ["ok_hand"], 12, 45, 15, 0],
        "1f44d": [["👍"], "", "󾮗", ["+1", "thumbsup"], 12, 51, 15, 0],
        "1f44e": [["👎"], "", "󾮠", ["-1", "thumbsdown"], 12, 57, 15, 0],
        "1f44f": [["👏"], "", "󾮞", ["clap"], 13, 2, 15, 0],
        "1f450": [["👐"], "", "󾮡", ["open_hands"], 13, 8, 15, 0],
        "1f451": [["👑"], "", "󾓑", ["crown"], 13, 14, 15, 0],
        "1f452": [["👒"], "", "󾓔", ["womans_hat"], 13, 15, 15, 0],
        "1f453": [["👓"], "", "󾓎", ["eyeglasses"], 13, 16, 15, 0],
        "1f454": [["👔"], "", "󾓓", ["necktie"], 13, 17, 15, 0],
        "1f455": [["👕"], "", "󾓏", ["shirt", "tshirt"], 13, 18, 15, 0],
        "1f456": [["👖"], "", "󾓐", ["jeans"], 13, 19, 15, 0],
        "1f457": [["👗"], "", "󾓕", ["dress"], 13, 20, 15, 0],
        "1f458": [["👘"], "", "󾓙", ["kimono"], 13, 21, 15, 0],
        "1f459": [["👙"], "", "󾓚", ["bikini"], 13, 22, 15, 0],
        "1f45a": [["👚"], "", "󾓛", ["womans_clothes"], 13, 23, 15, 0],
        "1f45b": [["👛"], "", "󾓜", ["purse"], 13, 24, 15, 0],
        "1f45c": [["👜"], "", "󾓰", ["handbag"], 13, 25, 15, 0],
        "1f45d": [["👝"], "", "󾓱", ["pouch"], 13, 26, 15, 0],
        "1f45e": [["👞"], "", "󾓌", ["mans_shoe", "shoe"], 13, 27, 15, 0],
        "1f45f": [["👟"], "", "󾓍", ["athletic_shoe"], 13, 28, 15, 0],
        "1f460": [["👠"], "", "󾓖", ["high_heel"], 13, 29, 15, 0],
        "1f461": [["👡"], "", "󾓗", ["sandal"], 13, 30, 15, 0],
        "1f462": [["👢"], "", "󾓘", ["boot"], 13, 31, 15, 0],
        "1f463": [["👣"], "", "󾕓", ["footprints"], 13, 32, 15, 0],
        "1f464": [["👤"], "", "󾆚", ["bust_in_silhouette"], 13, 33, 15, 0],
        "1f465": [["👥"], "", "", ["busts_in_silhouette"], 13, 34, 15, 0],
        "1f466": [["👦"], "", "󾆛", ["boy"], 13, 35, 15, 0],
        "1f467": [["👧"], "", "󾆜", ["girl"], 13, 41, 15, 0],
        "1f468-200d-1f33e": [["👨‍🌾"], "", "", ["male-farmer"], 13, 47, 15, 0],
        "1f468-200d-1f373": [["👨‍🍳"], "", "", ["male-cook"], 13, 53, 15, 0],
        "1f468-200d-1f37c": [["👨‍🍼"], "", "", ["man_feeding_baby"], 13, 59, 15, 0],
        "1f468-200d-1f393": [["👨‍🎓"], "", "", ["male-student"], 14, 4, 15, 0],
        "1f468-200d-1f3a4": [["👨‍🎤"], "", "", ["male-singer"], 14, 10, 15, 0],
        "1f468-200d-1f3a8": [["👨‍🎨"], "", "", ["male-artist"], 14, 16, 15, 0],
        "1f468-200d-1f3eb": [["👨‍🏫"], "", "", ["male-teacher"], 14, 22, 15, 0],
        "1f468-200d-1f3ed": [["👨‍🏭"], "", "", ["male-factory-worker"], 14, 28, 15, 0],
        "1f468-200d-1f466-200d-1f466": [["👨‍👦‍👦"], "", "", ["man-boy-boy"], 14, 34, 15, 0],
        "1f468-200d-1f466": [["👨‍👦"], "", "", ["man-boy"], 14, 35, 15, 0],
        "1f468-200d-1f467-200d-1f466": [["👨‍👧‍👦"], "", "", ["man-girl-boy"], 14, 36, 15, 0],
        "1f468-200d-1f467-200d-1f467": [["👨‍👧‍👧"], "", "", ["man-girl-girl"], 14, 37, 15, 0],
        "1f468-200d-1f467": [["👨‍👧"], "", "", ["man-girl"], 14, 38, 15, 0],
        "1f468-200d-1f468-200d-1f466": [["👨‍👨‍👦"], "", "", ["man-man-boy"], 14, 39, 15, 0],
        "1f468-200d-1f468-200d-1f466-200d-1f466": [["👨‍👨‍👦‍👦"], "", "", ["man-man-boy-boy"], 14, 40, 15, 0],
        "1f468-200d-1f468-200d-1f467": [["👨‍👨‍👧"], "", "", ["man-man-girl"], 14, 41, 15, 0],
        "1f468-200d-1f468-200d-1f467-200d-1f466": [["👨‍👨‍👧‍👦"], "", "", ["man-man-girl-boy"], 14, 42, 15, 0],
        "1f468-200d-1f468-200d-1f467-200d-1f467": [["👨‍👨‍👧‍👧"], "", "", ["man-man-girl-girl"], 14, 43, 15, 0],
        "1f468-200d-1f469-200d-1f466": [["👨‍👩‍👦", "👪"], "", "", ["man-woman-boy", "family"], 14, 44, 15, 0],
        "1f468-200d-1f469-200d-1f466-200d-1f466": [["👨‍👩‍👦‍👦"], "", "", ["man-woman-boy-boy"], 14, 45, 15, 0],
        "1f468-200d-1f469-200d-1f467": [["👨‍👩‍👧"], "", "", ["man-woman-girl"], 14, 46, 15, 0],
        "1f468-200d-1f469-200d-1f467-200d-1f466": [["👨‍👩‍👧‍👦"], "", "", ["man-woman-girl-boy"], 14, 47, 15, 0],
        "1f468-200d-1f469-200d-1f467-200d-1f467": [["👨‍👩‍👧‍👧"], "", "", ["man-woman-girl-girl"], 14, 48, 15, 0],
        "1f468-200d-1f4bb": [["👨‍💻"], "", "", ["male-technologist"], 14, 49, 15, 0],
        "1f468-200d-1f4bc": [["👨‍💼"], "", "", ["male-office-worker"], 14, 55, 15, 0],
        "1f468-200d-1f527": [["👨‍🔧"], "", "", ["male-mechanic"], 15, 0, 15, 0],
        "1f468-200d-1f52c": [["👨‍🔬"], "", "", ["male-scientist"], 15, 6, 15, 0],
        "1f468-200d-1f680": [["👨‍🚀"], "", "", ["male-astronaut"], 15, 12, 15, 0],
        "1f468-200d-1f692": [["👨‍🚒"], "", "", ["male-firefighter"], 15, 18, 15, 0],
        "1f468-200d-1f9af": [["👨‍🦯"], "", "", ["man_with_probing_cane"], 15, 24, 15, 0],
        "1f468-200d-1f9b0": [["👨‍🦰"], "", "", ["red_haired_man"], 15, 30, 15, 0],
        "1f468-200d-1f9b1": [["👨‍🦱"], "", "", ["curly_haired_man"], 15, 36, 15, 0],
        "1f468-200d-1f9b2": [["👨‍🦲"], "", "", ["bald_man"], 15, 42, 15, 0],
        "1f468-200d-1f9b3": [["👨‍🦳"], "", "", ["white_haired_man"], 15, 48, 15, 0],
        "1f468-200d-1f9bc": [["👨‍🦼"], "", "", ["man_in_motorized_wheelchair"], 15, 54, 15, 0],
        "1f468-200d-1f9bd": [["👨‍🦽"], "", "", ["man_in_manual_wheelchair"], 15, 60, 15, 0],
        "1f468-200d-2695-fe0f": [["👨‍⚕️", "👨‍⚕"], "", "", ["male-doctor"], 16, 5, 15, 0],
        "1f468-200d-2696-fe0f": [["👨‍⚖️", "👨‍⚖"], "", "", ["male-judge"], 16, 11, 15, 0],
        "1f468-200d-2708-fe0f": [["👨‍✈️", "👨‍✈"], "", "", ["male-pilot"], 16, 17, 15, 0],
        "1f468-200d-2764-fe0f-200d-1f468": [["👨‍❤️‍👨", "👨‍❤‍👨"], "", "", ["man-heart-man"], 16, 23, 15, 0],
        "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468": [["👨‍❤️‍💋‍👨", "👨‍❤‍💋‍👨"], "", "", ["man-kiss-man"], 16, 49, 15, 0],
        "1f468": [["👨"], "", "󾆝", ["man"], 17, 14, 15, 0],
        "1f469-200d-1f33e": [["👩‍🌾"], "", "", ["female-farmer"], 17, 20, 15, 0],
        "1f469-200d-1f373": [["👩‍🍳"], "", "", ["female-cook"], 17, 26, 15, 0],
        "1f469-200d-1f37c": [["👩‍🍼"], "", "", ["woman_feeding_baby"], 17, 32, 15, 0],
        "1f469-200d-1f393": [["👩‍🎓"], "", "", ["female-student"], 17, 38, 15, 0],
        "1f469-200d-1f3a4": [["👩‍🎤"], "", "", ["female-singer"], 17, 44, 15, 0],
        "1f469-200d-1f3a8": [["👩‍🎨"], "", "", ["female-artist"], 17, 50, 15, 0],
        "1f469-200d-1f3eb": [["👩‍🏫"], "", "", ["female-teacher"], 17, 56, 15, 0],
        "1f469-200d-1f3ed": [["👩‍🏭"], "", "", ["female-factory-worker"], 18, 1, 15, 0],
        "1f469-200d-1f466-200d-1f466": [["👩‍👦‍👦"], "", "", ["woman-boy-boy"], 18, 7, 15, 0],
        "1f469-200d-1f466": [["👩‍👦"], "", "", ["woman-boy"], 18, 8, 15, 0],
        "1f469-200d-1f467-200d-1f466": [["👩‍👧‍👦"], "", "", ["woman-girl-boy"], 18, 9, 15, 0],
        "1f469-200d-1f467-200d-1f467": [["👩‍👧‍👧"], "", "", ["woman-girl-girl"], 18, 10, 15, 0],
        "1f469-200d-1f467": [["👩‍👧"], "", "", ["woman-girl"], 18, 11, 15, 0],
        "1f469-200d-1f469-200d-1f466": [["👩‍👩‍👦"], "", "", ["woman-woman-boy"], 18, 12, 15, 0],
        "1f469-200d-1f469-200d-1f466-200d-1f466": [["👩‍👩‍👦‍👦"], "", "", ["woman-woman-boy-boy"], 18, 13, 15, 0],
        "1f469-200d-1f469-200d-1f467": [["👩‍👩‍👧"], "", "", ["woman-woman-girl"], 18, 14, 15, 0],
        "1f469-200d-1f469-200d-1f467-200d-1f466": [["👩‍👩‍👧‍👦"], "", "", ["woman-woman-girl-boy"], 18, 15, 15, 0],
        "1f469-200d-1f469-200d-1f467-200d-1f467": [["👩‍👩‍👧‍👧"], "", "", ["woman-woman-girl-girl"], 18, 16, 15, 0],
        "1f469-200d-1f4bb": [["👩‍💻"], "", "", ["female-technologist"], 18, 17, 15, 0],
        "1f469-200d-1f4bc": [["👩‍💼"], "", "", ["female-office-worker"], 18, 23, 15, 0],
        "1f469-200d-1f527": [["👩‍🔧"], "", "", ["female-mechanic"], 18, 29, 15, 0],
        "1f469-200d-1f52c": [["👩‍🔬"], "", "", ["female-scientist"], 18, 35, 15, 0],
        "1f469-200d-1f680": [["👩‍🚀"], "", "", ["female-astronaut"], 18, 41, 15, 0],
        "1f469-200d-1f692": [["👩‍🚒"], "", "", ["female-firefighter"], 18, 47, 15, 0],
        "1f469-200d-1f9af": [["👩‍🦯"], "", "", ["woman_with_probing_cane"], 18, 53, 15, 0],
        "1f469-200d-1f9b0": [["👩‍🦰"], "", "", ["red_haired_woman"], 18, 59, 15, 0],
        "1f469-200d-1f9b1": [["👩‍🦱"], "", "", ["curly_haired_woman"], 19, 4, 15, 0],
        "1f469-200d-1f9b2": [["👩‍🦲"], "", "", ["bald_woman"], 19, 10, 15, 0],
        "1f469-200d-1f9b3": [["👩‍🦳"], "", "", ["white_haired_woman"], 19, 16, 15, 0],
        "1f469-200d-1f9bc": [["👩‍🦼"], "", "", ["woman_in_motorized_wheelchair"], 19, 22, 15, 0],
        "1f469-200d-1f9bd": [["👩‍🦽"], "", "", ["woman_in_manual_wheelchair"], 19, 28, 15, 0],
        "1f469-200d-2695-fe0f": [["👩‍⚕️", "👩‍⚕"], "", "", ["female-doctor"], 19, 34, 15, 0],
        "1f469-200d-2696-fe0f": [["👩‍⚖️", "👩‍⚖"], "", "", ["female-judge"], 19, 40, 15, 0],
        "1f469-200d-2708-fe0f": [["👩‍✈️", "👩‍✈"], "", "", ["female-pilot"], 19, 46, 15, 0],
        "1f469-200d-2764-fe0f-200d-1f468": [["👩‍❤️‍👨", "👩‍❤‍👨"], "", "", ["woman-heart-man"], 19, 52, 15, 0],
        "1f469-200d-2764-fe0f-200d-1f469": [["👩‍❤️‍👩", "👩‍❤‍👩"], "", "", ["woman-heart-woman"], 20, 17, 15, 0],
        "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468": [["👩‍❤️‍💋‍👨", "👩‍❤‍💋‍👨"], "", "", ["woman-kiss-man"], 20, 43, 15, 0],
        "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469": [["👩‍❤️‍💋‍👩", "👩‍❤‍💋‍👩"], "", "", ["woman-kiss-woman"], 21, 8, 15, 0],
        "1f469": [["👩"], "", "󾆞", ["woman"], 21, 34, 15, 0],
        "1f46b": [["👫"], "", "󾆠", ["man_and_woman_holding_hands", "woman_and_man_holding_hands", "couple"], 21, 41, 15, 0],
        "1f46c": [["👬"], "", "", ["two_men_holding_hands", "men_holding_hands"], 22, 6, 15, 0],
        "1f46d": [["👭"], "", "", ["two_women_holding_hands", "women_holding_hands"], 22, 32, 15, 0],
        "1f46e-200d-2640-fe0f": [["👮‍♀️", "👮‍♀"], "", "", ["female-police-officer"], 22, 58, 15, 0],
        "1f46e-200d-2642-fe0f": [["👮‍♂️", "👮‍♂", "👮"], "", "", ["male-police-officer", "cop"], 23, 3, 15, 0],
        "1f46f-200d-2640-fe0f": [["👯‍♀️", "👯‍♀", "👯"], "", "", ["women-with-bunny-ears-partying", "woman-with-bunny-ears-partying", "dancers"], 23, 15, 15, 0],
        "1f46f-200d-2642-fe0f": [["👯‍♂️", "👯‍♂"], "", "", ["men-with-bunny-ears-partying", "man-with-bunny-ears-partying"], 23, 16, 15, 0],
        "1f470-200d-2640-fe0f": [["👰‍♀️", "👰‍♀"], "", "", ["woman_with_veil"], 23, 18, 15, 0],
        "1f470-200d-2642-fe0f": [["👰‍♂️", "👰‍♂"], "", "", ["man_with_veil"], 23, 24, 15, 0],
        "1f470": [["👰"], "", "󾆣", ["bride_with_veil"], 23, 30, 15, 0],
        "1f471-200d-2640-fe0f": [["👱‍♀️", "👱‍♀"], "", "", ["blond-haired-woman"], 23, 36, 15, 0],
        "1f471-200d-2642-fe0f": [["👱‍♂️", "👱‍♂", "👱"], "", "", ["blond-haired-man", "person_with_blond_hair"], 23, 42, 15, 0],
        "1f472": [["👲"], "", "󾆥", ["man_with_gua_pi_mao"], 23, 54, 15, 0],
        "1f473-200d-2640-fe0f": [["👳‍♀️", "👳‍♀"], "", "", ["woman-wearing-turban"], 23, 60, 15, 0],
        "1f473-200d-2642-fe0f": [["👳‍♂️", "👳‍♂", "👳"], "", "", ["man-wearing-turban", "man_with_turban"], 24, 5, 15, 0],
        "1f474": [["👴"], "", "󾆧", ["older_man"], 24, 17, 15, 0],
        "1f475": [["👵"], "", "󾆨", ["older_woman"], 24, 23, 15, 0],
        "1f476": [["👶"], "", "󾆩", ["baby"], 24, 29, 15, 0],
        "1f477-200d-2640-fe0f": [["👷‍♀️", "👷‍♀"], "", "", ["female-construction-worker"], 24, 35, 15, 0],
        "1f477-200d-2642-fe0f": [["👷‍♂️", "👷‍♂", "👷"], "", "", ["male-construction-worker", "construction_worker"], 24, 41, 15, 0],
        "1f478": [["👸"], "", "󾆫", ["princess"], 24, 53, 15, 0],
        "1f479": [["👹"], "", "󾆬", ["japanese_ogre"], 24, 59, 15, 0],
        "1f47a": [["👺"], "", "󾆭", ["japanese_goblin"], 24, 60, 15, 0],
        "1f47b": [["👻"], "", "󾆮", ["ghost"], 25, 0, 15, 0],
        "1f47c": [["👼"], "", "󾆯", ["angel"], 25, 1, 15, 0],
        "1f47d": [["👽"], "", "󾆰", ["alien"], 25, 7, 15, 0],
        "1f47e": [["👾"], "", "󾆱", ["space_invader"], 25, 8, 15, 0],
        "1f47f": [["👿"], "", "󾆲", ["imp"], 25, 9, 15, 0],
        "1f480": [["💀"], "", "󾆳", ["skull"], 25, 10, 15, 0],
        "1f481-200d-2640-fe0f": [["💁‍♀️", "💁‍♀", "💁"], "", "", ["woman-tipping-hand", "information_desk_person"], 25, 11, 15, 0],
        "1f481-200d-2642-fe0f": [["💁‍♂️", "💁‍♂"], "", "", ["man-tipping-hand"], 25, 17, 15, 0],
        "1f482-200d-2640-fe0f": [["💂‍♀️", "💂‍♀"], "", "", ["female-guard"], 25, 29, 15, 0],
        "1f482-200d-2642-fe0f": [["💂‍♂️", "💂‍♂", "💂"], "", "", ["male-guard", "guardsman"], 25, 35, 15, 0],
        "1f483": [["💃"], "", "󾆶", ["dancer"], 25, 47, 15, 0],
        "1f484": [["💄"], "", "󾆕", ["lipstick"], 25, 53, 15, 0],
        "1f485": [["💅"], "", "󾆖", ["nail_care"], 25, 54, 15, 0],
        "1f486-200d-2640-fe0f": [["💆‍♀️", "💆‍♀", "💆"], "", "", ["woman-getting-massage", "massage"], 25, 60, 15, 0],
        "1f486-200d-2642-fe0f": [["💆‍♂️", "💆‍♂"], "", "", ["man-getting-massage"], 26, 5, 15, 0],
        "1f487-200d-2640-fe0f": [["💇‍♀️", "💇‍♀", "💇"], "", "", ["woman-getting-haircut", "haircut"], 26, 17, 15, 0],
        "1f487-200d-2642-fe0f": [["💇‍♂️", "💇‍♂"], "", "", ["man-getting-haircut"], 26, 23, 15, 0],
        "1f488": [["💈"], "", "󾆙", ["barber"], 26, 35, 15, 0],
        "1f489": [["💉"], "", "󾔉", ["syringe"], 26, 36, 15, 0],
        "1f48a": [["💊"], "", "󾔊", ["pill"], 26, 37, 15, 0],
        "1f48b": [["💋"], "", "󾠣", ["kiss"], 26, 38, 15, 0],
        "1f48c": [["💌"], "", "󾠤", ["love_letter"], 26, 39, 15, 0],
        "1f48d": [["💍"], "", "󾠥", ["ring"], 26, 40, 15, 0],
        "1f48e": [["💎"], "", "󾠦", ["gem"], 26, 41, 15, 0],
        "1f48f": [["💏"], "", "󾠧", ["couplekiss"], 26, 42, 15, 0],
        "1f490": [["💐"], "", "󾠨", ["bouquet"], 27, 7, 15, 0],
        "1f491": [["💑"], "", "󾠩", ["couple_with_heart"], 27, 8, 15, 0],
        "1f492": [["💒"], "", "󾠪", ["wedding"], 27, 34, 15, 0],
        "1f493": [["💓"], "", "󾬍", ["heartbeat"], 27, 35, 15, 0],
        "1f494": [["💔"], "", "󾬎", ["broken_heart"], 27, 36, 15, 0, "</3"],
        "1f495": [["💕"], "", "󾬏", ["two_hearts"], 27, 37, 15, 0],
        "1f496": [["💖"], "", "󾬐", ["sparkling_heart"], 27, 38, 15, 0],
        "1f497": [["💗"], "", "󾬑", ["heartpulse"], 27, 39, 15, 0],
        "1f498": [["💘"], "", "󾬒", ["cupid"], 27, 40, 15, 0],
        "1f499": [["💙"], "", "󾬓", ["blue_heart"], 27, 41, 15, 0, "<3"],
        "1f49a": [["💚"], "", "󾬔", ["green_heart"], 27, 42, 15, 0, "<3"],
        "1f49b": [["💛"], "", "󾬕", ["yellow_heart"], 27, 43, 15, 0, "<3"],
        "1f49c": [["💜"], "", "󾬖", ["purple_heart"], 27, 44, 15, 0, "<3"],
        "1f49d": [["💝"], "", "󾬗", ["gift_heart"], 27, 45, 15, 0],
        "1f49e": [["💞"], "", "󾬘", ["revolving_hearts"], 27, 46, 15, 0],
        "1f49f": [["💟"], "", "󾬙", ["heart_decoration"], 27, 47, 15, 0],
        "1f4a0": [["💠"], "", "󾭕", ["diamond_shape_with_a_dot_inside"], 27, 48, 15, 0],
        "1f4a1": [["💡"], "", "󾭖", ["bulb"], 27, 49, 15, 0],
        "1f4a2": [["💢"], "", "󾭗", ["anger"], 27, 50, 15, 0],
        "1f4a3": [["💣"], "", "󾭘", ["bomb"], 27, 51, 15, 0],
        "1f4a4": [["💤"], "", "󾭙", ["zzz"], 27, 52, 15, 0],
        "1f4a5": [["💥"], "", "󾭚", ["boom", "collision"], 27, 53, 15, 0],
        "1f4a6": [["💦"], "", "󾭛", ["sweat_drops"], 27, 54, 15, 0],
        "1f4a7": [["💧"], "", "󾭜", ["droplet"], 27, 55, 15, 0],
        "1f4a8": [["💨"], "", "󾭝", ["dash"], 27, 56, 15, 0],
        "1f4a9": [["💩"], "", "󾓴", ["hankey", "poop", "shit"], 27, 57, 15, 0],
        "1f4aa": [["💪"], "", "󾭞", ["muscle"], 27, 58, 15, 0],
        "1f4ab": [["💫"], "", "󾭟", ["dizzy"], 28, 3, 15, 0],
        "1f4ac": [["💬"], "", "󾔲", ["speech_balloon"], 28, 4, 15, 0],
        "1f4ad": [["💭"], "", "", ["thought_balloon"], 28, 5, 15, 0],
        "1f4ae": [["💮"], "", "󾭺", ["white_flower"], 28, 6, 15, 0],
        "1f4af": [["💯"], "", "󾭻", ["100"], 28, 7, 15, 0],
        "1f4b0": [["💰"], "", "󾓝", ["moneybag"], 28, 8, 15, 0],
        "1f4b1": [["💱"], "", "󾓞", ["currency_exchange"], 28, 9, 15, 0],
        "1f4b2": [["💲"], "", "󾓠", ["heavy_dollar_sign"], 28, 10, 15, 0],
        "1f4b3": [["💳"], "", "󾓡", ["credit_card"], 28, 11, 15, 0],
        "1f4b4": [["💴"], "", "󾓢", ["yen"], 28, 12, 15, 0],
        "1f4b5": [["💵"], "", "󾓣", ["dollar"], 28, 13, 15, 0],
        "1f4b6": [["💶"], "", "", ["euro"], 28, 14, 15, 0],
        "1f4b7": [["💷"], "", "", ["pound"], 28, 15, 15, 0],
        "1f4b8": [["💸"], "", "󾓤", ["money_with_wings"], 28, 16, 15, 0],
        "1f4b9": [["💹"], "", "󾓟", ["chart"], 28, 17, 15, 0],
        "1f4ba": [["💺"], "", "󾔷", ["seat"], 28, 18, 15, 0],
        "1f4bb": [["💻"], "", "󾔸", ["computer"], 28, 19, 15, 0],
        "1f4bc": [["💼"], "", "󾔻", ["briefcase"], 28, 20, 15, 0],
        "1f4bd": [["💽"], "", "󾔼", ["minidisc"], 28, 21, 15, 0],
        "1f4be": [["💾"], "", "󾔽", ["floppy_disk"], 28, 22, 15, 0],
        "1f4bf": [["💿"], "", "󾠝", ["cd"], 28, 23, 15, 0],
        "1f4c0": [["📀"], "", "󾠞", ["dvd"], 28, 24, 15, 0],
        "1f4c1": [["📁"], "", "󾕃", ["file_folder"], 28, 25, 15, 0],
        "1f4c2": [["📂"], "", "󾕄", ["open_file_folder"], 28, 26, 15, 0],
        "1f4c3": [["📃"], "", "󾕀", ["page_with_curl"], 28, 27, 15, 0],
        "1f4c4": [["📄"], "", "󾕁", ["page_facing_up"], 28, 28, 15, 0],
        "1f4c5": [["📅"], "", "󾕂", ["date"], 28, 29, 15, 0],
        "1f4c6": [["📆"], "", "󾕉", ["calendar"], 28, 30, 15, 0],
        "1f4c7": [["📇"], "", "󾕍", ["card_index"], 28, 31, 15, 0],
        "1f4c8": [["📈"], "", "󾕋", ["chart_with_upwards_trend"], 28, 32, 15, 0],
        "1f4c9": [["📉"], "", "󾕌", ["chart_with_downwards_trend"], 28, 33, 15, 0],
        "1f4ca": [["📊"], "", "󾕊", ["bar_chart"], 28, 34, 15, 0],
        "1f4cb": [["📋"], "", "󾕈", ["clipboard"], 28, 35, 15, 0],
        "1f4cc": [["📌"], "", "󾕎", ["pushpin"], 28, 36, 15, 0],
        "1f4cd": [["📍"], "", "󾔿", ["round_pushpin"], 28, 37, 15, 0],
        "1f4ce": [["📎"], "", "󾔺", ["paperclip"], 28, 38, 15, 0],
        "1f4cf": [["📏"], "", "󾕐", ["straight_ruler"], 28, 39, 15, 0],
        "1f4d0": [["📐"], "", "󾕑", ["triangular_ruler"], 28, 40, 15, 0],
        "1f4d1": [["📑"], "", "󾕒", ["bookmark_tabs"], 28, 41, 15, 0],
        "1f4d2": [["📒"], "", "󾕏", ["ledger"], 28, 42, 15, 0],
        "1f4d3": [["📓"], "", "󾕅", ["notebook"], 28, 43, 15, 0],
        "1f4d4": [["📔"], "", "󾕇", ["notebook_with_decorative_cover"], 28, 44, 15, 0],
        "1f4d5": [["📕"], "", "󾔂", ["closed_book"], 28, 45, 15, 0],
        "1f4d6": [["📖"], "", "󾕆", ["book", "open_book"], 28, 46, 15, 0],
        "1f4d7": [["📗"], "", "󾓿", ["green_book"], 28, 47, 15, 0],
        "1f4d8": [["📘"], "", "󾔀", ["blue_book"], 28, 48, 15, 0],
        "1f4d9": [["📙"], "", "󾔁", ["orange_book"], 28, 49, 15, 0],
        "1f4da": [["📚"], "", "󾔃", ["books"], 28, 50, 15, 0],
        "1f4db": [["📛"], "", "󾔄", ["name_badge"], 28, 51, 15, 0],
        "1f4dc": [["📜"], "", "󾓽", ["scroll"], 28, 52, 15, 0],
        "1f4dd": [["📝"], "", "󾔧", ["memo", "pencil"], 28, 53, 15, 0],
        "1f4de": [["📞"], "", "󾔤", ["telephone_receiver"], 28, 54, 15, 0],
        "1f4df": [["📟"], "", "󾔢", ["pager"], 28, 55, 15, 0],
        "1f4e0": [["📠"], "", "󾔨", ["fax"], 28, 56, 15, 0],
        "1f4e1": [["📡"], "", "󾔱", ["satellite_antenna"], 28, 57, 15, 0],
        "1f4e2": [["📢"], "", "󾔯", ["loudspeaker"], 28, 58, 15, 0],
        "1f4e3": [["📣"], "", "󾔰", ["mega"], 28, 59, 15, 0],
        "1f4e4": [["📤"], "", "󾔳", ["outbox_tray"], 28, 60, 15, 0],
        "1f4e5": [["📥"], "", "󾔴", ["inbox_tray"], 29, 0, 15, 0],
        "1f4e6": [["📦"], "", "󾔵", ["package"], 29, 1, 15, 0],
        "1f4e7": [["📧"], "", "󾮒", ["e-mail"], 29, 2, 15, 0],
        "1f4e8": [["📨"], "", "󾔪", ["incoming_envelope"], 29, 3, 15, 0],
        "1f4e9": [["📩"], "", "󾔫", ["envelope_with_arrow"], 29, 4, 15, 0],
        "1f4ea": [["📪"], "", "󾔬", ["mailbox_closed"], 29, 5, 15, 0],
        "1f4eb": [["📫"], "", "󾔭", ["mailbox"], 29, 6, 15, 0],
        "1f4ec": [["📬"], "", "", ["mailbox_with_mail"], 29, 7, 15, 0],
        "1f4ed": [["📭"], "", "", ["mailbox_with_no_mail"], 29, 8, 15, 0],
        "1f4ee": [["📮"], "", "󾔮", ["postbox"], 29, 9, 15, 0],
        "1f4ef": [["📯"], "", "", ["postal_horn"], 29, 10, 15, 0],
        "1f4f0": [["📰"], "", "󾠢", ["newspaper"], 29, 11, 15, 0],
        "1f4f1": [["📱"], "", "󾔥", ["iphone"], 29, 12, 15, 0],
        "1f4f2": [["📲"], "", "󾔦", ["calling"], 29, 13, 15, 0],
        "1f4f3": [["📳"], "", "󾠹", ["vibration_mode"], 29, 14, 15, 0],
        "1f4f4": [["📴"], "", "󾠺", ["mobile_phone_off"], 29, 15, 15, 0],
        "1f4f5": [["📵"], "", "", ["no_mobile_phones"], 29, 16, 15, 0],
        "1f4f6": [["📶"], "", "󾠸", ["signal_strength"], 29, 17, 15, 0],
        "1f4f7": [["📷"], "", "󾓯", ["camera"], 29, 18, 15, 0],
        "1f4f8": [["📸"], "", "", ["camera_with_flash"], 29, 19, 15, 0],
        "1f4f9": [["📹"], "", "󾓹", ["video_camera"], 29, 20, 15, 0],
        "1f4fa": [["📺"], "", "󾠜", ["tv"], 29, 21, 15, 0],
        "1f4fb": [["📻"], "", "󾠟", ["radio"], 29, 22, 15, 0],
        "1f4fc": [["📼"], "", "󾠠", ["vhs"], 29, 23, 15, 0],
        "1f4fd-fe0f": [["📽️", "📽"], "", "", ["film_projector"], 29, 24, 15, 0],
        "1f4ff": [["📿"], "", "", ["prayer_beads"], 29, 25, 15, 0],
        "1f500": [["🔀"], "", "", ["twisted_rightwards_arrows"], 29, 26, 15, 0],
        "1f501": [["🔁"], "", "", ["repeat"], 29, 27, 15, 0],
        "1f502": [["🔂"], "", "", ["repeat_one"], 29, 28, 15, 0],
        "1f503": [["🔃"], "", "󾮑", ["arrows_clockwise"], 29, 29, 15, 0],
        "1f504": [["🔄"], "", "", ["arrows_counterclockwise"], 29, 30, 15, 0],
        "1f505": [["🔅"], "", "", ["low_brightness"], 29, 31, 15, 0],
        "1f506": [["🔆"], "", "", ["high_brightness"], 29, 32, 15, 0],
        "1f507": [["🔇"], "", "", ["mute"], 29, 33, 15, 0],
        "1f508": [["🔈"], "", "", ["speaker"], 29, 34, 15, 0],
        "1f509": [["🔉"], "", "", ["sound"], 29, 35, 15, 0],
        "1f50a": [["🔊"], "", "󾠡", ["loud_sound"], 29, 36, 15, 0],
        "1f50b": [["🔋"], "", "󾓼", ["battery"], 29, 37, 15, 0],
        "1f50c": [["🔌"], "", "󾓾", ["electric_plug"], 29, 38, 15, 0],
        "1f50d": [["🔍"], "", "󾮅", ["mag"], 29, 39, 15, 0],
        "1f50e": [["🔎"], "", "󾮍", ["mag_right"], 29, 40, 15, 0],
        "1f50f": [["🔏"], "", "󾮐", ["lock_with_ink_pen"], 29, 41, 15, 0],
        "1f510": [["🔐"], "", "󾮊", ["closed_lock_with_key"], 29, 42, 15, 0],
        "1f511": [["🔑"], "", "󾮂", ["key"], 29, 43, 15, 0],
        "1f512": [["🔒"], "", "󾮆", ["lock"], 29, 44, 15, 0],
        "1f513": [["🔓"], "", "󾮇", ["unlock"], 29, 45, 15, 0],
        "1f514": [["🔔"], "", "󾓲", ["bell"], 29, 46, 15, 0],
        "1f515": [["🔕"], "", "", ["no_bell"], 29, 47, 15, 0],
        "1f516": [["🔖"], "", "󾮏", ["bookmark"], 29, 48, 15, 0],
        "1f517": [["🔗"], "", "󾭋", ["link"], 29, 49, 15, 0],
        "1f518": [["🔘"], "", "󾮌", ["radio_button"], 29, 50, 15, 0],
        "1f519": [["🔙"], "", "󾮎", ["back"], 29, 51, 15, 0],
        "1f51a": [["🔚"], "", "󾀚", ["end"], 29, 52, 15, 0],
        "1f51b": [["🔛"], "", "󾀙", ["on"], 29, 53, 15, 0],
        "1f51c": [["🔜"], "", "󾀘", ["soon"], 29, 54, 15, 0],
        "1f51d": [["🔝"], "", "󾭂", ["top"], 29, 55, 15, 0],
        "1f51e": [["🔞"], "", "󾬥", ["underage"], 29, 56, 15, 0],
        "1f51f": [["🔟"], "", "󾠻", ["keycap_ten"], 29, 57, 15, 0],
        "1f520": [["🔠"], "", "󾭼", ["capital_abcd"], 29, 58, 15, 0],
        "1f521": [["🔡"], "", "󾭽", ["abcd"], 29, 59, 15, 0],
        "1f522": [["🔢"], "", "󾭾", ["1234"], 29, 60, 15, 0],
        "1f523": [["🔣"], "", "󾭿", ["symbols"], 30, 0, 15, 0],
        "1f524": [["🔤"], "", "󾮀", ["abc"], 30, 1, 15, 0],
        "1f525": [["🔥"], "", "󾓶", ["fire"], 30, 2, 15, 0],
        "1f526": [["🔦"], "", "󾓻", ["flashlight"], 30, 3, 15, 0],
        "1f527": [["🔧"], "", "󾓉", ["wrench"], 30, 4, 15, 0],
        "1f528": [["🔨"], "", "󾓊", ["hammer"], 30, 5, 15, 0],
        "1f529": [["🔩"], "", "󾓋", ["nut_and_bolt"], 30, 6, 15, 0],
        "1f52a": [["🔪"], "", "󾓺", ["hocho", "knife"], 30, 7, 15, 0],
        "1f52b": [["🔫"], "", "󾓵", ["gun"], 30, 8, 15, 0],
        "1f52c": [["🔬"], "", "", ["microscope"], 30, 9, 15, 0],
        "1f52d": [["🔭"], "", "", ["telescope"], 30, 10, 15, 0],
        "1f52e": [["🔮"], "", "󾓷", ["crystal_ball"], 30, 11, 15, 0],
        "1f52f": [["🔯"], "", "󾓸", ["six_pointed_star"], 30, 12, 15, 0],
        "1f530": [["🔰"], "", "󾁄", ["beginner"], 30, 13, 15, 0],
        "1f531": [["🔱"], "", "󾓒", ["trident"], 30, 14, 15, 0],
        "1f532": [["🔲"], "", "󾭤", ["black_square_button"], 30, 15, 15, 0],
        "1f533": [["🔳"], "", "󾭧", ["white_square_button"], 30, 16, 15, 0],
        "1f534": [["🔴"], "", "󾭣", ["red_circle"], 30, 17, 15, 0],
        "1f535": [["🔵"], "", "󾭤", ["large_blue_circle"], 30, 18, 15, 0],
        "1f536": [["🔶"], "", "󾭳", ["large_orange_diamond"], 30, 19, 15, 0],
        "1f537": [["🔷"], "", "󾭴", ["large_blue_diamond"], 30, 20, 15, 0],
        "1f538": [["🔸"], "", "󾭵", ["small_orange_diamond"], 30, 21, 15, 0],
        "1f539": [["🔹"], "", "󾭶", ["small_blue_diamond"], 30, 22, 15, 0],
        "1f53a": [["🔺"], "", "󾭸", ["small_red_triangle"], 30, 23, 15, 0],
        "1f53b": [["🔻"], "", "󾭹", ["small_red_triangle_down"], 30, 24, 15, 0],
        "1f53c": [["🔼"], "", "󾬁", ["arrow_up_small"], 30, 25, 15, 0],
        "1f53d": [["🔽"], "", "󾬀", ["arrow_down_small"], 30, 26, 15, 0],
        "1f549-fe0f": [["🕉️", "🕉"], "", "", ["om_symbol"], 30, 27, 15, 0],
        "1f54a-fe0f": [["🕊️", "🕊"], "", "", ["dove_of_peace"], 30, 28, 15, 0],
        "1f54b": [["🕋"], "", "", ["kaaba"], 30, 29, 15, 0],
        "1f54c": [["🕌"], "", "", ["mosque"], 30, 30, 15, 0],
        "1f54d": [["🕍"], "", "", ["synagogue"], 30, 31, 15, 0],
        "1f54e": [["🕎"], "", "", ["menorah_with_nine_branches"], 30, 32, 15, 0],
        "1f550": [["🕐"], "", "󾀞", ["clock1"], 30, 33, 15, 0],
        "1f551": [["🕑"], "", "󾀟", ["clock2"], 30, 34, 15, 0],
        "1f552": [["🕒"], "", "󾀠", ["clock3"], 30, 35, 15, 0],
        "1f553": [["🕓"], "", "󾀡", ["clock4"], 30, 36, 15, 0],
        "1f554": [["🕔"], "", "󾀢", ["clock5"], 30, 37, 15, 0],
        "1f555": [["🕕"], "", "󾀣", ["clock6"], 30, 38, 15, 0],
        "1f556": [["🕖"], "", "󾀤", ["clock7"], 30, 39, 15, 0],
        "1f557": [["🕗"], "", "󾀥", ["clock8"], 30, 40, 15, 0],
        "1f558": [["🕘"], "", "󾀦", ["clock9"], 30, 41, 15, 0],
        "1f559": [["🕙"], "", "󾀧", ["clock10"], 30, 42, 15, 0],
        "1f55a": [["🕚"], "", "󾀨", ["clock11"], 30, 43, 15, 0],
        "1f55b": [["🕛"], "", "󾀩", ["clock12"], 30, 44, 15, 0],
        "1f55c": [["🕜"], "", "", ["clock130"], 30, 45, 15, 0],
        "1f55d": [["🕝"], "", "", ["clock230"], 30, 46, 15, 0],
        "1f55e": [["🕞"], "", "", ["clock330"], 30, 47, 15, 0],
        "1f55f": [["🕟"], "", "", ["clock430"], 30, 48, 15, 0],
        "1f560": [["🕠"], "", "", ["clock530"], 30, 49, 15, 0],
        "1f561": [["🕡"], "", "", ["clock630"], 30, 50, 15, 0],
        "1f562": [["🕢"], "", "", ["clock730"], 30, 51, 15, 0],
        "1f563": [["🕣"], "", "", ["clock830"], 30, 52, 15, 0],
        "1f564": [["🕤"], "", "", ["clock930"], 30, 53, 15, 0],
        "1f565": [["🕥"], "", "", ["clock1030"], 30, 54, 15, 0],
        "1f566": [["🕦"], "", "", ["clock1130"], 30, 55, 15, 0],
        "1f567": [["🕧"], "", "", ["clock1230"], 30, 56, 15, 0],
        "1f56f-fe0f": [["🕯️", "🕯"], "", "", ["candle"], 30, 57, 15, 0],
        "1f570-fe0f": [["🕰️", "🕰"], "", "", ["mantelpiece_clock"], 30, 58, 15, 0],
        "1f573-fe0f": [["🕳️", "🕳"], "", "", ["hole"], 30, 59, 15, 0],
        "1f574-fe0f": [["🕴️", "🕴"], "", "", ["man_in_business_suit_levitating"], 30, 60, 15, 0],
        "1f575-fe0f-200d-2640-fe0f": [["🕵️‍♀️"], "", "", ["female-detective"], 31, 5, 7, 0],
        "1f575-fe0f-200d-2642-fe0f": [["🕵️‍♂️", "🕵️", "🕵"], "", "", ["male-detective", "sleuth_or_spy"], 31, 11, 7, 0],
        "1f576-fe0f": [["🕶️", "🕶"], "", "", ["dark_sunglasses"], 31, 23, 15, 0],
        "1f577-fe0f": [["🕷️", "🕷"], "", "", ["spider"], 31, 24, 15, 0],
        "1f578-fe0f": [["🕸️", "🕸"], "", "", ["spider_web"], 31, 25, 15, 0],
        "1f579-fe0f": [["🕹️", "🕹"], "", "", ["joystick"], 31, 26, 15, 0],
        "1f57a": [["🕺"], "", "", ["man_dancing"], 31, 27, 15, 0],
        "1f587-fe0f": [["🖇️", "🖇"], "", "", ["linked_paperclips"], 31, 33, 15, 0],
        "1f58a-fe0f": [["🖊️", "🖊"], "", "", ["lower_left_ballpoint_pen"], 31, 34, 15, 0],
        "1f58b-fe0f": [["🖋️", "🖋"], "", "", ["lower_left_fountain_pen"], 31, 35, 15, 0],
        "1f58c-fe0f": [["🖌️", "🖌"], "", "", ["lower_left_paintbrush"], 31, 36, 15, 0],
        "1f58d-fe0f": [["🖍️", "🖍"], "", "", ["lower_left_crayon"], 31, 37, 15, 0],
        "1f590-fe0f": [["🖐️", "🖐"], "", "", ["raised_hand_with_fingers_splayed"], 31, 38, 15, 0],
        "1f595": [["🖕"], "", "", ["middle_finger", "reversed_hand_with_middle_finger_extended"], 31, 44, 15, 0],
        "1f596": [["🖖"], "", "", ["spock-hand"], 31, 50, 15, 0],
        "1f5a4": [["🖤"], "", "", ["black_heart"], 31, 56, 15, 0],
        "1f5a5-fe0f": [["🖥️", "🖥"], "", "", ["desktop_computer"], 31, 57, 15, 0],
        "1f5a8-fe0f": [["🖨️", "🖨"], "", "", ["printer"], 31, 58, 15, 0],
        "1f5b1-fe0f": [["🖱️", "🖱"], "", "", ["three_button_mouse"], 31, 59, 15, 0],
        "1f5b2-fe0f": [["🖲️", "🖲"], "", "", ["trackball"], 31, 60, 15, 0],
        "1f5bc-fe0f": [["🖼️", "🖼"], "", "", ["frame_with_picture"], 32, 0, 15, 0],
        "1f5c2-fe0f": [["🗂️", "🗂"], "", "", ["card_index_dividers"], 32, 1, 15, 0],
        "1f5c3-fe0f": [["🗃️", "🗃"], "", "", ["card_file_box"], 32, 2, 15, 0],
        "1f5c4-fe0f": [["🗄️", "🗄"], "", "", ["file_cabinet"], 32, 3, 15, 0],
        "1f5d1-fe0f": [["🗑️", "🗑"], "", "", ["wastebasket"], 32, 4, 15, 0],
        "1f5d2-fe0f": [["🗒️", "🗒"], "", "", ["spiral_note_pad"], 32, 5, 15, 0],
        "1f5d3-fe0f": [["🗓️", "🗓"], "", "", ["spiral_calendar_pad"], 32, 6, 15, 0],
        "1f5dc-fe0f": [["🗜️", "🗜"], "", "", ["compression"], 32, 7, 15, 0],
        "1f5dd-fe0f": [["🗝️", "🗝"], "", "", ["old_key"], 32, 8, 15, 0],
        "1f5de-fe0f": [["🗞️", "🗞"], "", "", ["rolled_up_newspaper"], 32, 9, 15, 0],
        "1f5e1-fe0f": [["🗡️", "🗡"], "", "", ["dagger_knife"], 32, 10, 15, 0],
        "1f5e3-fe0f": [["🗣️", "🗣"], "", "", ["speaking_head_in_silhouette"], 32, 11, 15, 0],
        "1f5e8-fe0f": [["🗨️", "🗨"], "", "", ["left_speech_bubble"], 32, 12, 15, 0],
        "1f5ef-fe0f": [["🗯️", "🗯"], "", "", ["right_anger_bubble"], 32, 13, 15, 0],
        "1f5f3-fe0f": [["🗳️", "🗳"], "", "", ["ballot_box_with_ballot"], 32, 14, 15, 0],
        "1f5fa-fe0f": [["🗺️", "🗺"], "", "", ["world_map"], 32, 15, 15, 0],
        "1f5fb": [["🗻"], "", "󾓃", ["mount_fuji"], 32, 16, 15, 0],
        "1f5fc": [["🗼"], "", "󾓄", ["tokyo_tower"], 32, 17, 15, 0],
        "1f5fd": [["🗽"], "", "󾓆", ["statue_of_liberty"], 32, 18, 15, 0],
        "1f5fe": [["🗾"], "", "󾓇", ["japan"], 32, 19, 15, 0],
        "1f5ff": [["🗿"], "", "󾓈", ["moyai"], 32, 20, 15, 0],
        "1f600": [["😀"], "", "", ["grinning"], 32, 21, 15, 0, ":D"],
        "1f601": [["😁"], "", "󾌳", ["grin"], 32, 22, 15, 0],
        "1f602": [["😂"], "", "󾌴", ["joy"], 32, 23, 15, 0],
        "1f603": [["😃"], "", "󾌰", ["smiley"], 32, 24, 15, 0, ":)"],
        "1f604": [["😄"], "", "󾌸", ["smile"], 32, 25, 15, 0, ":)"],
        "1f605": [["😅"], "", "󾌱", ["sweat_smile"], 32, 26, 15, 0],
        "1f606": [["😆"], "", "󾌲", ["laughing", "satisfied"], 32, 27, 15, 0],
        "1f607": [["😇"], "", "", ["innocent"], 32, 28, 15, 0],
        "1f608": [["😈"], "", "", ["smiling_imp"], 32, 29, 15, 0],
        "1f609": [["😉"], "", "󾍇", ["wink"], 32, 30, 15, 0, ";)"],
        "1f60a": [["😊"], "", "󾌵", ["blush"], 32, 31, 15, 0, ":)"],
        "1f60b": [["😋"], "", "󾌫", ["yum"], 32, 32, 15, 0],
        "1f60c": [["😌"], "", "󾌾", ["relieved"], 32, 33, 15, 0],
        "1f60d": [["😍"], "", "󾌧", ["heart_eyes"], 32, 34, 15, 0],
        "1f60e": [["😎"], "", "", ["sunglasses"], 32, 35, 15, 0],
        "1f60f": [["😏"], "", "󾍃", ["smirk"], 32, 36, 15, 0],
        "1f610": [["😐"], "", "", ["neutral_face"], 32, 37, 15, 0],
        "1f611": [["😑"], "", "", ["expressionless"], 32, 38, 15, 0],
        "1f612": [["😒"], "", "󾌦", ["unamused"], 32, 39, 15, 0, ":("],
        "1f613": [["😓"], "", "󾍄", ["sweat"], 32, 40, 15, 0],
        "1f614": [["😔"], "", "󾍀", ["pensive"], 32, 41, 15, 0],
        "1f615": [["😕"], "", "", ["confused"], 32, 42, 15, 0],
        "1f616": [["😖"], "", "󾌿", ["confounded"], 32, 43, 15, 0],
        "1f617": [["😗"], "", "", ["kissing"], 32, 44, 15, 0],
        "1f618": [["😘"], "", "󾌬", ["kissing_heart"], 32, 45, 15, 0],
        "1f619": [["😙"], "", "", ["kissing_smiling_eyes"], 32, 46, 15, 0],
        "1f61a": [["😚"], "", "󾌭", ["kissing_closed_eyes"], 32, 47, 15, 0],
        "1f61b": [["😛"], "", "", ["stuck_out_tongue"], 32, 48, 15, 0, ":p"],
        "1f61c": [["😜"], "", "󾌩", ["stuck_out_tongue_winking_eye"], 32, 49, 15, 0, ";p"],
        "1f61d": [["😝"], "", "󾌪", ["stuck_out_tongue_closed_eyes"], 32, 50, 15, 0],
        "1f61e": [["😞"], "", "󾌣", ["disappointed"], 32, 51, 15, 0, ":("],
        "1f61f": [["😟"], "", "", ["worried"], 32, 52, 15, 0],
        "1f620": [["😠"], "", "󾌠", ["angry"], 32, 53, 15, 0],
        "1f621": [["😡"], "", "󾌽", ["rage"], 32, 54, 15, 0],
        "1f622": [["😢"], "", "󾌹", ["cry"], 32, 55, 15, 0, ":'("],
        "1f623": [["😣"], "", "󾌼", ["persevere"], 32, 56, 15, 0],
        "1f624": [["😤"], "", "󾌨", ["triumph"], 32, 57, 15, 0],
        "1f625": [["😥"], "", "󾍅", ["disappointed_relieved"], 32, 58, 15, 0],
        "1f626": [["😦"], "", "", ["frowning"], 32, 59, 15, 0],
        "1f627": [["😧"], "", "", ["anguished"], 32, 60, 15, 0],
        "1f628": [["😨"], "", "󾌻", ["fearful"], 33, 0, 15, 0],
        "1f629": [["😩"], "", "󾌡", ["weary"], 33, 1, 15, 0],
        "1f62a": [["😪"], "", "󾍂", ["sleepy"], 33, 2, 15, 0],
        "1f62b": [["😫"], "", "󾍆", ["tired_face"], 33, 3, 15, 0],
        "1f62c": [["😬"], "", "", ["grimacing"], 33, 4, 15, 0],
        "1f62d": [["😭"], "", "󾌺", ["sob"], 33, 5, 15, 0, ":'("],
        "1f62e-200d-1f4a8": [["😮‍💨"], "", "", ["face_exhaling"], 33, 6, 15, 0],
        "1f62e": [["😮"], "", "", ["open_mouth"], 33, 7, 15, 0],
        "1f62f": [["😯"], "", "", ["hushed"], 33, 8, 15, 0],
        "1f630": [["😰"], "", "󾌥", ["cold_sweat"], 33, 9, 15, 0],
        "1f631": [["😱"], "", "󾍁", ["scream"], 33, 10, 15, 0],
        "1f632": [["😲"], "", "󾌢", ["astonished"], 33, 11, 15, 0],
        "1f633": [["😳"], "", "󾌯", ["flushed"], 33, 12, 15, 0],
        "1f634": [["😴"], "", "", ["sleeping"], 33, 13, 15, 0],
        "1f635-200d-1f4ab": [["😵‍💫"], "", "", ["face_with_spiral_eyes"], 33, 14, 15, 0],
        "1f635": [["😵"], "", "󾌤", ["dizzy_face"], 33, 15, 15, 0],
        "1f636-200d-1f32b-fe0f": [["😶‍🌫️", "😶‍🌫"], "", "", ["face_in_clouds"], 33, 16, 15, 0],
        "1f636": [["😶"], "", "", ["no_mouth"], 33, 17, 15, 0],
        "1f637": [["😷"], "", "󾌮", ["mask"], 33, 18, 15, 0],
        "1f638": [["😸"], "", "󾍉", ["smile_cat"], 33, 19, 15, 0],
        "1f639": [["😹"], "", "󾍊", ["joy_cat"], 33, 20, 15, 0],
        "1f63a": [["😺"], "", "󾍈", ["smiley_cat"], 33, 21, 15, 0],
        "1f63b": [["😻"], "", "󾍌", ["heart_eyes_cat"], 33, 22, 15, 0],
        "1f63c": [["😼"], "", "󾍏", ["smirk_cat"], 33, 23, 15, 0],
        "1f63d": [["😽"], "", "󾍋", ["kissing_cat"], 33, 24, 15, 0],
        "1f63e": [["😾"], "", "󾍎", ["pouting_cat"], 33, 25, 15, 0],
        "1f63f": [["😿"], "", "󾍍", ["crying_cat_face"], 33, 26, 15, 0],
        "1f640": [["🙀"], "", "󾍐", ["scream_cat"], 33, 27, 15, 0],
        "1f641": [["🙁"], "", "", ["slightly_frowning_face"], 33, 28, 15, 0],
        "1f642": [["🙂"], "", "", ["slightly_smiling_face"], 33, 29, 15, 0],
        "1f643": [["🙃"], "", "", ["upside_down_face"], 33, 30, 15, 0],
        "1f644": [["🙄"], "", "", ["face_with_rolling_eyes"], 33, 31, 15, 0],
        "1f645-200d-2640-fe0f": [["🙅‍♀️", "🙅‍♀", "🙅"], "", "", ["woman-gesturing-no", "no_good"], 33, 32, 15, 0],
        "1f645-200d-2642-fe0f": [["🙅‍♂️", "🙅‍♂"], "", "", ["man-gesturing-no"], 33, 38, 15, 0],
        "1f646-200d-2640-fe0f": [["🙆‍♀️", "🙆‍♀", "🙆"], "", "", ["woman-gesturing-ok", "ok_woman"], 33, 50, 15, 0],
        "1f646-200d-2642-fe0f": [["🙆‍♂️", "🙆‍♂"], "", "", ["man-gesturing-ok"], 33, 56, 15, 0],
        "1f647-200d-2640-fe0f": [["🙇‍♀️", "🙇‍♀"], "", "", ["woman-bowing"], 34, 7, 15, 0],
        "1f647-200d-2642-fe0f": [["🙇‍♂️", "🙇‍♂"], "", "", ["man-bowing"], 34, 13, 15, 0],
        "1f647": [["🙇"], "", "󾍓", ["bow"], 34, 19, 15, 0],
        "1f648": [["🙈"], "", "󾍔", ["see_no_evil"], 34, 25, 15, 0],
        "1f649": [["🙉"], "", "󾍖", ["hear_no_evil"], 34, 26, 15, 0],
        "1f64a": [["🙊"], "", "󾍕", ["speak_no_evil"], 34, 27, 15, 0],
        "1f64b-200d-2640-fe0f": [["🙋‍♀️", "🙋‍♀", "🙋"], "", "", ["woman-raising-hand", "raising_hand"], 34, 28, 15, 0],
        "1f64b-200d-2642-fe0f": [["🙋‍♂️", "🙋‍♂"], "", "", ["man-raising-hand"], 34, 34, 15, 0],
        "1f64c": [["🙌"], "", "󾍘", ["raised_hands"], 34, 46, 15, 0],
        "1f64d-200d-2640-fe0f": [["🙍‍♀️", "🙍‍♀", "🙍"], "", "", ["woman-frowning", "person_frowning"], 34, 52, 15, 0],
        "1f64d-200d-2642-fe0f": [["🙍‍♂️", "🙍‍♂"], "", "", ["man-frowning"], 34, 58, 15, 0],
        "1f64e-200d-2640-fe0f": [["🙎‍♀️", "🙎‍♀", "🙎"], "", "", ["woman-pouting", "person_with_pouting_face"], 35, 9, 15, 0],
        "1f64e-200d-2642-fe0f": [["🙎‍♂️", "🙎‍♂"], "", "", ["man-pouting"], 35, 15, 15, 0],
        "1f64f": [["🙏"], "", "󾍛", ["pray"], 35, 27, 15, 0],
        "1f680": [["🚀"], "", "󾟭", ["rocket"], 35, 33, 15, 0],
        "1f681": [["🚁"], "", "", ["helicopter"], 35, 34, 15, 0],
        "1f682": [["🚂"], "", "", ["steam_locomotive"], 35, 35, 15, 0],
        "1f683": [["🚃"], "", "󾟟", ["railway_car"], 35, 36, 15, 0],
        "1f684": [["🚄"], "", "󾟢", ["bullettrain_side"], 35, 37, 15, 0],
        "1f685": [["🚅"], "", "󾟣", ["bullettrain_front"], 35, 38, 15, 0],
        "1f686": [["🚆"], "", "", ["train2"], 35, 39, 15, 0],
        "1f687": [["🚇"], "", "󾟠", ["metro"], 35, 40, 15, 0],
        "1f688": [["🚈"], "", "", ["light_rail"], 35, 41, 15, 0],
        "1f689": [["🚉"], "", "󾟬", ["station"], 35, 42, 15, 0],
        "1f68a": [["🚊"], "", "", ["tram"], 35, 43, 15, 0],
        "1f68b": [["🚋"], "", "", ["train"], 35, 44, 15, 0],
        "1f68c": [["🚌"], "", "󾟦", ["bus"], 35, 45, 15, 0],
        "1f68d": [["🚍"], "", "", ["oncoming_bus"], 35, 46, 15, 0],
        "1f68e": [["🚎"], "", "", ["trolleybus"], 35, 47, 15, 0],
        "1f68f": [["🚏"], "", "󾟧", ["busstop"], 35, 48, 15, 0],
        "1f690": [["🚐"], "", "", ["minibus"], 35, 49, 15, 0],
        "1f691": [["🚑"], "", "󾟳", ["ambulance"], 35, 50, 15, 0],
        "1f692": [["🚒"], "", "󾟲", ["fire_engine"], 35, 51, 15, 0],
        "1f693": [["🚓"], "", "󾟴", ["police_car"], 35, 52, 15, 0],
        "1f694": [["🚔"], "", "", ["oncoming_police_car"], 35, 53, 15, 0],
        "1f695": [["🚕"], "", "󾟯", ["taxi"], 35, 54, 15, 0],
        "1f696": [["🚖"], "", "", ["oncoming_taxi"], 35, 55, 15, 0],
        "1f697": [["🚗"], "", "󾟤", ["car", "red_car"], 35, 56, 15, 0],
        "1f698": [["🚘"], "", "", ["oncoming_automobile"], 35, 57, 15, 0],
        "1f699": [["🚙"], "", "󾟥", ["blue_car"], 35, 58, 15, 0],
        "1f69a": [["🚚"], "", "󾟱", ["truck"], 35, 59, 15, 0],
        "1f69b": [["🚛"], "", "", ["articulated_lorry"], 35, 60, 15, 0],
        "1f69c": [["🚜"], "", "", ["tractor"], 36, 0, 15, 0],
        "1f69d": [["🚝"], "", "", ["monorail"], 36, 1, 15, 0],
        "1f69e": [["🚞"], "", "", ["mountain_railway"], 36, 2, 15, 0],
        "1f69f": [["🚟"], "", "", ["suspension_railway"], 36, 3, 15, 0],
        "1f6a0": [["🚠"], "", "", ["mountain_cableway"], 36, 4, 15, 0],
        "1f6a1": [["🚡"], "", "", ["aerial_tramway"], 36, 5, 15, 0],
        "1f6a2": [["🚢"], "", "󾟨", ["ship"], 36, 6, 15, 0],
        "1f6a3-200d-2640-fe0f": [["🚣‍♀️", "🚣‍♀"], "", "", ["woman-rowing-boat"], 36, 7, 15, 0],
        "1f6a3-200d-2642-fe0f": [["🚣‍♂️", "🚣‍♂", "🚣"], "", "", ["man-rowing-boat", "rowboat"], 36, 13, 15, 0],
        "1f6a4": [["🚤"], "", "󾟮", ["speedboat"], 36, 25, 15, 0],
        "1f6a5": [["🚥"], "", "󾟷", ["traffic_light"], 36, 26, 15, 0],
        "1f6a6": [["🚦"], "", "", ["vertical_traffic_light"], 36, 27, 15, 0],
        "1f6a7": [["🚧"], "", "󾟸", ["construction"], 36, 28, 15, 0],
        "1f6a8": [["🚨"], "", "󾟹", ["rotating_light"], 36, 29, 15, 0],
        "1f6a9": [["🚩"], "", "󾬢", ["triangular_flag_on_post"], 36, 30, 15, 0],
        "1f6aa": [["🚪"], "", "󾓳", ["door"], 36, 31, 15, 0],
        "1f6ab": [["🚫"], "", "󾭈", ["no_entry_sign"], 36, 32, 15, 0],
        "1f6ac": [["🚬"], "", "󾬞", ["smoking"], 36, 33, 15, 0],
        "1f6ad": [["🚭"], "", "󾬟", ["no_smoking"], 36, 34, 15, 0],
        "1f6ae": [["🚮"], "", "", ["put_litter_in_its_place"], 36, 35, 15, 0],
        "1f6af": [["🚯"], "", "", ["do_not_litter"], 36, 36, 15, 0],
        "1f6b0": [["🚰"], "", "", ["potable_water"], 36, 37, 15, 0],
        "1f6b1": [["🚱"], "", "", ["non-potable_water"], 36, 38, 15, 0],
        "1f6b2": [["🚲"], "", "󾟫", ["bike"], 36, 39, 15, 0],
        "1f6b3": [["🚳"], "", "", ["no_bicycles"], 36, 40, 15, 0],
        "1f6b4-200d-2640-fe0f": [["🚴‍♀️", "🚴‍♀"], "", "", ["woman-biking"], 36, 41, 15, 0],
        "1f6b4-200d-2642-fe0f": [["🚴‍♂️", "🚴‍♂", "🚴"], "", "", ["man-biking", "bicyclist"], 36, 47, 15, 0],
        "1f6b5-200d-2640-fe0f": [["🚵‍♀️", "🚵‍♀"], "", "", ["woman-mountain-biking"], 36, 59, 15, 0],
        "1f6b5-200d-2642-fe0f": [["🚵‍♂️", "🚵‍♂", "🚵"], "", "", ["man-mountain-biking", "mountain_bicyclist"], 37, 4, 15, 0],
        "1f6b6-200d-2640-fe0f": [["🚶‍♀️", "🚶‍♀"], "", "", ["woman-walking"], 37, 16, 15, 0],
        "1f6b6-200d-2642-fe0f": [["🚶‍♂️", "🚶‍♂", "🚶"], "", "", ["man-walking", "walking"], 37, 22, 15, 0],
        "1f6b7": [["🚷"], "", "", ["no_pedestrians"], 37, 34, 15, 0],
        "1f6b8": [["🚸"], "", "", ["children_crossing"], 37, 35, 15, 0],
        "1f6b9": [["🚹"], "", "󾬳", ["mens"], 37, 36, 15, 0],
        "1f6ba": [["🚺"], "", "󾬴", ["womens"], 37, 37, 15, 0],
        "1f6bb": [["🚻"], "", "󾔆", ["restroom"], 37, 38, 15, 0],
        "1f6bc": [["🚼"], "", "󾬵", ["baby_symbol"], 37, 39, 15, 0],
        "1f6bd": [["🚽"], "", "󾔇", ["toilet"], 37, 40, 15, 0],
        "1f6be": [["🚾"], "", "󾔈", ["wc"], 37, 41, 15, 0],
        "1f6bf": [["🚿"], "", "", ["shower"], 37, 42, 15, 0],
        "1f6c0": [["🛀"], "", "󾔅", ["bath"], 37, 43, 15, 0],
        "1f6c1": [["🛁"], "", "", ["bathtub"], 37, 49, 15, 0],
        "1f6c2": [["🛂"], "", "", ["passport_control"], 37, 50, 15, 0],
        "1f6c3": [["🛃"], "", "", ["customs"], 37, 51, 15, 0],
        "1f6c4": [["🛄"], "", "", ["baggage_claim"], 37, 52, 15, 0],
        "1f6c5": [["🛅"], "", "", ["left_luggage"], 37, 53, 15, 0],
        "1f6cb-fe0f": [["🛋️", "🛋"], "", "", ["couch_and_lamp"], 37, 54, 15, 0],
        "1f6cc": [["🛌"], "", "", ["sleeping_accommodation"], 37, 55, 15, 0],
        "1f6cd-fe0f": [["🛍️", "🛍"], "", "", ["shopping_bags"], 38, 0, 15, 0],
        "1f6ce-fe0f": [["🛎️", "🛎"], "", "", ["bellhop_bell"], 38, 1, 15, 0],
        "1f6cf-fe0f": [["🛏️", "🛏"], "", "", ["bed"], 38, 2, 15, 0],
        "1f6d0": [["🛐"], "", "", ["place_of_worship"], 38, 3, 15, 0],
        "1f6d1": [["🛑"], "", "", ["octagonal_sign"], 38, 4, 15, 0],
        "1f6d2": [["🛒"], "", "", ["shopping_trolley"], 38, 5, 15, 0],
        "1f6d5": [["🛕"], "", "", ["hindu_temple"], 38, 6, 15, 0],
        "1f6d6": [["🛖"], "", "", ["hut"], 38, 7, 15, 0],
        "1f6d7": [["🛗"], "", "", ["elevator"], 38, 8, 15, 0],
        "1f6dc": [["🛜"], "", "", ["wireless"], 38, 9, 3, 0],
        "1f6dd": [["🛝"], "", "", ["playground_slide"], 38, 10, 15, 0],
        "1f6de": [["🛞"], "", "", ["wheel"], 38, 11, 15, 0],
        "1f6df": [["🛟"], "", "", ["ring_buoy"], 38, 12, 15, 0],
        "1f6e0-fe0f": [["🛠️", "🛠"], "", "", ["hammer_and_wrench"], 38, 13, 15, 0],
        "1f6e1-fe0f": [["🛡️", "🛡"], "", "", ["shield"], 38, 14, 15, 0],
        "1f6e2-fe0f": [["🛢️", "🛢"], "", "", ["oil_drum"], 38, 15, 15, 0],
        "1f6e3-fe0f": [["🛣️", "🛣"], "", "", ["motorway"], 38, 16, 15, 0],
        "1f6e4-fe0f": [["🛤️", "🛤"], "", "", ["railway_track"], 38, 17, 15, 0],
        "1f6e5-fe0f": [["🛥️", "🛥"], "", "", ["motor_boat"], 38, 18, 15, 0],
        "1f6e9-fe0f": [["🛩️", "🛩"], "", "", ["small_airplane"], 38, 19, 15, 0],
        "1f6eb": [["🛫"], "", "", ["airplane_departure"], 38, 20, 15, 0],
        "1f6ec": [["🛬"], "", "", ["airplane_arriving"], 38, 21, 15, 0],
        "1f6f0-fe0f": [["🛰️", "🛰"], "", "", ["satellite"], 38, 22, 15, 0],
        "1f6f3-fe0f": [["🛳️", "🛳"], "", "", ["passenger_ship"], 38, 23, 15, 0],
        "1f6f4": [["🛴"], "", "", ["scooter"], 38, 24, 15, 0],
        "1f6f5": [["🛵"], "", "", ["motor_scooter"], 38, 25, 15, 0],
        "1f6f6": [["🛶"], "", "", ["canoe"], 38, 26, 15, 0],
        "1f6f7": [["🛷"], "", "", ["sled"], 38, 27, 15, 0],
        "1f6f8": [["🛸"], "", "", ["flying_saucer"], 38, 28, 15, 0],
        "1f6f9": [["🛹"], "", "", ["skateboard"], 38, 29, 15, 0],
        "1f6fa": [["🛺"], "", "", ["auto_rickshaw"], 38, 30, 15, 0],
        "1f6fb": [["🛻"], "", "", ["pickup_truck"], 38, 31, 15, 0],
        "1f6fc": [["🛼"], "", "", ["roller_skate"], 38, 32, 15, 0],
        "1f7e0": [["🟠"], "", "", ["large_orange_circle"], 38, 33, 15, 0],
        "1f7e1": [["🟡"], "", "", ["large_yellow_circle"], 38, 34, 15, 0],
        "1f7e2": [["🟢"], "", "", ["large_green_circle"], 38, 35, 15, 0],
        "1f7e3": [["🟣"], "", "", ["large_purple_circle"], 38, 36, 15, 0],
        "1f7e4": [["🟤"], "", "", ["large_brown_circle"], 38, 37, 15, 0],
        "1f7e5": [["🟥"], "", "", ["large_red_square"], 38, 38, 15, 0],
        "1f7e6": [["🟦"], "", "", ["large_blue_square"], 38, 39, 15, 0],
        "1f7e7": [["🟧"], "", "", ["large_orange_square"], 38, 40, 15, 0],
        "1f7e8": [["🟨"], "", "", ["large_yellow_square"], 38, 41, 15, 0],
        "1f7e9": [["🟩"], "", "", ["large_green_square"], 38, 42, 15, 0],
        "1f7ea": [["🟪"], "", "", ["large_purple_square"], 38, 43, 15, 0],
        "1f7eb": [["🟫"], "", "", ["large_brown_square"], 38, 44, 15, 0],
        "1f7f0": [["🟰"], "", "", ["heavy_equals_sign"], 38, 45, 15, 0],
        "1f90c": [["🤌"], "", "", ["pinched_fingers"], 38, 46, 15, 0],
        "1f90d": [["🤍"], "", "", ["white_heart"], 38, 52, 15, 0],
        "1f90e": [["🤎"], "", "", ["brown_heart"], 38, 53, 15, 0],
        "1f90f": [["🤏"], "", "", ["pinching_hand"], 38, 54, 15, 0],
        "1f910": [["🤐"], "", "", ["zipper_mouth_face"], 38, 60, 15, 0],
        "1f911": [["🤑"], "", "", ["money_mouth_face"], 39, 0, 15, 0],
        "1f912": [["🤒"], "", "", ["face_with_thermometer"], 39, 1, 15, 0],
        "1f913": [["🤓"], "", "", ["nerd_face"], 39, 2, 15, 0],
        "1f914": [["🤔"], "", "", ["thinking_face"], 39, 3, 15, 0],
        "1f915": [["🤕"], "", "", ["face_with_head_bandage"], 39, 4, 15, 0],
        "1f916": [["🤖"], "", "", ["robot_face"], 39, 5, 15, 0],
        "1f917": [["🤗"], "", "", ["hugging_face"], 39, 6, 15, 0],
        "1f918": [["🤘"], "", "", ["the_horns", "sign_of_the_horns"], 39, 7, 15, 0],
        "1f919": [["🤙"], "", "", ["call_me_hand"], 39, 13, 15, 0],
        "1f91a": [["🤚"], "", "", ["raised_back_of_hand"], 39, 19, 15, 0],
        "1f91b": [["🤛"], "", "", ["left-facing_fist"], 39, 25, 15, 0],
        "1f91c": [["🤜"], "", "", ["right-facing_fist"], 39, 31, 15, 0],
        "1f91d": [["🤝"], "", "", ["handshake"], 39, 37, 15, 0],
        "1f91e": [["🤞"], "", "", ["crossed_fingers", "hand_with_index_and_middle_fingers_crossed"], 40, 2, 15, 0],
        "1f91f": [["🤟"], "", "", ["i_love_you_hand_sign"], 40, 8, 15, 0],
        "1f920": [["🤠"], "", "", ["face_with_cowboy_hat"], 40, 14, 15, 0],
        "1f921": [["🤡"], "", "", ["clown_face"], 40, 15, 15, 0],
        "1f922": [["🤢"], "", "", ["nauseated_face"], 40, 16, 15, 0],
        "1f923": [["🤣"], "", "", ["rolling_on_the_floor_laughing"], 40, 17, 15, 0],
        "1f924": [["🤤"], "", "", ["drooling_face"], 40, 18, 15, 0],
        "1f925": [["🤥"], "", "", ["lying_face"], 40, 19, 15, 0],
        "1f926-200d-2640-fe0f": [["🤦‍♀️", "🤦‍♀"], "", "", ["woman-facepalming"], 40, 20, 15, 0],
        "1f926-200d-2642-fe0f": [["🤦‍♂️", "🤦‍♂"], "", "", ["man-facepalming"], 40, 26, 15, 0],
        "1f926": [["🤦"], "", "", ["face_palm"], 40, 32, 15, 0],
        "1f927": [["🤧"], "", "", ["sneezing_face"], 40, 38, 15, 0],
        "1f928": [["🤨"], "", "", ["face_with_raised_eyebrow", "face_with_one_eyebrow_raised"], 40, 39, 15, 0],
        "1f929": [["🤩"], "", "", ["star-struck", "grinning_face_with_star_eyes"], 40, 40, 15, 0],
        "1f92a": [["🤪"], "", "", ["zany_face", "grinning_face_with_one_large_and_one_small_eye"], 40, 41, 15, 0],
        "1f92b": [["🤫"], "", "", ["shushing_face", "face_with_finger_covering_closed_lips"], 40, 42, 15, 0],
        "1f92c": [["🤬"], "", "", ["face_with_symbols_on_mouth", "serious_face_with_symbols_covering_mouth"], 40, 43, 15, 0],
        "1f92d": [["🤭"], "", "", ["face_with_hand_over_mouth", "smiling_face_with_smiling_eyes_and_hand_covering_mouth"], 40, 44, 15, 0],
        "1f92e": [["🤮"], "", "", ["face_vomiting", "face_with_open_mouth_vomiting"], 40, 45, 15, 0],
        "1f92f": [["🤯"], "", "", ["exploding_head", "shocked_face_with_exploding_head"], 40, 46, 15, 0],
        "1f930": [["🤰"], "", "", ["pregnant_woman"], 40, 47, 15, 0],
        "1f931": [["🤱"], "", "", ["breast-feeding"], 40, 53, 15, 0],
        "1f932": [["🤲"], "", "", ["palms_up_together"], 40, 59, 15, 0],
        "1f933": [["🤳"], "", "", ["selfie"], 41, 4, 15, 0],
        "1f934": [["🤴"], "", "", ["prince"], 41, 10, 15, 0],
        "1f935-200d-2640-fe0f": [["🤵‍♀️", "🤵‍♀"], "", "", ["woman_in_tuxedo"], 41, 16, 15, 0],
        "1f935-200d-2642-fe0f": [["🤵‍♂️", "🤵‍♂"], "", "", ["man_in_tuxedo"], 41, 22, 15, 0],
        "1f935": [["🤵"], "", "", ["person_in_tuxedo"], 41, 28, 15, 0],
        "1f936": [["🤶"], "", "", ["mrs_claus", "mother_christmas"], 41, 34, 15, 0],
        "1f937-200d-2640-fe0f": [["🤷‍♀️", "🤷‍♀"], "", "", ["woman-shrugging"], 41, 40, 15, 0],
        "1f937-200d-2642-fe0f": [["🤷‍♂️", "🤷‍♂"], "", "", ["man-shrugging"], 41, 46, 15, 0],
        "1f937": [["🤷"], "", "", ["shrug"], 41, 52, 15, 0],
        "1f938-200d-2640-fe0f": [["🤸‍♀️", "🤸‍♀"], "", "", ["woman-cartwheeling"], 41, 58, 15, 0],
        "1f938-200d-2642-fe0f": [["🤸‍♂️", "🤸‍♂"], "", "", ["man-cartwheeling"], 42, 3, 15, 0],
        "1f938": [["🤸"], "", "", ["person_doing_cartwheel"], 42, 9, 15, 0],
        "1f939-200d-2640-fe0f": [["🤹‍♀️", "🤹‍♀"], "", "", ["woman-juggling"], 42, 15, 15, 0],
        "1f939-200d-2642-fe0f": [["🤹‍♂️", "🤹‍♂"], "", "", ["man-juggling"], 42, 21, 15, 0],
        "1f939": [["🤹"], "", "", ["juggling"], 42, 27, 15, 0],
        "1f93a": [["🤺"], "", "", ["fencer"], 42, 33, 15, 0],
        "1f93c-200d-2640-fe0f": [["🤼‍♀️", "🤼‍♀"], "", "", ["woman-wrestling"], 42, 34, 15, 0],
        "1f93c-200d-2642-fe0f": [["🤼‍♂️", "🤼‍♂"], "", "", ["man-wrestling"], 42, 35, 15, 0],
        "1f93c": [["🤼"], "", "", ["wrestlers"], 42, 36, 15, 0],
        "1f93d-200d-2640-fe0f": [["🤽‍♀️", "🤽‍♀"], "", "", ["woman-playing-water-polo"], 42, 37, 15, 0],
        "1f93d-200d-2642-fe0f": [["🤽‍♂️", "🤽‍♂"], "", "", ["man-playing-water-polo"], 42, 43, 15, 0],
        "1f93d": [["🤽"], "", "", ["water_polo"], 42, 49, 15, 0],
        "1f93e-200d-2640-fe0f": [["🤾‍♀️", "🤾‍♀"], "", "", ["woman-playing-handball"], 42, 55, 15, 0],
        "1f93e-200d-2642-fe0f": [["🤾‍♂️", "🤾‍♂"], "", "", ["man-playing-handball"], 43, 0, 15, 0],
        "1f93e": [["🤾"], "", "", ["handball"], 43, 6, 15, 0],
        "1f93f": [["🤿"], "", "", ["diving_mask"], 43, 12, 15, 0],
        "1f940": [["🥀"], "", "", ["wilted_flower"], 43, 13, 15, 0],
        "1f941": [["🥁"], "", "", ["drum_with_drumsticks"], 43, 14, 15, 0],
        "1f942": [["🥂"], "", "", ["clinking_glasses"], 43, 15, 15, 0],
        "1f943": [["🥃"], "", "", ["tumbler_glass"], 43, 16, 15, 0],
        "1f944": [["🥄"], "", "", ["spoon"], 43, 17, 15, 0],
        "1f945": [["🥅"], "", "", ["goal_net"], 43, 18, 15, 0],
        "1f947": [["🥇"], "", "", ["first_place_medal"], 43, 19, 15, 0],
        "1f948": [["🥈"], "", "", ["second_place_medal"], 43, 20, 15, 0],
        "1f949": [["🥉"], "", "", ["third_place_medal"], 43, 21, 15, 0],
        "1f94a": [["🥊"], "", "", ["boxing_glove"], 43, 22, 15, 0],
        "1f94b": [["🥋"], "", "", ["martial_arts_uniform"], 43, 23, 15, 0],
        "1f94c": [["🥌"], "", "", ["curling_stone"], 43, 24, 15, 0],
        "1f94d": [["🥍"], "", "", ["lacrosse"], 43, 25, 15, 0],
        "1f94e": [["🥎"], "", "", ["softball"], 43, 26, 15, 0],
        "1f94f": [["🥏"], "", "", ["flying_disc"], 43, 27, 15, 0],
        "1f950": [["🥐"], "", "", ["croissant"], 43, 28, 15, 0],
        "1f951": [["🥑"], "", "", ["avocado"], 43, 29, 15, 0],
        "1f952": [["🥒"], "", "", ["cucumber"], 43, 30, 15, 0],
        "1f953": [["🥓"], "", "", ["bacon"], 43, 31, 15, 0],
        "1f954": [["🥔"], "", "", ["potato"], 43, 32, 15, 0],
        "1f955": [["🥕"], "", "", ["carrot"], 43, 33, 15, 0],
        "1f956": [["🥖"], "", "", ["baguette_bread"], 43, 34, 15, 0],
        "1f957": [["🥗"], "", "", ["green_salad"], 43, 35, 15, 0],
        "1f958": [["🥘"], "", "", ["shallow_pan_of_food"], 43, 36, 15, 0],
        "1f959": [["🥙"], "", "", ["stuffed_flatbread"], 43, 37, 15, 0],
        "1f95a": [["🥚"], "", "", ["egg"], 43, 38, 15, 0],
        "1f95b": [["🥛"], "", "", ["glass_of_milk"], 43, 39, 15, 0],
        "1f95c": [["🥜"], "", "", ["peanuts"], 43, 40, 15, 0],
        "1f95d": [["🥝"], "", "", ["kiwifruit"], 43, 41, 15, 0],
        "1f95e": [["🥞"], "", "", ["pancakes"], 43, 42, 15, 0],
        "1f95f": [["🥟"], "", "", ["dumpling"], 43, 43, 15, 0],
        "1f960": [["🥠"], "", "", ["fortune_cookie"], 43, 44, 15, 0],
        "1f961": [["🥡"], "", "", ["takeout_box"], 43, 45, 15, 0],
        "1f962": [["🥢"], "", "", ["chopsticks"], 43, 46, 15, 0],
        "1f963": [["🥣"], "", "", ["bowl_with_spoon"], 43, 47, 15, 0],
        "1f964": [["🥤"], "", "", ["cup_with_straw"], 43, 48, 15, 0],
        "1f965": [["🥥"], "", "", ["coconut"], 43, 49, 15, 0],
        "1f966": [["🥦"], "", "", ["broccoli"], 43, 50, 15, 0],
        "1f967": [["🥧"], "", "", ["pie"], 43, 51, 15, 0],
        "1f968": [["🥨"], "", "", ["pretzel"], 43, 52, 15, 0],
        "1f969": [["🥩"], "", "", ["cut_of_meat"], 43, 53, 15, 0],
        "1f96a": [["🥪"], "", "", ["sandwich"], 43, 54, 15, 0],
        "1f96b": [["🥫"], "", "", ["canned_food"], 43, 55, 15, 0],
        "1f96c": [["🥬"], "", "", ["leafy_green"], 43, 56, 15, 0],
        "1f96d": [["🥭"], "", "", ["mango"], 43, 57, 15, 0],
        "1f96e": [["🥮"], "", "", ["moon_cake"], 43, 58, 15, 0],
        "1f96f": [["🥯"], "", "", ["bagel"], 43, 59, 15, 0],
        "1f970": [["🥰"], "", "", ["smiling_face_with_3_hearts"], 43, 60, 15, 0],
        "1f971": [["🥱"], "", "", ["yawning_face"], 44, 0, 15, 0],
        "1f972": [["🥲"], "", "", ["smiling_face_with_tear"], 44, 1, 15, 0],
        "1f973": [["🥳"], "", "", ["partying_face"], 44, 2, 15, 0],
        "1f974": [["🥴"], "", "", ["woozy_face"], 44, 3, 15, 0],
        "1f975": [["🥵"], "", "", ["hot_face"], 44, 4, 15, 0],
        "1f976": [["🥶"], "", "", ["cold_face"], 44, 5, 15, 0],
        "1f977": [["🥷"], "", "", ["ninja"], 44, 6, 15, 0],
        "1f978": [["🥸"], "", "", ["disguised_face"], 44, 12, 15, 0],
        "1f979": [["🥹"], "", "", ["face_holding_back_tears"], 44, 13, 15, 0],
        "1f97a": [["🥺"], "", "", ["pleading_face"], 44, 14, 15, 0],
        "1f97b": [["🥻"], "", "", ["sari"], 44, 15, 15, 0],
        "1f97c": [["🥼"], "", "", ["lab_coat"], 44, 16, 15, 0],
        "1f97d": [["🥽"], "", "", ["goggles"], 44, 17, 15, 0],
        "1f97e": [["🥾"], "", "", ["hiking_boot"], 44, 18, 15, 0],
        "1f97f": [["🥿"], "", "", ["womans_flat_shoe"], 44, 19, 15, 0],
        "1f980": [["🦀"], "", "", ["crab"], 44, 20, 15, 0],
        "1f981": [["🦁"], "", "", ["lion_face"], 44, 21, 15, 0],
        "1f982": [["🦂"], "", "", ["scorpion"], 44, 22, 15, 0],
        "1f983": [["🦃"], "", "", ["turkey"], 44, 23, 15, 0],
        "1f984": [["🦄"], "", "", ["unicorn_face"], 44, 24, 15, 0],
        "1f985": [["🦅"], "", "", ["eagle"], 44, 25, 15, 0],
        "1f986": [["🦆"], "", "", ["duck"], 44, 26, 15, 0],
        "1f987": [["🦇"], "", "", ["bat"], 44, 27, 15, 0],
        "1f988": [["🦈"], "", "", ["shark"], 44, 28, 15, 0],
        "1f989": [["🦉"], "", "", ["owl"], 44, 29, 15, 0],
        "1f98a": [["🦊"], "", "", ["fox_face"], 44, 30, 15, 0],
        "1f98b": [["🦋"], "", "", ["butterfly"], 44, 31, 15, 0],
        "1f98c": [["🦌"], "", "", ["deer"], 44, 32, 15, 0],
        "1f98d": [["🦍"], "", "", ["gorilla"], 44, 33, 15, 0],
        "1f98e": [["🦎"], "", "", ["lizard"], 44, 34, 15, 0],
        "1f98f": [["🦏"], "", "", ["rhinoceros"], 44, 35, 15, 0],
        "1f990": [["🦐"], "", "", ["shrimp"], 44, 36, 15, 0],
        "1f991": [["🦑"], "", "", ["squid"], 44, 37, 15, 0],
        "1f992": [["🦒"], "", "", ["giraffe_face"], 44, 38, 15, 0],
        "1f993": [["🦓"], "", "", ["zebra_face"], 44, 39, 15, 0],
        "1f994": [["🦔"], "", "", ["hedgehog"], 44, 40, 15, 0],
        "1f995": [["🦕"], "", "", ["sauropod"], 44, 41, 15, 0],
        "1f996": [["🦖"], "", "", ["t-rex"], 44, 42, 15, 0],
        "1f997": [["🦗"], "", "", ["cricket"], 44, 43, 15, 0],
        "1f998": [["🦘"], "", "", ["kangaroo"], 44, 44, 15, 0],
        "1f999": [["🦙"], "", "", ["llama"], 44, 45, 15, 0],
        "1f99a": [["🦚"], "", "", ["peacock"], 44, 46, 15, 0],
        "1f99b": [["🦛"], "", "", ["hippopotamus"], 44, 47, 15, 0],
        "1f99c": [["🦜"], "", "", ["parrot"], 44, 48, 15, 0],
        "1f99d": [["🦝"], "", "", ["raccoon"], 44, 49, 15, 0],
        "1f99e": [["🦞"], "", "", ["lobster"], 44, 50, 15, 0],
        "1f99f": [["🦟"], "", "", ["mosquito"], 44, 51, 15, 0],
        "1f9a0": [["🦠"], "", "", ["microbe"], 44, 52, 15, 0],
        "1f9a1": [["🦡"], "", "", ["badger"], 44, 53, 15, 0],
        "1f9a2": [["🦢"], "", "", ["swan"], 44, 54, 15, 0],
        "1f9a3": [["🦣"], "", "", ["mammoth"], 44, 55, 15, 0],
        "1f9a4": [["🦤"], "", "", ["dodo"], 44, 56, 15, 0],
        "1f9a5": [["🦥"], "", "", ["sloth"], 44, 57, 15, 0],
        "1f9a6": [["🦦"], "", "", ["otter"], 44, 58, 15, 0],
        "1f9a7": [["🦧"], "", "", ["orangutan"], 44, 59, 15, 0],
        "1f9a8": [["🦨"], "", "", ["skunk"], 44, 60, 15, 0],
        "1f9a9": [["🦩"], "", "", ["flamingo"], 45, 0, 15, 0],
        "1f9aa": [["🦪"], "", "", ["oyster"], 45, 1, 15, 0],
        "1f9ab": [["🦫"], "", "", ["beaver"], 45, 2, 15, 0],
        "1f9ac": [["🦬"], "", "", ["bison"], 45, 3, 15, 0],
        "1f9ad": [["🦭"], "", "", ["seal"], 45, 4, 15, 0],
        "1f9ae": [["🦮"], "", "", ["guide_dog"], 45, 5, 15, 0],
        "1f9af": [["🦯"], "", "", ["probing_cane"], 45, 6, 15, 0],
        "1f9b4": [["🦴"], "", "", ["bone"], 45, 7, 15, 0],
        "1f9b5": [["🦵"], "", "", ["leg"], 45, 8, 15, 0],
        "1f9b6": [["🦶"], "", "", ["foot"], 45, 14, 15, 0],
        "1f9b7": [["🦷"], "", "", ["tooth"], 45, 20, 15, 0],
        "1f9b8-200d-2640-fe0f": [["🦸‍♀️", "🦸‍♀"], "", "", ["female_superhero"], 45, 21, 15, 0],
        "1f9b8-200d-2642-fe0f": [["🦸‍♂️", "🦸‍♂"], "", "", ["male_superhero"], 45, 27, 15, 0],
        "1f9b8": [["🦸"], "", "", ["superhero"], 45, 33, 15, 0],
        "1f9b9-200d-2640-fe0f": [["🦹‍♀️", "🦹‍♀"], "", "", ["female_supervillain"], 45, 39, 15, 0],
        "1f9b9-200d-2642-fe0f": [["🦹‍♂️", "🦹‍♂"], "", "", ["male_supervillain"], 45, 45, 15, 0],
        "1f9b9": [["🦹"], "", "", ["supervillain"], 45, 51, 15, 0],
        "1f9ba": [["🦺"], "", "", ["safety_vest"], 45, 57, 15, 0],
        "1f9bb": [["🦻"], "", "", ["ear_with_hearing_aid"], 45, 58, 15, 0],
        "1f9bc": [["🦼"], "", "", ["motorized_wheelchair"], 46, 3, 15, 0],
        "1f9bd": [["🦽"], "", "", ["manual_wheelchair"], 46, 4, 15, 0],
        "1f9be": [["🦾"], "", "", ["mechanical_arm"], 46, 5, 15, 0],
        "1f9bf": [["🦿"], "", "", ["mechanical_leg"], 46, 6, 15, 0],
        "1f9c0": [["🧀"], "", "", ["cheese_wedge"], 46, 7, 15, 0],
        "1f9c1": [["🧁"], "", "", ["cupcake"], 46, 8, 15, 0],
        "1f9c2": [["🧂"], "", "", ["salt"], 46, 9, 15, 0],
        "1f9c3": [["🧃"], "", "", ["beverage_box"], 46, 10, 15, 0],
        "1f9c4": [["🧄"], "", "", ["garlic"], 46, 11, 15, 0],
        "1f9c5": [["🧅"], "", "", ["onion"], 46, 12, 15, 0],
        "1f9c6": [["🧆"], "", "", ["falafel"], 46, 13, 15, 0],
        "1f9c7": [["🧇"], "", "", ["waffle"], 46, 14, 15, 0],
        "1f9c8": [["🧈"], "", "", ["butter"], 46, 15, 15, 0],
        "1f9c9": [["🧉"], "", "", ["mate_drink"], 46, 16, 15, 0],
        "1f9ca": [["🧊"], "", "", ["ice_cube"], 46, 17, 15, 0],
        "1f9cb": [["🧋"], "", "", ["bubble_tea"], 46, 18, 15, 0],
        "1f9cc": [["🧌"], "", "", ["troll"], 46, 19, 15, 0],
        "1f9cd-200d-2640-fe0f": [["🧍‍♀️", "🧍‍♀"], "", "", ["woman_standing"], 46, 20, 15, 0],
        "1f9cd-200d-2642-fe0f": [["🧍‍♂️", "🧍‍♂"], "", "", ["man_standing"], 46, 26, 15, 0],
        "1f9cd": [["🧍"], "", "", ["standing_person"], 46, 32, 15, 0],
        "1f9ce-200d-2640-fe0f": [["🧎‍♀️", "🧎‍♀"], "", "", ["woman_kneeling"], 46, 38, 15, 0],
        "1f9ce-200d-2642-fe0f": [["🧎‍♂️", "🧎‍♂"], "", "", ["man_kneeling"], 46, 44, 15, 0],
        "1f9ce": [["🧎"], "", "", ["kneeling_person"], 46, 50, 15, 0],
        "1f9cf-200d-2640-fe0f": [["🧏‍♀️", "🧏‍♀"], "", "", ["deaf_woman"], 46, 56, 15, 0],
        "1f9cf-200d-2642-fe0f": [["🧏‍♂️", "🧏‍♂"], "", "", ["deaf_man"], 47, 1, 15, 0],
        "1f9cf": [["🧏"], "", "", ["deaf_person"], 47, 7, 15, 0],
        "1f9d0": [["🧐"], "", "", ["face_with_monocle"], 47, 13, 15, 0],
        "1f9d1-200d-1f33e": [["🧑‍🌾"], "", "", ["farmer"], 47, 14, 15, 0],
        "1f9d1-200d-1f373": [["🧑‍🍳"], "", "", ["cook"], 47, 20, 15, 0],
        "1f9d1-200d-1f37c": [["🧑‍🍼"], "", "", ["person_feeding_baby"], 47, 26, 15, 0],
        "1f9d1-200d-1f384": [["🧑‍🎄"], "", "", ["mx_claus"], 47, 32, 15, 0],
        "1f9d1-200d-1f393": [["🧑‍🎓"], "", "", ["student"], 47, 38, 15, 0],
        "1f9d1-200d-1f3a4": [["🧑‍🎤"], "", "", ["singer"], 47, 44, 15, 0],
        "1f9d1-200d-1f3a8": [["🧑‍🎨"], "", "", ["artist"], 47, 50, 15, 0],
        "1f9d1-200d-1f3eb": [["🧑‍🏫"], "", "", ["teacher"], 47, 56, 15, 0],
        "1f9d1-200d-1f3ed": [["🧑‍🏭"], "", "", ["factory_worker"], 48, 1, 15, 0],
        "1f9d1-200d-1f4bb": [["🧑‍💻"], "", "", ["technologist"], 48, 7, 15, 0],
        "1f9d1-200d-1f4bc": [["🧑‍💼"], "", "", ["office_worker"], 48, 13, 15, 0],
        "1f9d1-200d-1f527": [["🧑‍🔧"], "", "", ["mechanic"], 48, 19, 15, 0],
        "1f9d1-200d-1f52c": [["🧑‍🔬"], "", "", ["scientist"], 48, 25, 15, 0],
        "1f9d1-200d-1f680": [["🧑‍🚀"], "", "", ["astronaut"], 48, 31, 15, 0],
        "1f9d1-200d-1f692": [["🧑‍🚒"], "", "", ["firefighter"], 48, 37, 15, 0],
        "1f9d1-200d-1f91d-200d-1f9d1": [["🧑‍🤝‍🧑"], "", "", ["people_holding_hands"], 48, 43, 15, 0],
        "1f9d1-200d-1f9af": [["🧑‍🦯"], "", "", ["person_with_probing_cane"], 49, 8, 15, 0],
        "1f9d1-200d-1f9b0": [["🧑‍🦰"], "", "", ["red_haired_person"], 49, 14, 15, 0],
        "1f9d1-200d-1f9b1": [["🧑‍🦱"], "", "", ["curly_haired_person"], 49, 20, 15, 0],
        "1f9d1-200d-1f9b2": [["🧑‍🦲"], "", "", ["bald_person"], 49, 26, 15, 0],
        "1f9d1-200d-1f9b3": [["🧑‍🦳"], "", "", ["white_haired_person"], 49, 32, 15, 0],
        "1f9d1-200d-1f9bc": [["🧑‍🦼"], "", "", ["person_in_motorized_wheelchair"], 49, 38, 15, 0],
        "1f9d1-200d-1f9bd": [["🧑‍🦽"], "", "", ["person_in_manual_wheelchair"], 49, 44, 15, 0],
        "1f9d1-200d-2695-fe0f": [["🧑‍⚕️", "🧑‍⚕"], "", "", ["health_worker"], 49, 50, 15, 0],
        "1f9d1-200d-2696-fe0f": [["🧑‍⚖️", "🧑‍⚖"], "", "", ["judge"], 49, 56, 15, 0],
        "1f9d1-200d-2708-fe0f": [["🧑‍✈️", "🧑‍✈"], "", "", ["pilot"], 50, 1, 15, 0],
        "1f9d1": [["🧑"], "", "", ["adult"], 50, 7, 15, 0],
        "1f9d2": [["🧒"], "", "", ["child"], 50, 13, 15, 0],
        "1f9d3": [["🧓"], "", "", ["older_adult"], 50, 19, 15, 0],
        "1f9d4-200d-2640-fe0f": [["🧔‍♀️", "🧔‍♀"], "", "", ["woman_with_beard"], 50, 25, 15, 0],
        "1f9d4-200d-2642-fe0f": [["🧔‍♂️", "🧔‍♂"], "", "", ["man_with_beard"], 50, 31, 15, 0],
        "1f9d4": [["🧔"], "", "", ["bearded_person"], 50, 37, 15, 0],
        "1f9d5": [["🧕"], "", "", ["person_with_headscarf"], 50, 43, 15, 0],
        "1f9d6-200d-2640-fe0f": [["🧖‍♀️", "🧖‍♀"], "", "", ["woman_in_steamy_room"], 50, 49, 15, 0],
        "1f9d6-200d-2642-fe0f": [["🧖‍♂️", "🧖‍♂", "🧖"], "", "", ["man_in_steamy_room", "person_in_steamy_room"], 50, 55, 15, 0],
        "1f9d7-200d-2640-fe0f": [["🧗‍♀️", "🧗‍♀", "🧗"], "", "", ["woman_climbing", "person_climbing"], 51, 6, 15, 0],
        "1f9d7-200d-2642-fe0f": [["🧗‍♂️", "🧗‍♂"], "", "", ["man_climbing"], 51, 12, 15, 0],
        "1f9d8-200d-2640-fe0f": [["🧘‍♀️", "🧘‍♀", "🧘"], "", "", ["woman_in_lotus_position", "person_in_lotus_position"], 51, 24, 15, 0],
        "1f9d8-200d-2642-fe0f": [["🧘‍♂️", "🧘‍♂"], "", "", ["man_in_lotus_position"], 51, 30, 15, 0],
        "1f9d9-200d-2640-fe0f": [["🧙‍♀️", "🧙‍♀", "🧙"], "", "", ["female_mage", "mage"], 51, 42, 15, 0],
        "1f9d9-200d-2642-fe0f": [["🧙‍♂️", "🧙‍♂"], "", "", ["male_mage"], 51, 48, 15, 0],
        "1f9da-200d-2640-fe0f": [["🧚‍♀️", "🧚‍♀", "🧚"], "", "", ["female_fairy", "fairy"], 51, 60, 15, 0],
        "1f9da-200d-2642-fe0f": [["🧚‍♂️", "🧚‍♂"], "", "", ["male_fairy"], 52, 5, 15, 0],
        "1f9db-200d-2640-fe0f": [["🧛‍♀️", "🧛‍♀", "🧛"], "", "", ["female_vampire", "vampire"], 52, 17, 15, 0],
        "1f9db-200d-2642-fe0f": [["🧛‍♂️", "🧛‍♂"], "", "", ["male_vampire"], 52, 23, 15, 0],
        "1f9dc-200d-2640-fe0f": [["🧜‍♀️", "🧜‍♀"], "", "", ["mermaid"], 52, 35, 15, 0],
        "1f9dc-200d-2642-fe0f": [["🧜‍♂️", "🧜‍♂", "🧜"], "", "", ["merman", "merperson"], 52, 41, 15, 0],
        "1f9dd-200d-2640-fe0f": [["🧝‍♀️", "🧝‍♀"], "", "", ["female_elf"], 52, 53, 15, 0],
        "1f9dd-200d-2642-fe0f": [["🧝‍♂️", "🧝‍♂", "🧝"], "", "", ["male_elf", "elf"], 52, 59, 15, 0],
        "1f9de-200d-2640-fe0f": [["🧞‍♀️", "🧞‍♀"], "", "", ["female_genie"], 53, 10, 15, 0],
        "1f9de-200d-2642-fe0f": [["🧞‍♂️", "🧞‍♂", "🧞"], "", "", ["male_genie", "genie"], 53, 11, 15, 0],
        "1f9df-200d-2640-fe0f": [["🧟‍♀️", "🧟‍♀"], "", "", ["female_zombie"], 53, 13, 15, 0],
        "1f9df-200d-2642-fe0f": [["🧟‍♂️", "🧟‍♂", "🧟"], "", "", ["male_zombie", "zombie"], 53, 14, 15, 0],
        "1f9e0": [["🧠"], "", "", ["brain"], 53, 16, 15, 0],
        "1f9e1": [["🧡"], "", "", ["orange_heart"], 53, 17, 15, 0],
        "1f9e2": [["🧢"], "", "", ["billed_cap"], 53, 18, 15, 0],
        "1f9e3": [["🧣"], "", "", ["scarf"], 53, 19, 15, 0],
        "1f9e4": [["🧤"], "", "", ["gloves"], 53, 20, 15, 0],
        "1f9e5": [["🧥"], "", "", ["coat"], 53, 21, 15, 0],
        "1f9e6": [["🧦"], "", "", ["socks"], 53, 22, 15, 0],
        "1f9e7": [["🧧"], "", "", ["red_envelope"], 53, 23, 15, 0],
        "1f9e8": [["🧨"], "", "", ["firecracker"], 53, 24, 15, 0],
        "1f9e9": [["🧩"], "", "", ["jigsaw"], 53, 25, 15, 0],
        "1f9ea": [["🧪"], "", "", ["test_tube"], 53, 26, 15, 0],
        "1f9eb": [["🧫"], "", "", ["petri_dish"], 53, 27, 15, 0],
        "1f9ec": [["🧬"], "", "", ["dna"], 53, 28, 15, 0],
        "1f9ed": [["🧭"], "", "", ["compass"], 53, 29, 15, 0],
        "1f9ee": [["🧮"], "", "", ["abacus"], 53, 30, 15, 0],
        "1f9ef": [["🧯"], "", "", ["fire_extinguisher"], 53, 31, 15, 0],
        "1f9f0": [["🧰"], "", "", ["toolbox"], 53, 32, 15, 0],
        "1f9f1": [["🧱"], "", "", ["bricks"], 53, 33, 15, 0],
        "1f9f2": [["🧲"], "", "", ["magnet"], 53, 34, 15, 0],
        "1f9f3": [["🧳"], "", "", ["luggage"], 53, 35, 15, 0],
        "1f9f4": [["🧴"], "", "", ["lotion_bottle"], 53, 36, 15, 0],
        "1f9f5": [["🧵"], "", "", ["thread"], 53, 37, 15, 0],
        "1f9f6": [["🧶"], "", "", ["yarn"], 53, 38, 15, 0],
        "1f9f7": [["🧷"], "", "", ["safety_pin"], 53, 39, 15, 0],
        "1f9f8": [["🧸"], "", "", ["teddy_bear"], 53, 40, 15, 0],
        "1f9f9": [["🧹"], "", "", ["broom"], 53, 41, 15, 0],
        "1f9fa": [["🧺"], "", "", ["basket"], 53, 42, 15, 0],
        "1f9fb": [["🧻"], "", "", ["roll_of_paper"], 53, 43, 15, 0],
        "1f9fc": [["🧼"], "", "", ["soap"], 53, 44, 15, 0],
        "1f9fd": [["🧽"], "", "", ["sponge"], 53, 45, 15, 0],
        "1f9fe": [["🧾"], "", "", ["receipt"], 53, 46, 15, 0],
        "1f9ff": [["🧿"], "", "", ["nazar_amulet"], 53, 47, 15, 0],
        "1fa70": [["🩰"], "", "", ["ballet_shoes"], 53, 48, 15, 0],
        "1fa71": [["🩱"], "", "", ["one-piece_swimsuit"], 53, 49, 15, 0],
        "1fa72": [["🩲"], "", "", ["briefs"], 53, 50, 15, 0],
        "1fa73": [["🩳"], "", "", ["shorts"], 53, 51, 15, 0],
        "1fa74": [["🩴"], "", "", ["thong_sandal"], 53, 52, 15, 0],
        "1fa75": [["🩵"], "", "", ["light_blue_heart"], 53, 53, 3, 0],
        "1fa76": [["🩶"], "", "", ["grey_heart"], 53, 54, 3, 0],
        "1fa77": [["🩷"], "", "", ["pink_heart"], 53, 55, 3, 0],
        "1fa78": [["🩸"], "", "", ["drop_of_blood"], 53, 56, 15, 0],
        "1fa79": [["🩹"], "", "", ["adhesive_bandage"], 53, 57, 15, 0],
        "1fa7a": [["🩺"], "", "", ["stethoscope"], 53, 58, 15, 0],
        "1fa7b": [["🩻"], "", "", ["x-ray"], 53, 59, 15, 0],
        "1fa7c": [["🩼"], "", "", ["crutch"], 53, 60, 15, 0],
        "1fa80": [["🪀"], "", "", ["yo-yo"], 54, 0, 15, 0],
        "1fa81": [["🪁"], "", "", ["kite"], 54, 1, 15, 0],
        "1fa82": [["🪂"], "", "", ["parachute"], 54, 2, 15, 0],
        "1fa83": [["🪃"], "", "", ["boomerang"], 54, 3, 15, 0],
        "1fa84": [["🪄"], "", "", ["magic_wand"], 54, 4, 15, 0],
        "1fa85": [["🪅"], "", "", ["pinata"], 54, 5, 15, 0],
        "1fa86": [["🪆"], "", "", ["nesting_dolls"], 54, 6, 15, 0],
        "1fa87": [["🪇"], "", "", ["maracas"], 54, 7, 3, 0],
        "1fa88": [["🪈"], "", "", ["flute"], 54, 8, 3, 0],
        "1fa90": [["🪐"], "", "", ["ringed_planet"], 54, 9, 15, 0],
        "1fa91": [["🪑"], "", "", ["chair"], 54, 10, 15, 0],
        "1fa92": [["🪒"], "", "", ["razor"], 54, 11, 15, 0],
        "1fa93": [["🪓"], "", "", ["axe"], 54, 12, 15, 0],
        "1fa94": [["🪔"], "", "", ["diya_lamp"], 54, 13, 15, 0],
        "1fa95": [["🪕"], "", "", ["banjo"], 54, 14, 15, 0],
        "1fa96": [["🪖"], "", "", ["military_helmet"], 54, 15, 15, 0],
        "1fa97": [["🪗"], "", "", ["accordion"], 54, 16, 15, 0],
        "1fa98": [["🪘"], "", "", ["long_drum"], 54, 17, 15, 0],
        "1fa99": [["🪙"], "", "", ["coin"], 54, 18, 15, 0],
        "1fa9a": [["🪚"], "", "", ["carpentry_saw"], 54, 19, 15, 0],
        "1fa9b": [["🪛"], "", "", ["screwdriver"], 54, 20, 15, 0],
        "1fa9c": [["🪜"], "", "", ["ladder"], 54, 21, 15, 0],
        "1fa9d": [["🪝"], "", "", ["hook"], 54, 22, 15, 0],
        "1fa9e": [["🪞"], "", "", ["mirror"], 54, 23, 15, 0],
        "1fa9f": [["🪟"], "", "", ["window"], 54, 24, 15, 0],
        "1faa0": [["🪠"], "", "", ["plunger"], 54, 25, 15, 0],
        "1faa1": [["🪡"], "", "", ["sewing_needle"], 54, 26, 15, 0],
        "1faa2": [["🪢"], "", "", ["knot"], 54, 27, 15, 0],
        "1faa3": [["🪣"], "", "", ["bucket"], 54, 28, 15, 0],
        "1faa4": [["🪤"], "", "", ["mouse_trap"], 54, 29, 15, 0],
        "1faa5": [["🪥"], "", "", ["toothbrush"], 54, 30, 15, 0],
        "1faa6": [["🪦"], "", "", ["headstone"], 54, 31, 15, 0],
        "1faa7": [["🪧"], "", "", ["placard"], 54, 32, 15, 0],
        "1faa8": [["🪨"], "", "", ["rock"], 54, 33, 15, 0],
        "1faa9": [["🪩"], "", "", ["mirror_ball"], 54, 34, 15, 0],
        "1faaa": [["🪪"], "", "", ["identification_card"], 54, 35, 15, 0],
        "1faab": [["🪫"], "", "", ["low_battery"], 54, 36, 15, 0],
        "1faac": [["🪬"], "", "", ["hamsa"], 54, 37, 15, 0],
        "1faad": [["🪭"], "", "", ["folding_hand_fan"], 54, 38, 3, 0],
        "1faae": [["🪮"], "", "", ["hair_pick"], 54, 39, 3, 0],
        "1faaf": [["🪯"], "", "", ["khanda"], 54, 40, 3, 0],
        "1fab0": [["🪰"], "", "", ["fly"], 54, 41, 15, 0],
        "1fab1": [["🪱"], "", "", ["worm"], 54, 42, 15, 0],
        "1fab2": [["🪲"], "", "", ["beetle"], 54, 43, 15, 0],
        "1fab3": [["🪳"], "", "", ["cockroach"], 54, 44, 15, 0],
        "1fab4": [["🪴"], "", "", ["potted_plant"], 54, 45, 15, 0],
        "1fab5": [["🪵"], "", "", ["wood"], 54, 46, 15, 0],
        "1fab6": [["🪶"], "", "", ["feather"], 54, 47, 15, 0],
        "1fab7": [["🪷"], "", "", ["lotus"], 54, 48, 15, 0],
        "1fab8": [["🪸"], "", "", ["coral"], 54, 49, 15, 0],
        "1fab9": [["🪹"], "", "", ["empty_nest"], 54, 50, 15, 0],
        "1faba": [["🪺"], "", "", ["nest_with_eggs"], 54, 51, 15, 0],
        "1fabb": [["🪻"], "", "", ["hyacinth"], 54, 52, 3, 0],
        "1fabc": [["🪼"], "", "", ["jellyfish"], 54, 53, 3, 0],
        "1fabd": [["🪽"], "", "", ["wing"], 54, 54, 3, 0],
        "1fabf": [["🪿"], "", "", ["goose"], 54, 55, 3, 0],
        "1fac0": [["🫀"], "", "", ["anatomical_heart"], 54, 56, 15, 0],
        "1fac1": [["🫁"], "", "", ["lungs"], 54, 57, 15, 0],
        "1fac2": [["🫂"], "", "", ["people_hugging"], 54, 58, 15, 0],
        "1fac3": [["🫃"], "", "", ["pregnant_man"], 54, 59, 15, 0],
        "1fac4": [["🫄"], "", "", ["pregnant_person"], 55, 4, 15, 0],
        "1fac5": [["🫅"], "", "", ["person_with_crown"], 55, 10, 15, 0],
        "1face": [["🫎"], "", "", ["moose"], 55, 16, 3, 0],
        "1facf": [["🫏"], "", "", ["donkey"], 55, 17, 3, 0],
        "1fad0": [["🫐"], "", "", ["blueberries"], 55, 18, 15, 0],
        "1fad1": [["🫑"], "", "", ["bell_pepper"], 55, 19, 15, 0],
        "1fad2": [["🫒"], "", "", ["olive"], 55, 20, 15, 0],
        "1fad3": [["🫓"], "", "", ["flatbread"], 55, 21, 15, 0],
        "1fad4": [["🫔"], "", "", ["tamale"], 55, 22, 15, 0],
        "1fad5": [["🫕"], "", "", ["fondue"], 55, 23, 15, 0],
        "1fad6": [["🫖"], "", "", ["teapot"], 55, 24, 15, 0],
        "1fad7": [["🫗"], "", "", ["pouring_liquid"], 55, 25, 15, 0],
        "1fad8": [["🫘"], "", "", ["beans"], 55, 26, 15, 0],
        "1fad9": [["🫙"], "", "", ["jar"], 55, 27, 15, 0],
        "1fada": [["🫚"], "", "", ["ginger_root"], 55, 28, 3, 0],
        "1fadb": [["🫛"], "", "", ["pea_pod"], 55, 29, 3, 0],
        "1fae0": [["🫠"], "", "", ["melting_face"], 55, 30, 15, 0],
        "1fae1": [["🫡"], "", "", ["saluting_face"], 55, 31, 15, 0],
        "1fae2": [["🫢"], "", "", ["face_with_open_eyes_and_hand_over_mouth"], 55, 32, 15, 0],
        "1fae3": [["🫣"], "", "", ["face_with_peeking_eye"], 55, 33, 15, 0],
        "1fae4": [["🫤"], "", "", ["face_with_diagonal_mouth"], 55, 34, 15, 0],
        "1fae5": [["🫥"], "", "", ["dotted_line_face"], 55, 35, 15, 0],
        "1fae6": [["🫦"], "", "", ["biting_lip"], 55, 36, 15, 0],
        "1fae7": [["🫧"], "", "", ["bubbles"], 55, 37, 15, 0],
        "1fae8": [["🫨"], "", "", ["shaking_face"], 55, 38, 3, 0],
        "1faf0": [["🫰"], "", "", ["hand_with_index_finger_and_thumb_crossed"], 55, 39, 15, 0],
        "1faf1": [["🫱"], "", "", ["rightwards_hand"], 55, 45, 15, 0],
        "1faf2": [["🫲"], "", "", ["leftwards_hand"], 55, 51, 15, 0],
        "1faf3": [["🫳"], "", "", ["palm_down_hand"], 55, 57, 15, 0],
        "1faf4": [["🫴"], "", "", ["palm_up_hand"], 56, 2, 15, 0],
        "1faf5": [["🫵"], "", "", ["index_pointing_at_the_viewer"], 56, 8, 15, 0],
        "1faf6": [["🫶"], "", "", ["heart_hands"], 56, 14, 15, 0],
        "1faf7": [["🫷"], "", "", ["leftwards_pushing_hand"], 56, 20, 3, 0],
        "1faf8": [["🫸"], "", "", ["rightwards_pushing_hand"], 56, 26, 3, 0],
        "203c-fe0f": [["‼️", "‼"], "", "󾬆", ["bangbang"], 56, 32, 15, 0],
        "2049-fe0f": [["⁉️", "⁉"], "", "󾬅", ["interrobang"], 56, 33, 15, 0],
        "2122-fe0f": [["™️", "™"], "", "󾬪", ["tm"], 56, 34, 15, 0],
        "2139-fe0f": [["ℹ️", "ℹ"], "", "󾭇", ["information_source"], 56, 35, 15, 0],
        "2194-fe0f": [["↔️", "↔"], "", "󾫶", ["left_right_arrow"], 56, 36, 15, 0],
        "2195-fe0f": [["↕️", "↕"], "", "󾫷", ["arrow_up_down"], 56, 37, 15, 0],
        "2196-fe0f": [["↖️", "↖"], "", "󾫲", ["arrow_upper_left"], 56, 38, 15, 0],
        "2197-fe0f": [["↗️", "↗"], "", "󾫰", ["arrow_upper_right"], 56, 39, 15, 0],
        "2198-fe0f": [["↘️", "↘"], "", "󾫱", ["arrow_lower_right"], 56, 40, 15, 0],
        "2199-fe0f": [["↙️", "↙"], "", "󾫳", ["arrow_lower_left"], 56, 41, 15, 0],
        "21a9-fe0f": [["↩️", "↩"], "", "󾮃", ["leftwards_arrow_with_hook"], 56, 42, 15, 0],
        "21aa-fe0f": [["↪️", "↪"], "", "󾮈", ["arrow_right_hook"], 56, 43, 15, 0],
        "231a": [["⌚"], "", "󾀝", ["watch"], 56, 44, 15, 0],
        "231b": [["⌛"], "", "󾀜", ["hourglass"], 56, 45, 15, 0],
        "2328-fe0f": [["⌨️", "⌨"], "", "", ["keyboard"], 56, 46, 15, 0],
        "23cf-fe0f": [["⏏️", "⏏"], "", "", ["eject"], 56, 47, 15, 0],
        "23e9": [["⏩"], "", "󾫾", ["fast_forward"], 56, 48, 15, 0],
        "23ea": [["⏪"], "", "󾫿", ["rewind"], 56, 49, 15, 0],
        "23eb": [["⏫"], "", "󾬃", ["arrow_double_up"], 56, 50, 15, 0],
        "23ec": [["⏬"], "", "󾬂", ["arrow_double_down"], 56, 51, 15, 0],
        "23ed-fe0f": [["⏭️", "⏭"], "", "", ["black_right_pointing_double_triangle_with_vertical_bar"], 56, 52, 15, 0],
        "23ee-fe0f": [["⏮️", "⏮"], "", "", ["black_left_pointing_double_triangle_with_vertical_bar"], 56, 53, 15, 0],
        "23ef-fe0f": [["⏯️", "⏯"], "", "", ["black_right_pointing_triangle_with_double_vertical_bar"], 56, 54, 15, 0],
        "23f0": [["⏰"], "", "󾀪", ["alarm_clock"], 56, 55, 15, 0],
        "23f1-fe0f": [["⏱️", "⏱"], "", "", ["stopwatch"], 56, 56, 15, 0],
        "23f2-fe0f": [["⏲️", "⏲"], "", "", ["timer_clock"], 56, 57, 15, 0],
        "23f3": [["⏳"], "", "󾀛", ["hourglass_flowing_sand"], 56, 58, 15, 0],
        "23f8-fe0f": [["⏸️", "⏸"], "", "", ["double_vertical_bar"], 56, 59, 15, 0],
        "23f9-fe0f": [["⏹️", "⏹"], "", "", ["black_square_for_stop"], 56, 60, 15, 0],
        "23fa-fe0f": [["⏺️", "⏺"], "", "", ["black_circle_for_record"], 57, 0, 15, 0],
        "24c2-fe0f": [["Ⓜ️", "Ⓜ"], "", "󾟡", ["m"], 57, 1, 15, 0],
        "25aa-fe0f": [["▪️", "▪"], "", "󾭮", ["black_small_square"], 57, 2, 15, 0],
        "25ab-fe0f": [["▫️", "▫"], "", "󾭭", ["white_small_square"], 57, 3, 15, 0],
        "25b6-fe0f": [["▶️", "▶"], "", "󾫼", ["arrow_forward"], 57, 4, 15, 0],
        "25c0-fe0f": [["◀️", "◀"], "", "󾫽", ["arrow_backward"], 57, 5, 15, 0],
        "25fb-fe0f": [["◻️", "◻"], "", "󾭱", ["white_medium_square"], 57, 6, 15, 0],
        "25fc-fe0f": [["◼️", "◼"], "", "󾭲", ["black_medium_square"], 57, 7, 15, 0],
        "25fd": [["◽"], "", "󾭯", ["white_medium_small_square"], 57, 8, 15, 0],
        "25fe": [["◾"], "", "󾭰", ["black_medium_small_square"], 57, 9, 15, 0],
        "2600-fe0f": [["☀️", "☀"], "", "󾀀", ["sunny"], 57, 10, 15, 0],
        "2601-fe0f": [["☁️", "☁"], "", "󾀁", ["cloud"], 57, 11, 15, 0],
        "2602-fe0f": [["☂️", "☂"], "", "", ["umbrella"], 57, 12, 15, 0],
        "2603-fe0f": [["☃️", "☃"], "", "", ["snowman"], 57, 13, 15, 0],
        "2604-fe0f": [["☄️", "☄"], "", "", ["comet"], 57, 14, 15, 0],
        "260e-fe0f": [["☎️", "☎"], "", "󾔣", ["phone", "telephone"], 57, 15, 15, 0],
        "2611-fe0f": [["☑️", "☑"], "", "󾮋", ["ballot_box_with_check"], 57, 16, 15, 0],
        2614: [["☔"], "", "󾀂", ["umbrella_with_rain_drops"], 57, 17, 15, 0],
        2615: [["☕"], "", "󾦁", ["coffee"], 57, 18, 15, 0],
        "2618-fe0f": [["☘️", "☘"], "", "", ["shamrock"], 57, 19, 15, 0],
        "261d-fe0f": [["☝️", "☝"], "", "󾮘", ["point_up"], 57, 20, 15, 0],
        "2620-fe0f": [["☠️", "☠"], "", "", ["skull_and_crossbones"], 57, 26, 15, 0],
        "2622-fe0f": [["☢️", "☢"], "", "", ["radioactive_sign"], 57, 27, 15, 0],
        "2623-fe0f": [["☣️", "☣"], "", "", ["biohazard_sign"], 57, 28, 15, 0],
        "2626-fe0f": [["☦️", "☦"], "", "", ["orthodox_cross"], 57, 29, 15, 0],
        "262a-fe0f": [["☪️", "☪"], "", "", ["star_and_crescent"], 57, 30, 15, 0],
        "262e-fe0f": [["☮️", "☮"], "", "", ["peace_symbol"], 57, 31, 15, 0],
        "262f-fe0f": [["☯️", "☯"], "", "", ["yin_yang"], 57, 32, 15, 0],
        "2638-fe0f": [["☸️", "☸"], "", "", ["wheel_of_dharma"], 57, 33, 15, 0],
        "2639-fe0f": [["☹️", "☹"], "", "", ["white_frowning_face"], 57, 34, 15, 0],
        "263a-fe0f": [["☺️", "☺"], "", "󾌶", ["relaxed"], 57, 35, 15, 0],
        "2640-fe0f": [["♀️", "♀"], "", "", ["female_sign"], 57, 36, 14, 0],
        "2642-fe0f": [["♂️", "♂"], "", "", ["male_sign"], 57, 37, 14, 0],
        2648: [["♈"], "", "󾀫", ["aries"], 57, 38, 15, 0],
        2649: [["♉"], "", "󾀬", ["taurus"], 57, 39, 15, 0],
        "264a": [["♊"], "", "󾀭", ["gemini"], 57, 40, 15, 0],
        "264b": [["♋"], "", "󾀮", ["cancer"], 57, 41, 15, 0],
        "264c": [["♌"], "", "󾀯", ["leo"], 57, 42, 15, 0],
        "264d": [["♍"], "", "󾀰", ["virgo"], 57, 43, 15, 0],
        "264e": [["♎"], "", "󾀱", ["libra"], 57, 44, 15, 0],
        "264f": [["♏"], "", "󾀲", ["scorpius"], 57, 45, 15, 0],
        2650: [["♐"], "", "󾀳", ["sagittarius"], 57, 46, 15, 0],
        2651: [["♑"], "", "󾀴", ["capricorn"], 57, 47, 15, 0],
        2652: [["♒"], "", "󾀵", ["aquarius"], 57, 48, 15, 0],
        2653: [["♓"], "", "󾀶", ["pisces"], 57, 49, 15, 0],
        "265f-fe0f": [["♟️", "♟"], "", "", ["chess_pawn"], 57, 50, 15, 0],
        "2660-fe0f": [["♠️", "♠"], "", "󾬛", ["spades"], 57, 51, 15, 0],
        "2663-fe0f": [["♣️", "♣"], "", "󾬝", ["clubs"], 57, 52, 15, 0],
        "2665-fe0f": [["♥️", "♥"], "", "󾬚", ["hearts"], 57, 53, 15, 0],
        "2666-fe0f": [["♦️", "♦"], "", "󾬜", ["diamonds"], 57, 54, 15, 0],
        "2668-fe0f": [["♨️", "♨"], "", "󾟺", ["hotsprings"], 57, 55, 15, 0],
        "267b-fe0f": [["♻️", "♻"], "", "󾬬", ["recycle"], 57, 56, 15, 0],
        "267e-fe0f": [["♾️", "♾"], "", "", ["infinity"], 57, 57, 15, 0],
        "267f": [["♿"], "", "󾬠", ["wheelchair"], 57, 58, 15, 0],
        "2692-fe0f": [["⚒️", "⚒"], "", "", ["hammer_and_pick"], 57, 59, 15, 0],
        2693: [["⚓"], "", "󾓁", ["anchor"], 57, 60, 15, 0],
        "2694-fe0f": [["⚔️", "⚔"], "", "", ["crossed_swords"], 58, 0, 15, 0],
        "2695-fe0f": [["⚕️", "⚕"], "", "", ["medical_symbol", "staff_of_aesculapius"], 58, 1, 14, 0],
        "2696-fe0f": [["⚖️", "⚖"], "", "", ["scales"], 58, 2, 15, 0],
        "2697-fe0f": [["⚗️", "⚗"], "", "", ["alembic"], 58, 3, 15, 0],
        "2699-fe0f": [["⚙️", "⚙"], "", "", ["gear"], 58, 4, 15, 0],
        "269b-fe0f": [["⚛️", "⚛"], "", "", ["atom_symbol"], 58, 5, 15, 0],
        "269c-fe0f": [["⚜️", "⚜"], "", "", ["fleur_de_lis"], 58, 6, 15, 0],
        "26a0-fe0f": [["⚠️", "⚠"], "", "󾬣", ["warning"], 58, 7, 15, 0],
        "26a1": [["⚡"], "", "󾀄", ["zap"], 58, 8, 15, 0],
        "26a7-fe0f": [["⚧️", "⚧"], "", "", ["transgender_symbol"], 58, 9, 15, 0],
        "26aa": [["⚪"], "", "󾭥", ["white_circle"], 58, 10, 15, 0],
        "26ab": [["⚫"], "", "󾭦", ["black_circle"], 58, 11, 15, 0],
        "26b0-fe0f": [["⚰️", "⚰"], "", "", ["coffin"], 58, 12, 15, 0],
        "26b1-fe0f": [["⚱️", "⚱"], "", "", ["funeral_urn"], 58, 13, 15, 0],
        "26bd": [["⚽"], "", "󾟔", ["soccer"], 58, 14, 15, 0],
        "26be": [["⚾"], "", "󾟑", ["baseball"], 58, 15, 15, 0],
        "26c4": [["⛄"], "", "󾀃", ["snowman_without_snow"], 58, 16, 15, 0],
        "26c5": [["⛅"], "", "󾀏", ["partly_sunny"], 58, 17, 15, 0],
        "26c8-fe0f": [["⛈️", "⛈"], "", "", ["thunder_cloud_and_rain"], 58, 18, 15, 0],
        "26ce": [["⛎"], "", "󾀷", ["ophiuchus"], 58, 19, 15, 0],
        "26cf-fe0f": [["⛏️", "⛏"], "", "", ["pick"], 58, 20, 15, 0],
        "26d1-fe0f": [["⛑️", "⛑"], "", "", ["helmet_with_white_cross"], 58, 21, 15, 0],
        "26d3-fe0f": [["⛓️", "⛓"], "", "", ["chains"], 58, 22, 15, 0],
        "26d4": [["⛔"], "", "󾬦", ["no_entry"], 58, 23, 15, 0],
        "26e9-fe0f": [["⛩️", "⛩"], "", "", ["shinto_shrine"], 58, 24, 15, 0],
        "26ea": [["⛪"], "", "󾒻", ["church"], 58, 25, 15, 0],
        "26f0-fe0f": [["⛰️", "⛰"], "", "", ["mountain"], 58, 26, 15, 0],
        "26f1-fe0f": [["⛱️", "⛱"], "", "", ["umbrella_on_ground"], 58, 27, 15, 0],
        "26f2": [["⛲"], "", "󾒼", ["fountain"], 58, 28, 15, 0],
        "26f3": [["⛳"], "", "󾟒", ["golf"], 58, 29, 15, 0],
        "26f4-fe0f": [["⛴️", "⛴"], "", "", ["ferry"], 58, 30, 15, 0],
        "26f5": [["⛵"], "", "󾟪", ["boat", "sailboat"], 58, 31, 15, 0],
        "26f7-fe0f": [["⛷️", "⛷"], "", "", ["skier"], 58, 32, 15, 0],
        "26f8-fe0f": [["⛸️", "⛸"], "", "", ["ice_skate"], 58, 33, 15, 0],
        "26f9-fe0f-200d-2640-fe0f": [["⛹️‍♀️"], "", "", ["woman-bouncing-ball"], 58, 34, 7, 0],
        "26f9-fe0f-200d-2642-fe0f": [["⛹️‍♂️", "⛹️", "⛹"], "", "", ["man-bouncing-ball", "person_with_ball"], 58, 40, 7, 0],
        "26fa": [["⛺"], "", "󾟻", ["tent"], 58, 52, 15, 0],
        "26fd": [["⛽"], "", "󾟵", ["fuelpump"], 58, 53, 15, 0],
        "2702-fe0f": [["✂️", "✂"], "", "󾔾", ["scissors"], 58, 54, 15, 0],
        2705: [["✅"], "", "󾭊", ["white_check_mark"], 58, 55, 15, 0],
        "2708-fe0f": [["✈️", "✈"], "", "󾟩", ["airplane"], 58, 56, 15, 0],
        "2709-fe0f": [["✉️", "✉"], "", "󾔩", ["email", "envelope"], 58, 57, 15, 0],
        "270a": [["✊"], "", "󾮓", ["fist"], 58, 58, 15, 0],
        "270b": [["✋"], "", "󾮕", ["hand", "raised_hand"], 59, 3, 15, 0],
        "270c-fe0f": [["✌️", "✌"], "", "󾮔", ["v"], 59, 9, 15, 0],
        "270d-fe0f": [["✍️", "✍"], "", "", ["writing_hand"], 59, 15, 15, 0],
        "270f-fe0f": [["✏️", "✏"], "", "󾔹", ["pencil2"], 59, 21, 15, 0],
        "2712-fe0f": [["✒️", "✒"], "", "󾔶", ["black_nib"], 59, 22, 15, 0],
        "2714-fe0f": [["✔️", "✔"], "", "󾭉", ["heavy_check_mark"], 59, 23, 15, 0],
        "2716-fe0f": [["✖️", "✖"], "", "󾭓", ["heavy_multiplication_x"], 59, 24, 15, 0],
        "271d-fe0f": [["✝️", "✝"], "", "", ["latin_cross"], 59, 25, 15, 0],
        "2721-fe0f": [["✡️", "✡"], "", "", ["star_of_david"], 59, 26, 15, 0],
        2728: [["✨"], "", "󾭠", ["sparkles"], 59, 27, 15, 0],
        "2733-fe0f": [["✳️", "✳"], "", "󾭢", ["eight_spoked_asterisk"], 59, 28, 15, 0],
        "2734-fe0f": [["✴️", "✴"], "", "󾭡", ["eight_pointed_black_star"], 59, 29, 15, 0],
        "2744-fe0f": [["❄️", "❄"], "", "󾀎", ["snowflake"], 59, 30, 15, 0],
        "2747-fe0f": [["❇️", "❇"], "", "󾭷", ["sparkle"], 59, 31, 15, 0],
        "274c": [["❌"], "", "󾭅", ["x"], 59, 32, 15, 0],
        "274e": [["❎"], "", "󾭆", ["negative_squared_cross_mark"], 59, 33, 15, 0],
        2753: [["❓"], "", "󾬉", ["question"], 59, 34, 15, 0],
        2754: [["❔"], "", "󾬊", ["grey_question"], 59, 35, 15, 0],
        2755: [["❕"], "", "󾬋", ["grey_exclamation"], 59, 36, 15, 0],
        2757: [["❗"], "", "󾬄", ["exclamation", "heavy_exclamation_mark"], 59, 37, 15, 0],
        "2763-fe0f": [["❣️", "❣"], "", "", ["heavy_heart_exclamation_mark_ornament"], 59, 38, 15, 0],
        "2764-fe0f-200d-1f525": [["❤️‍🔥", "❤‍🔥"], "", "", ["heart_on_fire"], 59, 39, 15, 0],
        "2764-fe0f-200d-1fa79": [["❤️‍🩹", "❤‍🩹"], "", "", ["mending_heart"], 59, 40, 15, 0],
        "2764-fe0f": [["❤️", "❤"], "", "󾬌", ["heart"], 59, 41, 15, 0, "<3"],
        2795: [["➕"], "", "󾭑", ["heavy_plus_sign"], 59, 42, 15, 0],
        2796: [["➖"], "", "󾭒", ["heavy_minus_sign"], 59, 43, 15, 0],
        2797: [["➗"], "", "󾭔", ["heavy_division_sign"], 59, 44, 15, 0],
        "27a1-fe0f": [["➡️", "➡"], "", "󾫺", ["arrow_right"], 59, 45, 15, 0],
        "27b0": [["➰"], "", "󾬈", ["curly_loop"], 59, 46, 15, 0],
        "27bf": [["➿"], "", "󾠫", ["loop"], 59, 47, 15, 0],
        "2934-fe0f": [["⤴️", "⤴"], "", "󾫴", ["arrow_heading_up"], 59, 48, 15, 0],
        "2935-fe0f": [["⤵️", "⤵"], "", "󾫵", ["arrow_heading_down"], 59, 49, 15, 0],
        "2b05-fe0f": [["⬅️", "⬅"], "", "󾫻", ["arrow_left"], 59, 50, 15, 0],
        "2b06-fe0f": [["⬆️", "⬆"], "", "󾫸", ["arrow_up"], 59, 51, 15, 0],
        "2b07-fe0f": [["⬇️", "⬇"], "", "󾫹", ["arrow_down"], 59, 52, 15, 0],
        "2b1b": [["⬛"], "", "󾭬", ["black_large_square"], 59, 53, 15, 0],
        "2b1c": [["⬜"], "", "󾭫", ["white_large_square"], 59, 54, 15, 0],
        "2b50": [["⭐"], "", "󾭨", ["star"], 59, 55, 15, 0],
        "2b55": [["⭕"], "", "󾭄", ["o"], 59, 56, 15, 0],
        "3030-fe0f": [["〰️", "〰"], "", "󾬇", ["wavy_dash"], 59, 57, 15, 0],
        "303d-fe0f": [["〽️", "〽"], "", "󾠛", ["part_alternation_mark"], 59, 58, 15, 0],
        "3297-fe0f": [["㊗️", "㊗"], "", "󾭃", ["congratulations"], 59, 59, 15, 0],
        "3299-fe0f": [["㊙️", "㊙"], "", "󾬫", ["secret"], 59, 60, 15, 0]
      }, F.prototype.emoticons_data = {
        ":o)": "monkey_face",
        "</3": "broken_heart",
        "=)": "smiley",
        "=-)": "smiley",
        "C:": "smile",
        "c:": "smile",
        ":D": "smile",
        ":-D": "smile",
        ":>": "laughing",
        ":->": "laughing",
        ";)": "wink",
        ";-)": "wink",
        "8)": "sunglasses",
        ":|": "neutral_face",
        ":-|": "neutral_face",
        ":\\": "confused",
        ":-\\": "confused",
        ":/": "confused",
        ":-/": "confused",
        ":*": "kissing_heart",
        ":-*": "kissing_heart",
        ":p": "stuck_out_tongue",
        ":-p": "stuck_out_tongue",
        ":P": "stuck_out_tongue",
        ":-P": "stuck_out_tongue",
        ":b": "stuck_out_tongue",
        ":-b": "stuck_out_tongue",
        ";p": "stuck_out_tongue_winking_eye",
        ";-p": "stuck_out_tongue_winking_eye",
        ";b": "stuck_out_tongue_winking_eye",
        ";-b": "stuck_out_tongue_winking_eye",
        ";P": "stuck_out_tongue_winking_eye",
        ";-P": "stuck_out_tongue_winking_eye",
        "):": "disappointed",
        ":(": "disappointed",
        ":-(": "disappointed",
        ">:(": "angry",
        ">:-(": "angry",
        ":'(": "cry",
        "D:": "anguished",
        ":o": "open_mouth",
        ":-o": "open_mouth",
        ":O": "open_mouth",
        ":-O": "open_mouth",
        ":)": "slightly_smiling_face",
        "(:": "slightly_smiling_face",
        ":-)": "slightly_smiling_face",
        "<3": "heart"
      }, F.prototype.variations_data = {
        "1f385": { "1f3fb": ["1f385-1f3fb", 7, 9, 15, ["🎅🏻"]], "1f3fc": ["1f385-1f3fc", 7, 10, 15, ["🎅🏼"]], "1f3fd": ["1f385-1f3fd", 7, 11, 15, ["🎅🏽"]], "1f3fe": ["1f385-1f3fe", 7, 12, 15, ["🎅🏾"]], "1f3ff": ["1f385-1f3ff", 7, 13, 15, ["🎅🏿"]] },
        "1f3c2": { "1f3fb": ["1f3c2-1f3fb", 8, 9, 15, ["🏂🏻"]], "1f3fc": ["1f3c2-1f3fc", 8, 10, 15, ["🏂🏼"]], "1f3fd": ["1f3c2-1f3fd", 8, 11, 15, ["🏂🏽"]], "1f3fe": ["1f3c2-1f3fe", 8, 12, 15, ["🏂🏾"]], "1f3ff": ["1f3c2-1f3ff", 8, 13, 15, ["🏂🏿"]] },
        "1f3c3-200d-2640-fe0f": { "1f3fb": ["1f3c3-1f3fb-200d-2640-fe0f", 8, 15, 15, ["🏃🏻‍♀️"]], "1f3fc": ["1f3c3-1f3fc-200d-2640-fe0f", 8, 16, 15, ["🏃🏼‍♀️"]], "1f3fd": ["1f3c3-1f3fd-200d-2640-fe0f", 8, 17, 15, ["🏃🏽‍♀️"]], "1f3fe": ["1f3c3-1f3fe-200d-2640-fe0f", 8, 18, 15, ["🏃🏾‍♀️"]], "1f3ff": ["1f3c3-1f3ff-200d-2640-fe0f", 8, 19, 15, ["🏃🏿‍♀️"]] },
        "1f3c3-200d-2642-fe0f": { "1f3fb": ["1f3c3-1f3fb-200d-2642-fe0f", 8, 21, 15, ["🏃🏻‍♂️", "🏃🏻"]], "1f3fc": ["1f3c3-1f3fc-200d-2642-fe0f", 8, 22, 15, ["🏃🏼‍♂️", "🏃🏼"]], "1f3fd": ["1f3c3-1f3fd-200d-2642-fe0f", 8, 23, 15, ["🏃🏽‍♂️", "🏃🏽"]], "1f3fe": ["1f3c3-1f3fe-200d-2642-fe0f", 8, 24, 15, ["🏃🏾‍♂️", "🏃🏾"]], "1f3ff": ["1f3c3-1f3ff-200d-2642-fe0f", 8, 25, 15, ["🏃🏿‍♂️", "🏃🏿"]] },
        "1f3c4-200d-2640-fe0f": { "1f3fb": ["1f3c4-1f3fb-200d-2640-fe0f", 8, 33, 15, ["🏄🏻‍♀️"]], "1f3fc": ["1f3c4-1f3fc-200d-2640-fe0f", 8, 34, 15, ["🏄🏼‍♀️"]], "1f3fd": ["1f3c4-1f3fd-200d-2640-fe0f", 8, 35, 15, ["🏄🏽‍♀️"]], "1f3fe": ["1f3c4-1f3fe-200d-2640-fe0f", 8, 36, 15, ["🏄🏾‍♀️"]], "1f3ff": ["1f3c4-1f3ff-200d-2640-fe0f", 8, 37, 15, ["🏄🏿‍♀️"]] },
        "1f3c4-200d-2642-fe0f": { "1f3fb": ["1f3c4-1f3fb-200d-2642-fe0f", 8, 39, 15, ["🏄🏻‍♂️", "🏄🏻"]], "1f3fc": ["1f3c4-1f3fc-200d-2642-fe0f", 8, 40, 15, ["🏄🏼‍♂️", "🏄🏼"]], "1f3fd": ["1f3c4-1f3fd-200d-2642-fe0f", 8, 41, 15, ["🏄🏽‍♂️", "🏄🏽"]], "1f3fe": ["1f3c4-1f3fe-200d-2642-fe0f", 8, 42, 15, ["🏄🏾‍♂️", "🏄🏾"]], "1f3ff": ["1f3c4-1f3ff-200d-2642-fe0f", 8, 43, 15, ["🏄🏿‍♂️", "🏄🏿"]] },
        "1f3c7": { "1f3fb": ["1f3c7-1f3fb", 8, 53, 15, ["🏇🏻"]], "1f3fc": ["1f3c7-1f3fc", 8, 54, 15, ["🏇🏼"]], "1f3fd": ["1f3c7-1f3fd", 8, 55, 15, ["🏇🏽"]], "1f3fe": ["1f3c7-1f3fe", 8, 56, 15, ["🏇🏾"]], "1f3ff": ["1f3c7-1f3ff", 8, 57, 15, ["🏇🏿"]] },
        "1f3ca-200d-2640-fe0f": { "1f3fb": ["1f3ca-1f3fb-200d-2640-fe0f", 9, 0, 15, ["🏊🏻‍♀️"]], "1f3fc": ["1f3ca-1f3fc-200d-2640-fe0f", 9, 1, 15, ["🏊🏼‍♀️"]], "1f3fd": ["1f3ca-1f3fd-200d-2640-fe0f", 9, 2, 15, ["🏊🏽‍♀️"]], "1f3fe": ["1f3ca-1f3fe-200d-2640-fe0f", 9, 3, 15, ["🏊🏾‍♀️"]], "1f3ff": ["1f3ca-1f3ff-200d-2640-fe0f", 9, 4, 15, ["🏊🏿‍♀️"]] },
        "1f3ca-200d-2642-fe0f": { "1f3fb": ["1f3ca-1f3fb-200d-2642-fe0f", 9, 6, 15, ["🏊🏻‍♂️", "🏊🏻"]], "1f3fc": ["1f3ca-1f3fc-200d-2642-fe0f", 9, 7, 15, ["🏊🏼‍♂️", "🏊🏼"]], "1f3fd": ["1f3ca-1f3fd-200d-2642-fe0f", 9, 8, 15, ["🏊🏽‍♂️", "🏊🏽"]], "1f3fe": ["1f3ca-1f3fe-200d-2642-fe0f", 9, 9, 15, ["🏊🏾‍♂️", "🏊🏾"]], "1f3ff": ["1f3ca-1f3ff-200d-2642-fe0f", 9, 10, 15, ["🏊🏿‍♂️", "🏊🏿"]] },
        "1f3cb-fe0f-200d-2640-fe0f": { "1f3fb": ["1f3cb-1f3fb-200d-2640-fe0f", 9, 18, 15, ["🏋🏻‍♀️"]], "1f3fc": ["1f3cb-1f3fc-200d-2640-fe0f", 9, 19, 15, ["🏋🏼‍♀️"]], "1f3fd": ["1f3cb-1f3fd-200d-2640-fe0f", 9, 20, 15, ["🏋🏽‍♀️"]], "1f3fe": ["1f3cb-1f3fe-200d-2640-fe0f", 9, 21, 15, ["🏋🏾‍♀️"]], "1f3ff": ["1f3cb-1f3ff-200d-2640-fe0f", 9, 22, 15, ["🏋🏿‍♀️"]] },
        "1f3cb-fe0f-200d-2642-fe0f": { "1f3fb": ["1f3cb-1f3fb-200d-2642-fe0f", 9, 24, 15, ["🏋🏻‍♂️", "🏋🏻"]], "1f3fc": ["1f3cb-1f3fc-200d-2642-fe0f", 9, 25, 15, ["🏋🏼‍♂️", "🏋🏼"]], "1f3fd": ["1f3cb-1f3fd-200d-2642-fe0f", 9, 26, 15, ["🏋🏽‍♂️", "🏋🏽"]], "1f3fe": ["1f3cb-1f3fe-200d-2642-fe0f", 9, 27, 15, ["🏋🏾‍♂️", "🏋🏾"]], "1f3ff": ["1f3cb-1f3ff-200d-2642-fe0f", 9, 28, 15, ["🏋🏿‍♂️", "🏋🏿"]] },
        "1f3cc-fe0f-200d-2640-fe0f": { "1f3fb": ["1f3cc-1f3fb-200d-2640-fe0f", 9, 36, 15, ["🏌🏻‍♀️"]], "1f3fc": ["1f3cc-1f3fc-200d-2640-fe0f", 9, 37, 15, ["🏌🏼‍♀️"]], "1f3fd": ["1f3cc-1f3fd-200d-2640-fe0f", 9, 38, 15, ["🏌🏽‍♀️"]], "1f3fe": ["1f3cc-1f3fe-200d-2640-fe0f", 9, 39, 15, ["🏌🏾‍♀️"]], "1f3ff": ["1f3cc-1f3ff-200d-2640-fe0f", 9, 40, 15, ["🏌🏿‍♀️"]] },
        "1f3cc-fe0f-200d-2642-fe0f": { "1f3fb": ["1f3cc-1f3fb-200d-2642-fe0f", 9, 42, 15, ["🏌🏻‍♂️", "🏌🏻"]], "1f3fc": ["1f3cc-1f3fc-200d-2642-fe0f", 9, 43, 15, ["🏌🏼‍♂️", "🏌🏼"]], "1f3fd": ["1f3cc-1f3fd-200d-2642-fe0f", 9, 44, 15, ["🏌🏽‍♂️", "🏌🏽"]], "1f3fe": ["1f3cc-1f3fe-200d-2642-fe0f", 9, 45, 15, ["🏌🏾‍♂️", "🏌🏾"]], "1f3ff": ["1f3cc-1f3ff-200d-2642-fe0f", 9, 46, 15, ["🏌🏿‍♂️", "🏌🏿"]] },
        "1f442": { "1f3fb": ["1f442-1f3fb", 11, 57, 15, ["👂🏻"]], "1f3fc": ["1f442-1f3fc", 11, 58, 15, ["👂🏼"]], "1f3fd": ["1f442-1f3fd", 11, 59, 15, ["👂🏽"]], "1f3fe": ["1f442-1f3fe", 11, 60, 15, ["👂🏾"]], "1f3ff": ["1f442-1f3ff", 12, 0, 15, ["👂🏿"]] },
        "1f443": { "1f3fb": ["1f443-1f3fb", 12, 2, 15, ["👃🏻"]], "1f3fc": ["1f443-1f3fc", 12, 3, 15, ["👃🏼"]], "1f3fd": ["1f443-1f3fd", 12, 4, 15, ["👃🏽"]], "1f3fe": ["1f443-1f3fe", 12, 5, 15, ["👃🏾"]], "1f3ff": ["1f443-1f3ff", 12, 6, 15, ["👃🏿"]] },
        "1f446": { "1f3fb": ["1f446-1f3fb", 12, 10, 15, ["👆🏻"]], "1f3fc": ["1f446-1f3fc", 12, 11, 15, ["👆🏼"]], "1f3fd": ["1f446-1f3fd", 12, 12, 15, ["👆🏽"]], "1f3fe": ["1f446-1f3fe", 12, 13, 15, ["👆🏾"]], "1f3ff": ["1f446-1f3ff", 12, 14, 15, ["👆🏿"]] },
        "1f447": { "1f3fb": ["1f447-1f3fb", 12, 16, 15, ["👇🏻"]], "1f3fc": ["1f447-1f3fc", 12, 17, 15, ["👇🏼"]], "1f3fd": ["1f447-1f3fd", 12, 18, 15, ["👇🏽"]], "1f3fe": ["1f447-1f3fe", 12, 19, 15, ["👇🏾"]], "1f3ff": ["1f447-1f3ff", 12, 20, 15, ["👇🏿"]] },
        "1f448": { "1f3fb": ["1f448-1f3fb", 12, 22, 15, ["👈🏻"]], "1f3fc": ["1f448-1f3fc", 12, 23, 15, ["👈🏼"]], "1f3fd": ["1f448-1f3fd", 12, 24, 15, ["👈🏽"]], "1f3fe": ["1f448-1f3fe", 12, 25, 15, ["👈🏾"]], "1f3ff": ["1f448-1f3ff", 12, 26, 15, ["👈🏿"]] },
        "1f449": { "1f3fb": ["1f449-1f3fb", 12, 28, 15, ["👉🏻"]], "1f3fc": ["1f449-1f3fc", 12, 29, 15, ["👉🏼"]], "1f3fd": ["1f449-1f3fd", 12, 30, 15, ["👉🏽"]], "1f3fe": ["1f449-1f3fe", 12, 31, 15, ["👉🏾"]], "1f3ff": ["1f449-1f3ff", 12, 32, 15, ["👉🏿"]] },
        "1f44a": { "1f3fb": ["1f44a-1f3fb", 12, 34, 15, ["👊🏻"]], "1f3fc": ["1f44a-1f3fc", 12, 35, 15, ["👊🏼"]], "1f3fd": ["1f44a-1f3fd", 12, 36, 15, ["👊🏽"]], "1f3fe": ["1f44a-1f3fe", 12, 37, 15, ["👊🏾"]], "1f3ff": ["1f44a-1f3ff", 12, 38, 15, ["👊🏿"]] },
        "1f44b": { "1f3fb": ["1f44b-1f3fb", 12, 40, 15, ["👋🏻"]], "1f3fc": ["1f44b-1f3fc", 12, 41, 15, ["👋🏼"]], "1f3fd": ["1f44b-1f3fd", 12, 42, 15, ["👋🏽"]], "1f3fe": ["1f44b-1f3fe", 12, 43, 15, ["👋🏾"]], "1f3ff": ["1f44b-1f3ff", 12, 44, 15, ["👋🏿"]] },
        "1f44c": { "1f3fb": ["1f44c-1f3fb", 12, 46, 15, ["👌🏻"]], "1f3fc": ["1f44c-1f3fc", 12, 47, 15, ["👌🏼"]], "1f3fd": ["1f44c-1f3fd", 12, 48, 15, ["👌🏽"]], "1f3fe": ["1f44c-1f3fe", 12, 49, 15, ["👌🏾"]], "1f3ff": ["1f44c-1f3ff", 12, 50, 15, ["👌🏿"]] },
        "1f44d": { "1f3fb": ["1f44d-1f3fb", 12, 52, 15, ["👍🏻"]], "1f3fc": ["1f44d-1f3fc", 12, 53, 15, ["👍🏼"]], "1f3fd": ["1f44d-1f3fd", 12, 54, 15, ["👍🏽"]], "1f3fe": ["1f44d-1f3fe", 12, 55, 15, ["👍🏾"]], "1f3ff": ["1f44d-1f3ff", 12, 56, 15, ["👍🏿"]] },
        "1f44e": { "1f3fb": ["1f44e-1f3fb", 12, 58, 15, ["👎🏻"]], "1f3fc": ["1f44e-1f3fc", 12, 59, 15, ["👎🏼"]], "1f3fd": ["1f44e-1f3fd", 12, 60, 15, ["👎🏽"]], "1f3fe": ["1f44e-1f3fe", 13, 0, 15, ["👎🏾"]], "1f3ff": ["1f44e-1f3ff", 13, 1, 15, ["👎🏿"]] },
        "1f44f": { "1f3fb": ["1f44f-1f3fb", 13, 3, 15, ["👏🏻"]], "1f3fc": ["1f44f-1f3fc", 13, 4, 15, ["👏🏼"]], "1f3fd": ["1f44f-1f3fd", 13, 5, 15, ["👏🏽"]], "1f3fe": ["1f44f-1f3fe", 13, 6, 15, ["👏🏾"]], "1f3ff": ["1f44f-1f3ff", 13, 7, 15, ["👏🏿"]] },
        "1f450": { "1f3fb": ["1f450-1f3fb", 13, 9, 15, ["👐🏻"]], "1f3fc": ["1f450-1f3fc", 13, 10, 15, ["👐🏼"]], "1f3fd": ["1f450-1f3fd", 13, 11, 15, ["👐🏽"]], "1f3fe": ["1f450-1f3fe", 13, 12, 15, ["👐🏾"]], "1f3ff": ["1f450-1f3ff", 13, 13, 15, ["👐🏿"]] },
        "1f466": { "1f3fb": ["1f466-1f3fb", 13, 36, 15, ["👦🏻"]], "1f3fc": ["1f466-1f3fc", 13, 37, 15, ["👦🏼"]], "1f3fd": ["1f466-1f3fd", 13, 38, 15, ["👦🏽"]], "1f3fe": ["1f466-1f3fe", 13, 39, 15, ["👦🏾"]], "1f3ff": ["1f466-1f3ff", 13, 40, 15, ["👦🏿"]] },
        "1f467": { "1f3fb": ["1f467-1f3fb", 13, 42, 15, ["👧🏻"]], "1f3fc": ["1f467-1f3fc", 13, 43, 15, ["👧🏼"]], "1f3fd": ["1f467-1f3fd", 13, 44, 15, ["👧🏽"]], "1f3fe": ["1f467-1f3fe", 13, 45, 15, ["👧🏾"]], "1f3ff": ["1f467-1f3ff", 13, 46, 15, ["👧🏿"]] },
        "1f468-200d-1f33e": { "1f3fb": ["1f468-1f3fb-200d-1f33e", 13, 48, 15, ["👨🏻‍🌾"]], "1f3fc": ["1f468-1f3fc-200d-1f33e", 13, 49, 15, ["👨🏼‍🌾"]], "1f3fd": ["1f468-1f3fd-200d-1f33e", 13, 50, 15, ["👨🏽‍🌾"]], "1f3fe": ["1f468-1f3fe-200d-1f33e", 13, 51, 15, ["👨🏾‍🌾"]], "1f3ff": ["1f468-1f3ff-200d-1f33e", 13, 52, 15, ["👨🏿‍🌾"]] },
        "1f468-200d-1f373": { "1f3fb": ["1f468-1f3fb-200d-1f373", 13, 54, 15, ["👨🏻‍🍳"]], "1f3fc": ["1f468-1f3fc-200d-1f373", 13, 55, 15, ["👨🏼‍🍳"]], "1f3fd": ["1f468-1f3fd-200d-1f373", 13, 56, 15, ["👨🏽‍🍳"]], "1f3fe": ["1f468-1f3fe-200d-1f373", 13, 57, 15, ["👨🏾‍🍳"]], "1f3ff": ["1f468-1f3ff-200d-1f373", 13, 58, 15, ["👨🏿‍🍳"]] },
        "1f468-200d-1f37c": { "1f3fb": ["1f468-1f3fb-200d-1f37c", 13, 60, 15, ["👨🏻‍🍼"]], "1f3fc": ["1f468-1f3fc-200d-1f37c", 14, 0, 15, ["👨🏼‍🍼"]], "1f3fd": ["1f468-1f3fd-200d-1f37c", 14, 1, 15, ["👨🏽‍🍼"]], "1f3fe": ["1f468-1f3fe-200d-1f37c", 14, 2, 15, ["👨🏾‍🍼"]], "1f3ff": ["1f468-1f3ff-200d-1f37c", 14, 3, 15, ["👨🏿‍🍼"]] },
        "1f468-200d-1f393": { "1f3fb": ["1f468-1f3fb-200d-1f393", 14, 5, 15, ["👨🏻‍🎓"]], "1f3fc": ["1f468-1f3fc-200d-1f393", 14, 6, 15, ["👨🏼‍🎓"]], "1f3fd": ["1f468-1f3fd-200d-1f393", 14, 7, 15, ["👨🏽‍🎓"]], "1f3fe": ["1f468-1f3fe-200d-1f393", 14, 8, 15, ["👨🏾‍🎓"]], "1f3ff": ["1f468-1f3ff-200d-1f393", 14, 9, 15, ["👨🏿‍🎓"]] },
        "1f468-200d-1f3a4": { "1f3fb": ["1f468-1f3fb-200d-1f3a4", 14, 11, 15, ["👨🏻‍🎤"]], "1f3fc": ["1f468-1f3fc-200d-1f3a4", 14, 12, 15, ["👨🏼‍🎤"]], "1f3fd": ["1f468-1f3fd-200d-1f3a4", 14, 13, 15, ["👨🏽‍🎤"]], "1f3fe": ["1f468-1f3fe-200d-1f3a4", 14, 14, 15, ["👨🏾‍🎤"]], "1f3ff": ["1f468-1f3ff-200d-1f3a4", 14, 15, 15, ["👨🏿‍🎤"]] },
        "1f468-200d-1f3a8": { "1f3fb": ["1f468-1f3fb-200d-1f3a8", 14, 17, 15, ["👨🏻‍🎨"]], "1f3fc": ["1f468-1f3fc-200d-1f3a8", 14, 18, 15, ["👨🏼‍🎨"]], "1f3fd": ["1f468-1f3fd-200d-1f3a8", 14, 19, 15, ["👨🏽‍🎨"]], "1f3fe": ["1f468-1f3fe-200d-1f3a8", 14, 20, 15, ["👨🏾‍🎨"]], "1f3ff": ["1f468-1f3ff-200d-1f3a8", 14, 21, 15, ["👨🏿‍🎨"]] },
        "1f468-200d-1f3eb": { "1f3fb": ["1f468-1f3fb-200d-1f3eb", 14, 23, 15, ["👨🏻‍🏫"]], "1f3fc": ["1f468-1f3fc-200d-1f3eb", 14, 24, 15, ["👨🏼‍🏫"]], "1f3fd": ["1f468-1f3fd-200d-1f3eb", 14, 25, 15, ["👨🏽‍🏫"]], "1f3fe": ["1f468-1f3fe-200d-1f3eb", 14, 26, 15, ["👨🏾‍🏫"]], "1f3ff": ["1f468-1f3ff-200d-1f3eb", 14, 27, 15, ["👨🏿‍🏫"]] },
        "1f468-200d-1f3ed": { "1f3fb": ["1f468-1f3fb-200d-1f3ed", 14, 29, 15, ["👨🏻‍🏭"]], "1f3fc": ["1f468-1f3fc-200d-1f3ed", 14, 30, 15, ["👨🏼‍🏭"]], "1f3fd": ["1f468-1f3fd-200d-1f3ed", 14, 31, 15, ["👨🏽‍🏭"]], "1f3fe": ["1f468-1f3fe-200d-1f3ed", 14, 32, 15, ["👨🏾‍🏭"]], "1f3ff": ["1f468-1f3ff-200d-1f3ed", 14, 33, 15, ["👨🏿‍🏭"]] },
        "1f468-200d-1f4bb": { "1f3fb": ["1f468-1f3fb-200d-1f4bb", 14, 50, 15, ["👨🏻‍💻"]], "1f3fc": ["1f468-1f3fc-200d-1f4bb", 14, 51, 15, ["👨🏼‍💻"]], "1f3fd": ["1f468-1f3fd-200d-1f4bb", 14, 52, 15, ["👨🏽‍💻"]], "1f3fe": ["1f468-1f3fe-200d-1f4bb", 14, 53, 15, ["👨🏾‍💻"]], "1f3ff": ["1f468-1f3ff-200d-1f4bb", 14, 54, 15, ["👨🏿‍💻"]] },
        "1f468-200d-1f4bc": { "1f3fb": ["1f468-1f3fb-200d-1f4bc", 14, 56, 15, ["👨🏻‍💼"]], "1f3fc": ["1f468-1f3fc-200d-1f4bc", 14, 57, 15, ["👨🏼‍💼"]], "1f3fd": ["1f468-1f3fd-200d-1f4bc", 14, 58, 15, ["👨🏽‍💼"]], "1f3fe": ["1f468-1f3fe-200d-1f4bc", 14, 59, 15, ["👨🏾‍💼"]], "1f3ff": ["1f468-1f3ff-200d-1f4bc", 14, 60, 15, ["👨🏿‍💼"]] },
        "1f468-200d-1f527": { "1f3fb": ["1f468-1f3fb-200d-1f527", 15, 1, 15, ["👨🏻‍🔧"]], "1f3fc": ["1f468-1f3fc-200d-1f527", 15, 2, 15, ["👨🏼‍🔧"]], "1f3fd": ["1f468-1f3fd-200d-1f527", 15, 3, 15, ["👨🏽‍🔧"]], "1f3fe": ["1f468-1f3fe-200d-1f527", 15, 4, 15, ["👨🏾‍🔧"]], "1f3ff": ["1f468-1f3ff-200d-1f527", 15, 5, 15, ["👨🏿‍🔧"]] },
        "1f468-200d-1f52c": { "1f3fb": ["1f468-1f3fb-200d-1f52c", 15, 7, 15, ["👨🏻‍🔬"]], "1f3fc": ["1f468-1f3fc-200d-1f52c", 15, 8, 15, ["👨🏼‍🔬"]], "1f3fd": ["1f468-1f3fd-200d-1f52c", 15, 9, 15, ["👨🏽‍🔬"]], "1f3fe": ["1f468-1f3fe-200d-1f52c", 15, 10, 15, ["👨🏾‍🔬"]], "1f3ff": ["1f468-1f3ff-200d-1f52c", 15, 11, 15, ["👨🏿‍🔬"]] },
        "1f468-200d-1f680": { "1f3fb": ["1f468-1f3fb-200d-1f680", 15, 13, 15, ["👨🏻‍🚀"]], "1f3fc": ["1f468-1f3fc-200d-1f680", 15, 14, 15, ["👨🏼‍🚀"]], "1f3fd": ["1f468-1f3fd-200d-1f680", 15, 15, 15, ["👨🏽‍🚀"]], "1f3fe": ["1f468-1f3fe-200d-1f680", 15, 16, 15, ["👨🏾‍🚀"]], "1f3ff": ["1f468-1f3ff-200d-1f680", 15, 17, 15, ["👨🏿‍🚀"]] },
        "1f468-200d-1f692": { "1f3fb": ["1f468-1f3fb-200d-1f692", 15, 19, 15, ["👨🏻‍🚒"]], "1f3fc": ["1f468-1f3fc-200d-1f692", 15, 20, 15, ["👨🏼‍🚒"]], "1f3fd": ["1f468-1f3fd-200d-1f692", 15, 21, 15, ["👨🏽‍🚒"]], "1f3fe": ["1f468-1f3fe-200d-1f692", 15, 22, 15, ["👨🏾‍🚒"]], "1f3ff": ["1f468-1f3ff-200d-1f692", 15, 23, 15, ["👨🏿‍🚒"]] },
        "1f468-200d-1f9af": { "1f3fb": ["1f468-1f3fb-200d-1f9af", 15, 25, 15, ["👨🏻‍🦯"]], "1f3fc": ["1f468-1f3fc-200d-1f9af", 15, 26, 15, ["👨🏼‍🦯"]], "1f3fd": ["1f468-1f3fd-200d-1f9af", 15, 27, 15, ["👨🏽‍🦯"]], "1f3fe": ["1f468-1f3fe-200d-1f9af", 15, 28, 15, ["👨🏾‍🦯"]], "1f3ff": ["1f468-1f3ff-200d-1f9af", 15, 29, 15, ["👨🏿‍🦯"]] },
        "1f468-200d-1f9b0": { "1f3fb": ["1f468-1f3fb-200d-1f9b0", 15, 31, 15, ["👨🏻‍🦰"]], "1f3fc": ["1f468-1f3fc-200d-1f9b0", 15, 32, 15, ["👨🏼‍🦰"]], "1f3fd": ["1f468-1f3fd-200d-1f9b0", 15, 33, 15, ["👨🏽‍🦰"]], "1f3fe": ["1f468-1f3fe-200d-1f9b0", 15, 34, 15, ["👨🏾‍🦰"]], "1f3ff": ["1f468-1f3ff-200d-1f9b0", 15, 35, 15, ["👨🏿‍🦰"]] },
        "1f468-200d-1f9b1": { "1f3fb": ["1f468-1f3fb-200d-1f9b1", 15, 37, 15, ["👨🏻‍🦱"]], "1f3fc": ["1f468-1f3fc-200d-1f9b1", 15, 38, 15, ["👨🏼‍🦱"]], "1f3fd": ["1f468-1f3fd-200d-1f9b1", 15, 39, 15, ["👨🏽‍🦱"]], "1f3fe": ["1f468-1f3fe-200d-1f9b1", 15, 40, 15, ["👨🏾‍🦱"]], "1f3ff": ["1f468-1f3ff-200d-1f9b1", 15, 41, 15, ["👨🏿‍🦱"]] },
        "1f468-200d-1f9b2": { "1f3fb": ["1f468-1f3fb-200d-1f9b2", 15, 43, 15, ["👨🏻‍🦲"]], "1f3fc": ["1f468-1f3fc-200d-1f9b2", 15, 44, 15, ["👨🏼‍🦲"]], "1f3fd": ["1f468-1f3fd-200d-1f9b2", 15, 45, 15, ["👨🏽‍🦲"]], "1f3fe": ["1f468-1f3fe-200d-1f9b2", 15, 46, 15, ["👨🏾‍🦲"]], "1f3ff": ["1f468-1f3ff-200d-1f9b2", 15, 47, 15, ["👨🏿‍🦲"]] },
        "1f468-200d-1f9b3": { "1f3fb": ["1f468-1f3fb-200d-1f9b3", 15, 49, 15, ["👨🏻‍🦳"]], "1f3fc": ["1f468-1f3fc-200d-1f9b3", 15, 50, 15, ["👨🏼‍🦳"]], "1f3fd": ["1f468-1f3fd-200d-1f9b3", 15, 51, 15, ["👨🏽‍🦳"]], "1f3fe": ["1f468-1f3fe-200d-1f9b3", 15, 52, 15, ["👨🏾‍🦳"]], "1f3ff": ["1f468-1f3ff-200d-1f9b3", 15, 53, 15, ["👨🏿‍🦳"]] },
        "1f468-200d-1f9bc": { "1f3fb": ["1f468-1f3fb-200d-1f9bc", 15, 55, 15, ["👨🏻‍🦼"]], "1f3fc": ["1f468-1f3fc-200d-1f9bc", 15, 56, 15, ["👨🏼‍🦼"]], "1f3fd": ["1f468-1f3fd-200d-1f9bc", 15, 57, 15, ["👨🏽‍🦼"]], "1f3fe": ["1f468-1f3fe-200d-1f9bc", 15, 58, 15, ["👨🏾‍🦼"]], "1f3ff": ["1f468-1f3ff-200d-1f9bc", 15, 59, 15, ["👨🏿‍🦼"]] },
        "1f468-200d-1f9bd": { "1f3fb": ["1f468-1f3fb-200d-1f9bd", 16, 0, 15, ["👨🏻‍🦽"]], "1f3fc": ["1f468-1f3fc-200d-1f9bd", 16, 1, 15, ["👨🏼‍🦽"]], "1f3fd": ["1f468-1f3fd-200d-1f9bd", 16, 2, 15, ["👨🏽‍🦽"]], "1f3fe": ["1f468-1f3fe-200d-1f9bd", 16, 3, 15, ["👨🏾‍🦽"]], "1f3ff": ["1f468-1f3ff-200d-1f9bd", 16, 4, 15, ["👨🏿‍🦽"]] },
        "1f468-200d-2695-fe0f": { "1f3fb": ["1f468-1f3fb-200d-2695-fe0f", 16, 6, 15, ["👨🏻‍⚕️"]], "1f3fc": ["1f468-1f3fc-200d-2695-fe0f", 16, 7, 15, ["👨🏼‍⚕️"]], "1f3fd": ["1f468-1f3fd-200d-2695-fe0f", 16, 8, 15, ["👨🏽‍⚕️"]], "1f3fe": ["1f468-1f3fe-200d-2695-fe0f", 16, 9, 15, ["👨🏾‍⚕️"]], "1f3ff": ["1f468-1f3ff-200d-2695-fe0f", 16, 10, 15, ["👨🏿‍⚕️"]] },
        "1f468-200d-2696-fe0f": { "1f3fb": ["1f468-1f3fb-200d-2696-fe0f", 16, 12, 15, ["👨🏻‍⚖️"]], "1f3fc": ["1f468-1f3fc-200d-2696-fe0f", 16, 13, 15, ["👨🏼‍⚖️"]], "1f3fd": ["1f468-1f3fd-200d-2696-fe0f", 16, 14, 15, ["👨🏽‍⚖️"]], "1f3fe": ["1f468-1f3fe-200d-2696-fe0f", 16, 15, 15, ["👨🏾‍⚖️"]], "1f3ff": ["1f468-1f3ff-200d-2696-fe0f", 16, 16, 15, ["👨🏿‍⚖️"]] },
        "1f468-200d-2708-fe0f": { "1f3fb": ["1f468-1f3fb-200d-2708-fe0f", 16, 18, 15, ["👨🏻‍✈️"]], "1f3fc": ["1f468-1f3fc-200d-2708-fe0f", 16, 19, 15, ["👨🏼‍✈️"]], "1f3fd": ["1f468-1f3fd-200d-2708-fe0f", 16, 20, 15, ["👨🏽‍✈️"]], "1f3fe": ["1f468-1f3fe-200d-2708-fe0f", 16, 21, 15, ["👨🏾‍✈️"]], "1f3ff": ["1f468-1f3ff-200d-2708-fe0f", 16, 22, 15, ["👨🏿‍✈️"]] },
        "1f468-200d-2764-fe0f-200d-1f468": { "1f3fb-1f3fb": ["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb", 16, 24, 15, ["👨🏻‍❤️‍👨🏻"]], "1f3fb-1f3fc": ["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc", 16, 25, 15, ["👨🏻‍❤️‍👨🏼"]], "1f3fb-1f3fd": ["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd", 16, 26, 15, ["👨🏻‍❤️‍👨🏽"]], "1f3fb-1f3fe": ["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe", 16, 27, 15, ["👨🏻‍❤️‍👨🏾"]], "1f3fb-1f3ff": ["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff", 16, 28, 15, ["👨🏻‍❤️‍👨🏿"]], "1f3fc-1f3fb": ["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb", 16, 29, 15, ["👨🏼‍❤️‍👨🏻"]], "1f3fc-1f3fc": ["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc", 16, 30, 15, ["👨🏼‍❤️‍👨🏼"]], "1f3fc-1f3fd": ["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd", 16, 31, 15, ["👨🏼‍❤️‍👨🏽"]], "1f3fc-1f3fe": ["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe", 16, 32, 15, ["👨🏼‍❤️‍👨🏾"]], "1f3fc-1f3ff": ["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff", 16, 33, 15, ["👨🏼‍❤️‍👨🏿"]], "1f3fd-1f3fb": ["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb", 16, 34, 15, ["👨🏽‍❤️‍👨🏻"]], "1f3fd-1f3fc": ["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc", 16, 35, 15, ["👨🏽‍❤️‍👨🏼"]], "1f3fd-1f3fd": ["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd", 16, 36, 15, ["👨🏽‍❤️‍👨🏽"]], "1f3fd-1f3fe": ["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe", 16, 37, 15, ["👨🏽‍❤️‍👨🏾"]], "1f3fd-1f3ff": ["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff", 16, 38, 15, ["👨🏽‍❤️‍👨🏿"]], "1f3fe-1f3fb": ["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb", 16, 39, 15, ["👨🏾‍❤️‍👨🏻"]], "1f3fe-1f3fc": ["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc", 16, 40, 15, ["👨🏾‍❤️‍👨🏼"]], "1f3fe-1f3fd": ["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd", 16, 41, 15, ["👨🏾‍❤️‍👨🏽"]], "1f3fe-1f3fe": ["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe", 16, 42, 15, ["👨🏾‍❤️‍👨🏾"]], "1f3fe-1f3ff": ["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff", 16, 43, 15, ["👨🏾‍❤️‍👨🏿"]], "1f3ff-1f3fb": ["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb", 16, 44, 15, ["👨🏿‍❤️‍👨🏻"]], "1f3ff-1f3fc": ["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc", 16, 45, 15, ["👨🏿‍❤️‍👨🏼"]], "1f3ff-1f3fd": ["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd", 16, 46, 15, ["👨🏿‍❤️‍👨🏽"]], "1f3ff-1f3fe": ["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe", 16, 47, 15, ["👨🏿‍❤️‍👨🏾"]], "1f3ff-1f3ff": ["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff", 16, 48, 15, ["👨🏿‍❤️‍👨🏿"]] },
        "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468": { "1f3fb-1f3fb": ["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 16, 50, 15, ["👨🏻‍❤️‍💋‍👨🏻"]], "1f3fb-1f3fc": ["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 16, 51, 15, ["👨🏻‍❤️‍💋‍👨🏼"]], "1f3fb-1f3fd": ["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 16, 52, 15, ["👨🏻‍❤️‍💋‍👨🏽"]], "1f3fb-1f3fe": ["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 16, 53, 15, ["👨🏻‍❤️‍💋‍👨🏾"]], "1f3fb-1f3ff": ["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 16, 54, 15, ["👨🏻‍❤️‍💋‍👨🏿"]], "1f3fc-1f3fb": ["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 16, 55, 15, ["👨🏼‍❤️‍💋‍👨🏻"]], "1f3fc-1f3fc": ["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 16, 56, 15, ["👨🏼‍❤️‍💋‍👨🏼"]], "1f3fc-1f3fd": ["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 16, 57, 15, ["👨🏼‍❤️‍💋‍👨🏽"]], "1f3fc-1f3fe": ["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 16, 58, 15, ["👨🏼‍❤️‍💋‍👨🏾"]], "1f3fc-1f3ff": ["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 16, 59, 15, ["👨🏼‍❤️‍💋‍👨🏿"]], "1f3fd-1f3fb": ["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 16, 60, 15, ["👨🏽‍❤️‍💋‍👨🏻"]], "1f3fd-1f3fc": ["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 17, 0, 15, ["👨🏽‍❤️‍💋‍👨🏼"]], "1f3fd-1f3fd": ["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 17, 1, 15, ["👨🏽‍❤️‍💋‍👨🏽"]], "1f3fd-1f3fe": ["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 17, 2, 15, ["👨🏽‍❤️‍💋‍👨🏾"]], "1f3fd-1f3ff": ["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 17, 3, 15, ["👨🏽‍❤️‍💋‍👨🏿"]], "1f3fe-1f3fb": ["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 17, 4, 15, ["👨🏾‍❤️‍💋‍👨🏻"]], "1f3fe-1f3fc": ["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 17, 5, 15, ["👨🏾‍❤️‍💋‍👨🏼"]], "1f3fe-1f3fd": ["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 17, 6, 15, ["👨🏾‍❤️‍💋‍👨🏽"]], "1f3fe-1f3fe": ["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 17, 7, 15, ["👨🏾‍❤️‍💋‍👨🏾"]], "1f3fe-1f3ff": ["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 17, 8, 15, ["👨🏾‍❤️‍💋‍👨🏿"]], "1f3ff-1f3fb": ["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 17, 9, 15, ["👨🏿‍❤️‍💋‍👨🏻"]], "1f3ff-1f3fc": ["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 17, 10, 15, ["👨🏿‍❤️‍💋‍👨🏼"]], "1f3ff-1f3fd": ["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 17, 11, 15, ["👨🏿‍❤️‍💋‍👨🏽"]], "1f3ff-1f3fe": ["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 17, 12, 15, ["👨🏿‍❤️‍💋‍👨🏾"]], "1f3ff-1f3ff": ["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 17, 13, 15, ["👨🏿‍❤️‍💋‍👨🏿"]] },
        "1f468": { "1f3fb": ["1f468-1f3fb", 17, 15, 15, ["👨🏻"]], "1f3fc": ["1f468-1f3fc", 17, 16, 15, ["👨🏼"]], "1f3fd": ["1f468-1f3fd", 17, 17, 15, ["👨🏽"]], "1f3fe": ["1f468-1f3fe", 17, 18, 15, ["👨🏾"]], "1f3ff": ["1f468-1f3ff", 17, 19, 15, ["👨🏿"]] },
        "1f469-200d-1f33e": { "1f3fb": ["1f469-1f3fb-200d-1f33e", 17, 21, 15, ["👩🏻‍🌾"]], "1f3fc": ["1f469-1f3fc-200d-1f33e", 17, 22, 15, ["👩🏼‍🌾"]], "1f3fd": ["1f469-1f3fd-200d-1f33e", 17, 23, 15, ["👩🏽‍🌾"]], "1f3fe": ["1f469-1f3fe-200d-1f33e", 17, 24, 15, ["👩🏾‍🌾"]], "1f3ff": ["1f469-1f3ff-200d-1f33e", 17, 25, 15, ["👩🏿‍🌾"]] },
        "1f469-200d-1f373": { "1f3fb": ["1f469-1f3fb-200d-1f373", 17, 27, 15, ["👩🏻‍🍳"]], "1f3fc": ["1f469-1f3fc-200d-1f373", 17, 28, 15, ["👩🏼‍🍳"]], "1f3fd": ["1f469-1f3fd-200d-1f373", 17, 29, 15, ["👩🏽‍🍳"]], "1f3fe": ["1f469-1f3fe-200d-1f373", 17, 30, 15, ["👩🏾‍🍳"]], "1f3ff": ["1f469-1f3ff-200d-1f373", 17, 31, 15, ["👩🏿‍🍳"]] },
        "1f469-200d-1f37c": { "1f3fb": ["1f469-1f3fb-200d-1f37c", 17, 33, 15, ["👩🏻‍🍼"]], "1f3fc": ["1f469-1f3fc-200d-1f37c", 17, 34, 15, ["👩🏼‍🍼"]], "1f3fd": ["1f469-1f3fd-200d-1f37c", 17, 35, 15, ["👩🏽‍🍼"]], "1f3fe": ["1f469-1f3fe-200d-1f37c", 17, 36, 15, ["👩🏾‍🍼"]], "1f3ff": ["1f469-1f3ff-200d-1f37c", 17, 37, 15, ["👩🏿‍🍼"]] },
        "1f469-200d-1f393": { "1f3fb": ["1f469-1f3fb-200d-1f393", 17, 39, 15, ["👩🏻‍🎓"]], "1f3fc": ["1f469-1f3fc-200d-1f393", 17, 40, 15, ["👩🏼‍🎓"]], "1f3fd": ["1f469-1f3fd-200d-1f393", 17, 41, 15, ["👩🏽‍🎓"]], "1f3fe": ["1f469-1f3fe-200d-1f393", 17, 42, 15, ["👩🏾‍🎓"]], "1f3ff": ["1f469-1f3ff-200d-1f393", 17, 43, 15, ["👩🏿‍🎓"]] },
        "1f469-200d-1f3a4": { "1f3fb": ["1f469-1f3fb-200d-1f3a4", 17, 45, 15, ["👩🏻‍🎤"]], "1f3fc": ["1f469-1f3fc-200d-1f3a4", 17, 46, 15, ["👩🏼‍🎤"]], "1f3fd": ["1f469-1f3fd-200d-1f3a4", 17, 47, 15, ["👩🏽‍🎤"]], "1f3fe": ["1f469-1f3fe-200d-1f3a4", 17, 48, 15, ["👩🏾‍🎤"]], "1f3ff": ["1f469-1f3ff-200d-1f3a4", 17, 49, 15, ["👩🏿‍🎤"]] },
        "1f469-200d-1f3a8": { "1f3fb": ["1f469-1f3fb-200d-1f3a8", 17, 51, 15, ["👩🏻‍🎨"]], "1f3fc": ["1f469-1f3fc-200d-1f3a8", 17, 52, 15, ["👩🏼‍🎨"]], "1f3fd": ["1f469-1f3fd-200d-1f3a8", 17, 53, 15, ["👩🏽‍🎨"]], "1f3fe": ["1f469-1f3fe-200d-1f3a8", 17, 54, 15, ["👩🏾‍🎨"]], "1f3ff": ["1f469-1f3ff-200d-1f3a8", 17, 55, 15, ["👩🏿‍🎨"]] },
        "1f469-200d-1f3eb": { "1f3fb": ["1f469-1f3fb-200d-1f3eb", 17, 57, 15, ["👩🏻‍🏫"]], "1f3fc": ["1f469-1f3fc-200d-1f3eb", 17, 58, 15, ["👩🏼‍🏫"]], "1f3fd": ["1f469-1f3fd-200d-1f3eb", 17, 59, 15, ["👩🏽‍🏫"]], "1f3fe": ["1f469-1f3fe-200d-1f3eb", 17, 60, 15, ["👩🏾‍🏫"]], "1f3ff": ["1f469-1f3ff-200d-1f3eb", 18, 0, 15, ["👩🏿‍🏫"]] },
        "1f469-200d-1f3ed": { "1f3fb": ["1f469-1f3fb-200d-1f3ed", 18, 2, 15, ["👩🏻‍🏭"]], "1f3fc": ["1f469-1f3fc-200d-1f3ed", 18, 3, 15, ["👩🏼‍🏭"]], "1f3fd": ["1f469-1f3fd-200d-1f3ed", 18, 4, 15, ["👩🏽‍🏭"]], "1f3fe": ["1f469-1f3fe-200d-1f3ed", 18, 5, 15, ["👩🏾‍🏭"]], "1f3ff": ["1f469-1f3ff-200d-1f3ed", 18, 6, 15, ["👩🏿‍🏭"]] },
        "1f469-200d-1f4bb": { "1f3fb": ["1f469-1f3fb-200d-1f4bb", 18, 18, 15, ["👩🏻‍💻"]], "1f3fc": ["1f469-1f3fc-200d-1f4bb", 18, 19, 15, ["👩🏼‍💻"]], "1f3fd": ["1f469-1f3fd-200d-1f4bb", 18, 20, 15, ["👩🏽‍💻"]], "1f3fe": ["1f469-1f3fe-200d-1f4bb", 18, 21, 15, ["👩🏾‍💻"]], "1f3ff": ["1f469-1f3ff-200d-1f4bb", 18, 22, 15, ["👩🏿‍💻"]] },
        "1f469-200d-1f4bc": { "1f3fb": ["1f469-1f3fb-200d-1f4bc", 18, 24, 15, ["👩🏻‍💼"]], "1f3fc": ["1f469-1f3fc-200d-1f4bc", 18, 25, 15, ["👩🏼‍💼"]], "1f3fd": ["1f469-1f3fd-200d-1f4bc", 18, 26, 15, ["👩🏽‍💼"]], "1f3fe": ["1f469-1f3fe-200d-1f4bc", 18, 27, 15, ["👩🏾‍💼"]], "1f3ff": ["1f469-1f3ff-200d-1f4bc", 18, 28, 15, ["👩🏿‍💼"]] },
        "1f469-200d-1f527": { "1f3fb": ["1f469-1f3fb-200d-1f527", 18, 30, 15, ["👩🏻‍🔧"]], "1f3fc": ["1f469-1f3fc-200d-1f527", 18, 31, 15, ["👩🏼‍🔧"]], "1f3fd": ["1f469-1f3fd-200d-1f527", 18, 32, 15, ["👩🏽‍🔧"]], "1f3fe": ["1f469-1f3fe-200d-1f527", 18, 33, 15, ["👩🏾‍🔧"]], "1f3ff": ["1f469-1f3ff-200d-1f527", 18, 34, 15, ["👩🏿‍🔧"]] },
        "1f469-200d-1f52c": { "1f3fb": ["1f469-1f3fb-200d-1f52c", 18, 36, 15, ["👩🏻‍🔬"]], "1f3fc": ["1f469-1f3fc-200d-1f52c", 18, 37, 15, ["👩🏼‍🔬"]], "1f3fd": ["1f469-1f3fd-200d-1f52c", 18, 38, 15, ["👩🏽‍🔬"]], "1f3fe": ["1f469-1f3fe-200d-1f52c", 18, 39, 15, ["👩🏾‍🔬"]], "1f3ff": ["1f469-1f3ff-200d-1f52c", 18, 40, 15, ["👩🏿‍🔬"]] },
        "1f469-200d-1f680": { "1f3fb": ["1f469-1f3fb-200d-1f680", 18, 42, 15, ["👩🏻‍🚀"]], "1f3fc": ["1f469-1f3fc-200d-1f680", 18, 43, 15, ["👩🏼‍🚀"]], "1f3fd": ["1f469-1f3fd-200d-1f680", 18, 44, 15, ["👩🏽‍🚀"]], "1f3fe": ["1f469-1f3fe-200d-1f680", 18, 45, 15, ["👩🏾‍🚀"]], "1f3ff": ["1f469-1f3ff-200d-1f680", 18, 46, 15, ["👩🏿‍🚀"]] },
        "1f469-200d-1f692": { "1f3fb": ["1f469-1f3fb-200d-1f692", 18, 48, 15, ["👩🏻‍🚒"]], "1f3fc": ["1f469-1f3fc-200d-1f692", 18, 49, 15, ["👩🏼‍🚒"]], "1f3fd": ["1f469-1f3fd-200d-1f692", 18, 50, 15, ["👩🏽‍🚒"]], "1f3fe": ["1f469-1f3fe-200d-1f692", 18, 51, 15, ["👩🏾‍🚒"]], "1f3ff": ["1f469-1f3ff-200d-1f692", 18, 52, 15, ["👩🏿‍🚒"]] },
        "1f469-200d-1f9af": { "1f3fb": ["1f469-1f3fb-200d-1f9af", 18, 54, 15, ["👩🏻‍🦯"]], "1f3fc": ["1f469-1f3fc-200d-1f9af", 18, 55, 15, ["👩🏼‍🦯"]], "1f3fd": ["1f469-1f3fd-200d-1f9af", 18, 56, 15, ["👩🏽‍🦯"]], "1f3fe": ["1f469-1f3fe-200d-1f9af", 18, 57, 15, ["👩🏾‍🦯"]], "1f3ff": ["1f469-1f3ff-200d-1f9af", 18, 58, 15, ["👩🏿‍🦯"]] },
        "1f469-200d-1f9b0": { "1f3fb": ["1f469-1f3fb-200d-1f9b0", 18, 60, 15, ["👩🏻‍🦰"]], "1f3fc": ["1f469-1f3fc-200d-1f9b0", 19, 0, 15, ["👩🏼‍🦰"]], "1f3fd": ["1f469-1f3fd-200d-1f9b0", 19, 1, 15, ["👩🏽‍🦰"]], "1f3fe": ["1f469-1f3fe-200d-1f9b0", 19, 2, 15, ["👩🏾‍🦰"]], "1f3ff": ["1f469-1f3ff-200d-1f9b0", 19, 3, 15, ["👩🏿‍🦰"]] },
        "1f469-200d-1f9b1": { "1f3fb": ["1f469-1f3fb-200d-1f9b1", 19, 5, 15, ["👩🏻‍🦱"]], "1f3fc": ["1f469-1f3fc-200d-1f9b1", 19, 6, 15, ["👩🏼‍🦱"]], "1f3fd": ["1f469-1f3fd-200d-1f9b1", 19, 7, 15, ["👩🏽‍🦱"]], "1f3fe": ["1f469-1f3fe-200d-1f9b1", 19, 8, 15, ["👩🏾‍🦱"]], "1f3ff": ["1f469-1f3ff-200d-1f9b1", 19, 9, 15, ["👩🏿‍🦱"]] },
        "1f469-200d-1f9b2": { "1f3fb": ["1f469-1f3fb-200d-1f9b2", 19, 11, 15, ["👩🏻‍🦲"]], "1f3fc": ["1f469-1f3fc-200d-1f9b2", 19, 12, 15, ["👩🏼‍🦲"]], "1f3fd": ["1f469-1f3fd-200d-1f9b2", 19, 13, 15, ["👩🏽‍🦲"]], "1f3fe": ["1f469-1f3fe-200d-1f9b2", 19, 14, 15, ["👩🏾‍🦲"]], "1f3ff": ["1f469-1f3ff-200d-1f9b2", 19, 15, 15, ["👩🏿‍🦲"]] },
        "1f469-200d-1f9b3": { "1f3fb": ["1f469-1f3fb-200d-1f9b3", 19, 17, 15, ["👩🏻‍🦳"]], "1f3fc": ["1f469-1f3fc-200d-1f9b3", 19, 18, 15, ["👩🏼‍🦳"]], "1f3fd": ["1f469-1f3fd-200d-1f9b3", 19, 19, 15, ["👩🏽‍🦳"]], "1f3fe": ["1f469-1f3fe-200d-1f9b3", 19, 20, 15, ["👩🏾‍🦳"]], "1f3ff": ["1f469-1f3ff-200d-1f9b3", 19, 21, 15, ["👩🏿‍🦳"]] },
        "1f469-200d-1f9bc": { "1f3fb": ["1f469-1f3fb-200d-1f9bc", 19, 23, 15, ["👩🏻‍🦼"]], "1f3fc": ["1f469-1f3fc-200d-1f9bc", 19, 24, 15, ["👩🏼‍🦼"]], "1f3fd": ["1f469-1f3fd-200d-1f9bc", 19, 25, 15, ["👩🏽‍🦼"]], "1f3fe": ["1f469-1f3fe-200d-1f9bc", 19, 26, 15, ["👩🏾‍🦼"]], "1f3ff": ["1f469-1f3ff-200d-1f9bc", 19, 27, 15, ["👩🏿‍🦼"]] },
        "1f469-200d-1f9bd": { "1f3fb": ["1f469-1f3fb-200d-1f9bd", 19, 29, 15, ["👩🏻‍🦽"]], "1f3fc": ["1f469-1f3fc-200d-1f9bd", 19, 30, 15, ["👩🏼‍🦽"]], "1f3fd": ["1f469-1f3fd-200d-1f9bd", 19, 31, 15, ["👩🏽‍🦽"]], "1f3fe": ["1f469-1f3fe-200d-1f9bd", 19, 32, 15, ["👩🏾‍🦽"]], "1f3ff": ["1f469-1f3ff-200d-1f9bd", 19, 33, 15, ["👩🏿‍🦽"]] },
        "1f469-200d-2695-fe0f": { "1f3fb": ["1f469-1f3fb-200d-2695-fe0f", 19, 35, 15, ["👩🏻‍⚕️"]], "1f3fc": ["1f469-1f3fc-200d-2695-fe0f", 19, 36, 15, ["👩🏼‍⚕️"]], "1f3fd": ["1f469-1f3fd-200d-2695-fe0f", 19, 37, 15, ["👩🏽‍⚕️"]], "1f3fe": ["1f469-1f3fe-200d-2695-fe0f", 19, 38, 15, ["👩🏾‍⚕️"]], "1f3ff": ["1f469-1f3ff-200d-2695-fe0f", 19, 39, 15, ["👩🏿‍⚕️"]] },
        "1f469-200d-2696-fe0f": { "1f3fb": ["1f469-1f3fb-200d-2696-fe0f", 19, 41, 15, ["👩🏻‍⚖️"]], "1f3fc": ["1f469-1f3fc-200d-2696-fe0f", 19, 42, 15, ["👩🏼‍⚖️"]], "1f3fd": ["1f469-1f3fd-200d-2696-fe0f", 19, 43, 15, ["👩🏽‍⚖️"]], "1f3fe": ["1f469-1f3fe-200d-2696-fe0f", 19, 44, 15, ["👩🏾‍⚖️"]], "1f3ff": ["1f469-1f3ff-200d-2696-fe0f", 19, 45, 15, ["👩🏿‍⚖️"]] },
        "1f469-200d-2708-fe0f": { "1f3fb": ["1f469-1f3fb-200d-2708-fe0f", 19, 47, 15, ["👩🏻‍✈️"]], "1f3fc": ["1f469-1f3fc-200d-2708-fe0f", 19, 48, 15, ["👩🏼‍✈️"]], "1f3fd": ["1f469-1f3fd-200d-2708-fe0f", 19, 49, 15, ["👩🏽‍✈️"]], "1f3fe": ["1f469-1f3fe-200d-2708-fe0f", 19, 50, 15, ["👩🏾‍✈️"]], "1f3ff": ["1f469-1f3ff-200d-2708-fe0f", 19, 51, 15, ["👩🏿‍✈️"]] },
        "1f469-200d-2764-fe0f-200d-1f468": { "1f3fb-1f3fb": ["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb", 19, 53, 15, ["👩🏻‍❤️‍👨🏻"]], "1f3fb-1f3fc": ["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc", 19, 54, 15, ["👩🏻‍❤️‍👨🏼"]], "1f3fb-1f3fd": ["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd", 19, 55, 15, ["👩🏻‍❤️‍👨🏽"]], "1f3fb-1f3fe": ["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe", 19, 56, 15, ["👩🏻‍❤️‍👨🏾"]], "1f3fb-1f3ff": ["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff", 19, 57, 15, ["👩🏻‍❤️‍👨🏿"]], "1f3fc-1f3fb": ["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb", 19, 58, 15, ["👩🏼‍❤️‍👨🏻"]], "1f3fc-1f3fc": ["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc", 19, 59, 15, ["👩🏼‍❤️‍👨🏼"]], "1f3fc-1f3fd": ["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd", 19, 60, 15, ["👩🏼‍❤️‍👨🏽"]], "1f3fc-1f3fe": ["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe", 20, 0, 15, ["👩🏼‍❤️‍👨🏾"]], "1f3fc-1f3ff": ["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff", 20, 1, 15, ["👩🏼‍❤️‍👨🏿"]], "1f3fd-1f3fb": ["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb", 20, 2, 15, ["👩🏽‍❤️‍👨🏻"]], "1f3fd-1f3fc": ["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc", 20, 3, 15, ["👩🏽‍❤️‍👨🏼"]], "1f3fd-1f3fd": ["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd", 20, 4, 15, ["👩🏽‍❤️‍👨🏽"]], "1f3fd-1f3fe": ["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe", 20, 5, 15, ["👩🏽‍❤️‍👨🏾"]], "1f3fd-1f3ff": ["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff", 20, 6, 15, ["👩🏽‍❤️‍👨🏿"]], "1f3fe-1f3fb": ["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb", 20, 7, 15, ["👩🏾‍❤️‍👨🏻"]], "1f3fe-1f3fc": ["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc", 20, 8, 15, ["👩🏾‍❤️‍👨🏼"]], "1f3fe-1f3fd": ["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd", 20, 9, 15, ["👩🏾‍❤️‍👨🏽"]], "1f3fe-1f3fe": ["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe", 20, 10, 15, ["👩🏾‍❤️‍👨🏾"]], "1f3fe-1f3ff": ["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff", 20, 11, 15, ["👩🏾‍❤️‍👨🏿"]], "1f3ff-1f3fb": ["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb", 20, 12, 15, ["👩🏿‍❤️‍👨🏻"]], "1f3ff-1f3fc": ["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc", 20, 13, 15, ["👩🏿‍❤️‍👨🏼"]], "1f3ff-1f3fd": ["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd", 20, 14, 15, ["👩🏿‍❤️‍👨🏽"]], "1f3ff-1f3fe": ["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe", 20, 15, 15, ["👩🏿‍❤️‍👨🏾"]], "1f3ff-1f3ff": ["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff", 20, 16, 15, ["👩🏿‍❤️‍👨🏿"]] },
        "1f469-200d-2764-fe0f-200d-1f469": { "1f3fb-1f3fb": ["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb", 20, 18, 15, ["👩🏻‍❤️‍👩🏻"]], "1f3fb-1f3fc": ["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fc", 20, 19, 15, ["👩🏻‍❤️‍👩🏼"]], "1f3fb-1f3fd": ["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fd", 20, 20, 15, ["👩🏻‍❤️‍👩🏽"]], "1f3fb-1f3fe": ["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fe", 20, 21, 15, ["👩🏻‍❤️‍👩🏾"]], "1f3fb-1f3ff": ["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3ff", 20, 22, 15, ["👩🏻‍❤️‍👩🏿"]], "1f3fc-1f3fb": ["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fb", 20, 23, 15, ["👩🏼‍❤️‍👩🏻"]], "1f3fc-1f3fc": ["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc", 20, 24, 15, ["👩🏼‍❤️‍👩🏼"]], "1f3fc-1f3fd": ["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fd", 20, 25, 15, ["👩🏼‍❤️‍👩🏽"]], "1f3fc-1f3fe": ["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fe", 20, 26, 15, ["👩🏼‍❤️‍👩🏾"]], "1f3fc-1f3ff": ["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3ff", 20, 27, 15, ["👩🏼‍❤️‍👩🏿"]], "1f3fd-1f3fb": ["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fb", 20, 28, 15, ["👩🏽‍❤️‍👩🏻"]], "1f3fd-1f3fc": ["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fc", 20, 29, 15, ["👩🏽‍❤️‍👩🏼"]], "1f3fd-1f3fd": ["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd", 20, 30, 15, ["👩🏽‍❤️‍👩🏽"]], "1f3fd-1f3fe": ["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fe", 20, 31, 15, ["👩🏽‍❤️‍👩🏾"]], "1f3fd-1f3ff": ["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3ff", 20, 32, 15, ["👩🏽‍❤️‍👩🏿"]], "1f3fe-1f3fb": ["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fb", 20, 33, 15, ["👩🏾‍❤️‍👩🏻"]], "1f3fe-1f3fc": ["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fc", 20, 34, 15, ["👩🏾‍❤️‍👩🏼"]], "1f3fe-1f3fd": ["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fd", 20, 35, 15, ["👩🏾‍❤️‍👩🏽"]], "1f3fe-1f3fe": ["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe", 20, 36, 15, ["👩🏾‍❤️‍👩🏾"]], "1f3fe-1f3ff": ["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3ff", 20, 37, 15, ["👩🏾‍❤️‍👩🏿"]], "1f3ff-1f3fb": ["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fb", 20, 38, 15, ["👩🏿‍❤️‍👩🏻"]], "1f3ff-1f3fc": ["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fc", 20, 39, 15, ["👩🏿‍❤️‍👩🏼"]], "1f3ff-1f3fd": ["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fd", 20, 40, 15, ["👩🏿‍❤️‍👩🏽"]], "1f3ff-1f3fe": ["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fe", 20, 41, 15, ["👩🏿‍❤️‍👩🏾"]], "1f3ff-1f3ff": ["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff", 20, 42, 15, ["👩🏿‍❤️‍👩🏿"]] },
        "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468": { "1f3fb-1f3fb": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 20, 44, 15, ["👩🏻‍❤️‍💋‍👨🏻"]], "1f3fb-1f3fc": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 20, 45, 15, ["👩🏻‍❤️‍💋‍👨🏼"]], "1f3fb-1f3fd": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 20, 46, 15, ["👩🏻‍❤️‍💋‍👨🏽"]], "1f3fb-1f3fe": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 20, 47, 15, ["👩🏻‍❤️‍💋‍👨🏾"]], "1f3fb-1f3ff": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 20, 48, 15, ["👩🏻‍❤️‍💋‍👨🏿"]], "1f3fc-1f3fb": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 20, 49, 15, ["👩🏼‍❤️‍💋‍👨🏻"]], "1f3fc-1f3fc": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 20, 50, 15, ["👩🏼‍❤️‍💋‍👨🏼"]], "1f3fc-1f3fd": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 20, 51, 15, ["👩🏼‍❤️‍💋‍👨🏽"]], "1f3fc-1f3fe": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 20, 52, 15, ["👩🏼‍❤️‍💋‍👨🏾"]], "1f3fc-1f3ff": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 20, 53, 15, ["👩🏼‍❤️‍💋‍👨🏿"]], "1f3fd-1f3fb": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 20, 54, 15, ["👩🏽‍❤️‍💋‍👨🏻"]], "1f3fd-1f3fc": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 20, 55, 15, ["👩🏽‍❤️‍💋‍👨🏼"]], "1f3fd-1f3fd": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 20, 56, 15, ["👩🏽‍❤️‍💋‍👨🏽"]], "1f3fd-1f3fe": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 20, 57, 15, ["👩🏽‍❤️‍💋‍👨🏾"]], "1f3fd-1f3ff": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 20, 58, 15, ["👩🏽‍❤️‍💋‍👨🏿"]], "1f3fe-1f3fb": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 20, 59, 15, ["👩🏾‍❤️‍💋‍👨🏻"]], "1f3fe-1f3fc": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 20, 60, 15, ["👩🏾‍❤️‍💋‍👨🏼"]], "1f3fe-1f3fd": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 21, 0, 15, ["👩🏾‍❤️‍💋‍👨🏽"]], "1f3fe-1f3fe": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 21, 1, 15, ["👩🏾‍❤️‍💋‍👨🏾"]], "1f3fe-1f3ff": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 21, 2, 15, ["👩🏾‍❤️‍💋‍👨🏿"]], "1f3ff-1f3fb": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 21, 3, 15, ["👩🏿‍❤️‍💋‍👨🏻"]], "1f3ff-1f3fc": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 21, 4, 15, ["👩🏿‍❤️‍💋‍👨🏼"]], "1f3ff-1f3fd": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 21, 5, 15, ["👩🏿‍❤️‍💋‍👨🏽"]], "1f3ff-1f3fe": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 21, 6, 15, ["👩🏿‍❤️‍💋‍👨🏾"]], "1f3ff-1f3ff": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 21, 7, 15, ["👩🏿‍❤️‍💋‍👨🏿"]] },
        "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469": { "1f3fb-1f3fb": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", 21, 9, 15, ["👩🏻‍❤️‍💋‍👩🏻"]], "1f3fb-1f3fc": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", 21, 10, 15, ["👩🏻‍❤️‍💋‍👩🏼"]], "1f3fb-1f3fd": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", 21, 11, 15, ["👩🏻‍❤️‍💋‍👩🏽"]], "1f3fb-1f3fe": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", 21, 12, 15, ["👩🏻‍❤️‍💋‍👩🏾"]], "1f3fb-1f3ff": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", 21, 13, 15, ["👩🏻‍❤️‍💋‍👩🏿"]], "1f3fc-1f3fb": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", 21, 14, 15, ["👩🏼‍❤️‍💋‍👩🏻"]], "1f3fc-1f3fc": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", 21, 15, 15, ["👩🏼‍❤️‍💋‍👩🏼"]], "1f3fc-1f3fd": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", 21, 16, 15, ["👩🏼‍❤️‍💋‍👩🏽"]], "1f3fc-1f3fe": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", 21, 17, 15, ["👩🏼‍❤️‍💋‍👩🏾"]], "1f3fc-1f3ff": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", 21, 18, 15, ["👩🏼‍❤️‍💋‍👩🏿"]], "1f3fd-1f3fb": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", 21, 19, 15, ["👩🏽‍❤️‍💋‍👩🏻"]], "1f3fd-1f3fc": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", 21, 20, 15, ["👩🏽‍❤️‍💋‍👩🏼"]], "1f3fd-1f3fd": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", 21, 21, 15, ["👩🏽‍❤️‍💋‍👩🏽"]], "1f3fd-1f3fe": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", 21, 22, 15, ["👩🏽‍❤️‍💋‍👩🏾"]], "1f3fd-1f3ff": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", 21, 23, 15, ["👩🏽‍❤️‍💋‍👩🏿"]], "1f3fe-1f3fb": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", 21, 24, 15, ["👩🏾‍❤️‍💋‍👩🏻"]], "1f3fe-1f3fc": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", 21, 25, 15, ["👩🏾‍❤️‍💋‍👩🏼"]], "1f3fe-1f3fd": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", 21, 26, 15, ["👩🏾‍❤️‍💋‍👩🏽"]], "1f3fe-1f3fe": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", 21, 27, 15, ["👩🏾‍❤️‍💋‍👩🏾"]], "1f3fe-1f3ff": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", 21, 28, 15, ["👩🏾‍❤️‍💋‍👩🏿"]], "1f3ff-1f3fb": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", 21, 29, 15, ["👩🏿‍❤️‍💋‍👩🏻"]], "1f3ff-1f3fc": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", 21, 30, 15, ["👩🏿‍❤️‍💋‍👩🏼"]], "1f3ff-1f3fd": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", 21, 31, 15, ["👩🏿‍❤️‍💋‍👩🏽"]], "1f3ff-1f3fe": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", 21, 32, 15, ["👩🏿‍❤️‍💋‍👩🏾"]], "1f3ff-1f3ff": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", 21, 33, 15, ["👩🏿‍❤️‍💋‍👩🏿"]] },
        "1f469": { "1f3fb": ["1f469-1f3fb", 21, 35, 15, ["👩🏻"]], "1f3fc": ["1f469-1f3fc", 21, 36, 15, ["👩🏼"]], "1f3fd": ["1f469-1f3fd", 21, 37, 15, ["👩🏽"]], "1f3fe": ["1f469-1f3fe", 21, 38, 15, ["👩🏾"]], "1f3ff": ["1f469-1f3ff", 21, 39, 15, ["👩🏿"]] },
        "1f46b": { "1f3fb": ["1f46b-1f3fb", 21, 42, 15, ["👫🏻"]], "1f3fc": ["1f46b-1f3fc", 21, 43, 15, ["👫🏼"]], "1f3fd": ["1f46b-1f3fd", 21, 44, 15, ["👫🏽"]], "1f3fe": ["1f46b-1f3fe", 21, 45, 15, ["👫🏾"]], "1f3ff": ["1f46b-1f3ff", 21, 46, 15, ["👫🏿"]], "1f3fb-1f3fc": ["1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc", 21, 47, 15, ["👩🏻‍🤝‍👨🏼"]], "1f3fb-1f3fd": ["1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd", 21, 48, 15, ["👩🏻‍🤝‍👨🏽"]], "1f3fb-1f3fe": ["1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe", 21, 49, 15, ["👩🏻‍🤝‍👨🏾"]], "1f3fb-1f3ff": ["1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff", 21, 50, 15, ["👩🏻‍🤝‍👨🏿"]], "1f3fc-1f3fb": ["1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb", 21, 51, 15, ["👩🏼‍🤝‍👨🏻"]], "1f3fc-1f3fd": ["1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd", 21, 52, 15, ["👩🏼‍🤝‍👨🏽"]], "1f3fc-1f3fe": ["1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe", 21, 53, 15, ["👩🏼‍🤝‍👨🏾"]], "1f3fc-1f3ff": ["1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff", 21, 54, 15, ["👩🏼‍🤝‍👨🏿"]], "1f3fd-1f3fb": ["1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb", 21, 55, 15, ["👩🏽‍🤝‍👨🏻"]], "1f3fd-1f3fc": ["1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc", 21, 56, 15, ["👩🏽‍🤝‍👨🏼"]], "1f3fd-1f3fe": ["1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe", 21, 57, 15, ["👩🏽‍🤝‍👨🏾"]], "1f3fd-1f3ff": ["1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff", 21, 58, 15, ["👩🏽‍🤝‍👨🏿"]], "1f3fe-1f3fb": ["1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb", 21, 59, 15, ["👩🏾‍🤝‍👨🏻"]], "1f3fe-1f3fc": ["1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc", 21, 60, 15, ["👩🏾‍🤝‍👨🏼"]], "1f3fe-1f3fd": ["1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd", 22, 0, 15, ["👩🏾‍🤝‍👨🏽"]], "1f3fe-1f3ff": ["1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff", 22, 1, 15, ["👩🏾‍🤝‍👨🏿"]], "1f3ff-1f3fb": ["1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb", 22, 2, 15, ["👩🏿‍🤝‍👨🏻"]], "1f3ff-1f3fc": ["1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc", 22, 3, 15, ["👩🏿‍🤝‍👨🏼"]], "1f3ff-1f3fd": ["1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd", 22, 4, 15, ["👩🏿‍🤝‍👨🏽"]], "1f3ff-1f3fe": ["1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe", 22, 5, 15, ["👩🏿‍🤝‍👨🏾"]] },
        "1f46c": { "1f3fb": ["1f46c-1f3fb", 22, 7, 15, ["👬🏻"]], "1f3fc": ["1f46c-1f3fc", 22, 8, 15, ["👬🏼"]], "1f3fd": ["1f46c-1f3fd", 22, 9, 15, ["👬🏽"]], "1f3fe": ["1f46c-1f3fe", 22, 10, 15, ["👬🏾"]], "1f3ff": ["1f46c-1f3ff", 22, 11, 15, ["👬🏿"]], "1f3fb-1f3fc": ["1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc", 22, 12, 15, ["👨🏻‍🤝‍👨🏼"]], "1f3fb-1f3fd": ["1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd", 22, 13, 15, ["👨🏻‍🤝‍👨🏽"]], "1f3fb-1f3fe": ["1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe", 22, 14, 15, ["👨🏻‍🤝‍👨🏾"]], "1f3fb-1f3ff": ["1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff", 22, 15, 15, ["👨🏻‍🤝‍👨🏿"]], "1f3fc-1f3fb": ["1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb", 22, 16, 15, ["👨🏼‍🤝‍👨🏻"]], "1f3fc-1f3fd": ["1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd", 22, 17, 15, ["👨🏼‍🤝‍👨🏽"]], "1f3fc-1f3fe": ["1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe", 22, 18, 15, ["👨🏼‍🤝‍👨🏾"]], "1f3fc-1f3ff": ["1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff", 22, 19, 15, ["👨🏼‍🤝‍👨🏿"]], "1f3fd-1f3fb": ["1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb", 22, 20, 15, ["👨🏽‍🤝‍👨🏻"]], "1f3fd-1f3fc": ["1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc", 22, 21, 15, ["👨🏽‍🤝‍👨🏼"]], "1f3fd-1f3fe": ["1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe", 22, 22, 15, ["👨🏽‍🤝‍👨🏾"]], "1f3fd-1f3ff": ["1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff", 22, 23, 15, ["👨🏽‍🤝‍👨🏿"]], "1f3fe-1f3fb": ["1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb", 22, 24, 15, ["👨🏾‍🤝‍👨🏻"]], "1f3fe-1f3fc": ["1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc", 22, 25, 15, ["👨🏾‍🤝‍👨🏼"]], "1f3fe-1f3fd": ["1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd", 22, 26, 15, ["👨🏾‍🤝‍👨🏽"]], "1f3fe-1f3ff": ["1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff", 22, 27, 15, ["👨🏾‍🤝‍👨🏿"]], "1f3ff-1f3fb": ["1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb", 22, 28, 15, ["👨🏿‍🤝‍👨🏻"]], "1f3ff-1f3fc": ["1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc", 22, 29, 15, ["👨🏿‍🤝‍👨🏼"]], "1f3ff-1f3fd": ["1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd", 22, 30, 15, ["👨🏿‍🤝‍👨🏽"]], "1f3ff-1f3fe": ["1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe", 22, 31, 15, ["👨🏿‍🤝‍👨🏾"]] },
        "1f46d": { "1f3fb": ["1f46d-1f3fb", 22, 33, 15, ["👭🏻"]], "1f3fc": ["1f46d-1f3fc", 22, 34, 15, ["👭🏼"]], "1f3fd": ["1f46d-1f3fd", 22, 35, 15, ["👭🏽"]], "1f3fe": ["1f46d-1f3fe", 22, 36, 15, ["👭🏾"]], "1f3ff": ["1f46d-1f3ff", 22, 37, 15, ["👭🏿"]], "1f3fb-1f3fc": ["1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc", 22, 38, 15, ["👩🏻‍🤝‍👩🏼"]], "1f3fb-1f3fd": ["1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd", 22, 39, 15, ["👩🏻‍🤝‍👩🏽"]], "1f3fb-1f3fe": ["1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe", 22, 40, 15, ["👩🏻‍🤝‍👩🏾"]], "1f3fb-1f3ff": ["1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff", 22, 41, 15, ["👩🏻‍🤝‍👩🏿"]], "1f3fc-1f3fb": ["1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb", 22, 42, 15, ["👩🏼‍🤝‍👩🏻"]], "1f3fc-1f3fd": ["1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd", 22, 43, 15, ["👩🏼‍🤝‍👩🏽"]], "1f3fc-1f3fe": ["1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe", 22, 44, 15, ["👩🏼‍🤝‍👩🏾"]], "1f3fc-1f3ff": ["1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff", 22, 45, 15, ["👩🏼‍🤝‍👩🏿"]], "1f3fd-1f3fb": ["1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb", 22, 46, 15, ["👩🏽‍🤝‍👩🏻"]], "1f3fd-1f3fc": ["1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc", 22, 47, 15, ["👩🏽‍🤝‍👩🏼"]], "1f3fd-1f3fe": ["1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe", 22, 48, 15, ["👩🏽‍🤝‍👩🏾"]], "1f3fd-1f3ff": ["1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff", 22, 49, 15, ["👩🏽‍🤝‍👩🏿"]], "1f3fe-1f3fb": ["1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb", 22, 50, 15, ["👩🏾‍🤝‍👩🏻"]], "1f3fe-1f3fc": ["1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc", 22, 51, 15, ["👩🏾‍🤝‍👩🏼"]], "1f3fe-1f3fd": ["1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd", 22, 52, 15, ["👩🏾‍🤝‍👩🏽"]], "1f3fe-1f3ff": ["1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff", 22, 53, 15, ["👩🏾‍🤝‍👩🏿"]], "1f3ff-1f3fb": ["1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb", 22, 54, 15, ["👩🏿‍🤝‍👩🏻"]], "1f3ff-1f3fc": ["1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc", 22, 55, 15, ["👩🏿‍🤝‍👩🏼"]], "1f3ff-1f3fd": ["1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd", 22, 56, 15, ["👩🏿‍🤝‍👩🏽"]], "1f3ff-1f3fe": ["1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe", 22, 57, 15, ["👩🏿‍🤝‍👩🏾"]] },
        "1f46e-200d-2640-fe0f": { "1f3fb": ["1f46e-1f3fb-200d-2640-fe0f", 22, 59, 15, ["👮🏻‍♀️"]], "1f3fc": ["1f46e-1f3fc-200d-2640-fe0f", 22, 60, 15, ["👮🏼‍♀️"]], "1f3fd": ["1f46e-1f3fd-200d-2640-fe0f", 23, 0, 15, ["👮🏽‍♀️"]], "1f3fe": ["1f46e-1f3fe-200d-2640-fe0f", 23, 1, 15, ["👮🏾‍♀️"]], "1f3ff": ["1f46e-1f3ff-200d-2640-fe0f", 23, 2, 15, ["👮🏿‍♀️"]] },
        "1f46e-200d-2642-fe0f": { "1f3fb": ["1f46e-1f3fb-200d-2642-fe0f", 23, 4, 15, ["👮🏻‍♂️", "👮🏻"]], "1f3fc": ["1f46e-1f3fc-200d-2642-fe0f", 23, 5, 15, ["👮🏼‍♂️", "👮🏼"]], "1f3fd": ["1f46e-1f3fd-200d-2642-fe0f", 23, 6, 15, ["👮🏽‍♂️", "👮🏽"]], "1f3fe": ["1f46e-1f3fe-200d-2642-fe0f", 23, 7, 15, ["👮🏾‍♂️", "👮🏾"]], "1f3ff": ["1f46e-1f3ff-200d-2642-fe0f", 23, 8, 15, ["👮🏿‍♂️", "👮🏿"]] },
        "1f470-200d-2640-fe0f": { "1f3fb": ["1f470-1f3fb-200d-2640-fe0f", 23, 19, 15, ["👰🏻‍♀️"]], "1f3fc": ["1f470-1f3fc-200d-2640-fe0f", 23, 20, 15, ["👰🏼‍♀️"]], "1f3fd": ["1f470-1f3fd-200d-2640-fe0f", 23, 21, 15, ["👰🏽‍♀️"]], "1f3fe": ["1f470-1f3fe-200d-2640-fe0f", 23, 22, 15, ["👰🏾‍♀️"]], "1f3ff": ["1f470-1f3ff-200d-2640-fe0f", 23, 23, 15, ["👰🏿‍♀️"]] },
        "1f470-200d-2642-fe0f": { "1f3fb": ["1f470-1f3fb-200d-2642-fe0f", 23, 25, 15, ["👰🏻‍♂️"]], "1f3fc": ["1f470-1f3fc-200d-2642-fe0f", 23, 26, 15, ["👰🏼‍♂️"]], "1f3fd": ["1f470-1f3fd-200d-2642-fe0f", 23, 27, 15, ["👰🏽‍♂️"]], "1f3fe": ["1f470-1f3fe-200d-2642-fe0f", 23, 28, 15, ["👰🏾‍♂️"]], "1f3ff": ["1f470-1f3ff-200d-2642-fe0f", 23, 29, 15, ["👰🏿‍♂️"]] },
        "1f470": { "1f3fb": ["1f470-1f3fb", 23, 31, 15, ["👰🏻"]], "1f3fc": ["1f470-1f3fc", 23, 32, 15, ["👰🏼"]], "1f3fd": ["1f470-1f3fd", 23, 33, 15, ["👰🏽"]], "1f3fe": ["1f470-1f3fe", 23, 34, 15, ["👰🏾"]], "1f3ff": ["1f470-1f3ff", 23, 35, 15, ["👰🏿"]] },
        "1f471-200d-2640-fe0f": { "1f3fb": ["1f471-1f3fb-200d-2640-fe0f", 23, 37, 15, ["👱🏻‍♀️"]], "1f3fc": ["1f471-1f3fc-200d-2640-fe0f", 23, 38, 15, ["👱🏼‍♀️"]], "1f3fd": ["1f471-1f3fd-200d-2640-fe0f", 23, 39, 15, ["👱🏽‍♀️"]], "1f3fe": ["1f471-1f3fe-200d-2640-fe0f", 23, 40, 15, ["👱🏾‍♀️"]], "1f3ff": ["1f471-1f3ff-200d-2640-fe0f", 23, 41, 15, ["👱🏿‍♀️"]] },
        "1f471-200d-2642-fe0f": { "1f3fb": ["1f471-1f3fb-200d-2642-fe0f", 23, 43, 15, ["👱🏻‍♂️", "👱🏻"]], "1f3fc": ["1f471-1f3fc-200d-2642-fe0f", 23, 44, 15, ["👱🏼‍♂️", "👱🏼"]], "1f3fd": ["1f471-1f3fd-200d-2642-fe0f", 23, 45, 15, ["👱🏽‍♂️", "👱🏽"]], "1f3fe": ["1f471-1f3fe-200d-2642-fe0f", 23, 46, 15, ["👱🏾‍♂️", "👱🏾"]], "1f3ff": ["1f471-1f3ff-200d-2642-fe0f", 23, 47, 15, ["👱🏿‍♂️", "👱🏿"]] },
        "1f472": { "1f3fb": ["1f472-1f3fb", 23, 55, 15, ["👲🏻"]], "1f3fc": ["1f472-1f3fc", 23, 56, 15, ["👲🏼"]], "1f3fd": ["1f472-1f3fd", 23, 57, 15, ["👲🏽"]], "1f3fe": ["1f472-1f3fe", 23, 58, 15, ["👲🏾"]], "1f3ff": ["1f472-1f3ff", 23, 59, 15, ["👲🏿"]] },
        "1f473-200d-2640-fe0f": { "1f3fb": ["1f473-1f3fb-200d-2640-fe0f", 24, 0, 15, ["👳🏻‍♀️"]], "1f3fc": ["1f473-1f3fc-200d-2640-fe0f", 24, 1, 15, ["👳🏼‍♀️"]], "1f3fd": ["1f473-1f3fd-200d-2640-fe0f", 24, 2, 15, ["👳🏽‍♀️"]], "1f3fe": ["1f473-1f3fe-200d-2640-fe0f", 24, 3, 15, ["👳🏾‍♀️"]], "1f3ff": ["1f473-1f3ff-200d-2640-fe0f", 24, 4, 15, ["👳🏿‍♀️"]] },
        "1f473-200d-2642-fe0f": { "1f3fb": ["1f473-1f3fb-200d-2642-fe0f", 24, 6, 15, ["👳🏻‍♂️", "👳🏻"]], "1f3fc": ["1f473-1f3fc-200d-2642-fe0f", 24, 7, 15, ["👳🏼‍♂️", "👳🏼"]], "1f3fd": ["1f473-1f3fd-200d-2642-fe0f", 24, 8, 15, ["👳🏽‍♂️", "👳🏽"]], "1f3fe": ["1f473-1f3fe-200d-2642-fe0f", 24, 9, 15, ["👳🏾‍♂️", "👳🏾"]], "1f3ff": ["1f473-1f3ff-200d-2642-fe0f", 24, 10, 15, ["👳🏿‍♂️", "👳🏿"]] },
        "1f474": { "1f3fb": ["1f474-1f3fb", 24, 18, 15, ["👴🏻"]], "1f3fc": ["1f474-1f3fc", 24, 19, 15, ["👴🏼"]], "1f3fd": ["1f474-1f3fd", 24, 20, 15, ["👴🏽"]], "1f3fe": ["1f474-1f3fe", 24, 21, 15, ["👴🏾"]], "1f3ff": ["1f474-1f3ff", 24, 22, 15, ["👴🏿"]] },
        "1f475": { "1f3fb": ["1f475-1f3fb", 24, 24, 15, ["👵🏻"]], "1f3fc": ["1f475-1f3fc", 24, 25, 15, ["👵🏼"]], "1f3fd": ["1f475-1f3fd", 24, 26, 15, ["👵🏽"]], "1f3fe": ["1f475-1f3fe", 24, 27, 15, ["👵🏾"]], "1f3ff": ["1f475-1f3ff", 24, 28, 15, ["👵🏿"]] },
        "1f476": { "1f3fb": ["1f476-1f3fb", 24, 30, 15, ["👶🏻"]], "1f3fc": ["1f476-1f3fc", 24, 31, 15, ["👶🏼"]], "1f3fd": ["1f476-1f3fd", 24, 32, 15, ["👶🏽"]], "1f3fe": ["1f476-1f3fe", 24, 33, 15, ["👶🏾"]], "1f3ff": ["1f476-1f3ff", 24, 34, 15, ["👶🏿"]] },
        "1f477-200d-2640-fe0f": { "1f3fb": ["1f477-1f3fb-200d-2640-fe0f", 24, 36, 15, ["👷🏻‍♀️"]], "1f3fc": ["1f477-1f3fc-200d-2640-fe0f", 24, 37, 15, ["👷🏼‍♀️"]], "1f3fd": ["1f477-1f3fd-200d-2640-fe0f", 24, 38, 15, ["👷🏽‍♀️"]], "1f3fe": ["1f477-1f3fe-200d-2640-fe0f", 24, 39, 15, ["👷🏾‍♀️"]], "1f3ff": ["1f477-1f3ff-200d-2640-fe0f", 24, 40, 15, ["👷🏿‍♀️"]] },
        "1f477-200d-2642-fe0f": { "1f3fb": ["1f477-1f3fb-200d-2642-fe0f", 24, 42, 15, ["👷🏻‍♂️", "👷🏻"]], "1f3fc": ["1f477-1f3fc-200d-2642-fe0f", 24, 43, 15, ["👷🏼‍♂️", "👷🏼"]], "1f3fd": ["1f477-1f3fd-200d-2642-fe0f", 24, 44, 15, ["👷🏽‍♂️", "👷🏽"]], "1f3fe": ["1f477-1f3fe-200d-2642-fe0f", 24, 45, 15, ["👷🏾‍♂️", "👷🏾"]], "1f3ff": ["1f477-1f3ff-200d-2642-fe0f", 24, 46, 15, ["👷🏿‍♂️", "👷🏿"]] },
        "1f478": { "1f3fb": ["1f478-1f3fb", 24, 54, 15, ["👸🏻"]], "1f3fc": ["1f478-1f3fc", 24, 55, 15, ["👸🏼"]], "1f3fd": ["1f478-1f3fd", 24, 56, 15, ["👸🏽"]], "1f3fe": ["1f478-1f3fe", 24, 57, 15, ["👸🏾"]], "1f3ff": ["1f478-1f3ff", 24, 58, 15, ["👸🏿"]] },
        "1f47c": { "1f3fb": ["1f47c-1f3fb", 25, 2, 15, ["👼🏻"]], "1f3fc": ["1f47c-1f3fc", 25, 3, 15, ["👼🏼"]], "1f3fd": ["1f47c-1f3fd", 25, 4, 15, ["👼🏽"]], "1f3fe": ["1f47c-1f3fe", 25, 5, 15, ["👼🏾"]], "1f3ff": ["1f47c-1f3ff", 25, 6, 15, ["👼🏿"]] },
        "1f481-200d-2640-fe0f": { "1f3fb": ["1f481-1f3fb-200d-2640-fe0f", 25, 12, 15, ["💁🏻‍♀️", "💁🏻"]], "1f3fc": ["1f481-1f3fc-200d-2640-fe0f", 25, 13, 15, ["💁🏼‍♀️", "💁🏼"]], "1f3fd": ["1f481-1f3fd-200d-2640-fe0f", 25, 14, 15, ["💁🏽‍♀️", "💁🏽"]], "1f3fe": ["1f481-1f3fe-200d-2640-fe0f", 25, 15, 15, ["💁🏾‍♀️", "💁🏾"]], "1f3ff": ["1f481-1f3ff-200d-2640-fe0f", 25, 16, 15, ["💁🏿‍♀️", "💁🏿"]] },
        "1f481-200d-2642-fe0f": { "1f3fb": ["1f481-1f3fb-200d-2642-fe0f", 25, 18, 15, ["💁🏻‍♂️"]], "1f3fc": ["1f481-1f3fc-200d-2642-fe0f", 25, 19, 15, ["💁🏼‍♂️"]], "1f3fd": ["1f481-1f3fd-200d-2642-fe0f", 25, 20, 15, ["💁🏽‍♂️"]], "1f3fe": ["1f481-1f3fe-200d-2642-fe0f", 25, 21, 15, ["💁🏾‍♂️"]], "1f3ff": ["1f481-1f3ff-200d-2642-fe0f", 25, 22, 15, ["💁🏿‍♂️"]] },
        "1f482-200d-2640-fe0f": { "1f3fb": ["1f482-1f3fb-200d-2640-fe0f", 25, 30, 15, ["💂🏻‍♀️"]], "1f3fc": ["1f482-1f3fc-200d-2640-fe0f", 25, 31, 15, ["💂🏼‍♀️"]], "1f3fd": ["1f482-1f3fd-200d-2640-fe0f", 25, 32, 15, ["💂🏽‍♀️"]], "1f3fe": ["1f482-1f3fe-200d-2640-fe0f", 25, 33, 15, ["💂🏾‍♀️"]], "1f3ff": ["1f482-1f3ff-200d-2640-fe0f", 25, 34, 15, ["💂🏿‍♀️"]] },
        "1f482-200d-2642-fe0f": { "1f3fb": ["1f482-1f3fb-200d-2642-fe0f", 25, 36, 15, ["💂🏻‍♂️", "💂🏻"]], "1f3fc": ["1f482-1f3fc-200d-2642-fe0f", 25, 37, 15, ["💂🏼‍♂️", "💂🏼"]], "1f3fd": ["1f482-1f3fd-200d-2642-fe0f", 25, 38, 15, ["💂🏽‍♂️", "💂🏽"]], "1f3fe": ["1f482-1f3fe-200d-2642-fe0f", 25, 39, 15, ["💂🏾‍♂️", "💂🏾"]], "1f3ff": ["1f482-1f3ff-200d-2642-fe0f", 25, 40, 15, ["💂🏿‍♂️", "💂🏿"]] },
        "1f483": { "1f3fb": ["1f483-1f3fb", 25, 48, 15, ["💃🏻"]], "1f3fc": ["1f483-1f3fc", 25, 49, 15, ["💃🏼"]], "1f3fd": ["1f483-1f3fd", 25, 50, 15, ["💃🏽"]], "1f3fe": ["1f483-1f3fe", 25, 51, 15, ["💃🏾"]], "1f3ff": ["1f483-1f3ff", 25, 52, 15, ["💃🏿"]] },
        "1f485": { "1f3fb": ["1f485-1f3fb", 25, 55, 15, ["💅🏻"]], "1f3fc": ["1f485-1f3fc", 25, 56, 15, ["💅🏼"]], "1f3fd": ["1f485-1f3fd", 25, 57, 15, ["💅🏽"]], "1f3fe": ["1f485-1f3fe", 25, 58, 15, ["💅🏾"]], "1f3ff": ["1f485-1f3ff", 25, 59, 15, ["💅🏿"]] },
        "1f486-200d-2640-fe0f": { "1f3fb": ["1f486-1f3fb-200d-2640-fe0f", 26, 0, 15, ["💆🏻‍♀️", "💆🏻"]], "1f3fc": ["1f486-1f3fc-200d-2640-fe0f", 26, 1, 15, ["💆🏼‍♀️", "💆🏼"]], "1f3fd": ["1f486-1f3fd-200d-2640-fe0f", 26, 2, 15, ["💆🏽‍♀️", "💆🏽"]], "1f3fe": ["1f486-1f3fe-200d-2640-fe0f", 26, 3, 15, ["💆🏾‍♀️", "💆🏾"]], "1f3ff": ["1f486-1f3ff-200d-2640-fe0f", 26, 4, 15, ["💆🏿‍♀️", "💆🏿"]] },
        "1f486-200d-2642-fe0f": { "1f3fb": ["1f486-1f3fb-200d-2642-fe0f", 26, 6, 15, ["💆🏻‍♂️"]], "1f3fc": ["1f486-1f3fc-200d-2642-fe0f", 26, 7, 15, ["💆🏼‍♂️"]], "1f3fd": ["1f486-1f3fd-200d-2642-fe0f", 26, 8, 15, ["💆🏽‍♂️"]], "1f3fe": ["1f486-1f3fe-200d-2642-fe0f", 26, 9, 15, ["💆🏾‍♂️"]], "1f3ff": ["1f486-1f3ff-200d-2642-fe0f", 26, 10, 15, ["💆🏿‍♂️"]] },
        "1f487-200d-2640-fe0f": { "1f3fb": ["1f487-1f3fb-200d-2640-fe0f", 26, 18, 15, ["💇🏻‍♀️", "💇🏻"]], "1f3fc": ["1f487-1f3fc-200d-2640-fe0f", 26, 19, 15, ["💇🏼‍♀️", "💇🏼"]], "1f3fd": ["1f487-1f3fd-200d-2640-fe0f", 26, 20, 15, ["💇🏽‍♀️", "💇🏽"]], "1f3fe": ["1f487-1f3fe-200d-2640-fe0f", 26, 21, 15, ["💇🏾‍♀️", "💇🏾"]], "1f3ff": ["1f487-1f3ff-200d-2640-fe0f", 26, 22, 15, ["💇🏿‍♀️", "💇🏿"]] },
        "1f487-200d-2642-fe0f": { "1f3fb": ["1f487-1f3fb-200d-2642-fe0f", 26, 24, 15, ["💇🏻‍♂️"]], "1f3fc": ["1f487-1f3fc-200d-2642-fe0f", 26, 25, 15, ["💇🏼‍♂️"]], "1f3fd": ["1f487-1f3fd-200d-2642-fe0f", 26, 26, 15, ["💇🏽‍♂️"]], "1f3fe": ["1f487-1f3fe-200d-2642-fe0f", 26, 27, 15, ["💇🏾‍♂️"]], "1f3ff": ["1f487-1f3ff-200d-2642-fe0f", 26, 28, 15, ["💇🏿‍♂️"]] },
        "1f48f": { "1f3fb": ["1f48f-1f3fb", 26, 43, 15, ["💏🏻"]], "1f3fc": ["1f48f-1f3fc", 26, 44, 15, ["💏🏼"]], "1f3fd": ["1f48f-1f3fd", 26, 45, 15, ["💏🏽"]], "1f3fe": ["1f48f-1f3fe", 26, 46, 15, ["💏🏾"]], "1f3ff": ["1f48f-1f3ff", 26, 47, 15, ["💏🏿"]], "1f3fb-1f3fc": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc", 26, 48, 15, ["🧑🏻‍❤️‍💋‍🧑🏼"]], "1f3fb-1f3fd": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd", 26, 49, 15, ["🧑🏻‍❤️‍💋‍🧑🏽"]], "1f3fb-1f3fe": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe", 26, 50, 15, ["🧑🏻‍❤️‍💋‍🧑🏾"]], "1f3fb-1f3ff": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff", 26, 51, 15, ["🧑🏻‍❤️‍💋‍🧑🏿"]], "1f3fc-1f3fb": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb", 26, 52, 15, ["🧑🏼‍❤️‍💋‍🧑🏻"]], "1f3fc-1f3fd": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd", 26, 53, 15, ["🧑🏼‍❤️‍💋‍🧑🏽"]], "1f3fc-1f3fe": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe", 26, 54, 15, ["🧑🏼‍❤️‍💋‍🧑🏾"]], "1f3fc-1f3ff": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff", 26, 55, 15, ["🧑🏼‍❤️‍💋‍🧑🏿"]], "1f3fd-1f3fb": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb", 26, 56, 15, ["🧑🏽‍❤️‍💋‍🧑🏻"]], "1f3fd-1f3fc": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc", 26, 57, 15, ["🧑🏽‍❤️‍💋‍🧑🏼"]], "1f3fd-1f3fe": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe", 26, 58, 15, ["🧑🏽‍❤️‍💋‍🧑🏾"]], "1f3fd-1f3ff": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff", 26, 59, 15, ["🧑🏽‍❤️‍💋‍🧑🏿"]], "1f3fe-1f3fb": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb", 26, 60, 15, ["🧑🏾‍❤️‍💋‍🧑🏻"]], "1f3fe-1f3fc": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc", 27, 0, 15, ["🧑🏾‍❤️‍💋‍🧑🏼"]], "1f3fe-1f3fd": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd", 27, 1, 15, ["🧑🏾‍❤️‍💋‍🧑🏽"]], "1f3fe-1f3ff": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff", 27, 2, 15, ["🧑🏾‍❤️‍💋‍🧑🏿"]], "1f3ff-1f3fb": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb", 27, 3, 15, ["🧑🏿‍❤️‍💋‍🧑🏻"]], "1f3ff-1f3fc": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc", 27, 4, 15, ["🧑🏿‍❤️‍💋‍🧑🏼"]], "1f3ff-1f3fd": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd", 27, 5, 15, ["🧑🏿‍❤️‍💋‍🧑🏽"]], "1f3ff-1f3fe": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe", 27, 6, 15, ["🧑🏿‍❤️‍💋‍🧑🏾"]] },
        "1f491": { "1f3fb": ["1f491-1f3fb", 27, 9, 15, ["💑🏻"]], "1f3fc": ["1f491-1f3fc", 27, 10, 15, ["💑🏼"]], "1f3fd": ["1f491-1f3fd", 27, 11, 15, ["💑🏽"]], "1f3fe": ["1f491-1f3fe", 27, 12, 15, ["💑🏾"]], "1f3ff": ["1f491-1f3ff", 27, 13, 15, ["💑🏿"]], "1f3fb-1f3fc": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fc", 27, 14, 15, ["🧑🏻‍❤️‍🧑🏼"]], "1f3fb-1f3fd": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fd", 27, 15, 15, ["🧑🏻‍❤️‍🧑🏽"]], "1f3fb-1f3fe": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fe", 27, 16, 15, ["🧑🏻‍❤️‍🧑🏾"]], "1f3fb-1f3ff": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3ff", 27, 17, 15, ["🧑🏻‍❤️‍🧑🏿"]], "1f3fc-1f3fb": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fb", 27, 18, 15, ["🧑🏼‍❤️‍🧑🏻"]], "1f3fc-1f3fd": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fd", 27, 19, 15, ["🧑🏼‍❤️‍🧑🏽"]], "1f3fc-1f3fe": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fe", 27, 20, 15, ["🧑🏼‍❤️‍🧑🏾"]], "1f3fc-1f3ff": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3ff", 27, 21, 15, ["🧑🏼‍❤️‍🧑🏿"]], "1f3fd-1f3fb": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fb", 27, 22, 15, ["🧑🏽‍❤️‍🧑🏻"]], "1f3fd-1f3fc": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fc", 27, 23, 15, ["🧑🏽‍❤️‍🧑🏼"]], "1f3fd-1f3fe": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fe", 27, 24, 15, ["🧑🏽‍❤️‍🧑🏾"]], "1f3fd-1f3ff": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3ff", 27, 25, 15, ["🧑🏽‍❤️‍🧑🏿"]], "1f3fe-1f3fb": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fb", 27, 26, 15, ["🧑🏾‍❤️‍🧑🏻"]], "1f3fe-1f3fc": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fc", 27, 27, 15, ["🧑🏾‍❤️‍🧑🏼"]], "1f3fe-1f3fd": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fd", 27, 28, 15, ["🧑🏾‍❤️‍🧑🏽"]], "1f3fe-1f3ff": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3ff", 27, 29, 15, ["🧑🏾‍❤️‍🧑🏿"]], "1f3ff-1f3fb": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fb", 27, 30, 15, ["🧑🏿‍❤️‍🧑🏻"]], "1f3ff-1f3fc": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fc", 27, 31, 15, ["🧑🏿‍❤️‍🧑🏼"]], "1f3ff-1f3fd": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fd", 27, 32, 15, ["🧑🏿‍❤️‍🧑🏽"]], "1f3ff-1f3fe": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fe", 27, 33, 15, ["🧑🏿‍❤️‍🧑🏾"]] },
        "1f4aa": { "1f3fb": ["1f4aa-1f3fb", 27, 59, 15, ["💪🏻"]], "1f3fc": ["1f4aa-1f3fc", 27, 60, 15, ["💪🏼"]], "1f3fd": ["1f4aa-1f3fd", 28, 0, 15, ["💪🏽"]], "1f3fe": ["1f4aa-1f3fe", 28, 1, 15, ["💪🏾"]], "1f3ff": ["1f4aa-1f3ff", 28, 2, 15, ["💪🏿"]] },
        "1f574-fe0f": { "1f3fb": ["1f574-1f3fb", 31, 0, 15, ["🕴🏻"]], "1f3fc": ["1f574-1f3fc", 31, 1, 15, ["🕴🏼"]], "1f3fd": ["1f574-1f3fd", 31, 2, 15, ["🕴🏽"]], "1f3fe": ["1f574-1f3fe", 31, 3, 15, ["🕴🏾"]], "1f3ff": ["1f574-1f3ff", 31, 4, 15, ["🕴🏿"]] },
        "1f575-fe0f-200d-2640-fe0f": { "1f3fb": ["1f575-1f3fb-200d-2640-fe0f", 31, 6, 15, ["🕵🏻‍♀️"]], "1f3fc": ["1f575-1f3fc-200d-2640-fe0f", 31, 7, 15, ["🕵🏼‍♀️"]], "1f3fd": ["1f575-1f3fd-200d-2640-fe0f", 31, 8, 15, ["🕵🏽‍♀️"]], "1f3fe": ["1f575-1f3fe-200d-2640-fe0f", 31, 9, 15, ["🕵🏾‍♀️"]], "1f3ff": ["1f575-1f3ff-200d-2640-fe0f", 31, 10, 15, ["🕵🏿‍♀️"]] },
        "1f575-fe0f-200d-2642-fe0f": { "1f3fb": ["1f575-1f3fb-200d-2642-fe0f", 31, 12, 15, ["🕵🏻‍♂️", "🕵🏻"]], "1f3fc": ["1f575-1f3fc-200d-2642-fe0f", 31, 13, 15, ["🕵🏼‍♂️", "🕵🏼"]], "1f3fd": ["1f575-1f3fd-200d-2642-fe0f", 31, 14, 15, ["🕵🏽‍♂️", "🕵🏽"]], "1f3fe": ["1f575-1f3fe-200d-2642-fe0f", 31, 15, 15, ["🕵🏾‍♂️", "🕵🏾"]], "1f3ff": ["1f575-1f3ff-200d-2642-fe0f", 31, 16, 15, ["🕵🏿‍♂️", "🕵🏿"]] },
        "1f57a": { "1f3fb": ["1f57a-1f3fb", 31, 28, 15, ["🕺🏻"]], "1f3fc": ["1f57a-1f3fc", 31, 29, 15, ["🕺🏼"]], "1f3fd": ["1f57a-1f3fd", 31, 30, 15, ["🕺🏽"]], "1f3fe": ["1f57a-1f3fe", 31, 31, 15, ["🕺🏾"]], "1f3ff": ["1f57a-1f3ff", 31, 32, 15, ["🕺🏿"]] },
        "1f590-fe0f": { "1f3fb": ["1f590-1f3fb", 31, 39, 15, ["🖐🏻"]], "1f3fc": ["1f590-1f3fc", 31, 40, 15, ["🖐🏼"]], "1f3fd": ["1f590-1f3fd", 31, 41, 15, ["🖐🏽"]], "1f3fe": ["1f590-1f3fe", 31, 42, 15, ["🖐🏾"]], "1f3ff": ["1f590-1f3ff", 31, 43, 15, ["🖐🏿"]] },
        "1f595": { "1f3fb": ["1f595-1f3fb", 31, 45, 15, ["🖕🏻"]], "1f3fc": ["1f595-1f3fc", 31, 46, 15, ["🖕🏼"]], "1f3fd": ["1f595-1f3fd", 31, 47, 15, ["🖕🏽"]], "1f3fe": ["1f595-1f3fe", 31, 48, 15, ["🖕🏾"]], "1f3ff": ["1f595-1f3ff", 31, 49, 15, ["🖕🏿"]] },
        "1f596": { "1f3fb": ["1f596-1f3fb", 31, 51, 15, ["🖖🏻"]], "1f3fc": ["1f596-1f3fc", 31, 52, 15, ["🖖🏼"]], "1f3fd": ["1f596-1f3fd", 31, 53, 15, ["🖖🏽"]], "1f3fe": ["1f596-1f3fe", 31, 54, 15, ["🖖🏾"]], "1f3ff": ["1f596-1f3ff", 31, 55, 15, ["🖖🏿"]] },
        "1f645-200d-2640-fe0f": { "1f3fb": ["1f645-1f3fb-200d-2640-fe0f", 33, 33, 15, ["🙅🏻‍♀️", "🙅🏻"]], "1f3fc": ["1f645-1f3fc-200d-2640-fe0f", 33, 34, 15, ["🙅🏼‍♀️", "🙅🏼"]], "1f3fd": ["1f645-1f3fd-200d-2640-fe0f", 33, 35, 15, ["🙅🏽‍♀️", "🙅🏽"]], "1f3fe": ["1f645-1f3fe-200d-2640-fe0f", 33, 36, 15, ["🙅🏾‍♀️", "🙅🏾"]], "1f3ff": ["1f645-1f3ff-200d-2640-fe0f", 33, 37, 15, ["🙅🏿‍♀️", "🙅🏿"]] },
        "1f645-200d-2642-fe0f": { "1f3fb": ["1f645-1f3fb-200d-2642-fe0f", 33, 39, 15, ["🙅🏻‍♂️"]], "1f3fc": ["1f645-1f3fc-200d-2642-fe0f", 33, 40, 15, ["🙅🏼‍♂️"]], "1f3fd": ["1f645-1f3fd-200d-2642-fe0f", 33, 41, 15, ["🙅🏽‍♂️"]], "1f3fe": ["1f645-1f3fe-200d-2642-fe0f", 33, 42, 15, ["🙅🏾‍♂️"]], "1f3ff": ["1f645-1f3ff-200d-2642-fe0f", 33, 43, 15, ["🙅🏿‍♂️"]] },
        "1f646-200d-2640-fe0f": { "1f3fb": ["1f646-1f3fb-200d-2640-fe0f", 33, 51, 15, ["🙆🏻‍♀️", "🙆🏻"]], "1f3fc": ["1f646-1f3fc-200d-2640-fe0f", 33, 52, 15, ["🙆🏼‍♀️", "🙆🏼"]], "1f3fd": ["1f646-1f3fd-200d-2640-fe0f", 33, 53, 15, ["🙆🏽‍♀️", "🙆🏽"]], "1f3fe": ["1f646-1f3fe-200d-2640-fe0f", 33, 54, 15, ["🙆🏾‍♀️", "🙆🏾"]], "1f3ff": ["1f646-1f3ff-200d-2640-fe0f", 33, 55, 15, ["🙆🏿‍♀️", "🙆🏿"]] },
        "1f646-200d-2642-fe0f": { "1f3fb": ["1f646-1f3fb-200d-2642-fe0f", 33, 57, 15, ["🙆🏻‍♂️"]], "1f3fc": ["1f646-1f3fc-200d-2642-fe0f", 33, 58, 15, ["🙆🏼‍♂️"]], "1f3fd": ["1f646-1f3fd-200d-2642-fe0f", 33, 59, 15, ["🙆🏽‍♂️"]], "1f3fe": ["1f646-1f3fe-200d-2642-fe0f", 33, 60, 15, ["🙆🏾‍♂️"]], "1f3ff": ["1f646-1f3ff-200d-2642-fe0f", 34, 0, 15, ["🙆🏿‍♂️"]] },
        "1f647-200d-2640-fe0f": { "1f3fb": ["1f647-1f3fb-200d-2640-fe0f", 34, 8, 15, ["🙇🏻‍♀️"]], "1f3fc": ["1f647-1f3fc-200d-2640-fe0f", 34, 9, 15, ["🙇🏼‍♀️"]], "1f3fd": ["1f647-1f3fd-200d-2640-fe0f", 34, 10, 15, ["🙇🏽‍♀️"]], "1f3fe": ["1f647-1f3fe-200d-2640-fe0f", 34, 11, 15, ["🙇🏾‍♀️"]], "1f3ff": ["1f647-1f3ff-200d-2640-fe0f", 34, 12, 15, ["🙇🏿‍♀️"]] },
        "1f647-200d-2642-fe0f": { "1f3fb": ["1f647-1f3fb-200d-2642-fe0f", 34, 14, 15, ["🙇🏻‍♂️"]], "1f3fc": ["1f647-1f3fc-200d-2642-fe0f", 34, 15, 15, ["🙇🏼‍♂️"]], "1f3fd": ["1f647-1f3fd-200d-2642-fe0f", 34, 16, 15, ["🙇🏽‍♂️"]], "1f3fe": ["1f647-1f3fe-200d-2642-fe0f", 34, 17, 15, ["🙇🏾‍♂️"]], "1f3ff": ["1f647-1f3ff-200d-2642-fe0f", 34, 18, 15, ["🙇🏿‍♂️"]] },
        "1f647": { "1f3fb": ["1f647-1f3fb", 34, 20, 15, ["🙇🏻"]], "1f3fc": ["1f647-1f3fc", 34, 21, 15, ["🙇🏼"]], "1f3fd": ["1f647-1f3fd", 34, 22, 15, ["🙇🏽"]], "1f3fe": ["1f647-1f3fe", 34, 23, 15, ["🙇🏾"]], "1f3ff": ["1f647-1f3ff", 34, 24, 15, ["🙇🏿"]] },
        "1f64b-200d-2640-fe0f": { "1f3fb": ["1f64b-1f3fb-200d-2640-fe0f", 34, 29, 15, ["🙋🏻‍♀️", "🙋🏻"]], "1f3fc": ["1f64b-1f3fc-200d-2640-fe0f", 34, 30, 15, ["🙋🏼‍♀️", "🙋🏼"]], "1f3fd": ["1f64b-1f3fd-200d-2640-fe0f", 34, 31, 15, ["🙋🏽‍♀️", "🙋🏽"]], "1f3fe": ["1f64b-1f3fe-200d-2640-fe0f", 34, 32, 15, ["🙋🏾‍♀️", "🙋🏾"]], "1f3ff": ["1f64b-1f3ff-200d-2640-fe0f", 34, 33, 15, ["🙋🏿‍♀️", "🙋🏿"]] },
        "1f64b-200d-2642-fe0f": { "1f3fb": ["1f64b-1f3fb-200d-2642-fe0f", 34, 35, 15, ["🙋🏻‍♂️"]], "1f3fc": ["1f64b-1f3fc-200d-2642-fe0f", 34, 36, 15, ["🙋🏼‍♂️"]], "1f3fd": ["1f64b-1f3fd-200d-2642-fe0f", 34, 37, 15, ["🙋🏽‍♂️"]], "1f3fe": ["1f64b-1f3fe-200d-2642-fe0f", 34, 38, 15, ["🙋🏾‍♂️"]], "1f3ff": ["1f64b-1f3ff-200d-2642-fe0f", 34, 39, 15, ["🙋🏿‍♂️"]] },
        "1f64c": { "1f3fb": ["1f64c-1f3fb", 34, 47, 15, ["🙌🏻"]], "1f3fc": ["1f64c-1f3fc", 34, 48, 15, ["🙌🏼"]], "1f3fd": ["1f64c-1f3fd", 34, 49, 15, ["🙌🏽"]], "1f3fe": ["1f64c-1f3fe", 34, 50, 15, ["🙌🏾"]], "1f3ff": ["1f64c-1f3ff", 34, 51, 15, ["🙌🏿"]] },
        "1f64d-200d-2640-fe0f": { "1f3fb": ["1f64d-1f3fb-200d-2640-fe0f", 34, 53, 15, ["🙍🏻‍♀️", "🙍🏻"]], "1f3fc": ["1f64d-1f3fc-200d-2640-fe0f", 34, 54, 15, ["🙍🏼‍♀️", "🙍🏼"]], "1f3fd": ["1f64d-1f3fd-200d-2640-fe0f", 34, 55, 15, ["🙍🏽‍♀️", "🙍🏽"]], "1f3fe": ["1f64d-1f3fe-200d-2640-fe0f", 34, 56, 15, ["🙍🏾‍♀️", "🙍🏾"]], "1f3ff": ["1f64d-1f3ff-200d-2640-fe0f", 34, 57, 15, ["🙍🏿‍♀️", "🙍🏿"]] },
        "1f64d-200d-2642-fe0f": { "1f3fb": ["1f64d-1f3fb-200d-2642-fe0f", 34, 59, 15, ["🙍🏻‍♂️"]], "1f3fc": ["1f64d-1f3fc-200d-2642-fe0f", 34, 60, 15, ["🙍🏼‍♂️"]], "1f3fd": ["1f64d-1f3fd-200d-2642-fe0f", 35, 0, 15, ["🙍🏽‍♂️"]], "1f3fe": ["1f64d-1f3fe-200d-2642-fe0f", 35, 1, 15, ["🙍🏾‍♂️"]], "1f3ff": ["1f64d-1f3ff-200d-2642-fe0f", 35, 2, 15, ["🙍🏿‍♂️"]] },
        "1f64e-200d-2640-fe0f": { "1f3fb": ["1f64e-1f3fb-200d-2640-fe0f", 35, 10, 15, ["🙎🏻‍♀️", "🙎🏻"]], "1f3fc": ["1f64e-1f3fc-200d-2640-fe0f", 35, 11, 15, ["🙎🏼‍♀️", "🙎🏼"]], "1f3fd": ["1f64e-1f3fd-200d-2640-fe0f", 35, 12, 15, ["🙎🏽‍♀️", "🙎🏽"]], "1f3fe": ["1f64e-1f3fe-200d-2640-fe0f", 35, 13, 15, ["🙎🏾‍♀️", "🙎🏾"]], "1f3ff": ["1f64e-1f3ff-200d-2640-fe0f", 35, 14, 15, ["🙎🏿‍♀️", "🙎🏿"]] },
        "1f64e-200d-2642-fe0f": { "1f3fb": ["1f64e-1f3fb-200d-2642-fe0f", 35, 16, 15, ["🙎🏻‍♂️"]], "1f3fc": ["1f64e-1f3fc-200d-2642-fe0f", 35, 17, 15, ["🙎🏼‍♂️"]], "1f3fd": ["1f64e-1f3fd-200d-2642-fe0f", 35, 18, 15, ["🙎🏽‍♂️"]], "1f3fe": ["1f64e-1f3fe-200d-2642-fe0f", 35, 19, 15, ["🙎🏾‍♂️"]], "1f3ff": ["1f64e-1f3ff-200d-2642-fe0f", 35, 20, 15, ["🙎🏿‍♂️"]] },
        "1f64f": { "1f3fb": ["1f64f-1f3fb", 35, 28, 15, ["🙏🏻"]], "1f3fc": ["1f64f-1f3fc", 35, 29, 15, ["🙏🏼"]], "1f3fd": ["1f64f-1f3fd", 35, 30, 15, ["🙏🏽"]], "1f3fe": ["1f64f-1f3fe", 35, 31, 15, ["🙏🏾"]], "1f3ff": ["1f64f-1f3ff", 35, 32, 15, ["🙏🏿"]] },
        "1f6a3-200d-2640-fe0f": { "1f3fb": ["1f6a3-1f3fb-200d-2640-fe0f", 36, 8, 15, ["🚣🏻‍♀️"]], "1f3fc": ["1f6a3-1f3fc-200d-2640-fe0f", 36, 9, 15, ["🚣🏼‍♀️"]], "1f3fd": ["1f6a3-1f3fd-200d-2640-fe0f", 36, 10, 15, ["🚣🏽‍♀️"]], "1f3fe": ["1f6a3-1f3fe-200d-2640-fe0f", 36, 11, 15, ["🚣🏾‍♀️"]], "1f3ff": ["1f6a3-1f3ff-200d-2640-fe0f", 36, 12, 15, ["🚣🏿‍♀️"]] },
        "1f6a3-200d-2642-fe0f": { "1f3fb": ["1f6a3-1f3fb-200d-2642-fe0f", 36, 14, 15, ["🚣🏻‍♂️", "🚣🏻"]], "1f3fc": ["1f6a3-1f3fc-200d-2642-fe0f", 36, 15, 15, ["🚣🏼‍♂️", "🚣🏼"]], "1f3fd": ["1f6a3-1f3fd-200d-2642-fe0f", 36, 16, 15, ["🚣🏽‍♂️", "🚣🏽"]], "1f3fe": ["1f6a3-1f3fe-200d-2642-fe0f", 36, 17, 15, ["🚣🏾‍♂️", "🚣🏾"]], "1f3ff": ["1f6a3-1f3ff-200d-2642-fe0f", 36, 18, 15, ["🚣🏿‍♂️", "🚣🏿"]] },
        "1f6b4-200d-2640-fe0f": { "1f3fb": ["1f6b4-1f3fb-200d-2640-fe0f", 36, 42, 15, ["🚴🏻‍♀️"]], "1f3fc": ["1f6b4-1f3fc-200d-2640-fe0f", 36, 43, 15, ["🚴🏼‍♀️"]], "1f3fd": ["1f6b4-1f3fd-200d-2640-fe0f", 36, 44, 15, ["🚴🏽‍♀️"]], "1f3fe": ["1f6b4-1f3fe-200d-2640-fe0f", 36, 45, 15, ["🚴🏾‍♀️"]], "1f3ff": ["1f6b4-1f3ff-200d-2640-fe0f", 36, 46, 15, ["🚴🏿‍♀️"]] },
        "1f6b4-200d-2642-fe0f": { "1f3fb": ["1f6b4-1f3fb-200d-2642-fe0f", 36, 48, 15, ["🚴🏻‍♂️", "🚴🏻"]], "1f3fc": ["1f6b4-1f3fc-200d-2642-fe0f", 36, 49, 15, ["🚴🏼‍♂️", "🚴🏼"]], "1f3fd": ["1f6b4-1f3fd-200d-2642-fe0f", 36, 50, 15, ["🚴🏽‍♂️", "🚴🏽"]], "1f3fe": ["1f6b4-1f3fe-200d-2642-fe0f", 36, 51, 15, ["🚴🏾‍♂️", "🚴🏾"]], "1f3ff": ["1f6b4-1f3ff-200d-2642-fe0f", 36, 52, 15, ["🚴🏿‍♂️", "🚴🏿"]] },
        "1f6b5-200d-2640-fe0f": { "1f3fb": ["1f6b5-1f3fb-200d-2640-fe0f", 36, 60, 15, ["🚵🏻‍♀️"]], "1f3fc": ["1f6b5-1f3fc-200d-2640-fe0f", 37, 0, 15, ["🚵🏼‍♀️"]], "1f3fd": ["1f6b5-1f3fd-200d-2640-fe0f", 37, 1, 15, ["🚵🏽‍♀️"]], "1f3fe": ["1f6b5-1f3fe-200d-2640-fe0f", 37, 2, 15, ["🚵🏾‍♀️"]], "1f3ff": ["1f6b5-1f3ff-200d-2640-fe0f", 37, 3, 15, ["🚵🏿‍♀️"]] },
        "1f6b5-200d-2642-fe0f": { "1f3fb": ["1f6b5-1f3fb-200d-2642-fe0f", 37, 5, 15, ["🚵🏻‍♂️", "🚵🏻"]], "1f3fc": ["1f6b5-1f3fc-200d-2642-fe0f", 37, 6, 15, ["🚵🏼‍♂️", "🚵🏼"]], "1f3fd": ["1f6b5-1f3fd-200d-2642-fe0f", 37, 7, 15, ["🚵🏽‍♂️", "🚵🏽"]], "1f3fe": ["1f6b5-1f3fe-200d-2642-fe0f", 37, 8, 15, ["🚵🏾‍♂️", "🚵🏾"]], "1f3ff": ["1f6b5-1f3ff-200d-2642-fe0f", 37, 9, 15, ["🚵🏿‍♂️", "🚵🏿"]] },
        "1f6b6-200d-2640-fe0f": { "1f3fb": ["1f6b6-1f3fb-200d-2640-fe0f", 37, 17, 15, ["🚶🏻‍♀️"]], "1f3fc": ["1f6b6-1f3fc-200d-2640-fe0f", 37, 18, 15, ["🚶🏼‍♀️"]], "1f3fd": ["1f6b6-1f3fd-200d-2640-fe0f", 37, 19, 15, ["🚶🏽‍♀️"]], "1f3fe": ["1f6b6-1f3fe-200d-2640-fe0f", 37, 20, 15, ["🚶🏾‍♀️"]], "1f3ff": ["1f6b6-1f3ff-200d-2640-fe0f", 37, 21, 15, ["🚶🏿‍♀️"]] },
        "1f6b6-200d-2642-fe0f": { "1f3fb": ["1f6b6-1f3fb-200d-2642-fe0f", 37, 23, 15, ["🚶🏻‍♂️", "🚶🏻"]], "1f3fc": ["1f6b6-1f3fc-200d-2642-fe0f", 37, 24, 15, ["🚶🏼‍♂️", "🚶🏼"]], "1f3fd": ["1f6b6-1f3fd-200d-2642-fe0f", 37, 25, 15, ["🚶🏽‍♂️", "🚶🏽"]], "1f3fe": ["1f6b6-1f3fe-200d-2642-fe0f", 37, 26, 15, ["🚶🏾‍♂️", "🚶🏾"]], "1f3ff": ["1f6b6-1f3ff-200d-2642-fe0f", 37, 27, 15, ["🚶🏿‍♂️", "🚶🏿"]] },
        "1f6c0": { "1f3fb": ["1f6c0-1f3fb", 37, 44, 15, ["🛀🏻"]], "1f3fc": ["1f6c0-1f3fc", 37, 45, 15, ["🛀🏼"]], "1f3fd": ["1f6c0-1f3fd", 37, 46, 15, ["🛀🏽"]], "1f3fe": ["1f6c0-1f3fe", 37, 47, 15, ["🛀🏾"]], "1f3ff": ["1f6c0-1f3ff", 37, 48, 15, ["🛀🏿"]] },
        "1f6cc": { "1f3fb": ["1f6cc-1f3fb", 37, 56, 15, ["🛌🏻"]], "1f3fc": ["1f6cc-1f3fc", 37, 57, 15, ["🛌🏼"]], "1f3fd": ["1f6cc-1f3fd", 37, 58, 15, ["🛌🏽"]], "1f3fe": ["1f6cc-1f3fe", 37, 59, 15, ["🛌🏾"]], "1f3ff": ["1f6cc-1f3ff", 37, 60, 15, ["🛌🏿"]] },
        "1f90c": { "1f3fb": ["1f90c-1f3fb", 38, 47, 15, ["🤌🏻"]], "1f3fc": ["1f90c-1f3fc", 38, 48, 15, ["🤌🏼"]], "1f3fd": ["1f90c-1f3fd", 38, 49, 15, ["🤌🏽"]], "1f3fe": ["1f90c-1f3fe", 38, 50, 15, ["🤌🏾"]], "1f3ff": ["1f90c-1f3ff", 38, 51, 15, ["🤌🏿"]] },
        "1f90f": { "1f3fb": ["1f90f-1f3fb", 38, 55, 15, ["🤏🏻"]], "1f3fc": ["1f90f-1f3fc", 38, 56, 15, ["🤏🏼"]], "1f3fd": ["1f90f-1f3fd", 38, 57, 15, ["🤏🏽"]], "1f3fe": ["1f90f-1f3fe", 38, 58, 15, ["🤏🏾"]], "1f3ff": ["1f90f-1f3ff", 38, 59, 15, ["🤏🏿"]] },
        "1f918": { "1f3fb": ["1f918-1f3fb", 39, 8, 15, ["🤘🏻"]], "1f3fc": ["1f918-1f3fc", 39, 9, 15, ["🤘🏼"]], "1f3fd": ["1f918-1f3fd", 39, 10, 15, ["🤘🏽"]], "1f3fe": ["1f918-1f3fe", 39, 11, 15, ["🤘🏾"]], "1f3ff": ["1f918-1f3ff", 39, 12, 15, ["🤘🏿"]] },
        "1f919": { "1f3fb": ["1f919-1f3fb", 39, 14, 15, ["🤙🏻"]], "1f3fc": ["1f919-1f3fc", 39, 15, 15, ["🤙🏼"]], "1f3fd": ["1f919-1f3fd", 39, 16, 15, ["🤙🏽"]], "1f3fe": ["1f919-1f3fe", 39, 17, 15, ["🤙🏾"]], "1f3ff": ["1f919-1f3ff", 39, 18, 15, ["🤙🏿"]] },
        "1f91a": { "1f3fb": ["1f91a-1f3fb", 39, 20, 15, ["🤚🏻"]], "1f3fc": ["1f91a-1f3fc", 39, 21, 15, ["🤚🏼"]], "1f3fd": ["1f91a-1f3fd", 39, 22, 15, ["🤚🏽"]], "1f3fe": ["1f91a-1f3fe", 39, 23, 15, ["🤚🏾"]], "1f3ff": ["1f91a-1f3ff", 39, 24, 15, ["🤚🏿"]] },
        "1f91b": { "1f3fb": ["1f91b-1f3fb", 39, 26, 15, ["🤛🏻"]], "1f3fc": ["1f91b-1f3fc", 39, 27, 15, ["🤛🏼"]], "1f3fd": ["1f91b-1f3fd", 39, 28, 15, ["🤛🏽"]], "1f3fe": ["1f91b-1f3fe", 39, 29, 15, ["🤛🏾"]], "1f3ff": ["1f91b-1f3ff", 39, 30, 15, ["🤛🏿"]] },
        "1f91c": { "1f3fb": ["1f91c-1f3fb", 39, 32, 15, ["🤜🏻"]], "1f3fc": ["1f91c-1f3fc", 39, 33, 15, ["🤜🏼"]], "1f3fd": ["1f91c-1f3fd", 39, 34, 15, ["🤜🏽"]], "1f3fe": ["1f91c-1f3fe", 39, 35, 15, ["🤜🏾"]], "1f3ff": ["1f91c-1f3ff", 39, 36, 15, ["🤜🏿"]] },
        "1f91d": { "1f3fb": ["1f91d-1f3fb", 39, 38, 15, ["🤝🏻"]], "1f3fc": ["1f91d-1f3fc", 39, 39, 15, ["🤝🏼"]], "1f3fd": ["1f91d-1f3fd", 39, 40, 15, ["🤝🏽"]], "1f3fe": ["1f91d-1f3fe", 39, 41, 15, ["🤝🏾"]], "1f3ff": ["1f91d-1f3ff", 39, 42, 15, ["🤝🏿"]], "1f3fb-1f3fc": ["1faf1-1f3fb-200d-1faf2-1f3fc", 39, 43, 15, ["🫱🏻‍🫲🏼"]], "1f3fb-1f3fd": ["1faf1-1f3fb-200d-1faf2-1f3fd", 39, 44, 15, ["🫱🏻‍🫲🏽"]], "1f3fb-1f3fe": ["1faf1-1f3fb-200d-1faf2-1f3fe", 39, 45, 15, ["🫱🏻‍🫲🏾"]], "1f3fb-1f3ff": ["1faf1-1f3fb-200d-1faf2-1f3ff", 39, 46, 15, ["🫱🏻‍🫲🏿"]], "1f3fc-1f3fb": ["1faf1-1f3fc-200d-1faf2-1f3fb", 39, 47, 15, ["🫱🏼‍🫲🏻"]], "1f3fc-1f3fd": ["1faf1-1f3fc-200d-1faf2-1f3fd", 39, 48, 15, ["🫱🏼‍🫲🏽"]], "1f3fc-1f3fe": ["1faf1-1f3fc-200d-1faf2-1f3fe", 39, 49, 15, ["🫱🏼‍🫲🏾"]], "1f3fc-1f3ff": ["1faf1-1f3fc-200d-1faf2-1f3ff", 39, 50, 15, ["🫱🏼‍🫲🏿"]], "1f3fd-1f3fb": ["1faf1-1f3fd-200d-1faf2-1f3fb", 39, 51, 15, ["🫱🏽‍🫲🏻"]], "1f3fd-1f3fc": ["1faf1-1f3fd-200d-1faf2-1f3fc", 39, 52, 15, ["🫱🏽‍🫲🏼"]], "1f3fd-1f3fe": ["1faf1-1f3fd-200d-1faf2-1f3fe", 39, 53, 15, ["🫱🏽‍🫲🏾"]], "1f3fd-1f3ff": ["1faf1-1f3fd-200d-1faf2-1f3ff", 39, 54, 15, ["🫱🏽‍🫲🏿"]], "1f3fe-1f3fb": ["1faf1-1f3fe-200d-1faf2-1f3fb", 39, 55, 15, ["🫱🏾‍🫲🏻"]], "1f3fe-1f3fc": ["1faf1-1f3fe-200d-1faf2-1f3fc", 39, 56, 15, ["🫱🏾‍🫲🏼"]], "1f3fe-1f3fd": ["1faf1-1f3fe-200d-1faf2-1f3fd", 39, 57, 15, ["🫱🏾‍🫲🏽"]], "1f3fe-1f3ff": ["1faf1-1f3fe-200d-1faf2-1f3ff", 39, 58, 15, ["🫱🏾‍🫲🏿"]], "1f3ff-1f3fb": ["1faf1-1f3ff-200d-1faf2-1f3fb", 39, 59, 15, ["🫱🏿‍🫲🏻"]], "1f3ff-1f3fc": ["1faf1-1f3ff-200d-1faf2-1f3fc", 39, 60, 15, ["🫱🏿‍🫲🏼"]], "1f3ff-1f3fd": ["1faf1-1f3ff-200d-1faf2-1f3fd", 40, 0, 15, ["🫱🏿‍🫲🏽"]], "1f3ff-1f3fe": ["1faf1-1f3ff-200d-1faf2-1f3fe", 40, 1, 15, ["🫱🏿‍🫲🏾"]] },
        "1f91e": { "1f3fb": ["1f91e-1f3fb", 40, 3, 15, ["🤞🏻"]], "1f3fc": ["1f91e-1f3fc", 40, 4, 15, ["🤞🏼"]], "1f3fd": ["1f91e-1f3fd", 40, 5, 15, ["🤞🏽"]], "1f3fe": ["1f91e-1f3fe", 40, 6, 15, ["🤞🏾"]], "1f3ff": ["1f91e-1f3ff", 40, 7, 15, ["🤞🏿"]] },
        "1f91f": { "1f3fb": ["1f91f-1f3fb", 40, 9, 15, ["🤟🏻"]], "1f3fc": ["1f91f-1f3fc", 40, 10, 15, ["🤟🏼"]], "1f3fd": ["1f91f-1f3fd", 40, 11, 15, ["🤟🏽"]], "1f3fe": ["1f91f-1f3fe", 40, 12, 15, ["🤟🏾"]], "1f3ff": ["1f91f-1f3ff", 40, 13, 15, ["🤟🏿"]] },
        "1f926-200d-2640-fe0f": { "1f3fb": ["1f926-1f3fb-200d-2640-fe0f", 40, 21, 15, ["🤦🏻‍♀️"]], "1f3fc": ["1f926-1f3fc-200d-2640-fe0f", 40, 22, 15, ["🤦🏼‍♀️"]], "1f3fd": ["1f926-1f3fd-200d-2640-fe0f", 40, 23, 15, ["🤦🏽‍♀️"]], "1f3fe": ["1f926-1f3fe-200d-2640-fe0f", 40, 24, 15, ["🤦🏾‍♀️"]], "1f3ff": ["1f926-1f3ff-200d-2640-fe0f", 40, 25, 15, ["🤦🏿‍♀️"]] },
        "1f926-200d-2642-fe0f": { "1f3fb": ["1f926-1f3fb-200d-2642-fe0f", 40, 27, 15, ["🤦🏻‍♂️"]], "1f3fc": ["1f926-1f3fc-200d-2642-fe0f", 40, 28, 15, ["🤦🏼‍♂️"]], "1f3fd": ["1f926-1f3fd-200d-2642-fe0f", 40, 29, 15, ["🤦🏽‍♂️"]], "1f3fe": ["1f926-1f3fe-200d-2642-fe0f", 40, 30, 15, ["🤦🏾‍♂️"]], "1f3ff": ["1f926-1f3ff-200d-2642-fe0f", 40, 31, 15, ["🤦🏿‍♂️"]] },
        "1f926": { "1f3fb": ["1f926-1f3fb", 40, 33, 15, ["🤦🏻"]], "1f3fc": ["1f926-1f3fc", 40, 34, 15, ["🤦🏼"]], "1f3fd": ["1f926-1f3fd", 40, 35, 15, ["🤦🏽"]], "1f3fe": ["1f926-1f3fe", 40, 36, 15, ["🤦🏾"]], "1f3ff": ["1f926-1f3ff", 40, 37, 15, ["🤦🏿"]] },
        "1f930": { "1f3fb": ["1f930-1f3fb", 40, 48, 15, ["🤰🏻"]], "1f3fc": ["1f930-1f3fc", 40, 49, 15, ["🤰🏼"]], "1f3fd": ["1f930-1f3fd", 40, 50, 15, ["🤰🏽"]], "1f3fe": ["1f930-1f3fe", 40, 51, 15, ["🤰🏾"]], "1f3ff": ["1f930-1f3ff", 40, 52, 15, ["🤰🏿"]] },
        "1f931": { "1f3fb": ["1f931-1f3fb", 40, 54, 15, ["🤱🏻"]], "1f3fc": ["1f931-1f3fc", 40, 55, 15, ["🤱🏼"]], "1f3fd": ["1f931-1f3fd", 40, 56, 15, ["🤱🏽"]], "1f3fe": ["1f931-1f3fe", 40, 57, 15, ["🤱🏾"]], "1f3ff": ["1f931-1f3ff", 40, 58, 15, ["🤱🏿"]] },
        "1f932": { "1f3fb": ["1f932-1f3fb", 40, 60, 15, ["🤲🏻"]], "1f3fc": ["1f932-1f3fc", 41, 0, 15, ["🤲🏼"]], "1f3fd": ["1f932-1f3fd", 41, 1, 15, ["🤲🏽"]], "1f3fe": ["1f932-1f3fe", 41, 2, 15, ["🤲🏾"]], "1f3ff": ["1f932-1f3ff", 41, 3, 15, ["🤲🏿"]] },
        "1f933": { "1f3fb": ["1f933-1f3fb", 41, 5, 15, ["🤳🏻"]], "1f3fc": ["1f933-1f3fc", 41, 6, 15, ["🤳🏼"]], "1f3fd": ["1f933-1f3fd", 41, 7, 15, ["🤳🏽"]], "1f3fe": ["1f933-1f3fe", 41, 8, 15, ["🤳🏾"]], "1f3ff": ["1f933-1f3ff", 41, 9, 15, ["🤳🏿"]] },
        "1f934": { "1f3fb": ["1f934-1f3fb", 41, 11, 15, ["🤴🏻"]], "1f3fc": ["1f934-1f3fc", 41, 12, 15, ["🤴🏼"]], "1f3fd": ["1f934-1f3fd", 41, 13, 15, ["🤴🏽"]], "1f3fe": ["1f934-1f3fe", 41, 14, 15, ["🤴🏾"]], "1f3ff": ["1f934-1f3ff", 41, 15, 15, ["🤴🏿"]] },
        "1f935-200d-2640-fe0f": { "1f3fb": ["1f935-1f3fb-200d-2640-fe0f", 41, 17, 15, ["🤵🏻‍♀️"]], "1f3fc": ["1f935-1f3fc-200d-2640-fe0f", 41, 18, 15, ["🤵🏼‍♀️"]], "1f3fd": ["1f935-1f3fd-200d-2640-fe0f", 41, 19, 15, ["🤵🏽‍♀️"]], "1f3fe": ["1f935-1f3fe-200d-2640-fe0f", 41, 20, 15, ["🤵🏾‍♀️"]], "1f3ff": ["1f935-1f3ff-200d-2640-fe0f", 41, 21, 15, ["🤵🏿‍♀️"]] },
        "1f935-200d-2642-fe0f": { "1f3fb": ["1f935-1f3fb-200d-2642-fe0f", 41, 23, 15, ["🤵🏻‍♂️"]], "1f3fc": ["1f935-1f3fc-200d-2642-fe0f", 41, 24, 15, ["🤵🏼‍♂️"]], "1f3fd": ["1f935-1f3fd-200d-2642-fe0f", 41, 25, 15, ["🤵🏽‍♂️"]], "1f3fe": ["1f935-1f3fe-200d-2642-fe0f", 41, 26, 15, ["🤵🏾‍♂️"]], "1f3ff": ["1f935-1f3ff-200d-2642-fe0f", 41, 27, 15, ["🤵🏿‍♂️"]] },
        "1f935": { "1f3fb": ["1f935-1f3fb", 41, 29, 15, ["🤵🏻"]], "1f3fc": ["1f935-1f3fc", 41, 30, 15, ["🤵🏼"]], "1f3fd": ["1f935-1f3fd", 41, 31, 15, ["🤵🏽"]], "1f3fe": ["1f935-1f3fe", 41, 32, 15, ["🤵🏾"]], "1f3ff": ["1f935-1f3ff", 41, 33, 15, ["🤵🏿"]] },
        "1f936": { "1f3fb": ["1f936-1f3fb", 41, 35, 15, ["🤶🏻"]], "1f3fc": ["1f936-1f3fc", 41, 36, 15, ["🤶🏼"]], "1f3fd": ["1f936-1f3fd", 41, 37, 15, ["🤶🏽"]], "1f3fe": ["1f936-1f3fe", 41, 38, 15, ["🤶🏾"]], "1f3ff": ["1f936-1f3ff", 41, 39, 15, ["🤶🏿"]] },
        "1f937-200d-2640-fe0f": { "1f3fb": ["1f937-1f3fb-200d-2640-fe0f", 41, 41, 15, ["🤷🏻‍♀️"]], "1f3fc": ["1f937-1f3fc-200d-2640-fe0f", 41, 42, 15, ["🤷🏼‍♀️"]], "1f3fd": ["1f937-1f3fd-200d-2640-fe0f", 41, 43, 15, ["🤷🏽‍♀️"]], "1f3fe": ["1f937-1f3fe-200d-2640-fe0f", 41, 44, 15, ["🤷🏾‍♀️"]], "1f3ff": ["1f937-1f3ff-200d-2640-fe0f", 41, 45, 15, ["🤷🏿‍♀️"]] },
        "1f937-200d-2642-fe0f": { "1f3fb": ["1f937-1f3fb-200d-2642-fe0f", 41, 47, 15, ["🤷🏻‍♂️"]], "1f3fc": ["1f937-1f3fc-200d-2642-fe0f", 41, 48, 15, ["🤷🏼‍♂️"]], "1f3fd": ["1f937-1f3fd-200d-2642-fe0f", 41, 49, 15, ["🤷🏽‍♂️"]], "1f3fe": ["1f937-1f3fe-200d-2642-fe0f", 41, 50, 15, ["🤷🏾‍♂️"]], "1f3ff": ["1f937-1f3ff-200d-2642-fe0f", 41, 51, 15, ["🤷🏿‍♂️"]] },
        "1f937": { "1f3fb": ["1f937-1f3fb", 41, 53, 15, ["🤷🏻"]], "1f3fc": ["1f937-1f3fc", 41, 54, 15, ["🤷🏼"]], "1f3fd": ["1f937-1f3fd", 41, 55, 15, ["🤷🏽"]], "1f3fe": ["1f937-1f3fe", 41, 56, 15, ["🤷🏾"]], "1f3ff": ["1f937-1f3ff", 41, 57, 15, ["🤷🏿"]] },
        "1f938-200d-2640-fe0f": { "1f3fb": ["1f938-1f3fb-200d-2640-fe0f", 41, 59, 15, ["🤸🏻‍♀️"]], "1f3fc": ["1f938-1f3fc-200d-2640-fe0f", 41, 60, 15, ["🤸🏼‍♀️"]], "1f3fd": ["1f938-1f3fd-200d-2640-fe0f", 42, 0, 15, ["🤸🏽‍♀️"]], "1f3fe": ["1f938-1f3fe-200d-2640-fe0f", 42, 1, 15, ["🤸🏾‍♀️"]], "1f3ff": ["1f938-1f3ff-200d-2640-fe0f", 42, 2, 15, ["🤸🏿‍♀️"]] },
        "1f938-200d-2642-fe0f": { "1f3fb": ["1f938-1f3fb-200d-2642-fe0f", 42, 4, 15, ["🤸🏻‍♂️"]], "1f3fc": ["1f938-1f3fc-200d-2642-fe0f", 42, 5, 15, ["🤸🏼‍♂️"]], "1f3fd": ["1f938-1f3fd-200d-2642-fe0f", 42, 6, 15, ["🤸🏽‍♂️"]], "1f3fe": ["1f938-1f3fe-200d-2642-fe0f", 42, 7, 15, ["🤸🏾‍♂️"]], "1f3ff": ["1f938-1f3ff-200d-2642-fe0f", 42, 8, 15, ["🤸🏿‍♂️"]] },
        "1f938": { "1f3fb": ["1f938-1f3fb", 42, 10, 15, ["🤸🏻"]], "1f3fc": ["1f938-1f3fc", 42, 11, 15, ["🤸🏼"]], "1f3fd": ["1f938-1f3fd", 42, 12, 15, ["🤸🏽"]], "1f3fe": ["1f938-1f3fe", 42, 13, 15, ["🤸🏾"]], "1f3ff": ["1f938-1f3ff", 42, 14, 15, ["🤸🏿"]] },
        "1f939-200d-2640-fe0f": { "1f3fb": ["1f939-1f3fb-200d-2640-fe0f", 42, 16, 15, ["🤹🏻‍♀️"]], "1f3fc": ["1f939-1f3fc-200d-2640-fe0f", 42, 17, 15, ["🤹🏼‍♀️"]], "1f3fd": ["1f939-1f3fd-200d-2640-fe0f", 42, 18, 15, ["🤹🏽‍♀️"]], "1f3fe": ["1f939-1f3fe-200d-2640-fe0f", 42, 19, 15, ["🤹🏾‍♀️"]], "1f3ff": ["1f939-1f3ff-200d-2640-fe0f", 42, 20, 15, ["🤹🏿‍♀️"]] },
        "1f939-200d-2642-fe0f": { "1f3fb": ["1f939-1f3fb-200d-2642-fe0f", 42, 22, 15, ["🤹🏻‍♂️"]], "1f3fc": ["1f939-1f3fc-200d-2642-fe0f", 42, 23, 15, ["🤹🏼‍♂️"]], "1f3fd": ["1f939-1f3fd-200d-2642-fe0f", 42, 24, 15, ["🤹🏽‍♂️"]], "1f3fe": ["1f939-1f3fe-200d-2642-fe0f", 42, 25, 15, ["🤹🏾‍♂️"]], "1f3ff": ["1f939-1f3ff-200d-2642-fe0f", 42, 26, 15, ["🤹🏿‍♂️"]] },
        "1f939": { "1f3fb": ["1f939-1f3fb", 42, 28, 15, ["🤹🏻"]], "1f3fc": ["1f939-1f3fc", 42, 29, 15, ["🤹🏼"]], "1f3fd": ["1f939-1f3fd", 42, 30, 15, ["🤹🏽"]], "1f3fe": ["1f939-1f3fe", 42, 31, 15, ["🤹🏾"]], "1f3ff": ["1f939-1f3ff", 42, 32, 15, ["🤹🏿"]] },
        "1f93d-200d-2640-fe0f": { "1f3fb": ["1f93d-1f3fb-200d-2640-fe0f", 42, 38, 15, ["🤽🏻‍♀️"]], "1f3fc": ["1f93d-1f3fc-200d-2640-fe0f", 42, 39, 15, ["🤽🏼‍♀️"]], "1f3fd": ["1f93d-1f3fd-200d-2640-fe0f", 42, 40, 15, ["🤽🏽‍♀️"]], "1f3fe": ["1f93d-1f3fe-200d-2640-fe0f", 42, 41, 15, ["🤽🏾‍♀️"]], "1f3ff": ["1f93d-1f3ff-200d-2640-fe0f", 42, 42, 15, ["🤽🏿‍♀️"]] },
        "1f93d-200d-2642-fe0f": { "1f3fb": ["1f93d-1f3fb-200d-2642-fe0f", 42, 44, 15, ["🤽🏻‍♂️"]], "1f3fc": ["1f93d-1f3fc-200d-2642-fe0f", 42, 45, 15, ["🤽🏼‍♂️"]], "1f3fd": ["1f93d-1f3fd-200d-2642-fe0f", 42, 46, 15, ["🤽🏽‍♂️"]], "1f3fe": ["1f93d-1f3fe-200d-2642-fe0f", 42, 47, 15, ["🤽🏾‍♂️"]], "1f3ff": ["1f93d-1f3ff-200d-2642-fe0f", 42, 48, 15, ["🤽🏿‍♂️"]] },
        "1f93d": { "1f3fb": ["1f93d-1f3fb", 42, 50, 15, ["🤽🏻"]], "1f3fc": ["1f93d-1f3fc", 42, 51, 15, ["🤽🏼"]], "1f3fd": ["1f93d-1f3fd", 42, 52, 15, ["🤽🏽"]], "1f3fe": ["1f93d-1f3fe", 42, 53, 15, ["🤽🏾"]], "1f3ff": ["1f93d-1f3ff", 42, 54, 15, ["🤽🏿"]] },
        "1f93e-200d-2640-fe0f": { "1f3fb": ["1f93e-1f3fb-200d-2640-fe0f", 42, 56, 15, ["🤾🏻‍♀️"]], "1f3fc": ["1f93e-1f3fc-200d-2640-fe0f", 42, 57, 15, ["🤾🏼‍♀️"]], "1f3fd": ["1f93e-1f3fd-200d-2640-fe0f", 42, 58, 15, ["🤾🏽‍♀️"]], "1f3fe": ["1f93e-1f3fe-200d-2640-fe0f", 42, 59, 15, ["🤾🏾‍♀️"]], "1f3ff": ["1f93e-1f3ff-200d-2640-fe0f", 42, 60, 15, ["🤾🏿‍♀️"]] },
        "1f93e-200d-2642-fe0f": { "1f3fb": ["1f93e-1f3fb-200d-2642-fe0f", 43, 1, 15, ["🤾🏻‍♂️"]], "1f3fc": ["1f93e-1f3fc-200d-2642-fe0f", 43, 2, 15, ["🤾🏼‍♂️"]], "1f3fd": ["1f93e-1f3fd-200d-2642-fe0f", 43, 3, 15, ["🤾🏽‍♂️"]], "1f3fe": ["1f93e-1f3fe-200d-2642-fe0f", 43, 4, 15, ["🤾🏾‍♂️"]], "1f3ff": ["1f93e-1f3ff-200d-2642-fe0f", 43, 5, 15, ["🤾🏿‍♂️"]] },
        "1f93e": { "1f3fb": ["1f93e-1f3fb", 43, 7, 15, ["🤾🏻"]], "1f3fc": ["1f93e-1f3fc", 43, 8, 15, ["🤾🏼"]], "1f3fd": ["1f93e-1f3fd", 43, 9, 15, ["🤾🏽"]], "1f3fe": ["1f93e-1f3fe", 43, 10, 15, ["🤾🏾"]], "1f3ff": ["1f93e-1f3ff", 43, 11, 15, ["🤾🏿"]] },
        "1f977": { "1f3fb": ["1f977-1f3fb", 44, 7, 15, ["🥷🏻"]], "1f3fc": ["1f977-1f3fc", 44, 8, 15, ["🥷🏼"]], "1f3fd": ["1f977-1f3fd", 44, 9, 15, ["🥷🏽"]], "1f3fe": ["1f977-1f3fe", 44, 10, 15, ["🥷🏾"]], "1f3ff": ["1f977-1f3ff", 44, 11, 15, ["🥷🏿"]] },
        "1f9b5": { "1f3fb": ["1f9b5-1f3fb", 45, 9, 15, ["🦵🏻"]], "1f3fc": ["1f9b5-1f3fc", 45, 10, 15, ["🦵🏼"]], "1f3fd": ["1f9b5-1f3fd", 45, 11, 15, ["🦵🏽"]], "1f3fe": ["1f9b5-1f3fe", 45, 12, 15, ["🦵🏾"]], "1f3ff": ["1f9b5-1f3ff", 45, 13, 15, ["🦵🏿"]] },
        "1f9b6": { "1f3fb": ["1f9b6-1f3fb", 45, 15, 15, ["🦶🏻"]], "1f3fc": ["1f9b6-1f3fc", 45, 16, 15, ["🦶🏼"]], "1f3fd": ["1f9b6-1f3fd", 45, 17, 15, ["🦶🏽"]], "1f3fe": ["1f9b6-1f3fe", 45, 18, 15, ["🦶🏾"]], "1f3ff": ["1f9b6-1f3ff", 45, 19, 15, ["🦶🏿"]] },
        "1f9b8-200d-2640-fe0f": { "1f3fb": ["1f9b8-1f3fb-200d-2640-fe0f", 45, 22, 15, ["🦸🏻‍♀️"]], "1f3fc": ["1f9b8-1f3fc-200d-2640-fe0f", 45, 23, 15, ["🦸🏼‍♀️"]], "1f3fd": ["1f9b8-1f3fd-200d-2640-fe0f", 45, 24, 15, ["🦸🏽‍♀️"]], "1f3fe": ["1f9b8-1f3fe-200d-2640-fe0f", 45, 25, 15, ["🦸🏾‍♀️"]], "1f3ff": ["1f9b8-1f3ff-200d-2640-fe0f", 45, 26, 15, ["🦸🏿‍♀️"]] },
        "1f9b8-200d-2642-fe0f": { "1f3fb": ["1f9b8-1f3fb-200d-2642-fe0f", 45, 28, 15, ["🦸🏻‍♂️"]], "1f3fc": ["1f9b8-1f3fc-200d-2642-fe0f", 45, 29, 15, ["🦸🏼‍♂️"]], "1f3fd": ["1f9b8-1f3fd-200d-2642-fe0f", 45, 30, 15, ["🦸🏽‍♂️"]], "1f3fe": ["1f9b8-1f3fe-200d-2642-fe0f", 45, 31, 15, ["🦸🏾‍♂️"]], "1f3ff": ["1f9b8-1f3ff-200d-2642-fe0f", 45, 32, 15, ["🦸🏿‍♂️"]] },
        "1f9b8": { "1f3fb": ["1f9b8-1f3fb", 45, 34, 15, ["🦸🏻"]], "1f3fc": ["1f9b8-1f3fc", 45, 35, 15, ["🦸🏼"]], "1f3fd": ["1f9b8-1f3fd", 45, 36, 15, ["🦸🏽"]], "1f3fe": ["1f9b8-1f3fe", 45, 37, 15, ["🦸🏾"]], "1f3ff": ["1f9b8-1f3ff", 45, 38, 15, ["🦸🏿"]] },
        "1f9b9-200d-2640-fe0f": { "1f3fb": ["1f9b9-1f3fb-200d-2640-fe0f", 45, 40, 15, ["🦹🏻‍♀️"]], "1f3fc": ["1f9b9-1f3fc-200d-2640-fe0f", 45, 41, 15, ["🦹🏼‍♀️"]], "1f3fd": ["1f9b9-1f3fd-200d-2640-fe0f", 45, 42, 15, ["🦹🏽‍♀️"]], "1f3fe": ["1f9b9-1f3fe-200d-2640-fe0f", 45, 43, 15, ["🦹🏾‍♀️"]], "1f3ff": ["1f9b9-1f3ff-200d-2640-fe0f", 45, 44, 15, ["🦹🏿‍♀️"]] },
        "1f9b9-200d-2642-fe0f": { "1f3fb": ["1f9b9-1f3fb-200d-2642-fe0f", 45, 46, 15, ["🦹🏻‍♂️"]], "1f3fc": ["1f9b9-1f3fc-200d-2642-fe0f", 45, 47, 15, ["🦹🏼‍♂️"]], "1f3fd": ["1f9b9-1f3fd-200d-2642-fe0f", 45, 48, 15, ["🦹🏽‍♂️"]], "1f3fe": ["1f9b9-1f3fe-200d-2642-fe0f", 45, 49, 15, ["🦹🏾‍♂️"]], "1f3ff": ["1f9b9-1f3ff-200d-2642-fe0f", 45, 50, 15, ["🦹🏿‍♂️"]] },
        "1f9b9": { "1f3fb": ["1f9b9-1f3fb", 45, 52, 15, ["🦹🏻"]], "1f3fc": ["1f9b9-1f3fc", 45, 53, 15, ["🦹🏼"]], "1f3fd": ["1f9b9-1f3fd", 45, 54, 15, ["🦹🏽"]], "1f3fe": ["1f9b9-1f3fe", 45, 55, 15, ["🦹🏾"]], "1f3ff": ["1f9b9-1f3ff", 45, 56, 15, ["🦹🏿"]] },
        "1f9bb": { "1f3fb": ["1f9bb-1f3fb", 45, 59, 15, ["🦻🏻"]], "1f3fc": ["1f9bb-1f3fc", 45, 60, 15, ["🦻🏼"]], "1f3fd": ["1f9bb-1f3fd", 46, 0, 15, ["🦻🏽"]], "1f3fe": ["1f9bb-1f3fe", 46, 1, 15, ["🦻🏾"]], "1f3ff": ["1f9bb-1f3ff", 46, 2, 15, ["🦻🏿"]] },
        "1f9cd-200d-2640-fe0f": { "1f3fb": ["1f9cd-1f3fb-200d-2640-fe0f", 46, 21, 15, ["🧍🏻‍♀️"]], "1f3fc": ["1f9cd-1f3fc-200d-2640-fe0f", 46, 22, 15, ["🧍🏼‍♀️"]], "1f3fd": ["1f9cd-1f3fd-200d-2640-fe0f", 46, 23, 15, ["🧍🏽‍♀️"]], "1f3fe": ["1f9cd-1f3fe-200d-2640-fe0f", 46, 24, 15, ["🧍🏾‍♀️"]], "1f3ff": ["1f9cd-1f3ff-200d-2640-fe0f", 46, 25, 15, ["🧍🏿‍♀️"]] },
        "1f9cd-200d-2642-fe0f": { "1f3fb": ["1f9cd-1f3fb-200d-2642-fe0f", 46, 27, 15, ["🧍🏻‍♂️"]], "1f3fc": ["1f9cd-1f3fc-200d-2642-fe0f", 46, 28, 15, ["🧍🏼‍♂️"]], "1f3fd": ["1f9cd-1f3fd-200d-2642-fe0f", 46, 29, 15, ["🧍🏽‍♂️"]], "1f3fe": ["1f9cd-1f3fe-200d-2642-fe0f", 46, 30, 15, ["🧍🏾‍♂️"]], "1f3ff": ["1f9cd-1f3ff-200d-2642-fe0f", 46, 31, 15, ["🧍🏿‍♂️"]] },
        "1f9cd": { "1f3fb": ["1f9cd-1f3fb", 46, 33, 15, ["🧍🏻"]], "1f3fc": ["1f9cd-1f3fc", 46, 34, 15, ["🧍🏼"]], "1f3fd": ["1f9cd-1f3fd", 46, 35, 15, ["🧍🏽"]], "1f3fe": ["1f9cd-1f3fe", 46, 36, 15, ["🧍🏾"]], "1f3ff": ["1f9cd-1f3ff", 46, 37, 15, ["🧍🏿"]] },
        "1f9ce-200d-2640-fe0f": { "1f3fb": ["1f9ce-1f3fb-200d-2640-fe0f", 46, 39, 15, ["🧎🏻‍♀️"]], "1f3fc": ["1f9ce-1f3fc-200d-2640-fe0f", 46, 40, 15, ["🧎🏼‍♀️"]], "1f3fd": ["1f9ce-1f3fd-200d-2640-fe0f", 46, 41, 15, ["🧎🏽‍♀️"]], "1f3fe": ["1f9ce-1f3fe-200d-2640-fe0f", 46, 42, 15, ["🧎🏾‍♀️"]], "1f3ff": ["1f9ce-1f3ff-200d-2640-fe0f", 46, 43, 15, ["🧎🏿‍♀️"]] },
        "1f9ce-200d-2642-fe0f": { "1f3fb": ["1f9ce-1f3fb-200d-2642-fe0f", 46, 45, 15, ["🧎🏻‍♂️"]], "1f3fc": ["1f9ce-1f3fc-200d-2642-fe0f", 46, 46, 15, ["🧎🏼‍♂️"]], "1f3fd": ["1f9ce-1f3fd-200d-2642-fe0f", 46, 47, 15, ["🧎🏽‍♂️"]], "1f3fe": ["1f9ce-1f3fe-200d-2642-fe0f", 46, 48, 15, ["🧎🏾‍♂️"]], "1f3ff": ["1f9ce-1f3ff-200d-2642-fe0f", 46, 49, 15, ["🧎🏿‍♂️"]] },
        "1f9ce": { "1f3fb": ["1f9ce-1f3fb", 46, 51, 15, ["🧎🏻"]], "1f3fc": ["1f9ce-1f3fc", 46, 52, 15, ["🧎🏼"]], "1f3fd": ["1f9ce-1f3fd", 46, 53, 15, ["🧎🏽"]], "1f3fe": ["1f9ce-1f3fe", 46, 54, 15, ["🧎🏾"]], "1f3ff": ["1f9ce-1f3ff", 46, 55, 15, ["🧎🏿"]] },
        "1f9cf-200d-2640-fe0f": { "1f3fb": ["1f9cf-1f3fb-200d-2640-fe0f", 46, 57, 15, ["🧏🏻‍♀️"]], "1f3fc": ["1f9cf-1f3fc-200d-2640-fe0f", 46, 58, 15, ["🧏🏼‍♀️"]], "1f3fd": ["1f9cf-1f3fd-200d-2640-fe0f", 46, 59, 15, ["🧏🏽‍♀️"]], "1f3fe": ["1f9cf-1f3fe-200d-2640-fe0f", 46, 60, 15, ["🧏🏾‍♀️"]], "1f3ff": ["1f9cf-1f3ff-200d-2640-fe0f", 47, 0, 15, ["🧏🏿‍♀️"]] },
        "1f9cf-200d-2642-fe0f": { "1f3fb": ["1f9cf-1f3fb-200d-2642-fe0f", 47, 2, 15, ["🧏🏻‍♂️"]], "1f3fc": ["1f9cf-1f3fc-200d-2642-fe0f", 47, 3, 15, ["🧏🏼‍♂️"]], "1f3fd": ["1f9cf-1f3fd-200d-2642-fe0f", 47, 4, 15, ["🧏🏽‍♂️"]], "1f3fe": ["1f9cf-1f3fe-200d-2642-fe0f", 47, 5, 15, ["🧏🏾‍♂️"]], "1f3ff": ["1f9cf-1f3ff-200d-2642-fe0f", 47, 6, 15, ["🧏🏿‍♂️"]] },
        "1f9cf": { "1f3fb": ["1f9cf-1f3fb", 47, 8, 15, ["🧏🏻"]], "1f3fc": ["1f9cf-1f3fc", 47, 9, 15, ["🧏🏼"]], "1f3fd": ["1f9cf-1f3fd", 47, 10, 15, ["🧏🏽"]], "1f3fe": ["1f9cf-1f3fe", 47, 11, 15, ["🧏🏾"]], "1f3ff": ["1f9cf-1f3ff", 47, 12, 15, ["🧏🏿"]] },
        "1f9d1-200d-1f33e": { "1f3fb": ["1f9d1-1f3fb-200d-1f33e", 47, 15, 15, ["🧑🏻‍🌾"]], "1f3fc": ["1f9d1-1f3fc-200d-1f33e", 47, 16, 15, ["🧑🏼‍🌾"]], "1f3fd": ["1f9d1-1f3fd-200d-1f33e", 47, 17, 15, ["🧑🏽‍🌾"]], "1f3fe": ["1f9d1-1f3fe-200d-1f33e", 47, 18, 15, ["🧑🏾‍🌾"]], "1f3ff": ["1f9d1-1f3ff-200d-1f33e", 47, 19, 15, ["🧑🏿‍🌾"]] },
        "1f9d1-200d-1f373": { "1f3fb": ["1f9d1-1f3fb-200d-1f373", 47, 21, 15, ["🧑🏻‍🍳"]], "1f3fc": ["1f9d1-1f3fc-200d-1f373", 47, 22, 15, ["🧑🏼‍🍳"]], "1f3fd": ["1f9d1-1f3fd-200d-1f373", 47, 23, 15, ["🧑🏽‍🍳"]], "1f3fe": ["1f9d1-1f3fe-200d-1f373", 47, 24, 15, ["🧑🏾‍🍳"]], "1f3ff": ["1f9d1-1f3ff-200d-1f373", 47, 25, 15, ["🧑🏿‍🍳"]] },
        "1f9d1-200d-1f37c": { "1f3fb": ["1f9d1-1f3fb-200d-1f37c", 47, 27, 15, ["🧑🏻‍🍼"]], "1f3fc": ["1f9d1-1f3fc-200d-1f37c", 47, 28, 15, ["🧑🏼‍🍼"]], "1f3fd": ["1f9d1-1f3fd-200d-1f37c", 47, 29, 15, ["🧑🏽‍🍼"]], "1f3fe": ["1f9d1-1f3fe-200d-1f37c", 47, 30, 15, ["🧑🏾‍🍼"]], "1f3ff": ["1f9d1-1f3ff-200d-1f37c", 47, 31, 15, ["🧑🏿‍🍼"]] },
        "1f9d1-200d-1f384": { "1f3fb": ["1f9d1-1f3fb-200d-1f384", 47, 33, 15, ["🧑🏻‍🎄"]], "1f3fc": ["1f9d1-1f3fc-200d-1f384", 47, 34, 15, ["🧑🏼‍🎄"]], "1f3fd": ["1f9d1-1f3fd-200d-1f384", 47, 35, 15, ["🧑🏽‍🎄"]], "1f3fe": ["1f9d1-1f3fe-200d-1f384", 47, 36, 15, ["🧑🏾‍🎄"]], "1f3ff": ["1f9d1-1f3ff-200d-1f384", 47, 37, 15, ["🧑🏿‍🎄"]] },
        "1f9d1-200d-1f393": { "1f3fb": ["1f9d1-1f3fb-200d-1f393", 47, 39, 15, ["🧑🏻‍🎓"]], "1f3fc": ["1f9d1-1f3fc-200d-1f393", 47, 40, 15, ["🧑🏼‍🎓"]], "1f3fd": ["1f9d1-1f3fd-200d-1f393", 47, 41, 15, ["🧑🏽‍🎓"]], "1f3fe": ["1f9d1-1f3fe-200d-1f393", 47, 42, 15, ["🧑🏾‍🎓"]], "1f3ff": ["1f9d1-1f3ff-200d-1f393", 47, 43, 15, ["🧑🏿‍🎓"]] },
        "1f9d1-200d-1f3a4": { "1f3fb": ["1f9d1-1f3fb-200d-1f3a4", 47, 45, 15, ["🧑🏻‍🎤"]], "1f3fc": ["1f9d1-1f3fc-200d-1f3a4", 47, 46, 15, ["🧑🏼‍🎤"]], "1f3fd": ["1f9d1-1f3fd-200d-1f3a4", 47, 47, 15, ["🧑🏽‍🎤"]], "1f3fe": ["1f9d1-1f3fe-200d-1f3a4", 47, 48, 15, ["🧑🏾‍🎤"]], "1f3ff": ["1f9d1-1f3ff-200d-1f3a4", 47, 49, 15, ["🧑🏿‍🎤"]] },
        "1f9d1-200d-1f3a8": { "1f3fb": ["1f9d1-1f3fb-200d-1f3a8", 47, 51, 15, ["🧑🏻‍🎨"]], "1f3fc": ["1f9d1-1f3fc-200d-1f3a8", 47, 52, 15, ["🧑🏼‍🎨"]], "1f3fd": ["1f9d1-1f3fd-200d-1f3a8", 47, 53, 15, ["🧑🏽‍🎨"]], "1f3fe": ["1f9d1-1f3fe-200d-1f3a8", 47, 54, 15, ["🧑🏾‍🎨"]], "1f3ff": ["1f9d1-1f3ff-200d-1f3a8", 47, 55, 15, ["🧑🏿‍🎨"]] },
        "1f9d1-200d-1f3eb": { "1f3fb": ["1f9d1-1f3fb-200d-1f3eb", 47, 57, 15, ["🧑🏻‍🏫"]], "1f3fc": ["1f9d1-1f3fc-200d-1f3eb", 47, 58, 15, ["🧑🏼‍🏫"]], "1f3fd": ["1f9d1-1f3fd-200d-1f3eb", 47, 59, 15, ["🧑🏽‍🏫"]], "1f3fe": ["1f9d1-1f3fe-200d-1f3eb", 47, 60, 15, ["🧑🏾‍🏫"]], "1f3ff": ["1f9d1-1f3ff-200d-1f3eb", 48, 0, 15, ["🧑🏿‍🏫"]] },
        "1f9d1-200d-1f3ed": { "1f3fb": ["1f9d1-1f3fb-200d-1f3ed", 48, 2, 15, ["🧑🏻‍🏭"]], "1f3fc": ["1f9d1-1f3fc-200d-1f3ed", 48, 3, 15, ["🧑🏼‍🏭"]], "1f3fd": ["1f9d1-1f3fd-200d-1f3ed", 48, 4, 15, ["🧑🏽‍🏭"]], "1f3fe": ["1f9d1-1f3fe-200d-1f3ed", 48, 5, 15, ["🧑🏾‍🏭"]], "1f3ff": ["1f9d1-1f3ff-200d-1f3ed", 48, 6, 15, ["🧑🏿‍🏭"]] },
        "1f9d1-200d-1f4bb": { "1f3fb": ["1f9d1-1f3fb-200d-1f4bb", 48, 8, 15, ["🧑🏻‍💻"]], "1f3fc": ["1f9d1-1f3fc-200d-1f4bb", 48, 9, 15, ["🧑🏼‍💻"]], "1f3fd": ["1f9d1-1f3fd-200d-1f4bb", 48, 10, 15, ["🧑🏽‍💻"]], "1f3fe": ["1f9d1-1f3fe-200d-1f4bb", 48, 11, 15, ["🧑🏾‍💻"]], "1f3ff": ["1f9d1-1f3ff-200d-1f4bb", 48, 12, 15, ["🧑🏿‍💻"]] },
        "1f9d1-200d-1f4bc": { "1f3fb": ["1f9d1-1f3fb-200d-1f4bc", 48, 14, 15, ["🧑🏻‍💼"]], "1f3fc": ["1f9d1-1f3fc-200d-1f4bc", 48, 15, 15, ["🧑🏼‍💼"]], "1f3fd": ["1f9d1-1f3fd-200d-1f4bc", 48, 16, 15, ["🧑🏽‍💼"]], "1f3fe": ["1f9d1-1f3fe-200d-1f4bc", 48, 17, 15, ["🧑🏾‍💼"]], "1f3ff": ["1f9d1-1f3ff-200d-1f4bc", 48, 18, 15, ["🧑🏿‍💼"]] },
        "1f9d1-200d-1f527": { "1f3fb": ["1f9d1-1f3fb-200d-1f527", 48, 20, 15, ["🧑🏻‍🔧"]], "1f3fc": ["1f9d1-1f3fc-200d-1f527", 48, 21, 15, ["🧑🏼‍🔧"]], "1f3fd": ["1f9d1-1f3fd-200d-1f527", 48, 22, 15, ["🧑🏽‍🔧"]], "1f3fe": ["1f9d1-1f3fe-200d-1f527", 48, 23, 15, ["🧑🏾‍🔧"]], "1f3ff": ["1f9d1-1f3ff-200d-1f527", 48, 24, 15, ["🧑🏿‍🔧"]] },
        "1f9d1-200d-1f52c": { "1f3fb": ["1f9d1-1f3fb-200d-1f52c", 48, 26, 15, ["🧑🏻‍🔬"]], "1f3fc": ["1f9d1-1f3fc-200d-1f52c", 48, 27, 15, ["🧑🏼‍🔬"]], "1f3fd": ["1f9d1-1f3fd-200d-1f52c", 48, 28, 15, ["🧑🏽‍🔬"]], "1f3fe": ["1f9d1-1f3fe-200d-1f52c", 48, 29, 15, ["🧑🏾‍🔬"]], "1f3ff": ["1f9d1-1f3ff-200d-1f52c", 48, 30, 15, ["🧑🏿‍🔬"]] },
        "1f9d1-200d-1f680": { "1f3fb": ["1f9d1-1f3fb-200d-1f680", 48, 32, 15, ["🧑🏻‍🚀"]], "1f3fc": ["1f9d1-1f3fc-200d-1f680", 48, 33, 15, ["🧑🏼‍🚀"]], "1f3fd": ["1f9d1-1f3fd-200d-1f680", 48, 34, 15, ["🧑🏽‍🚀"]], "1f3fe": ["1f9d1-1f3fe-200d-1f680", 48, 35, 15, ["🧑🏾‍🚀"]], "1f3ff": ["1f9d1-1f3ff-200d-1f680", 48, 36, 15, ["🧑🏿‍🚀"]] },
        "1f9d1-200d-1f692": { "1f3fb": ["1f9d1-1f3fb-200d-1f692", 48, 38, 15, ["🧑🏻‍🚒"]], "1f3fc": ["1f9d1-1f3fc-200d-1f692", 48, 39, 15, ["🧑🏼‍🚒"]], "1f3fd": ["1f9d1-1f3fd-200d-1f692", 48, 40, 15, ["🧑🏽‍🚒"]], "1f3fe": ["1f9d1-1f3fe-200d-1f692", 48, 41, 15, ["🧑🏾‍🚒"]], "1f3ff": ["1f9d1-1f3ff-200d-1f692", 48, 42, 15, ["🧑🏿‍🚒"]] },
        "1f9d1-200d-1f91d-200d-1f9d1": { "1f3fb-1f3fb": ["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb", 48, 44, 15, ["🧑🏻‍🤝‍🧑🏻"]], "1f3fb-1f3fc": ["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc", 48, 45, 15, ["🧑🏻‍🤝‍🧑🏼"]], "1f3fb-1f3fd": ["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd", 48, 46, 15, ["🧑🏻‍🤝‍🧑🏽"]], "1f3fb-1f3fe": ["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe", 48, 47, 15, ["🧑🏻‍🤝‍🧑🏾"]], "1f3fb-1f3ff": ["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff", 48, 48, 15, ["🧑🏻‍🤝‍🧑🏿"]], "1f3fc-1f3fb": ["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb", 48, 49, 15, ["🧑🏼‍🤝‍🧑🏻"]], "1f3fc-1f3fc": ["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc", 48, 50, 15, ["🧑🏼‍🤝‍🧑🏼"]], "1f3fc-1f3fd": ["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd", 48, 51, 15, ["🧑🏼‍🤝‍🧑🏽"]], "1f3fc-1f3fe": ["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe", 48, 52, 15, ["🧑🏼‍🤝‍🧑🏾"]], "1f3fc-1f3ff": ["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff", 48, 53, 15, ["🧑🏼‍🤝‍🧑🏿"]], "1f3fd-1f3fb": ["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb", 48, 54, 15, ["🧑🏽‍🤝‍🧑🏻"]], "1f3fd-1f3fc": ["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc", 48, 55, 15, ["🧑🏽‍🤝‍🧑🏼"]], "1f3fd-1f3fd": ["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd", 48, 56, 15, ["🧑🏽‍🤝‍🧑🏽"]], "1f3fd-1f3fe": ["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe", 48, 57, 15, ["🧑🏽‍🤝‍🧑🏾"]], "1f3fd-1f3ff": ["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff", 48, 58, 15, ["🧑🏽‍🤝‍🧑🏿"]], "1f3fe-1f3fb": ["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb", 48, 59, 15, ["🧑🏾‍🤝‍🧑🏻"]], "1f3fe-1f3fc": ["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc", 48, 60, 15, ["🧑🏾‍🤝‍🧑🏼"]], "1f3fe-1f3fd": ["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd", 49, 0, 15, ["🧑🏾‍🤝‍🧑🏽"]], "1f3fe-1f3fe": ["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe", 49, 1, 15, ["🧑🏾‍🤝‍🧑🏾"]], "1f3fe-1f3ff": ["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff", 49, 2, 15, ["🧑🏾‍🤝‍🧑🏿"]], "1f3ff-1f3fb": ["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb", 49, 3, 15, ["🧑🏿‍🤝‍🧑🏻"]], "1f3ff-1f3fc": ["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc", 49, 4, 15, ["🧑🏿‍🤝‍🧑🏼"]], "1f3ff-1f3fd": ["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd", 49, 5, 15, ["🧑🏿‍🤝‍🧑🏽"]], "1f3ff-1f3fe": ["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe", 49, 6, 15, ["🧑🏿‍🤝‍🧑🏾"]], "1f3ff-1f3ff": ["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff", 49, 7, 15, ["🧑🏿‍🤝‍🧑🏿"]] },
        "1f9d1-200d-1f9af": { "1f3fb": ["1f9d1-1f3fb-200d-1f9af", 49, 9, 15, ["🧑🏻‍🦯"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9af", 49, 10, 15, ["🧑🏼‍🦯"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9af", 49, 11, 15, ["🧑🏽‍🦯"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9af", 49, 12, 15, ["🧑🏾‍🦯"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9af", 49, 13, 15, ["🧑🏿‍🦯"]] },
        "1f9d1-200d-1f9b0": { "1f3fb": ["1f9d1-1f3fb-200d-1f9b0", 49, 15, 15, ["🧑🏻‍🦰"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9b0", 49, 16, 15, ["🧑🏼‍🦰"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9b0", 49, 17, 15, ["🧑🏽‍🦰"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9b0", 49, 18, 15, ["🧑🏾‍🦰"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9b0", 49, 19, 15, ["🧑🏿‍🦰"]] },
        "1f9d1-200d-1f9b1": { "1f3fb": ["1f9d1-1f3fb-200d-1f9b1", 49, 21, 15, ["🧑🏻‍🦱"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9b1", 49, 22, 15, ["🧑🏼‍🦱"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9b1", 49, 23, 15, ["🧑🏽‍🦱"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9b1", 49, 24, 15, ["🧑🏾‍🦱"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9b1", 49, 25, 15, ["🧑🏿‍🦱"]] },
        "1f9d1-200d-1f9b2": { "1f3fb": ["1f9d1-1f3fb-200d-1f9b2", 49, 27, 15, ["🧑🏻‍🦲"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9b2", 49, 28, 15, ["🧑🏼‍🦲"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9b2", 49, 29, 15, ["🧑🏽‍🦲"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9b2", 49, 30, 15, ["🧑🏾‍🦲"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9b2", 49, 31, 15, ["🧑🏿‍🦲"]] },
        "1f9d1-200d-1f9b3": { "1f3fb": ["1f9d1-1f3fb-200d-1f9b3", 49, 33, 15, ["🧑🏻‍🦳"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9b3", 49, 34, 15, ["🧑🏼‍🦳"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9b3", 49, 35, 15, ["🧑🏽‍🦳"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9b3", 49, 36, 15, ["🧑🏾‍🦳"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9b3", 49, 37, 15, ["🧑🏿‍🦳"]] },
        "1f9d1-200d-1f9bc": { "1f3fb": ["1f9d1-1f3fb-200d-1f9bc", 49, 39, 15, ["🧑🏻‍🦼"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9bc", 49, 40, 15, ["🧑🏼‍🦼"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9bc", 49, 41, 15, ["🧑🏽‍🦼"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9bc", 49, 42, 15, ["🧑🏾‍🦼"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9bc", 49, 43, 15, ["🧑🏿‍🦼"]] },
        "1f9d1-200d-1f9bd": { "1f3fb": ["1f9d1-1f3fb-200d-1f9bd", 49, 45, 15, ["🧑🏻‍🦽"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9bd", 49, 46, 15, ["🧑🏼‍🦽"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9bd", 49, 47, 15, ["🧑🏽‍🦽"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9bd", 49, 48, 15, ["🧑🏾‍🦽"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9bd", 49, 49, 15, ["🧑🏿‍🦽"]] },
        "1f9d1-200d-2695-fe0f": { "1f3fb": ["1f9d1-1f3fb-200d-2695-fe0f", 49, 51, 15, ["🧑🏻‍⚕️"]], "1f3fc": ["1f9d1-1f3fc-200d-2695-fe0f", 49, 52, 15, ["🧑🏼‍⚕️"]], "1f3fd": ["1f9d1-1f3fd-200d-2695-fe0f", 49, 53, 15, ["🧑🏽‍⚕️"]], "1f3fe": ["1f9d1-1f3fe-200d-2695-fe0f", 49, 54, 15, ["🧑🏾‍⚕️"]], "1f3ff": ["1f9d1-1f3ff-200d-2695-fe0f", 49, 55, 15, ["🧑🏿‍⚕️"]] },
        "1f9d1-200d-2696-fe0f": { "1f3fb": ["1f9d1-1f3fb-200d-2696-fe0f", 49, 57, 15, ["🧑🏻‍⚖️"]], "1f3fc": ["1f9d1-1f3fc-200d-2696-fe0f", 49, 58, 15, ["🧑🏼‍⚖️"]], "1f3fd": ["1f9d1-1f3fd-200d-2696-fe0f", 49, 59, 15, ["🧑🏽‍⚖️"]], "1f3fe": ["1f9d1-1f3fe-200d-2696-fe0f", 49, 60, 15, ["🧑🏾‍⚖️"]], "1f3ff": ["1f9d1-1f3ff-200d-2696-fe0f", 50, 0, 15, ["🧑🏿‍⚖️"]] },
        "1f9d1-200d-2708-fe0f": { "1f3fb": ["1f9d1-1f3fb-200d-2708-fe0f", 50, 2, 15, ["🧑🏻‍✈️"]], "1f3fc": ["1f9d1-1f3fc-200d-2708-fe0f", 50, 3, 15, ["🧑🏼‍✈️"]], "1f3fd": ["1f9d1-1f3fd-200d-2708-fe0f", 50, 4, 15, ["🧑🏽‍✈️"]], "1f3fe": ["1f9d1-1f3fe-200d-2708-fe0f", 50, 5, 15, ["🧑🏾‍✈️"]], "1f3ff": ["1f9d1-1f3ff-200d-2708-fe0f", 50, 6, 15, ["🧑🏿‍✈️"]] },
        "1f9d1": { "1f3fb": ["1f9d1-1f3fb", 50, 8, 15, ["🧑🏻"]], "1f3fc": ["1f9d1-1f3fc", 50, 9, 15, ["🧑🏼"]], "1f3fd": ["1f9d1-1f3fd", 50, 10, 15, ["🧑🏽"]], "1f3fe": ["1f9d1-1f3fe", 50, 11, 15, ["🧑🏾"]], "1f3ff": ["1f9d1-1f3ff", 50, 12, 15, ["🧑🏿"]] },
        "1f9d2": { "1f3fb": ["1f9d2-1f3fb", 50, 14, 15, ["🧒🏻"]], "1f3fc": ["1f9d2-1f3fc", 50, 15, 15, ["🧒🏼"]], "1f3fd": ["1f9d2-1f3fd", 50, 16, 15, ["🧒🏽"]], "1f3fe": ["1f9d2-1f3fe", 50, 17, 15, ["🧒🏾"]], "1f3ff": ["1f9d2-1f3ff", 50, 18, 15, ["🧒🏿"]] },
        "1f9d3": { "1f3fb": ["1f9d3-1f3fb", 50, 20, 15, ["🧓🏻"]], "1f3fc": ["1f9d3-1f3fc", 50, 21, 15, ["🧓🏼"]], "1f3fd": ["1f9d3-1f3fd", 50, 22, 15, ["🧓🏽"]], "1f3fe": ["1f9d3-1f3fe", 50, 23, 15, ["🧓🏾"]], "1f3ff": ["1f9d3-1f3ff", 50, 24, 15, ["🧓🏿"]] },
        "1f9d4-200d-2640-fe0f": { "1f3fb": ["1f9d4-1f3fb-200d-2640-fe0f", 50, 26, 15, ["🧔🏻‍♀️"]], "1f3fc": ["1f9d4-1f3fc-200d-2640-fe0f", 50, 27, 15, ["🧔🏼‍♀️"]], "1f3fd": ["1f9d4-1f3fd-200d-2640-fe0f", 50, 28, 15, ["🧔🏽‍♀️"]], "1f3fe": ["1f9d4-1f3fe-200d-2640-fe0f", 50, 29, 15, ["🧔🏾‍♀️"]], "1f3ff": ["1f9d4-1f3ff-200d-2640-fe0f", 50, 30, 15, ["🧔🏿‍♀️"]] },
        "1f9d4-200d-2642-fe0f": { "1f3fb": ["1f9d4-1f3fb-200d-2642-fe0f", 50, 32, 15, ["🧔🏻‍♂️"]], "1f3fc": ["1f9d4-1f3fc-200d-2642-fe0f", 50, 33, 15, ["🧔🏼‍♂️"]], "1f3fd": ["1f9d4-1f3fd-200d-2642-fe0f", 50, 34, 15, ["🧔🏽‍♂️"]], "1f3fe": ["1f9d4-1f3fe-200d-2642-fe0f", 50, 35, 15, ["🧔🏾‍♂️"]], "1f3ff": ["1f9d4-1f3ff-200d-2642-fe0f", 50, 36, 15, ["🧔🏿‍♂️"]] },
        "1f9d4": { "1f3fb": ["1f9d4-1f3fb", 50, 38, 15, ["🧔🏻"]], "1f3fc": ["1f9d4-1f3fc", 50, 39, 15, ["🧔🏼"]], "1f3fd": ["1f9d4-1f3fd", 50, 40, 15, ["🧔🏽"]], "1f3fe": ["1f9d4-1f3fe", 50, 41, 15, ["🧔🏾"]], "1f3ff": ["1f9d4-1f3ff", 50, 42, 15, ["🧔🏿"]] },
        "1f9d5": { "1f3fb": ["1f9d5-1f3fb", 50, 44, 15, ["🧕🏻"]], "1f3fc": ["1f9d5-1f3fc", 50, 45, 15, ["🧕🏼"]], "1f3fd": ["1f9d5-1f3fd", 50, 46, 15, ["🧕🏽"]], "1f3fe": ["1f9d5-1f3fe", 50, 47, 15, ["🧕🏾"]], "1f3ff": ["1f9d5-1f3ff", 50, 48, 15, ["🧕🏿"]] },
        "1f9d6-200d-2640-fe0f": { "1f3fb": ["1f9d6-1f3fb-200d-2640-fe0f", 50, 50, 15, ["🧖🏻‍♀️"]], "1f3fc": ["1f9d6-1f3fc-200d-2640-fe0f", 50, 51, 15, ["🧖🏼‍♀️"]], "1f3fd": ["1f9d6-1f3fd-200d-2640-fe0f", 50, 52, 15, ["🧖🏽‍♀️"]], "1f3fe": ["1f9d6-1f3fe-200d-2640-fe0f", 50, 53, 15, ["🧖🏾‍♀️"]], "1f3ff": ["1f9d6-1f3ff-200d-2640-fe0f", 50, 54, 15, ["🧖🏿‍♀️"]] },
        "1f9d6-200d-2642-fe0f": { "1f3fb": ["1f9d6-1f3fb-200d-2642-fe0f", 50, 56, 15, ["🧖🏻‍♂️", "🧖🏻"]], "1f3fc": ["1f9d6-1f3fc-200d-2642-fe0f", 50, 57, 15, ["🧖🏼‍♂️", "🧖🏼"]], "1f3fd": ["1f9d6-1f3fd-200d-2642-fe0f", 50, 58, 15, ["🧖🏽‍♂️", "🧖🏽"]], "1f3fe": ["1f9d6-1f3fe-200d-2642-fe0f", 50, 59, 15, ["🧖🏾‍♂️", "🧖🏾"]], "1f3ff": ["1f9d6-1f3ff-200d-2642-fe0f", 50, 60, 15, ["🧖🏿‍♂️", "🧖🏿"]] },
        "1f9d7-200d-2640-fe0f": { "1f3fb": ["1f9d7-1f3fb-200d-2640-fe0f", 51, 7, 15, ["🧗🏻‍♀️", "🧗🏻"]], "1f3fc": ["1f9d7-1f3fc-200d-2640-fe0f", 51, 8, 15, ["🧗🏼‍♀️", "🧗🏼"]], "1f3fd": ["1f9d7-1f3fd-200d-2640-fe0f", 51, 9, 15, ["🧗🏽‍♀️", "🧗🏽"]], "1f3fe": ["1f9d7-1f3fe-200d-2640-fe0f", 51, 10, 15, ["🧗🏾‍♀️", "🧗🏾"]], "1f3ff": ["1f9d7-1f3ff-200d-2640-fe0f", 51, 11, 15, ["🧗🏿‍♀️", "🧗🏿"]] },
        "1f9d7-200d-2642-fe0f": { "1f3fb": ["1f9d7-1f3fb-200d-2642-fe0f", 51, 13, 15, ["🧗🏻‍♂️"]], "1f3fc": ["1f9d7-1f3fc-200d-2642-fe0f", 51, 14, 15, ["🧗🏼‍♂️"]], "1f3fd": ["1f9d7-1f3fd-200d-2642-fe0f", 51, 15, 15, ["🧗🏽‍♂️"]], "1f3fe": ["1f9d7-1f3fe-200d-2642-fe0f", 51, 16, 15, ["🧗🏾‍♂️"]], "1f3ff": ["1f9d7-1f3ff-200d-2642-fe0f", 51, 17, 15, ["🧗🏿‍♂️"]] },
        "1f9d8-200d-2640-fe0f": { "1f3fb": ["1f9d8-1f3fb-200d-2640-fe0f", 51, 25, 15, ["🧘🏻‍♀️", "🧘🏻"]], "1f3fc": ["1f9d8-1f3fc-200d-2640-fe0f", 51, 26, 15, ["🧘🏼‍♀️", "🧘🏼"]], "1f3fd": ["1f9d8-1f3fd-200d-2640-fe0f", 51, 27, 15, ["🧘🏽‍♀️", "🧘🏽"]], "1f3fe": ["1f9d8-1f3fe-200d-2640-fe0f", 51, 28, 15, ["🧘🏾‍♀️", "🧘🏾"]], "1f3ff": ["1f9d8-1f3ff-200d-2640-fe0f", 51, 29, 15, ["🧘🏿‍♀️", "🧘🏿"]] },
        "1f9d8-200d-2642-fe0f": { "1f3fb": ["1f9d8-1f3fb-200d-2642-fe0f", 51, 31, 15, ["🧘🏻‍♂️"]], "1f3fc": ["1f9d8-1f3fc-200d-2642-fe0f", 51, 32, 15, ["🧘🏼‍♂️"]], "1f3fd": ["1f9d8-1f3fd-200d-2642-fe0f", 51, 33, 15, ["🧘🏽‍♂️"]], "1f3fe": ["1f9d8-1f3fe-200d-2642-fe0f", 51, 34, 15, ["🧘🏾‍♂️"]], "1f3ff": ["1f9d8-1f3ff-200d-2642-fe0f", 51, 35, 15, ["🧘🏿‍♂️"]] },
        "1f9d9-200d-2640-fe0f": { "1f3fb": ["1f9d9-1f3fb-200d-2640-fe0f", 51, 43, 15, ["🧙🏻‍♀️", "🧙🏻"]], "1f3fc": ["1f9d9-1f3fc-200d-2640-fe0f", 51, 44, 15, ["🧙🏼‍♀️", "🧙🏼"]], "1f3fd": ["1f9d9-1f3fd-200d-2640-fe0f", 51, 45, 15, ["🧙🏽‍♀️", "🧙🏽"]], "1f3fe": ["1f9d9-1f3fe-200d-2640-fe0f", 51, 46, 15, ["🧙🏾‍♀️", "🧙🏾"]], "1f3ff": ["1f9d9-1f3ff-200d-2640-fe0f", 51, 47, 15, ["🧙🏿‍♀️", "🧙🏿"]] },
        "1f9d9-200d-2642-fe0f": { "1f3fb": ["1f9d9-1f3fb-200d-2642-fe0f", 51, 49, 15, ["🧙🏻‍♂️"]], "1f3fc": ["1f9d9-1f3fc-200d-2642-fe0f", 51, 50, 15, ["🧙🏼‍♂️"]], "1f3fd": ["1f9d9-1f3fd-200d-2642-fe0f", 51, 51, 15, ["🧙🏽‍♂️"]], "1f3fe": ["1f9d9-1f3fe-200d-2642-fe0f", 51, 52, 15, ["🧙🏾‍♂️"]], "1f3ff": ["1f9d9-1f3ff-200d-2642-fe0f", 51, 53, 15, ["🧙🏿‍♂️"]] },
        "1f9da-200d-2640-fe0f": { "1f3fb": ["1f9da-1f3fb-200d-2640-fe0f", 52, 0, 15, ["🧚🏻‍♀️", "🧚🏻"]], "1f3fc": ["1f9da-1f3fc-200d-2640-fe0f", 52, 1, 15, ["🧚🏼‍♀️", "🧚🏼"]], "1f3fd": ["1f9da-1f3fd-200d-2640-fe0f", 52, 2, 15, ["🧚🏽‍♀️", "🧚🏽"]], "1f3fe": ["1f9da-1f3fe-200d-2640-fe0f", 52, 3, 15, ["🧚🏾‍♀️", "🧚🏾"]], "1f3ff": ["1f9da-1f3ff-200d-2640-fe0f", 52, 4, 15, ["🧚🏿‍♀️", "🧚🏿"]] },
        "1f9da-200d-2642-fe0f": { "1f3fb": ["1f9da-1f3fb-200d-2642-fe0f", 52, 6, 15, ["🧚🏻‍♂️"]], "1f3fc": ["1f9da-1f3fc-200d-2642-fe0f", 52, 7, 15, ["🧚🏼‍♂️"]], "1f3fd": ["1f9da-1f3fd-200d-2642-fe0f", 52, 8, 15, ["🧚🏽‍♂️"]], "1f3fe": ["1f9da-1f3fe-200d-2642-fe0f", 52, 9, 15, ["🧚🏾‍♂️"]], "1f3ff": ["1f9da-1f3ff-200d-2642-fe0f", 52, 10, 15, ["🧚🏿‍♂️"]] },
        "1f9db-200d-2640-fe0f": { "1f3fb": ["1f9db-1f3fb-200d-2640-fe0f", 52, 18, 15, ["🧛🏻‍♀️", "🧛🏻"]], "1f3fc": ["1f9db-1f3fc-200d-2640-fe0f", 52, 19, 15, ["🧛🏼‍♀️", "🧛🏼"]], "1f3fd": ["1f9db-1f3fd-200d-2640-fe0f", 52, 20, 15, ["🧛🏽‍♀️", "🧛🏽"]], "1f3fe": ["1f9db-1f3fe-200d-2640-fe0f", 52, 21, 15, ["🧛🏾‍♀️", "🧛🏾"]], "1f3ff": ["1f9db-1f3ff-200d-2640-fe0f", 52, 22, 15, ["🧛🏿‍♀️", "🧛🏿"]] },
        "1f9db-200d-2642-fe0f": { "1f3fb": ["1f9db-1f3fb-200d-2642-fe0f", 52, 24, 15, ["🧛🏻‍♂️"]], "1f3fc": ["1f9db-1f3fc-200d-2642-fe0f", 52, 25, 15, ["🧛🏼‍♂️"]], "1f3fd": ["1f9db-1f3fd-200d-2642-fe0f", 52, 26, 15, ["🧛🏽‍♂️"]], "1f3fe": ["1f9db-1f3fe-200d-2642-fe0f", 52, 27, 15, ["🧛🏾‍♂️"]], "1f3ff": ["1f9db-1f3ff-200d-2642-fe0f", 52, 28, 15, ["🧛🏿‍♂️"]] },
        "1f9dc-200d-2640-fe0f": { "1f3fb": ["1f9dc-1f3fb-200d-2640-fe0f", 52, 36, 15, ["🧜🏻‍♀️"]], "1f3fc": ["1f9dc-1f3fc-200d-2640-fe0f", 52, 37, 15, ["🧜🏼‍♀️"]], "1f3fd": ["1f9dc-1f3fd-200d-2640-fe0f", 52, 38, 15, ["🧜🏽‍♀️"]], "1f3fe": ["1f9dc-1f3fe-200d-2640-fe0f", 52, 39, 15, ["🧜🏾‍♀️"]], "1f3ff": ["1f9dc-1f3ff-200d-2640-fe0f", 52, 40, 15, ["🧜🏿‍♀️"]] },
        "1f9dc-200d-2642-fe0f": { "1f3fb": ["1f9dc-1f3fb-200d-2642-fe0f", 52, 42, 15, ["🧜🏻‍♂️", "🧜🏻"]], "1f3fc": ["1f9dc-1f3fc-200d-2642-fe0f", 52, 43, 15, ["🧜🏼‍♂️", "🧜🏼"]], "1f3fd": ["1f9dc-1f3fd-200d-2642-fe0f", 52, 44, 15, ["🧜🏽‍♂️", "🧜🏽"]], "1f3fe": ["1f9dc-1f3fe-200d-2642-fe0f", 52, 45, 15, ["🧜🏾‍♂️", "🧜🏾"]], "1f3ff": ["1f9dc-1f3ff-200d-2642-fe0f", 52, 46, 15, ["🧜🏿‍♂️", "🧜🏿"]] },
        "1f9dd-200d-2640-fe0f": { "1f3fb": ["1f9dd-1f3fb-200d-2640-fe0f", 52, 54, 15, ["🧝🏻‍♀️"]], "1f3fc": ["1f9dd-1f3fc-200d-2640-fe0f", 52, 55, 15, ["🧝🏼‍♀️"]], "1f3fd": ["1f9dd-1f3fd-200d-2640-fe0f", 52, 56, 15, ["🧝🏽‍♀️"]], "1f3fe": ["1f9dd-1f3fe-200d-2640-fe0f", 52, 57, 15, ["🧝🏾‍♀️"]], "1f3ff": ["1f9dd-1f3ff-200d-2640-fe0f", 52, 58, 15, ["🧝🏿‍♀️"]] },
        "1f9dd-200d-2642-fe0f": { "1f3fb": ["1f9dd-1f3fb-200d-2642-fe0f", 52, 60, 15, ["🧝🏻‍♂️", "🧝🏻"]], "1f3fc": ["1f9dd-1f3fc-200d-2642-fe0f", 53, 0, 15, ["🧝🏼‍♂️", "🧝🏼"]], "1f3fd": ["1f9dd-1f3fd-200d-2642-fe0f", 53, 1, 15, ["🧝🏽‍♂️", "🧝🏽"]], "1f3fe": ["1f9dd-1f3fe-200d-2642-fe0f", 53, 2, 15, ["🧝🏾‍♂️", "🧝🏾"]], "1f3ff": ["1f9dd-1f3ff-200d-2642-fe0f", 53, 3, 15, ["🧝🏿‍♂️", "🧝🏿"]] },
        "1fac3": { "1f3fb": ["1fac3-1f3fb", 54, 60, 15, ["🫃🏻"]], "1f3fc": ["1fac3-1f3fc", 55, 0, 15, ["🫃🏼"]], "1f3fd": ["1fac3-1f3fd", 55, 1, 15, ["🫃🏽"]], "1f3fe": ["1fac3-1f3fe", 55, 2, 15, ["🫃🏾"]], "1f3ff": ["1fac3-1f3ff", 55, 3, 15, ["🫃🏿"]] },
        "1fac4": { "1f3fb": ["1fac4-1f3fb", 55, 5, 15, ["🫄🏻"]], "1f3fc": ["1fac4-1f3fc", 55, 6, 15, ["🫄🏼"]], "1f3fd": ["1fac4-1f3fd", 55, 7, 15, ["🫄🏽"]], "1f3fe": ["1fac4-1f3fe", 55, 8, 15, ["🫄🏾"]], "1f3ff": ["1fac4-1f3ff", 55, 9, 15, ["🫄🏿"]] },
        "1fac5": { "1f3fb": ["1fac5-1f3fb", 55, 11, 15, ["🫅🏻"]], "1f3fc": ["1fac5-1f3fc", 55, 12, 15, ["🫅🏼"]], "1f3fd": ["1fac5-1f3fd", 55, 13, 15, ["🫅🏽"]], "1f3fe": ["1fac5-1f3fe", 55, 14, 15, ["🫅🏾"]], "1f3ff": ["1fac5-1f3ff", 55, 15, 15, ["🫅🏿"]] },
        "1faf0": { "1f3fb": ["1faf0-1f3fb", 55, 40, 15, ["🫰🏻"]], "1f3fc": ["1faf0-1f3fc", 55, 41, 15, ["🫰🏼"]], "1f3fd": ["1faf0-1f3fd", 55, 42, 15, ["🫰🏽"]], "1f3fe": ["1faf0-1f3fe", 55, 43, 15, ["🫰🏾"]], "1f3ff": ["1faf0-1f3ff", 55, 44, 15, ["🫰🏿"]] },
        "1faf1": { "1f3fb": ["1faf1-1f3fb", 55, 46, 15, ["🫱🏻"]], "1f3fc": ["1faf1-1f3fc", 55, 47, 15, ["🫱🏼"]], "1f3fd": ["1faf1-1f3fd", 55, 48, 15, ["🫱🏽"]], "1f3fe": ["1faf1-1f3fe", 55, 49, 15, ["🫱🏾"]], "1f3ff": ["1faf1-1f3ff", 55, 50, 15, ["🫱🏿"]] },
        "1faf2": { "1f3fb": ["1faf2-1f3fb", 55, 52, 15, ["🫲🏻"]], "1f3fc": ["1faf2-1f3fc", 55, 53, 15, ["🫲🏼"]], "1f3fd": ["1faf2-1f3fd", 55, 54, 15, ["🫲🏽"]], "1f3fe": ["1faf2-1f3fe", 55, 55, 15, ["🫲🏾"]], "1f3ff": ["1faf2-1f3ff", 55, 56, 15, ["🫲🏿"]] },
        "1faf3": { "1f3fb": ["1faf3-1f3fb", 55, 58, 15, ["🫳🏻"]], "1f3fc": ["1faf3-1f3fc", 55, 59, 15, ["🫳🏼"]], "1f3fd": ["1faf3-1f3fd", 55, 60, 15, ["🫳🏽"]], "1f3fe": ["1faf3-1f3fe", 56, 0, 15, ["🫳🏾"]], "1f3ff": ["1faf3-1f3ff", 56, 1, 15, ["🫳🏿"]] },
        "1faf4": { "1f3fb": ["1faf4-1f3fb", 56, 3, 15, ["🫴🏻"]], "1f3fc": ["1faf4-1f3fc", 56, 4, 15, ["🫴🏼"]], "1f3fd": ["1faf4-1f3fd", 56, 5, 15, ["🫴🏽"]], "1f3fe": ["1faf4-1f3fe", 56, 6, 15, ["🫴🏾"]], "1f3ff": ["1faf4-1f3ff", 56, 7, 15, ["🫴🏿"]] },
        "1faf5": { "1f3fb": ["1faf5-1f3fb", 56, 9, 15, ["🫵🏻"]], "1f3fc": ["1faf5-1f3fc", 56, 10, 15, ["🫵🏼"]], "1f3fd": ["1faf5-1f3fd", 56, 11, 15, ["🫵🏽"]], "1f3fe": ["1faf5-1f3fe", 56, 12, 15, ["🫵🏾"]], "1f3ff": ["1faf5-1f3ff", 56, 13, 15, ["🫵🏿"]] },
        "1faf6": { "1f3fb": ["1faf6-1f3fb", 56, 15, 15, ["🫶🏻"]], "1f3fc": ["1faf6-1f3fc", 56, 16, 15, ["🫶🏼"]], "1f3fd": ["1faf6-1f3fd", 56, 17, 15, ["🫶🏽"]], "1f3fe": ["1faf6-1f3fe", 56, 18, 15, ["🫶🏾"]], "1f3ff": ["1faf6-1f3ff", 56, 19, 15, ["🫶🏿"]] },
        "1faf7": { "1f3fb": ["1faf7-1f3fb", 56, 21, 3, ["🫷🏻"]], "1f3fc": ["1faf7-1f3fc", 56, 22, 3, ["🫷🏼"]], "1f3fd": ["1faf7-1f3fd", 56, 23, 3, ["🫷🏽"]], "1f3fe": ["1faf7-1f3fe", 56, 24, 3, ["🫷🏾"]], "1f3ff": ["1faf7-1f3ff", 56, 25, 3, ["🫷🏿"]] },
        "1faf8": { "1f3fb": ["1faf8-1f3fb", 56, 27, 3, ["🫸🏻"]], "1f3fc": ["1faf8-1f3fc", 56, 28, 3, ["🫸🏼"]], "1f3fd": ["1faf8-1f3fd", 56, 29, 3, ["🫸🏽"]], "1f3fe": ["1faf8-1f3fe", 56, 30, 3, ["🫸🏾"]], "1f3ff": ["1faf8-1f3ff", 56, 31, 3, ["🫸🏿"]] },
        "261d-fe0f": { "1f3fb": ["261d-1f3fb", 57, 21, 15, ["☝🏻"]], "1f3fc": ["261d-1f3fc", 57, 22, 15, ["☝🏼"]], "1f3fd": ["261d-1f3fd", 57, 23, 15, ["☝🏽"]], "1f3fe": ["261d-1f3fe", 57, 24, 15, ["☝🏾"]], "1f3ff": ["261d-1f3ff", 57, 25, 15, ["☝🏿"]] },
        "26f9-fe0f-200d-2640-fe0f": { "1f3fb": ["26f9-1f3fb-200d-2640-fe0f", 58, 35, 15, ["⛹🏻‍♀️"]], "1f3fc": ["26f9-1f3fc-200d-2640-fe0f", 58, 36, 15, ["⛹🏼‍♀️"]], "1f3fd": ["26f9-1f3fd-200d-2640-fe0f", 58, 37, 15, ["⛹🏽‍♀️"]], "1f3fe": ["26f9-1f3fe-200d-2640-fe0f", 58, 38, 15, ["⛹🏾‍♀️"]], "1f3ff": ["26f9-1f3ff-200d-2640-fe0f", 58, 39, 15, ["⛹🏿‍♀️"]] },
        "26f9-fe0f-200d-2642-fe0f": { "1f3fb": ["26f9-1f3fb-200d-2642-fe0f", 58, 41, 15, ["⛹🏻‍♂️", "⛹🏻"]], "1f3fc": ["26f9-1f3fc-200d-2642-fe0f", 58, 42, 15, ["⛹🏼‍♂️", "⛹🏼"]], "1f3fd": ["26f9-1f3fd-200d-2642-fe0f", 58, 43, 15, ["⛹🏽‍♂️", "⛹🏽"]], "1f3fe": ["26f9-1f3fe-200d-2642-fe0f", 58, 44, 15, ["⛹🏾‍♂️", "⛹🏾"]], "1f3ff": ["26f9-1f3ff-200d-2642-fe0f", 58, 45, 15, ["⛹🏿‍♂️", "⛹🏿"]] },
        "270a": { "1f3fb": ["270a-1f3fb", 58, 59, 15, ["✊🏻"]], "1f3fc": ["270a-1f3fc", 58, 60, 15, ["✊🏼"]], "1f3fd": ["270a-1f3fd", 59, 0, 15, ["✊🏽"]], "1f3fe": ["270a-1f3fe", 59, 1, 15, ["✊🏾"]], "1f3ff": ["270a-1f3ff", 59, 2, 15, ["✊🏿"]] },
        "270b": { "1f3fb": ["270b-1f3fb", 59, 4, 15, ["✋🏻"]], "1f3fc": ["270b-1f3fc", 59, 5, 15, ["✋🏼"]], "1f3fd": ["270b-1f3fd", 59, 6, 15, ["✋🏽"]], "1f3fe": ["270b-1f3fe", 59, 7, 15, ["✋🏾"]], "1f3ff": ["270b-1f3ff", 59, 8, 15, ["✋🏿"]] },
        "270c-fe0f": { "1f3fb": ["270c-1f3fb", 59, 10, 15, ["✌🏻"]], "1f3fc": ["270c-1f3fc", 59, 11, 15, ["✌🏼"]], "1f3fd": ["270c-1f3fd", 59, 12, 15, ["✌🏽"]], "1f3fe": ["270c-1f3fe", 59, 13, 15, ["✌🏾"]], "1f3ff": ["270c-1f3ff", 59, 14, 15, ["✌🏿"]] },
        "270d-fe0f": { "1f3fb": ["270d-1f3fb", 59, 16, 15, ["✍🏻"]], "1f3fc": ["270d-1f3fc", 59, 17, 15, ["✍🏼"]], "1f3fd": ["270d-1f3fd", 59, 18, 15, ["✍🏽"]], "1f3fe": ["270d-1f3fe", 59, 19, 15, ["✍🏾"]], "1f3ff": ["270d-1f3ff", 59, 20, 15, ["✍🏿"]] }
      }, F.prototype.obsoletes_data = {
        "1f3c3-200d-2642-fe0f": ["1f3c3", 8, 26, 15],
        "1f3c3-1f3fb-200d-2642-fe0f": ["1f3c3-1f3fb", 8, 27, 15],
        "1f3c3-1f3fc-200d-2642-fe0f": ["1f3c3-1f3fc", 8, 28, 15],
        "1f3c3-1f3fd-200d-2642-fe0f": ["1f3c3-1f3fd", 8, 29, 15],
        "1f3c3-1f3fe-200d-2642-fe0f": ["1f3c3-1f3fe", 8, 30, 15],
        "1f3c3-1f3ff-200d-2642-fe0f": ["1f3c3-1f3ff", 8, 31, 15],
        "1f3c4-200d-2642-fe0f": ["1f3c4", 8, 44, 15],
        "1f3c4-1f3fb-200d-2642-fe0f": ["1f3c4-1f3fb", 8, 45, 15],
        "1f3c4-1f3fc-200d-2642-fe0f": ["1f3c4-1f3fc", 8, 46, 15],
        "1f3c4-1f3fd-200d-2642-fe0f": ["1f3c4-1f3fd", 8, 47, 15],
        "1f3c4-1f3fe-200d-2642-fe0f": ["1f3c4-1f3fe", 8, 48, 15],
        "1f3c4-1f3ff-200d-2642-fe0f": ["1f3c4-1f3ff", 8, 49, 15],
        "1f3ca-200d-2642-fe0f": ["1f3ca", 9, 11, 15],
        "1f3ca-1f3fb-200d-2642-fe0f": ["1f3ca-1f3fb", 9, 12, 15],
        "1f3ca-1f3fc-200d-2642-fe0f": ["1f3ca-1f3fc", 9, 13, 15],
        "1f3ca-1f3fd-200d-2642-fe0f": ["1f3ca-1f3fd", 9, 14, 15],
        "1f3ca-1f3fe-200d-2642-fe0f": ["1f3ca-1f3fe", 9, 15, 15],
        "1f3ca-1f3ff-200d-2642-fe0f": ["1f3ca-1f3ff", 9, 16, 15],
        "1f3cb-fe0f-200d-2642-fe0f": ["1f3cb-fe0f", 9, 29, 15],
        "1f3cb-1f3fb-200d-2642-fe0f": ["1f3cb-1f3fb", 9, 30, 15],
        "1f3cb-1f3fc-200d-2642-fe0f": ["1f3cb-1f3fc", 9, 31, 15],
        "1f3cb-1f3fd-200d-2642-fe0f": ["1f3cb-1f3fd", 9, 32, 15],
        "1f3cb-1f3fe-200d-2642-fe0f": ["1f3cb-1f3fe", 9, 33, 15],
        "1f3cb-1f3ff-200d-2642-fe0f": ["1f3cb-1f3ff", 9, 34, 15],
        "1f3cc-fe0f-200d-2642-fe0f": ["1f3cc-fe0f", 9, 47, 15],
        "1f3cc-1f3fb-200d-2642-fe0f": ["1f3cc-1f3fb", 9, 48, 15],
        "1f3cc-1f3fc-200d-2642-fe0f": ["1f3cc-1f3fc", 9, 49, 15],
        "1f3cc-1f3fd-200d-2642-fe0f": ["1f3cc-1f3fd", 9, 50, 15],
        "1f3cc-1f3fe-200d-2642-fe0f": ["1f3cc-1f3fe", 9, 51, 15],
        "1f3cc-1f3ff-200d-2642-fe0f": ["1f3cc-1f3ff", 9, 52, 15],
        "1f468-200d-1f469-200d-1f466": ["1f46a", 21, 40, 15],
        "1f46e-200d-2642-fe0f": ["1f46e", 23, 9, 15],
        "1f46e-1f3fb-200d-2642-fe0f": ["1f46e-1f3fb", 23, 10, 15],
        "1f46e-1f3fc-200d-2642-fe0f": ["1f46e-1f3fc", 23, 11, 15],
        "1f46e-1f3fd-200d-2642-fe0f": ["1f46e-1f3fd", 23, 12, 15],
        "1f46e-1f3fe-200d-2642-fe0f": ["1f46e-1f3fe", 23, 13, 15],
        "1f46e-1f3ff-200d-2642-fe0f": ["1f46e-1f3ff", 23, 14, 15],
        "1f46f-200d-2640-fe0f": ["1f46f", 23, 17, 15],
        "1f471-200d-2642-fe0f": ["1f471", 23, 48, 15],
        "1f471-1f3fb-200d-2642-fe0f": ["1f471-1f3fb", 23, 49, 15],
        "1f471-1f3fc-200d-2642-fe0f": ["1f471-1f3fc", 23, 50, 15],
        "1f471-1f3fd-200d-2642-fe0f": ["1f471-1f3fd", 23, 51, 15],
        "1f471-1f3fe-200d-2642-fe0f": ["1f471-1f3fe", 23, 52, 15],
        "1f471-1f3ff-200d-2642-fe0f": ["1f471-1f3ff", 23, 53, 15],
        "1f473-200d-2642-fe0f": ["1f473", 24, 11, 15],
        "1f473-1f3fb-200d-2642-fe0f": ["1f473-1f3fb", 24, 12, 15],
        "1f473-1f3fc-200d-2642-fe0f": ["1f473-1f3fc", 24, 13, 15],
        "1f473-1f3fd-200d-2642-fe0f": ["1f473-1f3fd", 24, 14, 15],
        "1f473-1f3fe-200d-2642-fe0f": ["1f473-1f3fe", 24, 15, 15],
        "1f473-1f3ff-200d-2642-fe0f": ["1f473-1f3ff", 24, 16, 15],
        "1f477-200d-2642-fe0f": ["1f477", 24, 47, 15],
        "1f477-1f3fb-200d-2642-fe0f": ["1f477-1f3fb", 24, 48, 15],
        "1f477-1f3fc-200d-2642-fe0f": ["1f477-1f3fc", 24, 49, 15],
        "1f477-1f3fd-200d-2642-fe0f": ["1f477-1f3fd", 24, 50, 15],
        "1f477-1f3fe-200d-2642-fe0f": ["1f477-1f3fe", 24, 51, 15],
        "1f477-1f3ff-200d-2642-fe0f": ["1f477-1f3ff", 24, 52, 15],
        "1f481-200d-2640-fe0f": ["1f481", 25, 23, 15],
        "1f481-1f3fb-200d-2640-fe0f": ["1f481-1f3fb", 25, 24, 15],
        "1f481-1f3fc-200d-2640-fe0f": ["1f481-1f3fc", 25, 25, 15],
        "1f481-1f3fd-200d-2640-fe0f": ["1f481-1f3fd", 25, 26, 15],
        "1f481-1f3fe-200d-2640-fe0f": ["1f481-1f3fe", 25, 27, 15],
        "1f481-1f3ff-200d-2640-fe0f": ["1f481-1f3ff", 25, 28, 15],
        "1f482-200d-2642-fe0f": ["1f482", 25, 41, 15],
        "1f482-1f3fb-200d-2642-fe0f": ["1f482-1f3fb", 25, 42, 15],
        "1f482-1f3fc-200d-2642-fe0f": ["1f482-1f3fc", 25, 43, 15],
        "1f482-1f3fd-200d-2642-fe0f": ["1f482-1f3fd", 25, 44, 15],
        "1f482-1f3fe-200d-2642-fe0f": ["1f482-1f3fe", 25, 45, 15],
        "1f482-1f3ff-200d-2642-fe0f": ["1f482-1f3ff", 25, 46, 15],
        "1f486-200d-2640-fe0f": ["1f486", 26, 11, 15],
        "1f486-1f3fb-200d-2640-fe0f": ["1f486-1f3fb", 26, 12, 15],
        "1f486-1f3fc-200d-2640-fe0f": ["1f486-1f3fc", 26, 13, 15],
        "1f486-1f3fd-200d-2640-fe0f": ["1f486-1f3fd", 26, 14, 15],
        "1f486-1f3fe-200d-2640-fe0f": ["1f486-1f3fe", 26, 15, 15],
        "1f486-1f3ff-200d-2640-fe0f": ["1f486-1f3ff", 26, 16, 15],
        "1f487-200d-2640-fe0f": ["1f487", 26, 29, 15],
        "1f487-1f3fb-200d-2640-fe0f": ["1f487-1f3fb", 26, 30, 15],
        "1f487-1f3fc-200d-2640-fe0f": ["1f487-1f3fc", 26, 31, 15],
        "1f487-1f3fd-200d-2640-fe0f": ["1f487-1f3fd", 26, 32, 15],
        "1f487-1f3fe-200d-2640-fe0f": ["1f487-1f3fe", 26, 33, 15],
        "1f487-1f3ff-200d-2640-fe0f": ["1f487-1f3ff", 26, 34, 15],
        "1f575-fe0f-200d-2642-fe0f": ["1f575-fe0f", 31, 17, 15],
        "1f575-1f3fb-200d-2642-fe0f": ["1f575-1f3fb", 31, 18, 15],
        "1f575-1f3fc-200d-2642-fe0f": ["1f575-1f3fc", 31, 19, 15],
        "1f575-1f3fd-200d-2642-fe0f": ["1f575-1f3fd", 31, 20, 15],
        "1f575-1f3fe-200d-2642-fe0f": ["1f575-1f3fe", 31, 21, 15],
        "1f575-1f3ff-200d-2642-fe0f": ["1f575-1f3ff", 31, 22, 15],
        "1f645-200d-2640-fe0f": ["1f645", 33, 44, 15],
        "1f645-1f3fb-200d-2640-fe0f": ["1f645-1f3fb", 33, 45, 15],
        "1f645-1f3fc-200d-2640-fe0f": ["1f645-1f3fc", 33, 46, 15],
        "1f645-1f3fd-200d-2640-fe0f": ["1f645-1f3fd", 33, 47, 15],
        "1f645-1f3fe-200d-2640-fe0f": ["1f645-1f3fe", 33, 48, 15],
        "1f645-1f3ff-200d-2640-fe0f": ["1f645-1f3ff", 33, 49, 15],
        "1f646-200d-2640-fe0f": ["1f646", 34, 1, 15],
        "1f646-1f3fb-200d-2640-fe0f": ["1f646-1f3fb", 34, 2, 15],
        "1f646-1f3fc-200d-2640-fe0f": ["1f646-1f3fc", 34, 3, 15],
        "1f646-1f3fd-200d-2640-fe0f": ["1f646-1f3fd", 34, 4, 15],
        "1f646-1f3fe-200d-2640-fe0f": ["1f646-1f3fe", 34, 5, 15],
        "1f646-1f3ff-200d-2640-fe0f": ["1f646-1f3ff", 34, 6, 15],
        "1f64b-200d-2640-fe0f": ["1f64b", 34, 40, 15],
        "1f64b-1f3fb-200d-2640-fe0f": ["1f64b-1f3fb", 34, 41, 15],
        "1f64b-1f3fc-200d-2640-fe0f": ["1f64b-1f3fc", 34, 42, 15],
        "1f64b-1f3fd-200d-2640-fe0f": ["1f64b-1f3fd", 34, 43, 15],
        "1f64b-1f3fe-200d-2640-fe0f": ["1f64b-1f3fe", 34, 44, 15],
        "1f64b-1f3ff-200d-2640-fe0f": ["1f64b-1f3ff", 34, 45, 15],
        "1f64d-200d-2640-fe0f": ["1f64d", 35, 3, 15],
        "1f64d-1f3fb-200d-2640-fe0f": ["1f64d-1f3fb", 35, 4, 15],
        "1f64d-1f3fc-200d-2640-fe0f": ["1f64d-1f3fc", 35, 5, 15],
        "1f64d-1f3fd-200d-2640-fe0f": ["1f64d-1f3fd", 35, 6, 15],
        "1f64d-1f3fe-200d-2640-fe0f": ["1f64d-1f3fe", 35, 7, 15],
        "1f64d-1f3ff-200d-2640-fe0f": ["1f64d-1f3ff", 35, 8, 15],
        "1f64e-200d-2640-fe0f": ["1f64e", 35, 21, 15],
        "1f64e-1f3fb-200d-2640-fe0f": ["1f64e-1f3fb", 35, 22, 15],
        "1f64e-1f3fc-200d-2640-fe0f": ["1f64e-1f3fc", 35, 23, 15],
        "1f64e-1f3fd-200d-2640-fe0f": ["1f64e-1f3fd", 35, 24, 15],
        "1f64e-1f3fe-200d-2640-fe0f": ["1f64e-1f3fe", 35, 25, 15],
        "1f64e-1f3ff-200d-2640-fe0f": ["1f64e-1f3ff", 35, 26, 15],
        "1f6a3-200d-2642-fe0f": ["1f6a3", 36, 19, 15],
        "1f6a3-1f3fb-200d-2642-fe0f": ["1f6a3-1f3fb", 36, 20, 15],
        "1f6a3-1f3fc-200d-2642-fe0f": ["1f6a3-1f3fc", 36, 21, 15],
        "1f6a3-1f3fd-200d-2642-fe0f": ["1f6a3-1f3fd", 36, 22, 15],
        "1f6a3-1f3fe-200d-2642-fe0f": ["1f6a3-1f3fe", 36, 23, 15],
        "1f6a3-1f3ff-200d-2642-fe0f": ["1f6a3-1f3ff", 36, 24, 15],
        "1f6b4-200d-2642-fe0f": ["1f6b4", 36, 53, 15],
        "1f6b4-1f3fb-200d-2642-fe0f": ["1f6b4-1f3fb", 36, 54, 15],
        "1f6b4-1f3fc-200d-2642-fe0f": ["1f6b4-1f3fc", 36, 55, 15],
        "1f6b4-1f3fd-200d-2642-fe0f": ["1f6b4-1f3fd", 36, 56, 15],
        "1f6b4-1f3fe-200d-2642-fe0f": ["1f6b4-1f3fe", 36, 57, 15],
        "1f6b4-1f3ff-200d-2642-fe0f": ["1f6b4-1f3ff", 36, 58, 15],
        "1f6b5-200d-2642-fe0f": ["1f6b5", 37, 10, 15],
        "1f6b5-1f3fb-200d-2642-fe0f": ["1f6b5-1f3fb", 37, 11, 15],
        "1f6b5-1f3fc-200d-2642-fe0f": ["1f6b5-1f3fc", 37, 12, 15],
        "1f6b5-1f3fd-200d-2642-fe0f": ["1f6b5-1f3fd", 37, 13, 15],
        "1f6b5-1f3fe-200d-2642-fe0f": ["1f6b5-1f3fe", 37, 14, 15],
        "1f6b5-1f3ff-200d-2642-fe0f": ["1f6b5-1f3ff", 37, 15, 15],
        "1f6b6-200d-2642-fe0f": ["1f6b6", 37, 28, 15],
        "1f6b6-1f3fb-200d-2642-fe0f": ["1f6b6-1f3fb", 37, 29, 15],
        "1f6b6-1f3fc-200d-2642-fe0f": ["1f6b6-1f3fc", 37, 30, 15],
        "1f6b6-1f3fd-200d-2642-fe0f": ["1f6b6-1f3fd", 37, 31, 15],
        "1f6b6-1f3fe-200d-2642-fe0f": ["1f6b6-1f3fe", 37, 32, 15],
        "1f6b6-1f3ff-200d-2642-fe0f": ["1f6b6-1f3ff", 37, 33, 15],
        "1f9d6-200d-2642-fe0f": ["1f9d6", 51, 0, 15],
        "1f9d6-1f3fb-200d-2642-fe0f": ["1f9d6-1f3fb", 51, 1, 15],
        "1f9d6-1f3fc-200d-2642-fe0f": ["1f9d6-1f3fc", 51, 2, 15],
        "1f9d6-1f3fd-200d-2642-fe0f": ["1f9d6-1f3fd", 51, 3, 15],
        "1f9d6-1f3fe-200d-2642-fe0f": ["1f9d6-1f3fe", 51, 4, 15],
        "1f9d6-1f3ff-200d-2642-fe0f": ["1f9d6-1f3ff", 51, 5, 15],
        "1f9d7-200d-2640-fe0f": ["1f9d7", 51, 18, 15],
        "1f9d7-1f3fb-200d-2640-fe0f": ["1f9d7-1f3fb", 51, 19, 15],
        "1f9d7-1f3fc-200d-2640-fe0f": ["1f9d7-1f3fc", 51, 20, 15],
        "1f9d7-1f3fd-200d-2640-fe0f": ["1f9d7-1f3fd", 51, 21, 15],
        "1f9d7-1f3fe-200d-2640-fe0f": ["1f9d7-1f3fe", 51, 22, 15],
        "1f9d7-1f3ff-200d-2640-fe0f": ["1f9d7-1f3ff", 51, 23, 15],
        "1f9d8-200d-2640-fe0f": ["1f9d8", 51, 36, 15],
        "1f9d8-1f3fb-200d-2640-fe0f": ["1f9d8-1f3fb", 51, 37, 15],
        "1f9d8-1f3fc-200d-2640-fe0f": ["1f9d8-1f3fc", 51, 38, 15],
        "1f9d8-1f3fd-200d-2640-fe0f": ["1f9d8-1f3fd", 51, 39, 15],
        "1f9d8-1f3fe-200d-2640-fe0f": ["1f9d8-1f3fe", 51, 40, 15],
        "1f9d8-1f3ff-200d-2640-fe0f": ["1f9d8-1f3ff", 51, 41, 15],
        "1f9d9-200d-2640-fe0f": ["1f9d9", 51, 54, 15],
        "1f9d9-1f3fb-200d-2640-fe0f": ["1f9d9-1f3fb", 51, 55, 15],
        "1f9d9-1f3fc-200d-2640-fe0f": ["1f9d9-1f3fc", 51, 56, 15],
        "1f9d9-1f3fd-200d-2640-fe0f": ["1f9d9-1f3fd", 51, 57, 15],
        "1f9d9-1f3fe-200d-2640-fe0f": ["1f9d9-1f3fe", 51, 58, 15],
        "1f9d9-1f3ff-200d-2640-fe0f": ["1f9d9-1f3ff", 51, 59, 15],
        "1f9da-200d-2640-fe0f": ["1f9da", 52, 11, 15],
        "1f9da-1f3fb-200d-2640-fe0f": ["1f9da-1f3fb", 52, 12, 15],
        "1f9da-1f3fc-200d-2640-fe0f": ["1f9da-1f3fc", 52, 13, 15],
        "1f9da-1f3fd-200d-2640-fe0f": ["1f9da-1f3fd", 52, 14, 15],
        "1f9da-1f3fe-200d-2640-fe0f": ["1f9da-1f3fe", 52, 15, 15],
        "1f9da-1f3ff-200d-2640-fe0f": ["1f9da-1f3ff", 52, 16, 15],
        "1f9db-200d-2640-fe0f": ["1f9db", 52, 29, 15],
        "1f9db-1f3fb-200d-2640-fe0f": ["1f9db-1f3fb", 52, 30, 15],
        "1f9db-1f3fc-200d-2640-fe0f": ["1f9db-1f3fc", 52, 31, 15],
        "1f9db-1f3fd-200d-2640-fe0f": ["1f9db-1f3fd", 52, 32, 15],
        "1f9db-1f3fe-200d-2640-fe0f": ["1f9db-1f3fe", 52, 33, 15],
        "1f9db-1f3ff-200d-2640-fe0f": ["1f9db-1f3ff", 52, 34, 15],
        "1f9dc-200d-2642-fe0f": ["1f9dc", 52, 47, 15],
        "1f9dc-1f3fb-200d-2642-fe0f": ["1f9dc-1f3fb", 52, 48, 15],
        "1f9dc-1f3fc-200d-2642-fe0f": ["1f9dc-1f3fc", 52, 49, 15],
        "1f9dc-1f3fd-200d-2642-fe0f": ["1f9dc-1f3fd", 52, 50, 15],
        "1f9dc-1f3fe-200d-2642-fe0f": ["1f9dc-1f3fe", 52, 51, 15],
        "1f9dc-1f3ff-200d-2642-fe0f": ["1f9dc-1f3ff", 52, 52, 15],
        "1f9dd-200d-2642-fe0f": ["1f9dd", 53, 4, 15],
        "1f9dd-1f3fb-200d-2642-fe0f": ["1f9dd-1f3fb", 53, 5, 15],
        "1f9dd-1f3fc-200d-2642-fe0f": ["1f9dd-1f3fc", 53, 6, 15],
        "1f9dd-1f3fd-200d-2642-fe0f": ["1f9dd-1f3fd", 53, 7, 15],
        "1f9dd-1f3fe-200d-2642-fe0f": ["1f9dd-1f3fe", 53, 8, 15],
        "1f9dd-1f3ff-200d-2642-fe0f": ["1f9dd-1f3ff", 53, 9, 15],
        "1f9de-200d-2642-fe0f": ["1f9de", 53, 12, 15],
        "1f9df-200d-2642-fe0f": ["1f9df", 53, 15, 15],
        "26f9-fe0f-200d-2642-fe0f": ["26f9-fe0f", 58, 46, 15],
        "26f9-1f3fb-200d-2642-fe0f": ["26f9-1f3fb", 58, 47, 15],
        "26f9-1f3fc-200d-2642-fe0f": ["26f9-1f3fc", 58, 48, 15],
        "26f9-1f3fd-200d-2642-fe0f": ["26f9-1f3fd", 58, 49, 15],
        "26f9-1f3fe-200d-2642-fe0f": ["26f9-1f3fe", 58, 50, 15],
        "26f9-1f3ff-200d-2642-fe0f": ["26f9-1f3ff", 58, 51, 15]
      }, D.exports && (u = D.exports = F), u.EmojiConvertor = F;
    }).call(/* @__PURE__ */ function() {
      return this || (typeof window < "u" ? window : l3);
    }());
  }(ED, ED.exports)), ED.exports;
}
var Q3 = Z3();
const J3 = /* @__PURE__ */ uf(Q3), ue = [
  {
    name: "People",
    emojis: [
      "😄",
      "😃",
      "😀",
      "😊",
      "😉",
      "😍",
      "😘",
      "😚",
      "😗",
      "😙",
      "😜",
      "😝",
      "😛",
      "😳",
      "😁",
      "😔",
      "😌",
      "😒",
      "😞",
      "😣",
      "😢",
      "😂",
      "😭",
      "😪",
      "😥",
      "😰",
      "😅",
      "😓",
      "😩",
      "😫",
      "😨",
      "😱",
      "😠",
      "😡",
      "😤",
      "😖",
      "😆",
      "😋",
      "😷",
      "😎",
      "😴",
      "😵",
      "😲",
      "😟",
      "😦",
      "😧",
      "👿",
      "😮",
      "😬",
      "😐",
      "😕",
      "😯",
      "😏",
      "😑",
      "👲",
      "👳",
      "👮",
      "👷",
      "💂",
      "👶",
      "👦",
      "👧",
      "👨",
      "👩",
      "👴",
      "👵",
      "👱",
      "👼",
      "👸",
      "😺",
      "😸",
      "😻",
      "😽",
      "😼",
      "🙀",
      "😿",
      "😹",
      "😾",
      "👹",
      "👺",
      "🙈",
      "🙉",
      "🙊",
      "💀",
      "👽",
      "💩",
      "🔥",
      "✨",
      "🌟",
      "💫",
      "💥",
      "💢",
      "💦",
      "💧",
      "💤",
      "💨",
      "👂",
      "👀",
      "👃",
      "👅",
      "👄",
      "👍",
      "👎",
      "👌",
      "👊",
      "✊",
      "👋",
      "✋",
      "👐",
      "👆",
      "👇",
      "👉",
      "👈",
      "🙌",
      "🙏",
      "👏",
      "💪",
      "🚶",
      "🏃",
      "💃",
      "👫",
      "👪",
      "💏",
      "💑",
      "👯",
      "🙆",
      "🙅",
      "💁",
      "🙋",
      "💆",
      "💇",
      "💅",
      "👰",
      "🙎",
      "🙍",
      "🙇",
      "🎩",
      "👑",
      "👒",
      "👟",
      "👞",
      "👡",
      "👠",
      "👢",
      "👕",
      "👔",
      "👚",
      "👗",
      "🎽",
      "👖",
      "👘",
      "👙",
      "💼",
      "👜",
      "👝",
      "👛",
      "👓",
      "🎀",
      "🌂",
      "💄",
      "💛",
      "💙",
      "💜",
      "💚",
      "💔",
      "💗",
      "💓",
      "💕",
      "💖",
      "💞",
      "💘",
      "💌",
      "💋",
      "💍",
      "💎",
      "👤",
      "💬",
      "👣"
    ]
  },
  {
    name: "Nature",
    emojis: [
      "🐶",
      "🐺",
      "🐱",
      "🐭",
      "🐹",
      "🐰",
      "🐸",
      "🐯",
      "🐨",
      "🐻",
      "🐷",
      "🐽",
      "🐮",
      "🐗",
      "🐵",
      "🐒",
      "🐴",
      "🐑",
      "🐘",
      "🐼",
      "🐧",
      "🐦",
      "🐤",
      "🐥",
      "🐣",
      "🐔",
      "🐍",
      "🐢",
      "🐛",
      "🐝",
      "🐜",
      "🐞",
      "🐌",
      "🐙",
      "🐚",
      "🐠",
      "🐟",
      "🐬",
      "🐳",
      "🐎",
      "🐲",
      "🐡",
      "🐫",
      "🐩",
      "🐾",
      "💐",
      "🌸",
      "🌷",
      "🍀",
      "🌹",
      "🌻",
      "🌺",
      "🍁",
      "🍃",
      "🍂",
      "🌿",
      "🌾",
      "🍄",
      "🌵",
      "🌴",
      "🌰",
      "🌱",
      "🌼",
      "🌑",
      "🌓",
      "🌔",
      "🌕",
      "🌛",
      "🌙",
      "🌏",
      "🌋",
      "🌌",
      "🌠",
      "⛅",
      "⛄",
      "🌀",
      "🌁",
      "🌈",
      "🌊"
    ]
  },
  {
    name: "Objects",
    emojis: [
      "🎍",
      "💝",
      "🎎",
      "🎒",
      "🎓",
      "🎏",
      "🎆",
      "🎇",
      "🎐",
      "🎑",
      "🎃",
      "👻",
      "🎅",
      "🎄",
      "🎁",
      "🎋",
      "🎉",
      "🎊",
      "🎈",
      "🎌",
      "🔮",
      "🎥",
      "📷",
      "📹",
      "📼",
      "💿",
      "📀",
      "💽",
      "💾",
      "💻",
      "📱",
      "📞",
      "📟",
      "📠",
      "📡",
      "📺",
      "📻",
      "🔊",
      "🔔",
      "📢",
      "📣",
      "⏳",
      "⌛",
      "⏰",
      "⌚",
      "🔓",
      "🔒",
      "🔏",
      "🔐",
      "🔑",
      "🔎",
      "💡",
      "🔦",
      "🔌",
      "🔋",
      "🔍",
      "🛀",
      "🚽",
      "🔧",
      "🔩",
      "🔨",
      "🚪",
      "🚬",
      "💣",
      "🔫",
      "🔪",
      "💊",
      "💉",
      "💰",
      "💴",
      "💵",
      "💳",
      "💸",
      "📲",
      "📧",
      "📥",
      "📤",
      "📩",
      "📨",
      "📫",
      "📪",
      "📮",
      "📦",
      "📝",
      "📄",
      "📃",
      "📑",
      "📊",
      "📈",
      "📉",
      "📜",
      "📋",
      "📅",
      "📆",
      "📇",
      "📁",
      "📂",
      "📌",
      "📎",
      "📏",
      "📐",
      "📕",
      "📗",
      "📘",
      "📙",
      "📓",
      "📔",
      "📒",
      "📚",
      "📖",
      "🔖",
      "📛",
      "📰",
      "🎨",
      "🎬",
      "🎤",
      "🎧",
      "🎼",
      "🎵",
      "🎶",
      "🎹",
      "🎻",
      "🎺",
      "🎷",
      "🎸",
      "👾",
      "🎮",
      "🃏",
      "🎴",
      "🀄",
      "🎲",
      "🎯",
      "🏈",
      "🏀",
      "⚽",
      "⚾",
      "🎾",
      "🎱",
      "🎳",
      "⛳",
      "🏁",
      "🏆",
      "🎿",
      "🏂",
      "🏊",
      "🏄",
      "🎣",
      "🍵",
      "🍶",
      "🍺",
      "🍻",
      "🍸",
      "🍹",
      "🍷",
      "🍴",
      "🍕",
      "🍔",
      "🍟",
      "🍗",
      "🍖",
      "🍝",
      "🍛",
      "🍤",
      "🍱",
      "🍣",
      "🍥",
      "🍙",
      "🍘",
      "🍚",
      "🍜",
      "🍲",
      "🍢",
      "🍡",
      "🍳",
      "🍞",
      "🍩",
      "🍮",
      "🍦",
      "🍨",
      "🍧",
      "🎂",
      "🍰",
      "🍪",
      "🍫",
      "🍬",
      "🍭",
      "🍯",
      "🍎",
      "🍏",
      "🍊",
      "🍒",
      "🍇",
      "🍉",
      "🍓",
      "🍑",
      "🍈",
      "🍌",
      "🍍",
      "🍠",
      "🍆",
      "🍅",
      "🌽"
    ]
  },
  {
    name: "Places",
    emojis: [
      "🏠",
      "🏡",
      "🏫",
      "🏢",
      "🏣",
      "🏥",
      "🏦",
      "🏪",
      "🏩",
      "🏨",
      "💒",
      "⛪",
      "🏬",
      "🌇",
      "🌆",
      "🏯",
      "🏰",
      "⛺",
      "🏭",
      "🗼",
      "🗾",
      "🗻",
      "🌄",
      "🌅",
      "🌃",
      "🗽",
      "🌉",
      "🎠",
      "🎡",
      "⛲",
      "🎢",
      "🚢",
      "⛵",
      "🚤",
      "🚀",
      "💺",
      "🚉",
      "🚄",
      "🚅",
      "🚇",
      "🚃",
      "🚌",
      "🚙",
      "🚗",
      "🚕",
      "🚚",
      "🚨",
      "🚓",
      "🚒",
      "🚑",
      "🚲",
      "💈",
      "🚏",
      "🎫",
      "🚥",
      "🚧",
      "🔰",
      "⛽",
      "🏮",
      "🎰",
      "🗿",
      "🎪",
      "🎭",
      "📍",
      "🚩"
    ]
  },
  {
    name: "Symbols",
    emojis: [
      "🔟",
      "🔢",
      "🔣",
      "🔠",
      "🔡",
      "🔤",
      "🔼",
      "🔽",
      "⏪",
      "⏩",
      "⏫",
      "⏬",
      "🆗",
      "🆕",
      "🆙",
      "🆒",
      "🆓",
      "🆖",
      "📶",
      "🎦",
      "🈁",
      "🈯",
      "🈳",
      "🈵",
      "🈴",
      "🈲",
      "🉐",
      "🈹",
      "🈺",
      "🈶",
      "🈚",
      "🚻",
      "🚹",
      "🚺",
      "🚼",
      "🚾",
      "🚭",
      "🈸",
      "🉑",
      "🆑",
      "🆘",
      "🆔",
      "🚫",
      "🔞",
      "⛔",
      "❎",
      "✅",
      "💟",
      "🆚",
      "📳",
      "📴",
      "🆎",
      "💠",
      "⛎",
      "🔯",
      "🏧",
      "💹",
      "💲",
      "💱",
      "❌",
      "❗",
      "❓",
      "❕",
      "❔",
      "⭕",
      "🔝",
      "🔚",
      "🔙",
      "🔛",
      "🔜",
      "🔃",
      "🕛",
      "🕐",
      "🕑",
      "🕒",
      "🕓",
      "🕔",
      "🕕",
      "🕖",
      "🕗",
      "🕘",
      "🕙",
      "🕚",
      "➕",
      "➖",
      "➗",
      "💮",
      "💯",
      "🔘",
      "🔗",
      "➰",
      "🔱",
      "🔺",
      "🔲",
      "🔳",
      "🔴",
      "🔵",
      "🔻",
      "⬜",
      "⬛",
      "🔶",
      "🔷",
      "🔸",
      "🔹"
    ]
  }
], De = {
  props: {
    onBlur: {
      type: Function,
      required: !0
    },
    onEmojiPicked: {
      type: Function,
      required: !0
    },
    colors: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      emojiData: ue,
      emojiConvertor: new J3()
    };
  },
  mounted() {
    const D = this.$refs.domNode;
    D.style.opacity = 0, window.requestAnimationFrame(() => {
      D.style.transition = "opacity 350ms", D.style.opacity = 1;
    }), this.$refs.domNode.focus();
    const u = document.createElement("style");
    u.innerHTML = `
      .sc-emoji-picker:after {
        background: ${this.colors.emojiPicker.bg ?? "white"};
      }
    `, document.head.appendChild(u), this.emojiConvertor.init_env();
  },
  methods: {
    emojiClicked(D) {
      this.onEmojiPicked(D), this.$refs.domNode.blur();
    }
  }
}, fe = { class: "sc-emoji-picker--content" }, ee = ["onClick"];
function te(D, u, f, e, F, t) {
  return b(), m("div", {
    ref: "domNode",
    tabIndex: "0",
    class: "sc-emoji-picker",
    style: j({ background: f.colors.emojiPicker.bg ?? "white" }),
    onBlur: u[0] || (u[0] = (...a) => f.onBlur && f.onBlur(...a))
  }, [
    p("div", fe, [
      (b(!0), m(qu, null, Ku(F.emojiData, (a) => (b(), m("div", {
        key: a.name,
        class: "sc-emoji-picker--category"
      }, [
        p("div", {
          class: "sc-emoji-picker--category-title",
          style: j({ color: f.colors.emojiPicker.text ?? "#b8c3ca" })
        }, Z(a.name), 5),
        (b(!0), m(qu, null, Ku(a.emojis, (n) => (b(), m("span", {
          key: n,
          class: "sc-emoji-picker--emoji",
          onClick: (r) => t.emojiClicked(n)
        }, Z(n), 9, ee))), 128))
      ]))), 128))
    ])
  ], 36);
}
const Fe = /* @__PURE__ */ M(De, [["render", te], ["__scopeId", "data-v-6f810fbe"]]), ne = {
  components: {
    EmojiPicker: Fe
  },
  props: {
    onEmojiPicked: {
      type: Function,
      required: !0
    },
    color: {
      type: String,
      required: !0
    },
    colors: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      isActive: !1
    };
  },
  methods: {
    _openPicker(D) {
      this.isActive = !this.isActive;
    },
    _handlePickerBlur() {
      this.isActive = !1;
    }
  }
}, ae = { class: "sc-user-input--picker-wrapper" }, de = ["color"];
function re(D, u, f, e, F, t) {
  const a = O("EmojiPicker");
  return b(), m("div", ae, [
    F.isActive ? (b(), V(a, {
      key: 0,
      "on-emoji-picked": f.onEmojiPicked,
      "on-blur": t._handlePickerBlur,
      colors: f.colors
    }, null, 8, ["on-emoji-picked", "on-blur", "colors"])) : z("", !0),
    p("button", {
      class: "sc-user-input--emoji-icon-wrapper",
      onClick: u[0] || (u[0] = Gu((...n) => t._openPicker && t._openPicker(...n), ["prevent"])),
      style: { marginTop: "4px", marginLeft: "-4px" }
    }, [
      (b(), m("svg", {
        id: "Layer_2",
        class: DD(["sc-user-input--emoji-icon", { active: F.isActive }]),
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: "37.393px",
        height: "37.393px",
        viewBox: "0 0 37.393 37.393",
        enableBackground: "new 0 0 37.393 37.393",
        color: f.color,
        fill: "currentColor"
      }, u[1] || (u[1] = [
        p("g", null, [
          p("path", { d: `M18.696,37.393C8.387,37.393,0,29.006,0,18.696C0,8.387,8.387,0,18.696,0c10.31,0,18.696,8.387,18.696,18.696
              C37.393,29.006,29.006,37.393,18.696,37.393z M18.696,2C9.49,2,2,9.49,2,18.696c0,9.206,7.49,16.696,16.696,16.696
              c9.206,0,16.696-7.49,16.696-16.696C35.393,9.49,27.902,2,18.696,2z` })
        ], -1),
        p("g", null, [
          p("circle", {
            cx: "12.379",
            cy: "14.359",
            r: "1.938"
          })
        ], -1),
        p("g", null, [
          p("circle", {
            cx: "24.371",
            cy: "14.414",
            r: "1.992"
          })
        ], -1),
        p("g", null, [
          p("path", { d: `M18.035,27.453c-5.748,0-8.342-4.18-8.449-4.357c-0.286-0.473-0.135-1.087,0.338-1.373
              c0.471-0.286,1.084-0.136,1.372,0.335c0.094,0.151,2.161,3.396,6.74,3.396c4.713,0,7.518-3.462,7.545-3.497
              c0.343-0.432,0.973-0.504,1.405-0.161c0.433,0.344,0.505,0.973,0.161,1.405C27.009,23.374,23.703,27.453,18.035,27.453z` })
        ], -1)
      ]), 10, de))
    ])
  ]);
}
const ie = /* @__PURE__ */ M(ne, [["render", re], ["__scopeId", "data-v-9dacb28b"]]), se = {
  props: {
    onChange: {
      type: Function,
      required: !0
    },
    color: {
      type: String,
      required: !0
    },
    acceptedFileTypes: {
      type: Array,
      required: !1,
      default: () => ["*/*"]
    }
  },
  methods: {
    _handleClick() {
      this.$refs.inputRef.click(), this.$refs.inputRef.value = null;
    },
    _handleChange(D) {
      this.onChange(D.target.files[0]);
    }
  }
}, oe = { style: { position: "relative" } }, Ce = ["color"], ce = ["accept"];
function Ee(D, u, f, e, F, t) {
  return b(), m("div", oe, [
    p("button", {
      class: "sc-user-input--file-icon-wrapper",
      type: "button",
      onClick: u[1] || (u[1] = (...a) => t._handleClick && t._handleClick(...a)),
      style: { marginTop: "8px" }
    }, [
      (b(), m("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        class: "sc-user-input--file-icon",
        x: "0px",
        y: "0px",
        width: "24px",
        height: "24px",
        viewBox: "0 0 37.393 37.393",
        enableBackground: "new 0 0 37.393 37.393",
        color: f.color,
        fill: "currentColor"
      }, u[2] || (u[2] = [
        p("path", { d: "M20.807 10.22l-2.030-2.029-10.15 10.148c-1.682 1.681-1.682 4.408 0 6.089s4.408 1.681 6.090 0l12.18-12.178c2.804-2.802 2.804-7.346 0-10.148-2.802-2.803-7.347-2.803-10.149 0l-12.788 12.787c-0.009 0.009-0.019 0.018-0.027 0.026-3.909 3.909-3.909 10.245 0 14.153 3.908 3.908 10.246 3.908 14.156 0 0.009-0.009 0.016-0.018 0.026-0.027l0.001 0.001 8.729-8.728-2.031-2.029-8.729 8.727c-0.009 0.008-0.018 0.018-0.026 0.026-2.784 2.783-7.312 2.783-10.096 0-2.783-2.783-2.783-7.31 0-10.093 0.010-0.009 0.019-0.018 0.028-0.026l-0.001-0.002 12.79-12.786c1.678-1.679 4.411-1.679 6.090 0s1.678 4.411 0 6.089l-12.18 12.178c-0.56 0.56-1.47 0.56-2.030 0-0.559-0.559-0.559-1.47 0-2.029l10.15-10.149z" }, null, -1)
      ]), 8, Ce)),
      p("input", {
        ref: "inputRef",
        id: "file-input",
        type: "file",
        accept: f.acceptedFileTypes.join(","),
        onChange: u[0] || (u[0] = (...a) => t._handleChange && t._handleChange(...a))
      }, null, 40, ce)
    ])
  ]);
}
const le = /* @__PURE__ */ M(se, [["render", Ee], ["__scopeId", "data-v-4ceda3fa"]]), Be = {
  components: {
    IconBase: Mf
  },
  props: {
    color: {
      type: String,
      required: !0
    },
    tooltip: {
      type: String,
      default: ""
    }
  }
}, be = { class: "sc-user-input--button-icon-wrapper" };
function pe(D, u, f, e, F, t) {
  const a = O("IconBase");
  return b(), m("button", be, [
    L(a, {
      color: f.color,
      width: "20",
      height: "20",
      "icon-name": f.tooltip
    }, {
      default: x(() => [
        k(D.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["color", "icon-name"])
  ]);
}
const ge = /* @__PURE__ */ M(Be, [["render", pe], ["__scopeId", "data-v-3ee3b811"]]), me = {
  props: {
    suggestions: {
      type: Array,
      default: () => []
    },
    colors: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {};
  }
}, he = ["onClick"];
function _e(D, u, f, e, F, t) {
  return b(), m("div", {
    class: "sc-suggestions-row",
    style: j({ background: f.colors.messageList.bg })
  }, [
    (b(!0), m(qu, null, Ku(f.suggestions, (a, n) => (b(), m("button", {
      key: n,
      class: "sc-suggestions-element",
      style: j({
        borderColor: f.colors.sentMessage.bg,
        color: f.colors.sentMessage.bg
      }),
      onClick: (r) => D.$emit("sendSuggestion", a)
    }, Z(a), 13, he))), 128))
  ], 4);
}
const ve = /* @__PURE__ */ M(me, [["render", _e]]), Ae = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2018.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2056%2056'%20style='enable-background:new%200%200%2056%2056;'%20xml:space='preserve'%3e%3cg%20id='svg_1'%3e%3cpath%20id='svg_2'%20fill='%23E9E9E0'%20d='m36.985,0l-29.022,0c-0.808,0%20-1.463,0.655%20-1.463,1.926l0,53.074c0,0.345%200.655,1%201.463,1l40.074,0c0.808,0%201.463,-0.655%201.463,-1l0,-42.022c0,-0.696%20-0.093,-0.92%20-0.257,-1.085l-11.636,-11.636c-0.165,-0.164%20-0.389,-0.257%20-0.622,-0.257z'/%3e%3cpolygon%20id='svg_3'%20fill='%23D9D7CA'%20points='37.5,0.151%2037.5,12%2049.349,12%20'/%3e%3cpath%20id='svg_4'%20fill='%2395A5A5'%20d='m48.037,56l-40.074,0c-0.808,0%20-1.463,-0.655%20-1.463,-1.463l0,-15.537l43,0l0,15.537c0,0.808%20-0.655,1.463%20-1.463,1.463z'/%3e%3cpath%20id='svg_9'%20fill='%23C8BDB8'%20d='m18.5,13l-6,0c-0.553,0%20-1,-0.448%20-1,-1s0.447,-1%201,-1l6,0c0.553,0%201,0.448%201,1s-0.447,1%20-1,1z'/%3e%3cpath%20id='svg_10'%20fill='%23C8BDB8'%20d='m21.5,18l-9,0c-0.553,0%20-1,-0.448%20-1,-1s0.447,-1%201,-1l9,0c0.553,0%201,0.448%201,1s-0.447,1%20-1,1z'/%3e%3cpath%20id='svg_11'%20fill='%23C8BDB8'%20d='m25.5,18c-0.26,0%20-0.521,-0.11%20-0.71,-0.29c-0.181,-0.19%20-0.29,-0.44%20-0.29,-0.71s0.109,-0.52%200.3,-0.71c0.36,-0.37%201.04,-0.37%201.41,0c0.18,0.19%200.29,0.45%200.29,0.71c0,0.26%20-0.11,0.52%20-0.29,0.71c-0.19,0.18%20-0.45,0.29%20-0.71,0.29z'/%3e%3cpath%20id='svg_12'%20fill='%23C8BDB8'%20d='m37.5,18l-8,0c-0.553,0%20-1,-0.448%20-1,-1s0.447,-1%201,-1l8,0c0.553,0%201,0.448%201,1s-0.447,1%20-1,1z'/%3e%3cpath%20id='svg_13'%20fill='%23C8BDB8'%20d='m12.5,33c-0.26,0%20-0.521,-0.11%20-0.71,-0.29c-0.181,-0.19%20-0.29,-0.45%20-0.29,-0.71c0,-0.26%200.109,-0.52%200.29,-0.71c0.37,-0.37%201.05,-0.37%201.42,0.01c0.18,0.18%200.29,0.44%200.29,0.7c0,0.26%20-0.11,0.52%20-0.29,0.71c-0.19,0.18%20-0.45,0.29%20-0.71,0.29z'/%3e%3cpath%20id='svg_14'%20fill='%23C8BDB8'%20d='m24.5,33l-8,0c-0.553,0%20-1,-0.448%20-1,-1s0.447,-1%201,-1l8,0c0.553,0%201,0.448%201,1s-0.447,1%20-1,1z'/%3e%3cpath%20id='svg_15'%20fill='%23C8BDB8'%20d='m43.5,18l-2,0c-0.553,0%20-1,-0.448%20-1,-1s0.447,-1%201,-1l2,0c0.553,0%201,0.448%201,1s-0.447,1%20-1,1z'/%3e%3cpath%20id='svg_16'%20fill='%23C8BDB8'%20d='m34.5,23l-22,0c-0.553,0%20-1,-0.448%20-1,-1s0.447,-1%201,-1l22,0c0.553,0%201,0.448%201,1s-0.447,1%20-1,1z'/%3e%3cpath%20id='svg_17'%20fill='%23C8BDB8'%20d='m43.5,23l-6,0c-0.553,0%20-1,-0.448%20-1,-1s0.447,-1%201,-1l6,0c0.553,0%201,0.448%201,1s-0.447,1%20-1,1z'/%3e%3cpath%20id='svg_18'%20fill='%23C8BDB8'%20d='m16.5,28l-4,0c-0.553,0%20-1,-0.448%20-1,-1s0.447,-1%201,-1l4,0c0.553,0%201,0.448%201,1s-0.447,1%20-1,1z'/%3e%3cpath%20id='svg_19'%20fill='%23C8BDB8'%20d='m30.5,28l-10,0c-0.553,0%20-1,-0.448%20-1,-1s0.447,-1%201,-1l10,0c0.553,0%201,0.448%201,1s-0.447,1%20-1,1z'/%3e%3cpath%20id='svg_20'%20fill='%23C8BDB8'%20d='m43.5,28l-9,0c-0.553,0%20-1,-0.448%20-1,-1s0.447,-1%201,-1l9,0c0.553,0%201,0.448%201,1s-0.447,1%20-1,1z'/%3e%3c/g%3e%3cg%20id='svg_21'/%3e%3cg%20id='svg_22'/%3e%3cg%20id='svg_23'/%3e%3cg%20id='svg_24'/%3e%3cg%20id='svg_25'/%3e%3cg%20id='svg_26'/%3e%3cg%20id='svg_27'/%3e%3cg%20id='svg_28'/%3e%3cg%20id='svg_29'/%3e%3cg%20id='svg_30'/%3e%3cg%20id='svg_31'/%3e%3cg%20id='svg_32'/%3e%3cg%20id='svg_33'/%3e%3cg%20id='svg_34'/%3e%3cg%20id='svg_35'/%3e%3c/svg%3e", Kf = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2047.971%2047.971'%20style='enable-background:new%200%200%2047.971%2047.971;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88%20c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242%20C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879%20s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z'/%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e", ye = {}, we = { d: "M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" };
function ke(D, u) {
  return b(), m("path", we);
}
const xe = /* @__PURE__ */ M(ye, [["render", ke]]), Se = {}, Te = { d: "M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z" };
function $e(D, u) {
  return b(), m("path", Te);
}
const Oe = /* @__PURE__ */ M(Se, [["render", $e]]), je = {
  components: {
    EmojiIcon: ie,
    FileIcons: le,
    UserInputButton: ge,
    Suggestions: ve,
    IconCross: Hf,
    IconOk: xe,
    IconSend: Oe
  },
  props: {
    icons: {
      type: Object,
      default: function() {
        return {
          file: {
            img: Ae,
            name: "default"
          },
          closeSvg: {
            img: Kf,
            name: "default"
          }
        };
      }
    },
    showEmoji: {
      type: Boolean,
      default: () => !1
    },
    showEmojiInText: {
      type: Boolean,
      default: () => !1
    },
    suggestions: {
      type: Array,
      default: () => []
    },
    showFile: {
      type: Boolean,
      default: () => !1
    },
    onSubmit: {
      type: Function,
      required: !0
    },
    placeholder: {
      type: String,
      default: "Write something..."
    },
    colors: {
      type: Object,
      required: !0
    },
    acceptedFileTypes: {
      type: Array,
      required: !1,
      default: () => ["*/*"]
    }
  },
  data() {
    return {
      file: null,
      inputActive: !1,
      prevSelectionRange: null,
      imageData: null
    };
  },
  computed: {
    editMessageId() {
      return this.isEditing && Du.state.editMessage.id;
    },
    isEditing() {
      return Du.state.editMessage && Du.state.editMessage.id;
    }
  },
  watch: {
    editMessageId(D) {
      Du.state.editMessage != null && Du.state.editMessage != null ? (this.$refs.userInput.focus(), this.$refs.userInput.textContent = Du.state.editMessage.data.text) : this.$refs.userInput.textContent = "";
    }
  },
  mounted() {
    this.$event.$on("focusUserInput", () => {
      this.$refs.userInput && this.focusUserInput();
    }), document.addEventListener("selectionchange", () => {
      const D = document.getSelection();
      !D || !D.anchorNode || D.anchorNode != this.$refs.userInput && D.anchorNode.parentNode != this.$refs.userInput || (D.rangeCount ? this.prevSelectionRange = D.getRangeAt(0).cloneRange() : this.prevSelectionRange = null);
    });
  },
  methods: {
    cancelFile() {
      this.file = null;
    },
    setInputActive(D) {
      this.inputActive = D;
    },
    handleKey(D) {
      D.keyCode === 13 && !D.shiftKey ? (this.isEditing ? this._editText(D) : this._submitText(D), this._editFinish(), D.preventDefault()) : D.keyCode === 27 && (this._editFinish(), D.preventDefault());
    },
    handleInput(D) {
      this.$emit("onType", D.target.textContent);
    },
    focusUserInput() {
      this.$nextTick(() => {
        this.$refs.userInput.focus();
      });
    },
    _submitSuggestion(D) {
      this.onSubmit({ author: "me", type: "text", data: { text: D } });
    },
    _checkSubmitSuccess(D) {
      Promise !== void 0 ? Promise.resolve(D).then(
        (function(u) {
          (u === void 0 || u) && (this.file = null, this.$refs.userInput.innerHTML = "");
        }).bind(this)
      ) : (this.file = null, this.$refs.userInput.innerHTML = "");
    },
    _submitText(D) {
      const u = this.$refs.userInput.textContent, f = this.file;
      f ? this._submitTextWhenFile(D, u, f) : u && u.length > 0 && this._checkSubmitSuccess(
        this.onSubmit({
          author: "me",
          type: "text",
          data: { text: u }
        })
      );
    },
    _submitTextWhenFile(D, u, f) {
      u && u.length > 0 ? this._checkSubmitSuccess(
        this.onSubmit({
          author: "me",
          type: "file",
          data: { text: u, file: f }
        })
      ) : this._checkSubmitSuccess(
        this.onSubmit({
          author: "me",
          type: "file",
          data: { file: f }
        })
      );
    },
    _editText(D) {
      const u = this.$refs.userInput.textContent;
      u && u.length && (this.$emit("edit", {
        author: "me",
        type: "text",
        id: Du.state.editMessage.id,
        data: { text: u }
      }), this._editFinish());
    },
    _handleEmojiPicked(D) {
      this.showEmojiInText ? this._addToTextEmoji(D) : this._submitEmoji(D);
    },
    _submitEmoji(D) {
      this._checkSubmitSuccess(
        this.onSubmit({
          author: "me",
          type: "emoji",
          data: { emoji: D }
        })
      );
    },
    _addToTextEmoji(D) {
      let u = this.prevSelectionRange;
      u || (this.$refs.userInput.firstChild || this.$refs.userInput.append(document.createTextNode("")), u = document.createRange(), u.setStart(this.$refs.userInput.firstChild, this.$refs.userInput.textContent.length), u.collapse(!0));
      let f = window.getSelection();
      f.removeAllRanges(), f.addRange(u);
      let e = document.createTextNode(D);
      u.deleteContents(), u.insertNode(e), u.collapse(!1), this.$refs.userInput.focus();
    },
    _handleFileSubmit(D) {
      if (this.file = D, D.type.startsWith("image/")) {
        const u = new FileReader();
        u.onload = (f) => {
          var e;
          this.imageData = (e = f.target) == null ? void 0 : e.result;
        }, u.readAsDataURL(D);
      }
      D.value = D;
    },
    _editFinish() {
      Du.setState("editMessage", null);
    }
  }
}, Pe = { class: "flex flex-row items-center gap-3" }, Ie = { class: "icon-file-message" }, ze = ["src", "alt"], Ne = ["src"], qe = ["placeholder"], Le = { class: "sc-user-input--buttons" }, Re = {
  key: 0,
  class: "sc-user-input--button"
}, Me = {
  key: 1,
  class: "sc-user-input--button"
}, He = {
  key: 2,
  class: "sc-user-input--button"
}, Ue = { class: "sc-user-input--button" };
function Ve(D, u, f, e, F, t) {
  const a = O("Suggestions"), n = O("EmojiIcon"), r = O("FileIcons"), o = O("IconCross"), d = O("UserInputButton"), c = O("IconOk"), s = O("IconSend");
  return b(), m("div", null, [
    L(a, {
      suggestions: f.suggestions,
      colors: f.colors,
      onSendSuggestion: t._submitSuggestion
    }, null, 8, ["suggestions", "colors", "onSendSuggestion"]),
    F.file ? (b(), m("div", {
      key: 0,
      class: "file-container",
      style: j({
        backgroundColor: f.colors.userInput.bg,
        color: f.colors.userInput.text
      })
    }, [
      p("div", Pe, [
        p("span", Ie, [
          F.imageData ? (b(), m("img", {
            key: 1,
            src: F.imageData,
            alt: "Uploaded Image",
            style: { height: "65px", "object-fit": "cover" }
          }, null, 8, Ne)) : (b(), m("img", {
            key: 0,
            src: f.icons.file.img,
            alt: f.icons.file.name,
            style: { height: "65px" }
          }, null, 8, ze))
        ]),
        p("span", null, Z(
          // @ts-ignore
          F.file.name
        ), 1),
        p("span", {
          class: "delete-file-message",
          onClick: u[0] || (u[0] = (B) => t.cancelFile())
        }, [
          (b(), m("svg", {
            viewBox: "0 0 47.971 47.971",
            xmlns: "http://www.w3.org/2000/svg",
            style: j(`width: 15px; height: 15px; fill: ${f.colors.userInput.text}`)
          }, u[6] || (u[6] = [
            p("path", { d: "M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" }, null, -1)
          ]), 4))
        ])
      ])
    ], 4)) : z("", !0),
    p("form", {
      class: DD(["sc-user-input", { active: F.inputActive }]),
      style: j({ background: f.colors.userInput.bg })
    }, [
      p("div", {
        ref: "userInput",
        role: "button",
        tabIndex: "0",
        contentEditable: "true",
        placeholder: f.placeholder,
        class: "sc-user-input--text",
        style: j({ color: f.colors.userInput.text }),
        onFocus: u[1] || (u[1] = (B) => t.setInputActive(!0)),
        onBlur: u[2] || (u[2] = (B) => t.setInputActive(!1)),
        onKeydown: u[3] || (u[3] = (...B) => t.handleKey && t.handleKey(...B)),
        onInput: u[4] || (u[4] = (...B) => t.handleInput && t.handleInput(...B)),
        "on:focusUserInput": u[5] || (u[5] = (B) => t.focusUserInput())
      }, null, 44, qe),
      p("div", Le, [
        u[7] || (u[7] = p("div", { class: "sc-user-input--button" }, null, -1)),
        f.showEmoji && !t.isEditing ? (b(), m("div", Re, [
          L(n, {
            "on-emoji-picked": t._handleEmojiPicked,
            color: f.colors.userInput.text,
            colors: f.colors
          }, null, 8, ["on-emoji-picked", "color", "colors"])
        ])) : z("", !0),
        f.showFile && !t.isEditing ? (b(), m("div", Me, [
          L(r, {
            "on-change": t._handleFileSubmit,
            color: f.colors.userInput.text,
            "accepted-file-types": f.acceptedFileTypes
          }, null, 8, ["on-change", "color", "accepted-file-types"])
        ])) : z("", !0),
        t.isEditing ? (b(), m("div", He, [
          L(d, {
            color: f.colors.userInput.text,
            tooltip: "cancel",
            onClick: Gu(t._editFinish, ["prevent"])
          }, {
            default: x(() => [
              L(o)
            ]),
            _: 1
          }, 8, ["color", "onClick"])
        ])) : z("", !0),
        p("div", Ue, [
          t.isEditing ? (b(), V(d, {
            key: 0,
            color: f.colors.userInput.text,
            tooltip: "Edit",
            onClick: Gu(t._editText, ["prevent"])
          }, {
            default: x(() => [
              L(c)
            ]),
            _: 1
          }, 8, ["color", "onClick"])) : (b(), V(d, {
            key: 1,
            color: f.colors.userInput.text,
            tooltip: "Send",
            onClick: Gu(t._submitText, ["prevent"])
          }, {
            default: x(() => [
              L(s)
            ]),
            _: 1
          }, 8, ["color", "onClick"]))
        ])
      ])
    ], 6)
  ]);
}
const We = /* @__PURE__ */ M(je, [["render", Ve]]), Ge = {
  props: {
    participants: {
      type: Array,
      required: !0
    },
    colors: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    userListColor() {
      return Object.assign({
        userList: {
          bg: "#FFFFFF",
          text: "#000000"
        }
      }, this.colors);
    }
  }
}, Ye = { style: { "padding-top": "5px" } }, Xe = { style: { "text-align": "center" } }, Ke = ["src"];
function Ze(D, u, f, e, F, t) {
  return b(), m("div", {
    class: "user-list",
    style: j({ background: t.userListColor.userList.bg })
  }, [
    p("table", Ye, [
      p("tbody", null, [
        (b(!0), m(qu, null, Ku(f.participants, (a) => (b(), m("tr", {
          key: a.id
        }, [
          p("td", Xe, [
            p("img", {
              src: a.imageUrl,
              class: "img-msg"
            }, null, 8, Ke)
          ]),
          p("td", {
            class: "user-element",
            style: j({ color: t.userListColor.userList.text })
          }, Z(a.name), 5)
        ]))), 128))
      ])
    ])
  ], 4);
}
const Qe = /* @__PURE__ */ M(Ge, [["render", Ze], ["__scopeId", "data-v-4899c8d9"]]), Je = {
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Header: L1,
    MessageList: K3,
    UserInput: We,
    UserList: Qe
  },
  props: {
    showEmoji: {
      type: Boolean,
      default: !1
    },
    showEmojiInText: {
      type: Boolean,
      default: !1
    },
    showFile: {
      type: Boolean,
      default: !1
    },
    showHeader: {
      type: Boolean,
      default: !0
    },
    participants: {
      type: Array,
      required: !0
    },
    title: {
      type: String,
      required: !0
    },
    onUserInputSubmit: {
      type: Function,
      required: !0
    },
    messageList: {
      type: Array,
      default: () => []
    },
    isOpen: {
      type: Boolean,
      default: () => !1
    },
    placeholder: {
      type: String,
      required: !0
    },
    showTypingIndicator: {
      type: String,
      required: !0
    },
    colors: {
      type: Object,
      required: !0
    },
    alwaysScrollToBottom: {
      type: Boolean,
      required: !0
    },
    messageStyling: {
      type: Boolean,
      required: !0
    },
    showConfirmationDeletion: {
      type: Boolean,
      required: !0
    },
    confirmationDeletionMessage: {
      type: String,
      required: !0
    },
    messageMargin: {
      type: Object,
      required: !1
    },
    acceptedFileTypes: {
      type: Array,
      required: !1,
      default: () => ["*/*"]
    }
  },
  data() {
    return {
      showUserList: !1
    };
  },
  computed: {
    messages() {
      return this.messageList;
    }
  },
  methods: {
    handleUserListToggle(D) {
      this.showUserList = D;
    },
    getSuggestions() {
      return this.messages.length > 0 ? this.messages[this.messages.length - 1].suggestions : [];
    }
  }
};
function u2(D, u, f, e, F, t) {
  const a = O("Header"), n = O("UserList"), r = O("MessageList"), o = O("UserInput");
  return b(), m("div", {
    class: DD(["sc-chat-window", { opened: f.isOpen, closed: !f.isOpen }])
  }, [
    f.showHeader ? (b(), V(a, {
      key: 0,
      title: f.title,
      colors: f.colors,
      onClose: u[0] || (u[0] = (d) => D.$emit("close")),
      onMinimize: u[1] || (u[1] = (d) => D.$emit("minimize")),
      onUserList: t.handleUserListToggle
    }, {
      default: x(() => [
        k(D.$slots, "header", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["title", "colors", "onUserList"])) : z("", !0),
    F.showUserList ? (b(), V(n, {
      key: 1,
      colors: f.colors,
      participants: f.participants
    }, null, 8, ["colors", "participants"])) : z("", !0),
    F.showUserList ? z("", !0) : (b(), V(r, {
      key: 2,
      messages: t.messages,
      participants: f.participants,
      "show-typing-indicator": f.showTypingIndicator,
      colors: f.colors,
      "always-scroll-to-bottom": f.alwaysScrollToBottom,
      "show-confirmation-deletion": f.showConfirmationDeletion,
      "confirmation-deletion-message": f.confirmationDeletionMessage,
      "message-styling": f.messageStyling,
      "message-margin": f.messageMargin,
      onScrollToTop: u[2] || (u[2] = (d) => D.$emit("scrollToTop")),
      onRemove: u[3] || (u[3] = (d) => D.$emit("remove", d))
    }, {
      "user-avatar": x((d) => [
        k(D.$slots, "user-avatar", {
          user: d.user,
          message: d.message
        }, void 0, !0)
      ]),
      "text-message-body": x((d) => [
        k(D.$slots, "text-message-body", {
          message: d.message,
          messageText: d.messageText,
          messageColors: d.messageColors,
          me: d.me
        }, void 0, !0)
      ]),
      "system-message-body": x((d) => [
        k(D.$slots, "system-message-body", {
          message: d.message
        }, void 0, !0)
      ]),
      "text-message-toolbox": x((d) => [
        k(D.$slots, "text-message-toolbox", {
          message: d.message,
          me: d.me
        }, void 0, !0)
      ]),
      "file-message-body": x((d) => [
        k(D.$slots, "file-message-body", {
          message: d.message,
          messageColors: d.messageColors
        }, void 0, !0)
      ]),
      "emoji-message-body": x((d) => [
        k(D.$slots, "emoji-message-body", {
          message: d.message
        }, void 0, !0)
      ]),
      _: 3
    }, 8, ["messages", "participants", "show-typing-indicator", "colors", "always-scroll-to-bottom", "show-confirmation-deletion", "confirmation-deletion-message", "message-styling", "message-margin"])),
    F.showUserList ? z("", !0) : (b(), V(o, {
      key: 3,
      "show-emoji": f.showEmoji,
      "show-emoji-in-text": f.showEmojiInText,
      "on-submit": f.onUserInputSubmit,
      suggestions: t.getSuggestions(),
      "show-file": f.showFile,
      placeholder: f.placeholder,
      colors: f.colors,
      "accepted-file-types": f.acceptedFileTypes,
      onOnType: u[4] || (u[4] = (d) => D.$emit("onType", d)),
      onEdit: u[5] || (u[5] = (d) => D.$emit("edit", d))
    }, null, 8, ["show-emoji", "show-emoji-in-text", "on-submit", "suggestions", "show-file", "placeholder", "colors", "accepted-file-types"]))
  ], 2);
}
const D2 = /* @__PURE__ */ M(Je, [["render", u2], ["__scopeId", "data-v-0a3a5922"]]), f2 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='18'%20height='18'%3e%3crect%20id='backgroundrect'%20width='100%25'%20height='100%25'%20x='0'%20y='0'%20fill='none'%20stroke='none'/%3e%3cdefs%3e%3cstyle%3e.a{fill:none;}.b{fill:%234e8cff;}.c{clip-path:url(%23a);}.d{fill:%23fff;}.e{fill:%23eff4f9;}%3c/style%3e%3cclipPath%20id='a'%3e%3cpath%20class='a'%20d='M%200%200%20H%2017.555%20v%2017.555%20H%200%20Z'%20id='svg_1'%20transform=''/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20class='currentLayer'%20style=''%3e%3ctitle%3eLayer%201%3c/title%3e%3cg%20id='svg_2'%20class='selected'%20transform=''%3e%3cg%20id='svg_3'%20transform=''%3e%3cg%20class='c'%20id='svg_4'%20transform=''%3e%3cg%20id='svg_5'%20transform=''%3e%3cpath%20class='d'%20d='M%2017.556%208.77842%20a%208.778%208.778%200%200%200%20-8.778%20-8.778%20a%208.778%208.778%200%200%200%20-8.778%208.778%20a%208.745%208.745%200%200%200%202.26%205.879%20v%201.442%20c%200%200.8%200.492%201.457%201.1%201.457%20h%205.83%20a%200.843%200.843%200%200%200%200.183%20-0.02%20a%208.778%208.778%200%200%200%208.184%20-8.757'%20id='svg_6'%20transform=''/%3e%3c/g%3e%3cg%20id='svg_7'%20transform=''%3e%3cpath%20class='e'%20d='M%203.16148%208.921%20a%209.292%209.292%200%200%201%206.38%20-8.888%20c%20-0.252%20-0.022%20-0.506%20-0.033%20-0.763%20-0.033%20a%208.774%208.774%200%200%200%20-8.778%208.778%20A%209.508%209.508%200%200%200%202.22447%2014.7003%20c%200.005%200%200%200.009%200%200.01%20c%20-0.311%200.352%20-1.924%202.849%200.021%202.849%20h%202.25%20c%20-1.23%20-0.022%201.263%20-2.107%200.269%20-3.494%20a%208.225%208.225%200%200%201%20-1.6%20-5.141'%20id='svg_8'%20transform=''/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", e2 = {
  components: {
    ChatWindow: D2
  },
  props: {
    icons: {
      type: Object,
      default: function() {
        return {
          open: {
            img: f2,
            name: "default"
          },
          close: {
            img: Kf,
            name: "default"
          },
          minimize: {
            img: null,
            name: "default"
          }
        };
      }
    },
    showEmoji: {
      type: Boolean,
      default: !1
    },
    autoFocus: {
      type: Boolean,
      default: !0
    },
    showEmojiInText: {
      type: Boolean,
      default: !1
    },
    showEdition: {
      type: Boolean,
      default: !1
    },
    showDeletion: {
      type: Boolean,
      default: !1
    },
    showConfirmationDeletion: {
      type: Boolean,
      default: !1
    },
    confirmationDeletionMessage: {
      type: String,
      default: "Do you really want to delete the message?"
    },
    isOpen: {
      type: Boolean,
      required: !0
    },
    open: {
      type: Function,
      required: !0
    },
    close: {
      type: Function,
      required: !0
    },
    minimize: {
      type: Function,
      required: !1
    },
    showFile: {
      type: Boolean,
      default: !1
    },
    showLauncher: {
      type: Boolean,
      default: !0
    },
    showCloseButton: {
      type: Boolean,
      default: !0
    },
    showMinimizeButton: {
      type: Boolean,
      required: !1,
      default: !1
    },
    showHeader: {
      type: Boolean,
      default: !0
    },
    participants: {
      type: Array,
      required: !0
    },
    title: {
      type: String,
      default: () => ""
    },
    titleImageUrl: {
      type: String,
      default: () => ""
    },
    onMessageWasSent: {
      type: Function,
      required: !0
    },
    messageList: {
      type: Array,
      default: () => []
    },
    newMessagesCount: {
      type: Number,
      default: () => 0
    },
    placeholder: {
      type: String,
      default: "Write a message..."
    },
    showTypingIndicator: {
      type: String,
      default: () => ""
    },
    messageMargin: {
      type: Object,
      required: !1
    },
    colors: {
      type: Object,
      validator: (D) => "header" in D && "bg" in D.header && "text" in D.header && "launcher" in D && "bg" in D.launcher && "messageList" in D && "bg" in D.messageList && "sentMessage" in D && "bg" in D.sentMessage && "text" in D.sentMessage && "receivedMessage" in D && "bg" in D.receivedMessage && "text" in D.receivedMessage && "userInput" in D && "bg" in D.userInput && "text" in D.userInput,
      default: function() {
        return {
          header: {
            bg: "#4e8cff",
            text: "#ffffff"
          },
          launcher: {
            bg: "#4e8cff"
          },
          messageList: {
            bg: "#ffffff"
          },
          sentMessage: {
            bg: "#4e8cff",
            text: "#ffffff"
          },
          receivedMessage: {
            bg: "#f4f7f9",
            text: "#ffffff"
          },
          userInput: {
            bg: "#f4f7f9",
            text: "#565867"
          }
        };
      }
    },
    alwaysScrollToBottom: {
      type: Boolean,
      default: () => !1
    },
    messageStyling: {
      type: Boolean,
      default: () => !1
    },
    disableUserListToggle: {
      type: Boolean,
      default: !1
    },
    acceptedFileTypes: {
      type: Array,
      default: () => ["*/*"]
    }
  },
  computed: {
    chatWindowTitle() {
      return this.title !== "" ? this.title : this.participants.length === 0 ? "You" : this.participants.length > 1 ? "You, " + this.participants[0].name + " & others" : "You & " + this.participants[0].name;
    }
  },
  watch: {
    $props: {
      deep: !0,
      immediate: !0,
      handler(D) {
        for (const u in D)
          Du.setState(u, D[u]);
      }
    }
  },
  methods: {
    openAndFocus() {
      this.open(), this.autoFocus && this.$event.$emit("focusUserInput");
    }
  }
}, t2 = {
  key: 0,
  class: "sc-new-messsages-count"
}, F2 = ["src", "alt"], n2 = ["src", "alt"];
function a2(D, u, f, e, F, t) {
  const a = O("ChatWindow");
  return b(), m("div", null, [
    f.showLauncher ? (b(), m("div", {
      key: 0,
      class: DD(["sc-launcher", { opened: f.isOpen }]),
      style: j({ backgroundColor: f.colors.launcher.bg }),
      onClick: u[0] || (u[0] = Gu((n) => f.isOpen ? f.close() : t.openAndFocus(), ["prevent"]))
    }, [
      f.newMessagesCount > 0 && !f.isOpen ? (b(), m("div", t2, Z(f.newMessagesCount), 1)) : z("", !0),
      f.isOpen ? (b(), m("img", {
        key: 1,
        class: "sc-closed-icon",
        src: f.icons.close.img,
        alt: f.icons.close.name
      }, null, 8, F2)) : (b(), m("img", {
        key: 2,
        class: "sc-open-icon",
        src: f.icons.open.img,
        alt: f.icons.open.name
      }, null, 8, n2))
    ], 6)) : z("", !0),
    L(a, {
      "message-list": f.messageList,
      "on-user-input-submit": f.onMessageWasSent,
      participants: f.participants,
      title: t.chatWindowTitle,
      "is-open": f.isOpen,
      "show-emoji": f.showEmoji,
      "show-emoji-in-text": f.showEmojiInText,
      "show-file": f.showFile,
      "show-confirmation-deletion": f.showConfirmationDeletion,
      "confirmation-deletion-message": f.confirmationDeletionMessage,
      "show-header": f.showHeader,
      placeholder: f.placeholder,
      "show-typing-indicator": f.showTypingIndicator,
      colors: f.colors,
      "always-scroll-to-bottom": f.alwaysScrollToBottom,
      "message-styling": f.messageStyling,
      "message-margin": f.messageMargin,
      "accepted-file-types": f.acceptedFileTypes,
      "show-minimize-button": f.showMinimizeButton,
      onClose: f.close,
      onMinimize: f.minimize,
      onScrollToTop: u[1] || (u[1] = (n) => D.$emit("scrollToTop")),
      onOnType: u[2] || (u[2] = (n) => D.$emit("onType", n)),
      onEdit: u[3] || (u[3] = (n) => D.$emit("edit", n)),
      onRemove: u[4] || (u[4] = (n) => D.$emit("remove", n))
    }, {
      header: x(() => [
        k(D.$slots, "header", {}, void 0, !0)
      ]),
      "user-avatar": x((n) => [
        k(D.$slots, "user-avatar", {
          user: n.user,
          message: n.message
        }, void 0, !0)
      ]),
      "text-message-body": x((n) => [
        k(D.$slots, "text-message-body", {
          message: n.message,
          messageText: n.messageText,
          messageColors: n.messageColors,
          me: n.me
        }, void 0, !0)
      ]),
      "system-message-body": x((n) => [
        k(D.$slots, "system-message-body", {
          message: n.message
        }, void 0, !0)
      ]),
      "text-message-toolbox": x((n) => [
        k(D.$slots, "text-message-toolbox", {
          message: n.message,
          me: n.me
        }, void 0, !0)
      ]),
      "file-message-body": x((n) => [
        k(D.$slots, "file-message-body", {
          message: n.message,
          messageColors: n.messageColors
        }, void 0, !0)
      ]),
      "emoji-message-body": x((n) => [
        k(D.$slots, "emoji-message-body", {
          message: n.message
        }, void 0, !0)
      ]),
      _: 3
    }, 8, ["message-list", "on-user-input-submit", "participants", "title", "is-open", "show-emoji", "show-emoji-in-text", "show-file", "show-confirmation-deletion", "confirmation-deletion-message", "show-header", "placeholder", "show-typing-indicator", "colors", "always-scroll-to-bottom", "message-styling", "message-margin", "accepted-file-types", "show-minimize-button", "onClose", "onMinimize"])
  ]);
}
const d2 = /* @__PURE__ */ M(e2, [["render", a2], ["__scopeId", "data-v-a7db8f74"]]);
var eu = "top", su = "bottom", ou = "right", tu = "left", AD = "auto", tD = [eu, su, ou, tu], Lu = "start", Df = "end", r2 = "clippingParents", Zf = "viewport", Wu = "popper", i2 = "reference", pf = /* @__PURE__ */ tD.reduce(function(D, u) {
  return D.concat([u + "-" + Lu, u + "-" + Df]);
}, []), yD = /* @__PURE__ */ [].concat(tD, [AD]).reduce(function(D, u) {
  return D.concat([u, u + "-" + Lu, u + "-" + Df]);
}, []), s2 = "beforeRead", o2 = "read", C2 = "afterRead", c2 = "beforeMain", E2 = "main", l2 = "afterMain", B2 = "beforeWrite", b2 = "write", p2 = "afterWrite", UD = [s2, o2, C2, c2, E2, l2, B2, b2, p2];
function pu(D) {
  return D ? (D.nodeName || "").toLowerCase() : null;
}
function cu(D) {
  if (D == null)
    return window;
  if (D.toString() !== "[object Window]") {
    var u = D.ownerDocument;
    return u && u.defaultView || window;
  }
  return D;
}
function Zu(D) {
  var u = cu(D).Element;
  return D instanceof u || D instanceof Element;
}
function Fu(D) {
  var u = cu(D).HTMLElement;
  return D instanceof u || D instanceof HTMLElement;
}
function Qf(D) {
  if (typeof ShadowRoot > "u")
    return !1;
  var u = cu(D).ShadowRoot;
  return D instanceof u || D instanceof ShadowRoot;
}
function g2(D) {
  var u = D.state;
  Object.keys(u.elements).forEach(function(f) {
    var e = u.styles[f] || {}, F = u.attributes[f] || {}, t = u.elements[f];
    !Fu(t) || !pu(t) || (Object.assign(t.style, e), Object.keys(F).forEach(function(a) {
      var n = F[a];
      n === !1 ? t.removeAttribute(a) : t.setAttribute(a, n === !0 ? "" : n);
    }));
  });
}
function m2(D) {
  var u = D.state, f = {
    popper: {
      position: u.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(u.elements.popper.style, f.popper), u.styles = f, u.elements.arrow && Object.assign(u.elements.arrow.style, f.arrow), function() {
    Object.keys(u.elements).forEach(function(e) {
      var F = u.elements[e], t = u.attributes[e] || {}, a = Object.keys(u.styles.hasOwnProperty(e) ? u.styles[e] : f[e]), n = a.reduce(function(r, o) {
        return r[o] = "", r;
      }, {});
      !Fu(F) || !pu(F) || (Object.assign(F.style, n), Object.keys(t).forEach(function(r) {
        F.removeAttribute(r);
      }));
    });
  };
}
const h2 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: g2,
  effect: m2,
  requires: ["computeStyles"]
};
function ru(D) {
  return D.split("-")[0];
}
function Ru(D) {
  var u = D.getBoundingClientRect();
  return {
    width: u.width,
    height: u.height,
    top: u.top,
    right: u.right,
    bottom: u.bottom,
    left: u.left,
    x: u.left,
    y: u.top
  };
}
function ff(D) {
  var u = Ru(D), f = D.offsetWidth, e = D.offsetHeight;
  return Math.abs(u.width - f) <= 1 && (f = u.width), Math.abs(u.height - e) <= 1 && (e = u.height), {
    x: D.offsetLeft,
    y: D.offsetTop,
    width: f,
    height: e
  };
}
function Jf(D, u) {
  var f = u.getRootNode && u.getRootNode();
  if (D.contains(u))
    return !0;
  if (f && Qf(f)) {
    var e = u;
    do {
      if (e && D.isSameNode(e))
        return !0;
      e = e.parentNode || e.host;
    } while (e);
  }
  return !1;
}
function Cu(D) {
  return cu(D).getComputedStyle(D);
}
function _2(D) {
  return ["table", "td", "th"].indexOf(pu(D)) >= 0;
}
function Au(D) {
  return ((Zu(D) ? D.ownerDocument : (
    // $FlowFixMe[prop-missing]
    D.document
  )) || window.document).documentElement;
}
function wD(D) {
  return pu(D) === "html" ? D : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    D.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    D.parentNode || // DOM Element detected
    (Qf(D) ? D.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Au(D)
  );
}
function gf(D) {
  return !Fu(D) || // https://github.com/popperjs/popper-core/issues/837
  Cu(D).position === "fixed" ? null : D.offsetParent;
}
function v2(D) {
  var u = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, f = navigator.userAgent.indexOf("Trident") !== -1;
  if (f && Fu(D)) {
    var e = Cu(D);
    if (e.position === "fixed")
      return null;
  }
  for (var F = wD(D); Fu(F) && ["html", "body"].indexOf(pu(F)) < 0; ) {
    var t = Cu(F);
    if (t.transform !== "none" || t.perspective !== "none" || t.contain === "paint" || ["transform", "perspective"].indexOf(t.willChange) !== -1 || u && t.willChange === "filter" || u && t.filter && t.filter !== "none")
      return F;
    F = F.parentNode;
  }
  return null;
}
function FD(D) {
  for (var u = cu(D), f = gf(D); f && _2(f) && Cu(f).position === "static"; )
    f = gf(f);
  return f && (pu(f) === "html" || pu(f) === "body" && Cu(f).position === "static") ? u : f || v2(D) || u;
}
function ef(D) {
  return ["top", "bottom"].indexOf(D) >= 0 ? "x" : "y";
}
var vu = Math.max, Qu = Math.min, lD = Math.round;
function mD(D, u, f) {
  return vu(D, Qu(u, f));
}
function u1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function D1(D) {
  return Object.assign({}, u1(), D);
}
function f1(D, u) {
  return u.reduce(function(f, e) {
    return f[e] = D, f;
  }, {});
}
var A2 = function(u, f) {
  return u = typeof u == "function" ? u(Object.assign({}, f.rects, {
    placement: f.placement
  })) : u, D1(typeof u != "number" ? u : f1(u, tD));
};
function y2(D) {
  var u, f = D.state, e = D.name, F = D.options, t = f.elements.arrow, a = f.modifiersData.popperOffsets, n = ru(f.placement), r = ef(n), o = [tu, ou].indexOf(n) >= 0, d = o ? "height" : "width";
  if (!(!t || !a)) {
    var c = A2(F.padding, f), s = ff(t), B = r === "y" ? eu : tu, E = r === "y" ? su : ou, y = f.rects.reference[d] + f.rects.reference[r] - a[r] - f.rects.popper[d], _ = a[r] - f.rects.reference[r], w = FD(t), v = w ? r === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, A = y / 2 - _ / 2, g = c[B], h = v - s[d] - c[E], S = v / 2 - s[d] / 2 + A, T = mD(g, S, h), $ = r;
    f.modifiersData[e] = (u = {}, u[$] = T, u.centerOffset = T - S, u);
  }
}
function w2(D) {
  var u = D.state, f = D.options, e = f.element, F = e === void 0 ? "[data-popper-arrow]" : e;
  if (F != null && !(typeof F == "string" && (F = u.elements.popper.querySelector(F), !F))) {
    if (process.env.NODE_ENV !== "production" && (Fu(F) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Jf(u.elements.popper, F)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    u.elements.arrow = F;
  }
}
const k2 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: y2,
  effect: w2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
var x2 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function S2(D) {
  var u = D.x, f = D.y, e = window, F = e.devicePixelRatio || 1;
  return {
    x: lD(lD(u * F) / F) || 0,
    y: lD(lD(f * F) / F) || 0
  };
}
function mf(D) {
  var u, f = D.popper, e = D.popperRect, F = D.placement, t = D.offsets, a = D.position, n = D.gpuAcceleration, r = D.adaptive, o = D.roundOffsets, d = o === !0 ? S2(t) : typeof o == "function" ? o(t) : t, c = d.x, s = c === void 0 ? 0 : c, B = d.y, E = B === void 0 ? 0 : B, y = t.hasOwnProperty("x"), _ = t.hasOwnProperty("y"), w = tu, v = eu, A = window;
  if (r) {
    var g = FD(f), h = "clientHeight", S = "clientWidth";
    g === cu(f) && (g = Au(f), Cu(g).position !== "static" && (h = "scrollHeight", S = "scrollWidth")), g = g, F === eu && (v = su, E -= g[h] - e.height, E *= n ? 1 : -1), F === tu && (w = ou, s -= g[S] - e.width, s *= n ? 1 : -1);
  }
  var T = Object.assign({
    position: a
  }, r && x2);
  if (n) {
    var $;
    return Object.assign({}, T, ($ = {}, $[v] = _ ? "0" : "", $[w] = y ? "0" : "", $.transform = (A.devicePixelRatio || 1) < 2 ? "translate(" + s + "px, " + E + "px)" : "translate3d(" + s + "px, " + E + "px, 0)", $));
  }
  return Object.assign({}, T, (u = {}, u[v] = _ ? E + "px" : "", u[w] = y ? s + "px" : "", u.transform = "", u));
}
function T2(D) {
  var u = D.state, f = D.options, e = f.gpuAcceleration, F = e === void 0 ? !0 : e, t = f.adaptive, a = t === void 0 ? !0 : t, n = f.roundOffsets, r = n === void 0 ? !0 : n;
  if (process.env.NODE_ENV !== "production") {
    var o = Cu(u.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(c) {
      return o.indexOf(c) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: ru(u.placement),
    popper: u.elements.popper,
    popperRect: u.rects.popper,
    gpuAcceleration: F
  };
  u.modifiersData.popperOffsets != null && (u.styles.popper = Object.assign({}, u.styles.popper, mf(Object.assign({}, d, {
    offsets: u.modifiersData.popperOffsets,
    position: u.options.strategy,
    adaptive: a,
    roundOffsets: r
  })))), u.modifiersData.arrow != null && (u.styles.arrow = Object.assign({}, u.styles.arrow, mf(Object.assign({}, d, {
    offsets: u.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: r
  })))), u.attributes.popper = Object.assign({}, u.attributes.popper, {
    "data-popper-placement": u.placement
  });
}
const $2 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: T2,
  data: {}
};
var BD = {
  passive: !0
};
function O2(D) {
  var u = D.state, f = D.instance, e = D.options, F = e.scroll, t = F === void 0 ? !0 : F, a = e.resize, n = a === void 0 ? !0 : a, r = cu(u.elements.popper), o = [].concat(u.scrollParents.reference, u.scrollParents.popper);
  return t && o.forEach(function(d) {
    d.addEventListener("scroll", f.update, BD);
  }), n && r.addEventListener("resize", f.update, BD), function() {
    t && o.forEach(function(d) {
      d.removeEventListener("scroll", f.update, BD);
    }), n && r.removeEventListener("resize", f.update, BD);
  };
}
const j2 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: O2,
  data: {}
};
var P2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function hD(D) {
  return D.replace(/left|right|bottom|top/g, function(u) {
    return P2[u];
  });
}
var I2 = {
  start: "end",
  end: "start"
};
function hf(D) {
  return D.replace(/start|end/g, function(u) {
    return I2[u];
  });
}
function tf(D) {
  var u = cu(D), f = u.pageXOffset, e = u.pageYOffset;
  return {
    scrollLeft: f,
    scrollTop: e
  };
}
function Ff(D) {
  return Ru(Au(D)).left + tf(D).scrollLeft;
}
function z2(D) {
  var u = cu(D), f = Au(D), e = u.visualViewport, F = f.clientWidth, t = f.clientHeight, a = 0, n = 0;
  return e && (F = e.width, t = e.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = e.offsetLeft, n = e.offsetTop)), {
    width: F,
    height: t,
    x: a + Ff(D),
    y: n
  };
}
function N2(D) {
  var u, f = Au(D), e = tf(D), F = (u = D.ownerDocument) == null ? void 0 : u.body, t = vu(f.scrollWidth, f.clientWidth, F ? F.scrollWidth : 0, F ? F.clientWidth : 0), a = vu(f.scrollHeight, f.clientHeight, F ? F.scrollHeight : 0, F ? F.clientHeight : 0), n = -e.scrollLeft + Ff(D), r = -e.scrollTop;
  return Cu(F || f).direction === "rtl" && (n += vu(f.clientWidth, F ? F.clientWidth : 0) - t), {
    width: t,
    height: a,
    x: n,
    y: r
  };
}
function nf(D) {
  var u = Cu(D), f = u.overflow, e = u.overflowX, F = u.overflowY;
  return /auto|scroll|overlay|hidden/.test(f + F + e);
}
function e1(D) {
  return ["html", "body", "#document"].indexOf(pu(D)) >= 0 ? D.ownerDocument.body : Fu(D) && nf(D) ? D : e1(wD(D));
}
function Yu(D, u) {
  var f;
  u === void 0 && (u = []);
  var e = e1(D), F = e === ((f = D.ownerDocument) == null ? void 0 : f.body), t = cu(e), a = F ? [t].concat(t.visualViewport || [], nf(e) ? e : []) : e, n = u.concat(a);
  return F ? n : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    n.concat(Yu(wD(a)))
  );
}
function VD(D) {
  return Object.assign({}, D, {
    left: D.x,
    top: D.y,
    right: D.x + D.width,
    bottom: D.y + D.height
  });
}
function q2(D) {
  var u = Ru(D);
  return u.top = u.top + D.clientTop, u.left = u.left + D.clientLeft, u.bottom = u.top + D.clientHeight, u.right = u.left + D.clientWidth, u.width = D.clientWidth, u.height = D.clientHeight, u.x = u.left, u.y = u.top, u;
}
function _f(D, u) {
  return u === Zf ? VD(z2(D)) : Fu(u) ? q2(u) : VD(N2(Au(D)));
}
function L2(D) {
  var u = Yu(wD(D)), f = ["absolute", "fixed"].indexOf(Cu(D).position) >= 0, e = f && Fu(D) ? FD(D) : D;
  return Zu(e) ? u.filter(function(F) {
    return Zu(F) && Jf(F, e) && pu(F) !== "body";
  }) : [];
}
function R2(D, u, f) {
  var e = u === "clippingParents" ? L2(D) : [].concat(u), F = [].concat(e, [f]), t = F[0], a = F.reduce(function(n, r) {
    var o = _f(D, r);
    return n.top = vu(o.top, n.top), n.right = Qu(o.right, n.right), n.bottom = Qu(o.bottom, n.bottom), n.left = vu(o.left, n.left), n;
  }, _f(D, t));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Ju(D) {
  return D.split("-")[1];
}
function t1(D) {
  var u = D.reference, f = D.element, e = D.placement, F = e ? ru(e) : null, t = e ? Ju(e) : null, a = u.x + u.width / 2 - f.width / 2, n = u.y + u.height / 2 - f.height / 2, r;
  switch (F) {
    case eu:
      r = {
        x: a,
        y: u.y - f.height
      };
      break;
    case su:
      r = {
        x: a,
        y: u.y + u.height
      };
      break;
    case ou:
      r = {
        x: u.x + u.width,
        y: n
      };
      break;
    case tu:
      r = {
        x: u.x - f.width,
        y: n
      };
      break;
    default:
      r = {
        x: u.x,
        y: u.y
      };
  }
  var o = F ? ef(F) : null;
  if (o != null) {
    var d = o === "y" ? "height" : "width";
    switch (t) {
      case Lu:
        r[o] = r[o] - (u[d] / 2 - f[d] / 2);
        break;
      case Df:
        r[o] = r[o] + (u[d] / 2 - f[d] / 2);
        break;
    }
  }
  return r;
}
function uD(D, u) {
  u === void 0 && (u = {});
  var f = u, e = f.placement, F = e === void 0 ? D.placement : e, t = f.boundary, a = t === void 0 ? r2 : t, n = f.rootBoundary, r = n === void 0 ? Zf : n, o = f.elementContext, d = o === void 0 ? Wu : o, c = f.altBoundary, s = c === void 0 ? !1 : c, B = f.padding, E = B === void 0 ? 0 : B, y = D1(typeof E != "number" ? E : f1(E, tD)), _ = d === Wu ? i2 : Wu, w = D.elements.reference, v = D.rects.popper, A = D.elements[s ? _ : d], g = R2(Zu(A) ? A : A.contextElement || Au(D.elements.popper), a, r), h = Ru(w), S = t1({
    reference: h,
    element: v,
    strategy: "absolute",
    placement: F
  }), T = VD(Object.assign({}, v, S)), $ = d === Wu ? T : h, H = {
    top: g.top - $.top + y.top,
    bottom: $.bottom - g.bottom + y.bottom,
    left: g.left - $.left + y.left,
    right: $.right - g.right + y.right
  }, N = D.modifiersData.offset;
  if (d === Wu && N) {
    var U = N[F];
    Object.keys(H).forEach(function(uu) {
      var G = [ou, su].indexOf(uu) >= 0 ? 1 : -1, nu = [eu, su].indexOf(uu) >= 0 ? "y" : "x";
      H[uu] += U[nu] * G;
    });
  }
  return H;
}
function M2(D, u) {
  u === void 0 && (u = {});
  var f = u, e = f.placement, F = f.boundary, t = f.rootBoundary, a = f.padding, n = f.flipVariations, r = f.allowedAutoPlacements, o = r === void 0 ? yD : r, d = Ju(e), c = d ? n ? pf : pf.filter(function(E) {
    return Ju(E) === d;
  }) : tD, s = c.filter(function(E) {
    return o.indexOf(E) >= 0;
  });
  s.length === 0 && (s = c, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var B = s.reduce(function(E, y) {
    return E[y] = uD(D, {
      placement: y,
      boundary: F,
      rootBoundary: t,
      padding: a
    })[ru(y)], E;
  }, {});
  return Object.keys(B).sort(function(E, y) {
    return B[E] - B[y];
  });
}
function H2(D) {
  if (ru(D) === AD)
    return [];
  var u = hD(D);
  return [hf(D), u, hf(u)];
}
function U2(D) {
  var u = D.state, f = D.options, e = D.name;
  if (!u.modifiersData[e]._skip) {
    for (var F = f.mainAxis, t = F === void 0 ? !0 : F, a = f.altAxis, n = a === void 0 ? !0 : a, r = f.fallbackPlacements, o = f.padding, d = f.boundary, c = f.rootBoundary, s = f.altBoundary, B = f.flipVariations, E = B === void 0 ? !0 : B, y = f.allowedAutoPlacements, _ = u.options.placement, w = ru(_), v = w === _, A = r || (v || !E ? [hD(_)] : H2(_)), g = [_].concat(A).reduce(function(K, l) {
      return K.concat(ru(l) === AD ? M2(u, {
        placement: l,
        boundary: d,
        rootBoundary: c,
        padding: o,
        flipVariations: E,
        allowedAutoPlacements: y
      }) : l);
    }, []), h = u.rects.reference, S = u.rects.popper, T = /* @__PURE__ */ new Map(), $ = !0, H = g[0], N = 0; N < g.length; N++) {
      var U = g[N], uu = ru(U), G = Ju(U) === Lu, nu = [eu, su].indexOf(uu) >= 0, gu = nu ? "width" : "height", Eu = uD(u, {
        placement: U,
        boundary: d,
        rootBoundary: c,
        altBoundary: s,
        padding: o
      }), au = nu ? G ? ou : tu : G ? su : eu;
      h[gu] > S[gu] && (au = hD(au));
      var yu = hD(au), W = [];
      if (t && W.push(Eu[uu] <= 0), n && W.push(Eu[au] <= 0, Eu[yu] <= 0), W.every(function(K) {
        return K;
      })) {
        H = U, $ = !1;
        break;
      }
      T.set(U, W);
    }
    if ($)
      for (var X = E ? 3 : 1, Q = function(l) {
        var $u = g.find(function(Mu) {
          var mu = T.get(Mu);
          if (mu)
            return mu.slice(0, l).every(function(Hu) {
              return Hu;
            });
        });
        if ($u)
          return H = $u, "break";
      }, lu = X; lu > 0; lu--) {
        var Bu = Q(lu);
        if (Bu === "break") break;
      }
    u.placement !== H && (u.modifiersData[e]._skip = !0, u.placement = H, u.reset = !0);
  }
}
const V2 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: U2,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function vf(D, u, f) {
  return f === void 0 && (f = {
    x: 0,
    y: 0
  }), {
    top: D.top - u.height - f.y,
    right: D.right - u.width + f.x,
    bottom: D.bottom - u.height + f.y,
    left: D.left - u.width - f.x
  };
}
function Af(D) {
  return [eu, ou, su, tu].some(function(u) {
    return D[u] >= 0;
  });
}
function W2(D) {
  var u = D.state, f = D.name, e = u.rects.reference, F = u.rects.popper, t = u.modifiersData.preventOverflow, a = uD(u, {
    elementContext: "reference"
  }), n = uD(u, {
    altBoundary: !0
  }), r = vf(a, e), o = vf(n, F, t), d = Af(r), c = Af(o);
  u.modifiersData[f] = {
    referenceClippingOffsets: r,
    popperEscapeOffsets: o,
    isReferenceHidden: d,
    hasPopperEscaped: c
  }, u.attributes.popper = Object.assign({}, u.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": c
  });
}
const G2 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: W2
};
function Y2(D, u, f) {
  var e = ru(D), F = [tu, eu].indexOf(e) >= 0 ? -1 : 1, t = typeof f == "function" ? f(Object.assign({}, u, {
    placement: D
  })) : f, a = t[0], n = t[1];
  return a = a || 0, n = (n || 0) * F, [tu, ou].indexOf(e) >= 0 ? {
    x: n,
    y: a
  } : {
    x: a,
    y: n
  };
}
function X2(D) {
  var u = D.state, f = D.options, e = D.name, F = f.offset, t = F === void 0 ? [0, 0] : F, a = yD.reduce(function(d, c) {
    return d[c] = Y2(c, u.rects, t), d;
  }, {}), n = a[u.placement], r = n.x, o = n.y;
  u.modifiersData.popperOffsets != null && (u.modifiersData.popperOffsets.x += r, u.modifiersData.popperOffsets.y += o), u.modifiersData[e] = a;
}
const K2 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: X2
};
function Z2(D) {
  var u = D.state, f = D.name;
  u.modifiersData[f] = t1({
    reference: u.rects.reference,
    element: u.rects.popper,
    strategy: "absolute",
    placement: u.placement
  });
}
const Q2 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Z2,
  data: {}
};
function J2(D) {
  return D === "x" ? "y" : "x";
}
function u8(D) {
  var u = D.state, f = D.options, e = D.name, F = f.mainAxis, t = F === void 0 ? !0 : F, a = f.altAxis, n = a === void 0 ? !1 : a, r = f.boundary, o = f.rootBoundary, d = f.altBoundary, c = f.padding, s = f.tether, B = s === void 0 ? !0 : s, E = f.tetherOffset, y = E === void 0 ? 0 : E, _ = uD(u, {
    boundary: r,
    rootBoundary: o,
    padding: c,
    altBoundary: d
  }), w = ru(u.placement), v = Ju(u.placement), A = !v, g = ef(w), h = J2(g), S = u.modifiersData.popperOffsets, T = u.rects.reference, $ = u.rects.popper, H = typeof y == "function" ? y(Object.assign({}, u.rects, {
    placement: u.placement
  })) : y, N = {
    x: 0,
    y: 0
  };
  if (S) {
    if (t || n) {
      var U = g === "y" ? eu : tu, uu = g === "y" ? su : ou, G = g === "y" ? "height" : "width", nu = S[g], gu = S[g] + _[U], Eu = S[g] - _[uu], au = B ? -$[G] / 2 : 0, yu = v === Lu ? T[G] : $[G], W = v === Lu ? -$[G] : -T[G], X = u.elements.arrow, Q = B && X ? ff(X) : {
        width: 0,
        height: 0
      }, lu = u.modifiersData["arrow#persistent"] ? u.modifiersData["arrow#persistent"].padding : u1(), Bu = lu[U], K = lu[uu], l = mD(0, T[G], Q[G]), $u = A ? T[G] / 2 - au - l - Bu - H : yu - l - Bu - H, Mu = A ? -T[G] / 2 + au + l + K + H : W + l + K + H, mu = u.elements.arrow && FD(u.elements.arrow), Hu = mu ? g === "y" ? mu.clientTop || 0 : mu.clientLeft || 0 : 0, aD = u.modifiersData.offset ? u.modifiersData.offset[u.placement][g] : 0, dD = S[g] + $u - aD - Hu, rD = S[g] + Mu - aD;
      if (t) {
        var iD = mD(B ? Qu(gu, dD) : gu, nu, B ? vu(Eu, rD) : Eu);
        S[g] = iD, N[g] = iD - nu;
      }
      if (n) {
        var SD = g === "x" ? eu : tu, TD = g === "x" ? su : ou, Ou = S[h], sD = Ou + _[SD], oD = Ou - _[TD], CD = mD(B ? Qu(sD, dD) : sD, Ou, B ? vu(oD, rD) : oD);
        S[h] = CD, N[h] = CD - Ou;
      }
    }
    u.modifiersData[e] = N;
  }
}
const D8 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: u8,
  requiresIfExists: ["offset"]
};
function f8(D) {
  return {
    scrollLeft: D.scrollLeft,
    scrollTop: D.scrollTop
  };
}
function e8(D) {
  return D === cu(D) || !Fu(D) ? tf(D) : f8(D);
}
function t8(D, u, f) {
  f === void 0 && (f = !1);
  var e = Au(u), F = Ru(D), t = Fu(u), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, n = {
    x: 0,
    y: 0
  };
  return (t || !t && !f) && ((pu(u) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  nf(e)) && (a = e8(u)), Fu(u) ? (n = Ru(u), n.x += u.clientLeft, n.y += u.clientTop) : e && (n.x = Ff(e))), {
    x: F.left + a.scrollLeft - n.x,
    y: F.top + a.scrollTop - n.y,
    width: F.width,
    height: F.height
  };
}
function F8(D) {
  var u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Set(), e = [];
  D.forEach(function(t) {
    u.set(t.name, t);
  });
  function F(t) {
    f.add(t.name);
    var a = [].concat(t.requires || [], t.requiresIfExists || []);
    a.forEach(function(n) {
      if (!f.has(n)) {
        var r = u.get(n);
        r && F(r);
      }
    }), e.push(t);
  }
  return D.forEach(function(t) {
    f.has(t.name) || F(t);
  }), e;
}
function n8(D) {
  var u = F8(D);
  return UD.reduce(function(f, e) {
    return f.concat(u.filter(function(F) {
      return F.phase === e;
    }));
  }, []);
}
function a8(D) {
  var u;
  return function() {
    return u || (u = new Promise(function(f) {
      Promise.resolve().then(function() {
        u = void 0, f(D());
      });
    })), u;
  };
}
function hu(D) {
  for (var u = arguments.length, f = new Array(u > 1 ? u - 1 : 0), e = 1; e < u; e++)
    f[e - 1] = arguments[e];
  return [].concat(f).reduce(function(F, t) {
    return F.replace(/%s/, t);
  }, D);
}
var ku = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', d8 = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', r8 = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function i8(D) {
  D.forEach(function(u) {
    Object.keys(u).forEach(function(f) {
      switch (f) {
        case "name":
          typeof u.name != "string" && console.error(hu(ku, String(u.name), '"name"', '"string"', '"' + String(u.name) + '"'));
          break;
        case "enabled":
          typeof u.enabled != "boolean" && console.error(hu(ku, u.name, '"enabled"', '"boolean"', '"' + String(u.enabled) + '"'));
        case "phase":
          UD.indexOf(u.phase) < 0 && console.error(hu(ku, u.name, '"phase"', "either " + UD.join(", "), '"' + String(u.phase) + '"'));
          break;
        case "fn":
          typeof u.fn != "function" && console.error(hu(ku, u.name, '"fn"', '"function"', '"' + String(u.fn) + '"'));
          break;
        case "effect":
          typeof u.effect != "function" && console.error(hu(ku, u.name, '"effect"', '"function"', '"' + String(u.fn) + '"'));
          break;
        case "requires":
          Array.isArray(u.requires) || console.error(hu(ku, u.name, '"requires"', '"array"', '"' + String(u.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(u.requiresIfExists) || console.error(hu(ku, u.name, '"requiresIfExists"', '"array"', '"' + String(u.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + u.name + '" modifier, valid properties are ' + r8.map(function(e) {
            return '"' + e + '"';
          }).join(", ") + '; but "' + f + '" was provided.');
      }
      u.requires && u.requires.forEach(function(e) {
        D.find(function(F) {
          return F.name === e;
        }) == null && console.error(hu(d8, String(u.name), e, e));
      });
    });
  });
}
function s8(D, u) {
  var f = /* @__PURE__ */ new Set();
  return D.filter(function(e) {
    var F = u(e);
    if (!f.has(F))
      return f.add(F), !0;
  });
}
function o8(D) {
  var u = D.reduce(function(f, e) {
    var F = f[e.name];
    return f[e.name] = F ? Object.assign({}, F, e, {
      options: Object.assign({}, F.options, e.options),
      data: Object.assign({}, F.data, e.data)
    }) : e, f;
  }, {});
  return Object.keys(u).map(function(f) {
    return u[f];
  });
}
var yf = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", C8 = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", wf = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function kf() {
  for (var D = arguments.length, u = new Array(D), f = 0; f < D; f++)
    u[f] = arguments[f];
  return !u.some(function(e) {
    return !(e && typeof e.getBoundingClientRect == "function");
  });
}
function c8(D) {
  D === void 0 && (D = {});
  var u = D, f = u.defaultModifiers, e = f === void 0 ? [] : f, F = u.defaultOptions, t = F === void 0 ? wf : F;
  return function(n, r, o) {
    o === void 0 && (o = t);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, wf, t),
      modifiersData: {},
      elements: {
        reference: n,
        popper: r
      },
      attributes: {},
      styles: {}
    }, c = [], s = !1, B = {
      state: d,
      setOptions: function(w) {
        y(), d.options = Object.assign({}, t, d.options, w), d.scrollParents = {
          reference: Zu(n) ? Yu(n) : n.contextElement ? Yu(n.contextElement) : [],
          popper: Yu(r)
        };
        var v = n8(o8([].concat(e, d.options.modifiers)));
        if (d.orderedModifiers = v.filter(function(N) {
          return N.enabled;
        }), process.env.NODE_ENV !== "production") {
          var A = s8([].concat(v, d.options.modifiers), function(N) {
            var U = N.name;
            return U;
          });
          if (i8(A), ru(d.options.placement) === AD) {
            var g = d.orderedModifiers.find(function(N) {
              var U = N.name;
              return U === "flip";
            });
            g || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var h = Cu(r), S = h.marginTop, T = h.marginRight, $ = h.marginBottom, H = h.marginLeft;
          [S, T, $, H].some(function(N) {
            return parseFloat(N);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return E(), B.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!s) {
          var w = d.elements, v = w.reference, A = w.popper;
          if (!kf(v, A)) {
            process.env.NODE_ENV !== "production" && console.error(yf);
            return;
          }
          d.rects = {
            reference: t8(v, FD(A), d.options.strategy === "fixed"),
            popper: ff(A)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(U) {
            return d.modifiersData[U.name] = Object.assign({}, U.data);
          });
          for (var g = 0, h = 0; h < d.orderedModifiers.length; h++) {
            if (process.env.NODE_ENV !== "production" && (g += 1, g > 100)) {
              console.error(C8);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, h = -1;
              continue;
            }
            var S = d.orderedModifiers[h], T = S.fn, $ = S.options, H = $ === void 0 ? {} : $, N = S.name;
            typeof T == "function" && (d = T({
              state: d,
              options: H,
              name: N,
              instance: B
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: a8(function() {
        return new Promise(function(_) {
          B.forceUpdate(), _(d);
        });
      }),
      destroy: function() {
        y(), s = !0;
      }
    };
    if (!kf(n, r))
      return process.env.NODE_ENV !== "production" && console.error(yf), B;
    B.setOptions(o).then(function(_) {
      !s && o.onFirstUpdate && o.onFirstUpdate(_);
    });
    function E() {
      d.orderedModifiers.forEach(function(_) {
        var w = _.name, v = _.options, A = v === void 0 ? {} : v, g = _.effect;
        if (typeof g == "function") {
          var h = g({
            state: d,
            name: w,
            instance: B,
            options: A
          }), S = function() {
          };
          c.push(h || S);
        }
      });
    }
    function y() {
      c.forEach(function(_) {
        return _();
      }), c = [];
    }
    return B;
  };
}
var E8 = [j2, Q2, $2, h2, K2, V2, D8, k2, G2], l8 = /* @__PURE__ */ c8({
  defaultModifiers: E8
});
function B8() {
  var D = window.navigator.userAgent, u = D.indexOf("MSIE ");
  if (u > 0)
    return parseInt(D.substring(u + 5, D.indexOf(".", u)), 10);
  var f = D.indexOf("Trident/");
  if (f > 0) {
    var e = D.indexOf("rv:");
    return parseInt(D.substring(e + 3, D.indexOf(".", e)), 10);
  }
  var F = D.indexOf("Edge/");
  return F > 0 ? parseInt(D.substring(F + 5, D.indexOf(".", F)), 10) : -1;
}
let _D;
function WD() {
  WD.init || (WD.init = !0, _D = B8() !== -1);
}
var kD = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    WD(), T1(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const D = document.createElement("object");
    this._resizeObject = D, D.setAttribute("aria-hidden", "true"), D.setAttribute("tabindex", -1), D.onload = this.addResizeHandlers, D.type = "text/html", _D && this.$el.appendChild(D), D.data = "about:blank", _D || this.$el.appendChild(D);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!_D && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const b8 = /* @__PURE__ */ $1("data-v-b329ee4c");
x1("data-v-b329ee4c");
const p8 = {
  class: "resize-observer",
  tabindex: "-1"
};
S1();
const g8 = /* @__PURE__ */ b8((D, u, f, e, F, t) => (b(), V("div", p8)));
kD.render = g8;
kD.__scopeId = "data-v-b329ee4c";
kD.__file = "src/components/ResizeObserver.vue";
function Xu(D) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xu = function(u) {
    return typeof u;
  } : Xu = function(u) {
    return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
  }, Xu(D);
}
function xf(D, u, f, e, F, t, a) {
  try {
    var n = D[t](a), r = n.value;
  } catch (o) {
    f(o);
    return;
  }
  n.done ? u(r) : Promise.resolve(r).then(e, F);
}
function xu(D) {
  return function() {
    var u = this, f = arguments;
    return new Promise(function(e, F) {
      var t = D.apply(u, f);
      function a(r) {
        xf(t, e, F, a, n, "next", r);
      }
      function n(r) {
        xf(t, e, F, a, n, "throw", r);
      }
      a(void 0);
    });
  };
}
function m8(D, u, f) {
  return u in D ? Object.defineProperty(D, u, {
    value: f,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : D[u] = f, D;
}
function Sf(D, u) {
  var f = Object.keys(D);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(D);
    u && (e = e.filter(function(F) {
      return Object.getOwnPropertyDescriptor(D, F).enumerable;
    })), f.push.apply(f, e);
  }
  return f;
}
function iu(D) {
  for (var u = 1; u < arguments.length; u++) {
    var f = arguments[u] != null ? arguments[u] : {};
    u % 2 ? Sf(Object(f), !0).forEach(function(e) {
      m8(D, e, f[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(D, Object.getOwnPropertyDescriptors(f)) : Sf(Object(f)).forEach(function(e) {
      Object.defineProperty(D, e, Object.getOwnPropertyDescriptor(f, e));
    });
  }
  return D;
}
function F1(D) {
  return h8(D) || _8(D) || n1(D) || v8();
}
function h8(D) {
  if (Array.isArray(D)) return GD(D);
}
function _8(D) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(D)) return Array.from(D);
}
function n1(D, u) {
  if (D) {
    if (typeof D == "string") return GD(D, u);
    var f = Object.prototype.toString.call(D).slice(8, -1);
    if (f === "Object" && D.constructor && (f = D.constructor.name), f === "Map" || f === "Set") return Array.from(D);
    if (f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)) return GD(D, u);
  }
}
function GD(D, u) {
  (u == null || u > D.length) && (u = D.length);
  for (var f = 0, e = new Array(u); f < u; f++) e[f] = D[f];
  return e;
}
function v8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YD(D, u) {
  var f;
  if (typeof Symbol > "u" || D[Symbol.iterator] == null) {
    if (Array.isArray(D) || (f = n1(D)) || u) {
      f && (D = f);
      var e = 0, F = function() {
      };
      return {
        s: F,
        n: function() {
          return e >= D.length ? {
            done: !0
          } : {
            done: !1,
            value: D[e++]
          };
        },
        e: function(r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var t = !0, a = !1, n;
  return {
    s: function() {
      f = D[Symbol.iterator]();
    },
    n: function() {
      var r = f.next();
      return t = r.done, r;
    },
    e: function(r) {
      a = !0, n = r;
    },
    f: function() {
      try {
        !t && f.return != null && f.return();
      } finally {
        if (a) throw n;
      }
    }
  };
}
function a1(D, u) {
  for (var f in u)
    Object.prototype.hasOwnProperty.call(u, f) && (Xu(u[f]) === "object" && D[f] ? a1(D[f], u[f]) : D[f] = u[f]);
}
var Tu = {
  // Disable popper components
  disabled: !1,
  // Default position offset [skidding, distance] (px)
  offset: [0, 5],
  // Default container where the tooltip will be appended
  container: "body",
  // Element used to compute position and size boundaries
  boundary: void 0,
  // Skip delay & CSS transitions when another popper is shown, so that the popper appear to instanly move to the new position.
  instantMove: !1,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 5e3,
  // Triggers on the popper itself
  popperTriggers: [],
  // Positioning strategy
  strategy: "absolute",
  // Popperjs modifiers
  modifiers: [],
  // Other options passed to Popperjs constructor
  popperOptions: {},
  // Themes
  themes: {
    tooltip: {
      // Default tooltip placement relative to target element
      placement: "top",
      // Default events that trigger the tooltip
      triggers: ["hover", "focus", "touch"],
      // Close tooltip on click on tooltip target
      hideTriggers: function(u) {
        return [].concat(F1(u), ["click"]);
      },
      // Delay (ms)
      delay: {
        show: 200,
        hide: 0
      },
      // Update popper on content resize
      handleResize: !1,
      // Enable HTML content in directive
      html: !1,
      // Displayed when tooltip content is loading
      loadingContent: "..."
    },
    dropdown: {
      // Default dropdown placement relative to target element
      placement: "bottom",
      // Default events that trigger the dropdown
      triggers: ["click"],
      // Delay (ms)
      delay: 0,
      // Update popper on content resize
      handleResize: !0,
      // Hide on clock outside
      autoHide: !0
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover", "focus"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function q(D, u) {
  var f = Tu.themes[D] || {}, e;
  do
    e = f[u], typeof e > "u" ? f.$extend ? f = Tu.themes[f.$extend] || {} : (f = null, e = Tu[u]) : f = null;
  while (f);
  return e;
}
function A8(D) {
  var u = [D], f = Tu.themes[D] || {};
  do
    f.$extend && !f.$resetCss ? (u.push(f.$extend), f = Tu.themes[f.$extend] || {}) : f = null;
  while (f);
  return u.map(function(e) {
    return "v-popper--theme-".concat(e);
  });
}
var vD = !1;
if (typeof window < "u") {
  vD = !1;
  try {
    var y8 = Object.defineProperty({}, "passive", {
      get: function() {
        vD = !0;
      }
    });
    window.addEventListener("test", null, y8);
  } catch {
  }
}
var d1 = !1;
typeof window < "u" && typeof navigator < "u" && (d1 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
function bD(D, u, f) {
  var e = D.find(function(F) {
    return F.name === u;
  });
  e || (e = {
    name: u,
    options: {}
  }, D.push(e)), Object.assign(e.options, f);
}
var Tf = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart"
}, $f = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend"
};
function w8(D, u) {
  var f = D.indexOf(u);
  f !== -1 && D.splice(f, 1);
}
var Pu = [], ju = null, XD = function() {
};
typeof window < "u" && (XD = window.Element);
var r1 = function() {
  return {
    name: "VPopper",
    props: {
      theme: {
        type: String,
        required: !0
      },
      targetNodes: {
        type: Function,
        required: !0
      },
      referenceNode: {
        type: Function,
        required: !0
      },
      popperNode: {
        type: Function,
        required: !0
      },
      arrowNode: {
        type: Function,
        default: null
      },
      shown: {
        type: Boolean,
        default: !1
      },
      showGroup: {
        type: String,
        default: null
      },
      // eslint-disable-next-line vue/require-prop-types
      ariaId: {
        default: null
      },
      disabled: {
        type: Boolean,
        default: function(u) {
          return q(u.theme, "disabled");
        }
      },
      placement: {
        type: String,
        default: function(u) {
          return q(u.theme, "placement");
        },
        validator: function(u) {
          return yD.includes(u);
        }
      },
      delay: {
        type: [String, Number, Object],
        default: function(u) {
          return q(u.theme, "delay");
        }
      },
      offset: {
        type: [Array, Function],
        default: function(u) {
          return q(u.theme, "offset");
        }
      },
      triggers: {
        type: Array,
        default: function(u) {
          return q(u.theme, "triggers");
        }
      },
      showTriggers: {
        type: [Array, Function],
        default: function(u) {
          return q(u.theme, "showTriggers");
        }
      },
      hideTriggers: {
        type: [Array, Function],
        default: function(u) {
          return q(u.theme, "hideTriggers");
        }
      },
      popperTriggers: {
        type: Array,
        default: function(u) {
          return q(u.theme, "popperTriggers");
        }
      },
      popperShowTriggers: {
        type: [Array, Function],
        default: function(u) {
          return q(u.theme, "popperShowTriggers");
        }
      },
      popperHideTriggers: {
        type: [Array, Function],
        default: function(u) {
          return q(u.theme, "popperHideTriggers");
        }
      },
      container: {
        type: [String, Object, XD, Boolean],
        default: function(u) {
          return q(u.theme, "container");
        }
      },
      boundary: {
        type: [String, XD],
        default: function(u) {
          return q(u.theme, "boundary");
        }
      },
      strategy: {
        type: String,
        validator: function(u) {
          return ["absolute", "fixed"].includes(u);
        },
        default: function(u) {
          return q(u.theme, "strategy");
        }
      },
      modifiers: {
        type: Array,
        default: function(u) {
          return q(u.theme, "modifiers");
        }
      },
      popperOptions: {
        type: Object,
        default: function(u) {
          return q(u.theme, "popperOptions");
        }
      },
      autoHide: {
        type: Boolean,
        default: function(u) {
          return q(u.theme, "autoHide");
        }
      },
      handleResize: {
        type: Boolean,
        default: function(u) {
          return q(u.theme, "handleResize");
        }
      },
      instantMove: {
        type: Boolean,
        default: function(u) {
          return q(u.theme, "instantMove");
        }
      },
      eagerMount: {
        type: Boolean,
        default: function(u) {
          return q(u.theme, "eagerMount");
        }
      }
    },
    emits: ["show", "hide", "update:shown", "apply-show", "apply-hide", "close-group", "close-directive", "auto-hide", "resize", "dispose"],
    data: function() {
      return {
        isShown: !1,
        isMounted: !1,
        skipTransition: !1,
        classes: {
          showFrom: !1,
          showTo: !1,
          hideFrom: !1,
          hideTo: !0
        }
      };
    },
    computed: {
      popperId: function() {
        return this.ariaId != null ? this.ariaId : this.randomId;
      },
      shouldMountContent: function() {
        return this.eagerMount || this.isMounted;
      },
      slotData: function() {
        return {
          popperId: this.popperId,
          isShown: this.isShown,
          shouldMountContent: this.shouldMountContent,
          skipTransition: this.skipTransition,
          autoHide: this.autoHide,
          hide: this.hide,
          handleResize: this.handleResize,
          onResize: this.onResize,
          classes: iu({}, this.classes)
        };
      }
    },
    watch: {
      shown: "$_autoShowHide",
      disabled: function(u) {
        u ? this.dispose() : this.init();
      },
      container: function() {
        var u = this;
        return xu(function* () {
          u.isShown && u.popperInstance && (u.$_ensureContainer(), yield u.popperInstance.update());
        })();
      },
      triggers: function() {
        this.$_removeEventListeners(), this.$_addEventListeners();
      },
      placement: "$_refreshPopperOptions",
      offset: "$_refreshPopperOptions",
      boundary: "$_refreshPopperOptions",
      strategy: "$_refreshPopperOptions",
      modifiers: "$_refreshPopperOptions",
      popperOptions: {
        handler: "$_refreshPopperOptions",
        deep: !0
      }
    },
    created: function() {
      this.randomId = "popper_".concat([Math.random(), Date.now()].map(function(u) {
        return u.toString(36).substr(2, 10);
      }).join("_"));
    },
    mounted: function() {
      this.init();
    },
    activated: function() {
      this.$_autoShowHide();
    },
    deactivated: function() {
      this.hide();
    },
    beforeUnmount: function() {
      this.dispose();
    },
    methods: {
      show: function() {
        var u = this, f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = f.event, F = f.skipDelay, t = F === void 0 ? !1 : F, a = f.force, n = a === void 0 ? !1 : a;
        (n || !this.disabled) && (this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(function() {
          u.$_showFrameLocked = !1;
        })), this.$emit("update:shown", !0);
      },
      hide: function() {
        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, f = u.event, e = u.skipDelay, F = e === void 0 ? !1 : e;
        this.$_scheduleHide(f, F), this.$emit("hide"), this.$emit("update:shown", !1);
      },
      init: function() {
        this.$_isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_targetNodes = this.targetNodes().filter(function(u) {
          return u.nodeType === u.ELEMENT_NODE;
        }), this.$_popperNode = this.popperNode(), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show();
      },
      dispose: function() {
        this.$_isDisposed = !0, this.$_removeEventListeners(), this.hide({
          skipDelay: !0
        }), this.popperInstance && (this.popperInstance.destroy(), this.$_detachPopperNode()), this.isMounted = !1, this.popperInstance = null, this.isShown = !1, this.$_swapTargetAttrs("data-original-title", "title"), this.$emit("dispose");
      },
      onResize: function() {
        var u = this;
        return xu(function* () {
          u.isShown && u.popperInstance && (yield u.popperInstance.update(), u.$emit("resize"));
        })();
      },
      $_getPopperOptions: function() {
        var u = this, f = iu(iu({}, this.popperOptions), {}, {
          placement: this.placement,
          strategy: this.strategy,
          modifiers: this.modifiers,
          onFirstUpdate: function() {
            var e = xu(function* (t) {
              u.popperOptions.onFirstUpdate && u.popperOptions.onFirstUpdate(t), yield u.$_applyShowEffect();
            });
            function F(t) {
              return e.apply(this, arguments);
            }
            return F;
          }()
        });
        return f.modifiers || (f.modifiers = []), bD(f.modifiers, "arrow", {
          element: this.arrowNode && this.arrowNode() || "[data-popper-arrow]"
        }), this.offset && bD(f.modifiers, "offset", {
          offset: this.offset
        }), this.boundary && bD(f.modifiers, "preventOverflow", {
          boundary: this.boundary
        }), this.isShown || bD(f.modifiers, "eventListeners", {
          enabled: !1
        }), f;
      },
      $_refreshPopperOptions: function() {
        var u = this;
        return xu(function* () {
          u.popperInstance && (yield u.popperInstance.setOptions(u.$_getPopperOptions()));
        })();
      },
      $_scheduleShow: function() {
        var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), ju && this.instantMove && ju.instantMove) {
          ju.$_applyHide(!0), this.$_applyShow(!0);
          return;
        }
        u ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
      },
      $_scheduleHide: function() {
        var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (ju = this), u ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
      },
      $_computeDelay: function(u) {
        var f = this.delay;
        return parseInt(f && f[u] || f || 0);
      },
      $_applyShow: function() {
        var u = arguments, f = this;
        return xu(function* () {
          var e = u.length > 0 && u[0] !== void 0 ? u[0] : !1;
          clearTimeout(f.$_disposeTimer), clearTimeout(f.$_scheduleTimer), f.skipTransition = e, !f.isShown && (f.isMounted || (f.$_ensureContainer(), f.isMounted = !0), f.popperInstance ? (yield f.popperInstance.update(), yield f.$_refreshPopperOptions(), yield f.$_applyShowEffect()) : f.popperInstance = l8(f.referenceNode(), f.$_popperNode, f.$_getPopperOptions()));
        })();
      },
      $_applyShowEffect: function() {
        var u = this;
        return xu(function* () {
          if (!u.$_hideInProgress) {
            u.isShown = !0, u.$_applyAttrsToTarget({
              "aria-describedby": u.popperId,
              "data-popper-shown": ""
            });
            var f = u.showGroup;
            if (f)
              for (var e, F = 0; F < Pu.length; F++)
                e = Pu[F], e.showGroup !== f && (e.hide(), e.$emit("close-group"));
            Pu.push(u), u.$emit("apply-show"), u.$_popperNode.setAttribute("data-popper-placement", u.popperInstance.state.placement), u.classes.showFrom = !0, u.classes.showTo = !1, u.classes.hideFrom = !1, u.classes.hideTo = !1, yield Of(), u.classes.showFrom = !1, u.classes.showTo = !0;
          }
        })();
      },
      $_applyHide: function() {
        var u = arguments, f = this;
        return xu(function* () {
          var e = u.length > 0 && u[0] !== void 0 ? u[0] : !1;
          if (clearTimeout(f.$_scheduleTimer), !!f.isShown) {
            f.skipTransition = e, w8(Pu, f), ju === f && (ju = null), f.isShown = !1, f.popperInstance && (yield f.$_refreshPopperOptions()), f.$_applyAttrsToTarget({
              "aria-describedby": void 0,
              "data-popper-shown": void 0
            }), clearTimeout(f.$_disposeTimer);
            var F = q(f.theme, "disposeTimeout");
            F !== null && (f.$_disposeTimer = setTimeout(function() {
              f.$_popperNode && (f.$_detachPopperNode(), f.isMounted = !1);
            }, F)), f.$emit("apply-hide"), f.classes.showFrom = !1, f.classes.showTo = !1, f.classes.hideFrom = !0, f.classes.hideTo = !1, yield Of(), f.classes.hideFrom = !1, f.classes.hideTo = !0;
          }
        })();
      },
      $_autoShowHide: function() {
        this.shown ? this.show() : this.hide();
      },
      $_ensureContainer: function() {
        var u = this.container;
        if (typeof u == "string" ? u = window.document.querySelector(u) : u === !1 && (u = this.$_targetNodes[0].parentNode), !u)
          throw new Error("No container for popover: " + this.container);
        u.appendChild(this.$_popperNode);
      },
      $_addEventListeners: function() {
        var u = this, f = function(a, n, r, o, d) {
          var c = r;
          o != null && (c = typeof o == "function" ? o(c) : o), c.forEach(function(s) {
            var B = n[s];
            B && (u.$_events.push({
              targetNodes: a,
              eventType: B,
              handler: d
            }), a.forEach(function(E) {
              return E.addEventListener(B, d);
            }));
          });
        }, e = function(a) {
          u.isShown && !u.$_hideInProgress || (a.usedByTooltip = !0, !u.$_preventShow && u.show({
            event: a
          }));
        };
        f(this.$_targetNodes, Tf, this.triggers, this.showTriggers, e), f([this.$_popperNode], Tf, this.popperTriggers, this.popperShowTriggers, e);
        var F = function(a) {
          a.usedByTooltip || u.hide({
            event: a
          });
        };
        f(this.$_targetNodes, $f, this.triggers, this.hideTriggers, F), f([this.$_popperNode], $f, this.popperTriggers, this.popperHideTriggers, F);
      },
      $_removeEventListeners: function() {
        this.$_events.forEach(function(u) {
          var f = u.targetNodes, e = u.eventType, F = u.handler;
          f.forEach(function(t) {
            return t.removeEventListener(e, F);
          });
        }), this.$_events = [];
      },
      $_handleGlobalClose: function(u) {
        var f = this, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        this.$_showFrameLocked || (this.hide({
          event: u
        }), u.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), e && (this.$_preventShow = !0, setTimeout(function() {
          f.$_preventShow = !1;
        }, 300)));
      },
      $_detachPopperNode: function() {
        this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
      },
      $_swapTargetAttrs: function(u, f) {
        var e = YD(this.$_targetNodes), F;
        try {
          for (e.s(); !(F = e.n()).done; ) {
            var t = F.value, a = t.getAttribute(u);
            a && (t.removeAttribute(u), t.setAttribute(f, a));
          }
        } catch (n) {
          e.e(n);
        } finally {
          e.f();
        }
      },
      $_applyAttrsToTarget: function(u) {
        var f = YD(this.$_targetNodes), e;
        try {
          for (f.s(); !(e = f.n()).done; ) {
            var F = e.value;
            for (var t in u) {
              var a = u[t];
              a == null ? F.removeAttribute(t) : F.setAttribute(t, a);
            }
          }
        } catch (n) {
          f.e(n);
        } finally {
          f.f();
        }
      }
    },
    render: function() {
      return this.$slots.default(this.slotData);
    }
  };
};
typeof document < "u" && typeof window < "u" && (d1 ? document.addEventListener("touchend", x8, vD ? {
  passive: !0,
  capture: !0
} : !0) : window.addEventListener("click", k8, !0));
function k8(D) {
  i1(D);
}
function x8(D) {
  i1(D, !0);
}
function i1(D) {
  for (var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, f = function(t) {
    var a = Pu[t], n = a.popperNode(), r = n.contains(D.target);
    requestAnimationFrame(function() {
      (D.closeAllPopover || D.closePopover && r || a.autoHide && !r) && a.$_handleGlobalClose(D, u);
    });
  }, e = 0; e < Pu.length; e++)
    f(e);
}
function Of() {
  return new Promise(function(D) {
    return requestAnimationFrame(D);
  });
}
var s1 = {
  computed: {
    themeClass: function() {
      return A8(this.theme);
    }
  }
}, xD = {
  name: "VPopperContent",
  components: {
    ResizeObserver: kD
  },
  mixins: [s1],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object
  },
  emits: ["hide", "resize"]
}, S8 = {
  class: "v-popper__wrapper"
}, T8 = {
  ref: "inner",
  class: "v-popper__inner"
}, $8 = {
  ref: "arrow",
  class: "v-popper__arrow-container"
}, O8 = /* @__PURE__ */ L(
  "div",
  {
    class: "v-popper__arrow"
  },
  null,
  -1
  /* HOISTED */
);
function j8(D, u, f, e, F, t) {
  var a = O("ResizeObserver");
  return b(), V(
    "div",
    {
      id: f.popperId,
      ref: "popover",
      class: ["v-popper__popper", [D.themeClass, {
        "v-popper__popper--shown": f.shown,
        "v-popper__popper--hidden": !f.shown,
        "v-popper__popper--show-from": f.classes.showFrom,
        "v-popper__popper--show-to": f.classes.showTo,
        "v-popper__popper--hide-from": f.classes.hideFrom,
        "v-popper__popper--hide-to": f.classes.hideTo,
        "v-popper__popper--skip-transition": f.skipTransition
      }]],
      "aria-hidden": f.shown ? "false" : "true",
      tabindex: f.autoHide ? 0 : void 0,
      onKeyup: u[2] || (u[2] = O1(function(n) {
        return f.autoHide && D.$emit("hide");
      }, ["esc"]))
    },
    [L("div", S8, [L(
      "div",
      T8,
      [f.mounted ? (b(), V(
        qu,
        {
          key: 0
        },
        [L("div", null, [k(D.$slots, "default")]), f.handleResize ? (b(), V(a, {
          key: 0,
          onNotify: u[1] || (u[1] = function(n) {
            return D.$emit("resize", n);
          })
        })) : z("v-if", !0)],
        64
        /* STABLE_FRAGMENT */
      )) : z("v-if", !0)],
      512
      /* NEED_PATCH */
    ), L(
      "div",
      $8,
      [O8],
      512
      /* NEED_PATCH */
    )])],
    42,
    ["id", "aria-hidden", "tabindex"]
  );
}
xD.render = j8;
xD.__file = "src/components/PopperContent.vue";
var o1 = {
  methods: {
    show: function() {
      var u;
      return (u = this.$refs.popper).show.apply(u, arguments);
    },
    hide: function() {
      var u;
      return (u = this.$refs.popper).hide.apply(u, arguments);
    },
    dispose: function() {
      var u;
      return (u = this.$refs.popper).dispose.apply(u, arguments);
    },
    onResize: function() {
      var u;
      return (u = this.$refs.popper).onResize.apply(u, arguments);
    }
  }
}, nD = {
  name: "VPopperWrapper",
  components: {
    Popper: r1(),
    PopperContent: xD
  },
  mixins: [o1, s1],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: null
    }
  },
  computed: {
    finalTheme: function() {
      var u;
      return (u = this.theme) !== null && u !== void 0 ? u : this.$options.vPopperTheme;
    }
  },
  methods: {
    getTargetNodes: function() {
      var u = F1(this.$refs.reference.children);
      return u.slice(0, u.length - 1).filter(Boolean);
    }
  }
};
function P8(D, u, f, e, F, t) {
  var a = O("PopperContent"), n = O("Popper");
  return b(), V(
    n,
    Lf({
      ref: "popper"
    }, D.$attrs, {
      theme: t.finalTheme,
      "target-nodes": t.getTargetNodes,
      "reference-node": function() {
        return D.$refs.reference;
      },
      "popper-node": function() {
        return D.$refs.popperContent.$el;
      },
      "arrow-node": function() {
        return D.$refs.popperContent.$refs.arrow;
      }
    }),
    {
      default: x(function(r) {
        var o = r.popperId, d = r.isShown, c = r.shouldMountContent, s = r.skipTransition, B = r.autoHide, E = r.hide, y = r.handleResize, _ = r.onResize, w = r.classes;
        return [L(
          "div",
          {
            ref: "reference",
            class: ["v-popper", [D.themeClass, {
              "v-popper--shown": d
            }]]
          },
          [k(D.$slots, "default"), L(
            a,
            {
              ref: "popperContent",
              "popper-id": o,
              theme: t.finalTheme,
              shown: d,
              mounted: c,
              "skip-transition": s,
              "auto-hide": B,
              "handle-resize": y,
              classes: w,
              onHide: E,
              onResize: _
            },
            {
              default: x(function() {
                return [k(D.$slots, "popper", {
                  shown: d
                })];
              }),
              _: 2
              /* DYNAMIC */
            },
            1032,
            ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "onHide", "onResize"]
          )],
          2
          /* CLASS */
        )];
      }),
      _: 3
      /* FORWARDED */
    },
    16,
    ["theme", "target-nodes", "reference-node", "popper-node", "arrow-node"]
  );
}
nD.render = P8;
nD.__file = "src/components/PopperWrapper.vue";
var KD = iu(iu({}, nD), {}, {
  name: "VDropdown",
  vPopperTheme: "dropdown"
});
KD.__file = "src/components/Dropdown.vue";
var ZD = iu(iu({}, nD), {}, {
  name: "VMenu",
  vPopperTheme: "menu"
});
ZD.__file = "src/components/Menu.vue";
var QD = iu(iu({}, nD), {}, {
  name: "VTooltip",
  vPopperTheme: "tooltip"
});
QD.__file = "src/components/Tooltip.vue";
var af = {
  name: "VTooltipDirective",
  components: {
    Popper: r1(),
    PopperContent: xD
  },
  mixins: [o1],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: function(u) {
        return q(u.theme, "html");
      }
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: function(u) {
        return q(u.theme, "loadingContent");
      }
    }
  },
  data: function() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync: function() {
      return typeof this.content == "function";
    },
    loading: function() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent: function() {
      return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
    }
  },
  watch: {
    content: {
      handler: function() {
        this.fetchContent(!0);
      },
      immediate: !0
    },
    finalContent: function(u) {
      var f = this;
      this.$nextTick(function() {
        f.$refs.popper.onResize();
      });
    }
  },
  created: function() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent: function(u) {
      var f = this;
      if (typeof this.content == "function" && this.$_isShown && (u || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null, this.$_loading = !0;
        var e = ++this.$_fetchId, F = this.content(this);
        F.then ? F.then(function(t) {
          return f.onResult(e, t);
        }) : this.onResult(e, F);
      }
    },
    onResult: function(u, f) {
      u === this.$_fetchId && (this.$_loading = !1, this.asyncContent = f);
    },
    onShow: function() {
      this.$_isShown = !0, this.fetchContent();
    },
    onHide: function() {
      this.$_isShown = !1;
    }
  }
};
function I8(D, u, f, e, F, t) {
  var a = O("PopperContent"), n = O("Popper");
  return b(), V(
    n,
    Lf({
      ref: "popper"
    }, D.$attrs, {
      theme: f.theme,
      "popper-node": function() {
        return D.$refs.popperContent.$el;
      },
      "arrow-node": function() {
        return D.$refs.popperContent.$refs.arrow;
      },
      onApplyShow: t.onShow,
      onApplyHide: t.onHide
    }),
    {
      default: x(function(r) {
        var o = r.popperId, d = r.isShown, c = r.shouldMountContent, s = r.skipTransition, B = r.autoHide, E = r.hide, y = r.handleResize, _ = r.onResize, w = r.classes;
        return [L(
          a,
          {
            ref: "popperContent",
            class: {
              "v-popper--tooltip-loading": t.loading
            },
            "popper-id": o,
            theme: f.theme,
            shown: d,
            mounted: c,
            "skip-transition": s,
            "auto-hide": B,
            "handle-resize": y,
            classes: w,
            onHide: E,
            onResize: _
          },
          {
            default: x(function() {
              return [f.html ? (b(), V(
                "div",
                {
                  key: 0,
                  innerHTML: t.finalContent
                },
                null,
                8,
                ["innerHTML"]
              )) : (b(), V(
                "div",
                {
                  key: 1,
                  textContent: Z(t.finalContent)
                },
                null,
                8,
                ["textContent"]
              ))];
            }),
            _: 2
            /* DYNAMIC */
          },
          1032,
          ["class", "popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "onHide", "onResize"]
        )];
      }),
      _: 1
      /* STABLE */
    },
    16,
    ["theme", "popper-node", "arrow-node", "onApplyShow", "onApplyHide"]
  );
}
af.render = I8;
af.__file = "src/components/TooltipDirective.vue";
var C1 = "v-popper--has-tooltip";
function z8(D, u) {
  var f = D.placement;
  if (!f && u) {
    var e = YD(yD), F;
    try {
      for (e.s(); !(F = e.n()).done; ) {
        var t = F.value;
        u[t] && (f = t);
      }
    } catch (a) {
      e.e(a);
    } finally {
      e.f();
    }
  }
  return f || (f = q(D.theme || "tooltip", "placement")), f;
}
function c1(D, u, f) {
  var e, F = Xu(u);
  return F === "string" ? e = {
    content: u
  } : u && F === "object" ? e = u : e = {
    content: !1
  }, e.placement = z8(e, f), e.targetNodes = function() {
    return [D];
  }, e.referenceNode = function() {
    return D;
  }, e;
}
function N8(D, u, f) {
  var e = c1(D, u, f), F = D.$_popper = j1({
    name: "VTooltipDirective",
    data: function() {
      return {
        options: e
      };
    },
    render: function() {
      return P1(af, iu(iu({}, this.options), {}, {
        ref: "tooltip"
      }));
    }
  }), t = document.createElement("div");
  return document.body.appendChild(t), F.mount(t), D.classList && D.classList.add(C1), F;
}
function E1(D) {
  D.$_popper && (D.$_popper.unmount(), delete D.$_popper, delete D.$_popperOldShown), D.classList && D.classList.remove(C1);
}
function jf(D, u) {
  var f = u.value, e = u.modifiers, F = c1(D, f, e);
  if (!F.content || q(F.theme || "tooltip", "disabled"))
    E1(D);
  else {
    var t;
    D.$_popper ? (t = D.$_popper, t.options = F) : t = N8(D, f, e), typeof f.shown < "u" && f.shown !== D.$_popperOldShown && (D.$_popperOldShown = f.shown, f.shown ? t.$refs.tooltip.show() : t.$refs.tooltip.hide());
  }
}
var q8 = {
  beforeMount: jf,
  updated: jf,
  beforeUnmount: function(u) {
    E1(u);
  }
};
function Pf(D) {
  D.addEventListener("click", l1), D.addEventListener("touchstart", B1, vD ? {
    passive: !0
  } : !1);
}
function If(D) {
  D.removeEventListener("click", l1), D.removeEventListener("touchstart", B1), D.removeEventListener("touchend", b1), D.removeEventListener("touchcancel", p1);
}
function l1(D) {
  var u = D.currentTarget;
  D.closePopover = !u.$_vclosepopover_touch, D.closeAllPopover = u.$_closePopoverModifiers && !!u.$_closePopoverModifiers.all;
}
function B1(D) {
  if (D.changedTouches.length === 1) {
    var u = D.currentTarget;
    u.$_vclosepopover_touch = !0;
    var f = D.changedTouches[0];
    u.$_vclosepopover_touchPoint = f, u.addEventListener("touchend", b1), u.addEventListener("touchcancel", p1);
  }
}
function b1(D) {
  var u = D.currentTarget;
  if (u.$_vclosepopover_touch = !1, D.changedTouches.length === 1) {
    var f = D.changedTouches[0], e = u.$_vclosepopover_touchPoint;
    D.closePopover = Math.abs(f.screenY - e.screenY) < 20 && Math.abs(f.screenX - e.screenX) < 20, D.closeAllPopover = u.$_closePopoverModifiers && !!u.$_closePopoverModifiers.all;
  }
}
function p1(D) {
  var u = D.currentTarget;
  u.$_vclosepopover_touch = !1;
}
var L8 = {
  beforeMount: function(u, f) {
    var e = f.value, F = f.modifiers;
    u.$_closePopoverModifiers = F, (typeof e > "u" || e) && Pf(u);
  },
  updated: function(u, f) {
    var e = f.value, F = f.oldValue, t = f.modifiers;
    u.$_closePopoverModifiers = t, e !== F && (typeof e > "u" || e ? Pf(u) : If(u));
  },
  beforeUnmount: function(u) {
    If(u);
  }
};
function JD(D) {
  var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  JD.installed || (JD.installed = !0, a1(Tu, u), D.directive("tooltip", q8), D.directive("close-popper", L8), D.component("v-tooltip", QD), D.component("VTooltip", QD), D.component("v-dropdown", KD), D.component("VDropdown", KD), D.component("v-menu", ZD), D.component("VMenu", ZD));
}
var R8 = {
  // eslint-disable-next-line no-undef
  version: "4.0.0-alpha.1",
  install: JD,
  options: Tu
}, pD = { exports: {} }, zf;
function M8() {
  if (zf) return pD.exports;
  zf = 1;
  function D() {
  }
  return D.prototype = {
    on: function(u, f, e) {
      var F = this.e || (this.e = {});
      return (F[u] || (F[u] = [])).push({
        fn: f,
        ctx: e
      }), this;
    },
    once: function(u, f, e) {
      var F = this;
      function t() {
        F.off(u, t), f.apply(e, arguments);
      }
      return t._ = f, this.on(u, t, e);
    },
    emit: function(u) {
      var f = [].slice.call(arguments, 1), e = ((this.e || (this.e = {}))[u] || []).slice(), F = 0, t = e.length;
      for (F; F < t; F++)
        e[F].fn.apply(e[F].ctx, f);
      return this;
    },
    off: function(u, f) {
      var e = this.e || (this.e = {}), F = e[u], t = [];
      if (F && f)
        for (var a = 0, n = F.length; a < n; a++)
          F[a].fn !== f && F[a].fn._ !== f && t.push(F[a]);
      return t.length ? e[u] = t : delete e[u], this;
    }
  }, pD.exports = D, pD.exports.TinyEmitter = D, pD.exports;
}
var MD, Nf;
function H8() {
  if (Nf) return MD;
  Nf = 1;
  var D = M8();
  return MD = new D(), MD;
}
var U8 = H8();
const gD = /* @__PURE__ */ uf(U8), V8 = {
  $on: (...D) => gD.on(...D),
  $once: (...D) => gD.once(...D),
  $off: (...D) => gD.off(...D),
  $emit: (...D) => gD.emit(...D)
}, W8 = "BeautifulChat", Y8 = {
  install(D, u = {}) {
    this.installed || D.prototype && D.prototype.$isServer || (this.installed = !0, D.config.globalProperties.$event = V8, this.componentName = u.componentName || W8, D.component(this.componentName, d2), D.use(R8));
  }
};
export {
  Y8 as default
};
