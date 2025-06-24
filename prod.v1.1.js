var uy = Object.defineProperty;
var Ld = Object.getOwnPropertySymbols;
var fy = Object.prototype.hasOwnProperty,
  dy = Object.prototype.propertyIsEnumerable;
var Mt = Math.pow,
  nc = (Je, We, ue) =>
    We in Je
      ? uy(Je, We, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ue,
        })
      : (Je[We] = ue),
  Id = (Je, We) => {
    for (var ue in We || (We = {})) fy.call(We, ue) && nc(Je, ue, We[ue]);
    if (Ld) for (var ue of Ld(We)) dy.call(We, ue) && nc(Je, ue, We[ue]);
    return Je;
  };
var X = (Je, We, ue) => nc(Je, typeof We != "symbol" ? We + "" : We, ue);
var Ya = (Je, We, ue) =>
  new Promise((Os, un) => {
    var As = (Vt) => {
        try {
          Gi(ue.next(Vt));
        } catch (Or) {
          un(Or);
        }
      },
      Ga = (Vt) => {
        try {
          Gi(ue.throw(Vt));
        } catch (Or) {
          un(Or);
        }
      },
      Gi = (Vt) =>
        Vt.done ? Os(Vt.value) : Promise.resolve(Vt.value).then(As, Ga);
    Gi((ue = ue.apply(Je, We)).next());
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
      var i = Object.getOwnPropertySymbols(t);
      e &&
        (i = i.filter(function (r) {
          return Object.getOwnPropertyDescriptor(t, r).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function We(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? Je(Object(n), !0).forEach(function (i) {
            Vt(t, i, n[i]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Je(Object(n)).forEach(function (i) {
            Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
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
      i =
        Object.defineProperty ||
        function (b, T, O) {
          b[T] = O.value;
        },
      r = typeof Symbol == "function" ? Symbol : {},
      s = r.iterator || "@@iterator",
      a = r.asyncIterator || "@@asyncIterator",
      o = r.toStringTag || "@@toStringTag";
    function l(b, T, O) {
      return (
        Object.defineProperty(b, T, {
          value: O,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        b[T]
      );
    }
    try {
      l({}, "");
    } catch (b) {
      l = function (T, O, L) {
        return (T[O] = L);
      };
    }
    function c(b, T, O, L) {
      var k = T && T.prototype instanceof d ? T : d,
        I = Object.create(k.prototype),
        D = new A(L || []);
      return i(I, "_invoke", { value: S(b, O, D) }), I;
    }
    function u(b, T, O) {
      try {
        return { type: "normal", arg: b.call(T, O) };
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
      y = g && g(g(E([])));
    y && y !== e && n.call(y, s) && (p = y);
    var v = (m.prototype = d.prototype = Object.create(p));
    function _(b) {
      ["next", "throw", "return"].forEach(function (T) {
        l(b, T, function (O) {
          return this._invoke(T, O);
        });
      });
    }
    function x(b, T) {
      function O(k, I, D, N) {
        var $ = u(b[k], b, I);
        if ($.type !== "throw") {
          var H = $.arg,
            Y = H.value;
          return Y && typeof Y == "object" && n.call(Y, "__await")
            ? T.resolve(Y.__await).then(
                function (le) {
                  O("next", le, D, N);
                },
                function (le) {
                  O("throw", le, D, N);
                }
              )
            : T.resolve(Y).then(
                function (le) {
                  (H.value = le), D(H);
                },
                function (le) {
                  return O("throw", le, D, N);
                }
              );
        }
        N($.arg);
      }
      var L;
      i(this, "_invoke", {
        value: function (k, I) {
          function D() {
            return new T(function (N, $) {
              O(k, I, N, $);
            });
          }
          return (L = L ? L.then(D, D) : D());
        },
      });
    }
    function S(b, T, O) {
      var L = "suspendedStart";
      return function (k, I) {
        if (L === "executing") throw new Error("Generator is already running");
        if (L === "completed") {
          if (k === "throw") throw I;
          return M();
        }
        for (O.method = k, O.arg = I; ; ) {
          var D = O.delegate;
          if (D) {
            var N = C(D, O);
            if (N) {
              if (N === f) continue;
              return N;
            }
          }
          if (O.method === "next") O.sent = O._sent = O.arg;
          else if (O.method === "throw") {
            if (L === "suspendedStart") throw ((L = "completed"), O.arg);
            O.dispatchException(O.arg);
          } else O.method === "return" && O.abrupt("return", O.arg);
          L = "executing";
          var $ = u(b, T, O);
          if ($.type === "normal") {
            if (((L = O.done ? "completed" : "suspendedYield"), $.arg === f))
              continue;
            return { value: $.arg, done: O.done };
          }
          $.type === "throw" &&
            ((L = "completed"), (O.method = "throw"), (O.arg = $.arg));
        }
      };
    }
    function C(b, T) {
      var O = T.method,
        L = b.iterator[O];
      if (L === void 0)
        return (
          (T.delegate = null),
          (O === "throw" &&
            b.iterator.return &&
            ((T.method = "return"),
            (T.arg = void 0),
            C(b, T),
            T.method === "throw")) ||
            (O !== "return" &&
              ((T.method = "throw"),
              (T.arg = new TypeError(
                "The iterator does not provide a '" + O + "' method"
              )))),
          f
        );
      var k = u(L, b.iterator, T.arg);
      if (k.type === "throw")
        return (T.method = "throw"), (T.arg = k.arg), (T.delegate = null), f;
      var I = k.arg;
      return I
        ? I.done
          ? ((T[b.resultName] = I.value),
            (T.next = b.nextLoc),
            T.method !== "return" && ((T.method = "next"), (T.arg = void 0)),
            (T.delegate = null),
            f)
          : I
        : ((T.method = "throw"),
          (T.arg = new TypeError("iterator result is not an object")),
          (T.delegate = null),
          f);
    }
    function w(b) {
      var T = { tryLoc: b[0] };
      1 in b && (T.catchLoc = b[1]),
        2 in b && ((T.finallyLoc = b[2]), (T.afterLoc = b[3])),
        this.tryEntries.push(T);
    }
    function P(b) {
      var T = b.completion || {};
      (T.type = "normal"), delete T.arg, (b.completion = T);
    }
    function A(b) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        b.forEach(w, this),
        this.reset(!0);
    }
    function E(b) {
      if (b) {
        var T = b[s];
        if (T) return T.call(b);
        if (typeof b.next == "function") return b;
        if (!isNaN(b.length)) {
          var O = -1,
            L = function k() {
              for (; ++O < b.length; )
                if (n.call(b, O)) return (k.value = b[O]), (k.done = !1), k;
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
      i(v, "constructor", { value: m, configurable: !0 }),
      i(m, "constructor", { value: h, configurable: !0 }),
      (h.displayName = l(m, o, "GeneratorFunction")),
      (t.isGeneratorFunction = function (b) {
        var T = typeof b == "function" && b.constructor;
        return (
          !!T && (T === h || (T.displayName || T.name) === "GeneratorFunction")
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
      (t.async = function (b, T, O, L, k) {
        k === void 0 && (k = Promise);
        var I = new x(c(b, T, O, L), k);
        return t.isGeneratorFunction(T)
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
        var T = Object(b),
          O = [];
        for (var L in T) O.push(L);
        return (
          O.reverse(),
          function k() {
            for (; O.length; ) {
              var I = O.pop();
              if (I in T) return (k.value = I), (k.done = !1), k;
            }
            return (k.done = !0), k;
          }
        );
      }),
      (t.values = E),
      (A.prototype = {
        constructor: A,
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
            for (var T in this)
              T.charAt(0) === "t" &&
                n.call(this, T) &&
                !isNaN(+T.slice(1)) &&
                (this[T] = void 0);
        },
        stop: function () {
          this.done = !0;
          var b = this.tryEntries[0].completion;
          if (b.type === "throw") throw b.arg;
          return this.rval;
        },
        dispatchException: function (b) {
          if (this.done) throw b;
          var T = this;
          function O($, H) {
            return (
              (I.type = "throw"),
              (I.arg = b),
              (T.next = $),
              H && ((T.method = "next"), (T.arg = void 0)),
              !!H
            );
          }
          for (var L = this.tryEntries.length - 1; L >= 0; --L) {
            var k = this.tryEntries[L],
              I = k.completion;
            if (k.tryLoc === "root") return O("end");
            if (k.tryLoc <= this.prev) {
              var D = n.call(k, "catchLoc"),
                N = n.call(k, "finallyLoc");
              if (D && N) {
                if (this.prev < k.catchLoc) return O(k.catchLoc, !0);
                if (this.prev < k.finallyLoc) return O(k.finallyLoc);
              } else if (D) {
                if (this.prev < k.catchLoc) return O(k.catchLoc, !0);
              } else {
                if (!N)
                  throw new Error("try statement without catch or finally");
                if (this.prev < k.finallyLoc) return O(k.finallyLoc);
              }
            }
          }
        },
        abrupt: function (b, T) {
          for (var O = this.tryEntries.length - 1; O >= 0; --O) {
            var L = this.tryEntries[O];
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
            k.tryLoc <= T &&
            T <= k.finallyLoc &&
            (k = null);
          var I = k ? k.completion : {};
          return (
            (I.type = b),
            (I.arg = T),
            k
              ? ((this.method = "next"), (this.next = k.finallyLoc), f)
              : this.complete(I)
          );
        },
        complete: function (b, T) {
          if (b.type === "throw") throw b.arg;
          return (
            b.type === "break" || b.type === "continue"
              ? (this.next = b.arg)
              : b.type === "return"
              ? ((this.rval = this.arg = b.arg),
                (this.method = "return"),
                (this.next = "end"))
              : b.type === "normal" && T && (this.next = T),
            f
          );
        },
        finish: function (b) {
          for (var T = this.tryEntries.length - 1; T >= 0; --T) {
            var O = this.tryEntries[T];
            if (O.finallyLoc === b)
              return this.complete(O.completion, O.afterLoc), P(O), f;
          }
        },
        catch: function (b) {
          for (var T = this.tryEntries.length - 1; T >= 0; --T) {
            var O = this.tryEntries[T];
            if (O.tryLoc === b) {
              var L = O.completion;
              if (L.type === "throw") {
                var k = L.arg;
                P(O);
              }
              return k;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (b, T, O) {
          return (
            (this.delegate = { iterator: E(b), resultName: T, nextLoc: O }),
            this.method === "next" && (this.arg = void 0),
            f
          );
        },
      }),
      t
    );
  }
  function Os(t, e, n, i, r, s, a) {
    try {
      var o = t[s](a),
        l = o.value;
    } catch (c) {
      n(c);
      return;
    }
    o.done ? e(l) : Promise.resolve(l).then(i, r);
  }
  function un(t) {
    return function () {
      var e = this,
        n = arguments;
      return new Promise(function (i, r) {
        var s = t.apply(e, n);
        function a(l) {
          Os(s, i, r, a, o, "next", l);
        }
        function o(l) {
          Os(s, i, r, a, o, "throw", l);
        }
        a(void 0);
      });
    };
  }
  function As(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function Ga(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, rc(i.key), i);
    }
  }
  function Gi(t, e, n) {
    return (
      e && Ga(t.prototype, e),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  function Vt(t, e, n) {
    return (
      (e = rc(e)),
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
  function Or(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      e && Lr(t, e);
  }
  function Ar(t) {
    return (
      (Ar = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (n) {
            return n.__proto__ || Object.getPrototypeOf(n);
          }),
      Ar(t)
    );
  }
  function Lr(t, e) {
    return (
      (Lr = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (i, r) {
            return (i.__proto__ = r), i;
          }),
      Lr(t, e)
    );
  }
  function ic() {
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
  function Ls(t, e, n) {
    return (
      ic()
        ? (Ls = Reflect.construct.bind())
        : (Ls = function (r, s, a) {
            var o = [null];
            o.push.apply(o, s);
            var l = Function.bind.apply(r, o),
              c = new l();
            return a && Lr(c, a.prototype), c;
          }),
      Ls.apply(null, arguments)
    );
  }
  function zd(t) {
    return Function.toString.call(t).indexOf("[native code]") !== -1;
  }
  function ja(t) {
    var e = typeof Map == "function" ? new Map() : void 0;
    return (
      (ja = function (i) {
        if (i === null || !zd(i)) return i;
        if (typeof i != "function")
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (typeof e != "undefined") {
          if (e.has(i)) return e.get(i);
          e.set(i, r);
        }
        function r() {
          return Ls(i, arguments, Ar(this).constructor);
        }
        return (
          (r.prototype = Object.create(i.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          Lr(r, i)
        );
      }),
      ja(t)
    );
  }
  function Is(t) {
    if (t === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function Rd(t, e) {
    if (e && (typeof e == "object" || typeof e == "function")) return e;
    if (e !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return Is(t);
  }
  function Nd(t) {
    var e = ic();
    return function () {
      var i = Ar(t),
        r;
      if (e) {
        var s = Ar(this).constructor;
        r = Reflect.construct(i, arguments, s);
      } else r = i.apply(this, arguments);
      return Rd(this, r);
    };
  }
  function Fd(t, e) {
    if (typeof t != "object" || t === null) return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
      var i = n.call(t, e);
      if (typeof i != "object") return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(t);
  }
  function rc(t) {
    var e = Fd(t, "string");
    return typeof e == "symbol" ? e : String(e);
  }
  var sc =
    typeof global != "undefined" &&
    {}.toString.call(global) === "[object global]";
  function ac(t, e) {
    return t.indexOf(e.toLowerCase()) === 0
      ? t
      : ""
          .concat(e.toLowerCase())
          .concat(t.substr(0, 1).toUpperCase())
          .concat(t.substr(1));
  }
  function Bd(t) {
    return !!(
      t &&
      t.nodeType === 1 &&
      "nodeName" in t &&
      t.ownerDocument &&
      t.ownerDocument.defaultView
    );
  }
  function qd(t) {
    return !isNaN(parseFloat(t)) && isFinite(t) && Math.floor(t) == t;
  }
  function pi(t) {
    return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(
      t
    );
  }
  function oc(t) {
    var e =
      /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
    return e.test(t);
  }
  function Hd(t) {
    for (
      var e = (t || "").match(/^(?:https?:)?(?:\/\/)?([^/?]+)/),
        n = ((e && e[1]) || "").replace("player.", ""),
        i = [".videoji.hk", ".vimeo.work", ".videoji.cn"],
        r = 0,
        s = i;
      r < s.length;
      r++
    ) {
      var a = s[r];
      if (n.endsWith(a)) return n;
    }
    return "vimeo.com";
  }
  function lc() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      e = t.id,
      n = t.url,
      i = e || n;
    if (!i)
      throw new Error(
        "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
      );
    if (qd(i)) return "https://vimeo.com/".concat(i);
    if (pi(i)) return i.replace("http:", "https:");
    throw e
      ? new TypeError("“".concat(e, "” is not a valid video id."))
      : new TypeError("“".concat(i, "” is not a vimeo.com url."));
  }
  var cc = function (e, n, i) {
      var r =
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
          e[r](o, i);
        }),
        {
          cancel: function () {
            return a.forEach(function (l) {
              return e[s](l, i);
            });
          },
        }
      );
    },
    Vd = typeof Array.prototype.indexOf != "undefined",
    Wd =
      typeof window != "undefined" && typeof window.postMessage != "undefined";
  if (!sc && (!Vd || !Wd))
    throw new Error(
      "Sorry, the Vimeo Player API is not available in this browser."
    );
  var ji =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {};
  function Xd(t, e) {
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
      i = function (s, a, o) {
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
        if ((i(this, "_id", o("_WeakMap")), arguments.length > 0))
          throw new TypeError("WeakMap iterable is not supported");
      }
      i(s.prototype, "delete", function (c) {
        if ((a(this, "delete"), !r(c))) return !1;
        var u = c[this._id];
        return u && u[0] === c ? (delete c[this._id], !0) : !1;
      }),
        i(s.prototype, "get", function (c) {
          if ((a(this, "get"), !!r(c))) {
            var u = c[this._id];
            if (u && u[0] === c) return u[1];
          }
        }),
        i(s.prototype, "has", function (c) {
          if ((a(this, "has"), !r(c))) return !1;
          var u = c[this._id];
          return !!(u && u[0] === c);
        }),
        i(s.prototype, "set", function (c, u) {
          if ((a(this, "set"), !r(c)))
            throw new TypeError("Invalid value used as weak map key");
          var f = c[this._id];
          return f && f[0] === c
            ? ((f[1] = u), this)
            : (i(c, this._id, [c, u]), this);
        });
      function a(c, u) {
        if (!r(c) || !e.call(c, "_id"))
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
      return i(s, "_polyfill", !0), s;
    })();
    function r(s) {
      return Object(s) === s;
    }
  })(
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
      ? self
      : typeof window != "undefined"
      ? window
      : ji
  );
  var Wt = Xd(function (t) {
      /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/ (function (n, i, r) {
        (i[n] = i[n] || r()), t.exports && (t.exports = i[n]);
      })("Promise", ji, function () {
        var n,
          i,
          r,
          s = Object.prototype.toString,
          a =
            typeof setImmediate != "undefined"
              ? function (_) {
                  return setImmediate(_);
                }
              : setTimeout;
        try {
          Object.defineProperty({}, "x", {}),
            (n = function (_, x, S, C) {
              return Object.defineProperty(_, x, {
                value: S,
                writable: !0,
                configurable: C !== !1,
              });
            });
        } catch (v) {
          n = function (x, S, C) {
            return (x[S] = C), x;
          };
        }
        r = (function () {
          var _, x, S;
          function C(w, P) {
            (this.fn = w), (this.self = P), (this.next = void 0);
          }
          return {
            add: function (P, A) {
              (S = new C(P, A)),
                x ? (x.next = S) : (_ = S),
                (x = S),
                (S = void 0);
            },
            drain: function () {
              var P = _;
              for (_ = x = i = void 0; P; ) P.fn.call(P.self), (P = P.next);
            },
          };
        })();
        function o(v, _) {
          r.add(v, _), i || (i = a(r.drain));
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
          var S, C;
          try {
            _ === !1
              ? x.reject(v.msg)
              : (_ === !0 ? (S = v.msg) : (S = _.call(void 0, v.msg)),
                S === x.promise
                  ? x.reject(TypeError("Promise-chain cycle"))
                  : (C = l(S))
                  ? C.call(S, x.resolve, x.reject)
                  : x.resolve(S));
          } catch (w) {
            x.reject(w);
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
                    } catch (C) {
                      d.call(S, C);
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
          for (var C = 0; C < _.length; C++)
            (function (P) {
              v.resolve(_[P]).then(function (E) {
                x(P, E);
              }, S);
            })(C);
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
          (this.then = function (S, C) {
            var w = {
              success: typeof S == "function" ? S : !0,
              failure: typeof C == "function" ? C : !1,
            };
            return (
              (w.promise = new this.constructor(function (A, E) {
                if (typeof A != "function" || typeof E != "function")
                  throw TypeError("Not a function");
                (w.resolve = A), (w.reject = E);
              })),
              _.chain.push(w),
              _.state !== 0 && o(c, _),
              w.promise
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
              : new x(function (C, w) {
                  if (typeof C != "function" || typeof w != "function")
                    throw TypeError("Not a function");
                  C(_);
                });
          }),
          n(g, "reject", function (_) {
            return new this(function (S, C) {
              if (typeof S != "function" || typeof C != "function")
                throw TypeError("Not a function");
              C(_);
            });
          }),
          n(g, "all", function (_) {
            var x = this;
            return s.call(_) != "[object Array]"
              ? x.reject(TypeError("Not an array"))
              : _.length === 0
              ? x.resolve([])
              : new x(function (C, w) {
                  if (typeof C != "function" || typeof w != "function")
                    throw TypeError("Not a function");
                  var P = _.length,
                    A = Array(P),
                    E = 0;
                  h(
                    x,
                    _,
                    function (b, T) {
                      (A[b] = T), ++E === P && C(A);
                    },
                    w
                  );
                });
          }),
          n(g, "race", function (_) {
            var x = this;
            return s.call(_) != "[object Array]"
              ? x.reject(TypeError("Not an array"))
              : new x(function (C, w) {
                  if (typeof C != "function" || typeof w != "function")
                    throw TypeError("Not a function");
                  h(
                    x,
                    _,
                    function (A, E) {
                      C(E);
                    },
                    w
                  );
                });
          }),
          g
        );
      });
    }),
    Cn = new WeakMap();
  function Ir(t, e, n) {
    var i = Cn.get(t.element) || {};
    e in i || (i[e] = []), i[e].push(n), Cn.set(t.element, i);
  }
  function Ds(t, e) {
    var n = Cn.get(t.element) || {};
    return n[e] || [];
  }
  function zs(t, e, n) {
    var i = Cn.get(t.element) || {};
    if (!i[e]) return !0;
    if (!n) return (i[e] = []), Cn.set(t.element, i), !0;
    var r = i[e].indexOf(n);
    return (
      r !== -1 && i[e].splice(r, 1),
      Cn.set(t.element, i),
      i[e] && i[e].length === 0
    );
  }
  function Yd(t, e) {
    var n = Ds(t, e);
    if (n.length < 1) return !1;
    var i = n.shift();
    return zs(t, e, i), i;
  }
  function Gd(t, e) {
    var n = Cn.get(t);
    Cn.set(e, n), Cn.delete(t);
  }
  function Rs(t) {
    if (typeof t == "string")
      try {
        t = JSON.parse(t);
      } catch (e) {
        return console.warn(e), {};
      }
    return t;
  }
  function mi(t, e, n) {
    if (!(!t.element.contentWindow || !t.element.contentWindow.postMessage)) {
      var i = { method: e };
      n !== void 0 && (i.value = n);
      var r = parseFloat(
        navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1")
      );
      r >= 8 && r < 10 && (i = JSON.stringify(i)),
        t.element.contentWindow.postMessage(i, t.origin);
    }
  }
  function jd(t, e) {
    e = Rs(e);
    var n = [],
      i;
    if (e.event) {
      if (e.event === "error") {
        var r = Ds(t, e.data.method);
        r.forEach(function (a) {
          var o = new Error(e.data.message);
          (o.name = e.data.name), a.reject(o), zs(t, e.data.method, a);
        });
      }
      (n = Ds(t, "event:".concat(e.event))), (i = e.data);
    } else if (e.method) {
      var s = Yd(t, e.method);
      s && (n.push(s), (i = e.value));
    }
    n.forEach(function (a) {
      try {
        if (typeof a == "function") {
          a.call(t, i);
          return;
        }
        a.resolve(i);
      } catch (o) {}
    });
  }
  var Ud = [
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
  function uc(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Ud.reduce(function (n, i) {
      var r = t.getAttribute("data-vimeo-".concat(i));
      return (r || r === "") && (n[i] = r === "" ? 1 : r), n;
    }, e);
  }
  function Ua(t, e) {
    var n = t.html;
    if (!e) throw new TypeError("An element must be provided");
    if (e.getAttribute("data-vimeo-initialized") !== null)
      return e.querySelector("iframe");
    var i = document.createElement("div");
    return (
      (i.innerHTML = n),
      e.appendChild(i.firstChild),
      e.setAttribute("data-vimeo-initialized", "true"),
      e.querySelector("iframe")
    );
  }
  function fc(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = arguments.length > 2 ? arguments[2] : void 0;
    return new Promise(function (i, r) {
      if (!pi(t))
        throw new TypeError("“".concat(t, "” is not a vimeo.com url."));
      var s = Hd(t),
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
            r(new Error("“".concat(t, "” was not found.")));
            return;
          }
          if (l.status === 403) {
            r(new Error("“".concat(t, "” is not embeddable.")));
            return;
          }
          try {
            var c = JSON.parse(l.responseText);
            if (c.domain_status_code === 403) {
              Ua(c, n), r(new Error("“".concat(t, "” is not embeddable.")));
              return;
            }
            i(c);
          } catch (u) {
            r(u);
          }
        }),
        (l.onerror = function () {
          var c = l.status ? " (".concat(l.status, ")") : "";
          r(
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
  function Kd() {
    var t =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : document,
      e = [].slice.call(
        t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")
      ),
      n = function (r) {
        "console" in window &&
          console.error &&
          console.error("There was an error creating an embed: ".concat(r));
      };
    e.forEach(function (i) {
      try {
        if (i.getAttribute("data-vimeo-defer") !== null) return;
        var r = uc(i),
          s = lc(r);
        fc(s, r, i)
          .then(function (a) {
            return Ua(a, i);
          })
          .catch(n);
      } catch (a) {
        n(a);
      }
    });
  }
  function Zd() {
    var t =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoPlayerResizeEmbeds_) {
      window.VimeoPlayerResizeEmbeds_ = !0;
      var e = function (i) {
        if (pi(i.origin) && !(!i.data || i.data.event !== "spacechange")) {
          for (var r = t.querySelectorAll("iframe"), s = 0; s < r.length; s++)
            if (r[s].contentWindow === i.source) {
              var a = r[s].parentElement;
              a.style.paddingBottom = "".concat(i.data.data[0].bottom, "px");
              break;
            }
        }
      };
      window.addEventListener("message", e);
    }
  }
  function Qd() {
    var t =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoSeoMetadataAppended) {
      window.VimeoSeoMetadataAppended = !0;
      var e = function (i) {
        if (pi(i.origin)) {
          var r = Rs(i.data);
          if (!(!r || r.event !== "ready"))
            for (
              var s = t.querySelectorAll("iframe"), a = 0;
              a < s.length;
              a++
            ) {
              var o = s[a],
                l = o.contentWindow === i.source;
              if (oc(o.src) && l) {
                var c = new Ns(o);
                c.callMethod("appendVideoMetadata", window.location.href);
              }
            }
        }
      };
      window.addEventListener("message", e);
    }
  }
  function Jd() {
    var t =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoCheckedUrlTimeParam) {
      window.VimeoCheckedUrlTimeParam = !0;
      var e = function (r) {
          "console" in window &&
            console.error &&
            console.error("There was an error getting video Id: ".concat(r));
        },
        n = function (r) {
          if (pi(r.origin)) {
            var s = Rs(r.data);
            if (!(!s || s.event !== "ready"))
              for (
                var a = t.querySelectorAll("iframe"),
                  o = function () {
                    var u = a[l],
                      f = u.contentWindow === r.source;
                    if (oc(u.src) && f) {
                      var d = new Ns(u);
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
  function eh() {
    var t = (function () {
        for (
          var i,
            r = [
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
            a = r.length,
            o = {};
          s < a;
          s++
        )
          if (((i = r[s]), i && i[1] in document)) {
            for (s = 0; s < i.length; s++) o[r[0][s]] = i[s];
            return o;
          }
        return !1;
      })(),
      e = {
        fullscreenchange: t.fullscreenchange,
        fullscreenerror: t.fullscreenerror,
      },
      n = {
        request: function (r) {
          return new Promise(function (s, a) {
            var o = function c() {
              n.off("fullscreenchange", c), s();
            };
            n.on("fullscreenchange", o), (r = r || document.documentElement);
            var l = r[t.requestFullscreen]();
            l instanceof Promise && l.then(o).catch(a);
          });
        },
        exit: function () {
          return new Promise(function (r, s) {
            if (!n.isFullscreen) {
              r();
              return;
            }
            var a = function l() {
              n.off("fullscreenchange", l), r();
            };
            n.on("fullscreenchange", a);
            var o = document[t.exitFullscreen]();
            o instanceof Promise && o.then(a).catch(s);
          });
        },
        on: function (r, s) {
          var a = e[r];
          a && document.addEventListener(a, s);
        },
        off: function (r, s) {
          var a = e[r];
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
  var th = {
      role: "viewer",
      autoPlayMuted: !0,
      allowedDrift: 0.3,
      maxAllowedDrift: 1,
      minCheckInterval: 0.1,
      maxRateAdjustment: 0.2,
      maxTimeToCatchUp: 1,
    },
    nh = (function (t) {
      Or(n, t);
      var e = Nd(n);
      function n(i, r) {
        var s,
          a =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          o = arguments.length > 3 ? arguments[3] : void 0;
        return (
          As(this, n),
          (s = e.call(this)),
          Vt(Is(s), "logger", void 0),
          Vt(Is(s), "speedAdjustment", 0),
          Vt(
            Is(s),
            "adjustSpeed",
            (function () {
              var l = un(
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
          s.init(r, i, We(We({}, th), a)),
          s
        );
      }
      return (
        Gi(n, [
          {
            key: "disconnect",
            value: function () {
              this.dispatchEvent(new Event("disconnect"));
            },
          },
          {
            key: "init",
            value: (function () {
              var i = un(
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
                            (u = cc(a, "change", function () {
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
                            (d = cc(
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
              function r(s, a, o) {
                return i.apply(this, arguments);
              }
              return r;
            })(),
          },
          {
            key: "updateTimingObject",
            value: (function () {
              var i = un(
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
              function r(s, a) {
                return i.apply(this, arguments);
              }
              return r;
            })(),
          },
          {
            key: "updatePlayer",
            value: (function () {
              var i = un(
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
                                  var m = un(
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
              function r(s, a, o) {
                return i.apply(this, arguments);
              }
              return r;
            })(),
          },
          {
            key: "maintainPlaybackPosition",
            value: function (r, s, a) {
              var o = this,
                l = a.allowedDrift,
                c = a.maxAllowedDrift,
                u = a.minCheckInterval,
                f = a.maxRateAdjustment,
                d = a.maxTimeToCatchUp,
                h = Math.min(d, Math.max(u, c)) * 1e3,
                m = (function () {
                  var g = un(
                    ue().mark(function y() {
                      var v, _, x, S, C;
                      return ue().wrap(function (P) {
                        for (;;)
                          switch ((P.prev = P.next)) {
                            case 0:
                              if (((P.t0 = r.query().velocity === 0), P.t0)) {
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
                                (P.t2 = r.query().position),
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
                              s.setCurrentTime(r.query().position),
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
                                (C = x < S ? (S - x) / 2 : S),
                                (P.next = 28),
                                o.adjustSpeed(s, C * Math.sign(v))
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
            value: function (r) {
              var s;
              (s = this.logger) === null ||
                s === void 0 ||
                s.call(this, "TimingSrcConnector: ".concat(r));
            },
          },
          {
            key: "waitForTOReadyState",
            value: function (r, s) {
              return new Promise(function (a) {
                var o = function l() {
                  r.readyState === s
                    ? a()
                    : r.addEventListener("readystatechange", l, { once: !0 });
                };
                o();
              });
            },
          },
        ]),
        n
      );
    })(ja(EventTarget)),
    Ui = new WeakMap(),
    Ka = new WeakMap(),
    St = {},
    Ns = (function () {
      function t(e) {
        var n = this,
          i =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (
          (As(this, t),
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
          !Bd(e))
        )
          throw new TypeError(
            "You must pass either a valid element or a valid id."
          );
        if (e.nodeName !== "IFRAME") {
          var r = e.querySelector("iframe");
          r && (e = r);
        }
        if (e.nodeName === "IFRAME" && !pi(e.getAttribute("src") || ""))
          throw new Error("The player element passed isn’t a Vimeo embed.");
        if (Ui.has(e)) return Ui.get(e);
        (this._window = e.ownerDocument.defaultView),
          (this.element = e),
          (this.origin = "*");
        var s = new Wt(function (o, l) {
          if (
            ((n._onMessage = function (f) {
              if (!(!pi(f.origin) || n.element.contentWindow !== f.source)) {
                n.origin === "*" && (n.origin = f.origin);
                var d = Rs(f.data),
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
                jd(n, d);
              }
            }),
            n._window.addEventListener("message", n._onMessage),
            n.element.nodeName !== "IFRAME")
          ) {
            var c = uc(e, i),
              u = lc(c);
            fc(u, c, e)
              .then(function (f) {
                var d = Ua(f, e);
                return (
                  (n.element = d),
                  (n._originalElement = e),
                  Gd(e, d),
                  Ui.set(n.element, n),
                  f
                );
              })
              .catch(l);
          }
        });
        if (
          (Ka.set(this, s),
          Ui.set(this.element, this),
          this.element.nodeName === "IFRAME" && mi(this, "ping"),
          St.isEnabled)
        ) {
          var a = function () {
            return St.exit();
          };
          (this.fullscreenchangeHandler = function () {
            St.isFullscreen
              ? Ir(n, "event:exitFullscreen", a)
              : zs(n, "event:exitFullscreen", a),
              n.ready().then(function () {
                mi(n, "fullscreenchange", St.isFullscreen);
              });
          }),
            St.on("fullscreenchange", this.fullscreenchangeHandler);
        }
        return this;
      }
      return (
        Gi(t, [
          {
            key: "callMethod",
            value: function (n) {
              var i = this,
                r =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
              return new Wt(function (s, a) {
                return i
                  .ready()
                  .then(function () {
                    Ir(i, n, { resolve: s, reject: a }), mi(i, n, r);
                  })
                  .catch(a);
              });
            },
          },
          {
            key: "get",
            value: function (n) {
              var i = this;
              return new Wt(function (r, s) {
                return (
                  (n = ac(n, "get")),
                  i
                    .ready()
                    .then(function () {
                      Ir(i, n, { resolve: r, reject: s }), mi(i, n);
                    })
                    .catch(s)
                );
              });
            },
          },
          {
            key: "set",
            value: function (n, i) {
              var r = this;
              return new Wt(function (s, a) {
                if (((n = ac(n, "set")), i == null))
                  throw new TypeError("There must be a value to set.");
                return r
                  .ready()
                  .then(function () {
                    Ir(r, n, { resolve: s, reject: a }), mi(r, n, i);
                  })
                  .catch(a);
              });
            },
          },
          {
            key: "on",
            value: function (n, i) {
              if (!n) throw new TypeError("You must pass an event name.");
              if (!i) throw new TypeError("You must pass a callback function.");
              if (typeof i != "function")
                throw new TypeError("The callback must be a function.");
              var r = Ds(this, "event:".concat(n));
              r.length === 0 &&
                this.callMethod("addEventListener", n).catch(function () {}),
                Ir(this, "event:".concat(n), i);
            },
          },
          {
            key: "off",
            value: function (n, i) {
              if (!n) throw new TypeError("You must pass an event name.");
              if (i && typeof i != "function")
                throw new TypeError("The callback must be a function.");
              var r = zs(this, "event:".concat(n), i);
              r &&
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
                Ka.get(this) ||
                new Wt(function (i, r) {
                  r(new Error("Unknown player. Probably unloaded."));
                });
              return Wt.resolve(n);
            },
          },
          {
            key: "addCuePoint",
            value: function (n) {
              var i =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
              return this.callMethod("addCuePoint", { time: n, data: i });
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
            value: function (n, i) {
              if (!n) throw new TypeError("You must pass a language.");
              return this.callMethod("enableTextTrack", {
                language: n,
                kind: i,
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
              return St.isEnabled
                ? St.request(this.element)
                : this.callMethod("requestFullscreen");
            },
          },
          {
            key: "exitFullscreen",
            value: function () {
              return St.isEnabled
                ? St.exit()
                : this.callMethod("exitFullscreen");
            },
          },
          {
            key: "getFullscreen",
            value: function () {
              return St.isEnabled
                ? Wt.resolve(St.isFullscreen)
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
              return new Wt(function (i) {
                if (
                  (Ka.delete(n),
                  Ui.delete(n.element),
                  n._originalElement &&
                    (Ui.delete(n._originalElement),
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
                  var r = n.element.querySelector("iframe");
                  r &&
                    r.parentNode &&
                    (r.parentNode.parentNode &&
                    n._originalElement &&
                    n._originalElement !== r.parentNode
                      ? r.parentNode.parentNode.removeChild(r.parentNode)
                      : r.parentNode.removeChild(r));
                }
                n._window.removeEventListener("message", n._onMessage),
                  St.isEnabled &&
                    St.off("fullscreenchange", n.fullscreenchangeHandler),
                  i();
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
              return Wt.all([
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
                return new Wt(function (s, a) {
                  return a(new TypeError("Argument must be an array."));
                });
              var i = new Wt(function (s) {
                  return s(null);
                }),
                r = [
                  n[0] ? this.set("colorOne", n[0]) : i,
                  n[1] ? this.set("colorTwo", n[1]) : i,
                  n[2] ? this.set("colorThree", n[2]) : i,
                  n[3] ? this.set("colorFour", n[3]) : i,
                ];
              return Wt.all(r);
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
              var e = un(
                ue().mark(function i(r, s) {
                  var a = this,
                    o;
                  return ue().wrap(
                    function (c) {
                      for (;;)
                        switch ((c.prev = c.next)) {
                          case 0:
                            if (r) {
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
                              (o = new nh(this, r, s)),
                              mi(this, "notifyTimingObjectConnect"),
                              o.addEventListener("disconnect", function () {
                                return mi(a, "notifyTimingObjectDisconnect");
                              }),
                              c.abrupt("return", o)
                            );
                          case 8:
                          case "end":
                            return c.stop();
                        }
                    },
                    i,
                    this
                  );
                })
              );
              function n(i, r) {
                return e.apply(this, arguments);
              }
              return n;
            })(),
          },
        ]),
        t
      );
    })();
  sc || ((St = eh()), Kd(), Zd(), Qd(), Jd());
  class ih {
    constructor() {
      typeof Ns != "undefined"
        ? this.init()
        : console.error("Vimeo Player SDK not available");
    }
    init() {
      document.querySelectorAll("[data-vimeo-player-init]").length > 0 &&
        this.initVimeoPlayer();
    }
    initVimeoPlayer() {
      document.querySelectorAll("[data-vimeo-player-init]").forEach((n, i) => {
        try {
          let v = function (E) {
              let M = Math.floor(E / 3600);
              E -= M * 3600;
              let b = Math.floor(E / 60);
              return (E -= b * 60), b + ":" + (E < 10 ? "0" + E : E);
            },
            C = function () {
              c.getDuration().then(function () {
                const E = x.value;
                c.setCurrentTime(E), S && (S.value = E);
              });
            },
            P = function () {
              n.setAttribute("data-vimeo-hover", "false");
            },
            A = function () {
              n.setAttribute("data-vimeo-activated", "false"),
                n.setAttribute("data-vimeo-playing", "false"),
                c.unload();
            };
          const r = n.getAttribute("data-vimeo-video-id");
          if (!r) return;
          const s = n.querySelector("iframe");
          if (!s) {
            console.error("No iframe found in vimeo player element", n);
            return;
          }
          const a = `https://player.vimeo.com/video/${r}?api=1&background=1&autoplay=0&loop=0&muted=1`;
          s.setAttribute("src", a);
          const o = "vimeo-player-index-" + i;
          n.setAttribute("id", o);
          const l = n.id,
            c = new Ns(s);
          if (
            (n.getAttribute("data-vimeo-update-size") === "true" &&
              c.getVideoWidth().then(function (E) {
                c.getVideoHeight().then(function (M) {
                  const b = n.querySelector(".vimeo-player__before");
                  b && (b.style.paddingTop = (M / E) * 100 + "%");
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
            const E = () => {
              const M = n.getBoundingClientRect();
              M.top < window.innerHeight && M.bottom > 0 ? u() : f();
            };
            E(), window.addEventListener("scroll", E);
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
                const E = document.getElementById(l);
                if (!E) return;
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
                      E.requestFullscreen ||
                      E.webkitRequestFullscreen ||
                      E.mozRequestFullScreen ||
                      E.msRequestFullscreen
                    ).call(E));
              });
          const y = () => {
            const E =
              document.fullscreenElement ||
              document.webkitFullscreenElement ||
              document.mozFullScreenElement ||
              document.msFullscreenElement;
            n.setAttribute("data-vimeo-fullscreen", E ? "true" : "false");
          };
          [
            "fullscreenchange",
            "webkitfullscreenchange",
            "mozfullscreenchange",
            "msfullscreenchange",
          ].forEach((E) => {
            document.addEventListener(E, y);
          });
          const _ = n.querySelector("[data-vimeo-duration]");
          c.getDuration().then(function (E) {
            _ && (_.textContent = v(E)),
              n
                .querySelectorAll('[data-vimeo-control="timeline"], progress')
                .forEach((b) => {
                  b.setAttribute("max", E);
                });
          });
          const x = n.querySelector('[data-vimeo-control="timeline"]'),
            S = n.querySelector("progress");
          x &&
            ["input", "change"].forEach((E) => {
              x.addEventListener(E, C);
            }),
            c.on("timeupdate", function (E) {
              x && (x.value = E.seconds),
                S && (S.value = E.seconds),
                _ && (_.textContent = v(Math.trunc(E.seconds)));
            });
          let w;
          n.addEventListener("mousemove", function () {
            n.getAttribute("data-vimeo-hover") === "false" &&
              n.setAttribute("data-vimeo-hover", "true"),
              clearTimeout(w),
              (w = setTimeout(P, 3e3));
          }),
            c.on("ended", A);
        } catch (r) {
          console.error("Error initializing Vimeo player:", r);
        }
      });
    }
  }
  const rh = () => {
    new ih();
  };
  function dc(t) {
    return (
      t !== null &&
      typeof t == "object" &&
      "constructor" in t &&
      t.constructor === Object
    );
  }
  function Za(t = {}, e = {}) {
    Object.keys(e).forEach((n) => {
      typeof t[n] == "undefined"
        ? (t[n] = e[n])
        : dc(e[n]) &&
          dc(t[n]) &&
          Object.keys(e[n]).length > 0 &&
          Za(t[n], e[n]);
    });
  }
  const hc = {
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
    return Za(t, hc), t;
  }
  const sh = {
    document: hc,
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
    return Za(t, sh), t;
  }
  function ah(t) {
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
  class qn extends Array {
    constructor(e) {
      typeof e == "number" ? super(e) : (super(...(e || [])), ah(this));
    }
  }
  function Dr(t = []) {
    const e = [];
    return (
      t.forEach((n) => {
        Array.isArray(n) ? e.push(...Dr(n)) : e.push(n);
      }),
      e
    );
  }
  function pc(t, e) {
    return Array.prototype.filter.call(t, e);
  }
  function oh(t) {
    const e = [];
    for (let n = 0; n < t.length; n += 1)
      e.indexOf(t[n]) === -1 && e.push(t[n]);
    return e;
  }
  function lh(t, e) {
    if (typeof t != "string") return [t];
    const n = [],
      i = e.querySelectorAll(t);
    for (let r = 0; r < i.length; r += 1) n.push(i[r]);
    return n;
  }
  function F(t, e) {
    const n = ge(),
      i = Fe();
    let r = [];
    if (!e && t instanceof qn) return t;
    if (!t) return new qn(r);
    if (typeof t == "string") {
      const s = t.trim();
      if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
        let a = "div";
        s.indexOf("<li") === 0 && (a = "ul"),
          s.indexOf("<tr") === 0 && (a = "tbody"),
          (s.indexOf("<td") === 0 || s.indexOf("<th") === 0) && (a = "tr"),
          s.indexOf("<tbody") === 0 && (a = "table"),
          s.indexOf("<option") === 0 && (a = "select");
        const o = i.createElement(a);
        o.innerHTML = s;
        for (let l = 0; l < o.childNodes.length; l += 1)
          r.push(o.childNodes[l]);
      } else r = lh(t.trim(), e || i);
    } else if (t.nodeType || t === n || t === i) r.push(t);
    else if (Array.isArray(t)) {
      if (t instanceof qn) return t;
      r = t;
    }
    return new qn(oh(r));
  }
  F.fn = qn.prototype;
  function ch(...t) {
    const e = Dr(t.map((n) => n.split(" ")));
    return (
      this.forEach((n) => {
        n.classList.add(...e);
      }),
      this
    );
  }
  function uh(...t) {
    const e = Dr(t.map((n) => n.split(" ")));
    return (
      this.forEach((n) => {
        n.classList.remove(...e);
      }),
      this
    );
  }
  function fh(...t) {
    const e = Dr(t.map((n) => n.split(" ")));
    this.forEach((n) => {
      e.forEach((i) => {
        n.classList.toggle(i);
      });
    });
  }
  function dh(...t) {
    const e = Dr(t.map((n) => n.split(" ")));
    return (
      pc(this, (n) => e.filter((i) => n.classList.contains(i)).length > 0)
        .length > 0
    );
  }
  function hh(t, e) {
    if (arguments.length === 1 && typeof t == "string")
      return this[0] ? this[0].getAttribute(t) : void 0;
    for (let n = 0; n < this.length; n += 1)
      if (arguments.length === 2) this[n].setAttribute(t, e);
      else
        for (const i in t) (this[n][i] = t[i]), this[n].setAttribute(i, t[i]);
    return this;
  }
  function ph(t) {
    for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
    return this;
  }
  function mh(t) {
    for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
    return this;
  }
  function gh(t) {
    for (let e = 0; e < this.length; e += 1)
      this[e].style.transitionDuration = typeof t != "string" ? `${t}ms` : t;
    return this;
  }
  function vh(...t) {
    let [e, n, i, r] = t;
    typeof t[1] == "function" && (([e, i, r] = t), (n = void 0)), r || (r = !1);
    function s(c) {
      const u = c.target;
      if (!u) return;
      const f = c.target.dom7EventData || [];
      if ((f.indexOf(c) < 0 && f.unshift(c), F(u).is(n))) i.apply(u, f);
      else {
        const d = F(u).parents();
        for (let h = 0; h < d.length; h += 1) F(d[h]).is(n) && i.apply(d[h], f);
      }
    }
    function a(c) {
      const u = c && c.target ? c.target.dom7EventData || [] : [];
      u.indexOf(c) < 0 && u.unshift(c), i.apply(this, u);
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
            u.dom7LiveListeners[f].push({ listener: i, proxyListener: s }),
            u.addEventListener(f, s, r);
        }
      else
        for (l = 0; l < o.length; l += 1) {
          const f = o[l];
          u.dom7Listeners || (u.dom7Listeners = {}),
            u.dom7Listeners[f] || (u.dom7Listeners[f] = []),
            u.dom7Listeners[f].push({ listener: i, proxyListener: a }),
            u.addEventListener(f, a, r);
        }
    }
    return this;
  }
  function yh(...t) {
    let [e, n, i, r] = t;
    typeof t[1] == "function" && (([e, i, r] = t), (n = void 0)), r || (r = !1);
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
            (i && d.listener === i) ||
            (i &&
              d.listener &&
              d.listener.dom7proxy &&
              d.listener.dom7proxy === i)
              ? (c.removeEventListener(o, d.proxyListener, r), u.splice(f, 1))
              : i ||
                (c.removeEventListener(o, d.proxyListener, r), u.splice(f, 1));
          }
      }
    }
    return this;
  }
  function _h(...t) {
    const e = ge(),
      n = t[0].split(" "),
      i = t[1];
    for (let r = 0; r < n.length; r += 1) {
      const s = n[r];
      for (let a = 0; a < this.length; a += 1) {
        const o = this[a];
        if (e.CustomEvent) {
          const l = new e.CustomEvent(s, {
            detail: i,
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
  function bh(t) {
    const e = this;
    function n(i) {
      i.target === this && (t.call(this, i), e.off("transitionend", n));
    }
    return t && e.on("transitionend", n), this;
  }
  function xh(t) {
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
  function Sh(t) {
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
  function Th() {
    if (this.length > 0) {
      const t = ge(),
        e = Fe(),
        n = this[0],
        i = n.getBoundingClientRect(),
        r = e.body,
        s = n.clientTop || r.clientTop || 0,
        a = n.clientLeft || r.clientLeft || 0,
        o = n === t ? t.scrollY : n.scrollTop,
        l = n === t ? t.scrollX : n.scrollLeft;
      return { top: i.top + o - s, left: i.left + l - a };
    }
    return null;
  }
  function Eh() {
    const t = ge();
    return this[0] ? t.getComputedStyle(this[0], null) : {};
  }
  function wh(t, e) {
    const n = ge();
    let i;
    if (arguments.length === 1)
      if (typeof t == "string") {
        if (this[0])
          return n.getComputedStyle(this[0], null).getPropertyValue(t);
      } else {
        for (i = 0; i < this.length; i += 1)
          for (const r in t) this[i].style[r] = t[r];
        return this;
      }
    if (arguments.length === 2 && typeof t == "string") {
      for (i = 0; i < this.length; i += 1) this[i].style[t] = e;
      return this;
    }
    return this;
  }
  function Ch(t) {
    return t
      ? (this.forEach((e, n) => {
          t.apply(e, [e, n]);
        }),
        this)
      : this;
  }
  function Ph(t) {
    const e = pc(this, t);
    return F(e);
  }
  function kh(t) {
    if (typeof t == "undefined") return this[0] ? this[0].innerHTML : null;
    for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
    return this;
  }
  function Mh(t) {
    if (typeof t == "undefined")
      return this[0] ? this[0].textContent.trim() : null;
    for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
    return this;
  }
  function $h(t) {
    const e = ge(),
      n = Fe(),
      i = this[0];
    let r, s;
    if (!i || typeof t == "undefined") return !1;
    if (typeof t == "string") {
      if (i.matches) return i.matches(t);
      if (i.webkitMatchesSelector) return i.webkitMatchesSelector(t);
      if (i.msMatchesSelector) return i.msMatchesSelector(t);
      for (r = F(t), s = 0; s < r.length; s += 1) if (r[s] === i) return !0;
      return !1;
    }
    if (t === n) return i === n;
    if (t === e) return i === e;
    if (t.nodeType || t instanceof qn) {
      for (r = t.nodeType ? [t] : t, s = 0; s < r.length; s += 1)
        if (r[s] === i) return !0;
      return !1;
    }
    return !1;
  }
  function Oh() {
    let t = this[0],
      e;
    if (t) {
      for (e = 0; (t = t.previousSibling) !== null; )
        t.nodeType === 1 && (e += 1);
      return e;
    }
  }
  function Ah(t) {
    if (typeof t == "undefined") return this;
    const e = this.length;
    if (t > e - 1) return F([]);
    if (t < 0) {
      const n = e + t;
      return n < 0 ? F([]) : F([this[n]]);
    }
    return F([this[t]]);
  }
  function Lh(...t) {
    let e;
    const n = Fe();
    for (let i = 0; i < t.length; i += 1) {
      e = t[i];
      for (let r = 0; r < this.length; r += 1)
        if (typeof e == "string") {
          const s = n.createElement("div");
          for (s.innerHTML = e; s.firstChild; )
            this[r].appendChild(s.firstChild);
        } else if (e instanceof qn)
          for (let s = 0; s < e.length; s += 1) this[r].appendChild(e[s]);
        else this[r].appendChild(e);
    }
    return this;
  }
  function Ih(t) {
    const e = Fe();
    let n, i;
    for (n = 0; n < this.length; n += 1)
      if (typeof t == "string") {
        const r = e.createElement("div");
        for (r.innerHTML = t, i = r.childNodes.length - 1; i >= 0; i -= 1)
          this[n].insertBefore(r.childNodes[i], this[n].childNodes[0]);
      } else if (t instanceof qn)
        for (i = 0; i < t.length; i += 1)
          this[n].insertBefore(t[i], this[n].childNodes[0]);
      else this[n].insertBefore(t, this[n].childNodes[0]);
    return this;
  }
  function Dh(t) {
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
  function zh(t) {
    const e = [];
    let n = this[0];
    if (!n) return F([]);
    for (; n.nextElementSibling; ) {
      const i = n.nextElementSibling;
      t ? F(i).is(t) && e.push(i) : e.push(i), (n = i);
    }
    return F(e);
  }
  function Rh(t) {
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
  function Nh(t) {
    const e = [];
    let n = this[0];
    if (!n) return F([]);
    for (; n.previousElementSibling; ) {
      const i = n.previousElementSibling;
      t ? F(i).is(t) && e.push(i) : e.push(i), (n = i);
    }
    return F(e);
  }
  function Fh(t) {
    const e = [];
    for (let n = 0; n < this.length; n += 1)
      this[n].parentNode !== null &&
        (t
          ? F(this[n].parentNode).is(t) && e.push(this[n].parentNode)
          : e.push(this[n].parentNode));
    return F(e);
  }
  function Bh(t) {
    const e = [];
    for (let n = 0; n < this.length; n += 1) {
      let i = this[n].parentNode;
      for (; i; ) t ? F(i).is(t) && e.push(i) : e.push(i), (i = i.parentNode);
    }
    return F(e);
  }
  function qh(t) {
    let e = this;
    return typeof t == "undefined"
      ? F([])
      : (e.is(t) || (e = e.parents(t).eq(0)), e);
  }
  function Hh(t) {
    const e = [];
    for (let n = 0; n < this.length; n += 1) {
      const i = this[n].querySelectorAll(t);
      for (let r = 0; r < i.length; r += 1) e.push(i[r]);
    }
    return F(e);
  }
  function Vh(t) {
    const e = [];
    for (let n = 0; n < this.length; n += 1) {
      const i = this[n].children;
      for (let r = 0; r < i.length; r += 1)
        (!t || F(i[r]).is(t)) && e.push(i[r]);
    }
    return F(e);
  }
  function Wh() {
    for (let t = 0; t < this.length; t += 1)
      this[t].parentNode && this[t].parentNode.removeChild(this[t]);
    return this;
  }
  const mc = {
    addClass: ch,
    removeClass: uh,
    hasClass: dh,
    toggleClass: fh,
    attr: hh,
    removeAttr: ph,
    transform: mh,
    transition: gh,
    on: vh,
    off: yh,
    trigger: _h,
    transitionEnd: bh,
    outerWidth: xh,
    outerHeight: Sh,
    styles: Eh,
    offset: Th,
    css: wh,
    each: Ch,
    html: kh,
    text: Mh,
    is: $h,
    index: Oh,
    eq: Ah,
    append: Lh,
    prepend: Ih,
    next: Dh,
    nextAll: zh,
    prev: Rh,
    prevAll: Nh,
    parent: Fh,
    parents: Bh,
    closest: qh,
    find: Hh,
    children: Vh,
    filter: Ph,
    remove: Wh,
  };
  Object.keys(mc).forEach((t) => {
    Object.defineProperty(F.fn, t, { value: mc[t], writable: !0 });
  });
  function Xh(t) {
    const e = t;
    Object.keys(e).forEach((n) => {
      try {
        e[n] = null;
      } catch (i) {}
      try {
        delete e[n];
      } catch (i) {}
    });
  }
  function Hn(t, e = 0) {
    return setTimeout(t, e);
  }
  function $t() {
    return Date.now();
  }
  function Yh(t) {
    const e = ge();
    let n;
    return (
      e.getComputedStyle && (n = e.getComputedStyle(t, null)),
      !n && t.currentStyle && (n = t.currentStyle),
      n || (n = t.style),
      n
    );
  }
  function Qa(t, e = "x") {
    const n = ge();
    let i, r, s;
    const a = Yh(t);
    return (
      n.WebKitCSSMatrix
        ? ((r = a.transform || a.webkitTransform),
          r.split(",").length > 6 &&
            (r = r
              .split(", ")
              .map((o) => o.replace(",", "."))
              .join(", ")),
          (s = new n.WebKitCSSMatrix(r === "none" ? "" : r)))
        : ((s =
            a.MozTransform ||
            a.OTransform ||
            a.MsTransform ||
            a.msTransform ||
            a.transform ||
            a
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = s.toString().split(","))),
      e === "x" &&
        (n.WebKitCSSMatrix
          ? (r = s.m41)
          : i.length === 16
          ? (r = parseFloat(i[12]))
          : (r = parseFloat(i[4]))),
      e === "y" &&
        (n.WebKitCSSMatrix
          ? (r = s.m42)
          : i.length === 16
          ? (r = parseFloat(i[13]))
          : (r = parseFloat(i[5]))),
      r || 0
    );
  }
  function zr(t) {
    return (
      typeof t == "object" &&
      t !== null &&
      t.constructor &&
      Object.prototype.toString.call(t).slice(8, -1) === "Object"
    );
  }
  function Gh(t) {
    return typeof window != "undefined" &&
      typeof window.HTMLElement != "undefined"
      ? t instanceof HTMLElement
      : t && (t.nodeType === 1 || t.nodeType === 11);
  }
  function Ot(...t) {
    const e = Object(t[0]),
      n = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < t.length; i += 1) {
      const r = t[i];
      if (r != null && !Gh(r)) {
        const s = Object.keys(Object(r)).filter((a) => n.indexOf(a) < 0);
        for (let a = 0, o = s.length; a < o; a += 1) {
          const l = s[a],
            c = Object.getOwnPropertyDescriptor(r, l);
          c !== void 0 &&
            c.enumerable &&
            (zr(e[l]) && zr(r[l])
              ? r[l].__swiper__
                ? (e[l] = r[l])
                : Ot(e[l], r[l])
              : !zr(e[l]) && zr(r[l])
              ? ((e[l] = {}), r[l].__swiper__ ? (e[l] = r[l]) : Ot(e[l], r[l]))
              : (e[l] = r[l]));
        }
      }
    }
    return e;
  }
  function Rr(t, e, n) {
    t.style.setProperty(e, n);
  }
  function gc({ swiper: t, targetPosition: e, side: n }) {
    const i = ge(),
      r = -t.translate;
    let s = null,
      a;
    const o = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(t.cssModeFrameID);
    const l = e > r ? "next" : "prev",
      c = (f, d) => (l === "next" && f >= d) || (l === "prev" && f <= d),
      u = () => {
        (a = new Date().getTime()), s === null && (s = a);
        const f = Math.max(Math.min((a - s) / o, 1), 0),
          d = 0.5 - Math.cos(f * Math.PI) / 2;
        let h = r + d * (e - r);
        if ((c(h, e) && (h = e), t.wrapperEl.scrollTo({ [n]: h }), c(h, e))) {
          (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [n]: h });
            }),
            i.cancelAnimationFrame(t.cssModeFrameID);
          return;
        }
        t.cssModeFrameID = i.requestAnimationFrame(u);
      };
    u();
  }
  let Ja;
  function jh() {
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
        let i = !1;
        try {
          const r = Object.defineProperty({}, "passive", {
            get() {
              i = !0;
            },
          });
          t.addEventListener("testPassiveListener", null, r);
        } catch (r) {}
        return i;
      })(),
      gestures: (function () {
        return "ongesturestart" in t;
      })(),
    };
  }
  function vc() {
    return Ja || (Ja = jh()), Ja;
  }
  let eo;
  function Uh({ userAgent: t } = {}) {
    const e = vc(),
      n = ge(),
      i = n.navigator.platform,
      r = t || n.navigator.userAgent,
      s = { ios: !1, android: !1 },
      a = n.screen.width,
      o = n.screen.height,
      l = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = r.match(/(iPad).*OS\s([\d_]+)/);
    const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
      f = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      d = i === "Win32";
    let h = i === "MacIntel";
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
        ((c = r.match(/(Version)\/([\d.]+)/)),
        c || (c = [0, 1, "13_0_0"]),
        (h = !1)),
      l && !d && ((s.os = "android"), (s.android = !0)),
      (c || f || u) && ((s.os = "ios"), (s.ios = !0)),
      s
    );
  }
  function Kh(t = {}) {
    return eo || (eo = Uh(t)), eo;
  }
  let to;
  function Zh() {
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
  function Qh() {
    return to || (to = Zh()), to;
  }
  function Jh({ swiper: t, on: e, emit: n }) {
    const i = ge();
    let r = null,
      s = null;
    const a = () => {
        !t || t.destroyed || !t.initialized || (n("beforeResize"), n("resize"));
      },
      o = () => {
        !t ||
          t.destroyed ||
          !t.initialized ||
          ((r = new ResizeObserver((u) => {
            s = i.requestAnimationFrame(() => {
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
          r.observe(t.el));
      },
      l = () => {
        s && i.cancelAnimationFrame(s),
          r && r.unobserve && t.el && (r.unobserve(t.el), (r = null));
      },
      c = () => {
        !t || t.destroyed || !t.initialized || n("orientationchange");
      };
    e("init", () => {
      if (t.params.resizeObserver && typeof i.ResizeObserver != "undefined") {
        o();
        return;
      }
      i.addEventListener("resize", a),
        i.addEventListener("orientationchange", c);
    }),
      e("destroy", () => {
        l(),
          i.removeEventListener("resize", a),
          i.removeEventListener("orientationchange", c);
      });
  }
  function ep({ swiper: t, extendParams: e, on: n, emit: i }) {
    const r = [],
      s = ge(),
      a = (c, u = {}) => {
        const f = s.MutationObserver || s.WebkitMutationObserver,
          d = new f((h) => {
            if (h.length === 1) {
              i("observerUpdate", h[0]);
              return;
            }
            const m = function () {
              i("observerUpdate", h[0]);
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
          r.push(d);
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
        r.forEach((c) => {
          c.disconnect();
        }),
          r.splice(0, r.length);
      };
    e({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      n("init", o),
      n("destroy", l);
  }
  const tp = {
    on(t, e, n) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
      const r = n ? "unshift" : "push";
      return (
        t.split(" ").forEach((s) => {
          i.eventsListeners[s] || (i.eventsListeners[s] = []),
            i.eventsListeners[s][r](e);
        }),
        i
      );
    },
    once(t, e, n) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
      function r(...s) {
        i.off(t, r), r.__emitterProxy && delete r.__emitterProxy, e.apply(i, s);
      }
      return (r.__emitterProxy = e), i.on(t, r, n);
    },
    onAny(t, e) {
      const n = this;
      if (!n.eventsListeners || n.destroyed || typeof t != "function") return n;
      const i = e ? "unshift" : "push";
      return (
        n.eventsAnyListeners.indexOf(t) < 0 && n.eventsAnyListeners[i](t), n
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
          t.split(" ").forEach((i) => {
            typeof e == "undefined"
              ? (n.eventsListeners[i] = [])
              : n.eventsListeners[i] &&
                n.eventsListeners[i].forEach((r, s) => {
                  (r === e || (r.__emitterProxy && r.__emitterProxy === e)) &&
                    n.eventsListeners[i].splice(s, 1);
                });
          }),
        n
      );
    },
    emit(...t) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
      let n, i, r;
      return (
        typeof t[0] == "string" || Array.isArray(t[0])
          ? ((n = t[0]), (i = t.slice(1, t.length)), (r = e))
          : ((n = t[0].events), (i = t[0].data), (r = t[0].context || e)),
        i.unshift(r),
        (Array.isArray(n) ? n : n.split(" ")).forEach((a) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((o) => {
              o.apply(r, [a, ...i]);
            }),
            e.eventsListeners &&
              e.eventsListeners[a] &&
              e.eventsListeners[a].forEach((o) => {
                o.apply(r, i);
              });
        }),
        e
      );
    },
  };
  function np() {
    const t = this;
    let e, n;
    const i = t.$el;
    typeof t.params.width != "undefined" && t.params.width !== null
      ? (e = t.params.width)
      : (e = i[0].clientWidth),
      typeof t.params.height != "undefined" && t.params.height !== null
        ? (n = t.params.height)
        : (n = i[0].clientHeight),
      !((e === 0 && t.isHorizontal()) || (n === 0 && t.isVertical())) &&
        ((e =
          e -
          parseInt(i.css("padding-left") || 0, 10) -
          parseInt(i.css("padding-right") || 0, 10)),
        (n =
          n -
          parseInt(i.css("padding-top") || 0, 10) -
          parseInt(i.css("padding-bottom") || 0, 10)),
        Number.isNaN(e) && (e = 0),
        Number.isNaN(n) && (n = 0),
        Object.assign(t, {
          width: e,
          height: n,
          size: t.isHorizontal() ? e : n,
        }));
  }
  function ip() {
    const t = this;
    function e(E) {
      return t.isHorizontal()
        ? E
        : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[E];
    }
    function n(E, M) {
      return parseFloat(E.getPropertyValue(e(M)) || 0);
    }
    const i = t.params,
      { $wrapperEl: r, size: s, rtlTranslate: a, wrongRTL: o } = t,
      l = t.virtual && i.virtual.enabled,
      c = l ? t.virtual.slides.length : t.slides.length,
      u = r.children(`.${t.params.slideClass}`),
      f = l ? t.virtual.slides.length : u.length;
    let d = [];
    const h = [],
      m = [];
    let p = i.slidesOffsetBefore;
    typeof p == "function" && (p = i.slidesOffsetBefore.call(t));
    let g = i.slidesOffsetAfter;
    typeof g == "function" && (g = i.slidesOffsetAfter.call(t));
    const y = t.snapGrid.length,
      v = t.slidesGrid.length;
    let _ = i.spaceBetween,
      x = -p,
      S = 0,
      C = 0;
    if (typeof s == "undefined") return;
    typeof _ == "string" &&
      _.indexOf("%") >= 0 &&
      (_ = (parseFloat(_.replace("%", "")) / 100) * s),
      (t.virtualSize = -_),
      a
        ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" })
        : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
      i.centeredSlides &&
        i.cssMode &&
        (Rr(t.wrapperEl, "--swiper-centered-offset-before", ""),
        Rr(t.wrapperEl, "--swiper-centered-offset-after", ""));
    const w = i.grid && i.grid.rows > 1 && t.grid;
    w && t.grid.initSlides(f);
    let P;
    const A =
      i.slidesPerView === "auto" &&
      i.breakpoints &&
      Object.keys(i.breakpoints).filter(
        (E) => typeof i.breakpoints[E].slidesPerView != "undefined"
      ).length > 0;
    for (let E = 0; E < f; E += 1) {
      P = 0;
      const M = u.eq(E);
      if ((w && t.grid.updateSlide(E, M, f, e), M.css("display") !== "none")) {
        if (i.slidesPerView === "auto") {
          A && (u[E].style[e("width")] = "");
          const b = getComputedStyle(M[0]),
            T = M[0].style.transform,
            O = M[0].style.webkitTransform;
          if (
            (T && (M[0].style.transform = "none"),
            O && (M[0].style.webkitTransform = "none"),
            i.roundLengths)
          )
            P = t.isHorizontal() ? M.outerWidth(!0) : M.outerHeight(!0);
          else {
            const L = n(b, "width"),
              k = n(b, "padding-left"),
              I = n(b, "padding-right"),
              D = n(b, "margin-left"),
              N = n(b, "margin-right"),
              $ = b.getPropertyValue("box-sizing");
            if ($ && $ === "border-box") P = L + D + N;
            else {
              const { clientWidth: H, offsetWidth: Y } = M[0];
              P = L + k + I + D + N + (Y - H);
            }
          }
          T && (M[0].style.transform = T),
            O && (M[0].style.webkitTransform = O),
            i.roundLengths && (P = Math.floor(P));
        } else
          (P = (s - (i.slidesPerView - 1) * _) / i.slidesPerView),
            i.roundLengths && (P = Math.floor(P)),
            u[E] && (u[E].style[e("width")] = `${P}px`);
        u[E] && (u[E].swiperSlideSize = P),
          m.push(P),
          i.centeredSlides
            ? ((x = x + P / 2 + S / 2 + _),
              S === 0 && E !== 0 && (x = x - s / 2 - _),
              E === 0 && (x = x - s / 2 - _),
              Math.abs(x) < 1 / 1e3 && (x = 0),
              i.roundLengths && (x = Math.floor(x)),
              C % i.slidesPerGroup === 0 && d.push(x),
              h.push(x))
            : (i.roundLengths && (x = Math.floor(x)),
              (C - Math.min(t.params.slidesPerGroupSkip, C)) %
                t.params.slidesPerGroup ===
                0 && d.push(x),
              h.push(x),
              (x = x + P + _)),
          (t.virtualSize += P + _),
          (S = P),
          (C += 1);
      }
    }
    if (
      ((t.virtualSize = Math.max(t.virtualSize, s) + g),
      a &&
        o &&
        (i.effect === "slide" || i.effect === "coverflow") &&
        r.css({ width: `${t.virtualSize + i.spaceBetween}px` }),
      i.setWrapperSize &&
        r.css({ [e("width")]: `${t.virtualSize + i.spaceBetween}px` }),
      w && t.grid.updateWrapperSize(P, d, e),
      !i.centeredSlides)
    ) {
      const E = [];
      for (let M = 0; M < d.length; M += 1) {
        let b = d[M];
        i.roundLengths && (b = Math.floor(b)),
          d[M] <= t.virtualSize - s && E.push(b);
      }
      (d = E),
        Math.floor(t.virtualSize - s) - Math.floor(d[d.length - 1]) > 1 &&
          d.push(t.virtualSize - s);
    }
    if ((d.length === 0 && (d = [0]), i.spaceBetween !== 0)) {
      const E = t.isHorizontal() && a ? "marginLeft" : e("marginRight");
      u.filter((M, b) => (i.cssMode ? b !== u.length - 1 : !0)).css({
        [E]: `${_}px`,
      });
    }
    if (i.centeredSlides && i.centeredSlidesBounds) {
      let E = 0;
      m.forEach((b) => {
        E += b + (i.spaceBetween ? i.spaceBetween : 0);
      }),
        (E -= i.spaceBetween);
      const M = E - s;
      d = d.map((b) => (b < 0 ? -p : b > M ? M + g : b));
    }
    if (i.centerInsufficientSlides) {
      let E = 0;
      if (
        (m.forEach((M) => {
          E += M + (i.spaceBetween ? i.spaceBetween : 0);
        }),
        (E -= i.spaceBetween),
        E < s)
      ) {
        const M = (s - E) / 2;
        d.forEach((b, T) => {
          d[T] = b - M;
        }),
          h.forEach((b, T) => {
            h[T] = b + M;
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
      i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
    ) {
      Rr(t.wrapperEl, "--swiper-centered-offset-before", `${-d[0]}px`),
        Rr(
          t.wrapperEl,
          "--swiper-centered-offset-after",
          `${t.size / 2 - m[m.length - 1] / 2}px`
        );
      const E = -t.snapGrid[0],
        M = -t.slidesGrid[0];
      (t.snapGrid = t.snapGrid.map((b) => b + E)),
        (t.slidesGrid = t.slidesGrid.map((b) => b + M));
    }
    if (
      (f !== c && t.emit("slidesLengthChange"),
      d.length !== y &&
        (t.params.watchOverflow && t.checkOverflow(),
        t.emit("snapGridLengthChange")),
      h.length !== v && t.emit("slidesGridLengthChange"),
      i.watchSlidesProgress && t.updateSlidesOffset(),
      !l && !i.cssMode && (i.effect === "slide" || i.effect === "fade"))
    ) {
      const E = `${i.containerModifierClass}backface-hidden`,
        M = t.$el.hasClass(E);
      f <= i.maxBackfaceHiddenSlides
        ? M || t.$el.addClass(E)
        : M && t.$el.removeClass(E);
    }
  }
  function rp(t) {
    const e = this,
      n = [],
      i = e.virtual && e.params.virtual.enabled;
    let r = 0,
      s;
    typeof t == "number"
      ? e.setTransition(t)
      : t === !0 && e.setTransition(e.params.speed);
    const a = (o) =>
      i
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
          if (o > e.slides.length && !i) break;
          n.push(a(o));
        }
    else n.push(a(e.activeIndex));
    for (s = 0; s < n.length; s += 1)
      if (typeof n[s] != "undefined") {
        const o = n[s].offsetHeight;
        r = o > r ? o : r;
      }
    (r || r === 0) && e.$wrapperEl.css("height", `${r}px`);
  }
  function sp() {
    const t = this,
      e = t.slides;
    for (let n = 0; n < e.length; n += 1)
      e[n].swiperSlideOffset = t.isHorizontal()
        ? e[n].offsetLeft
        : e[n].offsetTop;
  }
  function ap(t = (this && this.translate) || 0) {
    const e = this,
      n = e.params,
      { slides: i, rtlTranslate: r, snapGrid: s } = e;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset == "undefined" && e.updateSlidesOffset();
    let a = -t;
    r && (a = t),
      i.removeClass(n.slideVisibleClass),
      (e.visibleSlidesIndexes = []),
      (e.visibleSlides = []);
    for (let o = 0; o < i.length; o += 1) {
      const l = i[o];
      let c = l.swiperSlideOffset;
      n.cssMode && n.centeredSlides && (c -= i[0].swiperSlideOffset);
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
        i.eq(o).addClass(n.slideVisibleClass)),
        (l.progress = r ? -u : u),
        (l.originalProgress = r ? -f : f);
    }
    e.visibleSlides = F(e.visibleSlides);
  }
  function op(t) {
    const e = this;
    if (typeof t == "undefined") {
      const c = e.rtlTranslate ? -1 : 1;
      t = (e && e.translate && e.translate * c) || 0;
    }
    const n = e.params,
      i = e.maxTranslate() - e.minTranslate();
    let { progress: r, isBeginning: s, isEnd: a } = e;
    const o = s,
      l = a;
    i === 0
      ? ((r = 0), (s = !0), (a = !0))
      : ((r = (t - e.minTranslate()) / i), (s = r <= 0), (a = r >= 1)),
      Object.assign(e, { progress: r, isBeginning: s, isEnd: a }),
      (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
        e.updateSlidesProgress(t),
      s && !o && e.emit("reachBeginning toEdge"),
      a && !l && e.emit("reachEnd toEdge"),
      ((o && !s) || (l && !a)) && e.emit("fromEdge"),
      e.emit("progress", r);
  }
  function lp() {
    const t = this,
      { slides: e, params: n, $wrapperEl: i, activeIndex: r, realIndex: s } = t,
      a = t.virtual && n.virtual.enabled;
    e.removeClass(
      `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
    );
    let o;
    a
      ? (o = t.$wrapperEl.find(
          `.${n.slideClass}[data-swiper-slide-index="${r}"]`
        ))
      : (o = e.eq(r)),
      o.addClass(n.slideActiveClass),
      n.loop &&
        (o.hasClass(n.slideDuplicateClass)
          ? i
              .children(
                `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
              )
              .addClass(n.slideDuplicateActiveClass)
          : i
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
          ? i
              .children(
                `.${n.slideClass}:not(.${
                  n.slideDuplicateClass
                })[data-swiper-slide-index="${l.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(n.slideDuplicateNextClass)
          : i
              .children(
                `.${n.slideClass}.${
                  n.slideDuplicateClass
                }[data-swiper-slide-index="${l.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(n.slideDuplicateNextClass),
        c.hasClass(n.slideDuplicateClass)
          ? i
              .children(
                `.${n.slideClass}:not(.${
                  n.slideDuplicateClass
                })[data-swiper-slide-index="${c.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(n.slideDuplicatePrevClass)
          : i
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
  function cp(t) {
    const e = this,
      n = e.rtlTranslate ? e.translate : -e.translate,
      {
        slidesGrid: i,
        snapGrid: r,
        params: s,
        activeIndex: a,
        realIndex: o,
        snapIndex: l,
      } = e;
    let c = t,
      u;
    if (typeof c == "undefined") {
      for (let d = 0; d < i.length; d += 1)
        typeof i[d + 1] != "undefined"
          ? n >= i[d] && n < i[d + 1] - (i[d + 1] - i[d]) / 2
            ? (c = d)
            : n >= i[d] && n < i[d + 1] && (c = d + 1)
          : n >= i[d] && (c = d);
      s.normalizeSlideIndex && (c < 0 || typeof c == "undefined") && (c = 0);
    }
    if (r.indexOf(n) >= 0) u = r.indexOf(n);
    else {
      const d = Math.min(s.slidesPerGroupSkip, c);
      u = d + Math.floor((c - d) / s.slidesPerGroup);
    }
    if ((u >= r.length && (u = r.length - 1), c === a)) {
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
  function up(t) {
    const e = this,
      n = e.params,
      i = F(t).closest(`.${n.slideClass}`)[0];
    let r = !1,
      s;
    if (i) {
      for (let a = 0; a < e.slides.length; a += 1)
        if (e.slides[a] === i) {
          (r = !0), (s = a);
          break;
        }
    }
    if (i && r)
      (e.clickedSlide = i),
        e.virtual && e.params.virtual.enabled
          ? (e.clickedIndex = parseInt(
              F(i).attr("data-swiper-slide-index"),
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
  const fp = {
    updateSize: np,
    updateSlides: ip,
    updateAutoHeight: rp,
    updateSlidesOffset: sp,
    updateSlidesProgress: ap,
    updateProgress: op,
    updateSlidesClasses: lp,
    updateActiveIndex: cp,
    updateClickedSlide: up,
  };
  function dp(t = this.isHorizontal() ? "x" : "y") {
    const e = this,
      { params: n, rtlTranslate: i, translate: r, $wrapperEl: s } = e;
    if (n.virtualTranslate) return i ? -r : r;
    if (n.cssMode) return r;
    let a = Qa(s[0], t);
    return i && (a = -a), a || 0;
  }
  function hp(t, e) {
    const n = this,
      {
        rtlTranslate: i,
        params: r,
        $wrapperEl: s,
        wrapperEl: a,
        progress: o,
      } = n;
    let l = 0,
      c = 0;
    const u = 0;
    n.isHorizontal() ? (l = i ? -t : t) : (c = t),
      r.roundLengths && ((l = Math.floor(l)), (c = Math.floor(c))),
      r.cssMode
        ? (a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
            ? -l
            : -c)
        : r.virtualTranslate ||
          s.transform(`translate3d(${l}px, ${c}px, ${u}px)`),
      (n.previousTranslate = n.translate),
      (n.translate = n.isHorizontal() ? l : c);
    let f;
    const d = n.maxTranslate() - n.minTranslate();
    d === 0 ? (f = 0) : (f = (t - n.minTranslate()) / d),
      f !== o && n.updateProgress(t),
      n.emit("setTranslate", n.translate, e);
  }
  function pp() {
    return -this.snapGrid[0];
  }
  function mp() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function gp(t = 0, e = this.params.speed, n = !0, i = !0, r) {
    const s = this,
      { params: a, wrapperEl: o } = s;
    if (s.animating && a.preventInteractionOnTransition) return !1;
    const l = s.minTranslate(),
      c = s.maxTranslate();
    let u;
    if (
      (i && t > l ? (u = l) : i && t < c ? (u = c) : (u = t),
      s.updateProgress(u),
      a.cssMode)
    ) {
      const f = s.isHorizontal();
      if (e === 0) o[f ? "scrollLeft" : "scrollTop"] = -u;
      else {
        if (!s.support.smoothScroll)
          return (
            gc({ swiper: s, targetPosition: -u, side: f ? "left" : "top" }), !0
          );
        o.scrollTo({ [f ? "left" : "top"]: -u, behavior: "smooth" });
      }
      return !0;
    }
    return (
      e === 0
        ? (s.setTransition(0),
          s.setTranslate(u),
          n && (s.emit("beforeTransitionStart", e, r), s.emit("transitionEnd")))
        : (s.setTransition(e),
          s.setTranslate(u),
          n &&
            (s.emit("beforeTransitionStart", e, r), s.emit("transitionStart")),
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
  const vp = {
    getTranslate: dp,
    setTranslate: hp,
    minTranslate: pp,
    maxTranslate: mp,
    translateTo: gp,
  };
  function yp(t, e) {
    const n = this;
    n.params.cssMode || n.$wrapperEl.transition(t),
      n.emit("setTransition", t, e);
  }
  function yc({ swiper: t, runCallbacks: e, direction: n, step: i }) {
    const { activeIndex: r, previousIndex: s } = t;
    let a = n;
    if (
      (a || (r > s ? (a = "next") : r < s ? (a = "prev") : (a = "reset")),
      t.emit(`transition${i}`),
      e && r !== s)
    ) {
      if (a === "reset") {
        t.emit(`slideResetTransition${i}`);
        return;
      }
      t.emit(`slideChangeTransition${i}`),
        a === "next"
          ? t.emit(`slideNextTransition${i}`)
          : t.emit(`slidePrevTransition${i}`);
    }
  }
  function _p(t = !0, e) {
    const n = this,
      { params: i } = n;
    i.cssMode ||
      (i.autoHeight && n.updateAutoHeight(),
      yc({ swiper: n, runCallbacks: t, direction: e, step: "Start" }));
  }
  function bp(t = !0, e) {
    const n = this,
      { params: i } = n;
    (n.animating = !1),
      !i.cssMode &&
        (n.setTransition(0),
        yc({ swiper: n, runCallbacks: t, direction: e, step: "End" }));
  }
  const xp = { setTransition: yp, transitionStart: _p, transitionEnd: bp };
  function Sp(t = 0, e = this.params.speed, n = !0, i, r) {
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
    if ((s.animating && o.preventInteractionOnTransition) || (!m && !i && !r))
      return !1;
    const p = Math.min(s.params.slidesPerGroupSkip, a);
    let g = p + Math.floor((a - p) / s.params.slidesPerGroup);
    g >= l.length && (g = l.length - 1);
    const y = -l[g];
    if (o.normalizeSlideIndex)
      for (let _ = 0; _ < c.length; _ += 1) {
        const x = -Math.floor(y * 100),
          S = Math.floor(c[_] * 100),
          C = Math.floor(c[_ + 1] * 100);
        typeof c[_ + 1] != "undefined"
          ? x >= S && x < C - (C - S) / 2
            ? (a = _)
            : x >= S && x < C && (a = _ + 1)
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
            gc({ swiper: s, targetPosition: x, side: _ ? "left" : "top" }), !0
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
      s.emit("beforeTransitionStart", e, i),
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
  function Tp(t = 0, e = this.params.speed, n = !0, i) {
    if (typeof t == "string") {
      const a = parseInt(t, 10);
      if (!isFinite(a))
        throw new Error(
          `The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`
        );
      t = a;
    }
    const r = this;
    let s = t;
    return r.params.loop && (s += r.loopedSlides), r.slideTo(s, e, n, i);
  }
  function Ep(t = this.params.speed, e = !0, n) {
    const i = this,
      { animating: r, enabled: s, params: a } = i;
    if (!s) return i;
    let o = a.slidesPerGroup;
    a.slidesPerView === "auto" &&
      a.slidesPerGroup === 1 &&
      a.slidesPerGroupAuto &&
      (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const l = i.activeIndex < a.slidesPerGroupSkip ? 1 : o;
    if (a.loop) {
      if (r && a.loopPreventsSlide) return !1;
      i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
    }
    return a.rewind && i.isEnd
      ? i.slideTo(0, t, e, n)
      : i.slideTo(i.activeIndex + l, t, e, n);
  }
  function wp(t = this.params.speed, e = !0, n) {
    const i = this,
      {
        params: r,
        animating: s,
        snapGrid: a,
        slidesGrid: o,
        rtlTranslate: l,
        enabled: c,
      } = i;
    if (!c) return i;
    if (r.loop) {
      if (s && r.loopPreventsSlide) return !1;
      i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
    }
    const u = l ? i.translate : -i.translate;
    function f(g) {
      return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g);
    }
    const d = f(u),
      h = a.map((g) => f(g));
    let m = a[h.indexOf(d) - 1];
    if (typeof m == "undefined" && r.cssMode) {
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
        p < 0 && (p = i.activeIndex - 1),
        r.slidesPerView === "auto" &&
          r.slidesPerGroup === 1 &&
          r.slidesPerGroupAuto &&
          ((p = p - i.slidesPerViewDynamic("previous", !0) + 1),
          (p = Math.max(p, 0)))),
      r.rewind && i.isBeginning)
    ) {
      const g =
        i.params.virtual && i.params.virtual.enabled && i.virtual
          ? i.virtual.slides.length - 1
          : i.slides.length - 1;
      return i.slideTo(g, t, e, n);
    }
    return i.slideTo(p, t, e, n);
  }
  function Cp(t = this.params.speed, e = !0, n) {
    const i = this;
    return i.slideTo(i.activeIndex, t, e, n);
  }
  function Pp(t = this.params.speed, e = !0, n, i = 0.5) {
    const r = this;
    let s = r.activeIndex;
    const a = Math.min(r.params.slidesPerGroupSkip, s),
      o = a + Math.floor((s - a) / r.params.slidesPerGroup),
      l = r.rtlTranslate ? r.translate : -r.translate;
    if (l >= r.snapGrid[o]) {
      const c = r.snapGrid[o],
        u = r.snapGrid[o + 1];
      l - c > (u - c) * i && (s += r.params.slidesPerGroup);
    } else {
      const c = r.snapGrid[o - 1],
        u = r.snapGrid[o];
      l - c <= (u - c) * i && (s -= r.params.slidesPerGroup);
    }
    return (
      (s = Math.max(s, 0)),
      (s = Math.min(s, r.slidesGrid.length - 1)),
      r.slideTo(s, t, e, n)
    );
  }
  function kp() {
    const t = this,
      { params: e, $wrapperEl: n } = t,
      i =
        e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
    let r = t.clickedIndex,
      s;
    if (e.loop) {
      if (t.animating) return;
      (s = parseInt(F(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
        e.centeredSlides
          ? r < t.loopedSlides - i / 2 ||
            r > t.slides.length - t.loopedSlides + i / 2
            ? (t.loopFix(),
              (r = n
                .children(
                  `.${e.slideClass}[data-swiper-slide-index="${s}"]:not(.${e.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              Hn(() => {
                t.slideTo(r);
              }))
            : t.slideTo(r)
          : r > t.slides.length - i
          ? (t.loopFix(),
            (r = n
              .children(
                `.${e.slideClass}[data-swiper-slide-index="${s}"]:not(.${e.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            Hn(() => {
              t.slideTo(r);
            }))
          : t.slideTo(r);
    } else t.slideTo(r);
  }
  const Mp = {
    slideTo: Sp,
    slideToLoop: Tp,
    slideNext: Ep,
    slidePrev: wp,
    slideReset: Cp,
    slideToClosest: Pp,
    slideToClickedSlide: kp,
  };
  function $p() {
    const t = this,
      e = Fe(),
      { params: n, $wrapperEl: i } = t,
      r = i.children().length > 0 ? F(i.children()[0].parentNode) : i;
    r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
    let s = r.children(`.${n.slideClass}`);
    if (n.loopFillGroupWithBlank) {
      const l = n.slidesPerGroup - (s.length % n.slidesPerGroup);
      if (l !== n.slidesPerGroup) {
        for (let c = 0; c < l; c += 1) {
          const u = F(e.createElement("div")).addClass(
            `${n.slideClass} ${n.slideBlankClass}`
          );
          r.append(u);
        }
        s = r.children(`.${n.slideClass}`);
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
      r.append(F(o[l].cloneNode(!0)).addClass(n.slideDuplicateClass));
    for (let l = a.length - 1; l >= 0; l -= 1)
      r.prepend(F(a[l].cloneNode(!0)).addClass(n.slideDuplicateClass));
  }
  function Op() {
    const t = this;
    t.emit("beforeLoopFix");
    const {
      activeIndex: e,
      slides: n,
      loopedSlides: i,
      allowSlidePrev: r,
      allowSlideNext: s,
      snapGrid: a,
      rtlTranslate: o,
    } = t;
    let l;
    (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
    const u = -a[e] - t.getTranslate();
    e < i
      ? ((l = n.length - i * 3 + e),
        (l += i),
        t.slideTo(l, 0, !1, !0) &&
          u !== 0 &&
          t.setTranslate((o ? -t.translate : t.translate) - u))
      : e >= n.length - i &&
        ((l = -n.length + e + i),
        (l += i),
        t.slideTo(l, 0, !1, !0) &&
          u !== 0 &&
          t.setTranslate((o ? -t.translate : t.translate) - u)),
      (t.allowSlidePrev = r),
      (t.allowSlideNext = s),
      t.emit("loopFix");
  }
  function Ap() {
    const t = this,
      { $wrapperEl: e, params: n, slides: i } = t;
    e
      .children(
        `.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`
      )
      .remove(),
      i.removeAttr("data-swiper-slide-index");
  }
  const Lp = { loopCreate: $p, loopFix: Op, loopDestroy: Ap };
  function Ip(t) {
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
  function Dp() {
    const t = this;
    t.support.touch ||
      (t.params.watchOverflow && t.isLocked) ||
      t.params.cssMode ||
      (t[
        t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = "");
  }
  const zp = { setGrabCursor: Ip, unsetGrabCursor: Dp };
  function Rp(t, e = this) {
    function n(i) {
      if (!i || i === Fe() || i === ge()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const r = i.closest(t);
      return !r && !i.getRootNode ? null : r || n(i.getRootNode().host);
    }
    return n(e);
  }
  function Np(t) {
    const e = this,
      n = Fe(),
      i = ge(),
      r = e.touchEventsData,
      { params: s, touches: a, enabled: o } = e;
    if (!o || (e.animating && s.preventInteractionOnTransition)) return;
    !e.animating && s.cssMode && s.loop && e.loopFix();
    let l = t;
    l.originalEvent && (l = l.originalEvent);
    let c = F(l.target);
    if (
      (s.touchEventsTarget === "wrapper" && !c.closest(e.wrapperEl).length) ||
      ((r.isTouchEvent = l.type === "touchstart"),
      !r.isTouchEvent && "which" in l && l.which === 3) ||
      (!r.isTouchEvent && "button" in l && l.button > 0) ||
      (r.isTouched && r.isMoved)
    )
      return;
    const u = !!s.noSwipingClass && s.noSwipingClass !== "",
      f = t.composedPath ? t.composedPath() : t.path;
    u && l.target && l.target.shadowRoot && f && (c = F(f[0]));
    const d = s.noSwipingSelector
        ? s.noSwipingSelector
        : `.${s.noSwipingClass}`,
      h = !!(l.target && l.target.shadowRoot);
    if (s.noSwiping && (h ? Rp(d, c[0]) : c.closest(d)[0])) {
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
    if (g && (m <= y || m >= i.innerWidth - y))
      if (g === "prevent") t.preventDefault();
      else return;
    if (
      (Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (a.startX = m),
      (a.startY = p),
      (r.touchStartTime = $t()),
      (e.allowClick = !0),
      e.updateSize(),
      (e.swipeDirection = void 0),
      s.threshold > 0 && (r.allowThresholdMove = !1),
      l.type !== "touchstart")
    ) {
      let v = !0;
      c.is(r.focusableElements) &&
        ((v = !1), c[0].nodeName === "SELECT" && (r.isTouched = !1)),
        n.activeElement &&
          F(n.activeElement).is(r.focusableElements) &&
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
  function Fp(t) {
    const e = Fe(),
      n = this,
      i = n.touchEventsData,
      { params: r, touches: s, rtlTranslate: a, enabled: o } = n;
    if (!o) return;
    let l = t;
    if ((l.originalEvent && (l = l.originalEvent), !i.isTouched)) {
      i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", l);
      return;
    }
    if (i.isTouchEvent && l.type !== "touchmove") return;
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
      F(l.target).is(i.focusableElements) || (n.allowClick = !1),
        i.isTouched &&
          (Object.assign(s, { startX: u, startY: f, currentX: u, currentY: f }),
          (i.touchStartTime = $t()));
      return;
    }
    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
      if (n.isVertical()) {
        if (
          (f < s.startY && n.translate <= n.maxTranslate()) ||
          (f > s.startY && n.translate >= n.minTranslate())
        ) {
          (i.isTouched = !1), (i.isMoved = !1);
          return;
        }
      } else if (
        (u < s.startX && n.translate <= n.maxTranslate()) ||
        (u > s.startX && n.translate >= n.minTranslate())
      )
        return;
    }
    if (
      i.isTouchEvent &&
      e.activeElement &&
      l.target === e.activeElement &&
      F(l.target).is(i.focusableElements)
    ) {
      (i.isMoved = !0), (n.allowClick = !1);
      return;
    }
    if (
      (i.allowTouchCallbacks && n.emit("touchMove", l),
      l.targetTouches && l.targetTouches.length > 1)
    )
      return;
    (s.currentX = u), (s.currentY = f);
    const d = s.currentX - s.startX,
      h = s.currentY - s.startY;
    if (
      n.params.threshold &&
      Math.sqrt(Mt(d, 2) + Mt(h, 2)) < n.params.threshold
    )
      return;
    if (typeof i.isScrolling == "undefined") {
      let y;
      (n.isHorizontal() && s.currentY === s.startY) ||
      (n.isVertical() && s.currentX === s.startX)
        ? (i.isScrolling = !1)
        : d * d + h * h >= 25 &&
          ((y = (Math.atan2(Math.abs(h), Math.abs(d)) * 180) / Math.PI),
          (i.isScrolling = n.isHorizontal()
            ? y > r.touchAngle
            : 90 - y > r.touchAngle));
    }
    if (
      (i.isScrolling && n.emit("touchMoveOpposite", l),
      typeof i.startMoving == "undefined" &&
        (s.currentX !== s.startX || s.currentY !== s.startY) &&
        (i.startMoving = !0),
      i.isScrolling)
    ) {
      i.isTouched = !1;
      return;
    }
    if (!i.startMoving) return;
    (n.allowClick = !1),
      !r.cssMode && l.cancelable && l.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && l.stopPropagation(),
      i.isMoved ||
        (r.loop && !r.cssMode && n.loopFix(),
        (i.startTranslate = n.getTranslate()),
        n.setTransition(0),
        n.animating &&
          n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (i.allowMomentumBounce = !1),
        r.grabCursor &&
          (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
          n.setGrabCursor(!0),
        n.emit("sliderFirstMove", l)),
      n.emit("sliderMove", l),
      (i.isMoved = !0);
    let m = n.isHorizontal() ? d : h;
    (s.diff = m),
      (m *= r.touchRatio),
      a && (m = -m),
      (n.swipeDirection = m > 0 ? "prev" : "next"),
      (i.currentTranslate = m + i.startTranslate);
    let p = !0,
      g = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (g = 0),
      m > 0 && i.currentTranslate > n.minTranslate()
        ? ((p = !1),
          r.resistance &&
            (i.currentTranslate =
              n.minTranslate() -
              1 +
              Mt(-n.minTranslate() + i.startTranslate + m, g)))
        : m < 0 &&
          i.currentTranslate < n.maxTranslate() &&
          ((p = !1),
          r.resistance &&
            (i.currentTranslate =
              n.maxTranslate() +
              1 -
              Mt(n.maxTranslate() - i.startTranslate - m, g))),
      p && (l.preventedByNestedSwiper = !0),
      !n.allowSlideNext &&
        n.swipeDirection === "next" &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !n.allowSlidePrev &&
        n.swipeDirection === "prev" &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !n.allowSlidePrev &&
        !n.allowSlideNext &&
        (i.currentTranslate = i.startTranslate),
      r.threshold > 0)
    )
      if (Math.abs(m) > r.threshold || i.allowThresholdMove) {
        if (!i.allowThresholdMove) {
          (i.allowThresholdMove = !0),
            (s.startX = s.currentX),
            (s.startY = s.currentY),
            (i.currentTranslate = i.startTranslate),
            (s.diff = n.isHorizontal()
              ? s.currentX - s.startX
              : s.currentY - s.startY);
          return;
        }
      } else {
        i.currentTranslate = i.startTranslate;
        return;
      }
    !r.followFinger ||
      r.cssMode ||
      (((r.freeMode && r.freeMode.enabled && n.freeMode) ||
        r.watchSlidesProgress) &&
        (n.updateActiveIndex(), n.updateSlidesClasses()),
      n.params.freeMode &&
        r.freeMode.enabled &&
        n.freeMode &&
        n.freeMode.onTouchMove(),
      n.updateProgress(i.currentTranslate),
      n.setTranslate(i.currentTranslate));
  }
  function Bp(t) {
    const e = this,
      n = e.touchEventsData,
      { params: i, touches: r, rtlTranslate: s, slidesGrid: a, enabled: o } = e;
    if (!o) return;
    let l = t;
    if (
      (l.originalEvent && (l = l.originalEvent),
      n.allowTouchCallbacks && e.emit("touchEnd", l),
      (n.allowTouchCallbacks = !1),
      !n.isTouched)
    ) {
      n.isMoved && i.grabCursor && e.setGrabCursor(!1),
        (n.isMoved = !1),
        (n.startMoving = !1);
      return;
    }
    i.grabCursor &&
      n.isMoved &&
      n.isTouched &&
      (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
      e.setGrabCursor(!1);
    const c = $t(),
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
      ((n.lastClickTime = $t()),
      Hn(() => {
        e.destroyed || (e.allowClick = !0);
      }),
      !n.isTouched ||
        !n.isMoved ||
        !e.swipeDirection ||
        r.diff === 0 ||
        n.currentTranslate === n.startTranslate)
    ) {
      (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
      return;
    }
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    let f;
    if (
      (i.followFinger
        ? (f = s ? e.translate : -e.translate)
        : (f = -n.currentTranslate),
      i.cssMode)
    )
      return;
    if (e.params.freeMode && i.freeMode.enabled) {
      e.freeMode.onTouchEnd({ currentPos: f });
      return;
    }
    let d = 0,
      h = e.slidesSizesGrid[0];
    for (
      let v = 0;
      v < a.length;
      v += v < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
    ) {
      const _ = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      typeof a[v + _] != "undefined"
        ? f >= a[v] && f < a[v + _] && ((d = v), (h = a[v + _] - a[v]))
        : f >= a[v] && ((d = v), (h = a[a.length - 1] - a[a.length - 2]));
    }
    let m = null,
      p = null;
    i.rewind &&
      (e.isBeginning
        ? (p =
            e.params.virtual && e.params.virtual.enabled && e.virtual
              ? e.virtual.slides.length - 1
              : e.slides.length - 1)
        : e.isEnd && (m = 0));
    const g = (f - a[d]) / h,
      y = d < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (u > i.longSwipesMs) {
      if (!i.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" &&
        (g >= i.longSwipesRatio
          ? e.slideTo(i.rewind && e.isEnd ? m : d + y)
          : e.slideTo(d)),
        e.swipeDirection === "prev" &&
          (g > 1 - i.longSwipesRatio
            ? e.slideTo(d + y)
            : p !== null && g < 0 && Math.abs(g) > i.longSwipesRatio
            ? e.slideTo(p)
            : e.slideTo(d));
    } else {
      if (!i.shortSwipes) {
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
  function _c() {
    const t = this,
      { params: e, el: n } = t;
    if (n && n.offsetWidth === 0) return;
    e.breakpoints && t.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: r, snapGrid: s } = t;
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
      (t.allowSlidePrev = r),
      (t.allowSlideNext = i),
      t.params.watchOverflow && s !== t.snapGrid && t.checkOverflow();
  }
  function qp(t) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && t.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (t.stopPropagation(), t.stopImmediatePropagation())));
  }
  function Hp() {
    const t = this,
      { wrapperEl: e, rtlTranslate: n, enabled: i } = t;
    if (!i) return;
    (t.previousTranslate = t.translate),
      t.isHorizontal()
        ? (t.translate = -e.scrollLeft)
        : (t.translate = -e.scrollTop),
      t.translate === 0 && (t.translate = 0),
      t.updateActiveIndex(),
      t.updateSlidesClasses();
    let r;
    const s = t.maxTranslate() - t.minTranslate();
    s === 0 ? (r = 0) : (r = (t.translate - t.minTranslate()) / s),
      r !== t.progress && t.updateProgress(n ? -t.translate : t.translate),
      t.emit("setTranslate", t.translate, !1);
  }
  let bc = !1;
  function Vp() {}
  const xc = (t, e) => {
    const n = Fe(),
      {
        params: i,
        touchEvents: r,
        el: s,
        wrapperEl: a,
        device: o,
        support: l,
      } = t,
      c = !!i.nested,
      u = e === "on" ? "addEventListener" : "removeEventListener",
      f = e;
    if (!l.touch)
      s[u](r.start, t.onTouchStart, !1),
        n[u](r.move, t.onTouchMove, c),
        n[u](r.end, t.onTouchEnd, !1);
    else {
      const d =
        r.start === "touchstart" && l.passiveListener && i.passiveListeners
          ? { passive: !0, capture: !1 }
          : !1;
      s[u](r.start, t.onTouchStart, d),
        s[u](
          r.move,
          t.onTouchMove,
          l.passiveListener ? { passive: !1, capture: c } : c
        ),
        s[u](r.end, t.onTouchEnd, d),
        r.cancel && s[u](r.cancel, t.onTouchEnd, d);
    }
    (i.preventClicks || i.preventClicksPropagation) &&
      s[u]("click", t.onClick, !0),
      i.cssMode && a[u]("scroll", t.onScroll),
      i.updateOnWindowResize
        ? t[f](
            o.ios || o.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            _c,
            !0
          )
        : t[f]("observerUpdate", _c, !0);
  };
  function Wp() {
    const t = this,
      e = Fe(),
      { params: n, support: i } = t;
    (t.onTouchStart = Np.bind(t)),
      (t.onTouchMove = Fp.bind(t)),
      (t.onTouchEnd = Bp.bind(t)),
      n.cssMode && (t.onScroll = Hp.bind(t)),
      (t.onClick = qp.bind(t)),
      i.touch && !bc && (e.addEventListener("touchstart", Vp), (bc = !0)),
      xc(t, "on");
  }
  function Xp() {
    xc(this, "off");
  }
  const Yp = { attachEvents: Wp, detachEvents: Xp },
    Sc = (t, e) => t.grid && e.grid && e.grid.rows > 1;
  function Gp() {
    const t = this,
      {
        activeIndex: e,
        initialized: n,
        loopedSlides: i = 0,
        params: r,
        $el: s,
      } = t,
      a = r.breakpoints;
    if (!a || (a && Object.keys(a).length === 0)) return;
    const o = t.getBreakpoint(a, t.params.breakpointsBase, t.el);
    if (!o || t.currentBreakpoint === o) return;
    const c = (o in a ? a[o] : void 0) || t.originalParams,
      u = Sc(t, r),
      f = Sc(t, c),
      d = r.enabled;
    u && !f
      ? (s.removeClass(
          `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
        ),
        t.emitContainerClasses())
      : !u &&
        f &&
        (s.addClass(`${r.containerModifierClass}grid`),
        ((c.grid.fill && c.grid.fill === "column") ||
          (!c.grid.fill && r.grid.fill === "column")) &&
          s.addClass(`${r.containerModifierClass}grid-column`),
        t.emitContainerClasses()),
      ["navigation", "pagination", "scrollbar"].forEach((g) => {
        const y = r[g] && r[g].enabled,
          v = c[g] && c[g].enabled;
        y && !v && t[g].disable(), !y && v && t[g].enable();
      });
    const h = c.direction && c.direction !== r.direction,
      m = r.loop && (c.slidesPerView !== r.slidesPerView || h);
    h && n && t.changeDirection(), Ot(t.params, c);
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
        t.slideTo(e - i + t.loopedSlides, 0, !1)),
      t.emit("breakpoint", c);
  }
  function jp(t, e = "window", n) {
    if (!t || (e === "container" && !n)) return;
    let i = !1;
    const r = ge(),
      s = e === "window" ? r.innerHeight : n.clientHeight,
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
        ? r.matchMedia(`(min-width: ${c}px)`).matches && (i = l)
        : c <= n.clientWidth && (i = l);
    }
    return i || "max";
  }
  const Up = { setBreakpoint: Gp, getBreakpoint: jp };
  function Kp(t, e) {
    const n = [];
    return (
      t.forEach((i) => {
        typeof i == "object"
          ? Object.keys(i).forEach((r) => {
              i[r] && n.push(e + r);
            })
          : typeof i == "string" && n.push(e + i);
      }),
      n
    );
  }
  function Zp() {
    const t = this,
      { classNames: e, params: n, rtl: i, $el: r, device: s, support: a } = t,
      o = Kp(
        [
          "initialized",
          n.direction,
          { "pointer-events": !a.touch },
          { "free-mode": t.params.freeMode && n.freeMode.enabled },
          { autoheight: n.autoHeight },
          { rtl: i },
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
    e.push(...o), r.addClass([...e].join(" ")), t.emitContainerClasses();
  }
  function Qp() {
    const t = this,
      { $el: e, classNames: n } = t;
    e.removeClass(n.join(" ")), t.emitContainerClasses();
  }
  const Jp = { addClasses: Zp, removeClasses: Qp };
  function em(t, e, n, i, r, s) {
    const a = ge();
    let o;
    function l() {
      s && s();
    }
    !F(t).parent("picture")[0] && (!t.complete || !r) && e
      ? ((o = new a.Image()),
        (o.onload = l),
        (o.onerror = l),
        i && (o.sizes = i),
        n && (o.srcset = n),
        e && (o.src = e))
      : l();
  }
  function tm() {
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
      const i = t.imagesToLoad[n];
      t.loadImage(
        i,
        i.currentSrc || i.getAttribute("src"),
        i.srcset || i.getAttribute("srcset"),
        i.sizes || i.getAttribute("sizes"),
        !0,
        e
      );
    }
  }
  const nm = { loadImage: em, preloadImages: tm };
  function im() {
    const t = this,
      { isLocked: e, params: n } = t,
      { slidesOffsetBefore: i } = n;
    if (i) {
      const r = t.slides.length - 1,
        s = t.slidesGrid[r] + t.slidesSizesGrid[r] + i * 2;
      t.isLocked = t.size > s;
    } else t.isLocked = t.snapGrid.length === 1;
    n.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
      n.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
      e && e !== t.isLocked && (t.isEnd = !1),
      e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
  }
  const rm = { checkOverflow: im },
    Tc = {
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
  function sm(t, e) {
    return function (i = {}) {
      const r = Object.keys(i)[0],
        s = i[r];
      if (typeof s != "object" || s === null) {
        Ot(e, i);
        return;
      }
      if (
        (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
          t[r] === !0 &&
          (t[r] = { auto: !0 }),
        !(r in t && "enabled" in s))
      ) {
        Ot(e, i);
        return;
      }
      t[r] === !0 && (t[r] = { enabled: !0 }),
        typeof t[r] == "object" && !("enabled" in t[r]) && (t[r].enabled = !0),
        t[r] || (t[r] = { enabled: !1 }),
        Ot(e, i);
    };
  }
  const no = {
      eventsEmitter: tp,
      update: fp,
      translate: vp,
      transition: xp,
      slide: Mp,
      loop: Lp,
      grabCursor: zp,
      events: Yp,
      breakpoints: Up,
      checkOverflow: rm,
      classes: Jp,
      images: nm,
    },
    io = {};
  class pt {
    constructor(...e) {
      let n, i;
      if (
        (e.length === 1 &&
        e[0].constructor &&
        Object.prototype.toString.call(e[0]).slice(8, -1) === "Object"
          ? (i = e[0])
          : ([n, i] = e),
        i || (i = {}),
        (i = Ot({}, i)),
        n && !i.el && (i.el = n),
        i.el && F(i.el).length > 1)
      ) {
        const o = [];
        return (
          F(i.el).each((l) => {
            const c = Ot({}, i, { el: l });
            o.push(new pt(c));
          }),
          o
        );
      }
      const r = this;
      (r.__swiper__ = !0),
        (r.support = vc()),
        (r.device = Kh({ userAgent: i.userAgent })),
        (r.browser = Qh()),
        (r.eventsListeners = {}),
        (r.eventsAnyListeners = []),
        (r.modules = [...r.__modules__]),
        i.modules && Array.isArray(i.modules) && r.modules.push(...i.modules);
      const s = {};
      r.modules.forEach((o) => {
        o({
          swiper: r,
          extendParams: sm(i, s),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r),
        });
      });
      const a = Ot({}, Tc, s);
      return (
        (r.params = Ot({}, a, io, i)),
        (r.originalParams = Ot({}, r.params)),
        (r.passedParams = Ot({}, i)),
        r.params &&
          r.params.on &&
          Object.keys(r.params.on).forEach((o) => {
            r.on(o, r.params.on[o]);
          }),
        r.params && r.params.onAny && r.onAny(r.params.onAny),
        (r.$ = F),
        Object.assign(r, {
          enabled: r.params.enabled,
          el: n,
          classNames: [],
          slides: F(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() {
            return r.params.direction === "horizontal";
          },
          isVertical() {
            return r.params.direction === "vertical";
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
          allowSlideNext: r.params.allowSlideNext,
          allowSlidePrev: r.params.allowSlidePrev,
          touchEvents: (function () {
            const l = ["touchstart", "touchmove", "touchend", "touchcancel"],
              c = ["pointerdown", "pointermove", "pointerup"];
            return (
              (r.touchEventsTouch = {
                start: l[0],
                move: l[1],
                end: l[2],
                cancel: l[3],
              }),
              (r.touchEventsDesktop = { start: c[0], move: c[1], end: c[2] }),
              r.support.touch || !r.params.simulateTouch
                ? r.touchEventsTouch
                : r.touchEventsDesktop
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
            focusableElements: r.params.focusableElements,
            lastClickTime: $t(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: r.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        r.emit("_swiper"),
        r.params.init && r.init(),
        r
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
      const i = this;
      e = Math.min(Math.max(e, 0), 1);
      const r = i.minTranslate(),
        a = (i.maxTranslate() - r) * e + r;
      i.translateTo(a, typeof n == "undefined" ? 0 : n),
        i.updateActiveIndex(),
        i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const n = e.el.className
        .split(" ")
        .filter(
          (i) =>
            i.indexOf("swiper") === 0 ||
            i.indexOf(e.params.containerModifierClass) === 0
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
              (i) =>
                i.indexOf("swiper-slide") === 0 ||
                i.indexOf(n.params.slideClass) === 0
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const n = [];
      e.slides.each((i) => {
        const r = e.getSlideClasses(i);
        n.push({ slideEl: i, classNames: r }), e.emit("_slideClass", i, r);
      }),
        e.emit("_slideClasses", n);
    }
    slidesPerViewDynamic(e = "current", n = !1) {
      const i = this,
        {
          params: r,
          slides: s,
          slidesGrid: a,
          slidesSizesGrid: o,
          size: l,
          activeIndex: c,
        } = i;
      let u = 1;
      if (r.centeredSlides) {
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
      const { snapGrid: n, params: i } = e;
      i.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
      function r() {
        const a = e.rtlTranslate ? e.translate * -1 : e.translate,
          o = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
        e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let s;
      e.params.freeMode && e.params.freeMode.enabled
        ? (r(), e.params.autoHeight && e.updateAutoHeight())
        : ((e.params.slidesPerView === "auto" || e.params.slidesPerView > 1) &&
          e.isEnd &&
          !e.params.centeredSlides
            ? (s = e.slideTo(e.slides.length - 1, 0, !1, !0))
            : (s = e.slideTo(e.activeIndex, 0, !1, !0)),
          s || r()),
        i.watchOverflow && n !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, n = !0) {
      const i = this,
        r = i.params.direction;
      return (
        e || (e = r === "horizontal" ? "vertical" : "horizontal"),
        e === r ||
          (e !== "horizontal" && e !== "vertical") ||
          (i.$el
            .removeClass(`${i.params.containerModifierClass}${r}`)
            .addClass(`${i.params.containerModifierClass}${e}`),
          i.emitContainerClasses(),
          (i.params.direction = e),
          i.slides.each((s) => {
            e === "vertical" ? (s.style.width = "") : (s.style.height = "");
          }),
          i.emit("changeDirection"),
          n && i.update()),
        i
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
      const i = F(e || n.params.el);
      if (((e = i[0]), !e)) return !1;
      e.swiper = n;
      const r = () =>
        `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let a = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const o = F(e.shadowRoot.querySelector(r()));
          return (o.children = (l) => i.children(l)), o;
        }
        return i.children ? i.children(r()) : F(i).children(r());
      })();
      if (a.length === 0 && n.params.createElements) {
        const l = Fe().createElement("div");
        (a = F(l)),
          (l.className = n.params.wrapperClass),
          i.append(l),
          i.children(`.${n.params.slideClass}`).each((c) => {
            a.append(c);
          });
      }
      return (
        Object.assign(n, {
          $el: i,
          el: e,
          $wrapperEl: a,
          wrapperEl: a[0],
          mounted: !0,
          rtl: e.dir.toLowerCase() === "rtl" || i.css("direction") === "rtl",
          rtlTranslate:
            n.params.direction === "horizontal" &&
            (e.dir.toLowerCase() === "rtl" || i.css("direction") === "rtl"),
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
      const i = this,
        { params: r, $el: s, $wrapperEl: a, slides: o } = i;
      return (
        typeof i.params == "undefined" ||
          i.destroyed ||
          (i.emit("beforeDestroy"),
          (i.initialized = !1),
          i.detachEvents(),
          r.loop && i.loopDestroy(),
          n &&
            (i.removeClasses(),
            s.removeAttr("style"),
            a.removeAttr("style"),
            o &&
              o.length &&
              o
                .removeClass(
                  [
                    r.slideVisibleClass,
                    r.slideActiveClass,
                    r.slideNextClass,
                    r.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          i.emit("destroy"),
          Object.keys(i.eventsListeners).forEach((l) => {
            i.off(l);
          }),
          e !== !1 && ((i.$el[0].swiper = null), Xh(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      Ot(io, e);
    }
    static get extendedDefaults() {
      return io;
    }
    static get defaults() {
      return Tc;
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
  Object.keys(no).forEach((t) => {
    Object.keys(no[t]).forEach((e) => {
      pt.prototype[e] = no[t][e];
    });
  }),
    pt.use([Jh, ep]);
  function am({ swiper: t, extendParams: e, on: n, emit: i }) {
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
    let r;
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
      const C = t.activeIndex || 0;
      let w;
      t.rtlTranslate ? (w = "right") : (w = t.isHorizontal() ? "left" : "top");
      let P, A;
      m
        ? ((P = Math.floor(d / 2) + h + g), (A = Math.floor(d / 2) + h + p))
        : ((P = d + (h - 1) + g), (A = h + p));
      const E = Math.max((C || 0) - A, 0),
        M = Math.min((C || 0) + P, _.length - 1),
        b = (t.slidesGrid[E] || 0) - (t.slidesGrid[0] || 0);
      Object.assign(t.virtual, {
        from: E,
        to: M,
        offset: b,
        slidesGrid: t.slidesGrid,
      });
      function T() {
        t.updateSlides(),
          t.updateProgress(),
          t.updateSlidesClasses(),
          t.lazy && t.params.lazy.enabled && t.lazy.load(),
          i("virtualUpdate");
      }
      if (y === E && v === M && !f) {
        t.slidesGrid !== x && b !== S && t.slides.css(w, `${b}px`),
          t.updateProgress(),
          i("virtualUpdate");
        return;
      }
      if (t.params.virtual.renderExternal) {
        t.params.virtual.renderExternal.call(t, {
          offset: b,
          from: E,
          to: M,
          slides: (function () {
            const I = [];
            for (let D = E; D <= M; D += 1) I.push(_[D]);
            return I;
          })(),
        }),
          t.params.virtual.renderExternalUpdate ? T() : i("virtualUpdate");
        return;
      }
      const O = [],
        L = [];
      if (f) t.$wrapperEl.find(`.${t.params.slideClass}`).remove();
      else
        for (let k = y; k <= v; k += 1)
          (k < E || k > M) &&
            t.$wrapperEl
              .find(`.${t.params.slideClass}[data-swiper-slide-index="${k}"]`)
              .remove();
      for (let k = 0; k < _.length; k += 1)
        k >= E &&
          k <= M &&
          (typeof v == "undefined" || f
            ? L.push(k)
            : (k > v && L.push(k), k < y && O.push(k)));
      L.forEach((k) => {
        t.$wrapperEl.append(s(_[k], k));
      }),
        O.sort((k, I) => I - k).forEach((k) => {
          t.$wrapperEl.prepend(s(_[k], k));
        }),
        t.$wrapperEl.children(".swiper-slide").css(w, `${b}px`),
        T();
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
            ? (clearTimeout(r),
              (r = setTimeout(() => {
                a();
              }, 100)))
            : a());
      }),
      n("init update resize", () => {
        t.params.virtual.enabled &&
          t.params.cssMode &&
          Rr(t.wrapperEl, "--swiper-virtual-size", `${t.virtualSize}px`);
      }),
      Object.assign(t.virtual, {
        appendSlide: o,
        prependSlide: l,
        removeSlide: c,
        removeAllSlides: u,
        update: a,
      });
  }
  function om({ swiper: t, extendParams: e, on: n, emit: i }) {
    const r = Fe(),
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
          r.activeElement &&
          r.activeElement.nodeName &&
          (r.activeElement.nodeName.toLowerCase() === "input" ||
            r.activeElement.nodeName.toLowerCase() === "textarea")
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
            C = S[0].clientWidth,
            w = S[0].clientHeight,
            P = s.innerWidth,
            A = s.innerHeight,
            E = t.$el.offset();
          u && (E.left -= t.$el[0].scrollLeft);
          const M = [
            [E.left, E.top],
            [E.left + C, E.top],
            [E.left, E.top + w],
            [E.left + C, E.top + w],
          ];
          for (let b = 0; b < M.length; b += 1) {
            const T = M[b];
            if (T[0] >= 0 && T[0] <= P && T[1] >= 0 && T[1] <= A) {
              if (T[0] === 0 && T[1] === 0) continue;
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
          i("keyPress", d);
      }
    }
    function o() {
      t.keyboard.enabled || (F(r).on("keydown", a), (t.keyboard.enabled = !0));
    }
    function l() {
      t.keyboard.enabled && (F(r).off("keydown", a), (t.keyboard.enabled = !1));
    }
    n("init", () => {
      t.params.keyboard.enabled && o();
    }),
      n("destroy", () => {
        t.keyboard.enabled && l();
      }),
      Object.assign(t.keyboard, { enable: o, disable: l });
  }
  function lm({ swiper: t, extendParams: e, on: n, emit: i }) {
    const r = ge();
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
      a = $t(),
      o;
    const l = [];
    function c(v) {
      let C = 0,
        w = 0,
        P = 0,
        A = 0;
      return (
        "detail" in v && (w = v.detail),
        "wheelDelta" in v && (w = -v.wheelDelta / 120),
        "wheelDeltaY" in v && (w = -v.wheelDeltaY / 120),
        "wheelDeltaX" in v && (C = -v.wheelDeltaX / 120),
        "axis" in v && v.axis === v.HORIZONTAL_AXIS && ((C = w), (w = 0)),
        (P = C * 10),
        (A = w * 10),
        "deltaY" in v && (A = v.deltaY),
        "deltaX" in v && (P = v.deltaX),
        v.shiftKey && !P && ((P = A), (A = 0)),
        (P || A) &&
          v.deltaMode &&
          (v.deltaMode === 1
            ? ((P *= 40), (A *= 40))
            : ((P *= 800), (A *= 800))),
        P && !C && (C = P < 1 ? -1 : 1),
        A && !w && (w = A < 1 ? -1 : 1),
        { spinX: C, spinY: w, pixelX: P, pixelY: A }
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
          $t() - a < t.params.mousewheel.thresholdTime)
        ? !1
        : v.delta >= 6 && $t() - a < 60
        ? !0
        : (v.direction < 0
            ? (!t.isEnd || t.params.loop) &&
              !t.animating &&
              (t.slideNext(), i("scroll", v.raw))
            : (!t.isBeginning || t.params.loop) &&
              !t.animating &&
              (t.slidePrev(), i("scroll", v.raw)),
          (a = new r.Date().getTime()),
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
      let C = t.$el;
      if (
        (t.params.mousewheel.eventsTarget !== "container" &&
          (C = F(t.params.mousewheel.eventsTarget)),
        !t.mouseEntered && !C[0].contains(_.target) && !S.releaseOnEdges)
      )
        return !0;
      _.originalEvent && (_ = _.originalEvent);
      let w = 0;
      const P = t.rtlTranslate ? -1 : 1,
        A = c(_);
      if (S.forceToAxis)
        if (t.isHorizontal())
          if (Math.abs(A.pixelX) > Math.abs(A.pixelY)) w = -A.pixelX * P;
          else return !0;
        else if (Math.abs(A.pixelY) > Math.abs(A.pixelX)) w = -A.pixelY;
        else return !0;
      else
        w = Math.abs(A.pixelX) > Math.abs(A.pixelY) ? -A.pixelX * P : -A.pixelY;
      if (w === 0) return !0;
      S.invert && (w = -w);
      let E = t.getTranslate() + w * S.sensitivity;
      if (
        (E >= t.minTranslate() && (E = t.minTranslate()),
        E <= t.maxTranslate() && (E = t.maxTranslate()),
        (x = t.params.loop
          ? !0
          : !(E === t.minTranslate() || E === t.maxTranslate())),
        x && t.params.nested && _.stopPropagation(),
        !t.params.freeMode || !t.params.freeMode.enabled)
      ) {
        const M = {
          time: $t(),
          delta: Math.abs(w),
          direction: Math.sign(w),
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
        const M = { time: $t(), delta: Math.abs(w), direction: Math.sign(w) },
          b =
            o &&
            M.time < o.time + 500 &&
            M.delta <= o.delta &&
            M.direction === o.direction;
        if (!b) {
          (o = void 0), t.params.loop && t.loopFix();
          let T = t.getTranslate() + w * S.sensitivity;
          const O = t.isBeginning,
            L = t.isEnd;
          if (
            (T >= t.minTranslate() && (T = t.minTranslate()),
            T <= t.maxTranslate() && (T = t.maxTranslate()),
            t.setTransition(0),
            t.setTranslate(T),
            t.updateProgress(),
            t.updateActiveIndex(),
            t.updateSlidesClasses(),
            ((!O && t.isBeginning) || (!L && t.isEnd)) &&
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
              const D = w > 0 ? 0.8 : 0.2;
              (o = M),
                l.splice(0),
                (s = Hn(() => {
                  t.slideToClosest(t.params.speed, !0, void 0, D);
                }, 0));
            }
            s ||
              (s = Hn(() => {
                (o = M),
                  l.splice(0),
                  t.slideToClosest(t.params.speed, !0, void 0, 0.5);
              }, 500));
          }
          if (
            (b || i("scroll", _),
            t.params.autoplay &&
              t.params.autoplayDisableOnInteraction &&
              t.autoplay.stop(),
            T === t.minTranslate() || T === t.maxTranslate())
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
  function ro(t, e, n, i) {
    const r = Fe();
    return (
      t.params.createElements &&
        Object.keys(i).forEach((s) => {
          if (!n[s] && n.auto === !0) {
            let a = t.$el.children(`.${i[s]}`)[0];
            a ||
              ((a = r.createElement("div")),
              (a.className = i[s]),
              t.$el.append(a)),
              (n[s] = a),
              (e[s] = a);
          }
        }),
      n
    );
  }
  function cm({ swiper: t, extendParams: e, on: n, emit: i }) {
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
    function r(h) {
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
          (t.slidePrev(), i("navigationPrev"));
    }
    function l(h) {
      h.preventDefault(),
        !(t.isEnd && !t.params.loop && !t.params.rewind) &&
          (t.slideNext(), i("navigationNext"));
    }
    function c() {
      const h = t.params.navigation;
      if (
        ((t.params.navigation = ro(
          t,
          t.originalParams.navigation,
          t.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !(h.nextEl || h.prevEl))
      )
        return;
      const m = r(h.nextEl),
        p = r(h.prevEl);
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
            i(v === !0 ? "navigationShow" : "navigationHide"),
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
  function Pn(t = "") {
    return `.${t
      .trim()
      .replace(/([\.:!\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }
  function um({ swiper: t, extendParams: e, on: n, emit: i }) {
    const r = "swiper-pagination";
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
        bulletClass: `${r}-bullet`,
        bulletActiveClass: `${r}-bullet-active`,
        modifierClass: `${r}-`,
        currentClass: `${r}-current`,
        totalClass: `${r}-total`,
        hiddenClass: `${r}-hidden`,
        progressbarFillClass: `${r}-progressbar-fill`,
        progressbarOppositeClass: `${r}-progressbar-opposite`,
        clickableClass: `${r}-clickable`,
        lockClass: `${r}-lock`,
        horizontalClass: `${r}-horizontal`,
        verticalClass: `${r}-vertical`,
        paginationDisabledClass: `${r}-disabled`,
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
        let C, w, P;
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
            (C = Math.max(_ - a, 0)),
            (w = C + (Math.min(S.length, g.dynamicMainBullets) - 1)),
            (P = (w + C) / 2)),
          S.removeClass(
            ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
              .map((A) => `${g.bulletActiveClass}${A}`)
              .join(" ")
          ),
          v.length > 1)
        )
          S.each((A) => {
            const E = F(A),
              M = E.index();
            M === _ && E.addClass(g.bulletActiveClass),
              g.dynamicBullets &&
                (M >= C && M <= w && E.addClass(`${g.bulletActiveClass}-main`),
                M === C && l(E, "prev"),
                M === w && l(E, "next"));
          });
        else {
          const A = S.eq(_),
            E = A.index();
          if ((A.addClass(g.bulletActiveClass), g.dynamicBullets)) {
            const M = S.eq(C),
              b = S.eq(w);
            for (let T = C; T <= w; T += 1)
              S.eq(T).addClass(`${g.bulletActiveClass}-main`);
            if (t.params.loop)
              if (E >= S.length) {
                for (let T = g.dynamicMainBullets; T >= 0; T -= 1)
                  S.eq(S.length - T).addClass(`${g.bulletActiveClass}-main`);
                S.eq(S.length - g.dynamicMainBullets - 1).addClass(
                  `${g.bulletActiveClass}-prev`
                );
              } else l(M, "prev"), l(b, "next");
            else l(M, "prev"), l(b, "next");
          }
        }
        if (g.dynamicBullets) {
          const A = Math.min(S.length, g.dynamicMainBullets + 4),
            E = (s * A - s) / 2 - P * s,
            M = p ? "right" : "left";
          S.css(t.isHorizontal() ? M : "top", `${E}px`);
        }
      }
      if (
        (g.type === "fraction" &&
          (v.find(Pn(g.currentClass)).text(g.formatFractionCurrent(_ + 1)),
          v.find(Pn(g.totalClass)).text(g.formatFractionTotal(x))),
        g.type === "progressbar")
      ) {
        let S;
        g.progressbarOpposite
          ? (S = t.isHorizontal() ? "vertical" : "horizontal")
          : (S = t.isHorizontal() ? "horizontal" : "vertical");
        const C = (_ + 1) / x;
        let w = 1,
          P = 1;
        S === "horizontal" ? (w = C) : (P = C),
          v
            .find(Pn(g.progressbarFillClass))
            .transform(`translate3d(0,0,0) scaleX(${w}) scaleY(${P})`)
            .transition(t.params.speed);
      }
      g.type === "custom" && g.renderCustom
        ? (v.html(g.renderCustom(t, _ + 1, x)), i("paginationRender", v[0]))
        : i("paginationUpdate", v[0]),
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
        y.html(v), (t.pagination.bullets = y.find(Pn(p.bulletClass)));
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
        p.type !== "custom" && i("paginationRender", t.pagination.$el[0]);
    }
    function f() {
      t.params.pagination = ro(
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
          g.on("click", Pn(p.bulletClass), function (v) {
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
        p.clickable && g.off("click", Pn(p.bulletClass));
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
          i(_ === !0 ? "paginationShow" : "paginationHide"),
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
  function fm({ swiper: t, extendParams: e, on: n, emit: i }) {
    const r = Fe();
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
      const { scrollbar: M, rtlTranslate: b, progress: T } = t,
        { $dragEl: O, $el: L } = M,
        k = t.params.scrollbar;
      let I = c,
        D = (u - c) * T;
      b
        ? ((D = -D), D > 0 ? ((I = c - D), (D = 0)) : -D + c > u && (I = u + D))
        : D < 0
        ? ((I = c + D), (D = 0))
        : D + c > u && (I = u - D),
        t.isHorizontal()
          ? (O.transform(`translate3d(${D}px, 0, 0)`),
            (O[0].style.width = `${I}px`))
          : (O.transform(`translate3d(0px, ${D}px, 0)`),
            (O[0].style.height = `${I}px`)),
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
        { $dragEl: b, $el: T } = M;
      (b[0].style.width = ""),
        (b[0].style.height = ""),
        (u = t.isHorizontal() ? T[0].offsetWidth : T[0].offsetHeight),
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
        f >= 1 ? (T[0].style.display = "none") : (T[0].style.display = ""),
        t.params.scrollbar.hide && (T[0].style.opacity = 0),
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
      const { scrollbar: b, rtlTranslate: T } = t,
        { $el: O } = b;
      let L;
      (L =
        (p(M) -
          O.offset()[t.isHorizontal() ? "left" : "top"] -
          (l !== null ? l : c / 2)) /
        (u - c)),
        (L = Math.max(Math.min(L, 1), 0)),
        T && (L = 1 - L);
      const k = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * L;
      t.updateProgress(k),
        t.setTranslate(k),
        t.updateActiveIndex(),
        t.updateSlidesClasses();
    }
    function y(M) {
      const b = t.params.scrollbar,
        { scrollbar: T, $wrapperEl: O } = t,
        { $el: L, $dragEl: k } = T;
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
        O.transition(100),
        k.transition(100),
        g(M),
        clearTimeout(o),
        L.transition(0),
        b.hide && L.css("opacity", 1),
        t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
        i("scrollbarDragStart", M);
    }
    function v(M) {
      const { scrollbar: b, $wrapperEl: T } = t,
        { $el: O, $dragEl: L } = b;
      s &&
        (M.preventDefault ? M.preventDefault() : (M.returnValue = !1),
        g(M),
        T.transition(0),
        O.transition(0),
        L.transition(0),
        i("scrollbarDragMove", M));
    }
    function _(M) {
      const b = t.params.scrollbar,
        { scrollbar: T, $wrapperEl: O } = t,
        { $el: L } = T;
      s &&
        ((s = !1),
        t.params.cssMode &&
          (t.$wrapperEl.css("scroll-snap-type", ""), O.transition("")),
        b.hide &&
          (clearTimeout(o),
          (o = Hn(() => {
            L.css("opacity", 0), L.transition(400);
          }, 1e3))),
        i("scrollbarDragEnd", M),
        b.snapOnRelease && t.slideToClosest());
    }
    function x(M) {
      const {
          scrollbar: b,
          touchEventsTouch: T,
          touchEventsDesktop: O,
          params: L,
          support: k,
        } = t,
        I = b.$el;
      if (!I) return;
      const D = I[0],
        N =
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
        ? (D[H](T.start, y, N), D[H](T.move, v, N), D[H](T.end, _, $))
        : (D[H](O.start, y, N), r[H](O.move, v, N), r[H](O.end, _, $));
    }
    function S() {
      !t.params.scrollbar.el || !t.scrollbar.el || x("on");
    }
    function C() {
      !t.params.scrollbar.el || !t.scrollbar.el || x("off");
    }
    function w() {
      const { scrollbar: M, $el: b } = t;
      t.params.scrollbar = ro(
        t,
        t.originalParams.scrollbar,
        t.params.scrollbar,
        { el: "swiper-scrollbar" }
      );
      const T = t.params.scrollbar;
      if (!T.el) return;
      let O = F(T.el);
      t.params.uniqueNavElements &&
        typeof T.el == "string" &&
        O.length > 1 &&
        b.find(T.el).length === 1 &&
        (O = b.find(T.el)),
        O.addClass(t.isHorizontal() ? T.horizontalClass : T.verticalClass);
      let L = O.find(`.${t.params.scrollbar.dragClass}`);
      L.length === 0 &&
        ((L = F(`<div class="${t.params.scrollbar.dragClass}"></div>`)),
        O.append(L)),
        Object.assign(M, { $el: O, el: O[0], $dragEl: L, dragEl: L[0] }),
        T.draggable && S(),
        O &&
          O[t.enabled ? "removeClass" : "addClass"](
            t.params.scrollbar.lockClass
          );
    }
    function P() {
      const M = t.params.scrollbar,
        b = t.scrollbar.$el;
      b &&
        b.removeClass(t.isHorizontal() ? M.horizontalClass : M.verticalClass),
        C();
    }
    n("init", () => {
      t.params.scrollbar.enabled === !1 ? E() : (w(), m(), d());
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
    const A = () => {
        t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),
          t.scrollbar.$el &&
            t.scrollbar.$el.removeClass(
              t.params.scrollbar.scrollbarDisabledClass
            ),
          w(),
          m(),
          d();
      },
      E = () => {
        t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
          t.scrollbar.$el &&
            t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
          P();
      };
    Object.assign(t.scrollbar, {
      enable: A,
      disable: E,
      updateSize: m,
      setTranslate: d,
      init: w,
      destroy: P,
    });
  }
  function dm({ swiper: t, extendParams: e, on: n }) {
    e({ parallax: { enabled: !1 } });
    const i = (a, o) => {
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
      r = () => {
        const { $el: a, slides: o, progress: l, snapGrid: c } = t;
        a
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each((u) => {
            i(u, l);
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
                  i(h, d);
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
        t.params.parallax.enabled && r();
      }),
      n("setTranslate", () => {
        t.params.parallax.enabled && r();
      }),
      n("setTransition", (a, o) => {
        t.params.parallax.enabled && s(o);
      });
  }
  function hm({ swiper: t, extendParams: e, on: n, emit: i }) {
    const r = ge();
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
          i("zoomChange", k, I, D);
        }
        h = k;
      },
    });
    function m(k) {
      if (k.targetTouches.length < 2) return 1;
      const I = k.targetTouches[0].pageX,
        D = k.targetTouches[0].pageY,
        N = k.targetTouches[1].pageX,
        $ = k.targetTouches[1].pageY;
      return Math.sqrt(Mt(N - I, 2) + Mt($ - D, 2));
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
        N = t.zoom;
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
        ? (N.scale = k.scale * s)
        : (N.scale = (u.scaleMove / u.scaleStart) * s),
        N.scale > u.maxRatio &&
          (N.scale = u.maxRatio - 1 + Mt(N.scale - u.maxRatio + 1, 0.5)),
        N.scale < D.minRatio &&
          (N.scale = D.minRatio + 1 - Mt(D.minRatio - N.scale + 1, 0.5)),
        u.$imageEl.transform(`translate3d(0,0,0) scale(${N.scale})`);
    }
    function y(k) {
      const I = t.device,
        D = t.support,
        N = t.params.zoom,
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
        (($.scale = Math.max(Math.min($.scale, u.maxRatio), N.minRatio)),
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
        (f.startX = Qa(u.$imageWrapEl[0], "x") || 0),
        (f.startY = Qa(u.$imageWrapEl[0], "y") || 0),
        (u.slideWidth = u.$slideEl[0].offsetWidth),
        (u.slideHeight = u.$slideEl[0].offsetHeight),
        u.$imageWrapEl.transition(0));
      const D = f.width * I.scale,
        N = f.height * I.scale;
      if (!(D < u.slideWidth && N < u.slideHeight)) {
        if (
          ((f.minX = Math.min(u.slideWidth / 2 - D / 2, 0)),
          (f.maxX = -f.minX),
          (f.minY = Math.min(u.slideHeight / 2 - N / 2, 0)),
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
            (f.currentX = f.minX + 1 - Mt(f.minX - f.currentX + 1, 0.8)),
          f.currentX > f.maxX &&
            (f.currentX = f.maxX - 1 + Mt(f.currentX - f.maxX + 1, 0.8)),
          f.currentY < f.minY &&
            (f.currentY = f.minY + 1 - Mt(f.minY - f.currentY + 1, 0.8)),
          f.currentY > f.maxY &&
            (f.currentY = f.maxY - 1 + Mt(f.currentY - f.maxY + 1, 0.8)),
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
      const N = d.x * I,
        $ = f.currentX + N,
        H = d.y * D,
        Y = f.currentY + H;
      d.x !== 0 && (I = Math.abs(($ - f.currentX) / d.x)),
        d.y !== 0 && (D = Math.abs((Y - f.currentY) / d.y));
      const le = Math.max(I, D);
      (f.currentX = $), (f.currentY = Y);
      const ie = f.width * k.scale,
        K = f.height * k.scale;
      (f.minX = Math.min(u.slideWidth / 2 - ie / 2, 0)),
        (f.maxX = -f.minX),
        (f.minY = Math.min(u.slideHeight / 2 - K / 2, 0)),
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
    function C(k) {
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
      let N, $, H, Y, le, ie, K, Z, he, me, Ce, Le, pe, Pe, W, te, Ie, De;
      typeof f.touchesStart.x == "undefined" && k
        ? ((N = k.type === "touchend" ? k.changedTouches[0].pageX : k.pageX),
          ($ = k.type === "touchend" ? k.changedTouches[0].pageY : k.pageY))
        : ((N = f.touchesStart.x), ($ = f.touchesStart.y)),
        (I.scale = u.$imageWrapEl.attr("data-swiper-zoom") || D.maxRatio),
        (s = u.$imageWrapEl.attr("data-swiper-zoom") || D.maxRatio),
        k
          ? ((Ie = u.$slideEl[0].offsetWidth),
            (De = u.$slideEl[0].offsetHeight),
            (H = u.$slideEl.offset().left + r.scrollX),
            (Y = u.$slideEl.offset().top + r.scrollY),
            (le = H + Ie / 2 - N),
            (ie = Y + De / 2 - $),
            (he = u.$imageEl[0].offsetWidth),
            (me = u.$imageEl[0].offsetHeight),
            (Ce = he * I.scale),
            (Le = me * I.scale),
            (pe = Math.min(Ie / 2 - Ce / 2, 0)),
            (Pe = Math.min(De / 2 - Le / 2, 0)),
            (W = -pe),
            (te = -Pe),
            (K = le * I.scale),
            (Z = ie * I.scale),
            K < pe && (K = pe),
            K > W && (K = W),
            Z < Pe && (Z = Pe),
            Z > te && (Z = te))
          : ((K = 0), (Z = 0)),
        u.$imageWrapEl
          .transition(300)
          .transform(`translate3d(${K}px, ${Z}px,0)`),
        u.$imageEl
          .transition(300)
          .transform(`translate3d(0,0,0) scale(${I.scale})`);
    }
    function w() {
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
      I.scale && I.scale !== 1 ? w() : C(k);
    }
    function A() {
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
    function E() {
      return `.${t.params.slideClass}`;
    }
    function M(k) {
      const { passiveListener: I } = A(),
        D = E();
      t.$wrapperEl[k]("gesturestart", D, p, I),
        t.$wrapperEl[k]("gesturechange", D, g, I),
        t.$wrapperEl[k]("gestureend", D, y, I);
    }
    function b() {
      o || ((o = !0), M("on"));
    }
    function T() {
      o && ((o = !1), M("off"));
    }
    function O() {
      const k = t.zoom;
      if (k.enabled) return;
      k.enabled = !0;
      const I = t.support,
        { passiveListener: D, activeListenerWithCapture: N } = A(),
        $ = E();
      I.gestures
        ? (t.$wrapperEl.on(t.touchEvents.start, b, D),
          t.$wrapperEl.on(t.touchEvents.end, T, D))
        : t.touchEvents.start === "touchstart" &&
          (t.$wrapperEl.on(t.touchEvents.start, $, p, D),
          t.$wrapperEl.on(t.touchEvents.move, $, g, N),
          t.$wrapperEl.on(t.touchEvents.end, $, y, D),
          t.touchEvents.cancel &&
            t.$wrapperEl.on(t.touchEvents.cancel, $, y, D)),
        t.$wrapperEl.on(
          t.touchEvents.move,
          `.${t.params.zoom.containerClass}`,
          _,
          N
        );
    }
    function L() {
      const k = t.zoom;
      if (!k.enabled) return;
      const I = t.support;
      k.enabled = !1;
      const { passiveListener: D, activeListenerWithCapture: N } = A(),
        $ = E();
      I.gestures
        ? (t.$wrapperEl.off(t.touchEvents.start, b, D),
          t.$wrapperEl.off(t.touchEvents.end, T, D))
        : t.touchEvents.start === "touchstart" &&
          (t.$wrapperEl.off(t.touchEvents.start, $, p, D),
          t.$wrapperEl.off(t.touchEvents.move, $, g, N),
          t.$wrapperEl.off(t.touchEvents.end, $, y, D),
          t.touchEvents.cancel &&
            t.$wrapperEl.off(t.touchEvents.cancel, $, y, D)),
        t.$wrapperEl.off(
          t.touchEvents.move,
          `.${t.params.zoom.containerClass}`,
          _,
          N
        );
    }
    n("init", () => {
      t.params.zoom.enabled && O();
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
        enable: O,
        disable: L,
        in: C,
        out: w,
        toggle: P,
      });
  }
  function pm({ swiper: t, extendParams: e, on: n, emit: i }) {
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
    let r = !1,
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
                        S.children("source").each((C) => {
                          const w = F(C);
                          w.attr("data-srcset") &&
                            (w.attr("srcset", w.attr("data-srcset")),
                            w.removeAttr("data-srcset"));
                        }),
                      v && (g.attr("src", v), g.removeAttr("data-src"))),
                  g.addClass(f.loadedClass).removeClass(f.loadingClass),
                  h.find(`.${f.preloaderClass}`).remove(),
                  t.params.loop && u)
                ) {
                  const C = h.attr("data-swiper-slide-index");
                  if (h.hasClass(t.params.slideDuplicateClass)) {
                    const w = t.$wrapperEl.children(
                      `[data-swiper-slide-index="${C}"]:not(.${t.params.slideDuplicateClass})`
                    );
                    a(w.index(), !1);
                  } else {
                    const w = t.$wrapperEl.children(
                      `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${C}"]`
                    );
                    a(w.index(), !1);
                  }
                }
                i("lazyImageReady", h[0], g[0]),
                  t.params.autoHeight && t.updateAutoHeight();
              }
            }),
              i("lazyImageLoad", h[0], g[0]);
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
          for (let C = d + _; C < x; C += 1) g(C) && a(C);
          for (let C = S; C < d; C += 1) g(C) && a(C);
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
      g ? (o(), u.off("scroll", l, v)) : r || ((r = !0), u.on("scroll", l, v));
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
  function mm({ swiper: t, extendParams: e, on: n }) {
    e({ controller: { control: void 0, inverse: !1, by: "slide" } }),
      (t.controller = { control: void 0 });
    function i(l, c) {
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
    function r(l) {
      t.controller.spline ||
        (t.controller.spline = t.params.loop
          ? new i(t.slidesGrid, l.slidesGrid)
          : new i(t.snapGrid, l.snapGrid));
    }
    function s(l, c) {
      const u = t.controller.control;
      let f, d;
      const h = t.constructor;
      function m(p) {
        const g = t.rtlTranslate ? -t.translate : t.translate;
        t.params.controller.by === "slide" &&
          (r(p), (d = -t.controller.spline.interpolate(-g))),
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
              Hn(() => {
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
  function gm({ swiper: t, extendParams: e, on: n }) {
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
    let i = null;
    function r(b) {
      const T = i;
      T.length !== 0 && (T.html(""), T.html(b));
    }
    function s(b = 16) {
      const T = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(b).replace(/x/g, T);
    }
    function a(b) {
      b.attr("tabIndex", "0");
    }
    function o(b) {
      b.attr("tabIndex", "-1");
    }
    function l(b, T) {
      b.attr("role", T);
    }
    function c(b, T) {
      b.attr("aria-roledescription", T);
    }
    function u(b, T) {
      b.attr("aria-controls", T);
    }
    function f(b, T) {
      b.attr("aria-label", T);
    }
    function d(b, T) {
      b.attr("id", T);
    }
    function h(b, T) {
      b.attr("aria-live", T);
    }
    function m(b) {
      b.attr("aria-disabled", !0);
    }
    function p(b) {
      b.attr("aria-disabled", !1);
    }
    function g(b) {
      if (b.keyCode !== 13 && b.keyCode !== 32) return;
      const T = t.params.a11y,
        O = F(b.target);
      t.navigation &&
        t.navigation.$nextEl &&
        O.is(t.navigation.$nextEl) &&
        ((t.isEnd && !t.params.loop) || t.slideNext(),
        t.isEnd ? r(T.lastSlideMessage) : r(T.nextSlideMessage)),
        t.navigation &&
          t.navigation.$prevEl &&
          O.is(t.navigation.$prevEl) &&
          ((t.isBeginning && !t.params.loop) || t.slidePrev(),
          t.isBeginning ? r(T.firstSlideMessage) : r(T.prevSlideMessage)),
        t.pagination &&
          O.is(Pn(t.params.pagination.bulletClass)) &&
          O[0].click();
    }
    function y() {
      if (t.params.loop || t.params.rewind || !t.navigation) return;
      const { $nextEl: b, $prevEl: T } = t.navigation;
      T && T.length > 0 && (t.isBeginning ? (m(T), o(T)) : (p(T), a(T))),
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
        t.pagination.bullets.each((T) => {
          const O = F(T);
          t.params.pagination.clickable &&
            (a(O),
            t.params.pagination.renderBullet ||
              (l(O, "button"),
              f(
                O,
                b.paginationBulletMessage.replace(
                  /\{\{index\}\}/,
                  O.index() + 1
                )
              ))),
            O.is(`.${t.params.pagination.bulletActiveClass}`)
              ? O.attr("aria-current", "true")
              : O.removeAttr("aria-current");
        });
    }
    const S = (b, T, O) => {
        a(b),
          b[0].tagName !== "BUTTON" && (l(b, "button"), b.on("keydown", g)),
          f(b, O),
          u(b, T);
      },
      C = () => {
        t.a11y.clicked = !0;
      },
      w = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            t.destroyed || (t.a11y.clicked = !1);
          });
        });
      },
      P = (b) => {
        if (t.a11y.clicked) return;
        const T = b.target.closest(`.${t.params.slideClass}`);
        if (!T || !t.slides.includes(T)) return;
        const O = t.slides.indexOf(T) === t.activeIndex,
          L =
            t.params.watchSlidesProgress &&
            t.visibleSlides &&
            t.visibleSlides.includes(T);
        O ||
          L ||
          (b.sourceCapabilities && b.sourceCapabilities.firesTouchEvents) ||
          (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
          t.slideTo(t.slides.indexOf(T), 0));
      },
      A = () => {
        const b = t.params.a11y;
        b.itemRoleDescriptionMessage &&
          c(F(t.slides), b.itemRoleDescriptionMessage),
          b.slideRole && l(F(t.slides), b.slideRole);
        const T = t.params.loop
          ? t.slides.filter(
              (O) => !O.classList.contains(t.params.slideDuplicateClass)
            ).length
          : t.slides.length;
        b.slideLabelMessage &&
          t.slides.each((O, L) => {
            const k = F(O),
              I = t.params.loop
                ? parseInt(k.attr("data-swiper-slide-index"), 10)
                : L,
              D = b.slideLabelMessage
                .replace(/\{\{index\}\}/, I + 1)
                .replace(/\{\{slidesLength\}\}/, T);
            f(k, D);
          });
      },
      E = () => {
        const b = t.params.a11y;
        t.$el.append(i);
        const T = t.$el;
        b.containerRoleDescriptionMessage &&
          c(T, b.containerRoleDescriptionMessage),
          b.containerMessage && f(T, b.containerMessage);
        const O = t.$wrapperEl,
          L = b.id || O.attr("id") || `swiper-wrapper-${s(16)}`,
          k = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
        d(O, L), h(O, k), A();
        let I, D;
        t.navigation && t.navigation.$nextEl && (I = t.navigation.$nextEl),
          t.navigation && t.navigation.$prevEl && (D = t.navigation.$prevEl),
          I && I.length && S(I, L, b.nextSlideMessage),
          D && D.length && S(D, L, b.prevSlideMessage),
          _() &&
            t.pagination.$el.on(
              "keydown",
              Pn(t.params.pagination.bulletClass),
              g
            ),
          t.$el.on("focus", P, !0),
          t.$el.on("pointerdown", C, !0),
          t.$el.on("pointerup", w, !0);
      };
    function M() {
      i && i.length > 0 && i.remove();
      let b, T;
      t.navigation && t.navigation.$nextEl && (b = t.navigation.$nextEl),
        t.navigation && t.navigation.$prevEl && (T = t.navigation.$prevEl),
        b && b.off("keydown", g),
        T && T.off("keydown", g),
        _() &&
          t.pagination.$el.off(
            "keydown",
            Pn(t.params.pagination.bulletClass),
            g
          ),
        t.$el.off("focus", P, !0),
        t.$el.off("pointerdown", C, !0),
        t.$el.off("pointerup", w, !0);
    }
    n("beforeInit", () => {
      i = F(
        `<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
      );
    }),
      n("afterInit", () => {
        t.params.a11y.enabled && E();
      }),
      n(
        "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
        () => {
          t.params.a11y.enabled && A();
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
  function vm({ swiper: t, extendParams: e, on: n }) {
    e({
      history: {
        enabled: !1,
        root: "",
        replaceState: !1,
        key: "slides",
        keepQuery: !1,
      },
    });
    let i = !1,
      r = {};
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
        if (!i || !t.params.history.enabled) return;
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
        (r = a(t.params.url)), l(t.params.speed, r.value, !1);
      },
      u = () => {
        const d = ge();
        if (t.params.history) {
          if (!d.history || !d.history.pushState) {
            (t.params.history.enabled = !1),
              (t.params.hashNavigation.enabled = !0);
            return;
          }
          (i = !0),
            (r = a(t.params.url)),
            !(!r.key && !r.value) &&
              (l(0, r.value, t.params.runCallbacksOnInit),
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
        i && o(t.params.history.key, t.activeIndex);
      }),
      n("slideChange", () => {
        i && t.params.cssMode && o(t.params.history.key, t.activeIndex);
      });
  }
  function ym({ swiper: t, extendParams: e, emit: n, on: i }) {
    let r = !1;
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
        if (!(!r || !t.params.hashNavigation.enabled))
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
        r = !0;
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
    i("init", () => {
      t.params.hashNavigation.enabled && c();
    }),
      i("destroy", () => {
        t.params.hashNavigation.enabled && u();
      }),
      i("transitionEnd _freeModeNoMomentumRelease", () => {
        r && l();
      }),
      i("slideChange", () => {
        r && t.params.cssMode && l();
      });
  }
  function _m({ swiper: t, extendParams: e, on: n, emit: i }) {
    let r;
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
        clearTimeout(r),
        (r = Hn(() => {
          let y;
          t.params.autoplay.reverseDirection
            ? t.params.loop
              ? (t.loopFix(),
                (y = t.slidePrev(t.params.speed, !0, !0)),
                i("autoplay"))
              : t.isBeginning
              ? t.params.autoplay.stopOnLastSlide
                ? o()
                : ((y = t.slideTo(t.slides.length - 1, t.params.speed, !0, !0)),
                  i("autoplay"))
              : ((y = t.slidePrev(t.params.speed, !0, !0)), i("autoplay"))
            : t.params.loop
            ? (t.loopFix(),
              (y = t.slideNext(t.params.speed, !0, !0)),
              i("autoplay"))
            : t.isEnd
            ? t.params.autoplay.stopOnLastSlide
              ? o()
              : ((y = t.slideTo(0, t.params.speed, !0, !0)), i("autoplay"))
            : ((y = t.slideNext(t.params.speed, !0, !0)), i("autoplay")),
            ((t.params.cssMode && t.autoplay.running) || y === !1) && s();
        }, g));
    }
    function a() {
      return typeof r != "undefined" || t.autoplay.running
        ? !1
        : ((t.autoplay.running = !0), i("autoplayStart"), s(), !0);
    }
    function o() {
      return !t.autoplay.running || typeof r == "undefined"
        ? !1
        : (r && (clearTimeout(r), (r = void 0)),
          (t.autoplay.running = !1),
          i("autoplayStop"),
          !0);
    }
    function l(p) {
      t.autoplay.running &&
        (t.autoplay.paused ||
          (r && clearTimeout(r),
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
      t.params.autoplay.disableOnInteraction ? o() : (i("autoplayPause"), l()),
        ["transitionend", "webkitTransitionEnd"].forEach((p) => {
          t.$wrapperEl[0].removeEventListener(p, u);
        });
    }
    function d() {
      t.params.autoplay.disableOnInteraction ||
        ((t.autoplay.paused = !1), i("autoplayResume"), s());
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
  function bm({ swiper: t, extendParams: e, on: n }) {
    e({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs",
      },
    });
    let i = !1,
      r = !1;
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
      if (i) return !1;
      i = !0;
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
      else if (zr(l.swiper)) {
        const u = Object.assign({}, l.swiper);
        Object.assign(u, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
          (t.thumbs.swiper = new c(u)),
          (r = !0);
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
        !l || l.destroyed || (r && l.destroy());
      }),
      Object.assign(t.thumbs, { init: a, update: o });
  }
  function xm({ swiper: t, extendParams: e, emit: n, once: i }) {
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
    function r() {
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
          time: $t(),
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
        m = $t() - d.touchStartTime;
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
          const C = d.velocities.pop(),
            w = d.velocities.pop(),
            P = C.position - w.position,
            A = C.time - w.time;
          (t.velocity = P / A),
            (t.velocity /= 2),
            Math.abs(t.velocity) < l.freeMode.minimumVelocity &&
              (t.velocity = 0),
            (A > 150 || $t() - C.time > 300) && (t.velocity = 0);
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
          let C;
          for (let w = 0; w < f.length; w += 1)
            if (f[w] > -y) {
              C = w;
              break;
            }
          Math.abs(f[C] - y) < Math.abs(f[C - 1] - y) ||
          t.swipeDirection === "next"
            ? (y = f[C])
            : (y = f[C - 1]),
            (y = -y);
        }
        if (
          (S &&
            i("transitionEnd", () => {
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
            const C = Math.abs((u ? -y : y) - t.translate),
              w = t.slidesSizesGrid[t.activeIndex];
            C < w
              ? (p = l.speed)
              : C < 2 * w
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
      freeMode: { onTouchStart: r, onTouchMove: s, onTouchEnd: a },
    });
  }
  function Sm({ swiper: t, extendParams: e }) {
    e({ grid: { rows: 1, fill: "column" } });
    let n, i, r;
    const s = (l) => {
        const { slidesPerView: c } = t.params,
          { rows: u, fill: f } = t.params.grid;
        (i = n / u),
          (r = Math.floor(l / u)),
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
              (y > r || (y === r && v === m - 1)) &&
                ((v += 1), v >= m && ((v = 0), (y += 1))))
            : ((v = Math.floor(l / i)), (y = l - v * i));
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
  function Tm(t) {
    const e = this,
      { $wrapperEl: n, params: i } = e;
    if ((i.loop && e.loopDestroy(), typeof t == "object" && "length" in t))
      for (let r = 0; r < t.length; r += 1) t[r] && n.append(t[r]);
    else n.append(t);
    i.loop && e.loopCreate(), i.observer || e.update();
  }
  function Em(t) {
    const e = this,
      { params: n, $wrapperEl: i, activeIndex: r } = e;
    n.loop && e.loopDestroy();
    let s = r + 1;
    if (typeof t == "object" && "length" in t) {
      for (let a = 0; a < t.length; a += 1) t[a] && i.prepend(t[a]);
      s = r + t.length;
    } else i.prepend(t);
    n.loop && e.loopCreate(), n.observer || e.update(), e.slideTo(s, 0, !1);
  }
  function wm(t, e) {
    const n = this,
      { $wrapperEl: i, params: r, activeIndex: s } = n;
    let a = s;
    r.loop &&
      ((a -= n.loopedSlides),
      n.loopDestroy(),
      (n.slides = i.children(`.${r.slideClass}`)));
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
      for (let u = 0; u < e.length; u += 1) e[u] && i.append(e[u]);
      l = a > t ? a + e.length : a;
    } else i.append(e);
    for (let u = 0; u < c.length; u += 1) i.append(c[u]);
    r.loop && n.loopCreate(),
      r.observer || n.update(),
      r.loop ? n.slideTo(l + n.loopedSlides, 0, !1) : n.slideTo(l, 0, !1);
  }
  function Cm(t) {
    const e = this,
      { params: n, $wrapperEl: i, activeIndex: r } = e;
    let s = r;
    n.loop &&
      ((s -= e.loopedSlides),
      e.loopDestroy(),
      (e.slides = i.children(`.${n.slideClass}`)));
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
  function Pm() {
    const t = this,
      e = [];
    for (let n = 0; n < t.slides.length; n += 1) e.push(n);
    t.removeSlide(e);
  }
  function km({ swiper: t }) {
    Object.assign(t, {
      appendSlide: Tm.bind(t),
      prependSlide: Em.bind(t),
      addSlide: wm.bind(t),
      removeSlide: Cm.bind(t),
      removeAllSlides: Pm.bind(t),
    });
  }
  function Ki(t) {
    const {
      effect: e,
      swiper: n,
      on: i,
      setTranslate: r,
      setTransition: s,
      overwriteParams: a,
      perspective: o,
      recreateShadows: l,
      getEffectParams: c,
    } = t;
    i("beforeInit", () => {
      if (n.params.effect !== e) return;
      n.classNames.push(`${n.params.containerModifierClass}${e}`),
        o && o() && n.classNames.push(`${n.params.containerModifierClass}3d`);
      const f = a ? a() : {};
      Object.assign(n.params, f), Object.assign(n.originalParams, f);
    }),
      i("setTranslate", () => {
        n.params.effect === e && r();
      }),
      i("setTransition", (f, d) => {
        n.params.effect === e && s(d);
      }),
      i("transitionEnd", () => {
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
    i("virtualUpdate", () => {
      n.params.effect === e &&
        (n.slides.length || (u = !0),
        requestAnimationFrame(() => {
          u && n.slides && n.slides.length && (r(), (u = !1));
        }));
    });
  }
  function Nr(t, e) {
    return t.transformEl
      ? e
          .find(t.transformEl)
          .css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden",
          })
      : e;
  }
  function Fs({ swiper: t, duration: e, transformEl: n, allSlides: i }) {
    const { slides: r, activeIndex: s, $wrapperEl: a } = t;
    if (t.params.virtualTranslate && e !== 0) {
      let o = !1,
        l;
      i ? (l = n ? r.find(n) : r) : (l = n ? r.eq(s).find(n) : r.eq(s)),
        l.transitionEnd(() => {
          if (o || !t || t.destroyed) return;
          (o = !0), (t.animating = !1);
          const c = ["webkitTransitionEnd", "transitionend"];
          for (let u = 0; u < c.length; u += 1) a.trigger(c[u]);
        });
    }
  }
  function Mm({ swiper: t, extendParams: e, on: n }) {
    e({ fadeEffect: { crossFade: !1, transformEl: null } }),
      Ki({
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
            Nr(a, l)
              .css({ opacity: d })
              .transform(`translate3d(${u}px, ${f}px, 0px)`);
          }
        },
        setTransition: (s) => {
          const { transformEl: a } = t.params.fadeEffect;
          (a ? t.slides.find(a) : t.slides).transition(s),
            Fs({ swiper: t, duration: s, transformEl: a, allSlides: !0 });
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
  function $m({ swiper: t, extendParams: e, on: n }) {
    e({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    });
    const i = (o, l, c) => {
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
    Ki({
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
          const C = c.eq(S);
          let w = S;
          y && (w = parseInt(C.attr("data-swiper-slide-index"), 10));
          let P = w * 90,
            A = Math.floor(P / 360);
          d && ((P = -P), (A = Math.floor(-P / 360)));
          const E = Math.max(Math.min(C[0].progress, 1), -1);
          let M = 0,
            b = 0,
            T = 0;
          w % 4 === 0
            ? ((M = -A * 4 * h), (T = 0))
            : (w - 1) % 4 === 0
            ? ((M = 0), (T = -A * 4 * h))
            : (w - 2) % 4 === 0
            ? ((M = h + A * 4 * h), (T = h))
            : (w - 3) % 4 === 0 && ((M = -h), (T = 3 * h + h * 4 * A)),
            d && (M = -M),
            g || ((b = M), (M = 0));
          const O = `rotateX(${g ? 0 : -P}deg) rotateY(${
            g ? P : 0
          }deg) translate3d(${M}px, ${b}px, ${T}px)`;
          E <= 1 &&
            E > -1 &&
            ((v = w * 90 + E * 90), d && (v = -w * 90 - E * 90)),
            C.transform(O),
            p.slideShadows && i(C, E, g);
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
              C =
                1.5 -
                (Math.sin((S * 2 * Math.PI) / 360) / 2 +
                  Math.cos((S * 2 * Math.PI) / 360) / 2),
              w = p.shadowScale,
              P = p.shadowScale / C,
              A = p.shadowOffset;
            _.transform(
              `scale3d(${w}, 1, ${P}) translate3d(0px, ${f / 2 + A}px, ${
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
          i(F(l), c, o);
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
  function Zi(t, e, n) {
    const i = `swiper-slide-shadow${n ? `-${n}` : ""}`,
      r = t.transformEl ? e.find(t.transformEl) : e;
    let s = r.children(`.${i}`);
    return (
      s.length ||
        ((s = F(`<div class="swiper-slide-shadow${n ? `-${n}` : ""}"></div>`)),
        r.append(s)),
      s
    );
  }
  function Om({ swiper: t, extendParams: e, on: n }) {
    e({
      flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null },
    });
    const i = (o, l, c) => {
      let u = t.isHorizontal()
          ? o.find(".swiper-slide-shadow-left")
          : o.find(".swiper-slide-shadow-top"),
        f = t.isHorizontal()
          ? o.find(".swiper-slide-shadow-right")
          : o.find(".swiper-slide-shadow-bottom");
      u.length === 0 && (u = Zi(c, o, t.isHorizontal() ? "left" : "top")),
        f.length === 0 && (f = Zi(c, o, t.isHorizontal() ? "right" : "bottom")),
        u.length && (u[0].style.opacity = Math.max(-l, 0)),
        f.length && (f[0].style.opacity = Math.max(l, 0));
    };
    Ki({
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
            c.slideShadows && i(f, d, c);
          const _ = `translate3d(${y}px, ${v}px, 0px) rotateX(${g}deg) rotateY(${p}deg)`;
          Nr(c, f).transform(_);
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
          Fs({ swiper: t, duration: o, transformEl: l });
      },
      recreateShadows: () => {
        const o = t.params.flipEffect;
        t.slides.each((l) => {
          const c = F(l);
          let u = c[0].progress;
          t.params.flipEffect.limitRotation &&
            (u = Math.max(Math.min(l.progress, 1), -1)),
            i(c, u, o);
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
  function Am({ swiper: t, extendParams: e, on: n }) {
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
      Ki({
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
            let C = u ? h * S : 0,
              w = u ? 0 : h * S,
              P = -m * Math.abs(S),
              A = c.stretch;
            typeof A == "string" &&
              A.indexOf("%") !== -1 &&
              (A = (parseFloat(c.stretch) / 100) * v);
            let E = u ? 0 : A * S,
              M = u ? A * S : 0,
              b = 1 - (1 - c.scale) * Math.abs(S);
            Math.abs(M) < 0.001 && (M = 0),
              Math.abs(E) < 0.001 && (E = 0),
              Math.abs(P) < 0.001 && (P = 0),
              Math.abs(C) < 0.001 && (C = 0),
              Math.abs(w) < 0.001 && (w = 0),
              Math.abs(b) < 0.001 && (b = 0);
            const T = `translate3d(${M}px,${E}px,${P}px)  rotateX(${w}deg) rotateY(${C}deg) scale(${b})`;
            if (
              (Nr(c, y).transform(T),
              (y[0].style.zIndex = -Math.abs(Math.round(S)) + 1),
              c.slideShadows)
            ) {
              let L = u
                  ? y.find(".swiper-slide-shadow-left")
                  : y.find(".swiper-slide-shadow-top"),
                k = u
                  ? y.find(".swiper-slide-shadow-right")
                  : y.find(".swiper-slide-shadow-bottom");
              L.length === 0 && (L = Zi(c, y, u ? "left" : "top")),
                k.length === 0 && (k = Zi(c, y, u ? "right" : "bottom")),
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
  function Lm({ swiper: t, extendParams: e, on: n }) {
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
    const i = (a) => (typeof a == "string" ? a : `${a}px`);
    Ki({
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
            v.forEach((b, T) => {
              v[T] = `calc(${b}px + (${i(S.translate[T])} * ${Math.abs(
                p * u
              )}))`;
            }),
            _.forEach((b, T) => {
              _[T] = S.rotate[T] * Math.abs(p * u);
            }),
            (h[0].style.zIndex = -Math.abs(Math.round(m)) + a.length);
          const C = v.join(", "),
            w = `rotateX(${_[0]}deg) rotateY(${_[1]}deg) rotateZ(${_[2]}deg)`,
            P =
              g < 0
                ? `scale(${1 + (1 - S.scale) * g * u})`
                : `scale(${1 - (1 - S.scale) * g * u})`,
            A =
              g < 0 ? 1 + (1 - S.opacity) * g * u : 1 - (1 - S.opacity) * g * u,
            E = `translate3d(${C}) ${w} ${P}`;
          if ((x && S.shadow) || !x) {
            let b = h.children(".swiper-slide-shadow");
            if ((b.length === 0 && S.shadow && (b = Zi(c, h)), b.length)) {
              const T = c.shadowPerProgress ? p * (1 / c.limitProgress) : p;
              b[0].style.opacity = Math.min(Math.max(Math.abs(T), 0), 1);
            }
          }
          const M = Nr(c, h);
          M.transform(E).css({ opacity: A }),
            S.origin && M.css("transform-origin", S.origin);
        }
      },
      setTransition: (a) => {
        const { transformEl: o } = t.params.creativeEffect;
        (o ? t.slides.find(o) : t.slides)
          .transition(a)
          .find(".swiper-slide-shadow")
          .transition(a),
          Fs({ swiper: t, duration: a, transformEl: o, allSlides: !0 });
      },
      perspective: () => t.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !t.params.cssMode,
      }),
    });
  }
  function Im({ swiper: t, extendParams: e, on: n }) {
    e({
      cardsEffect: {
        slideShadows: !0,
        transformEl: null,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8,
      },
    }),
      Ki({
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
            const C =
                t.virtual && t.params.virtual.enabled ? t.virtual.from + f : f,
              w =
                (C === a || C === a - 1) &&
                m > 0 &&
                m < 1 &&
                (c || t.params.cssMode) &&
                u < l,
              P =
                (C === a || C === a + 1) &&
                m < 0 &&
                m > -1 &&
                (c || t.params.cssMode) &&
                u > l;
            if (w || P) {
              const b = Mt(1 - Math.abs((Math.abs(m) - 0.5) / 0.5), 0.5);
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
            const A = m < 0 ? `${1 + (1 - _) * m}` : `${1 - (1 - _) * m}`,
              E = `
        translate3d(${g}, ${y}, ${v}px)
        rotateZ(${o.rotate ? x : 0}deg)
        scale(${A})
      `;
            if (o.slideShadows) {
              let b = d.find(".swiper-slide-shadow");
              b.length === 0 && (b = Zi(o, d)),
                b.length &&
                  (b[0].style.opacity = Math.min(
                    Math.max((Math.abs(m) - 0.5) / 0.5, 0),
                    1
                  ));
            }
            (d[0].style.zIndex = -Math.abs(Math.round(h)) + s.length),
              Nr(o, d).transform(E);
          }
        },
        setTransition: (s) => {
          const { transformEl: a } = t.params.cardsEffect;
          (a ? t.slides.find(a) : t.slides)
            .transition(s)
            .find(".swiper-slide-shadow")
            .transition(s),
            Fs({ swiper: t, duration: s, transformEl: a });
        },
        perspective: () => !0,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
  }
  const Dm = [
    am,
    om,
    lm,
    cm,
    um,
    fm,
    dm,
    hm,
    pm,
    mm,
    gm,
    vm,
    ym,
    _m,
    bm,
    xm,
    Sm,
    km,
    Mm,
    $m,
    Om,
    Am,
    Lm,
    Im,
  ];
  pt.use(Dm);
  let so = null;
  const Ec = () => {
    const t = document.querySelector(".swiper[work-slider='component']");
    if (!t) return;
    const e = () => window.innerWidth >= 768,
      n = () => {
        const r = e();
        so = new pt(t, {
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
          loop: r,
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
    let i = e();
    n(),
      window.addEventListener("resize", () => {
        const r = e();
        r !== i && ((i = r), so && so.destroy(!0, !0), n());
      });
  };
  function kn(t) {
    if (t === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function wc(t, e) {
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
   */ var At = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Qi = { duration: 0.5, overwrite: !1, delay: 0 },
    ao,
    et,
    Se,
    fn = 1e8,
    rt = 1 / fn,
    oo = Math.PI * 2,
    zm = oo / 4,
    Rm = 0,
    Cc = Math.sqrt,
    Nm = Math.cos,
    Fm = Math.sin,
    je = function (e) {
      return typeof e == "string";
    },
    Me = function (e) {
      return typeof e == "function";
    },
    Mn = function (e) {
      return typeof e == "number";
    },
    lo = function (e) {
      return typeof e == "undefined";
    },
    dn = function (e) {
      return typeof e == "object";
    },
    Tt = function (e) {
      return e !== !1;
    },
    co = function () {
      return typeof window != "undefined";
    },
    Bs = function (e) {
      return Me(e) || je(e);
    },
    Pc =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    st = Array.isArray,
    uo = /(?:-?\.?\d|\.)+/gi,
    kc = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Ji = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    fo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Mc = /[+-]=-?[.\d]+/,
    $c = /[^,'"\[\]\s]+/gi,
    Bm = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Ee,
    hn,
    ho,
    po,
    Lt = {},
    qs = {},
    Oc,
    Ac = function (e) {
      return (qs = tr(e, Lt)) && Ct;
    },
    mo = function (e, n) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        n,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    Fr = function (e, n) {
      return !n && console.warn(e);
    },
    Lc = function (e, n) {
      return (e && (Lt[e] = n) && qs && (qs[e] = n)) || Lt;
    },
    Br = function () {
      return 0;
    },
    qm = { suppressEvents: !0, isStart: !0, kill: !1 },
    Hs = { suppressEvents: !0, kill: !1 },
    Hm = { suppressEvents: !0 },
    go = {},
    Vn = [],
    vo = {},
    Ic,
    It = {},
    yo = {},
    Dc = 30,
    Vs = [],
    _o = "",
    bo = function (e) {
      var n = e[0],
        i,
        r;
      if ((dn(n) || Me(n) || (e = [e]), !(i = (n._gsap || {}).harness))) {
        for (r = Vs.length; r-- && !Vs[r].targetTest(n); );
        i = Vs[r];
      }
      for (r = e.length; r--; )
        (e[r] && (e[r]._gsap || (e[r]._gsap = new uu(e[r], i)))) ||
          e.splice(r, 1);
      return e;
    },
    gi = function (e) {
      return e._gsap || bo(Yt(e))[0]._gsap;
    },
    zc = function (e, n, i) {
      return (i = e[n]) && Me(i)
        ? e[n]()
        : (lo(i) && e.getAttribute && e.getAttribute(n)) || i;
    },
    Et = function (e, n) {
      return (e = e.split(",")).forEach(n) || e;
    },
    Oe = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Be = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    er = function (e, n) {
      var i = n.charAt(0),
        r = parseFloat(n.substr(2));
      return (
        (e = parseFloat(e)),
        i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
      );
    },
    Vm = function (e, n) {
      for (var i = n.length, r = 0; e.indexOf(n[r]) < 0 && ++r < i; );
      return r < i;
    },
    Ws = function () {
      var e = Vn.length,
        n = Vn.slice(0),
        i,
        r;
      for (vo = {}, Vn.length = 0, i = 0; i < e; i++)
        (r = n[i]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    xo = function (e) {
      return !!(e._initted || e._startAt || e.add);
    },
    Rc = function (e, n, i, r) {
      Vn.length && !et && Ws(),
        e.render(n, i, !!(et && n < 0 && xo(e))),
        Vn.length && !et && Ws();
    },
    Nc = function (e) {
      var n = parseFloat(e);
      return (n || n === 0) && (e + "").match($c).length < 2
        ? n
        : je(e)
        ? e.trim()
        : e;
    },
    Fc = function (e) {
      return e;
    },
    Dt = function (e, n) {
      for (var i in n) i in e || (e[i] = n[i]);
      return e;
    },
    Wm = function (e) {
      return function (n, i) {
        for (var r in i)
          r in n || (r === "duration" && e) || r === "ease" || (n[r] = i[r]);
      };
    },
    tr = function (e, n) {
      for (var i in n) e[i] = n[i];
      return e;
    },
    Bc = function t(e, n) {
      for (var i in n)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (e[i] = dn(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i]);
      return e;
    },
    Xs = function (e, n) {
      var i = {},
        r;
      for (r in e) r in n || (i[r] = e[r]);
      return i;
    },
    qr = function (e) {
      var n = e.parent || Ee,
        i = e.keyframes ? Wm(st(e.keyframes)) : Dt;
      if (Tt(e.inherit))
        for (; n; ) i(e, n.vars.defaults), (n = n.parent || n._dp);
      return e;
    },
    Xm = function (e, n) {
      for (var i = e.length, r = i === n.length; r && i-- && e[i] === n[i]; );
      return i < 0;
    },
    qc = function (e, n, i, r, s) {
      var a = e[r],
        o;
      if (s) for (o = n[s]; a && a[s] > o; ) a = a._prev;
      return (
        a
          ? ((n._next = a._next), (a._next = n))
          : ((n._next = e[i]), (e[i] = n)),
        n._next ? (n._next._prev = n) : (e[r] = n),
        (n._prev = a),
        (n.parent = n._dp = e),
        n
      );
    },
    Ys = function (e, n, i, r) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var s = n._prev,
        a = n._next;
      s ? (s._next = a) : e[i] === n && (e[i] = a),
        a ? (a._prev = s) : e[r] === n && (e[r] = s),
        (n._next = n._prev = n.parent = null);
    },
    Wn = function (e, n) {
      e.parent &&
        (!n || e.parent.autoRemoveChildren) &&
        e.parent.remove &&
        e.parent.remove(e),
        (e._act = 0);
    },
    vi = function (e, n) {
      if (e && (!n || n._end > e._dur || n._start < 0))
        for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
      return e;
    },
    Ym = function (e) {
      for (var n = e.parent; n && n.parent; )
        (n._dirty = 1), n.totalDuration(), (n = n.parent);
      return e;
    },
    So = function (e, n, i, r) {
      return (
        e._startAt &&
        (et
          ? e._startAt.revert(Hs)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(n, !0, r))
      );
    },
    Gm = function t(e) {
      return !e || (e._ts && t(e.parent));
    },
    Hc = function (e) {
      return e._repeat ? nr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    nr = function (e, n) {
      var i = Math.floor((e = Be(e / n)));
      return e && i === e ? i - 1 : i;
    },
    Gs = function (e, n) {
      return (
        (e - n._start) * n._ts +
        (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
      );
    },
    js = function (e) {
      return (e._end = Be(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || rt) || 0)
      ));
    },
    Us = function (e, n) {
      var i = e._dp;
      return (
        i &&
          i.smoothChildTiming &&
          e._ts &&
          ((e._start = Be(
            i._time -
              (e._ts > 0
                ? n / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)
          )),
          js(e),
          i._dirty || vi(i, e)),
        e
      );
    },
    Vc = function (e, n) {
      var i;
      if (
        ((n._time ||
          (!n._dur && n._initted) ||
          (n._start < e._time && (n._dur || !n.add))) &&
          ((i = Gs(e.rawTime(), n)),
          (!n._dur || Vr(0, n.totalDuration(), i) - n._tTime > rt) &&
            n.render(i, !0)),
        vi(e, n)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (i = e; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        e._zTime = -1e-8;
      }
    },
    pn = function (e, n, i, r) {
      return (
        n.parent && Wn(n),
        (n._start = Be(
          (Mn(i) ? i : i || e !== Ee ? Xt(e, i, n) : e._time) + n._delay
        )),
        (n._end = Be(
          n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)
        )),
        qc(e, n, "_first", "_last", e._sort ? "_start" : 0),
        To(n) || (e._recent = n),
        r || Vc(e, n),
        e._ts < 0 && Us(e, e._tTime),
        e
      );
    },
    Wc = function (e, n) {
      return (
        (Lt.ScrollTrigger || mo("scrollTrigger", n)) &&
        Lt.ScrollTrigger.create(n, e)
      );
    },
    Xc = function (e, n, i, r, s) {
      if ((Ao(e, n, s), !e._initted)) return 1;
      if (
        !i &&
        e._pt &&
        !et &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        Ic !== Rt.frame
      )
        return Vn.push(e), (e._lazy = [s, r]), 1;
    },
    jm = function t(e) {
      var n = e.parent;
      return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
    },
    To = function (e) {
      var n = e.data;
      return n === "isFromStart" || n === "isStart";
    },
    Um = function (e, n, i, r) {
      var s = e.ratio,
        a =
          n < 0 ||
          (!n &&
            ((!e._start && jm(e) && !(!e._initted && To(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !To(e))))
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
          ((l = Vr(0, e._tDur, n)),
          (u = nr(l, o)),
          e._yoyo && u & 1 && (a = 1 - a),
          u !== nr(e._tTime, o) &&
            ((s = 1 - a),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        a !== s || et || r || e._zTime === rt || (!n && e._zTime))
      ) {
        if (!e._initted && Xc(e, n, r, i, l)) return;
        for (
          f = e._zTime,
            e._zTime = n || (i ? rt : 0),
            i || (i = n && !f),
            e.ratio = a,
            e._from && (a = 1 - a),
            e._time = 0,
            e._tTime = l,
            c = e._pt;
          c;

        )
          c.r(a, c.d), (c = c._next);
        n < 0 && So(e, n, i, !0),
          e._onUpdate && !i && zt(e, "onUpdate"),
          l && e._repeat && !i && e.parent && zt(e, "onRepeat"),
          (n >= e._tDur || n < 0) &&
            e.ratio === a &&
            (a && Wn(e, 1),
            !i &&
              !et &&
              (zt(e, a ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = n);
    },
    Km = function (e, n, i) {
      var r;
      if (i > n)
        for (r = e._first; r && r._start <= i; ) {
          if (r.data === "isPause" && r._start > n) return r;
          r = r._next;
        }
      else
        for (r = e._last; r && r._start >= i; ) {
          if (r.data === "isPause" && r._start < n) return r;
          r = r._prev;
        }
    },
    ir = function (e, n, i, r) {
      var s = e._repeat,
        a = Be(n) || 0,
        o = e._tTime / e._tDur;
      return (
        o && !r && (e._time *= a / e._dur),
        (e._dur = a),
        (e._tDur = s ? (s < 0 ? 1e10 : Be(a * (s + 1) + e._rDelay * s)) : a),
        o > 0 && !r && Us(e, (e._tTime = e._tDur * o)),
        e.parent && js(e),
        i || vi(e.parent, e),
        e
      );
    },
    Yc = function (e) {
      return e instanceof mt ? vi(e) : ir(e, e._dur);
    },
    Zm = { _start: 0, endTime: Br, totalDuration: Br },
    Xt = function t(e, n, i) {
      var r = e.labels,
        s = e._recent || Zm,
        a = e.duration() >= fn ? s.endTime(!1) : e._dur,
        o,
        l,
        c;
      return je(n) && (isNaN(n) || n in r)
        ? ((l = n.charAt(0)),
          (c = n.substr(-1) === "%"),
          (o = n.indexOf("=")),
          l === "<" || l === ">"
            ? (o >= 0 && (n = n.replace(/=/, "")),
              (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
                (parseFloat(n.substr(1)) || 0) *
                  (c ? (o < 0 ? s : i).totalDuration() / 100 : 1))
            : o < 0
            ? (n in r || (r[n] = a), r[n])
            : ((l = parseFloat(n.charAt(o - 1) + n.substr(o + 1))),
              c && i && (l = (l / 100) * (st(i) ? i[0] : i).totalDuration()),
              o > 1 ? t(e, n.substr(0, o - 1), i) + l : a + l))
        : n == null
        ? a
        : +n;
    },
    Hr = function (e, n, i) {
      var r = Mn(n[1]),
        s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
        a = n[s],
        o,
        l;
      if ((r && (a.duration = n[1]), (a.parent = i), e)) {
        for (o = a, l = i; l && !("immediateRender" in o); )
          (o = l.vars.defaults || {}), (l = Tt(l.vars.inherit) && l.parent);
        (a.immediateRender = Tt(o.immediateRender)),
          e < 2 ? (a.runBackwards = 1) : (a.startAt = n[s - 1]);
      }
      return new qe(n[0], a, n[s + 1]);
    },
    Xn = function (e, n) {
      return e || e === 0 ? n(e) : n;
    },
    Vr = function (e, n, i) {
      return i < e ? e : i > n ? n : i;
    },
    at = function (e, n) {
      return !je(e) || !(n = Bm.exec(e)) ? "" : n[1];
    },
    Qm = function (e, n, i) {
      return Xn(i, function (r) {
        return Vr(e, n, r);
      });
    },
    Eo = [].slice,
    Gc = function (e, n) {
      return (
        e &&
        dn(e) &&
        "length" in e &&
        ((!n && !e.length) || (e.length - 1 in e && dn(e[0]))) &&
        !e.nodeType &&
        e !== hn
      );
    },
    Jm = function (e, n, i) {
      return (
        i === void 0 && (i = []),
        e.forEach(function (r) {
          var s;
          return (je(r) && !n) || Gc(r, 1)
            ? (s = i).push.apply(s, Yt(r))
            : i.push(r);
        }) || i
      );
    },
    Yt = function (e, n, i) {
      return Se && !n && Se.selector
        ? Se.selector(e)
        : je(e) && !i && (ho || !sr())
        ? Eo.call((n || po).querySelectorAll(e), 0)
        : st(e)
        ? Jm(e, i)
        : Gc(e)
        ? Eo.call(e, 0)
        : e
        ? [e]
        : [];
    },
    wo = function (e) {
      return (
        (e = Yt(e)[0] || Fr("Invalid scope") || {}),
        function (n) {
          var i = e.current || e.nativeElement || e;
          return Yt(
            n,
            i.querySelectorAll
              ? i
              : i === e
              ? Fr("Invalid scope") || po.createElement("div")
              : e
          );
        }
      );
    },
    jc = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    Uc = function (e) {
      if (Me(e)) return e;
      var n = dn(e) ? e : { each: e },
        i = yi(n.ease),
        r = n.from || 0,
        s = parseFloat(n.base) || 0,
        a = {},
        o = r > 0 && r < 1,
        l = isNaN(r) || o,
        c = n.axis,
        u = r,
        f = r;
      return (
        je(r)
          ? (u = f = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !o && l && ((u = r[0]), (f = r[1])),
        function (d, h, m) {
          var p = (m || n).length,
            g = a[p],
            y,
            v,
            _,
            x,
            S,
            C,
            w,
            P,
            A;
          if (!g) {
            if (((A = n.grid === "auto" ? 0 : (n.grid || [1, fn])[1]), !A)) {
              for (
                w = -1e8;
                w < (w = m[A++].getBoundingClientRect().left) && A < p;

              );
              A < p && A--;
            }
            for (
              g = a[p] = [],
                y = l ? Math.min(A, p) * u - 0.5 : r % A,
                v = A === fn ? 0 : l ? (p * f) / A - 0.5 : (r / A) | 0,
                w = 0,
                P = fn,
                C = 0;
              C < p;
              C++
            )
              (_ = (C % A) - y),
                (x = v - ((C / A) | 0)),
                (g[C] = S =
                  c ? Math.abs(c === "y" ? x : _) : Cc(_ * _ + x * x)),
                S > w && (w = S),
                S < P && (P = S);
            r === "random" && jc(g),
              (g.max = w - P),
              (g.min = P),
              (g.v = p =
                (parseFloat(n.amount) ||
                  parseFloat(n.each) *
                    (A > p
                      ? p - 1
                      : c
                      ? c === "y"
                        ? p / A
                        : A
                      : Math.max(A, p / A)) ||
                  0) * (r === "edges" ? -1 : 1)),
              (g.b = p < 0 ? s - p : s),
              (g.u = at(n.amount || n.each) || 0),
              (i = i && p < 0 ? ou(i) : i);
          }
          return (
            (p = (g[d] - g.min) / g.max || 0),
            Be(g.b + (i ? i(p) : p) * g.v) + g.u
          );
        }
      );
    },
    Co = function (e) {
      var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var r = Be(Math.round(parseFloat(i) / e) * e * n);
        return (r - (r % 1)) / n + (Mn(i) ? 0 : at(i));
      };
    },
    Kc = function (e, n) {
      var i = st(e),
        r,
        s;
      return (
        !i &&
          dn(e) &&
          ((r = i = e.radius || fn),
          e.values
            ? ((e = Yt(e.values)), (s = !Mn(e[0])) && (r *= r))
            : (e = Co(e.increment))),
        Xn(
          n,
          i
            ? Me(e)
              ? function (a) {
                  return (s = e(a)), Math.abs(s - a) <= r ? s : a;
                }
              : function (a) {
                  for (
                    var o = parseFloat(s ? a.x : a),
                      l = parseFloat(s ? a.y : 0),
                      c = fn,
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
                    (u = !r || c <= r ? e[u] : a),
                    s || u === a || Mn(a) ? u : u + at(a)
                  );
                }
            : Co(e)
        )
      );
    },
    Zc = function (e, n, i, r) {
      return Xn(st(e) ? !n : i === !0 ? !!(i = 0) : !r, function () {
        return st(e)
          ? e[~~(Math.random() * e.length)]
          : (i = i || 1e-5) &&
              (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (e - i / 2 + Math.random() * (n - e + i * 0.99)) / i
                ) *
                  i *
                  r
              ) / r;
      });
    },
    eg = function () {
      for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
        n[i] = arguments[i];
      return function (r) {
        return n.reduce(function (s, a) {
          return a(s);
        }, r);
      };
    },
    tg = function (e, n) {
      return function (i) {
        return e(parseFloat(i)) + (n || at(i));
      };
    },
    ng = function (e, n, i) {
      return Jc(e, n, 0, 1, i);
    },
    Qc = function (e, n, i) {
      return Xn(i, function (r) {
        return e[~~n(r)];
      });
    },
    ig = function t(e, n, i) {
      var r = n - e;
      return st(e)
        ? Qc(e, t(0, e.length), n)
        : Xn(i, function (s) {
            return ((r + ((s - e) % r)) % r) + e;
          });
    },
    rg = function t(e, n, i) {
      var r = n - e,
        s = r * 2;
      return st(e)
        ? Qc(e, t(0, e.length - 1), n)
        : Xn(i, function (a) {
            return (a = (s + ((a - e) % s)) % s || 0), e + (a > r ? s - a : a);
          });
    },
    Wr = function (e) {
      for (var n = 0, i = "", r, s, a, o; ~(r = e.indexOf("random(", n)); )
        (a = e.indexOf(")", r)),
          (o = e.charAt(r + 7) === "["),
          (s = e.substr(r + 7, a - r - 7).match(o ? $c : uo)),
          (i +=
            e.substr(n, r - n) +
            Zc(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5)),
          (n = a + 1);
      return i + e.substr(n, e.length - n);
    },
    Jc = function (e, n, i, r, s) {
      var a = n - e,
        o = r - i;
      return Xn(s, function (l) {
        return i + (((l - e) / a) * o || 0);
      });
    },
    sg = function t(e, n, i, r) {
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
        if ((i === !0 && (r = 1) && (i = null), a))
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
            (i = n);
        } else r || (e = tr(st(e) ? [] : {}, e));
        if (!u) {
          for (l in n) $o.call(o, e, l, "get", n[l]);
          s = function (m) {
            return Do(m, o) || (a ? e.p : e);
          };
        }
      }
      return Xn(i, s);
    },
    eu = function (e, n, i) {
      var r = e.labels,
        s = fn,
        a,
        o,
        l;
      for (a in r)
        (o = r[a] - n),
          o < 0 == !!i && o && s > (o = Math.abs(o)) && ((l = a), (s = o));
      return l;
    },
    zt = function (e, n, i) {
      var r = e.vars,
        s = r[n],
        a = Se,
        o = e._ctx,
        l,
        c,
        u;
      if (s)
        return (
          (l = r[n + "Params"]),
          (c = r.callbackScope || e),
          i && Vn.length && Ws(),
          o && (Se = o),
          (u = l ? s.apply(c, l) : s.call(c)),
          (Se = a),
          u
        );
    },
    Xr = function (e) {
      return (
        Wn(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!et),
        e.progress() < 1 && zt(e, "onInterrupt"),
        e
      );
    },
    rr,
    tu = [],
    nu = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), co() || e.headless)) {
          var n = e.name,
            i = Me(e),
            r =
              n && !i && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            s = {
              init: Br,
              render: Do,
              add: $o,
              kill: xg,
              modifier: bg,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: Io,
              aliases: {},
              register: 0,
            };
          if ((sr(), e !== r)) {
            if (It[n]) return;
            Dt(r, Dt(Xs(e, s), a)),
              tr(r.prototype, tr(s, Xs(e, a))),
              (It[(r.prop = n)] = r),
              e.targetTest && (Vs.push(r), (go[n] = 1)),
              (n =
                (n === "css"
                  ? "CSS"
                  : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin");
          }
          Lc(n, r), e.register && e.register(Ct, r, wt);
        } else tu.push(e);
    },
    ve = 255,
    Yr = {
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
    Po = function (e, n, i) {
      return (
        (e += e < 0 ? 1 : e > 1 ? -1 : 0),
        ((e * 6 < 1
          ? n + (i - n) * e * 6
          : e < 0.5
          ? i
          : e * 3 < 2
          ? n + (i - n) * (2 / 3 - e) * 6
          : n) *
          ve +
          0.5) |
          0
      );
    },
    iu = function (e, n, i) {
      var r = e ? (Mn(e) ? [e >> 16, (e >> 8) & ve, e & ve] : 0) : Yr.black,
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
      if (!r) {
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Yr[e]))
          r = Yr[e];
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
              (r = parseInt(e.substr(1, 6), 16)),
              [r >> 16, (r >> 8) & ve, r & ve, parseInt(e.substr(7), 16) / 255]
            );
          (e = parseInt(e.substr(1), 16)),
            (r = [e >> 16, (e >> 8) & ve, e & ve]);
        } else if (e.substr(0, 3) === "hsl") {
          if (((r = m = e.match(uo)), !n))
            (l = (+r[0] % 360) / 360),
              (c = +r[1] / 100),
              (u = +r[2] / 100),
              (a = u <= 0.5 ? u * (c + 1) : u + c - u * c),
              (s = u * 2 - a),
              r.length > 3 && (r[3] *= 1),
              (r[0] = Po(l + 1 / 3, s, a)),
              (r[1] = Po(l, s, a)),
              (r[2] = Po(l - 1 / 3, s, a));
          else if (~e.indexOf("="))
            return (r = e.match(kc)), i && r.length < 4 && (r[3] = 1), r;
        } else r = e.match(uo) || Yr.transparent;
        r = r.map(Number);
      }
      return (
        n &&
          !m &&
          ((s = r[0] / ve),
          (a = r[1] / ve),
          (o = r[2] / ve),
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
          (r[0] = ~~(l + 0.5)),
          (r[1] = ~~(c * 100 + 0.5)),
          (r[2] = ~~(u * 100 + 0.5))),
        i && r.length < 4 && (r[3] = 1),
        r
      );
    },
    ru = function (e) {
      var n = [],
        i = [],
        r = -1;
      return (
        e.split(Yn).forEach(function (s) {
          var a = s.match(Ji) || [];
          n.push.apply(n, a), i.push((r += a.length + 1));
        }),
        (n.c = i),
        n
      );
    },
    su = function (e, n, i) {
      var r = "",
        s = (e + r).match(Yn),
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
            (d = iu(d, n, 1)) &&
            a +
              (n
                ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3]
                : d.join(",")) +
              ")"
          );
        })),
        i && ((u = ru(e)), (l = i.c), l.join(r) !== u.c.join(r)))
      )
        for (c = e.replace(Yn, "1").split(Ji), f = c.length - 1; o < f; o++)
          r +=
            c[o] +
            (~l.indexOf(o)
              ? s.shift() || a + "0,0,0,0)"
              : (u.length ? u : s.length ? s : i).shift());
      if (!c)
        for (c = e.split(Yn), f = c.length - 1; o < f; o++) r += c[o] + s[o];
      return r + c[f];
    },
    Yn = (function () {
      var t =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in Yr) t += "|" + e + "\\b";
      return new RegExp(t + ")", "gi");
    })(),
    ag = /hsl[a]?\(/,
    au = function (e) {
      var n = e.join(" "),
        i;
      if (((Yn.lastIndex = 0), Yn.test(n)))
        return (
          (i = ag.test(n)),
          (e[1] = su(e[1], i)),
          (e[0] = su(e[0], i, ru(e[1]))),
          !0
        );
    },
    Gr,
    Rt = (function () {
      var t = Date.now,
        e = 500,
        n = 33,
        i = t(),
        r = i,
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
          var y = t() - r,
            v = g === !0,
            _,
            x,
            S,
            C;
          if (
            ((y > e || y < 0) && (i += y - n),
            (r += y),
            (S = r - i),
            (_ = S - a),
            (_ > 0 || v) &&
              ((C = ++f.frame),
              (d = S - f.time * 1e3),
              (f.time = S = S / 1e3),
              (a += _ + (_ >= s ? 4 : s - _)),
              (x = 1)),
            v || (l = c(p)),
            x)
          )
            for (h = 0; h < o.length; h++) o[h](S, d, C, g);
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
            Oc &&
              (!ho &&
                co() &&
                ((hn = ho = window),
                (po = hn.document || {}),
                (Lt.gsap = Ct),
                (hn.gsapVersions || (hn.gsapVersions = [])).push(Ct.version),
                Ac(qs || hn.GreenSockGlobals || (!hn.gsap && hn) || {}),
                tu.forEach(nu)),
              (u =
                typeof requestAnimationFrame != "undefined" &&
                requestAnimationFrame),
              l && f.sleep(),
              (c =
                u ||
                function (g) {
                  return setTimeout(g, (a - f.time * 1e3 + 1) | 0);
                }),
              (Gr = 1),
              m(2));
          },
          sleep: function () {
            (u ? cancelAnimationFrame : clearTimeout)(l), (Gr = 0), (c = Br);
          },
          lagSmoothing: function (g, y) {
            (e = g || 1 / 0), (n = Math.min(y || 33, e));
          },
          fps: function (g) {
            (s = 1e3 / (g || 240)), (a = f.time * 1e3 + s);
          },
          add: function (g, y, v) {
            var _ = y
              ? function (x, S, C, w) {
                  g(x, S, C, w), f.remove(_);
                }
              : g;
            return f.remove(g), o[v ? "unshift" : "push"](_), sr(), _;
          },
          remove: function (g, y) {
            ~(y = o.indexOf(g)) && o.splice(y, 1) && h >= y && h--;
          },
          _listeners: o,
        }),
        f
      );
    })(),
    sr = function () {
      return !Gr && Rt.wake();
    },
    oe = {},
    og = /^[\d.\-M][\d.\-,\s]/,
    lg = /["']/g,
    cg = function (e) {
      for (
        var n = {},
          i = e.substr(1, e.length - 3).split(":"),
          r = i[0],
          s = 1,
          a = i.length,
          o,
          l,
          c;
        s < a;
        s++
      )
        (l = i[s]),
          (o = s !== a - 1 ? l.lastIndexOf(",") : l.length),
          (c = l.substr(0, o)),
          (n[r] = isNaN(c) ? c.replace(lg, "").trim() : +c),
          (r = l.substr(o + 1).trim());
      return n;
    },
    ug = function (e) {
      var n = e.indexOf("(") + 1,
        i = e.indexOf(")"),
        r = e.indexOf("(", n);
      return e.substring(n, ~r && r < i ? e.indexOf(")", i + 1) : i);
    },
    fg = function (e) {
      var n = (e + "").split("("),
        i = oe[n[0]];
      return i && n.length > 1 && i.config
        ? i.config.apply(
            null,
            ~e.indexOf("{") ? [cg(n[1])] : ug(e).split(",").map(Nc)
          )
        : oe._CE && og.test(e)
        ? oe._CE("", e)
        : i;
    },
    ou = function (e) {
      return function (n) {
        return 1 - e(1 - n);
      };
    },
    lu = function t(e, n) {
      for (var i = e._first, r; i; )
        i instanceof mt
          ? t(i, n)
          : i.vars.yoyoEase &&
            (!i._yoyo || !i._repeat) &&
            i._yoyo !== n &&
            (i.timeline
              ? t(i.timeline, n)
              : ((r = i._ease),
                (i._ease = i._yEase),
                (i._yEase = r),
                (i._yoyo = n))),
          (i = i._next);
    },
    yi = function (e, n) {
      return (e && (Me(e) ? e : oe[e] || fg(e))) || n;
    },
    _i = function (e, n, i, r) {
      i === void 0 &&
        (i = function (l) {
          return 1 - n(1 - l);
        }),
        r === void 0 &&
          (r = function (l) {
            return l < 0.5 ? n(l * 2) / 2 : 1 - n((1 - l) * 2) / 2;
          });
      var s = { easeIn: n, easeOut: i, easeInOut: r },
        a;
      return (
        Et(e, function (o) {
          (oe[o] = Lt[o] = s), (oe[(a = o.toLowerCase())] = i);
          for (var l in s)
            oe[
              a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = oe[o + "." + l] = s[l];
        }),
        s
      );
    },
    cu = function (e) {
      return function (n) {
        return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2;
      };
    },
    ko = function t(e, n, i) {
      var r = n >= 1 ? n : 1,
        s = (i || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
        a = (s / oo) * (Math.asin(1 / r) || 0),
        o = function (u) {
          return u === 1 ? 1 : r * Math.pow(2, -10 * u) * Fm((u - a) * s) + 1;
        },
        l =
          e === "out"
            ? o
            : e === "in"
            ? function (c) {
                return 1 - o(1 - c);
              }
            : cu(o);
      return (
        (s = oo / s),
        (l.config = function (c, u) {
          return t(e, c, u);
        }),
        l
      );
    },
    Mo = function t(e, n) {
      n === void 0 && (n = 1.70158);
      var i = function (a) {
          return a ? --a * a * ((n + 1) * a + n) + 1 : 0;
        },
        r =
          e === "out"
            ? i
            : e === "in"
            ? function (s) {
                return 1 - i(1 - s);
              }
            : cu(i);
      return (
        (r.config = function (s) {
          return t(e, s);
        }),
        r
      );
    };
  Et("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var n = e < 5 ? e + 1 : e;
    _i(
      t + ",Power" + (n - 1),
      e
        ? function (i) {
            return Math.pow(i, n);
          }
        : function (i) {
            return i;
          },
      function (i) {
        return 1 - Math.pow(1 - i, n);
      },
      function (i) {
        return i < 0.5
          ? Math.pow(i * 2, n) / 2
          : 1 - Math.pow((1 - i) * 2, n) / 2;
      }
    );
  }),
    (oe.Linear.easeNone = oe.none = oe.Linear.easeIn),
    _i("Elastic", ko("in"), ko("out"), ko()),
    (function (t, e) {
      var n = 1 / e,
        i = 2 * n,
        r = 2.5 * n,
        s = function (o) {
          return o < n
            ? t * o * o
            : o < i
            ? t * Math.pow(o - 1.5 / e, 2) + 0.75
            : o < r
            ? t * (o -= 2.25 / e) * o + 0.9375
            : t * Math.pow(o - 2.625 / e, 2) + 0.984375;
        };
      _i(
        "Bounce",
        function (a) {
          return 1 - s(1 - a);
        },
        s
      );
    })(7.5625, 2.75),
    _i("Expo", function (t) {
      return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t);
    }),
    _i("Circ", function (t) {
      return -(Cc(1 - t * t) - 1);
    }),
    _i("Sine", function (t) {
      return t === 1 ? 1 : -Nm(t * zm) + 1;
    }),
    _i("Back", Mo("in"), Mo("out"), Mo()),
    (oe.SteppedEase =
      oe.steps =
      Lt.SteppedEase =
        {
          config: function (e, n) {
            e === void 0 && (e = 1);
            var i = 1 / e,
              r = e + (n ? 0 : 1),
              s = n ? 1 : 0,
              a = 1 - rt;
            return function (o) {
              return (((r * Vr(0, a, o)) | 0) + s) * i;
            };
          },
        }),
    (Qi.ease = oe["quad.out"]),
    Et(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (_o += t + "," + t + "Params,");
      }
    );
  var uu = function (e, n) {
      (this.id = Rm++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = n),
        (this.get = n ? n.get : zc),
        (this.set = n ? n.getSetter : Io);
    },
    jr = (function () {
      function t(n) {
        (this.vars = n),
          (this._delay = +n.delay || 0),
          (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
            ((this._rDelay = n.repeatDelay || 0),
            (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
          (this._ts = 1),
          ir(this, +n.duration, 1, 1),
          (this.data = n.data),
          Se && ((this._ctx = Se), Se.data.push(this)),
          Gr || Rt.wake();
      }
      var e = t.prototype;
      return (
        (e.delay = function (i) {
          return i || i === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + i - this._delay),
              (this._delay = i),
              this)
            : this._delay;
        }),
        (e.duration = function (i) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (i) {
          return arguments.length
            ? ((this._dirty = 0),
              ir(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (i, r) {
          if ((sr(), !arguments.length)) return this._tTime;
          var s = this._dp;
          if (s && s.smoothChildTiming && this._ts) {
            for (
              Us(this, i), !s._dp || s.parent || Vc(s, this);
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
              ((this._ts > 0 && i < this._tDur) ||
                (this._ts < 0 && i > 0) ||
                (!this._tDur && !i)) &&
              pn(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== i ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === rt) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), Rc(this, i, r)),
            this
          );
        }),
        (e.time = function (i, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + Hc(this)) %
                  (this._dur + this._rDelay) || (i ? this._dur : 0),
                r
              )
            : this._time;
        }),
        (e.totalProgress = function (i, r) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * i, r)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
            ? 1
            : 0;
        }),
        (e.progress = function (i, r) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                  Hc(this),
                r
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (e.iteration = function (i, r) {
          var s = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (i - 1) * s, r)
            : this._repeat
            ? nr(this._tTime, s) + 1
            : 1;
        }),
        (e.timeScale = function (i, r) {
          if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
          if (this._rts === i) return this;
          var s =
            this.parent && this._ts ? Gs(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -1e-8 ? 0 : this._rts),
            this.totalTime(
              Vr(-Math.abs(this._delay), this.totalDuration(), s),
              r !== !1
            ),
            js(this),
            Ym(this)
          );
        }),
        (e.paused = function (i) {
          return arguments.length
            ? (this._ps !== i &&
                ((this._ps = i),
                i
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (sr(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== rt &&
                        (this._tTime -= rt)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (i) {
          if (arguments.length) {
            this._start = i;
            var r = this.parent || this._dp;
            return (
              r && (r._sort || !this.parent) && pn(r, this, i - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (i) {
          return (
            this._start +
            (Tt(i) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (e.rawTime = function (i) {
          var r = this.parent || this._dp;
          return r
            ? i &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? Gs(r.rawTime(i), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (i) {
          i === void 0 && (i = Hm);
          var r = et;
          return (
            (et = i),
            xo(this) &&
              (this.timeline && this.timeline.revert(i),
              this.totalTime(-0.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
            (et = r),
            this
          );
        }),
        (e.globalTime = function (i) {
          for (var r = this, s = arguments.length ? i : r.rawTime(); r; )
            (s = r._start + s / (Math.abs(r._ts) || 1)), (r = r._dp);
          return !this.parent && this._sat ? this._sat.globalTime(i) : s;
        }),
        (e.repeat = function (i) {
          return arguments.length
            ? ((this._repeat = i === 1 / 0 ? -2 : i), Yc(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (i) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = i), Yc(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (e.seek = function (i, r) {
          return this.totalTime(Xt(this, i), Tt(r));
        }),
        (e.restart = function (i, r) {
          return (
            this.play().totalTime(i ? -this._delay : 0, Tt(r)),
            this._dur || (this._zTime = -1e-8),
            this
          );
        }),
        (e.play = function (i, r) {
          return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (i, r) {
          return (
            i != null && this.seek(i || this.totalDuration(), r),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (i, r) {
          return i != null && this.seek(i, r), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (i) {
          return arguments.length
            ? (!!i !== this.reversed() &&
                this.timeScale(-this._rts || (i ? -1e-8 : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
        }),
        (e.isActive = function () {
          var i = this.parent || this._dp,
            r = this._start,
            s;
          return !!(
            !i ||
            (this._ts &&
              this._initted &&
              i.isActive() &&
              (s = i.rawTime(!0)) >= r &&
              s < this.endTime(!0) - rt)
          );
        }),
        (e.eventCallback = function (i, r, s) {
          var a = this.vars;
          return arguments.length > 1
            ? (r
                ? ((a[i] = r),
                  s && (a[i + "Params"] = s),
                  i === "onUpdate" && (this._onUpdate = r))
                : delete a[i],
              this)
            : a[i];
        }),
        (e.then = function (i) {
          var r = this;
          return new Promise(function (s) {
            var a = Me(i) ? i : Fc,
              o = function () {
                var c = r.then;
                (r.then = null),
                  Me(a) && (a = a(r)) && (a.then || a === r) && (r.then = c),
                  s(a),
                  (r.then = c);
              };
            (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
            (!r._tTime && r._ts < 0)
              ? o()
              : (r._prom = o);
          });
        }),
        (e.kill = function () {
          Xr(this);
        }),
        t
      );
    })();
  Dt(jr.prototype, {
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
    wc(e, t);
    function e(i, r) {
      var s;
      return (
        i === void 0 && (i = {}),
        (s = t.call(this, i) || this),
        (s.labels = {}),
        (s.smoothChildTiming = !!i.smoothChildTiming),
        (s.autoRemoveChildren = !!i.autoRemoveChildren),
        (s._sort = Tt(i.sortChildren)),
        Ee && pn(i.parent || Ee, kn(s), r),
        i.reversed && s.reverse(),
        i.paused && s.paused(!0),
        i.scrollTrigger && Wc(kn(s), i.scrollTrigger),
        s
      );
    }
    var n = e.prototype;
    return (
      (n.to = function (r, s, a) {
        return Hr(0, arguments, this), this;
      }),
      (n.from = function (r, s, a) {
        return Hr(1, arguments, this), this;
      }),
      (n.fromTo = function (r, s, a, o) {
        return Hr(2, arguments, this), this;
      }),
      (n.set = function (r, s, a) {
        return (
          (s.duration = 0),
          (s.parent = this),
          qr(s).repeatDelay || (s.repeat = 0),
          (s.immediateRender = !!s.immediateRender),
          new qe(r, s, Xt(this, a), 1),
          this
        );
      }),
      (n.call = function (r, s, a) {
        return pn(this, qe.delayedCall(0, r, s), a);
      }),
      (n.staggerTo = function (r, s, a, o, l, c, u) {
        return (
          (a.duration = s),
          (a.stagger = a.stagger || o),
          (a.onComplete = c),
          (a.onCompleteParams = u),
          (a.parent = this),
          new qe(r, a, Xt(this, l)),
          this
        );
      }),
      (n.staggerFrom = function (r, s, a, o, l, c, u) {
        return (
          (a.runBackwards = 1),
          (qr(a).immediateRender = Tt(a.immediateRender)),
          this.staggerTo(r, s, a, o, l, c, u)
        );
      }),
      (n.staggerFromTo = function (r, s, a, o, l, c, u, f) {
        return (
          (o.startAt = a),
          (qr(o).immediateRender = Tt(o.immediateRender)),
          this.staggerTo(r, s, o, l, c, u, f)
        );
      }),
      (n.render = function (r, s, a) {
        var o = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          c = this._dur,
          u = r <= 0 ? 0 : Be(r),
          f = this._zTime < 0 != r < 0 && (this._initted || !c),
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
          C,
          w;
        if (
          (this !== Ee && u > l && r >= 0 && (u = l),
          u !== this._tTime || a || f)
        ) {
          if (
            (o !== this._time &&
              c &&
              ((u += this._time - o), (r += this._time - o)),
            (d = u),
            (x = this._start),
            (_ = this._ts),
            (y = !_),
            f && (c || (o = this._zTime), (r || !s) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((C = this._yoyo),
              (g = c + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(g * 100 + r, s, a);
            if (
              ((d = Be(u % g)),
              u === l
                ? ((p = this._repeat), (d = c))
                : ((S = Be(u / g)),
                  (p = ~~S),
                  p && p === S && ((d = c), p--),
                  d > c && (d = c)),
              (S = nr(this._tTime, g)),
              !o &&
                this._tTime &&
                S !== p &&
                this._tTime - S * g - this._dur <= 0 &&
                (S = p),
              C && p & 1 && ((d = c - d), (w = 1)),
              p !== S && !this._lock)
            ) {
              var P = C && S & 1,
                A = P === (C && p & 1);
              if (
                (p < S && (P = !P),
                (o = P ? 0 : u % c ? c : u),
                (this._lock = 1),
                (this.render(o || (w ? 0 : Be(p * g)), s, !c)._lock = 0),
                (this._tTime = u),
                !s && this.parent && zt(this, "onRepeat"),
                this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1),
                (o && o !== this._time) ||
                  y !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((c = this._dur),
                (l = this._tDur),
                A &&
                  ((this._lock = 2),
                  (o = P ? c : -1e-4),
                  this.render(o, !0),
                  this.vars.repeatRefresh && !w && this.invalidate()),
                (this._lock = 0),
                !this._ts && !y)
              )
                return this;
              lu(this, w);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((v = Km(this, Be(o), Be(d))), v && (u -= d - (d = v._start))),
            (this._tTime = u),
            (this._time = d),
            (this._act = !_),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (o = 0)),
            !o && u && !s && !S && (zt(this, "onStart"), this._tTime !== u))
          )
            return this;
          if (d >= o && r >= 0)
            for (h = this._first; h; ) {
              if (
                ((m = h._next), (h._act || d >= h._start) && h._ts && v !== h)
              ) {
                if (h.parent !== this) return this.render(r, s, a);
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
            for (var E = r < 0 ? r : d; h; ) {
              if (
                ((m = h._prev), (h._act || E <= h._end) && h._ts && v !== h)
              ) {
                if (h.parent !== this) return this.render(r, s, a);
                if (
                  (h.render(
                    h._ts > 0
                      ? (E - h._start) * h._ts
                      : (h._dirty ? h.totalDuration() : h._tDur) +
                          (E - h._start) * h._ts,
                    s,
                    a || (et && xo(h))
                  ),
                  d !== this._time || (!this._ts && !y))
                ) {
                  (v = 0), m && (u += this._zTime = E ? -1e-8 : rt);
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
            return (this._start = x), js(this), this.render(r, s, a);
          this._onUpdate && !s && zt(this, "onUpdate", !0),
            ((u === l && this._tTime >= this.totalDuration()) || (!u && o)) &&
              (x === this._start || Math.abs(_) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !c) &&
                  ((u === l && this._ts > 0) || (!u && this._ts < 0)) &&
                  Wn(this, 1),
                !s &&
                  !(r < 0 && !o) &&
                  (u || o || !l) &&
                  (zt(
                    this,
                    u === l && r >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(u < l && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (n.add = function (r, s) {
        var a = this;
        if ((Mn(s) || (s = Xt(this, s, r)), !(r instanceof jr))) {
          if (st(r))
            return (
              r.forEach(function (o) {
                return a.add(o, s);
              }),
              this
            );
          if (je(r)) return this.addLabel(r, s);
          if (Me(r)) r = qe.delayedCall(0, r);
          else return this;
        }
        return this !== r ? pn(this, r, s) : this;
      }),
      (n.getChildren = function (r, s, a, o) {
        r === void 0 && (r = !0),
          s === void 0 && (s = !0),
          a === void 0 && (a = !0),
          o === void 0 && (o = -1e8);
        for (var l = [], c = this._first; c; )
          c._start >= o &&
            (c instanceof qe
              ? s && l.push(c)
              : (a && l.push(c),
                r && l.push.apply(l, c.getChildren(!0, s, a)))),
            (c = c._next);
        return l;
      }),
      (n.getById = function (r) {
        for (var s = this.getChildren(1, 1, 1), a = s.length; a--; )
          if (s[a].vars.id === r) return s[a];
      }),
      (n.remove = function (r) {
        return je(r)
          ? this.removeLabel(r)
          : Me(r)
          ? this.killTweensOf(r)
          : (r.parent === this && Ys(this, r),
            r === this._recent && (this._recent = this._last),
            vi(this));
      }),
      (n.totalTime = function (r, s) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Be(
                Rt.time -
                  (this._ts > 0
                    ? r / this._ts
                    : (this.totalDuration() - r) / -this._ts)
              )),
            t.prototype.totalTime.call(this, r, s),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (n.addLabel = function (r, s) {
        return (this.labels[r] = Xt(this, s)), this;
      }),
      (n.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (n.addPause = function (r, s, a) {
        var o = qe.delayedCall(0, s || Br, a);
        return (
          (o.data = "isPause"), (this._hasPause = 1), pn(this, o, Xt(this, r))
        );
      }),
      (n.removePause = function (r) {
        var s = this._first;
        for (r = Xt(this, r); s; )
          s._start === r && s.data === "isPause" && Wn(s), (s = s._next);
      }),
      (n.killTweensOf = function (r, s, a) {
        for (var o = this.getTweensOf(r, a), l = o.length; l--; )
          Gn !== o[l] && o[l].kill(r, s);
        return this;
      }),
      (n.getTweensOf = function (r, s) {
        for (var a = [], o = Yt(r), l = this._first, c = Mn(s), u; l; )
          l instanceof qe
            ? Vm(l._targets, o) &&
              (c
                ? (!Gn || (l._initted && l._ts)) &&
                  l.globalTime(0) <= s &&
                  l.globalTime(l.totalDuration()) > s
                : !s || l.isActive()) &&
              a.push(l)
            : (u = l.getTweensOf(o, s)).length && a.push.apply(a, u),
            (l = l._next);
        return a;
      }),
      (n.tweenTo = function (r, s) {
        s = s || {};
        var a = this,
          o = Xt(a, r),
          l = s,
          c = l.startAt,
          u = l.onStart,
          f = l.onStartParams,
          d = l.immediateRender,
          h,
          m = qe.to(
            a,
            Dt(
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
                  rt,
                onStart: function () {
                  if ((a.pause(), !h)) {
                    var g =
                      s.duration ||
                      Math.abs(
                        (o - (c && "time" in c ? c.time : a._time)) /
                          a.timeScale()
                      );
                    m._dur !== g && ir(m, g, 0, 1).render(m._time, !0, !0),
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
      (n.tweenFromTo = function (r, s, a) {
        return this.tweenTo(s, Dt({ startAt: { time: Xt(this, r) } }, a));
      }),
      (n.recent = function () {
        return this._recent;
      }),
      (n.nextLabel = function (r) {
        return r === void 0 && (r = this._time), eu(this, Xt(this, r));
      }),
      (n.previousLabel = function (r) {
        return r === void 0 && (r = this._time), eu(this, Xt(this, r), 1);
      }),
      (n.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + rt);
      }),
      (n.shiftChildren = function (r, s, a) {
        a === void 0 && (a = 0);
        for (var o = this._first, l = this.labels, c; o; )
          o._start >= a && ((o._start += r), (o._end += r)), (o = o._next);
        if (s) for (c in l) l[c] >= a && (l[c] += r);
        return vi(this);
      }),
      (n.invalidate = function (r) {
        var s = this._first;
        for (this._lock = 0; s; ) s.invalidate(r), (s = s._next);
        return t.prototype.invalidate.call(this, r);
      }),
      (n.clear = function (r) {
        r === void 0 && (r = !0);
        for (var s = this._first, a; s; )
          (a = s._next), this.remove(s), (s = a);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          r && (this.labels = {}),
          vi(this)
        );
      }),
      (n.totalDuration = function (r) {
        var s = 0,
          a = this,
          o = a._last,
          l = fn,
          c,
          u,
          f;
        if (arguments.length)
          return a.timeScale(
            (a._repeat < 0 ? a.duration() : a.totalDuration()) /
              (a.reversed() ? -r : r)
          );
        if (a._dirty) {
          for (f = a.parent; o; )
            (c = o._prev),
              o._dirty && o.totalDuration(),
              (u = o._start),
              u > l && a._sort && o._ts && !a._lock
                ? ((a._lock = 1), (pn(a, o, u - o._delay, 1)._lock = 0))
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
          ir(a, a === Ee && a._time > s ? a._time : s, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (e.updateRoot = function (r) {
        if ((Ee._ts && (Rc(Ee, Gs(r, Ee)), (Ic = Rt.frame)), Rt.frame >= Dc)) {
          Dc += At.autoSleep || 120;
          var s = Ee._first;
          if ((!s || !s._ts) && At.autoSleep && Rt._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || Rt.sleep();
          }
        }
      }),
      e
    );
  })(jr);
  Dt(mt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var dg = function (e, n, i, r, s, a, o) {
      var l = new wt(this._pt, e, n, 0, 1, gu, null, s),
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
        l.b = i,
          l.e = r,
          i += "",
          r += "",
          (y = ~r.indexOf("random(")) && (r = Wr(r)),
          a && ((v = [i, r]), a(v, e, n), (i = v[0]), (r = v[1])),
          d = i.match(fo) || [];
        (f = fo.exec(r));

      )
        (m = f[0]),
          (p = r.substring(c, f.index)),
          h ? (h = (h + 1) % 5) : p.substr(-5) === "rgba(" && (h = 1),
          m !== d[u++] &&
            ((g = parseFloat(d[u - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: p || u === 1 ? p : ",",
              s: g,
              c: m.charAt(1) === "=" ? er(g, m) - g : parseFloat(m) - g,
              m: h && h < 4 ? Math.round : 0,
            }),
            (c = fo.lastIndex));
      return (
        (l.c = c < r.length ? r.substring(c, r.length) : ""),
        (l.fp = o),
        (Mc.test(r) || y) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    $o = function (e, n, i, r, s, a, o, l, c, u) {
      Me(r) && (r = r(s || 0, e, a));
      var f = e[n],
        d =
          i !== "get"
            ? i
            : Me(f)
            ? c
              ? e[
                  n.indexOf("set") || !Me(e["get" + n.substr(3)])
                    ? n
                    : "get" + n.substr(3)
                ](c)
              : e[n]()
            : f,
        h = Me(f) ? (c ? vg : pu) : Lo,
        m;
      if (
        (je(r) &&
          (~r.indexOf("random(") && (r = Wr(r)),
          r.charAt(1) === "=" &&
            ((m = er(d, r) + (at(d) || 0)), (m || m === 0) && (r = m))),
        !u || d !== r || Oo)
      )
        return !isNaN(d * r) && r !== ""
          ? ((m = new wt(
              this._pt,
              e,
              n,
              +d || 0,
              r - (d || 0),
              typeof f == "boolean" ? _g : mu,
              0,
              h
            )),
            c && (m.fp = c),
            o && m.modifier(o, this, e),
            (this._pt = m))
          : (!f && !(n in e) && mo(n, r),
            dg.call(this, e, n, d, r, h, l || At.stringFilter, c));
    },
    hg = function (e, n, i, r, s) {
      if (
        (Me(e) && (e = Ur(e, s, n, i, r)),
        !dn(e) || (e.style && e.nodeType) || st(e) || Pc(e))
      )
        return je(e) ? Ur(e, s, n, i, r) : e;
      var a = {},
        o;
      for (o in e) a[o] = Ur(e[o], s, n, i, r);
      return a;
    },
    fu = function (e, n, i, r, s, a) {
      var o, l, c, u;
      if (
        It[e] &&
        (o = new It[e]()).init(
          s,
          o.rawVars ? n[e] : hg(n[e], r, s, a, i),
          i,
          r,
          a
        ) !== !1 &&
        ((i._pt = l = new wt(i._pt, s, e, 0, 1, o.render, o, 0, o.priority)),
        i !== rr)
      )
        for (c = i._ptLookup[i._targets.indexOf(s)], u = o._props.length; u--; )
          c[o._props[u]] = l;
      return o;
    },
    Gn,
    Oo,
    Ao = function t(e, n, i) {
      var r = e.vars,
        s = r.ease,
        a = r.startAt,
        o = r.immediateRender,
        l = r.lazy,
        c = r.onUpdate,
        u = r.runBackwards,
        f = r.yoyoEase,
        d = r.keyframes,
        h = r.autoRevert,
        m = e._dur,
        p = e._startAt,
        g = e._targets,
        y = e.parent,
        v = y && y.data === "nested" ? y.vars.targets : g,
        _ = e._overwrite === "auto" && !ao,
        x = e.timeline,
        S,
        C,
        w,
        P,
        A,
        E,
        M,
        b,
        T,
        O,
        L,
        k,
        I;
      if (
        (x && (!d || !s) && (s = "none"),
        (e._ease = yi(s, Qi.ease)),
        (e._yEase = f ? ou(yi(f === !0 ? s : f, Qi.ease)) : 0),
        f &&
          e._yoyo &&
          !e._repeat &&
          ((f = e._yEase), (e._yEase = e._ease), (e._ease = f)),
        (e._from = !x && !!r.runBackwards),
        !x || (d && !r.stagger))
      ) {
        if (
          ((b = g[0] ? gi(g[0]).harness : 0),
          (k = b && r[b.prop]),
          (S = Xs(r, go)),
          p &&
            (p._zTime < 0 && p.progress(1),
            n < 0 && u && o && !h
              ? p.render(-1, !0)
              : p.revert(u && m ? Hs : qm),
            (p._lazy = 0)),
          a)
        ) {
          if (
            (Wn(
              (e._startAt = qe.set(
                g,
                Dt(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: y,
                    immediateRender: !0,
                    lazy: !p && Tt(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      c &&
                      function () {
                        return zt(e, "onUpdate");
                      },
                    stagger: 0,
                  },
                  a
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            n < 0 && (et || (!o && !h)) && e._startAt.revert(Hs),
            o && m && n <= 0 && i <= 0)
          ) {
            n && (e._zTime = n);
            return;
          }
        } else if (u && m && !p) {
          if (
            (n && (o = !1),
            (w = Dt(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !p && Tt(l),
                immediateRender: o,
                stagger: 0,
                parent: y,
              },
              S
            )),
            k && (w[b.prop] = k),
            Wn((e._startAt = qe.set(g, w))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            n < 0 && (et ? e._startAt.revert(Hs) : e._startAt.render(-1, !0)),
            (e._zTime = n),
            !o)
          )
            t(e._startAt, rt, rt);
          else if (!n) return;
        }
        for (
          e._pt = e._ptCache = 0, l = (m && Tt(l)) || (l && !m), C = 0;
          C < g.length;
          C++
        ) {
          if (
            ((A = g[C]),
            (M = A._gsap || bo(g)[C]._gsap),
            (e._ptLookup[C] = O = {}),
            vo[M.id] && Vn.length && Ws(),
            (L = v === g ? C : v.indexOf(A)),
            b &&
              (T = new b()).init(A, k || S, e, L, v) !== !1 &&
              ((e._pt = P =
                new wt(e._pt, A, T.name, 0, 1, T.render, T, 0, T.priority)),
              T._props.forEach(function (D) {
                O[D] = P;
              }),
              T.priority && (E = 1)),
            !b || k)
          )
            for (w in S)
              It[w] && (T = fu(w, S, e, L, A, v))
                ? T.priority && (E = 1)
                : (O[w] = P =
                    $o.call(e, A, w, "get", S[w], L, v, 0, r.stringFilter));
          e._op && e._op[C] && e.kill(A, e._op[C]),
            _ &&
              e._pt &&
              ((Gn = e),
              Ee.killTweensOf(A, O, e.globalTime(n)),
              (I = !e.parent),
              (Gn = 0)),
            e._pt && l && (vo[M.id] = 1);
        }
        E && vu(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = c),
        (e._initted = (!e._op || e._pt) && !I),
        d && n <= 0 && x.render(fn, !0, !0);
    },
    pg = function (e, n, i, r, s, a, o, l) {
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
              (Oo = 1),
              (e.vars[n] = "+=0"),
              Ao(e, o),
              (Oo = 0),
              l ? Fr(n + " not eligible for reset") : 1
            );
          c.push(u);
        }
      for (h = c.length; h--; )
        (f = c[h]),
          (u = f._pt || f),
          (u.s = (r || r === 0) && !s ? r : u.s + (r || 0) + a * u.c),
          (u.c = i - u.s),
          f.e && (f.e = Oe(i) + at(f.e)),
          f.b && (f.b = u.s + at(f.b));
    },
    mg = function (e, n) {
      var i = e[0] ? gi(e[0]).harness : 0,
        r = i && i.aliases,
        s,
        a,
        o,
        l;
      if (!r) return n;
      s = tr({}, n);
      for (a in r)
        if (a in s)
          for (l = r[a].split(","), o = l.length; o--; ) s[l[o]] = s[a];
      return s;
    },
    gg = function (e, n, i, r) {
      var s = n.ease || r || "power1.inOut",
        a,
        o;
      if (st(n))
        (o = i[e] || (i[e] = [])),
          n.forEach(function (l, c) {
            return o.push({ t: (c / (n.length - 1)) * 100, v: l, e: s });
          });
      else
        for (a in n)
          (o = i[a] || (i[a] = [])),
            a === "ease" || o.push({ t: parseFloat(e), v: n[a], e: s });
    },
    Ur = function (e, n, i, r, s) {
      return Me(e)
        ? e.call(n, i, r, s)
        : je(e) && ~e.indexOf("random(")
        ? Wr(e)
        : e;
    },
    du = _o + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    hu = {};
  Et(du + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return (hu[t] = 1);
  });
  var qe = (function (t) {
    wc(e, t);
    function e(i, r, s, a) {
      var o;
      typeof r == "number" && ((s.duration = r), (r = s), (s = null)),
        (o = t.call(this, a ? r : qr(r)) || this);
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
        v = r.parent || Ee,
        _ = (st(i) || Pc(i) ? Mn(i[0]) : "length" in r) ? [i] : Yt(i),
        x,
        S,
        C,
        w,
        P,
        A,
        E,
        M;
      if (
        ((o._targets = _.length
          ? bo(_)
          : Fr(
              "GSAP target " + i + " not found. https://gsap.com",
              !At.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = h),
        m || d || Bs(c) || Bs(u))
      ) {
        if (
          ((r = o.vars),
          (x = o.timeline =
            new mt({
              data: "nested",
              defaults: p || {},
              targets: v && v.data === "nested" ? v.vars.targets : _,
            })),
          x.kill(),
          (x.parent = x._dp = kn(o)),
          (x._start = 0),
          d || Bs(c) || Bs(u))
        ) {
          if (((w = _.length), (E = d && Uc(d)), dn(d)))
            for (P in d) ~du.indexOf(P) && (M || (M = {}), (M[P] = d[P]));
          for (S = 0; S < w; S++)
            (C = Xs(r, hu)),
              (C.stagger = 0),
              y && (C.yoyoEase = y),
              M && tr(C, M),
              (A = _[S]),
              (C.duration = +Ur(c, kn(o), S, A, _)),
              (C.delay = (+Ur(u, kn(o), S, A, _) || 0) - o._delay),
              !d &&
                w === 1 &&
                C.delay &&
                ((o._delay = u = C.delay), (o._start += u), (C.delay = 0)),
              x.to(A, C, E ? E(S, A, _) : 0),
              (x._ease = oe.none);
          x.duration() ? (c = u = 0) : (o.timeline = 0);
        } else if (m) {
          qr(Dt(x.vars.defaults, { ease: "none" })),
            (x._ease = yi(m.ease || r.ease || "none"));
          var b = 0,
            T,
            O,
            L;
          if (st(m))
            m.forEach(function (k) {
              return x.to(_, k, ">");
            }),
              x.duration();
          else {
            C = {};
            for (P in m)
              P === "ease" || P === "easeEach" || gg(P, m[P], C, m.easeEach);
            for (P in C)
              for (
                T = C[P].sort(function (k, I) {
                  return k.t - I.t;
                }),
                  b = 0,
                  S = 0;
                S < T.length;
                S++
              )
                (O = T[S]),
                  (L = {
                    ease: O.e,
                    duration: ((O.t - (S ? T[S - 1].t : 0)) / 100) * c,
                  }),
                  (L[P] = O.v),
                  x.to(_, L, b),
                  (b += L.duration);
            x.duration() < c && x.to({}, { duration: c - x.duration() });
          }
        }
        c || o.duration((c = x.duration()));
      } else o.timeline = 0;
      return (
        h === !0 && !ao && ((Gn = kn(o)), Ee.killTweensOf(_), (Gn = 0)),
        pn(v, kn(o), s),
        r.reversed && o.reverse(),
        r.paused && o.paused(!0),
        (f ||
          (!c &&
            !m &&
            o._start === Be(v._time) &&
            Tt(f) &&
            Gm(kn(o)) &&
            v.data !== "nested")) &&
          ((o._tTime = -1e-8), o.render(Math.max(0, -u) || 0)),
        g && Wc(kn(o), g),
        o
      );
    }
    var n = e.prototype;
    return (
      (n.render = function (r, s, a) {
        var o = this._time,
          l = this._tDur,
          c = this._dur,
          u = r < 0,
          f = r > l - rt && !u ? l : r < rt ? 0 : r,
          d,
          h,
          m,
          p,
          g,
          y,
          v,
          _,
          x;
        if (!c) Um(this, r, s, a);
        else if (
          f !== this._tTime ||
          !r ||
          a ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== u) ||
          this._lazy
        ) {
          if (((d = f), (_ = this.timeline), this._repeat)) {
            if (((p = c + this._rDelay), this._repeat < -1 && u))
              return this.totalTime(p * 100 + r, s, a);
            if (
              ((d = Be(f % p)),
              f === l
                ? ((m = this._repeat), (d = c))
                : ((g = Be(f / p)),
                  (m = ~~g),
                  m && m === g ? ((d = c), m--) : d > c && (d = c)),
              (y = this._yoyo && m & 1),
              y && ((x = this._yEase), (d = c - d)),
              (g = nr(this._tTime, p)),
              d === o && !a && this._initted && m === g)
            )
              return (this._tTime = f), this;
            m !== g &&
              (_ && this._yEase && lu(_, y),
              this.vars.repeatRefresh &&
                !y &&
                !this._lock &&
                d !== p &&
                this._initted &&
                ((this._lock = a = 1),
                (this.render(Be(p * m), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Xc(this, u ? r : d, a, s, f)) return (this._tTime = 0), this;
            if (o !== this._time && !(a && this.vars.repeatRefresh && m !== g))
              return this;
            if (c !== this._dur) return this.render(r, s, a);
          }
          if (
            ((this._tTime = f),
            (this._time = d),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = v = (x || this._ease)(d / c)),
            this._from && (this.ratio = v = 1 - v),
            !o && f && !s && !g && (zt(this, "onStart"), this._tTime !== f))
          )
            return this;
          for (h = this._pt; h; ) h.r(v, h.d), (h = h._next);
          (_ && _.render(r < 0 ? r : _._dur * _._ease(d / this._dur), s, a)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !s &&
              (u && So(this, r, s, a), zt(this, "onUpdate")),
            this._repeat &&
              m !== g &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              zt(this, "onRepeat"),
            (f === this._tDur || !f) &&
              this._tTime === f &&
              (u && !this._onUpdate && So(this, r, !0, !0),
              (r || !c) &&
                ((f === this._tDur && this._ts > 0) || (!f && this._ts < 0)) &&
                Wn(this, 1),
              !s &&
                !(u && !o) &&
                (f || o || y) &&
                (zt(this, f === l ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(f < l && this.timeScale() > 0) &&
                  this._prom()));
        }
        return this;
      }),
      (n.targets = function () {
        return this._targets;
      }),
      (n.invalidate = function (r) {
        return (
          (!r || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(r),
          t.prototype.invalidate.call(this, r)
        );
      }),
      (n.resetTo = function (r, s, a, o, l) {
        Gr || Rt.wake(), this._ts || this.play();
        var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          u;
        return (
          this._initted || Ao(this, c),
          (u = this._ease(c / this._dur)),
          pg(this, r, s, a, o, u, c, l)
            ? this.resetTo(r, s, a, o, 1)
            : (Us(this, 0),
              this.parent ||
                qc(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (n.kill = function (r, s) {
        if ((s === void 0 && (s = "all"), !r && (!s || s === "all")))
          return (
            (this._lazy = this._pt = 0),
            this.parent
              ? Xr(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!et),
            this
          );
        if (this.timeline) {
          var a = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, s, Gn && Gn.vars.overwrite !== !0)
              ._first || Xr(this),
            this.parent &&
              a !== this.timeline.totalDuration() &&
              ir(this, (this._dur * this.timeline._tDur) / a, 0, 1),
            this
          );
        }
        var o = this._targets,
          l = r ? Yt(r) : o,
          c = this._ptLookup,
          u = this._pt,
          f,
          d,
          h,
          m,
          p,
          g,
          y;
        if ((!s || s === "all") && Xm(o, l))
          return s === "all" && (this._pt = 0), Xr(this);
        for (
          f = this._op = this._op || [],
            s !== "all" &&
              (je(s) &&
                ((p = {}),
                Et(s, function (v) {
                  return (p[v] = 1);
                }),
                (s = p)),
              (s = mg(o, s))),
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
                    Ys(this, g, "_pt"),
                  delete d[p]),
                h !== "all" && (h[p] = 1);
          }
        return this._initted && !this._pt && u && Xr(this), this;
      }),
      (e.to = function (r, s) {
        return new e(r, s, arguments[2]);
      }),
      (e.from = function (r, s) {
        return Hr(1, arguments);
      }),
      (e.delayedCall = function (r, s, a, o) {
        return new e(s, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: r,
          onComplete: s,
          onReverseComplete: s,
          onCompleteParams: a,
          onReverseCompleteParams: a,
          callbackScope: o,
        });
      }),
      (e.fromTo = function (r, s, a) {
        return Hr(2, arguments);
      }),
      (e.set = function (r, s) {
        return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(r, s);
      }),
      (e.killTweensOf = function (r, s, a) {
        return Ee.killTweensOf(r, s, a);
      }),
      e
    );
  })(jr);
  Dt(qe.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    Et("staggerTo,staggerFrom,staggerFromTo", function (t) {
      qe[t] = function () {
        var e = new mt(),
          n = Eo.call(arguments, 0);
        return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n);
      };
    });
  var Lo = function (e, n, i) {
      return (e[n] = i);
    },
    pu = function (e, n, i) {
      return e[n](i);
    },
    vg = function (e, n, i, r) {
      return e[n](r.fp, i);
    },
    yg = function (e, n, i) {
      return e.setAttribute(n, i);
    },
    Io = function (e, n) {
      return Me(e[n]) ? pu : lo(e[n]) && e.setAttribute ? yg : Lo;
    },
    mu = function (e, n) {
      return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n);
    },
    _g = function (e, n) {
      return n.set(n.t, n.p, !!(n.s + n.c * e), n);
    },
    gu = function (e, n) {
      var i = n._pt,
        r = "";
      if (!e && n.b) r = n.b;
      else if (e === 1 && n.e) r = n.e;
      else {
        for (; i; )
          (r =
            i.p +
            (i.m
              ? i.m(i.s + i.c * e)
              : Math.round((i.s + i.c * e) * 1e4) / 1e4) +
            r),
            (i = i._next);
        r += n.c;
      }
      n.set(n.t, n.p, r, n);
    },
    Do = function (e, n) {
      for (var i = n._pt; i; ) i.r(e, i.d), (i = i._next);
    },
    bg = function (e, n, i, r) {
      for (var s = this._pt, a; s; )
        (a = s._next), s.p === r && s.modifier(e, n, i), (s = a);
    },
    xg = function (e) {
      for (var n = this._pt, i, r; n; )
        (r = n._next),
          (n.p === e && !n.op) || n.op === e
            ? Ys(this, n, "_pt")
            : n.dep || (i = 1),
          (n = r);
      return !i;
    },
    Sg = function (e, n, i, r) {
      r.mSet(e, n, r.m.call(r.tween, i, r.mt), r);
    },
    vu = function (e) {
      for (var n = e._pt, i, r, s, a; n; ) {
        for (i = n._next, r = s; r && r.pr > n.pr; ) r = r._next;
        (n._prev = r ? r._prev : a) ? (n._prev._next = n) : (s = n),
          (n._next = r) ? (r._prev = n) : (a = n),
          (n = i);
      }
      e._pt = s;
    },
    wt = (function () {
      function t(n, i, r, s, a, o, l, c, u) {
        (this.t = i),
          (this.s = s),
          (this.c = a),
          (this.p = r),
          (this.r = o || mu),
          (this.d = l || this),
          (this.set = c || Lo),
          (this.pr = u || 0),
          (this._next = n),
          n && (n._prev = this);
      }
      var e = t.prototype;
      return (
        (e.modifier = function (i, r, s) {
          (this.mSet = this.mSet || this.set),
            (this.set = Sg),
            (this.m = i),
            (this.mt = s),
            (this.tween = r);
        }),
        t
      );
    })();
  Et(
    _o +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (go[t] = 1);
    }
  ),
    (Lt.TweenMax = Lt.TweenLite = qe),
    (Lt.TimelineLite = Lt.TimelineMax = mt),
    (Ee = new mt({
      sortChildren: !1,
      defaults: Qi,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (At.stringFilter = au);
  var bi = [],
    Ks = {},
    Tg = [],
    yu = 0,
    Eg = 0,
    zo = function (e) {
      return (Ks[e] || Tg).map(function (n) {
        return n();
      });
    },
    Ro = function () {
      var e = Date.now(),
        n = [];
      e - yu > 2 &&
        (zo("matchMediaInit"),
        bi.forEach(function (i) {
          var r = i.queries,
            s = i.conditions,
            a,
            o,
            l,
            c;
          for (o in r)
            (a = hn.matchMedia(r[o]).matches),
              a && (l = 1),
              a !== s[o] && ((s[o] = a), (c = 1));
          c && (i.revert(), l && n.push(i));
        }),
        zo("matchMediaRevert"),
        n.forEach(function (i) {
          return i.onMatch(i, function (r) {
            return i.add(null, r);
          });
        }),
        (yu = e),
        zo("matchMedia"));
    },
    _u = (function () {
      function t(n, i) {
        (this.selector = i && wo(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = Eg++),
          n && this.add(n);
      }
      var e = t.prototype;
      return (
        (e.add = function (i, r, s) {
          Me(i) && ((s = r), (r = i), (i = Me));
          var a = this,
            o = function () {
              var c = Se,
                u = a.selector,
                f;
              return (
                c && c !== a && c.data.push(a),
                s && (a.selector = wo(s)),
                (Se = a),
                (f = r.apply(a, arguments)),
                Me(f) && a._r.push(f),
                (Se = c),
                (a.selector = u),
                (a.isReverted = !1),
                f
              );
            };
          return (
            (a.last = o),
            i === Me
              ? o(a, function (l) {
                  return a.add(null, l);
                })
              : i
              ? (a[i] = o)
              : o
          );
        }),
        (e.ignore = function (i) {
          var r = Se;
          (Se = null), i(this), (Se = r);
        }),
        (e.getTweens = function () {
          var i = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof t
                ? i.push.apply(i, r.getTweens())
                : r instanceof qe &&
                    !(r.parent && r.parent.data === "nested") &&
                    i.push(r);
            }),
            i
          );
        }),
        (e.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (e.kill = function (i, r) {
          var s = this;
          if (
            (i
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
                        return u.t.revert(i);
                      }),
                      l = s.data.length;
                    l--;

                  )
                    (c = s.data[l]),
                      c instanceof mt
                        ? c.data !== "nested" &&
                          (c.scrollTrigger && c.scrollTrigger.revert(),
                          c.kill())
                        : !(c instanceof qe) && c.revert && c.revert(i);
                  s._r.forEach(function (u) {
                    return u(i, s);
                  }),
                    (s.isReverted = !0);
                })()
              : this.data.forEach(function (o) {
                  return o.kill && o.kill();
                }),
            this.clear(),
            r)
          )
            for (var a = bi.length; a--; )
              bi[a].id === this.id && bi.splice(a, 1);
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        t
      );
    })(),
    wg = (function () {
      function t(n) {
        (this.contexts = []), (this.scope = n), Se && Se.data.push(this);
      }
      var e = t.prototype;
      return (
        (e.add = function (i, r, s) {
          dn(i) || (i = { matches: i });
          var a = new _u(0, s || this.scope),
            o = (a.conditions = {}),
            l,
            c,
            u;
          Se && !a.selector && (a.selector = Se.selector),
            this.contexts.push(a),
            (r = a.add("onMatch", r)),
            (a.queries = i);
          for (c in i)
            c === "all"
              ? (u = 1)
              : ((l = hn.matchMedia(i[c])),
                l &&
                  (bi.indexOf(a) < 0 && bi.push(a),
                  (o[c] = l.matches) && (u = 1),
                  l.addListener
                    ? l.addListener(Ro)
                    : l.addEventListener("change", Ro)));
          return (
            u &&
              r(a, function (f) {
                return a.add(null, f);
              }),
            this
          );
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        (e.kill = function (i) {
          this.contexts.forEach(function (r) {
            return r.kill(i, !0);
          });
        }),
        t
      );
    })(),
    Zs = {
      registerPlugin: function () {
        for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
          n[i] = arguments[i];
        n.forEach(function (r) {
          return nu(r);
        });
      },
      timeline: function (e) {
        return new mt(e);
      },
      getTweensOf: function (e, n) {
        return Ee.getTweensOf(e, n);
      },
      getProperty: function (e, n, i, r) {
        je(e) && (e = Yt(e)[0]);
        var s = gi(e || {}).get,
          a = i ? Fc : Nc;
        return (
          i === "native" && (i = ""),
          e &&
            (n
              ? a(((It[n] && It[n].get) || s)(e, n, i, r))
              : function (o, l, c) {
                  return a(((It[o] && It[o].get) || s)(e, o, l, c));
                })
        );
      },
      quickSetter: function (e, n, i) {
        if (((e = Yt(e)), e.length > 1)) {
          var r = e.map(function (u) {
              return Ct.quickSetter(u, n, i);
            }),
            s = r.length;
          return function (u) {
            for (var f = s; f--; ) r[f](u);
          };
        }
        e = e[0] || {};
        var a = It[n],
          o = gi(e),
          l = (o.harness && (o.harness.aliases || {})[n]) || n,
          c = a
            ? function (u) {
                var f = new a();
                (rr._pt = 0),
                  f.init(e, i ? u + i : u, rr, 0, [e]),
                  f.render(1, f),
                  rr._pt && Do(1, rr);
              }
            : o.set(e, l);
        return a
          ? c
          : function (u) {
              return c(e, l, i ? u + i : u, o, 1);
            };
      },
      quickTo: function (e, n, i) {
        var r,
          s = Ct.to(
            e,
            Dt(
              ((r = {}), (r[n] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
              i || {}
            )
          ),
          a = function (l, c, u) {
            return s.resetTo(n, l, c, u);
          };
        return (a.tween = s), a;
      },
      isTweening: function (e) {
        return Ee.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = yi(e.ease, Qi.ease)), Bc(Qi, e || {});
      },
      config: function (e) {
        return Bc(At, e || {});
      },
      registerEffect: function (e) {
        var n = e.name,
          i = e.effect,
          r = e.plugins,
          s = e.defaults,
          a = e.extendTimeline;
        (r || "").split(",").forEach(function (o) {
          return (
            o &&
            !It[o] &&
            !Lt[o] &&
            Fr(n + " effect requires " + o + " plugin.")
          );
        }),
          (yo[n] = function (o, l, c) {
            return i(Yt(o), Dt(l || {}, s), c);
          }),
          a &&
            (mt.prototype[n] = function (o, l, c) {
              return this.add(yo[n](o, dn(l) ? l : (c = l) && {}, this), c);
            });
      },
      registerEase: function (e, n) {
        oe[e] = yi(n);
      },
      parseEase: function (e, n) {
        return arguments.length ? yi(e, n) : oe;
      },
      getById: function (e) {
        return Ee.getById(e);
      },
      exportRoot: function (e, n) {
        e === void 0 && (e = {});
        var i = new mt(e),
          r,
          s;
        for (
          i.smoothChildTiming = Tt(e.smoothChildTiming),
            Ee.remove(i),
            i._dp = 0,
            i._time = i._tTime = Ee._time,
            r = Ee._first;
          r;

        )
          (s = r._next),
            (n ||
              !(
                !r._dur &&
                r instanceof qe &&
                r.vars.onComplete === r._targets[0]
              )) &&
              pn(i, r, r._start - r._delay),
            (r = s);
        return pn(Ee, i, 0), i;
      },
      context: function (e, n) {
        return e ? new _u(e, n) : Se;
      },
      matchMedia: function (e) {
        return new wg(e);
      },
      matchMediaRefresh: function () {
        return (
          bi.forEach(function (e) {
            var n = e.conditions,
              i,
              r;
            for (r in n) n[r] && ((n[r] = !1), (i = 1));
            i && e.revert();
          }) || Ro()
        );
      },
      addEventListener: function (e, n) {
        var i = Ks[e] || (Ks[e] = []);
        ~i.indexOf(n) || i.push(n);
      },
      removeEventListener: function (e, n) {
        var i = Ks[e],
          r = i && i.indexOf(n);
        r >= 0 && i.splice(r, 1);
      },
      utils: {
        wrap: ig,
        wrapYoyo: rg,
        distribute: Uc,
        random: Zc,
        snap: Kc,
        normalize: ng,
        getUnit: at,
        clamp: Qm,
        splitColor: iu,
        toArray: Yt,
        selector: wo,
        mapRange: Jc,
        pipe: eg,
        unitize: tg,
        interpolate: sg,
        shuffle: jc,
      },
      install: Ac,
      effects: yo,
      ticker: Rt,
      updateRoot: mt.updateRoot,
      plugins: It,
      globalTimeline: Ee,
      core: {
        PropTween: wt,
        globals: Lc,
        Tween: qe,
        Timeline: mt,
        Animation: jr,
        getCache: gi,
        _removeLinkedListItem: Ys,
        reverting: function () {
          return et;
        },
        context: function (e) {
          return e && Se && (Se.data.push(e), (e._ctx = Se)), Se;
        },
        suppressOverwrites: function (e) {
          return (ao = e);
        },
      },
    };
  Et("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (Zs[t] = qe[t]);
  }),
    Rt.add(mt.updateRoot),
    (rr = Zs.to({}, { duration: 0 }));
  var Cg = function (e, n) {
      for (var i = e._pt; i && i.p !== n && i.op !== n && i.fp !== n; )
        i = i._next;
      return i;
    },
    Pg = function (e, n) {
      var i = e._targets,
        r,
        s,
        a;
      for (r in n)
        for (s = i.length; s--; )
          (a = e._ptLookup[s][r]),
            a &&
              (a = a.d) &&
              (a._pt && (a = Cg(a, r)),
              a && a.modifier && a.modifier(n[r], e, i[s], r));
    },
    No = function (e, n) {
      return {
        name: e,
        headless: 1,
        rawVars: 1,
        init: function (r, s, a) {
          a._onInit = function (o) {
            var l, c;
            if (
              (je(s) &&
                ((l = {}),
                Et(s, function (u) {
                  return (l[u] = 1);
                }),
                (s = l)),
              n)
            ) {
              l = {};
              for (c in s) l[c] = n(s[c]);
              s = l;
            }
            Pg(o, s);
          };
        },
      };
    },
    Ct =
      Zs.registerPlugin(
        {
          name: "attr",
          init: function (e, n, i, r, s) {
            var a, o, l;
            this.tween = i;
            for (a in n)
              (l = e.getAttribute(a) || ""),
                (o = this.add(
                  e,
                  "setAttribute",
                  (l || 0) + "",
                  n[a],
                  r,
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
            for (var i = n._pt; i; )
              et ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
          },
        },
        {
          name: "endArray",
          headless: 1,
          init: function (e, n) {
            for (var i = n.length; i--; )
              this.add(e, i, e[i] || 0, n[i], 0, 0, 0, 0, 0, 1);
          },
        },
        No("roundProps", Co),
        No("modifiers"),
        No("snap", Kc)
      ) || Zs;
  (qe.version = mt.version = Ct.version = "3.13.0"),
    (Oc = 1),
    co() && sr(),
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
   */ var bu,
    jn,
    ar,
    Fo,
    xi,
    xu,
    Bo,
    kg = function () {
      return typeof window != "undefined";
    },
    $n = {},
    Si = 180 / Math.PI,
    or = Math.PI / 180,
    lr = Math.atan2,
    Su = 1e8,
    qo = /([A-Z])/g,
    Mg = /(left|right|width|margin|padding|x)/i,
    $g = /[\s,\(]\S/,
    mn = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Ho = function (e, n) {
      return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
    },
    Og = function (e, n) {
      return n.set(
        n.t,
        n.p,
        e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u,
        n
      );
    },
    Ag = function (e, n) {
      return n.set(
        n.t,
        n.p,
        e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b,
        n
      );
    },
    Lg = function (e, n) {
      var i = n.s + n.c * e;
      n.set(n.t, n.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + n.u, n);
    },
    Tu = function (e, n) {
      return n.set(n.t, n.p, e ? n.e : n.b, n);
    },
    Eu = function (e, n) {
      return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n);
    },
    Ig = function (e, n, i) {
      return (e.style[n] = i);
    },
    Dg = function (e, n, i) {
      return e.style.setProperty(n, i);
    },
    zg = function (e, n, i) {
      return (e._gsap[n] = i);
    },
    Rg = function (e, n, i) {
      return (e._gsap.scaleX = e._gsap.scaleY = i);
    },
    Ng = function (e, n, i, r, s) {
      var a = e._gsap;
      (a.scaleX = a.scaleY = i), a.renderTransform(s, a);
    },
    Fg = function (e, n, i, r, s) {
      var a = e._gsap;
      (a[n] = i), a.renderTransform(s, a);
    },
    we = "transform",
    Pt = we + "Origin",
    Bg = function t(e, n) {
      var i = this,
        r = this.target,
        s = r.style,
        a = r._gsap;
      if (e in $n && s) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = mn[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (o) {
                  return (i.tfm[o] = On(r, o));
                })
              : (this.tfm[e] = a.x ? a[e] : On(r, e)),
            e === Pt && (this.tfm.zOrigin = a.zOrigin);
        else
          return mn.transform.split(",").forEach(function (o) {
            return t.call(i, o, n);
          });
        if (this.props.indexOf(we) >= 0) return;
        a.svg &&
          ((this.svgo = r.getAttribute("data-svg-origin")),
          this.props.push(Pt, n, "")),
          (e = we);
      }
      (s || n) && this.props.push(e, n, s[e]);
    },
    wu = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    qg = function () {
      var e = this.props,
        n = this.target,
        i = n.style,
        r = n._gsap,
        s,
        a;
      for (s = 0; s < e.length; s += 3)
        e[s + 1]
          ? e[s + 1] === 2
            ? n[e[s]](e[s + 2])
            : (n[e[s]] = e[s + 2])
          : e[s + 2]
          ? (i[e[s]] = e[s + 2])
          : i.removeProperty(
              e[s].substr(0, 2) === "--"
                ? e[s]
                : e[s].replace(qo, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (a in this.tfm) r[a] = this.tfm[a];
        r.svg &&
          (r.renderTransform(),
          n.setAttribute("data-svg-origin", this.svgo || "")),
          (s = Bo()),
          (!s || !s.isStart) &&
            !i[we] &&
            (wu(i),
            r.zOrigin &&
              i[Pt] &&
              ((i[Pt] += " " + r.zOrigin + "px"),
              (r.zOrigin = 0),
              r.renderTransform()),
            (r.uncache = 1));
      }
    },
    Cu = function (e, n) {
      var i = { target: e, props: [], revert: qg, save: Bg };
      return (
        e._gsap || Ct.core.getCache(e),
        n &&
          e.style &&
          e.nodeType &&
          n.split(",").forEach(function (r) {
            return i.save(r);
          }),
        i
      );
    },
    Pu,
    Vo = function (e, n) {
      var i = jn.createElementNS
        ? jn.createElementNS(
            (n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : jn.createElement(e);
      return i && i.style ? i : jn.createElement(e);
    },
    Gt = function t(e, n, i) {
      var r = getComputedStyle(e);
      return (
        r[n] ||
        r.getPropertyValue(n.replace(qo, "-$1").toLowerCase()) ||
        r.getPropertyValue(n) ||
        (!i && t(e, cr(n) || n, 1)) ||
        ""
      );
    },
    ku = "O,Moz,ms,Ms,Webkit".split(","),
    cr = function (e, n, i) {
      var r = n || xi,
        s = r.style,
        a = 5;
      if (e in s && !i) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        a-- && !(ku[a] + e in s);

      );
      return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? ku[a] : "") + e;
    },
    Wo = function () {
      kg() &&
        window.document &&
        ((bu = window),
        (jn = bu.document),
        (ar = jn.documentElement),
        (xi = Vo("div") || { style: {} }),
        Vo("div"),
        (we = cr(we)),
        (Pt = we + "Origin"),
        (xi.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Pu = !!cr("perspective")),
        (Bo = Ct.core.reverting),
        (Fo = 1));
    },
    Mu = function (e) {
      var n = e.ownerSVGElement,
        i = Vo(
          "svg",
          (n && n.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        r = e.cloneNode(!0),
        s;
      (r.style.display = "block"), i.appendChild(r), ar.appendChild(i);
      try {
        s = r.getBBox();
      } catch (a) {}
      return i.removeChild(r), ar.removeChild(i), s;
    },
    $u = function (e, n) {
      for (var i = n.length; i--; )
        if (e.hasAttribute(n[i])) return e.getAttribute(n[i]);
    },
    Ou = function (e) {
      var n, i;
      try {
        n = e.getBBox();
      } catch (r) {
        (n = Mu(e)), (i = 1);
      }
      return (
        (n && (n.width || n.height)) || i || (n = Mu(e)),
        n && !n.width && !n.x && !n.y
          ? {
              x: +$u(e, ["x", "cx", "x1"]) || 0,
              y: +$u(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : n
      );
    },
    Au = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Ou(e));
    },
    Ti = function (e, n) {
      if (n) {
        var i = e.style,
          r;
        n in $n && n !== Pt && (n = we),
          i.removeProperty
            ? ((r = n.substr(0, 2)),
              (r === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
              i.removeProperty(
                r === "--" ? n : n.replace(qo, "-$1").toLowerCase()
              ))
            : i.removeAttribute(n);
      }
    },
    Un = function (e, n, i, r, s, a) {
      var o = new wt(e._pt, n, i, 0, 1, a ? Eu : Tu);
      return (e._pt = o), (o.b = r), (o.e = s), e._props.push(i), o;
    },
    Lu = { deg: 1, rad: 1, turn: 1 },
    Hg = { grid: 1, flex: 1 },
    Kn = function t(e, n, i, r) {
      var s = parseFloat(i) || 0,
        a = (i + "").trim().substr((s + "").length) || "px",
        o = xi.style,
        l = Mg.test(n),
        c = e.tagName.toLowerCase() === "svg",
        u = (c ? "client" : "offset") + (l ? "Width" : "Height"),
        f = 100,
        d = r === "px",
        h = r === "%",
        m,
        p,
        g,
        y;
      if (r === a || !s || Lu[r] || Lu[a]) return s;
      if (
        (a !== "px" && !d && (s = t(e, n, i, "px")),
        (y = e.getCTM && Au(e)),
        (h || a === "%") && ($n[n] || ~n.indexOf("adius")))
      )
        return (
          (m = y ? e.getBBox()[l ? "width" : "height"] : e[u]),
          Oe(h ? (s / m) * f : (s / 100) * m)
        );
      if (
        ((o[l ? "width" : "height"] = f + (d ? a : r)),
        (p =
          (r !== "rem" && ~n.indexOf("adius")) ||
          (r === "em" && e.appendChild && !c)
            ? e
            : e.parentNode),
        y && (p = (e.ownerSVGElement || {}).parentNode),
        (!p || p === jn || !p.appendChild) && (p = jn.body),
        (g = p._gsap),
        g && h && g.width && l && g.time === Rt.time && !g.uncache)
      )
        return Oe((s / g.width) * f);
      if (h && (n === "height" || n === "width")) {
        var v = e.style[n];
        (e.style[n] = f + r), (m = e[u]), v ? (e.style[n] = v) : Ti(e, n);
      } else
        (h || a === "%") &&
          !Hg[Gt(p, "display")] &&
          (o.position = Gt(e, "position")),
          p === e && (o.position = "static"),
          p.appendChild(xi),
          (m = xi[u]),
          p.removeChild(xi),
          (o.position = "absolute");
      return (
        l && h && ((g = gi(p)), (g.time = Rt.time), (g.width = p[u])),
        Oe(d ? (m * s) / f : m && s ? (f / m) * s : 0)
      );
    },
    On = function (e, n, i, r) {
      var s;
      return (
        Fo || Wo(),
        n in mn &&
          n !== "transform" &&
          ((n = mn[n]), ~n.indexOf(",") && (n = n.split(",")[0])),
        $n[n] && n !== "transform"
          ? ((s = Zr(e, r)),
            (s =
              n !== "transformOrigin"
                ? s[n]
                : s.svg
                ? s.origin
                : Js(Gt(e, Pt)) + " " + s.zOrigin + "px"))
          : ((s = e.style[n]),
            (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) &&
              (s =
                (Qs[n] && Qs[n](e, n, i)) ||
                Gt(e, n) ||
                zc(e, n) ||
                (n === "opacity" ? 1 : 0))),
        i && !~(s + "").trim().indexOf(" ") ? Kn(e, n, s, i) + i : s
      );
    },
    Vg = function (e, n, i, r) {
      if (!i || i === "none") {
        var s = cr(n, e, 1),
          a = s && Gt(e, s, 1);
        a && a !== i
          ? ((n = s), (i = a))
          : n === "borderColor" && (i = Gt(e, "borderTopColor"));
      }
      var o = new wt(this._pt, e.style, n, 0, 1, gu),
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
        ((o.b = i),
        (o.e = r),
        (i += ""),
        (r += ""),
        r.substring(0, 6) === "var(--" &&
          (r = Gt(e, r.substring(4, r.indexOf(")")))),
        r === "auto" &&
          ((p = e.style[n]),
          (e.style[n] = r),
          (r = Gt(e, n) || r),
          p ? (e.style[n] = p) : Ti(e, n)),
        (u = [i, r]),
        au(u),
        (i = u[0]),
        (r = u[1]),
        (d = i.match(Ji) || []),
        (S = r.match(Ji) || []),
        S.length)
      ) {
        for (; (f = Ji.exec(r)); )
          (g = f[0]),
            (v = r.substring(l, f.index)),
            m
              ? (m = (m + 1) % 5)
              : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") &&
                (m = 1),
            g !== (p = d[c++] || "") &&
              ((h = parseFloat(p) || 0),
              (x = p.substr((h + "").length)),
              g.charAt(1) === "=" && (g = er(h, g) + x),
              (y = parseFloat(g)),
              (_ = g.substr((y + "").length)),
              (l = Ji.lastIndex - _.length),
              _ ||
                ((_ = _ || At.units[n] || x),
                l === r.length && ((r += _), (o.e += _))),
              x !== _ && (h = Kn(e, n, p, _) || 0),
              (o._pt = {
                _next: o._pt,
                p: v || c === 1 ? v : ",",
                s: h,
                c: y - h,
                m: (m && m < 4) || n === "zIndex" ? Math.round : 0,
              }));
        o.c = l < r.length ? r.substring(l, r.length) : "";
      } else o.r = n === "display" && r === "none" ? Eu : Tu;
      return Mc.test(r) && (o.e = 0), (this._pt = o), o;
    },
    Iu = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Wg = function (e) {
      var n = e.split(" "),
        i = n[0],
        r = n[1] || "50%";
      return (
        (i === "top" || i === "bottom" || r === "left" || r === "right") &&
          ((e = i), (i = r), (r = e)),
        (n[0] = Iu[i] || i),
        (n[1] = Iu[r] || r),
        n.join(" ")
      );
    },
    Xg = function (e, n) {
      if (n.tween && n.tween._time === n.tween._dur) {
        var i = n.t,
          r = i.style,
          s = n.u,
          a = i._gsap,
          o,
          l,
          c;
        if (s === "all" || s === !0) (r.cssText = ""), (l = 1);
        else
          for (s = s.split(","), c = s.length; --c > -1; )
            (o = s[c]),
              $n[o] && ((l = 1), (o = o === "transformOrigin" ? Pt : we)),
              Ti(i, o);
        l &&
          (Ti(i, we),
          a &&
            (a.svg && i.removeAttribute("transform"),
            (r.scale = r.rotate = r.translate = "none"),
            Zr(i, 1),
            (a.uncache = 1),
            wu(r)));
      }
    },
    Qs = {
      clearProps: function (e, n, i, r, s) {
        if (s.data !== "isFromStart") {
          var a = (e._pt = new wt(e._pt, n, i, 0, 0, Xg));
          return (a.u = r), (a.pr = -10), (a.tween = s), e._props.push(i), 1;
        }
      },
    },
    Kr = [1, 0, 0, 1, 0, 0],
    Du = {},
    zu = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    Ru = function (e) {
      var n = Gt(e, we);
      return zu(n) ? Kr : n.substr(7).match(kc).map(Oe);
    },
    Xo = function (e, n) {
      var i = e._gsap || gi(e),
        r = e.style,
        s = Ru(e),
        a,
        o,
        l,
        c;
      return i.svg && e.getAttribute("transform")
        ? ((l = e.transform.baseVal.consolidate().matrix),
          (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
          s.join(",") === "1,0,0,1,0,0" ? Kr : s)
        : (s === Kr &&
            !e.offsetParent &&
            e !== ar &&
            !i.svg &&
            ((l = r.display),
            (r.display = "block"),
            (a = e.parentNode),
            (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((c = 1), (o = e.nextElementSibling), ar.appendChild(e)),
            (s = Ru(e)),
            l ? (r.display = l) : Ti(e, "display"),
            c &&
              (o
                ? a.insertBefore(e, o)
                : a
                ? a.appendChild(e)
                : ar.removeChild(e))),
          n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    Yo = function (e, n, i, r, s, a) {
      var o = e._gsap,
        l = s || Xo(e, !0),
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
        C,
        w,
        P,
        A;
      i
        ? l !== Kr &&
          (w = h * g - m * p) &&
          ((P = x * (g / w) + S * (-p / w) + (p * v - g * y) / w),
          (A = x * (-m / w) + S * (h / w) - (h * v - m * y) / w),
          (x = P),
          (S = A))
        : ((C = Ou(e)),
          (x = C.x + (~_[0].indexOf("%") ? (x / 100) * C.width : x)),
          (S =
            C.y + (~(_[1] || _[0]).indexOf("%") ? (S / 100) * C.height : S))),
        r || (r !== !1 && o.smooth)
          ? ((y = x - c),
            (v = S - u),
            (o.xOffset = f + (y * h + v * p) - y),
            (o.yOffset = d + (y * m + v * g) - v))
          : (o.xOffset = o.yOffset = 0),
        (o.xOrigin = x),
        (o.yOrigin = S),
        (o.smooth = !!r),
        (o.origin = n),
        (o.originIsAbsolute = !!i),
        (e.style[Pt] = "0px 0px"),
        a &&
          (Un(a, o, "xOrigin", c, x),
          Un(a, o, "yOrigin", u, S),
          Un(a, o, "xOffset", f, o.xOffset),
          Un(a, o, "yOffset", d, o.yOffset)),
        e.setAttribute("data-svg-origin", x + " " + S);
    },
    Zr = function (e, n) {
      var i = e._gsap || new uu(e);
      if ("x" in i && !n && !i.uncache) return i;
      var r = e.style,
        s = i.scaleX < 0,
        a = "px",
        o = "deg",
        l = getComputedStyle(e),
        c = Gt(e, Pt) || "0",
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
        C,
        w,
        P,
        A,
        E,
        M,
        b,
        T,
        O,
        L,
        k,
        I,
        D,
        N,
        $,
        H,
        Y,
        le,
        ie,
        K;
      return (
        (u = f = d = p = g = y = v = _ = x = 0),
        (h = m = 1),
        (i.svg = !!(e.getCTM && Au(e))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (r[we] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[we] !== "none" ? l[we] : "")),
          (r.scale = r.rotate = r.translate = "none")),
        (w = Xo(e, i.svg)),
        i.svg &&
          (i.uncache
            ? ((D = e.getBBox()),
              (c = i.xOrigin - D.x + "px " + (i.yOrigin - D.y) + "px"),
              (I = ""))
            : (I = !n && e.getAttribute("data-svg-origin")),
          Yo(e, I || c, !!I || i.originIsAbsolute, i.smooth !== !1, w)),
        (S = i.xOrigin || 0),
        (C = i.yOrigin || 0),
        w !== Kr &&
          ((M = w[0]),
          (b = w[1]),
          (T = w[2]),
          (O = w[3]),
          (u = L = w[4]),
          (f = k = w[5]),
          w.length === 6
            ? ((h = Math.sqrt(M * M + b * b)),
              (m = Math.sqrt(O * O + T * T)),
              (p = M || b ? lr(b, M) * Si : 0),
              (v = T || O ? lr(T, O) * Si + p : 0),
              v && (m *= Math.abs(Math.cos(v * or))),
              i.svg && ((u -= S - (S * M + C * T)), (f -= C - (S * b + C * O))))
            : ((K = w[6]),
              (le = w[7]),
              ($ = w[8]),
              (H = w[9]),
              (Y = w[10]),
              (ie = w[11]),
              (u = w[12]),
              (f = w[13]),
              (d = w[14]),
              (P = lr(K, Y)),
              (g = P * Si),
              P &&
                ((A = Math.cos(-P)),
                (E = Math.sin(-P)),
                (I = L * A + $ * E),
                (D = k * A + H * E),
                (N = K * A + Y * E),
                ($ = L * -E + $ * A),
                (H = k * -E + H * A),
                (Y = K * -E + Y * A),
                (ie = le * -E + ie * A),
                (L = I),
                (k = D),
                (K = N)),
              (P = lr(-T, Y)),
              (y = P * Si),
              P &&
                ((A = Math.cos(-P)),
                (E = Math.sin(-P)),
                (I = M * A - $ * E),
                (D = b * A - H * E),
                (N = T * A - Y * E),
                (ie = O * E + ie * A),
                (M = I),
                (b = D),
                (T = N)),
              (P = lr(b, M)),
              (p = P * Si),
              P &&
                ((A = Math.cos(P)),
                (E = Math.sin(P)),
                (I = M * A + b * E),
                (D = L * A + k * E),
                (b = b * A - M * E),
                (k = k * A - L * E),
                (M = I),
                (L = D)),
              g &&
                Math.abs(g) + Math.abs(p) > 359.9 &&
                ((g = p = 0), (y = 180 - y)),
              (h = Oe(Math.sqrt(M * M + b * b + T * T))),
              (m = Oe(Math.sqrt(k * k + K * K))),
              (P = lr(L, k)),
              (v = Math.abs(P) > 2e-4 ? P * Si : 0),
              (x = ie ? 1 / (ie < 0 ? -ie : ie) : 0)),
          i.svg &&
            ((I = e.getAttribute("transform")),
            (i.forceCSS = e.setAttribute("transform", "") || !zu(Gt(e, we))),
            I && e.setAttribute("transform", I))),
        Math.abs(v) > 90 &&
          Math.abs(v) < 270 &&
          (s
            ? ((h *= -1),
              (v += p <= 0 ? 180 : -180),
              (p += p <= 0 ? 180 : -180))
            : ((m *= -1), (v += v <= 0 ? 180 : -180))),
        (n = n || i.uncache),
        (i.x =
          u -
          ((i.xPercent =
            u &&
            ((!n && i.xPercent) ||
              (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
            ? (e.offsetWidth * i.xPercent) / 100
            : 0) +
          a),
        (i.y =
          f -
          ((i.yPercent =
            f &&
            ((!n && i.yPercent) ||
              (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0)))
            ? (e.offsetHeight * i.yPercent) / 100
            : 0) +
          a),
        (i.z = d + a),
        (i.scaleX = Oe(h)),
        (i.scaleY = Oe(m)),
        (i.rotation = Oe(p) + o),
        (i.rotationX = Oe(g) + o),
        (i.rotationY = Oe(y) + o),
        (i.skewX = v + o),
        (i.skewY = _ + o),
        (i.transformPerspective = x + a),
        (i.zOrigin = parseFloat(c.split(" ")[2]) || (!n && i.zOrigin) || 0) &&
          (r[Pt] = Js(c)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = At.force3D),
        (i.renderTransform = i.svg ? Gg : Pu ? Nu : Yg),
        (i.uncache = 0),
        i
      );
    },
    Js = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    Go = function (e, n, i) {
      var r = at(n);
      return Oe(parseFloat(n) + parseFloat(Kn(e, "x", i + "px", r))) + r;
    },
    Yg = function (e, n) {
      (n.z = "0px"),
        (n.rotationY = n.rotationX = "0deg"),
        (n.force3D = 0),
        Nu(e, n);
    },
    Ei = "0deg",
    Qr = "0px",
    wi = ") ",
    Nu = function (e, n) {
      var i = n || this,
        r = i.xPercent,
        s = i.yPercent,
        a = i.x,
        o = i.y,
        l = i.z,
        c = i.rotation,
        u = i.rotationY,
        f = i.rotationX,
        d = i.skewX,
        h = i.skewY,
        m = i.scaleX,
        p = i.scaleY,
        g = i.transformPerspective,
        y = i.force3D,
        v = i.target,
        _ = i.zOrigin,
        x = "",
        S = (y === "auto" && e && e !== 1) || y === !0;
      if (_ && (f !== Ei || u !== Ei)) {
        var C = parseFloat(u) * or,
          w = Math.sin(C),
          P = Math.cos(C),
          A;
        (C = parseFloat(f) * or),
          (A = Math.cos(C)),
          (a = Go(v, a, w * A * -_)),
          (o = Go(v, o, -Math.sin(C) * -_)),
          (l = Go(v, l, P * A * -_ + _));
      }
      g !== Qr && (x += "perspective(" + g + wi),
        (r || s) && (x += "translate(" + r + "%, " + s + "%) "),
        (S || a !== Qr || o !== Qr || l !== Qr) &&
          (x +=
            l !== Qr || S
              ? "translate3d(" + a + ", " + o + ", " + l + ") "
              : "translate(" + a + ", " + o + wi),
        c !== Ei && (x += "rotate(" + c + wi),
        u !== Ei && (x += "rotateY(" + u + wi),
        f !== Ei && (x += "rotateX(" + f + wi),
        (d !== Ei || h !== Ei) && (x += "skew(" + d + ", " + h + wi),
        (m !== 1 || p !== 1) && (x += "scale(" + m + ", " + p + wi),
        (v.style[we] = x || "translate(0, 0)");
    },
    Gg = function (e, n) {
      var i = n || this,
        r = i.xPercent,
        s = i.yPercent,
        a = i.x,
        o = i.y,
        l = i.rotation,
        c = i.skewX,
        u = i.skewY,
        f = i.scaleX,
        d = i.scaleY,
        h = i.target,
        m = i.xOrigin,
        p = i.yOrigin,
        g = i.xOffset,
        y = i.yOffset,
        v = i.forceCSS,
        _ = parseFloat(a),
        x = parseFloat(o),
        S,
        C,
        w,
        P,
        A;
      (l = parseFloat(l)),
        (c = parseFloat(c)),
        (u = parseFloat(u)),
        u && ((u = parseFloat(u)), (c += u), (l += u)),
        l || c
          ? ((l *= or),
            (c *= or),
            (S = Math.cos(l) * f),
            (C = Math.sin(l) * f),
            (w = Math.sin(l - c) * -d),
            (P = Math.cos(l - c) * d),
            c &&
              ((u *= or),
              (A = Math.tan(c - u)),
              (A = Math.sqrt(1 + A * A)),
              (w *= A),
              (P *= A),
              u &&
                ((A = Math.tan(u)),
                (A = Math.sqrt(1 + A * A)),
                (S *= A),
                (C *= A))),
            (S = Oe(S)),
            (C = Oe(C)),
            (w = Oe(w)),
            (P = Oe(P)))
          : ((S = f), (P = d), (C = w = 0)),
        ((_ && !~(a + "").indexOf("px")) || (x && !~(o + "").indexOf("px"))) &&
          ((_ = Kn(h, "x", a, "px")), (x = Kn(h, "y", o, "px"))),
        (m || p || g || y) &&
          ((_ = Oe(_ + m - (m * S + p * w) + g)),
          (x = Oe(x + p - (m * C + p * P) + y))),
        (r || s) &&
          ((A = h.getBBox()),
          (_ = Oe(_ + (r / 100) * A.width)),
          (x = Oe(x + (s / 100) * A.height))),
        (A =
          "matrix(" +
          S +
          "," +
          C +
          "," +
          w +
          "," +
          P +
          "," +
          _ +
          "," +
          x +
          ")"),
        h.setAttribute("transform", A),
        v && (h.style[we] = A);
    },
    jg = function (e, n, i, r, s) {
      var a = 360,
        o = je(s),
        l = parseFloat(s) * (o && ~s.indexOf("rad") ? Si : 1),
        c = l - r,
        u = r + c + "deg",
        f,
        d;
      return (
        o &&
          ((f = s.split("_")[1]),
          f === "short" &&
            ((c %= a), c !== c % (a / 2) && (c += c < 0 ? a : -360)),
          f === "cw" && c < 0
            ? (c = ((c + a * Su) % a) - ~~(c / a) * a)
            : f === "ccw" && c > 0 && (c = ((c - a * Su) % a) - ~~(c / a) * a)),
        (e._pt = d = new wt(e._pt, n, i, r, c, Og)),
        (d.e = u),
        (d.u = "deg"),
        e._props.push(i),
        d
      );
    },
    Fu = function (e, n) {
      for (var i in n) e[i] = n[i];
      return e;
    },
    Ug = function (e, n, i) {
      var r = Fu({}, i._gsap),
        s = "perspective,force3D,transformOrigin,svgOrigin",
        a = i.style,
        o,
        l,
        c,
        u,
        f,
        d,
        h,
        m;
      r.svg
        ? ((c = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (a[we] = n),
          (o = Zr(i, 1)),
          Ti(i, we),
          i.setAttribute("transform", c))
        : ((c = getComputedStyle(i)[we]),
          (a[we] = n),
          (o = Zr(i, 1)),
          (a[we] = c));
      for (l in $n)
        (c = r[l]),
          (u = o[l]),
          c !== u &&
            s.indexOf(l) < 0 &&
            ((h = at(c)),
            (m = at(u)),
            (f = h !== m ? Kn(i, l, c, m) : parseFloat(c)),
            (d = parseFloat(u)),
            (e._pt = new wt(e._pt, o, l, f, d - f, Ho)),
            (e._pt.u = m || 0),
            e._props.push(l));
      Fu(o, r);
    };
  Et("padding,margin,Width,Radius", function (t, e) {
    var n = "Top",
      i = "Right",
      r = "Bottom",
      s = "Left",
      a = (e < 3 ? [n, i, r, s] : [n + s, n + i, r + i, r + s]).map(function (
        o
      ) {
        return e < 2 ? t + o : "border" + o + t;
      });
    Qs[e > 1 ? "border" + t : t] = function (o, l, c, u, f) {
      var d, h;
      if (arguments.length < 4)
        return (
          (d = a.map(function (m) {
            return On(o, m, c);
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
  var Bu = {
    name: "css",
    register: Wo,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, n, i, r, s) {
      var a = this._props,
        o = e.style,
        l = i.vars.startAt,
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
        C,
        w,
        P;
      Fo || Wo(),
        (this.styles = this.styles || Cu(e)),
        (P = this.styles.props),
        (this.tween = i);
      for (p in n)
        if (
          p !== "autoRound" &&
          ((u = n[p]), !(It[p] && fu(p, n, i, r, e, s)))
        ) {
          if (
            ((h = typeof u),
            (m = Qs[p]),
            h === "function" && ((u = u.call(i, r, e, s)), (h = typeof u)),
            h === "string" && ~u.indexOf("random(") && (u = Wr(u)),
            m)
          )
            m(this, e, p, u, i) && (w = 1);
          else if (p.substr(0, 2) === "--")
            (c = (getComputedStyle(e).getPropertyValue(p) + "").trim()),
              (u += ""),
              (Yn.lastIndex = 0),
              Yn.test(c) || ((g = at(c)), (y = at(u))),
              y ? g !== y && (c = Kn(e, p, c, y) + y) : g && (u += g),
              this.add(o, "setProperty", c, u, r, s, 0, 0, p),
              a.push(p),
              P.push(p, 0, o[p]);
          else if (h !== "undefined") {
            if (
              (l && p in l
                ? ((c =
                    typeof l[p] == "function" ? l[p].call(i, r, e, s) : l[p]),
                  je(c) && ~c.indexOf("random(") && (c = Wr(c)),
                  at(c + "") ||
                    c === "auto" ||
                    (c += At.units[p] || at(On(e, p)) || ""),
                  (c + "").charAt(1) === "=" && (c = On(e, p)))
                : (c = On(e, p)),
              (d = parseFloat(c)),
              (v = h === "string" && u.charAt(1) === "=" && u.substr(0, 2)),
              v && (u = u.substr(2)),
              (f = parseFloat(u)),
              p in mn &&
                (p === "autoAlpha" &&
                  (d === 1 && On(e, "visibility") === "hidden" && f && (d = 0),
                  P.push("visibility", 0, o.visibility),
                  Un(
                    this,
                    o,
                    "visibility",
                    d ? "inherit" : "hidden",
                    f ? "inherit" : "hidden",
                    !f
                  )),
                p !== "scale" &&
                  p !== "transform" &&
                  ((p = mn[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
              (_ = p in $n),
              _)
            ) {
              if (
                (this.styles.save(p),
                h === "string" &&
                  u.substring(0, 6) === "var(--" &&
                  ((u = Gt(e, u.substring(4, u.indexOf(")")))),
                  (f = parseFloat(u))),
                x ||
                  ((S = e._gsap),
                  (S.renderTransform && !n.parseTransform) ||
                    Zr(e, n.parseTransform),
                  (C = n.smoothOrigin !== !1 && S.smooth),
                  (x = this._pt =
                    new wt(this._pt, o, we, 0, 1, S.renderTransform, S, 0, -1)),
                  (x.dep = 1)),
                p === "scale")
              )
                (this._pt = new wt(
                  this._pt,
                  S,
                  "scaleY",
                  S.scaleY,
                  (v ? er(S.scaleY, v + f) : f) - S.scaleY || 0,
                  Ho
                )),
                  (this._pt.u = 0),
                  a.push("scaleY", p),
                  (p += "X");
              else if (p === "transformOrigin") {
                P.push(Pt, 0, o[Pt]),
                  (u = Wg(u)),
                  S.svg
                    ? Yo(e, u, 0, C, 0, this)
                    : ((y = parseFloat(u.split(" ")[2]) || 0),
                      y !== S.zOrigin && Un(this, S, "zOrigin", S.zOrigin, y),
                      Un(this, o, p, Js(c), Js(u)));
                continue;
              } else if (p === "svgOrigin") {
                Yo(e, u, 1, C, 0, this);
                continue;
              } else if (p in Du) {
                jg(this, S, p, d, v ? er(d, v + u) : u);
                continue;
              } else if (p === "smoothOrigin") {
                Un(this, S, "smooth", S.smooth, u);
                continue;
              } else if (p === "force3D") {
                S[p] = u;
                continue;
              } else if (p === "transform") {
                Ug(this, u, e);
                continue;
              }
            } else p in o || (p = cr(p) || p);
            if (
              _ ||
              ((f || f === 0) && (d || d === 0) && !$g.test(u) && p in o)
            )
              (g = (c + "").substr((d + "").length)),
                f || (f = 0),
                (y = at(u) || (p in At.units ? At.units[p] : g)),
                g !== y && (d = Kn(e, p, c, y)),
                (this._pt = new wt(
                  this._pt,
                  _ ? S : o,
                  p,
                  d,
                  (v ? er(d, v + f) : f) - d,
                  !_ && (y === "px" || p === "zIndex") && n.autoRound !== !1
                    ? Lg
                    : Ho
                )),
                (this._pt.u = y || 0),
                g !== y && y !== "%" && ((this._pt.b = c), (this._pt.r = Ag));
            else if (p in o) Vg.call(this, e, p, c, v ? v + u : u);
            else if (p in e) this.add(e, p, c || e[p], v ? v + u : u, r, s);
            else if (p !== "parseTransform") {
              mo(p, u);
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
      w && vu(this);
    },
    render: function (e, n) {
      if (n.tween._time || !Bo())
        for (var i = n._pt; i; ) i.r(e, i.d), (i = i._next);
      else n.styles.revert();
    },
    get: On,
    aliases: mn,
    getSetter: function (e, n, i) {
      var r = mn[n];
      return (
        r && r.indexOf(",") < 0 && (n = r),
        n in $n && n !== Pt && (e._gsap.x || On(e, "x"))
          ? i && xu === i
            ? n === "scale"
              ? Rg
              : zg
            : (xu = i || {}) && (n === "scale" ? Ng : Fg)
          : e.style && !lo(e.style[n])
          ? Ig
          : ~n.indexOf("-")
          ? Dg
          : Io(e, n)
      );
    },
    core: { _removeProperty: Ti, _getMatrix: Xo },
  };
  (Ct.utils.checkPrefix = cr),
    (Ct.core.getStyleSaver = Cu),
    (function (t, e, n, i) {
      var r = Et(t + "," + e + "," + n, function (s) {
        $n[s] = 1;
      });
      Et(e, function (s) {
        (At.units[s] = "deg"), (Du[s] = 1);
      }),
        (mn[r[13]] = t + "," + e),
        Et(i, function (s) {
          var a = s.split(":");
          mn[a[1]] = r[a[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    Et(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        At.units[t] = "px";
      }
    ),
    Ct.registerPlugin(Bu);
  var R = Ct.registerPlugin(Bu) || Ct;
  R.core.Tween;
  function Kg(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function Zg(t, e, n) {
    return e && Kg(t.prototype, e), t;
  }
  /*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var tt,
    ea,
    Nt,
    Zn,
    Qn,
    ur,
    qu,
    Ci,
    Jr,
    Hu,
    An,
    en,
    Vu,
    Wu = function () {
      return (
        tt ||
        (typeof window != "undefined" &&
          (tt = window.gsap) &&
          tt.registerPlugin &&
          tt)
      );
    },
    Xu = 1,
    fr = [],
    re = [],
    gn = [],
    es = Date.now,
    jo = function (e, n) {
      return n;
    },
    Qg = function () {
      var e = Jr.core,
        n = e.bridge || {},
        i = e._scrollers,
        r = e._proxies;
      i.push.apply(i, re),
        r.push.apply(r, gn),
        (re = i),
        (gn = r),
        (jo = function (a, o) {
          return n[a](o);
        });
    },
    Jn = function (e, n) {
      return ~gn.indexOf(e) && gn[gn.indexOf(e) + 1][n];
    },
    ts = function (e) {
      return !!~Hu.indexOf(e);
    },
    gt = function (e, n, i, r, s) {
      return e.addEventListener(n, i, { passive: r !== !1, capture: !!s });
    },
    vt = function (e, n, i, r) {
      return e.removeEventListener(n, i, !!r);
    },
    ta = "scrollLeft",
    na = "scrollTop",
    Uo = function () {
      return (An && An.isPressed) || re.cache++;
    },
    ia = function (e, n) {
      var i = function r(s) {
        if (s || s === 0) {
          Xu && (Nt.history.scrollRestoration = "manual");
          var a = An && An.isPressed;
          (s = r.v = Math.round(s) || (An && An.iOS ? 1 : 0)),
            e(s),
            (r.cacheID = re.cache),
            a && jo("ss", s);
        } else
          (n || re.cache !== r.cacheID || jo("ref")) &&
            ((r.cacheID = re.cache), (r.v = e()));
        return r.v + r.offset;
      };
      return (i.offset = 0), e && i;
    },
    yt = {
      s: ta,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: ia(function (t) {
        return arguments.length
          ? Nt.scrollTo(t, Xe.sc())
          : Nt.pageXOffset || Zn[ta] || Qn[ta] || ur[ta] || 0;
      }),
    },
    Xe = {
      s: na,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: yt,
      sc: ia(function (t) {
        return arguments.length
          ? Nt.scrollTo(yt.sc(), t)
          : Nt.pageYOffset || Zn[na] || Qn[na] || ur[na] || 0;
      }),
    },
    kt = function (e, n) {
      return (
        ((n && n._ctx && n._ctx.selector) || tt.utils.toArray)(e)[0] ||
        (typeof e == "string" && tt.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    Jg = function (e, n) {
      for (var i = n.length; i--; )
        if (n[i] === e || n[i].contains(e)) return !0;
      return !1;
    },
    ei = function (e, n) {
      var i = n.s,
        r = n.sc;
      ts(e) && (e = Zn.scrollingElement || Qn);
      var s = re.indexOf(e),
        a = r === Xe.sc ? 1 : 2;
      !~s && (s = re.push(e) - 1), re[s + a] || gt(e, "scroll", Uo);
      var o = re[s + a],
        l =
          o ||
          (re[s + a] =
            ia(Jn(e, i), !0) ||
            (ts(e)
              ? r
              : ia(function (c) {
                  return arguments.length ? (e[i] = c) : e[i];
                })));
      return (
        (l.target = e),
        o || (l.smooth = tt.getProperty(e, "scrollBehavior") === "smooth"),
        l
      );
    },
    Ko = function (e, n, i) {
      var r = e,
        s = e,
        a = es(),
        o = a,
        l = n || 50,
        c = Math.max(500, l * 3),
        u = function (m, p) {
          var g = es();
          p || g - a > l
            ? ((s = r), (r = m), (o = a), (a = g))
            : i
            ? (r += m)
            : (r = s + ((m - s) / (g - o)) * (a - o));
        },
        f = function () {
          (s = r = i ? 0 : r), (o = a = 0);
        },
        d = function (m) {
          var p = o,
            g = s,
            y = es();
          return (
            (m || m === 0) && m !== r && u(m),
            a === o || y - o > c
              ? 0
              : ((r + (i ? g : -g)) / ((i ? y : a) - p)) * 1e3
          );
        };
      return { update: u, reset: f, getVelocity: d };
    },
    ns = function (e, n) {
      return (
        n && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    Yu = function (e) {
      var n = Math.max.apply(Math, e),
        i = Math.min.apply(Math, e);
      return Math.abs(n) >= Math.abs(i) ? n : i;
    },
    Gu = function () {
      (Jr = tt.core.globals().ScrollTrigger), Jr && Jr.core && Qg();
    },
    ju = function (e) {
      return (
        (tt = e || Wu()),
        !ea &&
          tt &&
          typeof document != "undefined" &&
          document.body &&
          ((Nt = window),
          (Zn = document),
          (Qn = Zn.documentElement),
          (ur = Zn.body),
          (Hu = [Nt, Zn, Qn, ur]),
          tt.utils.clamp,
          (Vu = tt.core.context || function () {}),
          (Ci = "onpointerenter" in ur ? "pointer" : "mouse"),
          (qu = Ae.isTouch =
            Nt.matchMedia &&
            Nt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Nt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (en = Ae.eventTypes =
            (
              "ontouchstart" in Qn
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Qn
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (Xu = 0);
          }, 500),
          Gu(),
          (ea = 1)),
        ea
      );
    };
  (yt.op = Xe), (re.cache = 0);
  var Ae = (function () {
    function t(n) {
      this.init(n);
    }
    var e = t.prototype;
    return (
      (e.init = function (i) {
        ea || ju(tt) || console.warn("Please gsap.registerPlugin(Observer)"),
          Jr || Gu();
        var r = i.tolerance,
          s = i.dragMinimum,
          a = i.type,
          o = i.target,
          l = i.lineHeight,
          c = i.debounce,
          u = i.preventDefault,
          f = i.onStop,
          d = i.onStopDelay,
          h = i.ignore,
          m = i.wheelSpeed,
          p = i.event,
          g = i.onDragStart,
          y = i.onDragEnd,
          v = i.onDrag,
          _ = i.onPress,
          x = i.onRelease,
          S = i.onRight,
          C = i.onLeft,
          w = i.onUp,
          P = i.onDown,
          A = i.onChangeX,
          E = i.onChangeY,
          M = i.onChange,
          b = i.onToggleX,
          T = i.onToggleY,
          O = i.onHover,
          L = i.onHoverEnd,
          k = i.onMove,
          I = i.ignoreCheck,
          D = i.isNormalizer,
          N = i.onGestureStart,
          $ = i.onGestureEnd,
          H = i.onWheel,
          Y = i.onEnable,
          le = i.onDisable,
          ie = i.onClick,
          K = i.scrollSpeed,
          Z = i.capture,
          he = i.allowClicks,
          me = i.lockAxis,
          Ce = i.onLockAxis;
        (this.target = o = kt(o) || Qn),
          (this.vars = i),
          h && (h = tt.utils.toArray(h)),
          (r = r || 1e-9),
          (s = s || 0),
          (m = m || 1),
          (K = K || 1),
          (a = a || "wheel,touch,pointer"),
          (c = c !== !1),
          l || (l = parseFloat(Nt.getComputedStyle(ur).lineHeight) || 22);
        var Le,
          pe,
          Pe,
          W,
          te,
          Ie,
          De,
          z = this,
          ze = 0,
          rn = 0,
          Zt = i.passive || (!u && i.passive !== !1),
          V = ei(o, yt),
          Qt = ei(o, Xe),
          ui = V(),
          Hi = Qt(),
          Ze =
            ~a.indexOf("touch") &&
            !~a.indexOf("pointer") &&
            en[0] === "pointerdown",
          fi = ts(o),
          Re = o.ownerDocument || Zn,
          sn = [0, 0, 0],
          Jt = [0, 0, 0],
          Nn = 0,
          Ps = function () {
            return (Nn = es());
          },
          Ve = function (j, fe) {
            return (
              ((z.event = j) && h && Jg(j.target, h)) ||
              (fe && Ze && j.pointerType !== "touch") ||
              (I && I(j, fe))
            );
          },
          Va = function () {
            z._vx.reset(), z._vy.reset(), pe.pause(), f && f(z);
          },
          Fn = function () {
            var j = (z.deltaX = Yu(sn)),
              fe = (z.deltaY = Yu(Jt)),
              B = Math.abs(j) >= r,
              Q = Math.abs(fe) >= r;
            M && (B || Q) && M(z, j, fe, sn, Jt),
              B &&
                (S && z.deltaX > 0 && S(z),
                C && z.deltaX < 0 && C(z),
                A && A(z),
                b && z.deltaX < 0 != ze < 0 && b(z),
                (ze = z.deltaX),
                (sn[0] = sn[1] = sn[2] = 0)),
              Q &&
                (P && z.deltaY > 0 && P(z),
                w && z.deltaY < 0 && w(z),
                E && E(z),
                T && z.deltaY < 0 != rn < 0 && T(z),
                (rn = z.deltaY),
                (Jt[0] = Jt[1] = Jt[2] = 0)),
              (W || Pe) &&
                (k && k(z),
                Pe && (g && Pe === 1 && g(z), v && v(z), (Pe = 0)),
                (W = !1)),
              Ie && !(Ie = !1) && Ce && Ce(z),
              te && (H(z), (te = !1)),
              (Le = 0);
          },
          kr = function (j, fe, B) {
            (sn[B] += j),
              (Jt[B] += fe),
              z._vx.update(j),
              z._vy.update(fe),
              c ? Le || (Le = requestAnimationFrame(Fn)) : Fn();
          },
          Mr = function (j, fe) {
            me &&
              !De &&
              ((z.axis = De = Math.abs(j) > Math.abs(fe) ? "x" : "y"),
              (Ie = !0)),
              De !== "y" && ((sn[2] += j), z._vx.update(j, !0)),
              De !== "x" && ((Jt[2] += fe), z._vy.update(fe, !0)),
              c ? Le || (Le = requestAnimationFrame(Fn)) : Fn();
          },
          di = function (j) {
            if (!Ve(j, 1)) {
              j = ns(j, u);
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
                  ((Pe = J ? 2 : 1), J || (z.isDragging = !0), Mr(Q, G));
            }
          },
          Vi = (z.onPress = function (ee) {
            Ve(ee, 1) ||
              (ee && ee.button) ||
              ((z.axis = De = null),
              pe.pause(),
              (z.isPressed = !0),
              (ee = ns(ee)),
              (ze = rn = 0),
              (z.startX = z.x = ee.clientX),
              (z.startY = z.y = ee.clientY),
              z._vx.reset(),
              z._vy.reset(),
              gt(D ? o : Re, en[1], di, Zt, !0),
              (z.deltaX = z.deltaY = 0),
              _ && _(z));
          }),
          ae = (z.onRelease = function (ee) {
            if (!Ve(ee, 1)) {
              vt(D ? o : Re, en[1], di, !0);
              var j = !isNaN(z.y - z.startY),
                fe = z.isDragging,
                B =
                  fe &&
                  (Math.abs(z.x - z.startX) > 3 ||
                    Math.abs(z.y - z.startY) > 3),
                Q = ns(ee);
              !B &&
                j &&
                (z._vx.reset(),
                z._vy.reset(),
                u &&
                  he &&
                  tt.delayedCall(0.08, function () {
                    if (es() - Nn > 300 && !ee.defaultPrevented) {
                      if (ee.target.click) ee.target.click();
                      else if (Re.createEvent) {
                        var G = Re.createEvent("MouseEvents");
                        G.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Nt,
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
                Pe && Fn(),
                y && fe && y(z),
                x && x(z, B);
            }
          }),
          Wi = function (j) {
            return (
              j.touches &&
              j.touches.length > 1 &&
              (z.isGesturing = !0) &&
              N(j, z.isDragging)
            );
          },
          an = function () {
            return (z.isGesturing = !1) || $(z);
          },
          on = function (j) {
            if (!Ve(j)) {
              var fe = V(),
                B = Qt();
              kr((fe - ui) * K, (B - Hi) * K, 1),
                (ui = fe),
                (Hi = B),
                f && pe.restart(!0);
            }
          },
          ln = function (j) {
            if (!Ve(j)) {
              (j = ns(j, u)), H && (te = !0);
              var fe =
                (j.deltaMode === 1
                  ? l
                  : j.deltaMode === 2
                  ? Nt.innerHeight
                  : 1) * m;
              kr(j.deltaX * fe, j.deltaY * fe, 0), f && !D && pe.restart(!0);
            }
          },
          Xi = function (j) {
            if (!Ve(j)) {
              var fe = j.clientX,
                B = j.clientY,
                Q = fe - z.x,
                G = B - z.y;
              (z.x = fe),
                (z.y = B),
                (W = !0),
                f && pe.restart(!0),
                (Q || G) && Mr(Q, G);
            }
          },
          $r = function (j) {
            (z.event = j), O(z);
          },
          Bn = function (j) {
            (z.event = j), L(z);
          },
          ks = function (j) {
            return Ve(j) || (ns(j, u) && ie(z));
          };
        (pe = z._dc = tt.delayedCall(d || 0.25, Va).pause()),
          (z.deltaX = z.deltaY = 0),
          (z._vx = Ko(0, 50, !0)),
          (z._vy = Ko(0, 50, !0)),
          (z.scrollX = V),
          (z.scrollY = Qt),
          (z.isDragging = z.isGesturing = z.isPressed = !1),
          Vu(this),
          (z.enable = function (ee) {
            return (
              z.isEnabled ||
                (gt(fi ? Re : o, "scroll", Uo),
                a.indexOf("scroll") >= 0 &&
                  gt(fi ? Re : o, "scroll", on, Zt, Z),
                a.indexOf("wheel") >= 0 && gt(o, "wheel", ln, Zt, Z),
                ((a.indexOf("touch") >= 0 && qu) ||
                  a.indexOf("pointer") >= 0) &&
                  (gt(o, en[0], Vi, Zt, Z),
                  gt(Re, en[2], ae),
                  gt(Re, en[3], ae),
                  he && gt(o, "click", Ps, !0, !0),
                  ie && gt(o, "click", ks),
                  N && gt(Re, "gesturestart", Wi),
                  $ && gt(Re, "gestureend", an),
                  O && gt(o, Ci + "enter", $r),
                  L && gt(o, Ci + "leave", Bn),
                  k && gt(o, Ci + "move", Xi)),
                (z.isEnabled = !0),
                (z.isDragging = z.isGesturing = z.isPressed = W = Pe = !1),
                z._vx.reset(),
                z._vy.reset(),
                (ui = V()),
                (Hi = Qt()),
                ee && ee.type && Vi(ee),
                Y && Y(z)),
              z
            );
          }),
          (z.disable = function () {
            z.isEnabled &&
              (fr.filter(function (ee) {
                return ee !== z && ts(ee.target);
              }).length || vt(fi ? Re : o, "scroll", Uo),
              z.isPressed &&
                (z._vx.reset(), z._vy.reset(), vt(D ? o : Re, en[1], di, !0)),
              vt(fi ? Re : o, "scroll", on, Z),
              vt(o, "wheel", ln, Z),
              vt(o, en[0], Vi, Z),
              vt(Re, en[2], ae),
              vt(Re, en[3], ae),
              vt(o, "click", Ps, !0),
              vt(o, "click", ks),
              vt(Re, "gesturestart", Wi),
              vt(Re, "gestureend", an),
              vt(o, Ci + "enter", $r),
              vt(o, Ci + "leave", Bn),
              vt(o, Ci + "move", Xi),
              (z.isEnabled = z.isPressed = z.isDragging = !1),
              le && le(z));
          }),
          (z.kill = z.revert =
            function () {
              z.disable();
              var ee = fr.indexOf(z);
              ee >= 0 && fr.splice(ee, 1), An === z && (An = 0);
            }),
          fr.push(z),
          D && ts(o) && (An = z),
          z.enable(p);
      }),
      Zg(t, [
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
  (Ae.version = "3.13.0"),
    (Ae.create = function (t) {
      return new Ae(t);
    }),
    (Ae.register = ju),
    (Ae.getAll = function () {
      return fr.slice();
    }),
    (Ae.getById = function (t) {
      return fr.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    Wu() && tt.registerPlugin(Ae);
  /*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var q,
    dr,
    se,
    _e,
    Ft,
    de,
    Zo,
    ra,
    is,
    rs,
    ss,
    sa,
    ot,
    aa,
    Qo,
    _t,
    Uu,
    Ku,
    hr,
    Zu,
    Jo,
    Qu,
    bt,
    el,
    Ju,
    ef,
    ti,
    tl,
    nl,
    pr,
    il,
    oa,
    rl,
    sl,
    la = 1,
    lt = Date.now,
    al = lt(),
    jt = 0,
    as = 0,
    tf = function (e, n, i) {
      var r = Bt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (i["_" + n + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
    },
    nf = function (e, n) {
      return n && (!Bt(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    ev = function t() {
      return as && requestAnimationFrame(t);
    },
    rf = function () {
      return (aa = 1);
    },
    sf = function () {
      return (aa = 0);
    },
    vn = function (e) {
      return e;
    },
    os = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    af = function () {
      return typeof window != "undefined";
    },
    of = function () {
      return q || (af() && (q = window.gsap) && q.registerPlugin && q);
    },
    Pi = function (e) {
      return !!~Zo.indexOf(e);
    },
    lf = function (e) {
      return (
        (e === "Height" ? il : se["inner" + e]) ||
        Ft["client" + e] ||
        de["client" + e]
      );
    },
    cf = function (e) {
      return (
        Jn(e, "getBoundingClientRect") ||
        (Pi(e)
          ? function () {
              return (xa.width = se.innerWidth), (xa.height = il), xa;
            }
          : function () {
              return Ln(e);
            })
      );
    },
    tv = function (e, n, i) {
      var r = i.d,
        s = i.d2,
        a = i.a;
      return (a = Jn(e, "getBoundingClientRect"))
        ? function () {
            return a()[r];
          }
        : function () {
            return (n ? lf(s) : e["client" + s]) || 0;
          };
    },
    nv = function (e, n) {
      return !n || ~gn.indexOf(e)
        ? cf(e)
        : function () {
            return xa;
          };
    },
    yn = function (e, n) {
      var i = n.s,
        r = n.d2,
        s = n.d,
        a = n.a;
      return Math.max(
        0,
        (i = "scroll" + r) && (a = Jn(e, i))
          ? a() - cf(e)()[s]
          : Pi(e)
          ? (Ft[i] || de[i]) - lf(r)
          : e[i] - e["offset" + r]
      );
    },
    ca = function (e, n) {
      for (var i = 0; i < hr.length; i += 3)
        (!n || ~n.indexOf(hr[i + 1])) && e(hr[i], hr[i + 1], hr[i + 2]);
    },
    Bt = function (e) {
      return typeof e == "string";
    },
    ct = function (e) {
      return typeof e == "function";
    },
    ls = function (e) {
      return typeof e == "number";
    },
    ki = function (e) {
      return typeof e == "object";
    },
    cs = function (e, n, i) {
      return e && e.progress(n ? 0 : 1) && i && e.pause();
    },
    ol = function (e, n) {
      if (e.enabled) {
        var i = e._ctx
          ? e._ctx.add(function () {
              return n(e);
            })
          : n(e);
        i && i.totalTime && (e.callbackAnimation = i);
      }
    },
    mr = Math.abs,
    uf = "left",
    ff = "top",
    ll = "right",
    cl = "bottom",
    Mi = "width",
    $i = "height",
    us = "Right",
    fs = "Left",
    ds = "Top",
    hs = "Bottom",
    He = "padding",
    Ut = "margin",
    gr = "Width",
    ul = "Height",
    Ye = "px",
    Kt = function (e) {
      return se.getComputedStyle(e);
    },
    iv = function (e) {
      var n = Kt(e).position;
      e.style.position = n === "absolute" || n === "fixed" ? n : "relative";
    },
    df = function (e, n) {
      for (var i in n) i in e || (e[i] = n[i]);
      return e;
    },
    Ln = function (e, n) {
      var i =
          n &&
          Kt(e)[Qo] !== "matrix(1, 0, 0, 1, 0, 0)" &&
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
        r = e.getBoundingClientRect();
      return i && i.progress(0).kill(), r;
    },
    ua = function (e, n) {
      var i = n.d2;
      return e["offset" + i] || e["client" + i] || 0;
    },
    hf = function (e) {
      var n = [],
        i = e.labels,
        r = e.duration(),
        s;
      for (s in i) n.push(i[s] / r);
      return n;
    },
    rv = function (e) {
      return function (n) {
        return q.utils.snap(hf(e), n);
      };
    },
    fl = function (e) {
      var n = q.utils.snap(e),
        i =
          Array.isArray(e) &&
          e.slice(0).sort(function (r, s) {
            return r - s;
          });
      return i
        ? function (r, s, a) {
            a === void 0 && (a = 0.001);
            var o;
            if (!s) return n(r);
            if (s > 0) {
              for (r -= a, o = 0; o < i.length; o++) if (i[o] >= r) return i[o];
              return i[o - 1];
            } else for (o = i.length, r += a; o--; ) if (i[o] <= r) return i[o];
            return i[0];
          }
        : function (r, s, a) {
            a === void 0 && (a = 0.001);
            var o = n(r);
            return !s || Math.abs(o - r) < a || o - r < 0 == s < 0
              ? o
              : n(s < 0 ? r - e : r + e);
          };
    },
    sv = function (e) {
      return function (n, i) {
        return fl(hf(e))(n, i.direction);
      };
    },
    fa = function (e, n, i, r) {
      return i.split(",").forEach(function (s) {
        return e(n, s, r);
      });
    },
    Ue = function (e, n, i, r, s) {
      return e.addEventListener(n, i, { passive: !r, capture: !!s });
    },
    Ke = function (e, n, i, r) {
      return e.removeEventListener(n, i, !!r);
    },
    da = function (e, n, i) {
      (i = i && i.wheelHandler), i && (e(n, "wheel", i), e(n, "touchmove", i));
    },
    pf = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    ha = { toggleActions: "play", anticipatePin: 0 },
    pa = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    ma = function (e, n) {
      if (Bt(e)) {
        var i = e.indexOf("="),
          r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (r *= n / 100), (e = e.substr(0, i - 1))),
          (e =
            r +
            (e in pa
              ? pa[e] * n
              : ~e.indexOf("%")
              ? (parseFloat(e) * n) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    ga = function (e, n, i, r, s, a, o, l) {
      var c = s.startColor,
        u = s.endColor,
        f = s.fontSize,
        d = s.indent,
        h = s.fontWeight,
        m = _e.createElement("div"),
        p = Pi(i) || Jn(i, "pinType") === "fixed",
        g = e.indexOf("scroller") !== -1,
        y = p ? de : i,
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
          (x += (r === Xe ? ll : cl) + ":" + (a + parseFloat(d)) + "px;"),
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
        (m._offset = m["offset" + r.op.d2]),
        va(m, 0, r, v),
        m
      );
    },
    va = function (e, n, i, r) {
      var s = { display: "block" },
        a = i[r ? "os2" : "p2"],
        o = i[r ? "p2" : "os2"];
      (e._isFlipped = r),
        (s[i.a + "Percent"] = r ? -100 : 0),
        (s[i.a] = r ? "1px" : 0),
        (s["border" + a + gr] = 1),
        (s["border" + o + gr] = 0),
        (s[i.p] = n + "px"),
        q.set(e, s);
    },
    ne = [],
    dl = {},
    ps,
    mf = function () {
      return lt() - jt > 34 && (ps || (ps = requestAnimationFrame(In)));
    },
    vr = function () {
      (!bt || !bt.isPressed || bt.startX > de.clientWidth) &&
        (re.cache++,
        bt ? ps || (ps = requestAnimationFrame(In)) : In(),
        jt || Ai("scrollStart"),
        (jt = lt()));
    },
    hl = function () {
      (ef = se.innerWidth), (Ju = se.innerHeight);
    },
    ms = function (e) {
      re.cache++,
        (e === !0 ||
          (!ot &&
            !Qu &&
            !_e.fullscreenElement &&
            !_e.webkitFullscreenElement &&
            (!el ||
              ef !== se.innerWidth ||
              Math.abs(se.innerHeight - Ju) > se.innerHeight * 0.25))) &&
          ra.restart(!0);
    },
    Oi = {},
    av = [],
    gf = function t() {
      return Ke(U, "scrollEnd", t) || Ii(!0);
    },
    Ai = function (e) {
      return (
        (Oi[e] &&
          Oi[e].map(function (n) {
            return n();
          })) ||
        av
      );
    },
    qt = [],
    vf = function (e) {
      for (var n = 0; n < qt.length; n += 5)
        (!e || (qt[n + 4] && qt[n + 4].query === e)) &&
          ((qt[n].style.cssText = qt[n + 1]),
          qt[n].getBBox && qt[n].setAttribute("transform", qt[n + 2] || ""),
          (qt[n + 3].uncache = 1));
    },
    pl = function (e, n) {
      var i;
      for (_t = 0; _t < ne.length; _t++)
        (i = ne[_t]),
          i && (!n || i._ctx === n) && (e ? i.kill(1) : i.revert(!0, !0));
      (oa = !0), n && vf(n), n || Ai("revert");
    },
    yf = function (e, n) {
      re.cache++,
        (n || !xt) &&
          re.forEach(function (i) {
            return ct(i) && i.cacheID++ && (i.rec = 0);
          }),
        Bt(e) && (se.history.scrollRestoration = nl = e);
    },
    xt,
    Li = 0,
    _f,
    ov = function () {
      if (_f !== Li) {
        var e = (_f = Li);
        requestAnimationFrame(function () {
          return e === Li && Ii(!0);
        });
      }
    },
    bf = function () {
      de.appendChild(pr),
        (il = (!bt && pr.offsetHeight) || se.innerHeight),
        de.removeChild(pr);
    },
    xf = function (e) {
      return is(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (n) {
        return (n.style.display = e ? "none" : "block");
      });
    },
    Ii = function (e, n) {
      if (
        ((Ft = _e.documentElement),
        (de = _e.body),
        (Zo = [se, _e, Ft, de]),
        jt && !e && !oa)
      ) {
        Ue(U, "scrollEnd", gf);
        return;
      }
      bf(),
        (xt = U.isRefreshing = !0),
        re.forEach(function (r) {
          return ct(r) && ++r.cacheID && (r.rec = r());
        });
      var i = Ai("refreshInit");
      Zu && U.sort(),
        n || pl(),
        re.forEach(function (r) {
          ct(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
        }),
        ne.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        (oa = !1),
        ne.forEach(function (r) {
          if (r._subPinOffset && r.pin) {
            var s = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
              a = r.pin[s];
            r.revert(!0, 1), r.adjustPinSpacing(r.pin[s] - a), r.refresh();
          }
        }),
        (rl = 1),
        xf(!0),
        ne.forEach(function (r) {
          var s = yn(r.scroller, r._dir),
            a = r.vars.end === "max" || (r._endClamp && r.end > s),
            o = r._startClamp && r.start >= s;
          (a || o) &&
            r.setPositions(
              o ? s - 1 : r.start,
              a ? Math.max(o ? s : r.start + 1, s) : r.end,
              !0
            );
        }),
        xf(!1),
        (rl = 0),
        i.forEach(function (r) {
          return r && r.render && r.render(-1);
        }),
        re.forEach(function (r) {
          ct(r) &&
            (r.smooth &&
              requestAnimationFrame(function () {
                return (r.target.style.scrollBehavior = "smooth");
              }),
            r.rec && r(r.rec));
        }),
        yf(nl, 1),
        ra.pause(),
        Li++,
        (xt = 2),
        In(2),
        ne.forEach(function (r) {
          return ct(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (xt = U.isRefreshing = !1),
        Ai("refresh");
    },
    ml = 0,
    ya = 1,
    gs,
    In = function (e) {
      if (e === 2 || (!xt && !oa)) {
        (U.isUpdating = !0), gs && gs.update(0);
        var n = ne.length,
          i = lt(),
          r = i - al >= 50,
          s = n && ne[0].scroll();
        if (
          ((ya = ml > s ? -1 : 1),
          xt || (ml = s),
          r &&
            (jt && !aa && i - jt > 200 && ((jt = 0), Ai("scrollEnd")),
            (ss = al),
            (al = i)),
          ya < 0)
        ) {
          for (_t = n; _t-- > 0; ) ne[_t] && ne[_t].update(0, r);
          ya = 1;
        } else for (_t = 0; _t < n; _t++) ne[_t] && ne[_t].update(0, r);
        U.isUpdating = !1;
      }
      ps = 0;
    },
    gl = [
      uf,
      ff,
      cl,
      ll,
      Ut + hs,
      Ut + us,
      Ut + ds,
      Ut + fs,
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
    _a = gl.concat([
      Mi,
      $i,
      "boxSizing",
      "max" + gr,
      "max" + ul,
      "position",
      Ut,
      He,
      He + ds,
      He + us,
      He + hs,
      He + fs,
    ]),
    lv = function (e, n, i) {
      yr(i);
      var r = e._gsap;
      if (r.spacerIsNative) yr(r.spacerState);
      else if (e._gsap.swappedIn) {
        var s = n.parentNode;
        s && (s.insertBefore(e, n), s.removeChild(n));
      }
      e._gsap.swappedIn = !1;
    },
    vl = function (e, n, i, r) {
      if (!e._gsap.swappedIn) {
        for (var s = gl.length, a = n.style, o = e.style, l; s--; )
          (l = gl[s]), (a[l] = i[l]);
        (a.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (a.display = "inline-block"),
          (o[cl] = o[ll] = "auto"),
          (a.flexBasis = i.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[Mi] = ua(e, yt) + Ye),
          (a[$i] = ua(e, Xe) + Ye),
          (a[He] = o[Ut] = o[ff] = o[uf] = "0"),
          yr(r),
          (o[Mi] = o["max" + gr] = i[Mi]),
          (o[$i] = o["max" + ul] = i[$i]),
          (o[He] = i[He]),
          e.parentNode !== n &&
            (e.parentNode.insertBefore(n, e), n.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    cv = /([A-Z])/g,
    yr = function (e) {
      if (e) {
        var n = e.t.style,
          i = e.length,
          r = 0,
          s,
          a;
        for ((e.t._gsap || q.core.getCache(e.t)).uncache = 1; r < i; r += 2)
          (a = e[r + 1]),
            (s = e[r]),
            a
              ? (n[s] = a)
              : n[s] && n.removeProperty(s.replace(cv, "-$1").toLowerCase());
      }
    },
    ba = function (e) {
      for (var n = _a.length, i = e.style, r = [], s = 0; s < n; s++)
        r.push(_a[s], i[_a[s]]);
      return (r.t = e), r;
    },
    uv = function (e, n, i) {
      for (var r = [], s = e.length, a = i ? 8 : 0, o; a < s; a += 2)
        (o = e[a]), r.push(o, o in n ? n[o] : e[a + 1]);
      return (r.t = e.t), r;
    },
    xa = { left: 0, top: 0 },
    Sf = function (e, n, i, r, s, a, o, l, c, u, f, d, h, m) {
      ct(e) && (e = e(l)),
        Bt(e) &&
          e.substr(0, 3) === "max" &&
          (e = d + (e.charAt(4) === "=" ? ma("0" + e.substr(3), i) : 0));
      var p = h ? h.time() : 0,
        g,
        y,
        v;
      if ((h && h.seek(0), isNaN(e) || (e = +e), ls(e)))
        h &&
          (e = q.utils.mapRange(
            h.scrollTrigger.start,
            h.scrollTrigger.end,
            0,
            d,
            e
          )),
          o && va(o, i, r, !0);
      else {
        ct(n) && (n = n(l));
        var _ = (e || "0").split(" "),
          x,
          S,
          C,
          w;
        (v = kt(n, l) || de),
          (x = Ln(v) || {}),
          (!x || (!x.left && !x.top)) &&
            Kt(v).display === "none" &&
            ((w = v.style.display),
            (v.style.display = "block"),
            (x = Ln(v)),
            w ? (v.style.display = w) : v.style.removeProperty("display")),
          (S = ma(_[0], x[r.d])),
          (C = ma(_[1] || "0", i)),
          (e = x[r.p] - c[r.p] - u + S + s - C),
          o && va(o, C, r, i - C < 20 || (o._isStart && C > 20)),
          (i -= i - C);
      }
      if ((m && ((l[m] = e || -0.001), e < 0 && (e = 0)), a)) {
        var P = e + i,
          A = a._isStart;
        (g = "scroll" + r.d2),
          va(
            a,
            P,
            r,
            (A && P > 20) ||
              (!A && (f ? Math.max(de[g], Ft[g]) : a.parentNode[g]) <= P + 1)
          ),
          f &&
            ((c = Ln(o)),
            f && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + Ye));
      }
      return (
        h &&
          v &&
          ((g = Ln(v)),
          h.seek(d),
          (y = Ln(v)),
          (h._caScrollDist = g[r.p] - y[r.p]),
          (e = (e / h._caScrollDist) * d)),
        h && h.seek(p),
        h ? e : Math.round(e)
      );
    },
    fv = /(webkit|moz|length|cssText|inset)/i,
    Tf = function (e, n, i, r) {
      if (e.parentNode !== n) {
        var s = e.style,
          a,
          o;
        if (n === de) {
          (e._stOrig = s.cssText), (o = Kt(e));
          for (a in o)
            !+a &&
              !fv.test(a) &&
              o[a] &&
              typeof s[a] == "string" &&
              a !== "0" &&
              (s[a] = o[a]);
          (s.top = i), (s.left = r);
        } else s.cssText = e._stOrig;
        (q.core.getCache(e).uncache = 1), n.appendChild(e);
      }
    },
    Ef = function (e, n, i) {
      var r = n,
        s = r;
      return function (a) {
        var o = Math.round(e());
        return (
          o !== r &&
            o !== s &&
            Math.abs(o - r) > 3 &&
            Math.abs(o - s) > 3 &&
            ((a = o), i && i()),
          (s = r),
          (r = Math.round(a)),
          r
        );
      };
    },
    Sa = function (e, n, i) {
      var r = {};
      (r[n.p] = "+=" + i), q.set(e, r);
    },
    wf = function (e, n) {
      var i = ei(e, n),
        r = "_scroll" + n.p2,
        s = function a(o, l, c, u, f) {
          var d = a.tween,
            h = l.onComplete,
            m = {};
          c = c || i();
          var p = Ef(i, c, function () {
            d.kill(), (a.tween = 0);
          });
          return (
            (f = (u && f) || 0),
            (u = u || o - c),
            d && d.kill(),
            (l[r] = o),
            (l.inherit = !1),
            (l.modifiers = m),
            (m[r] = function () {
              return p(c + u * d.ratio + f * d.ratio * d.ratio);
            }),
            (l.onUpdate = function () {
              re.cache++, a.tween && In();
            }),
            (l.onComplete = function () {
              (a.tween = 0), h && h.call(d);
            }),
            (d = a.tween = q.to(e, l)),
            d
          );
        };
      return (
        (e[r] = i),
        (i.wheelHandler = function () {
          return s.tween && s.tween.kill() && (s.tween = 0);
        }),
        Ue(e, "wheel", i.wheelHandler),
        U.isTouch && Ue(e, "touchmove", i.wheelHandler),
        s
      );
    },
    U = (function () {
      function t(n, i) {
        dr ||
          t.register(q) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          tl(this),
          this.init(n, i);
      }
      var e = t.prototype;
      return (
        (e.init = function (i, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !as)
          ) {
            this.update = this.refresh = this.kill = vn;
            return;
          }
          i = df(Bt(i) || ls(i) || i.nodeType ? { trigger: i } : i, ha);
          var s = i,
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
            C = s.pinSpacer,
            w = s.containerAnimation,
            P = s.fastScrollEnd,
            A = s.preventOverlaps,
            E =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? yt
                : Xe,
            M = !f && f !== 0,
            b = kt(i.scroller || se),
            T = q.core.getCache(b),
            O = Pi(b),
            L =
              ("pinType" in i
                ? i.pinType
                : Jn(b, "pinType") || (O && "fixed")) === "fixed",
            k = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            I = M && i.toggleActions.split(" "),
            D = "markers" in i ? i.markers : ha.markers,
            N = O ? 0 : parseFloat(Kt(b)["border" + E.p2 + gr]) || 0,
            $ = this,
            H =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit($);
              },
            Y = tv(b, O, E),
            le = nv(b, O),
            ie = 0,
            K = 0,
            Z = 0,
            he = ei(b, E),
            me,
            Ce,
            Le,
            pe,
            Pe,
            W,
            te,
            Ie,
            De,
            z,
            ze,
            rn,
            Zt,
            V,
            Qt,
            ui,
            Hi,
            Ze,
            fi,
            Re,
            sn,
            Jt,
            Nn,
            Ps,
            Ve,
            Va,
            Fn,
            kr,
            Mr,
            di,
            Vi,
            ae,
            Wi,
            an,
            on,
            ln,
            Xi,
            $r,
            Bn;
          if (
            (($._startClamp = $._endClamp = !1),
            ($._dir = E),
            (g *= 45),
            ($.scroller = b),
            ($.scroll = w ? w.time.bind(w) : he),
            (pe = he()),
            ($.vars = i),
            (r = r || i.animation),
            "refreshPriority" in i &&
              ((Zu = 1), i.refreshPriority === -9999 && (gs = $)),
            (T.tweenScroll = T.tweenScroll || {
              top: wf(b, Xe),
              left: wf(b, yt),
            }),
            ($.tweenTo = me = T.tweenScroll[E.p]),
            ($.scrubDuration = function (B) {
              (Wi = ls(B) && B),
                Wi
                  ? ae
                    ? ae.duration(B)
                    : (ae = q.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: Wi,
                        paused: !0,
                        onComplete: function () {
                          return y && y($);
                        },
                      }))
                  : (ae && ae.progress(1).kill(), (ae = 0));
            }),
            r &&
              ((r.vars.lazy = !1),
              (r._initted && !$.isReverted) ||
                (r.vars.immediateRender !== !1 &&
                  i.immediateRender !== !1 &&
                  r.duration() &&
                  r.render(0, !0, !0)),
              ($.animation = r.pause()),
              (r.scrollTrigger = $),
              $.scrubDuration(f),
              (di = 0),
              l || (l = r.vars.id)),
            x &&
              ((!ki(x) || x.push) && (x = { snapTo: x }),
              "scrollBehavior" in de.style &&
                q.set(O ? [de, Ft] : b, { scrollBehavior: "auto" }),
              re.forEach(function (B) {
                return (
                  ct(B) &&
                  B.target === (O ? _e.scrollingElement || Ft : b) &&
                  (B.smooth = !1)
                );
              }),
              (Le = ct(x.snapTo)
                ? x.snapTo
                : x.snapTo === "labels"
                ? rv(r)
                : x.snapTo === "labelsDirectional"
                ? sv(r)
                : x.directional !== !1
                ? function (B, Q) {
                    return fl(x.snapTo)(B, lt() - K < 500 ? 0 : Q.direction);
                  }
                : q.utils.snap(x.snapTo)),
              (an = x.duration || { min: 0.1, max: 2 }),
              (an = ki(an) ? rs(an.min, an.max) : rs(an, an)),
              (on = q
                .delayedCall(x.delay || Wi / 2 || 0.1, function () {
                  var B = he(),
                    Q = lt() - K < 500,
                    G = me.tween;
                  if (
                    (Q || Math.abs($.getVelocity()) < 10) &&
                    !G &&
                    !aa &&
                    ie !== B
                  ) {
                    var J = (B - W) / V,
                      Qe = r && !M ? r.totalProgress() : J,
                      ce = Q ? 0 : ((Qe - Vi) / (lt() - ss)) * 1e3 || 0,
                      Ne = q.utils.clamp(-J, 1 - J, (mr(ce / 2) * ce) / 0.185),
                      ft = J + (x.inertia === !1 ? 0 : Ne),
                      $e,
                      Te,
                      ye = x,
                      cn = ye.onStart,
                      ke = ye.onInterrupt,
                      Ht = ye.onComplete;
                    if (
                      (($e = Le(ft, $)),
                      ls($e) || ($e = ft),
                      (Te = Math.max(0, Math.round(W + $e * V))),
                      B <= te && B >= W && Te !== B)
                    ) {
                      if (G && !G._initted && G.data <= mr(Te - B)) return;
                      x.inertia === !1 && (Ne = $e - J),
                        me(
                          Te,
                          {
                            duration: an(
                              mr(
                                (Math.max(mr(ft - Qe), mr($e - Qe)) * 0.185) /
                                  ce /
                                  0.05 || 0
                              )
                            ),
                            ease: x.ease || "power3",
                            data: mr(Te - B),
                            onInterrupt: function () {
                              return on.restart(!0) && ke && ke($);
                            },
                            onComplete: function () {
                              $.update(),
                                (ie = he()),
                                r &&
                                  !M &&
                                  (ae
                                    ? ae.resetTo(
                                        "totalProgress",
                                        $e,
                                        r._tTime / r._tDur
                                      )
                                    : r.progress($e)),
                                (di = Vi =
                                  r && !M ? r.totalProgress() : $.progress),
                                v && v($),
                                Ht && Ht($);
                            },
                          },
                          B,
                          Ne * V,
                          Te - B - Ne * V
                        ),
                        cn && cn($, me.tween);
                    }
                  } else $.isActive && ie !== B && on.restart(!0);
                })
                .pause())),
            l && (dl[l] = $),
            (d = $.trigger = kt(d || (h !== !0 && h))),
            (Bn = d && d._gsap && d._gsap.stRevert),
            Bn && (Bn = Bn($)),
            (h = h === !0 ? d : kt(h)),
            Bt(o) && (o = { targets: d, className: o }),
            h &&
              (m === !1 ||
                m === Ut ||
                (m =
                  !m &&
                  h.parentNode &&
                  h.parentNode.style &&
                  Kt(h.parentNode).display === "flex"
                    ? !1
                    : He),
              ($.pin = h),
              (Ce = q.core.getCache(h)),
              Ce.spacer
                ? (Qt = Ce.pinState)
                : (C &&
                    ((C = kt(C)),
                    C && !C.nodeType && (C = C.current || C.nativeElement),
                    (Ce.spacerIsNative = !!C),
                    C && (Ce.spacerState = ba(C))),
                  (Ce.spacer = Ze = C || _e.createElement("div")),
                  Ze.classList.add("pin-spacer"),
                  l && Ze.classList.add("pin-spacer-" + l),
                  (Ce.pinState = Qt = ba(h))),
              i.force3D !== !1 && q.set(h, { force3D: !0 }),
              ($.spacer = Ze = Ce.spacer),
              (Mr = Kt(h)),
              (Ps = Mr[m + E.os2]),
              (Re = q.getProperty(h)),
              (sn = q.quickSetter(h, E.a, Ye)),
              vl(h, Ze, Mr),
              (Hi = ba(h))),
            D)
          ) {
            (rn = ki(D) ? df(D, pf) : pf),
              (z = ga("scroller-start", l, b, E, rn, 0)),
              (ze = ga("scroller-end", l, b, E, rn, 0, z)),
              (fi = z["offset" + E.op.d2]);
            var ks = kt(Jn(b, "content") || b);
            (Ie = this.markerStart = ga("start", l, ks, E, rn, fi, 0, w)),
              (De = this.markerEnd = ga("end", l, ks, E, rn, fi, 0, w)),
              w && ($r = q.quickSetter([Ie, De], E.a, Ye)),
              !L &&
                !(gn.length && Jn(b, "fixedMarkers") === !0) &&
                (iv(O ? de : b),
                q.set([z, ze], { force3D: !0 }),
                (Va = q.quickSetter(z, E.a, Ye)),
                (kr = q.quickSetter(ze, E.a, Ye)));
          }
          if (w) {
            var ee = w.vars.onUpdate,
              j = w.vars.onUpdateParams;
            w.eventCallback("onUpdate", function () {
              $.update(0, 0, 1), ee && ee.apply(w, j || []);
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
                  ((ln = Math.max(he(), $.scroll.rec || 0)),
                  (Z = $.progress),
                  (Xi = r && r.progress())),
                Ie &&
                  [Ie, De, z, ze].forEach(function (Qe) {
                    return (Qe.style.display = G ? "none" : "block");
                  }),
                G && ((ot = $), $.update(G)),
                h &&
                  (!S || !$.isActive) &&
                  (G ? lv(h, Ze, Qt) : vl(h, Ze, Kt(h), Ve)),
                G || $.update(G),
                (ot = J),
                ($.isReverted = G));
            }),
            ($.refresh = function (B, Q, G, J) {
              if (!((ot || !$.enabled) && !Q)) {
                if (h && B && jt) {
                  Ue(t, "scrollEnd", gf);
                  return;
                }
                !xt && H && H($),
                  (ot = $),
                  me.tween && !G && (me.tween.kill(), (me.tween = 0)),
                  ae && ae.pause(),
                  p &&
                    r &&
                    (r.revert({ kill: !1 }).invalidate(),
                    r.getChildren &&
                      r.getChildren(!0, !0, !1).forEach(function (hi) {
                        return hi.vars.immediateRender && hi.render(0, !0, !0);
                      })),
                  $.isReverted || $.revert(!0, !0),
                  ($._subPinOffset = !1);
                var Qe = Y(),
                  ce = le(),
                  Ne = w ? w.duration() : yn(b, E),
                  ft = V <= 0.01 || !V,
                  $e = 0,
                  Te = J || 0,
                  ye = ki(G) ? G.end : i.end,
                  cn = i.endTrigger || d,
                  ke = ki(G)
                    ? G.start
                    : i.start ||
                      (i.start === 0 || !d ? 0 : h ? "0 0" : "0 100%"),
                  Ht = ($.pinnedContainer =
                    i.pinnedContainer && kt(i.pinnedContainer, $)),
                  Tn = (d && Math.max(0, ne.indexOf($))) || 0,
                  nt = Tn,
                  it,
                  dt,
                  Yi,
                  Wa,
                  ht,
                  Ge,
                  En,
                  tc,
                  Ad,
                  Ms,
                  wn,
                  $s,
                  Xa;
                for (
                  D &&
                  ki(G) &&
                  (($s = q.getProperty(z, E.p)), (Xa = q.getProperty(ze, E.p)));
                  nt-- > 0;

                )
                  (Ge = ne[nt]),
                    Ge.end || Ge.refresh(0, 1) || (ot = $),
                    (En = Ge.pin),
                    En &&
                      (En === d || En === h || En === Ht) &&
                      !Ge.isReverted &&
                      (Ms || (Ms = []), Ms.unshift(Ge), Ge.revert(!0, !0)),
                    Ge !== ne[nt] && (Tn--, nt--);
                for (
                  ct(ke) && (ke = ke($)),
                    ke = tf(ke, "start", $),
                    W =
                      Sf(
                        ke,
                        d,
                        Qe,
                        E,
                        he(),
                        Ie,
                        z,
                        $,
                        ce,
                        N,
                        L,
                        Ne,
                        w,
                        $._startClamp && "_startClamp"
                      ) || (h ? -0.001 : 0),
                    ct(ye) && (ye = ye($)),
                    Bt(ye) &&
                      !ye.indexOf("+=") &&
                      (~ye.indexOf(" ")
                        ? (ye = (Bt(ke) ? ke.split(" ")[0] : "") + ye)
                        : (($e = ma(ye.substr(2), Qe)),
                          (ye = Bt(ke)
                            ? ke
                            : (w
                                ? q.utils.mapRange(
                                    0,
                                    w.duration(),
                                    w.scrollTrigger.start,
                                    w.scrollTrigger.end,
                                    W
                                  )
                                : W) + $e),
                          (cn = d))),
                    ye = tf(ye, "end", $),
                    te =
                      Math.max(
                        W,
                        Sf(
                          ye || (cn ? "100% 0" : Ne),
                          cn,
                          Qe,
                          E,
                          he() + $e,
                          De,
                          ze,
                          $,
                          ce,
                          N,
                          L,
                          Ne,
                          w,
                          $._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    $e = 0,
                    nt = Tn;
                  nt--;

                )
                  (Ge = ne[nt]),
                    (En = Ge.pin),
                    En &&
                      Ge.start - Ge._pinPush <= W &&
                      !w &&
                      Ge.end > 0 &&
                      ((it =
                        Ge.end -
                        ($._startClamp ? Math.max(0, Ge.start) : Ge.start)),
                      ((En === d && Ge.start - Ge._pinPush < W) || En === Ht) &&
                        isNaN(ke) &&
                        ($e += it * (1 - Ge.progress)),
                      En === h && (Te += it));
                if (
                  ((W += $e),
                  (te += $e),
                  $._startClamp && ($._startClamp += $e),
                  $._endClamp &&
                    !xt &&
                    (($._endClamp = te || -0.001),
                    (te = Math.min(te, yn(b, E)))),
                  (V = te - W || ((W -= 0.01) && 0.001)),
                  ft && (Z = q.utils.clamp(0, 1, q.utils.normalize(W, te, ln))),
                  ($._pinPush = Te),
                  Ie &&
                    $e &&
                    ((it = {}),
                    (it[E.a] = "+=" + $e),
                    Ht && (it[E.p] = "-=" + he()),
                    q.set([Ie, De], it)),
                  h && !(rl && $.end >= yn(b, E)))
                )
                  (it = Kt(h)),
                    (Wa = E === Xe),
                    (Yi = he()),
                    (Jt = parseFloat(Re(E.a)) + Te),
                    !Ne &&
                      te > 1 &&
                      ((wn = (O ? _e.scrollingElement || Ft : b).style),
                      (wn = {
                        style: wn,
                        value: wn["overflow" + E.a.toUpperCase()],
                      }),
                      O &&
                        Kt(de)["overflow" + E.a.toUpperCase()] !== "scroll" &&
                        (wn.style["overflow" + E.a.toUpperCase()] = "scroll")),
                    vl(h, Ze, it),
                    (Hi = ba(h)),
                    (dt = Ln(h, !0)),
                    (tc = L && ei(b, Wa ? yt : Xe)()),
                    m
                      ? ((Ve = [m + E.os2, V + Te + Ye]),
                        (Ve.t = Ze),
                        (nt = m === He ? ua(h, E) + V + Te : 0),
                        nt &&
                          (Ve.push(E.d, nt + Ye),
                          Ze.style.flexBasis !== "auto" &&
                            (Ze.style.flexBasis = nt + Ye)),
                        yr(Ve),
                        Ht &&
                          ne.forEach(function (hi) {
                            hi.pin === Ht &&
                              hi.vars.pinSpacing !== !1 &&
                              (hi._subPinOffset = !0);
                          }),
                        L && he(ln))
                      : ((nt = ua(h, E)),
                        nt &&
                          Ze.style.flexBasis !== "auto" &&
                          (Ze.style.flexBasis = nt + Ye)),
                    L &&
                      ((ht = {
                        top: dt.top + (Wa ? Yi - W : tc) + Ye,
                        left: dt.left + (Wa ? tc : Yi - W) + Ye,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (ht[Mi] = ht["max" + gr] = Math.ceil(dt.width) + Ye),
                      (ht[$i] = ht["max" + ul] = Math.ceil(dt.height) + Ye),
                      (ht[Ut] =
                        ht[Ut + ds] =
                        ht[Ut + us] =
                        ht[Ut + hs] =
                        ht[Ut + fs] =
                          "0"),
                      (ht[He] = it[He]),
                      (ht[He + ds] = it[He + ds]),
                      (ht[He + us] = it[He + us]),
                      (ht[He + hs] = it[He + hs]),
                      (ht[He + fs] = it[He + fs]),
                      (ui = uv(Qt, ht, S)),
                      xt && he(0)),
                    r
                      ? ((Ad = r._initted),
                        Jo(1),
                        r.render(r.duration(), !0, !0),
                        (Nn = Re(E.a) - Jt + V + Te),
                        (Fn = Math.abs(V - Nn) > 1),
                        L && Fn && ui.splice(ui.length - 2, 2),
                        r.render(0, !0, !0),
                        Ad || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        Jo(0))
                      : (Nn = V),
                    wn &&
                      (wn.value
                        ? (wn.style["overflow" + E.a.toUpperCase()] = wn.value)
                        : wn.style.removeProperty("overflow-" + E.a));
                else if (d && he() && !w)
                  for (dt = d.parentNode; dt && dt !== de; )
                    dt._pinOffset &&
                      ((W -= dt._pinOffset), (te -= dt._pinOffset)),
                      (dt = dt.parentNode);
                Ms &&
                  Ms.forEach(function (hi) {
                    return hi.revert(!1, !0);
                  }),
                  ($.start = W),
                  ($.end = te),
                  (pe = Pe = xt ? ln : he()),
                  !w && !xt && (pe < ln && he(ln), ($.scroll.rec = 0)),
                  $.revert(!1, !0),
                  (K = lt()),
                  on && ((ie = -1), on.restart(!0)),
                  (ot = 0),
                  r &&
                    M &&
                    (r._initted || Xi) &&
                    r.progress() !== Xi &&
                    r.progress(Xi || 0, !0).render(r.time(), !0, !0),
                  (ft || Z !== $.progress || w || p || (r && !r._initted)) &&
                    (r &&
                      !M &&
                      (r._initted || Z || r.vars.immediateRender !== !1) &&
                      r.totalProgress(
                        w && W < -0.001 && !Z ? q.utils.normalize(W, te, 0) : Z,
                        !0
                      ),
                    ($.progress = ft || (pe - W) / V === Z ? 0 : Z)),
                  h && m && (Ze._pinOffset = Math.round($.progress * Nn)),
                  ae && ae.invalidate(),
                  isNaN($s) ||
                    (($s -= q.getProperty(z, E.p)),
                    (Xa -= q.getProperty(ze, E.p)),
                    Sa(z, E, $s),
                    Sa(Ie, E, $s - (J || 0)),
                    Sa(ze, E, Xa),
                    Sa(De, E, Xa - (J || 0))),
                  ft && !xt && $.update(),
                  u && !xt && !Zt && ((Zt = !0), u($), (Zt = !1));
              }
            }),
            ($.getVelocity = function () {
              return ((he() - Pe) / (lt() - ss)) * 1e3 || 0;
            }),
            ($.endAnimation = function () {
              cs($.callbackAnimation),
                r &&
                  (ae
                    ? ae.progress(1)
                    : r.paused()
                    ? M || cs(r, $.direction < 0, 1)
                    : cs(r, r.reversed()));
            }),
            ($.labelToScroll = function (B) {
              return (
                (r &&
                  r.labels &&
                  (W || $.refresh() || W) + (r.labels[B] / r.duration()) * V) ||
                0
              );
            }),
            ($.getTrailing = function (B) {
              var Q = ne.indexOf($),
                G =
                  $.direction > 0 ? ne.slice(0, Q).reverse() : ne.slice(Q + 1);
              return (
                Bt(B)
                  ? G.filter(function (J) {
                      return J.vars.preventOverlaps === B;
                    })
                  : G
              ).filter(function (J) {
                return $.direction > 0 ? J.end <= W : J.start >= te;
              });
            }),
            ($.update = function (B, Q, G) {
              if (!(w && !G && !B)) {
                var J = xt === !0 ? ln : $.scroll(),
                  Qe = B ? 0 : (J - W) / V,
                  ce = Qe < 0 ? 0 : Qe > 1 ? 1 : Qe || 0,
                  Ne = $.progress,
                  ft,
                  $e,
                  Te,
                  ye,
                  cn,
                  ke,
                  Ht,
                  Tn;
                if (
                  (Q &&
                    ((Pe = pe),
                    (pe = w ? he() : J),
                    x && ((Vi = di), (di = r && !M ? r.totalProgress() : ce))),
                  g &&
                    h &&
                    !ot &&
                    !la &&
                    jt &&
                    (!ce && W < J + ((J - Pe) / (lt() - ss)) * g
                      ? (ce = 1e-4)
                      : ce === 1 &&
                        te > J + ((J - Pe) / (lt() - ss)) * g &&
                        (ce = 0.9999)),
                  ce !== Ne && $.enabled)
                ) {
                  if (
                    ((ft = $.isActive = !!ce && ce < 1),
                    ($e = !!Ne && Ne < 1),
                    (ke = ft !== $e),
                    (cn = ke || !!ce != !!Ne),
                    ($.direction = ce > Ne ? 1 : -1),
                    ($.progress = ce),
                    cn &&
                      !ot &&
                      ((Te = ce && !Ne ? 0 : ce === 1 ? 1 : Ne === 1 ? 2 : 3),
                      M &&
                        ((ye =
                          (!ke && I[Te + 1] !== "none" && I[Te + 1]) || I[Te]),
                        (Tn =
                          r &&
                          (ye === "complete" || ye === "reset" || ye in r)))),
                    A &&
                      (ke || Tn) &&
                      (Tn || f || !r) &&
                      (ct(A)
                        ? A($)
                        : $.getTrailing(A).forEach(function (Yi) {
                            return Yi.endAnimation();
                          })),
                    M ||
                      (ae && !ot && !la
                        ? (ae._dp._time - ae._start !== ae._time &&
                            ae.render(ae._dp._time - ae._start),
                          ae.resetTo
                            ? ae.resetTo(
                                "totalProgress",
                                ce,
                                r._tTime / r._tDur
                              )
                            : ((ae.vars.totalProgress = ce),
                              ae.invalidate().restart()))
                        : r && r.totalProgress(ce, !!(ot && (K || B)))),
                    h)
                  ) {
                    if ((B && m && (Ze.style[m + E.os2] = Ps), !L))
                      sn(os(Jt + Nn * ce));
                    else if (cn) {
                      if (
                        ((Ht =
                          !B && ce > Ne && te + 1 > J && J + 1 >= yn(b, E)),
                        S)
                      )
                        if (!B && (ft || Ht)) {
                          var nt = Ln(h, !0),
                            it = J - W;
                          Tf(
                            h,
                            de,
                            nt.top + (E === Xe ? it : 0) + Ye,
                            nt.left + (E === Xe ? 0 : it) + Ye
                          );
                        } else Tf(h, Ze);
                      yr(ft || Ht ? ui : Hi),
                        (Fn && ce < 1 && ft) ||
                          sn(Jt + (ce === 1 && !Ht ? Nn : 0));
                    }
                  }
                  x && !me.tween && !ot && !la && on.restart(!0),
                    o &&
                      (ke || (_ && ce && (ce < 1 || !sl))) &&
                      is(o.targets).forEach(function (Yi) {
                        return Yi.classList[ft || _ ? "add" : "remove"](
                          o.className
                        );
                      }),
                    a && !M && !B && a($),
                    cn && !ot
                      ? (M &&
                          (Tn &&
                            (ye === "complete"
                              ? r.pause().totalProgress(1)
                              : ye === "reset"
                              ? r.restart(!0).pause()
                              : ye === "restart"
                              ? r.restart(!0)
                              : r[ye]()),
                          a && a($)),
                        (ke || !sl) &&
                          (c && ke && ol($, c),
                          k[Te] && ol($, k[Te]),
                          _ && (ce === 1 ? $.kill(!1, 1) : (k[Te] = 0)),
                          ke ||
                            ((Te = ce === 1 ? 1 : 3), k[Te] && ol($, k[Te]))),
                        P &&
                          !ft &&
                          Math.abs($.getVelocity()) > (ls(P) ? P : 2500) &&
                          (cs($.callbackAnimation),
                          ae
                            ? ae.progress(1)
                            : cs(r, ye === "reverse" ? 1 : !ce, 1)))
                      : M && a && !ot && a($);
                }
                if (kr) {
                  var dt = w ? (J / w.duration()) * (w._caScrollDist || 0) : J;
                  Va(dt + (z._isFlipped ? 1 : 0)), kr(dt);
                }
                $r && $r((-J / w.duration()) * (w._caScrollDist || 0));
              }
            }),
            ($.enable = function (B, Q) {
              $.enabled ||
                (($.enabled = !0),
                Ue(b, "resize", ms),
                O || Ue(b, "scroll", vr),
                H && Ue(t, "refreshInit", H),
                B !== !1 && (($.progress = Z = 0), (pe = Pe = ie = he())),
                Q !== !1 && $.refresh());
            }),
            ($.getTween = function (B) {
              return B && me ? me.tween : ae;
            }),
            ($.setPositions = function (B, Q, G, J) {
              if (w) {
                var Qe = w.scrollTrigger,
                  ce = w.duration(),
                  Ne = Qe.end - Qe.start;
                (B = Qe.start + (Ne * B) / ce), (Q = Qe.start + (Ne * Q) / ce);
              }
              $.refresh(
                !1,
                !1,
                {
                  start: nf(B, G && !!$._startClamp),
                  end: nf(Q, G && !!$._endClamp),
                },
                J
              ),
                $.update();
            }),
            ($.adjustPinSpacing = function (B) {
              if (Ve && B) {
                var Q = Ve.indexOf(E.d) + 1;
                (Ve[Q] = parseFloat(Ve[Q]) + B + Ye),
                  (Ve[1] = parseFloat(Ve[1]) + B + Ye),
                  yr(Ve);
              }
            }),
            ($.disable = function (B, Q) {
              if (
                $.enabled &&
                (B !== !1 && $.revert(!0, !0),
                ($.enabled = $.isActive = !1),
                Q || (ae && ae.pause()),
                (ln = 0),
                Ce && (Ce.uncache = 1),
                H && Ke(t, "refreshInit", H),
                on &&
                  (on.pause(), me.tween && me.tween.kill() && (me.tween = 0)),
                !O)
              ) {
                for (var G = ne.length; G--; )
                  if (ne[G].scroller === b && ne[G] !== $) return;
                Ke(b, "resize", ms), O || Ke(b, "scroll", vr);
              }
            }),
            ($.kill = function (B, Q) {
              $.disable(B, Q), ae && !Q && ae.kill(), l && delete dl[l];
              var G = ne.indexOf($);
              G >= 0 && ne.splice(G, 1),
                G === _t && ya > 0 && _t--,
                (G = 0),
                ne.forEach(function (J) {
                  return J.scroller === $.scroller && (G = 1);
                }),
                G || xt || ($.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  B && r.revert({ kill: !1 }),
                  Q || r.kill()),
                Ie &&
                  [Ie, De, z, ze].forEach(function (J) {
                    return J.parentNode && J.parentNode.removeChild(J);
                  }),
                gs === $ && (gs = 0),
                h &&
                  (Ce && (Ce.uncache = 1),
                  (G = 0),
                  ne.forEach(function (J) {
                    return J.pin === h && G++;
                  }),
                  G || (Ce.spacer = 0)),
                i.onKill && i.onKill($);
            }),
            ne.push($),
            $.enable(!1, !1),
            Bn && Bn($),
            r && r.add && !V)
          ) {
            var fe = $.update;
            ($.update = function () {
              ($.update = fe), re.cache++, W || te || $.refresh();
            }),
              q.delayedCall(0.01, $.update),
              (V = 0.01),
              (W = te = 0);
          } else $.refresh();
          h && ov();
        }),
        (t.register = function (i) {
          return (
            dr ||
              ((q = i || of()),
              af() && window.document && t.enable(),
              (dr = as)),
            dr
          );
        }),
        (t.defaults = function (i) {
          if (i) for (var r in i) ha[r] = i[r];
          return ha;
        }),
        (t.disable = function (i, r) {
          (as = 0),
            ne.forEach(function (a) {
              return a[r ? "kill" : "disable"](i);
            }),
            Ke(se, "wheel", vr),
            Ke(_e, "scroll", vr),
            clearInterval(sa),
            Ke(_e, "touchcancel", vn),
            Ke(de, "touchstart", vn),
            fa(Ke, _e, "pointerdown,touchstart,mousedown", rf),
            fa(Ke, _e, "pointerup,touchend,mouseup", sf),
            ra.kill(),
            ca(Ke);
          for (var s = 0; s < re.length; s += 3)
            da(Ke, re[s], re[s + 1]), da(Ke, re[s], re[s + 2]);
        }),
        (t.enable = function () {
          if (
            ((se = window),
            (_e = document),
            (Ft = _e.documentElement),
            (de = _e.body),
            q &&
              ((is = q.utils.toArray),
              (rs = q.utils.clamp),
              (tl = q.core.context || vn),
              (Jo = q.core.suppressOverwrites || vn),
              (nl = se.history.scrollRestoration || "auto"),
              (ml = se.pageYOffset || 0),
              q.core.globals("ScrollTrigger", t),
              de))
          ) {
            (as = 1),
              (pr = document.createElement("div")),
              (pr.style.height = "100vh"),
              (pr.style.position = "absolute"),
              bf(),
              ev(),
              Ae.register(q),
              (t.isTouch = Ae.isTouch),
              (ti =
                Ae.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (el = Ae.isTouch === 1),
              Ue(se, "wheel", vr),
              (Zo = [se, _e, Ft, de]),
              q.matchMedia
                ? ((t.matchMedia = function (c) {
                    var u = q.matchMedia(),
                      f;
                    for (f in c) u.add(f, c[f]);
                    return u;
                  }),
                  q.addEventListener("matchMediaInit", function () {
                    return pl();
                  }),
                  q.addEventListener("matchMediaRevert", function () {
                    return vf();
                  }),
                  q.addEventListener("matchMedia", function () {
                    Ii(0, 1), Ai("matchMedia");
                  }),
                  q.matchMedia().add("(orientation: portrait)", function () {
                    return hl(), hl;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              hl(),
              Ue(_e, "scroll", vr);
            var i = de.hasAttribute("style"),
              r = de.style,
              s = r.borderTopStyle,
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
                r.borderTopStyle = "solid",
                o = Ln(de),
                Xe.m = Math.round(o.top + Xe.sc()) || 0,
                yt.m = Math.round(o.left + yt.sc()) || 0,
                s
                  ? (r.borderTopStyle = s)
                  : r.removeProperty("border-top-style"),
                i ||
                  (de.setAttribute("style", ""), de.removeAttribute("style")),
                sa = setInterval(mf, 250),
                q.delayedCall(0.5, function () {
                  return (la = 0);
                }),
                Ue(_e, "touchcancel", vn),
                Ue(de, "touchstart", vn),
                fa(Ue, _e, "pointerdown,touchstart,mousedown", rf),
                fa(Ue, _e, "pointerup,touchend,mouseup", sf),
                Qo = q.utils.checkPrefix("transform"),
                _a.push(Qo),
                dr = lt(),
                ra = q.delayedCall(0.2, Ii).pause(),
                hr = [
                  _e,
                  "visibilitychange",
                  function () {
                    var c = se.innerWidth,
                      u = se.innerHeight;
                    _e.hidden
                      ? ((Uu = c), (Ku = u))
                      : (Uu !== c || Ku !== u) && ms();
                  },
                  _e,
                  "DOMContentLoaded",
                  Ii,
                  se,
                  "load",
                  Ii,
                  se,
                  "resize",
                  ms,
                ],
                ca(Ue),
                ne.forEach(function (c) {
                  return c.enable(0, 1);
                }),
                l = 0;
              l < re.length;
              l += 3
            )
              da(Ke, re[l], re[l + 1]), da(Ke, re[l], re[l + 2]);
          }
        }),
        (t.config = function (i) {
          "limitCallbacks" in i && (sl = !!i.limitCallbacks);
          var r = i.syncInterval;
          (r && clearInterval(sa)) || ((sa = r) && setInterval(mf, r)),
            "ignoreMobileResize" in i &&
              (el = t.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (ca(Ke) || ca(Ue, i.autoRefreshEvents || "none"),
              (Qu = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (t.scrollerProxy = function (i, r) {
          var s = kt(i),
            a = re.indexOf(s),
            o = Pi(s);
          ~a && re.splice(a, o ? 6 : 2),
            r && (o ? gn.unshift(se, r, de, r, Ft, r) : gn.unshift(s, r));
        }),
        (t.clearMatchMedia = function (i) {
          ne.forEach(function (r) {
            return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
          });
        }),
        (t.isInViewport = function (i, r, s) {
          var a = (Bt(i) ? kt(i) : i).getBoundingClientRect(),
            o = a[s ? Mi : $i] * r || 0;
          return s
            ? a.right - o > 0 && a.left + o < se.innerWidth
            : a.bottom - o > 0 && a.top + o < se.innerHeight;
        }),
        (t.positionInViewport = function (i, r, s) {
          Bt(i) && (i = kt(i));
          var a = i.getBoundingClientRect(),
            o = a[s ? Mi : $i],
            l =
              r == null
                ? o / 2
                : r in pa
                ? pa[r] * o
                : ~r.indexOf("%")
                ? (parseFloat(r) * o) / 100
                : parseFloat(r) || 0;
          return s
            ? (a.left + l) / se.innerWidth
            : (a.top + l) / se.innerHeight;
        }),
        (t.killAll = function (i) {
          if (
            (ne.slice(0).forEach(function (s) {
              return s.vars.id !== "ScrollSmoother" && s.kill();
            }),
            i !== !0)
          ) {
            var r = Oi.killAll || [];
            (Oi = {}),
              r.forEach(function (s) {
                return s();
              });
          }
        }),
        t
      );
    })();
  (U.version = "3.13.0"),
    (U.saveStyles = function (t) {
      return t
        ? is(t).forEach(function (e) {
            if (e && e.style) {
              var n = qt.indexOf(e);
              n >= 0 && qt.splice(n, 5),
                qt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  q.core.getCache(e),
                  tl()
                );
            }
          })
        : qt;
    }),
    (U.revert = function (t, e) {
      return pl(!t, e);
    }),
    (U.create = function (t, e) {
      return new U(t, e);
    }),
    (U.refresh = function (t) {
      return t ? ms(!0) : (dr || U.register()) && Ii(!0);
    }),
    (U.update = function (t) {
      return ++re.cache && In(t === !0 ? 2 : 0);
    }),
    (U.clearScrollMemory = yf),
    (U.maxScroll = function (t, e) {
      return yn(t, e ? yt : Xe);
    }),
    (U.getScrollFunc = function (t, e) {
      return ei(kt(t), e ? yt : Xe);
    }),
    (U.getById = function (t) {
      return dl[t];
    }),
    (U.getAll = function () {
      return ne.filter(function (t) {
        return t.vars.id !== "ScrollSmoother";
      });
    }),
    (U.isScrolling = function () {
      return !!jt;
    }),
    (U.snapDirectional = fl),
    (U.addEventListener = function (t, e) {
      var n = Oi[t] || (Oi[t] = []);
      ~n.indexOf(e) || n.push(e);
    }),
    (U.removeEventListener = function (t, e) {
      var n = Oi[t],
        i = n && n.indexOf(e);
      i >= 0 && n.splice(i, 1);
    }),
    (U.batch = function (t, e) {
      var n = [],
        i = {},
        r = e.interval || 0.016,
        s = e.batchMax || 1e9,
        a = function (c, u) {
          var f = [],
            d = [],
            h = q
              .delayedCall(r, function () {
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
        i[o] =
          o.substr(0, 2) === "on" && ct(e[o]) && o !== "onRefreshInit"
            ? a(o, e[o])
            : e[o];
      return (
        ct(s) &&
          ((s = s()),
          Ue(U, "refresh", function () {
            return (s = e.batchMax());
          })),
        is(t).forEach(function (l) {
          var c = {};
          for (o in i) c[o] = i[o];
          (c.trigger = l), n.push(U.create(c));
        }),
        n
      );
    });
  var Cf = function (e, n, i, r) {
      return (
        n > r ? e(r) : n < 0 && e(0),
        i > r ? (r - n) / (i - n) : i < 0 ? n / (n - i) : 1
      );
    },
    yl = function t(e, n) {
      n === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            n === !0
              ? "auto"
              : n
              ? "pan-" + n + (Ae.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === Ft && t(de, n);
    },
    Ta = { auto: 1, scroll: 1 },
    dv = function (e) {
      var n = e.event,
        i = e.target,
        r = e.axis,
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
            !(Ta[(l = Kt(s)).overflowY] || Ta[l.overflowX]));

        )
          s = s.parentNode;
        (a._isScroll =
          s &&
          s !== i &&
          !Pi(s) &&
          (Ta[(l = Kt(s)).overflowY] || Ta[l.overflowX])),
          (a._isScrollT = o);
      }
      (a._isScroll || r === "x") && (n.stopPropagation(), (n._gsapAllow = !0));
    },
    Pf = function (e, n, i, r) {
      return Ae.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: n,
        onWheel: (r = r && dv),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return i && Ue(_e, Ae.eventTypes[0], Mf, !1, !0);
        },
        onDisable: function () {
          return Ke(_e, Ae.eventTypes[0], Mf, !0);
        },
      });
    },
    hv = /(input|label|select|textarea)/i,
    kf,
    Mf = function (e) {
      var n = hv.test(e.target.tagName);
      (n || kf) && ((e._gsapAllow = !0), (kf = n));
    },
    pv = function (e) {
      ki(e) || (e = {}),
        (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
        e.type || (e.type = "wheel,touch"),
        (e.debounce = !!e.debounce),
        (e.id = e.id || "normalizer");
      var n = e,
        i = n.normalizeScrollX,
        r = n.momentum,
        s = n.allowNestedScroll,
        a = n.onRelease,
        o,
        l,
        c = kt(e.target) || Ft,
        u = q.core.globals().ScrollSmoother,
        f = u && u.get(),
        d =
          ti &&
          ((e.content && kt(e.content)) ||
            (f && e.content !== !1 && !f.smooth() && f.content())),
        h = ei(c, Xe),
        m = ei(c, yt),
        p = 1,
        g =
          (Ae.isTouch && se.visualViewport
            ? se.visualViewport.scale * se.visualViewport.width
            : se.outerWidth) / se.innerWidth,
        y = 0,
        v = ct(r)
          ? function () {
              return r(o);
            }
          : function () {
              return r || 2.8;
            },
        _,
        x,
        S = Pf(c, e.type, !0, s),
        C = function () {
          return (x = !1);
        },
        w = vn,
        P = vn,
        A = function () {
          (l = yn(c, Xe)),
            (P = rs(ti ? 1 : 0, l)),
            i && (w = rs(0, yn(c, yt))),
            (_ = Li);
        },
        E = function () {
          (d._gsap.y = os(parseFloat(d._gsap.y) + h.offset) + "px"),
            (d.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(d._gsap.y) +
              ", 0, 1)"),
            (h.offset = h.cacheID = 0);
        },
        M = function () {
          if (x) {
            requestAnimationFrame(C);
            var D = os(o.deltaY / 2),
              N = P(h.v - D);
            if (d && N !== h.v + h.offset) {
              h.offset = N - h.v;
              var $ = os((parseFloat(d && d._gsap.y) || 0) - h.offset);
              (d.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                $ +
                ", 0, 1)"),
                (d._gsap.y = $ + "px"),
                (h.cacheID = re.cache),
                In();
            }
            return !0;
          }
          h.offset && E(), (x = !0);
        },
        b,
        T,
        O,
        L,
        k = function () {
          A(),
            b.isActive() &&
              b.vars.scrollY > l &&
              (h() > l ? b.progress(1) && h(l) : b.resetTo("scrollY", l));
        };
      return (
        d && q.set(d, { y: "+=0" }),
        (e.ignoreCheck = function (I) {
          return (
            (ti && I.type === "touchmove" && M()) ||
            (p > 1.05 && I.type !== "touchstart") ||
            o.isGesturing ||
            (I.touches && I.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          x = !1;
          var I = p;
          (p = os(((se.visualViewport && se.visualViewport.scale) || 1) / g)),
            b.pause(),
            I !== p && yl(c, p > 1.01 ? !0 : i ? !1 : "x"),
            (T = m()),
            (O = h()),
            A(),
            (_ = Li);
        }),
        (e.onRelease = e.onGestureStart =
          function (I, D) {
            if ((h.offset && E(), !D)) L.restart(!0);
            else {
              re.cache++;
              var N = v(),
                $,
                H;
              i &&
                (($ = m()),
                (H = $ + (N * 0.05 * -I.velocityX) / 0.227),
                (N *= Cf(m, $, H, yn(c, yt))),
                (b.vars.scrollX = w(H))),
                ($ = h()),
                (H = $ + (N * 0.05 * -I.velocityY) / 0.227),
                (N *= Cf(h, $, H, yn(c, Xe))),
                (b.vars.scrollY = P(H)),
                b.invalidate().duration(N).play(0.01),
                ((ti && b.vars.scrollY >= l) || $ >= l - 1) &&
                  q.to({}, { onUpdate: k, duration: N });
            }
            a && a(I);
          }),
        (e.onWheel = function () {
          b._ts && b.pause(), lt() - y > 1e3 && ((_ = 0), (y = lt()));
        }),
        (e.onChange = function (I, D, N, $, H) {
          if (
            (Li !== _ && A(),
            D && i && m(w($[2] === D ? T + (I.startX - I.x) : m() + D - $[1])),
            N)
          ) {
            h.offset && E();
            var Y = H[2] === N,
              le = Y ? O + I.startY - I.y : h() + N - H[1],
              ie = P(le);
            Y && le !== ie && (O += ie - le), h(ie);
          }
          (N || D) && In();
        }),
        (e.onEnable = function () {
          yl(c, i ? !1 : "x"),
            U.addEventListener("refresh", k),
            Ue(se, "resize", k),
            h.smooth &&
              ((h.target.style.scrollBehavior = "auto"),
              (h.smooth = m.smooth = !1)),
            S.enable();
        }),
        (e.onDisable = function () {
          yl(c, !0),
            Ke(se, "resize", k),
            U.removeEventListener("refresh", k),
            S.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (o = new Ae(e)),
        (o.iOS = ti),
        ti && !h() && h(1),
        ti && q.ticker.add(vn),
        (L = o._dc),
        (b = q.to(o, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: Ef(h, h(), function () {
              return b.pause();
            }),
          },
          onUpdate: In,
          onComplete: L.vars.onComplete,
        })),
        o
      );
    };
  (U.sort = function (t) {
    if (ct(t)) return ne.sort(t);
    var e = se.pageYOffset || 0;
    return (
      U.getAll().forEach(function (n) {
        return (n._sortY = n.trigger
          ? e + n.trigger.getBoundingClientRect().top
          : n.start + se.innerHeight);
      }),
      ne.sort(
        t ||
          function (n, i) {
            return (
              (n.vars.refreshPriority || 0) * -1e6 +
              (n.vars.containerAnimation ? 1e6 : n._sortY) -
              ((i.vars.containerAnimation ? 1e6 : i._sortY) +
                (i.vars.refreshPriority || 0) * -1e6)
            );
          }
      )
    );
  }),
    (U.observe = function (t) {
      return new Ae(t);
    }),
    (U.normalizeScroll = function (t) {
      if (typeof t == "undefined") return bt;
      if (t === !0 && bt) return bt.enable();
      if (t === !1) {
        bt && bt.kill(), (bt = t);
        return;
      }
      var e = t instanceof Ae ? t : pv(t);
      return (
        bt && bt.target === e.target && bt.kill(), Pi(e.target) && (bt = e), e
      );
    }),
    (U.core = {
      _getVelocityProp: Ko,
      _inputObserver: Pf,
      _scrollers: re,
      _proxies: gn,
      bridge: {
        ss: function () {
          jt || Ai("scrollStart"), (jt = lt());
        },
        ref: function () {
          return ot;
        },
      },
    }),
    of() && q.registerPlugin(U);
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let vs,
    _r,
    _l,
    mv = () => _l || be.register(window.gsap),
    $f = typeof Intl != "undefined" ? new Intl.Segmenter() : 0,
    Ea = (t) =>
      typeof t == "string"
        ? Ea(document.querySelectorAll(t))
        : "length" in t
        ? Array.from(t)
        : [t],
    Of = (t) => Ea(t).filter((e) => e instanceof HTMLElement),
    bl = [],
    xl = function () {},
    gv = /\s+/g,
    Af = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    Lf = { left: 0, top: 0, width: 0, height: 0 },
    If = (t, e) => {
      if (e) {
        let n = new Set(t.join("").match(e) || bl),
          i = t.length,
          r,
          s,
          a,
          o;
        if (n.size)
          for (; --i > -1; ) {
            s = t[i];
            for (a of n)
              if (a.startsWith(s) && a.length > s.length) {
                for (
                  r = 0, o = s;
                  a.startsWith((o += t[i + ++r])) && o.length < a.length;

                );
                if (r && o.length === a.length) {
                  (t[i] = a), t.splice(i + 1, r);
                  break;
                }
              }
          }
      }
      return t;
    },
    Df = (t) =>
      window.getComputedStyle(t).display === "inline" &&
      (t.style.display = "inline-block"),
    br = (t, e, n) =>
      e.insertBefore(typeof t == "string" ? document.createTextNode(t) : t, n),
    Sl = (t, e, n) => {
      let i = e[t + "sClass"] || "",
        { tag: r = "div", aria: s = "auto", propIndex: a = !1 } = e,
        o = t === "line" ? "block" : "inline-block",
        l = i.indexOf("++") > -1,
        c = (u) => {
          let f = document.createElement(r),
            d = n.length + 1;
          return (
            i && (f.className = i + (l ? " " + i + d : "")),
            a && f.style.setProperty("--" + t, d + ""),
            s !== "none" && f.setAttribute("aria-hidden", "true"),
            r !== "span" &&
              ((f.style.position = "relative"), (f.style.display = o)),
            (f.textContent = u),
            n.push(f),
            f
          );
        };
      return l && (i = i.replace("++", "")), (c.collection = n), c;
    },
    vv = (t, e, n, i) => {
      let r = Sl("line", n, i),
        s = window.getComputedStyle(t).textAlign || "left";
      return (a, o) => {
        let l = r("");
        for (l.style.textAlign = s, t.insertBefore(l, e[a]); a < o; a++)
          l.appendChild(e[a]);
        l.normalize();
      };
    },
    zf = (t, e, n, i, r, s, a, o, l, c) => {
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
        C,
        w,
        P,
        A,
        E,
        M,
        b,
        T,
        O,
        L,
        k,
        I,
        D,
        N,
        $,
        H,
        Y;
      for (
        typeof h == "object"
          ? ((w = h.delimiter || h), (C = h.replaceWith || ""))
          : (C = h === "" ? "" : h || " "),
          S = C !== " ";
        d < f.length;
        d++
      )
        if (((P = f[d]), P.nodeType === 3)) {
          for (
            N = P.textContent || "",
              m
                ? (N = N.replace(gv, " "))
                : v &&
                  (N = N.replace(
                    /\n/g,
                    C +
                      `
`
                  )),
              p && (N = p(N, t)),
              P.textContent = N,
              A = C || w ? N.split(w || C) : N.match(o) || bl,
              H = A[A.length - 1],
              b = S ? H.slice(-1) === " " : !H,
              H || A.pop(),
              y = g,
              M = S ? A[0].charAt(0) === " " : !A[0],
              M && br(" ", t, P),
              A[0] || A.shift(),
              If(A, l),
              (s && c) || (P.textContent = ""),
              T = 1;
            T <= A.length;
            T++
          )
            if (
              (($ = A[T - 1]),
              !m &&
                v &&
                $.charAt(0) ===
                  `
` &&
                ((u = P.previousSibling) == null || u.remove(),
                br(document.createElement("br"), t, P),
                ($ = $.slice(1))),
              !m && $ === "")
            )
              br(C, t, P);
            else if ($ === " ") t.insertBefore(document.createTextNode(" "), P);
            else {
              if (
                (S && $.charAt(0) === " " && br(" ", t, P),
                _ && T === 1 && !M && x.indexOf(_.parentNode) > -1
                  ? ((E = x[x.length - 1]),
                    E.appendChild(document.createTextNode(i ? "" : $)))
                  : ((E = n(i ? "" : $)),
                    br(E, t, P),
                    _ && T === 1 && !M && E.insertBefore(_, E.firstChild)),
                i)
              )
                for (
                  L = $f
                    ? If(
                        [...$f.segment($)].map((le) => le.segment),
                        l
                      )
                    : $.match(o) || bl,
                    Y = 0;
                  Y < L.length;
                  Y++
                )
                  E.appendChild(
                    L[Y] === " " ? document.createTextNode(" ") : i(L[Y])
                  );
              if (s && c) {
                if (
                  ((N = P.textContent = N.substring($.length + 1, N.length)),
                  (O = E.getBoundingClientRect()),
                  O.top > y.top && O.left <= y.left)
                ) {
                  for (k = t.cloneNode(), I = t.childNodes[0]; I && I !== E; )
                    (D = I), (I = I.nextSibling), k.appendChild(D);
                  t.parentNode.insertBefore(k, t), r && Df(k);
                }
                y = O;
              }
              (T < A.length || b) &&
                br(
                  T >= A.length ? " " : S && $.slice(-1) === " " ? " " + C : C,
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
              : (zf(P, e, n, i, r, s, a, o, l, !0), (_ = 0)),
            r && Df(P));
    };
  const Rf = class Dd {
    constructor(e, n) {
      (this.isSplit = !1),
        mv(),
        (this.elements = Of(e)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this.masks = []),
        (this.vars = n),
        (this._split = () => this.isSplit && this.split(this.vars));
      let i = [],
        r,
        s = () => {
          let a = i.length,
            o;
          for (; a--; ) {
            o = i[a];
            let l = o.element.offsetWidth;
            if (l !== o.width) {
              (o.width = l), this._split();
              return;
            }
          }
        };
      (this._data = {
        orig: i,
        obs:
          typeof ResizeObserver != "undefined" &&
          new ResizeObserver(() => {
            clearTimeout(r), (r = setTimeout(s, 200));
          }),
      }),
        xl(this),
        this.split(n);
    }
    split(e) {
      this.isSplit && this.revert(), (this.vars = e = e || this.vars || {});
      let {
          type: n = "chars,words,lines",
          aria: i = "auto",
          deepSlice: r = !0,
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
        p = m ? new RegExp(m.source + "|" + Af.source, "gu") : Af,
        g = !!e.ignore && Of(e.ignore),
        { orig: y, animTime: v, obs: _ } = this._data,
        x;
      return (
        (f || d || u) &&
          (this.elements.forEach((S, C) => {
            (y[C] = {
              element: S,
              html: S.innerHTML,
              ariaL: S.getAttribute("aria-label"),
              ariaH: S.getAttribute("aria-hidden"),
            }),
              i === "auto"
                ? S.setAttribute("aria-label", (S.textContent || "").trim())
                : i === "hidden" && S.setAttribute("aria-hidden", "true");
            let w = [],
              P = [],
              A = [],
              E = f ? Sl("char", e, w) : null,
              M = Sl("word", e, P),
              b,
              T,
              O,
              L;
            if ((zf(S, e, M, E, h, r && (u || h), g, p, m, !1), u)) {
              let k = Ea(S.childNodes),
                I = vv(S, k, e, A),
                D,
                N = [],
                $ = 0,
                H = k.map((le) =>
                  le.nodeType === 1 ? le.getBoundingClientRect() : Lf
                ),
                Y = Lf;
              for (b = 0; b < k.length; b++)
                (D = k[b]),
                  D.nodeType === 1 &&
                    (D.nodeName === "BR"
                      ? (N.push(D), I($, b + 1), ($ = b + 1), (Y = H[$]))
                      : (b &&
                          H[b].top > Y.top &&
                          H[b].left <= Y.left &&
                          (I($, b), ($ = b)),
                        (Y = H[b])));
              $ < b && I($, b),
                N.forEach((le) => {
                  var ie;
                  return (ie = le.parentNode) == null
                    ? void 0
                    : ie.removeChild(le);
                });
            }
            if (!d) {
              for (b = 0; b < P.length; b++)
                if (
                  ((T = P[b]),
                  f || !T.nextSibling || T.nextSibling.nodeType !== 3)
                )
                  if (s && !u) {
                    for (
                      O = document.createElement("span"),
                        O.style.whiteSpace = "nowrap";
                      T.firstChild;

                    )
                      O.appendChild(T.firstChild);
                    T.replaceWith(O);
                  } else T.replaceWith(...T.childNodes);
                else
                  (L = T.nextSibling),
                    L &&
                      L.nodeType === 3 &&
                      ((L.textContent =
                        (T.textContent || "") + (L.textContent || "")),
                      T.remove());
              (P.length = 0), S.normalize();
            }
            this.lines.push(...A), this.words.push(...P), this.chars.push(...w);
          }),
          c &&
            this[c] &&
            this.masks.push(
              ...this[c].map((S) => {
                let C = S.cloneNode();
                return (
                  S.replaceWith(C),
                  C.appendChild(S),
                  S.className &&
                    (C.className = S.className.replace(
                      /(\b\w+\b)/g,
                      "$1-mask"
                    )),
                  (C.style.overflow = "clip"),
                  C
                );
              })
            )),
        (this.isSplit = !0),
        _r &&
          (o
            ? _r.addEventListener("loadingdone", this._split)
            : _r.status === "loading" &&
              console.warn("SplitText called before fonts loaded")),
        (x = a && a(this)) &&
          x.totalTime &&
          (this._data.anim = v ? x.totalTime(v) : x),
        u &&
          o &&
          this.elements.forEach((S, C) => {
            (y[C].width = S.offsetWidth), _ && _.observe(S);
          }),
        this
      );
    }
    revert() {
      var e, n;
      let { orig: i, anim: r, obs: s } = this._data;
      return (
        s && s.disconnect(),
        i.forEach(({ element: a, html: o, ariaL: l, ariaH: c }) => {
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
          i.length =
          this.masks.length =
            0),
        (this.isSplit = !1),
        _r == null || _r.removeEventListener("loadingdone", this._split),
        r && ((this._data.animTime = r.totalTime()), r.revert()),
        (n = (e = this.vars).onRevert) == null || n.call(e, this),
        this
      );
    }
    static create(e, n) {
      return new Dd(e, n);
    }
    static register(e) {
      (vs = vs || e || window.gsap),
        vs && ((Ea = vs.utils.toArray), (xl = vs.core.context || xl)),
        !_l && window.innerWidth > 0 && ((_r = document.fonts), (_l = !0));
    }
  };
  Rf.version = "3.13.0";
  let be = Rf;
  R.registerPlugin(U, be);
  const yv = () =>
      Ya(this, null, function* () {
        yield document.fonts.ready,
          U.getAll().forEach((e) => {
            e.vars &&
              e.vars.trigger &&
              e.vars.trigger.hasAttribute &&
              e.vars.trigger.hasAttribute("split-text") &&
              e.kill(!0);
          }),
          document.querySelectorAll("[split-text]").forEach((e) => {
            be.create(e, {
              type: "lines",
              autoSplit: !0,
              mask: "lines",
              linesClass: "split-line",
              tag: "div",
              onSplit(n) {
                n.lines.forEach((s) => {
                  const a = document.createElement("div");
                  a.setAttribute("data-line-wrapper", ""),
                    (a.style.overflow = "clip"),
                    (a.style.paddingBottom = "5px"),
                    (a.style.position = "relative"),
                    s.parentNode.insertBefore(a, s),
                    a.appendChild(s);
                });
                const i = e.querySelectorAll("[data-line-wrapper]"),
                  r = Array.from(i).map((s) => s.firstChild);
                return (
                  R.set(r, { willChange: "transform" }),
                  R.from(r, {
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
                  })
                );
              },
            });
          });
      }),
    ni = () => {
      yv();
    };
  R.registerPlugin(U);
  const _v = () => {
      U.getAll().forEach((i) => {
        i.vars &&
          i.vars.trigger &&
          i.vars.trigger.hasAttribute &&
          i.vars.trigger.hasAttribute("split-text") &&
          i.kill(!0);
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
      e.forEach((i) => {
        const r = i.getAttribute("motion"),
          s = i.getAttribute("motion-group"),
          a = i.getAttribute("motion-duration")
            ? parseFloat(i.getAttribute("motion-duration"))
            : t.duration,
          o = i.getAttribute("motion-delay")
            ? parseFloat(i.getAttribute("motion-delay"))
            : 0,
          l = i.getAttribute("motion-ease") || t.ease,
          c = i.getAttribute("motion-start") || t.start;
        r === "fade"
          ? R.set(i, { opacity: 0 })
          : r === "move-up" && R.set(i, { opacity: 0, y: 50 }),
          s
            ? (n[s] || (n[s] = []),
              n[s].push({
                element: i,
                motionType: r,
                duration: a,
                delay: o,
                ease: l,
              }))
            : bv(i, r, a, o, l, c);
      }),
        Object.keys(n).forEach((i) => {
          const r = n[i];
          if (r.length > 0) {
            const s = document.querySelectorAll(`[motion-group="${i}"]`);
            let a = null,
              o = t.stagger,
              l = t.start;
            const c = document.querySelector(`[motion-group-container="${i}"]`);
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
            const u = R.timeline({
                scrollTrigger: {
                  trigger: a,
                  start: l,
                  toggleActions: "play none none reverse",
                  markers: t.markers,
                },
              }),
              f = r
                .filter((h) => h.motionType === "fade")
                .map((h) => h.element),
              d = r
                .filter((h) => h.motionType === "move-up")
                .map((h) => h.element);
            f.length > 0 &&
              u.to(
                f,
                {
                  opacity: 1,
                  duration: r[0].duration,
                  stagger: o,
                  ease: r[0].ease,
                  delay: r[0].delay,
                },
                0
              ),
              d.length > 0 &&
                u.to(
                  d,
                  {
                    opacity: 1,
                    y: 0,
                    duration: r[0].duration,
                    stagger: o,
                    ease: r[0].ease,
                    delay: r[0].delay,
                  },
                  0
                );
          }
        });
    },
    bv = (t, e, n, i, r, s) => {
      const a = R.timeline({
        scrollTrigger: {
          trigger: t,
          start: s,
          toggleActions: "play none none reverse",
          markers: !1,
        },
      });
      e === "fade"
        ? a.to(t, { opacity: 1, duration: n, delay: i, ease: r })
        : e === "move-up" &&
          a.to(t, { opacity: 1, y: 0, duration: n, delay: i, ease: r });
    },
    ii = () => {
      _v();
    };
  R.registerPlugin(be);
  const xv = (t) => {
    const e = document.querySelectorAll("[page-load='component']"),
      n = document.querySelectorAll("[page-load='wrap']"),
      i = document.querySelectorAll("[page-load='gradient']"),
      r = document.querySelectorAll("[page-load='text']"),
      s = document.querySelectorAll(".page_cover"),
      a = R.timeline();
    R.set(i, { opacity: 0 }), R.set(n, { opacity: 0 });
    const o = [];
    r.forEach((c) => {
      const u = be.create(c, {
        type: "lines",
        mask: "lines",
        linesClass: "pg-load-text-line",
        onSplit: function (f) {
          return (
            R.set(f.lines, {
              opacity: 0,
              yPercent: 100,
              willChange: "transform, opacity",
            }),
            f
          );
        },
      });
      o.push(u);
    });
    const l = o.flatMap((c) => c.lines);
    return (
      a.to(i, { opacity: 1, duration: 2, ease: "power1.out" }),
      a.to(n, { opacity: 1, duration: 1, ease: "power2.inOut" }, "<"),
      a.to(
        s,
        {
          opacity: 0,
          duration: 1,
          pointerEvents: "none",
          ease: "power2.inOut",
        },
        "<"
      ),
      a.to(r, { opacity: 1, duration: 1, ease: "power2.inOut" }),
      a.to(
        l,
        {
          opacity: 1,
          duration: 1.6,
          stagger: 0.2,
          yPercent: 0,
          ease: "expo.inOut",
        },
        "-=1.4"
      ),
      a.to(l, {
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        yPercent: -100,
        ease: "expo.inOut",
        delay: 0.8,
      }),
      a.to(
        e,
        {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 1.6,
          ease: "expo.inOut",
          onComplete: () => {
            R.set(e, { pointerEvents: "none" }), o.forEach((c) => c.revert());
          },
        },
        "-=0.7"
      ),
      a
    );
  };
  R.registerPlugin(be);
  const Sv = (t) => {
      const e = document.querySelector("[home-hero='text']"),
        n = document.querySelector("[home-hero='btn']"),
        i = document.querySelector("[home-hero='visual']");
      e &&
        be.create(e, {
          type: "lines",
          autoSplit: !0,
          mask: "lines",
          linesClass: "home-hero-text-line",
          tag: "span",
          onSplit(r) {
            r.lines.forEach((o) => {
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
            const a = R.timeline();
            return (
              R.set(".move-text", { opacity: 0, yPercent: 100 }),
              R.set(n, { opacity: 0 }),
              R.set(i, { opacity: 0 }),
              a.to(".move-text", {
                opacity: 1,
                duration: 1.8,
                stagger: 0.08,
                ease: "expo.inOut",
                yPercent: 0,
              }),
              a.to(n, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
              a.to(
                i,
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 1.4,
                  ease: "expo.inOut",
                },
                "-=1"
              ),
              a
            );
          },
        });
    },
    ri = (t) => {
      const e = document.querySelectorAll("[nav-load='component']"),
        n = document.querySelectorAll("[main-nav='brand']"),
        i = document.querySelectorAll("[nav-link='wrap']");
      R.set(e, { opacity: 0 }),
        R.set(n, { opacity: 0 }),
        R.set(i, { opacity: 0, yPercent: -100 });
      const r = R.timeline();
      return (
        r.to(e, { opacity: 1, duration: 1, ease: "expo.inOut" }),
        r.to(n, { opacity: 1, duration: 1, ease: "power1.out" }, "-=0.8"),
        r.to(
          i,
          { opacity: 1, yPercent: 0, duration: 0.6, stagger: 0.06 },
          "-=0.8"
        ),
        r
      );
    },
    Tv = () => {
      const t = document.querySelector("[home-hero='visual']"),
        e = document.querySelector("[home-hero='follow-button']");
      R.set(e, {
        xPercent: -50,
        yPercent: -50,
        willChange: "transform, opacity",
      });
      let n = !1;
      const i = t.getBoundingClientRect(),
        r = i.width / 2,
        s = i.height / 2;
      t.addEventListener("mouseenter", () => {
        n = !0;
      }),
        t.addEventListener("mouseleave", () => {
          (n = !1),
            R.to(e, {
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
            R.to(e, {
              x: u - r + 50,
              y: f - s - 30,
              duration: 1.4,
              ease: "elastic.out(2, 0.75)",
            });
          }
        });
    },
    Ev = () => {
      Tv();
    },
    Nf = () => {
      console.log("homeInit"), rh(), Ec(), ni(), ii(), Ev();
      const t = xv();
      t.add(() => ri(), "-=0.8"), t.add(() => Sv(), "-=0.8");
    },
    Ff = () => {
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
                  (i) => !i.classList.contains("swiper-slide-duplicate")
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
  R.registerPlugin(U);
  const wv = () => {
      const t = document.querySelector("[impact-slide='main']"),
        e = t.querySelectorAll("[impact-slide='component']");
      if (!t || !e.length) return;
      e.forEach((i, r) => {
        R.set(i, {
          clipPath: r === 0 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
        });
      });
      const n = R.timeline({
        scrollTrigger: {
          trigger: t,
          start: "top top",
          end: `+=${e.length * 100}%`,
          scrub: !0,
          pin: !1,
          markers: !1,
        },
      });
      e.forEach((i, r) => {
        r !== 0 &&
          n.to(
            i,
            { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.inOut" },
            "+=0.33"
          );
      });
    },
    Cv = () => {
      wv();
    },
    Pv = () => {
      document.querySelectorAll("[image-index='wrap']").forEach((t) => {
        const e = t.querySelector("[image-index='large']"),
          n = t.querySelector("[image-index='small']"),
          i = (l, c) => {
            const u = [];
            let f = l;
            for (; f && f !== c; )
              (f = f.parentElement), f && f !== c && u.push(f);
            return u;
          },
          r = i(e, t),
          s = i(n, t),
          a = (l, c, u) => {
            (l.style.zIndex = u),
              c.forEach((f) => {
                f.style.zIndex = u;
              });
          };
        a(e, r, "2"), a(n, s, "1");
        const o = (l, c, u, f) => {
          a(l, u, "2"), a(c, f, "1");
        };
        e.addEventListener("click", () => o(e, n, r, s)),
          n.addEventListener("click", () => o(n, e, s, r));
      });
    },
    Tl = () => {
      Pv();
    },
    kv = () => {
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
                  (i) => !i.classList.contains("swiper-slide-duplicate")
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
    Di = (t) => {
      const e = document.querySelector(".page_overlay"),
        n = document.querySelector("[page-overlay='text-wrap']"),
        i = R.timeline();
      return (
        i.fromTo(
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
        i.fromTo(
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
        i.to(
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
        i
      );
    };
  R.registerPlugin(be);
  const Mv = (t) => {
      const e = document.querySelector("[about-hero='text']"),
        n = document.querySelectorAll("[about-hero='visual']");
      e &&
        be.create(e, {
          type: "lines",
          autoSplit: !0,
          mask: "lines",
          linesClass: "about-hero-text-line",
          tag: "span",
          onSplit(i) {
            i.lines.forEach((a) => {
              const o = document.createElement("div");
              o.classList.add("move-text"),
                a.parentNode.insertBefore(o, a),
                o.appendChild(a);
            });
            const r = e.querySelectorAll("span");
            r.length &&
              r.forEach((a) => {
                const o = document.createElement("div");
                (o.style.overflow = "clip"),
                  (o.style.paddingBottom = "3px"),
                  a.parentNode.insertBefore(o, a),
                  o.appendChild(a);
              });
            const s = R.timeline();
            return (
              R.set(".move-text", { opacity: 0, yPercent: 100 }),
              R.set(n, { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }),
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
        });
    },
    $v = () => {
      kv(), Ff(), Cv(), Tl(), ni(), ii();
      const t = Di();
      t.add(() => ri(), "-=1"), t.add(() => Mv(), "-=1");
    };
  var Ov = "1.3.1";
  function Bf(t, e, n) {
    return Math.max(t, Math.min(e, n));
  }
  function Av(t, e, n) {
    return (1 - n) * t + n * e;
  }
  function Lv(t, e, n, i) {
    return Av(t, e, 1 - Math.exp(-n * i));
  }
  function Iv(t, e) {
    return ((t % e) + e) % e;
  }
  var Dv = class {
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
        const i = Bf(0, this.currentTime / this.duration, 1);
        e = i >= 1;
        const r = e ? 1 : this.easing(i);
        this.value = this.from + (this.to - this.from) * r;
      } else
        this.lerp
          ? ((this.value = Lv(this.value, this.to, this.lerp * 60, t)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (e = !0)))
          : ((this.value = this.to), (e = !0));
      e && this.stop(),
        (n = this.onUpdate) == null || n.call(this, this.value, e);
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(t, e, { lerp: n, duration: i, easing: r, onStart: s, onUpdate: a }) {
      (this.from = this.value = t),
        (this.to = e),
        (this.lerp = n),
        (this.duration = i),
        (this.easing = r),
        (this.currentTime = 0),
        (this.isRunning = !0),
        s == null || s(),
        (this.onUpdate = a);
    }
  };
  function zv(t, e) {
    let n;
    return function (...i) {
      let r = this;
      clearTimeout(n),
        (n = setTimeout(() => {
          (n = void 0), t.apply(r, i);
        }, e));
    };
  }
  var Rv = class {
      constructor(t, e, { autoResize: n = !0, debounce: i = 250 } = {}) {
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
            ((this.debouncedResize = zv(this.resize, i)),
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
    qf = class {
      constructor() {
        X(this, "events", {});
      }
      emit(t, ...e) {
        var i;
        let n = this.events[t] || [];
        for (let r = 0, s = n.length; r < s; r++)
          (i = n[r]) == null || i.call(n, ...e);
      }
      on(t, e) {
        var n;
        return (
          ((n = this.events[t]) != null && n.push(e)) || (this.events[t] = [e]),
          () => {
            var i;
            this.events[t] =
              (i = this.events[t]) == null ? void 0 : i.filter((r) => e !== r);
          }
        );
      }
      off(t, e) {
        var n;
        this.events[t] =
          (n = this.events[t]) == null ? void 0 : n.filter((i) => e !== i);
      }
      destroy() {
        this.events = {};
      }
    },
    Hf = 100 / 6,
    si = { passive: !1 },
    Nv = class {
      constructor(t, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        X(this, "touchStart", { x: 0, y: 0 });
        X(this, "lastDelta", { x: 0, y: 0 });
        X(this, "window", { width: 0, height: 0 });
        X(this, "emitter", new qf());
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
            i = -(e - this.touchStart.x) * this.options.touchMultiplier,
            r = -(n - this.touchStart.y) * this.options.touchMultiplier;
          (this.touchStart.x = e),
            (this.touchStart.y = n),
            (this.lastDelta = { x: i, y: r }),
            this.emitter.emit("scroll", { deltaX: i, deltaY: r, event: t });
        });
        X(this, "onTouchEnd", (t) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: t,
          });
        });
        X(this, "onWheel", (t) => {
          let { deltaX: e, deltaY: n, deltaMode: i } = t;
          const r = i === 1 ? Hf : i === 2 ? this.window.width : 1,
            s = i === 1 ? Hf : i === 2 ? this.window.height : 1;
          (e *= r),
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
          this.element.addEventListener("wheel", this.onWheel, si),
          this.element.addEventListener("touchstart", this.onTouchStart, si),
          this.element.addEventListener("touchmove", this.onTouchMove, si),
          this.element.addEventListener("touchend", this.onTouchEnd, si);
      }
      on(t, e) {
        return this.emitter.on(t, e);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, si),
          this.element.removeEventListener("touchstart", this.onTouchStart, si),
          this.element.removeEventListener("touchmove", this.onTouchMove, si),
          this.element.removeEventListener("touchend", this.onTouchEnd, si);
      }
    },
    Fv = class {
      constructor({
        wrapper: t = window,
        content: e = document.documentElement,
        eventsTarget: n = t,
        smoothWheel: i = !0,
        syncTouch: r = !1,
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
        allowNestedScroll: C = !1,
        __experimental__naiveDimensions: w = !1,
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
        X(this, "animate", new Dv());
        X(this, "emitter", new qf());
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
          const n = t.composedPath().find((i) => {
            var r, s, a;
            return (
              i instanceof HTMLAnchorElement &&
              (((r = i.getAttribute("href")) == null
                ? void 0
                : r.startsWith("#")) ||
                ((s = i.getAttribute("href")) == null
                  ? void 0
                  : s.startsWith("/#")) ||
                ((a = i.getAttribute("href")) == null
                  ? void 0
                  : a.startsWith("./#")))
            );
          });
          if (n) {
            const i = n.getAttribute("href");
            if (i) {
              const r =
                typeof this.options.anchors == "object" && this.options.anchors
                  ? this.options.anchors
                  : void 0;
              let s = `#${i.split("#")[1]}`;
              ["#", "/#", "./#", "#top", "/#top", "./#top"].includes(i) &&
                (s = 0),
                this.scrollTo(s, r);
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
          const { deltaX: e, deltaY: n, event: i } = t;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: e,
              deltaY: n,
              event: i,
            }),
            i.ctrlKey || i.lenisStopPropagation)
          )
            return;
          const r = i.type.includes("touch"),
            s = i.type.includes("wheel");
          this.isTouching = i.type === "touchstart" || i.type === "touchmove";
          const a = e === 0 && n === 0;
          if (
            this.options.syncTouch &&
            r &&
            i.type === "touchstart" &&
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
          let c = i.composedPath();
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
                  (r &&
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
            i.preventDefault();
            return;
          }
          if (
            !((this.options.syncTouch && r) || (this.options.smoothWheel && s))
          ) {
            (this.isScrolling = "native"),
              this.animate.stop(),
              (i.lenisStopPropagation = !0);
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
              (i.lenisStopPropagation = !0),
            i.preventDefault();
          const h = r && this.options.syncTouch,
            p = r && i.type === "touchend" && Math.abs(d) > 5;
          p && (d = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(
              this.targetScroll + d,
              Id(
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
        (window.lenisVersion = Ov),
          (!t || t === document.documentElement) && (t = window),
          (this.options = {
            wrapper: t,
            content: e,
            eventsTarget: n,
            smoothWheel: i,
            syncTouch: r,
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
            allowNestedScroll: C,
            __experimental__naiveDimensions: w,
          }),
          (this.dimensions = new Rv(t, e, { autoResize: p })),
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
          (this.virtualScroll = new Nv(n, {
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
          lock: i = !1,
          duration: r = this.options.duration,
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
            } else t = Bf(0, t, this.limit);
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
                duration: r,
                easing: s,
                lerp: a,
                onStart: () => {
                  i && (this.isLocked = !0),
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
        var S, C;
        const i = Date.now(),
          r = (S = t._lenis) != null ? S : (t._lenis = {});
        let s, a, o, l, c, u, f, d;
        const h = this.options.gestureOrientation;
        if (i - ((C = r.time) != null ? C : 0) > 2e3) {
          r.time = Date.now();
          const w = window.getComputedStyle(t);
          r.computedStyle = w;
          const P = w.overflowX,
            A = w.overflowY;
          if (
            ((s = ["auto", "overlay", "scroll"].includes(P)),
            (a = ["auto", "overlay", "scroll"].includes(A)),
            (r.hasOverflowX = s),
            (r.hasOverflowY = a),
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
            (r.isScrollableX = o),
            (r.isScrollableY = l),
            (r.scrollWidth = c),
            (r.scrollHeight = u),
            (r.clientWidth = f),
            (r.clientHeight = d);
        } else
          (o = r.isScrollableX),
            (l = r.isScrollableY),
            (s = r.hasOverflowX),
            (a = r.hasOverflowY),
            (c = r.scrollWidth),
            (u = r.scrollHeight),
            (f = r.clientWidth),
            (d = r.clientHeight);
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
          const w = e !== 0,
            P = n !== 0;
          w && s && o && (m = "x"), P && a && l && (m = "y");
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
          ? Iv(this.animatedScroll, this.limit)
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
  R.registerPlugin(U);
  let wa;
  const Bv = () => {
      (wa = new Fv({ autoRaf: !0 })),
        wa.on("scroll", U.update),
        R.ticker.add((t) => {
          wa.raf(t * 1e3);
        }),
        R.ticker.lagSmoothing(0);
    },
    Vf = () => {
      Bv();
    },
    ys = () => wa,
    qv = () => {
      const t = document.querySelectorAll("[career-modal='open-trigger']"),
        e = document.querySelectorAll("[career-modal='modal']");
      if (!t || !e) {
        console.error("No open triggers or career modal found");
        return;
      }
      let n = null,
        i = null;
      const r = (s) => {
        if (s.key === "Escape" && n && i) {
          i.restart();
          const a = ys();
          a && a.start();
        }
      };
      document.addEventListener("keydown", r),
        e.forEach((s) => {
          const a = s.getAttribute("career-modal-name"),
            o = s.querySelector("[career-modal='component']"),
            l = s.querySelector("[career-modal='main-info']"),
            c = s.querySelector("[career-modal='sec-info']"),
            u = s.querySelectorAll("[career-modal='close-trigger']");
          if (!o || !l || !c || !u) return;
          R.set(s, {
            opacity: 0,
            pointerEvents: "none",
            visibility: "hidden",
            display: "none",
          }),
            R.set(o, { clipPath: "inset(0% 0% 100% 0%)" }),
            R.set([l, c], { opacity: 0, y: 100, filter: "blur(2px)" });
          const f = R.timeline({ paused: !0 }),
            d = R.timeline({ paused: !0 });
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
              f.restart(), (n = s), (i = d);
              const m = ys();
              m && m.stop();
            }),
            u.forEach((m) => {
              m.addEventListener("click", () => {
                d.restart(), (n = null), (i = null);
                const p = ys();
                p && p.start();
              });
            });
        });
    },
    Hv = () => {
      qv();
    },
    Vv = () => {
      const t = document.querySelectorAll("[clock='component']"),
        e = () => {
          t.forEach((n) => {
            const i = n.querySelector("[clock-location]"),
              r = i == null ? void 0 : i.dataset.timezone,
              s = n.querySelector("[clock='hour-hand']"),
              a = n.querySelector("[clock='minute-hand']"),
              o = n.querySelector("[clock='text']");
            if (!r || !s || !a || !o) return;
            const l = new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: !0,
                timeZone: r,
              }),
              c = new Date(new Date().toLocaleString("en-US", { timeZone: r })),
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
    Wf = () => {
      Vv();
    };
  R.registerPlugin(be);
  const Wv = (t) => {
      const e = document.querySelector("[contact-hero='text']"),
        n = document.querySelector("[contact-hero='visual']"),
        i = document.querySelectorAll("[contact-hero='visual-info']"),
        r = document.querySelectorAll("[contact-hero='cta']");
      e &&
        be.create(e, {
          type: "lines",
          autoSplit: !0,
          mask: "lines",
          linesClass: "contact-hero-text-line",
          tag: "span",
          onSplit(s) {
            s.lines.forEach((l) => {
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
            const o = R.timeline();
            return (
              R.set(".move-text", { opacity: 0, yPercent: 100 }),
              R.set(n, { opacity: 0, clipPath: "inset(50% round 16px)" }),
              R.set(i, { opacity: 0, y: 50 }),
              R.set(r, { opacity: 0, yPercent: 50 }),
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
                i,
                {
                  opacity: 1,
                  y: 0,
                  duration: 1.4,
                  stagger: 0.1,
                  ease: "expo.out",
                },
                "-=1"
              ),
              o.to(
                r,
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
        });
    },
    Xv = () => {
      Wf(), ni(), ii();
      const t = Di();
      t.add(() => ri(), "-=1"), t.add(() => Wv(), "-=1");
    };
  R.registerPlugin(be);
  const Yv = (t) => {
      const e = document.querySelector("[career-hero='text']"),
        n = document.querySelector("[career-hero='btn']"),
        i = document.querySelector("[career-hero='visual']");
      e &&
        be.create(e, {
          type: "lines",
          autoSplit: !0,
          mask: "lines",
          linesClass: "career-hero-text-line",
          tag: "span",
          onSplit(r) {
            r.lines.forEach((o) => {
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
            const a = R.timeline();
            return (
              R.set(".move-text", { opacity: 0, yPercent: 100 }),
              R.set(n, { opacity: 0 }),
              R.set(i, { opacity: 0 }),
              a.to(".move-text", {
                opacity: 1,
                duration: 1.8,
                stagger: 0.08,
                ease: "expo.inOut",
                yPercent: 0,
              }),
              a.to(n, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
              a.to(
                i,
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 1.4,
                  ease: "expo.inOut",
                },
                "-=1"
              ),
              a
            );
          },
        });
    },
    Gv = () => {
      Tl(), Hv(), Wf(), ni(), ii();
      const t = Di();
      t.add(() => ri(), "-=1"), t.add(() => Yv(), "-=1");
    };
  R.registerPlugin(be);
  const jv = (t) => {
      const e = document.querySelector("[work-hero='text']"),
        n = document.querySelector("[work-hero='filter-wrap']"),
        i = document.querySelectorAll("[work-hero='project']");
      e &&
        be.create(e, {
          type: "lines",
          autoSplit: !0,
          mask: "lines",
          linesClass: "work-hero-text-line",
          tag: "span",
          onSplit(r) {
            r.lines.forEach((o) => {
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
            const a = R.timeline();
            return (
              R.set(".move-text", { opacity: 0, yPercent: 100 }),
              R.set(n, { opacity: 0 }),
              R.set(i, { y: 100, opacity: 0 }),
              a.to(".move-text", {
                opacity: 1,
                duration: 1.8,
                stagger: 0.08,
                ease: "expo.inOut",
                yPercent: 0,
              }),
              a.to(n, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
              a.to(
                i,
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
        });
    },
    Uv = () => {
      Ff(), ni(), ii();
      const t = Di();
      t.add(() => ri(), "-=1"), t.add(() => jv(), "-=1");
    },
    Kv = () => {
      const t = document.querySelector("[service-link='wrap']");
      if (!t) return;
      const e = t.querySelectorAll("[service-link='item']"),
        n = document.querySelectorAll("[service-item]"),
        i = t.querySelector("[service-link='line-wrap']"),
        r = i == null ? void 0 : i.querySelector("[service-link='line']"),
        s = document.querySelector("[hero-gradient='main']"),
        a = document.querySelectorAll("[hero-gradient]");
      if (!e.length || !n.length || !i || !r) return;
      let o = !1,
        l = null,
        c = null;
      const u = new Set(),
        f = () => {
          e.forEach((y) => {
            const v = y.querySelector("[service-link='num']");
            y.setAttribute("service-link-status", "inactive"),
              R.to(y, { opacity: 0.2, duration: 0.3 }),
              R.to(v, { opacity: 0, y: 5, duration: 0.3 });
          }),
            n.forEach((y) => {
              y.setAttribute("service-item-status", "inactive");
            }),
            a.forEach((y) => {
              y.getAttribute("hero-gradient") !== "main" &&
                R.to(y, { opacity: 0, duration: 0.5 });
            }),
            s && R.to(s, { opacity: 1, duration: 0.5 });
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
              R.to(v, { opacity: 1, duration: 0.4 }),
              R.to(S, { opacity: 1, y: 0, duration: 0.4 }),
              _.setAttribute("service-item-status", "active"),
              u.has(y) || (h(_), u.add(y)),
              x &&
                (s && R.to(s, { opacity: 0, duration: 0.5 }),
                R.to(x, { opacity: 1, duration: 0.5 })),
              m(v);
          }
        },
        h = (y) => {
          const v = y.children;
          R.set(v, { opacity: 0, y: 50 }),
            R.to(v, {
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
            x = i.offsetHeight,
            S = r.offsetHeight,
            C = x - S,
            w = _ > 1 ? v / (_ - 1) : 0,
            P = C * w;
          R.to(r, { y: P, duration: 0.6, ease: "power2.out" });
        };
      s && R.set(s, { opacity: 1 }),
        a.forEach((y) => {
          y.getAttribute("hero-gradient") !== "main" &&
            R.set(y, { opacity: 0 });
        }),
        n.forEach((y) => {
          R.set(y.children, { opacity: 0, y: 50 });
        }),
        e.forEach((y) => {
          const v = y.getAttribute("item-name");
          y.addEventListener("click", () => {
            v &&
              (l && clearTimeout(l),
              (o = !0),
              d(v),
              ys().scrollTo(document.querySelector(`[service-item='${v}']`), {
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
    Zv = () => {
      Kv();
    };
  /*!
   * DrawSVGPlugin 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var _n,
    El,
    Ca,
    Xf,
    Yf,
    Gf,
    wl,
    jf,
    Uf = function () {
      return typeof window != "undefined";
    },
    Kf = function () {
      return _n || (Uf() && (_n = window.gsap) && _n.registerPlugin && _n);
    },
    Qv = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    Cl = {
      rect: ["width", "height"],
      circle: ["r", "r"],
      ellipse: ["rx", "ry"],
      line: ["x2", "y2"],
    },
    zi = function (e) {
      return Math.round(e * 1e4) / 1e4;
    },
    Dn = function (e) {
      return parseFloat(e) || 0;
    },
    Zf = function (e, n) {
      var i = Dn(e);
      return ~e.indexOf("%") ? (i / 100) * n : i;
    },
    Pa = function (e, n) {
      return Dn(e.getAttribute(n));
    },
    ka = Math.sqrt,
    Qf = function (e, n, i, r, s, a) {
      return ka(
        Math.pow((Dn(i) - Dn(e)) * s, 2) + Math.pow((Dn(r) - Dn(n)) * a, 2)
      );
    },
    Jf = function (e) {
      return console.warn(e);
    },
    ed = function (e) {
      return e.getAttribute("vector-effect") === "non-scaling-stroke";
    },
    Jv = 1,
    e0 = function (e, n, i) {
      var r = e.indexOf(" "),
        s,
        a;
      return (
        r < 0
          ? ((s = i !== void 0 ? i + "" : e), (a = e))
          : ((s = e.substr(0, r)), (a = e.substr(r + 1))),
        (s = Zf(s, n)),
        (a = Zf(a, n)),
        s > a ? [a, s] : [s, a]
      );
    },
    Ma = function (e) {
      if (((e = El(e)[0]), !e)) return 0;
      var n = e.tagName.toLowerCase(),
        i = e.style,
        r = 1,
        s = 1,
        a,
        o,
        l,
        c,
        u,
        f,
        d;
      ed(e) &&
        ((s = e.getScreenCTM()),
        (r = ka(s.a * s.a + s.b * s.b)),
        (s = ka(s.d * s.d + s.c * s.c)));
      try {
        o = e.getBBox();
      } catch (v) {
        Jf(
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
          Cl[n] &&
          ((g = Pa(e, Cl[n][0])),
          (y = Pa(e, Cl[n][1])),
          n !== "rect" && n !== "line" && ((g *= 2), (y *= 2)),
          n === "line" &&
            ((m = Pa(e, "x1")),
            (p = Pa(e, "y1")),
            (g = Math.abs(g - m)),
            (y = Math.abs(y - p)))),
        n === "path")
      )
        (c = i.strokeDasharray),
          (i.strokeDasharray = "none"),
          (a = e.getTotalLength() || 0),
          zi(r) !== zi(s) &&
            !Gf &&
            (Gf = 1) &&
            Jf(
              "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
            ),
          (a *= (r + s) / 2),
          (i.strokeDasharray = c);
      else if (n === "rect") a = g * 2 * r + y * 2 * s;
      else if (n === "line") a = Qf(m, p, m + g, p + y, r, s);
      else if (n === "polyline" || n === "polygon")
        for (
          l = e.getAttribute("points").match(Qv) || [],
            n === "polygon" && l.push(l[0], l[1]),
            a = 0,
            u = 2;
          u < l.length;
          u += 2
        )
          a += Qf(l[u - 2], l[u - 1], l[u], l[u + 1], r, s) || 0;
      else
        (n === "circle" || n === "ellipse") &&
          ((f = (g / 2) * r),
          (d = (y / 2) * s),
          (a = Math.PI * (3 * (f + d) - ka((3 * f + d) * (f + 3 * d)))));
      return a || 0;
    },
    td = function (e, n) {
      if (((e = El(e)[0]), !e)) return [0, 0];
      n || (n = Ma(e) + 1);
      var i = Ca.getComputedStyle(e),
        r = i.strokeDasharray || "",
        s = Dn(i.strokeDashoffset),
        a = r.indexOf(",");
      return (
        a < 0 && (a = r.indexOf(" ")),
        (r = a < 0 ? n : Dn(r.substr(0, a))),
        r > n && (r = n),
        [-s || 0, r - s || 0]
      );
    },
    nd = function () {
      Uf() &&
        ((Ca = window),
        (Yf = _n = Kf()),
        (El = _n.utils.toArray),
        (wl = _n.core.getStyleSaver),
        (jf = _n.core.reverting || function () {}),
        (Xf = ((Ca.navigator || {}).userAgent || "").indexOf("Edge") !== -1));
    },
    Pl = {
      version: "3.13.0",
      name: "drawSVG",
      register: function (e) {
        (_n = e), nd();
      },
      init: function (e, n, i, r, s) {
        if (!e.getBBox) return !1;
        Yf || nd();
        var a = Ma(e),
          o,
          l,
          c;
        return (
          (this.styles =
            wl && wl(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
          (this.tween = i),
          (this._style = e.style),
          (this._target = e),
          n + "" == "true"
            ? (n = "0 100%")
            : n
            ? (n + "").indexOf(" ") === -1 && (n = "0 " + n)
            : (n = "0 0"),
          (o = td(e, a)),
          (l = e0(n, a, o[0])),
          (this._length = zi(a)),
          (this._dash = zi(o[1] - o[0])),
          (this._offset = zi(-o[0])),
          (this._dashPT = this.add(
            this,
            "_dash",
            this._dash,
            zi(l[1] - l[0]),
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
            zi(-l[0]),
            0,
            0,
            0,
            0,
            0,
            1
          )),
          Xf &&
            ((c = Ca.getComputedStyle(e)),
            c.strokeLinecap !== c.strokeLinejoin &&
              ((l = Dn(c.strokeMiterlimit)),
              this.add(e.style, "strokeMiterlimit", l, l + 0.01))),
          (this._live = ed(e) || ~(n + "").indexOf("live")),
          (this._nowrap = ~(n + "").indexOf("nowrap")),
          this._props.push("drawSVG"),
          Jv
        );
      },
      render: function (e, n) {
        if (n.tween._time || !jf()) {
          var i = n._pt,
            r = n._style,
            s,
            a,
            o,
            l;
          if (i) {
            for (
              n._live &&
              ((s = Ma(n._target)),
              s !== n._length &&
                ((a = s / n._length),
                (n._length = s),
                n._offsetPT && ((n._offsetPT.s *= a), (n._offsetPT.c *= a)),
                n._dashPT
                  ? ((n._dashPT.s *= a), (n._dashPT.c *= a))
                  : (n._dash *= a)));
              i;

            )
              i.r(e, i.d), (i = i._next);
            (o = n._dash || (e && e !== 1 && 1e-4) || 0),
              (s = n._length - o + 0.1),
              (l = n._offset),
              o &&
                l &&
                o + Math.abs(l % n._length) > n._length - 0.05 &&
                (l += l < 0 ? 0.005 : -0.005) &&
                (s += 0.005),
              (r.strokeDashoffset = o ? l : l + 0.001),
              (r.strokeDasharray =
                s < 0.1
                  ? "none"
                  : o
                  ? o + "px," + (n._nowrap ? 999999 : s) + "px"
                  : "0px, 999999px");
          }
        } else n.styles.revert();
      },
      getLength: Ma,
      getPosition: td,
    };
  Kf() && _n.registerPlugin(Pl), R.registerPlugin(be, Pl);
  const t0 = (t) => {
    const e = document.querySelector("[service-hero='text']"),
      n = document.querySelectorAll("[service-hero='btn']"),
      i = document.querySelectorAll("[service-hero='svg']"),
      r = document.querySelectorAll("[service-hero='svg'] path");
    e &&
      be.create(e, {
        type: "lines",
        autoSplit: !0,
        mask: "lines",
        linesClass: "service-hero-text-line",
        tag: "span",
        onSplit(s) {
          s.lines.forEach((l) => {
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
          const o = R.timeline();
          return (
            R.set(".move-text", { opacity: 0, yPercent: 100 }),
            R.set(n, { opacity: 0, yPercent: 20, scale: 0 }),
            R.set(i, { opacity: 0 }),
            R.set(r, { drawSVG: 0 }),
            o.to(i, { opacity: 1, duration: 0, ease: "power1.out" }),
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
              r,
              { opacity: 1, drawSVG: "100%", duration: 5, ease: "expo.inOut" },
              "-=2.2"
            ),
            o
          );
        },
      });
  };
  R.registerPlugin(Pl, U);
  const n0 = () => {
      const t = document.querySelector(".services_hero_section"),
        e = document.querySelectorAll("[service-hero='svg'] path");
      if (e.length === 0) return;
      R.timeline({
        scrollTrigger: {
          trigger: t,
          start: "bottom 95%",
          end: "bottom 10%",
          scrub: 1.5,
        },
      }).to(e, { drawSVG: "100% 100% " });
    },
    i0 = () => {
      n0();
    },
    r0 = () => {
      Zv(), ni(), ii(), i0();
      const t = Di();
      t.add(() => ri(), "-=1"), t.add(() => t0(), "-=1");
    },
    s0 = () => {
      const t = document.querySelectorAll("[service-item]"),
        e = document.querySelector("[hero-gradient='main']"),
        n = document.querySelectorAll("[hero-gradient]");
      if (!t.length || !e) return;
      let i = !1,
        r = null,
        s = null;
      const a = () => {
          n.forEach((f) => {
            f.getAttribute("hero-gradient") !== "main" &&
              R.to(f, { opacity: 0, duration: 0.5 });
          }),
            R.to(e, { opacity: 1, duration: 0.5 });
        },
        o = (f) => {
          if (s === f) return;
          s = f;
          const d = document.querySelector(`[hero-gradient='${f}']`);
          d &&
            (R.to(e, { opacity: 0, duration: 0.5 }),
            n.forEach((h) => {
              const m = h.getAttribute("hero-gradient");
              m !== "main" && m !== f && R.to(h, { opacity: 0, duration: 0.5 });
            }),
            R.to(d, { opacity: 1, duration: 0.5 }));
        };
      R.set(e, { opacity: 1 }),
        n.forEach((f) => {
          f.getAttribute("hero-gradient") !== "main" &&
            R.set(f, { opacity: 0 });
        });
      const l = new Map(),
        c = new IntersectionObserver(
          (f) => {
            if (i) return;
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
            r && clearTimeout(r),
              (i = !0),
              f ? o(f) : (a(), (s = null)),
              (r = setTimeout(() => {
                i = !1;
              }, 1e3));
          },
          showMainGradient: a,
        }
      );
    },
    a0 = () => s0();
  /*!
   * matrix 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var zn,
    Ri,
    kl,
    $a,
    _s,
    Oa,
    Aa,
    bs,
    tn = "transform",
    Ml = tn + "Origin",
    id,
    $l = function (e) {
      var n = e.ownerDocument || e;
      for (
        !(tn in e.style) &&
        ("msTransform" in e.style) &&
        ((tn = "msTransform"), (Ml = tn + "Origin"));
        n.parentNode && (n = n.parentNode);

      );
      if (((Ri = window), (Aa = new Ni()), n)) {
        (zn = n),
          (kl = n.documentElement),
          ($a = n.body),
          (bs = zn.createElementNS("http://www.w3.org/2000/svg", "g")),
          (bs.style.transform = "none");
        var i = n.createElement("div"),
          r = n.createElement("div"),
          s = n && (n.body || n.firstElementChild);
        s &&
          s.appendChild &&
          (s.appendChild(i),
          i.appendChild(r),
          i.setAttribute(
            "style",
            "position:static;transform:translate3d(0,0,1px)"
          ),
          (id = r.offsetParent !== i),
          s.removeChild(i));
      }
      return n;
    },
    o0 = function (e) {
      for (var n, i; e && e !== $a; )
        (i = e._gsap),
          i && i.uncache && i.get(e, "x"),
          i &&
            !i.scaleX &&
            !i.scaleY &&
            i.renderTransform &&
            ((i.scaleX = i.scaleY = 1e-4),
            i.renderTransform(1, i),
            n ? n.push(i) : (n = [i])),
          (e = e.parentNode);
      return n;
    },
    rd = [],
    sd = [],
    Ol = function () {
      return (
        Ri.pageYOffset || zn.scrollTop || kl.scrollTop || $a.scrollTop || 0
      );
    },
    Al = function () {
      return (
        Ri.pageXOffset || zn.scrollLeft || kl.scrollLeft || $a.scrollLeft || 0
      );
    },
    Ll = function (e) {
      return (
        e.ownerSVGElement ||
        ((e.tagName + "").toLowerCase() === "svg" ? e : null)
      );
    },
    l0 = function t(e) {
      if (Ri.getComputedStyle(e).position === "fixed") return !0;
      if (((e = e.parentNode), e && e.nodeType === 1)) return t(e);
    },
    Il = function t(e, n) {
      if (e.parentNode && (zn || $l(e))) {
        var i = Ll(e),
          r = i
            ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
            : "http://www.w3.org/1999/xhtml",
          s = i ? (n ? "rect" : "g") : "div",
          a = n !== 2 ? 0 : 100,
          o = n === 3 ? 100 : 0,
          l =
            "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
          c = zn.createElementNS
            ? zn.createElementNS(r.replace(/^https/, "http"), s)
            : zn.createElement(s);
        return (
          n &&
            (i
              ? (Oa || (Oa = t(e)),
                c.setAttribute("width", 0.01),
                c.setAttribute("height", 0.01),
                c.setAttribute("transform", "translate(" + a + "," + o + ")"),
                Oa.appendChild(c))
              : (_s || ((_s = t(e)), (_s.style.cssText = l)),
                (c.style.cssText =
                  l +
                  "width:0.1px;height:0.1px;top:" +
                  o +
                  "px;left:" +
                  a +
                  "px"),
                _s.appendChild(c))),
          c
        );
      }
      throw "Need document and parent.";
    },
    c0 = function (e) {
      for (var n = new Ni(), i = 0; i < e.numberOfItems; i++)
        n.multiply(e.getItem(i).matrix);
      return n;
    },
    ad = function (e) {
      var n = e.getCTM(),
        i;
      return (
        n ||
          ((i = e.style[tn]),
          (e.style[tn] = "none"),
          e.appendChild(bs),
          (n = bs.getCTM()),
          e.removeChild(bs),
          i
            ? (e.style[tn] = i)
            : e.style.removeProperty(
                tn.replace(/([A-Z])/g, "-$1").toLowerCase()
              )),
        n || Aa.clone()
      );
    },
    u0 = function (e, n) {
      var i = Ll(e),
        r = e === i,
        s = i ? rd : sd,
        a = e.parentNode,
        o =
          a && !i && a.shadowRoot && a.shadowRoot.appendChild
            ? a.shadowRoot
            : a,
        l,
        c,
        u,
        f,
        d,
        h;
      if (e === Ri) return e;
      if (
        (s.length || s.push(Il(e, 1), Il(e, 2), Il(e, 3)), (l = i ? Oa : _s), i)
      )
        r
          ? ((u = ad(e)), (f = -u.e / u.a), (d = -u.f / u.d), (c = Aa))
          : e.getBBox
          ? ((u = e.getBBox()),
            (c = e.transform ? e.transform.baseVal : {}),
            (c = c.numberOfItems
              ? c.numberOfItems > 1
                ? c0(c)
                : c.getItem(0).matrix
              : Aa),
            (f = c.a * u.x + c.c * u.y),
            (d = c.b * u.x + c.d * u.y))
          : ((c = new Ni()), (f = d = 0)),
          n && e.tagName.toLowerCase() === "g" && (f = d = 0),
          (r ? i : a).appendChild(l),
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
        if (((f = d = 0), id))
          for (
            c = e.offsetParent, u = e;
            u && (u = u.parentNode) && u !== c && u.parentNode;

          )
            (Ri.getComputedStyle(u)[tn] + "").length > 4 &&
              ((f = u.offsetLeft), (d = u.offsetTop), (u = 0));
        if (
          ((h = Ri.getComputedStyle(e)),
          h.position !== "absolute" && h.position !== "fixed")
        )
          for (c = e.offsetParent; a && a !== c; )
            (f += a.scrollLeft || 0),
              (d += a.scrollTop || 0),
              (a = a.parentNode);
        (u = l.style),
          (u.top = e.offsetTop - d + "px"),
          (u.left = e.offsetLeft - f + "px"),
          (u[tn] = h[tn]),
          (u[Ml] = h[Ml]),
          (u.position = h.position === "fixed" ? "fixed" : "absolute"),
          o.appendChild(l);
      }
      return l;
    },
    Dl = function (e, n, i, r, s, a, o) {
      return (
        (e.a = n), (e.b = i), (e.c = r), (e.d = s), (e.e = a), (e.f = o), e
      );
    },
    Ni = (function () {
      function t(n, i, r, s, a, o) {
        n === void 0 && (n = 1),
          i === void 0 && (i = 0),
          r === void 0 && (r = 0),
          s === void 0 && (s = 1),
          a === void 0 && (a = 0),
          o === void 0 && (o = 0),
          Dl(this, n, i, r, s, a, o);
      }
      var e = t.prototype;
      return (
        (e.inverse = function () {
          var i = this.a,
            r = this.b,
            s = this.c,
            a = this.d,
            o = this.e,
            l = this.f,
            c = i * a - r * s || 1e-10;
          return Dl(
            this,
            a / c,
            -r / c,
            -s / c,
            i / c,
            (s * l - a * o) / c,
            -(i * l - r * o) / c
          );
        }),
        (e.multiply = function (i) {
          var r = this.a,
            s = this.b,
            a = this.c,
            o = this.d,
            l = this.e,
            c = this.f,
            u = i.a,
            f = i.c,
            d = i.b,
            h = i.d,
            m = i.e,
            p = i.f;
          return Dl(
            this,
            u * r + d * a,
            u * s + d * o,
            f * r + h * a,
            f * s + h * o,
            l + m * r + p * a,
            c + m * s + p * o
          );
        }),
        (e.clone = function () {
          return new t(this.a, this.b, this.c, this.d, this.e, this.f);
        }),
        (e.equals = function (i) {
          var r = this.a,
            s = this.b,
            a = this.c,
            o = this.d,
            l = this.e,
            c = this.f;
          return (
            r === i.a &&
            s === i.b &&
            a === i.c &&
            o === i.d &&
            l === i.e &&
            c === i.f
          );
        }),
        (e.apply = function (i, r) {
          r === void 0 && (r = {});
          var s = i.x,
            a = i.y,
            o = this.a,
            l = this.b,
            c = this.c,
            u = this.d,
            f = this.e,
            d = this.f;
          return (
            (r.x = s * o + a * c + f || 0), (r.y = s * l + a * u + d || 0), r
          );
        }),
        t
      );
    })();
  function bn(t, e, n, i) {
    if (!t || !t.parentNode || (zn || $l(t)).documentElement === t)
      return new Ni();
    var r = o0(t),
      s = Ll(t),
      a = s ? rd : sd,
      o = u0(t, n),
      l = a[0].getBoundingClientRect(),
      c = a[1].getBoundingClientRect(),
      u = a[2].getBoundingClientRect(),
      f = o.parentNode,
      d = !i && l0(t),
      h = new Ni(
        (c.left - l.left) / 100,
        (c.top - l.top) / 100,
        (u.left - l.left) / 100,
        (u.top - l.top) / 100,
        l.left + (d ? 0 : Al()),
        l.top + (d ? 0 : Ol())
      );
    if ((f.removeChild(o), r))
      for (l = r.length; l--; )
        (c = r[l]), (c.scaleX = c.scaleY = 0), c.renderTransform(1, c);
    return e ? h.inverse() : h;
  }
  /*!
   * Flip 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var f0 = 1,
    xr,
    ut,
    xe,
    xs,
    ai,
    Rn,
    zl,
    od = function (e, n) {
      return e.actions.forEach(function (i) {
        return i.vars[n] && i.vars[n](i);
      });
    },
    Rl = {},
    ld = 180 / Math.PI,
    d0 = Math.PI / 180,
    La = {},
    cd = {},
    Ia = {},
    Nl = function (e) {
      return typeof e == "string" ? e.split(" ").join("").split(",") : e;
    },
    h0 = Nl("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
    Da = Nl(
      "transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"
    ),
    Ss = function (e) {
      return xr(e)[0] || console.warn("Element not found:", e);
    },
    Sr = function (e) {
      return Math.round(e * 1e4) / 1e4 || 0;
    },
    Fl = function (e, n, i) {
      return e.forEach(function (r) {
        return r.classList[i](n);
      });
    },
    ud = {
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
    fd = {
      zIndex: 1,
      simple: 1,
      clearProps: 1,
      scale: 1,
      absolute: 1,
      fitChild: 1,
      getVars: 1,
      props: 1,
    },
    dd = function (e) {
      return e.replace(/([A-Z])/g, "-$1").toLowerCase();
    },
    Tr = function (e, n) {
      var i = {},
        r;
      for (r in e) n[r] || (i[r] = e[r]);
      return i;
    },
    Bl = {},
    hd = function (e) {
      var n = (Bl[e] = Nl(e));
      return (Ia[e] = n.concat(Da)), n;
    },
    p0 = function (e) {
      var n = e._gsap || ut.core.getCache(e);
      return n.gmCache === ut.ticker.frame
        ? n.gMatrix
        : ((n.gmCache = ut.ticker.frame), (n.gMatrix = bn(e, !0, !1, !0)));
    },
    m0 = function t(e, n, i) {
      i === void 0 && (i = 0);
      for (
        var r = e.parentNode,
          s = 1e3 * Math.pow(10, i) * (n ? -1 : 1),
          a = n ? -s * 900 : 0;
        e;

      )
        (a += s), (e = e.previousSibling);
      return r ? a + t(r, n, i + 1) : a;
    },
    za = function (e, n, i) {
      return (
        e.forEach(function (r) {
          return (r.d = m0(i ? r.element : r.t, n));
        }),
        e.sort(function (r, s) {
          return r.d - s.d;
        }),
        e
      );
    },
    Ts = function (e, n) {
      for (
        var i = e.element.style, r = (e.css = e.css || []), s = n.length, a, o;
        s--;

      )
        (a = n[s]),
          (o = i[a] || i.getPropertyValue(a)),
          r.push(o ? a : cd[a] || (cd[a] = dd(a)), o);
      return i;
    },
    Ra = function (e) {
      var n = e.css,
        i = e.element.style,
        r = 0;
      for (e.cache.uncache = 1; r < n.length; r += 2)
        n[r + 1] ? (i[n[r]] = n[r + 1]) : i.removeProperty(n[r]);
      !n[n.indexOf("transform") + 1] &&
        i.translate &&
        (i.removeProperty("translate"),
        i.removeProperty("scale"),
        i.removeProperty("rotate"));
    },
    pd = function (e, n) {
      e.forEach(function (i) {
        return (i.a.cache.uncache = 1);
      }),
        n || e.finalStates.forEach(Ra);
    },
    ql =
      "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(
        ","
      ),
    Hl = function (e, n, i) {
      var r = e.element,
        s = e.width,
        a = e.height,
        o = e.uncache,
        l = e.getProp,
        c = r.style,
        u = 4,
        f,
        d,
        h;
      if ((typeof n != "object" && (n = e), xe && i !== 1))
        return (
          xe._abs.push({ t: r, b: e, a: e, sd: 0 }),
          xe._final.push(function () {
            return (e.cache.uncache = 1) && Ra(e);
          }),
          r
        );
      for (
        d = l("display") === "none",
          (!e.isVisible || d) &&
            (d && (Ts(e, ["display"]).display = n.display),
            (e.matrix = n.matrix),
            (e.width = s = e.width || n.width),
            (e.height = a = e.height || n.height)),
          Ts(e, ql),
          h = window.getComputedStyle(r);
        u--;

      )
        c[ql[u]] = h[ql[u]];
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
        f = new Fi(r);
      else if (((f = Tr(e, La)), (f.position = "absolute"), e.simple)) {
        var m = r.getBoundingClientRect();
        f.matrix = new Ni(1, 0, 0, 1, m.left + Al(), m.top + Ol());
      } else f.matrix = bn(r, !1, !1, !0);
      return (
        (f = Er(f, e, !0)), (e.x = Rn(f.x, 0.01)), (e.y = Rn(f.y, 0.01)), r
      );
    },
    md = function (e, n) {
      return (
        n !== !0 &&
          ((n = xr(n)),
          (e = e.filter(function (i) {
            if (n.indexOf((i.sd < 0 ? i.b : i.a).element) !== -1) return !0;
            i.t._gsap.renderTransform(1),
              i.b.isVisible &&
                ((i.t.style.width = i.b.width + "px"),
                (i.t.style.height = i.b.height + "px"));
          }))),
        e
      );
    },
    gd = function (e) {
      return za(e, !0).forEach(function (n) {
        return (
          (n.a.isVisible || n.b.isVisible) && Hl(n.sd < 0 ? n.b : n.a, n.b, 1)
        );
      });
    },
    g0 = function (e, n) {
      return (n && e.idLookup[Vl(n).id]) || e.elementStates[0];
    },
    Vl = function (e, n, i, r) {
      return e instanceof Fi
        ? e
        : e instanceof nn
        ? g0(e, r)
        : new Fi(
            typeof e == "string" ? Ss(e) || console.warn(e + " not found") : e,
            n,
            i
          );
    },
    v0 = function (e, n) {
      for (
        var i = ut.getProperty(e.element, null, "native"),
          r = (e.props = {}),
          s = n.length;
        s--;

      )
        r[n[s]] = (i(n[s]) + "").trim();
      return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), e;
    },
    vd = function (e, n) {
      var i = e.style || e,
        r;
      for (r in n) i[r] = n[r];
    },
    y0 = function (e) {
      var n = e.getAttribute("data-flip-id");
      return n || e.setAttribute("data-flip-id", (n = "auto-" + f0++)), n;
    },
    yd = function (e) {
      return e.map(function (n) {
        return n.element;
      });
    },
    _d = function (e, n, i) {
      return e && n.length && i.add(e(yd(n), i, new nn(n, 0, !0)), 0);
    },
    Er = function (e, n, i, r, s, a) {
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
        v = a && zl && zl(o, "transform,width,height"),
        _ = e,
        x = n.matrix,
        S = x.e,
        C = x.f,
        w =
          e.bounds.width !== y.width ||
          e.bounds.height !== y.height ||
          e.scaleX !== m ||
          e.scaleY !== p ||
          e.rotation !== g,
        P = !w && e.simple && n.simple && !s,
        A,
        E,
        M,
        b,
        T,
        O,
        L;
      return (
        P || !c
          ? ((m = p = 1), (g = A = 0))
          : ((T = p0(c)),
            (O = T.clone().multiply(
              n.ctm ? n.matrix.clone().multiply(n.ctm) : n.matrix
            )),
            (g = Sr(Math.atan2(O.b, O.a) * ld)),
            (A = Sr(Math.atan2(O.c, O.d) * ld + g) % 360),
            (m = Math.sqrt(Math.pow(O.a, 2) + Math.pow(O.b, 2))),
            (p =
              Math.sqrt(Math.pow(O.c, 2) + Math.pow(O.d, 2)) *
              Math.cos(A * d0)),
            s &&
              ((s = xr(s)[0]),
              (b = ut.getProperty(s)),
              (L = s.getBBox && typeof s.getBBox == "function" && s.getBBox()),
              (_ = {
                scaleX: b("scaleX"),
                scaleY: b("scaleY"),
                width: L ? L.width : Math.ceil(parseFloat(b("width", "px"))),
                height: L ? L.height : parseFloat(b("height", "px")),
              })),
            (l.rotation = g + "deg"),
            (l.skewX = A + "deg")),
        i
          ? ((m *= d === _.width || !_.width ? 1 : d / _.width),
            (p *= h === _.height || !_.height ? 1 : h / _.height),
            (l.scaleX = m),
            (l.scaleY = p))
          : ((d = Rn((d * m) / _.scaleX, 0)),
            (h = Rn((h * p) / _.scaleY, 0)),
            (o.style.width = d + "px"),
            (o.style.height = h + "px")),
        r && vd(o, n.props),
        P || !c
          ? ((u += S - e.matrix.e), (f += C - e.matrix.f))
          : w || c !== n.parent
          ? (l.renderTransform(1, l),
            (O = bn(s || o, !1, !1, !0)),
            (E = T.apply({ x: O.e, y: O.f })),
            (M = T.apply({ x: S, y: C })),
            (u += M.x - E.x),
            (f += M.y - E.y))
          : ((T.e = T.f = 0),
            (M = T.apply({ x: S - e.matrix.e, y: C - e.matrix.f })),
            (u += M.x),
            (f += M.y)),
        (u = Rn(u, 0.02)),
        (f = Rn(f, 0.02)),
        a && !(a instanceof Fi)
          ? v && v.revert()
          : ((l.x = u + "px"), (l.y = f + "px"), l.renderTransform(1, l)),
        a &&
          ((a.x = u),
          (a.y = f),
          (a.rotation = g),
          (a.skewX = A),
          i
            ? ((a.scaleX = m), (a.scaleY = p))
            : ((a.width = d), (a.height = h))),
        a || l
      );
    },
    Wl = function (e, n) {
      return e instanceof nn ? e : new nn(e, n);
    },
    bd = function (e, n, i) {
      var r = e.idLookup[i],
        s = e.alt[i];
      return s.isVisible &&
        (!(n.getElementState(s.element) || s).isVisible || !r.isVisible)
        ? s
        : r;
    },
    Xl = [],
    Yl = "width,height,overflowX,overflowY".split(","),
    Na,
    xd = function (e) {
      if (e !== Na) {
        var n = ai.style,
          i = ai.clientWidth === window.outerWidth,
          r = ai.clientHeight === window.outerHeight,
          s = 4;
        if (e && (i || r)) {
          for (; s--; ) Xl[s] = n[Yl[s]];
          i && ((n.width = ai.clientWidth + "px"), (n.overflowY = "hidden")),
            r &&
              ((n.height = ai.clientHeight + "px"), (n.overflowX = "hidden")),
            (Na = e);
        } else if (Na) {
          for (; s--; )
            Xl[s] ? (n[Yl[s]] = Xl[s]) : n.removeProperty(dd(Yl[s]));
          Na = e;
        }
      }
    },
    Gl = function (e, n, i, r) {
      (e instanceof nn && n instanceof nn) ||
        console.warn("Not a valid state object."),
        (i = i || {});
      var s = i,
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
        C = s.stagger,
        w = s.spin,
        P = s.prune,
        A = ("props" in i ? i : e).props,
        E = Tr(i, ud),
        M = ut.timeline({
          delay: d,
          paused: h,
          repeat: m,
          repeatDelay: p,
          yoyo: g,
          data: "isFlip",
        }),
        b = E,
        T = [],
        O = [],
        L = [],
        k = [],
        I = w === !0 ? 1 : w || 0,
        D =
          typeof w == "function"
            ? w
            : function () {
                return I;
              },
        N = e.interrupted || n.interrupted,
        $ = M[r !== 1 ? "to" : "from"],
        H,
        Y,
        le,
        ie,
        K,
        Z,
        he,
        me,
        Ce,
        Le,
        pe,
        Pe,
        W,
        te;
      for (Y in n.idLookup)
        (pe = n.alt[Y] ? bd(n, e, Y) : n.idLookup[Y]),
          (K = pe.element),
          (Le = e.idLookup[Y]),
          e.alt[Y] &&
            K === Le.element &&
            (e.alt[Y].isVisible || !pe.isVisible) &&
            (Le = e.alt[Y]),
          Le
            ? ((Z = {
                t: K,
                b: Le,
                a: pe,
                sd: Le.element === K ? 0 : pe.isVisible ? 1 : -1,
              }),
              L.push(Z),
              Z.sd &&
                (Z.sd < 0 && ((Z.b = pe), (Z.a = Le)),
                N && Ts(Z.b, A ? Ia[A] : Da),
                S &&
                  L.push(
                    (Z.swap = {
                      t: Le.element,
                      b: Z.b,
                      a: Z.a,
                      sd: -Z.sd,
                      swap: Z,
                    })
                  )),
              (K._flip = Le.element._flip = xe ? xe.timeline : M))
            : pe.isVisible &&
              (L.push({
                t: K,
                b: Tr(pe, { isVisible: 1 }),
                a: pe,
                sd: 0,
                entering: 1,
              }),
              (K._flip = xe ? xe.timeline : M));
      if (
        (A &&
          (Bl[A] || hd(A)).forEach(function (z) {
            return (E[z] = function (ze) {
              return L[ze].a.props[z];
            });
          }),
        (L.finalStates = Ce = []),
        (Pe = function () {
          for (za(L), xd(!0), ie = 0; ie < L.length; ie++)
            (Z = L[ie]),
              (W = Z.a),
              (te = Z.b),
              P && !W.isDifferent(te) && !Z.entering
                ? L.splice(ie--, 1)
                : ((K = Z.t),
                  v && !(Z.sd < 0) && ie && (W.matrix = bn(K, !1, !1, !0)),
                  te.isVisible && W.isVisible
                    ? (Z.sd < 0
                        ? ((he = new Fi(K, A, e.simple)),
                          Er(he, W, x, 0, 0, he),
                          (he.matrix = bn(K, !1, !1, !0)),
                          (he.css = Z.b.css),
                          (Z.a = W = he),
                          S && (K.style.opacity = N ? te.opacity : W.opacity),
                          C && k.push(K))
                        : Z.sd > 0 &&
                          S &&
                          (K.style.opacity = N ? W.opacity - te.opacity : "0"),
                      Er(W, te, x, A))
                    : te.isVisible !== W.isVisible &&
                      (te.isVisible
                        ? W.isVisible ||
                          ((te.css = W.css),
                          O.push(te),
                          L.splice(ie--, 1),
                          c && v && Er(W, te, x, A))
                        : (W.isVisible && T.push(W), L.splice(ie--, 1))),
                  x ||
                    ((K.style.maxWidth = Math.max(W.width, te.width) + "px"),
                    (K.style.maxHeight = Math.max(W.height, te.height) + "px"),
                    (K.style.minWidth = Math.min(W.width, te.width) + "px"),
                    (K.style.minHeight = Math.min(W.height, te.height) + "px")),
                  v && y && K.classList.add(y)),
              Ce.push(W);
          var ze;
          if (
            (y &&
              ((ze = Ce.map(function (V) {
                return V.element;
              })),
              v &&
                ze.forEach(function (V) {
                  return V.classList.remove(y);
                })),
            xd(!1),
            x
              ? ((E.scaleX = function (V) {
                  return L[V].a.scaleX;
                }),
                (E.scaleY = function (V) {
                  return L[V].a.scaleY;
                }))
              : ((E.width = function (V) {
                  return L[V].a.width + "px";
                }),
                (E.height = function (V) {
                  return L[V].a.height + "px";
                }),
                (E.autoRound = i.autoRound || !1)),
            (E.x = function (V) {
              return L[V].a.x + "px";
            }),
            (E.y = function (V) {
              return L[V].a.y + "px";
            }),
            (E.rotation = function (V) {
              return L[V].a.rotation + (w ? D(V, me[V], me) * 360 : 0);
            }),
            (E.skewX = function (V) {
              return L[V].a.skewX;
            }),
            (me = L.map(function (V) {
              return V.t;
            })),
            (_ || _ === 0) &&
              ((E.modifiers = {
                zIndex: function () {
                  return _;
                },
              }),
              (E.zIndex = _),
              (E.immediateRender = i.immediateRender !== !1)),
            S &&
              (E.opacity = function (V) {
                return L[V].sd < 0 ? 0 : L[V].sd > 0 ? L[V].a.opacity : "+=0";
              }),
            k.length)
          ) {
            C = ut.utils.distribute(C);
            var rn = me.slice(k.length);
            E.stagger = function (V, Qt) {
              return C(~k.indexOf(Qt) ? me.indexOf(L[V].swap.t) : V, Qt, rn);
            };
          }
          if (
            (h0.forEach(function (V) {
              return i[V] && M.eventCallback(V, i[V], i[V + "Params"]);
            }),
            f && me.length)
          ) {
            (b = Tr(E, ud)),
              "scale" in f && ((f.scaleX = f.scaleY = f.scale), delete f.scale);
            for (Y in f)
              (H = Tr(f[Y], fd)),
                (H[Y] = E[Y]),
                !("duration" in H) &&
                  "duration" in E &&
                  (H.duration = E.duration),
                (H.stagger = E.stagger),
                $.call(M, me, H, 0),
                delete b[Y];
          }
          (me.length || O.length || T.length) &&
            (y &&
              M.add(function () {
                return Fl(ze, y, M._zTime < 0 ? "remove" : "add");
              }, 0) &&
              !h &&
              Fl(ze, y, "add"),
            me.length && $.call(M, me, b, 0)),
            _d(o, T, M),
            _d(l, O, M);
          var Zt = xe && xe.timeline;
          Zt &&
            (Zt.add(M, 0),
            xe._final.push(function () {
              return pd(L, !a);
            })),
            (le = M.duration()),
            M.call(function () {
              var V = M.time() >= le;
              V && !Zt && pd(L, !a), y && Fl(ze, y, V ? "remove" : "add");
            });
        }),
        u &&
          (c = L.filter(function (z) {
            return !z.sd && !z.a.isVisible && z.b.isVisible;
          }).map(function (z) {
            return z.a.element;
          })),
        xe)
      ) {
        var Ie;
        c && (Ie = xe._abs).push.apply(Ie, md(L, c)), xe._run.push(Pe);
      } else c && gd(md(L, c)), Pe();
      var De = xe ? xe.timeline : M;
      return (
        (De.revert = function () {
          return jl(De, 1, 1);
        }),
        De
      );
    },
    _0 = function t(e) {
      e.vars.onInterrupt &&
        e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []),
        e.getChildren(!0, !1, !0).forEach(t);
    },
    jl = function (e, n, i) {
      if (e && e.progress() < 1 && (!e.paused() || i))
        return n && (_0(e), n < 2 && e.progress(1), e.kill()), !0;
    },
    Fa = function (e) {
      for (
        var n = (e.idLookup = {}),
          i = (e.alt = {}),
          r = e.elementStates,
          s = r.length,
          a;
        s--;

      )
        (a = r[s]), n[a.id] ? (i[a.id] = a) : (n[a.id] = a);
    },
    nn = (function () {
      function t(n, i, r) {
        if (((this.props = i && i.props), (this.simple = !!(i && i.simple)), r))
          (this.targets = yd(n)), (this.elementStates = n), Fa(this);
        else {
          this.targets = xr(n);
          var s = i && (i.kill === !1 || (i.batch && !i.kill));
          xe && !s && xe._kill.push(this), this.update(s || !!xe);
        }
      }
      var e = t.prototype;
      return (
        (e.update = function (i) {
          var r = this;
          return (
            (this.elementStates = this.targets.map(function (s) {
              return new Fi(s, r.props, r.simple);
            })),
            Fa(this),
            this.interrupt(i),
            this.recordInlineStyles(),
            this
          );
        }),
        (e.clear = function () {
          return (
            (this.targets.length = this.elementStates.length = 0),
            Fa(this),
            this
          );
        }),
        (e.fit = function (i, r, s) {
          for (
            var a = za(this.elementStates.slice(0), !1, !0),
              o = (i || this).idLookup,
              l = 0,
              c,
              u;
            l < a.length;
            l++
          )
            (c = a[l]),
              s && (c.matrix = bn(c.element, !1, !1, !0)),
              (u = o[c.id]),
              u && Er(c, u, r, !0, 0, c),
              (c.matrix = bn(c.element, !1, !1, !0));
          return this;
        }),
        (e.getProperty = function (i, r) {
          var s = this.getElementState(i) || La;
          return (r in s ? s : s.props || La)[r];
        }),
        (e.add = function (i) {
          for (
            var r = i.targets.length, s = this.idLookup, a = this.alt, o, l, c;
            r--;

          )
            (l = i.elementStates[r]),
              (c = s[l.id]),
              c &&
              (l.element === c.element ||
                (a[l.id] && a[l.id].element === l.element))
                ? ((o = this.elementStates.indexOf(
                    l.element === c.element ? c : a[l.id]
                  )),
                  this.targets.splice(o, 1, i.targets[r]),
                  this.elementStates.splice(o, 1, l))
                : (this.targets.push(i.targets[r]), this.elementStates.push(l));
          return (
            i.interrupted && (this.interrupted = !0),
            i.simple || (this.simple = !1),
            Fa(this),
            this
          );
        }),
        (e.compare = function (i) {
          var r = i.idLookup,
            s = this.idLookup,
            a = [],
            o = [],
            l = [],
            c = [],
            u = [],
            f = i.alt,
            d = this.alt,
            h = function (P, A, E) {
              return (
                (P.isVisible !== A.isVisible
                  ? P.isVisible
                    ? l
                    : c
                  : P.isVisible
                  ? o
                  : a
                ).push(E) && u.push(E)
              );
            },
            m = function (P, A, E) {
              return u.indexOf(E) < 0 && h(P, A, E);
            },
            p,
            g,
            y,
            v,
            _,
            x,
            S,
            C;
          for (y in r)
            (_ = f[y]),
              (x = d[y]),
              (p = _ ? bd(i, this, y) : r[y]),
              (v = p.element),
              (g = s[y]),
              x
                ? ((C =
                    g.isVisible || (!x.isVisible && v === g.element) ? g : x),
                  (S =
                    _ && !p.isVisible && !_.isVisible && C.element === _.element
                      ? _
                      : p),
                  S.isVisible && C.isVisible && S.element !== C.element
                    ? ((S.isDifferent(C) ? o : a).push(S.element, C.element),
                      u.push(S.element, C.element))
                    : h(S, C, S.element),
                  _ && S.element === _.element && (_ = r[y]),
                  m(S.element !== g.element && _ ? _ : S, g, g.element),
                  m(_ && _.element === x.element ? _ : S, x, x.element),
                  _ && m(_, x.element === _.element ? x : g, _.element))
                : (g ? (g.isDifferent(p) ? h(p, g, v) : a.push(v)) : l.push(v),
                  _ && m(_, g, _.element));
          for (y in s)
            r[y] || (c.push(s[y].element), d[y] && c.push(d[y].element));
          return { changed: o, unchanged: a, enter: l, leave: c };
        }),
        (e.recordInlineStyles = function () {
          for (
            var i = Ia[this.props] || Da, r = this.elementStates.length;
            r--;

          )
            Ts(this.elementStates[r], i);
        }),
        (e.interrupt = function (i) {
          var r = this,
            s = [];
          this.targets.forEach(function (a) {
            var o = a._flip,
              l = jl(o, i ? 0 : 1);
            i &&
              l &&
              s.indexOf(o) < 0 &&
              o.add(function () {
                return r.updateVisibility();
              }),
              l && s.push(o);
          }),
            !i && s.length && this.updateVisibility(),
            this.interrupted || (this.interrupted = !!s.length);
        }),
        (e.updateVisibility = function () {
          this.elementStates.forEach(function (i) {
            var r = i.element.getBoundingClientRect();
            (i.isVisible = !!(r.width || r.height || r.top || r.left)),
              (i.uncache = 1);
          });
        }),
        (e.getElementState = function (i) {
          return this.elementStates[this.targets.indexOf(Ss(i))];
        }),
        (e.makeAbsolute = function () {
          return za(this.elementStates.slice(0), !0, !0).map(Hl);
        }),
        t
      );
    })(),
    Fi = (function () {
      function t(n, i, r) {
        (this.element = n), this.update(i, r);
      }
      var e = t.prototype;
      return (
        (e.isDifferent = function (i) {
          var r = this.bounds,
            s = i.bounds;
          return (
            r.top !== s.top ||
            r.left !== s.left ||
            r.width !== s.width ||
            r.height !== s.height ||
            !this.matrix.equals(i.matrix) ||
            this.opacity !== i.opacity ||
            (this.props &&
              i.props &&
              JSON.stringify(this.props) !== JSON.stringify(i.props))
          );
        }),
        (e.update = function (i, r) {
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
            f = r
              ? new Ni(1, 0, 0, 1, c.left + Al(), c.top + Ol())
              : bn(a, !1, !1, !0);
          (l.uncache = 1),
            (s.getProp = o),
            (s.element = a),
            (s.id = y0(a)),
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
            (s.width = u ? u.width : Rn(o("width", "px"), 0.04)),
            (s.height = u ? u.height : Rn(o("height", "px"), 0.04)),
            i && v0(s, Bl[i] || hd(i)),
            (s.ctm =
              a.getCTM &&
              a.nodeName.toLowerCase() === "svg" &&
              ad(a).inverse()),
            (s.simple =
              r || (Sr(f.a) === 1 && !Sr(f.b) && !Sr(f.c) && Sr(f.d) === 1)),
            (s.uncache = 0);
        }),
        t
      );
    })(),
    b0 = (function () {
      function t(n, i) {
        (this.vars = n),
          (this.batch = i),
          (this.states = []),
          (this.timeline = i.timeline);
      }
      var e = t.prototype;
      return (
        (e.getStateById = function (i) {
          for (var r = this.states.length; r--; )
            if (this.states[r].idLookup[i]) return this.states[r];
        }),
        (e.kill = function () {
          this.batch.remove(this);
        }),
        t
      );
    })(),
    x0 = (function () {
      function t(n) {
        (this.id = n),
          (this.actions = []),
          (this._kill = []),
          (this._final = []),
          (this._abs = []),
          (this._run = []),
          (this.data = {}),
          (this.state = new nn()),
          (this.timeline = ut.timeline());
      }
      var e = t.prototype;
      return (
        (e.add = function (i) {
          var r = this.actions.filter(function (s) {
            return s.vars === i;
          });
          return r.length
            ? r[0]
            : ((r = new b0(typeof i == "function" ? { animate: i } : i, this)),
              this.actions.push(r),
              r);
        }),
        (e.remove = function (i) {
          var r = this.actions.indexOf(i);
          return r >= 0 && this.actions.splice(r, 1), this;
        }),
        (e.getState = function (i) {
          var r = this,
            s = xe,
            a = xs;
          return (
            (xe = this),
            this.state.clear(),
            (this._kill.length = 0),
            this.actions.forEach(function (o) {
              o.vars.getState &&
                ((o.states.length = 0),
                (xs = o),
                (o.state = o.vars.getState(o))),
                i &&
                  o.states.forEach(function (l) {
                    return r.state.add(l);
                  });
            }),
            (xs = a),
            (xe = s),
            this.killConflicts(),
            this
          );
        }),
        (e.animate = function () {
          var i = this,
            r = xe,
            s = this.timeline,
            a = this.actions.length,
            o,
            l;
          for (
            xe = this,
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
                  ((h = new nn()),
                  c.states.forEach(function (p) {
                    return h.add(p);
                  }),
                  (m = h.compare(wr.getState(d))),
                  m.enter.length && u && u(m.enter),
                  m.leave.length && f && f(m.leave));
              }),
              gd(this._abs),
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
                  od(i, "onComplete"));
              }),
              xe = r;
            a--;

          )
            this.actions[a].vars.once && this.actions[a].kill();
          return od(this, "onStart"), s.restart(), this;
        }),
        (e.loadState = function (i) {
          i ||
            (i = function () {
              return 0;
            });
          var r = [];
          return (
            this.actions.forEach(function (s) {
              if (s.vars.loadState) {
                var a,
                  o = function l(c) {
                    c && (s.targets = c),
                      (a = r.indexOf(l)),
                      ~a && (r.splice(a, 1), r.length || i());
                  };
                r.push(o), s.vars.loadState(o);
              }
            }),
            r.length || i(),
            this
          );
        }),
        (e.setState = function () {
          return (
            this.actions.forEach(function (i) {
              return (i.targets = i.vars.setState && i.vars.setState(i));
            }),
            this
          );
        }),
        (e.killConflicts = function (i) {
          return (
            this.state.interrupt(i),
            this._kill.forEach(function (r) {
              return r.interrupt(i);
            }),
            this
          );
        }),
        (e.run = function (i, r) {
          var s = this;
          return (
            this !== xe &&
              (i || this.getState(r),
              this.loadState(function () {
                s._killed || (s.setState(), s.animate());
              })),
            this
          );
        }),
        (e.clear = function (i) {
          this.state.clear(), i || (this.actions.length = 0);
        }),
        (e.getStateById = function (i) {
          for (var r = this.actions.length, s; r--; )
            if (((s = this.actions[r].getStateById(i)), s)) return s;
          return this.state.idLookup[i] && this.state;
        }),
        (e.kill = function () {
          (this._killed = 1), this.clear(), delete Rl[this.id];
        }),
        t
      );
    })(),
    wr = (function () {
      function t() {}
      return (
        (t.getState = function (n, i) {
          var r = Wl(n, i);
          return (
            xs && xs.states.push(r),
            i && i.batch && t.batch(i.batch).state.add(r),
            r
          );
        }),
        (t.from = function (n, i) {
          return (
            (i = i || {}),
            "clearProps" in i || (i.clearProps = !0),
            Gl(
              n,
              Wl(i.targets || n.targets, {
                props: i.props || n.props,
                simple: i.simple,
                kill: !!i.kill,
              }),
              i,
              -1
            )
          );
        }),
        (t.to = function (n, i) {
          return Gl(
            n,
            Wl(i.targets || n.targets, {
              props: i.props || n.props,
              simple: i.simple,
              kill: !!i.kill,
            }),
            i,
            1
          );
        }),
        (t.fromTo = function (n, i, r) {
          return Gl(n, i, r);
        }),
        (t.fit = function (n, i, r) {
          var s = r ? Tr(r, fd) : {},
            a = r || s,
            o = a.absolute,
            l = a.scale,
            c = a.getVars,
            u = a.props,
            f = a.runBackwards,
            d = a.onComplete,
            h = a.simple,
            m = r && r.fitChild && Ss(r.fitChild),
            p = Vl(i, u, h, n),
            g = Vl(n, 0, h, p),
            y = u ? Ia[u] : Da,
            v = ut.context();
          return (
            u && vd(s, p.props),
            Ts(g, y),
            f &&
              ("immediateRender" in s || (s.immediateRender = !0),
              (s.onComplete = function () {
                Ra(g), d && d.apply(this, arguments);
              })),
            o && Hl(g, p),
            (s = Er(
              g,
              p,
              l || m,
              !s.duration && u,
              m,
              s.duration || c ? s : 0
            )),
            typeof r == "object" && "zIndex" in r && (s.zIndex = r.zIndex),
            v &&
              !c &&
              v.add(function () {
                return function () {
                  return Ra(g);
                };
              }),
            c ? s : s.duration ? ut.to(g.element, s) : null
          );
        }),
        (t.makeAbsolute = function (n, i) {
          return (n instanceof nn ? n : new nn(n, i)).makeAbsolute();
        }),
        (t.batch = function (n) {
          return n || (n = "default"), Rl[n] || (Rl[n] = new x0(n));
        }),
        (t.killFlipsOf = function (n, i) {
          (n instanceof nn ? n.targets : xr(n)).forEach(function (r) {
            return r && jl(r._flip, i !== !1 ? 1 : 2);
          });
        }),
        (t.isFlipping = function (n) {
          var i = t.getByTarget(n);
          return !!i && i.isActive();
        }),
        (t.getByTarget = function (n) {
          return (Ss(n) || La)._flip;
        }),
        (t.getElementState = function (n, i) {
          return new Fi(Ss(n), i);
        }),
        (t.convertCoordinates = function (n, i, r) {
          var s = bn(i, !0, !0).multiply(bn(n));
          return r ? s.apply(r) : s;
        }),
        (t.register = function (n) {
          if (((ai = typeof document != "undefined" && document.body), ai)) {
            (ut = n),
              $l(ai),
              (xr = ut.utils.toArray),
              (zl = ut.core.getStyleSaver);
            var i = ut.utils.snap(0.1);
            Rn = function (s, a) {
              return i(parseFloat(s) + a);
            };
          }
        }),
        t
      );
    })();
  (wr.version = "3.13.0"),
    typeof window != "undefined" &&
      window.gsap &&
      window.gsap.registerPlugin(wr),
    R.registerPlugin(wr);
  const S0 = () => {
      document.querySelector(".seo_header_flip_wrap");
      const t = document.querySelector(".seo_header_title_col"),
        e = document.querySelector(".seo_header_title_text"),
        n = document.querySelector(".seo_header_empty_col"),
        i = document.querySelector(".seo_header_service_col"),
        r = document.querySelector(".seo_header_service_component"),
        s = document.querySelector(".seo_heading_text"),
        a = document.querySelector(".seo_header_service_button"),
        o = document.querySelector(".seo_service_list_wrap"),
        l = document.querySelector(".project_card_tags_seo");
      function c() {
        const u = wr.getState([t, e, n, i, r, s, a, o, l], {
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
          i.classList.toggle("u-column-3"),
          i.classList.toggle("u-column-12"),
          o.classList.toggle("inactive"),
          l.classList.toggle("active"),
          s.classList.toggle("active"),
          r.classList.toggle("active"),
          a.classList.toggle("active"),
          wr.from(u, {
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
    T0 = () => {
      S0(), console.log("seoFlip");
    },
    E0 = () => {
      a0(), ni(), Tl(), ii(), T0(), Ec(), Di().add(() => ri(), "-=1");
    };
  R.registerPlugin(be);
  const w0 = (t) =>
      Ya(this, null, function* () {
        yield document.fonts.ready;
        const e = document.querySelector("[work-cms-hero='text']"),
          n = document.querySelector("[work-cms-hero='back-btn']"),
          i = document.querySelector("[work-cms-hero='line']"),
          r = document.querySelector("[work-cms-hero='info']"),
          s = document.querySelector("[work-cms-hero='info-title']"),
          a = document.querySelector("[work-cms-hero='info-text']"),
          o = document.querySelector("[work-cms-hero='info-meta']"),
          l = document.querySelectorAll("[work-cms-hero='tag']"),
          c = document.querySelectorAll("[work-cms-hero='visual']"),
          u = document.querySelector("[work-cms-hero='bg'] img");
        e &&
          be.create(e, {
            type: "chars, lines, words",
            autoSplit: !0,
            mask: "lines",
            linesClass: "work-cms-hero-text-line",
            tag: "div",
            onSplit(f) {
              be.create(s, {
                type: "lines",
                autoSplit: !0,
                mask: "lines",
                linesClass: "work-cms-info-title-line",
                tag: "div",
                onSplit(d) {
                  be.create(a, {
                    type: "lines",
                    autoSplit: !0,
                    mask: "lines",
                    linesClass: "work-cms-info-text-line",
                    tag: "div",
                    onSplit(h) {
                      be.create(o, {
                        type: "lines",
                        autoSplit: !0,
                        mask: "lines",
                        linesClass: "work-cms-info-meta-line",
                        tag: "div",
                        onSplit(m) {
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
                          const g = R.timeline();
                          return (
                            R.set(f.chars, { opacity: 0, yPercent: 100 }),
                            R.set(n, { opacity: 0, yPercent: 100 }),
                            R.set(l, {
                              opacity: 0,
                              y: 50,
                              scale: 0.4,
                              transformOrigin: "center right",
                            }),
                            R.set(i, {
                              opacity: 0,
                              scaleX: 0,
                              transformOrigin: "center left",
                            }),
                            R.set(r, { opacity: 0, y: 50 }),
                            R.set(".move-text-title", {
                              opacity: 0,
                              yPercent: 100,
                            }),
                            R.set(".move-text-info", {
                              opacity: 0,
                              yPercent: 100,
                            }),
                            R.set(".move-text-meta", {
                              opacity: 0,
                              yPercent: 100,
                            }),
                            R.set(c, { y: 100, opacity: 0 }),
                            R.set(u, { scale: 1.4 }),
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
                            g.to(
                              u,
                              { scale: 1, duration: 2.5, ease: "expo.inOut" },
                              "-=2.5"
                            ),
                            g.to(
                              l,
                              {
                                opacity: 1,
                                scale: 1,
                                duration: 1.8,
                                stagger: {
                                  each: 0.06,
                                  from: "start",
                                  grid: "auto",
                                },
                                y: 0,
                                ease: "expo.inOut",
                              },
                              "-=1.7"
                            ),
                            g.to(i, { opacity: 1, duration: 0 }, "<"),
                            g.to(
                              i,
                              { scaleX: 1, duration: 2.4, ease: "expo.inOut" },
                              "-=2"
                            ),
                            g.to(
                              r,
                              {
                                opacity: 1,
                                y: 0,
                                duration: 1,
                                ease: "expo.inOut",
                              },
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
                        },
                      });
                    },
                  });
                },
              });
            },
          });
      }),
    C0 = {
      home: Nf,
      about: $v,
      work: Uv,
      contact: Xv,
      career: Gv,
      "extra-page": Nf,
      service: r0,
      work_cms: () => {
        ni(), ii();
        const t = Di();
        t.add(() => ri(), "-=1.4"), t.add(() => w0(), "-=1.4");
      },
      seo: E0,
    },
    P0 = () => {
      const t = document.querySelector("[page-route]");
      if (!t) {
        console.log("No element with page-route attribute found");
        return;
      }
      const e = t.getAttribute("page-route"),
        n = C0[e];
      n ? n() : console.log(`No specific script for route: ${e}`);
    },
    k0 = () => {
      const t = document.querySelector("[nav-menu='trigger']"),
        e = document.querySelector("[nav-menu='component']"),
        n = document.querySelector("[nav-menu='contain']"),
        i = document.querySelector("[main-nav='brand']"),
        r = document.querySelector("[nav-menu='brand']"),
        s = document.querySelectorAll("[nav-menu='link-item']"),
        a = document.querySelector("[nav-menu='info-text']"),
        o = document.querySelectorAll("[nav-menu='close']"),
        l = document.querySelectorAll("[nav-menu='social-link']");
      if (!t || !e || !n || !r || !s || !a || !l) return;
      R.set(e, { clipPath: "inset(0% 0% 100% 0%)" }),
        R.set([r, s, l], { y: "100%", opacity: 0 }),
        R.set(a, { y: "20%", opacity: 0 });
      const c = R.timeline({ paused: !0 }),
        u = R.timeline({ paused: !0 });
      c
        .to(e, {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "expo.inOut",
          duration: 1,
        })
        .to(r, { y: "0%", duration: 1, opacity: 1, ease: "expo.out" }, "-=0.4")
        .to(
          i,
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
          .to([r, s], {
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
            i,
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
    M0 = () => {
      k0();
    };
  class $0 {
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
        i = n.length;
      for (let r = 0; r < i; r++) Math.random() < 0.5 && (n[r] = 4278190080);
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
  const O0 = (t) => {
      const e = document.querySelector(".page_overlay"),
        n = document.querySelector("[page-overlay='text-wrap']"),
        i = document.querySelectorAll("[page-load='component']"),
        r = document.querySelectorAll("[page-load='wrap']"),
        s = document.querySelectorAll("[page-load='gradient']"),
        a = document.querySelectorAll("[page-load='text']");
      e &&
        R.set(e, { clipPath: "inset(100% 0% 0% 0%)", pointerEvents: "none" }),
        n && R.set(n, { opacity: 0, y: 50, willChange: "transform, opacity" });
      const o = R.timeline();
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
                s.length && R.set(s, { opacity: 1 }),
                  r.length && R.set(r, { opacity: 0 }),
                  a.length && R.set(a, { opacity: 0 }),
                  i.length &&
                    R.set(i, {
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
    A0 = () => {
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
            Ya(this, null, function* () {
              s.preventDefault();
              const a = e.href,
                o = document.createElement("link");
              (o.rel = "prefetch"),
                (o.href = a),
                document.head.appendChild(o),
                yield O0(),
                (window.location.href = a);
            })
          );
      });
    };
  R.registerPlugin(be, U);
  const L0 = {
    lines: { duration: 1.8, stagger: 0.08 },
    words: { duration: 0.6, stagger: 0.06 },
    chars: { duration: 0.4, stagger: 0.01 },
  };
  let Ba = [];
  const Sd = () => {
      document.querySelectorAll("[split-text]").forEach((t) => {
        R.set(t, { autoAlpha: 1 });
        const e = t.getAttribute("split-text") || "lines",
          n =
            e === "lines"
              ? ["lines"]
              : e === "words"
              ? ["lines", "words"]
              : ["lines", "words", "chars"],
          i = be.create(t, {
            type: n.join(", "),
            mask: "lines",
            autoSplit: !0,
            linesClass: "line",
            wordsClass: "word",
            charsClass: "letter",
            onSplit: function (r) {
              const s = r[e],
                a = L0[e];
              return R.from(s, {
                yPercent: 110,
                duration: a.duration,
                stagger: a.stagger,
                ease: "expo.out",
                scrollTrigger: {
                  trigger: t,
                  start: "clamp(top 80%)",
                  once: !0,
                },
              });
            },
          });
        Ba.push(i);
      });
    },
    Td = () => {
      document.querySelectorAll("[split-text]").forEach((t) => {
        R.set(t, { autoAlpha: 1 });
        const e = be.create(t, {
          type: "lines",
          autoSplit: !0,
          mask: "lines",
          onSplit(n) {
            return R.from(n.lines, {
              duration: 1.8,
              yPercent: 110,
              stagger: 0.1,
              ease: "expo.out",
              scrollTrigger: { trigger: t, start: "top 80%", once: !0 },
            });
          },
        });
        Ba.push(e);
      });
    },
    I0 = () => {
      Ba.forEach((t) => {
        t && typeof t.revert == "function" && t.revert();
      }),
        (Ba = []),
        U.getAll().forEach((t) => t.kill());
    };
  let Ed;
  const D0 = (t) => {
      clearTimeout(Ed),
        (Ed = setTimeout(() => {
          I0(),
            setTimeout(() => {
              t ? Sd() : Td(), U.refresh();
            }, 100);
        }, 250));
    },
    z0 = (t = !0) => {
      document.fonts.ready.then(() => {
        t ? Sd() : Td(), window.addEventListener("resize", () => D0(t));
      });
    },
    R0 = () => {
      M0(), new $0(), Vf(), A0(), z0();
    };
  function N0(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(
          t,
          typeof (r = (function (s, a) {
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
          })(i.key)) == "symbol"
            ? r
            : String(r),
          i
        );
    }
    var r;
  }
  function Ul(t, e, n) {
    return (
      e && N0(t.prototype, e),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  function xn() {
    return (
      (xn = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }),
      xn.apply(this, arguments)
    );
  }
  function qa(t, e) {
    (t.prototype = Object.create(e.prototype)),
      (t.prototype.constructor = t),
      Es(t, e);
  }
  function Kl(t) {
    return (
      (Kl = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      Kl(t)
    );
  }
  function Es(t, e) {
    return (
      (Es = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, i) {
            return (n.__proto__ = i), n;
          }),
      Es(t, e)
    );
  }
  function F0() {
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
  function Zl(t, e, n) {
    return (
      (Zl = F0()
        ? Reflect.construct.bind()
        : function (i, r, s) {
            var a = [null];
            a.push.apply(a, r);
            var o = new (Function.bind.apply(i, a))();
            return s && Es(o, s.prototype), o;
          }),
      Zl.apply(null, arguments)
    );
  }
  function Ql(t) {
    var e = typeof Map == "function" ? new Map() : void 0;
    return (
      (Ql = function (n) {
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
          e.set(n, i);
        }
        function i() {
          return Zl(n, arguments, Kl(this).constructor);
        }
        return (
          (i.prototype = Object.create(n.prototype, {
            constructor: {
              value: i,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          Es(i, n)
        );
      }),
      Ql(t)
    );
  }
  function B0(t) {
    if (t === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  var oi,
    q0 = function () {
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
  })(oi || (oi = {}));
  var wd = oi.off,
    Bi = (function () {
      function t(n) {
        (this.t = void 0), (this.t = n);
      }
      (t.getLevel = function () {
        return wd;
      }),
        (t.setLevel = function (n) {
          return (wd = oi[n]);
        });
      var e = t.prototype;
      return (
        (e.error = function () {
          this.i(console.error, oi.error, [].slice.call(arguments));
        }),
        (e.warn = function () {
          this.i(console.warn, oi.warning, [].slice.call(arguments));
        }),
        (e.info = function () {
          this.i(console.info, oi.info, [].slice.call(arguments));
        }),
        (e.debug = function () {
          this.i(console.log, oi.debug, [].slice.call(arguments));
        }),
        (e.i = function (n, i, r) {
          i <= t.getLevel() &&
            n.apply(console, ["[" + this.t + "] "].concat(r));
        }),
        t
      );
    })();
  function Cr(t) {
    return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  }
  function Cd(t) {
    return t && t.sensitive ? "" : "i";
  }
  var Sn = {
      container: "container",
      history: "history",
      namespace: "namespace",
      prefix: "data-barba",
      prevent: "prevent",
      wrapper: "wrapper",
    },
    qi = new ((function () {
      function t() {
        (this.o = Sn),
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
          var i = document.createElement("div");
          return (i.innerHTML = n), i;
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
        (e.addContainer = function (n, i) {
          var r = this.getContainer() || this.h.before;
          r
            ? this.l(n, r)
            : this.h.after
            ? this.h.after.parentNode.insertBefore(n, this.h.after)
            : this.h.parent
            ? this.h.parent.appendChild(n)
            : i.appendChild(n);
        }),
        (e.getSibling = function () {
          return this.h;
        }),
        (e.getNamespace = function (n) {
          n === void 0 && (n = document);
          var i = n.querySelector(
            "[" + this.o.prefix + "-" + this.o.namespace + "]"
          );
          return i
            ? i.getAttribute(this.o.prefix + "-" + this.o.namespace)
            : null;
        }),
        (e.getHref = function (n) {
          if (n.tagName && n.tagName.toLowerCase() === "a") {
            if (typeof n.href == "string") return n.href;
            var i = n.getAttribute("href") || n.getAttribute("xlink:href");
            if (i) return this.resolveUrl(i.baseVal || i);
          }
          return null;
        }),
        (e.resolveUrl = function () {
          var n = [].slice.call(arguments).length;
          if (n === 0)
            throw new Error(
              "resolveUrl requires at least one argument; got none."
            );
          var i = document.createElement("base");
          if (((i.href = arguments[0]), n === 1)) return i.href;
          var r = document.getElementsByTagName("head")[0];
          r.insertBefore(i, r.firstChild);
          for (var s, a = document.createElement("a"), o = 1; o < n; o++)
            (a.href = arguments[o]), (i.href = s = a.href);
          return r.removeChild(i), s;
        }),
        (e.l = function (n, i) {
          i.parentNode.insertBefore(n, i.nextSibling);
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
    H0 = (function () {
      function t() {
        (this.p = void 0), (this.m = []), (this.P = -1);
      }
      var e = t.prototype;
      return (
        (e.init = function (n, i) {
          this.p = "barba";
          var r = {
            data: {},
            ns: i,
            scroll: { x: window.scrollX, y: window.scrollY },
            url: n,
          };
          (this.P = 0), this.m.push(r);
          var s = { from: this.p, index: this.P, states: [].concat(this.m) };
          window.history && window.history.replaceState(s, "", n);
        }),
        (e.change = function (n, i, r) {
          if (r && r.state) {
            var s = r.state,
              a = s.index;
            (i = this.g(this.P - a)), this.replace(s.states), (this.P = a);
          } else this.add(n, i);
          return i;
        }),
        (e.add = function (n, i, r, s) {
          var a = r != null ? r : this.R(i),
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
        (e.store = function (n, i) {
          var r = i || this.P,
            s = this.get(r);
          (s.data = xn({}, s.data, n)), this.set(r, s);
          var a = { from: this.p, index: this.P, states: [].concat(this.m) };
          window.history.replaceState(a, "");
        }),
        (e.update = function (n, i) {
          var r = i || this.P,
            s = xn({}, this.get(r), n);
          this.set(r, s);
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
        (e.set = function (n, i) {
          return (this.m[n] = i);
        }),
        (e.R = function (n) {
          var i = "push",
            r = n,
            s = Sn.prefix + "-" + Sn.history;
          return (
            r.hasAttribute && r.hasAttribute(s) && (i = r.getAttribute(s)), i
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
        Ul(t, [
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
    Pd = new H0(),
    Ha = function (t, e) {
      try {
        var n = (function () {
          if (!e.next.html)
            return Promise.resolve(t).then(function (i) {
              var r = e.next;
              if (i) {
                var s = qi.toElement(i.html);
                (r.namespace = qi.getNamespace(s)),
                  (r.container = qi.getContainer(s)),
                  (r.url = i.url),
                  (r.html = i.html),
                  Pd.update({ ns: r.namespace });
                var a = qi.toDocument(i.html);
                document.title = a.title;
              }
            });
        })();
        return Promise.resolve(n && n.then ? n.then(function () {}) : void 0);
      } catch (i) {
        return Promise.reject(i);
      }
    },
    kd = function t(e, n, i) {
      return e instanceof RegExp
        ? (function (r, s) {
            if (!s) return r;
            for (
              var a = /\((?:\?<(.*?)>)?(?!\?)/g, o = 0, l = a.exec(r.source);
              l;

            )
              s.push({
                name: l[1] || o++,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: "",
              }),
                (l = a.exec(r.source));
            return r;
          })(e, n)
        : Array.isArray(e)
        ? (function (r, s, a) {
            var o = r.map(function (l) {
              return t(l, s, a).source;
            });
            return new RegExp("(?:".concat(o.join("|"), ")"), Cd(a));
          })(e, n, i)
        : (function (r, s, a) {
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
                  S = "[".concat(Cr(x === void 0 ? "" : x), "]|$"),
                  C = "[".concat(Cr(_), "]"),
                  w = h ? "^" : "",
                  P = 0,
                  A = o;
                P < A.length;
                P++
              ) {
                var E = A[P];
                if (typeof E == "string") w += Cr(y(E));
                else {
                  var M = Cr(y(E.prefix)),
                    b = Cr(y(E.suffix));
                  if (E.pattern)
                    if ((l && l.push(E), M || b))
                      if (E.modifier === "+" || E.modifier === "*") {
                        var T = E.modifier === "*" ? "?" : "";
                        w += "(?:"
                          .concat(M, "((?:")
                          .concat(E.pattern, ")(?:")
                          .concat(b)
                          .concat(M, "(?:")
                          .concat(E.pattern, "))*)")
                          .concat(b, ")")
                          .concat(T);
                      } else
                        w += "(?:"
                          .concat(M, "(")
                          .concat(E.pattern, ")")
                          .concat(b, ")")
                          .concat(E.modifier);
                    else
                      w +=
                        E.modifier === "+" || E.modifier === "*"
                          ? "((?:"
                              .concat(E.pattern, ")")
                              .concat(E.modifier, ")")
                          : "(".concat(E.pattern, ")").concat(E.modifier);
                  else w += "(?:".concat(M).concat(b, ")").concat(E.modifier);
                }
              }
              if (p)
                f || (w += "".concat(C, "?")),
                  (w += c.endsWith ? "(?=".concat(S, ")") : "$");
              else {
                var O = o[o.length - 1],
                  L =
                    typeof O == "string"
                      ? C.indexOf(O[O.length - 1]) > -1
                      : O === void 0;
                f || (w += "(?:".concat(C, "(?=").concat(S, "))?")),
                  L || (w += "(?=".concat(C, "|").concat(S, ")"));
              }
              return new RegExp(w, Cd(c));
            })(
              (function (o, l) {
                l === void 0 && (l = {});
                for (
                  var c = (function (b) {
                      for (var T = [], O = 0; O < b.length; ) {
                        var L = b[O];
                        if (L !== "*" && L !== "+" && L !== "?")
                          if (L !== "\\")
                            if (L !== "{")
                              if (L !== "}")
                                if (L !== ":")
                                  if (L !== "(")
                                    T.push({
                                      type: "CHAR",
                                      index: O,
                                      value: b[O++],
                                    });
                                  else {
                                    var k = 1,
                                      I = "";
                                    if (b[(N = O + 1)] === "?")
                                      throw new TypeError(
                                        'Pattern cannot start with "?" at '.concat(
                                          N
                                        )
                                      );
                                    for (; N < b.length; )
                                      if (b[N] !== "\\") {
                                        if (b[N] === ")") {
                                          if (--k == 0) {
                                            N++;
                                            break;
                                          }
                                        } else if (
                                          b[N] === "(" &&
                                          (k++, b[N + 1] !== "?")
                                        )
                                          throw new TypeError(
                                            "Capturing groups are not allowed at ".concat(
                                              N
                                            )
                                          );
                                        I += b[N++];
                                      } else I += b[N++] + b[N++];
                                    if (k)
                                      throw new TypeError(
                                        "Unbalanced pattern at ".concat(O)
                                      );
                                    if (!I)
                                      throw new TypeError(
                                        "Missing pattern at ".concat(O)
                                      );
                                    T.push({
                                      type: "PATTERN",
                                      index: O,
                                      value: I,
                                    }),
                                      (O = N);
                                  }
                                else {
                                  for (var D = "", N = O + 1; N < b.length; ) {
                                    var $ = b.charCodeAt(N);
                                    if (
                                      !(
                                        ($ >= 48 && $ <= 57) ||
                                        ($ >= 65 && $ <= 90) ||
                                        ($ >= 97 && $ <= 122) ||
                                        $ === 95
                                      )
                                    )
                                      break;
                                    D += b[N++];
                                  }
                                  if (!D)
                                    throw new TypeError(
                                      "Missing parameter name at ".concat(O)
                                    );
                                  T.push({ type: "NAME", index: O, value: D }),
                                    (O = N);
                                }
                              else
                                T.push({
                                  type: "CLOSE",
                                  index: O,
                                  value: b[O++],
                                });
                            else
                              T.push({ type: "OPEN", index: O, value: b[O++] });
                          else
                            T.push({
                              type: "ESCAPED_CHAR",
                              index: O++,
                              value: b[O++],
                            });
                        else
                          T.push({ type: "MODIFIER", index: O, value: b[O++] });
                      }
                      return T.push({ type: "END", index: O, value: "" }), T;
                    })(o),
                    u = l.prefixes,
                    f = u === void 0 ? "./" : u,
                    d = "[^".concat(Cr(l.delimiter || "/#?"), "]+?"),
                    h = [],
                    m = 0,
                    p = 0,
                    g = "",
                    y = function (b) {
                      if (p < c.length && c[p].type === b) return c[p++].value;
                    },
                    v = function (b) {
                      var T = y(b);
                      if (T !== void 0) return T;
                      var O = c[p],
                        L = O.index;
                      throw new TypeError(
                        "Unexpected "
                          .concat(O.type, " at ")
                          .concat(L, ", expected ")
                          .concat(b)
                      );
                    },
                    _ = function () {
                      for (
                        var b, T = "";
                        (b = y("CHAR") || y("ESCAPED_CHAR"));

                      )
                        T += b;
                      return T;
                    };
                  p < c.length;

                ) {
                  var x = y("CHAR"),
                    S = y("NAME"),
                    C = y("PATTERN");
                  if (S || C)
                    f.indexOf((P = x || "")) === -1 && ((g += P), (P = "")),
                      g && (h.push(g), (g = "")),
                      h.push({
                        name: S || m++,
                        prefix: P,
                        suffix: "",
                        pattern: C || d,
                        modifier: y("MODIFIER") || "",
                      });
                  else {
                    var w = x || y("ESCAPED_CHAR");
                    if (w) g += w;
                    else if ((g && (h.push(g), (g = "")), y("OPEN"))) {
                      var P = _(),
                        A = y("NAME") || "",
                        E = y("PATTERN") || "",
                        M = _();
                      v("CLOSE"),
                        h.push({
                          name: A || (E ? m++ : ""),
                          pattern: A && !E ? d : E,
                          prefix: P,
                          suffix: M,
                          modifier: y("MODIFIER") || "",
                        });
                    } else v("END");
                  }
                }
                return h;
              })(r, a),
              s,
              a
            );
          })(e, n, i);
    },
    V0 = {
      __proto__: null,
      update: Ha,
      nextTick: function () {
        return new Promise(function (t) {
          window.requestAnimationFrame(t);
        });
      },
      pathToRegexp: kd,
    },
    Md = function () {
      return window.location.origin;
    },
    ws = function (t) {
      return t === void 0 && (t = window.location.href), li(t).port;
    },
    li = function (t) {
      var e,
        n = t.match(/:\d+/);
      if (n === null)
        /^http/.test(t) && (e = 80), /^https/.test(t) && (e = 443);
      else {
        var i = n[0].substring(1);
        e = parseInt(i, 10);
      }
      var r,
        s = t.replace(Md(), ""),
        a = {},
        o = s.indexOf("#");
      o >= 0 && ((r = s.slice(o + 1)), (s = s.slice(0, o)));
      var l = s.indexOf("?");
      return (
        l >= 0 && ((a = $d(s.slice(l + 1))), (s = s.slice(0, l))),
        { hash: r, path: s, port: e, query: a }
      );
    },
    $d = function (t) {
      return t.split("&").reduce(function (e, n) {
        var i = n.split("=");
        return (e[i[0]] = i[1]), e;
      }, {});
    },
    Jl = function (t) {
      return (
        t === void 0 && (t = window.location.href),
        t.replace(/(\/#.*|\/|#.*)$/, "")
      );
    },
    W0 = {
      __proto__: null,
      getHref: function () {
        return window.location.href;
      },
      getAbsoluteHref: function (t, e) {
        return e === void 0 && (e = document.baseURI), new URL(t, e).href;
      },
      getOrigin: Md,
      getPort: ws,
      getPath: function (t) {
        return t === void 0 && (t = window.location.href), li(t).path;
      },
      getQuery: function (t, e) {
        return (
          e === void 0 && (e = !1),
          e ? JSON.stringify(li(t).query) : li(t).query
        );
      },
      getHash: function (t) {
        return li(t).hash;
      },
      parse: li,
      parseQuery: $d,
      clean: Jl,
    };
  function X0(t, e, n, i, r) {
    return (
      e === void 0 && (e = 2e3),
      new Promise(function (s, a) {
        var o = new XMLHttpRequest();
        (o.onreadystatechange = function () {
          if (o.readyState === XMLHttpRequest.DONE) {
            if (o.status === 200) {
              var l =
                o.responseURL !== "" && o.responseURL !== t ? o.responseURL : t;
              s({ html: o.responseText, url: xn({ href: l }, li(l)) }),
                i.update(t, { status: "fulfilled", target: l });
            } else if (o.status) {
              var c = { status: o.status, statusText: o.statusText };
              n(t, c), a(c), i.update(t, { status: "rejected" });
            }
          }
        }),
          (o.ontimeout = function () {
            var l = new Error("Timeout error [" + e + "]");
            n(t, l), a(l), i.update(t, { status: "rejected" });
          }),
          (o.onerror = function () {
            var l = new Error("Fetch error");
            n(t, l), a(l), i.update(t, { status: "rejected" });
          }),
          o.open("GET", t),
          (o.timeout = e),
          o.setRequestHeader(
            "Accept",
            "text/html,application/xhtml+xml,application/xml"
          ),
          o.setRequestHeader("x-barba", "yes"),
          r.all().forEach(function (l, c) {
            o.setRequestHeader(c, l);
          }),
          o.send();
      })
    );
  }
  function Y0(t) {
    return (
      !!t &&
      (typeof t == "object" || typeof t == "function") &&
      typeof t.then == "function"
    );
  }
  function Pr(t, e) {
    return (
      e === void 0 && (e = {}),
      function () {
        var n = arguments,
          i = !1,
          r = new Promise(function (s, a) {
            e.async = function () {
              return (
                (i = !0),
                function (l, c) {
                  l ? a(l) : s(c);
                }
              );
            };
            var o = t.apply(e, [].slice.call(n));
            i || (Y0(o) ? o.then(s, a) : s(o));
          });
        return r;
      }
    );
  }
  var ci = new ((function (t) {
      function e() {
        var i;
        return (
          ((i = t.call(this) || this).logger = new Bi("@barba/core")),
          (i.all = [
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
          (i.registered = new Map()),
          i.init(),
          i
        );
      }
      qa(e, t);
      var n = e.prototype;
      return (
        (n.init = function () {
          var i = this;
          this.registered.clear(),
            this.all.forEach(function (r) {
              i[r] ||
                (i[r] = function (s, a) {
                  i.registered.has(r) || i.registered.set(r, new Set()),
                    i.registered.get(r).add({ ctx: a || {}, fn: s });
                });
            });
        }),
        (n.do = function (i) {
          var r = arguments,
            s = this;
          if (this.registered.has(i)) {
            var a = Promise.resolve();
            return (
              this.registered.get(i).forEach(function (o) {
                a = a.then(function () {
                  return Pr(o.fn, o.ctx).apply(void 0, [].slice.call(r, 1));
                });
              }),
              a.catch(function (o) {
                s.logger.debug("Hook error [" + i + "]"), s.logger.error(o);
              })
            );
          }
          return Promise.resolve();
        }),
        (n.clear = function () {
          var i = this;
          this.all.forEach(function (r) {
            delete i[r];
          }),
            this.init();
        }),
        (n.help = function () {
          this.logger.info("Available hooks: " + this.all.join(","));
          var i = [];
          this.registered.forEach(function (r, s) {
            return i.push(s);
          }),
            this.logger.info("Registered hooks: " + i.join(","));
        }),
        e
      );
    })(q0))(),
    Od = (function () {
      function t(e) {
        if (((this.k = void 0), (this.O = []), typeof e == "boolean"))
          this.k = e;
        else {
          var n = Array.isArray(e) ? e : [e];
          this.O = n.map(function (i) {
            return kd(i);
          });
        }
      }
      return (
        (t.prototype.checkHref = function (e) {
          if (typeof this.k == "boolean") return this.k;
          var n = li(e).path;
          return this.O.some(function (i) {
            return i.exec(n) !== null;
          });
        }),
        t
      );
    })(),
    G0 = (function (t) {
      function e(i) {
        var r;
        return ((r = t.call(this, i) || this).T = new Map()), r;
      }
      qa(e, t);
      var n = e.prototype;
      return (
        (n.set = function (i, r, s, a, o) {
          return (
            this.T.set(i, {
              action: s,
              request: r,
              status: a,
              target: o != null ? o : i,
            }),
            { action: s, request: r, status: a, target: o }
          );
        }),
        (n.get = function (i) {
          return this.T.get(i);
        }),
        (n.getRequest = function (i) {
          return this.T.get(i).request;
        }),
        (n.getAction = function (i) {
          return this.T.get(i).action;
        }),
        (n.getStatus = function (i) {
          return this.T.get(i).status;
        }),
        (n.getTarget = function (i) {
          return this.T.get(i).target;
        }),
        (n.has = function (i) {
          return !this.checkHref(i) && this.T.has(i);
        }),
        (n.delete = function (i) {
          return this.T.delete(i);
        }),
        (n.update = function (i, r) {
          var s = xn({}, this.T.get(i), r);
          return this.T.set(i, s), s;
        }),
        e
      );
    })(Od),
    j0 = (function () {
      function t() {
        this.A = new Map();
      }
      var e = t.prototype;
      return (
        (e.set = function (n, i) {
          return this.A.set(n, i), { name: i };
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
    U0 = function () {
      return !window.history.pushState;
    },
    K0 = function (t) {
      return !t.el || !t.href;
    },
    Z0 = function (t) {
      var e = t.event;
      return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
    },
    Q0 = function (t) {
      var e = t.el;
      return e.hasAttribute("target") && e.target === "_blank";
    },
    J0 = function (t) {
      var e = t.el;
      return (
        (e.protocol !== void 0 && window.location.protocol !== e.protocol) ||
        (e.hostname !== void 0 && window.location.hostname !== e.hostname)
      );
    },
    ey = function (t) {
      var e = t.el;
      return e.port !== void 0 && ws() !== ws(e.href);
    },
    ty = function (t) {
      var e = t.el;
      return e.getAttribute && typeof e.getAttribute("download") == "string";
    },
    ny = function (t) {
      return t.el.hasAttribute(Sn.prefix + "-" + Sn.prevent);
    },
    iy = function (t) {
      return !!t.el.closest("[" + Sn.prefix + "-" + Sn.prevent + '="all"]');
    },
    ry = function (t) {
      var e = t.href;
      return Jl(e) === Jl() && ws(e) === ws();
    },
    sy = (function (t) {
      function e(i) {
        var r;
        return (
          ((r = t.call(this, i) || this).suite = []),
          (r.tests = new Map()),
          r.init(),
          r
        );
      }
      qa(e, t);
      var n = e.prototype;
      return (
        (n.init = function () {
          this.add("pushState", U0),
            this.add("exists", K0),
            this.add("newTab", Z0),
            this.add("blank", Q0),
            this.add("corsDomain", J0),
            this.add("corsPort", ey),
            this.add("download", ty),
            this.add("preventSelf", ny),
            this.add("preventAll", iy),
            this.add("sameUrl", ry, !1);
        }),
        (n.add = function (i, r, s) {
          s === void 0 && (s = !0),
            this.tests.set(i, r),
            s && this.suite.push(i);
        }),
        (n.run = function (i, r, s, a) {
          return this.tests.get(i)({ el: r, event: s, href: a });
        }),
        (n.checkLink = function (i, r, s) {
          var a = this;
          return this.suite.some(function (o) {
            return a.run(o, i, r, s);
          });
        }),
        e
      );
    })(Od),
    ec = (function (t) {
      function e(n, i) {
        var r;
        return (
          i === void 0 && (i = "Barba error"),
          ((r =
            t.call.apply(t, [this].concat([].slice.call(arguments, 2))) ||
            this).error = void 0),
          (r.label = void 0),
          (r.error = n),
          (r.label = i),
          Error.captureStackTrace && Error.captureStackTrace(B0(r), e),
          (r.name = "BarbaError"),
          r
        );
      }
      return qa(e, t), e;
    })(Ql(Error)),
    ay = (function () {
      function t(n) {
        n === void 0 && (n = []),
          (this.logger = new Bi("@barba/core")),
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
        (e.add = function (n, i) {
          n === "rule"
            ? this.j.splice(i.position || 0, 0, i.value)
            : this.all.push(i),
            this.update();
        }),
        (e.resolve = function (n, i) {
          var r = this;
          i === void 0 && (i = {});
          var s = i.once ? this.once : this.page;
          s = s.filter(
            i.self
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
              return i.self && d.name === "self"
                ? (a.set(d, m), !0)
                : (r.j.reverse().forEach(function (p) {
                    h &&
                      ((h = r.M(d, p, n, m)),
                      d.from &&
                        d.to &&
                        (h = r.M(d, p, n, m, "from") && r.M(d, p, n, m, "to")),
                      d.from && !d.to && (h = r.M(d, p, n, m, "from")),
                      !d.from && d.to && (h = r.M(d, p, n, m, "to")));
                  }),
                  a.set(d, m),
                  h);
            }),
            l = a.get(o),
            c = [];
          if ((c.push(i.once ? "once" : "page"), i.self && c.push("self"), l)) {
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
            .map(function (i) {
              return n.N(i);
            })
            .sort(function (i, r) {
              return i.priority - r.priority;
            })
            .reverse()
            .map(function (i) {
              return delete i.priority, i;
            })),
            (this.page = this.all.filter(function (i) {
              return i.leave !== void 0 || i.enter !== void 0;
            })),
            (this.once = this.all.filter(function (i) {
              return i.once !== void 0;
            }));
        }),
        (e.M = function (n, i, r, s, a) {
          var o = !0,
            l = !1,
            c = n,
            u = i.name,
            f = u,
            d = u,
            h = u,
            m = a ? c[a] : c,
            p = a === "to" ? r.next : r.current;
          if (a ? m && m[u] : m[u]) {
            switch (i.type) {
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
                m[h](r) ? (l = !0) : (o = !1);
            }
            l &&
              (a ? ((s[a] = s[a] || {}), (s[a][u] = c[a][u])) : (s[u] = c[u]));
          }
          return o;
        }),
        (e.S = function (n, i, r) {
          var s = 0;
          return (
            (n[i] || (n.from && n.from[i]) || (n.to && n.to[i])) &&
              ((s += Math.pow(10, r)),
              n.from && n.from[i] && (s += 1),
              n.to && n.to[i] && (s += 2)),
            s
          );
        }),
        (e.N = function (n) {
          var i = this;
          n.priority = 0;
          var r = 0;
          return (
            this.j.forEach(function (s, a) {
              r += i.S(n, s.name, a + 1);
            }),
            (n.priority = r),
            n
          );
        }),
        t
      );
    })();
  function Cs(t, e) {
    try {
      var n = t();
    } catch (i) {
      return e(i);
    }
    return n && n.then ? n.then(void 0, e) : n;
  }
  var oy = (function () {
      function t(n) {
        n === void 0 && (n = []),
          (this.logger = new Bi("@barba/core")),
          (this.store = void 0),
          (this.C = !1),
          (this.store = new ay(n));
      }
      var e = t.prototype;
      return (
        (e.get = function (n, i) {
          return this.store.resolve(n, i);
        }),
        (e.doOnce = function (n) {
          var i = n.data,
            r = n.transition;
          try {
            var s = function () {
                a.C = !1;
              },
              a = this,
              o = r || {};
            a.C = !0;
            var l = Cs(
              function () {
                return Promise.resolve(a.L("beforeOnce", i, o)).then(
                  function () {
                    return Promise.resolve(a.once(i, o)).then(function () {
                      return Promise.resolve(a.L("afterOnce", i, o)).then(
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
          var i = n.data,
            r = n.transition,
            s = n.page,
            a = n.wrapper;
          try {
            var o = function (d) {
                l.C = !1;
              },
              l = this,
              c = r || {},
              u = c.sync === !0 || !1;
            l.C = !0;
            var f = Cs(
              function () {
                function d() {
                  return Promise.resolve(l.L("before", i, c)).then(function () {
                    function m(g) {
                      return Promise.resolve(l.remove(i)).then(function () {
                        return Promise.resolve(l.L("after", i, c)).then(
                          function () {}
                        );
                      });
                    }
                    var p = (function () {
                      if (u)
                        return Cs(
                          function () {
                            return Promise.resolve(l.add(i, a)).then(
                              function () {
                                return Promise.resolve(
                                  l.L("beforeLeave", i, c)
                                ).then(function () {
                                  return Promise.resolve(
                                    l.L("beforeEnter", i, c)
                                  ).then(function () {
                                    return Promise.resolve(
                                      Promise.all([
                                        l.leave(i, c),
                                        l.enter(i, c),
                                      ])
                                    ).then(function () {
                                      return Promise.resolve(
                                        l.L("afterLeave", i, c)
                                      ).then(function () {
                                        return Promise.resolve(
                                          l.L("afterEnter", i, c)
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
                              throw new ec(_, "Transition error [sync]");
                          }
                        );
                      var g = function (_) {
                          return Cs(
                            function () {
                              var x = (function () {
                                if (y !== !1)
                                  return Promise.resolve(l.add(i, a)).then(
                                    function () {
                                      return Promise.resolve(
                                        l.L("beforeEnter", i, c)
                                      ).then(function () {
                                        return Promise.resolve(
                                          l.enter(i, c, y)
                                        ).then(function () {
                                          return Promise.resolve(
                                            l.L("afterEnter", i, c)
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
                                throw new ec(
                                  x,
                                  "Transition error [before/after/enter]"
                                );
                            }
                          );
                        },
                        y = !1,
                        v = Cs(
                          function () {
                            return Promise.resolve(
                              l.L("beforeLeave", i, c)
                            ).then(function () {
                              return Promise.resolve(
                                Promise.all([l.leave(i, c), Ha(s, i)]).then(
                                  function (_) {
                                    return _[0];
                                  }
                                )
                              ).then(function (_) {
                                return (
                                  (y = _),
                                  Promise.resolve(l.L("afterLeave", i, c)).then(
                                    function () {}
                                  )
                                );
                              });
                            });
                          },
                          function (_) {
                            if (l.H(_))
                              throw new ec(
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
                  if (u) return Promise.resolve(Ha(s, i)).then(function () {});
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
        (e.once = function (n, i) {
          try {
            return Promise.resolve(ci.do("once", n, i)).then(function () {
              return i.once ? Pr(i.once, i)(n) : Promise.resolve();
            });
          } catch (r) {
            return Promise.reject(r);
          }
        }),
        (e.leave = function (n, i) {
          try {
            return Promise.resolve(ci.do("leave", n, i)).then(function () {
              return i.leave ? Pr(i.leave, i)(n) : Promise.resolve();
            });
          } catch (r) {
            return Promise.reject(r);
          }
        }),
        (e.enter = function (n, i, r) {
          try {
            return Promise.resolve(ci.do("enter", n, i)).then(function () {
              return i.enter ? Pr(i.enter, i)(n, r) : Promise.resolve();
            });
          } catch (s) {
            return Promise.reject(s);
          }
        }),
        (e.add = function (n, i) {
          try {
            return (
              qi.addContainer(n.next.container, i),
              ci.do("nextAdded", n),
              Promise.resolve()
            );
          } catch (r) {
            return Promise.reject(r);
          }
        }),
        (e.remove = function (n) {
          try {
            return (
              qi.removeContainer(n.current.container),
              ci.do("currentRemoved", n),
              Promise.resolve()
            );
          } catch (i) {
            return Promise.reject(i);
          }
        }),
        (e.H = function (n) {
          return n.message
            ? !/Timeout error|Fetch error/.test(n.message)
            : !n.status;
        }),
        (e.L = function (n, i, r) {
          try {
            return Promise.resolve(ci.do(n, i, r)).then(function () {
              return r[n] ? Pr(r[n], r)(i) : Promise.resolve();
            });
          } catch (s) {
            return Promise.reject(s);
          }
        }),
        Ul(t, [
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
    ly = (function () {
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
            (e.forEach(function (i) {
              n.byNamespace.set(i.namespace, i);
            }),
            this.names.forEach(function (i) {
              ci[i](n._(i));
            }));
      }
      return (
        (t.prototype._ = function (e) {
          var n = this;
          return function (i) {
            var r = e.match(/enter/i) ? i.next : i.current,
              s = n.byNamespace.get(r.namespace);
            return s && s[e] ? Pr(s[e], s)(i) : Promise.resolve();
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
  var cy = {
    container: null,
    html: "",
    namespace: "",
    url: { hash: "", href: "", path: "", port: null, query: {} },
  };
  new ((function () {
    function t() {
      (this.version = "2.10.3"),
        (this.schemaPage = cy),
        (this.Logger = Bi),
        (this.logger = new Bi("@barba/core")),
        (this.plugins = []),
        (this.timeout = void 0),
        (this.cacheIgnore = void 0),
        (this.cacheFirstPage = void 0),
        (this.prefetchIgnore = void 0),
        (this.preventRunning = void 0),
        (this.hooks = ci),
        (this.cache = void 0),
        (this.headers = void 0),
        (this.prevent = void 0),
        (this.transitions = void 0),
        (this.views = void 0),
        (this.dom = qi),
        (this.helpers = V0),
        (this.history = Pd),
        (this.request = X0),
        (this.url = W0),
        (this.D = void 0),
        (this.B = void 0),
        (this.q = void 0),
        (this.F = void 0);
    }
    var e = t.prototype;
    return (
      (e.use = function (n, i) {
        var r = this.plugins;
        r.indexOf(n) > -1
          ? this.logger.warn("Plugin [" + n.name + "] already installed.")
          : typeof n.install == "function"
          ? (n.install(this, i), r.push(n))
          : this.logger.warn(
              "Plugin [" + n.name + '] has no "install" method.'
            );
      }),
      (e.init = function (n) {
        var i = n === void 0 ? {} : n,
          r = i.transitions,
          s = r === void 0 ? [] : r,
          a = i.views,
          o = a === void 0 ? [] : a,
          l = i.schema,
          c = l === void 0 ? Sn : l,
          u = i.requestError,
          f = i.timeout,
          d = f === void 0 ? 2e3 : f,
          h = i.cacheIgnore,
          m = h !== void 0 && h,
          p = i.cacheFirstPage,
          g = p !== void 0 && p,
          y = i.prefetchIgnore,
          v = y !== void 0 && y,
          _ = i.preventRunning,
          x = _ !== void 0 && _,
          S = i.prevent,
          C = S === void 0 ? null : S,
          w = i.debug,
          P = i.logLevel;
        if (
          (Bi.setLevel(
            (w !== void 0 && w) === !0 ? "debug" : P === void 0 ? "off" : P
          ),
          this.logger.info(this.version),
          Object.keys(c).forEach(function (M) {
            Sn[M] && (Sn[M] = c[M]);
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
        var A = this.data.current;
        if (!A.container)
          throw new Error("[@barba/core] No Barba container found");
        if (
          ((this.cache = new G0(m)),
          (this.headers = new j0()),
          (this.prevent = new sy(v)),
          (this.transitions = new oy(s)),
          (this.views = new ly(o)),
          C !== null)
        ) {
          if (typeof C != "function")
            throw new Error("[@barba/core] Prevent should be a function");
          this.prevent.add("preventCustom", C);
        }
        this.history.init(A.url.href, A.namespace),
          g &&
            this.cache.set(
              A.url.href,
              Promise.resolve({ html: A.html, url: A.url }),
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
        var E = this.data;
        (E.trigger = "barba"),
          (E.next = E.current),
          (E.current = xn({}, this.schemaPage)),
          this.hooks.do("ready", E),
          this.once(E),
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
      (e.go = function (n, i, r) {
        var s;
        if (
          (i === void 0 && (i = "barba"),
          (this.F = null),
          this.transitions.isRunning)
        )
          this.force(n);
        else if (
          !(s =
            i === "popstate"
              ? this.history.current &&
                this.url.getPath(this.history.current.url) ===
                  this.url.getPath(n) &&
                this.url.getQuery(this.history.current.url, !0) ===
                  this.url.getQuery(n, !0)
              : this.prevent.run("sameUrl", null, null, n)) ||
          this.transitions.hasSelf
        )
          return (
            (i = this.history.change(
              this.cache.has(n) ? this.cache.get(n).target : n,
              i,
              r
            )),
            r && (r.stopPropagation(), r.preventDefault()),
            this.page(n, i, r != null ? r : void 0, s)
          );
      }),
      (e.once = function (n) {
        try {
          var i = this;
          return Promise.resolve(i.hooks.do("beforeEnter", n)).then(
            function () {
              function r() {
                return Promise.resolve(i.hooks.do("afterEnter", n)).then(
                  function () {}
                );
              }
              var s = (function () {
                if (i.transitions.hasOnce) {
                  var a = i.transitions.get(n, { once: !0 });
                  return Promise.resolve(
                    i.transitions.doOnce({ transition: a, data: n })
                  ).then(function () {});
                }
              })();
              return s && s.then ? s.then(r) : r();
            }
          );
        } catch (r) {
          return Promise.reject(r);
        }
      }),
      (e.page = function (n, i, r, s) {
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
                  Bi.getLevel() === 0 && l.force(f.next.url.href);
                });
                if (d && d.then) return d.then(function () {});
              });
            },
            l = this;
          if (
            ((l.data.next.url = xn({ href: n }, l.url.parse(n))),
            (l.data.trigger = i),
            (l.data.event = r),
            l.cache.has(n))
          )
            a = l.cache.update(n, { action: "click" }).request;
          else {
            var c = l.request(
              n,
              l.timeout,
              l.onRequestError.bind(l, i),
              l.cache,
              l.headers
            );
            c.then(function (f) {
              f.url.href !== n && l.history.add(f.url.href, i, "replace");
            }),
              (a = l.cache.set(n, c, "click", "pending").request);
          }
          var u = (function () {
            if (l.transitions.shouldWait)
              return Promise.resolve(Ha(a, l.data)).then(function () {});
          })();
          return Promise.resolve(u && u.then ? u.then(o) : o());
        } catch (f) {
          return Promise.reject(f);
        }
      }),
      (e.onRequestError = function (n) {
        this.transitions.isRunning = !1;
        var i = [].slice.call(arguments, 1),
          r = i[0],
          s = i[1],
          a = this.cache.getAction(r);
        return (
          this.cache.delete(r),
          (this.B && this.B(n, a, r, s) === !1) ||
            (a === "click" && this.force(r)),
          !1
        );
      }),
      (e.prefetch = function (n) {
        var i = this;
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
              ).catch(function (r) {
                i.logger.error(r);
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
        var i = this,
          r = this.W(n);
        if (r) {
          var s = this.url.getAbsoluteHref(this.dom.getHref(r));
          this.prevent.checkHref(s) ||
            this.cache.has(s) ||
            this.cache.set(
              s,
              this.request(
                s,
                this.timeout,
                this.onRequestError.bind(this, r),
                this.cache,
                this.headers
              ).catch(function (a) {
                i.logger.error(a);
              }),
              "enter",
              "pending"
            );
        }
      }),
      (e.$ = function (n) {
        var i = this.W(n);
        if (i) {
          if (this.transitions.isRunning && this.preventRunning)
            return n.preventDefault(), void n.stopPropagation();
          (this.F = n), this.go(this.dom.getHref(i), i, n);
        }
      }),
      (e.X = function (n) {
        this.go(this.url.getHref(), "popstate", n);
      }),
      (e.W = function (n) {
        for (var i = n.target; i && !this.dom.getHref(i); ) i = i.parentNode;
        if (i && !this.prevent.checkLink(i, n, this.dom.getHref(i))) return i;
      }),
      (e.I = function () {
        var n = this.url.getHref(),
          i = {
            container: this.dom.getContainer(),
            html: this.dom.getHtml(),
            namespace: this.dom.getNamespace(),
            url: xn({ href: n }, this.url.parse(n)),
          };
        (this.D = {
          current: i,
          event: void 0,
          next: xn({}, this.schemaPage),
          trigger: void 0,
        }),
          this.hooks.do("reset", this.data);
      }),
      Ul(t, [
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
    R.registerPlugin(U),
    document.addEventListener("DOMContentLoaded", () => {
      window.addEventListener("load", () => {
        window.scrollTo(0, 0);
        const t = ys();
        t && t.scrollTo(0, { immediate: !0 });
      }),
        R0(),
        P0(),
        Vf();
    });
});
