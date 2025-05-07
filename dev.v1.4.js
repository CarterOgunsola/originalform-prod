var D0 = Object.defineProperty;
var Uf = Object.getOwnPropertySymbols;
var z0 = Object.prototype.hasOwnProperty,
  R0 = Object.prototype.propertyIsEnumerable;
var Ct = Math.pow,
  bl = (Ue, ze, ie) =>
    ze in Ue
      ? D0(Ue, ze, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ie,
        })
      : (Ue[ze] = ie),
  wa = (Ue, ze) => {
    for (var ie in ze || (ze = {})) z0.call(ze, ie) && bl(Ue, ie, ze[ie]);
    if (Uf) for (var ie of Uf(ze)) R0.call(ze, ie) && bl(Ue, ie, ze[ie]);
    return Ue;
  };
var B = (Ue, ze, ie) => bl(Ue, typeof ze != "symbol" ? ze + "" : ze, ie);
var Kf = (Ue, ze, ie) =>
  new Promise((ys, sn) => {
    var bs = (qt) => {
        try {
          Br(ie.next(qt));
        } catch (Si) {
          sn(Si);
        }
      },
      Ca = (qt) => {
        try {
          Br(ie.throw(qt));
        } catch (Si) {
          sn(Si);
        }
      },
      Br = (qt) =>
        qt.done ? ys(qt.value) : Promise.resolve(qt.value).then(bs, Ca);
    Br((ie = ie.apply(Ue, ze)).next());
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
        function (_, T, O) {
          _[T] = O.value;
        },
      i = typeof Symbol == "function" ? Symbol : {},
      s = i.iterator || "@@iterator",
      a = i.asyncIterator || "@@asyncIterator",
      o = i.toStringTag || "@@toStringTag";
    function l(_, T, O) {
      return (
        Object.defineProperty(_, T, {
          value: O,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        _[T]
      );
    }
    try {
      l({}, "");
    } catch (_) {
      l = function (T, O, I) {
        return (T[O] = I);
      };
    }
    function c(_, T, O, I) {
      var k = T && T.prototype instanceof d ? T : d,
        L = Object.create(k.prototype),
        D = new A(I || []);
      return r(L, "_invoke", { value: S(_, O, D) }), L;
    }
    function u(_, T, O) {
      try {
        return { type: "normal", arg: _.call(T, O) };
      } catch (I) {
        return { type: "throw", arg: I };
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
    function b(_) {
      ["next", "throw", "return"].forEach(function (T) {
        l(_, T, function (O) {
          return this._invoke(T, O);
        });
      });
    }
    function x(_, T) {
      function O(k, L, D, R) {
        var M = u(_[k], _, L);
        if (M.type !== "throw") {
          var W = M.arg,
            K = W.value;
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
                  (W.value = se), D(W);
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
    function S(_, T, O) {
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
          var M = u(_, T, O);
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
    function w(_, T) {
      var O = T.method,
        I = _.iterator[O];
      if (I === void 0)
        return (
          (T.delegate = null),
          (O === "throw" &&
            _.iterator.return &&
            ((T.method = "return"),
            (T.arg = void 0),
            w(_, T),
            T.method === "throw")) ||
            (O !== "return" &&
              ((T.method = "throw"),
              (T.arg = new TypeError(
                "The iterator does not provide a '" + O + "' method"
              )))),
          f
        );
      var k = u(I, _.iterator, T.arg);
      if (k.type === "throw")
        return (T.method = "throw"), (T.arg = k.arg), (T.delegate = null), f;
      var L = k.arg;
      return L
        ? L.done
          ? ((T[_.resultName] = L.value),
            (T.next = _.nextLoc),
            T.method !== "return" && ((T.method = "next"), (T.arg = void 0)),
            (T.delegate = null),
            f)
          : L
        : ((T.method = "throw"),
          (T.arg = new TypeError("iterator result is not an object")),
          (T.delegate = null),
          f);
    }
    function C(_) {
      var T = { tryLoc: _[0] };
      1 in _ && (T.catchLoc = _[1]),
        2 in _ && ((T.finallyLoc = _[2]), (T.afterLoc = _[3])),
        this.tryEntries.push(T);
    }
    function P(_) {
      var T = _.completion || {};
      (T.type = "normal"), delete T.arg, (_.completion = T);
    }
    function A(_) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        _.forEach(C, this),
        this.reset(!0);
    }
    function E(_) {
      if (_) {
        var T = _[s];
        if (T) return T.call(_);
        if (typeof _.next == "function") return _;
        if (!isNaN(_.length)) {
          var O = -1,
            I = function k() {
              for (; ++O < _.length; )
                if (n.call(_, O)) return (k.value = _[O]), (k.done = !1), k;
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
      (h.prototype = m),
      r(v, "constructor", { value: m, configurable: !0 }),
      r(m, "constructor", { value: h, configurable: !0 }),
      (h.displayName = l(m, o, "GeneratorFunction")),
      (e.isGeneratorFunction = function (_) {
        var T = typeof _ == "function" && _.constructor;
        return (
          !!T && (T === h || (T.displayName || T.name) === "GeneratorFunction")
        );
      }),
      (e.mark = function (_) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(_, m)
            : ((_.__proto__ = m), l(_, o, "GeneratorFunction")),
          (_.prototype = Object.create(v)),
          _
        );
      }),
      (e.awrap = function (_) {
        return { __await: _ };
      }),
      b(x.prototype),
      l(x.prototype, a, function () {
        return this;
      }),
      (e.AsyncIterator = x),
      (e.async = function (_, T, O, I, k) {
        k === void 0 && (k = Promise);
        var L = new x(c(_, T, O, I), k);
        return e.isGeneratorFunction(T)
          ? L
          : L.next().then(function (D) {
              return D.done ? D.value : L.next();
            });
      }),
      b(v),
      l(v, o, "Generator"),
      l(v, s, function () {
        return this;
      }),
      l(v, "toString", function () {
        return "[object Generator]";
      }),
      (e.keys = function (_) {
        var T = Object(_),
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
        reset: function (_) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = void 0),
            this.tryEntries.forEach(P),
            !_)
          )
            for (var T in this)
              T.charAt(0) === "t" &&
                n.call(this, T) &&
                !isNaN(+T.slice(1)) &&
                (this[T] = void 0);
        },
        stop: function () {
          this.done = !0;
          var _ = this.tryEntries[0].completion;
          if (_.type === "throw") throw _.arg;
          return this.rval;
        },
        dispatchException: function (_) {
          if (this.done) throw _;
          var T = this;
          function O(M, W) {
            return (
              (L.type = "throw"),
              (L.arg = _),
              (T.next = M),
              W && ((T.method = "next"), (T.arg = void 0)),
              !!W
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
        abrupt: function (_, T) {
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
            (_ === "break" || _ === "continue") &&
            k.tryLoc <= T &&
            T <= k.finallyLoc &&
            (k = null);
          var L = k ? k.completion : {};
          return (
            (L.type = _),
            (L.arg = T),
            k
              ? ((this.method = "next"), (this.next = k.finallyLoc), f)
              : this.complete(L)
          );
        },
        complete: function (_, T) {
          if (_.type === "throw") throw _.arg;
          return (
            _.type === "break" || _.type === "continue"
              ? (this.next = _.arg)
              : _.type === "return"
              ? ((this.rval = this.arg = _.arg),
                (this.method = "return"),
                (this.next = "end"))
              : _.type === "normal" && T && (this.next = T),
            f
          );
        },
        finish: function (_) {
          for (var T = this.tryEntries.length - 1; T >= 0; --T) {
            var O = this.tryEntries[T];
            if (O.finallyLoc === _)
              return this.complete(O.completion, O.afterLoc), P(O), f;
          }
        },
        catch: function (_) {
          for (var T = this.tryEntries.length - 1; T >= 0; --T) {
            var O = this.tryEntries[T];
            if (O.tryLoc === _) {
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
        delegateYield: function (_, T, O) {
          return (
            (this.delegate = { iterator: E(_), resultName: T, nextLoc: O }),
            this.method === "next" && (this.arg = void 0),
            f
          );
        },
      }),
      e
    );
  }
  function ys(e, t, n, r, i, s, a) {
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
          ys(s, r, i, a, o, "next", l);
        }
        function o(l) {
          ys(s, r, i, a, o, "throw", l);
        }
        a(void 0);
      });
    };
  }
  function bs(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function Ca(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, xl(r.key), r);
    }
  }
  function Br(e, t, n) {
    return (
      t && Ca(e.prototype, t),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function qt(e, t, n) {
    return (
      (t = xl(t)),
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
  function Si(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      t && Ei(e, t);
  }
  function Ti(e) {
    return (
      (Ti = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (n) {
            return n.__proto__ || Object.getPrototypeOf(n);
          }),
      Ti(e)
    );
  }
  function Ei(e, t) {
    return (
      (Ei = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (r, i) {
            return (r.__proto__ = i), r;
          }),
      Ei(e, t)
    );
  }
  function _l() {
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
  function _s(e, t, n) {
    return (
      _l()
        ? (_s = Reflect.construct.bind())
        : (_s = function (i, s, a) {
            var o = [null];
            o.push.apply(o, s);
            var l = Function.bind.apply(i, o),
              c = new l();
            return a && Ei(c, a.prototype), c;
          }),
      _s.apply(null, arguments)
    );
  }
  function Zf(e) {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  }
  function Pa(e) {
    var t = typeof Map == "function" ? new Map() : void 0;
    return (
      (Pa = function (r) {
        if (r === null || !Zf(r)) return r;
        if (typeof r != "function")
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (typeof t != "undefined") {
          if (t.has(r)) return t.get(r);
          t.set(r, i);
        }
        function i() {
          return _s(r, arguments, Ti(this).constructor);
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
          Ei(i, r)
        );
      }),
      Pa(e)
    );
  }
  function xs(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function Jf(e, t) {
    if (t && (typeof t == "object" || typeof t == "function")) return t;
    if (t !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return xs(e);
  }
  function ed(e) {
    var t = _l();
    return function () {
      var r = Ti(e),
        i;
      if (t) {
        var s = Ti(this).constructor;
        i = Reflect.construct(r, arguments, s);
      } else i = r.apply(this, arguments);
      return Jf(this, i);
    };
  }
  function td(e, t) {
    if (typeof e != "object" || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var r = n.call(e, t);
      if (typeof r != "object") return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e);
  }
  function xl(e) {
    var t = td(e, "string");
    return typeof t == "symbol" ? t : String(t);
  }
  var Sl =
    typeof global != "undefined" &&
    {}.toString.call(global) === "[object global]";
  function Tl(e, t) {
    return e.indexOf(t.toLowerCase()) === 0
      ? e
      : ""
          .concat(t.toLowerCase())
          .concat(e.substr(0, 1).toUpperCase())
          .concat(e.substr(1));
  }
  function nd(e) {
    return !!(
      e &&
      e.nodeType === 1 &&
      "nodeName" in e &&
      e.ownerDocument &&
      e.ownerDocument.defaultView
    );
  }
  function rd(e) {
    return !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e;
  }
  function ar(e) {
    return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(
      e
    );
  }
  function El(e) {
    var t =
      /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
    return t.test(e);
  }
  function id(e) {
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
  function wl() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.id,
      n = e.url,
      r = t || n;
    if (!r)
      throw new Error(
        "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
      );
    if (rd(r)) return "https://vimeo.com/".concat(r);
    if (ar(r)) return r.replace("http:", "https:");
    throw t
      ? new TypeError("“".concat(t, "” is not a valid video id."))
      : new TypeError("“".concat(r, "” is not a vimeo.com url."));
  }
  var Cl = function (t, n, r) {
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
    sd = typeof Array.prototype.indexOf != "undefined",
    ad =
      typeof window != "undefined" && typeof window.postMessage != "undefined";
  if (!Sl && (!sd || !ad))
    throw new Error(
      "Sorry, the Vimeo Player API is not available in this browser."
    );
  var Wr =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {};
  function od(e, t) {
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
      : Wr
  );
  var Bt = od(function (e) {
      /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/ (function (n, r, i) {
        (r[n] = r[n] || i()), e.exports && (e.exports = r[n]);
      })("Promise", Wr, function () {
        var n,
          r,
          i,
          s = Object.prototype.toString,
          a =
            typeof setImmediate != "undefined"
              ? function (b) {
                  return setImmediate(b);
                }
              : setTimeout;
        try {
          Object.defineProperty({}, "x", {}),
            (n = function (b, x, S, w) {
              return Object.defineProperty(b, x, {
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
          var b, x, S;
          function w(C, P) {
            (this.fn = C), (this.self = P), (this.next = void 0);
          }
          return {
            add: function (P, A) {
              (S = new w(P, A)),
                x ? (x.next = S) : (b = S),
                (x = S),
                (S = void 0);
            },
            drain: function () {
              var P = b;
              for (b = x = r = void 0; P; ) P.fn.call(P.self), (P = P.next);
            },
          };
        })();
        function o(v, b) {
          i.add(v, b), r || (r = a(i.drain));
        }
        function l(v) {
          var b,
            x = typeof v;
          return (
            v != null && (x == "object" || x == "function") && (b = v.then),
            typeof b == "function" ? b : !1
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
        function u(v, b, x) {
          var S, w;
          try {
            b === !1
              ? x.reject(v.msg)
              : (b === !0 ? (S = v.msg) : (S = b.call(void 0, v.msg)),
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
          var b,
            x = this;
          if (!x.triggered) {
            (x.triggered = !0), x.def && (x = x.def);
            try {
              (b = l(v))
                ? o(function () {
                    var S = new m(x);
                    try {
                      b.call(
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
          var b = this;
          b.triggered ||
            ((b.triggered = !0),
            b.def && (b = b.def),
            (b.msg = v),
            (b.state = 2),
            b.chain.length > 0 && o(c, b));
        }
        function h(v, b, x, S) {
          for (var w = 0; w < b.length; w++)
            (function (P) {
              v.resolve(b[P]).then(function (E) {
                x(P, E);
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
          var b = new p(this);
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
              b.chain.push(C),
              b.state !== 0 && o(c, b),
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
                f.call(b, S);
              },
              function (S) {
                d.call(b, S);
              }
            );
          } catch (x) {
            d.call(b, x);
          }
        }
        var y = n({}, "constructor", g, !1);
        return (
          (g.prototype = y),
          n(y, "__NPO__", 0, !1),
          n(g, "resolve", function (b) {
            var x = this;
            return b && typeof b == "object" && b.__NPO__ === 1
              ? b
              : new x(function (w, C) {
                  if (typeof w != "function" || typeof C != "function")
                    throw TypeError("Not a function");
                  w(b);
                });
          }),
          n(g, "reject", function (b) {
            return new this(function (S, w) {
              if (typeof S != "function" || typeof w != "function")
                throw TypeError("Not a function");
              w(b);
            });
          }),
          n(g, "all", function (b) {
            var x = this;
            return s.call(b) != "[object Array]"
              ? x.reject(TypeError("Not an array"))
              : b.length === 0
              ? x.resolve([])
              : new x(function (w, C) {
                  if (typeof w != "function" || typeof C != "function")
                    throw TypeError("Not a function");
                  var P = b.length,
                    A = Array(P),
                    E = 0;
                  h(
                    x,
                    b,
                    function (_, T) {
                      (A[_] = T), ++E === P && w(A);
                    },
                    C
                  );
                });
          }),
          n(g, "race", function (b) {
            var x = this;
            return s.call(b) != "[object Array]"
              ? x.reject(TypeError("Not an array"))
              : new x(function (w, C) {
                  if (typeof w != "function" || typeof C != "function")
                    throw TypeError("Not a function");
                  h(
                    x,
                    b,
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
    xn = new WeakMap();
  function wi(e, t, n) {
    var r = xn.get(e.element) || {};
    t in r || (r[t] = []), r[t].push(n), xn.set(e.element, r);
  }
  function Ss(e, t) {
    var n = xn.get(e.element) || {};
    return n[t] || [];
  }
  function Ts(e, t, n) {
    var r = xn.get(e.element) || {};
    if (!r[t]) return !0;
    if (!n) return (r[t] = []), xn.set(e.element, r), !0;
    var i = r[t].indexOf(n);
    return (
      i !== -1 && r[t].splice(i, 1),
      xn.set(e.element, r),
      r[t] && r[t].length === 0
    );
  }
  function ld(e, t) {
    var n = Ss(e, t);
    if (n.length < 1) return !1;
    var r = n.shift();
    return Ts(e, t, r), r;
  }
  function cd(e, t) {
    var n = xn.get(e);
    xn.set(t, n), xn.delete(e);
  }
  function Es(e) {
    if (typeof e == "string")
      try {
        e = JSON.parse(e);
      } catch (t) {
        return console.warn(t), {};
      }
    return e;
  }
  function or(e, t, n) {
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
  function ud(e, t) {
    t = Es(t);
    var n = [],
      r;
    if (t.event) {
      if (t.event === "error") {
        var i = Ss(e, t.data.method);
        i.forEach(function (a) {
          var o = new Error(t.data.message);
          (o.name = t.data.name), a.reject(o), Ts(e, t.data.method, a);
        });
      }
      (n = Ss(e, "event:".concat(t.event))), (r = t.data);
    } else if (t.method) {
      var s = ld(e, t.method);
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
  var fd = [
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
  function Pl(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return fd.reduce(function (n, r) {
      var i = e.getAttribute("data-vimeo-".concat(r));
      return (i || i === "") && (n[r] = i === "" ? 1 : i), n;
    }, t);
  }
  function ka(e, t) {
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
  function kl(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = arguments.length > 2 ? arguments[2] : void 0;
    return new Promise(function (r, i) {
      if (!ar(e))
        throw new TypeError("“".concat(e, "” is not a vimeo.com url."));
      var s = id(e),
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
              ka(c, n), i(new Error("“".concat(e, "” is not embeddable.")));
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
  function dd() {
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
        var i = Pl(r),
          s = wl(i);
        kl(s, i, r)
          .then(function (a) {
            return ka(a, r);
          })
          .catch(n);
      } catch (a) {
        n(a);
      }
    });
  }
  function hd() {
    var e =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoPlayerResizeEmbeds_) {
      window.VimeoPlayerResizeEmbeds_ = !0;
      var t = function (r) {
        if (ar(r.origin) && !(!r.data || r.data.event !== "spacechange")) {
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
  function pd() {
    var e =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoSeoMetadataAppended) {
      window.VimeoSeoMetadataAppended = !0;
      var t = function (r) {
        if (ar(r.origin)) {
          var i = Es(r.data);
          if (!(!i || i.event !== "ready"))
            for (
              var s = e.querySelectorAll("iframe"), a = 0;
              a < s.length;
              a++
            ) {
              var o = s[a],
                l = o.contentWindow === r.source;
              if (El(o.src) && l) {
                var c = new ws(o);
                c.callMethod("appendVideoMetadata", window.location.href);
              }
            }
        }
      };
      window.addEventListener("message", t);
    }
  }
  function md() {
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
          if (ar(i.origin)) {
            var s = Es(i.data);
            if (!(!s || s.event !== "ready"))
              for (
                var a = e.querySelectorAll("iframe"),
                  o = function () {
                    var u = a[l],
                      f = u.contentWindow === i.source;
                    if (El(u.src) && f) {
                      var d = new ws(u);
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
  function gd() {
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
  var vd = {
      role: "viewer",
      autoPlayMuted: !0,
      allowedDrift: 0.3,
      maxAllowedDrift: 1,
      minCheckInterval: 0.1,
      maxRateAdjustment: 0.2,
      maxTimeToCatchUp: 1,
    },
    yd = (function (e) {
      Si(n, e);
      var t = ed(n);
      function n(r, i) {
        var s,
          a =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          o = arguments.length > 3 ? arguments[3] : void 0;
        return (
          bs(this, n),
          (s = t.call(this)),
          qt(xs(s), "logger", void 0),
          qt(xs(s), "speedAdjustment", 0),
          qt(
            xs(s),
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
          s.init(i, r, ze(ze({}, vd), a)),
          s
        );
      }
      return (
        Br(n, [
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
                            (u = Cl(a, "change", function () {
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
                            (d = Cl(
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
                                  var m = sn(
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
                                                o.play().catch(function (b) {
                                                  return console.error(
                                                    "Couldn't play the video from TimingSrcConnector. Error:",
                                                    b
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
                  var g = sn(
                    ie().mark(function y() {
                      var v, b, x, S, w;
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
                                (b = Math.abs(v)),
                                o.log("Drift: ".concat(v)),
                                !(b > c))
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
                              if (!(b > l)) {
                                P.next = 29;
                                break;
                              }
                              return (
                                (x = b / d),
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
    })(Pa(EventTarget)),
    Vr = new WeakMap(),
    Ma = new WeakMap(),
    bt = {},
    ws = (function () {
      function e(t) {
        var n = this,
          r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (
          (bs(this, e),
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
          !nd(t))
        )
          throw new TypeError(
            "You must pass either a valid element or a valid id."
          );
        if (t.nodeName !== "IFRAME") {
          var i = t.querySelector("iframe");
          i && (t = i);
        }
        if (t.nodeName === "IFRAME" && !ar(t.getAttribute("src") || ""))
          throw new Error("The player element passed isn’t a Vimeo embed.");
        if (Vr.has(t)) return Vr.get(t);
        (this._window = t.ownerDocument.defaultView),
          (this.element = t),
          (this.origin = "*");
        var s = new Bt(function (o, l) {
          if (
            ((n._onMessage = function (f) {
              if (!(!ar(f.origin) || n.element.contentWindow !== f.source)) {
                n.origin === "*" && (n.origin = f.origin);
                var d = Es(f.data),
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
                ud(n, d);
              }
            }),
            n._window.addEventListener("message", n._onMessage),
            n.element.nodeName !== "IFRAME")
          ) {
            var c = Pl(t, r),
              u = wl(c);
            kl(u, c, t)
              .then(function (f) {
                var d = ka(f, t);
                return (
                  (n.element = d),
                  (n._originalElement = t),
                  cd(t, d),
                  Vr.set(n.element, n),
                  f
                );
              })
              .catch(l);
          }
        });
        if (
          (Ma.set(this, s),
          Vr.set(this.element, this),
          this.element.nodeName === "IFRAME" && or(this, "ping"),
          bt.isEnabled)
        ) {
          var a = function () {
            return bt.exit();
          };
          (this.fullscreenchangeHandler = function () {
            bt.isFullscreen
              ? wi(n, "event:exitFullscreen", a)
              : Ts(n, "event:exitFullscreen", a),
              n.ready().then(function () {
                or(n, "fullscreenchange", bt.isFullscreen);
              });
          }),
            bt.on("fullscreenchange", this.fullscreenchangeHandler);
        }
        return this;
      }
      return (
        Br(e, [
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
                    wi(r, n, { resolve: s, reject: a }), or(r, n, i);
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
                  (n = Tl(n, "get")),
                  r
                    .ready()
                    .then(function () {
                      wi(r, n, { resolve: i, reject: s }), or(r, n);
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
                if (((n = Tl(n, "set")), r == null))
                  throw new TypeError("There must be a value to set.");
                return i
                  .ready()
                  .then(function () {
                    wi(i, n, { resolve: s, reject: a }), or(i, n, r);
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
              var i = Ss(this, "event:".concat(n));
              i.length === 0 &&
                this.callMethod("addEventListener", n).catch(function () {}),
                wi(this, "event:".concat(n), r);
            },
          },
          {
            key: "off",
            value: function (n, r) {
              if (!n) throw new TypeError("You must pass an event name.");
              if (r && typeof r != "function")
                throw new TypeError("The callback must be a function.");
              var i = Ts(this, "event:".concat(n), r);
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
                Ma.get(this) ||
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
              return bt.isEnabled
                ? bt.request(this.element)
                : this.callMethod("requestFullscreen");
            },
          },
          {
            key: "exitFullscreen",
            value: function () {
              return bt.isEnabled
                ? bt.exit()
                : this.callMethod("exitFullscreen");
            },
          },
          {
            key: "getFullscreen",
            value: function () {
              return bt.isEnabled
                ? Bt.resolve(bt.isFullscreen)
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
                  (Ma.delete(n),
                  Vr.delete(n.element),
                  n._originalElement &&
                    (Vr.delete(n._originalElement),
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
                  bt.isEnabled &&
                    bt.off("fullscreenchange", n.fullscreenchangeHandler),
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
                              (o = new yd(this, i, s)),
                              or(this, "notifyTimingObjectConnect"),
                              o.addEventListener("disconnect", function () {
                                return or(a, "notifyTimingObjectDisconnect");
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
  Sl || ((bt = gd()), dd(), hd(), pd(), md());
  class bd {
    constructor() {
      typeof ws != "undefined"
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
              let _ = Math.floor(E / 60);
              return (E -= _ * 60), _ + ":" + (E < 10 ? "0" + E : E);
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
            c = new ws(s);
          if (
            (n.getAttribute("data-vimeo-update-size") === "true" &&
              c.getVideoWidth().then(function (E) {
                c.getVideoHeight().then(function ($) {
                  const _ = n.querySelector(".vimeo-player__before");
                  _ && (_.style.paddingTop = ($ / E) * 100 + "%");
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
          const b = n.querySelector("[data-vimeo-duration]");
          c.getDuration().then(function (E) {
            b && (b.textContent = v(E)),
              n
                .querySelectorAll('[data-vimeo-control="timeline"], progress')
                .forEach((_) => {
                  _.setAttribute("max", E);
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
                b && (b.textContent = v(Math.trunc(E.seconds)));
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
  const _d = () => {
    new bd();
  };
  function Ml(e) {
    return (
      e !== null &&
      typeof e == "object" &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function $a(e = {}, t = {}) {
    Object.keys(t).forEach((n) => {
      typeof e[n] == "undefined"
        ? (e[n] = t[n])
        : Ml(t[n]) &&
          Ml(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          $a(e[n], t[n]);
    });
  }
  const $l = {
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
    return $a(e, $l), e;
  }
  const xd = {
    document: $l,
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
    return $a(e, xd), e;
  }
  function Sd(e) {
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
      typeof t == "number" ? super(t) : (super(...(t || [])), Sd(this));
    }
  }
  function Ci(e = []) {
    const t = [];
    return (
      e.forEach((n) => {
        Array.isArray(n) ? t.push(...Ci(n)) : t.push(n);
      }),
      t
    );
  }
  function Ol(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function Td(e) {
    const t = [];
    for (let n = 0; n < e.length; n += 1)
      t.indexOf(e[n]) === -1 && t.push(e[n]);
    return t;
  }
  function Ed(e, t) {
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
      } else i = Ed(e.trim(), t || r);
    } else if (e.nodeType || e === n || e === r) i.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof zn) return e;
      i = e;
    }
    return new zn(Td(i));
  }
  N.fn = zn.prototype;
  function wd(...e) {
    const t = Ci(e.map((n) => n.split(" ")));
    return (
      this.forEach((n) => {
        n.classList.add(...t);
      }),
      this
    );
  }
  function Cd(...e) {
    const t = Ci(e.map((n) => n.split(" ")));
    return (
      this.forEach((n) => {
        n.classList.remove(...t);
      }),
      this
    );
  }
  function Pd(...e) {
    const t = Ci(e.map((n) => n.split(" ")));
    this.forEach((n) => {
      t.forEach((r) => {
        n.classList.toggle(r);
      });
    });
  }
  function kd(...e) {
    const t = Ci(e.map((n) => n.split(" ")));
    return (
      Ol(this, (n) => t.filter((r) => n.classList.contains(r)).length > 0)
        .length > 0
    );
  }
  function Md(e, t) {
    if (arguments.length === 1 && typeof e == "string")
      return this[0] ? this[0].getAttribute(e) : void 0;
    for (let n = 0; n < this.length; n += 1)
      if (arguments.length === 2) this[n].setAttribute(e, t);
      else
        for (const r in e) (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
    return this;
  }
  function $d(e) {
    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
    return this;
  }
  function Od(e) {
    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
    return this;
  }
  function Ad(e) {
    for (let t = 0; t < this.length; t += 1)
      this[t].style.transitionDuration = typeof e != "string" ? `${e}ms` : e;
    return this;
  }
  function Ld(...e) {
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
  function Id(...e) {
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
  function Dd(...e) {
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
  function zd(e) {
    const t = this;
    function n(r) {
      r.target === this && (e.call(this, r), t.off("transitionend", n));
    }
    return e && t.on("transitionend", n), this;
  }
  function Rd(e) {
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
  function Nd(e) {
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
  function Fd() {
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
  function Hd() {
    const e = ce();
    return this[0] ? e.getComputedStyle(this[0], null) : {};
  }
  function qd(e, t) {
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
  function Bd(e) {
    return e
      ? (this.forEach((t, n) => {
          e.apply(t, [t, n]);
        }),
        this)
      : this;
  }
  function Wd(e) {
    const t = Ol(this, e);
    return N(t);
  }
  function Vd(e) {
    if (typeof e == "undefined") return this[0] ? this[0].innerHTML : null;
    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
    return this;
  }
  function Yd(e) {
    if (typeof e == "undefined")
      return this[0] ? this[0].textContent.trim() : null;
    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
    return this;
  }
  function Xd(e) {
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
  function jd() {
    let e = this[0],
      t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function Gd(e) {
    if (typeof e == "undefined") return this;
    const t = this.length;
    if (e > t - 1) return N([]);
    if (e < 0) {
      const n = t + e;
      return n < 0 ? N([]) : N([this[n]]);
    }
    return N([this[e]]);
  }
  function Ud(...e) {
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
  function Kd(e) {
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
  function Qd(e) {
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
  function Zd(e) {
    const t = [];
    let n = this[0];
    if (!n) return N([]);
    for (; n.nextElementSibling; ) {
      const r = n.nextElementSibling;
      e ? N(r).is(e) && t.push(r) : t.push(r), (n = r);
    }
    return N(t);
  }
  function Jd(e) {
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
  function eh(e) {
    const t = [];
    let n = this[0];
    if (!n) return N([]);
    for (; n.previousElementSibling; ) {
      const r = n.previousElementSibling;
      e ? N(r).is(e) && t.push(r) : t.push(r), (n = r);
    }
    return N(t);
  }
  function th(e) {
    const t = [];
    for (let n = 0; n < this.length; n += 1)
      this[n].parentNode !== null &&
        (e
          ? N(this[n].parentNode).is(e) && t.push(this[n].parentNode)
          : t.push(this[n].parentNode));
    return N(t);
  }
  function nh(e) {
    const t = [];
    for (let n = 0; n < this.length; n += 1) {
      let r = this[n].parentNode;
      for (; r; ) e ? N(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
    }
    return N(t);
  }
  function rh(e) {
    let t = this;
    return typeof e == "undefined"
      ? N([])
      : (t.is(e) || (t = t.parents(e).eq(0)), t);
  }
  function ih(e) {
    const t = [];
    for (let n = 0; n < this.length; n += 1) {
      const r = this[n].querySelectorAll(e);
      for (let i = 0; i < r.length; i += 1) t.push(r[i]);
    }
    return N(t);
  }
  function sh(e) {
    const t = [];
    for (let n = 0; n < this.length; n += 1) {
      const r = this[n].children;
      for (let i = 0; i < r.length; i += 1)
        (!e || N(r[i]).is(e)) && t.push(r[i]);
    }
    return N(t);
  }
  function ah() {
    for (let e = 0; e < this.length; e += 1)
      this[e].parentNode && this[e].parentNode.removeChild(this[e]);
    return this;
  }
  const Al = {
    addClass: wd,
    removeClass: Cd,
    hasClass: kd,
    toggleClass: Pd,
    attr: Md,
    removeAttr: $d,
    transform: Od,
    transition: Ad,
    on: Ld,
    off: Id,
    trigger: Dd,
    transitionEnd: zd,
    outerWidth: Rd,
    outerHeight: Nd,
    styles: Hd,
    offset: Fd,
    css: qd,
    each: Bd,
    html: Vd,
    text: Yd,
    is: Xd,
    index: jd,
    eq: Gd,
    append: Ud,
    prepend: Kd,
    next: Qd,
    nextAll: Zd,
    prev: Jd,
    prevAll: eh,
    parent: th,
    parents: nh,
    closest: rh,
    find: ih,
    children: sh,
    filter: Wd,
    remove: ah,
  };
  Object.keys(Al).forEach((e) => {
    Object.defineProperty(N.fn, e, { value: Al[e], writable: !0 });
  });
  function oh(e) {
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
  function lh(e) {
    const t = ce();
    let n;
    return (
      t.getComputedStyle && (n = t.getComputedStyle(e, null)),
      !n && e.currentStyle && (n = e.currentStyle),
      n || (n = e.style),
      n
    );
  }
  function Oa(e, t = "x") {
    const n = ce();
    let r, i, s;
    const a = lh(e);
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
  function Pi(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      e.constructor &&
      Object.prototype.toString.call(e).slice(8, -1) === "Object"
    );
  }
  function ch(e) {
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
      if (i != null && !ch(i)) {
        const s = Object.keys(Object(i)).filter((a) => n.indexOf(a) < 0);
        for (let a = 0, o = s.length; a < o; a += 1) {
          const l = s[a],
            c = Object.getOwnPropertyDescriptor(i, l);
          c !== void 0 &&
            c.enumerable &&
            (Pi(t[l]) && Pi(i[l])
              ? i[l].__swiper__
                ? (t[l] = i[l])
                : kt(t[l], i[l])
              : !Pi(t[l]) && Pi(i[l])
              ? ((t[l] = {}), i[l].__swiper__ ? (t[l] = i[l]) : kt(t[l], i[l]))
              : (t[l] = i[l]));
        }
      }
    }
    return t;
  }
  function ki(e, t, n) {
    e.style.setProperty(t, n);
  }
  function Ll({ swiper: e, targetPosition: t, side: n }) {
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
  let Aa;
  function uh() {
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
  function Il() {
    return Aa || (Aa = uh()), Aa;
  }
  let La;
  function fh({ userAgent: e } = {}) {
    const t = Il(),
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
  function dh(e = {}) {
    return La || (La = fh(e)), La;
  }
  let Ia;
  function hh() {
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
  function ph() {
    return Ia || (Ia = hh()), Ia;
  }
  function mh({ swiper: e, on: t, emit: n }) {
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
  function gh({ swiper: e, extendParams: t, on: n, emit: r }) {
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
  const vh = {
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
  function yh() {
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
  function bh() {
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
    let b = r.spaceBetween,
      x = -p,
      S = 0,
      w = 0;
    if (typeof s == "undefined") return;
    typeof b == "string" &&
      b.indexOf("%") >= 0 &&
      (b = (parseFloat(b.replace("%", "")) / 100) * s),
      (e.virtualSize = -b),
      a
        ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" })
        : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
      r.centeredSlides &&
        r.cssMode &&
        (ki(e.wrapperEl, "--swiper-centered-offset-before", ""),
        ki(e.wrapperEl, "--swiper-centered-offset-after", ""));
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
          const _ = getComputedStyle($[0]),
            T = $[0].style.transform,
            O = $[0].style.webkitTransform;
          if (
            (T && ($[0].style.transform = "none"),
            O && ($[0].style.webkitTransform = "none"),
            r.roundLengths)
          )
            P = e.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
          else {
            const I = n(_, "width"),
              k = n(_, "padding-left"),
              L = n(_, "padding-right"),
              D = n(_, "margin-left"),
              R = n(_, "margin-right"),
              M = _.getPropertyValue("box-sizing");
            if (M && M === "border-box") P = I + D + R;
            else {
              const { clientWidth: W, offsetWidth: K } = $[0];
              P = I + k + L + D + R + (K - W);
            }
          }
          T && ($[0].style.transform = T),
            O && ($[0].style.webkitTransform = O),
            r.roundLengths && (P = Math.floor(P));
        } else
          (P = (s - (r.slidesPerView - 1) * b) / r.slidesPerView),
            r.roundLengths && (P = Math.floor(P)),
            u[E] && (u[E].style[t("width")] = `${P}px`);
        u[E] && (u[E].swiperSlideSize = P),
          m.push(P),
          r.centeredSlides
            ? ((x = x + P / 2 + S / 2 + b),
              S === 0 && E !== 0 && (x = x - s / 2 - b),
              E === 0 && (x = x - s / 2 - b),
              Math.abs(x) < 1 / 1e3 && (x = 0),
              r.roundLengths && (x = Math.floor(x)),
              w % r.slidesPerGroup === 0 && d.push(x),
              h.push(x))
            : (r.roundLengths && (x = Math.floor(x)),
              (w - Math.min(e.params.slidesPerGroupSkip, w)) %
                e.params.slidesPerGroup ===
                0 && d.push(x),
              h.push(x),
              (x = x + P + b)),
          (e.virtualSize += P + b),
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
        let _ = d[$];
        r.roundLengths && (_ = Math.floor(_)),
          d[$] <= e.virtualSize - s && E.push(_);
      }
      (d = E),
        Math.floor(e.virtualSize - s) - Math.floor(d[d.length - 1]) > 1 &&
          d.push(e.virtualSize - s);
    }
    if ((d.length === 0 && (d = [0]), r.spaceBetween !== 0)) {
      const E = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
      u.filter(($, _) => (r.cssMode ? _ !== u.length - 1 : !0)).css({
        [E]: `${b}px`,
      });
    }
    if (r.centeredSlides && r.centeredSlidesBounds) {
      let E = 0;
      m.forEach((_) => {
        E += _ + (r.spaceBetween ? r.spaceBetween : 0);
      }),
        (E -= r.spaceBetween);
      const $ = E - s;
      d = d.map((_) => (_ < 0 ? -p : _ > $ ? $ + g : _));
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
        d.forEach((_, T) => {
          d[T] = _ - $;
        }),
          h.forEach((_, T) => {
            h[T] = _ + $;
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
      ki(e.wrapperEl, "--swiper-centered-offset-before", `${-d[0]}px`),
        ki(
          e.wrapperEl,
          "--swiper-centered-offset-after",
          `${e.size / 2 - m[m.length - 1] / 2}px`
        );
      const E = -e.snapGrid[0],
        $ = -e.slidesGrid[0];
      (e.snapGrid = e.snapGrid.map((_) => _ + E)),
        (e.slidesGrid = e.slidesGrid.map((_) => _ + $));
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
  function _h(e) {
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
  function xh() {
    const e = this,
      t = e.slides;
    for (let n = 0; n < t.length; n += 1)
      t[n].swiperSlideOffset = e.isHorizontal()
        ? t[n].offsetLeft
        : t[n].offsetTop;
  }
  function Sh(e = (this && this.translate) || 0) {
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
  function Th(e) {
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
  function Eh() {
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
  function wh(e) {
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
  function Ch(e) {
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
  const Ph = {
    updateSize: yh,
    updateSlides: bh,
    updateAutoHeight: _h,
    updateSlidesOffset: xh,
    updateSlidesProgress: Sh,
    updateProgress: Th,
    updateSlidesClasses: Eh,
    updateActiveIndex: wh,
    updateClickedSlide: Ch,
  };
  function kh(e = this.isHorizontal() ? "x" : "y") {
    const t = this,
      { params: n, rtlTranslate: r, translate: i, $wrapperEl: s } = t;
    if (n.virtualTranslate) return r ? -i : i;
    if (n.cssMode) return i;
    let a = Oa(s[0], e);
    return r && (a = -a), a || 0;
  }
  function Mh(e, t) {
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
  function $h() {
    return -this.snapGrid[0];
  }
  function Oh() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function Ah(e = 0, t = this.params.speed, n = !0, r = !0, i) {
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
            Ll({ swiper: s, targetPosition: -u, side: f ? "left" : "top" }), !0
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
  const Lh = {
    getTranslate: kh,
    setTranslate: Mh,
    minTranslate: $h,
    maxTranslate: Oh,
    translateTo: Ah,
  };
  function Ih(e, t) {
    const n = this;
    n.params.cssMode || n.$wrapperEl.transition(e),
      n.emit("setTransition", e, t);
  }
  function Dl({ swiper: e, runCallbacks: t, direction: n, step: r }) {
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
  function Dh(e = !0, t) {
    const n = this,
      { params: r } = n;
    r.cssMode ||
      (r.autoHeight && n.updateAutoHeight(),
      Dl({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
  }
  function zh(e = !0, t) {
    const n = this,
      { params: r } = n;
    (n.animating = !1),
      !r.cssMode &&
        (n.setTransition(0),
        Dl({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
  }
  const Rh = { setTransition: Ih, transitionStart: Dh, transitionEnd: zh };
  function Nh(e = 0, t = this.params.speed, n = !0, r, i) {
    if (typeof e != "number" && typeof e != "string")
      throw new Error(
        `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
      );
    if (typeof e == "string") {
      const b = parseInt(e, 10);
      if (!isFinite(b))
        throw new Error(
          `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
        );
      e = b;
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
      for (let b = 0; b < c.length; b += 1) {
        const x = -Math.floor(y * 100),
          S = Math.floor(c[b] * 100),
          w = Math.floor(c[b + 1] * 100);
        typeof c[b + 1] != "undefined"
          ? x >= S && x < w - (w - S) / 2
            ? (a = b)
            : x >= S && x < w && (a = b + 1)
          : x >= S && (a = b);
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
      const b = s.isHorizontal(),
        x = d ? y : -y;
      if (t === 0) {
        const S = s.virtual && s.params.virtual.enabled;
        S &&
          ((s.wrapperEl.style.scrollSnapType = "none"),
          (s._immediateVirtual = !0)),
          (h[b ? "scrollLeft" : "scrollTop"] = x),
          S &&
            requestAnimationFrame(() => {
              (s.wrapperEl.style.scrollSnapType = ""),
                (s._swiperImmediateVirtual = !1);
            });
      } else {
        if (!s.support.smoothScroll)
          return (
            Ll({ swiper: s, targetPosition: x, side: b ? "left" : "top" }), !0
          );
        h.scrollTo({ [b ? "left" : "top"]: x, behavior: "smooth" });
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
  function Fh(e = 0, t = this.params.speed, n = !0, r) {
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
  function Hh(e = this.params.speed, t = !0, n) {
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
  function qh(e = this.params.speed, t = !0, n) {
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
  function Bh(e = this.params.speed, t = !0, n) {
    const r = this;
    return r.slideTo(r.activeIndex, e, t, n);
  }
  function Wh(e = this.params.speed, t = !0, n, r = 0.5) {
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
  function Vh() {
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
  const Yh = {
    slideTo: Nh,
    slideToLoop: Fh,
    slideNext: Hh,
    slidePrev: qh,
    slideReset: Bh,
    slideToClosest: Wh,
    slideToClickedSlide: Vh,
  };
  function Xh() {
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
  function jh() {
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
  function Gh() {
    const e = this,
      { $wrapperEl: t, params: n, slides: r } = e;
    t
      .children(
        `.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`
      )
      .remove(),
      r.removeAttr("data-swiper-slide-index");
  }
  const Uh = { loopCreate: Xh, loopFix: jh, loopDestroy: Gh };
  function Kh(e) {
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
  function Qh() {
    const e = this;
    e.support.touch ||
      (e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode ||
      (e[
        e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = "");
  }
  const Zh = { setGrabCursor: Kh, unsetGrabCursor: Qh };
  function Jh(e, t = this) {
    function n(r) {
      if (!r || r === Me() || r === ce()) return null;
      r.assignedSlot && (r = r.assignedSlot);
      const i = r.closest(e);
      return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
    }
    return n(t);
  }
  function ep(e) {
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
    if (s.noSwiping && (h ? Jh(d, c[0]) : c.closest(d)[0])) {
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
      const b = v && t.allowTouchMove && s.touchStartPreventDefault;
      (s.touchStartForcePreventDefault || b) &&
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
  function tp(e) {
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
      h = s.currentY - s.startY;
    if (
      n.params.threshold &&
      Math.sqrt(Ct(d, 2) + Ct(h, 2)) < n.params.threshold
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
              Ct(-n.minTranslate() + r.startTranslate + m, g)))
        : m < 0 &&
          r.currentTranslate < n.maxTranslate() &&
          ((p = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              Ct(n.maxTranslate() - r.startTranslate - m, g))),
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
  function np(e) {
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
      h = t.slidesSizesGrid[0];
    for (
      let v = 0;
      v < a.length;
      v += v < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
    ) {
      const b = v < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      typeof a[v + b] != "undefined"
        ? f >= a[v] && f < a[v + b] && ((d = v), (h = a[v + b] - a[v]))
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
  function zl() {
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
  function rp(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function ip() {
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
  let Rl = !1;
  function sp() {}
  const Nl = (e, t) => {
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
            zl,
            !0
          )
        : e[f]("observerUpdate", zl, !0);
  };
  function ap() {
    const e = this,
      t = Me(),
      { params: n, support: r } = e;
    (e.onTouchStart = ep.bind(e)),
      (e.onTouchMove = tp.bind(e)),
      (e.onTouchEnd = np.bind(e)),
      n.cssMode && (e.onScroll = ip.bind(e)),
      (e.onClick = rp.bind(e)),
      r.touch && !Rl && (t.addEventListener("touchstart", sp), (Rl = !0)),
      Nl(e, "on");
  }
  function op() {
    Nl(this, "off");
  }
  const lp = { attachEvents: ap, detachEvents: op },
    Fl = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  function cp() {
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
      u = Fl(e, i),
      f = Fl(e, c),
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
    h && n && e.changeDirection(), kt(e.params, c);
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
  function up(e, t = "window", n) {
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
  const fp = { setBreakpoint: cp, getBreakpoint: up };
  function dp(e, t) {
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
  function hp() {
    const e = this,
      { classNames: t, params: n, rtl: r, $el: i, device: s, support: a } = e,
      o = dp(
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
  function pp() {
    const e = this,
      { $el: t, classNames: n } = e;
    t.removeClass(n.join(" ")), e.emitContainerClasses();
  }
  const mp = { addClasses: hp, removeClasses: pp };
  function gp(e, t, n, r, i, s) {
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
  function vp() {
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
  const yp = { loadImage: gp, preloadImages: vp };
  function bp() {
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
  const _p = { checkOverflow: bp },
    Hl = {
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
  function xp(e, t) {
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
  const Da = {
      eventsEmitter: vh,
      update: Ph,
      translate: Lh,
      transition: Rh,
      slide: Yh,
      loop: Uh,
      grabCursor: Zh,
      events: lp,
      breakpoints: fp,
      checkOverflow: _p,
      classes: mp,
      images: yp,
    },
    za = {};
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
        (r = kt({}, r)),
        n && !r.el && (r.el = n),
        r.el && N(r.el).length > 1)
      ) {
        const o = [];
        return (
          N(r.el).each((l) => {
            const c = kt({}, r, { el: l });
            o.push(new ut(c));
          }),
          o
        );
      }
      const i = this;
      (i.__swiper__ = !0),
        (i.support = Il()),
        (i.device = dh({ userAgent: r.userAgent })),
        (i.browser = ph()),
        (i.eventsListeners = {}),
        (i.eventsAnyListeners = []),
        (i.modules = [...i.__modules__]),
        r.modules && Array.isArray(r.modules) && i.modules.push(...r.modules);
      const s = {};
      i.modules.forEach((o) => {
        o({
          swiper: i,
          extendParams: xp(r, s),
          on: i.on.bind(i),
          once: i.once.bind(i),
          off: i.off.bind(i),
          emit: i.emit.bind(i),
        });
      });
      const a = kt({}, Hl, s);
      return (
        (i.params = kt({}, a, za, r)),
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
          t !== !1 && ((r.$el[0].swiper = null), oh(r)),
          (r.destroyed = !0)),
        null
      );
    }
    static extendDefaults(t) {
      kt(za, t);
    }
    static get extendedDefaults() {
      return za;
    }
    static get defaults() {
      return Hl;
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
  Object.keys(Da).forEach((e) => {
    Object.keys(Da[e]).forEach((t) => {
      ut.prototype[t] = Da[e][t];
    });
  }),
    ut.use([mh, gh]);
  function Sp({ swiper: e, extendParams: t, on: n, emit: r }) {
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
        { from: y, to: v, slides: b, slidesGrid: x, offset: S } = e.virtual;
      e.params.cssMode || e.updateActiveIndex();
      const w = e.activeIndex || 0;
      let C;
      e.rtlTranslate ? (C = "right") : (C = e.isHorizontal() ? "left" : "top");
      let P, A;
      m
        ? ((P = Math.floor(d / 2) + h + g), (A = Math.floor(d / 2) + h + p))
        : ((P = d + (h - 1) + g), (A = h + p));
      const E = Math.max((w || 0) - A, 0),
        $ = Math.min((w || 0) + P, b.length - 1),
        _ = (e.slidesGrid[E] || 0) - (e.slidesGrid[0] || 0);
      Object.assign(e.virtual, {
        from: E,
        to: $,
        offset: _,
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
        e.slidesGrid !== x && _ !== S && e.slides.css(C, `${_}px`),
          e.updateProgress(),
          r("virtualUpdate");
        return;
      }
      if (e.params.virtual.renderExternal) {
        e.params.virtual.renderExternal.call(e, {
          offset: _,
          from: E,
          to: $,
          slides: (function () {
            const L = [];
            for (let D = E; D <= $; D += 1) L.push(b[D]);
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
      for (let k = 0; k < b.length; k += 1)
        k >= E &&
          k <= $ &&
          (typeof v == "undefined" || f
            ? I.push(k)
            : (k > v && I.push(k), k < y && O.push(k)));
      I.forEach((k) => {
        e.$wrapperEl.append(s(b[k], k));
      }),
        O.sort((k, L) => L - k).forEach((k) => {
          e.$wrapperEl.prepend(s(b[k], k));
        }),
        e.$wrapperEl.children(".swiper-slide").css(C, `${_}px`),
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
            b = v.attr("data-swiper-slide-index");
          b && v.attr("data-swiper-slide-index", parseInt(b, 10) + m),
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
          ki(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
      }),
      Object.assign(e.virtual, {
        appendSlide: o,
        prependSlide: l,
        removeSlide: c,
        removeAllSlides: u,
        update: a,
      });
  }
  function Tp({ swiper: e, extendParams: t, on: n, emit: r }) {
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
        b = d === 40;
      if (
        (!e.allowSlideNext &&
          ((e.isHorizontal() && y) || (e.isVertical() && b) || p)) ||
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
        if (e.params.keyboard.onlyInViewport && (m || p || g || y || v || b)) {
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
          for (let _ = 0; _ < $.length; _ += 1) {
            const T = $[_];
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
          : ((m || p || v || b) &&
              (f.preventDefault ? f.preventDefault() : (f.returnValue = !1)),
            (p || b) && e.slideNext(),
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
  function Ep({ swiper: e, extendParams: t, on: n, emit: r }) {
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
    function h(v) {
      const b = e.params.mousewheel;
      if (v.direction < 0) {
        if (e.isEnd && !e.params.loop && b.releaseOnEdges) return !0;
      } else if (e.isBeginning && !e.params.loop && b.releaseOnEdges) return !0;
      return !1;
    }
    function m(v) {
      let b = v,
        x = !0;
      if (!e.enabled) return;
      const S = e.params.mousewheel;
      e.params.cssMode && b.preventDefault();
      let w = e.$el;
      if (
        (e.params.mousewheel.eventsTarget !== "container" &&
          (w = N(e.params.mousewheel.eventsTarget)),
        !e.mouseEntered && !w[0].contains(b.target) && !S.releaseOnEdges)
      )
        return !0;
      b.originalEvent && (b = b.originalEvent);
      let C = 0;
      const P = e.rtlTranslate ? -1 : 1,
        A = c(b);
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
        x && e.params.nested && b.stopPropagation(),
        !e.params.freeMode || !e.params.freeMode.enabled)
      ) {
        const $ = {
          time: Pt(),
          delta: Math.abs(C),
          direction: Math.sign(C),
          raw: v,
        };
        l.length >= 2 && l.shift();
        const _ = l.length ? l[l.length - 1] : void 0;
        if (
          (l.push($),
          _
            ? ($.direction !== _.direction ||
                $.delta > _.delta ||
                $.time > _.time + 150) &&
              d($)
            : d($),
          h($))
        )
          return !0;
      } else {
        const $ = { time: Pt(), delta: Math.abs(C), direction: Math.sign(C) },
          _ =
            o &&
            $.time < o.time + 500 &&
            $.delta <= o.delta &&
            $.direction === o.direction;
        if (!_) {
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
            (_ || r("scroll", b),
            e.params.autoplay &&
              e.params.autoplayDisableOnInteraction &&
              e.autoplay.stop(),
            T === e.minTranslate() || T === e.maxTranslate())
          )
            return !0;
        }
      }
      return b.preventDefault ? b.preventDefault() : (b.returnValue = !1), !1;
    }
    function p(v) {
      let b = e.$el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (b = N(e.params.mousewheel.eventsTarget)),
        b[v]("mouseenter", u),
        b[v]("mouseleave", f),
        b[v]("wheel", m);
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
  function Ra(e, t, n, r) {
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
  function wp({ swiper: e, extendParams: t, on: n, emit: r }) {
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
        ((e.params.navigation = Ra(
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
  function Sn(e = "") {
    return `.${e
      .trim()
      .replace(/([\.:!\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }
  function Cp({ swiper: e, extendParams: t, on: n, emit: r }) {
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
      let b;
      const x = e.params.loop
        ? Math.ceil((y - e.loopedSlides * 2) / e.params.slidesPerGroup)
        : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((b = Math.ceil(
              (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
            )),
            b > y - 1 - e.loopedSlides * 2 && (b -= y - e.loopedSlides * 2),
            b > x - 1 && (b -= x),
            b < 0 && e.params.paginationType !== "bullets" && (b = x + b))
          : typeof e.snapIndex != "undefined"
          ? (b = e.snapIndex)
          : (b = e.activeIndex || 0),
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
              ((a += b - (e.previousIndex - e.loopedSlides || 0)),
              a > g.dynamicMainBullets - 1
                ? (a = g.dynamicMainBullets - 1)
                : a < 0 && (a = 0)),
            (w = Math.max(b - a, 0)),
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
            $ === b && E.addClass(g.bulletActiveClass),
              g.dynamicBullets &&
                ($ >= w && $ <= C && E.addClass(`${g.bulletActiveClass}-main`),
                $ === w && l(E, "prev"),
                $ === C && l(E, "next"));
          });
        else {
          const A = S.eq(b),
            E = A.index();
          if ((A.addClass(g.bulletActiveClass), g.dynamicBullets)) {
            const $ = S.eq(w),
              _ = S.eq(C);
            for (let T = w; T <= C; T += 1)
              S.eq(T).addClass(`${g.bulletActiveClass}-main`);
            if (e.params.loop)
              if (E >= S.length) {
                for (let T = g.dynamicMainBullets; T >= 0; T -= 1)
                  S.eq(S.length - T).addClass(`${g.bulletActiveClass}-main`);
                S.eq(S.length - g.dynamicMainBullets - 1).addClass(
                  `${g.bulletActiveClass}-prev`
                );
              } else l($, "prev"), l(_, "next");
            else l($, "prev"), l(_, "next");
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
          (v.find(Sn(g.currentClass)).text(g.formatFractionCurrent(b + 1)),
          v.find(Sn(g.totalClass)).text(g.formatFractionTotal(x))),
        g.type === "progressbar")
      ) {
        let S;
        g.progressbarOpposite
          ? (S = e.isHorizontal() ? "vertical" : "horizontal")
          : (S = e.isHorizontal() ? "horizontal" : "vertical");
        const w = (b + 1) / x;
        let C = 1,
          P = 1;
        S === "horizontal" ? (C = w) : (P = w),
          v
            .find(Sn(g.progressbarFillClass))
            .transform(`translate3d(0,0,0) scaleX(${C}) scaleY(${P})`)
            .transition(e.params.speed);
      }
      g.type === "custom" && g.renderCustom
        ? (v.html(g.renderCustom(e, b + 1, x)), r("paginationRender", v[0]))
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
        let b = e.params.loop
          ? Math.ceil((g - e.loopedSlides * 2) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode &&
          e.params.freeMode.enabled &&
          !e.params.loop &&
          b > g &&
          (b = g);
        for (let x = 0; x < b; x += 1)
          p.renderBullet
            ? (v += p.renderBullet.call(e, x, p.bulletClass))
            : (v += `<${p.bulletElement} class="${p.bulletClass}"></${p.bulletElement}>`);
        y.html(v), (e.pagination.bullets = y.find(Sn(p.bulletClass)));
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
      e.params.pagination = Ra(
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
          g.on("click", Sn(p.bulletClass), function (v) {
            v.preventDefault();
            let b = N(this).index() * e.params.slidesPerGroup;
            e.params.loop && (b += e.loopedSlides), e.slideTo(b);
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
        p.clickable && g.off("click", Sn(p.bulletClass));
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
          const b = v.hasClass(e.params.pagination.hiddenClass);
          r(b === !0 ? "paginationShow" : "paginationHide"),
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
  function Pp({ swiper: e, extendParams: t, on: n, emit: r }) {
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
      const { scrollbar: $, rtlTranslate: _, progress: T } = e,
        { $dragEl: O, $el: I } = $,
        k = e.params.scrollbar;
      let L = c,
        D = (u - c) * T;
      _
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
    function h($) {
      !e.params.scrollbar.el ||
        !e.scrollbar.el ||
        e.scrollbar.$dragEl.transition($);
    }
    function m() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const { scrollbar: $ } = e,
        { $dragEl: _, $el: T } = $;
      (_[0].style.width = ""),
        (_[0].style.height = ""),
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
          ? (_[0].style.width = `${c}px`)
          : (_[0].style.height = `${c}px`),
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
      const { scrollbar: _, rtlTranslate: T } = e,
        { $el: O } = _;
      let I;
      (I =
        (p($) -
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
      const _ = e.params.scrollbar,
        { scrollbar: T, $wrapperEl: O } = e,
        { $el: I, $dragEl: k } = T;
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
        I.transition(0),
        _.hide && I.css("opacity", 1),
        e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
        r("scrollbarDragStart", $);
    }
    function v($) {
      const { scrollbar: _, $wrapperEl: T } = e,
        { $el: O, $dragEl: I } = _;
      s &&
        ($.preventDefault ? $.preventDefault() : ($.returnValue = !1),
        g($),
        T.transition(0),
        O.transition(0),
        I.transition(0),
        r("scrollbarDragMove", $));
    }
    function b($) {
      const _ = e.params.scrollbar,
        { scrollbar: T, $wrapperEl: O } = e,
        { $el: I } = T;
      s &&
        ((s = !1),
        e.params.cssMode &&
          (e.$wrapperEl.css("scroll-snap-type", ""), O.transition("")),
        _.hide &&
          (clearTimeout(o),
          (o = Rn(() => {
            I.css("opacity", 0), I.transition(400);
          }, 1e3))),
        r("scrollbarDragEnd", $),
        _.snapOnRelease && e.slideToClosest());
    }
    function x($) {
      const {
          scrollbar: _,
          touchEventsTouch: T,
          touchEventsDesktop: O,
          params: I,
          support: k,
        } = e,
        L = _.$el;
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
      const W = $ === "on" ? "addEventListener" : "removeEventListener";
      k.touch
        ? (D[W](T.start, y, R), D[W](T.move, v, R), D[W](T.end, b, M))
        : (D[W](O.start, y, R), i[W](O.move, v, R), i[W](O.end, b, M));
    }
    function S() {
      !e.params.scrollbar.el || !e.scrollbar.el || x("on");
    }
    function w() {
      !e.params.scrollbar.el || !e.scrollbar.el || x("off");
    }
    function C() {
      const { scrollbar: $, $el: _ } = e;
      e.params.scrollbar = Ra(
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
        _.find(T.el).length === 1 &&
        (O = _.find(T.el)),
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
        _ = e.scrollbar.$el;
      _ &&
        _.removeClass(e.isHorizontal() ? $.horizontalClass : $.verticalClass),
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
      n("setTransition", ($, _) => {
        h(_);
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
  function kp({ swiper: e, extendParams: t, on: n }) {
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
  function Mp({ swiper: e, extendParams: t, on: n, emit: r }) {
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
            D = u.$slideEl ? u.$slideEl[0] : void 0;
          r("zoomChange", k, L, D);
        }
        h = k;
      },
    });
    function m(k) {
      if (k.targetTouches.length < 2) return 1;
      const L = k.targetTouches[0].pageX,
        D = k.targetTouches[0].pageY,
        R = k.targetTouches[1].pageX,
        M = k.targetTouches[1].pageY;
      return Math.sqrt(Ct(R - L, 2) + Ct(M - D, 2));
    }
    function p(k) {
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
        k.type === "gesturechange" && p(k);
        return;
      }
      L.gestures
        ? (R.scale = k.scale * s)
        : (R.scale = (u.scaleMove / u.scaleStart) * s),
        R.scale > u.maxRatio &&
          (R.scale = u.maxRatio - 1 + Ct(R.scale - u.maxRatio + 1, 0.5)),
        R.scale < D.minRatio &&
          (R.scale = D.minRatio + 1 - Ct(D.minRatio - R.scale + 1, 0.5)),
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
    function b(k) {
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
        (f.startX = Oa(u.$imageWrapEl[0], "x") || 0),
        (f.startY = Oa(u.$imageWrapEl[0], "y") || 0),
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
            (f.currentX = f.minX + 1 - Ct(f.minX - f.currentX + 1, 0.8)),
          f.currentX > f.maxX &&
            (f.currentX = f.maxX - 1 + Ct(f.currentX - f.maxX + 1, 0.8)),
          f.currentY < f.minY &&
            (f.currentY = f.minY + 1 - Ct(f.minY - f.currentY + 1, 0.8)),
          f.currentY > f.maxY &&
            (f.currentY = f.maxY - 1 + Ct(f.currentY - f.maxY + 1, 0.8)),
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
        W = d.y * D,
        K = f.currentY + W;
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
      let R, M, W, K, se, le, fe, ge, _e, Ye, Fe, Zt, Ie, He, ee, pe, Xe, Ze;
      typeof f.touchesStart.x == "undefined" && k
        ? ((R = k.type === "touchend" ? k.changedTouches[0].pageX : k.pageX),
          (M = k.type === "touchend" ? k.changedTouches[0].pageY : k.pageY))
        : ((R = f.touchesStart.x), (M = f.touchesStart.y)),
        (L.scale = u.$imageWrapEl.attr("data-swiper-zoom") || D.maxRatio),
        (s = u.$imageWrapEl.attr("data-swiper-zoom") || D.maxRatio),
        k
          ? ((Xe = u.$slideEl[0].offsetWidth),
            (Ze = u.$slideEl[0].offsetHeight),
            (W = u.$slideEl.offset().left + i.scrollX),
            (K = u.$slideEl.offset().top + i.scrollY),
            (se = W + Xe / 2 - R),
            (le = K + Ze / 2 - M),
            (_e = u.$imageEl[0].offsetWidth),
            (Ye = u.$imageEl[0].offsetHeight),
            (Fe = _e * L.scale),
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
      e.$wrapperEl[k]("gesturestart", D, p, L),
        e.$wrapperEl[k]("gesturechange", D, g, L),
        e.$wrapperEl[k]("gestureend", D, y, L);
    }
    function _() {
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
        ? (e.$wrapperEl.on(e.touchEvents.start, _, D),
          e.$wrapperEl.on(e.touchEvents.end, T, D))
        : e.touchEvents.start === "touchstart" &&
          (e.$wrapperEl.on(e.touchEvents.start, M, p, D),
          e.$wrapperEl.on(e.touchEvents.move, M, g, R),
          e.$wrapperEl.on(e.touchEvents.end, M, y, D),
          e.touchEvents.cancel &&
            e.$wrapperEl.on(e.touchEvents.cancel, M, y, D)),
        e.$wrapperEl.on(
          e.touchEvents.move,
          `.${e.params.zoom.containerClass}`,
          b,
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
        ? (e.$wrapperEl.off(e.touchEvents.start, _, D),
          e.$wrapperEl.off(e.touchEvents.end, T, D))
        : e.touchEvents.start === "touchstart" &&
          (e.$wrapperEl.off(e.touchEvents.start, M, p, D),
          e.$wrapperEl.off(e.touchEvents.move, M, g, R),
          e.$wrapperEl.off(e.touchEvents.end, M, y, D),
          e.touchEvents.cancel &&
            e.$wrapperEl.off(e.touchEvents.cancel, M, y, D)),
        e.$wrapperEl.off(
          e.touchEvents.move,
          `.${e.params.zoom.containerClass}`,
          b,
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
  function $p({ swiper: e, extendParams: t, on: n, emit: r }) {
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
              b = g.attr("data-srcset"),
              x = g.attr("data-sizes"),
              S = g.parent("picture");
            e.loadImage(g[0], v || y, b, x, !1, () => {
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
                    : (b && (g.attr("srcset", b), g.removeAttr("data-srcset")),
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
                  h.find(`.${f.preloaderClass}`).remove(),
                  e.params.loop && u)
                ) {
                  const w = h.attr("data-swiper-slide-index");
                  if (h.hasClass(e.params.slideDuplicateClass)) {
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
          const b = h ? N(v).attr("data-swiper-slide-index") : N(v).index();
          a(b);
        });
      else if (p > 1) for (let v = d; v < d + p; v += 1) g(v) && a(v);
      else a(d);
      if (m.loadPrevNext)
        if (p > 1 || (m.loadPrevNextAmount && m.loadPrevNextAmount > 1)) {
          const v = m.loadPrevNextAmount,
            b = Math.ceil(p),
            x = Math.min(d + b + Math.max(v, b), f.length),
            S = Math.max(d - Math.max(b, v), 0);
          for (let w = d + b; w < x; w += 1) g(w) && a(w);
          for (let w = S; w < d; w += 1) g(w) && a(w);
        } else {
          const v = c.children(`.${u.slideNextClass}`);
          v.length > 0 && a(y(v));
          const b = c.children(`.${u.slidePrevClass}`);
          b.length > 0 && a(y(b));
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
      for (let b = 0; b < y.length; b += 1) {
        const x = y[b];
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
  function Op({ swiper: e, extendParams: t, on: n }) {
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
  function Ap({ swiper: e, extendParams: t, on: n }) {
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
    function i(_) {
      const T = r;
      T.length !== 0 && (T.html(""), T.html(_));
    }
    function s(_ = 16) {
      const T = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(_).replace(/x/g, T);
    }
    function a(_) {
      _.attr("tabIndex", "0");
    }
    function o(_) {
      _.attr("tabIndex", "-1");
    }
    function l(_, T) {
      _.attr("role", T);
    }
    function c(_, T) {
      _.attr("aria-roledescription", T);
    }
    function u(_, T) {
      _.attr("aria-controls", T);
    }
    function f(_, T) {
      _.attr("aria-label", T);
    }
    function d(_, T) {
      _.attr("id", T);
    }
    function h(_, T) {
      _.attr("aria-live", T);
    }
    function m(_) {
      _.attr("aria-disabled", !0);
    }
    function p(_) {
      _.attr("aria-disabled", !1);
    }
    function g(_) {
      if (_.keyCode !== 13 && _.keyCode !== 32) return;
      const T = e.params.a11y,
        O = N(_.target);
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
          O.is(Sn(e.params.pagination.bulletClass)) &&
          O[0].click();
    }
    function y() {
      if (e.params.loop || e.params.rewind || !e.navigation) return;
      const { $nextEl: _, $prevEl: T } = e.navigation;
      T && T.length > 0 && (e.isBeginning ? (m(T), o(T)) : (p(T), a(T))),
        _ && _.length > 0 && (e.isEnd ? (m(_), o(_)) : (p(_), a(_)));
    }
    function v() {
      return (
        e.pagination && e.pagination.bullets && e.pagination.bullets.length
      );
    }
    function b() {
      return v() && e.params.pagination.clickable;
    }
    function x() {
      const _ = e.params.a11y;
      v() &&
        e.pagination.bullets.each((T) => {
          const O = N(T);
          e.params.pagination.clickable &&
            (a(O),
            e.params.pagination.renderBullet ||
              (l(O, "button"),
              f(
                O,
                _.paginationBulletMessage.replace(
                  /\{\{index\}\}/,
                  O.index() + 1
                )
              ))),
            O.is(`.${e.params.pagination.bulletActiveClass}`)
              ? O.attr("aria-current", "true")
              : O.removeAttr("aria-current");
        });
    }
    const S = (_, T, O) => {
        a(_),
          _[0].tagName !== "BUTTON" && (l(_, "button"), _.on("keydown", g)),
          f(_, O),
          u(_, T);
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
      P = (_) => {
        if (e.a11y.clicked) return;
        const T = _.target.closest(`.${e.params.slideClass}`);
        if (!T || !e.slides.includes(T)) return;
        const O = e.slides.indexOf(T) === e.activeIndex,
          I =
            e.params.watchSlidesProgress &&
            e.visibleSlides &&
            e.visibleSlides.includes(T);
        O ||
          I ||
          (_.sourceCapabilities && _.sourceCapabilities.firesTouchEvents) ||
          (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
          e.slideTo(e.slides.indexOf(T), 0));
      },
      A = () => {
        const _ = e.params.a11y;
        _.itemRoleDescriptionMessage &&
          c(N(e.slides), _.itemRoleDescriptionMessage),
          _.slideRole && l(N(e.slides), _.slideRole);
        const T = e.params.loop
          ? e.slides.filter(
              (O) => !O.classList.contains(e.params.slideDuplicateClass)
            ).length
          : e.slides.length;
        _.slideLabelMessage &&
          e.slides.each((O, I) => {
            const k = N(O),
              L = e.params.loop
                ? parseInt(k.attr("data-swiper-slide-index"), 10)
                : I,
              D = _.slideLabelMessage
                .replace(/\{\{index\}\}/, L + 1)
                .replace(/\{\{slidesLength\}\}/, T);
            f(k, D);
          });
      },
      E = () => {
        const _ = e.params.a11y;
        e.$el.append(r);
        const T = e.$el;
        _.containerRoleDescriptionMessage &&
          c(T, _.containerRoleDescriptionMessage),
          _.containerMessage && f(T, _.containerMessage);
        const O = e.$wrapperEl,
          I = _.id || O.attr("id") || `swiper-wrapper-${s(16)}`,
          k = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        d(O, I), h(O, k), A();
        let L, D;
        e.navigation && e.navigation.$nextEl && (L = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (D = e.navigation.$prevEl),
          L && L.length && S(L, I, _.nextSlideMessage),
          D && D.length && S(D, I, _.prevSlideMessage),
          b() &&
            e.pagination.$el.on(
              "keydown",
              Sn(e.params.pagination.bulletClass),
              g
            ),
          e.$el.on("focus", P, !0),
          e.$el.on("pointerdown", w, !0),
          e.$el.on("pointerup", C, !0);
      };
    function $() {
      r && r.length > 0 && r.remove();
      let _, T;
      e.navigation && e.navigation.$nextEl && (_ = e.navigation.$nextEl),
        e.navigation && e.navigation.$prevEl && (T = e.navigation.$prevEl),
        _ && _.off("keydown", g),
        T && T.off("keydown", g),
        b() &&
          e.pagination.$el.off(
            "keydown",
            Sn(e.params.pagination.bulletClass),
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
  function Lp({ swiper: e, extendParams: t, on: n }) {
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
            .filter((b) => b !== ""),
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
          let b = e.params.history.root;
          b[b.length - 1] === "/" && (b = b.slice(0, b.length - 1)),
            (y = `${b}/${d}/${y}`);
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
              const b = y.index();
              e.slideTo(b, d, m);
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
  function Ip({ swiper: e, extendParams: t, emit: n, on: r }) {
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
  function Dp({ swiper: e, extendParams: t, on: n, emit: r }) {
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
  function zp({ swiper: e, extendParams: t, on: n }) {
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
      else if (Pi(l.swiper)) {
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
            b = c.slides
              .eq(p)
              .nextAll(`[data-swiper-slide-index="${e.realIndex}"]`)
              .eq(0)
              .index();
          typeof v == "undefined"
            ? (g = b)
            : typeof b == "undefined"
            ? (g = v)
            : b - p === p - v
            ? (g = c.params.slidesPerGroup > 1 ? b : p)
            : b - p < p - v
            ? (g = b)
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
  function Rp({ swiper: e, extendParams: t, emit: n, once: r }) {
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
        let p = 1e3 * l.freeMode.momentumRatio;
        const g = e.velocity * p;
        let y = e.translate + g;
        u && (y = -y);
        let v = !1,
          b;
        const x = Math.abs(e.velocity) * 20 * l.freeMode.momentumBounceRatio;
        let S;
        if (y < e.maxTranslate())
          l.freeMode.momentumBounce
            ? (y + e.maxTranslate() < -x && (y = e.maxTranslate() - x),
              (b = e.maxTranslate()),
              (v = !0),
              (d.allowMomentumBounce = !0))
            : (y = e.maxTranslate()),
            l.loop && l.centeredSlides && (S = !0);
        else if (y > e.minTranslate())
          l.freeMode.momentumBounce
            ? (y - e.minTranslate() > x && (y = e.minTranslate() + x),
              (b = e.minTranslate()),
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
              ? (p = Math.abs((-y - e.translate) / e.velocity))
              : (p = Math.abs((y - e.translate) / e.velocity)),
            l.freeMode.sticky)
          ) {
            const w = Math.abs((u ? -y : y) - e.translate),
              C = e.slidesSizesGrid[e.activeIndex];
            w < C
              ? (p = l.speed)
              : w < 2 * C
              ? (p = l.speed * 1.5)
              : (p = l.speed * 2.5);
          }
        } else if (l.freeMode.sticky) {
          e.slideToClosest();
          return;
        }
        l.freeMode.momentumBounce && v
          ? (e.updateProgress(b),
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
                  e.setTranslate(b),
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
  function Np({ swiper: e, extendParams: t }) {
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
          const b = Math.floor(l / (d * m)),
            x = l - m * d * b,
            S = b === 0 ? d : Math.min(Math.ceil((u - b * m * d) / m), d);
          (v = Math.floor(x / S)),
            (y = x - v * S + b * d),
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
  function Fp(e) {
    const t = this,
      { $wrapperEl: n, params: r } = t;
    if ((r.loop && t.loopDestroy(), typeof e == "object" && "length" in e))
      for (let i = 0; i < e.length; i += 1) e[i] && n.append(e[i]);
    else n.append(e);
    r.loop && t.loopCreate(), r.observer || t.update();
  }
  function Hp(e) {
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
  function qp(e, t) {
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
  function Bp(e) {
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
  function Wp() {
    const e = this,
      t = [];
    for (let n = 0; n < e.slides.length; n += 1) t.push(n);
    e.removeSlide(t);
  }
  function Vp({ swiper: e }) {
    Object.assign(e, {
      appendSlide: Fp.bind(e),
      prependSlide: Hp.bind(e),
      addSlide: qp.bind(e),
      removeSlide: Bp.bind(e),
      removeAllSlides: Wp.bind(e),
    });
  }
  function Yr(e) {
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
  function Mi(e, t) {
    return e.transformEl
      ? t
          .find(e.transformEl)
          .css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden",
          })
      : t;
  }
  function Cs({ swiper: e, duration: t, transformEl: n, allSlides: r }) {
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
  function Yp({ swiper: e, extendParams: t, on: n }) {
    t({ fadeEffect: { crossFade: !1, transformEl: null } }),
      Yr({
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
            Mi(a, l)
              .css({ opacity: d })
              .transform(`translate3d(${u}px, ${f}px, 0px)`);
          }
        },
        setTransition: (s) => {
          const { transformEl: a } = e.params.fadeEffect;
          (a ? e.slides.find(a) : e.slides).transition(s),
            Cs({ swiper: e, duration: s, transformEl: a, allSlides: !0 });
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
  function Xp({ swiper: e, extendParams: t, on: n }) {
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
    Yr({
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
          b;
        p.shadow &&
          (g
            ? ((b = l.find(".swiper-cube-shadow")),
              b.length === 0 &&
                ((b = N('<div class="swiper-cube-shadow"></div>')),
                l.append(b)),
              b.css({ height: `${u}px` }))
            : ((b = o.find(".swiper-cube-shadow")),
              b.length === 0 &&
                ((b = N('<div class="swiper-cube-shadow"></div>')),
                o.append(b))));
        for (let S = 0; S < c.length; S += 1) {
          const w = c.eq(S);
          let C = S;
          y && (C = parseInt(w.attr("data-swiper-slide-index"), 10));
          let P = C * 90,
            A = Math.floor(P / 360);
          d && ((P = -P), (A = Math.floor(-P / 360)));
          const E = Math.max(Math.min(w[0].progress, 1), -1);
          let $ = 0,
            _ = 0,
            T = 0;
          C % 4 === 0
            ? (($ = -A * 4 * h), (T = 0))
            : (C - 1) % 4 === 0
            ? (($ = 0), (T = -A * 4 * h))
            : (C - 2) % 4 === 0
            ? (($ = h + A * 4 * h), (T = h))
            : (C - 3) % 4 === 0 && (($ = -h), (T = 3 * h + h * 4 * A)),
            d && ($ = -$),
            g || ((_ = $), ($ = 0));
          const O = `rotateX(${g ? 0 : -P}deg) rotateY(${
            g ? P : 0
          }deg) translate3d(${$}px, ${_}px, ${T}px)`;
          E <= 1 &&
            E > -1 &&
            ((v = C * 90 + E * 90), d && (v = -C * 90 - E * 90)),
            w.transform(O),
            p.slideShadows && r(w, E, g);
        }
        if (
          (l.css({
            "-webkit-transform-origin": `50% 50% -${h / 2}px`,
            "transform-origin": `50% 50% -${h / 2}px`,
          }),
          p.shadow)
        )
          if (g)
            b.transform(
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
              A = p.shadowOffset;
            b.transform(
              `scale3d(${C}, 1, ${P}) translate3d(0px, ${f / 2 + A}px, ${
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
  function Xr(e, t, n) {
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
  function jp({ swiper: e, extendParams: t, on: n }) {
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
      u.length === 0 && (u = Xr(c, o, e.isHorizontal() ? "left" : "top")),
        f.length === 0 && (f = Xr(c, o, e.isHorizontal() ? "right" : "bottom")),
        u.length && (u[0].style.opacity = Math.max(-l, 0)),
        f.length && (f[0].style.opacity = Math.max(l, 0));
    };
    Yr({
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
          const b = `translate3d(${y}px, ${v}px, 0px) rotateX(${g}deg) rotateY(${p}deg)`;
          Mi(c, f).transform(b);
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
          Cs({ swiper: e, duration: o, transformEl: l });
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
  function Gp({ swiper: e, extendParams: t, on: n }) {
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
      Yr({
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
              b = y[0].swiperSlideOffset,
              x = (d - b - v / 2) / v,
              S =
                typeof c.modifier == "function"
                  ? c.modifier(x)
                  : x * c.modifier;
            let w = u ? h * S : 0,
              C = u ? 0 : h * S,
              P = -m * Math.abs(S),
              A = c.stretch;
            typeof A == "string" &&
              A.indexOf("%") !== -1 &&
              (A = (parseFloat(c.stretch) / 100) * v);
            let E = u ? 0 : A * S,
              $ = u ? A * S : 0,
              _ = 1 - (1 - c.scale) * Math.abs(S);
            Math.abs($) < 0.001 && ($ = 0),
              Math.abs(E) < 0.001 && (E = 0),
              Math.abs(P) < 0.001 && (P = 0),
              Math.abs(w) < 0.001 && (w = 0),
              Math.abs(C) < 0.001 && (C = 0),
              Math.abs(_) < 0.001 && (_ = 0);
            const T = `translate3d(${$}px,${E}px,${P}px)  rotateX(${C}deg) rotateY(${w}deg) scale(${_})`;
            if (
              (Mi(c, y).transform(T),
              (y[0].style.zIndex = -Math.abs(Math.round(S)) + 1),
              c.slideShadows)
            ) {
              let I = u
                  ? y.find(".swiper-slide-shadow-left")
                  : y.find(".swiper-slide-shadow-top"),
                k = u
                  ? y.find(".swiper-slide-shadow-right")
                  : y.find(".swiper-slide-shadow-bottom");
              I.length === 0 && (I = Xr(c, y, u ? "left" : "top")),
                k.length === 0 && (k = Xr(c, y, u ? "right" : "bottom")),
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
  function Up({ swiper: e, extendParams: t, on: n }) {
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
    Yr({
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
            b = [0, 0, 0];
          let x = !1;
          e.isHorizontal() || ((v[1] = v[0]), (v[0] = 0));
          let S = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1,
          };
          p < 0 ? ((S = c.next), (x = !0)) : p > 0 && ((S = c.prev), (x = !0)),
            v.forEach((_, T) => {
              v[T] = `calc(${_}px + (${r(S.translate[T])} * ${Math.abs(
                p * u
              )}))`;
            }),
            b.forEach((_, T) => {
              b[T] = S.rotate[T] * Math.abs(p * u);
            }),
            (h[0].style.zIndex = -Math.abs(Math.round(m)) + a.length);
          const w = v.join(", "),
            C = `rotateX(${b[0]}deg) rotateY(${b[1]}deg) rotateZ(${b[2]}deg)`,
            P =
              g < 0
                ? `scale(${1 + (1 - S.scale) * g * u})`
                : `scale(${1 - (1 - S.scale) * g * u})`,
            A =
              g < 0 ? 1 + (1 - S.opacity) * g * u : 1 - (1 - S.opacity) * g * u,
            E = `translate3d(${w}) ${C} ${P}`;
          if ((x && S.shadow) || !x) {
            let _ = h.children(".swiper-slide-shadow");
            if ((_.length === 0 && S.shadow && (_ = Xr(c, h)), _.length)) {
              const T = c.shadowPerProgress ? p * (1 / c.limitProgress) : p;
              _[0].style.opacity = Math.min(Math.max(Math.abs(T), 0), 1);
            }
          }
          const $ = Mi(c, h);
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
          Cs({ swiper: e, duration: a, transformEl: o, allSlides: !0 });
      },
      perspective: () => e.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
  }
  function Kp({ swiper: e, extendParams: t, on: n }) {
    t({
      cardsEffect: {
        slideShadows: !0,
        transformEl: null,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8,
      },
    }),
      Yr({
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
            let b = 1,
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
              const _ = Ct(1 - Math.abs((Math.abs(m) - 0.5) / 0.5), 0.5);
              (x += -28 * m * _),
                (b += -0.5 * _),
                (S += 96 * _),
                (y = `${-25 * _ * Math.abs(m)}%`);
            }
            if (
              (m < 0
                ? (g = `calc(${g}px + (${S * Math.abs(m)}%))`)
                : m > 0
                ? (g = `calc(${g}px + (-${S * Math.abs(m)}%))`)
                : (g = `${g}px`),
              !e.isHorizontal())
            ) {
              const _ = y;
              (y = g), (g = _);
            }
            const A = m < 0 ? `${1 + (1 - b) * m}` : `${1 - (1 - b) * m}`,
              E = `
        translate3d(${g}, ${y}, ${v}px)
        rotateZ(${o.rotate ? x : 0}deg)
        scale(${A})
      `;
            if (o.slideShadows) {
              let _ = d.find(".swiper-slide-shadow");
              _.length === 0 && (_ = Xr(o, d)),
                _.length &&
                  (_[0].style.opacity = Math.min(
                    Math.max((Math.abs(m) - 0.5) / 0.5, 0),
                    1
                  ));
            }
            (d[0].style.zIndex = -Math.abs(Math.round(h)) + s.length),
              Mi(o, d).transform(E);
          }
        },
        setTransition: (s) => {
          const { transformEl: a } = e.params.cardsEffect;
          (a ? e.slides.find(a) : e.slides)
            .transition(s)
            .find(".swiper-slide-shadow")
            .transition(s),
            Cs({ swiper: e, duration: s, transformEl: a });
        },
        perspective: () => !0,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
  }
  const Qp = [
    Sp,
    Tp,
    Ep,
    wp,
    Cp,
    Pp,
    kp,
    Mp,
    $p,
    Op,
    Ap,
    Lp,
    Ip,
    Dp,
    zp,
    Rp,
    Np,
    Vp,
    Yp,
    Xp,
    jp,
    Gp,
    Up,
    Kp,
  ];
  ut.use(Qp);
  const Zp = () => {
    const e = document.querySelector(".swiper[work-slider='component']");
    e &&
      new ut(e, {
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
              (document.querySelector("[data-slider-current]").textContent = n);
          },
          slideChange: function () {
            const t = this.realIndex + 1;
            document.querySelector("[data-slider-current]").textContent = t;
          },
        },
      });
  };
  function Tn(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function ql(e, t) {
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
    jr = { duration: 0.5, overwrite: !1, delay: 0 },
    Na,
    Ke,
    me,
    an = 1e8,
    tt = 1 / an,
    Fa = Math.PI * 2,
    Jp = Fa / 4,
    em = 0,
    Bl = Math.sqrt,
    tm = Math.cos,
    nm = Math.sin,
    Be = function (t) {
      return typeof t == "string";
    },
    Se = function (t) {
      return typeof t == "function";
    },
    En = function (t) {
      return typeof t == "number";
    },
    Ha = function (t) {
      return typeof t == "undefined";
    },
    on = function (t) {
      return typeof t == "object";
    },
    _t = function (t) {
      return t !== !1;
    },
    qa = function () {
      return typeof window != "undefined";
    },
    Ps = function (t) {
      return Se(t) || Be(t);
    },
    Wl =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    nt = Array.isArray,
    Ba = /(?:-?\.?\d|\.)+/gi,
    Vl = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Gr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Wa = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Yl = /[+-]=-?[.\d]+/,
    Xl = /[^,'"\[\]\s]+/gi,
    rm = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ye,
    ln,
    Va,
    Ya,
    $t = {},
    ks = {},
    jl,
    Gl = function (t) {
      return (ks = Kr(t, $t)) && Tt;
    },
    Xa = function (t, n) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        n,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    $i = function (t, n) {
      return !n && console.warn(t);
    },
    Ul = function (t, n) {
      return (t && ($t[t] = n) && ks && (ks[t] = n)) || $t;
    },
    Oi = function () {
      return 0;
    },
    im = { suppressEvents: !0, isStart: !0, kill: !1 },
    Ms = { suppressEvents: !0, kill: !1 },
    sm = { suppressEvents: !0 },
    ja = {},
    Nn = [],
    Ga = {},
    Kl,
    Ot = {},
    Ua = {},
    Ql = 30,
    $s = [],
    Ka = "",
    Qa = function (t) {
      var n = t[0],
        r,
        i;
      if ((on(n) || Se(n) || (t = [t]), !(r = (n._gsap || {}).harness))) {
        for (i = $s.length; i-- && !$s[i].targetTest(n); );
        r = $s[i];
      }
      for (i = t.length; i--; )
        (t[i] && (t[i]._gsap || (t[i]._gsap = new Cc(t[i], r)))) ||
          t.splice(i, 1);
      return t;
    },
    lr = function (t) {
      return t._gsap || Qa(Vt(t))[0]._gsap;
    },
    Zl = function (t, n, r) {
      return (r = t[n]) && Se(r)
        ? t[n]()
        : (Ha(r) && t.getAttribute && t.getAttribute(n)) || r;
    },
    xt = function (t, n) {
      return (t = t.split(",")).forEach(n) || t;
    },
    we = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    $e = function (t) {
      return Math.round(t * 1e7) / 1e7 || 0;
    },
    Ur = function (t, n) {
      var r = n.charAt(0),
        i = parseFloat(n.substr(2));
      return (
        (t = parseFloat(t)),
        r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i
      );
    },
    am = function (t, n) {
      for (var r = n.length, i = 0; t.indexOf(n[i]) < 0 && ++i < r; );
      return i < r;
    },
    Os = function () {
      var t = Nn.length,
        n = Nn.slice(0),
        r,
        i;
      for (Ga = {}, Nn.length = 0, r = 0; r < t; r++)
        (i = n[r]),
          i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
    },
    Za = function (t) {
      return !!(t._initted || t._startAt || t.add);
    },
    Jl = function (t, n, r, i) {
      Nn.length && !Ke && Os(),
        t.render(n, r, !!(Ke && n < 0 && Za(t))),
        Nn.length && !Ke && Os();
    },
    ec = function (t) {
      var n = parseFloat(t);
      return (n || n === 0) && (t + "").match(Xl).length < 2
        ? n
        : Be(t)
        ? t.trim()
        : t;
    },
    tc = function (t) {
      return t;
    },
    At = function (t, n) {
      for (var r in n) r in t || (t[r] = n[r]);
      return t;
    },
    om = function (t) {
      return function (n, r) {
        for (var i in r)
          i in n || (i === "duration" && t) || i === "ease" || (n[i] = r[i]);
      };
    },
    Kr = function (t, n) {
      for (var r in n) t[r] = n[r];
      return t;
    },
    nc = function e(t, n) {
      for (var r in n)
        r !== "__proto__" &&
          r !== "constructor" &&
          r !== "prototype" &&
          (t[r] = on(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
      return t;
    },
    As = function (t, n) {
      var r = {},
        i;
      for (i in t) i in n || (r[i] = t[i]);
      return r;
    },
    Ai = function (t) {
      var n = t.parent || ye,
        r = t.keyframes ? om(nt(t.keyframes)) : At;
      if (_t(t.inherit))
        for (; n; ) r(t, n.vars.defaults), (n = n.parent || n._dp);
      return t;
    },
    lm = function (t, n) {
      for (var r = t.length, i = r === n.length; i && r-- && t[r] === n[r]; );
      return r < 0;
    },
    rc = function (t, n, r, i, s) {
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
    Ls = function (t, n, r, i) {
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
    cr = function (t, n) {
      if (t && (!n || n._end > t._dur || n._start < 0))
        for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
      return t;
    },
    cm = function (t) {
      for (var n = t.parent; n && n.parent; )
        (n._dirty = 1), n.totalDuration(), (n = n.parent);
      return t;
    },
    Ja = function (t, n, r, i) {
      return (
        t._startAt &&
        (Ke
          ? t._startAt.revert(Ms)
          : (t.vars.immediateRender && !t.vars.autoRevert) ||
            t._startAt.render(n, !0, i))
      );
    },
    um = function e(t) {
      return !t || (t._ts && e(t.parent));
    },
    ic = function (t) {
      return t._repeat ? Qr(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    Qr = function (t, n) {
      var r = Math.floor((t = $e(t / n)));
      return t && r === t ? r - 1 : r;
    },
    Is = function (t, n) {
      return (
        (t - n._start) * n._ts +
        (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
      );
    },
    Ds = function (t) {
      return (t._end = $e(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || tt) || 0)
      ));
    },
    zs = function (t, n) {
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
          Ds(t),
          r._dirty || cr(r, t)),
        t
      );
    },
    sc = function (t, n) {
      var r;
      if (
        ((n._time ||
          (!n._dur && n._initted) ||
          (n._start < t._time && (n._dur || !n.add))) &&
          ((r = Is(t.rawTime(), n)),
          (!n._dur || Ii(0, n.totalDuration(), r) - n._tTime > tt) &&
            n.render(r, !0)),
        cr(t, n)._dp && t._initted && t._time >= t._dur && t._ts)
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
          (En(r) ? r : r || t !== ye ? Wt(t, r, n) : t._time) + n._delay
        )),
        (n._end = $e(
          n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)
        )),
        rc(t, n, "_first", "_last", t._sort ? "_start" : 0),
        eo(n) || (t._recent = n),
        i || sc(t, n),
        t._ts < 0 && zs(t, t._tTime),
        t
      );
    },
    ac = function (t, n) {
      return (
        ($t.ScrollTrigger || Xa("scrollTrigger", n)) &&
        $t.ScrollTrigger.create(n, t)
      );
    },
    oc = function (t, n, r, i, s) {
      if ((co(t, n, s), !t._initted)) return 1;
      if (
        !r &&
        t._pt &&
        !Ke &&
        ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
        Kl !== It.frame
      )
        return Nn.push(t), (t._lazy = [s, i]), 1;
    },
    fm = function e(t) {
      var n = t.parent;
      return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
    },
    eo = function (t) {
      var n = t.data;
      return n === "isFromStart" || n === "isStart";
    },
    dm = function (t, n, r, i) {
      var s = t.ratio,
        a =
          n < 0 ||
          (!n &&
            ((!t._start && fm(t) && !(!t._initted && eo(t))) ||
              ((t._ts < 0 || t._dp._ts < 0) && !eo(t))))
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
          ((l = Ii(0, t._tDur, n)),
          (u = Qr(l, o)),
          t._yoyo && u & 1 && (a = 1 - a),
          u !== Qr(t._tTime, o) &&
            ((s = 1 - a),
            t.vars.repeatRefresh && t._initted && t.invalidate())),
        a !== s || Ke || i || t._zTime === tt || (!n && t._zTime))
      ) {
        if (!t._initted && oc(t, n, i, r, l)) return;
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
        n < 0 && Ja(t, n, r, !0),
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
    hm = function (t, n, r) {
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
    Zr = function (t, n, r, i) {
      var s = t._repeat,
        a = $e(n) || 0,
        o = t._tTime / t._tDur;
      return (
        o && !i && (t._time *= a / t._dur),
        (t._dur = a),
        (t._tDur = s ? (s < 0 ? 1e10 : $e(a * (s + 1) + t._rDelay * s)) : a),
        o > 0 && !i && zs(t, (t._tTime = t._tDur * o)),
        t.parent && Ds(t),
        r || cr(t.parent, t),
        t
      );
    },
    lc = function (t) {
      return t instanceof ft ? cr(t) : Zr(t, t._dur);
    },
    pm = { _start: 0, endTime: Oi, totalDuration: Oi },
    Wt = function e(t, n, r) {
      var i = t.labels,
        s = t._recent || pm,
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
    Li = function (t, n, r) {
      var i = En(n[1]),
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
    Hn = function (t, n) {
      return t || t === 0 ? n(t) : n;
    },
    Ii = function (t, n, r) {
      return r < t ? t : r > n ? n : r;
    },
    rt = function (t, n) {
      return !Be(t) || !(n = rm.exec(t)) ? "" : n[1];
    },
    mm = function (t, n, r) {
      return Hn(r, function (i) {
        return Ii(t, n, i);
      });
    },
    to = [].slice,
    cc = function (t, n) {
      return (
        t &&
        on(t) &&
        "length" in t &&
        ((!n && !t.length) || (t.length - 1 in t && on(t[0]))) &&
        !t.nodeType &&
        t !== ln
      );
    },
    gm = function (t, n, r) {
      return (
        r === void 0 && (r = []),
        t.forEach(function (i) {
          var s;
          return (Be(i) && !n) || cc(i, 1)
            ? (s = r).push.apply(s, Vt(i))
            : r.push(i);
        }) || r
      );
    },
    Vt = function (t, n, r) {
      return me && !n && me.selector
        ? me.selector(t)
        : Be(t) && !r && (Va || !ei())
        ? to.call((n || Ya).querySelectorAll(t), 0)
        : nt(t)
        ? gm(t, r)
        : cc(t)
        ? to.call(t, 0)
        : t
        ? [t]
        : [];
    },
    no = function (t) {
      return (
        (t = Vt(t)[0] || $i("Invalid scope") || {}),
        function (n) {
          var r = t.current || t.nativeElement || t;
          return Vt(
            n,
            r.querySelectorAll
              ? r
              : r === t
              ? $i("Invalid scope") || Ya.createElement("div")
              : t
          );
        }
      );
    },
    uc = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    fc = function (t) {
      if (Se(t)) return t;
      var n = on(t) ? t : { each: t },
        r = ur(n.ease),
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
            b,
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
                C < (C = m[A++].getBoundingClientRect().left) && A < p;

              );
              A < p && A--;
            }
            for (
              g = a[p] = [],
                y = l ? Math.min(A, p) * u - 0.5 : i % A,
                v = A === an ? 0 : l ? (p * f) / A - 0.5 : (i / A) | 0,
                C = 0,
                P = an,
                w = 0;
              w < p;
              w++
            )
              (b = (w % A) - y),
                (x = v - ((w / A) | 0)),
                (g[w] = S =
                  c ? Math.abs(c === "y" ? x : b) : Bl(b * b + x * x)),
                S > C && (C = S),
                S < P && (P = S);
            i === "random" && uc(g),
              (g.max = C - P),
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
              (r = r && p < 0 ? Tc(r) : r);
          }
          return (
            (p = (g[d] - g.min) / g.max || 0),
            $e(g.b + (r ? r(p) : p) * g.v) + g.u
          );
        }
      );
    },
    ro = function (t) {
      var n = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (r) {
        var i = $e(Math.round(parseFloat(r) / t) * t * n);
        return (i - (i % 1)) / n + (En(r) ? 0 : rt(r));
      };
    },
    dc = function (t, n) {
      var r = nt(t),
        i,
        s;
      return (
        !r &&
          on(t) &&
          ((i = r = t.radius || an),
          t.values
            ? ((t = Vt(t.values)), (s = !En(t[0])) && (i *= i))
            : (t = ro(t.increment))),
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
                    s || u === a || En(a) ? u : u + rt(a)
                  );
                }
            : ro(t)
        )
      );
    },
    hc = function (t, n, r, i) {
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
    vm = function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      return function (i) {
        return n.reduce(function (s, a) {
          return a(s);
        }, i);
      };
    },
    ym = function (t, n) {
      return function (r) {
        return t(parseFloat(r)) + (n || rt(r));
      };
    },
    bm = function (t, n, r) {
      return mc(t, n, 0, 1, r);
    },
    pc = function (t, n, r) {
      return Hn(r, function (i) {
        return t[~~n(i)];
      });
    },
    _m = function e(t, n, r) {
      var i = n - t;
      return nt(t)
        ? pc(t, e(0, t.length), n)
        : Hn(r, function (s) {
            return ((i + ((s - t) % i)) % i) + t;
          });
    },
    xm = function e(t, n, r) {
      var i = n - t,
        s = i * 2;
      return nt(t)
        ? pc(t, e(0, t.length - 1), n)
        : Hn(r, function (a) {
            return (a = (s + ((a - t) % s)) % s || 0), t + (a > i ? s - a : a);
          });
    },
    Di = function (t) {
      for (var n = 0, r = "", i, s, a, o; ~(i = t.indexOf("random(", n)); )
        (a = t.indexOf(")", i)),
          (o = t.charAt(i + 7) === "["),
          (s = t.substr(i + 7, a - i - 7).match(o ? Xl : Ba)),
          (r +=
            t.substr(n, i - n) +
            hc(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5)),
          (n = a + 1);
      return r + t.substr(n, t.length - n);
    },
    mc = function (t, n, r, i, s) {
      var a = n - t,
        o = i - r;
      return Hn(s, function (l) {
        return r + (((l - t) / a) * o || 0);
      });
    },
    Sm = function e(t, n, r, i) {
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
        } else i || (t = Kr(nt(t) ? [] : {}, t));
        if (!u) {
          for (l in n) oo.call(o, t, l, "get", n[l]);
          s = function (m) {
            return ho(m, o) || (a ? t.p : t);
          };
        }
      }
      return Hn(r, s);
    },
    gc = function (t, n, r) {
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
          r && Nn.length && Os(),
          o && (me = o),
          (u = l ? s.apply(c, l) : s.call(c)),
          (me = a),
          u
        );
    },
    zi = function (t) {
      return (
        Fn(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!Ke),
        t.progress() < 1 && Lt(t, "onInterrupt"),
        t
      );
    },
    Jr,
    vc = [],
    yc = function (t) {
      if (t)
        if (((t = (!t.name && t.default) || t), qa() || t.headless)) {
          var n = t.name,
            r = Se(t),
            i =
              n && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            s = {
              init: Oi,
              render: ho,
              add: oo,
              kill: Nm,
              modifier: Rm,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: fo,
              aliases: {},
              register: 0,
            };
          if ((ei(), t !== i)) {
            if (Ot[n]) return;
            At(i, At(As(t, s), a)),
              Kr(i.prototype, Kr(s, As(t, a))),
              (Ot[(i.prop = n)] = i),
              t.targetTest && ($s.push(i), (ja[n] = 1)),
              (n =
                (n === "css"
                  ? "CSS"
                  : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin");
          }
          Ul(n, i), t.register && t.register(Tt, i, St);
        } else vc.push(t);
    },
    ue = 255,
    Ri = {
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
    io = function (t, n, r) {
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
    bc = function (t, n, r) {
      var i = t ? (En(t) ? [t >> 16, (t >> 8) & ue, t & ue] : 0) : Ri.black,
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
        if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Ri[t]))
          i = Ri[t];
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
          if (((i = m = t.match(Ba)), !n))
            (l = (+i[0] % 360) / 360),
              (c = +i[1] / 100),
              (u = +i[2] / 100),
              (a = u <= 0.5 ? u * (c + 1) : u + c - u * c),
              (s = u * 2 - a),
              i.length > 3 && (i[3] *= 1),
              (i[0] = io(l + 1 / 3, s, a)),
              (i[1] = io(l, s, a)),
              (i[2] = io(l - 1 / 3, s, a));
          else if (~t.indexOf("="))
            return (i = t.match(Vl)), r && i.length < 4 && (i[3] = 1), i;
        } else i = t.match(Ba) || Ri.transparent;
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
    _c = function (t) {
      var n = [],
        r = [],
        i = -1;
      return (
        t.split(qn).forEach(function (s) {
          var a = s.match(Gr) || [];
          n.push.apply(n, a), r.push((i += a.length + 1));
        }),
        (n.c = r),
        n
      );
    },
    xc = function (t, n, r) {
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
            (d = bc(d, n, 1)) &&
            a +
              (n
                ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3]
                : d.join(",")) +
              ")"
          );
        })),
        r && ((u = _c(t)), (l = r.c), l.join(i) !== u.c.join(i)))
      )
        for (c = t.replace(qn, "1").split(Gr), f = c.length - 1; o < f; o++)
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
      for (t in Ri) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Tm = /hsl[a]?\(/,
    Sc = function (t) {
      var n = t.join(" "),
        r;
      if (((qn.lastIndex = 0), qn.test(n)))
        return (
          (r = Tm.test(n)),
          (t[1] = xc(t[1], r)),
          (t[0] = xc(t[0], r, _c(t[1]))),
          !0
        );
    },
    Ni,
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
        h,
        m = function p(g) {
          var y = e() - i,
            v = g === !0,
            b,
            x,
            S,
            w;
          if (
            ((y > t || y < 0) && (r += y - n),
            (i += y),
            (S = i - r),
            (b = S - a),
            (b > 0 || v) &&
              ((w = ++f.frame),
              (d = S - f.time * 1e3),
              (f.time = S = S / 1e3),
              (a += b + (b >= s ? 4 : s - b)),
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
            jl &&
              (!Va &&
                qa() &&
                ((ln = Va = window),
                (Ya = ln.document || {}),
                ($t.gsap = Tt),
                (ln.gsapVersions || (ln.gsapVersions = [])).push(Tt.version),
                Gl(ks || ln.GreenSockGlobals || (!ln.gsap && ln) || {}),
                vc.forEach(yc)),
              (u =
                typeof requestAnimationFrame != "undefined" &&
                requestAnimationFrame),
              l && f.sleep(),
              (c =
                u ||
                function (g) {
                  return setTimeout(g, (a - f.time * 1e3 + 1) | 0);
                }),
              (Ni = 1),
              m(2));
          },
          sleep: function () {
            (u ? cancelAnimationFrame : clearTimeout)(l), (Ni = 0), (c = Oi);
          },
          lagSmoothing: function (g, y) {
            (t = g || 1 / 0), (n = Math.min(y || 33, t));
          },
          fps: function (g) {
            (s = 1e3 / (g || 240)), (a = f.time * 1e3 + s);
          },
          add: function (g, y, v) {
            var b = y
              ? function (x, S, w, C) {
                  g(x, S, w, C), f.remove(b);
                }
              : g;
            return f.remove(g), o[v ? "unshift" : "push"](b), ei(), b;
          },
          remove: function (g, y) {
            ~(y = o.indexOf(g)) && o.splice(y, 1) && h >= y && h--;
          },
          _listeners: o,
        }),
        f
      );
    })(),
    ei = function () {
      return !Ni && It.wake();
    },
    ne = {},
    Em = /^[\d.\-M][\d.\-,\s]/,
    wm = /["']/g,
    Cm = function (t) {
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
          (n[i] = isNaN(c) ? c.replace(wm, "").trim() : +c),
          (i = l.substr(o + 1).trim());
      return n;
    },
    Pm = function (t) {
      var n = t.indexOf("(") + 1,
        r = t.indexOf(")"),
        i = t.indexOf("(", n);
      return t.substring(n, ~i && i < r ? t.indexOf(")", r + 1) : r);
    },
    km = function (t) {
      var n = (t + "").split("("),
        r = ne[n[0]];
      return r && n.length > 1 && r.config
        ? r.config.apply(
            null,
            ~t.indexOf("{") ? [Cm(n[1])] : Pm(t).split(",").map(ec)
          )
        : ne._CE && Em.test(t)
        ? ne._CE("", t)
        : r;
    },
    Tc = function (t) {
      return function (n) {
        return 1 - t(1 - n);
      };
    },
    Ec = function e(t, n) {
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
    ur = function (t, n) {
      return (t && (Se(t) ? t : ne[t] || km(t))) || n;
    },
    fr = function (t, n, r, i) {
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
    wc = function (t) {
      return function (n) {
        return n < 0.5 ? (1 - t(1 - n * 2)) / 2 : 0.5 + t((n - 0.5) * 2) / 2;
      };
    },
    so = function e(t, n, r) {
      var i = n >= 1 ? n : 1,
        s = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
        a = (s / Fa) * (Math.asin(1 / i) || 0),
        o = function (u) {
          return u === 1 ? 1 : i * Math.pow(2, -10 * u) * nm((u - a) * s) + 1;
        },
        l =
          t === "out"
            ? o
            : t === "in"
            ? function (c) {
                return 1 - o(1 - c);
              }
            : wc(o);
      return (
        (s = Fa / s),
        (l.config = function (c, u) {
          return e(t, c, u);
        }),
        l
      );
    },
    ao = function e(t, n) {
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
            : wc(r);
      return (
        (i.config = function (s) {
          return e(t, s);
        }),
        i
      );
    };
  xt("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
    var n = t < 5 ? t + 1 : t;
    fr(
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
    fr("Elastic", so("in"), so("out"), so()),
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
      fr(
        "Bounce",
        function (a) {
          return 1 - s(1 - a);
        },
        s
      );
    })(7.5625, 2.75),
    fr("Expo", function (e) {
      return Math.pow(2, 10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
    }),
    fr("Circ", function (e) {
      return -(Bl(1 - e * e) - 1);
    }),
    fr("Sine", function (e) {
      return e === 1 ? 1 : -tm(e * Jp) + 1;
    }),
    fr("Back", ao("in"), ao("out"), ao()),
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
              return (((i * Ii(0, a, o)) | 0) + s) * r;
            };
          },
        }),
    (jr.ease = ne["quad.out"]),
    xt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (e) {
        return (Ka += e + "," + e + "Params,");
      }
    );
  var Cc = function (t, n) {
      (this.id = em++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = n),
        (this.get = n ? n.get : Zl),
        (this.set = n ? n.getSetter : fo);
    },
    Fi = (function () {
      function e(n) {
        (this.vars = n),
          (this._delay = +n.delay || 0),
          (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
            ((this._rDelay = n.repeatDelay || 0),
            (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
          (this._ts = 1),
          Zr(this, +n.duration, 1, 1),
          (this.data = n.data),
          me && ((this._ctx = me), me.data.push(this)),
          Ni || It.wake();
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
              Zr(
                this,
                this._repeat < 0
                  ? r
                  : (r - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (t.totalTime = function (r, i) {
          if ((ei(), !arguments.length)) return this._tTime;
          var s = this._dp;
          if (s && s.smoothChildTiming && this._ts) {
            for (
              zs(this, r), !s._dp || s.parent || sc(s, this);
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
              (this._ts || (this._pTime = r), Jl(this, r, i)),
            this
          );
        }),
        (t.time = function (r, i) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), r + ic(this)) %
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
                  ic(this),
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
            ? Qr(this._tTime, s) + 1
            : 1;
        }),
        (t.timeScale = function (r, i) {
          if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
          if (this._rts === r) return this;
          var s =
            this.parent && this._ts ? Is(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +r || 0),
            (this._ts = this._ps || r === -1e-8 ? 0 : this._rts),
            this.totalTime(
              Ii(-Math.abs(this._delay), this.totalDuration(), s),
              i !== !1
            ),
            Ds(this),
            cm(this)
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
                  : (ei(),
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
              ? Is(i.rawTime(r), this)
              : this._tTime
            : this._tTime;
        }),
        (t.revert = function (r) {
          r === void 0 && (r = sm);
          var i = Ke;
          return (
            (Ke = r),
            Za(this) &&
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
            ? ((this._repeat = r === 1 / 0 ? -2 : r), lc(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (t.repeatDelay = function (r) {
          if (arguments.length) {
            var i = this._time;
            return (this._rDelay = r), lc(this), i ? this.time(i) : this;
          }
          return this._rDelay;
        }),
        (t.yoyo = function (r) {
          return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
        }),
        (t.seek = function (r, i) {
          return this.totalTime(Wt(this, r), _t(i));
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
            var a = Se(r) ? r : tc,
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
          zi(this);
        }),
        e
      );
    })();
  At(Fi.prototype, {
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
    ql(t, e);
    function t(r, i) {
      var s;
      return (
        r === void 0 && (r = {}),
        (s = e.call(this, r) || this),
        (s.labels = {}),
        (s.smoothChildTiming = !!r.smoothChildTiming),
        (s.autoRemoveChildren = !!r.autoRemoveChildren),
        (s._sort = _t(r.sortChildren)),
        ye && cn(r.parent || ye, Tn(s), i),
        r.reversed && s.reverse(),
        r.paused && s.paused(!0),
        r.scrollTrigger && ac(Tn(s), r.scrollTrigger),
        s
      );
    }
    var n = t.prototype;
    return (
      (n.to = function (i, s, a) {
        return Li(0, arguments, this), this;
      }),
      (n.from = function (i, s, a) {
        return Li(1, arguments, this), this;
      }),
      (n.fromTo = function (i, s, a, o) {
        return Li(2, arguments, this), this;
      }),
      (n.set = function (i, s, a) {
        return (
          (s.duration = 0),
          (s.parent = this),
          Ai(s).repeatDelay || (s.repeat = 0),
          (s.immediateRender = !!s.immediateRender),
          new Oe(i, s, Wt(this, a), 1),
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
          new Oe(i, a, Wt(this, l)),
          this
        );
      }),
      (n.staggerFrom = function (i, s, a, o, l, c, u) {
        return (
          (a.runBackwards = 1),
          (Ai(a).immediateRender = _t(a.immediateRender)),
          this.staggerTo(i, s, a, o, l, c, u)
        );
      }),
      (n.staggerFromTo = function (i, s, a, o, l, c, u, f) {
        return (
          (o.startAt = a),
          (Ai(o).immediateRender = _t(o.immediateRender)),
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
          b,
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
            (b = this._ts),
            (y = !b),
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
                ? ((p = this._repeat), (d = c))
                : ((S = $e(u / g)),
                  (p = ~~S),
                  p && p === S && ((d = c), p--),
                  d > c && (d = c)),
              (S = Qr(this._tTime, g)),
              !o &&
                this._tTime &&
                S !== p &&
                this._tTime - S * g - this._dur <= 0 &&
                (S = p),
              w && p & 1 && ((d = c - d), (C = 1)),
              p !== S && !this._lock)
            ) {
              var P = w && S & 1,
                A = P === (w && p & 1);
              if (
                (p < S && (P = !P),
                (o = P ? 0 : u % c ? c : u),
                (this._lock = 1),
                (this.render(o || (C ? 0 : $e(p * g)), s, !c)._lock = 0),
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
              Ec(this, C);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((v = hm(this, $e(o), $e(d))), v && (u -= d - (d = v._start))),
            (this._tTime = u),
            (this._time = d),
            (this._act = !b),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = i),
              (o = 0)),
            !o && u && !s && !S && (Lt(this, "onStart"), this._tTime !== u))
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
                    a || (Ke && Za(h))
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
            return (this._start = x), Ds(this), this.render(i, s, a);
          this._onUpdate && !s && Lt(this, "onUpdate", !0),
            ((u === l && this._tTime >= this.totalDuration()) || (!u && o)) &&
              (x === this._start || Math.abs(b) !== Math.abs(this._ts)) &&
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
        if ((En(s) || (s = Wt(this, s, i)), !(i instanceof Fi))) {
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
          : (i.parent === this && Ls(this, i),
            i === this._recent && (this._recent = this._last),
            cr(this));
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
        return (this.labels[i] = Wt(this, s)), this;
      }),
      (n.removeLabel = function (i) {
        return delete this.labels[i], this;
      }),
      (n.addPause = function (i, s, a) {
        var o = Oe.delayedCall(0, s || Oi, a);
        return (
          (o.data = "isPause"), (this._hasPause = 1), cn(this, o, Wt(this, i))
        );
      }),
      (n.removePause = function (i) {
        var s = this._first;
        for (i = Wt(this, i); s; )
          s._start === i && s.data === "isPause" && Fn(s), (s = s._next);
      }),
      (n.killTweensOf = function (i, s, a) {
        for (var o = this.getTweensOf(i, a), l = o.length; l--; )
          Bn !== o[l] && o[l].kill(i, s);
        return this;
      }),
      (n.getTweensOf = function (i, s) {
        for (var a = [], o = Vt(i), l = this._first, c = En(s), u; l; )
          l instanceof Oe
            ? am(l._targets, o) &&
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
          o = Wt(a, i),
          l = s,
          c = l.startAt,
          u = l.onStart,
          f = l.onStartParams,
          d = l.immediateRender,
          h,
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
                  if ((a.pause(), !h)) {
                    var g =
                      s.duration ||
                      Math.abs(
                        (o - (c && "time" in c ? c.time : a._time)) /
                          a.timeScale()
                      );
                    m._dur !== g && Zr(m, g, 0, 1).render(m._time, !0, !0),
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
        return this.tweenTo(s, At({ startAt: { time: Wt(this, i) } }, a));
      }),
      (n.recent = function () {
        return this._recent;
      }),
      (n.nextLabel = function (i) {
        return i === void 0 && (i = this._time), gc(this, Wt(this, i));
      }),
      (n.previousLabel = function (i) {
        return i === void 0 && (i = this._time), gc(this, Wt(this, i), 1);
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
        return cr(this);
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
          cr(this)
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
          Zr(a, a === ye && a._time > s ? a._time : s, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (t.updateRoot = function (i) {
        if ((ye._ts && (Jl(ye, Is(i, ye)), (Kl = It.frame)), It.frame >= Ql)) {
          Ql += Mt.autoSleep || 120;
          var s = ye._first;
          if ((!s || !s._ts) && Mt.autoSleep && It._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || It.sleep();
          }
        }
      }),
      t
    );
  })(Fi);
  At(ft.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Mm = function (t, n, r, i, s, a, o) {
      var l = new St(this._pt, t, n, 0, 1, Ac, null, s),
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
          (y = ~i.indexOf("random(")) && (i = Di(i)),
          a && ((v = [r, i]), a(v, t, n), (r = v[0]), (i = v[1])),
          d = r.match(Wa) || [];
        (f = Wa.exec(i));

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
              c: m.charAt(1) === "=" ? Ur(g, m) - g : parseFloat(m) - g,
              m: h && h < 4 ? Math.round : 0,
            }),
            (c = Wa.lastIndex));
      return (
        (l.c = c < i.length ? i.substring(c, i.length) : ""),
        (l.fp = o),
        (Yl.test(i) || y) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    oo = function (t, n, r, i, s, a, o, l, c, u) {
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
        h = Se(f) ? (c ? Im : $c) : uo,
        m;
      if (
        (Be(i) &&
          (~i.indexOf("random(") && (i = Di(i)),
          i.charAt(1) === "=" &&
            ((m = Ur(d, i) + (rt(d) || 0)), (m || m === 0) && (i = m))),
        !u || d !== i || lo)
      )
        return !isNaN(d * i) && i !== ""
          ? ((m = new St(
              this._pt,
              t,
              n,
              +d || 0,
              i - (d || 0),
              typeof f == "boolean" ? zm : Oc,
              0,
              h
            )),
            c && (m.fp = c),
            o && m.modifier(o, this, t),
            (this._pt = m))
          : (!f && !(n in t) && Xa(n, i),
            Mm.call(this, t, n, d, i, h, l || Mt.stringFilter, c));
    },
    $m = function (t, n, r, i, s) {
      if (
        (Se(t) && (t = Hi(t, s, n, r, i)),
        !on(t) || (t.style && t.nodeType) || nt(t) || Wl(t))
      )
        return Be(t) ? Hi(t, s, n, r, i) : t;
      var a = {},
        o;
      for (o in t) a[o] = Hi(t[o], s, n, r, i);
      return a;
    },
    Pc = function (t, n, r, i, s, a) {
      var o, l, c, u;
      if (
        Ot[t] &&
        (o = new Ot[t]()).init(
          s,
          o.rawVars ? n[t] : $m(n[t], i, s, a, r),
          r,
          i,
          a
        ) !== !1 &&
        ((r._pt = l = new St(r._pt, s, t, 0, 1, o.render, o, 0, o.priority)),
        r !== Jr)
      )
        for (c = r._ptLookup[r._targets.indexOf(s)], u = o._props.length; u--; )
          c[o._props[u]] = l;
      return o;
    },
    Bn,
    lo,
    co = function e(t, n, r) {
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
        b = t._overwrite === "auto" && !Na,
        x = t.timeline,
        S,
        w,
        C,
        P,
        A,
        E,
        $,
        _,
        T,
        O,
        I,
        k,
        L;
      if (
        (x && (!d || !s) && (s = "none"),
        (t._ease = ur(s, jr.ease)),
        (t._yEase = f ? Tc(ur(f === !0 ? s : f, jr.ease)) : 0),
        f &&
          t._yoyo &&
          !t._repeat &&
          ((f = t._yEase), (t._yEase = t._ease), (t._ease = f)),
        (t._from = !x && !!i.runBackwards),
        !x || (d && !i.stagger))
      ) {
        if (
          ((_ = g[0] ? lr(g[0]).harness : 0),
          (k = _ && i[_.prop]),
          (S = As(i, ja)),
          p &&
            (p._zTime < 0 && p.progress(1),
            n < 0 && u && o && !h
              ? p.render(-1, !0)
              : p.revert(u && m ? Ms : im),
            (p._lazy = 0)),
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
                    lazy: !p && _t(l),
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
            n < 0 && (Ke || (!o && !h)) && t._startAt.revert(Ms),
            o && m && n <= 0 && r <= 0)
          ) {
            n && (t._zTime = n);
            return;
          }
        } else if (u && m && !p) {
          if (
            (n && (o = !1),
            (C = At(
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
            k && (C[_.prop] = k),
            Fn((t._startAt = Oe.set(g, C))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            n < 0 && (Ke ? t._startAt.revert(Ms) : t._startAt.render(-1, !0)),
            (t._zTime = n),
            !o)
          )
            e(t._startAt, tt, tt);
          else if (!n) return;
        }
        for (
          t._pt = t._ptCache = 0, l = (m && _t(l)) || (l && !m), w = 0;
          w < g.length;
          w++
        ) {
          if (
            ((A = g[w]),
            ($ = A._gsap || Qa(g)[w]._gsap),
            (t._ptLookup[w] = O = {}),
            Ga[$.id] && Nn.length && Os(),
            (I = v === g ? w : v.indexOf(A)),
            _ &&
              (T = new _()).init(A, k || S, t, I, v) !== !1 &&
              ((t._pt = P =
                new St(t._pt, A, T.name, 0, 1, T.render, T, 0, T.priority)),
              T._props.forEach(function (D) {
                O[D] = P;
              }),
              T.priority && (E = 1)),
            !_ || k)
          )
            for (C in S)
              Ot[C] && (T = Pc(C, S, t, I, A, v))
                ? T.priority && (E = 1)
                : (O[C] = P =
                    oo.call(t, A, C, "get", S[C], I, v, 0, i.stringFilter));
          t._op && t._op[w] && t.kill(A, t._op[w]),
            b &&
              t._pt &&
              ((Bn = t),
              ye.killTweensOf(A, O, t.globalTime(n)),
              (L = !t.parent),
              (Bn = 0)),
            t._pt && l && (Ga[$.id] = 1);
        }
        E && Lc(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = c),
        (t._initted = (!t._op || t._pt) && !L),
        d && n <= 0 && x.render(an, !0, !0);
    },
    Om = function (t, n, r, i, s, a, o, l) {
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
              (lo = 1),
              (t.vars[n] = "+=0"),
              co(t, o),
              (lo = 0),
              l ? $i(n + " not eligible for reset") : 1
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
    Am = function (t, n) {
      var r = t[0] ? lr(t[0]).harness : 0,
        i = r && r.aliases,
        s,
        a,
        o,
        l;
      if (!i) return n;
      s = Kr({}, n);
      for (a in i)
        if (a in s)
          for (l = i[a].split(","), o = l.length; o--; ) s[l[o]] = s[a];
      return s;
    },
    Lm = function (t, n, r, i) {
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
    Hi = function (t, n, r, i, s) {
      return Se(t)
        ? t.call(n, r, i, s)
        : Be(t) && ~t.indexOf("random(")
        ? Di(t)
        : t;
    },
    kc = Ka + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Mc = {};
  xt(kc + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
    return (Mc[e] = 1);
  });
  var Oe = (function (e) {
    ql(t, e);
    function t(r, i, s, a) {
      var o;
      typeof i == "number" && ((s.duration = i), (i = s), (s = null)),
        (o = e.call(this, a ? i : Ai(i)) || this);
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
        b = (nt(r) || Wl(r) ? En(r[0]) : "length" in i) ? [r] : Vt(r),
        x,
        S,
        w,
        C,
        P,
        A,
        E,
        $;
      if (
        ((o._targets = b.length
          ? Qa(b)
          : $i(
              "GSAP target " + r + " not found. https://gsap.com",
              !Mt.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = h),
        m || d || Ps(c) || Ps(u))
      ) {
        if (
          ((i = o.vars),
          (x = o.timeline =
            new ft({
              data: "nested",
              defaults: p || {},
              targets: v && v.data === "nested" ? v.vars.targets : b,
            })),
          x.kill(),
          (x.parent = x._dp = Tn(o)),
          (x._start = 0),
          d || Ps(c) || Ps(u))
        ) {
          if (((C = b.length), (E = d && fc(d)), on(d)))
            for (P in d) ~kc.indexOf(P) && ($ || ($ = {}), ($[P] = d[P]));
          for (S = 0; S < C; S++)
            (w = As(i, Mc)),
              (w.stagger = 0),
              y && (w.yoyoEase = y),
              $ && Kr(w, $),
              (A = b[S]),
              (w.duration = +Hi(c, Tn(o), S, A, b)),
              (w.delay = (+Hi(u, Tn(o), S, A, b) || 0) - o._delay),
              !d &&
                C === 1 &&
                w.delay &&
                ((o._delay = u = w.delay), (o._start += u), (w.delay = 0)),
              x.to(A, w, E ? E(S, A, b) : 0),
              (x._ease = ne.none);
          x.duration() ? (c = u = 0) : (o.timeline = 0);
        } else if (m) {
          Ai(At(x.vars.defaults, { ease: "none" })),
            (x._ease = ur(m.ease || i.ease || "none"));
          var _ = 0,
            T,
            O,
            I;
          if (nt(m))
            m.forEach(function (k) {
              return x.to(b, k, ">");
            }),
              x.duration();
          else {
            w = {};
            for (P in m)
              P === "ease" || P === "easeEach" || Lm(P, m[P], w, m.easeEach);
            for (P in w)
              for (
                T = w[P].sort(function (k, L) {
                  return k.t - L.t;
                }),
                  _ = 0,
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
                  x.to(b, I, _),
                  (_ += I.duration);
            x.duration() < c && x.to({}, { duration: c - x.duration() });
          }
        }
        c || o.duration((c = x.duration()));
      } else o.timeline = 0;
      return (
        h === !0 && !Na && ((Bn = Tn(o)), ye.killTweensOf(b), (Bn = 0)),
        cn(v, Tn(o), s),
        i.reversed && o.reverse(),
        i.paused && o.paused(!0),
        (f ||
          (!c &&
            !m &&
            o._start === $e(v._time) &&
            _t(f) &&
            um(Tn(o)) &&
            v.data !== "nested")) &&
          ((o._tTime = -1e-8), o.render(Math.max(0, -u) || 0)),
        g && ac(Tn(o), g),
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
          b,
          x;
        if (!c) dm(this, i, s, a);
        else if (
          f !== this._tTime ||
          !i ||
          a ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== u) ||
          this._lazy
        ) {
          if (((d = f), (b = this.timeline), this._repeat)) {
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
              (g = Qr(this._tTime, p)),
              d === o && !a && this._initted && m === g)
            )
              return (this._tTime = f), this;
            m !== g &&
              (b && this._yEase && Ec(b, y),
              this.vars.repeatRefresh &&
                !y &&
                !this._lock &&
                d !== p &&
                this._initted &&
                ((this._lock = a = 1),
                (this.render($e(p * m), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (oc(this, u ? i : d, a, s, f)) return (this._tTime = 0), this;
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
          for (h = this._pt; h; ) h.r(v, h.d), (h = h._next);
          (b && b.render(i < 0 ? i : b._dur * b._ease(d / this._dur), s, a)) ||
            (this._startAt && (this._zTime = i)),
            this._onUpdate &&
              !s &&
              (u && Ja(this, i, s, a), Lt(this, "onUpdate")),
            this._repeat &&
              m !== g &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              Lt(this, "onRepeat"),
            (f === this._tDur || !f) &&
              this._tTime === f &&
              (u && !this._onUpdate && Ja(this, i, !0, !0),
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
        Ni || It.wake(), this._ts || this.play();
        var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          u;
        return (
          this._initted || co(this, c),
          (u = this._ease(c / this._dur)),
          Om(this, i, s, a, o, u, c, l)
            ? this.resetTo(i, s, a, o, 1)
            : (zs(this, 0),
              this.parent ||
                rc(
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
              ? zi(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!Ke),
            this
          );
        if (this.timeline) {
          var a = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(i, s, Bn && Bn.vars.overwrite !== !0)
              ._first || zi(this),
            this.parent &&
              a !== this.timeline.totalDuration() &&
              Zr(this, (this._dur * this.timeline._tDur) / a, 0, 1),
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
        if ((!s || s === "all") && lm(o, l))
          return s === "all" && (this._pt = 0), zi(this);
        for (
          f = this._op = this._op || [],
            s !== "all" &&
              (Be(s) &&
                ((p = {}),
                xt(s, function (v) {
                  return (p[v] = 1);
                }),
                (s = p)),
              (s = Am(o, s))),
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
                    Ls(this, g, "_pt"),
                  delete d[p]),
                h !== "all" && (h[p] = 1);
          }
        return this._initted && !this._pt && u && zi(this), this;
      }),
      (t.to = function (i, s) {
        return new t(i, s, arguments[2]);
      }),
      (t.from = function (i, s) {
        return Li(1, arguments);
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
        return Li(2, arguments);
      }),
      (t.set = function (i, s) {
        return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new t(i, s);
      }),
      (t.killTweensOf = function (i, s, a) {
        return ye.killTweensOf(i, s, a);
      }),
      t
    );
  })(Fi);
  At(Oe.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    xt("staggerTo,staggerFrom,staggerFromTo", function (e) {
      Oe[e] = function () {
        var t = new ft(),
          n = to.call(arguments, 0);
        return n.splice(e === "staggerFromTo" ? 5 : 4, 0, 0), t[e].apply(t, n);
      };
    });
  var uo = function (t, n, r) {
      return (t[n] = r);
    },
    $c = function (t, n, r) {
      return t[n](r);
    },
    Im = function (t, n, r, i) {
      return t[n](i.fp, r);
    },
    Dm = function (t, n, r) {
      return t.setAttribute(n, r);
    },
    fo = function (t, n) {
      return Se(t[n]) ? $c : Ha(t[n]) && t.setAttribute ? Dm : uo;
    },
    Oc = function (t, n) {
      return n.set(n.t, n.p, Math.round((n.s + n.c * t) * 1e6) / 1e6, n);
    },
    zm = function (t, n) {
      return n.set(n.t, n.p, !!(n.s + n.c * t), n);
    },
    Ac = function (t, n) {
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
    ho = function (t, n) {
      for (var r = n._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    Rm = function (t, n, r, i) {
      for (var s = this._pt, a; s; )
        (a = s._next), s.p === i && s.modifier(t, n, r), (s = a);
    },
    Nm = function (t) {
      for (var n = this._pt, r, i; n; )
        (i = n._next),
          (n.p === t && !n.op) || n.op === t
            ? Ls(this, n, "_pt")
            : n.dep || (r = 1),
          (n = i);
      return !r;
    },
    Fm = function (t, n, r, i) {
      i.mSet(t, n, i.m.call(i.tween, r, i.mt), i);
    },
    Lc = function (t) {
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
          (this.r = o || Oc),
          (this.d = l || this),
          (this.set = c || uo),
          (this.pr = u || 0),
          (this._next = n),
          n && (n._prev = this);
      }
      var t = e.prototype;
      return (
        (t.modifier = function (r, i, s) {
          (this.mSet = this.mSet || this.set),
            (this.set = Fm),
            (this.m = r),
            (this.mt = s),
            (this.tween = i);
        }),
        e
      );
    })();
  xt(
    Ka +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (e) {
      return (ja[e] = 1);
    }
  ),
    ($t.TweenMax = $t.TweenLite = Oe),
    ($t.TimelineLite = $t.TimelineMax = ft),
    (ye = new ft({
      sortChildren: !1,
      defaults: jr,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Mt.stringFilter = Sc);
  var dr = [],
    Rs = {},
    Hm = [],
    Ic = 0,
    qm = 0,
    po = function (t) {
      return (Rs[t] || Hm).map(function (n) {
        return n();
      });
    },
    mo = function () {
      var t = Date.now(),
        n = [];
      t - Ic > 2 &&
        (po("matchMediaInit"),
        dr.forEach(function (r) {
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
        po("matchMediaRevert"),
        n.forEach(function (r) {
          return r.onMatch(r, function (i) {
            return r.add(null, i);
          });
        }),
        (Ic = t),
        po("matchMedia"));
    },
    Dc = (function () {
      function e(n, r) {
        (this.selector = r && no(r)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = qm++),
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
                s && (a.selector = no(s)),
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
            for (var a = dr.length; a--; )
              dr[a].id === this.id && dr.splice(a, 1);
        }),
        (t.revert = function (r) {
          this.kill(r || {});
        }),
        e
      );
    })(),
    Bm = (function () {
      function e(n) {
        (this.contexts = []), (this.scope = n), me && me.data.push(this);
      }
      var t = e.prototype;
      return (
        (t.add = function (r, i, s) {
          on(r) || (r = { matches: r });
          var a = new Dc(0, s || this.scope),
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
                  (dr.indexOf(a) < 0 && dr.push(a),
                  (o[c] = l.matches) && (u = 1),
                  l.addListener
                    ? l.addListener(mo)
                    : l.addEventListener("change", mo)));
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
    Ns = {
      registerPlugin: function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        n.forEach(function (i) {
          return yc(i);
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
        var s = lr(t || {}).get,
          a = r ? tc : ec;
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
        if (((t = Vt(t)), t.length > 1)) {
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
          o = lr(t),
          l = (o.harness && (o.harness.aliases || {})[n]) || n,
          c = a
            ? function (u) {
                var f = new a();
                (Jr._pt = 0),
                  f.init(t, r ? u + r : u, Jr, 0, [t]),
                  f.render(1, f),
                  Jr._pt && ho(1, Jr);
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
        return t && t.ease && (t.ease = ur(t.ease, jr.ease)), nc(jr, t || {});
      },
      config: function (t) {
        return nc(Mt, t || {});
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
            $i(n + " effect requires " + o + " plugin.")
          );
        }),
          (Ua[n] = function (o, l, c) {
            return r(Vt(o), At(l || {}, s), c);
          }),
          a &&
            (ft.prototype[n] = function (o, l, c) {
              return this.add(Ua[n](o, on(l) ? l : (c = l) && {}, this), c);
            });
      },
      registerEase: function (t, n) {
        ne[t] = ur(n);
      },
      parseEase: function (t, n) {
        return arguments.length ? ur(t, n) : ne;
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
              cn(r, i, i._start - i._delay),
            (i = s);
        return cn(ye, r, 0), r;
      },
      context: function (t, n) {
        return t ? new Dc(t, n) : me;
      },
      matchMedia: function (t) {
        return new Bm(t);
      },
      matchMediaRefresh: function () {
        return (
          dr.forEach(function (t) {
            var n = t.conditions,
              r,
              i;
            for (i in n) n[i] && ((n[i] = !1), (r = 1));
            r && t.revert();
          }) || mo()
        );
      },
      addEventListener: function (t, n) {
        var r = Rs[t] || (Rs[t] = []);
        ~r.indexOf(n) || r.push(n);
      },
      removeEventListener: function (t, n) {
        var r = Rs[t],
          i = r && r.indexOf(n);
        i >= 0 && r.splice(i, 1);
      },
      utils: {
        wrap: _m,
        wrapYoyo: xm,
        distribute: fc,
        random: hc,
        snap: dc,
        normalize: bm,
        getUnit: rt,
        clamp: mm,
        splitColor: bc,
        toArray: Vt,
        selector: no,
        mapRange: mc,
        pipe: vm,
        unitize: ym,
        interpolate: Sm,
        shuffle: uc,
      },
      install: Gl,
      effects: Ua,
      ticker: It,
      updateRoot: ft.updateRoot,
      plugins: Ot,
      globalTimeline: ye,
      core: {
        PropTween: St,
        globals: Ul,
        Tween: Oe,
        Timeline: ft,
        Animation: Fi,
        getCache: lr,
        _removeLinkedListItem: Ls,
        reverting: function () {
          return Ke;
        },
        context: function (t) {
          return t && me && (me.data.push(t), (t._ctx = me)), me;
        },
        suppressOverwrites: function (t) {
          return (Na = t);
        },
      },
    };
  xt("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
    return (Ns[e] = Oe[e]);
  }),
    It.add(ft.updateRoot),
    (Jr = Ns.to({}, { duration: 0 }));
  var Wm = function (t, n) {
      for (var r = t._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
        r = r._next;
      return r;
    },
    Vm = function (t, n) {
      var r = t._targets,
        i,
        s,
        a;
      for (i in n)
        for (s = r.length; s--; )
          (a = t._ptLookup[s][i]),
            a &&
              (a = a.d) &&
              (a._pt && (a = Wm(a, i)),
              a && a.modifier && a.modifier(n[i], t, r[s], i));
    },
    go = function (t, n) {
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
            Vm(o, s);
          };
        },
      };
    },
    Tt =
      Ns.registerPlugin(
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
        go("roundProps", ro),
        go("modifiers"),
        go("snap", dc)
      ) || Ns;
  (Oe.version = ft.version = Tt.version = "3.13.0"),
    (jl = 1),
    qa() && ei(),
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
   */ var zc,
    Wn,
    ti,
    vo,
    hr,
    Rc,
    yo,
    Ym = function () {
      return typeof window != "undefined";
    },
    wn = {},
    pr = 180 / Math.PI,
    ni = Math.PI / 180,
    ri = Math.atan2,
    Nc = 1e8,
    bo = /([A-Z])/g,
    Xm = /(left|right|width|margin|padding|x)/i,
    jm = /[\s,\(]\S/,
    un = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    _o = function (t, n) {
      return n.set(n.t, n.p, Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u, n);
    },
    Gm = function (t, n) {
      return n.set(
        n.t,
        n.p,
        t === 1 ? n.e : Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u,
        n
      );
    },
    Um = function (t, n) {
      return n.set(
        n.t,
        n.p,
        t ? Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u : n.b,
        n
      );
    },
    Km = function (t, n) {
      var r = n.s + n.c * t;
      n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
    },
    Fc = function (t, n) {
      return n.set(n.t, n.p, t ? n.e : n.b, n);
    },
    Hc = function (t, n) {
      return n.set(n.t, n.p, t !== 1 ? n.b : n.e, n);
    },
    Qm = function (t, n, r) {
      return (t.style[n] = r);
    },
    Zm = function (t, n, r) {
      return t.style.setProperty(n, r);
    },
    Jm = function (t, n, r) {
      return (t._gsap[n] = r);
    },
    eg = function (t, n, r) {
      return (t._gsap.scaleX = t._gsap.scaleY = r);
    },
    tg = function (t, n, r, i, s) {
      var a = t._gsap;
      (a.scaleX = a.scaleY = r), a.renderTransform(s, a);
    },
    ng = function (t, n, r, i, s) {
      var a = t._gsap;
      (a[n] = r), a.renderTransform(s, a);
    },
    be = "transform",
    Et = be + "Origin",
    rg = function e(t, n) {
      var r = this,
        i = this.target,
        s = i.style,
        a = i._gsap;
      if (t in wn && s) {
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
        if (this.props.indexOf(be) >= 0) return;
        a.svg &&
          ((this.svgo = i.getAttribute("data-svg-origin")),
          this.props.push(Et, n, "")),
          (t = be);
      }
      (s || n) && this.props.push(t, n, s[t]);
    },
    qc = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    },
    ig = function () {
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
                : t[s].replace(bo, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (a in this.tfm) i[a] = this.tfm[a];
        i.svg &&
          (i.renderTransform(),
          n.setAttribute("data-svg-origin", this.svgo || "")),
          (s = yo()),
          (!s || !s.isStart) &&
            !r[be] &&
            (qc(r),
            i.zOrigin &&
              r[Et] &&
              ((r[Et] += " " + i.zOrigin + "px"),
              (i.zOrigin = 0),
              i.renderTransform()),
            (i.uncache = 1));
      }
    },
    Bc = function (t, n) {
      var r = { target: t, props: [], revert: ig, save: rg };
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
    Wc,
    xo = function (t, n) {
      var r = Wn.createElementNS
        ? Wn.createElementNS(
            (n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : Wn.createElement(t);
      return r && r.style ? r : Wn.createElement(t);
    },
    Yt = function e(t, n, r) {
      var i = getComputedStyle(t);
      return (
        i[n] ||
        i.getPropertyValue(n.replace(bo, "-$1").toLowerCase()) ||
        i.getPropertyValue(n) ||
        (!r && e(t, ii(n) || n, 1)) ||
        ""
      );
    },
    Vc = "O,Moz,ms,Ms,Webkit".split(","),
    ii = function (t, n, r) {
      var i = n || hr,
        s = i.style,
        a = 5;
      if (t in s && !r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        a-- && !(Vc[a] + t in s);

      );
      return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? Vc[a] : "") + t;
    },
    So = function () {
      Ym() &&
        window.document &&
        ((zc = window),
        (Wn = zc.document),
        (ti = Wn.documentElement),
        (hr = xo("div") || { style: {} }),
        xo("div"),
        (be = ii(be)),
        (Et = be + "Origin"),
        (hr.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Wc = !!ii("perspective")),
        (yo = Tt.core.reverting),
        (vo = 1));
    },
    Yc = function (t) {
      var n = t.ownerSVGElement,
        r = xo(
          "svg",
          (n && n.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        i = t.cloneNode(!0),
        s;
      (i.style.display = "block"), r.appendChild(i), ti.appendChild(r);
      try {
        s = i.getBBox();
      } catch (a) {}
      return r.removeChild(i), ti.removeChild(r), s;
    },
    Xc = function (t, n) {
      for (var r = n.length; r--; )
        if (t.hasAttribute(n[r])) return t.getAttribute(n[r]);
    },
    jc = function (t) {
      var n, r;
      try {
        n = t.getBBox();
      } catch (i) {
        (n = Yc(t)), (r = 1);
      }
      return (
        (n && (n.width || n.height)) || r || (n = Yc(t)),
        n && !n.width && !n.x && !n.y
          ? {
              x: +Xc(t, ["x", "cx", "x1"]) || 0,
              y: +Xc(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : n
      );
    },
    Gc = function (t) {
      return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && jc(t));
    },
    mr = function (t, n) {
      if (n) {
        var r = t.style,
          i;
        n in wn && n !== Et && (n = be),
          r.removeProperty
            ? ((i = n.substr(0, 2)),
              (i === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
              r.removeProperty(
                i === "--" ? n : n.replace(bo, "-$1").toLowerCase()
              ))
            : r.removeAttribute(n);
      }
    },
    Vn = function (t, n, r, i, s, a) {
      var o = new St(t._pt, n, r, 0, 1, a ? Hc : Fc);
      return (t._pt = o), (o.b = i), (o.e = s), t._props.push(r), o;
    },
    Uc = { deg: 1, rad: 1, turn: 1 },
    sg = { grid: 1, flex: 1 },
    Yn = function e(t, n, r, i) {
      var s = parseFloat(r) || 0,
        a = (r + "").trim().substr((s + "").length) || "px",
        o = hr.style,
        l = Xm.test(n),
        c = t.tagName.toLowerCase() === "svg",
        u = (c ? "client" : "offset") + (l ? "Width" : "Height"),
        f = 100,
        d = i === "px",
        h = i === "%",
        m,
        p,
        g,
        y;
      if (i === a || !s || Uc[i] || Uc[a]) return s;
      if (
        (a !== "px" && !d && (s = e(t, n, r, "px")),
        (y = t.getCTM && Gc(t)),
        (h || a === "%") && (wn[n] || ~n.indexOf("adius")))
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
        (!p || p === Wn || !p.appendChild) && (p = Wn.body),
        (g = p._gsap),
        g && h && g.width && l && g.time === It.time && !g.uncache)
      )
        return we((s / g.width) * f);
      if (h && (n === "height" || n === "width")) {
        var v = t.style[n];
        (t.style[n] = f + i), (m = t[u]), v ? (t.style[n] = v) : mr(t, n);
      } else
        (h || a === "%") &&
          !sg[Yt(p, "display")] &&
          (o.position = Yt(t, "position")),
          p === t && (o.position = "static"),
          p.appendChild(hr),
          (m = hr[u]),
          p.removeChild(hr),
          (o.position = "absolute");
      return (
        l && h && ((g = lr(p)), (g.time = It.time), (g.width = p[u])),
        we(d ? (m * s) / f : m && s ? (f / m) * s : 0)
      );
    },
    Cn = function (t, n, r, i) {
      var s;
      return (
        vo || So(),
        n in un &&
          n !== "transform" &&
          ((n = un[n]), ~n.indexOf(",") && (n = n.split(",")[0])),
        wn[n] && n !== "transform"
          ? ((s = Bi(t, i)),
            (s =
              n !== "transformOrigin"
                ? s[n]
                : s.svg
                ? s.origin
                : Hs(Yt(t, Et)) + " " + s.zOrigin + "px"))
          : ((s = t.style[n]),
            (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) &&
              (s =
                (Fs[n] && Fs[n](t, n, r)) ||
                Yt(t, n) ||
                Zl(t, n) ||
                (n === "opacity" ? 1 : 0))),
        r && !~(s + "").trim().indexOf(" ") ? Yn(t, n, s, r) + r : s
      );
    },
    ag = function (t, n, r, i) {
      if (!r || r === "none") {
        var s = ii(n, t, 1),
          a = s && Yt(t, s, 1);
        a && a !== r
          ? ((n = s), (r = a))
          : n === "borderColor" && (r = Yt(t, "borderTopColor"));
      }
      var o = new St(this._pt, t.style, n, 0, 1, Ac),
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
        b,
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
          ((p = t.style[n]),
          (t.style[n] = i),
          (i = Yt(t, n) || i),
          p ? (t.style[n] = p) : mr(t, n)),
        (u = [r, i]),
        Sc(u),
        (r = u[0]),
        (i = u[1]),
        (d = r.match(Gr) || []),
        (S = i.match(Gr) || []),
        S.length)
      ) {
        for (; (f = Gr.exec(i)); )
          (g = f[0]),
            (v = i.substring(l, f.index)),
            m
              ? (m = (m + 1) % 5)
              : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") &&
                (m = 1),
            g !== (p = d[c++] || "") &&
              ((h = parseFloat(p) || 0),
              (x = p.substr((h + "").length)),
              g.charAt(1) === "=" && (g = Ur(h, g) + x),
              (y = parseFloat(g)),
              (b = g.substr((y + "").length)),
              (l = Gr.lastIndex - b.length),
              b ||
                ((b = b || Mt.units[n] || x),
                l === i.length && ((i += b), (o.e += b))),
              x !== b && (h = Yn(t, n, p, b) || 0),
              (o._pt = {
                _next: o._pt,
                p: v || c === 1 ? v : ",",
                s: h,
                c: y - h,
                m: (m && m < 4) || n === "zIndex" ? Math.round : 0,
              }));
        o.c = l < i.length ? i.substring(l, i.length) : "";
      } else o.r = n === "display" && i === "none" ? Hc : Fc;
      return Yl.test(i) && (o.e = 0), (this._pt = o), o;
    },
    Kc = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    og = function (t) {
      var n = t.split(" "),
        r = n[0],
        i = n[1] || "50%";
      return (
        (r === "top" || r === "bottom" || i === "left" || i === "right") &&
          ((t = r), (r = i), (i = t)),
        (n[0] = Kc[r] || r),
        (n[1] = Kc[i] || i),
        n.join(" ")
      );
    },
    lg = function (t, n) {
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
              wn[o] && ((l = 1), (o = o === "transformOrigin" ? Et : be)),
              mr(r, o);
        l &&
          (mr(r, be),
          a &&
            (a.svg && r.removeAttribute("transform"),
            (i.scale = i.rotate = i.translate = "none"),
            Bi(r, 1),
            (a.uncache = 1),
            qc(i)));
      }
    },
    Fs = {
      clearProps: function (t, n, r, i, s) {
        if (s.data !== "isFromStart") {
          var a = (t._pt = new St(t._pt, n, r, 0, 0, lg));
          return (a.u = i), (a.pr = -10), (a.tween = s), t._props.push(r), 1;
        }
      },
    },
    qi = [1, 0, 0, 1, 0, 0],
    Qc = {},
    Zc = function (t) {
      return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
    },
    Jc = function (t) {
      var n = Yt(t, be);
      return Zc(n) ? qi : n.substr(7).match(Vl).map(we);
    },
    To = function (t, n) {
      var r = t._gsap || lr(t),
        i = t.style,
        s = Jc(t),
        a,
        o,
        l,
        c;
      return r.svg && t.getAttribute("transform")
        ? ((l = t.transform.baseVal.consolidate().matrix),
          (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
          s.join(",") === "1,0,0,1,0,0" ? qi : s)
        : (s === qi &&
            !t.offsetParent &&
            t !== ti &&
            !r.svg &&
            ((l = i.display),
            (i.display = "block"),
            (a = t.parentNode),
            (!a || (!t.offsetParent && !t.getBoundingClientRect().width)) &&
              ((c = 1), (o = t.nextElementSibling), ti.appendChild(t)),
            (s = Jc(t)),
            l ? (i.display = l) : mr(t, "display"),
            c &&
              (o
                ? a.insertBefore(t, o)
                : a
                ? a.appendChild(t)
                : ti.removeChild(t))),
          n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    Eo = function (t, n, r, i, s, a) {
      var o = t._gsap,
        l = s || To(t, !0),
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
        b = n.split(" "),
        x = parseFloat(b[0]) || 0,
        S = parseFloat(b[1]) || 0,
        w,
        C,
        P,
        A;
      r
        ? l !== qi &&
          (C = h * g - m * p) &&
          ((P = x * (g / C) + S * (-p / C) + (p * v - g * y) / C),
          (A = x * (-m / C) + S * (h / C) - (h * v - m * y) / C),
          (x = P),
          (S = A))
        : ((w = jc(t)),
          (x = w.x + (~b[0].indexOf("%") ? (x / 100) * w.width : x)),
          (S =
            w.y + (~(b[1] || b[0]).indexOf("%") ? (S / 100) * w.height : S))),
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
        (t.style[Et] = "0px 0px"),
        a &&
          (Vn(a, o, "xOrigin", c, x),
          Vn(a, o, "yOrigin", u, S),
          Vn(a, o, "xOffset", f, o.xOffset),
          Vn(a, o, "yOffset", d, o.yOffset)),
        t.setAttribute("data-svg-origin", x + " " + S);
    },
    Bi = function (t, n) {
      var r = t._gsap || new Cc(t);
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
        h,
        m,
        p,
        g,
        y,
        v,
        b,
        x,
        S,
        w,
        C,
        P,
        A,
        E,
        $,
        _,
        T,
        O,
        I,
        k,
        L,
        D,
        R,
        M,
        W,
        K,
        se,
        le,
        fe;
      return (
        (u = f = d = p = g = y = v = b = x = 0),
        (h = m = 1),
        (r.svg = !!(t.getCTM && Gc(t))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (i[be] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[be] !== "none" ? l[be] : "")),
          (i.scale = i.rotate = i.translate = "none")),
        (C = To(t, r.svg)),
        r.svg &&
          (r.uncache
            ? ((D = t.getBBox()),
              (c = r.xOrigin - D.x + "px " + (r.yOrigin - D.y) + "px"),
              (L = ""))
            : (L = !n && t.getAttribute("data-svg-origin")),
          Eo(t, L || c, !!L || r.originIsAbsolute, r.smooth !== !1, C)),
        (S = r.xOrigin || 0),
        (w = r.yOrigin || 0),
        C !== qi &&
          (($ = C[0]),
          (_ = C[1]),
          (T = C[2]),
          (O = C[3]),
          (u = I = C[4]),
          (f = k = C[5]),
          C.length === 6
            ? ((h = Math.sqrt($ * $ + _ * _)),
              (m = Math.sqrt(O * O + T * T)),
              (p = $ || _ ? ri(_, $) * pr : 0),
              (v = T || O ? ri(T, O) * pr + p : 0),
              v && (m *= Math.abs(Math.cos(v * ni))),
              r.svg && ((u -= S - (S * $ + w * T)), (f -= w - (S * _ + w * O))))
            : ((fe = C[6]),
              (se = C[7]),
              (M = C[8]),
              (W = C[9]),
              (K = C[10]),
              (le = C[11]),
              (u = C[12]),
              (f = C[13]),
              (d = C[14]),
              (P = ri(fe, K)),
              (g = P * pr),
              P &&
                ((A = Math.cos(-P)),
                (E = Math.sin(-P)),
                (L = I * A + M * E),
                (D = k * A + W * E),
                (R = fe * A + K * E),
                (M = I * -E + M * A),
                (W = k * -E + W * A),
                (K = fe * -E + K * A),
                (le = se * -E + le * A),
                (I = L),
                (k = D),
                (fe = R)),
              (P = ri(-T, K)),
              (y = P * pr),
              P &&
                ((A = Math.cos(-P)),
                (E = Math.sin(-P)),
                (L = $ * A - M * E),
                (D = _ * A - W * E),
                (R = T * A - K * E),
                (le = O * E + le * A),
                ($ = L),
                (_ = D),
                (T = R)),
              (P = ri(_, $)),
              (p = P * pr),
              P &&
                ((A = Math.cos(P)),
                (E = Math.sin(P)),
                (L = $ * A + _ * E),
                (D = I * A + k * E),
                (_ = _ * A - $ * E),
                (k = k * A - I * E),
                ($ = L),
                (I = D)),
              g &&
                Math.abs(g) + Math.abs(p) > 359.9 &&
                ((g = p = 0), (y = 180 - y)),
              (h = we(Math.sqrt($ * $ + _ * _ + T * T))),
              (m = we(Math.sqrt(k * k + fe * fe))),
              (P = ri(I, k)),
              (v = Math.abs(P) > 2e-4 ? P * pr : 0),
              (x = le ? 1 / (le < 0 ? -le : le) : 0)),
          r.svg &&
            ((L = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !Zc(Yt(t, be))),
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
        (r.skewY = b + o),
        (r.transformPerspective = x + a),
        (r.zOrigin = parseFloat(c.split(" ")[2]) || (!n && r.zOrigin) || 0) &&
          (i[Et] = Hs(c)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = Mt.force3D),
        (r.renderTransform = r.svg ? ug : Wc ? eu : cg),
        (r.uncache = 0),
        r
      );
    },
    Hs = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    wo = function (t, n, r) {
      var i = rt(n);
      return we(parseFloat(n) + parseFloat(Yn(t, "x", r + "px", i))) + i;
    },
    cg = function (t, n) {
      (n.z = "0px"),
        (n.rotationY = n.rotationX = "0deg"),
        (n.force3D = 0),
        eu(t, n);
    },
    gr = "0deg",
    Wi = "0px",
    vr = ") ",
    eu = function (t, n) {
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
        b = r.zOrigin,
        x = "",
        S = (y === "auto" && t && t !== 1) || y === !0;
      if (b && (f !== gr || u !== gr)) {
        var w = parseFloat(u) * ni,
          C = Math.sin(w),
          P = Math.cos(w),
          A;
        (w = parseFloat(f) * ni),
          (A = Math.cos(w)),
          (a = wo(v, a, C * A * -b)),
          (o = wo(v, o, -Math.sin(w) * -b)),
          (l = wo(v, l, P * A * -b + b));
      }
      g !== Wi && (x += "perspective(" + g + vr),
        (i || s) && (x += "translate(" + i + "%, " + s + "%) "),
        (S || a !== Wi || o !== Wi || l !== Wi) &&
          (x +=
            l !== Wi || S
              ? "translate3d(" + a + ", " + o + ", " + l + ") "
              : "translate(" + a + ", " + o + vr),
        c !== gr && (x += "rotate(" + c + vr),
        u !== gr && (x += "rotateY(" + u + vr),
        f !== gr && (x += "rotateX(" + f + vr),
        (d !== gr || h !== gr) && (x += "skew(" + d + ", " + h + vr),
        (m !== 1 || p !== 1) && (x += "scale(" + m + ", " + p + vr),
        (v.style[be] = x || "translate(0, 0)");
    },
    ug = function (t, n) {
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
        b = parseFloat(a),
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
          ? ((l *= ni),
            (c *= ni),
            (S = Math.cos(l) * f),
            (w = Math.sin(l) * f),
            (C = Math.sin(l - c) * -d),
            (P = Math.cos(l - c) * d),
            c &&
              ((u *= ni),
              (A = Math.tan(c - u)),
              (A = Math.sqrt(1 + A * A)),
              (C *= A),
              (P *= A),
              u &&
                ((A = Math.tan(u)),
                (A = Math.sqrt(1 + A * A)),
                (S *= A),
                (w *= A))),
            (S = we(S)),
            (w = we(w)),
            (C = we(C)),
            (P = we(P)))
          : ((S = f), (P = d), (w = C = 0)),
        ((b && !~(a + "").indexOf("px")) || (x && !~(o + "").indexOf("px"))) &&
          ((b = Yn(h, "x", a, "px")), (x = Yn(h, "y", o, "px"))),
        (m || p || g || y) &&
          ((b = we(b + m - (m * S + p * C) + g)),
          (x = we(x + p - (m * w + p * P) + y))),
        (i || s) &&
          ((A = h.getBBox()),
          (b = we(b + (i / 100) * A.width)),
          (x = we(x + (s / 100) * A.height))),
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
          b +
          "," +
          x +
          ")"),
        h.setAttribute("transform", A),
        v && (h.style[be] = A);
    },
    fg = function (t, n, r, i, s) {
      var a = 360,
        o = Be(s),
        l = parseFloat(s) * (o && ~s.indexOf("rad") ? pr : 1),
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
            ? (c = ((c + a * Nc) % a) - ~~(c / a) * a)
            : f === "ccw" && c > 0 && (c = ((c - a * Nc) % a) - ~~(c / a) * a)),
        (t._pt = d = new St(t._pt, n, r, i, c, Gm)),
        (d.e = u),
        (d.u = "deg"),
        t._props.push(r),
        d
      );
    },
    tu = function (t, n) {
      for (var r in n) t[r] = n[r];
      return t;
    },
    dg = function (t, n, r) {
      var i = tu({}, r._gsap),
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
          (a[be] = n),
          (o = Bi(r, 1)),
          mr(r, be),
          r.setAttribute("transform", c))
        : ((c = getComputedStyle(r)[be]),
          (a[be] = n),
          (o = Bi(r, 1)),
          (a[be] = c));
      for (l in wn)
        (c = i[l]),
          (u = o[l]),
          c !== u &&
            s.indexOf(l) < 0 &&
            ((h = rt(c)),
            (m = rt(u)),
            (f = h !== m ? Yn(r, l, c, m) : parseFloat(c)),
            (d = parseFloat(u)),
            (t._pt = new St(t._pt, o, l, f, d - f, _o)),
            (t._pt.u = m || 0),
            t._props.push(l));
      tu(o, i);
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
    Fs[t > 1 ? "border" + e : e] = function (o, l, c, u, f) {
      var d, h;
      if (arguments.length < 4)
        return (
          (d = a.map(function (m) {
            return Cn(o, m, c);
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
  var nu = {
    name: "css",
    register: So,
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
        b,
        x,
        S,
        w,
        C,
        P;
      vo || So(),
        (this.styles = this.styles || Bc(t)),
        (P = this.styles.props),
        (this.tween = r);
      for (p in n)
        if (
          p !== "autoRound" &&
          ((u = n[p]), !(Ot[p] && Pc(p, n, r, i, t, s)))
        ) {
          if (
            ((h = typeof u),
            (m = Fs[p]),
            h === "function" && ((u = u.call(r, i, t, s)), (h = typeof u)),
            h === "string" && ~u.indexOf("random(") && (u = Di(u)),
            m)
          )
            m(this, t, p, u, r) && (C = 1);
          else if (p.substr(0, 2) === "--")
            (c = (getComputedStyle(t).getPropertyValue(p) + "").trim()),
              (u += ""),
              (qn.lastIndex = 0),
              qn.test(c) || ((g = rt(c)), (y = rt(u))),
              y ? g !== y && (c = Yn(t, p, c, y) + y) : g && (u += g),
              this.add(o, "setProperty", c, u, i, s, 0, 0, p),
              a.push(p),
              P.push(p, 0, o[p]);
          else if (h !== "undefined") {
            if (
              (l && p in l
                ? ((c =
                    typeof l[p] == "function" ? l[p].call(r, i, t, s) : l[p]),
                  Be(c) && ~c.indexOf("random(") && (c = Di(c)),
                  rt(c + "") ||
                    c === "auto" ||
                    (c += Mt.units[p] || rt(Cn(t, p)) || ""),
                  (c + "").charAt(1) === "=" && (c = Cn(t, p)))
                : (c = Cn(t, p)),
              (d = parseFloat(c)),
              (v = h === "string" && u.charAt(1) === "=" && u.substr(0, 2)),
              v && (u = u.substr(2)),
              (f = parseFloat(u)),
              p in un &&
                (p === "autoAlpha" &&
                  (d === 1 && Cn(t, "visibility") === "hidden" && f && (d = 0),
                  P.push("visibility", 0, o.visibility),
                  Vn(
                    this,
                    o,
                    "visibility",
                    d ? "inherit" : "hidden",
                    f ? "inherit" : "hidden",
                    !f
                  )),
                p !== "scale" &&
                  p !== "transform" &&
                  ((p = un[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
              (b = p in wn),
              b)
            ) {
              if (
                (this.styles.save(p),
                h === "string" &&
                  u.substring(0, 6) === "var(--" &&
                  ((u = Yt(t, u.substring(4, u.indexOf(")")))),
                  (f = parseFloat(u))),
                x ||
                  ((S = t._gsap),
                  (S.renderTransform && !n.parseTransform) ||
                    Bi(t, n.parseTransform),
                  (w = n.smoothOrigin !== !1 && S.smooth),
                  (x = this._pt =
                    new St(this._pt, o, be, 0, 1, S.renderTransform, S, 0, -1)),
                  (x.dep = 1)),
                p === "scale")
              )
                (this._pt = new St(
                  this._pt,
                  S,
                  "scaleY",
                  S.scaleY,
                  (v ? Ur(S.scaleY, v + f) : f) - S.scaleY || 0,
                  _o
                )),
                  (this._pt.u = 0),
                  a.push("scaleY", p),
                  (p += "X");
              else if (p === "transformOrigin") {
                P.push(Et, 0, o[Et]),
                  (u = og(u)),
                  S.svg
                    ? Eo(t, u, 0, w, 0, this)
                    : ((y = parseFloat(u.split(" ")[2]) || 0),
                      y !== S.zOrigin && Vn(this, S, "zOrigin", S.zOrigin, y),
                      Vn(this, o, p, Hs(c), Hs(u)));
                continue;
              } else if (p === "svgOrigin") {
                Eo(t, u, 1, w, 0, this);
                continue;
              } else if (p in Qc) {
                fg(this, S, p, d, v ? Ur(d, v + u) : u);
                continue;
              } else if (p === "smoothOrigin") {
                Vn(this, S, "smooth", S.smooth, u);
                continue;
              } else if (p === "force3D") {
                S[p] = u;
                continue;
              } else if (p === "transform") {
                dg(this, u, t);
                continue;
              }
            } else p in o || (p = ii(p) || p);
            if (
              b ||
              ((f || f === 0) && (d || d === 0) && !jm.test(u) && p in o)
            )
              (g = (c + "").substr((d + "").length)),
                f || (f = 0),
                (y = rt(u) || (p in Mt.units ? Mt.units[p] : g)),
                g !== y && (d = Yn(t, p, c, y)),
                (this._pt = new St(
                  this._pt,
                  b ? S : o,
                  p,
                  d,
                  (v ? Ur(d, v + f) : f) - d,
                  !b && (y === "px" || p === "zIndex") && n.autoRound !== !1
                    ? Km
                    : _o
                )),
                (this._pt.u = y || 0),
                g !== y && y !== "%" && ((this._pt.b = c), (this._pt.r = Um));
            else if (p in o) ag.call(this, t, p, c, v ? v + u : u);
            else if (p in t) this.add(t, p, c || t[p], v ? v + u : u, i, s);
            else if (p !== "parseTransform") {
              Xa(p, u);
              continue;
            }
            b ||
              (p in o
                ? P.push(p, 0, o[p])
                : typeof t[p] == "function"
                ? P.push(p, 2, t[p]())
                : P.push(p, 1, c || t[p])),
              a.push(p);
          }
        }
      C && Lc(this);
    },
    render: function (t, n) {
      if (n.tween._time || !yo())
        for (var r = n._pt; r; ) r.r(t, r.d), (r = r._next);
      else n.styles.revert();
    },
    get: Cn,
    aliases: un,
    getSetter: function (t, n, r) {
      var i = un[n];
      return (
        i && i.indexOf(",") < 0 && (n = i),
        n in wn && n !== Et && (t._gsap.x || Cn(t, "x"))
          ? r && Rc === r
            ? n === "scale"
              ? eg
              : Jm
            : (Rc = r || {}) && (n === "scale" ? tg : ng)
          : t.style && !Ha(t.style[n])
          ? Qm
          : ~n.indexOf("-")
          ? Zm
          : fo(t, n)
      );
    },
    core: { _removeProperty: mr, _getMatrix: To },
  };
  (Tt.utils.checkPrefix = ii),
    (Tt.core.getStyleSaver = Bc),
    (function (e, t, n, r) {
      var i = xt(e + "," + t + "," + n, function (s) {
        wn[s] = 1;
      });
      xt(t, function (s) {
        (Mt.units[s] = "deg"), (Qc[s] = 1);
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
    Tt.registerPlugin(nu);
  var F = Tt.registerPlugin(nu) || Tt;
  F.core.Tween;
  function hg(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function pg(e, t, n) {
    return t && hg(e.prototype, t), e;
  }
  /*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Qe,
    qs,
    Dt,
    Xn,
    jn,
    si,
    ru,
    yr,
    Vi,
    iu,
    Pn,
    Kt,
    su,
    au = function () {
      return (
        Qe ||
        (typeof window != "undefined" &&
          (Qe = window.gsap) &&
          Qe.registerPlugin &&
          Qe)
      );
    },
    ou = 1,
    ai = [],
    Z = [],
    fn = [],
    Yi = Date.now,
    Co = function (t, n) {
      return n;
    },
    mg = function () {
      var t = Vi.core,
        n = t.bridge || {},
        r = t._scrollers,
        i = t._proxies;
      r.push.apply(r, Z),
        i.push.apply(i, fn),
        (Z = r),
        (fn = i),
        (Co = function (a, o) {
          return n[a](o);
        });
    },
    Gn = function (t, n) {
      return ~fn.indexOf(t) && fn[fn.indexOf(t) + 1][n];
    },
    Xi = function (t) {
      return !!~iu.indexOf(t);
    },
    dt = function (t, n, r, i, s) {
      return t.addEventListener(n, r, { passive: i !== !1, capture: !!s });
    },
    ht = function (t, n, r, i) {
      return t.removeEventListener(n, r, !!i);
    },
    Bs = "scrollLeft",
    Ws = "scrollTop",
    Po = function () {
      return (Pn && Pn.isPressed) || Z.cache++;
    },
    Vs = function (t, n) {
      var r = function i(s) {
        if (s || s === 0) {
          ou && (Dt.history.scrollRestoration = "manual");
          var a = Pn && Pn.isPressed;
          (s = i.v = Math.round(s) || (Pn && Pn.iOS ? 1 : 0)),
            t(s),
            (i.cacheID = Z.cache),
            a && Co("ss", s);
        } else
          (n || Z.cache !== i.cacheID || Co("ref")) &&
            ((i.cacheID = Z.cache), (i.v = t()));
        return i.v + i.offset;
      };
      return (r.offset = 0), t && r;
    },
    pt = {
      s: Bs,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: Vs(function (e) {
        return arguments.length
          ? Dt.scrollTo(e, Re.sc())
          : Dt.pageXOffset || Xn[Bs] || jn[Bs] || si[Bs] || 0;
      }),
    },
    Re = {
      s: Ws,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: pt,
      sc: Vs(function (e) {
        return arguments.length
          ? Dt.scrollTo(pt.sc(), e)
          : Dt.pageYOffset || Xn[Ws] || jn[Ws] || si[Ws] || 0;
      }),
    },
    wt = function (t, n) {
      return (
        ((n && n._ctx && n._ctx.selector) || Qe.utils.toArray)(t)[0] ||
        (typeof t == "string" && Qe.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", t)
          : null)
      );
    },
    gg = function (t, n) {
      for (var r = n.length; r--; )
        if (n[r] === t || n[r].contains(t)) return !0;
      return !1;
    },
    Un = function (t, n) {
      var r = n.s,
        i = n.sc;
      Xi(t) && (t = Xn.scrollingElement || jn);
      var s = Z.indexOf(t),
        a = i === Re.sc ? 1 : 2;
      !~s && (s = Z.push(t) - 1), Z[s + a] || dt(t, "scroll", Po);
      var o = Z[s + a],
        l =
          o ||
          (Z[s + a] =
            Vs(Gn(t, r), !0) ||
            (Xi(t)
              ? i
              : Vs(function (c) {
                  return arguments.length ? (t[r] = c) : t[r];
                })));
      return (
        (l.target = t),
        o || (l.smooth = Qe.getProperty(t, "scrollBehavior") === "smooth"),
        l
      );
    },
    ko = function (t, n, r) {
      var i = t,
        s = t,
        a = Yi(),
        o = a,
        l = n || 50,
        c = Math.max(500, l * 3),
        u = function (m, p) {
          var g = Yi();
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
            y = Yi();
          return (
            (m || m === 0) && m !== i && u(m),
            a === o || y - o > c
              ? 0
              : ((i + (r ? g : -g)) / ((r ? y : a) - p)) * 1e3
          );
        };
      return { update: u, reset: f, getVelocity: d };
    },
    ji = function (t, n) {
      return (
        n && !t._gsapAllow && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
      );
    },
    lu = function (t) {
      var n = Math.max.apply(Math, t),
        r = Math.min.apply(Math, t);
      return Math.abs(n) >= Math.abs(r) ? n : r;
    },
    cu = function () {
      (Vi = Qe.core.globals().ScrollTrigger), Vi && Vi.core && mg();
    },
    uu = function (t) {
      return (
        (Qe = t || au()),
        !qs &&
          Qe &&
          typeof document != "undefined" &&
          document.body &&
          ((Dt = window),
          (Xn = document),
          (jn = Xn.documentElement),
          (si = Xn.body),
          (iu = [Dt, Xn, jn, si]),
          Qe.utils.clamp,
          (su = Qe.core.context || function () {}),
          (yr = "onpointerenter" in si ? "pointer" : "mouse"),
          (ru = Ce.isTouch =
            Dt.matchMedia &&
            Dt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Dt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (Kt = Ce.eventTypes =
            (
              "ontouchstart" in jn
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in jn
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (ou = 0);
          }, 500),
          cu(),
          (qs = 1)),
        qs
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
        qs || uu(Qe) || console.warn("Please gsap.registerPlugin(Observer)"),
          Vi || cu();
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
          b = r.onPress,
          x = r.onRelease,
          S = r.onRight,
          w = r.onLeft,
          C = r.onUp,
          P = r.onDown,
          A = r.onChangeX,
          E = r.onChangeY,
          $ = r.onChange,
          _ = r.onToggleX,
          T = r.onToggleY,
          O = r.onHover,
          I = r.onHoverEnd,
          k = r.onMove,
          L = r.ignoreCheck,
          D = r.isNormalizer,
          R = r.onGestureStart,
          M = r.onGestureEnd,
          W = r.onWheel,
          K = r.onEnable,
          se = r.onDisable,
          le = r.onClick,
          fe = r.scrollSpeed,
          ge = r.capture,
          _e = r.allowClicks,
          Ye = r.lockAxis,
          Fe = r.onLockAxis;
        (this.target = o = wt(o) || jn),
          (this.vars = r),
          h && (h = Qe.utils.toArray(h)),
          (i = i || 1e-9),
          (s = s || 0),
          (m = m || 1),
          (fe = fe || 1),
          (a = a || "wheel,touch,pointer"),
          (c = c !== !1),
          l || (l = parseFloat(Dt.getComputedStyle(si).lineHeight) || 22);
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
          tr = r.passive || (!u && r.passive !== !1),
          Te = Un(o, pt),
          An = Un(o, Re),
          nr = Te(),
          Rr = An(),
          je =
            ~a.indexOf("touch") &&
            !~a.indexOf("pointer") &&
            Kt[0] === "pointerdown",
          rr = Xi(o),
          Pe = o.ownerDocument || Xn,
          Jt = [0, 0, 0],
          Ut = [0, 0, 0],
          Ln = 0,
          ps = function () {
            return (Ln = Yi());
          },
          De = function (Y, ae) {
            return (
              ((z.event = Y) && h && gg(Y.target, h)) ||
              (ae && je && Y.pointerType !== "touch") ||
              (L && L(Y, ae))
            );
          },
          Sa = function () {
            z._vx.reset(), z._vy.reset(), Ie.pause(), f && f(z);
          },
          In = function () {
            var Y = (z.deltaX = lu(Jt)),
              ae = (z.deltaY = lu(Ut)),
              H = Math.abs(Y) >= i,
              j = Math.abs(ae) >= i;
            $ && (H || j) && $(z, Y, ae, Jt, Ut),
              H &&
                (S && z.deltaX > 0 && S(z),
                w && z.deltaX < 0 && w(z),
                A && A(z),
                _ && z.deltaX < 0 != Ft < 0 && _(z),
                (Ft = z.deltaX),
                (Jt[0] = Jt[1] = Jt[2] = 0)),
              j &&
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
              pe && (W(z), (pe = !1)),
              (Zt = 0);
          },
          bi = function (Y, ae, H) {
            (Jt[H] += Y),
              (Ut[H] += ae),
              z._vx.update(Y),
              z._vy.update(ae),
              c ? Zt || (Zt = requestAnimationFrame(In)) : In();
          },
          _i = function (Y, ae) {
            Ye &&
              !Ze &&
              ((z.axis = Ze = Math.abs(Y) > Math.abs(ae) ? "x" : "y"),
              (Xe = !0)),
              Ze !== "y" && ((Jt[2] += Y), z._vx.update(Y, !0)),
              Ze !== "x" && ((Ut[2] += ae), z._vy.update(ae, !0)),
              c ? Zt || (Zt = requestAnimationFrame(In)) : In();
          },
          ir = function (Y) {
            if (!De(Y, 1)) {
              Y = ji(Y, u);
              var ae = Y.clientX,
                H = Y.clientY,
                j = ae - z.x,
                V = H - z.y,
                G = z.isDragging;
              (z.x = ae),
                (z.y = H),
                (G ||
                  ((j || V) &&
                    (Math.abs(z.startX - ae) >= s ||
                      Math.abs(z.startY - H) >= s))) &&
                  ((He = G ? 2 : 1), G || (z.isDragging = !0), _i(j, V));
            }
          },
          Nr = (z.onPress = function (U) {
            De(U, 1) ||
              (U && U.button) ||
              ((z.axis = Ze = null),
              Ie.pause(),
              (z.isPressed = !0),
              (U = ji(U)),
              (Ft = On = 0),
              (z.startX = z.x = U.clientX),
              (z.startY = z.y = U.clientY),
              z._vx.reset(),
              z._vy.reset(),
              dt(D ? o : Pe, Kt[1], ir, tr, !0),
              (z.deltaX = z.deltaY = 0),
              b && b(z));
          }),
          te = (z.onRelease = function (U) {
            if (!De(U, 1)) {
              ht(D ? o : Pe, Kt[1], ir, !0);
              var Y = !isNaN(z.y - z.startY),
                ae = z.isDragging,
                H =
                  ae &&
                  (Math.abs(z.x - z.startX) > 3 ||
                    Math.abs(z.y - z.startY) > 3),
                j = ji(U);
              !H &&
                Y &&
                (z._vx.reset(),
                z._vy.reset(),
                u &&
                  _e &&
                  Qe.delayedCall(0.08, function () {
                    if (Yi() - Ln > 300 && !U.defaultPrevented) {
                      if (U.target.click) U.target.click();
                      else if (Pe.createEvent) {
                        var V = Pe.createEvent("MouseEvents");
                        V.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Dt,
                          1,
                          j.screenX,
                          j.screenY,
                          j.clientX,
                          j.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          U.target.dispatchEvent(V);
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
          Fr = function (Y) {
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
              bi((ae - nr) * fe, (H - Rr) * fe, 1),
                (nr = ae),
                (Rr = H),
                f && Ie.restart(!0);
            }
          },
          nn = function (Y) {
            if (!De(Y)) {
              (Y = ji(Y, u)), W && (pe = !0);
              var ae =
                (Y.deltaMode === 1
                  ? l
                  : Y.deltaMode === 2
                  ? Dt.innerHeight
                  : 1) * m;
              bi(Y.deltaX * ae, Y.deltaY * ae, 0), f && !D && Ie.restart(!0);
            }
          },
          Hr = function (Y) {
            if (!De(Y)) {
              var ae = Y.clientX,
                H = Y.clientY,
                j = ae - z.x,
                V = H - z.y;
              (z.x = ae),
                (z.y = H),
                (ee = !0),
                f && Ie.restart(!0),
                (j || V) && _i(j, V);
            }
          },
          xi = function (Y) {
            (z.event = Y), O(z);
          },
          Dn = function (Y) {
            (z.event = Y), I(z);
          },
          ms = function (Y) {
            return De(Y) || (ji(Y, u) && le(z));
          };
        (Ie = z._dc = Qe.delayedCall(d || 0.25, Sa).pause()),
          (z.deltaX = z.deltaY = 0),
          (z._vx = ko(0, 50, !0)),
          (z._vy = ko(0, 50, !0)),
          (z.scrollX = Te),
          (z.scrollY = An),
          (z.isDragging = z.isGesturing = z.isPressed = !1),
          su(this),
          (z.enable = function (U) {
            return (
              z.isEnabled ||
                (dt(rr ? Pe : o, "scroll", Po),
                a.indexOf("scroll") >= 0 &&
                  dt(rr ? Pe : o, "scroll", tn, tr, ge),
                a.indexOf("wheel") >= 0 && dt(o, "wheel", nn, tr, ge),
                ((a.indexOf("touch") >= 0 && ru) ||
                  a.indexOf("pointer") >= 0) &&
                  (dt(o, Kt[0], Nr, tr, ge),
                  dt(Pe, Kt[2], te),
                  dt(Pe, Kt[3], te),
                  _e && dt(o, "click", ps, !0, !0),
                  le && dt(o, "click", ms),
                  R && dt(Pe, "gesturestart", Fr),
                  M && dt(Pe, "gestureend", en),
                  O && dt(o, yr + "enter", xi),
                  I && dt(o, yr + "leave", Dn),
                  k && dt(o, yr + "move", Hr)),
                (z.isEnabled = !0),
                (z.isDragging = z.isGesturing = z.isPressed = ee = He = !1),
                z._vx.reset(),
                z._vy.reset(),
                (nr = Te()),
                (Rr = An()),
                U && U.type && Nr(U),
                K && K(z)),
              z
            );
          }),
          (z.disable = function () {
            z.isEnabled &&
              (ai.filter(function (U) {
                return U !== z && Xi(U.target);
              }).length || ht(rr ? Pe : o, "scroll", Po),
              z.isPressed &&
                (z._vx.reset(), z._vy.reset(), ht(D ? o : Pe, Kt[1], ir, !0)),
              ht(rr ? Pe : o, "scroll", tn, ge),
              ht(o, "wheel", nn, ge),
              ht(o, Kt[0], Nr, ge),
              ht(Pe, Kt[2], te),
              ht(Pe, Kt[3], te),
              ht(o, "click", ps, !0),
              ht(o, "click", ms),
              ht(Pe, "gesturestart", Fr),
              ht(Pe, "gestureend", en),
              ht(o, yr + "enter", xi),
              ht(o, yr + "leave", Dn),
              ht(o, yr + "move", Hr),
              (z.isEnabled = z.isPressed = z.isDragging = !1),
              se && se(z));
          }),
          (z.kill = z.revert =
            function () {
              z.disable();
              var U = ai.indexOf(z);
              U >= 0 && ai.splice(U, 1), Pn === z && (Pn = 0);
            }),
          ai.push(z),
          D && Xi(o) && (Pn = z),
          z.enable(p);
      }),
      pg(e, [
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
    (Ce.register = uu),
    (Ce.getAll = function () {
      return ai.slice();
    }),
    (Ce.getById = function (e) {
      return ai.filter(function (t) {
        return t.vars.id === e;
      })[0];
    }),
    au() && Qe.registerPlugin(Ce);
  /*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var q,
    oi,
    J,
    he,
    zt,
    oe,
    Mo,
    Ys,
    Gi,
    Ui,
    Ki,
    Xs,
    it,
    js,
    $o,
    mt,
    fu,
    du,
    li,
    hu,
    Oo,
    pu,
    gt,
    Ao,
    mu,
    gu,
    Kn,
    Lo,
    Io,
    ci,
    Do,
    Gs,
    zo,
    Ro,
    Us = 1,
    st = Date.now,
    No = st(),
    Xt = 0,
    Qi = 0,
    vu = function (t, n, r) {
      var i = Rt(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
      return (r["_" + n + "Clamp"] = i), i ? t.substr(6, t.length - 7) : t;
    },
    yu = function (t, n) {
      return n && (!Rt(t) || t.substr(0, 6) !== "clamp(")
        ? "clamp(" + t + ")"
        : t;
    },
    vg = function e() {
      return Qi && requestAnimationFrame(e);
    },
    bu = function () {
      return (js = 1);
    },
    _u = function () {
      return (js = 0);
    },
    dn = function (t) {
      return t;
    },
    Zi = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    xu = function () {
      return typeof window != "undefined";
    },
    Su = function () {
      return q || (xu() && (q = window.gsap) && q.registerPlugin && q);
    },
    br = function (t) {
      return !!~Mo.indexOf(t);
    },
    Tu = function (t) {
      return (
        (t === "Height" ? Do : J["inner" + t]) ||
        zt["client" + t] ||
        oe["client" + t]
      );
    },
    Eu = function (t) {
      return (
        Gn(t, "getBoundingClientRect") ||
        (br(t)
          ? function () {
              return (la.width = J.innerWidth), (la.height = Do), la;
            }
          : function () {
              return kn(t);
            })
      );
    },
    yg = function (t, n, r) {
      var i = r.d,
        s = r.d2,
        a = r.a;
      return (a = Gn(t, "getBoundingClientRect"))
        ? function () {
            return a()[i];
          }
        : function () {
            return (n ? Tu(s) : t["client" + s]) || 0;
          };
    },
    bg = function (t, n) {
      return !n || ~fn.indexOf(t)
        ? Eu(t)
        : function () {
            return la;
          };
    },
    hn = function (t, n) {
      var r = n.s,
        i = n.d2,
        s = n.d,
        a = n.a;
      return Math.max(
        0,
        (r = "scroll" + i) && (a = Gn(t, r))
          ? a() - Eu(t)()[s]
          : br(t)
          ? (zt[r] || oe[r]) - Tu(i)
          : t[r] - t["offset" + i]
      );
    },
    Ks = function (t, n) {
      for (var r = 0; r < li.length; r += 3)
        (!n || ~n.indexOf(li[r + 1])) && t(li[r], li[r + 1], li[r + 2]);
    },
    Rt = function (t) {
      return typeof t == "string";
    },
    at = function (t) {
      return typeof t == "function";
    },
    Ji = function (t) {
      return typeof t == "number";
    },
    _r = function (t) {
      return typeof t == "object";
    },
    es = function (t, n, r) {
      return t && t.progress(n ? 0 : 1) && r && t.pause();
    },
    Fo = function (t, n) {
      if (t.enabled) {
        var r = t._ctx
          ? t._ctx.add(function () {
              return n(t);
            })
          : n(t);
        r && r.totalTime && (t.callbackAnimation = r);
      }
    },
    ui = Math.abs,
    wu = "left",
    Cu = "top",
    Ho = "right",
    qo = "bottom",
    xr = "width",
    Sr = "height",
    ts = "Right",
    ns = "Left",
    rs = "Top",
    is = "Bottom",
    Ae = "padding",
    jt = "margin",
    fi = "Width",
    Bo = "Height",
    Ne = "px",
    Gt = function (t) {
      return J.getComputedStyle(t);
    },
    _g = function (t) {
      var n = Gt(t).position;
      t.style.position = n === "absolute" || n === "fixed" ? n : "relative";
    },
    Pu = function (t, n) {
      for (var r in n) r in t || (t[r] = n[r]);
      return t;
    },
    kn = function (t, n) {
      var r =
          n &&
          Gt(t)[$o] !== "matrix(1, 0, 0, 1, 0, 0)" &&
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
    Qs = function (t, n) {
      var r = n.d2;
      return t["offset" + r] || t["client" + r] || 0;
    },
    ku = function (t) {
      var n = [],
        r = t.labels,
        i = t.duration(),
        s;
      for (s in r) n.push(r[s] / i);
      return n;
    },
    xg = function (t) {
      return function (n) {
        return q.utils.snap(ku(t), n);
      };
    },
    Wo = function (t) {
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
    Sg = function (t) {
      return function (n, r) {
        return Wo(ku(t))(n, r.direction);
      };
    },
    Zs = function (t, n, r, i) {
      return r.split(",").forEach(function (s) {
        return t(n, s, i);
      });
    },
    We = function (t, n, r, i, s) {
      return t.addEventListener(n, r, { passive: !i, capture: !!s });
    },
    Ve = function (t, n, r, i) {
      return t.removeEventListener(n, r, !!i);
    },
    Js = function (t, n, r) {
      (r = r && r.wheelHandler), r && (t(n, "wheel", r), t(n, "touchmove", r));
    },
    Mu = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    ea = { toggleActions: "play", anticipatePin: 0 },
    ta = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    na = function (t, n) {
      if (Rt(t)) {
        var r = t.indexOf("="),
          i = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
        ~r && (t.indexOf("%") > r && (i *= n / 100), (t = t.substr(0, r - 1))),
          (t =
            i +
            (t in ta
              ? ta[t] * n
              : ~t.indexOf("%")
              ? (parseFloat(t) * n) / 100
              : parseFloat(t) || 0));
      }
      return t;
    },
    ra = function (t, n, r, i, s, a, o, l) {
      var c = s.startColor,
        u = s.endColor,
        f = s.fontSize,
        d = s.indent,
        h = s.fontWeight,
        m = he.createElement("div"),
        p = br(r) || Gn(r, "pinType") === "fixed",
        g = t.indexOf("scroller") !== -1,
        y = p ? oe : r,
        v = t.indexOf("start") !== -1,
        b = v ? c : u,
        x =
          "border-color:" +
          b +
          ";font-size:" +
          f +
          ";color:" +
          b +
          ";font-weight:" +
          h +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (x += "position:" + ((g || l) && p ? "fixed;" : "absolute;")),
        (g || l || !p) &&
          (x += (i === Re ? Ho : qo) + ":" + (a + parseFloat(d)) + "px;"),
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
        ia(m, 0, i, v),
        m
      );
    },
    ia = function (t, n, r, i) {
      var s = { display: "block" },
        a = r[i ? "os2" : "p2"],
        o = r[i ? "p2" : "os2"];
      (t._isFlipped = i),
        (s[r.a + "Percent"] = i ? -100 : 0),
        (s[r.a] = i ? "1px" : 0),
        (s["border" + a + fi] = 1),
        (s["border" + o + fi] = 0),
        (s[r.p] = n + "px"),
        q.set(t, s);
    },
    Q = [],
    Vo = {},
    ss,
    $u = function () {
      return st() - Xt > 34 && (ss || (ss = requestAnimationFrame(Mn)));
    },
    di = function () {
      (!gt || !gt.isPressed || gt.startX > oe.clientWidth) &&
        (Z.cache++,
        gt ? ss || (ss = requestAnimationFrame(Mn)) : Mn(),
        Xt || Er("scrollStart"),
        (Xt = st()));
    },
    Yo = function () {
      (gu = J.innerWidth), (mu = J.innerHeight);
    },
    as = function (t) {
      Z.cache++,
        (t === !0 ||
          (!it &&
            !pu &&
            !he.fullscreenElement &&
            !he.webkitFullscreenElement &&
            (!Ao ||
              gu !== J.innerWidth ||
              Math.abs(J.innerHeight - mu) > J.innerHeight * 0.25))) &&
          Ys.restart(!0);
    },
    Tr = {},
    Tg = [],
    Ou = function e() {
      return Ve(X, "scrollEnd", e) || Cr(!0);
    },
    Er = function (t) {
      return (
        (Tr[t] &&
          Tr[t].map(function (n) {
            return n();
          })) ||
        Tg
      );
    },
    Nt = [],
    Au = function (t) {
      for (var n = 0; n < Nt.length; n += 5)
        (!t || (Nt[n + 4] && Nt[n + 4].query === t)) &&
          ((Nt[n].style.cssText = Nt[n + 1]),
          Nt[n].getBBox && Nt[n].setAttribute("transform", Nt[n + 2] || ""),
          (Nt[n + 3].uncache = 1));
    },
    Xo = function (t, n) {
      var r;
      for (mt = 0; mt < Q.length; mt++)
        (r = Q[mt]),
          r && (!n || r._ctx === n) && (t ? r.kill(1) : r.revert(!0, !0));
      (Gs = !0), n && Au(n), n || Er("revert");
    },
    Lu = function (t, n) {
      Z.cache++,
        (n || !vt) &&
          Z.forEach(function (r) {
            return at(r) && r.cacheID++ && (r.rec = 0);
          }),
        Rt(t) && (J.history.scrollRestoration = Io = t);
    },
    vt,
    wr = 0,
    Iu,
    Eg = function () {
      if (Iu !== wr) {
        var t = (Iu = wr);
        requestAnimationFrame(function () {
          return t === wr && Cr(!0);
        });
      }
    },
    Du = function () {
      oe.appendChild(ci),
        (Do = (!gt && ci.offsetHeight) || J.innerHeight),
        oe.removeChild(ci);
    },
    zu = function (t) {
      return Gi(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (n) {
        return (n.style.display = t ? "none" : "block");
      });
    },
    Cr = function (t, n) {
      if (
        ((zt = he.documentElement),
        (oe = he.body),
        (Mo = [J, he, zt, oe]),
        Xt && !t && !Gs)
      ) {
        We(X, "scrollEnd", Ou);
        return;
      }
      Du(),
        (vt = X.isRefreshing = !0),
        Z.forEach(function (i) {
          return at(i) && ++i.cacheID && (i.rec = i());
        });
      var r = Er("refreshInit");
      hu && X.sort(),
        n || Xo(),
        Z.forEach(function (i) {
          at(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
        }),
        Q.slice(0).forEach(function (i) {
          return i.refresh();
        }),
        (Gs = !1),
        Q.forEach(function (i) {
          if (i._subPinOffset && i.pin) {
            var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
              a = i.pin[s];
            i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - a), i.refresh();
          }
        }),
        (zo = 1),
        zu(!0),
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
        zu(!1),
        (zo = 0),
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
        Lu(Io, 1),
        Ys.pause(),
        wr++,
        (vt = 2),
        Mn(2),
        Q.forEach(function (i) {
          return at(i.vars.onRefresh) && i.vars.onRefresh(i);
        }),
        (vt = X.isRefreshing = !1),
        Er("refresh");
    },
    jo = 0,
    sa = 1,
    os,
    Mn = function (t) {
      if (t === 2 || (!vt && !Gs)) {
        (X.isUpdating = !0), os && os.update(0);
        var n = Q.length,
          r = st(),
          i = r - No >= 50,
          s = n && Q[0].scroll();
        if (
          ((sa = jo > s ? -1 : 1),
          vt || (jo = s),
          i &&
            (Xt && !js && r - Xt > 200 && ((Xt = 0), Er("scrollEnd")),
            (Ki = No),
            (No = r)),
          sa < 0)
        ) {
          for (mt = n; mt-- > 0; ) Q[mt] && Q[mt].update(0, i);
          sa = 1;
        } else for (mt = 0; mt < n; mt++) Q[mt] && Q[mt].update(0, i);
        X.isUpdating = !1;
      }
      ss = 0;
    },
    Go = [
      wu,
      Cu,
      qo,
      Ho,
      jt + is,
      jt + ts,
      jt + rs,
      jt + ns,
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
    aa = Go.concat([
      xr,
      Sr,
      "boxSizing",
      "max" + fi,
      "max" + Bo,
      "position",
      jt,
      Ae,
      Ae + rs,
      Ae + ts,
      Ae + is,
      Ae + ns,
    ]),
    wg = function (t, n, r) {
      hi(r);
      var i = t._gsap;
      if (i.spacerIsNative) hi(i.spacerState);
      else if (t._gsap.swappedIn) {
        var s = n.parentNode;
        s && (s.insertBefore(t, n), s.removeChild(n));
      }
      t._gsap.swappedIn = !1;
    },
    Uo = function (t, n, r, i) {
      if (!t._gsap.swappedIn) {
        for (var s = Go.length, a = n.style, o = t.style, l; s--; )
          (l = Go[s]), (a[l] = r[l]);
        (a.position = r.position === "absolute" ? "absolute" : "relative"),
          r.display === "inline" && (a.display = "inline-block"),
          (o[qo] = o[Ho] = "auto"),
          (a.flexBasis = r.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[xr] = Qs(t, pt) + Ne),
          (a[Sr] = Qs(t, Re) + Ne),
          (a[Ae] = o[jt] = o[Cu] = o[wu] = "0"),
          hi(i),
          (o[xr] = o["max" + fi] = r[xr]),
          (o[Sr] = o["max" + Bo] = r[Sr]),
          (o[Ae] = r[Ae]),
          t.parentNode !== n &&
            (t.parentNode.insertBefore(n, t), n.appendChild(t)),
          (t._gsap.swappedIn = !0);
      }
    },
    Cg = /([A-Z])/g,
    hi = function (t) {
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
              : n[s] && n.removeProperty(s.replace(Cg, "-$1").toLowerCase());
      }
    },
    oa = function (t) {
      for (var n = aa.length, r = t.style, i = [], s = 0; s < n; s++)
        i.push(aa[s], r[aa[s]]);
      return (i.t = t), i;
    },
    Pg = function (t, n, r) {
      for (var i = [], s = t.length, a = r ? 8 : 0, o; a < s; a += 2)
        (o = t[a]), i.push(o, o in n ? n[o] : t[a + 1]);
      return (i.t = t.t), i;
    },
    la = { left: 0, top: 0 },
    Ru = function (t, n, r, i, s, a, o, l, c, u, f, d, h, m) {
      at(t) && (t = t(l)),
        Rt(t) &&
          t.substr(0, 3) === "max" &&
          (t = d + (t.charAt(4) === "=" ? na("0" + t.substr(3), r) : 0));
      var p = h ? h.time() : 0,
        g,
        y,
        v;
      if ((h && h.seek(0), isNaN(t) || (t = +t), Ji(t)))
        h &&
          (t = q.utils.mapRange(
            h.scrollTrigger.start,
            h.scrollTrigger.end,
            0,
            d,
            t
          )),
          o && ia(o, r, i, !0);
      else {
        at(n) && (n = n(l));
        var b = (t || "0").split(" "),
          x,
          S,
          w,
          C;
        (v = wt(n, l) || oe),
          (x = kn(v) || {}),
          (!x || (!x.left && !x.top)) &&
            Gt(v).display === "none" &&
            ((C = v.style.display),
            (v.style.display = "block"),
            (x = kn(v)),
            C ? (v.style.display = C) : v.style.removeProperty("display")),
          (S = na(b[0], x[i.d])),
          (w = na(b[1] || "0", r)),
          (t = x[i.p] - c[i.p] - u + S + s - w),
          o && ia(o, w, i, r - w < 20 || (o._isStart && w > 20)),
          (r -= r - w);
      }
      if ((m && ((l[m] = t || -0.001), t < 0 && (t = 0)), a)) {
        var P = t + r,
          A = a._isStart;
        (g = "scroll" + i.d2),
          ia(
            a,
            P,
            i,
            (A && P > 20) ||
              (!A && (f ? Math.max(oe[g], zt[g]) : a.parentNode[g]) <= P + 1)
          ),
          f &&
            ((c = kn(o)),
            f && (a.style[i.op.p] = c[i.op.p] - i.op.m - a._offset + Ne));
      }
      return (
        h &&
          v &&
          ((g = kn(v)),
          h.seek(d),
          (y = kn(v)),
          (h._caScrollDist = g[i.p] - y[i.p]),
          (t = (t / h._caScrollDist) * d)),
        h && h.seek(p),
        h ? t : Math.round(t)
      );
    },
    kg = /(webkit|moz|length|cssText|inset)/i,
    Nu = function (t, n, r, i) {
      if (t.parentNode !== n) {
        var s = t.style,
          a,
          o;
        if (n === oe) {
          (t._stOrig = s.cssText), (o = Gt(t));
          for (a in o)
            !+a &&
              !kg.test(a) &&
              o[a] &&
              typeof s[a] == "string" &&
              a !== "0" &&
              (s[a] = o[a]);
          (s.top = r), (s.left = i);
        } else s.cssText = t._stOrig;
        (q.core.getCache(t).uncache = 1), n.appendChild(t);
      }
    },
    Fu = function (t, n, r) {
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
    ca = function (t, n, r) {
      var i = {};
      (i[n.p] = "+=" + r), q.set(t, i);
    },
    Hu = function (t, n) {
      var r = Un(t, n),
        i = "_scroll" + n.p2,
        s = function a(o, l, c, u, f) {
          var d = a.tween,
            h = l.onComplete,
            m = {};
          c = c || r();
          var p = Fu(r, c, function () {
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
              Z.cache++, a.tween && Mn();
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
        We(t, "wheel", r.wheelHandler),
        X.isTouch && We(t, "touchmove", r.wheelHandler),
        s
      );
    },
    X = (function () {
      function e(n, r) {
        oi ||
          e.register(q) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          Lo(this),
          this.init(n, r);
      }
      var t = e.prototype;
      return (
        (t.init = function (r, i) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !Qi)
          ) {
            this.update = this.refresh = this.kill = dn;
            return;
          }
          r = Pu(Rt(r) || Ji(r) || r.nodeType ? { trigger: r } : r, ea);
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
            b = s.once,
            x = s.snap,
            S = s.pinReparent,
            w = s.pinSpacer,
            C = s.containerAnimation,
            P = s.fastScrollEnd,
            A = s.preventOverlaps,
            E =
              r.horizontal || (r.containerAnimation && r.horizontal !== !1)
                ? pt
                : Re,
            $ = !f && f !== 0,
            _ = wt(r.scroller || J),
            T = q.core.getCache(_),
            O = br(_),
            I =
              ("pinType" in r
                ? r.pinType
                : Gn(_, "pinType") || (O && "fixed")) === "fixed",
            k = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
            L = $ && r.toggleActions.split(" "),
            D = "markers" in r ? r.markers : ea.markers,
            R = O ? 0 : parseFloat(Gt(_)["border" + E.p2 + fi]) || 0,
            M = this,
            W =
              r.onRefreshInit &&
              function () {
                return r.onRefreshInit(M);
              },
            K = yg(_, O, E),
            se = bg(_, O),
            le = 0,
            fe = 0,
            ge = 0,
            _e = Un(_, E),
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
            tr,
            Te,
            An,
            nr,
            Rr,
            je,
            rr,
            Pe,
            Jt,
            Ut,
            Ln,
            ps,
            De,
            Sa,
            In,
            bi,
            _i,
            ir,
            Nr,
            te,
            Fr,
            en,
            tn,
            nn,
            Hr,
            xi,
            Dn;
          if (
            ((M._startClamp = M._endClamp = !1),
            (M._dir = E),
            (g *= 45),
            (M.scroller = _),
            (M.scroll = C ? C.time.bind(C) : _e),
            (Ie = _e()),
            (M.vars = r),
            (i = i || r.animation),
            "refreshPriority" in r &&
              ((hu = 1), r.refreshPriority === -9999 && (os = M)),
            (T.tweenScroll = T.tweenScroll || {
              top: Hu(_, Re),
              left: Hu(_, pt),
            }),
            (M.tweenTo = Ye = T.tweenScroll[E.p]),
            (M.scrubDuration = function (H) {
              (Fr = Ji(H) && H),
                Fr
                  ? te
                    ? te.duration(H)
                    : (te = q.to(i, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: Fr,
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
              (ir = 0),
              l || (l = i.vars.id)),
            x &&
              ((!_r(x) || x.push) && (x = { snapTo: x }),
              "scrollBehavior" in oe.style &&
                q.set(O ? [oe, zt] : _, { scrollBehavior: "auto" }),
              Z.forEach(function (H) {
                return (
                  at(H) &&
                  H.target === (O ? he.scrollingElement || zt : _) &&
                  (H.smooth = !1)
                );
              }),
              (Zt = at(x.snapTo)
                ? x.snapTo
                : x.snapTo === "labels"
                ? xg(i)
                : x.snapTo === "labelsDirectional"
                ? Sg(i)
                : x.directional !== !1
                ? function (H, j) {
                    return Wo(x.snapTo)(H, st() - fe < 500 ? 0 : j.direction);
                  }
                : q.utils.snap(x.snapTo)),
              (en = x.duration || { min: 0.1, max: 2 }),
              (en = _r(en) ? Ui(en.min, en.max) : Ui(en, en)),
              (tn = q
                .delayedCall(x.delay || Fr / 2 || 0.1, function () {
                  var H = _e(),
                    j = st() - fe < 500,
                    V = Ye.tween;
                  if (
                    (j || Math.abs(M.getVelocity()) < 10) &&
                    !V &&
                    !js &&
                    le !== H
                  ) {
                    var G = (H - ee) / Te,
                      Ge = i && !$ ? i.totalProgress() : G,
                      re = j ? 0 : ((Ge - Nr) / (st() - Ki)) * 1e3 || 0,
                      ke = q.utils.clamp(-G, 1 - G, (ui(re / 2) * re) / 0.185),
                      ot = G + (x.inertia === !1 ? 0 : ke),
                      Ee,
                      ve,
                      de = x,
                      rn = de.onStart,
                      xe = de.onInterrupt,
                      Ht = de.onComplete;
                    if (
                      ((Ee = Zt(ot, M)),
                      Ji(Ee) || (Ee = ot),
                      (ve = Math.max(0, Math.round(ee + Ee * Te))),
                      H <= pe && H >= ee && ve !== H)
                    ) {
                      if (V && !V._initted && V.data <= ui(ve - H)) return;
                      x.inertia === !1 && (ke = Ee - G),
                        Ye(
                          ve,
                          {
                            duration: en(
                              ui(
                                (Math.max(ui(ot - Ge), ui(Ee - Ge)) * 0.185) /
                                  re /
                                  0.05 || 0
                              )
                            ),
                            ease: x.ease || "power3",
                            data: ui(ve - H),
                            onInterrupt: function () {
                              return tn.restart(!0) && xe && xe(M);
                            },
                            onComplete: function () {
                              M.update(),
                                (le = _e()),
                                i &&
                                  !$ &&
                                  (te
                                    ? te.resetTo(
                                        "totalProgress",
                                        Ee,
                                        i._tTime / i._tDur
                                      )
                                    : i.progress(Ee)),
                                (ir = Nr =
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
            l && (Vo[l] = M),
            (d = M.trigger = wt(d || (h !== !0 && h))),
            (Dn = d && d._gsap && d._gsap.stRevert),
            Dn && (Dn = Dn(M)),
            (h = h === !0 ? d : wt(h)),
            Rt(o) && (o = { targets: d, className: o }),
            h &&
              (m === !1 ||
                m === jt ||
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
                ? (An = Fe.pinState)
                : (w &&
                    ((w = wt(w)),
                    w && !w.nodeType && (w = w.current || w.nativeElement),
                    (Fe.spacerIsNative = !!w),
                    w && (Fe.spacerState = oa(w))),
                  (Fe.spacer = je = w || he.createElement("div")),
                  je.classList.add("pin-spacer"),
                  l && je.classList.add("pin-spacer-" + l),
                  (Fe.pinState = An = oa(h))),
              r.force3D !== !1 && q.set(h, { force3D: !0 }),
              (M.spacer = je = Fe.spacer),
              (_i = Gt(h)),
              (ps = _i[m + E.os2]),
              (Pe = q.getProperty(h)),
              (Jt = q.quickSetter(h, E.a, Ne)),
              Uo(h, je, _i),
              (Rr = oa(h))),
            D)
          ) {
            (On = _r(D) ? Pu(D, Mu) : Mu),
              (z = ra("scroller-start", l, _, E, On, 0)),
              (Ft = ra("scroller-end", l, _, E, On, 0, z)),
              (rr = z["offset" + E.op.d2]);
            var ms = wt(Gn(_, "content") || _);
            (Xe = this.markerStart = ra("start", l, ms, E, On, rr, 0, C)),
              (Ze = this.markerEnd = ra("end", l, ms, E, On, rr, 0, C)),
              C && (xi = q.quickSetter([Xe, Ze], E.a, Ne)),
              !I &&
                !(fn.length && Gn(_, "fixedMarkers") === !0) &&
                (_g(O ? oe : _),
                q.set([z, Ft], { force3D: !0 }),
                (Sa = q.quickSetter(z, E.a, Ne)),
                (bi = q.quickSetter(Ft, E.a, Ne)));
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
            (M.revert = function (H, j) {
              if (!j) return M.kill(!0);
              var V = H !== !1 || !M.enabled,
                G = it;
              V !== M.isReverted &&
                (V &&
                  ((nn = Math.max(_e(), M.scroll.rec || 0)),
                  (ge = M.progress),
                  (Hr = i && i.progress())),
                Xe &&
                  [Xe, Ze, z, Ft].forEach(function (Ge) {
                    return (Ge.style.display = V ? "none" : "block");
                  }),
                V && ((it = M), M.update(V)),
                h &&
                  (!S || !M.isActive) &&
                  (V ? wg(h, je, An) : Uo(h, je, Gt(h), De)),
                V || M.update(V),
                (it = G),
                (M.isReverted = V));
            }),
            (M.refresh = function (H, j, V, G) {
              if (!((it || !M.enabled) && !j)) {
                if (h && H && Xt) {
                  We(e, "scrollEnd", Ou);
                  return;
                }
                !vt && W && W(M),
                  (it = M),
                  Ye.tween && !V && (Ye.tween.kill(), (Ye.tween = 0)),
                  te && te.pause(),
                  p &&
                    i &&
                    (i.revert({ kill: !1 }).invalidate(),
                    i.getChildren &&
                      i.getChildren(!0, !0, !1).forEach(function (sr) {
                        return sr.vars.immediateRender && sr.render(0, !0, !0);
                      })),
                  M.isReverted || M.revert(!0, !0),
                  (M._subPinOffset = !1);
                var Ge = K(),
                  re = se(),
                  ke = C ? C.duration() : hn(_, E),
                  ot = Te <= 0.01 || !Te,
                  Ee = 0,
                  ve = G || 0,
                  de = _r(V) ? V.end : r.end,
                  rn = r.endTrigger || d,
                  xe = _r(V)
                    ? V.start
                    : r.start ||
                      (r.start === 0 || !d ? 0 : h ? "0 0" : "0 100%"),
                  Ht = (M.pinnedContainer =
                    r.pinnedContainer && wt(r.pinnedContainer, M)),
                  yn = (d && Math.max(0, Q.indexOf(M))) || 0,
                  Je = yn,
                  et,
                  lt,
                  qr,
                  Ta,
                  ct,
                  qe,
                  bn,
                  yl,
                  Gf,
                  gs,
                  _n,
                  vs,
                  Ea;
                for (
                  D &&
                  _r(V) &&
                  ((vs = q.getProperty(z, E.p)), (Ea = q.getProperty(Ft, E.p)));
                  Je-- > 0;

                )
                  (qe = Q[Je]),
                    qe.end || qe.refresh(0, 1) || (it = M),
                    (bn = qe.pin),
                    bn &&
                      (bn === d || bn === h || bn === Ht) &&
                      !qe.isReverted &&
                      (gs || (gs = []), gs.unshift(qe), qe.revert(!0, !0)),
                    qe !== Q[Je] && (yn--, Je--);
                for (
                  at(xe) && (xe = xe(M)),
                    xe = vu(xe, "start", M),
                    ee =
                      Ru(
                        xe,
                        d,
                        Ge,
                        E,
                        _e(),
                        Xe,
                        z,
                        M,
                        re,
                        R,
                        I,
                        ke,
                        C,
                        M._startClamp && "_startClamp"
                      ) || (h ? -0.001 : 0),
                    at(de) && (de = de(M)),
                    Rt(de) &&
                      !de.indexOf("+=") &&
                      (~de.indexOf(" ")
                        ? (de = (Rt(xe) ? xe.split(" ")[0] : "") + de)
                        : ((Ee = na(de.substr(2), Ge)),
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
                    de = vu(de, "end", M),
                    pe =
                      Math.max(
                        ee,
                        Ru(
                          de || (rn ? "100% 0" : ke),
                          rn,
                          Ge,
                          E,
                          _e() + Ee,
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
                    Je = yn;
                  Je--;

                )
                  (qe = Q[Je]),
                    (bn = qe.pin),
                    bn &&
                      qe.start - qe._pinPush <= ee &&
                      !C &&
                      qe.end > 0 &&
                      ((et =
                        qe.end -
                        (M._startClamp ? Math.max(0, qe.start) : qe.start)),
                      ((bn === d && qe.start - qe._pinPush < ee) ||
                        bn === Ht) &&
                        isNaN(xe) &&
                        (Ee += et * (1 - qe.progress)),
                      bn === h && (ve += et));
                if (
                  ((ee += Ee),
                  (pe += Ee),
                  M._startClamp && (M._startClamp += Ee),
                  M._endClamp &&
                    !vt &&
                    ((M._endClamp = pe || -0.001),
                    (pe = Math.min(pe, hn(_, E)))),
                  (Te = pe - ee || ((ee -= 0.01) && 0.001)),
                  ot &&
                    (ge = q.utils.clamp(0, 1, q.utils.normalize(ee, pe, nn))),
                  (M._pinPush = ve),
                  Xe &&
                    Ee &&
                    ((et = {}),
                    (et[E.a] = "+=" + Ee),
                    Ht && (et[E.p] = "-=" + _e()),
                    q.set([Xe, Ze], et)),
                  h && !(zo && M.end >= hn(_, E)))
                )
                  (et = Gt(h)),
                    (Ta = E === Re),
                    (qr = _e()),
                    (Ut = parseFloat(Pe(E.a)) + ve),
                    !ke &&
                      pe > 1 &&
                      ((_n = (O ? he.scrollingElement || zt : _).style),
                      (_n = {
                        style: _n,
                        value: _n["overflow" + E.a.toUpperCase()],
                      }),
                      O &&
                        Gt(oe)["overflow" + E.a.toUpperCase()] !== "scroll" &&
                        (_n.style["overflow" + E.a.toUpperCase()] = "scroll")),
                    Uo(h, je, et),
                    (Rr = oa(h)),
                    (lt = kn(h, !0)),
                    (yl = I && Un(_, Ta ? pt : Re)()),
                    m
                      ? ((De = [m + E.os2, Te + ve + Ne]),
                        (De.t = je),
                        (Je = m === Ae ? Qs(h, E) + Te + ve : 0),
                        Je &&
                          (De.push(E.d, Je + Ne),
                          je.style.flexBasis !== "auto" &&
                            (je.style.flexBasis = Je + Ne)),
                        hi(De),
                        Ht &&
                          Q.forEach(function (sr) {
                            sr.pin === Ht &&
                              sr.vars.pinSpacing !== !1 &&
                              (sr._subPinOffset = !0);
                          }),
                        I && _e(nn))
                      : ((Je = Qs(h, E)),
                        Je &&
                          je.style.flexBasis !== "auto" &&
                          (je.style.flexBasis = Je + Ne)),
                    I &&
                      ((ct = {
                        top: lt.top + (Ta ? qr - ee : yl) + Ne,
                        left: lt.left + (Ta ? yl : qr - ee) + Ne,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (ct[xr] = ct["max" + fi] = Math.ceil(lt.width) + Ne),
                      (ct[Sr] = ct["max" + Bo] = Math.ceil(lt.height) + Ne),
                      (ct[jt] =
                        ct[jt + rs] =
                        ct[jt + ts] =
                        ct[jt + is] =
                        ct[jt + ns] =
                          "0"),
                      (ct[Ae] = et[Ae]),
                      (ct[Ae + rs] = et[Ae + rs]),
                      (ct[Ae + ts] = et[Ae + ts]),
                      (ct[Ae + is] = et[Ae + is]),
                      (ct[Ae + ns] = et[Ae + ns]),
                      (nr = Pg(An, ct, S)),
                      vt && _e(0)),
                    i
                      ? ((Gf = i._initted),
                        Oo(1),
                        i.render(i.duration(), !0, !0),
                        (Ln = Pe(E.a) - Ut + Te + ve),
                        (In = Math.abs(Te - Ln) > 1),
                        I && In && nr.splice(nr.length - 2, 2),
                        i.render(0, !0, !0),
                        Gf || i.invalidate(!0),
                        i.parent || i.totalTime(i.totalTime()),
                        Oo(0))
                      : (Ln = Te),
                    _n &&
                      (_n.value
                        ? (_n.style["overflow" + E.a.toUpperCase()] = _n.value)
                        : _n.style.removeProperty("overflow-" + E.a));
                else if (d && _e() && !C)
                  for (lt = d.parentNode; lt && lt !== oe; )
                    lt._pinOffset &&
                      ((ee -= lt._pinOffset), (pe -= lt._pinOffset)),
                      (lt = lt.parentNode);
                gs &&
                  gs.forEach(function (sr) {
                    return sr.revert(!1, !0);
                  }),
                  (M.start = ee),
                  (M.end = pe),
                  (Ie = He = vt ? nn : _e()),
                  !C && !vt && (Ie < nn && _e(nn), (M.scroll.rec = 0)),
                  M.revert(!1, !0),
                  (fe = st()),
                  tn && ((le = -1), tn.restart(!0)),
                  (it = 0),
                  i &&
                    $ &&
                    (i._initted || Hr) &&
                    i.progress() !== Hr &&
                    i.progress(Hr || 0, !0).render(i.time(), !0, !0),
                  (ot || ge !== M.progress || C || p || (i && !i._initted)) &&
                    (i &&
                      !$ &&
                      (i._initted || ge || i.vars.immediateRender !== !1) &&
                      i.totalProgress(
                        C && ee < -0.001 && !ge
                          ? q.utils.normalize(ee, pe, 0)
                          : ge,
                        !0
                      ),
                    (M.progress = ot || (Ie - ee) / Te === ge ? 0 : ge)),
                  h && m && (je._pinOffset = Math.round(M.progress * Ln)),
                  te && te.invalidate(),
                  isNaN(vs) ||
                    ((vs -= q.getProperty(z, E.p)),
                    (Ea -= q.getProperty(Ft, E.p)),
                    ca(z, E, vs),
                    ca(Xe, E, vs - (G || 0)),
                    ca(Ft, E, Ea),
                    ca(Ze, E, Ea - (G || 0))),
                  ot && !vt && M.update(),
                  u && !vt && !tr && ((tr = !0), u(M), (tr = !1));
              }
            }),
            (M.getVelocity = function () {
              return ((_e() - He) / (st() - Ki)) * 1e3 || 0;
            }),
            (M.endAnimation = function () {
              es(M.callbackAnimation),
                i &&
                  (te
                    ? te.progress(1)
                    : i.paused()
                    ? $ || es(i, M.direction < 0, 1)
                    : es(i, i.reversed()));
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
              var j = Q.indexOf(M),
                V = M.direction > 0 ? Q.slice(0, j).reverse() : Q.slice(j + 1);
              return (
                Rt(H)
                  ? V.filter(function (G) {
                      return G.vars.preventOverlaps === H;
                    })
                  : V
              ).filter(function (G) {
                return M.direction > 0 ? G.end <= ee : G.start >= pe;
              });
            }),
            (M.update = function (H, j, V) {
              if (!(C && !V && !H)) {
                var G = vt === !0 ? nn : M.scroll(),
                  Ge = H ? 0 : (G - ee) / Te,
                  re = Ge < 0 ? 0 : Ge > 1 ? 1 : Ge || 0,
                  ke = M.progress,
                  ot,
                  Ee,
                  ve,
                  de,
                  rn,
                  xe,
                  Ht,
                  yn;
                if (
                  (j &&
                    ((He = Ie),
                    (Ie = C ? _e() : G),
                    x && ((Nr = ir), (ir = i && !$ ? i.totalProgress() : re))),
                  g &&
                    h &&
                    !it &&
                    !Us &&
                    Xt &&
                    (!re && ee < G + ((G - He) / (st() - Ki)) * g
                      ? (re = 1e-4)
                      : re === 1 &&
                        pe > G + ((G - He) / (st() - Ki)) * g &&
                        (re = 0.9999)),
                  re !== ke && M.enabled)
                ) {
                  if (
                    ((ot = M.isActive = !!re && re < 1),
                    (Ee = !!ke && ke < 1),
                    (xe = ot !== Ee),
                    (rn = xe || !!re != !!ke),
                    (M.direction = re > ke ? 1 : -1),
                    (M.progress = re),
                    rn &&
                      !it &&
                      ((ve = re && !ke ? 0 : re === 1 ? 1 : ke === 1 ? 2 : 3),
                      $ &&
                        ((de =
                          (!xe && L[ve + 1] !== "none" && L[ve + 1]) || L[ve]),
                        (yn =
                          i &&
                          (de === "complete" || de === "reset" || de in i)))),
                    A &&
                      (xe || yn) &&
                      (yn || f || !i) &&
                      (at(A)
                        ? A(M)
                        : M.getTrailing(A).forEach(function (qr) {
                            return qr.endAnimation();
                          })),
                    $ ||
                      (te && !it && !Us
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
                    if ((H && m && (je.style[m + E.os2] = ps), !I))
                      Jt(Zi(Ut + Ln * re));
                    else if (rn) {
                      if (
                        ((Ht =
                          !H && re > ke && pe + 1 > G && G + 1 >= hn(_, E)),
                        S)
                      )
                        if (!H && (ot || Ht)) {
                          var Je = kn(h, !0),
                            et = G - ee;
                          Nu(
                            h,
                            oe,
                            Je.top + (E === Re ? et : 0) + Ne,
                            Je.left + (E === Re ? 0 : et) + Ne
                          );
                        } else Nu(h, je);
                      hi(ot || Ht ? nr : Rr),
                        (In && re < 1 && ot) ||
                          Jt(Ut + (re === 1 && !Ht ? Ln : 0));
                    }
                  }
                  x && !Ye.tween && !it && !Us && tn.restart(!0),
                    o &&
                      (xe || (b && re && (re < 1 || !Ro))) &&
                      Gi(o.targets).forEach(function (qr) {
                        return qr.classList[ot || b ? "add" : "remove"](
                          o.className
                        );
                      }),
                    a && !$ && !H && a(M),
                    rn && !it
                      ? ($ &&
                          (yn &&
                            (de === "complete"
                              ? i.pause().totalProgress(1)
                              : de === "reset"
                              ? i.restart(!0).pause()
                              : de === "restart"
                              ? i.restart(!0)
                              : i[de]()),
                          a && a(M)),
                        (xe || !Ro) &&
                          (c && xe && Fo(M, c),
                          k[ve] && Fo(M, k[ve]),
                          b && (re === 1 ? M.kill(!1, 1) : (k[ve] = 0)),
                          xe ||
                            ((ve = re === 1 ? 1 : 3), k[ve] && Fo(M, k[ve]))),
                        P &&
                          !ot &&
                          Math.abs(M.getVelocity()) > (Ji(P) ? P : 2500) &&
                          (es(M.callbackAnimation),
                          te
                            ? te.progress(1)
                            : es(i, de === "reverse" ? 1 : !re, 1)))
                      : $ && a && !it && a(M);
                }
                if (bi) {
                  var lt = C ? (G / C.duration()) * (C._caScrollDist || 0) : G;
                  Sa(lt + (z._isFlipped ? 1 : 0)), bi(lt);
                }
                xi && xi((-G / C.duration()) * (C._caScrollDist || 0));
              }
            }),
            (M.enable = function (H, j) {
              M.enabled ||
                ((M.enabled = !0),
                We(_, "resize", as),
                O || We(_, "scroll", di),
                W && We(e, "refreshInit", W),
                H !== !1 && ((M.progress = ge = 0), (Ie = He = le = _e())),
                j !== !1 && M.refresh());
            }),
            (M.getTween = function (H) {
              return H && Ye ? Ye.tween : te;
            }),
            (M.setPositions = function (H, j, V, G) {
              if (C) {
                var Ge = C.scrollTrigger,
                  re = C.duration(),
                  ke = Ge.end - Ge.start;
                (H = Ge.start + (ke * H) / re), (j = Ge.start + (ke * j) / re);
              }
              M.refresh(
                !1,
                !1,
                {
                  start: yu(H, V && !!M._startClamp),
                  end: yu(j, V && !!M._endClamp),
                },
                G
              ),
                M.update();
            }),
            (M.adjustPinSpacing = function (H) {
              if (De && H) {
                var j = De.indexOf(E.d) + 1;
                (De[j] = parseFloat(De[j]) + H + Ne),
                  (De[1] = parseFloat(De[1]) + H + Ne),
                  hi(De);
              }
            }),
            (M.disable = function (H, j) {
              if (
                M.enabled &&
                (H !== !1 && M.revert(!0, !0),
                (M.enabled = M.isActive = !1),
                j || (te && te.pause()),
                (nn = 0),
                Fe && (Fe.uncache = 1),
                W && Ve(e, "refreshInit", W),
                tn &&
                  (tn.pause(), Ye.tween && Ye.tween.kill() && (Ye.tween = 0)),
                !O)
              ) {
                for (var V = Q.length; V--; )
                  if (Q[V].scroller === _ && Q[V] !== M) return;
                Ve(_, "resize", as), O || Ve(_, "scroll", di);
              }
            }),
            (M.kill = function (H, j) {
              M.disable(H, j), te && !j && te.kill(), l && delete Vo[l];
              var V = Q.indexOf(M);
              V >= 0 && Q.splice(V, 1),
                V === mt && sa > 0 && mt--,
                (V = 0),
                Q.forEach(function (G) {
                  return G.scroller === M.scroller && (V = 1);
                }),
                V || vt || (M.scroll.rec = 0),
                i &&
                  ((i.scrollTrigger = null),
                  H && i.revert({ kill: !1 }),
                  j || i.kill()),
                Xe &&
                  [Xe, Ze, z, Ft].forEach(function (G) {
                    return G.parentNode && G.parentNode.removeChild(G);
                  }),
                os === M && (os = 0),
                h &&
                  (Fe && (Fe.uncache = 1),
                  (V = 0),
                  Q.forEach(function (G) {
                    return G.pin === h && V++;
                  }),
                  V || (Fe.spacer = 0)),
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
          h && Eg();
        }),
        (e.register = function (r) {
          return (
            oi ||
              ((q = r || Su()),
              xu() && window.document && e.enable(),
              (oi = Qi)),
            oi
          );
        }),
        (e.defaults = function (r) {
          if (r) for (var i in r) ea[i] = r[i];
          return ea;
        }),
        (e.disable = function (r, i) {
          (Qi = 0),
            Q.forEach(function (a) {
              return a[i ? "kill" : "disable"](r);
            }),
            Ve(J, "wheel", di),
            Ve(he, "scroll", di),
            clearInterval(Xs),
            Ve(he, "touchcancel", dn),
            Ve(oe, "touchstart", dn),
            Zs(Ve, he, "pointerdown,touchstart,mousedown", bu),
            Zs(Ve, he, "pointerup,touchend,mouseup", _u),
            Ys.kill(),
            Ks(Ve);
          for (var s = 0; s < Z.length; s += 3)
            Js(Ve, Z[s], Z[s + 1]), Js(Ve, Z[s], Z[s + 2]);
        }),
        (e.enable = function () {
          if (
            ((J = window),
            (he = document),
            (zt = he.documentElement),
            (oe = he.body),
            q &&
              ((Gi = q.utils.toArray),
              (Ui = q.utils.clamp),
              (Lo = q.core.context || dn),
              (Oo = q.core.suppressOverwrites || dn),
              (Io = J.history.scrollRestoration || "auto"),
              (jo = J.pageYOffset || 0),
              q.core.globals("ScrollTrigger", e),
              oe))
          ) {
            (Qi = 1),
              (ci = document.createElement("div")),
              (ci.style.height = "100vh"),
              (ci.style.position = "absolute"),
              Du(),
              vg(),
              Ce.register(q),
              (e.isTouch = Ce.isTouch),
              (Kn =
                Ce.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Ao = Ce.isTouch === 1),
              We(J, "wheel", di),
              (Mo = [J, he, zt, oe]),
              q.matchMedia
                ? ((e.matchMedia = function (c) {
                    var u = q.matchMedia(),
                      f;
                    for (f in c) u.add(f, c[f]);
                    return u;
                  }),
                  q.addEventListener("matchMediaInit", function () {
                    return Xo();
                  }),
                  q.addEventListener("matchMediaRevert", function () {
                    return Au();
                  }),
                  q.addEventListener("matchMedia", function () {
                    Cr(0, 1), Er("matchMedia");
                  }),
                  q.matchMedia().add("(orientation: portrait)", function () {
                    return Yo(), Yo;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              Yo(),
              We(he, "scroll", di);
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
                o = kn(oe),
                Re.m = Math.round(o.top + Re.sc()) || 0,
                pt.m = Math.round(o.left + pt.sc()) || 0,
                s
                  ? (i.borderTopStyle = s)
                  : i.removeProperty("border-top-style"),
                r ||
                  (oe.setAttribute("style", ""), oe.removeAttribute("style")),
                Xs = setInterval($u, 250),
                q.delayedCall(0.5, function () {
                  return (Us = 0);
                }),
                We(he, "touchcancel", dn),
                We(oe, "touchstart", dn),
                Zs(We, he, "pointerdown,touchstart,mousedown", bu),
                Zs(We, he, "pointerup,touchend,mouseup", _u),
                $o = q.utils.checkPrefix("transform"),
                aa.push($o),
                oi = st(),
                Ys = q.delayedCall(0.2, Cr).pause(),
                li = [
                  he,
                  "visibilitychange",
                  function () {
                    var c = J.innerWidth,
                      u = J.innerHeight;
                    he.hidden
                      ? ((fu = c), (du = u))
                      : (fu !== c || du !== u) && as();
                  },
                  he,
                  "DOMContentLoaded",
                  Cr,
                  J,
                  "load",
                  Cr,
                  J,
                  "resize",
                  as,
                ],
                Ks(We),
                Q.forEach(function (c) {
                  return c.enable(0, 1);
                }),
                l = 0;
              l < Z.length;
              l += 3
            )
              Js(Ve, Z[l], Z[l + 1]), Js(Ve, Z[l], Z[l + 2]);
          }
        }),
        (e.config = function (r) {
          "limitCallbacks" in r && (Ro = !!r.limitCallbacks);
          var i = r.syncInterval;
          (i && clearInterval(Xs)) || ((Xs = i) && setInterval($u, i)),
            "ignoreMobileResize" in r &&
              (Ao = e.isTouch === 1 && r.ignoreMobileResize),
            "autoRefreshEvents" in r &&
              (Ks(Ve) || Ks(We, r.autoRefreshEvents || "none"),
              (pu = (r.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (e.scrollerProxy = function (r, i) {
          var s = wt(r),
            a = Z.indexOf(s),
            o = br(s);
          ~a && Z.splice(a, o ? 6 : 2),
            i && (o ? fn.unshift(J, i, oe, i, zt, i) : fn.unshift(s, i));
        }),
        (e.clearMatchMedia = function (r) {
          Q.forEach(function (i) {
            return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
          });
        }),
        (e.isInViewport = function (r, i, s) {
          var a = (Rt(r) ? wt(r) : r).getBoundingClientRect(),
            o = a[s ? xr : Sr] * i || 0;
          return s
            ? a.right - o > 0 && a.left + o < J.innerWidth
            : a.bottom - o > 0 && a.top + o < J.innerHeight;
        }),
        (e.positionInViewport = function (r, i, s) {
          Rt(r) && (r = wt(r));
          var a = r.getBoundingClientRect(),
            o = a[s ? xr : Sr],
            l =
              i == null
                ? o / 2
                : i in ta
                ? ta[i] * o
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
            var i = Tr.killAll || [];
            (Tr = {}),
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
        ? Gi(e).forEach(function (t) {
            if (t && t.style) {
              var n = Nt.indexOf(t);
              n >= 0 && Nt.splice(n, 5),
                Nt.push(
                  t,
                  t.style.cssText,
                  t.getBBox && t.getAttribute("transform"),
                  q.core.getCache(t),
                  Lo()
                );
            }
          })
        : Nt;
    }),
    (X.revert = function (e, t) {
      return Xo(!e, t);
    }),
    (X.create = function (e, t) {
      return new X(e, t);
    }),
    (X.refresh = function (e) {
      return e ? as(!0) : (oi || X.register()) && Cr(!0);
    }),
    (X.update = function (e) {
      return ++Z.cache && Mn(e === !0 ? 2 : 0);
    }),
    (X.clearScrollMemory = Lu),
    (X.maxScroll = function (e, t) {
      return hn(e, t ? pt : Re);
    }),
    (X.getScrollFunc = function (e, t) {
      return Un(wt(e), t ? pt : Re);
    }),
    (X.getById = function (e) {
      return Vo[e];
    }),
    (X.getAll = function () {
      return Q.filter(function (e) {
        return e.vars.id !== "ScrollSmoother";
      });
    }),
    (X.isScrolling = function () {
      return !!Xt;
    }),
    (X.snapDirectional = Wo),
    (X.addEventListener = function (e, t) {
      var n = Tr[e] || (Tr[e] = []);
      ~n.indexOf(t) || n.push(t);
    }),
    (X.removeEventListener = function (e, t) {
      var n = Tr[e],
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
          We(X, "refresh", function () {
            return (s = t.batchMax());
          })),
        Gi(e).forEach(function (l) {
          var c = {};
          for (o in r) c[o] = r[o];
          (c.trigger = l), n.push(X.create(c));
        }),
        n
      );
    });
  var qu = function (t, n, r, i) {
      return (
        n > i ? t(i) : n < 0 && t(0),
        r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
      );
    },
    Ko = function e(t, n) {
      n === !0
        ? t.style.removeProperty("touch-action")
        : (t.style.touchAction =
            n === !0
              ? "auto"
              : n
              ? "pan-" + n + (Ce.isTouch ? " pinch-zoom" : "")
              : "none"),
        t === zt && e(oe, n);
    },
    ua = { auto: 1, scroll: 1 },
    Mg = function (t) {
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
            !(ua[(l = Gt(s)).overflowY] || ua[l.overflowX]));

        )
          s = s.parentNode;
        (a._isScroll =
          s &&
          s !== r &&
          !br(s) &&
          (ua[(l = Gt(s)).overflowY] || ua[l.overflowX])),
          (a._isScrollT = o);
      }
      (a._isScroll || i === "x") && (n.stopPropagation(), (n._gsapAllow = !0));
    },
    Bu = function (t, n, r, i) {
      return Ce.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: n,
        onWheel: (i = i && Mg),
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function () {
          return r && We(he, Ce.eventTypes[0], Vu, !1, !0);
        },
        onDisable: function () {
          return Ve(he, Ce.eventTypes[0], Vu, !0);
        },
      });
    },
    $g = /(input|label|select|textarea)/i,
    Wu,
    Vu = function (t) {
      var n = $g.test(t.target.tagName);
      (n || Wu) && ((t._gsapAllow = !0), (Wu = n));
    },
    Og = function (t) {
      _r(t) || (t = {}),
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
        c = wt(t.target) || zt,
        u = q.core.globals().ScrollSmoother,
        f = u && u.get(),
        d =
          Kn &&
          ((t.content && wt(t.content)) ||
            (f && t.content !== !1 && !f.smooth() && f.content())),
        h = Un(c, Re),
        m = Un(c, pt),
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
        b,
        x,
        S = Bu(c, t.type, !0, s),
        w = function () {
          return (x = !1);
        },
        C = dn,
        P = dn,
        A = function () {
          (l = hn(c, Re)),
            (P = Ui(Kn ? 1 : 0, l)),
            r && (C = Ui(0, hn(c, pt))),
            (b = wr);
        },
        E = function () {
          (d._gsap.y = Zi(parseFloat(d._gsap.y) + h.offset) + "px"),
            (d.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(d._gsap.y) +
              ", 0, 1)"),
            (h.offset = h.cacheID = 0);
        },
        $ = function () {
          if (x) {
            requestAnimationFrame(w);
            var D = Zi(o.deltaY / 2),
              R = P(h.v - D);
            if (d && R !== h.v + h.offset) {
              h.offset = R - h.v;
              var M = Zi((parseFloat(d && d._gsap.y) || 0) - h.offset);
              (d.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                M +
                ", 0, 1)"),
                (d._gsap.y = M + "px"),
                (h.cacheID = Z.cache),
                Mn();
            }
            return !0;
          }
          h.offset && E(), (x = !0);
        },
        _,
        T,
        O,
        I,
        k = function () {
          A(),
            _.isActive() &&
              _.vars.scrollY > l &&
              (h() > l ? _.progress(1) && h(l) : _.resetTo("scrollY", l));
        };
      return (
        d && q.set(d, { y: "+=0" }),
        (t.ignoreCheck = function (L) {
          return (
            (Kn && L.type === "touchmove" && $()) ||
            (p > 1.05 && L.type !== "touchstart") ||
            o.isGesturing ||
            (L.touches && L.touches.length > 1)
          );
        }),
        (t.onPress = function () {
          x = !1;
          var L = p;
          (p = Zi(((J.visualViewport && J.visualViewport.scale) || 1) / g)),
            _.pause(),
            L !== p && Ko(c, p > 1.01 ? !0 : r ? !1 : "x"),
            (T = m()),
            (O = h()),
            A(),
            (b = wr);
        }),
        (t.onRelease = t.onGestureStart =
          function (L, D) {
            if ((h.offset && E(), !D)) I.restart(!0);
            else {
              Z.cache++;
              var R = v(),
                M,
                W;
              r &&
                ((M = m()),
                (W = M + (R * 0.05 * -L.velocityX) / 0.227),
                (R *= qu(m, M, W, hn(c, pt))),
                (_.vars.scrollX = C(W))),
                (M = h()),
                (W = M + (R * 0.05 * -L.velocityY) / 0.227),
                (R *= qu(h, M, W, hn(c, Re))),
                (_.vars.scrollY = P(W)),
                _.invalidate().duration(R).play(0.01),
                ((Kn && _.vars.scrollY >= l) || M >= l - 1) &&
                  q.to({}, { onUpdate: k, duration: R });
            }
            a && a(L);
          }),
        (t.onWheel = function () {
          _._ts && _.pause(), st() - y > 1e3 && ((b = 0), (y = st()));
        }),
        (t.onChange = function (L, D, R, M, W) {
          if (
            (wr !== b && A(),
            D && r && m(C(M[2] === D ? T + (L.startX - L.x) : m() + D - M[1])),
            R)
          ) {
            h.offset && E();
            var K = W[2] === R,
              se = K ? O + L.startY - L.y : h() + R - W[1],
              le = P(se);
            K && se !== le && (O += le - se), h(le);
          }
          (R || D) && Mn();
        }),
        (t.onEnable = function () {
          Ko(c, r ? !1 : "x"),
            X.addEventListener("refresh", k),
            We(J, "resize", k),
            h.smooth &&
              ((h.target.style.scrollBehavior = "auto"),
              (h.smooth = m.smooth = !1)),
            S.enable();
        }),
        (t.onDisable = function () {
          Ko(c, !0),
            Ve(J, "resize", k),
            X.removeEventListener("refresh", k),
            S.kill();
        }),
        (t.lockAxis = t.lockAxis !== !1),
        (o = new Ce(t)),
        (o.iOS = Kn),
        Kn && !h() && h(1),
        Kn && q.ticker.add(dn),
        (I = o._dc),
        (_ = q.to(o, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: r ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: Fu(h, h(), function () {
              return _.pause();
            }),
          },
          onUpdate: Mn,
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
      return new Ce(e);
    }),
    (X.normalizeScroll = function (e) {
      if (typeof e == "undefined") return gt;
      if (e === !0 && gt) return gt.enable();
      if (e === !1) {
        gt && gt.kill(), (gt = e);
        return;
      }
      var t = e instanceof Ce ? e : Og(e);
      return (
        gt && gt.target === t.target && gt.kill(), br(t.target) && (gt = t), t
      );
    }),
    (X.core = {
      _getVelocityProp: ko,
      _inputObserver: Bu,
      _scrollers: Z,
      _proxies: fn,
      bridge: {
        ss: function () {
          Xt || Er("scrollStart"), (Xt = st());
        },
        ref: function () {
          return it;
        },
      },
    }),
    Su() && q.registerPlugin(X),
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
  function Ag(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function Yu(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function Xu(e, t, n) {
    return t && Yu(e.prototype, t), n && Yu(e, n), e;
  }
  function Lg(e, t, n) {
    return (
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
  function ju(e, t) {
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
  function Gu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? ju(Object(n), !0).forEach(function (r) {
            Lg(e, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ju(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return e;
  }
  function Uu(e, t) {
    return Dg(e) || Rg(e, t) || Ku(e, t) || Fg();
  }
  function yt(e) {
    return Ig(e) || zg(e) || Ku(e) || Ng();
  }
  function Ig(e) {
    if (Array.isArray(e)) return Qo(e);
  }
  function Dg(e) {
    if (Array.isArray(e)) return e;
  }
  function zg(e) {
    if (typeof Symbol != "undefined" && Symbol.iterator in Object(e))
      return Array.from(e);
  }
  function Rg(e, t) {
    if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(e)))) {
      var n = [],
        r = !0,
        i = !1,
        s = void 0;
      try {
        for (
          var a = e[Symbol.iterator](), o;
          !(r = (o = a.next()).done) &&
          (n.push(o.value), !(t && n.length === t));
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
  function Ku(e, t) {
    if (e) {
      if (typeof e == "string") return Qo(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (
        (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
      )
        return Array.from(e);
      if (
        n === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return Qo(e, t);
    }
  }
  function Qo(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function Ng() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Fg() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Pr(e, t) {
    return Object.getOwnPropertyNames(Object(e)).reduce(function (n, r) {
      var i = Object.getOwnPropertyDescriptor(Object(e), r),
        s = Object.getOwnPropertyDescriptor(Object(t), r);
      return Object.defineProperty(n, r, s || i);
    }, {});
  }
  function ls(e) {
    return typeof e == "string";
  }
  function Zo(e) {
    return Array.isArray(e);
  }
  function fa() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = Pr(e),
      n;
    return (
      t.types !== void 0 ? (n = t.types) : t.split !== void 0 && (n = t.split),
      n !== void 0 &&
        (t.types = (ls(n) || Zo(n) ? String(n) : "")
          .split(",")
          .map(function (r) {
            return String(r).trim();
          })
          .filter(function (r) {
            return /((line)|(word)|(char))/i.test(r);
          })),
      (t.absolute || t.position) &&
        (t.absolute = t.absolute || /absolute/.test(e.position)),
      t
    );
  }
  function Jo(e) {
    var t = ls(e) || Zo(e) ? String(e) : "";
    return {
      none: !t,
      lines: /line/i.test(t),
      words: /word/i.test(t),
      chars: /char/i.test(t),
    };
  }
  function da(e) {
    return e !== null && typeof e == "object";
  }
  function Hg(e) {
    return da(e) && /^(1|3|11)$/.test(e.nodeType);
  }
  function qg(e) {
    return typeof e == "number" && e > -1 && e % 1 === 0;
  }
  function Bg(e) {
    return da(e) && qg(e.length);
  }
  function kr(e) {
    return Zo(e)
      ? e
      : e == null
      ? []
      : Bg(e)
      ? Array.prototype.slice.call(e)
      : [e];
  }
  function Qu(e) {
    var t = e;
    return (
      ls(e) &&
        (/^(#[a-z]\w+)$/.test(e.trim())
          ? (t = document.getElementById(e.trim().slice(1)))
          : (t = document.querySelectorAll(e))),
      kr(t).reduce(function (n, r) {
        return [].concat(yt(n), yt(kr(r).filter(Hg)));
      }, [])
    );
  }
  var Wg = Object.entries,
    ha = "_splittype",
    Qt = {},
    Vg = 0;
  function pn(e, t, n) {
    if (!da(e)) return console.warn("[data.set] owner is not an object"), null;
    var r = e[ha] || (e[ha] = ++Vg),
      i = Qt[r] || (Qt[r] = {});
    return (
      n === void 0
        ? t &&
          Object.getPrototypeOf(t) === Object.prototype &&
          (Qt[r] = Gu(Gu({}, i), t))
        : t !== void 0 && (i[t] = n),
      n
    );
  }
  function Mr(e, t) {
    var n = da(e) ? e[ha] : null,
      r = (n && Qt[n]) || {};
    return r;
  }
  function Zu(e) {
    var t = e && e[ha];
    t && (delete e[t], delete Qt[t]);
  }
  function Yg() {
    Object.keys(Qt).forEach(function (e) {
      delete Qt[e];
    });
  }
  function Xg() {
    Wg(Qt).forEach(function (e) {
      var t = Uu(e, 2),
        n = t[0],
        r = t[1],
        i = r.isRoot,
        s = r.isSplit;
      (!i || !s) && ((Qt[n] = null), delete Qt[n]);
    });
  }
  function jg(e) {
    var t =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ",
      n = e ? String(e) : "";
    return n.trim().replace(/\s+/g, " ").split(t);
  }
  var el = "\\ud800-\\udfff",
    Ju = "\\u0300-\\u036f\\ufe20-\\ufe23",
    ef = "\\u20d0-\\u20f0",
    tf = "\\ufe0e\\ufe0f",
    Gg = "[".concat(el, "]"),
    tl = "[".concat(Ju).concat(ef, "]"),
    nl = "\\ud83c[\\udffb-\\udfff]",
    Ug = "(?:".concat(tl, "|").concat(nl, ")"),
    nf = "[^".concat(el, "]"),
    rf = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    sf = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    af = "\\u200d",
    of = "".concat(Ug, "?"),
    lf = "[".concat(tf, "]?"),
    Kg = "(?:" + af + "(?:" + [nf, rf, sf].join("|") + ")" + lf + of + ")*",
    Qg = lf + of + Kg,
    Zg = "(?:".concat(
      ["".concat(nf).concat(tl, "?"), tl, rf, sf, Gg].join("|"),
      `
)`
    ),
    Jg = RegExp(
      "".concat(nl, "(?=").concat(nl, ")|").concat(Zg).concat(Qg),
      "g"
    ),
    ev = [af, el, Ju, ef, tf],
    tv = RegExp("[".concat(ev.join(""), "]"));
  function nv(e) {
    return e.split("");
  }
  function cf(e) {
    return tv.test(e);
  }
  function rv(e) {
    return e.match(Jg) || [];
  }
  function iv(e) {
    return cf(e) ? rv(e) : nv(e);
  }
  function sv(e) {
    return e == null ? "" : String(e);
  }
  function av(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (e = sv(e)), e && ls(e) && !t && cf(e) ? iv(e) : e.split(t);
  }
  function rl(e, t) {
    var n = document.createElement(e);
    return (
      t &&
        Object.keys(t).forEach(function (r) {
          var i = t[r],
            s = ls(i) ? i.trim() : i;
          s === null ||
            s === "" ||
            (r === "children"
              ? n.append.apply(n, yt(kr(s)))
              : n.setAttribute(r, s));
        }),
      n
    );
  }
  var il = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: !1,
    tagName: "div",
  };
  function ov(e, t) {
    t = Pr(il, t);
    var n = Jo(t.types),
      r = t.tagName,
      i = e.nodeValue,
      s = document.createDocumentFragment(),
      a = [],
      o = [];
    return (
      /^\s/.test(i) && s.append(" "),
      (a = jg(i).reduce(function (l, c, u, f) {
        var d, h;
        return (
          n.chars &&
            (h = av(c).map(function (m) {
              var p = rl(r, {
                class: "".concat(t.splitClass, " ").concat(t.charClass),
                style: "display: inline-block;",
                children: m,
              });
              return pn(p, "isChar", !0), (o = [].concat(yt(o), [p])), p;
            })),
          n.words || n.lines
            ? ((d = rl(r, {
                class: "".concat(t.wordClass, " ").concat(t.splitClass),
                style: "display: inline-block; ".concat(
                  n.words && t.absolute ? "position: relative;" : ""
                ),
                children: n.chars ? h : c,
              })),
              pn(d, { isWord: !0, isWordStart: !0, isWordEnd: !0 }),
              s.appendChild(d))
            : h.forEach(function (m) {
                s.appendChild(m);
              }),
          u < f.length - 1 && s.append(" "),
          n.words ? l.concat(d) : l
        );
      }, [])),
      /\s$/.test(i) && s.append(" "),
      e.replaceWith(s),
      { words: a, chars: o }
    );
  }
  function uf(e, t) {
    var n = e.nodeType,
      r = { words: [], chars: [] };
    if (!/(1|3|11)/.test(n)) return r;
    if (n === 3 && /\S/.test(e.nodeValue)) return ov(e, t);
    var i = kr(e.childNodes);
    if (i.length && (pn(e, "isSplit", !0), !Mr(e).isRoot)) {
      (e.style.display = "inline-block"), (e.style.position = "relative");
      var s = e.nextSibling,
        a = e.previousSibling,
        o = e.textContent || "",
        l = s ? s.textContent : " ",
        c = a ? a.textContent : " ";
      pn(e, {
        isWordEnd: /\s$/.test(o) || /^\s/.test(l),
        isWordStart: /^\s/.test(o) || /\s$/.test(c),
      });
    }
    return i.reduce(function (u, f) {
      var d = uf(f, t),
        h = d.words,
        m = d.chars;
      return {
        words: [].concat(yt(u.words), yt(h)),
        chars: [].concat(yt(u.chars), yt(m)),
      };
    }, r);
  }
  function lv(e, t, n, r) {
    if (!n.absolute) return { top: t ? e.offsetTop : null };
    var i = e.offsetParent,
      s = Uu(r, 2),
      a = s[0],
      o = s[1],
      l = 0,
      c = 0;
    if (i && i !== document.body) {
      var u = i.getBoundingClientRect();
      (l = u.x + a), (c = u.y + o);
    }
    var f = e.getBoundingClientRect(),
      d = f.width,
      h = f.height,
      m = f.x,
      p = f.y,
      g = p + o - c,
      y = m + a - l;
    return { width: d, height: h, top: g, left: y };
  }
  function ff(e) {
    Mr(e).isWord
      ? (Zu(e), e.replaceWith.apply(e, yt(e.childNodes)))
      : kr(e.children).forEach(function (t) {
          return ff(t);
        });
  }
  var cv = function () {
    return document.createDocumentFragment();
  };
  function uv(e, t, n) {
    var r = Jo(t.types),
      i = t.tagName,
      s = e.getElementsByTagName("*"),
      a = [],
      o = [],
      l = null,
      c,
      u,
      f,
      d = [],
      h = e.parentElement,
      m = e.nextElementSibling,
      p = cv(),
      g = window.getComputedStyle(e),
      y = g.textAlign,
      v = parseFloat(g.fontSize),
      b = v * 0.2;
    return (
      t.absolute &&
        ((f = { left: e.offsetLeft, top: e.offsetTop, width: e.offsetWidth }),
        (u = e.offsetWidth),
        (c = e.offsetHeight),
        pn(e, { cssWidth: e.style.width, cssHeight: e.style.height })),
      kr(s).forEach(function (x) {
        var S = x.parentElement === e,
          w = lv(x, S, t, n),
          C = w.width,
          P = w.height,
          A = w.top,
          E = w.left;
        /^br$/i.test(x.nodeName) ||
          (r.lines &&
            S &&
            ((l === null || A - l >= b) && ((l = A), a.push((o = []))),
            o.push(x)),
          t.absolute && pn(x, { top: A, left: E, width: C, height: P }));
      }),
      h && h.removeChild(e),
      r.lines &&
        ((d = a.map(function (x) {
          var S = rl(i, {
            class: "".concat(t.splitClass, " ").concat(t.lineClass),
            style: "display: block; text-align: ".concat(y, "; width: 100%;"),
          });
          pn(S, "isLine", !0);
          var w = { height: 0, top: 1e4 };
          return (
            p.appendChild(S),
            x.forEach(function (C, P, A) {
              var E = Mr(C),
                $ = E.isWordEnd,
                _ = E.top,
                T = E.height,
                O = A[P + 1];
              (w.height = Math.max(w.height, T)),
                (w.top = Math.min(w.top, _)),
                S.appendChild(C),
                $ && Mr(O).isWordStart && S.append(" ");
            }),
            t.absolute && pn(S, { height: w.height, top: w.top }),
            S
          );
        })),
        r.words || ff(p),
        e.replaceChildren(p)),
      t.absolute &&
        ((e.style.width = "".concat(e.style.width || u, "px")),
        (e.style.height = "".concat(c, "px")),
        kr(s).forEach(function (x) {
          var S = Mr(x),
            w = S.isLine,
            C = S.top,
            P = S.left,
            A = S.width,
            E = S.height,
            $ = Mr(x.parentElement),
            _ = !w && $.isLine;
          (x.style.top = "".concat(_ ? C - $.top : C, "px")),
            (x.style.left = w
              ? "".concat(f.left, "px")
              : "".concat(P - (_ ? f.left : 0), "px")),
            (x.style.height = "".concat(E, "px")),
            (x.style.width = w ? "".concat(f.width, "px") : "".concat(A, "px")),
            (x.style.position = "absolute");
        })),
      h && (m ? h.insertBefore(e, m) : h.appendChild(e)),
      d
    );
  }
  var pi = Pr(il, {}),
    fv = (function () {
      Xu(e, null, [
        {
          key: "clearData",
          value: function () {
            Yg();
          },
        },
        {
          key: "setDefaults",
          value: function (n) {
            return (pi = Pr(pi, fa(n))), il;
          },
        },
        {
          key: "revert",
          value: function (n) {
            Qu(n).forEach(function (r) {
              var i = Mr(r),
                s = i.isSplit,
                a = i.html,
                o = i.cssWidth,
                l = i.cssHeight;
              s &&
                ((r.innerHTML = a),
                (r.style.width = o || ""),
                (r.style.height = l || ""),
                Zu(r));
            });
          },
        },
        {
          key: "create",
          value: function (n, r) {
            return new e(n, r);
          },
        },
        {
          key: "data",
          get: function () {
            return Qt;
          },
        },
        {
          key: "defaults",
          get: function () {
            return pi;
          },
          set: function (n) {
            pi = Pr(pi, fa(n));
          },
        },
      ]);
      function e(t, n) {
        Ag(this, e),
          (this.isSplit = !1),
          (this.settings = Pr(pi, fa(n))),
          (this.elements = Qu(t)),
          this.split();
      }
      return (
        Xu(e, [
          {
            key: "split",
            value: function (n) {
              var r = this;
              this.revert(),
                this.elements.forEach(function (a) {
                  pn(a, "html", a.innerHTML);
                }),
                (this.lines = []),
                (this.words = []),
                (this.chars = []);
              var i = [window.pageXOffset, window.pageYOffset];
              n !== void 0 && (this.settings = Pr(this.settings, fa(n)));
              var s = Jo(this.settings.types);
              s.none ||
                (this.elements.forEach(function (a) {
                  pn(a, "isRoot", !0);
                  var o = uf(a, r.settings),
                    l = o.words,
                    c = o.chars;
                  (r.words = [].concat(yt(r.words), yt(l))),
                    (r.chars = [].concat(yt(r.chars), yt(c)));
                }),
                this.elements.forEach(function (a) {
                  if (s.lines || r.settings.absolute) {
                    var o = uv(a, r.settings, i);
                    r.lines = [].concat(yt(r.lines), yt(o));
                  }
                }),
                (this.isSplit = !0),
                window.scrollTo(i[0], i[1]),
                Xg());
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
                e.revert(this.elements);
            },
          },
        ]),
        e
      );
    })();
  F.registerPlugin(X);
  class dv {
    constructor({
      element: t,
      threshold: n = 0,
      margin: r = "0px",
      once: i = !1,
    }) {
      (this.element = t),
        (this.threshold = n),
        (this.margin = r),
        (this.once = i),
        (this.isIntersecting = !1),
        this.init();
    }
    init() {
      (this.observer = new IntersectionObserver(
        (t) => {
          t.forEach((n) => {
            n.isIntersecting
              ? ((this.isIntersecting = !0),
                this.animateIn(),
                this.once && this.observer.unobserve(this.element))
              : ((this.isIntersecting = !1), this.animateOut());
          });
        },
        { threshold: this.threshold, rootMargin: this.margin }
      )),
        this.observer.observe(this.element);
    }
    animateIn() {}
    animateOut() {}
    destroy() {
      this.observer.unobserve(this.element), (this.observer = null);
    }
  }
  class hv extends dv {
    constructor(t, n = {}) {
      const r = {
        threshold: n.threshold || 0.1,
        margin: n.margin || "10px",
        once: n.once !== void 0 ? n.once : !1,
      };
      super(wa({ element: t }, r)),
        (this.options = wa(
          {
            splitType: n.splitType || "lines",
            duration: n.duration || 1.8,
            staggerAmount: n.staggerAmount || 0.08,
            delay: n.delay || 0,
            ease: n.ease || "expo.out",
            staggerFrom: n.staggerFrom || "start",
          },
          n
        )),
        this.initSplit();
    }
    initSplit() {
      this.element._splitInstance && this.element._splitInstance.revert(),
        (this.splitText = this.createSplit()),
        (this.element._splitInstance = this.splitText),
        F.set(this.getElements(), {
          yPercent: 120,
          opacity: 0,
          willChange: "transform",
        });
    }
    createSplit() {
      const t = this.options.splitType;
      return new fv(this.element, { types: t, tagName: "span" });
    }
    getElements() {
      switch (this.options.splitType) {
        case "chars":
          return this.splitText.chars;
        case "words":
          return this.splitText.words;
        case "lines":
          return this.splitText.lines;
        default:
          return this.splitText.words;
      }
    }
    animateIn() {
      this.animation && this.animation.kill(),
        (this.animation = F.to(this.getElements(), {
          yPercent: 0,
          opacity: 1,
          rotateZ: 0,
          rotateY: 0,
          rotateX: 0,
          duration: this.options.duration,
          ease: this.options.ease,
          delay: this.options.delay,
          stagger: {
            each: this.options.staggerAmount,
            from: this.options.staggerFrom,
          },
        }));
    }
    animateOut() {
      this.options.once ||
        (this.animation && this.animation.kill(),
        (this.animation = F.to(this.getElements(), {
          yPercent: 120,
          opacity: 0,
          duration: this.options.duration / 2,
          ease: "power2.in",
        })));
    }
  }
  class pv {
    constructor(t = "[split-text]", n = {}) {
      (this.selector = t),
        (this.defaultOptions = n),
        (this.instances = []),
        this.init();
    }
    init() {
      this.injectCss();
      const t = document.querySelectorAll(this.selector);
      t.length > 0 &&
        t.forEach((n) => {
          this.instances.push(new hv(n, this.defaultOptions));
        });
    }
    injectCss() {
      const t = document.createElement("style");
      (t.textContent = `
      ${this.selector} span {
        display: inline-block;
        overflow: hidden;
      }
    `),
        document.head.appendChild(t);
    }
    refresh() {
      this.instances.forEach((t) => t.destroy()),
        (this.instances = []),
        this.init();
    }
  }
  const $r = (e = {}) => new pv("[split-text]", e);
  F.registerPlugin(X);
  const mv = () => {
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
            : gv(r, i, a, o, l, c);
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
    gv = (e, t, n, r, i, s) => {
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
    Or = () => {
      mv();
    };
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let cs,
    mi,
    sl,
    vv = () => sl || Le.register(window.gsap),
    df = typeof Intl != "undefined" ? new Intl.Segmenter() : 0,
    pa = (e) =>
      typeof e == "string"
        ? pa(document.querySelectorAll(e))
        : "length" in e
        ? Array.from(e)
        : [e],
    hf = (e) => pa(e).filter((t) => t instanceof HTMLElement),
    al = [],
    ol = function () {},
    yv = /\s+/g,
    pf = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    mf = { left: 0, top: 0, width: 0, height: 0 },
    gf = (e, t) => {
      if (t) {
        let n = new Set(e.join("").match(t) || al),
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
    vf = (e) =>
      window.getComputedStyle(e).display === "inline" &&
      (e.style.display = "inline-block"),
    gi = (e, t, n) =>
      t.insertBefore(typeof e == "string" ? document.createTextNode(e) : e, n),
    ll = (e, t, n) => {
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
    bv = (e, t, n, r) => {
      let i = ll("line", n, r),
        s = window.getComputedStyle(e).textAlign || "left";
      return (a, o) => {
        let l = i("");
        for (l.style.textAlign = s, e.insertBefore(l, t[a]); a < o; a++)
          l.appendChild(t[a]);
        l.normalize();
      };
    },
    yf = (e, t, n, r, i, s, a, o, l, c) => {
      var u;
      let f = Array.from(e.childNodes),
        d = 0,
        { wordDelimiter: h, reduceWhiteSpace: m = !0, prepareText: p } = t,
        g = e.getBoundingClientRect(),
        y = g,
        v =
          !m && window.getComputedStyle(e).whiteSpace.substring(0, 3) === "pre",
        b = 0,
        x = n.collection,
        S,
        w,
        C,
        P,
        A,
        E,
        $,
        _,
        T,
        O,
        I,
        k,
        L,
        D,
        R,
        M,
        W,
        K;
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
                ? (R = R.replace(yv, " "))
                : v &&
                  (R = R.replace(
                    /\n/g,
                    w +
                      `
`
                  )),
              p && (R = p(R, e)),
              P.textContent = R,
              A = w || C ? R.split(C || w) : R.match(o) || al,
              W = A[A.length - 1],
              _ = S ? W.slice(-1) === " " : !W,
              W || A.pop(),
              y = g,
              $ = S ? A[0].charAt(0) === " " : !A[0],
              $ && gi(" ", e, P),
              A[0] || A.shift(),
              gf(A, l),
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
                gi(document.createElement("br"), e, P),
                (M = M.slice(1))),
              !m && M === "")
            )
              gi(w, e, P);
            else if (M === " ") e.insertBefore(document.createTextNode(" "), P);
            else {
              if (
                (S && M.charAt(0) === " " && gi(" ", e, P),
                b && T === 1 && !$ && x.indexOf(b.parentNode) > -1
                  ? ((E = x[x.length - 1]),
                    E.appendChild(document.createTextNode(r ? "" : M)))
                  : ((E = n(r ? "" : M)),
                    gi(E, e, P),
                    b && T === 1 && !$ && E.insertBefore(b, E.firstChild)),
                r)
              )
                for (
                  I = df
                    ? gf(
                        [...df.segment(M)].map((se) => se.segment),
                        l
                      )
                    : M.match(o) || al,
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
                  e.parentNode.insertBefore(k, e), i && vf(k);
                }
                y = O;
              }
              (T < A.length || _) &&
                gi(
                  T >= A.length ? " " : S && M.slice(-1) === " " ? " " + w : w,
                  e,
                  P
                );
            }
          e.removeChild(P), (b = 0);
        } else
          P.nodeType === 1 &&
            (a && a.indexOf(P) > -1
              ? (x.indexOf(P.previousSibling) > -1 &&
                  x[x.length - 1].appendChild(P),
                (b = P))
              : (yf(P, t, n, r, i, s, a, o, l, !0), (b = 0)),
            i && vf(P));
    };
  const bf = class Qf {
    constructor(t, n) {
      (this.isSplit = !1),
        vv(),
        (this.elements = hf(t)),
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
        ol(this),
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
        p = m ? new RegExp(m.source + "|" + pf.source, "gu") : pf,
        g = !!t.ignore && hf(t.ignore),
        { orig: y, animTime: v, obs: b } = this._data,
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
              E = f ? ll("char", t, C) : null,
              $ = ll("word", t, P),
              _,
              T,
              O,
              I;
            if ((yf(S, t, $, E, h, i && (u || h), g, p, m, !1), u)) {
              let k = pa(S.childNodes),
                L = bv(S, k, t, A),
                D,
                R = [],
                M = 0,
                W = k.map((se) =>
                  se.nodeType === 1 ? se.getBoundingClientRect() : mf
                ),
                K = mf;
              for (_ = 0; _ < k.length; _++)
                (D = k[_]),
                  D.nodeType === 1 &&
                    (D.nodeName === "BR"
                      ? (R.push(D), L(M, _ + 1), (M = _ + 1), (K = W[M]))
                      : (_ &&
                          W[_].top > K.top &&
                          W[_].left <= K.left &&
                          (L(M, _), (M = _)),
                        (K = W[_])));
              M < _ && L(M, _),
                R.forEach((se) => {
                  var le;
                  return (le = se.parentNode) == null
                    ? void 0
                    : le.removeChild(se);
                });
            }
            if (!d) {
              for (_ = 0; _ < P.length; _++)
                if (
                  ((T = P[_]),
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
        mi &&
          (o
            ? mi.addEventListener("loadingdone", this._split)
            : mi.status === "loading" &&
              console.warn("SplitText called before fonts loaded")),
        (x = a && a(this)) &&
          x.totalTime &&
          (this._data.anim = v ? x.totalTime(v) : x),
        u &&
          o &&
          this.elements.forEach((S, w) => {
            (y[w].width = S.offsetWidth), b && b.observe(S);
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
        mi == null || mi.removeEventListener("loadingdone", this._split),
        i && ((this._data.animTime = i.totalTime()), i.revert()),
        (n = (t = this.vars).onRevert) == null || n.call(t, this),
        this
      );
    }
    static create(t, n) {
      return new Qf(t, n);
    }
    static register(t) {
      (cs = cs || t || window.gsap),
        cs && ((pa = cs.utils.toArray), (ol = cs.core.context || ol)),
        !sl && window.innerWidth > 0 && ((mi = document.fonts), (sl = !0));
    }
  };
  bf.version = "3.13.0";
  let Le = bf;
  F.registerPlugin(Le);
  const Ar = (e) => {
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
  const _v = (e) => {
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
    Lr = (e) => {
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
    _f = () => {
      console.log("homeInit"), _d(), Zp(), $r(), Or();
      const e = Ar();
      e.add(() => Lr(), "-=0.8"), e.add(() => _v(), "-=0.8");
    },
    xf = () => {
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
  const xv = () => {
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
    Sv = () => {
      xv();
    },
    Tv = () => {
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
    Sf = () => {
      Tv();
    },
    Ev = () => {
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
    };
  F.registerPlugin(Le);
  const wv = (e) => {
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
    Cv = () => {
      Ev(), xf(), Sv(), Sf(), $r(), Or();
      const e = Ar();
      e.add(() => Lr(), "-=0.8"), e.add(() => wv(), "-=0.8");
    };
  var Pv = "1.3.1";
  function Tf(e, t, n) {
    return Math.max(e, Math.min(t, n));
  }
  function kv(e, t, n) {
    return (1 - n) * e + n * t;
  }
  function Mv(e, t, n, r) {
    return kv(e, t, 1 - Math.exp(-n * r));
  }
  function $v(e, t) {
    return ((e % t) + t) % t;
  }
  var Ov = class {
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
        const r = Tf(0, this.currentTime / this.duration, 1);
        t = r >= 1;
        const i = t ? 1 : this.easing(r);
        this.value = this.from + (this.to - this.from) * i;
      } else
        this.lerp
          ? ((this.value = Mv(this.value, this.to, this.lerp * 60, e)),
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
  function Av(e, t) {
    let n;
    return function (...r) {
      let i = this;
      clearTimeout(n),
        (n = setTimeout(() => {
          (n = void 0), e.apply(i, r);
        }, t));
    };
  }
  var Lv = class {
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
            ((this.debouncedResize = Av(this.resize, r)),
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
    Ef = class {
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
    wf = 100 / 6,
    Qn = { passive: !1 },
    Iv = class {
      constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        B(this, "touchStart", { x: 0, y: 0 });
        B(this, "lastDelta", { x: 0, y: 0 });
        B(this, "window", { width: 0, height: 0 });
        B(this, "emitter", new Ef());
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
          const i = r === 1 ? wf : r === 2 ? this.window.width : 1,
            s = r === 1 ? wf : r === 2 ? this.window.height : 1;
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
    Dv = class {
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
        autoRaf: b = !1,
        anchors: x = !1,
        autoToggle: S = !1,
        allowNestedScroll: w = !1,
        __experimental__naiveDimensions: C = !1,
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
        B(this, "animate", new Ov());
        B(this, "emitter", new Ef());
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
              var y, v, b;
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
                    ((b = g.hasAttribute) == null
                      ? void 0
                      : b.call(g, "data-lenis-prevent-wheel"))) ||
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
              wa(
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
        (window.lenisVersion = Pv),
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
            autoRaf: b,
            anchors: x,
            autoToggle: S,
            allowNestedScroll: w,
            __experimental__naiveDimensions: C,
          }),
          (this.dimensions = new Lv(e, t, { autoResize: p })),
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
          (this.virtualScroll = new Iv(n, {
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
            } else e = Tf(0, e, this.limit);
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
        var S, w;
        const r = Date.now(),
          i = (S = e._lenis) != null ? S : (e._lenis = {});
        let s, a, o, l, c, u, f, d;
        const h = this.options.gestureOrientation;
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
          const C = t !== 0,
            P = n !== 0;
          C && s && o && (m = "x"), P && a && l && (m = "y");
        }
        if (!m) return !1;
        let p, g, y, v, b;
        if (m === "x")
          (p = e.scrollLeft), (g = c - f), (y = t), (v = s), (b = o);
        else if (m === "y")
          (p = e.scrollTop), (g = u - d), (y = n), (v = a), (b = l);
        else return !1;
        return (y > 0 ? p < g : p > 0) && v && b;
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
          ? $v(this.animatedScroll, this.limit)
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
  let ma;
  const zv = () => {
      (ma = new Dv({ autoRaf: !0 })),
        ma.on("scroll", X.update),
        F.ticker.add((e) => {
          ma.raf(e * 1e3);
        }),
        F.ticker.lagSmoothing(0);
    },
    Cf = () => {
      zv();
    },
    us = () => ma,
    Rv = () => {
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
          const a = us();
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
              const m = us();
              m && m.stop();
            }),
            u.forEach((m) => {
              m.addEventListener("click", () => {
                d.restart(), (n = null), (r = null);
                const p = us();
                p && p.start();
              });
            });
        });
    },
    Nv = () => {
      Rv();
    },
    Fv = () => {
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
    Pf = () => {
      Fv();
    };
  F.registerPlugin(Le);
  const Hv = (e) => {
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
    qv = () => {
      Pf(), $r(), Or();
      const e = Ar();
      e.add(() => Lr(), "-=0.8"), e.add(() => Hv(), "-=0.8");
    };
  F.registerPlugin(Le);
  const Bv = (e) => {
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
    Wv = () => {
      Sf(), Nv(), Pf(), $r(), Or();
      const e = Ar();
      e.add(() => Lr(), "-=0.8"), e.add(() => Bv(), "-=0.8");
    };
  F.registerPlugin(Le);
  const Vv = (e) => {
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
    Yv = () => {
      xf(), $r(), Or();
      const e = Ar();
      e.add(() => Lr(), "-=0.8"), e.add(() => Vv(), "-=0.8");
    },
    Xv = () => {
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
            b = document.querySelector(`[service-item='${y}']`),
            x = document.querySelector(`[hero-gradient='${y}']`);
          if (v && b) {
            f();
            const S = v.querySelector("[service-link='num']");
            v.setAttribute("service-link-status", "active"),
              F.to(v, { opacity: 1, duration: 0.4 }),
              F.to(S, { opacity: 1, y: 0, duration: 0.4 }),
              b.setAttribute("service-item-status", "active"),
              u.has(y) || (h(b), u.add(y)),
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
            b = t.length,
            x = r.offsetHeight,
            S = i.offsetHeight,
            w = x - S,
            C = b > 1 ? v / (b - 1) : 0,
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
              us().scrollTo(document.querySelector(`[service-item='${v}']`), {
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
              b = 0;
            p.forEach((x, S) => {
              x > b && ((b = x), (v = S));
            }),
              v && b >= 0.3 ? d(v) : b < 0.3 && (f(), (c = null));
          },
          { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
        );
      n.forEach((y) => g.observe(y));
    },
    jv = () => {
      Xv();
    };
  /*!
   * DrawSVGPlugin 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var mn,
    cl,
    ga,
    kf,
    Mf,
    $f,
    ul,
    Of,
    Af = function () {
      return typeof window != "undefined";
    },
    Lf = function () {
      return mn || (Af() && (mn = window.gsap) && mn.registerPlugin && mn);
    },
    Gv = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    fl = {
      rect: ["width", "height"],
      circle: ["r", "r"],
      ellipse: ["rx", "ry"],
      line: ["x2", "y2"],
    },
    Ir = function (t) {
      return Math.round(t * 1e4) / 1e4;
    },
    $n = function (t) {
      return parseFloat(t) || 0;
    },
    If = function (t, n) {
      var r = $n(t);
      return ~t.indexOf("%") ? (r / 100) * n : r;
    },
    va = function (t, n) {
      return $n(t.getAttribute(n));
    },
    ya = Math.sqrt,
    Df = function (t, n, r, i, s, a) {
      return ya(
        Math.pow(($n(r) - $n(t)) * s, 2) + Math.pow(($n(i) - $n(n)) * a, 2)
      );
    },
    zf = function (t) {
      return console.warn(t);
    },
    Rf = function (t) {
      return t.getAttribute("vector-effect") === "non-scaling-stroke";
    },
    Uv = 1,
    Kv = function (t, n, r) {
      var i = t.indexOf(" "),
        s,
        a;
      return (
        i < 0
          ? ((s = r !== void 0 ? r + "" : t), (a = t))
          : ((s = t.substr(0, i)), (a = t.substr(i + 1))),
        (s = If(s, n)),
        (a = If(a, n)),
        s > a ? [a, s] : [s, a]
      );
    },
    ba = function (t) {
      if (((t = cl(t)[0]), !t)) return 0;
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
      Rf(t) &&
        ((s = t.getScreenCTM()),
        (i = ya(s.a * s.a + s.b * s.b)),
        (s = ya(s.d * s.d + s.c * s.c)));
      try {
        o = t.getBBox();
      } catch (v) {
        zf(
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
          fl[n] &&
          ((g = va(t, fl[n][0])),
          (y = va(t, fl[n][1])),
          n !== "rect" && n !== "line" && ((g *= 2), (y *= 2)),
          n === "line" &&
            ((m = va(t, "x1")),
            (p = va(t, "y1")),
            (g = Math.abs(g - m)),
            (y = Math.abs(y - p)))),
        n === "path")
      )
        (c = r.strokeDasharray),
          (r.strokeDasharray = "none"),
          (a = t.getTotalLength() || 0),
          Ir(i) !== Ir(s) &&
            !$f &&
            ($f = 1) &&
            zf(
              "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
            ),
          (a *= (i + s) / 2),
          (r.strokeDasharray = c);
      else if (n === "rect") a = g * 2 * i + y * 2 * s;
      else if (n === "line") a = Df(m, p, m + g, p + y, i, s);
      else if (n === "polyline" || n === "polygon")
        for (
          l = t.getAttribute("points").match(Gv) || [],
            n === "polygon" && l.push(l[0], l[1]),
            a = 0,
            u = 2;
          u < l.length;
          u += 2
        )
          a += Df(l[u - 2], l[u - 1], l[u], l[u + 1], i, s) || 0;
      else
        (n === "circle" || n === "ellipse") &&
          ((f = (g / 2) * i),
          (d = (y / 2) * s),
          (a = Math.PI * (3 * (f + d) - ya((3 * f + d) * (f + 3 * d)))));
      return a || 0;
    },
    Nf = function (t, n) {
      if (((t = cl(t)[0]), !t)) return [0, 0];
      n || (n = ba(t) + 1);
      var r = ga.getComputedStyle(t),
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
    Ff = function () {
      Af() &&
        ((ga = window),
        (Mf = mn = Lf()),
        (cl = mn.utils.toArray),
        (ul = mn.core.getStyleSaver),
        (Of = mn.core.reverting || function () {}),
        (kf = ((ga.navigator || {}).userAgent || "").indexOf("Edge") !== -1));
    },
    Hf = {
      version: "3.13.0",
      name: "drawSVG",
      register: function (t) {
        (mn = t), Ff();
      },
      init: function (t, n, r, i, s) {
        if (!t.getBBox) return !1;
        Mf || Ff();
        var a = ba(t),
          o,
          l,
          c;
        return (
          (this.styles =
            ul && ul(t, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
          (this.tween = r),
          (this._style = t.style),
          (this._target = t),
          n + "" == "true"
            ? (n = "0 100%")
            : n
            ? (n + "").indexOf(" ") === -1 && (n = "0 " + n)
            : (n = "0 0"),
          (o = Nf(t, a)),
          (l = Kv(n, a, o[0])),
          (this._length = Ir(a)),
          (this._dash = Ir(o[1] - o[0])),
          (this._offset = Ir(-o[0])),
          (this._dashPT = this.add(
            this,
            "_dash",
            this._dash,
            Ir(l[1] - l[0]),
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
            Ir(-l[0]),
            0,
            0,
            0,
            0,
            0,
            1
          )),
          kf &&
            ((c = ga.getComputedStyle(t)),
            c.strokeLinecap !== c.strokeLinejoin &&
              ((l = $n(c.strokeMiterlimit)),
              this.add(t.style, "strokeMiterlimit", l, l + 0.01))),
          (this._live = Rf(t) || ~(n + "").indexOf("live")),
          (this._nowrap = ~(n + "").indexOf("nowrap")),
          this._props.push("drawSVG"),
          Uv
        );
      },
      render: function (t, n) {
        if (n.tween._time || !Of()) {
          var r = n._pt,
            i = n._style,
            s,
            a,
            o,
            l;
          if (r) {
            for (
              n._live &&
              ((s = ba(n._target)),
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
      getLength: ba,
      getPosition: Nf,
    };
  Lf() && mn.registerPlugin(Hf), F.registerPlugin(Le), F.registerPlugin(Hf);
  const Qv = (e) => {
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
    Zv = () => {
      jv(), $r(), Or();
      const e = Ar();
      e.add(() => Lr(), "-=0.8"), e.add(() => Qv(), "-=0.8");
    },
    Jv = () => {
      console.log("seoInit");
    };
  F.registerPlugin(Le);
  const e0 = (e) =>
      Kf(this, null, function* () {
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
            tag: "span",
          }),
          d = new Le(s, {
            type: "lines",
            linesClass: "work-cms-info-title-line",
            mask: "lines",
            tag: "span",
          }),
          h = new Le(a, {
            type: "lines",
            linesClass: "work-cms-info-text-line",
            mask: "lines",
            tag: "span",
          }),
          m = new Le(o, {
            type: "lines",
            linesClass: "work-cms-info-meta-line",
            mask: "lines",
            tag: "span",
          });
        f.lines.forEach((y) => {
          const v = document.createElement("div");
          v.classList.add("move-text-main"),
            y.parentNode.insertBefore(v, y),
            v.appendChild(y);
        }),
          d.lines.forEach((y) => {
            const v = document.createElement("div");
            v.classList.add("move-text-title"),
              y.parentNode.insertBefore(v, y),
              v.appendChild(y);
          }),
          h.lines.forEach((y) => {
            const v = document.createElement("div");
            v.classList.add("move-text-info"),
              y.parentNode.insertBefore(v, y),
              v.appendChild(y);
          }),
          m.lines.forEach((y) => {
            const v = document.createElement("div");
            v.classList.add("move-text-meta"),
              y.parentNode.insertBefore(v, y),
              v.appendChild(y);
          });
        const p = (y, v) => {
          const b = y.querySelectorAll("span");
          b.length &&
            b.forEach((x) => {
              const S = document.createElement("div");
              (S.style.overflow = "clip"),
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
    t0 = {
      home: _f,
      about: Cv,
      work: Yv,
      contact: qv,
      career: Wv,
      "extra-page": _f,
      service: Zv,
      work_cms: () => {
        $r(), Or();
        const e = Ar();
        e.add(() => Lr(), "-=0.8"), e.add(() => e0(), "-=0.8");
      },
      seo: Jv,
    },
    n0 = () => {
      const e = document.querySelector("[page-route]");
      if (!e) {
        console.log("No element with page-route attribute found");
        return;
      }
      const t = e.getAttribute("page-route"),
        n = t0[t];
      n ? n() : console.log(`No specific script for route: ${t}`);
    };
  class r0 {
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
  const i0 = () => new r0(),
    s0 = () => {
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
    a0 = () => {
      s0();
    };
  class o0 {
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
  const l0 = () => {
    i0(), a0(), new o0(), Cf();
  };
  function c0(e, t) {
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
  function dl(e, t, n) {
    return (
      t && c0(e.prototype, t),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function gn() {
    return (
      (gn = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      gn.apply(this, arguments)
    );
  }
  function _a(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      fs(e, t);
  }
  function hl(e) {
    return (
      (hl = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      hl(e)
    );
  }
  function fs(e, t) {
    return (
      (fs = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, r) {
            return (n.__proto__ = r), n;
          }),
      fs(e, t)
    );
  }
  function u0() {
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
  function pl(e, t, n) {
    return (
      (pl = u0()
        ? Reflect.construct.bind()
        : function (r, i, s) {
            var a = [null];
            a.push.apply(a, i);
            var o = new (Function.bind.apply(r, a))();
            return s && fs(o, s.prototype), o;
          }),
      pl.apply(null, arguments)
    );
  }
  function ml(e) {
    var t = typeof Map == "function" ? new Map() : void 0;
    return (
      (ml = function (n) {
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
          return pl(n, arguments, hl(this).constructor);
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
          fs(r, n)
        );
      }),
      ml(e)
    );
  }
  function f0(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  var Zn,
    d0 = function () {
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
  var qf = Zn.off,
    Dr = (function () {
      function e(n) {
        (this.t = void 0), (this.t = n);
      }
      (e.getLevel = function () {
        return qf;
      }),
        (e.setLevel = function (n) {
          return (qf = Zn[n]);
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
  function vi(e) {
    return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  }
  function Bf(e) {
    return e && e.sensitive ? "" : "i";
  }
  var vn = {
      container: "container",
      history: "history",
      namespace: "namespace",
      prefix: "data-barba",
      prevent: "prevent",
      wrapper: "wrapper",
    },
    zr = new ((function () {
      function e() {
        (this.o = vn),
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
    h0 = (function () {
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
          (s.data = gn({}, s.data, n)), this.set(i, s);
          var a = { from: this.p, index: this.P, states: [].concat(this.m) };
          window.history.replaceState(a, "");
        }),
        (t.update = function (n, r) {
          var i = r || this.P,
            s = gn({}, this.get(i), n);
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
            s = vn.prefix + "-" + vn.history;
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
        dl(e, [
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
    Wf = new h0(),
    xa = function (e, t) {
      try {
        var n = (function () {
          if (!t.next.html)
            return Promise.resolve(e).then(function (r) {
              var i = t.next;
              if (r) {
                var s = zr.toElement(r.html);
                (i.namespace = zr.getNamespace(s)),
                  (i.container = zr.getContainer(s)),
                  (i.url = r.url),
                  (i.html = r.html),
                  Wf.update({ ns: i.namespace });
                var a = zr.toDocument(r.html);
                document.title = a.title;
              }
            });
        })();
        return Promise.resolve(n && n.then ? n.then(function () {}) : void 0);
      } catch (r) {
        return Promise.reject(r);
      }
    },
    Vf = function e(t, n, r) {
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
            return new RegExp("(?:".concat(o.join("|"), ")"), Bf(a));
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
                  b = v === void 0 ? "/#?" : v,
                  x = c.endsWith,
                  S = "[".concat(vi(x === void 0 ? "" : x), "]|$"),
                  w = "[".concat(vi(b), "]"),
                  C = h ? "^" : "",
                  P = 0,
                  A = o;
                P < A.length;
                P++
              ) {
                var E = A[P];
                if (typeof E == "string") C += vi(y(E));
                else {
                  var $ = vi(y(E.prefix)),
                    _ = vi(y(E.suffix));
                  if (E.pattern)
                    if ((l && l.push(E), $ || _))
                      if (E.modifier === "+" || E.modifier === "*") {
                        var T = E.modifier === "*" ? "?" : "";
                        C += "(?:"
                          .concat($, "((?:")
                          .concat(E.pattern, ")(?:")
                          .concat(_)
                          .concat($, "(?:")
                          .concat(E.pattern, "))*)")
                          .concat(_, ")")
                          .concat(T);
                      } else
                        C += "(?:"
                          .concat($, "(")
                          .concat(E.pattern, ")")
                          .concat(_, ")")
                          .concat(E.modifier);
                    else
                      C +=
                        E.modifier === "+" || E.modifier === "*"
                          ? "((?:"
                              .concat(E.pattern, ")")
                              .concat(E.modifier, ")")
                          : "(".concat(E.pattern, ")").concat(E.modifier);
                  else C += "(?:".concat($).concat(_, ")").concat(E.modifier);
                }
              }
              if (p)
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
              return new RegExp(C, Bf(c));
            })(
              (function (o, l) {
                l === void 0 && (l = {});
                for (
                  var c = (function (_) {
                      for (var T = [], O = 0; O < _.length; ) {
                        var I = _[O];
                        if (I !== "*" && I !== "+" && I !== "?")
                          if (I !== "\\")
                            if (I !== "{")
                              if (I !== "}")
                                if (I !== ":")
                                  if (I !== "(")
                                    T.push({
                                      type: "CHAR",
                                      index: O,
                                      value: _[O++],
                                    });
                                  else {
                                    var k = 1,
                                      L = "";
                                    if (_[(R = O + 1)] === "?")
                                      throw new TypeError(
                                        'Pattern cannot start with "?" at '.concat(
                                          R
                                        )
                                      );
                                    for (; R < _.length; )
                                      if (_[R] !== "\\") {
                                        if (_[R] === ")") {
                                          if (--k == 0) {
                                            R++;
                                            break;
                                          }
                                        } else if (
                                          _[R] === "(" &&
                                          (k++, _[R + 1] !== "?")
                                        )
                                          throw new TypeError(
                                            "Capturing groups are not allowed at ".concat(
                                              R
                                            )
                                          );
                                        L += _[R++];
                                      } else L += _[R++] + _[R++];
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
                                  for (var D = "", R = O + 1; R < _.length; ) {
                                    var M = _.charCodeAt(R);
                                    if (
                                      !(
                                        (M >= 48 && M <= 57) ||
                                        (M >= 65 && M <= 90) ||
                                        (M >= 97 && M <= 122) ||
                                        M === 95
                                      )
                                    )
                                      break;
                                    D += _[R++];
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
                                  value: _[O++],
                                });
                            else
                              T.push({ type: "OPEN", index: O, value: _[O++] });
                          else
                            T.push({
                              type: "ESCAPED_CHAR",
                              index: O++,
                              value: _[O++],
                            });
                        else
                          T.push({ type: "MODIFIER", index: O, value: _[O++] });
                      }
                      return T.push({ type: "END", index: O, value: "" }), T;
                    })(o),
                    u = l.prefixes,
                    f = u === void 0 ? "./" : u,
                    d = "[^".concat(vi(l.delimiter || "/#?"), "]+?"),
                    h = [],
                    m = 0,
                    p = 0,
                    g = "",
                    y = function (_) {
                      if (p < c.length && c[p].type === _) return c[p++].value;
                    },
                    v = function (_) {
                      var T = y(_);
                      if (T !== void 0) return T;
                      var O = c[p],
                        I = O.index;
                      throw new TypeError(
                        "Unexpected "
                          .concat(O.type, " at ")
                          .concat(I, ", expected ")
                          .concat(_)
                      );
                    },
                    b = function () {
                      for (
                        var _, T = "";
                        (_ = y("CHAR") || y("ESCAPED_CHAR"));

                      )
                        T += _;
                      return T;
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
                      var P = b(),
                        A = y("NAME") || "",
                        E = y("PATTERN") || "",
                        $ = b();
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
    p0 = {
      __proto__: null,
      update: xa,
      nextTick: function () {
        return new Promise(function (e) {
          window.requestAnimationFrame(e);
        });
      },
      pathToRegexp: Vf,
    },
    Yf = function () {
      return window.location.origin;
    },
    ds = function (e) {
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
        s = e.replace(Yf(), ""),
        a = {},
        o = s.indexOf("#");
      o >= 0 && ((i = s.slice(o + 1)), (s = s.slice(0, o)));
      var l = s.indexOf("?");
      return (
        l >= 0 && ((a = Xf(s.slice(l + 1))), (s = s.slice(0, l))),
        { hash: i, path: s, port: t, query: a }
      );
    },
    Xf = function (e) {
      return e.split("&").reduce(function (t, n) {
        var r = n.split("=");
        return (t[r[0]] = r[1]), t;
      }, {});
    },
    gl = function (e) {
      return (
        e === void 0 && (e = window.location.href),
        e.replace(/(\/#.*|\/|#.*)$/, "")
      );
    },
    m0 = {
      __proto__: null,
      getHref: function () {
        return window.location.href;
      },
      getAbsoluteHref: function (e, t) {
        return t === void 0 && (t = document.baseURI), new URL(e, t).href;
      },
      getOrigin: Yf,
      getPort: ds,
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
      parseQuery: Xf,
      clean: gl,
    };
  function g0(e, t, n, r, i) {
    return (
      t === void 0 && (t = 2e3),
      new Promise(function (s, a) {
        var o = new XMLHttpRequest();
        (o.onreadystatechange = function () {
          if (o.readyState === XMLHttpRequest.DONE) {
            if (o.status === 200) {
              var l =
                o.responseURL !== "" && o.responseURL !== e ? o.responseURL : e;
              s({ html: o.responseText, url: gn({ href: l }, Jn(l)) }),
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
  function v0(e) {
    return (
      !!e &&
      (typeof e == "object" || typeof e == "function") &&
      typeof e.then == "function"
    );
  }
  function yi(e, t) {
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
            r || (v0(o) ? o.then(s, a) : s(o));
          });
        return i;
      }
    );
  }
  var er = new ((function (e) {
      function t() {
        var r;
        return (
          ((r = e.call(this) || this).logger = new Dr("@barba/core")),
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
      _a(t, e);
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
                  return yi(o.fn, o.ctx).apply(void 0, [].slice.call(i, 1));
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
    })(d0))(),
    jf = (function () {
      function e(t) {
        if (((this.k = void 0), (this.O = []), typeof t == "boolean"))
          this.k = t;
        else {
          var n = Array.isArray(t) ? t : [t];
          this.O = n.map(function (r) {
            return Vf(r);
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
    y0 = (function (e) {
      function t(r) {
        var i;
        return ((i = e.call(this, r) || this).T = new Map()), i;
      }
      _a(t, e);
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
          var s = gn({}, this.T.get(r), i);
          return this.T.set(r, s), s;
        }),
        t
      );
    })(jf),
    b0 = (function () {
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
    _0 = function () {
      return !window.history.pushState;
    },
    x0 = function (e) {
      return !e.el || !e.href;
    },
    S0 = function (e) {
      var t = e.event;
      return t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey;
    },
    T0 = function (e) {
      var t = e.el;
      return t.hasAttribute("target") && t.target === "_blank";
    },
    E0 = function (e) {
      var t = e.el;
      return (
        (t.protocol !== void 0 && window.location.protocol !== t.protocol) ||
        (t.hostname !== void 0 && window.location.hostname !== t.hostname)
      );
    },
    w0 = function (e) {
      var t = e.el;
      return t.port !== void 0 && ds() !== ds(t.href);
    },
    C0 = function (e) {
      var t = e.el;
      return t.getAttribute && typeof t.getAttribute("download") == "string";
    },
    P0 = function (e) {
      return e.el.hasAttribute(vn.prefix + "-" + vn.prevent);
    },
    k0 = function (e) {
      return !!e.el.closest("[" + vn.prefix + "-" + vn.prevent + '="all"]');
    },
    M0 = function (e) {
      var t = e.href;
      return gl(t) === gl() && ds(t) === ds();
    },
    $0 = (function (e) {
      function t(r) {
        var i;
        return (
          ((i = e.call(this, r) || this).suite = []),
          (i.tests = new Map()),
          i.init(),
          i
        );
      }
      _a(t, e);
      var n = t.prototype;
      return (
        (n.init = function () {
          this.add("pushState", _0),
            this.add("exists", x0),
            this.add("newTab", S0),
            this.add("blank", T0),
            this.add("corsDomain", E0),
            this.add("corsPort", w0),
            this.add("download", C0),
            this.add("preventSelf", P0),
            this.add("preventAll", k0),
            this.add("sameUrl", M0, !1);
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
    })(jf),
    vl = (function (e) {
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
          Error.captureStackTrace && Error.captureStackTrace(f0(i), t),
          (i.name = "BarbaError"),
          i
        );
      }
      return _a(t, e), t;
    })(ml(Error)),
    O0 = (function () {
      function e(n) {
        n === void 0 && (n = []),
          (this.logger = new Dr("@barba/core")),
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
  function hs(e, t) {
    try {
      var n = e();
    } catch (r) {
      return t(r);
    }
    return n && n.then ? n.then(void 0, t) : n;
  }
  var A0 = (function () {
      function e(n) {
        n === void 0 && (n = []),
          (this.logger = new Dr("@barba/core")),
          (this.store = void 0),
          (this.C = !1),
          (this.store = new O0(n));
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
            var l = hs(
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
            var f = hs(
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
                        return hs(
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
                          function (b) {
                            if (l.H(b))
                              throw new vl(b, "Transition error [sync]");
                          }
                        );
                      var g = function (b) {
                          return hs(
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
                                throw new vl(
                                  x,
                                  "Transition error [before/after/enter]"
                                );
                            }
                          );
                        },
                        y = !1,
                        v = hs(
                          function () {
                            return Promise.resolve(
                              l.L("beforeLeave", r, c)
                            ).then(function () {
                              return Promise.resolve(
                                Promise.all([l.leave(r, c), xa(s, r)]).then(
                                  function (b) {
                                    return b[0];
                                  }
                                )
                              ).then(function (b) {
                                return (
                                  (y = b),
                                  Promise.resolve(l.L("afterLeave", r, c)).then(
                                    function () {}
                                  )
                                );
                              });
                            });
                          },
                          function (b) {
                            if (l.H(b))
                              throw new vl(
                                b,
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
                  if (u) return Promise.resolve(xa(s, r)).then(function () {});
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
            return Promise.resolve(er.do("once", n, r)).then(function () {
              return r.once ? yi(r.once, r)(n) : Promise.resolve();
            });
          } catch (i) {
            return Promise.reject(i);
          }
        }),
        (t.leave = function (n, r) {
          try {
            return Promise.resolve(er.do("leave", n, r)).then(function () {
              return r.leave ? yi(r.leave, r)(n) : Promise.resolve();
            });
          } catch (i) {
            return Promise.reject(i);
          }
        }),
        (t.enter = function (n, r, i) {
          try {
            return Promise.resolve(er.do("enter", n, r)).then(function () {
              return r.enter ? yi(r.enter, r)(n, i) : Promise.resolve();
            });
          } catch (s) {
            return Promise.reject(s);
          }
        }),
        (t.add = function (n, r) {
          try {
            return (
              zr.addContainer(n.next.container, r),
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
              zr.removeContainer(n.current.container),
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
              return i[n] ? yi(i[n], i)(r) : Promise.resolve();
            });
          } catch (s) {
            return Promise.reject(s);
          }
        }),
        dl(e, [
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
    L0 = (function () {
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
            return s && s[t] ? yi(s[t], s)(r) : Promise.resolve();
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
  var I0 = {
    container: null,
    html: "",
    namespace: "",
    url: { hash: "", href: "", path: "", port: null, query: {} },
  };
  new ((function () {
    function e() {
      (this.version = "2.10.3"),
        (this.schemaPage = I0),
        (this.Logger = Dr),
        (this.logger = new Dr("@barba/core")),
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
        (this.dom = zr),
        (this.helpers = p0),
        (this.history = Wf),
        (this.request = g0),
        (this.url = m0),
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
          c = l === void 0 ? vn : l,
          u = r.requestError,
          f = r.timeout,
          d = f === void 0 ? 2e3 : f,
          h = r.cacheIgnore,
          m = h !== void 0 && h,
          p = r.cacheFirstPage,
          g = p !== void 0 && p,
          y = r.prefetchIgnore,
          v = y !== void 0 && y,
          b = r.preventRunning,
          x = b !== void 0 && b,
          S = r.prevent,
          w = S === void 0 ? null : S,
          C = r.debug,
          P = r.logLevel;
        if (
          (Dr.setLevel(
            (C !== void 0 && C) === !0 ? "debug" : P === void 0 ? "off" : P
          ),
          this.logger.info(this.version),
          Object.keys(c).forEach(function ($) {
            vn[$] && (vn[$] = c[$]);
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
          ((this.cache = new y0(m)),
          (this.headers = new b0()),
          (this.prevent = new $0(v)),
          (this.transitions = new A0(s)),
          (this.views = new L0(o)),
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
          (E.current = gn({}, this.schemaPage)),
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
                  Dr.getLevel() === 0 && l.force(f.next.url.href);
                });
                if (d && d.then) return d.then(function () {});
              });
            },
            l = this;
          if (
            ((l.data.next.url = gn({ href: n }, l.url.parse(n))),
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
              return Promise.resolve(xa(a, l.data)).then(function () {});
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
            url: gn({ href: n }, this.url.parse(n)),
          };
        (this.D = {
          current: r,
          event: void 0,
          next: gn({}, this.schemaPage),
          trigger: void 0,
        }),
          this.hooks.do("reset", this.data);
      }),
      dl(e, [
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
        const e = us();
        e && e.scrollTo(0, { immediate: !0 });
      }),
        l0(),
        n0(),
        Cf();
    });
});
