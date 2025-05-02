var _v = Object.defineProperty;
var vf = Object.getOwnPropertySymbols;
var bv = Object.prototype.hasOwnProperty,
  xv = Object.prototype.propertyIsEnumerable;
var wt = Math.pow,
  el = (Ue, ze, ie) =>
    ze in Ue
      ? _v(Ue, ze, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ie,
        })
      : (Ue[ze] = ie),
  yf = (Ue, ze) => {
    for (var ie in ze || (ze = {})) bv.call(ze, ie) && el(Ue, ie, ze[ie]);
    if (vf) for (var ie of vf(ze)) xv.call(ze, ie) && el(Ue, ie, ze[ie]);
    return Ue;
  };
var V = (Ue, ze, ie) => el(Ue, typeof ze != "symbol" ? ze + "" : ze, ie);
var tl = (Ue, ze, ie) =>
  new Promise((fs, sn) => {
    var ds = (qt) => {
        try {
          Nr(ie.next(qt));
        } catch (vi) {
          sn(vi);
        }
      },
      ma = (qt) => {
        try {
          Nr(ie.throw(qt));
        } catch (vi) {
          sn(vi);
        }
      },
      Nr = (qt) =>
        qt.done ? fs(qt.value) : Promise.resolve(qt.value).then(ds, ma);
    Nr((ie = ie.apply(Ue, ze)).next());
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
            qt(e, r, n[r]);
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
      l = function (T, O, I) {
        return (T[O] = I);
      };
    }
    function c(b, T, O, I) {
      var k = T && T.prototype instanceof d ? T : d,
        L = Object.create(k.prototype),
        D = new A(I || []);
      return r(L, "_invoke", { value: S(b, O, D) }), L;
    }
    function u(b, T, O) {
      try {
        return { type: "normal", arg: b.call(T, O) };
      } catch (I) {
        return { type: "throw", arg: I };
      }
    }
    e.wrap = c;
    var f = {};
    function d() {}
    function p() {}
    function m() {}
    var h = {};
    l(h, s, function () {
      return this;
    });
    var g = Object.getPrototypeOf,
      y = g && g(g(E([])));
    y && y !== t && n.call(y, s) && (h = y);
    var v = (m.prototype = d.prototype = Object.create(h));
    function _(b) {
      ["next", "throw", "return"].forEach(function (T) {
        l(b, T, function (O) {
          return this._invoke(T, O);
        });
      });
    }
    function x(b, T) {
      function O(k, L, D, R) {
        var M = u(b[k], b, L);
        if (M.type !== "throw") {
          var B = M.arg,
            K = B.value;
          return K && typeof K == "object" && n.call(K, "__await")
            ? T.resolve(K.__await).then(
                function (se) {
                  O("next", se, D, R);
                },
                function (se) {
                  O("throw", se, D, R);
                }
              )
            : T.resolve(K).then(
                function (se) {
                  (B.value = se), D(B);
                },
                function (se) {
                  return O("throw", se, D, R);
                }
              );
        }
        R(M.arg);
      }
      var I;
      r(this, "_invoke", {
        value: function (k, L) {
          function D() {
            return new T(function (R, M) {
              O(k, L, R, M);
            });
          }
          return (I = I ? I.then(D, D) : D());
        },
      });
    }
    function S(b, T, O) {
      var I = "suspendedStart";
      return function (k, L) {
        if (I === "executing") throw new Error("Generator is already running");
        if (I === "completed") {
          if (k === "throw") throw L;
          return $();
        }
        for (O.method = k, O.arg = L; ; ) {
          var D = O.delegate;
          if (D) {
            var R = w(D, O);
            if (R) {
              if (R === f) continue;
              return R;
            }
          }
          if (O.method === "next") O.sent = O._sent = O.arg;
          else if (O.method === "throw") {
            if (I === "suspendedStart") throw ((I = "completed"), O.arg);
            O.dispatchException(O.arg);
          } else O.method === "return" && O.abrupt("return", O.arg);
          I = "executing";
          var M = u(b, T, O);
          if (M.type === "normal") {
            if (((I = O.done ? "completed" : "suspendedYield"), M.arg === f))
              continue;
            return { value: M.arg, done: O.done };
          }
          M.type === "throw" &&
            ((I = "completed"), (O.method = "throw"), (O.arg = M.arg));
        }
      };
    }
    function w(b, T) {
      var O = T.method,
        I = b.iterator[O];
      if (I === void 0)
        return (
          (T.delegate = null),
          (O === "throw" &&
            b.iterator.return &&
            ((T.method = "return"),
            (T.arg = void 0),
            w(b, T),
            T.method === "throw")) ||
            (O !== "return" &&
              ((T.method = "throw"),
              (T.arg = new TypeError(
                "The iterator does not provide a '" + O + "' method"
              )))),
          f
        );
      var k = u(I, b.iterator, T.arg);
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
    function C(b) {
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
        b.forEach(C, this),
        this.reset(!0);
    }
    function E(b) {
      if (b) {
        var T = b[s];
        if (T) return T.call(b);
        if (typeof b.next == "function") return b;
        if (!isNaN(b.length)) {
          var O = -1,
            I = function k() {
              for (; ++O < b.length; )
                if (n.call(b, O)) return (k.value = b[O]), (k.done = !1), k;
              return (k.value = void 0), (k.done = !0), k;
            };
          return (I.next = I);
        }
      }
      return { next: $ };
    }
    function $() {
      return { value: void 0, done: !0 };
    }
    return (
      (p.prototype = m),
      r(v, "constructor", { value: m, configurable: !0 }),
      r(m, "constructor", { value: p, configurable: !0 }),
      (p.displayName = l(m, o, "GeneratorFunction")),
      (e.isGeneratorFunction = function (b) {
        var T = typeof b == "function" && b.constructor;
        return (
          !!T && (T === p || (T.displayName || T.name) === "GeneratorFunction")
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
      (e.async = function (b, T, O, I, k) {
        k === void 0 && (k = Promise);
        var L = new x(c(b, T, O, I), k);
        return e.isGeneratorFunction(T)
          ? L
          : L.next().then(function (D) {
              return D.done ? D.value : L.next();
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
        for (var I in T) O.push(I);
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
          function O(M, B) {
            return (
              (L.type = "throw"),
              (L.arg = b),
              (T.next = M),
              B && ((T.method = "next"), (T.arg = void 0)),
              !!B
            );
          }
          for (var I = this.tryEntries.length - 1; I >= 0; --I) {
            var k = this.tryEntries[I],
              L = k.completion;
            if (k.tryLoc === "root") return O("end");
            if (k.tryLoc <= this.prev) {
              var D = n.call(k, "catchLoc"),
                R = n.call(k, "finallyLoc");
              if (D && R) {
                if (this.prev < k.catchLoc) return O(k.catchLoc, !0);
                if (this.prev < k.finallyLoc) return O(k.finallyLoc);
              } else if (D) {
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
            var I = this.tryEntries[O];
            if (
              I.tryLoc <= this.prev &&
              n.call(I, "finallyLoc") &&
              this.prev < I.finallyLoc
            ) {
              var k = I;
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
              var I = O.completion;
              if (I.type === "throw") {
                var k = I.arg;
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
  function fs(e, t, n, r, i, s, a) {
    try {
      var o = e[s](a),
        l = o.value;
    } catch (c) {
      n(c);
      return;
    }
    o.done ? t(l) : Promise.resolve(l).then(r, i);
  }
  function sn(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, i) {
        var s = e.apply(t, n);
        function a(l) {
          fs(s, r, i, a, o, "next", l);
        }
        function o(l) {
          fs(s, r, i, a, o, "throw", l);
        }
        a(void 0);
      });
    };
  }
  function ds(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function ma(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, rl(r.key), r);
    }
  }
  function Nr(e, t, n) {
    return (
      t && ma(e.prototype, t),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function qt(e, t, n) {
    return (
      (t = rl(t)),
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
  function vi(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      t && _i(e, t);
  }
  function yi(e) {
    return (
      (yi = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (n) {
            return n.__proto__ || Object.getPrototypeOf(n);
          }),
      yi(e)
    );
  }
  function _i(e, t) {
    return (
      (_i = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (r, i) {
            return (r.__proto__ = i), r;
          }),
      _i(e, t)
    );
  }
  function nl() {
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
  function hs(e, t, n) {
    return (
      nl()
        ? (hs = Reflect.construct.bind())
        : (hs = function (i, s, a) {
            var o = [null];
            o.push.apply(o, s);
            var l = Function.bind.apply(i, o),
              c = new l();
            return a && _i(c, a.prototype), c;
          }),
      hs.apply(null, arguments)
    );
  }
  function bf(e) {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  }
  function ga(e) {
    var t = typeof Map == "function" ? new Map() : void 0;
    return (
      (ga = function (r) {
        if (r === null || !bf(r)) return r;
        if (typeof r != "function")
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (typeof t != "undefined") {
          if (t.has(r)) return t.get(r);
          t.set(r, i);
        }
        function i() {
          return hs(r, arguments, yi(this).constructor);
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
          _i(i, r)
        );
      }),
      ga(e)
    );
  }
  function ps(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function xf(e, t) {
    if (t && (typeof t == "object" || typeof t == "function")) return t;
    if (t !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return ps(e);
  }
  function Sf(e) {
    var t = nl();
    return function () {
      var r = yi(e),
        i;
      if (t) {
        var s = yi(this).constructor;
        i = Reflect.construct(r, arguments, s);
      } else i = r.apply(this, arguments);
      return xf(this, i);
    };
  }
  function Tf(e, t) {
    if (typeof e != "object" || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var r = n.call(e, t);
      if (typeof r != "object") return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e);
  }
  function rl(e) {
    var t = Tf(e, "string");
    return typeof t == "symbol" ? t : String(t);
  }
  var il =
    typeof global != "undefined" &&
    {}.toString.call(global) === "[object global]";
  function sl(e, t) {
    return e.indexOf(t.toLowerCase()) === 0
      ? e
      : ""
          .concat(t.toLowerCase())
          .concat(e.substr(0, 1).toUpperCase())
          .concat(e.substr(1));
  }
  function Ef(e) {
    return !!(
      e &&
      e.nodeType === 1 &&
      "nodeName" in e &&
      e.ownerDocument &&
      e.ownerDocument.defaultView
    );
  }
  function Cf(e) {
    return !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e;
  }
  function cr(e) {
    return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(
      e
    );
  }
  function al(e) {
    var t =
      /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
    return t.test(e);
  }
  function wf(e) {
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
  function ol() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.id,
      n = e.url,
      r = t || n;
    if (!r)
      throw new Error(
        "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
      );
    if (Cf(r)) return "https://vimeo.com/".concat(r);
    if (cr(r)) return r.replace("http:", "https:");
    throw t
      ? new TypeError("“".concat(t, "” is not a valid video id."))
      : new TypeError("“".concat(r, "” is not a vimeo.com url."));
  }
  var ll = function (t, n, r) {
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
    Pf = typeof Array.prototype.indexOf != "undefined",
    kf =
      typeof window != "undefined" && typeof window.postMessage != "undefined";
  if (!il && (!Pf || !kf))
    throw new Error(
      "Sorry, the Vimeo Player API is not available in this browser."
    );
  var Fr =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {};
  function Mf(e, t) {
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
      : Fr
  );
  var Bt = Mf(function (e) {
      /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/ (function (n, r, i) {
        (r[n] = r[n] || i()), e.exports && (e.exports = r[n]);
      })("Promise", Fr, function () {
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
            add: function (P, A) {
              (S = new w(P, A)),
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
        function p(v, _, x, S) {
          for (var w = 0; w < _.length; w++)
            (function (P) {
              v.resolve(_[P]).then(function (E) {
                x(P, E);
              }, S);
            })(w);
        }
        function m(v) {
          (this.def = v), (this.triggered = !1);
        }
        function h(v) {
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
          var _ = new h(this);
          (this.then = function (S, w) {
            var C = {
              success: typeof S == "function" ? S : !0,
              failure: typeof w == "function" ? w : !1,
            };
            return (
              (C.promise = new this.constructor(function (A, E) {
                if (typeof A != "function" || typeof E != "function")
                  throw TypeError("Not a function");
                (C.resolve = A), (C.reject = E);
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
                    A = Array(P),
                    E = 0;
                  p(
                    x,
                    _,
                    function (b, T) {
                      (A[b] = T), ++E === P && w(A);
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
                  p(
                    x,
                    _,
                    function (A, E) {
                      w(E);
                    },
                    C
                  );
                });
          }),
          g
        );
      });
    }),
    bn = new WeakMap();
  function bi(e, t, n) {
    var r = bn.get(e.element) || {};
    t in r || (r[t] = []), r[t].push(n), bn.set(e.element, r);
  }
  function ms(e, t) {
    var n = bn.get(e.element) || {};
    return n[t] || [];
  }
  function gs(e, t, n) {
    var r = bn.get(e.element) || {};
    if (!r[t]) return !0;
    if (!n) return (r[t] = []), bn.set(e.element, r), !0;
    var i = r[t].indexOf(n);
    return (
      i !== -1 && r[t].splice(i, 1),
      bn.set(e.element, r),
      r[t] && r[t].length === 0
    );
  }
  function $f(e, t) {
    var n = ms(e, t);
    if (n.length < 1) return !1;
    var r = n.shift();
    return gs(e, t, r), r;
  }
  function Of(e, t) {
    var n = bn.get(e);
    bn.set(t, n), bn.delete(e);
  }
  function vs(e) {
    if (typeof e == "string")
      try {
        e = JSON.parse(e);
      } catch (t) {
        return console.warn(t), {};
      }
    return e;
  }
  function ur(e, t, n) {
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
  function Af(e, t) {
    t = vs(t);
    var n = [],
      r;
    if (t.event) {
      if (t.event === "error") {
        var i = ms(e, t.data.method);
        i.forEach(function (a) {
          var o = new Error(t.data.message);
          (o.name = t.data.name), a.reject(o), gs(e, t.data.method, a);
        });
      }
      (n = ms(e, "event:".concat(t.event))), (r = t.data);
    } else if (t.method) {
      var s = $f(e, t.method);
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
  var Lf = [
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
  function cl(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Lf.reduce(function (n, r) {
      var i = e.getAttribute("data-vimeo-".concat(r));
      return (i || i === "") && (n[r] = i === "" ? 1 : i), n;
    }, t);
  }
  function va(e, t) {
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
  function ul(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = arguments.length > 2 ? arguments[2] : void 0;
    return new Promise(function (r, i) {
      if (!cr(e))
        throw new TypeError("“".concat(e, "” is not a vimeo.com url."));
      var s = wf(e),
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
              va(c, n), i(new Error("“".concat(e, "” is not embeddable.")));
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
  function If() {
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
        var i = cl(r),
          s = ol(i);
        ul(s, i, r)
          .then(function (a) {
            return va(a, r);
          })
          .catch(n);
      } catch (a) {
        n(a);
      }
    });
  }
  function Df() {
    var e =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoPlayerResizeEmbeds_) {
      window.VimeoPlayerResizeEmbeds_ = !0;
      var t = function (r) {
        if (cr(r.origin) && !(!r.data || r.data.event !== "spacechange")) {
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
  function zf() {
    var e =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoSeoMetadataAppended) {
      window.VimeoSeoMetadataAppended = !0;
      var t = function (r) {
        if (cr(r.origin)) {
          var i = vs(r.data);
          if (!(!i || i.event !== "ready"))
            for (
              var s = e.querySelectorAll("iframe"), a = 0;
              a < s.length;
              a++
            ) {
              var o = s[a],
                l = o.contentWindow === r.source;
              if (al(o.src) && l) {
                var c = new ys(o);
                c.callMethod("appendVideoMetadata", window.location.href);
              }
            }
        }
      };
      window.addEventListener("message", t);
    }
  }
  function Rf() {
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
          if (cr(i.origin)) {
            var s = vs(i.data);
            if (!(!s || s.event !== "ready"))
              for (
                var a = e.querySelectorAll("iframe"),
                  o = function () {
                    var u = a[l],
                      f = u.contentWindow === i.source;
                    if (al(u.src) && f) {
                      var d = new ys(u);
                      d.getVideoId()
                        .then(function (p) {
                          var m = new RegExp(
                            "[?&]vimeo_t_".concat(p, "=([^&#]*)")
                          ).exec(window.location.href);
                          if (m && m[1]) {
                            var h = decodeURI(m[1]);
                            d.setCurrentTime(h);
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
  function Nf() {
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
  var Ff = {
      role: "viewer",
      autoPlayMuted: !0,
      allowedDrift: 0.3,
      maxAllowedDrift: 1,
      minCheckInterval: 0.1,
      maxRateAdjustment: 0.2,
      maxTimeToCatchUp: 1,
    },
    Hf = (function (e) {
      vi(n, e);
      var t = Sf(n);
      function n(r, i) {
        var s,
          a =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          o = arguments.length > 3 ? arguments[3] : void 0;
        return (
          ds(this, n),
          (s = t.call(this)),
          qt(ps(s), "logger", void 0),
          qt(ps(s), "speedAdjustment", 0),
          qt(
            ps(s),
            "adjustSpeed",
            (function () {
              var l = sn(
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
          s.init(i, r, ze(ze({}, Ff), a)),
          s
        );
      }
      return (
        Nr(n, [
          {
            key: "disconnect",
            value: function () {
              this.dispatchEvent(new Event("disconnect"));
            },
          },
          {
            key: "init",
            value: (function () {
              var r = sn(
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
                            (u = ll(a, "change", function () {
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
                            (d = ll(
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
              var r = sn(
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
              var r = sn(
                ie().mark(function s(a, o, l) {
                  var c, u, f;
                  return ie().wrap(
                    function (p) {
                      for (;;)
                        switch ((p.prev = p.next)) {
                          case 0:
                            if (
                              ((c = a.query()),
                              (u = c.position),
                              (f = c.velocity),
                              typeof u == "number" && o.setCurrentTime(u),
                              typeof f != "number")
                            ) {
                              p.next = 25;
                              break;
                            }
                            if (f !== 0) {
                              p.next = 11;
                              break;
                            }
                            return (p.next = 6), o.getPaused();
                          case 6:
                            if (((p.t0 = p.sent), p.t0 !== !1)) {
                              p.next = 9;
                              break;
                            }
                            o.pause();
                          case 9:
                            p.next = 25;
                            break;
                          case 11:
                            if (!(f > 0)) {
                              p.next = 25;
                              break;
                            }
                            return (p.next = 14), o.getPaused();
                          case 14:
                            if (((p.t1 = p.sent), p.t1 !== !0)) {
                              p.next = 19;
                              break;
                            }
                            return (
                              (p.next = 18),
                              o.play().catch(
                                (function () {
                                  var m = sn(
                                    ie().mark(function h(g) {
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
                                      }, h);
                                    })
                                  );
                                  return function (h) {
                                    return m.apply(this, arguments);
                                  };
                                })()
                              )
                            );
                          case 18:
                            this.updatePlayer(a, o, l);
                          case 19:
                            return (p.next = 21), o.getPlaybackRate();
                          case 21:
                            if (((p.t2 = p.sent), (p.t3 = f), p.t2 === p.t3)) {
                              p.next = 25;
                              break;
                            }
                            o.setPlaybackRate(f);
                          case 25:
                          case "end":
                            return p.stop();
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
                p = Math.min(d, Math.max(u, c)) * 1e3,
                m = (function () {
                  var g = sn(
                    ie().mark(function y() {
                      var v, _, x, S, w;
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
                h = setInterval(function () {
                  return m();
                }, p);
              return {
                cancel: function () {
                  return clearInterval(h);
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
    })(ga(EventTarget)),
    Hr = new WeakMap(),
    ya = new WeakMap(),
    _t = {},
    ys = (function () {
      function e(t) {
        var n = this,
          r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (
          (ds(this, e),
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
          !Ef(t))
        )
          throw new TypeError(
            "You must pass either a valid element or a valid id."
          );
        if (t.nodeName !== "IFRAME") {
          var i = t.querySelector("iframe");
          i && (t = i);
        }
        if (t.nodeName === "IFRAME" && !cr(t.getAttribute("src") || ""))
          throw new Error("The player element passed isn’t a Vimeo embed.");
        if (Hr.has(t)) return Hr.get(t);
        (this._window = t.ownerDocument.defaultView),
          (this.element = t),
          (this.origin = "*");
        var s = new Bt(function (o, l) {
          if (
            ((n._onMessage = function (f) {
              if (!(!cr(f.origin) || n.element.contentWindow !== f.source)) {
                n.origin === "*" && (n.origin = f.origin);
                var d = vs(f.data),
                  p = d && d.event === "error",
                  m = p && d.data && d.data.method === "ready";
                if (m) {
                  var h = new Error(d.data.message);
                  (h.name = d.data.name), l(h);
                  return;
                }
                var g = d && d.event === "ready",
                  y = d && d.method === "ping";
                if (g || y) {
                  n.element.setAttribute("data-ready", "true"), o();
                  return;
                }
                Af(n, d);
              }
            }),
            n._window.addEventListener("message", n._onMessage),
            n.element.nodeName !== "IFRAME")
          ) {
            var c = cl(t, r),
              u = ol(c);
            ul(u, c, t)
              .then(function (f) {
                var d = va(f, t);
                return (
                  (n.element = d),
                  (n._originalElement = t),
                  Of(t, d),
                  Hr.set(n.element, n),
                  f
                );
              })
              .catch(l);
          }
        });
        if (
          (ya.set(this, s),
          Hr.set(this.element, this),
          this.element.nodeName === "IFRAME" && ur(this, "ping"),
          _t.isEnabled)
        ) {
          var a = function () {
            return _t.exit();
          };
          (this.fullscreenchangeHandler = function () {
            _t.isFullscreen
              ? bi(n, "event:exitFullscreen", a)
              : gs(n, "event:exitFullscreen", a),
              n.ready().then(function () {
                ur(n, "fullscreenchange", _t.isFullscreen);
              });
          }),
            _t.on("fullscreenchange", this.fullscreenchangeHandler);
        }
        return this;
      }
      return (
        Nr(e, [
          {
            key: "callMethod",
            value: function (n) {
              var r = this,
                i =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
              return new Bt(function (s, a) {
                return r
                  .ready()
                  .then(function () {
                    bi(r, n, { resolve: s, reject: a }), ur(r, n, i);
                  })
                  .catch(a);
              });
            },
          },
          {
            key: "get",
            value: function (n) {
              var r = this;
              return new Bt(function (i, s) {
                return (
                  (n = sl(n, "get")),
                  r
                    .ready()
                    .then(function () {
                      bi(r, n, { resolve: i, reject: s }), ur(r, n);
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
              return new Bt(function (s, a) {
                if (((n = sl(n, "set")), r == null))
                  throw new TypeError("There must be a value to set.");
                return i
                  .ready()
                  .then(function () {
                    bi(i, n, { resolve: s, reject: a }), ur(i, n, r);
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
              var i = ms(this, "event:".concat(n));
              i.length === 0 &&
                this.callMethod("addEventListener", n).catch(function () {}),
                bi(this, "event:".concat(n), r);
            },
          },
          {
            key: "off",
            value: function (n, r) {
              if (!n) throw new TypeError("You must pass an event name.");
              if (r && typeof r != "function")
                throw new TypeError("The callback must be a function.");
              var i = gs(this, "event:".concat(n), r);
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
                ya.get(this) ||
                new Bt(function (r, i) {
                  i(new Error("Unknown player. Probably unloaded."));
                });
              return Bt.resolve(n);
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
              return _t.isEnabled
                ? _t.request(this.element)
                : this.callMethod("requestFullscreen");
            },
          },
          {
            key: "exitFullscreen",
            value: function () {
              return _t.isEnabled
                ? _t.exit()
                : this.callMethod("exitFullscreen");
            },
          },
          {
            key: "getFullscreen",
            value: function () {
              return _t.isEnabled
                ? Bt.resolve(_t.isFullscreen)
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
              return new Bt(function (r) {
                if (
                  (ya.delete(n),
                  Hr.delete(n.element),
                  n._originalElement &&
                    (Hr.delete(n._originalElement),
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
                  _t.isEnabled &&
                    _t.off("fullscreenchange", n.fullscreenchangeHandler),
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
              return Bt.all([
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
                return new Bt(function (s, a) {
                  return a(new TypeError("Argument must be an array."));
                });
              var r = new Bt(function (s) {
                  return s(null);
                }),
                i = [
                  n[0] ? this.set("colorOne", n[0]) : r,
                  n[1] ? this.set("colorTwo", n[1]) : r,
                  n[2] ? this.set("colorThree", n[2]) : r,
                  n[3] ? this.set("colorFour", n[3]) : r,
                ];
              return Bt.all(i);
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
              var t = sn(
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
                              (o = new Hf(this, i, s)),
                              ur(this, "notifyTimingObjectConnect"),
                              o.addEventListener("disconnect", function () {
                                return ur(a, "notifyTimingObjectDisconnect");
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
  il || ((_t = Nf()), If(), Df(), zf(), Rf());
  class qf {
    constructor() {
      typeof ys != "undefined"
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
            w = function () {
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
            c = new ys(s);
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
          const p = n.querySelector('[data-vimeo-control="pause"]');
          p &&
            p.addEventListener("click", function () {
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
          const h = !!(
              document.fullscreenEnabled ||
              document.webkitFullscreenEnabled ||
              document.mozFullScreenEnabled ||
              document.msFullscreenEnabled
            ),
            g = n.querySelector('[data-vimeo-control="fullscreen"]');
          !h && g && (g.style.display = "none"),
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
              x.addEventListener(E, w);
            }),
            c.on("timeupdate", function (E) {
              x && (x.value = E.seconds),
                S && (S.value = E.seconds),
                _ && (_.textContent = v(Math.trunc(E.seconds)));
            });
          let C;
          n.addEventListener("mousemove", function () {
            n.getAttribute("data-vimeo-hover") === "false" &&
              n.setAttribute("data-vimeo-hover", "true"),
              clearTimeout(C),
              (C = setTimeout(P, 3e3));
          }),
            c.on("ended", A);
        } catch (i) {
          console.error("Error initializing Vimeo player:", i);
        }
      });
    }
  }
  const Bf = () => {
    new qf();
  };
  function fl(e) {
    return (
      e !== null &&
      typeof e == "object" &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function _a(e = {}, t = {}) {
    Object.keys(t).forEach((n) => {
      typeof e[n] == "undefined"
        ? (e[n] = t[n])
        : fl(t[n]) &&
          fl(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          _a(e[n], t[n]);
    });
  }
  const dl = {
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
    return _a(e, dl), e;
  }
  const Vf = {
    document: dl,
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
    return _a(e, Vf), e;
  }
  function Wf(e) {
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
  class zn extends Array {
    constructor(t) {
      typeof t == "number" ? super(t) : (super(...(t || [])), Wf(this));
    }
  }
  function xi(e = []) {
    const t = [];
    return (
      e.forEach((n) => {
        Array.isArray(n) ? t.push(...xi(n)) : t.push(n);
      }),
      t
    );
  }
  function hl(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function Yf(e) {
    const t = [];
    for (let n = 0; n < e.length; n += 1)
      t.indexOf(e[n]) === -1 && t.push(e[n]);
    return t;
  }
  function Xf(e, t) {
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
    if (!t && e instanceof zn) return e;
    if (!e) return new zn(i);
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
      } else i = Xf(e.trim(), t || r);
    } else if (e.nodeType || e === n || e === r) i.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof zn) return e;
      i = e;
    }
    return new zn(Yf(i));
  }
  N.fn = zn.prototype;
  function Gf(...e) {
    const t = xi(e.map((n) => n.split(" ")));
    return (
      this.forEach((n) => {
        n.classList.add(...t);
      }),
      this
    );
  }
  function jf(...e) {
    const t = xi(e.map((n) => n.split(" ")));
    return (
      this.forEach((n) => {
        n.classList.remove(...t);
      }),
      this
    );
  }
  function Uf(...e) {
    const t = xi(e.map((n) => n.split(" ")));
    this.forEach((n) => {
      t.forEach((r) => {
        n.classList.toggle(r);
      });
    });
  }
  function Kf(...e) {
    const t = xi(e.map((n) => n.split(" ")));
    return (
      hl(this, (n) => t.filter((r) => n.classList.contains(r)).length > 0)
        .length > 0
    );
  }
  function Qf(e, t) {
    if (arguments.length === 1 && typeof e == "string")
      return this[0] ? this[0].getAttribute(e) : void 0;
    for (let n = 0; n < this.length; n += 1)
      if (arguments.length === 2) this[n].setAttribute(e, t);
      else
        for (const r in e) (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
    return this;
  }
  function Zf(e) {
    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
    return this;
  }
  function Jf(e) {
    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
    return this;
  }
  function ed(e) {
    for (let t = 0; t < this.length; t += 1)
      this[t].style.transitionDuration = typeof e != "string" ? `${e}ms` : e;
    return this;
  }
  function td(...e) {
    let [t, n, r, i] = e;
    typeof e[1] == "function" && (([t, r, i] = e), (n = void 0)), i || (i = !1);
    function s(c) {
      const u = c.target;
      if (!u) return;
      const f = c.target.dom7EventData || [];
      if ((f.indexOf(c) < 0 && f.unshift(c), N(u).is(n))) r.apply(u, f);
      else {
        const d = N(u).parents();
        for (let p = 0; p < d.length; p += 1) N(d[p]).is(n) && r.apply(d[p], f);
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
  function nd(...e) {
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
  function rd(...e) {
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
  function id(e) {
    const t = this;
    function n(r) {
      r.target === this && (e.call(this, r), t.off("transitionend", n));
    }
    return e && t.on("transitionend", n), this;
  }
  function sd(e) {
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
  function ad(e) {
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
  function od() {
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
  function ld() {
    const e = ce();
    return this[0] ? e.getComputedStyle(this[0], null) : {};
  }
  function cd(e, t) {
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
  function ud(e) {
    return e
      ? (this.forEach((t, n) => {
          e.apply(t, [t, n]);
        }),
        this)
      : this;
  }
  function fd(e) {
    const t = hl(this, e);
    return N(t);
  }
  function dd(e) {
    if (typeof e == "undefined") return this[0] ? this[0].innerHTML : null;
    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
    return this;
  }
  function hd(e) {
    if (typeof e == "undefined")
      return this[0] ? this[0].textContent.trim() : null;
    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
    return this;
  }
  function pd(e) {
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
    if (e.nodeType || e instanceof zn) {
      for (i = e.nodeType ? [e] : e, s = 0; s < i.length; s += 1)
        if (i[s] === r) return !0;
      return !1;
    }
    return !1;
  }
  function md() {
    let e = this[0],
      t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function gd(e) {
    if (typeof e == "undefined") return this;
    const t = this.length;
    if (e > t - 1) return N([]);
    if (e < 0) {
      const n = t + e;
      return n < 0 ? N([]) : N([this[n]]);
    }
    return N([this[e]]);
  }
  function vd(...e) {
    let t;
    const n = Me();
    for (let r = 0; r < e.length; r += 1) {
      t = e[r];
      for (let i = 0; i < this.length; i += 1)
        if (typeof t == "string") {
          const s = n.createElement("div");
          for (s.innerHTML = t; s.firstChild; )
            this[i].appendChild(s.firstChild);
        } else if (t instanceof zn)
          for (let s = 0; s < t.length; s += 1) this[i].appendChild(t[s]);
        else this[i].appendChild(t);
    }
    return this;
  }
  function yd(e) {
    const t = Me();
    let n, r;
    for (n = 0; n < this.length; n += 1)
      if (typeof e == "string") {
        const i = t.createElement("div");
        for (i.innerHTML = e, r = i.childNodes.length - 1; r >= 0; r -= 1)
          this[n].insertBefore(i.childNodes[r], this[n].childNodes[0]);
      } else if (e instanceof zn)
        for (r = 0; r < e.length; r += 1)
          this[n].insertBefore(e[r], this[n].childNodes[0]);
      else this[n].insertBefore(e, this[n].childNodes[0]);
    return this;
  }
  function _d(e) {
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
  function bd(e) {
    const t = [];
    let n = this[0];
    if (!n) return N([]);
    for (; n.nextElementSibling; ) {
      const r = n.nextElementSibling;
      e ? N(r).is(e) && t.push(r) : t.push(r), (n = r);
    }
    return N(t);
  }
  function xd(e) {
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
  function Sd(e) {
    const t = [];
    let n = this[0];
    if (!n) return N([]);
    for (; n.previousElementSibling; ) {
      const r = n.previousElementSibling;
      e ? N(r).is(e) && t.push(r) : t.push(r), (n = r);
    }
    return N(t);
  }
  function Td(e) {
    const t = [];
    for (let n = 0; n < this.length; n += 1)
      this[n].parentNode !== null &&
        (e
          ? N(this[n].parentNode).is(e) && t.push(this[n].parentNode)
          : t.push(this[n].parentNode));
    return N(t);
  }
  function Ed(e) {
    const t = [];
    for (let n = 0; n < this.length; n += 1) {
      let r = this[n].parentNode;
      for (; r; ) e ? N(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
    }
    return N(t);
  }
  function Cd(e) {
    let t = this;
    return typeof e == "undefined"
      ? N([])
      : (t.is(e) || (t = t.parents(e).eq(0)), t);
  }
  function wd(e) {
    const t = [];
    for (let n = 0; n < this.length; n += 1) {
      const r = this[n].querySelectorAll(e);
      for (let i = 0; i < r.length; i += 1) t.push(r[i]);
    }
    return N(t);
  }
  function Pd(e) {
    const t = [];
    for (let n = 0; n < this.length; n += 1) {
      const r = this[n].children;
      for (let i = 0; i < r.length; i += 1)
        (!e || N(r[i]).is(e)) && t.push(r[i]);
    }
    return N(t);
  }
  function kd() {
    for (let e = 0; e < this.length; e += 1)
      this[e].parentNode && this[e].parentNode.removeChild(this[e]);
    return this;
  }
  const pl = {
    addClass: Gf,
    removeClass: jf,
    hasClass: Kf,
    toggleClass: Uf,
    attr: Qf,
    removeAttr: Zf,
    transform: Jf,
    transition: ed,
    on: td,
    off: nd,
    trigger: rd,
    transitionEnd: id,
    outerWidth: sd,
    outerHeight: ad,
    styles: ld,
    offset: od,
    css: cd,
    each: ud,
    html: dd,
    text: hd,
    is: pd,
    index: md,
    eq: gd,
    append: vd,
    prepend: yd,
    next: _d,
    nextAll: bd,
    prev: xd,
    prevAll: Sd,
    parent: Td,
    parents: Ed,
    closest: Cd,
    find: wd,
    children: Pd,
    filter: fd,
    remove: kd,
  };
  Object.keys(pl).forEach((e) => {
    Object.defineProperty(N.fn, e, { value: pl[e], writable: !0 });
  });
  function Md(e) {
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
  function Rn(e, t = 0) {
    return setTimeout(e, t);
  }
  function Pt() {
    return Date.now();
  }
  function $d(e) {
    const t = ce();
    let n;
    return (
      t.getComputedStyle && (n = t.getComputedStyle(e, null)),
      !n && e.currentStyle && (n = e.currentStyle),
      n || (n = e.style),
      n
    );
  }
  function ba(e, t = "x") {
    const n = ce();
    let r, i, s;
    const a = $d(e);
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
  function Si(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      e.constructor &&
      Object.prototype.toString.call(e).slice(8, -1) === "Object"
    );
  }
  function Od(e) {
    return typeof window != "undefined" &&
      typeof window.HTMLElement != "undefined"
      ? e instanceof HTMLElement
      : e && (e.nodeType === 1 || e.nodeType === 11);
  }
  function kt(...e) {
    const t = Object(e[0]),
      n = ["__proto__", "constructor", "prototype"];
    for (let r = 1; r < e.length; r += 1) {
      const i = e[r];
      if (i != null && !Od(i)) {
        const s = Object.keys(Object(i)).filter((a) => n.indexOf(a) < 0);
        for (let a = 0, o = s.length; a < o; a += 1) {
          const l = s[a],
            c = Object.getOwnPropertyDescriptor(i, l);
          c !== void 0 &&
            c.enumerable &&
            (Si(t[l]) && Si(i[l])
              ? i[l].__swiper__
                ? (t[l] = i[l])
                : kt(t[l], i[l])
              : !Si(t[l]) && Si(i[l])
              ? ((t[l] = {}), i[l].__swiper__ ? (t[l] = i[l]) : kt(t[l], i[l]))
              : (t[l] = i[l]));
        }
      }
    }
    return t;
  }
  function Ti(e, t, n) {
    e.style.setProperty(t, n);
  }
  function ml({ swiper: e, targetPosition: t, side: n }) {
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
        let p = i + d * (t - i);
        if ((c(p, t) && (p = t), e.wrapperEl.scrollTo({ [n]: p }), c(p, t))) {
          (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [n]: p });
            }),
            r.cancelAnimationFrame(e.cssModeFrameID);
          return;
        }
        e.cssModeFrameID = r.requestAnimationFrame(u);
      };
    u();
  }
  let xa;
  function Ad() {
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
  function gl() {
    return xa || (xa = Ad()), xa;
  }
  let Sa;
  function Ld({ userAgent: e } = {}) {
    const t = gl(),
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
    let p = r === "MacIntel";
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
        p &&
        t.touch &&
        m.indexOf(`${a}x${o}`) >= 0 &&
        ((c = i.match(/(Version)\/([\d.]+)/)),
        c || (c = [0, 1, "13_0_0"]),
        (p = !1)),
      l && !d && ((s.os = "android"), (s.android = !0)),
      (c || f || u) && ((s.os = "ios"), (s.ios = !0)),
      s
    );
  }
  function Id(e = {}) {
    return Sa || (Sa = Ld(e)), Sa;
  }
  let Ta;
  function Dd() {
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
  function zd() {
    return Ta || (Ta = Dd()), Ta;
  }
  function Rd({ swiper: e, on: t, emit: n }) {
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
              let p = f,
                m = d;
              u.forEach(({ contentBoxSize: h, contentRect: g, target: y }) => {
                (y && y !== e.el) ||
                  ((p = g ? g.width : (h[0] || h).inlineSize),
                  (m = g ? g.height : (h[0] || h).blockSize));
              }),
                (p !== f || m !== d) && a();
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
  function Nd({ swiper: e, extendParams: t, on: n, emit: r }) {
    const i = [],
      s = ce(),
      a = (c, u = {}) => {
        const f = s.MutationObserver || s.WebkitMutationObserver,
          d = new f((p) => {
            if (p.length === 1) {
              r("observerUpdate", p[0]);
              return;
            }
            const m = function () {
              r("observerUpdate", p[0]);
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
  const Fd = {
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
  function Hd() {
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
  function qd() {
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
    const p = [],
      m = [];
    let h = r.slidesOffsetBefore;
    typeof h == "function" && (h = r.slidesOffsetBefore.call(e));
    let g = r.slidesOffsetAfter;
    typeof g == "function" && (g = r.slidesOffsetAfter.call(e));
    const y = e.snapGrid.length,
      v = e.slidesGrid.length;
    let _ = r.spaceBetween,
      x = -h,
      S = 0,
      w = 0;
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
        (Ti(e.wrapperEl, "--swiper-centered-offset-before", ""),
        Ti(e.wrapperEl, "--swiper-centered-offset-after", ""));
    const C = r.grid && r.grid.rows > 1 && e.grid;
    C && e.grid.initSlides(f);
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
      if ((C && e.grid.updateSlide(E, $, f, t), $.css("display") !== "none")) {
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
            const I = n(b, "width"),
              k = n(b, "padding-left"),
              L = n(b, "padding-right"),
              D = n(b, "margin-left"),
              R = n(b, "margin-right"),
              M = b.getPropertyValue("box-sizing");
            if (M && M === "border-box") P = I + D + R;
            else {
              const { clientWidth: B, offsetWidth: K } = $[0];
              P = I + k + L + D + R + (K - B);
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
              w % r.slidesPerGroup === 0 && d.push(x),
              p.push(x))
            : (r.roundLengths && (x = Math.floor(x)),
              (w - Math.min(e.params.slidesPerGroupSkip, w)) %
                e.params.slidesPerGroup ===
                0 && d.push(x),
              p.push(x),
              (x = x + P + _)),
          (e.virtualSize += P + _),
          (S = P),
          (w += 1);
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
      C && e.grid.updateWrapperSize(P, d, t),
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
      d = d.map((b) => (b < 0 ? -h : b > $ ? $ + g : b));
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
          p.forEach((b, T) => {
            p[T] = b + $;
          });
      }
    }
    if (
      (Object.assign(e, {
        slides: u,
        snapGrid: d,
        slidesGrid: p,
        slidesSizesGrid: m,
      }),
      r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
    ) {
      Ti(e.wrapperEl, "--swiper-centered-offset-before", `${-d[0]}px`),
        Ti(
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
      p.length !== v && e.emit("slidesGridLengthChange"),
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
  function Bd(e) {
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
  function Vd() {
    const e = this,
      t = e.slides;
    for (let n = 0; n < t.length; n += 1)
      t[n].swiperSlideOffset = e.isHorizontal()
        ? t[n].offsetLeft
        : t[n].offsetTop;
  }
  function Wd(e = (this && this.translate) || 0) {
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
        p = d + t.slidesSizesGrid[o];
      ((d >= 0 && d < t.size - 1) ||
        (p > 1 && p <= t.size) ||
        (d <= 0 && p >= t.size)) &&
        (t.visibleSlides.push(l),
        t.visibleSlidesIndexes.push(o),
        r.eq(o).addClass(n.slideVisibleClass)),
        (l.progress = i ? -u : u),
        (l.originalProgress = i ? -f : f);
    }
    t.visibleSlides = N(t.visibleSlides);
  }
  function Yd(e) {
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
  function Xd() {
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
  function Gd(e) {
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
  function jd(e) {
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
  const Ud = {
    updateSize: Hd,
    updateSlides: qd,
    updateAutoHeight: Bd,
    updateSlidesOffset: Vd,
    updateSlidesProgress: Wd,
    updateProgress: Yd,
    updateSlidesClasses: Xd,
    updateActiveIndex: Gd,
    updateClickedSlide: jd,
  };
  function Kd(e = this.isHorizontal() ? "x" : "y") {
    const t = this,
      { params: n, rtlTranslate: r, translate: i, $wrapperEl: s } = t;
    if (n.virtualTranslate) return r ? -i : i;
    if (n.cssMode) return i;
    let a = ba(s[0], e);
    return r && (a = -a), a || 0;
  }
  function Qd(e, t) {
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
  function Zd() {
    return -this.snapGrid[0];
  }
  function Jd() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function eh(e = 0, t = this.params.speed, n = !0, r = !0, i) {
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
            ml({ swiper: s, targetPosition: -u, side: f ? "left" : "top" }), !0
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
  const th = {
    getTranslate: Kd,
    setTranslate: Qd,
    minTranslate: Zd,
    maxTranslate: Jd,
    translateTo: eh,
  };
  function nh(e, t) {
    const n = this;
    n.params.cssMode || n.$wrapperEl.transition(e),
      n.emit("setTransition", e, t);
  }
  function vl({ swiper: e, runCallbacks: t, direction: n, step: r }) {
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
  function rh(e = !0, t) {
    const n = this,
      { params: r } = n;
    r.cssMode ||
      (r.autoHeight && n.updateAutoHeight(),
      vl({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
  }
  function ih(e = !0, t) {
    const n = this,
      { params: r } = n;
    (n.animating = !1),
      !r.cssMode &&
        (n.setTransition(0),
        vl({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
  }
  const sh = { setTransition: nh, transitionStart: rh, transitionEnd: ih };
  function ah(e = 0, t = this.params.speed, n = !0, r, i) {
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
      wrapperEl: p,
      enabled: m,
    } = s;
    if ((s.animating && o.preventInteractionOnTransition) || (!m && !r && !i))
      return !1;
    const h = Math.min(s.params.slidesPerGroupSkip, a);
    let g = h + Math.floor((a - h) / s.params.slidesPerGroup);
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
      if (t === 0) {
        const S = s.virtual && s.params.virtual.enabled;
        S &&
          ((s.wrapperEl.style.scrollSnapType = "none"),
          (s._immediateVirtual = !0)),
          (p[_ ? "scrollLeft" : "scrollTop"] = x),
          S &&
            requestAnimationFrame(() => {
              (s.wrapperEl.style.scrollSnapType = ""),
                (s._swiperImmediateVirtual = !1);
            });
      } else {
        if (!s.support.smoothScroll)
          return (
            ml({ swiper: s, targetPosition: x, side: _ ? "left" : "top" }), !0
          );
        p.scrollTo({ [_ ? "left" : "top"]: x, behavior: "smooth" });
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
  function oh(e = 0, t = this.params.speed, n = !0, r) {
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
  function lh(e = this.params.speed, t = !0, n) {
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
  function ch(e = this.params.speed, t = !0, n) {
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
      p = a.map((g) => f(g));
    let m = a[p.indexOf(d) - 1];
    if (typeof m == "undefined" && i.cssMode) {
      let g;
      a.forEach((y, v) => {
        d >= y && (g = v);
      }),
        typeof g != "undefined" && (m = a[g > 0 ? g - 1 : g]);
    }
    let h = 0;
    if (
      (typeof m != "undefined" &&
        ((h = o.indexOf(m)),
        h < 0 && (h = r.activeIndex - 1),
        i.slidesPerView === "auto" &&
          i.slidesPerGroup === 1 &&
          i.slidesPerGroupAuto &&
          ((h = h - r.slidesPerViewDynamic("previous", !0) + 1),
          (h = Math.max(h, 0)))),
      i.rewind && r.isBeginning)
    ) {
      const g =
        r.params.virtual && r.params.virtual.enabled && r.virtual
          ? r.virtual.slides.length - 1
          : r.slides.length - 1;
      return r.slideTo(g, e, t, n);
    }
    return r.slideTo(h, e, t, n);
  }
  function uh(e = this.params.speed, t = !0, n) {
    const r = this;
    return r.slideTo(r.activeIndex, e, t, n);
  }
  function fh(e = this.params.speed, t = !0, n, r = 0.5) {
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
  function dh() {
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
              Rn(() => {
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
            Rn(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i);
    } else e.slideTo(i);
  }
  const hh = {
    slideTo: ah,
    slideToLoop: oh,
    slideNext: lh,
    slidePrev: ch,
    slideReset: uh,
    slideToClosest: fh,
    slideToClickedSlide: dh,
  };
  function ph() {
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
  function mh() {
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
  function gh() {
    const e = this,
      { $wrapperEl: t, params: n, slides: r } = e;
    t
      .children(
        `.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`
      )
      .remove(),
      r.removeAttr("data-swiper-slide-index");
  }
  const vh = { loopCreate: ph, loopFix: mh, loopDestroy: gh };
  function yh(e) {
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
  function _h() {
    const e = this;
    e.support.touch ||
      (e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode ||
      (e[
        e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = "");
  }
  const bh = { setGrabCursor: yh, unsetGrabCursor: _h };
  function xh(e, t = this) {
    function n(r) {
      if (!r || r === Me() || r === ce()) return null;
      r.assignedSlot && (r = r.assignedSlot);
      const i = r.closest(e);
      return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
    }
    return n(t);
  }
  function Sh(e) {
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
      p = !!(l.target && l.target.shadowRoot);
    if (s.noSwiping && (p ? xh(d, c[0]) : c.closest(d)[0])) {
      t.allowClick = !0;
      return;
    }
    if (s.swipeHandler && !c.closest(s.swipeHandler)[0]) return;
    (a.currentX = l.type === "touchstart" ? l.targetTouches[0].pageX : l.pageX),
      (a.currentY =
        l.type === "touchstart" ? l.targetTouches[0].pageY : l.pageY);
    const m = a.currentX,
      h = a.currentY,
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
      (a.startY = h),
      (i.touchStartTime = Pt()),
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
  function Th(e) {
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
          (r.touchStartTime = Pt()));
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
      p = s.currentY - s.startY;
    if (
      n.params.threshold &&
      Math.sqrt(wt(d, 2) + wt(p, 2)) < n.params.threshold
    )
      return;
    if (typeof r.isScrolling == "undefined") {
      let y;
      (n.isHorizontal() && s.currentY === s.startY) ||
      (n.isVertical() && s.currentX === s.startX)
        ? (r.isScrolling = !1)
        : d * d + p * p >= 25 &&
          ((y = (Math.atan2(Math.abs(p), Math.abs(d)) * 180) / Math.PI),
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
    let m = n.isHorizontal() ? d : p;
    (s.diff = m),
      (m *= i.touchRatio),
      a && (m = -m),
      (n.swipeDirection = m > 0 ? "prev" : "next"),
      (r.currentTranslate = m + r.startTranslate);
    let h = !0,
      g = i.resistanceRatio;
    if (
      (i.touchReleaseOnEdges && (g = 0),
      m > 0 && r.currentTranslate > n.minTranslate()
        ? ((h = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              wt(-n.minTranslate() + r.startTranslate + m, g)))
        : m < 0 &&
          r.currentTranslate < n.maxTranslate() &&
          ((h = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              wt(n.maxTranslate() - r.startTranslate - m, g))),
      h && (l.preventedByNestedSwiper = !0),
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
  function Eh(e) {
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
    const c = Pt(),
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
      ((n.lastClickTime = Pt()),
      Rn(() => {
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
      p = t.slidesSizesGrid[0];
    for (
      let v = 0;
      v < a.length;
      v += v < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
    ) {
      const _ = v < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      typeof a[v + _] != "undefined"
        ? f >= a[v] && f < a[v + _] && ((d = v), (p = a[v + _] - a[v]))
        : f >= a[v] && ((d = v), (p = a[a.length - 1] - a[a.length - 2]));
    }
    let m = null,
      h = null;
    r.rewind &&
      (t.isBeginning
        ? (h =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (m = 0));
    const g = (f - a[d]) / p,
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
            : h !== null && g < 0 && Math.abs(g) > r.longSwipesRatio
            ? t.slideTo(h)
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
          t.swipeDirection === "prev" && t.slideTo(h !== null ? h : d));
    }
  }
  function yl() {
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
  function Ch(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function wh() {
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
  let _l = !1;
  function Ph() {}
  const bl = (e, t) => {
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
            yl,
            !0
          )
        : e[f]("observerUpdate", yl, !0);
  };
  function kh() {
    const e = this,
      t = Me(),
      { params: n, support: r } = e;
    (e.onTouchStart = Sh.bind(e)),
      (e.onTouchMove = Th.bind(e)),
      (e.onTouchEnd = Eh.bind(e)),
      n.cssMode && (e.onScroll = wh.bind(e)),
      (e.onClick = Ch.bind(e)),
      r.touch && !_l && (t.addEventListener("touchstart", Ph), (_l = !0)),
      bl(e, "on");
  }
  function Mh() {
    bl(this, "off");
  }
  const $h = { attachEvents: kh, detachEvents: Mh },
    xl = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  function Oh() {
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
      u = xl(e, i),
      f = xl(e, c),
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
    const p = c.direction && c.direction !== i.direction,
      m = i.loop && (c.slidesPerView !== i.slidesPerView || p);
    p && n && e.changeDirection(), kt(e.params, c);
    const h = e.params.enabled;
    Object.assign(e, {
      allowTouchMove: e.params.allowTouchMove,
      allowSlideNext: e.params.allowSlideNext,
      allowSlidePrev: e.params.allowSlidePrev,
    }),
      d && !h ? e.disable() : !d && h && e.enable(),
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
  function Ah(e, t = "window", n) {
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
  const Lh = { setBreakpoint: Oh, getBreakpoint: Ah };
  function Ih(e, t) {
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
  function Dh() {
    const e = this,
      { classNames: t, params: n, rtl: r, $el: i, device: s, support: a } = e,
      o = Ih(
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
  function zh() {
    const e = this,
      { $el: t, classNames: n } = e;
    t.removeClass(n.join(" ")), e.emitContainerClasses();
  }
  const Rh = { addClasses: Dh, removeClasses: zh };
  function Nh(e, t, n, r, i, s) {
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
  function Fh() {
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
  const Hh = { loadImage: Nh, preloadImages: Fh };
  function qh() {
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
  const Bh = { checkOverflow: qh },
    Sl = {
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
  function Vh(e, t) {
    return function (r = {}) {
      const i = Object.keys(r)[0],
        s = r[i];
      if (typeof s != "object" || s === null) {
        kt(t, r);
        return;
      }
      if (
        (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
          e[i] === !0 &&
          (e[i] = { auto: !0 }),
        !(i in e && "enabled" in s))
      ) {
        kt(t, r);
        return;
      }
      e[i] === !0 && (e[i] = { enabled: !0 }),
        typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
        e[i] || (e[i] = { enabled: !1 }),
        kt(t, r);
    };
  }
  const Ea = {
      eventsEmitter: Fd,
      update: Ud,
      translate: th,
      transition: sh,
      slide: hh,
      loop: vh,
      grabCursor: bh,
      events: $h,
      breakpoints: Lh,
      checkOverflow: Bh,
      classes: Rh,
      images: Hh,
    },
    Ca = {};
  class ft {
    constructor(...t) {
      let n, r;
      if (
        (t.length === 1 &&
        t[0].constructor &&
        Object.prototype.toString.call(t[0]).slice(8, -1) === "Object"
          ? (r = t[0])
          : ([n, r] = t),
        r || (r = {}),
        (r = kt({}, r)),
        n && !r.el && (r.el = n),
        r.el && N(r.el).length > 1)
      ) {
        const o = [];
        return (
          N(r.el).each((l) => {
            const c = kt({}, r, { el: l });
            o.push(new ft(c));
          }),
          o
        );
      }
      const i = this;
      (i.__swiper__ = !0),
        (i.support = gl()),
        (i.device = Id({ userAgent: r.userAgent })),
        (i.browser = zd()),
        (i.eventsListeners = {}),
        (i.eventsAnyListeners = []),
        (i.modules = [...i.__modules__]),
        r.modules && Array.isArray(r.modules) && i.modules.push(...r.modules);
      const s = {};
      i.modules.forEach((o) => {
        o({
          swiper: i,
          extendParams: Vh(r, s),
          on: i.on.bind(i),
          once: i.once.bind(i),
          off: i.off.bind(i),
          emit: i.emit.bind(i),
        });
      });
      const a = kt({}, Sl, s);
      return (
        (i.params = kt({}, a, Ca, r)),
        (i.originalParams = kt({}, i.params)),
        (i.passedParams = kt({}, r)),
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
            lastClickTime: Pt(),
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
        for (let p = c + 1; p < s.length; p += 1)
          s[p] &&
            !d &&
            ((f += s[p].swiperSlideSize), (u += 1), f > l && (d = !0));
        for (let p = c - 1; p >= 0; p -= 1)
          s[p] &&
            !d &&
            ((f += s[p].swiperSlideSize), (u += 1), f > l && (d = !0));
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
          t !== !1 && ((r.$el[0].swiper = null), Md(r)),
          (r.destroyed = !0)),
        null
      );
    }
    static extendDefaults(t) {
      kt(Ca, t);
    }
    static get extendedDefaults() {
      return Ca;
    }
    static get defaults() {
      return Sl;
    }
    static installModule(t) {
      ft.prototype.__modules__ || (ft.prototype.__modules__ = []);
      const n = ft.prototype.__modules__;
      typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
    }
    static use(t) {
      return Array.isArray(t)
        ? (t.forEach((n) => ft.installModule(n)), ft)
        : (ft.installModule(t), ft);
    }
  }
  Object.keys(Ea).forEach((e) => {
    Object.keys(Ea[e]).forEach((t) => {
      ft.prototype[t] = Ea[e][t];
    });
  }),
    ft.use([Rd, Nd]);
  function Wh({ swiper: e, extendParams: t, on: n, emit: r }) {
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
      const p = e.params.virtual;
      if (p.cache && e.virtual.cache[d]) return e.virtual.cache[d];
      const m = p.renderSlide
        ? N(p.renderSlide.call(e, f, d))
        : N(
            `<div class="${e.params.slideClass}" data-swiper-slide-index="${d}">${f}</div>`
          );
      return (
        m.attr("data-swiper-slide-index") ||
          m.attr("data-swiper-slide-index", d),
        p.cache && (e.virtual.cache[d] = m),
        m
      );
    }
    function a(f) {
      const {
          slidesPerView: d,
          slidesPerGroup: p,
          centeredSlides: m,
        } = e.params,
        { addSlidesBefore: h, addSlidesAfter: g } = e.params.virtual,
        { from: y, to: v, slides: _, slidesGrid: x, offset: S } = e.virtual;
      e.params.cssMode || e.updateActiveIndex();
      const w = e.activeIndex || 0;
      let C;
      e.rtlTranslate ? (C = "right") : (C = e.isHorizontal() ? "left" : "top");
      let P, A;
      m
        ? ((P = Math.floor(d / 2) + p + g), (A = Math.floor(d / 2) + p + h))
        : ((P = d + (p - 1) + g), (A = p + h));
      const E = Math.max((w || 0) - A, 0),
        $ = Math.min((w || 0) + P, _.length - 1),
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
        e.slidesGrid !== x && b !== S && e.slides.css(C, `${b}px`),
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
            for (let D = E; D <= $; D += 1) L.push(_[D]);
            return L;
          })(),
        }),
          e.params.virtual.renderExternalUpdate ? T() : r("virtualUpdate");
        return;
      }
      const O = [],
        I = [];
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
            ? I.push(k)
            : (k > v && I.push(k), k < y && O.push(k)));
      I.forEach((k) => {
        e.$wrapperEl.append(s(_[k], k));
      }),
        O.sort((k, L) => L - k).forEach((k) => {
          e.$wrapperEl.prepend(s(_[k], k));
        }),
        e.$wrapperEl.children(".swiper-slide").css(C, `${b}px`),
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
      let p = d + 1,
        m = 1;
      if (Array.isArray(f)) {
        for (let h = 0; h < f.length; h += 1)
          f[h] && e.virtual.slides.unshift(f[h]);
        (p = d + f.length), (m = f.length);
      } else e.virtual.slides.unshift(f);
      if (e.params.virtual.cache) {
        const h = e.virtual.cache,
          g = {};
        Object.keys(h).forEach((y) => {
          const v = h[y],
            _ = v.attr("data-swiper-slide-index");
          _ && v.attr("data-swiper-slide-index", parseInt(_, 10) + m),
            (g[parseInt(y, 10) + m] = v);
        }),
          (e.virtual.cache = g);
      }
      a(!0), e.slideTo(p, 0);
    }
    function c(f) {
      if (typeof f == "undefined" || f === null) return;
      let d = e.activeIndex;
      if (Array.isArray(f))
        for (let p = f.length - 1; p >= 0; p -= 1)
          e.virtual.slides.splice(f[p], 1),
            e.params.virtual.cache && delete e.virtual.cache[f[p]],
            f[p] < d && (d -= 1),
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
          Ti(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
      }),
      Object.assign(e.virtual, {
        appendSlide: o,
        prependSlide: l,
        removeSlide: c,
        removeAllSlides: u,
        update: a,
      });
  }
  function Yh({ swiper: e, extendParams: t, on: n, emit: r }) {
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
        p = e.params.keyboard.pageUpDown,
        m = p && d === 33,
        h = p && d === 34,
        g = d === 37,
        y = d === 39,
        v = d === 38,
        _ = d === 40;
      if (
        (!e.allowSlideNext &&
          ((e.isHorizontal() && y) || (e.isVertical() && _) || h)) ||
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
        if (e.params.keyboard.onlyInViewport && (m || h || g || y || v || _)) {
          let x = !1;
          if (
            e.$el.parents(`.${e.params.slideClass}`).length > 0 &&
            e.$el.parents(`.${e.params.slideActiveClass}`).length === 0
          )
            return;
          const S = e.$el,
            w = S[0].clientWidth,
            C = S[0].clientHeight,
            P = s.innerWidth,
            A = s.innerHeight,
            E = e.$el.offset();
          u && (E.left -= e.$el[0].scrollLeft);
          const $ = [
            [E.left, E.top],
            [E.left + w, E.top],
            [E.left, E.top + C],
            [E.left + w, E.top + C],
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
          ? ((m || h || g || y) &&
              (f.preventDefault ? f.preventDefault() : (f.returnValue = !1)),
            (((h || y) && !u) || ((m || g) && u)) && e.slideNext(),
            (((m || g) && !u) || ((h || y) && u)) && e.slidePrev())
          : ((m || h || v || _) &&
              (f.preventDefault ? f.preventDefault() : (f.returnValue = !1)),
            (h || _) && e.slideNext(),
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
  function Xh({ swiper: e, extendParams: t, on: n, emit: r }) {
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
      a = Pt(),
      o;
    const l = [];
    function c(v) {
      let w = 0,
        C = 0,
        P = 0,
        A = 0;
      return (
        "detail" in v && (C = v.detail),
        "wheelDelta" in v && (C = -v.wheelDelta / 120),
        "wheelDeltaY" in v && (C = -v.wheelDeltaY / 120),
        "wheelDeltaX" in v && (w = -v.wheelDeltaX / 120),
        "axis" in v && v.axis === v.HORIZONTAL_AXIS && ((w = C), (C = 0)),
        (P = w * 10),
        (A = C * 10),
        "deltaY" in v && (A = v.deltaY),
        "deltaX" in v && (P = v.deltaX),
        v.shiftKey && !P && ((P = A), (A = 0)),
        (P || A) &&
          v.deltaMode &&
          (v.deltaMode === 1
            ? ((P *= 40), (A *= 40))
            : ((P *= 800), (A *= 800))),
        P && !w && (w = P < 1 ? -1 : 1),
        A && !C && (C = A < 1 ? -1 : 1),
        { spinX: w, spinY: C, pixelX: P, pixelY: A }
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
          Pt() - a < e.params.mousewheel.thresholdTime)
        ? !1
        : v.delta >= 6 && Pt() - a < 60
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
    function p(v) {
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
      let w = e.$el;
      if (
        (e.params.mousewheel.eventsTarget !== "container" &&
          (w = N(e.params.mousewheel.eventsTarget)),
        !e.mouseEntered && !w[0].contains(_.target) && !S.releaseOnEdges)
      )
        return !0;
      _.originalEvent && (_ = _.originalEvent);
      let C = 0;
      const P = e.rtlTranslate ? -1 : 1,
        A = c(_);
      if (S.forceToAxis)
        if (e.isHorizontal())
          if (Math.abs(A.pixelX) > Math.abs(A.pixelY)) C = -A.pixelX * P;
          else return !0;
        else if (Math.abs(A.pixelY) > Math.abs(A.pixelX)) C = -A.pixelY;
        else return !0;
      else
        C = Math.abs(A.pixelX) > Math.abs(A.pixelY) ? -A.pixelX * P : -A.pixelY;
      if (C === 0) return !0;
      S.invert && (C = -C);
      let E = e.getTranslate() + C * S.sensitivity;
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
          time: Pt(),
          delta: Math.abs(C),
          direction: Math.sign(C),
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
          p($))
        )
          return !0;
      } else {
        const $ = { time: Pt(), delta: Math.abs(C), direction: Math.sign(C) },
          b =
            o &&
            $.time < o.time + 500 &&
            $.delta <= o.delta &&
            $.direction === o.direction;
        if (!b) {
          (o = void 0), e.params.loop && e.loopFix();
          let T = e.getTranslate() + C * S.sensitivity;
          const O = e.isBeginning,
            I = e.isEnd;
          if (
            (T >= e.minTranslate() && (T = e.minTranslate()),
            T <= e.maxTranslate() && (T = e.maxTranslate()),
            e.setTransition(0),
            e.setTranslate(T),
            e.updateProgress(),
            e.updateActiveIndex(),
            e.updateSlidesClasses(),
            ((!O && e.isBeginning) || (!I && e.isEnd)) &&
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
              const D = C > 0 ? 0.8 : 0.2;
              (o = $),
                l.splice(0),
                (s = Rn(() => {
                  e.slideToClosest(e.params.speed, !0, void 0, D);
                }, 0));
            }
            s ||
              (s = Rn(() => {
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
    function h(v) {
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
        : (h("on"), (e.mousewheel.enabled = !0), !0);
    }
    function y() {
      return e.params.cssMode
        ? (e.wrapperEl.addEventListener(event, m), !0)
        : e.mousewheel.enabled
        ? (h("off"), (e.mousewheel.enabled = !1), !0)
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
  function wa(e, t, n, r) {
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
  function Gh({ swiper: e, extendParams: t, on: n, emit: r }) {
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
    function i(p) {
      let m;
      return (
        p &&
          ((m = N(p)),
          e.params.uniqueNavElements &&
            typeof p == "string" &&
            m.length > 1 &&
            e.$el.find(p).length === 1 &&
            (m = e.$el.find(p))),
        m
      );
    }
    function s(p, m) {
      const h = e.params.navigation;
      p &&
        p.length > 0 &&
        (p[m ? "addClass" : "removeClass"](h.disabledClass),
        p[0] && p[0].tagName === "BUTTON" && (p[0].disabled = m),
        e.params.watchOverflow &&
          e.enabled &&
          p[e.isLocked ? "addClass" : "removeClass"](h.lockClass));
    }
    function a() {
      if (e.params.loop) return;
      const { $nextEl: p, $prevEl: m } = e.navigation;
      s(m, e.isBeginning && !e.params.rewind),
        s(p, e.isEnd && !e.params.rewind);
    }
    function o(p) {
      p.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
          (e.slidePrev(), r("navigationPrev"));
    }
    function l(p) {
      p.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) &&
          (e.slideNext(), r("navigationNext"));
    }
    function c() {
      const p = e.params.navigation;
      if (
        ((e.params.navigation = wa(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !(p.nextEl || p.prevEl))
      )
        return;
      const m = i(p.nextEl),
        h = i(p.prevEl);
      m && m.length > 0 && m.on("click", l),
        h && h.length > 0 && h.on("click", o),
        Object.assign(e.navigation, {
          $nextEl: m,
          nextEl: m && m[0],
          $prevEl: h,
          prevEl: h && h[0],
        }),
        e.enabled ||
          (m && m.addClass(p.lockClass), h && h.addClass(p.lockClass));
    }
    function u() {
      const { $nextEl: p, $prevEl: m } = e.navigation;
      p &&
        p.length &&
        (p.off("click", l), p.removeClass(e.params.navigation.disabledClass)),
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
        const { $nextEl: p, $prevEl: m } = e.navigation;
        p &&
          p[e.enabled ? "removeClass" : "addClass"](
            e.params.navigation.lockClass
          ),
          m &&
            m[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            );
      }),
      n("click", (p, m) => {
        const { $nextEl: h, $prevEl: g } = e.navigation,
          y = m.target;
        if (e.params.navigation.hideOnClick && !N(y).is(g) && !N(y).is(h)) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === y || e.pagination.el.contains(y))
          )
            return;
          let v;
          h
            ? (v = h.hasClass(e.params.navigation.hiddenClass))
            : g && (v = g.hasClass(e.params.navigation.hiddenClass)),
            r(v === !0 ? "navigationShow" : "navigationHide"),
            h && h.toggleClass(e.params.navigation.hiddenClass),
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
  function xn(e = "") {
    return `.${e
      .trim()
      .replace(/([\.:!\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }
  function jh({ swiper: e, extendParams: t, on: n, emit: r }) {
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
        formatFractionCurrent: (h) => h,
        formatFractionTotal: (h) => h,
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
    function l(h, g) {
      const { bulletActiveClass: y } = e.params.pagination;
      h[g]().addClass(`${y}-${g}`)[g]().addClass(`${y}-${g}-${g}`);
    }
    function c() {
      const h = e.rtl,
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
        let w, C, P;
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
            (w = Math.max(_ - a, 0)),
            (C = w + (Math.min(S.length, g.dynamicMainBullets) - 1)),
            (P = (C + w) / 2)),
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
                ($ >= w && $ <= C && E.addClass(`${g.bulletActiveClass}-main`),
                $ === w && l(E, "prev"),
                $ === C && l(E, "next"));
          });
        else {
          const A = S.eq(_),
            E = A.index();
          if ((A.addClass(g.bulletActiveClass), g.dynamicBullets)) {
            const $ = S.eq(w),
              b = S.eq(C);
            for (let T = w; T <= C; T += 1)
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
            $ = h ? "right" : "left";
          S.css(e.isHorizontal() ? $ : "top", `${E}px`);
        }
      }
      if (
        (g.type === "fraction" &&
          (v.find(xn(g.currentClass)).text(g.formatFractionCurrent(_ + 1)),
          v.find(xn(g.totalClass)).text(g.formatFractionTotal(x))),
        g.type === "progressbar")
      ) {
        let S;
        g.progressbarOpposite
          ? (S = e.isHorizontal() ? "vertical" : "horizontal")
          : (S = e.isHorizontal() ? "horizontal" : "vertical");
        const w = (_ + 1) / x;
        let C = 1,
          P = 1;
        S === "horizontal" ? (C = w) : (P = w),
          v
            .find(xn(g.progressbarFillClass))
            .transform(`translate3d(0,0,0) scaleX(${C}) scaleY(${P})`)
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
      const h = e.params.pagination;
      if (o()) return;
      const g =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        y = e.pagination.$el;
      let v = "";
      if (h.type === "bullets") {
        let _ = e.params.loop
          ? Math.ceil((g - e.loopedSlides * 2) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode &&
          e.params.freeMode.enabled &&
          !e.params.loop &&
          _ > g &&
          (_ = g);
        for (let x = 0; x < _; x += 1)
          h.renderBullet
            ? (v += h.renderBullet.call(e, x, h.bulletClass))
            : (v += `<${h.bulletElement} class="${h.bulletClass}"></${h.bulletElement}>`);
        y.html(v), (e.pagination.bullets = y.find(xn(h.bulletClass)));
      }
      h.type === "fraction" &&
        (h.renderFraction
          ? (v = h.renderFraction.call(e, h.currentClass, h.totalClass))
          : (v = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),
        y.html(v)),
        h.type === "progressbar" &&
          (h.renderProgressbar
            ? (v = h.renderProgressbar.call(e, h.progressbarFillClass))
            : (v = `<span class="${h.progressbarFillClass}"></span>`),
          y.html(v)),
        h.type !== "custom" && r("paginationRender", e.pagination.$el[0]);
    }
    function f() {
      e.params.pagination = wa(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        { el: "swiper-pagination" }
      );
      const h = e.params.pagination;
      if (!h.el) return;
      let g = N(h.el);
      g.length !== 0 &&
        (e.params.uniqueNavElements &&
          typeof h.el == "string" &&
          g.length > 1 &&
          ((g = e.$el.find(h.el)),
          g.length > 1 &&
            (g = g.filter((y) => N(y).parents(".swiper")[0] === e.el))),
        h.type === "bullets" && h.clickable && g.addClass(h.clickableClass),
        g.addClass(h.modifierClass + h.type),
        g.addClass(e.isHorizontal() ? h.horizontalClass : h.verticalClass),
        h.type === "bullets" &&
          h.dynamicBullets &&
          (g.addClass(`${h.modifierClass}${h.type}-dynamic`),
          (a = 0),
          h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)),
        h.type === "progressbar" &&
          h.progressbarOpposite &&
          g.addClass(h.progressbarOppositeClass),
        h.clickable &&
          g.on("click", xn(h.bulletClass), function (v) {
            v.preventDefault();
            let _ = N(this).index() * e.params.slidesPerGroup;
            e.params.loop && (_ += e.loopedSlides), e.slideTo(_);
          }),
        Object.assign(e.pagination, { $el: g, el: g[0] }),
        e.enabled || g.addClass(h.lockClass));
    }
    function d() {
      const h = e.params.pagination;
      if (o()) return;
      const g = e.pagination.$el;
      g.removeClass(h.hiddenClass),
        g.removeClass(h.modifierClass + h.type),
        g.removeClass(e.isHorizontal() ? h.horizontalClass : h.verticalClass),
        e.pagination.bullets &&
          e.pagination.bullets.removeClass &&
          e.pagination.bullets.removeClass(h.bulletActiveClass),
        h.clickable && g.off("click", xn(h.bulletClass));
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
        const { $el: h } = e.pagination;
        h &&
          h[e.enabled ? "removeClass" : "addClass"](
            e.params.pagination.lockClass
          );
      }),
      n("lock unlock", () => {
        c();
      }),
      n("click", (h, g) => {
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
    const p = () => {
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
      enable: p,
      disable: m,
      render: u,
      update: c,
      init: f,
      destroy: d,
    });
  }
  function Uh({ swiper: e, extendParams: t, on: n, emit: r }) {
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
        { $dragEl: O, $el: I } = $,
        k = e.params.scrollbar;
      let L = c,
        D = (u - c) * T;
      b
        ? ((D = -D), D > 0 ? ((L = c - D), (D = 0)) : -D + c > u && (L = u + D))
        : D < 0
        ? ((L = c + D), (D = 0))
        : D + c > u && (L = u - D),
        e.isHorizontal()
          ? (O.transform(`translate3d(${D}px, 0, 0)`),
            (O[0].style.width = `${L}px`))
          : (O.transform(`translate3d(0px, ${D}px, 0)`),
            (O[0].style.height = `${L}px`)),
        k.hide &&
          (clearTimeout(a),
          (I[0].style.opacity = 1),
          (a = setTimeout(() => {
            (I[0].style.opacity = 0), I.transition(400);
          }, 1e3)));
    }
    function p($) {
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
    function h($) {
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
      let I;
      (I =
        (h($) -
          O.offset()[e.isHorizontal() ? "left" : "top"] -
          (l !== null ? l : c / 2)) /
        (u - c)),
        (I = Math.max(Math.min(I, 1), 0)),
        T && (I = 1 - I);
      const k = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * I;
      e.updateProgress(k),
        e.setTranslate(k),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    }
    function y($) {
      const b = e.params.scrollbar,
        { scrollbar: T, $wrapperEl: O } = e,
        { $el: I, $dragEl: k } = T;
      (s = !0),
        (l =
          $.target === k[0] || $.target === k
            ? h($) -
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
        I.transition(0),
        b.hide && I.css("opacity", 1),
        e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
        r("scrollbarDragStart", $);
    }
    function v($) {
      const { scrollbar: b, $wrapperEl: T } = e,
        { $el: O, $dragEl: I } = b;
      s &&
        ($.preventDefault ? $.preventDefault() : ($.returnValue = !1),
        g($),
        T.transition(0),
        O.transition(0),
        I.transition(0),
        r("scrollbarDragMove", $));
    }
    function _($) {
      const b = e.params.scrollbar,
        { scrollbar: T, $wrapperEl: O } = e,
        { $el: I } = T;
      s &&
        ((s = !1),
        e.params.cssMode &&
          (e.$wrapperEl.css("scroll-snap-type", ""), O.transition("")),
        b.hide &&
          (clearTimeout(o),
          (o = Rn(() => {
            I.css("opacity", 0), I.transition(400);
          }, 1e3))),
        r("scrollbarDragEnd", $),
        b.snapOnRelease && e.slideToClosest());
    }
    function x($) {
      const {
          scrollbar: b,
          touchEventsTouch: T,
          touchEventsDesktop: O,
          params: I,
          support: k,
        } = e,
        L = b.$el;
      if (!L) return;
      const D = L[0],
        R =
          k.passiveListener && I.passiveListeners
            ? { passive: !1, capture: !1 }
            : !1,
        M =
          k.passiveListener && I.passiveListeners
            ? { passive: !0, capture: !1 }
            : !1;
      if (!D) return;
      const B = $ === "on" ? "addEventListener" : "removeEventListener";
      k.touch
        ? (D[B](T.start, y, R), D[B](T.move, v, R), D[B](T.end, _, M))
        : (D[B](O.start, y, R), i[B](O.move, v, R), i[B](O.end, _, M));
    }
    function S() {
      !e.params.scrollbar.el || !e.scrollbar.el || x("on");
    }
    function w() {
      !e.params.scrollbar.el || !e.scrollbar.el || x("off");
    }
    function C() {
      const { scrollbar: $, $el: b } = e;
      e.params.scrollbar = wa(
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
      let I = O.find(`.${e.params.scrollbar.dragClass}`);
      I.length === 0 &&
        ((I = N(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
        O.append(I)),
        Object.assign($, { $el: O, el: O[0], $dragEl: I, dragEl: I[0] }),
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
        w();
    }
    n("init", () => {
      e.params.scrollbar.enabled === !1 ? E() : (C(), m(), d());
    }),
      n("update resize observerUpdate lock unlock", () => {
        m();
      }),
      n("setTranslate", () => {
        d();
      }),
      n("setTransition", ($, b) => {
        p(b);
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
          C(),
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
      init: C,
      destroy: P,
    });
  }
  function Kh({ swiper: e, extendParams: t, on: n }) {
    t({ parallax: { enabled: !1 } });
    const r = (a, o) => {
        const { rtl: l } = e,
          c = N(a),
          u = l ? -1 : 1,
          f = c.attr("data-swiper-parallax") || "0";
        let d = c.attr("data-swiper-parallax-x"),
          p = c.attr("data-swiper-parallax-y");
        const m = c.attr("data-swiper-parallax-scale"),
          h = c.attr("data-swiper-parallax-opacity");
        if (
          (d || p
            ? ((d = d || "0"), (p = p || "0"))
            : e.isHorizontal()
            ? ((d = f), (p = "0"))
            : ((p = f), (d = "0")),
          d.indexOf("%") >= 0
            ? (d = `${parseInt(d, 10) * o * u}%`)
            : (d = `${d * o * u}px`),
          p.indexOf("%") >= 0
            ? (p = `${parseInt(p, 10) * o}%`)
            : (p = `${p * o}px`),
          typeof h != "undefined" && h !== null)
        ) {
          const g = h - (h - 1) * (1 - Math.abs(o));
          c[0].style.opacity = g;
        }
        if (typeof m == "undefined" || m === null)
          c.transform(`translate3d(${d}, ${p}, 0px)`);
        else {
          const g = m - (m - 1) * (1 - Math.abs(o));
          c.transform(`translate3d(${d}, ${p}, 0px) scale(${g})`);
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
                .each((p) => {
                  r(p, d);
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
  function Qh({ swiper: e, extendParams: t, on: n, emit: r }) {
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
    let p = 1;
    Object.defineProperty(e.zoom, "scale", {
      get() {
        return p;
      },
      set(k) {
        if (p !== k) {
          const L = u.$imageEl ? u.$imageEl[0] : void 0,
            D = u.$slideEl ? u.$slideEl[0] : void 0;
          r("zoomChange", k, L, D);
        }
        p = k;
      },
    });
    function m(k) {
      if (k.targetTouches.length < 2) return 1;
      const L = k.targetTouches[0].pageX,
        D = k.targetTouches[0].pageY,
        R = k.targetTouches[1].pageX,
        M = k.targetTouches[1].pageY;
      return Math.sqrt(wt(R - L, 2) + wt(M - D, 2));
    }
    function h(k) {
      const L = e.support,
        D = e.params.zoom;
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
      const L = e.support,
        D = e.params.zoom,
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
        k.type === "gesturechange" && h(k);
        return;
      }
      L.gestures
        ? (R.scale = k.scale * s)
        : (R.scale = (u.scaleMove / u.scaleStart) * s),
        R.scale > u.maxRatio &&
          (R.scale = u.maxRatio - 1 + wt(R.scale - u.maxRatio + 1, 0.5)),
        R.scale < D.minRatio &&
          (R.scale = D.minRatio + 1 - wt(D.minRatio - R.scale + 1, 0.5)),
        u.$imageEl.transform(`translate3d(0,0,0) scale(${R.scale})`);
    }
    function y(k) {
      const L = e.device,
        D = e.support,
        R = e.params.zoom,
        M = e.zoom;
      if (!D.gestures) {
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
        (f.startX = ba(u.$imageWrapEl[0], "x") || 0),
        (f.startY = ba(u.$imageWrapEl[0], "y") || 0),
        (u.slideWidth = u.$slideEl[0].offsetWidth),
        (u.slideHeight = u.$slideEl[0].offsetHeight),
        u.$imageWrapEl.transition(0));
      const D = f.width * L.scale,
        R = f.height * L.scale;
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
        D = 300;
      const R = d.x * L,
        M = f.currentX + R,
        B = d.y * D,
        K = f.currentY + B;
      d.x !== 0 && (L = Math.abs((M - f.currentX) / d.x)),
        d.y !== 0 && (D = Math.abs((K - f.currentY) / d.y));
      const se = Math.max(L, D);
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
    function w(k) {
      const L = e.zoom,
        D = e.params.zoom;
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
      e.params.cssMode &&
        ((e.wrapperEl.style.overflow = "hidden"),
        (e.wrapperEl.style.touchAction = "none")),
        u.$slideEl.addClass(`${D.zoomedSlideClass}`);
      let R, M, B, K, se, le, fe, ge, be, Ye, Fe, Zt, Ie, He, ee, pe, Xe, Ze;
      typeof f.touchesStart.x == "undefined" && k
        ? ((R = k.type === "touchend" ? k.changedTouches[0].pageX : k.pageX),
          (M = k.type === "touchend" ? k.changedTouches[0].pageY : k.pageY))
        : ((R = f.touchesStart.x), (M = f.touchesStart.y)),
        (L.scale = u.$imageWrapEl.attr("data-swiper-zoom") || D.maxRatio),
        (s = u.$imageWrapEl.attr("data-swiper-zoom") || D.maxRatio),
        k
          ? ((Xe = u.$slideEl[0].offsetWidth),
            (Ze = u.$slideEl[0].offsetHeight),
            (B = u.$slideEl.offset().left + i.scrollX),
            (K = u.$slideEl.offset().top + i.scrollY),
            (se = B + Xe / 2 - R),
            (le = K + Ze / 2 - M),
            (be = u.$imageEl[0].offsetWidth),
            (Ye = u.$imageEl[0].offsetHeight),
            (Fe = be * L.scale),
            (Zt = Ye * L.scale),
            (Ie = Math.min(Xe / 2 - Fe / 2, 0)),
            (He = Math.min(Ze / 2 - Zt / 2, 0)),
            (ee = -Ie),
            (pe = -He),
            (fe = se * L.scale),
            (ge = le * L.scale),
            fe < Ie && (fe = Ie),
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
    function C() {
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
      L.scale && L.scale !== 1 ? C() : w(k);
    }
    function A() {
      const k = e.support,
        L =
          e.touchEvents.start === "touchstart" &&
          k.passiveListener &&
          e.params.passiveListeners
            ? { passive: !0, capture: !1 }
            : !1,
        D = k.passiveListener ? { passive: !1, capture: !0 } : !0;
      return { passiveListener: L, activeListenerWithCapture: D };
    }
    function E() {
      return `.${e.params.slideClass}`;
    }
    function $(k) {
      const { passiveListener: L } = A(),
        D = E();
      e.$wrapperEl[k]("gesturestart", D, h, L),
        e.$wrapperEl[k]("gesturechange", D, g, L),
        e.$wrapperEl[k]("gestureend", D, y, L);
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
        { passiveListener: D, activeListenerWithCapture: R } = A(),
        M = E();
      L.gestures
        ? (e.$wrapperEl.on(e.touchEvents.start, b, D),
          e.$wrapperEl.on(e.touchEvents.end, T, D))
        : e.touchEvents.start === "touchstart" &&
          (e.$wrapperEl.on(e.touchEvents.start, M, h, D),
          e.$wrapperEl.on(e.touchEvents.move, M, g, R),
          e.$wrapperEl.on(e.touchEvents.end, M, y, D),
          e.touchEvents.cancel &&
            e.$wrapperEl.on(e.touchEvents.cancel, M, y, D)),
        e.$wrapperEl.on(
          e.touchEvents.move,
          `.${e.params.zoom.containerClass}`,
          _,
          R
        );
    }
    function I() {
      const k = e.zoom;
      if (!k.enabled) return;
      const L = e.support;
      k.enabled = !1;
      const { passiveListener: D, activeListenerWithCapture: R } = A(),
        M = E();
      L.gestures
        ? (e.$wrapperEl.off(e.touchEvents.start, b, D),
          e.$wrapperEl.off(e.touchEvents.end, T, D))
        : e.touchEvents.start === "touchstart" &&
          (e.$wrapperEl.off(e.touchEvents.start, M, h, D),
          e.$wrapperEl.off(e.touchEvents.move, M, g, R),
          e.$wrapperEl.off(e.touchEvents.end, M, y, D),
          e.touchEvents.cancel &&
            e.$wrapperEl.off(e.touchEvents.cancel, M, y, D)),
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
        I();
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
        disable: I,
        in: w,
        out: C,
        toggle: P,
      });
  }
  function Zh({ swiper: e, extendParams: t, on: n, emit: r }) {
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
      const p =
          e.virtual && e.params.virtual.enabled
            ? e.$wrapperEl.children(
                `.${e.params.slideClass}[data-swiper-slide-index="${c}"]`
              )
            : e.slides.eq(c),
        m = p.find(
          `.${f.elementClass}:not(.${f.loadedClass}):not(.${f.loadingClass})`
        );
      p.hasClass(f.elementClass) &&
        !p.hasClass(f.loadedClass) &&
        !p.hasClass(f.loadingClass) &&
        m.push(p[0]),
        m.length !== 0 &&
          m.each((h) => {
            const g = N(h);
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
                        S.children("source").each((w) => {
                          const C = N(w);
                          C.attr("data-srcset") &&
                            (C.attr("srcset", C.attr("data-srcset")),
                            C.removeAttr("data-srcset"));
                        }),
                      v && (g.attr("src", v), g.removeAttr("data-src"))),
                  g.addClass(f.loadedClass).removeClass(f.loadingClass),
                  p.find(`.${f.preloaderClass}`).remove(),
                  e.params.loop && u)
                ) {
                  const w = p.attr("data-swiper-slide-index");
                  if (p.hasClass(e.params.slideDuplicateClass)) {
                    const C = e.$wrapperEl.children(
                      `[data-swiper-slide-index="${w}"]:not(.${e.params.slideDuplicateClass})`
                    );
                    a(C.index(), !1);
                  } else {
                    const C = e.$wrapperEl.children(
                      `.${e.params.slideDuplicateClass}[data-swiper-slide-index="${w}"]`
                    );
                    a(C.index(), !1);
                  }
                }
                r("lazyImageReady", p[0], g[0]),
                  e.params.autoHeight && e.updateAutoHeight();
              }
            }),
              r("lazyImageLoad", p[0], g[0]);
          });
    }
    function o() {
      const { $wrapperEl: c, params: u, slides: f, activeIndex: d } = e,
        p = e.virtual && u.virtual.enabled,
        m = u.lazy;
      let h = u.slidesPerView;
      h === "auto" && (h = 0);
      function g(v) {
        if (p) {
          if (
            c.children(`.${u.slideClass}[data-swiper-slide-index="${v}"]`)
              .length
          )
            return !0;
        } else if (f[v]) return !0;
        return !1;
      }
      function y(v) {
        return p ? N(v).attr("data-swiper-slide-index") : N(v).index();
      }
      if ((s || (s = !0), e.params.watchSlidesProgress))
        c.children(`.${u.slideVisibleClass}`).each((v) => {
          const _ = p ? N(v).attr("data-swiper-slide-index") : N(v).index();
          a(_);
        });
      else if (h > 1) for (let v = d; v < d + h; v += 1) g(v) && a(v);
      else a(d);
      if (m.loadPrevNext)
        if (h > 1 || (m.loadPrevNextAmount && m.loadPrevNextAmount > 1)) {
          const v = m.loadPrevNextAmount,
            _ = Math.ceil(h),
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
      const c = ce();
      if (!e || e.destroyed) return;
      const u = e.params.lazy.scrollingElement
          ? N(e.params.lazy.scrollingElement)
          : N(c),
        f = u[0] === c,
        d = f ? c.innerWidth : u[0].offsetWidth,
        p = f ? c.innerHeight : u[0].offsetHeight,
        m = e.$el.offset(),
        { rtlTranslate: h } = e;
      let g = !1;
      h && (m.left -= e.$el[0].scrollLeft);
      const y = [
        [m.left, m.top],
        [m.left + e.width, m.top],
        [m.left, m.top + e.height],
        [m.left + e.width, m.top + e.height],
      ];
      for (let _ = 0; _ < y.length; _ += 1) {
        const x = y[_];
        if (x[0] >= 0 && x[0] <= d && x[1] >= 0 && x[1] <= p) {
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
          resistanceRatio: p,
        } = e.params;
        c.enabled && (u || (f && (d || p === 0))) && o();
      }),
      n("destroy", () => {
        e.$el &&
          e.$el
            .find(`.${e.params.lazy.loadingClass}`)
            .removeClass(e.params.lazy.loadingClass);
      }),
      Object.assign(e.lazy, { load: o, loadInSlide: a });
  }
  function Jh({ swiper: e, extendParams: t, on: n }) {
    t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
      (e.controller = { control: void 0 });
    function r(l, c) {
      const u = (function () {
        let m, h, g;
        return (y, v) => {
          for (h = -1, m = y.length; m - h > 1; )
            (g = (m + h) >> 1), y[g] <= v ? (h = g) : (m = g);
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
      const p = e.constructor;
      function m(h) {
        const g = e.rtlTranslate ? -e.translate : e.translate;
        e.params.controller.by === "slide" &&
          (i(h), (d = -e.controller.spline.interpolate(-g))),
          (!d || e.params.controller.by === "container") &&
            ((f =
              (h.maxTranslate() - h.minTranslate()) /
              (e.maxTranslate() - e.minTranslate())),
            (d = (g - e.minTranslate()) * f + h.minTranslate())),
          e.params.controller.inverse && (d = h.maxTranslate() - d),
          h.updateProgress(d),
          h.setTranslate(d, e),
          h.updateActiveIndex(),
          h.updateSlidesClasses();
      }
      if (Array.isArray(u))
        for (let h = 0; h < u.length; h += 1)
          u[h] !== c && u[h] instanceof p && m(u[h]);
      else u instanceof p && c !== u && m(u);
    }
    function a(l, c) {
      const u = e.constructor,
        f = e.controller.control;
      let d;
      function p(m) {
        m.setTransition(l, e),
          l !== 0 &&
            (m.transitionStart(),
            m.params.autoHeight &&
              Rn(() => {
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
          f[d] !== c && f[d] instanceof u && p(f[d]);
      else f instanceof u && c !== f && p(f);
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
  function ep({ swiper: e, extendParams: t, on: n }) {
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
    function p(b, T) {
      b.attr("aria-live", T);
    }
    function m(b) {
      b.attr("aria-disabled", !0);
    }
    function h(b) {
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
          O.is(xn(e.params.pagination.bulletClass)) &&
          O[0].click();
    }
    function y() {
      if (e.params.loop || e.params.rewind || !e.navigation) return;
      const { $nextEl: b, $prevEl: T } = e.navigation;
      T && T.length > 0 && (e.isBeginning ? (m(T), o(T)) : (h(T), a(T))),
        b && b.length > 0 && (e.isEnd ? (m(b), o(b)) : (h(b), a(b)));
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
      w = () => {
        e.a11y.clicked = !0;
      },
      C = () => {
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
          I =
            e.params.watchSlidesProgress &&
            e.visibleSlides &&
            e.visibleSlides.includes(T);
        O ||
          I ||
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
          e.slides.each((O, I) => {
            const k = N(O),
              L = e.params.loop
                ? parseInt(k.attr("data-swiper-slide-index"), 10)
                : I,
              D = b.slideLabelMessage
                .replace(/\{\{index\}\}/, L + 1)
                .replace(/\{\{slidesLength\}\}/, T);
            f(k, D);
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
          I = b.id || O.attr("id") || `swiper-wrapper-${s(16)}`,
          k = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        d(O, I), p(O, k), A();
        let L, D;
        e.navigation && e.navigation.$nextEl && (L = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (D = e.navigation.$prevEl),
          L && L.length && S(L, I, b.nextSlideMessage),
          D && D.length && S(D, I, b.prevSlideMessage),
          _() &&
            e.pagination.$el.on(
              "keydown",
              xn(e.params.pagination.bulletClass),
              g
            ),
          e.$el.on("focus", P, !0),
          e.$el.on("pointerdown", w, !0),
          e.$el.on("pointerup", C, !0);
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
            xn(e.params.pagination.bulletClass),
            g
          ),
        e.$el.off("focus", P, !0),
        e.$el.off("pointerdown", w, !0),
        e.$el.off("pointerup", C, !0);
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
  function tp({ swiper: e, extendParams: t, on: n }) {
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
        const p = ce();
        let m;
        d ? (m = new URL(d)) : (m = p.location);
        const h = m.pathname
            .slice(1)
            .split("/")
            .filter((_) => _ !== ""),
          g = h.length,
          y = h[g - 2],
          v = h[g - 1];
        return { key: y, value: v };
      },
      o = (d, p) => {
        const m = ce();
        if (!r || !e.params.history.enabled) return;
        let h;
        e.params.url ? (h = new URL(e.params.url)) : (h = m.location);
        const g = e.slides.eq(p);
        let y = s(g.attr("data-history"));
        if (e.params.history.root.length > 0) {
          let _ = e.params.history.root;
          _[_.length - 1] === "/" && (_ = _.slice(0, _.length - 1)),
            (y = `${_}/${d}/${y}`);
        } else h.pathname.includes(d) || (y = `${d}/${y}`);
        e.params.history.keepQuery && (y += h.search);
        const v = m.history.state;
        (v && v.value === y) ||
          (e.params.history.replaceState
            ? m.history.replaceState({ value: y }, null, y)
            : m.history.pushState({ value: y }, null, y));
      },
      l = (d, p, m) => {
        if (p)
          for (let h = 0, g = e.slides.length; h < g; h += 1) {
            const y = e.slides.eq(h);
            if (
              s(y.attr("data-history")) === p &&
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
  function np({ swiper: e, extendParams: t, emit: n, on: r }) {
    let i = !1;
    const s = Me(),
      a = ce();
    t({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
    const o = () => {
        n("hashChange");
        const f = s.location.hash.replace("#", ""),
          d = e.slides.eq(e.activeIndex).attr("data-hash");
        if (f !== d) {
          const p = e.$wrapperEl
            .children(`.${e.params.slideClass}[data-hash="${f}"]`)
            .index();
          if (typeof p == "undefined") return;
          e.slideTo(p);
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
          for (let p = 0, m = e.slides.length; p < m; p += 1) {
            const h = e.slides.eq(p);
            if (
              (h.attr("data-hash") || h.attr("data-history")) === f &&
              !h.hasClass(e.params.slideDuplicateClass)
            ) {
              const y = h.index();
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
  function rp({ swiper: e, extendParams: t, on: n, emit: r }) {
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
      const h = e.slides.eq(e.activeIndex);
      let g = e.params.autoplay.delay;
      h.attr("data-swiper-autoplay") &&
        (g = h.attr("data-swiper-autoplay") || e.params.autoplay.delay),
        clearTimeout(i),
        (i = Rn(() => {
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
    function l(h) {
      e.autoplay.running &&
        (e.autoplay.paused ||
          (i && clearTimeout(i),
          (e.autoplay.paused = !0),
          h === 0 || !e.params.autoplay.waitForTransition
            ? ((e.autoplay.paused = !1), s())
            : ["transitionend", "webkitTransitionEnd"].forEach((g) => {
                e.$wrapperEl[0].addEventListener(g, u);
              })));
    }
    function c() {
      const h = Me();
      h.visibilityState === "hidden" && e.autoplay.running && l(),
        h.visibilityState === "visible" &&
          e.autoplay.paused &&
          (s(), (e.autoplay.paused = !1));
    }
    function u(h) {
      !e ||
        e.destroyed ||
        !e.$wrapperEl ||
        (h.target === e.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((g) => {
            e.$wrapperEl[0].removeEventListener(g, u);
          }),
          (e.autoplay.paused = !1),
          e.autoplay.running ? s() : o()));
    }
    function f() {
      e.params.autoplay.disableOnInteraction ? o() : (r("autoplayPause"), l()),
        ["transitionend", "webkitTransitionEnd"].forEach((h) => {
          e.$wrapperEl[0].removeEventListener(h, u);
        });
    }
    function d() {
      e.params.autoplay.disableOnInteraction ||
        ((e.autoplay.paused = !1), r("autoplayResume"), s());
    }
    function p() {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.$el.on("mouseenter", f), e.$el.on("mouseleave", d));
    }
    function m() {
      e.$el.off("mouseenter", f), e.$el.off("mouseleave", d);
    }
    n("init", () => {
      e.params.autoplay.enabled &&
        (a(), Me().addEventListener("visibilitychange", c), p());
    }),
      n("beforeTransitionStart", (h, g, y) => {
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
  function ip({ swiper: e, extendParams: t, on: n }) {
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
        const p = e.slides
            .eq(d)
            .prevAll(`[data-swiper-slide-index="${f}"]`)
            .eq(0)
            .index(),
          m = e.slides
            .eq(d)
            .nextAll(`[data-swiper-slide-index="${f}"]`)
            .eq(0)
            .index();
        typeof p == "undefined"
          ? (f = m)
          : typeof m == "undefined"
          ? (f = p)
          : m - d < d - p
          ? (f = m)
          : (f = p);
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
      else if (Si(l.swiper)) {
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
        for (let h = 0; h < f; h += 1)
          c.$wrapperEl
            .children(`[data-swiper-slide-index="${e.realIndex + h}"]`)
            .addClass(d);
      else
        for (let h = 0; h < f; h += 1) c.slides.eq(e.realIndex + h).addClass(d);
      const p = e.params.thumbs.autoScrollOffset,
        m = p && !c.params.loop;
      if (e.realIndex !== c.realIndex || m) {
        let h = c.activeIndex,
          g,
          y;
        if (c.params.loop) {
          c.slides.eq(h).hasClass(c.params.slideDuplicateClass) &&
            (c.loopFix(),
            (c._clientLeft = c.$wrapperEl[0].clientLeft),
            (h = c.activeIndex));
          const v = c.slides
              .eq(h)
              .prevAll(`[data-swiper-slide-index="${e.realIndex}"]`)
              .eq(0)
              .index(),
            _ = c.slides
              .eq(h)
              .nextAll(`[data-swiper-slide-index="${e.realIndex}"]`)
              .eq(0)
              .index();
          typeof v == "undefined"
            ? (g = _)
            : typeof _ == "undefined"
            ? (g = v)
            : _ - h === h - v
            ? (g = c.params.slidesPerGroup > 1 ? _ : h)
            : _ - h < h - v
            ? (g = _)
            : (g = v),
            (y = e.activeIndex > e.previousIndex ? "next" : "prev");
        } else (g = e.realIndex), (y = g > e.previousIndex ? "next" : "prev");
        m && (g += y === "next" ? p : -1 * p),
          c.visibleSlidesIndexes &&
            c.visibleSlidesIndexes.indexOf(g) < 0 &&
            (c.params.centeredSlides
              ? g > h
                ? (g = g - Math.floor(u / 2) + 1)
                : (g = g + Math.floor(u / 2) - 1)
              : g > h && c.params.slidesPerGroup,
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
  function sp({ swiper: e, extendParams: t, emit: n, once: r }) {
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
          time: Pt(),
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
        m = Pt() - d.touchStartTime;
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
          const w = d.velocities.pop(),
            C = d.velocities.pop(),
            P = w.position - C.position,
            A = w.time - C.time;
          (e.velocity = P / A),
            (e.velocity /= 2),
            Math.abs(e.velocity) < l.freeMode.minimumVelocity &&
              (e.velocity = 0),
            (A > 150 || Pt() - w.time > 300) && (e.velocity = 0);
        } else e.velocity = 0;
        (e.velocity *= l.freeMode.momentumVelocityRatio),
          (d.velocities.length = 0);
        let h = 1e3 * l.freeMode.momentumRatio;
        const g = e.velocity * h;
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
          let w;
          for (let C = 0; C < f.length; C += 1)
            if (f[C] > -y) {
              w = C;
              break;
            }
          Math.abs(f[w] - y) < Math.abs(f[w - 1] - y) ||
          e.swipeDirection === "next"
            ? (y = f[w])
            : (y = f[w - 1]),
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
              ? (h = Math.abs((-y - e.translate) / e.velocity))
              : (h = Math.abs((y - e.translate) / e.velocity)),
            l.freeMode.sticky)
          ) {
            const w = Math.abs((u ? -y : y) - e.translate),
              C = e.slidesSizesGrid[e.activeIndex];
            w < C
              ? (h = l.speed)
              : w < 2 * C
              ? (h = l.speed * 1.5)
              : (h = l.speed * 2.5);
          }
        } else if (l.freeMode.sticky) {
          e.slideToClosest();
          return;
        }
        l.freeMode.momentumBounce && v
          ? (e.updateProgress(_),
            e.setTransition(h),
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
            e.setTransition(h),
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
  function ap({ swiper: e, extendParams: t }) {
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
        const { slidesPerGroup: d, spaceBetween: p } = e.params,
          { rows: m, fill: h } = e.params.grid;
        let g, y, v;
        if (h === "row" && d > 1) {
          const _ = Math.floor(l / (d * m)),
            x = l - m * d * _,
            S = _ === 0 ? d : Math.min(Math.ceil((u - _ * m * d) / m), d);
          (v = Math.floor(x / S)),
            (y = x - v * S + _ * d),
            (g = y + (v * n) / m),
            c.css({ "-webkit-order": g, order: g });
        } else
          h === "column"
            ? ((y = Math.floor(l / m)),
              (v = l - y * m),
              (y > i || (y === i && v === m - 1)) &&
                ((v += 1), v >= m && ((v = 0), (y += 1))))
            : ((v = Math.floor(l / r)), (y = l - v * r));
        c.css(f("margin-top"), v !== 0 ? p && `${p}px` : "");
      },
      o = (l, c, u) => {
        const {
            spaceBetween: f,
            centeredSlides: d,
            roundLengths: p,
          } = e.params,
          { rows: m } = e.params.grid;
        if (
          ((e.virtualSize = (l + f) * n),
          (e.virtualSize = Math.ceil(e.virtualSize / m) - f),
          e.$wrapperEl.css({ [u("width")]: `${e.virtualSize + f}px` }),
          d)
        ) {
          c.splice(0, c.length);
          const h = [];
          for (let g = 0; g < c.length; g += 1) {
            let y = c[g];
            p && (y = Math.floor(y)), c[g] < e.virtualSize + c[0] && h.push(y);
          }
          c.push(...h);
        }
      };
    e.grid = { initSlides: s, updateSlide: a, updateWrapperSize: o };
  }
  function op(e) {
    const t = this,
      { $wrapperEl: n, params: r } = t;
    if ((r.loop && t.loopDestroy(), typeof e == "object" && "length" in e))
      for (let i = 0; i < e.length; i += 1) e[i] && n.append(e[i]);
    else n.append(e);
    r.loop && t.loopCreate(), r.observer || t.update();
  }
  function lp(e) {
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
  function cp(e, t) {
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
  function up(e) {
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
  function fp() {
    const e = this,
      t = [];
    for (let n = 0; n < e.slides.length; n += 1) t.push(n);
    e.removeSlide(t);
  }
  function dp({ swiper: e }) {
    Object.assign(e, {
      appendSlide: op.bind(e),
      prependSlide: lp.bind(e),
      addSlide: cp.bind(e),
      removeSlide: up.bind(e),
      removeAllSlides: fp.bind(e),
    });
  }
  function qr(e) {
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
  function Ei(e, t) {
    return e.transformEl
      ? t
          .find(e.transformEl)
          .css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden",
          })
      : t;
  }
  function _s({ swiper: e, duration: t, transformEl: n, allSlides: r }) {
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
  function hp({ swiper: e, extendParams: t, on: n }) {
    t({ fadeEffect: { crossFade: !1, transformEl: null } }),
      qr({
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
            Ei(a, l)
              .css({ opacity: d })
              .transform(`translate3d(${u}px, ${f}px, 0px)`);
          }
        },
        setTransition: (s) => {
          const { transformEl: a } = e.params.fadeEffect;
          (a ? e.slides.find(a) : e.slides).transition(s),
            _s({ swiper: e, duration: s, transformEl: a, allSlides: !0 });
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
  function pp({ swiper: e, extendParams: t, on: n }) {
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
    qr({
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
            size: p,
            browser: m,
          } = e,
          h = e.params.cubeEffect,
          g = e.isHorizontal(),
          y = e.virtual && e.params.virtual.enabled;
        let v = 0,
          _;
        h.shadow &&
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
          const w = c.eq(S);
          let C = S;
          y && (C = parseInt(w.attr("data-swiper-slide-index"), 10));
          let P = C * 90,
            A = Math.floor(P / 360);
          d && ((P = -P), (A = Math.floor(-P / 360)));
          const E = Math.max(Math.min(w[0].progress, 1), -1);
          let $ = 0,
            b = 0,
            T = 0;
          C % 4 === 0
            ? (($ = -A * 4 * p), (T = 0))
            : (C - 1) % 4 === 0
            ? (($ = 0), (T = -A * 4 * p))
            : (C - 2) % 4 === 0
            ? (($ = p + A * 4 * p), (T = p))
            : (C - 3) % 4 === 0 && (($ = -p), (T = 3 * p + p * 4 * A)),
            d && ($ = -$),
            g || ((b = $), ($ = 0));
          const O = `rotateX(${g ? 0 : -P}deg) rotateY(${
            g ? P : 0
          }deg) translate3d(${$}px, ${b}px, ${T}px)`;
          E <= 1 &&
            E > -1 &&
            ((v = C * 90 + E * 90), d && (v = -C * 90 - E * 90)),
            w.transform(O),
            h.slideShadows && r(w, E, g);
        }
        if (
          (l.css({
            "-webkit-transform-origin": `50% 50% -${p / 2}px`,
            "transform-origin": `50% 50% -${p / 2}px`,
          }),
          h.shadow)
        )
          if (g)
            _.transform(
              `translate3d(0px, ${u / 2 + h.shadowOffset}px, ${
                -u / 2
              }px) rotateX(90deg) rotateZ(0deg) scale(${h.shadowScale})`
            );
          else {
            const S = Math.abs(v) - Math.floor(Math.abs(v) / 90) * 90,
              w =
                1.5 -
                (Math.sin((S * 2 * Math.PI) / 360) / 2 +
                  Math.cos((S * 2 * Math.PI) / 360) / 2),
              C = h.shadowScale,
              P = h.shadowScale / w,
              A = h.shadowOffset;
            _.transform(
              `scale3d(${C}, 1, ${P}) translate3d(0px, ${f / 2 + A}px, ${
                -f / 2 / P
              }px) rotateX(-90deg)`
            );
          }
        const x = m.isSafari || m.isWebView ? -p / 2 : 0;
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
  function Br(e, t, n) {
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
  function mp({ swiper: e, extendParams: t, on: n }) {
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
      u.length === 0 && (u = Br(c, o, e.isHorizontal() ? "left" : "top")),
        f.length === 0 && (f = Br(c, o, e.isHorizontal() ? "right" : "bottom")),
        u.length && (u[0].style.opacity = Math.max(-l, 0)),
        f.length && (f[0].style.opacity = Math.max(l, 0));
    };
    qr({
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
          const p = f[0].swiperSlideOffset;
          let h = -180 * d,
            g = 0,
            y = e.params.cssMode ? -p - e.translate : -p,
            v = 0;
          e.isHorizontal()
            ? l && (h = -h)
            : ((v = y), (y = 0), (g = -h), (h = 0)),
            (f[0].style.zIndex = -Math.abs(Math.round(d)) + o.length),
            c.slideShadows && r(f, d, c);
          const _ = `translate3d(${y}px, ${v}px, 0px) rotateX(${g}deg) rotateY(${h}deg)`;
          Ei(c, f).transform(_);
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
          _s({ swiper: e, duration: o, transformEl: l });
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
  function gp({ swiper: e, extendParams: t, on: n }) {
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
      qr({
        effect: "coverflow",
        swiper: e,
        on: n,
        setTranslate: () => {
          const { width: s, height: a, slides: o, slidesSizesGrid: l } = e,
            c = e.params.coverflowEffect,
            u = e.isHorizontal(),
            f = e.translate,
            d = u ? -f + s / 2 : -f + a / 2,
            p = u ? c.rotate : -c.rotate,
            m = c.depth;
          for (let h = 0, g = o.length; h < g; h += 1) {
            const y = o.eq(h),
              v = l[h],
              _ = y[0].swiperSlideOffset,
              x = (d - _ - v / 2) / v,
              S =
                typeof c.modifier == "function"
                  ? c.modifier(x)
                  : x * c.modifier;
            let w = u ? p * S : 0,
              C = u ? 0 : p * S,
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
              Math.abs(w) < 0.001 && (w = 0),
              Math.abs(C) < 0.001 && (C = 0),
              Math.abs(b) < 0.001 && (b = 0);
            const T = `translate3d(${$}px,${E}px,${P}px)  rotateX(${C}deg) rotateY(${w}deg) scale(${b})`;
            if (
              (Ei(c, y).transform(T),
              (y[0].style.zIndex = -Math.abs(Math.round(S)) + 1),
              c.slideShadows)
            ) {
              let I = u
                  ? y.find(".swiper-slide-shadow-left")
                  : y.find(".swiper-slide-shadow-top"),
                k = u
                  ? y.find(".swiper-slide-shadow-right")
                  : y.find(".swiper-slide-shadow-bottom");
              I.length === 0 && (I = Br(c, y, u ? "left" : "top")),
                k.length === 0 && (k = Br(c, y, u ? "right" : "bottom")),
                I.length && (I[0].style.opacity = S > 0 ? S : 0),
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
  function vp({ swiper: e, extendParams: t, on: n }) {
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
    qr({
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
          const p = a.eq(d),
            m = p[0].progress,
            h = Math.min(
              Math.max(p[0].progress, -c.limitProgress),
              c.limitProgress
            );
          let g = h;
          f ||
            (g = Math.min(
              Math.max(p[0].originalProgress, -c.limitProgress),
              c.limitProgress
            ));
          const y = p[0].swiperSlideOffset,
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
          h < 0 ? ((S = c.next), (x = !0)) : h > 0 && ((S = c.prev), (x = !0)),
            v.forEach((b, T) => {
              v[T] = `calc(${b}px + (${r(S.translate[T])} * ${Math.abs(
                h * u
              )}))`;
            }),
            _.forEach((b, T) => {
              _[T] = S.rotate[T] * Math.abs(h * u);
            }),
            (p[0].style.zIndex = -Math.abs(Math.round(m)) + a.length);
          const w = v.join(", "),
            C = `rotateX(${_[0]}deg) rotateY(${_[1]}deg) rotateZ(${_[2]}deg)`,
            P =
              g < 0
                ? `scale(${1 + (1 - S.scale) * g * u})`
                : `scale(${1 - (1 - S.scale) * g * u})`,
            A =
              g < 0 ? 1 + (1 - S.opacity) * g * u : 1 - (1 - S.opacity) * g * u,
            E = `translate3d(${w}) ${C} ${P}`;
          if ((x && S.shadow) || !x) {
            let b = p.children(".swiper-slide-shadow");
            if ((b.length === 0 && S.shadow && (b = Br(c, p)), b.length)) {
              const T = c.shadowPerProgress ? h * (1 / c.limitProgress) : h;
              b[0].style.opacity = Math.min(Math.max(Math.abs(T), 0), 1);
            }
          }
          const $ = Ei(c, p);
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
          _s({ swiper: e, duration: a, transformEl: o, allSlides: !0 });
      },
      perspective: () => e.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
  }
  function yp({ swiper: e, extendParams: t, on: n }) {
    t({
      cardsEffect: {
        slideShadows: !0,
        transformEl: null,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8,
      },
    }),
      qr({
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
              p = d[0].progress,
              m = Math.min(Math.max(p, -4), 4);
            let h = d[0].swiperSlideOffset;
            e.params.centeredSlides &&
              !e.params.cssMode &&
              e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`),
              e.params.centeredSlides &&
                e.params.cssMode &&
                (h -= s[0].swiperSlideOffset);
            let g = e.params.cssMode ? -h - e.translate : -h,
              y = 0;
            const v = -100 * Math.abs(m);
            let _ = 1,
              x = -o.perSlideRotate * m,
              S = o.perSlideOffset - Math.abs(m) * 0.75;
            const w =
                e.virtual && e.params.virtual.enabled ? e.virtual.from + f : f,
              C =
                (w === a || w === a - 1) &&
                m > 0 &&
                m < 1 &&
                (c || e.params.cssMode) &&
                u < l,
              P =
                (w === a || w === a + 1) &&
                m < 0 &&
                m > -1 &&
                (c || e.params.cssMode) &&
                u > l;
            if (C || P) {
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
              b.length === 0 && (b = Br(o, d)),
                b.length &&
                  (b[0].style.opacity = Math.min(
                    Math.max((Math.abs(m) - 0.5) / 0.5, 0),
                    1
                  ));
            }
            (d[0].style.zIndex = -Math.abs(Math.round(p)) + s.length),
              Ei(o, d).transform(E);
          }
        },
        setTransition: (s) => {
          const { transformEl: a } = e.params.cardsEffect;
          (a ? e.slides.find(a) : e.slides)
            .transition(s)
            .find(".swiper-slide-shadow")
            .transition(s),
            _s({ swiper: e, duration: s, transformEl: a });
        },
        perspective: () => !0,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
  }
  const _p = [
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
    ep,
    tp,
    np,
    rp,
    ip,
    sp,
    ap,
    dp,
    hp,
    pp,
    mp,
    gp,
    vp,
    yp,
  ];
  ft.use(_p);
  const bp = () => {
      const e = document.querySelector(".swiper[work-slider='component']");
      e &&
        new ft(e, {
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
    xp = () => {
      console.log("homeInit"), Bf(), bp();
    },
    Tl = () => {
      const e = document.querySelector(".swiper[review-slider='component']");
      e &&
        new ft(e, {
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
  function Sn(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function El(e, t) {
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
   */ var Mt = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Vr = { duration: 0.5, overwrite: !1, delay: 0 },
    Pa,
    Ke,
    me,
    an = 1e8,
    tt = 1 / an,
    ka = Math.PI * 2,
    Sp = ka / 4,
    Tp = 0,
    Cl = Math.sqrt,
    Ep = Math.cos,
    Cp = Math.sin,
    Be = function (t) {
      return typeof t == "string";
    },
    Se = function (t) {
      return typeof t == "function";
    },
    Tn = function (t) {
      return typeof t == "number";
    },
    Ma = function (t) {
      return typeof t == "undefined";
    },
    on = function (t) {
      return typeof t == "object";
    },
    bt = function (t) {
      return t !== !1;
    },
    $a = function () {
      return typeof window != "undefined";
    },
    bs = function (t) {
      return Se(t) || Be(t);
    },
    wl =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    nt = Array.isArray,
    Oa = /(?:-?\.?\d|\.)+/gi,
    Pl = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Wr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Aa = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    kl = /[+-]=-?[.\d]+/,
    Ml = /[^,'"\[\]\s]+/gi,
    wp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ye,
    ln,
    La,
    Ia,
    $t = {},
    xs = {},
    $l,
    Ol = function (t) {
      return (xs = Xr(t, $t)) && Tt;
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
    Ci = function (t, n) {
      return !n && console.warn(t);
    },
    Al = function (t, n) {
      return (t && ($t[t] = n) && xs && (xs[t] = n)) || $t;
    },
    wi = function () {
      return 0;
    },
    Pp = { suppressEvents: !0, isStart: !0, kill: !1 },
    Ss = { suppressEvents: !0, kill: !1 },
    kp = { suppressEvents: !0 },
    za = {},
    Nn = [],
    Ra = {},
    Ll,
    Ot = {},
    Na = {},
    Il = 30,
    Ts = [],
    Fa = "",
    Ha = function (t) {
      var n = t[0],
        r,
        i;
      if ((on(n) || Se(n) || (t = [t]), !(r = (n._gsap || {}).harness))) {
        for (i = Ts.length; i-- && !Ts[i].targetTest(n); );
        r = Ts[i];
      }
      for (i = t.length; i--; )
        (t[i] && (t[i]._gsap || (t[i]._gsap = new cc(t[i], r)))) ||
          t.splice(i, 1);
      return t;
    },
    fr = function (t) {
      return t._gsap || Ha(Wt(t))[0]._gsap;
    },
    Dl = function (t, n, r) {
      return (r = t[n]) && Se(r)
        ? t[n]()
        : (Ma(r) && t.getAttribute && t.getAttribute(n)) || r;
    },
    xt = function (t, n) {
      return (t = t.split(",")).forEach(n) || t;
    },
    Ce = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    $e = function (t) {
      return Math.round(t * 1e7) / 1e7 || 0;
    },
    Yr = function (t, n) {
      var r = n.charAt(0),
        i = parseFloat(n.substr(2));
      return (
        (t = parseFloat(t)),
        r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i
      );
    },
    Mp = function (t, n) {
      for (var r = n.length, i = 0; t.indexOf(n[i]) < 0 && ++i < r; );
      return i < r;
    },
    Es = function () {
      var t = Nn.length,
        n = Nn.slice(0),
        r,
        i;
      for (Ra = {}, Nn.length = 0, r = 0; r < t; r++)
        (i = n[r]),
          i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
    },
    qa = function (t) {
      return !!(t._initted || t._startAt || t.add);
    },
    zl = function (t, n, r, i) {
      Nn.length && !Ke && Es(),
        t.render(n, r, !!(Ke && n < 0 && qa(t))),
        Nn.length && !Ke && Es();
    },
    Rl = function (t) {
      var n = parseFloat(t);
      return (n || n === 0) && (t + "").match(Ml).length < 2
        ? n
        : Be(t)
        ? t.trim()
        : t;
    },
    Nl = function (t) {
      return t;
    },
    At = function (t, n) {
      for (var r in n) r in t || (t[r] = n[r]);
      return t;
    },
    $p = function (t) {
      return function (n, r) {
        for (var i in r)
          i in n || (i === "duration" && t) || i === "ease" || (n[i] = r[i]);
      };
    },
    Xr = function (t, n) {
      for (var r in n) t[r] = n[r];
      return t;
    },
    Fl = function e(t, n) {
      for (var r in n)
        r !== "__proto__" &&
          r !== "constructor" &&
          r !== "prototype" &&
          (t[r] = on(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
      return t;
    },
    Cs = function (t, n) {
      var r = {},
        i;
      for (i in t) i in n || (r[i] = t[i]);
      return r;
    },
    Pi = function (t) {
      var n = t.parent || ye,
        r = t.keyframes ? $p(nt(t.keyframes)) : At;
      if (bt(t.inherit))
        for (; n; ) r(t, n.vars.defaults), (n = n.parent || n._dp);
      return t;
    },
    Op = function (t, n) {
      for (var r = t.length, i = r === n.length; i && r-- && t[r] === n[r]; );
      return r < 0;
    },
    Hl = function (t, n, r, i, s) {
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
    ws = function (t, n, r, i) {
      r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
      var s = n._prev,
        a = n._next;
      s ? (s._next = a) : t[r] === n && (t[r] = a),
        a ? (a._prev = s) : t[i] === n && (t[i] = s),
        (n._next = n._prev = n.parent = null);
    },
    Fn = function (t, n) {
      t.parent &&
        (!n || t.parent.autoRemoveChildren) &&
        t.parent.remove &&
        t.parent.remove(t),
        (t._act = 0);
    },
    dr = function (t, n) {
      if (t && (!n || n._end > t._dur || n._start < 0))
        for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
      return t;
    },
    Ap = function (t) {
      for (var n = t.parent; n && n.parent; )
        (n._dirty = 1), n.totalDuration(), (n = n.parent);
      return t;
    },
    Ba = function (t, n, r, i) {
      return (
        t._startAt &&
        (Ke
          ? t._startAt.revert(Ss)
          : (t.vars.immediateRender && !t.vars.autoRevert) ||
            t._startAt.render(n, !0, i))
      );
    },
    Lp = function e(t) {
      return !t || (t._ts && e(t.parent));
    },
    ql = function (t) {
      return t._repeat ? Gr(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    Gr = function (t, n) {
      var r = Math.floor((t = $e(t / n)));
      return t && r === t ? r - 1 : r;
    },
    Ps = function (t, n) {
      return (
        (t - n._start) * n._ts +
        (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
      );
    },
    ks = function (t) {
      return (t._end = $e(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || tt) || 0)
      ));
    },
    Ms = function (t, n) {
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
          ks(t),
          r._dirty || dr(r, t)),
        t
      );
    },
    Bl = function (t, n) {
      var r;
      if (
        ((n._time ||
          (!n._dur && n._initted) ||
          (n._start < t._time && (n._dur || !n.add))) &&
          ((r = Ps(t.rawTime(), n)),
          (!n._dur || Mi(0, n.totalDuration(), r) - n._tTime > tt) &&
            n.render(r, !0)),
        dr(t, n)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (r = t; r._dp; )
            r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
        t._zTime = -1e-8;
      }
    },
    cn = function (t, n, r, i) {
      return (
        n.parent && Fn(n),
        (n._start = $e(
          (Tn(r) ? r : r || t !== ye ? Vt(t, r, n) : t._time) + n._delay
        )),
        (n._end = $e(
          n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)
        )),
        Hl(t, n, "_first", "_last", t._sort ? "_start" : 0),
        Va(n) || (t._recent = n),
        i || Bl(t, n),
        t._ts < 0 && Ms(t, t._tTime),
        t
      );
    },
    Vl = function (t, n) {
      return (
        ($t.ScrollTrigger || Da("scrollTrigger", n)) &&
        $t.ScrollTrigger.create(n, t)
      );
    },
    Wl = function (t, n, r, i, s) {
      if ((Za(t, n, s), !t._initted)) return 1;
      if (
        !r &&
        t._pt &&
        !Ke &&
        ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
        Ll !== It.frame
      )
        return Nn.push(t), (t._lazy = [s, i]), 1;
    },
    Ip = function e(t) {
      var n = t.parent;
      return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
    },
    Va = function (t) {
      var n = t.data;
      return n === "isFromStart" || n === "isStart";
    },
    Dp = function (t, n, r, i) {
      var s = t.ratio,
        a =
          n < 0 ||
          (!n &&
            ((!t._start && Ip(t) && !(!t._initted && Va(t))) ||
              ((t._ts < 0 || t._dp._ts < 0) && !Va(t))))
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
          ((l = Mi(0, t._tDur, n)),
          (u = Gr(l, o)),
          t._yoyo && u & 1 && (a = 1 - a),
          u !== Gr(t._tTime, o) &&
            ((s = 1 - a),
            t.vars.repeatRefresh && t._initted && t.invalidate())),
        a !== s || Ke || i || t._zTime === tt || (!n && t._zTime))
      ) {
        if (!t._initted && Wl(t, n, i, r, l)) return;
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
        n < 0 && Ba(t, n, r, !0),
          t._onUpdate && !r && Lt(t, "onUpdate"),
          l && t._repeat && !r && t.parent && Lt(t, "onRepeat"),
          (n >= t._tDur || n < 0) &&
            t.ratio === a &&
            (a && Fn(t, 1),
            !r &&
              !Ke &&
              (Lt(t, a ? "onComplete" : "onReverseComplete", !0),
              t._prom && t._prom()));
      } else t._zTime || (t._zTime = n);
    },
    zp = function (t, n, r) {
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
    jr = function (t, n, r, i) {
      var s = t._repeat,
        a = $e(n) || 0,
        o = t._tTime / t._tDur;
      return (
        o && !i && (t._time *= a / t._dur),
        (t._dur = a),
        (t._tDur = s ? (s < 0 ? 1e10 : $e(a * (s + 1) + t._rDelay * s)) : a),
        o > 0 && !i && Ms(t, (t._tTime = t._tDur * o)),
        t.parent && ks(t),
        r || dr(t.parent, t),
        t
      );
    },
    Yl = function (t) {
      return t instanceof dt ? dr(t) : jr(t, t._dur);
    },
    Rp = { _start: 0, endTime: wi, totalDuration: wi },
    Vt = function e(t, n, r) {
      var i = t.labels,
        s = t._recent || Rp,
        a = t.duration() >= an ? s.endTime(!1) : t._dur,
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
    ki = function (t, n, r) {
      var i = Tn(n[1]),
        s = (i ? 2 : 1) + (t < 2 ? 0 : 1),
        a = n[s],
        o,
        l;
      if ((i && (a.duration = n[1]), (a.parent = r), t)) {
        for (o = a, l = r; l && !("immediateRender" in o); )
          (o = l.vars.defaults || {}), (l = bt(l.vars.inherit) && l.parent);
        (a.immediateRender = bt(o.immediateRender)),
          t < 2 ? (a.runBackwards = 1) : (a.startAt = n[s - 1]);
      }
      return new Oe(n[0], a, n[s + 1]);
    },
    Hn = function (t, n) {
      return t || t === 0 ? n(t) : n;
    },
    Mi = function (t, n, r) {
      return r < t ? t : r > n ? n : r;
    },
    rt = function (t, n) {
      return !Be(t) || !(n = wp.exec(t)) ? "" : n[1];
    },
    Np = function (t, n, r) {
      return Hn(r, function (i) {
        return Mi(t, n, i);
      });
    },
    Wa = [].slice,
    Xl = function (t, n) {
      return (
        t &&
        on(t) &&
        "length" in t &&
        ((!n && !t.length) || (t.length - 1 in t && on(t[0]))) &&
        !t.nodeType &&
        t !== ln
      );
    },
    Fp = function (t, n, r) {
      return (
        r === void 0 && (r = []),
        t.forEach(function (i) {
          var s;
          return (Be(i) && !n) || Xl(i, 1)
            ? (s = r).push.apply(s, Wt(i))
            : r.push(i);
        }) || r
      );
    },
    Wt = function (t, n, r) {
      return me && !n && me.selector
        ? me.selector(t)
        : Be(t) && !r && (La || !Kr())
        ? Wa.call((n || Ia).querySelectorAll(t), 0)
        : nt(t)
        ? Fp(t, r)
        : Xl(t)
        ? Wa.call(t, 0)
        : t
        ? [t]
        : [];
    },
    Ya = function (t) {
      return (
        (t = Wt(t)[0] || Ci("Invalid scope") || {}),
        function (n) {
          var r = t.current || t.nativeElement || t;
          return Wt(
            n,
            r.querySelectorAll
              ? r
              : r === t
              ? Ci("Invalid scope") || Ia.createElement("div")
              : t
          );
        }
      );
    },
    Gl = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    jl = function (t) {
      if (Se(t)) return t;
      var n = on(t) ? t : { each: t },
        r = hr(n.ease),
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
        function (d, p, m) {
          var h = (m || n).length,
            g = a[h],
            y,
            v,
            _,
            x,
            S,
            w,
            C,
            P,
            A;
          if (!g) {
            if (((A = n.grid === "auto" ? 0 : (n.grid || [1, an])[1]), !A)) {
              for (
                C = -1e8;
                C < (C = m[A++].getBoundingClientRect().left) && A < h;

              );
              A < h && A--;
            }
            for (
              g = a[h] = [],
                y = l ? Math.min(A, h) * u - 0.5 : i % A,
                v = A === an ? 0 : l ? (h * f) / A - 0.5 : (i / A) | 0,
                C = 0,
                P = an,
                w = 0;
              w < h;
              w++
            )
              (_ = (w % A) - y),
                (x = v - ((w / A) | 0)),
                (g[w] = S =
                  c ? Math.abs(c === "y" ? x : _) : Cl(_ * _ + x * x)),
                S > C && (C = S),
                S < P && (P = S);
            i === "random" && Gl(g),
              (g.max = C - P),
              (g.min = P),
              (g.v = h =
                (parseFloat(n.amount) ||
                  parseFloat(n.each) *
                    (A > h
                      ? h - 1
                      : c
                      ? c === "y"
                        ? h / A
                        : A
                      : Math.max(A, h / A)) ||
                  0) * (i === "edges" ? -1 : 1)),
              (g.b = h < 0 ? s - h : s),
              (g.u = rt(n.amount || n.each) || 0),
              (r = r && h < 0 ? ac(r) : r);
          }
          return (
            (h = (g[d] - g.min) / g.max || 0),
            $e(g.b + (r ? r(h) : h) * g.v) + g.u
          );
        }
      );
    },
    Xa = function (t) {
      var n = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (r) {
        var i = $e(Math.round(parseFloat(r) / t) * t * n);
        return (i - (i % 1)) / n + (Tn(r) ? 0 : rt(r));
      };
    },
    Ul = function (t, n) {
      var r = nt(t),
        i,
        s;
      return (
        !r &&
          on(t) &&
          ((i = r = t.radius || an),
          t.values
            ? ((t = Wt(t.values)), (s = !Tn(t[0])) && (i *= i))
            : (t = Xa(t.increment))),
        Hn(
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
                      c = an,
                      u = 0,
                      f = t.length,
                      d,
                      p;
                    f--;

                  )
                    s
                      ? ((d = t[f].x - o),
                        (p = t[f].y - l),
                        (d = d * d + p * p))
                      : (d = Math.abs(t[f] - o)),
                      d < c && ((c = d), (u = f));
                  return (
                    (u = !i || c <= i ? t[u] : a),
                    s || u === a || Tn(a) ? u : u + rt(a)
                  );
                }
            : Xa(t)
        )
      );
    },
    Kl = function (t, n, r, i) {
      return Hn(nt(t) ? !n : r === !0 ? !!(r = 0) : !i, function () {
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
    Hp = function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      return function (i) {
        return n.reduce(function (s, a) {
          return a(s);
        }, i);
      };
    },
    qp = function (t, n) {
      return function (r) {
        return t(parseFloat(r)) + (n || rt(r));
      };
    },
    Bp = function (t, n, r) {
      return Zl(t, n, 0, 1, r);
    },
    Ql = function (t, n, r) {
      return Hn(r, function (i) {
        return t[~~n(i)];
      });
    },
    Vp = function e(t, n, r) {
      var i = n - t;
      return nt(t)
        ? Ql(t, e(0, t.length), n)
        : Hn(r, function (s) {
            return ((i + ((s - t) % i)) % i) + t;
          });
    },
    Wp = function e(t, n, r) {
      var i = n - t,
        s = i * 2;
      return nt(t)
        ? Ql(t, e(0, t.length - 1), n)
        : Hn(r, function (a) {
            return (a = (s + ((a - t) % s)) % s || 0), t + (a > i ? s - a : a);
          });
    },
    $i = function (t) {
      for (var n = 0, r = "", i, s, a, o; ~(i = t.indexOf("random(", n)); )
        (a = t.indexOf(")", i)),
          (o = t.charAt(i + 7) === "["),
          (s = t.substr(i + 7, a - i - 7).match(o ? Ml : Oa)),
          (r +=
            t.substr(n, i - n) +
            Kl(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5)),
          (n = a + 1);
      return r + t.substr(n, t.length - n);
    },
    Zl = function (t, n, r, i, s) {
      var a = n - t,
        o = i - r;
      return Hn(s, function (l) {
        return r + (((l - t) / a) * o || 0);
      });
    },
    Yp = function e(t, n, r, i) {
      var s = isNaN(t + n)
        ? 0
        : function (p) {
            return (1 - p) * t + p * n;
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
              var h = Math.min(d, ~~m);
              return u[h](m - h);
            }),
            (r = n);
        } else i || (t = Xr(nt(t) ? [] : {}, t));
        if (!u) {
          for (l in n) Ka.call(o, t, l, "get", n[l]);
          s = function (m) {
            return to(m, o) || (a ? t.p : t);
          };
        }
      }
      return Hn(r, s);
    },
    Jl = function (t, n, r) {
      var i = t.labels,
        s = an,
        a,
        o,
        l;
      for (a in i)
        (o = i[a] - n),
          o < 0 == !!r && o && s > (o = Math.abs(o)) && ((l = a), (s = o));
      return l;
    },
    Lt = function (t, n, r) {
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
          r && Nn.length && Es(),
          o && (me = o),
          (u = l ? s.apply(c, l) : s.call(c)),
          (me = a),
          u
        );
    },
    Oi = function (t) {
      return (
        Fn(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!Ke),
        t.progress() < 1 && Lt(t, "onInterrupt"),
        t
      );
    },
    Ur,
    ec = [],
    tc = function (t) {
      if (t)
        if (((t = (!t.name && t.default) || t), $a() || t.headless)) {
          var n = t.name,
            r = Se(t),
            i =
              n && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            s = {
              init: wi,
              render: to,
              add: Ka,
              kill: om,
              modifier: am,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: eo,
              aliases: {},
              register: 0,
            };
          if ((Kr(), t !== i)) {
            if (Ot[n]) return;
            At(i, At(Cs(t, s), a)),
              Xr(i.prototype, Xr(s, Cs(t, a))),
              (Ot[(i.prop = n)] = i),
              t.targetTest && (Ts.push(i), (za[n] = 1)),
              (n =
                (n === "css"
                  ? "CSS"
                  : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin");
          }
          Al(n, i), t.register && t.register(Tt, i, St);
        } else ec.push(t);
    },
    ue = 255,
    Ai = {
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
    Ga = function (t, n, r) {
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
    nc = function (t, n, r) {
      var i = t ? (Tn(t) ? [t >> 16, (t >> 8) & ue, t & ue] : 0) : Ai.black,
        s,
        a,
        o,
        l,
        c,
        u,
        f,
        d,
        p,
        m;
      if (!i) {
        if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Ai[t]))
          i = Ai[t];
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
          if (((i = m = t.match(Oa)), !n))
            (l = (+i[0] % 360) / 360),
              (c = +i[1] / 100),
              (u = +i[2] / 100),
              (a = u <= 0.5 ? u * (c + 1) : u + c - u * c),
              (s = u * 2 - a),
              i.length > 3 && (i[3] *= 1),
              (i[0] = Ga(l + 1 / 3, s, a)),
              (i[1] = Ga(l, s, a)),
              (i[2] = Ga(l - 1 / 3, s, a));
          else if (~t.indexOf("="))
            return (i = t.match(Pl)), r && i.length < 4 && (i[3] = 1), i;
        } else i = t.match(Oa) || Ai.transparent;
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
            : ((p = f - d),
              (c = u > 0.5 ? p / (2 - f - d) : p / (f + d)),
              (l =
                f === s
                  ? (a - o) / p + (a < o ? 6 : 0)
                  : f === a
                  ? (o - s) / p + 2
                  : (s - a) / p + 4),
              (l *= 60)),
          (i[0] = ~~(l + 0.5)),
          (i[1] = ~~(c * 100 + 0.5)),
          (i[2] = ~~(u * 100 + 0.5))),
        r && i.length < 4 && (i[3] = 1),
        i
      );
    },
    rc = function (t) {
      var n = [],
        r = [],
        i = -1;
      return (
        t.split(qn).forEach(function (s) {
          var a = s.match(Wr) || [];
          n.push.apply(n, a), r.push((i += a.length + 1));
        }),
        (n.c = r),
        n
      );
    },
    ic = function (t, n, r) {
      var i = "",
        s = (t + i).match(qn),
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
            (d = nc(d, n, 1)) &&
            a +
              (n
                ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3]
                : d.join(",")) +
              ")"
          );
        })),
        r && ((u = rc(t)), (l = r.c), l.join(i) !== u.c.join(i)))
      )
        for (c = t.replace(qn, "1").split(Wr), f = c.length - 1; o < f; o++)
          i +=
            c[o] +
            (~l.indexOf(o)
              ? s.shift() || a + "0,0,0,0)"
              : (u.length ? u : s.length ? s : r).shift());
      if (!c)
        for (c = t.split(qn), f = c.length - 1; o < f; o++) i += c[o] + s[o];
      return i + c[f];
    },
    qn = (function () {
      var e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        t;
      for (t in Ai) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Xp = /hsl[a]?\(/,
    sc = function (t) {
      var n = t.join(" "),
        r;
      if (((qn.lastIndex = 0), qn.test(n)))
        return (
          (r = Xp.test(n)),
          (t[1] = ic(t[1], r)),
          (t[0] = ic(t[0], r, rc(t[1]))),
          !0
        );
    },
    Li,
    It = (function () {
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
        p,
        m = function h(g) {
          var y = e() - i,
            v = g === !0,
            _,
            x,
            S,
            w;
          if (
            ((y > t || y < 0) && (r += y - n),
            (i += y),
            (S = i - r),
            (_ = S - a),
            (_ > 0 || v) &&
              ((w = ++f.frame),
              (d = S - f.time * 1e3),
              (f.time = S = S / 1e3),
              (a += _ + (_ >= s ? 4 : s - _)),
              (x = 1)),
            v || (l = c(h)),
            x)
          )
            for (p = 0; p < o.length; p++) o[p](S, d, w, g);
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
            $l &&
              (!La &&
                $a() &&
                ((ln = La = window),
                (Ia = ln.document || {}),
                ($t.gsap = Tt),
                (ln.gsapVersions || (ln.gsapVersions = [])).push(Tt.version),
                Ol(xs || ln.GreenSockGlobals || (!ln.gsap && ln) || {}),
                ec.forEach(tc)),
              (u =
                typeof requestAnimationFrame != "undefined" &&
                requestAnimationFrame),
              l && f.sleep(),
              (c =
                u ||
                function (g) {
                  return setTimeout(g, (a - f.time * 1e3 + 1) | 0);
                }),
              (Li = 1),
              m(2));
          },
          sleep: function () {
            (u ? cancelAnimationFrame : clearTimeout)(l), (Li = 0), (c = wi);
          },
          lagSmoothing: function (g, y) {
            (t = g || 1 / 0), (n = Math.min(y || 33, t));
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
            return f.remove(g), o[v ? "unshift" : "push"](_), Kr(), _;
          },
          remove: function (g, y) {
            ~(y = o.indexOf(g)) && o.splice(y, 1) && p >= y && p--;
          },
          _listeners: o,
        }),
        f
      );
    })(),
    Kr = function () {
      return !Li && It.wake();
    },
    ne = {},
    Gp = /^[\d.\-M][\d.\-,\s]/,
    jp = /["']/g,
    Up = function (t) {
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
          (n[i] = isNaN(c) ? c.replace(jp, "").trim() : +c),
          (i = l.substr(o + 1).trim());
      return n;
    },
    Kp = function (t) {
      var n = t.indexOf("(") + 1,
        r = t.indexOf(")"),
        i = t.indexOf("(", n);
      return t.substring(n, ~i && i < r ? t.indexOf(")", r + 1) : r);
    },
    Qp = function (t) {
      var n = (t + "").split("("),
        r = ne[n[0]];
      return r && n.length > 1 && r.config
        ? r.config.apply(
            null,
            ~t.indexOf("{") ? [Up(n[1])] : Kp(t).split(",").map(Rl)
          )
        : ne._CE && Gp.test(t)
        ? ne._CE("", t)
        : r;
    },
    ac = function (t) {
      return function (n) {
        return 1 - t(1 - n);
      };
    },
    oc = function e(t, n) {
      for (var r = t._first, i; r; )
        r instanceof dt
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
    hr = function (t, n) {
      return (t && (Se(t) ? t : ne[t] || Qp(t))) || n;
    },
    pr = function (t, n, r, i) {
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
        xt(t, function (o) {
          (ne[o] = $t[o] = s), (ne[(a = o.toLowerCase())] = r);
          for (var l in s)
            ne[
              a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = ne[o + "." + l] = s[l];
        }),
        s
      );
    },
    lc = function (t) {
      return function (n) {
        return n < 0.5 ? (1 - t(1 - n * 2)) / 2 : 0.5 + t((n - 0.5) * 2) / 2;
      };
    },
    ja = function e(t, n, r) {
      var i = n >= 1 ? n : 1,
        s = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
        a = (s / ka) * (Math.asin(1 / i) || 0),
        o = function (u) {
          return u === 1 ? 1 : i * Math.pow(2, -10 * u) * Cp((u - a) * s) + 1;
        },
        l =
          t === "out"
            ? o
            : t === "in"
            ? function (c) {
                return 1 - o(1 - c);
              }
            : lc(o);
      return (
        (s = ka / s),
        (l.config = function (c, u) {
          return e(t, c, u);
        }),
        l
      );
    },
    Ua = function e(t, n) {
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
            : lc(r);
      return (
        (i.config = function (s) {
          return e(t, s);
        }),
        i
      );
    };
  xt("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
    var n = t < 5 ? t + 1 : t;
    pr(
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
    pr("Elastic", ja("in"), ja("out"), ja()),
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
      pr(
        "Bounce",
        function (a) {
          return 1 - s(1 - a);
        },
        s
      );
    })(7.5625, 2.75),
    pr("Expo", function (e) {
      return Math.pow(2, 10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
    }),
    pr("Circ", function (e) {
      return -(Cl(1 - e * e) - 1);
    }),
    pr("Sine", function (e) {
      return e === 1 ? 1 : -Ep(e * Sp) + 1;
    }),
    pr("Back", Ua("in"), Ua("out"), Ua()),
    (ne.SteppedEase =
      ne.steps =
      $t.SteppedEase =
        {
          config: function (t, n) {
            t === void 0 && (t = 1);
            var r = 1 / t,
              i = t + (n ? 0 : 1),
              s = n ? 1 : 0,
              a = 1 - tt;
            return function (o) {
              return (((i * Mi(0, a, o)) | 0) + s) * r;
            };
          },
        }),
    (Vr.ease = ne["quad.out"]),
    xt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (e) {
        return (Fa += e + "," + e + "Params,");
      }
    );
  var cc = function (t, n) {
      (this.id = Tp++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = n),
        (this.get = n ? n.get : Dl),
        (this.set = n ? n.getSetter : eo);
    },
    Ii = (function () {
      function e(n) {
        (this.vars = n),
          (this._delay = +n.delay || 0),
          (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
            ((this._rDelay = n.repeatDelay || 0),
            (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
          (this._ts = 1),
          jr(this, +n.duration, 1, 1),
          (this.data = n.data),
          me && ((this._ctx = me), me.data.push(this)),
          Li || It.wake();
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
              jr(
                this,
                this._repeat < 0
                  ? r
                  : (r - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (t.totalTime = function (r, i) {
          if ((Kr(), !arguments.length)) return this._tTime;
          var s = this._dp;
          if (s && s.smoothChildTiming && this._ts) {
            for (
              Ms(this, r), !s._dp || s.parent || Bl(s, this);
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
              cn(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== r ||
              (!this._dur && !i) ||
              (this._initted && Math.abs(this._zTime) === tt) ||
              (!r && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = r), zl(this, r, i)),
            this
          );
        }),
        (t.time = function (r, i) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), r + ql(this)) %
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
                  ql(this),
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
            ? Gr(this._tTime, s) + 1
            : 1;
        }),
        (t.timeScale = function (r, i) {
          if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
          if (this._rts === r) return this;
          var s =
            this.parent && this._ts ? Ps(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +r || 0),
            (this._ts = this._ps || r === -1e-8 ? 0 : this._rts),
            this.totalTime(
              Mi(-Math.abs(this._delay), this.totalDuration(), s),
              i !== !1
            ),
            ks(this),
            Ap(this)
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
                  : (Kr(),
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
              i && (i._sort || !this.parent) && cn(i, this, r - this._delay),
              this
            );
          }
          return this._start;
        }),
        (t.endTime = function (r) {
          return (
            this._start +
            (bt(r) ? this.totalDuration() : this.duration()) /
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
              ? Ps(i.rawTime(r), this)
              : this._tTime
            : this._tTime;
        }),
        (t.revert = function (r) {
          r === void 0 && (r = kp);
          var i = Ke;
          return (
            (Ke = r),
            qa(this) &&
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
            ? ((this._repeat = r === 1 / 0 ? -2 : r), Yl(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (t.repeatDelay = function (r) {
          if (arguments.length) {
            var i = this._time;
            return (this._rDelay = r), Yl(this), i ? this.time(i) : this;
          }
          return this._rDelay;
        }),
        (t.yoyo = function (r) {
          return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
        }),
        (t.seek = function (r, i) {
          return this.totalTime(Vt(this, r), bt(i));
        }),
        (t.restart = function (r, i) {
          return (
            this.play().totalTime(r ? -this._delay : 0, bt(i)),
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
            var a = Se(r) ? r : Nl,
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
          Oi(this);
        }),
        e
      );
    })();
  At(Ii.prototype, {
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
  var dt = (function (e) {
    El(t, e);
    function t(r, i) {
      var s;
      return (
        r === void 0 && (r = {}),
        (s = e.call(this, r) || this),
        (s.labels = {}),
        (s.smoothChildTiming = !!r.smoothChildTiming),
        (s.autoRemoveChildren = !!r.autoRemoveChildren),
        (s._sort = bt(r.sortChildren)),
        ye && cn(r.parent || ye, Sn(s), i),
        r.reversed && s.reverse(),
        r.paused && s.paused(!0),
        r.scrollTrigger && Vl(Sn(s), r.scrollTrigger),
        s
      );
    }
    var n = t.prototype;
    return (
      (n.to = function (i, s, a) {
        return ki(0, arguments, this), this;
      }),
      (n.from = function (i, s, a) {
        return ki(1, arguments, this), this;
      }),
      (n.fromTo = function (i, s, a, o) {
        return ki(2, arguments, this), this;
      }),
      (n.set = function (i, s, a) {
        return (
          (s.duration = 0),
          (s.parent = this),
          Pi(s).repeatDelay || (s.repeat = 0),
          (s.immediateRender = !!s.immediateRender),
          new Oe(i, s, Vt(this, a), 1),
          this
        );
      }),
      (n.call = function (i, s, a) {
        return cn(this, Oe.delayedCall(0, i, s), a);
      }),
      (n.staggerTo = function (i, s, a, o, l, c, u) {
        return (
          (a.duration = s),
          (a.stagger = a.stagger || o),
          (a.onComplete = c),
          (a.onCompleteParams = u),
          (a.parent = this),
          new Oe(i, a, Vt(this, l)),
          this
        );
      }),
      (n.staggerFrom = function (i, s, a, o, l, c, u) {
        return (
          (a.runBackwards = 1),
          (Pi(a).immediateRender = bt(a.immediateRender)),
          this.staggerTo(i, s, a, o, l, c, u)
        );
      }),
      (n.staggerFromTo = function (i, s, a, o, l, c, u, f) {
        return (
          (o.startAt = a),
          (Pi(o).immediateRender = bt(o.immediateRender)),
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
          p,
          m,
          h,
          g,
          y,
          v,
          _,
          x,
          S,
          w,
          C;
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
              ((w = this._yoyo),
              (g = c + this._rDelay),
              this._repeat < -1 && i < 0)
            )
              return this.totalTime(g * 100 + i, s, a);
            if (
              ((d = $e(u % g)),
              u === l
                ? ((h = this._repeat), (d = c))
                : ((S = $e(u / g)),
                  (h = ~~S),
                  h && h === S && ((d = c), h--),
                  d > c && (d = c)),
              (S = Gr(this._tTime, g)),
              !o &&
                this._tTime &&
                S !== h &&
                this._tTime - S * g - this._dur <= 0 &&
                (S = h),
              w && h & 1 && ((d = c - d), (C = 1)),
              h !== S && !this._lock)
            ) {
              var P = w && S & 1,
                A = P === (w && h & 1);
              if (
                (h < S && (P = !P),
                (o = P ? 0 : u % c ? c : u),
                (this._lock = 1),
                (this.render(o || (C ? 0 : $e(h * g)), s, !c)._lock = 0),
                (this._tTime = u),
                !s && this.parent && Lt(this, "onRepeat"),
                this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1),
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
                  this.vars.repeatRefresh && !C && this.invalidate()),
                (this._lock = 0),
                !this._ts && !y)
              )
                return this;
              oc(this, C);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((v = zp(this, $e(o), $e(d))), v && (u -= d - (d = v._start))),
            (this._tTime = u),
            (this._time = d),
            (this._act = !_),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = i),
              (o = 0)),
            !o && u && !s && !S && (Lt(this, "onStart"), this._tTime !== u))
          )
            return this;
          if (d >= o && i >= 0)
            for (p = this._first; p; ) {
              if (
                ((m = p._next), (p._act || d >= p._start) && p._ts && v !== p)
              ) {
                if (p.parent !== this) return this.render(i, s, a);
                if (
                  (p.render(
                    p._ts > 0
                      ? (d - p._start) * p._ts
                      : (p._dirty ? p.totalDuration() : p._tDur) +
                          (d - p._start) * p._ts,
                    s,
                    a
                  ),
                  d !== this._time || (!this._ts && !y))
                ) {
                  (v = 0), m && (u += this._zTime = -1e-8);
                  break;
                }
              }
              p = m;
            }
          else {
            p = this._last;
            for (var E = i < 0 ? i : d; p; ) {
              if (
                ((m = p._prev), (p._act || E <= p._end) && p._ts && v !== p)
              ) {
                if (p.parent !== this) return this.render(i, s, a);
                if (
                  (p.render(
                    p._ts > 0
                      ? (E - p._start) * p._ts
                      : (p._dirty ? p.totalDuration() : p._tDur) +
                          (E - p._start) * p._ts,
                    s,
                    a || (Ke && qa(p))
                  ),
                  d !== this._time || (!this._ts && !y))
                ) {
                  (v = 0), m && (u += this._zTime = E ? -1e-8 : tt);
                  break;
                }
              }
              p = m;
            }
          }
          if (
            v &&
            !s &&
            (this.pause(),
            (v.render(d >= o ? 0 : -1e-8)._zTime = d >= o ? 1 : -1),
            this._ts)
          )
            return (this._start = x), ks(this), this.render(i, s, a);
          this._onUpdate && !s && Lt(this, "onUpdate", !0),
            ((u === l && this._tTime >= this.totalDuration()) || (!u && o)) &&
              (x === this._start || Math.abs(_) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((i || !c) &&
                  ((u === l && this._ts > 0) || (!u && this._ts < 0)) &&
                  Fn(this, 1),
                !s &&
                  !(i < 0 && !o) &&
                  (u || o || !l) &&
                  (Lt(
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
        if ((Tn(s) || (s = Vt(this, s, i)), !(i instanceof Ii))) {
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
        return this !== i ? cn(this, i, s) : this;
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
          : (i.parent === this && ws(this, i),
            i === this._recent && (this._recent = this._last),
            dr(this));
      }),
      (n.totalTime = function (i, s) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = $e(
                It.time -
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
        return (this.labels[i] = Vt(this, s)), this;
      }),
      (n.removeLabel = function (i) {
        return delete this.labels[i], this;
      }),
      (n.addPause = function (i, s, a) {
        var o = Oe.delayedCall(0, s || wi, a);
        return (
          (o.data = "isPause"), (this._hasPause = 1), cn(this, o, Vt(this, i))
        );
      }),
      (n.removePause = function (i) {
        var s = this._first;
        for (i = Vt(this, i); s; )
          s._start === i && s.data === "isPause" && Fn(s), (s = s._next);
      }),
      (n.killTweensOf = function (i, s, a) {
        for (var o = this.getTweensOf(i, a), l = o.length; l--; )
          Bn !== o[l] && o[l].kill(i, s);
        return this;
      }),
      (n.getTweensOf = function (i, s) {
        for (var a = [], o = Wt(i), l = this._first, c = Tn(s), u; l; )
          l instanceof Oe
            ? Mp(l._targets, o) &&
              (c
                ? (!Bn || (l._initted && l._ts)) &&
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
          o = Vt(a, i),
          l = s,
          c = l.startAt,
          u = l.onStart,
          f = l.onStartParams,
          d = l.immediateRender,
          p,
          m = Oe.to(
            a,
            At(
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
                  if ((a.pause(), !p)) {
                    var g =
                      s.duration ||
                      Math.abs(
                        (o - (c && "time" in c ? c.time : a._time)) /
                          a.timeScale()
                      );
                    m._dur !== g && jr(m, g, 0, 1).render(m._time, !0, !0),
                      (p = 1);
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
        return this.tweenTo(s, At({ startAt: { time: Vt(this, i) } }, a));
      }),
      (n.recent = function () {
        return this._recent;
      }),
      (n.nextLabel = function (i) {
        return i === void 0 && (i = this._time), Jl(this, Vt(this, i));
      }),
      (n.previousLabel = function (i) {
        return i === void 0 && (i = this._time), Jl(this, Vt(this, i), 1);
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
        return dr(this);
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
          dr(this)
        );
      }),
      (n.totalDuration = function (i) {
        var s = 0,
          a = this,
          o = a._last,
          l = an,
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
                ? ((a._lock = 1), (cn(a, o, u - o._delay, 1)._lock = 0))
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
          jr(a, a === ye && a._time > s ? a._time : s, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (t.updateRoot = function (i) {
        if ((ye._ts && (zl(ye, Ps(i, ye)), (Ll = It.frame)), It.frame >= Il)) {
          Il += Mt.autoSleep || 120;
          var s = ye._first;
          if ((!s || !s._ts) && Mt.autoSleep && It._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || It.sleep();
          }
        }
      }),
      t
    );
  })(Ii);
  At(dt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Zp = function (t, n, r, i, s, a, o) {
      var l = new St(this._pt, t, n, 0, 1, mc, null, s),
        c = 0,
        u = 0,
        f,
        d,
        p,
        m,
        h,
        g,
        y,
        v;
      for (
        l.b = r,
          l.e = i,
          r += "",
          i += "",
          (y = ~i.indexOf("random(")) && (i = $i(i)),
          a && ((v = [r, i]), a(v, t, n), (r = v[0]), (i = v[1])),
          d = r.match(Aa) || [];
        (f = Aa.exec(i));

      )
        (m = f[0]),
          (h = i.substring(c, f.index)),
          p ? (p = (p + 1) % 5) : h.substr(-5) === "rgba(" && (p = 1),
          m !== d[u++] &&
            ((g = parseFloat(d[u - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: h || u === 1 ? h : ",",
              s: g,
              c: m.charAt(1) === "=" ? Yr(g, m) - g : parseFloat(m) - g,
              m: p && p < 4 ? Math.round : 0,
            }),
            (c = Aa.lastIndex));
      return (
        (l.c = c < i.length ? i.substring(c, i.length) : ""),
        (l.fp = o),
        (kl.test(i) || y) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    Ka = function (t, n, r, i, s, a, o, l, c, u) {
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
        p = Se(f) ? (c ? rm : hc) : Ja,
        m;
      if (
        (Be(i) &&
          (~i.indexOf("random(") && (i = $i(i)),
          i.charAt(1) === "=" &&
            ((m = Yr(d, i) + (rt(d) || 0)), (m || m === 0) && (i = m))),
        !u || d !== i || Qa)
      )
        return !isNaN(d * i) && i !== ""
          ? ((m = new St(
              this._pt,
              t,
              n,
              +d || 0,
              i - (d || 0),
              typeof f == "boolean" ? sm : pc,
              0,
              p
            )),
            c && (m.fp = c),
            o && m.modifier(o, this, t),
            (this._pt = m))
          : (!f && !(n in t) && Da(n, i),
            Zp.call(this, t, n, d, i, p, l || Mt.stringFilter, c));
    },
    Jp = function (t, n, r, i, s) {
      if (
        (Se(t) && (t = Di(t, s, n, r, i)),
        !on(t) || (t.style && t.nodeType) || nt(t) || wl(t))
      )
        return Be(t) ? Di(t, s, n, r, i) : t;
      var a = {},
        o;
      for (o in t) a[o] = Di(t[o], s, n, r, i);
      return a;
    },
    uc = function (t, n, r, i, s, a) {
      var o, l, c, u;
      if (
        Ot[t] &&
        (o = new Ot[t]()).init(
          s,
          o.rawVars ? n[t] : Jp(n[t], i, s, a, r),
          r,
          i,
          a
        ) !== !1 &&
        ((r._pt = l = new St(r._pt, s, t, 0, 1, o.render, o, 0, o.priority)),
        r !== Ur)
      )
        for (c = r._ptLookup[r._targets.indexOf(s)], u = o._props.length; u--; )
          c[o._props[u]] = l;
      return o;
    },
    Bn,
    Qa,
    Za = function e(t, n, r) {
      var i = t.vars,
        s = i.ease,
        a = i.startAt,
        o = i.immediateRender,
        l = i.lazy,
        c = i.onUpdate,
        u = i.runBackwards,
        f = i.yoyoEase,
        d = i.keyframes,
        p = i.autoRevert,
        m = t._dur,
        h = t._startAt,
        g = t._targets,
        y = t.parent,
        v = y && y.data === "nested" ? y.vars.targets : g,
        _ = t._overwrite === "auto" && !Pa,
        x = t.timeline,
        S,
        w,
        C,
        P,
        A,
        E,
        $,
        b,
        T,
        O,
        I,
        k,
        L;
      if (
        (x && (!d || !s) && (s = "none"),
        (t._ease = hr(s, Vr.ease)),
        (t._yEase = f ? ac(hr(f === !0 ? s : f, Vr.ease)) : 0),
        f &&
          t._yoyo &&
          !t._repeat &&
          ((f = t._yEase), (t._yEase = t._ease), (t._ease = f)),
        (t._from = !x && !!i.runBackwards),
        !x || (d && !i.stagger))
      ) {
        if (
          ((b = g[0] ? fr(g[0]).harness : 0),
          (k = b && i[b.prop]),
          (S = Cs(i, za)),
          h &&
            (h._zTime < 0 && h.progress(1),
            n < 0 && u && o && !p
              ? h.render(-1, !0)
              : h.revert(u && m ? Ss : Pp),
            (h._lazy = 0)),
          a)
        ) {
          if (
            (Fn(
              (t._startAt = Oe.set(
                g,
                At(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: y,
                    immediateRender: !0,
                    lazy: !h && bt(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      c &&
                      function () {
                        return Lt(t, "onUpdate");
                      },
                    stagger: 0,
                  },
                  a
                )
              ))
            ),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            n < 0 && (Ke || (!o && !p)) && t._startAt.revert(Ss),
            o && m && n <= 0 && r <= 0)
          ) {
            n && (t._zTime = n);
            return;
          }
        } else if (u && m && !h) {
          if (
            (n && (o = !1),
            (C = At(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !h && bt(l),
                immediateRender: o,
                stagger: 0,
                parent: y,
              },
              S
            )),
            k && (C[b.prop] = k),
            Fn((t._startAt = Oe.set(g, C))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            n < 0 && (Ke ? t._startAt.revert(Ss) : t._startAt.render(-1, !0)),
            (t._zTime = n),
            !o)
          )
            e(t._startAt, tt, tt);
          else if (!n) return;
        }
        for (
          t._pt = t._ptCache = 0, l = (m && bt(l)) || (l && !m), w = 0;
          w < g.length;
          w++
        ) {
          if (
            ((A = g[w]),
            ($ = A._gsap || Ha(g)[w]._gsap),
            (t._ptLookup[w] = O = {}),
            Ra[$.id] && Nn.length && Es(),
            (I = v === g ? w : v.indexOf(A)),
            b &&
              (T = new b()).init(A, k || S, t, I, v) !== !1 &&
              ((t._pt = P =
                new St(t._pt, A, T.name, 0, 1, T.render, T, 0, T.priority)),
              T._props.forEach(function (D) {
                O[D] = P;
              }),
              T.priority && (E = 1)),
            !b || k)
          )
            for (C in S)
              Ot[C] && (T = uc(C, S, t, I, A, v))
                ? T.priority && (E = 1)
                : (O[C] = P =
                    Ka.call(t, A, C, "get", S[C], I, v, 0, i.stringFilter));
          t._op && t._op[w] && t.kill(A, t._op[w]),
            _ &&
              t._pt &&
              ((Bn = t),
              ye.killTweensOf(A, O, t.globalTime(n)),
              (L = !t.parent),
              (Bn = 0)),
            t._pt && l && (Ra[$.id] = 1);
        }
        E && gc(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = c),
        (t._initted = (!t._op || t._pt) && !L),
        d && n <= 0 && x.render(an, !0, !0);
    },
    em = function (t, n, r, i, s, a, o, l) {
      var c = ((t._pt && t._ptCache) || (t._ptCache = {}))[n],
        u,
        f,
        d,
        p;
      if (!c)
        for (
          c = t._ptCache[n] = [], d = t._ptLookup, p = t._targets.length;
          p--;

        ) {
          if (((u = d[p][n]), u && u.d && u.d._pt))
            for (u = u.d._pt; u && u.p !== n && u.fp !== n; ) u = u._next;
          if (!u)
            return (
              (Qa = 1),
              (t.vars[n] = "+=0"),
              Za(t, o),
              (Qa = 0),
              l ? Ci(n + " not eligible for reset") : 1
            );
          c.push(u);
        }
      for (p = c.length; p--; )
        (f = c[p]),
          (u = f._pt || f),
          (u.s = (i || i === 0) && !s ? i : u.s + (i || 0) + a * u.c),
          (u.c = r - u.s),
          f.e && (f.e = Ce(r) + rt(f.e)),
          f.b && (f.b = u.s + rt(f.b));
    },
    tm = function (t, n) {
      var r = t[0] ? fr(t[0]).harness : 0,
        i = r && r.aliases,
        s,
        a,
        o,
        l;
      if (!i) return n;
      s = Xr({}, n);
      for (a in i)
        if (a in s)
          for (l = i[a].split(","), o = l.length; o--; ) s[l[o]] = s[a];
      return s;
    },
    nm = function (t, n, r, i) {
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
    Di = function (t, n, r, i, s) {
      return Se(t)
        ? t.call(n, r, i, s)
        : Be(t) && ~t.indexOf("random(")
        ? $i(t)
        : t;
    },
    fc = Fa + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    dc = {};
  xt(fc + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
    return (dc[e] = 1);
  });
  var Oe = (function (e) {
    El(t, e);
    function t(r, i, s, a) {
      var o;
      typeof i == "number" && ((s.duration = i), (i = s), (s = null)),
        (o = e.call(this, a ? i : Pi(i)) || this);
      var l = o.vars,
        c = l.duration,
        u = l.delay,
        f = l.immediateRender,
        d = l.stagger,
        p = l.overwrite,
        m = l.keyframes,
        h = l.defaults,
        g = l.scrollTrigger,
        y = l.yoyoEase,
        v = i.parent || ye,
        _ = (nt(r) || wl(r) ? Tn(r[0]) : "length" in i) ? [r] : Wt(r),
        x,
        S,
        w,
        C,
        P,
        A,
        E,
        $;
      if (
        ((o._targets = _.length
          ? Ha(_)
          : Ci(
              "GSAP target " + r + " not found. https://gsap.com",
              !Mt.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = p),
        m || d || bs(c) || bs(u))
      ) {
        if (
          ((i = o.vars),
          (x = o.timeline =
            new dt({
              data: "nested",
              defaults: h || {},
              targets: v && v.data === "nested" ? v.vars.targets : _,
            })),
          x.kill(),
          (x.parent = x._dp = Sn(o)),
          (x._start = 0),
          d || bs(c) || bs(u))
        ) {
          if (((C = _.length), (E = d && jl(d)), on(d)))
            for (P in d) ~fc.indexOf(P) && ($ || ($ = {}), ($[P] = d[P]));
          for (S = 0; S < C; S++)
            (w = Cs(i, dc)),
              (w.stagger = 0),
              y && (w.yoyoEase = y),
              $ && Xr(w, $),
              (A = _[S]),
              (w.duration = +Di(c, Sn(o), S, A, _)),
              (w.delay = (+Di(u, Sn(o), S, A, _) || 0) - o._delay),
              !d &&
                C === 1 &&
                w.delay &&
                ((o._delay = u = w.delay), (o._start += u), (w.delay = 0)),
              x.to(A, w, E ? E(S, A, _) : 0),
              (x._ease = ne.none);
          x.duration() ? (c = u = 0) : (o.timeline = 0);
        } else if (m) {
          Pi(At(x.vars.defaults, { ease: "none" })),
            (x._ease = hr(m.ease || i.ease || "none"));
          var b = 0,
            T,
            O,
            I;
          if (nt(m))
            m.forEach(function (k) {
              return x.to(_, k, ">");
            }),
              x.duration();
          else {
            w = {};
            for (P in m)
              P === "ease" || P === "easeEach" || nm(P, m[P], w, m.easeEach);
            for (P in w)
              for (
                T = w[P].sort(function (k, L) {
                  return k.t - L.t;
                }),
                  b = 0,
                  S = 0;
                S < T.length;
                S++
              )
                (O = T[S]),
                  (I = {
                    ease: O.e,
                    duration: ((O.t - (S ? T[S - 1].t : 0)) / 100) * c,
                  }),
                  (I[P] = O.v),
                  x.to(_, I, b),
                  (b += I.duration);
            x.duration() < c && x.to({}, { duration: c - x.duration() });
          }
        }
        c || o.duration((c = x.duration()));
      } else o.timeline = 0;
      return (
        p === !0 && !Pa && ((Bn = Sn(o)), ye.killTweensOf(_), (Bn = 0)),
        cn(v, Sn(o), s),
        i.reversed && o.reverse(),
        i.paused && o.paused(!0),
        (f ||
          (!c &&
            !m &&
            o._start === $e(v._time) &&
            bt(f) &&
            Lp(Sn(o)) &&
            v.data !== "nested")) &&
          ((o._tTime = -1e-8), o.render(Math.max(0, -u) || 0)),
        g && Vl(Sn(o), g),
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
          p,
          m,
          h,
          g,
          y,
          v,
          _,
          x;
        if (!c) Dp(this, i, s, a);
        else if (
          f !== this._tTime ||
          !i ||
          a ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== u) ||
          this._lazy
        ) {
          if (((d = f), (_ = this.timeline), this._repeat)) {
            if (((h = c + this._rDelay), this._repeat < -1 && u))
              return this.totalTime(h * 100 + i, s, a);
            if (
              ((d = $e(f % h)),
              f === l
                ? ((m = this._repeat), (d = c))
                : ((g = $e(f / h)),
                  (m = ~~g),
                  m && m === g ? ((d = c), m--) : d > c && (d = c)),
              (y = this._yoyo && m & 1),
              y && ((x = this._yEase), (d = c - d)),
              (g = Gr(this._tTime, h)),
              d === o && !a && this._initted && m === g)
            )
              return (this._tTime = f), this;
            m !== g &&
              (_ && this._yEase && oc(_, y),
              this.vars.repeatRefresh &&
                !y &&
                !this._lock &&
                d !== h &&
                this._initted &&
                ((this._lock = a = 1),
                (this.render($e(h * m), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Wl(this, u ? i : d, a, s, f)) return (this._tTime = 0), this;
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
            !o && f && !s && !g && (Lt(this, "onStart"), this._tTime !== f))
          )
            return this;
          for (p = this._pt; p; ) p.r(v, p.d), (p = p._next);
          (_ && _.render(i < 0 ? i : _._dur * _._ease(d / this._dur), s, a)) ||
            (this._startAt && (this._zTime = i)),
            this._onUpdate &&
              !s &&
              (u && Ba(this, i, s, a), Lt(this, "onUpdate")),
            this._repeat &&
              m !== g &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              Lt(this, "onRepeat"),
            (f === this._tDur || !f) &&
              this._tTime === f &&
              (u && !this._onUpdate && Ba(this, i, !0, !0),
              (i || !c) &&
                ((f === this._tDur && this._ts > 0) || (!f && this._ts < 0)) &&
                Fn(this, 1),
              !s &&
                !(u && !o) &&
                (f || o || y) &&
                (Lt(this, f === l ? "onComplete" : "onReverseComplete", !0),
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
        Li || It.wake(), this._ts || this.play();
        var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          u;
        return (
          this._initted || Za(this, c),
          (u = this._ease(c / this._dur)),
          em(this, i, s, a, o, u, c, l)
            ? this.resetTo(i, s, a, o, 1)
            : (Ms(this, 0),
              this.parent ||
                Hl(
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
              ? Oi(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!Ke),
            this
          );
        if (this.timeline) {
          var a = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(i, s, Bn && Bn.vars.overwrite !== !0)
              ._first || Oi(this),
            this.parent &&
              a !== this.timeline.totalDuration() &&
              jr(this, (this._dur * this.timeline._tDur) / a, 0, 1),
            this
          );
        }
        var o = this._targets,
          l = i ? Wt(i) : o,
          c = this._ptLookup,
          u = this._pt,
          f,
          d,
          p,
          m,
          h,
          g,
          y;
        if ((!s || s === "all") && Op(o, l))
          return s === "all" && (this._pt = 0), Oi(this);
        for (
          f = this._op = this._op || [],
            s !== "all" &&
              (Be(s) &&
                ((h = {}),
                xt(s, function (v) {
                  return (h[v] = 1);
                }),
                (s = h)),
              (s = tm(o, s))),
            y = o.length;
          y--;

        )
          if (~l.indexOf(o[y])) {
            (d = c[y]),
              s === "all"
                ? ((f[y] = s), (m = d), (p = {}))
                : ((p = f[y] = f[y] || {}), (m = s));
            for (h in m)
              (g = d && d[h]),
                g &&
                  ((!("kill" in g.d) || g.d.kill(h) === !0) &&
                    ws(this, g, "_pt"),
                  delete d[h]),
                p !== "all" && (p[h] = 1);
          }
        return this._initted && !this._pt && u && Oi(this), this;
      }),
      (t.to = function (i, s) {
        return new t(i, s, arguments[2]);
      }),
      (t.from = function (i, s) {
        return ki(1, arguments);
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
        return ki(2, arguments);
      }),
      (t.set = function (i, s) {
        return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new t(i, s);
      }),
      (t.killTweensOf = function (i, s, a) {
        return ye.killTweensOf(i, s, a);
      }),
      t
    );
  })(Ii);
  At(Oe.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    xt("staggerTo,staggerFrom,staggerFromTo", function (e) {
      Oe[e] = function () {
        var t = new dt(),
          n = Wa.call(arguments, 0);
        return n.splice(e === "staggerFromTo" ? 5 : 4, 0, 0), t[e].apply(t, n);
      };
    });
  var Ja = function (t, n, r) {
      return (t[n] = r);
    },
    hc = function (t, n, r) {
      return t[n](r);
    },
    rm = function (t, n, r, i) {
      return t[n](i.fp, r);
    },
    im = function (t, n, r) {
      return t.setAttribute(n, r);
    },
    eo = function (t, n) {
      return Se(t[n]) ? hc : Ma(t[n]) && t.setAttribute ? im : Ja;
    },
    pc = function (t, n) {
      return n.set(n.t, n.p, Math.round((n.s + n.c * t) * 1e6) / 1e6, n);
    },
    sm = function (t, n) {
      return n.set(n.t, n.p, !!(n.s + n.c * t), n);
    },
    mc = function (t, n) {
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
    to = function (t, n) {
      for (var r = n._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    am = function (t, n, r, i) {
      for (var s = this._pt, a; s; )
        (a = s._next), s.p === i && s.modifier(t, n, r), (s = a);
    },
    om = function (t) {
      for (var n = this._pt, r, i; n; )
        (i = n._next),
          (n.p === t && !n.op) || n.op === t
            ? ws(this, n, "_pt")
            : n.dep || (r = 1),
          (n = i);
      return !r;
    },
    lm = function (t, n, r, i) {
      i.mSet(t, n, i.m.call(i.tween, r, i.mt), i);
    },
    gc = function (t) {
      for (var n = t._pt, r, i, s, a; n; ) {
        for (r = n._next, i = s; i && i.pr > n.pr; ) i = i._next;
        (n._prev = i ? i._prev : a) ? (n._prev._next = n) : (s = n),
          (n._next = i) ? (i._prev = n) : (a = n),
          (n = r);
      }
      t._pt = s;
    },
    St = (function () {
      function e(n, r, i, s, a, o, l, c, u) {
        (this.t = r),
          (this.s = s),
          (this.c = a),
          (this.p = i),
          (this.r = o || pc),
          (this.d = l || this),
          (this.set = c || Ja),
          (this.pr = u || 0),
          (this._next = n),
          n && (n._prev = this);
      }
      var t = e.prototype;
      return (
        (t.modifier = function (r, i, s) {
          (this.mSet = this.mSet || this.set),
            (this.set = lm),
            (this.m = r),
            (this.mt = s),
            (this.tween = i);
        }),
        e
      );
    })();
  xt(
    Fa +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (e) {
      return (za[e] = 1);
    }
  ),
    ($t.TweenMax = $t.TweenLite = Oe),
    ($t.TimelineLite = $t.TimelineMax = dt),
    (ye = new dt({
      sortChildren: !1,
      defaults: Vr,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Mt.stringFilter = sc);
  var mr = [],
    $s = {},
    cm = [],
    vc = 0,
    um = 0,
    no = function (t) {
      return ($s[t] || cm).map(function (n) {
        return n();
      });
    },
    ro = function () {
      var t = Date.now(),
        n = [];
      t - vc > 2 &&
        (no("matchMediaInit"),
        mr.forEach(function (r) {
          var i = r.queries,
            s = r.conditions,
            a,
            o,
            l,
            c;
          for (o in i)
            (a = ln.matchMedia(i[o]).matches),
              a && (l = 1),
              a !== s[o] && ((s[o] = a), (c = 1));
          c && (r.revert(), l && n.push(r));
        }),
        no("matchMediaRevert"),
        n.forEach(function (r) {
          return r.onMatch(r, function (i) {
            return r.add(null, i);
          });
        }),
        (vc = t),
        no("matchMedia"));
    },
    yc = (function () {
      function e(n, r) {
        (this.selector = r && Ya(r)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = um++),
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
                s && (a.selector = Ya(s)),
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
                      c instanceof dt
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
            for (var a = mr.length; a--; )
              mr[a].id === this.id && mr.splice(a, 1);
        }),
        (t.revert = function (r) {
          this.kill(r || {});
        }),
        e
      );
    })(),
    fm = (function () {
      function e(n) {
        (this.contexts = []), (this.scope = n), me && me.data.push(this);
      }
      var t = e.prototype;
      return (
        (t.add = function (r, i, s) {
          on(r) || (r = { matches: r });
          var a = new yc(0, s || this.scope),
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
              : ((l = ln.matchMedia(r[c])),
                l &&
                  (mr.indexOf(a) < 0 && mr.push(a),
                  (o[c] = l.matches) && (u = 1),
                  l.addListener
                    ? l.addListener(ro)
                    : l.addEventListener("change", ro)));
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
    Os = {
      registerPlugin: function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        n.forEach(function (i) {
          return tc(i);
        });
      },
      timeline: function (t) {
        return new dt(t);
      },
      getTweensOf: function (t, n) {
        return ye.getTweensOf(t, n);
      },
      getProperty: function (t, n, r, i) {
        Be(t) && (t = Wt(t)[0]);
        var s = fr(t || {}).get,
          a = r ? Nl : Rl;
        return (
          r === "native" && (r = ""),
          t &&
            (n
              ? a(((Ot[n] && Ot[n].get) || s)(t, n, r, i))
              : function (o, l, c) {
                  return a(((Ot[o] && Ot[o].get) || s)(t, o, l, c));
                })
        );
      },
      quickSetter: function (t, n, r) {
        if (((t = Wt(t)), t.length > 1)) {
          var i = t.map(function (u) {
              return Tt.quickSetter(u, n, r);
            }),
            s = i.length;
          return function (u) {
            for (var f = s; f--; ) i[f](u);
          };
        }
        t = t[0] || {};
        var a = Ot[n],
          o = fr(t),
          l = (o.harness && (o.harness.aliases || {})[n]) || n,
          c = a
            ? function (u) {
                var f = new a();
                (Ur._pt = 0),
                  f.init(t, r ? u + r : u, Ur, 0, [t]),
                  f.render(1, f),
                  Ur._pt && to(1, Ur);
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
          s = Tt.to(
            t,
            At(
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
        return t && t.ease && (t.ease = hr(t.ease, Vr.ease)), Fl(Vr, t || {});
      },
      config: function (t) {
        return Fl(Mt, t || {});
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
            !Ot[o] &&
            !$t[o] &&
            Ci(n + " effect requires " + o + " plugin.")
          );
        }),
          (Na[n] = function (o, l, c) {
            return r(Wt(o), At(l || {}, s), c);
          }),
          a &&
            (dt.prototype[n] = function (o, l, c) {
              return this.add(Na[n](o, on(l) ? l : (c = l) && {}, this), c);
            });
      },
      registerEase: function (t, n) {
        ne[t] = hr(n);
      },
      parseEase: function (t, n) {
        return arguments.length ? hr(t, n) : ne;
      },
      getById: function (t) {
        return ye.getById(t);
      },
      exportRoot: function (t, n) {
        t === void 0 && (t = {});
        var r = new dt(t),
          i,
          s;
        for (
          r.smoothChildTiming = bt(t.smoothChildTiming),
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
              cn(r, i, i._start - i._delay),
            (i = s);
        return cn(ye, r, 0), r;
      },
      context: function (t, n) {
        return t ? new yc(t, n) : me;
      },
      matchMedia: function (t) {
        return new fm(t);
      },
      matchMediaRefresh: function () {
        return (
          mr.forEach(function (t) {
            var n = t.conditions,
              r,
              i;
            for (i in n) n[i] && ((n[i] = !1), (r = 1));
            r && t.revert();
          }) || ro()
        );
      },
      addEventListener: function (t, n) {
        var r = $s[t] || ($s[t] = []);
        ~r.indexOf(n) || r.push(n);
      },
      removeEventListener: function (t, n) {
        var r = $s[t],
          i = r && r.indexOf(n);
        i >= 0 && r.splice(i, 1);
      },
      utils: {
        wrap: Vp,
        wrapYoyo: Wp,
        distribute: jl,
        random: Kl,
        snap: Ul,
        normalize: Bp,
        getUnit: rt,
        clamp: Np,
        splitColor: nc,
        toArray: Wt,
        selector: Ya,
        mapRange: Zl,
        pipe: Hp,
        unitize: qp,
        interpolate: Yp,
        shuffle: Gl,
      },
      install: Ol,
      effects: Na,
      ticker: It,
      updateRoot: dt.updateRoot,
      plugins: Ot,
      globalTimeline: ye,
      core: {
        PropTween: St,
        globals: Al,
        Tween: Oe,
        Timeline: dt,
        Animation: Ii,
        getCache: fr,
        _removeLinkedListItem: ws,
        reverting: function () {
          return Ke;
        },
        context: function (t) {
          return t && me && (me.data.push(t), (t._ctx = me)), me;
        },
        suppressOverwrites: function (t) {
          return (Pa = t);
        },
      },
    };
  xt("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
    return (Os[e] = Oe[e]);
  }),
    It.add(dt.updateRoot),
    (Ur = Os.to({}, { duration: 0 }));
  var dm = function (t, n) {
      for (var r = t._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
        r = r._next;
      return r;
    },
    hm = function (t, n) {
      var r = t._targets,
        i,
        s,
        a;
      for (i in n)
        for (s = r.length; s--; )
          (a = t._ptLookup[s][i]),
            a &&
              (a = a.d) &&
              (a._pt && (a = dm(a, i)),
              a && a.modifier && a.modifier(n[i], t, r[s], i));
    },
    io = function (t, n) {
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
                xt(s, function (u) {
                  return (l[u] = 1);
                }),
                (s = l)),
              n)
            ) {
              l = {};
              for (c in s) l[c] = n(s[c]);
              s = l;
            }
            hm(o, s);
          };
        },
      };
    },
    Tt =
      Os.registerPlugin(
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
        io("roundProps", Xa),
        io("modifiers"),
        io("snap", Ul)
      ) || Os;
  (Oe.version = dt.version = Tt.version = "3.13.0"),
    ($l = 1),
    $a() && Kr(),
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
   */ var _c,
    Vn,
    Qr,
    so,
    gr,
    bc,
    ao,
    pm = function () {
      return typeof window != "undefined";
    },
    En = {},
    vr = 180 / Math.PI,
    Zr = Math.PI / 180,
    Jr = Math.atan2,
    xc = 1e8,
    oo = /([A-Z])/g,
    mm = /(left|right|width|margin|padding|x)/i,
    gm = /[\s,\(]\S/,
    un = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    lo = function (t, n) {
      return n.set(n.t, n.p, Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u, n);
    },
    vm = function (t, n) {
      return n.set(
        n.t,
        n.p,
        t === 1 ? n.e : Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u,
        n
      );
    },
    ym = function (t, n) {
      return n.set(
        n.t,
        n.p,
        t ? Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u : n.b,
        n
      );
    },
    _m = function (t, n) {
      var r = n.s + n.c * t;
      n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
    },
    Sc = function (t, n) {
      return n.set(n.t, n.p, t ? n.e : n.b, n);
    },
    Tc = function (t, n) {
      return n.set(n.t, n.p, t !== 1 ? n.b : n.e, n);
    },
    bm = function (t, n, r) {
      return (t.style[n] = r);
    },
    xm = function (t, n, r) {
      return t.style.setProperty(n, r);
    },
    Sm = function (t, n, r) {
      return (t._gsap[n] = r);
    },
    Tm = function (t, n, r) {
      return (t._gsap.scaleX = t._gsap.scaleY = r);
    },
    Em = function (t, n, r, i, s) {
      var a = t._gsap;
      (a.scaleX = a.scaleY = r), a.renderTransform(s, a);
    },
    Cm = function (t, n, r, i, s) {
      var a = t._gsap;
      (a[n] = r), a.renderTransform(s, a);
    },
    _e = "transform",
    Et = _e + "Origin",
    wm = function e(t, n) {
      var r = this,
        i = this.target,
        s = i.style,
        a = i._gsap;
      if (t in En && s) {
        if (((this.tfm = this.tfm || {}), t !== "transform"))
          (t = un[t] || t),
            ~t.indexOf(",")
              ? t.split(",").forEach(function (o) {
                  return (r.tfm[o] = Cn(i, o));
                })
              : (this.tfm[t] = a.x ? a[t] : Cn(i, t)),
            t === Et && (this.tfm.zOrigin = a.zOrigin);
        else
          return un.transform.split(",").forEach(function (o) {
            return e.call(r, o, n);
          });
        if (this.props.indexOf(_e) >= 0) return;
        a.svg &&
          ((this.svgo = i.getAttribute("data-svg-origin")),
          this.props.push(Et, n, "")),
          (t = _e);
      }
      (s || n) && this.props.push(t, n, s[t]);
    },
    Ec = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    },
    Pm = function () {
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
                : t[s].replace(oo, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (a in this.tfm) i[a] = this.tfm[a];
        i.svg &&
          (i.renderTransform(),
          n.setAttribute("data-svg-origin", this.svgo || "")),
          (s = ao()),
          (!s || !s.isStart) &&
            !r[_e] &&
            (Ec(r),
            i.zOrigin &&
              r[Et] &&
              ((r[Et] += " " + i.zOrigin + "px"),
              (i.zOrigin = 0),
              i.renderTransform()),
            (i.uncache = 1));
      }
    },
    Cc = function (t, n) {
      var r = { target: t, props: [], revert: Pm, save: wm };
      return (
        t._gsap || Tt.core.getCache(t),
        n &&
          t.style &&
          t.nodeType &&
          n.split(",").forEach(function (i) {
            return r.save(i);
          }),
        r
      );
    },
    wc,
    co = function (t, n) {
      var r = Vn.createElementNS
        ? Vn.createElementNS(
            (n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : Vn.createElement(t);
      return r && r.style ? r : Vn.createElement(t);
    },
    Yt = function e(t, n, r) {
      var i = getComputedStyle(t);
      return (
        i[n] ||
        i.getPropertyValue(n.replace(oo, "-$1").toLowerCase()) ||
        i.getPropertyValue(n) ||
        (!r && e(t, ei(n) || n, 1)) ||
        ""
      );
    },
    Pc = "O,Moz,ms,Ms,Webkit".split(","),
    ei = function (t, n, r) {
      var i = n || gr,
        s = i.style,
        a = 5;
      if (t in s && !r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        a-- && !(Pc[a] + t in s);

      );
      return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? Pc[a] : "") + t;
    },
    uo = function () {
      pm() &&
        window.document &&
        ((_c = window),
        (Vn = _c.document),
        (Qr = Vn.documentElement),
        (gr = co("div") || { style: {} }),
        co("div"),
        (_e = ei(_e)),
        (Et = _e + "Origin"),
        (gr.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (wc = !!ei("perspective")),
        (ao = Tt.core.reverting),
        (so = 1));
    },
    kc = function (t) {
      var n = t.ownerSVGElement,
        r = co(
          "svg",
          (n && n.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        i = t.cloneNode(!0),
        s;
      (i.style.display = "block"), r.appendChild(i), Qr.appendChild(r);
      try {
        s = i.getBBox();
      } catch (a) {}
      return r.removeChild(i), Qr.removeChild(r), s;
    },
    Mc = function (t, n) {
      for (var r = n.length; r--; )
        if (t.hasAttribute(n[r])) return t.getAttribute(n[r]);
    },
    $c = function (t) {
      var n, r;
      try {
        n = t.getBBox();
      } catch (i) {
        (n = kc(t)), (r = 1);
      }
      return (
        (n && (n.width || n.height)) || r || (n = kc(t)),
        n && !n.width && !n.x && !n.y
          ? {
              x: +Mc(t, ["x", "cx", "x1"]) || 0,
              y: +Mc(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : n
      );
    },
    Oc = function (t) {
      return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && $c(t));
    },
    yr = function (t, n) {
      if (n) {
        var r = t.style,
          i;
        n in En && n !== Et && (n = _e),
          r.removeProperty
            ? ((i = n.substr(0, 2)),
              (i === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
              r.removeProperty(
                i === "--" ? n : n.replace(oo, "-$1").toLowerCase()
              ))
            : r.removeAttribute(n);
      }
    },
    Wn = function (t, n, r, i, s, a) {
      var o = new St(t._pt, n, r, 0, 1, a ? Tc : Sc);
      return (t._pt = o), (o.b = i), (o.e = s), t._props.push(r), o;
    },
    Ac = { deg: 1, rad: 1, turn: 1 },
    km = { grid: 1, flex: 1 },
    Yn = function e(t, n, r, i) {
      var s = parseFloat(r) || 0,
        a = (r + "").trim().substr((s + "").length) || "px",
        o = gr.style,
        l = mm.test(n),
        c = t.tagName.toLowerCase() === "svg",
        u = (c ? "client" : "offset") + (l ? "Width" : "Height"),
        f = 100,
        d = i === "px",
        p = i === "%",
        m,
        h,
        g,
        y;
      if (i === a || !s || Ac[i] || Ac[a]) return s;
      if (
        (a !== "px" && !d && (s = e(t, n, r, "px")),
        (y = t.getCTM && Oc(t)),
        (p || a === "%") && (En[n] || ~n.indexOf("adius")))
      )
        return (
          (m = y ? t.getBBox()[l ? "width" : "height"] : t[u]),
          Ce(p ? (s / m) * f : (s / 100) * m)
        );
      if (
        ((o[l ? "width" : "height"] = f + (d ? a : i)),
        (h =
          (i !== "rem" && ~n.indexOf("adius")) ||
          (i === "em" && t.appendChild && !c)
            ? t
            : t.parentNode),
        y && (h = (t.ownerSVGElement || {}).parentNode),
        (!h || h === Vn || !h.appendChild) && (h = Vn.body),
        (g = h._gsap),
        g && p && g.width && l && g.time === It.time && !g.uncache)
      )
        return Ce((s / g.width) * f);
      if (p && (n === "height" || n === "width")) {
        var v = t.style[n];
        (t.style[n] = f + i), (m = t[u]), v ? (t.style[n] = v) : yr(t, n);
      } else
        (p || a === "%") &&
          !km[Yt(h, "display")] &&
          (o.position = Yt(t, "position")),
          h === t && (o.position = "static"),
          h.appendChild(gr),
          (m = gr[u]),
          h.removeChild(gr),
          (o.position = "absolute");
      return (
        l && p && ((g = fr(h)), (g.time = It.time), (g.width = h[u])),
        Ce(d ? (m * s) / f : m && s ? (f / m) * s : 0)
      );
    },
    Cn = function (t, n, r, i) {
      var s;
      return (
        so || uo(),
        n in un &&
          n !== "transform" &&
          ((n = un[n]), ~n.indexOf(",") && (n = n.split(",")[0])),
        En[n] && n !== "transform"
          ? ((s = Ri(t, i)),
            (s =
              n !== "transformOrigin"
                ? s[n]
                : s.svg
                ? s.origin
                : Ls(Yt(t, Et)) + " " + s.zOrigin + "px"))
          : ((s = t.style[n]),
            (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) &&
              (s =
                (As[n] && As[n](t, n, r)) ||
                Yt(t, n) ||
                Dl(t, n) ||
                (n === "opacity" ? 1 : 0))),
        r && !~(s + "").trim().indexOf(" ") ? Yn(t, n, s, r) + r : s
      );
    },
    Mm = function (t, n, r, i) {
      if (!r || r === "none") {
        var s = ei(n, t, 1),
          a = s && Yt(t, s, 1);
        a && a !== r
          ? ((n = s), (r = a))
          : n === "borderColor" && (r = Yt(t, "borderTopColor"));
      }
      var o = new St(this._pt, t.style, n, 0, 1, mc),
        l = 0,
        c = 0,
        u,
        f,
        d,
        p,
        m,
        h,
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
          (i = Yt(t, i.substring(4, i.indexOf(")")))),
        i === "auto" &&
          ((h = t.style[n]),
          (t.style[n] = i),
          (i = Yt(t, n) || i),
          h ? (t.style[n] = h) : yr(t, n)),
        (u = [r, i]),
        sc(u),
        (r = u[0]),
        (i = u[1]),
        (d = r.match(Wr) || []),
        (S = i.match(Wr) || []),
        S.length)
      ) {
        for (; (f = Wr.exec(i)); )
          (g = f[0]),
            (v = i.substring(l, f.index)),
            m
              ? (m = (m + 1) % 5)
              : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") &&
                (m = 1),
            g !== (h = d[c++] || "") &&
              ((p = parseFloat(h) || 0),
              (x = h.substr((p + "").length)),
              g.charAt(1) === "=" && (g = Yr(p, g) + x),
              (y = parseFloat(g)),
              (_ = g.substr((y + "").length)),
              (l = Wr.lastIndex - _.length),
              _ ||
                ((_ = _ || Mt.units[n] || x),
                l === i.length && ((i += _), (o.e += _))),
              x !== _ && (p = Yn(t, n, h, _) || 0),
              (o._pt = {
                _next: o._pt,
                p: v || c === 1 ? v : ",",
                s: p,
                c: y - p,
                m: (m && m < 4) || n === "zIndex" ? Math.round : 0,
              }));
        o.c = l < i.length ? i.substring(l, i.length) : "";
      } else o.r = n === "display" && i === "none" ? Tc : Sc;
      return kl.test(i) && (o.e = 0), (this._pt = o), o;
    },
    Lc = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    $m = function (t) {
      var n = t.split(" "),
        r = n[0],
        i = n[1] || "50%";
      return (
        (r === "top" || r === "bottom" || i === "left" || i === "right") &&
          ((t = r), (r = i), (i = t)),
        (n[0] = Lc[r] || r),
        (n[1] = Lc[i] || i),
        n.join(" ")
      );
    },
    Om = function (t, n) {
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
              En[o] && ((l = 1), (o = o === "transformOrigin" ? Et : _e)),
              yr(r, o);
        l &&
          (yr(r, _e),
          a &&
            (a.svg && r.removeAttribute("transform"),
            (i.scale = i.rotate = i.translate = "none"),
            Ri(r, 1),
            (a.uncache = 1),
            Ec(i)));
      }
    },
    As = {
      clearProps: function (t, n, r, i, s) {
        if (s.data !== "isFromStart") {
          var a = (t._pt = new St(t._pt, n, r, 0, 0, Om));
          return (a.u = i), (a.pr = -10), (a.tween = s), t._props.push(r), 1;
        }
      },
    },
    zi = [1, 0, 0, 1, 0, 0],
    Ic = {},
    Dc = function (t) {
      return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
    },
    zc = function (t) {
      var n = Yt(t, _e);
      return Dc(n) ? zi : n.substr(7).match(Pl).map(Ce);
    },
    fo = function (t, n) {
      var r = t._gsap || fr(t),
        i = t.style,
        s = zc(t),
        a,
        o,
        l,
        c;
      return r.svg && t.getAttribute("transform")
        ? ((l = t.transform.baseVal.consolidate().matrix),
          (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
          s.join(",") === "1,0,0,1,0,0" ? zi : s)
        : (s === zi &&
            !t.offsetParent &&
            t !== Qr &&
            !r.svg &&
            ((l = i.display),
            (i.display = "block"),
            (a = t.parentNode),
            (!a || (!t.offsetParent && !t.getBoundingClientRect().width)) &&
              ((c = 1), (o = t.nextElementSibling), Qr.appendChild(t)),
            (s = zc(t)),
            l ? (i.display = l) : yr(t, "display"),
            c &&
              (o
                ? a.insertBefore(t, o)
                : a
                ? a.appendChild(t)
                : Qr.removeChild(t))),
          n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    ho = function (t, n, r, i, s, a) {
      var o = t._gsap,
        l = s || fo(t, !0),
        c = o.xOrigin || 0,
        u = o.yOrigin || 0,
        f = o.xOffset || 0,
        d = o.yOffset || 0,
        p = l[0],
        m = l[1],
        h = l[2],
        g = l[3],
        y = l[4],
        v = l[5],
        _ = n.split(" "),
        x = parseFloat(_[0]) || 0,
        S = parseFloat(_[1]) || 0,
        w,
        C,
        P,
        A;
      r
        ? l !== zi &&
          (C = p * g - m * h) &&
          ((P = x * (g / C) + S * (-h / C) + (h * v - g * y) / C),
          (A = x * (-m / C) + S * (p / C) - (p * v - m * y) / C),
          (x = P),
          (S = A))
        : ((w = $c(t)),
          (x = w.x + (~_[0].indexOf("%") ? (x / 100) * w.width : x)),
          (S =
            w.y + (~(_[1] || _[0]).indexOf("%") ? (S / 100) * w.height : S))),
        i || (i !== !1 && o.smooth)
          ? ((y = x - c),
            (v = S - u),
            (o.xOffset = f + (y * p + v * h) - y),
            (o.yOffset = d + (y * m + v * g) - v))
          : (o.xOffset = o.yOffset = 0),
        (o.xOrigin = x),
        (o.yOrigin = S),
        (o.smooth = !!i),
        (o.origin = n),
        (o.originIsAbsolute = !!r),
        (t.style[Et] = "0px 0px"),
        a &&
          (Wn(a, o, "xOrigin", c, x),
          Wn(a, o, "yOrigin", u, S),
          Wn(a, o, "xOffset", f, o.xOffset),
          Wn(a, o, "yOffset", d, o.yOffset)),
        t.setAttribute("data-svg-origin", x + " " + S);
    },
    Ri = function (t, n) {
      var r = t._gsap || new cc(t);
      if ("x" in r && !n && !r.uncache) return r;
      var i = t.style,
        s = r.scaleX < 0,
        a = "px",
        o = "deg",
        l = getComputedStyle(t),
        c = Yt(t, Et) || "0",
        u,
        f,
        d,
        p,
        m,
        h,
        g,
        y,
        v,
        _,
        x,
        S,
        w,
        C,
        P,
        A,
        E,
        $,
        b,
        T,
        O,
        I,
        k,
        L,
        D,
        R,
        M,
        B,
        K,
        se,
        le,
        fe;
      return (
        (u = f = d = h = g = y = v = _ = x = 0),
        (p = m = 1),
        (r.svg = !!(t.getCTM && Oc(t))),
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
        (C = fo(t, r.svg)),
        r.svg &&
          (r.uncache
            ? ((D = t.getBBox()),
              (c = r.xOrigin - D.x + "px " + (r.yOrigin - D.y) + "px"),
              (L = ""))
            : (L = !n && t.getAttribute("data-svg-origin")),
          ho(t, L || c, !!L || r.originIsAbsolute, r.smooth !== !1, C)),
        (S = r.xOrigin || 0),
        (w = r.yOrigin || 0),
        C !== zi &&
          (($ = C[0]),
          (b = C[1]),
          (T = C[2]),
          (O = C[3]),
          (u = I = C[4]),
          (f = k = C[5]),
          C.length === 6
            ? ((p = Math.sqrt($ * $ + b * b)),
              (m = Math.sqrt(O * O + T * T)),
              (h = $ || b ? Jr(b, $) * vr : 0),
              (v = T || O ? Jr(T, O) * vr + h : 0),
              v && (m *= Math.abs(Math.cos(v * Zr))),
              r.svg && ((u -= S - (S * $ + w * T)), (f -= w - (S * b + w * O))))
            : ((fe = C[6]),
              (se = C[7]),
              (M = C[8]),
              (B = C[9]),
              (K = C[10]),
              (le = C[11]),
              (u = C[12]),
              (f = C[13]),
              (d = C[14]),
              (P = Jr(fe, K)),
              (g = P * vr),
              P &&
                ((A = Math.cos(-P)),
                (E = Math.sin(-P)),
                (L = I * A + M * E),
                (D = k * A + B * E),
                (R = fe * A + K * E),
                (M = I * -E + M * A),
                (B = k * -E + B * A),
                (K = fe * -E + K * A),
                (le = se * -E + le * A),
                (I = L),
                (k = D),
                (fe = R)),
              (P = Jr(-T, K)),
              (y = P * vr),
              P &&
                ((A = Math.cos(-P)),
                (E = Math.sin(-P)),
                (L = $ * A - M * E),
                (D = b * A - B * E),
                (R = T * A - K * E),
                (le = O * E + le * A),
                ($ = L),
                (b = D),
                (T = R)),
              (P = Jr(b, $)),
              (h = P * vr),
              P &&
                ((A = Math.cos(P)),
                (E = Math.sin(P)),
                (L = $ * A + b * E),
                (D = I * A + k * E),
                (b = b * A - $ * E),
                (k = k * A - I * E),
                ($ = L),
                (I = D)),
              g &&
                Math.abs(g) + Math.abs(h) > 359.9 &&
                ((g = h = 0), (y = 180 - y)),
              (p = Ce(Math.sqrt($ * $ + b * b + T * T))),
              (m = Ce(Math.sqrt(k * k + fe * fe))),
              (P = Jr(I, k)),
              (v = Math.abs(P) > 2e-4 ? P * vr : 0),
              (x = le ? 1 / (le < 0 ? -le : le) : 0)),
          r.svg &&
            ((L = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !Dc(Yt(t, _e))),
            L && t.setAttribute("transform", L))),
        Math.abs(v) > 90 &&
          Math.abs(v) < 270 &&
          (s
            ? ((p *= -1),
              (v += h <= 0 ? 180 : -180),
              (h += h <= 0 ? 180 : -180))
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
        (r.scaleX = Ce(p)),
        (r.scaleY = Ce(m)),
        (r.rotation = Ce(h) + o),
        (r.rotationX = Ce(g) + o),
        (r.rotationY = Ce(y) + o),
        (r.skewX = v + o),
        (r.skewY = _ + o),
        (r.transformPerspective = x + a),
        (r.zOrigin = parseFloat(c.split(" ")[2]) || (!n && r.zOrigin) || 0) &&
          (i[Et] = Ls(c)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = Mt.force3D),
        (r.renderTransform = r.svg ? Lm : wc ? Rc : Am),
        (r.uncache = 0),
        r
      );
    },
    Ls = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    po = function (t, n, r) {
      var i = rt(n);
      return Ce(parseFloat(n) + parseFloat(Yn(t, "x", r + "px", i))) + i;
    },
    Am = function (t, n) {
      (n.z = "0px"),
        (n.rotationY = n.rotationX = "0deg"),
        (n.force3D = 0),
        Rc(t, n);
    },
    _r = "0deg",
    Ni = "0px",
    br = ") ",
    Rc = function (t, n) {
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
        p = r.skewY,
        m = r.scaleX,
        h = r.scaleY,
        g = r.transformPerspective,
        y = r.force3D,
        v = r.target,
        _ = r.zOrigin,
        x = "",
        S = (y === "auto" && t && t !== 1) || y === !0;
      if (_ && (f !== _r || u !== _r)) {
        var w = parseFloat(u) * Zr,
          C = Math.sin(w),
          P = Math.cos(w),
          A;
        (w = parseFloat(f) * Zr),
          (A = Math.cos(w)),
          (a = po(v, a, C * A * -_)),
          (o = po(v, o, -Math.sin(w) * -_)),
          (l = po(v, l, P * A * -_ + _));
      }
      g !== Ni && (x += "perspective(" + g + br),
        (i || s) && (x += "translate(" + i + "%, " + s + "%) "),
        (S || a !== Ni || o !== Ni || l !== Ni) &&
          (x +=
            l !== Ni || S
              ? "translate3d(" + a + ", " + o + ", " + l + ") "
              : "translate(" + a + ", " + o + br),
        c !== _r && (x += "rotate(" + c + br),
        u !== _r && (x += "rotateY(" + u + br),
        f !== _r && (x += "rotateX(" + f + br),
        (d !== _r || p !== _r) && (x += "skew(" + d + ", " + p + br),
        (m !== 1 || h !== 1) && (x += "scale(" + m + ", " + h + br),
        (v.style[_e] = x || "translate(0, 0)");
    },
    Lm = function (t, n) {
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
        p = r.target,
        m = r.xOrigin,
        h = r.yOrigin,
        g = r.xOffset,
        y = r.yOffset,
        v = r.forceCSS,
        _ = parseFloat(a),
        x = parseFloat(o),
        S,
        w,
        C,
        P,
        A;
      (l = parseFloat(l)),
        (c = parseFloat(c)),
        (u = parseFloat(u)),
        u && ((u = parseFloat(u)), (c += u), (l += u)),
        l || c
          ? ((l *= Zr),
            (c *= Zr),
            (S = Math.cos(l) * f),
            (w = Math.sin(l) * f),
            (C = Math.sin(l - c) * -d),
            (P = Math.cos(l - c) * d),
            c &&
              ((u *= Zr),
              (A = Math.tan(c - u)),
              (A = Math.sqrt(1 + A * A)),
              (C *= A),
              (P *= A),
              u &&
                ((A = Math.tan(u)),
                (A = Math.sqrt(1 + A * A)),
                (S *= A),
                (w *= A))),
            (S = Ce(S)),
            (w = Ce(w)),
            (C = Ce(C)),
            (P = Ce(P)))
          : ((S = f), (P = d), (w = C = 0)),
        ((_ && !~(a + "").indexOf("px")) || (x && !~(o + "").indexOf("px"))) &&
          ((_ = Yn(p, "x", a, "px")), (x = Yn(p, "y", o, "px"))),
        (m || h || g || y) &&
          ((_ = Ce(_ + m - (m * S + h * C) + g)),
          (x = Ce(x + h - (m * w + h * P) + y))),
        (i || s) &&
          ((A = p.getBBox()),
          (_ = Ce(_ + (i / 100) * A.width)),
          (x = Ce(x + (s / 100) * A.height))),
        (A =
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
        p.setAttribute("transform", A),
        v && (p.style[_e] = A);
    },
    Im = function (t, n, r, i, s) {
      var a = 360,
        o = Be(s),
        l = parseFloat(s) * (o && ~s.indexOf("rad") ? vr : 1),
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
            ? (c = ((c + a * xc) % a) - ~~(c / a) * a)
            : f === "ccw" && c > 0 && (c = ((c - a * xc) % a) - ~~(c / a) * a)),
        (t._pt = d = new St(t._pt, n, r, i, c, vm)),
        (d.e = u),
        (d.u = "deg"),
        t._props.push(r),
        d
      );
    },
    Nc = function (t, n) {
      for (var r in n) t[r] = n[r];
      return t;
    },
    Dm = function (t, n, r) {
      var i = Nc({}, r._gsap),
        s = "perspective,force3D,transformOrigin,svgOrigin",
        a = r.style,
        o,
        l,
        c,
        u,
        f,
        d,
        p,
        m;
      i.svg
        ? ((c = r.getAttribute("transform")),
          r.setAttribute("transform", ""),
          (a[_e] = n),
          (o = Ri(r, 1)),
          yr(r, _e),
          r.setAttribute("transform", c))
        : ((c = getComputedStyle(r)[_e]),
          (a[_e] = n),
          (o = Ri(r, 1)),
          (a[_e] = c));
      for (l in En)
        (c = i[l]),
          (u = o[l]),
          c !== u &&
            s.indexOf(l) < 0 &&
            ((p = rt(c)),
            (m = rt(u)),
            (f = p !== m ? Yn(r, l, c, m) : parseFloat(c)),
            (d = parseFloat(u)),
            (t._pt = new St(t._pt, o, l, f, d - f, lo)),
            (t._pt.u = m || 0),
            t._props.push(l));
      Nc(o, i);
    };
  xt("padding,margin,Width,Radius", function (e, t) {
    var n = "Top",
      r = "Right",
      i = "Bottom",
      s = "Left",
      a = (t < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function (
        o
      ) {
        return t < 2 ? e + o : "border" + o + e;
      });
    As[t > 1 ? "border" + e : e] = function (o, l, c, u, f) {
      var d, p;
      if (arguments.length < 4)
        return (
          (d = a.map(function (m) {
            return Cn(o, m, c);
          })),
          (p = d.join(" ")),
          p.split(d[0]).length === 5 ? d[0] : p
        );
      (d = (u + "").split(" ")),
        (p = {}),
        a.forEach(function (m, h) {
          return (p[m] = d[h] = d[h] || d[((h - 1) / 2) | 0]);
        }),
        o.init(l, p, f);
    };
  });
  var Fc = {
    name: "css",
    register: uo,
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
        p,
        m,
        h,
        g,
        y,
        v,
        _,
        x,
        S,
        w,
        C,
        P;
      so || uo(),
        (this.styles = this.styles || Cc(t)),
        (P = this.styles.props),
        (this.tween = r);
      for (h in n)
        if (
          h !== "autoRound" &&
          ((u = n[h]), !(Ot[h] && uc(h, n, r, i, t, s)))
        ) {
          if (
            ((p = typeof u),
            (m = As[h]),
            p === "function" && ((u = u.call(r, i, t, s)), (p = typeof u)),
            p === "string" && ~u.indexOf("random(") && (u = $i(u)),
            m)
          )
            m(this, t, h, u, r) && (C = 1);
          else if (h.substr(0, 2) === "--")
            (c = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
              (u += ""),
              (qn.lastIndex = 0),
              qn.test(c) || ((g = rt(c)), (y = rt(u))),
              y ? g !== y && (c = Yn(t, h, c, y) + y) : g && (u += g),
              this.add(o, "setProperty", c, u, i, s, 0, 0, h),
              a.push(h),
              P.push(h, 0, o[h]);
          else if (p !== "undefined") {
            if (
              (l && h in l
                ? ((c =
                    typeof l[h] == "function" ? l[h].call(r, i, t, s) : l[h]),
                  Be(c) && ~c.indexOf("random(") && (c = $i(c)),
                  rt(c + "") ||
                    c === "auto" ||
                    (c += Mt.units[h] || rt(Cn(t, h)) || ""),
                  (c + "").charAt(1) === "=" && (c = Cn(t, h)))
                : (c = Cn(t, h)),
              (d = parseFloat(c)),
              (v = p === "string" && u.charAt(1) === "=" && u.substr(0, 2)),
              v && (u = u.substr(2)),
              (f = parseFloat(u)),
              h in un &&
                (h === "autoAlpha" &&
                  (d === 1 && Cn(t, "visibility") === "hidden" && f && (d = 0),
                  P.push("visibility", 0, o.visibility),
                  Wn(
                    this,
                    o,
                    "visibility",
                    d ? "inherit" : "hidden",
                    f ? "inherit" : "hidden",
                    !f
                  )),
                h !== "scale" &&
                  h !== "transform" &&
                  ((h = un[h]), ~h.indexOf(",") && (h = h.split(",")[0]))),
              (_ = h in En),
              _)
            ) {
              if (
                (this.styles.save(h),
                p === "string" &&
                  u.substring(0, 6) === "var(--" &&
                  ((u = Yt(t, u.substring(4, u.indexOf(")")))),
                  (f = parseFloat(u))),
                x ||
                  ((S = t._gsap),
                  (S.renderTransform && !n.parseTransform) ||
                    Ri(t, n.parseTransform),
                  (w = n.smoothOrigin !== !1 && S.smooth),
                  (x = this._pt =
                    new St(this._pt, o, _e, 0, 1, S.renderTransform, S, 0, -1)),
                  (x.dep = 1)),
                h === "scale")
              )
                (this._pt = new St(
                  this._pt,
                  S,
                  "scaleY",
                  S.scaleY,
                  (v ? Yr(S.scaleY, v + f) : f) - S.scaleY || 0,
                  lo
                )),
                  (this._pt.u = 0),
                  a.push("scaleY", h),
                  (h += "X");
              else if (h === "transformOrigin") {
                P.push(Et, 0, o[Et]),
                  (u = $m(u)),
                  S.svg
                    ? ho(t, u, 0, w, 0, this)
                    : ((y = parseFloat(u.split(" ")[2]) || 0),
                      y !== S.zOrigin && Wn(this, S, "zOrigin", S.zOrigin, y),
                      Wn(this, o, h, Ls(c), Ls(u)));
                continue;
              } else if (h === "svgOrigin") {
                ho(t, u, 1, w, 0, this);
                continue;
              } else if (h in Ic) {
                Im(this, S, h, d, v ? Yr(d, v + u) : u);
                continue;
              } else if (h === "smoothOrigin") {
                Wn(this, S, "smooth", S.smooth, u);
                continue;
              } else if (h === "force3D") {
                S[h] = u;
                continue;
              } else if (h === "transform") {
                Dm(this, u, t);
                continue;
              }
            } else h in o || (h = ei(h) || h);
            if (
              _ ||
              ((f || f === 0) && (d || d === 0) && !gm.test(u) && h in o)
            )
              (g = (c + "").substr((d + "").length)),
                f || (f = 0),
                (y = rt(u) || (h in Mt.units ? Mt.units[h] : g)),
                g !== y && (d = Yn(t, h, c, y)),
                (this._pt = new St(
                  this._pt,
                  _ ? S : o,
                  h,
                  d,
                  (v ? Yr(d, v + f) : f) - d,
                  !_ && (y === "px" || h === "zIndex") && n.autoRound !== !1
                    ? _m
                    : lo
                )),
                (this._pt.u = y || 0),
                g !== y && y !== "%" && ((this._pt.b = c), (this._pt.r = ym));
            else if (h in o) Mm.call(this, t, h, c, v ? v + u : u);
            else if (h in t) this.add(t, h, c || t[h], v ? v + u : u, i, s);
            else if (h !== "parseTransform") {
              Da(h, u);
              continue;
            }
            _ ||
              (h in o
                ? P.push(h, 0, o[h])
                : typeof t[h] == "function"
                ? P.push(h, 2, t[h]())
                : P.push(h, 1, c || t[h])),
              a.push(h);
          }
        }
      C && gc(this);
    },
    render: function (t, n) {
      if (n.tween._time || !ao())
        for (var r = n._pt; r; ) r.r(t, r.d), (r = r._next);
      else n.styles.revert();
    },
    get: Cn,
    aliases: un,
    getSetter: function (t, n, r) {
      var i = un[n];
      return (
        i && i.indexOf(",") < 0 && (n = i),
        n in En && n !== Et && (t._gsap.x || Cn(t, "x"))
          ? r && bc === r
            ? n === "scale"
              ? Tm
              : Sm
            : (bc = r || {}) && (n === "scale" ? Em : Cm)
          : t.style && !Ma(t.style[n])
          ? bm
          : ~n.indexOf("-")
          ? xm
          : eo(t, n)
      );
    },
    core: { _removeProperty: yr, _getMatrix: fo },
  };
  (Tt.utils.checkPrefix = ei),
    (Tt.core.getStyleSaver = Cc),
    (function (e, t, n, r) {
      var i = xt(e + "," + t + "," + n, function (s) {
        En[s] = 1;
      });
      xt(t, function (s) {
        (Mt.units[s] = "deg"), (Ic[s] = 1);
      }),
        (un[i[13]] = e + "," + t),
        xt(r, function (s) {
          var a = s.split(":");
          un[a[1]] = i[a[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    xt(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (e) {
        Mt.units[e] = "px";
      }
    ),
    Tt.registerPlugin(Fc);
  var F = Tt.registerPlugin(Fc) || Tt;
  F.core.Tween;
  function zm(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function Rm(e, t, n) {
    return t && zm(e.prototype, t), e;
  }
  /*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Qe,
    Is,
    Dt,
    Xn,
    Gn,
    ti,
    Hc,
    xr,
    Fi,
    qc,
    wn,
    Kt,
    Bc,
    Vc = function () {
      return (
        Qe ||
        (typeof window != "undefined" &&
          (Qe = window.gsap) &&
          Qe.registerPlugin &&
          Qe)
      );
    },
    Wc = 1,
    ni = [],
    Z = [],
    fn = [],
    Hi = Date.now,
    mo = function (t, n) {
      return n;
    },
    Nm = function () {
      var t = Fi.core,
        n = t.bridge || {},
        r = t._scrollers,
        i = t._proxies;
      r.push.apply(r, Z),
        i.push.apply(i, fn),
        (Z = r),
        (fn = i),
        (mo = function (a, o) {
          return n[a](o);
        });
    },
    jn = function (t, n) {
      return ~fn.indexOf(t) && fn[fn.indexOf(t) + 1][n];
    },
    qi = function (t) {
      return !!~qc.indexOf(t);
    },
    ht = function (t, n, r, i, s) {
      return t.addEventListener(n, r, { passive: i !== !1, capture: !!s });
    },
    pt = function (t, n, r, i) {
      return t.removeEventListener(n, r, !!i);
    },
    Ds = "scrollLeft",
    zs = "scrollTop",
    go = function () {
      return (wn && wn.isPressed) || Z.cache++;
    },
    Rs = function (t, n) {
      var r = function i(s) {
        if (s || s === 0) {
          Wc && (Dt.history.scrollRestoration = "manual");
          var a = wn && wn.isPressed;
          (s = i.v = Math.round(s) || (wn && wn.iOS ? 1 : 0)),
            t(s),
            (i.cacheID = Z.cache),
            a && mo("ss", s);
        } else
          (n || Z.cache !== i.cacheID || mo("ref")) &&
            ((i.cacheID = Z.cache), (i.v = t()));
        return i.v + i.offset;
      };
      return (r.offset = 0), t && r;
    },
    mt = {
      s: Ds,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: Rs(function (e) {
        return arguments.length
          ? Dt.scrollTo(e, Re.sc())
          : Dt.pageXOffset || Xn[Ds] || Gn[Ds] || ti[Ds] || 0;
      }),
    },
    Re = {
      s: zs,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: mt,
      sc: Rs(function (e) {
        return arguments.length
          ? Dt.scrollTo(mt.sc(), e)
          : Dt.pageYOffset || Xn[zs] || Gn[zs] || ti[zs] || 0;
      }),
    },
    Ct = function (t, n) {
      return (
        ((n && n._ctx && n._ctx.selector) || Qe.utils.toArray)(t)[0] ||
        (typeof t == "string" && Qe.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", t)
          : null)
      );
    },
    Fm = function (t, n) {
      for (var r = n.length; r--; )
        if (n[r] === t || n[r].contains(t)) return !0;
      return !1;
    },
    Un = function (t, n) {
      var r = n.s,
        i = n.sc;
      qi(t) && (t = Xn.scrollingElement || Gn);
      var s = Z.indexOf(t),
        a = i === Re.sc ? 1 : 2;
      !~s && (s = Z.push(t) - 1), Z[s + a] || ht(t, "scroll", go);
      var o = Z[s + a],
        l =
          o ||
          (Z[s + a] =
            Rs(jn(t, r), !0) ||
            (qi(t)
              ? i
              : Rs(function (c) {
                  return arguments.length ? (t[r] = c) : t[r];
                })));
      return (
        (l.target = t),
        o || (l.smooth = Qe.getProperty(t, "scrollBehavior") === "smooth"),
        l
      );
    },
    vo = function (t, n, r) {
      var i = t,
        s = t,
        a = Hi(),
        o = a,
        l = n || 50,
        c = Math.max(500, l * 3),
        u = function (m, h) {
          var g = Hi();
          h || g - a > l
            ? ((s = i), (i = m), (o = a), (a = g))
            : r
            ? (i += m)
            : (i = s + ((m - s) / (g - o)) * (a - o));
        },
        f = function () {
          (s = i = r ? 0 : i), (o = a = 0);
        },
        d = function (m) {
          var h = o,
            g = s,
            y = Hi();
          return (
            (m || m === 0) && m !== i && u(m),
            a === o || y - o > c
              ? 0
              : ((i + (r ? g : -g)) / ((r ? y : a) - h)) * 1e3
          );
        };
      return { update: u, reset: f, getVelocity: d };
    },
    Bi = function (t, n) {
      return (
        n && !t._gsapAllow && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
      );
    },
    Yc = function (t) {
      var n = Math.max.apply(Math, t),
        r = Math.min.apply(Math, t);
      return Math.abs(n) >= Math.abs(r) ? n : r;
    },
    Xc = function () {
      (Fi = Qe.core.globals().ScrollTrigger), Fi && Fi.core && Nm();
    },
    Gc = function (t) {
      return (
        (Qe = t || Vc()),
        !Is &&
          Qe &&
          typeof document != "undefined" &&
          document.body &&
          ((Dt = window),
          (Xn = document),
          (Gn = Xn.documentElement),
          (ti = Xn.body),
          (qc = [Dt, Xn, Gn, ti]),
          Qe.utils.clamp,
          (Bc = Qe.core.context || function () {}),
          (xr = "onpointerenter" in ti ? "pointer" : "mouse"),
          (Hc = we.isTouch =
            Dt.matchMedia &&
            Dt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Dt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (Kt = we.eventTypes =
            (
              "ontouchstart" in Gn
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Gn
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (Wc = 0);
          }, 500),
          Xc(),
          (Is = 1)),
        Is
      );
    };
  (mt.op = Re), (Z.cache = 0);
  var we = (function () {
    function e(n) {
      this.init(n);
    }
    var t = e.prototype;
    return (
      (t.init = function (r) {
        Is || Gc(Qe) || console.warn("Please gsap.registerPlugin(Observer)"),
          Fi || Xc();
        var i = r.tolerance,
          s = r.dragMinimum,
          a = r.type,
          o = r.target,
          l = r.lineHeight,
          c = r.debounce,
          u = r.preventDefault,
          f = r.onStop,
          d = r.onStopDelay,
          p = r.ignore,
          m = r.wheelSpeed,
          h = r.event,
          g = r.onDragStart,
          y = r.onDragEnd,
          v = r.onDrag,
          _ = r.onPress,
          x = r.onRelease,
          S = r.onRight,
          w = r.onLeft,
          C = r.onUp,
          P = r.onDown,
          A = r.onChangeX,
          E = r.onChangeY,
          $ = r.onChange,
          b = r.onToggleX,
          T = r.onToggleY,
          O = r.onHover,
          I = r.onHoverEnd,
          k = r.onMove,
          L = r.ignoreCheck,
          D = r.isNormalizer,
          R = r.onGestureStart,
          M = r.onGestureEnd,
          B = r.onWheel,
          K = r.onEnable,
          se = r.onDisable,
          le = r.onClick,
          fe = r.scrollSpeed,
          ge = r.capture,
          be = r.allowClicks,
          Ye = r.lockAxis,
          Fe = r.onLockAxis;
        (this.target = o = Ct(o) || Gn),
          (this.vars = r),
          p && (p = Qe.utils.toArray(p)),
          (i = i || 1e-9),
          (s = s || 0),
          (m = m || 1),
          (fe = fe || 1),
          (a = a || "wheel,touch,pointer"),
          (c = c !== !1),
          l || (l = parseFloat(Dt.getComputedStyle(ti).lineHeight) || 22);
        var Zt,
          Ie,
          He,
          ee,
          pe,
          Xe,
          Ze,
          z = this,
          Ft = 0,
          On = 0,
          ir = r.passive || (!u && r.passive !== !1),
          Te = Un(o, mt),
          An = Un(o, Re),
          sr = Te(),
          Lr = An(),
          Ge =
            ~a.indexOf("touch") &&
            !~a.indexOf("pointer") &&
            Kt[0] === "pointerdown",
          ar = qi(o),
          Pe = o.ownerDocument || Xn,
          Jt = [0, 0, 0],
          Ut = [0, 0, 0],
          Ln = 0,
          os = function () {
            return (Ln = Hi());
          },
          De = function (Y, ae) {
            return (
              ((z.event = Y) && p && Fm(Y.target, p)) ||
              (ae && Ge && Y.pointerType !== "touch") ||
              (L && L(Y, ae))
            );
          },
          da = function () {
            z._vx.reset(), z._vy.reset(), Ie.pause(), f && f(z);
          },
          In = function () {
            var Y = (z.deltaX = Yc(Jt)),
              ae = (z.deltaY = Yc(Ut)),
              H = Math.abs(Y) >= i,
              G = Math.abs(ae) >= i;
            $ && (H || G) && $(z, Y, ae, Jt, Ut),
              H &&
                (S && z.deltaX > 0 && S(z),
                w && z.deltaX < 0 && w(z),
                A && A(z),
                b && z.deltaX < 0 != Ft < 0 && b(z),
                (Ft = z.deltaX),
                (Jt[0] = Jt[1] = Jt[2] = 0)),
              G &&
                (P && z.deltaY > 0 && P(z),
                C && z.deltaY < 0 && C(z),
                E && E(z),
                T && z.deltaY < 0 != On < 0 && T(z),
                (On = z.deltaY),
                (Ut[0] = Ut[1] = Ut[2] = 0)),
              (ee || He) &&
                (k && k(z),
                He && (g && He === 1 && g(z), v && v(z), (He = 0)),
                (ee = !1)),
              Xe && !(Xe = !1) && Fe && Fe(z),
              pe && (B(z), (pe = !1)),
              (Zt = 0);
          },
          pi = function (Y, ae, H) {
            (Jt[H] += Y),
              (Ut[H] += ae),
              z._vx.update(Y),
              z._vy.update(ae),
              c ? Zt || (Zt = requestAnimationFrame(In)) : In();
          },
          mi = function (Y, ae) {
            Ye &&
              !Ze &&
              ((z.axis = Ze = Math.abs(Y) > Math.abs(ae) ? "x" : "y"),
              (Xe = !0)),
              Ze !== "y" && ((Jt[2] += Y), z._vx.update(Y, !0)),
              Ze !== "x" && ((Ut[2] += ae), z._vy.update(ae, !0)),
              c ? Zt || (Zt = requestAnimationFrame(In)) : In();
          },
          or = function (Y) {
            if (!De(Y, 1)) {
              Y = Bi(Y, u);
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
                  ((He = j ? 2 : 1), j || (z.isDragging = !0), mi(G, W));
            }
          },
          Ir = (z.onPress = function (U) {
            De(U, 1) ||
              (U && U.button) ||
              ((z.axis = Ze = null),
              Ie.pause(),
              (z.isPressed = !0),
              (U = Bi(U)),
              (Ft = On = 0),
              (z.startX = z.x = U.clientX),
              (z.startY = z.y = U.clientY),
              z._vx.reset(),
              z._vy.reset(),
              ht(D ? o : Pe, Kt[1], or, ir, !0),
              (z.deltaX = z.deltaY = 0),
              _ && _(z));
          }),
          te = (z.onRelease = function (U) {
            if (!De(U, 1)) {
              pt(D ? o : Pe, Kt[1], or, !0);
              var Y = !isNaN(z.y - z.startY),
                ae = z.isDragging,
                H =
                  ae &&
                  (Math.abs(z.x - z.startX) > 3 ||
                    Math.abs(z.y - z.startY) > 3),
                G = Bi(U);
              !H &&
                Y &&
                (z._vx.reset(),
                z._vy.reset(),
                u &&
                  be &&
                  Qe.delayedCall(0.08, function () {
                    if (Hi() - Ln > 300 && !U.defaultPrevented) {
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
                f && ae && !D && Ie.restart(!0),
                He && In(),
                y && ae && y(z),
                x && x(z, H);
            }
          }),
          Dr = function (Y) {
            return (
              Y.touches &&
              Y.touches.length > 1 &&
              (z.isGesturing = !0) &&
              R(Y, z.isDragging)
            );
          },
          en = function () {
            return (z.isGesturing = !1) || M(z);
          },
          tn = function (Y) {
            if (!De(Y)) {
              var ae = Te(),
                H = An();
              pi((ae - sr) * fe, (H - Lr) * fe, 1),
                (sr = ae),
                (Lr = H),
                f && Ie.restart(!0);
            }
          },
          nn = function (Y) {
            if (!De(Y)) {
              (Y = Bi(Y, u)), B && (pe = !0);
              var ae =
                (Y.deltaMode === 1
                  ? l
                  : Y.deltaMode === 2
                  ? Dt.innerHeight
                  : 1) * m;
              pi(Y.deltaX * ae, Y.deltaY * ae, 0), f && !D && Ie.restart(!0);
            }
          },
          zr = function (Y) {
            if (!De(Y)) {
              var ae = Y.clientX,
                H = Y.clientY,
                G = ae - z.x,
                W = H - z.y;
              (z.x = ae),
                (z.y = H),
                (ee = !0),
                f && Ie.restart(!0),
                (G || W) && mi(G, W);
            }
          },
          gi = function (Y) {
            (z.event = Y), O(z);
          },
          Dn = function (Y) {
            (z.event = Y), I(z);
          },
          ls = function (Y) {
            return De(Y) || (Bi(Y, u) && le(z));
          };
        (Ie = z._dc = Qe.delayedCall(d || 0.25, da).pause()),
          (z.deltaX = z.deltaY = 0),
          (z._vx = vo(0, 50, !0)),
          (z._vy = vo(0, 50, !0)),
          (z.scrollX = Te),
          (z.scrollY = An),
          (z.isDragging = z.isGesturing = z.isPressed = !1),
          Bc(this),
          (z.enable = function (U) {
            return (
              z.isEnabled ||
                (ht(ar ? Pe : o, "scroll", go),
                a.indexOf("scroll") >= 0 &&
                  ht(ar ? Pe : o, "scroll", tn, ir, ge),
                a.indexOf("wheel") >= 0 && ht(o, "wheel", nn, ir, ge),
                ((a.indexOf("touch") >= 0 && Hc) ||
                  a.indexOf("pointer") >= 0) &&
                  (ht(o, Kt[0], Ir, ir, ge),
                  ht(Pe, Kt[2], te),
                  ht(Pe, Kt[3], te),
                  be && ht(o, "click", os, !0, !0),
                  le && ht(o, "click", ls),
                  R && ht(Pe, "gesturestart", Dr),
                  M && ht(Pe, "gestureend", en),
                  O && ht(o, xr + "enter", gi),
                  I && ht(o, xr + "leave", Dn),
                  k && ht(o, xr + "move", zr)),
                (z.isEnabled = !0),
                (z.isDragging = z.isGesturing = z.isPressed = ee = He = !1),
                z._vx.reset(),
                z._vy.reset(),
                (sr = Te()),
                (Lr = An()),
                U && U.type && Ir(U),
                K && K(z)),
              z
            );
          }),
          (z.disable = function () {
            z.isEnabled &&
              (ni.filter(function (U) {
                return U !== z && qi(U.target);
              }).length || pt(ar ? Pe : o, "scroll", go),
              z.isPressed &&
                (z._vx.reset(), z._vy.reset(), pt(D ? o : Pe, Kt[1], or, !0)),
              pt(ar ? Pe : o, "scroll", tn, ge),
              pt(o, "wheel", nn, ge),
              pt(o, Kt[0], Ir, ge),
              pt(Pe, Kt[2], te),
              pt(Pe, Kt[3], te),
              pt(o, "click", os, !0),
              pt(o, "click", ls),
              pt(Pe, "gesturestart", Dr),
              pt(Pe, "gestureend", en),
              pt(o, xr + "enter", gi),
              pt(o, xr + "leave", Dn),
              pt(o, xr + "move", zr),
              (z.isEnabled = z.isPressed = z.isDragging = !1),
              se && se(z));
          }),
          (z.kill = z.revert =
            function () {
              z.disable();
              var U = ni.indexOf(z);
              U >= 0 && ni.splice(U, 1), wn === z && (wn = 0);
            }),
          ni.push(z),
          D && qi(o) && (wn = z),
          z.enable(h);
      }),
      Rm(e, [
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
  (we.version = "3.13.0"),
    (we.create = function (e) {
      return new we(e);
    }),
    (we.register = Gc),
    (we.getAll = function () {
      return ni.slice();
    }),
    (we.getById = function (e) {
      return ni.filter(function (t) {
        return t.vars.id === e;
      })[0];
    }),
    Vc() && Qe.registerPlugin(we);
  /*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var q,
    ri,
    J,
    he,
    zt,
    oe,
    yo,
    Ns,
    Vi,
    Wi,
    Yi,
    Fs,
    it,
    Hs,
    _o,
    gt,
    jc,
    Uc,
    ii,
    Kc,
    bo,
    Qc,
    vt,
    xo,
    Zc,
    Jc,
    Kn,
    So,
    To,
    si,
    Eo,
    qs,
    Co,
    wo,
    Bs = 1,
    st = Date.now,
    Po = st(),
    Xt = 0,
    Xi = 0,
    eu = function (t, n, r) {
      var i = Rt(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
      return (r["_" + n + "Clamp"] = i), i ? t.substr(6, t.length - 7) : t;
    },
    tu = function (t, n) {
      return n && (!Rt(t) || t.substr(0, 6) !== "clamp(")
        ? "clamp(" + t + ")"
        : t;
    },
    Hm = function e() {
      return Xi && requestAnimationFrame(e);
    },
    nu = function () {
      return (Hs = 1);
    },
    ru = function () {
      return (Hs = 0);
    },
    dn = function (t) {
      return t;
    },
    Gi = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    iu = function () {
      return typeof window != "undefined";
    },
    su = function () {
      return q || (iu() && (q = window.gsap) && q.registerPlugin && q);
    },
    Sr = function (t) {
      return !!~yo.indexOf(t);
    },
    au = function (t) {
      return (
        (t === "Height" ? Eo : J["inner" + t]) ||
        zt["client" + t] ||
        oe["client" + t]
      );
    },
    ou = function (t) {
      return (
        jn(t, "getBoundingClientRect") ||
        (Sr(t)
          ? function () {
              return (ta.width = J.innerWidth), (ta.height = Eo), ta;
            }
          : function () {
              return Pn(t);
            })
      );
    },
    qm = function (t, n, r) {
      var i = r.d,
        s = r.d2,
        a = r.a;
      return (a = jn(t, "getBoundingClientRect"))
        ? function () {
            return a()[i];
          }
        : function () {
            return (n ? au(s) : t["client" + s]) || 0;
          };
    },
    Bm = function (t, n) {
      return !n || ~fn.indexOf(t)
        ? ou(t)
        : function () {
            return ta;
          };
    },
    hn = function (t, n) {
      var r = n.s,
        i = n.d2,
        s = n.d,
        a = n.a;
      return Math.max(
        0,
        (r = "scroll" + i) && (a = jn(t, r))
          ? a() - ou(t)()[s]
          : Sr(t)
          ? (zt[r] || oe[r]) - au(i)
          : t[r] - t["offset" + i]
      );
    },
    Vs = function (t, n) {
      for (var r = 0; r < ii.length; r += 3)
        (!n || ~n.indexOf(ii[r + 1])) && t(ii[r], ii[r + 1], ii[r + 2]);
    },
    Rt = function (t) {
      return typeof t == "string";
    },
    at = function (t) {
      return typeof t == "function";
    },
    ji = function (t) {
      return typeof t == "number";
    },
    Tr = function (t) {
      return typeof t == "object";
    },
    Ui = function (t, n, r) {
      return t && t.progress(n ? 0 : 1) && r && t.pause();
    },
    ko = function (t, n) {
      if (t.enabled) {
        var r = t._ctx
          ? t._ctx.add(function () {
              return n(t);
            })
          : n(t);
        r && r.totalTime && (t.callbackAnimation = r);
      }
    },
    ai = Math.abs,
    lu = "left",
    cu = "top",
    Mo = "right",
    $o = "bottom",
    Er = "width",
    Cr = "height",
    Ki = "Right",
    Qi = "Left",
    Zi = "Top",
    Ji = "Bottom",
    Ae = "padding",
    Gt = "margin",
    oi = "Width",
    Oo = "Height",
    Ne = "px",
    jt = function (t) {
      return J.getComputedStyle(t);
    },
    Vm = function (t) {
      var n = jt(t).position;
      t.style.position = n === "absolute" || n === "fixed" ? n : "relative";
    },
    uu = function (t, n) {
      for (var r in n) r in t || (t[r] = n[r]);
      return t;
    },
    Pn = function (t, n) {
      var r =
          n &&
          jt(t)[_o] !== "matrix(1, 0, 0, 1, 0, 0)" &&
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
    Ws = function (t, n) {
      var r = n.d2;
      return t["offset" + r] || t["client" + r] || 0;
    },
    fu = function (t) {
      var n = [],
        r = t.labels,
        i = t.duration(),
        s;
      for (s in r) n.push(r[s] / i);
      return n;
    },
    Wm = function (t) {
      return function (n) {
        return q.utils.snap(fu(t), n);
      };
    },
    Ao = function (t) {
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
    Ym = function (t) {
      return function (n, r) {
        return Ao(fu(t))(n, r.direction);
      };
    },
    Ys = function (t, n, r, i) {
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
    Xs = function (t, n, r) {
      (r = r && r.wheelHandler), r && (t(n, "wheel", r), t(n, "touchmove", r));
    },
    du = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Gs = { toggleActions: "play", anticipatePin: 0 },
    js = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Us = function (t, n) {
      if (Rt(t)) {
        var r = t.indexOf("="),
          i = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
        ~r && (t.indexOf("%") > r && (i *= n / 100), (t = t.substr(0, r - 1))),
          (t =
            i +
            (t in js
              ? js[t] * n
              : ~t.indexOf("%")
              ? (parseFloat(t) * n) / 100
              : parseFloat(t) || 0));
      }
      return t;
    },
    Ks = function (t, n, r, i, s, a, o, l) {
      var c = s.startColor,
        u = s.endColor,
        f = s.fontSize,
        d = s.indent,
        p = s.fontWeight,
        m = he.createElement("div"),
        h = Sr(r) || jn(r, "pinType") === "fixed",
        g = t.indexOf("scroller") !== -1,
        y = h ? oe : r,
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
          p +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (x += "position:" + ((g || l) && h ? "fixed;" : "absolute;")),
        (g || l || !h) &&
          (x += (i === Re ? Mo : $o) + ":" + (a + parseFloat(d)) + "px;"),
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
        Qs(m, 0, i, v),
        m
      );
    },
    Qs = function (t, n, r, i) {
      var s = { display: "block" },
        a = r[i ? "os2" : "p2"],
        o = r[i ? "p2" : "os2"];
      (t._isFlipped = i),
        (s[r.a + "Percent"] = i ? -100 : 0),
        (s[r.a] = i ? "1px" : 0),
        (s["border" + a + oi] = 1),
        (s["border" + o + oi] = 0),
        (s[r.p] = n + "px"),
        q.set(t, s);
    },
    Q = [],
    Lo = {},
    es,
    hu = function () {
      return st() - Xt > 34 && (es || (es = requestAnimationFrame(kn)));
    },
    li = function () {
      (!vt || !vt.isPressed || vt.startX > oe.clientWidth) &&
        (Z.cache++,
        vt ? es || (es = requestAnimationFrame(kn)) : kn(),
        Xt || Pr("scrollStart"),
        (Xt = st()));
    },
    Io = function () {
      (Jc = J.innerWidth), (Zc = J.innerHeight);
    },
    ts = function (t) {
      Z.cache++,
        (t === !0 ||
          (!it &&
            !Qc &&
            !he.fullscreenElement &&
            !he.webkitFullscreenElement &&
            (!xo ||
              Jc !== J.innerWidth ||
              Math.abs(J.innerHeight - Zc) > J.innerHeight * 0.25))) &&
          Ns.restart(!0);
    },
    wr = {},
    Xm = [],
    pu = function e() {
      return We(X, "scrollEnd", e) || Mr(!0);
    },
    Pr = function (t) {
      return (
        (wr[t] &&
          wr[t].map(function (n) {
            return n();
          })) ||
        Xm
      );
    },
    Nt = [],
    mu = function (t) {
      for (var n = 0; n < Nt.length; n += 5)
        (!t || (Nt[n + 4] && Nt[n + 4].query === t)) &&
          ((Nt[n].style.cssText = Nt[n + 1]),
          Nt[n].getBBox && Nt[n].setAttribute("transform", Nt[n + 2] || ""),
          (Nt[n + 3].uncache = 1));
    },
    Do = function (t, n) {
      var r;
      for (gt = 0; gt < Q.length; gt++)
        (r = Q[gt]),
          r && (!n || r._ctx === n) && (t ? r.kill(1) : r.revert(!0, !0));
      (qs = !0), n && mu(n), n || Pr("revert");
    },
    gu = function (t, n) {
      Z.cache++,
        (n || !yt) &&
          Z.forEach(function (r) {
            return at(r) && r.cacheID++ && (r.rec = 0);
          }),
        Rt(t) && (J.history.scrollRestoration = To = t);
    },
    yt,
    kr = 0,
    vu,
    Gm = function () {
      if (vu !== kr) {
        var t = (vu = kr);
        requestAnimationFrame(function () {
          return t === kr && Mr(!0);
        });
      }
    },
    yu = function () {
      oe.appendChild(si),
        (Eo = (!vt && si.offsetHeight) || J.innerHeight),
        oe.removeChild(si);
    },
    _u = function (t) {
      return Vi(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (n) {
        return (n.style.display = t ? "none" : "block");
      });
    },
    Mr = function (t, n) {
      if (
        ((zt = he.documentElement),
        (oe = he.body),
        (yo = [J, he, zt, oe]),
        Xt && !t && !qs)
      ) {
        Ve(X, "scrollEnd", pu);
        return;
      }
      yu(),
        (yt = X.isRefreshing = !0),
        Z.forEach(function (i) {
          return at(i) && ++i.cacheID && (i.rec = i());
        });
      var r = Pr("refreshInit");
      Kc && X.sort(),
        n || Do(),
        Z.forEach(function (i) {
          at(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
        }),
        Q.slice(0).forEach(function (i) {
          return i.refresh();
        }),
        (qs = !1),
        Q.forEach(function (i) {
          if (i._subPinOffset && i.pin) {
            var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
              a = i.pin[s];
            i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - a), i.refresh();
          }
        }),
        (Co = 1),
        _u(!0),
        Q.forEach(function (i) {
          var s = hn(i.scroller, i._dir),
            a = i.vars.end === "max" || (i._endClamp && i.end > s),
            o = i._startClamp && i.start >= s;
          (a || o) &&
            i.setPositions(
              o ? s - 1 : i.start,
              a ? Math.max(o ? s : i.start + 1, s) : i.end,
              !0
            );
        }),
        _u(!1),
        (Co = 0),
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
        gu(To, 1),
        Ns.pause(),
        kr++,
        (yt = 2),
        kn(2),
        Q.forEach(function (i) {
          return at(i.vars.onRefresh) && i.vars.onRefresh(i);
        }),
        (yt = X.isRefreshing = !1),
        Pr("refresh");
    },
    zo = 0,
    Zs = 1,
    ns,
    kn = function (t) {
      if (t === 2 || (!yt && !qs)) {
        (X.isUpdating = !0), ns && ns.update(0);
        var n = Q.length,
          r = st(),
          i = r - Po >= 50,
          s = n && Q[0].scroll();
        if (
          ((Zs = zo > s ? -1 : 1),
          yt || (zo = s),
          i &&
            (Xt && !Hs && r - Xt > 200 && ((Xt = 0), Pr("scrollEnd")),
            (Yi = Po),
            (Po = r)),
          Zs < 0)
        ) {
          for (gt = n; gt-- > 0; ) Q[gt] && Q[gt].update(0, i);
          Zs = 1;
        } else for (gt = 0; gt < n; gt++) Q[gt] && Q[gt].update(0, i);
        X.isUpdating = !1;
      }
      es = 0;
    },
    Ro = [
      lu,
      cu,
      $o,
      Mo,
      Gt + Ji,
      Gt + Ki,
      Gt + Zi,
      Gt + Qi,
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
    Js = Ro.concat([
      Er,
      Cr,
      "boxSizing",
      "max" + oi,
      "max" + Oo,
      "position",
      Gt,
      Ae,
      Ae + Zi,
      Ae + Ki,
      Ae + Ji,
      Ae + Qi,
    ]),
    jm = function (t, n, r) {
      ci(r);
      var i = t._gsap;
      if (i.spacerIsNative) ci(i.spacerState);
      else if (t._gsap.swappedIn) {
        var s = n.parentNode;
        s && (s.insertBefore(t, n), s.removeChild(n));
      }
      t._gsap.swappedIn = !1;
    },
    No = function (t, n, r, i) {
      if (!t._gsap.swappedIn) {
        for (var s = Ro.length, a = n.style, o = t.style, l; s--; )
          (l = Ro[s]), (a[l] = r[l]);
        (a.position = r.position === "absolute" ? "absolute" : "relative"),
          r.display === "inline" && (a.display = "inline-block"),
          (o[$o] = o[Mo] = "auto"),
          (a.flexBasis = r.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[Er] = Ws(t, mt) + Ne),
          (a[Cr] = Ws(t, Re) + Ne),
          (a[Ae] = o[Gt] = o[cu] = o[lu] = "0"),
          ci(i),
          (o[Er] = o["max" + oi] = r[Er]),
          (o[Cr] = o["max" + Oo] = r[Cr]),
          (o[Ae] = r[Ae]),
          t.parentNode !== n &&
            (t.parentNode.insertBefore(n, t), n.appendChild(t)),
          (t._gsap.swappedIn = !0);
      }
    },
    Um = /([A-Z])/g,
    ci = function (t) {
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
              : n[s] && n.removeProperty(s.replace(Um, "-$1").toLowerCase());
      }
    },
    ea = function (t) {
      for (var n = Js.length, r = t.style, i = [], s = 0; s < n; s++)
        i.push(Js[s], r[Js[s]]);
      return (i.t = t), i;
    },
    Km = function (t, n, r) {
      for (var i = [], s = t.length, a = r ? 8 : 0, o; a < s; a += 2)
        (o = t[a]), i.push(o, o in n ? n[o] : t[a + 1]);
      return (i.t = t.t), i;
    },
    ta = { left: 0, top: 0 },
    bu = function (t, n, r, i, s, a, o, l, c, u, f, d, p, m) {
      at(t) && (t = t(l)),
        Rt(t) &&
          t.substr(0, 3) === "max" &&
          (t = d + (t.charAt(4) === "=" ? Us("0" + t.substr(3), r) : 0));
      var h = p ? p.time() : 0,
        g,
        y,
        v;
      if ((p && p.seek(0), isNaN(t) || (t = +t), ji(t)))
        p &&
          (t = q.utils.mapRange(
            p.scrollTrigger.start,
            p.scrollTrigger.end,
            0,
            d,
            t
          )),
          o && Qs(o, r, i, !0);
      else {
        at(n) && (n = n(l));
        var _ = (t || "0").split(" "),
          x,
          S,
          w,
          C;
        (v = Ct(n, l) || oe),
          (x = Pn(v) || {}),
          (!x || (!x.left && !x.top)) &&
            jt(v).display === "none" &&
            ((C = v.style.display),
            (v.style.display = "block"),
            (x = Pn(v)),
            C ? (v.style.display = C) : v.style.removeProperty("display")),
          (S = Us(_[0], x[i.d])),
          (w = Us(_[1] || "0", r)),
          (t = x[i.p] - c[i.p] - u + S + s - w),
          o && Qs(o, w, i, r - w < 20 || (o._isStart && w > 20)),
          (r -= r - w);
      }
      if ((m && ((l[m] = t || -0.001), t < 0 && (t = 0)), a)) {
        var P = t + r,
          A = a._isStart;
        (g = "scroll" + i.d2),
          Qs(
            a,
            P,
            i,
            (A && P > 20) ||
              (!A && (f ? Math.max(oe[g], zt[g]) : a.parentNode[g]) <= P + 1)
          ),
          f &&
            ((c = Pn(o)),
            f && (a.style[i.op.p] = c[i.op.p] - i.op.m - a._offset + Ne));
      }
      return (
        p &&
          v &&
          ((g = Pn(v)),
          p.seek(d),
          (y = Pn(v)),
          (p._caScrollDist = g[i.p] - y[i.p]),
          (t = (t / p._caScrollDist) * d)),
        p && p.seek(h),
        p ? t : Math.round(t)
      );
    },
    Qm = /(webkit|moz|length|cssText|inset)/i,
    xu = function (t, n, r, i) {
      if (t.parentNode !== n) {
        var s = t.style,
          a,
          o;
        if (n === oe) {
          (t._stOrig = s.cssText), (o = jt(t));
          for (a in o)
            !+a &&
              !Qm.test(a) &&
              o[a] &&
              typeof s[a] == "string" &&
              a !== "0" &&
              (s[a] = o[a]);
          (s.top = r), (s.left = i);
        } else s.cssText = t._stOrig;
        (q.core.getCache(t).uncache = 1), n.appendChild(t);
      }
    },
    Su = function (t, n, r) {
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
    na = function (t, n, r) {
      var i = {};
      (i[n.p] = "+=" + r), q.set(t, i);
    },
    Tu = function (t, n) {
      var r = Un(t, n),
        i = "_scroll" + n.p2,
        s = function a(o, l, c, u, f) {
          var d = a.tween,
            p = l.onComplete,
            m = {};
          c = c || r();
          var h = Su(r, c, function () {
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
              return h(c + u * d.ratio + f * d.ratio * d.ratio);
            }),
            (l.onUpdate = function () {
              Z.cache++, a.tween && kn();
            }),
            (l.onComplete = function () {
              (a.tween = 0), p && p.call(d);
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
        ri ||
          e.register(q) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          So(this),
          this.init(n, r);
      }
      var t = e.prototype;
      return (
        (t.init = function (r, i) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !Xi)
          ) {
            this.update = this.refresh = this.kill = dn;
            return;
          }
          r = uu(Rt(r) || ji(r) || r.nodeType ? { trigger: r } : r, Gs);
          var s = r,
            a = s.onUpdate,
            o = s.toggleClass,
            l = s.id,
            c = s.onToggle,
            u = s.onRefresh,
            f = s.scrub,
            d = s.trigger,
            p = s.pin,
            m = s.pinSpacing,
            h = s.invalidateOnRefresh,
            g = s.anticipatePin,
            y = s.onScrubComplete,
            v = s.onSnapComplete,
            _ = s.once,
            x = s.snap,
            S = s.pinReparent,
            w = s.pinSpacer,
            C = s.containerAnimation,
            P = s.fastScrollEnd,
            A = s.preventOverlaps,
            E =
              r.horizontal || (r.containerAnimation && r.horizontal !== !1)
                ? mt
                : Re,
            $ = !f && f !== 0,
            b = Ct(r.scroller || J),
            T = q.core.getCache(b),
            O = Sr(b),
            I =
              ("pinType" in r
                ? r.pinType
                : jn(b, "pinType") || (O && "fixed")) === "fixed",
            k = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
            L = $ && r.toggleActions.split(" "),
            D = "markers" in r ? r.markers : Gs.markers,
            R = O ? 0 : parseFloat(jt(b)["border" + E.p2 + oi]) || 0,
            M = this,
            B =
              r.onRefreshInit &&
              function () {
                return r.onRefreshInit(M);
              },
            K = qm(b, O, E),
            se = Bm(b, O),
            le = 0,
            fe = 0,
            ge = 0,
            be = Un(b, E),
            Ye,
            Fe,
            Zt,
            Ie,
            He,
            ee,
            pe,
            Xe,
            Ze,
            z,
            Ft,
            On,
            ir,
            Te,
            An,
            sr,
            Lr,
            Ge,
            ar,
            Pe,
            Jt,
            Ut,
            Ln,
            os,
            De,
            da,
            In,
            pi,
            mi,
            or,
            Ir,
            te,
            Dr,
            en,
            tn,
            nn,
            zr,
            gi,
            Dn;
          if (
            ((M._startClamp = M._endClamp = !1),
            (M._dir = E),
            (g *= 45),
            (M.scroller = b),
            (M.scroll = C ? C.time.bind(C) : be),
            (Ie = be()),
            (M.vars = r),
            (i = i || r.animation),
            "refreshPriority" in r &&
              ((Kc = 1), r.refreshPriority === -9999 && (ns = M)),
            (T.tweenScroll = T.tweenScroll || {
              top: Tu(b, Re),
              left: Tu(b, mt),
            }),
            (M.tweenTo = Ye = T.tweenScroll[E.p]),
            (M.scrubDuration = function (H) {
              (Dr = ji(H) && H),
                Dr
                  ? te
                    ? te.duration(H)
                    : (te = q.to(i, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: Dr,
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
              (or = 0),
              l || (l = i.vars.id)),
            x &&
              ((!Tr(x) || x.push) && (x = { snapTo: x }),
              "scrollBehavior" in oe.style &&
                q.set(O ? [oe, zt] : b, { scrollBehavior: "auto" }),
              Z.forEach(function (H) {
                return (
                  at(H) &&
                  H.target === (O ? he.scrollingElement || zt : b) &&
                  (H.smooth = !1)
                );
              }),
              (Zt = at(x.snapTo)
                ? x.snapTo
                : x.snapTo === "labels"
                ? Wm(i)
                : x.snapTo === "labelsDirectional"
                ? Ym(i)
                : x.directional !== !1
                ? function (H, G) {
                    return Ao(x.snapTo)(H, st() - fe < 500 ? 0 : G.direction);
                  }
                : q.utils.snap(x.snapTo)),
              (en = x.duration || { min: 0.1, max: 2 }),
              (en = Tr(en) ? Wi(en.min, en.max) : Wi(en, en)),
              (tn = q
                .delayedCall(x.delay || Dr / 2 || 0.1, function () {
                  var H = be(),
                    G = st() - fe < 500,
                    W = Ye.tween;
                  if (
                    (G || Math.abs(M.getVelocity()) < 10) &&
                    !W &&
                    !Hs &&
                    le !== H
                  ) {
                    var j = (H - ee) / Te,
                      je = i && !$ ? i.totalProgress() : j,
                      re = G ? 0 : ((je - Ir) / (st() - Yi)) * 1e3 || 0,
                      ke = q.utils.clamp(-j, 1 - j, (ai(re / 2) * re) / 0.185),
                      lt = j + (x.inertia === !1 ? 0 : ke),
                      Ee,
                      ve,
                      de = x,
                      rn = de.onStart,
                      xe = de.onInterrupt,
                      Ht = de.onComplete;
                    if (
                      ((Ee = Zt(lt, M)),
                      ji(Ee) || (Ee = lt),
                      (ve = Math.max(0, Math.round(ee + Ee * Te))),
                      H <= pe && H >= ee && ve !== H)
                    ) {
                      if (W && !W._initted && W.data <= ai(ve - H)) return;
                      x.inertia === !1 && (ke = Ee - j),
                        Ye(
                          ve,
                          {
                            duration: en(
                              ai(
                                (Math.max(ai(lt - je), ai(Ee - je)) * 0.185) /
                                  re /
                                  0.05 || 0
                              )
                            ),
                            ease: x.ease || "power3",
                            data: ai(ve - H),
                            onInterrupt: function () {
                              return tn.restart(!0) && xe && xe(M);
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
                                (or = Ir =
                                  i && !$ ? i.totalProgress() : M.progress),
                                v && v(M),
                                Ht && Ht(M);
                            },
                          },
                          H,
                          ke * Te,
                          ve - H - ke * Te
                        ),
                        rn && rn(M, Ye.tween);
                    }
                  } else M.isActive && le !== H && tn.restart(!0);
                })
                .pause())),
            l && (Lo[l] = M),
            (d = M.trigger = Ct(d || (p !== !0 && p))),
            (Dn = d && d._gsap && d._gsap.stRevert),
            Dn && (Dn = Dn(M)),
            (p = p === !0 ? d : Ct(p)),
            Rt(o) && (o = { targets: d, className: o }),
            p &&
              (m === !1 ||
                m === Gt ||
                (m =
                  !m &&
                  p.parentNode &&
                  p.parentNode.style &&
                  jt(p.parentNode).display === "flex"
                    ? !1
                    : Ae),
              (M.pin = p),
              (Fe = q.core.getCache(p)),
              Fe.spacer
                ? (An = Fe.pinState)
                : (w &&
                    ((w = Ct(w)),
                    w && !w.nodeType && (w = w.current || w.nativeElement),
                    (Fe.spacerIsNative = !!w),
                    w && (Fe.spacerState = ea(w))),
                  (Fe.spacer = Ge = w || he.createElement("div")),
                  Ge.classList.add("pin-spacer"),
                  l && Ge.classList.add("pin-spacer-" + l),
                  (Fe.pinState = An = ea(p))),
              r.force3D !== !1 && q.set(p, { force3D: !0 }),
              (M.spacer = Ge = Fe.spacer),
              (mi = jt(p)),
              (os = mi[m + E.os2]),
              (Pe = q.getProperty(p)),
              (Jt = q.quickSetter(p, E.a, Ne)),
              No(p, Ge, mi),
              (Lr = ea(p))),
            D)
          ) {
            (On = Tr(D) ? uu(D, du) : du),
              (z = Ks("scroller-start", l, b, E, On, 0)),
              (Ft = Ks("scroller-end", l, b, E, On, 0, z)),
              (ar = z["offset" + E.op.d2]);
            var ls = Ct(jn(b, "content") || b);
            (Xe = this.markerStart = Ks("start", l, ls, E, On, ar, 0, C)),
              (Ze = this.markerEnd = Ks("end", l, ls, E, On, ar, 0, C)),
              C && (gi = q.quickSetter([Xe, Ze], E.a, Ne)),
              !I &&
                !(fn.length && jn(b, "fixedMarkers") === !0) &&
                (Vm(O ? oe : b),
                q.set([z, Ft], { force3D: !0 }),
                (da = q.quickSetter(z, E.a, Ne)),
                (pi = q.quickSetter(Ft, E.a, Ne)));
          }
          if (C) {
            var U = C.vars.onUpdate,
              Y = C.vars.onUpdateParams;
            C.eventCallback("onUpdate", function () {
              M.update(0, 0, 1), U && U.apply(C, Y || []);
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
                  ((nn = Math.max(be(), M.scroll.rec || 0)),
                  (ge = M.progress),
                  (zr = i && i.progress())),
                Xe &&
                  [Xe, Ze, z, Ft].forEach(function (je) {
                    return (je.style.display = W ? "none" : "block");
                  }),
                W && ((it = M), M.update(W)),
                p &&
                  (!S || !M.isActive) &&
                  (W ? jm(p, Ge, An) : No(p, Ge, jt(p), De)),
                W || M.update(W),
                (it = j),
                (M.isReverted = W));
            }),
            (M.refresh = function (H, G, W, j) {
              if (!((it || !M.enabled) && !G)) {
                if (p && H && Xt) {
                  Ve(e, "scrollEnd", pu);
                  return;
                }
                !yt && B && B(M),
                  (it = M),
                  Ye.tween && !W && (Ye.tween.kill(), (Ye.tween = 0)),
                  te && te.pause(),
                  h &&
                    i &&
                    (i.revert({ kill: !1 }).invalidate(),
                    i.getChildren &&
                      i.getChildren(!0, !0, !1).forEach(function (lr) {
                        return lr.vars.immediateRender && lr.render(0, !0, !0);
                      })),
                  M.isReverted || M.revert(!0, !0),
                  (M._subPinOffset = !1);
                var je = K(),
                  re = se(),
                  ke = C ? C.duration() : hn(b, E),
                  lt = Te <= 0.01 || !Te,
                  Ee = 0,
                  ve = j || 0,
                  de = Tr(W) ? W.end : r.end,
                  rn = r.endTrigger || d,
                  xe = Tr(W)
                    ? W.start
                    : r.start ||
                      (r.start === 0 || !d ? 0 : p ? "0 0" : "0 100%"),
                  Ht = (M.pinnedContainer =
                    r.pinnedContainer && Ct(r.pinnedContainer, M)),
                  vn = (d && Math.max(0, Q.indexOf(M))) || 0,
                  Je = vn,
                  et,
                  ct,
                  Rr,
                  ha,
                  ut,
                  qe,
                  yn,
                  Jo,
                  gf,
                  cs,
                  _n,
                  us,
                  pa;
                for (
                  D &&
                  Tr(W) &&
                  ((us = q.getProperty(z, E.p)), (pa = q.getProperty(Ft, E.p)));
                  Je-- > 0;

                )
                  (qe = Q[Je]),
                    qe.end || qe.refresh(0, 1) || (it = M),
                    (yn = qe.pin),
                    yn &&
                      (yn === d || yn === p || yn === Ht) &&
                      !qe.isReverted &&
                      (cs || (cs = []), cs.unshift(qe), qe.revert(!0, !0)),
                    qe !== Q[Je] && (vn--, Je--);
                for (
                  at(xe) && (xe = xe(M)),
                    xe = eu(xe, "start", M),
                    ee =
                      bu(
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
                        I,
                        ke,
                        C,
                        M._startClamp && "_startClamp"
                      ) || (p ? -0.001 : 0),
                    at(de) && (de = de(M)),
                    Rt(de) &&
                      !de.indexOf("+=") &&
                      (~de.indexOf(" ")
                        ? (de = (Rt(xe) ? xe.split(" ")[0] : "") + de)
                        : ((Ee = Us(de.substr(2), je)),
                          (de = Rt(xe)
                            ? xe
                            : (C
                                ? q.utils.mapRange(
                                    0,
                                    C.duration(),
                                    C.scrollTrigger.start,
                                    C.scrollTrigger.end,
                                    ee
                                  )
                                : ee) + Ee),
                          (rn = d))),
                    de = eu(de, "end", M),
                    pe =
                      Math.max(
                        ee,
                        bu(
                          de || (rn ? "100% 0" : ke),
                          rn,
                          je,
                          E,
                          be() + Ee,
                          Ze,
                          Ft,
                          M,
                          re,
                          R,
                          I,
                          ke,
                          C,
                          M._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    Ee = 0,
                    Je = vn;
                  Je--;

                )
                  (qe = Q[Je]),
                    (yn = qe.pin),
                    yn &&
                      qe.start - qe._pinPush <= ee &&
                      !C &&
                      qe.end > 0 &&
                      ((et =
                        qe.end -
                        (M._startClamp ? Math.max(0, qe.start) : qe.start)),
                      ((yn === d && qe.start - qe._pinPush < ee) ||
                        yn === Ht) &&
                        isNaN(xe) &&
                        (Ee += et * (1 - qe.progress)),
                      yn === p && (ve += et));
                if (
                  ((ee += Ee),
                  (pe += Ee),
                  M._startClamp && (M._startClamp += Ee),
                  M._endClamp &&
                    !yt &&
                    ((M._endClamp = pe || -0.001),
                    (pe = Math.min(pe, hn(b, E)))),
                  (Te = pe - ee || ((ee -= 0.01) && 0.001)),
                  lt &&
                    (ge = q.utils.clamp(0, 1, q.utils.normalize(ee, pe, nn))),
                  (M._pinPush = ve),
                  Xe &&
                    Ee &&
                    ((et = {}),
                    (et[E.a] = "+=" + Ee),
                    Ht && (et[E.p] = "-=" + be()),
                    q.set([Xe, Ze], et)),
                  p && !(Co && M.end >= hn(b, E)))
                )
                  (et = jt(p)),
                    (ha = E === Re),
                    (Rr = be()),
                    (Ut = parseFloat(Pe(E.a)) + ve),
                    !ke &&
                      pe > 1 &&
                      ((_n = (O ? he.scrollingElement || zt : b).style),
                      (_n = {
                        style: _n,
                        value: _n["overflow" + E.a.toUpperCase()],
                      }),
                      O &&
                        jt(oe)["overflow" + E.a.toUpperCase()] !== "scroll" &&
                        (_n.style["overflow" + E.a.toUpperCase()] = "scroll")),
                    No(p, Ge, et),
                    (Lr = ea(p)),
                    (ct = Pn(p, !0)),
                    (Jo = I && Un(b, ha ? mt : Re)()),
                    m
                      ? ((De = [m + E.os2, Te + ve + Ne]),
                        (De.t = Ge),
                        (Je = m === Ae ? Ws(p, E) + Te + ve : 0),
                        Je &&
                          (De.push(E.d, Je + Ne),
                          Ge.style.flexBasis !== "auto" &&
                            (Ge.style.flexBasis = Je + Ne)),
                        ci(De),
                        Ht &&
                          Q.forEach(function (lr) {
                            lr.pin === Ht &&
                              lr.vars.pinSpacing !== !1 &&
                              (lr._subPinOffset = !0);
                          }),
                        I && be(nn))
                      : ((Je = Ws(p, E)),
                        Je &&
                          Ge.style.flexBasis !== "auto" &&
                          (Ge.style.flexBasis = Je + Ne)),
                    I &&
                      ((ut = {
                        top: ct.top + (ha ? Rr - ee : Jo) + Ne,
                        left: ct.left + (ha ? Jo : Rr - ee) + Ne,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (ut[Er] = ut["max" + oi] = Math.ceil(ct.width) + Ne),
                      (ut[Cr] = ut["max" + Oo] = Math.ceil(ct.height) + Ne),
                      (ut[Gt] =
                        ut[Gt + Zi] =
                        ut[Gt + Ki] =
                        ut[Gt + Ji] =
                        ut[Gt + Qi] =
                          "0"),
                      (ut[Ae] = et[Ae]),
                      (ut[Ae + Zi] = et[Ae + Zi]),
                      (ut[Ae + Ki] = et[Ae + Ki]),
                      (ut[Ae + Ji] = et[Ae + Ji]),
                      (ut[Ae + Qi] = et[Ae + Qi]),
                      (sr = Km(An, ut, S)),
                      yt && be(0)),
                    i
                      ? ((gf = i._initted),
                        bo(1),
                        i.render(i.duration(), !0, !0),
                        (Ln = Pe(E.a) - Ut + Te + ve),
                        (In = Math.abs(Te - Ln) > 1),
                        I && In && sr.splice(sr.length - 2, 2),
                        i.render(0, !0, !0),
                        gf || i.invalidate(!0),
                        i.parent || i.totalTime(i.totalTime()),
                        bo(0))
                      : (Ln = Te),
                    _n &&
                      (_n.value
                        ? (_n.style["overflow" + E.a.toUpperCase()] = _n.value)
                        : _n.style.removeProperty("overflow-" + E.a));
                else if (d && be() && !C)
                  for (ct = d.parentNode; ct && ct !== oe; )
                    ct._pinOffset &&
                      ((ee -= ct._pinOffset), (pe -= ct._pinOffset)),
                      (ct = ct.parentNode);
                cs &&
                  cs.forEach(function (lr) {
                    return lr.revert(!1, !0);
                  }),
                  (M.start = ee),
                  (M.end = pe),
                  (Ie = He = yt ? nn : be()),
                  !C && !yt && (Ie < nn && be(nn), (M.scroll.rec = 0)),
                  M.revert(!1, !0),
                  (fe = st()),
                  tn && ((le = -1), tn.restart(!0)),
                  (it = 0),
                  i &&
                    $ &&
                    (i._initted || zr) &&
                    i.progress() !== zr &&
                    i.progress(zr || 0, !0).render(i.time(), !0, !0),
                  (lt || ge !== M.progress || C || h || (i && !i._initted)) &&
                    (i &&
                      !$ &&
                      (i._initted || ge || i.vars.immediateRender !== !1) &&
                      i.totalProgress(
                        C && ee < -0.001 && !ge
                          ? q.utils.normalize(ee, pe, 0)
                          : ge,
                        !0
                      ),
                    (M.progress = lt || (Ie - ee) / Te === ge ? 0 : ge)),
                  p && m && (Ge._pinOffset = Math.round(M.progress * Ln)),
                  te && te.invalidate(),
                  isNaN(us) ||
                    ((us -= q.getProperty(z, E.p)),
                    (pa -= q.getProperty(Ft, E.p)),
                    na(z, E, us),
                    na(Xe, E, us - (j || 0)),
                    na(Ft, E, pa),
                    na(Ze, E, pa - (j || 0))),
                  lt && !yt && M.update(),
                  u && !yt && !ir && ((ir = !0), u(M), (ir = !1));
              }
            }),
            (M.getVelocity = function () {
              return ((be() - He) / (st() - Yi)) * 1e3 || 0;
            }),
            (M.endAnimation = function () {
              Ui(M.callbackAnimation),
                i &&
                  (te
                    ? te.progress(1)
                    : i.paused()
                    ? $ || Ui(i, M.direction < 0, 1)
                    : Ui(i, i.reversed()));
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
                Rt(H)
                  ? W.filter(function (j) {
                      return j.vars.preventOverlaps === H;
                    })
                  : W
              ).filter(function (j) {
                return M.direction > 0 ? j.end <= ee : j.start >= pe;
              });
            }),
            (M.update = function (H, G, W) {
              if (!(C && !W && !H)) {
                var j = yt === !0 ? nn : M.scroll(),
                  je = H ? 0 : (j - ee) / Te,
                  re = je < 0 ? 0 : je > 1 ? 1 : je || 0,
                  ke = M.progress,
                  lt,
                  Ee,
                  ve,
                  de,
                  rn,
                  xe,
                  Ht,
                  vn;
                if (
                  (G &&
                    ((He = Ie),
                    (Ie = C ? be() : j),
                    x && ((Ir = or), (or = i && !$ ? i.totalProgress() : re))),
                  g &&
                    p &&
                    !it &&
                    !Bs &&
                    Xt &&
                    (!re && ee < j + ((j - He) / (st() - Yi)) * g
                      ? (re = 1e-4)
                      : re === 1 &&
                        pe > j + ((j - He) / (st() - Yi)) * g &&
                        (re = 0.9999)),
                  re !== ke && M.enabled)
                ) {
                  if (
                    ((lt = M.isActive = !!re && re < 1),
                    (Ee = !!ke && ke < 1),
                    (xe = lt !== Ee),
                    (rn = xe || !!re != !!ke),
                    (M.direction = re > ke ? 1 : -1),
                    (M.progress = re),
                    rn &&
                      !it &&
                      ((ve = re && !ke ? 0 : re === 1 ? 1 : ke === 1 ? 2 : 3),
                      $ &&
                        ((de =
                          (!xe && L[ve + 1] !== "none" && L[ve + 1]) || L[ve]),
                        (vn =
                          i &&
                          (de === "complete" || de === "reset" || de in i)))),
                    A &&
                      (xe || vn) &&
                      (vn || f || !i) &&
                      (at(A)
                        ? A(M)
                        : M.getTrailing(A).forEach(function (Rr) {
                            return Rr.endAnimation();
                          })),
                    $ ||
                      (te && !it && !Bs
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
                    p)
                  ) {
                    if ((H && m && (Ge.style[m + E.os2] = os), !I))
                      Jt(Gi(Ut + Ln * re));
                    else if (rn) {
                      if (
                        ((Ht =
                          !H && re > ke && pe + 1 > j && j + 1 >= hn(b, E)),
                        S)
                      )
                        if (!H && (lt || Ht)) {
                          var Je = Pn(p, !0),
                            et = j - ee;
                          xu(
                            p,
                            oe,
                            Je.top + (E === Re ? et : 0) + Ne,
                            Je.left + (E === Re ? 0 : et) + Ne
                          );
                        } else xu(p, Ge);
                      ci(lt || Ht ? sr : Lr),
                        (In && re < 1 && lt) ||
                          Jt(Ut + (re === 1 && !Ht ? Ln : 0));
                    }
                  }
                  x && !Ye.tween && !it && !Bs && tn.restart(!0),
                    o &&
                      (xe || (_ && re && (re < 1 || !wo))) &&
                      Vi(o.targets).forEach(function (Rr) {
                        return Rr.classList[lt || _ ? "add" : "remove"](
                          o.className
                        );
                      }),
                    a && !$ && !H && a(M),
                    rn && !it
                      ? ($ &&
                          (vn &&
                            (de === "complete"
                              ? i.pause().totalProgress(1)
                              : de === "reset"
                              ? i.restart(!0).pause()
                              : de === "restart"
                              ? i.restart(!0)
                              : i[de]()),
                          a && a(M)),
                        (xe || !wo) &&
                          (c && xe && ko(M, c),
                          k[ve] && ko(M, k[ve]),
                          _ && (re === 1 ? M.kill(!1, 1) : (k[ve] = 0)),
                          xe ||
                            ((ve = re === 1 ? 1 : 3), k[ve] && ko(M, k[ve]))),
                        P &&
                          !lt &&
                          Math.abs(M.getVelocity()) > (ji(P) ? P : 2500) &&
                          (Ui(M.callbackAnimation),
                          te
                            ? te.progress(1)
                            : Ui(i, de === "reverse" ? 1 : !re, 1)))
                      : $ && a && !it && a(M);
                }
                if (pi) {
                  var ct = C ? (j / C.duration()) * (C._caScrollDist || 0) : j;
                  da(ct + (z._isFlipped ? 1 : 0)), pi(ct);
                }
                gi && gi((-j / C.duration()) * (C._caScrollDist || 0));
              }
            }),
            (M.enable = function (H, G) {
              M.enabled ||
                ((M.enabled = !0),
                Ve(b, "resize", ts),
                O || Ve(b, "scroll", li),
                B && Ve(e, "refreshInit", B),
                H !== !1 && ((M.progress = ge = 0), (Ie = He = le = be())),
                G !== !1 && M.refresh());
            }),
            (M.getTween = function (H) {
              return H && Ye ? Ye.tween : te;
            }),
            (M.setPositions = function (H, G, W, j) {
              if (C) {
                var je = C.scrollTrigger,
                  re = C.duration(),
                  ke = je.end - je.start;
                (H = je.start + (ke * H) / re), (G = je.start + (ke * G) / re);
              }
              M.refresh(
                !1,
                !1,
                {
                  start: tu(H, W && !!M._startClamp),
                  end: tu(G, W && !!M._endClamp),
                },
                j
              ),
                M.update();
            }),
            (M.adjustPinSpacing = function (H) {
              if (De && H) {
                var G = De.indexOf(E.d) + 1;
                (De[G] = parseFloat(De[G]) + H + Ne),
                  (De[1] = parseFloat(De[1]) + H + Ne),
                  ci(De);
              }
            }),
            (M.disable = function (H, G) {
              if (
                M.enabled &&
                (H !== !1 && M.revert(!0, !0),
                (M.enabled = M.isActive = !1),
                G || (te && te.pause()),
                (nn = 0),
                Fe && (Fe.uncache = 1),
                B && We(e, "refreshInit", B),
                tn &&
                  (tn.pause(), Ye.tween && Ye.tween.kill() && (Ye.tween = 0)),
                !O)
              ) {
                for (var W = Q.length; W--; )
                  if (Q[W].scroller === b && Q[W] !== M) return;
                We(b, "resize", ts), O || We(b, "scroll", li);
              }
            }),
            (M.kill = function (H, G) {
              M.disable(H, G), te && !G && te.kill(), l && delete Lo[l];
              var W = Q.indexOf(M);
              W >= 0 && Q.splice(W, 1),
                W === gt && Zs > 0 && gt--,
                (W = 0),
                Q.forEach(function (j) {
                  return j.scroller === M.scroller && (W = 1);
                }),
                W || yt || (M.scroll.rec = 0),
                i &&
                  ((i.scrollTrigger = null),
                  H && i.revert({ kill: !1 }),
                  G || i.kill()),
                Xe &&
                  [Xe, Ze, z, Ft].forEach(function (j) {
                    return j.parentNode && j.parentNode.removeChild(j);
                  }),
                ns === M && (ns = 0),
                p &&
                  (Fe && (Fe.uncache = 1),
                  (W = 0),
                  Q.forEach(function (j) {
                    return j.pin === p && W++;
                  }),
                  W || (Fe.spacer = 0)),
                r.onKill && r.onKill(M);
            }),
            Q.push(M),
            M.enable(!1, !1),
            Dn && Dn(M),
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
          p && Gm();
        }),
        (e.register = function (r) {
          return (
            ri ||
              ((q = r || su()),
              iu() && window.document && e.enable(),
              (ri = Xi)),
            ri
          );
        }),
        (e.defaults = function (r) {
          if (r) for (var i in r) Gs[i] = r[i];
          return Gs;
        }),
        (e.disable = function (r, i) {
          (Xi = 0),
            Q.forEach(function (a) {
              return a[i ? "kill" : "disable"](r);
            }),
            We(J, "wheel", li),
            We(he, "scroll", li),
            clearInterval(Fs),
            We(he, "touchcancel", dn),
            We(oe, "touchstart", dn),
            Ys(We, he, "pointerdown,touchstart,mousedown", nu),
            Ys(We, he, "pointerup,touchend,mouseup", ru),
            Ns.kill(),
            Vs(We);
          for (var s = 0; s < Z.length; s += 3)
            Xs(We, Z[s], Z[s + 1]), Xs(We, Z[s], Z[s + 2]);
        }),
        (e.enable = function () {
          if (
            ((J = window),
            (he = document),
            (zt = he.documentElement),
            (oe = he.body),
            q &&
              ((Vi = q.utils.toArray),
              (Wi = q.utils.clamp),
              (So = q.core.context || dn),
              (bo = q.core.suppressOverwrites || dn),
              (To = J.history.scrollRestoration || "auto"),
              (zo = J.pageYOffset || 0),
              q.core.globals("ScrollTrigger", e),
              oe))
          ) {
            (Xi = 1),
              (si = document.createElement("div")),
              (si.style.height = "100vh"),
              (si.style.position = "absolute"),
              yu(),
              Hm(),
              we.register(q),
              (e.isTouch = we.isTouch),
              (Kn =
                we.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (xo = we.isTouch === 1),
              Ve(J, "wheel", li),
              (yo = [J, he, zt, oe]),
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
                    return mu();
                  }),
                  q.addEventListener("matchMedia", function () {
                    Mr(0, 1), Pr("matchMedia");
                  }),
                  q.matchMedia().add("(orientation: portrait)", function () {
                    return Io(), Io;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              Io(),
              Ve(he, "scroll", li);
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
                o = Pn(oe),
                Re.m = Math.round(o.top + Re.sc()) || 0,
                mt.m = Math.round(o.left + mt.sc()) || 0,
                s
                  ? (i.borderTopStyle = s)
                  : i.removeProperty("border-top-style"),
                r ||
                  (oe.setAttribute("style", ""), oe.removeAttribute("style")),
                Fs = setInterval(hu, 250),
                q.delayedCall(0.5, function () {
                  return (Bs = 0);
                }),
                Ve(he, "touchcancel", dn),
                Ve(oe, "touchstart", dn),
                Ys(Ve, he, "pointerdown,touchstart,mousedown", nu),
                Ys(Ve, he, "pointerup,touchend,mouseup", ru),
                _o = q.utils.checkPrefix("transform"),
                Js.push(_o),
                ri = st(),
                Ns = q.delayedCall(0.2, Mr).pause(),
                ii = [
                  he,
                  "visibilitychange",
                  function () {
                    var c = J.innerWidth,
                      u = J.innerHeight;
                    he.hidden
                      ? ((jc = c), (Uc = u))
                      : (jc !== c || Uc !== u) && ts();
                  },
                  he,
                  "DOMContentLoaded",
                  Mr,
                  J,
                  "load",
                  Mr,
                  J,
                  "resize",
                  ts,
                ],
                Vs(Ve),
                Q.forEach(function (c) {
                  return c.enable(0, 1);
                }),
                l = 0;
              l < Z.length;
              l += 3
            )
              Xs(We, Z[l], Z[l + 1]), Xs(We, Z[l], Z[l + 2]);
          }
        }),
        (e.config = function (r) {
          "limitCallbacks" in r && (wo = !!r.limitCallbacks);
          var i = r.syncInterval;
          (i && clearInterval(Fs)) || ((Fs = i) && setInterval(hu, i)),
            "ignoreMobileResize" in r &&
              (xo = e.isTouch === 1 && r.ignoreMobileResize),
            "autoRefreshEvents" in r &&
              (Vs(We) || Vs(Ve, r.autoRefreshEvents || "none"),
              (Qc = (r.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (e.scrollerProxy = function (r, i) {
          var s = Ct(r),
            a = Z.indexOf(s),
            o = Sr(s);
          ~a && Z.splice(a, o ? 6 : 2),
            i && (o ? fn.unshift(J, i, oe, i, zt, i) : fn.unshift(s, i));
        }),
        (e.clearMatchMedia = function (r) {
          Q.forEach(function (i) {
            return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
          });
        }),
        (e.isInViewport = function (r, i, s) {
          var a = (Rt(r) ? Ct(r) : r).getBoundingClientRect(),
            o = a[s ? Er : Cr] * i || 0;
          return s
            ? a.right - o > 0 && a.left + o < J.innerWidth
            : a.bottom - o > 0 && a.top + o < J.innerHeight;
        }),
        (e.positionInViewport = function (r, i, s) {
          Rt(r) && (r = Ct(r));
          var a = r.getBoundingClientRect(),
            o = a[s ? Er : Cr],
            l =
              i == null
                ? o / 2
                : i in js
                ? js[i] * o
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
            var i = wr.killAll || [];
            (wr = {}),
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
        ? Vi(e).forEach(function (t) {
            if (t && t.style) {
              var n = Nt.indexOf(t);
              n >= 0 && Nt.splice(n, 5),
                Nt.push(
                  t,
                  t.style.cssText,
                  t.getBBox && t.getAttribute("transform"),
                  q.core.getCache(t),
                  So()
                );
            }
          })
        : Nt;
    }),
    (X.revert = function (e, t) {
      return Do(!e, t);
    }),
    (X.create = function (e, t) {
      return new X(e, t);
    }),
    (X.refresh = function (e) {
      return e ? ts(!0) : (ri || X.register()) && Mr(!0);
    }),
    (X.update = function (e) {
      return ++Z.cache && kn(e === !0 ? 2 : 0);
    }),
    (X.clearScrollMemory = gu),
    (X.maxScroll = function (e, t) {
      return hn(e, t ? mt : Re);
    }),
    (X.getScrollFunc = function (e, t) {
      return Un(Ct(e), t ? mt : Re);
    }),
    (X.getById = function (e) {
      return Lo[e];
    }),
    (X.getAll = function () {
      return Q.filter(function (e) {
        return e.vars.id !== "ScrollSmoother";
      });
    }),
    (X.isScrolling = function () {
      return !!Xt;
    }),
    (X.snapDirectional = Ao),
    (X.addEventListener = function (e, t) {
      var n = wr[e] || (wr[e] = []);
      ~n.indexOf(t) || n.push(t);
    }),
    (X.removeEventListener = function (e, t) {
      var n = wr[e],
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
            p = q
              .delayedCall(i, function () {
                u(f, d), (f = []), (d = []);
              })
              .pause();
          return function (m) {
            f.length || p.restart(!0),
              f.push(m.trigger),
              d.push(m),
              s <= f.length && p.progress(1);
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
        Vi(e).forEach(function (l) {
          var c = {};
          for (o in r) c[o] = r[o];
          (c.trigger = l), n.push(X.create(c));
        }),
        n
      );
    });
  var Eu = function (t, n, r, i) {
      return (
        n > i ? t(i) : n < 0 && t(0),
        r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
      );
    },
    Fo = function e(t, n) {
      n === !0
        ? t.style.removeProperty("touch-action")
        : (t.style.touchAction =
            n === !0
              ? "auto"
              : n
              ? "pan-" + n + (we.isTouch ? " pinch-zoom" : "")
              : "none"),
        t === zt && e(oe, n);
    },
    ra = { auto: 1, scroll: 1 },
    Zm = function (t) {
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
            !(ra[(l = jt(s)).overflowY] || ra[l.overflowX]));

        )
          s = s.parentNode;
        (a._isScroll =
          s &&
          s !== r &&
          !Sr(s) &&
          (ra[(l = jt(s)).overflowY] || ra[l.overflowX])),
          (a._isScrollT = o);
      }
      (a._isScroll || i === "x") && (n.stopPropagation(), (n._gsapAllow = !0));
    },
    Cu = function (t, n, r, i) {
      return we.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: n,
        onWheel: (i = i && Zm),
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function () {
          return r && Ve(he, we.eventTypes[0], Pu, !1, !0);
        },
        onDisable: function () {
          return We(he, we.eventTypes[0], Pu, !0);
        },
      });
    },
    Jm = /(input|label|select|textarea)/i,
    wu,
    Pu = function (t) {
      var n = Jm.test(t.target.tagName);
      (n || wu) && ((t._gsapAllow = !0), (wu = n));
    },
    eg = function (t) {
      Tr(t) || (t = {}),
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
        c = Ct(t.target) || zt,
        u = q.core.globals().ScrollSmoother,
        f = u && u.get(),
        d =
          Kn &&
          ((t.content && Ct(t.content)) ||
            (f && t.content !== !1 && !f.smooth() && f.content())),
        p = Un(c, Re),
        m = Un(c, mt),
        h = 1,
        g =
          (we.isTouch && J.visualViewport
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
        S = Cu(c, t.type, !0, s),
        w = function () {
          return (x = !1);
        },
        C = dn,
        P = dn,
        A = function () {
          (l = hn(c, Re)),
            (P = Wi(Kn ? 1 : 0, l)),
            r && (C = Wi(0, hn(c, mt))),
            (_ = kr);
        },
        E = function () {
          (d._gsap.y = Gi(parseFloat(d._gsap.y) + p.offset) + "px"),
            (d.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(d._gsap.y) +
              ", 0, 1)"),
            (p.offset = p.cacheID = 0);
        },
        $ = function () {
          if (x) {
            requestAnimationFrame(w);
            var D = Gi(o.deltaY / 2),
              R = P(p.v - D);
            if (d && R !== p.v + p.offset) {
              p.offset = R - p.v;
              var M = Gi((parseFloat(d && d._gsap.y) || 0) - p.offset);
              (d.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                M +
                ", 0, 1)"),
                (d._gsap.y = M + "px"),
                (p.cacheID = Z.cache),
                kn();
            }
            return !0;
          }
          p.offset && E(), (x = !0);
        },
        b,
        T,
        O,
        I,
        k = function () {
          A(),
            b.isActive() &&
              b.vars.scrollY > l &&
              (p() > l ? b.progress(1) && p(l) : b.resetTo("scrollY", l));
        };
      return (
        d && q.set(d, { y: "+=0" }),
        (t.ignoreCheck = function (L) {
          return (
            (Kn && L.type === "touchmove" && $()) ||
            (h > 1.05 && L.type !== "touchstart") ||
            o.isGesturing ||
            (L.touches && L.touches.length > 1)
          );
        }),
        (t.onPress = function () {
          x = !1;
          var L = h;
          (h = Gi(((J.visualViewport && J.visualViewport.scale) || 1) / g)),
            b.pause(),
            L !== h && Fo(c, h > 1.01 ? !0 : r ? !1 : "x"),
            (T = m()),
            (O = p()),
            A(),
            (_ = kr);
        }),
        (t.onRelease = t.onGestureStart =
          function (L, D) {
            if ((p.offset && E(), !D)) I.restart(!0);
            else {
              Z.cache++;
              var R = v(),
                M,
                B;
              r &&
                ((M = m()),
                (B = M + (R * 0.05 * -L.velocityX) / 0.227),
                (R *= Eu(m, M, B, hn(c, mt))),
                (b.vars.scrollX = C(B))),
                (M = p()),
                (B = M + (R * 0.05 * -L.velocityY) / 0.227),
                (R *= Eu(p, M, B, hn(c, Re))),
                (b.vars.scrollY = P(B)),
                b.invalidate().duration(R).play(0.01),
                ((Kn && b.vars.scrollY >= l) || M >= l - 1) &&
                  q.to({}, { onUpdate: k, duration: R });
            }
            a && a(L);
          }),
        (t.onWheel = function () {
          b._ts && b.pause(), st() - y > 1e3 && ((_ = 0), (y = st()));
        }),
        (t.onChange = function (L, D, R, M, B) {
          if (
            (kr !== _ && A(),
            D && r && m(C(M[2] === D ? T + (L.startX - L.x) : m() + D - M[1])),
            R)
          ) {
            p.offset && E();
            var K = B[2] === R,
              se = K ? O + L.startY - L.y : p() + R - B[1],
              le = P(se);
            K && se !== le && (O += le - se), p(le);
          }
          (R || D) && kn();
        }),
        (t.onEnable = function () {
          Fo(c, r ? !1 : "x"),
            X.addEventListener("refresh", k),
            Ve(J, "resize", k),
            p.smooth &&
              ((p.target.style.scrollBehavior = "auto"),
              (p.smooth = m.smooth = !1)),
            S.enable();
        }),
        (t.onDisable = function () {
          Fo(c, !0),
            We(J, "resize", k),
            X.removeEventListener("refresh", k),
            S.kill();
        }),
        (t.lockAxis = t.lockAxis !== !1),
        (o = new we(t)),
        (o.iOS = Kn),
        Kn && !p() && p(1),
        Kn && q.ticker.add(dn),
        (I = o._dc),
        (b = q.to(o, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: r ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: Su(p, p(), function () {
              return b.pause();
            }),
          },
          onUpdate: kn,
          onComplete: I.vars.onComplete,
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
      return new we(e);
    }),
    (X.normalizeScroll = function (e) {
      if (typeof e == "undefined") return vt;
      if (e === !0 && vt) return vt.enable();
      if (e === !1) {
        vt && vt.kill(), (vt = e);
        return;
      }
      var t = e instanceof we ? e : eg(e);
      return (
        vt && vt.target === t.target && vt.kill(), Sr(t.target) && (vt = t), t
      );
    }),
    (X.core = {
      _getVelocityProp: vo,
      _inputObserver: Cu,
      _scrollers: Z,
      _proxies: fn,
      bridge: {
        ss: function () {
          Xt || Pr("scrollStart"), (Xt = st());
        },
        ref: function () {
          return it;
        },
      },
    }),
    su() && q.registerPlugin(X),
    F.registerPlugin(X);
  const tg = () => {
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
    ng = () => {
      tg();
    },
    rg = () => {
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
    ku = () => {
      rg();
    },
    ig = () => {
      const e = document.querySelector(".swiper[about-slider='component']");
      e &&
        new ft(e, {
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
    sg = () => {
      ig(), Tl(), ng(), ku();
    };
  var ag = "1.3.1";
  function Mu(e, t, n) {
    return Math.max(e, Math.min(t, n));
  }
  function og(e, t, n) {
    return (1 - n) * e + n * t;
  }
  function lg(e, t, n, r) {
    return og(e, t, 1 - Math.exp(-n * r));
  }
  function cg(e, t) {
    return ((e % t) + t) % t;
  }
  var ug = class {
    constructor() {
      V(this, "isRunning", !1);
      V(this, "value", 0);
      V(this, "from", 0);
      V(this, "to", 0);
      V(this, "currentTime", 0);
      V(this, "lerp");
      V(this, "duration");
      V(this, "easing");
      V(this, "onUpdate");
    }
    advance(e) {
      var n;
      if (!this.isRunning) return;
      let t = !1;
      if (this.duration && this.easing) {
        this.currentTime += e;
        const r = Mu(0, this.currentTime / this.duration, 1);
        t = r >= 1;
        const i = t ? 1 : this.easing(r);
        this.value = this.from + (this.to - this.from) * i;
      } else
        this.lerp
          ? ((this.value = lg(this.value, this.to, this.lerp * 60, e)),
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
  function fg(e, t) {
    let n;
    return function (...r) {
      let i = this;
      clearTimeout(n),
        (n = setTimeout(() => {
          (n = void 0), e.apply(i, r);
        }, t));
    };
  }
  var dg = class {
      constructor(e, t, { autoResize: n = !0, debounce: r = 250 } = {}) {
        V(this, "width", 0);
        V(this, "height", 0);
        V(this, "scrollHeight", 0);
        V(this, "scrollWidth", 0);
        V(this, "debouncedResize");
        V(this, "wrapperResizeObserver");
        V(this, "contentResizeObserver");
        V(this, "resize", () => {
          this.onWrapperResize(), this.onContentResize();
        });
        V(this, "onWrapperResize", () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        });
        V(this, "onContentResize", () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        });
        (this.wrapper = e),
          (this.content = t),
          n &&
            ((this.debouncedResize = fg(this.resize, r)),
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
    $u = class {
      constructor() {
        V(this, "events", {});
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
    Ou = 100 / 6,
    Qn = { passive: !1 },
    hg = class {
      constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        V(this, "touchStart", { x: 0, y: 0 });
        V(this, "lastDelta", { x: 0, y: 0 });
        V(this, "window", { width: 0, height: 0 });
        V(this, "emitter", new $u());
        V(this, "onTouchStart", (e) => {
          const { clientX: t, clientY: n } = e.targetTouches
            ? e.targetTouches[0]
            : e;
          (this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: e });
        });
        V(this, "onTouchMove", (e) => {
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
        V(this, "onTouchEnd", (e) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        });
        V(this, "onWheel", (e) => {
          let { deltaX: t, deltaY: n, deltaMode: r } = e;
          const i = r === 1 ? Ou : r === 2 ? this.window.width : 1,
            s = r === 1 ? Ou : r === 2 ? this.window.height : 1;
          (t *= i),
            (n *= s),
            (t *= this.options.wheelMultiplier),
            (n *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: t, deltaY: n, event: e });
        });
        V(this, "onWindowResize", () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        });
        (this.element = e),
          (this.options = t),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, Qn),
          this.element.addEventListener("touchstart", this.onTouchStart, Qn),
          this.element.addEventListener("touchmove", this.onTouchMove, Qn),
          this.element.addEventListener("touchend", this.onTouchEnd, Qn);
      }
      on(e, t) {
        return this.emitter.on(e, t);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, Qn),
          this.element.removeEventListener("touchstart", this.onTouchStart, Qn),
          this.element.removeEventListener("touchmove", this.onTouchMove, Qn),
          this.element.removeEventListener("touchend", this.onTouchEnd, Qn);
      }
    },
    pg = class {
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
        touchMultiplier: p = 1,
        wheelMultiplier: m = 1,
        autoResize: h = !0,
        prevent: g,
        virtualScroll: y,
        overscroll: v = !0,
        autoRaf: _ = !1,
        anchors: x = !1,
        autoToggle: S = !1,
        allowNestedScroll: w = !1,
        __experimental__naiveDimensions: C = !1,
      } = {}) {
        V(this, "_isScrolling", !1);
        V(this, "_isStopped", !1);
        V(this, "_isLocked", !1);
        V(this, "_preventNextNativeScrollEvent", !1);
        V(this, "_resetVelocityTimeout", null);
        V(this, "__rafID", null);
        V(this, "isTouching");
        V(this, "time", 0);
        V(this, "userData", {});
        V(this, "lastVelocity", 0);
        V(this, "velocity", 0);
        V(this, "direction", 0);
        V(this, "options");
        V(this, "targetScroll");
        V(this, "animatedScroll");
        V(this, "animate", new ug());
        V(this, "emitter", new $u());
        V(this, "dimensions");
        V(this, "virtualScroll");
        V(this, "onScrollEnd", (e) => {
          e instanceof CustomEvent ||
            ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
              e.stopPropagation());
        });
        V(this, "dispatchScrollendEvent", () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            })
          );
        });
        V(this, "onTransitionEnd", (e) => {
          if (e.propertyName.includes("overflow")) {
            const t = this.isHorizontal ? "overflow-x" : "overflow-y",
              n = getComputedStyle(this.rootElement)[t];
            ["hidden", "clip"].includes(n) ? this.stop() : this.start();
          }
        });
        V(this, "onClick", (e) => {
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
        V(this, "onPointerDown", (e) => {
          e.button === 1 && this.reset();
        });
        V(this, "onVirtualScroll", (e) => {
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
          const p = i && this.options.syncTouch,
            h = i && r.type === "touchend" && Math.abs(d) > 5;
          h && (d = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(
              this.targetScroll + d,
              yf(
                { programmatic: !1 },
                p
                  ? { lerp: h ? this.options.syncTouchLerp : 1 }
                  : {
                      lerp: this.options.lerp,
                      duration: this.options.duration,
                      easing: this.options.easing,
                    }
              )
            );
        });
        V(this, "onNativeScroll", () => {
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
        V(this, "raf", (e) => {
          const t = e - (this.time || e);
          (this.time = e),
            this.animate.advance(t * 0.001),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf));
        });
        (window.lenisVersion = ag),
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
            touchMultiplier: p,
            wheelMultiplier: m,
            autoResize: h,
            prevent: g,
            virtualScroll: y,
            overscroll: v,
            autoRaf: _,
            anchors: x,
            autoToggle: S,
            allowNestedScroll: w,
            __experimental__naiveDimensions: C,
          }),
          (this.dimensions = new dg(e, t, { autoResize: h })),
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
          (this.virtualScroll = new hg(n, {
            touchMultiplier: p,
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
              const p = d.getBoundingClientRect();
              e = (this.isHorizontal ? p.left : p.top) + this.animatedScroll;
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
            } else e = Mu(0, e, this.limit);
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
                onUpdate: (d, p) => {
                  (this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = d - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = d),
                    this.setScroll(this.scroll),
                    u && (this.targetScroll = d),
                    p || this.emit(),
                    p &&
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
        var S, w;
        const r = Date.now(),
          i = (S = e._lenis) != null ? S : (e._lenis = {});
        let s, a, o, l, c, u, f, d;
        const p = this.options.gestureOrientation;
        if (r - ((w = i.time) != null ? w : 0) > 2e3) {
          i.time = Date.now();
          const C = window.getComputedStyle(e);
          i.computedStyle = C;
          const P = C.overflowX,
            A = C.overflowY;
          if (
            ((s = ["auto", "overlay", "scroll"].includes(P)),
            (a = ["auto", "overlay", "scroll"].includes(A)),
            (i.hasOverflowX = s),
            (i.hasOverflowY = a),
            (!s && !a) ||
              (p === "vertical" && !a) ||
              (p === "horizontal" && !s))
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
          (p === "vertical" && (!a || !l)) ||
          (p === "horizontal" && (!s || !o))
        )
          return !1;
        let m;
        if (p === "horizontal") m = "x";
        else if (p === "vertical") m = "y";
        else {
          const C = t !== 0,
            P = n !== 0;
          C && s && o && (m = "x"), P && a && l && (m = "y");
        }
        if (!m) return !1;
        let h, g, y, v, _;
        if (m === "x")
          (h = e.scrollLeft), (g = c - f), (y = t), (v = s), (_ = o);
        else if (m === "y")
          (h = e.scrollTop), (g = u - d), (y = n), (v = a), (_ = l);
        else return !1;
        return (y > 0 ? h < g : h > 0) && v && _;
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
          ? cg(this.animatedScroll, this.limit)
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
  let ia;
  const mg = () => {
      (ia = new pg({ autoRaf: !0 })),
        ia.on("scroll", X.update),
        F.ticker.add((e) => {
          ia.raf(e * 1e3);
        }),
        F.ticker.lagSmoothing(0);
    },
    gg = () => {
      mg();
    },
    Qt = () => ia,
    vg = () => {
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
          const a = Qt();
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
          const p = Array.from(e).find(
            (m) => m.getAttribute("career-modal-name") === a
          );
          p &&
            p.addEventListener("click", () => {
              f.restart(), (n = s), (r = d);
              const m = Qt();
              m && m.stop();
            }),
            u.forEach((m) => {
              m.addEventListener("click", () => {
                d.restart(), (n = null), (r = null);
                const h = Qt();
                h && h.start();
              });
            });
        });
    },
    yg = () => {
      vg();
    },
    _g = () => {
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
              p = (u + f / 60) * 30,
              m = (f + d / 60) * 6;
            s.setAttribute("transform", `rotate(${p} 10 10)`),
              a.setAttribute("transform", `rotate(${m} 10 10)`),
              (o.textContent = l);
          }),
            requestAnimationFrame(t);
        };
      t();
    },
    Au = () => {
      _g();
    },
    bg = () => {
      Au();
    },
    xg = () => {
      ku(), yg(), Au();
    },
    Sg = () => {
      Tl();
    },
    Tg = () => {
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
              u.has(y) || (p(_), u.add(y)),
              x &&
                (s && F.to(s, { opacity: 0, duration: 0.5 }),
                F.to(x, { opacity: 1, duration: 0.5 })),
              m(v);
          }
        },
        p = (y) => {
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
            w = x - S,
            C = _ > 1 ? v / (_ - 1) : 0,
            P = w * C;
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
              Qt().scrollTo(document.querySelector(`[service-item='${v}']`), {
                duration: 1.6,
                offset: -100,
              }),
              (l = setTimeout(() => {
                o = !1;
              }, 2e3)));
          });
        });
      const h = new Map(),
        g = new IntersectionObserver(
          (y) => {
            if (o) return;
            y.forEach((x) => {
              const S = x.target.getAttribute("service-item");
              S &&
                (h.set(S, x.intersectionRatio),
                x.isIntersecting &&
                  x.intersectionRatio >= 0.3 &&
                  !u.has(S) &&
                  (p(x.target), u.add(S)));
            });
            let v = null,
              _ = 0;
            h.forEach((x, S) => {
              x > _ && ((_ = x), (v = S));
            }),
              v && _ >= 0.3 ? d(v) : _ < 0.3 && (f(), (c = null));
          },
          { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
        );
      n.forEach((y) => g.observe(y));
    },
    Eg = () => {
      Tg();
    },
    Cg = () => {
      Eg();
    },
    wg = () => {
      console.log("seoInit");
    },
    Pg = () => {
      console.log("workCmsInit");
    },
    kg = () => {
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
    Mg = () => {
      kg();
    },
    $g = () => {
      Mg(), gg();
    },
    Og = (e) => document.querySelector(e),
    Ag = (e, t) => e.classList.add(t),
    Lg = () => {
      const e = Og(".example-component");
      e &&
        (Ag(e, "is-initialized"),
        e.addEventListener("click", () => {
          console.log("Example component clicked!");
        }));
    },
    Ig = () => {
      Lg();
    };
  function Dg(e, t) {
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
  function Ho(e, t, n) {
    return (
      t && Dg(e.prototype, t),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function pn() {
    return (
      (pn = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      pn.apply(this, arguments)
    );
  }
  function sa(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      rs(e, t);
  }
  function qo(e) {
    return (
      (qo = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      qo(e)
    );
  }
  function rs(e, t) {
    return (
      (rs = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, r) {
            return (n.__proto__ = r), n;
          }),
      rs(e, t)
    );
  }
  function zg() {
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
  function Bo(e, t, n) {
    return (
      (Bo = zg()
        ? Reflect.construct.bind()
        : function (r, i, s) {
            var a = [null];
            a.push.apply(a, i);
            var o = new (Function.bind.apply(r, a))();
            return s && rs(o, s.prototype), o;
          }),
      Bo.apply(null, arguments)
    );
  }
  function Vo(e) {
    var t = typeof Map == "function" ? new Map() : void 0;
    return (
      (Vo = function (n) {
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
          return Bo(n, arguments, qo(this).constructor);
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
          rs(r, n)
        );
      }),
      Vo(e)
    );
  }
  function Rg(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  var Zn,
    Ng = function () {
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
  })(Zn || (Zn = {}));
  var Lu = Zn.off,
    $r = (function () {
      function e(n) {
        (this.t = void 0), (this.t = n);
      }
      (e.getLevel = function () {
        return Lu;
      }),
        (e.setLevel = function (n) {
          return (Lu = Zn[n]);
        });
      var t = e.prototype;
      return (
        (t.error = function () {
          this.i(console.error, Zn.error, [].slice.call(arguments));
        }),
        (t.warn = function () {
          this.i(console.warn, Zn.warning, [].slice.call(arguments));
        }),
        (t.info = function () {
          this.i(console.info, Zn.info, [].slice.call(arguments));
        }),
        (t.debug = function () {
          this.i(console.log, Zn.debug, [].slice.call(arguments));
        }),
        (t.i = function (n, r, i) {
          r <= e.getLevel() &&
            n.apply(console, ["[" + this.t + "] "].concat(i));
        }),
        e
      );
    })();
  function ui(e) {
    return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  }
  function Iu(e) {
    return e && e.sensitive ? "" : "i";
  }
  var mn = {
      container: "container",
      history: "history",
      namespace: "namespace",
      prefix: "data-barba",
      prevent: "prevent",
      wrapper: "wrapper",
    },
    Or = new ((function () {
      function e() {
        (this.o = mn),
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
    Fg = (function () {
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
          (s.data = pn({}, s.data, n)), this.set(i, s);
          var a = { from: this.p, index: this.P, states: [].concat(this.m) };
          window.history.replaceState(a, "");
        }),
        (t.update = function (n, r) {
          var i = r || this.P,
            s = pn({}, this.get(i), n);
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
            s = mn.prefix + "-" + mn.history;
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
        Ho(e, [
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
    Du = new Fg(),
    aa = function (e, t) {
      try {
        var n = (function () {
          if (!t.next.html)
            return Promise.resolve(e).then(function (r) {
              var i = t.next;
              if (r) {
                var s = Or.toElement(r.html);
                (i.namespace = Or.getNamespace(s)),
                  (i.container = Or.getContainer(s)),
                  (i.url = r.url),
                  (i.html = r.html),
                  Du.update({ ns: i.namespace });
                var a = Or.toDocument(r.html);
                document.title = a.title;
              }
            });
        })();
        return Promise.resolve(n && n.then ? n.then(function () {}) : void 0);
      } catch (r) {
        return Promise.reject(r);
      }
    },
    zu = function e(t, n, r) {
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
            return new RegExp("(?:".concat(o.join("|"), ")"), Iu(a));
          })(t, n, r)
        : (function (i, s, a) {
            return (function (o, l, c) {
              c === void 0 && (c = {});
              for (
                var u = c.strict,
                  f = u !== void 0 && u,
                  d = c.start,
                  p = d === void 0 || d,
                  m = c.end,
                  h = m === void 0 || m,
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
                  S = "[".concat(ui(x === void 0 ? "" : x), "]|$"),
                  w = "[".concat(ui(_), "]"),
                  C = p ? "^" : "",
                  P = 0,
                  A = o;
                P < A.length;
                P++
              ) {
                var E = A[P];
                if (typeof E == "string") C += ui(y(E));
                else {
                  var $ = ui(y(E.prefix)),
                    b = ui(y(E.suffix));
                  if (E.pattern)
                    if ((l && l.push(E), $ || b))
                      if (E.modifier === "+" || E.modifier === "*") {
                        var T = E.modifier === "*" ? "?" : "";
                        C += "(?:"
                          .concat($, "((?:")
                          .concat(E.pattern, ")(?:")
                          .concat(b)
                          .concat($, "(?:")
                          .concat(E.pattern, "))*)")
                          .concat(b, ")")
                          .concat(T);
                      } else
                        C += "(?:"
                          .concat($, "(")
                          .concat(E.pattern, ")")
                          .concat(b, ")")
                          .concat(E.modifier);
                    else
                      C +=
                        E.modifier === "+" || E.modifier === "*"
                          ? "((?:"
                              .concat(E.pattern, ")")
                              .concat(E.modifier, ")")
                          : "(".concat(E.pattern, ")").concat(E.modifier);
                  else C += "(?:".concat($).concat(b, ")").concat(E.modifier);
                }
              }
              if (h)
                f || (C += "".concat(w, "?")),
                  (C += c.endsWith ? "(?=".concat(S, ")") : "$");
              else {
                var O = o[o.length - 1],
                  I =
                    typeof O == "string"
                      ? w.indexOf(O[O.length - 1]) > -1
                      : O === void 0;
                f || (C += "(?:".concat(w, "(?=").concat(S, "))?")),
                  I || (C += "(?=".concat(w, "|").concat(S, ")"));
              }
              return new RegExp(C, Iu(c));
            })(
              (function (o, l) {
                l === void 0 && (l = {});
                for (
                  var c = (function (b) {
                      for (var T = [], O = 0; O < b.length; ) {
                        var I = b[O];
                        if (I !== "*" && I !== "+" && I !== "?")
                          if (I !== "\\")
                            if (I !== "{")
                              if (I !== "}")
                                if (I !== ":")
                                  if (I !== "(")
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
                                  for (var D = "", R = O + 1; R < b.length; ) {
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
                                    D += b[R++];
                                  }
                                  if (!D)
                                    throw new TypeError(
                                      "Missing parameter name at ".concat(O)
                                    );
                                  T.push({ type: "NAME", index: O, value: D }),
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
                    d = "[^".concat(ui(l.delimiter || "/#?"), "]+?"),
                    p = [],
                    m = 0,
                    h = 0,
                    g = "",
                    y = function (b) {
                      if (h < c.length && c[h].type === b) return c[h++].value;
                    },
                    v = function (b) {
                      var T = y(b);
                      if (T !== void 0) return T;
                      var O = c[h],
                        I = O.index;
                      throw new TypeError(
                        "Unexpected "
                          .concat(O.type, " at ")
                          .concat(I, ", expected ")
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
                  h < c.length;

                ) {
                  var x = y("CHAR"),
                    S = y("NAME"),
                    w = y("PATTERN");
                  if (S || w)
                    f.indexOf((P = x || "")) === -1 && ((g += P), (P = "")),
                      g && (p.push(g), (g = "")),
                      p.push({
                        name: S || m++,
                        prefix: P,
                        suffix: "",
                        pattern: w || d,
                        modifier: y("MODIFIER") || "",
                      });
                  else {
                    var C = x || y("ESCAPED_CHAR");
                    if (C) g += C;
                    else if ((g && (p.push(g), (g = "")), y("OPEN"))) {
                      var P = _(),
                        A = y("NAME") || "",
                        E = y("PATTERN") || "",
                        $ = _();
                      v("CLOSE"),
                        p.push({
                          name: A || (E ? m++ : ""),
                          pattern: A && !E ? d : E,
                          prefix: P,
                          suffix: $,
                          modifier: y("MODIFIER") || "",
                        });
                    } else v("END");
                  }
                }
                return p;
              })(i, a),
              s,
              a
            );
          })(t, n, r);
    },
    Hg = {
      __proto__: null,
      update: aa,
      nextTick: function () {
        return new Promise(function (e) {
          window.requestAnimationFrame(e);
        });
      },
      pathToRegexp: zu,
    },
    Ru = function () {
      return window.location.origin;
    },
    is = function (e) {
      return e === void 0 && (e = window.location.href), Jn(e).port;
    },
    Jn = function (e) {
      var t,
        n = e.match(/:\d+/);
      if (n === null)
        /^http/.test(e) && (t = 80), /^https/.test(e) && (t = 443);
      else {
        var r = n[0].substring(1);
        t = parseInt(r, 10);
      }
      var i,
        s = e.replace(Ru(), ""),
        a = {},
        o = s.indexOf("#");
      o >= 0 && ((i = s.slice(o + 1)), (s = s.slice(0, o)));
      var l = s.indexOf("?");
      return (
        l >= 0 && ((a = Nu(s.slice(l + 1))), (s = s.slice(0, l))),
        { hash: i, path: s, port: t, query: a }
      );
    },
    Nu = function (e) {
      return e.split("&").reduce(function (t, n) {
        var r = n.split("=");
        return (t[r[0]] = r[1]), t;
      }, {});
    },
    Wo = function (e) {
      return (
        e === void 0 && (e = window.location.href),
        e.replace(/(\/#.*|\/|#.*)$/, "")
      );
    },
    qg = {
      __proto__: null,
      getHref: function () {
        return window.location.href;
      },
      getAbsoluteHref: function (e, t) {
        return t === void 0 && (t = document.baseURI), new URL(e, t).href;
      },
      getOrigin: Ru,
      getPort: is,
      getPath: function (e) {
        return e === void 0 && (e = window.location.href), Jn(e).path;
      },
      getQuery: function (e, t) {
        return (
          t === void 0 && (t = !1),
          t ? JSON.stringify(Jn(e).query) : Jn(e).query
        );
      },
      getHash: function (e) {
        return Jn(e).hash;
      },
      parse: Jn,
      parseQuery: Nu,
      clean: Wo,
    };
  function Bg(e, t, n, r, i) {
    return (
      t === void 0 && (t = 2e3),
      new Promise(function (s, a) {
        var o = new XMLHttpRequest();
        (o.onreadystatechange = function () {
          if (o.readyState === XMLHttpRequest.DONE) {
            if (o.status === 200) {
              var l =
                o.responseURL !== "" && o.responseURL !== e ? o.responseURL : e;
              s({ html: o.responseText, url: pn({ href: l }, Jn(l)) }),
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
  function Vg(e) {
    return (
      !!e &&
      (typeof e == "object" || typeof e == "function") &&
      typeof e.then == "function"
    );
  }
  function fi(e, t) {
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
            r || (Vg(o) ? o.then(s, a) : s(o));
          });
        return i;
      }
    );
  }
  var er = new ((function (e) {
      function t() {
        var r;
        return (
          ((r = e.call(this) || this).logger = new $r("@barba/core")),
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
      sa(t, e);
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
                  return fi(o.fn, o.ctx).apply(void 0, [].slice.call(i, 1));
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
    })(Ng))(),
    Fu = (function () {
      function e(t) {
        if (((this.k = void 0), (this.O = []), typeof t == "boolean"))
          this.k = t;
        else {
          var n = Array.isArray(t) ? t : [t];
          this.O = n.map(function (r) {
            return zu(r);
          });
        }
      }
      return (
        (e.prototype.checkHref = function (t) {
          if (typeof this.k == "boolean") return this.k;
          var n = Jn(t).path;
          return this.O.some(function (r) {
            return r.exec(n) !== null;
          });
        }),
        e
      );
    })(),
    Wg = (function (e) {
      function t(r) {
        var i;
        return ((i = e.call(this, r) || this).T = new Map()), i;
      }
      sa(t, e);
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
          var s = pn({}, this.T.get(r), i);
          return this.T.set(r, s), s;
        }),
        t
      );
    })(Fu),
    Yg = (function () {
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
    Xg = function () {
      return !window.history.pushState;
    },
    Gg = function (e) {
      return !e.el || !e.href;
    },
    jg = function (e) {
      var t = e.event;
      return t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey;
    },
    Ug = function (e) {
      var t = e.el;
      return t.hasAttribute("target") && t.target === "_blank";
    },
    Kg = function (e) {
      var t = e.el;
      return (
        (t.protocol !== void 0 && window.location.protocol !== t.protocol) ||
        (t.hostname !== void 0 && window.location.hostname !== t.hostname)
      );
    },
    Qg = function (e) {
      var t = e.el;
      return t.port !== void 0 && is() !== is(t.href);
    },
    Zg = function (e) {
      var t = e.el;
      return t.getAttribute && typeof t.getAttribute("download") == "string";
    },
    Jg = function (e) {
      return e.el.hasAttribute(mn.prefix + "-" + mn.prevent);
    },
    ev = function (e) {
      return !!e.el.closest("[" + mn.prefix + "-" + mn.prevent + '="all"]');
    },
    tv = function (e) {
      var t = e.href;
      return Wo(t) === Wo() && is(t) === is();
    },
    nv = (function (e) {
      function t(r) {
        var i;
        return (
          ((i = e.call(this, r) || this).suite = []),
          (i.tests = new Map()),
          i.init(),
          i
        );
      }
      sa(t, e);
      var n = t.prototype;
      return (
        (n.init = function () {
          this.add("pushState", Xg),
            this.add("exists", Gg),
            this.add("newTab", jg),
            this.add("blank", Ug),
            this.add("corsDomain", Kg),
            this.add("corsPort", Qg),
            this.add("download", Zg),
            this.add("preventSelf", Jg),
            this.add("preventAll", ev),
            this.add("sameUrl", tv, !1);
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
    })(Fu),
    Yo = (function (e) {
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
          Error.captureStackTrace && Error.captureStackTrace(Rg(i), t),
          (i.name = "BarbaError"),
          i
        );
      }
      return sa(t, e), t;
    })(Vo(Error)),
    rv = (function () {
      function e(n) {
        n === void 0 && (n = []),
          (this.logger = new $r("@barba/core")),
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
              var p = !0,
                m = {};
              return r.self && d.name === "self"
                ? (a.set(d, m), !0)
                : (i.j.reverse().forEach(function (h) {
                    p &&
                      ((p = i.M(d, h, n, m)),
                      d.from &&
                        d.to &&
                        (p = i.M(d, h, n, m, "from") && i.M(d, h, n, m, "to")),
                      d.from && !d.to && (p = i.M(d, h, n, m, "from")),
                      !d.from && d.to && (p = i.M(d, h, n, m, "to")));
                  }),
                  a.set(d, m),
                  p);
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
            p = u,
            m = a ? c[a] : c,
            h = a === "to" ? i.next : i.current;
          if (a ? m && m[u] : m[u]) {
            switch (r.type) {
              case "strings":
              default:
                var g = Array.isArray(m[f]) ? m[f] : [m[f]];
                h[f] && g.indexOf(h[f]) !== -1 && (l = !0),
                  g.indexOf(h[f]) === -1 && (o = !1);
                break;
              case "object":
                var y = Array.isArray(m[d]) ? m[d] : [m[d]];
                h[d]
                  ? (h[d].name && y.indexOf(h[d].name) !== -1 && (l = !0),
                    y.indexOf(h[d].name) === -1 && (o = !1))
                  : (o = !1);
                break;
              case "function":
                m[p](i) ? (l = !0) : (o = !1);
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
  function ss(e, t) {
    try {
      var n = e();
    } catch (r) {
      return t(r);
    }
    return n && n.then ? n.then(void 0, t) : n;
  }
  var iv = (function () {
      function e(n) {
        n === void 0 && (n = []),
          (this.logger = new $r("@barba/core")),
          (this.store = void 0),
          (this.C = !1),
          (this.store = new rv(n));
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
            var l = ss(
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
            var f = ss(
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
                    var h = (function () {
                      if (u)
                        return ss(
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
                              throw new Yo(_, "Transition error [sync]");
                          }
                        );
                      var g = function (_) {
                          return ss(
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
                                throw new Yo(
                                  x,
                                  "Transition error [before/after/enter]"
                                );
                            }
                          );
                        },
                        y = !1,
                        v = ss(
                          function () {
                            return Promise.resolve(
                              l.L("beforeLeave", r, c)
                            ).then(function () {
                              return Promise.resolve(
                                Promise.all([l.leave(r, c), aa(s, r)]).then(
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
                              throw new Yo(
                                _,
                                "Transition error [before/after/leave]"
                              );
                          }
                        );
                      return v && v.then ? v.then(g) : g();
                    })();
                    return h && h.then ? h.then(m) : m();
                  });
                }
                var p = (function () {
                  if (u) return Promise.resolve(aa(s, r)).then(function () {});
                })();
                return p && p.then ? p.then(d) : d();
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
            return Promise.resolve(er.do("once", n, r)).then(function () {
              return r.once ? fi(r.once, r)(n) : Promise.resolve();
            });
          } catch (i) {
            return Promise.reject(i);
          }
        }),
        (t.leave = function (n, r) {
          try {
            return Promise.resolve(er.do("leave", n, r)).then(function () {
              return r.leave ? fi(r.leave, r)(n) : Promise.resolve();
            });
          } catch (i) {
            return Promise.reject(i);
          }
        }),
        (t.enter = function (n, r, i) {
          try {
            return Promise.resolve(er.do("enter", n, r)).then(function () {
              return r.enter ? fi(r.enter, r)(n, i) : Promise.resolve();
            });
          } catch (s) {
            return Promise.reject(s);
          }
        }),
        (t.add = function (n, r) {
          try {
            return (
              Or.addContainer(n.next.container, r),
              er.do("nextAdded", n),
              Promise.resolve()
            );
          } catch (i) {
            return Promise.reject(i);
          }
        }),
        (t.remove = function (n) {
          try {
            return (
              Or.removeContainer(n.current.container),
              er.do("currentRemoved", n),
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
            return Promise.resolve(er.do(n, r, i)).then(function () {
              return i[n] ? fi(i[n], i)(r) : Promise.resolve();
            });
          } catch (s) {
            return Promise.reject(s);
          }
        }),
        Ho(e, [
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
    sv = (function () {
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
              er[r](n._(r));
            }));
      }
      return (
        (e.prototype._ = function (t) {
          var n = this;
          return function (r) {
            var i = t.match(/enter/i) ? r.next : r.current,
              s = n.byNamespace.get(i.namespace);
            return s && s[t] ? fi(s[t], s)(r) : Promise.resolve();
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
  var av = {
      container: null,
      html: "",
      namespace: "",
      url: { hash: "", href: "", path: "", port: null, query: {} },
    },
    tr = new ((function () {
      function e() {
        (this.version = "2.10.3"),
          (this.schemaPage = av),
          (this.Logger = $r),
          (this.logger = new $r("@barba/core")),
          (this.plugins = []),
          (this.timeout = void 0),
          (this.cacheIgnore = void 0),
          (this.cacheFirstPage = void 0),
          (this.prefetchIgnore = void 0),
          (this.preventRunning = void 0),
          (this.hooks = er),
          (this.cache = void 0),
          (this.headers = void 0),
          (this.prevent = void 0),
          (this.transitions = void 0),
          (this.views = void 0),
          (this.dom = Or),
          (this.helpers = Hg),
          (this.history = Du),
          (this.request = Bg),
          (this.url = qg),
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
            c = l === void 0 ? mn : l,
            u = r.requestError,
            f = r.timeout,
            d = f === void 0 ? 2e3 : f,
            p = r.cacheIgnore,
            m = p !== void 0 && p,
            h = r.cacheFirstPage,
            g = h !== void 0 && h,
            y = r.prefetchIgnore,
            v = y !== void 0 && y,
            _ = r.preventRunning,
            x = _ !== void 0 && _,
            S = r.prevent,
            w = S === void 0 ? null : S,
            C = r.debug,
            P = r.logLevel;
          if (
            ($r.setLevel(
              (C !== void 0 && C) === !0 ? "debug" : P === void 0 ? "off" : P
            ),
            this.logger.info(this.version),
            Object.keys(c).forEach(function ($) {
              mn[$] && (mn[$] = c[$]);
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
            ((this.cache = new Wg(m)),
            (this.headers = new Yg()),
            (this.prevent = new nv(v)),
            (this.transitions = new iv(s)),
            (this.views = new sv(o)),
            w !== null)
          ) {
            if (typeof w != "function")
              throw new Error("[@barba/core] Prevent should be a function");
            this.prevent.add("preventCustom", w);
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
            (E.current = pn({}, this.schemaPage)),
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
                  var d = (function (p, m) {
                    try {
                      var h =
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
                    return h && h.then ? h.then(void 0, m) : h;
                  })(0, function () {
                    $r.getLevel() === 0 && l.force(f.next.url.href);
                  });
                  if (d && d.then) return d.then(function () {});
                });
              },
              l = this;
            if (
              ((l.data.next.url = pn({ href: n }, l.url.parse(n))),
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
                return Promise.resolve(aa(a, l.data)).then(function () {});
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
              url: pn({ href: n }, this.url.parse(n)),
            };
          (this.D = {
            current: r,
            event: void 0,
            next: pn({}, this.schemaPage),
            trigger: void 0,
          }),
            this.hooks.do("reset", this.data);
        }),
        Ho(e, [
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
    })())();
  const Hu = () =>
    new Promise((e) => {
      setTimeout(() => {
        window.scrollTo(0, 0),
          document.documentElement.scrollTo(0, 0),
          document.body.scrollTo(0, 0);
        const t = Qt();
        t && t.scrollTo(0, { immediate: !0 }), e();
      }, 50);
    });
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let as,
    di,
    Xo,
    ov = () => Xo || Le.register(window.gsap),
    qu = typeof Intl != "undefined" ? new Intl.Segmenter() : 0,
    oa = (e) =>
      typeof e == "string"
        ? oa(document.querySelectorAll(e))
        : "length" in e
        ? Array.from(e)
        : [e],
    Bu = (e) => oa(e).filter((t) => t instanceof HTMLElement),
    Go = [],
    jo = function () {},
    lv = /\s+/g,
    Vu = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    Wu = { left: 0, top: 0, width: 0, height: 0 },
    Yu = (e, t) => {
      if (t) {
        let n = new Set(e.join("").match(t) || Go),
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
    Xu = (e) =>
      window.getComputedStyle(e).display === "inline" &&
      (e.style.display = "inline-block"),
    hi = (e, t, n) =>
      t.insertBefore(typeof e == "string" ? document.createTextNode(e) : e, n),
    Uo = (e, t, n) => {
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
    cv = (e, t, n, r) => {
      let i = Uo("line", n, r),
        s = window.getComputedStyle(e).textAlign || "left";
      return (a, o) => {
        let l = i("");
        for (l.style.textAlign = s, e.insertBefore(l, t[a]); a < o; a++)
          l.appendChild(t[a]);
        l.normalize();
      };
    },
    Gu = (e, t, n, r, i, s, a, o, l, c) => {
      var u;
      let f = Array.from(e.childNodes),
        d = 0,
        { wordDelimiter: p, reduceWhiteSpace: m = !0, prepareText: h } = t,
        g = e.getBoundingClientRect(),
        y = g,
        v =
          !m && window.getComputedStyle(e).whiteSpace.substring(0, 3) === "pre",
        _ = 0,
        x = n.collection,
        S,
        w,
        C,
        P,
        A,
        E,
        $,
        b,
        T,
        O,
        I,
        k,
        L,
        D,
        R,
        M,
        B,
        K;
      for (
        typeof p == "object"
          ? ((C = p.delimiter || p), (w = p.replaceWith || ""))
          : (w = p === "" ? "" : p || " "),
          S = w !== " ";
        d < f.length;
        d++
      )
        if (((P = f[d]), P.nodeType === 3)) {
          for (
            R = P.textContent || "",
              m
                ? (R = R.replace(lv, " "))
                : v &&
                  (R = R.replace(
                    /\n/g,
                    w +
                      `
`
                  )),
              h && (R = h(R, e)),
              P.textContent = R,
              A = w || C ? R.split(C || w) : R.match(o) || Go,
              B = A[A.length - 1],
              b = S ? B.slice(-1) === " " : !B,
              B || A.pop(),
              y = g,
              $ = S ? A[0].charAt(0) === " " : !A[0],
              $ && hi(" ", e, P),
              A[0] || A.shift(),
              Yu(A, l),
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
                hi(document.createElement("br"), e, P),
                (M = M.slice(1))),
              !m && M === "")
            )
              hi(w, e, P);
            else if (M === " ") e.insertBefore(document.createTextNode(" "), P);
            else {
              if (
                (S && M.charAt(0) === " " && hi(" ", e, P),
                _ && T === 1 && !$ && x.indexOf(_.parentNode) > -1
                  ? ((E = x[x.length - 1]),
                    E.appendChild(document.createTextNode(r ? "" : M)))
                  : ((E = n(r ? "" : M)),
                    hi(E, e, P),
                    _ && T === 1 && !$ && E.insertBefore(_, E.firstChild)),
                r)
              )
                for (
                  I = qu
                    ? Yu(
                        [...qu.segment(M)].map((se) => se.segment),
                        l
                      )
                    : M.match(o) || Go,
                    K = 0;
                  K < I.length;
                  K++
                )
                  E.appendChild(
                    I[K] === " " ? document.createTextNode(" ") : r(I[K])
                  );
              if (s && c) {
                if (
                  ((R = P.textContent = R.substring(M.length + 1, R.length)),
                  (O = E.getBoundingClientRect()),
                  O.top > y.top && O.left <= y.left)
                ) {
                  for (k = e.cloneNode(), L = e.childNodes[0]; L && L !== E; )
                    (D = L), (L = L.nextSibling), k.appendChild(D);
                  e.parentNode.insertBefore(k, e), i && Xu(k);
                }
                y = O;
              }
              (T < A.length || b) &&
                hi(
                  T >= A.length ? " " : S && M.slice(-1) === " " ? " " + w : w,
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
              : (Gu(P, t, n, r, i, s, a, o, l, !0), (_ = 0)),
            i && Xu(P));
    };
  const ju = class _f {
    constructor(t, n) {
      (this.isSplit = !1),
        ov(),
        (this.elements = Bu(t)),
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
        jo(this),
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
        p = f && !d && !u,
        m =
          l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
        h = m ? new RegExp(m.source + "|" + Vu.source, "gu") : Vu,
        g = !!t.ignore && Bu(t.ignore),
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
              A = [],
              E = f ? Uo("char", t, C) : null,
              $ = Uo("word", t, P),
              b,
              T,
              O,
              I;
            if ((Gu(S, t, $, E, p, i && (u || p), g, h, m, !1), u)) {
              let k = oa(S.childNodes),
                L = cv(S, k, t, A),
                D,
                R = [],
                M = 0,
                B = k.map((se) =>
                  se.nodeType === 1 ? se.getBoundingClientRect() : Wu
                ),
                K = Wu;
              for (b = 0; b < k.length; b++)
                (D = k[b]),
                  D.nodeType === 1 &&
                    (D.nodeName === "BR"
                      ? (R.push(D), L(M, b + 1), (M = b + 1), (K = B[M]))
                      : (b &&
                          B[b].top > K.top &&
                          B[b].left <= K.left &&
                          (L(M, b), (M = b)),
                        (K = B[b])));
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
                  (I = T.nextSibling),
                    I &&
                      I.nodeType === 3 &&
                      ((I.textContent =
                        (T.textContent || "") + (I.textContent || "")),
                      T.remove());
              (P.length = 0), S.normalize();
            }
            this.lines.push(...A), this.words.push(...P), this.chars.push(...C);
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
        di &&
          (o
            ? di.addEventListener("loadingdone", this._split)
            : di.status === "loading" &&
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
        di == null || di.removeEventListener("loadingdone", this._split),
        i && ((this._data.animTime = i.totalTime()), i.revert()),
        (n = (t = this.vars).onRevert) == null || n.call(t, this),
        this
      );
    }
    static create(t, n) {
      return new _f(t, n);
    }
    static register(t) {
      (as = as || t || window.gsap),
        as && ((oa = as.utils.toArray), (jo = as.core.context || jo)),
        !Xo && window.innerWidth > 0 && ((di = document.fonts), (Xo = !0));
    }
  };
  ju.version = "3.13.0";
  let Le = ju;
  F.registerPlugin(Le);
  const Mn = (e) => {
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
    },
    nr = (e) => {
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
    rr = (e) => {
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
    },
    ot = (e) => {
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
    };
  F.registerPlugin(Le);
  const Uu = (e) => {
    const t = document.querySelector("[home-hero='text']"),
      n = document.querySelector("[home-hero='btn']"),
      r = document.querySelector("[home-hero='visual']"),
      i = new Le(t, { type: "lines", linesClass: "home-hero-text-line" });
    i.lines.forEach((a) => {
      const o = document.createElement("div");
      (o.style.overflow = "clip"),
        (o.style.position = "relative"),
        a.parentNode.insertBefore(o, a),
        o.appendChild(a);
    });
    const s = F.timeline();
    return (
      F.set(i.lines, { opacity: 0, yPercent: 100 }),
      F.set(n, { opacity: 0 }),
      F.set(r, { opacity: 0 }),
      s.to(i.lines, {
        opacity: 1,
        duration: 1.8,
        stagger: 0.08,
        ease: "expo.inOut",
        yPercent: 0,
      }),
      s.to(n, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
      s.to(
        r,
        { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "expo.inOut" },
        "-=1"
      ),
      s
    );
  };
  F.registerPlugin(Le);
  const Ku = (e) => {
    const t = document.querySelector("[work-hero='text']"),
      n = document.querySelector("[work-hero='filter-wrap']"),
      r = document.querySelectorAll("[work-hero='project']"),
      i = new Le(t, { type: "lines", linesClass: "work-hero-text-line" });
    i.lines.forEach((a) => {
      const o = document.createElement("div");
      (o.style.overflow = "clip"),
        (o.style.position = "relative"),
        a.parentNode.insertBefore(o, a),
        o.appendChild(a);
    });
    const s = F.timeline();
    return (
      F.set(i.lines, { opacity: 0, yPercent: 100 }),
      F.set(n, { opacity: 0 }),
      F.set(r, { y: 100, opacity: 0 }),
      s.to(i.lines, {
        opacity: 1,
        duration: 1.8,
        stagger: 0.08,
        ease: "expo.inOut",
        yPercent: 0,
      }),
      s.to(n, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
      s.to(
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
      s
    );
  };
  F.registerPlugin(Le);
  const Qu = (e) => {
    const t = document.querySelector("[career-hero='text']"),
      n = document.querySelector("[career-hero='btn']"),
      r = document.querySelector("[career-hero='visual']"),
      i = new Le(t, { type: "lines", linesClass: "career-hero-text-line" });
    i.lines.forEach((a) => {
      const o = document.createElement("div");
      (o.style.overflow = "clip"),
        (o.style.position = "relative"),
        a.parentNode.insertBefore(o, a),
        o.appendChild(a);
    });
    const s = F.timeline();
    return (
      F.set(i.lines, { opacity: 0, yPercent: 100 }),
      F.set(n, { opacity: 0 }),
      F.set(r, { opacity: 0 }),
      s.to(i.lines, {
        opacity: 1,
        duration: 1.8,
        stagger: 0.08,
        ease: "expo.inOut",
        yPercent: 0,
      }),
      s.to(n, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
      s.to(
        r,
        { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "expo.inOut" },
        "-=1"
      ),
      s
    );
  };
  F.registerPlugin(Le);
  const Zu = (e) => {
    const t = document.querySelector("[about-hero='text']"),
      n = document.querySelectorAll("[about-hero='visual']"),
      r = new Le(t, { type: "lines", linesClass: "about-hero-text-line" });
    r.lines.forEach((s) => {
      const a = document.createElement("div");
      (a.style.overflow = "clip"),
        (a.style.position = "relative"),
        s.parentNode.insertBefore(a, s),
        a.appendChild(s);
    });
    const i = F.timeline();
    return (
      F.set(r.lines, { opacity: 0, yPercent: 100 }),
      F.set(n, { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }),
      i.to(r.lines, {
        opacity: 1,
        duration: 1.8,
        stagger: 0.08,
        ease: "expo.inOut",
        yPercent: 0,
      }),
      i.to(
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
      i
    );
  };
  /*!
   * DrawSVGPlugin 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var gn,
    Ko,
    la,
    Ju,
    ef,
    tf,
    Qo,
    nf,
    rf = function () {
      return typeof window != "undefined";
    },
    sf = function () {
      return gn || (rf() && (gn = window.gsap) && gn.registerPlugin && gn);
    },
    uv = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    Zo = {
      rect: ["width", "height"],
      circle: ["r", "r"],
      ellipse: ["rx", "ry"],
      line: ["x2", "y2"],
    },
    Ar = function (t) {
      return Math.round(t * 1e4) / 1e4;
    },
    $n = function (t) {
      return parseFloat(t) || 0;
    },
    af = function (t, n) {
      var r = $n(t);
      return ~t.indexOf("%") ? (r / 100) * n : r;
    },
    ca = function (t, n) {
      return $n(t.getAttribute(n));
    },
    ua = Math.sqrt,
    of = function (t, n, r, i, s, a) {
      return ua(
        Math.pow(($n(r) - $n(t)) * s, 2) + Math.pow(($n(i) - $n(n)) * a, 2)
      );
    },
    lf = function (t) {
      return console.warn(t);
    },
    cf = function (t) {
      return t.getAttribute("vector-effect") === "non-scaling-stroke";
    },
    fv = 1,
    dv = function (t, n, r) {
      var i = t.indexOf(" "),
        s,
        a;
      return (
        i < 0
          ? ((s = r !== void 0 ? r + "" : t), (a = t))
          : ((s = t.substr(0, i)), (a = t.substr(i + 1))),
        (s = af(s, n)),
        (a = af(a, n)),
        s > a ? [a, s] : [s, a]
      );
    },
    fa = function (t) {
      if (((t = Ko(t)[0]), !t)) return 0;
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
      cf(t) &&
        ((s = t.getScreenCTM()),
        (i = ua(s.a * s.a + s.b * s.b)),
        (s = ua(s.d * s.d + s.c * s.c)));
      try {
        o = t.getBBox();
      } catch (v) {
        lf(
          "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
        );
      }
      var p = o || { x: 0, y: 0, width: 0, height: 0 },
        m = p.x,
        h = p.y,
        g = p.width,
        y = p.height;
      if (
        ((!o || (!g && !y)) &&
          Zo[n] &&
          ((g = ca(t, Zo[n][0])),
          (y = ca(t, Zo[n][1])),
          n !== "rect" && n !== "line" && ((g *= 2), (y *= 2)),
          n === "line" &&
            ((m = ca(t, "x1")),
            (h = ca(t, "y1")),
            (g = Math.abs(g - m)),
            (y = Math.abs(y - h)))),
        n === "path")
      )
        (c = r.strokeDasharray),
          (r.strokeDasharray = "none"),
          (a = t.getTotalLength() || 0),
          Ar(i) !== Ar(s) &&
            !tf &&
            (tf = 1) &&
            lf(
              "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
            ),
          (a *= (i + s) / 2),
          (r.strokeDasharray = c);
      else if (n === "rect") a = g * 2 * i + y * 2 * s;
      else if (n === "line") a = of(m, h, m + g, h + y, i, s);
      else if (n === "polyline" || n === "polygon")
        for (
          l = t.getAttribute("points").match(uv) || [],
            n === "polygon" && l.push(l[0], l[1]),
            a = 0,
            u = 2;
          u < l.length;
          u += 2
        )
          a += of(l[u - 2], l[u - 1], l[u], l[u + 1], i, s) || 0;
      else
        (n === "circle" || n === "ellipse") &&
          ((f = (g / 2) * i),
          (d = (y / 2) * s),
          (a = Math.PI * (3 * (f + d) - ua((3 * f + d) * (f + 3 * d)))));
      return a || 0;
    },
    uf = function (t, n) {
      if (((t = Ko(t)[0]), !t)) return [0, 0];
      n || (n = fa(t) + 1);
      var r = la.getComputedStyle(t),
        i = r.strokeDasharray || "",
        s = $n(r.strokeDashoffset),
        a = i.indexOf(",");
      return (
        a < 0 && (a = i.indexOf(" ")),
        (i = a < 0 ? n : $n(i.substr(0, a))),
        i > n && (i = n),
        [-s || 0, i - s || 0]
      );
    },
    ff = function () {
      rf() &&
        ((la = window),
        (ef = gn = sf()),
        (Ko = gn.utils.toArray),
        (Qo = gn.core.getStyleSaver),
        (nf = gn.core.reverting || function () {}),
        (Ju = ((la.navigator || {}).userAgent || "").indexOf("Edge") !== -1));
    },
    df = {
      version: "3.13.0",
      name: "drawSVG",
      register: function (t) {
        (gn = t), ff();
      },
      init: function (t, n, r, i, s) {
        if (!t.getBBox) return !1;
        ef || ff();
        var a = fa(t),
          o,
          l,
          c;
        return (
          (this.styles =
            Qo && Qo(t, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
          (this.tween = r),
          (this._style = t.style),
          (this._target = t),
          n + "" == "true"
            ? (n = "0 100%")
            : n
            ? (n + "").indexOf(" ") === -1 && (n = "0 " + n)
            : (n = "0 0"),
          (o = uf(t, a)),
          (l = dv(n, a, o[0])),
          (this._length = Ar(a)),
          (this._dash = Ar(o[1] - o[0])),
          (this._offset = Ar(-o[0])),
          (this._dashPT = this.add(
            this,
            "_dash",
            this._dash,
            Ar(l[1] - l[0]),
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
            Ar(-l[0]),
            0,
            0,
            0,
            0,
            0,
            1
          )),
          Ju &&
            ((c = la.getComputedStyle(t)),
            c.strokeLinecap !== c.strokeLinejoin &&
              ((l = $n(c.strokeMiterlimit)),
              this.add(t.style, "strokeMiterlimit", l, l + 0.01))),
          (this._live = cf(t) || ~(n + "").indexOf("live")),
          (this._nowrap = ~(n + "").indexOf("nowrap")),
          this._props.push("drawSVG"),
          fv
        );
      },
      render: function (t, n) {
        if (n.tween._time || !nf()) {
          var r = n._pt,
            i = n._style,
            s,
            a,
            o,
            l;
          if (r) {
            for (
              n._live &&
              ((s = fa(n._target)),
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
      getLength: fa,
      getPosition: uf,
    };
  sf() && gn.registerPlugin(df), F.registerPlugin(Le), F.registerPlugin(df);
  const hf = (e) => {
    const t = document.querySelector("[service-hero='text']"),
      n = document.querySelectorAll("[service-hero='btn']"),
      r = document.querySelector("[service-hero='svg']"),
      i = document.querySelector("[service-hero='svg'] path"),
      s = new Le(t, { type: "lines", linesClass: "service-hero-text-line" });
    s.lines.forEach((o) => {
      const l = document.createElement("div");
      (l.style.overflow = "clip"),
        (l.style.position = "relative"),
        o.parentNode.insertBefore(l, o),
        l.appendChild(o);
    });
    const a = F.timeline();
    return (
      F.set(s.lines, { opacity: 0, yPercent: 100 }),
      F.set(n, { opacity: 0, yPercent: 20, scale: 0 }),
      F.set(r, { opacity: 0 }),
      F.set(i, { drawSVG: 0 }),
      a.to(r, { opacity: 1, duration: 0, ease: "power1.out" }),
      a.to(
        s.lines,
        {
          opacity: 1,
          duration: 1.8,
          stagger: 0.08,
          ease: "expo.inOut",
          yPercent: 0,
        },
        "<"
      ),
      a.to(
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
      a.to(
        i,
        { opacity: 1, drawSVG: "100%", duration: 5, ease: "expo.inOut" },
        "-=2.2"
      ),
      a
    );
  };
  F.registerPlugin(Le);
  const pf = (e) => {
    const t = document.querySelector("[contact-hero='text']"),
      n = document.querySelector("[contact-hero='visual']"),
      r = document.querySelectorAll("[contact-hero='visual-info']"),
      i = document.querySelectorAll("[contact-hero='cta']"),
      s = new Le(t, { type: "lines", linesClass: "contact-hero-text-line" });
    s.lines.forEach((o) => {
      const l = document.createElement("div");
      (l.style.overflow = "clip"),
        (l.style.position = "relative"),
        o.parentNode.insertBefore(l, o),
        l.appendChild(o);
    });
    const a = F.timeline();
    return (
      F.set(s.lines, { opacity: 0, yPercent: 100 }),
      F.set(n, { opacity: 0, clipPath: "inset(50% round 16px)" }),
      F.set(r, { opacity: 0, y: 50 }),
      F.set(i, { opacity: 0, yPercent: 50 }),
      a.to(s.lines, {
        opacity: 1,
        duration: 1.8,
        stagger: 0.08,
        ease: "expo.inOut",
        yPercent: 0,
      }),
      a.to(
        n,
        {
          opacity: 1,
          clipPath: "inset(0% round 10px)",
          duration: 1.8,
          ease: "expo.inOut",
        },
        "-=1.4"
      ),
      a.to(
        r,
        { opacity: 1, y: 0, duration: 1.4, stagger: 0.1, ease: "expo.out" },
        "-=1"
      ),
      a.to(
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
      a
    );
  };
  F.registerPlugin(Le);
  const mf = (e) =>
    tl(this, null, function* () {
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
          linesClass: "work-cms-hero-text-char",
        }),
        d = new Le(s, {
          type: "lines",
          linesClass: "work-cms-hero-info-title-line",
        }),
        p = new Le(a, {
          type: "lines",
          linesClass: "work-cms-hero-info-text-line",
        }),
        m = new Le(o, {
          type: "lines",
          linesClass: "work-cms-hero-info-meta-line",
        });
      f.lines.forEach((g) => {
        const y = document.createElement("div");
        (y.style.overflow = "clip"),
          (y.style.position = "relative"),
          g.parentNode.insertBefore(y, g),
          y.appendChild(g);
      }),
        d.lines.forEach((g) => {
          const y = document.createElement("div");
          (y.style.overflow = "clip"),
            (y.style.position = "relative"),
            g.parentNode.insertBefore(y, g),
            y.appendChild(g);
        }),
        p.lines.forEach((g) => {
          const y = document.createElement("div");
          (y.style.overflow = "clip"),
            (y.style.position = "relative"),
            g.parentNode.insertBefore(y, g),
            y.appendChild(g);
        }),
        m.lines.forEach((g) => {
          const y = document.createElement("div");
          (y.style.overflow = "clip"),
            (y.style.position = "relative"),
            g.parentNode.insertBefore(y, g),
            y.appendChild(g);
        });
      const h = F.timeline();
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
        F.set(d.lines, { opacity: 0, yPercent: 100 }),
        F.set(p.lines, { opacity: 0, yPercent: 100 }),
        F.set(m.lines, { opacity: 0, yPercent: 100 }),
        F.set(c, { y: 100, opacity: 0 }),
        F.set(u, { scale: 1.4 }),
        h.to(
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
        h.to(u, { scale: 1, duration: 2.5, ease: "expo.inOut" }, "-=2.5"),
        h.to(
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
        h.to(r, { opacity: 1, duration: 0 }, "<"),
        h.to(r, { scaleX: 1, duration: 2.4, ease: "expo.inOut" }, "-=2"),
        h.to(i, { opacity: 1, y: 0, duration: 1, ease: "expo.inOut" }, "-=1.8"),
        h.to(
          d.lines,
          {
            opacity: 1,
            yPercent: 0,
            duration: 2,
            stagger: 0.06,
            ease: "expo.inOut",
          },
          "<"
        ),
        h.to(
          p.lines,
          {
            opacity: 1,
            yPercent: 0,
            duration: 2,
            stagger: 0.08,
            ease: "expo.inOut",
          },
          "<"
        ),
        h.to(
          m.lines,
          {
            opacity: 1,
            yPercent: 0,
            duration: 2,
            stagger: 0.08,
            ease: "expo.inOut",
          },
          "<"
        ),
        h.to(
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
        h
      );
    });
  F.registerPlugin(X);
  class hv {
    constructor() {
      (this.initialized = !1), (this.cleanupHandlers = []);
    }
    init() {
      this.initialized &&
        (console.warn("MainInitializer already initialized, cleaning up first"),
        this.cleanup());
      const t = $g(),
        n = Ig();
      (this.cleanupHandlers = [t, n]), (this.initialized = !0);
    }
    cleanup() {
      this.cleanupHandlers.forEach((t) => typeof t == "function" && t()),
        (this.cleanupHandlers = []),
        (this.initialized = !1);
    }
  }
  const pv = new hv(),
    mv = () => {
      pv.init();
      const e = document.querySelector(".page_main");
      F.set(e, { zIndex: 3 });
      const t = Qt();
      t == null || t.start();
    },
    gv = () => {
      X.getAll().forEach((e) => e.kill(!1)),
        X.refresh(),
        window.dispatchEvent(new Event("resize"));
    },
    vv = () => {
      document.querySelectorAll("a").forEach((a) => {
        a.style.pointerEvents = "";
      });
      const t = window.location.pathname,
        n = document.querySelectorAll(`a[href="${t}"]`),
        r = document.querySelectorAll("[nav-link='wrap']");
      document.querySelectorAll("[nav-menu='close']");
      const i = document.querySelectorAll("[nav-brand-link='home']");
      n.forEach((a) => {
        a.getAttribute("href").includes("#") ||
          (a.style.pointerEvents = "none");
      });
      const s = (a) => {
        const o = a.cloneNode(!0);
        a.parentNode.replaceChild(o, a),
          o.addEventListener("click", () => {
            const l = o.querySelectorAll("a");
            if (Array.from(l).some((u) => u.getAttribute("href") === t)) {
              const u = Qt == null ? void 0 : Qt();
              u && u.scrollTo(0, { duration: 1 });
            }
          });
      };
      r.forEach(s), i.forEach(s);
    };
  function yv() {
    tr.hooks.beforeOnce(() =>
      tl(this, null, function* () {
        yield document.fonts.ready;
      })
    ),
      tr.hooks.once(() => {
        mv(), Hu();
      }),
      tr.hooks.before(() => {
        document.body.style.pointerEvents = "none";
      }),
      tr.hooks.beforeLeave(() => {
        const e = Qt();
        e == null || e.stop(),
          X.getAll().forEach((t) => {
            t.kill(!0);
          });
      }),
      tr.hooks.beforeEnter((e) => {
        Hu(e.next.container);
        const t = Qt();
        t == null || t.start(), gv();
      }),
      tr.hooks.after(() => {
        document.body.style.pointerEvents = "auto";
      }),
      tr.hooks.afterEnter(() => {
        vv();
      }),
      tr.init({
        debug: !0,
        sync: !1,
        preventRunning: !0,
        prefetch: !0,
        views: [
          {
            namespace: "home",
            once() {},
            beforeLeave() {},
            beforeEnter() {
              xp();
            },
          },
          {
            namespace: "work",
            once() {},
            beforeLeave() {},
            beforeEnter() {
              Sg();
            },
          },
          {
            namespace: "work_cms",
            once() {},
            beforeLeave() {},
            beforeEnter() {
              Pg();
            },
          },
          {
            namespace: "career",
            once() {},
            beforeLeave() {},
            beforeEnter() {
              xg();
            },
          },
          {
            namespace: "about",
            once() {},
            beforeLeave() {},
            beforeEnter() {
              sg();
            },
          },
          {
            namespace: "contact",
            once() {},
            beforeLeave() {},
            beforeEnter() {
              bg();
            },
          },
          {
            namespace: "service",
            once() {},
            beforeLeave() {},
            beforeEnter() {
              Cg();
            },
          },
          {
            namespace: "seo",
            once() {},
            beforeLeave() {},
            beforeEnter() {
              wg();
            },
          },
        ],
        transitions: [
          {
            name: "global",
            once: ({ next: e }) => {
              Mn(e.container);
            },
          },
          {
            name: "home",
            sync: !1,
            to: { namespace: ["home"] },
            once: ({ next: e }) => {
              Mn(e.container)
                .add(() => ot(e.container), "-=1")
                .add(() => Uu(e.container), "-=1.2");
            },
            leave: ({ current: e }) => nr(e.container),
            afterLeave: ({}) => {},
            beforeEnter: ({ next: e }) => {
              rr(e.container)
                .add(() => Uu(e.container), "-=1.4")
                .add(() => ot(e.container), "-=0.8");
            },
            enter: ({ next: e }) => {},
            afterEnter: ({ next: e }) => {},
          },
          {
            name: "work",
            to: { namespace: ["work"] },
            sync: !1,
            once: ({ next: e }) => {
              Mn(e.container)
                .add(() => ot(e.container), "-=1")
                .add(() => Ku(e.container), "-=1.2");
            },
            leave: ({ current: e }) => nr(e.container),
            afterLeave: ({}) => {},
            beforeEnter: ({ next: e }) => {
              rr(e.container)
                .add(() => Ku(e.container), "-=1.4")
                .add(() => ot(e.container), "-=0.8");
            },
            enter: ({ next: e }) => {},
            afterEnter: ({ next: e }) => {},
          },
          {
            name: "work_cms",
            to: { namespace: ["work_cms"] },
            sync: !1,
            once: ({ next: e }) => {
              Mn(e.container)
                .add(() => ot(e.container), "-=1")
                .add(() => mf(e.container), "-=1.2");
            },
            leave: ({ current: e }) => nr(e.container),
            afterLeave: ({}) => {},
            beforeEnter: ({ next: e }) => {
              rr(e.container)
                .add(() => mf(e.container), "-=1.4")
                .add(() => ot(e.container), "-=0.8");
            },
            enter: ({ next: e }) => {},
            afterEnter: ({ next: e }) => {},
          },
          {
            name: "career",
            to: { namespace: ["career"] },
            sync: !1,
            once: ({ next: e }) => {
              const t = Mn(e.container);
              t.add(() => ot(e.container), "-=1"),
                t.add(() => Qu(e.container), "-=1.2");
            },
            leave: ({ current: e }) => nr(e.container),
            afterLeave: ({}) => {},
            beforeEnter: ({ next: e }) => {
              const t = rr(e.container);
              t.add(() => Qu(e.container), "-=1.4"),
                t.add(() => ot(e.container), "-=0.8");
            },
            enter: ({ next: e }) => {},
            afterEnter: ({ next: e }) => {},
          },
          {
            name: "about",
            to: { namespace: ["about"] },
            sync: !1,
            once: ({ next: e }) => {
              const t = Mn(e.container);
              t.add(() => ot(e.container), "-=1"),
                t.add(() => Zu(e.container), "-=1.2");
            },
            leave: ({ current: e }) => nr(e.container),
            afterLeave: ({}) => {},
            beforeEnter: ({ next: e }) => {
              const t = rr(e.container);
              t.add(() => Zu(e.container), "-=1.4"),
                t.add(() => ot(e.container), "-=0.8");
            },
            enter: ({ next: e }) => {},
            afterEnter: ({ next: e }) => {},
          },
          {
            name: "contact",
            to: { namespace: ["contact"] },
            sync: !1,
            once: ({ next: e }) => {
              const t = Mn(e.container);
              t.add(() => ot(e.container), "-=1"),
                t.add(() => pf(e.container), "-=1.2");
            },
            leave: ({ current: e }) => nr(e.container),
            afterLeave: ({}) => {},
            beforeEnter: ({ next: e }) => {
              const t = rr(e.container);
              t.add(() => pf(e.container), "-=1.4"),
                t.add(() => ot(e.container), "-=0.8");
            },
            enter: ({ next: e }) => {},
            afterEnter: ({ next: e }) => {},
          },
          {
            name: "service",
            to: { namespace: ["service"] },
            sync: !1,
            once: ({ next: e }) => {
              const t = Mn(e.container);
              t.add(() => ot(e.container), "-=1"),
                t.add(() => hf(e.container), "-=1.2");
            },
            leave: ({ current: e }) => nr(e.container),
            afterLeave: ({}) => {},
            beforeEnter: ({ next: e }) => {
              const t = rr(e.container);
              t.add(() => hf(e.container), "-=1.4"),
                t.add(() => ot(e.container), "-=0.8");
            },
            enter: ({ next: e }) => {},
            afterEnter: ({ next: e }) => {},
          },
          {
            name: "seo",
            to: { namespace: ["seo"] },
            sync: !1,
            once: ({ next: e }) => {
              Mn(e.container).add(() => ot(e.container), "-=1");
            },
            leave: ({ current: e }) => nr(e.container),
            afterLeave: ({ current: e, next: t }) => {},
            beforeEnter: ({ next: e, current: t }) => {
              ot(e.container);
            },
            enter: ({ next: e }) => rr(e.container),
            afterEnter: ({ next: e }) => {},
          },
        ],
      });
  }
  document.addEventListener("DOMContentLoaded", () => {
    yv();
  });
});
