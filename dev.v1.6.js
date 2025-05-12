var yv = Object.defineProperty;
var uf = Object.getOwnPropertySymbols;
var _v = Object.prototype.hasOwnProperty,
  bv = Object.prototype.propertyIsEnumerable;
var wt = Math.pow,
  Jo = (Ue, ze, ie) =>
    ze in Ue
      ? yv(Ue, ze, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ie,
        })
      : (Ue[ze] = ie),
  ff = (Ue, ze) => {
    for (var ie in ze || (ze = {})) _v.call(ze, ie) && Jo(Ue, ie, ze[ie]);
    if (uf) for (var ie of uf(ze)) bv.call(ze, ie) && Jo(Ue, ie, ze[ie]);
    return Ue;
  };
var B = (Ue, ze, ie) => Jo(Ue, typeof ze != "symbol" ? ze + "" : ze, ie);
var el = (Ue, ze, ie) =>
  new Promise((cs, nn) => {
    var us = (Ht) => {
        try {
          Dr(ie.next(Ht));
        } catch (pi) {
          nn(pi);
        }
      },
      ha = (Ht) => {
        try {
          Dr(ie.throw(Ht));
        } catch (pi) {
          nn(pi);
        }
      },
      Dr = (Ht) =>
        Ht.done ? cs(Ht.value) : Promise.resolve(Ht.value).then(us, ha);
    Dr((ie = ie.apply(Ue, ze)).next());
  });
(function (Ue) {
  typeof define == "function" && define.amd ? define(Ue) : Ue();
})(function () {
  "use strict";
  /*! @vimeo/player v2.26.0 | (c) 2025 Vimeo | MIT License | https://github.com/vimeo/player.js */ function Ue(
    e,
    t
  ) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function ze(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Ue(Object(n), !0).forEach(function (r) {
            Ht(e, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ue(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return e;
  }
  function ie() {
    ie = function () {
      return e;
    };
    var e = {},
      t = Object.prototype,
      n = t.hasOwnProperty,
      r =
        Object.defineProperty ||
        function (b, T, O) {
          b[T] = O.value;
        },
      i = typeof Symbol == "function" ? Symbol : {},
      s = i.iterator || "@@iterator",
      a = i.asyncIterator || "@@asyncIterator",
      o = i.toStringTag || "@@toStringTag";
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
      l = function (T, O, D) {
        return (T[O] = D);
      };
    }
    function c(b, T, O, D) {
      var k = T && T.prototype instanceof d ? T : d,
        L = Object.create(k.prototype),
        I = new A(D || []);
      return r(L, "_invoke", { value: S(b, O, I) }), L;
    }
    function u(b, T, O) {
      try {
        return { type: "normal", arg: b.call(T, O) };
      } catch (D) {
        return { type: "throw", arg: D };
      }
    }
    e.wrap = c;
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
    y && y !== t && n.call(y, s) && (p = y);
    var v = (m.prototype = d.prototype = Object.create(p));
    function _(b) {
      ["next", "throw", "return"].forEach(function (T) {
        l(b, T, function (O) {
          return this._invoke(T, O);
        });
      });
    }
    function x(b, T) {
      function O(k, L, I, R) {
        var M = u(b[k], b, L);
        if (M.type !== "throw") {
          var V = M.arg,
            K = V.value;
          return K && typeof K == "object" && n.call(K, "__await")
            ? T.resolve(K.__await).then(
                function (se) {
                  O("next", se, I, R);
                },
                function (se) {
                  O("throw", se, I, R);
                }
              )
            : T.resolve(K).then(
                function (se) {
                  (V.value = se), I(V);
                },
                function (se) {
                  return O("throw", se, I, R);
                }
              );
        }
        R(M.arg);
      }
      var D;
      r(this, "_invoke", {
        value: function (k, L) {
          function I() {
            return new T(function (R, M) {
              O(k, L, R, M);
            });
          }
          return (D = D ? D.then(I, I) : I());
        },
      });
    }
    function S(b, T, O) {
      var D = "suspendedStart";
      return function (k, L) {
        if (D === "executing") throw new Error("Generator is already running");
        if (D === "completed") {
          if (k === "throw") throw L;
          return $();
        }
        for (O.method = k, O.arg = L; ; ) {
          var I = O.delegate;
          if (I) {
            var R = C(I, O);
            if (R) {
              if (R === f) continue;
              return R;
            }
          }
          if (O.method === "next") O.sent = O._sent = O.arg;
          else if (O.method === "throw") {
            if (D === "suspendedStart") throw ((D = "completed"), O.arg);
            O.dispatchException(O.arg);
          } else O.method === "return" && O.abrupt("return", O.arg);
          D = "executing";
          var M = u(b, T, O);
          if (M.type === "normal") {
            if (((D = O.done ? "completed" : "suspendedYield"), M.arg === f))
              continue;
            return { value: M.arg, done: O.done };
          }
          M.type === "throw" &&
            ((D = "completed"), (O.method = "throw"), (O.arg = M.arg));
        }
      };
    }
    function C(b, T) {
      var O = T.method,
        D = b.iterator[O];
      if (D === void 0)
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
      var k = u(D, b.iterator, T.arg);
      if (k.type === "throw")
        return (T.method = "throw"), (T.arg = k.arg), (T.delegate = null), f;
      var L = k.arg;
      return L
        ? L.done
          ? ((T[b.resultName] = L.value),
            (T.next = b.nextLoc),
            T.method !== "return" && ((T.method = "next"), (T.arg = void 0)),
            (T.delegate = null),
            f)
          : L
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
            D = function k() {
              for (; ++O < b.length; )
                if (n.call(b, O)) return (k.value = b[O]), (k.done = !1), k;
              return (k.value = void 0), (k.done = !0), k;
            };
          return (D.next = D);
        }
      }
      return { next: $ };
    }
    function $() {
      return { value: void 0, done: !0 };
    }
    return (
      (h.prototype = m),
      r(v, "constructor", { value: m, configurable: !0 }),
      r(m, "constructor", { value: h, configurable: !0 }),
      (h.displayName = l(m, o, "GeneratorFunction")),
      (e.isGeneratorFunction = function (b) {
        var T = typeof b == "function" && b.constructor;
        return (
          !!T && (T === h || (T.displayName || T.name) === "GeneratorFunction")
        );
      }),
      (e.mark = function (b) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(b, m)
            : ((b.__proto__ = m), l(b, o, "GeneratorFunction")),
          (b.prototype = Object.create(v)),
          b
        );
      }),
      (e.awrap = function (b) {
        return { __await: b };
      }),
      _(x.prototype),
      l(x.prototype, a, function () {
        return this;
      }),
      (e.AsyncIterator = x),
      (e.async = function (b, T, O, D, k) {
        k === void 0 && (k = Promise);
        var L = new x(c(b, T, O, D), k);
        return e.isGeneratorFunction(T)
          ? L
          : L.next().then(function (I) {
              return I.done ? I.value : L.next();
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
      (e.keys = function (b) {
        var T = Object(b),
          O = [];
        for (var D in T) O.push(D);
        return (
          O.reverse(),
          function k() {
            for (; O.length; ) {
              var L = O.pop();
              if (L in T) return (k.value = L), (k.done = !1), k;
            }
            return (k.done = !0), k;
          }
        );
      }),
      (e.values = E),
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
          function O(M, V) {
            return (
              (L.type = "throw"),
              (L.arg = b),
              (T.next = M),
              V && ((T.method = "next"), (T.arg = void 0)),
              !!V
            );
          }
          for (var D = this.tryEntries.length - 1; D >= 0; --D) {
            var k = this.tryEntries[D],
              L = k.completion;
            if (k.tryLoc === "root") return O("end");
            if (k.tryLoc <= this.prev) {
              var I = n.call(k, "catchLoc"),
                R = n.call(k, "finallyLoc");
              if (I && R) {
                if (this.prev < k.catchLoc) return O(k.catchLoc, !0);
                if (this.prev < k.finallyLoc) return O(k.finallyLoc);
              } else if (I) {
                if (this.prev < k.catchLoc) return O(k.catchLoc, !0);
              } else {
                if (!R)
                  throw new Error("try statement without catch or finally");
                if (this.prev < k.finallyLoc) return O(k.finallyLoc);
              }
            }
          }
        },
        abrupt: function (b, T) {
          for (var O = this.tryEntries.length - 1; O >= 0; --O) {
            var D = this.tryEntries[O];
            if (
              D.tryLoc <= this.prev &&
              n.call(D, "finallyLoc") &&
              this.prev < D.finallyLoc
            ) {
              var k = D;
              break;
            }
          }
          k &&
            (b === "break" || b === "continue") &&
            k.tryLoc <= T &&
            T <= k.finallyLoc &&
            (k = null);
          var L = k ? k.completion : {};
          return (
            (L.type = b),
            (L.arg = T),
            k
              ? ((this.method = "next"), (this.next = k.finallyLoc), f)
              : this.complete(L)
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
              var D = O.completion;
              if (D.type === "throw") {
                var k = D.arg;
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
      e
    );
  }
  function cs(e, t, n, r, i, s, a) {
    try {
      var o = e[s](a),
        l = o.value;
    } catch (c) {
      n(c);
      return;
    }
    o.done ? t(l) : Promise.resolve(l).then(r, i);
  }
  function nn(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, i) {
        var s = e.apply(t, n);
        function a(l) {
          cs(s, r, i, a, o, "next", l);
        }
        function o(l) {
          cs(s, r, i, a, o, "throw", l);
        }
        a(void 0);
      });
    };
  }
  function us(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function ha(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, nl(r.key), r);
    }
  }
  function Dr(e, t, n) {
    return (
      t && ha(e.prototype, t),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function Ht(e, t, n) {
    return (
      (t = nl(t)),
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function pi(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      t && gi(e, t);
  }
  function mi(e) {
    return (
      (mi = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (n) {
            return n.__proto__ || Object.getPrototypeOf(n);
          }),
      mi(e)
    );
  }
  function gi(e, t) {
    return (
      (gi = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (r, i) {
            return (r.__proto__ = i), r;
          }),
      gi(e, t)
    );
  }
  function tl() {
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
    } catch (e) {
      return !1;
    }
  }
  function fs(e, t, n) {
    return (
      tl()
        ? (fs = Reflect.construct.bind())
        : (fs = function (i, s, a) {
            var o = [null];
            o.push.apply(o, s);
            var l = Function.bind.apply(i, o),
              c = new l();
            return a && gi(c, a.prototype), c;
          }),
      fs.apply(null, arguments)
    );
  }
  function hf(e) {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  }
  function pa(e) {
    var t = typeof Map == "function" ? new Map() : void 0;
    return (
      (pa = function (r) {
        if (r === null || !hf(r)) return r;
        if (typeof r != "function")
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (typeof t != "undefined") {
          if (t.has(r)) return t.get(r);
          t.set(r, i);
        }
        function i() {
          return fs(r, arguments, mi(this).constructor);
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
          gi(i, r)
        );
      }),
      pa(e)
    );
  }
  function ds(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function pf(e, t) {
    if (t && (typeof t == "object" || typeof t == "function")) return t;
    if (t !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return ds(e);
  }
  function mf(e) {
    var t = tl();
    return function () {
      var r = mi(e),
        i;
      if (t) {
        var s = mi(this).constructor;
        i = Reflect.construct(r, arguments, s);
      } else i = r.apply(this, arguments);
      return pf(this, i);
    };
  }
  function gf(e, t) {
    if (typeof e != "object" || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var r = n.call(e, t);
      if (typeof r != "object") return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e);
  }
  function nl(e) {
    var t = gf(e, "string");
    return typeof t == "symbol" ? t : String(t);
  }
  var rl =
    typeof global != "undefined" &&
    {}.toString.call(global) === "[object global]";
  function il(e, t) {
    return e.indexOf(t.toLowerCase()) === 0
      ? e
      : ""
          .concat(t.toLowerCase())
          .concat(e.substr(0, 1).toUpperCase())
          .concat(e.substr(1));
  }
  function vf(e) {
    return !!(
      e &&
      e.nodeType === 1 &&
      "nodeName" in e &&
      e.ownerDocument &&
      e.ownerDocument.defaultView
    );
  }
  function yf(e) {
    return !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e;
  }
  function rr(e) {
    return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(
      e
    );
  }
  function sl(e) {
    var t =
      /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
    return t.test(e);
  }
  function _f(e) {
    for (
      var t = (e || "").match(/^(?:https?:)?(?:\/\/)?([^/?]+)/),
        n = ((t && t[1]) || "").replace("player.", ""),
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
  function al() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.id,
      n = e.url,
      r = t || n;
    if (!r)
      throw new Error(
        "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
      );
    if (yf(r)) return "https://vimeo.com/".concat(r);
    if (rr(r)) return r.replace("http:", "https:");
    throw t
      ? new TypeError("“".concat(t, "” is not a valid video id."))
      : new TypeError("“".concat(r, "” is not a vimeo.com url."));
  }
  var ol = function (t, n, r) {
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
          t[i](o, r);
        }),
        {
          cancel: function () {
            return a.forEach(function (l) {
              return t[s](l, r);
            });
          },
        }
      );
    },
    bf = typeof Array.prototype.indexOf != "undefined",
    xf =
      typeof window != "undefined" && typeof window.postMessage != "undefined";
  if (!rl && (!bf || !xf))
    throw new Error(
      "Sorry, the Vimeo Player API is not available in this browser."
    );
  var Ir =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {};
  function Sf(e, t) {
    return (t = { exports: {} }), e(t, t.exports), t.exports;
  }
  /*!
   * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
   * https://github.com/polygonplanet/weakmap-polyfill
   * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
   * @license MIT
   */ (function (e) {
    if (e.WeakMap) return;
    var t = Object.prototype.hasOwnProperty,
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
    e.WeakMap = (function () {
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
        if (!i(c) || !t.call(c, "_id"))
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
      : Ir
  );
  var qt = Sf(function (e) {
      /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/ (function (n, r, i) {
        (r[n] = r[n] || i()), e.exports && (e.exports = r[n]);
      })("Promise", Ir, function () {
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
        i = (function () {
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
    yn = new WeakMap();
  function vi(e, t, n) {
    var r = yn.get(e.element) || {};
    t in r || (r[t] = []), r[t].push(n), yn.set(e.element, r);
  }
  function hs(e, t) {
    var n = yn.get(e.element) || {};
    return n[t] || [];
  }
  function ps(e, t, n) {
    var r = yn.get(e.element) || {};
    if (!r[t]) return !0;
    if (!n) return (r[t] = []), yn.set(e.element, r), !0;
    var i = r[t].indexOf(n);
    return (
      i !== -1 && r[t].splice(i, 1),
      yn.set(e.element, r),
      r[t] && r[t].length === 0
    );
  }
  function Tf(e, t) {
    var n = hs(e, t);
    if (n.length < 1) return !1;
    var r = n.shift();
    return ps(e, t, r), r;
  }
  function Ef(e, t) {
    var n = yn.get(e);
    yn.set(t, n), yn.delete(e);
  }
  function ms(e) {
    if (typeof e == "string")
      try {
        e = JSON.parse(e);
      } catch (t) {
        return console.warn(t), {};
      }
    return e;
  }
  function ir(e, t, n) {
    if (!(!e.element.contentWindow || !e.element.contentWindow.postMessage)) {
      var r = { method: t };
      n !== void 0 && (r.value = n);
      var i = parseFloat(
        navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1")
      );
      i >= 8 && i < 10 && (r = JSON.stringify(r)),
        e.element.contentWindow.postMessage(r, e.origin);
    }
  }
  function wf(e, t) {
    t = ms(t);
    var n = [],
      r;
    if (t.event) {
      if (t.event === "error") {
        var i = hs(e, t.data.method);
        i.forEach(function (a) {
          var o = new Error(t.data.message);
          (o.name = t.data.name), a.reject(o), ps(e, t.data.method, a);
        });
      }
      (n = hs(e, "event:".concat(t.event))), (r = t.data);
    } else if (t.method) {
      var s = Tf(e, t.method);
      s && (n.push(s), (r = t.value));
    }
    n.forEach(function (a) {
      try {
        if (typeof a == "function") {
          a.call(e, r);
          return;
        }
        a.resolve(r);
      } catch (o) {}
    });
  }
  var Cf = [
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
  function ll(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Cf.reduce(function (n, r) {
      var i = e.getAttribute("data-vimeo-".concat(r));
      return (i || i === "") && (n[r] = i === "" ? 1 : i), n;
    }, t);
  }
  function ma(e, t) {
    var n = e.html;
    if (!t) throw new TypeError("An element must be provided");
    if (t.getAttribute("data-vimeo-initialized") !== null)
      return t.querySelector("iframe");
    var r = document.createElement("div");
    return (
      (r.innerHTML = n),
      t.appendChild(r.firstChild),
      t.setAttribute("data-vimeo-initialized", "true"),
      t.querySelector("iframe")
    );
  }
  function cl(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = arguments.length > 2 ? arguments[2] : void 0;
    return new Promise(function (r, i) {
      if (!rr(e))
        throw new TypeError("“".concat(e, "” is not a vimeo.com url."));
      var s = _f(e),
        a = "https://"
          .concat(s, "/api/oembed.json?url=")
          .concat(encodeURIComponent(e));
      for (var o in t)
        t.hasOwnProperty(o) &&
          (a += "&".concat(o, "=").concat(encodeURIComponent(t[o])));
      var l =
        "XDomainRequest" in window
          ? new XDomainRequest()
          : new XMLHttpRequest();
      l.open("GET", a, !0),
        (l.onload = function () {
          if (l.status === 404) {
            i(new Error("“".concat(e, "” was not found.")));
            return;
          }
          if (l.status === 403) {
            i(new Error("“".concat(e, "” is not embeddable.")));
            return;
          }
          try {
            var c = JSON.parse(l.responseText);
            if (c.domain_status_code === 403) {
              ma(c, n), i(new Error("“".concat(e, "” is not embeddable.")));
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
  function Pf() {
    var e =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : document,
      t = [].slice.call(
        e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")
      ),
      n = function (i) {
        "console" in window &&
          console.error &&
          console.error("There was an error creating an embed: ".concat(i));
      };
    t.forEach(function (r) {
      try {
        if (r.getAttribute("data-vimeo-defer") !== null) return;
        var i = ll(r),
          s = al(i);
        cl(s, i, r)
          .then(function (a) {
            return ma(a, r);
          })
          .catch(n);
      } catch (a) {
        n(a);
      }
    });
  }
  function kf() {
    var e =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoPlayerResizeEmbeds_) {
      window.VimeoPlayerResizeEmbeds_ = !0;
      var t = function (r) {
        if (rr(r.origin) && !(!r.data || r.data.event !== "spacechange")) {
          for (var i = e.querySelectorAll("iframe"), s = 0; s < i.length; s++)
            if (i[s].contentWindow === r.source) {
              var a = i[s].parentElement;
              a.style.paddingBottom = "".concat(r.data.data[0].bottom, "px");
              break;
            }
        }
      };
      window.addEventListener("message", t);
    }
  }
  function Mf() {
    var e =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoSeoMetadataAppended) {
      window.VimeoSeoMetadataAppended = !0;
      var t = function (r) {
        if (rr(r.origin)) {
          var i = ms(r.data);
          if (!(!i || i.event !== "ready"))
            for (
              var s = e.querySelectorAll("iframe"), a = 0;
              a < s.length;
              a++
            ) {
              var o = s[a],
                l = o.contentWindow === r.source;
              if (sl(o.src) && l) {
                var c = new gs(o);
                c.callMethod("appendVideoMetadata", window.location.href);
              }
            }
        }
      };
      window.addEventListener("message", t);
    }
  }
  function $f() {
    var e =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoCheckedUrlTimeParam) {
      window.VimeoCheckedUrlTimeParam = !0;
      var t = function (i) {
          "console" in window &&
            console.error &&
            console.error("There was an error getting video Id: ".concat(i));
        },
        n = function (i) {
          if (rr(i.origin)) {
            var s = ms(i.data);
            if (!(!s || s.event !== "ready"))
              for (
                var a = e.querySelectorAll("iframe"),
                  o = function () {
                    var u = a[l],
                      f = u.contentWindow === i.source;
                    if (sl(u.src) && f) {
                      var d = new gs(u);
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
                        .catch(t);
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
  function Of() {
    var e = (function () {
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
      t = {
        fullscreenchange: e.fullscreenchange,
        fullscreenerror: e.fullscreenerror,
      },
      n = {
        request: function (i) {
          return new Promise(function (s, a) {
            var o = function c() {
              n.off("fullscreenchange", c), s();
            };
            n.on("fullscreenchange", o), (i = i || document.documentElement);
            var l = i[e.requestFullscreen]();
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
            var o = document[e.exitFullscreen]();
            o instanceof Promise && o.then(a).catch(s);
          });
        },
        on: function (i, s) {
          var a = t[i];
          a && document.addEventListener(a, s);
        },
        off: function (i, s) {
          var a = t[i];
          a && document.removeEventListener(a, s);
        },
      };
    return (
      Object.defineProperties(n, {
        isFullscreen: {
          get: function () {
            return !!document[e.fullscreenElement];
          },
        },
        element: {
          enumerable: !0,
          get: function () {
            return document[e.fullscreenElement];
          },
        },
        isEnabled: {
          enumerable: !0,
          get: function () {
            return !!document[e.fullscreenEnabled];
          },
        },
      }),
      n
    );
  }
  var Af = {
      role: "viewer",
      autoPlayMuted: !0,
      allowedDrift: 0.3,
      maxAllowedDrift: 1,
      minCheckInterval: 0.1,
      maxRateAdjustment: 0.2,
      maxTimeToCatchUp: 1,
    },
    Lf = (function (e) {
      pi(n, e);
      var t = mf(n);
      function n(r, i) {
        var s,
          a =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          o = arguments.length > 3 ? arguments[3] : void 0;
        return (
          us(this, n),
          (s = t.call(this)),
          Ht(ds(s), "logger", void 0),
          Ht(ds(s), "speedAdjustment", 0),
          Ht(
            ds(s),
            "adjustSpeed",
            (function () {
              var l = nn(
                ie().mark(function c(u, f) {
                  var d;
                  return ie().wrap(function (m) {
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
          s.init(i, r, ze(ze({}, Af), a)),
          s
        );
      }
      return (
        Dr(n, [
          {
            key: "disconnect",
            value: function () {
              this.dispatchEvent(new Event("disconnect"));
            },
          },
          {
            key: "init",
            value: (function () {
              var r = nn(
                ie().mark(function s(a, o, l) {
                  var c = this,
                    u,
                    f,
                    d;
                  return ie().wrap(
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
                            (u = ol(a, "change", function () {
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
                            (d = ol(
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
              var r = nn(
                ie().mark(function s(a, o) {
                  return ie().wrap(function (c) {
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
              var r = nn(
                ie().mark(function s(a, o, l) {
                  var c, u, f;
                  return ie().wrap(
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
                                  var m = nn(
                                    ie().mark(function p(g) {
                                      return ie().wrap(function (v) {
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
                  var g = nn(
                    ie().mark(function y() {
                      var v, _, x, S, C;
                      return ie().wrap(function (P) {
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
    })(pa(EventTarget)),
    zr = new WeakMap(),
    ga = new WeakMap(),
    yt = {},
    gs = (function () {
      function e(t) {
        var n = this,
          r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (
          (us(this, e),
          window.jQuery &&
            t instanceof jQuery &&
            (t.length > 1 &&
              window.console &&
              console.warn &&
              console.warn(
                "A jQuery object with multiple elements was passed, using the first element."
              ),
            (t = t[0])),
          typeof document != "undefined" &&
            typeof t == "string" &&
            (t = document.getElementById(t)),
          !vf(t))
        )
          throw new TypeError(
            "You must pass either a valid element or a valid id."
          );
        if (t.nodeName !== "IFRAME") {
          var i = t.querySelector("iframe");
          i && (t = i);
        }
        if (t.nodeName === "IFRAME" && !rr(t.getAttribute("src") || ""))
          throw new Error("The player element passed isn’t a Vimeo embed.");
        if (zr.has(t)) return zr.get(t);
        (this._window = t.ownerDocument.defaultView),
          (this.element = t),
          (this.origin = "*");
        var s = new qt(function (o, l) {
          if (
            ((n._onMessage = function (f) {
              if (!(!rr(f.origin) || n.element.contentWindow !== f.source)) {
                n.origin === "*" && (n.origin = f.origin);
                var d = ms(f.data),
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
                wf(n, d);
              }
            }),
            n._window.addEventListener("message", n._onMessage),
            n.element.nodeName !== "IFRAME")
          ) {
            var c = ll(t, r),
              u = al(c);
            cl(u, c, t)
              .then(function (f) {
                var d = ma(f, t);
                return (
                  (n.element = d),
                  (n._originalElement = t),
                  Ef(t, d),
                  zr.set(n.element, n),
                  f
                );
              })
              .catch(l);
          }
        });
        if (
          (ga.set(this, s),
          zr.set(this.element, this),
          this.element.nodeName === "IFRAME" && ir(this, "ping"),
          yt.isEnabled)
        ) {
          var a = function () {
            return yt.exit();
          };
          (this.fullscreenchangeHandler = function () {
            yt.isFullscreen
              ? vi(n, "event:exitFullscreen", a)
              : ps(n, "event:exitFullscreen", a),
              n.ready().then(function () {
                ir(n, "fullscreenchange", yt.isFullscreen);
              });
          }),
            yt.on("fullscreenchange", this.fullscreenchangeHandler);
        }
        return this;
      }
      return (
        Dr(e, [
          {
            key: "callMethod",
            value: function (n) {
              var r = this,
                i =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
              return new qt(function (s, a) {
                return r
                  .ready()
                  .then(function () {
                    vi(r, n, { resolve: s, reject: a }), ir(r, n, i);
                  })
                  .catch(a);
              });
            },
          },
          {
            key: "get",
            value: function (n) {
              var r = this;
              return new qt(function (i, s) {
                return (
                  (n = il(n, "get")),
                  r
                    .ready()
                    .then(function () {
                      vi(r, n, { resolve: i, reject: s }), ir(r, n);
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
              return new qt(function (s, a) {
                if (((n = il(n, "set")), r == null))
                  throw new TypeError("There must be a value to set.");
                return i
                  .ready()
                  .then(function () {
                    vi(i, n, { resolve: s, reject: a }), ir(i, n, r);
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
              var i = hs(this, "event:".concat(n));
              i.length === 0 &&
                this.callMethod("addEventListener", n).catch(function () {}),
                vi(this, "event:".concat(n), r);
            },
          },
          {
            key: "off",
            value: function (n, r) {
              if (!n) throw new TypeError("You must pass an event name.");
              if (r && typeof r != "function")
                throw new TypeError("The callback must be a function.");
              var i = ps(this, "event:".concat(n), r);
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
                ga.get(this) ||
                new qt(function (r, i) {
                  i(new Error("Unknown player. Probably unloaded."));
                });
              return qt.resolve(n);
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
              return yt.isEnabled
                ? yt.request(this.element)
                : this.callMethod("requestFullscreen");
            },
          },
          {
            key: "exitFullscreen",
            value: function () {
              return yt.isEnabled
                ? yt.exit()
                : this.callMethod("exitFullscreen");
            },
          },
          {
            key: "getFullscreen",
            value: function () {
              return yt.isEnabled
                ? qt.resolve(yt.isFullscreen)
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
              return new qt(function (r) {
                if (
                  (ga.delete(n),
                  zr.delete(n.element),
                  n._originalElement &&
                    (zr.delete(n._originalElement),
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
                  yt.isEnabled &&
                    yt.off("fullscreenchange", n.fullscreenchangeHandler),
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
              return qt.all([
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
                return new qt(function (s, a) {
                  return a(new TypeError("Argument must be an array."));
                });
              var r = new qt(function (s) {
                  return s(null);
                }),
                i = [
                  n[0] ? this.set("colorOne", n[0]) : r,
                  n[1] ? this.set("colorTwo", n[1]) : r,
                  n[2] ? this.set("colorThree", n[2]) : r,
                  n[3] ? this.set("colorFour", n[3]) : r,
                ];
              return qt.all(i);
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
              var t = nn(
                ie().mark(function r(i, s) {
                  var a = this,
                    o;
                  return ie().wrap(
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
                              (o = new Lf(this, i, s)),
                              ir(this, "notifyTimingObjectConnect"),
                              o.addEventListener("disconnect", function () {
                                return ir(a, "notifyTimingObjectDisconnect");
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
                return t.apply(this, arguments);
              }
              return n;
            })(),
          },
        ]),
        e
      );
    })();
  rl || ((yt = Of()), Pf(), kf(), Mf(), $f());
  class Df {
    constructor() {
      typeof gs != "undefined"
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
          let v = function (E) {
              let $ = Math.floor(E / 3600);
              E -= $ * 3600;
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
            c = new gs(s);
          if (
            (n.getAttribute("data-vimeo-update-size") === "true" &&
              c.getVideoWidth().then(function (E) {
                c.getVideoHeight().then(function ($) {
                  const b = n.querySelector(".vimeo-player__before");
                  b && (b.style.paddingTop = ($ / E) * 100 + "%");
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
              const $ = n.getBoundingClientRect();
              $.top < window.innerHeight && $.bottom > 0 ? u() : f();
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
        } catch (i) {
          console.error("Error initializing Vimeo player:", i);
        }
      });
    }
  }
  const If = () => {
    new Df();
  };
  function ul(e) {
    return (
      e !== null &&
      typeof e == "object" &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function va(e = {}, t = {}) {
    Object.keys(t).forEach((n) => {
      typeof e[n] == "undefined"
        ? (e[n] = t[n])
        : ul(t[n]) &&
          ul(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          va(e[n], t[n]);
    });
  }
  const fl = {
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
  function Me() {
    const e = typeof document != "undefined" ? document : {};
    return va(e, fl), e;
  }
  const zf = {
    document: fl,
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
    requestAnimationFrame(e) {
      return typeof setTimeout == "undefined" ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame(e) {
      typeof setTimeout != "undefined" && clearTimeout(e);
    },
  };
  function ce() {
    const e = typeof window != "undefined" ? window : {};
    return va(e, zf), e;
  }
  function Rf(e) {
    const t = e.__proto__;
    Object.defineProperty(e, "__proto__", {
      get() {
        return t;
      },
      set(n) {
        t.__proto__ = n;
      },
    });
  }
  class Ln extends Array {
    constructor(t) {
      typeof t == "number" ? super(t) : (super(...(t || [])), Rf(this));
    }
  }
  function yi(e = []) {
    const t = [];
    return (
      e.forEach((n) => {
        Array.isArray(n) ? t.push(...yi(n)) : t.push(n);
      }),
      t
    );
  }
  function dl(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function Nf(e) {
    const t = [];
    for (let n = 0; n < e.length; n += 1)
      t.indexOf(e[n]) === -1 && t.push(e[n]);
    return t;
  }
  function Ff(e, t) {
    if (typeof e != "string") return [e];
    const n = [],
      r = t.querySelectorAll(e);
    for (let i = 0; i < r.length; i += 1) n.push(r[i]);
    return n;
  }
  function N(e, t) {
    const n = ce(),
      r = Me();
    let i = [];
    if (!t && e instanceof Ln) return e;
    if (!e) return new Ln(i);
    if (typeof e == "string") {
      const s = e.trim();
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
      } else i = Ff(e.trim(), t || r);
    } else if (e.nodeType || e === n || e === r) i.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof Ln) return e;
      i = e;
    }
    return new Ln(Nf(i));
  }
  N.fn = Ln.prototype;
  function Hf(...e) {
    const t = yi(e.map((n) => n.split(" ")));
    return (
      this.forEach((n) => {
        n.classList.add(...t);
      }),
      this
    );
  }
  function qf(...e) {
    const t = yi(e.map((n) => n.split(" ")));
    return (
      this.forEach((n) => {
        n.classList.remove(...t);
      }),
      this
    );
  }
  function Bf(...e) {
    const t = yi(e.map((n) => n.split(" ")));
    this.forEach((n) => {
      t.forEach((r) => {
        n.classList.toggle(r);
      });
    });
  }
  function Vf(...e) {
    const t = yi(e.map((n) => n.split(" ")));
    return (
      dl(this, (n) => t.filter((r) => n.classList.contains(r)).length > 0)
        .length > 0
    );
  }
  function Wf(e, t) {
    if (arguments.length === 1 && typeof e == "string")
      return this[0] ? this[0].getAttribute(e) : void 0;
    for (let n = 0; n < this.length; n += 1)
      if (arguments.length === 2) this[n].setAttribute(e, t);
      else
        for (const r in e) (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
    return this;
  }
  function Yf(e) {
    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
    return this;
  }
  function Xf(e) {
    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
    return this;
  }
  function Gf(e) {
    for (let t = 0; t < this.length; t += 1)
      this[t].style.transitionDuration = typeof e != "string" ? `${e}ms` : e;
    return this;
  }
  function jf(...e) {
    let [t, n, r, i] = e;
    typeof e[1] == "function" && (([t, r, i] = e), (n = void 0)), i || (i = !1);
    function s(c) {
      const u = c.target;
      if (!u) return;
      const f = c.target.dom7EventData || [];
      if ((f.indexOf(c) < 0 && f.unshift(c), N(u).is(n))) r.apply(u, f);
      else {
        const d = N(u).parents();
        for (let h = 0; h < d.length; h += 1) N(d[h]).is(n) && r.apply(d[h], f);
      }
    }
    function a(c) {
      const u = c && c.target ? c.target.dom7EventData || [] : [];
      u.indexOf(c) < 0 && u.unshift(c), r.apply(this, u);
    }
    const o = t.split(" ");
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
  function Uf(...e) {
    let [t, n, r, i] = e;
    typeof e[1] == "function" && (([t, r, i] = e), (n = void 0)), i || (i = !1);
    const s = t.split(" ");
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
  function Kf(...e) {
    const t = ce(),
      n = e[0].split(" "),
      r = e[1];
    for (let i = 0; i < n.length; i += 1) {
      const s = n[i];
      for (let a = 0; a < this.length; a += 1) {
        const o = this[a];
        if (t.CustomEvent) {
          const l = new t.CustomEvent(s, {
            detail: r,
            bubbles: !0,
            cancelable: !0,
          });
          (o.dom7EventData = e.filter((c, u) => u > 0)),
            o.dispatchEvent(l),
            (o.dom7EventData = []),
            delete o.dom7EventData;
        }
      }
    }
    return this;
  }
  function Qf(e) {
    const t = this;
    function n(r) {
      r.target === this && (e.call(this, r), t.off("transitionend", n));
    }
    return e && t.on("transitionend", n), this;
  }
  function Zf(e) {
    if (this.length > 0) {
      if (e) {
        const t = this.styles();
        return (
          this[0].offsetWidth +
          parseFloat(t.getPropertyValue("margin-right")) +
          parseFloat(t.getPropertyValue("margin-left"))
        );
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function Jf(e) {
    if (this.length > 0) {
      if (e) {
        const t = this.styles();
        return (
          this[0].offsetHeight +
          parseFloat(t.getPropertyValue("margin-top")) +
          parseFloat(t.getPropertyValue("margin-bottom"))
        );
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function ed() {
    if (this.length > 0) {
      const e = ce(),
        t = Me(),
        n = this[0],
        r = n.getBoundingClientRect(),
        i = t.body,
        s = n.clientTop || i.clientTop || 0,
        a = n.clientLeft || i.clientLeft || 0,
        o = n === e ? e.scrollY : n.scrollTop,
        l = n === e ? e.scrollX : n.scrollLeft;
      return { top: r.top + o - s, left: r.left + l - a };
    }
    return null;
  }
  function td() {
    const e = ce();
    return this[0] ? e.getComputedStyle(this[0], null) : {};
  }
  function nd(e, t) {
    const n = ce();
    let r;
    if (arguments.length === 1)
      if (typeof e == "string") {
        if (this[0])
          return n.getComputedStyle(this[0], null).getPropertyValue(e);
      } else {
        for (r = 0; r < this.length; r += 1)
          for (const i in e) this[r].style[i] = e[i];
        return this;
      }
    if (arguments.length === 2 && typeof e == "string") {
      for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
      return this;
    }
    return this;
  }
  function rd(e) {
    return e
      ? (this.forEach((t, n) => {
          e.apply(t, [t, n]);
        }),
        this)
      : this;
  }
  function id(e) {
    const t = dl(this, e);
    return N(t);
  }
  function sd(e) {
    if (typeof e == "undefined") return this[0] ? this[0].innerHTML : null;
    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
    return this;
  }
  function ad(e) {
    if (typeof e == "undefined")
      return this[0] ? this[0].textContent.trim() : null;
    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
    return this;
  }
  function od(e) {
    const t = ce(),
      n = Me(),
      r = this[0];
    let i, s;
    if (!r || typeof e == "undefined") return !1;
    if (typeof e == "string") {
      if (r.matches) return r.matches(e);
      if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
      if (r.msMatchesSelector) return r.msMatchesSelector(e);
      for (i = N(e), s = 0; s < i.length; s += 1) if (i[s] === r) return !0;
      return !1;
    }
    if (e === n) return r === n;
    if (e === t) return r === t;
    if (e.nodeType || e instanceof Ln) {
      for (i = e.nodeType ? [e] : e, s = 0; s < i.length; s += 1)
        if (i[s] === r) return !0;
      return !1;
    }
    return !1;
  }
  function ld() {
    let e = this[0],
      t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function cd(e) {
    if (typeof e == "undefined") return this;
    const t = this.length;
    if (e > t - 1) return N([]);
    if (e < 0) {
      const n = t + e;
      return n < 0 ? N([]) : N([this[n]]);
    }
    return N([this[e]]);
  }
  function ud(...e) {
    let t;
    const n = Me();
    for (let r = 0; r < e.length; r += 1) {
      t = e[r];
      for (let i = 0; i < this.length; i += 1)
        if (typeof t == "string") {
          const s = n.createElement("div");
          for (s.innerHTML = t; s.firstChild; )
            this[i].appendChild(s.firstChild);
        } else if (t instanceof Ln)
          for (let s = 0; s < t.length; s += 1) this[i].appendChild(t[s]);
        else this[i].appendChild(t);
    }
    return this;
  }
  function fd(e) {
    const t = Me();
    let n, r;
    for (n = 0; n < this.length; n += 1)
      if (typeof e == "string") {
        const i = t.createElement("div");
        for (i.innerHTML = e, r = i.childNodes.length - 1; r >= 0; r -= 1)
          this[n].insertBefore(i.childNodes[r], this[n].childNodes[0]);
      } else if (e instanceof Ln)
        for (r = 0; r < e.length; r += 1)
          this[n].insertBefore(e[r], this[n].childNodes[0]);
      else this[n].insertBefore(e, this[n].childNodes[0]);
    return this;
  }
  function dd(e) {
    return this.length > 0
      ? e
        ? this[0].nextElementSibling && N(this[0].nextElementSibling).is(e)
          ? N([this[0].nextElementSibling])
          : N([])
        : this[0].nextElementSibling
        ? N([this[0].nextElementSibling])
        : N([])
      : N([]);
  }
  function hd(e) {
    const t = [];
    let n = this[0];
    if (!n) return N([]);
    for (; n.nextElementSibling; ) {
      const r = n.nextElementSibling;
      e ? N(r).is(e) && t.push(r) : t.push(r), (n = r);
    }
    return N(t);
  }
  function pd(e) {
    if (this.length > 0) {
      const t = this[0];
      return e
        ? t.previousElementSibling && N(t.previousElementSibling).is(e)
          ? N([t.previousElementSibling])
          : N([])
        : t.previousElementSibling
        ? N([t.previousElementSibling])
        : N([]);
    }
    return N([]);
  }
  function md(e) {
    const t = [];
    let n = this[0];
    if (!n) return N([]);
    for (; n.previousElementSibling; ) {
      const r = n.previousElementSibling;
      e ? N(r).is(e) && t.push(r) : t.push(r), (n = r);
    }
    return N(t);
  }
  function gd(e) {
    const t = [];
    for (let n = 0; n < this.length; n += 1)
      this[n].parentNode !== null &&
        (e
          ? N(this[n].parentNode).is(e) && t.push(this[n].parentNode)
          : t.push(this[n].parentNode));
    return N(t);
  }
  function vd(e) {
    const t = [];
    for (let n = 0; n < this.length; n += 1) {
      let r = this[n].parentNode;
      for (; r; ) e ? N(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
    }
    return N(t);
  }
  function yd(e) {
    let t = this;
    return typeof e == "undefined"
      ? N([])
      : (t.is(e) || (t = t.parents(e).eq(0)), t);
  }
  function _d(e) {
    const t = [];
    for (let n = 0; n < this.length; n += 1) {
      const r = this[n].querySelectorAll(e);
      for (let i = 0; i < r.length; i += 1) t.push(r[i]);
    }
    return N(t);
  }
  function bd(e) {
    const t = [];
    for (let n = 0; n < this.length; n += 1) {
      const r = this[n].children;
      for (let i = 0; i < r.length; i += 1)
        (!e || N(r[i]).is(e)) && t.push(r[i]);
    }
    return N(t);
  }
  function xd() {
    for (let e = 0; e < this.length; e += 1)
      this[e].parentNode && this[e].parentNode.removeChild(this[e]);
    return this;
  }
  const hl = {
    addClass: Hf,
    removeClass: qf,
    hasClass: Vf,
    toggleClass: Bf,
    attr: Wf,
    removeAttr: Yf,
    transform: Xf,
    transition: Gf,
    on: jf,
    off: Uf,
    trigger: Kf,
    transitionEnd: Qf,
    outerWidth: Zf,
    outerHeight: Jf,
    styles: td,
    offset: ed,
    css: nd,
    each: rd,
    html: sd,
    text: ad,
    is: od,
    index: ld,
    eq: cd,
    append: ud,
    prepend: fd,
    next: dd,
    nextAll: hd,
    prev: pd,
    prevAll: md,
    parent: gd,
    parents: vd,
    closest: yd,
    find: _d,
    children: bd,
    filter: id,
    remove: xd,
  };
  Object.keys(hl).forEach((e) => {
    Object.defineProperty(N.fn, e, { value: hl[e], writable: !0 });
  });
  function Sd(e) {
    const t = e;
    Object.keys(t).forEach((n) => {
      try {
        t[n] = null;
      } catch (r) {}
      try {
        delete t[n];
      } catch (r) {}
    });
  }
  function Dn(e, t = 0) {
    return setTimeout(e, t);
  }
  function Ct() {
    return Date.now();
  }
  function Td(e) {
    const t = ce();
    let n;
    return (
      t.getComputedStyle && (n = t.getComputedStyle(e, null)),
      !n && e.currentStyle && (n = e.currentStyle),
      n || (n = e.style),
      n
    );
  }
  function ya(e, t = "x") {
    const n = ce();
    let r, i, s;
    const a = Td(e);
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
      t === "x" &&
        (n.WebKitCSSMatrix
          ? (i = s.m41)
          : r.length === 16
          ? (i = parseFloat(r[12]))
          : (i = parseFloat(r[4]))),
      t === "y" &&
        (n.WebKitCSSMatrix
          ? (i = s.m42)
          : r.length === 16
          ? (i = parseFloat(r[13]))
          : (i = parseFloat(r[5]))),
      i || 0
    );
  }
  function _i(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      e.constructor &&
      Object.prototype.toString.call(e).slice(8, -1) === "Object"
    );
  }
  function Ed(e) {
    return typeof window != "undefined" &&
      typeof window.HTMLElement != "undefined"
      ? e instanceof HTMLElement
      : e && (e.nodeType === 1 || e.nodeType === 11);
  }
  function Pt(...e) {
    const t = Object(e[0]),
      n = ["__proto__", "constructor", "prototype"];
    for (let r = 1; r < e.length; r += 1) {
      const i = e[r];
      if (i != null && !Ed(i)) {
        const s = Object.keys(Object(i)).filter((a) => n.indexOf(a) < 0);
        for (let a = 0, o = s.length; a < o; a += 1) {
          const l = s[a],
            c = Object.getOwnPropertyDescriptor(i, l);
          c !== void 0 &&
            c.enumerable &&
            (_i(t[l]) && _i(i[l])
              ? i[l].__swiper__
                ? (t[l] = i[l])
                : Pt(t[l], i[l])
              : !_i(t[l]) && _i(i[l])
              ? ((t[l] = {}), i[l].__swiper__ ? (t[l] = i[l]) : Pt(t[l], i[l]))
              : (t[l] = i[l]));
        }
      }
    }
    return t;
  }
  function bi(e, t, n) {
    e.style.setProperty(t, n);
  }
  function pl({ swiper: e, targetPosition: t, side: n }) {
    const r = ce(),
      i = -e.translate;
    let s = null,
      a;
    const o = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      r.cancelAnimationFrame(e.cssModeFrameID);
    const l = t > i ? "next" : "prev",
      c = (f, d) => (l === "next" && f >= d) || (l === "prev" && f <= d),
      u = () => {
        (a = new Date().getTime()), s === null && (s = a);
        const f = Math.max(Math.min((a - s) / o, 1), 0),
          d = 0.5 - Math.cos(f * Math.PI) / 2;
        let h = i + d * (t - i);
        if ((c(h, t) && (h = t), e.wrapperEl.scrollTo({ [n]: h }), c(h, t))) {
          (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [n]: h });
            }),
            r.cancelAnimationFrame(e.cssModeFrameID);
          return;
        }
        e.cssModeFrameID = r.requestAnimationFrame(u);
      };
    u();
  }
  let _a;
  function wd() {
    const e = ce(),
      t = Me();
    return {
      smoothScroll:
        t.documentElement && "scrollBehavior" in t.documentElement.style,
      touch: !!(
        "ontouchstart" in e ||
        (e.DocumentTouch && t instanceof e.DocumentTouch)
      ),
      passiveListener: (function () {
        let r = !1;
        try {
          const i = Object.defineProperty({}, "passive", {
            get() {
              r = !0;
            },
          });
          e.addEventListener("testPassiveListener", null, i);
        } catch (i) {}
        return r;
      })(),
      gestures: (function () {
        return "ongesturestart" in e;
      })(),
    };
  }
  function ml() {
    return _a || (_a = wd()), _a;
  }
  let ba;
  function Cd({ userAgent: e } = {}) {
    const t = ml(),
      n = ce(),
      r = n.navigator.platform,
      i = e || n.navigator.userAgent,
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
        t.touch &&
        m.indexOf(`${a}x${o}`) >= 0 &&
        ((c = i.match(/(Version)\/([\d.]+)/)),
        c || (c = [0, 1, "13_0_0"]),
        (h = !1)),
      l && !d && ((s.os = "android"), (s.android = !0)),
      (c || f || u) && ((s.os = "ios"), (s.ios = !0)),
      s
    );
  }
  function Pd(e = {}) {
    return ba || (ba = Cd(e)), ba;
  }
  let xa;
  function kd() {
    const e = ce();
    function t() {
      const n = e.navigator.userAgent.toLowerCase();
      return (
        n.indexOf("safari") >= 0 &&
        n.indexOf("chrome") < 0 &&
        n.indexOf("android") < 0
      );
    }
    return {
      isSafari: t(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        e.navigator.userAgent
      ),
    };
  }
  function Md() {
    return xa || (xa = kd()), xa;
  }
  function $d({ swiper: e, on: t, emit: n }) {
    const r = ce();
    let i = null,
      s = null;
    const a = () => {
        !e || e.destroyed || !e.initialized || (n("beforeResize"), n("resize"));
      },
      o = () => {
        !e ||
          e.destroyed ||
          !e.initialized ||
          ((i = new ResizeObserver((u) => {
            s = r.requestAnimationFrame(() => {
              const { width: f, height: d } = e;
              let h = f,
                m = d;
              u.forEach(({ contentBoxSize: p, contentRect: g, target: y }) => {
                (y && y !== e.el) ||
                  ((h = g ? g.width : (p[0] || p).inlineSize),
                  (m = g ? g.height : (p[0] || p).blockSize));
              }),
                (h !== f || m !== d) && a();
            });
          })),
          i.observe(e.el));
      },
      l = () => {
        s && r.cancelAnimationFrame(s),
          i && i.unobserve && e.el && (i.unobserve(e.el), (i = null));
      },
      c = () => {
        !e || e.destroyed || !e.initialized || n("orientationchange");
      };
    t("init", () => {
      if (e.params.resizeObserver && typeof r.ResizeObserver != "undefined") {
        o();
        return;
      }
      r.addEventListener("resize", a),
        r.addEventListener("orientationchange", c);
    }),
      t("destroy", () => {
        l(),
          r.removeEventListener("resize", a),
          r.removeEventListener("orientationchange", c);
      });
  }
  function Od({ swiper: e, extendParams: t, on: n, emit: r }) {
    const i = [],
      s = ce(),
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
        if (e.params.observer) {
          if (e.params.observeParents) {
            const c = e.$el.parents();
            for (let u = 0; u < c.length; u += 1) a(c[u]);
          }
          a(e.$el[0], { childList: e.params.observeSlideChildren }),
            a(e.$wrapperEl[0], { attributes: !1 });
        }
      },
      l = () => {
        i.forEach((c) => {
          c.disconnect();
        }),
          i.splice(0, i.length);
      };
    t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      n("init", o),
      n("destroy", l);
  }
  const Ad = {
    on(e, t, n) {
      const r = this;
      if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
      const i = n ? "unshift" : "push";
      return (
        e.split(" ").forEach((s) => {
          r.eventsListeners[s] || (r.eventsListeners[s] = []),
            r.eventsListeners[s][i](t);
        }),
        r
      );
    },
    once(e, t, n) {
      const r = this;
      if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
      function i(...s) {
        r.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(r, s);
      }
      return (i.__emitterProxy = t), r.on(e, i, n);
    },
    onAny(e, t) {
      const n = this;
      if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
      const r = t ? "unshift" : "push";
      return (
        n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
      const n = t.eventsAnyListeners.indexOf(e);
      return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
    },
    off(e, t) {
      const n = this;
      return (
        !n.eventsListeners ||
          n.destroyed ||
          !n.eventsListeners ||
          e.split(" ").forEach((r) => {
            typeof t == "undefined"
              ? (n.eventsListeners[r] = [])
              : n.eventsListeners[r] &&
                n.eventsListeners[r].forEach((i, s) => {
                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                    n.eventsListeners[r].splice(s, 1);
                });
          }),
        n
      );
    },
    emit(...e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
      let n, r, i;
      return (
        typeof e[0] == "string" || Array.isArray(e[0])
          ? ((n = e[0]), (r = e.slice(1, e.length)), (i = t))
          : ((n = e[0].events), (r = e[0].data), (i = e[0].context || t)),
        r.unshift(i),
        (Array.isArray(n) ? n : n.split(" ")).forEach((a) => {
          t.eventsAnyListeners &&
            t.eventsAnyListeners.length &&
            t.eventsAnyListeners.forEach((o) => {
              o.apply(i, [a, ...r]);
            }),
            t.eventsListeners &&
              t.eventsListeners[a] &&
              t.eventsListeners[a].forEach((o) => {
                o.apply(i, r);
              });
        }),
        t
      );
    },
  };
  function Ld() {
    const e = this;
    let t, n;
    const r = e.$el;
    typeof e.params.width != "undefined" && e.params.width !== null
      ? (t = e.params.width)
      : (t = r[0].clientWidth),
      typeof e.params.height != "undefined" && e.params.height !== null
        ? (n = e.params.height)
        : (n = r[0].clientHeight),
      !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
        ((t =
          t -
          parseInt(r.css("padding-left") || 0, 10) -
          parseInt(r.css("padding-right") || 0, 10)),
        (n =
          n -
          parseInt(r.css("padding-top") || 0, 10) -
          parseInt(r.css("padding-bottom") || 0, 10)),
        Number.isNaN(t) && (t = 0),
        Number.isNaN(n) && (n = 0),
        Object.assign(e, {
          width: t,
          height: n,
          size: e.isHorizontal() ? t : n,
        }));
  }
  function Dd() {
    const e = this;
    function t(E) {
      return e.isHorizontal()
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
    function n(E, $) {
      return parseFloat(E.getPropertyValue(t($)) || 0);
    }
    const r = e.params,
      { $wrapperEl: i, size: s, rtlTranslate: a, wrongRTL: o } = e,
      l = e.virtual && r.virtual.enabled,
      c = l ? e.virtual.slides.length : e.slides.length,
      u = i.children(`.${e.params.slideClass}`),
      f = l ? e.virtual.slides.length : u.length;
    let d = [];
    const h = [],
      m = [];
    let p = r.slidesOffsetBefore;
    typeof p == "function" && (p = r.slidesOffsetBefore.call(e));
    let g = r.slidesOffsetAfter;
    typeof g == "function" && (g = r.slidesOffsetAfter.call(e));
    const y = e.snapGrid.length,
      v = e.slidesGrid.length;
    let _ = r.spaceBetween,
      x = -p,
      S = 0,
      C = 0;
    if (typeof s == "undefined") return;
    typeof _ == "string" &&
      _.indexOf("%") >= 0 &&
      (_ = (parseFloat(_.replace("%", "")) / 100) * s),
      (e.virtualSize = -_),
      a
        ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" })
        : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
      r.centeredSlides &&
        r.cssMode &&
        (bi(e.wrapperEl, "--swiper-centered-offset-before", ""),
        bi(e.wrapperEl, "--swiper-centered-offset-after", ""));
    const w = r.grid && r.grid.rows > 1 && e.grid;
    w && e.grid.initSlides(f);
    let P;
    const A =
      r.slidesPerView === "auto" &&
      r.breakpoints &&
      Object.keys(r.breakpoints).filter(
        (E) => typeof r.breakpoints[E].slidesPerView != "undefined"
      ).length > 0;
    for (let E = 0; E < f; E += 1) {
      P = 0;
      const $ = u.eq(E);
      if ((w && e.grid.updateSlide(E, $, f, t), $.css("display") !== "none")) {
        if (r.slidesPerView === "auto") {
          A && (u[E].style[t("width")] = "");
          const b = getComputedStyle($[0]),
            T = $[0].style.transform,
            O = $[0].style.webkitTransform;
          if (
            (T && ($[0].style.transform = "none"),
            O && ($[0].style.webkitTransform = "none"),
            r.roundLengths)
          )
            P = e.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
          else {
            const D = n(b, "width"),
              k = n(b, "padding-left"),
              L = n(b, "padding-right"),
              I = n(b, "margin-left"),
              R = n(b, "margin-right"),
              M = b.getPropertyValue("box-sizing");
            if (M && M === "border-box") P = D + I + R;
            else {
              const { clientWidth: V, offsetWidth: K } = $[0];
              P = D + k + L + I + R + (K - V);
            }
          }
          T && ($[0].style.transform = T),
            O && ($[0].style.webkitTransform = O),
            r.roundLengths && (P = Math.floor(P));
        } else
          (P = (s - (r.slidesPerView - 1) * _) / r.slidesPerView),
            r.roundLengths && (P = Math.floor(P)),
            u[E] && (u[E].style[t("width")] = `${P}px`);
        u[E] && (u[E].swiperSlideSize = P),
          m.push(P),
          r.centeredSlides
            ? ((x = x + P / 2 + S / 2 + _),
              S === 0 && E !== 0 && (x = x - s / 2 - _),
              E === 0 && (x = x - s / 2 - _),
              Math.abs(x) < 1 / 1e3 && (x = 0),
              r.roundLengths && (x = Math.floor(x)),
              C % r.slidesPerGroup === 0 && d.push(x),
              h.push(x))
            : (r.roundLengths && (x = Math.floor(x)),
              (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                e.params.slidesPerGroup ===
                0 && d.push(x),
              h.push(x),
              (x = x + P + _)),
          (e.virtualSize += P + _),
          (S = P),
          (C += 1);
      }
    }
    if (
      ((e.virtualSize = Math.max(e.virtualSize, s) + g),
      a &&
        o &&
        (r.effect === "slide" || r.effect === "coverflow") &&
        i.css({ width: `${e.virtualSize + r.spaceBetween}px` }),
      r.setWrapperSize &&
        i.css({ [t("width")]: `${e.virtualSize + r.spaceBetween}px` }),
      w && e.grid.updateWrapperSize(P, d, t),
      !r.centeredSlides)
    ) {
      const E = [];
      for (let $ = 0; $ < d.length; $ += 1) {
        let b = d[$];
        r.roundLengths && (b = Math.floor(b)),
          d[$] <= e.virtualSize - s && E.push(b);
      }
      (d = E),
        Math.floor(e.virtualSize - s) - Math.floor(d[d.length - 1]) > 1 &&
          d.push(e.virtualSize - s);
    }
    if ((d.length === 0 && (d = [0]), r.spaceBetween !== 0)) {
      const E = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
      u.filter(($, b) => (r.cssMode ? b !== u.length - 1 : !0)).css({
        [E]: `${_}px`,
      });
    }
    if (r.centeredSlides && r.centeredSlidesBounds) {
      let E = 0;
      m.forEach((b) => {
        E += b + (r.spaceBetween ? r.spaceBetween : 0);
      }),
        (E -= r.spaceBetween);
      const $ = E - s;
      d = d.map((b) => (b < 0 ? -p : b > $ ? $ + g : b));
    }
    if (r.centerInsufficientSlides) {
      let E = 0;
      if (
        (m.forEach(($) => {
          E += $ + (r.spaceBetween ? r.spaceBetween : 0);
        }),
        (E -= r.spaceBetween),
        E < s)
      ) {
        const $ = (s - E) / 2;
        d.forEach((b, T) => {
          d[T] = b - $;
        }),
          h.forEach((b, T) => {
            h[T] = b + $;
          });
      }
    }
    if (
      (Object.assign(e, {
        slides: u,
        snapGrid: d,
        slidesGrid: h,
        slidesSizesGrid: m,
      }),
      r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
    ) {
      bi(e.wrapperEl, "--swiper-centered-offset-before", `${-d[0]}px`),
        bi(
          e.wrapperEl,
          "--swiper-centered-offset-after",
          `${e.size / 2 - m[m.length - 1] / 2}px`
        );
      const E = -e.snapGrid[0],
        $ = -e.slidesGrid[0];
      (e.snapGrid = e.snapGrid.map((b) => b + E)),
        (e.slidesGrid = e.slidesGrid.map((b) => b + $));
    }
    if (
      (f !== c && e.emit("slidesLengthChange"),
      d.length !== y &&
        (e.params.watchOverflow && e.checkOverflow(),
        e.emit("snapGridLengthChange")),
      h.length !== v && e.emit("slidesGridLengthChange"),
      r.watchSlidesProgress && e.updateSlidesOffset(),
      !l && !r.cssMode && (r.effect === "slide" || r.effect === "fade"))
    ) {
      const E = `${r.containerModifierClass}backface-hidden`,
        $ = e.$el.hasClass(E);
      f <= r.maxBackfaceHiddenSlides
        ? $ || e.$el.addClass(E)
        : $ && e.$el.removeClass(E);
    }
  }
  function Id(e) {
    const t = this,
      n = [],
      r = t.virtual && t.params.virtual.enabled;
    let i = 0,
      s;
    typeof e == "number"
      ? t.setTransition(e)
      : e === !0 && t.setTransition(t.params.speed);
    const a = (o) =>
      r
        ? t.slides.filter(
            (l) => parseInt(l.getAttribute("data-swiper-slide-index"), 10) === o
          )[0]
        : t.slides.eq(o)[0];
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
      if (t.params.centeredSlides)
        (t.visibleSlides || N([])).each((o) => {
          n.push(o);
        });
      else
        for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
          const o = t.activeIndex + s;
          if (o > t.slides.length && !r) break;
          n.push(a(o));
        }
    else n.push(a(t.activeIndex));
    for (s = 0; s < n.length; s += 1)
      if (typeof n[s] != "undefined") {
        const o = n[s].offsetHeight;
        i = o > i ? o : i;
      }
    (i || i === 0) && t.$wrapperEl.css("height", `${i}px`);
  }
  function zd() {
    const e = this,
      t = e.slides;
    for (let n = 0; n < t.length; n += 1)
      t[n].swiperSlideOffset = e.isHorizontal()
        ? t[n].offsetLeft
        : t[n].offsetTop;
  }
  function Rd(e = (this && this.translate) || 0) {
    const t = this,
      n = t.params,
      { slides: r, rtlTranslate: i, snapGrid: s } = t;
    if (r.length === 0) return;
    typeof r[0].swiperSlideOffset == "undefined" && t.updateSlidesOffset();
    let a = -e;
    i && (a = e),
      r.removeClass(n.slideVisibleClass),
      (t.visibleSlidesIndexes = []),
      (t.visibleSlides = []);
    for (let o = 0; o < r.length; o += 1) {
      const l = r[o];
      let c = l.swiperSlideOffset;
      n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
      const u =
          (a + (n.centeredSlides ? t.minTranslate() : 0) - c) /
          (l.swiperSlideSize + n.spaceBetween),
        f =
          (a - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
          (l.swiperSlideSize + n.spaceBetween),
        d = -(a - c),
        h = d + t.slidesSizesGrid[o];
      ((d >= 0 && d < t.size - 1) ||
        (h > 1 && h <= t.size) ||
        (d <= 0 && h >= t.size)) &&
        (t.visibleSlides.push(l),
        t.visibleSlidesIndexes.push(o),
        r.eq(o).addClass(n.slideVisibleClass)),
        (l.progress = i ? -u : u),
        (l.originalProgress = i ? -f : f);
    }
    t.visibleSlides = N(t.visibleSlides);
  }
  function Nd(e) {
    const t = this;
    if (typeof e == "undefined") {
      const c = t.rtlTranslate ? -1 : 1;
      e = (t && t.translate && t.translate * c) || 0;
    }
    const n = t.params,
      r = t.maxTranslate() - t.minTranslate();
    let { progress: i, isBeginning: s, isEnd: a } = t;
    const o = s,
      l = a;
    r === 0
      ? ((i = 0), (s = !0), (a = !0))
      : ((i = (e - t.minTranslate()) / r), (s = i <= 0), (a = i >= 1)),
      Object.assign(t, { progress: i, isBeginning: s, isEnd: a }),
      (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
        t.updateSlidesProgress(e),
      s && !o && t.emit("reachBeginning toEdge"),
      a && !l && t.emit("reachEnd toEdge"),
      ((o && !s) || (l && !a)) && t.emit("fromEdge"),
      t.emit("progress", i);
  }
  function Fd() {
    const e = this,
      { slides: t, params: n, $wrapperEl: r, activeIndex: i, realIndex: s } = e,
      a = e.virtual && n.virtual.enabled;
    t.removeClass(
      `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
    );
    let o;
    a
      ? (o = e.$wrapperEl.find(
          `.${n.slideClass}[data-swiper-slide-index="${i}"]`
        ))
      : (o = t.eq(i)),
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
    n.loop && l.length === 0 && ((l = t.eq(0)), l.addClass(n.slideNextClass));
    let c = o.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
    n.loop && c.length === 0 && ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
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
      e.emitSlidesClasses();
  }
  function Hd(e) {
    const t = this,
      n = t.rtlTranslate ? t.translate : -t.translate,
      {
        slidesGrid: r,
        snapGrid: i,
        params: s,
        activeIndex: a,
        realIndex: o,
        snapIndex: l,
      } = t;
    let c = e,
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
      u !== l && ((t.snapIndex = u), t.emit("snapIndexChange"));
      return;
    }
    const f = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
    Object.assign(t, {
      snapIndex: u,
      realIndex: f,
      previousIndex: a,
      activeIndex: c,
    }),
      t.emit("activeIndexChange"),
      t.emit("snapIndexChange"),
      o !== f && t.emit("realIndexChange"),
      (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
  }
  function qd(e) {
    const t = this,
      n = t.params,
      r = N(e).closest(`.${n.slideClass}`)[0];
    let i = !1,
      s;
    if (r) {
      for (let a = 0; a < t.slides.length; a += 1)
        if (t.slides[a] === r) {
          (i = !0), (s = a);
          break;
        }
    }
    if (r && i)
      (t.clickedSlide = r),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              N(r).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = s);
    else {
      (t.clickedSlide = void 0), (t.clickedIndex = void 0);
      return;
    }
    n.slideToClickedSlide &&
      t.clickedIndex !== void 0 &&
      t.clickedIndex !== t.activeIndex &&
      t.slideToClickedSlide();
  }
  const Bd = {
    updateSize: Ld,
    updateSlides: Dd,
    updateAutoHeight: Id,
    updateSlidesOffset: zd,
    updateSlidesProgress: Rd,
    updateProgress: Nd,
    updateSlidesClasses: Fd,
    updateActiveIndex: Hd,
    updateClickedSlide: qd,
  };
  function Vd(e = this.isHorizontal() ? "x" : "y") {
    const t = this,
      { params: n, rtlTranslate: r, translate: i, $wrapperEl: s } = t;
    if (n.virtualTranslate) return r ? -i : i;
    if (n.cssMode) return i;
    let a = ya(s[0], e);
    return r && (a = -a), a || 0;
  }
  function Wd(e, t) {
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
    n.isHorizontal() ? (l = r ? -e : e) : (c = e),
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
    d === 0 ? (f = 0) : (f = (e - n.minTranslate()) / d),
      f !== o && n.updateProgress(e),
      n.emit("setTranslate", n.translate, t);
  }
  function Yd() {
    return -this.snapGrid[0];
  }
  function Xd() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function Gd(e = 0, t = this.params.speed, n = !0, r = !0, i) {
    const s = this,
      { params: a, wrapperEl: o } = s;
    if (s.animating && a.preventInteractionOnTransition) return !1;
    const l = s.minTranslate(),
      c = s.maxTranslate();
    let u;
    if (
      (r && e > l ? (u = l) : r && e < c ? (u = c) : (u = e),
      s.updateProgress(u),
      a.cssMode)
    ) {
      const f = s.isHorizontal();
      if (t === 0) o[f ? "scrollLeft" : "scrollTop"] = -u;
      else {
        if (!s.support.smoothScroll)
          return (
            pl({ swiper: s, targetPosition: -u, side: f ? "left" : "top" }), !0
          );
        o.scrollTo({ [f ? "left" : "top"]: -u, behavior: "smooth" });
      }
      return !0;
    }
    return (
      t === 0
        ? (s.setTransition(0),
          s.setTranslate(u),
          n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd")))
        : (s.setTransition(t),
          s.setTranslate(u),
          n &&
            (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")),
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
  const jd = {
    getTranslate: Vd,
    setTranslate: Wd,
    minTranslate: Yd,
    maxTranslate: Xd,
    translateTo: Gd,
  };
  function Ud(e, t) {
    const n = this;
    n.params.cssMode || n.$wrapperEl.transition(e),
      n.emit("setTransition", e, t);
  }
  function gl({ swiper: e, runCallbacks: t, direction: n, step: r }) {
    const { activeIndex: i, previousIndex: s } = e;
    let a = n;
    if (
      (a || (i > s ? (a = "next") : i < s ? (a = "prev") : (a = "reset")),
      e.emit(`transition${r}`),
      t && i !== s)
    ) {
      if (a === "reset") {
        e.emit(`slideResetTransition${r}`);
        return;
      }
      e.emit(`slideChangeTransition${r}`),
        a === "next"
          ? e.emit(`slideNextTransition${r}`)
          : e.emit(`slidePrevTransition${r}`);
    }
  }
  function Kd(e = !0, t) {
    const n = this,
      { params: r } = n;
    r.cssMode ||
      (r.autoHeight && n.updateAutoHeight(),
      gl({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
  }
  function Qd(e = !0, t) {
    const n = this,
      { params: r } = n;
    (n.animating = !1),
      !r.cssMode &&
        (n.setTransition(0),
        gl({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
  }
  const Zd = { setTransition: Ud, transitionStart: Kd, transitionEnd: Qd };
  function Jd(e = 0, t = this.params.speed, n = !0, r, i) {
    if (typeof e != "number" && typeof e != "string")
      throw new Error(
        `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
      );
    if (typeof e == "string") {
      const _ = parseInt(e, 10);
      if (!isFinite(_))
        throw new Error(
          `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
        );
      e = _;
    }
    const s = this;
    let a = e;
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
      if (t === 0) {
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
            pl({ swiper: s, targetPosition: x, side: _ ? "left" : "top" }), !0
          );
        h.scrollTo({ [_ ? "left" : "top"]: x, behavior: "smooth" });
      }
      return !0;
    }
    return (
      s.setTransition(t),
      s.setTranslate(y),
      s.updateActiveIndex(a),
      s.updateSlidesClasses(),
      s.emit("beforeTransitionStart", t, r),
      s.transitionStart(n, v),
      t === 0
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
  function eh(e = 0, t = this.params.speed, n = !0, r) {
    if (typeof e == "string") {
      const a = parseInt(e, 10);
      if (!isFinite(a))
        throw new Error(
          `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
        );
      e = a;
    }
    const i = this;
    let s = e;
    return i.params.loop && (s += i.loopedSlides), i.slideTo(s, t, n, r);
  }
  function th(e = this.params.speed, t = !0, n) {
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
      ? r.slideTo(0, e, t, n)
      : r.slideTo(r.activeIndex + l, e, t, n);
  }
  function nh(e = this.params.speed, t = !0, n) {
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
      return r.slideTo(g, e, t, n);
    }
    return r.slideTo(p, e, t, n);
  }
  function rh(e = this.params.speed, t = !0, n) {
    const r = this;
    return r.slideTo(r.activeIndex, e, t, n);
  }
  function ih(e = this.params.speed, t = !0, n, r = 0.5) {
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
      i.slideTo(s, e, t, n)
    );
  }
  function sh() {
    const e = this,
      { params: t, $wrapperEl: n } = e,
      r =
        t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let i = e.clickedIndex,
      s;
    if (t.loop) {
      if (e.animating) return;
      (s = parseInt(N(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
        t.centeredSlides
          ? i < e.loopedSlides - r / 2 ||
            i > e.slides.length - e.loopedSlides + r / 2
            ? (e.loopFix(),
              (i = n
                .children(
                  `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              Dn(() => {
                e.slideTo(i);
              }))
            : e.slideTo(i)
          : i > e.slides.length - r
          ? (e.loopFix(),
            (i = n
              .children(
                `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            Dn(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i);
    } else e.slideTo(i);
  }
  const ah = {
    slideTo: Jd,
    slideToLoop: eh,
    slideNext: th,
    slidePrev: nh,
    slideReset: rh,
    slideToClosest: ih,
    slideToClickedSlide: sh,
  };
  function oh() {
    const e = this,
      t = Me(),
      { params: n, $wrapperEl: r } = e,
      i = r.children().length > 0 ? N(r.children()[0].parentNode) : r;
    i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
    let s = i.children(`.${n.slideClass}`);
    if (n.loopFillGroupWithBlank) {
      const l = n.slidesPerGroup - (s.length % n.slidesPerGroup);
      if (l !== n.slidesPerGroup) {
        for (let c = 0; c < l; c += 1) {
          const u = N(t.createElement("div")).addClass(
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
      (e.loopedSlides = Math.ceil(
        parseFloat(n.loopedSlides || n.slidesPerView, 10)
      )),
      (e.loopedSlides += n.loopAdditionalSlides),
      e.loopedSlides > s.length &&
        e.params.loopedSlidesLimit &&
        (e.loopedSlides = s.length);
    const a = [],
      o = [];
    s.each((l, c) => {
      N(l).attr("data-swiper-slide-index", c);
    });
    for (let l = 0; l < e.loopedSlides; l += 1) {
      const c = l - Math.floor(l / s.length) * s.length;
      o.push(s.eq(c)[0]), a.unshift(s.eq(s.length - c - 1)[0]);
    }
    for (let l = 0; l < o.length; l += 1)
      i.append(N(o[l].cloneNode(!0)).addClass(n.slideDuplicateClass));
    for (let l = a.length - 1; l >= 0; l -= 1)
      i.prepend(N(a[l].cloneNode(!0)).addClass(n.slideDuplicateClass));
  }
  function lh() {
    const e = this;
    e.emit("beforeLoopFix");
    const {
      activeIndex: t,
      slides: n,
      loopedSlides: r,
      allowSlidePrev: i,
      allowSlideNext: s,
      snapGrid: a,
      rtlTranslate: o,
    } = e;
    let l;
    (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
    const u = -a[t] - e.getTranslate();
    t < r
      ? ((l = n.length - r * 3 + t),
        (l += r),
        e.slideTo(l, 0, !1, !0) &&
          u !== 0 &&
          e.setTranslate((o ? -e.translate : e.translate) - u))
      : t >= n.length - r &&
        ((l = -n.length + t + r),
        (l += r),
        e.slideTo(l, 0, !1, !0) &&
          u !== 0 &&
          e.setTranslate((o ? -e.translate : e.translate) - u)),
      (e.allowSlidePrev = i),
      (e.allowSlideNext = s),
      e.emit("loopFix");
  }
  function ch() {
    const e = this,
      { $wrapperEl: t, params: n, slides: r } = e;
    t
      .children(
        `.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`
      )
      .remove(),
      r.removeAttr("data-swiper-slide-index");
  }
  const uh = { loopCreate: oh, loopFix: lh, loopDestroy: ch };
  function fh(e) {
    const t = this;
    if (
      t.support.touch ||
      !t.params.simulateTouch ||
      (t.params.watchOverflow && t.isLocked) ||
      t.params.cssMode
    )
      return;
    const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    (n.style.cursor = "move"), (n.style.cursor = e ? "grabbing" : "grab");
  }
  function dh() {
    const e = this;
    e.support.touch ||
      (e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode ||
      (e[
        e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = "");
  }
  const hh = { setGrabCursor: fh, unsetGrabCursor: dh };
  function ph(e, t = this) {
    function n(r) {
      if (!r || r === Me() || r === ce()) return null;
      r.assignedSlot && (r = r.assignedSlot);
      const i = r.closest(e);
      return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
    }
    return n(t);
  }
  function mh(e) {
    const t = this,
      n = Me(),
      r = ce(),
      i = t.touchEventsData,
      { params: s, touches: a, enabled: o } = t;
    if (!o || (t.animating && s.preventInteractionOnTransition)) return;
    !t.animating && s.cssMode && s.loop && t.loopFix();
    let l = e;
    l.originalEvent && (l = l.originalEvent);
    let c = N(l.target);
    if (
      (s.touchEventsTarget === "wrapper" && !c.closest(t.wrapperEl).length) ||
      ((i.isTouchEvent = l.type === "touchstart"),
      !i.isTouchEvent && "which" in l && l.which === 3) ||
      (!i.isTouchEvent && "button" in l && l.button > 0) ||
      (i.isTouched && i.isMoved)
    )
      return;
    const u = !!s.noSwipingClass && s.noSwipingClass !== "",
      f = e.composedPath ? e.composedPath() : e.path;
    u && l.target && l.target.shadowRoot && f && (c = N(f[0]));
    const d = s.noSwipingSelector
        ? s.noSwipingSelector
        : `.${s.noSwipingClass}`,
      h = !!(l.target && l.target.shadowRoot);
    if (s.noSwiping && (h ? ph(d, c[0]) : c.closest(d)[0])) {
      t.allowClick = !0;
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
      if (g === "prevent") e.preventDefault();
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
      (i.touchStartTime = Ct()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      s.threshold > 0 && (i.allowThresholdMove = !1),
      l.type !== "touchstart")
    ) {
      let v = !0;
      c.is(i.focusableElements) &&
        ((v = !1), c[0].nodeName === "SELECT" && (i.isTouched = !1)),
        n.activeElement &&
          N(n.activeElement).is(i.focusableElements) &&
          n.activeElement !== c[0] &&
          n.activeElement.blur();
      const _ = v && t.allowTouchMove && s.touchStartPreventDefault;
      (s.touchStartForcePreventDefault || _) &&
        !c[0].isContentEditable &&
        l.preventDefault();
    }
    t.params.freeMode &&
      t.params.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !s.cssMode &&
      t.freeMode.onTouchStart(),
      t.emit("touchStart", l);
  }
  function gh(e) {
    const t = Me(),
      n = this,
      r = n.touchEventsData,
      { params: i, touches: s, rtlTranslate: a, enabled: o } = n;
    if (!o) return;
    let l = e;
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
      N(l.target).is(r.focusableElements) || (n.allowClick = !1),
        r.isTouched &&
          (Object.assign(s, { startX: u, startY: f, currentX: u, currentY: f }),
          (r.touchStartTime = Ct()));
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
      t.activeElement &&
      l.target === t.activeElement &&
      N(l.target).is(r.focusableElements)
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
      Math.sqrt(wt(d, 2) + wt(h, 2)) < n.params.threshold
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
              wt(-n.minTranslate() + r.startTranslate + m, g)))
        : m < 0 &&
          r.currentTranslate < n.maxTranslate() &&
          ((p = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              wt(n.maxTranslate() - r.startTranslate - m, g))),
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
  function vh(e) {
    const t = this,
      n = t.touchEventsData,
      { params: r, touches: i, rtlTranslate: s, slidesGrid: a, enabled: o } = t;
    if (!o) return;
    let l = e;
    if (
      (l.originalEvent && (l = l.originalEvent),
      n.allowTouchCallbacks && t.emit("touchEnd", l),
      (n.allowTouchCallbacks = !1),
      !n.isTouched)
    ) {
      n.isMoved && r.grabCursor && t.setGrabCursor(!1),
        (n.isMoved = !1),
        (n.startMoving = !1);
      return;
    }
    r.grabCursor &&
      n.isMoved &&
      n.isTouched &&
      (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
      t.setGrabCursor(!1);
    const c = Ct(),
      u = c - n.touchStartTime;
    if (t.allowClick) {
      const v = l.path || (l.composedPath && l.composedPath());
      t.updateClickedSlide((v && v[0]) || l.target),
        t.emit("tap click", l),
        u < 300 &&
          c - n.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", l);
    }
    if (
      ((n.lastClickTime = Ct()),
      Dn(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !n.isTouched ||
        !n.isMoved ||
        !t.swipeDirection ||
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
        ? (f = s ? t.translate : -t.translate)
        : (f = -n.currentTranslate),
      r.cssMode)
    )
      return;
    if (t.params.freeMode && r.freeMode.enabled) {
      t.freeMode.onTouchEnd({ currentPos: f });
      return;
    }
    let d = 0,
      h = t.slidesSizesGrid[0];
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
      (t.isBeginning
        ? (p =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (m = 0));
    const g = (f - a[d]) / h,
      y = d < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    if (u > r.longSwipesMs) {
      if (!r.longSwipes) {
        t.slideTo(t.activeIndex);
        return;
      }
      t.swipeDirection === "next" &&
        (g >= r.longSwipesRatio
          ? t.slideTo(r.rewind && t.isEnd ? m : d + y)
          : t.slideTo(d)),
        t.swipeDirection === "prev" &&
          (g > 1 - r.longSwipesRatio
            ? t.slideTo(d + y)
            : p !== null && g < 0 && Math.abs(g) > r.longSwipesRatio
            ? t.slideTo(p)
            : t.slideTo(d));
    } else {
      if (!r.shortSwipes) {
        t.slideTo(t.activeIndex);
        return;
      }
      t.navigation &&
      (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
        ? l.target === t.navigation.nextEl
          ? t.slideTo(d + y)
          : t.slideTo(d)
        : (t.swipeDirection === "next" && t.slideTo(m !== null ? m : d + y),
          t.swipeDirection === "prev" && t.slideTo(p !== null ? p : d));
    }
  }
  function vl() {
    const e = this,
      { params: t, el: n } = e;
    if (n && n.offsetWidth === 0) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = i),
      (e.allowSlideNext = r),
      e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
  }
  function yh(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function _h() {
    const e = this,
      { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
    if (!r) return;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      e.translate === 0 && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    let i;
    const s = e.maxTranslate() - e.minTranslate();
    s === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / s),
      i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  let yl = !1;
  function bh() {}
  const _l = (e, t) => {
    const n = Me(),
      {
        params: r,
        touchEvents: i,
        el: s,
        wrapperEl: a,
        device: o,
        support: l,
      } = e,
      c = !!r.nested,
      u = t === "on" ? "addEventListener" : "removeEventListener",
      f = t;
    if (!l.touch)
      s[u](i.start, e.onTouchStart, !1),
        n[u](i.move, e.onTouchMove, c),
        n[u](i.end, e.onTouchEnd, !1);
    else {
      const d =
        i.start === "touchstart" && l.passiveListener && r.passiveListeners
          ? { passive: !0, capture: !1 }
          : !1;
      s[u](i.start, e.onTouchStart, d),
        s[u](
          i.move,
          e.onTouchMove,
          l.passiveListener ? { passive: !1, capture: c } : c
        ),
        s[u](i.end, e.onTouchEnd, d),
        i.cancel && s[u](i.cancel, e.onTouchEnd, d);
    }
    (r.preventClicks || r.preventClicksPropagation) &&
      s[u]("click", e.onClick, !0),
      r.cssMode && a[u]("scroll", e.onScroll),
      r.updateOnWindowResize
        ? e[f](
            o.ios || o.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            vl,
            !0
          )
        : e[f]("observerUpdate", vl, !0);
  };
  function xh() {
    const e = this,
      t = Me(),
      { params: n, support: r } = e;
    (e.onTouchStart = mh.bind(e)),
      (e.onTouchMove = gh.bind(e)),
      (e.onTouchEnd = vh.bind(e)),
      n.cssMode && (e.onScroll = _h.bind(e)),
      (e.onClick = yh.bind(e)),
      r.touch && !yl && (t.addEventListener("touchstart", bh), (yl = !0)),
      _l(e, "on");
  }
  function Sh() {
    _l(this, "off");
  }
  const Th = { attachEvents: xh, detachEvents: Sh },
    bl = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  function Eh() {
    const e = this,
      {
        activeIndex: t,
        initialized: n,
        loopedSlides: r = 0,
        params: i,
        $el: s,
      } = e,
      a = i.breakpoints;
    if (!a || (a && Object.keys(a).length === 0)) return;
    const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
    if (!o || e.currentBreakpoint === o) return;
    const c = (o in a ? a[o] : void 0) || e.originalParams,
      u = bl(e, i),
      f = bl(e, c),
      d = i.enabled;
    u && !f
      ? (s.removeClass(
          `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
        ),
        e.emitContainerClasses())
      : !u &&
        f &&
        (s.addClass(`${i.containerModifierClass}grid`),
        ((c.grid.fill && c.grid.fill === "column") ||
          (!c.grid.fill && i.grid.fill === "column")) &&
          s.addClass(`${i.containerModifierClass}grid-column`),
        e.emitContainerClasses()),
      ["navigation", "pagination", "scrollbar"].forEach((g) => {
        const y = i[g] && i[g].enabled,
          v = c[g] && c[g].enabled;
        y && !v && e[g].disable(), !y && v && e[g].enable();
      });
    const h = c.direction && c.direction !== i.direction,
      m = i.loop && (c.slidesPerView !== i.slidesPerView || h);
    h && n && e.changeDirection(), Pt(e.params, c);
    const p = e.params.enabled;
    Object.assign(e, {
      allowTouchMove: e.params.allowTouchMove,
      allowSlideNext: e.params.allowSlideNext,
      allowSlidePrev: e.params.allowSlidePrev,
    }),
      d && !p ? e.disable() : !d && p && e.enable(),
      (e.currentBreakpoint = o),
      e.emit("_beforeBreakpoint", c),
      m &&
        n &&
        (e.loopDestroy(),
        e.loopCreate(),
        e.updateSlides(),
        e.slideTo(t - r + e.loopedSlides, 0, !1)),
      e.emit("breakpoint", c);
  }
  function wh(e, t = "window", n) {
    if (!e || (t === "container" && !n)) return;
    let r = !1;
    const i = ce(),
      s = t === "window" ? i.innerHeight : n.clientHeight,
      a = Object.keys(e).map((o) => {
        if (typeof o == "string" && o.indexOf("@") === 0) {
          const l = parseFloat(o.substr(1));
          return { value: s * l, point: o };
        }
        return { value: o, point: o };
      });
    a.sort((o, l) => parseInt(o.value, 10) - parseInt(l.value, 10));
    for (let o = 0; o < a.length; o += 1) {
      const { point: l, value: c } = a[o];
      t === "window"
        ? i.matchMedia(`(min-width: ${c}px)`).matches && (r = l)
        : c <= n.clientWidth && (r = l);
    }
    return r || "max";
  }
  const Ch = { setBreakpoint: Eh, getBreakpoint: wh };
  function Ph(e, t) {
    const n = [];
    return (
      e.forEach((r) => {
        typeof r == "object"
          ? Object.keys(r).forEach((i) => {
              r[i] && n.push(t + i);
            })
          : typeof r == "string" && n.push(t + r);
      }),
      n
    );
  }
  function kh() {
    const e = this,
      { classNames: t, params: n, rtl: r, $el: i, device: s, support: a } = e,
      o = Ph(
        [
          "initialized",
          n.direction,
          { "pointer-events": !a.touch },
          { "free-mode": e.params.freeMode && n.freeMode.enabled },
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
    t.push(...o), i.addClass([...t].join(" ")), e.emitContainerClasses();
  }
  function Mh() {
    const e = this,
      { $el: t, classNames: n } = e;
    t.removeClass(n.join(" ")), e.emitContainerClasses();
  }
  const $h = { addClasses: kh, removeClasses: Mh };
  function Oh(e, t, n, r, i, s) {
    const a = ce();
    let o;
    function l() {
      s && s();
    }
    !N(e).parent("picture")[0] && (!e.complete || !i) && t
      ? ((o = new a.Image()),
        (o.onload = l),
        (o.onerror = l),
        r && (o.sizes = r),
        n && (o.srcset = n),
        t && (o.src = t))
      : l();
  }
  function Ah() {
    const e = this;
    e.imagesToLoad = e.$el.find("img");
    function t() {
      typeof e == "undefined" ||
        e === null ||
        !e ||
        e.destroyed ||
        (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1),
        e.imagesLoaded === e.imagesToLoad.length &&
          (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
    }
    for (let n = 0; n < e.imagesToLoad.length; n += 1) {
      const r = e.imagesToLoad[n];
      e.loadImage(
        r,
        r.currentSrc || r.getAttribute("src"),
        r.srcset || r.getAttribute("srcset"),
        r.sizes || r.getAttribute("sizes"),
        !0,
        t
      );
    }
  }
  const Lh = { loadImage: Oh, preloadImages: Ah };
  function Dh() {
    const e = this,
      { isLocked: t, params: n } = e,
      { slidesOffsetBefore: r } = n;
    if (r) {
      const i = e.slides.length - 1,
        s = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
      e.isLocked = e.size > s;
    } else e.isLocked = e.snapGrid.length === 1;
    n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
      n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
      t && t !== e.isLocked && (e.isEnd = !1),
      t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
  }
  const Ih = { checkOverflow: Dh },
    xl = {
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
  function zh(e, t) {
    return function (r = {}) {
      const i = Object.keys(r)[0],
        s = r[i];
      if (typeof s != "object" || s === null) {
        Pt(t, r);
        return;
      }
      if (
        (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
          e[i] === !0 &&
          (e[i] = { auto: !0 }),
        !(i in e && "enabled" in s))
      ) {
        Pt(t, r);
        return;
      }
      e[i] === !0 && (e[i] = { enabled: !0 }),
        typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
        e[i] || (e[i] = { enabled: !1 }),
        Pt(t, r);
    };
  }
  const Sa = {
      eventsEmitter: Ad,
      update: Bd,
      translate: jd,
      transition: Zd,
      slide: ah,
      loop: uh,
      grabCursor: hh,
      events: Th,
      breakpoints: Ch,
      checkOverflow: Ih,
      classes: $h,
      images: Lh,
    },
    Ta = {};
  class ut {
    constructor(...t) {
      let n, r;
      if (
        (t.length === 1 &&
        t[0].constructor &&
        Object.prototype.toString.call(t[0]).slice(8, -1) === "Object"
          ? (r = t[0])
          : ([n, r] = t),
        r || (r = {}),
        (r = Pt({}, r)),
        n && !r.el && (r.el = n),
        r.el && N(r.el).length > 1)
      ) {
        const o = [];
        return (
          N(r.el).each((l) => {
            const c = Pt({}, r, { el: l });
            o.push(new ut(c));
          }),
          o
        );
      }
      const i = this;
      (i.__swiper__ = !0),
        (i.support = ml()),
        (i.device = Pd({ userAgent: r.userAgent })),
        (i.browser = Md()),
        (i.eventsListeners = {}),
        (i.eventsAnyListeners = []),
        (i.modules = [...i.__modules__]),
        r.modules && Array.isArray(r.modules) && i.modules.push(...r.modules);
      const s = {};
      i.modules.forEach((o) => {
        o({
          swiper: i,
          extendParams: zh(r, s),
          on: i.on.bind(i),
          once: i.once.bind(i),
          off: i.off.bind(i),
          emit: i.emit.bind(i),
        });
      });
      const a = Pt({}, xl, s);
      return (
        (i.params = Pt({}, a, Ta, r)),
        (i.originalParams = Pt({}, i.params)),
        (i.passedParams = Pt({}, r)),
        i.params &&
          i.params.on &&
          Object.keys(i.params.on).forEach((o) => {
            i.on(o, i.params.on[o]);
          }),
        i.params && i.params.onAny && i.onAny(i.params.onAny),
        (i.$ = N),
        Object.assign(i, {
          enabled: i.params.enabled,
          el: n,
          classNames: [],
          slides: N(),
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
            lastClickTime: Ct(),
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
      const t = this;
      t.enabled ||
        ((t.enabled = !0),
        t.params.grabCursor && t.setGrabCursor(),
        t.emit("enable"));
    }
    disable() {
      const t = this;
      t.enabled &&
        ((t.enabled = !1),
        t.params.grabCursor && t.unsetGrabCursor(),
        t.emit("disable"));
    }
    setProgress(t, n) {
      const r = this;
      t = Math.min(Math.max(t, 0), 1);
      const i = r.minTranslate(),
        a = (r.maxTranslate() - i) * t + i;
      r.translateTo(a, typeof n == "undefined" ? 0 : n),
        r.updateActiveIndex(),
        r.updateSlidesClasses();
    }
    emitContainerClasses() {
      const t = this;
      if (!t.params._emitClasses || !t.el) return;
      const n = t.el.className
        .split(" ")
        .filter(
          (r) =>
            r.indexOf("swiper") === 0 ||
            r.indexOf(t.params.containerModifierClass) === 0
        );
      t.emit("_containerClasses", n.join(" "));
    }
    getSlideClasses(t) {
      const n = this;
      return n.destroyed
        ? ""
        : t.className
            .split(" ")
            .filter(
              (r) =>
                r.indexOf("swiper-slide") === 0 ||
                r.indexOf(n.params.slideClass) === 0
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const t = this;
      if (!t.params._emitClasses || !t.el) return;
      const n = [];
      t.slides.each((r) => {
        const i = t.getSlideClasses(r);
        n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
      }),
        t.emit("_slideClasses", n);
    }
    slidesPerViewDynamic(t = "current", n = !1) {
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
      } else if (t === "current")
        for (let f = c + 1; f < s.length; f += 1)
          (n ? a[f] + o[f] - a[c] < l : a[f] - a[c] < l) && (u += 1);
      else for (let f = c - 1; f >= 0; f -= 1) a[c] - a[f] < l && (u += 1);
      return u;
    }
    update() {
      const t = this;
      if (!t || t.destroyed) return;
      const { snapGrid: n, params: r } = t;
      r.breakpoints && t.setBreakpoint(),
        t.updateSize(),
        t.updateSlides(),
        t.updateProgress(),
        t.updateSlidesClasses();
      function i() {
        const a = t.rtlTranslate ? t.translate * -1 : t.translate,
          o = Math.min(Math.max(a, t.maxTranslate()), t.minTranslate());
        t.setTranslate(o), t.updateActiveIndex(), t.updateSlidesClasses();
      }
      let s;
      t.params.freeMode && t.params.freeMode.enabled
        ? (i(), t.params.autoHeight && t.updateAutoHeight())
        : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) &&
          t.isEnd &&
          !t.params.centeredSlides
            ? (s = t.slideTo(t.slides.length - 1, 0, !1, !0))
            : (s = t.slideTo(t.activeIndex, 0, !1, !0)),
          s || i()),
        r.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
        t.emit("update");
    }
    changeDirection(t, n = !0) {
      const r = this,
        i = r.params.direction;
      return (
        t || (t = i === "horizontal" ? "vertical" : "horizontal"),
        t === i ||
          (t !== "horizontal" && t !== "vertical") ||
          (r.$el
            .removeClass(`${r.params.containerModifierClass}${i}`)
            .addClass(`${r.params.containerModifierClass}${t}`),
          r.emitContainerClasses(),
          (r.params.direction = t),
          r.slides.each((s) => {
            t === "vertical" ? (s.style.width = "") : (s.style.height = "");
          }),
          r.emit("changeDirection"),
          n && r.update()),
        r
      );
    }
    changeLanguageDirection(t) {
      const n = this;
      (n.rtl && t === "rtl") ||
        (!n.rtl && t === "ltr") ||
        ((n.rtl = t === "rtl"),
        (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
        n.rtl
          ? (n.$el.addClass(`${n.params.containerModifierClass}rtl`),
            (n.el.dir = "rtl"))
          : (n.$el.removeClass(`${n.params.containerModifierClass}rtl`),
            (n.el.dir = "ltr")),
        n.update());
    }
    mount(t) {
      const n = this;
      if (n.mounted) return !0;
      const r = N(t || n.params.el);
      if (((t = r[0]), !t)) return !1;
      t.swiper = n;
      const i = () =>
        `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let a = (() => {
        if (t && t.shadowRoot && t.shadowRoot.querySelector) {
          const o = N(t.shadowRoot.querySelector(i()));
          return (o.children = (l) => r.children(l)), o;
        }
        return r.children ? r.children(i()) : N(r).children(i());
      })();
      if (a.length === 0 && n.params.createElements) {
        const l = Me().createElement("div");
        (a = N(l)),
          (l.className = n.params.wrapperClass),
          r.append(l),
          r.children(`.${n.params.slideClass}`).each((c) => {
            a.append(c);
          });
      }
      return (
        Object.assign(n, {
          $el: r,
          el: t,
          $wrapperEl: a,
          wrapperEl: a[0],
          mounted: !0,
          rtl: t.dir.toLowerCase() === "rtl" || r.css("direction") === "rtl",
          rtlTranslate:
            n.params.direction === "horizontal" &&
            (t.dir.toLowerCase() === "rtl" || r.css("direction") === "rtl"),
          wrongRTL: a.css("display") === "-webkit-box",
        }),
        !0
      );
    }
    init(t) {
      const n = this;
      return (
        n.initialized ||
          n.mount(t) === !1 ||
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
    destroy(t = !0, n = !0) {
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
          t !== !1 && ((r.$el[0].swiper = null), Sd(r)),
          (r.destroyed = !0)),
        null
      );
    }
    static extendDefaults(t) {
      Pt(Ta, t);
    }
    static get extendedDefaults() {
      return Ta;
    }
    static get defaults() {
      return xl;
    }
    static installModule(t) {
      ut.prototype.__modules__ || (ut.prototype.__modules__ = []);
      const n = ut.prototype.__modules__;
      typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
    }
    static use(t) {
      return Array.isArray(t)
        ? (t.forEach((n) => ut.installModule(n)), ut)
        : (ut.installModule(t), ut);
    }
  }
  Object.keys(Sa).forEach((e) => {
    Object.keys(Sa[e]).forEach((t) => {
      ut.prototype[t] = Sa[e][t];
    });
  }),
    ut.use([$d, Od]);
  function Rh({ swiper: e, extendParams: t, on: n, emit: r }) {
    t({
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
    e.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: [],
    };
    function s(f, d) {
      const h = e.params.virtual;
      if (h.cache && e.virtual.cache[d]) return e.virtual.cache[d];
      const m = h.renderSlide
        ? N(h.renderSlide.call(e, f, d))
        : N(
            `<div class="${e.params.slideClass}" data-swiper-slide-index="${d}">${f}</div>`
          );
      return (
        m.attr("data-swiper-slide-index") ||
          m.attr("data-swiper-slide-index", d),
        h.cache && (e.virtual.cache[d] = m),
        m
      );
    }
    function a(f) {
      const {
          slidesPerView: d,
          slidesPerGroup: h,
          centeredSlides: m,
        } = e.params,
        { addSlidesBefore: p, addSlidesAfter: g } = e.params.virtual,
        { from: y, to: v, slides: _, slidesGrid: x, offset: S } = e.virtual;
      e.params.cssMode || e.updateActiveIndex();
      const C = e.activeIndex || 0;
      let w;
      e.rtlTranslate ? (w = "right") : (w = e.isHorizontal() ? "left" : "top");
      let P, A;
      m
        ? ((P = Math.floor(d / 2) + h + g), (A = Math.floor(d / 2) + h + p))
        : ((P = d + (h - 1) + g), (A = h + p));
      const E = Math.max((C || 0) - A, 0),
        $ = Math.min((C || 0) + P, _.length - 1),
        b = (e.slidesGrid[E] || 0) - (e.slidesGrid[0] || 0);
      Object.assign(e.virtual, {
        from: E,
        to: $,
        offset: b,
        slidesGrid: e.slidesGrid,
      });
      function T() {
        e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.lazy && e.params.lazy.enabled && e.lazy.load(),
          r("virtualUpdate");
      }
      if (y === E && v === $ && !f) {
        e.slidesGrid !== x && b !== S && e.slides.css(w, `${b}px`),
          e.updateProgress(),
          r("virtualUpdate");
        return;
      }
      if (e.params.virtual.renderExternal) {
        e.params.virtual.renderExternal.call(e, {
          offset: b,
          from: E,
          to: $,
          slides: (function () {
            const L = [];
            for (let I = E; I <= $; I += 1) L.push(_[I]);
            return L;
          })(),
        }),
          e.params.virtual.renderExternalUpdate ? T() : r("virtualUpdate");
        return;
      }
      const O = [],
        D = [];
      if (f) e.$wrapperEl.find(`.${e.params.slideClass}`).remove();
      else
        for (let k = y; k <= v; k += 1)
          (k < E || k > $) &&
            e.$wrapperEl
              .find(`.${e.params.slideClass}[data-swiper-slide-index="${k}"]`)
              .remove();
      for (let k = 0; k < _.length; k += 1)
        k >= E &&
          k <= $ &&
          (typeof v == "undefined" || f
            ? D.push(k)
            : (k > v && D.push(k), k < y && O.push(k)));
      D.forEach((k) => {
        e.$wrapperEl.append(s(_[k], k));
      }),
        O.sort((k, L) => L - k).forEach((k) => {
          e.$wrapperEl.prepend(s(_[k], k));
        }),
        e.$wrapperEl.children(".swiper-slide").css(w, `${b}px`),
        T();
    }
    function o(f) {
      if (typeof f == "object" && "length" in f)
        for (let d = 0; d < f.length; d += 1)
          f[d] && e.virtual.slides.push(f[d]);
      else e.virtual.slides.push(f);
      a(!0);
    }
    function l(f) {
      const d = e.activeIndex;
      let h = d + 1,
        m = 1;
      if (Array.isArray(f)) {
        for (let p = 0; p < f.length; p += 1)
          f[p] && e.virtual.slides.unshift(f[p]);
        (h = d + f.length), (m = f.length);
      } else e.virtual.slides.unshift(f);
      if (e.params.virtual.cache) {
        const p = e.virtual.cache,
          g = {};
        Object.keys(p).forEach((y) => {
          const v = p[y],
            _ = v.attr("data-swiper-slide-index");
          _ && v.attr("data-swiper-slide-index", parseInt(_, 10) + m),
            (g[parseInt(y, 10) + m] = v);
        }),
          (e.virtual.cache = g);
      }
      a(!0), e.slideTo(h, 0);
    }
    function c(f) {
      if (typeof f == "undefined" || f === null) return;
      let d = e.activeIndex;
      if (Array.isArray(f))
        for (let h = f.length - 1; h >= 0; h -= 1)
          e.virtual.slides.splice(f[h], 1),
            e.params.virtual.cache && delete e.virtual.cache[f[h]],
            f[h] < d && (d -= 1),
            (d = Math.max(d, 0));
      else
        e.virtual.slides.splice(f, 1),
          e.params.virtual.cache && delete e.virtual.cache[f],
          f < d && (d -= 1),
          (d = Math.max(d, 0));
      a(!0), e.slideTo(d, 0);
    }
    function u() {
      (e.virtual.slides = []),
        e.params.virtual.cache && (e.virtual.cache = {}),
        a(!0),
        e.slideTo(0, 0);
    }
    n("beforeInit", () => {
      e.params.virtual.enabled &&
        ((e.virtual.slides = e.params.virtual.slides),
        e.classNames.push(`${e.params.containerModifierClass}virtual`),
        (e.params.watchSlidesProgress = !0),
        (e.originalParams.watchSlidesProgress = !0),
        e.params.initialSlide || a());
    }),
      n("setTranslate", () => {
        e.params.virtual.enabled &&
          (e.params.cssMode && !e._immediateVirtual
            ? (clearTimeout(i),
              (i = setTimeout(() => {
                a();
              }, 100)))
            : a());
      }),
      n("init update resize", () => {
        e.params.virtual.enabled &&
          e.params.cssMode &&
          bi(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
      }),
      Object.assign(e.virtual, {
        appendSlide: o,
        prependSlide: l,
        removeSlide: c,
        removeAllSlides: u,
        update: a,
      });
  }
  function Nh({ swiper: e, extendParams: t, on: n, emit: r }) {
    const i = Me(),
      s = ce();
    (e.keyboard = { enabled: !1 }),
      t({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } });
    function a(c) {
      if (!e.enabled) return;
      const { rtlTranslate: u } = e;
      let f = c;
      f.originalEvent && (f = f.originalEvent);
      const d = f.keyCode || f.charCode,
        h = e.params.keyboard.pageUpDown,
        m = h && d === 33,
        p = h && d === 34,
        g = d === 37,
        y = d === 39,
        v = d === 38,
        _ = d === 40;
      if (
        (!e.allowSlideNext &&
          ((e.isHorizontal() && y) || (e.isVertical() && _) || p)) ||
        (!e.allowSlidePrev &&
          ((e.isHorizontal() && g) || (e.isVertical() && v) || m))
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
        if (e.params.keyboard.onlyInViewport && (m || p || g || y || v || _)) {
          let x = !1;
          if (
            e.$el.parents(`.${e.params.slideClass}`).length > 0 &&
            e.$el.parents(`.${e.params.slideActiveClass}`).length === 0
          )
            return;
          const S = e.$el,
            C = S[0].clientWidth,
            w = S[0].clientHeight,
            P = s.innerWidth,
            A = s.innerHeight,
            E = e.$el.offset();
          u && (E.left -= e.$el[0].scrollLeft);
          const $ = [
            [E.left, E.top],
            [E.left + C, E.top],
            [E.left, E.top + w],
            [E.left + C, E.top + w],
          ];
          for (let b = 0; b < $.length; b += 1) {
            const T = $[b];
            if (T[0] >= 0 && T[0] <= P && T[1] >= 0 && T[1] <= A) {
              if (T[0] === 0 && T[1] === 0) continue;
              x = !0;
            }
          }
          if (!x) return;
        }
        e.isHorizontal()
          ? ((m || p || g || y) &&
              (f.preventDefault ? f.preventDefault() : (f.returnValue = !1)),
            (((p || y) && !u) || ((m || g) && u)) && e.slideNext(),
            (((m || g) && !u) || ((p || y) && u)) && e.slidePrev())
          : ((m || p || v || _) &&
              (f.preventDefault ? f.preventDefault() : (f.returnValue = !1)),
            (p || _) && e.slideNext(),
            (m || v) && e.slidePrev()),
          r("keyPress", d);
      }
    }
    function o() {
      e.keyboard.enabled || (N(i).on("keydown", a), (e.keyboard.enabled = !0));
    }
    function l() {
      e.keyboard.enabled && (N(i).off("keydown", a), (e.keyboard.enabled = !1));
    }
    n("init", () => {
      e.params.keyboard.enabled && o();
    }),
      n("destroy", () => {
        e.keyboard.enabled && l();
      }),
      Object.assign(e.keyboard, { enable: o, disable: l });
  }
  function Fh({ swiper: e, extendParams: t, on: n, emit: r }) {
    const i = ce();
    t({
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
      (e.mousewheel = { enabled: !1 });
    let s,
      a = Ct(),
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
      e.enabled && (e.mouseEntered = !0);
    }
    function f() {
      e.enabled && (e.mouseEntered = !1);
    }
    function d(v) {
      return (e.params.mousewheel.thresholdDelta &&
        v.delta < e.params.mousewheel.thresholdDelta) ||
        (e.params.mousewheel.thresholdTime &&
          Ct() - a < e.params.mousewheel.thresholdTime)
        ? !1
        : v.delta >= 6 && Ct() - a < 60
        ? !0
        : (v.direction < 0
            ? (!e.isEnd || e.params.loop) &&
              !e.animating &&
              (e.slideNext(), r("scroll", v.raw))
            : (!e.isBeginning || e.params.loop) &&
              !e.animating &&
              (e.slidePrev(), r("scroll", v.raw)),
          (a = new i.Date().getTime()),
          !1);
    }
    function h(v) {
      const _ = e.params.mousewheel;
      if (v.direction < 0) {
        if (e.isEnd && !e.params.loop && _.releaseOnEdges) return !0;
      } else if (e.isBeginning && !e.params.loop && _.releaseOnEdges) return !0;
      return !1;
    }
    function m(v) {
      let _ = v,
        x = !0;
      if (!e.enabled) return;
      const S = e.params.mousewheel;
      e.params.cssMode && _.preventDefault();
      let C = e.$el;
      if (
        (e.params.mousewheel.eventsTarget !== "container" &&
          (C = N(e.params.mousewheel.eventsTarget)),
        !e.mouseEntered && !C[0].contains(_.target) && !S.releaseOnEdges)
      )
        return !0;
      _.originalEvent && (_ = _.originalEvent);
      let w = 0;
      const P = e.rtlTranslate ? -1 : 1,
        A = c(_);
      if (S.forceToAxis)
        if (e.isHorizontal())
          if (Math.abs(A.pixelX) > Math.abs(A.pixelY)) w = -A.pixelX * P;
          else return !0;
        else if (Math.abs(A.pixelY) > Math.abs(A.pixelX)) w = -A.pixelY;
        else return !0;
      else
        w = Math.abs(A.pixelX) > Math.abs(A.pixelY) ? -A.pixelX * P : -A.pixelY;
      if (w === 0) return !0;
      S.invert && (w = -w);
      let E = e.getTranslate() + w * S.sensitivity;
      if (
        (E >= e.minTranslate() && (E = e.minTranslate()),
        E <= e.maxTranslate() && (E = e.maxTranslate()),
        (x = e.params.loop
          ? !0
          : !(E === e.minTranslate() || E === e.maxTranslate())),
        x && e.params.nested && _.stopPropagation(),
        !e.params.freeMode || !e.params.freeMode.enabled)
      ) {
        const $ = {
          time: Ct(),
          delta: Math.abs(w),
          direction: Math.sign(w),
          raw: v,
        };
        l.length >= 2 && l.shift();
        const b = l.length ? l[l.length - 1] : void 0;
        if (
          (l.push($),
          b
            ? ($.direction !== b.direction ||
                $.delta > b.delta ||
                $.time > b.time + 150) &&
              d($)
            : d($),
          h($))
        )
          return !0;
      } else {
        const $ = { time: Ct(), delta: Math.abs(w), direction: Math.sign(w) },
          b =
            o &&
            $.time < o.time + 500 &&
            $.delta <= o.delta &&
            $.direction === o.direction;
        if (!b) {
          (o = void 0), e.params.loop && e.loopFix();
          let T = e.getTranslate() + w * S.sensitivity;
          const O = e.isBeginning,
            D = e.isEnd;
          if (
            (T >= e.minTranslate() && (T = e.minTranslate()),
            T <= e.maxTranslate() && (T = e.maxTranslate()),
            e.setTransition(0),
            e.setTranslate(T),
            e.updateProgress(),
            e.updateActiveIndex(),
            e.updateSlidesClasses(),
            ((!O && e.isBeginning) || (!D && e.isEnd)) &&
              e.updateSlidesClasses(),
            e.params.freeMode.sticky)
          ) {
            clearTimeout(s), (s = void 0), l.length >= 15 && l.shift();
            const k = l.length ? l[l.length - 1] : void 0,
              L = l[0];
            if (
              (l.push($),
              k && ($.delta > k.delta || $.direction !== k.direction))
            )
              l.splice(0);
            else if (
              l.length >= 15 &&
              $.time - L.time < 500 &&
              L.delta - $.delta >= 1 &&
              $.delta <= 6
            ) {
              const I = w > 0 ? 0.8 : 0.2;
              (o = $),
                l.splice(0),
                (s = Dn(() => {
                  e.slideToClosest(e.params.speed, !0, void 0, I);
                }, 0));
            }
            s ||
              (s = Dn(() => {
                (o = $),
                  l.splice(0),
                  e.slideToClosest(e.params.speed, !0, void 0, 0.5);
              }, 500));
          }
          if (
            (b || r("scroll", _),
            e.params.autoplay &&
              e.params.autoplayDisableOnInteraction &&
              e.autoplay.stop(),
            T === e.minTranslate() || T === e.maxTranslate())
          )
            return !0;
        }
      }
      return _.preventDefault ? _.preventDefault() : (_.returnValue = !1), !1;
    }
    function p(v) {
      let _ = e.$el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (_ = N(e.params.mousewheel.eventsTarget)),
        _[v]("mouseenter", u),
        _[v]("mouseleave", f),
        _[v]("wheel", m);
    }
    function g() {
      return e.params.cssMode
        ? (e.wrapperEl.removeEventListener("wheel", m), !0)
        : e.mousewheel.enabled
        ? !1
        : (p("on"), (e.mousewheel.enabled = !0), !0);
    }
    function y() {
      return e.params.cssMode
        ? (e.wrapperEl.addEventListener(event, m), !0)
        : e.mousewheel.enabled
        ? (p("off"), (e.mousewheel.enabled = !1), !0)
        : !1;
    }
    n("init", () => {
      !e.params.mousewheel.enabled && e.params.cssMode && y(),
        e.params.mousewheel.enabled && g();
    }),
      n("destroy", () => {
        e.params.cssMode && g(), e.mousewheel.enabled && y();
      }),
      Object.assign(e.mousewheel, { enable: g, disable: y });
  }
  function Ea(e, t, n, r) {
    const i = Me();
    return (
      e.params.createElements &&
        Object.keys(r).forEach((s) => {
          if (!n[s] && n.auto === !0) {
            let a = e.$el.children(`.${r[s]}`)[0];
            a ||
              ((a = i.createElement("div")),
              (a.className = r[s]),
              e.$el.append(a)),
              (n[s] = a),
              (t[s] = a);
          }
        }),
      n
    );
  }
  function Hh({ swiper: e, extendParams: t, on: n, emit: r }) {
    t({
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
      (e.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null,
      });
    function i(h) {
      let m;
      return (
        h &&
          ((m = N(h)),
          e.params.uniqueNavElements &&
            typeof h == "string" &&
            m.length > 1 &&
            e.$el.find(h).length === 1 &&
            (m = e.$el.find(h))),
        m
      );
    }
    function s(h, m) {
      const p = e.params.navigation;
      h &&
        h.length > 0 &&
        (h[m ? "addClass" : "removeClass"](p.disabledClass),
        h[0] && h[0].tagName === "BUTTON" && (h[0].disabled = m),
        e.params.watchOverflow &&
          e.enabled &&
          h[e.isLocked ? "addClass" : "removeClass"](p.lockClass));
    }
    function a() {
      if (e.params.loop) return;
      const { $nextEl: h, $prevEl: m } = e.navigation;
      s(m, e.isBeginning && !e.params.rewind),
        s(h, e.isEnd && !e.params.rewind);
    }
    function o(h) {
      h.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
          (e.slidePrev(), r("navigationPrev"));
    }
    function l(h) {
      h.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) &&
          (e.slideNext(), r("navigationNext"));
    }
    function c() {
      const h = e.params.navigation;
      if (
        ((e.params.navigation = Ea(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !(h.nextEl || h.prevEl))
      )
        return;
      const m = i(h.nextEl),
        p = i(h.prevEl);
      m && m.length > 0 && m.on("click", l),
        p && p.length > 0 && p.on("click", o),
        Object.assign(e.navigation, {
          $nextEl: m,
          nextEl: m && m[0],
          $prevEl: p,
          prevEl: p && p[0],
        }),
        e.enabled ||
          (m && m.addClass(h.lockClass), p && p.addClass(h.lockClass));
    }
    function u() {
      const { $nextEl: h, $prevEl: m } = e.navigation;
      h &&
        h.length &&
        (h.off("click", l), h.removeClass(e.params.navigation.disabledClass)),
        m &&
          m.length &&
          (m.off("click", o), m.removeClass(e.params.navigation.disabledClass));
    }
    n("init", () => {
      e.params.navigation.enabled === !1 ? d() : (c(), a());
    }),
      n("toEdge fromEdge lock unlock", () => {
        a();
      }),
      n("destroy", () => {
        u();
      }),
      n("enable disable", () => {
        const { $nextEl: h, $prevEl: m } = e.navigation;
        h &&
          h[e.enabled ? "removeClass" : "addClass"](
            e.params.navigation.lockClass
          ),
          m &&
            m[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            );
      }),
      n("click", (h, m) => {
        const { $nextEl: p, $prevEl: g } = e.navigation,
          y = m.target;
        if (e.params.navigation.hideOnClick && !N(y).is(g) && !N(y).is(p)) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === y || e.pagination.el.contains(y))
          )
            return;
          let v;
          p
            ? (v = p.hasClass(e.params.navigation.hiddenClass))
            : g && (v = g.hasClass(e.params.navigation.hiddenClass)),
            r(v === !0 ? "navigationShow" : "navigationHide"),
            p && p.toggleClass(e.params.navigation.hiddenClass),
            g && g.toggleClass(e.params.navigation.hiddenClass);
        }
      });
    const f = () => {
        e.$el.removeClass(e.params.navigation.navigationDisabledClass),
          c(),
          a();
      },
      d = () => {
        e.$el.addClass(e.params.navigation.navigationDisabledClass), u();
      };
    Object.assign(e.navigation, {
      enable: f,
      disable: d,
      update: a,
      init: c,
      destroy: u,
    });
  }
  function _n(e = "") {
    return `.${e
      .trim()
      .replace(/([\.:!\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }
  function qh({ swiper: e, extendParams: t, on: n, emit: r }) {
    const i = "swiper-pagination";
    t({
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
      (e.pagination = { el: null, $el: null, bullets: [] });
    let s,
      a = 0;
    function o() {
      return (
        !e.params.pagination.el ||
        !e.pagination.el ||
        !e.pagination.$el ||
        e.pagination.$el.length === 0
      );
    }
    function l(p, g) {
      const { bulletActiveClass: y } = e.params.pagination;
      p[g]().addClass(`${y}-${g}`)[g]().addClass(`${y}-${g}-${g}`);
    }
    function c() {
      const p = e.rtl,
        g = e.params.pagination;
      if (o()) return;
      const y =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        v = e.pagination.$el;
      let _;
      const x = e.params.loop
        ? Math.ceil((y - e.loopedSlides * 2) / e.params.slidesPerGroup)
        : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((_ = Math.ceil(
              (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
            )),
            _ > y - 1 - e.loopedSlides * 2 && (_ -= y - e.loopedSlides * 2),
            _ > x - 1 && (_ -= x),
            _ < 0 && e.params.paginationType !== "bullets" && (_ = x + _))
          : typeof e.snapIndex != "undefined"
          ? (_ = e.snapIndex)
          : (_ = e.activeIndex || 0),
        g.type === "bullets" &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const S = e.pagination.bullets;
        let C, w, P;
        if (
          (g.dynamicBullets &&
            ((s = S.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
            v.css(
              e.isHorizontal() ? "width" : "height",
              `${s * (g.dynamicMainBullets + 4)}px`
            ),
            g.dynamicMainBullets > 1 &&
              e.previousIndex !== void 0 &&
              ((a += _ - (e.previousIndex - e.loopedSlides || 0)),
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
            const E = N(A),
              $ = E.index();
            $ === _ && E.addClass(g.bulletActiveClass),
              g.dynamicBullets &&
                ($ >= C && $ <= w && E.addClass(`${g.bulletActiveClass}-main`),
                $ === C && l(E, "prev"),
                $ === w && l(E, "next"));
          });
        else {
          const A = S.eq(_),
            E = A.index();
          if ((A.addClass(g.bulletActiveClass), g.dynamicBullets)) {
            const $ = S.eq(C),
              b = S.eq(w);
            for (let T = C; T <= w; T += 1)
              S.eq(T).addClass(`${g.bulletActiveClass}-main`);
            if (e.params.loop)
              if (E >= S.length) {
                for (let T = g.dynamicMainBullets; T >= 0; T -= 1)
                  S.eq(S.length - T).addClass(`${g.bulletActiveClass}-main`);
                S.eq(S.length - g.dynamicMainBullets - 1).addClass(
                  `${g.bulletActiveClass}-prev`
                );
              } else l($, "prev"), l(b, "next");
            else l($, "prev"), l(b, "next");
          }
        }
        if (g.dynamicBullets) {
          const A = Math.min(S.length, g.dynamicMainBullets + 4),
            E = (s * A - s) / 2 - P * s,
            $ = p ? "right" : "left";
          S.css(e.isHorizontal() ? $ : "top", `${E}px`);
        }
      }
      if (
        (g.type === "fraction" &&
          (v.find(_n(g.currentClass)).text(g.formatFractionCurrent(_ + 1)),
          v.find(_n(g.totalClass)).text(g.formatFractionTotal(x))),
        g.type === "progressbar")
      ) {
        let S;
        g.progressbarOpposite
          ? (S = e.isHorizontal() ? "vertical" : "horizontal")
          : (S = e.isHorizontal() ? "horizontal" : "vertical");
        const C = (_ + 1) / x;
        let w = 1,
          P = 1;
        S === "horizontal" ? (w = C) : (P = C),
          v
            .find(_n(g.progressbarFillClass))
            .transform(`translate3d(0,0,0) scaleX(${w}) scaleY(${P})`)
            .transition(e.params.speed);
      }
      g.type === "custom" && g.renderCustom
        ? (v.html(g.renderCustom(e, _ + 1, x)), r("paginationRender", v[0]))
        : r("paginationUpdate", v[0]),
        e.params.watchOverflow &&
          e.enabled &&
          v[e.isLocked ? "addClass" : "removeClass"](g.lockClass);
    }
    function u() {
      const p = e.params.pagination;
      if (o()) return;
      const g =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        y = e.pagination.$el;
      let v = "";
      if (p.type === "bullets") {
        let _ = e.params.loop
          ? Math.ceil((g - e.loopedSlides * 2) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode &&
          e.params.freeMode.enabled &&
          !e.params.loop &&
          _ > g &&
          (_ = g);
        for (let x = 0; x < _; x += 1)
          p.renderBullet
            ? (v += p.renderBullet.call(e, x, p.bulletClass))
            : (v += `<${p.bulletElement} class="${p.bulletClass}"></${p.bulletElement}>`);
        y.html(v), (e.pagination.bullets = y.find(_n(p.bulletClass)));
      }
      p.type === "fraction" &&
        (p.renderFraction
          ? (v = p.renderFraction.call(e, p.currentClass, p.totalClass))
          : (v = `<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),
        y.html(v)),
        p.type === "progressbar" &&
          (p.renderProgressbar
            ? (v = p.renderProgressbar.call(e, p.progressbarFillClass))
            : (v = `<span class="${p.progressbarFillClass}"></span>`),
          y.html(v)),
        p.type !== "custom" && r("paginationRender", e.pagination.$el[0]);
    }
    function f() {
      e.params.pagination = Ea(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        { el: "swiper-pagination" }
      );
      const p = e.params.pagination;
      if (!p.el) return;
      let g = N(p.el);
      g.length !== 0 &&
        (e.params.uniqueNavElements &&
          typeof p.el == "string" &&
          g.length > 1 &&
          ((g = e.$el.find(p.el)),
          g.length > 1 &&
            (g = g.filter((y) => N(y).parents(".swiper")[0] === e.el))),
        p.type === "bullets" && p.clickable && g.addClass(p.clickableClass),
        g.addClass(p.modifierClass + p.type),
        g.addClass(e.isHorizontal() ? p.horizontalClass : p.verticalClass),
        p.type === "bullets" &&
          p.dynamicBullets &&
          (g.addClass(`${p.modifierClass}${p.type}-dynamic`),
          (a = 0),
          p.dynamicMainBullets < 1 && (p.dynamicMainBullets = 1)),
        p.type === "progressbar" &&
          p.progressbarOpposite &&
          g.addClass(p.progressbarOppositeClass),
        p.clickable &&
          g.on("click", _n(p.bulletClass), function (v) {
            v.preventDefault();
            let _ = N(this).index() * e.params.slidesPerGroup;
            e.params.loop && (_ += e.loopedSlides), e.slideTo(_);
          }),
        Object.assign(e.pagination, { $el: g, el: g[0] }),
        e.enabled || g.addClass(p.lockClass));
    }
    function d() {
      const p = e.params.pagination;
      if (o()) return;
      const g = e.pagination.$el;
      g.removeClass(p.hiddenClass),
        g.removeClass(p.modifierClass + p.type),
        g.removeClass(e.isHorizontal() ? p.horizontalClass : p.verticalClass),
        e.pagination.bullets &&
          e.pagination.bullets.removeClass &&
          e.pagination.bullets.removeClass(p.bulletActiveClass),
        p.clickable && g.off("click", _n(p.bulletClass));
    }
    n("init", () => {
      e.params.pagination.enabled === !1 ? m() : (f(), u(), c());
    }),
      n("activeIndexChange", () => {
        (e.params.loop || typeof e.snapIndex == "undefined") && c();
      }),
      n("snapIndexChange", () => {
        e.params.loop || c();
      }),
      n("slidesLengthChange", () => {
        e.params.loop && (u(), c());
      }),
      n("snapGridLengthChange", () => {
        e.params.loop || (u(), c());
      }),
      n("destroy", () => {
        d();
      }),
      n("enable disable", () => {
        const { $el: p } = e.pagination;
        p &&
          p[e.enabled ? "removeClass" : "addClass"](
            e.params.pagination.lockClass
          );
      }),
      n("lock unlock", () => {
        c();
      }),
      n("click", (p, g) => {
        const y = g.target,
          { $el: v } = e.pagination;
        if (
          e.params.pagination.el &&
          e.params.pagination.hideOnClick &&
          v &&
          v.length > 0 &&
          !N(y).hasClass(e.params.pagination.bulletClass)
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && y === e.navigation.nextEl) ||
              (e.navigation.prevEl && y === e.navigation.prevEl))
          )
            return;
          const _ = v.hasClass(e.params.pagination.hiddenClass);
          r(_ === !0 ? "paginationShow" : "paginationHide"),
            v.toggleClass(e.params.pagination.hiddenClass);
        }
      });
    const h = () => {
        e.$el.removeClass(e.params.pagination.paginationDisabledClass),
          e.pagination.$el &&
            e.pagination.$el.removeClass(
              e.params.pagination.paginationDisabledClass
            ),
          f(),
          u(),
          c();
      },
      m = () => {
        e.$el.addClass(e.params.pagination.paginationDisabledClass),
          e.pagination.$el &&
            e.pagination.$el.addClass(
              e.params.pagination.paginationDisabledClass
            ),
          d();
      };
    Object.assign(e.pagination, {
      enable: h,
      disable: m,
      render: u,
      update: c,
      init: f,
      destroy: d,
    });
  }
  function Bh({ swiper: e, extendParams: t, on: n, emit: r }) {
    const i = Me();
    let s = !1,
      a = null,
      o = null,
      l,
      c,
      u,
      f;
    t({
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
      (e.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null });
    function d() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const { scrollbar: $, rtlTranslate: b, progress: T } = e,
        { $dragEl: O, $el: D } = $,
        k = e.params.scrollbar;
      let L = c,
        I = (u - c) * T;
      b
        ? ((I = -I), I > 0 ? ((L = c - I), (I = 0)) : -I + c > u && (L = u + I))
        : I < 0
        ? ((L = c + I), (I = 0))
        : I + c > u && (L = u - I),
        e.isHorizontal()
          ? (O.transform(`translate3d(${I}px, 0, 0)`),
            (O[0].style.width = `${L}px`))
          : (O.transform(`translate3d(0px, ${I}px, 0)`),
            (O[0].style.height = `${L}px`)),
        k.hide &&
          (clearTimeout(a),
          (D[0].style.opacity = 1),
          (a = setTimeout(() => {
            (D[0].style.opacity = 0), D.transition(400);
          }, 1e3)));
    }
    function h($) {
      !e.params.scrollbar.el ||
        !e.scrollbar.el ||
        e.scrollbar.$dragEl.transition($);
    }
    function m() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const { scrollbar: $ } = e,
        { $dragEl: b, $el: T } = $;
      (b[0].style.width = ""),
        (b[0].style.height = ""),
        (u = e.isHorizontal() ? T[0].offsetWidth : T[0].offsetHeight),
        (f =
          e.size /
          (e.virtualSize +
            e.params.slidesOffsetBefore -
            (e.params.centeredSlides ? e.snapGrid[0] : 0))),
        e.params.scrollbar.dragSize === "auto"
          ? (c = u * f)
          : (c = parseInt(e.params.scrollbar.dragSize, 10)),
        e.isHorizontal()
          ? (b[0].style.width = `${c}px`)
          : (b[0].style.height = `${c}px`),
        f >= 1 ? (T[0].style.display = "none") : (T[0].style.display = ""),
        e.params.scrollbar.hide && (T[0].style.opacity = 0),
        e.params.watchOverflow &&
          e.enabled &&
          $.$el[e.isLocked ? "addClass" : "removeClass"](
            e.params.scrollbar.lockClass
          );
    }
    function p($) {
      return e.isHorizontal()
        ? $.type === "touchstart" || $.type === "touchmove"
          ? $.targetTouches[0].clientX
          : $.clientX
        : $.type === "touchstart" || $.type === "touchmove"
        ? $.targetTouches[0].clientY
        : $.clientY;
    }
    function g($) {
      const { scrollbar: b, rtlTranslate: T } = e,
        { $el: O } = b;
      let D;
      (D =
        (p($) -
          O.offset()[e.isHorizontal() ? "left" : "top"] -
          (l !== null ? l : c / 2)) /
        (u - c)),
        (D = Math.max(Math.min(D, 1), 0)),
        T && (D = 1 - D);
      const k = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * D;
      e.updateProgress(k),
        e.setTranslate(k),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    }
    function y($) {
      const b = e.params.scrollbar,
        { scrollbar: T, $wrapperEl: O } = e,
        { $el: D, $dragEl: k } = T;
      (s = !0),
        (l =
          $.target === k[0] || $.target === k
            ? p($) -
              $.target.getBoundingClientRect()[
                e.isHorizontal() ? "left" : "top"
              ]
            : null),
        $.preventDefault(),
        $.stopPropagation(),
        O.transition(100),
        k.transition(100),
        g($),
        clearTimeout(o),
        D.transition(0),
        b.hide && D.css("opacity", 1),
        e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
        r("scrollbarDragStart", $);
    }
    function v($) {
      const { scrollbar: b, $wrapperEl: T } = e,
        { $el: O, $dragEl: D } = b;
      s &&
        ($.preventDefault ? $.preventDefault() : ($.returnValue = !1),
        g($),
        T.transition(0),
        O.transition(0),
        D.transition(0),
        r("scrollbarDragMove", $));
    }
    function _($) {
      const b = e.params.scrollbar,
        { scrollbar: T, $wrapperEl: O } = e,
        { $el: D } = T;
      s &&
        ((s = !1),
        e.params.cssMode &&
          (e.$wrapperEl.css("scroll-snap-type", ""), O.transition("")),
        b.hide &&
          (clearTimeout(o),
          (o = Dn(() => {
            D.css("opacity", 0), D.transition(400);
          }, 1e3))),
        r("scrollbarDragEnd", $),
        b.snapOnRelease && e.slideToClosest());
    }
    function x($) {
      const {
          scrollbar: b,
          touchEventsTouch: T,
          touchEventsDesktop: O,
          params: D,
          support: k,
        } = e,
        L = b.$el;
      if (!L) return;
      const I = L[0],
        R =
          k.passiveListener && D.passiveListeners
            ? { passive: !1, capture: !1 }
            : !1,
        M =
          k.passiveListener && D.passiveListeners
            ? { passive: !0, capture: !1 }
            : !1;
      if (!I) return;
      const V = $ === "on" ? "addEventListener" : "removeEventListener";
      k.touch
        ? (I[V](T.start, y, R), I[V](T.move, v, R), I[V](T.end, _, M))
        : (I[V](O.start, y, R), i[V](O.move, v, R), i[V](O.end, _, M));
    }
    function S() {
      !e.params.scrollbar.el || !e.scrollbar.el || x("on");
    }
    function C() {
      !e.params.scrollbar.el || !e.scrollbar.el || x("off");
    }
    function w() {
      const { scrollbar: $, $el: b } = e;
      e.params.scrollbar = Ea(
        e,
        e.originalParams.scrollbar,
        e.params.scrollbar,
        { el: "swiper-scrollbar" }
      );
      const T = e.params.scrollbar;
      if (!T.el) return;
      let O = N(T.el);
      e.params.uniqueNavElements &&
        typeof T.el == "string" &&
        O.length > 1 &&
        b.find(T.el).length === 1 &&
        (O = b.find(T.el)),
        O.addClass(e.isHorizontal() ? T.horizontalClass : T.verticalClass);
      let D = O.find(`.${e.params.scrollbar.dragClass}`);
      D.length === 0 &&
        ((D = N(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
        O.append(D)),
        Object.assign($, { $el: O, el: O[0], $dragEl: D, dragEl: D[0] }),
        T.draggable && S(),
        O &&
          O[e.enabled ? "removeClass" : "addClass"](
            e.params.scrollbar.lockClass
          );
    }
    function P() {
      const $ = e.params.scrollbar,
        b = e.scrollbar.$el;
      b &&
        b.removeClass(e.isHorizontal() ? $.horizontalClass : $.verticalClass),
        C();
    }
    n("init", () => {
      e.params.scrollbar.enabled === !1 ? E() : (w(), m(), d());
    }),
      n("update resize observerUpdate lock unlock", () => {
        m();
      }),
      n("setTranslate", () => {
        d();
      }),
      n("setTransition", ($, b) => {
        h(b);
      }),
      n("enable disable", () => {
        const { $el: $ } = e.scrollbar;
        $ &&
          $[e.enabled ? "removeClass" : "addClass"](
            e.params.scrollbar.lockClass
          );
      }),
      n("destroy", () => {
        P();
      });
    const A = () => {
        e.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass),
          e.scrollbar.$el &&
            e.scrollbar.$el.removeClass(
              e.params.scrollbar.scrollbarDisabledClass
            ),
          w(),
          m(),
          d();
      },
      E = () => {
        e.$el.addClass(e.params.scrollbar.scrollbarDisabledClass),
          e.scrollbar.$el &&
            e.scrollbar.$el.addClass(e.params.scrollbar.scrollbarDisabledClass),
          P();
      };
    Object.assign(e.scrollbar, {
      enable: A,
      disable: E,
      updateSize: m,
      setTranslate: d,
      init: w,
      destroy: P,
    });
  }
  function Vh({ swiper: e, extendParams: t, on: n }) {
    t({ parallax: { enabled: !1 } });
    const r = (a, o) => {
        const { rtl: l } = e,
          c = N(a),
          u = l ? -1 : 1,
          f = c.attr("data-swiper-parallax") || "0";
        let d = c.attr("data-swiper-parallax-x"),
          h = c.attr("data-swiper-parallax-y");
        const m = c.attr("data-swiper-parallax-scale"),
          p = c.attr("data-swiper-parallax-opacity");
        if (
          (d || h
            ? ((d = d || "0"), (h = h || "0"))
            : e.isHorizontal()
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
        const { $el: a, slides: o, progress: l, snapGrid: c } = e;
        a
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each((u) => {
            r(u, l);
          }),
          o.each((u, f) => {
            let d = u.progress;
            e.params.slidesPerGroup > 1 &&
              e.params.slidesPerView !== "auto" &&
              (d += Math.ceil(f / 2) - l * (c.length - 1)),
              (d = Math.min(Math.max(d, -1), 1)),
              N(u)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                )
                .each((h) => {
                  r(h, d);
                });
          });
      },
      s = (a = e.params.speed) => {
        const { $el: o } = e;
        o.find(
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
        ).each((l) => {
          const c = N(l);
          let u = parseInt(c.attr("data-swiper-parallax-duration"), 10) || a;
          a === 0 && (u = 0), c.transition(u);
        });
      };
    n("beforeInit", () => {
      e.params.parallax.enabled &&
        ((e.params.watchSlidesProgress = !0),
        (e.originalParams.watchSlidesProgress = !0));
    }),
      n("init", () => {
        e.params.parallax.enabled && i();
      }),
      n("setTranslate", () => {
        e.params.parallax.enabled && i();
      }),
      n("setTransition", (a, o) => {
        e.params.parallax.enabled && s(o);
      });
  }
  function Wh({ swiper: e, extendParams: t, on: n, emit: r }) {
    const i = ce();
    t({
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed",
      },
    }),
      (e.zoom = { enabled: !1 });
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
    Object.defineProperty(e.zoom, "scale", {
      get() {
        return h;
      },
      set(k) {
        if (h !== k) {
          const L = u.$imageEl ? u.$imageEl[0] : void 0,
            I = u.$slideEl ? u.$slideEl[0] : void 0;
          r("zoomChange", k, L, I);
        }
        h = k;
      },
    });
    function m(k) {
      if (k.targetTouches.length < 2) return 1;
      const L = k.targetTouches[0].pageX,
        I = k.targetTouches[0].pageY,
        R = k.targetTouches[1].pageX,
        M = k.targetTouches[1].pageY;
      return Math.sqrt(wt(R - L, 2) + wt(M - I, 2));
    }
    function p(k) {
      const L = e.support,
        I = e.params.zoom;
      if (((l = !1), (c = !1), !L.gestures)) {
        if (
          k.type !== "touchstart" ||
          (k.type === "touchstart" && k.targetTouches.length < 2)
        )
          return;
        (l = !0), (u.scaleStart = m(k));
      }
      if (
        (!u.$slideEl || !u.$slideEl.length) &&
        ((u.$slideEl = N(k.target).closest(`.${e.params.slideClass}`)),
        u.$slideEl.length === 0 && (u.$slideEl = e.slides.eq(e.activeIndex)),
        (u.$imageEl = u.$slideEl
          .find(`.${I.containerClass}`)
          .eq(0)
          .find("picture, img, svg, canvas, .swiper-zoom-target")
          .eq(0)),
        (u.$imageWrapEl = u.$imageEl.parent(`.${I.containerClass}`)),
        (u.maxRatio = u.$imageWrapEl.attr("data-swiper-zoom") || I.maxRatio),
        u.$imageWrapEl.length === 0)
      ) {
        u.$imageEl = void 0;
        return;
      }
      u.$imageEl && u.$imageEl.transition(0), (a = !0);
    }
    function g(k) {
      const L = e.support,
        I = e.params.zoom,
        R = e.zoom;
      if (!L.gestures) {
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
      L.gestures
        ? (R.scale = k.scale * s)
        : (R.scale = (u.scaleMove / u.scaleStart) * s),
        R.scale > u.maxRatio &&
          (R.scale = u.maxRatio - 1 + wt(R.scale - u.maxRatio + 1, 0.5)),
        R.scale < I.minRatio &&
          (R.scale = I.minRatio + 1 - wt(I.minRatio - R.scale + 1, 0.5)),
        u.$imageEl.transform(`translate3d(0,0,0) scale(${R.scale})`);
    }
    function y(k) {
      const L = e.device,
        I = e.support,
        R = e.params.zoom,
        M = e.zoom;
      if (!I.gestures) {
        if (
          !l ||
          !c ||
          k.type !== "touchend" ||
          (k.type === "touchend" && k.changedTouches.length < 2 && !L.android)
        )
          return;
        (l = !1), (c = !1);
      }
      !u.$imageEl ||
        u.$imageEl.length === 0 ||
        ((M.scale = Math.max(Math.min(M.scale, u.maxRatio), R.minRatio)),
        u.$imageEl
          .transition(e.params.speed)
          .transform(`translate3d(0,0,0) scale(${M.scale})`),
        (s = M.scale),
        (a = !1),
        M.scale === 1 && (u.$slideEl = void 0));
    }
    function v(k) {
      const L = e.device;
      !u.$imageEl ||
        u.$imageEl.length === 0 ||
        f.isTouched ||
        (L.android && k.cancelable && k.preventDefault(),
        (f.isTouched = !0),
        (f.touchesStart.x =
          k.type === "touchstart" ? k.targetTouches[0].pageX : k.pageX),
        (f.touchesStart.y =
          k.type === "touchstart" ? k.targetTouches[0].pageY : k.pageY));
    }
    function _(k) {
      const L = e.zoom;
      if (
        !u.$imageEl ||
        u.$imageEl.length === 0 ||
        ((e.allowClick = !1), !f.isTouched || !u.$slideEl)
      )
        return;
      f.isMoved ||
        ((f.width = u.$imageEl[0].offsetWidth),
        (f.height = u.$imageEl[0].offsetHeight),
        (f.startX = ya(u.$imageWrapEl[0], "x") || 0),
        (f.startY = ya(u.$imageWrapEl[0], "y") || 0),
        (u.slideWidth = u.$slideEl[0].offsetWidth),
        (u.slideHeight = u.$slideEl[0].offsetHeight),
        u.$imageWrapEl.transition(0));
      const I = f.width * L.scale,
        R = f.height * L.scale;
      if (!(I < u.slideWidth && R < u.slideHeight)) {
        if (
          ((f.minX = Math.min(u.slideWidth / 2 - I / 2, 0)),
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
            e.isHorizontal() &&
            ((Math.floor(f.minX) === Math.floor(f.startX) &&
              f.touchesCurrent.x < f.touchesStart.x) ||
              (Math.floor(f.maxX) === Math.floor(f.startX) &&
                f.touchesCurrent.x > f.touchesStart.x))
          ) {
            f.isTouched = !1;
            return;
          }
          if (
            !e.isHorizontal() &&
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
            (f.currentX = f.minX + 1 - wt(f.minX - f.currentX + 1, 0.8)),
          f.currentX > f.maxX &&
            (f.currentX = f.maxX - 1 + wt(f.currentX - f.maxX + 1, 0.8)),
          f.currentY < f.minY &&
            (f.currentY = f.minY + 1 - wt(f.minY - f.currentY + 1, 0.8)),
          f.currentY > f.maxY &&
            (f.currentY = f.maxY - 1 + wt(f.currentY - f.maxY + 1, 0.8)),
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
      const k = e.zoom;
      if (!u.$imageEl || u.$imageEl.length === 0) return;
      if (!f.isTouched || !f.isMoved) {
        (f.isTouched = !1), (f.isMoved = !1);
        return;
      }
      (f.isTouched = !1), (f.isMoved = !1);
      let L = 300,
        I = 300;
      const R = d.x * L,
        M = f.currentX + R,
        V = d.y * I,
        K = f.currentY + V;
      d.x !== 0 && (L = Math.abs((M - f.currentX) / d.x)),
        d.y !== 0 && (I = Math.abs((K - f.currentY) / d.y));
      const se = Math.max(L, I);
      (f.currentX = M), (f.currentY = K);
      const le = f.width * k.scale,
        fe = f.height * k.scale;
      (f.minX = Math.min(u.slideWidth / 2 - le / 2, 0)),
        (f.maxX = -f.minX),
        (f.minY = Math.min(u.slideHeight / 2 - fe / 2, 0)),
        (f.maxY = -f.minY),
        (f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX)),
        (f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY)),
        u.$imageWrapEl
          .transition(se)
          .transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`);
    }
    function S() {
      const k = e.zoom;
      u.$slideEl &&
        e.previousIndex !== e.activeIndex &&
        (u.$imageEl && u.$imageEl.transform("translate3d(0,0,0) scale(1)"),
        u.$imageWrapEl && u.$imageWrapEl.transform("translate3d(0,0,0)"),
        (k.scale = 1),
        (s = 1),
        (u.$slideEl = void 0),
        (u.$imageEl = void 0),
        (u.$imageWrapEl = void 0));
    }
    function C(k) {
      const L = e.zoom,
        I = e.params.zoom;
      if (
        (u.$slideEl ||
          (k &&
            k.target &&
            (u.$slideEl = N(k.target).closest(`.${e.params.slideClass}`)),
          u.$slideEl ||
            (e.params.virtual && e.params.virtual.enabled && e.virtual
              ? (u.$slideEl = e.$wrapperEl.children(
                  `.${e.params.slideActiveClass}`
                ))
              : (u.$slideEl = e.slides.eq(e.activeIndex))),
          (u.$imageEl = u.$slideEl
            .find(`.${I.containerClass}`)
            .eq(0)
            .find("picture, img, svg, canvas, .swiper-zoom-target")
            .eq(0)),
          (u.$imageWrapEl = u.$imageEl.parent(`.${I.containerClass}`))),
        !u.$imageEl ||
          u.$imageEl.length === 0 ||
          !u.$imageWrapEl ||
          u.$imageWrapEl.length === 0)
      )
        return;
      e.params.cssMode &&
        ((e.wrapperEl.style.overflow = "hidden"),
        (e.wrapperEl.style.touchAction = "none")),
        u.$slideEl.addClass(`${I.zoomedSlideClass}`);
      let R, M, V, K, se, le, fe, ge, be, Ye, Fe, Kt, De, He, ee, pe, Xe, Ze;
      typeof f.touchesStart.x == "undefined" && k
        ? ((R = k.type === "touchend" ? k.changedTouches[0].pageX : k.pageX),
          (M = k.type === "touchend" ? k.changedTouches[0].pageY : k.pageY))
        : ((R = f.touchesStart.x), (M = f.touchesStart.y)),
        (L.scale = u.$imageWrapEl.attr("data-swiper-zoom") || I.maxRatio),
        (s = u.$imageWrapEl.attr("data-swiper-zoom") || I.maxRatio),
        k
          ? ((Xe = u.$slideEl[0].offsetWidth),
            (Ze = u.$slideEl[0].offsetHeight),
            (V = u.$slideEl.offset().left + i.scrollX),
            (K = u.$slideEl.offset().top + i.scrollY),
            (se = V + Xe / 2 - R),
            (le = K + Ze / 2 - M),
            (be = u.$imageEl[0].offsetWidth),
            (Ye = u.$imageEl[0].offsetHeight),
            (Fe = be * L.scale),
            (Kt = Ye * L.scale),
            (De = Math.min(Xe / 2 - Fe / 2, 0)),
            (He = Math.min(Ze / 2 - Kt / 2, 0)),
            (ee = -De),
            (pe = -He),
            (fe = se * L.scale),
            (ge = le * L.scale),
            fe < De && (fe = De),
            fe > ee && (fe = ee),
            ge < He && (ge = He),
            ge > pe && (ge = pe))
          : ((fe = 0), (ge = 0)),
        u.$imageWrapEl
          .transition(300)
          .transform(`translate3d(${fe}px, ${ge}px,0)`),
        u.$imageEl
          .transition(300)
          .transform(`translate3d(0,0,0) scale(${L.scale})`);
    }
    function w() {
      const k = e.zoom,
        L = e.params.zoom;
      u.$slideEl ||
        (e.params.virtual && e.params.virtual.enabled && e.virtual
          ? (u.$slideEl = e.$wrapperEl.children(
              `.${e.params.slideActiveClass}`
            ))
          : (u.$slideEl = e.slides.eq(e.activeIndex)),
        (u.$imageEl = u.$slideEl
          .find(`.${L.containerClass}`)
          .eq(0)
          .find("picture, img, svg, canvas, .swiper-zoom-target")
          .eq(0)),
        (u.$imageWrapEl = u.$imageEl.parent(`.${L.containerClass}`))),
        !(
          !u.$imageEl ||
          u.$imageEl.length === 0 ||
          !u.$imageWrapEl ||
          u.$imageWrapEl.length === 0
        ) &&
          (e.params.cssMode &&
            ((e.wrapperEl.style.overflow = ""),
            (e.wrapperEl.style.touchAction = "")),
          (k.scale = 1),
          (s = 1),
          u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
          u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
          u.$slideEl.removeClass(`${L.zoomedSlideClass}`),
          (u.$slideEl = void 0));
    }
    function P(k) {
      const L = e.zoom;
      L.scale && L.scale !== 1 ? w() : C(k);
    }
    function A() {
      const k = e.support,
        L =
          e.touchEvents.start === "touchstart" &&
          k.passiveListener &&
          e.params.passiveListeners
            ? { passive: !0, capture: !1 }
            : !1,
        I = k.passiveListener ? { passive: !1, capture: !0 } : !0;
      return { passiveListener: L, activeListenerWithCapture: I };
    }
    function E() {
      return `.${e.params.slideClass}`;
    }
    function $(k) {
      const { passiveListener: L } = A(),
        I = E();
      e.$wrapperEl[k]("gesturestart", I, p, L),
        e.$wrapperEl[k]("gesturechange", I, g, L),
        e.$wrapperEl[k]("gestureend", I, y, L);
    }
    function b() {
      o || ((o = !0), $("on"));
    }
    function T() {
      o && ((o = !1), $("off"));
    }
    function O() {
      const k = e.zoom;
      if (k.enabled) return;
      k.enabled = !0;
      const L = e.support,
        { passiveListener: I, activeListenerWithCapture: R } = A(),
        M = E();
      L.gestures
        ? (e.$wrapperEl.on(e.touchEvents.start, b, I),
          e.$wrapperEl.on(e.touchEvents.end, T, I))
        : e.touchEvents.start === "touchstart" &&
          (e.$wrapperEl.on(e.touchEvents.start, M, p, I),
          e.$wrapperEl.on(e.touchEvents.move, M, g, R),
          e.$wrapperEl.on(e.touchEvents.end, M, y, I),
          e.touchEvents.cancel &&
            e.$wrapperEl.on(e.touchEvents.cancel, M, y, I)),
        e.$wrapperEl.on(
          e.touchEvents.move,
          `.${e.params.zoom.containerClass}`,
          _,
          R
        );
    }
    function D() {
      const k = e.zoom;
      if (!k.enabled) return;
      const L = e.support;
      k.enabled = !1;
      const { passiveListener: I, activeListenerWithCapture: R } = A(),
        M = E();
      L.gestures
        ? (e.$wrapperEl.off(e.touchEvents.start, b, I),
          e.$wrapperEl.off(e.touchEvents.end, T, I))
        : e.touchEvents.start === "touchstart" &&
          (e.$wrapperEl.off(e.touchEvents.start, M, p, I),
          e.$wrapperEl.off(e.touchEvents.move, M, g, R),
          e.$wrapperEl.off(e.touchEvents.end, M, y, I),
          e.touchEvents.cancel &&
            e.$wrapperEl.off(e.touchEvents.cancel, M, y, I)),
        e.$wrapperEl.off(
          e.touchEvents.move,
          `.${e.params.zoom.containerClass}`,
          _,
          R
        );
    }
    n("init", () => {
      e.params.zoom.enabled && O();
    }),
      n("destroy", () => {
        D();
      }),
      n("touchStart", (k, L) => {
        e.zoom.enabled && v(L);
      }),
      n("touchEnd", (k, L) => {
        e.zoom.enabled && x();
      }),
      n("doubleTap", (k, L) => {
        !e.animating &&
          e.params.zoom.enabled &&
          e.zoom.enabled &&
          e.params.zoom.toggle &&
          P(L);
      }),
      n("transitionEnd", () => {
        e.zoom.enabled && e.params.zoom.enabled && S();
      }),
      n("slideChange", () => {
        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && S();
      }),
      Object.assign(e.zoom, {
        enable: O,
        disable: D,
        in: C,
        out: w,
        toggle: P,
      });
  }
  function Yh({ swiper: e, extendParams: t, on: n, emit: r }) {
    t({
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
      (e.lazy = {});
    let i = !1,
      s = !1;
    function a(c, u = !0) {
      const f = e.params.lazy;
      if (typeof c == "undefined" || e.slides.length === 0) return;
      const h =
          e.virtual && e.params.virtual.enabled
            ? e.$wrapperEl.children(
                `.${e.params.slideClass}[data-swiper-slide-index="${c}"]`
              )
            : e.slides.eq(c),
        m = h.find(
          `.${f.elementClass}:not(.${f.loadedClass}):not(.${f.loadingClass})`
        );
      h.hasClass(f.elementClass) &&
        !h.hasClass(f.loadedClass) &&
        !h.hasClass(f.loadingClass) &&
        m.push(h[0]),
        m.length !== 0 &&
          m.each((p) => {
            const g = N(p);
            g.addClass(f.loadingClass);
            const y = g.attr("data-background"),
              v = g.attr("data-src"),
              _ = g.attr("data-srcset"),
              x = g.attr("data-sizes"),
              S = g.parent("picture");
            e.loadImage(g[0], v || y, _, x, !1, () => {
              if (
                !(
                  typeof e == "undefined" ||
                  e === null ||
                  !e ||
                  (e && !e.params) ||
                  e.destroyed
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
                          const w = N(C);
                          w.attr("data-srcset") &&
                            (w.attr("srcset", w.attr("data-srcset")),
                            w.removeAttr("data-srcset"));
                        }),
                      v && (g.attr("src", v), g.removeAttr("data-src"))),
                  g.addClass(f.loadedClass).removeClass(f.loadingClass),
                  h.find(`.${f.preloaderClass}`).remove(),
                  e.params.loop && u)
                ) {
                  const C = h.attr("data-swiper-slide-index");
                  if (h.hasClass(e.params.slideDuplicateClass)) {
                    const w = e.$wrapperEl.children(
                      `[data-swiper-slide-index="${C}"]:not(.${e.params.slideDuplicateClass})`
                    );
                    a(w.index(), !1);
                  } else {
                    const w = e.$wrapperEl.children(
                      `.${e.params.slideDuplicateClass}[data-swiper-slide-index="${C}"]`
                    );
                    a(w.index(), !1);
                  }
                }
                r("lazyImageReady", h[0], g[0]),
                  e.params.autoHeight && e.updateAutoHeight();
              }
            }),
              r("lazyImageLoad", h[0], g[0]);
          });
    }
    function o() {
      const { $wrapperEl: c, params: u, slides: f, activeIndex: d } = e,
        h = e.virtual && u.virtual.enabled,
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
        return h ? N(v).attr("data-swiper-slide-index") : N(v).index();
      }
      if ((s || (s = !0), e.params.watchSlidesProgress))
        c.children(`.${u.slideVisibleClass}`).each((v) => {
          const _ = h ? N(v).attr("data-swiper-slide-index") : N(v).index();
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
      const c = ce();
      if (!e || e.destroyed) return;
      const u = e.params.lazy.scrollingElement
          ? N(e.params.lazy.scrollingElement)
          : N(c),
        f = u[0] === c,
        d = f ? c.innerWidth : u[0].offsetWidth,
        h = f ? c.innerHeight : u[0].offsetHeight,
        m = e.$el.offset(),
        { rtlTranslate: p } = e;
      let g = !1;
      p && (m.left -= e.$el[0].scrollLeft);
      const y = [
        [m.left, m.top],
        [m.left + e.width, m.top],
        [m.left, m.top + e.height],
        [m.left + e.width, m.top + e.height],
      ];
      for (let _ = 0; _ < y.length; _ += 1) {
        const x = y[_];
        if (x[0] >= 0 && x[0] <= d && x[1] >= 0 && x[1] <= h) {
          if (x[0] === 0 && x[1] === 0) continue;
          g = !0;
        }
      }
      const v =
        e.touchEvents.start === "touchstart" &&
        e.support.passiveListener &&
        e.params.passiveListeners
          ? { passive: !0, capture: !1 }
          : !1;
      g ? (o(), u.off("scroll", l, v)) : i || ((i = !0), u.on("scroll", l, v));
    }
    n("beforeInit", () => {
      e.params.lazy.enabled &&
        e.params.preloadImages &&
        (e.params.preloadImages = !1);
    }),
      n("init", () => {
        e.params.lazy.enabled && (e.params.lazy.checkInView ? l() : o());
      }),
      n("scroll", () => {
        e.params.freeMode &&
          e.params.freeMode.enabled &&
          !e.params.freeMode.sticky &&
          o();
      }),
      n("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
        e.params.lazy.enabled && (e.params.lazy.checkInView ? l() : o());
      }),
      n("transitionStart", () => {
        e.params.lazy.enabled &&
          (e.params.lazy.loadOnTransitionStart ||
            (!e.params.lazy.loadOnTransitionStart && !s)) &&
          (e.params.lazy.checkInView ? l() : o());
      }),
      n("transitionEnd", () => {
        e.params.lazy.enabled &&
          !e.params.lazy.loadOnTransitionStart &&
          (e.params.lazy.checkInView ? l() : o());
      }),
      n("slideChange", () => {
        const {
          lazy: c,
          cssMode: u,
          watchSlidesProgress: f,
          touchReleaseOnEdges: d,
          resistanceRatio: h,
        } = e.params;
        c.enabled && (u || (f && (d || h === 0))) && o();
      }),
      n("destroy", () => {
        e.$el &&
          e.$el
            .find(`.${e.params.lazy.loadingClass}`)
            .removeClass(e.params.lazy.loadingClass);
      }),
      Object.assign(e.lazy, { load: o, loadInSlide: a });
  }
  function Xh({ swiper: e, extendParams: t, on: n }) {
    t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
      (e.controller = { control: void 0 });
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
      e.controller.spline ||
        (e.controller.spline = e.params.loop
          ? new r(e.slidesGrid, l.slidesGrid)
          : new r(e.snapGrid, l.snapGrid));
    }
    function s(l, c) {
      const u = e.controller.control;
      let f, d;
      const h = e.constructor;
      function m(p) {
        const g = e.rtlTranslate ? -e.translate : e.translate;
        e.params.controller.by === "slide" &&
          (i(p), (d = -e.controller.spline.interpolate(-g))),
          (!d || e.params.controller.by === "container") &&
            ((f =
              (p.maxTranslate() - p.minTranslate()) /
              (e.maxTranslate() - e.minTranslate())),
            (d = (g - e.minTranslate()) * f + p.minTranslate())),
          e.params.controller.inverse && (d = p.maxTranslate() - d),
          p.updateProgress(d),
          p.setTranslate(d, e),
          p.updateActiveIndex(),
          p.updateSlidesClasses();
      }
      if (Array.isArray(u))
        for (let p = 0; p < u.length; p += 1)
          u[p] !== c && u[p] instanceof h && m(u[p]);
      else u instanceof h && c !== u && m(u);
    }
    function a(l, c) {
      const u = e.constructor,
        f = e.controller.control;
      let d;
      function h(m) {
        m.setTransition(l, e),
          l !== 0 &&
            (m.transitionStart(),
            m.params.autoHeight &&
              Dn(() => {
                m.updateAutoHeight();
              }),
            m.$wrapperEl.transitionEnd(() => {
              f &&
                (m.params.loop &&
                  e.params.controller.by === "slide" &&
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
      e.controller.control &&
        e.controller.spline &&
        ((e.controller.spline = void 0), delete e.controller.spline);
    }
    n("beforeInit", () => {
      e.controller.control = e.params.controller.control;
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
        e.controller.control && e.controller.setTranslate(c, u);
      }),
      n("setTransition", (l, c, u) => {
        e.controller.control && e.controller.setTransition(c, u);
      }),
      Object.assign(e.controller, { setTranslate: s, setTransition: a });
  }
  function Gh({ swiper: e, extendParams: t, on: n }) {
    t({
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
      (e.a11y = { clicked: !1 });
    let r = null;
    function i(b) {
      const T = r;
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
      const T = e.params.a11y,
        O = N(b.target);
      e.navigation &&
        e.navigation.$nextEl &&
        O.is(e.navigation.$nextEl) &&
        ((e.isEnd && !e.params.loop) || e.slideNext(),
        e.isEnd ? i(T.lastSlideMessage) : i(T.nextSlideMessage)),
        e.navigation &&
          e.navigation.$prevEl &&
          O.is(e.navigation.$prevEl) &&
          ((e.isBeginning && !e.params.loop) || e.slidePrev(),
          e.isBeginning ? i(T.firstSlideMessage) : i(T.prevSlideMessage)),
        e.pagination &&
          O.is(_n(e.params.pagination.bulletClass)) &&
          O[0].click();
    }
    function y() {
      if (e.params.loop || e.params.rewind || !e.navigation) return;
      const { $nextEl: b, $prevEl: T } = e.navigation;
      T && T.length > 0 && (e.isBeginning ? (m(T), o(T)) : (p(T), a(T))),
        b && b.length > 0 && (e.isEnd ? (m(b), o(b)) : (p(b), a(b)));
    }
    function v() {
      return (
        e.pagination && e.pagination.bullets && e.pagination.bullets.length
      );
    }
    function _() {
      return v() && e.params.pagination.clickable;
    }
    function x() {
      const b = e.params.a11y;
      v() &&
        e.pagination.bullets.each((T) => {
          const O = N(T);
          e.params.pagination.clickable &&
            (a(O),
            e.params.pagination.renderBullet ||
              (l(O, "button"),
              f(
                O,
                b.paginationBulletMessage.replace(
                  /\{\{index\}\}/,
                  O.index() + 1
                )
              ))),
            O.is(`.${e.params.pagination.bulletActiveClass}`)
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
        e.a11y.clicked = !0;
      },
      w = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            e.destroyed || (e.a11y.clicked = !1);
          });
        });
      },
      P = (b) => {
        if (e.a11y.clicked) return;
        const T = b.target.closest(`.${e.params.slideClass}`);
        if (!T || !e.slides.includes(T)) return;
        const O = e.slides.indexOf(T) === e.activeIndex,
          D =
            e.params.watchSlidesProgress &&
            e.visibleSlides &&
            e.visibleSlides.includes(T);
        O ||
          D ||
          (b.sourceCapabilities && b.sourceCapabilities.firesTouchEvents) ||
          (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
          e.slideTo(e.slides.indexOf(T), 0));
      },
      A = () => {
        const b = e.params.a11y;
        b.itemRoleDescriptionMessage &&
          c(N(e.slides), b.itemRoleDescriptionMessage),
          b.slideRole && l(N(e.slides), b.slideRole);
        const T = e.params.loop
          ? e.slides.filter(
              (O) => !O.classList.contains(e.params.slideDuplicateClass)
            ).length
          : e.slides.length;
        b.slideLabelMessage &&
          e.slides.each((O, D) => {
            const k = N(O),
              L = e.params.loop
                ? parseInt(k.attr("data-swiper-slide-index"), 10)
                : D,
              I = b.slideLabelMessage
                .replace(/\{\{index\}\}/, L + 1)
                .replace(/\{\{slidesLength\}\}/, T);
            f(k, I);
          });
      },
      E = () => {
        const b = e.params.a11y;
        e.$el.append(r);
        const T = e.$el;
        b.containerRoleDescriptionMessage &&
          c(T, b.containerRoleDescriptionMessage),
          b.containerMessage && f(T, b.containerMessage);
        const O = e.$wrapperEl,
          D = b.id || O.attr("id") || `swiper-wrapper-${s(16)}`,
          k = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        d(O, D), h(O, k), A();
        let L, I;
        e.navigation && e.navigation.$nextEl && (L = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (I = e.navigation.$prevEl),
          L && L.length && S(L, D, b.nextSlideMessage),
          I && I.length && S(I, D, b.prevSlideMessage),
          _() &&
            e.pagination.$el.on(
              "keydown",
              _n(e.params.pagination.bulletClass),
              g
            ),
          e.$el.on("focus", P, !0),
          e.$el.on("pointerdown", C, !0),
          e.$el.on("pointerup", w, !0);
      };
    function $() {
      r && r.length > 0 && r.remove();
      let b, T;
      e.navigation && e.navigation.$nextEl && (b = e.navigation.$nextEl),
        e.navigation && e.navigation.$prevEl && (T = e.navigation.$prevEl),
        b && b.off("keydown", g),
        T && T.off("keydown", g),
        _() &&
          e.pagination.$el.off(
            "keydown",
            _n(e.params.pagination.bulletClass),
            g
          ),
        e.$el.off("focus", P, !0),
        e.$el.off("pointerdown", C, !0),
        e.$el.off("pointerup", w, !0);
    }
    n("beforeInit", () => {
      r = N(
        `<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
      );
    }),
      n("afterInit", () => {
        e.params.a11y.enabled && E();
      }),
      n(
        "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
        () => {
          e.params.a11y.enabled && A();
        }
      ),
      n("fromEdge toEdge afterInit lock unlock", () => {
        e.params.a11y.enabled && y();
      }),
      n("paginationUpdate", () => {
        e.params.a11y.enabled && x();
      }),
      n("destroy", () => {
        e.params.a11y.enabled && $();
      });
  }
  function jh({ swiper: e, extendParams: t, on: n }) {
    t({
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
        const h = ce();
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
        const m = ce();
        if (!r || !e.params.history.enabled) return;
        let p;
        e.params.url ? (p = new URL(e.params.url)) : (p = m.location);
        const g = e.slides.eq(h);
        let y = s(g.attr("data-history"));
        if (e.params.history.root.length > 0) {
          let _ = e.params.history.root;
          _[_.length - 1] === "/" && (_ = _.slice(0, _.length - 1)),
            (y = `${_}/${d}/${y}`);
        } else p.pathname.includes(d) || (y = `${d}/${y}`);
        e.params.history.keepQuery && (y += p.search);
        const v = m.history.state;
        (v && v.value === y) ||
          (e.params.history.replaceState
            ? m.history.replaceState({ value: y }, null, y)
            : m.history.pushState({ value: y }, null, y));
      },
      l = (d, h, m) => {
        if (h)
          for (let p = 0, g = e.slides.length; p < g; p += 1) {
            const y = e.slides.eq(p);
            if (
              s(y.attr("data-history")) === h &&
              !y.hasClass(e.params.slideDuplicateClass)
            ) {
              const _ = y.index();
              e.slideTo(_, d, m);
            }
          }
        else e.slideTo(0, d, m);
      },
      c = () => {
        (i = a(e.params.url)), l(e.params.speed, i.value, !1);
      },
      u = () => {
        const d = ce();
        if (e.params.history) {
          if (!d.history || !d.history.pushState) {
            (e.params.history.enabled = !1),
              (e.params.hashNavigation.enabled = !0);
            return;
          }
          (r = !0),
            (i = a(e.params.url)),
            !(!i.key && !i.value) &&
              (l(0, i.value, e.params.runCallbacksOnInit),
              e.params.history.replaceState ||
                d.addEventListener("popstate", c));
        }
      },
      f = () => {
        const d = ce();
        e.params.history.replaceState || d.removeEventListener("popstate", c);
      };
    n("init", () => {
      e.params.history.enabled && u();
    }),
      n("destroy", () => {
        e.params.history.enabled && f();
      }),
      n("transitionEnd _freeModeNoMomentumRelease", () => {
        r && o(e.params.history.key, e.activeIndex);
      }),
      n("slideChange", () => {
        r && e.params.cssMode && o(e.params.history.key, e.activeIndex);
      });
  }
  function Uh({ swiper: e, extendParams: t, emit: n, on: r }) {
    let i = !1;
    const s = Me(),
      a = ce();
    t({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
    const o = () => {
        n("hashChange");
        const f = s.location.hash.replace("#", ""),
          d = e.slides.eq(e.activeIndex).attr("data-hash");
        if (f !== d) {
          const h = e.$wrapperEl
            .children(`.${e.params.slideClass}[data-hash="${f}"]`)
            .index();
          if (typeof h == "undefined") return;
          e.slideTo(h);
        }
      },
      l = () => {
        if (!(!i || !e.params.hashNavigation.enabled))
          if (
            e.params.hashNavigation.replaceState &&
            a.history &&
            a.history.replaceState
          )
            a.history.replaceState(
              null,
              null,
              `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""
            ),
              n("hashSet");
          else {
            const f = e.slides.eq(e.activeIndex),
              d = f.attr("data-hash") || f.attr("data-history");
            (s.location.hash = d || ""), n("hashSet");
          }
      },
      c = () => {
        if (
          !e.params.hashNavigation.enabled ||
          (e.params.history && e.params.history.enabled)
        )
          return;
        i = !0;
        const f = s.location.hash.replace("#", "");
        if (f)
          for (let h = 0, m = e.slides.length; h < m; h += 1) {
            const p = e.slides.eq(h);
            if (
              (p.attr("data-hash") || p.attr("data-history")) === f &&
              !p.hasClass(e.params.slideDuplicateClass)
            ) {
              const y = p.index();
              e.slideTo(y, 0, e.params.runCallbacksOnInit, !0);
            }
          }
        e.params.hashNavigation.watchState && N(a).on("hashchange", o);
      },
      u = () => {
        e.params.hashNavigation.watchState && N(a).off("hashchange", o);
      };
    r("init", () => {
      e.params.hashNavigation.enabled && c();
    }),
      r("destroy", () => {
        e.params.hashNavigation.enabled && u();
      }),
      r("transitionEnd _freeModeNoMomentumRelease", () => {
        i && l();
      }),
      r("slideChange", () => {
        i && e.params.cssMode && l();
      });
  }
  function Kh({ swiper: e, extendParams: t, on: n, emit: r }) {
    let i;
    (e.autoplay = { running: !1, paused: !1 }),
      t({
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
      if (!e.size) {
        (e.autoplay.running = !1), (e.autoplay.paused = !1);
        return;
      }
      const p = e.slides.eq(e.activeIndex);
      let g = e.params.autoplay.delay;
      p.attr("data-swiper-autoplay") &&
        (g = p.attr("data-swiper-autoplay") || e.params.autoplay.delay),
        clearTimeout(i),
        (i = Dn(() => {
          let y;
          e.params.autoplay.reverseDirection
            ? e.params.loop
              ? (e.loopFix(),
                (y = e.slidePrev(e.params.speed, !0, !0)),
                r("autoplay"))
              : e.isBeginning
              ? e.params.autoplay.stopOnLastSlide
                ? o()
                : ((y = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0)),
                  r("autoplay"))
              : ((y = e.slidePrev(e.params.speed, !0, !0)), r("autoplay"))
            : e.params.loop
            ? (e.loopFix(),
              (y = e.slideNext(e.params.speed, !0, !0)),
              r("autoplay"))
            : e.isEnd
            ? e.params.autoplay.stopOnLastSlide
              ? o()
              : ((y = e.slideTo(0, e.params.speed, !0, !0)), r("autoplay"))
            : ((y = e.slideNext(e.params.speed, !0, !0)), r("autoplay")),
            ((e.params.cssMode && e.autoplay.running) || y === !1) && s();
        }, g));
    }
    function a() {
      return typeof i != "undefined" || e.autoplay.running
        ? !1
        : ((e.autoplay.running = !0), r("autoplayStart"), s(), !0);
    }
    function o() {
      return !e.autoplay.running || typeof i == "undefined"
        ? !1
        : (i && (clearTimeout(i), (i = void 0)),
          (e.autoplay.running = !1),
          r("autoplayStop"),
          !0);
    }
    function l(p) {
      e.autoplay.running &&
        (e.autoplay.paused ||
          (i && clearTimeout(i),
          (e.autoplay.paused = !0),
          p === 0 || !e.params.autoplay.waitForTransition
            ? ((e.autoplay.paused = !1), s())
            : ["transitionend", "webkitTransitionEnd"].forEach((g) => {
                e.$wrapperEl[0].addEventListener(g, u);
              })));
    }
    function c() {
      const p = Me();
      p.visibilityState === "hidden" && e.autoplay.running && l(),
        p.visibilityState === "visible" &&
          e.autoplay.paused &&
          (s(), (e.autoplay.paused = !1));
    }
    function u(p) {
      !e ||
        e.destroyed ||
        !e.$wrapperEl ||
        (p.target === e.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((g) => {
            e.$wrapperEl[0].removeEventListener(g, u);
          }),
          (e.autoplay.paused = !1),
          e.autoplay.running ? s() : o()));
    }
    function f() {
      e.params.autoplay.disableOnInteraction ? o() : (r("autoplayPause"), l()),
        ["transitionend", "webkitTransitionEnd"].forEach((p) => {
          e.$wrapperEl[0].removeEventListener(p, u);
        });
    }
    function d() {
      e.params.autoplay.disableOnInteraction ||
        ((e.autoplay.paused = !1), r("autoplayResume"), s());
    }
    function h() {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.$el.on("mouseenter", f), e.$el.on("mouseleave", d));
    }
    function m() {
      e.$el.off("mouseenter", f), e.$el.off("mouseleave", d);
    }
    n("init", () => {
      e.params.autoplay.enabled &&
        (a(), Me().addEventListener("visibilitychange", c), h());
    }),
      n("beforeTransitionStart", (p, g, y) => {
        e.autoplay.running &&
          (y || !e.params.autoplay.disableOnInteraction
            ? e.autoplay.pause(g)
            : o());
      }),
      n("sliderFirstMove", () => {
        e.autoplay.running &&
          (e.params.autoplay.disableOnInteraction ? o() : l());
      }),
      n("touchEnd", () => {
        e.params.cssMode &&
          e.autoplay.paused &&
          !e.params.autoplay.disableOnInteraction &&
          s();
      }),
      n("destroy", () => {
        m(),
          e.autoplay.running && o(),
          Me().removeEventListener("visibilitychange", c);
      }),
      Object.assign(e.autoplay, { pause: l, run: s, start: a, stop: o });
  }
  function Qh({ swiper: e, extendParams: t, on: n }) {
    t({
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
    e.thumbs = { swiper: null };
    function s() {
      const l = e.thumbs.swiper;
      if (!l || l.destroyed) return;
      const c = l.clickedIndex,
        u = l.clickedSlide;
      if (
        (u && N(u).hasClass(e.params.thumbs.slideThumbActiveClass)) ||
        typeof c == "undefined" ||
        c === null
      )
        return;
      let f;
      if (
        (l.params.loop
          ? (f = parseInt(
              N(l.clickedSlide).attr("data-swiper-slide-index"),
              10
            ))
          : (f = c),
        e.params.loop)
      ) {
        let d = e.activeIndex;
        e.slides.eq(d).hasClass(e.params.slideDuplicateClass) &&
          (e.loopFix(),
          (e._clientLeft = e.$wrapperEl[0].clientLeft),
          (d = e.activeIndex));
        const h = e.slides
            .eq(d)
            .prevAll(`[data-swiper-slide-index="${f}"]`)
            .eq(0)
            .index(),
          m = e.slides
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
      e.slideTo(f);
    }
    function a() {
      const { thumbs: l } = e.params;
      if (r) return !1;
      r = !0;
      const c = e.constructor;
      if (l.swiper instanceof c)
        (e.thumbs.swiper = l.swiper),
          Object.assign(e.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
          Object.assign(e.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          });
      else if (_i(l.swiper)) {
        const u = Object.assign({}, l.swiper);
        Object.assign(u, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
          (e.thumbs.swiper = new c(u)),
          (i = !0);
      }
      return (
        e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
        e.thumbs.swiper.on("tap", s),
        !0
      );
    }
    function o(l) {
      const c = e.thumbs.swiper;
      if (!c || c.destroyed) return;
      const u =
        c.params.slidesPerView === "auto"
          ? c.slidesPerViewDynamic()
          : c.params.slidesPerView;
      let f = 1;
      const d = e.params.thumbs.slideThumbActiveClass;
      if (
        (e.params.slidesPerView > 1 &&
          !e.params.centeredSlides &&
          (f = e.params.slidesPerView),
        e.params.thumbs.multipleActiveThumbs || (f = 1),
        (f = Math.floor(f)),
        c.slides.removeClass(d),
        c.params.loop || (c.params.virtual && c.params.virtual.enabled))
      )
        for (let p = 0; p < f; p += 1)
          c.$wrapperEl
            .children(`[data-swiper-slide-index="${e.realIndex + p}"]`)
            .addClass(d);
      else
        for (let p = 0; p < f; p += 1) c.slides.eq(e.realIndex + p).addClass(d);
      const h = e.params.thumbs.autoScrollOffset,
        m = h && !c.params.loop;
      if (e.realIndex !== c.realIndex || m) {
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
              .prevAll(`[data-swiper-slide-index="${e.realIndex}"]`)
              .eq(0)
              .index(),
            _ = c.slides
              .eq(p)
              .nextAll(`[data-swiper-slide-index="${e.realIndex}"]`)
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
            (y = e.activeIndex > e.previousIndex ? "next" : "prev");
        } else (g = e.realIndex), (y = g > e.previousIndex ? "next" : "prev");
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
      const { thumbs: l } = e.params;
      !l || !l.swiper || (a(), o(!0));
    }),
      n("slideChange update resize observerUpdate", () => {
        o();
      }),
      n("setTransition", (l, c) => {
        const u = e.thumbs.swiper;
        !u || u.destroyed || u.setTransition(c);
      }),
      n("beforeDestroy", () => {
        const l = e.thumbs.swiper;
        !l || l.destroyed || (i && l.destroy());
      }),
      Object.assign(e.thumbs, { init: a, update: o });
  }
  function Zh({ swiper: e, extendParams: t, emit: n, once: r }) {
    t({
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
      const o = e.getTranslate();
      e.setTranslate(o),
        e.setTransition(0),
        (e.touchEventsData.velocities.length = 0),
        e.freeMode.onTouchEnd({
          currentPos: e.rtl ? e.translate : -e.translate,
        });
    }
    function s() {
      const { touchEventsData: o, touches: l } = e;
      o.velocities.length === 0 &&
        o.velocities.push({
          position: l[e.isHorizontal() ? "startX" : "startY"],
          time: o.touchStartTime,
        }),
        o.velocities.push({
          position: l[e.isHorizontal() ? "currentX" : "currentY"],
          time: Ct(),
        });
    }
    function a({ currentPos: o }) {
      const {
          params: l,
          $wrapperEl: c,
          rtlTranslate: u,
          snapGrid: f,
          touchEventsData: d,
        } = e,
        m = Ct() - d.touchStartTime;
      if (o < -e.minTranslate()) {
        e.slideTo(e.activeIndex);
        return;
      }
      if (o > -e.maxTranslate()) {
        e.slides.length < f.length
          ? e.slideTo(f.length - 1)
          : e.slideTo(e.slides.length - 1);
        return;
      }
      if (l.freeMode.momentum) {
        if (d.velocities.length > 1) {
          const C = d.velocities.pop(),
            w = d.velocities.pop(),
            P = C.position - w.position,
            A = C.time - w.time;
          (e.velocity = P / A),
            (e.velocity /= 2),
            Math.abs(e.velocity) < l.freeMode.minimumVelocity &&
              (e.velocity = 0),
            (A > 150 || Ct() - C.time > 300) && (e.velocity = 0);
        } else e.velocity = 0;
        (e.velocity *= l.freeMode.momentumVelocityRatio),
          (d.velocities.length = 0);
        let p = 1e3 * l.freeMode.momentumRatio;
        const g = e.velocity * p;
        let y = e.translate + g;
        u && (y = -y);
        let v = !1,
          _;
        const x = Math.abs(e.velocity) * 20 * l.freeMode.momentumBounceRatio;
        let S;
        if (y < e.maxTranslate())
          l.freeMode.momentumBounce
            ? (y + e.maxTranslate() < -x && (y = e.maxTranslate() - x),
              (_ = e.maxTranslate()),
              (v = !0),
              (d.allowMomentumBounce = !0))
            : (y = e.maxTranslate()),
            l.loop && l.centeredSlides && (S = !0);
        else if (y > e.minTranslate())
          l.freeMode.momentumBounce
            ? (y - e.minTranslate() > x && (y = e.minTranslate() + x),
              (_ = e.minTranslate()),
              (v = !0),
              (d.allowMomentumBounce = !0))
            : (y = e.minTranslate()),
            l.loop && l.centeredSlides && (S = !0);
        else if (l.freeMode.sticky) {
          let C;
          for (let w = 0; w < f.length; w += 1)
            if (f[w] > -y) {
              C = w;
              break;
            }
          Math.abs(f[C] - y) < Math.abs(f[C - 1] - y) ||
          e.swipeDirection === "next"
            ? (y = f[C])
            : (y = f[C - 1]),
            (y = -y);
        }
        if (
          (S &&
            r("transitionEnd", () => {
              e.loopFix();
            }),
          e.velocity !== 0)
        ) {
          if (
            (u
              ? (p = Math.abs((-y - e.translate) / e.velocity))
              : (p = Math.abs((y - e.translate) / e.velocity)),
            l.freeMode.sticky)
          ) {
            const C = Math.abs((u ? -y : y) - e.translate),
              w = e.slidesSizesGrid[e.activeIndex];
            C < w
              ? (p = l.speed)
              : C < 2 * w
              ? (p = l.speed * 1.5)
              : (p = l.speed * 2.5);
          }
        } else if (l.freeMode.sticky) {
          e.slideToClosest();
          return;
        }
        l.freeMode.momentumBounce && v
          ? (e.updateProgress(_),
            e.setTransition(p),
            e.setTranslate(y),
            e.transitionStart(!0, e.swipeDirection),
            (e.animating = !0),
            c.transitionEnd(() => {
              !e ||
                e.destroyed ||
                !d.allowMomentumBounce ||
                (n("momentumBounce"),
                e.setTransition(l.speed),
                setTimeout(() => {
                  e.setTranslate(_),
                    c.transitionEnd(() => {
                      !e || e.destroyed || e.transitionEnd();
                    });
                }, 0));
            }))
          : e.velocity
          ? (n("_freeModeNoMomentumRelease"),
            e.updateProgress(y),
            e.setTransition(p),
            e.setTranslate(y),
            e.transitionStart(!0, e.swipeDirection),
            e.animating ||
              ((e.animating = !0),
              c.transitionEnd(() => {
                !e || e.destroyed || e.transitionEnd();
              })))
          : e.updateProgress(y),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
      } else if (l.freeMode.sticky) {
        e.slideToClosest();
        return;
      } else l.freeMode && n("_freeModeNoMomentumRelease");
      (!l.freeMode.momentum || m >= l.longSwipesMs) &&
        (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
    }
    Object.assign(e, {
      freeMode: { onTouchStart: i, onTouchMove: s, onTouchEnd: a },
    });
  }
  function Jh({ swiper: e, extendParams: t }) {
    t({ grid: { rows: 1, fill: "column" } });
    let n, r, i;
    const s = (l) => {
        const { slidesPerView: c } = e.params,
          { rows: u, fill: f } = e.params.grid;
        (r = n / u),
          (i = Math.floor(l / u)),
          Math.floor(l / u) === l / u ? (n = l) : (n = Math.ceil(l / u) * u),
          c !== "auto" && f === "row" && (n = Math.max(n, c * u));
      },
      a = (l, c, u, f) => {
        const { slidesPerGroup: d, spaceBetween: h } = e.params,
          { rows: m, fill: p } = e.params.grid;
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
          } = e.params,
          { rows: m } = e.params.grid;
        if (
          ((e.virtualSize = (l + f) * n),
          (e.virtualSize = Math.ceil(e.virtualSize / m) - f),
          e.$wrapperEl.css({ [u("width")]: `${e.virtualSize + f}px` }),
          d)
        ) {
          c.splice(0, c.length);
          const p = [];
          for (let g = 0; g < c.length; g += 1) {
            let y = c[g];
            h && (y = Math.floor(y)), c[g] < e.virtualSize + c[0] && p.push(y);
          }
          c.push(...p);
        }
      };
    e.grid = { initSlides: s, updateSlide: a, updateWrapperSize: o };
  }
  function ep(e) {
    const t = this,
      { $wrapperEl: n, params: r } = t;
    if ((r.loop && t.loopDestroy(), typeof e == "object" && "length" in e))
      for (let i = 0; i < e.length; i += 1) e[i] && n.append(e[i]);
    else n.append(e);
    r.loop && t.loopCreate(), r.observer || t.update();
  }
  function tp(e) {
    const t = this,
      { params: n, $wrapperEl: r, activeIndex: i } = t;
    n.loop && t.loopDestroy();
    let s = i + 1;
    if (typeof e == "object" && "length" in e) {
      for (let a = 0; a < e.length; a += 1) e[a] && r.prepend(e[a]);
      s = i + e.length;
    } else r.prepend(e);
    n.loop && t.loopCreate(), n.observer || t.update(), t.slideTo(s, 0, !1);
  }
  function np(e, t) {
    const n = this,
      { $wrapperEl: r, params: i, activeIndex: s } = n;
    let a = s;
    i.loop &&
      ((a -= n.loopedSlides),
      n.loopDestroy(),
      (n.slides = r.children(`.${i.slideClass}`)));
    const o = n.slides.length;
    if (e <= 0) {
      n.prependSlide(t);
      return;
    }
    if (e >= o) {
      n.appendSlide(t);
      return;
    }
    let l = a > e ? a + 1 : a;
    const c = [];
    for (let u = o - 1; u >= e; u -= 1) {
      const f = n.slides.eq(u);
      f.remove(), c.unshift(f);
    }
    if (typeof t == "object" && "length" in t) {
      for (let u = 0; u < t.length; u += 1) t[u] && r.append(t[u]);
      l = a > e ? a + t.length : a;
    } else r.append(t);
    for (let u = 0; u < c.length; u += 1) r.append(c[u]);
    i.loop && n.loopCreate(),
      i.observer || n.update(),
      i.loop ? n.slideTo(l + n.loopedSlides, 0, !1) : n.slideTo(l, 0, !1);
  }
  function rp(e) {
    const t = this,
      { params: n, $wrapperEl: r, activeIndex: i } = t;
    let s = i;
    n.loop &&
      ((s -= t.loopedSlides),
      t.loopDestroy(),
      (t.slides = r.children(`.${n.slideClass}`)));
    let a = s,
      o;
    if (typeof e == "object" && "length" in e) {
      for (let l = 0; l < e.length; l += 1)
        (o = e[l]), t.slides[o] && t.slides.eq(o).remove(), o < a && (a -= 1);
      a = Math.max(a, 0);
    } else (o = e), t.slides[o] && t.slides.eq(o).remove(), o < a && (a -= 1), (a = Math.max(a, 0));
    n.loop && t.loopCreate(),
      n.observer || t.update(),
      n.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1);
  }
  function ip() {
    const e = this,
      t = [];
    for (let n = 0; n < e.slides.length; n += 1) t.push(n);
    e.removeSlide(t);
  }
  function sp({ swiper: e }) {
    Object.assign(e, {
      appendSlide: ep.bind(e),
      prependSlide: tp.bind(e),
      addSlide: np.bind(e),
      removeSlide: rp.bind(e),
      removeAllSlides: ip.bind(e),
    });
  }
  function Rr(e) {
    const {
      effect: t,
      swiper: n,
      on: r,
      setTranslate: i,
      setTransition: s,
      overwriteParams: a,
      perspective: o,
      recreateShadows: l,
      getEffectParams: c,
    } = e;
    r("beforeInit", () => {
      if (n.params.effect !== t) return;
      n.classNames.push(`${n.params.containerModifierClass}${t}`),
        o && o() && n.classNames.push(`${n.params.containerModifierClass}3d`);
      const f = a ? a() : {};
      Object.assign(n.params, f), Object.assign(n.originalParams, f);
    }),
      r("setTranslate", () => {
        n.params.effect === t && i();
      }),
      r("setTransition", (f, d) => {
        n.params.effect === t && s(d);
      }),
      r("transitionEnd", () => {
        if (n.params.effect === t && l) {
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
      n.params.effect === t &&
        (n.slides.length || (u = !0),
        requestAnimationFrame(() => {
          u && n.slides && n.slides.length && (i(), (u = !1));
        }));
    });
  }
  function xi(e, t) {
    return e.transformEl
      ? t
          .find(e.transformEl)
          .css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden",
          })
      : t;
  }
  function vs({ swiper: e, duration: t, transformEl: n, allSlides: r }) {
    const { slides: i, activeIndex: s, $wrapperEl: a } = e;
    if (e.params.virtualTranslate && t !== 0) {
      let o = !1,
        l;
      r ? (l = n ? i.find(n) : i) : (l = n ? i.eq(s).find(n) : i.eq(s)),
        l.transitionEnd(() => {
          if (o || !e || e.destroyed) return;
          (o = !0), (e.animating = !1);
          const c = ["webkitTransitionEnd", "transitionend"];
          for (let u = 0; u < c.length; u += 1) a.trigger(c[u]);
        });
    }
  }
  function ap({ swiper: e, extendParams: t, on: n }) {
    t({ fadeEffect: { crossFade: !1, transformEl: null } }),
      Rr({
        effect: "fade",
        swiper: e,
        on: n,
        setTranslate: () => {
          const { slides: s } = e,
            a = e.params.fadeEffect;
          for (let o = 0; o < s.length; o += 1) {
            const l = e.slides.eq(o);
            let u = -l[0].swiperSlideOffset;
            e.params.virtualTranslate || (u -= e.translate);
            let f = 0;
            e.isHorizontal() || ((f = u), (u = 0));
            const d = e.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(l[0].progress), 0)
              : 1 + Math.min(Math.max(l[0].progress, -1), 0);
            xi(a, l)
              .css({ opacity: d })
              .transform(`translate3d(${u}px, ${f}px, 0px)`);
          }
        },
        setTransition: (s) => {
          const { transformEl: a } = e.params.fadeEffect;
          (a ? e.slides.find(a) : e.slides).transition(s),
            vs({ swiper: e, duration: s, transformEl: a, allSlides: !0 });
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
  }
  function op({ swiper: e, extendParams: t, on: n }) {
    t({
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
        ((u = N(
          `<div class="swiper-slide-shadow-${c ? "left" : "top"}"></div>`
        )),
        o.append(u)),
        f.length === 0 &&
          ((f = N(
            `<div class="swiper-slide-shadow-${c ? "right" : "bottom"}"></div>`
          )),
          o.append(f)),
        u.length && (u[0].style.opacity = Math.max(-l, 0)),
        f.length && (f[0].style.opacity = Math.max(l, 0));
    };
    Rr({
      effect: "cube",
      swiper: e,
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
          } = e,
          p = e.params.cubeEffect,
          g = e.isHorizontal(),
          y = e.virtual && e.params.virtual.enabled;
        let v = 0,
          _;
        p.shadow &&
          (g
            ? ((_ = l.find(".swiper-cube-shadow")),
              _.length === 0 &&
                ((_ = N('<div class="swiper-cube-shadow"></div>')),
                l.append(_)),
              _.css({ height: `${u}px` }))
            : ((_ = o.find(".swiper-cube-shadow")),
              _.length === 0 &&
                ((_ = N('<div class="swiper-cube-shadow"></div>')),
                o.append(_))));
        for (let S = 0; S < c.length; S += 1) {
          const C = c.eq(S);
          let w = S;
          y && (w = parseInt(C.attr("data-swiper-slide-index"), 10));
          let P = w * 90,
            A = Math.floor(P / 360);
          d && ((P = -P), (A = Math.floor(-P / 360)));
          const E = Math.max(Math.min(C[0].progress, 1), -1);
          let $ = 0,
            b = 0,
            T = 0;
          w % 4 === 0
            ? (($ = -A * 4 * h), (T = 0))
            : (w - 1) % 4 === 0
            ? (($ = 0), (T = -A * 4 * h))
            : (w - 2) % 4 === 0
            ? (($ = h + A * 4 * h), (T = h))
            : (w - 3) % 4 === 0 && (($ = -h), (T = 3 * h + h * 4 * A)),
            d && ($ = -$),
            g || ((b = $), ($ = 0));
          const O = `rotateX(${g ? 0 : -P}deg) rotateY(${
            g ? P : 0
          }deg) translate3d(${$}px, ${b}px, ${T}px)`;
          E <= 1 &&
            E > -1 &&
            ((v = w * 90 + E * 90), d && (v = -w * 90 - E * 90)),
            C.transform(O),
            p.slideShadows && r(C, E, g);
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
            e.isHorizontal() ? 0 : v
          }deg) rotateY(${e.isHorizontal() ? -v : 0}deg)`
        ),
          l[0].style.setProperty("--swiper-cube-translate-z", `${x}px`);
      },
      setTransition: (o) => {
        const { $el: l, slides: c } = e;
        c
          .transition(o)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(o),
          e.params.cubeEffect.shadow &&
            !e.isHorizontal() &&
            l.find(".swiper-cube-shadow").transition(o);
      },
      recreateShadows: () => {
        const o = e.isHorizontal();
        e.slides.each((l) => {
          const c = Math.max(Math.min(l.progress, 1), -1);
          r(N(l), c, o);
        });
      },
      getEffectParams: () => e.params.cubeEffect,
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
  function Nr(e, t, n) {
    const r = `swiper-slide-shadow${n ? `-${n}` : ""}`,
      i = e.transformEl ? t.find(e.transformEl) : t;
    let s = i.children(`.${r}`);
    return (
      s.length ||
        ((s = N(`<div class="swiper-slide-shadow${n ? `-${n}` : ""}"></div>`)),
        i.append(s)),
      s
    );
  }
  function lp({ swiper: e, extendParams: t, on: n }) {
    t({
      flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null },
    });
    const r = (o, l, c) => {
      let u = e.isHorizontal()
          ? o.find(".swiper-slide-shadow-left")
          : o.find(".swiper-slide-shadow-top"),
        f = e.isHorizontal()
          ? o.find(".swiper-slide-shadow-right")
          : o.find(".swiper-slide-shadow-bottom");
      u.length === 0 && (u = Nr(c, o, e.isHorizontal() ? "left" : "top")),
        f.length === 0 && (f = Nr(c, o, e.isHorizontal() ? "right" : "bottom")),
        u.length && (u[0].style.opacity = Math.max(-l, 0)),
        f.length && (f[0].style.opacity = Math.max(l, 0));
    };
    Rr({
      effect: "flip",
      swiper: e,
      on: n,
      setTranslate: () => {
        const { slides: o, rtlTranslate: l } = e,
          c = e.params.flipEffect;
        for (let u = 0; u < o.length; u += 1) {
          const f = o.eq(u);
          let d = f[0].progress;
          e.params.flipEffect.limitRotation &&
            (d = Math.max(Math.min(f[0].progress, 1), -1));
          const h = f[0].swiperSlideOffset;
          let p = -180 * d,
            g = 0,
            y = e.params.cssMode ? -h - e.translate : -h,
            v = 0;
          e.isHorizontal()
            ? l && (p = -p)
            : ((v = y), (y = 0), (g = -p), (p = 0)),
            (f[0].style.zIndex = -Math.abs(Math.round(d)) + o.length),
            c.slideShadows && r(f, d, c);
          const _ = `translate3d(${y}px, ${v}px, 0px) rotateX(${g}deg) rotateY(${p}deg)`;
          xi(c, f).transform(_);
        }
      },
      setTransition: (o) => {
        const { transformEl: l } = e.params.flipEffect;
        (l ? e.slides.find(l) : e.slides)
          .transition(o)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(o),
          vs({ swiper: e, duration: o, transformEl: l });
      },
      recreateShadows: () => {
        const o = e.params.flipEffect;
        e.slides.each((l) => {
          const c = N(l);
          let u = c[0].progress;
          e.params.flipEffect.limitRotation &&
            (u = Math.max(Math.min(l.progress, 1), -1)),
            r(c, u, o);
        });
      },
      getEffectParams: () => e.params.flipEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
  }
  function cp({ swiper: e, extendParams: t, on: n }) {
    t({
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
      Rr({
        effect: "coverflow",
        swiper: e,
        on: n,
        setTranslate: () => {
          const { width: s, height: a, slides: o, slidesSizesGrid: l } = e,
            c = e.params.coverflowEffect,
            u = e.isHorizontal(),
            f = e.translate,
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
              $ = u ? A * S : 0,
              b = 1 - (1 - c.scale) * Math.abs(S);
            Math.abs($) < 0.001 && ($ = 0),
              Math.abs(E) < 0.001 && (E = 0),
              Math.abs(P) < 0.001 && (P = 0),
              Math.abs(C) < 0.001 && (C = 0),
              Math.abs(w) < 0.001 && (w = 0),
              Math.abs(b) < 0.001 && (b = 0);
            const T = `translate3d(${$}px,${E}px,${P}px)  rotateX(${w}deg) rotateY(${C}deg) scale(${b})`;
            if (
              (xi(c, y).transform(T),
              (y[0].style.zIndex = -Math.abs(Math.round(S)) + 1),
              c.slideShadows)
            ) {
              let D = u
                  ? y.find(".swiper-slide-shadow-left")
                  : y.find(".swiper-slide-shadow-top"),
                k = u
                  ? y.find(".swiper-slide-shadow-right")
                  : y.find(".swiper-slide-shadow-bottom");
              D.length === 0 && (D = Nr(c, y, u ? "left" : "top")),
                k.length === 0 && (k = Nr(c, y, u ? "right" : "bottom")),
                D.length && (D[0].style.opacity = S > 0 ? S : 0),
                k.length && (k[0].style.opacity = -S > 0 ? -S : 0);
            }
          }
        },
        setTransition: (s) => {
          const { transformEl: a } = e.params.coverflowEffect;
          (a ? e.slides.find(a) : e.slides)
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
  function up({ swiper: e, extendParams: t, on: n }) {
    t({
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
    Rr({
      effect: "creative",
      swiper: e,
      on: n,
      setTranslate: () => {
        const { slides: a, $wrapperEl: o, slidesSizesGrid: l } = e,
          c = e.params.creativeEffect,
          { progressMultiplier: u } = c,
          f = e.params.centeredSlides;
        if (f) {
          const d = l[0] / 2 - e.params.slidesOffsetBefore || 0;
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
            v = [e.params.cssMode ? -y - e.translate : -y, 0, 0],
            _ = [0, 0, 0];
          let x = !1;
          e.isHorizontal() || ((v[1] = v[0]), (v[0] = 0));
          let S = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1,
          };
          p < 0 ? ((S = c.next), (x = !0)) : p > 0 && ((S = c.prev), (x = !0)),
            v.forEach((b, T) => {
              v[T] = `calc(${b}px + (${r(S.translate[T])} * ${Math.abs(
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
            if ((b.length === 0 && S.shadow && (b = Nr(c, h)), b.length)) {
              const T = c.shadowPerProgress ? p * (1 / c.limitProgress) : p;
              b[0].style.opacity = Math.min(Math.max(Math.abs(T), 0), 1);
            }
          }
          const $ = xi(c, h);
          $.transform(E).css({ opacity: A }),
            S.origin && $.css("transform-origin", S.origin);
        }
      },
      setTransition: (a) => {
        const { transformEl: o } = e.params.creativeEffect;
        (o ? e.slides.find(o) : e.slides)
          .transition(a)
          .find(".swiper-slide-shadow")
          .transition(a),
          vs({ swiper: e, duration: a, transformEl: o, allSlides: !0 });
      },
      perspective: () => e.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
  }
  function fp({ swiper: e, extendParams: t, on: n }) {
    t({
      cardsEffect: {
        slideShadows: !0,
        transformEl: null,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8,
      },
    }),
      Rr({
        effect: "cards",
        swiper: e,
        on: n,
        setTranslate: () => {
          const { slides: s, activeIndex: a } = e,
            o = e.params.cardsEffect,
            { startTranslate: l, isTouched: c } = e.touchEventsData,
            u = e.translate;
          for (let f = 0; f < s.length; f += 1) {
            const d = s.eq(f),
              h = d[0].progress,
              m = Math.min(Math.max(h, -4), 4);
            let p = d[0].swiperSlideOffset;
            e.params.centeredSlides &&
              !e.params.cssMode &&
              e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`),
              e.params.centeredSlides &&
                e.params.cssMode &&
                (p -= s[0].swiperSlideOffset);
            let g = e.params.cssMode ? -p - e.translate : -p,
              y = 0;
            const v = -100 * Math.abs(m);
            let _ = 1,
              x = -o.perSlideRotate * m,
              S = o.perSlideOffset - Math.abs(m) * 0.75;
            const C =
                e.virtual && e.params.virtual.enabled ? e.virtual.from + f : f,
              w =
                (C === a || C === a - 1) &&
                m > 0 &&
                m < 1 &&
                (c || e.params.cssMode) &&
                u < l,
              P =
                (C === a || C === a + 1) &&
                m < 0 &&
                m > -1 &&
                (c || e.params.cssMode) &&
                u > l;
            if (w || P) {
              const b = wt(1 - Math.abs((Math.abs(m) - 0.5) / 0.5), 0.5);
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
              !e.isHorizontal())
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
              b.length === 0 && (b = Nr(o, d)),
                b.length &&
                  (b[0].style.opacity = Math.min(
                    Math.max((Math.abs(m) - 0.5) / 0.5, 0),
                    1
                  ));
            }
            (d[0].style.zIndex = -Math.abs(Math.round(h)) + s.length),
              xi(o, d).transform(E);
          }
        },
        setTransition: (s) => {
          const { transformEl: a } = e.params.cardsEffect;
          (a ? e.slides.find(a) : e.slides)
            .transition(s)
            .find(".swiper-slide-shadow")
            .transition(s),
            vs({ swiper: e, duration: s, transformEl: a });
        },
        perspective: () => !0,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
  }
  const dp = [
    Rh,
    Nh,
    Fh,
    Hh,
    qh,
    Bh,
    Vh,
    Wh,
    Yh,
    Xh,
    Gh,
    jh,
    Uh,
    Kh,
    Qh,
    Zh,
    Jh,
    sp,
    ap,
    op,
    lp,
    cp,
    up,
    fp,
  ];
  ut.use(dp);
  let wa = null;
  const hp = () => {
    const e = document.querySelector(".swiper[work-slider='component']");
    if (!e) return;
    const t = () => window.innerWidth >= 768,
      n = () => {
        const i = t();
        wa = new ut(e, {
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
    let r = t();
    n(),
      window.addEventListener("resize", () => {
        const i = t();
        i !== r && ((r = i), wa && wa.destroy(!0, !0), n());
      });
  };
  function bn(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function Sl(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      (e.__proto__ = t);
  }
  /*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var kt = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Fr = { duration: 0.5, overwrite: !1, delay: 0 },
    Ca,
    Ke,
    me,
    rn = 1e8,
    tt = 1 / rn,
    Pa = Math.PI * 2,
    pp = Pa / 4,
    mp = 0,
    Tl = Math.sqrt,
    gp = Math.cos,
    vp = Math.sin,
    Be = function (t) {
      return typeof t == "string";
    },
    Se = function (t) {
      return typeof t == "function";
    },
    xn = function (t) {
      return typeof t == "number";
    },
    ka = function (t) {
      return typeof t == "undefined";
    },
    sn = function (t) {
      return typeof t == "object";
    },
    _t = function (t) {
      return t !== !1;
    },
    Ma = function () {
      return typeof window != "undefined";
    },
    ys = function (t) {
      return Se(t) || Be(t);
    },
    El =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    nt = Array.isArray,
    $a = /(?:-?\.?\d|\.)+/gi,
    wl = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Hr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Oa = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Cl = /[+-]=-?[.\d]+/,
    Pl = /[^,'"\[\]\s]+/gi,
    yp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ye,
    an,
    Aa,
    La,
    Mt = {},
    _s = {},
    kl,
    Ml = function (t) {
      return (_s = Br(t, Mt)) && St;
    },
    Da = function (t, n) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        n,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    Si = function (t, n) {
      return !n && console.warn(t);
    },
    $l = function (t, n) {
      return (t && (Mt[t] = n) && _s && (_s[t] = n)) || Mt;
    },
    Ti = function () {
      return 0;
    },
    _p = { suppressEvents: !0, isStart: !0, kill: !1 },
    bs = { suppressEvents: !0, kill: !1 },
    bp = { suppressEvents: !0 },
    Ia = {},
    In = [],
    za = {},
    Ol,
    $t = {},
    Ra = {},
    Al = 30,
    xs = [],
    Na = "",
    Fa = function (t) {
      var n = t[0],
        r,
        i;
      if ((sn(n) || Se(n) || (t = [t]), !(r = (n._gsap || {}).harness))) {
        for (i = xs.length; i-- && !xs[i].targetTest(n); );
        r = xs[i];
      }
      for (i = t.length; i--; )
        (t[i] && (t[i]._gsap || (t[i]._gsap = new oc(t[i], r)))) ||
          t.splice(i, 1);
      return t;
    },
    sr = function (t) {
      return t._gsap || Fa(Vt(t))[0]._gsap;
    },
    Ll = function (t, n, r) {
      return (r = t[n]) && Se(r)
        ? t[n]()
        : (ka(r) && t.getAttribute && t.getAttribute(n)) || r;
    },
    bt = function (t, n) {
      return (t = t.split(",")).forEach(n) || t;
    },
    we = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    $e = function (t) {
      return Math.round(t * 1e7) / 1e7 || 0;
    },
    qr = function (t, n) {
      var r = n.charAt(0),
        i = parseFloat(n.substr(2));
      return (
        (t = parseFloat(t)),
        r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i
      );
    },
    xp = function (t, n) {
      for (var r = n.length, i = 0; t.indexOf(n[i]) < 0 && ++i < r; );
      return i < r;
    },
    Ss = function () {
      var t = In.length,
        n = In.slice(0),
        r,
        i;
      for (za = {}, In.length = 0, r = 0; r < t; r++)
        (i = n[r]),
          i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
    },
    Ha = function (t) {
      return !!(t._initted || t._startAt || t.add);
    },
    Dl = function (t, n, r, i) {
      In.length && !Ke && Ss(),
        t.render(n, r, !!(Ke && n < 0 && Ha(t))),
        In.length && !Ke && Ss();
    },
    Il = function (t) {
      var n = parseFloat(t);
      return (n || n === 0) && (t + "").match(Pl).length < 2
        ? n
        : Be(t)
        ? t.trim()
        : t;
    },
    zl = function (t) {
      return t;
    },
    Ot = function (t, n) {
      for (var r in n) r in t || (t[r] = n[r]);
      return t;
    },
    Sp = function (t) {
      return function (n, r) {
        for (var i in r)
          i in n || (i === "duration" && t) || i === "ease" || (n[i] = r[i]);
      };
    },
    Br = function (t, n) {
      for (var r in n) t[r] = n[r];
      return t;
    },
    Rl = function e(t, n) {
      for (var r in n)
        r !== "__proto__" &&
          r !== "constructor" &&
          r !== "prototype" &&
          (t[r] = sn(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
      return t;
    },
    Ts = function (t, n) {
      var r = {},
        i;
      for (i in t) i in n || (r[i] = t[i]);
      return r;
    },
    Ei = function (t) {
      var n = t.parent || ye,
        r = t.keyframes ? Sp(nt(t.keyframes)) : Ot;
      if (_t(t.inherit))
        for (; n; ) r(t, n.vars.defaults), (n = n.parent || n._dp);
      return t;
    },
    Tp = function (t, n) {
      for (var r = t.length, i = r === n.length; i && r-- && t[r] === n[r]; );
      return r < 0;
    },
    Nl = function (t, n, r, i, s) {
      var a = t[i],
        o;
      if (s) for (o = n[s]; a && a[s] > o; ) a = a._prev;
      return (
        a
          ? ((n._next = a._next), (a._next = n))
          : ((n._next = t[r]), (t[r] = n)),
        n._next ? (n._next._prev = n) : (t[i] = n),
        (n._prev = a),
        (n.parent = n._dp = t),
        n
      );
    },
    Es = function (t, n, r, i) {
      r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
      var s = n._prev,
        a = n._next;
      s ? (s._next = a) : t[r] === n && (t[r] = a),
        a ? (a._prev = s) : t[i] === n && (t[i] = s),
        (n._next = n._prev = n.parent = null);
    },
    zn = function (t, n) {
      t.parent &&
        (!n || t.parent.autoRemoveChildren) &&
        t.parent.remove &&
        t.parent.remove(t),
        (t._act = 0);
    },
    ar = function (t, n) {
      if (t && (!n || n._end > t._dur || n._start < 0))
        for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
      return t;
    },
    Ep = function (t) {
      for (var n = t.parent; n && n.parent; )
        (n._dirty = 1), n.totalDuration(), (n = n.parent);
      return t;
    },
    qa = function (t, n, r, i) {
      return (
        t._startAt &&
        (Ke
          ? t._startAt.revert(bs)
          : (t.vars.immediateRender && !t.vars.autoRevert) ||
            t._startAt.render(n, !0, i))
      );
    },
    wp = function e(t) {
      return !t || (t._ts && e(t.parent));
    },
    Fl = function (t) {
      return t._repeat ? Vr(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    Vr = function (t, n) {
      var r = Math.floor((t = $e(t / n)));
      return t && r === t ? r - 1 : r;
    },
    ws = function (t, n) {
      return (
        (t - n._start) * n._ts +
        (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
      );
    },
    Cs = function (t) {
      return (t._end = $e(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || tt) || 0)
      ));
    },
    Ps = function (t, n) {
      var r = t._dp;
      return (
        r &&
          r.smoothChildTiming &&
          t._ts &&
          ((t._start = $e(
            r._time -
              (t._ts > 0
                ? n / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - n) / -t._ts)
          )),
          Cs(t),
          r._dirty || ar(r, t)),
        t
      );
    },
    Hl = function (t, n) {
      var r;
      if (
        ((n._time ||
          (!n._dur && n._initted) ||
          (n._start < t._time && (n._dur || !n.add))) &&
          ((r = ws(t.rawTime(), n)),
          (!n._dur || Ci(0, n.totalDuration(), r) - n._tTime > tt) &&
            n.render(r, !0)),
        ar(t, n)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (r = t; r._dp; )
            r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
        t._zTime = -1e-8;
      }
    },
    on = function (t, n, r, i) {
      return (
        n.parent && zn(n),
        (n._start = $e(
          (xn(r) ? r : r || t !== ye ? Bt(t, r, n) : t._time) + n._delay
        )),
        (n._end = $e(
          n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)
        )),
        Nl(t, n, "_first", "_last", t._sort ? "_start" : 0),
        Ba(n) || (t._recent = n),
        i || Hl(t, n),
        t._ts < 0 && Ps(t, t._tTime),
        t
      );
    },
    ql = function (t, n) {
      return (
        (Mt.ScrollTrigger || Da("scrollTrigger", n)) &&
        Mt.ScrollTrigger.create(n, t)
      );
    },
    Bl = function (t, n, r, i, s) {
      if ((Qa(t, n, s), !t._initted)) return 1;
      if (
        !r &&
        t._pt &&
        !Ke &&
        ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
        Ol !== Lt.frame
      )
        return In.push(t), (t._lazy = [s, i]), 1;
    },
    Cp = function e(t) {
      var n = t.parent;
      return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
    },
    Ba = function (t) {
      var n = t.data;
      return n === "isFromStart" || n === "isStart";
    },
    Pp = function (t, n, r, i) {
      var s = t.ratio,
        a =
          n < 0 ||
          (!n &&
            ((!t._start && Cp(t) && !(!t._initted && Ba(t))) ||
              ((t._ts < 0 || t._dp._ts < 0) && !Ba(t))))
            ? 0
            : 1,
        o = t._rDelay,
        l = 0,
        c,
        u,
        f;
      if (
        (o &&
          t._repeat &&
          ((l = Ci(0, t._tDur, n)),
          (u = Vr(l, o)),
          t._yoyo && u & 1 && (a = 1 - a),
          u !== Vr(t._tTime, o) &&
            ((s = 1 - a),
            t.vars.repeatRefresh && t._initted && t.invalidate())),
        a !== s || Ke || i || t._zTime === tt || (!n && t._zTime))
      ) {
        if (!t._initted && Bl(t, n, i, r, l)) return;
        for (
          f = t._zTime,
            t._zTime = n || (r ? tt : 0),
            r || (r = n && !f),
            t.ratio = a,
            t._from && (a = 1 - a),
            t._time = 0,
            t._tTime = l,
            c = t._pt;
          c;

        )
          c.r(a, c.d), (c = c._next);
        n < 0 && qa(t, n, r, !0),
          t._onUpdate && !r && At(t, "onUpdate"),
          l && t._repeat && !r && t.parent && At(t, "onRepeat"),
          (n >= t._tDur || n < 0) &&
            t.ratio === a &&
            (a && zn(t, 1),
            !r &&
              !Ke &&
              (At(t, a ? "onComplete" : "onReverseComplete", !0),
              t._prom && t._prom()));
      } else t._zTime || (t._zTime = n);
    },
    kp = function (t, n, r) {
      var i;
      if (r > n)
        for (i = t._first; i && i._start <= r; ) {
          if (i.data === "isPause" && i._start > n) return i;
          i = i._next;
        }
      else
        for (i = t._last; i && i._start >= r; ) {
          if (i.data === "isPause" && i._start < n) return i;
          i = i._prev;
        }
    },
    Wr = function (t, n, r, i) {
      var s = t._repeat,
        a = $e(n) || 0,
        o = t._tTime / t._tDur;
      return (
        o && !i && (t._time *= a / t._dur),
        (t._dur = a),
        (t._tDur = s ? (s < 0 ? 1e10 : $e(a * (s + 1) + t._rDelay * s)) : a),
        o > 0 && !i && Ps(t, (t._tTime = t._tDur * o)),
        t.parent && Cs(t),
        r || ar(t.parent, t),
        t
      );
    },
    Vl = function (t) {
      return t instanceof ft ? ar(t) : Wr(t, t._dur);
    },
    Mp = { _start: 0, endTime: Ti, totalDuration: Ti },
    Bt = function e(t, n, r) {
      var i = t.labels,
        s = t._recent || Mp,
        a = t.duration() >= rn ? s.endTime(!1) : t._dur,
        o,
        l,
        c;
      return Be(n) && (isNaN(n) || n in i)
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
              c && r && (l = (l / 100) * (nt(r) ? r[0] : r).totalDuration()),
              o > 1 ? e(t, n.substr(0, o - 1), r) + l : a + l))
        : n == null
        ? a
        : +n;
    },
    wi = function (t, n, r) {
      var i = xn(n[1]),
        s = (i ? 2 : 1) + (t < 2 ? 0 : 1),
        a = n[s],
        o,
        l;
      if ((i && (a.duration = n[1]), (a.parent = r), t)) {
        for (o = a, l = r; l && !("immediateRender" in o); )
          (o = l.vars.defaults || {}), (l = _t(l.vars.inherit) && l.parent);
        (a.immediateRender = _t(o.immediateRender)),
          t < 2 ? (a.runBackwards = 1) : (a.startAt = n[s - 1]);
      }
      return new Oe(n[0], a, n[s + 1]);
    },
    Rn = function (t, n) {
      return t || t === 0 ? n(t) : n;
    },
    Ci = function (t, n, r) {
      return r < t ? t : r > n ? n : r;
    },
    rt = function (t, n) {
      return !Be(t) || !(n = yp.exec(t)) ? "" : n[1];
    },
    $p = function (t, n, r) {
      return Rn(r, function (i) {
        return Ci(t, n, i);
      });
    },
    Va = [].slice,
    Wl = function (t, n) {
      return (
        t &&
        sn(t) &&
        "length" in t &&
        ((!n && !t.length) || (t.length - 1 in t && sn(t[0]))) &&
        !t.nodeType &&
        t !== an
      );
    },
    Op = function (t, n, r) {
      return (
        r === void 0 && (r = []),
        t.forEach(function (i) {
          var s;
          return (Be(i) && !n) || Wl(i, 1)
            ? (s = r).push.apply(s, Vt(i))
            : r.push(i);
        }) || r
      );
    },
    Vt = function (t, n, r) {
      return me && !n && me.selector
        ? me.selector(t)
        : Be(t) && !r && (Aa || !Xr())
        ? Va.call((n || La).querySelectorAll(t), 0)
        : nt(t)
        ? Op(t, r)
        : Wl(t)
        ? Va.call(t, 0)
        : t
        ? [t]
        : [];
    },
    Wa = function (t) {
      return (
        (t = Vt(t)[0] || Si("Invalid scope") || {}),
        function (n) {
          var r = t.current || t.nativeElement || t;
          return Vt(
            n,
            r.querySelectorAll
              ? r
              : r === t
              ? Si("Invalid scope") || La.createElement("div")
              : t
          );
        }
      );
    },
    Yl = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    Xl = function (t) {
      if (Se(t)) return t;
      var n = sn(t) ? t : { each: t },
        r = or(n.ease),
        i = n.from || 0,
        s = parseFloat(n.base) || 0,
        a = {},
        o = i > 0 && i < 1,
        l = isNaN(i) || o,
        c = n.axis,
        u = i,
        f = i;
      return (
        Be(i)
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
            C,
            w,
            P,
            A;
          if (!g) {
            if (((A = n.grid === "auto" ? 0 : (n.grid || [1, rn])[1]), !A)) {
              for (
                w = -1e8;
                w < (w = m[A++].getBoundingClientRect().left) && A < p;

              );
              A < p && A--;
            }
            for (
              g = a[p] = [],
                y = l ? Math.min(A, p) * u - 0.5 : i % A,
                v = A === rn ? 0 : l ? (p * f) / A - 0.5 : (i / A) | 0,
                w = 0,
                P = rn,
                C = 0;
              C < p;
              C++
            )
              (_ = (C % A) - y),
                (x = v - ((C / A) | 0)),
                (g[C] = S =
                  c ? Math.abs(c === "y" ? x : _) : Tl(_ * _ + x * x)),
                S > w && (w = S),
                S < P && (P = S);
            i === "random" && Yl(g),
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
                  0) * (i === "edges" ? -1 : 1)),
              (g.b = p < 0 ? s - p : s),
              (g.u = rt(n.amount || n.each) || 0),
              (r = r && p < 0 ? ic(r) : r);
          }
          return (
            (p = (g[d] - g.min) / g.max || 0),
            $e(g.b + (r ? r(p) : p) * g.v) + g.u
          );
        }
      );
    },
    Ya = function (t) {
      var n = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (r) {
        var i = $e(Math.round(parseFloat(r) / t) * t * n);
        return (i - (i % 1)) / n + (xn(r) ? 0 : rt(r));
      };
    },
    Gl = function (t, n) {
      var r = nt(t),
        i,
        s;
      return (
        !r &&
          sn(t) &&
          ((i = r = t.radius || rn),
          t.values
            ? ((t = Vt(t.values)), (s = !xn(t[0])) && (i *= i))
            : (t = Ya(t.increment))),
        Rn(
          n,
          r
            ? Se(t)
              ? function (a) {
                  return (s = t(a)), Math.abs(s - a) <= i ? s : a;
                }
              : function (a) {
                  for (
                    var o = parseFloat(s ? a.x : a),
                      l = parseFloat(s ? a.y : 0),
                      c = rn,
                      u = 0,
                      f = t.length,
                      d,
                      h;
                    f--;

                  )
                    s
                      ? ((d = t[f].x - o),
                        (h = t[f].y - l),
                        (d = d * d + h * h))
                      : (d = Math.abs(t[f] - o)),
                      d < c && ((c = d), (u = f));
                  return (
                    (u = !i || c <= i ? t[u] : a),
                    s || u === a || xn(a) ? u : u + rt(a)
                  );
                }
            : Ya(t)
        )
      );
    },
    jl = function (t, n, r, i) {
      return Rn(nt(t) ? !n : r === !0 ? !!(r = 0) : !i, function () {
        return nt(t)
          ? t[~~(Math.random() * t.length)]
          : (r = r || 1e-5) &&
              (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (t - r / 2 + Math.random() * (n - t + r * 0.99)) / r
                ) *
                  r *
                  i
              ) / i;
      });
    },
    Ap = function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      return function (i) {
        return n.reduce(function (s, a) {
          return a(s);
        }, i);
      };
    },
    Lp = function (t, n) {
      return function (r) {
        return t(parseFloat(r)) + (n || rt(r));
      };
    },
    Dp = function (t, n, r) {
      return Kl(t, n, 0, 1, r);
    },
    Ul = function (t, n, r) {
      return Rn(r, function (i) {
        return t[~~n(i)];
      });
    },
    Ip = function e(t, n, r) {
      var i = n - t;
      return nt(t)
        ? Ul(t, e(0, t.length), n)
        : Rn(r, function (s) {
            return ((i + ((s - t) % i)) % i) + t;
          });
    },
    zp = function e(t, n, r) {
      var i = n - t,
        s = i * 2;
      return nt(t)
        ? Ul(t, e(0, t.length - 1), n)
        : Rn(r, function (a) {
            return (a = (s + ((a - t) % s)) % s || 0), t + (a > i ? s - a : a);
          });
    },
    Pi = function (t) {
      for (var n = 0, r = "", i, s, a, o; ~(i = t.indexOf("random(", n)); )
        (a = t.indexOf(")", i)),
          (o = t.charAt(i + 7) === "["),
          (s = t.substr(i + 7, a - i - 7).match(o ? Pl : $a)),
          (r +=
            t.substr(n, i - n) +
            jl(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5)),
          (n = a + 1);
      return r + t.substr(n, t.length - n);
    },
    Kl = function (t, n, r, i, s) {
      var a = n - t,
        o = i - r;
      return Rn(s, function (l) {
        return r + (((l - t) / a) * o || 0);
      });
    },
    Rp = function e(t, n, r, i) {
      var s = isNaN(t + n)
        ? 0
        : function (h) {
            return (1 - h) * t + h * n;
          };
      if (!s) {
        var a = Be(t),
          o = {},
          l,
          c,
          u,
          f,
          d;
        if ((r === !0 && (i = 1) && (r = null), a))
          (t = { p: t }), (n = { p: n });
        else if (nt(t) && !nt(n)) {
          for (u = [], f = t.length, d = f - 2, c = 1; c < f; c++)
            u.push(e(t[c - 1], t[c]));
          f--,
            (s = function (m) {
              m *= f;
              var p = Math.min(d, ~~m);
              return u[p](m - p);
            }),
            (r = n);
        } else i || (t = Br(nt(t) ? [] : {}, t));
        if (!u) {
          for (l in n) Ua.call(o, t, l, "get", n[l]);
          s = function (m) {
            return eo(m, o) || (a ? t.p : t);
          };
        }
      }
      return Rn(r, s);
    },
    Ql = function (t, n, r) {
      var i = t.labels,
        s = rn,
        a,
        o,
        l;
      for (a in i)
        (o = i[a] - n),
          o < 0 == !!r && o && s > (o = Math.abs(o)) && ((l = a), (s = o));
      return l;
    },
    At = function (t, n, r) {
      var i = t.vars,
        s = i[n],
        a = me,
        o = t._ctx,
        l,
        c,
        u;
      if (s)
        return (
          (l = i[n + "Params"]),
          (c = i.callbackScope || t),
          r && In.length && Ss(),
          o && (me = o),
          (u = l ? s.apply(c, l) : s.call(c)),
          (me = a),
          u
        );
    },
    ki = function (t) {
      return (
        zn(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!Ke),
        t.progress() < 1 && At(t, "onInterrupt"),
        t
      );
    },
    Yr,
    Zl = [],
    Jl = function (t) {
      if (t)
        if (((t = (!t.name && t.default) || t), Ma() || t.headless)) {
          var n = t.name,
            r = Se(t),
            i =
              n && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            s = {
              init: Ti,
              render: eo,
              add: Ua,
              kill: Jp,
              modifier: Zp,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: Ja,
              aliases: {},
              register: 0,
            };
          if ((Xr(), t !== i)) {
            if ($t[n]) return;
            Ot(i, Ot(Ts(t, s), a)),
              Br(i.prototype, Br(s, Ts(t, a))),
              ($t[(i.prop = n)] = i),
              t.targetTest && (xs.push(i), (Ia[n] = 1)),
              (n =
                (n === "css"
                  ? "CSS"
                  : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin");
          }
          $l(n, i), t.register && t.register(St, i, xt);
        } else Zl.push(t);
    },
    ue = 255,
    Mi = {
      aqua: [0, ue, ue],
      lime: [0, ue, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, ue],
      navy: [0, 0, 128],
      white: [ue, ue, ue],
      olive: [128, 128, 0],
      yellow: [ue, ue, 0],
      orange: [ue, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [ue, 0, 0],
      pink: [ue, 192, 203],
      cyan: [0, ue, ue],
      transparent: [ue, ue, ue, 0],
    },
    Xa = function (t, n, r) {
      return (
        (t += t < 0 ? 1 : t > 1 ? -1 : 0),
        ((t * 6 < 1
          ? n + (r - n) * t * 6
          : t < 0.5
          ? r
          : t * 3 < 2
          ? n + (r - n) * (2 / 3 - t) * 6
          : n) *
          ue +
          0.5) |
          0
      );
    },
    ec = function (t, n, r) {
      var i = t ? (xn(t) ? [t >> 16, (t >> 8) & ue, t & ue] : 0) : Mi.black,
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
        if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Mi[t]))
          i = Mi[t];
        else if (t.charAt(0) === "#") {
          if (
            (t.length < 6 &&
              ((s = t.charAt(1)),
              (a = t.charAt(2)),
              (o = t.charAt(3)),
              (t =
                "#" +
                s +
                s +
                a +
                a +
                o +
                o +
                (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
            t.length === 9)
          )
            return (
              (i = parseInt(t.substr(1, 6), 16)),
              [i >> 16, (i >> 8) & ue, i & ue, parseInt(t.substr(7), 16) / 255]
            );
          (t = parseInt(t.substr(1), 16)),
            (i = [t >> 16, (t >> 8) & ue, t & ue]);
        } else if (t.substr(0, 3) === "hsl") {
          if (((i = m = t.match($a)), !n))
            (l = (+i[0] % 360) / 360),
              (c = +i[1] / 100),
              (u = +i[2] / 100),
              (a = u <= 0.5 ? u * (c + 1) : u + c - u * c),
              (s = u * 2 - a),
              i.length > 3 && (i[3] *= 1),
              (i[0] = Xa(l + 1 / 3, s, a)),
              (i[1] = Xa(l, s, a)),
              (i[2] = Xa(l - 1 / 3, s, a));
          else if (~t.indexOf("="))
            return (i = t.match(wl)), r && i.length < 4 && (i[3] = 1), i;
        } else i = t.match($a) || Mi.transparent;
        i = i.map(Number);
      }
      return (
        n &&
          !m &&
          ((s = i[0] / ue),
          (a = i[1] / ue),
          (o = i[2] / ue),
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
    tc = function (t) {
      var n = [],
        r = [],
        i = -1;
      return (
        t.split(Nn).forEach(function (s) {
          var a = s.match(Hr) || [];
          n.push.apply(n, a), r.push((i += a.length + 1));
        }),
        (n.c = r),
        n
      );
    },
    nc = function (t, n, r) {
      var i = "",
        s = (t + i).match(Nn),
        a = n ? "hsla(" : "rgba(",
        o = 0,
        l,
        c,
        u,
        f;
      if (!s) return t;
      if (
        ((s = s.map(function (d) {
          return (
            (d = ec(d, n, 1)) &&
            a +
              (n
                ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3]
                : d.join(",")) +
              ")"
          );
        })),
        r && ((u = tc(t)), (l = r.c), l.join(i) !== u.c.join(i)))
      )
        for (c = t.replace(Nn, "1").split(Hr), f = c.length - 1; o < f; o++)
          i +=
            c[o] +
            (~l.indexOf(o)
              ? s.shift() || a + "0,0,0,0)"
              : (u.length ? u : s.length ? s : r).shift());
      if (!c)
        for (c = t.split(Nn), f = c.length - 1; o < f; o++) i += c[o] + s[o];
      return i + c[f];
    },
    Nn = (function () {
      var e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        t;
      for (t in Mi) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Np = /hsl[a]?\(/,
    rc = function (t) {
      var n = t.join(" "),
        r;
      if (((Nn.lastIndex = 0), Nn.test(n)))
        return (
          (r = Np.test(n)),
          (t[1] = nc(t[1], r)),
          (t[0] = nc(t[0], r, tc(t[1]))),
          !0
        );
    },
    $i,
    Lt = (function () {
      var e = Date.now,
        t = 500,
        n = 33,
        r = e(),
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
          var y = e() - i,
            v = g === !0,
            _,
            x,
            S,
            C;
          if (
            ((y > t || y < 0) && (r += y - n),
            (i += y),
            (S = i - r),
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
            kl &&
              (!Aa &&
                Ma() &&
                ((an = Aa = window),
                (La = an.document || {}),
                (Mt.gsap = St),
                (an.gsapVersions || (an.gsapVersions = [])).push(St.version),
                Ml(_s || an.GreenSockGlobals || (!an.gsap && an) || {}),
                Zl.forEach(Jl)),
              (u =
                typeof requestAnimationFrame != "undefined" &&
                requestAnimationFrame),
              l && f.sleep(),
              (c =
                u ||
                function (g) {
                  return setTimeout(g, (a - f.time * 1e3 + 1) | 0);
                }),
              ($i = 1),
              m(2));
          },
          sleep: function () {
            (u ? cancelAnimationFrame : clearTimeout)(l), ($i = 0), (c = Ti);
          },
          lagSmoothing: function (g, y) {
            (t = g || 1 / 0), (n = Math.min(y || 33, t));
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
            return f.remove(g), o[v ? "unshift" : "push"](_), Xr(), _;
          },
          remove: function (g, y) {
            ~(y = o.indexOf(g)) && o.splice(y, 1) && h >= y && h--;
          },
          _listeners: o,
        }),
        f
      );
    })(),
    Xr = function () {
      return !$i && Lt.wake();
    },
    ne = {},
    Fp = /^[\d.\-M][\d.\-,\s]/,
    Hp = /["']/g,
    qp = function (t) {
      for (
        var n = {},
          r = t.substr(1, t.length - 3).split(":"),
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
          (n[i] = isNaN(c) ? c.replace(Hp, "").trim() : +c),
          (i = l.substr(o + 1).trim());
      return n;
    },
    Bp = function (t) {
      var n = t.indexOf("(") + 1,
        r = t.indexOf(")"),
        i = t.indexOf("(", n);
      return t.substring(n, ~i && i < r ? t.indexOf(")", r + 1) : r);
    },
    Vp = function (t) {
      var n = (t + "").split("("),
        r = ne[n[0]];
      return r && n.length > 1 && r.config
        ? r.config.apply(
            null,
            ~t.indexOf("{") ? [qp(n[1])] : Bp(t).split(",").map(Il)
          )
        : ne._CE && Fp.test(t)
        ? ne._CE("", t)
        : r;
    },
    ic = function (t) {
      return function (n) {
        return 1 - t(1 - n);
      };
    },
    sc = function e(t, n) {
      for (var r = t._first, i; r; )
        r instanceof ft
          ? e(r, n)
          : r.vars.yoyoEase &&
            (!r._yoyo || !r._repeat) &&
            r._yoyo !== n &&
            (r.timeline
              ? e(r.timeline, n)
              : ((i = r._ease),
                (r._ease = r._yEase),
                (r._yEase = i),
                (r._yoyo = n))),
          (r = r._next);
    },
    or = function (t, n) {
      return (t && (Se(t) ? t : ne[t] || Vp(t))) || n;
    },
    lr = function (t, n, r, i) {
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
        bt(t, function (o) {
          (ne[o] = Mt[o] = s), (ne[(a = o.toLowerCase())] = r);
          for (var l in s)
            ne[
              a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = ne[o + "." + l] = s[l];
        }),
        s
      );
    },
    ac = function (t) {
      return function (n) {
        return n < 0.5 ? (1 - t(1 - n * 2)) / 2 : 0.5 + t((n - 0.5) * 2) / 2;
      };
    },
    Ga = function e(t, n, r) {
      var i = n >= 1 ? n : 1,
        s = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
        a = (s / Pa) * (Math.asin(1 / i) || 0),
        o = function (u) {
          return u === 1 ? 1 : i * Math.pow(2, -10 * u) * vp((u - a) * s) + 1;
        },
        l =
          t === "out"
            ? o
            : t === "in"
            ? function (c) {
                return 1 - o(1 - c);
              }
            : ac(o);
      return (
        (s = Pa / s),
        (l.config = function (c, u) {
          return e(t, c, u);
        }),
        l
      );
    },
    ja = function e(t, n) {
      n === void 0 && (n = 1.70158);
      var r = function (a) {
          return a ? --a * a * ((n + 1) * a + n) + 1 : 0;
        },
        i =
          t === "out"
            ? r
            : t === "in"
            ? function (s) {
                return 1 - r(1 - s);
              }
            : ac(r);
      return (
        (i.config = function (s) {
          return e(t, s);
        }),
        i
      );
    };
  bt("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
    var n = t < 5 ? t + 1 : t;
    lr(
      e + ",Power" + (n - 1),
      t
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
    (ne.Linear.easeNone = ne.none = ne.Linear.easeIn),
    lr("Elastic", Ga("in"), Ga("out"), Ga()),
    (function (e, t) {
      var n = 1 / t,
        r = 2 * n,
        i = 2.5 * n,
        s = function (o) {
          return o < n
            ? e * o * o
            : o < r
            ? e * Math.pow(o - 1.5 / t, 2) + 0.75
            : o < i
            ? e * (o -= 2.25 / t) * o + 0.9375
            : e * Math.pow(o - 2.625 / t, 2) + 0.984375;
        };
      lr(
        "Bounce",
        function (a) {
          return 1 - s(1 - a);
        },
        s
      );
    })(7.5625, 2.75),
    lr("Expo", function (e) {
      return Math.pow(2, 10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
    }),
    lr("Circ", function (e) {
      return -(Tl(1 - e * e) - 1);
    }),
    lr("Sine", function (e) {
      return e === 1 ? 1 : -gp(e * pp) + 1;
    }),
    lr("Back", ja("in"), ja("out"), ja()),
    (ne.SteppedEase =
      ne.steps =
      Mt.SteppedEase =
        {
          config: function (t, n) {
            t === void 0 && (t = 1);
            var r = 1 / t,
              i = t + (n ? 0 : 1),
              s = n ? 1 : 0,
              a = 1 - tt;
            return function (o) {
              return (((i * Ci(0, a, o)) | 0) + s) * r;
            };
          },
        }),
    (Fr.ease = ne["quad.out"]),
    bt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (e) {
        return (Na += e + "," + e + "Params,");
      }
    );
  var oc = function (t, n) {
      (this.id = mp++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = n),
        (this.get = n ? n.get : Ll),
        (this.set = n ? n.getSetter : Ja);
    },
    Oi = (function () {
      function e(n) {
        (this.vars = n),
          (this._delay = +n.delay || 0),
          (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
            ((this._rDelay = n.repeatDelay || 0),
            (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
          (this._ts = 1),
          Wr(this, +n.duration, 1, 1),
          (this.data = n.data),
          me && ((this._ctx = me), me.data.push(this)),
          $i || Lt.wake();
      }
      var t = e.prototype;
      return (
        (t.delay = function (r) {
          return r || r === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + r - this._delay),
              (this._delay = r),
              this)
            : this._delay;
        }),
        (t.duration = function (r) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r
              )
            : this.totalDuration() && this._dur;
        }),
        (t.totalDuration = function (r) {
          return arguments.length
            ? ((this._dirty = 0),
              Wr(
                this,
                this._repeat < 0
                  ? r
                  : (r - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (t.totalTime = function (r, i) {
          if ((Xr(), !arguments.length)) return this._tTime;
          var s = this._dp;
          if (s && s.smoothChildTiming && this._ts) {
            for (
              Ps(this, r), !s._dp || s.parent || Hl(s, this);
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
              on(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== r ||
              (!this._dur && !i) ||
              (this._initted && Math.abs(this._zTime) === tt) ||
              (!r && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = r), Dl(this, r, i)),
            this
          );
        }),
        (t.time = function (r, i) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), r + Fl(this)) %
                  (this._dur + this._rDelay) || (r ? this._dur : 0),
                i
              )
            : this._time;
        }),
        (t.totalProgress = function (r, i) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * r, i)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
            ? 1
            : 0;
        }),
        (t.progress = function (r, i) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
                  Fl(this),
                i
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (t.iteration = function (r, i) {
          var s = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (r - 1) * s, i)
            : this._repeat
            ? Vr(this._tTime, s) + 1
            : 1;
        }),
        (t.timeScale = function (r, i) {
          if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
          if (this._rts === r) return this;
          var s =
            this.parent && this._ts ? ws(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +r || 0),
            (this._ts = this._ps || r === -1e-8 ? 0 : this._rts),
            this.totalTime(
              Ci(-Math.abs(this._delay), this.totalDuration(), s),
              i !== !1
            ),
            Cs(this),
            Ep(this)
          );
        }),
        (t.paused = function (r) {
          return arguments.length
            ? (this._ps !== r &&
                ((this._ps = r),
                r
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (Xr(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== tt &&
                        (this._tTime -= tt)
                    ))),
              this)
            : this._ps;
        }),
        (t.startTime = function (r) {
          if (arguments.length) {
            this._start = r;
            var i = this.parent || this._dp;
            return (
              i && (i._sort || !this.parent) && on(i, this, r - this._delay),
              this
            );
          }
          return this._start;
        }),
        (t.endTime = function (r) {
          return (
            this._start +
            (_t(r) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (t.rawTime = function (r) {
          var i = this.parent || this._dp;
          return i
            ? r &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? ws(i.rawTime(r), this)
              : this._tTime
            : this._tTime;
        }),
        (t.revert = function (r) {
          r === void 0 && (r = bp);
          var i = Ke;
          return (
            (Ke = r),
            Ha(this) &&
              (this.timeline && this.timeline.revert(r),
              this.totalTime(-0.01, r.suppressEvents)),
            this.data !== "nested" && r.kill !== !1 && this.kill(),
            (Ke = i),
            this
          );
        }),
        (t.globalTime = function (r) {
          for (var i = this, s = arguments.length ? r : i.rawTime(); i; )
            (s = i._start + s / (Math.abs(i._ts) || 1)), (i = i._dp);
          return !this.parent && this._sat ? this._sat.globalTime(r) : s;
        }),
        (t.repeat = function (r) {
          return arguments.length
            ? ((this._repeat = r === 1 / 0 ? -2 : r), Vl(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (t.repeatDelay = function (r) {
          if (arguments.length) {
            var i = this._time;
            return (this._rDelay = r), Vl(this), i ? this.time(i) : this;
          }
          return this._rDelay;
        }),
        (t.yoyo = function (r) {
          return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
        }),
        (t.seek = function (r, i) {
          return this.totalTime(Bt(this, r), _t(i));
        }),
        (t.restart = function (r, i) {
          return (
            this.play().totalTime(r ? -this._delay : 0, _t(i)),
            this._dur || (this._zTime = -1e-8),
            this
          );
        }),
        (t.play = function (r, i) {
          return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
        }),
        (t.reverse = function (r, i) {
          return (
            r != null && this.seek(r || this.totalDuration(), i),
            this.reversed(!0).paused(!1)
          );
        }),
        (t.pause = function (r, i) {
          return r != null && this.seek(r, i), this.paused(!0);
        }),
        (t.resume = function () {
          return this.paused(!1);
        }),
        (t.reversed = function (r) {
          return arguments.length
            ? (!!r !== this.reversed() &&
                this.timeScale(-this._rts || (r ? -1e-8 : 0)),
              this)
            : this._rts < 0;
        }),
        (t.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
        }),
        (t.isActive = function () {
          var r = this.parent || this._dp,
            i = this._start,
            s;
          return !!(
            !r ||
            (this._ts &&
              this._initted &&
              r.isActive() &&
              (s = r.rawTime(!0)) >= i &&
              s < this.endTime(!0) - tt)
          );
        }),
        (t.eventCallback = function (r, i, s) {
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
        (t.then = function (r) {
          var i = this;
          return new Promise(function (s) {
            var a = Se(r) ? r : zl,
              o = function () {
                var c = i.then;
                (i.then = null),
                  Se(a) && (a = a(i)) && (a.then || a === i) && (i.then = c),
                  s(a),
                  (i.then = c);
              };
            (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
            (!i._tTime && i._ts < 0)
              ? o()
              : (i._prom = o);
          });
        }),
        (t.kill = function () {
          ki(this);
        }),
        e
      );
    })();
  Ot(Oi.prototype, {
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
  var ft = (function (e) {
    Sl(t, e);
    function t(r, i) {
      var s;
      return (
        r === void 0 && (r = {}),
        (s = e.call(this, r) || this),
        (s.labels = {}),
        (s.smoothChildTiming = !!r.smoothChildTiming),
        (s.autoRemoveChildren = !!r.autoRemoveChildren),
        (s._sort = _t(r.sortChildren)),
        ye && on(r.parent || ye, bn(s), i),
        r.reversed && s.reverse(),
        r.paused && s.paused(!0),
        r.scrollTrigger && ql(bn(s), r.scrollTrigger),
        s
      );
    }
    var n = t.prototype;
    return (
      (n.to = function (i, s, a) {
        return wi(0, arguments, this), this;
      }),
      (n.from = function (i, s, a) {
        return wi(1, arguments, this), this;
      }),
      (n.fromTo = function (i, s, a, o) {
        return wi(2, arguments, this), this;
      }),
      (n.set = function (i, s, a) {
        return (
          (s.duration = 0),
          (s.parent = this),
          Ei(s).repeatDelay || (s.repeat = 0),
          (s.immediateRender = !!s.immediateRender),
          new Oe(i, s, Bt(this, a), 1),
          this
        );
      }),
      (n.call = function (i, s, a) {
        return on(this, Oe.delayedCall(0, i, s), a);
      }),
      (n.staggerTo = function (i, s, a, o, l, c, u) {
        return (
          (a.duration = s),
          (a.stagger = a.stagger || o),
          (a.onComplete = c),
          (a.onCompleteParams = u),
          (a.parent = this),
          new Oe(i, a, Bt(this, l)),
          this
        );
      }),
      (n.staggerFrom = function (i, s, a, o, l, c, u) {
        return (
          (a.runBackwards = 1),
          (Ei(a).immediateRender = _t(a.immediateRender)),
          this.staggerTo(i, s, a, o, l, c, u)
        );
      }),
      (n.staggerFromTo = function (i, s, a, o, l, c, u, f) {
        return (
          (o.startAt = a),
          (Ei(o).immediateRender = _t(o.immediateRender)),
          this.staggerTo(i, s, o, l, c, u, f)
        );
      }),
      (n.render = function (i, s, a) {
        var o = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          c = this._dur,
          u = i <= 0 ? 0 : $e(i),
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
          C,
          w;
        if (
          (this !== ye && u > l && i >= 0 && (u = l),
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
              ((C = this._yoyo),
              (g = c + this._rDelay),
              this._repeat < -1 && i < 0)
            )
              return this.totalTime(g * 100 + i, s, a);
            if (
              ((d = $e(u % g)),
              u === l
                ? ((p = this._repeat), (d = c))
                : ((S = $e(u / g)),
                  (p = ~~S),
                  p && p === S && ((d = c), p--),
                  d > c && (d = c)),
              (S = Vr(this._tTime, g)),
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
                (this.render(o || (w ? 0 : $e(p * g)), s, !c)._lock = 0),
                (this._tTime = u),
                !s && this.parent && At(this, "onRepeat"),
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
              sc(this, w);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((v = kp(this, $e(o), $e(d))), v && (u -= d - (d = v._start))),
            (this._tTime = u),
            (this._time = d),
            (this._act = !_),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = i),
              (o = 0)),
            !o && u && !s && !S && (At(this, "onStart"), this._tTime !== u))
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
            for (var E = i < 0 ? i : d; h; ) {
              if (
                ((m = h._prev), (h._act || E <= h._end) && h._ts && v !== h)
              ) {
                if (h.parent !== this) return this.render(i, s, a);
                if (
                  (h.render(
                    h._ts > 0
                      ? (E - h._start) * h._ts
                      : (h._dirty ? h.totalDuration() : h._tDur) +
                          (E - h._start) * h._ts,
                    s,
                    a || (Ke && Ha(h))
                  ),
                  d !== this._time || (!this._ts && !y))
                ) {
                  (v = 0), m && (u += this._zTime = E ? -1e-8 : tt);
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
            return (this._start = x), Cs(this), this.render(i, s, a);
          this._onUpdate && !s && At(this, "onUpdate", !0),
            ((u === l && this._tTime >= this.totalDuration()) || (!u && o)) &&
              (x === this._start || Math.abs(_) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((i || !c) &&
                  ((u === l && this._ts > 0) || (!u && this._ts < 0)) &&
                  zn(this, 1),
                !s &&
                  !(i < 0 && !o) &&
                  (u || o || !l) &&
                  (At(
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
        if ((xn(s) || (s = Bt(this, s, i)), !(i instanceof Oi))) {
          if (nt(i))
            return (
              i.forEach(function (o) {
                return a.add(o, s);
              }),
              this
            );
          if (Be(i)) return this.addLabel(i, s);
          if (Se(i)) i = Oe.delayedCall(0, i);
          else return this;
        }
        return this !== i ? on(this, i, s) : this;
      }),
      (n.getChildren = function (i, s, a, o) {
        i === void 0 && (i = !0),
          s === void 0 && (s = !0),
          a === void 0 && (a = !0),
          o === void 0 && (o = -1e8);
        for (var l = [], c = this._first; c; )
          c._start >= o &&
            (c instanceof Oe
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
        return Be(i)
          ? this.removeLabel(i)
          : Se(i)
          ? this.killTweensOf(i)
          : (i.parent === this && Es(this, i),
            i === this._recent && (this._recent = this._last),
            ar(this));
      }),
      (n.totalTime = function (i, s) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = $e(
                Lt.time -
                  (this._ts > 0
                    ? i / this._ts
                    : (this.totalDuration() - i) / -this._ts)
              )),
            e.prototype.totalTime.call(this, i, s),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (n.addLabel = function (i, s) {
        return (this.labels[i] = Bt(this, s)), this;
      }),
      (n.removeLabel = function (i) {
        return delete this.labels[i], this;
      }),
      (n.addPause = function (i, s, a) {
        var o = Oe.delayedCall(0, s || Ti, a);
        return (
          (o.data = "isPause"), (this._hasPause = 1), on(this, o, Bt(this, i))
        );
      }),
      (n.removePause = function (i) {
        var s = this._first;
        for (i = Bt(this, i); s; )
          s._start === i && s.data === "isPause" && zn(s), (s = s._next);
      }),
      (n.killTweensOf = function (i, s, a) {
        for (var o = this.getTweensOf(i, a), l = o.length; l--; )
          Fn !== o[l] && o[l].kill(i, s);
        return this;
      }),
      (n.getTweensOf = function (i, s) {
        for (var a = [], o = Vt(i), l = this._first, c = xn(s), u; l; )
          l instanceof Oe
            ? xp(l._targets, o) &&
              (c
                ? (!Fn || (l._initted && l._ts)) &&
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
          o = Bt(a, i),
          l = s,
          c = l.startAt,
          u = l.onStart,
          f = l.onStartParams,
          d = l.immediateRender,
          h,
          m = Oe.to(
            a,
            Ot(
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
                  tt,
                onStart: function () {
                  if ((a.pause(), !h)) {
                    var g =
                      s.duration ||
                      Math.abs(
                        (o - (c && "time" in c ? c.time : a._time)) /
                          a.timeScale()
                      );
                    m._dur !== g && Wr(m, g, 0, 1).render(m._time, !0, !0),
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
        return this.tweenTo(s, Ot({ startAt: { time: Bt(this, i) } }, a));
      }),
      (n.recent = function () {
        return this._recent;
      }),
      (n.nextLabel = function (i) {
        return i === void 0 && (i = this._time), Ql(this, Bt(this, i));
      }),
      (n.previousLabel = function (i) {
        return i === void 0 && (i = this._time), Ql(this, Bt(this, i), 1);
      }),
      (n.currentLabel = function (i) {
        return arguments.length
          ? this.seek(i, !0)
          : this.previousLabel(this._time + tt);
      }),
      (n.shiftChildren = function (i, s, a) {
        a === void 0 && (a = 0);
        for (var o = this._first, l = this.labels, c; o; )
          o._start >= a && ((o._start += i), (o._end += i)), (o = o._next);
        if (s) for (c in l) l[c] >= a && (l[c] += i);
        return ar(this);
      }),
      (n.invalidate = function (i) {
        var s = this._first;
        for (this._lock = 0; s; ) s.invalidate(i), (s = s._next);
        return e.prototype.invalidate.call(this, i);
      }),
      (n.clear = function (i) {
        i === void 0 && (i = !0);
        for (var s = this._first, a; s; )
          (a = s._next), this.remove(s), (s = a);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          i && (this.labels = {}),
          ar(this)
        );
      }),
      (n.totalDuration = function (i) {
        var s = 0,
          a = this,
          o = a._last,
          l = rn,
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
                ? ((a._lock = 1), (on(a, o, u - o._delay, 1)._lock = 0))
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
          Wr(a, a === ye && a._time > s ? a._time : s, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (t.updateRoot = function (i) {
        if ((ye._ts && (Dl(ye, ws(i, ye)), (Ol = Lt.frame)), Lt.frame >= Al)) {
          Al += kt.autoSleep || 120;
          var s = ye._first;
          if ((!s || !s._ts) && kt.autoSleep && Lt._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || Lt.sleep();
          }
        }
      }),
      t
    );
  })(Oi);
  Ot(ft.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Wp = function (t, n, r, i, s, a, o) {
      var l = new xt(this._pt, t, n, 0, 1, hc, null, s),
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
          (y = ~i.indexOf("random(")) && (i = Pi(i)),
          a && ((v = [r, i]), a(v, t, n), (r = v[0]), (i = v[1])),
          d = r.match(Oa) || [];
        (f = Oa.exec(i));

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
              c: m.charAt(1) === "=" ? qr(g, m) - g : parseFloat(m) - g,
              m: h && h < 4 ? Math.round : 0,
            }),
            (c = Oa.lastIndex));
      return (
        (l.c = c < i.length ? i.substring(c, i.length) : ""),
        (l.fp = o),
        (Cl.test(i) || y) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    Ua = function (t, n, r, i, s, a, o, l, c, u) {
      Se(i) && (i = i(s || 0, t, a));
      var f = t[n],
        d =
          r !== "get"
            ? r
            : Se(f)
            ? c
              ? t[
                  n.indexOf("set") || !Se(t["get" + n.substr(3)])
                    ? n
                    : "get" + n.substr(3)
                ](c)
              : t[n]()
            : f,
        h = Se(f) ? (c ? Up : fc) : Za,
        m;
      if (
        (Be(i) &&
          (~i.indexOf("random(") && (i = Pi(i)),
          i.charAt(1) === "=" &&
            ((m = qr(d, i) + (rt(d) || 0)), (m || m === 0) && (i = m))),
        !u || d !== i || Ka)
      )
        return !isNaN(d * i) && i !== ""
          ? ((m = new xt(
              this._pt,
              t,
              n,
              +d || 0,
              i - (d || 0),
              typeof f == "boolean" ? Qp : dc,
              0,
              h
            )),
            c && (m.fp = c),
            o && m.modifier(o, this, t),
            (this._pt = m))
          : (!f && !(n in t) && Da(n, i),
            Wp.call(this, t, n, d, i, h, l || kt.stringFilter, c));
    },
    Yp = function (t, n, r, i, s) {
      if (
        (Se(t) && (t = Ai(t, s, n, r, i)),
        !sn(t) || (t.style && t.nodeType) || nt(t) || El(t))
      )
        return Be(t) ? Ai(t, s, n, r, i) : t;
      var a = {},
        o;
      for (o in t) a[o] = Ai(t[o], s, n, r, i);
      return a;
    },
    lc = function (t, n, r, i, s, a) {
      var o, l, c, u;
      if (
        $t[t] &&
        (o = new $t[t]()).init(
          s,
          o.rawVars ? n[t] : Yp(n[t], i, s, a, r),
          r,
          i,
          a
        ) !== !1 &&
        ((r._pt = l = new xt(r._pt, s, t, 0, 1, o.render, o, 0, o.priority)),
        r !== Yr)
      )
        for (c = r._ptLookup[r._targets.indexOf(s)], u = o._props.length; u--; )
          c[o._props[u]] = l;
      return o;
    },
    Fn,
    Ka,
    Qa = function e(t, n, r) {
      var i = t.vars,
        s = i.ease,
        a = i.startAt,
        o = i.immediateRender,
        l = i.lazy,
        c = i.onUpdate,
        u = i.runBackwards,
        f = i.yoyoEase,
        d = i.keyframes,
        h = i.autoRevert,
        m = t._dur,
        p = t._startAt,
        g = t._targets,
        y = t.parent,
        v = y && y.data === "nested" ? y.vars.targets : g,
        _ = t._overwrite === "auto" && !Ca,
        x = t.timeline,
        S,
        C,
        w,
        P,
        A,
        E,
        $,
        b,
        T,
        O,
        D,
        k,
        L;
      if (
        (x && (!d || !s) && (s = "none"),
        (t._ease = or(s, Fr.ease)),
        (t._yEase = f ? ic(or(f === !0 ? s : f, Fr.ease)) : 0),
        f &&
          t._yoyo &&
          !t._repeat &&
          ((f = t._yEase), (t._yEase = t._ease), (t._ease = f)),
        (t._from = !x && !!i.runBackwards),
        !x || (d && !i.stagger))
      ) {
        if (
          ((b = g[0] ? sr(g[0]).harness : 0),
          (k = b && i[b.prop]),
          (S = Ts(i, Ia)),
          p &&
            (p._zTime < 0 && p.progress(1),
            n < 0 && u && o && !h
              ? p.render(-1, !0)
              : p.revert(u && m ? bs : _p),
            (p._lazy = 0)),
          a)
        ) {
          if (
            (zn(
              (t._startAt = Oe.set(
                g,
                Ot(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: y,
                    immediateRender: !0,
                    lazy: !p && _t(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      c &&
                      function () {
                        return At(t, "onUpdate");
                      },
                    stagger: 0,
                  },
                  a
                )
              ))
            ),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            n < 0 && (Ke || (!o && !h)) && t._startAt.revert(bs),
            o && m && n <= 0 && r <= 0)
          ) {
            n && (t._zTime = n);
            return;
          }
        } else if (u && m && !p) {
          if (
            (n && (o = !1),
            (w = Ot(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !p && _t(l),
                immediateRender: o,
                stagger: 0,
                parent: y,
              },
              S
            )),
            k && (w[b.prop] = k),
            zn((t._startAt = Oe.set(g, w))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            n < 0 && (Ke ? t._startAt.revert(bs) : t._startAt.render(-1, !0)),
            (t._zTime = n),
            !o)
          )
            e(t._startAt, tt, tt);
          else if (!n) return;
        }
        for (
          t._pt = t._ptCache = 0, l = (m && _t(l)) || (l && !m), C = 0;
          C < g.length;
          C++
        ) {
          if (
            ((A = g[C]),
            ($ = A._gsap || Fa(g)[C]._gsap),
            (t._ptLookup[C] = O = {}),
            za[$.id] && In.length && Ss(),
            (D = v === g ? C : v.indexOf(A)),
            b &&
              (T = new b()).init(A, k || S, t, D, v) !== !1 &&
              ((t._pt = P =
                new xt(t._pt, A, T.name, 0, 1, T.render, T, 0, T.priority)),
              T._props.forEach(function (I) {
                O[I] = P;
              }),
              T.priority && (E = 1)),
            !b || k)
          )
            for (w in S)
              $t[w] && (T = lc(w, S, t, D, A, v))
                ? T.priority && (E = 1)
                : (O[w] = P =
                    Ua.call(t, A, w, "get", S[w], D, v, 0, i.stringFilter));
          t._op && t._op[C] && t.kill(A, t._op[C]),
            _ &&
              t._pt &&
              ((Fn = t),
              ye.killTweensOf(A, O, t.globalTime(n)),
              (L = !t.parent),
              (Fn = 0)),
            t._pt && l && (za[$.id] = 1);
        }
        E && pc(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = c),
        (t._initted = (!t._op || t._pt) && !L),
        d && n <= 0 && x.render(rn, !0, !0);
    },
    Xp = function (t, n, r, i, s, a, o, l) {
      var c = ((t._pt && t._ptCache) || (t._ptCache = {}))[n],
        u,
        f,
        d,
        h;
      if (!c)
        for (
          c = t._ptCache[n] = [], d = t._ptLookup, h = t._targets.length;
          h--;

        ) {
          if (((u = d[h][n]), u && u.d && u.d._pt))
            for (u = u.d._pt; u && u.p !== n && u.fp !== n; ) u = u._next;
          if (!u)
            return (
              (Ka = 1),
              (t.vars[n] = "+=0"),
              Qa(t, o),
              (Ka = 0),
              l ? Si(n + " not eligible for reset") : 1
            );
          c.push(u);
        }
      for (h = c.length; h--; )
        (f = c[h]),
          (u = f._pt || f),
          (u.s = (i || i === 0) && !s ? i : u.s + (i || 0) + a * u.c),
          (u.c = r - u.s),
          f.e && (f.e = we(r) + rt(f.e)),
          f.b && (f.b = u.s + rt(f.b));
    },
    Gp = function (t, n) {
      var r = t[0] ? sr(t[0]).harness : 0,
        i = r && r.aliases,
        s,
        a,
        o,
        l;
      if (!i) return n;
      s = Br({}, n);
      for (a in i)
        if (a in s)
          for (l = i[a].split(","), o = l.length; o--; ) s[l[o]] = s[a];
      return s;
    },
    jp = function (t, n, r, i) {
      var s = n.ease || i || "power1.inOut",
        a,
        o;
      if (nt(n))
        (o = r[t] || (r[t] = [])),
          n.forEach(function (l, c) {
            return o.push({ t: (c / (n.length - 1)) * 100, v: l, e: s });
          });
      else
        for (a in n)
          (o = r[a] || (r[a] = [])),
            a === "ease" || o.push({ t: parseFloat(t), v: n[a], e: s });
    },
    Ai = function (t, n, r, i, s) {
      return Se(t)
        ? t.call(n, r, i, s)
        : Be(t) && ~t.indexOf("random(")
        ? Pi(t)
        : t;
    },
    cc = Na + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    uc = {};
  bt(cc + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
    return (uc[e] = 1);
  });
  var Oe = (function (e) {
    Sl(t, e);
    function t(r, i, s, a) {
      var o;
      typeof i == "number" && ((s.duration = i), (i = s), (s = null)),
        (o = e.call(this, a ? i : Ei(i)) || this);
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
        v = i.parent || ye,
        _ = (nt(r) || El(r) ? xn(r[0]) : "length" in i) ? [r] : Vt(r),
        x,
        S,
        C,
        w,
        P,
        A,
        E,
        $;
      if (
        ((o._targets = _.length
          ? Fa(_)
          : Si(
              "GSAP target " + r + " not found. https://gsap.com",
              !kt.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = h),
        m || d || ys(c) || ys(u))
      ) {
        if (
          ((i = o.vars),
          (x = o.timeline =
            new ft({
              data: "nested",
              defaults: p || {},
              targets: v && v.data === "nested" ? v.vars.targets : _,
            })),
          x.kill(),
          (x.parent = x._dp = bn(o)),
          (x._start = 0),
          d || ys(c) || ys(u))
        ) {
          if (((w = _.length), (E = d && Xl(d)), sn(d)))
            for (P in d) ~cc.indexOf(P) && ($ || ($ = {}), ($[P] = d[P]));
          for (S = 0; S < w; S++)
            (C = Ts(i, uc)),
              (C.stagger = 0),
              y && (C.yoyoEase = y),
              $ && Br(C, $),
              (A = _[S]),
              (C.duration = +Ai(c, bn(o), S, A, _)),
              (C.delay = (+Ai(u, bn(o), S, A, _) || 0) - o._delay),
              !d &&
                w === 1 &&
                C.delay &&
                ((o._delay = u = C.delay), (o._start += u), (C.delay = 0)),
              x.to(A, C, E ? E(S, A, _) : 0),
              (x._ease = ne.none);
          x.duration() ? (c = u = 0) : (o.timeline = 0);
        } else if (m) {
          Ei(Ot(x.vars.defaults, { ease: "none" })),
            (x._ease = or(m.ease || i.ease || "none"));
          var b = 0,
            T,
            O,
            D;
          if (nt(m))
            m.forEach(function (k) {
              return x.to(_, k, ">");
            }),
              x.duration();
          else {
            C = {};
            for (P in m)
              P === "ease" || P === "easeEach" || jp(P, m[P], C, m.easeEach);
            for (P in C)
              for (
                T = C[P].sort(function (k, L) {
                  return k.t - L.t;
                }),
                  b = 0,
                  S = 0;
                S < T.length;
                S++
              )
                (O = T[S]),
                  (D = {
                    ease: O.e,
                    duration: ((O.t - (S ? T[S - 1].t : 0)) / 100) * c,
                  }),
                  (D[P] = O.v),
                  x.to(_, D, b),
                  (b += D.duration);
            x.duration() < c && x.to({}, { duration: c - x.duration() });
          }
        }
        c || o.duration((c = x.duration()));
      } else o.timeline = 0;
      return (
        h === !0 && !Ca && ((Fn = bn(o)), ye.killTweensOf(_), (Fn = 0)),
        on(v, bn(o), s),
        i.reversed && o.reverse(),
        i.paused && o.paused(!0),
        (f ||
          (!c &&
            !m &&
            o._start === $e(v._time) &&
            _t(f) &&
            wp(bn(o)) &&
            v.data !== "nested")) &&
          ((o._tTime = -1e-8), o.render(Math.max(0, -u) || 0)),
        g && ql(bn(o), g),
        o
      );
    }
    var n = t.prototype;
    return (
      (n.render = function (i, s, a) {
        var o = this._time,
          l = this._tDur,
          c = this._dur,
          u = i < 0,
          f = i > l - tt && !u ? l : i < tt ? 0 : i,
          d,
          h,
          m,
          p,
          g,
          y,
          v,
          _,
          x;
        if (!c) Pp(this, i, s, a);
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
              ((d = $e(f % p)),
              f === l
                ? ((m = this._repeat), (d = c))
                : ((g = $e(f / p)),
                  (m = ~~g),
                  m && m === g ? ((d = c), m--) : d > c && (d = c)),
              (y = this._yoyo && m & 1),
              y && ((x = this._yEase), (d = c - d)),
              (g = Vr(this._tTime, p)),
              d === o && !a && this._initted && m === g)
            )
              return (this._tTime = f), this;
            m !== g &&
              (_ && this._yEase && sc(_, y),
              this.vars.repeatRefresh &&
                !y &&
                !this._lock &&
                d !== p &&
                this._initted &&
                ((this._lock = a = 1),
                (this.render($e(p * m), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Bl(this, u ? i : d, a, s, f)) return (this._tTime = 0), this;
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
            !o && f && !s && !g && (At(this, "onStart"), this._tTime !== f))
          )
            return this;
          for (h = this._pt; h; ) h.r(v, h.d), (h = h._next);
          (_ && _.render(i < 0 ? i : _._dur * _._ease(d / this._dur), s, a)) ||
            (this._startAt && (this._zTime = i)),
            this._onUpdate &&
              !s &&
              (u && qa(this, i, s, a), At(this, "onUpdate")),
            this._repeat &&
              m !== g &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              At(this, "onRepeat"),
            (f === this._tDur || !f) &&
              this._tTime === f &&
              (u && !this._onUpdate && qa(this, i, !0, !0),
              (i || !c) &&
                ((f === this._tDur && this._ts > 0) || (!f && this._ts < 0)) &&
                zn(this, 1),
              !s &&
                !(u && !o) &&
                (f || o || y) &&
                (At(this, f === l ? "onComplete" : "onReverseComplete", !0),
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
          e.prototype.invalidate.call(this, i)
        );
      }),
      (n.resetTo = function (i, s, a, o, l) {
        $i || Lt.wake(), this._ts || this.play();
        var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          u;
        return (
          this._initted || Qa(this, c),
          (u = this._ease(c / this._dur)),
          Xp(this, i, s, a, o, u, c, l)
            ? this.resetTo(i, s, a, o, 1)
            : (Ps(this, 0),
              this.parent ||
                Nl(
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
              ? ki(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!Ke),
            this
          );
        if (this.timeline) {
          var a = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(i, s, Fn && Fn.vars.overwrite !== !0)
              ._first || ki(this),
            this.parent &&
              a !== this.timeline.totalDuration() &&
              Wr(this, (this._dur * this.timeline._tDur) / a, 0, 1),
            this
          );
        }
        var o = this._targets,
          l = i ? Vt(i) : o,
          c = this._ptLookup,
          u = this._pt,
          f,
          d,
          h,
          m,
          p,
          g,
          y;
        if ((!s || s === "all") && Tp(o, l))
          return s === "all" && (this._pt = 0), ki(this);
        for (
          f = this._op = this._op || [],
            s !== "all" &&
              (Be(s) &&
                ((p = {}),
                bt(s, function (v) {
                  return (p[v] = 1);
                }),
                (s = p)),
              (s = Gp(o, s))),
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
                    Es(this, g, "_pt"),
                  delete d[p]),
                h !== "all" && (h[p] = 1);
          }
        return this._initted && !this._pt && u && ki(this), this;
      }),
      (t.to = function (i, s) {
        return new t(i, s, arguments[2]);
      }),
      (t.from = function (i, s) {
        return wi(1, arguments);
      }),
      (t.delayedCall = function (i, s, a, o) {
        return new t(s, 0, {
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
      (t.fromTo = function (i, s, a) {
        return wi(2, arguments);
      }),
      (t.set = function (i, s) {
        return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new t(i, s);
      }),
      (t.killTweensOf = function (i, s, a) {
        return ye.killTweensOf(i, s, a);
      }),
      t
    );
  })(Oi);
  Ot(Oe.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    bt("staggerTo,staggerFrom,staggerFromTo", function (e) {
      Oe[e] = function () {
        var t = new ft(),
          n = Va.call(arguments, 0);
        return n.splice(e === "staggerFromTo" ? 5 : 4, 0, 0), t[e].apply(t, n);
      };
    });
  var Za = function (t, n, r) {
      return (t[n] = r);
    },
    fc = function (t, n, r) {
      return t[n](r);
    },
    Up = function (t, n, r, i) {
      return t[n](i.fp, r);
    },
    Kp = function (t, n, r) {
      return t.setAttribute(n, r);
    },
    Ja = function (t, n) {
      return Se(t[n]) ? fc : ka(t[n]) && t.setAttribute ? Kp : Za;
    },
    dc = function (t, n) {
      return n.set(n.t, n.p, Math.round((n.s + n.c * t) * 1e6) / 1e6, n);
    },
    Qp = function (t, n) {
      return n.set(n.t, n.p, !!(n.s + n.c * t), n);
    },
    hc = function (t, n) {
      var r = n._pt,
        i = "";
      if (!t && n.b) i = n.b;
      else if (t === 1 && n.e) i = n.e;
      else {
        for (; r; )
          (i =
            r.p +
            (r.m
              ? r.m(r.s + r.c * t)
              : Math.round((r.s + r.c * t) * 1e4) / 1e4) +
            i),
            (r = r._next);
        i += n.c;
      }
      n.set(n.t, n.p, i, n);
    },
    eo = function (t, n) {
      for (var r = n._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    Zp = function (t, n, r, i) {
      for (var s = this._pt, a; s; )
        (a = s._next), s.p === i && s.modifier(t, n, r), (s = a);
    },
    Jp = function (t) {
      for (var n = this._pt, r, i; n; )
        (i = n._next),
          (n.p === t && !n.op) || n.op === t
            ? Es(this, n, "_pt")
            : n.dep || (r = 1),
          (n = i);
      return !r;
    },
    em = function (t, n, r, i) {
      i.mSet(t, n, i.m.call(i.tween, r, i.mt), i);
    },
    pc = function (t) {
      for (var n = t._pt, r, i, s, a; n; ) {
        for (r = n._next, i = s; i && i.pr > n.pr; ) i = i._next;
        (n._prev = i ? i._prev : a) ? (n._prev._next = n) : (s = n),
          (n._next = i) ? (i._prev = n) : (a = n),
          (n = r);
      }
      t._pt = s;
    },
    xt = (function () {
      function e(n, r, i, s, a, o, l, c, u) {
        (this.t = r),
          (this.s = s),
          (this.c = a),
          (this.p = i),
          (this.r = o || dc),
          (this.d = l || this),
          (this.set = c || Za),
          (this.pr = u || 0),
          (this._next = n),
          n && (n._prev = this);
      }
      var t = e.prototype;
      return (
        (t.modifier = function (r, i, s) {
          (this.mSet = this.mSet || this.set),
            (this.set = em),
            (this.m = r),
            (this.mt = s),
            (this.tween = i);
        }),
        e
      );
    })();
  bt(
    Na +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (e) {
      return (Ia[e] = 1);
    }
  ),
    (Mt.TweenMax = Mt.TweenLite = Oe),
    (Mt.TimelineLite = Mt.TimelineMax = ft),
    (ye = new ft({
      sortChildren: !1,
      defaults: Fr,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (kt.stringFilter = rc);
  var cr = [],
    ks = {},
    tm = [],
    mc = 0,
    nm = 0,
    to = function (t) {
      return (ks[t] || tm).map(function (n) {
        return n();
      });
    },
    no = function () {
      var t = Date.now(),
        n = [];
      t - mc > 2 &&
        (to("matchMediaInit"),
        cr.forEach(function (r) {
          var i = r.queries,
            s = r.conditions,
            a,
            o,
            l,
            c;
          for (o in i)
            (a = an.matchMedia(i[o]).matches),
              a && (l = 1),
              a !== s[o] && ((s[o] = a), (c = 1));
          c && (r.revert(), l && n.push(r));
        }),
        to("matchMediaRevert"),
        n.forEach(function (r) {
          return r.onMatch(r, function (i) {
            return r.add(null, i);
          });
        }),
        (mc = t),
        to("matchMedia"));
    },
    gc = (function () {
      function e(n, r) {
        (this.selector = r && Wa(r)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = nm++),
          n && this.add(n);
      }
      var t = e.prototype;
      return (
        (t.add = function (r, i, s) {
          Se(r) && ((s = i), (i = r), (r = Se));
          var a = this,
            o = function () {
              var c = me,
                u = a.selector,
                f;
              return (
                c && c !== a && c.data.push(a),
                s && (a.selector = Wa(s)),
                (me = a),
                (f = i.apply(a, arguments)),
                Se(f) && a._r.push(f),
                (me = c),
                (a.selector = u),
                (a.isReverted = !1),
                f
              );
            };
          return (
            (a.last = o),
            r === Se
              ? o(a, function (l) {
                  return a.add(null, l);
                })
              : r
              ? (a[r] = o)
              : o
          );
        }),
        (t.ignore = function (r) {
          var i = me;
          (me = null), r(this), (me = i);
        }),
        (t.getTweens = function () {
          var r = [];
          return (
            this.data.forEach(function (i) {
              return i instanceof e
                ? r.push.apply(r, i.getTweens())
                : i instanceof Oe &&
                    !(i.parent && i.parent.data === "nested") &&
                    r.push(i);
            }),
            r
          );
        }),
        (t.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (t.kill = function (r, i) {
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
                      c instanceof ft
                        ? c.data !== "nested" &&
                          (c.scrollTrigger && c.scrollTrigger.revert(),
                          c.kill())
                        : !(c instanceof Oe) && c.revert && c.revert(r);
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
            for (var a = cr.length; a--; )
              cr[a].id === this.id && cr.splice(a, 1);
        }),
        (t.revert = function (r) {
          this.kill(r || {});
        }),
        e
      );
    })(),
    rm = (function () {
      function e(n) {
        (this.contexts = []), (this.scope = n), me && me.data.push(this);
      }
      var t = e.prototype;
      return (
        (t.add = function (r, i, s) {
          sn(r) || (r = { matches: r });
          var a = new gc(0, s || this.scope),
            o = (a.conditions = {}),
            l,
            c,
            u;
          me && !a.selector && (a.selector = me.selector),
            this.contexts.push(a),
            (i = a.add("onMatch", i)),
            (a.queries = r);
          for (c in r)
            c === "all"
              ? (u = 1)
              : ((l = an.matchMedia(r[c])),
                l &&
                  (cr.indexOf(a) < 0 && cr.push(a),
                  (o[c] = l.matches) && (u = 1),
                  l.addListener
                    ? l.addListener(no)
                    : l.addEventListener("change", no)));
          return (
            u &&
              i(a, function (f) {
                return a.add(null, f);
              }),
            this
          );
        }),
        (t.revert = function (r) {
          this.kill(r || {});
        }),
        (t.kill = function (r) {
          this.contexts.forEach(function (i) {
            return i.kill(r, !0);
          });
        }),
        e
      );
    })(),
    Ms = {
      registerPlugin: function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        n.forEach(function (i) {
          return Jl(i);
        });
      },
      timeline: function (t) {
        return new ft(t);
      },
      getTweensOf: function (t, n) {
        return ye.getTweensOf(t, n);
      },
      getProperty: function (t, n, r, i) {
        Be(t) && (t = Vt(t)[0]);
        var s = sr(t || {}).get,
          a = r ? zl : Il;
        return (
          r === "native" && (r = ""),
          t &&
            (n
              ? a((($t[n] && $t[n].get) || s)(t, n, r, i))
              : function (o, l, c) {
                  return a((($t[o] && $t[o].get) || s)(t, o, l, c));
                })
        );
      },
      quickSetter: function (t, n, r) {
        if (((t = Vt(t)), t.length > 1)) {
          var i = t.map(function (u) {
              return St.quickSetter(u, n, r);
            }),
            s = i.length;
          return function (u) {
            for (var f = s; f--; ) i[f](u);
          };
        }
        t = t[0] || {};
        var a = $t[n],
          o = sr(t),
          l = (o.harness && (o.harness.aliases || {})[n]) || n,
          c = a
            ? function (u) {
                var f = new a();
                (Yr._pt = 0),
                  f.init(t, r ? u + r : u, Yr, 0, [t]),
                  f.render(1, f),
                  Yr._pt && eo(1, Yr);
              }
            : o.set(t, l);
        return a
          ? c
          : function (u) {
              return c(t, l, r ? u + r : u, o, 1);
            };
      },
      quickTo: function (t, n, r) {
        var i,
          s = St.to(
            t,
            Ot(
              ((i = {}), (i[n] = "+=0.1"), (i.paused = !0), (i.stagger = 0), i),
              r || {}
            )
          ),
          a = function (l, c, u) {
            return s.resetTo(n, l, c, u);
          };
        return (a.tween = s), a;
      },
      isTweening: function (t) {
        return ye.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = or(t.ease, Fr.ease)), Rl(Fr, t || {});
      },
      config: function (t) {
        return Rl(kt, t || {});
      },
      registerEffect: function (t) {
        var n = t.name,
          r = t.effect,
          i = t.plugins,
          s = t.defaults,
          a = t.extendTimeline;
        (i || "").split(",").forEach(function (o) {
          return (
            o &&
            !$t[o] &&
            !Mt[o] &&
            Si(n + " effect requires " + o + " plugin.")
          );
        }),
          (Ra[n] = function (o, l, c) {
            return r(Vt(o), Ot(l || {}, s), c);
          }),
          a &&
            (ft.prototype[n] = function (o, l, c) {
              return this.add(Ra[n](o, sn(l) ? l : (c = l) && {}, this), c);
            });
      },
      registerEase: function (t, n) {
        ne[t] = or(n);
      },
      parseEase: function (t, n) {
        return arguments.length ? or(t, n) : ne;
      },
      getById: function (t) {
        return ye.getById(t);
      },
      exportRoot: function (t, n) {
        t === void 0 && (t = {});
        var r = new ft(t),
          i,
          s;
        for (
          r.smoothChildTiming = _t(t.smoothChildTiming),
            ye.remove(r),
            r._dp = 0,
            r._time = r._tTime = ye._time,
            i = ye._first;
          i;

        )
          (s = i._next),
            (n ||
              !(
                !i._dur &&
                i instanceof Oe &&
                i.vars.onComplete === i._targets[0]
              )) &&
              on(r, i, i._start - i._delay),
            (i = s);
        return on(ye, r, 0), r;
      },
      context: function (t, n) {
        return t ? new gc(t, n) : me;
      },
      matchMedia: function (t) {
        return new rm(t);
      },
      matchMediaRefresh: function () {
        return (
          cr.forEach(function (t) {
            var n = t.conditions,
              r,
              i;
            for (i in n) n[i] && ((n[i] = !1), (r = 1));
            r && t.revert();
          }) || no()
        );
      },
      addEventListener: function (t, n) {
        var r = ks[t] || (ks[t] = []);
        ~r.indexOf(n) || r.push(n);
      },
      removeEventListener: function (t, n) {
        var r = ks[t],
          i = r && r.indexOf(n);
        i >= 0 && r.splice(i, 1);
      },
      utils: {
        wrap: Ip,
        wrapYoyo: zp,
        distribute: Xl,
        random: jl,
        snap: Gl,
        normalize: Dp,
        getUnit: rt,
        clamp: $p,
        splitColor: ec,
        toArray: Vt,
        selector: Wa,
        mapRange: Kl,
        pipe: Ap,
        unitize: Lp,
        interpolate: Rp,
        shuffle: Yl,
      },
      install: Ml,
      effects: Ra,
      ticker: Lt,
      updateRoot: ft.updateRoot,
      plugins: $t,
      globalTimeline: ye,
      core: {
        PropTween: xt,
        globals: $l,
        Tween: Oe,
        Timeline: ft,
        Animation: Oi,
        getCache: sr,
        _removeLinkedListItem: Es,
        reverting: function () {
          return Ke;
        },
        context: function (t) {
          return t && me && (me.data.push(t), (t._ctx = me)), me;
        },
        suppressOverwrites: function (t) {
          return (Ca = t);
        },
      },
    };
  bt("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
    return (Ms[e] = Oe[e]);
  }),
    Lt.add(ft.updateRoot),
    (Yr = Ms.to({}, { duration: 0 }));
  var im = function (t, n) {
      for (var r = t._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
        r = r._next;
      return r;
    },
    sm = function (t, n) {
      var r = t._targets,
        i,
        s,
        a;
      for (i in n)
        for (s = r.length; s--; )
          (a = t._ptLookup[s][i]),
            a &&
              (a = a.d) &&
              (a._pt && (a = im(a, i)),
              a && a.modifier && a.modifier(n[i], t, r[s], i));
    },
    ro = function (t, n) {
      return {
        name: t,
        headless: 1,
        rawVars: 1,
        init: function (i, s, a) {
          a._onInit = function (o) {
            var l, c;
            if (
              (Be(s) &&
                ((l = {}),
                bt(s, function (u) {
                  return (l[u] = 1);
                }),
                (s = l)),
              n)
            ) {
              l = {};
              for (c in s) l[c] = n(s[c]);
              s = l;
            }
            sm(o, s);
          };
        },
      };
    },
    St =
      Ms.registerPlugin(
        {
          name: "attr",
          init: function (t, n, r, i, s) {
            var a, o, l;
            this.tween = r;
            for (a in n)
              (l = t.getAttribute(a) || ""),
                (o = this.add(
                  t,
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
          render: function (t, n) {
            for (var r = n._pt; r; )
              Ke ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
          },
        },
        {
          name: "endArray",
          headless: 1,
          init: function (t, n) {
            for (var r = n.length; r--; )
              this.add(t, r, t[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
          },
        },
        ro("roundProps", Ya),
        ro("modifiers"),
        ro("snap", Gl)
      ) || Ms;
  (Oe.version = ft.version = St.version = "3.13.0"),
    (kl = 1),
    Ma() && Xr(),
    ne.Power0,
    ne.Power1,
    ne.Power2,
    ne.Power3,
    ne.Power4,
    ne.Linear,
    ne.Quad,
    ne.Cubic,
    ne.Quart,
    ne.Quint,
    ne.Strong,
    ne.Elastic,
    ne.Back,
    ne.SteppedEase,
    ne.Bounce,
    ne.Sine,
    ne.Expo,
    ne.Circ;
  /*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var vc,
    Hn,
    Gr,
    io,
    ur,
    yc,
    so,
    am = function () {
      return typeof window != "undefined";
    },
    Sn = {},
    fr = 180 / Math.PI,
    jr = Math.PI / 180,
    Ur = Math.atan2,
    _c = 1e8,
    ao = /([A-Z])/g,
    om = /(left|right|width|margin|padding|x)/i,
    lm = /[\s,\(]\S/,
    ln = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    oo = function (t, n) {
      return n.set(n.t, n.p, Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u, n);
    },
    cm = function (t, n) {
      return n.set(
        n.t,
        n.p,
        t === 1 ? n.e : Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u,
        n
      );
    },
    um = function (t, n) {
      return n.set(
        n.t,
        n.p,
        t ? Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u : n.b,
        n
      );
    },
    fm = function (t, n) {
      var r = n.s + n.c * t;
      n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
    },
    bc = function (t, n) {
      return n.set(n.t, n.p, t ? n.e : n.b, n);
    },
    xc = function (t, n) {
      return n.set(n.t, n.p, t !== 1 ? n.b : n.e, n);
    },
    dm = function (t, n, r) {
      return (t.style[n] = r);
    },
    hm = function (t, n, r) {
      return t.style.setProperty(n, r);
    },
    pm = function (t, n, r) {
      return (t._gsap[n] = r);
    },
    mm = function (t, n, r) {
      return (t._gsap.scaleX = t._gsap.scaleY = r);
    },
    gm = function (t, n, r, i, s) {
      var a = t._gsap;
      (a.scaleX = a.scaleY = r), a.renderTransform(s, a);
    },
    vm = function (t, n, r, i, s) {
      var a = t._gsap;
      (a[n] = r), a.renderTransform(s, a);
    },
    _e = "transform",
    Tt = _e + "Origin",
    ym = function e(t, n) {
      var r = this,
        i = this.target,
        s = i.style,
        a = i._gsap;
      if (t in Sn && s) {
        if (((this.tfm = this.tfm || {}), t !== "transform"))
          (t = ln[t] || t),
            ~t.indexOf(",")
              ? t.split(",").forEach(function (o) {
                  return (r.tfm[o] = Tn(i, o));
                })
              : (this.tfm[t] = a.x ? a[t] : Tn(i, t)),
            t === Tt && (this.tfm.zOrigin = a.zOrigin);
        else
          return ln.transform.split(",").forEach(function (o) {
            return e.call(r, o, n);
          });
        if (this.props.indexOf(_e) >= 0) return;
        a.svg &&
          ((this.svgo = i.getAttribute("data-svg-origin")),
          this.props.push(Tt, n, "")),
          (t = _e);
      }
      (s || n) && this.props.push(t, n, s[t]);
    },
    Sc = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    },
    _m = function () {
      var t = this.props,
        n = this.target,
        r = n.style,
        i = n._gsap,
        s,
        a;
      for (s = 0; s < t.length; s += 3)
        t[s + 1]
          ? t[s + 1] === 2
            ? n[t[s]](t[s + 2])
            : (n[t[s]] = t[s + 2])
          : t[s + 2]
          ? (r[t[s]] = t[s + 2])
          : r.removeProperty(
              t[s].substr(0, 2) === "--"
                ? t[s]
                : t[s].replace(ao, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (a in this.tfm) i[a] = this.tfm[a];
        i.svg &&
          (i.renderTransform(),
          n.setAttribute("data-svg-origin", this.svgo || "")),
          (s = so()),
          (!s || !s.isStart) &&
            !r[_e] &&
            (Sc(r),
            i.zOrigin &&
              r[Tt] &&
              ((r[Tt] += " " + i.zOrigin + "px"),
              (i.zOrigin = 0),
              i.renderTransform()),
            (i.uncache = 1));
      }
    },
    Tc = function (t, n) {
      var r = { target: t, props: [], revert: _m, save: ym };
      return (
        t._gsap || St.core.getCache(t),
        n &&
          t.style &&
          t.nodeType &&
          n.split(",").forEach(function (i) {
            return r.save(i);
          }),
        r
      );
    },
    Ec,
    lo = function (t, n) {
      var r = Hn.createElementNS
        ? Hn.createElementNS(
            (n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : Hn.createElement(t);
      return r && r.style ? r : Hn.createElement(t);
    },
    Wt = function e(t, n, r) {
      var i = getComputedStyle(t);
      return (
        i[n] ||
        i.getPropertyValue(n.replace(ao, "-$1").toLowerCase()) ||
        i.getPropertyValue(n) ||
        (!r && e(t, Kr(n) || n, 1)) ||
        ""
      );
    },
    wc = "O,Moz,ms,Ms,Webkit".split(","),
    Kr = function (t, n, r) {
      var i = n || ur,
        s = i.style,
        a = 5;
      if (t in s && !r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        a-- && !(wc[a] + t in s);

      );
      return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? wc[a] : "") + t;
    },
    co = function () {
      am() &&
        window.document &&
        ((vc = window),
        (Hn = vc.document),
        (Gr = Hn.documentElement),
        (ur = lo("div") || { style: {} }),
        lo("div"),
        (_e = Kr(_e)),
        (Tt = _e + "Origin"),
        (ur.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Ec = !!Kr("perspective")),
        (so = St.core.reverting),
        (io = 1));
    },
    Cc = function (t) {
      var n = t.ownerSVGElement,
        r = lo(
          "svg",
          (n && n.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        i = t.cloneNode(!0),
        s;
      (i.style.display = "block"), r.appendChild(i), Gr.appendChild(r);
      try {
        s = i.getBBox();
      } catch (a) {}
      return r.removeChild(i), Gr.removeChild(r), s;
    },
    Pc = function (t, n) {
      for (var r = n.length; r--; )
        if (t.hasAttribute(n[r])) return t.getAttribute(n[r]);
    },
    kc = function (t) {
      var n, r;
      try {
        n = t.getBBox();
      } catch (i) {
        (n = Cc(t)), (r = 1);
      }
      return (
        (n && (n.width || n.height)) || r || (n = Cc(t)),
        n && !n.width && !n.x && !n.y
          ? {
              x: +Pc(t, ["x", "cx", "x1"]) || 0,
              y: +Pc(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : n
      );
    },
    Mc = function (t) {
      return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && kc(t));
    },
    dr = function (t, n) {
      if (n) {
        var r = t.style,
          i;
        n in Sn && n !== Tt && (n = _e),
          r.removeProperty
            ? ((i = n.substr(0, 2)),
              (i === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
              r.removeProperty(
                i === "--" ? n : n.replace(ao, "-$1").toLowerCase()
              ))
            : r.removeAttribute(n);
      }
    },
    qn = function (t, n, r, i, s, a) {
      var o = new xt(t._pt, n, r, 0, 1, a ? xc : bc);
      return (t._pt = o), (o.b = i), (o.e = s), t._props.push(r), o;
    },
    $c = { deg: 1, rad: 1, turn: 1 },
    bm = { grid: 1, flex: 1 },
    Bn = function e(t, n, r, i) {
      var s = parseFloat(r) || 0,
        a = (r + "").trim().substr((s + "").length) || "px",
        o = ur.style,
        l = om.test(n),
        c = t.tagName.toLowerCase() === "svg",
        u = (c ? "client" : "offset") + (l ? "Width" : "Height"),
        f = 100,
        d = i === "px",
        h = i === "%",
        m,
        p,
        g,
        y;
      if (i === a || !s || $c[i] || $c[a]) return s;
      if (
        (a !== "px" && !d && (s = e(t, n, r, "px")),
        (y = t.getCTM && Mc(t)),
        (h || a === "%") && (Sn[n] || ~n.indexOf("adius")))
      )
        return (
          (m = y ? t.getBBox()[l ? "width" : "height"] : t[u]),
          we(h ? (s / m) * f : (s / 100) * m)
        );
      if (
        ((o[l ? "width" : "height"] = f + (d ? a : i)),
        (p =
          (i !== "rem" && ~n.indexOf("adius")) ||
          (i === "em" && t.appendChild && !c)
            ? t
            : t.parentNode),
        y && (p = (t.ownerSVGElement || {}).parentNode),
        (!p || p === Hn || !p.appendChild) && (p = Hn.body),
        (g = p._gsap),
        g && h && g.width && l && g.time === Lt.time && !g.uncache)
      )
        return we((s / g.width) * f);
      if (h && (n === "height" || n === "width")) {
        var v = t.style[n];
        (t.style[n] = f + i), (m = t[u]), v ? (t.style[n] = v) : dr(t, n);
      } else
        (h || a === "%") &&
          !bm[Wt(p, "display")] &&
          (o.position = Wt(t, "position")),
          p === t && (o.position = "static"),
          p.appendChild(ur),
          (m = ur[u]),
          p.removeChild(ur),
          (o.position = "absolute");
      return (
        l && h && ((g = sr(p)), (g.time = Lt.time), (g.width = p[u])),
        we(d ? (m * s) / f : m && s ? (f / m) * s : 0)
      );
    },
    Tn = function (t, n, r, i) {
      var s;
      return (
        io || co(),
        n in ln &&
          n !== "transform" &&
          ((n = ln[n]), ~n.indexOf(",") && (n = n.split(",")[0])),
        Sn[n] && n !== "transform"
          ? ((s = Di(t, i)),
            (s =
              n !== "transformOrigin"
                ? s[n]
                : s.svg
                ? s.origin
                : Os(Wt(t, Tt)) + " " + s.zOrigin + "px"))
          : ((s = t.style[n]),
            (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) &&
              (s =
                ($s[n] && $s[n](t, n, r)) ||
                Wt(t, n) ||
                Ll(t, n) ||
                (n === "opacity" ? 1 : 0))),
        r && !~(s + "").trim().indexOf(" ") ? Bn(t, n, s, r) + r : s
      );
    },
    xm = function (t, n, r, i) {
      if (!r || r === "none") {
        var s = Kr(n, t, 1),
          a = s && Wt(t, s, 1);
        a && a !== r
          ? ((n = s), (r = a))
          : n === "borderColor" && (r = Wt(t, "borderTopColor"));
      }
      var o = new xt(this._pt, t.style, n, 0, 1, hc),
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
          (i = Wt(t, i.substring(4, i.indexOf(")")))),
        i === "auto" &&
          ((p = t.style[n]),
          (t.style[n] = i),
          (i = Wt(t, n) || i),
          p ? (t.style[n] = p) : dr(t, n)),
        (u = [r, i]),
        rc(u),
        (r = u[0]),
        (i = u[1]),
        (d = r.match(Hr) || []),
        (S = i.match(Hr) || []),
        S.length)
      ) {
        for (; (f = Hr.exec(i)); )
          (g = f[0]),
            (v = i.substring(l, f.index)),
            m
              ? (m = (m + 1) % 5)
              : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") &&
                (m = 1),
            g !== (p = d[c++] || "") &&
              ((h = parseFloat(p) || 0),
              (x = p.substr((h + "").length)),
              g.charAt(1) === "=" && (g = qr(h, g) + x),
              (y = parseFloat(g)),
              (_ = g.substr((y + "").length)),
              (l = Hr.lastIndex - _.length),
              _ ||
                ((_ = _ || kt.units[n] || x),
                l === i.length && ((i += _), (o.e += _))),
              x !== _ && (h = Bn(t, n, p, _) || 0),
              (o._pt = {
                _next: o._pt,
                p: v || c === 1 ? v : ",",
                s: h,
                c: y - h,
                m: (m && m < 4) || n === "zIndex" ? Math.round : 0,
              }));
        o.c = l < i.length ? i.substring(l, i.length) : "";
      } else o.r = n === "display" && i === "none" ? xc : bc;
      return Cl.test(i) && (o.e = 0), (this._pt = o), o;
    },
    Oc = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Sm = function (t) {
      var n = t.split(" "),
        r = n[0],
        i = n[1] || "50%";
      return (
        (r === "top" || r === "bottom" || i === "left" || i === "right") &&
          ((t = r), (r = i), (i = t)),
        (n[0] = Oc[r] || r),
        (n[1] = Oc[i] || i),
        n.join(" ")
      );
    },
    Tm = function (t, n) {
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
              Sn[o] && ((l = 1), (o = o === "transformOrigin" ? Tt : _e)),
              dr(r, o);
        l &&
          (dr(r, _e),
          a &&
            (a.svg && r.removeAttribute("transform"),
            (i.scale = i.rotate = i.translate = "none"),
            Di(r, 1),
            (a.uncache = 1),
            Sc(i)));
      }
    },
    $s = {
      clearProps: function (t, n, r, i, s) {
        if (s.data !== "isFromStart") {
          var a = (t._pt = new xt(t._pt, n, r, 0, 0, Tm));
          return (a.u = i), (a.pr = -10), (a.tween = s), t._props.push(r), 1;
        }
      },
    },
    Li = [1, 0, 0, 1, 0, 0],
    Ac = {},
    Lc = function (t) {
      return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
    },
    Dc = function (t) {
      var n = Wt(t, _e);
      return Lc(n) ? Li : n.substr(7).match(wl).map(we);
    },
    uo = function (t, n) {
      var r = t._gsap || sr(t),
        i = t.style,
        s = Dc(t),
        a,
        o,
        l,
        c;
      return r.svg && t.getAttribute("transform")
        ? ((l = t.transform.baseVal.consolidate().matrix),
          (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
          s.join(",") === "1,0,0,1,0,0" ? Li : s)
        : (s === Li &&
            !t.offsetParent &&
            t !== Gr &&
            !r.svg &&
            ((l = i.display),
            (i.display = "block"),
            (a = t.parentNode),
            (!a || (!t.offsetParent && !t.getBoundingClientRect().width)) &&
              ((c = 1), (o = t.nextElementSibling), Gr.appendChild(t)),
            (s = Dc(t)),
            l ? (i.display = l) : dr(t, "display"),
            c &&
              (o
                ? a.insertBefore(t, o)
                : a
                ? a.appendChild(t)
                : Gr.removeChild(t))),
          n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    fo = function (t, n, r, i, s, a) {
      var o = t._gsap,
        l = s || uo(t, !0),
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
      r
        ? l !== Li &&
          (w = h * g - m * p) &&
          ((P = x * (g / w) + S * (-p / w) + (p * v - g * y) / w),
          (A = x * (-m / w) + S * (h / w) - (h * v - m * y) / w),
          (x = P),
          (S = A))
        : ((C = kc(t)),
          (x = C.x + (~_[0].indexOf("%") ? (x / 100) * C.width : x)),
          (S =
            C.y + (~(_[1] || _[0]).indexOf("%") ? (S / 100) * C.height : S))),
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
        (t.style[Tt] = "0px 0px"),
        a &&
          (qn(a, o, "xOrigin", c, x),
          qn(a, o, "yOrigin", u, S),
          qn(a, o, "xOffset", f, o.xOffset),
          qn(a, o, "yOffset", d, o.yOffset)),
        t.setAttribute("data-svg-origin", x + " " + S);
    },
    Di = function (t, n) {
      var r = t._gsap || new oc(t);
      if ("x" in r && !n && !r.uncache) return r;
      var i = t.style,
        s = r.scaleX < 0,
        a = "px",
        o = "deg",
        l = getComputedStyle(t),
        c = Wt(t, Tt) || "0",
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
        $,
        b,
        T,
        O,
        D,
        k,
        L,
        I,
        R,
        M,
        V,
        K,
        se,
        le,
        fe;
      return (
        (u = f = d = p = g = y = v = _ = x = 0),
        (h = m = 1),
        (r.svg = !!(t.getCTM && Mc(t))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (i[_e] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[_e] !== "none" ? l[_e] : "")),
          (i.scale = i.rotate = i.translate = "none")),
        (w = uo(t, r.svg)),
        r.svg &&
          (r.uncache
            ? ((I = t.getBBox()),
              (c = r.xOrigin - I.x + "px " + (r.yOrigin - I.y) + "px"),
              (L = ""))
            : (L = !n && t.getAttribute("data-svg-origin")),
          fo(t, L || c, !!L || r.originIsAbsolute, r.smooth !== !1, w)),
        (S = r.xOrigin || 0),
        (C = r.yOrigin || 0),
        w !== Li &&
          (($ = w[0]),
          (b = w[1]),
          (T = w[2]),
          (O = w[3]),
          (u = D = w[4]),
          (f = k = w[5]),
          w.length === 6
            ? ((h = Math.sqrt($ * $ + b * b)),
              (m = Math.sqrt(O * O + T * T)),
              (p = $ || b ? Ur(b, $) * fr : 0),
              (v = T || O ? Ur(T, O) * fr + p : 0),
              v && (m *= Math.abs(Math.cos(v * jr))),
              r.svg && ((u -= S - (S * $ + C * T)), (f -= C - (S * b + C * O))))
            : ((fe = w[6]),
              (se = w[7]),
              (M = w[8]),
              (V = w[9]),
              (K = w[10]),
              (le = w[11]),
              (u = w[12]),
              (f = w[13]),
              (d = w[14]),
              (P = Ur(fe, K)),
              (g = P * fr),
              P &&
                ((A = Math.cos(-P)),
                (E = Math.sin(-P)),
                (L = D * A + M * E),
                (I = k * A + V * E),
                (R = fe * A + K * E),
                (M = D * -E + M * A),
                (V = k * -E + V * A),
                (K = fe * -E + K * A),
                (le = se * -E + le * A),
                (D = L),
                (k = I),
                (fe = R)),
              (P = Ur(-T, K)),
              (y = P * fr),
              P &&
                ((A = Math.cos(-P)),
                (E = Math.sin(-P)),
                (L = $ * A - M * E),
                (I = b * A - V * E),
                (R = T * A - K * E),
                (le = O * E + le * A),
                ($ = L),
                (b = I),
                (T = R)),
              (P = Ur(b, $)),
              (p = P * fr),
              P &&
                ((A = Math.cos(P)),
                (E = Math.sin(P)),
                (L = $ * A + b * E),
                (I = D * A + k * E),
                (b = b * A - $ * E),
                (k = k * A - D * E),
                ($ = L),
                (D = I)),
              g &&
                Math.abs(g) + Math.abs(p) > 359.9 &&
                ((g = p = 0), (y = 180 - y)),
              (h = we(Math.sqrt($ * $ + b * b + T * T))),
              (m = we(Math.sqrt(k * k + fe * fe))),
              (P = Ur(D, k)),
              (v = Math.abs(P) > 2e-4 ? P * fr : 0),
              (x = le ? 1 / (le < 0 ? -le : le) : 0)),
          r.svg &&
            ((L = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !Lc(Wt(t, _e))),
            L && t.setAttribute("transform", L))),
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
              (Math.round(t.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
            ? (t.offsetWidth * r.xPercent) / 100
            : 0) +
          a),
        (r.y =
          f -
          ((r.yPercent =
            f &&
            ((!n && r.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-f) ? -50 : 0)))
            ? (t.offsetHeight * r.yPercent) / 100
            : 0) +
          a),
        (r.z = d + a),
        (r.scaleX = we(h)),
        (r.scaleY = we(m)),
        (r.rotation = we(p) + o),
        (r.rotationX = we(g) + o),
        (r.rotationY = we(y) + o),
        (r.skewX = v + o),
        (r.skewY = _ + o),
        (r.transformPerspective = x + a),
        (r.zOrigin = parseFloat(c.split(" ")[2]) || (!n && r.zOrigin) || 0) &&
          (i[Tt] = Os(c)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = kt.force3D),
        (r.renderTransform = r.svg ? wm : Ec ? Ic : Em),
        (r.uncache = 0),
        r
      );
    },
    Os = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    ho = function (t, n, r) {
      var i = rt(n);
      return we(parseFloat(n) + parseFloat(Bn(t, "x", r + "px", i))) + i;
    },
    Em = function (t, n) {
      (n.z = "0px"),
        (n.rotationY = n.rotationX = "0deg"),
        (n.force3D = 0),
        Ic(t, n);
    },
    hr = "0deg",
    Ii = "0px",
    pr = ") ",
    Ic = function (t, n) {
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
        S = (y === "auto" && t && t !== 1) || y === !0;
      if (_ && (f !== hr || u !== hr)) {
        var C = parseFloat(u) * jr,
          w = Math.sin(C),
          P = Math.cos(C),
          A;
        (C = parseFloat(f) * jr),
          (A = Math.cos(C)),
          (a = ho(v, a, w * A * -_)),
          (o = ho(v, o, -Math.sin(C) * -_)),
          (l = ho(v, l, P * A * -_ + _));
      }
      g !== Ii && (x += "perspective(" + g + pr),
        (i || s) && (x += "translate(" + i + "%, " + s + "%) "),
        (S || a !== Ii || o !== Ii || l !== Ii) &&
          (x +=
            l !== Ii || S
              ? "translate3d(" + a + ", " + o + ", " + l + ") "
              : "translate(" + a + ", " + o + pr),
        c !== hr && (x += "rotate(" + c + pr),
        u !== hr && (x += "rotateY(" + u + pr),
        f !== hr && (x += "rotateX(" + f + pr),
        (d !== hr || h !== hr) && (x += "skew(" + d + ", " + h + pr),
        (m !== 1 || p !== 1) && (x += "scale(" + m + ", " + p + pr),
        (v.style[_e] = x || "translate(0, 0)");
    },
    wm = function (t, n) {
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
        C,
        w,
        P,
        A;
      (l = parseFloat(l)),
        (c = parseFloat(c)),
        (u = parseFloat(u)),
        u && ((u = parseFloat(u)), (c += u), (l += u)),
        l || c
          ? ((l *= jr),
            (c *= jr),
            (S = Math.cos(l) * f),
            (C = Math.sin(l) * f),
            (w = Math.sin(l - c) * -d),
            (P = Math.cos(l - c) * d),
            c &&
              ((u *= jr),
              (A = Math.tan(c - u)),
              (A = Math.sqrt(1 + A * A)),
              (w *= A),
              (P *= A),
              u &&
                ((A = Math.tan(u)),
                (A = Math.sqrt(1 + A * A)),
                (S *= A),
                (C *= A))),
            (S = we(S)),
            (C = we(C)),
            (w = we(w)),
            (P = we(P)))
          : ((S = f), (P = d), (C = w = 0)),
        ((_ && !~(a + "").indexOf("px")) || (x && !~(o + "").indexOf("px"))) &&
          ((_ = Bn(h, "x", a, "px")), (x = Bn(h, "y", o, "px"))),
        (m || p || g || y) &&
          ((_ = we(_ + m - (m * S + p * w) + g)),
          (x = we(x + p - (m * C + p * P) + y))),
        (i || s) &&
          ((A = h.getBBox()),
          (_ = we(_ + (i / 100) * A.width)),
          (x = we(x + (s / 100) * A.height))),
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
        v && (h.style[_e] = A);
    },
    Cm = function (t, n, r, i, s) {
      var a = 360,
        o = Be(s),
        l = parseFloat(s) * (o && ~s.indexOf("rad") ? fr : 1),
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
            ? (c = ((c + a * _c) % a) - ~~(c / a) * a)
            : f === "ccw" && c > 0 && (c = ((c - a * _c) % a) - ~~(c / a) * a)),
        (t._pt = d = new xt(t._pt, n, r, i, c, cm)),
        (d.e = u),
        (d.u = "deg"),
        t._props.push(r),
        d
      );
    },
    zc = function (t, n) {
      for (var r in n) t[r] = n[r];
      return t;
    },
    Pm = function (t, n, r) {
      var i = zc({}, r._gsap),
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
          (a[_e] = n),
          (o = Di(r, 1)),
          dr(r, _e),
          r.setAttribute("transform", c))
        : ((c = getComputedStyle(r)[_e]),
          (a[_e] = n),
          (o = Di(r, 1)),
          (a[_e] = c));
      for (l in Sn)
        (c = i[l]),
          (u = o[l]),
          c !== u &&
            s.indexOf(l) < 0 &&
            ((h = rt(c)),
            (m = rt(u)),
            (f = h !== m ? Bn(r, l, c, m) : parseFloat(c)),
            (d = parseFloat(u)),
            (t._pt = new xt(t._pt, o, l, f, d - f, oo)),
            (t._pt.u = m || 0),
            t._props.push(l));
      zc(o, i);
    };
  bt("padding,margin,Width,Radius", function (e, t) {
    var n = "Top",
      r = "Right",
      i = "Bottom",
      s = "Left",
      a = (t < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function (
        o
      ) {
        return t < 2 ? e + o : "border" + o + e;
      });
    $s[t > 1 ? "border" + e : e] = function (o, l, c, u, f) {
      var d, h;
      if (arguments.length < 4)
        return (
          (d = a.map(function (m) {
            return Tn(o, m, c);
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
  var Rc = {
    name: "css",
    register: co,
    targetTest: function (t) {
      return t.style && t.nodeType;
    },
    init: function (t, n, r, i, s) {
      var a = this._props,
        o = t.style,
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
        C,
        w,
        P;
      io || co(),
        (this.styles = this.styles || Tc(t)),
        (P = this.styles.props),
        (this.tween = r);
      for (p in n)
        if (
          p !== "autoRound" &&
          ((u = n[p]), !($t[p] && lc(p, n, r, i, t, s)))
        ) {
          if (
            ((h = typeof u),
            (m = $s[p]),
            h === "function" && ((u = u.call(r, i, t, s)), (h = typeof u)),
            h === "string" && ~u.indexOf("random(") && (u = Pi(u)),
            m)
          )
            m(this, t, p, u, r) && (w = 1);
          else if (p.substr(0, 2) === "--")
            (c = (getComputedStyle(t).getPropertyValue(p) + "").trim()),
              (u += ""),
              (Nn.lastIndex = 0),
              Nn.test(c) || ((g = rt(c)), (y = rt(u))),
              y ? g !== y && (c = Bn(t, p, c, y) + y) : g && (u += g),
              this.add(o, "setProperty", c, u, i, s, 0, 0, p),
              a.push(p),
              P.push(p, 0, o[p]);
          else if (h !== "undefined") {
            if (
              (l && p in l
                ? ((c =
                    typeof l[p] == "function" ? l[p].call(r, i, t, s) : l[p]),
                  Be(c) && ~c.indexOf("random(") && (c = Pi(c)),
                  rt(c + "") ||
                    c === "auto" ||
                    (c += kt.units[p] || rt(Tn(t, p)) || ""),
                  (c + "").charAt(1) === "=" && (c = Tn(t, p)))
                : (c = Tn(t, p)),
              (d = parseFloat(c)),
              (v = h === "string" && u.charAt(1) === "=" && u.substr(0, 2)),
              v && (u = u.substr(2)),
              (f = parseFloat(u)),
              p in ln &&
                (p === "autoAlpha" &&
                  (d === 1 && Tn(t, "visibility") === "hidden" && f && (d = 0),
                  P.push("visibility", 0, o.visibility),
                  qn(
                    this,
                    o,
                    "visibility",
                    d ? "inherit" : "hidden",
                    f ? "inherit" : "hidden",
                    !f
                  )),
                p !== "scale" &&
                  p !== "transform" &&
                  ((p = ln[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
              (_ = p in Sn),
              _)
            ) {
              if (
                (this.styles.save(p),
                h === "string" &&
                  u.substring(0, 6) === "var(--" &&
                  ((u = Wt(t, u.substring(4, u.indexOf(")")))),
                  (f = parseFloat(u))),
                x ||
                  ((S = t._gsap),
                  (S.renderTransform && !n.parseTransform) ||
                    Di(t, n.parseTransform),
                  (C = n.smoothOrigin !== !1 && S.smooth),
                  (x = this._pt =
                    new xt(this._pt, o, _e, 0, 1, S.renderTransform, S, 0, -1)),
                  (x.dep = 1)),
                p === "scale")
              )
                (this._pt = new xt(
                  this._pt,
                  S,
                  "scaleY",
                  S.scaleY,
                  (v ? qr(S.scaleY, v + f) : f) - S.scaleY || 0,
                  oo
                )),
                  (this._pt.u = 0),
                  a.push("scaleY", p),
                  (p += "X");
              else if (p === "transformOrigin") {
                P.push(Tt, 0, o[Tt]),
                  (u = Sm(u)),
                  S.svg
                    ? fo(t, u, 0, C, 0, this)
                    : ((y = parseFloat(u.split(" ")[2]) || 0),
                      y !== S.zOrigin && qn(this, S, "zOrigin", S.zOrigin, y),
                      qn(this, o, p, Os(c), Os(u)));
                continue;
              } else if (p === "svgOrigin") {
                fo(t, u, 1, C, 0, this);
                continue;
              } else if (p in Ac) {
                Cm(this, S, p, d, v ? qr(d, v + u) : u);
                continue;
              } else if (p === "smoothOrigin") {
                qn(this, S, "smooth", S.smooth, u);
                continue;
              } else if (p === "force3D") {
                S[p] = u;
                continue;
              } else if (p === "transform") {
                Pm(this, u, t);
                continue;
              }
            } else p in o || (p = Kr(p) || p);
            if (
              _ ||
              ((f || f === 0) && (d || d === 0) && !lm.test(u) && p in o)
            )
              (g = (c + "").substr((d + "").length)),
                f || (f = 0),
                (y = rt(u) || (p in kt.units ? kt.units[p] : g)),
                g !== y && (d = Bn(t, p, c, y)),
                (this._pt = new xt(
                  this._pt,
                  _ ? S : o,
                  p,
                  d,
                  (v ? qr(d, v + f) : f) - d,
                  !_ && (y === "px" || p === "zIndex") && n.autoRound !== !1
                    ? fm
                    : oo
                )),
                (this._pt.u = y || 0),
                g !== y && y !== "%" && ((this._pt.b = c), (this._pt.r = um));
            else if (p in o) xm.call(this, t, p, c, v ? v + u : u);
            else if (p in t) this.add(t, p, c || t[p], v ? v + u : u, i, s);
            else if (p !== "parseTransform") {
              Da(p, u);
              continue;
            }
            _ ||
              (p in o
                ? P.push(p, 0, o[p])
                : typeof t[p] == "function"
                ? P.push(p, 2, t[p]())
                : P.push(p, 1, c || t[p])),
              a.push(p);
          }
        }
      w && pc(this);
    },
    render: function (t, n) {
      if (n.tween._time || !so())
        for (var r = n._pt; r; ) r.r(t, r.d), (r = r._next);
      else n.styles.revert();
    },
    get: Tn,
    aliases: ln,
    getSetter: function (t, n, r) {
      var i = ln[n];
      return (
        i && i.indexOf(",") < 0 && (n = i),
        n in Sn && n !== Tt && (t._gsap.x || Tn(t, "x"))
          ? r && yc === r
            ? n === "scale"
              ? mm
              : pm
            : (yc = r || {}) && (n === "scale" ? gm : vm)
          : t.style && !ka(t.style[n])
          ? dm
          : ~n.indexOf("-")
          ? hm
          : Ja(t, n)
      );
    },
    core: { _removeProperty: dr, _getMatrix: uo },
  };
  (St.utils.checkPrefix = Kr),
    (St.core.getStyleSaver = Tc),
    (function (e, t, n, r) {
      var i = bt(e + "," + t + "," + n, function (s) {
        Sn[s] = 1;
      });
      bt(t, function (s) {
        (kt.units[s] = "deg"), (Ac[s] = 1);
      }),
        (ln[i[13]] = e + "," + t),
        bt(r, function (s) {
          var a = s.split(":");
          ln[a[1]] = i[a[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    bt(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (e) {
        kt.units[e] = "px";
      }
    ),
    St.registerPlugin(Rc);
  var F = St.registerPlugin(Rc) || St;
  F.core.Tween;
  function km(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function Mm(e, t, n) {
    return t && km(e.prototype, t), e;
  }
  /*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Qe,
    As,
    Dt,
    Vn,
    Wn,
    Qr,
    Nc,
    mr,
    zi,
    Fc,
    En,
    Ut,
    Hc,
    qc = function () {
      return (
        Qe ||
        (typeof window != "undefined" &&
          (Qe = window.gsap) &&
          Qe.registerPlugin &&
          Qe)
      );
    },
    Bc = 1,
    Zr = [],
    Z = [],
    cn = [],
    Ri = Date.now,
    po = function (t, n) {
      return n;
    },
    $m = function () {
      var t = zi.core,
        n = t.bridge || {},
        r = t._scrollers,
        i = t._proxies;
      r.push.apply(r, Z),
        i.push.apply(i, cn),
        (Z = r),
        (cn = i),
        (po = function (a, o) {
          return n[a](o);
        });
    },
    Yn = function (t, n) {
      return ~cn.indexOf(t) && cn[cn.indexOf(t) + 1][n];
    },
    Ni = function (t) {
      return !!~Fc.indexOf(t);
    },
    dt = function (t, n, r, i, s) {
      return t.addEventListener(n, r, { passive: i !== !1, capture: !!s });
    },
    ht = function (t, n, r, i) {
      return t.removeEventListener(n, r, !!i);
    },
    Ls = "scrollLeft",
    Ds = "scrollTop",
    mo = function () {
      return (En && En.isPressed) || Z.cache++;
    },
    Is = function (t, n) {
      var r = function i(s) {
        if (s || s === 0) {
          Bc && (Dt.history.scrollRestoration = "manual");
          var a = En && En.isPressed;
          (s = i.v = Math.round(s) || (En && En.iOS ? 1 : 0)),
            t(s),
            (i.cacheID = Z.cache),
            a && po("ss", s);
        } else
          (n || Z.cache !== i.cacheID || po("ref")) &&
            ((i.cacheID = Z.cache), (i.v = t()));
        return i.v + i.offset;
      };
      return (r.offset = 0), t && r;
    },
    pt = {
      s: Ls,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: Is(function (e) {
        return arguments.length
          ? Dt.scrollTo(e, Re.sc())
          : Dt.pageXOffset || Vn[Ls] || Wn[Ls] || Qr[Ls] || 0;
      }),
    },
    Re = {
      s: Ds,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: pt,
      sc: Is(function (e) {
        return arguments.length
          ? Dt.scrollTo(pt.sc(), e)
          : Dt.pageYOffset || Vn[Ds] || Wn[Ds] || Qr[Ds] || 0;
      }),
    },
    Et = function (t, n) {
      return (
        ((n && n._ctx && n._ctx.selector) || Qe.utils.toArray)(t)[0] ||
        (typeof t == "string" && Qe.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", t)
          : null)
      );
    },
    Om = function (t, n) {
      for (var r = n.length; r--; )
        if (n[r] === t || n[r].contains(t)) return !0;
      return !1;
    },
    Xn = function (t, n) {
      var r = n.s,
        i = n.sc;
      Ni(t) && (t = Vn.scrollingElement || Wn);
      var s = Z.indexOf(t),
        a = i === Re.sc ? 1 : 2;
      !~s && (s = Z.push(t) - 1), Z[s + a] || dt(t, "scroll", mo);
      var o = Z[s + a],
        l =
          o ||
          (Z[s + a] =
            Is(Yn(t, r), !0) ||
            (Ni(t)
              ? i
              : Is(function (c) {
                  return arguments.length ? (t[r] = c) : t[r];
                })));
      return (
        (l.target = t),
        o || (l.smooth = Qe.getProperty(t, "scrollBehavior") === "smooth"),
        l
      );
    },
    go = function (t, n, r) {
      var i = t,
        s = t,
        a = Ri(),
        o = a,
        l = n || 50,
        c = Math.max(500, l * 3),
        u = function (m, p) {
          var g = Ri();
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
            y = Ri();
          return (
            (m || m === 0) && m !== i && u(m),
            a === o || y - o > c
              ? 0
              : ((i + (r ? g : -g)) / ((r ? y : a) - p)) * 1e3
          );
        };
      return { update: u, reset: f, getVelocity: d };
    },
    Fi = function (t, n) {
      return (
        n && !t._gsapAllow && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
      );
    },
    Vc = function (t) {
      var n = Math.max.apply(Math, t),
        r = Math.min.apply(Math, t);
      return Math.abs(n) >= Math.abs(r) ? n : r;
    },
    Wc = function () {
      (zi = Qe.core.globals().ScrollTrigger), zi && zi.core && $m();
    },
    Yc = function (t) {
      return (
        (Qe = t || qc()),
        !As &&
          Qe &&
          typeof document != "undefined" &&
          document.body &&
          ((Dt = window),
          (Vn = document),
          (Wn = Vn.documentElement),
          (Qr = Vn.body),
          (Fc = [Dt, Vn, Wn, Qr]),
          Qe.utils.clamp,
          (Hc = Qe.core.context || function () {}),
          (mr = "onpointerenter" in Qr ? "pointer" : "mouse"),
          (Nc = Ce.isTouch =
            Dt.matchMedia &&
            Dt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Dt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (Ut = Ce.eventTypes =
            (
              "ontouchstart" in Wn
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Wn
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (Bc = 0);
          }, 500),
          Wc(),
          (As = 1)),
        As
      );
    };
  (pt.op = Re), (Z.cache = 0);
  var Ce = (function () {
    function e(n) {
      this.init(n);
    }
    var t = e.prototype;
    return (
      (t.init = function (r) {
        As || Yc(Qe) || console.warn("Please gsap.registerPlugin(Observer)"),
          zi || Wc();
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
          C = r.onLeft,
          w = r.onUp,
          P = r.onDown,
          A = r.onChangeX,
          E = r.onChangeY,
          $ = r.onChange,
          b = r.onToggleX,
          T = r.onToggleY,
          O = r.onHover,
          D = r.onHoverEnd,
          k = r.onMove,
          L = r.ignoreCheck,
          I = r.isNormalizer,
          R = r.onGestureStart,
          M = r.onGestureEnd,
          V = r.onWheel,
          K = r.onEnable,
          se = r.onDisable,
          le = r.onClick,
          fe = r.scrollSpeed,
          ge = r.capture,
          be = r.allowClicks,
          Ye = r.lockAxis,
          Fe = r.onLockAxis;
        (this.target = o = Et(o) || Wn),
          (this.vars = r),
          h && (h = Qe.utils.toArray(h)),
          (i = i || 1e-9),
          (s = s || 0),
          (m = m || 1),
          (fe = fe || 1),
          (a = a || "wheel,touch,pointer"),
          (c = c !== !1),
          l || (l = parseFloat(Dt.getComputedStyle(Qr).lineHeight) || 22);
        var Kt,
          De,
          He,
          ee,
          pe,
          Xe,
          Ze,
          z = this,
          Nt = 0,
          kn = 0,
          Zn = r.passive || (!u && r.passive !== !1),
          Te = Xn(o, pt),
          Mn = Xn(o, Re),
          Jn = Te(),
          Mr = Mn(),
          Ge =
            ~a.indexOf("touch") &&
            !~a.indexOf("pointer") &&
            Ut[0] === "pointerdown",
          er = Ni(o),
          Pe = o.ownerDocument || Vn,
          Qt = [0, 0, 0],
          jt = [0, 0, 0],
          $n = 0,
          ss = function () {
            return ($n = Ri());
          },
          Ie = function (Y, ae) {
            return (
              ((z.event = Y) && h && Om(Y.target, h)) ||
              (ae && Ge && Y.pointerType !== "touch") ||
              (L && L(Y, ae))
            );
          },
          ua = function () {
            z._vx.reset(), z._vy.reset(), De.pause(), f && f(z);
          },
          On = function () {
            var Y = (z.deltaX = Vc(Qt)),
              ae = (z.deltaY = Vc(jt)),
              H = Math.abs(Y) >= i,
              G = Math.abs(ae) >= i;
            $ && (H || G) && $(z, Y, ae, Qt, jt),
              H &&
                (S && z.deltaX > 0 && S(z),
                C && z.deltaX < 0 && C(z),
                A && A(z),
                b && z.deltaX < 0 != Nt < 0 && b(z),
                (Nt = z.deltaX),
                (Qt[0] = Qt[1] = Qt[2] = 0)),
              G &&
                (P && z.deltaY > 0 && P(z),
                w && z.deltaY < 0 && w(z),
                E && E(z),
                T && z.deltaY < 0 != kn < 0 && T(z),
                (kn = z.deltaY),
                (jt[0] = jt[1] = jt[2] = 0)),
              (ee || He) &&
                (k && k(z),
                He && (g && He === 1 && g(z), v && v(z), (He = 0)),
                (ee = !1)),
              Xe && !(Xe = !1) && Fe && Fe(z),
              pe && (V(z), (pe = !1)),
              (Kt = 0);
          },
          fi = function (Y, ae, H) {
            (Qt[H] += Y),
              (jt[H] += ae),
              z._vx.update(Y),
              z._vy.update(ae),
              c ? Kt || (Kt = requestAnimationFrame(On)) : On();
          },
          di = function (Y, ae) {
            Ye &&
              !Ze &&
              ((z.axis = Ze = Math.abs(Y) > Math.abs(ae) ? "x" : "y"),
              (Xe = !0)),
              Ze !== "y" && ((Qt[2] += Y), z._vx.update(Y, !0)),
              Ze !== "x" && ((jt[2] += ae), z._vy.update(ae, !0)),
              c ? Kt || (Kt = requestAnimationFrame(On)) : On();
          },
          tr = function (Y) {
            if (!Ie(Y, 1)) {
              Y = Fi(Y, u);
              var ae = Y.clientX,
                H = Y.clientY,
                G = ae - z.x,
                W = H - z.y,
                j = z.isDragging;
              (z.x = ae),
                (z.y = H),
                (j ||
                  ((G || W) &&
                    (Math.abs(z.startX - ae) >= s ||
                      Math.abs(z.startY - H) >= s))) &&
                  ((He = j ? 2 : 1), j || (z.isDragging = !0), di(G, W));
            }
          },
          $r = (z.onPress = function (U) {
            Ie(U, 1) ||
              (U && U.button) ||
              ((z.axis = Ze = null),
              De.pause(),
              (z.isPressed = !0),
              (U = Fi(U)),
              (Nt = kn = 0),
              (z.startX = z.x = U.clientX),
              (z.startY = z.y = U.clientY),
              z._vx.reset(),
              z._vy.reset(),
              dt(I ? o : Pe, Ut[1], tr, Zn, !0),
              (z.deltaX = z.deltaY = 0),
              _ && _(z));
          }),
          te = (z.onRelease = function (U) {
            if (!Ie(U, 1)) {
              ht(I ? o : Pe, Ut[1], tr, !0);
              var Y = !isNaN(z.y - z.startY),
                ae = z.isDragging,
                H =
                  ae &&
                  (Math.abs(z.x - z.startX) > 3 ||
                    Math.abs(z.y - z.startY) > 3),
                G = Fi(U);
              !H &&
                Y &&
                (z._vx.reset(),
                z._vy.reset(),
                u &&
                  be &&
                  Qe.delayedCall(0.08, function () {
                    if (Ri() - $n > 300 && !U.defaultPrevented) {
                      if (U.target.click) U.target.click();
                      else if (Pe.createEvent) {
                        var W = Pe.createEvent("MouseEvents");
                        W.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Dt,
                          1,
                          G.screenX,
                          G.screenY,
                          G.clientX,
                          G.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          U.target.dispatchEvent(W);
                      }
                    }
                  })),
                (z.isDragging = z.isGesturing = z.isPressed = !1),
                f && ae && !I && De.restart(!0),
                He && On(),
                y && ae && y(z),
                x && x(z, H);
            }
          }),
          Or = function (Y) {
            return (
              Y.touches &&
              Y.touches.length > 1 &&
              (z.isGesturing = !0) &&
              R(Y, z.isDragging)
            );
          },
          Zt = function () {
            return (z.isGesturing = !1) || M(z);
          },
          Jt = function (Y) {
            if (!Ie(Y)) {
              var ae = Te(),
                H = Mn();
              fi((ae - Jn) * fe, (H - Mr) * fe, 1),
                (Jn = ae),
                (Mr = H),
                f && De.restart(!0);
            }
          },
          en = function (Y) {
            if (!Ie(Y)) {
              (Y = Fi(Y, u)), V && (pe = !0);
              var ae =
                (Y.deltaMode === 1
                  ? l
                  : Y.deltaMode === 2
                  ? Dt.innerHeight
                  : 1) * m;
              fi(Y.deltaX * ae, Y.deltaY * ae, 0), f && !I && De.restart(!0);
            }
          },
          Ar = function (Y) {
            if (!Ie(Y)) {
              var ae = Y.clientX,
                H = Y.clientY,
                G = ae - z.x,
                W = H - z.y;
              (z.x = ae),
                (z.y = H),
                (ee = !0),
                f && De.restart(!0),
                (G || W) && di(G, W);
            }
          },
          hi = function (Y) {
            (z.event = Y), O(z);
          },
          An = function (Y) {
            (z.event = Y), D(z);
          },
          as = function (Y) {
            return Ie(Y) || (Fi(Y, u) && le(z));
          };
        (De = z._dc = Qe.delayedCall(d || 0.25, ua).pause()),
          (z.deltaX = z.deltaY = 0),
          (z._vx = go(0, 50, !0)),
          (z._vy = go(0, 50, !0)),
          (z.scrollX = Te),
          (z.scrollY = Mn),
          (z.isDragging = z.isGesturing = z.isPressed = !1),
          Hc(this),
          (z.enable = function (U) {
            return (
              z.isEnabled ||
                (dt(er ? Pe : o, "scroll", mo),
                a.indexOf("scroll") >= 0 &&
                  dt(er ? Pe : o, "scroll", Jt, Zn, ge),
                a.indexOf("wheel") >= 0 && dt(o, "wheel", en, Zn, ge),
                ((a.indexOf("touch") >= 0 && Nc) ||
                  a.indexOf("pointer") >= 0) &&
                  (dt(o, Ut[0], $r, Zn, ge),
                  dt(Pe, Ut[2], te),
                  dt(Pe, Ut[3], te),
                  be && dt(o, "click", ss, !0, !0),
                  le && dt(o, "click", as),
                  R && dt(Pe, "gesturestart", Or),
                  M && dt(Pe, "gestureend", Zt),
                  O && dt(o, mr + "enter", hi),
                  D && dt(o, mr + "leave", An),
                  k && dt(o, mr + "move", Ar)),
                (z.isEnabled = !0),
                (z.isDragging = z.isGesturing = z.isPressed = ee = He = !1),
                z._vx.reset(),
                z._vy.reset(),
                (Jn = Te()),
                (Mr = Mn()),
                U && U.type && $r(U),
                K && K(z)),
              z
            );
          }),
          (z.disable = function () {
            z.isEnabled &&
              (Zr.filter(function (U) {
                return U !== z && Ni(U.target);
              }).length || ht(er ? Pe : o, "scroll", mo),
              z.isPressed &&
                (z._vx.reset(), z._vy.reset(), ht(I ? o : Pe, Ut[1], tr, !0)),
              ht(er ? Pe : o, "scroll", Jt, ge),
              ht(o, "wheel", en, ge),
              ht(o, Ut[0], $r, ge),
              ht(Pe, Ut[2], te),
              ht(Pe, Ut[3], te),
              ht(o, "click", ss, !0),
              ht(o, "click", as),
              ht(Pe, "gesturestart", Or),
              ht(Pe, "gestureend", Zt),
              ht(o, mr + "enter", hi),
              ht(o, mr + "leave", An),
              ht(o, mr + "move", Ar),
              (z.isEnabled = z.isPressed = z.isDragging = !1),
              se && se(z));
          }),
          (z.kill = z.revert =
            function () {
              z.disable();
              var U = Zr.indexOf(z);
              U >= 0 && Zr.splice(U, 1), En === z && (En = 0);
            }),
          Zr.push(z),
          I && Ni(o) && (En = z),
          z.enable(p);
      }),
      Mm(e, [
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
      e
    );
  })();
  (Ce.version = "3.13.0"),
    (Ce.create = function (e) {
      return new Ce(e);
    }),
    (Ce.register = Yc),
    (Ce.getAll = function () {
      return Zr.slice();
    }),
    (Ce.getById = function (e) {
      return Zr.filter(function (t) {
        return t.vars.id === e;
      })[0];
    }),
    qc() && Qe.registerPlugin(Ce);
  /*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var q,
    Jr,
    J,
    he,
    It,
    oe,
    vo,
    zs,
    Hi,
    qi,
    Bi,
    Rs,
    it,
    Ns,
    yo,
    mt,
    Xc,
    Gc,
    ei,
    jc,
    _o,
    Uc,
    gt,
    bo,
    Kc,
    Qc,
    Gn,
    xo,
    So,
    ti,
    To,
    Fs,
    Eo,
    wo,
    Hs = 1,
    st = Date.now,
    Co = st(),
    Yt = 0,
    Vi = 0,
    Zc = function (t, n, r) {
      var i = zt(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
      return (r["_" + n + "Clamp"] = i), i ? t.substr(6, t.length - 7) : t;
    },
    Jc = function (t, n) {
      return n && (!zt(t) || t.substr(0, 6) !== "clamp(")
        ? "clamp(" + t + ")"
        : t;
    },
    Am = function e() {
      return Vi && requestAnimationFrame(e);
    },
    eu = function () {
      return (Ns = 1);
    },
    tu = function () {
      return (Ns = 0);
    },
    un = function (t) {
      return t;
    },
    Wi = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    nu = function () {
      return typeof window != "undefined";
    },
    ru = function () {
      return q || (nu() && (q = window.gsap) && q.registerPlugin && q);
    },
    gr = function (t) {
      return !!~vo.indexOf(t);
    },
    iu = function (t) {
      return (
        (t === "Height" ? To : J["inner" + t]) ||
        It["client" + t] ||
        oe["client" + t]
      );
    },
    su = function (t) {
      return (
        Yn(t, "getBoundingClientRect") ||
        (gr(t)
          ? function () {
              return (Js.width = J.innerWidth), (Js.height = To), Js;
            }
          : function () {
              return wn(t);
            })
      );
    },
    Lm = function (t, n, r) {
      var i = r.d,
        s = r.d2,
        a = r.a;
      return (a = Yn(t, "getBoundingClientRect"))
        ? function () {
            return a()[i];
          }
        : function () {
            return (n ? iu(s) : t["client" + s]) || 0;
          };
    },
    Dm = function (t, n) {
      return !n || ~cn.indexOf(t)
        ? su(t)
        : function () {
            return Js;
          };
    },
    fn = function (t, n) {
      var r = n.s,
        i = n.d2,
        s = n.d,
        a = n.a;
      return Math.max(
        0,
        (r = "scroll" + i) && (a = Yn(t, r))
          ? a() - su(t)()[s]
          : gr(t)
          ? (It[r] || oe[r]) - iu(i)
          : t[r] - t["offset" + i]
      );
    },
    qs = function (t, n) {
      for (var r = 0; r < ei.length; r += 3)
        (!n || ~n.indexOf(ei[r + 1])) && t(ei[r], ei[r + 1], ei[r + 2]);
    },
    zt = function (t) {
      return typeof t == "string";
    },
    at = function (t) {
      return typeof t == "function";
    },
    Yi = function (t) {
      return typeof t == "number";
    },
    vr = function (t) {
      return typeof t == "object";
    },
    Xi = function (t, n, r) {
      return t && t.progress(n ? 0 : 1) && r && t.pause();
    },
    Po = function (t, n) {
      if (t.enabled) {
        var r = t._ctx
          ? t._ctx.add(function () {
              return n(t);
            })
          : n(t);
        r && r.totalTime && (t.callbackAnimation = r);
      }
    },
    ni = Math.abs,
    au = "left",
    ou = "top",
    ko = "right",
    Mo = "bottom",
    yr = "width",
    _r = "height",
    Gi = "Right",
    ji = "Left",
    Ui = "Top",
    Ki = "Bottom",
    Ae = "padding",
    Xt = "margin",
    ri = "Width",
    $o = "Height",
    Ne = "px",
    Gt = function (t) {
      return J.getComputedStyle(t);
    },
    Im = function (t) {
      var n = Gt(t).position;
      t.style.position = n === "absolute" || n === "fixed" ? n : "relative";
    },
    lu = function (t, n) {
      for (var r in n) r in t || (t[r] = n[r]);
      return t;
    },
    wn = function (t, n) {
      var r =
          n &&
          Gt(t)[yo] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          q
            .to(t, {
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
        i = t.getBoundingClientRect();
      return r && r.progress(0).kill(), i;
    },
    Bs = function (t, n) {
      var r = n.d2;
      return t["offset" + r] || t["client" + r] || 0;
    },
    cu = function (t) {
      var n = [],
        r = t.labels,
        i = t.duration(),
        s;
      for (s in r) n.push(r[s] / i);
      return n;
    },
    zm = function (t) {
      return function (n) {
        return q.utils.snap(cu(t), n);
      };
    },
    Oo = function (t) {
      var n = q.utils.snap(t),
        r =
          Array.isArray(t) &&
          t.slice(0).sort(function (i, s) {
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
              : n(s < 0 ? i - t : i + t);
          };
    },
    Rm = function (t) {
      return function (n, r) {
        return Oo(cu(t))(n, r.direction);
      };
    },
    Vs = function (t, n, r, i) {
      return r.split(",").forEach(function (s) {
        return t(n, s, i);
      });
    },
    Ve = function (t, n, r, i, s) {
      return t.addEventListener(n, r, { passive: !i, capture: !!s });
    },
    We = function (t, n, r, i) {
      return t.removeEventListener(n, r, !!i);
    },
    Ws = function (t, n, r) {
      (r = r && r.wheelHandler), r && (t(n, "wheel", r), t(n, "touchmove", r));
    },
    uu = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Ys = { toggleActions: "play", anticipatePin: 0 },
    Xs = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Gs = function (t, n) {
      if (zt(t)) {
        var r = t.indexOf("="),
          i = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
        ~r && (t.indexOf("%") > r && (i *= n / 100), (t = t.substr(0, r - 1))),
          (t =
            i +
            (t in Xs
              ? Xs[t] * n
              : ~t.indexOf("%")
              ? (parseFloat(t) * n) / 100
              : parseFloat(t) || 0));
      }
      return t;
    },
    js = function (t, n, r, i, s, a, o, l) {
      var c = s.startColor,
        u = s.endColor,
        f = s.fontSize,
        d = s.indent,
        h = s.fontWeight,
        m = he.createElement("div"),
        p = gr(r) || Yn(r, "pinType") === "fixed",
        g = t.indexOf("scroller") !== -1,
        y = p ? oe : r,
        v = t.indexOf("start") !== -1,
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
          (x += (i === Re ? ko : Mo) + ":" + (a + parseFloat(d)) + "px;"),
        o &&
          (x +=
            "box-sizing:border-box;text-align:left;width:" +
            o.offsetWidth +
            "px;"),
        (m._isStart = v),
        m.setAttribute("class", "gsap-marker-" + t + (n ? " marker-" + n : "")),
        (m.style.cssText = x),
        (m.innerText = n || n === 0 ? t + "-" + n : t),
        y.children[0] ? y.insertBefore(m, y.children[0]) : y.appendChild(m),
        (m._offset = m["offset" + i.op.d2]),
        Us(m, 0, i, v),
        m
      );
    },
    Us = function (t, n, r, i) {
      var s = { display: "block" },
        a = r[i ? "os2" : "p2"],
        o = r[i ? "p2" : "os2"];
      (t._isFlipped = i),
        (s[r.a + "Percent"] = i ? -100 : 0),
        (s[r.a] = i ? "1px" : 0),
        (s["border" + a + ri] = 1),
        (s["border" + o + ri] = 0),
        (s[r.p] = n + "px"),
        q.set(t, s);
    },
    Q = [],
    Ao = {},
    Qi,
    fu = function () {
      return st() - Yt > 34 && (Qi || (Qi = requestAnimationFrame(Cn)));
    },
    ii = function () {
      (!gt || !gt.isPressed || gt.startX > oe.clientWidth) &&
        (Z.cache++,
        gt ? Qi || (Qi = requestAnimationFrame(Cn)) : Cn(),
        Yt || xr("scrollStart"),
        (Yt = st()));
    },
    Lo = function () {
      (Qc = J.innerWidth), (Kc = J.innerHeight);
    },
    Zi = function (t) {
      Z.cache++,
        (t === !0 ||
          (!it &&
            !Uc &&
            !he.fullscreenElement &&
            !he.webkitFullscreenElement &&
            (!bo ||
              Qc !== J.innerWidth ||
              Math.abs(J.innerHeight - Kc) > J.innerHeight * 0.25))) &&
          zs.restart(!0);
    },
    br = {},
    Nm = [],
    du = function e() {
      return We(X, "scrollEnd", e) || Tr(!0);
    },
    xr = function (t) {
      return (
        (br[t] &&
          br[t].map(function (n) {
            return n();
          })) ||
        Nm
      );
    },
    Rt = [],
    hu = function (t) {
      for (var n = 0; n < Rt.length; n += 5)
        (!t || (Rt[n + 4] && Rt[n + 4].query === t)) &&
          ((Rt[n].style.cssText = Rt[n + 1]),
          Rt[n].getBBox && Rt[n].setAttribute("transform", Rt[n + 2] || ""),
          (Rt[n + 3].uncache = 1));
    },
    Do = function (t, n) {
      var r;
      for (mt = 0; mt < Q.length; mt++)
        (r = Q[mt]),
          r && (!n || r._ctx === n) && (t ? r.kill(1) : r.revert(!0, !0));
      (Fs = !0), n && hu(n), n || xr("revert");
    },
    pu = function (t, n) {
      Z.cache++,
        (n || !vt) &&
          Z.forEach(function (r) {
            return at(r) && r.cacheID++ && (r.rec = 0);
          }),
        zt(t) && (J.history.scrollRestoration = So = t);
    },
    vt,
    Sr = 0,
    mu,
    Fm = function () {
      if (mu !== Sr) {
        var t = (mu = Sr);
        requestAnimationFrame(function () {
          return t === Sr && Tr(!0);
        });
      }
    },
    gu = function () {
      oe.appendChild(ti),
        (To = (!gt && ti.offsetHeight) || J.innerHeight),
        oe.removeChild(ti);
    },
    vu = function (t) {
      return Hi(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (n) {
        return (n.style.display = t ? "none" : "block");
      });
    },
    Tr = function (t, n) {
      if (
        ((It = he.documentElement),
        (oe = he.body),
        (vo = [J, he, It, oe]),
        Yt && !t && !Fs)
      ) {
        Ve(X, "scrollEnd", du);
        return;
      }
      gu(),
        (vt = X.isRefreshing = !0),
        Z.forEach(function (i) {
          return at(i) && ++i.cacheID && (i.rec = i());
        });
      var r = xr("refreshInit");
      jc && X.sort(),
        n || Do(),
        Z.forEach(function (i) {
          at(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
        }),
        Q.slice(0).forEach(function (i) {
          return i.refresh();
        }),
        (Fs = !1),
        Q.forEach(function (i) {
          if (i._subPinOffset && i.pin) {
            var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
              a = i.pin[s];
            i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - a), i.refresh();
          }
        }),
        (Eo = 1),
        vu(!0),
        Q.forEach(function (i) {
          var s = fn(i.scroller, i._dir),
            a = i.vars.end === "max" || (i._endClamp && i.end > s),
            o = i._startClamp && i.start >= s;
          (a || o) &&
            i.setPositions(
              o ? s - 1 : i.start,
              a ? Math.max(o ? s : i.start + 1, s) : i.end,
              !0
            );
        }),
        vu(!1),
        (Eo = 0),
        r.forEach(function (i) {
          return i && i.render && i.render(-1);
        }),
        Z.forEach(function (i) {
          at(i) &&
            (i.smooth &&
              requestAnimationFrame(function () {
                return (i.target.style.scrollBehavior = "smooth");
              }),
            i.rec && i(i.rec));
        }),
        pu(So, 1),
        zs.pause(),
        Sr++,
        (vt = 2),
        Cn(2),
        Q.forEach(function (i) {
          return at(i.vars.onRefresh) && i.vars.onRefresh(i);
        }),
        (vt = X.isRefreshing = !1),
        xr("refresh");
    },
    Io = 0,
    Ks = 1,
    Ji,
    Cn = function (t) {
      if (t === 2 || (!vt && !Fs)) {
        (X.isUpdating = !0), Ji && Ji.update(0);
        var n = Q.length,
          r = st(),
          i = r - Co >= 50,
          s = n && Q[0].scroll();
        if (
          ((Ks = Io > s ? -1 : 1),
          vt || (Io = s),
          i &&
            (Yt && !Ns && r - Yt > 200 && ((Yt = 0), xr("scrollEnd")),
            (Bi = Co),
            (Co = r)),
          Ks < 0)
        ) {
          for (mt = n; mt-- > 0; ) Q[mt] && Q[mt].update(0, i);
          Ks = 1;
        } else for (mt = 0; mt < n; mt++) Q[mt] && Q[mt].update(0, i);
        X.isUpdating = !1;
      }
      Qi = 0;
    },
    zo = [
      au,
      ou,
      Mo,
      ko,
      Xt + Ki,
      Xt + Gi,
      Xt + Ui,
      Xt + ji,
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
    Qs = zo.concat([
      yr,
      _r,
      "boxSizing",
      "max" + ri,
      "max" + $o,
      "position",
      Xt,
      Ae,
      Ae + Ui,
      Ae + Gi,
      Ae + Ki,
      Ae + ji,
    ]),
    Hm = function (t, n, r) {
      si(r);
      var i = t._gsap;
      if (i.spacerIsNative) si(i.spacerState);
      else if (t._gsap.swappedIn) {
        var s = n.parentNode;
        s && (s.insertBefore(t, n), s.removeChild(n));
      }
      t._gsap.swappedIn = !1;
    },
    Ro = function (t, n, r, i) {
      if (!t._gsap.swappedIn) {
        for (var s = zo.length, a = n.style, o = t.style, l; s--; )
          (l = zo[s]), (a[l] = r[l]);
        (a.position = r.position === "absolute" ? "absolute" : "relative"),
          r.display === "inline" && (a.display = "inline-block"),
          (o[Mo] = o[ko] = "auto"),
          (a.flexBasis = r.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[yr] = Bs(t, pt) + Ne),
          (a[_r] = Bs(t, Re) + Ne),
          (a[Ae] = o[Xt] = o[ou] = o[au] = "0"),
          si(i),
          (o[yr] = o["max" + ri] = r[yr]),
          (o[_r] = o["max" + $o] = r[_r]),
          (o[Ae] = r[Ae]),
          t.parentNode !== n &&
            (t.parentNode.insertBefore(n, t), n.appendChild(t)),
          (t._gsap.swappedIn = !0);
      }
    },
    qm = /([A-Z])/g,
    si = function (t) {
      if (t) {
        var n = t.t.style,
          r = t.length,
          i = 0,
          s,
          a;
        for ((t.t._gsap || q.core.getCache(t.t)).uncache = 1; i < r; i += 2)
          (a = t[i + 1]),
            (s = t[i]),
            a
              ? (n[s] = a)
              : n[s] && n.removeProperty(s.replace(qm, "-$1").toLowerCase());
      }
    },
    Zs = function (t) {
      for (var n = Qs.length, r = t.style, i = [], s = 0; s < n; s++)
        i.push(Qs[s], r[Qs[s]]);
      return (i.t = t), i;
    },
    Bm = function (t, n, r) {
      for (var i = [], s = t.length, a = r ? 8 : 0, o; a < s; a += 2)
        (o = t[a]), i.push(o, o in n ? n[o] : t[a + 1]);
      return (i.t = t.t), i;
    },
    Js = { left: 0, top: 0 },
    yu = function (t, n, r, i, s, a, o, l, c, u, f, d, h, m) {
      at(t) && (t = t(l)),
        zt(t) &&
          t.substr(0, 3) === "max" &&
          (t = d + (t.charAt(4) === "=" ? Gs("0" + t.substr(3), r) : 0));
      var p = h ? h.time() : 0,
        g,
        y,
        v;
      if ((h && h.seek(0), isNaN(t) || (t = +t), Yi(t)))
        h &&
          (t = q.utils.mapRange(
            h.scrollTrigger.start,
            h.scrollTrigger.end,
            0,
            d,
            t
          )),
          o && Us(o, r, i, !0);
      else {
        at(n) && (n = n(l));
        var _ = (t || "0").split(" "),
          x,
          S,
          C,
          w;
        (v = Et(n, l) || oe),
          (x = wn(v) || {}),
          (!x || (!x.left && !x.top)) &&
            Gt(v).display === "none" &&
            ((w = v.style.display),
            (v.style.display = "block"),
            (x = wn(v)),
            w ? (v.style.display = w) : v.style.removeProperty("display")),
          (S = Gs(_[0], x[i.d])),
          (C = Gs(_[1] || "0", r)),
          (t = x[i.p] - c[i.p] - u + S + s - C),
          o && Us(o, C, i, r - C < 20 || (o._isStart && C > 20)),
          (r -= r - C);
      }
      if ((m && ((l[m] = t || -0.001), t < 0 && (t = 0)), a)) {
        var P = t + r,
          A = a._isStart;
        (g = "scroll" + i.d2),
          Us(
            a,
            P,
            i,
            (A && P > 20) ||
              (!A && (f ? Math.max(oe[g], It[g]) : a.parentNode[g]) <= P + 1)
          ),
          f &&
            ((c = wn(o)),
            f && (a.style[i.op.p] = c[i.op.p] - i.op.m - a._offset + Ne));
      }
      return (
        h &&
          v &&
          ((g = wn(v)),
          h.seek(d),
          (y = wn(v)),
          (h._caScrollDist = g[i.p] - y[i.p]),
          (t = (t / h._caScrollDist) * d)),
        h && h.seek(p),
        h ? t : Math.round(t)
      );
    },
    Vm = /(webkit|moz|length|cssText|inset)/i,
    _u = function (t, n, r, i) {
      if (t.parentNode !== n) {
        var s = t.style,
          a,
          o;
        if (n === oe) {
          (t._stOrig = s.cssText), (o = Gt(t));
          for (a in o)
            !+a &&
              !Vm.test(a) &&
              o[a] &&
              typeof s[a] == "string" &&
              a !== "0" &&
              (s[a] = o[a]);
          (s.top = r), (s.left = i);
        } else s.cssText = t._stOrig;
        (q.core.getCache(t).uncache = 1), n.appendChild(t);
      }
    },
    bu = function (t, n, r) {
      var i = n,
        s = i;
      return function (a) {
        var o = Math.round(t());
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
    ea = function (t, n, r) {
      var i = {};
      (i[n.p] = "+=" + r), q.set(t, i);
    },
    xu = function (t, n) {
      var r = Xn(t, n),
        i = "_scroll" + n.p2,
        s = function a(o, l, c, u, f) {
          var d = a.tween,
            h = l.onComplete,
            m = {};
          c = c || r();
          var p = bu(r, c, function () {
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
              Z.cache++, a.tween && Cn();
            }),
            (l.onComplete = function () {
              (a.tween = 0), h && h.call(d);
            }),
            (d = a.tween = q.to(t, l)),
            d
          );
        };
      return (
        (t[i] = r),
        (r.wheelHandler = function () {
          return s.tween && s.tween.kill() && (s.tween = 0);
        }),
        Ve(t, "wheel", r.wheelHandler),
        X.isTouch && Ve(t, "touchmove", r.wheelHandler),
        s
      );
    },
    X = (function () {
      function e(n, r) {
        Jr ||
          e.register(q) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          xo(this),
          this.init(n, r);
      }
      var t = e.prototype;
      return (
        (t.init = function (r, i) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !Vi)
          ) {
            this.update = this.refresh = this.kill = un;
            return;
          }
          r = lu(zt(r) || Yi(r) || r.nodeType ? { trigger: r } : r, Ys);
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
            C = s.pinSpacer,
            w = s.containerAnimation,
            P = s.fastScrollEnd,
            A = s.preventOverlaps,
            E =
              r.horizontal || (r.containerAnimation && r.horizontal !== !1)
                ? pt
                : Re,
            $ = !f && f !== 0,
            b = Et(r.scroller || J),
            T = q.core.getCache(b),
            O = gr(b),
            D =
              ("pinType" in r
                ? r.pinType
                : Yn(b, "pinType") || (O && "fixed")) === "fixed",
            k = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
            L = $ && r.toggleActions.split(" "),
            I = "markers" in r ? r.markers : Ys.markers,
            R = O ? 0 : parseFloat(Gt(b)["border" + E.p2 + ri]) || 0,
            M = this,
            V =
              r.onRefreshInit &&
              function () {
                return r.onRefreshInit(M);
              },
            K = Lm(b, O, E),
            se = Dm(b, O),
            le = 0,
            fe = 0,
            ge = 0,
            be = Xn(b, E),
            Ye,
            Fe,
            Kt,
            De,
            He,
            ee,
            pe,
            Xe,
            Ze,
            z,
            Nt,
            kn,
            Zn,
            Te,
            Mn,
            Jn,
            Mr,
            Ge,
            er,
            Pe,
            Qt,
            jt,
            $n,
            ss,
            Ie,
            ua,
            On,
            fi,
            di,
            tr,
            $r,
            te,
            Or,
            Zt,
            Jt,
            en,
            Ar,
            hi,
            An;
          if (
            ((M._startClamp = M._endClamp = !1),
            (M._dir = E),
            (g *= 45),
            (M.scroller = b),
            (M.scroll = w ? w.time.bind(w) : be),
            (De = be()),
            (M.vars = r),
            (i = i || r.animation),
            "refreshPriority" in r &&
              ((jc = 1), r.refreshPriority === -9999 && (Ji = M)),
            (T.tweenScroll = T.tweenScroll || {
              top: xu(b, Re),
              left: xu(b, pt),
            }),
            (M.tweenTo = Ye = T.tweenScroll[E.p]),
            (M.scrubDuration = function (H) {
              (Or = Yi(H) && H),
                Or
                  ? te
                    ? te.duration(H)
                    : (te = q.to(i, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: Or,
                        paused: !0,
                        onComplete: function () {
                          return y && y(M);
                        },
                      }))
                  : (te && te.progress(1).kill(), (te = 0));
            }),
            i &&
              ((i.vars.lazy = !1),
              (i._initted && !M.isReverted) ||
                (i.vars.immediateRender !== !1 &&
                  r.immediateRender !== !1 &&
                  i.duration() &&
                  i.render(0, !0, !0)),
              (M.animation = i.pause()),
              (i.scrollTrigger = M),
              M.scrubDuration(f),
              (tr = 0),
              l || (l = i.vars.id)),
            x &&
              ((!vr(x) || x.push) && (x = { snapTo: x }),
              "scrollBehavior" in oe.style &&
                q.set(O ? [oe, It] : b, { scrollBehavior: "auto" }),
              Z.forEach(function (H) {
                return (
                  at(H) &&
                  H.target === (O ? he.scrollingElement || It : b) &&
                  (H.smooth = !1)
                );
              }),
              (Kt = at(x.snapTo)
                ? x.snapTo
                : x.snapTo === "labels"
                ? zm(i)
                : x.snapTo === "labelsDirectional"
                ? Rm(i)
                : x.directional !== !1
                ? function (H, G) {
                    return Oo(x.snapTo)(H, st() - fe < 500 ? 0 : G.direction);
                  }
                : q.utils.snap(x.snapTo)),
              (Zt = x.duration || { min: 0.1, max: 2 }),
              (Zt = vr(Zt) ? qi(Zt.min, Zt.max) : qi(Zt, Zt)),
              (Jt = q
                .delayedCall(x.delay || Or / 2 || 0.1, function () {
                  var H = be(),
                    G = st() - fe < 500,
                    W = Ye.tween;
                  if (
                    (G || Math.abs(M.getVelocity()) < 10) &&
                    !W &&
                    !Ns &&
                    le !== H
                  ) {
                    var j = (H - ee) / Te,
                      je = i && !$ ? i.totalProgress() : j,
                      re = G ? 0 : ((je - $r) / (st() - Bi)) * 1e3 || 0,
                      ke = q.utils.clamp(-j, 1 - j, (ni(re / 2) * re) / 0.185),
                      ot = j + (x.inertia === !1 ? 0 : ke),
                      Ee,
                      ve,
                      de = x,
                      tn = de.onStart,
                      xe = de.onInterrupt,
                      Ft = de.onComplete;
                    if (
                      ((Ee = Kt(ot, M)),
                      Yi(Ee) || (Ee = ot),
                      (ve = Math.max(0, Math.round(ee + Ee * Te))),
                      H <= pe && H >= ee && ve !== H)
                    ) {
                      if (W && !W._initted && W.data <= ni(ve - H)) return;
                      x.inertia === !1 && (ke = Ee - j),
                        Ye(
                          ve,
                          {
                            duration: Zt(
                              ni(
                                (Math.max(ni(ot - je), ni(Ee - je)) * 0.185) /
                                  re /
                                  0.05 || 0
                              )
                            ),
                            ease: x.ease || "power3",
                            data: ni(ve - H),
                            onInterrupt: function () {
                              return Jt.restart(!0) && xe && xe(M);
                            },
                            onComplete: function () {
                              M.update(),
                                (le = be()),
                                i &&
                                  !$ &&
                                  (te
                                    ? te.resetTo(
                                        "totalProgress",
                                        Ee,
                                        i._tTime / i._tDur
                                      )
                                    : i.progress(Ee)),
                                (tr = $r =
                                  i && !$ ? i.totalProgress() : M.progress),
                                v && v(M),
                                Ft && Ft(M);
                            },
                          },
                          H,
                          ke * Te,
                          ve - H - ke * Te
                        ),
                        tn && tn(M, Ye.tween);
                    }
                  } else M.isActive && le !== H && Jt.restart(!0);
                })
                .pause())),
            l && (Ao[l] = M),
            (d = M.trigger = Et(d || (h !== !0 && h))),
            (An = d && d._gsap && d._gsap.stRevert),
            An && (An = An(M)),
            (h = h === !0 ? d : Et(h)),
            zt(o) && (o = { targets: d, className: o }),
            h &&
              (m === !1 ||
                m === Xt ||
                (m =
                  !m &&
                  h.parentNode &&
                  h.parentNode.style &&
                  Gt(h.parentNode).display === "flex"
                    ? !1
                    : Ae),
              (M.pin = h),
              (Fe = q.core.getCache(h)),
              Fe.spacer
                ? (Mn = Fe.pinState)
                : (C &&
                    ((C = Et(C)),
                    C && !C.nodeType && (C = C.current || C.nativeElement),
                    (Fe.spacerIsNative = !!C),
                    C && (Fe.spacerState = Zs(C))),
                  (Fe.spacer = Ge = C || he.createElement("div")),
                  Ge.classList.add("pin-spacer"),
                  l && Ge.classList.add("pin-spacer-" + l),
                  (Fe.pinState = Mn = Zs(h))),
              r.force3D !== !1 && q.set(h, { force3D: !0 }),
              (M.spacer = Ge = Fe.spacer),
              (di = Gt(h)),
              (ss = di[m + E.os2]),
              (Pe = q.getProperty(h)),
              (Qt = q.quickSetter(h, E.a, Ne)),
              Ro(h, Ge, di),
              (Mr = Zs(h))),
            I)
          ) {
            (kn = vr(I) ? lu(I, uu) : uu),
              (z = js("scroller-start", l, b, E, kn, 0)),
              (Nt = js("scroller-end", l, b, E, kn, 0, z)),
              (er = z["offset" + E.op.d2]);
            var as = Et(Yn(b, "content") || b);
            (Xe = this.markerStart = js("start", l, as, E, kn, er, 0, w)),
              (Ze = this.markerEnd = js("end", l, as, E, kn, er, 0, w)),
              w && (hi = q.quickSetter([Xe, Ze], E.a, Ne)),
              !D &&
                !(cn.length && Yn(b, "fixedMarkers") === !0) &&
                (Im(O ? oe : b),
                q.set([z, Nt], { force3D: !0 }),
                (ua = q.quickSetter(z, E.a, Ne)),
                (fi = q.quickSetter(Nt, E.a, Ne)));
          }
          if (w) {
            var U = w.vars.onUpdate,
              Y = w.vars.onUpdateParams;
            w.eventCallback("onUpdate", function () {
              M.update(0, 0, 1), U && U.apply(w, Y || []);
            });
          }
          if (
            ((M.previous = function () {
              return Q[Q.indexOf(M) - 1];
            }),
            (M.next = function () {
              return Q[Q.indexOf(M) + 1];
            }),
            (M.revert = function (H, G) {
              if (!G) return M.kill(!0);
              var W = H !== !1 || !M.enabled,
                j = it;
              W !== M.isReverted &&
                (W &&
                  ((en = Math.max(be(), M.scroll.rec || 0)),
                  (ge = M.progress),
                  (Ar = i && i.progress())),
                Xe &&
                  [Xe, Ze, z, Nt].forEach(function (je) {
                    return (je.style.display = W ? "none" : "block");
                  }),
                W && ((it = M), M.update(W)),
                h &&
                  (!S || !M.isActive) &&
                  (W ? Hm(h, Ge, Mn) : Ro(h, Ge, Gt(h), Ie)),
                W || M.update(W),
                (it = j),
                (M.isReverted = W));
            }),
            (M.refresh = function (H, G, W, j) {
              if (!((it || !M.enabled) && !G)) {
                if (h && H && Yt) {
                  Ve(e, "scrollEnd", du);
                  return;
                }
                !vt && V && V(M),
                  (it = M),
                  Ye.tween && !W && (Ye.tween.kill(), (Ye.tween = 0)),
                  te && te.pause(),
                  p &&
                    i &&
                    (i.revert({ kill: !1 }).invalidate(),
                    i.getChildren &&
                      i.getChildren(!0, !0, !1).forEach(function (nr) {
                        return nr.vars.immediateRender && nr.render(0, !0, !0);
                      })),
                  M.isReverted || M.revert(!0, !0),
                  (M._subPinOffset = !1);
                var je = K(),
                  re = se(),
                  ke = w ? w.duration() : fn(b, E),
                  ot = Te <= 0.01 || !Te,
                  Ee = 0,
                  ve = j || 0,
                  de = vr(W) ? W.end : r.end,
                  tn = r.endTrigger || d,
                  xe = vr(W)
                    ? W.start
                    : r.start ||
                      (r.start === 0 || !d ? 0 : h ? "0 0" : "0 100%"),
                  Ft = (M.pinnedContainer =
                    r.pinnedContainer && Et(r.pinnedContainer, M)),
                  mn = (d && Math.max(0, Q.indexOf(M))) || 0,
                  Je = mn,
                  et,
                  lt,
                  Lr,
                  fa,
                  ct,
                  qe,
                  gn,
                  Zo,
                  cf,
                  os,
                  vn,
                  ls,
                  da;
                for (
                  I &&
                  vr(W) &&
                  ((ls = q.getProperty(z, E.p)), (da = q.getProperty(Nt, E.p)));
                  Je-- > 0;

                )
                  (qe = Q[Je]),
                    qe.end || qe.refresh(0, 1) || (it = M),
                    (gn = qe.pin),
                    gn &&
                      (gn === d || gn === h || gn === Ft) &&
                      !qe.isReverted &&
                      (os || (os = []), os.unshift(qe), qe.revert(!0, !0)),
                    qe !== Q[Je] && (mn--, Je--);
                for (
                  at(xe) && (xe = xe(M)),
                    xe = Zc(xe, "start", M),
                    ee =
                      yu(
                        xe,
                        d,
                        je,
                        E,
                        be(),
                        Xe,
                        z,
                        M,
                        re,
                        R,
                        D,
                        ke,
                        w,
                        M._startClamp && "_startClamp"
                      ) || (h ? -0.001 : 0),
                    at(de) && (de = de(M)),
                    zt(de) &&
                      !de.indexOf("+=") &&
                      (~de.indexOf(" ")
                        ? (de = (zt(xe) ? xe.split(" ")[0] : "") + de)
                        : ((Ee = Gs(de.substr(2), je)),
                          (de = zt(xe)
                            ? xe
                            : (w
                                ? q.utils.mapRange(
                                    0,
                                    w.duration(),
                                    w.scrollTrigger.start,
                                    w.scrollTrigger.end,
                                    ee
                                  )
                                : ee) + Ee),
                          (tn = d))),
                    de = Zc(de, "end", M),
                    pe =
                      Math.max(
                        ee,
                        yu(
                          de || (tn ? "100% 0" : ke),
                          tn,
                          je,
                          E,
                          be() + Ee,
                          Ze,
                          Nt,
                          M,
                          re,
                          R,
                          D,
                          ke,
                          w,
                          M._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    Ee = 0,
                    Je = mn;
                  Je--;

                )
                  (qe = Q[Je]),
                    (gn = qe.pin),
                    gn &&
                      qe.start - qe._pinPush <= ee &&
                      !w &&
                      qe.end > 0 &&
                      ((et =
                        qe.end -
                        (M._startClamp ? Math.max(0, qe.start) : qe.start)),
                      ((gn === d && qe.start - qe._pinPush < ee) ||
                        gn === Ft) &&
                        isNaN(xe) &&
                        (Ee += et * (1 - qe.progress)),
                      gn === h && (ve += et));
                if (
                  ((ee += Ee),
                  (pe += Ee),
                  M._startClamp && (M._startClamp += Ee),
                  M._endClamp &&
                    !vt &&
                    ((M._endClamp = pe || -0.001),
                    (pe = Math.min(pe, fn(b, E)))),
                  (Te = pe - ee || ((ee -= 0.01) && 0.001)),
                  ot &&
                    (ge = q.utils.clamp(0, 1, q.utils.normalize(ee, pe, en))),
                  (M._pinPush = ve),
                  Xe &&
                    Ee &&
                    ((et = {}),
                    (et[E.a] = "+=" + Ee),
                    Ft && (et[E.p] = "-=" + be()),
                    q.set([Xe, Ze], et)),
                  h && !(Eo && M.end >= fn(b, E)))
                )
                  (et = Gt(h)),
                    (fa = E === Re),
                    (Lr = be()),
                    (jt = parseFloat(Pe(E.a)) + ve),
                    !ke &&
                      pe > 1 &&
                      ((vn = (O ? he.scrollingElement || It : b).style),
                      (vn = {
                        style: vn,
                        value: vn["overflow" + E.a.toUpperCase()],
                      }),
                      O &&
                        Gt(oe)["overflow" + E.a.toUpperCase()] !== "scroll" &&
                        (vn.style["overflow" + E.a.toUpperCase()] = "scroll")),
                    Ro(h, Ge, et),
                    (Mr = Zs(h)),
                    (lt = wn(h, !0)),
                    (Zo = D && Xn(b, fa ? pt : Re)()),
                    m
                      ? ((Ie = [m + E.os2, Te + ve + Ne]),
                        (Ie.t = Ge),
                        (Je = m === Ae ? Bs(h, E) + Te + ve : 0),
                        Je &&
                          (Ie.push(E.d, Je + Ne),
                          Ge.style.flexBasis !== "auto" &&
                            (Ge.style.flexBasis = Je + Ne)),
                        si(Ie),
                        Ft &&
                          Q.forEach(function (nr) {
                            nr.pin === Ft &&
                              nr.vars.pinSpacing !== !1 &&
                              (nr._subPinOffset = !0);
                          }),
                        D && be(en))
                      : ((Je = Bs(h, E)),
                        Je &&
                          Ge.style.flexBasis !== "auto" &&
                          (Ge.style.flexBasis = Je + Ne)),
                    D &&
                      ((ct = {
                        top: lt.top + (fa ? Lr - ee : Zo) + Ne,
                        left: lt.left + (fa ? Zo : Lr - ee) + Ne,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (ct[yr] = ct["max" + ri] = Math.ceil(lt.width) + Ne),
                      (ct[_r] = ct["max" + $o] = Math.ceil(lt.height) + Ne),
                      (ct[Xt] =
                        ct[Xt + Ui] =
                        ct[Xt + Gi] =
                        ct[Xt + Ki] =
                        ct[Xt + ji] =
                          "0"),
                      (ct[Ae] = et[Ae]),
                      (ct[Ae + Ui] = et[Ae + Ui]),
                      (ct[Ae + Gi] = et[Ae + Gi]),
                      (ct[Ae + Ki] = et[Ae + Ki]),
                      (ct[Ae + ji] = et[Ae + ji]),
                      (Jn = Bm(Mn, ct, S)),
                      vt && be(0)),
                    i
                      ? ((cf = i._initted),
                        _o(1),
                        i.render(i.duration(), !0, !0),
                        ($n = Pe(E.a) - jt + Te + ve),
                        (On = Math.abs(Te - $n) > 1),
                        D && On && Jn.splice(Jn.length - 2, 2),
                        i.render(0, !0, !0),
                        cf || i.invalidate(!0),
                        i.parent || i.totalTime(i.totalTime()),
                        _o(0))
                      : ($n = Te),
                    vn &&
                      (vn.value
                        ? (vn.style["overflow" + E.a.toUpperCase()] = vn.value)
                        : vn.style.removeProperty("overflow-" + E.a));
                else if (d && be() && !w)
                  for (lt = d.parentNode; lt && lt !== oe; )
                    lt._pinOffset &&
                      ((ee -= lt._pinOffset), (pe -= lt._pinOffset)),
                      (lt = lt.parentNode);
                os &&
                  os.forEach(function (nr) {
                    return nr.revert(!1, !0);
                  }),
                  (M.start = ee),
                  (M.end = pe),
                  (De = He = vt ? en : be()),
                  !w && !vt && (De < en && be(en), (M.scroll.rec = 0)),
                  M.revert(!1, !0),
                  (fe = st()),
                  Jt && ((le = -1), Jt.restart(!0)),
                  (it = 0),
                  i &&
                    $ &&
                    (i._initted || Ar) &&
                    i.progress() !== Ar &&
                    i.progress(Ar || 0, !0).render(i.time(), !0, !0),
                  (ot || ge !== M.progress || w || p || (i && !i._initted)) &&
                    (i &&
                      !$ &&
                      (i._initted || ge || i.vars.immediateRender !== !1) &&
                      i.totalProgress(
                        w && ee < -0.001 && !ge
                          ? q.utils.normalize(ee, pe, 0)
                          : ge,
                        !0
                      ),
                    (M.progress = ot || (De - ee) / Te === ge ? 0 : ge)),
                  h && m && (Ge._pinOffset = Math.round(M.progress * $n)),
                  te && te.invalidate(),
                  isNaN(ls) ||
                    ((ls -= q.getProperty(z, E.p)),
                    (da -= q.getProperty(Nt, E.p)),
                    ea(z, E, ls),
                    ea(Xe, E, ls - (j || 0)),
                    ea(Nt, E, da),
                    ea(Ze, E, da - (j || 0))),
                  ot && !vt && M.update(),
                  u && !vt && !Zn && ((Zn = !0), u(M), (Zn = !1));
              }
            }),
            (M.getVelocity = function () {
              return ((be() - He) / (st() - Bi)) * 1e3 || 0;
            }),
            (M.endAnimation = function () {
              Xi(M.callbackAnimation),
                i &&
                  (te
                    ? te.progress(1)
                    : i.paused()
                    ? $ || Xi(i, M.direction < 0, 1)
                    : Xi(i, i.reversed()));
            }),
            (M.labelToScroll = function (H) {
              return (
                (i &&
                  i.labels &&
                  (ee || M.refresh() || ee) +
                    (i.labels[H] / i.duration()) * Te) ||
                0
              );
            }),
            (M.getTrailing = function (H) {
              var G = Q.indexOf(M),
                W = M.direction > 0 ? Q.slice(0, G).reverse() : Q.slice(G + 1);
              return (
                zt(H)
                  ? W.filter(function (j) {
                      return j.vars.preventOverlaps === H;
                    })
                  : W
              ).filter(function (j) {
                return M.direction > 0 ? j.end <= ee : j.start >= pe;
              });
            }),
            (M.update = function (H, G, W) {
              if (!(w && !W && !H)) {
                var j = vt === !0 ? en : M.scroll(),
                  je = H ? 0 : (j - ee) / Te,
                  re = je < 0 ? 0 : je > 1 ? 1 : je || 0,
                  ke = M.progress,
                  ot,
                  Ee,
                  ve,
                  de,
                  tn,
                  xe,
                  Ft,
                  mn;
                if (
                  (G &&
                    ((He = De),
                    (De = w ? be() : j),
                    x && (($r = tr), (tr = i && !$ ? i.totalProgress() : re))),
                  g &&
                    h &&
                    !it &&
                    !Hs &&
                    Yt &&
                    (!re && ee < j + ((j - He) / (st() - Bi)) * g
                      ? (re = 1e-4)
                      : re === 1 &&
                        pe > j + ((j - He) / (st() - Bi)) * g &&
                        (re = 0.9999)),
                  re !== ke && M.enabled)
                ) {
                  if (
                    ((ot = M.isActive = !!re && re < 1),
                    (Ee = !!ke && ke < 1),
                    (xe = ot !== Ee),
                    (tn = xe || !!re != !!ke),
                    (M.direction = re > ke ? 1 : -1),
                    (M.progress = re),
                    tn &&
                      !it &&
                      ((ve = re && !ke ? 0 : re === 1 ? 1 : ke === 1 ? 2 : 3),
                      $ &&
                        ((de =
                          (!xe && L[ve + 1] !== "none" && L[ve + 1]) || L[ve]),
                        (mn =
                          i &&
                          (de === "complete" || de === "reset" || de in i)))),
                    A &&
                      (xe || mn) &&
                      (mn || f || !i) &&
                      (at(A)
                        ? A(M)
                        : M.getTrailing(A).forEach(function (Lr) {
                            return Lr.endAnimation();
                          })),
                    $ ||
                      (te && !it && !Hs
                        ? (te._dp._time - te._start !== te._time &&
                            te.render(te._dp._time - te._start),
                          te.resetTo
                            ? te.resetTo(
                                "totalProgress",
                                re,
                                i._tTime / i._tDur
                              )
                            : ((te.vars.totalProgress = re),
                              te.invalidate().restart()))
                        : i && i.totalProgress(re, !!(it && (fe || H)))),
                    h)
                  ) {
                    if ((H && m && (Ge.style[m + E.os2] = ss), !D))
                      Qt(Wi(jt + $n * re));
                    else if (tn) {
                      if (
                        ((Ft =
                          !H && re > ke && pe + 1 > j && j + 1 >= fn(b, E)),
                        S)
                      )
                        if (!H && (ot || Ft)) {
                          var Je = wn(h, !0),
                            et = j - ee;
                          _u(
                            h,
                            oe,
                            Je.top + (E === Re ? et : 0) + Ne,
                            Je.left + (E === Re ? 0 : et) + Ne
                          );
                        } else _u(h, Ge);
                      si(ot || Ft ? Jn : Mr),
                        (On && re < 1 && ot) ||
                          Qt(jt + (re === 1 && !Ft ? $n : 0));
                    }
                  }
                  x && !Ye.tween && !it && !Hs && Jt.restart(!0),
                    o &&
                      (xe || (_ && re && (re < 1 || !wo))) &&
                      Hi(o.targets).forEach(function (Lr) {
                        return Lr.classList[ot || _ ? "add" : "remove"](
                          o.className
                        );
                      }),
                    a && !$ && !H && a(M),
                    tn && !it
                      ? ($ &&
                          (mn &&
                            (de === "complete"
                              ? i.pause().totalProgress(1)
                              : de === "reset"
                              ? i.restart(!0).pause()
                              : de === "restart"
                              ? i.restart(!0)
                              : i[de]()),
                          a && a(M)),
                        (xe || !wo) &&
                          (c && xe && Po(M, c),
                          k[ve] && Po(M, k[ve]),
                          _ && (re === 1 ? M.kill(!1, 1) : (k[ve] = 0)),
                          xe ||
                            ((ve = re === 1 ? 1 : 3), k[ve] && Po(M, k[ve]))),
                        P &&
                          !ot &&
                          Math.abs(M.getVelocity()) > (Yi(P) ? P : 2500) &&
                          (Xi(M.callbackAnimation),
                          te
                            ? te.progress(1)
                            : Xi(i, de === "reverse" ? 1 : !re, 1)))
                      : $ && a && !it && a(M);
                }
                if (fi) {
                  var lt = w ? (j / w.duration()) * (w._caScrollDist || 0) : j;
                  ua(lt + (z._isFlipped ? 1 : 0)), fi(lt);
                }
                hi && hi((-j / w.duration()) * (w._caScrollDist || 0));
              }
            }),
            (M.enable = function (H, G) {
              M.enabled ||
                ((M.enabled = !0),
                Ve(b, "resize", Zi),
                O || Ve(b, "scroll", ii),
                V && Ve(e, "refreshInit", V),
                H !== !1 && ((M.progress = ge = 0), (De = He = le = be())),
                G !== !1 && M.refresh());
            }),
            (M.getTween = function (H) {
              return H && Ye ? Ye.tween : te;
            }),
            (M.setPositions = function (H, G, W, j) {
              if (w) {
                var je = w.scrollTrigger,
                  re = w.duration(),
                  ke = je.end - je.start;
                (H = je.start + (ke * H) / re), (G = je.start + (ke * G) / re);
              }
              M.refresh(
                !1,
                !1,
                {
                  start: Jc(H, W && !!M._startClamp),
                  end: Jc(G, W && !!M._endClamp),
                },
                j
              ),
                M.update();
            }),
            (M.adjustPinSpacing = function (H) {
              if (Ie && H) {
                var G = Ie.indexOf(E.d) + 1;
                (Ie[G] = parseFloat(Ie[G]) + H + Ne),
                  (Ie[1] = parseFloat(Ie[1]) + H + Ne),
                  si(Ie);
              }
            }),
            (M.disable = function (H, G) {
              if (
                M.enabled &&
                (H !== !1 && M.revert(!0, !0),
                (M.enabled = M.isActive = !1),
                G || (te && te.pause()),
                (en = 0),
                Fe && (Fe.uncache = 1),
                V && We(e, "refreshInit", V),
                Jt &&
                  (Jt.pause(), Ye.tween && Ye.tween.kill() && (Ye.tween = 0)),
                !O)
              ) {
                for (var W = Q.length; W--; )
                  if (Q[W].scroller === b && Q[W] !== M) return;
                We(b, "resize", Zi), O || We(b, "scroll", ii);
              }
            }),
            (M.kill = function (H, G) {
              M.disable(H, G), te && !G && te.kill(), l && delete Ao[l];
              var W = Q.indexOf(M);
              W >= 0 && Q.splice(W, 1),
                W === mt && Ks > 0 && mt--,
                (W = 0),
                Q.forEach(function (j) {
                  return j.scroller === M.scroller && (W = 1);
                }),
                W || vt || (M.scroll.rec = 0),
                i &&
                  ((i.scrollTrigger = null),
                  H && i.revert({ kill: !1 }),
                  G || i.kill()),
                Xe &&
                  [Xe, Ze, z, Nt].forEach(function (j) {
                    return j.parentNode && j.parentNode.removeChild(j);
                  }),
                Ji === M && (Ji = 0),
                h &&
                  (Fe && (Fe.uncache = 1),
                  (W = 0),
                  Q.forEach(function (j) {
                    return j.pin === h && W++;
                  }),
                  W || (Fe.spacer = 0)),
                r.onKill && r.onKill(M);
            }),
            Q.push(M),
            M.enable(!1, !1),
            An && An(M),
            i && i.add && !Te)
          ) {
            var ae = M.update;
            (M.update = function () {
              (M.update = ae), Z.cache++, ee || pe || M.refresh();
            }),
              q.delayedCall(0.01, M.update),
              (Te = 0.01),
              (ee = pe = 0);
          } else M.refresh();
          h && Fm();
        }),
        (e.register = function (r) {
          return (
            Jr ||
              ((q = r || ru()),
              nu() && window.document && e.enable(),
              (Jr = Vi)),
            Jr
          );
        }),
        (e.defaults = function (r) {
          if (r) for (var i in r) Ys[i] = r[i];
          return Ys;
        }),
        (e.disable = function (r, i) {
          (Vi = 0),
            Q.forEach(function (a) {
              return a[i ? "kill" : "disable"](r);
            }),
            We(J, "wheel", ii),
            We(he, "scroll", ii),
            clearInterval(Rs),
            We(he, "touchcancel", un),
            We(oe, "touchstart", un),
            Vs(We, he, "pointerdown,touchstart,mousedown", eu),
            Vs(We, he, "pointerup,touchend,mouseup", tu),
            zs.kill(),
            qs(We);
          for (var s = 0; s < Z.length; s += 3)
            Ws(We, Z[s], Z[s + 1]), Ws(We, Z[s], Z[s + 2]);
        }),
        (e.enable = function () {
          if (
            ((J = window),
            (he = document),
            (It = he.documentElement),
            (oe = he.body),
            q &&
              ((Hi = q.utils.toArray),
              (qi = q.utils.clamp),
              (xo = q.core.context || un),
              (_o = q.core.suppressOverwrites || un),
              (So = J.history.scrollRestoration || "auto"),
              (Io = J.pageYOffset || 0),
              q.core.globals("ScrollTrigger", e),
              oe))
          ) {
            (Vi = 1),
              (ti = document.createElement("div")),
              (ti.style.height = "100vh"),
              (ti.style.position = "absolute"),
              gu(),
              Am(),
              Ce.register(q),
              (e.isTouch = Ce.isTouch),
              (Gn =
                Ce.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (bo = Ce.isTouch === 1),
              Ve(J, "wheel", ii),
              (vo = [J, he, It, oe]),
              q.matchMedia
                ? ((e.matchMedia = function (c) {
                    var u = q.matchMedia(),
                      f;
                    for (f in c) u.add(f, c[f]);
                    return u;
                  }),
                  q.addEventListener("matchMediaInit", function () {
                    return Do();
                  }),
                  q.addEventListener("matchMediaRevert", function () {
                    return hu();
                  }),
                  q.addEventListener("matchMedia", function () {
                    Tr(0, 1), xr("matchMedia");
                  }),
                  q.matchMedia().add("(orientation: portrait)", function () {
                    return Lo(), Lo;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              Lo(),
              Ve(he, "scroll", ii);
            var r = oe.hasAttribute("style"),
              i = oe.style,
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
                o = wn(oe),
                Re.m = Math.round(o.top + Re.sc()) || 0,
                pt.m = Math.round(o.left + pt.sc()) || 0,
                s
                  ? (i.borderTopStyle = s)
                  : i.removeProperty("border-top-style"),
                r ||
                  (oe.setAttribute("style", ""), oe.removeAttribute("style")),
                Rs = setInterval(fu, 250),
                q.delayedCall(0.5, function () {
                  return (Hs = 0);
                }),
                Ve(he, "touchcancel", un),
                Ve(oe, "touchstart", un),
                Vs(Ve, he, "pointerdown,touchstart,mousedown", eu),
                Vs(Ve, he, "pointerup,touchend,mouseup", tu),
                yo = q.utils.checkPrefix("transform"),
                Qs.push(yo),
                Jr = st(),
                zs = q.delayedCall(0.2, Tr).pause(),
                ei = [
                  he,
                  "visibilitychange",
                  function () {
                    var c = J.innerWidth,
                      u = J.innerHeight;
                    he.hidden
                      ? ((Xc = c), (Gc = u))
                      : (Xc !== c || Gc !== u) && Zi();
                  },
                  he,
                  "DOMContentLoaded",
                  Tr,
                  J,
                  "load",
                  Tr,
                  J,
                  "resize",
                  Zi,
                ],
                qs(Ve),
                Q.forEach(function (c) {
                  return c.enable(0, 1);
                }),
                l = 0;
              l < Z.length;
              l += 3
            )
              Ws(We, Z[l], Z[l + 1]), Ws(We, Z[l], Z[l + 2]);
          }
        }),
        (e.config = function (r) {
          "limitCallbacks" in r && (wo = !!r.limitCallbacks);
          var i = r.syncInterval;
          (i && clearInterval(Rs)) || ((Rs = i) && setInterval(fu, i)),
            "ignoreMobileResize" in r &&
              (bo = e.isTouch === 1 && r.ignoreMobileResize),
            "autoRefreshEvents" in r &&
              (qs(We) || qs(Ve, r.autoRefreshEvents || "none"),
              (Uc = (r.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (e.scrollerProxy = function (r, i) {
          var s = Et(r),
            a = Z.indexOf(s),
            o = gr(s);
          ~a && Z.splice(a, o ? 6 : 2),
            i && (o ? cn.unshift(J, i, oe, i, It, i) : cn.unshift(s, i));
        }),
        (e.clearMatchMedia = function (r) {
          Q.forEach(function (i) {
            return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
          });
        }),
        (e.isInViewport = function (r, i, s) {
          var a = (zt(r) ? Et(r) : r).getBoundingClientRect(),
            o = a[s ? yr : _r] * i || 0;
          return s
            ? a.right - o > 0 && a.left + o < J.innerWidth
            : a.bottom - o > 0 && a.top + o < J.innerHeight;
        }),
        (e.positionInViewport = function (r, i, s) {
          zt(r) && (r = Et(r));
          var a = r.getBoundingClientRect(),
            o = a[s ? yr : _r],
            l =
              i == null
                ? o / 2
                : i in Xs
                ? Xs[i] * o
                : ~i.indexOf("%")
                ? (parseFloat(i) * o) / 100
                : parseFloat(i) || 0;
          return s ? (a.left + l) / J.innerWidth : (a.top + l) / J.innerHeight;
        }),
        (e.killAll = function (r) {
          if (
            (Q.slice(0).forEach(function (s) {
              return s.vars.id !== "ScrollSmoother" && s.kill();
            }),
            r !== !0)
          ) {
            var i = br.killAll || [];
            (br = {}),
              i.forEach(function (s) {
                return s();
              });
          }
        }),
        e
      );
    })();
  (X.version = "3.13.0"),
    (X.saveStyles = function (e) {
      return e
        ? Hi(e).forEach(function (t) {
            if (t && t.style) {
              var n = Rt.indexOf(t);
              n >= 0 && Rt.splice(n, 5),
                Rt.push(
                  t,
                  t.style.cssText,
                  t.getBBox && t.getAttribute("transform"),
                  q.core.getCache(t),
                  xo()
                );
            }
          })
        : Rt;
    }),
    (X.revert = function (e, t) {
      return Do(!e, t);
    }),
    (X.create = function (e, t) {
      return new X(e, t);
    }),
    (X.refresh = function (e) {
      return e ? Zi(!0) : (Jr || X.register()) && Tr(!0);
    }),
    (X.update = function (e) {
      return ++Z.cache && Cn(e === !0 ? 2 : 0);
    }),
    (X.clearScrollMemory = pu),
    (X.maxScroll = function (e, t) {
      return fn(e, t ? pt : Re);
    }),
    (X.getScrollFunc = function (e, t) {
      return Xn(Et(e), t ? pt : Re);
    }),
    (X.getById = function (e) {
      return Ao[e];
    }),
    (X.getAll = function () {
      return Q.filter(function (e) {
        return e.vars.id !== "ScrollSmoother";
      });
    }),
    (X.isScrolling = function () {
      return !!Yt;
    }),
    (X.snapDirectional = Oo),
    (X.addEventListener = function (e, t) {
      var n = br[e] || (br[e] = []);
      ~n.indexOf(t) || n.push(t);
    }),
    (X.removeEventListener = function (e, t) {
      var n = br[e],
        r = n && n.indexOf(t);
      r >= 0 && n.splice(r, 1);
    }),
    (X.batch = function (e, t) {
      var n = [],
        r = {},
        i = t.interval || 0.016,
        s = t.batchMax || 1e9,
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
      for (o in t)
        r[o] =
          o.substr(0, 2) === "on" && at(t[o]) && o !== "onRefreshInit"
            ? a(o, t[o])
            : t[o];
      return (
        at(s) &&
          ((s = s()),
          Ve(X, "refresh", function () {
            return (s = t.batchMax());
          })),
        Hi(e).forEach(function (l) {
          var c = {};
          for (o in r) c[o] = r[o];
          (c.trigger = l), n.push(X.create(c));
        }),
        n
      );
    });
  var Su = function (t, n, r, i) {
      return (
        n > i ? t(i) : n < 0 && t(0),
        r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
      );
    },
    No = function e(t, n) {
      n === !0
        ? t.style.removeProperty("touch-action")
        : (t.style.touchAction =
            n === !0
              ? "auto"
              : n
              ? "pan-" + n + (Ce.isTouch ? " pinch-zoom" : "")
              : "none"),
        t === It && e(oe, n);
    },
    ta = { auto: 1, scroll: 1 },
    Wm = function (t) {
      var n = t.event,
        r = t.target,
        i = t.axis,
        s = (n.changedTouches ? n.changedTouches[0] : n).target,
        a = s._gsap || q.core.getCache(s),
        o = st(),
        l;
      if (!a._isScrollT || o - a._isScrollT > 2e3) {
        for (
          ;
          s &&
          s !== oe &&
          ((s.scrollHeight <= s.clientHeight &&
            s.scrollWidth <= s.clientWidth) ||
            !(ta[(l = Gt(s)).overflowY] || ta[l.overflowX]));

        )
          s = s.parentNode;
        (a._isScroll =
          s &&
          s !== r &&
          !gr(s) &&
          (ta[(l = Gt(s)).overflowY] || ta[l.overflowX])),
          (a._isScrollT = o);
      }
      (a._isScroll || i === "x") && (n.stopPropagation(), (n._gsapAllow = !0));
    },
    Tu = function (t, n, r, i) {
      return Ce.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: n,
        onWheel: (i = i && Wm),
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function () {
          return r && Ve(he, Ce.eventTypes[0], wu, !1, !0);
        },
        onDisable: function () {
          return We(he, Ce.eventTypes[0], wu, !0);
        },
      });
    },
    Ym = /(input|label|select|textarea)/i,
    Eu,
    wu = function (t) {
      var n = Ym.test(t.target.tagName);
      (n || Eu) && ((t._gsapAllow = !0), (Eu = n));
    },
    Xm = function (t) {
      vr(t) || (t = {}),
        (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
        t.type || (t.type = "wheel,touch"),
        (t.debounce = !!t.debounce),
        (t.id = t.id || "normalizer");
      var n = t,
        r = n.normalizeScrollX,
        i = n.momentum,
        s = n.allowNestedScroll,
        a = n.onRelease,
        o,
        l,
        c = Et(t.target) || It,
        u = q.core.globals().ScrollSmoother,
        f = u && u.get(),
        d =
          Gn &&
          ((t.content && Et(t.content)) ||
            (f && t.content !== !1 && !f.smooth() && f.content())),
        h = Xn(c, Re),
        m = Xn(c, pt),
        p = 1,
        g =
          (Ce.isTouch && J.visualViewport
            ? J.visualViewport.scale * J.visualViewport.width
            : J.outerWidth) / J.innerWidth,
        y = 0,
        v = at(i)
          ? function () {
              return i(o);
            }
          : function () {
              return i || 2.8;
            },
        _,
        x,
        S = Tu(c, t.type, !0, s),
        C = function () {
          return (x = !1);
        },
        w = un,
        P = un,
        A = function () {
          (l = fn(c, Re)),
            (P = qi(Gn ? 1 : 0, l)),
            r && (w = qi(0, fn(c, pt))),
            (_ = Sr);
        },
        E = function () {
          (d._gsap.y = Wi(parseFloat(d._gsap.y) + h.offset) + "px"),
            (d.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(d._gsap.y) +
              ", 0, 1)"),
            (h.offset = h.cacheID = 0);
        },
        $ = function () {
          if (x) {
            requestAnimationFrame(C);
            var I = Wi(o.deltaY / 2),
              R = P(h.v - I);
            if (d && R !== h.v + h.offset) {
              h.offset = R - h.v;
              var M = Wi((parseFloat(d && d._gsap.y) || 0) - h.offset);
              (d.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                M +
                ", 0, 1)"),
                (d._gsap.y = M + "px"),
                (h.cacheID = Z.cache),
                Cn();
            }
            return !0;
          }
          h.offset && E(), (x = !0);
        },
        b,
        T,
        O,
        D,
        k = function () {
          A(),
            b.isActive() &&
              b.vars.scrollY > l &&
              (h() > l ? b.progress(1) && h(l) : b.resetTo("scrollY", l));
        };
      return (
        d && q.set(d, { y: "+=0" }),
        (t.ignoreCheck = function (L) {
          return (
            (Gn && L.type === "touchmove" && $()) ||
            (p > 1.05 && L.type !== "touchstart") ||
            o.isGesturing ||
            (L.touches && L.touches.length > 1)
          );
        }),
        (t.onPress = function () {
          x = !1;
          var L = p;
          (p = Wi(((J.visualViewport && J.visualViewport.scale) || 1) / g)),
            b.pause(),
            L !== p && No(c, p > 1.01 ? !0 : r ? !1 : "x"),
            (T = m()),
            (O = h()),
            A(),
            (_ = Sr);
        }),
        (t.onRelease = t.onGestureStart =
          function (L, I) {
            if ((h.offset && E(), !I)) D.restart(!0);
            else {
              Z.cache++;
              var R = v(),
                M,
                V;
              r &&
                ((M = m()),
                (V = M + (R * 0.05 * -L.velocityX) / 0.227),
                (R *= Su(m, M, V, fn(c, pt))),
                (b.vars.scrollX = w(V))),
                (M = h()),
                (V = M + (R * 0.05 * -L.velocityY) / 0.227),
                (R *= Su(h, M, V, fn(c, Re))),
                (b.vars.scrollY = P(V)),
                b.invalidate().duration(R).play(0.01),
                ((Gn && b.vars.scrollY >= l) || M >= l - 1) &&
                  q.to({}, { onUpdate: k, duration: R });
            }
            a && a(L);
          }),
        (t.onWheel = function () {
          b._ts && b.pause(), st() - y > 1e3 && ((_ = 0), (y = st()));
        }),
        (t.onChange = function (L, I, R, M, V) {
          if (
            (Sr !== _ && A(),
            I && r && m(w(M[2] === I ? T + (L.startX - L.x) : m() + I - M[1])),
            R)
          ) {
            h.offset && E();
            var K = V[2] === R,
              se = K ? O + L.startY - L.y : h() + R - V[1],
              le = P(se);
            K && se !== le && (O += le - se), h(le);
          }
          (R || I) && Cn();
        }),
        (t.onEnable = function () {
          No(c, r ? !1 : "x"),
            X.addEventListener("refresh", k),
            Ve(J, "resize", k),
            h.smooth &&
              ((h.target.style.scrollBehavior = "auto"),
              (h.smooth = m.smooth = !1)),
            S.enable();
        }),
        (t.onDisable = function () {
          No(c, !0),
            We(J, "resize", k),
            X.removeEventListener("refresh", k),
            S.kill();
        }),
        (t.lockAxis = t.lockAxis !== !1),
        (o = new Ce(t)),
        (o.iOS = Gn),
        Gn && !h() && h(1),
        Gn && q.ticker.add(un),
        (D = o._dc),
        (b = q.to(o, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: r ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: bu(h, h(), function () {
              return b.pause();
            }),
          },
          onUpdate: Cn,
          onComplete: D.vars.onComplete,
        })),
        o
      );
    };
  (X.sort = function (e) {
    if (at(e)) return Q.sort(e);
    var t = J.pageYOffset || 0;
    return (
      X.getAll().forEach(function (n) {
        return (n._sortY = n.trigger
          ? t + n.trigger.getBoundingClientRect().top
          : n.start + J.innerHeight);
      }),
      Q.sort(
        e ||
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
    (X.observe = function (e) {
      return new Ce(e);
    }),
    (X.normalizeScroll = function (e) {
      if (typeof e == "undefined") return gt;
      if (e === !0 && gt) return gt.enable();
      if (e === !1) {
        gt && gt.kill(), (gt = e);
        return;
      }
      var t = e instanceof Ce ? e : Xm(e);
      return (
        gt && gt.target === t.target && gt.kill(), gr(t.target) && (gt = t), t
      );
    }),
    (X.core = {
      _getVelocityProp: go,
      _inputObserver: Tu,
      _scrollers: Z,
      _proxies: cn,
      bridge: {
        ss: function () {
          Yt || xr("scrollStart"), (Yt = st());
        },
        ref: function () {
          return it;
        },
      },
    }),
    ru() && q.registerPlugin(X),
    (function () {
      function e() {
        for (var r = arguments.length, i = 0; i < r; i++) {
          var s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          s.nodeType === 1 || s.nodeType === 11
            ? this.appendChild(s)
            : this.appendChild(document.createTextNode(String(s)));
        }
      }
      function t() {
        for (; this.lastChild; ) this.removeChild(this.lastChild);
        arguments.length && this.append.apply(this, arguments);
      }
      function n() {
        for (
          var r = this.parentNode,
            i = arguments.length,
            s = new Array(i),
            a = 0;
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
          ((Element.prototype.append = e),
          (DocumentFragment.prototype.append = e)),
        Element.prototype.replaceChildren ||
          ((Element.prototype.replaceChildren = t),
          (DocumentFragment.prototype.replaceChildren = t)),
        Element.prototype.replaceWith ||
          ((Element.prototype.replaceWith = n),
          (DocumentFragment.prototype.replaceWith = n)));
    })();
  function Gm(e, t) {
    return Object.getOwnPropertyNames(Object(e)).reduce(function (n, r) {
      var i = Object.getOwnPropertyDescriptor(Object(e), r),
        s = Object.getOwnPropertyDescriptor(Object(t), r);
      return Object.defineProperty(n, r, s || i);
    }, {});
  }
  var jm = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: !1,
    tagName: "div",
  };
  Gm(jm, {}), F.registerPlugin(X), F.registerPlugin(X);
  const Um = () => {
      X.getAll().forEach((r) => {
        r.vars &&
          r.vars.trigger &&
          r.vars.trigger.hasAttribute &&
          r.vars.trigger.hasAttribute("split-text") &&
          r.kill(!0);
      });
      const e = {
          duration: 1.4,
          ease: "power2.out",
          stagger: 0.1,
          start: "top 80%",
          markers: !1,
        },
        t = document.querySelectorAll("[motion]"),
        n = {};
      t.forEach((r) => {
        const i = r.getAttribute("motion"),
          s = r.getAttribute("motion-group"),
          a = r.getAttribute("motion-duration")
            ? parseFloat(r.getAttribute("motion-duration"))
            : e.duration,
          o = r.getAttribute("motion-delay")
            ? parseFloat(r.getAttribute("motion-delay"))
            : 0,
          l = r.getAttribute("motion-ease") || e.ease,
          c = r.getAttribute("motion-start") || e.start;
        i === "fade"
          ? F.set(r, { opacity: 0 })
          : i === "move-up" && F.set(r, { opacity: 0, y: 50 }),
          s
            ? (n[s] || (n[s] = []),
              n[s].push({
                element: r,
                motionType: i,
                duration: a,
                delay: o,
                ease: l,
              }))
            : Km(r, i, a, o, l, c);
      }),
        Object.keys(n).forEach((r) => {
          const i = n[r];
          if (i.length > 0) {
            const s = i[0],
              a = s.element.getAttribute("motion-stagger")
                ? parseFloat(s.element.getAttribute("motion-stagger"))
                : e.stagger,
              o = s.element.getAttribute("motion-start") || e.start,
              l = F.timeline({
                scrollTrigger: {
                  trigger: s.element.parentElement,
                  start: o,
                  toggleActions: "play none none reverse",
                  markers: e.markers,
                },
              }),
              c = i
                .filter((f) => f.motionType === "fade")
                .map((f) => f.element),
              u = i
                .filter((f) => f.motionType === "move-up")
                .map((f) => f.element);
            c.length > 0 &&
              l.to(
                c,
                {
                  opacity: 1,
                  duration: s.duration,
                  stagger: a,
                  ease: s.ease,
                  delay: s.delay,
                },
                0
              ),
              u.length > 0 &&
                l.to(
                  u,
                  {
                    opacity: 1,
                    y: 0,
                    duration: s.duration,
                    stagger: a,
                    ease: s.ease,
                    delay: s.delay,
                  },
                  0
                );
          }
        });
    },
    Km = (e, t, n, r, i, s) => {
      const a = F.timeline({
        scrollTrigger: {
          trigger: e,
          start: s,
          toggleActions: "play none none reverse",
          markers: !1,
        },
      });
      t === "fade"
        ? a.to(e, { opacity: 1, duration: n, delay: r, ease: i })
        : t === "move-up" &&
          a.to(e, { opacity: 1, y: 0, duration: n, delay: r, ease: i });
    },
    Er = () => {
      Um();
    };
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let es,
    ai,
    Fo,
    Qm = () => Fo || Le.register(window.gsap),
    Cu = typeof Intl != "undefined" ? new Intl.Segmenter() : 0,
    na = (e) =>
      typeof e == "string"
        ? na(document.querySelectorAll(e))
        : "length" in e
        ? Array.from(e)
        : [e],
    Pu = (e) => na(e).filter((t) => t instanceof HTMLElement),
    Ho = [],
    qo = function () {},
    Zm = /\s+/g,
    ku = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    Mu = { left: 0, top: 0, width: 0, height: 0 },
    $u = (e, t) => {
      if (t) {
        let n = new Set(e.join("").match(t) || Ho),
          r = e.length,
          i,
          s,
          a,
          o;
        if (n.size)
          for (; --r > -1; ) {
            s = e[r];
            for (a of n)
              if (a.startsWith(s) && a.length > s.length) {
                for (
                  i = 0, o = s;
                  a.startsWith((o += e[r + ++i])) && o.length < a.length;

                );
                if (i && o.length === a.length) {
                  (e[r] = a), e.splice(r + 1, i);
                  break;
                }
              }
          }
      }
      return e;
    },
    Ou = (e) =>
      window.getComputedStyle(e).display === "inline" &&
      (e.style.display = "inline-block"),
    oi = (e, t, n) =>
      t.insertBefore(typeof e == "string" ? document.createTextNode(e) : e, n),
    Bo = (e, t, n) => {
      let r = t[e + "sClass"] || "",
        { tag: i = "div", aria: s = "auto", propIndex: a = !1 } = t,
        o = e === "line" ? "block" : "inline-block",
        l = r.indexOf("++") > -1,
        c = (u) => {
          let f = document.createElement(i),
            d = n.length + 1;
          return (
            r && (f.className = r + (l ? " " + r + d : "")),
            a && f.style.setProperty("--" + e, d + ""),
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
    Jm = (e, t, n, r) => {
      let i = Bo("line", n, r),
        s = window.getComputedStyle(e).textAlign || "left";
      return (a, o) => {
        let l = i("");
        for (l.style.textAlign = s, e.insertBefore(l, t[a]); a < o; a++)
          l.appendChild(t[a]);
        l.normalize();
      };
    },
    Au = (e, t, n, r, i, s, a, o, l, c) => {
      var u;
      let f = Array.from(e.childNodes),
        d = 0,
        { wordDelimiter: h, reduceWhiteSpace: m = !0, prepareText: p } = t,
        g = e.getBoundingClientRect(),
        y = g,
        v =
          !m && window.getComputedStyle(e).whiteSpace.substring(0, 3) === "pre",
        _ = 0,
        x = n.collection,
        S,
        C,
        w,
        P,
        A,
        E,
        $,
        b,
        T,
        O,
        D,
        k,
        L,
        I,
        R,
        M,
        V,
        K;
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
            R = P.textContent || "",
              m
                ? (R = R.replace(Zm, " "))
                : v &&
                  (R = R.replace(
                    /\n/g,
                    C +
                      `
`
                  )),
              p && (R = p(R, e)),
              P.textContent = R,
              A = C || w ? R.split(w || C) : R.match(o) || Ho,
              V = A[A.length - 1],
              b = S ? V.slice(-1) === " " : !V,
              V || A.pop(),
              y = g,
              $ = S ? A[0].charAt(0) === " " : !A[0],
              $ && oi(" ", e, P),
              A[0] || A.shift(),
              $u(A, l),
              (s && c) || (P.textContent = ""),
              T = 1;
            T <= A.length;
            T++
          )
            if (
              ((M = A[T - 1]),
              !m &&
                v &&
                M.charAt(0) ===
                  `
` &&
                ((u = P.previousSibling) == null || u.remove(),
                oi(document.createElement("br"), e, P),
                (M = M.slice(1))),
              !m && M === "")
            )
              oi(C, e, P);
            else if (M === " ") e.insertBefore(document.createTextNode(" "), P);
            else {
              if (
                (S && M.charAt(0) === " " && oi(" ", e, P),
                _ && T === 1 && !$ && x.indexOf(_.parentNode) > -1
                  ? ((E = x[x.length - 1]),
                    E.appendChild(document.createTextNode(r ? "" : M)))
                  : ((E = n(r ? "" : M)),
                    oi(E, e, P),
                    _ && T === 1 && !$ && E.insertBefore(_, E.firstChild)),
                r)
              )
                for (
                  D = Cu
                    ? $u(
                        [...Cu.segment(M)].map((se) => se.segment),
                        l
                      )
                    : M.match(o) || Ho,
                    K = 0;
                  K < D.length;
                  K++
                )
                  E.appendChild(
                    D[K] === " " ? document.createTextNode(" ") : r(D[K])
                  );
              if (s && c) {
                if (
                  ((R = P.textContent = R.substring(M.length + 1, R.length)),
                  (O = E.getBoundingClientRect()),
                  O.top > y.top && O.left <= y.left)
                ) {
                  for (k = e.cloneNode(), L = e.childNodes[0]; L && L !== E; )
                    (I = L), (L = L.nextSibling), k.appendChild(I);
                  e.parentNode.insertBefore(k, e), i && Ou(k);
                }
                y = O;
              }
              (T < A.length || b) &&
                oi(
                  T >= A.length ? " " : S && M.slice(-1) === " " ? " " + C : C,
                  e,
                  P
                );
            }
          e.removeChild(P), (_ = 0);
        } else
          P.nodeType === 1 &&
            (a && a.indexOf(P) > -1
              ? (x.indexOf(P.previousSibling) > -1 &&
                  x[x.length - 1].appendChild(P),
                (_ = P))
              : (Au(P, t, n, r, i, s, a, o, l, !0), (_ = 0)),
            i && Ou(P));
    };
  const Lu = class df {
    constructor(t, n) {
      (this.isSplit = !1),
        Qm(),
        (this.elements = Pu(t)),
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
        qo(this),
        this.split(n);
    }
    split(t) {
      this.isSplit && this.revert(), (this.vars = t = t || this.vars || {});
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
        p = m ? new RegExp(m.source + "|" + ku.source, "gu") : ku,
        g = !!t.ignore && Pu(t.ignore),
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
              r === "auto"
                ? S.setAttribute("aria-label", (S.textContent || "").trim())
                : r === "hidden" && S.setAttribute("aria-hidden", "true");
            let w = [],
              P = [],
              A = [],
              E = f ? Bo("char", t, w) : null,
              $ = Bo("word", t, P),
              b,
              T,
              O,
              D;
            if ((Au(S, t, $, E, h, i && (u || h), g, p, m, !1), u)) {
              let k = na(S.childNodes),
                L = Jm(S, k, t, A),
                I,
                R = [],
                M = 0,
                V = k.map((se) =>
                  se.nodeType === 1 ? se.getBoundingClientRect() : Mu
                ),
                K = Mu;
              for (b = 0; b < k.length; b++)
                (I = k[b]),
                  I.nodeType === 1 &&
                    (I.nodeName === "BR"
                      ? (R.push(I), L(M, b + 1), (M = b + 1), (K = V[M]))
                      : (b &&
                          V[b].top > K.top &&
                          V[b].left <= K.left &&
                          (L(M, b), (M = b)),
                        (K = V[b])));
              M < b && L(M, b),
                R.forEach((se) => {
                  var le;
                  return (le = se.parentNode) == null
                    ? void 0
                    : le.removeChild(se);
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
                  (D = T.nextSibling),
                    D &&
                      D.nodeType === 3 &&
                      ((D.textContent =
                        (T.textContent || "") + (D.textContent || "")),
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
        ai &&
          (o
            ? ai.addEventListener("loadingdone", this._split)
            : ai.status === "loading" &&
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
      var t, n;
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
        ai == null || ai.removeEventListener("loadingdone", this._split),
        i && ((this._data.animTime = i.totalTime()), i.revert()),
        (n = (t = this.vars).onRevert) == null || n.call(t, this),
        this
      );
    }
    static create(t, n) {
      return new df(t, n);
    }
    static register(t) {
      (es = es || t || window.gsap),
        es && ((na = es.utils.toArray), (qo = es.core.context || qo)),
        !Fo && window.innerWidth > 0 && ((ai = document.fonts), (Fo = !0));
    }
  };
  Lu.version = "3.13.0";
  let Le = Lu;
  F.registerPlugin(Le);
  const eg = (e) => {
    const t = document.querySelectorAll("[page-load='component']"),
      n = document.querySelectorAll("[page-load='wrap']"),
      r = document.querySelectorAll("[page-load='gradient']"),
      i = document.querySelectorAll("[page-load='text']"),
      s = new Le(i, { type: "lines", linesClass: "pg-load-text-line" });
    s.lines.forEach((o) => {
      const l = document.createElement("div");
      (l.style.overflow = "clip"),
        (l.style.position = "relative"),
        o.parentNode.insertBefore(l, o),
        l.appendChild(o);
    });
    const a = F.timeline();
    return (
      F.set(r, { opacity: 0 }),
      F.set(n, { opacity: 0 }),
      F.set(s.lines, { opacity: 0, yPercent: 100 }),
      a.to(r, { opacity: 1, duration: 2, ease: "power1.out" }),
      a.to(n, { opacity: 1, duration: 1, ease: "power2.inOut" }, "<"),
      a.to(
        s.lines,
        {
          opacity: 1,
          duration: 1.6,
          stagger: 0.2,
          yPercent: 0,
          ease: "expo.inOut",
        },
        "-=1.4"
      ),
      a.to(s.lines, {
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        yPercent: -100,
        ease: "expo.inOut",
        delay: 0.8,
      }),
      a.to(
        t,
        {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 1.6,
          ease: "expo.inOut",
          onComplete: () => {
            F.set(t, { pointerEvents: "none" });
          },
        },
        "-=0.7"
      ),
      a
    );
  };
  F.registerPlugin(Le);
  const tg = (e) => {
      const t = document.querySelector("[home-hero='text']"),
        n = document.querySelector("[home-hero='btn']"),
        r = document.querySelector("[home-hero='visual']");
      new Le(t, {
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
      const s = t.querySelectorAll("span");
      s.length &&
        s.forEach((o) => {
          const l = document.createElement("div");
          (l.style.overflow = "clip"),
            o.parentNode.insertBefore(l, o),
            l.appendChild(o);
        });
      const a = F.timeline();
      return (
        F.set(".move-text", { opacity: 0, yPercent: 100 }),
        F.set(n, { opacity: 0 }),
        F.set(r, { opacity: 0 }),
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
    wr = (e) => {
      const t = document.querySelectorAll("[nav-load='component']"),
        n = document.querySelectorAll("[main-nav='brand']"),
        r = document.querySelectorAll("[nav-link='wrap']");
      F.set(t, { opacity: 0 }),
        F.set(n, { opacity: 0 }),
        F.set(r, { opacity: 0, yPercent: -100 });
      const i = F.timeline();
      return (
        i.to(t, { opacity: 1, duration: 1, ease: "expo.inOut" }),
        i.to(n, { opacity: 1, duration: 1, ease: "power1.out" }, "-=0.8"),
        i.to(
          r,
          { opacity: 1, yPercent: 0, duration: 0.6, stagger: 0.06 },
          "-=0.8"
        ),
        i
      );
    },
    Du = () => {
      console.log("homeInit"), If(), hp(), Er();
      const e = eg();
      e.add(() => wr(), "-=0.8"), e.add(() => tg(), "-=0.8");
    },
    Iu = () => {
      const e = document.querySelector(".swiper[review-slider='component']");
      e &&
        new ut(e, {
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
              const t = Array.from(this.slides).filter(
                  (r) => !r.classList.contains("swiper-slide-duplicate")
                ).length,
                n = this.realIndex + 1;
              (document.querySelector("[review-slider-count]").textContent = t),
                (document.querySelector("[review-slider-current]").textContent =
                  n);
            },
            slideChange: function () {
              const t = this.realIndex + 1;
              document.querySelector("[review-slider-current]").textContent = t;
            },
          },
        });
    };
  F.registerPlugin(X);
  const ng = () => {
      const e = document.querySelector("[impact-slide='main']"),
        t = e.querySelectorAll("[impact-slide='component']");
      if (!e || !t.length) return;
      t.forEach((r, i) => {
        F.set(r, {
          clipPath: i === 0 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
        });
      });
      const n = F.timeline({
        scrollTrigger: {
          trigger: e,
          start: "top top",
          end: `+=${t.length * 100}%`,
          scrub: !0,
          pin: !1,
          markers: !1,
        },
      });
      t.forEach((r, i) => {
        i !== 0 &&
          n.to(
            r,
            { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.inOut" },
            "+=0.33"
          );
      });
    },
    rg = () => {
      ng();
    },
    ig = () => {
      document.querySelectorAll("[image-index='wrap']").forEach((e) => {
        const t = e.querySelector("[image-index='large']"),
          n = e.querySelector("[image-index='small']"),
          r = (l, c) => {
            const u = [];
            let f = l;
            for (; f && f !== c; )
              (f = f.parentElement), f && f !== c && u.push(f);
            return u;
          },
          i = r(t, e),
          s = r(n, e),
          a = (l, c, u) => {
            (l.style.zIndex = u),
              c.forEach((f) => {
                f.style.zIndex = u;
              });
          };
        a(t, i, "2"), a(n, s, "1");
        const o = (l, c, u, f) => {
          a(l, u, "2"), a(c, f, "1");
        };
        t.addEventListener("click", () => o(t, n, i, s)),
          n.addEventListener("click", () => o(n, t, s, i));
      });
    },
    zu = () => {
      ig();
    },
    sg = () => {
      const e = document.querySelector(".swiper[about-slider='component']");
      e &&
        new ut(e, {
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
              const t = Array.from(this.slides).filter(
                  (r) => !r.classList.contains("swiper-slide-duplicate")
                ).length,
                n = this.realIndex + 1;
              (document.querySelector("[data-slider-count]").textContent = t),
                (document.querySelector("[data-slider-current]").textContent =
                  n);
            },
            slideChange: function () {
              const t = this.realIndex + 1;
              document.querySelector("[data-slider-current]").textContent = t;
            },
          },
        });
    },
    li = (e) => {
      const t = document.querySelector(".page_overlay"),
        n = document.querySelector("[page-overlay='text-wrap']"),
        r = F.timeline();
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
          t,
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
  F.registerPlugin(Le);
  const ag = (e) => {
      const t = document.querySelector("[about-hero='text']"),
        n = document.querySelectorAll("[about-hero='visual']");
      new Le(t, {
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
      const i = t.querySelectorAll("span");
      i.length &&
        i.forEach((a) => {
          const o = document.createElement("div");
          (o.style.overflow = "clip"),
            a.parentNode.insertBefore(o, a),
            o.appendChild(a);
        });
      const s = F.timeline();
      return (
        F.set(".move-text", { opacity: 0, yPercent: 100 }),
        F.set(n, { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }),
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
    og = () => {
      sg(), Iu(), rg(), zu(), Er();
      const e = li();
      e.add(() => wr(), "-=0.8"), e.add(() => ag(), "-=0.8");
    };
  var lg = "1.3.1";
  function Ru(e, t, n) {
    return Math.max(e, Math.min(t, n));
  }
  function cg(e, t, n) {
    return (1 - n) * e + n * t;
  }
  function ug(e, t, n, r) {
    return cg(e, t, 1 - Math.exp(-n * r));
  }
  function fg(e, t) {
    return ((e % t) + t) % t;
  }
  var dg = class {
    constructor() {
      B(this, "isRunning", !1);
      B(this, "value", 0);
      B(this, "from", 0);
      B(this, "to", 0);
      B(this, "currentTime", 0);
      B(this, "lerp");
      B(this, "duration");
      B(this, "easing");
      B(this, "onUpdate");
    }
    advance(e) {
      var n;
      if (!this.isRunning) return;
      let t = !1;
      if (this.duration && this.easing) {
        this.currentTime += e;
        const r = Ru(0, this.currentTime / this.duration, 1);
        t = r >= 1;
        const i = t ? 1 : this.easing(r);
        this.value = this.from + (this.to - this.from) * i;
      } else
        this.lerp
          ? ((this.value = ug(this.value, this.to, this.lerp * 60, e)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (t = !0)))
          : ((this.value = this.to), (t = !0));
      t && this.stop(),
        (n = this.onUpdate) == null || n.call(this, this.value, t);
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(e, t, { lerp: n, duration: r, easing: i, onStart: s, onUpdate: a }) {
      (this.from = this.value = e),
        (this.to = t),
        (this.lerp = n),
        (this.duration = r),
        (this.easing = i),
        (this.currentTime = 0),
        (this.isRunning = !0),
        s == null || s(),
        (this.onUpdate = a);
    }
  };
  function hg(e, t) {
    let n;
    return function (...r) {
      let i = this;
      clearTimeout(n),
        (n = setTimeout(() => {
          (n = void 0), e.apply(i, r);
        }, t));
    };
  }
  var pg = class {
      constructor(e, t, { autoResize: n = !0, debounce: r = 250 } = {}) {
        B(this, "width", 0);
        B(this, "height", 0);
        B(this, "scrollHeight", 0);
        B(this, "scrollWidth", 0);
        B(this, "debouncedResize");
        B(this, "wrapperResizeObserver");
        B(this, "contentResizeObserver");
        B(this, "resize", () => {
          this.onWrapperResize(), this.onContentResize();
        });
        B(this, "onWrapperResize", () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        });
        B(this, "onContentResize", () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        });
        (this.wrapper = e),
          (this.content = t),
          n &&
            ((this.debouncedResize = hg(this.resize, r)),
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
        var e, t;
        (e = this.wrapperResizeObserver) == null || e.disconnect(),
          (t = this.contentResizeObserver) == null || t.disconnect(),
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
    Nu = class {
      constructor() {
        B(this, "events", {});
      }
      emit(e, ...t) {
        var r;
        let n = this.events[e] || [];
        for (let i = 0, s = n.length; i < s; i++)
          (r = n[i]) == null || r.call(n, ...t);
      }
      on(e, t) {
        var n;
        return (
          ((n = this.events[e]) != null && n.push(t)) || (this.events[e] = [t]),
          () => {
            var r;
            this.events[e] =
              (r = this.events[e]) == null ? void 0 : r.filter((i) => t !== i);
          }
        );
      }
      off(e, t) {
        var n;
        this.events[e] =
          (n = this.events[e]) == null ? void 0 : n.filter((r) => t !== r);
      }
      destroy() {
        this.events = {};
      }
    },
    Fu = 100 / 6,
    jn = { passive: !1 },
    mg = class {
      constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        B(this, "touchStart", { x: 0, y: 0 });
        B(this, "lastDelta", { x: 0, y: 0 });
        B(this, "window", { width: 0, height: 0 });
        B(this, "emitter", new Nu());
        B(this, "onTouchStart", (e) => {
          const { clientX: t, clientY: n } = e.targetTouches
            ? e.targetTouches[0]
            : e;
          (this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: e });
        });
        B(this, "onTouchMove", (e) => {
          const { clientX: t, clientY: n } = e.targetTouches
              ? e.targetTouches[0]
              : e,
            r = -(t - this.touchStart.x) * this.options.touchMultiplier,
            i = -(n - this.touchStart.y) * this.options.touchMultiplier;
          (this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit("scroll", { deltaX: r, deltaY: i, event: e });
        });
        B(this, "onTouchEnd", (e) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        });
        B(this, "onWheel", (e) => {
          let { deltaX: t, deltaY: n, deltaMode: r } = e;
          const i = r === 1 ? Fu : r === 2 ? this.window.width : 1,
            s = r === 1 ? Fu : r === 2 ? this.window.height : 1;
          (t *= i),
            (n *= s),
            (t *= this.options.wheelMultiplier),
            (n *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: t, deltaY: n, event: e });
        });
        B(this, "onWindowResize", () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        });
        (this.element = e),
          (this.options = t),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, jn),
          this.element.addEventListener("touchstart", this.onTouchStart, jn),
          this.element.addEventListener("touchmove", this.onTouchMove, jn),
          this.element.addEventListener("touchend", this.onTouchEnd, jn);
      }
      on(e, t) {
        return this.emitter.on(e, t);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, jn),
          this.element.removeEventListener("touchstart", this.onTouchStart, jn),
          this.element.removeEventListener("touchmove", this.onTouchMove, jn),
          this.element.removeEventListener("touchend", this.onTouchEnd, jn);
      }
    },
    gg = class {
      constructor({
        wrapper: e = window,
        content: t = document.documentElement,
        eventsTarget: n = e,
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
        allowNestedScroll: C = !1,
        __experimental__naiveDimensions: w = !1,
      } = {}) {
        B(this, "_isScrolling", !1);
        B(this, "_isStopped", !1);
        B(this, "_isLocked", !1);
        B(this, "_preventNextNativeScrollEvent", !1);
        B(this, "_resetVelocityTimeout", null);
        B(this, "__rafID", null);
        B(this, "isTouching");
        B(this, "time", 0);
        B(this, "userData", {});
        B(this, "lastVelocity", 0);
        B(this, "velocity", 0);
        B(this, "direction", 0);
        B(this, "options");
        B(this, "targetScroll");
        B(this, "animatedScroll");
        B(this, "animate", new dg());
        B(this, "emitter", new Nu());
        B(this, "dimensions");
        B(this, "virtualScroll");
        B(this, "onScrollEnd", (e) => {
          e instanceof CustomEvent ||
            ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
              e.stopPropagation());
        });
        B(this, "dispatchScrollendEvent", () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            })
          );
        });
        B(this, "onTransitionEnd", (e) => {
          if (e.propertyName.includes("overflow")) {
            const t = this.isHorizontal ? "overflow-x" : "overflow-y",
              n = getComputedStyle(this.rootElement)[t];
            ["hidden", "clip"].includes(n) ? this.stop() : this.start();
          }
        });
        B(this, "onClick", (e) => {
          const n = e.composedPath().find((r) => {
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
        B(this, "onPointerDown", (e) => {
          e.button === 1 && this.reset();
        });
        B(this, "onVirtualScroll", (e) => {
          if (
            typeof this.options.virtualScroll == "function" &&
            this.options.virtualScroll(e) === !1
          )
            return;
          const { deltaX: t, deltaY: n, event: r } = e;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: t,
              deltaY: n,
              event: r,
            }),
            r.ctrlKey || r.lenisStopPropagation)
          )
            return;
          const i = r.type.includes("touch"),
            s = r.type.includes("wheel");
          this.isTouching = r.type === "touchstart" || r.type === "touchmove";
          const a = t === 0 && n === 0;
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
            (this.options.gestureOrientation === "horizontal" && t === 0);
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
                    this.checkNestedScroll(g, { deltaX: t, deltaY: n })))
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
            ? (d = Math.abs(n) > Math.abs(t) ? n : t)
            : this.options.gestureOrientation === "horizontal" && (d = t),
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
              ff(
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
        B(this, "onNativeScroll", () => {
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
            const e = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - e),
              (this.direction = Math.sign(this.animatedScroll - e)),
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
        B(this, "raf", (e) => {
          const t = e - (this.time || e);
          (this.time = e),
            this.animate.advance(t * 0.001),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf));
        });
        (window.lenisVersion = lg),
          (!e || e === document.documentElement) && (e = window),
          (this.options = {
            wrapper: e,
            content: t,
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
            allowNestedScroll: C,
            __experimental__naiveDimensions: w,
          }),
          (this.dimensions = new pg(e, t, { autoResize: p })),
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
          (this.virtualScroll = new mg(n, {
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
      on(e, t) {
        return this.emitter.on(e, t);
      }
      off(e, t) {
        return this.emitter.off(e, t);
      }
      setScroll(e) {
        this.isHorizontal
          ? this.options.wrapper.scrollTo({ left: e, behavior: "instant" })
          : this.options.wrapper.scrollTo({ top: e, behavior: "instant" });
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
        e,
        {
          offset: t = 0,
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
          if (typeof e == "string" && ["top", "left", "start"].includes(e))
            e = 0;
          else if (
            typeof e == "string" &&
            ["bottom", "right", "end"].includes(e)
          )
            e = this.limit;
          else {
            let d;
            if (
              (typeof e == "string"
                ? (d = document.querySelector(e))
                : e instanceof HTMLElement &&
                  e != null &&
                  e.nodeType &&
                  (d = e),
              d)
            ) {
              if (this.options.wrapper !== window) {
                const m = this.rootElement.getBoundingClientRect();
                t -= this.isHorizontal ? m.left : m.top;
              }
              const h = d.getBoundingClientRect();
              e = (this.isHorizontal ? h.left : h.top) + this.animatedScroll;
            }
          }
          if (typeof e == "number") {
            if (((e += t), (e = Math.round(e)), this.options.infinite)) {
              if (u) {
                this.targetScroll = this.animatedScroll = this.scroll;
                const d = e - this.animatedScroll;
                d > this.limit / 2
                  ? (e = e - this.limit)
                  : d < -this.limit / 2 && (e = e + this.limit);
              }
            } else e = Ru(0, e, this.limit);
            if (e === this.targetScroll) {
              o == null || o(this), l == null || l(this);
              return;
            }
            if (((this.userData = f != null ? f : {}), n)) {
              (this.animatedScroll = this.targetScroll = e),
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
            u || (this.targetScroll = e),
              this.animate.fromTo(this.animatedScroll, e, {
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
      checkNestedScroll(e, { deltaX: t, deltaY: n }) {
        var S, C;
        const r = Date.now(),
          i = (S = e._lenis) != null ? S : (e._lenis = {});
        let s, a, o, l, c, u, f, d;
        const h = this.options.gestureOrientation;
        if (r - ((C = i.time) != null ? C : 0) > 2e3) {
          i.time = Date.now();
          const w = window.getComputedStyle(e);
          i.computedStyle = w;
          const P = w.overflowX,
            A = w.overflowY;
          if (
            ((s = ["auto", "overlay", "scroll"].includes(P)),
            (a = ["auto", "overlay", "scroll"].includes(A)),
            (i.hasOverflowX = s),
            (i.hasOverflowY = a),
            (!s && !a) ||
              (h === "vertical" && !a) ||
              (h === "horizontal" && !s))
          )
            return !1;
          (c = e.scrollWidth),
            (u = e.scrollHeight),
            (f = e.clientWidth),
            (d = e.clientHeight),
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
          const w = t !== 0,
            P = n !== 0;
          w && s && o && (m = "x"), P && a && l && (m = "y");
        }
        if (!m) return !1;
        let p, g, y, v, _;
        if (m === "x")
          (p = e.scrollLeft), (g = c - f), (y = t), (v = s), (_ = o);
        else if (m === "y")
          (p = e.scrollTop), (g = u - d), (y = n), (v = a), (_ = l);
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
        var t, n;
        const e = this.options.wrapper;
        return this.isHorizontal
          ? (t = e.scrollX) != null
            ? t
            : e.scrollLeft
          : (n = e.scrollY) != null
          ? n
          : e.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? fg(this.animatedScroll, this.limit)
          : this.animatedScroll;
      }
      get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
      }
      get isScrolling() {
        return this._isScrolling;
      }
      set isScrolling(e) {
        this._isScrolling !== e &&
          ((this._isScrolling = e), this.updateClassName());
      }
      get isStopped() {
        return this._isStopped;
      }
      set isStopped(e) {
        this._isStopped !== e &&
          ((this._isStopped = e), this.updateClassName());
      }
      get isLocked() {
        return this._isLocked;
      }
      set isLocked(e) {
        this._isLocked !== e && ((this._isLocked = e), this.updateClassName());
      }
      get isSmooth() {
        return this.isScrolling === "smooth";
      }
      get className() {
        let e = "lenis";
        return (
          this.options.autoToggle && (e += " lenis-autoToggle"),
          this.isStopped && (e += " lenis-stopped"),
          this.isLocked && (e += " lenis-locked"),
          this.isScrolling && (e += " lenis-scrolling"),
          this.isScrolling === "smooth" && (e += " lenis-smooth"),
          e
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
  F.registerPlugin(X);
  let ra;
  const vg = () => {
      (ra = new gg({ autoRaf: !0 })),
        ra.on("scroll", X.update),
        F.ticker.add((e) => {
          ra.raf(e * 1e3);
        }),
        F.ticker.lagSmoothing(0);
    },
    Hu = () => {
      vg();
    },
    ts = () => ra,
    yg = () => {
      const e = document.querySelectorAll("[career-modal='open-trigger']"),
        t = document.querySelectorAll("[career-modal='modal']");
      if (!e || !t) {
        console.error("No open triggers or career modal found");
        return;
      }
      let n = null,
        r = null;
      const i = (s) => {
        if (s.key === "Escape" && n && r) {
          r.restart();
          const a = ts();
          a && a.start();
        }
      };
      document.addEventListener("keydown", i),
        t.forEach((s) => {
          const a = s.getAttribute("career-modal-name"),
            o = s.querySelector("[career-modal='component']"),
            l = s.querySelector("[career-modal='main-info']"),
            c = s.querySelector("[career-modal='sec-info']"),
            u = s.querySelectorAll("[career-modal='close-trigger']");
          if (!o || !l || !c || !u) return;
          F.set(s, {
            opacity: 0,
            pointerEvents: "none",
            visibility: "hidden",
            display: "none",
          }),
            F.set(o, { clipPath: "inset(0% 0% 100% 0%)" }),
            F.set([l, c], { opacity: 0, y: 100, filter: "blur(2px)" });
          const f = F.timeline({ paused: !0 }),
            d = F.timeline({ paused: !0 });
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
          const h = Array.from(e).find(
            (m) => m.getAttribute("career-modal-name") === a
          );
          h &&
            h.addEventListener("click", () => {
              f.restart(), (n = s), (r = d);
              const m = ts();
              m && m.stop();
            }),
            u.forEach((m) => {
              m.addEventListener("click", () => {
                d.restart(), (n = null), (r = null);
                const p = ts();
                p && p.start();
              });
            });
        });
    },
    _g = () => {
      yg();
    },
    bg = () => {
      const e = document.querySelectorAll("[clock='component']"),
        t = () => {
          e.forEach((n) => {
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
            requestAnimationFrame(t);
        };
      t();
    },
    qu = () => {
      bg();
    };
  F.registerPlugin(Le);
  const xg = (e) => {
      const t = document.querySelector("[contact-hero='text']"),
        n = document.querySelector("[contact-hero='visual']"),
        r = document.querySelectorAll("[contact-hero='visual-info']"),
        i = document.querySelectorAll("[contact-hero='cta']");
      new Le(t, {
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
      const a = t.querySelectorAll("span");
      a.length &&
        a.forEach((l) => {
          const c = document.createElement("div");
          (c.style.overflow = "clip"),
            l.parentNode.insertBefore(c, l),
            c.appendChild(l);
        });
      const o = F.timeline();
      return (
        F.set(".move-text", { opacity: 0, yPercent: 100 }),
        F.set(n, { opacity: 0, clipPath: "inset(50% round 16px)" }),
        F.set(r, { opacity: 0, y: 50 }),
        F.set(i, { opacity: 0, yPercent: 50 }),
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
    Sg = () => {
      qu(), Er();
      const e = li();
      e.add(() => wr(), "-=0.8"), e.add(() => xg(), "-=0.8");
    };
  F.registerPlugin(Le);
  const Tg = (e) => {
      const t = document.querySelector("[career-hero='text']"),
        n = document.querySelector("[career-hero='btn']"),
        r = document.querySelector("[career-hero='visual']");
      new Le(t, {
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
      const s = t.querySelectorAll("span");
      s.length &&
        s.forEach((o) => {
          const l = document.createElement("div");
          (l.style.overflow = "clip"),
            o.parentNode.insertBefore(l, o),
            l.appendChild(o);
        });
      const a = F.timeline();
      return (
        F.set(".move-text", { opacity: 0, yPercent: 100 }),
        F.set(n, { opacity: 0 }),
        F.set(r, { opacity: 0 }),
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
    Eg = () => {
      zu(), _g(), qu(), Er();
      const e = li();
      e.add(() => wr(), "-=0.8"), e.add(() => Tg(), "-=0.8");
    };
  F.registerPlugin(Le);
  const wg = (e) => {
      const t = document.querySelector("[work-hero='text']"),
        n = document.querySelector("[work-hero='filter-wrap']"),
        r = document.querySelectorAll("[work-hero='project']");
      new Le(t, {
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
      const s = t.querySelectorAll("span");
      s.length &&
        s.forEach((o) => {
          const l = document.createElement("div");
          (l.style.overflow = "clip"),
            o.parentNode.insertBefore(l, o),
            l.appendChild(o);
        });
      const a = F.timeline();
      return (
        F.set(".move-text", { opacity: 0, yPercent: 100 }),
        F.set(n, { opacity: 0 }),
        F.set(r, { y: 100, opacity: 0 }),
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
    Cg = () => {
      Iu(), Er();
      const e = li();
      e.add(() => wr(), "-=0.8"), e.add(() => wg(), "-=0.8");
    },
    Pg = () => {
      const e = document.querySelector("[service-link='wrap']");
      if (!e) return;
      const t = e.querySelectorAll("[service-link='item']"),
        n = document.querySelectorAll("[service-item]"),
        r = e.querySelector("[service-link='line-wrap']"),
        i = r == null ? void 0 : r.querySelector("[service-link='line']"),
        s = document.querySelector("[hero-gradient='main']"),
        a = document.querySelectorAll("[hero-gradient]");
      if (!t.length || !n.length || !r || !i) return;
      let o = !1,
        l = null,
        c = null;
      const u = new Set(),
        f = () => {
          t.forEach((y) => {
            const v = y.querySelector("[service-link='num']");
            y.setAttribute("service-link-status", "inactive"),
              F.to(y, { opacity: 0.2, duration: 0.3 }),
              F.to(v, { opacity: 0, y: 5, duration: 0.3 });
          }),
            n.forEach((y) => {
              y.setAttribute("service-item-status", "inactive");
            }),
            a.forEach((y) => {
              y.getAttribute("hero-gradient") !== "main" &&
                F.to(y, { opacity: 0, duration: 0.5 });
            }),
            s && F.to(s, { opacity: 1, duration: 0.5 });
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
              F.to(v, { opacity: 1, duration: 0.4 }),
              F.to(S, { opacity: 1, y: 0, duration: 0.4 }),
              _.setAttribute("service-item-status", "active"),
              u.has(y) || (h(_), u.add(y)),
              x &&
                (s && F.to(s, { opacity: 0, duration: 0.5 }),
                F.to(x, { opacity: 1, duration: 0.5 })),
              m(v);
          }
        },
        h = (y) => {
          const v = y.children;
          F.set(v, { opacity: 0, y: 50 }),
            F.to(v, {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.1,
              ease: "power2.out",
            });
        },
        m = (y) => {
          const v = Array.from(t).indexOf(y),
            _ = t.length,
            x = r.offsetHeight,
            S = i.offsetHeight,
            C = x - S,
            w = _ > 1 ? v / (_ - 1) : 0,
            P = C * w;
          F.to(i, { y: P, duration: 0.6, ease: "power2.out" });
        };
      s && F.set(s, { opacity: 1 }),
        a.forEach((y) => {
          y.getAttribute("hero-gradient") !== "main" &&
            F.set(y, { opacity: 0 });
        }),
        n.forEach((y) => {
          F.set(y.children, { opacity: 0, y: 50 });
        }),
        t.forEach((y) => {
          const v = y.getAttribute("item-name");
          y.addEventListener("click", () => {
            v &&
              (l && clearTimeout(l),
              (o = !0),
              d(v),
              ts().scrollTo(document.querySelector(`[service-item='${v}']`), {
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
    kg = () => {
      Pg();
    };
  /*!
   * DrawSVGPlugin 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var dn,
    Vo,
    ia,
    Bu,
    Vu,
    Wu,
    Wo,
    Yu,
    Xu = function () {
      return typeof window != "undefined";
    },
    Gu = function () {
      return dn || (Xu() && (dn = window.gsap) && dn.registerPlugin && dn);
    },
    Mg = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    Yo = {
      rect: ["width", "height"],
      circle: ["r", "r"],
      ellipse: ["rx", "ry"],
      line: ["x2", "y2"],
    },
    Cr = function (t) {
      return Math.round(t * 1e4) / 1e4;
    },
    Pn = function (t) {
      return parseFloat(t) || 0;
    },
    ju = function (t, n) {
      var r = Pn(t);
      return ~t.indexOf("%") ? (r / 100) * n : r;
    },
    sa = function (t, n) {
      return Pn(t.getAttribute(n));
    },
    aa = Math.sqrt,
    Uu = function (t, n, r, i, s, a) {
      return aa(
        Math.pow((Pn(r) - Pn(t)) * s, 2) + Math.pow((Pn(i) - Pn(n)) * a, 2)
      );
    },
    Ku = function (t) {
      return console.warn(t);
    },
    Qu = function (t) {
      return t.getAttribute("vector-effect") === "non-scaling-stroke";
    },
    $g = 1,
    Og = function (t, n, r) {
      var i = t.indexOf(" "),
        s,
        a;
      return (
        i < 0
          ? ((s = r !== void 0 ? r + "" : t), (a = t))
          : ((s = t.substr(0, i)), (a = t.substr(i + 1))),
        (s = ju(s, n)),
        (a = ju(a, n)),
        s > a ? [a, s] : [s, a]
      );
    },
    oa = function (t) {
      if (((t = Vo(t)[0]), !t)) return 0;
      var n = t.tagName.toLowerCase(),
        r = t.style,
        i = 1,
        s = 1,
        a,
        o,
        l,
        c,
        u,
        f,
        d;
      Qu(t) &&
        ((s = t.getScreenCTM()),
        (i = aa(s.a * s.a + s.b * s.b)),
        (s = aa(s.d * s.d + s.c * s.c)));
      try {
        o = t.getBBox();
      } catch (v) {
        Ku(
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
          Yo[n] &&
          ((g = sa(t, Yo[n][0])),
          (y = sa(t, Yo[n][1])),
          n !== "rect" && n !== "line" && ((g *= 2), (y *= 2)),
          n === "line" &&
            ((m = sa(t, "x1")),
            (p = sa(t, "y1")),
            (g = Math.abs(g - m)),
            (y = Math.abs(y - p)))),
        n === "path")
      )
        (c = r.strokeDasharray),
          (r.strokeDasharray = "none"),
          (a = t.getTotalLength() || 0),
          Cr(i) !== Cr(s) &&
            !Wu &&
            (Wu = 1) &&
            Ku(
              "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
            ),
          (a *= (i + s) / 2),
          (r.strokeDasharray = c);
      else if (n === "rect") a = g * 2 * i + y * 2 * s;
      else if (n === "line") a = Uu(m, p, m + g, p + y, i, s);
      else if (n === "polyline" || n === "polygon")
        for (
          l = t.getAttribute("points").match(Mg) || [],
            n === "polygon" && l.push(l[0], l[1]),
            a = 0,
            u = 2;
          u < l.length;
          u += 2
        )
          a += Uu(l[u - 2], l[u - 1], l[u], l[u + 1], i, s) || 0;
      else
        (n === "circle" || n === "ellipse") &&
          ((f = (g / 2) * i),
          (d = (y / 2) * s),
          (a = Math.PI * (3 * (f + d) - aa((3 * f + d) * (f + 3 * d)))));
      return a || 0;
    },
    Zu = function (t, n) {
      if (((t = Vo(t)[0]), !t)) return [0, 0];
      n || (n = oa(t) + 1);
      var r = ia.getComputedStyle(t),
        i = r.strokeDasharray || "",
        s = Pn(r.strokeDashoffset),
        a = i.indexOf(",");
      return (
        a < 0 && (a = i.indexOf(" ")),
        (i = a < 0 ? n : Pn(i.substr(0, a))),
        i > n && (i = n),
        [-s || 0, i - s || 0]
      );
    },
    Ju = function () {
      Xu() &&
        ((ia = window),
        (Vu = dn = Gu()),
        (Vo = dn.utils.toArray),
        (Wo = dn.core.getStyleSaver),
        (Yu = dn.core.reverting || function () {}),
        (Bu = ((ia.navigator || {}).userAgent || "").indexOf("Edge") !== -1));
    },
    ef = {
      version: "3.13.0",
      name: "drawSVG",
      register: function (t) {
        (dn = t), Ju();
      },
      init: function (t, n, r, i, s) {
        if (!t.getBBox) return !1;
        Vu || Ju();
        var a = oa(t),
          o,
          l,
          c;
        return (
          (this.styles =
            Wo && Wo(t, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
          (this.tween = r),
          (this._style = t.style),
          (this._target = t),
          n + "" == "true"
            ? (n = "0 100%")
            : n
            ? (n + "").indexOf(" ") === -1 && (n = "0 " + n)
            : (n = "0 0"),
          (o = Zu(t, a)),
          (l = Og(n, a, o[0])),
          (this._length = Cr(a)),
          (this._dash = Cr(o[1] - o[0])),
          (this._offset = Cr(-o[0])),
          (this._dashPT = this.add(
            this,
            "_dash",
            this._dash,
            Cr(l[1] - l[0]),
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
            Cr(-l[0]),
            0,
            0,
            0,
            0,
            0,
            1
          )),
          Bu &&
            ((c = ia.getComputedStyle(t)),
            c.strokeLinecap !== c.strokeLinejoin &&
              ((l = Pn(c.strokeMiterlimit)),
              this.add(t.style, "strokeMiterlimit", l, l + 0.01))),
          (this._live = Qu(t) || ~(n + "").indexOf("live")),
          (this._nowrap = ~(n + "").indexOf("nowrap")),
          this._props.push("drawSVG"),
          $g
        );
      },
      render: function (t, n) {
        if (n.tween._time || !Yu()) {
          var r = n._pt,
            i = n._style,
            s,
            a,
            o,
            l;
          if (r) {
            for (
              n._live &&
              ((s = oa(n._target)),
              s !== n._length &&
                ((a = s / n._length),
                (n._length = s),
                n._offsetPT && ((n._offsetPT.s *= a), (n._offsetPT.c *= a)),
                n._dashPT
                  ? ((n._dashPT.s *= a), (n._dashPT.c *= a))
                  : (n._dash *= a)));
              r;

            )
              r.r(t, r.d), (r = r._next);
            (o = n._dash || (t && t !== 1 && 1e-4) || 0),
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
      getLength: oa,
      getPosition: Zu,
    };
  Gu() && dn.registerPlugin(ef), F.registerPlugin(Le), F.registerPlugin(ef);
  const Ag = (e) => {
      const t = document.querySelector("[service-hero='text']"),
        n = document.querySelectorAll("[service-hero='btn']"),
        r = document.querySelector("[service-hero='svg']"),
        i = document.querySelector("[service-hero='svg'] path");
      new Le(t, {
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
      const a = t.querySelectorAll("span");
      a.length &&
        a.forEach((l) => {
          const c = document.createElement("div");
          (c.style.overflow = "clip"),
            l.parentNode.insertBefore(c, l),
            c.appendChild(l);
        });
      const o = F.timeline();
      return (
        F.set(".move-text", { opacity: 0, yPercent: 100 }),
        F.set(n, { opacity: 0, yPercent: 20, scale: 0 }),
        F.set(r, { opacity: 0 }),
        F.set(i, { drawSVG: 0 }),
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
    Lg = () => {
      kg(), Er();
      const e = li();
      e.add(() => wr(), "-=0.8"), e.add(() => Ag(), "-=0.8");
    },
    Dg = () => {
      console.log("seoInit");
    };
  F.registerPlugin(Le);
  const Ig = (e) =>
      el(this, null, function* () {
        yield document.fonts.ready;
        const t = document.querySelector("[work-cms-hero='text']"),
          n = document.querySelector("[work-cms-hero='back-btn']"),
          r = document.querySelector("[work-cms-hero='line']"),
          i = document.querySelector("[work-cms-hero='info']"),
          s = document.querySelector("[work-cms-hero='info-title']"),
          a = document.querySelector("[work-cms-hero='info-text']"),
          o = document.querySelector("[work-cms-hero='info-meta']"),
          l = document.querySelectorAll("[work-cms-hero='tag']"),
          c = document.querySelectorAll("[work-cms-hero='visual']"),
          u = document.querySelector("[work-cms-hero='bg'] img"),
          f = new Le(t, {
            type: "chars, lines, words",
            linesClass: "work-cms-hero-text-line",
            mask: "lines",
            tag: "div",
          }),
          d = new Le(s, {
            type: "lines",
            linesClass: "work-cms-info-title-line",
            mask: "lines",
            tag: "div",
          }),
          h = new Le(a, {
            type: "lines",
            linesClass: "work-cms-info-text-line",
            mask: "lines",
            tag: "div",
          }),
          m = new Le(o, {
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
                x.parentNode.insertBefore(S, x),
                S.appendChild(x);
            });
        };
        p(t), p(s), p(a), p(o);
        const g = F.timeline();
        return (
          F.set(f.chars, { opacity: 0, yPercent: 100 }),
          F.set(n, { opacity: 0, yPercent: 100 }),
          F.set(l, {
            opacity: 0,
            y: 50,
            scale: 0.4,
            transformOrigin: "center right",
          }),
          F.set(r, { opacity: 0, scaleX: 0, transformOrigin: "center left" }),
          F.set(i, { opacity: 0, y: 50 }),
          F.set(".move-text-title", { opacity: 0, yPercent: 100 }),
          F.set(".move-text-info", { opacity: 0, yPercent: 100 }),
          F.set(".move-text-meta", { opacity: 0, yPercent: 100 }),
          F.set(c, { y: 100, opacity: 0 }),
          F.set(u, { scale: 1.4 }),
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
    zg = {
      home: Du,
      about: og,
      work: Cg,
      contact: Sg,
      career: Eg,
      "extra-page": Du,
      service: Lg,
      work_cms: () => {
        Er();
        const e = li();
        e.add(() => wr(), "-=0.8"), e.add(() => Ig(), "-=0.8");
      },
      seo: Dg,
    },
    Rg = () => {
      const e = document.querySelector("[page-route]");
      if (!e) {
        console.log("No element with page-route attribute found");
        return;
      }
      const t = e.getAttribute("page-route"),
        n = zg[t];
      n ? n() : console.log(`No specific script for route: ${t}`);
    };
  class Ng {
    constructor() {
      B(this, "move", () => {
        (this.curX += (this.tgX - this.curX) / 20),
          (this.curY += (this.tgY - this.curY) / 20),
          (this.interBubble.style.transform = `translate(${Math.round(
            this.curX
          )}px, ${Math.round(this.curY)}px)`),
          (this._animationFrameId = requestAnimationFrame(this.move));
      });
      B(this, "handleMouseMove", (t) => {
        (this.tgX = t.clientX), (this.tgY = t.clientY);
      });
      (this.interBubble = document.querySelector(".interactive")),
        (this.curX = 0),
        (this.curY = 0),
        (this.tgX = 0),
        (this.tgY = 0),
        (this._animationFrameId = null),
        (this._handleMouseMove = this.handleMouseMove.bind(this)),
        this.init();
    }
    init() {
      window.addEventListener("mousemove", this._handleMouseMove), this.move();
    }
    destroy() {
      window.removeEventListener("mousemove", this._handleMouseMove),
        this._animationFrameId &&
          (cancelAnimationFrame(this._animationFrameId),
          (this._animationFrameId = null));
    }
  }
  const Fg = () => new Ng(),
    Hg = () => {
      const e = document.querySelector("[nav-menu='trigger']"),
        t = document.querySelector("[nav-menu='component']"),
        n = document.querySelector("[nav-menu='contain']"),
        r = document.querySelector("[main-nav='brand']"),
        i = document.querySelector("[nav-menu='brand']"),
        s = document.querySelectorAll("[nav-menu='link-item']"),
        a = document.querySelector("[nav-menu='info-text']"),
        o = document.querySelectorAll("[nav-menu='close']"),
        l = document.querySelectorAll("[nav-menu='social-link']");
      if (!e || !t || !n || !i || !s || !a || !l) return;
      F.set(t, { clipPath: "inset(0% 0% 100% 0%)" }),
        F.set([i, s, l], { y: "100%", opacity: 0 }),
        F.set(a, { y: "20%", opacity: 0 });
      const c = F.timeline({ paused: !0 }),
        u = F.timeline({ paused: !0 });
      c
        .to(t, {
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
            t,
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
        e.addEventListener("click", () => {
          const d =
            e.getAttribute("hamburger-state") === "open" ? "closed" : "open";
          e.setAttribute("hamburger-state", d),
            d === "open" ? (u.pause(), c.play(0)) : (c.pause(), u.play(0));
        }),
        o.forEach((f) => {
          f.addEventListener("click", () => {
            e.setAttribute("hamburger-state", "closed"), u.play(0);
          });
        });
    },
    qg = () => {
      Hg();
    };
  class Bg {
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
      const t = this.ctx.createImageData(this.wWidth, this.wHeight),
        n = new Uint32Array(t.data.buffer),
        r = n.length;
      for (let i = 0; i < r; i++) Math.random() < 0.5 && (n[i] = 4278190080);
      this.noiseData.push(t);
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
      for (let t = 0; t < 10; t++) this._createNoise();
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
  const Vg = (e) => {
      const t = document.querySelector(".page_overlay"),
        n = document.querySelector("[page-overlay='text-wrap']");
      F.set(t, { clipPath: "inset(100% 0% 0% 0%)", pointerEvents: "none" }),
        F.set(n, { opacity: 0, y: 50, willChange: "transform, opacity" });
      const r = F.timeline();
      return (
        r.fromTo(
          t,
          { clipPath: "inset(100% 0% 0% 0%)", pointerEvents: "none" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            pointerEvents: "auto",
            duration: 1,
            ease: "expo.inOut",
          },
          "<"
        ),
        r
      );
    },
    Wg = () => {
      document.querySelectorAll("a[href]").forEach((t) => {
        const n = t.getAttribute("href");
        if (
          n.startsWith("#") ||
          n.startsWith("mailto:") ||
          n.startsWith("tel:") ||
          n.startsWith("javascript:") ||
          t.target === "_blank"
        )
          return;
        new URL(n, window.location.origin).hostname ===
          window.location.hostname &&
          t.addEventListener("click", (s) =>
            el(this, null, function* () {
              s.preventDefault();
              const a = t.href,
                o = document.createElement("link");
              (o.rel = "prefetch"),
                (o.href = a),
                document.head.appendChild(o),
                yield Vg(),
                (window.location.href = a);
            })
          );
      });
    },
    Yg = () => {
      Fg(), qg(), new Bg(), Hu(), Wg();
    };
  function Xg(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(
          e,
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
  function Xo(e, t, n) {
    return (
      t && Xg(e.prototype, t),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function hn() {
    return (
      (hn = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      hn.apply(this, arguments)
    );
  }
  function la(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      ns(e, t);
  }
  function Go(e) {
    return (
      (Go = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      Go(e)
    );
  }
  function ns(e, t) {
    return (
      (ns = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, r) {
            return (n.__proto__ = r), n;
          }),
      ns(e, t)
    );
  }
  function Gg() {
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
    } catch (e) {
      return !1;
    }
  }
  function jo(e, t, n) {
    return (
      (jo = Gg()
        ? Reflect.construct.bind()
        : function (r, i, s) {
            var a = [null];
            a.push.apply(a, i);
            var o = new (Function.bind.apply(r, a))();
            return s && ns(o, s.prototype), o;
          }),
      jo.apply(null, arguments)
    );
  }
  function Uo(e) {
    var t = typeof Map == "function" ? new Map() : void 0;
    return (
      (Uo = function (n) {
        if (
          n === null ||
          Function.toString.call(n).indexOf("[native code]") === -1
        )
          return n;
        if (typeof n != "function")
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (t !== void 0) {
          if (t.has(n)) return t.get(n);
          t.set(n, r);
        }
        function r() {
          return jo(n, arguments, Go(this).constructor);
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
          ns(r, n)
        );
      }),
      Uo(e)
    );
  }
  function jg(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  var Un,
    Ug = function () {
      (this.before = void 0),
        (this.beforeLeave = void 0),
        (this.leave = void 0),
        (this.afterLeave = void 0),
        (this.beforeEnter = void 0),
        (this.enter = void 0),
        (this.afterEnter = void 0),
        (this.after = void 0);
    };
  (function (e) {
    (e[(e.off = 0)] = "off"),
      (e[(e.error = 1)] = "error"),
      (e[(e.warning = 2)] = "warning"),
      (e[(e.info = 3)] = "info"),
      (e[(e.debug = 4)] = "debug");
  })(Un || (Un = {}));
  var tf = Un.off,
    Pr = (function () {
      function e(n) {
        (this.t = void 0), (this.t = n);
      }
      (e.getLevel = function () {
        return tf;
      }),
        (e.setLevel = function (n) {
          return (tf = Un[n]);
        });
      var t = e.prototype;
      return (
        (t.error = function () {
          this.i(console.error, Un.error, [].slice.call(arguments));
        }),
        (t.warn = function () {
          this.i(console.warn, Un.warning, [].slice.call(arguments));
        }),
        (t.info = function () {
          this.i(console.info, Un.info, [].slice.call(arguments));
        }),
        (t.debug = function () {
          this.i(console.log, Un.debug, [].slice.call(arguments));
        }),
        (t.i = function (n, r, i) {
          r <= e.getLevel() &&
            n.apply(console, ["[" + this.t + "] "].concat(i));
        }),
        e
      );
    })();
  function ci(e) {
    return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  }
  function nf(e) {
    return e && e.sensitive ? "" : "i";
  }
  var pn = {
      container: "container",
      history: "history",
      namespace: "namespace",
      prefix: "data-barba",
      prevent: "prevent",
      wrapper: "wrapper",
    },
    kr = new ((function () {
      function e() {
        (this.o = pn),
          (this.u = void 0),
          (this.h = { after: null, before: null, parent: null });
      }
      var t = e.prototype;
      return (
        (t.toString = function (n) {
          return n.outerHTML;
        }),
        (t.toDocument = function (n) {
          return (
            this.u || (this.u = new DOMParser()),
            this.u.parseFromString(n, "text/html")
          );
        }),
        (t.toElement = function (n) {
          var r = document.createElement("div");
          return (r.innerHTML = n), r;
        }),
        (t.getHtml = function (n) {
          return (
            n === void 0 && (n = document), this.toString(n.documentElement)
          );
        }),
        (t.getWrapper = function (n) {
          return (
            n === void 0 && (n = document),
            n.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
          );
        }),
        (t.getContainer = function (n) {
          return (
            n === void 0 && (n = document),
            n.querySelector(
              "[" + this.o.prefix + '="' + this.o.container + '"]'
            )
          );
        }),
        (t.removeContainer = function (n) {
          document.body.contains(n) && (this.v(n), n.parentNode.removeChild(n));
        }),
        (t.addContainer = function (n, r) {
          var i = this.getContainer() || this.h.before;
          i
            ? this.l(n, i)
            : this.h.after
            ? this.h.after.parentNode.insertBefore(n, this.h.after)
            : this.h.parent
            ? this.h.parent.appendChild(n)
            : r.appendChild(n);
        }),
        (t.getSibling = function () {
          return this.h;
        }),
        (t.getNamespace = function (n) {
          n === void 0 && (n = document);
          var r = n.querySelector(
            "[" + this.o.prefix + "-" + this.o.namespace + "]"
          );
          return r
            ? r.getAttribute(this.o.prefix + "-" + this.o.namespace)
            : null;
        }),
        (t.getHref = function (n) {
          if (n.tagName && n.tagName.toLowerCase() === "a") {
            if (typeof n.href == "string") return n.href;
            var r = n.getAttribute("href") || n.getAttribute("xlink:href");
            if (r) return this.resolveUrl(r.baseVal || r);
          }
          return null;
        }),
        (t.resolveUrl = function () {
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
        (t.l = function (n, r) {
          r.parentNode.insertBefore(n, r.nextSibling);
        }),
        (t.v = function (n) {
          return (
            (this.h = {
              after: n.nextElementSibling,
              before: n.previousElementSibling,
              parent: n.parentElement,
            }),
            this.h
          );
        }),
        e
      );
    })())(),
    Kg = (function () {
      function e() {
        (this.p = void 0), (this.m = []), (this.P = -1);
      }
      var t = e.prototype;
      return (
        (t.init = function (n, r) {
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
        (t.change = function (n, r, i) {
          if (i && i.state) {
            var s = i.state,
              a = s.index;
            (r = this.g(this.P - a)), this.replace(s.states), (this.P = a);
          } else this.add(n, r);
          return r;
        }),
        (t.add = function (n, r, i, s) {
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
        (t.store = function (n, r) {
          var i = r || this.P,
            s = this.get(i);
          (s.data = hn({}, s.data, n)), this.set(i, s);
          var a = { from: this.p, index: this.P, states: [].concat(this.m) };
          window.history.replaceState(a, "");
        }),
        (t.update = function (n, r) {
          var i = r || this.P,
            s = hn({}, this.get(i), n);
          this.set(i, s);
        }),
        (t.remove = function (n) {
          n ? this.m.splice(n, 1) : this.m.pop(), this.P--;
        }),
        (t.clear = function () {
          (this.m = []), (this.P = -1);
        }),
        (t.replace = function (n) {
          this.m = n;
        }),
        (t.get = function (n) {
          return this.m[n];
        }),
        (t.set = function (n, r) {
          return (this.m[n] = r);
        }),
        (t.R = function (n) {
          var r = "push",
            i = n,
            s = pn.prefix + "-" + pn.history;
          return (
            i.hasAttribute && i.hasAttribute(s) && (r = i.getAttribute(s)), r
          );
        }),
        (t.g = function (n) {
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
        Xo(e, [
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
        e
      );
    })(),
    rf = new Kg(),
    ca = function (e, t) {
      try {
        var n = (function () {
          if (!t.next.html)
            return Promise.resolve(e).then(function (r) {
              var i = t.next;
              if (r) {
                var s = kr.toElement(r.html);
                (i.namespace = kr.getNamespace(s)),
                  (i.container = kr.getContainer(s)),
                  (i.url = r.url),
                  (i.html = r.html),
                  rf.update({ ns: i.namespace });
                var a = kr.toDocument(r.html);
                document.title = a.title;
              }
            });
        })();
        return Promise.resolve(n && n.then ? n.then(function () {}) : void 0);
      } catch (r) {
        return Promise.reject(r);
      }
    },
    sf = function e(t, n, r) {
      return t instanceof RegExp
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
          })(t, n)
        : Array.isArray(t)
        ? (function (i, s, a) {
            var o = i.map(function (l) {
              return e(l, s, a).source;
            });
            return new RegExp("(?:".concat(o.join("|"), ")"), nf(a));
          })(t, n, r)
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
                  S = "[".concat(ci(x === void 0 ? "" : x), "]|$"),
                  C = "[".concat(ci(_), "]"),
                  w = h ? "^" : "",
                  P = 0,
                  A = o;
                P < A.length;
                P++
              ) {
                var E = A[P];
                if (typeof E == "string") w += ci(y(E));
                else {
                  var $ = ci(y(E.prefix)),
                    b = ci(y(E.suffix));
                  if (E.pattern)
                    if ((l && l.push(E), $ || b))
                      if (E.modifier === "+" || E.modifier === "*") {
                        var T = E.modifier === "*" ? "?" : "";
                        w += "(?:"
                          .concat($, "((?:")
                          .concat(E.pattern, ")(?:")
                          .concat(b)
                          .concat($, "(?:")
                          .concat(E.pattern, "))*)")
                          .concat(b, ")")
                          .concat(T);
                      } else
                        w += "(?:"
                          .concat($, "(")
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
                  else w += "(?:".concat($).concat(b, ")").concat(E.modifier);
                }
              }
              if (p)
                f || (w += "".concat(C, "?")),
                  (w += c.endsWith ? "(?=".concat(S, ")") : "$");
              else {
                var O = o[o.length - 1],
                  D =
                    typeof O == "string"
                      ? C.indexOf(O[O.length - 1]) > -1
                      : O === void 0;
                f || (w += "(?:".concat(C, "(?=").concat(S, "))?")),
                  D || (w += "(?=".concat(C, "|").concat(S, ")"));
              }
              return new RegExp(w, nf(c));
            })(
              (function (o, l) {
                l === void 0 && (l = {});
                for (
                  var c = (function (b) {
                      for (var T = [], O = 0; O < b.length; ) {
                        var D = b[O];
                        if (D !== "*" && D !== "+" && D !== "?")
                          if (D !== "\\")
                            if (D !== "{")
                              if (D !== "}")
                                if (D !== ":")
                                  if (D !== "(")
                                    T.push({
                                      type: "CHAR",
                                      index: O,
                                      value: b[O++],
                                    });
                                  else {
                                    var k = 1,
                                      L = "";
                                    if (b[(R = O + 1)] === "?")
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
                                        L += b[R++];
                                      } else L += b[R++] + b[R++];
                                    if (k)
                                      throw new TypeError(
                                        "Unbalanced pattern at ".concat(O)
                                      );
                                    if (!L)
                                      throw new TypeError(
                                        "Missing pattern at ".concat(O)
                                      );
                                    T.push({
                                      type: "PATTERN",
                                      index: O,
                                      value: L,
                                    }),
                                      (O = R);
                                  }
                                else {
                                  for (var I = "", R = O + 1; R < b.length; ) {
                                    var M = b.charCodeAt(R);
                                    if (
                                      !(
                                        (M >= 48 && M <= 57) ||
                                        (M >= 65 && M <= 90) ||
                                        (M >= 97 && M <= 122) ||
                                        M === 95
                                      )
                                    )
                                      break;
                                    I += b[R++];
                                  }
                                  if (!I)
                                    throw new TypeError(
                                      "Missing parameter name at ".concat(O)
                                    );
                                  T.push({ type: "NAME", index: O, value: I }),
                                    (O = R);
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
                    d = "[^".concat(ci(l.delimiter || "/#?"), "]+?"),
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
                        D = O.index;
                      throw new TypeError(
                        "Unexpected "
                          .concat(O.type, " at ")
                          .concat(D, ", expected ")
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
                        $ = _();
                      v("CLOSE"),
                        h.push({
                          name: A || (E ? m++ : ""),
                          pattern: A && !E ? d : E,
                          prefix: P,
                          suffix: $,
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
          })(t, n, r);
    },
    Qg = {
      __proto__: null,
      update: ca,
      nextTick: function () {
        return new Promise(function (e) {
          window.requestAnimationFrame(e);
        });
      },
      pathToRegexp: sf,
    },
    af = function () {
      return window.location.origin;
    },
    rs = function (e) {
      return e === void 0 && (e = window.location.href), Kn(e).port;
    },
    Kn = function (e) {
      var t,
        n = e.match(/:\d+/);
      if (n === null)
        /^http/.test(e) && (t = 80), /^https/.test(e) && (t = 443);
      else {
        var r = n[0].substring(1);
        t = parseInt(r, 10);
      }
      var i,
        s = e.replace(af(), ""),
        a = {},
        o = s.indexOf("#");
      o >= 0 && ((i = s.slice(o + 1)), (s = s.slice(0, o)));
      var l = s.indexOf("?");
      return (
        l >= 0 && ((a = of(s.slice(l + 1))), (s = s.slice(0, l))),
        { hash: i, path: s, port: t, query: a }
      );
    },
    of = function (e) {
      return e.split("&").reduce(function (t, n) {
        var r = n.split("=");
        return (t[r[0]] = r[1]), t;
      }, {});
    },
    Ko = function (e) {
      return (
        e === void 0 && (e = window.location.href),
        e.replace(/(\/#.*|\/|#.*)$/, "")
      );
    },
    Zg = {
      __proto__: null,
      getHref: function () {
        return window.location.href;
      },
      getAbsoluteHref: function (e, t) {
        return t === void 0 && (t = document.baseURI), new URL(e, t).href;
      },
      getOrigin: af,
      getPort: rs,
      getPath: function (e) {
        return e === void 0 && (e = window.location.href), Kn(e).path;
      },
      getQuery: function (e, t) {
        return (
          t === void 0 && (t = !1),
          t ? JSON.stringify(Kn(e).query) : Kn(e).query
        );
      },
      getHash: function (e) {
        return Kn(e).hash;
      },
      parse: Kn,
      parseQuery: of,
      clean: Ko,
    };
  function Jg(e, t, n, r, i) {
    return (
      t === void 0 && (t = 2e3),
      new Promise(function (s, a) {
        var o = new XMLHttpRequest();
        (o.onreadystatechange = function () {
          if (o.readyState === XMLHttpRequest.DONE) {
            if (o.status === 200) {
              var l =
                o.responseURL !== "" && o.responseURL !== e ? o.responseURL : e;
              s({ html: o.responseText, url: hn({ href: l }, Kn(l)) }),
                r.update(e, { status: "fulfilled", target: l });
            } else if (o.status) {
              var c = { status: o.status, statusText: o.statusText };
              n(e, c), a(c), r.update(e, { status: "rejected" });
            }
          }
        }),
          (o.ontimeout = function () {
            var l = new Error("Timeout error [" + t + "]");
            n(e, l), a(l), r.update(e, { status: "rejected" });
          }),
          (o.onerror = function () {
            var l = new Error("Fetch error");
            n(e, l), a(l), r.update(e, { status: "rejected" });
          }),
          o.open("GET", e),
          (o.timeout = t),
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
  function ev(e) {
    return (
      !!e &&
      (typeof e == "object" || typeof e == "function") &&
      typeof e.then == "function"
    );
  }
  function ui(e, t) {
    return (
      t === void 0 && (t = {}),
      function () {
        var n = arguments,
          r = !1,
          i = new Promise(function (s, a) {
            t.async = function () {
              return (
                (r = !0),
                function (l, c) {
                  l ? a(l) : s(c);
                }
              );
            };
            var o = e.apply(t, [].slice.call(n));
            r || (ev(o) ? o.then(s, a) : s(o));
          });
        return i;
      }
    );
  }
  var Qn = new ((function (e) {
      function t() {
        var r;
        return (
          ((r = e.call(this) || this).logger = new Pr("@barba/core")),
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
      la(t, e);
      var n = t.prototype;
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
                  return ui(o.fn, o.ctx).apply(void 0, [].slice.call(i, 1));
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
        t
      );
    })(Ug))(),
    lf = (function () {
      function e(t) {
        if (((this.k = void 0), (this.O = []), typeof t == "boolean"))
          this.k = t;
        else {
          var n = Array.isArray(t) ? t : [t];
          this.O = n.map(function (r) {
            return sf(r);
          });
        }
      }
      return (
        (e.prototype.checkHref = function (t) {
          if (typeof this.k == "boolean") return this.k;
          var n = Kn(t).path;
          return this.O.some(function (r) {
            return r.exec(n) !== null;
          });
        }),
        e
      );
    })(),
    tv = (function (e) {
      function t(r) {
        var i;
        return ((i = e.call(this, r) || this).T = new Map()), i;
      }
      la(t, e);
      var n = t.prototype;
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
          var s = hn({}, this.T.get(r), i);
          return this.T.set(r, s), s;
        }),
        t
      );
    })(lf),
    nv = (function () {
      function e() {
        this.A = new Map();
      }
      var t = e.prototype;
      return (
        (t.set = function (n, r) {
          return this.A.set(n, r), { name: r };
        }),
        (t.get = function (n) {
          return this.A.get(n);
        }),
        (t.all = function () {
          return this.A;
        }),
        (t.has = function (n) {
          return this.A.has(n);
        }),
        (t.delete = function (n) {
          return this.A.delete(n);
        }),
        (t.clear = function () {
          return this.A.clear();
        }),
        e
      );
    })(),
    rv = function () {
      return !window.history.pushState;
    },
    iv = function (e) {
      return !e.el || !e.href;
    },
    sv = function (e) {
      var t = e.event;
      return t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey;
    },
    av = function (e) {
      var t = e.el;
      return t.hasAttribute("target") && t.target === "_blank";
    },
    ov = function (e) {
      var t = e.el;
      return (
        (t.protocol !== void 0 && window.location.protocol !== t.protocol) ||
        (t.hostname !== void 0 && window.location.hostname !== t.hostname)
      );
    },
    lv = function (e) {
      var t = e.el;
      return t.port !== void 0 && rs() !== rs(t.href);
    },
    cv = function (e) {
      var t = e.el;
      return t.getAttribute && typeof t.getAttribute("download") == "string";
    },
    uv = function (e) {
      return e.el.hasAttribute(pn.prefix + "-" + pn.prevent);
    },
    fv = function (e) {
      return !!e.el.closest("[" + pn.prefix + "-" + pn.prevent + '="all"]');
    },
    dv = function (e) {
      var t = e.href;
      return Ko(t) === Ko() && rs(t) === rs();
    },
    hv = (function (e) {
      function t(r) {
        var i;
        return (
          ((i = e.call(this, r) || this).suite = []),
          (i.tests = new Map()),
          i.init(),
          i
        );
      }
      la(t, e);
      var n = t.prototype;
      return (
        (n.init = function () {
          this.add("pushState", rv),
            this.add("exists", iv),
            this.add("newTab", sv),
            this.add("blank", av),
            this.add("corsDomain", ov),
            this.add("corsPort", lv),
            this.add("download", cv),
            this.add("preventSelf", uv),
            this.add("preventAll", fv),
            this.add("sameUrl", dv, !1);
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
        t
      );
    })(lf),
    Qo = (function (e) {
      function t(n, r) {
        var i;
        return (
          r === void 0 && (r = "Barba error"),
          ((i =
            e.call.apply(e, [this].concat([].slice.call(arguments, 2))) ||
            this).error = void 0),
          (i.label = void 0),
          (i.error = n),
          (i.label = r),
          Error.captureStackTrace && Error.captureStackTrace(jg(i), t),
          (i.name = "BarbaError"),
          i
        );
      }
      return la(t, e), t;
    })(Uo(Error)),
    pv = (function () {
      function e(n) {
        n === void 0 && (n = []),
          (this.logger = new Pr("@barba/core")),
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
      var t = e.prototype;
      return (
        (t.add = function (n, r) {
          n === "rule"
            ? this.j.splice(r.position || 0, 0, r.value)
            : this.all.push(r),
            this.update();
        }),
        (t.resolve = function (n, r) {
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
        (t.update = function () {
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
        (t.M = function (n, r, i, s, a) {
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
        (t.S = function (n, r, i) {
          var s = 0;
          return (
            (n[r] || (n.from && n.from[r]) || (n.to && n.to[r])) &&
              ((s += Math.pow(10, i)),
              n.from && n.from[r] && (s += 1),
              n.to && n.to[r] && (s += 2)),
            s
          );
        }),
        (t.N = function (n) {
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
        e
      );
    })();
  function is(e, t) {
    try {
      var n = e();
    } catch (r) {
      return t(r);
    }
    return n && n.then ? n.then(void 0, t) : n;
  }
  var mv = (function () {
      function e(n) {
        n === void 0 && (n = []),
          (this.logger = new Pr("@barba/core")),
          (this.store = void 0),
          (this.C = !1),
          (this.store = new pv(n));
      }
      var t = e.prototype;
      return (
        (t.get = function (n, r) {
          return this.store.resolve(n, r);
        }),
        (t.doOnce = function (n) {
          var r = n.data,
            i = n.transition;
          try {
            var s = function () {
                a.C = !1;
              },
              a = this,
              o = i || {};
            a.C = !0;
            var l = is(
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
        (t.doPage = function (n) {
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
            var f = is(
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
                        return is(
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
                              throw new Qo(_, "Transition error [sync]");
                          }
                        );
                      var g = function (_) {
                          return is(
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
                                throw new Qo(
                                  x,
                                  "Transition error [before/after/enter]"
                                );
                            }
                          );
                        },
                        y = !1,
                        v = is(
                          function () {
                            return Promise.resolve(
                              l.L("beforeLeave", r, c)
                            ).then(function () {
                              return Promise.resolve(
                                Promise.all([l.leave(r, c), ca(s, r)]).then(
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
                              throw new Qo(
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
                  if (u) return Promise.resolve(ca(s, r)).then(function () {});
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
        (t.once = function (n, r) {
          try {
            return Promise.resolve(Qn.do("once", n, r)).then(function () {
              return r.once ? ui(r.once, r)(n) : Promise.resolve();
            });
          } catch (i) {
            return Promise.reject(i);
          }
        }),
        (t.leave = function (n, r) {
          try {
            return Promise.resolve(Qn.do("leave", n, r)).then(function () {
              return r.leave ? ui(r.leave, r)(n) : Promise.resolve();
            });
          } catch (i) {
            return Promise.reject(i);
          }
        }),
        (t.enter = function (n, r, i) {
          try {
            return Promise.resolve(Qn.do("enter", n, r)).then(function () {
              return r.enter ? ui(r.enter, r)(n, i) : Promise.resolve();
            });
          } catch (s) {
            return Promise.reject(s);
          }
        }),
        (t.add = function (n, r) {
          try {
            return (
              kr.addContainer(n.next.container, r),
              Qn.do("nextAdded", n),
              Promise.resolve()
            );
          } catch (i) {
            return Promise.reject(i);
          }
        }),
        (t.remove = function (n) {
          try {
            return (
              kr.removeContainer(n.current.container),
              Qn.do("currentRemoved", n),
              Promise.resolve()
            );
          } catch (r) {
            return Promise.reject(r);
          }
        }),
        (t.H = function (n) {
          return n.message
            ? !/Timeout error|Fetch error/.test(n.message)
            : !n.status;
        }),
        (t.L = function (n, r, i) {
          try {
            return Promise.resolve(Qn.do(n, r, i)).then(function () {
              return i[n] ? ui(i[n], i)(r) : Promise.resolve();
            });
          } catch (s) {
            return Promise.reject(s);
          }
        }),
        Xo(e, [
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
        e
      );
    })(),
    gv = (function () {
      function e(t) {
        var n = this;
        (this.names = [
          "beforeLeave",
          "afterLeave",
          "beforeEnter",
          "afterEnter",
        ]),
          (this.byNamespace = new Map()),
          t.length !== 0 &&
            (t.forEach(function (r) {
              n.byNamespace.set(r.namespace, r);
            }),
            this.names.forEach(function (r) {
              Qn[r](n._(r));
            }));
      }
      return (
        (e.prototype._ = function (t) {
          var n = this;
          return function (r) {
            var i = t.match(/enter/i) ? r.next : r.current,
              s = n.byNamespace.get(i.namespace);
            return s && s[t] ? ui(s[t], s)(r) : Promise.resolve();
          };
        }),
        e
      );
    })();
  Element.prototype.matches ||
    (Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector),
    Element.prototype.closest ||
      (Element.prototype.closest = function (e) {
        var t = this;
        do {
          if (t.matches(e)) return t;
          t = t.parentElement || t.parentNode;
        } while (t !== null && t.nodeType === 1);
        return null;
      });
  var vv = {
    container: null,
    html: "",
    namespace: "",
    url: { hash: "", href: "", path: "", port: null, query: {} },
  };
  new ((function () {
    function e() {
      (this.version = "2.10.3"),
        (this.schemaPage = vv),
        (this.Logger = Pr),
        (this.logger = new Pr("@barba/core")),
        (this.plugins = []),
        (this.timeout = void 0),
        (this.cacheIgnore = void 0),
        (this.cacheFirstPage = void 0),
        (this.prefetchIgnore = void 0),
        (this.preventRunning = void 0),
        (this.hooks = Qn),
        (this.cache = void 0),
        (this.headers = void 0),
        (this.prevent = void 0),
        (this.transitions = void 0),
        (this.views = void 0),
        (this.dom = kr),
        (this.helpers = Qg),
        (this.history = rf),
        (this.request = Jg),
        (this.url = Zg),
        (this.D = void 0),
        (this.B = void 0),
        (this.q = void 0),
        (this.F = void 0);
    }
    var t = e.prototype;
    return (
      (t.use = function (n, r) {
        var i = this.plugins;
        i.indexOf(n) > -1
          ? this.logger.warn("Plugin [" + n.name + "] already installed.")
          : typeof n.install == "function"
          ? (n.install(this, r), i.push(n))
          : this.logger.warn(
              "Plugin [" + n.name + '] has no "install" method.'
            );
      }),
      (t.init = function (n) {
        var r = n === void 0 ? {} : n,
          i = r.transitions,
          s = i === void 0 ? [] : i,
          a = r.views,
          o = a === void 0 ? [] : a,
          l = r.schema,
          c = l === void 0 ? pn : l,
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
          C = S === void 0 ? null : S,
          w = r.debug,
          P = r.logLevel;
        if (
          (Pr.setLevel(
            (w !== void 0 && w) === !0 ? "debug" : P === void 0 ? "off" : P
          ),
          this.logger.info(this.version),
          Object.keys(c).forEach(function ($) {
            pn[$] && (pn[$] = c[$]);
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
          ((this.cache = new tv(m)),
          (this.headers = new nv()),
          (this.prevent = new hv(v)),
          (this.transitions = new mv(s)),
          (this.views = new gv(o)),
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
          this.plugins.forEach(function ($) {
            return $.init();
          });
        var E = this.data;
        (E.trigger = "barba"),
          (E.next = E.current),
          (E.current = hn({}, this.schemaPage)),
          this.hooks.do("ready", E),
          this.once(E),
          this.I();
      }),
      (t.destroy = function () {
        this.I(),
          this.J(),
          this.history.clear(),
          this.hooks.clear(),
          (this.plugins = []);
      }),
      (t.force = function (n) {
        window.location.assign(n);
      }),
      (t.go = function (n, r, i) {
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
      (t.once = function (n) {
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
      (t.page = function (n, r, i, s) {
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
                  Pr.getLevel() === 0 && l.force(f.next.url.href);
                });
                if (d && d.then) return d.then(function () {});
              });
            },
            l = this;
          if (
            ((l.data.next.url = hn({ href: n }, l.url.parse(n))),
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
              return Promise.resolve(ca(a, l.data)).then(function () {});
          })();
          return Promise.resolve(u && u.then ? u.then(o) : o());
        } catch (f) {
          return Promise.reject(f);
        }
      }),
      (t.onRequestError = function (n) {
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
      (t.prefetch = function (n) {
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
      (t.G = function () {
        this.prefetchIgnore !== !0 &&
          (document.addEventListener("mouseover", this.U),
          document.addEventListener("touchstart", this.U)),
          document.addEventListener("click", this.$),
          window.addEventListener("popstate", this.X);
      }),
      (t.J = function () {
        this.prefetchIgnore !== !0 &&
          (document.removeEventListener("mouseover", this.U),
          document.removeEventListener("touchstart", this.U)),
          document.removeEventListener("click", this.$),
          window.removeEventListener("popstate", this.X);
      }),
      (t.U = function (n) {
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
      (t.$ = function (n) {
        var r = this.W(n);
        if (r) {
          if (this.transitions.isRunning && this.preventRunning)
            return n.preventDefault(), void n.stopPropagation();
          (this.F = n), this.go(this.dom.getHref(r), r, n);
        }
      }),
      (t.X = function (n) {
        this.go(this.url.getHref(), "popstate", n);
      }),
      (t.W = function (n) {
        for (var r = n.target; r && !this.dom.getHref(r); ) r = r.parentNode;
        if (r && !this.prevent.checkLink(r, n, this.dom.getHref(r))) return r;
      }),
      (t.I = function () {
        var n = this.url.getHref(),
          r = {
            container: this.dom.getContainer(),
            html: this.dom.getHtml(),
            namespace: this.dom.getNamespace(),
            url: hn({ href: n }, this.url.parse(n)),
          };
        (this.D = {
          current: r,
          event: void 0,
          next: hn({}, this.schemaPage),
          trigger: void 0,
        }),
          this.hooks.do("reset", this.data);
      }),
      Xo(e, [
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
      e
    );
  })())(),
    F.registerPlugin(X),
    document.addEventListener("DOMContentLoaded", () => {
      window.addEventListener("load", () => {
        window.scrollTo(0, 0);
        const e = ts();
        e && e.scrollTo(0, { immediate: !0 });
      }),
        Yg(),
        Rg(),
        Hu();
    });
});
