var __ = Object.defineProperty;
var ph = Object.getOwnPropertySymbols;
var b_ = Object.prototype.hasOwnProperty,
  x_ = Object.prototype.propertyIsEnumerable;
var $t = Math.pow,
  _c = (Je, We, ue) =>
    We in Je
      ? __(Je, We, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ue,
        })
      : (Je[We] = ue),
  mh = (Je, We) => {
    for (var ue in We || (We = {})) b_.call(We, ue) && _c(Je, ue, We[ue]);
    if (ph) for (var ue of ph(We)) x_.call(We, ue) && _c(Je, ue, We[ue]);
    return Je;
  };
var X = (Je, We, ue) => _c(Je, typeof We != "symbol" ? We + "" : We, ue);
var no = (Je, We, ue) =>
  new Promise((Fs, dn) => {
    var Bs = (Wt) => {
        try {
          Jr(ue.next(Wt));
        } catch (Ni) {
          dn(Ni);
        }
      },
      ro = (Wt) => {
        try {
          Jr(ue.throw(Wt));
        } catch (Ni) {
          dn(Ni);
        }
      },
      Jr = (Wt) =>
        Wt.done ? Fs(Wt.value) : Promise.resolve(Wt.value).then(Bs, ro);
    Jr((ue = ue.apply(Je, We)).next());
  });
(function (Je) {
  typeof define == "function" && define.amd ? define(Je) : Je();
})(function () {
  "use strict";
  /*! @vimeo/player v2.26.0 | (c) 2025 Vimeo | MIT License | https://github.com/vimeo/player.js */ function Je(
    t,
    e
  ) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      e &&
        (r = r.filter(function (i) {
          return Object.getOwnPropertyDescriptor(t, i).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function We(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? Je(Object(n), !0).forEach(function (r) {
            Wt(t, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Je(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return t;
  }
  function ue() {
    ue = function () {
      return t;
    };
    var t = {},
      e = Object.prototype,
      n = e.hasOwnProperty,
      r =
        Object.defineProperty ||
        function (b, E, A) {
          b[E] = A.value;
        },
      i = typeof Symbol == "function" ? Symbol : {},
      s = i.iterator || "@@iterator",
      a = i.asyncIterator || "@@asyncIterator",
      o = i.toStringTag || "@@toStringTag";
    function l(b, E, A) {
      return (
        Object.defineProperty(b, E, {
          value: A,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        b[E]
      );
    }
    try {
      l({}, "");
    } catch (b) {
      l = function (E, A, L) {
        return (E[A] = L);
      };
    }
    function c(b, E, A, L) {
      var k = E && E.prototype instanceof d ? E : d,
        I = Object.create(k.prototype),
        D = new O(L || []);
      return r(I, "_invoke", { value: S(b, A, D) }), I;
    }
    function u(b, E, A) {
      try {
        return { type: "normal", arg: b.call(E, A) };
      } catch (L) {
        return { type: "throw", arg: L };
      }
    }
    t.wrap = c;
    var f = {};
    function d() {}
    function h() {}
    function m() {}
    var p = {};
    l(p, s, function () {
      return this;
    });
    var g = Object.getPrototypeOf,
      y = g && g(g(T([])));
    y && y !== e && n.call(y, s) && (p = y);
    var v = (m.prototype = d.prototype = Object.create(p));
    function _(b) {
      ["next", "throw", "return"].forEach(function (E) {
        l(b, E, function (A) {
          return this._invoke(E, A);
        });
      });
    }
    function x(b, E) {
      function A(k, I, D, R) {
        var $ = u(b[k], b, I);
        if ($.type !== "throw") {
          var H = $.arg,
            Y = H.value;
          return Y && typeof Y == "object" && n.call(Y, "__await")
            ? E.resolve(Y.__await).then(
                function (le) {
                  A("next", le, D, R);
                },
                function (le) {
                  A("throw", le, D, R);
                }
              )
            : E.resolve(Y).then(
                function (le) {
                  (H.value = le), D(H);
                },
                function (le) {
                  return A("throw", le, D, R);
                }
              );
        }
        R($.arg);
      }
      var L;
      r(this, "_invoke", {
        value: function (k, I) {
          function D() {
            return new E(function (R, $) {
              A(k, I, R, $);
            });
          }
          return (L = L ? L.then(D, D) : D());
        },
      });
    }
    function S(b, E, A) {
      var L = "suspendedStart";
      return function (k, I) {
        if (L === "executing") throw new Error("Generator is already running");
        if (L === "completed") {
          if (k === "throw") throw I;
          return M();
        }
        for (A.method = k, A.arg = I; ; ) {
          var D = A.delegate;
          if (D) {
            var R = w(D, A);
            if (R) {
              if (R === f) continue;
              return R;
            }
          }
          if (A.method === "next") A.sent = A._sent = A.arg;
          else if (A.method === "throw") {
            if (L === "suspendedStart") throw ((L = "completed"), A.arg);
            A.dispatchException(A.arg);
          } else A.method === "return" && A.abrupt("return", A.arg);
          L = "executing";
          var $ = u(b, E, A);
          if ($.type === "normal") {
            if (((L = A.done ? "completed" : "suspendedYield"), $.arg === f))
              continue;
            return { value: $.arg, done: A.done };
          }
          $.type === "throw" &&
            ((L = "completed"), (A.method = "throw"), (A.arg = $.arg));
        }
      };
    }
    function w(b, E) {
      var A = E.method,
        L = b.iterator[A];
      if (L === void 0)
        return (
          (E.delegate = null),
          (A === "throw" &&
            b.iterator.return &&
            ((E.method = "return"),
            (E.arg = void 0),
            w(b, E),
            E.method === "throw")) ||
            (A !== "return" &&
              ((E.method = "throw"),
              (E.arg = new TypeError(
                "The iterator does not provide a '" + A + "' method"
              )))),
          f
        );
      var k = u(L, b.iterator, E.arg);
      if (k.type === "throw")
        return (E.method = "throw"), (E.arg = k.arg), (E.delegate = null), f;
      var I = k.arg;
      return I
        ? I.done
          ? ((E[b.resultName] = I.value),
            (E.next = b.nextLoc),
            E.method !== "return" && ((E.method = "next"), (E.arg = void 0)),
            (E.delegate = null),
            f)
          : I
        : ((E.method = "throw"),
          (E.arg = new TypeError("iterator result is not an object")),
          (E.delegate = null),
          f);
    }
    function C(b) {
      var E = { tryLoc: b[0] };
      1 in b && (E.catchLoc = b[1]),
        2 in b && ((E.finallyLoc = b[2]), (E.afterLoc = b[3])),
        this.tryEntries.push(E);
    }
    function P(b) {
      var E = b.completion || {};
      (E.type = "normal"), delete E.arg, (b.completion = E);
    }
    function O(b) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        b.forEach(C, this),
        this.reset(!0);
    }
    function T(b) {
      if (b) {
        var E = b[s];
        if (E) return E.call(b);
        if (typeof b.next == "function") return b;
        if (!isNaN(b.length)) {
          var A = -1,
            L = function k() {
              for (; ++A < b.length; )
                if (n.call(b, A)) return (k.value = b[A]), (k.done = !1), k;
              return (k.value = void 0), (k.done = !0), k;
            };
          return (L.next = L);
        }
      }
      return { next: M };
    }
    function M() {
      return { value: void 0, done: !0 };
    }
    return (
      (h.prototype = m),
      r(v, "constructor", { value: m, configurable: !0 }),
      r(m, "constructor", { value: h, configurable: !0 }),
      (h.displayName = l(m, o, "GeneratorFunction")),
      (t.isGeneratorFunction = function (b) {
        var E = typeof b == "function" && b.constructor;
        return (
          !!E && (E === h || (E.displayName || E.name) === "GeneratorFunction")
        );
      }),
      (t.mark = function (b) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(b, m)
            : ((b.__proto__ = m), l(b, o, "GeneratorFunction")),
          (b.prototype = Object.create(v)),
          b
        );
      }),
      (t.awrap = function (b) {
        return { __await: b };
      }),
      _(x.prototype),
      l(x.prototype, a, function () {
        return this;
      }),
      (t.AsyncIterator = x),
      (t.async = function (b, E, A, L, k) {
        k === void 0 && (k = Promise);
        var I = new x(c(b, E, A, L), k);
        return t.isGeneratorFunction(E)
          ? I
          : I.next().then(function (D) {
              return D.done ? D.value : I.next();
            });
      }),
      _(v),
      l(v, o, "Generator"),
      l(v, s, function () {
        return this;
      }),
      l(v, "toString", function () {
        return "[object Generator]";
      }),
      (t.keys = function (b) {
        var E = Object(b),
          A = [];
        for (var L in E) A.push(L);
        return (
          A.reverse(),
          function k() {
            for (; A.length; ) {
              var I = A.pop();
              if (I in E) return (k.value = I), (k.done = !1), k;
            }
            return (k.done = !0), k;
          }
        );
      }),
      (t.values = T),
      (O.prototype = {
        constructor: O,
        reset: function (b) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = void 0),
            this.tryEntries.forEach(P),
            !b)
          )
            for (var E in this)
              E.charAt(0) === "t" &&
                n.call(this, E) &&
                !isNaN(+E.slice(1)) &&
                (this[E] = void 0);
        },
        stop: function () {
          this.done = !0;
          var b = this.tryEntries[0].completion;
          if (b.type === "throw") throw b.arg;
          return this.rval;
        },
        dispatchException: function (b) {
          if (this.done) throw b;
          var E = this;
          function A($, H) {
            return (
              (I.type = "throw"),
              (I.arg = b),
              (E.next = $),
              H && ((E.method = "next"), (E.arg = void 0)),
              !!H
            );
          }
          for (var L = this.tryEntries.length - 1; L >= 0; --L) {
            var k = this.tryEntries[L],
              I = k.completion;
            if (k.tryLoc === "root") return A("end");
            if (k.tryLoc <= this.prev) {
              var D = n.call(k, "catchLoc"),
                R = n.call(k, "finallyLoc");
              if (D && R) {
                if (this.prev < k.catchLoc) return A(k.catchLoc, !0);
                if (this.prev < k.finallyLoc) return A(k.finallyLoc);
              } else if (D) {
                if (this.prev < k.catchLoc) return A(k.catchLoc, !0);
              } else {
                if (!R)
                  throw new Error("try statement without catch or finally");
                if (this.prev < k.finallyLoc) return A(k.finallyLoc);
              }
            }
          }
        },
        abrupt: function (b, E) {
          for (var A = this.tryEntries.length - 1; A >= 0; --A) {
            var L = this.tryEntries[A];
            if (
              L.tryLoc <= this.prev &&
              n.call(L, "finallyLoc") &&
              this.prev < L.finallyLoc
            ) {
              var k = L;
              break;
            }
          }
          k &&
            (b === "break" || b === "continue") &&
            k.tryLoc <= E &&
            E <= k.finallyLoc &&
            (k = null);
          var I = k ? k.completion : {};
          return (
            (I.type = b),
            (I.arg = E),
            k
              ? ((this.method = "next"), (this.next = k.finallyLoc), f)
              : this.complete(I)
          );
        },
        complete: function (b, E) {
          if (b.type === "throw") throw b.arg;
          return (
            b.type === "break" || b.type === "continue"
              ? (this.next = b.arg)
              : b.type === "return"
              ? ((this.rval = this.arg = b.arg),
                (this.method = "return"),
                (this.next = "end"))
              : b.type === "normal" && E && (this.next = E),
            f
          );
        },
        finish: function (b) {
          for (var E = this.tryEntries.length - 1; E >= 0; --E) {
            var A = this.tryEntries[E];
            if (A.finallyLoc === b)
              return this.complete(A.completion, A.afterLoc), P(A), f;
          }
        },
        catch: function (b) {
          for (var E = this.tryEntries.length - 1; E >= 0; --E) {
            var A = this.tryEntries[E];
            if (A.tryLoc === b) {
              var L = A.completion;
              if (L.type === "throw") {
                var k = L.arg;
                P(A);
              }
              return k;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (b, E, A) {
          return (
            (this.delegate = { iterator: T(b), resultName: E, nextLoc: A }),
            this.method === "next" && (this.arg = void 0),
            f
          );
        },
      }),
      t
    );
  }
  function Fs(t, e, n, r, i, s, a) {
    try {
      var o = t[s](a),
        l = o.value;
    } catch (c) {
      n(c);
      return;
    }
    o.done ? e(l) : Promise.resolve(l).then(r, i);
  }
  function dn(t) {
    return function () {
      var e = this,
        n = arguments;
      return new Promise(function (r, i) {
        var s = t.apply(e, n);
        function a(l) {
          Fs(s, r, i, a, o, "next", l);
        }
        function o(l) {
          Fs(s, r, i, a, o, "throw", l);
        }
        a(void 0);
      });
    };
  }
  function Bs(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function ro(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, xc(r.key), r);
    }
  }
  function Jr(t, e, n) {
    return (
      e && ro(t.prototype, e),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  function Wt(t, e, n) {
    return (
      (e = xc(e)),
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function Ni(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      e && Bi(t, e);
  }
  function Fi(t) {
    return (
      (Fi = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (n) {
            return n.__proto__ || Object.getPrototypeOf(n);
          }),
      Fi(t)
    );
  }
  function Bi(t, e) {
    return (
      (Bi = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (r, i) {
            return (r.__proto__ = i), r;
          }),
      Bi(t, e)
    );
  }
  function bc() {
    if (
      typeof Reflect == "undefined" ||
      !Reflect.construct ||
      Reflect.construct.sham
    )
      return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  }
  function qs(t, e, n) {
    return (
      bc()
        ? (qs = Reflect.construct.bind())
        : (qs = function (i, s, a) {
            var o = [null];
            o.push.apply(o, s);
            var l = Function.bind.apply(i, o),
              c = new l();
            return a && Bi(c, a.prototype), c;
          }),
      qs.apply(null, arguments)
    );
  }
  function vh(t) {
    return Function.toString.call(t).indexOf("[native code]") !== -1;
  }
  function io(t) {
    var e = typeof Map == "function" ? new Map() : void 0;
    return (
      (io = function (r) {
        if (r === null || !vh(r)) return r;
        if (typeof r != "function")
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (typeof e != "undefined") {
          if (e.has(r)) return e.get(r);
          e.set(r, i);
        }
        function i() {
          return qs(r, arguments, Fi(this).constructor);
        }
        return (
          (i.prototype = Object.create(r.prototype, {
            constructor: {
              value: i,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          Bi(i, r)
        );
      }),
      io(t)
    );
  }
  function Hs(t) {
    if (t === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function yh(t, e) {
    if (e && (typeof e == "object" || typeof e == "function")) return e;
    if (e !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return Hs(t);
  }
  function _h(t) {
    var e = bc();
    return function () {
      var r = Fi(t),
        i;
      if (e) {
        var s = Fi(this).constructor;
        i = Reflect.construct(r, arguments, s);
      } else i = r.apply(this, arguments);
      return yh(this, i);
    };
  }
  function bh(t, e) {
    if (typeof t != "object" || t === null) return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
      var r = n.call(t, e);
      if (typeof r != "object") return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(t);
  }
  function xc(t) {
    var e = bh(t, "string");
    return typeof e == "symbol" ? e : String(e);
  }
  var Sc =
    typeof global != "undefined" &&
    {}.toString.call(global) === "[object global]";
  function Tc(t, e) {
    return t.indexOf(e.toLowerCase()) === 0
      ? t
      : ""
          .concat(e.toLowerCase())
          .concat(t.substr(0, 1).toUpperCase())
          .concat(t.substr(1));
  }
  function xh(t) {
    return !!(
      t &&
      t.nodeType === 1 &&
      "nodeName" in t &&
      t.ownerDocument &&
      t.ownerDocument.defaultView
    );
  }
  function Sh(t) {
    return !isNaN(parseFloat(t)) && isFinite(t) && Math.floor(t) == t;
  }
  function vr(t) {
    return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(
      t
    );
  }
  function Ec(t) {
    var e =
      /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
    return e.test(t);
  }
  function Th(t) {
    for (
      var e = (t || "").match(/^(?:https?:)?(?:\/\/)?([^/?]+)/),
        n = ((e && e[1]) || "").replace("player.", ""),
        r = [".videoji.hk", ".vimeo.work", ".videoji.cn"],
        i = 0,
        s = r;
      i < s.length;
      i++
    ) {
      var a = s[i];
      if (n.endsWith(a)) return n;
    }
    return "vimeo.com";
  }
  function wc() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      e = t.id,
      n = t.url,
      r = e || n;
    if (!r)
      throw new Error(
        "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
      );
    if (Sh(r)) return "https://vimeo.com/".concat(r);
    if (vr(r)) return r.replace("http:", "https:");
    throw e
      ? new TypeError("“".concat(e, "” is not a valid video id."))
      : new TypeError("“".concat(r, "” is not a vimeo.com url."));
  }
  var Cc = function (e, n, r) {
      var i =
          arguments.length > 3 && arguments[3] !== void 0
            ? arguments[3]
            : "addEventListener",
        s =
          arguments.length > 4 && arguments[4] !== void 0
            ? arguments[4]
            : "removeEventListener",
        a = typeof n == "string" ? [n] : n;
      return (
        a.forEach(function (o) {
          e[i](o, r);
        }),
        {
          cancel: function () {
            return a.forEach(function (l) {
              return e[s](l, r);
            });
          },
        }
      );
    },
    Eh = typeof Array.prototype.indexOf != "undefined",
    wh =
      typeof window != "undefined" && typeof window.postMessage != "undefined";
  if (!Sc && (!Eh || !wh))
    throw new Error(
      "Sorry, the Vimeo Player API is not available in this browser."
    );
  var ei =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {};
  function Ch(t, e) {
    return (e = { exports: {} }), t(e, e.exports), e.exports;
  }
  /*!
   * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
   * https://github.com/polygonplanet/weakmap-polyfill
   * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
   * @license MIT
   */ (function (t) {
    if (t.WeakMap) return;
    var e = Object.prototype.hasOwnProperty,
      n =
        Object.defineProperty &&
        (function () {
          try {
            return Object.defineProperty({}, "x", { value: 1 }).x === 1;
          } catch (s) {}
        })(),
      r = function (s, a, o) {
        n
          ? Object.defineProperty(s, a, {
              configurable: !0,
              writable: !0,
              value: o,
            })
          : (s[a] = o);
      };
    t.WeakMap = (function () {
      function s() {
        if (this === void 0)
          throw new TypeError("Constructor WeakMap requires 'new'");
        if ((r(this, "_id", o("_WeakMap")), arguments.length > 0))
          throw new TypeError("WeakMap iterable is not supported");
      }
      r(s.prototype, "delete", function (c) {
        if ((a(this, "delete"), !i(c))) return !1;
        var u = c[this._id];
        return u && u[0] === c ? (delete c[this._id], !0) : !1;
      }),
        r(s.prototype, "get", function (c) {
          if ((a(this, "get"), !!i(c))) {
            var u = c[this._id];
            if (u && u[0] === c) return u[1];
          }
        }),
        r(s.prototype, "has", function (c) {
          if ((a(this, "has"), !i(c))) return !1;
          var u = c[this._id];
          return !!(u && u[0] === c);
        }),
        r(s.prototype, "set", function (c, u) {
          if ((a(this, "set"), !i(c)))
            throw new TypeError("Invalid value used as weak map key");
          var f = c[this._id];
          return f && f[0] === c
            ? ((f[1] = u), this)
            : (r(c, this._id, [c, u]), this);
        });
      function a(c, u) {
        if (!i(c) || !e.call(c, "_id"))
          throw new TypeError(
            u + " method called on incompatible receiver " + typeof c
          );
      }
      function o(c) {
        return c + "_" + l() + "." + l();
      }
      function l() {
        return Math.random().toString().substring(2);
      }
      return r(s, "_polyfill", !0), s;
    })();
    function i(s) {
      return Object(s) === s;
    }
  })(
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
      ? self
      : typeof window != "undefined"
      ? window
      : ei
  );
  var Xt = Ch(function (t) {
      /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/ (function (n, r, i) {
        (r[n] = r[n] || i()), t.exports && (t.exports = r[n]);
      })("Promise", ei, function () {
        var n,
          r,
          i,
          s = Object.prototype.toString,
          a =
            typeof setImmediate != "undefined"
              ? function (_) {
                  return setImmediate(_);
                }
              : setTimeout;
        try {
          Object.defineProperty({}, "x", {}),
            (n = function (_, x, S, w) {
              return Object.defineProperty(_, x, {
                value: S,
                writable: !0,
                configurable: w !== !1,
              });
            });
        } catch (v) {
          n = function (x, S, w) {
            return (x[S] = w), x;
          };
        }
        i = (function () {
          var _, x, S;
          function w(C, P) {
            (this.fn = C), (this.self = P), (this.next = void 0);
          }
          return {
            add: function (P, O) {
              (S = new w(P, O)),
                x ? (x.next = S) : (_ = S),
                (x = S),
                (S = void 0);
            },
            drain: function () {
              var P = _;
              for (_ = x = r = void 0; P; ) P.fn.call(P.self), (P = P.next);
            },
          };
        })();
        function o(v, _) {
          i.add(v, _), r || (r = a(i.drain));
        }
        function l(v) {
          var _,
            x = typeof v;
          return (
            v != null && (x == "object" || x == "function") && (_ = v.then),
            typeof _ == "function" ? _ : !1
          );
        }
        function c() {
          for (var v = 0; v < this.chain.length; v++)
            u(
              this,
              this.state === 1 ? this.chain[v].success : this.chain[v].failure,
              this.chain[v]
            );
          this.chain.length = 0;
        }
        function u(v, _, x) {
          var S, w;
          try {
            _ === !1
              ? x.reject(v.msg)
              : (_ === !0 ? (S = v.msg) : (S = _.call(void 0, v.msg)),
                S === x.promise
                  ? x.reject(TypeError("Promise-chain cycle"))
                  : (w = l(S))
                  ? w.call(S, x.resolve, x.reject)
                  : x.resolve(S));
          } catch (C) {
            x.reject(C);
          }
        }
        function f(v) {
          var _,
            x = this;
          if (!x.triggered) {
            (x.triggered = !0), x.def && (x = x.def);
            try {
              (_ = l(v))
                ? o(function () {
                    var S = new m(x);
                    try {
                      _.call(
                        v,
                        function () {
                          f.apply(S, arguments);
                        },
                        function () {
                          d.apply(S, arguments);
                        }
                      );
                    } catch (w) {
                      d.call(S, w);
                    }
                  })
                : ((x.msg = v), (x.state = 1), x.chain.length > 0 && o(c, x));
            } catch (S) {
              d.call(new m(x), S);
            }
          }
        }
        function d(v) {
          var _ = this;
          _.triggered ||
            ((_.triggered = !0),
            _.def && (_ = _.def),
            (_.msg = v),
            (_.state = 2),
            _.chain.length > 0 && o(c, _));
        }
        function h(v, _, x, S) {
          for (var w = 0; w < _.length; w++)
            (function (P) {
              v.resolve(_[P]).then(function (T) {
                x(P, T);
              }, S);
            })(w);
        }
        function m(v) {
          (this.def = v), (this.triggered = !1);
        }
        function p(v) {
          (this.promise = v),
            (this.state = 0),
            (this.triggered = !1),
            (this.chain = []),
            (this.msg = void 0);
        }
        function g(v) {
          if (typeof v != "function") throw TypeError("Not a function");
          if (this.__NPO__ !== 0) throw TypeError("Not a promise");
          this.__NPO__ = 1;
          var _ = new p(this);
          (this.then = function (S, w) {
            var C = {
              success: typeof S == "function" ? S : !0,
              failure: typeof w == "function" ? w : !1,
            };
            return (
              (C.promise = new this.constructor(function (O, T) {
                if (typeof O != "function" || typeof T != "function")
                  throw TypeError("Not a function");
                (C.resolve = O), (C.reject = T);
              })),
              _.chain.push(C),
              _.state !== 0 && o(c, _),
              C.promise
            );
          }),
            (this.catch = function (S) {
              return this.then(void 0, S);
            });
          try {
            v.call(
              void 0,
              function (S) {
                f.call(_, S);
              },
              function (S) {
                d.call(_, S);
              }
            );
          } catch (x) {
            d.call(_, x);
          }
        }
        var y = n({}, "constructor", g, !1);
        return (
          (g.prototype = y),
          n(y, "__NPO__", 0, !1),
          n(g, "resolve", function (_) {
            var x = this;
            return _ && typeof _ == "object" && _.__NPO__ === 1
              ? _
              : new x(function (w, C) {
                  if (typeof w != "function" || typeof C != "function")
                    throw TypeError("Not a function");
                  w(_);
                });
          }),
          n(g, "reject", function (_) {
            return new this(function (S, w) {
              if (typeof S != "function" || typeof w != "function")
                throw TypeError("Not a function");
              w(_);
            });
          }),
          n(g, "all", function (_) {
            var x = this;
            return s.call(_) != "[object Array]"
              ? x.reject(TypeError("Not an array"))
              : _.length === 0
              ? x.resolve([])
              : new x(function (w, C) {
                  if (typeof w != "function" || typeof C != "function")
                    throw TypeError("Not a function");
                  var P = _.length,
                    O = Array(P),
                    T = 0;
                  h(
                    x,
                    _,
                    function (b, E) {
                      (O[b] = E), ++T === P && w(O);
                    },
                    C
                  );
                });
          }),
          n(g, "race", function (_) {
            var x = this;
            return s.call(_) != "[object Array]"
              ? x.reject(TypeError("Not an array"))
              : new x(function (w, C) {
                  if (typeof w != "function" || typeof C != "function")
                    throw TypeError("Not a function");
                  h(
                    x,
                    _,
                    function (O, T) {
                      w(T);
                    },
                    C
                  );
                });
          }),
          g
        );
      });
    }),
    Mn = new WeakMap();
  function qi(t, e, n) {
    var r = Mn.get(t.element) || {};
    e in r || (r[e] = []), r[e].push(n), Mn.set(t.element, r);
  }
  function Vs(t, e) {
    var n = Mn.get(t.element) || {};
    return n[e] || [];
  }
  function Ws(t, e, n) {
    var r = Mn.get(t.element) || {};
    if (!r[e]) return !0;
    if (!n) return (r[e] = []), Mn.set(t.element, r), !0;
    var i = r[e].indexOf(n);
    return (
      i !== -1 && r[e].splice(i, 1),
      Mn.set(t.element, r),
      r[e] && r[e].length === 0
    );
  }
  function Ph(t, e) {
    var n = Vs(t, e);
    if (n.length < 1) return !1;
    var r = n.shift();
    return Ws(t, e, r), r;
  }
  function kh(t, e) {
    var n = Mn.get(t);
    Mn.set(e, n), Mn.delete(t);
  }
  function Xs(t) {
    if (typeof t == "string")
      try {
        t = JSON.parse(t);
      } catch (e) {
        return console.warn(e), {};
      }
    return t;
  }
  function yr(t, e, n) {
    if (!(!t.element.contentWindow || !t.element.contentWindow.postMessage)) {
      var r = { method: e };
      n !== void 0 && (r.value = n);
      var i = parseFloat(
        navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1")
      );
      i >= 8 && i < 10 && (r = JSON.stringify(r)),
        t.element.contentWindow.postMessage(r, t.origin);
    }
  }
  function Mh(t, e) {
    e = Xs(e);
    var n = [],
      r;
    if (e.event) {
      if (e.event === "error") {
        var i = Vs(t, e.data.method);
        i.forEach(function (a) {
          var o = new Error(e.data.message);
          (o.name = e.data.name), a.reject(o), Ws(t, e.data.method, a);
        });
      }
      (n = Vs(t, "event:".concat(e.event))), (r = e.data);
    } else if (e.method) {
      var s = Ph(t, e.method);
      s && (n.push(s), (r = e.value));
    }
    n.forEach(function (a) {
      try {
        if (typeof a == "function") {
          a.call(t, r);
          return;
        }
        a.resolve(r);
      } catch (o) {}
    });
  }
  var $h = [
    "airplay",
    "audio_tracks",
    "audiotrack",
    "autopause",
    "autoplay",
    "background",
    "byline",
    "cc",
    "chapter_id",
    "chapters",
    "chromecast",
    "color",
    "colors",
    "controls",
    "dnt",
    "end_time",
    "fullscreen",
    "height",
    "id",
    "interactive_params",
    "keyboard",
    "loop",
    "maxheight",
    "maxwidth",
    "muted",
    "play_button_position",
    "playsinline",
    "portrait",
    "progress_bar",
    "quality_selector",
    "responsive",
    "skipping_forward",
    "speed",
    "start_time",
    "texttrack",
    "title",
    "transcript",
    "transparent",
    "unmute_button",
    "url",
    "vimeo_logo",
    "volume",
    "watch_full_video",
    "width",
  ];
  function Pc(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return $h.reduce(function (n, r) {
      var i = t.getAttribute("data-vimeo-".concat(r));
      return (i || i === "") && (n[r] = i === "" ? 1 : i), n;
    }, e);
  }
  function so(t, e) {
    var n = t.html;
    if (!e) throw new TypeError("An element must be provided");
    if (e.getAttribute("data-vimeo-initialized") !== null)
      return e.querySelector("iframe");
    var r = document.createElement("div");
    return (
      (r.innerHTML = n),
      e.appendChild(r.firstChild),
      e.setAttribute("data-vimeo-initialized", "true"),
      e.querySelector("iframe")
    );
  }
  function kc(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = arguments.length > 2 ? arguments[2] : void 0;
    return new Promise(function (r, i) {
      if (!vr(t))
        throw new TypeError("“".concat(t, "” is not a vimeo.com url."));
      var s = Th(t),
        a = "https://"
          .concat(s, "/api/oembed.json?url=")
          .concat(encodeURIComponent(t));
      for (var o in e)
        e.hasOwnProperty(o) &&
          (a += "&".concat(o, "=").concat(encodeURIComponent(e[o])));
      var l =
        "XDomainRequest" in window
          ? new XDomainRequest()
          : new XMLHttpRequest();
      l.open("GET", a, !0),
        (l.onload = function () {
          if (l.status === 404) {
            i(new Error("“".concat(t, "” was not found.")));
            return;
          }
          if (l.status === 403) {
            i(new Error("“".concat(t, "” is not embeddable.")));
            return;
          }
          try {
            var c = JSON.parse(l.responseText);
            if (c.domain_status_code === 403) {
              so(c, n), i(new Error("“".concat(t, "” is not embeddable.")));
              return;
            }
            r(c);
          } catch (u) {
            i(u);
          }
        }),
        (l.onerror = function () {
          var c = l.status ? " (".concat(l.status, ")") : "";
          i(
            new Error(
              "There was an error fetching the embed code from Vimeo".concat(
                c,
                "."
              )
            )
          );
        }),
        l.send();
    });
  }
  function Oh() {
    var t =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : document,
      e = [].slice.call(
        t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")
      ),
      n = function (i) {
        "console" in window &&
          console.error &&
          console.error("There was an error creating an embed: ".concat(i));
      };
    e.forEach(function (r) {
      try {
        if (r.getAttribute("data-vimeo-defer") !== null) return;
        var i = Pc(r),
          s = wc(i);
        kc(s, i, r)
          .then(function (a) {
            return so(a, r);
          })
          .catch(n);
      } catch (a) {
        n(a);
      }
    });
  }
  function Ah() {
    var t =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoPlayerResizeEmbeds_) {
      window.VimeoPlayerResizeEmbeds_ = !0;
      var e = function (r) {
        if (vr(r.origin) && !(!r.data || r.data.event !== "spacechange")) {
          for (var i = t.querySelectorAll("iframe"), s = 0; s < i.length; s++)
            if (i[s].contentWindow === r.source) {
              var a = i[s].parentElement;
              a.style.paddingBottom = "".concat(r.data.data[0].bottom, "px");
              break;
            }
        }
      };
      window.addEventListener("message", e);
    }
  }
  function Lh() {
    var t =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoSeoMetadataAppended) {
      window.VimeoSeoMetadataAppended = !0;
      var e = function (r) {
        if (vr(r.origin)) {
          var i = Xs(r.data);
          if (!(!i || i.event !== "ready"))
            for (
              var s = t.querySelectorAll("iframe"), a = 0;
              a < s.length;
              a++
            ) {
              var o = s[a],
                l = o.contentWindow === r.source;
              if (Ec(o.src) && l) {
                var c = new Ys(o);
                c.callMethod("appendVideoMetadata", window.location.href);
              }
            }
        }
      };
      window.addEventListener("message", e);
    }
  }
  function Ih() {
    var t =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoCheckedUrlTimeParam) {
      window.VimeoCheckedUrlTimeParam = !0;
      var e = function (i) {
          "console" in window &&
            console.error &&
            console.error("There was an error getting video Id: ".concat(i));
        },
        n = function (i) {
          if (vr(i.origin)) {
            var s = Xs(i.data);
            if (!(!s || s.event !== "ready"))
              for (
                var a = t.querySelectorAll("iframe"),
                  o = function () {
                    var u = a[l],
                      f = u.contentWindow === i.source;
                    if (Ec(u.src) && f) {
                      var d = new Ys(u);
                      d.getVideoId()
                        .then(function (h) {
                          var m = new RegExp(
                            "[?&]vimeo_t_".concat(h, "=([^&#]*)")
                          ).exec(window.location.href);
                          if (m && m[1]) {
                            var p = decodeURI(m[1]);
                            d.setCurrentTime(p);
                          }
                        })
                        .catch(e);
                    }
                  },
                  l = 0;
                l < a.length;
                l++
              )
                o();
          }
        };
      window.addEventListener("message", n);
    }
  }
  function Dh() {
    var t = (function () {
        for (
          var r,
            i = [
              [
                "requestFullscreen",
                "exitFullscreen",
                "fullscreenElement",
                "fullscreenEnabled",
                "fullscreenchange",
                "fullscreenerror",
              ],
              [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
              ],
              [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
              ],
              [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror",
              ],
              [
                "msRequestFullscreen",
                "msExitFullscreen",
                "msFullscreenElement",
                "msFullscreenEnabled",
                "MSFullscreenChange",
                "MSFullscreenError",
              ],
            ],
            s = 0,
            a = i.length,
            o = {};
          s < a;
          s++
        )
          if (((r = i[s]), r && r[1] in document)) {
            for (s = 0; s < r.length; s++) o[i[0][s]] = r[s];
            return o;
          }
        return !1;
      })(),
      e = {
        fullscreenchange: t.fullscreenchange,
        fullscreenerror: t.fullscreenerror,
      },
      n = {
        request: function (i) {
          return new Promise(function (s, a) {
            var o = function c() {
              n.off("fullscreenchange", c), s();
            };
            n.on("fullscreenchange", o), (i = i || document.documentElement);
            var l = i[t.requestFullscreen]();
            l instanceof Promise && l.then(o).catch(a);
          });
        },
        exit: function () {
          return new Promise(function (i, s) {
            if (!n.isFullscreen) {
              i();
              return;
            }
            var a = function l() {
              n.off("fullscreenchange", l), i();
            };
            n.on("fullscreenchange", a);
            var o = document[t.exitFullscreen]();
            o instanceof Promise && o.then(a).catch(s);
          });
        },
        on: function (i, s) {
          var a = e[i];
          a && document.addEventListener(a, s);
        },
        off: function (i, s) {
          var a = e[i];
          a && document.removeEventListener(a, s);
        },
      };
    return (
      Object.defineProperties(n, {
        isFullscreen: {
          get: function () {
            return !!document[t.fullscreenElement];
          },
        },
        element: {
          enumerable: !0,
          get: function () {
            return document[t.fullscreenElement];
          },
        },
        isEnabled: {
          enumerable: !0,
          get: function () {
            return !!document[t.fullscreenEnabled];
          },
        },
      }),
      n
    );
  }
  var zh = {
      role: "viewer",
      autoPlayMuted: !0,
      allowedDrift: 0.3,
      maxAllowedDrift: 1,
      minCheckInterval: 0.1,
      maxRateAdjustment: 0.2,
      maxTimeToCatchUp: 1,
    },
    Rh = (function (t) {
      Ni(n, t);
      var e = _h(n);
      function n(r, i) {
        var s,
          a =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          o = arguments.length > 3 ? arguments[3] : void 0;
        return (
          Bs(this, n),
          (s = e.call(this)),
          Wt(Hs(s), "logger", void 0),
          Wt(Hs(s), "speedAdjustment", 0),
          Wt(
            Hs(s),
            "adjustSpeed",
            (function () {
              var l = dn(
                ue().mark(function c(u, f) {
                  var d;
                  return ue().wrap(function (m) {
                    for (;;)
                      switch ((m.prev = m.next)) {
                        case 0:
                          if (s.speedAdjustment !== f) {
                            m.next = 2;
                            break;
                          }
                          return m.abrupt("return");
                        case 2:
                          return (m.next = 4), u.getPlaybackRate();
                        case 4:
                          return (
                            (m.t0 = m.sent),
                            (m.t1 = s.speedAdjustment),
                            (m.t2 = m.t0 - m.t1),
                            (m.t3 = f),
                            (d = m.t2 + m.t3),
                            s.log("New playbackRate:  ".concat(d)),
                            (m.next = 12),
                            u.setPlaybackRate(d)
                          );
                        case 12:
                          s.speedAdjustment = f;
                        case 13:
                        case "end":
                          return m.stop();
                      }
                  }, c);
                })
              );
              return function (c, u) {
                return l.apply(this, arguments);
              };
            })()
          ),
          (s.logger = o),
          s.init(i, r, We(We({}, zh), a)),
          s
        );
      }
      return (
        Jr(n, [
          {
            key: "disconnect",
            value: function () {
              this.dispatchEvent(new Event("disconnect"));
            },
          },
          {
            key: "init",
            value: (function () {
              var r = dn(
                ue().mark(function s(a, o, l) {
                  var c = this,
                    u,
                    f,
                    d;
                  return ue().wrap(
                    function (m) {
                      for (;;)
                        switch ((m.prev = m.next)) {
                          case 0:
                            return (
                              (m.next = 2), this.waitForTOReadyState(a, "open")
                            );
                          case 2:
                            if (l.role !== "viewer") {
                              m.next = 10;
                              break;
                            }
                            return (m.next = 5), this.updatePlayer(a, o, l);
                          case 5:
                            (u = Cc(a, "change", function () {
                              return c.updatePlayer(a, o, l);
                            })),
                              (f = this.maintainPlaybackPosition(a, o, l)),
                              this.addEventListener("disconnect", function () {
                                f.cancel(), u.cancel();
                              }),
                              (m.next = 14);
                            break;
                          case 10:
                            return (m.next = 12), this.updateTimingObject(a, o);
                          case 12:
                            (d = Cc(
                              o,
                              ["seeked", "play", "pause", "ratechange"],
                              function () {
                                return c.updateTimingObject(a, o);
                              },
                              "on",
                              "off"
                            )),
                              this.addEventListener("disconnect", function () {
                                return d.cancel();
                              });
                          case 14:
                          case "end":
                            return m.stop();
                        }
                    },
                    s,
                    this
                  );
                })
              );
              function i(s, a, o) {
                return r.apply(this, arguments);
              }
              return i;
            })(),
          },
          {
            key: "updateTimingObject",
            value: (function () {
              var r = dn(
                ue().mark(function s(a, o) {
                  return ue().wrap(function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          return (c.t0 = a), (c.next = 3), o.getCurrentTime();
                        case 3:
                          return (c.t1 = c.sent), (c.next = 6), o.getPaused();
                        case 6:
                          if (!c.sent) {
                            c.next = 10;
                            break;
                          }
                          (c.t2 = 0), (c.next = 13);
                          break;
                        case 10:
                          return (c.next = 12), o.getPlaybackRate();
                        case 12:
                          c.t2 = c.sent;
                        case 13:
                          (c.t3 = c.t2),
                            (c.t4 = { position: c.t1, velocity: c.t3 }),
                            c.t0.update.call(c.t0, c.t4);
                        case 16:
                        case "end":
                          return c.stop();
                      }
                  }, s);
                })
              );
              function i(s, a) {
                return r.apply(this, arguments);
              }
              return i;
            })(),
          },
          {
            key: "updatePlayer",
            value: (function () {
              var r = dn(
                ue().mark(function s(a, o, l) {
                  var c, u, f;
                  return ue().wrap(
                    function (h) {
                      for (;;)
                        switch ((h.prev = h.next)) {
                          case 0:
                            if (
                              ((c = a.query()),
                              (u = c.position),
                              (f = c.velocity),
                              typeof u == "number" && o.setCurrentTime(u),
                              typeof f != "number")
                            ) {
                              h.next = 25;
                              break;
                            }
                            if (f !== 0) {
                              h.next = 11;
                              break;
                            }
                            return (h.next = 6), o.getPaused();
                          case 6:
                            if (((h.t0 = h.sent), h.t0 !== !1)) {
                              h.next = 9;
                              break;
                            }
                            o.pause();
                          case 9:
                            h.next = 25;
                            break;
                          case 11:
                            if (!(f > 0)) {
                              h.next = 25;
                              break;
                            }
                            return (h.next = 14), o.getPaused();
                          case 14:
                            if (((h.t1 = h.sent), h.t1 !== !0)) {
                              h.next = 19;
                              break;
                            }
                            return (
                              (h.next = 18),
                              o.play().catch(
                                (function () {
                                  var m = dn(
                                    ue().mark(function p(g) {
                                      return ue().wrap(function (v) {
                                        for (;;)
                                          switch ((v.prev = v.next)) {
                                            case 0:
                                              if (
                                                !(
                                                  g.name ===
                                                    "NotAllowedError" &&
                                                  l.autoPlayMuted
                                                )
                                              ) {
                                                v.next = 5;
                                                break;
                                              }
                                              return (
                                                (v.next = 3), o.setMuted(!0)
                                              );
                                            case 3:
                                              return (
                                                (v.next = 5),
                                                o.play().catch(function (_) {
                                                  return console.error(
                                                    "Couldn't play the video from TimingSrcConnector. Error:",
                                                    _
                                                  );
                                                })
                                              );
                                            case 5:
                                            case "end":
                                              return v.stop();
                                          }
                                      }, p);
                                    })
                                  );
                                  return function (p) {
                                    return m.apply(this, arguments);
                                  };
                                })()
                              )
                            );
                          case 18:
                            this.updatePlayer(a, o, l);
                          case 19:
                            return (h.next = 21), o.getPlaybackRate();
                          case 21:
                            if (((h.t2 = h.sent), (h.t3 = f), h.t2 === h.t3)) {
                              h.next = 25;
                              break;
                            }
                            o.setPlaybackRate(f);
                          case 25:
                          case "end":
                            return h.stop();
                        }
                    },
                    s,
                    this
                  );
                })
              );
              function i(s, a, o) {
                return r.apply(this, arguments);
              }
              return i;
            })(),
          },
          {
            key: "maintainPlaybackPosition",
            value: function (i, s, a) {
              var o = this,
                l = a.allowedDrift,
                c = a.maxAllowedDrift,
                u = a.minCheckInterval,
                f = a.maxRateAdjustment,
                d = a.maxTimeToCatchUp,
                h = Math.min(d, Math.max(u, c)) * 1e3,
                m = (function () {
                  var g = dn(
                    ue().mark(function y() {
                      var v, _, x, S, w;
                      return ue().wrap(function (P) {
                        for (;;)
                          switch ((P.prev = P.next)) {
                            case 0:
                              if (((P.t0 = i.query().velocity === 0), P.t0)) {
                                P.next = 6;
                                break;
                              }
                              return (P.next = 4), s.getPaused();
                            case 4:
                              (P.t1 = P.sent), (P.t0 = P.t1 === !0);
                            case 6:
                              if (!P.t0) {
                                P.next = 8;
                                break;
                              }
                              return P.abrupt("return");
                            case 8:
                              return (
                                (P.t2 = i.query().position),
                                (P.next = 11),
                                s.getCurrentTime()
                              );
                            case 11:
                              if (
                                ((P.t3 = P.sent),
                                (v = P.t2 - P.t3),
                                (_ = Math.abs(v)),
                                o.log("Drift: ".concat(v)),
                                !(_ > c))
                              ) {
                                P.next = 22;
                                break;
                              }
                              return (P.next = 18), o.adjustSpeed(s, 0);
                            case 18:
                              s.setCurrentTime(i.query().position),
                                o.log("Resync by currentTime"),
                                (P.next = 29);
                              break;
                            case 22:
                              if (!(_ > l)) {
                                P.next = 29;
                                break;
                              }
                              return (
                                (x = _ / d),
                                (S = f),
                                (w = x < S ? (S - x) / 2 : S),
                                (P.next = 28),
                                o.adjustSpeed(s, w * Math.sign(v))
                              );
                            case 28:
                              o.log("Resync by playbackRate");
                            case 29:
                            case "end":
                              return P.stop();
                          }
                      }, y);
                    })
                  );
                  return function () {
                    return g.apply(this, arguments);
                  };
                })(),
                p = setInterval(function () {
                  return m();
                }, h);
              return {
                cancel: function () {
                  return clearInterval(p);
                },
              };
            },
          },
          {
            key: "log",
            value: function (i) {
              var s;
              (s = this.logger) === null ||
                s === void 0 ||
                s.call(this, "TimingSrcConnector: ".concat(i));
            },
          },
          {
            key: "waitForTOReadyState",
            value: function (i, s) {
              return new Promise(function (a) {
                var o = function l() {
                  i.readyState === s
                    ? a()
                    : i.addEventListener("readystatechange", l, { once: !0 });
                };
                o();
              });
            },
          },
        ]),
        n
      );
    })(io(EventTarget)),
    ti = new WeakMap(),
    ao = new WeakMap(),
    Tt = {},
    Ys = (function () {
      function t(e) {
        var n = this,
          r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (
          (Bs(this, t),
          window.jQuery &&
            e instanceof jQuery &&
            (e.length > 1 &&
              window.console &&
              console.warn &&
              console.warn(
                "A jQuery object with multiple elements was passed, using the first element."
              ),
            (e = e[0])),
          typeof document != "undefined" &&
            typeof e == "string" &&
            (e = document.getElementById(e)),
          !xh(e))
        )
          throw new TypeError(
            "You must pass either a valid element or a valid id."
          );
        if (e.nodeName !== "IFRAME") {
          var i = e.querySelector("iframe");
          i && (e = i);
        }
        if (e.nodeName === "IFRAME" && !vr(e.getAttribute("src") || ""))
          throw new Error("The player element passed isn’t a Vimeo embed.");
        if (ti.has(e)) return ti.get(e);
        (this._window = e.ownerDocument.defaultView),
          (this.element = e),
          (this.origin = "*");
        var s = new Xt(function (o, l) {
          if (
            ((n._onMessage = function (f) {
              if (!(!vr(f.origin) || n.element.contentWindow !== f.source)) {
                n.origin === "*" && (n.origin = f.origin);
                var d = Xs(f.data),
                  h = d && d.event === "error",
                  m = h && d.data && d.data.method === "ready";
                if (m) {
                  var p = new Error(d.data.message);
                  (p.name = d.data.name), l(p);
                  return;
                }
                var g = d && d.event === "ready",
                  y = d && d.method === "ping";
                if (g || y) {
                  n.element.setAttribute("data-ready", "true"), o();
                  return;
                }
                Mh(n, d);
              }
            }),
            n._window.addEventListener("message", n._onMessage),
            n.element.nodeName !== "IFRAME")
          ) {
            var c = Pc(e, r),
              u = wc(c);
            kc(u, c, e)
              .then(function (f) {
                var d = so(f, e);
                return (
                  (n.element = d),
                  (n._originalElement = e),
                  kh(e, d),
                  ti.set(n.element, n),
                  f
                );
              })
              .catch(l);
          }
        });
        if (
          (ao.set(this, s),
          ti.set(this.element, this),
          this.element.nodeName === "IFRAME" && yr(this, "ping"),
          Tt.isEnabled)
        ) {
          var a = function () {
            return Tt.exit();
          };
          (this.fullscreenchangeHandler = function () {
            Tt.isFullscreen
              ? qi(n, "event:exitFullscreen", a)
              : Ws(n, "event:exitFullscreen", a),
              n.ready().then(function () {
                yr(n, "fullscreenchange", Tt.isFullscreen);
              });
          }),
            Tt.on("fullscreenchange", this.fullscreenchangeHandler);
        }
        return this;
      }
      return (
        Jr(t, [
          {
            key: "callMethod",
            value: function (n) {
              var r = this,
                i =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
              return new Xt(function (s, a) {
                return r
                  .ready()
                  .then(function () {
                    qi(r, n, { resolve: s, reject: a }), yr(r, n, i);
                  })
                  .catch(a);
              });
            },
          },
          {
            key: "get",
            value: function (n) {
              var r = this;
              return new Xt(function (i, s) {
                return (
                  (n = Tc(n, "get")),
                  r
                    .ready()
                    .then(function () {
                      qi(r, n, { resolve: i, reject: s }), yr(r, n);
                    })
                    .catch(s)
                );
              });
            },
          },
          {
            key: "set",
            value: function (n, r) {
              var i = this;
              return new Xt(function (s, a) {
                if (((n = Tc(n, "set")), r == null))
                  throw new TypeError("There must be a value to set.");
                return i
                  .ready()
                  .then(function () {
                    qi(i, n, { resolve: s, reject: a }), yr(i, n, r);
                  })
                  .catch(a);
              });
            },
          },
          {
            key: "on",
            value: function (n, r) {
              if (!n) throw new TypeError("You must pass an event name.");
              if (!r) throw new TypeError("You must pass a callback function.");
              if (typeof r != "function")
                throw new TypeError("The callback must be a function.");
              var i = Vs(this, "event:".concat(n));
              i.length === 0 &&
                this.callMethod("addEventListener", n).catch(function () {}),
                qi(this, "event:".concat(n), r);
            },
          },
          {
            key: "off",
            value: function (n, r) {
              if (!n) throw new TypeError("You must pass an event name.");
              if (r && typeof r != "function")
                throw new TypeError("The callback must be a function.");
              var i = Ws(this, "event:".concat(n), r);
              i &&
                this.callMethod("removeEventListener", n).catch(function (
                  s
                ) {});
            },
          },
          {
            key: "loadVideo",
            value: function (n) {
              return this.callMethod("loadVideo", n);
            },
          },
          {
            key: "ready",
            value: function () {
              var n =
                ao.get(this) ||
                new Xt(function (r, i) {
                  i(new Error("Unknown player. Probably unloaded."));
                });
              return Xt.resolve(n);
            },
          },
          {
            key: "addCuePoint",
            value: function (n) {
              var r =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
              return this.callMethod("addCuePoint", { time: n, data: r });
            },
          },
          {
            key: "removeCuePoint",
            value: function (n) {
              return this.callMethod("removeCuePoint", n);
            },
          },
          {
            key: "enableTextTrack",
            value: function (n, r) {
              if (!n) throw new TypeError("You must pass a language.");
              return this.callMethod("enableTextTrack", {
                language: n,
                kind: r,
              });
            },
          },
          {
            key: "disableTextTrack",
            value: function () {
              return this.callMethod("disableTextTrack");
            },
          },
          {
            key: "pause",
            value: function () {
              return this.callMethod("pause");
            },
          },
          {
            key: "play",
            value: function () {
              return this.callMethod("play");
            },
          },
          {
            key: "requestFullscreen",
            value: function () {
              return Tt.isEnabled
                ? Tt.request(this.element)
                : this.callMethod("requestFullscreen");
            },
          },
          {
            key: "exitFullscreen",
            value: function () {
              return Tt.isEnabled
                ? Tt.exit()
                : this.callMethod("exitFullscreen");
            },
          },
          {
            key: "getFullscreen",
            value: function () {
              return Tt.isEnabled
                ? Xt.resolve(Tt.isFullscreen)
                : this.get("fullscreen");
            },
          },
          {
            key: "requestPictureInPicture",
            value: function () {
              return this.callMethod("requestPictureInPicture");
            },
          },
          {
            key: "exitPictureInPicture",
            value: function () {
              return this.callMethod("exitPictureInPicture");
            },
          },
          {
            key: "getPictureInPicture",
            value: function () {
              return this.get("pictureInPicture");
            },
          },
          {
            key: "remotePlaybackPrompt",
            value: function () {
              return this.callMethod("remotePlaybackPrompt");
            },
          },
          {
            key: "unload",
            value: function () {
              return this.callMethod("unload");
            },
          },
          {
            key: "destroy",
            value: function () {
              var n = this;
              return new Xt(function (r) {
                if (
                  (ao.delete(n),
                  ti.delete(n.element),
                  n._originalElement &&
                    (ti.delete(n._originalElement),
                    n._originalElement.removeAttribute(
                      "data-vimeo-initialized"
                    )),
                  n.element &&
                    n.element.nodeName === "IFRAME" &&
                    n.element.parentNode &&
                    (n.element.parentNode.parentNode &&
                    n._originalElement &&
                    n._originalElement !== n.element.parentNode
                      ? n.element.parentNode.parentNode.removeChild(
                          n.element.parentNode
                        )
                      : n.element.parentNode.removeChild(n.element)),
                  n.element &&
                    n.element.nodeName === "DIV" &&
                    n.element.parentNode)
                ) {
                  n.element.removeAttribute("data-vimeo-initialized");
                  var i = n.element.querySelector("iframe");
                  i &&
                    i.parentNode &&
                    (i.parentNode.parentNode &&
                    n._originalElement &&
                    n._originalElement !== i.parentNode
                      ? i.parentNode.parentNode.removeChild(i.parentNode)
                      : i.parentNode.removeChild(i));
                }
                n._window.removeEventListener("message", n._onMessage),
                  Tt.isEnabled &&
                    Tt.off("fullscreenchange", n.fullscreenchangeHandler),
                  r();
              });
            },
          },
          {
            key: "getAutopause",
            value: function () {
              return this.get("autopause");
            },
          },
          {
            key: "setAutopause",
            value: function (n) {
              return this.set("autopause", n);
            },
          },
          {
            key: "getBuffered",
            value: function () {
              return this.get("buffered");
            },
          },
          {
            key: "getCameraProps",
            value: function () {
              return this.get("cameraProps");
            },
          },
          {
            key: "setCameraProps",
            value: function (n) {
              return this.set("cameraProps", n);
            },
          },
          {
            key: "getChapters",
            value: function () {
              return this.get("chapters");
            },
          },
          {
            key: "getCurrentChapter",
            value: function () {
              return this.get("currentChapter");
            },
          },
          {
            key: "getColor",
            value: function () {
              return this.get("color");
            },
          },
          {
            key: "getColors",
            value: function () {
              return Xt.all([
                this.get("colorOne"),
                this.get("colorTwo"),
                this.get("colorThree"),
                this.get("colorFour"),
              ]);
            },
          },
          {
            key: "setColor",
            value: function (n) {
              return this.set("color", n);
            },
          },
          {
            key: "setColors",
            value: function (n) {
              if (!Array.isArray(n))
                return new Xt(function (s, a) {
                  return a(new TypeError("Argument must be an array."));
                });
              var r = new Xt(function (s) {
                  return s(null);
                }),
                i = [
                  n[0] ? this.set("colorOne", n[0]) : r,
                  n[1] ? this.set("colorTwo", n[1]) : r,
                  n[2] ? this.set("colorThree", n[2]) : r,
                  n[3] ? this.set("colorFour", n[3]) : r,
                ];
              return Xt.all(i);
            },
          },
          {
            key: "getCuePoints",
            value: function () {
              return this.get("cuePoints");
            },
          },
          {
            key: "getCurrentTime",
            value: function () {
              return this.get("currentTime");
            },
          },
          {
            key: "setCurrentTime",
            value: function (n) {
              return this.set("currentTime", n);
            },
          },
          {
            key: "getDuration",
            value: function () {
              return this.get("duration");
            },
          },
          {
            key: "getEnded",
            value: function () {
              return this.get("ended");
            },
          },
          {
            key: "getLoop",
            value: function () {
              return this.get("loop");
            },
          },
          {
            key: "setLoop",
            value: function (n) {
              return this.set("loop", n);
            },
          },
          {
            key: "setMuted",
            value: function (n) {
              return this.set("muted", n);
            },
          },
          {
            key: "getMuted",
            value: function () {
              return this.get("muted");
            },
          },
          {
            key: "getPaused",
            value: function () {
              return this.get("paused");
            },
          },
          {
            key: "getPlaybackRate",
            value: function () {
              return this.get("playbackRate");
            },
          },
          {
            key: "setPlaybackRate",
            value: function (n) {
              return this.set("playbackRate", n);
            },
          },
          {
            key: "getPlayed",
            value: function () {
              return this.get("played");
            },
          },
          {
            key: "getQualities",
            value: function () {
              return this.get("qualities");
            },
          },
          {
            key: "getQuality",
            value: function () {
              return this.get("quality");
            },
          },
          {
            key: "setQuality",
            value: function (n) {
              return this.set("quality", n);
            },
          },
          {
            key: "getRemotePlaybackAvailability",
            value: function () {
              return this.get("remotePlaybackAvailability");
            },
          },
          {
            key: "getRemotePlaybackState",
            value: function () {
              return this.get("remotePlaybackState");
            },
          },
          {
            key: "getSeekable",
            value: function () {
              return this.get("seekable");
            },
          },
          {
            key: "getSeeking",
            value: function () {
              return this.get("seeking");
            },
          },
          {
            key: "getTextTracks",
            value: function () {
              return this.get("textTracks");
            },
          },
          {
            key: "getVideoEmbedCode",
            value: function () {
              return this.get("videoEmbedCode");
            },
          },
          {
            key: "getVideoId",
            value: function () {
              return this.get("videoId");
            },
          },
          {
            key: "getVideoTitle",
            value: function () {
              return this.get("videoTitle");
            },
          },
          {
            key: "getVideoWidth",
            value: function () {
              return this.get("videoWidth");
            },
          },
          {
            key: "getVideoHeight",
            value: function () {
              return this.get("videoHeight");
            },
          },
          {
            key: "getVideoUrl",
            value: function () {
              return this.get("videoUrl");
            },
          },
          {
            key: "getVolume",
            value: function () {
              return this.get("volume");
            },
          },
          {
            key: "setVolume",
            value: function (n) {
              return this.set("volume", n);
            },
          },
          {
            key: "setTimingSrc",
            value: (function () {
              var e = dn(
                ue().mark(function r(i, s) {
                  var a = this,
                    o;
                  return ue().wrap(
                    function (c) {
                      for (;;)
                        switch ((c.prev = c.next)) {
                          case 0:
                            if (i) {
                              c.next = 2;
                              break;
                            }
                            throw new TypeError(
                              "A Timing Object must be provided."
                            );
                          case 2:
                            return (c.next = 4), this.ready();
                          case 4:
                            return (
                              (o = new Rh(this, i, s)),
                              yr(this, "notifyTimingObjectConnect"),
                              o.addEventListener("disconnect", function () {
                                return yr(a, "notifyTimingObjectDisconnect");
                              }),
                              c.abrupt("return", o)
                            );
                          case 8:
                          case "end":
                            return c.stop();
                        }
                    },
                    r,
                    this
                  );
                })
              );
              function n(r, i) {
                return e.apply(this, arguments);
              }
              return n;
            })(),
          },
        ]),
        t
      );
    })();
  Sc || ((Tt = Dh()), Oh(), Ah(), Lh(), Ih());
  class Nh {
    constructor() {
      typeof Ys != "undefined"
        ? this.init()
        : console.error("Vimeo Player SDK not available");
    }
    init() {
      document.querySelectorAll("[data-vimeo-player-init]").length > 0 &&
        this.initVimeoPlayer();
    }
    initVimeoPlayer() {
      document.querySelectorAll("[data-vimeo-player-init]").forEach((n, r) => {
        try {
          let v = function (T) {
              let M = Math.floor(T / 3600);
              T -= M * 3600;
              let b = Math.floor(T / 60);
              return (T -= b * 60), b + ":" + (T < 10 ? "0" + T : T);
            },
            w = function () {
              c.getDuration().then(function () {
                const T = x.value;
                c.setCurrentTime(T), S && (S.value = T);
              });
            },
            P = function () {
              n.setAttribute("data-vimeo-hover", "false");
            },
            O = function () {
              n.setAttribute("data-vimeo-activated", "false"),
                n.setAttribute("data-vimeo-playing", "false"),
                c.unload();
            };
          const i = n.getAttribute("data-vimeo-video-id");
          if (!i) return;
          const s = n.querySelector("iframe");
          if (!s) {
            console.error("No iframe found in vimeo player element", n);
            return;
          }
          const a = `https://player.vimeo.com/video/${i}?api=1&background=1&autoplay=0&loop=0&muted=1`;
          s.setAttribute("src", a);
          const o = "vimeo-player-index-" + r;
          n.setAttribute("id", o);
          const l = n.id,
            c = new Ys(s);
          if (
            (n.getAttribute("data-vimeo-update-size") === "true" &&
              c.getVideoWidth().then(function (T) {
                c.getVideoHeight().then(function (M) {
                  const b = n.querySelector(".vimeo-player__before");
                  b && (b.style.paddingTop = (M / T) * 100 + "%");
                });
              }),
            c.on("play", function () {
              n.setAttribute("data-vimeo-loaded", "true");
            }),
            n.getAttribute("data-vimeo-autoplay") === "false")
          )
            c.setVolume(1), c.pause();
          else if (
            (c.setVolume(0),
            n.setAttribute("data-vimeo-muted", "true"),
            n.getAttribute("data-vimeo-paused-by-user") === "false")
          ) {
            const T = () => {
              const M = n.getBoundingClientRect();
              M.top < window.innerHeight && M.bottom > 0 ? u() : f();
            };
            T(), window.addEventListener("scroll", T);
          }
          const u = () => {
              n.setAttribute("data-vimeo-activated", "true"),
                n.setAttribute("data-vimeo-playing", "true"),
                c.play();
            },
            f = () => {
              n.setAttribute("data-vimeo-playing", "false"), c.pause();
            },
            d = n.querySelector('[data-vimeo-control="play"]');
          d &&
            d.addEventListener("click", function () {
              c.setVolume(0),
                u(),
                n.getAttribute("data-vimeo-muted") === "true"
                  ? c.setVolume(0)
                  : c.setVolume(1);
            });
          const h = n.querySelector('[data-vimeo-control="pause"]');
          h &&
            h.addEventListener("click", function () {
              f(),
                n.getAttribute("data-vimeo-autoplay") === "true" &&
                  (n.setAttribute("data-vimeo-paused-by-user", "true"),
                  window.removeEventListener("scroll", checkVisibility));
            });
          const m = n.querySelector('[data-vimeo-control="mute"]');
          m &&
            m.addEventListener("click", function () {
              n.getAttribute("data-vimeo-muted") === "false"
                ? (c.setVolume(0), n.setAttribute("data-vimeo-muted", "true"))
                : (c.setVolume(1), n.setAttribute("data-vimeo-muted", "false"));
            });
          const p = !!(
              document.fullscreenEnabled ||
              document.webkitFullscreenEnabled ||
              document.mozFullScreenEnabled ||
              document.msFullscreenEnabled
            ),
            g = n.querySelector('[data-vimeo-control="fullscreen"]');
          !p && g && (g.style.display = "none"),
            g &&
              g.addEventListener("click", () => {
                const T = document.getElementById(l);
                if (!T) return;
                document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement
                  ? (n.setAttribute("data-vimeo-fullscreen", "false"),
                    (
                      document.exitFullscreen ||
                      document.webkitExitFullscreen ||
                      document.mozCancelFullScreen ||
                      document.msExitFullscreen
                    ).call(document))
                  : (n.setAttribute("data-vimeo-fullscreen", "true"),
                    (
                      T.requestFullscreen ||
                      T.webkitRequestFullscreen ||
                      T.mozRequestFullScreen ||
                      T.msRequestFullscreen
                    ).call(T));
              });
          const y = () => {
            const T =
              document.fullscreenElement ||
              document.webkitFullscreenElement ||
              document.mozFullScreenElement ||
              document.msFullscreenElement;
            n.setAttribute("data-vimeo-fullscreen", T ? "true" : "false");
          };
          [
            "fullscreenchange",
            "webkitfullscreenchange",
            "mozfullscreenchange",
            "msfullscreenchange",
          ].forEach((T) => {
            document.addEventListener(T, y);
          });
          const _ = n.querySelector("[data-vimeo-duration]");
          c.getDuration().then(function (T) {
            _ && (_.textContent = v(T)),
              n
                .querySelectorAll('[data-vimeo-control="timeline"], progress')
                .forEach((b) => {
                  b.setAttribute("max", T);
                });
          });
          const x = n.querySelector('[data-vimeo-control="timeline"]'),
            S = n.querySelector("progress");
          x &&
            ["input", "change"].forEach((T) => {
              x.addEventListener(T, w);
            }),
            c.on("timeupdate", function (T) {
              x && (x.value = T.seconds),
                S && (S.value = T.seconds),
                _ && (_.textContent = v(Math.trunc(T.seconds)));
            });
          let C;
          n.addEventListener("mousemove", function () {
            n.getAttribute("data-vimeo-hover") === "false" &&
              n.setAttribute("data-vimeo-hover", "true"),
              clearTimeout(C),
              (C = setTimeout(P, 3e3));
          }),
            c.on("ended", O);
        } catch (i) {
          console.error("Error initializing Vimeo player:", i);
        }
      });
    }
  }
  const Fh = () => {
    new Nh();
  };
  function Mc(t) {
    return (
      t !== null &&
      typeof t == "object" &&
      "constructor" in t &&
      t.constructor === Object
    );
  }
  function oo(t = {}, e = {}) {
    Object.keys(e).forEach((n) => {
      typeof t[n] == "undefined"
        ? (t[n] = e[n])
        : Mc(e[n]) &&
          Mc(t[n]) &&
          Object.keys(e[n]).length > 0 &&
          oo(t[n], e[n]);
    });
  }
  const $c = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return { initEvent() {} };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return [];
        },
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function Fe() {
    const t = typeof document != "undefined" ? document : {};
    return oo(t, $c), t;
  }
  const Bh = {
    document: $c,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        },
      };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
      return {};
    },
    requestAnimationFrame(t) {
      return typeof setTimeout == "undefined" ? (t(), null) : setTimeout(t, 0);
    },
    cancelAnimationFrame(t) {
      typeof setTimeout != "undefined" && clearTimeout(t);
    },
  };
  function ge() {
    const t = typeof window != "undefined" ? window : {};
    return oo(t, Bh), t;
  }
  function qh(t) {
    const e = t.__proto__;
    Object.defineProperty(t, "__proto__", {
      get() {
        return e;
      },
      set(n) {
        e.__proto__ = n;
      },
    });
  }
  class Wn extends Array {
    constructor(e) {
      typeof e == "number" ? super(e) : (super(...(e || [])), qh(this));
    }
  }
  function Hi(t = []) {
    const e = [];
    return (
      t.forEach((n) => {
        Array.isArray(n) ? e.push(...Hi(n)) : e.push(n);
      }),
      e
    );
  }
  function Oc(t, e) {
    return Array.prototype.filter.call(t, e);
  }
  function Hh(t) {
    const e = [];
    for (let n = 0; n < t.length; n += 1)
      e.indexOf(t[n]) === -1 && e.push(t[n]);
    return e;
  }
  function Vh(t, e) {
    if (typeof t != "string") return [t];
    const n = [],
      r = e.querySelectorAll(t);
    for (let i = 0; i < r.length; i += 1) n.push(r[i]);
    return n;
  }
  function F(t, e) {
    const n = ge(),
      r = Fe();
    let i = [];
    if (!e && t instanceof Wn) return t;
    if (!t) return new Wn(i);
    if (typeof t == "string") {
      const s = t.trim();
      if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
        let a = "div";
        s.indexOf("<li") === 0 && (a = "ul"),
          s.indexOf("<tr") === 0 && (a = "tbody"),
          (s.indexOf("<td") === 0 || s.indexOf("<th") === 0) && (a = "tr"),
          s.indexOf("<tbody") === 0 && (a = "table"),
          s.indexOf("<option") === 0 && (a = "select");
        const o = r.createElement(a);
        o.innerHTML = s;
        for (let l = 0; l < o.childNodes.length; l += 1)
          i.push(o.childNodes[l]);
      } else i = Vh(t.trim(), e || r);
    } else if (t.nodeType || t === n || t === r) i.push(t);
    else if (Array.isArray(t)) {
      if (t instanceof Wn) return t;
      i = t;
    }
    return new Wn(Hh(i));
  }
  F.fn = Wn.prototype;
  function Wh(...t) {
    const e = Hi(t.map((n) => n.split(" ")));
    return (
      this.forEach((n) => {
        n.classList.add(...e);
      }),
      this
    );
  }
  function Xh(...t) {
    const e = Hi(t.map((n) => n.split(" ")));
    return (
      this.forEach((n) => {
        n.classList.remove(...e);
      }),
      this
    );
  }
  function Yh(...t) {
    const e = Hi(t.map((n) => n.split(" ")));
    this.forEach((n) => {
      e.forEach((r) => {
        n.classList.toggle(r);
      });
    });
  }
  function Gh(...t) {
    const e = Hi(t.map((n) => n.split(" ")));
    return (
      Oc(this, (n) => e.filter((r) => n.classList.contains(r)).length > 0)
        .length > 0
    );
  }
  function jh(t, e) {
    if (arguments.length === 1 && typeof t == "string")
      return this[0] ? this[0].getAttribute(t) : void 0;
    for (let n = 0; n < this.length; n += 1)
      if (arguments.length === 2) this[n].setAttribute(t, e);
      else
        for (const r in t) (this[n][r] = t[r]), this[n].setAttribute(r, t[r]);
    return this;
  }
  function Uh(t) {
    for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
    return this;
  }
  function Kh(t) {
    for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
    return this;
  }
  function Zh(t) {
    for (let e = 0; e < this.length; e += 1)
      this[e].style.transitionDuration = typeof t != "string" ? `${t}ms` : t;
    return this;
  }
  function Qh(...t) {
    let [e, n, r, i] = t;
    typeof t[1] == "function" && (([e, r, i] = t), (n = void 0)), i || (i = !1);
    function s(c) {
      const u = c.target;
      if (!u) return;
      const f = c.target.dom7EventData || [];
      if ((f.indexOf(c) < 0 && f.unshift(c), F(u).is(n))) r.apply(u, f);
      else {
        const d = F(u).parents();
        for (let h = 0; h < d.length; h += 1) F(d[h]).is(n) && r.apply(d[h], f);
      }
    }
    function a(c) {
      const u = c && c.target ? c.target.dom7EventData || [] : [];
      u.indexOf(c) < 0 && u.unshift(c), r.apply(this, u);
    }
    const o = e.split(" ");
    let l;
    for (let c = 0; c < this.length; c += 1) {
      const u = this[c];
      if (n)
        for (l = 0; l < o.length; l += 1) {
          const f = o[l];
          u.dom7LiveListeners || (u.dom7LiveListeners = {}),
            u.dom7LiveListeners[f] || (u.dom7LiveListeners[f] = []),
            u.dom7LiveListeners[f].push({ listener: r, proxyListener: s }),
            u.addEventListener(f, s, i);
        }
      else
        for (l = 0; l < o.length; l += 1) {
          const f = o[l];
          u.dom7Listeners || (u.dom7Listeners = {}),
            u.dom7Listeners[f] || (u.dom7Listeners[f] = []),
            u.dom7Listeners[f].push({ listener: r, proxyListener: a }),
            u.addEventListener(f, a, i);
        }
    }
    return this;
  }
  function Jh(...t) {
    let [e, n, r, i] = t;
    typeof t[1] == "function" && (([e, r, i] = t), (n = void 0)), i || (i = !1);
    const s = e.split(" ");
    for (let a = 0; a < s.length; a += 1) {
      const o = s[a];
      for (let l = 0; l < this.length; l += 1) {
        const c = this[l];
        let u;
        if (
          (!n && c.dom7Listeners
            ? (u = c.dom7Listeners[o])
            : n && c.dom7LiveListeners && (u = c.dom7LiveListeners[o]),
          u && u.length)
        )
          for (let f = u.length - 1; f >= 0; f -= 1) {
            const d = u[f];
            (r && d.listener === r) ||
            (r &&
              d.listener &&
              d.listener.dom7proxy &&
              d.listener.dom7proxy === r)
              ? (c.removeEventListener(o, d.proxyListener, i), u.splice(f, 1))
              : r ||
                (c.removeEventListener(o, d.proxyListener, i), u.splice(f, 1));
          }
      }
    }
    return this;
  }
  function ep(...t) {
    const e = ge(),
      n = t[0].split(" "),
      r = t[1];
    for (let i = 0; i < n.length; i += 1) {
      const s = n[i];
      for (let a = 0; a < this.length; a += 1) {
        const o = this[a];
        if (e.CustomEvent) {
          const l = new e.CustomEvent(s, {
            detail: r,
            bubbles: !0,
            cancelable: !0,
          });
          (o.dom7EventData = t.filter((c, u) => u > 0)),
            o.dispatchEvent(l),
            (o.dom7EventData = []),
            delete o.dom7EventData;
        }
      }
    }
    return this;
  }
  function tp(t) {
    const e = this;
    function n(r) {
      r.target === this && (t.call(this, r), e.off("transitionend", n));
    }
    return t && e.on("transitionend", n), this;
  }
  function np(t) {
    if (this.length > 0) {
      if (t) {
        const e = this.styles();
        return (
          this[0].offsetWidth +
          parseFloat(e.getPropertyValue("margin-right")) +
          parseFloat(e.getPropertyValue("margin-left"))
        );
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function rp(t) {
    if (this.length > 0) {
      if (t) {
        const e = this.styles();
        return (
          this[0].offsetHeight +
          parseFloat(e.getPropertyValue("margin-top")) +
          parseFloat(e.getPropertyValue("margin-bottom"))
        );
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function ip() {
    if (this.length > 0) {
      const t = ge(),
        e = Fe(),
        n = this[0],
        r = n.getBoundingClientRect(),
        i = e.body,
        s = n.clientTop || i.clientTop || 0,
        a = n.clientLeft || i.clientLeft || 0,
        o = n === t ? t.scrollY : n.scrollTop,
        l = n === t ? t.scrollX : n.scrollLeft;
      return { top: r.top + o - s, left: r.left + l - a };
    }
    return null;
  }
  function sp() {
    const t = ge();
    return this[0] ? t.getComputedStyle(this[0], null) : {};
  }
  function ap(t, e) {
    const n = ge();
    let r;
    if (arguments.length === 1)
      if (typeof t == "string") {
        if (this[0])
          return n.getComputedStyle(this[0], null).getPropertyValue(t);
      } else {
        for (r = 0; r < this.length; r += 1)
          for (const i in t) this[r].style[i] = t[i];
        return this;
      }
    if (arguments.length === 2 && typeof t == "string") {
      for (r = 0; r < this.length; r += 1) this[r].style[t] = e;
      return this;
    }
    return this;
  }
  function op(t) {
    return t
      ? (this.forEach((e, n) => {
          t.apply(e, [e, n]);
        }),
        this)
      : this;
  }
  function lp(t) {
    const e = Oc(this, t);
    return F(e);
  }
  function cp(t) {
    if (typeof t == "undefined") return this[0] ? this[0].innerHTML : null;
    for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
    return this;
  }
  function up(t) {
    if (typeof t == "undefined")
      return this[0] ? this[0].textContent.trim() : null;
    for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
    return this;
  }
  function fp(t) {
    const e = ge(),
      n = Fe(),
      r = this[0];
    let i, s;
    if (!r || typeof t == "undefined") return !1;
    if (typeof t == "string") {
      if (r.matches) return r.matches(t);
      if (r.webkitMatchesSelector) return r.webkitMatchesSelector(t);
      if (r.msMatchesSelector) return r.msMatchesSelector(t);
      for (i = F(t), s = 0; s < i.length; s += 1) if (i[s] === r) return !0;
      return !1;
    }
    if (t === n) return r === n;
    if (t === e) return r === e;
    if (t.nodeType || t instanceof Wn) {
      for (i = t.nodeType ? [t] : t, s = 0; s < i.length; s += 1)
        if (i[s] === r) return !0;
      return !1;
    }
    return !1;
  }
  function dp() {
    let t = this[0],
      e;
    if (t) {
      for (e = 0; (t = t.previousSibling) !== null; )
        t.nodeType === 1 && (e += 1);
      return e;
    }
  }
  function hp(t) {
    if (typeof t == "undefined") return this;
    const e = this.length;
    if (t > e - 1) return F([]);
    if (t < 0) {
      const n = e + t;
      return n < 0 ? F([]) : F([this[n]]);
    }
    return F([this[t]]);
  }
  function pp(...t) {
    let e;
    const n = Fe();
    for (let r = 0; r < t.length; r += 1) {
      e = t[r];
      for (let i = 0; i < this.length; i += 1)
        if (typeof e == "string") {
          const s = n.createElement("div");
          for (s.innerHTML = e; s.firstChild; )
            this[i].appendChild(s.firstChild);
        } else if (e instanceof Wn)
          for (let s = 0; s < e.length; s += 1) this[i].appendChild(e[s]);
        else this[i].appendChild(e);
    }
    return this;
  }
  function mp(t) {
    const e = Fe();
    let n, r;
    for (n = 0; n < this.length; n += 1)
      if (typeof t == "string") {
        const i = e.createElement("div");
        for (i.innerHTML = t, r = i.childNodes.length - 1; r >= 0; r -= 1)
          this[n].insertBefore(i.childNodes[r], this[n].childNodes[0]);
      } else if (t instanceof Wn)
        for (r = 0; r < t.length; r += 1)
          this[n].insertBefore(t[r], this[n].childNodes[0]);
      else this[n].insertBefore(t, this[n].childNodes[0]);
    return this;
  }
  function gp(t) {
    return this.length > 0
      ? t
        ? this[0].nextElementSibling && F(this[0].nextElementSibling).is(t)
          ? F([this[0].nextElementSibling])
          : F([])
        : this[0].nextElementSibling
        ? F([this[0].nextElementSibling])
        : F([])
      : F([]);
  }
  function vp(t) {
    const e = [];
    let n = this[0];
    if (!n) return F([]);
    for (; n.nextElementSibling; ) {
      const r = n.nextElementSibling;
      t ? F(r).is(t) && e.push(r) : e.push(r), (n = r);
    }
    return F(e);
  }
  function yp(t) {
    if (this.length > 0) {
      const e = this[0];
      return t
        ? e.previousElementSibling && F(e.previousElementSibling).is(t)
          ? F([e.previousElementSibling])
          : F([])
        : e.previousElementSibling
        ? F([e.previousElementSibling])
        : F([]);
    }
    return F([]);
  }
  function _p(t) {
    const e = [];
    let n = this[0];
    if (!n) return F([]);
    for (; n.previousElementSibling; ) {
      const r = n.previousElementSibling;
      t ? F(r).is(t) && e.push(r) : e.push(r), (n = r);
    }
    return F(e);
  }
  function bp(t) {
    const e = [];
    for (let n = 0; n < this.length; n += 1)
      this[n].parentNode !== null &&
        (t
          ? F(this[n].parentNode).is(t) && e.push(this[n].parentNode)
          : e.push(this[n].parentNode));
    return F(e);
  }
  function xp(t) {
    const e = [];
    for (let n = 0; n < this.length; n += 1) {
      let r = this[n].parentNode;
      for (; r; ) t ? F(r).is(t) && e.push(r) : e.push(r), (r = r.parentNode);
    }
    return F(e);
  }
  function Sp(t) {
    let e = this;
    return typeof t == "undefined"
      ? F([])
      : (e.is(t) || (e = e.parents(t).eq(0)), e);
  }
  function Tp(t) {
    const e = [];
    for (let n = 0; n < this.length; n += 1) {
      const r = this[n].querySelectorAll(t);
      for (let i = 0; i < r.length; i += 1) e.push(r[i]);
    }
    return F(e);
  }
  function Ep(t) {
    const e = [];
    for (let n = 0; n < this.length; n += 1) {
      const r = this[n].children;
      for (let i = 0; i < r.length; i += 1)
        (!t || F(r[i]).is(t)) && e.push(r[i]);
    }
    return F(e);
  }
  function wp() {
    for (let t = 0; t < this.length; t += 1)
      this[t].parentNode && this[t].parentNode.removeChild(this[t]);
    return this;
  }
  const Ac = {
    addClass: Wh,
    removeClass: Xh,
    hasClass: Gh,
    toggleClass: Yh,
    attr: jh,
    removeAttr: Uh,
    transform: Kh,
    transition: Zh,
    on: Qh,
    off: Jh,
    trigger: ep,
    transitionEnd: tp,
    outerWidth: np,
    outerHeight: rp,
    styles: sp,
    offset: ip,
    css: ap,
    each: op,
    html: cp,
    text: up,
    is: fp,
    index: dp,
    eq: hp,
    append: pp,
    prepend: mp,
    next: gp,
    nextAll: vp,
    prev: yp,
    prevAll: _p,
    parent: bp,
    parents: xp,
    closest: Sp,
    find: Tp,
    children: Ep,
    filter: lp,
    remove: wp,
  };
  Object.keys(Ac).forEach((t) => {
    Object.defineProperty(F.fn, t, { value: Ac[t], writable: !0 });
  });
  function Cp(t) {
    const e = t;
    Object.keys(e).forEach((n) => {
      try {
        e[n] = null;
      } catch (r) {}
      try {
        delete e[n];
      } catch (r) {}
    });
  }
  function Xn(t, e = 0) {
    return setTimeout(t, e);
  }
  function Ot() {
    return Date.now();
  }
  function Pp(t) {
    const e = ge();
    let n;
    return (
      e.getComputedStyle && (n = e.getComputedStyle(t, null)),
      !n && t.currentStyle && (n = t.currentStyle),
      n || (n = t.style),
      n
    );
  }
  function lo(t, e = "x") {
    const n = ge();
    let r, i, s;
    const a = Pp(t);
    return (
      n.WebKitCSSMatrix
        ? ((i = a.transform || a.webkitTransform),
          i.split(",").length > 6 &&
            (i = i
              .split(", ")
              .map((o) => o.replace(",", "."))
              .join(", ")),
          (s = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
        : ((s =
            a.MozTransform ||
            a.OTransform ||
            a.MsTransform ||
            a.msTransform ||
            a.transform ||
            a
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (r = s.toString().split(","))),
      e === "x" &&
        (n.WebKitCSSMatrix
          ? (i = s.m41)
          : r.length === 16
          ? (i = parseFloat(r[12]))
          : (i = parseFloat(r[4]))),
      e === "y" &&
        (n.WebKitCSSMatrix
          ? (i = s.m42)
          : r.length === 16
          ? (i = parseFloat(r[13]))
          : (i = parseFloat(r[5]))),
      i || 0
    );
  }
  function Vi(t) {
    return (
      typeof t == "object" &&
      t !== null &&
      t.constructor &&
      Object.prototype.toString.call(t).slice(8, -1) === "Object"
    );
  }
  function kp(t) {
    return typeof window != "undefined" &&
      typeof window.HTMLElement != "undefined"
      ? t instanceof HTMLElement
      : t && (t.nodeType === 1 || t.nodeType === 11);
  }
  function At(...t) {
    const e = Object(t[0]),
      n = ["__proto__", "constructor", "prototype"];
    for (let r = 1; r < t.length; r += 1) {
      const i = t[r];
      if (i != null && !kp(i)) {
        const s = Object.keys(Object(i)).filter((a) => n.indexOf(a) < 0);
        for (let a = 0, o = s.length; a < o; a += 1) {
          const l = s[a],
            c = Object.getOwnPropertyDescriptor(i, l);
          c !== void 0 &&
            c.enumerable &&
            (Vi(e[l]) && Vi(i[l])
              ? i[l].__swiper__
                ? (e[l] = i[l])
                : At(e[l], i[l])
              : !Vi(e[l]) && Vi(i[l])
              ? ((e[l] = {}), i[l].__swiper__ ? (e[l] = i[l]) : At(e[l], i[l]))
              : (e[l] = i[l]));
        }
      }
    }
    return e;
  }
  function Wi(t, e, n) {
    t.style.setProperty(e, n);
  }
  function Lc({ swiper: t, targetPosition: e, side: n }) {
    const r = ge(),
      i = -t.translate;
    let s = null,
      a;
    const o = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      r.cancelAnimationFrame(t.cssModeFrameID);
    const l = e > i ? "next" : "prev",
      c = (f, d) => (l === "next" && f >= d) || (l === "prev" && f <= d),
      u = () => {
        (a = new Date().getTime()), s === null && (s = a);
        const f = Math.max(Math.min((a - s) / o, 1), 0),
          d = 0.5 - Math.cos(f * Math.PI) / 2;
        let h = i + d * (e - i);
        if ((c(h, e) && (h = e), t.wrapperEl.scrollTo({ [n]: h }), c(h, e))) {
          (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [n]: h });
            }),
            r.cancelAnimationFrame(t.cssModeFrameID);
          return;
        }
        t.cssModeFrameID = r.requestAnimationFrame(u);
      };
    u();
  }
  let co;
  function Mp() {
    const t = ge(),
      e = Fe();
    return {
      smoothScroll:
        e.documentElement && "scrollBehavior" in e.documentElement.style,
      touch: !!(
        "ontouchstart" in t ||
        (t.DocumentTouch && e instanceof t.DocumentTouch)
      ),
      passiveListener: (function () {
        let r = !1;
        try {
          const i = Object.defineProperty({}, "passive", {
            get() {
              r = !0;
            },
          });
          t.addEventListener("testPassiveListener", null, i);
        } catch (i) {}
        return r;
      })(),
      gestures: (function () {
        return "ongesturestart" in t;
      })(),
    };
  }
  function Ic() {
    return co || (co = Mp()), co;
  }
  let uo;
  function $p({ userAgent: t } = {}) {
    const e = Ic(),
      n = ge(),
      r = n.navigator.platform,
      i = t || n.navigator.userAgent,
      s = { ios: !1, android: !1 },
      a = n.screen.width,
      o = n.screen.height,
      l = i.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = i.match(/(iPad).*OS\s([\d_]+)/);
    const u = i.match(/(iPod)(.*OS\s([\d_]+))?/),
      f = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      d = r === "Win32";
    let h = r === "MacIntel";
    const m = [
      "1024x1366",
      "1366x1024",
      "834x1194",
      "1194x834",
      "834x1112",
      "1112x834",
      "768x1024",
      "1024x768",
      "820x1180",
      "1180x820",
      "810x1080",
      "1080x810",
    ];
    return (
      !c &&
        h &&
        e.touch &&
        m.indexOf(`${a}x${o}`) >= 0 &&
        ((c = i.match(/(Version)\/([\d.]+)/)),
        c || (c = [0, 1, "13_0_0"]),
        (h = !1)),
      l && !d && ((s.os = "android"), (s.android = !0)),
      (c || f || u) && ((s.os = "ios"), (s.ios = !0)),
      s
    );
  }
  function Op(t = {}) {
    return uo || (uo = $p(t)), uo;
  }
  let fo;
  function Ap() {
    const t = ge();
    function e() {
      const n = t.navigator.userAgent.toLowerCase();
      return (
        n.indexOf("safari") >= 0 &&
        n.indexOf("chrome") < 0 &&
        n.indexOf("android") < 0
      );
    }
    return {
      isSafari: e(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        t.navigator.userAgent
      ),
    };
  }
  function Lp() {
    return fo || (fo = Ap()), fo;
  }
  function Ip({ swiper: t, on: e, emit: n }) {
    const r = ge();
    let i = null,
      s = null;
    const a = () => {
        !t || t.destroyed || !t.initialized || (n("beforeResize"), n("resize"));
      },
      o = () => {
        !t ||
          t.destroyed ||
          !t.initialized ||
          ((i = new ResizeObserver((u) => {
            s = r.requestAnimationFrame(() => {
              const { width: f, height: d } = t;
              let h = f,
                m = d;
              u.forEach(({ contentBoxSize: p, contentRect: g, target: y }) => {
                (y && y !== t.el) ||
                  ((h = g ? g.width : (p[0] || p).inlineSize),
                  (m = g ? g.height : (p[0] || p).blockSize));
              }),
                (h !== f || m !== d) && a();
            });
          })),
          i.observe(t.el));
      },
      l = () => {
        s && r.cancelAnimationFrame(s),
          i && i.unobserve && t.el && (i.unobserve(t.el), (i = null));
      },
      c = () => {
        !t || t.destroyed || !t.initialized || n("orientationchange");
      };
    e("init", () => {
      if (t.params.resizeObserver && typeof r.ResizeObserver != "undefined") {
        o();
        return;
      }
      r.addEventListener("resize", a),
        r.addEventListener("orientationchange", c);
    }),
      e("destroy", () => {
        l(),
          r.removeEventListener("resize", a),
          r.removeEventListener("orientationchange", c);
      });
  }
  function Dp({ swiper: t, extendParams: e, on: n, emit: r }) {
    const i = [],
      s = ge(),
      a = (c, u = {}) => {
        const f = s.MutationObserver || s.WebkitMutationObserver,
          d = new f((h) => {
            if (h.length === 1) {
              r("observerUpdate", h[0]);
              return;
            }
            const m = function () {
              r("observerUpdate", h[0]);
            };
            s.requestAnimationFrame
              ? s.requestAnimationFrame(m)
              : s.setTimeout(m, 0);
          });
        d.observe(c, {
          attributes: typeof u.attributes == "undefined" ? !0 : u.attributes,
          childList: typeof u.childList == "undefined" ? !0 : u.childList,
          characterData:
            typeof u.characterData == "undefined" ? !0 : u.characterData,
        }),
          i.push(d);
      },
      o = () => {
        if (t.params.observer) {
          if (t.params.observeParents) {
            const c = t.$el.parents();
            for (let u = 0; u < c.length; u += 1) a(c[u]);
          }
          a(t.$el[0], { childList: t.params.observeSlideChildren }),
            a(t.$wrapperEl[0], { attributes: !1 });
        }
      },
      l = () => {
        i.forEach((c) => {
          c.disconnect();
        }),
          i.splice(0, i.length);
      };
    e({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      n("init", o),
      n("destroy", l);
  }
  const zp = {
    on(t, e, n) {
      const r = this;
      if (!r.eventsListeners || r.destroyed || typeof e != "function") return r;
      const i = n ? "unshift" : "push";
      return (
        t.split(" ").forEach((s) => {
          r.eventsListeners[s] || (r.eventsListeners[s] = []),
            r.eventsListeners[s][i](e);
        }),
        r
      );
    },
    once(t, e, n) {
      const r = this;
      if (!r.eventsListeners || r.destroyed || typeof e != "function") return r;
      function i(...s) {
        r.off(t, i), i.__emitterProxy && delete i.__emitterProxy, e.apply(r, s);
      }
      return (i.__emitterProxy = e), r.on(t, i, n);
    },
    onAny(t, e) {
      const n = this;
      if (!n.eventsListeners || n.destroyed || typeof t != "function") return n;
      const r = e ? "unshift" : "push";
      return (
        n.eventsAnyListeners.indexOf(t) < 0 && n.eventsAnyListeners[r](t), n
      );
    },
    offAny(t) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
      const n = e.eventsAnyListeners.indexOf(t);
      return n >= 0 && e.eventsAnyListeners.splice(n, 1), e;
    },
    off(t, e) {
      const n = this;
      return (
        !n.eventsListeners ||
          n.destroyed ||
          !n.eventsListeners ||
          t.split(" ").forEach((r) => {
            typeof e == "undefined"
              ? (n.eventsListeners[r] = [])
              : n.eventsListeners[r] &&
                n.eventsListeners[r].forEach((i, s) => {
                  (i === e || (i.__emitterProxy && i.__emitterProxy === e)) &&
                    n.eventsListeners[r].splice(s, 1);
                });
          }),
        n
      );
    },
    emit(...t) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
      let n, r, i;
      return (
        typeof t[0] == "string" || Array.isArray(t[0])
          ? ((n = t[0]), (r = t.slice(1, t.length)), (i = e))
          : ((n = t[0].events), (r = t[0].data), (i = t[0].context || e)),
        r.unshift(i),
        (Array.isArray(n) ? n : n.split(" ")).forEach((a) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((o) => {
              o.apply(i, [a, ...r]);
            }),
            e.eventsListeners &&
              e.eventsListeners[a] &&
              e.eventsListeners[a].forEach((o) => {
                o.apply(i, r);
              });
        }),
        e
      );
    },
  };
  function Rp() {
    const t = this;
    let e, n;
    const r = t.$el;
    typeof t.params.width != "undefined" && t.params.width !== null
      ? (e = t.params.width)
      : (e = r[0].clientWidth),
      typeof t.params.height != "undefined" && t.params.height !== null
        ? (n = t.params.height)
        : (n = r[0].clientHeight),
      !((e === 0 && t.isHorizontal()) || (n === 0 && t.isVertical())) &&
        ((e =
          e -
          parseInt(r.css("padding-left") || 0, 10) -
          parseInt(r.css("padding-right") || 0, 10)),
        (n =
          n -
          parseInt(r.css("padding-top") || 0, 10) -
          parseInt(r.css("padding-bottom") || 0, 10)),
        Number.isNaN(e) && (e = 0),
        Number.isNaN(n) && (n = 0),
        Object.assign(t, {
          width: e,
          height: n,
          size: t.isHorizontal() ? e : n,
        }));
  }
  function Np() {
    const t = this;
    function e(T) {
      return t.isHorizontal()
        ? T
        : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[T];
    }
    function n(T, M) {
      return parseFloat(T.getPropertyValue(e(M)) || 0);
    }
    const r = t.params,
      { $wrapperEl: i, size: s, rtlTranslate: a, wrongRTL: o } = t,
      l = t.virtual && r.virtual.enabled,
      c = l ? t.virtual.slides.length : t.slides.length,
      u = i.children(`.${t.params.slideClass}`),
      f = l ? t.virtual.slides.length : u.length;
    let d = [];
    const h = [],
      m = [];
    let p = r.slidesOffsetBefore;
    typeof p == "function" && (p = r.slidesOffsetBefore.call(t));
    let g = r.slidesOffsetAfter;
    typeof g == "function" && (g = r.slidesOffsetAfter.call(t));
    const y = t.snapGrid.length,
      v = t.slidesGrid.length;
    let _ = r.spaceBetween,
      x = -p,
      S = 0,
      w = 0;
    if (typeof s == "undefined") return;
    typeof _ == "string" &&
      _.indexOf("%") >= 0 &&
      (_ = (parseFloat(_.replace("%", "")) / 100) * s),
      (t.virtualSize = -_),
      a
        ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" })
        : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
      r.centeredSlides &&
        r.cssMode &&
        (Wi(t.wrapperEl, "--swiper-centered-offset-before", ""),
        Wi(t.wrapperEl, "--swiper-centered-offset-after", ""));
    const C = r.grid && r.grid.rows > 1 && t.grid;
    C && t.grid.initSlides(f);
    let P;
    const O =
      r.slidesPerView === "auto" &&
      r.breakpoints &&
      Object.keys(r.breakpoints).filter(
        (T) => typeof r.breakpoints[T].slidesPerView != "undefined"
      ).length > 0;
    for (let T = 0; T < f; T += 1) {
      P = 0;
      const M = u.eq(T);
      if ((C && t.grid.updateSlide(T, M, f, e), M.css("display") !== "none")) {
        if (r.slidesPerView === "auto") {
          O && (u[T].style[e("width")] = "");
          const b = getComputedStyle(M[0]),
            E = M[0].style.transform,
            A = M[0].style.webkitTransform;
          if (
            (E && (M[0].style.transform = "none"),
            A && (M[0].style.webkitTransform = "none"),
            r.roundLengths)
          )
            P = t.isHorizontal() ? M.outerWidth(!0) : M.outerHeight(!0);
          else {
            const L = n(b, "width"),
              k = n(b, "padding-left"),
              I = n(b, "padding-right"),
              D = n(b, "margin-left"),
              R = n(b, "margin-right"),
              $ = b.getPropertyValue("box-sizing");
            if ($ && $ === "border-box") P = L + D + R;
            else {
              const { clientWidth: H, offsetWidth: Y } = M[0];
              P = L + k + I + D + R + (Y - H);
            }
          }
          E && (M[0].style.transform = E),
            A && (M[0].style.webkitTransform = A),
            r.roundLengths && (P = Math.floor(P));
        } else
          (P = (s - (r.slidesPerView - 1) * _) / r.slidesPerView),
            r.roundLengths && (P = Math.floor(P)),
            u[T] && (u[T].style[e("width")] = `${P}px`);
        u[T] && (u[T].swiperSlideSize = P),
          m.push(P),
          r.centeredSlides
            ? ((x = x + P / 2 + S / 2 + _),
              S === 0 && T !== 0 && (x = x - s / 2 - _),
              T === 0 && (x = x - s / 2 - _),
              Math.abs(x) < 1 / 1e3 && (x = 0),
              r.roundLengths && (x = Math.floor(x)),
              w % r.slidesPerGroup === 0 && d.push(x),
              h.push(x))
            : (r.roundLengths && (x = Math.floor(x)),
              (w - Math.min(t.params.slidesPerGroupSkip, w)) %
                t.params.slidesPerGroup ===
                0 && d.push(x),
              h.push(x),
              (x = x + P + _)),
          (t.virtualSize += P + _),
          (S = P),
          (w += 1);
      }
    }
    if (
      ((t.virtualSize = Math.max(t.virtualSize, s) + g),
      a &&
        o &&
        (r.effect === "slide" || r.effect === "coverflow") &&
        i.css({ width: `${t.virtualSize + r.spaceBetween}px` }),
      r.setWrapperSize &&
        i.css({ [e("width")]: `${t.virtualSize + r.spaceBetween}px` }),
      C && t.grid.updateWrapperSize(P, d, e),
      !r.centeredSlides)
    ) {
      const T = [];
      for (let M = 0; M < d.length; M += 1) {
        let b = d[M];
        r.roundLengths && (b = Math.floor(b)),
          d[M] <= t.virtualSize - s && T.push(b);
      }
      (d = T),
        Math.floor(t.virtualSize - s) - Math.floor(d[d.length - 1]) > 1 &&
          d.push(t.virtualSize - s);
    }
    if ((d.length === 0 && (d = [0]), r.spaceBetween !== 0)) {
      const T = t.isHorizontal() && a ? "marginLeft" : e("marginRight");
      u.filter((M, b) => (r.cssMode ? b !== u.length - 1 : !0)).css({
        [T]: `${_}px`,
      });
    }
    if (r.centeredSlides && r.centeredSlidesBounds) {
      let T = 0;
      m.forEach((b) => {
        T += b + (r.spaceBetween ? r.spaceBetween : 0);
      }),
        (T -= r.spaceBetween);
      const M = T - s;
      d = d.map((b) => (b < 0 ? -p : b > M ? M + g : b));
    }
    if (r.centerInsufficientSlides) {
      let T = 0;
      if (
        (m.forEach((M) => {
          T += M + (r.spaceBetween ? r.spaceBetween : 0);
        }),
        (T -= r.spaceBetween),
        T < s)
      ) {
        const M = (s - T) / 2;
        d.forEach((b, E) => {
          d[E] = b - M;
        }),
          h.forEach((b, E) => {
            h[E] = b + M;
          });
      }
    }
    if (
      (Object.assign(t, {
        slides: u,
        snapGrid: d,
        slidesGrid: h,
        slidesSizesGrid: m,
      }),
      r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
    ) {
      Wi(t.wrapperEl, "--swiper-centered-offset-before", `${-d[0]}px`),
        Wi(
          t.wrapperEl,
          "--swiper-centered-offset-after",
          `${t.size / 2 - m[m.length - 1] / 2}px`
        );
      const T = -t.snapGrid[0],
        M = -t.slidesGrid[0];
      (t.snapGrid = t.snapGrid.map((b) => b + T)),
        (t.slidesGrid = t.slidesGrid.map((b) => b + M));
    }
    if (
      (f !== c && t.emit("slidesLengthChange"),
      d.length !== y &&
        (t.params.watchOverflow && t.checkOverflow(),
        t.emit("snapGridLengthChange")),
      h.length !== v && t.emit("slidesGridLengthChange"),
      r.watchSlidesProgress && t.updateSlidesOffset(),
      !l && !r.cssMode && (r.effect === "slide" || r.effect === "fade"))
    ) {
      const T = `${r.containerModifierClass}backface-hidden`,
        M = t.$el.hasClass(T);
      f <= r.maxBackfaceHiddenSlides
        ? M || t.$el.addClass(T)
        : M && t.$el.removeClass(T);
    }
  }
  function Fp(t) {
    const e = this,
      n = [],
      r = e.virtual && e.params.virtual.enabled;
    let i = 0,
      s;
    typeof t == "number"
      ? e.setTransition(t)
      : t === !0 && e.setTransition(e.params.speed);
    const a = (o) =>
      r
        ? e.slides.filter(
            (l) => parseInt(l.getAttribute("data-swiper-slide-index"), 10) === o
          )[0]
        : e.slides.eq(o)[0];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
      if (e.params.centeredSlides)
        (e.visibleSlides || F([])).each((o) => {
          n.push(o);
        });
      else
        for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
          const o = e.activeIndex + s;
          if (o > e.slides.length && !r) break;
          n.push(a(o));
        }
    else n.push(a(e.activeIndex));
    for (s = 0; s < n.length; s += 1)
      if (typeof n[s] != "undefined") {
        const o = n[s].offsetHeight;
        i = o > i ? o : i;
      }
    (i || i === 0) && e.$wrapperEl.css("height", `${i}px`);
  }
  function Bp() {
    const t = this,
      e = t.slides;
    for (let n = 0; n < e.length; n += 1)
      e[n].swiperSlideOffset = t.isHorizontal()
        ? e[n].offsetLeft
        : e[n].offsetTop;
  }
  function qp(t = (this && this.translate) || 0) {
    const e = this,
      n = e.params,
      { slides: r, rtlTranslate: i, snapGrid: s } = e;
    if (r.length === 0) return;
    typeof r[0].swiperSlideOffset == "undefined" && e.updateSlidesOffset();
    let a = -t;
    i && (a = t),
      r.removeClass(n.slideVisibleClass),
      (e.visibleSlidesIndexes = []),
      (e.visibleSlides = []);
    for (let o = 0; o < r.length; o += 1) {
      const l = r[o];
      let c = l.swiperSlideOffset;
      n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
      const u =
          (a + (n.centeredSlides ? e.minTranslate() : 0) - c) /
          (l.swiperSlideSize + n.spaceBetween),
        f =
          (a - s[0] + (n.centeredSlides ? e.minTranslate() : 0) - c) /
          (l.swiperSlideSize + n.spaceBetween),
        d = -(a - c),
        h = d + e.slidesSizesGrid[o];
      ((d >= 0 && d < e.size - 1) ||
        (h > 1 && h <= e.size) ||
        (d <= 0 && h >= e.size)) &&
        (e.visibleSlides.push(l),
        e.visibleSlidesIndexes.push(o),
        r.eq(o).addClass(n.slideVisibleClass)),
        (l.progress = i ? -u : u),
        (l.originalProgress = i ? -f : f);
    }
    e.visibleSlides = F(e.visibleSlides);
  }
  function Hp(t) {
    const e = this;
    if (typeof t == "undefined") {
      const c = e.rtlTranslate ? -1 : 1;
      t = (e && e.translate && e.translate * c) || 0;
    }
    const n = e.params,
      r = e.maxTranslate() - e.minTranslate();
    let { progress: i, isBeginning: s, isEnd: a } = e;
    const o = s,
      l = a;
    r === 0
      ? ((i = 0), (s = !0), (a = !0))
      : ((i = (t - e.minTranslate()) / r), (s = i <= 0), (a = i >= 1)),
      Object.assign(e, { progress: i, isBeginning: s, isEnd: a }),
      (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
        e.updateSlidesProgress(t),
      s && !o && e.emit("reachBeginning toEdge"),
      a && !l && e.emit("reachEnd toEdge"),
      ((o && !s) || (l && !a)) && e.emit("fromEdge"),
      e.emit("progress", i);
  }
  function Vp() {
    const t = this,
      { slides: e, params: n, $wrapperEl: r, activeIndex: i, realIndex: s } = t,
      a = t.virtual && n.virtual.enabled;
    e.removeClass(
      `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
    );
    let o;
    a
      ? (o = t.$wrapperEl.find(
          `.${n.slideClass}[data-swiper-slide-index="${i}"]`
        ))
      : (o = e.eq(i)),
      o.addClass(n.slideActiveClass),
      n.loop &&
        (o.hasClass(n.slideDuplicateClass)
          ? r
              .children(
                `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
              )
              .addClass(n.slideDuplicateActiveClass)
          : r
              .children(
                `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
              )
              .addClass(n.slideDuplicateActiveClass));
    let l = o.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
    n.loop && l.length === 0 && ((l = e.eq(0)), l.addClass(n.slideNextClass));
    let c = o.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
    n.loop && c.length === 0 && ((c = e.eq(-1)), c.addClass(n.slidePrevClass)),
      n.loop &&
        (l.hasClass(n.slideDuplicateClass)
          ? r
              .children(
                `.${n.slideClass}:not(.${
                  n.slideDuplicateClass
                })[data-swiper-slide-index="${l.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(n.slideDuplicateNextClass)
          : r
              .children(
                `.${n.slideClass}.${
                  n.slideDuplicateClass
                }[data-swiper-slide-index="${l.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(n.slideDuplicateNextClass),
        c.hasClass(n.slideDuplicateClass)
          ? r
              .children(
                `.${n.slideClass}:not(.${
                  n.slideDuplicateClass
                })[data-swiper-slide-index="${c.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(n.slideDuplicatePrevClass)
          : r
              .children(
                `.${n.slideClass}.${
                  n.slideDuplicateClass
                }[data-swiper-slide-index="${c.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(n.slideDuplicatePrevClass)),
      t.emitSlidesClasses();
  }
  function Wp(t) {
    const e = this,
      n = e.rtlTranslate ? e.translate : -e.translate,
      {
        slidesGrid: r,
        snapGrid: i,
        params: s,
        activeIndex: a,
        realIndex: o,
        snapIndex: l,
      } = e;
    let c = t,
      u;
    if (typeof c == "undefined") {
      for (let d = 0; d < r.length; d += 1)
        typeof r[d + 1] != "undefined"
          ? n >= r[d] && n < r[d + 1] - (r[d + 1] - r[d]) / 2
            ? (c = d)
            : n >= r[d] && n < r[d + 1] && (c = d + 1)
          : n >= r[d] && (c = d);
      s.normalizeSlideIndex && (c < 0 || typeof c == "undefined") && (c = 0);
    }
    if (i.indexOf(n) >= 0) u = i.indexOf(n);
    else {
      const d = Math.min(s.slidesPerGroupSkip, c);
      u = d + Math.floor((c - d) / s.slidesPerGroup);
    }
    if ((u >= i.length && (u = i.length - 1), c === a)) {
      u !== l && ((e.snapIndex = u), e.emit("snapIndexChange"));
      return;
    }
    const f = parseInt(e.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
    Object.assign(e, {
      snapIndex: u,
      realIndex: f,
      previousIndex: a,
      activeIndex: c,
    }),
      e.emit("activeIndexChange"),
      e.emit("snapIndexChange"),
      o !== f && e.emit("realIndexChange"),
      (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange");
  }
  function Xp(t) {
    const e = this,
      n = e.params,
      r = F(t).closest(`.${n.slideClass}`)[0];
    let i = !1,
      s;
    if (r) {
      for (let a = 0; a < e.slides.length; a += 1)
        if (e.slides[a] === r) {
          (i = !0), (s = a);
          break;
        }
    }
    if (r && i)
      (e.clickedSlide = r),
        e.virtual && e.params.virtual.enabled
          ? (e.clickedIndex = parseInt(
              F(r).attr("data-swiper-slide-index"),
              10
            ))
          : (e.clickedIndex = s);
    else {
      (e.clickedSlide = void 0), (e.clickedIndex = void 0);
      return;
    }
    n.slideToClickedSlide &&
      e.clickedIndex !== void 0 &&
      e.clickedIndex !== e.activeIndex &&
      e.slideToClickedSlide();
  }
  const Yp = {
    updateSize: Rp,
    updateSlides: Np,
    updateAutoHeight: Fp,
    updateSlidesOffset: Bp,
    updateSlidesProgress: qp,
    updateProgress: Hp,
    updateSlidesClasses: Vp,
    updateActiveIndex: Wp,
    updateClickedSlide: Xp,
  };
  function Gp(t = this.isHorizontal() ? "x" : "y") {
    const e = this,
      { params: n, rtlTranslate: r, translate: i, $wrapperEl: s } = e;
    if (n.virtualTranslate) return r ? -i : i;
    if (n.cssMode) return i;
    let a = lo(s[0], t);
    return r && (a = -a), a || 0;
  }
  function jp(t, e) {
    const n = this,
      {
        rtlTranslate: r,
        params: i,
        $wrapperEl: s,
        wrapperEl: a,
        progress: o,
      } = n;
    let l = 0,
      c = 0;
    const u = 0;
    n.isHorizontal() ? (l = r ? -t : t) : (c = t),
      i.roundLengths && ((l = Math.floor(l)), (c = Math.floor(c))),
      i.cssMode
        ? (a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
            ? -l
            : -c)
        : i.virtualTranslate ||
          s.transform(`translate3d(${l}px, ${c}px, ${u}px)`),
      (n.previousTranslate = n.translate),
      (n.translate = n.isHorizontal() ? l : c);
    let f;
    const d = n.maxTranslate() - n.minTranslate();
    d === 0 ? (f = 0) : (f = (t - n.minTranslate()) / d),
      f !== o && n.updateProgress(t),
      n.emit("setTranslate", n.translate, e);
  }
  function Up() {
    return -this.snapGrid[0];
  }
  function Kp() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function Zp(t = 0, e = this.params.speed, n = !0, r = !0, i) {
    const s = this,
      { params: a, wrapperEl: o } = s;
    if (s.animating && a.preventInteractionOnTransition) return !1;
    const l = s.minTranslate(),
      c = s.maxTranslate();
    let u;
    if (
      (r && t > l ? (u = l) : r && t < c ? (u = c) : (u = t),
      s.updateProgress(u),
      a.cssMode)
    ) {
      const f = s.isHorizontal();
      if (e === 0) o[f ? "scrollLeft" : "scrollTop"] = -u;
      else {
        if (!s.support.smoothScroll)
          return (
            Lc({ swiper: s, targetPosition: -u, side: f ? "left" : "top" }), !0
          );
        o.scrollTo({ [f ? "left" : "top"]: -u, behavior: "smooth" });
      }
      return !0;
    }
    return (
      e === 0
        ? (s.setTransition(0),
          s.setTranslate(u),
          n && (s.emit("beforeTransitionStart", e, i), s.emit("transitionEnd")))
        : (s.setTransition(e),
          s.setTranslate(u),
          n &&
            (s.emit("beforeTransitionStart", e, i), s.emit("transitionStart")),
          s.animating ||
            ((s.animating = !0),
            s.onTranslateToWrapperTransitionEnd ||
              (s.onTranslateToWrapperTransitionEnd = function (d) {
                !s ||
                  s.destroyed ||
                  (d.target === this &&
                    (s.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      s.onTranslateToWrapperTransitionEnd
                    ),
                    s.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      s.onTranslateToWrapperTransitionEnd
                    ),
                    (s.onTranslateToWrapperTransitionEnd = null),
                    delete s.onTranslateToWrapperTransitionEnd,
                    n && s.emit("transitionEnd")));
              }),
            s.$wrapperEl[0].addEventListener(
              "transitionend",
              s.onTranslateToWrapperTransitionEnd
            ),
            s.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              s.onTranslateToWrapperTransitionEnd
            ))),
      !0
    );
  }
  const Qp = {
    getTranslate: Gp,
    setTranslate: jp,
    minTranslate: Up,
    maxTranslate: Kp,
    translateTo: Zp,
  };
  function Jp(t, e) {
    const n = this;
    n.params.cssMode || n.$wrapperEl.transition(t),
      n.emit("setTransition", t, e);
  }
  function Dc({ swiper: t, runCallbacks: e, direction: n, step: r }) {
    const { activeIndex: i, previousIndex: s } = t;
    let a = n;
    if (
      (a || (i > s ? (a = "next") : i < s ? (a = "prev") : (a = "reset")),
      t.emit(`transition${r}`),
      e && i !== s)
    ) {
      if (a === "reset") {
        t.emit(`slideResetTransition${r}`);
        return;
      }
      t.emit(`slideChangeTransition${r}`),
        a === "next"
          ? t.emit(`slideNextTransition${r}`)
          : t.emit(`slidePrevTransition${r}`);
    }
  }
  function em(t = !0, e) {
    const n = this,
      { params: r } = n;
    r.cssMode ||
      (r.autoHeight && n.updateAutoHeight(),
      Dc({ swiper: n, runCallbacks: t, direction: e, step: "Start" }));
  }
  function tm(t = !0, e) {
    const n = this,
      { params: r } = n;
    (n.animating = !1),
      !r.cssMode &&
        (n.setTransition(0),
        Dc({ swiper: n, runCallbacks: t, direction: e, step: "End" }));
  }
  const nm = { setTransition: Jp, transitionStart: em, transitionEnd: tm };
  function rm(t = 0, e = this.params.speed, n = !0, r, i) {
    if (typeof t != "number" && typeof t != "string")
      throw new Error(
        `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof t}] given.`
      );
    if (typeof t == "string") {
      const _ = parseInt(t, 10);
      if (!isFinite(_))
        throw new Error(
          `The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`
        );
      t = _;
    }
    const s = this;
    let a = t;
    a < 0 && (a = 0);
    const {
      params: o,
      snapGrid: l,
      slidesGrid: c,
      previousIndex: u,
      activeIndex: f,
      rtlTranslate: d,
      wrapperEl: h,
      enabled: m,
    } = s;
    if ((s.animating && o.preventInteractionOnTransition) || (!m && !r && !i))
      return !1;
    const p = Math.min(s.params.slidesPerGroupSkip, a);
    let g = p + Math.floor((a - p) / s.params.slidesPerGroup);
    g >= l.length && (g = l.length - 1);
    const y = -l[g];
    if (o.normalizeSlideIndex)
      for (let _ = 0; _ < c.length; _ += 1) {
        const x = -Math.floor(y * 100),
          S = Math.floor(c[_] * 100),
          w = Math.floor(c[_ + 1] * 100);
        typeof c[_ + 1] != "undefined"
          ? x >= S && x < w - (w - S) / 2
            ? (a = _)
            : x >= S && x < w && (a = _ + 1)
          : x >= S && (a = _);
      }
    if (
      s.initialized &&
      a !== f &&
      ((!s.allowSlideNext && y < s.translate && y < s.minTranslate()) ||
        (!s.allowSlidePrev &&
          y > s.translate &&
          y > s.maxTranslate() &&
          (f || 0) !== a))
    )
      return !1;
    a !== (u || 0) && n && s.emit("beforeSlideChangeStart"),
      s.updateProgress(y);
    let v;
    if (
      (a > f ? (v = "next") : a < f ? (v = "prev") : (v = "reset"),
      (d && -y === s.translate) || (!d && y === s.translate))
    )
      return (
        s.updateActiveIndex(a),
        o.autoHeight && s.updateAutoHeight(),
        s.updateSlidesClasses(),
        o.effect !== "slide" && s.setTranslate(y),
        v !== "reset" && (s.transitionStart(n, v), s.transitionEnd(n, v)),
        !1
      );
    if (o.cssMode) {
      const _ = s.isHorizontal(),
        x = d ? y : -y;
      if (e === 0) {
        const S = s.virtual && s.params.virtual.enabled;
        S &&
          ((s.wrapperEl.style.scrollSnapType = "none"),
          (s._immediateVirtual = !0)),
          (h[_ ? "scrollLeft" : "scrollTop"] = x),
          S &&
            requestAnimationFrame(() => {
              (s.wrapperEl.style.scrollSnapType = ""),
                (s._swiperImmediateVirtual = !1);
            });
      } else {
        if (!s.support.smoothScroll)
          return (
            Lc({ swiper: s, targetPosition: x, side: _ ? "left" : "top" }), !0
          );
        h.scrollTo({ [_ ? "left" : "top"]: x, behavior: "smooth" });
      }
      return !0;
    }
    return (
      s.setTransition(e),
      s.setTranslate(y),
      s.updateActiveIndex(a),
      s.updateSlidesClasses(),
      s.emit("beforeTransitionStart", e, r),
      s.transitionStart(n, v),
      e === 0
        ? s.transitionEnd(n, v)
        : s.animating ||
          ((s.animating = !0),
          s.onSlideToWrapperTransitionEnd ||
            (s.onSlideToWrapperTransitionEnd = function (x) {
              !s ||
                s.destroyed ||
                (x.target === this &&
                  (s.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    s.onSlideToWrapperTransitionEnd
                  ),
                  s.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    s.onSlideToWrapperTransitionEnd
                  ),
                  (s.onSlideToWrapperTransitionEnd = null),
                  delete s.onSlideToWrapperTransitionEnd,
                  s.transitionEnd(n, v)));
            }),
          s.$wrapperEl[0].addEventListener(
            "transitionend",
            s.onSlideToWrapperTransitionEnd
          ),
          s.$wrapperEl[0].addEventListener(
            "webkitTransitionEnd",
            s.onSlideToWrapperTransitionEnd
          )),
      !0
    );
  }
  function im(t = 0, e = this.params.speed, n = !0, r) {
    if (typeof t == "string") {
      const a = parseInt(t, 10);
      if (!isFinite(a))
        throw new Error(
          `The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`
        );
      t = a;
    }
    const i = this;
    let s = t;
    return i.params.loop && (s += i.loopedSlides), i.slideTo(s, e, n, r);
  }
  function sm(t = this.params.speed, e = !0, n) {
    const r = this,
      { animating: i, enabled: s, params: a } = r;
    if (!s) return r;
    let o = a.slidesPerGroup;
    a.slidesPerView === "auto" &&
      a.slidesPerGroup === 1 &&
      a.slidesPerGroupAuto &&
      (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
    const l = r.activeIndex < a.slidesPerGroupSkip ? 1 : o;
    if (a.loop) {
      if (i && a.loopPreventsSlide) return !1;
      r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
    }
    return a.rewind && r.isEnd
      ? r.slideTo(0, t, e, n)
      : r.slideTo(r.activeIndex + l, t, e, n);
  }
  function am(t = this.params.speed, e = !0, n) {
    const r = this,
      {
        params: i,
        animating: s,
        snapGrid: a,
        slidesGrid: o,
        rtlTranslate: l,
        enabled: c,
      } = r;
    if (!c) return r;
    if (i.loop) {
      if (s && i.loopPreventsSlide) return !1;
      r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
    }
    const u = l ? r.translate : -r.translate;
    function f(g) {
      return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g);
    }
    const d = f(u),
      h = a.map((g) => f(g));
    let m = a[h.indexOf(d) - 1];
    if (typeof m == "undefined" && i.cssMode) {
      let g;
      a.forEach((y, v) => {
        d >= y && (g = v);
      }),
        typeof g != "undefined" && (m = a[g > 0 ? g - 1 : g]);
    }
    let p = 0;
    if (
      (typeof m != "undefined" &&
        ((p = o.indexOf(m)),
        p < 0 && (p = r.activeIndex - 1),
        i.slidesPerView === "auto" &&
          i.slidesPerGroup === 1 &&
          i.slidesPerGroupAuto &&
          ((p = p - r.slidesPerViewDynamic("previous", !0) + 1),
          (p = Math.max(p, 0)))),
      i.rewind && r.isBeginning)
    ) {
      const g =
        r.params.virtual && r.params.virtual.enabled && r.virtual
          ? r.virtual.slides.length - 1
          : r.slides.length - 1;
      return r.slideTo(g, t, e, n);
    }
    return r.slideTo(p, t, e, n);
  }
  function om(t = this.params.speed, e = !0, n) {
    const r = this;
    return r.slideTo(r.activeIndex, t, e, n);
  }
  function lm(t = this.params.speed, e = !0, n, r = 0.5) {
    const i = this;
    let s = i.activeIndex;
    const a = Math.min(i.params.slidesPerGroupSkip, s),
      o = a + Math.floor((s - a) / i.params.slidesPerGroup),
      l = i.rtlTranslate ? i.translate : -i.translate;
    if (l >= i.snapGrid[o]) {
      const c = i.snapGrid[o],
        u = i.snapGrid[o + 1];
      l - c > (u - c) * r && (s += i.params.slidesPerGroup);
    } else {
      const c = i.snapGrid[o - 1],
        u = i.snapGrid[o];
      l - c <= (u - c) * r && (s -= i.params.slidesPerGroup);
    }
    return (
      (s = Math.max(s, 0)),
      (s = Math.min(s, i.slidesGrid.length - 1)),
      i.slideTo(s, t, e, n)
    );
  }
  function cm() {
    const t = this,
      { params: e, $wrapperEl: n } = t,
      r =
        e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
    let i = t.clickedIndex,
      s;
    if (e.loop) {
      if (t.animating) return;
      (s = parseInt(F(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
        e.centeredSlides
          ? i < t.loopedSlides - r / 2 ||
            i > t.slides.length - t.loopedSlides + r / 2
            ? (t.loopFix(),
              (i = n
                .children(
                  `.${e.slideClass}[data-swiper-slide-index="${s}"]:not(.${e.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              Xn(() => {
                t.slideTo(i);
              }))
            : t.slideTo(i)
          : i > t.slides.length - r
          ? (t.loopFix(),
            (i = n
              .children(
                `.${e.slideClass}[data-swiper-slide-index="${s}"]:not(.${e.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            Xn(() => {
              t.slideTo(i);
            }))
          : t.slideTo(i);
    } else t.slideTo(i);
  }
  const um = {
    slideTo: rm,
    slideToLoop: im,
    slideNext: sm,
    slidePrev: am,
    slideReset: om,
    slideToClosest: lm,
    slideToClickedSlide: cm,
  };
  function fm() {
    const t = this,
      e = Fe(),
      { params: n, $wrapperEl: r } = t,
      i = r.children().length > 0 ? F(r.children()[0].parentNode) : r;
    i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
    let s = i.children(`.${n.slideClass}`);
    if (n.loopFillGroupWithBlank) {
      const l = n.slidesPerGroup - (s.length % n.slidesPerGroup);
      if (l !== n.slidesPerGroup) {
        for (let c = 0; c < l; c += 1) {
          const u = F(e.createElement("div")).addClass(
            `${n.slideClass} ${n.slideBlankClass}`
          );
          i.append(u);
        }
        s = i.children(`.${n.slideClass}`);
      }
    }
    n.slidesPerView === "auto" &&
      !n.loopedSlides &&
      (n.loopedSlides = s.length),
      (t.loopedSlides = Math.ceil(
        parseFloat(n.loopedSlides || n.slidesPerView, 10)
      )),
      (t.loopedSlides += n.loopAdditionalSlides),
      t.loopedSlides > s.length &&
        t.params.loopedSlidesLimit &&
        (t.loopedSlides = s.length);
    const a = [],
      o = [];
    s.each((l, c) => {
      F(l).attr("data-swiper-slide-index", c);
    });
    for (let l = 0; l < t.loopedSlides; l += 1) {
      const c = l - Math.floor(l / s.length) * s.length;
      o.push(s.eq(c)[0]), a.unshift(s.eq(s.length - c - 1)[0]);
    }
    for (let l = 0; l < o.length; l += 1)
      i.append(F(o[l].cloneNode(!0)).addClass(n.slideDuplicateClass));
    for (let l = a.length - 1; l >= 0; l -= 1)
      i.prepend(F(a[l].cloneNode(!0)).addClass(n.slideDuplicateClass));
  }
  function dm() {
    const t = this;
    t.emit("beforeLoopFix");
    const {
      activeIndex: e,
      slides: n,
      loopedSlides: r,
      allowSlidePrev: i,
      allowSlideNext: s,
      snapGrid: a,
      rtlTranslate: o,
    } = t;
    let l;
    (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
    const u = -a[e] - t.getTranslate();
    e < r
      ? ((l = n.length - r * 3 + e),
        (l += r),
        t.slideTo(l, 0, !1, !0) &&
          u !== 0 &&
          t.setTranslate((o ? -t.translate : t.translate) - u))
      : e >= n.length - r &&
        ((l = -n.length + e + r),
        (l += r),
        t.slideTo(l, 0, !1, !0) &&
          u !== 0 &&
          t.setTranslate((o ? -t.translate : t.translate) - u)),
      (t.allowSlidePrev = i),
      (t.allowSlideNext = s),
      t.emit("loopFix");
  }
  function hm() {
    const t = this,
      { $wrapperEl: e, params: n, slides: r } = t;
    e
      .children(
        `.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`
      )
      .remove(),
      r.removeAttr("data-swiper-slide-index");
  }
  const pm = { loopCreate: fm, loopFix: dm, loopDestroy: hm };
  function mm(t) {
    const e = this;
    if (
      e.support.touch ||
      !e.params.simulateTouch ||
      (e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode
    )
      return;
    const n = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    (n.style.cursor = "move"), (n.style.cursor = t ? "grabbing" : "grab");
  }
  function gm() {
    const t = this;
    t.support.touch ||
      (t.params.watchOverflow && t.isLocked) ||
      t.params.cssMode ||
      (t[
        t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = "");
  }
  const vm = { setGrabCursor: mm, unsetGrabCursor: gm };
  function ym(t, e = this) {
    function n(r) {
      if (!r || r === Fe() || r === ge()) return null;
      r.assignedSlot && (r = r.assignedSlot);
      const i = r.closest(t);
      return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
    }
    return n(e);
  }
  function _m(t) {
    const e = this,
      n = Fe(),
      r = ge(),
      i = e.touchEventsData,
      { params: s, touches: a, enabled: o } = e;
    if (!o || (e.animating && s.preventInteractionOnTransition)) return;
    !e.animating && s.cssMode && s.loop && e.loopFix();
    let l = t;
    l.originalEvent && (l = l.originalEvent);
    let c = F(l.target);
    if (
      (s.touchEventsTarget === "wrapper" && !c.closest(e.wrapperEl).length) ||
      ((i.isTouchEvent = l.type === "touchstart"),
      !i.isTouchEvent && "which" in l && l.which === 3) ||
      (!i.isTouchEvent && "button" in l && l.button > 0) ||
      (i.isTouched && i.isMoved)
    )
      return;
    const u = !!s.noSwipingClass && s.noSwipingClass !== "",
      f = t.composedPath ? t.composedPath() : t.path;
    u && l.target && l.target.shadowRoot && f && (c = F(f[0]));
    const d = s.noSwipingSelector
        ? s.noSwipingSelector
        : `.${s.noSwipingClass}`,
      h = !!(l.target && l.target.shadowRoot);
    if (s.noSwiping && (h ? ym(d, c[0]) : c.closest(d)[0])) {
      e.allowClick = !0;
      return;
    }
    if (s.swipeHandler && !c.closest(s.swipeHandler)[0]) return;
    (a.currentX = l.type === "touchstart" ? l.targetTouches[0].pageX : l.pageX),
      (a.currentY =
        l.type === "touchstart" ? l.targetTouches[0].pageY : l.pageY);
    const m = a.currentX,
      p = a.currentY,
      g = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
      y = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
    if (g && (m <= y || m >= r.innerWidth - y))
      if (g === "prevent") t.preventDefault();
      else return;
    if (
      (Object.assign(i, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (a.startX = m),
      (a.startY = p),
      (i.touchStartTime = Ot()),
      (e.allowClick = !0),
      e.updateSize(),
      (e.swipeDirection = void 0),
      s.threshold > 0 && (i.allowThresholdMove = !1),
      l.type !== "touchstart")
    ) {
      let v = !0;
      c.is(i.focusableElements) &&
        ((v = !1), c[0].nodeName === "SELECT" && (i.isTouched = !1)),
        n.activeElement &&
          F(n.activeElement).is(i.focusableElements) &&
          n.activeElement !== c[0] &&
          n.activeElement.blur();
      const _ = v && e.allowTouchMove && s.touchStartPreventDefault;
      (s.touchStartForcePreventDefault || _) &&
        !c[0].isContentEditable &&
        l.preventDefault();
    }
    e.params.freeMode &&
      e.params.freeMode.enabled &&
      e.freeMode &&
      e.animating &&
      !s.cssMode &&
      e.freeMode.onTouchStart(),
      e.emit("touchStart", l);
  }
  function bm(t) {
    const e = Fe(),
      n = this,
      r = n.touchEventsData,
      { params: i, touches: s, rtlTranslate: a, enabled: o } = n;
    if (!o) return;
    let l = t;
    if ((l.originalEvent && (l = l.originalEvent), !r.isTouched)) {
      r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", l);
      return;
    }
    if (r.isTouchEvent && l.type !== "touchmove") return;
    const c =
        l.type === "touchmove" &&
        l.targetTouches &&
        (l.targetTouches[0] || l.changedTouches[0]),
      u = l.type === "touchmove" ? c.pageX : l.pageX,
      f = l.type === "touchmove" ? c.pageY : l.pageY;
    if (l.preventedByNestedSwiper) {
      (s.startX = u), (s.startY = f);
      return;
    }
    if (!n.allowTouchMove) {
      F(l.target).is(r.focusableElements) || (n.allowClick = !1),
        r.isTouched &&
          (Object.assign(s, { startX: u, startY: f, currentX: u, currentY: f }),
          (r.touchStartTime = Ot()));
      return;
    }
    if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop) {
      if (n.isVertical()) {
        if (
          (f < s.startY && n.translate <= n.maxTranslate()) ||
          (f > s.startY && n.translate >= n.minTranslate())
        ) {
          (r.isTouched = !1), (r.isMoved = !1);
          return;
        }
      } else if (
        (u < s.startX && n.translate <= n.maxTranslate()) ||
        (u > s.startX && n.translate >= n.minTranslate())
      )
        return;
    }
    if (
      r.isTouchEvent &&
      e.activeElement &&
      l.target === e.activeElement &&
      F(l.target).is(r.focusableElements)
    ) {
      (r.isMoved = !0), (n.allowClick = !1);
      return;
    }
    if (
      (r.allowTouchCallbacks && n.emit("touchMove", l),
      l.targetTouches && l.targetTouches.length > 1)
    )
      return;
    (s.currentX = u), (s.currentY = f);
    const d = s.currentX - s.startX,
      h = s.currentY - s.startY;
    if (
      n.params.threshold &&
      Math.sqrt($t(d, 2) + $t(h, 2)) < n.params.threshold
    )
      return;
    if (typeof r.isScrolling == "undefined") {
      let y;
      (n.isHorizontal() && s.currentY === s.startY) ||
      (n.isVertical() && s.currentX === s.startX)
        ? (r.isScrolling = !1)
        : d * d + h * h >= 25 &&
          ((y = (Math.atan2(Math.abs(h), Math.abs(d)) * 180) / Math.PI),
          (r.isScrolling = n.isHorizontal()
            ? y > i.touchAngle
            : 90 - y > i.touchAngle));
    }
    if (
      (r.isScrolling && n.emit("touchMoveOpposite", l),
      typeof r.startMoving == "undefined" &&
        (s.currentX !== s.startX || s.currentY !== s.startY) &&
        (r.startMoving = !0),
      r.isScrolling)
    ) {
      r.isTouched = !1;
      return;
    }
    if (!r.startMoving) return;
    (n.allowClick = !1),
      !i.cssMode && l.cancelable && l.preventDefault(),
      i.touchMoveStopPropagation && !i.nested && l.stopPropagation(),
      r.isMoved ||
        (i.loop && !i.cssMode && n.loopFix(),
        (r.startTranslate = n.getTranslate()),
        n.setTransition(0),
        n.animating &&
          n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (r.allowMomentumBounce = !1),
        i.grabCursor &&
          (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
          n.setGrabCursor(!0),
        n.emit("sliderFirstMove", l)),
      n.emit("sliderMove", l),
      (r.isMoved = !0);
    let m = n.isHorizontal() ? d : h;
    (s.diff = m),
      (m *= i.touchRatio),
      a && (m = -m),
      (n.swipeDirection = m > 0 ? "prev" : "next"),
      (r.currentTranslate = m + r.startTranslate);
    let p = !0,
      g = i.resistanceRatio;
    if (
      (i.touchReleaseOnEdges && (g = 0),
      m > 0 && r.currentTranslate > n.minTranslate()
        ? ((p = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              $t(-n.minTranslate() + r.startTranslate + m, g)))
        : m < 0 &&
          r.currentTranslate < n.maxTranslate() &&
          ((p = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              $t(n.maxTranslate() - r.startTranslate - m, g))),
      p && (l.preventedByNestedSwiper = !0),
      !n.allowSlideNext &&
        n.swipeDirection === "next" &&
        r.currentTranslate < r.startTranslate &&
        (r.currentTranslate = r.startTranslate),
      !n.allowSlidePrev &&
        n.swipeDirection === "prev" &&
        r.currentTranslate > r.startTranslate &&
        (r.currentTranslate = r.startTranslate),
      !n.allowSlidePrev &&
        !n.allowSlideNext &&
        (r.currentTranslate = r.startTranslate),
      i.threshold > 0)
    )
      if (Math.abs(m) > i.threshold || r.allowThresholdMove) {
        if (!r.allowThresholdMove) {
          (r.allowThresholdMove = !0),
            (s.startX = s.currentX),
            (s.startY = s.currentY),
            (r.currentTranslate = r.startTranslate),
            (s.diff = n.isHorizontal()
              ? s.currentX - s.startX
              : s.currentY - s.startY);
          return;
        }
      } else {
        r.currentTranslate = r.startTranslate;
        return;
      }
    !i.followFinger ||
      i.cssMode ||
      (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
        i.watchSlidesProgress) &&
        (n.updateActiveIndex(), n.updateSlidesClasses()),
      n.params.freeMode &&
        i.freeMode.enabled &&
        n.freeMode &&
        n.freeMode.onTouchMove(),
      n.updateProgress(r.currentTranslate),
      n.setTranslate(r.currentTranslate));
  }
  function xm(t) {
    const e = this,
      n = e.touchEventsData,
      { params: r, touches: i, rtlTranslate: s, slidesGrid: a, enabled: o } = e;
    if (!o) return;
    let l = t;
    if (
      (l.originalEvent && (l = l.originalEvent),
      n.allowTouchCallbacks && e.emit("touchEnd", l),
      (n.allowTouchCallbacks = !1),
      !n.isTouched)
    ) {
      n.isMoved && r.grabCursor && e.setGrabCursor(!1),
        (n.isMoved = !1),
        (n.startMoving = !1);
      return;
    }
    r.grabCursor &&
      n.isMoved &&
      n.isTouched &&
      (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
      e.setGrabCursor(!1);
    const c = Ot(),
      u = c - n.touchStartTime;
    if (e.allowClick) {
      const v = l.path || (l.composedPath && l.composedPath());
      e.updateClickedSlide((v && v[0]) || l.target),
        e.emit("tap click", l),
        u < 300 &&
          c - n.lastClickTime < 300 &&
          e.emit("doubleTap doubleClick", l);
    }
    if (
      ((n.lastClickTime = Ot()),
      Xn(() => {
        e.destroyed || (e.allowClick = !0);
      }),
      !n.isTouched ||
        !n.isMoved ||
        !e.swipeDirection ||
        i.diff === 0 ||
        n.currentTranslate === n.startTranslate)
    ) {
      (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
      return;
    }
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    let f;
    if (
      (r.followFinger
        ? (f = s ? e.translate : -e.translate)
        : (f = -n.currentTranslate),
      r.cssMode)
    )
      return;
    if (e.params.freeMode && r.freeMode.enabled) {
      e.freeMode.onTouchEnd({ currentPos: f });
      return;
    }
    let d = 0,
      h = e.slidesSizesGrid[0];
    for (
      let v = 0;
      v < a.length;
      v += v < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
    ) {
      const _ = v < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      typeof a[v + _] != "undefined"
        ? f >= a[v] && f < a[v + _] && ((d = v), (h = a[v + _] - a[v]))
        : f >= a[v] && ((d = v), (h = a[a.length - 1] - a[a.length - 2]));
    }
    let m = null,
      p = null;
    r.rewind &&
      (e.isBeginning
        ? (p =
            e.params.virtual && e.params.virtual.enabled && e.virtual
              ? e.virtual.slides.length - 1
              : e.slides.length - 1)
        : e.isEnd && (m = 0));
    const g = (f - a[d]) / h,
      y = d < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    if (u > r.longSwipesMs) {
      if (!r.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" &&
        (g >= r.longSwipesRatio
          ? e.slideTo(r.rewind && e.isEnd ? m : d + y)
          : e.slideTo(d)),
        e.swipeDirection === "prev" &&
          (g > 1 - r.longSwipesRatio
            ? e.slideTo(d + y)
            : p !== null && g < 0 && Math.abs(g) > r.longSwipesRatio
            ? e.slideTo(p)
            : e.slideTo(d));
    } else {
      if (!r.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation &&
      (l.target === e.navigation.nextEl || l.target === e.navigation.prevEl)
        ? l.target === e.navigation.nextEl
          ? e.slideTo(d + y)
          : e.slideTo(d)
        : (e.swipeDirection === "next" && e.slideTo(m !== null ? m : d + y),
          e.swipeDirection === "prev" && e.slideTo(p !== null ? p : d));
    }
  }
  function zc() {
    const t = this,
      { params: e, el: n } = t;
    if (n && n.offsetWidth === 0) return;
    e.breakpoints && t.setBreakpoint();
    const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = t;
    (t.allowSlideNext = !0),
      (t.allowSlidePrev = !0),
      t.updateSize(),
      t.updateSlides(),
      t.updateSlidesClasses(),
      (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
      t.isEnd &&
      !t.isBeginning &&
      !t.params.centeredSlides
        ? t.slideTo(t.slides.length - 1, 0, !1, !0)
        : t.slideTo(t.activeIndex, 0, !1, !0),
      t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.run(),
      (t.allowSlidePrev = i),
      (t.allowSlideNext = r),
      t.params.watchOverflow && s !== t.snapGrid && t.checkOverflow();
  }
  function Sm(t) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && t.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (t.stopPropagation(), t.stopImmediatePropagation())));
  }
  function Tm() {
    const t = this,
      { wrapperEl: e, rtlTranslate: n, enabled: r } = t;
    if (!r) return;
    (t.previousTranslate = t.translate),
      t.isHorizontal()
        ? (t.translate = -e.scrollLeft)
        : (t.translate = -e.scrollTop),
      t.translate === 0 && (t.translate = 0),
      t.updateActiveIndex(),
      t.updateSlidesClasses();
    let i;
    const s = t.maxTranslate() - t.minTranslate();
    s === 0 ? (i = 0) : (i = (t.translate - t.minTranslate()) / s),
      i !== t.progress && t.updateProgress(n ? -t.translate : t.translate),
      t.emit("setTranslate", t.translate, !1);
  }
  let Rc = !1;
  function Em() {}
  const Nc = (t, e) => {
    const n = Fe(),
      {
        params: r,
        touchEvents: i,
        el: s,
        wrapperEl: a,
        device: o,
        support: l,
      } = t,
      c = !!r.nested,
      u = e === "on" ? "addEventListener" : "removeEventListener",
      f = e;
    if (!l.touch)
      s[u](i.start, t.onTouchStart, !1),
        n[u](i.move, t.onTouchMove, c),
        n[u](i.end, t.onTouchEnd, !1);
    else {
      const d =
        i.start === "touchstart" && l.passiveListener && r.passiveListeners
          ? { passive: !0, capture: !1 }
          : !1;
      s[u](i.start, t.onTouchStart, d),
        s[u](
          i.move,
          t.onTouchMove,
          l.passiveListener ? { passive: !1, capture: c } : c
        ),
        s[u](i.end, t.onTouchEnd, d),
        i.cancel && s[u](i.cancel, t.onTouchEnd, d);
    }
    (r.preventClicks || r.preventClicksPropagation) &&
      s[u]("click", t.onClick, !0),
      r.cssMode && a[u]("scroll", t.onScroll),
      r.updateOnWindowResize
        ? t[f](
            o.ios || o.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            zc,
            !0
          )
        : t[f]("observerUpdate", zc, !0);
  };
  function wm() {
    const t = this,
      e = Fe(),
      { params: n, support: r } = t;
    (t.onTouchStart = _m.bind(t)),
      (t.onTouchMove = bm.bind(t)),
      (t.onTouchEnd = xm.bind(t)),
      n.cssMode && (t.onScroll = Tm.bind(t)),
      (t.onClick = Sm.bind(t)),
      r.touch && !Rc && (e.addEventListener("touchstart", Em), (Rc = !0)),
      Nc(t, "on");
  }
  function Cm() {
    Nc(this, "off");
  }
  const Pm = { attachEvents: wm, detachEvents: Cm },
    Fc = (t, e) => t.grid && e.grid && e.grid.rows > 1;
  function km() {
    const t = this,
      {
        activeIndex: e,
        initialized: n,
        loopedSlides: r = 0,
        params: i,
        $el: s,
      } = t,
      a = i.breakpoints;
    if (!a || (a && Object.keys(a).length === 0)) return;
    const o = t.getBreakpoint(a, t.params.breakpointsBase, t.el);
    if (!o || t.currentBreakpoint === o) return;
    const c = (o in a ? a[o] : void 0) || t.originalParams,
      u = Fc(t, i),
      f = Fc(t, c),
      d = i.enabled;
    u && !f
      ? (s.removeClass(
          `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
        ),
        t.emitContainerClasses())
      : !u &&
        f &&
        (s.addClass(`${i.containerModifierClass}grid`),
        ((c.grid.fill && c.grid.fill === "column") ||
          (!c.grid.fill && i.grid.fill === "column")) &&
          s.addClass(`${i.containerModifierClass}grid-column`),
        t.emitContainerClasses()),
      ["navigation", "pagination", "scrollbar"].forEach((g) => {
        const y = i[g] && i[g].enabled,
          v = c[g] && c[g].enabled;
        y && !v && t[g].disable(), !y && v && t[g].enable();
      });
    const h = c.direction && c.direction !== i.direction,
      m = i.loop && (c.slidesPerView !== i.slidesPerView || h);
    h && n && t.changeDirection(), At(t.params, c);
    const p = t.params.enabled;
    Object.assign(t, {
      allowTouchMove: t.params.allowTouchMove,
      allowSlideNext: t.params.allowSlideNext,
      allowSlidePrev: t.params.allowSlidePrev,
    }),
      d && !p ? t.disable() : !d && p && t.enable(),
      (t.currentBreakpoint = o),
      t.emit("_beforeBreakpoint", c),
      m &&
        n &&
        (t.loopDestroy(),
        t.loopCreate(),
        t.updateSlides(),
        t.slideTo(e - r + t.loopedSlides, 0, !1)),
      t.emit("breakpoint", c);
  }
  function Mm(t, e = "window", n) {
    if (!t || (e === "container" && !n)) return;
    let r = !1;
    const i = ge(),
      s = e === "window" ? i.innerHeight : n.clientHeight,
      a = Object.keys(t).map((o) => {
        if (typeof o == "string" && o.indexOf("@") === 0) {
          const l = parseFloat(o.substr(1));
          return { value: s * l, point: o };
        }
        return { value: o, point: o };
      });
    a.sort((o, l) => parseInt(o.value, 10) - parseInt(l.value, 10));
    for (let o = 0; o < a.length; o += 1) {
      const { point: l, value: c } = a[o];
      e === "window"
        ? i.matchMedia(`(min-width: ${c}px)`).matches && (r = l)
        : c <= n.clientWidth && (r = l);
    }
    return r || "max";
  }
  const $m = { setBreakpoint: km, getBreakpoint: Mm };
  function Om(t, e) {
    const n = [];
    return (
      t.forEach((r) => {
        typeof r == "object"
          ? Object.keys(r).forEach((i) => {
              r[i] && n.push(e + i);
            })
          : typeof r == "string" && n.push(e + r);
      }),
      n
    );
  }
  function Am() {
    const t = this,
      { classNames: e, params: n, rtl: r, $el: i, device: s, support: a } = t,
      o = Om(
        [
          "initialized",
          n.direction,
          { "pointer-events": !a.touch },
          { "free-mode": t.params.freeMode && n.freeMode.enabled },
          { autoheight: n.autoHeight },
          { rtl: r },
          { grid: n.grid && n.grid.rows > 1 },
          {
            "grid-column":
              n.grid && n.grid.rows > 1 && n.grid.fill === "column",
          },
          { android: s.android },
          { ios: s.ios },
          { "css-mode": n.cssMode },
          { centered: n.cssMode && n.centeredSlides },
          { "watch-progress": n.watchSlidesProgress },
        ],
        n.containerModifierClass
      );
    e.push(...o), i.addClass([...e].join(" ")), t.emitContainerClasses();
  }
  function Lm() {
    const t = this,
      { $el: e, classNames: n } = t;
    e.removeClass(n.join(" ")), t.emitContainerClasses();
  }
  const Im = { addClasses: Am, removeClasses: Lm };
  function Dm(t, e, n, r, i, s) {
    const a = ge();
    let o;
    function l() {
      s && s();
    }
    !F(t).parent("picture")[0] && (!t.complete || !i) && e
      ? ((o = new a.Image()),
        (o.onload = l),
        (o.onerror = l),
        r && (o.sizes = r),
        n && (o.srcset = n),
        e && (o.src = e))
      : l();
  }
  function zm() {
    const t = this;
    t.imagesToLoad = t.$el.find("img");
    function e() {
      typeof t == "undefined" ||
        t === null ||
        !t ||
        t.destroyed ||
        (t.imagesLoaded !== void 0 && (t.imagesLoaded += 1),
        t.imagesLoaded === t.imagesToLoad.length &&
          (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")));
    }
    for (let n = 0; n < t.imagesToLoad.length; n += 1) {
      const r = t.imagesToLoad[n];
      t.loadImage(
        r,
        r.currentSrc || r.getAttribute("src"),
        r.srcset || r.getAttribute("srcset"),
        r.sizes || r.getAttribute("sizes"),
        !0,
        e
      );
    }
  }
  const Rm = { loadImage: Dm, preloadImages: zm };
  function Nm() {
    const t = this,
      { isLocked: e, params: n } = t,
      { slidesOffsetBefore: r } = n;
    if (r) {
      const i = t.slides.length - 1,
        s = t.slidesGrid[i] + t.slidesSizesGrid[i] + r * 2;
      t.isLocked = t.size > s;
    } else t.isLocked = t.snapGrid.length === 1;
    n.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
      n.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
      e && e !== t.isLocked && (t.isEnd = !1),
      e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
  }
  const Fm = { checkOverflow: Nm },
    Bc = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: !0,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
  function Bm(t, e) {
    return function (r = {}) {
      const i = Object.keys(r)[0],
        s = r[i];
      if (typeof s != "object" || s === null) {
        At(e, r);
        return;
      }
      if (
        (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
          t[i] === !0 &&
          (t[i] = { auto: !0 }),
        !(i in t && "enabled" in s))
      ) {
        At(e, r);
        return;
      }
      t[i] === !0 && (t[i] = { enabled: !0 }),
        typeof t[i] == "object" && !("enabled" in t[i]) && (t[i].enabled = !0),
        t[i] || (t[i] = { enabled: !1 }),
        At(e, r);
    };
  }
  const ho = {
      eventsEmitter: zp,
      update: Yp,
      translate: Qp,
      transition: nm,
      slide: um,
      loop: pm,
      grabCursor: vm,
      events: Pm,
      breakpoints: $m,
      checkOverflow: Fm,
      classes: Im,
      images: Rm,
    },
    po = {};
  class pt {
    constructor(...e) {
      let n, r;
      if (
        (e.length === 1 &&
        e[0].constructor &&
        Object.prototype.toString.call(e[0]).slice(8, -1) === "Object"
          ? (r = e[0])
          : ([n, r] = e),
        r || (r = {}),
        (r = At({}, r)),
        n && !r.el && (r.el = n),
        r.el && F(r.el).length > 1)
      ) {
        const o = [];
        return (
          F(r.el).each((l) => {
            const c = At({}, r, { el: l });
            o.push(new pt(c));
          }),
          o
        );
      }
      const i = this;
      (i.__swiper__ = !0),
        (i.support = Ic()),
        (i.device = Op({ userAgent: r.userAgent })),
        (i.browser = Lp()),
        (i.eventsListeners = {}),
        (i.eventsAnyListeners = []),
        (i.modules = [...i.__modules__]),
        r.modules && Array.isArray(r.modules) && i.modules.push(...r.modules);
      const s = {};
      i.modules.forEach((o) => {
        o({
          swiper: i,
          extendParams: Bm(r, s),
          on: i.on.bind(i),
          once: i.once.bind(i),
          off: i.off.bind(i),
          emit: i.emit.bind(i),
        });
      });
      const a = At({}, Bc, s);
      return (
        (i.params = At({}, a, po, r)),
        (i.originalParams = At({}, i.params)),
        (i.passedParams = At({}, r)),
        i.params &&
          i.params.on &&
          Object.keys(i.params.on).forEach((o) => {
            i.on(o, i.params.on[o]);
          }),
        i.params && i.params.onAny && i.onAny(i.params.onAny),
        (i.$ = F),
        Object.assign(i, {
          enabled: i.params.enabled,
          el: n,
          classNames: [],
          slides: F(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() {
            return i.params.direction === "horizontal";
          },
          isVertical() {
            return i.params.direction === "vertical";
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: i.params.allowSlideNext,
          allowSlidePrev: i.params.allowSlidePrev,
          touchEvents: (function () {
            const l = ["touchstart", "touchmove", "touchend", "touchcancel"],
              c = ["pointerdown", "pointermove", "pointerup"];
            return (
              (i.touchEventsTouch = {
                start: l[0],
                move: l[1],
                end: l[2],
                cancel: l[3],
              }),
              (i.touchEventsDesktop = { start: c[0], move: c[1], end: c[2] }),
              i.support.touch || !i.params.simulateTouch
                ? i.touchEventsTouch
                : i.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: i.params.focusableElements,
            lastClickTime: Ot(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: i.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        i.emit("_swiper"),
        i.params.init && i.init(),
        i
      );
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, n) {
      const r = this;
      e = Math.min(Math.max(e, 0), 1);
      const i = r.minTranslate(),
        a = (r.maxTranslate() - i) * e + i;
      r.translateTo(a, typeof n == "undefined" ? 0 : n),
        r.updateActiveIndex(),
        r.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const n = e.el.className
        .split(" ")
        .filter(
          (r) =>
            r.indexOf("swiper") === 0 ||
            r.indexOf(e.params.containerModifierClass) === 0
        );
      e.emit("_containerClasses", n.join(" "));
    }
    getSlideClasses(e) {
      const n = this;
      return n.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (r) =>
                r.indexOf("swiper-slide") === 0 ||
                r.indexOf(n.params.slideClass) === 0
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const n = [];
      e.slides.each((r) => {
        const i = e.getSlideClasses(r);
        n.push({ slideEl: r, classNames: i }), e.emit("_slideClass", r, i);
      }),
        e.emit("_slideClasses", n);
    }
    slidesPerViewDynamic(e = "current", n = !1) {
      const r = this,
        {
          params: i,
          slides: s,
          slidesGrid: a,
          slidesSizesGrid: o,
          size: l,
          activeIndex: c,
        } = r;
      let u = 1;
      if (i.centeredSlides) {
        let f = s[c].swiperSlideSize,
          d;
        for (let h = c + 1; h < s.length; h += 1)
          s[h] &&
            !d &&
            ((f += s[h].swiperSlideSize), (u += 1), f > l && (d = !0));
        for (let h = c - 1; h >= 0; h -= 1)
          s[h] &&
            !d &&
            ((f += s[h].swiperSlideSize), (u += 1), f > l && (d = !0));
      } else if (e === "current")
        for (let f = c + 1; f < s.length; f += 1)
          (n ? a[f] + o[f] - a[c] < l : a[f] - a[c] < l) && (u += 1);
      else for (let f = c - 1; f >= 0; f -= 1) a[c] - a[f] < l && (u += 1);
      return u;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: n, params: r } = e;
      r.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
      function i() {
        const a = e.rtlTranslate ? e.translate * -1 : e.translate,
          o = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
        e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let s;
      e.params.freeMode && e.params.freeMode.enabled
        ? (i(), e.params.autoHeight && e.updateAutoHeight())
        : ((e.params.slidesPerView === "auto" || e.params.slidesPerView > 1) &&
          e.isEnd &&
          !e.params.centeredSlides
            ? (s = e.slideTo(e.slides.length - 1, 0, !1, !0))
            : (s = e.slideTo(e.activeIndex, 0, !1, !0)),
          s || i()),
        r.watchOverflow && n !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, n = !0) {
      const r = this,
        i = r.params.direction;
      return (
        e || (e = i === "horizontal" ? "vertical" : "horizontal"),
        e === i ||
          (e !== "horizontal" && e !== "vertical") ||
          (r.$el
            .removeClass(`${r.params.containerModifierClass}${i}`)
            .addClass(`${r.params.containerModifierClass}${e}`),
          r.emitContainerClasses(),
          (r.params.direction = e),
          r.slides.each((s) => {
            e === "vertical" ? (s.style.width = "") : (s.style.height = "");
          }),
          r.emit("changeDirection"),
          n && r.update()),
        r
      );
    }
    changeLanguageDirection(e) {
      const n = this;
      (n.rtl && e === "rtl") ||
        (!n.rtl && e === "ltr") ||
        ((n.rtl = e === "rtl"),
        (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
        n.rtl
          ? (n.$el.addClass(`${n.params.containerModifierClass}rtl`),
            (n.el.dir = "rtl"))
          : (n.$el.removeClass(`${n.params.containerModifierClass}rtl`),
            (n.el.dir = "ltr")),
        n.update());
    }
    mount(e) {
      const n = this;
      if (n.mounted) return !0;
      const r = F(e || n.params.el);
      if (((e = r[0]), !e)) return !1;
      e.swiper = n;
      const i = () =>
        `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let a = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const o = F(e.shadowRoot.querySelector(i()));
          return (o.children = (l) => r.children(l)), o;
        }
        return r.children ? r.children(i()) : F(r).children(i());
      })();
      if (a.length === 0 && n.params.createElements) {
        const l = Fe().createElement("div");
        (a = F(l)),
          (l.className = n.params.wrapperClass),
          r.append(l),
          r.children(`.${n.params.slideClass}`).each((c) => {
            a.append(c);
          });
      }
      return (
        Object.assign(n, {
          $el: r,
          el: e,
          $wrapperEl: a,
          wrapperEl: a[0],
          mounted: !0,
          rtl: e.dir.toLowerCase() === "rtl" || r.css("direction") === "rtl",
          rtlTranslate:
            n.params.direction === "horizontal" &&
            (e.dir.toLowerCase() === "rtl" || r.css("direction") === "rtl"),
          wrongRTL: a.css("display") === "-webkit-box",
        }),
        !0
      );
    }
    init(e) {
      const n = this;
      return (
        n.initialized ||
          n.mount(e) === !1 ||
          (n.emit("beforeInit"),
          n.params.breakpoints && n.setBreakpoint(),
          n.addClasses(),
          n.params.loop && n.loopCreate(),
          n.updateSize(),
          n.updateSlides(),
          n.params.watchOverflow && n.checkOverflow(),
          n.params.grabCursor && n.enabled && n.setGrabCursor(),
          n.params.preloadImages && n.preloadImages(),
          n.params.loop
            ? n.slideTo(
                n.params.initialSlide + n.loopedSlides,
                0,
                n.params.runCallbacksOnInit,
                !1,
                !0
              )
            : n.slideTo(
                n.params.initialSlide,
                0,
                n.params.runCallbacksOnInit,
                !1,
                !0
              ),
          n.attachEvents(),
          (n.initialized = !0),
          n.emit("init"),
          n.emit("afterInit")),
        n
      );
    }
    destroy(e = !0, n = !0) {
      const r = this,
        { params: i, $el: s, $wrapperEl: a, slides: o } = r;
      return (
        typeof r.params == "undefined" ||
          r.destroyed ||
          (r.emit("beforeDestroy"),
          (r.initialized = !1),
          r.detachEvents(),
          i.loop && r.loopDestroy(),
          n &&
            (r.removeClasses(),
            s.removeAttr("style"),
            a.removeAttr("style"),
            o &&
              o.length &&
              o
                .removeClass(
                  [
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          r.emit("destroy"),
          Object.keys(r.eventsListeners).forEach((l) => {
            r.off(l);
          }),
          e !== !1 && ((r.$el[0].swiper = null), Cp(r)),
          (r.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      At(po, e);
    }
    static get extendedDefaults() {
      return po;
    }
    static get defaults() {
      return Bc;
    }
    static installModule(e) {
      pt.prototype.__modules__ || (pt.prototype.__modules__ = []);
      const n = pt.prototype.__modules__;
      typeof e == "function" && n.indexOf(e) < 0 && n.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((n) => pt.installModule(n)), pt)
        : (pt.installModule(e), pt);
    }
  }
  Object.keys(ho).forEach((t) => {
    Object.keys(ho[t]).forEach((e) => {
      pt.prototype[e] = ho[t][e];
    });
  }),
    pt.use([Ip, Dp]);
  function qm({ swiper: t, extendParams: e, on: n, emit: r }) {
    e({
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0,
      },
    });
    let i;
    t.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: [],
    };
    function s(f, d) {
      const h = t.params.virtual;
      if (h.cache && t.virtual.cache[d]) return t.virtual.cache[d];
      const m = h.renderSlide
        ? F(h.renderSlide.call(t, f, d))
        : F(
            `<div class="${t.params.slideClass}" data-swiper-slide-index="${d}">${f}</div>`
          );
      return (
        m.attr("data-swiper-slide-index") ||
          m.attr("data-swiper-slide-index", d),
        h.cache && (t.virtual.cache[d] = m),
        m
      );
    }
    function a(f) {
      const {
          slidesPerView: d,
          slidesPerGroup: h,
          centeredSlides: m,
        } = t.params,
        { addSlidesBefore: p, addSlidesAfter: g } = t.params.virtual,
        { from: y, to: v, slides: _, slidesGrid: x, offset: S } = t.virtual;
      t.params.cssMode || t.updateActiveIndex();
      const w = t.activeIndex || 0;
      let C;
      t.rtlTranslate ? (C = "right") : (C = t.isHorizontal() ? "left" : "top");
      let P, O;
      m
        ? ((P = Math.floor(d / 2) + h + g), (O = Math.floor(d / 2) + h + p))
        : ((P = d + (h - 1) + g), (O = h + p));
      const T = Math.max((w || 0) - O, 0),
        M = Math.min((w || 0) + P, _.length - 1),
        b = (t.slidesGrid[T] || 0) - (t.slidesGrid[0] || 0);
      Object.assign(t.virtual, {
        from: T,
        to: M,
        offset: b,
        slidesGrid: t.slidesGrid,
      });
      function E() {
        t.updateSlides(),
          t.updateProgress(),
          t.updateSlidesClasses(),
          t.lazy && t.params.lazy.enabled && t.lazy.load(),
          r("virtualUpdate");
      }
      if (y === T && v === M && !f) {
        t.slidesGrid !== x && b !== S && t.slides.css(C, `${b}px`),
          t.updateProgress(),
          r("virtualUpdate");
        return;
      }
      if (t.params.virtual.renderExternal) {
        t.params.virtual.renderExternal.call(t, {
          offset: b,
          from: T,
          to: M,
          slides: (function () {
            const I = [];
            for (let D = T; D <= M; D += 1) I.push(_[D]);
            return I;
          })(),
        }),
          t.params.virtual.renderExternalUpdate ? E() : r("virtualUpdate");
        return;
      }
      const A = [],
        L = [];
      if (f) t.$wrapperEl.find(`.${t.params.slideClass}`).remove();
      else
        for (let k = y; k <= v; k += 1)
          (k < T || k > M) &&
            t.$wrapperEl
              .find(`.${t.params.slideClass}[data-swiper-slide-index="${k}"]`)
              .remove();
      for (let k = 0; k < _.length; k += 1)
        k >= T &&
          k <= M &&
          (typeof v == "undefined" || f
            ? L.push(k)
            : (k > v && L.push(k), k < y && A.push(k)));
      L.forEach((k) => {
        t.$wrapperEl.append(s(_[k], k));
      }),
        A.sort((k, I) => I - k).forEach((k) => {
          t.$wrapperEl.prepend(s(_[k], k));
        }),
        t.$wrapperEl.children(".swiper-slide").css(C, `${b}px`),
        E();
    }
    function o(f) {
      if (typeof f == "object" && "length" in f)
        for (let d = 0; d < f.length; d += 1)
          f[d] && t.virtual.slides.push(f[d]);
      else t.virtual.slides.push(f);
      a(!0);
    }
    function l(f) {
      const d = t.activeIndex;
      let h = d + 1,
        m = 1;
      if (Array.isArray(f)) {
        for (let p = 0; p < f.length; p += 1)
          f[p] && t.virtual.slides.unshift(f[p]);
        (h = d + f.length), (m = f.length);
      } else t.virtual.slides.unshift(f);
      if (t.params.virtual.cache) {
        const p = t.virtual.cache,
          g = {};
        Object.keys(p).forEach((y) => {
          const v = p[y],
            _ = v.attr("data-swiper-slide-index");
          _ && v.attr("data-swiper-slide-index", parseInt(_, 10) + m),
            (g[parseInt(y, 10) + m] = v);
        }),
          (t.virtual.cache = g);
      }
      a(!0), t.slideTo(h, 0);
    }
    function c(f) {
      if (typeof f == "undefined" || f === null) return;
      let d = t.activeIndex;
      if (Array.isArray(f))
        for (let h = f.length - 1; h >= 0; h -= 1)
          t.virtual.slides.splice(f[h], 1),
            t.params.virtual.cache && delete t.virtual.cache[f[h]],
            f[h] < d && (d -= 1),
            (d = Math.max(d, 0));
      else
        t.virtual.slides.splice(f, 1),
          t.params.virtual.cache && delete t.virtual.cache[f],
          f < d && (d -= 1),
          (d = Math.max(d, 0));
      a(!0), t.slideTo(d, 0);
    }
    function u() {
      (t.virtual.slides = []),
        t.params.virtual.cache && (t.virtual.cache = {}),
        a(!0),
        t.slideTo(0, 0);
    }
    n("beforeInit", () => {
      t.params.virtual.enabled &&
        ((t.virtual.slides = t.params.virtual.slides),
        t.classNames.push(`${t.params.containerModifierClass}virtual`),
        (t.params.watchSlidesProgress = !0),
        (t.originalParams.watchSlidesProgress = !0),
        t.params.initialSlide || a());
    }),
      n("setTranslate", () => {
        t.params.virtual.enabled &&
          (t.params.cssMode && !t._immediateVirtual
            ? (clearTimeout(i),
              (i = setTimeout(() => {
                a();
              }, 100)))
            : a());
      }),
      n("init update resize", () => {
        t.params.virtual.enabled &&
          t.params.cssMode &&
          Wi(t.wrapperEl, "--swiper-virtual-size", `${t.virtualSize}px`);
      }),
      Object.assign(t.virtual, {
        appendSlide: o,
        prependSlide: l,
        removeSlide: c,
        removeAllSlides: u,
        update: a,
      });
  }
  function Hm({ swiper: t, extendParams: e, on: n, emit: r }) {
    const i = Fe(),
      s = ge();
    (t.keyboard = { enabled: !1 }),
      e({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } });
    function a(c) {
      if (!t.enabled) return;
      const { rtlTranslate: u } = t;
      let f = c;
      f.originalEvent && (f = f.originalEvent);
      const d = f.keyCode || f.charCode,
        h = t.params.keyboard.pageUpDown,
        m = h && d === 33,
        p = h && d === 34,
        g = d === 37,
        y = d === 39,
        v = d === 38,
        _ = d === 40;
      if (
        (!t.allowSlideNext &&
          ((t.isHorizontal() && y) || (t.isVertical() && _) || p)) ||
        (!t.allowSlidePrev &&
          ((t.isHorizontal() && g) || (t.isVertical() && v) || m))
      )
        return !1;
      if (
        !(f.shiftKey || f.altKey || f.ctrlKey || f.metaKey) &&
        !(
          i.activeElement &&
          i.activeElement.nodeName &&
          (i.activeElement.nodeName.toLowerCase() === "input" ||
            i.activeElement.nodeName.toLowerCase() === "textarea")
        )
      ) {
        if (t.params.keyboard.onlyInViewport && (m || p || g || y || v || _)) {
          let x = !1;
          if (
            t.$el.parents(`.${t.params.slideClass}`).length > 0 &&
            t.$el.parents(`.${t.params.slideActiveClass}`).length === 0
          )
            return;
          const S = t.$el,
            w = S[0].clientWidth,
            C = S[0].clientHeight,
            P = s.innerWidth,
            O = s.innerHeight,
            T = t.$el.offset();
          u && (T.left -= t.$el[0].scrollLeft);
          const M = [
            [T.left, T.top],
            [T.left + w, T.top],
            [T.left, T.top + C],
            [T.left + w, T.top + C],
          ];
          for (let b = 0; b < M.length; b += 1) {
            const E = M[b];
            if (E[0] >= 0 && E[0] <= P && E[1] >= 0 && E[1] <= O) {
              if (E[0] === 0 && E[1] === 0) continue;
              x = !0;
            }
          }
          if (!x) return;
        }
        t.isHorizontal()
          ? ((m || p || g || y) &&
              (f.preventDefault ? f.preventDefault() : (f.returnValue = !1)),
            (((p || y) && !u) || ((m || g) && u)) && t.slideNext(),
            (((m || g) && !u) || ((p || y) && u)) && t.slidePrev())
          : ((m || p || v || _) &&
              (f.preventDefault ? f.preventDefault() : (f.returnValue = !1)),
            (p || _) && t.slideNext(),
            (m || v) && t.slidePrev()),
          r("keyPress", d);
      }
    }
    function o() {
      t.keyboard.enabled || (F(i).on("keydown", a), (t.keyboard.enabled = !0));
    }
    function l() {
      t.keyboard.enabled && (F(i).off("keydown", a), (t.keyboard.enabled = !1));
    }
    n("init", () => {
      t.params.keyboard.enabled && o();
    }),
      n("destroy", () => {
        t.keyboard.enabled && l();
      }),
      Object.assign(t.keyboard, { enable: o, disable: l });
  }
  function Vm({ swiper: t, extendParams: e, on: n, emit: r }) {
    const i = ge();
    e({
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null,
      },
    }),
      (t.mousewheel = { enabled: !1 });
    let s,
      a = Ot(),
      o;
    const l = [];
    function c(v) {
      let w = 0,
        C = 0,
        P = 0,
        O = 0;
      return (
        "detail" in v && (C = v.detail),
        "wheelDelta" in v && (C = -v.wheelDelta / 120),
        "wheelDeltaY" in v && (C = -v.wheelDeltaY / 120),
        "wheelDeltaX" in v && (w = -v.wheelDeltaX / 120),
        "axis" in v && v.axis === v.HORIZONTAL_AXIS && ((w = C), (C = 0)),
        (P = w * 10),
        (O = C * 10),
        "deltaY" in v && (O = v.deltaY),
        "deltaX" in v && (P = v.deltaX),
        v.shiftKey && !P && ((P = O), (O = 0)),
        (P || O) &&
          v.deltaMode &&
          (v.deltaMode === 1
            ? ((P *= 40), (O *= 40))
            : ((P *= 800), (O *= 800))),
        P && !w && (w = P < 1 ? -1 : 1),
        O && !C && (C = O < 1 ? -1 : 1),
        { spinX: w, spinY: C, pixelX: P, pixelY: O }
      );
    }
    function u() {
      t.enabled && (t.mouseEntered = !0);
    }
    function f() {
      t.enabled && (t.mouseEntered = !1);
    }
    function d(v) {
      return (t.params.mousewheel.thresholdDelta &&
        v.delta < t.params.mousewheel.thresholdDelta) ||
        (t.params.mousewheel.thresholdTime &&
          Ot() - a < t.params.mousewheel.thresholdTime)
        ? !1
        : v.delta >= 6 && Ot() - a < 60
        ? !0
        : (v.direction < 0
            ? (!t.isEnd || t.params.loop) &&
              !t.animating &&
              (t.slideNext(), r("scroll", v.raw))
            : (!t.isBeginning || t.params.loop) &&
              !t.animating &&
              (t.slidePrev(), r("scroll", v.raw)),
          (a = new i.Date().getTime()),
          !1);
    }
    function h(v) {
      const _ = t.params.mousewheel;
      if (v.direction < 0) {
        if (t.isEnd && !t.params.loop && _.releaseOnEdges) return !0;
      } else if (t.isBeginning && !t.params.loop && _.releaseOnEdges) return !0;
      return !1;
    }
    function m(v) {
      let _ = v,
        x = !0;
      if (!t.enabled) return;
      const S = t.params.mousewheel;
      t.params.cssMode && _.preventDefault();
      let w = t.$el;
      if (
        (t.params.mousewheel.eventsTarget !== "container" &&
          (w = F(t.params.mousewheel.eventsTarget)),
        !t.mouseEntered && !w[0].contains(_.target) && !S.releaseOnEdges)
      )
        return !0;
      _.originalEvent && (_ = _.originalEvent);
      let C = 0;
      const P = t.rtlTranslate ? -1 : 1,
        O = c(_);
      if (S.forceToAxis)
        if (t.isHorizontal())
          if (Math.abs(O.pixelX) > Math.abs(O.pixelY)) C = -O.pixelX * P;
          else return !0;
        else if (Math.abs(O.pixelY) > Math.abs(O.pixelX)) C = -O.pixelY;
        else return !0;
      else
        C = Math.abs(O.pixelX) > Math.abs(O.pixelY) ? -O.pixelX * P : -O.pixelY;
      if (C === 0) return !0;
      S.invert && (C = -C);
      let T = t.getTranslate() + C * S.sensitivity;
      if (
        (T >= t.minTranslate() && (T = t.minTranslate()),
        T <= t.maxTranslate() && (T = t.maxTranslate()),
        (x = t.params.loop
          ? !0
          : !(T === t.minTranslate() || T === t.maxTranslate())),
        x && t.params.nested && _.stopPropagation(),
        !t.params.freeMode || !t.params.freeMode.enabled)
      ) {
        const M = {
          time: Ot(),
          delta: Math.abs(C),
          direction: Math.sign(C),
          raw: v,
        };
        l.length >= 2 && l.shift();
        const b = l.length ? l[l.length - 1] : void 0;
        if (
          (l.push(M),
          b
            ? (M.direction !== b.direction ||
                M.delta > b.delta ||
                M.time > b.time + 150) &&
              d(M)
            : d(M),
          h(M))
        )
          return !0;
      } else {
        const M = { time: Ot(), delta: Math.abs(C), direction: Math.sign(C) },
          b =
            o &&
            M.time < o.time + 500 &&
            M.delta <= o.delta &&
            M.direction === o.direction;
        if (!b) {
          (o = void 0), t.params.loop && t.loopFix();
          let E = t.getTranslate() + C * S.sensitivity;
          const A = t.isBeginning,
            L = t.isEnd;
          if (
            (E >= t.minTranslate() && (E = t.minTranslate()),
            E <= t.maxTranslate() && (E = t.maxTranslate()),
            t.setTransition(0),
            t.setTranslate(E),
            t.updateProgress(),
            t.updateActiveIndex(),
            t.updateSlidesClasses(),
            ((!A && t.isBeginning) || (!L && t.isEnd)) &&
              t.updateSlidesClasses(),
            t.params.freeMode.sticky)
          ) {
            clearTimeout(s), (s = void 0), l.length >= 15 && l.shift();
            const k = l.length ? l[l.length - 1] : void 0,
              I = l[0];
            if (
              (l.push(M),
              k && (M.delta > k.delta || M.direction !== k.direction))
            )
              l.splice(0);
            else if (
              l.length >= 15 &&
              M.time - I.time < 500 &&
              I.delta - M.delta >= 1 &&
              M.delta <= 6
            ) {
              const D = C > 0 ? 0.8 : 0.2;
              (o = M),
                l.splice(0),
                (s = Xn(() => {
                  t.slideToClosest(t.params.speed, !0, void 0, D);
                }, 0));
            }
            s ||
              (s = Xn(() => {
                (o = M),
                  l.splice(0),
                  t.slideToClosest(t.params.speed, !0, void 0, 0.5);
              }, 500));
          }
          if (
            (b || r("scroll", _),
            t.params.autoplay &&
              t.params.autoplayDisableOnInteraction &&
              t.autoplay.stop(),
            E === t.minTranslate() || E === t.maxTranslate())
          )
            return !0;
        }
      }
      return _.preventDefault ? _.preventDefault() : (_.returnValue = !1), !1;
    }
    function p(v) {
      let _ = t.$el;
      t.params.mousewheel.eventsTarget !== "container" &&
        (_ = F(t.params.mousewheel.eventsTarget)),
        _[v]("mouseenter", u),
        _[v]("mouseleave", f),
        _[v]("wheel", m);
    }
    function g() {
      return t.params.cssMode
        ? (t.wrapperEl.removeEventListener("wheel", m), !0)
        : t.mousewheel.enabled
        ? !1
        : (p("on"), (t.mousewheel.enabled = !0), !0);
    }
    function y() {
      return t.params.cssMode
        ? (t.wrapperEl.addEventListener(event, m), !0)
        : t.mousewheel.enabled
        ? (p("off"), (t.mousewheel.enabled = !1), !0)
        : !1;
    }
    n("init", () => {
      !t.params.mousewheel.enabled && t.params.cssMode && y(),
        t.params.mousewheel.enabled && g();
    }),
      n("destroy", () => {
        t.params.cssMode && g(), t.mousewheel.enabled && y();
      }),
      Object.assign(t.mousewheel, { enable: g, disable: y });
  }
  function mo(t, e, n, r) {
    const i = Fe();
    return (
      t.params.createElements &&
        Object.keys(r).forEach((s) => {
          if (!n[s] && n.auto === !0) {
            let a = t.$el.children(`.${r[s]}`)[0];
            a ||
              ((a = i.createElement("div")),
              (a.className = r[s]),
              t.$el.append(a)),
              (n[s] = a),
              (e[s] = a);
          }
        }),
      n
    );
  }
  function Wm({ swiper: t, extendParams: e, on: n, emit: r }) {
    e({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled",
      },
    }),
      (t.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null,
      });
    function i(h) {
      let m;
      return (
        h &&
          ((m = F(h)),
          t.params.uniqueNavElements &&
            typeof h == "string" &&
            m.length > 1 &&
            t.$el.find(h).length === 1 &&
            (m = t.$el.find(h))),
        m
      );
    }
    function s(h, m) {
      const p = t.params.navigation;
      h &&
        h.length > 0 &&
        (h[m ? "addClass" : "removeClass"](p.disabledClass),
        h[0] && h[0].tagName === "BUTTON" && (h[0].disabled = m),
        t.params.watchOverflow &&
          t.enabled &&
          h[t.isLocked ? "addClass" : "removeClass"](p.lockClass));
    }
    function a() {
      if (t.params.loop) return;
      const { $nextEl: h, $prevEl: m } = t.navigation;
      s(m, t.isBeginning && !t.params.rewind),
        s(h, t.isEnd && !t.params.rewind);
    }
    function o(h) {
      h.preventDefault(),
        !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
          (t.slidePrev(), r("navigationPrev"));
    }
    function l(h) {
      h.preventDefault(),
        !(t.isEnd && !t.params.loop && !t.params.rewind) &&
          (t.slideNext(), r("navigationNext"));
    }
    function c() {
      const h = t.params.navigation;
      if (
        ((t.params.navigation = mo(
          t,
          t.originalParams.navigation,
          t.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !(h.nextEl || h.prevEl))
      )
        return;
      const m = i(h.nextEl),
        p = i(h.prevEl);
      m && m.length > 0 && m.on("click", l),
        p && p.length > 0 && p.on("click", o),
        Object.assign(t.navigation, {
          $nextEl: m,
          nextEl: m && m[0],
          $prevEl: p,
          prevEl: p && p[0],
        }),
        t.enabled ||
          (m && m.addClass(h.lockClass), p && p.addClass(h.lockClass));
    }
    function u() {
      const { $nextEl: h, $prevEl: m } = t.navigation;
      h &&
        h.length &&
        (h.off("click", l), h.removeClass(t.params.navigation.disabledClass)),
        m &&
          m.length &&
          (m.off("click", o), m.removeClass(t.params.navigation.disabledClass));
    }
    n("init", () => {
      t.params.navigation.enabled === !1 ? d() : (c(), a());
    }),
      n("toEdge fromEdge lock unlock", () => {
        a();
      }),
      n("destroy", () => {
        u();
      }),
      n("enable disable", () => {
        const { $nextEl: h, $prevEl: m } = t.navigation;
        h &&
          h[t.enabled ? "removeClass" : "addClass"](
            t.params.navigation.lockClass
          ),
          m &&
            m[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            );
      }),
      n("click", (h, m) => {
        const { $nextEl: p, $prevEl: g } = t.navigation,
          y = m.target;
        if (t.params.navigation.hideOnClick && !F(y).is(g) && !F(y).is(p)) {
          if (
            t.pagination &&
            t.params.pagination &&
            t.params.pagination.clickable &&
            (t.pagination.el === y || t.pagination.el.contains(y))
          )
            return;
          let v;
          p
            ? (v = p.hasClass(t.params.navigation.hiddenClass))
            : g && (v = g.hasClass(t.params.navigation.hiddenClass)),
            r(v === !0 ? "navigationShow" : "navigationHide"),
            p && p.toggleClass(t.params.navigation.hiddenClass),
            g && g.toggleClass(t.params.navigation.hiddenClass);
        }
      });
    const f = () => {
        t.$el.removeClass(t.params.navigation.navigationDisabledClass),
          c(),
          a();
      },
      d = () => {
        t.$el.addClass(t.params.navigation.navigationDisabledClass), u();
      };
    Object.assign(t.navigation, {
      enable: f,
      disable: d,
      update: a,
      init: c,
      destroy: u,
    });
  }
  function $n(t = "") {
    return `.${t
      .trim()
      .replace(/([\.:!\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }
  function Xm({ swiper: t, extendParams: e, on: n, emit: r }) {
    const i = "swiper-pagination";
    e({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (p) => p,
        formatFractionTotal: (p) => p,
        bulletClass: `${i}-bullet`,
        bulletActiveClass: `${i}-bullet-active`,
        modifierClass: `${i}-`,
        currentClass: `${i}-current`,
        totalClass: `${i}-total`,
        hiddenClass: `${i}-hidden`,
        progressbarFillClass: `${i}-progressbar-fill`,
        progressbarOppositeClass: `${i}-progressbar-opposite`,
        clickableClass: `${i}-clickable`,
        lockClass: `${i}-lock`,
        horizontalClass: `${i}-horizontal`,
        verticalClass: `${i}-vertical`,
        paginationDisabledClass: `${i}-disabled`,
      },
    }),
      (t.pagination = { el: null, $el: null, bullets: [] });
    let s,
      a = 0;
    function o() {
      return (
        !t.params.pagination.el ||
        !t.pagination.el ||
        !t.pagination.$el ||
        t.pagination.$el.length === 0
      );
    }
    function l(p, g) {
      const { bulletActiveClass: y } = t.params.pagination;
      p[g]().addClass(`${y}-${g}`)[g]().addClass(`${y}-${g}-${g}`);
    }
    function c() {
      const p = t.rtl,
        g = t.params.pagination;
      if (o()) return;
      const y =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length,
        v = t.pagination.$el;
      let _;
      const x = t.params.loop
        ? Math.ceil((y - t.loopedSlides * 2) / t.params.slidesPerGroup)
        : t.snapGrid.length;
      if (
        (t.params.loop
          ? ((_ = Math.ceil(
              (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
            )),
            _ > y - 1 - t.loopedSlides * 2 && (_ -= y - t.loopedSlides * 2),
            _ > x - 1 && (_ -= x),
            _ < 0 && t.params.paginationType !== "bullets" && (_ = x + _))
          : typeof t.snapIndex != "undefined"
          ? (_ = t.snapIndex)
          : (_ = t.activeIndex || 0),
        g.type === "bullets" &&
          t.pagination.bullets &&
          t.pagination.bullets.length > 0)
      ) {
        const S = t.pagination.bullets;
        let w, C, P;
        if (
          (g.dynamicBullets &&
            ((s = S.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
            v.css(
              t.isHorizontal() ? "width" : "height",
              `${s * (g.dynamicMainBullets + 4)}px`
            ),
            g.dynamicMainBullets > 1 &&
              t.previousIndex !== void 0 &&
              ((a += _ - (t.previousIndex - t.loopedSlides || 0)),
              a > g.dynamicMainBullets - 1
                ? (a = g.dynamicMainBullets - 1)
                : a < 0 && (a = 0)),
            (w = Math.max(_ - a, 0)),
            (C = w + (Math.min(S.length, g.dynamicMainBullets) - 1)),
            (P = (C + w) / 2)),
          S.removeClass(
            ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
              .map((O) => `${g.bulletActiveClass}${O}`)
              .join(" ")
          ),
          v.length > 1)
        )
          S.each((O) => {
            const T = F(O),
              M = T.index();
            M === _ && T.addClass(g.bulletActiveClass),
              g.dynamicBullets &&
                (M >= w && M <= C && T.addClass(`${g.bulletActiveClass}-main`),
                M === w && l(T, "prev"),
                M === C && l(T, "next"));
          });
        else {
          const O = S.eq(_),
            T = O.index();
          if ((O.addClass(g.bulletActiveClass), g.dynamicBullets)) {
            const M = S.eq(w),
              b = S.eq(C);
            for (let E = w; E <= C; E += 1)
              S.eq(E).addClass(`${g.bulletActiveClass}-main`);
            if (t.params.loop)
              if (T >= S.length) {
                for (let E = g.dynamicMainBullets; E >= 0; E -= 1)
                  S.eq(S.length - E).addClass(`${g.bulletActiveClass}-main`);
                S.eq(S.length - g.dynamicMainBullets - 1).addClass(
                  `${g.bulletActiveClass}-prev`
                );
              } else l(M, "prev"), l(b, "next");
            else l(M, "prev"), l(b, "next");
          }
        }
        if (g.dynamicBullets) {
          const O = Math.min(S.length, g.dynamicMainBullets + 4),
            T = (s * O - s) / 2 - P * s,
            M = p ? "right" : "left";
          S.css(t.isHorizontal() ? M : "top", `${T}px`);
        }
      }
      if (
        (g.type === "fraction" &&
          (v.find($n(g.currentClass)).text(g.formatFractionCurrent(_ + 1)),
          v.find($n(g.totalClass)).text(g.formatFractionTotal(x))),
        g.type === "progressbar")
      ) {
        let S;
        g.progressbarOpposite
          ? (S = t.isHorizontal() ? "vertical" : "horizontal")
          : (S = t.isHorizontal() ? "horizontal" : "vertical");
        const w = (_ + 1) / x;
        let C = 1,
          P = 1;
        S === "horizontal" ? (C = w) : (P = w),
          v
            .find($n(g.progressbarFillClass))
            .transform(`translate3d(0,0,0) scaleX(${C}) scaleY(${P})`)
            .transition(t.params.speed);
      }
      g.type === "custom" && g.renderCustom
        ? (v.html(g.renderCustom(t, _ + 1, x)), r("paginationRender", v[0]))
        : r("paginationUpdate", v[0]),
        t.params.watchOverflow &&
          t.enabled &&
          v[t.isLocked ? "addClass" : "removeClass"](g.lockClass);
    }
    function u() {
      const p = t.params.pagination;
      if (o()) return;
      const g =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length,
        y = t.pagination.$el;
      let v = "";
      if (p.type === "bullets") {
        let _ = t.params.loop
          ? Math.ceil((g - t.loopedSlides * 2) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          !t.params.loop &&
          _ > g &&
          (_ = g);
        for (let x = 0; x < _; x += 1)
          p.renderBullet
            ? (v += p.renderBullet.call(t, x, p.bulletClass))
            : (v += `<${p.bulletElement} class="${p.bulletClass}"></${p.bulletElement}>`);
        y.html(v), (t.pagination.bullets = y.find($n(p.bulletClass)));
      }
      p.type === "fraction" &&
        (p.renderFraction
          ? (v = p.renderFraction.call(t, p.currentClass, p.totalClass))
          : (v = `<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),
        y.html(v)),
        p.type === "progressbar" &&
          (p.renderProgressbar
            ? (v = p.renderProgressbar.call(t, p.progressbarFillClass))
            : (v = `<span class="${p.progressbarFillClass}"></span>`),
          y.html(v)),
        p.type !== "custom" && r("paginationRender", t.pagination.$el[0]);
    }
    function f() {
      t.params.pagination = mo(
        t,
        t.originalParams.pagination,
        t.params.pagination,
        { el: "swiper-pagination" }
      );
      const p = t.params.pagination;
      if (!p.el) return;
      let g = F(p.el);
      g.length !== 0 &&
        (t.params.uniqueNavElements &&
          typeof p.el == "string" &&
          g.length > 1 &&
          ((g = t.$el.find(p.el)),
          g.length > 1 &&
            (g = g.filter((y) => F(y).parents(".swiper")[0] === t.el))),
        p.type === "bullets" && p.clickable && g.addClass(p.clickableClass),
        g.addClass(p.modifierClass + p.type),
        g.addClass(t.isHorizontal() ? p.horizontalClass : p.verticalClass),
        p.type === "bullets" &&
          p.dynamicBullets &&
          (g.addClass(`${p.modifierClass}${p.type}-dynamic`),
          (a = 0),
          p.dynamicMainBullets < 1 && (p.dynamicMainBullets = 1)),
        p.type === "progressbar" &&
          p.progressbarOpposite &&
          g.addClass(p.progressbarOppositeClass),
        p.clickable &&
          g.on("click", $n(p.bulletClass), function (v) {
            v.preventDefault();
            let _ = F(this).index() * t.params.slidesPerGroup;
            t.params.loop && (_ += t.loopedSlides), t.slideTo(_);
          }),
        Object.assign(t.pagination, { $el: g, el: g[0] }),
        t.enabled || g.addClass(p.lockClass));
    }
    function d() {
      const p = t.params.pagination;
      if (o()) return;
      const g = t.pagination.$el;
      g.removeClass(p.hiddenClass),
        g.removeClass(p.modifierClass + p.type),
        g.removeClass(t.isHorizontal() ? p.horizontalClass : p.verticalClass),
        t.pagination.bullets &&
          t.pagination.bullets.removeClass &&
          t.pagination.bullets.removeClass(p.bulletActiveClass),
        p.clickable && g.off("click", $n(p.bulletClass));
    }
    n("init", () => {
      t.params.pagination.enabled === !1 ? m() : (f(), u(), c());
    }),
      n("activeIndexChange", () => {
        (t.params.loop || typeof t.snapIndex == "undefined") && c();
      }),
      n("snapIndexChange", () => {
        t.params.loop || c();
      }),
      n("slidesLengthChange", () => {
        t.params.loop && (u(), c());
      }),
      n("snapGridLengthChange", () => {
        t.params.loop || (u(), c());
      }),
      n("destroy", () => {
        d();
      }),
      n("enable disable", () => {
        const { $el: p } = t.pagination;
        p &&
          p[t.enabled ? "removeClass" : "addClass"](
            t.params.pagination.lockClass
          );
      }),
      n("lock unlock", () => {
        c();
      }),
      n("click", (p, g) => {
        const y = g.target,
          { $el: v } = t.pagination;
        if (
          t.params.pagination.el &&
          t.params.pagination.hideOnClick &&
          v &&
          v.length > 0 &&
          !F(y).hasClass(t.params.pagination.bulletClass)
        ) {
          if (
            t.navigation &&
            ((t.navigation.nextEl && y === t.navigation.nextEl) ||
              (t.navigation.prevEl && y === t.navigation.prevEl))
          )
            return;
          const _ = v.hasClass(t.params.pagination.hiddenClass);
          r(_ === !0 ? "paginationShow" : "paginationHide"),
            v.toggleClass(t.params.pagination.hiddenClass);
        }
      });
    const h = () => {
        t.$el.removeClass(t.params.pagination.paginationDisabledClass),
          t.pagination.$el &&
            t.pagination.$el.removeClass(
              t.params.pagination.paginationDisabledClass
            ),
          f(),
          u(),
          c();
      },
      m = () => {
        t.$el.addClass(t.params.pagination.paginationDisabledClass),
          t.pagination.$el &&
            t.pagination.$el.addClass(
              t.params.pagination.paginationDisabledClass
            ),
          d();
      };
    Object.assign(t.pagination, {
      enable: h,
      disable: m,
      render: u,
      update: c,
      init: f,
      destroy: d,
    });
  }
  function Ym({ swiper: t, extendParams: e, on: n, emit: r }) {
    const i = Fe();
    let s = !1,
      a = null,
      o = null,
      l,
      c,
      u,
      f;
    e({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical",
      },
    }),
      (t.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null });
    function d() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return;
      const { scrollbar: M, rtlTranslate: b, progress: E } = t,
        { $dragEl: A, $el: L } = M,
        k = t.params.scrollbar;
      let I = c,
        D = (u - c) * E;
      b
        ? ((D = -D), D > 0 ? ((I = c - D), (D = 0)) : -D + c > u && (I = u + D))
        : D < 0
        ? ((I = c + D), (D = 0))
        : D + c > u && (I = u - D),
        t.isHorizontal()
          ? (A.transform(`translate3d(${D}px, 0, 0)`),
            (A[0].style.width = `${I}px`))
          : (A.transform(`translate3d(0px, ${D}px, 0)`),
            (A[0].style.height = `${I}px`)),
        k.hide &&
          (clearTimeout(a),
          (L[0].style.opacity = 1),
          (a = setTimeout(() => {
            (L[0].style.opacity = 0), L.transition(400);
          }, 1e3)));
    }
    function h(M) {
      !t.params.scrollbar.el ||
        !t.scrollbar.el ||
        t.scrollbar.$dragEl.transition(M);
    }
    function m() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return;
      const { scrollbar: M } = t,
        { $dragEl: b, $el: E } = M;
      (b[0].style.width = ""),
        (b[0].style.height = ""),
        (u = t.isHorizontal() ? E[0].offsetWidth : E[0].offsetHeight),
        (f =
          t.size /
          (t.virtualSize +
            t.params.slidesOffsetBefore -
            (t.params.centeredSlides ? t.snapGrid[0] : 0))),
        t.params.scrollbar.dragSize === "auto"
          ? (c = u * f)
          : (c = parseInt(t.params.scrollbar.dragSize, 10)),
        t.isHorizontal()
          ? (b[0].style.width = `${c}px`)
          : (b[0].style.height = `${c}px`),
        f >= 1 ? (E[0].style.display = "none") : (E[0].style.display = ""),
        t.params.scrollbar.hide && (E[0].style.opacity = 0),
        t.params.watchOverflow &&
          t.enabled &&
          M.$el[t.isLocked ? "addClass" : "removeClass"](
            t.params.scrollbar.lockClass
          );
    }
    function p(M) {
      return t.isHorizontal()
        ? M.type === "touchstart" || M.type === "touchmove"
          ? M.targetTouches[0].clientX
          : M.clientX
        : M.type === "touchstart" || M.type === "touchmove"
        ? M.targetTouches[0].clientY
        : M.clientY;
    }
    function g(M) {
      const { scrollbar: b, rtlTranslate: E } = t,
        { $el: A } = b;
      let L;
      (L =
        (p(M) -
          A.offset()[t.isHorizontal() ? "left" : "top"] -
          (l !== null ? l : c / 2)) /
        (u - c)),
        (L = Math.max(Math.min(L, 1), 0)),
        E && (L = 1 - L);
      const k = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * L;
      t.updateProgress(k),
        t.setTranslate(k),
        t.updateActiveIndex(),
        t.updateSlidesClasses();
    }
    function y(M) {
      const b = t.params.scrollbar,
        { scrollbar: E, $wrapperEl: A } = t,
        { $el: L, $dragEl: k } = E;
      (s = !0),
        (l =
          M.target === k[0] || M.target === k
            ? p(M) -
              M.target.getBoundingClientRect()[
                t.isHorizontal() ? "left" : "top"
              ]
            : null),
        M.preventDefault(),
        M.stopPropagation(),
        A.transition(100),
        k.transition(100),
        g(M),
        clearTimeout(o),
        L.transition(0),
        b.hide && L.css("opacity", 1),
        t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
        r("scrollbarDragStart", M);
    }
    function v(M) {
      const { scrollbar: b, $wrapperEl: E } = t,
        { $el: A, $dragEl: L } = b;
      s &&
        (M.preventDefault ? M.preventDefault() : (M.returnValue = !1),
        g(M),
        E.transition(0),
        A.transition(0),
        L.transition(0),
        r("scrollbarDragMove", M));
    }
    function _(M) {
      const b = t.params.scrollbar,
        { scrollbar: E, $wrapperEl: A } = t,
        { $el: L } = E;
      s &&
        ((s = !1),
        t.params.cssMode &&
          (t.$wrapperEl.css("scroll-snap-type", ""), A.transition("")),
        b.hide &&
          (clearTimeout(o),
          (o = Xn(() => {
            L.css("opacity", 0), L.transition(400);
          }, 1e3))),
        r("scrollbarDragEnd", M),
        b.snapOnRelease && t.slideToClosest());
    }
    function x(M) {
      const {
          scrollbar: b,
          touchEventsTouch: E,
          touchEventsDesktop: A,
          params: L,
          support: k,
        } = t,
        I = b.$el;
      if (!I) return;
      const D = I[0],
        R =
          k.passiveListener && L.passiveListeners
            ? { passive: !1, capture: !1 }
            : !1,
        $ =
          k.passiveListener && L.passiveListeners
            ? { passive: !0, capture: !1 }
            : !1;
      if (!D) return;
      const H = M === "on" ? "addEventListener" : "removeEventListener";
      k.touch
        ? (D[H](E.start, y, R), D[H](E.move, v, R), D[H](E.end, _, $))
        : (D[H](A.start, y, R), i[H](A.move, v, R), i[H](A.end, _, $));
    }
    function S() {
      !t.params.scrollbar.el || !t.scrollbar.el || x("on");
    }
    function w() {
      !t.params.scrollbar.el || !t.scrollbar.el || x("off");
    }
    function C() {
      const { scrollbar: M, $el: b } = t;
      t.params.scrollbar = mo(
        t,
        t.originalParams.scrollbar,
        t.params.scrollbar,
        { el: "swiper-scrollbar" }
      );
      const E = t.params.scrollbar;
      if (!E.el) return;
      let A = F(E.el);
      t.params.uniqueNavElements &&
        typeof E.el == "string" &&
        A.length > 1 &&
        b.find(E.el).length === 1 &&
        (A = b.find(E.el)),
        A.addClass(t.isHorizontal() ? E.horizontalClass : E.verticalClass);
      let L = A.find(`.${t.params.scrollbar.dragClass}`);
      L.length === 0 &&
        ((L = F(`<div class="${t.params.scrollbar.dragClass}"></div>`)),
        A.append(L)),
        Object.assign(M, { $el: A, el: A[0], $dragEl: L, dragEl: L[0] }),
        E.draggable && S(),
        A &&
          A[t.enabled ? "removeClass" : "addClass"](
            t.params.scrollbar.lockClass
          );
    }
    function P() {
      const M = t.params.scrollbar,
        b = t.scrollbar.$el;
      b &&
        b.removeClass(t.isHorizontal() ? M.horizontalClass : M.verticalClass),
        w();
    }
    n("init", () => {
      t.params.scrollbar.enabled === !1 ? T() : (C(), m(), d());
    }),
      n("update resize observerUpdate lock unlock", () => {
        m();
      }),
      n("setTranslate", () => {
        d();
      }),
      n("setTransition", (M, b) => {
        h(b);
      }),
      n("enable disable", () => {
        const { $el: M } = t.scrollbar;
        M &&
          M[t.enabled ? "removeClass" : "addClass"](
            t.params.scrollbar.lockClass
          );
      }),
      n("destroy", () => {
        P();
      });
    const O = () => {
        t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),
          t.scrollbar.$el &&
            t.scrollbar.$el.removeClass(
              t.params.scrollbar.scrollbarDisabledClass
            ),
          C(),
          m(),
          d();
      },
      T = () => {
        t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
          t.scrollbar.$el &&
            t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
          P();
      };
    Object.assign(t.scrollbar, {
      enable: O,
      disable: T,
      updateSize: m,
      setTranslate: d,
      init: C,
      destroy: P,
    });
  }
  function Gm({ swiper: t, extendParams: e, on: n }) {
    e({ parallax: { enabled: !1 } });
    const r = (a, o) => {
        const { rtl: l } = t,
          c = F(a),
          u = l ? -1 : 1,
          f = c.attr("data-swiper-parallax") || "0";
        let d = c.attr("data-swiper-parallax-x"),
          h = c.attr("data-swiper-parallax-y");
        const m = c.attr("data-swiper-parallax-scale"),
          p = c.attr("data-swiper-parallax-opacity");
        if (
          (d || h
            ? ((d = d || "0"), (h = h || "0"))
            : t.isHorizontal()
            ? ((d = f), (h = "0"))
            : ((h = f), (d = "0")),
          d.indexOf("%") >= 0
            ? (d = `${parseInt(d, 10) * o * u}%`)
            : (d = `${d * o * u}px`),
          h.indexOf("%") >= 0
            ? (h = `${parseInt(h, 10) * o}%`)
            : (h = `${h * o}px`),
          typeof p != "undefined" && p !== null)
        ) {
          const g = p - (p - 1) * (1 - Math.abs(o));
          c[0].style.opacity = g;
        }
        if (typeof m == "undefined" || m === null)
          c.transform(`translate3d(${d}, ${h}, 0px)`);
        else {
          const g = m - (m - 1) * (1 - Math.abs(o));
          c.transform(`translate3d(${d}, ${h}, 0px) scale(${g})`);
        }
      },
      i = () => {
        const { $el: a, slides: o, progress: l, snapGrid: c } = t;
        a
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each((u) => {
            r(u, l);
          }),
          o.each((u, f) => {
            let d = u.progress;
            t.params.slidesPerGroup > 1 &&
              t.params.slidesPerView !== "auto" &&
              (d += Math.ceil(f / 2) - l * (c.length - 1)),
              (d = Math.min(Math.max(d, -1), 1)),
              F(u)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                )
                .each((h) => {
                  r(h, d);
                });
          });
      },
      s = (a = t.params.speed) => {
        const { $el: o } = t;
        o.find(
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
        ).each((l) => {
          const c = F(l);
          let u = parseInt(c.attr("data-swiper-parallax-duration"), 10) || a;
          a === 0 && (u = 0), c.transition(u);
        });
      };
    n("beforeInit", () => {
      t.params.parallax.enabled &&
        ((t.params.watchSlidesProgress = !0),
        (t.originalParams.watchSlidesProgress = !0));
    }),
      n("init", () => {
        t.params.parallax.enabled && i();
      }),
      n("setTranslate", () => {
        t.params.parallax.enabled && i();
      }),
      n("setTransition", (a, o) => {
        t.params.parallax.enabled && s(o);
      });
  }
  function jm({ swiper: t, extendParams: e, on: n, emit: r }) {
    const i = ge();
    e({
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed",
      },
    }),
      (t.zoom = { enabled: !1 });
    let s = 1,
      a = !1,
      o,
      l,
      c;
    const u = {
        $slideEl: void 0,
        slideWidth: void 0,
        slideHeight: void 0,
        $imageEl: void 0,
        $imageWrapEl: void 0,
        maxRatio: 3,
      },
      f = {
        isTouched: void 0,
        isMoved: void 0,
        currentX: void 0,
        currentY: void 0,
        minX: void 0,
        minY: void 0,
        maxX: void 0,
        maxY: void 0,
        width: void 0,
        height: void 0,
        startX: void 0,
        startY: void 0,
        touchesStart: {},
        touchesCurrent: {},
      },
      d = {
        x: void 0,
        y: void 0,
        prevPositionX: void 0,
        prevPositionY: void 0,
        prevTime: void 0,
      };
    let h = 1;
    Object.defineProperty(t.zoom, "scale", {
      get() {
        return h;
      },
      set(k) {
        if (h !== k) {
          const I = u.$imageEl ? u.$imageEl[0] : void 0,
            D = u.$slideEl ? u.$slideEl[0] : void 0;
          r("zoomChange", k, I, D);
        }
        h = k;
      },
    });
    function m(k) {
      if (k.targetTouches.length < 2) return 1;
      const I = k.targetTouches[0].pageX,
        D = k.targetTouches[0].pageY,
        R = k.targetTouches[1].pageX,
        $ = k.targetTouches[1].pageY;
      return Math.sqrt($t(R - I, 2) + $t($ - D, 2));
    }
    function p(k) {
      const I = t.support,
        D = t.params.zoom;
      if (((l = !1), (c = !1), !I.gestures)) {
        if (
          k.type !== "touchstart" ||
          (k.type === "touchstart" && k.targetTouches.length < 2)
        )
          return;
        (l = !0), (u.scaleStart = m(k));
      }
      if (
        (!u.$slideEl || !u.$slideEl.length) &&
        ((u.$slideEl = F(k.target).closest(`.${t.params.slideClass}`)),
        u.$slideEl.length === 0 && (u.$slideEl = t.slides.eq(t.activeIndex)),
        (u.$imageEl = u.$slideEl
          .find(`.${D.containerClass}`)
          .eq(0)
          .find("picture, img, svg, canvas, .swiper-zoom-target")
          .eq(0)),
        (u.$imageWrapEl = u.$imageEl.parent(`.${D.containerClass}`)),
        (u.maxRatio = u.$imageWrapEl.attr("data-swiper-zoom") || D.maxRatio),
        u.$imageWrapEl.length === 0)
      ) {
        u.$imageEl = void 0;
        return;
      }
      u.$imageEl && u.$imageEl.transition(0), (a = !0);
    }
    function g(k) {
      const I = t.support,
        D = t.params.zoom,
        R = t.zoom;
      if (!I.gestures) {
        if (
          k.type !== "touchmove" ||
          (k.type === "touchmove" && k.targetTouches.length < 2)
        )
          return;
        (c = !0), (u.scaleMove = m(k));
      }
      if (!u.$imageEl || u.$imageEl.length === 0) {
        k.type === "gesturechange" && p(k);
        return;
      }
      I.gestures
        ? (R.scale = k.scale * s)
        : (R.scale = (u.scaleMove / u.scaleStart) * s),
        R.scale > u.maxRatio &&
          (R.scale = u.maxRatio - 1 + $t(R.scale - u.maxRatio + 1, 0.5)),
        R.scale < D.minRatio &&
          (R.scale = D.minRatio + 1 - $t(D.minRatio - R.scale + 1, 0.5)),
        u.$imageEl.transform(`translate3d(0,0,0) scale(${R.scale})`);
    }
    function y(k) {
      const I = t.device,
        D = t.support,
        R = t.params.zoom,
        $ = t.zoom;
      if (!D.gestures) {
        if (
          !l ||
          !c ||
          k.type !== "touchend" ||
          (k.type === "touchend" && k.changedTouches.length < 2 && !I.android)
        )
          return;
        (l = !1), (c = !1);
      }
      !u.$imageEl ||
        u.$imageEl.length === 0 ||
        (($.scale = Math.max(Math.min($.scale, u.maxRatio), R.minRatio)),
        u.$imageEl
          .transition(t.params.speed)
          .transform(`translate3d(0,0,0) scale(${$.scale})`),
        (s = $.scale),
        (a = !1),
        $.scale === 1 && (u.$slideEl = void 0));
    }
    function v(k) {
      const I = t.device;
      !u.$imageEl ||
        u.$imageEl.length === 0 ||
        f.isTouched ||
        (I.android && k.cancelable && k.preventDefault(),
        (f.isTouched = !0),
        (f.touchesStart.x =
          k.type === "touchstart" ? k.targetTouches[0].pageX : k.pageX),
        (f.touchesStart.y =
          k.type === "touchstart" ? k.targetTouches[0].pageY : k.pageY));
    }
    function _(k) {
      const I = t.zoom;
      if (
        !u.$imageEl ||
        u.$imageEl.length === 0 ||
        ((t.allowClick = !1), !f.isTouched || !u.$slideEl)
      )
        return;
      f.isMoved ||
        ((f.width = u.$imageEl[0].offsetWidth),
        (f.height = u.$imageEl[0].offsetHeight),
        (f.startX = lo(u.$imageWrapEl[0], "x") || 0),
        (f.startY = lo(u.$imageWrapEl[0], "y") || 0),
        (u.slideWidth = u.$slideEl[0].offsetWidth),
        (u.slideHeight = u.$slideEl[0].offsetHeight),
        u.$imageWrapEl.transition(0));
      const D = f.width * I.scale,
        R = f.height * I.scale;
      if (!(D < u.slideWidth && R < u.slideHeight)) {
        if (
          ((f.minX = Math.min(u.slideWidth / 2 - D / 2, 0)),
          (f.maxX = -f.minX),
          (f.minY = Math.min(u.slideHeight / 2 - R / 2, 0)),
          (f.maxY = -f.minY),
          (f.touchesCurrent.x =
            k.type === "touchmove" ? k.targetTouches[0].pageX : k.pageX),
          (f.touchesCurrent.y =
            k.type === "touchmove" ? k.targetTouches[0].pageY : k.pageY),
          !f.isMoved && !a)
        ) {
          if (
            t.isHorizontal() &&
            ((Math.floor(f.minX) === Math.floor(f.startX) &&
              f.touchesCurrent.x < f.touchesStart.x) ||
              (Math.floor(f.maxX) === Math.floor(f.startX) &&
                f.touchesCurrent.x > f.touchesStart.x))
          ) {
            f.isTouched = !1;
            return;
          }
          if (
            !t.isHorizontal() &&
            ((Math.floor(f.minY) === Math.floor(f.startY) &&
              f.touchesCurrent.y < f.touchesStart.y) ||
              (Math.floor(f.maxY) === Math.floor(f.startY) &&
                f.touchesCurrent.y > f.touchesStart.y))
          ) {
            f.isTouched = !1;
            return;
          }
        }
        k.cancelable && k.preventDefault(),
          k.stopPropagation(),
          (f.isMoved = !0),
          (f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX),
          (f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY),
          f.currentX < f.minX &&
            (f.currentX = f.minX + 1 - $t(f.minX - f.currentX + 1, 0.8)),
          f.currentX > f.maxX &&
            (f.currentX = f.maxX - 1 + $t(f.currentX - f.maxX + 1, 0.8)),
          f.currentY < f.minY &&
            (f.currentY = f.minY + 1 - $t(f.minY - f.currentY + 1, 0.8)),
          f.currentY > f.maxY &&
            (f.currentY = f.maxY - 1 + $t(f.currentY - f.maxY + 1, 0.8)),
          d.prevPositionX || (d.prevPositionX = f.touchesCurrent.x),
          d.prevPositionY || (d.prevPositionY = f.touchesCurrent.y),
          d.prevTime || (d.prevTime = Date.now()),
          (d.x =
            (f.touchesCurrent.x - d.prevPositionX) /
            (Date.now() - d.prevTime) /
            2),
          (d.y =
            (f.touchesCurrent.y - d.prevPositionY) /
            (Date.now() - d.prevTime) /
            2),
          Math.abs(f.touchesCurrent.x - d.prevPositionX) < 2 && (d.x = 0),
          Math.abs(f.touchesCurrent.y - d.prevPositionY) < 2 && (d.y = 0),
          (d.prevPositionX = f.touchesCurrent.x),
          (d.prevPositionY = f.touchesCurrent.y),
          (d.prevTime = Date.now()),
          u.$imageWrapEl.transform(
            `translate3d(${f.currentX}px, ${f.currentY}px,0)`
          );
      }
    }
    function x() {
      const k = t.zoom;
      if (!u.$imageEl || u.$imageEl.length === 0) return;
      if (!f.isTouched || !f.isMoved) {
        (f.isTouched = !1), (f.isMoved = !1);
        return;
      }
      (f.isTouched = !1), (f.isMoved = !1);
      let I = 300,
        D = 300;
      const R = d.x * I,
        $ = f.currentX + R,
        H = d.y * D,
        Y = f.currentY + H;
      d.x !== 0 && (I = Math.abs(($ - f.currentX) / d.x)),
        d.y !== 0 && (D = Math.abs((Y - f.currentY) / d.y));
      const le = Math.max(I, D);
      (f.currentX = $), (f.currentY = Y);
      const re = f.width * k.scale,
        U = f.height * k.scale;
      (f.minX = Math.min(u.slideWidth / 2 - re / 2, 0)),
        (f.maxX = -f.minX),
        (f.minY = Math.min(u.slideHeight / 2 - U / 2, 0)),
        (f.maxY = -f.minY),
        (f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX)),
        (f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY)),
        u.$imageWrapEl
          .transition(le)
          .transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`);
    }
    function S() {
      const k = t.zoom;
      u.$slideEl &&
        t.previousIndex !== t.activeIndex &&
        (u.$imageEl && u.$imageEl.transform("translate3d(0,0,0) scale(1)"),
        u.$imageWrapEl && u.$imageWrapEl.transform("translate3d(0,0,0)"),
        (k.scale = 1),
        (s = 1),
        (u.$slideEl = void 0),
        (u.$imageEl = void 0),
        (u.$imageWrapEl = void 0));
    }
    function w(k) {
      const I = t.zoom,
        D = t.params.zoom;
      if (
        (u.$slideEl ||
          (k &&
            k.target &&
            (u.$slideEl = F(k.target).closest(`.${t.params.slideClass}`)),
          u.$slideEl ||
            (t.params.virtual && t.params.virtual.enabled && t.virtual
              ? (u.$slideEl = t.$wrapperEl.children(
                  `.${t.params.slideActiveClass}`
                ))
              : (u.$slideEl = t.slides.eq(t.activeIndex))),
          (u.$imageEl = u.$slideEl
            .find(`.${D.containerClass}`)
            .eq(0)
            .find("picture, img, svg, canvas, .swiper-zoom-target")
            .eq(0)),
          (u.$imageWrapEl = u.$imageEl.parent(`.${D.containerClass}`))),
        !u.$imageEl ||
          u.$imageEl.length === 0 ||
          !u.$imageWrapEl ||
          u.$imageWrapEl.length === 0)
      )
        return;
      t.params.cssMode &&
        ((t.wrapperEl.style.overflow = "hidden"),
        (t.wrapperEl.style.touchAction = "none")),
        u.$slideEl.addClass(`${D.zoomedSlideClass}`);
      let R, $, H, Y, le, re, U, K, he, me, we, Le, pe, Ce, W, te, Ie, De;
      typeof f.touchesStart.x == "undefined" && k
        ? ((R = k.type === "touchend" ? k.changedTouches[0].pageX : k.pageX),
          ($ = k.type === "touchend" ? k.changedTouches[0].pageY : k.pageY))
        : ((R = f.touchesStart.x), ($ = f.touchesStart.y)),
        (I.scale = u.$imageWrapEl.attr("data-swiper-zoom") || D.maxRatio),
        (s = u.$imageWrapEl.attr("data-swiper-zoom") || D.maxRatio),
        k
          ? ((Ie = u.$slideEl[0].offsetWidth),
            (De = u.$slideEl[0].offsetHeight),
            (H = u.$slideEl.offset().left + i.scrollX),
            (Y = u.$slideEl.offset().top + i.scrollY),
            (le = H + Ie / 2 - R),
            (re = Y + De / 2 - $),
            (he = u.$imageEl[0].offsetWidth),
            (me = u.$imageEl[0].offsetHeight),
            (we = he * I.scale),
            (Le = me * I.scale),
            (pe = Math.min(Ie / 2 - we / 2, 0)),
            (Ce = Math.min(De / 2 - Le / 2, 0)),
            (W = -pe),
            (te = -Ce),
            (U = le * I.scale),
            (K = re * I.scale),
            U < pe && (U = pe),
            U > W && (U = W),
            K < Ce && (K = Ce),
            K > te && (K = te))
          : ((U = 0), (K = 0)),
        u.$imageWrapEl
          .transition(300)
          .transform(`translate3d(${U}px, ${K}px,0)`),
        u.$imageEl
          .transition(300)
          .transform(`translate3d(0,0,0) scale(${I.scale})`);
    }
    function C() {
      const k = t.zoom,
        I = t.params.zoom;
      u.$slideEl ||
        (t.params.virtual && t.params.virtual.enabled && t.virtual
          ? (u.$slideEl = t.$wrapperEl.children(
              `.${t.params.slideActiveClass}`
            ))
          : (u.$slideEl = t.slides.eq(t.activeIndex)),
        (u.$imageEl = u.$slideEl
          .find(`.${I.containerClass}`)
          .eq(0)
          .find("picture, img, svg, canvas, .swiper-zoom-target")
          .eq(0)),
        (u.$imageWrapEl = u.$imageEl.parent(`.${I.containerClass}`))),
        !(
          !u.$imageEl ||
          u.$imageEl.length === 0 ||
          !u.$imageWrapEl ||
          u.$imageWrapEl.length === 0
        ) &&
          (t.params.cssMode &&
            ((t.wrapperEl.style.overflow = ""),
            (t.wrapperEl.style.touchAction = "")),
          (k.scale = 1),
          (s = 1),
          u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
          u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
          u.$slideEl.removeClass(`${I.zoomedSlideClass}`),
          (u.$slideEl = void 0));
    }
    function P(k) {
      const I = t.zoom;
      I.scale && I.scale !== 1 ? C() : w(k);
    }
    function O() {
      const k = t.support,
        I =
          t.touchEvents.start === "touchstart" &&
          k.passiveListener &&
          t.params.passiveListeners
            ? { passive: !0, capture: !1 }
            : !1,
        D = k.passiveListener ? { passive: !1, capture: !0 } : !0;
      return { passiveListener: I, activeListenerWithCapture: D };
    }
    function T() {
      return `.${t.params.slideClass}`;
    }
    function M(k) {
      const { passiveListener: I } = O(),
        D = T();
      t.$wrapperEl[k]("gesturestart", D, p, I),
        t.$wrapperEl[k]("gesturechange", D, g, I),
        t.$wrapperEl[k]("gestureend", D, y, I);
    }
    function b() {
      o || ((o = !0), M("on"));
    }
    function E() {
      o && ((o = !1), M("off"));
    }
    function A() {
      const k = t.zoom;
      if (k.enabled) return;
      k.enabled = !0;
      const I = t.support,
        { passiveListener: D, activeListenerWithCapture: R } = O(),
        $ = T();
      I.gestures
        ? (t.$wrapperEl.on(t.touchEvents.start, b, D),
          t.$wrapperEl.on(t.touchEvents.end, E, D))
        : t.touchEvents.start === "touchstart" &&
          (t.$wrapperEl.on(t.touchEvents.start, $, p, D),
          t.$wrapperEl.on(t.touchEvents.move, $, g, R),
          t.$wrapperEl.on(t.touchEvents.end, $, y, D),
          t.touchEvents.cancel &&
            t.$wrapperEl.on(t.touchEvents.cancel, $, y, D)),
        t.$wrapperEl.on(
          t.touchEvents.move,
          `.${t.params.zoom.containerClass}`,
          _,
          R
        );
    }
    function L() {
      const k = t.zoom;
      if (!k.enabled) return;
      const I = t.support;
      k.enabled = !1;
      const { passiveListener: D, activeListenerWithCapture: R } = O(),
        $ = T();
      I.gestures
        ? (t.$wrapperEl.off(t.touchEvents.start, b, D),
          t.$wrapperEl.off(t.touchEvents.end, E, D))
        : t.touchEvents.start === "touchstart" &&
          (t.$wrapperEl.off(t.touchEvents.start, $, p, D),
          t.$wrapperEl.off(t.touchEvents.move, $, g, R),
          t.$wrapperEl.off(t.touchEvents.end, $, y, D),
          t.touchEvents.cancel &&
            t.$wrapperEl.off(t.touchEvents.cancel, $, y, D)),
        t.$wrapperEl.off(
          t.touchEvents.move,
          `.${t.params.zoom.containerClass}`,
          _,
          R
        );
    }
    n("init", () => {
      t.params.zoom.enabled && A();
    }),
      n("destroy", () => {
        L();
      }),
      n("touchStart", (k, I) => {
        t.zoom.enabled && v(I);
      }),
      n("touchEnd", (k, I) => {
        t.zoom.enabled && x();
      }),
      n("doubleTap", (k, I) => {
        !t.animating &&
          t.params.zoom.enabled &&
          t.zoom.enabled &&
          t.params.zoom.toggle &&
          P(I);
      }),
      n("transitionEnd", () => {
        t.zoom.enabled && t.params.zoom.enabled && S();
      }),
      n("slideChange", () => {
        t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && S();
      }),
      Object.assign(t.zoom, {
        enable: A,
        disable: L,
        in: w,
        out: C,
        toggle: P,
      });
  }
  function Um({ swiper: t, extendParams: e, on: n, emit: r }) {
    e({
      lazy: {
        checkInView: !1,
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        scrollingElement: "",
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader",
      },
    }),
      (t.lazy = {});
    let i = !1,
      s = !1;
    function a(c, u = !0) {
      const f = t.params.lazy;
      if (typeof c == "undefined" || t.slides.length === 0) return;
      const h =
          t.virtual && t.params.virtual.enabled
            ? t.$wrapperEl.children(
                `.${t.params.slideClass}[data-swiper-slide-index="${c}"]`
              )
            : t.slides.eq(c),
        m = h.find(
          `.${f.elementClass}:not(.${f.loadedClass}):not(.${f.loadingClass})`
        );
      h.hasClass(f.elementClass) &&
        !h.hasClass(f.loadedClass) &&
        !h.hasClass(f.loadingClass) &&
        m.push(h[0]),
        m.length !== 0 &&
          m.each((p) => {
            const g = F(p);
            g.addClass(f.loadingClass);
            const y = g.attr("data-background"),
              v = g.attr("data-src"),
              _ = g.attr("data-srcset"),
              x = g.attr("data-sizes"),
              S = g.parent("picture");
            t.loadImage(g[0], v || y, _, x, !1, () => {
              if (
                !(
                  typeof t == "undefined" ||
                  t === null ||
                  !t ||
                  (t && !t.params) ||
                  t.destroyed
                )
              ) {
                if (
                  (y
                    ? (g.css("background-image", `url("${y}")`),
                      g.removeAttr("data-background"))
                    : (_ && (g.attr("srcset", _), g.removeAttr("data-srcset")),
                      x && (g.attr("sizes", x), g.removeAttr("data-sizes")),
                      S.length &&
                        S.children("source").each((w) => {
                          const C = F(w);
                          C.attr("data-srcset") &&
                            (C.attr("srcset", C.attr("data-srcset")),
                            C.removeAttr("data-srcset"));
                        }),
                      v && (g.attr("src", v), g.removeAttr("data-src"))),
                  g.addClass(f.loadedClass).removeClass(f.loadingClass),
                  h.find(`.${f.preloaderClass}`).remove(),
                  t.params.loop && u)
                ) {
                  const w = h.attr("data-swiper-slide-index");
                  if (h.hasClass(t.params.slideDuplicateClass)) {
                    const C = t.$wrapperEl.children(
                      `[data-swiper-slide-index="${w}"]:not(.${t.params.slideDuplicateClass})`
                    );
                    a(C.index(), !1);
                  } else {
                    const C = t.$wrapperEl.children(
                      `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${w}"]`
                    );
                    a(C.index(), !1);
                  }
                }
                r("lazyImageReady", h[0], g[0]),
                  t.params.autoHeight && t.updateAutoHeight();
              }
            }),
              r("lazyImageLoad", h[0], g[0]);
          });
    }
    function o() {
      const { $wrapperEl: c, params: u, slides: f, activeIndex: d } = t,
        h = t.virtual && u.virtual.enabled,
        m = u.lazy;
      let p = u.slidesPerView;
      p === "auto" && (p = 0);
      function g(v) {
        if (h) {
          if (
            c.children(`.${u.slideClass}[data-swiper-slide-index="${v}"]`)
              .length
          )
            return !0;
        } else if (f[v]) return !0;
        return !1;
      }
      function y(v) {
        return h ? F(v).attr("data-swiper-slide-index") : F(v).index();
      }
      if ((s || (s = !0), t.params.watchSlidesProgress))
        c.children(`.${u.slideVisibleClass}`).each((v) => {
          const _ = h ? F(v).attr("data-swiper-slide-index") : F(v).index();
          a(_);
        });
      else if (p > 1) for (let v = d; v < d + p; v += 1) g(v) && a(v);
      else a(d);
      if (m.loadPrevNext)
        if (p > 1 || (m.loadPrevNextAmount && m.loadPrevNextAmount > 1)) {
          const v = m.loadPrevNextAmount,
            _ = Math.ceil(p),
            x = Math.min(d + _ + Math.max(v, _), f.length),
            S = Math.max(d - Math.max(_, v), 0);
          for (let w = d + _; w < x; w += 1) g(w) && a(w);
          for (let w = S; w < d; w += 1) g(w) && a(w);
        } else {
          const v = c.children(`.${u.slideNextClass}`);
          v.length > 0 && a(y(v));
          const _ = c.children(`.${u.slidePrevClass}`);
          _.length > 0 && a(y(_));
        }
    }
    function l() {
      const c = ge();
      if (!t || t.destroyed) return;
      const u = t.params.lazy.scrollingElement
          ? F(t.params.lazy.scrollingElement)
          : F(c),
        f = u[0] === c,
        d = f ? c.innerWidth : u[0].offsetWidth,
        h = f ? c.innerHeight : u[0].offsetHeight,
        m = t.$el.offset(),
        { rtlTranslate: p } = t;
      let g = !1;
      p && (m.left -= t.$el[0].scrollLeft);
      const y = [
        [m.left, m.top],
        [m.left + t.width, m.top],
        [m.left, m.top + t.height],
        [m.left + t.width, m.top + t.height],
      ];
      for (let _ = 0; _ < y.length; _ += 1) {
        const x = y[_];
        if (x[0] >= 0 && x[0] <= d && x[1] >= 0 && x[1] <= h) {
          if (x[0] === 0 && x[1] === 0) continue;
          g = !0;
        }
      }
      const v =
        t.touchEvents.start === "touchstart" &&
        t.support.passiveListener &&
        t.params.passiveListeners
          ? { passive: !0, capture: !1 }
          : !1;
      g ? (o(), u.off("scroll", l, v)) : i || ((i = !0), u.on("scroll", l, v));
    }
    n("beforeInit", () => {
      t.params.lazy.enabled &&
        t.params.preloadImages &&
        (t.params.preloadImages = !1);
    }),
      n("init", () => {
        t.params.lazy.enabled && (t.params.lazy.checkInView ? l() : o());
      }),
      n("scroll", () => {
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          !t.params.freeMode.sticky &&
          o();
      }),
      n("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
        t.params.lazy.enabled && (t.params.lazy.checkInView ? l() : o());
      }),
      n("transitionStart", () => {
        t.params.lazy.enabled &&
          (t.params.lazy.loadOnTransitionStart ||
            (!t.params.lazy.loadOnTransitionStart && !s)) &&
          (t.params.lazy.checkInView ? l() : o());
      }),
      n("transitionEnd", () => {
        t.params.lazy.enabled &&
          !t.params.lazy.loadOnTransitionStart &&
          (t.params.lazy.checkInView ? l() : o());
      }),
      n("slideChange", () => {
        const {
          lazy: c,
          cssMode: u,
          watchSlidesProgress: f,
          touchReleaseOnEdges: d,
          resistanceRatio: h,
        } = t.params;
        c.enabled && (u || (f && (d || h === 0))) && o();
      }),
      n("destroy", () => {
        t.$el &&
          t.$el
            .find(`.${t.params.lazy.loadingClass}`)
            .removeClass(t.params.lazy.loadingClass);
      }),
      Object.assign(t.lazy, { load: o, loadInSlide: a });
  }
  function Km({ swiper: t, extendParams: e, on: n }) {
    e({ controller: { control: void 0, inverse: !1, by: "slide" } }),
      (t.controller = { control: void 0 });
    function r(l, c) {
      const u = (function () {
        let m, p, g;
        return (y, v) => {
          for (p = -1, m = y.length; m - p > 1; )
            (g = (m + p) >> 1), y[g] <= v ? (p = g) : (m = g);
          return m;
        };
      })();
      (this.x = l), (this.y = c), (this.lastIndex = l.length - 1);
      let f, d;
      return (
        (this.interpolate = function (m) {
          return m
            ? ((d = u(this.x, m)),
              (f = d - 1),
              ((m - this.x[f]) * (this.y[d] - this.y[f])) /
                (this.x[d] - this.x[f]) +
                this.y[f])
            : 0;
        }),
        this
      );
    }
    function i(l) {
      t.controller.spline ||
        (t.controller.spline = t.params.loop
          ? new r(t.slidesGrid, l.slidesGrid)
          : new r(t.snapGrid, l.snapGrid));
    }
    function s(l, c) {
      const u = t.controller.control;
      let f, d;
      const h = t.constructor;
      function m(p) {
        const g = t.rtlTranslate ? -t.translate : t.translate;
        t.params.controller.by === "slide" &&
          (i(p), (d = -t.controller.spline.interpolate(-g))),
          (!d || t.params.controller.by === "container") &&
            ((f =
              (p.maxTranslate() - p.minTranslate()) /
              (t.maxTranslate() - t.minTranslate())),
            (d = (g - t.minTranslate()) * f + p.minTranslate())),
          t.params.controller.inverse && (d = p.maxTranslate() - d),
          p.updateProgress(d),
          p.setTranslate(d, t),
          p.updateActiveIndex(),
          p.updateSlidesClasses();
      }
      if (Array.isArray(u))
        for (let p = 0; p < u.length; p += 1)
          u[p] !== c && u[p] instanceof h && m(u[p]);
      else u instanceof h && c !== u && m(u);
    }
    function a(l, c) {
      const u = t.constructor,
        f = t.controller.control;
      let d;
      function h(m) {
        m.setTransition(l, t),
          l !== 0 &&
            (m.transitionStart(),
            m.params.autoHeight &&
              Xn(() => {
                m.updateAutoHeight();
              }),
            m.$wrapperEl.transitionEnd(() => {
              f &&
                (m.params.loop &&
                  t.params.controller.by === "slide" &&
                  m.loopFix(),
                m.transitionEnd());
            }));
      }
      if (Array.isArray(f))
        for (d = 0; d < f.length; d += 1)
          f[d] !== c && f[d] instanceof u && h(f[d]);
      else f instanceof u && c !== f && h(f);
    }
    function o() {
      t.controller.control &&
        t.controller.spline &&
        ((t.controller.spline = void 0), delete t.controller.spline);
    }
    n("beforeInit", () => {
      t.controller.control = t.params.controller.control;
    }),
      n("update", () => {
        o();
      }),
      n("resize", () => {
        o();
      }),
      n("observerUpdate", () => {
        o();
      }),
      n("setTranslate", (l, c, u) => {
        t.controller.control && t.controller.setTranslate(c, u);
      }),
      n("setTransition", (l, c, u) => {
        t.controller.control && t.controller.setTransition(c, u);
      }),
      Object.assign(t.controller, { setTranslate: s, setTransition: a });
  }
  function Zm({ swiper: t, extendParams: e, on: n }) {
    e({
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group",
        id: null,
      },
    }),
      (t.a11y = { clicked: !1 });
    let r = null;
    function i(b) {
      const E = r;
      E.length !== 0 && (E.html(""), E.html(b));
    }
    function s(b = 16) {
      const E = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(b).replace(/x/g, E);
    }
    function a(b) {
      b.attr("tabIndex", "0");
    }
    function o(b) {
      b.attr("tabIndex", "-1");
    }
    function l(b, E) {
      b.attr("role", E);
    }
    function c(b, E) {
      b.attr("aria-roledescription", E);
    }
    function u(b, E) {
      b.attr("aria-controls", E);
    }
    function f(b, E) {
      b.attr("aria-label", E);
    }
    function d(b, E) {
      b.attr("id", E);
    }
    function h(b, E) {
      b.attr("aria-live", E);
    }
    function m(b) {
      b.attr("aria-disabled", !0);
    }
    function p(b) {
      b.attr("aria-disabled", !1);
    }
    function g(b) {
      if (b.keyCode !== 13 && b.keyCode !== 32) return;
      const E = t.params.a11y,
        A = F(b.target);
      t.navigation &&
        t.navigation.$nextEl &&
        A.is(t.navigation.$nextEl) &&
        ((t.isEnd && !t.params.loop) || t.slideNext(),
        t.isEnd ? i(E.lastSlideMessage) : i(E.nextSlideMessage)),
        t.navigation &&
          t.navigation.$prevEl &&
          A.is(t.navigation.$prevEl) &&
          ((t.isBeginning && !t.params.loop) || t.slidePrev(),
          t.isBeginning ? i(E.firstSlideMessage) : i(E.prevSlideMessage)),
        t.pagination &&
          A.is($n(t.params.pagination.bulletClass)) &&
          A[0].click();
    }
    function y() {
      if (t.params.loop || t.params.rewind || !t.navigation) return;
      const { $nextEl: b, $prevEl: E } = t.navigation;
      E && E.length > 0 && (t.isBeginning ? (m(E), o(E)) : (p(E), a(E))),
        b && b.length > 0 && (t.isEnd ? (m(b), o(b)) : (p(b), a(b)));
    }
    function v() {
      return (
        t.pagination && t.pagination.bullets && t.pagination.bullets.length
      );
    }
    function _() {
      return v() && t.params.pagination.clickable;
    }
    function x() {
      const b = t.params.a11y;
      v() &&
        t.pagination.bullets.each((E) => {
          const A = F(E);
          t.params.pagination.clickable &&
            (a(A),
            t.params.pagination.renderBullet ||
              (l(A, "button"),
              f(
                A,
                b.paginationBulletMessage.replace(
                  /\{\{index\}\}/,
                  A.index() + 1
                )
              ))),
            A.is(`.${t.params.pagination.bulletActiveClass}`)
              ? A.attr("aria-current", "true")
              : A.removeAttr("aria-current");
        });
    }
    const S = (b, E, A) => {
        a(b),
          b[0].tagName !== "BUTTON" && (l(b, "button"), b.on("keydown", g)),
          f(b, A),
          u(b, E);
      },
      w = () => {
        t.a11y.clicked = !0;
      },
      C = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            t.destroyed || (t.a11y.clicked = !1);
          });
        });
      },
      P = (b) => {
        if (t.a11y.clicked) return;
        const E = b.target.closest(`.${t.params.slideClass}`);
        if (!E || !t.slides.includes(E)) return;
        const A = t.slides.indexOf(E) === t.activeIndex,
          L =
            t.params.watchSlidesProgress &&
            t.visibleSlides &&
            t.visibleSlides.includes(E);
        A ||
          L ||
          (b.sourceCapabilities && b.sourceCapabilities.firesTouchEvents) ||
          (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
          t.slideTo(t.slides.indexOf(E), 0));
      },
      O = () => {
        const b = t.params.a11y;
        b.itemRoleDescriptionMessage &&
          c(F(t.slides), b.itemRoleDescriptionMessage),
          b.slideRole && l(F(t.slides), b.slideRole);
        const E = t.params.loop
          ? t.slides.filter(
              (A) => !A.classList.contains(t.params.slideDuplicateClass)
            ).length
          : t.slides.length;
        b.slideLabelMessage &&
          t.slides.each((A, L) => {
            const k = F(A),
              I = t.params.loop
                ? parseInt(k.attr("data-swiper-slide-index"), 10)
                : L,
              D = b.slideLabelMessage
                .replace(/\{\{index\}\}/, I + 1)
                .replace(/\{\{slidesLength\}\}/, E);
            f(k, D);
          });
      },
      T = () => {
        const b = t.params.a11y;
        t.$el.append(r);
        const E = t.$el;
        b.containerRoleDescriptionMessage &&
          c(E, b.containerRoleDescriptionMessage),
          b.containerMessage && f(E, b.containerMessage);
        const A = t.$wrapperEl,
          L = b.id || A.attr("id") || `swiper-wrapper-${s(16)}`,
          k = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
        d(A, L), h(A, k), O();
        let I, D;
        t.navigation && t.navigation.$nextEl && (I = t.navigation.$nextEl),
          t.navigation && t.navigation.$prevEl && (D = t.navigation.$prevEl),
          I && I.length && S(I, L, b.nextSlideMessage),
          D && D.length && S(D, L, b.prevSlideMessage),
          _() &&
            t.pagination.$el.on(
              "keydown",
              $n(t.params.pagination.bulletClass),
              g
            ),
          t.$el.on("focus", P, !0),
          t.$el.on("pointerdown", w, !0),
          t.$el.on("pointerup", C, !0);
      };
    function M() {
      r && r.length > 0 && r.remove();
      let b, E;
      t.navigation && t.navigation.$nextEl && (b = t.navigation.$nextEl),
        t.navigation && t.navigation.$prevEl && (E = t.navigation.$prevEl),
        b && b.off("keydown", g),
        E && E.off("keydown", g),
        _() &&
          t.pagination.$el.off(
            "keydown",
            $n(t.params.pagination.bulletClass),
            g
          ),
        t.$el.off("focus", P, !0),
        t.$el.off("pointerdown", w, !0),
        t.$el.off("pointerup", C, !0);
    }
    n("beforeInit", () => {
      r = F(
        `<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
      );
    }),
      n("afterInit", () => {
        t.params.a11y.enabled && T();
      }),
      n(
        "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
        () => {
          t.params.a11y.enabled && O();
        }
      ),
      n("fromEdge toEdge afterInit lock unlock", () => {
        t.params.a11y.enabled && y();
      }),
      n("paginationUpdate", () => {
        t.params.a11y.enabled && x();
      }),
      n("destroy", () => {
        t.params.a11y.enabled && M();
      });
  }
  function Qm({ swiper: t, extendParams: e, on: n }) {
    e({
      history: {
        enabled: !1,
        root: "",
        replaceState: !1,
        key: "slides",
        keepQuery: !1,
      },
    });
    let r = !1,
      i = {};
    const s = (d) =>
        d
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, ""),
      a = (d) => {
        const h = ge();
        let m;
        d ? (m = new URL(d)) : (m = h.location);
        const p = m.pathname
            .slice(1)
            .split("/")
            .filter((_) => _ !== ""),
          g = p.length,
          y = p[g - 2],
          v = p[g - 1];
        return { key: y, value: v };
      },
      o = (d, h) => {
        const m = ge();
        if (!r || !t.params.history.enabled) return;
        let p;
        t.params.url ? (p = new URL(t.params.url)) : (p = m.location);
        const g = t.slides.eq(h);
        let y = s(g.attr("data-history"));
        if (t.params.history.root.length > 0) {
          let _ = t.params.history.root;
          _[_.length - 1] === "/" && (_ = _.slice(0, _.length - 1)),
            (y = `${_}/${d}/${y}`);
        } else p.pathname.includes(d) || (y = `${d}/${y}`);
        t.params.history.keepQuery && (y += p.search);
        const v = m.history.state;
        (v && v.value === y) ||
          (t.params.history.replaceState
            ? m.history.replaceState({ value: y }, null, y)
            : m.history.pushState({ value: y }, null, y));
      },
      l = (d, h, m) => {
        if (h)
          for (let p = 0, g = t.slides.length; p < g; p += 1) {
            const y = t.slides.eq(p);
            if (
              s(y.attr("data-history")) === h &&
              !y.hasClass(t.params.slideDuplicateClass)
            ) {
              const _ = y.index();
              t.slideTo(_, d, m);
            }
          }
        else t.slideTo(0, d, m);
      },
      c = () => {
        (i = a(t.params.url)), l(t.params.speed, i.value, !1);
      },
      u = () => {
        const d = ge();
        if (t.params.history) {
          if (!d.history || !d.history.pushState) {
            (t.params.history.enabled = !1),
              (t.params.hashNavigation.enabled = !0);
            return;
          }
          (r = !0),
            (i = a(t.params.url)),
            !(!i.key && !i.value) &&
              (l(0, i.value, t.params.runCallbacksOnInit),
              t.params.history.replaceState ||
                d.addEventListener("popstate", c));
        }
      },
      f = () => {
        const d = ge();
        t.params.history.replaceState || d.removeEventListener("popstate", c);
      };
    n("init", () => {
      t.params.history.enabled && u();
    }),
      n("destroy", () => {
        t.params.history.enabled && f();
      }),
      n("transitionEnd _freeModeNoMomentumRelease", () => {
        r && o(t.params.history.key, t.activeIndex);
      }),
      n("slideChange", () => {
        r && t.params.cssMode && o(t.params.history.key, t.activeIndex);
      });
  }
  function Jm({ swiper: t, extendParams: e, emit: n, on: r }) {
    let i = !1;
    const s = Fe(),
      a = ge();
    e({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
    const o = () => {
        n("hashChange");
        const f = s.location.hash.replace("#", ""),
          d = t.slides.eq(t.activeIndex).attr("data-hash");
        if (f !== d) {
          const h = t.$wrapperEl
            .children(`.${t.params.slideClass}[data-hash="${f}"]`)
            .index();
          if (typeof h == "undefined") return;
          t.slideTo(h);
        }
      },
      l = () => {
        if (!(!i || !t.params.hashNavigation.enabled))
          if (
            t.params.hashNavigation.replaceState &&
            a.history &&
            a.history.replaceState
          )
            a.history.replaceState(
              null,
              null,
              `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""
            ),
              n("hashSet");
          else {
            const f = t.slides.eq(t.activeIndex),
              d = f.attr("data-hash") || f.attr("data-history");
            (s.location.hash = d || ""), n("hashSet");
          }
      },
      c = () => {
        if (
          !t.params.hashNavigation.enabled ||
          (t.params.history && t.params.history.enabled)
        )
          return;
        i = !0;
        const f = s.location.hash.replace("#", "");
        if (f)
          for (let h = 0, m = t.slides.length; h < m; h += 1) {
            const p = t.slides.eq(h);
            if (
              (p.attr("data-hash") || p.attr("data-history")) === f &&
              !p.hasClass(t.params.slideDuplicateClass)
            ) {
              const y = p.index();
              t.slideTo(y, 0, t.params.runCallbacksOnInit, !0);
            }
          }
        t.params.hashNavigation.watchState && F(a).on("hashchange", o);
      },
      u = () => {
        t.params.hashNavigation.watchState && F(a).off("hashchange", o);
      };
    r("init", () => {
      t.params.hashNavigation.enabled && c();
    }),
      r("destroy", () => {
        t.params.hashNavigation.enabled && u();
      }),
      r("transitionEnd _freeModeNoMomentumRelease", () => {
        i && l();
      }),
      r("slideChange", () => {
        i && t.params.cssMode && l();
      });
  }
  function eg({ swiper: t, extendParams: e, on: n, emit: r }) {
    let i;
    (t.autoplay = { running: !1, paused: !1 }),
      e({
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1,
        },
      });
    function s() {
      if (!t.size) {
        (t.autoplay.running = !1), (t.autoplay.paused = !1);
        return;
      }
      const p = t.slides.eq(t.activeIndex);
      let g = t.params.autoplay.delay;
      p.attr("data-swiper-autoplay") &&
        (g = p.attr("data-swiper-autoplay") || t.params.autoplay.delay),
        clearTimeout(i),
        (i = Xn(() => {
          let y;
          t.params.autoplay.reverseDirection
            ? t.params.loop
              ? (t.loopFix(),
                (y = t.slidePrev(t.params.speed, !0, !0)),
                r("autoplay"))
              : t.isBeginning
              ? t.params.autoplay.stopOnLastSlide
                ? o()
                : ((y = t.slideTo(t.slides.length - 1, t.params.speed, !0, !0)),
                  r("autoplay"))
              : ((y = t.slidePrev(t.params.speed, !0, !0)), r("autoplay"))
            : t.params.loop
            ? (t.loopFix(),
              (y = t.slideNext(t.params.speed, !0, !0)),
              r("autoplay"))
            : t.isEnd
            ? t.params.autoplay.stopOnLastSlide
              ? o()
              : ((y = t.slideTo(0, t.params.speed, !0, !0)), r("autoplay"))
            : ((y = t.slideNext(t.params.speed, !0, !0)), r("autoplay")),
            ((t.params.cssMode && t.autoplay.running) || y === !1) && s();
        }, g));
    }
    function a() {
      return typeof i != "undefined" || t.autoplay.running
        ? !1
        : ((t.autoplay.running = !0), r("autoplayStart"), s(), !0);
    }
    function o() {
      return !t.autoplay.running || typeof i == "undefined"
        ? !1
        : (i && (clearTimeout(i), (i = void 0)),
          (t.autoplay.running = !1),
          r("autoplayStop"),
          !0);
    }
    function l(p) {
      t.autoplay.running &&
        (t.autoplay.paused ||
          (i && clearTimeout(i),
          (t.autoplay.paused = !0),
          p === 0 || !t.params.autoplay.waitForTransition
            ? ((t.autoplay.paused = !1), s())
            : ["transitionend", "webkitTransitionEnd"].forEach((g) => {
                t.$wrapperEl[0].addEventListener(g, u);
              })));
    }
    function c() {
      const p = Fe();
      p.visibilityState === "hidden" && t.autoplay.running && l(),
        p.visibilityState === "visible" &&
          t.autoplay.paused &&
          (s(), (t.autoplay.paused = !1));
    }
    function u(p) {
      !t ||
        t.destroyed ||
        !t.$wrapperEl ||
        (p.target === t.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((g) => {
            t.$wrapperEl[0].removeEventListener(g, u);
          }),
          (t.autoplay.paused = !1),
          t.autoplay.running ? s() : o()));
    }
    function f() {
      t.params.autoplay.disableOnInteraction ? o() : (r("autoplayPause"), l()),
        ["transitionend", "webkitTransitionEnd"].forEach((p) => {
          t.$wrapperEl[0].removeEventListener(p, u);
        });
    }
    function d() {
      t.params.autoplay.disableOnInteraction ||
        ((t.autoplay.paused = !1), r("autoplayResume"), s());
    }
    function h() {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.$el.on("mouseenter", f), t.$el.on("mouseleave", d));
    }
    function m() {
      t.$el.off("mouseenter", f), t.$el.off("mouseleave", d);
    }
    n("init", () => {
      t.params.autoplay.enabled &&
        (a(), Fe().addEventListener("visibilitychange", c), h());
    }),
      n("beforeTransitionStart", (p, g, y) => {
        t.autoplay.running &&
          (y || !t.params.autoplay.disableOnInteraction
            ? t.autoplay.pause(g)
            : o());
      }),
      n("sliderFirstMove", () => {
        t.autoplay.running &&
          (t.params.autoplay.disableOnInteraction ? o() : l());
      }),
      n("touchEnd", () => {
        t.params.cssMode &&
          t.autoplay.paused &&
          !t.params.autoplay.disableOnInteraction &&
          s();
      }),
      n("destroy", () => {
        m(),
          t.autoplay.running && o(),
          Fe().removeEventListener("visibilitychange", c);
      }),
      Object.assign(t.autoplay, { pause: l, run: s, start: a, stop: o });
  }
  function tg({ swiper: t, extendParams: e, on: n }) {
    e({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs",
      },
    });
    let r = !1,
      i = !1;
    t.thumbs = { swiper: null };
    function s() {
      const l = t.thumbs.swiper;
      if (!l || l.destroyed) return;
      const c = l.clickedIndex,
        u = l.clickedSlide;
      if (
        (u && F(u).hasClass(t.params.thumbs.slideThumbActiveClass)) ||
        typeof c == "undefined" ||
        c === null
      )
        return;
      let f;
      if (
        (l.params.loop
          ? (f = parseInt(
              F(l.clickedSlide).attr("data-swiper-slide-index"),
              10
            ))
          : (f = c),
        t.params.loop)
      ) {
        let d = t.activeIndex;
        t.slides.eq(d).hasClass(t.params.slideDuplicateClass) &&
          (t.loopFix(),
          (t._clientLeft = t.$wrapperEl[0].clientLeft),
          (d = t.activeIndex));
        const h = t.slides
            .eq(d)
            .prevAll(`[data-swiper-slide-index="${f}"]`)
            .eq(0)
            .index(),
          m = t.slides
            .eq(d)
            .nextAll(`[data-swiper-slide-index="${f}"]`)
            .eq(0)
            .index();
        typeof h == "undefined"
          ? (f = m)
          : typeof m == "undefined"
          ? (f = h)
          : m - d < d - h
          ? (f = m)
          : (f = h);
      }
      t.slideTo(f);
    }
    function a() {
      const { thumbs: l } = t.params;
      if (r) return !1;
      r = !0;
      const c = t.constructor;
      if (l.swiper instanceof c)
        (t.thumbs.swiper = l.swiper),
          Object.assign(t.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
          Object.assign(t.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          });
      else if (Vi(l.swiper)) {
        const u = Object.assign({}, l.swiper);
        Object.assign(u, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
          (t.thumbs.swiper = new c(u)),
          (i = !0);
      }
      return (
        t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),
        t.thumbs.swiper.on("tap", s),
        !0
      );
    }
    function o(l) {
      const c = t.thumbs.swiper;
      if (!c || c.destroyed) return;
      const u =
        c.params.slidesPerView === "auto"
          ? c.slidesPerViewDynamic()
          : c.params.slidesPerView;
      let f = 1;
      const d = t.params.thumbs.slideThumbActiveClass;
      if (
        (t.params.slidesPerView > 1 &&
          !t.params.centeredSlides &&
          (f = t.params.slidesPerView),
        t.params.thumbs.multipleActiveThumbs || (f = 1),
        (f = Math.floor(f)),
        c.slides.removeClass(d),
        c.params.loop || (c.params.virtual && c.params.virtual.enabled))
      )
        for (let p = 0; p < f; p += 1)
          c.$wrapperEl
            .children(`[data-swiper-slide-index="${t.realIndex + p}"]`)
            .addClass(d);
      else
        for (let p = 0; p < f; p += 1) c.slides.eq(t.realIndex + p).addClass(d);
      const h = t.params.thumbs.autoScrollOffset,
        m = h && !c.params.loop;
      if (t.realIndex !== c.realIndex || m) {
        let p = c.activeIndex,
          g,
          y;
        if (c.params.loop) {
          c.slides.eq(p).hasClass(c.params.slideDuplicateClass) &&
            (c.loopFix(),
            (c._clientLeft = c.$wrapperEl[0].clientLeft),
            (p = c.activeIndex));
          const v = c.slides
              .eq(p)
              .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
              .eq(0)
              .index(),
            _ = c.slides
              .eq(p)
              .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
              .eq(0)
              .index();
          typeof v == "undefined"
            ? (g = _)
            : typeof _ == "undefined"
            ? (g = v)
            : _ - p === p - v
            ? (g = c.params.slidesPerGroup > 1 ? _ : p)
            : _ - p < p - v
            ? (g = _)
            : (g = v),
            (y = t.activeIndex > t.previousIndex ? "next" : "prev");
        } else (g = t.realIndex), (y = g > t.previousIndex ? "next" : "prev");
        m && (g += y === "next" ? h : -1 * h),
          c.visibleSlidesIndexes &&
            c.visibleSlidesIndexes.indexOf(g) < 0 &&
            (c.params.centeredSlides
              ? g > p
                ? (g = g - Math.floor(u / 2) + 1)
                : (g = g + Math.floor(u / 2) - 1)
              : g > p && c.params.slidesPerGroup,
            c.slideTo(g, l ? 0 : void 0));
      }
    }
    n("beforeInit", () => {
      const { thumbs: l } = t.params;
      !l || !l.swiper || (a(), o(!0));
    }),
      n("slideChange update resize observerUpdate", () => {
        o();
      }),
      n("setTransition", (l, c) => {
        const u = t.thumbs.swiper;
        !u || u.destroyed || u.setTransition(c);
      }),
      n("beforeDestroy", () => {
        const l = t.thumbs.swiper;
        !l || l.destroyed || (i && l.destroy());
      }),
      Object.assign(t.thumbs, { init: a, update: o });
  }
  function ng({ swiper: t, extendParams: e, emit: n, once: r }) {
    e({
      freeMode: {
        enabled: !1,
        momentum: !0,
        momentumRatio: 1,
        momentumBounce: !0,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: !1,
        minimumVelocity: 0.02,
      },
    });
    function i() {
      const o = t.getTranslate();
      t.setTranslate(o),
        t.setTransition(0),
        (t.touchEventsData.velocities.length = 0),
        t.freeMode.onTouchEnd({
          currentPos: t.rtl ? t.translate : -t.translate,
        });
    }
    function s() {
      const { touchEventsData: o, touches: l } = t;
      o.velocities.length === 0 &&
        o.velocities.push({
          position: l[t.isHorizontal() ? "startX" : "startY"],
          time: o.touchStartTime,
        }),
        o.velocities.push({
          position: l[t.isHorizontal() ? "currentX" : "currentY"],
          time: Ot(),
        });
    }
    function a({ currentPos: o }) {
      const {
          params: l,
          $wrapperEl: c,
          rtlTranslate: u,
          snapGrid: f,
          touchEventsData: d,
        } = t,
        m = Ot() - d.touchStartTime;
      if (o < -t.minTranslate()) {
        t.slideTo(t.activeIndex);
        return;
      }
      if (o > -t.maxTranslate()) {
        t.slides.length < f.length
          ? t.slideTo(f.length - 1)
          : t.slideTo(t.slides.length - 1);
        return;
      }
      if (l.freeMode.momentum) {
        if (d.velocities.length > 1) {
          const w = d.velocities.pop(),
            C = d.velocities.pop(),
            P = w.position - C.position,
            O = w.time - C.time;
          (t.velocity = P / O),
            (t.velocity /= 2),
            Math.abs(t.velocity) < l.freeMode.minimumVelocity &&
              (t.velocity = 0),
            (O > 150 || Ot() - w.time > 300) && (t.velocity = 0);
        } else t.velocity = 0;
        (t.velocity *= l.freeMode.momentumVelocityRatio),
          (d.velocities.length = 0);
        let p = 1e3 * l.freeMode.momentumRatio;
        const g = t.velocity * p;
        let y = t.translate + g;
        u && (y = -y);
        let v = !1,
          _;
        const x = Math.abs(t.velocity) * 20 * l.freeMode.momentumBounceRatio;
        let S;
        if (y < t.maxTranslate())
          l.freeMode.momentumBounce
            ? (y + t.maxTranslate() < -x && (y = t.maxTranslate() - x),
              (_ = t.maxTranslate()),
              (v = !0),
              (d.allowMomentumBounce = !0))
            : (y = t.maxTranslate()),
            l.loop && l.centeredSlides && (S = !0);
        else if (y > t.minTranslate())
          l.freeMode.momentumBounce
            ? (y - t.minTranslate() > x && (y = t.minTranslate() + x),
              (_ = t.minTranslate()),
              (v = !0),
              (d.allowMomentumBounce = !0))
            : (y = t.minTranslate()),
            l.loop && l.centeredSlides && (S = !0);
        else if (l.freeMode.sticky) {
          let w;
          for (let C = 0; C < f.length; C += 1)
            if (f[C] > -y) {
              w = C;
              break;
            }
          Math.abs(f[w] - y) < Math.abs(f[w - 1] - y) ||
          t.swipeDirection === "next"
            ? (y = f[w])
            : (y = f[w - 1]),
            (y = -y);
        }
        if (
          (S &&
            r("transitionEnd", () => {
              t.loopFix();
            }),
          t.velocity !== 0)
        ) {
          if (
            (u
              ? (p = Math.abs((-y - t.translate) / t.velocity))
              : (p = Math.abs((y - t.translate) / t.velocity)),
            l.freeMode.sticky)
          ) {
            const w = Math.abs((u ? -y : y) - t.translate),
              C = t.slidesSizesGrid[t.activeIndex];
            w < C
              ? (p = l.speed)
              : w < 2 * C
              ? (p = l.speed * 1.5)
              : (p = l.speed * 2.5);
          }
        } else if (l.freeMode.sticky) {
          t.slideToClosest();
          return;
        }
        l.freeMode.momentumBounce && v
          ? (t.updateProgress(_),
            t.setTransition(p),
            t.setTranslate(y),
            t.transitionStart(!0, t.swipeDirection),
            (t.animating = !0),
            c.transitionEnd(() => {
              !t ||
                t.destroyed ||
                !d.allowMomentumBounce ||
                (n("momentumBounce"),
                t.setTransition(l.speed),
                setTimeout(() => {
                  t.setTranslate(_),
                    c.transitionEnd(() => {
                      !t || t.destroyed || t.transitionEnd();
                    });
                }, 0));
            }))
          : t.velocity
          ? (n("_freeModeNoMomentumRelease"),
            t.updateProgress(y),
            t.setTransition(p),
            t.setTranslate(y),
            t.transitionStart(!0, t.swipeDirection),
            t.animating ||
              ((t.animating = !0),
              c.transitionEnd(() => {
                !t || t.destroyed || t.transitionEnd();
              })))
          : t.updateProgress(y),
          t.updateActiveIndex(),
          t.updateSlidesClasses();
      } else if (l.freeMode.sticky) {
        t.slideToClosest();
        return;
      } else l.freeMode && n("_freeModeNoMomentumRelease");
      (!l.freeMode.momentum || m >= l.longSwipesMs) &&
        (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
    }
    Object.assign(t, {
      freeMode: { onTouchStart: i, onTouchMove: s, onTouchEnd: a },
    });
  }
  function rg({ swiper: t, extendParams: e }) {
    e({ grid: { rows: 1, fill: "column" } });
    let n, r, i;
    const s = (l) => {
        const { slidesPerView: c } = t.params,
          { rows: u, fill: f } = t.params.grid;
        (r = n / u),
          (i = Math.floor(l / u)),
          Math.floor(l / u) === l / u ? (n = l) : (n = Math.ceil(l / u) * u),
          c !== "auto" && f === "row" && (n = Math.max(n, c * u));
      },
      a = (l, c, u, f) => {
        const { slidesPerGroup: d, spaceBetween: h } = t.params,
          { rows: m, fill: p } = t.params.grid;
        let g, y, v;
        if (p === "row" && d > 1) {
          const _ = Math.floor(l / (d * m)),
            x = l - m * d * _,
            S = _ === 0 ? d : Math.min(Math.ceil((u - _ * m * d) / m), d);
          (v = Math.floor(x / S)),
            (y = x - v * S + _ * d),
            (g = y + (v * n) / m),
            c.css({ "-webkit-order": g, order: g });
        } else
          p === "column"
            ? ((y = Math.floor(l / m)),
              (v = l - y * m),
              (y > i || (y === i && v === m - 1)) &&
                ((v += 1), v >= m && ((v = 0), (y += 1))))
            : ((v = Math.floor(l / r)), (y = l - v * r));
        c.css(f("margin-top"), v !== 0 ? h && `${h}px` : "");
      },
      o = (l, c, u) => {
        const {
            spaceBetween: f,
            centeredSlides: d,
            roundLengths: h,
          } = t.params,
          { rows: m } = t.params.grid;
        if (
          ((t.virtualSize = (l + f) * n),
          (t.virtualSize = Math.ceil(t.virtualSize / m) - f),
          t.$wrapperEl.css({ [u("width")]: `${t.virtualSize + f}px` }),
          d)
        ) {
          c.splice(0, c.length);
          const p = [];
          for (let g = 0; g < c.length; g += 1) {
            let y = c[g];
            h && (y = Math.floor(y)), c[g] < t.virtualSize + c[0] && p.push(y);
          }
          c.push(...p);
        }
      };
    t.grid = { initSlides: s, updateSlide: a, updateWrapperSize: o };
  }
  function ig(t) {
    const e = this,
      { $wrapperEl: n, params: r } = e;
    if ((r.loop && e.loopDestroy(), typeof t == "object" && "length" in t))
      for (let i = 0; i < t.length; i += 1) t[i] && n.append(t[i]);
    else n.append(t);
    r.loop && e.loopCreate(), r.observer || e.update();
  }
  function sg(t) {
    const e = this,
      { params: n, $wrapperEl: r, activeIndex: i } = e;
    n.loop && e.loopDestroy();
    let s = i + 1;
    if (typeof t == "object" && "length" in t) {
      for (let a = 0; a < t.length; a += 1) t[a] && r.prepend(t[a]);
      s = i + t.length;
    } else r.prepend(t);
    n.loop && e.loopCreate(), n.observer || e.update(), e.slideTo(s, 0, !1);
  }
  function ag(t, e) {
    const n = this,
      { $wrapperEl: r, params: i, activeIndex: s } = n;
    let a = s;
    i.loop &&
      ((a -= n.loopedSlides),
      n.loopDestroy(),
      (n.slides = r.children(`.${i.slideClass}`)));
    const o = n.slides.length;
    if (t <= 0) {
      n.prependSlide(e);
      return;
    }
    if (t >= o) {
      n.appendSlide(e);
      return;
    }
    let l = a > t ? a + 1 : a;
    const c = [];
    for (let u = o - 1; u >= t; u -= 1) {
      const f = n.slides.eq(u);
      f.remove(), c.unshift(f);
    }
    if (typeof e == "object" && "length" in e) {
      for (let u = 0; u < e.length; u += 1) e[u] && r.append(e[u]);
      l = a > t ? a + e.length : a;
    } else r.append(e);
    for (let u = 0; u < c.length; u += 1) r.append(c[u]);
    i.loop && n.loopCreate(),
      i.observer || n.update(),
      i.loop ? n.slideTo(l + n.loopedSlides, 0, !1) : n.slideTo(l, 0, !1);
  }
  function og(t) {
    const e = this,
      { params: n, $wrapperEl: r, activeIndex: i } = e;
    let s = i;
    n.loop &&
      ((s -= e.loopedSlides),
      e.loopDestroy(),
      (e.slides = r.children(`.${n.slideClass}`)));
    let a = s,
      o;
    if (typeof t == "object" && "length" in t) {
      for (let l = 0; l < t.length; l += 1)
        (o = t[l]), e.slides[o] && e.slides.eq(o).remove(), o < a && (a -= 1);
      a = Math.max(a, 0);
    } else (o = t), e.slides[o] && e.slides.eq(o).remove(), o < a && (a -= 1), (a = Math.max(a, 0));
    n.loop && e.loopCreate(),
      n.observer || e.update(),
      n.loop ? e.slideTo(a + e.loopedSlides, 0, !1) : e.slideTo(a, 0, !1);
  }
  function lg() {
    const t = this,
      e = [];
    for (let n = 0; n < t.slides.length; n += 1) e.push(n);
    t.removeSlide(e);
  }
  function cg({ swiper: t }) {
    Object.assign(t, {
      appendSlide: ig.bind(t),
      prependSlide: sg.bind(t),
      addSlide: ag.bind(t),
      removeSlide: og.bind(t),
      removeAllSlides: lg.bind(t),
    });
  }
  function ni(t) {
    const {
      effect: e,
      swiper: n,
      on: r,
      setTranslate: i,
      setTransition: s,
      overwriteParams: a,
      perspective: o,
      recreateShadows: l,
      getEffectParams: c,
    } = t;
    r("beforeInit", () => {
      if (n.params.effect !== e) return;
      n.classNames.push(`${n.params.containerModifierClass}${e}`),
        o && o() && n.classNames.push(`${n.params.containerModifierClass}3d`);
      const f = a ? a() : {};
      Object.assign(n.params, f), Object.assign(n.originalParams, f);
    }),
      r("setTranslate", () => {
        n.params.effect === e && i();
      }),
      r("setTransition", (f, d) => {
        n.params.effect === e && s(d);
      }),
      r("transitionEnd", () => {
        if (n.params.effect === e && l) {
          if (!c || !c().slideShadows) return;
          n.slides.each((f) => {
            n.$(f)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .remove();
          }),
            l();
        }
      });
    let u;
    r("virtualUpdate", () => {
      n.params.effect === e &&
        (n.slides.length || (u = !0),
        requestAnimationFrame(() => {
          u && n.slides && n.slides.length && (i(), (u = !1));
        }));
    });
  }
  function Xi(t, e) {
    return t.transformEl
      ? e
          .find(t.transformEl)
          .css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden",
          })
      : e;
  }
  function Gs({ swiper: t, duration: e, transformEl: n, allSlides: r }) {
    const { slides: i, activeIndex: s, $wrapperEl: a } = t;
    if (t.params.virtualTranslate && e !== 0) {
      let o = !1,
        l;
      r ? (l = n ? i.find(n) : i) : (l = n ? i.eq(s).find(n) : i.eq(s)),
        l.transitionEnd(() => {
          if (o || !t || t.destroyed) return;
          (o = !0), (t.animating = !1);
          const c = ["webkitTransitionEnd", "transitionend"];
          for (let u = 0; u < c.length; u += 1) a.trigger(c[u]);
        });
    }
  }
  function ug({ swiper: t, extendParams: e, on: n }) {
    e({ fadeEffect: { crossFade: !1, transformEl: null } }),
      ni({
        effect: "fade",
        swiper: t,
        on: n,
        setTranslate: () => {
          const { slides: s } = t,
            a = t.params.fadeEffect;
          for (let o = 0; o < s.length; o += 1) {
            const l = t.slides.eq(o);
            let u = -l[0].swiperSlideOffset;
            t.params.virtualTranslate || (u -= t.translate);
            let f = 0;
            t.isHorizontal() || ((f = u), (u = 0));
            const d = t.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(l[0].progress), 0)
              : 1 + Math.min(Math.max(l[0].progress, -1), 0);
            Xi(a, l)
              .css({ opacity: d })
              .transform(`translate3d(${u}px, ${f}px, 0px)`);
          }
        },
        setTransition: (s) => {
          const { transformEl: a } = t.params.fadeEffect;
          (a ? t.slides.find(a) : t.slides).transition(s),
            Gs({ swiper: t, duration: s, transformEl: a, allSlides: !0 });
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
  }
  function fg({ swiper: t, extendParams: e, on: n }) {
    e({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    });
    const r = (o, l, c) => {
      let u = c
          ? o.find(".swiper-slide-shadow-left")
          : o.find(".swiper-slide-shadow-top"),
        f = c
          ? o.find(".swiper-slide-shadow-right")
          : o.find(".swiper-slide-shadow-bottom");
      u.length === 0 &&
        ((u = F(
          `<div class="swiper-slide-shadow-${c ? "left" : "top"}"></div>`
        )),
        o.append(u)),
        f.length === 0 &&
          ((f = F(
            `<div class="swiper-slide-shadow-${c ? "right" : "bottom"}"></div>`
          )),
          o.append(f)),
        u.length && (u[0].style.opacity = Math.max(-l, 0)),
        f.length && (f[0].style.opacity = Math.max(l, 0));
    };
    ni({
      effect: "cube",
      swiper: t,
      on: n,
      setTranslate: () => {
        const {
            $el: o,
            $wrapperEl: l,
            slides: c,
            width: u,
            height: f,
            rtlTranslate: d,
            size: h,
            browser: m,
          } = t,
          p = t.params.cubeEffect,
          g = t.isHorizontal(),
          y = t.virtual && t.params.virtual.enabled;
        let v = 0,
          _;
        p.shadow &&
          (g
            ? ((_ = l.find(".swiper-cube-shadow")),
              _.length === 0 &&
                ((_ = F('<div class="swiper-cube-shadow"></div>')),
                l.append(_)),
              _.css({ height: `${u}px` }))
            : ((_ = o.find(".swiper-cube-shadow")),
              _.length === 0 &&
                ((_ = F('<div class="swiper-cube-shadow"></div>')),
                o.append(_))));
        for (let S = 0; S < c.length; S += 1) {
          const w = c.eq(S);
          let C = S;
          y && (C = parseInt(w.attr("data-swiper-slide-index"), 10));
          let P = C * 90,
            O = Math.floor(P / 360);
          d && ((P = -P), (O = Math.floor(-P / 360)));
          const T = Math.max(Math.min(w[0].progress, 1), -1);
          let M = 0,
            b = 0,
            E = 0;
          C % 4 === 0
            ? ((M = -O * 4 * h), (E = 0))
            : (C - 1) % 4 === 0
            ? ((M = 0), (E = -O * 4 * h))
            : (C - 2) % 4 === 0
            ? ((M = h + O * 4 * h), (E = h))
            : (C - 3) % 4 === 0 && ((M = -h), (E = 3 * h + h * 4 * O)),
            d && (M = -M),
            g || ((b = M), (M = 0));
          const A = `rotateX(${g ? 0 : -P}deg) rotateY(${
            g ? P : 0
          }deg) translate3d(${M}px, ${b}px, ${E}px)`;
          T <= 1 &&
            T > -1 &&
            ((v = C * 90 + T * 90), d && (v = -C * 90 - T * 90)),
            w.transform(A),
            p.slideShadows && r(w, T, g);
        }
        if (
          (l.css({
            "-webkit-transform-origin": `50% 50% -${h / 2}px`,
            "transform-origin": `50% 50% -${h / 2}px`,
          }),
          p.shadow)
        )
          if (g)
            _.transform(
              `translate3d(0px, ${u / 2 + p.shadowOffset}px, ${
                -u / 2
              }px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`
            );
          else {
            const S = Math.abs(v) - Math.floor(Math.abs(v) / 90) * 90,
              w =
                1.5 -
                (Math.sin((S * 2 * Math.PI) / 360) / 2 +
                  Math.cos((S * 2 * Math.PI) / 360) / 2),
              C = p.shadowScale,
              P = p.shadowScale / w,
              O = p.shadowOffset;
            _.transform(
              `scale3d(${C}, 1, ${P}) translate3d(0px, ${f / 2 + O}px, ${
                -f / 2 / P
              }px) rotateX(-90deg)`
            );
          }
        const x = m.isSafari || m.isWebView ? -h / 2 : 0;
        l.transform(
          `translate3d(0px,0,${x}px) rotateX(${
            t.isHorizontal() ? 0 : v
          }deg) rotateY(${t.isHorizontal() ? -v : 0}deg)`
        ),
          l[0].style.setProperty("--swiper-cube-translate-z", `${x}px`);
      },
      setTransition: (o) => {
        const { $el: l, slides: c } = t;
        c
          .transition(o)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(o),
          t.params.cubeEffect.shadow &&
            !t.isHorizontal() &&
            l.find(".swiper-cube-shadow").transition(o);
      },
      recreateShadows: () => {
        const o = t.isHorizontal();
        t.slides.each((l) => {
          const c = Math.max(Math.min(l.progress, 1), -1);
          r(F(l), c, o);
        });
      },
      getEffectParams: () => t.params.cubeEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: !1,
        virtualTranslate: !0,
      }),
    });
  }
  function ri(t, e, n) {
    const r = `swiper-slide-shadow${n ? `-${n}` : ""}`,
      i = t.transformEl ? e.find(t.transformEl) : e;
    let s = i.children(`.${r}`);
    return (
      s.length ||
        ((s = F(`<div class="swiper-slide-shadow${n ? `-${n}` : ""}"></div>`)),
        i.append(s)),
      s
    );
  }
  function dg({ swiper: t, extendParams: e, on: n }) {
    e({
      flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null },
    });
    const r = (o, l, c) => {
      let u = t.isHorizontal()
          ? o.find(".swiper-slide-shadow-left")
          : o.find(".swiper-slide-shadow-top"),
        f = t.isHorizontal()
          ? o.find(".swiper-slide-shadow-right")
          : o.find(".swiper-slide-shadow-bottom");
      u.length === 0 && (u = ri(c, o, t.isHorizontal() ? "left" : "top")),
        f.length === 0 && (f = ri(c, o, t.isHorizontal() ? "right" : "bottom")),
        u.length && (u[0].style.opacity = Math.max(-l, 0)),
        f.length && (f[0].style.opacity = Math.max(l, 0));
    };
    ni({
      effect: "flip",
      swiper: t,
      on: n,
      setTranslate: () => {
        const { slides: o, rtlTranslate: l } = t,
          c = t.params.flipEffect;
        for (let u = 0; u < o.length; u += 1) {
          const f = o.eq(u);
          let d = f[0].progress;
          t.params.flipEffect.limitRotation &&
            (d = Math.max(Math.min(f[0].progress, 1), -1));
          const h = f[0].swiperSlideOffset;
          let p = -180 * d,
            g = 0,
            y = t.params.cssMode ? -h - t.translate : -h,
            v = 0;
          t.isHorizontal()
            ? l && (p = -p)
            : ((v = y), (y = 0), (g = -p), (p = 0)),
            (f[0].style.zIndex = -Math.abs(Math.round(d)) + o.length),
            c.slideShadows && r(f, d, c);
          const _ = `translate3d(${y}px, ${v}px, 0px) rotateX(${g}deg) rotateY(${p}deg)`;
          Xi(c, f).transform(_);
        }
      },
      setTransition: (o) => {
        const { transformEl: l } = t.params.flipEffect;
        (l ? t.slides.find(l) : t.slides)
          .transition(o)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(o),
          Gs({ swiper: t, duration: o, transformEl: l });
      },
      recreateShadows: () => {
        const o = t.params.flipEffect;
        t.slides.each((l) => {
          const c = F(l);
          let u = c[0].progress;
          t.params.flipEffect.limitRotation &&
            (u = Math.max(Math.min(l.progress, 1), -1)),
            r(c, u, o);
        });
      },
      getEffectParams: () => t.params.flipEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !t.params.cssMode,
      }),
    });
  }
  function hg({ swiper: t, extendParams: e, on: n }) {
    e({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0,
        transformEl: null,
      },
    }),
      ni({
        effect: "coverflow",
        swiper: t,
        on: n,
        setTranslate: () => {
          const { width: s, height: a, slides: o, slidesSizesGrid: l } = t,
            c = t.params.coverflowEffect,
            u = t.isHorizontal(),
            f = t.translate,
            d = u ? -f + s / 2 : -f + a / 2,
            h = u ? c.rotate : -c.rotate,
            m = c.depth;
          for (let p = 0, g = o.length; p < g; p += 1) {
            const y = o.eq(p),
              v = l[p],
              _ = y[0].swiperSlideOffset,
              x = (d - _ - v / 2) / v,
              S =
                typeof c.modifier == "function"
                  ? c.modifier(x)
                  : x * c.modifier;
            let w = u ? h * S : 0,
              C = u ? 0 : h * S,
              P = -m * Math.abs(S),
              O = c.stretch;
            typeof O == "string" &&
              O.indexOf("%") !== -1 &&
              (O = (parseFloat(c.stretch) / 100) * v);
            let T = u ? 0 : O * S,
              M = u ? O * S : 0,
              b = 1 - (1 - c.scale) * Math.abs(S);
            Math.abs(M) < 0.001 && (M = 0),
              Math.abs(T) < 0.001 && (T = 0),
              Math.abs(P) < 0.001 && (P = 0),
              Math.abs(w) < 0.001 && (w = 0),
              Math.abs(C) < 0.001 && (C = 0),
              Math.abs(b) < 0.001 && (b = 0);
            const E = `translate3d(${M}px,${T}px,${P}px)  rotateX(${C}deg) rotateY(${w}deg) scale(${b})`;
            if (
              (Xi(c, y).transform(E),
              (y[0].style.zIndex = -Math.abs(Math.round(S)) + 1),
              c.slideShadows)
            ) {
              let L = u
                  ? y.find(".swiper-slide-shadow-left")
                  : y.find(".swiper-slide-shadow-top"),
                k = u
                  ? y.find(".swiper-slide-shadow-right")
                  : y.find(".swiper-slide-shadow-bottom");
              L.length === 0 && (L = ri(c, y, u ? "left" : "top")),
                k.length === 0 && (k = ri(c, y, u ? "right" : "bottom")),
                L.length && (L[0].style.opacity = S > 0 ? S : 0),
                k.length && (k[0].style.opacity = -S > 0 ? -S : 0);
            }
          }
        },
        setTransition: (s) => {
          const { transformEl: a } = t.params.coverflowEffect;
          (a ? t.slides.find(a) : t.slides)
            .transition(s)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(s);
        },
        perspective: () => !0,
        overwriteParams: () => ({ watchSlidesProgress: !0 }),
      });
  }
  function pg({ swiper: t, extendParams: e, on: n }) {
    e({
      creativeEffect: {
        transformEl: null,
        limitProgress: 1,
        shadowPerProgress: !1,
        progressMultiplier: 1,
        perspective: !0,
        prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
        next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
      },
    });
    const r = (a) => (typeof a == "string" ? a : `${a}px`);
    ni({
      effect: "creative",
      swiper: t,
      on: n,
      setTranslate: () => {
        const { slides: a, $wrapperEl: o, slidesSizesGrid: l } = t,
          c = t.params.creativeEffect,
          { progressMultiplier: u } = c,
          f = t.params.centeredSlides;
        if (f) {
          const d = l[0] / 2 - t.params.slidesOffsetBefore || 0;
          o.transform(`translateX(calc(50% - ${d}px))`);
        }
        for (let d = 0; d < a.length; d += 1) {
          const h = a.eq(d),
            m = h[0].progress,
            p = Math.min(
              Math.max(h[0].progress, -c.limitProgress),
              c.limitProgress
            );
          let g = p;
          f ||
            (g = Math.min(
              Math.max(h[0].originalProgress, -c.limitProgress),
              c.limitProgress
            ));
          const y = h[0].swiperSlideOffset,
            v = [t.params.cssMode ? -y - t.translate : -y, 0, 0],
            _ = [0, 0, 0];
          let x = !1;
          t.isHorizontal() || ((v[1] = v[0]), (v[0] = 0));
          let S = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1,
          };
          p < 0 ? ((S = c.next), (x = !0)) : p > 0 && ((S = c.prev), (x = !0)),
            v.forEach((b, E) => {
              v[E] = `calc(${b}px + (${r(S.translate[E])} * ${Math.abs(
                p * u
              )}))`;
            }),
            _.forEach((b, E) => {
              _[E] = S.rotate[E] * Math.abs(p * u);
            }),
            (h[0].style.zIndex = -Math.abs(Math.round(m)) + a.length);
          const w = v.join(", "),
            C = `rotateX(${_[0]}deg) rotateY(${_[1]}deg) rotateZ(${_[2]}deg)`,
            P =
              g < 0
                ? `scale(${1 + (1 - S.scale) * g * u})`
                : `scale(${1 - (1 - S.scale) * g * u})`,
            O =
              g < 0 ? 1 + (1 - S.opacity) * g * u : 1 - (1 - S.opacity) * g * u,
            T = `translate3d(${w}) ${C} ${P}`;
          if ((x && S.shadow) || !x) {
            let b = h.children(".swiper-slide-shadow");
            if ((b.length === 0 && S.shadow && (b = ri(c, h)), b.length)) {
              const E = c.shadowPerProgress ? p * (1 / c.limitProgress) : p;
              b[0].style.opacity = Math.min(Math.max(Math.abs(E), 0), 1);
            }
          }
          const M = Xi(c, h);
          M.transform(T).css({ opacity: O }),
            S.origin && M.css("transform-origin", S.origin);
        }
      },
      setTransition: (a) => {
        const { transformEl: o } = t.params.creativeEffect;
        (o ? t.slides.find(o) : t.slides)
          .transition(a)
          .find(".swiper-slide-shadow")
          .transition(a),
          Gs({ swiper: t, duration: a, transformEl: o, allSlides: !0 });
      },
      perspective: () => t.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !t.params.cssMode,
      }),
    });
  }
  function mg({ swiper: t, extendParams: e, on: n }) {
    e({
      cardsEffect: {
        slideShadows: !0,
        transformEl: null,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8,
      },
    }),
      ni({
        effect: "cards",
        swiper: t,
        on: n,
        setTranslate: () => {
          const { slides: s, activeIndex: a } = t,
            o = t.params.cardsEffect,
            { startTranslate: l, isTouched: c } = t.touchEventsData,
            u = t.translate;
          for (let f = 0; f < s.length; f += 1) {
            const d = s.eq(f),
              h = d[0].progress,
              m = Math.min(Math.max(h, -4), 4);
            let p = d[0].swiperSlideOffset;
            t.params.centeredSlides &&
              !t.params.cssMode &&
              t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),
              t.params.centeredSlides &&
                t.params.cssMode &&
                (p -= s[0].swiperSlideOffset);
            let g = t.params.cssMode ? -p - t.translate : -p,
              y = 0;
            const v = -100 * Math.abs(m);
            let _ = 1,
              x = -o.perSlideRotate * m,
              S = o.perSlideOffset - Math.abs(m) * 0.75;
            const w =
                t.virtual && t.params.virtual.enabled ? t.virtual.from + f : f,
              C =
                (w === a || w === a - 1) &&
                m > 0 &&
                m < 1 &&
                (c || t.params.cssMode) &&
                u < l,
              P =
                (w === a || w === a + 1) &&
                m < 0 &&
                m > -1 &&
                (c || t.params.cssMode) &&
                u > l;
            if (C || P) {
              const b = $t(1 - Math.abs((Math.abs(m) - 0.5) / 0.5), 0.5);
              (x += -28 * m * b),
                (_ += -0.5 * b),
                (S += 96 * b),
                (y = `${-25 * b * Math.abs(m)}%`);
            }
            if (
              (m < 0
                ? (g = `calc(${g}px + (${S * Math.abs(m)}%))`)
                : m > 0
                ? (g = `calc(${g}px + (-${S * Math.abs(m)}%))`)
                : (g = `${g}px`),
              !t.isHorizontal())
            ) {
              const b = y;
              (y = g), (g = b);
            }
            const O = m < 0 ? `${1 + (1 - _) * m}` : `${1 - (1 - _) * m}`,
              T = `
        translate3d(${g}, ${y}, ${v}px)
        rotateZ(${o.rotate ? x : 0}deg)
        scale(${O})
      `;
            if (o.slideShadows) {
              let b = d.find(".swiper-slide-shadow");
              b.length === 0 && (b = ri(o, d)),
                b.length &&
                  (b[0].style.opacity = Math.min(
                    Math.max((Math.abs(m) - 0.5) / 0.5, 0),
                    1
                  ));
            }
            (d[0].style.zIndex = -Math.abs(Math.round(h)) + s.length),
              Xi(o, d).transform(T);
          }
        },
        setTransition: (s) => {
          const { transformEl: a } = t.params.cardsEffect;
          (a ? t.slides.find(a) : t.slides)
            .transition(s)
            .find(".swiper-slide-shadow")
            .transition(s),
            Gs({ swiper: t, duration: s, transformEl: a });
        },
        perspective: () => !0,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
  }
  const gg = [
    qm,
    Hm,
    Vm,
    Wm,
    Xm,
    Ym,
    Gm,
    jm,
    Um,
    Km,
    Zm,
    Qm,
    Jm,
    eg,
    tg,
    ng,
    rg,
    cg,
    ug,
    fg,
    dg,
    hg,
    pg,
    mg,
  ];
  pt.use(gg);
  let go = null;
  const qc = () => {
    const t = document.querySelector(".swiper[work-slider='component']");
    if (!t) return;
    const e = () => window.innerWidth >= 768,
      n = () => {
        const i = e();
        go = new pt(t, {
          slidesPerView: "auto",
          followFinger: !0,
          freeMode: !1,
          slideToClickedSlide: !1,
          centeredSlides: !1,
          touchStartPreventDefault: !0,
          passiveListeners: !1,
          autoHeight: !1,
          speed: 600,
          grabCursor: !0,
          parallax: !0,
          loop: i,
          navigation: {
            nextEl: "[data-swiper-button='next']",
            prevEl: "[data-swiper-button='prev']",
          },
          mousewheel: { forceToAxis: !0 },
          effect: "coverflow",
          coverflowEffect: {
            rotate: 0,
            scale: 0.9,
            depth: 100,
            modifier: 1,
            slideShadows: !1,
          },
          keyboard: { enabled: !0, onlyInViewport: !0 },
          slideActiveClass: "is-active",
          slideDuplicateActiveClass: "is-active",
          on: {
            init: function () {
              const s = Array.from(this.slides).filter(
                  (o) => !o.classList.contains("swiper-slide-duplicate")
                ).length,
                a = this.realIndex + 1;
              (document.querySelector("[data-slider-count]").textContent = s),
                (document.querySelector("[data-slider-current]").textContent =
                  a);
            },
            slideChange: function () {
              const s = this.realIndex + 1;
              document.querySelector("[data-slider-current]").textContent = s;
            },
          },
        });
      };
    let r = e();
    n(),
      window.addEventListener("resize", () => {
        const i = e();
        i !== r && ((r = i), go && go.destroy(!0, !0), n());
      });
  };
  function On(t) {
    if (t === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function Hc(t, e) {
    (t.prototype = Object.create(e.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = e);
  }
  /*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Lt = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    ii = { duration: 0.5, overwrite: !1, delay: 0 },
    vo,
    et,
    xe,
    hn = 1e8,
    it = 1 / hn,
    yo = Math.PI * 2,
    vg = yo / 4,
    yg = 0,
    Vc = Math.sqrt,
    _g = Math.cos,
    bg = Math.sin,
    je = function (e) {
      return typeof e == "string";
    },
    ke = function (e) {
      return typeof e == "function";
    },
    An = function (e) {
      return typeof e == "number";
    },
    _o = function (e) {
      return typeof e == "undefined";
    },
    pn = function (e) {
      return typeof e == "object";
    },
    Et = function (e) {
      return e !== !1;
    },
    bo = function () {
      return typeof window != "undefined";
    },
    js = function (e) {
      return ke(e) || je(e);
    },
    Wc =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    st = Array.isArray,
    xo = /(?:-?\.?\d|\.)+/gi,
    Xc = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    si = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    So = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Yc = /[+-]=-?[.\d]+/,
    Gc = /[^,'"\[\]\s]+/gi,
    xg = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Te,
    mn,
    To,
    Eo,
    It = {},
    Us = {},
    jc,
    Uc = function (e) {
      return (Us = oi(e, It)) && Pt;
    },
    wo = function (e, n) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        n,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    Yi = function (e, n) {
      return !n && console.warn(e);
    },
    Kc = function (e, n) {
      return (e && (It[e] = n) && Us && (Us[e] = n)) || It;
    },
    Gi = function () {
      return 0;
    },
    Sg = { suppressEvents: !0, isStart: !0, kill: !1 },
    Ks = { suppressEvents: !0, kill: !1 },
    Tg = { suppressEvents: !0 },
    Co = {},
    Yn = [],
    Po = {},
    Zc,
    Dt = {},
    ko = {},
    Qc = 30,
    Zs = [],
    Mo = "",
    $o = function (e) {
      var n = e[0],
        r,
        i;
      if ((pn(n) || ke(n) || (e = [e]), !(r = (n._gsap || {}).harness))) {
        for (i = Zs.length; i-- && !Zs[i].targetTest(n); );
        r = Zs[i];
      }
      for (i = e.length; i--; )
        (e[i] && (e[i]._gsap || (e[i]._gsap = new Pu(e[i], r)))) ||
          e.splice(i, 1);
      return e;
    },
    _r = function (e) {
      return e._gsap || $o(Gt(e))[0]._gsap;
    },
    Jc = function (e, n, r) {
      return (r = e[n]) && ke(r)
        ? e[n]()
        : (_o(r) && e.getAttribute && e.getAttribute(n)) || r;
    },
    wt = function (e, n) {
      return (e = e.split(",")).forEach(n) || e;
    },
    $e = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Be = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    ai = function (e, n) {
      var r = n.charAt(0),
        i = parseFloat(n.substr(2));
      return (
        (e = parseFloat(e)),
        r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
      );
    },
    Eg = function (e, n) {
      for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; );
      return i < r;
    },
    Qs = function () {
      var e = Yn.length,
        n = Yn.slice(0),
        r,
        i;
      for (Po = {}, Yn.length = 0, r = 0; r < e; r++)
        (i = n[r]),
          i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
    },
    Oo = function (e) {
      return !!(e._initted || e._startAt || e.add);
    },
    eu = function (e, n, r, i) {
      Yn.length && !et && Qs(),
        e.render(n, r, !!(et && n < 0 && Oo(e))),
        Yn.length && !et && Qs();
    },
    tu = function (e) {
      var n = parseFloat(e);
      return (n || n === 0) && (e + "").match(Gc).length < 2
        ? n
        : je(e)
        ? e.trim()
        : e;
    },
    nu = function (e) {
      return e;
    },
    zt = function (e, n) {
      for (var r in n) r in e || (e[r] = n[r]);
      return e;
    },
    wg = function (e) {
      return function (n, r) {
        for (var i in r)
          i in n || (i === "duration" && e) || i === "ease" || (n[i] = r[i]);
      };
    },
    oi = function (e, n) {
      for (var r in n) e[r] = n[r];
      return e;
    },
    ru = function t(e, n) {
      for (var r in n)
        r !== "__proto__" &&
          r !== "constructor" &&
          r !== "prototype" &&
          (e[r] = pn(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
      return e;
    },
    Js = function (e, n) {
      var r = {},
        i;
      for (i in e) i in n || (r[i] = e[i]);
      return r;
    },
    ji = function (e) {
      var n = e.parent || Te,
        r = e.keyframes ? wg(st(e.keyframes)) : zt;
      if (Et(e.inherit))
        for (; n; ) r(e, n.vars.defaults), (n = n.parent || n._dp);
      return e;
    },
    Cg = function (e, n) {
      for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; );
      return r < 0;
    },
    iu = function (e, n, r, i, s) {
      var a = e[i],
        o;
      if (s) for (o = n[s]; a && a[s] > o; ) a = a._prev;
      return (
        a
          ? ((n._next = a._next), (a._next = n))
          : ((n._next = e[r]), (e[r] = n)),
        n._next ? (n._next._prev = n) : (e[i] = n),
        (n._prev = a),
        (n.parent = n._dp = e),
        n
      );
    },
    ea = function (e, n, r, i) {
      r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
      var s = n._prev,
        a = n._next;
      s ? (s._next = a) : e[r] === n && (e[r] = a),
        a ? (a._prev = s) : e[i] === n && (e[i] = s),
        (n._next = n._prev = n.parent = null);
    },
    Gn = function (e, n) {
      e.parent &&
        (!n || e.parent.autoRemoveChildren) &&
        e.parent.remove &&
        e.parent.remove(e),
        (e._act = 0);
    },
    br = function (e, n) {
      if (e && (!n || n._end > e._dur || n._start < 0))
        for (var r = e; r; ) (r._dirty = 1), (r = r.parent);
      return e;
    },
    Pg = function (e) {
      for (var n = e.parent; n && n.parent; )
        (n._dirty = 1), n.totalDuration(), (n = n.parent);
      return e;
    },
    Ao = function (e, n, r, i) {
      return (
        e._startAt &&
        (et
          ? e._startAt.revert(Ks)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(n, !0, i))
      );
    },
    kg = function t(e) {
      return !e || (e._ts && t(e.parent));
    },
    su = function (e) {
      return e._repeat ? li(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    li = function (e, n) {
      var r = Math.floor((e = Be(e / n)));
      return e && r === e ? r - 1 : r;
    },
    ta = function (e, n) {
      return (
        (e - n._start) * n._ts +
        (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
      );
    },
    na = function (e) {
      return (e._end = Be(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || it) || 0)
      ));
    },
    ra = function (e, n) {
      var r = e._dp;
      return (
        r &&
          r.smoothChildTiming &&
          e._ts &&
          ((e._start = Be(
            r._time -
              (e._ts > 0
                ? n / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)
          )),
          na(e),
          r._dirty || br(r, e)),
        e
      );
    },
    au = function (e, n) {
      var r;
      if (
        ((n._time ||
          (!n._dur && n._initted) ||
          (n._start < e._time && (n._dur || !n.add))) &&
          ((r = ta(e.rawTime(), n)),
          (!n._dur || Ki(0, n.totalDuration(), r) - n._tTime > it) &&
            n.render(r, !0)),
        br(e, n)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (r = e; r._dp; )
            r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
        e._zTime = -1e-8;
      }
    },
    gn = function (e, n, r, i) {
      return (
        n.parent && Gn(n),
        (n._start = Be(
          (An(r) ? r : r || e !== Te ? Yt(e, r, n) : e._time) + n._delay
        )),
        (n._end = Be(
          n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)
        )),
        iu(e, n, "_first", "_last", e._sort ? "_start" : 0),
        Lo(n) || (e._recent = n),
        i || au(e, n),
        e._ts < 0 && ra(e, e._tTime),
        e
      );
    },
    ou = function (e, n) {
      return (
        (It.ScrollTrigger || wo("scrollTrigger", n)) &&
        It.ScrollTrigger.create(n, e)
      );
    },
    lu = function (e, n, r, i, s) {
      if ((Ho(e, n, s), !e._initted)) return 1;
      if (
        !r &&
        e._pt &&
        !et &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        Zc !== Nt.frame
      )
        return Yn.push(e), (e._lazy = [s, i]), 1;
    },
    Mg = function t(e) {
      var n = e.parent;
      return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
    },
    Lo = function (e) {
      var n = e.data;
      return n === "isFromStart" || n === "isStart";
    },
    $g = function (e, n, r, i) {
      var s = e.ratio,
        a =
          n < 0 ||
          (!n &&
            ((!e._start && Mg(e) && !(!e._initted && Lo(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !Lo(e))))
            ? 0
            : 1,
        o = e._rDelay,
        l = 0,
        c,
        u,
        f;
      if (
        (o &&
          e._repeat &&
          ((l = Ki(0, e._tDur, n)),
          (u = li(l, o)),
          e._yoyo && u & 1 && (a = 1 - a),
          u !== li(e._tTime, o) &&
            ((s = 1 - a),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        a !== s || et || i || e._zTime === it || (!n && e._zTime))
      ) {
        if (!e._initted && lu(e, n, i, r, l)) return;
        for (
          f = e._zTime,
            e._zTime = n || (r ? it : 0),
            r || (r = n && !f),
            e.ratio = a,
            e._from && (a = 1 - a),
            e._time = 0,
            e._tTime = l,
            c = e._pt;
          c;

        )
          c.r(a, c.d), (c = c._next);
        n < 0 && Ao(e, n, r, !0),
          e._onUpdate && !r && Rt(e, "onUpdate"),
          l && e._repeat && !r && e.parent && Rt(e, "onRepeat"),
          (n >= e._tDur || n < 0) &&
            e.ratio === a &&
            (a && Gn(e, 1),
            !r &&
              !et &&
              (Rt(e, a ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = n);
    },
    Og = function (e, n, r) {
      var i;
      if (r > n)
        for (i = e._first; i && i._start <= r; ) {
          if (i.data === "isPause" && i._start > n) return i;
          i = i._next;
        }
      else
        for (i = e._last; i && i._start >= r; ) {
          if (i.data === "isPause" && i._start < n) return i;
          i = i._prev;
        }
    },
    ci = function (e, n, r, i) {
      var s = e._repeat,
        a = Be(n) || 0,
        o = e._tTime / e._tDur;
      return (
        o && !i && (e._time *= a / e._dur),
        (e._dur = a),
        (e._tDur = s ? (s < 0 ? 1e10 : Be(a * (s + 1) + e._rDelay * s)) : a),
        o > 0 && !i && ra(e, (e._tTime = e._tDur * o)),
        e.parent && na(e),
        r || br(e.parent, e),
        e
      );
    },
    cu = function (e) {
      return e instanceof mt ? br(e) : ci(e, e._dur);
    },
    Ag = { _start: 0, endTime: Gi, totalDuration: Gi },
    Yt = function t(e, n, r) {
      var i = e.labels,
        s = e._recent || Ag,
        a = e.duration() >= hn ? s.endTime(!1) : e._dur,
        o,
        l,
        c;
      return je(n) && (isNaN(n) || n in i)
        ? ((l = n.charAt(0)),
          (c = n.substr(-1) === "%"),
          (o = n.indexOf("=")),
          l === "<" || l === ">"
            ? (o >= 0 && (n = n.replace(/=/, "")),
              (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
                (parseFloat(n.substr(1)) || 0) *
                  (c ? (o < 0 ? s : r).totalDuration() / 100 : 1))
            : o < 0
            ? (n in i || (i[n] = a), i[n])
            : ((l = parseFloat(n.charAt(o - 1) + n.substr(o + 1))),
              c && r && (l = (l / 100) * (st(r) ? r[0] : r).totalDuration()),
              o > 1 ? t(e, n.substr(0, o - 1), r) + l : a + l))
        : n == null
        ? a
        : +n;
    },
    Ui = function (e, n, r) {
      var i = An(n[1]),
        s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
        a = n[s],
        o,
        l;
      if ((i && (a.duration = n[1]), (a.parent = r), e)) {
        for (o = a, l = r; l && !("immediateRender" in o); )
          (o = l.vars.defaults || {}), (l = Et(l.vars.inherit) && l.parent);
        (a.immediateRender = Et(o.immediateRender)),
          e < 2 ? (a.runBackwards = 1) : (a.startAt = n[s - 1]);
      }
      return new qe(n[0], a, n[s + 1]);
    },
    jn = function (e, n) {
      return e || e === 0 ? n(e) : n;
    },
    Ki = function (e, n, r) {
      return r < e ? e : r > n ? n : r;
    },
    at = function (e, n) {
      return !je(e) || !(n = xg.exec(e)) ? "" : n[1];
    },
    Lg = function (e, n, r) {
      return jn(r, function (i) {
        return Ki(e, n, i);
      });
    },
    Io = [].slice,
    uu = function (e, n) {
      return (
        e &&
        pn(e) &&
        "length" in e &&
        ((!n && !e.length) || (e.length - 1 in e && pn(e[0]))) &&
        !e.nodeType &&
        e !== mn
      );
    },
    Ig = function (e, n, r) {
      return (
        r === void 0 && (r = []),
        e.forEach(function (i) {
          var s;
          return (je(i) && !n) || uu(i, 1)
            ? (s = r).push.apply(s, Gt(i))
            : r.push(i);
        }) || r
      );
    },
    Gt = function (e, n, r) {
      return xe && !n && xe.selector
        ? xe.selector(e)
        : je(e) && !r && (To || !fi())
        ? Io.call((n || Eo).querySelectorAll(e), 0)
        : st(e)
        ? Ig(e, r)
        : uu(e)
        ? Io.call(e, 0)
        : e
        ? [e]
        : [];
    },
    Do = function (e) {
      return (
        (e = Gt(e)[0] || Yi("Invalid scope") || {}),
        function (n) {
          var r = e.current || e.nativeElement || e;
          return Gt(
            n,
            r.querySelectorAll
              ? r
              : r === e
              ? Yi("Invalid scope") || Eo.createElement("div")
              : e
          );
        }
      );
    },
    fu = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    du = function (e) {
      if (ke(e)) return e;
      var n = pn(e) ? e : { each: e },
        r = xr(n.ease),
        i = n.from || 0,
        s = parseFloat(n.base) || 0,
        a = {},
        o = i > 0 && i < 1,
        l = isNaN(i) || o,
        c = n.axis,
        u = i,
        f = i;
      return (
        je(i)
          ? (u = f = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
          : !o && l && ((u = i[0]), (f = i[1])),
        function (d, h, m) {
          var p = (m || n).length,
            g = a[p],
            y,
            v,
            _,
            x,
            S,
            w,
            C,
            P,
            O;
          if (!g) {
            if (((O = n.grid === "auto" ? 0 : (n.grid || [1, hn])[1]), !O)) {
              for (
                C = -1e8;
                C < (C = m[O++].getBoundingClientRect().left) && O < p;

              );
              O < p && O--;
            }
            for (
              g = a[p] = [],
                y = l ? Math.min(O, p) * u - 0.5 : i % O,
                v = O === hn ? 0 : l ? (p * f) / O - 0.5 : (i / O) | 0,
                C = 0,
                P = hn,
                w = 0;
              w < p;
              w++
            )
              (_ = (w % O) - y),
                (x = v - ((w / O) | 0)),
                (g[w] = S =
                  c ? Math.abs(c === "y" ? x : _) : Vc(_ * _ + x * x)),
                S > C && (C = S),
                S < P && (P = S);
            i === "random" && fu(g),
              (g.max = C - P),
              (g.min = P),
              (g.v = p =
                (parseFloat(n.amount) ||
                  parseFloat(n.each) *
                    (O > p
                      ? p - 1
                      : c
                      ? c === "y"
                        ? p / O
                        : O
                      : Math.max(O, p / O)) ||
                  0) * (i === "edges" ? -1 : 1)),
              (g.b = p < 0 ? s - p : s),
              (g.u = at(n.amount || n.each) || 0),
              (r = r && p < 0 ? Eu(r) : r);
          }
          return (
            (p = (g[d] - g.min) / g.max || 0),
            Be(g.b + (r ? r(p) : p) * g.v) + g.u
          );
        }
      );
    },
    zo = function (e) {
      var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (r) {
        var i = Be(Math.round(parseFloat(r) / e) * e * n);
        return (i - (i % 1)) / n + (An(r) ? 0 : at(r));
      };
    },
    hu = function (e, n) {
      var r = st(e),
        i,
        s;
      return (
        !r &&
          pn(e) &&
          ((i = r = e.radius || hn),
          e.values
            ? ((e = Gt(e.values)), (s = !An(e[0])) && (i *= i))
            : (e = zo(e.increment))),
        jn(
          n,
          r
            ? ke(e)
              ? function (a) {
                  return (s = e(a)), Math.abs(s - a) <= i ? s : a;
                }
              : function (a) {
                  for (
                    var o = parseFloat(s ? a.x : a),
                      l = parseFloat(s ? a.y : 0),
                      c = hn,
                      u = 0,
                      f = e.length,
                      d,
                      h;
                    f--;

                  )
                    s
                      ? ((d = e[f].x - o),
                        (h = e[f].y - l),
                        (d = d * d + h * h))
                      : (d = Math.abs(e[f] - o)),
                      d < c && ((c = d), (u = f));
                  return (
                    (u = !i || c <= i ? e[u] : a),
                    s || u === a || An(a) ? u : u + at(a)
                  );
                }
            : zo(e)
        )
      );
    },
    pu = function (e, n, r, i) {
      return jn(st(e) ? !n : r === !0 ? !!(r = 0) : !i, function () {
        return st(e)
          ? e[~~(Math.random() * e.length)]
          : (r = r || 1e-5) &&
              (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (e - r / 2 + Math.random() * (n - e + r * 0.99)) / r
                ) *
                  r *
                  i
              ) / i;
      });
    },
    Dg = function () {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
      return function (i) {
        return n.reduce(function (s, a) {
          return a(s);
        }, i);
      };
    },
    zg = function (e, n) {
      return function (r) {
        return e(parseFloat(r)) + (n || at(r));
      };
    },
    Rg = function (e, n, r) {
      return gu(e, n, 0, 1, r);
    },
    mu = function (e, n, r) {
      return jn(r, function (i) {
        return e[~~n(i)];
      });
    },
    Ng = function t(e, n, r) {
      var i = n - e;
      return st(e)
        ? mu(e, t(0, e.length), n)
        : jn(r, function (s) {
            return ((i + ((s - e) % i)) % i) + e;
          });
    },
    Fg = function t(e, n, r) {
      var i = n - e,
        s = i * 2;
      return st(e)
        ? mu(e, t(0, e.length - 1), n)
        : jn(r, function (a) {
            return (a = (s + ((a - e) % s)) % s || 0), e + (a > i ? s - a : a);
          });
    },
    Zi = function (e) {
      for (var n = 0, r = "", i, s, a, o; ~(i = e.indexOf("random(", n)); )
        (a = e.indexOf(")", i)),
          (o = e.charAt(i + 7) === "["),
          (s = e.substr(i + 7, a - i - 7).match(o ? Gc : xo)),
          (r +=
            e.substr(n, i - n) +
            pu(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5)),
          (n = a + 1);
      return r + e.substr(n, e.length - n);
    },
    gu = function (e, n, r, i, s) {
      var a = n - e,
        o = i - r;
      return jn(s, function (l) {
        return r + (((l - e) / a) * o || 0);
      });
    },
    Bg = function t(e, n, r, i) {
      var s = isNaN(e + n)
        ? 0
        : function (h) {
            return (1 - h) * e + h * n;
          };
      if (!s) {
        var a = je(e),
          o = {},
          l,
          c,
          u,
          f,
          d;
        if ((r === !0 && (i = 1) && (r = null), a))
          (e = { p: e }), (n = { p: n });
        else if (st(e) && !st(n)) {
          for (u = [], f = e.length, d = f - 2, c = 1; c < f; c++)
            u.push(t(e[c - 1], e[c]));
          f--,
            (s = function (m) {
              m *= f;
              var p = Math.min(d, ~~m);
              return u[p](m - p);
            }),
            (r = n);
        } else i || (e = oi(st(e) ? [] : {}, e));
        if (!u) {
          for (l in n) Bo.call(o, e, l, "get", n[l]);
          s = function (m) {
            return Xo(m, o) || (a ? e.p : e);
          };
        }
      }
      return jn(r, s);
    },
    vu = function (e, n, r) {
      var i = e.labels,
        s = hn,
        a,
        o,
        l;
      for (a in i)
        (o = i[a] - n),
          o < 0 == !!r && o && s > (o = Math.abs(o)) && ((l = a), (s = o));
      return l;
    },
    Rt = function (e, n, r) {
      var i = e.vars,
        s = i[n],
        a = xe,
        o = e._ctx,
        l,
        c,
        u;
      if (s)
        return (
          (l = i[n + "Params"]),
          (c = i.callbackScope || e),
          r && Yn.length && Qs(),
          o && (xe = o),
          (u = l ? s.apply(c, l) : s.call(c)),
          (xe = a),
          u
        );
    },
    Qi = function (e) {
      return (
        Gn(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!et),
        e.progress() < 1 && Rt(e, "onInterrupt"),
        e
      );
    },
    ui,
    yu = [],
    _u = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), bo() || e.headless)) {
          var n = e.name,
            r = ke(e),
            i =
              n && !r && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            s = {
              init: Gi,
              render: Xo,
              add: Bo,
              kill: nv,
              modifier: tv,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: Wo,
              aliases: {},
              register: 0,
            };
          if ((fi(), e !== i)) {
            if (Dt[n]) return;
            zt(i, zt(Js(e, s), a)),
              oi(i.prototype, oi(s, Js(e, a))),
              (Dt[(i.prop = n)] = i),
              e.targetTest && (Zs.push(i), (Co[n] = 1)),
              (n =
                (n === "css"
                  ? "CSS"
                  : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin");
          }
          Kc(n, i), e.register && e.register(Pt, i, Ct);
        } else yu.push(e);
    },
    ve = 255,
    Ji = {
      aqua: [0, ve, ve],
      lime: [0, ve, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, ve],
      navy: [0, 0, 128],
      white: [ve, ve, ve],
      olive: [128, 128, 0],
      yellow: [ve, ve, 0],
      orange: [ve, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [ve, 0, 0],
      pink: [ve, 192, 203],
      cyan: [0, ve, ve],
      transparent: [ve, ve, ve, 0],
    },
    Ro = function (e, n, r) {
      return (
        (e += e < 0 ? 1 : e > 1 ? -1 : 0),
        ((e * 6 < 1
          ? n + (r - n) * e * 6
          : e < 0.5
          ? r
          : e * 3 < 2
          ? n + (r - n) * (2 / 3 - e) * 6
          : n) *
          ve +
          0.5) |
          0
      );
    },
    bu = function (e, n, r) {
      var i = e ? (An(e) ? [e >> 16, (e >> 8) & ve, e & ve] : 0) : Ji.black,
        s,
        a,
        o,
        l,
        c,
        u,
        f,
        d,
        h,
        m;
      if (!i) {
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Ji[e]))
          i = Ji[e];
        else if (e.charAt(0) === "#") {
          if (
            (e.length < 6 &&
              ((s = e.charAt(1)),
              (a = e.charAt(2)),
              (o = e.charAt(3)),
              (e =
                "#" +
                s +
                s +
                a +
                a +
                o +
                o +
                (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
            e.length === 9)
          )
            return (
              (i = parseInt(e.substr(1, 6), 16)),
              [i >> 16, (i >> 8) & ve, i & ve, parseInt(e.substr(7), 16) / 255]
            );
          (e = parseInt(e.substr(1), 16)),
            (i = [e >> 16, (e >> 8) & ve, e & ve]);
        } else if (e.substr(0, 3) === "hsl") {
          if (((i = m = e.match(xo)), !n))
            (l = (+i[0] % 360) / 360),
              (c = +i[1] / 100),
              (u = +i[2] / 100),
              (a = u <= 0.5 ? u * (c + 1) : u + c - u * c),
              (s = u * 2 - a),
              i.length > 3 && (i[3] *= 1),
              (i[0] = Ro(l + 1 / 3, s, a)),
              (i[1] = Ro(l, s, a)),
              (i[2] = Ro(l - 1 / 3, s, a));
          else if (~e.indexOf("="))
            return (i = e.match(Xc)), r && i.length < 4 && (i[3] = 1), i;
        } else i = e.match(xo) || Ji.transparent;
        i = i.map(Number);
      }
      return (
        n &&
          !m &&
          ((s = i[0] / ve),
          (a = i[1] / ve),
          (o = i[2] / ve),
          (f = Math.max(s, a, o)),
          (d = Math.min(s, a, o)),
          (u = (f + d) / 2),
          f === d
            ? (l = c = 0)
            : ((h = f - d),
              (c = u > 0.5 ? h / (2 - f - d) : h / (f + d)),
              (l =
                f === s
                  ? (a - o) / h + (a < o ? 6 : 0)
                  : f === a
                  ? (o - s) / h + 2
                  : (s - a) / h + 4),
              (l *= 60)),
          (i[0] = ~~(l + 0.5)),
          (i[1] = ~~(c * 100 + 0.5)),
          (i[2] = ~~(u * 100 + 0.5))),
        r && i.length < 4 && (i[3] = 1),
        i
      );
    },
    xu = function (e) {
      var n = [],
        r = [],
        i = -1;
      return (
        e.split(Un).forEach(function (s) {
          var a = s.match(si) || [];
          n.push.apply(n, a), r.push((i += a.length + 1));
        }),
        (n.c = r),
        n
      );
    },
    Su = function (e, n, r) {
      var i = "",
        s = (e + i).match(Un),
        a = n ? "hsla(" : "rgba(",
        o = 0,
        l,
        c,
        u,
        f;
      if (!s) return e;
      if (
        ((s = s.map(function (d) {
          return (
            (d = bu(d, n, 1)) &&
            a +
              (n
                ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3]
                : d.join(",")) +
              ")"
          );
        })),
        r && ((u = xu(e)), (l = r.c), l.join(i) !== u.c.join(i)))
      )
        for (c = e.replace(Un, "1").split(si), f = c.length - 1; o < f; o++)
          i +=
            c[o] +
            (~l.indexOf(o)
              ? s.shift() || a + "0,0,0,0)"
              : (u.length ? u : s.length ? s : r).shift());
      if (!c)
        for (c = e.split(Un), f = c.length - 1; o < f; o++) i += c[o] + s[o];
      return i + c[f];
    },
    Un = (function () {
      var t =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in Ji) t += "|" + e + "\\b";
      return new RegExp(t + ")", "gi");
    })(),
    qg = /hsl[a]?\(/,
    Tu = function (e) {
      var n = e.join(" "),
        r;
      if (((Un.lastIndex = 0), Un.test(n)))
        return (
          (r = qg.test(n)),
          (e[1] = Su(e[1], r)),
          (e[0] = Su(e[0], r, xu(e[1]))),
          !0
        );
    },
    es,
    Nt = (function () {
      var t = Date.now,
        e = 500,
        n = 33,
        r = t(),
        i = r,
        s = 1e3 / 240,
        a = s,
        o = [],
        l,
        c,
        u,
        f,
        d,
        h,
        m = function p(g) {
          var y = t() - i,
            v = g === !0,
            _,
            x,
            S,
            w;
          if (
            ((y > e || y < 0) && (r += y - n),
            (i += y),
            (S = i - r),
            (_ = S - a),
            (_ > 0 || v) &&
              ((w = ++f.frame),
              (d = S - f.time * 1e3),
              (f.time = S = S / 1e3),
              (a += _ + (_ >= s ? 4 : s - _)),
              (x = 1)),
            v || (l = c(p)),
            x)
          )
            for (h = 0; h < o.length; h++) o[h](S, d, w, g);
        };
      return (
        (f = {
          time: 0,
          frame: 0,
          tick: function () {
            m(!0);
          },
          deltaRatio: function (g) {
            return d / (1e3 / (g || 60));
          },
          wake: function () {
            jc &&
              (!To &&
                bo() &&
                ((mn = To = window),
                (Eo = mn.document || {}),
                (It.gsap = Pt),
                (mn.gsapVersions || (mn.gsapVersions = [])).push(Pt.version),
                Uc(Us || mn.GreenSockGlobals || (!mn.gsap && mn) || {}),
                yu.forEach(_u)),
              (u =
                typeof requestAnimationFrame != "undefined" &&
                requestAnimationFrame),
              l && f.sleep(),
              (c =
                u ||
                function (g) {
                  return setTimeout(g, (a - f.time * 1e3 + 1) | 0);
                }),
              (es = 1),
              m(2));
          },
          sleep: function () {
            (u ? cancelAnimationFrame : clearTimeout)(l), (es = 0), (c = Gi);
          },
          lagSmoothing: function (g, y) {
            (e = g || 1 / 0), (n = Math.min(y || 33, e));
          },
          fps: function (g) {
            (s = 1e3 / (g || 240)), (a = f.time * 1e3 + s);
          },
          add: function (g, y, v) {
            var _ = y
              ? function (x, S, w, C) {
                  g(x, S, w, C), f.remove(_);
                }
              : g;
            return f.remove(g), o[v ? "unshift" : "push"](_), fi(), _;
          },
          remove: function (g, y) {
            ~(y = o.indexOf(g)) && o.splice(y, 1) && h >= y && h--;
          },
          _listeners: o,
        }),
        f
      );
    })(),
    fi = function () {
      return !es && Nt.wake();
    },
    oe = {},
    Hg = /^[\d.\-M][\d.\-,\s]/,
    Vg = /["']/g,
    Wg = function (e) {
      for (
        var n = {},
          r = e.substr(1, e.length - 3).split(":"),
          i = r[0],
          s = 1,
          a = r.length,
          o,
          l,
          c;
        s < a;
        s++
      )
        (l = r[s]),
          (o = s !== a - 1 ? l.lastIndexOf(",") : l.length),
          (c = l.substr(0, o)),
          (n[i] = isNaN(c) ? c.replace(Vg, "").trim() : +c),
          (i = l.substr(o + 1).trim());
      return n;
    },
    Xg = function (e) {
      var n = e.indexOf("(") + 1,
        r = e.indexOf(")"),
        i = e.indexOf("(", n);
      return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r);
    },
    Yg = function (e) {
      var n = (e + "").split("("),
        r = oe[n[0]];
      return r && n.length > 1 && r.config
        ? r.config.apply(
            null,
            ~e.indexOf("{") ? [Wg(n[1])] : Xg(e).split(",").map(tu)
          )
        : oe._CE && Hg.test(e)
        ? oe._CE("", e)
        : r;
    },
    Eu = function (e) {
      return function (n) {
        return 1 - e(1 - n);
      };
    },
    wu = function t(e, n) {
      for (var r = e._first, i; r; )
        r instanceof mt
          ? t(r, n)
          : r.vars.yoyoEase &&
            (!r._yoyo || !r._repeat) &&
            r._yoyo !== n &&
            (r.timeline
              ? t(r.timeline, n)
              : ((i = r._ease),
                (r._ease = r._yEase),
                (r._yEase = i),
                (r._yoyo = n))),
          (r = r._next);
    },
    xr = function (e, n) {
      return (e && (ke(e) ? e : oe[e] || Yg(e))) || n;
    },
    Sr = function (e, n, r, i) {
      r === void 0 &&
        (r = function (l) {
          return 1 - n(1 - l);
        }),
        i === void 0 &&
          (i = function (l) {
            return l < 0.5 ? n(l * 2) / 2 : 1 - n((1 - l) * 2) / 2;
          });
      var s = { easeIn: n, easeOut: r, easeInOut: i },
        a;
      return (
        wt(e, function (o) {
          (oe[o] = It[o] = s), (oe[(a = o.toLowerCase())] = r);
          for (var l in s)
            oe[
              a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = oe[o + "." + l] = s[l];
        }),
        s
      );
    },
    Cu = function (e) {
      return function (n) {
        return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2;
      };
    },
    No = function t(e, n, r) {
      var i = n >= 1 ? n : 1,
        s = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
        a = (s / yo) * (Math.asin(1 / i) || 0),
        o = function (u) {
          return u === 1 ? 1 : i * Math.pow(2, -10 * u) * bg((u - a) * s) + 1;
        },
        l =
          e === "out"
            ? o
            : e === "in"
            ? function (c) {
                return 1 - o(1 - c);
              }
            : Cu(o);
      return (
        (s = yo / s),
        (l.config = function (c, u) {
          return t(e, c, u);
        }),
        l
      );
    },
    Fo = function t(e, n) {
      n === void 0 && (n = 1.70158);
      var r = function (a) {
          return a ? --a * a * ((n + 1) * a + n) + 1 : 0;
        },
        i =
          e === "out"
            ? r
            : e === "in"
            ? function (s) {
                return 1 - r(1 - s);
              }
            : Cu(r);
      return (
        (i.config = function (s) {
          return t(e, s);
        }),
        i
      );
    };
  wt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var n = e < 5 ? e + 1 : e;
    Sr(
      t + ",Power" + (n - 1),
      e
        ? function (r) {
            return Math.pow(r, n);
          }
        : function (r) {
            return r;
          },
      function (r) {
        return 1 - Math.pow(1 - r, n);
      },
      function (r) {
        return r < 0.5
          ? Math.pow(r * 2, n) / 2
          : 1 - Math.pow((1 - r) * 2, n) / 2;
      }
    );
  }),
    (oe.Linear.easeNone = oe.none = oe.Linear.easeIn),
    Sr("Elastic", No("in"), No("out"), No()),
    (function (t, e) {
      var n = 1 / e,
        r = 2 * n,
        i = 2.5 * n,
        s = function (o) {
          return o < n
            ? t * o * o
            : o < r
            ? t * Math.pow(o - 1.5 / e, 2) + 0.75
            : o < i
            ? t * (o -= 2.25 / e) * o + 0.9375
            : t * Math.pow(o - 2.625 / e, 2) + 0.984375;
        };
      Sr(
        "Bounce",
        function (a) {
          return 1 - s(1 - a);
        },
        s
      );
    })(7.5625, 2.75),
    Sr("Expo", function (t) {
      return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t);
    }),
    Sr("Circ", function (t) {
      return -(Vc(1 - t * t) - 1);
    }),
    Sr("Sine", function (t) {
      return t === 1 ? 1 : -_g(t * vg) + 1;
    }),
    Sr("Back", Fo("in"), Fo("out"), Fo()),
    (oe.SteppedEase =
      oe.steps =
      It.SteppedEase =
        {
          config: function (e, n) {
            e === void 0 && (e = 1);
            var r = 1 / e,
              i = e + (n ? 0 : 1),
              s = n ? 1 : 0,
              a = 1 - it;
            return function (o) {
              return (((i * Ki(0, a, o)) | 0) + s) * r;
            };
          },
        }),
    (ii.ease = oe["quad.out"]),
    wt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (Mo += t + "," + t + "Params,");
      }
    );
  var Pu = function (e, n) {
      (this.id = yg++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = n),
        (this.get = n ? n.get : Jc),
        (this.set = n ? n.getSetter : Wo);
    },
    ts = (function () {
      function t(n) {
        (this.vars = n),
          (this._delay = +n.delay || 0),
          (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
            ((this._rDelay = n.repeatDelay || 0),
            (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
          (this._ts = 1),
          ci(this, +n.duration, 1, 1),
          (this.data = n.data),
          xe && ((this._ctx = xe), xe.data.push(this)),
          es || Nt.wake();
      }
      var e = t.prototype;
      return (
        (e.delay = function (r) {
          return r || r === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + r - this._delay),
              (this._delay = r),
              this)
            : this._delay;
        }),
        (e.duration = function (r) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (r) {
          return arguments.length
            ? ((this._dirty = 0),
              ci(
                this,
                this._repeat < 0
                  ? r
                  : (r - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (r, i) {
          if ((fi(), !arguments.length)) return this._tTime;
          var s = this._dp;
          if (s && s.smoothChildTiming && this._ts) {
            for (
              ra(this, r), !s._dp || s.parent || au(s, this);
              s && s.parent;

            )
              s.parent._time !==
                s._start +
                  (s._ts >= 0
                    ? s._tTime / s._ts
                    : (s.totalDuration() - s._tTime) / -s._ts) &&
                s.totalTime(s._tTime, !0),
                (s = s.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && r < this._tDur) ||
                (this._ts < 0 && r > 0) ||
                (!this._tDur && !r)) &&
              gn(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== r ||
              (!this._dur && !i) ||
              (this._initted && Math.abs(this._zTime) === it) ||
              (!r && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = r), eu(this, r, i)),
            this
          );
        }),
        (e.time = function (r, i) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), r + su(this)) %
                  (this._dur + this._rDelay) || (r ? this._dur : 0),
                i
              )
            : this._time;
        }),
        (e.totalProgress = function (r, i) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * r, i)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
            ? 1
            : 0;
        }),
        (e.progress = function (r, i) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
                  su(this),
                i
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (e.iteration = function (r, i) {
          var s = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (r - 1) * s, i)
            : this._repeat
            ? li(this._tTime, s) + 1
            : 1;
        }),
        (e.timeScale = function (r, i) {
          if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
          if (this._rts === r) return this;
          var s =
            this.parent && this._ts ? ta(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +r || 0),
            (this._ts = this._ps || r === -1e-8 ? 0 : this._rts),
            this.totalTime(
              Ki(-Math.abs(this._delay), this.totalDuration(), s),
              i !== !1
            ),
            na(this),
            Pg(this)
          );
        }),
        (e.paused = function (r) {
          return arguments.length
            ? (this._ps !== r &&
                ((this._ps = r),
                r
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (fi(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== it &&
                        (this._tTime -= it)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (r) {
          if (arguments.length) {
            this._start = r;
            var i = this.parent || this._dp;
            return (
              i && (i._sort || !this.parent) && gn(i, this, r - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (r) {
          return (
            this._start +
            (Et(r) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (e.rawTime = function (r) {
          var i = this.parent || this._dp;
          return i
            ? r &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? ta(i.rawTime(r), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (r) {
          r === void 0 && (r = Tg);
          var i = et;
          return (
            (et = r),
            Oo(this) &&
              (this.timeline && this.timeline.revert(r),
              this.totalTime(-0.01, r.suppressEvents)),
            this.data !== "nested" && r.kill !== !1 && this.kill(),
            (et = i),
            this
          );
        }),
        (e.globalTime = function (r) {
          for (var i = this, s = arguments.length ? r : i.rawTime(); i; )
            (s = i._start + s / (Math.abs(i._ts) || 1)), (i = i._dp);
          return !this.parent && this._sat ? this._sat.globalTime(r) : s;
        }),
        (e.repeat = function (r) {
          return arguments.length
            ? ((this._repeat = r === 1 / 0 ? -2 : r), cu(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (r) {
          if (arguments.length) {
            var i = this._time;
            return (this._rDelay = r), cu(this), i ? this.time(i) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (r) {
          return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
        }),
        (e.seek = function (r, i) {
          return this.totalTime(Yt(this, r), Et(i));
        }),
        (e.restart = function (r, i) {
          return (
            this.play().totalTime(r ? -this._delay : 0, Et(i)),
            this._dur || (this._zTime = -1e-8),
            this
          );
        }),
        (e.play = function (r, i) {
          return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (r, i) {
          return (
            r != null && this.seek(r || this.totalDuration(), i),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (r, i) {
          return r != null && this.seek(r, i), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (r) {
          return arguments.length
            ? (!!r !== this.reversed() &&
                this.timeScale(-this._rts || (r ? -1e-8 : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
        }),
        (e.isActive = function () {
          var r = this.parent || this._dp,
            i = this._start,
            s;
          return !!(
            !r ||
            (this._ts &&
              this._initted &&
              r.isActive() &&
              (s = r.rawTime(!0)) >= i &&
              s < this.endTime(!0) - it)
          );
        }),
        (e.eventCallback = function (r, i, s) {
          var a = this.vars;
          return arguments.length > 1
            ? (i
                ? ((a[r] = i),
                  s && (a[r + "Params"] = s),
                  r === "onUpdate" && (this._onUpdate = i))
                : delete a[r],
              this)
            : a[r];
        }),
        (e.then = function (r) {
          var i = this;
          return new Promise(function (s) {
            var a = ke(r) ? r : nu,
              o = function () {
                var c = i.then;
                (i.then = null),
                  ke(a) && (a = a(i)) && (a.then || a === i) && (i.then = c),
                  s(a),
                  (i.then = c);
              };
            (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
            (!i._tTime && i._ts < 0)
              ? o()
              : (i._prom = o);
          });
        }),
        (e.kill = function () {
          Qi(this);
        }),
        t
      );
    })();
  zt(ts.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var mt = (function (t) {
    Hc(e, t);
    function e(r, i) {
      var s;
      return (
        r === void 0 && (r = {}),
        (s = t.call(this, r) || this),
        (s.labels = {}),
        (s.smoothChildTiming = !!r.smoothChildTiming),
        (s.autoRemoveChildren = !!r.autoRemoveChildren),
        (s._sort = Et(r.sortChildren)),
        Te && gn(r.parent || Te, On(s), i),
        r.reversed && s.reverse(),
        r.paused && s.paused(!0),
        r.scrollTrigger && ou(On(s), r.scrollTrigger),
        s
      );
    }
    var n = e.prototype;
    return (
      (n.to = function (i, s, a) {
        return Ui(0, arguments, this), this;
      }),
      (n.from = function (i, s, a) {
        return Ui(1, arguments, this), this;
      }),
      (n.fromTo = function (i, s, a, o) {
        return Ui(2, arguments, this), this;
      }),
      (n.set = function (i, s, a) {
        return (
          (s.duration = 0),
          (s.parent = this),
          ji(s).repeatDelay || (s.repeat = 0),
          (s.immediateRender = !!s.immediateRender),
          new qe(i, s, Yt(this, a), 1),
          this
        );
      }),
      (n.call = function (i, s, a) {
        return gn(this, qe.delayedCall(0, i, s), a);
      }),
      (n.staggerTo = function (i, s, a, o, l, c, u) {
        return (
          (a.duration = s),
          (a.stagger = a.stagger || o),
          (a.onComplete = c),
          (a.onCompleteParams = u),
          (a.parent = this),
          new qe(i, a, Yt(this, l)),
          this
        );
      }),
      (n.staggerFrom = function (i, s, a, o, l, c, u) {
        return (
          (a.runBackwards = 1),
          (ji(a).immediateRender = Et(a.immediateRender)),
          this.staggerTo(i, s, a, o, l, c, u)
        );
      }),
      (n.staggerFromTo = function (i, s, a, o, l, c, u, f) {
        return (
          (o.startAt = a),
          (ji(o).immediateRender = Et(o.immediateRender)),
          this.staggerTo(i, s, o, l, c, u, f)
        );
      }),
      (n.render = function (i, s, a) {
        var o = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          c = this._dur,
          u = i <= 0 ? 0 : Be(i),
          f = this._zTime < 0 != i < 0 && (this._initted || !c),
          d,
          h,
          m,
          p,
          g,
          y,
          v,
          _,
          x,
          S,
          w,
          C;
        if (
          (this !== Te && u > l && i >= 0 && (u = l),
          u !== this._tTime || a || f)
        ) {
          if (
            (o !== this._time &&
              c &&
              ((u += this._time - o), (i += this._time - o)),
            (d = u),
            (x = this._start),
            (_ = this._ts),
            (y = !_),
            f && (c || (o = this._zTime), (i || !s) && (this._zTime = i)),
            this._repeat)
          ) {
            if (
              ((w = this._yoyo),
              (g = c + this._rDelay),
              this._repeat < -1 && i < 0)
            )
              return this.totalTime(g * 100 + i, s, a);
            if (
              ((d = Be(u % g)),
              u === l
                ? ((p = this._repeat), (d = c))
                : ((S = Be(u / g)),
                  (p = ~~S),
                  p && p === S && ((d = c), p--),
                  d > c && (d = c)),
              (S = li(this._tTime, g)),
              !o &&
                this._tTime &&
                S !== p &&
                this._tTime - S * g - this._dur <= 0 &&
                (S = p),
              w && p & 1 && ((d = c - d), (C = 1)),
              p !== S && !this._lock)
            ) {
              var P = w && S & 1,
                O = P === (w && p & 1);
              if (
                (p < S && (P = !P),
                (o = P ? 0 : u % c ? c : u),
                (this._lock = 1),
                (this.render(o || (C ? 0 : Be(p * g)), s, !c)._lock = 0),
                (this._tTime = u),
                !s && this.parent && Rt(this, "onRepeat"),
                this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1),
                (o && o !== this._time) ||
                  y !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((c = this._dur),
                (l = this._tDur),
                O &&
                  ((this._lock = 2),
                  (o = P ? c : -1e-4),
                  this.render(o, !0),
                  this.vars.repeatRefresh && !C && this.invalidate()),
                (this._lock = 0),
                !this._ts && !y)
              )
                return this;
              wu(this, C);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((v = Og(this, Be(o), Be(d))), v && (u -= d - (d = v._start))),
            (this._tTime = u),
            (this._time = d),
            (this._act = !_),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = i),
              (o = 0)),
            !o && u && !s && !S && (Rt(this, "onStart"), this._tTime !== u))
          )
            return this;
          if (d >= o && i >= 0)
            for (h = this._first; h; ) {
              if (
                ((m = h._next), (h._act || d >= h._start) && h._ts && v !== h)
              ) {
                if (h.parent !== this) return this.render(i, s, a);
                if (
                  (h.render(
                    h._ts > 0
                      ? (d - h._start) * h._ts
                      : (h._dirty ? h.totalDuration() : h._tDur) +
                          (d - h._start) * h._ts,
                    s,
                    a
                  ),
                  d !== this._time || (!this._ts && !y))
                ) {
                  (v = 0), m && (u += this._zTime = -1e-8);
                  break;
                }
              }
              h = m;
            }
          else {
            h = this._last;
            for (var T = i < 0 ? i : d; h; ) {
              if (
                ((m = h._prev), (h._act || T <= h._end) && h._ts && v !== h)
              ) {
                if (h.parent !== this) return this.render(i, s, a);
                if (
                  (h.render(
                    h._ts > 0
                      ? (T - h._start) * h._ts
                      : (h._dirty ? h.totalDuration() : h._tDur) +
                          (T - h._start) * h._ts,
                    s,
                    a || (et && Oo(h))
                  ),
                  d !== this._time || (!this._ts && !y))
                ) {
                  (v = 0), m && (u += this._zTime = T ? -1e-8 : it);
                  break;
                }
              }
              h = m;
            }
          }
          if (
            v &&
            !s &&
            (this.pause(),
            (v.render(d >= o ? 0 : -1e-8)._zTime = d >= o ? 1 : -1),
            this._ts)
          )
            return (this._start = x), na(this), this.render(i, s, a);
          this._onUpdate && !s && Rt(this, "onUpdate", !0),
            ((u === l && this._tTime >= this.totalDuration()) || (!u && o)) &&
              (x === this._start || Math.abs(_) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((i || !c) &&
                  ((u === l && this._ts > 0) || (!u && this._ts < 0)) &&
                  Gn(this, 1),
                !s &&
                  !(i < 0 && !o) &&
                  (u || o || !l) &&
                  (Rt(
                    this,
                    u === l && i >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(u < l && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (n.add = function (i, s) {
        var a = this;
        if ((An(s) || (s = Yt(this, s, i)), !(i instanceof ts))) {
          if (st(i))
            return (
              i.forEach(function (o) {
                return a.add(o, s);
              }),
              this
            );
          if (je(i)) return this.addLabel(i, s);
          if (ke(i)) i = qe.delayedCall(0, i);
          else return this;
        }
        return this !== i ? gn(this, i, s) : this;
      }),
      (n.getChildren = function (i, s, a, o) {
        i === void 0 && (i = !0),
          s === void 0 && (s = !0),
          a === void 0 && (a = !0),
          o === void 0 && (o = -1e8);
        for (var l = [], c = this._first; c; )
          c._start >= o &&
            (c instanceof qe
              ? s && l.push(c)
              : (a && l.push(c),
                i && l.push.apply(l, c.getChildren(!0, s, a)))),
            (c = c._next);
        return l;
      }),
      (n.getById = function (i) {
        for (var s = this.getChildren(1, 1, 1), a = s.length; a--; )
          if (s[a].vars.id === i) return s[a];
      }),
      (n.remove = function (i) {
        return je(i)
          ? this.removeLabel(i)
          : ke(i)
          ? this.killTweensOf(i)
          : (i.parent === this && ea(this, i),
            i === this._recent && (this._recent = this._last),
            br(this));
      }),
      (n.totalTime = function (i, s) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Be(
                Nt.time -
                  (this._ts > 0
                    ? i / this._ts
                    : (this.totalDuration() - i) / -this._ts)
              )),
            t.prototype.totalTime.call(this, i, s),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (n.addLabel = function (i, s) {
        return (this.labels[i] = Yt(this, s)), this;
      }),
      (n.removeLabel = function (i) {
        return delete this.labels[i], this;
      }),
      (n.addPause = function (i, s, a) {
        var o = qe.delayedCall(0, s || Gi, a);
        return (
          (o.data = "isPause"), (this._hasPause = 1), gn(this, o, Yt(this, i))
        );
      }),
      (n.removePause = function (i) {
        var s = this._first;
        for (i = Yt(this, i); s; )
          s._start === i && s.data === "isPause" && Gn(s), (s = s._next);
      }),
      (n.killTweensOf = function (i, s, a) {
        for (var o = this.getTweensOf(i, a), l = o.length; l--; )
          Kn !== o[l] && o[l].kill(i, s);
        return this;
      }),
      (n.getTweensOf = function (i, s) {
        for (var a = [], o = Gt(i), l = this._first, c = An(s), u; l; )
          l instanceof qe
            ? Eg(l._targets, o) &&
              (c
                ? (!Kn || (l._initted && l._ts)) &&
                  l.globalTime(0) <= s &&
                  l.globalTime(l.totalDuration()) > s
                : !s || l.isActive()) &&
              a.push(l)
            : (u = l.getTweensOf(o, s)).length && a.push.apply(a, u),
            (l = l._next);
        return a;
      }),
      (n.tweenTo = function (i, s) {
        s = s || {};
        var a = this,
          o = Yt(a, i),
          l = s,
          c = l.startAt,
          u = l.onStart,
          f = l.onStartParams,
          d = l.immediateRender,
          h,
          m = qe.to(
            a,
            zt(
              {
                ease: s.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration:
                  s.duration ||
                  Math.abs(
                    (o - (c && "time" in c ? c.time : a._time)) / a.timeScale()
                  ) ||
                  it,
                onStart: function () {
                  if ((a.pause(), !h)) {
                    var g =
                      s.duration ||
                      Math.abs(
                        (o - (c && "time" in c ? c.time : a._time)) /
                          a.timeScale()
                      );
                    m._dur !== g && ci(m, g, 0, 1).render(m._time, !0, !0),
                      (h = 1);
                  }
                  u && u.apply(m, f || []);
                },
              },
              s
            )
          );
        return d ? m.render(0) : m;
      }),
      (n.tweenFromTo = function (i, s, a) {
        return this.tweenTo(s, zt({ startAt: { time: Yt(this, i) } }, a));
      }),
      (n.recent = function () {
        return this._recent;
      }),
      (n.nextLabel = function (i) {
        return i === void 0 && (i = this._time), vu(this, Yt(this, i));
      }),
      (n.previousLabel = function (i) {
        return i === void 0 && (i = this._time), vu(this, Yt(this, i), 1);
      }),
      (n.currentLabel = function (i) {
        return arguments.length
          ? this.seek(i, !0)
          : this.previousLabel(this._time + it);
      }),
      (n.shiftChildren = function (i, s, a) {
        a === void 0 && (a = 0);
        for (var o = this._first, l = this.labels, c; o; )
          o._start >= a && ((o._start += i), (o._end += i)), (o = o._next);
        if (s) for (c in l) l[c] >= a && (l[c] += i);
        return br(this);
      }),
      (n.invalidate = function (i) {
        var s = this._first;
        for (this._lock = 0; s; ) s.invalidate(i), (s = s._next);
        return t.prototype.invalidate.call(this, i);
      }),
      (n.clear = function (i) {
        i === void 0 && (i = !0);
        for (var s = this._first, a; s; )
          (a = s._next), this.remove(s), (s = a);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          i && (this.labels = {}),
          br(this)
        );
      }),
      (n.totalDuration = function (i) {
        var s = 0,
          a = this,
          o = a._last,
          l = hn,
          c,
          u,
          f;
        if (arguments.length)
          return a.timeScale(
            (a._repeat < 0 ? a.duration() : a.totalDuration()) /
              (a.reversed() ? -i : i)
          );
        if (a._dirty) {
          for (f = a.parent; o; )
            (c = o._prev),
              o._dirty && o.totalDuration(),
              (u = o._start),
              u > l && a._sort && o._ts && !a._lock
                ? ((a._lock = 1), (gn(a, o, u - o._delay, 1)._lock = 0))
                : (l = u),
              u < 0 &&
                o._ts &&
                ((s -= u),
                ((!f && !a._dp) || (f && f.smoothChildTiming)) &&
                  ((a._start += u / a._ts), (a._time -= u), (a._tTime -= u)),
                a.shiftChildren(-u, !1, -1 / 0),
                (l = 0)),
              o._end > s && o._ts && (s = o._end),
              (o = c);
          ci(a, a === Te && a._time > s ? a._time : s, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (e.updateRoot = function (i) {
        if ((Te._ts && (eu(Te, ta(i, Te)), (Zc = Nt.frame)), Nt.frame >= Qc)) {
          Qc += Lt.autoSleep || 120;
          var s = Te._first;
          if ((!s || !s._ts) && Lt.autoSleep && Nt._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || Nt.sleep();
          }
        }
      }),
      e
    );
  })(ts);
  zt(mt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Gg = function (e, n, r, i, s, a, o) {
      var l = new Ct(this._pt, e, n, 0, 1, Lu, null, s),
        c = 0,
        u = 0,
        f,
        d,
        h,
        m,
        p,
        g,
        y,
        v;
      for (
        l.b = r,
          l.e = i,
          r += "",
          i += "",
          (y = ~i.indexOf("random(")) && (i = Zi(i)),
          a && ((v = [r, i]), a(v, e, n), (r = v[0]), (i = v[1])),
          d = r.match(So) || [];
        (f = So.exec(i));

      )
        (m = f[0]),
          (p = i.substring(c, f.index)),
          h ? (h = (h + 1) % 5) : p.substr(-5) === "rgba(" && (h = 1),
          m !== d[u++] &&
            ((g = parseFloat(d[u - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: p || u === 1 ? p : ",",
              s: g,
              c: m.charAt(1) === "=" ? ai(g, m) - g : parseFloat(m) - g,
              m: h && h < 4 ? Math.round : 0,
            }),
            (c = So.lastIndex));
      return (
        (l.c = c < i.length ? i.substring(c, i.length) : ""),
        (l.fp = o),
        (Yc.test(i) || y) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    Bo = function (e, n, r, i, s, a, o, l, c, u) {
      ke(i) && (i = i(s || 0, e, a));
      var f = e[n],
        d =
          r !== "get"
            ? r
            : ke(f)
            ? c
              ? e[
                  n.indexOf("set") || !ke(e["get" + n.substr(3)])
                    ? n
                    : "get" + n.substr(3)
                ](c)
              : e[n]()
            : f,
        h = ke(f) ? (c ? Qg : Ou) : Vo,
        m;
      if (
        (je(i) &&
          (~i.indexOf("random(") && (i = Zi(i)),
          i.charAt(1) === "=" &&
            ((m = ai(d, i) + (at(d) || 0)), (m || m === 0) && (i = m))),
        !u || d !== i || qo)
      )
        return !isNaN(d * i) && i !== ""
          ? ((m = new Ct(
              this._pt,
              e,
              n,
              +d || 0,
              i - (d || 0),
              typeof f == "boolean" ? ev : Au,
              0,
              h
            )),
            c && (m.fp = c),
            o && m.modifier(o, this, e),
            (this._pt = m))
          : (!f && !(n in e) && wo(n, i),
            Gg.call(this, e, n, d, i, h, l || Lt.stringFilter, c));
    },
    jg = function (e, n, r, i, s) {
      if (
        (ke(e) && (e = ns(e, s, n, r, i)),
        !pn(e) || (e.style && e.nodeType) || st(e) || Wc(e))
      )
        return je(e) ? ns(e, s, n, r, i) : e;
      var a = {},
        o;
      for (o in e) a[o] = ns(e[o], s, n, r, i);
      return a;
    },
    ku = function (e, n, r, i, s, a) {
      var o, l, c, u;
      if (
        Dt[e] &&
        (o = new Dt[e]()).init(
          s,
          o.rawVars ? n[e] : jg(n[e], i, s, a, r),
          r,
          i,
          a
        ) !== !1 &&
        ((r._pt = l = new Ct(r._pt, s, e, 0, 1, o.render, o, 0, o.priority)),
        r !== ui)
      )
        for (c = r._ptLookup[r._targets.indexOf(s)], u = o._props.length; u--; )
          c[o._props[u]] = l;
      return o;
    },
    Kn,
    qo,
    Ho = function t(e, n, r) {
      var i = e.vars,
        s = i.ease,
        a = i.startAt,
        o = i.immediateRender,
        l = i.lazy,
        c = i.onUpdate,
        u = i.runBackwards,
        f = i.yoyoEase,
        d = i.keyframes,
        h = i.autoRevert,
        m = e._dur,
        p = e._startAt,
        g = e._targets,
        y = e.parent,
        v = y && y.data === "nested" ? y.vars.targets : g,
        _ = e._overwrite === "auto" && !vo,
        x = e.timeline,
        S,
        w,
        C,
        P,
        O,
        T,
        M,
        b,
        E,
        A,
        L,
        k,
        I;
      if (
        (x && (!d || !s) && (s = "none"),
        (e._ease = xr(s, ii.ease)),
        (e._yEase = f ? Eu(xr(f === !0 ? s : f, ii.ease)) : 0),
        f &&
          e._yoyo &&
          !e._repeat &&
          ((f = e._yEase), (e._yEase = e._ease), (e._ease = f)),
        (e._from = !x && !!i.runBackwards),
        !x || (d && !i.stagger))
      ) {
        if (
          ((b = g[0] ? _r(g[0]).harness : 0),
          (k = b && i[b.prop]),
          (S = Js(i, Co)),
          p &&
            (p._zTime < 0 && p.progress(1),
            n < 0 && u && o && !h
              ? p.render(-1, !0)
              : p.revert(u && m ? Ks : Sg),
            (p._lazy = 0)),
          a)
        ) {
          if (
            (Gn(
              (e._startAt = qe.set(
                g,
                zt(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: y,
                    immediateRender: !0,
                    lazy: !p && Et(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      c &&
                      function () {
                        return Rt(e, "onUpdate");
                      },
                    stagger: 0,
                  },
                  a
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            n < 0 && (et || (!o && !h)) && e._startAt.revert(Ks),
            o && m && n <= 0 && r <= 0)
          ) {
            n && (e._zTime = n);
            return;
          }
        } else if (u && m && !p) {
          if (
            (n && (o = !1),
            (C = zt(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !p && Et(l),
                immediateRender: o,
                stagger: 0,
                parent: y,
              },
              S
            )),
            k && (C[b.prop] = k),
            Gn((e._startAt = qe.set(g, C))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            n < 0 && (et ? e._startAt.revert(Ks) : e._startAt.render(-1, !0)),
            (e._zTime = n),
            !o)
          )
            t(e._startAt, it, it);
          else if (!n) return;
        }
        for (
          e._pt = e._ptCache = 0, l = (m && Et(l)) || (l && !m), w = 0;
          w < g.length;
          w++
        ) {
          if (
            ((O = g[w]),
            (M = O._gsap || $o(g)[w]._gsap),
            (e._ptLookup[w] = A = {}),
            Po[M.id] && Yn.length && Qs(),
            (L = v === g ? w : v.indexOf(O)),
            b &&
              (E = new b()).init(O, k || S, e, L, v) !== !1 &&
              ((e._pt = P =
                new Ct(e._pt, O, E.name, 0, 1, E.render, E, 0, E.priority)),
              E._props.forEach(function (D) {
                A[D] = P;
              }),
              E.priority && (T = 1)),
            !b || k)
          )
            for (C in S)
              Dt[C] && (E = ku(C, S, e, L, O, v))
                ? E.priority && (T = 1)
                : (A[C] = P =
                    Bo.call(e, O, C, "get", S[C], L, v, 0, i.stringFilter));
          e._op && e._op[w] && e.kill(O, e._op[w]),
            _ &&
              e._pt &&
              ((Kn = e),
              Te.killTweensOf(O, A, e.globalTime(n)),
              (I = !e.parent),
              (Kn = 0)),
            e._pt && l && (Po[M.id] = 1);
        }
        T && Iu(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = c),
        (e._initted = (!e._op || e._pt) && !I),
        d && n <= 0 && x.render(hn, !0, !0);
    },
    Ug = function (e, n, r, i, s, a, o, l) {
      var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[n],
        u,
        f,
        d,
        h;
      if (!c)
        for (
          c = e._ptCache[n] = [], d = e._ptLookup, h = e._targets.length;
          h--;

        ) {
          if (((u = d[h][n]), u && u.d && u.d._pt))
            for (u = u.d._pt; u && u.p !== n && u.fp !== n; ) u = u._next;
          if (!u)
            return (
              (qo = 1),
              (e.vars[n] = "+=0"),
              Ho(e, o),
              (qo = 0),
              l ? Yi(n + " not eligible for reset") : 1
            );
          c.push(u);
        }
      for (h = c.length; h--; )
        (f = c[h]),
          (u = f._pt || f),
          (u.s = (i || i === 0) && !s ? i : u.s + (i || 0) + a * u.c),
          (u.c = r - u.s),
          f.e && (f.e = $e(r) + at(f.e)),
          f.b && (f.b = u.s + at(f.b));
    },
    Kg = function (e, n) {
      var r = e[0] ? _r(e[0]).harness : 0,
        i = r && r.aliases,
        s,
        a,
        o,
        l;
      if (!i) return n;
      s = oi({}, n);
      for (a in i)
        if (a in s)
          for (l = i[a].split(","), o = l.length; o--; ) s[l[o]] = s[a];
      return s;
    },
    Zg = function (e, n, r, i) {
      var s = n.ease || i || "power1.inOut",
        a,
        o;
      if (st(n))
        (o = r[e] || (r[e] = [])),
          n.forEach(function (l, c) {
            return o.push({ t: (c / (n.length - 1)) * 100, v: l, e: s });
          });
      else
        for (a in n)
          (o = r[a] || (r[a] = [])),
            a === "ease" || o.push({ t: parseFloat(e), v: n[a], e: s });
    },
    ns = function (e, n, r, i, s) {
      return ke(e)
        ? e.call(n, r, i, s)
        : je(e) && ~e.indexOf("random(")
        ? Zi(e)
        : e;
    },
    Mu = Mo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    $u = {};
  wt(Mu + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return ($u[t] = 1);
  });
  var qe = (function (t) {
    Hc(e, t);
    function e(r, i, s, a) {
      var o;
      typeof i == "number" && ((s.duration = i), (i = s), (s = null)),
        (o = t.call(this, a ? i : ji(i)) || this);
      var l = o.vars,
        c = l.duration,
        u = l.delay,
        f = l.immediateRender,
        d = l.stagger,
        h = l.overwrite,
        m = l.keyframes,
        p = l.defaults,
        g = l.scrollTrigger,
        y = l.yoyoEase,
        v = i.parent || Te,
        _ = (st(r) || Wc(r) ? An(r[0]) : "length" in i) ? [r] : Gt(r),
        x,
        S,
        w,
        C,
        P,
        O,
        T,
        M;
      if (
        ((o._targets = _.length
          ? $o(_)
          : Yi(
              "GSAP target " + r + " not found. https://gsap.com",
              !Lt.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = h),
        m || d || js(c) || js(u))
      ) {
        if (
          ((i = o.vars),
          (x = o.timeline =
            new mt({
              data: "nested",
              defaults: p || {},
              targets: v && v.data === "nested" ? v.vars.targets : _,
            })),
          x.kill(),
          (x.parent = x._dp = On(o)),
          (x._start = 0),
          d || js(c) || js(u))
        ) {
          if (((C = _.length), (T = d && du(d)), pn(d)))
            for (P in d) ~Mu.indexOf(P) && (M || (M = {}), (M[P] = d[P]));
          for (S = 0; S < C; S++)
            (w = Js(i, $u)),
              (w.stagger = 0),
              y && (w.yoyoEase = y),
              M && oi(w, M),
              (O = _[S]),
              (w.duration = +ns(c, On(o), S, O, _)),
              (w.delay = (+ns(u, On(o), S, O, _) || 0) - o._delay),
              !d &&
                C === 1 &&
                w.delay &&
                ((o._delay = u = w.delay), (o._start += u), (w.delay = 0)),
              x.to(O, w, T ? T(S, O, _) : 0),
              (x._ease = oe.none);
          x.duration() ? (c = u = 0) : (o.timeline = 0);
        } else if (m) {
          ji(zt(x.vars.defaults, { ease: "none" })),
            (x._ease = xr(m.ease || i.ease || "none"));
          var b = 0,
            E,
            A,
            L;
          if (st(m))
            m.forEach(function (k) {
              return x.to(_, k, ">");
            }),
              x.duration();
          else {
            w = {};
            for (P in m)
              P === "ease" || P === "easeEach" || Zg(P, m[P], w, m.easeEach);
            for (P in w)
              for (
                E = w[P].sort(function (k, I) {
                  return k.t - I.t;
                }),
                  b = 0,
                  S = 0;
                S < E.length;
                S++
              )
                (A = E[S]),
                  (L = {
                    ease: A.e,
                    duration: ((A.t - (S ? E[S - 1].t : 0)) / 100) * c,
                  }),
                  (L[P] = A.v),
                  x.to(_, L, b),
                  (b += L.duration);
            x.duration() < c && x.to({}, { duration: c - x.duration() });
          }
        }
        c || o.duration((c = x.duration()));
      } else o.timeline = 0;
      return (
        h === !0 && !vo && ((Kn = On(o)), Te.killTweensOf(_), (Kn = 0)),
        gn(v, On(o), s),
        i.reversed && o.reverse(),
        i.paused && o.paused(!0),
        (f ||
          (!c &&
            !m &&
            o._start === Be(v._time) &&
            Et(f) &&
            kg(On(o)) &&
            v.data !== "nested")) &&
          ((o._tTime = -1e-8), o.render(Math.max(0, -u) || 0)),
        g && ou(On(o), g),
        o
      );
    }
    var n = e.prototype;
    return (
      (n.render = function (i, s, a) {
        var o = this._time,
          l = this._tDur,
          c = this._dur,
          u = i < 0,
          f = i > l - it && !u ? l : i < it ? 0 : i,
          d,
          h,
          m,
          p,
          g,
          y,
          v,
          _,
          x;
        if (!c) $g(this, i, s, a);
        else if (
          f !== this._tTime ||
          !i ||
          a ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== u) ||
          this._lazy
        ) {
          if (((d = f), (_ = this.timeline), this._repeat)) {
            if (((p = c + this._rDelay), this._repeat < -1 && u))
              return this.totalTime(p * 100 + i, s, a);
            if (
              ((d = Be(f % p)),
              f === l
                ? ((m = this._repeat), (d = c))
                : ((g = Be(f / p)),
                  (m = ~~g),
                  m && m === g ? ((d = c), m--) : d > c && (d = c)),
              (y = this._yoyo && m & 1),
              y && ((x = this._yEase), (d = c - d)),
              (g = li(this._tTime, p)),
              d === o && !a && this._initted && m === g)
            )
              return (this._tTime = f), this;
            m !== g &&
              (_ && this._yEase && wu(_, y),
              this.vars.repeatRefresh &&
                !y &&
                !this._lock &&
                d !== p &&
                this._initted &&
                ((this._lock = a = 1),
                (this.render(Be(p * m), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (lu(this, u ? i : d, a, s, f)) return (this._tTime = 0), this;
            if (o !== this._time && !(a && this.vars.repeatRefresh && m !== g))
              return this;
            if (c !== this._dur) return this.render(i, s, a);
          }
          if (
            ((this._tTime = f),
            (this._time = d),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = v = (x || this._ease)(d / c)),
            this._from && (this.ratio = v = 1 - v),
            !o && f && !s && !g && (Rt(this, "onStart"), this._tTime !== f))
          )
            return this;
          for (h = this._pt; h; ) h.r(v, h.d), (h = h._next);
          (_ && _.render(i < 0 ? i : _._dur * _._ease(d / this._dur), s, a)) ||
            (this._startAt && (this._zTime = i)),
            this._onUpdate &&
              !s &&
              (u && Ao(this, i, s, a), Rt(this, "onUpdate")),
            this._repeat &&
              m !== g &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              Rt(this, "onRepeat"),
            (f === this._tDur || !f) &&
              this._tTime === f &&
              (u && !this._onUpdate && Ao(this, i, !0, !0),
              (i || !c) &&
                ((f === this._tDur && this._ts > 0) || (!f && this._ts < 0)) &&
                Gn(this, 1),
              !s &&
                !(u && !o) &&
                (f || o || y) &&
                (Rt(this, f === l ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(f < l && this.timeScale() > 0) &&
                  this._prom()));
        }
        return this;
      }),
      (n.targets = function () {
        return this._targets;
      }),
      (n.invalidate = function (i) {
        return (
          (!i || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(i),
          t.prototype.invalidate.call(this, i)
        );
      }),
      (n.resetTo = function (i, s, a, o, l) {
        es || Nt.wake(), this._ts || this.play();
        var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          u;
        return (
          this._initted || Ho(this, c),
          (u = this._ease(c / this._dur)),
          Ug(this, i, s, a, o, u, c, l)
            ? this.resetTo(i, s, a, o, 1)
            : (ra(this, 0),
              this.parent ||
                iu(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (n.kill = function (i, s) {
        if ((s === void 0 && (s = "all"), !i && (!s || s === "all")))
          return (
            (this._lazy = this._pt = 0),
            this.parent
              ? Qi(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!et),
            this
          );
        if (this.timeline) {
          var a = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(i, s, Kn && Kn.vars.overwrite !== !0)
              ._first || Qi(this),
            this.parent &&
              a !== this.timeline.totalDuration() &&
              ci(this, (this._dur * this.timeline._tDur) / a, 0, 1),
            this
          );
        }
        var o = this._targets,
          l = i ? Gt(i) : o,
          c = this._ptLookup,
          u = this._pt,
          f,
          d,
          h,
          m,
          p,
          g,
          y;
        if ((!s || s === "all") && Cg(o, l))
          return s === "all" && (this._pt = 0), Qi(this);
        for (
          f = this._op = this._op || [],
            s !== "all" &&
              (je(s) &&
                ((p = {}),
                wt(s, function (v) {
                  return (p[v] = 1);
                }),
                (s = p)),
              (s = Kg(o, s))),
            y = o.length;
          y--;

        )
          if (~l.indexOf(o[y])) {
            (d = c[y]),
              s === "all"
                ? ((f[y] = s), (m = d), (h = {}))
                : ((h = f[y] = f[y] || {}), (m = s));
            for (p in m)
              (g = d && d[p]),
                g &&
                  ((!("kill" in g.d) || g.d.kill(p) === !0) &&
                    ea(this, g, "_pt"),
                  delete d[p]),
                h !== "all" && (h[p] = 1);
          }
        return this._initted && !this._pt && u && Qi(this), this;
      }),
      (e.to = function (i, s) {
        return new e(i, s, arguments[2]);
      }),
      (e.from = function (i, s) {
        return Ui(1, arguments);
      }),
      (e.delayedCall = function (i, s, a, o) {
        return new e(s, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: i,
          onComplete: s,
          onReverseComplete: s,
          onCompleteParams: a,
          onReverseCompleteParams: a,
          callbackScope: o,
        });
      }),
      (e.fromTo = function (i, s, a) {
        return Ui(2, arguments);
      }),
      (e.set = function (i, s) {
        return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(i, s);
      }),
      (e.killTweensOf = function (i, s, a) {
        return Te.killTweensOf(i, s, a);
      }),
      e
    );
  })(ts);
  zt(qe.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    wt("staggerTo,staggerFrom,staggerFromTo", function (t) {
      qe[t] = function () {
        var e = new mt(),
          n = Io.call(arguments, 0);
        return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n);
      };
    });
  var Vo = function (e, n, r) {
      return (e[n] = r);
    },
    Ou = function (e, n, r) {
      return e[n](r);
    },
    Qg = function (e, n, r, i) {
      return e[n](i.fp, r);
    },
    Jg = function (e, n, r) {
      return e.setAttribute(n, r);
    },
    Wo = function (e, n) {
      return ke(e[n]) ? Ou : _o(e[n]) && e.setAttribute ? Jg : Vo;
    },
    Au = function (e, n) {
      return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n);
    },
    ev = function (e, n) {
      return n.set(n.t, n.p, !!(n.s + n.c * e), n);
    },
    Lu = function (e, n) {
      var r = n._pt,
        i = "";
      if (!e && n.b) i = n.b;
      else if (e === 1 && n.e) i = n.e;
      else {
        for (; r; )
          (i =
            r.p +
            (r.m
              ? r.m(r.s + r.c * e)
              : Math.round((r.s + r.c * e) * 1e4) / 1e4) +
            i),
            (r = r._next);
        i += n.c;
      }
      n.set(n.t, n.p, i, n);
    },
    Xo = function (e, n) {
      for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next);
    },
    tv = function (e, n, r, i) {
      for (var s = this._pt, a; s; )
        (a = s._next), s.p === i && s.modifier(e, n, r), (s = a);
    },
    nv = function (e) {
      for (var n = this._pt, r, i; n; )
        (i = n._next),
          (n.p === e && !n.op) || n.op === e
            ? ea(this, n, "_pt")
            : n.dep || (r = 1),
          (n = i);
      return !r;
    },
    rv = function (e, n, r, i) {
      i.mSet(e, n, i.m.call(i.tween, r, i.mt), i);
    },
    Iu = function (e) {
      for (var n = e._pt, r, i, s, a; n; ) {
        for (r = n._next, i = s; i && i.pr > n.pr; ) i = i._next;
        (n._prev = i ? i._prev : a) ? (n._prev._next = n) : (s = n),
          (n._next = i) ? (i._prev = n) : (a = n),
          (n = r);
      }
      e._pt = s;
    },
    Ct = (function () {
      function t(n, r, i, s, a, o, l, c, u) {
        (this.t = r),
          (this.s = s),
          (this.c = a),
          (this.p = i),
          (this.r = o || Au),
          (this.d = l || this),
          (this.set = c || Vo),
          (this.pr = u || 0),
          (this._next = n),
          n && (n._prev = this);
      }
      var e = t.prototype;
      return (
        (e.modifier = function (r, i, s) {
          (this.mSet = this.mSet || this.set),
            (this.set = rv),
            (this.m = r),
            (this.mt = s),
            (this.tween = i);
        }),
        t
      );
    })();
  wt(
    Mo +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (Co[t] = 1);
    }
  ),
    (It.TweenMax = It.TweenLite = qe),
    (It.TimelineLite = It.TimelineMax = mt),
    (Te = new mt({
      sortChildren: !1,
      defaults: ii,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Lt.stringFilter = Tu);
  var Tr = [],
    ia = {},
    iv = [],
    Du = 0,
    sv = 0,
    Yo = function (e) {
      return (ia[e] || iv).map(function (n) {
        return n();
      });
    },
    Go = function () {
      var e = Date.now(),
        n = [];
      e - Du > 2 &&
        (Yo("matchMediaInit"),
        Tr.forEach(function (r) {
          var i = r.queries,
            s = r.conditions,
            a,
            o,
            l,
            c;
          for (o in i)
            (a = mn.matchMedia(i[o]).matches),
              a && (l = 1),
              a !== s[o] && ((s[o] = a), (c = 1));
          c && (r.revert(), l && n.push(r));
        }),
        Yo("matchMediaRevert"),
        n.forEach(function (r) {
          return r.onMatch(r, function (i) {
            return r.add(null, i);
          });
        }),
        (Du = e),
        Yo("matchMedia"));
    },
    zu = (function () {
      function t(n, r) {
        (this.selector = r && Do(r)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = sv++),
          n && this.add(n);
      }
      var e = t.prototype;
      return (
        (e.add = function (r, i, s) {
          ke(r) && ((s = i), (i = r), (r = ke));
          var a = this,
            o = function () {
              var c = xe,
                u = a.selector,
                f;
              return (
                c && c !== a && c.data.push(a),
                s && (a.selector = Do(s)),
                (xe = a),
                (f = i.apply(a, arguments)),
                ke(f) && a._r.push(f),
                (xe = c),
                (a.selector = u),
                (a.isReverted = !1),
                f
              );
            };
          return (
            (a.last = o),
            r === ke
              ? o(a, function (l) {
                  return a.add(null, l);
                })
              : r
              ? (a[r] = o)
              : o
          );
        }),
        (e.ignore = function (r) {
          var i = xe;
          (xe = null), r(this), (xe = i);
        }),
        (e.getTweens = function () {
          var r = [];
          return (
            this.data.forEach(function (i) {
              return i instanceof t
                ? r.push.apply(r, i.getTweens())
                : i instanceof qe &&
                    !(i.parent && i.parent.data === "nested") &&
                    r.push(i);
            }),
            r
          );
        }),
        (e.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (e.kill = function (r, i) {
          var s = this;
          if (
            (r
              ? (function () {
                  for (var o = s.getTweens(), l = s.data.length, c; l--; )
                    (c = s.data[l]),
                      c.data === "isFlip" &&
                        (c.revert(),
                        c.getChildren(!0, !0, !1).forEach(function (u) {
                          return o.splice(o.indexOf(u), 1);
                        }));
                  for (
                    o
                      .map(function (u) {
                        return {
                          g:
                            u._dur ||
                            u._delay ||
                            (u._sat && !u._sat.vars.immediateRender)
                              ? u.globalTime(0)
                              : -1 / 0,
                          t: u,
                        };
                      })
                      .sort(function (u, f) {
                        return f.g - u.g || -1 / 0;
                      })
                      .forEach(function (u) {
                        return u.t.revert(r);
                      }),
                      l = s.data.length;
                    l--;

                  )
                    (c = s.data[l]),
                      c instanceof mt
                        ? c.data !== "nested" &&
                          (c.scrollTrigger && c.scrollTrigger.revert(),
                          c.kill())
                        : !(c instanceof qe) && c.revert && c.revert(r);
                  s._r.forEach(function (u) {
                    return u(r, s);
                  }),
                    (s.isReverted = !0);
                })()
              : this.data.forEach(function (o) {
                  return o.kill && o.kill();
                }),
            this.clear(),
            i)
          )
            for (var a = Tr.length; a--; )
              Tr[a].id === this.id && Tr.splice(a, 1);
        }),
        (e.revert = function (r) {
          this.kill(r || {});
        }),
        t
      );
    })(),
    av = (function () {
      function t(n) {
        (this.contexts = []), (this.scope = n), xe && xe.data.push(this);
      }
      var e = t.prototype;
      return (
        (e.add = function (r, i, s) {
          pn(r) || (r = { matches: r });
          var a = new zu(0, s || this.scope),
            o = (a.conditions = {}),
            l,
            c,
            u;
          xe && !a.selector && (a.selector = xe.selector),
            this.contexts.push(a),
            (i = a.add("onMatch", i)),
            (a.queries = r);
          for (c in r)
            c === "all"
              ? (u = 1)
              : ((l = mn.matchMedia(r[c])),
                l &&
                  (Tr.indexOf(a) < 0 && Tr.push(a),
                  (o[c] = l.matches) && (u = 1),
                  l.addListener
                    ? l.addListener(Go)
                    : l.addEventListener("change", Go)));
          return (
            u &&
              i(a, function (f) {
                return a.add(null, f);
              }),
            this
          );
        }),
        (e.revert = function (r) {
          this.kill(r || {});
        }),
        (e.kill = function (r) {
          this.contexts.forEach(function (i) {
            return i.kill(r, !0);
          });
        }),
        t
      );
    })(),
    sa = {
      registerPlugin: function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r];
        n.forEach(function (i) {
          return _u(i);
        });
      },
      timeline: function (e) {
        return new mt(e);
      },
      getTweensOf: function (e, n) {
        return Te.getTweensOf(e, n);
      },
      getProperty: function (e, n, r, i) {
        je(e) && (e = Gt(e)[0]);
        var s = _r(e || {}).get,
          a = r ? nu : tu;
        return (
          r === "native" && (r = ""),
          e &&
            (n
              ? a(((Dt[n] && Dt[n].get) || s)(e, n, r, i))
              : function (o, l, c) {
                  return a(((Dt[o] && Dt[o].get) || s)(e, o, l, c));
                })
        );
      },
      quickSetter: function (e, n, r) {
        if (((e = Gt(e)), e.length > 1)) {
          var i = e.map(function (u) {
              return Pt.quickSetter(u, n, r);
            }),
            s = i.length;
          return function (u) {
            for (var f = s; f--; ) i[f](u);
          };
        }
        e = e[0] || {};
        var a = Dt[n],
          o = _r(e),
          l = (o.harness && (o.harness.aliases || {})[n]) || n,
          c = a
            ? function (u) {
                var f = new a();
                (ui._pt = 0),
                  f.init(e, r ? u + r : u, ui, 0, [e]),
                  f.render(1, f),
                  ui._pt && Xo(1, ui);
              }
            : o.set(e, l);
        return a
          ? c
          : function (u) {
              return c(e, l, r ? u + r : u, o, 1);
            };
      },
      quickTo: function (e, n, r) {
        var i,
          s = Pt.to(
            e,
            zt(
              ((i = {}), (i[n] = "+=0.1"), (i.paused = !0), (i.stagger = 0), i),
              r || {}
            )
          ),
          a = function (l, c, u) {
            return s.resetTo(n, l, c, u);
          };
        return (a.tween = s), a;
      },
      isTweening: function (e) {
        return Te.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = xr(e.ease, ii.ease)), ru(ii, e || {});
      },
      config: function (e) {
        return ru(Lt, e || {});
      },
      registerEffect: function (e) {
        var n = e.name,
          r = e.effect,
          i = e.plugins,
          s = e.defaults,
          a = e.extendTimeline;
        (i || "").split(",").forEach(function (o) {
          return (
            o &&
            !Dt[o] &&
            !It[o] &&
            Yi(n + " effect requires " + o + " plugin.")
          );
        }),
          (ko[n] = function (o, l, c) {
            return r(Gt(o), zt(l || {}, s), c);
          }),
          a &&
            (mt.prototype[n] = function (o, l, c) {
              return this.add(ko[n](o, pn(l) ? l : (c = l) && {}, this), c);
            });
      },
      registerEase: function (e, n) {
        oe[e] = xr(n);
      },
      parseEase: function (e, n) {
        return arguments.length ? xr(e, n) : oe;
      },
      getById: function (e) {
        return Te.getById(e);
      },
      exportRoot: function (e, n) {
        e === void 0 && (e = {});
        var r = new mt(e),
          i,
          s;
        for (
          r.smoothChildTiming = Et(e.smoothChildTiming),
            Te.remove(r),
            r._dp = 0,
            r._time = r._tTime = Te._time,
            i = Te._first;
          i;

        )
          (s = i._next),
            (n ||
              !(
                !i._dur &&
                i instanceof qe &&
                i.vars.onComplete === i._targets[0]
              )) &&
              gn(r, i, i._start - i._delay),
            (i = s);
        return gn(Te, r, 0), r;
      },
      context: function (e, n) {
        return e ? new zu(e, n) : xe;
      },
      matchMedia: function (e) {
        return new av(e);
      },
      matchMediaRefresh: function () {
        return (
          Tr.forEach(function (e) {
            var n = e.conditions,
              r,
              i;
            for (i in n) n[i] && ((n[i] = !1), (r = 1));
            r && e.revert();
          }) || Go()
        );
      },
      addEventListener: function (e, n) {
        var r = ia[e] || (ia[e] = []);
        ~r.indexOf(n) || r.push(n);
      },
      removeEventListener: function (e, n) {
        var r = ia[e],
          i = r && r.indexOf(n);
        i >= 0 && r.splice(i, 1);
      },
      utils: {
        wrap: Ng,
        wrapYoyo: Fg,
        distribute: du,
        random: pu,
        snap: hu,
        normalize: Rg,
        getUnit: at,
        clamp: Lg,
        splitColor: bu,
        toArray: Gt,
        selector: Do,
        mapRange: gu,
        pipe: Dg,
        unitize: zg,
        interpolate: Bg,
        shuffle: fu,
      },
      install: Uc,
      effects: ko,
      ticker: Nt,
      updateRoot: mt.updateRoot,
      plugins: Dt,
      globalTimeline: Te,
      core: {
        PropTween: Ct,
        globals: Kc,
        Tween: qe,
        Timeline: mt,
        Animation: ts,
        getCache: _r,
        _removeLinkedListItem: ea,
        reverting: function () {
          return et;
        },
        context: function (e) {
          return e && xe && (xe.data.push(e), (e._ctx = xe)), xe;
        },
        suppressOverwrites: function (e) {
          return (vo = e);
        },
      },
    };
  wt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (sa[t] = qe[t]);
  }),
    Nt.add(mt.updateRoot),
    (ui = sa.to({}, { duration: 0 }));
  var ov = function (e, n) {
      for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
        r = r._next;
      return r;
    },
    lv = function (e, n) {
      var r = e._targets,
        i,
        s,
        a;
      for (i in n)
        for (s = r.length; s--; )
          (a = e._ptLookup[s][i]),
            a &&
              (a = a.d) &&
              (a._pt && (a = ov(a, i)),
              a && a.modifier && a.modifier(n[i], e, r[s], i));
    },
    jo = function (e, n) {
      return {
        name: e,
        headless: 1,
        rawVars: 1,
        init: function (i, s, a) {
          a._onInit = function (o) {
            var l, c;
            if (
              (je(s) &&
                ((l = {}),
                wt(s, function (u) {
                  return (l[u] = 1);
                }),
                (s = l)),
              n)
            ) {
              l = {};
              for (c in s) l[c] = n(s[c]);
              s = l;
            }
            lv(o, s);
          };
        },
      };
    },
    Pt =
      sa.registerPlugin(
        {
          name: "attr",
          init: function (e, n, r, i, s) {
            var a, o, l;
            this.tween = r;
            for (a in n)
              (l = e.getAttribute(a) || ""),
                (o = this.add(
                  e,
                  "setAttribute",
                  (l || 0) + "",
                  n[a],
                  i,
                  s,
                  0,
                  0,
                  a
                )),
                (o.op = a),
                (o.b = l),
                this._props.push(a);
          },
          render: function (e, n) {
            for (var r = n._pt; r; )
              et ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next);
          },
        },
        {
          name: "endArray",
          headless: 1,
          init: function (e, n) {
            for (var r = n.length; r--; )
              this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
          },
        },
        jo("roundProps", zo),
        jo("modifiers"),
        jo("snap", hu)
      ) || sa;
  (qe.version = mt.version = Pt.version = "3.13.0"),
    (jc = 1),
    bo() && fi(),
    oe.Power0,
    oe.Power1,
    oe.Power2,
    oe.Power3,
    oe.Power4,
    oe.Linear,
    oe.Quad,
    oe.Cubic,
    oe.Quart,
    oe.Quint,
    oe.Strong,
    oe.Elastic,
    oe.Back,
    oe.SteppedEase,
    oe.Bounce,
    oe.Sine,
    oe.Expo,
    oe.Circ;
  /*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Ru,
    Zn,
    di,
    Uo,
    Er,
    Nu,
    Ko,
    cv = function () {
      return typeof window != "undefined";
    },
    Ln = {},
    wr = 180 / Math.PI,
    hi = Math.PI / 180,
    pi = Math.atan2,
    Fu = 1e8,
    Zo = /([A-Z])/g,
    uv = /(left|right|width|margin|padding|x)/i,
    fv = /[\s,\(]\S/,
    vn = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Qo = function (e, n) {
      return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
    },
    dv = function (e, n) {
      return n.set(
        n.t,
        n.p,
        e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u,
        n
      );
    },
    hv = function (e, n) {
      return n.set(
        n.t,
        n.p,
        e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b,
        n
      );
    },
    pv = function (e, n) {
      var r = n.s + n.c * e;
      n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
    },
    Bu = function (e, n) {
      return n.set(n.t, n.p, e ? n.e : n.b, n);
    },
    qu = function (e, n) {
      return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n);
    },
    mv = function (e, n, r) {
      return (e.style[n] = r);
    },
    gv = function (e, n, r) {
      return e.style.setProperty(n, r);
    },
    vv = function (e, n, r) {
      return (e._gsap[n] = r);
    },
    yv = function (e, n, r) {
      return (e._gsap.scaleX = e._gsap.scaleY = r);
    },
    _v = function (e, n, r, i, s) {
      var a = e._gsap;
      (a.scaleX = a.scaleY = r), a.renderTransform(s, a);
    },
    bv = function (e, n, r, i, s) {
      var a = e._gsap;
      (a[n] = r), a.renderTransform(s, a);
    },
    Ee = "transform",
    kt = Ee + "Origin",
    xv = function t(e, n) {
      var r = this,
        i = this.target,
        s = i.style,
        a = i._gsap;
      if (e in Ln && s) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = vn[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (o) {
                  return (r.tfm[o] = In(i, o));
                })
              : (this.tfm[e] = a.x ? a[e] : In(i, e)),
            e === kt && (this.tfm.zOrigin = a.zOrigin);
        else
          return vn.transform.split(",").forEach(function (o) {
            return t.call(r, o, n);
          });
        if (this.props.indexOf(Ee) >= 0) return;
        a.svg &&
          ((this.svgo = i.getAttribute("data-svg-origin")),
          this.props.push(kt, n, "")),
          (e = Ee);
      }
      (s || n) && this.props.push(e, n, s[e]);
    },
    Hu = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    Sv = function () {
      var e = this.props,
        n = this.target,
        r = n.style,
        i = n._gsap,
        s,
        a;
      for (s = 0; s < e.length; s += 3)
        e[s + 1]
          ? e[s + 1] === 2
            ? n[e[s]](e[s + 2])
            : (n[e[s]] = e[s + 2])
          : e[s + 2]
          ? (r[e[s]] = e[s + 2])
          : r.removeProperty(
              e[s].substr(0, 2) === "--"
                ? e[s]
                : e[s].replace(Zo, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (a in this.tfm) i[a] = this.tfm[a];
        i.svg &&
          (i.renderTransform(),
          n.setAttribute("data-svg-origin", this.svgo || "")),
          (s = Ko()),
          (!s || !s.isStart) &&
            !r[Ee] &&
            (Hu(r),
            i.zOrigin &&
              r[kt] &&
              ((r[kt] += " " + i.zOrigin + "px"),
              (i.zOrigin = 0),
              i.renderTransform()),
            (i.uncache = 1));
      }
    },
    Vu = function (e, n) {
      var r = { target: e, props: [], revert: Sv, save: xv };
      return (
        e._gsap || Pt.core.getCache(e),
        n &&
          e.style &&
          e.nodeType &&
          n.split(",").forEach(function (i) {
            return r.save(i);
          }),
        r
      );
    },
    Wu,
    Jo = function (e, n) {
      var r = Zn.createElementNS
        ? Zn.createElementNS(
            (n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : Zn.createElement(e);
      return r && r.style ? r : Zn.createElement(e);
    },
    jt = function t(e, n, r) {
      var i = getComputedStyle(e);
      return (
        i[n] ||
        i.getPropertyValue(n.replace(Zo, "-$1").toLowerCase()) ||
        i.getPropertyValue(n) ||
        (!r && t(e, mi(n) || n, 1)) ||
        ""
      );
    },
    Xu = "O,Moz,ms,Ms,Webkit".split(","),
    mi = function (e, n, r) {
      var i = n || Er,
        s = i.style,
        a = 5;
      if (e in s && !r) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        a-- && !(Xu[a] + e in s);

      );
      return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? Xu[a] : "") + e;
    },
    el = function () {
      cv() &&
        window.document &&
        ((Ru = window),
        (Zn = Ru.document),
        (di = Zn.documentElement),
        (Er = Jo("div") || { style: {} }),
        Jo("div"),
        (Ee = mi(Ee)),
        (kt = Ee + "Origin"),
        (Er.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Wu = !!mi("perspective")),
        (Ko = Pt.core.reverting),
        (Uo = 1));
    },
    Yu = function (e) {
      var n = e.ownerSVGElement,
        r = Jo(
          "svg",
          (n && n.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        i = e.cloneNode(!0),
        s;
      (i.style.display = "block"), r.appendChild(i), di.appendChild(r);
      try {
        s = i.getBBox();
      } catch (a) {}
      return r.removeChild(i), di.removeChild(r), s;
    },
    Gu = function (e, n) {
      for (var r = n.length; r--; )
        if (e.hasAttribute(n[r])) return e.getAttribute(n[r]);
    },
    ju = function (e) {
      var n, r;
      try {
        n = e.getBBox();
      } catch (i) {
        (n = Yu(e)), (r = 1);
      }
      return (
        (n && (n.width || n.height)) || r || (n = Yu(e)),
        n && !n.width && !n.x && !n.y
          ? {
              x: +Gu(e, ["x", "cx", "x1"]) || 0,
              y: +Gu(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : n
      );
    },
    Uu = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && ju(e));
    },
    Cr = function (e, n) {
      if (n) {
        var r = e.style,
          i;
        n in Ln && n !== kt && (n = Ee),
          r.removeProperty
            ? ((i = n.substr(0, 2)),
              (i === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
              r.removeProperty(
                i === "--" ? n : n.replace(Zo, "-$1").toLowerCase()
              ))
            : r.removeAttribute(n);
      }
    },
    Qn = function (e, n, r, i, s, a) {
      var o = new Ct(e._pt, n, r, 0, 1, a ? qu : Bu);
      return (e._pt = o), (o.b = i), (o.e = s), e._props.push(r), o;
    },
    Ku = { deg: 1, rad: 1, turn: 1 },
    Tv = { grid: 1, flex: 1 },
    Jn = function t(e, n, r, i) {
      var s = parseFloat(r) || 0,
        a = (r + "").trim().substr((s + "").length) || "px",
        o = Er.style,
        l = uv.test(n),
        c = e.tagName.toLowerCase() === "svg",
        u = (c ? "client" : "offset") + (l ? "Width" : "Height"),
        f = 100,
        d = i === "px",
        h = i === "%",
        m,
        p,
        g,
        y;
      if (i === a || !s || Ku[i] || Ku[a]) return s;
      if (
        (a !== "px" && !d && (s = t(e, n, r, "px")),
        (y = e.getCTM && Uu(e)),
        (h || a === "%") && (Ln[n] || ~n.indexOf("adius")))
      )
        return (
          (m = y ? e.getBBox()[l ? "width" : "height"] : e[u]),
          $e(h ? (s / m) * f : (s / 100) * m)
        );
      if (
        ((o[l ? "width" : "height"] = f + (d ? a : i)),
        (p =
          (i !== "rem" && ~n.indexOf("adius")) ||
          (i === "em" && e.appendChild && !c)
            ? e
            : e.parentNode),
        y && (p = (e.ownerSVGElement || {}).parentNode),
        (!p || p === Zn || !p.appendChild) && (p = Zn.body),
        (g = p._gsap),
        g && h && g.width && l && g.time === Nt.time && !g.uncache)
      )
        return $e((s / g.width) * f);
      if (h && (n === "height" || n === "width")) {
        var v = e.style[n];
        (e.style[n] = f + i), (m = e[u]), v ? (e.style[n] = v) : Cr(e, n);
      } else
        (h || a === "%") &&
          !Tv[jt(p, "display")] &&
          (o.position = jt(e, "position")),
          p === e && (o.position = "static"),
          p.appendChild(Er),
          (m = Er[u]),
          p.removeChild(Er),
          (o.position = "absolute");
      return (
        l && h && ((g = _r(p)), (g.time = Nt.time), (g.width = p[u])),
        $e(d ? (m * s) / f : m && s ? (f / m) * s : 0)
      );
    },
    In = function (e, n, r, i) {
      var s;
      return (
        Uo || el(),
        n in vn &&
          n !== "transform" &&
          ((n = vn[n]), ~n.indexOf(",") && (n = n.split(",")[0])),
        Ln[n] && n !== "transform"
          ? ((s = is(e, i)),
            (s =
              n !== "transformOrigin"
                ? s[n]
                : s.svg
                ? s.origin
                : oa(jt(e, kt)) + " " + s.zOrigin + "px"))
          : ((s = e.style[n]),
            (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) &&
              (s =
                (aa[n] && aa[n](e, n, r)) ||
                jt(e, n) ||
                Jc(e, n) ||
                (n === "opacity" ? 1 : 0))),
        r && !~(s + "").trim().indexOf(" ") ? Jn(e, n, s, r) + r : s
      );
    },
    Ev = function (e, n, r, i) {
      if (!r || r === "none") {
        var s = mi(n, e, 1),
          a = s && jt(e, s, 1);
        a && a !== r
          ? ((n = s), (r = a))
          : n === "borderColor" && (r = jt(e, "borderTopColor"));
      }
      var o = new Ct(this._pt, e.style, n, 0, 1, Lu),
        l = 0,
        c = 0,
        u,
        f,
        d,
        h,
        m,
        p,
        g,
        y,
        v,
        _,
        x,
        S;
      if (
        ((o.b = r),
        (o.e = i),
        (r += ""),
        (i += ""),
        i.substring(0, 6) === "var(--" &&
          (i = jt(e, i.substring(4, i.indexOf(")")))),
        i === "auto" &&
          ((p = e.style[n]),
          (e.style[n] = i),
          (i = jt(e, n) || i),
          p ? (e.style[n] = p) : Cr(e, n)),
        (u = [r, i]),
        Tu(u),
        (r = u[0]),
        (i = u[1]),
        (d = r.match(si) || []),
        (S = i.match(si) || []),
        S.length)
      ) {
        for (; (f = si.exec(i)); )
          (g = f[0]),
            (v = i.substring(l, f.index)),
            m
              ? (m = (m + 1) % 5)
              : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") &&
                (m = 1),
            g !== (p = d[c++] || "") &&
              ((h = parseFloat(p) || 0),
              (x = p.substr((h + "").length)),
              g.charAt(1) === "=" && (g = ai(h, g) + x),
              (y = parseFloat(g)),
              (_ = g.substr((y + "").length)),
              (l = si.lastIndex - _.length),
              _ ||
                ((_ = _ || Lt.units[n] || x),
                l === i.length && ((i += _), (o.e += _))),
              x !== _ && (h = Jn(e, n, p, _) || 0),
              (o._pt = {
                _next: o._pt,
                p: v || c === 1 ? v : ",",
                s: h,
                c: y - h,
                m: (m && m < 4) || n === "zIndex" ? Math.round : 0,
              }));
        o.c = l < i.length ? i.substring(l, i.length) : "";
      } else o.r = n === "display" && i === "none" ? qu : Bu;
      return Yc.test(i) && (o.e = 0), (this._pt = o), o;
    },
    Zu = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    wv = function (e) {
      var n = e.split(" "),
        r = n[0],
        i = n[1] || "50%";
      return (
        (r === "top" || r === "bottom" || i === "left" || i === "right") &&
          ((e = r), (r = i), (i = e)),
        (n[0] = Zu[r] || r),
        (n[1] = Zu[i] || i),
        n.join(" ")
      );
    },
    Cv = function (e, n) {
      if (n.tween && n.tween._time === n.tween._dur) {
        var r = n.t,
          i = r.style,
          s = n.u,
          a = r._gsap,
          o,
          l,
          c;
        if (s === "all" || s === !0) (i.cssText = ""), (l = 1);
        else
          for (s = s.split(","), c = s.length; --c > -1; )
            (o = s[c]),
              Ln[o] && ((l = 1), (o = o === "transformOrigin" ? kt : Ee)),
              Cr(r, o);
        l &&
          (Cr(r, Ee),
          a &&
            (a.svg && r.removeAttribute("transform"),
            (i.scale = i.rotate = i.translate = "none"),
            is(r, 1),
            (a.uncache = 1),
            Hu(i)));
      }
    },
    aa = {
      clearProps: function (e, n, r, i, s) {
        if (s.data !== "isFromStart") {
          var a = (e._pt = new Ct(e._pt, n, r, 0, 0, Cv));
          return (a.u = i), (a.pr = -10), (a.tween = s), e._props.push(r), 1;
        }
      },
    },
    rs = [1, 0, 0, 1, 0, 0],
    Qu = {},
    Ju = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    ef = function (e) {
      var n = jt(e, Ee);
      return Ju(n) ? rs : n.substr(7).match(Xc).map($e);
    },
    tl = function (e, n) {
      var r = e._gsap || _r(e),
        i = e.style,
        s = ef(e),
        a,
        o,
        l,
        c;
      return r.svg && e.getAttribute("transform")
        ? ((l = e.transform.baseVal.consolidate().matrix),
          (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
          s.join(",") === "1,0,0,1,0,0" ? rs : s)
        : (s === rs &&
            !e.offsetParent &&
            e !== di &&
            !r.svg &&
            ((l = i.display),
            (i.display = "block"),
            (a = e.parentNode),
            (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((c = 1), (o = e.nextElementSibling), di.appendChild(e)),
            (s = ef(e)),
            l ? (i.display = l) : Cr(e, "display"),
            c &&
              (o
                ? a.insertBefore(e, o)
                : a
                ? a.appendChild(e)
                : di.removeChild(e))),
          n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    nl = function (e, n, r, i, s, a) {
      var o = e._gsap,
        l = s || tl(e, !0),
        c = o.xOrigin || 0,
        u = o.yOrigin || 0,
        f = o.xOffset || 0,
        d = o.yOffset || 0,
        h = l[0],
        m = l[1],
        p = l[2],
        g = l[3],
        y = l[4],
        v = l[5],
        _ = n.split(" "),
        x = parseFloat(_[0]) || 0,
        S = parseFloat(_[1]) || 0,
        w,
        C,
        P,
        O;
      r
        ? l !== rs &&
          (C = h * g - m * p) &&
          ((P = x * (g / C) + S * (-p / C) + (p * v - g * y) / C),
          (O = x * (-m / C) + S * (h / C) - (h * v - m * y) / C),
          (x = P),
          (S = O))
        : ((w = ju(e)),
          (x = w.x + (~_[0].indexOf("%") ? (x / 100) * w.width : x)),
          (S =
            w.y + (~(_[1] || _[0]).indexOf("%") ? (S / 100) * w.height : S))),
        i || (i !== !1 && o.smooth)
          ? ((y = x - c),
            (v = S - u),
            (o.xOffset = f + (y * h + v * p) - y),
            (o.yOffset = d + (y * m + v * g) - v))
          : (o.xOffset = o.yOffset = 0),
        (o.xOrigin = x),
        (o.yOrigin = S),
        (o.smooth = !!i),
        (o.origin = n),
        (o.originIsAbsolute = !!r),
        (e.style[kt] = "0px 0px"),
        a &&
          (Qn(a, o, "xOrigin", c, x),
          Qn(a, o, "yOrigin", u, S),
          Qn(a, o, "xOffset", f, o.xOffset),
          Qn(a, o, "yOffset", d, o.yOffset)),
        e.setAttribute("data-svg-origin", x + " " + S);
    },
    is = function (e, n) {
      var r = e._gsap || new Pu(e);
      if ("x" in r && !n && !r.uncache) return r;
      var i = e.style,
        s = r.scaleX < 0,
        a = "px",
        o = "deg",
        l = getComputedStyle(e),
        c = jt(e, kt) || "0",
        u,
        f,
        d,
        h,
        m,
        p,
        g,
        y,
        v,
        _,
        x,
        S,
        w,
        C,
        P,
        O,
        T,
        M,
        b,
        E,
        A,
        L,
        k,
        I,
        D,
        R,
        $,
        H,
        Y,
        le,
        re,
        U;
      return (
        (u = f = d = p = g = y = v = _ = x = 0),
        (h = m = 1),
        (r.svg = !!(e.getCTM && Uu(e))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (i[Ee] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[Ee] !== "none" ? l[Ee] : "")),
          (i.scale = i.rotate = i.translate = "none")),
        (C = tl(e, r.svg)),
        r.svg &&
          (r.uncache
            ? ((D = e.getBBox()),
              (c = r.xOrigin - D.x + "px " + (r.yOrigin - D.y) + "px"),
              (I = ""))
            : (I = !n && e.getAttribute("data-svg-origin")),
          nl(e, I || c, !!I || r.originIsAbsolute, r.smooth !== !1, C)),
        (S = r.xOrigin || 0),
        (w = r.yOrigin || 0),
        C !== rs &&
          ((M = C[0]),
          (b = C[1]),
          (E = C[2]),
          (A = C[3]),
          (u = L = C[4]),
          (f = k = C[5]),
          C.length === 6
            ? ((h = Math.sqrt(M * M + b * b)),
              (m = Math.sqrt(A * A + E * E)),
              (p = M || b ? pi(b, M) * wr : 0),
              (v = E || A ? pi(E, A) * wr + p : 0),
              v && (m *= Math.abs(Math.cos(v * hi))),
              r.svg && ((u -= S - (S * M + w * E)), (f -= w - (S * b + w * A))))
            : ((U = C[6]),
              (le = C[7]),
              ($ = C[8]),
              (H = C[9]),
              (Y = C[10]),
              (re = C[11]),
              (u = C[12]),
              (f = C[13]),
              (d = C[14]),
              (P = pi(U, Y)),
              (g = P * wr),
              P &&
                ((O = Math.cos(-P)),
                (T = Math.sin(-P)),
                (I = L * O + $ * T),
                (D = k * O + H * T),
                (R = U * O + Y * T),
                ($ = L * -T + $ * O),
                (H = k * -T + H * O),
                (Y = U * -T + Y * O),
                (re = le * -T + re * O),
                (L = I),
                (k = D),
                (U = R)),
              (P = pi(-E, Y)),
              (y = P * wr),
              P &&
                ((O = Math.cos(-P)),
                (T = Math.sin(-P)),
                (I = M * O - $ * T),
                (D = b * O - H * T),
                (R = E * O - Y * T),
                (re = A * T + re * O),
                (M = I),
                (b = D),
                (E = R)),
              (P = pi(b, M)),
              (p = P * wr),
              P &&
                ((O = Math.cos(P)),
                (T = Math.sin(P)),
                (I = M * O + b * T),
                (D = L * O + k * T),
                (b = b * O - M * T),
                (k = k * O - L * T),
                (M = I),
                (L = D)),
              g &&
                Math.abs(g) + Math.abs(p) > 359.9 &&
                ((g = p = 0), (y = 180 - y)),
              (h = $e(Math.sqrt(M * M + b * b + E * E))),
              (m = $e(Math.sqrt(k * k + U * U))),
              (P = pi(L, k)),
              (v = Math.abs(P) > 2e-4 ? P * wr : 0),
              (x = re ? 1 / (re < 0 ? -re : re) : 0)),
          r.svg &&
            ((I = e.getAttribute("transform")),
            (r.forceCSS = e.setAttribute("transform", "") || !Ju(jt(e, Ee))),
            I && e.setAttribute("transform", I))),
        Math.abs(v) > 90 &&
          Math.abs(v) < 270 &&
          (s
            ? ((h *= -1),
              (v += p <= 0 ? 180 : -180),
              (p += p <= 0 ? 180 : -180))
            : ((m *= -1), (v += v <= 0 ? 180 : -180))),
        (n = n || r.uncache),
        (r.x =
          u -
          ((r.xPercent =
            u &&
            ((!n && r.xPercent) ||
              (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
            ? (e.offsetWidth * r.xPercent) / 100
            : 0) +
          a),
        (r.y =
          f -
          ((r.yPercent =
            f &&
            ((!n && r.yPercent) ||
              (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0)))
            ? (e.offsetHeight * r.yPercent) / 100
            : 0) +
          a),
        (r.z = d + a),
        (r.scaleX = $e(h)),
        (r.scaleY = $e(m)),
        (r.rotation = $e(p) + o),
        (r.rotationX = $e(g) + o),
        (r.rotationY = $e(y) + o),
        (r.skewX = v + o),
        (r.skewY = _ + o),
        (r.transformPerspective = x + a),
        (r.zOrigin = parseFloat(c.split(" ")[2]) || (!n && r.zOrigin) || 0) &&
          (i[kt] = oa(c)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = Lt.force3D),
        (r.renderTransform = r.svg ? kv : Wu ? tf : Pv),
        (r.uncache = 0),
        r
      );
    },
    oa = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    rl = function (e, n, r) {
      var i = at(n);
      return $e(parseFloat(n) + parseFloat(Jn(e, "x", r + "px", i))) + i;
    },
    Pv = function (e, n) {
      (n.z = "0px"),
        (n.rotationY = n.rotationX = "0deg"),
        (n.force3D = 0),
        tf(e, n);
    },
    Pr = "0deg",
    ss = "0px",
    kr = ") ",
    tf = function (e, n) {
      var r = n || this,
        i = r.xPercent,
        s = r.yPercent,
        a = r.x,
        o = r.y,
        l = r.z,
        c = r.rotation,
        u = r.rotationY,
        f = r.rotationX,
        d = r.skewX,
        h = r.skewY,
        m = r.scaleX,
        p = r.scaleY,
        g = r.transformPerspective,
        y = r.force3D,
        v = r.target,
        _ = r.zOrigin,
        x = "",
        S = (y === "auto" && e && e !== 1) || y === !0;
      if (_ && (f !== Pr || u !== Pr)) {
        var w = parseFloat(u) * hi,
          C = Math.sin(w),
          P = Math.cos(w),
          O;
        (w = parseFloat(f) * hi),
          (O = Math.cos(w)),
          (a = rl(v, a, C * O * -_)),
          (o = rl(v, o, -Math.sin(w) * -_)),
          (l = rl(v, l, P * O * -_ + _));
      }
      g !== ss && (x += "perspective(" + g + kr),
        (i || s) && (x += "translate(" + i + "%, " + s + "%) "),
        (S || a !== ss || o !== ss || l !== ss) &&
          (x +=
            l !== ss || S
              ? "translate3d(" + a + ", " + o + ", " + l + ") "
              : "translate(" + a + ", " + o + kr),
        c !== Pr && (x += "rotate(" + c + kr),
        u !== Pr && (x += "rotateY(" + u + kr),
        f !== Pr && (x += "rotateX(" + f + kr),
        (d !== Pr || h !== Pr) && (x += "skew(" + d + ", " + h + kr),
        (m !== 1 || p !== 1) && (x += "scale(" + m + ", " + p + kr),
        (v.style[Ee] = x || "translate(0, 0)");
    },
    kv = function (e, n) {
      var r = n || this,
        i = r.xPercent,
        s = r.yPercent,
        a = r.x,
        o = r.y,
        l = r.rotation,
        c = r.skewX,
        u = r.skewY,
        f = r.scaleX,
        d = r.scaleY,
        h = r.target,
        m = r.xOrigin,
        p = r.yOrigin,
        g = r.xOffset,
        y = r.yOffset,
        v = r.forceCSS,
        _ = parseFloat(a),
        x = parseFloat(o),
        S,
        w,
        C,
        P,
        O;
      (l = parseFloat(l)),
        (c = parseFloat(c)),
        (u = parseFloat(u)),
        u && ((u = parseFloat(u)), (c += u), (l += u)),
        l || c
          ? ((l *= hi),
            (c *= hi),
            (S = Math.cos(l) * f),
            (w = Math.sin(l) * f),
            (C = Math.sin(l - c) * -d),
            (P = Math.cos(l - c) * d),
            c &&
              ((u *= hi),
              (O = Math.tan(c - u)),
              (O = Math.sqrt(1 + O * O)),
              (C *= O),
              (P *= O),
              u &&
                ((O = Math.tan(u)),
                (O = Math.sqrt(1 + O * O)),
                (S *= O),
                (w *= O))),
            (S = $e(S)),
            (w = $e(w)),
            (C = $e(C)),
            (P = $e(P)))
          : ((S = f), (P = d), (w = C = 0)),
        ((_ && !~(a + "").indexOf("px")) || (x && !~(o + "").indexOf("px"))) &&
          ((_ = Jn(h, "x", a, "px")), (x = Jn(h, "y", o, "px"))),
        (m || p || g || y) &&
          ((_ = $e(_ + m - (m * S + p * C) + g)),
          (x = $e(x + p - (m * w + p * P) + y))),
        (i || s) &&
          ((O = h.getBBox()),
          (_ = $e(_ + (i / 100) * O.width)),
          (x = $e(x + (s / 100) * O.height))),
        (O =
          "matrix(" +
          S +
          "," +
          w +
          "," +
          C +
          "," +
          P +
          "," +
          _ +
          "," +
          x +
          ")"),
        h.setAttribute("transform", O),
        v && (h.style[Ee] = O);
    },
    Mv = function (e, n, r, i, s) {
      var a = 360,
        o = je(s),
        l = parseFloat(s) * (o && ~s.indexOf("rad") ? wr : 1),
        c = l - i,
        u = i + c + "deg",
        f,
        d;
      return (
        o &&
          ((f = s.split("_")[1]),
          f === "short" &&
            ((c %= a), c !== c % (a / 2) && (c += c < 0 ? a : -360)),
          f === "cw" && c < 0
            ? (c = ((c + a * Fu) % a) - ~~(c / a) * a)
            : f === "ccw" && c > 0 && (c = ((c - a * Fu) % a) - ~~(c / a) * a)),
        (e._pt = d = new Ct(e._pt, n, r, i, c, dv)),
        (d.e = u),
        (d.u = "deg"),
        e._props.push(r),
        d
      );
    },
    nf = function (e, n) {
      for (var r in n) e[r] = n[r];
      return e;
    },
    $v = function (e, n, r) {
      var i = nf({}, r._gsap),
        s = "perspective,force3D,transformOrigin,svgOrigin",
        a = r.style,
        o,
        l,
        c,
        u,
        f,
        d,
        h,
        m;
      i.svg
        ? ((c = r.getAttribute("transform")),
          r.setAttribute("transform", ""),
          (a[Ee] = n),
          (o = is(r, 1)),
          Cr(r, Ee),
          r.setAttribute("transform", c))
        : ((c = getComputedStyle(r)[Ee]),
          (a[Ee] = n),
          (o = is(r, 1)),
          (a[Ee] = c));
      for (l in Ln)
        (c = i[l]),
          (u = o[l]),
          c !== u &&
            s.indexOf(l) < 0 &&
            ((h = at(c)),
            (m = at(u)),
            (f = h !== m ? Jn(r, l, c, m) : parseFloat(c)),
            (d = parseFloat(u)),
            (e._pt = new Ct(e._pt, o, l, f, d - f, Qo)),
            (e._pt.u = m || 0),
            e._props.push(l));
      nf(o, i);
    };
  wt("padding,margin,Width,Radius", function (t, e) {
    var n = "Top",
      r = "Right",
      i = "Bottom",
      s = "Left",
      a = (e < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function (
        o
      ) {
        return e < 2 ? t + o : "border" + o + t;
      });
    aa[e > 1 ? "border" + t : t] = function (o, l, c, u, f) {
      var d, h;
      if (arguments.length < 4)
        return (
          (d = a.map(function (m) {
            return In(o, m, c);
          })),
          (h = d.join(" ")),
          h.split(d[0]).length === 5 ? d[0] : h
        );
      (d = (u + "").split(" ")),
        (h = {}),
        a.forEach(function (m, p) {
          return (h[m] = d[p] = d[p] || d[((p - 1) / 2) | 0]);
        }),
        o.init(l, h, f);
    };
  });
  var rf = {
    name: "css",
    register: el,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, n, r, i, s) {
      var a = this._props,
        o = e.style,
        l = r.vars.startAt,
        c,
        u,
        f,
        d,
        h,
        m,
        p,
        g,
        y,
        v,
        _,
        x,
        S,
        w,
        C,
        P;
      Uo || el(),
        (this.styles = this.styles || Vu(e)),
        (P = this.styles.props),
        (this.tween = r);
      for (p in n)
        if (
          p !== "autoRound" &&
          ((u = n[p]), !(Dt[p] && ku(p, n, r, i, e, s)))
        ) {
          if (
            ((h = typeof u),
            (m = aa[p]),
            h === "function" && ((u = u.call(r, i, e, s)), (h = typeof u)),
            h === "string" && ~u.indexOf("random(") && (u = Zi(u)),
            m)
          )
            m(this, e, p, u, r) && (C = 1);
          else if (p.substr(0, 2) === "--")
            (c = (getComputedStyle(e).getPropertyValue(p) + "").trim()),
              (u += ""),
              (Un.lastIndex = 0),
              Un.test(c) || ((g = at(c)), (y = at(u))),
              y ? g !== y && (c = Jn(e, p, c, y) + y) : g && (u += g),
              this.add(o, "setProperty", c, u, i, s, 0, 0, p),
              a.push(p),
              P.push(p, 0, o[p]);
          else if (h !== "undefined") {
            if (
              (l && p in l
                ? ((c =
                    typeof l[p] == "function" ? l[p].call(r, i, e, s) : l[p]),
                  je(c) && ~c.indexOf("random(") && (c = Zi(c)),
                  at(c + "") ||
                    c === "auto" ||
                    (c += Lt.units[p] || at(In(e, p)) || ""),
                  (c + "").charAt(1) === "=" && (c = In(e, p)))
                : (c = In(e, p)),
              (d = parseFloat(c)),
              (v = h === "string" && u.charAt(1) === "=" && u.substr(0, 2)),
              v && (u = u.substr(2)),
              (f = parseFloat(u)),
              p in vn &&
                (p === "autoAlpha" &&
                  (d === 1 && In(e, "visibility") === "hidden" && f && (d = 0),
                  P.push("visibility", 0, o.visibility),
                  Qn(
                    this,
                    o,
                    "visibility",
                    d ? "inherit" : "hidden",
                    f ? "inherit" : "hidden",
                    !f
                  )),
                p !== "scale" &&
                  p !== "transform" &&
                  ((p = vn[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
              (_ = p in Ln),
              _)
            ) {
              if (
                (this.styles.save(p),
                h === "string" &&
                  u.substring(0, 6) === "var(--" &&
                  ((u = jt(e, u.substring(4, u.indexOf(")")))),
                  (f = parseFloat(u))),
                x ||
                  ((S = e._gsap),
                  (S.renderTransform && !n.parseTransform) ||
                    is(e, n.parseTransform),
                  (w = n.smoothOrigin !== !1 && S.smooth),
                  (x = this._pt =
                    new Ct(this._pt, o, Ee, 0, 1, S.renderTransform, S, 0, -1)),
                  (x.dep = 1)),
                p === "scale")
              )
                (this._pt = new Ct(
                  this._pt,
                  S,
                  "scaleY",
                  S.scaleY,
                  (v ? ai(S.scaleY, v + f) : f) - S.scaleY || 0,
                  Qo
                )),
                  (this._pt.u = 0),
                  a.push("scaleY", p),
                  (p += "X");
              else if (p === "transformOrigin") {
                P.push(kt, 0, o[kt]),
                  (u = wv(u)),
                  S.svg
                    ? nl(e, u, 0, w, 0, this)
                    : ((y = parseFloat(u.split(" ")[2]) || 0),
                      y !== S.zOrigin && Qn(this, S, "zOrigin", S.zOrigin, y),
                      Qn(this, o, p, oa(c), oa(u)));
                continue;
              } else if (p === "svgOrigin") {
                nl(e, u, 1, w, 0, this);
                continue;
              } else if (p in Qu) {
                Mv(this, S, p, d, v ? ai(d, v + u) : u);
                continue;
              } else if (p === "smoothOrigin") {
                Qn(this, S, "smooth", S.smooth, u);
                continue;
              } else if (p === "force3D") {
                S[p] = u;
                continue;
              } else if (p === "transform") {
                $v(this, u, e);
                continue;
              }
            } else p in o || (p = mi(p) || p);
            if (
              _ ||
              ((f || f === 0) && (d || d === 0) && !fv.test(u) && p in o)
            )
              (g = (c + "").substr((d + "").length)),
                f || (f = 0),
                (y = at(u) || (p in Lt.units ? Lt.units[p] : g)),
                g !== y && (d = Jn(e, p, c, y)),
                (this._pt = new Ct(
                  this._pt,
                  _ ? S : o,
                  p,
                  d,
                  (v ? ai(d, v + f) : f) - d,
                  !_ && (y === "px" || p === "zIndex") && n.autoRound !== !1
                    ? pv
                    : Qo
                )),
                (this._pt.u = y || 0),
                g !== y && y !== "%" && ((this._pt.b = c), (this._pt.r = hv));
            else if (p in o) Ev.call(this, e, p, c, v ? v + u : u);
            else if (p in e) this.add(e, p, c || e[p], v ? v + u : u, i, s);
            else if (p !== "parseTransform") {
              wo(p, u);
              continue;
            }
            _ ||
              (p in o
                ? P.push(p, 0, o[p])
                : typeof e[p] == "function"
                ? P.push(p, 2, e[p]())
                : P.push(p, 1, c || e[p])),
              a.push(p);
          }
        }
      C && Iu(this);
    },
    render: function (e, n) {
      if (n.tween._time || !Ko())
        for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next);
      else n.styles.revert();
    },
    get: In,
    aliases: vn,
    getSetter: function (e, n, r) {
      var i = vn[n];
      return (
        i && i.indexOf(",") < 0 && (n = i),
        n in Ln && n !== kt && (e._gsap.x || In(e, "x"))
          ? r && Nu === r
            ? n === "scale"
              ? yv
              : vv
            : (Nu = r || {}) && (n === "scale" ? _v : bv)
          : e.style && !_o(e.style[n])
          ? mv
          : ~n.indexOf("-")
          ? gv
          : Wo(e, n)
      );
    },
    core: { _removeProperty: Cr, _getMatrix: tl },
  };
  (Pt.utils.checkPrefix = mi),
    (Pt.core.getStyleSaver = Vu),
    (function (t, e, n, r) {
      var i = wt(t + "," + e + "," + n, function (s) {
        Ln[s] = 1;
      });
      wt(e, function (s) {
        (Lt.units[s] = "deg"), (Qu[s] = 1);
      }),
        (vn[i[13]] = t + "," + e),
        wt(r, function (s) {
          var a = s.split(":");
          vn[a[1]] = i[a[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    wt(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        Lt.units[t] = "px";
      }
    ),
    Pt.registerPlugin(rf);
  var N = Pt.registerPlugin(rf) || Pt;
  N.core.Tween;
  function Ov(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  function Av(t, e, n) {
    return e && Ov(t.prototype, e), t;
  }
  /*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var tt,
    la,
    Ft,
    er,
    tr,
    gi,
    sf,
    Mr,
    as,
    af,
    Dn,
    tn,
    of,
    lf = function () {
      return (
        tt ||
        (typeof window != "undefined" &&
          (tt = window.gsap) &&
          tt.registerPlugin &&
          tt)
      );
    },
    cf = 1,
    vi = [],
    ie = [],
    yn = [],
    os = Date.now,
    il = function (e, n) {
      return n;
    },
    Lv = function () {
      var e = as.core,
        n = e.bridge || {},
        r = e._scrollers,
        i = e._proxies;
      r.push.apply(r, ie),
        i.push.apply(i, yn),
        (ie = r),
        (yn = i),
        (il = function (a, o) {
          return n[a](o);
        });
    },
    nr = function (e, n) {
      return ~yn.indexOf(e) && yn[yn.indexOf(e) + 1][n];
    },
    ls = function (e) {
      return !!~af.indexOf(e);
    },
    gt = function (e, n, r, i, s) {
      return e.addEventListener(n, r, { passive: i !== !1, capture: !!s });
    },
    vt = function (e, n, r, i) {
      return e.removeEventListener(n, r, !!i);
    },
    ca = "scrollLeft",
    ua = "scrollTop",
    sl = function () {
      return (Dn && Dn.isPressed) || ie.cache++;
    },
    fa = function (e, n) {
      var r = function i(s) {
        if (s || s === 0) {
          cf && (Ft.history.scrollRestoration = "manual");
          var a = Dn && Dn.isPressed;
          (s = i.v = Math.round(s) || (Dn && Dn.iOS ? 1 : 0)),
            e(s),
            (i.cacheID = ie.cache),
            a && il("ss", s);
        } else
          (n || ie.cache !== i.cacheID || il("ref")) &&
            ((i.cacheID = ie.cache), (i.v = e()));
        return i.v + i.offset;
      };
      return (r.offset = 0), e && r;
    },
    yt = {
      s: ca,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: fa(function (t) {
        return arguments.length
          ? Ft.scrollTo(t, Xe.sc())
          : Ft.pageXOffset || er[ca] || tr[ca] || gi[ca] || 0;
      }),
    },
    Xe = {
      s: ua,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: yt,
      sc: fa(function (t) {
        return arguments.length
          ? Ft.scrollTo(yt.sc(), t)
          : Ft.pageYOffset || er[ua] || tr[ua] || gi[ua] || 0;
      }),
    },
    Mt = function (e, n) {
      return (
        ((n && n._ctx && n._ctx.selector) || tt.utils.toArray)(e)[0] ||
        (typeof e == "string" && tt.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    Iv = function (e, n) {
      for (var r = n.length; r--; )
        if (n[r] === e || n[r].contains(e)) return !0;
      return !1;
    },
    rr = function (e, n) {
      var r = n.s,
        i = n.sc;
      ls(e) && (e = er.scrollingElement || tr);
      var s = ie.indexOf(e),
        a = i === Xe.sc ? 1 : 2;
      !~s && (s = ie.push(e) - 1), ie[s + a] || gt(e, "scroll", sl);
      var o = ie[s + a],
        l =
          o ||
          (ie[s + a] =
            fa(nr(e, r), !0) ||
            (ls(e)
              ? i
              : fa(function (c) {
                  return arguments.length ? (e[r] = c) : e[r];
                })));
      return (
        (l.target = e),
        o || (l.smooth = tt.getProperty(e, "scrollBehavior") === "smooth"),
        l
      );
    },
    al = function (e, n, r) {
      var i = e,
        s = e,
        a = os(),
        o = a,
        l = n || 50,
        c = Math.max(500, l * 3),
        u = function (m, p) {
          var g = os();
          p || g - a > l
            ? ((s = i), (i = m), (o = a), (a = g))
            : r
            ? (i += m)
            : (i = s + ((m - s) / (g - o)) * (a - o));
        },
        f = function () {
          (s = i = r ? 0 : i), (o = a = 0);
        },
        d = function (m) {
          var p = o,
            g = s,
            y = os();
          return (
            (m || m === 0) && m !== i && u(m),
            a === o || y - o > c
              ? 0
              : ((i + (r ? g : -g)) / ((r ? y : a) - p)) * 1e3
          );
        };
      return { update: u, reset: f, getVelocity: d };
    },
    cs = function (e, n) {
      return (
        n && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    uf = function (e) {
      var n = Math.max.apply(Math, e),
        r = Math.min.apply(Math, e);
      return Math.abs(n) >= Math.abs(r) ? n : r;
    },
    ff = function () {
      (as = tt.core.globals().ScrollTrigger), as && as.core && Lv();
    },
    df = function (e) {
      return (
        (tt = e || lf()),
        !la &&
          tt &&
          typeof document != "undefined" &&
          document.body &&
          ((Ft = window),
          (er = document),
          (tr = er.documentElement),
          (gi = er.body),
          (af = [Ft, er, tr, gi]),
          tt.utils.clamp,
          (of = tt.core.context || function () {}),
          (Mr = "onpointerenter" in gi ? "pointer" : "mouse"),
          (sf = Oe.isTouch =
            Ft.matchMedia &&
            Ft.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Ft ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (tn = Oe.eventTypes =
            (
              "ontouchstart" in tr
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in tr
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (cf = 0);
          }, 500),
          ff(),
          (la = 1)),
        la
      );
    };
  (yt.op = Xe), (ie.cache = 0);
  var Oe = (function () {
    function t(n) {
      this.init(n);
    }
    var e = t.prototype;
    return (
      (e.init = function (r) {
        la || df(tt) || console.warn("Please gsap.registerPlugin(Observer)"),
          as || ff();
        var i = r.tolerance,
          s = r.dragMinimum,
          a = r.type,
          o = r.target,
          l = r.lineHeight,
          c = r.debounce,
          u = r.preventDefault,
          f = r.onStop,
          d = r.onStopDelay,
          h = r.ignore,
          m = r.wheelSpeed,
          p = r.event,
          g = r.onDragStart,
          y = r.onDragEnd,
          v = r.onDrag,
          _ = r.onPress,
          x = r.onRelease,
          S = r.onRight,
          w = r.onLeft,
          C = r.onUp,
          P = r.onDown,
          O = r.onChangeX,
          T = r.onChangeY,
          M = r.onChange,
          b = r.onToggleX,
          E = r.onToggleY,
          A = r.onHover,
          L = r.onHoverEnd,
          k = r.onMove,
          I = r.ignoreCheck,
          D = r.isNormalizer,
          R = r.onGestureStart,
          $ = r.onGestureEnd,
          H = r.onWheel,
          Y = r.onEnable,
          le = r.onDisable,
          re = r.onClick,
          U = r.scrollSpeed,
          K = r.capture,
          he = r.allowClicks,
          me = r.lockAxis,
          we = r.onLockAxis;
        (this.target = o = Mt(o) || tr),
          (this.vars = r),
          h && (h = tt.utils.toArray(h)),
          (i = i || 1e-9),
          (s = s || 0),
          (m = m || 1),
          (U = U || 1),
          (a = a || "wheel,touch,pointer"),
          (c = c !== !1),
          l || (l = parseFloat(Ft.getComputedStyle(gi).lineHeight) || 22);
        var Le,
          pe,
          Ce,
          W,
          te,
          Ie,
          De,
          z = this,
          ze = 0,
          an = 0,
          Qt = r.passive || (!u && r.passive !== !1),
          V = rr(o, yt),
          Jt = rr(o, Xe),
          hr = V(),
          jr = Jt(),
          Ze =
            ~a.indexOf("touch") &&
            !~a.indexOf("pointer") &&
            tn[0] === "pointerdown",
          pr = ls(o),
          Re = o.ownerDocument || er,
          on = [0, 0, 0],
          en = [0, 0, 0],
          qn = 0,
          Ds = function () {
            return (qn = os());
          },
          Ve = function (j, fe) {
            return (
              ((z.event = j) && h && Iv(j.target, h)) ||
              (fe && Ze && j.pointerType !== "touch") ||
              (I && I(j, fe))
            );
          },
          Ja = function () {
            z._vx.reset(), z._vy.reset(), pe.pause(), f && f(z);
          },
          Hn = function () {
            var j = (z.deltaX = uf(on)),
              fe = (z.deltaY = uf(en)),
              B = Math.abs(j) >= i,
              Q = Math.abs(fe) >= i;
            M && (B || Q) && M(z, j, fe, on, en),
              B &&
                (S && z.deltaX > 0 && S(z),
                w && z.deltaX < 0 && w(z),
                O && O(z),
                b && z.deltaX < 0 != ze < 0 && b(z),
                (ze = z.deltaX),
                (on[0] = on[1] = on[2] = 0)),
              Q &&
                (P && z.deltaY > 0 && P(z),
                C && z.deltaY < 0 && C(z),
                T && T(z),
                E && z.deltaY < 0 != an < 0 && E(z),
                (an = z.deltaY),
                (en[0] = en[1] = en[2] = 0)),
              (W || Ce) &&
                (k && k(z),
                Ce && (g && Ce === 1 && g(z), v && v(z), (Ce = 0)),
                (W = !1)),
              Ie && !(Ie = !1) && we && we(z),
              te && (H(z), (te = !1)),
              (Le = 0);
          },
          Di = function (j, fe, B) {
            (on[B] += j),
              (en[B] += fe),
              z._vx.update(j),
              z._vy.update(fe),
              c ? Le || (Le = requestAnimationFrame(Hn)) : Hn();
          },
          zi = function (j, fe) {
            me &&
              !De &&
              ((z.axis = De = Math.abs(j) > Math.abs(fe) ? "x" : "y"),
              (Ie = !0)),
              De !== "y" && ((on[2] += j), z._vx.update(j, !0)),
              De !== "x" && ((en[2] += fe), z._vy.update(fe, !0)),
              c ? Le || (Le = requestAnimationFrame(Hn)) : Hn();
          },
          mr = function (j) {
            if (!Ve(j, 1)) {
              j = cs(j, u);
              var fe = j.clientX,
                B = j.clientY,
                Q = fe - z.x,
                G = B - z.y,
                J = z.isDragging;
              (z.x = fe),
                (z.y = B),
                (J ||
                  ((Q || G) &&
                    (Math.abs(z.startX - fe) >= s ||
                      Math.abs(z.startY - B) >= s))) &&
                  ((Ce = J ? 2 : 1), J || (z.isDragging = !0), zi(Q, G));
            }
          },
          Ur = (z.onPress = function (ee) {
            Ve(ee, 1) ||
              (ee && ee.button) ||
              ((z.axis = De = null),
              pe.pause(),
              (z.isPressed = !0),
              (ee = cs(ee)),
              (ze = an = 0),
              (z.startX = z.x = ee.clientX),
              (z.startY = z.y = ee.clientY),
              z._vx.reset(),
              z._vy.reset(),
              gt(D ? o : Re, tn[1], mr, Qt, !0),
              (z.deltaX = z.deltaY = 0),
              _ && _(z));
          }),
          ae = (z.onRelease = function (ee) {
            if (!Ve(ee, 1)) {
              vt(D ? o : Re, tn[1], mr, !0);
              var j = !isNaN(z.y - z.startY),
                fe = z.isDragging,
                B =
                  fe &&
                  (Math.abs(z.x - z.startX) > 3 ||
                    Math.abs(z.y - z.startY) > 3),
                Q = cs(ee);
              !B &&
                j &&
                (z._vx.reset(),
                z._vy.reset(),
                u &&
                  he &&
                  tt.delayedCall(0.08, function () {
                    if (os() - qn > 300 && !ee.defaultPrevented) {
                      if (ee.target.click) ee.target.click();
                      else if (Re.createEvent) {
                        var G = Re.createEvent("MouseEvents");
                        G.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Ft,
                          1,
                          Q.screenX,
                          Q.screenY,
                          Q.clientX,
                          Q.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          ee.target.dispatchEvent(G);
                      }
                    }
                  })),
                (z.isDragging = z.isGesturing = z.isPressed = !1),
                f && fe && !D && pe.restart(!0),
                Ce && Hn(),
                y && fe && y(z),
                x && x(z, B);
            }
          }),
          Kr = function (j) {
            return (
              j.touches &&
              j.touches.length > 1 &&
              (z.isGesturing = !0) &&
              R(j, z.isDragging)
            );
          },
          ln = function () {
            return (z.isGesturing = !1) || $(z);
          },
          cn = function (j) {
            if (!Ve(j)) {
              var fe = V(),
                B = Jt();
              Di((fe - hr) * U, (B - jr) * U, 1),
                (hr = fe),
                (jr = B),
                f && pe.restart(!0);
            }
          },
          un = function (j) {
            if (!Ve(j)) {
              (j = cs(j, u)), H && (te = !0);
              var fe =
                (j.deltaMode === 1
                  ? l
                  : j.deltaMode === 2
                  ? Ft.innerHeight
                  : 1) * m;
              Di(j.deltaX * fe, j.deltaY * fe, 0), f && !D && pe.restart(!0);
            }
          },
          Zr = function (j) {
            if (!Ve(j)) {
              var fe = j.clientX,
                B = j.clientY,
                Q = fe - z.x,
                G = B - z.y;
              (z.x = fe),
                (z.y = B),
                (W = !0),
                f && pe.restart(!0),
                (Q || G) && zi(Q, G);
            }
          },
          Ri = function (j) {
            (z.event = j), A(z);
          },
          Vn = function (j) {
            (z.event = j), L(z);
          },
          zs = function (j) {
            return Ve(j) || (cs(j, u) && re(z));
          };
        (pe = z._dc = tt.delayedCall(d || 0.25, Ja).pause()),
          (z.deltaX = z.deltaY = 0),
          (z._vx = al(0, 50, !0)),
          (z._vy = al(0, 50, !0)),
          (z.scrollX = V),
          (z.scrollY = Jt),
          (z.isDragging = z.isGesturing = z.isPressed = !1),
          of(this),
          (z.enable = function (ee) {
            return (
              z.isEnabled ||
                (gt(pr ? Re : o, "scroll", sl),
                a.indexOf("scroll") >= 0 &&
                  gt(pr ? Re : o, "scroll", cn, Qt, K),
                a.indexOf("wheel") >= 0 && gt(o, "wheel", un, Qt, K),
                ((a.indexOf("touch") >= 0 && sf) ||
                  a.indexOf("pointer") >= 0) &&
                  (gt(o, tn[0], Ur, Qt, K),
                  gt(Re, tn[2], ae),
                  gt(Re, tn[3], ae),
                  he && gt(o, "click", Ds, !0, !0),
                  re && gt(o, "click", zs),
                  R && gt(Re, "gesturestart", Kr),
                  $ && gt(Re, "gestureend", ln),
                  A && gt(o, Mr + "enter", Ri),
                  L && gt(o, Mr + "leave", Vn),
                  k && gt(o, Mr + "move", Zr)),
                (z.isEnabled = !0),
                (z.isDragging = z.isGesturing = z.isPressed = W = Ce = !1),
                z._vx.reset(),
                z._vy.reset(),
                (hr = V()),
                (jr = Jt()),
                ee && ee.type && Ur(ee),
                Y && Y(z)),
              z
            );
          }),
          (z.disable = function () {
            z.isEnabled &&
              (vi.filter(function (ee) {
                return ee !== z && ls(ee.target);
              }).length || vt(pr ? Re : o, "scroll", sl),
              z.isPressed &&
                (z._vx.reset(), z._vy.reset(), vt(D ? o : Re, tn[1], mr, !0)),
              vt(pr ? Re : o, "scroll", cn, K),
              vt(o, "wheel", un, K),
              vt(o, tn[0], Ur, K),
              vt(Re, tn[2], ae),
              vt(Re, tn[3], ae),
              vt(o, "click", Ds, !0),
              vt(o, "click", zs),
              vt(Re, "gesturestart", Kr),
              vt(Re, "gestureend", ln),
              vt(o, Mr + "enter", Ri),
              vt(o, Mr + "leave", Vn),
              vt(o, Mr + "move", Zr),
              (z.isEnabled = z.isPressed = z.isDragging = !1),
              le && le(z));
          }),
          (z.kill = z.revert =
            function () {
              z.disable();
              var ee = vi.indexOf(z);
              ee >= 0 && vi.splice(ee, 1), Dn === z && (Dn = 0);
            }),
          vi.push(z),
          D && ls(o) && (Dn = z),
          z.enable(p);
      }),
      Av(t, [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]),
      t
    );
  })();
  (Oe.version = "3.13.0"),
    (Oe.create = function (t) {
      return new Oe(t);
    }),
    (Oe.register = df),
    (Oe.getAll = function () {
      return vi.slice();
    }),
    (Oe.getById = function (t) {
      return vi.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    lf() && tt.registerPlugin(Oe);
  /*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var q,
    yi,
    se,
    _e,
    Bt,
    de,
    ol,
    da,
    us,
    fs,
    ds,
    ha,
    ot,
    pa,
    ll,
    _t,
    hf,
    pf,
    _i,
    mf,
    cl,
    gf,
    bt,
    ul,
    vf,
    yf,
    ir,
    fl,
    dl,
    bi,
    hl,
    ma,
    pl,
    ml,
    ga = 1,
    lt = Date.now,
    gl = lt(),
    Ut = 0,
    hs = 0,
    _f = function (e, n, r) {
      var i = qt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (r["_" + n + "Clamp"] = i), i ? e.substr(6, e.length - 7) : e;
    },
    bf = function (e, n) {
      return n && (!qt(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    Dv = function t() {
      return hs && requestAnimationFrame(t);
    },
    xf = function () {
      return (pa = 1);
    },
    Sf = function () {
      return (pa = 0);
    },
    _n = function (e) {
      return e;
    },
    ps = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Tf = function () {
      return typeof window != "undefined";
    },
    Ef = function () {
      return q || (Tf() && (q = window.gsap) && q.registerPlugin && q);
    },
    $r = function (e) {
      return !!~ol.indexOf(e);
    },
    wf = function (e) {
      return (
        (e === "Height" ? hl : se["inner" + e]) ||
        Bt["client" + e] ||
        de["client" + e]
      );
    },
    Cf = function (e) {
      return (
        nr(e, "getBoundingClientRect") ||
        ($r(e)
          ? function () {
              return (Ma.width = se.innerWidth), (Ma.height = hl), Ma;
            }
          : function () {
              return zn(e);
            })
      );
    },
    zv = function (e, n, r) {
      var i = r.d,
        s = r.d2,
        a = r.a;
      return (a = nr(e, "getBoundingClientRect"))
        ? function () {
            return a()[i];
          }
        : function () {
            return (n ? wf(s) : e["client" + s]) || 0;
          };
    },
    Rv = function (e, n) {
      return !n || ~yn.indexOf(e)
        ? Cf(e)
        : function () {
            return Ma;
          };
    },
    bn = function (e, n) {
      var r = n.s,
        i = n.d2,
        s = n.d,
        a = n.a;
      return Math.max(
        0,
        (r = "scroll" + i) && (a = nr(e, r))
          ? a() - Cf(e)()[s]
          : $r(e)
          ? (Bt[r] || de[r]) - wf(i)
          : e[r] - e["offset" + i]
      );
    },
    va = function (e, n) {
      for (var r = 0; r < _i.length; r += 3)
        (!n || ~n.indexOf(_i[r + 1])) && e(_i[r], _i[r + 1], _i[r + 2]);
    },
    qt = function (e) {
      return typeof e == "string";
    },
    ct = function (e) {
      return typeof e == "function";
    },
    ms = function (e) {
      return typeof e == "number";
    },
    Or = function (e) {
      return typeof e == "object";
    },
    gs = function (e, n, r) {
      return e && e.progress(n ? 0 : 1) && r && e.pause();
    },
    vl = function (e, n) {
      if (e.enabled) {
        var r = e._ctx
          ? e._ctx.add(function () {
              return n(e);
            })
          : n(e);
        r && r.totalTime && (e.callbackAnimation = r);
      }
    },
    xi = Math.abs,
    Pf = "left",
    kf = "top",
    yl = "right",
    _l = "bottom",
    Ar = "width",
    Lr = "height",
    vs = "Right",
    ys = "Left",
    _s = "Top",
    bs = "Bottom",
    He = "padding",
    Kt = "margin",
    Si = "Width",
    bl = "Height",
    Ye = "px",
    Zt = function (e) {
      return se.getComputedStyle(e);
    },
    Nv = function (e) {
      var n = Zt(e).position;
      e.style.position = n === "absolute" || n === "fixed" ? n : "relative";
    },
    Mf = function (e, n) {
      for (var r in n) r in e || (e[r] = n[r]);
      return e;
    },
    zn = function (e, n) {
      var r =
          n &&
          Zt(e)[ll] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          q
            .to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0,
            })
            .progress(1),
        i = e.getBoundingClientRect();
      return r && r.progress(0).kill(), i;
    },
    ya = function (e, n) {
      var r = n.d2;
      return e["offset" + r] || e["client" + r] || 0;
    },
    $f = function (e) {
      var n = [],
        r = e.labels,
        i = e.duration(),
        s;
      for (s in r) n.push(r[s] / i);
      return n;
    },
    Fv = function (e) {
      return function (n) {
        return q.utils.snap($f(e), n);
      };
    },
    xl = function (e) {
      var n = q.utils.snap(e),
        r =
          Array.isArray(e) &&
          e.slice(0).sort(function (i, s) {
            return i - s;
          });
      return r
        ? function (i, s, a) {
            a === void 0 && (a = 0.001);
            var o;
            if (!s) return n(i);
            if (s > 0) {
              for (i -= a, o = 0; o < r.length; o++) if (r[o] >= i) return r[o];
              return r[o - 1];
            } else for (o = r.length, i += a; o--; ) if (r[o] <= i) return r[o];
            return r[0];
          }
        : function (i, s, a) {
            a === void 0 && (a = 0.001);
            var o = n(i);
            return !s || Math.abs(o - i) < a || o - i < 0 == s < 0
              ? o
              : n(s < 0 ? i - e : i + e);
          };
    },
    Bv = function (e) {
      return function (n, r) {
        return xl($f(e))(n, r.direction);
      };
    },
    _a = function (e, n, r, i) {
      return r.split(",").forEach(function (s) {
        return e(n, s, i);
      });
    },
    Ue = function (e, n, r, i, s) {
      return e.addEventListener(n, r, { passive: !i, capture: !!s });
    },
    Ke = function (e, n, r, i) {
      return e.removeEventListener(n, r, !!i);
    },
    ba = function (e, n, r) {
      (r = r && r.wheelHandler), r && (e(n, "wheel", r), e(n, "touchmove", r));
    },
    Of = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    xa = { toggleActions: "play", anticipatePin: 0 },
    Sa = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Ta = function (e, n) {
      if (qt(e)) {
        var r = e.indexOf("="),
          i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
        ~r && (e.indexOf("%") > r && (i *= n / 100), (e = e.substr(0, r - 1))),
          (e =
            i +
            (e in Sa
              ? Sa[e] * n
              : ~e.indexOf("%")
              ? (parseFloat(e) * n) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    Ea = function (e, n, r, i, s, a, o, l) {
      var c = s.startColor,
        u = s.endColor,
        f = s.fontSize,
        d = s.indent,
        h = s.fontWeight,
        m = _e.createElement("div"),
        p = $r(r) || nr(r, "pinType") === "fixed",
        g = e.indexOf("scroller") !== -1,
        y = p ? de : r,
        v = e.indexOf("start") !== -1,
        _ = v ? c : u,
        x =
          "border-color:" +
          _ +
          ";font-size:" +
          f +
          ";color:" +
          _ +
          ";font-weight:" +
          h +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (x += "position:" + ((g || l) && p ? "fixed;" : "absolute;")),
        (g || l || !p) &&
          (x += (i === Xe ? yl : _l) + ":" + (a + parseFloat(d)) + "px;"),
        o &&
          (x +=
            "box-sizing:border-box;text-align:left;width:" +
            o.offsetWidth +
            "px;"),
        (m._isStart = v),
        m.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")),
        (m.style.cssText = x),
        (m.innerText = n || n === 0 ? e + "-" + n : e),
        y.children[0] ? y.insertBefore(m, y.children[0]) : y.appendChild(m),
        (m._offset = m["offset" + i.op.d2]),
        wa(m, 0, i, v),
        m
      );
    },
    wa = function (e, n, r, i) {
      var s = { display: "block" },
        a = r[i ? "os2" : "p2"],
        o = r[i ? "p2" : "os2"];
      (e._isFlipped = i),
        (s[r.a + "Percent"] = i ? -100 : 0),
        (s[r.a] = i ? "1px" : 0),
        (s["border" + a + Si] = 1),
        (s["border" + o + Si] = 0),
        (s[r.p] = n + "px"),
        q.set(e, s);
    },
    ne = [],
    Sl = {},
    xs,
    Af = function () {
      return lt() - Ut > 34 && (xs || (xs = requestAnimationFrame(Rn)));
    },
    Ti = function () {
      (!bt || !bt.isPressed || bt.startX > de.clientWidth) &&
        (ie.cache++,
        bt ? xs || (xs = requestAnimationFrame(Rn)) : Rn(),
        Ut || Dr("scrollStart"),
        (Ut = lt()));
    },
    Tl = function () {
      (yf = se.innerWidth), (vf = se.innerHeight);
    },
    Ss = function (e) {
      ie.cache++,
        (e === !0 ||
          (!ot &&
            !gf &&
            !_e.fullscreenElement &&
            !_e.webkitFullscreenElement &&
            (!ul ||
              yf !== se.innerWidth ||
              Math.abs(se.innerHeight - vf) > se.innerHeight * 0.25))) &&
          da.restart(!0);
    },
    Ir = {},
    qv = [],
    Lf = function t() {
      return Ke(Z, "scrollEnd", t) || Rr(!0);
    },
    Dr = function (e) {
      return (
        (Ir[e] &&
          Ir[e].map(function (n) {
            return n();
          })) ||
        qv
      );
    },
    Ht = [],
    If = function (e) {
      for (var n = 0; n < Ht.length; n += 5)
        (!e || (Ht[n + 4] && Ht[n + 4].query === e)) &&
          ((Ht[n].style.cssText = Ht[n + 1]),
          Ht[n].getBBox && Ht[n].setAttribute("transform", Ht[n + 2] || ""),
          (Ht[n + 3].uncache = 1));
    },
    El = function (e, n) {
      var r;
      for (_t = 0; _t < ne.length; _t++)
        (r = ne[_t]),
          r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
      (ma = !0), n && If(n), n || Dr("revert");
    },
    Df = function (e, n) {
      ie.cache++,
        (n || !xt) &&
          ie.forEach(function (r) {
            return ct(r) && r.cacheID++ && (r.rec = 0);
          }),
        qt(e) && (se.history.scrollRestoration = dl = e);
    },
    xt,
    zr = 0,
    zf,
    Hv = function () {
      if (zf !== zr) {
        var e = (zf = zr);
        requestAnimationFrame(function () {
          return e === zr && Rr(!0);
        });
      }
    },
    Rf = function () {
      de.appendChild(bi),
        (hl = (!bt && bi.offsetHeight) || se.innerHeight),
        de.removeChild(bi);
    },
    Nf = function (e) {
      return us(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (n) {
        return (n.style.display = e ? "none" : "block");
      });
    },
    Rr = function (e, n) {
      if (
        ((Bt = _e.documentElement),
        (de = _e.body),
        (ol = [se, _e, Bt, de]),
        Ut && !e && !ma)
      ) {
        Ue(Z, "scrollEnd", Lf);
        return;
      }
      Rf(),
        (xt = Z.isRefreshing = !0),
        ie.forEach(function (i) {
          return ct(i) && ++i.cacheID && (i.rec = i());
        });
      var r = Dr("refreshInit");
      mf && Z.sort(),
        n || El(),
        ie.forEach(function (i) {
          ct(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
        }),
        ne.slice(0).forEach(function (i) {
          return i.refresh();
        }),
        (ma = !1),
        ne.forEach(function (i) {
          if (i._subPinOffset && i.pin) {
            var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
              a = i.pin[s];
            i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - a), i.refresh();
          }
        }),
        (pl = 1),
        Nf(!0),
        ne.forEach(function (i) {
          var s = bn(i.scroller, i._dir),
            a = i.vars.end === "max" || (i._endClamp && i.end > s),
            o = i._startClamp && i.start >= s;
          (a || o) &&
            i.setPositions(
              o ? s - 1 : i.start,
              a ? Math.max(o ? s : i.start + 1, s) : i.end,
              !0
            );
        }),
        Nf(!1),
        (pl = 0),
        r.forEach(function (i) {
          return i && i.render && i.render(-1);
        }),
        ie.forEach(function (i) {
          ct(i) &&
            (i.smooth &&
              requestAnimationFrame(function () {
                return (i.target.style.scrollBehavior = "smooth");
              }),
            i.rec && i(i.rec));
        }),
        Df(dl, 1),
        da.pause(),
        zr++,
        (xt = 2),
        Rn(2),
        ne.forEach(function (i) {
          return ct(i.vars.onRefresh) && i.vars.onRefresh(i);
        }),
        (xt = Z.isRefreshing = !1),
        Dr("refresh");
    },
    wl = 0,
    Ca = 1,
    Ts,
    Rn = function (e) {
      if (e === 2 || (!xt && !ma)) {
        (Z.isUpdating = !0), Ts && Ts.update(0);
        var n = ne.length,
          r = lt(),
          i = r - gl >= 50,
          s = n && ne[0].scroll();
        if (
          ((Ca = wl > s ? -1 : 1),
          xt || (wl = s),
          i &&
            (Ut && !pa && r - Ut > 200 && ((Ut = 0), Dr("scrollEnd")),
            (ds = gl),
            (gl = r)),
          Ca < 0)
        ) {
          for (_t = n; _t-- > 0; ) ne[_t] && ne[_t].update(0, i);
          Ca = 1;
        } else for (_t = 0; _t < n; _t++) ne[_t] && ne[_t].update(0, i);
        Z.isUpdating = !1;
      }
      xs = 0;
    },
    Cl = [
      Pf,
      kf,
      _l,
      yl,
      Kt + bs,
      Kt + vs,
      Kt + _s,
      Kt + ys,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    Pa = Cl.concat([
      Ar,
      Lr,
      "boxSizing",
      "max" + Si,
      "max" + bl,
      "position",
      Kt,
      He,
      He + _s,
      He + vs,
      He + bs,
      He + ys,
    ]),
    Vv = function (e, n, r) {
      Ei(r);
      var i = e._gsap;
      if (i.spacerIsNative) Ei(i.spacerState);
      else if (e._gsap.swappedIn) {
        var s = n.parentNode;
        s && (s.insertBefore(e, n), s.removeChild(n));
      }
      e._gsap.swappedIn = !1;
    },
    Pl = function (e, n, r, i) {
      if (!e._gsap.swappedIn) {
        for (var s = Cl.length, a = n.style, o = e.style, l; s--; )
          (l = Cl[s]), (a[l] = r[l]);
        (a.position = r.position === "absolute" ? "absolute" : "relative"),
          r.display === "inline" && (a.display = "inline-block"),
          (o[_l] = o[yl] = "auto"),
          (a.flexBasis = r.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[Ar] = ya(e, yt) + Ye),
          (a[Lr] = ya(e, Xe) + Ye),
          (a[He] = o[Kt] = o[kf] = o[Pf] = "0"),
          Ei(i),
          (o[Ar] = o["max" + Si] = r[Ar]),
          (o[Lr] = o["max" + bl] = r[Lr]),
          (o[He] = r[He]),
          e.parentNode !== n &&
            (e.parentNode.insertBefore(n, e), n.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    Wv = /([A-Z])/g,
    Ei = function (e) {
      if (e) {
        var n = e.t.style,
          r = e.length,
          i = 0,
          s,
          a;
        for ((e.t._gsap || q.core.getCache(e.t)).uncache = 1; i < r; i += 2)
          (a = e[i + 1]),
            (s = e[i]),
            a
              ? (n[s] = a)
              : n[s] && n.removeProperty(s.replace(Wv, "-$1").toLowerCase());
      }
    },
    ka = function (e) {
      for (var n = Pa.length, r = e.style, i = [], s = 0; s < n; s++)
        i.push(Pa[s], r[Pa[s]]);
      return (i.t = e), i;
    },
    Xv = function (e, n, r) {
      for (var i = [], s = e.length, a = r ? 8 : 0, o; a < s; a += 2)
        (o = e[a]), i.push(o, o in n ? n[o] : e[a + 1]);
      return (i.t = e.t), i;
    },
    Ma = { left: 0, top: 0 },
    Ff = function (e, n, r, i, s, a, o, l, c, u, f, d, h, m) {
      ct(e) && (e = e(l)),
        qt(e) &&
          e.substr(0, 3) === "max" &&
          (e = d + (e.charAt(4) === "=" ? Ta("0" + e.substr(3), r) : 0));
      var p = h ? h.time() : 0,
        g,
        y,
        v;
      if ((h && h.seek(0), isNaN(e) || (e = +e), ms(e)))
        h &&
          (e = q.utils.mapRange(
            h.scrollTrigger.start,
            h.scrollTrigger.end,
            0,
            d,
            e
          )),
          o && wa(o, r, i, !0);
      else {
        ct(n) && (n = n(l));
        var _ = (e || "0").split(" "),
          x,
          S,
          w,
          C;
        (v = Mt(n, l) || de),
          (x = zn(v) || {}),
          (!x || (!x.left && !x.top)) &&
            Zt(v).display === "none" &&
            ((C = v.style.display),
            (v.style.display = "block"),
            (x = zn(v)),
            C ? (v.style.display = C) : v.style.removeProperty("display")),
          (S = Ta(_[0], x[i.d])),
          (w = Ta(_[1] || "0", r)),
          (e = x[i.p] - c[i.p] - u + S + s - w),
          o && wa(o, w, i, r - w < 20 || (o._isStart && w > 20)),
          (r -= r - w);
      }
      if ((m && ((l[m] = e || -0.001), e < 0 && (e = 0)), a)) {
        var P = e + r,
          O = a._isStart;
        (g = "scroll" + i.d2),
          wa(
            a,
            P,
            i,
            (O && P > 20) ||
              (!O && (f ? Math.max(de[g], Bt[g]) : a.parentNode[g]) <= P + 1)
          ),
          f &&
            ((c = zn(o)),
            f && (a.style[i.op.p] = c[i.op.p] - i.op.m - a._offset + Ye));
      }
      return (
        h &&
          v &&
          ((g = zn(v)),
          h.seek(d),
          (y = zn(v)),
          (h._caScrollDist = g[i.p] - y[i.p]),
          (e = (e / h._caScrollDist) * d)),
        h && h.seek(p),
        h ? e : Math.round(e)
      );
    },
    Yv = /(webkit|moz|length|cssText|inset)/i,
    Bf = function (e, n, r, i) {
      if (e.parentNode !== n) {
        var s = e.style,
          a,
          o;
        if (n === de) {
          (e._stOrig = s.cssText), (o = Zt(e));
          for (a in o)
            !+a &&
              !Yv.test(a) &&
              o[a] &&
              typeof s[a] == "string" &&
              a !== "0" &&
              (s[a] = o[a]);
          (s.top = r), (s.left = i);
        } else s.cssText = e._stOrig;
        (q.core.getCache(e).uncache = 1), n.appendChild(e);
      }
    },
    qf = function (e, n, r) {
      var i = n,
        s = i;
      return function (a) {
        var o = Math.round(e());
        return (
          o !== i &&
            o !== s &&
            Math.abs(o - i) > 3 &&
            Math.abs(o - s) > 3 &&
            ((a = o), r && r()),
          (s = i),
          (i = Math.round(a)),
          i
        );
      };
    },
    $a = function (e, n, r) {
      var i = {};
      (i[n.p] = "+=" + r), q.set(e, i);
    },
    Hf = function (e, n) {
      var r = rr(e, n),
        i = "_scroll" + n.p2,
        s = function a(o, l, c, u, f) {
          var d = a.tween,
            h = l.onComplete,
            m = {};
          c = c || r();
          var p = qf(r, c, function () {
            d.kill(), (a.tween = 0);
          });
          return (
            (f = (u && f) || 0),
            (u = u || o - c),
            d && d.kill(),
            (l[i] = o),
            (l.inherit = !1),
            (l.modifiers = m),
            (m[i] = function () {
              return p(c + u * d.ratio + f * d.ratio * d.ratio);
            }),
            (l.onUpdate = function () {
              ie.cache++, a.tween && Rn();
            }),
            (l.onComplete = function () {
              (a.tween = 0), h && h.call(d);
            }),
            (d = a.tween = q.to(e, l)),
            d
          );
        };
      return (
        (e[i] = r),
        (r.wheelHandler = function () {
          return s.tween && s.tween.kill() && (s.tween = 0);
        }),
        Ue(e, "wheel", r.wheelHandler),
        Z.isTouch && Ue(e, "touchmove", r.wheelHandler),
        s
      );
    },
    Z = (function () {
      function t(n, r) {
        yi ||
          t.register(q) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          fl(this),
          this.init(n, r);
      }
      var e = t.prototype;
      return (
        (e.init = function (r, i) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !hs)
          ) {
            this.update = this.refresh = this.kill = _n;
            return;
          }
          r = Mf(qt(r) || ms(r) || r.nodeType ? { trigger: r } : r, xa);
          var s = r,
            a = s.onUpdate,
            o = s.toggleClass,
            l = s.id,
            c = s.onToggle,
            u = s.onRefresh,
            f = s.scrub,
            d = s.trigger,
            h = s.pin,
            m = s.pinSpacing,
            p = s.invalidateOnRefresh,
            g = s.anticipatePin,
            y = s.onScrubComplete,
            v = s.onSnapComplete,
            _ = s.once,
            x = s.snap,
            S = s.pinReparent,
            w = s.pinSpacer,
            C = s.containerAnimation,
            P = s.fastScrollEnd,
            O = s.preventOverlaps,
            T =
              r.horizontal || (r.containerAnimation && r.horizontal !== !1)
                ? yt
                : Xe,
            M = !f && f !== 0,
            b = Mt(r.scroller || se),
            E = q.core.getCache(b),
            A = $r(b),
            L =
              ("pinType" in r
                ? r.pinType
                : nr(b, "pinType") || (A && "fixed")) === "fixed",
            k = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
            I = M && r.toggleActions.split(" "),
            D = "markers" in r ? r.markers : xa.markers,
            R = A ? 0 : parseFloat(Zt(b)["border" + T.p2 + Si]) || 0,
            $ = this,
            H =
              r.onRefreshInit &&
              function () {
                return r.onRefreshInit($);
              },
            Y = zv(b, A, T),
            le = Rv(b, A),
            re = 0,
            U = 0,
            K = 0,
            he = rr(b, T),
            me,
            we,
            Le,
            pe,
            Ce,
            W,
            te,
            Ie,
            De,
            z,
            ze,
            an,
            Qt,
            V,
            Jt,
            hr,
            jr,
            Ze,
            pr,
            Re,
            on,
            en,
            qn,
            Ds,
            Ve,
            Ja,
            Hn,
            Di,
            zi,
            mr,
            Ur,
            ae,
            Kr,
            ln,
            cn,
            un,
            Zr,
            Ri,
            Vn;
          if (
            (($._startClamp = $._endClamp = !1),
            ($._dir = T),
            (g *= 45),
            ($.scroller = b),
            ($.scroll = C ? C.time.bind(C) : he),
            (pe = he()),
            ($.vars = r),
            (i = i || r.animation),
            "refreshPriority" in r &&
              ((mf = 1), r.refreshPriority === -9999 && (Ts = $)),
            (E.tweenScroll = E.tweenScroll || {
              top: Hf(b, Xe),
              left: Hf(b, yt),
            }),
            ($.tweenTo = me = E.tweenScroll[T.p]),
            ($.scrubDuration = function (B) {
              (Kr = ms(B) && B),
                Kr
                  ? ae
                    ? ae.duration(B)
                    : (ae = q.to(i, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: Kr,
                        paused: !0,
                        onComplete: function () {
                          return y && y($);
                        },
                      }))
                  : (ae && ae.progress(1).kill(), (ae = 0));
            }),
            i &&
              ((i.vars.lazy = !1),
              (i._initted && !$.isReverted) ||
                (i.vars.immediateRender !== !1 &&
                  r.immediateRender !== !1 &&
                  i.duration() &&
                  i.render(0, !0, !0)),
              ($.animation = i.pause()),
              (i.scrollTrigger = $),
              $.scrubDuration(f),
              (mr = 0),
              l || (l = i.vars.id)),
            x &&
              ((!Or(x) || x.push) && (x = { snapTo: x }),
              "scrollBehavior" in de.style &&
                q.set(A ? [de, Bt] : b, { scrollBehavior: "auto" }),
              ie.forEach(function (B) {
                return (
                  ct(B) &&
                  B.target === (A ? _e.scrollingElement || Bt : b) &&
                  (B.smooth = !1)
                );
              }),
              (Le = ct(x.snapTo)
                ? x.snapTo
                : x.snapTo === "labels"
                ? Fv(i)
                : x.snapTo === "labelsDirectional"
                ? Bv(i)
                : x.directional !== !1
                ? function (B, Q) {
                    return xl(x.snapTo)(B, lt() - U < 500 ? 0 : Q.direction);
                  }
                : q.utils.snap(x.snapTo)),
              (ln = x.duration || { min: 0.1, max: 2 }),
              (ln = Or(ln) ? fs(ln.min, ln.max) : fs(ln, ln)),
              (cn = q
                .delayedCall(x.delay || Kr / 2 || 0.1, function () {
                  var B = he(),
                    Q = lt() - U < 500,
                    G = me.tween;
                  if (
                    (Q || Math.abs($.getVelocity()) < 10) &&
                    !G &&
                    !pa &&
                    re !== B
                  ) {
                    var J = (B - W) / V,
                      Qe = i && !M ? i.totalProgress() : J,
                      ce = Q ? 0 : ((Qe - Ur) / (lt() - ds)) * 1e3 || 0,
                      Ne = q.utils.clamp(-J, 1 - J, (xi(ce / 2) * ce) / 0.185),
                      ft = J + (x.inertia === !1 ? 0 : Ne),
                      Me,
                      Se,
                      ye = x,
                      fn = ye.onStart,
                      Pe = ye.onInterrupt,
                      Vt = ye.onComplete;
                    if (
                      ((Me = Le(ft, $)),
                      ms(Me) || (Me = ft),
                      (Se = Math.max(0, Math.round(W + Me * V))),
                      B <= te && B >= W && Se !== B)
                    ) {
                      if (G && !G._initted && G.data <= xi(Se - B)) return;
                      x.inertia === !1 && (Ne = Me - J),
                        me(
                          Se,
                          {
                            duration: ln(
                              xi(
                                (Math.max(xi(ft - Qe), xi(Me - Qe)) * 0.185) /
                                  ce /
                                  0.05 || 0
                              )
                            ),
                            ease: x.ease || "power3",
                            data: xi(Se - B),
                            onInterrupt: function () {
                              return cn.restart(!0) && Pe && Pe($);
                            },
                            onComplete: function () {
                              $.update(),
                                (re = he()),
                                i &&
                                  !M &&
                                  (ae
                                    ? ae.resetTo(
                                        "totalProgress",
                                        Me,
                                        i._tTime / i._tDur
                                      )
                                    : i.progress(Me)),
                                (mr = Ur =
                                  i && !M ? i.totalProgress() : $.progress),
                                v && v($),
                                Vt && Vt($);
                            },
                          },
                          B,
                          Ne * V,
                          Se - B - Ne * V
                        ),
                        fn && fn($, me.tween);
                    }
                  } else $.isActive && re !== B && cn.restart(!0);
                })
                .pause())),
            l && (Sl[l] = $),
            (d = $.trigger = Mt(d || (h !== !0 && h))),
            (Vn = d && d._gsap && d._gsap.stRevert),
            Vn && (Vn = Vn($)),
            (h = h === !0 ? d : Mt(h)),
            qt(o) && (o = { targets: d, className: o }),
            h &&
              (m === !1 ||
                m === Kt ||
                (m =
                  !m &&
                  h.parentNode &&
                  h.parentNode.style &&
                  Zt(h.parentNode).display === "flex"
                    ? !1
                    : He),
              ($.pin = h),
              (we = q.core.getCache(h)),
              we.spacer
                ? (Jt = we.pinState)
                : (w &&
                    ((w = Mt(w)),
                    w && !w.nodeType && (w = w.current || w.nativeElement),
                    (we.spacerIsNative = !!w),
                    w && (we.spacerState = ka(w))),
                  (we.spacer = Ze = w || _e.createElement("div")),
                  Ze.classList.add("pin-spacer"),
                  l && Ze.classList.add("pin-spacer-" + l),
                  (we.pinState = Jt = ka(h))),
              r.force3D !== !1 && q.set(h, { force3D: !0 }),
              ($.spacer = Ze = we.spacer),
              (zi = Zt(h)),
              (Ds = zi[m + T.os2]),
              (Re = q.getProperty(h)),
              (on = q.quickSetter(h, T.a, Ye)),
              Pl(h, Ze, zi),
              (jr = ka(h))),
            D)
          ) {
            (an = Or(D) ? Mf(D, Of) : Of),
              (z = Ea("scroller-start", l, b, T, an, 0)),
              (ze = Ea("scroller-end", l, b, T, an, 0, z)),
              (pr = z["offset" + T.op.d2]);
            var zs = Mt(nr(b, "content") || b);
            (Ie = this.markerStart = Ea("start", l, zs, T, an, pr, 0, C)),
              (De = this.markerEnd = Ea("end", l, zs, T, an, pr, 0, C)),
              C && (Ri = q.quickSetter([Ie, De], T.a, Ye)),
              !L &&
                !(yn.length && nr(b, "fixedMarkers") === !0) &&
                (Nv(A ? de : b),
                q.set([z, ze], { force3D: !0 }),
                (Ja = q.quickSetter(z, T.a, Ye)),
                (Di = q.quickSetter(ze, T.a, Ye)));
          }
          if (C) {
            var ee = C.vars.onUpdate,
              j = C.vars.onUpdateParams;
            C.eventCallback("onUpdate", function () {
              $.update(0, 0, 1), ee && ee.apply(C, j || []);
            });
          }
          if (
            (($.previous = function () {
              return ne[ne.indexOf($) - 1];
            }),
            ($.next = function () {
              return ne[ne.indexOf($) + 1];
            }),
            ($.revert = function (B, Q) {
              if (!Q) return $.kill(!0);
              var G = B !== !1 || !$.enabled,
                J = ot;
              G !== $.isReverted &&
                (G &&
                  ((un = Math.max(he(), $.scroll.rec || 0)),
                  (K = $.progress),
                  (Zr = i && i.progress())),
                Ie &&
                  [Ie, De, z, ze].forEach(function (Qe) {
                    return (Qe.style.display = G ? "none" : "block");
                  }),
                G && ((ot = $), $.update(G)),
                h &&
                  (!S || !$.isActive) &&
                  (G ? Vv(h, Ze, Jt) : Pl(h, Ze, Zt(h), Ve)),
                G || $.update(G),
                (ot = J),
                ($.isReverted = G));
            }),
            ($.refresh = function (B, Q, G, J) {
              if (!((ot || !$.enabled) && !Q)) {
                if (h && B && Ut) {
                  Ue(t, "scrollEnd", Lf);
                  return;
                }
                !xt && H && H($),
                  (ot = $),
                  me.tween && !G && (me.tween.kill(), (me.tween = 0)),
                  ae && ae.pause(),
                  p &&
                    i &&
                    (i.revert({ kill: !1 }).invalidate(),
                    i.getChildren &&
                      i.getChildren(!0, !0, !1).forEach(function (gr) {
                        return gr.vars.immediateRender && gr.render(0, !0, !0);
                      })),
                  $.isReverted || $.revert(!0, !0),
                  ($._subPinOffset = !1);
                var Qe = Y(),
                  ce = le(),
                  Ne = C ? C.duration() : bn(b, T),
                  ft = V <= 0.01 || !V,
                  Me = 0,
                  Se = J || 0,
                  ye = Or(G) ? G.end : r.end,
                  fn = r.endTrigger || d,
                  Pe = Or(G)
                    ? G.start
                    : r.start ||
                      (r.start === 0 || !d ? 0 : h ? "0 0" : "0 100%"),
                  Vt = ($.pinnedContainer =
                    r.pinnedContainer && Mt(r.pinnedContainer, $)),
                  Cn = (d && Math.max(0, ne.indexOf($))) || 0,
                  nt = Cn,
                  rt,
                  dt,
                  Qr,
                  eo,
                  ht,
                  Ge,
                  Pn,
                  yc,
                  hh,
                  Rs,
                  kn,
                  Ns,
                  to;
                for (
                  D &&
                  Or(G) &&
                  ((Ns = q.getProperty(z, T.p)), (to = q.getProperty(ze, T.p)));
                  nt-- > 0;

                )
                  (Ge = ne[nt]),
                    Ge.end || Ge.refresh(0, 1) || (ot = $),
                    (Pn = Ge.pin),
                    Pn &&
                      (Pn === d || Pn === h || Pn === Vt) &&
                      !Ge.isReverted &&
                      (Rs || (Rs = []), Rs.unshift(Ge), Ge.revert(!0, !0)),
                    Ge !== ne[nt] && (Cn--, nt--);
                for (
                  ct(Pe) && (Pe = Pe($)),
                    Pe = _f(Pe, "start", $),
                    W =
                      Ff(
                        Pe,
                        d,
                        Qe,
                        T,
                        he(),
                        Ie,
                        z,
                        $,
                        ce,
                        R,
                        L,
                        Ne,
                        C,
                        $._startClamp && "_startClamp"
                      ) || (h ? -0.001 : 0),
                    ct(ye) && (ye = ye($)),
                    qt(ye) &&
                      !ye.indexOf("+=") &&
                      (~ye.indexOf(" ")
                        ? (ye = (qt(Pe) ? Pe.split(" ")[0] : "") + ye)
                        : ((Me = Ta(ye.substr(2), Qe)),
                          (ye = qt(Pe)
                            ? Pe
                            : (C
                                ? q.utils.mapRange(
                                    0,
                                    C.duration(),
                                    C.scrollTrigger.start,
                                    C.scrollTrigger.end,
                                    W
                                  )
                                : W) + Me),
                          (fn = d))),
                    ye = _f(ye, "end", $),
                    te =
                      Math.max(
                        W,
                        Ff(
                          ye || (fn ? "100% 0" : Ne),
                          fn,
                          Qe,
                          T,
                          he() + Me,
                          De,
                          ze,
                          $,
                          ce,
                          R,
                          L,
                          Ne,
                          C,
                          $._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    Me = 0,
                    nt = Cn;
                  nt--;

                )
                  (Ge = ne[nt]),
                    (Pn = Ge.pin),
                    Pn &&
                      Ge.start - Ge._pinPush <= W &&
                      !C &&
                      Ge.end > 0 &&
                      ((rt =
                        Ge.end -
                        ($._startClamp ? Math.max(0, Ge.start) : Ge.start)),
                      ((Pn === d && Ge.start - Ge._pinPush < W) || Pn === Vt) &&
                        isNaN(Pe) &&
                        (Me += rt * (1 - Ge.progress)),
                      Pn === h && (Se += rt));
                if (
                  ((W += Me),
                  (te += Me),
                  $._startClamp && ($._startClamp += Me),
                  $._endClamp &&
                    !xt &&
                    (($._endClamp = te || -0.001),
                    (te = Math.min(te, bn(b, T)))),
                  (V = te - W || ((W -= 0.01) && 0.001)),
                  ft && (K = q.utils.clamp(0, 1, q.utils.normalize(W, te, un))),
                  ($._pinPush = Se),
                  Ie &&
                    Me &&
                    ((rt = {}),
                    (rt[T.a] = "+=" + Me),
                    Vt && (rt[T.p] = "-=" + he()),
                    q.set([Ie, De], rt)),
                  h && !(pl && $.end >= bn(b, T)))
                )
                  (rt = Zt(h)),
                    (eo = T === Xe),
                    (Qr = he()),
                    (en = parseFloat(Re(T.a)) + Se),
                    !Ne &&
                      te > 1 &&
                      ((kn = (A ? _e.scrollingElement || Bt : b).style),
                      (kn = {
                        style: kn,
                        value: kn["overflow" + T.a.toUpperCase()],
                      }),
                      A &&
                        Zt(de)["overflow" + T.a.toUpperCase()] !== "scroll" &&
                        (kn.style["overflow" + T.a.toUpperCase()] = "scroll")),
                    Pl(h, Ze, rt),
                    (jr = ka(h)),
                    (dt = zn(h, !0)),
                    (yc = L && rr(b, eo ? yt : Xe)()),
                    m
                      ? ((Ve = [m + T.os2, V + Se + Ye]),
                        (Ve.t = Ze),
                        (nt = m === He ? ya(h, T) + V + Se : 0),
                        nt &&
                          (Ve.push(T.d, nt + Ye),
                          Ze.style.flexBasis !== "auto" &&
                            (Ze.style.flexBasis = nt + Ye)),
                        Ei(Ve),
                        Vt &&
                          ne.forEach(function (gr) {
                            gr.pin === Vt &&
                              gr.vars.pinSpacing !== !1 &&
                              (gr._subPinOffset = !0);
                          }),
                        L && he(un))
                      : ((nt = ya(h, T)),
                        nt &&
                          Ze.style.flexBasis !== "auto" &&
                          (Ze.style.flexBasis = nt + Ye)),
                    L &&
                      ((ht = {
                        top: dt.top + (eo ? Qr - W : yc) + Ye,
                        left: dt.left + (eo ? yc : Qr - W) + Ye,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (ht[Ar] = ht["max" + Si] = Math.ceil(dt.width) + Ye),
                      (ht[Lr] = ht["max" + bl] = Math.ceil(dt.height) + Ye),
                      (ht[Kt] =
                        ht[Kt + _s] =
                        ht[Kt + vs] =
                        ht[Kt + bs] =
                        ht[Kt + ys] =
                          "0"),
                      (ht[He] = rt[He]),
                      (ht[He + _s] = rt[He + _s]),
                      (ht[He + vs] = rt[He + vs]),
                      (ht[He + bs] = rt[He + bs]),
                      (ht[He + ys] = rt[He + ys]),
                      (hr = Xv(Jt, ht, S)),
                      xt && he(0)),
                    i
                      ? ((hh = i._initted),
                        cl(1),
                        i.render(i.duration(), !0, !0),
                        (qn = Re(T.a) - en + V + Se),
                        (Hn = Math.abs(V - qn) > 1),
                        L && Hn && hr.splice(hr.length - 2, 2),
                        i.render(0, !0, !0),
                        hh || i.invalidate(!0),
                        i.parent || i.totalTime(i.totalTime()),
                        cl(0))
                      : (qn = V),
                    kn &&
                      (kn.value
                        ? (kn.style["overflow" + T.a.toUpperCase()] = kn.value)
                        : kn.style.removeProperty("overflow-" + T.a));
                else if (d && he() && !C)
                  for (dt = d.parentNode; dt && dt !== de; )
                    dt._pinOffset &&
                      ((W -= dt._pinOffset), (te -= dt._pinOffset)),
                      (dt = dt.parentNode);
                Rs &&
                  Rs.forEach(function (gr) {
                    return gr.revert(!1, !0);
                  }),
                  ($.start = W),
                  ($.end = te),
                  (pe = Ce = xt ? un : he()),
                  !C && !xt && (pe < un && he(un), ($.scroll.rec = 0)),
                  $.revert(!1, !0),
                  (U = lt()),
                  cn && ((re = -1), cn.restart(!0)),
                  (ot = 0),
                  i &&
                    M &&
                    (i._initted || Zr) &&
                    i.progress() !== Zr &&
                    i.progress(Zr || 0, !0).render(i.time(), !0, !0),
                  (ft || K !== $.progress || C || p || (i && !i._initted)) &&
                    (i &&
                      !M &&
                      (i._initted || K || i.vars.immediateRender !== !1) &&
                      i.totalProgress(
                        C && W < -0.001 && !K ? q.utils.normalize(W, te, 0) : K,
                        !0
                      ),
                    ($.progress = ft || (pe - W) / V === K ? 0 : K)),
                  h && m && (Ze._pinOffset = Math.round($.progress * qn)),
                  ae && ae.invalidate(),
                  isNaN(Ns) ||
                    ((Ns -= q.getProperty(z, T.p)),
                    (to -= q.getProperty(ze, T.p)),
                    $a(z, T, Ns),
                    $a(Ie, T, Ns - (J || 0)),
                    $a(ze, T, to),
                    $a(De, T, to - (J || 0))),
                  ft && !xt && $.update(),
                  u && !xt && !Qt && ((Qt = !0), u($), (Qt = !1));
              }
            }),
            ($.getVelocity = function () {
              return ((he() - Ce) / (lt() - ds)) * 1e3 || 0;
            }),
            ($.endAnimation = function () {
              gs($.callbackAnimation),
                i &&
                  (ae
                    ? ae.progress(1)
                    : i.paused()
                    ? M || gs(i, $.direction < 0, 1)
                    : gs(i, i.reversed()));
            }),
            ($.labelToScroll = function (B) {
              return (
                (i &&
                  i.labels &&
                  (W || $.refresh() || W) + (i.labels[B] / i.duration()) * V) ||
                0
              );
            }),
            ($.getTrailing = function (B) {
              var Q = ne.indexOf($),
                G =
                  $.direction > 0 ? ne.slice(0, Q).reverse() : ne.slice(Q + 1);
              return (
                qt(B)
                  ? G.filter(function (J) {
                      return J.vars.preventOverlaps === B;
                    })
                  : G
              ).filter(function (J) {
                return $.direction > 0 ? J.end <= W : J.start >= te;
              });
            }),
            ($.update = function (B, Q, G) {
              if (!(C && !G && !B)) {
                var J = xt === !0 ? un : $.scroll(),
                  Qe = B ? 0 : (J - W) / V,
                  ce = Qe < 0 ? 0 : Qe > 1 ? 1 : Qe || 0,
                  Ne = $.progress,
                  ft,
                  Me,
                  Se,
                  ye,
                  fn,
                  Pe,
                  Vt,
                  Cn;
                if (
                  (Q &&
                    ((Ce = pe),
                    (pe = C ? he() : J),
                    x && ((Ur = mr), (mr = i && !M ? i.totalProgress() : ce))),
                  g &&
                    h &&
                    !ot &&
                    !ga &&
                    Ut &&
                    (!ce && W < J + ((J - Ce) / (lt() - ds)) * g
                      ? (ce = 1e-4)
                      : ce === 1 &&
                        te > J + ((J - Ce) / (lt() - ds)) * g &&
                        (ce = 0.9999)),
                  ce !== Ne && $.enabled)
                ) {
                  if (
                    ((ft = $.isActive = !!ce && ce < 1),
                    (Me = !!Ne && Ne < 1),
                    (Pe = ft !== Me),
                    (fn = Pe || !!ce != !!Ne),
                    ($.direction = ce > Ne ? 1 : -1),
                    ($.progress = ce),
                    fn &&
                      !ot &&
                      ((Se = ce && !Ne ? 0 : ce === 1 ? 1 : Ne === 1 ? 2 : 3),
                      M &&
                        ((ye =
                          (!Pe && I[Se + 1] !== "none" && I[Se + 1]) || I[Se]),
                        (Cn =
                          i &&
                          (ye === "complete" || ye === "reset" || ye in i)))),
                    O &&
                      (Pe || Cn) &&
                      (Cn || f || !i) &&
                      (ct(O)
                        ? O($)
                        : $.getTrailing(O).forEach(function (Qr) {
                            return Qr.endAnimation();
                          })),
                    M ||
                      (ae && !ot && !ga
                        ? (ae._dp._time - ae._start !== ae._time &&
                            ae.render(ae._dp._time - ae._start),
                          ae.resetTo
                            ? ae.resetTo(
                                "totalProgress",
                                ce,
                                i._tTime / i._tDur
                              )
                            : ((ae.vars.totalProgress = ce),
                              ae.invalidate().restart()))
                        : i && i.totalProgress(ce, !!(ot && (U || B)))),
                    h)
                  ) {
                    if ((B && m && (Ze.style[m + T.os2] = Ds), !L))
                      on(ps(en + qn * ce));
                    else if (fn) {
                      if (
                        ((Vt =
                          !B && ce > Ne && te + 1 > J && J + 1 >= bn(b, T)),
                        S)
                      )
                        if (!B && (ft || Vt)) {
                          var nt = zn(h, !0),
                            rt = J - W;
                          Bf(
                            h,
                            de,
                            nt.top + (T === Xe ? rt : 0) + Ye,
                            nt.left + (T === Xe ? 0 : rt) + Ye
                          );
                        } else Bf(h, Ze);
                      Ei(ft || Vt ? hr : jr),
                        (Hn && ce < 1 && ft) ||
                          on(en + (ce === 1 && !Vt ? qn : 0));
                    }
                  }
                  x && !me.tween && !ot && !ga && cn.restart(!0),
                    o &&
                      (Pe || (_ && ce && (ce < 1 || !ml))) &&
                      us(o.targets).forEach(function (Qr) {
                        return Qr.classList[ft || _ ? "add" : "remove"](
                          o.className
                        );
                      }),
                    a && !M && !B && a($),
                    fn && !ot
                      ? (M &&
                          (Cn &&
                            (ye === "complete"
                              ? i.pause().totalProgress(1)
                              : ye === "reset"
                              ? i.restart(!0).pause()
                              : ye === "restart"
                              ? i.restart(!0)
                              : i[ye]()),
                          a && a($)),
                        (Pe || !ml) &&
                          (c && Pe && vl($, c),
                          k[Se] && vl($, k[Se]),
                          _ && (ce === 1 ? $.kill(!1, 1) : (k[Se] = 0)),
                          Pe ||
                            ((Se = ce === 1 ? 1 : 3), k[Se] && vl($, k[Se]))),
                        P &&
                          !ft &&
                          Math.abs($.getVelocity()) > (ms(P) ? P : 2500) &&
                          (gs($.callbackAnimation),
                          ae
                            ? ae.progress(1)
                            : gs(i, ye === "reverse" ? 1 : !ce, 1)))
                      : M && a && !ot && a($);
                }
                if (Di) {
                  var dt = C ? (J / C.duration()) * (C._caScrollDist || 0) : J;
                  Ja(dt + (z._isFlipped ? 1 : 0)), Di(dt);
                }
                Ri && Ri((-J / C.duration()) * (C._caScrollDist || 0));
              }
            }),
            ($.enable = function (B, Q) {
              $.enabled ||
                (($.enabled = !0),
                Ue(b, "resize", Ss),
                A || Ue(b, "scroll", Ti),
                H && Ue(t, "refreshInit", H),
                B !== !1 && (($.progress = K = 0), (pe = Ce = re = he())),
                Q !== !1 && $.refresh());
            }),
            ($.getTween = function (B) {
              return B && me ? me.tween : ae;
            }),
            ($.setPositions = function (B, Q, G, J) {
              if (C) {
                var Qe = C.scrollTrigger,
                  ce = C.duration(),
                  Ne = Qe.end - Qe.start;
                (B = Qe.start + (Ne * B) / ce), (Q = Qe.start + (Ne * Q) / ce);
              }
              $.refresh(
                !1,
                !1,
                {
                  start: bf(B, G && !!$._startClamp),
                  end: bf(Q, G && !!$._endClamp),
                },
                J
              ),
                $.update();
            }),
            ($.adjustPinSpacing = function (B) {
              if (Ve && B) {
                var Q = Ve.indexOf(T.d) + 1;
                (Ve[Q] = parseFloat(Ve[Q]) + B + Ye),
                  (Ve[1] = parseFloat(Ve[1]) + B + Ye),
                  Ei(Ve);
              }
            }),
            ($.disable = function (B, Q) {
              if (
                $.enabled &&
                (B !== !1 && $.revert(!0, !0),
                ($.enabled = $.isActive = !1),
                Q || (ae && ae.pause()),
                (un = 0),
                we && (we.uncache = 1),
                H && Ke(t, "refreshInit", H),
                cn &&
                  (cn.pause(), me.tween && me.tween.kill() && (me.tween = 0)),
                !A)
              ) {
                for (var G = ne.length; G--; )
                  if (ne[G].scroller === b && ne[G] !== $) return;
                Ke(b, "resize", Ss), A || Ke(b, "scroll", Ti);
              }
            }),
            ($.kill = function (B, Q) {
              $.disable(B, Q), ae && !Q && ae.kill(), l && delete Sl[l];
              var G = ne.indexOf($);
              G >= 0 && ne.splice(G, 1),
                G === _t && Ca > 0 && _t--,
                (G = 0),
                ne.forEach(function (J) {
                  return J.scroller === $.scroller && (G = 1);
                }),
                G || xt || ($.scroll.rec = 0),
                i &&
                  ((i.scrollTrigger = null),
                  B && i.revert({ kill: !1 }),
                  Q || i.kill()),
                Ie &&
                  [Ie, De, z, ze].forEach(function (J) {
                    return J.parentNode && J.parentNode.removeChild(J);
                  }),
                Ts === $ && (Ts = 0),
                h &&
                  (we && (we.uncache = 1),
                  (G = 0),
                  ne.forEach(function (J) {
                    return J.pin === h && G++;
                  }),
                  G || (we.spacer = 0)),
                r.onKill && r.onKill($);
            }),
            ne.push($),
            $.enable(!1, !1),
            Vn && Vn($),
            i && i.add && !V)
          ) {
            var fe = $.update;
            ($.update = function () {
              ($.update = fe), ie.cache++, W || te || $.refresh();
            }),
              q.delayedCall(0.01, $.update),
              (V = 0.01),
              (W = te = 0);
          } else $.refresh();
          h && Hv();
        }),
        (t.register = function (r) {
          return (
            yi ||
              ((q = r || Ef()),
              Tf() && window.document && t.enable(),
              (yi = hs)),
            yi
          );
        }),
        (t.defaults = function (r) {
          if (r) for (var i in r) xa[i] = r[i];
          return xa;
        }),
        (t.disable = function (r, i) {
          (hs = 0),
            ne.forEach(function (a) {
              return a[i ? "kill" : "disable"](r);
            }),
            Ke(se, "wheel", Ti),
            Ke(_e, "scroll", Ti),
            clearInterval(ha),
            Ke(_e, "touchcancel", _n),
            Ke(de, "touchstart", _n),
            _a(Ke, _e, "pointerdown,touchstart,mousedown", xf),
            _a(Ke, _e, "pointerup,touchend,mouseup", Sf),
            da.kill(),
            va(Ke);
          for (var s = 0; s < ie.length; s += 3)
            ba(Ke, ie[s], ie[s + 1]), ba(Ke, ie[s], ie[s + 2]);
        }),
        (t.enable = function () {
          if (
            ((se = window),
            (_e = document),
            (Bt = _e.documentElement),
            (de = _e.body),
            q &&
              ((us = q.utils.toArray),
              (fs = q.utils.clamp),
              (fl = q.core.context || _n),
              (cl = q.core.suppressOverwrites || _n),
              (dl = se.history.scrollRestoration || "auto"),
              (wl = se.pageYOffset || 0),
              q.core.globals("ScrollTrigger", t),
              de))
          ) {
            (hs = 1),
              (bi = document.createElement("div")),
              (bi.style.height = "100vh"),
              (bi.style.position = "absolute"),
              Rf(),
              Dv(),
              Oe.register(q),
              (t.isTouch = Oe.isTouch),
              (ir =
                Oe.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (ul = Oe.isTouch === 1),
              Ue(se, "wheel", Ti),
              (ol = [se, _e, Bt, de]),
              q.matchMedia
                ? ((t.matchMedia = function (c) {
                    var u = q.matchMedia(),
                      f;
                    for (f in c) u.add(f, c[f]);
                    return u;
                  }),
                  q.addEventListener("matchMediaInit", function () {
                    return El();
                  }),
                  q.addEventListener("matchMediaRevert", function () {
                    return If();
                  }),
                  q.addEventListener("matchMedia", function () {
                    Rr(0, 1), Dr("matchMedia");
                  }),
                  q.matchMedia().add("(orientation: portrait)", function () {
                    return Tl(), Tl;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              Tl(),
              Ue(_e, "scroll", Ti);
            var r = de.hasAttribute("style"),
              i = de.style,
              s = i.borderTopStyle,
              a = q.core.Animation.prototype,
              o,
              l;
            for (
              a.revert ||
                Object.defineProperty(a, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                i.borderTopStyle = "solid",
                o = zn(de),
                Xe.m = Math.round(o.top + Xe.sc()) || 0,
                yt.m = Math.round(o.left + yt.sc()) || 0,
                s
                  ? (i.borderTopStyle = s)
                  : i.removeProperty("border-top-style"),
                r ||
                  (de.setAttribute("style", ""), de.removeAttribute("style")),
                ha = setInterval(Af, 250),
                q.delayedCall(0.5, function () {
                  return (ga = 0);
                }),
                Ue(_e, "touchcancel", _n),
                Ue(de, "touchstart", _n),
                _a(Ue, _e, "pointerdown,touchstart,mousedown", xf),
                _a(Ue, _e, "pointerup,touchend,mouseup", Sf),
                ll = q.utils.checkPrefix("transform"),
                Pa.push(ll),
                yi = lt(),
                da = q.delayedCall(0.2, Rr).pause(),
                _i = [
                  _e,
                  "visibilitychange",
                  function () {
                    var c = se.innerWidth,
                      u = se.innerHeight;
                    _e.hidden
                      ? ((hf = c), (pf = u))
                      : (hf !== c || pf !== u) && Ss();
                  },
                  _e,
                  "DOMContentLoaded",
                  Rr,
                  se,
                  "load",
                  Rr,
                  se,
                  "resize",
                  Ss,
                ],
                va(Ue),
                ne.forEach(function (c) {
                  return c.enable(0, 1);
                }),
                l = 0;
              l < ie.length;
              l += 3
            )
              ba(Ke, ie[l], ie[l + 1]), ba(Ke, ie[l], ie[l + 2]);
          }
        }),
        (t.config = function (r) {
          "limitCallbacks" in r && (ml = !!r.limitCallbacks);
          var i = r.syncInterval;
          (i && clearInterval(ha)) || ((ha = i) && setInterval(Af, i)),
            "ignoreMobileResize" in r &&
              (ul = t.isTouch === 1 && r.ignoreMobileResize),
            "autoRefreshEvents" in r &&
              (va(Ke) || va(Ue, r.autoRefreshEvents || "none"),
              (gf = (r.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (t.scrollerProxy = function (r, i) {
          var s = Mt(r),
            a = ie.indexOf(s),
            o = $r(s);
          ~a && ie.splice(a, o ? 6 : 2),
            i && (o ? yn.unshift(se, i, de, i, Bt, i) : yn.unshift(s, i));
        }),
        (t.clearMatchMedia = function (r) {
          ne.forEach(function (i) {
            return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
          });
        }),
        (t.isInViewport = function (r, i, s) {
          var a = (qt(r) ? Mt(r) : r).getBoundingClientRect(),
            o = a[s ? Ar : Lr] * i || 0;
          return s
            ? a.right - o > 0 && a.left + o < se.innerWidth
            : a.bottom - o > 0 && a.top + o < se.innerHeight;
        }),
        (t.positionInViewport = function (r, i, s) {
          qt(r) && (r = Mt(r));
          var a = r.getBoundingClientRect(),
            o = a[s ? Ar : Lr],
            l =
              i == null
                ? o / 2
                : i in Sa
                ? Sa[i] * o
                : ~i.indexOf("%")
                ? (parseFloat(i) * o) / 100
                : parseFloat(i) || 0;
          return s
            ? (a.left + l) / se.innerWidth
            : (a.top + l) / se.innerHeight;
        }),
        (t.killAll = function (r) {
          if (
            (ne.slice(0).forEach(function (s) {
              return s.vars.id !== "ScrollSmoother" && s.kill();
            }),
            r !== !0)
          ) {
            var i = Ir.killAll || [];
            (Ir = {}),
              i.forEach(function (s) {
                return s();
              });
          }
        }),
        t
      );
    })();
  (Z.version = "3.13.0"),
    (Z.saveStyles = function (t) {
      return t
        ? us(t).forEach(function (e) {
            if (e && e.style) {
              var n = Ht.indexOf(e);
              n >= 0 && Ht.splice(n, 5),
                Ht.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  q.core.getCache(e),
                  fl()
                );
            }
          })
        : Ht;
    }),
    (Z.revert = function (t, e) {
      return El(!t, e);
    }),
    (Z.create = function (t, e) {
      return new Z(t, e);
    }),
    (Z.refresh = function (t) {
      return t ? Ss(!0) : (yi || Z.register()) && Rr(!0);
    }),
    (Z.update = function (t) {
      return ++ie.cache && Rn(t === !0 ? 2 : 0);
    }),
    (Z.clearScrollMemory = Df),
    (Z.maxScroll = function (t, e) {
      return bn(t, e ? yt : Xe);
    }),
    (Z.getScrollFunc = function (t, e) {
      return rr(Mt(t), e ? yt : Xe);
    }),
    (Z.getById = function (t) {
      return Sl[t];
    }),
    (Z.getAll = function () {
      return ne.filter(function (t) {
        return t.vars.id !== "ScrollSmoother";
      });
    }),
    (Z.isScrolling = function () {
      return !!Ut;
    }),
    (Z.snapDirectional = xl),
    (Z.addEventListener = function (t, e) {
      var n = Ir[t] || (Ir[t] = []);
      ~n.indexOf(e) || n.push(e);
    }),
    (Z.removeEventListener = function (t, e) {
      var n = Ir[t],
        r = n && n.indexOf(e);
      r >= 0 && n.splice(r, 1);
    }),
    (Z.batch = function (t, e) {
      var n = [],
        r = {},
        i = e.interval || 0.016,
        s = e.batchMax || 1e9,
        a = function (c, u) {
          var f = [],
            d = [],
            h = q
              .delayedCall(i, function () {
                u(f, d), (f = []), (d = []);
              })
              .pause();
          return function (m) {
            f.length || h.restart(!0),
              f.push(m.trigger),
              d.push(m),
              s <= f.length && h.progress(1);
          };
        },
        o;
      for (o in e)
        r[o] =
          o.substr(0, 2) === "on" && ct(e[o]) && o !== "onRefreshInit"
            ? a(o, e[o])
            : e[o];
      return (
        ct(s) &&
          ((s = s()),
          Ue(Z, "refresh", function () {
            return (s = e.batchMax());
          })),
        us(t).forEach(function (l) {
          var c = {};
          for (o in r) c[o] = r[o];
          (c.trigger = l), n.push(Z.create(c));
        }),
        n
      );
    });
  var Vf = function (e, n, r, i) {
      return (
        n > i ? e(i) : n < 0 && e(0),
        r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
      );
    },
    kl = function t(e, n) {
      n === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            n === !0
              ? "auto"
              : n
              ? "pan-" + n + (Oe.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === Bt && t(de, n);
    },
    Oa = { auto: 1, scroll: 1 },
    Gv = function (e) {
      var n = e.event,
        r = e.target,
        i = e.axis,
        s = (n.changedTouches ? n.changedTouches[0] : n).target,
        a = s._gsap || q.core.getCache(s),
        o = lt(),
        l;
      if (!a._isScrollT || o - a._isScrollT > 2e3) {
        for (
          ;
          s &&
          s !== de &&
          ((s.scrollHeight <= s.clientHeight &&
            s.scrollWidth <= s.clientWidth) ||
            !(Oa[(l = Zt(s)).overflowY] || Oa[l.overflowX]));

        )
          s = s.parentNode;
        (a._isScroll =
          s &&
          s !== r &&
          !$r(s) &&
          (Oa[(l = Zt(s)).overflowY] || Oa[l.overflowX])),
          (a._isScrollT = o);
      }
      (a._isScroll || i === "x") && (n.stopPropagation(), (n._gsapAllow = !0));
    },
    Wf = function (e, n, r, i) {
      return Oe.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: n,
        onWheel: (i = i && Gv),
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function () {
          return r && Ue(_e, Oe.eventTypes[0], Yf, !1, !0);
        },
        onDisable: function () {
          return Ke(_e, Oe.eventTypes[0], Yf, !0);
        },
      });
    },
    jv = /(input|label|select|textarea)/i,
    Xf,
    Yf = function (e) {
      var n = jv.test(e.target.tagName);
      (n || Xf) && ((e._gsapAllow = !0), (Xf = n));
    },
    Uv = function (e) {
      Or(e) || (e = {}),
        (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
        e.type || (e.type = "wheel,touch"),
        (e.debounce = !!e.debounce),
        (e.id = e.id || "normalizer");
      var n = e,
        r = n.normalizeScrollX,
        i = n.momentum,
        s = n.allowNestedScroll,
        a = n.onRelease,
        o,
        l,
        c = Mt(e.target) || Bt,
        u = q.core.globals().ScrollSmoother,
        f = u && u.get(),
        d =
          ir &&
          ((e.content && Mt(e.content)) ||
            (f && e.content !== !1 && !f.smooth() && f.content())),
        h = rr(c, Xe),
        m = rr(c, yt),
        p = 1,
        g =
          (Oe.isTouch && se.visualViewport
            ? se.visualViewport.scale * se.visualViewport.width
            : se.outerWidth) / se.innerWidth,
        y = 0,
        v = ct(i)
          ? function () {
              return i(o);
            }
          : function () {
              return i || 2.8;
            },
        _,
        x,
        S = Wf(c, e.type, !0, s),
        w = function () {
          return (x = !1);
        },
        C = _n,
        P = _n,
        O = function () {
          (l = bn(c, Xe)),
            (P = fs(ir ? 1 : 0, l)),
            r && (C = fs(0, bn(c, yt))),
            (_ = zr);
        },
        T = function () {
          (d._gsap.y = ps(parseFloat(d._gsap.y) + h.offset) + "px"),
            (d.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(d._gsap.y) +
              ", 0, 1)"),
            (h.offset = h.cacheID = 0);
        },
        M = function () {
          if (x) {
            requestAnimationFrame(w);
            var D = ps(o.deltaY / 2),
              R = P(h.v - D);
            if (d && R !== h.v + h.offset) {
              h.offset = R - h.v;
              var $ = ps((parseFloat(d && d._gsap.y) || 0) - h.offset);
              (d.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                $ +
                ", 0, 1)"),
                (d._gsap.y = $ + "px"),
                (h.cacheID = ie.cache),
                Rn();
            }
            return !0;
          }
          h.offset && T(), (x = !0);
        },
        b,
        E,
        A,
        L,
        k = function () {
          O(),
            b.isActive() &&
              b.vars.scrollY > l &&
              (h() > l ? b.progress(1) && h(l) : b.resetTo("scrollY", l));
        };
      return (
        d && q.set(d, { y: "+=0" }),
        (e.ignoreCheck = function (I) {
          return (
            (ir && I.type === "touchmove" && M()) ||
            (p > 1.05 && I.type !== "touchstart") ||
            o.isGesturing ||
            (I.touches && I.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          x = !1;
          var I = p;
          (p = ps(((se.visualViewport && se.visualViewport.scale) || 1) / g)),
            b.pause(),
            I !== p && kl(c, p > 1.01 ? !0 : r ? !1 : "x"),
            (E = m()),
            (A = h()),
            O(),
            (_ = zr);
        }),
        (e.onRelease = e.onGestureStart =
          function (I, D) {
            if ((h.offset && T(), !D)) L.restart(!0);
            else {
              ie.cache++;
              var R = v(),
                $,
                H;
              r &&
                (($ = m()),
                (H = $ + (R * 0.05 * -I.velocityX) / 0.227),
                (R *= Vf(m, $, H, bn(c, yt))),
                (b.vars.scrollX = C(H))),
                ($ = h()),
                (H = $ + (R * 0.05 * -I.velocityY) / 0.227),
                (R *= Vf(h, $, H, bn(c, Xe))),
                (b.vars.scrollY = P(H)),
                b.invalidate().duration(R).play(0.01),
                ((ir && b.vars.scrollY >= l) || $ >= l - 1) &&
                  q.to({}, { onUpdate: k, duration: R });
            }
            a && a(I);
          }),
        (e.onWheel = function () {
          b._ts && b.pause(), lt() - y > 1e3 && ((_ = 0), (y = lt()));
        }),
        (e.onChange = function (I, D, R, $, H) {
          if (
            (zr !== _ && O(),
            D && r && m(C($[2] === D ? E + (I.startX - I.x) : m() + D - $[1])),
            R)
          ) {
            h.offset && T();
            var Y = H[2] === R,
              le = Y ? A + I.startY - I.y : h() + R - H[1],
              re = P(le);
            Y && le !== re && (A += re - le), h(re);
          }
          (R || D) && Rn();
        }),
        (e.onEnable = function () {
          kl(c, r ? !1 : "x"),
            Z.addEventListener("refresh", k),
            Ue(se, "resize", k),
            h.smooth &&
              ((h.target.style.scrollBehavior = "auto"),
              (h.smooth = m.smooth = !1)),
            S.enable();
        }),
        (e.onDisable = function () {
          kl(c, !0),
            Ke(se, "resize", k),
            Z.removeEventListener("refresh", k),
            S.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (o = new Oe(e)),
        (o.iOS = ir),
        ir && !h() && h(1),
        ir && q.ticker.add(_n),
        (L = o._dc),
        (b = q.to(o, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: r ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: qf(h, h(), function () {
              return b.pause();
            }),
          },
          onUpdate: Rn,
          onComplete: L.vars.onComplete,
        })),
        o
      );
    };
  (Z.sort = function (t) {
    if (ct(t)) return ne.sort(t);
    var e = se.pageYOffset || 0;
    return (
      Z.getAll().forEach(function (n) {
        return (n._sortY = n.trigger
          ? e + n.trigger.getBoundingClientRect().top
          : n.start + se.innerHeight);
      }),
      ne.sort(
        t ||
          function (n, r) {
            return (
              (n.vars.refreshPriority || 0) * -1e6 +
              (n.vars.containerAnimation ? 1e6 : n._sortY) -
              ((r.vars.containerAnimation ? 1e6 : r._sortY) +
                (r.vars.refreshPriority || 0) * -1e6)
            );
          }
      )
    );
  }),
    (Z.observe = function (t) {
      return new Oe(t);
    }),
    (Z.normalizeScroll = function (t) {
      if (typeof t == "undefined") return bt;
      if (t === !0 && bt) return bt.enable();
      if (t === !1) {
        bt && bt.kill(), (bt = t);
        return;
      }
      var e = t instanceof Oe ? t : Uv(t);
      return (
        bt && bt.target === e.target && bt.kill(), $r(e.target) && (bt = e), e
      );
    }),
    (Z.core = {
      _getVelocityProp: al,
      _inputObserver: Wf,
      _scrollers: ie,
      _proxies: yn,
      bridge: {
        ss: function () {
          Ut || Dr("scrollStart"), (Ut = lt());
        },
        ref: function () {
          return ot;
        },
      },
    }),
    Ef() && q.registerPlugin(Z);
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let Es,
    wi,
    Ml,
    Kv = () => Ml || Ae.register(window.gsap),
    Gf = typeof Intl != "undefined" ? new Intl.Segmenter() : 0,
    Aa = (t) =>
      typeof t == "string"
        ? Aa(document.querySelectorAll(t))
        : "length" in t
        ? Array.from(t)
        : [t],
    jf = (t) => Aa(t).filter((e) => e instanceof HTMLElement),
    $l = [],
    Ol = function () {},
    Zv = /\s+/g,
    Uf = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    Kf = { left: 0, top: 0, width: 0, height: 0 },
    Zf = (t, e) => {
      if (e) {
        let n = new Set(t.join("").match(e) || $l),
          r = t.length,
          i,
          s,
          a,
          o;
        if (n.size)
          for (; --r > -1; ) {
            s = t[r];
            for (a of n)
              if (a.startsWith(s) && a.length > s.length) {
                for (
                  i = 0, o = s;
                  a.startsWith((o += t[r + ++i])) && o.length < a.length;

                );
                if (i && o.length === a.length) {
                  (t[r] = a), t.splice(r + 1, i);
                  break;
                }
              }
          }
      }
      return t;
    },
    Qf = (t) =>
      window.getComputedStyle(t).display === "inline" &&
      (t.style.display = "inline-block"),
    Ci = (t, e, n) =>
      e.insertBefore(typeof t == "string" ? document.createTextNode(t) : t, n),
    Al = (t, e, n) => {
      let r = e[t + "sClass"] || "",
        { tag: i = "div", aria: s = "auto", propIndex: a = !1 } = e,
        o = t === "line" ? "block" : "inline-block",
        l = r.indexOf("++") > -1,
        c = (u) => {
          let f = document.createElement(i),
            d = n.length + 1;
          return (
            r && (f.className = r + (l ? " " + r + d : "")),
            a && f.style.setProperty("--" + t, d + ""),
            s !== "none" && f.setAttribute("aria-hidden", "true"),
            i !== "span" &&
              ((f.style.position = "relative"), (f.style.display = o)),
            (f.textContent = u),
            n.push(f),
            f
          );
        };
      return l && (r = r.replace("++", "")), (c.collection = n), c;
    },
    Qv = (t, e, n, r) => {
      let i = Al("line", n, r),
        s = window.getComputedStyle(t).textAlign || "left";
      return (a, o) => {
        let l = i("");
        for (l.style.textAlign = s, t.insertBefore(l, e[a]); a < o; a++)
          l.appendChild(e[a]);
        l.normalize();
      };
    },
    Jf = (t, e, n, r, i, s, a, o, l, c) => {
      var u;
      let f = Array.from(t.childNodes),
        d = 0,
        { wordDelimiter: h, reduceWhiteSpace: m = !0, prepareText: p } = e,
        g = t.getBoundingClientRect(),
        y = g,
        v =
          !m && window.getComputedStyle(t).whiteSpace.substring(0, 3) === "pre",
        _ = 0,
        x = n.collection,
        S,
        w,
        C,
        P,
        O,
        T,
        M,
        b,
        E,
        A,
        L,
        k,
        I,
        D,
        R,
        $,
        H,
        Y;
      for (
        typeof h == "object"
          ? ((C = h.delimiter || h), (w = h.replaceWith || ""))
          : (w = h === "" ? "" : h || " "),
          S = w !== " ";
        d < f.length;
        d++
      )
        if (((P = f[d]), P.nodeType === 3)) {
          for (
            R = P.textContent || "",
              m
                ? (R = R.replace(Zv, " "))
                : v &&
                  (R = R.replace(
                    /\n/g,
                    w +
                      `
`
                  )),
              p && (R = p(R, t)),
              P.textContent = R,
              O = w || C ? R.split(C || w) : R.match(o) || $l,
              H = O[O.length - 1],
              b = S ? H.slice(-1) === " " : !H,
              H || O.pop(),
              y = g,
              M = S ? O[0].charAt(0) === " " : !O[0],
              M && Ci(" ", t, P),
              O[0] || O.shift(),
              Zf(O, l),
              (s && c) || (P.textContent = ""),
              E = 1;
            E <= O.length;
            E++
          )
            if (
              (($ = O[E - 1]),
              !m &&
                v &&
                $.charAt(0) ===
                  `
` &&
                ((u = P.previousSibling) == null || u.remove(),
                Ci(document.createElement("br"), t, P),
                ($ = $.slice(1))),
              !m && $ === "")
            )
              Ci(w, t, P);
            else if ($ === " ") t.insertBefore(document.createTextNode(" "), P);
            else {
              if (
                (S && $.charAt(0) === " " && Ci(" ", t, P),
                _ && E === 1 && !M && x.indexOf(_.parentNode) > -1
                  ? ((T = x[x.length - 1]),
                    T.appendChild(document.createTextNode(r ? "" : $)))
                  : ((T = n(r ? "" : $)),
                    Ci(T, t, P),
                    _ && E === 1 && !M && T.insertBefore(_, T.firstChild)),
                r)
              )
                for (
                  L = Gf
                    ? Zf(
                        [...Gf.segment($)].map((le) => le.segment),
                        l
                      )
                    : $.match(o) || $l,
                    Y = 0;
                  Y < L.length;
                  Y++
                )
                  T.appendChild(
                    L[Y] === " " ? document.createTextNode(" ") : r(L[Y])
                  );
              if (s && c) {
                if (
                  ((R = P.textContent = R.substring($.length + 1, R.length)),
                  (A = T.getBoundingClientRect()),
                  A.top > y.top && A.left <= y.left)
                ) {
                  for (k = t.cloneNode(), I = t.childNodes[0]; I && I !== T; )
                    (D = I), (I = I.nextSibling), k.appendChild(D);
                  t.parentNode.insertBefore(k, t), i && Qf(k);
                }
                y = A;
              }
              (E < O.length || b) &&
                Ci(
                  E >= O.length ? " " : S && $.slice(-1) === " " ? " " + w : w,
                  t,
                  P
                );
            }
          t.removeChild(P), (_ = 0);
        } else
          P.nodeType === 1 &&
            (a && a.indexOf(P) > -1
              ? (x.indexOf(P.previousSibling) > -1 &&
                  x[x.length - 1].appendChild(P),
                (_ = P))
              : (Jf(P, e, n, r, i, s, a, o, l, !0), (_ = 0)),
            i && Qf(P));
    };
  const ed = class gh {
    constructor(e, n) {
      (this.isSplit = !1),
        Kv(),
        (this.elements = jf(e)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this.masks = []),
        (this.vars = n),
        (this._split = () => this.isSplit && this.split(this.vars));
      let r = [],
        i,
        s = () => {
          let a = r.length,
            o;
          for (; a--; ) {
            o = r[a];
            let l = o.element.offsetWidth;
            if (l !== o.width) {
              (o.width = l), this._split();
              return;
            }
          }
        };
      (this._data = {
        orig: r,
        obs:
          typeof ResizeObserver != "undefined" &&
          new ResizeObserver(() => {
            clearTimeout(i), (i = setTimeout(s, 200));
          }),
      }),
        Ol(this),
        this.split(n);
    }
    split(e) {
      this.isSplit && this.revert(), (this.vars = e = e || this.vars || {});
      let {
          type: n = "chars,words,lines",
          aria: r = "auto",
          deepSlice: i = !0,
          smartWrap: s,
          onSplit: a,
          autoSplit: o = !1,
          specialChars: l,
          mask: c,
        } = this.vars,
        u = n.indexOf("lines") > -1,
        f = n.indexOf("chars") > -1,
        d = n.indexOf("words") > -1,
        h = f && !d && !u,
        m =
          l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
        p = m ? new RegExp(m.source + "|" + Uf.source, "gu") : Uf,
        g = !!e.ignore && jf(e.ignore),
        { orig: y, animTime: v, obs: _ } = this._data,
        x;
      return (
        (f || d || u) &&
          (this.elements.forEach((S, w) => {
            (y[w] = {
              element: S,
              html: S.innerHTML,
              ariaL: S.getAttribute("aria-label"),
              ariaH: S.getAttribute("aria-hidden"),
            }),
              r === "auto"
                ? S.setAttribute("aria-label", (S.textContent || "").trim())
                : r === "hidden" && S.setAttribute("aria-hidden", "true");
            let C = [],
              P = [],
              O = [],
              T = f ? Al("char", e, C) : null,
              M = Al("word", e, P),
              b,
              E,
              A,
              L;
            if ((Jf(S, e, M, T, h, i && (u || h), g, p, m, !1), u)) {
              let k = Aa(S.childNodes),
                I = Qv(S, k, e, O),
                D,
                R = [],
                $ = 0,
                H = k.map((le) =>
                  le.nodeType === 1 ? le.getBoundingClientRect() : Kf
                ),
                Y = Kf;
              for (b = 0; b < k.length; b++)
                (D = k[b]),
                  D.nodeType === 1 &&
                    (D.nodeName === "BR"
                      ? (R.push(D), I($, b + 1), ($ = b + 1), (Y = H[$]))
                      : (b &&
                          H[b].top > Y.top &&
                          H[b].left <= Y.left &&
                          (I($, b), ($ = b)),
                        (Y = H[b])));
              $ < b && I($, b),
                R.forEach((le) => {
                  var re;
                  return (re = le.parentNode) == null
                    ? void 0
                    : re.removeChild(le);
                });
            }
            if (!d) {
              for (b = 0; b < P.length; b++)
                if (
                  ((E = P[b]),
                  f || !E.nextSibling || E.nextSibling.nodeType !== 3)
                )
                  if (s && !u) {
                    for (
                      A = document.createElement("span"),
                        A.style.whiteSpace = "nowrap";
                      E.firstChild;

                    )
                      A.appendChild(E.firstChild);
                    E.replaceWith(A);
                  } else E.replaceWith(...E.childNodes);
                else
                  (L = E.nextSibling),
                    L &&
                      L.nodeType === 3 &&
                      ((L.textContent =
                        (E.textContent || "") + (L.textContent || "")),
                      E.remove());
              (P.length = 0), S.normalize();
            }
            this.lines.push(...O), this.words.push(...P), this.chars.push(...C);
          }),
          c &&
            this[c] &&
            this.masks.push(
              ...this[c].map((S) => {
                let w = S.cloneNode();
                return (
                  S.replaceWith(w),
                  w.appendChild(S),
                  S.className &&
                    (w.className = S.className.replace(
                      /(\b\w+\b)/g,
                      "$1-mask"
                    )),
                  (w.style.overflow = "clip"),
                  w
                );
              })
            )),
        (this.isSplit = !0),
        wi &&
          (o
            ? wi.addEventListener("loadingdone", this._split)
            : wi.status === "loading" &&
              console.warn("SplitText called before fonts loaded")),
        (x = a && a(this)) &&
          x.totalTime &&
          (this._data.anim = v ? x.totalTime(v) : x),
        u &&
          o &&
          this.elements.forEach((S, w) => {
            (y[w].width = S.offsetWidth), _ && _.observe(S);
          }),
        this
      );
    }
    revert() {
      var e, n;
      let { orig: r, anim: i, obs: s } = this._data;
      return (
        s && s.disconnect(),
        r.forEach(({ element: a, html: o, ariaL: l, ariaH: c }) => {
          (a.innerHTML = o),
            l
              ? a.setAttribute("aria-label", l)
              : a.removeAttribute("aria-label"),
            c
              ? a.setAttribute("aria-hidden", c)
              : a.removeAttribute("aria-hidden");
        }),
        (this.chars.length =
          this.words.length =
          this.lines.length =
          r.length =
          this.masks.length =
            0),
        (this.isSplit = !1),
        wi == null || wi.removeEventListener("loadingdone", this._split),
        i && ((this._data.animTime = i.totalTime()), i.revert()),
        (n = (e = this.vars).onRevert) == null || n.call(e, this),
        this
      );
    }
    static create(e, n) {
      return new gh(e, n);
    }
    static register(e) {
      (Es = Es || e || window.gsap),
        Es && ((Aa = Es.utils.toArray), (Ol = Es.core.context || Ol)),
        !Ml && window.innerWidth > 0 && ((wi = document.fonts), (Ml = !0));
    }
  };
  ed.version = "3.13.0";
  let Ae = ed;
  (function () {
    function t() {
      for (var r = arguments.length, i = 0; i < r; i++) {
        var s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        s.nodeType === 1 || s.nodeType === 11
          ? this.appendChild(s)
          : this.appendChild(document.createTextNode(String(s)));
      }
    }
    function e() {
      for (; this.lastChild; ) this.removeChild(this.lastChild);
      arguments.length && this.append.apply(this, arguments);
    }
    function n() {
      for (
        var r = this.parentNode, i = arguments.length, s = new Array(i), a = 0;
        a < i;
        a++
      )
        s[a] = arguments[a];
      var o = s.length;
      if (r)
        for (o || r.removeChild(this); o--; ) {
          var l = s[o];
          typeof l != "object"
            ? (l = this.ownerDocument.createTextNode(l))
            : l.parentNode && l.parentNode.removeChild(l),
            o
              ? r.insertBefore(this.previousSibling, l)
              : r.replaceChild(l, this);
        }
    }
    typeof Element != "undefined" &&
      (Element.prototype.append ||
        ((Element.prototype.append = t),
        (DocumentFragment.prototype.append = t)),
      Element.prototype.replaceChildren ||
        ((Element.prototype.replaceChildren = e),
        (DocumentFragment.prototype.replaceChildren = e)),
      Element.prototype.replaceWith ||
        ((Element.prototype.replaceWith = n),
        (DocumentFragment.prototype.replaceWith = n)));
  })();
  function Jv(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function td(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  function nd(t, e, n) {
    return e && td(t.prototype, e), n && td(t, n), t;
  }
  function e0(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function rd(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      e &&
        (r = r.filter(function (i) {
          return Object.getOwnPropertyDescriptor(t, i).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function id(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? rd(Object(n), !0).forEach(function (r) {
            e0(t, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : rd(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return t;
  }
  function sd(t, e) {
    return n0(t) || i0(t, e) || ad(t, e) || a0();
  }
  function St(t) {
    return t0(t) || r0(t) || ad(t) || s0();
  }
  function t0(t) {
    if (Array.isArray(t)) return Ll(t);
  }
  function n0(t) {
    if (Array.isArray(t)) return t;
  }
  function r0(t) {
    if (typeof Symbol != "undefined" && Symbol.iterator in Object(t))
      return Array.from(t);
  }
  function i0(t, e) {
    if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(t)))) {
      var n = [],
        r = !0,
        i = !1,
        s = void 0;
      try {
        for (
          var a = t[Symbol.iterator](), o;
          !(r = (o = a.next()).done) &&
          (n.push(o.value), !(e && n.length === e));
          r = !0
        );
      } catch (l) {
        (i = !0), (s = l);
      } finally {
        try {
          !r && a.return != null && a.return();
        } finally {
          if (i) throw s;
        }
      }
      return n;
    }
  }
  function ad(t, e) {
    if (t) {
      if (typeof t == "string") return Ll(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      if (
        (n === "Object" && t.constructor && (n = t.constructor.name),
        n === "Map" || n === "Set")
      )
        return Array.from(t);
      if (
        n === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return Ll(t, e);
    }
  }
  function Ll(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function s0() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function a0() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Nr(t, e) {
    return Object.getOwnPropertyNames(Object(t)).reduce(function (n, r) {
      var i = Object.getOwnPropertyDescriptor(Object(t), r),
        s = Object.getOwnPropertyDescriptor(Object(e), r);
      return Object.defineProperty(n, r, s || i);
    }, {});
  }
  function ws(t) {
    return typeof t == "string";
  }
  function Il(t) {
    return Array.isArray(t);
  }
  function La() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      e = Nr(t),
      n;
    return (
      e.types !== void 0 ? (n = e.types) : e.split !== void 0 && (n = e.split),
      n !== void 0 &&
        (e.types = (ws(n) || Il(n) ? String(n) : "")
          .split(",")
          .map(function (r) {
            return String(r).trim();
          })
          .filter(function (r) {
            return /((line)|(word)|(char))/i.test(r);
          })),
      (e.absolute || e.position) &&
        (e.absolute = e.absolute || /absolute/.test(t.position)),
      e
    );
  }
  function Dl(t) {
    var e = ws(t) || Il(t) ? String(t) : "";
    return {
      none: !e,
      lines: /line/i.test(e),
      words: /word/i.test(e),
      chars: /char/i.test(e),
    };
  }
  function Ia(t) {
    return t !== null && typeof t == "object";
  }
  function o0(t) {
    return Ia(t) && /^(1|3|11)$/.test(t.nodeType);
  }
  function l0(t) {
    return typeof t == "number" && t > -1 && t % 1 === 0;
  }
  function c0(t) {
    return Ia(t) && l0(t.length);
  }
  function Fr(t) {
    return Il(t)
      ? t
      : t == null
      ? []
      : c0(t)
      ? Array.prototype.slice.call(t)
      : [t];
  }
  function od(t) {
    var e = t;
    return (
      ws(t) &&
        (/^(#[a-z]\w+)$/.test(t.trim())
          ? (e = document.getElementById(t.trim().slice(1)))
          : (e = document.querySelectorAll(t))),
      Fr(e).reduce(function (n, r) {
        return [].concat(St(n), St(Fr(r).filter(o0)));
      }, [])
    );
  }
  var u0 = Object.entries,
    Da = "_splittype",
    nn = {},
    f0 = 0;
  function xn(t, e, n) {
    if (!Ia(t)) return console.warn("[data.set] owner is not an object"), null;
    var r = t[Da] || (t[Da] = ++f0),
      i = nn[r] || (nn[r] = {});
    return (
      n === void 0
        ? e &&
          Object.getPrototypeOf(e) === Object.prototype &&
          (nn[r] = id(id({}, i), e))
        : e !== void 0 && (i[e] = n),
      n
    );
  }
  function Br(t, e) {
    var n = Ia(t) ? t[Da] : null,
      r = (n && nn[n]) || {};
    return r;
  }
  function ld(t) {
    var e = t && t[Da];
    e && (delete t[e], delete nn[e]);
  }
  function d0() {
    Object.keys(nn).forEach(function (t) {
      delete nn[t];
    });
  }
  function h0() {
    u0(nn).forEach(function (t) {
      var e = sd(t, 2),
        n = e[0],
        r = e[1],
        i = r.isRoot,
        s = r.isSplit;
      (!i || !s) && ((nn[n] = null), delete nn[n]);
    });
  }
  function p0(t) {
    var e =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ",
      n = t ? String(t) : "";
    return n.trim().replace(/\s+/g, " ").split(e);
  }
  var zl = "\\ud800-\\udfff",
    cd = "\\u0300-\\u036f\\ufe20-\\ufe23",
    ud = "\\u20d0-\\u20f0",
    fd = "\\ufe0e\\ufe0f",
    m0 = "[".concat(zl, "]"),
    Rl = "[".concat(cd).concat(ud, "]"),
    Nl = "\\ud83c[\\udffb-\\udfff]",
    g0 = "(?:".concat(Rl, "|").concat(Nl, ")"),
    dd = "[^".concat(zl, "]"),
    hd = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    pd = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    md = "\\u200d",
    gd = "".concat(g0, "?"),
    vd = "[".concat(fd, "]?"),
    v0 = "(?:" + md + "(?:" + [dd, hd, pd].join("|") + ")" + vd + gd + ")*",
    y0 = vd + gd + v0,
    _0 = "(?:".concat(
      ["".concat(dd).concat(Rl, "?"), Rl, hd, pd, m0].join("|"),
      `
)`
    ),
    b0 = RegExp(
      "".concat(Nl, "(?=").concat(Nl, ")|").concat(_0).concat(y0),
      "g"
    ),
    x0 = [md, zl, cd, ud, fd],
    S0 = RegExp("[".concat(x0.join(""), "]"));
  function T0(t) {
    return t.split("");
  }
  function yd(t) {
    return S0.test(t);
  }
  function E0(t) {
    return t.match(b0) || [];
  }
  function w0(t) {
    return yd(t) ? E0(t) : T0(t);
  }
  function C0(t) {
    return t == null ? "" : String(t);
  }
  function P0(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (t = C0(t)), t && ws(t) && !e && yd(t) ? w0(t) : t.split(e);
  }
  function Fl(t, e) {
    var n = document.createElement(t);
    return (
      e &&
        Object.keys(e).forEach(function (r) {
          var i = e[r],
            s = ws(i) ? i.trim() : i;
          s === null ||
            s === "" ||
            (r === "children"
              ? n.append.apply(n, St(Fr(s)))
              : n.setAttribute(r, s));
        }),
      n
    );
  }
  var Bl = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: !1,
    tagName: "div",
  };
  function k0(t, e) {
    e = Nr(Bl, e);
    var n = Dl(e.types),
      r = e.tagName,
      i = t.nodeValue,
      s = document.createDocumentFragment(),
      a = [],
      o = [];
    return (
      /^\s/.test(i) && s.append(" "),
      (a = p0(i).reduce(function (l, c, u, f) {
        var d, h;
        return (
          n.chars &&
            (h = P0(c).map(function (m) {
              var p = Fl(r, {
                class: "".concat(e.splitClass, " ").concat(e.charClass),
                style: "display: inline-block;",
                children: m,
              });
              return xn(p, "isChar", !0), (o = [].concat(St(o), [p])), p;
            })),
          n.words || n.lines
            ? ((d = Fl(r, {
                class: "".concat(e.wordClass, " ").concat(e.splitClass),
                style: "display: inline-block; ".concat(
                  n.words && e.absolute ? "position: relative;" : ""
                ),
                children: n.chars ? h : c,
              })),
              xn(d, { isWord: !0, isWordStart: !0, isWordEnd: !0 }),
              s.appendChild(d))
            : h.forEach(function (m) {
                s.appendChild(m);
              }),
          u < f.length - 1 && s.append(" "),
          n.words ? l.concat(d) : l
        );
      }, [])),
      /\s$/.test(i) && s.append(" "),
      t.replaceWith(s),
      { words: a, chars: o }
    );
  }
  function _d(t, e) {
    var n = t.nodeType,
      r = { words: [], chars: [] };
    if (!/(1|3|11)/.test(n)) return r;
    if (n === 3 && /\S/.test(t.nodeValue)) return k0(t, e);
    var i = Fr(t.childNodes);
    if (i.length && (xn(t, "isSplit", !0), !Br(t).isRoot)) {
      (t.style.display = "inline-block"), (t.style.position = "relative");
      var s = t.nextSibling,
        a = t.previousSibling,
        o = t.textContent || "",
        l = s ? s.textContent : " ",
        c = a ? a.textContent : " ";
      xn(t, {
        isWordEnd: /\s$/.test(o) || /^\s/.test(l),
        isWordStart: /^\s/.test(o) || /\s$/.test(c),
      });
    }
    return i.reduce(function (u, f) {
      var d = _d(f, e),
        h = d.words,
        m = d.chars;
      return {
        words: [].concat(St(u.words), St(h)),
        chars: [].concat(St(u.chars), St(m)),
      };
    }, r);
  }
  function M0(t, e, n, r) {
    if (!n.absolute) return { top: e ? t.offsetTop : null };
    var i = t.offsetParent,
      s = sd(r, 2),
      a = s[0],
      o = s[1],
      l = 0,
      c = 0;
    if (i && i !== document.body) {
      var u = i.getBoundingClientRect();
      (l = u.x + a), (c = u.y + o);
    }
    var f = t.getBoundingClientRect(),
      d = f.width,
      h = f.height,
      m = f.x,
      p = f.y,
      g = p + o - c,
      y = m + a - l;
    return { width: d, height: h, top: g, left: y };
  }
  function bd(t) {
    Br(t).isWord
      ? (ld(t), t.replaceWith.apply(t, St(t.childNodes)))
      : Fr(t.children).forEach(function (e) {
          return bd(e);
        });
  }
  var $0 = function () {
    return document.createDocumentFragment();
  };
  function O0(t, e, n) {
    var r = Dl(e.types),
      i = e.tagName,
      s = t.getElementsByTagName("*"),
      a = [],
      o = [],
      l = null,
      c,
      u,
      f,
      d = [],
      h = t.parentElement,
      m = t.nextElementSibling,
      p = $0(),
      g = window.getComputedStyle(t),
      y = g.textAlign,
      v = parseFloat(g.fontSize),
      _ = v * 0.2;
    return (
      e.absolute &&
        ((f = { left: t.offsetLeft, top: t.offsetTop, width: t.offsetWidth }),
        (u = t.offsetWidth),
        (c = t.offsetHeight),
        xn(t, { cssWidth: t.style.width, cssHeight: t.style.height })),
      Fr(s).forEach(function (x) {
        var S = x.parentElement === t,
          w = M0(x, S, e, n),
          C = w.width,
          P = w.height,
          O = w.top,
          T = w.left;
        /^br$/i.test(x.nodeName) ||
          (r.lines &&
            S &&
            ((l === null || O - l >= _) && ((l = O), a.push((o = []))),
            o.push(x)),
          e.absolute && xn(x, { top: O, left: T, width: C, height: P }));
      }),
      h && h.removeChild(t),
      r.lines &&
        ((d = a.map(function (x) {
          var S = Fl(i, {
            class: "".concat(e.splitClass, " ").concat(e.lineClass),
            style: "display: block; text-align: ".concat(y, "; width: 100%;"),
          });
          xn(S, "isLine", !0);
          var w = { height: 0, top: 1e4 };
          return (
            p.appendChild(S),
            x.forEach(function (C, P, O) {
              var T = Br(C),
                M = T.isWordEnd,
                b = T.top,
                E = T.height,
                A = O[P + 1];
              (w.height = Math.max(w.height, E)),
                (w.top = Math.min(w.top, b)),
                S.appendChild(C),
                M && Br(A).isWordStart && S.append(" ");
            }),
            e.absolute && xn(S, { height: w.height, top: w.top }),
            S
          );
        })),
        r.words || bd(p),
        t.replaceChildren(p)),
      e.absolute &&
        ((t.style.width = "".concat(t.style.width || u, "px")),
        (t.style.height = "".concat(c, "px")),
        Fr(s).forEach(function (x) {
          var S = Br(x),
            w = S.isLine,
            C = S.top,
            P = S.left,
            O = S.width,
            T = S.height,
            M = Br(x.parentElement),
            b = !w && M.isLine;
          (x.style.top = "".concat(b ? C - M.top : C, "px")),
            (x.style.left = w
              ? "".concat(f.left, "px")
              : "".concat(P - (b ? f.left : 0), "px")),
            (x.style.height = "".concat(T, "px")),
            (x.style.width = w ? "".concat(f.width, "px") : "".concat(O, "px")),
            (x.style.position = "absolute");
        })),
      h && (m ? h.insertBefore(t, m) : h.appendChild(t)),
      d
    );
  }
  var Pi = Nr(Bl, {}),
    A0 = (function () {
      nd(t, null, [
        {
          key: "clearData",
          value: function () {
            d0();
          },
        },
        {
          key: "setDefaults",
          value: function (n) {
            return (Pi = Nr(Pi, La(n))), Bl;
          },
        },
        {
          key: "revert",
          value: function (n) {
            od(n).forEach(function (r) {
              var i = Br(r),
                s = i.isSplit,
                a = i.html,
                o = i.cssWidth,
                l = i.cssHeight;
              s &&
                ((r.innerHTML = a),
                (r.style.width = o || ""),
                (r.style.height = l || ""),
                ld(r));
            });
          },
        },
        {
          key: "create",
          value: function (n, r) {
            return new t(n, r);
          },
        },
        {
          key: "data",
          get: function () {
            return nn;
          },
        },
        {
          key: "defaults",
          get: function () {
            return Pi;
          },
          set: function (n) {
            Pi = Nr(Pi, La(n));
          },
        },
      ]);
      function t(e, n) {
        Jv(this, t),
          (this.isSplit = !1),
          (this.settings = Nr(Pi, La(n))),
          (this.elements = od(e)),
          this.split();
      }
      return (
        nd(t, [
          {
            key: "split",
            value: function (n) {
              var r = this;
              this.revert(),
                this.elements.forEach(function (a) {
                  xn(a, "html", a.innerHTML);
                }),
                (this.lines = []),
                (this.words = []),
                (this.chars = []);
              var i = [window.pageXOffset, window.pageYOffset];
              n !== void 0 && (this.settings = Nr(this.settings, La(n)));
              var s = Dl(this.settings.types);
              s.none ||
                (this.elements.forEach(function (a) {
                  xn(a, "isRoot", !0);
                  var o = _d(a, r.settings),
                    l = o.words,
                    c = o.chars;
                  (r.words = [].concat(St(r.words), St(l))),
                    (r.chars = [].concat(St(r.chars), St(c)));
                }),
                this.elements.forEach(function (a) {
                  if (s.lines || r.settings.absolute) {
                    var o = O0(a, r.settings, i);
                    r.lines = [].concat(St(r.lines), St(o));
                  }
                }),
                (this.isSplit = !0),
                window.scrollTo(i[0], i[1]),
                h0());
            },
          },
          {
            key: "revert",
            value: function () {
              this.isSplit &&
                ((this.lines = null),
                (this.words = null),
                (this.chars = null),
                (this.isSplit = !1)),
                t.revert(this.elements);
            },
          },
        ]),
        t
      );
    })();
  N.registerPlugin(Z, Ae);
  const L0 = () =>
      no(this, null, function* () {
        yield document.fonts.ready,
          Z.getAll().forEach((e) => {
            e.vars &&
              e.vars.trigger &&
              e.vars.trigger.hasAttribute &&
              e.vars.trigger.hasAttribute("split-text") &&
              e.kill(!0);
          }),
          document.querySelectorAll("[split-text]").forEach((e) => {
            new A0(e, { type: "lines", tagName: "div" }).lines.forEach((s) => {
              const a = document.createElement("div");
              a.setAttribute("data-line-wrapper", ""),
                (a.style.overflow = "clip"),
                (a.style.paddingBottom = "5px"),
                (a.style.position = "relative"),
                s.parentNode.insertBefore(a, s),
                a.appendChild(s);
            });
            const r = e.querySelectorAll("[data-line-wrapper]"),
              i = Array.from(r).map((s) => s.firstChild);
            N.set(i, { willChange: "transform" }),
              N.from(i, {
                yPercent: 120,
                opacity: 0,
                rotateZ: 2,
                rotateY: 20,
                rotateX: 20,
                duration: 1.8,
                ease: "expo.out",
                stagger: 0.08,
                scrollTrigger: {
                  trigger: e,
                  start: "top 80%",
                  end: "bottom top",
                  toggleActions: "play none none reverse",
                  markers: !1,
                },
              });
          });
      }),
    sr = () => {
      L0();
    };
  N.registerPlugin(Z);
  const I0 = () => {
      Z.getAll().forEach((r) => {
        r.vars &&
          r.vars.trigger &&
          r.vars.trigger.hasAttribute &&
          r.vars.trigger.hasAttribute("split-text") &&
          r.kill(!0);
      });
      const t = {
          duration: 1.4,
          ease: "power2.out",
          stagger: 0.1,
          start: "top 80%",
          markers: !1,
        },
        e = document.querySelectorAll("[motion]"),
        n = {};
      e.forEach((r) => {
        const i = r.getAttribute("motion"),
          s = r.getAttribute("motion-group"),
          a = r.getAttribute("motion-duration")
            ? parseFloat(r.getAttribute("motion-duration"))
            : t.duration,
          o = r.getAttribute("motion-delay")
            ? parseFloat(r.getAttribute("motion-delay"))
            : 0,
          l = r.getAttribute("motion-ease") || t.ease,
          c = r.getAttribute("motion-start") || t.start;
        i === "fade"
          ? N.set(r, { opacity: 0 })
          : i === "move-up" && N.set(r, { opacity: 0, y: 50 }),
          s
            ? (n[s] || (n[s] = []),
              n[s].push({
                element: r,
                motionType: i,
                duration: a,
                delay: o,
                ease: l,
              }))
            : D0(r, i, a, o, l, c);
      }),
        Object.keys(n).forEach((r) => {
          const i = n[r];
          if (i.length > 0) {
            const s = document.querySelectorAll(`[motion-group="${r}"]`);
            let a = null,
              o = t.stagger,
              l = t.start;
            const c = document.querySelector(`[motion-group-container="${r}"]`);
            if (c)
              (a = c),
                (o = c.getAttribute("motion-stagger")
                  ? parseFloat(c.getAttribute("motion-stagger"))
                  : t.stagger),
                (l = c.getAttribute("motion-start") || t.start);
            else {
              for (const h of s) {
                if (h.hasAttribute("motion-stagger")) {
                  o = parseFloat(h.getAttribute("motion-stagger"));
                  break;
                }
                h.hasAttribute("motion-start") &&
                  (l = h.getAttribute("motion-start"));
              }
              a = s[0];
            }
            const u = N.timeline({
                scrollTrigger: {
                  trigger: a,
                  start: l,
                  toggleActions: "play none none reverse",
                  markers: t.markers,
                },
              }),
              f = i
                .filter((h) => h.motionType === "fade")
                .map((h) => h.element),
              d = i
                .filter((h) => h.motionType === "move-up")
                .map((h) => h.element);
            f.length > 0 &&
              u.to(
                f,
                {
                  opacity: 1,
                  duration: i[0].duration,
                  stagger: o,
                  ease: i[0].ease,
                  delay: i[0].delay,
                },
                0
              ),
              d.length > 0 &&
                u.to(
                  d,
                  {
                    opacity: 1,
                    y: 0,
                    duration: i[0].duration,
                    stagger: o,
                    ease: i[0].ease,
                    delay: i[0].delay,
                  },
                  0
                );
          }
        });
    },
    D0 = (t, e, n, r, i, s) => {
      const a = N.timeline({
        scrollTrigger: {
          trigger: t,
          start: s,
          toggleActions: "play none none reverse",
          markers: !1,
        },
      });
      e === "fade"
        ? a.to(t, { opacity: 1, duration: n, delay: r, ease: i })
        : e === "move-up" &&
          a.to(t, { opacity: 1, y: 0, duration: n, delay: r, ease: i });
    },
    ar = () => {
      I0();
    };
  N.registerPlugin(Ae);
  const z0 = (t) => {
    const e = document.querySelectorAll("[page-load='component']"),
      n = document.querySelectorAll("[page-load='wrap']"),
      r = document.querySelectorAll("[page-load='gradient']"),
      i = document.querySelectorAll("[page-load='text']"),
      s = document.querySelectorAll(".page_cover"),
      a = new Ae(i, { type: "lines", linesClass: "pg-load-text-line" });
    a.lines.forEach((l) => {
      const c = document.createElement("div");
      (c.style.overflow = "clip"),
        (c.style.position = "relative"),
        l.parentNode.insertBefore(c, l),
        c.appendChild(l);
    });
    const o = N.timeline();
    return (
      N.set(r, { opacity: 0 }),
      N.set(n, { opacity: 0 }),
      N.set(a.lines, {
        opacity: 0,
        willChange: "transform, opacity",
        yPercent: 100,
        paddingBottom: "3px",
      }),
      o.to(r, { opacity: 1, duration: 2, ease: "power1.out" }),
      o.to(n, { opacity: 1, duration: 1, ease: "power2.inOut" }, "<"),
      o.to(
        s,
        {
          opacity: 0,
          duration: 1,
          pointerEvents: "none",
          ease: "power2.inOut",
        },
        "<"
      ),
      o.to(i, { opacity: 1, duration: 1, ease: "power2.inOut" }),
      o.to(
        a.lines,
        {
          opacity: 1,
          duration: 1.6,
          stagger: 0.2,
          yPercent: 0,
          ease: "expo.inOut",
        },
        "-=1.4"
      ),
      o.to(a.lines, {
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        yPercent: -100,
        ease: "expo.inOut",
        delay: 0.8,
      }),
      o.to(
        e,
        {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 1.6,
          ease: "expo.inOut",
          onComplete: () => {
            N.set(e, { pointerEvents: "none" });
          },
        },
        "-=0.7"
      ),
      o
    );
  };
  N.registerPlugin(Ae);
  const R0 = (t) => {
      const e = document.querySelector("[home-hero='text']"),
        n = document.querySelector("[home-hero='btn']"),
        r = document.querySelector("[home-hero='visual']");
      new Ae(e, {
        type: "lines",
        linesClass: "home-hero-text-line",
        mask: "lines",
        tag: "span",
      }).lines.forEach((o) => {
        const l = document.createElement("div");
        l.classList.add("move-text"),
          o.parentNode.insertBefore(l, o),
          l.appendChild(o);
      });
      const s = e.querySelectorAll("span");
      s.length &&
        s.forEach((o) => {
          const l = document.createElement("div");
          (l.style.overflow = "clip"),
            (l.style.paddingBottom = "3px"),
            o.parentNode.insertBefore(l, o),
            l.appendChild(o);
        });
      const a = N.timeline();
      return (
        N.set(".move-text", { opacity: 0, yPercent: 100 }),
        N.set(n, { opacity: 0 }),
        N.set(r, { opacity: 0 }),
        a.to(".move-text", {
          opacity: 1,
          duration: 1.8,
          stagger: 0.08,
          ease: "expo.inOut",
          yPercent: 0,
        }),
        a.to(n, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
        a.to(
          r,
          { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "expo.inOut" },
          "-=1"
        ),
        a
      );
    },
    or = (t) => {
      const e = document.querySelectorAll("[nav-load='component']"),
        n = document.querySelectorAll("[main-nav='brand']"),
        r = document.querySelectorAll("[nav-link='wrap']");
      N.set(e, { opacity: 0 }),
        N.set(n, { opacity: 0 }),
        N.set(r, { opacity: 0, yPercent: -100 });
      const i = N.timeline();
      return (
        i.to(e, { opacity: 1, duration: 1, ease: "expo.inOut" }),
        i.to(n, { opacity: 1, duration: 1, ease: "power1.out" }, "-=0.8"),
        i.to(
          r,
          { opacity: 1, yPercent: 0, duration: 0.6, stagger: 0.06 },
          "-=0.8"
        ),
        i
      );
    },
    N0 = () => {
      const t = document.querySelector("[home-hero='visual']"),
        e = document.querySelector("[home-hero='follow-button']");
      N.set(e, {
        xPercent: -50,
        yPercent: -50,
        willChange: "transform, opacity",
      });
      let n = !1;
      const r = t.getBoundingClientRect(),
        i = r.width / 2,
        s = r.height / 2;
      t.addEventListener("mouseenter", () => {
        n = !0;
      }),
        t.addEventListener("mouseleave", () => {
          (n = !1),
            N.to(e, {
              x: 0,
              y: 0,
              duration: 1.6,
              ease: "elastic.out(1.5, 0.5)",
            });
        }),
        window.addEventListener("mousemove", (a) => {
          if (n) {
            const o = a.clientX + 10,
              l = a.clientY + 10,
              c = e.parentElement.getBoundingClientRect(),
              u = o - c.left,
              f = l - c.top;
            N.to(e, {
              x: u - i + 50,
              y: f - s - 30,
              duration: 1.4,
              ease: "elastic.out(2, 0.75)",
            });
          }
        });
    },
    F0 = () => {
      N0();
    },
    xd = () => {
      console.log("homeInit"), Fh(), qc(), sr(), ar(), F0();
      const t = z0();
      t.add(() => or(), "-=0.8"), t.add(() => R0(), "-=0.8");
    },
    Sd = () => {
      const t = document.querySelector(".swiper[review-slider='component']");
      t &&
        new pt(t, {
          slidesPerView: 1,
          followFinger: !0,
          autoHeight: !0,
          speed: 600,
          grabCursor: !0,
          parallax: !0,
          loop: !0,
          navigation: {
            nextEl: "[review-swiper-button='next']",
            prevEl: "[review-swiper-button='prev']",
          },
          mousewheel: { forceToAxis: !0 },
          effect: "slide",
          keyboard: { enabled: !0, onlyInViewport: !0 },
          slideActiveClass: "is-active",
          slideDuplicateActiveClass: "is-active",
          on: {
            init: function () {
              const e = Array.from(this.slides).filter(
                  (r) => !r.classList.contains("swiper-slide-duplicate")
                ).length,
                n = this.realIndex + 1;
              (document.querySelector("[review-slider-count]").textContent = e),
                (document.querySelector("[review-slider-current]").textContent =
                  n);
            },
            slideChange: function () {
              const e = this.realIndex + 1;
              document.querySelector("[review-slider-current]").textContent = e;
            },
          },
        });
    };
  N.registerPlugin(Z);
  const B0 = () => {
      const t = document.querySelector("[impact-slide='main']"),
        e = t.querySelectorAll("[impact-slide='component']");
      if (!t || !e.length) return;
      e.forEach((r, i) => {
        N.set(r, {
          clipPath: i === 0 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
        });
      });
      const n = N.timeline({
        scrollTrigger: {
          trigger: t,
          start: "top top",
          end: `+=${e.length * 100}%`,
          scrub: !0,
          pin: !1,
          markers: !1,
        },
      });
      e.forEach((r, i) => {
        i !== 0 &&
          n.to(
            r,
            { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.inOut" },
            "+=0.33"
          );
      });
    },
    q0 = () => {
      B0();
    },
    H0 = () => {
      document.querySelectorAll("[image-index='wrap']").forEach((t) => {
        const e = t.querySelector("[image-index='large']"),
          n = t.querySelector("[image-index='small']"),
          r = (l, c) => {
            const u = [];
            let f = l;
            for (; f && f !== c; )
              (f = f.parentElement), f && f !== c && u.push(f);
            return u;
          },
          i = r(e, t),
          s = r(n, t),
          a = (l, c, u) => {
            (l.style.zIndex = u),
              c.forEach((f) => {
                f.style.zIndex = u;
              });
          };
        a(e, i, "2"), a(n, s, "1");
        const o = (l, c, u, f) => {
          a(l, u, "2"), a(c, f, "1");
        };
        e.addEventListener("click", () => o(e, n, i, s)),
          n.addEventListener("click", () => o(n, e, s, i));
      });
    },
    ql = () => {
      H0();
    },
    V0 = () => {
      const t = document.querySelector(".swiper[about-slider='component']");
      t &&
        new pt(t, {
          slidesPerView: "auto",
          followFinger: !0,
          freeMode: !1,
          slideToClickedSlide: !1,
          centeredSlides: !1,
          autoHeight: !1,
          speed: 600,
          grabCursor: !0,
          parallax: !0,
          loop: !0,
          navigation: {
            nextEl: "[data-swiper-button='next']",
            prevEl: "[data-swiper-button='prev']",
          },
          mousewheel: { forceToAxis: !0 },
          effect: "coverflow",
          coverflowEffect: {
            rotate: 0,
            scale: 0.9,
            depth: 100,
            modifier: 1,
            slideShadows: !1,
          },
          keyboard: { enabled: !0, onlyInViewport: !0 },
          slideActiveClass: "is-active",
          slideDuplicateActiveClass: "is-active",
          on: {
            init: function () {
              const e = Array.from(this.slides).filter(
                  (r) => !r.classList.contains("swiper-slide-duplicate")
                ).length,
                n = this.realIndex + 1;
              (document.querySelector("[data-slider-count]").textContent = e),
                (document.querySelector("[data-slider-current]").textContent =
                  n);
            },
            slideChange: function () {
              const e = this.realIndex + 1;
              document.querySelector("[data-slider-current]").textContent = e;
            },
          },
        });
    },
    qr = (t) => {
      const e = document.querySelector(".page_overlay"),
        n = document.querySelector("[page-overlay='text-wrap']"),
        r = N.timeline();
      return (
        r.fromTo(
          n,
          { opacity: 0, filter: "blur(5px)", y: 50 },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 1.2,
            ease: "expo.out",
          },
          "<"
        ),
        r.fromTo(
          e,
          { clipPath: "inset(0% 0% 0% 0%)", pointerEvents: "auto" },
          {
            clipPath: "inset(0% 0% 100% 0%)",
            pointerEvents: "none",
            duration: 1.2,
            ease: "expo.inOut",
          },
          "-=0.1"
        ),
        r.to(
          n,
          {
            y: -800,
            duration: 1.4,
            filter: "blur(5px)",
            opacity: 0,
            ease: "expo.inOut",
          },
          "<"
        ),
        r
      );
    };
  N.registerPlugin(Ae);
  const W0 = (t) => {
      const e = document.querySelector("[about-hero='text']"),
        n = document.querySelectorAll("[about-hero='visual']");
      new Ae(e, {
        type: "lines",
        linesClass: "about-hero-text-line",
        mask: "lines",
        tag: "span",
      }).lines.forEach((a) => {
        const o = document.createElement("div");
        o.classList.add("move-text"),
          a.parentNode.insertBefore(o, a),
          o.appendChild(a);
      });
      const i = e.querySelectorAll("span");
      i.length &&
        i.forEach((a) => {
          const o = document.createElement("div");
          (o.style.overflow = "clip"),
            (o.style.paddingBottom = "3px"),
            a.parentNode.insertBefore(o, a),
            o.appendChild(a);
        });
      const s = N.timeline();
      return (
        N.set(".move-text", { opacity: 0, yPercent: 100 }),
        N.set(n, { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }),
        s.to(".move-text", {
          opacity: 1,
          duration: 1.8,
          stagger: 0.08,
          ease: "expo.inOut",
          yPercent: 0,
        }),
        s.to(
          n,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 2.2,
            stagger: 0.08,
            ease: "expo.inOut",
          },
          "-=1.6"
        ),
        s
      );
    },
    X0 = () => {
      V0(), Sd(), q0(), ql(), sr(), ar();
      const t = qr();
      t.add(() => or(), "-=1"), t.add(() => W0(), "-=1");
    };
  var Y0 = "1.3.1";
  function Td(t, e, n) {
    return Math.max(t, Math.min(e, n));
  }
  function G0(t, e, n) {
    return (1 - n) * t + n * e;
  }
  function j0(t, e, n, r) {
    return G0(t, e, 1 - Math.exp(-n * r));
  }
  function U0(t, e) {
    return ((t % e) + e) % e;
  }
  var K0 = class {
    constructor() {
      X(this, "isRunning", !1);
      X(this, "value", 0);
      X(this, "from", 0);
      X(this, "to", 0);
      X(this, "currentTime", 0);
      X(this, "lerp");
      X(this, "duration");
      X(this, "easing");
      X(this, "onUpdate");
    }
    advance(t) {
      var n;
      if (!this.isRunning) return;
      let e = !1;
      if (this.duration && this.easing) {
        this.currentTime += t;
        const r = Td(0, this.currentTime / this.duration, 1);
        e = r >= 1;
        const i = e ? 1 : this.easing(r);
        this.value = this.from + (this.to - this.from) * i;
      } else
        this.lerp
          ? ((this.value = j0(this.value, this.to, this.lerp * 60, t)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (e = !0)))
          : ((this.value = this.to), (e = !0));
      e && this.stop(),
        (n = this.onUpdate) == null || n.call(this, this.value, e);
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(t, e, { lerp: n, duration: r, easing: i, onStart: s, onUpdate: a }) {
      (this.from = this.value = t),
        (this.to = e),
        (this.lerp = n),
        (this.duration = r),
        (this.easing = i),
        (this.currentTime = 0),
        (this.isRunning = !0),
        s == null || s(),
        (this.onUpdate = a);
    }
  };
  function Z0(t, e) {
    let n;
    return function (...r) {
      let i = this;
      clearTimeout(n),
        (n = setTimeout(() => {
          (n = void 0), t.apply(i, r);
        }, e));
    };
  }
  var Q0 = class {
      constructor(t, e, { autoResize: n = !0, debounce: r = 250 } = {}) {
        X(this, "width", 0);
        X(this, "height", 0);
        X(this, "scrollHeight", 0);
        X(this, "scrollWidth", 0);
        X(this, "debouncedResize");
        X(this, "wrapperResizeObserver");
        X(this, "contentResizeObserver");
        X(this, "resize", () => {
          this.onWrapperResize(), this.onContentResize();
        });
        X(this, "onWrapperResize", () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        });
        X(this, "onContentResize", () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        });
        (this.wrapper = t),
          (this.content = e),
          n &&
            ((this.debouncedResize = Z0(this.resize, r)),
            this.wrapper instanceof Window
              ? window.addEventListener("resize", this.debouncedResize, !1)
              : ((this.wrapperResizeObserver = new ResizeObserver(
                  this.debouncedResize
                )),
                this.wrapperResizeObserver.observe(this.wrapper)),
            (this.contentResizeObserver = new ResizeObserver(
              this.debouncedResize
            )),
            this.contentResizeObserver.observe(this.content)),
          this.resize();
      }
      destroy() {
        var t, e;
        (t = this.wrapperResizeObserver) == null || t.disconnect(),
          (e = this.contentResizeObserver) == null || e.disconnect(),
          this.wrapper === window &&
            this.debouncedResize &&
            window.removeEventListener("resize", this.debouncedResize, !1);
      }
      get limit() {
        return {
          x: this.scrollWidth - this.width,
          y: this.scrollHeight - this.height,
        };
      }
    },
    Ed = class {
      constructor() {
        X(this, "events", {});
      }
      emit(t, ...e) {
        var r;
        let n = this.events[t] || [];
        for (let i = 0, s = n.length; i < s; i++)
          (r = n[i]) == null || r.call(n, ...e);
      }
      on(t, e) {
        var n;
        return (
          ((n = this.events[t]) != null && n.push(e)) || (this.events[t] = [e]),
          () => {
            var r;
            this.events[t] =
              (r = this.events[t]) == null ? void 0 : r.filter((i) => e !== i);
          }
        );
      }
      off(t, e) {
        var n;
        this.events[t] =
          (n = this.events[t]) == null ? void 0 : n.filter((r) => e !== r);
      }
      destroy() {
        this.events = {};
      }
    },
    wd = 100 / 6,
    lr = { passive: !1 },
    J0 = class {
      constructor(t, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        X(this, "touchStart", { x: 0, y: 0 });
        X(this, "lastDelta", { x: 0, y: 0 });
        X(this, "window", { width: 0, height: 0 });
        X(this, "emitter", new Ed());
        X(this, "onTouchStart", (t) => {
          const { clientX: e, clientY: n } = t.targetTouches
            ? t.targetTouches[0]
            : t;
          (this.touchStart.x = e),
            (this.touchStart.y = n),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t });
        });
        X(this, "onTouchMove", (t) => {
          const { clientX: e, clientY: n } = t.targetTouches
              ? t.targetTouches[0]
              : t,
            r = -(e - this.touchStart.x) * this.options.touchMultiplier,
            i = -(n - this.touchStart.y) * this.options.touchMultiplier;
          (this.touchStart.x = e),
            (this.touchStart.y = n),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit("scroll", { deltaX: r, deltaY: i, event: t });
        });
        X(this, "onTouchEnd", (t) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: t,
          });
        });
        X(this, "onWheel", (t) => {
          let { deltaX: e, deltaY: n, deltaMode: r } = t;
          const i = r === 1 ? wd : r === 2 ? this.window.width : 1,
            s = r === 1 ? wd : r === 2 ? this.window.height : 1;
          (e *= i),
            (n *= s),
            (e *= this.options.wheelMultiplier),
            (n *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: e, deltaY: n, event: t });
        });
        X(this, "onWindowResize", () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        });
        (this.element = t),
          (this.options = e),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, lr),
          this.element.addEventListener("touchstart", this.onTouchStart, lr),
          this.element.addEventListener("touchmove", this.onTouchMove, lr),
          this.element.addEventListener("touchend", this.onTouchEnd, lr);
      }
      on(t, e) {
        return this.emitter.on(t, e);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, lr),
          this.element.removeEventListener("touchstart", this.onTouchStart, lr),
          this.element.removeEventListener("touchmove", this.onTouchMove, lr),
          this.element.removeEventListener("touchend", this.onTouchEnd, lr);
      }
    },
    ey = class {
      constructor({
        wrapper: t = window,
        content: e = document.documentElement,
        eventsTarget: n = t,
        smoothWheel: r = !0,
        syncTouch: i = !1,
        syncTouchLerp: s = 0.075,
        touchInertiaMultiplier: a = 35,
        duration: o,
        easing: l = (P) => Math.min(1, 1.001 - Math.pow(2, -10 * P)),
        lerp: c = 0.1,
        infinite: u = !1,
        orientation: f = "vertical",
        gestureOrientation: d = "vertical",
        touchMultiplier: h = 1,
        wheelMultiplier: m = 1,
        autoResize: p = !0,
        prevent: g,
        virtualScroll: y,
        overscroll: v = !0,
        autoRaf: _ = !1,
        anchors: x = !1,
        autoToggle: S = !1,
        allowNestedScroll: w = !1,
        __experimental__naiveDimensions: C = !1,
      } = {}) {
        X(this, "_isScrolling", !1);
        X(this, "_isStopped", !1);
        X(this, "_isLocked", !1);
        X(this, "_preventNextNativeScrollEvent", !1);
        X(this, "_resetVelocityTimeout", null);
        X(this, "__rafID", null);
        X(this, "isTouching");
        X(this, "time", 0);
        X(this, "userData", {});
        X(this, "lastVelocity", 0);
        X(this, "velocity", 0);
        X(this, "direction", 0);
        X(this, "options");
        X(this, "targetScroll");
        X(this, "animatedScroll");
        X(this, "animate", new K0());
        X(this, "emitter", new Ed());
        X(this, "dimensions");
        X(this, "virtualScroll");
        X(this, "onScrollEnd", (t) => {
          t instanceof CustomEvent ||
            ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
              t.stopPropagation());
        });
        X(this, "dispatchScrollendEvent", () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            })
          );
        });
        X(this, "onTransitionEnd", (t) => {
          if (t.propertyName.includes("overflow")) {
            const e = this.isHorizontal ? "overflow-x" : "overflow-y",
              n = getComputedStyle(this.rootElement)[e];
            ["hidden", "clip"].includes(n) ? this.stop() : this.start();
          }
        });
        X(this, "onClick", (t) => {
          const n = t.composedPath().find((r) => {
            var i, s, a;
            return (
              r instanceof HTMLAnchorElement &&
              (((i = r.getAttribute("href")) == null
                ? void 0
                : i.startsWith("#")) ||
                ((s = r.getAttribute("href")) == null
                  ? void 0
                  : s.startsWith("/#")) ||
                ((a = r.getAttribute("href")) == null
                  ? void 0
                  : a.startsWith("./#")))
            );
          });
          if (n) {
            const r = n.getAttribute("href");
            if (r) {
              const i =
                typeof this.options.anchors == "object" && this.options.anchors
                  ? this.options.anchors
                  : void 0;
              let s = `#${r.split("#")[1]}`;
              ["#", "/#", "./#", "#top", "/#top", "./#top"].includes(r) &&
                (s = 0),
                this.scrollTo(s, i);
            }
          }
        });
        X(this, "onPointerDown", (t) => {
          t.button === 1 && this.reset();
        });
        X(this, "onVirtualScroll", (t) => {
          if (
            typeof this.options.virtualScroll == "function" &&
            this.options.virtualScroll(t) === !1
          )
            return;
          const { deltaX: e, deltaY: n, event: r } = t;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: e,
              deltaY: n,
              event: r,
            }),
            r.ctrlKey || r.lenisStopPropagation)
          )
            return;
          const i = r.type.includes("touch"),
            s = r.type.includes("wheel");
          this.isTouching = r.type === "touchstart" || r.type === "touchmove";
          const a = e === 0 && n === 0;
          if (
            this.options.syncTouch &&
            i &&
            r.type === "touchstart" &&
            a &&
            !this.isStopped &&
            !this.isLocked
          ) {
            this.reset();
            return;
          }
          const l =
            (this.options.gestureOrientation === "vertical" && n === 0) ||
            (this.options.gestureOrientation === "horizontal" && e === 0);
          if (a || l) return;
          let c = r.composedPath();
          c = c.slice(0, c.indexOf(this.rootElement));
          const u = this.options.prevent;
          if (
            c.find((g) => {
              var y, v, _;
              return (
                g instanceof HTMLElement &&
                ((typeof u == "function" && (u == null ? void 0 : u(g))) ||
                  ((y = g.hasAttribute) == null
                    ? void 0
                    : y.call(g, "data-lenis-prevent")) ||
                  (i &&
                    ((v = g.hasAttribute) == null
                      ? void 0
                      : v.call(g, "data-lenis-prevent-touch"))) ||
                  (s &&
                    ((_ = g.hasAttribute) == null
                      ? void 0
                      : _.call(g, "data-lenis-prevent-wheel"))) ||
                  (this.options.allowNestedScroll &&
                    this.checkNestedScroll(g, { deltaX: e, deltaY: n })))
              );
            })
          )
            return;
          if (this.isStopped || this.isLocked) {
            r.preventDefault();
            return;
          }
          if (
            !((this.options.syncTouch && i) || (this.options.smoothWheel && s))
          ) {
            (this.isScrolling = "native"),
              this.animate.stop(),
              (r.lenisStopPropagation = !0);
            return;
          }
          let d = n;
          this.options.gestureOrientation === "both"
            ? (d = Math.abs(n) > Math.abs(e) ? n : e)
            : this.options.gestureOrientation === "horizontal" && (d = e),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== window &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && n > 0) ||
                  (this.animatedScroll === this.limit && n < 0)))) &&
              (r.lenisStopPropagation = !0),
            r.preventDefault();
          const h = i && this.options.syncTouch,
            p = i && r.type === "touchend" && Math.abs(d) > 5;
          p && (d = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(
              this.targetScroll + d,
              mh(
                { programmatic: !1 },
                h
                  ? { lerp: p ? this.options.syncTouchLerp : 1 }
                  : {
                      lerp: this.options.lerp,
                      duration: this.options.duration,
                      easing: this.options.easing,
                    }
              )
            );
        });
        X(this, "onNativeScroll", () => {
          if (
            (this._resetVelocityTimeout !== null &&
              (clearTimeout(this._resetVelocityTimeout),
              (this._resetVelocityTimeout = null)),
            this._preventNextNativeScrollEvent)
          ) {
            this._preventNextNativeScrollEvent = !1;
            return;
          }
          if (this.isScrolling === !1 || this.isScrolling === "native") {
            const t = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - t),
              (this.direction = Math.sign(this.animatedScroll - t)),
              this.isStopped || (this.isScrolling = "native"),
              this.emit(),
              this.velocity !== 0 &&
                (this._resetVelocityTimeout = setTimeout(() => {
                  (this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit();
                }, 400));
          }
        });
        X(this, "raf", (t) => {
          const e = t - (this.time || t);
          (this.time = t),
            this.animate.advance(e * 0.001),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf));
        });
        (window.lenisVersion = Y0),
          (!t || t === document.documentElement) && (t = window),
          (this.options = {
            wrapper: t,
            content: e,
            eventsTarget: n,
            smoothWheel: r,
            syncTouch: i,
            syncTouchLerp: s,
            touchInertiaMultiplier: a,
            duration: o,
            easing: l,
            lerp: c,
            infinite: u,
            gestureOrientation: d,
            orientation: f,
            touchMultiplier: h,
            wheelMultiplier: m,
            autoResize: p,
            prevent: g,
            virtualScroll: y,
            overscroll: v,
            autoRaf: _,
            anchors: x,
            autoToggle: S,
            allowNestedScroll: w,
            __experimental__naiveDimensions: C,
          }),
          (this.dimensions = new Q0(t, e, { autoResize: p })),
          this.updateClassName(),
          (this.targetScroll = this.animatedScroll = this.actualScroll),
          this.options.wrapper.addEventListener(
            "scroll",
            this.onNativeScroll,
            !1
          ),
          this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
            capture: !0,
          }),
          this.options.anchors &&
            this.options.wrapper === window &&
            this.options.wrapper.addEventListener("click", this.onClick, !1),
          this.options.wrapper.addEventListener(
            "pointerdown",
            this.onPointerDown,
            !1
          ),
          (this.virtualScroll = new J0(n, {
            touchMultiplier: h,
            wheelMultiplier: m,
          })),
          this.virtualScroll.on("scroll", this.onVirtualScroll),
          this.options.autoToggle &&
            this.rootElement.addEventListener(
              "transitionend",
              this.onTransitionEnd,
              { passive: !0 }
            ),
          this.options.autoRaf &&
            (this.__rafID = requestAnimationFrame(this.raf));
      }
      destroy() {
        this.emitter.destroy(),
          this.options.wrapper.removeEventListener(
            "scroll",
            this.onNativeScroll,
            !1
          ),
          this.options.wrapper.removeEventListener(
            "scrollend",
            this.onScrollEnd,
            { capture: !0 }
          ),
          this.options.wrapper.removeEventListener(
            "pointerdown",
            this.onPointerDown,
            !1
          ),
          this.options.anchors &&
            this.options.wrapper === window &&
            this.options.wrapper.removeEventListener("click", this.onClick, !1),
          this.virtualScroll.destroy(),
          this.dimensions.destroy(),
          this.cleanUpClassName(),
          this.__rafID && cancelAnimationFrame(this.__rafID);
      }
      on(t, e) {
        return this.emitter.on(t, e);
      }
      off(t, e) {
        return this.emitter.off(t, e);
      }
      setScroll(t) {
        this.isHorizontal
          ? this.options.wrapper.scrollTo({ left: t, behavior: "instant" })
          : this.options.wrapper.scrollTo({ top: t, behavior: "instant" });
      }
      resize() {
        this.dimensions.resize(),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          this.emit();
      }
      emit() {
        this.emitter.emit("scroll", this);
      }
      reset() {
        (this.isLocked = !1),
          (this.isScrolling = !1),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          (this.lastVelocity = this.velocity = 0),
          this.animate.stop();
      }
      start() {
        this.isStopped && (this.reset(), (this.isStopped = !1));
      }
      stop() {
        this.isStopped || (this.reset(), (this.isStopped = !0));
      }
      scrollTo(
        t,
        {
          offset: e = 0,
          immediate: n = !1,
          lock: r = !1,
          duration: i = this.options.duration,
          easing: s = this.options.easing,
          lerp: a = this.options.lerp,
          onStart: o,
          onComplete: l,
          force: c = !1,
          programmatic: u = !0,
          userData: f,
        } = {}
      ) {
        if (!((this.isStopped || this.isLocked) && !c)) {
          if (typeof t == "string" && ["top", "left", "start"].includes(t))
            t = 0;
          else if (
            typeof t == "string" &&
            ["bottom", "right", "end"].includes(t)
          )
            t = this.limit;
          else {
            let d;
            if (
              (typeof t == "string"
                ? (d = document.querySelector(t))
                : t instanceof HTMLElement &&
                  t != null &&
                  t.nodeType &&
                  (d = t),
              d)
            ) {
              if (this.options.wrapper !== window) {
                const m = this.rootElement.getBoundingClientRect();
                e -= this.isHorizontal ? m.left : m.top;
              }
              const h = d.getBoundingClientRect();
              t = (this.isHorizontal ? h.left : h.top) + this.animatedScroll;
            }
          }
          if (typeof t == "number") {
            if (((t += e), (t = Math.round(t)), this.options.infinite)) {
              if (u) {
                this.targetScroll = this.animatedScroll = this.scroll;
                const d = t - this.animatedScroll;
                d > this.limit / 2
                  ? (t = t - this.limit)
                  : d < -this.limit / 2 && (t = t + this.limit);
              }
            } else t = Td(0, t, this.limit);
            if (t === this.targetScroll) {
              o == null || o(this), l == null || l(this);
              return;
            }
            if (((this.userData = f != null ? f : {}), n)) {
              (this.animatedScroll = this.targetScroll = t),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                l == null || l(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                });
              return;
            }
            u || (this.targetScroll = t),
              this.animate.fromTo(this.animatedScroll, t, {
                duration: i,
                easing: s,
                lerp: a,
                onStart: () => {
                  r && (this.isLocked = !0),
                    (this.isScrolling = "smooth"),
                    o == null || o(this);
                },
                onUpdate: (d, h) => {
                  (this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = d - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = d),
                    this.setScroll(this.scroll),
                    u && (this.targetScroll = d),
                    h || this.emit(),
                    h &&
                      (this.reset(),
                      this.emit(),
                      l == null || l(this),
                      (this.userData = {}),
                      requestAnimationFrame(() => {
                        this.dispatchScrollendEvent();
                      }),
                      this.preventNextNativeScrollEvent());
                },
              });
          }
        }
      }
      preventNextNativeScrollEvent() {
        (this._preventNextNativeScrollEvent = !0),
          requestAnimationFrame(() => {
            this._preventNextNativeScrollEvent = !1;
          });
      }
      checkNestedScroll(t, { deltaX: e, deltaY: n }) {
        var S, w;
        const r = Date.now(),
          i = (S = t._lenis) != null ? S : (t._lenis = {});
        let s, a, o, l, c, u, f, d;
        const h = this.options.gestureOrientation;
        if (r - ((w = i.time) != null ? w : 0) > 2e3) {
          i.time = Date.now();
          const C = window.getComputedStyle(t);
          i.computedStyle = C;
          const P = C.overflowX,
            O = C.overflowY;
          if (
            ((s = ["auto", "overlay", "scroll"].includes(P)),
            (a = ["auto", "overlay", "scroll"].includes(O)),
            (i.hasOverflowX = s),
            (i.hasOverflowY = a),
            (!s && !a) ||
              (h === "vertical" && !a) ||
              (h === "horizontal" && !s))
          )
            return !1;
          (c = t.scrollWidth),
            (u = t.scrollHeight),
            (f = t.clientWidth),
            (d = t.clientHeight),
            (o = c > f),
            (l = u > d),
            (i.isScrollableX = o),
            (i.isScrollableY = l),
            (i.scrollWidth = c),
            (i.scrollHeight = u),
            (i.clientWidth = f),
            (i.clientHeight = d);
        } else
          (o = i.isScrollableX),
            (l = i.isScrollableY),
            (s = i.hasOverflowX),
            (a = i.hasOverflowY),
            (c = i.scrollWidth),
            (u = i.scrollHeight),
            (f = i.clientWidth),
            (d = i.clientHeight);
        if (
          (!s && !a) ||
          (!o && !l) ||
          (h === "vertical" && (!a || !l)) ||
          (h === "horizontal" && (!s || !o))
        )
          return !1;
        let m;
        if (h === "horizontal") m = "x";
        else if (h === "vertical") m = "y";
        else {
          const C = e !== 0,
            P = n !== 0;
          C && s && o && (m = "x"), P && a && l && (m = "y");
        }
        if (!m) return !1;
        let p, g, y, v, _;
        if (m === "x")
          (p = t.scrollLeft), (g = c - f), (y = e), (v = s), (_ = o);
        else if (m === "y")
          (p = t.scrollTop), (g = u - d), (y = n), (v = a), (_ = l);
        else return !1;
        return (y > 0 ? p < g : p > 0) && v && _;
      }
      get rootElement() {
        return this.options.wrapper === window
          ? document.documentElement
          : this.options.wrapper;
      }
      get limit() {
        return this.options.__experimental__naiveDimensions
          ? this.isHorizontal
            ? this.rootElement.scrollWidth - this.rootElement.clientWidth
            : this.rootElement.scrollHeight - this.rootElement.clientHeight
          : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
      }
      get isHorizontal() {
        return this.options.orientation === "horizontal";
      }
      get actualScroll() {
        var e, n;
        const t = this.options.wrapper;
        return this.isHorizontal
          ? (e = t.scrollX) != null
            ? e
            : t.scrollLeft
          : (n = t.scrollY) != null
          ? n
          : t.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? U0(this.animatedScroll, this.limit)
          : this.animatedScroll;
      }
      get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
      }
      get isScrolling() {
        return this._isScrolling;
      }
      set isScrolling(t) {
        this._isScrolling !== t &&
          ((this._isScrolling = t), this.updateClassName());
      }
      get isStopped() {
        return this._isStopped;
      }
      set isStopped(t) {
        this._isStopped !== t &&
          ((this._isStopped = t), this.updateClassName());
      }
      get isLocked() {
        return this._isLocked;
      }
      set isLocked(t) {
        this._isLocked !== t && ((this._isLocked = t), this.updateClassName());
      }
      get isSmooth() {
        return this.isScrolling === "smooth";
      }
      get className() {
        let t = "lenis";
        return (
          this.options.autoToggle && (t += " lenis-autoToggle"),
          this.isStopped && (t += " lenis-stopped"),
          this.isLocked && (t += " lenis-locked"),
          this.isScrolling && (t += " lenis-scrolling"),
          this.isScrolling === "smooth" && (t += " lenis-smooth"),
          t
        );
      }
      updateClassName() {
        this.cleanUpClassName(),
          (this.rootElement.className =
            `${this.rootElement.className} ${this.className}`.trim());
      }
      cleanUpClassName() {
        this.rootElement.className = this.rootElement.className
          .replace(/lenis(-\w+)?/g, "")
          .trim();
      }
    };
  N.registerPlugin(Z);
  let za;
  const ty = () => {
      (za = new ey({ autoRaf: !0 })),
        za.on("scroll", Z.update),
        N.ticker.add((t) => {
          za.raf(t * 1e3);
        }),
        N.ticker.lagSmoothing(0);
    },
    Cd = () => {
      ty();
    },
    Cs = () => za,
    ny = () => {
      const t = document.querySelectorAll("[career-modal='open-trigger']"),
        e = document.querySelectorAll("[career-modal='modal']");
      if (!t || !e) {
        console.error("No open triggers or career modal found");
        return;
      }
      let n = null,
        r = null;
      const i = (s) => {
        if (s.key === "Escape" && n && r) {
          r.restart();
          const a = Cs();
          a && a.start();
        }
      };
      document.addEventListener("keydown", i),
        e.forEach((s) => {
          const a = s.getAttribute("career-modal-name"),
            o = s.querySelector("[career-modal='component']"),
            l = s.querySelector("[career-modal='main-info']"),
            c = s.querySelector("[career-modal='sec-info']"),
            u = s.querySelectorAll("[career-modal='close-trigger']");
          if (!o || !l || !c || !u) return;
          N.set(s, {
            opacity: 0,
            pointerEvents: "none",
            visibility: "hidden",
            display: "none",
          }),
            N.set(o, { clipPath: "inset(0% 0% 100% 0%)" }),
            N.set([l, c], { opacity: 0, y: 100, filter: "blur(2px)" });
          const f = N.timeline({ paused: !0 }),
            d = N.timeline({ paused: !0 });
          f.to(s, {
            opacity: 1,
            pointerEvents: "auto",
            visibility: "visible",
            display: "block",
            ease: "expo.out",
            duration: 0,
          }),
            f.to(
              o,
              {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "expo.inOut",
                duration: 1,
              },
              "<"
            ),
            f.to(
              [l, c],
              {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                ease: "expo.out",
                duration: 1.2,
                stagger: 0.14,
              },
              "-=0.55"
            ),
            d.to([l, c], {
              y: 100,
              opacity: 0,
              filter: "blur(2px)",
              ease: "expo.out",
              duration: 0.8,
              stagger: -0.14,
            }),
            d.to(
              o,
              {
                clipPath: "inset(0% 0% 100% 0%)",
                ease: "expo.inOut",
                duration: 0.8,
              },
              "<"
            ),
            d.to(
              s,
              {
                opacity: 0,
                ease: "expo.in",
                duration: 0.8,
                pointerEvents: "none",
                onComplete: () => {
                  (s.style.visibility = "hidden"),
                    (s.style.display = "none"),
                    (s.style.pointerEvents = "none");
                },
              },
              "<"
            );
          const h = Array.from(t).find(
            (m) => m.getAttribute("career-modal-name") === a
          );
          h &&
            h.addEventListener("click", () => {
              f.restart(), (n = s), (r = d);
              const m = Cs();
              m && m.stop();
            }),
            u.forEach((m) => {
              m.addEventListener("click", () => {
                d.restart(), (n = null), (r = null);
                const p = Cs();
                p && p.start();
              });
            });
        });
    },
    ry = () => {
      ny();
    },
    iy = () => {
      const t = document.querySelectorAll("[clock='component']"),
        e = () => {
          t.forEach((n) => {
            const r = n.querySelector("[clock-location]"),
              i = r == null ? void 0 : r.dataset.timezone,
              s = n.querySelector("[clock='hour-hand']"),
              a = n.querySelector("[clock='minute-hand']"),
              o = n.querySelector("[clock='text']");
            if (!i || !s || !a || !o) return;
            const l = new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: !0,
                timeZone: i,
              }),
              c = new Date(new Date().toLocaleString("en-US", { timeZone: i })),
              u = c.getHours() % 12,
              f = c.getMinutes(),
              d = c.getSeconds(),
              h = (u + f / 60) * 30,
              m = (f + d / 60) * 6;
            s.setAttribute("transform", `rotate(${h} 10 10)`),
              a.setAttribute("transform", `rotate(${m} 10 10)`),
              (o.textContent = l);
          }),
            requestAnimationFrame(e);
        };
      e();
    },
    Pd = () => {
      iy();
    };
  N.registerPlugin(Ae);
  const sy = (t) => {
      const e = document.querySelector("[contact-hero='text']"),
        n = document.querySelector("[contact-hero='visual']"),
        r = document.querySelectorAll("[contact-hero='visual-info']"),
        i = document.querySelectorAll("[contact-hero='cta']");
      new Ae(e, {
        type: "lines",
        linesClass: "contact-hero-text-line",
        mask: "lines",
        tag: "span",
      }).lines.forEach((l) => {
        const c = document.createElement("div");
        c.classList.add("move-text"),
          l.parentNode.insertBefore(c, l),
          c.appendChild(l);
      });
      const a = e.querySelectorAll("span");
      a.length &&
        a.forEach((l) => {
          const c = document.createElement("div");
          (c.style.overflow = "clip"),
            (c.style.paddingBottom = "3px"),
            l.parentNode.insertBefore(c, l),
            c.appendChild(l);
        });
      const o = N.timeline();
      return (
        N.set(".move-text", { opacity: 0, yPercent: 100 }),
        N.set(n, { opacity: 0, clipPath: "inset(50% round 16px)" }),
        N.set(r, { opacity: 0, y: 50 }),
        N.set(i, { opacity: 0, yPercent: 50 }),
        o.to(".move-text", {
          opacity: 1,
          duration: 1.8,
          stagger: 0.08,
          ease: "expo.inOut",
          yPercent: 0,
        }),
        o.to(
          n,
          {
            opacity: 1,
            clipPath: "inset(0% round 10px)",
            duration: 1.8,
            ease: "expo.inOut",
          },
          "-=1.4"
        ),
        o.to(
          r,
          { opacity: 1, y: 0, duration: 1.4, stagger: 0.1, ease: "expo.out" },
          "-=1"
        ),
        o.to(
          i,
          {
            opacity: 1,
            yPercent: 0,
            duration: 1.8,
            stagger: 0.1,
            ease: "expo.out",
          },
          "-=1.2"
        ),
        o
      );
    },
    ay = () => {
      Pd(), sr(), ar();
      const t = qr();
      t.add(() => or(), "-=1"), t.add(() => sy(), "-=1");
    };
  N.registerPlugin(Ae);
  const oy = (t) => {
      const e = document.querySelector("[career-hero='text']"),
        n = document.querySelector("[career-hero='btn']"),
        r = document.querySelector("[career-hero='visual']");
      new Ae(e, {
        type: "lines",
        linesClass: "career-hero-text-line",
        mask: "lines",
        tag: "span",
      }).lines.forEach((o) => {
        const l = document.createElement("div");
        l.classList.add("move-text"),
          o.parentNode.insertBefore(l, o),
          l.appendChild(o);
      });
      const s = e.querySelectorAll("span");
      s.length &&
        s.forEach((o) => {
          const l = document.createElement("div");
          (l.style.overflow = "clip"),
            (l.style.paddingBottom = "3px"),
            o.parentNode.insertBefore(l, o),
            l.appendChild(o);
        });
      const a = N.timeline();
      return (
        N.set(".move-text", { opacity: 0, yPercent: 100 }),
        N.set(n, { opacity: 0 }),
        N.set(r, { opacity: 0 }),
        a.to(".move-text", {
          opacity: 1,
          duration: 1.8,
          stagger: 0.08,
          ease: "expo.inOut",
          yPercent: 0,
        }),
        a.to(n, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
        a.to(
          r,
          { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "expo.inOut" },
          "-=1"
        ),
        a
      );
    },
    ly = () => {
      ql(), ry(), Pd(), sr(), ar();
      const t = qr();
      t.add(() => or(), "-=1"), t.add(() => oy(), "-=1");
    };
  N.registerPlugin(Ae);
  const cy = (t) => {
      const e = document.querySelector("[work-hero='text']"),
        n = document.querySelector("[work-hero='filter-wrap']"),
        r = document.querySelectorAll("[work-hero='project']");
      new Ae(e, {
        type: "lines",
        linesClass: "work-hero-text-line",
        mask: "lines",
        tag: "span",
      }).lines.forEach((o) => {
        const l = document.createElement("div");
        l.classList.add("move-text"),
          o.parentNode.insertBefore(l, o),
          l.appendChild(o);
      });
      const s = e.querySelectorAll("span");
      s.length &&
        s.forEach((o) => {
          const l = document.createElement("div");
          (l.style.overflow = "clip"),
            (l.style.paddingBottom = "3px"),
            o.parentNode.insertBefore(l, o),
            l.appendChild(o);
        });
      const a = N.timeline();
      return (
        N.set(".move-text", { opacity: 0, yPercent: 100 }),
        N.set(n, { opacity: 0 }),
        N.set(r, { y: 100, opacity: 0 }),
        a.to(".move-text", {
          opacity: 1,
          duration: 1.8,
          stagger: 0.08,
          ease: "expo.inOut",
          yPercent: 0,
        }),
        a.to(n, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
        a.to(
          r,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            stagger: 0.08,
            ease: "expo.inOut",
          },
          "-=1"
        ),
        a
      );
    },
    uy = () => {
      Sd(), sr(), ar();
      const t = qr();
      t.add(() => or(), "-=1"), t.add(() => cy(), "-=1");
    },
    fy = () => {
      const t = document.querySelector("[service-link='wrap']");
      if (!t) return;
      const e = t.querySelectorAll("[service-link='item']"),
        n = document.querySelectorAll("[service-item]"),
        r = t.querySelector("[service-link='line-wrap']"),
        i = r == null ? void 0 : r.querySelector("[service-link='line']"),
        s = document.querySelector("[hero-gradient='main']"),
        a = document.querySelectorAll("[hero-gradient]");
      if (!e.length || !n.length || !r || !i) return;
      let o = !1,
        l = null,
        c = null;
      const u = new Set(),
        f = () => {
          e.forEach((y) => {
            const v = y.querySelector("[service-link='num']");
            y.setAttribute("service-link-status", "inactive"),
              N.to(y, { opacity: 0.2, duration: 0.3 }),
              N.to(v, { opacity: 0, y: 5, duration: 0.3 });
          }),
            n.forEach((y) => {
              y.setAttribute("service-item-status", "inactive");
            }),
            a.forEach((y) => {
              y.getAttribute("hero-gradient") !== "main" &&
                N.to(y, { opacity: 0, duration: 0.5 });
            }),
            s && N.to(s, { opacity: 1, duration: 0.5 });
        },
        d = (y) => {
          if (c === y) return;
          c = y;
          const v = document.querySelector(
              `[service-link='item'][item-name='${y}']`
            ),
            _ = document.querySelector(`[service-item='${y}']`),
            x = document.querySelector(`[hero-gradient='${y}']`);
          if (v && _) {
            f();
            const S = v.querySelector("[service-link='num']");
            v.setAttribute("service-link-status", "active"),
              N.to(v, { opacity: 1, duration: 0.4 }),
              N.to(S, { opacity: 1, y: 0, duration: 0.4 }),
              _.setAttribute("service-item-status", "active"),
              u.has(y) || (h(_), u.add(y)),
              x &&
                (s && N.to(s, { opacity: 0, duration: 0.5 }),
                N.to(x, { opacity: 1, duration: 0.5 })),
              m(v);
          }
        },
        h = (y) => {
          const v = y.children;
          N.set(v, { opacity: 0, y: 50 }),
            N.to(v, {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.1,
              ease: "power2.out",
            });
        },
        m = (y) => {
          const v = Array.from(e).indexOf(y),
            _ = e.length,
            x = r.offsetHeight,
            S = i.offsetHeight,
            w = x - S,
            C = _ > 1 ? v / (_ - 1) : 0,
            P = w * C;
          N.to(i, { y: P, duration: 0.6, ease: "power2.out" });
        };
      s && N.set(s, { opacity: 1 }),
        a.forEach((y) => {
          y.getAttribute("hero-gradient") !== "main" &&
            N.set(y, { opacity: 0 });
        }),
        n.forEach((y) => {
          N.set(y.children, { opacity: 0, y: 50 });
        }),
        e.forEach((y) => {
          const v = y.getAttribute("item-name");
          y.addEventListener("click", () => {
            v &&
              (l && clearTimeout(l),
              (o = !0),
              d(v),
              Cs().scrollTo(document.querySelector(`[service-item='${v}']`), {
                duration: 1.6,
                offset: -100,
              }),
              (l = setTimeout(() => {
                o = !1;
              }, 2e3)));
          });
        });
      const p = new Map(),
        g = new IntersectionObserver(
          (y) => {
            if (o) return;
            y.forEach((x) => {
              const S = x.target.getAttribute("service-item");
              S &&
                (p.set(S, x.intersectionRatio),
                x.isIntersecting &&
                  x.intersectionRatio >= 0.3 &&
                  !u.has(S) &&
                  (h(x.target), u.add(S)));
            });
            let v = null,
              _ = 0;
            p.forEach((x, S) => {
              x > _ && ((_ = x), (v = S));
            }),
              v && _ >= 0.3 ? d(v) : _ < 0.3 && (f(), (c = null));
          },
          { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
        );
      n.forEach((y) => g.observe(y));
    },
    dy = () => {
      fy();
    };
  /*!
   * DrawSVGPlugin 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Sn,
    Hl,
    Ra,
    kd,
    Md,
    $d,
    Vl,
    Od,
    Ad = function () {
      return typeof window != "undefined";
    },
    Ld = function () {
      return Sn || (Ad() && (Sn = window.gsap) && Sn.registerPlugin && Sn);
    },
    hy = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    Wl = {
      rect: ["width", "height"],
      circle: ["r", "r"],
      ellipse: ["rx", "ry"],
      line: ["x2", "y2"],
    },
    Hr = function (e) {
      return Math.round(e * 1e4) / 1e4;
    },
    Nn = function (e) {
      return parseFloat(e) || 0;
    },
    Id = function (e, n) {
      var r = Nn(e);
      return ~e.indexOf("%") ? (r / 100) * n : r;
    },
    Na = function (e, n) {
      return Nn(e.getAttribute(n));
    },
    Fa = Math.sqrt,
    Dd = function (e, n, r, i, s, a) {
      return Fa(
        Math.pow((Nn(r) - Nn(e)) * s, 2) + Math.pow((Nn(i) - Nn(n)) * a, 2)
      );
    },
    zd = function (e) {
      return console.warn(e);
    },
    Rd = function (e) {
      return e.getAttribute("vector-effect") === "non-scaling-stroke";
    },
    py = 1,
    my = function (e, n, r) {
      var i = e.indexOf(" "),
        s,
        a;
      return (
        i < 0
          ? ((s = r !== void 0 ? r + "" : e), (a = e))
          : ((s = e.substr(0, i)), (a = e.substr(i + 1))),
        (s = Id(s, n)),
        (a = Id(a, n)),
        s > a ? [a, s] : [s, a]
      );
    },
    Ba = function (e) {
      if (((e = Hl(e)[0]), !e)) return 0;
      var n = e.tagName.toLowerCase(),
        r = e.style,
        i = 1,
        s = 1,
        a,
        o,
        l,
        c,
        u,
        f,
        d;
      Rd(e) &&
        ((s = e.getScreenCTM()),
        (i = Fa(s.a * s.a + s.b * s.b)),
        (s = Fa(s.d * s.d + s.c * s.c)));
      try {
        o = e.getBBox();
      } catch (v) {
        zd(
          "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
        );
      }
      var h = o || { x: 0, y: 0, width: 0, height: 0 },
        m = h.x,
        p = h.y,
        g = h.width,
        y = h.height;
      if (
        ((!o || (!g && !y)) &&
          Wl[n] &&
          ((g = Na(e, Wl[n][0])),
          (y = Na(e, Wl[n][1])),
          n !== "rect" && n !== "line" && ((g *= 2), (y *= 2)),
          n === "line" &&
            ((m = Na(e, "x1")),
            (p = Na(e, "y1")),
            (g = Math.abs(g - m)),
            (y = Math.abs(y - p)))),
        n === "path")
      )
        (c = r.strokeDasharray),
          (r.strokeDasharray = "none"),
          (a = e.getTotalLength() || 0),
          Hr(i) !== Hr(s) &&
            !$d &&
            ($d = 1) &&
            zd(
              "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
            ),
          (a *= (i + s) / 2),
          (r.strokeDasharray = c);
      else if (n === "rect") a = g * 2 * i + y * 2 * s;
      else if (n === "line") a = Dd(m, p, m + g, p + y, i, s);
      else if (n === "polyline" || n === "polygon")
        for (
          l = e.getAttribute("points").match(hy) || [],
            n === "polygon" && l.push(l[0], l[1]),
            a = 0,
            u = 2;
          u < l.length;
          u += 2
        )
          a += Dd(l[u - 2], l[u - 1], l[u], l[u + 1], i, s) || 0;
      else
        (n === "circle" || n === "ellipse") &&
          ((f = (g / 2) * i),
          (d = (y / 2) * s),
          (a = Math.PI * (3 * (f + d) - Fa((3 * f + d) * (f + 3 * d)))));
      return a || 0;
    },
    Nd = function (e, n) {
      if (((e = Hl(e)[0]), !e)) return [0, 0];
      n || (n = Ba(e) + 1);
      var r = Ra.getComputedStyle(e),
        i = r.strokeDasharray || "",
        s = Nn(r.strokeDashoffset),
        a = i.indexOf(",");
      return (
        a < 0 && (a = i.indexOf(" ")),
        (i = a < 0 ? n : Nn(i.substr(0, a))),
        i > n && (i = n),
        [-s || 0, i - s || 0]
      );
    },
    Fd = function () {
      Ad() &&
        ((Ra = window),
        (Md = Sn = Ld()),
        (Hl = Sn.utils.toArray),
        (Vl = Sn.core.getStyleSaver),
        (Od = Sn.core.reverting || function () {}),
        (kd = ((Ra.navigator || {}).userAgent || "").indexOf("Edge") !== -1));
    },
    Bd = {
      version: "3.13.0",
      name: "drawSVG",
      register: function (e) {
        (Sn = e), Fd();
      },
      init: function (e, n, r, i, s) {
        if (!e.getBBox) return !1;
        Md || Fd();
        var a = Ba(e),
          o,
          l,
          c;
        return (
          (this.styles =
            Vl && Vl(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
          (this.tween = r),
          (this._style = e.style),
          (this._target = e),
          n + "" == "true"
            ? (n = "0 100%")
            : n
            ? (n + "").indexOf(" ") === -1 && (n = "0 " + n)
            : (n = "0 0"),
          (o = Nd(e, a)),
          (l = my(n, a, o[0])),
          (this._length = Hr(a)),
          (this._dash = Hr(o[1] - o[0])),
          (this._offset = Hr(-o[0])),
          (this._dashPT = this.add(
            this,
            "_dash",
            this._dash,
            Hr(l[1] - l[0]),
            0,
            0,
            0,
            0,
            0,
            1
          )),
          (this._offsetPT = this.add(
            this,
            "_offset",
            this._offset,
            Hr(-l[0]),
            0,
            0,
            0,
            0,
            0,
            1
          )),
          kd &&
            ((c = Ra.getComputedStyle(e)),
            c.strokeLinecap !== c.strokeLinejoin &&
              ((l = Nn(c.strokeMiterlimit)),
              this.add(e.style, "strokeMiterlimit", l, l + 0.01))),
          (this._live = Rd(e) || ~(n + "").indexOf("live")),
          (this._nowrap = ~(n + "").indexOf("nowrap")),
          this._props.push("drawSVG"),
          py
        );
      },
      render: function (e, n) {
        if (n.tween._time || !Od()) {
          var r = n._pt,
            i = n._style,
            s,
            a,
            o,
            l;
          if (r) {
            for (
              n._live &&
              ((s = Ba(n._target)),
              s !== n._length &&
                ((a = s / n._length),
                (n._length = s),
                n._offsetPT && ((n._offsetPT.s *= a), (n._offsetPT.c *= a)),
                n._dashPT
                  ? ((n._dashPT.s *= a), (n._dashPT.c *= a))
                  : (n._dash *= a)));
              r;

            )
              r.r(e, r.d), (r = r._next);
            (o = n._dash || (e && e !== 1 && 1e-4) || 0),
              (s = n._length - o + 0.1),
              (l = n._offset),
              o &&
                l &&
                o + Math.abs(l % n._length) > n._length - 0.05 &&
                (l += l < 0 ? 0.005 : -0.005) &&
                (s += 0.005),
              (i.strokeDashoffset = o ? l : l + 0.001),
              (i.strokeDasharray =
                s < 0.1
                  ? "none"
                  : o
                  ? o + "px," + (n._nowrap ? 999999 : s) + "px"
                  : "0px, 999999px");
          }
        } else n.styles.revert();
      },
      getLength: Ba,
      getPosition: Nd,
    };
  Ld() && Sn.registerPlugin(Bd), N.registerPlugin(Ae), N.registerPlugin(Bd);
  const gy = (t) => {
      const e = document.querySelector("[service-hero='text']"),
        n = document.querySelectorAll("[service-hero='btn']"),
        r = document.querySelectorAll("[service-hero='svg']"),
        i = document.querySelectorAll("[service-hero='svg'] path");
      new Ae(e, {
        type: "lines",
        linesClass: "service-hero-text-line",
        mask: "lines",
        tag: "span",
      }).lines.forEach((l) => {
        const c = document.createElement("div");
        c.classList.add("move-text"),
          l.parentNode.insertBefore(c, l),
          c.appendChild(l);
      });
      const a = e.querySelectorAll("span");
      a.length &&
        a.forEach((l) => {
          const c = document.createElement("div");
          (c.style.overflow = "clip"),
            (c.style.paddingBottom = "3px"),
            l.parentNode.insertBefore(c, l),
            c.appendChild(l);
        });
      const o = N.timeline();
      return (
        N.set(".move-text", { opacity: 0, yPercent: 100 }),
        N.set(n, { opacity: 0, yPercent: 20, scale: 0 }),
        N.set(r, { opacity: 0 }),
        N.set(i, { drawSVG: 0 }),
        o.to(r, { opacity: 1, duration: 0, ease: "power1.out" }),
        o.to(
          ".move-text",
          {
            opacity: 1,
            duration: 1.8,
            stagger: 0.08,
            ease: "expo.inOut",
            yPercent: 0,
          },
          "<"
        ),
        o.to(
          n,
          {
            opacity: 1,
            yPercent: 0,
            duration: 1.2,
            ease: "expo.out",
            scale: 1,
            stagger: 0.1,
          },
          "-=0.8"
        ),
        o.to(
          i,
          { opacity: 1, drawSVG: "100%", duration: 5, ease: "expo.inOut" },
          "-=2.2"
        ),
        o
      );
    },
    vy = () => {
      dy(), sr(), ar();
      const t = qr();
      t.add(() => or(), "-=1"), t.add(() => gy(), "-=1");
    },
    yy = () => {
      const t = document.querySelectorAll("[service-item]"),
        e = document.querySelector("[hero-gradient='main']"),
        n = document.querySelectorAll("[hero-gradient]");
      if (!t.length || !e) return;
      let r = !1,
        i = null,
        s = null;
      const a = () => {
          n.forEach((f) => {
            f.getAttribute("hero-gradient") !== "main" &&
              N.to(f, { opacity: 0, duration: 0.5 });
          }),
            N.to(e, { opacity: 1, duration: 0.5 });
        },
        o = (f) => {
          if (s === f) return;
          s = f;
          const d = document.querySelector(`[hero-gradient='${f}']`);
          d &&
            (N.to(e, { opacity: 0, duration: 0.5 }),
            n.forEach((h) => {
              const m = h.getAttribute("hero-gradient");
              m !== "main" && m !== f && N.to(h, { opacity: 0, duration: 0.5 });
            }),
            N.to(d, { opacity: 1, duration: 0.5 }));
        };
      N.set(e, { opacity: 1 }),
        n.forEach((f) => {
          f.getAttribute("hero-gradient") !== "main" &&
            N.set(f, { opacity: 0 });
        });
      const l = new Map(),
        c = new IntersectionObserver(
          (f) => {
            if (r) return;
            f.forEach((m) => {
              const p = m.target.getAttribute("service-item");
              p && l.set(p, m.intersectionRatio);
            });
            let d = null,
              h = 0;
            l.forEach((m, p) => {
              m > h && ((h = m), (d = p));
            }),
              d && h >= 0.3 ? o(d) : h < 0.3 && (a(), (s = null));
          },
          { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
        );
      return (
        t.forEach((f) => c.observe(f)),
        {
          setGradient: (f) => {
            i && clearTimeout(i),
              (r = !0),
              f ? o(f) : (a(), (s = null)),
              (i = setTimeout(() => {
                r = !1;
              }, 1e3));
          },
          showMainGradient: a,
        }
      );
    },
    _y = () => yy();
  /*!
   * matrix 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Fn,
    Vr,
    Xl,
    qa,
    Ps,
    Ha,
    Va,
    ks,
    rn = "transform",
    Yl = rn + "Origin",
    qd,
    Gl = function (e) {
      var n = e.ownerDocument || e;
      for (
        !(rn in e.style) &&
        ("msTransform" in e.style) &&
        ((rn = "msTransform"), (Yl = rn + "Origin"));
        n.parentNode && (n = n.parentNode);

      );
      if (((Vr = window), (Va = new Wr()), n)) {
        (Fn = n),
          (Xl = n.documentElement),
          (qa = n.body),
          (ks = Fn.createElementNS("http://www.w3.org/2000/svg", "g")),
          (ks.style.transform = "none");
        var r = n.createElement("div"),
          i = n.createElement("div"),
          s = n && (n.body || n.firstElementChild);
        s &&
          s.appendChild &&
          (s.appendChild(r),
          r.appendChild(i),
          r.setAttribute(
            "style",
            "position:static;transform:translate3d(0,0,1px)"
          ),
          (qd = i.offsetParent !== r),
          s.removeChild(r));
      }
      return n;
    },
    by = function (e) {
      for (var n, r; e && e !== qa; )
        (r = e._gsap),
          r && r.uncache && r.get(e, "x"),
          r &&
            !r.scaleX &&
            !r.scaleY &&
            r.renderTransform &&
            ((r.scaleX = r.scaleY = 1e-4),
            r.renderTransform(1, r),
            n ? n.push(r) : (n = [r])),
          (e = e.parentNode);
      return n;
    },
    Hd = [],
    Vd = [],
    jl = function () {
      return (
        Vr.pageYOffset || Fn.scrollTop || Xl.scrollTop || qa.scrollTop || 0
      );
    },
    Ul = function () {
      return (
        Vr.pageXOffset || Fn.scrollLeft || Xl.scrollLeft || qa.scrollLeft || 0
      );
    },
    Kl = function (e) {
      return (
        e.ownerSVGElement ||
        ((e.tagName + "").toLowerCase() === "svg" ? e : null)
      );
    },
    xy = function t(e) {
      if (Vr.getComputedStyle(e).position === "fixed") return !0;
      if (((e = e.parentNode), e && e.nodeType === 1)) return t(e);
    },
    Zl = function t(e, n) {
      if (e.parentNode && (Fn || Gl(e))) {
        var r = Kl(e),
          i = r
            ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
            : "http://www.w3.org/1999/xhtml",
          s = r ? (n ? "rect" : "g") : "div",
          a = n !== 2 ? 0 : 100,
          o = n === 3 ? 100 : 0,
          l =
            "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
          c = Fn.createElementNS
            ? Fn.createElementNS(i.replace(/^https/, "http"), s)
            : Fn.createElement(s);
        return (
          n &&
            (r
              ? (Ha || (Ha = t(e)),
                c.setAttribute("width", 0.01),
                c.setAttribute("height", 0.01),
                c.setAttribute("transform", "translate(" + a + "," + o + ")"),
                Ha.appendChild(c))
              : (Ps || ((Ps = t(e)), (Ps.style.cssText = l)),
                (c.style.cssText =
                  l +
                  "width:0.1px;height:0.1px;top:" +
                  o +
                  "px;left:" +
                  a +
                  "px"),
                Ps.appendChild(c))),
          c
        );
      }
      throw "Need document and parent.";
    },
    Sy = function (e) {
      for (var n = new Wr(), r = 0; r < e.numberOfItems; r++)
        n.multiply(e.getItem(r).matrix);
      return n;
    },
    Wd = function (e) {
      var n = e.getCTM(),
        r;
      return (
        n ||
          ((r = e.style[rn]),
          (e.style[rn] = "none"),
          e.appendChild(ks),
          (n = ks.getCTM()),
          e.removeChild(ks),
          r
            ? (e.style[rn] = r)
            : e.style.removeProperty(
                rn.replace(/([A-Z])/g, "-$1").toLowerCase()
              )),
        n || Va.clone()
      );
    },
    Ty = function (e, n) {
      var r = Kl(e),
        i = e === r,
        s = r ? Hd : Vd,
        a = e.parentNode,
        o =
          a && !r && a.shadowRoot && a.shadowRoot.appendChild
            ? a.shadowRoot
            : a,
        l,
        c,
        u,
        f,
        d,
        h;
      if (e === Vr) return e;
      if (
        (s.length || s.push(Zl(e, 1), Zl(e, 2), Zl(e, 3)), (l = r ? Ha : Ps), r)
      )
        i
          ? ((u = Wd(e)), (f = -u.e / u.a), (d = -u.f / u.d), (c = Va))
          : e.getBBox
          ? ((u = e.getBBox()),
            (c = e.transform ? e.transform.baseVal : {}),
            (c = c.numberOfItems
              ? c.numberOfItems > 1
                ? Sy(c)
                : c.getItem(0).matrix
              : Va),
            (f = c.a * u.x + c.c * u.y),
            (d = c.b * u.x + c.d * u.y))
          : ((c = new Wr()), (f = d = 0)),
          n && e.tagName.toLowerCase() === "g" && (f = d = 0),
          (i ? r : a).appendChild(l),
          l.setAttribute(
            "transform",
            "matrix(" +
              c.a +
              "," +
              c.b +
              "," +
              c.c +
              "," +
              c.d +
              "," +
              (c.e + f) +
              "," +
              (c.f + d) +
              ")"
          );
      else {
        if (((f = d = 0), qd))
          for (
            c = e.offsetParent, u = e;
            u && (u = u.parentNode) && u !== c && u.parentNode;

          )
            (Vr.getComputedStyle(u)[rn] + "").length > 4 &&
              ((f = u.offsetLeft), (d = u.offsetTop), (u = 0));
        if (
          ((h = Vr.getComputedStyle(e)),
          h.position !== "absolute" && h.position !== "fixed")
        )
          for (c = e.offsetParent; a && a !== c; )
            (f += a.scrollLeft || 0),
              (d += a.scrollTop || 0),
              (a = a.parentNode);
        (u = l.style),
          (u.top = e.offsetTop - d + "px"),
          (u.left = e.offsetLeft - f + "px"),
          (u[rn] = h[rn]),
          (u[Yl] = h[Yl]),
          (u.position = h.position === "fixed" ? "fixed" : "absolute"),
          o.appendChild(l);
      }
      return l;
    },
    Ql = function (e, n, r, i, s, a, o) {
      return (
        (e.a = n), (e.b = r), (e.c = i), (e.d = s), (e.e = a), (e.f = o), e
      );
    },
    Wr = (function () {
      function t(n, r, i, s, a, o) {
        n === void 0 && (n = 1),
          r === void 0 && (r = 0),
          i === void 0 && (i = 0),
          s === void 0 && (s = 1),
          a === void 0 && (a = 0),
          o === void 0 && (o = 0),
          Ql(this, n, r, i, s, a, o);
      }
      var e = t.prototype;
      return (
        (e.inverse = function () {
          var r = this.a,
            i = this.b,
            s = this.c,
            a = this.d,
            o = this.e,
            l = this.f,
            c = r * a - i * s || 1e-10;
          return Ql(
            this,
            a / c,
            -i / c,
            -s / c,
            r / c,
            (s * l - a * o) / c,
            -(r * l - i * o) / c
          );
        }),
        (e.multiply = function (r) {
          var i = this.a,
            s = this.b,
            a = this.c,
            o = this.d,
            l = this.e,
            c = this.f,
            u = r.a,
            f = r.c,
            d = r.b,
            h = r.d,
            m = r.e,
            p = r.f;
          return Ql(
            this,
            u * i + d * a,
            u * s + d * o,
            f * i + h * a,
            f * s + h * o,
            l + m * i + p * a,
            c + m * s + p * o
          );
        }),
        (e.clone = function () {
          return new t(this.a, this.b, this.c, this.d, this.e, this.f);
        }),
        (e.equals = function (r) {
          var i = this.a,
            s = this.b,
            a = this.c,
            o = this.d,
            l = this.e,
            c = this.f;
          return (
            i === r.a &&
            s === r.b &&
            a === r.c &&
            o === r.d &&
            l === r.e &&
            c === r.f
          );
        }),
        (e.apply = function (r, i) {
          i === void 0 && (i = {});
          var s = r.x,
            a = r.y,
            o = this.a,
            l = this.b,
            c = this.c,
            u = this.d,
            f = this.e,
            d = this.f;
          return (
            (i.x = s * o + a * c + f || 0), (i.y = s * l + a * u + d || 0), i
          );
        }),
        t
      );
    })();
  function Tn(t, e, n, r) {
    if (!t || !t.parentNode || (Fn || Gl(t)).documentElement === t)
      return new Wr();
    var i = by(t),
      s = Kl(t),
      a = s ? Hd : Vd,
      o = Ty(t, n),
      l = a[0].getBoundingClientRect(),
      c = a[1].getBoundingClientRect(),
      u = a[2].getBoundingClientRect(),
      f = o.parentNode,
      d = !r && xy(t),
      h = new Wr(
        (c.left - l.left) / 100,
        (c.top - l.top) / 100,
        (u.left - l.left) / 100,
        (u.top - l.top) / 100,
        l.left + (d ? 0 : Ul()),
        l.top + (d ? 0 : jl())
      );
    if ((f.removeChild(o), i))
      for (l = i.length; l--; )
        (c = i[l]), (c.scaleX = c.scaleY = 0), c.renderTransform(1, c);
    return e ? h.inverse() : h;
  }
  /*!
   * Flip 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Ey = 1,
    ki,
    ut,
    be,
    Ms,
    cr,
    Bn,
    Jl,
    Xd = function (e, n) {
      return e.actions.forEach(function (r) {
        return r.vars[n] && r.vars[n](r);
      });
    },
    ec = {},
    Yd = 180 / Math.PI,
    wy = Math.PI / 180,
    Wa = {},
    Gd = {},
    Xa = {},
    tc = function (e) {
      return typeof e == "string" ? e.split(" ").join("").split(",") : e;
    },
    Cy = tc("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
    Ya = tc(
      "transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"
    ),
    $s = function (e) {
      return ki(e)[0] || console.warn("Element not found:", e);
    },
    Mi = function (e) {
      return Math.round(e * 1e4) / 1e4 || 0;
    },
    nc = function (e, n, r) {
      return e.forEach(function (i) {
        return i.classList[r](n);
      });
    },
    jd = {
      zIndex: 1,
      kill: 1,
      simple: 1,
      spin: 1,
      clearProps: 1,
      targets: 1,
      toggleClass: 1,
      onComplete: 1,
      onUpdate: 1,
      onInterrupt: 1,
      onStart: 1,
      delay: 1,
      repeat: 1,
      repeatDelay: 1,
      yoyo: 1,
      scale: 1,
      fade: 1,
      absolute: 1,
      props: 1,
      onEnter: 1,
      onLeave: 1,
      custom: 1,
      paused: 1,
      nested: 1,
      prune: 1,
      absoluteOnLeave: 1,
    },
    Ud = {
      zIndex: 1,
      simple: 1,
      clearProps: 1,
      scale: 1,
      absolute: 1,
      fitChild: 1,
      getVars: 1,
      props: 1,
    },
    Kd = function (e) {
      return e.replace(/([A-Z])/g, "-$1").toLowerCase();
    },
    $i = function (e, n) {
      var r = {},
        i;
      for (i in e) n[i] || (r[i] = e[i]);
      return r;
    },
    rc = {},
    Zd = function (e) {
      var n = (rc[e] = tc(e));
      return (Xa[e] = n.concat(Ya)), n;
    },
    Py = function (e) {
      var n = e._gsap || ut.core.getCache(e);
      return n.gmCache === ut.ticker.frame
        ? n.gMatrix
        : ((n.gmCache = ut.ticker.frame), (n.gMatrix = Tn(e, !0, !1, !0)));
    },
    ky = function t(e, n, r) {
      r === void 0 && (r = 0);
      for (
        var i = e.parentNode,
          s = 1e3 * Math.pow(10, r) * (n ? -1 : 1),
          a = n ? -s * 900 : 0;
        e;

      )
        (a += s), (e = e.previousSibling);
      return i ? a + t(i, n, r + 1) : a;
    },
    Ga = function (e, n, r) {
      return (
        e.forEach(function (i) {
          return (i.d = ky(r ? i.element : i.t, n));
        }),
        e.sort(function (i, s) {
          return i.d - s.d;
        }),
        e
      );
    },
    Os = function (e, n) {
      for (
        var r = e.element.style, i = (e.css = e.css || []), s = n.length, a, o;
        s--;

      )
        (a = n[s]),
          (o = r[a] || r.getPropertyValue(a)),
          i.push(o ? a : Gd[a] || (Gd[a] = Kd(a)), o);
      return r;
    },
    ja = function (e) {
      var n = e.css,
        r = e.element.style,
        i = 0;
      for (e.cache.uncache = 1; i < n.length; i += 2)
        n[i + 1] ? (r[n[i]] = n[i + 1]) : r.removeProperty(n[i]);
      !n[n.indexOf("transform") + 1] &&
        r.translate &&
        (r.removeProperty("translate"),
        r.removeProperty("scale"),
        r.removeProperty("rotate"));
    },
    Qd = function (e, n) {
      e.forEach(function (r) {
        return (r.a.cache.uncache = 1);
      }),
        n || e.finalStates.forEach(ja);
    },
    ic =
      "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(
        ","
      ),
    sc = function (e, n, r) {
      var i = e.element,
        s = e.width,
        a = e.height,
        o = e.uncache,
        l = e.getProp,
        c = i.style,
        u = 4,
        f,
        d,
        h;
      if ((typeof n != "object" && (n = e), be && r !== 1))
        return (
          be._abs.push({ t: i, b: e, a: e, sd: 0 }),
          be._final.push(function () {
            return (e.cache.uncache = 1) && ja(e);
          }),
          i
        );
      for (
        d = l("display") === "none",
          (!e.isVisible || d) &&
            (d && (Os(e, ["display"]).display = n.display),
            (e.matrix = n.matrix),
            (e.width = s = e.width || n.width),
            (e.height = a = e.height || n.height)),
          Os(e, ic),
          h = window.getComputedStyle(i);
        u--;

      )
        c[ic[u]] = h[ic[u]];
      if (
        ((c.gridArea = "1 / 1 / 1 / 1"),
        (c.transition = "none"),
        (c.position = "absolute"),
        (c.width = s + "px"),
        (c.height = a + "px"),
        c.top || (c.top = "0px"),
        c.left || (c.left = "0px"),
        o)
      )
        f = new Xr(i);
      else if (((f = $i(e, Wa)), (f.position = "absolute"), e.simple)) {
        var m = i.getBoundingClientRect();
        f.matrix = new Wr(1, 0, 0, 1, m.left + Ul(), m.top + jl());
      } else f.matrix = Tn(i, !1, !1, !0);
      return (
        (f = Oi(f, e, !0)), (e.x = Bn(f.x, 0.01)), (e.y = Bn(f.y, 0.01)), i
      );
    },
    Jd = function (e, n) {
      return (
        n !== !0 &&
          ((n = ki(n)),
          (e = e.filter(function (r) {
            if (n.indexOf((r.sd < 0 ? r.b : r.a).element) !== -1) return !0;
            r.t._gsap.renderTransform(1),
              r.b.isVisible &&
                ((r.t.style.width = r.b.width + "px"),
                (r.t.style.height = r.b.height + "px"));
          }))),
        e
      );
    },
    eh = function (e) {
      return Ga(e, !0).forEach(function (n) {
        return (
          (n.a.isVisible || n.b.isVisible) && sc(n.sd < 0 ? n.b : n.a, n.b, 1)
        );
      });
    },
    My = function (e, n) {
      return (n && e.idLookup[ac(n).id]) || e.elementStates[0];
    },
    ac = function (e, n, r, i) {
      return e instanceof Xr
        ? e
        : e instanceof sn
        ? My(e, i)
        : new Xr(
            typeof e == "string" ? $s(e) || console.warn(e + " not found") : e,
            n,
            r
          );
    },
    $y = function (e, n) {
      for (
        var r = ut.getProperty(e.element, null, "native"),
          i = (e.props = {}),
          s = n.length;
        s--;

      )
        i[n[s]] = (r(n[s]) + "").trim();
      return i.zIndex && (i.zIndex = parseFloat(i.zIndex) || 0), e;
    },
    th = function (e, n) {
      var r = e.style || e,
        i;
      for (i in n) r[i] = n[i];
    },
    Oy = function (e) {
      var n = e.getAttribute("data-flip-id");
      return n || e.setAttribute("data-flip-id", (n = "auto-" + Ey++)), n;
    },
    nh = function (e) {
      return e.map(function (n) {
        return n.element;
      });
    },
    rh = function (e, n, r) {
      return e && n.length && r.add(e(nh(n), r, new sn(n, 0, !0)), 0);
    },
    Oi = function (e, n, r, i, s, a) {
      var o = e.element,
        l = e.cache,
        c = e.parent,
        u = e.x,
        f = e.y,
        d = n.width,
        h = n.height,
        m = n.scaleX,
        p = n.scaleY,
        g = n.rotation,
        y = n.bounds,
        v = a && Jl && Jl(o, "transform,width,height"),
        _ = e,
        x = n.matrix,
        S = x.e,
        w = x.f,
        C =
          e.bounds.width !== y.width ||
          e.bounds.height !== y.height ||
          e.scaleX !== m ||
          e.scaleY !== p ||
          e.rotation !== g,
        P = !C && e.simple && n.simple && !s,
        O,
        T,
        M,
        b,
        E,
        A,
        L;
      return (
        P || !c
          ? ((m = p = 1), (g = O = 0))
          : ((E = Py(c)),
            (A = E.clone().multiply(
              n.ctm ? n.matrix.clone().multiply(n.ctm) : n.matrix
            )),
            (g = Mi(Math.atan2(A.b, A.a) * Yd)),
            (O = Mi(Math.atan2(A.c, A.d) * Yd + g) % 360),
            (m = Math.sqrt(Math.pow(A.a, 2) + Math.pow(A.b, 2))),
            (p =
              Math.sqrt(Math.pow(A.c, 2) + Math.pow(A.d, 2)) *
              Math.cos(O * wy)),
            s &&
              ((s = ki(s)[0]),
              (b = ut.getProperty(s)),
              (L = s.getBBox && typeof s.getBBox == "function" && s.getBBox()),
              (_ = {
                scaleX: b("scaleX"),
                scaleY: b("scaleY"),
                width: L ? L.width : Math.ceil(parseFloat(b("width", "px"))),
                height: L ? L.height : parseFloat(b("height", "px")),
              })),
            (l.rotation = g + "deg"),
            (l.skewX = O + "deg")),
        r
          ? ((m *= d === _.width || !_.width ? 1 : d / _.width),
            (p *= h === _.height || !_.height ? 1 : h / _.height),
            (l.scaleX = m),
            (l.scaleY = p))
          : ((d = Bn((d * m) / _.scaleX, 0)),
            (h = Bn((h * p) / _.scaleY, 0)),
            (o.style.width = d + "px"),
            (o.style.height = h + "px")),
        i && th(o, n.props),
        P || !c
          ? ((u += S - e.matrix.e), (f += w - e.matrix.f))
          : C || c !== n.parent
          ? (l.renderTransform(1, l),
            (A = Tn(s || o, !1, !1, !0)),
            (T = E.apply({ x: A.e, y: A.f })),
            (M = E.apply({ x: S, y: w })),
            (u += M.x - T.x),
            (f += M.y - T.y))
          : ((E.e = E.f = 0),
            (M = E.apply({ x: S - e.matrix.e, y: w - e.matrix.f })),
            (u += M.x),
            (f += M.y)),
        (u = Bn(u, 0.02)),
        (f = Bn(f, 0.02)),
        a && !(a instanceof Xr)
          ? v && v.revert()
          : ((l.x = u + "px"), (l.y = f + "px"), l.renderTransform(1, l)),
        a &&
          ((a.x = u),
          (a.y = f),
          (a.rotation = g),
          (a.skewX = O),
          r
            ? ((a.scaleX = m), (a.scaleY = p))
            : ((a.width = d), (a.height = h))),
        a || l
      );
    },
    oc = function (e, n) {
      return e instanceof sn ? e : new sn(e, n);
    },
    ih = function (e, n, r) {
      var i = e.idLookup[r],
        s = e.alt[r];
      return s.isVisible &&
        (!(n.getElementState(s.element) || s).isVisible || !i.isVisible)
        ? s
        : i;
    },
    lc = [],
    cc = "width,height,overflowX,overflowY".split(","),
    Ua,
    sh = function (e) {
      if (e !== Ua) {
        var n = cr.style,
          r = cr.clientWidth === window.outerWidth,
          i = cr.clientHeight === window.outerHeight,
          s = 4;
        if (e && (r || i)) {
          for (; s--; ) lc[s] = n[cc[s]];
          r && ((n.width = cr.clientWidth + "px"), (n.overflowY = "hidden")),
            i &&
              ((n.height = cr.clientHeight + "px"), (n.overflowX = "hidden")),
            (Ua = e);
        } else if (Ua) {
          for (; s--; )
            lc[s] ? (n[cc[s]] = lc[s]) : n.removeProperty(Kd(cc[s]));
          Ua = e;
        }
      }
    },
    uc = function (e, n, r, i) {
      (e instanceof sn && n instanceof sn) ||
        console.warn("Not a valid state object."),
        (r = r || {});
      var s = r,
        a = s.clearProps,
        o = s.onEnter,
        l = s.onLeave,
        c = s.absolute,
        u = s.absoluteOnLeave,
        f = s.custom,
        d = s.delay,
        h = s.paused,
        m = s.repeat,
        p = s.repeatDelay,
        g = s.yoyo,
        y = s.toggleClass,
        v = s.nested,
        _ = s.zIndex,
        x = s.scale,
        S = s.fade,
        w = s.stagger,
        C = s.spin,
        P = s.prune,
        O = ("props" in r ? r : e).props,
        T = $i(r, jd),
        M = ut.timeline({
          delay: d,
          paused: h,
          repeat: m,
          repeatDelay: p,
          yoyo: g,
          data: "isFlip",
        }),
        b = T,
        E = [],
        A = [],
        L = [],
        k = [],
        I = C === !0 ? 1 : C || 0,
        D =
          typeof C == "function"
            ? C
            : function () {
                return I;
              },
        R = e.interrupted || n.interrupted,
        $ = M[i !== 1 ? "to" : "from"],
        H,
        Y,
        le,
        re,
        U,
        K,
        he,
        me,
        we,
        Le,
        pe,
        Ce,
        W,
        te;
      for (Y in n.idLookup)
        (pe = n.alt[Y] ? ih(n, e, Y) : n.idLookup[Y]),
          (U = pe.element),
          (Le = e.idLookup[Y]),
          e.alt[Y] &&
            U === Le.element &&
            (e.alt[Y].isVisible || !pe.isVisible) &&
            (Le = e.alt[Y]),
          Le
            ? ((K = {
                t: U,
                b: Le,
                a: pe,
                sd: Le.element === U ? 0 : pe.isVisible ? 1 : -1,
              }),
              L.push(K),
              K.sd &&
                (K.sd < 0 && ((K.b = pe), (K.a = Le)),
                R && Os(K.b, O ? Xa[O] : Ya),
                S &&
                  L.push(
                    (K.swap = {
                      t: Le.element,
                      b: K.b,
                      a: K.a,
                      sd: -K.sd,
                      swap: K,
                    })
                  )),
              (U._flip = Le.element._flip = be ? be.timeline : M))
            : pe.isVisible &&
              (L.push({
                t: U,
                b: $i(pe, { isVisible: 1 }),
                a: pe,
                sd: 0,
                entering: 1,
              }),
              (U._flip = be ? be.timeline : M));
      if (
        (O &&
          (rc[O] || Zd(O)).forEach(function (z) {
            return (T[z] = function (ze) {
              return L[ze].a.props[z];
            });
          }),
        (L.finalStates = we = []),
        (Ce = function () {
          for (Ga(L), sh(!0), re = 0; re < L.length; re++)
            (K = L[re]),
              (W = K.a),
              (te = K.b),
              P && !W.isDifferent(te) && !K.entering
                ? L.splice(re--, 1)
                : ((U = K.t),
                  v && !(K.sd < 0) && re && (W.matrix = Tn(U, !1, !1, !0)),
                  te.isVisible && W.isVisible
                    ? (K.sd < 0
                        ? ((he = new Xr(U, O, e.simple)),
                          Oi(he, W, x, 0, 0, he),
                          (he.matrix = Tn(U, !1, !1, !0)),
                          (he.css = K.b.css),
                          (K.a = W = he),
                          S && (U.style.opacity = R ? te.opacity : W.opacity),
                          w && k.push(U))
                        : K.sd > 0 &&
                          S &&
                          (U.style.opacity = R ? W.opacity - te.opacity : "0"),
                      Oi(W, te, x, O))
                    : te.isVisible !== W.isVisible &&
                      (te.isVisible
                        ? W.isVisible ||
                          ((te.css = W.css),
                          A.push(te),
                          L.splice(re--, 1),
                          c && v && Oi(W, te, x, O))
                        : (W.isVisible && E.push(W), L.splice(re--, 1))),
                  x ||
                    ((U.style.maxWidth = Math.max(W.width, te.width) + "px"),
                    (U.style.maxHeight = Math.max(W.height, te.height) + "px"),
                    (U.style.minWidth = Math.min(W.width, te.width) + "px"),
                    (U.style.minHeight = Math.min(W.height, te.height) + "px")),
                  v && y && U.classList.add(y)),
              we.push(W);
          var ze;
          if (
            (y &&
              ((ze = we.map(function (V) {
                return V.element;
              })),
              v &&
                ze.forEach(function (V) {
                  return V.classList.remove(y);
                })),
            sh(!1),
            x
              ? ((T.scaleX = function (V) {
                  return L[V].a.scaleX;
                }),
                (T.scaleY = function (V) {
                  return L[V].a.scaleY;
                }))
              : ((T.width = function (V) {
                  return L[V].a.width + "px";
                }),
                (T.height = function (V) {
                  return L[V].a.height + "px";
                }),
                (T.autoRound = r.autoRound || !1)),
            (T.x = function (V) {
              return L[V].a.x + "px";
            }),
            (T.y = function (V) {
              return L[V].a.y + "px";
            }),
            (T.rotation = function (V) {
              return L[V].a.rotation + (C ? D(V, me[V], me) * 360 : 0);
            }),
            (T.skewX = function (V) {
              return L[V].a.skewX;
            }),
            (me = L.map(function (V) {
              return V.t;
            })),
            (_ || _ === 0) &&
              ((T.modifiers = {
                zIndex: function () {
                  return _;
                },
              }),
              (T.zIndex = _),
              (T.immediateRender = r.immediateRender !== !1)),
            S &&
              (T.opacity = function (V) {
                return L[V].sd < 0 ? 0 : L[V].sd > 0 ? L[V].a.opacity : "+=0";
              }),
            k.length)
          ) {
            w = ut.utils.distribute(w);
            var an = me.slice(k.length);
            T.stagger = function (V, Jt) {
              return w(~k.indexOf(Jt) ? me.indexOf(L[V].swap.t) : V, Jt, an);
            };
          }
          if (
            (Cy.forEach(function (V) {
              return r[V] && M.eventCallback(V, r[V], r[V + "Params"]);
            }),
            f && me.length)
          ) {
            (b = $i(T, jd)),
              "scale" in f && ((f.scaleX = f.scaleY = f.scale), delete f.scale);
            for (Y in f)
              (H = $i(f[Y], Ud)),
                (H[Y] = T[Y]),
                !("duration" in H) &&
                  "duration" in T &&
                  (H.duration = T.duration),
                (H.stagger = T.stagger),
                $.call(M, me, H, 0),
                delete b[Y];
          }
          (me.length || A.length || E.length) &&
            (y &&
              M.add(function () {
                return nc(ze, y, M._zTime < 0 ? "remove" : "add");
              }, 0) &&
              !h &&
              nc(ze, y, "add"),
            me.length && $.call(M, me, b, 0)),
            rh(o, E, M),
            rh(l, A, M);
          var Qt = be && be.timeline;
          Qt &&
            (Qt.add(M, 0),
            be._final.push(function () {
              return Qd(L, !a);
            })),
            (le = M.duration()),
            M.call(function () {
              var V = M.time() >= le;
              V && !Qt && Qd(L, !a), y && nc(ze, y, V ? "remove" : "add");
            });
        }),
        u &&
          (c = L.filter(function (z) {
            return !z.sd && !z.a.isVisible && z.b.isVisible;
          }).map(function (z) {
            return z.a.element;
          })),
        be)
      ) {
        var Ie;
        c && (Ie = be._abs).push.apply(Ie, Jd(L, c)), be._run.push(Ce);
      } else c && eh(Jd(L, c)), Ce();
      var De = be ? be.timeline : M;
      return (
        (De.revert = function () {
          return fc(De, 1, 1);
        }),
        De
      );
    },
    Ay = function t(e) {
      e.vars.onInterrupt &&
        e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []),
        e.getChildren(!0, !1, !0).forEach(t);
    },
    fc = function (e, n, r) {
      if (e && e.progress() < 1 && (!e.paused() || r))
        return n && (Ay(e), n < 2 && e.progress(1), e.kill()), !0;
    },
    Ka = function (e) {
      for (
        var n = (e.idLookup = {}),
          r = (e.alt = {}),
          i = e.elementStates,
          s = i.length,
          a;
        s--;

      )
        (a = i[s]), n[a.id] ? (r[a.id] = a) : (n[a.id] = a);
    },
    sn = (function () {
      function t(n, r, i) {
        if (((this.props = r && r.props), (this.simple = !!(r && r.simple)), i))
          (this.targets = nh(n)), (this.elementStates = n), Ka(this);
        else {
          this.targets = ki(n);
          var s = r && (r.kill === !1 || (r.batch && !r.kill));
          be && !s && be._kill.push(this), this.update(s || !!be);
        }
      }
      var e = t.prototype;
      return (
        (e.update = function (r) {
          var i = this;
          return (
            (this.elementStates = this.targets.map(function (s) {
              return new Xr(s, i.props, i.simple);
            })),
            Ka(this),
            this.interrupt(r),
            this.recordInlineStyles(),
            this
          );
        }),
        (e.clear = function () {
          return (
            (this.targets.length = this.elementStates.length = 0),
            Ka(this),
            this
          );
        }),
        (e.fit = function (r, i, s) {
          for (
            var a = Ga(this.elementStates.slice(0), !1, !0),
              o = (r || this).idLookup,
              l = 0,
              c,
              u;
            l < a.length;
            l++
          )
            (c = a[l]),
              s && (c.matrix = Tn(c.element, !1, !1, !0)),
              (u = o[c.id]),
              u && Oi(c, u, i, !0, 0, c),
              (c.matrix = Tn(c.element, !1, !1, !0));
          return this;
        }),
        (e.getProperty = function (r, i) {
          var s = this.getElementState(r) || Wa;
          return (i in s ? s : s.props || Wa)[i];
        }),
        (e.add = function (r) {
          for (
            var i = r.targets.length, s = this.idLookup, a = this.alt, o, l, c;
            i--;

          )
            (l = r.elementStates[i]),
              (c = s[l.id]),
              c &&
              (l.element === c.element ||
                (a[l.id] && a[l.id].element === l.element))
                ? ((o = this.elementStates.indexOf(
                    l.element === c.element ? c : a[l.id]
                  )),
                  this.targets.splice(o, 1, r.targets[i]),
                  this.elementStates.splice(o, 1, l))
                : (this.targets.push(r.targets[i]), this.elementStates.push(l));
          return (
            r.interrupted && (this.interrupted = !0),
            r.simple || (this.simple = !1),
            Ka(this),
            this
          );
        }),
        (e.compare = function (r) {
          var i = r.idLookup,
            s = this.idLookup,
            a = [],
            o = [],
            l = [],
            c = [],
            u = [],
            f = r.alt,
            d = this.alt,
            h = function (P, O, T) {
              return (
                (P.isVisible !== O.isVisible
                  ? P.isVisible
                    ? l
                    : c
                  : P.isVisible
                  ? o
                  : a
                ).push(T) && u.push(T)
              );
            },
            m = function (P, O, T) {
              return u.indexOf(T) < 0 && h(P, O, T);
            },
            p,
            g,
            y,
            v,
            _,
            x,
            S,
            w;
          for (y in i)
            (_ = f[y]),
              (x = d[y]),
              (p = _ ? ih(r, this, y) : i[y]),
              (v = p.element),
              (g = s[y]),
              x
                ? ((w =
                    g.isVisible || (!x.isVisible && v === g.element) ? g : x),
                  (S =
                    _ && !p.isVisible && !_.isVisible && w.element === _.element
                      ? _
                      : p),
                  S.isVisible && w.isVisible && S.element !== w.element
                    ? ((S.isDifferent(w) ? o : a).push(S.element, w.element),
                      u.push(S.element, w.element))
                    : h(S, w, S.element),
                  _ && S.element === _.element && (_ = i[y]),
                  m(S.element !== g.element && _ ? _ : S, g, g.element),
                  m(_ && _.element === x.element ? _ : S, x, x.element),
                  _ && m(_, x.element === _.element ? x : g, _.element))
                : (g ? (g.isDifferent(p) ? h(p, g, v) : a.push(v)) : l.push(v),
                  _ && m(_, g, _.element));
          for (y in s)
            i[y] || (c.push(s[y].element), d[y] && c.push(d[y].element));
          return { changed: o, unchanged: a, enter: l, leave: c };
        }),
        (e.recordInlineStyles = function () {
          for (
            var r = Xa[this.props] || Ya, i = this.elementStates.length;
            i--;

          )
            Os(this.elementStates[i], r);
        }),
        (e.interrupt = function (r) {
          var i = this,
            s = [];
          this.targets.forEach(function (a) {
            var o = a._flip,
              l = fc(o, r ? 0 : 1);
            r &&
              l &&
              s.indexOf(o) < 0 &&
              o.add(function () {
                return i.updateVisibility();
              }),
              l && s.push(o);
          }),
            !r && s.length && this.updateVisibility(),
            this.interrupted || (this.interrupted = !!s.length);
        }),
        (e.updateVisibility = function () {
          this.elementStates.forEach(function (r) {
            var i = r.element.getBoundingClientRect();
            (r.isVisible = !!(i.width || i.height || i.top || i.left)),
              (r.uncache = 1);
          });
        }),
        (e.getElementState = function (r) {
          return this.elementStates[this.targets.indexOf($s(r))];
        }),
        (e.makeAbsolute = function () {
          return Ga(this.elementStates.slice(0), !0, !0).map(sc);
        }),
        t
      );
    })(),
    Xr = (function () {
      function t(n, r, i) {
        (this.element = n), this.update(r, i);
      }
      var e = t.prototype;
      return (
        (e.isDifferent = function (r) {
          var i = this.bounds,
            s = r.bounds;
          return (
            i.top !== s.top ||
            i.left !== s.left ||
            i.width !== s.width ||
            i.height !== s.height ||
            !this.matrix.equals(r.matrix) ||
            this.opacity !== r.opacity ||
            (this.props &&
              r.props &&
              JSON.stringify(this.props) !== JSON.stringify(r.props))
          );
        }),
        (e.update = function (r, i) {
          var s = this,
            a = s.element,
            o = ut.getProperty(a),
            l = ut.core.getCache(a),
            c = a.getBoundingClientRect(),
            u =
              a.getBBox &&
              typeof a.getBBox == "function" &&
              a.nodeName.toLowerCase() !== "svg" &&
              a.getBBox(),
            f = i
              ? new Wr(1, 0, 0, 1, c.left + Ul(), c.top + jl())
              : Tn(a, !1, !1, !0);
          (l.uncache = 1),
            (s.getProp = o),
            (s.element = a),
            (s.id = Oy(a)),
            (s.matrix = f),
            (s.cache = l),
            (s.bounds = c),
            (s.isVisible = !!(c.width || c.height || c.left || c.top)),
            (s.display = o("display")),
            (s.position = o("position")),
            (s.parent = a.parentNode),
            (s.x = o("x")),
            (s.y = o("y")),
            (s.scaleX = l.scaleX),
            (s.scaleY = l.scaleY),
            (s.rotation = o("rotation")),
            (s.skewX = o("skewX")),
            (s.opacity = o("opacity")),
            (s.width = u ? u.width : Bn(o("width", "px"), 0.04)),
            (s.height = u ? u.height : Bn(o("height", "px"), 0.04)),
            r && $y(s, rc[r] || Zd(r)),
            (s.ctm =
              a.getCTM &&
              a.nodeName.toLowerCase() === "svg" &&
              Wd(a).inverse()),
            (s.simple =
              i || (Mi(f.a) === 1 && !Mi(f.b) && !Mi(f.c) && Mi(f.d) === 1)),
            (s.uncache = 0);
        }),
        t
      );
    })(),
    Ly = (function () {
      function t(n, r) {
        (this.vars = n),
          (this.batch = r),
          (this.states = []),
          (this.timeline = r.timeline);
      }
      var e = t.prototype;
      return (
        (e.getStateById = function (r) {
          for (var i = this.states.length; i--; )
            if (this.states[i].idLookup[r]) return this.states[i];
        }),
        (e.kill = function () {
          this.batch.remove(this);
        }),
        t
      );
    })(),
    Iy = (function () {
      function t(n) {
        (this.id = n),
          (this.actions = []),
          (this._kill = []),
          (this._final = []),
          (this._abs = []),
          (this._run = []),
          (this.data = {}),
          (this.state = new sn()),
          (this.timeline = ut.timeline());
      }
      var e = t.prototype;
      return (
        (e.add = function (r) {
          var i = this.actions.filter(function (s) {
            return s.vars === r;
          });
          return i.length
            ? i[0]
            : ((i = new Ly(typeof r == "function" ? { animate: r } : r, this)),
              this.actions.push(i),
              i);
        }),
        (e.remove = function (r) {
          var i = this.actions.indexOf(r);
          return i >= 0 && this.actions.splice(i, 1), this;
        }),
        (e.getState = function (r) {
          var i = this,
            s = be,
            a = Ms;
          return (
            (be = this),
            this.state.clear(),
            (this._kill.length = 0),
            this.actions.forEach(function (o) {
              o.vars.getState &&
                ((o.states.length = 0),
                (Ms = o),
                (o.state = o.vars.getState(o))),
                r &&
                  o.states.forEach(function (l) {
                    return i.state.add(l);
                  });
            }),
            (Ms = a),
            (be = s),
            this.killConflicts(),
            this
          );
        }),
        (e.animate = function () {
          var r = this,
            i = be,
            s = this.timeline,
            a = this.actions.length,
            o,
            l;
          for (
            be = this,
              s.clear(),
              this._abs.length = this._final.length = this._run.length = 0,
              this.actions.forEach(function (c) {
                c.vars.animate && c.vars.animate(c);
                var u = c.vars.onEnter,
                  f = c.vars.onLeave,
                  d = c.targets,
                  h,
                  m;
                d &&
                  d.length &&
                  (u || f) &&
                  ((h = new sn()),
                  c.states.forEach(function (p) {
                    return h.add(p);
                  }),
                  (m = h.compare(Ai.getState(d))),
                  m.enter.length && u && u(m.enter),
                  m.leave.length && f && f(m.leave));
              }),
              eh(this._abs),
              this._run.forEach(function (c) {
                return c();
              }),
              l = s.duration(),
              o = this._final.slice(0),
              s.add(function () {
                l <= s.time() &&
                  (o.forEach(function (c) {
                    return c();
                  }),
                  Xd(r, "onComplete"));
              }),
              be = i;
            a--;

          )
            this.actions[a].vars.once && this.actions[a].kill();
          return Xd(this, "onStart"), s.restart(), this;
        }),
        (e.loadState = function (r) {
          r ||
            (r = function () {
              return 0;
            });
          var i = [];
          return (
            this.actions.forEach(function (s) {
              if (s.vars.loadState) {
                var a,
                  o = function l(c) {
                    c && (s.targets = c),
                      (a = i.indexOf(l)),
                      ~a && (i.splice(a, 1), i.length || r());
                  };
                i.push(o), s.vars.loadState(o);
              }
            }),
            i.length || r(),
            this
          );
        }),
        (e.setState = function () {
          return (
            this.actions.forEach(function (r) {
              return (r.targets = r.vars.setState && r.vars.setState(r));
            }),
            this
          );
        }),
        (e.killConflicts = function (r) {
          return (
            this.state.interrupt(r),
            this._kill.forEach(function (i) {
              return i.interrupt(r);
            }),
            this
          );
        }),
        (e.run = function (r, i) {
          var s = this;
          return (
            this !== be &&
              (r || this.getState(i),
              this.loadState(function () {
                s._killed || (s.setState(), s.animate());
              })),
            this
          );
        }),
        (e.clear = function (r) {
          this.state.clear(), r || (this.actions.length = 0);
        }),
        (e.getStateById = function (r) {
          for (var i = this.actions.length, s; i--; )
            if (((s = this.actions[i].getStateById(r)), s)) return s;
          return this.state.idLookup[r] && this.state;
        }),
        (e.kill = function () {
          (this._killed = 1), this.clear(), delete ec[this.id];
        }),
        t
      );
    })(),
    Ai = (function () {
      function t() {}
      return (
        (t.getState = function (n, r) {
          var i = oc(n, r);
          return (
            Ms && Ms.states.push(i),
            r && r.batch && t.batch(r.batch).state.add(i),
            i
          );
        }),
        (t.from = function (n, r) {
          return (
            (r = r || {}),
            "clearProps" in r || (r.clearProps = !0),
            uc(
              n,
              oc(r.targets || n.targets, {
                props: r.props || n.props,
                simple: r.simple,
                kill: !!r.kill,
              }),
              r,
              -1
            )
          );
        }),
        (t.to = function (n, r) {
          return uc(
            n,
            oc(r.targets || n.targets, {
              props: r.props || n.props,
              simple: r.simple,
              kill: !!r.kill,
            }),
            r,
            1
          );
        }),
        (t.fromTo = function (n, r, i) {
          return uc(n, r, i);
        }),
        (t.fit = function (n, r, i) {
          var s = i ? $i(i, Ud) : {},
            a = i || s,
            o = a.absolute,
            l = a.scale,
            c = a.getVars,
            u = a.props,
            f = a.runBackwards,
            d = a.onComplete,
            h = a.simple,
            m = i && i.fitChild && $s(i.fitChild),
            p = ac(r, u, h, n),
            g = ac(n, 0, h, p),
            y = u ? Xa[u] : Ya,
            v = ut.context();
          return (
            u && th(s, p.props),
            Os(g, y),
            f &&
              ("immediateRender" in s || (s.immediateRender = !0),
              (s.onComplete = function () {
                ja(g), d && d.apply(this, arguments);
              })),
            o && sc(g, p),
            (s = Oi(
              g,
              p,
              l || m,
              !s.duration && u,
              m,
              s.duration || c ? s : 0
            )),
            typeof i == "object" && "zIndex" in i && (s.zIndex = i.zIndex),
            v &&
              !c &&
              v.add(function () {
                return function () {
                  return ja(g);
                };
              }),
            c ? s : s.duration ? ut.to(g.element, s) : null
          );
        }),
        (t.makeAbsolute = function (n, r) {
          return (n instanceof sn ? n : new sn(n, r)).makeAbsolute();
        }),
        (t.batch = function (n) {
          return n || (n = "default"), ec[n] || (ec[n] = new Iy(n));
        }),
        (t.killFlipsOf = function (n, r) {
          (n instanceof sn ? n.targets : ki(n)).forEach(function (i) {
            return i && fc(i._flip, r !== !1 ? 1 : 2);
          });
        }),
        (t.isFlipping = function (n) {
          var r = t.getByTarget(n);
          return !!r && r.isActive();
        }),
        (t.getByTarget = function (n) {
          return ($s(n) || Wa)._flip;
        }),
        (t.getElementState = function (n, r) {
          return new Xr($s(n), r);
        }),
        (t.convertCoordinates = function (n, r, i) {
          var s = Tn(r, !0, !0).multiply(Tn(n));
          return i ? s.apply(i) : s;
        }),
        (t.register = function (n) {
          if (((cr = typeof document != "undefined" && document.body), cr)) {
            (ut = n),
              Gl(cr),
              (ki = ut.utils.toArray),
              (Jl = ut.core.getStyleSaver);
            var r = ut.utils.snap(0.1);
            Bn = function (s, a) {
              return r(parseFloat(s) + a);
            };
          }
        }),
        t
      );
    })();
  (Ai.version = "3.13.0"),
    typeof window != "undefined" &&
      window.gsap &&
      window.gsap.registerPlugin(Ai),
    N.registerPlugin(Ai);
  const Dy = () => {
      document.querySelector(".seo_header_flip_wrap");
      const t = document.querySelector(".seo_header_title_col"),
        e = document.querySelector(".seo_header_title_text"),
        n = document.querySelector(".seo_header_empty_col"),
        r = document.querySelector(".seo_header_service_col"),
        i = document.querySelector(".seo_header_service_component"),
        s = document.querySelector(".seo_heading_text"),
        a = document.querySelector(".seo_header_service_button"),
        o = document.querySelector(".seo_service_list_wrap"),
        l = document.querySelector(".project_card_tags_seo");
      function c() {
        const u = Ai.getState([t, e, n, r, i, s, a, o, l], {
          props: [
            "opacity",
            "fontSize",
            "display",
            "flex",
            "flexDirection",
            "flexWrap",
            "flexGrow",
            "flexShrink",
            "flexBasis",
            "flexFlow",
            "transform",
            "width",
            "height",
            "maxWidth",
            "padding",
          ],
        });
        t.classList.toggle("inactive"),
          n.classList.toggle("inactive"),
          r.classList.toggle("u-column-3"),
          r.classList.toggle("u-column-12"),
          o.classList.toggle("inactive"),
          l.classList.toggle("active"),
          s.classList.toggle("active"),
          i.classList.toggle("active"),
          a.classList.toggle("active"),
          Ai.from(u, {
            duration: 1.6,
            ease: "expo.inOut",
            absoluteOnLeave: !0,
          });
      }
      a.addEventListener("click", c),
        a.addEventListener("click", () => {
          console.log("clicked");
        });
    },
    zy = () => {
      Dy(), console.log("seoFlip");
    },
    Ry = () => {
      _y(), sr(), ql(), ar(), zy(), qc(), qr().add(() => or(), "-=1");
    };
  N.registerPlugin(Ae);
  const Ny = (t) =>
      no(this, null, function* () {
        yield document.fonts.ready;
        const e = document.querySelector("[work-cms-hero='text']"),
          n = document.querySelector("[work-cms-hero='back-btn']"),
          r = document.querySelector("[work-cms-hero='line']"),
          i = document.querySelector("[work-cms-hero='info']"),
          s = document.querySelector("[work-cms-hero='info-title']"),
          a = document.querySelector("[work-cms-hero='info-text']"),
          o = document.querySelector("[work-cms-hero='info-meta']"),
          l = document.querySelectorAll("[work-cms-hero='tag']"),
          c = document.querySelectorAll("[work-cms-hero='visual']"),
          u = document.querySelector("[work-cms-hero='bg'] img"),
          f = new Ae(e, {
            type: "chars, lines, words",
            linesClass: "work-cms-hero-text-line",
            mask: "lines",
            tag: "div",
          }),
          d = new Ae(s, {
            type: "lines",
            linesClass: "work-cms-info-title-line",
            mask: "lines",
            tag: "div",
          }),
          h = new Ae(a, {
            type: "lines",
            linesClass: "work-cms-info-text-line",
            mask: "lines",
            tag: "div",
          }),
          m = new Ae(o, {
            type: "lines",
            linesClass: "work-cms-info-meta-line",
            mask: "lines",
            tag: "div",
          });
        f.lines.forEach((y) => {
          const v = document.createElement("div");
          v.classList.add("move-text-main"),
            (v.style.overflow = "clip"),
            (v.style.position = "relative"),
            y.parentNode.insertBefore(v, y),
            v.appendChild(y);
        }),
          d.lines.forEach((y) => {
            const v = document.createElement("div");
            v.classList.add("move-text-title"),
              (v.style.overflow = "clip"),
              (v.style.position = "relative"),
              y.parentNode.insertBefore(v, y),
              v.appendChild(y);
          }),
          h.lines.forEach((y) => {
            const v = document.createElement("div");
            v.classList.add("move-text-info"),
              (v.style.overflow = "clip"),
              (v.style.position = "relative"),
              y.parentNode.insertBefore(v, y),
              v.appendChild(y);
          }),
          m.lines.forEach((y) => {
            const v = document.createElement("div");
            v.classList.add("move-text-meta"),
              (v.style.overflow = "clip"),
              (v.style.position = "relative"),
              y.parentNode.insertBefore(v, y),
              v.appendChild(y);
          });
        const p = (y, v) => {
          const _ = y.querySelectorAll("span");
          _.length &&
            _.forEach((x) => {
              const S = document.createElement("div");
              (S.style.overflow = "clip"),
                (S.style.position = "relative"),
                (S.style.paddingBottom = "3px"),
                x.parentNode.insertBefore(S, x),
                S.appendChild(x);
            });
        };
        p(e), p(s), p(a), p(o);
        const g = N.timeline();
        return (
          N.set(f.chars, { opacity: 0, yPercent: 100 }),
          N.set(n, { opacity: 0, yPercent: 100 }),
          N.set(l, {
            opacity: 0,
            y: 50,
            scale: 0.4,
            transformOrigin: "center right",
          }),
          N.set(r, { opacity: 0, scaleX: 0, transformOrigin: "center left" }),
          N.set(i, { opacity: 0, y: 50 }),
          N.set(".move-text-title", { opacity: 0, yPercent: 100 }),
          N.set(".move-text-info", { opacity: 0, yPercent: 100 }),
          N.set(".move-text-meta", { opacity: 0, yPercent: 100 }),
          N.set(c, { y: 100, opacity: 0 }),
          N.set(u, { scale: 1.4 }),
          g.to(
            f.chars,
            {
              opacity: 1,
              duration: 1.8,
              stagger: 0.01,
              ease: "expo.inOut",
              yPercent: 0,
            },
            "<"
          ),
          g.to(u, { scale: 1, duration: 2.5, ease: "expo.inOut" }, "-=2.5"),
          g.to(
            l,
            {
              opacity: 1,
              scale: 1,
              duration: 1.8,
              stagger: { each: 0.06, from: "start", grid: "auto" },
              y: 0,
              ease: "expo.inOut",
            },
            "-=1.7"
          ),
          g.to(r, { opacity: 1, duration: 0 }, "<"),
          g.to(r, { scaleX: 1, duration: 2.4, ease: "expo.inOut" }, "-=2"),
          g.to(
            i,
            { opacity: 1, y: 0, duration: 1, ease: "expo.inOut" },
            "-=1.8"
          ),
          g.to(
            ".move-text-title",
            {
              opacity: 1,
              yPercent: 0,
              duration: 2,
              stagger: 0.06,
              ease: "expo.inOut",
            },
            "<"
          ),
          g.to(
            ".move-text-info",
            {
              opacity: 1,
              yPercent: 0,
              duration: 2,
              stagger: 0.08,
              ease: "expo.inOut",
            },
            "<"
          ),
          g.to(
            ".move-text-meta",
            {
              opacity: 1,
              yPercent: 0,
              duration: 2,
              stagger: 0.08,
              ease: "expo.inOut",
            },
            "<"
          ),
          g.to(
            c,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.6,
              stagger: 0.08,
              ease: "expo.out",
            },
            "-=1"
          ),
          g
        );
      }),
    Fy = {
      home: xd,
      about: X0,
      work: uy,
      contact: ay,
      career: ly,
      "extra-page": xd,
      service: vy,
      work_cms: () => {
        sr(), ar();
        const t = qr();
        t.add(() => or(), "-=1.4"), t.add(() => Ny(), "-=1.4");
      },
      seo: Ry,
    },
    By = () => {
      const t = document.querySelector("[page-route]");
      if (!t) {
        console.log("No element with page-route attribute found");
        return;
      }
      const e = t.getAttribute("page-route"),
        n = Fy[e];
      n ? n() : console.log(`No specific script for route: ${e}`);
    },
    qy = () => {
      const t = document.querySelector("[nav-menu='trigger']"),
        e = document.querySelector("[nav-menu='component']"),
        n = document.querySelector("[nav-menu='contain']"),
        r = document.querySelector("[main-nav='brand']"),
        i = document.querySelector("[nav-menu='brand']"),
        s = document.querySelectorAll("[nav-menu='link-item']"),
        a = document.querySelector("[nav-menu='info-text']"),
        o = document.querySelectorAll("[nav-menu='close']"),
        l = document.querySelectorAll("[nav-menu='social-link']");
      if (!t || !e || !n || !i || !s || !a || !l) return;
      N.set(e, { clipPath: "inset(0% 0% 100% 0%)" }),
        N.set([i, s, l], { y: "100%", opacity: 0 }),
        N.set(a, { y: "20%", opacity: 0 });
      const c = N.timeline({ paused: !0 }),
        u = N.timeline({ paused: !0 });
      c
        .to(e, {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "expo.inOut",
          duration: 1,
        })
        .to(i, { y: "0%", duration: 1, opacity: 1, ease: "expo.out" }, "-=0.4")
        .to(
          r,
          { x: "-100%", duration: 1, opacity: 0, ease: "expo.out" },
          "-=1.4"
        )
        .to(
          s,
          {
            y: "0%",
            duration: 1.2,
            opacity: 1,
            ease: "expo.out",
            stagger: 0.06,
          },
          "-=1"
        )
        .to(
          a,
          { y: "0%", opacity: 1, duration: 1.2, ease: "expo.out" },
          "-=0.9"
        )
        .to(
          l,
          {
            y: "0%",
            duration: 1.2,
            opacity: 1,
            ease: "expo.out",
            stagger: 0.1,
          },
          "-=1"
        ),
        u
          .to([i, s], {
            y: "100%",
            duration: 0.6,
            ease: "expo.in",
            opacity: 0,
            stagger: 0.05,
          })
          .to(
            [a, l],
            {
              y: "100%",
              opacity: 0,
              duration: 0.6,
              ease: "expo.in",
              stagger: 0.05,
            },
            "-=0.8"
          )
          .to(
            e,
            {
              clipPath: "inset(0% 0% 100% 0%)",
              ease: "expo.inOut",
              duration: 0.8,
            },
            "-=0.6"
          )
          .to(
            r,
            { x: "0%", duration: 0.8, opacity: 1, ease: "expo.out" },
            "-=0.2"
          ),
        t.addEventListener("click", () => {
          const m =
            t.getAttribute("hamburger-state") === "open" ? "closed" : "open";
          t.setAttribute("hamburger-state", m),
            m === "open" ? (u.pause(), c.play(0)) : (c.pause(), u.play(0));
        }),
        o.forEach((h) => {
          h.addEventListener("click", () => {
            t.setAttribute("hamburger-state", "closed"), u.play(0);
          });
        });
      const f = 767;
      function d() {
        return window.innerWidth <= f;
      }
      window.addEventListener("resize", () => {
        t.getAttribute("hamburger-state") === "open" &&
          !d() &&
          (t.setAttribute("hamburger-state", "closed"), u.play(0));
      });
    },
    Hy = () => {
      qy();
    };
  class Vy {
    constructor() {
      (this.canvas = document.getElementById("noise")),
        (this.ctx = this.canvas.getContext("2d")),
        (this.wWidth = window.innerWidth),
        (this.wHeight = window.innerHeight),
        (this.noiseData = []),
        (this.frame = 0),
        (this.loopTimeout = null),
        (this.resizeThrottle = null),
        (this._resizeHandler = this._resizeHandler.bind(this)),
        this._init();
    }
    _createNoise() {
      const e = this.ctx.createImageData(this.wWidth, this.wHeight),
        n = new Uint32Array(e.data.buffer),
        r = n.length;
      for (let i = 0; i < r; i++) Math.random() < 0.5 && (n[i] = 4278190080);
      this.noiseData.push(e);
    }
    _paintNoise() {
      this.frame === 9 ? (this.frame = 0) : this.frame++,
        this.ctx.putImageData(this.noiseData[this.frame], 0, 0);
    }
    _loop() {
      this._paintNoise(),
        (this.loopTimeout = window.setTimeout(() => {
          this.rafId = window.requestAnimationFrame(() => this._loop());
        }, 1e3 / 25));
    }
    _setup() {
      (this.wWidth = window.innerWidth),
        (this.wHeight = window.innerHeight),
        (this.canvas.width = this.wWidth),
        (this.canvas.height = this.wHeight),
        (this.noiseData = []);
      for (let e = 0; e < 10; e++) this._createNoise();
      this._loop();
    }
    _resizeHandler() {
      window.clearTimeout(this.resizeThrottle),
        (this.resizeThrottle = window.setTimeout(() => {
          window.clearTimeout(this.loopTimeout),
            this.rafId && window.cancelAnimationFrame(this.rafId),
            this._setup();
        }, 200));
    }
    _init() {
      window.addEventListener("resize", this._resizeHandler, !1), this._setup();
    }
    cleanup() {
      window.removeEventListener("resize", this._resizeHandler, !1),
        window.clearTimeout(this.loopTimeout),
        this.rafId && window.cancelAnimationFrame(this.rafId),
        (this.noiseData = []);
    }
  }
  const Wy = (t) => {
      const e = document.querySelector(".page_overlay"),
        n = document.querySelector("[page-overlay='text-wrap']"),
        r = document.querySelectorAll("[page-load='component']"),
        i = document.querySelectorAll("[page-load='wrap']"),
        s = document.querySelectorAll("[page-load='gradient']"),
        a = document.querySelectorAll("[page-load='text']");
      e &&
        N.set(e, { clipPath: "inset(100% 0% 0% 0%)", pointerEvents: "none" }),
        n && N.set(n, { opacity: 0, y: 50, willChange: "transform, opacity" });
      const o = N.timeline();
      return (
        e &&
          o.fromTo(
            e,
            { clipPath: "inset(100% 0% 0% 0%)", pointerEvents: "none" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              pointerEvents: "auto",
              duration: 1,
              ease: "expo.inOut",
              onComplete: () => {
                s.length && N.set(s, { opacity: 1 }),
                  i.length && N.set(i, { opacity: 0 }),
                  a.length && N.set(a, { opacity: 0 }),
                  r.length &&
                    N.set(r, {
                      pointerEvents: "auto",
                      opacity: 0,
                      display: "block",
                      clipPath: "inset(0% 0% 0% 0%)",
                    }),
                  console.log("pageLeave reset the pageLoadComponent");
              },
            },
            "<"
          ),
        o
      );
    },
    Xy = () => {
      document.querySelectorAll("a[href]").forEach((e) => {
        const n = e.getAttribute("href");
        if (
          n.startsWith("#") ||
          n.startsWith("mailto:") ||
          n.startsWith("tel:") ||
          n.startsWith("javascript:") ||
          e.target === "_blank"
        )
          return;
        new URL(n, window.location.origin).hostname ===
          window.location.hostname &&
          e.addEventListener("click", (s) =>
            no(this, null, function* () {
              s.preventDefault();
              const a = e.href,
                o = document.createElement("link");
              (o.rel = "prefetch"),
                (o.href = a),
                document.head.appendChild(o),
                yield Wy(),
                (window.location.href = a);
            })
          );
      });
    },
    Yy = () => {
      Hy(), new Vy(), Cd(), Xy();
    };
  function Gy(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(
          t,
          typeof (i = (function (s, a) {
            if (typeof s != "object" || s === null) return s;
            var o = s[Symbol.toPrimitive];
            if (o !== void 0) {
              var l = o.call(s, "string");
              if (typeof l != "object") return l;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(s);
          })(r.key)) == "symbol"
            ? i
            : String(i),
          r
        );
    }
    var i;
  }
  function dc(t, e, n) {
    return (
      e && Gy(t.prototype, e),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  function En() {
    return (
      (En = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }),
      En.apply(this, arguments)
    );
  }
  function Za(t, e) {
    (t.prototype = Object.create(e.prototype)),
      (t.prototype.constructor = t),
      As(t, e);
  }
  function hc(t) {
    return (
      (hc = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      hc(t)
    );
  }
  function As(t, e) {
    return (
      (As = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, r) {
            return (n.__proto__ = r), n;
          }),
      As(t, e)
    );
  }
  function jy() {
    if (
      typeof Reflect == "undefined" ||
      !Reflect.construct ||
      Reflect.construct.sham
    )
      return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  }
  function pc(t, e, n) {
    return (
      (pc = jy()
        ? Reflect.construct.bind()
        : function (r, i, s) {
            var a = [null];
            a.push.apply(a, i);
            var o = new (Function.bind.apply(r, a))();
            return s && As(o, s.prototype), o;
          }),
      pc.apply(null, arguments)
    );
  }
  function mc(t) {
    var e = typeof Map == "function" ? new Map() : void 0;
    return (
      (mc = function (n) {
        if (
          n === null ||
          Function.toString.call(n).indexOf("[native code]") === -1
        )
          return n;
        if (typeof n != "function")
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (e !== void 0) {
          if (e.has(n)) return e.get(n);
          e.set(n, r);
        }
        function r() {
          return pc(n, arguments, hc(this).constructor);
        }
        return (
          (r.prototype = Object.create(n.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          As(r, n)
        );
      }),
      mc(t)
    );
  }
  function Uy(t) {
    if (t === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  var ur,
    Ky = function () {
      (this.before = void 0),
        (this.beforeLeave = void 0),
        (this.leave = void 0),
        (this.afterLeave = void 0),
        (this.beforeEnter = void 0),
        (this.enter = void 0),
        (this.afterEnter = void 0),
        (this.after = void 0);
    };
  (function (t) {
    (t[(t.off = 0)] = "off"),
      (t[(t.error = 1)] = "error"),
      (t[(t.warning = 2)] = "warning"),
      (t[(t.info = 3)] = "info"),
      (t[(t.debug = 4)] = "debug");
  })(ur || (ur = {}));
  var ah = ur.off,
    Yr = (function () {
      function t(n) {
        (this.t = void 0), (this.t = n);
      }
      (t.getLevel = function () {
        return ah;
      }),
        (t.setLevel = function (n) {
          return (ah = ur[n]);
        });
      var e = t.prototype;
      return (
        (e.error = function () {
          this.i(console.error, ur.error, [].slice.call(arguments));
        }),
        (e.warn = function () {
          this.i(console.warn, ur.warning, [].slice.call(arguments));
        }),
        (e.info = function () {
          this.i(console.info, ur.info, [].slice.call(arguments));
        }),
        (e.debug = function () {
          this.i(console.log, ur.debug, [].slice.call(arguments));
        }),
        (e.i = function (n, r, i) {
          r <= t.getLevel() &&
            n.apply(console, ["[" + this.t + "] "].concat(i));
        }),
        t
      );
    })();
  function Li(t) {
    return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  }
  function oh(t) {
    return t && t.sensitive ? "" : "i";
  }
  var wn = {
      container: "container",
      history: "history",
      namespace: "namespace",
      prefix: "data-barba",
      prevent: "prevent",
      wrapper: "wrapper",
    },
    Gr = new ((function () {
      function t() {
        (this.o = wn),
          (this.u = void 0),
          (this.h = { after: null, before: null, parent: null });
      }
      var e = t.prototype;
      return (
        (e.toString = function (n) {
          return n.outerHTML;
        }),
        (e.toDocument = function (n) {
          return (
            this.u || (this.u = new DOMParser()),
            this.u.parseFromString(n, "text/html")
          );
        }),
        (e.toElement = function (n) {
          var r = document.createElement("div");
          return (r.innerHTML = n), r;
        }),
        (e.getHtml = function (n) {
          return (
            n === void 0 && (n = document), this.toString(n.documentElement)
          );
        }),
        (e.getWrapper = function (n) {
          return (
            n === void 0 && (n = document),
            n.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
          );
        }),
        (e.getContainer = function (n) {
          return (
            n === void 0 && (n = document),
            n.querySelector(
              "[" + this.o.prefix + '="' + this.o.container + '"]'
            )
          );
        }),
        (e.removeContainer = function (n) {
          document.body.contains(n) && (this.v(n), n.parentNode.removeChild(n));
        }),
        (e.addContainer = function (n, r) {
          var i = this.getContainer() || this.h.before;
          i
            ? this.l(n, i)
            : this.h.after
            ? this.h.after.parentNode.insertBefore(n, this.h.after)
            : this.h.parent
            ? this.h.parent.appendChild(n)
            : r.appendChild(n);
        }),
        (e.getSibling = function () {
          return this.h;
        }),
        (e.getNamespace = function (n) {
          n === void 0 && (n = document);
          var r = n.querySelector(
            "[" + this.o.prefix + "-" + this.o.namespace + "]"
          );
          return r
            ? r.getAttribute(this.o.prefix + "-" + this.o.namespace)
            : null;
        }),
        (e.getHref = function (n) {
          if (n.tagName && n.tagName.toLowerCase() === "a") {
            if (typeof n.href == "string") return n.href;
            var r = n.getAttribute("href") || n.getAttribute("xlink:href");
            if (r) return this.resolveUrl(r.baseVal || r);
          }
          return null;
        }),
        (e.resolveUrl = function () {
          var n = [].slice.call(arguments).length;
          if (n === 0)
            throw new Error(
              "resolveUrl requires at least one argument; got none."
            );
          var r = document.createElement("base");
          if (((r.href = arguments[0]), n === 1)) return r.href;
          var i = document.getElementsByTagName("head")[0];
          i.insertBefore(r, i.firstChild);
          for (var s, a = document.createElement("a"), o = 1; o < n; o++)
            (a.href = arguments[o]), (r.href = s = a.href);
          return i.removeChild(r), s;
        }),
        (e.l = function (n, r) {
          r.parentNode.insertBefore(n, r.nextSibling);
        }),
        (e.v = function (n) {
          return (
            (this.h = {
              after: n.nextElementSibling,
              before: n.previousElementSibling,
              parent: n.parentElement,
            }),
            this.h
          );
        }),
        t
      );
    })())(),
    Zy = (function () {
      function t() {
        (this.p = void 0), (this.m = []), (this.P = -1);
      }
      var e = t.prototype;
      return (
        (e.init = function (n, r) {
          this.p = "barba";
          var i = {
            data: {},
            ns: r,
            scroll: { x: window.scrollX, y: window.scrollY },
            url: n,
          };
          (this.P = 0), this.m.push(i);
          var s = { from: this.p, index: this.P, states: [].concat(this.m) };
          window.history && window.history.replaceState(s, "", n);
        }),
        (e.change = function (n, r, i) {
          if (i && i.state) {
            var s = i.state,
              a = s.index;
            (r = this.g(this.P - a)), this.replace(s.states), (this.P = a);
          } else this.add(n, r);
          return r;
        }),
        (e.add = function (n, r, i, s) {
          var a = i != null ? i : this.R(r),
            o = {
              data: s != null ? s : {},
              ns: "tmp",
              scroll: { x: window.scrollX, y: window.scrollY },
              url: n,
            };
          switch (a) {
            case "push":
              (this.P = this.size), this.m.push(o);
              break;
            case "replace":
              this.set(this.P, o);
          }
          var l = { from: this.p, index: this.P, states: [].concat(this.m) };
          switch (a) {
            case "push":
              window.history && window.history.pushState(l, "", n);
              break;
            case "replace":
              window.history && window.history.replaceState(l, "", n);
          }
        }),
        (e.store = function (n, r) {
          var i = r || this.P,
            s = this.get(i);
          (s.data = En({}, s.data, n)), this.set(i, s);
          var a = { from: this.p, index: this.P, states: [].concat(this.m) };
          window.history.replaceState(a, "");
        }),
        (e.update = function (n, r) {
          var i = r || this.P,
            s = En({}, this.get(i), n);
          this.set(i, s);
        }),
        (e.remove = function (n) {
          n ? this.m.splice(n, 1) : this.m.pop(), this.P--;
        }),
        (e.clear = function () {
          (this.m = []), (this.P = -1);
        }),
        (e.replace = function (n) {
          this.m = n;
        }),
        (e.get = function (n) {
          return this.m[n];
        }),
        (e.set = function (n, r) {
          return (this.m[n] = r);
        }),
        (e.R = function (n) {
          var r = "push",
            i = n,
            s = wn.prefix + "-" + wn.history;
          return (
            i.hasAttribute && i.hasAttribute(s) && (r = i.getAttribute(s)), r
          );
        }),
        (e.g = function (n) {
          return Math.abs(n) > 1
            ? n > 0
              ? "forward"
              : "back"
            : n === 0
            ? "popstate"
            : n > 0
            ? "back"
            : "forward";
        }),
        dc(t, [
          {
            key: "current",
            get: function () {
              return this.m[this.P];
            },
          },
          {
            key: "previous",
            get: function () {
              return this.P < 1 ? null : this.m[this.P - 1];
            },
          },
          {
            key: "size",
            get: function () {
              return this.m.length;
            },
          },
        ]),
        t
      );
    })(),
    lh = new Zy(),
    Qa = function (t, e) {
      try {
        var n = (function () {
          if (!e.next.html)
            return Promise.resolve(t).then(function (r) {
              var i = e.next;
              if (r) {
                var s = Gr.toElement(r.html);
                (i.namespace = Gr.getNamespace(s)),
                  (i.container = Gr.getContainer(s)),
                  (i.url = r.url),
                  (i.html = r.html),
                  lh.update({ ns: i.namespace });
                var a = Gr.toDocument(r.html);
                document.title = a.title;
              }
            });
        })();
        return Promise.resolve(n && n.then ? n.then(function () {}) : void 0);
      } catch (r) {
        return Promise.reject(r);
      }
    },
    ch = function t(e, n, r) {
      return e instanceof RegExp
        ? (function (i, s) {
            if (!s) return i;
            for (
              var a = /\((?:\?<(.*?)>)?(?!\?)/g, o = 0, l = a.exec(i.source);
              l;

            )
              s.push({
                name: l[1] || o++,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: "",
              }),
                (l = a.exec(i.source));
            return i;
          })(e, n)
        : Array.isArray(e)
        ? (function (i, s, a) {
            var o = i.map(function (l) {
              return t(l, s, a).source;
            });
            return new RegExp("(?:".concat(o.join("|"), ")"), oh(a));
          })(e, n, r)
        : (function (i, s, a) {
            return (function (o, l, c) {
              c === void 0 && (c = {});
              for (
                var u = c.strict,
                  f = u !== void 0 && u,
                  d = c.start,
                  h = d === void 0 || d,
                  m = c.end,
                  p = m === void 0 || m,
                  g = c.encode,
                  y =
                    g === void 0
                      ? function (k) {
                          return k;
                        }
                      : g,
                  v = c.delimiter,
                  _ = v === void 0 ? "/#?" : v,
                  x = c.endsWith,
                  S = "[".concat(Li(x === void 0 ? "" : x), "]|$"),
                  w = "[".concat(Li(_), "]"),
                  C = h ? "^" : "",
                  P = 0,
                  O = o;
                P < O.length;
                P++
              ) {
                var T = O[P];
                if (typeof T == "string") C += Li(y(T));
                else {
                  var M = Li(y(T.prefix)),
                    b = Li(y(T.suffix));
                  if (T.pattern)
                    if ((l && l.push(T), M || b))
                      if (T.modifier === "+" || T.modifier === "*") {
                        var E = T.modifier === "*" ? "?" : "";
                        C += "(?:"
                          .concat(M, "((?:")
                          .concat(T.pattern, ")(?:")
                          .concat(b)
                          .concat(M, "(?:")
                          .concat(T.pattern, "))*)")
                          .concat(b, ")")
                          .concat(E);
                      } else
                        C += "(?:"
                          .concat(M, "(")
                          .concat(T.pattern, ")")
                          .concat(b, ")")
                          .concat(T.modifier);
                    else
                      C +=
                        T.modifier === "+" || T.modifier === "*"
                          ? "((?:"
                              .concat(T.pattern, ")")
                              .concat(T.modifier, ")")
                          : "(".concat(T.pattern, ")").concat(T.modifier);
                  else C += "(?:".concat(M).concat(b, ")").concat(T.modifier);
                }
              }
              if (p)
                f || (C += "".concat(w, "?")),
                  (C += c.endsWith ? "(?=".concat(S, ")") : "$");
              else {
                var A = o[o.length - 1],
                  L =
                    typeof A == "string"
                      ? w.indexOf(A[A.length - 1]) > -1
                      : A === void 0;
                f || (C += "(?:".concat(w, "(?=").concat(S, "))?")),
                  L || (C += "(?=".concat(w, "|").concat(S, ")"));
              }
              return new RegExp(C, oh(c));
            })(
              (function (o, l) {
                l === void 0 && (l = {});
                for (
                  var c = (function (b) {
                      for (var E = [], A = 0; A < b.length; ) {
                        var L = b[A];
                        if (L !== "*" && L !== "+" && L !== "?")
                          if (L !== "\\")
                            if (L !== "{")
                              if (L !== "}")
                                if (L !== ":")
                                  if (L !== "(")
                                    E.push({
                                      type: "CHAR",
                                      index: A,
                                      value: b[A++],
                                    });
                                  else {
                                    var k = 1,
                                      I = "";
                                    if (b[(R = A + 1)] === "?")
                                      throw new TypeError(
                                        'Pattern cannot start with "?" at '.concat(
                                          R
                                        )
                                      );
                                    for (; R < b.length; )
                                      if (b[R] !== "\\") {
                                        if (b[R] === ")") {
                                          if (--k == 0) {
                                            R++;
                                            break;
                                          }
                                        } else if (
                                          b[R] === "(" &&
                                          (k++, b[R + 1] !== "?")
                                        )
                                          throw new TypeError(
                                            "Capturing groups are not allowed at ".concat(
                                              R
                                            )
                                          );
                                        I += b[R++];
                                      } else I += b[R++] + b[R++];
                                    if (k)
                                      throw new TypeError(
                                        "Unbalanced pattern at ".concat(A)
                                      );
                                    if (!I)
                                      throw new TypeError(
                                        "Missing pattern at ".concat(A)
                                      );
                                    E.push({
                                      type: "PATTERN",
                                      index: A,
                                      value: I,
                                    }),
                                      (A = R);
                                  }
                                else {
                                  for (var D = "", R = A + 1; R < b.length; ) {
                                    var $ = b.charCodeAt(R);
                                    if (
                                      !(
                                        ($ >= 48 && $ <= 57) ||
                                        ($ >= 65 && $ <= 90) ||
                                        ($ >= 97 && $ <= 122) ||
                                        $ === 95
                                      )
                                    )
                                      break;
                                    D += b[R++];
                                  }
                                  if (!D)
                                    throw new TypeError(
                                      "Missing parameter name at ".concat(A)
                                    );
                                  E.push({ type: "NAME", index: A, value: D }),
                                    (A = R);
                                }
                              else
                                E.push({
                                  type: "CLOSE",
                                  index: A,
                                  value: b[A++],
                                });
                            else
                              E.push({ type: "OPEN", index: A, value: b[A++] });
                          else
                            E.push({
                              type: "ESCAPED_CHAR",
                              index: A++,
                              value: b[A++],
                            });
                        else
                          E.push({ type: "MODIFIER", index: A, value: b[A++] });
                      }
                      return E.push({ type: "END", index: A, value: "" }), E;
                    })(o),
                    u = l.prefixes,
                    f = u === void 0 ? "./" : u,
                    d = "[^".concat(Li(l.delimiter || "/#?"), "]+?"),
                    h = [],
                    m = 0,
                    p = 0,
                    g = "",
                    y = function (b) {
                      if (p < c.length && c[p].type === b) return c[p++].value;
                    },
                    v = function (b) {
                      var E = y(b);
                      if (E !== void 0) return E;
                      var A = c[p],
                        L = A.index;
                      throw new TypeError(
                        "Unexpected "
                          .concat(A.type, " at ")
                          .concat(L, ", expected ")
                          .concat(b)
                      );
                    },
                    _ = function () {
                      for (
                        var b, E = "";
                        (b = y("CHAR") || y("ESCAPED_CHAR"));

                      )
                        E += b;
                      return E;
                    };
                  p < c.length;

                ) {
                  var x = y("CHAR"),
                    S = y("NAME"),
                    w = y("PATTERN");
                  if (S || w)
                    f.indexOf((P = x || "")) === -1 && ((g += P), (P = "")),
                      g && (h.push(g), (g = "")),
                      h.push({
                        name: S || m++,
                        prefix: P,
                        suffix: "",
                        pattern: w || d,
                        modifier: y("MODIFIER") || "",
                      });
                  else {
                    var C = x || y("ESCAPED_CHAR");
                    if (C) g += C;
                    else if ((g && (h.push(g), (g = "")), y("OPEN"))) {
                      var P = _(),
                        O = y("NAME") || "",
                        T = y("PATTERN") || "",
                        M = _();
                      v("CLOSE"),
                        h.push({
                          name: O || (T ? m++ : ""),
                          pattern: O && !T ? d : T,
                          prefix: P,
                          suffix: M,
                          modifier: y("MODIFIER") || "",
                        });
                    } else v("END");
                  }
                }
                return h;
              })(i, a),
              s,
              a
            );
          })(e, n, r);
    },
    Qy = {
      __proto__: null,
      update: Qa,
      nextTick: function () {
        return new Promise(function (t) {
          window.requestAnimationFrame(t);
        });
      },
      pathToRegexp: ch,
    },
    uh = function () {
      return window.location.origin;
    },
    Ls = function (t) {
      return t === void 0 && (t = window.location.href), fr(t).port;
    },
    fr = function (t) {
      var e,
        n = t.match(/:\d+/);
      if (n === null)
        /^http/.test(t) && (e = 80), /^https/.test(t) && (e = 443);
      else {
        var r = n[0].substring(1);
        e = parseInt(r, 10);
      }
      var i,
        s = t.replace(uh(), ""),
        a = {},
        o = s.indexOf("#");
      o >= 0 && ((i = s.slice(o + 1)), (s = s.slice(0, o)));
      var l = s.indexOf("?");
      return (
        l >= 0 && ((a = fh(s.slice(l + 1))), (s = s.slice(0, l))),
        { hash: i, path: s, port: e, query: a }
      );
    },
    fh = function (t) {
      return t.split("&").reduce(function (e, n) {
        var r = n.split("=");
        return (e[r[0]] = r[1]), e;
      }, {});
    },
    gc = function (t) {
      return (
        t === void 0 && (t = window.location.href),
        t.replace(/(\/#.*|\/|#.*)$/, "")
      );
    },
    Jy = {
      __proto__: null,
      getHref: function () {
        return window.location.href;
      },
      getAbsoluteHref: function (t, e) {
        return e === void 0 && (e = document.baseURI), new URL(t, e).href;
      },
      getOrigin: uh,
      getPort: Ls,
      getPath: function (t) {
        return t === void 0 && (t = window.location.href), fr(t).path;
      },
      getQuery: function (t, e) {
        return (
          e === void 0 && (e = !1),
          e ? JSON.stringify(fr(t).query) : fr(t).query
        );
      },
      getHash: function (t) {
        return fr(t).hash;
      },
      parse: fr,
      parseQuery: fh,
      clean: gc,
    };
  function e_(t, e, n, r, i) {
    return (
      e === void 0 && (e = 2e3),
      new Promise(function (s, a) {
        var o = new XMLHttpRequest();
        (o.onreadystatechange = function () {
          if (o.readyState === XMLHttpRequest.DONE) {
            if (o.status === 200) {
              var l =
                o.responseURL !== "" && o.responseURL !== t ? o.responseURL : t;
              s({ html: o.responseText, url: En({ href: l }, fr(l)) }),
                r.update(t, { status: "fulfilled", target: l });
            } else if (o.status) {
              var c = { status: o.status, statusText: o.statusText };
              n(t, c), a(c), r.update(t, { status: "rejected" });
            }
          }
        }),
          (o.ontimeout = function () {
            var l = new Error("Timeout error [" + e + "]");
            n(t, l), a(l), r.update(t, { status: "rejected" });
          }),
          (o.onerror = function () {
            var l = new Error("Fetch error");
            n(t, l), a(l), r.update(t, { status: "rejected" });
          }),
          o.open("GET", t),
          (o.timeout = e),
          o.setRequestHeader(
            "Accept",
            "text/html,application/xhtml+xml,application/xml"
          ),
          o.setRequestHeader("x-barba", "yes"),
          i.all().forEach(function (l, c) {
            o.setRequestHeader(c, l);
          }),
          o.send();
      })
    );
  }
  function t_(t) {
    return (
      !!t &&
      (typeof t == "object" || typeof t == "function") &&
      typeof t.then == "function"
    );
  }
  function Ii(t, e) {
    return (
      e === void 0 && (e = {}),
      function () {
        var n = arguments,
          r = !1,
          i = new Promise(function (s, a) {
            e.async = function () {
              return (
                (r = !0),
                function (l, c) {
                  l ? a(l) : s(c);
                }
              );
            };
            var o = t.apply(e, [].slice.call(n));
            r || (t_(o) ? o.then(s, a) : s(o));
          });
        return i;
      }
    );
  }
  var dr = new ((function (t) {
      function e() {
        var r;
        return (
          ((r = t.call(this) || this).logger = new Yr("@barba/core")),
          (r.all = [
            "ready",
            "page",
            "reset",
            "currentAdded",
            "currentRemoved",
            "nextAdded",
            "nextRemoved",
            "beforeOnce",
            "once",
            "afterOnce",
            "before",
            "beforeLeave",
            "leave",
            "afterLeave",
            "beforeEnter",
            "enter",
            "afterEnter",
            "after",
          ]),
          (r.registered = new Map()),
          r.init(),
          r
        );
      }
      Za(e, t);
      var n = e.prototype;
      return (
        (n.init = function () {
          var r = this;
          this.registered.clear(),
            this.all.forEach(function (i) {
              r[i] ||
                (r[i] = function (s, a) {
                  r.registered.has(i) || r.registered.set(i, new Set()),
                    r.registered.get(i).add({ ctx: a || {}, fn: s });
                });
            });
        }),
        (n.do = function (r) {
          var i = arguments,
            s = this;
          if (this.registered.has(r)) {
            var a = Promise.resolve();
            return (
              this.registered.get(r).forEach(function (o) {
                a = a.then(function () {
                  return Ii(o.fn, o.ctx).apply(void 0, [].slice.call(i, 1));
                });
              }),
              a.catch(function (o) {
                s.logger.debug("Hook error [" + r + "]"), s.logger.error(o);
              })
            );
          }
          return Promise.resolve();
        }),
        (n.clear = function () {
          var r = this;
          this.all.forEach(function (i) {
            delete r[i];
          }),
            this.init();
        }),
        (n.help = function () {
          this.logger.info("Available hooks: " + this.all.join(","));
          var r = [];
          this.registered.forEach(function (i, s) {
            return r.push(s);
          }),
            this.logger.info("Registered hooks: " + r.join(","));
        }),
        e
      );
    })(Ky))(),
    dh = (function () {
      function t(e) {
        if (((this.k = void 0), (this.O = []), typeof e == "boolean"))
          this.k = e;
        else {
          var n = Array.isArray(e) ? e : [e];
          this.O = n.map(function (r) {
            return ch(r);
          });
        }
      }
      return (
        (t.prototype.checkHref = function (e) {
          if (typeof this.k == "boolean") return this.k;
          var n = fr(e).path;
          return this.O.some(function (r) {
            return r.exec(n) !== null;
          });
        }),
        t
      );
    })(),
    n_ = (function (t) {
      function e(r) {
        var i;
        return ((i = t.call(this, r) || this).T = new Map()), i;
      }
      Za(e, t);
      var n = e.prototype;
      return (
        (n.set = function (r, i, s, a, o) {
          return (
            this.T.set(r, {
              action: s,
              request: i,
              status: a,
              target: o != null ? o : r,
            }),
            { action: s, request: i, status: a, target: o }
          );
        }),
        (n.get = function (r) {
          return this.T.get(r);
        }),
        (n.getRequest = function (r) {
          return this.T.get(r).request;
        }),
        (n.getAction = function (r) {
          return this.T.get(r).action;
        }),
        (n.getStatus = function (r) {
          return this.T.get(r).status;
        }),
        (n.getTarget = function (r) {
          return this.T.get(r).target;
        }),
        (n.has = function (r) {
          return !this.checkHref(r) && this.T.has(r);
        }),
        (n.delete = function (r) {
          return this.T.delete(r);
        }),
        (n.update = function (r, i) {
          var s = En({}, this.T.get(r), i);
          return this.T.set(r, s), s;
        }),
        e
      );
    })(dh),
    r_ = (function () {
      function t() {
        this.A = new Map();
      }
      var e = t.prototype;
      return (
        (e.set = function (n, r) {
          return this.A.set(n, r), { name: r };
        }),
        (e.get = function (n) {
          return this.A.get(n);
        }),
        (e.all = function () {
          return this.A;
        }),
        (e.has = function (n) {
          return this.A.has(n);
        }),
        (e.delete = function (n) {
          return this.A.delete(n);
        }),
        (e.clear = function () {
          return this.A.clear();
        }),
        t
      );
    })(),
    i_ = function () {
      return !window.history.pushState;
    },
    s_ = function (t) {
      return !t.el || !t.href;
    },
    a_ = function (t) {
      var e = t.event;
      return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
    },
    o_ = function (t) {
      var e = t.el;
      return e.hasAttribute("target") && e.target === "_blank";
    },
    l_ = function (t) {
      var e = t.el;
      return (
        (e.protocol !== void 0 && window.location.protocol !== e.protocol) ||
        (e.hostname !== void 0 && window.location.hostname !== e.hostname)
      );
    },
    c_ = function (t) {
      var e = t.el;
      return e.port !== void 0 && Ls() !== Ls(e.href);
    },
    u_ = function (t) {
      var e = t.el;
      return e.getAttribute && typeof e.getAttribute("download") == "string";
    },
    f_ = function (t) {
      return t.el.hasAttribute(wn.prefix + "-" + wn.prevent);
    },
    d_ = function (t) {
      return !!t.el.closest("[" + wn.prefix + "-" + wn.prevent + '="all"]');
    },
    h_ = function (t) {
      var e = t.href;
      return gc(e) === gc() && Ls(e) === Ls();
    },
    p_ = (function (t) {
      function e(r) {
        var i;
        return (
          ((i = t.call(this, r) || this).suite = []),
          (i.tests = new Map()),
          i.init(),
          i
        );
      }
      Za(e, t);
      var n = e.prototype;
      return (
        (n.init = function () {
          this.add("pushState", i_),
            this.add("exists", s_),
            this.add("newTab", a_),
            this.add("blank", o_),
            this.add("corsDomain", l_),
            this.add("corsPort", c_),
            this.add("download", u_),
            this.add("preventSelf", f_),
            this.add("preventAll", d_),
            this.add("sameUrl", h_, !1);
        }),
        (n.add = function (r, i, s) {
          s === void 0 && (s = !0),
            this.tests.set(r, i),
            s && this.suite.push(r);
        }),
        (n.run = function (r, i, s, a) {
          return this.tests.get(r)({ el: i, event: s, href: a });
        }),
        (n.checkLink = function (r, i, s) {
          var a = this;
          return this.suite.some(function (o) {
            return a.run(o, r, i, s);
          });
        }),
        e
      );
    })(dh),
    vc = (function (t) {
      function e(n, r) {
        var i;
        return (
          r === void 0 && (r = "Barba error"),
          ((i =
            t.call.apply(t, [this].concat([].slice.call(arguments, 2))) ||
            this).error = void 0),
          (i.label = void 0),
          (i.error = n),
          (i.label = r),
          Error.captureStackTrace && Error.captureStackTrace(Uy(i), e),
          (i.name = "BarbaError"),
          i
        );
      }
      return Za(e, t), e;
    })(mc(Error)),
    m_ = (function () {
      function t(n) {
        n === void 0 && (n = []),
          (this.logger = new Yr("@barba/core")),
          (this.all = []),
          (this.page = []),
          (this.once = []),
          (this.j = [
            { name: "namespace", type: "strings" },
            { name: "custom", type: "function" },
          ]),
          n && (this.all = this.all.concat(n)),
          this.update();
      }
      var e = t.prototype;
      return (
        (e.add = function (n, r) {
          n === "rule"
            ? this.j.splice(r.position || 0, 0, r.value)
            : this.all.push(r),
            this.update();
        }),
        (e.resolve = function (n, r) {
          var i = this;
          r === void 0 && (r = {});
          var s = r.once ? this.once : this.page;
          s = s.filter(
            r.self
              ? function (d) {
                  return d.name && d.name === "self";
                }
              : function (d) {
                  return !d.name || d.name !== "self";
                }
          );
          var a = new Map(),
            o = s.find(function (d) {
              var h = !0,
                m = {};
              return r.self && d.name === "self"
                ? (a.set(d, m), !0)
                : (i.j.reverse().forEach(function (p) {
                    h &&
                      ((h = i.M(d, p, n, m)),
                      d.from &&
                        d.to &&
                        (h = i.M(d, p, n, m, "from") && i.M(d, p, n, m, "to")),
                      d.from && !d.to && (h = i.M(d, p, n, m, "from")),
                      !d.from && d.to && (h = i.M(d, p, n, m, "to")));
                  }),
                  a.set(d, m),
                  h);
            }),
            l = a.get(o),
            c = [];
          if ((c.push(r.once ? "once" : "page"), r.self && c.push("self"), l)) {
            var u,
              f = [o];
            Object.keys(l).length > 0 && f.push(l),
              (u = this.logger).info.apply(
                u,
                ["Transition found [" + c.join(",") + "]"].concat(f)
              );
          } else this.logger.info("No transition found [" + c.join(",") + "]");
          return o;
        }),
        (e.update = function () {
          var n = this;
          (this.all = this.all
            .map(function (r) {
              return n.N(r);
            })
            .sort(function (r, i) {
              return r.priority - i.priority;
            })
            .reverse()
            .map(function (r) {
              return delete r.priority, r;
            })),
            (this.page = this.all.filter(function (r) {
              return r.leave !== void 0 || r.enter !== void 0;
            })),
            (this.once = this.all.filter(function (r) {
              return r.once !== void 0;
            }));
        }),
        (e.M = function (n, r, i, s, a) {
          var o = !0,
            l = !1,
            c = n,
            u = r.name,
            f = u,
            d = u,
            h = u,
            m = a ? c[a] : c,
            p = a === "to" ? i.next : i.current;
          if (a ? m && m[u] : m[u]) {
            switch (r.type) {
              case "strings":
              default:
                var g = Array.isArray(m[f]) ? m[f] : [m[f]];
                p[f] && g.indexOf(p[f]) !== -1 && (l = !0),
                  g.indexOf(p[f]) === -1 && (o = !1);
                break;
              case "object":
                var y = Array.isArray(m[d]) ? m[d] : [m[d]];
                p[d]
                  ? (p[d].name && y.indexOf(p[d].name) !== -1 && (l = !0),
                    y.indexOf(p[d].name) === -1 && (o = !1))
                  : (o = !1);
                break;
              case "function":
                m[h](i) ? (l = !0) : (o = !1);
            }
            l &&
              (a ? ((s[a] = s[a] || {}), (s[a][u] = c[a][u])) : (s[u] = c[u]));
          }
          return o;
        }),
        (e.S = function (n, r, i) {
          var s = 0;
          return (
            (n[r] || (n.from && n.from[r]) || (n.to && n.to[r])) &&
              ((s += Math.pow(10, i)),
              n.from && n.from[r] && (s += 1),
              n.to && n.to[r] && (s += 2)),
            s
          );
        }),
        (e.N = function (n) {
          var r = this;
          n.priority = 0;
          var i = 0;
          return (
            this.j.forEach(function (s, a) {
              i += r.S(n, s.name, a + 1);
            }),
            (n.priority = i),
            n
          );
        }),
        t
      );
    })();
  function Is(t, e) {
    try {
      var n = t();
    } catch (r) {
      return e(r);
    }
    return n && n.then ? n.then(void 0, e) : n;
  }
  var g_ = (function () {
      function t(n) {
        n === void 0 && (n = []),
          (this.logger = new Yr("@barba/core")),
          (this.store = void 0),
          (this.C = !1),
          (this.store = new m_(n));
      }
      var e = t.prototype;
      return (
        (e.get = function (n, r) {
          return this.store.resolve(n, r);
        }),
        (e.doOnce = function (n) {
          var r = n.data,
            i = n.transition;
          try {
            var s = function () {
                a.C = !1;
              },
              a = this,
              o = i || {};
            a.C = !0;
            var l = Is(
              function () {
                return Promise.resolve(a.L("beforeOnce", r, o)).then(
                  function () {
                    return Promise.resolve(a.once(r, o)).then(function () {
                      return Promise.resolve(a.L("afterOnce", r, o)).then(
                        function () {}
                      );
                    });
                  }
                );
              },
              function (c) {
                (a.C = !1),
                  a.logger.debug("Transition error [before/after/once]"),
                  a.logger.error(c);
              }
            );
            return Promise.resolve(l && l.then ? l.then(s) : s());
          } catch (c) {
            return Promise.reject(c);
          }
        }),
        (e.doPage = function (n) {
          var r = n.data,
            i = n.transition,
            s = n.page,
            a = n.wrapper;
          try {
            var o = function (d) {
                l.C = !1;
              },
              l = this,
              c = i || {},
              u = c.sync === !0 || !1;
            l.C = !0;
            var f = Is(
              function () {
                function d() {
                  return Promise.resolve(l.L("before", r, c)).then(function () {
                    function m(g) {
                      return Promise.resolve(l.remove(r)).then(function () {
                        return Promise.resolve(l.L("after", r, c)).then(
                          function () {}
                        );
                      });
                    }
                    var p = (function () {
                      if (u)
                        return Is(
                          function () {
                            return Promise.resolve(l.add(r, a)).then(
                              function () {
                                return Promise.resolve(
                                  l.L("beforeLeave", r, c)
                                ).then(function () {
                                  return Promise.resolve(
                                    l.L("beforeEnter", r, c)
                                  ).then(function () {
                                    return Promise.resolve(
                                      Promise.all([
                                        l.leave(r, c),
                                        l.enter(r, c),
                                      ])
                                    ).then(function () {
                                      return Promise.resolve(
                                        l.L("afterLeave", r, c)
                                      ).then(function () {
                                        return Promise.resolve(
                                          l.L("afterEnter", r, c)
                                        ).then(function () {});
                                      });
                                    });
                                  });
                                });
                              }
                            );
                          },
                          function (_) {
                            if (l.H(_))
                              throw new vc(_, "Transition error [sync]");
                          }
                        );
                      var g = function (_) {
                          return Is(
                            function () {
                              var x = (function () {
                                if (y !== !1)
                                  return Promise.resolve(l.add(r, a)).then(
                                    function () {
                                      return Promise.resolve(
                                        l.L("beforeEnter", r, c)
                                      ).then(function () {
                                        return Promise.resolve(
                                          l.enter(r, c, y)
                                        ).then(function () {
                                          return Promise.resolve(
                                            l.L("afterEnter", r, c)
                                          ).then(function () {});
                                        });
                                      });
                                    }
                                  );
                              })();
                              if (x && x.then) return x.then(function () {});
                            },
                            function (x) {
                              if (l.H(x))
                                throw new vc(
                                  x,
                                  "Transition error [before/after/enter]"
                                );
                            }
                          );
                        },
                        y = !1,
                        v = Is(
                          function () {
                            return Promise.resolve(
                              l.L("beforeLeave", r, c)
                            ).then(function () {
                              return Promise.resolve(
                                Promise.all([l.leave(r, c), Qa(s, r)]).then(
                                  function (_) {
                                    return _[0];
                                  }
                                )
                              ).then(function (_) {
                                return (
                                  (y = _),
                                  Promise.resolve(l.L("afterLeave", r, c)).then(
                                    function () {}
                                  )
                                );
                              });
                            });
                          },
                          function (_) {
                            if (l.H(_))
                              throw new vc(
                                _,
                                "Transition error [before/after/leave]"
                              );
                          }
                        );
                      return v && v.then ? v.then(g) : g();
                    })();
                    return p && p.then ? p.then(m) : m();
                  });
                }
                var h = (function () {
                  if (u) return Promise.resolve(Qa(s, r)).then(function () {});
                })();
                return h && h.then ? h.then(d) : d();
              },
              function (d) {
                throw (
                  ((l.C = !1),
                  d.name && d.name === "BarbaError"
                    ? (l.logger.debug(d.label), l.logger.error(d.error), d)
                    : (l.logger.debug("Transition error [page]"),
                      l.logger.error(d),
                      d))
                );
              }
            );
            return Promise.resolve(f && f.then ? f.then(o) : o());
          } catch (d) {
            return Promise.reject(d);
          }
        }),
        (e.once = function (n, r) {
          try {
            return Promise.resolve(dr.do("once", n, r)).then(function () {
              return r.once ? Ii(r.once, r)(n) : Promise.resolve();
            });
          } catch (i) {
            return Promise.reject(i);
          }
        }),
        (e.leave = function (n, r) {
          try {
            return Promise.resolve(dr.do("leave", n, r)).then(function () {
              return r.leave ? Ii(r.leave, r)(n) : Promise.resolve();
            });
          } catch (i) {
            return Promise.reject(i);
          }
        }),
        (e.enter = function (n, r, i) {
          try {
            return Promise.resolve(dr.do("enter", n, r)).then(function () {
              return r.enter ? Ii(r.enter, r)(n, i) : Promise.resolve();
            });
          } catch (s) {
            return Promise.reject(s);
          }
        }),
        (e.add = function (n, r) {
          try {
            return (
              Gr.addContainer(n.next.container, r),
              dr.do("nextAdded", n),
              Promise.resolve()
            );
          } catch (i) {
            return Promise.reject(i);
          }
        }),
        (e.remove = function (n) {
          try {
            return (
              Gr.removeContainer(n.current.container),
              dr.do("currentRemoved", n),
              Promise.resolve()
            );
          } catch (r) {
            return Promise.reject(r);
          }
        }),
        (e.H = function (n) {
          return n.message
            ? !/Timeout error|Fetch error/.test(n.message)
            : !n.status;
        }),
        (e.L = function (n, r, i) {
          try {
            return Promise.resolve(dr.do(n, r, i)).then(function () {
              return i[n] ? Ii(i[n], i)(r) : Promise.resolve();
            });
          } catch (s) {
            return Promise.reject(s);
          }
        }),
        dc(t, [
          {
            key: "isRunning",
            get: function () {
              return this.C;
            },
            set: function (n) {
              this.C = n;
            },
          },
          {
            key: "hasOnce",
            get: function () {
              return this.store.once.length > 0;
            },
          },
          {
            key: "hasSelf",
            get: function () {
              return this.store.all.some(function (n) {
                return n.name === "self";
              });
            },
          },
          {
            key: "shouldWait",
            get: function () {
              return this.store.all.some(function (n) {
                return (n.to && !n.to.route) || n.sync;
              });
            },
          },
        ]),
        t
      );
    })(),
    v_ = (function () {
      function t(e) {
        var n = this;
        (this.names = [
          "beforeLeave",
          "afterLeave",
          "beforeEnter",
          "afterEnter",
        ]),
          (this.byNamespace = new Map()),
          e.length !== 0 &&
            (e.forEach(function (r) {
              n.byNamespace.set(r.namespace, r);
            }),
            this.names.forEach(function (r) {
              dr[r](n._(r));
            }));
      }
      return (
        (t.prototype._ = function (e) {
          var n = this;
          return function (r) {
            var i = e.match(/enter/i) ? r.next : r.current,
              s = n.byNamespace.get(i.namespace);
            return s && s[e] ? Ii(s[e], s)(r) : Promise.resolve();
          };
        }),
        t
      );
    })();
  Element.prototype.matches ||
    (Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector),
    Element.prototype.closest ||
      (Element.prototype.closest = function (t) {
        var e = this;
        do {
          if (e.matches(t)) return e;
          e = e.parentElement || e.parentNode;
        } while (e !== null && e.nodeType === 1);
        return null;
      });
  var y_ = {
    container: null,
    html: "",
    namespace: "",
    url: { hash: "", href: "", path: "", port: null, query: {} },
  };
  new ((function () {
    function t() {
      (this.version = "2.10.3"),
        (this.schemaPage = y_),
        (this.Logger = Yr),
        (this.logger = new Yr("@barba/core")),
        (this.plugins = []),
        (this.timeout = void 0),
        (this.cacheIgnore = void 0),
        (this.cacheFirstPage = void 0),
        (this.prefetchIgnore = void 0),
        (this.preventRunning = void 0),
        (this.hooks = dr),
        (this.cache = void 0),
        (this.headers = void 0),
        (this.prevent = void 0),
        (this.transitions = void 0),
        (this.views = void 0),
        (this.dom = Gr),
        (this.helpers = Qy),
        (this.history = lh),
        (this.request = e_),
        (this.url = Jy),
        (this.D = void 0),
        (this.B = void 0),
        (this.q = void 0),
        (this.F = void 0);
    }
    var e = t.prototype;
    return (
      (e.use = function (n, r) {
        var i = this.plugins;
        i.indexOf(n) > -1
          ? this.logger.warn("Plugin [" + n.name + "] already installed.")
          : typeof n.install == "function"
          ? (n.install(this, r), i.push(n))
          : this.logger.warn(
              "Plugin [" + n.name + '] has no "install" method.'
            );
      }),
      (e.init = function (n) {
        var r = n === void 0 ? {} : n,
          i = r.transitions,
          s = i === void 0 ? [] : i,
          a = r.views,
          o = a === void 0 ? [] : a,
          l = r.schema,
          c = l === void 0 ? wn : l,
          u = r.requestError,
          f = r.timeout,
          d = f === void 0 ? 2e3 : f,
          h = r.cacheIgnore,
          m = h !== void 0 && h,
          p = r.cacheFirstPage,
          g = p !== void 0 && p,
          y = r.prefetchIgnore,
          v = y !== void 0 && y,
          _ = r.preventRunning,
          x = _ !== void 0 && _,
          S = r.prevent,
          w = S === void 0 ? null : S,
          C = r.debug,
          P = r.logLevel;
        if (
          (Yr.setLevel(
            (C !== void 0 && C) === !0 ? "debug" : P === void 0 ? "off" : P
          ),
          this.logger.info(this.version),
          Object.keys(c).forEach(function (M) {
            wn[M] && (wn[M] = c[M]);
          }),
          (this.B = u),
          (this.timeout = d),
          (this.cacheIgnore = m),
          (this.cacheFirstPage = g),
          (this.prefetchIgnore = v),
          (this.preventRunning = x),
          (this.q = this.dom.getWrapper()),
          !this.q)
        )
          throw new Error("[@barba/core] No Barba wrapper found");
        this.I();
        var O = this.data.current;
        if (!O.container)
          throw new Error("[@barba/core] No Barba container found");
        if (
          ((this.cache = new n_(m)),
          (this.headers = new r_()),
          (this.prevent = new p_(v)),
          (this.transitions = new g_(s)),
          (this.views = new v_(o)),
          w !== null)
        ) {
          if (typeof w != "function")
            throw new Error("[@barba/core] Prevent should be a function");
          this.prevent.add("preventCustom", w);
        }
        this.history.init(O.url.href, O.namespace),
          g &&
            this.cache.set(
              O.url.href,
              Promise.resolve({ html: O.html, url: O.url }),
              "init",
              "fulfilled"
            ),
          (this.U = this.U.bind(this)),
          (this.$ = this.$.bind(this)),
          (this.X = this.X.bind(this)),
          this.G(),
          this.plugins.forEach(function (M) {
            return M.init();
          });
        var T = this.data;
        (T.trigger = "barba"),
          (T.next = T.current),
          (T.current = En({}, this.schemaPage)),
          this.hooks.do("ready", T),
          this.once(T),
          this.I();
      }),
      (e.destroy = function () {
        this.I(),
          this.J(),
          this.history.clear(),
          this.hooks.clear(),
          (this.plugins = []);
      }),
      (e.force = function (n) {
        window.location.assign(n);
      }),
      (e.go = function (n, r, i) {
        var s;
        if (
          (r === void 0 && (r = "barba"),
          (this.F = null),
          this.transitions.isRunning)
        )
          this.force(n);
        else if (
          !(s =
            r === "popstate"
              ? this.history.current &&
                this.url.getPath(this.history.current.url) ===
                  this.url.getPath(n) &&
                this.url.getQuery(this.history.current.url, !0) ===
                  this.url.getQuery(n, !0)
              : this.prevent.run("sameUrl", null, null, n)) ||
          this.transitions.hasSelf
        )
          return (
            (r = this.history.change(
              this.cache.has(n) ? this.cache.get(n).target : n,
              r,
              i
            )),
            i && (i.stopPropagation(), i.preventDefault()),
            this.page(n, r, i != null ? i : void 0, s)
          );
      }),
      (e.once = function (n) {
        try {
          var r = this;
          return Promise.resolve(r.hooks.do("beforeEnter", n)).then(
            function () {
              function i() {
                return Promise.resolve(r.hooks.do("afterEnter", n)).then(
                  function () {}
                );
              }
              var s = (function () {
                if (r.transitions.hasOnce) {
                  var a = r.transitions.get(n, { once: !0 });
                  return Promise.resolve(
                    r.transitions.doOnce({ transition: a, data: n })
                  ).then(function () {});
                }
              })();
              return s && s.then ? s.then(i) : i();
            }
          );
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      (e.page = function (n, r, i, s) {
        try {
          var a,
            o = function () {
              var f = l.data;
              return Promise.resolve(l.hooks.do("page", f)).then(function () {
                var d = (function (h, m) {
                  try {
                    var p =
                      ((g = l.transitions.get(f, { once: !1, self: s })),
                      Promise.resolve(
                        l.transitions.doPage({
                          data: f,
                          page: a,
                          transition: g,
                          wrapper: l.q,
                        })
                      ).then(function () {
                        l.I();
                      }));
                  } catch (y) {
                    return m();
                  }
                  var g;
                  return p && p.then ? p.then(void 0, m) : p;
                })(0, function () {
                  Yr.getLevel() === 0 && l.force(f.next.url.href);
                });
                if (d && d.then) return d.then(function () {});
              });
            },
            l = this;
          if (
            ((l.data.next.url = En({ href: n }, l.url.parse(n))),
            (l.data.trigger = r),
            (l.data.event = i),
            l.cache.has(n))
          )
            a = l.cache.update(n, { action: "click" }).request;
          else {
            var c = l.request(
              n,
              l.timeout,
              l.onRequestError.bind(l, r),
              l.cache,
              l.headers
            );
            c.then(function (f) {
              f.url.href !== n && l.history.add(f.url.href, r, "replace");
            }),
              (a = l.cache.set(n, c, "click", "pending").request);
          }
          var u = (function () {
            if (l.transitions.shouldWait)
              return Promise.resolve(Qa(a, l.data)).then(function () {});
          })();
          return Promise.resolve(u && u.then ? u.then(o) : o());
        } catch (f) {
          return Promise.reject(f);
        }
      }),
      (e.onRequestError = function (n) {
        this.transitions.isRunning = !1;
        var r = [].slice.call(arguments, 1),
          i = r[0],
          s = r[1],
          a = this.cache.getAction(i);
        return (
          this.cache.delete(i),
          (this.B && this.B(n, a, i, s) === !1) ||
            (a === "click" && this.force(i)),
          !1
        );
      }),
      (e.prefetch = function (n) {
        var r = this;
        (n = this.url.getAbsoluteHref(n)),
          this.cache.has(n) ||
            this.cache.set(
              n,
              this.request(
                n,
                this.timeout,
                this.onRequestError.bind(this, "barba"),
                this.cache,
                this.headers
              ).catch(function (i) {
                r.logger.error(i);
              }),
              "prefetch",
              "pending"
            );
      }),
      (e.G = function () {
        this.prefetchIgnore !== !0 &&
          (document.addEventListener("mouseover", this.U),
          document.addEventListener("touchstart", this.U)),
          document.addEventListener("click", this.$),
          window.addEventListener("popstate", this.X);
      }),
      (e.J = function () {
        this.prefetchIgnore !== !0 &&
          (document.removeEventListener("mouseover", this.U),
          document.removeEventListener("touchstart", this.U)),
          document.removeEventListener("click", this.$),
          window.removeEventListener("popstate", this.X);
      }),
      (e.U = function (n) {
        var r = this,
          i = this.W(n);
        if (i) {
          var s = this.url.getAbsoluteHref(this.dom.getHref(i));
          this.prevent.checkHref(s) ||
            this.cache.has(s) ||
            this.cache.set(
              s,
              this.request(
                s,
                this.timeout,
                this.onRequestError.bind(this, i),
                this.cache,
                this.headers
              ).catch(function (a) {
                r.logger.error(a);
              }),
              "enter",
              "pending"
            );
        }
      }),
      (e.$ = function (n) {
        var r = this.W(n);
        if (r) {
          if (this.transitions.isRunning && this.preventRunning)
            return n.preventDefault(), void n.stopPropagation();
          (this.F = n), this.go(this.dom.getHref(r), r, n);
        }
      }),
      (e.X = function (n) {
        this.go(this.url.getHref(), "popstate", n);
      }),
      (e.W = function (n) {
        for (var r = n.target; r && !this.dom.getHref(r); ) r = r.parentNode;
        if (r && !this.prevent.checkLink(r, n, this.dom.getHref(r))) return r;
      }),
      (e.I = function () {
        var n = this.url.getHref(),
          r = {
            container: this.dom.getContainer(),
            html: this.dom.getHtml(),
            namespace: this.dom.getNamespace(),
            url: En({ href: n }, this.url.parse(n)),
          };
        (this.D = {
          current: r,
          event: void 0,
          next: En({}, this.schemaPage),
          trigger: void 0,
        }),
          this.hooks.do("reset", this.data);
      }),
      dc(t, [
        {
          key: "data",
          get: function () {
            return this.D;
          },
        },
        {
          key: "wrapper",
          get: function () {
            return this.q;
          },
        },
      ]),
      t
    );
  })())(),
    N.registerPlugin(Z),
    document.addEventListener("DOMContentLoaded", () => {
      window.addEventListener("load", () => {
        window.scrollTo(0, 0);
        const t = Cs();
        t && t.scrollTo(0, { immediate: !0 });
      }),
        Yy(),
        By(),
        Cd();
    });
});
