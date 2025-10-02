var Bl = Object.defineProperty;
var yf = (n, e, t) =>
  e in n
    ? Bl(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (n[e] = t);
var a = (n, e) => Bl(n, "name", { value: e, configurable: !0 });
var H = (n, e, t) => yf(n, typeof e != "symbol" ? e + "" : e, t);
function Vl(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    e &&
      (i = i.filter(function (r) {
        return Object.getOwnPropertyDescriptor(n, r).enumerable;
      })),
      t.push.apply(t, i);
  }
  return t;
}
a(Vl, "ownKeys");
function ql(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Vl(Object(t), !0).forEach(function (i) {
          Bs(n, i, t[i]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
      : Vl(Object(t)).forEach(function (i) {
          Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(t, i));
        });
  }
  return n;
}
a(ql, "_objectSpread2");
function pt() {
  pt = a(function () {
    return n;
  }, "_regeneratorRuntime");
  var n = {},
    e = Object.prototype,
    t = e.hasOwnProperty,
    i =
      Object.defineProperty ||
      function (T, M, O) {
        T[M] = O.value;
      },
    r = typeof Symbol == "function" ? Symbol : {},
    s = r.iterator || "@@iterator",
    o = r.asyncIterator || "@@asyncIterator",
    l = r.toStringTag || "@@toStringTag";
  function u(T, M, O) {
    return (
      Object.defineProperty(T, M, {
        value: O,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      T[M]
    );
  }
  a(u, "define");
  try {
    u({}, "");
  } catch {
    u = a(function (M, O, I) {
      return (M[O] = I);
    }, "define");
  }
  function c(T, M, O, I) {
    var N = M && M.prototype instanceof p ? M : p,
      R = Object.create(N.prototype),
      B = new A(I || []);
    return i(R, "_invoke", { value: x(T, O, B) }), R;
  }
  a(c, "wrap");
  function d(T, M, O) {
    try {
      return { type: "normal", arg: T.call(M, O) };
    } catch (I) {
      return { type: "throw", arg: I };
    }
  }
  a(d, "tryCatch"), (n.wrap = c);
  var f = {};
  function p() {}
  a(p, "Generator");
  function h() {}
  a(h, "GeneratorFunction");
  function m() {}
  a(m, "GeneratorFunctionPrototype");
  var g = {};
  u(g, s, function () {
    return this;
  });
  var w = Object.getPrototypeOf,
    b = w && w(w(k([])));
  b && b !== e && t.call(b, s) && (g = b);
  var y = (m.prototype = p.prototype = Object.create(g));
  function _(T) {
    ["next", "throw", "return"].forEach(function (M) {
      u(T, M, function (O) {
        return this._invoke(M, O);
      });
    });
  }
  a(_, "defineIteratorMethods");
  function v(T, M) {
    function O(N, R, B, q) {
      var P = d(T[N], T, R);
      if (P.type !== "throw") {
        var X = P.arg,
          K = X.value;
        return K && typeof K == "object" && t.call(K, "__await")
          ? M.resolve(K.__await).then(
              function (ce) {
                O("next", ce, B, q);
              },
              function (ce) {
                O("throw", ce, B, q);
              }
            )
          : M.resolve(K).then(
              function (ce) {
                (X.value = ce), B(X);
              },
              function (ce) {
                return O("throw", ce, B, q);
              }
            );
      }
      q(P.arg);
    }
    a(O, "invoke");
    var I;
    i(this, "_invoke", {
      value: a(function (N, R) {
        function B() {
          return new M(function (q, P) {
            O(N, R, q, P);
          });
        }
        return a(B, "callInvokeWithMethodAndArg"), (I = I ? I.then(B, B) : B());
      }, "value"),
    });
  }
  a(v, "AsyncIterator");
  function x(T, M, O) {
    var I = "suspendedStart";
    return function (N, R) {
      if (I === "executing") throw new Error("Generator is already running");
      if (I === "completed") {
        if (N === "throw") throw R;
        return L();
      }
      for (O.method = N, O.arg = R; ; ) {
        var B = O.delegate;
        if (B) {
          var q = E(B, O);
          if (q) {
            if (q === f) continue;
            return q;
          }
        }
        if (O.method === "next") O.sent = O._sent = O.arg;
        else if (O.method === "throw") {
          if (I === "suspendedStart") throw ((I = "completed"), O.arg);
          O.dispatchException(O.arg);
        } else O.method === "return" && O.abrupt("return", O.arg);
        I = "executing";
        var P = d(T, M, O);
        if (P.type === "normal") {
          if (((I = O.done ? "completed" : "suspendedYield"), P.arg === f))
            continue;
          return { value: P.arg, done: O.done };
        }
        P.type === "throw" &&
          ((I = "completed"), (O.method = "throw"), (O.arg = P.arg));
      }
    };
  }
  a(x, "makeInvokeMethod");
  function E(T, M) {
    var O = M.method,
      I = T.iterator[O];
    if (I === void 0)
      return (
        (M.delegate = null),
        (O === "throw" &&
          T.iterator.return &&
          ((M.method = "return"),
          (M.arg = void 0),
          E(T, M),
          M.method === "throw")) ||
          (O !== "return" &&
            ((M.method = "throw"),
            (M.arg = new TypeError(
              "The iterator does not provide a '" + O + "' method"
            )))),
        f
      );
    var N = d(I, T.iterator, M.arg);
    if (N.type === "throw")
      return (M.method = "throw"), (M.arg = N.arg), (M.delegate = null), f;
    var R = N.arg;
    return R
      ? R.done
        ? ((M[T.resultName] = R.value),
          (M.next = T.nextLoc),
          M.method !== "return" && ((M.method = "next"), (M.arg = void 0)),
          (M.delegate = null),
          f)
        : R
      : ((M.method = "throw"),
        (M.arg = new TypeError("iterator result is not an object")),
        (M.delegate = null),
        f);
  }
  a(E, "maybeInvokeDelegate");
  function C(T) {
    var M = { tryLoc: T[0] };
    1 in T && (M.catchLoc = T[1]),
      2 in T && ((M.finallyLoc = T[2]), (M.afterLoc = T[3])),
      this.tryEntries.push(M);
  }
  a(C, "pushTryEntry");
  function S(T) {
    var M = T.completion || {};
    (M.type = "normal"), delete M.arg, (T.completion = M);
  }
  a(S, "resetTryEntry");
  function A(T) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      T.forEach(C, this),
      this.reset(!0);
  }
  a(A, "Context");
  function k(T) {
    if (T) {
      var M = T[s];
      if (M) return M.call(T);
      if (typeof T.next == "function") return T;
      if (!isNaN(T.length)) {
        var O = -1,
          I = a(function N() {
            for (; ++O < T.length; )
              if (t.call(T, O)) return (N.value = T[O]), (N.done = !1), N;
            return (N.value = void 0), (N.done = !0), N;
          }, "next");
        return (I.next = I);
      }
    }
    return { next: L };
  }
  a(k, "values");
  function L() {
    return { value: void 0, done: !0 };
  }
  return (
    a(L, "doneResult"),
    (h.prototype = m),
    i(y, "constructor", { value: m, configurable: !0 }),
    i(m, "constructor", { value: h, configurable: !0 }),
    (h.displayName = u(m, l, "GeneratorFunction")),
    (n.isGeneratorFunction = function (T) {
      var M = typeof T == "function" && T.constructor;
      return (
        !!M && (M === h || (M.displayName || M.name) === "GeneratorFunction")
      );
    }),
    (n.mark = function (T) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(T, m)
          : ((T.__proto__ = m), u(T, l, "GeneratorFunction")),
        (T.prototype = Object.create(y)),
        T
      );
    }),
    (n.awrap = function (T) {
      return { __await: T };
    }),
    _(v.prototype),
    u(v.prototype, o, function () {
      return this;
    }),
    (n.AsyncIterator = v),
    (n.async = function (T, M, O, I, N) {
      N === void 0 && (N = Promise);
      var R = new v(c(T, M, O, I), N);
      return n.isGeneratorFunction(M)
        ? R
        : R.next().then(function (B) {
            return B.done ? B.value : R.next();
          });
    }),
    _(y),
    u(y, l, "Generator"),
    u(y, s, function () {
      return this;
    }),
    u(y, "toString", function () {
      return "[object Generator]";
    }),
    (n.keys = function (T) {
      var M = Object(T),
        O = [];
      for (var I in M) O.push(I);
      return (
        O.reverse(),
        a(function N() {
          for (; O.length; ) {
            var R = O.pop();
            if (R in M) return (N.value = R), (N.done = !1), N;
          }
          return (N.done = !0), N;
        }, "next")
      );
    }),
    (n.values = k),
    (A.prototype = {
      constructor: A,
      reset: a(function (T) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = void 0),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = void 0),
          this.tryEntries.forEach(S),
          !T)
        )
          for (var M in this)
            M.charAt(0) === "t" &&
              t.call(this, M) &&
              !isNaN(+M.slice(1)) &&
              (this[M] = void 0);
      }, "reset"),
      stop: a(function () {
        this.done = !0;
        var T = this.tryEntries[0].completion;
        if (T.type === "throw") throw T.arg;
        return this.rval;
      }, "stop"),
      dispatchException: a(function (T) {
        if (this.done) throw T;
        var M = this;
        function O(P, X) {
          return (
            (R.type = "throw"),
            (R.arg = T),
            (M.next = P),
            X && ((M.method = "next"), (M.arg = void 0)),
            !!X
          );
        }
        a(O, "handle");
        for (var I = this.tryEntries.length - 1; I >= 0; --I) {
          var N = this.tryEntries[I],
            R = N.completion;
          if (N.tryLoc === "root") return O("end");
          if (N.tryLoc <= this.prev) {
            var B = t.call(N, "catchLoc"),
              q = t.call(N, "finallyLoc");
            if (B && q) {
              if (this.prev < N.catchLoc) return O(N.catchLoc, !0);
              if (this.prev < N.finallyLoc) return O(N.finallyLoc);
            } else if (B) {
              if (this.prev < N.catchLoc) return O(N.catchLoc, !0);
            } else {
              if (!q) throw new Error("try statement without catch or finally");
              if (this.prev < N.finallyLoc) return O(N.finallyLoc);
            }
          }
        }
      }, "dispatchException"),
      abrupt: a(function (T, M) {
        for (var O = this.tryEntries.length - 1; O >= 0; --O) {
          var I = this.tryEntries[O];
          if (
            I.tryLoc <= this.prev &&
            t.call(I, "finallyLoc") &&
            this.prev < I.finallyLoc
          ) {
            var N = I;
            break;
          }
        }
        N &&
          (T === "break" || T === "continue") &&
          N.tryLoc <= M &&
          M <= N.finallyLoc &&
          (N = null);
        var R = N ? N.completion : {};
        return (
          (R.type = T),
          (R.arg = M),
          N
            ? ((this.method = "next"), (this.next = N.finallyLoc), f)
            : this.complete(R)
        );
      }, "abrupt"),
      complete: a(function (T, M) {
        if (T.type === "throw") throw T.arg;
        return (
          T.type === "break" || T.type === "continue"
            ? (this.next = T.arg)
            : T.type === "return"
            ? ((this.rval = this.arg = T.arg),
              (this.method = "return"),
              (this.next = "end"))
            : T.type === "normal" && M && (this.next = M),
          f
        );
      }, "complete"),
      finish: a(function (T) {
        for (var M = this.tryEntries.length - 1; M >= 0; --M) {
          var O = this.tryEntries[M];
          if (O.finallyLoc === T)
            return this.complete(O.completion, O.afterLoc), S(O), f;
        }
      }, "finish"),
      catch: a(function (T) {
        for (var M = this.tryEntries.length - 1; M >= 0; --M) {
          var O = this.tryEntries[M];
          if (O.tryLoc === T) {
            var I = O.completion;
            if (I.type === "throw") {
              var N = I.arg;
              S(O);
            }
            return N;
          }
        }
        throw new Error("illegal catch attempt");
      }, "catch"),
      delegateYield: a(function (T, M, O) {
        return (
          (this.delegate = { iterator: k(T), resultName: M, nextLoc: O }),
          this.method === "next" && (this.arg = void 0),
          f
        );
      }, "delegateYield"),
    }),
    n
  );
}
a(pt, "_regeneratorRuntime");
function Wl(n, e, t, i, r, s, o) {
  try {
    var l = n[s](o),
      u = l.value;
  } catch (c) {
    t(c);
    return;
  }
  l.done ? e(u) : Promise.resolve(u).then(i, r);
}
a(Wl, "asyncGeneratorStep");
function dr(n) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (i, r) {
      var s = n.apply(e, t);
      function o(u) {
        Wl(s, i, r, o, l, "next", u);
      }
      a(o, "_next");
      function l(u) {
        Wl(s, i, r, o, l, "throw", u);
      }
      a(l, "_throw"), o(void 0);
    });
  };
}
a(dr, "_asyncToGenerator");
function ic(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
a(ic, "_classCallCheck");
function _f(n, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(n, sc(i.key), i);
  }
}
a(_f, "_defineProperties$1");
function rc(n, e, t) {
  return (
    e && _f(n.prototype, e),
    Object.defineProperty(n, "prototype", { writable: !1 }),
    n
  );
}
a(rc, "_createClass$1");
function Bs(n, e, t) {
  return (
    (e = sc(e)),
    e in n
      ? Object.defineProperty(n, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[e] = t),
    n
  );
}
a(Bs, "_defineProperty");
function wf(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (n.prototype = Object.create(e && e.prototype, {
    constructor: { value: n, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(n, "prototype", { writable: !1 }),
    e && ns(n, e);
}
a(wf, "_inherits");
function rs(n) {
  return (
    (rs = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : a(function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }, "_getPrototypeOf")),
    rs(n)
  );
}
a(rs, "_getPrototypeOf");
function ns(n, e) {
  return (
    (ns = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : a(function (i, r) {
          return (i.__proto__ = r), i;
        }, "_setPrototypeOf")),
    ns(n, e)
  );
}
a(ns, "_setPrototypeOf");
function nc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
a(nc, "_isNativeReflectConstruct");
function Vs(n, e, t) {
  return (
    nc()
      ? (Vs = Reflect.construct.bind())
      : (Vs = a(function (r, s, o) {
          var l = [null];
          l.push.apply(l, s);
          var u = Function.bind.apply(r, l),
            c = new u();
          return o && ns(c, o.prototype), c;
        }, "_construct")),
    Vs.apply(null, arguments)
  );
}
a(Vs, "_construct");
function bf(n) {
  return Function.toString.call(n).indexOf("[native code]") !== -1;
}
a(bf, "_isNativeFunction");
function ca(n) {
  var e = typeof Map == "function" ? new Map() : void 0;
  return (
    (ca = a(function (i) {
      if (i === null || !bf(i)) return i;
      if (typeof i != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof e < "u") {
        if (e.has(i)) return e.get(i);
        e.set(i, r);
      }
      function r() {
        return Vs(i, arguments, rs(this).constructor);
      }
      return (
        a(r, "Wrapper"),
        (r.prototype = Object.create(i.prototype, {
          constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        ns(r, i)
      );
    }, "_wrapNativeSuper")),
    ca(n)
  );
}
a(ca, "_wrapNativeSuper");
function qs(n) {
  if (n === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return n;
}
a(qs, "_assertThisInitialized$1");
function xf(n, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return qs(n);
}
a(xf, "_possibleConstructorReturn");
function Sf(n) {
  var e = nc();
  return a(function () {
    var i = rs(n),
      r;
    if (e) {
      var s = rs(this).constructor;
      r = Reflect.construct(i, arguments, s);
    } else r = i.apply(this, arguments);
    return xf(this, r);
  }, "_createSuperInternal");
}
a(Sf, "_createSuper");
function Tf(n, e) {
  if (typeof n != "object" || n === null) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(n, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
a(Tf, "_toPrimitive");
function sc(n) {
  var e = Tf(n, "string");
  return typeof e == "symbol" ? e : String(e);
}
a(sc, "_toPropertyKey");
var oc = typeof global < "u" && {}.toString.call(global) === "[object global]";
function Hl(n, e) {
  return n.indexOf(e.toLowerCase()) === 0
    ? n
    : ""
        .concat(e.toLowerCase())
        .concat(n.substr(0, 1).toUpperCase())
        .concat(n.substr(1));
}
a(Hl, "getMethodName");
function Ef(n) {
  return !!(
    n &&
    n.nodeType === 1 &&
    "nodeName" in n &&
    n.ownerDocument &&
    n.ownerDocument.defaultView
  );
}
a(Ef, "isDomElement");
function Cf(n) {
  return !isNaN(parseFloat(n)) && isFinite(n) && Math.floor(n) == n;
}
a(Cf, "isInteger");
function kr(n) {
  return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(
    n
  );
}
a(kr, "isVimeoUrl");
function ac(n) {
  var e =
    /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
  return e.test(n);
}
a(ac, "isVimeoEmbed");
function kf(n) {
  for (
    var e = (n || "").match(/^(?:https?:)?(?:\/\/)?([^/?]+)/),
      t = ((e && e[1]) || "").replace("player.", ""),
      i = [".videoji.hk", ".vimeo.work", ".videoji.cn"],
      r = 0,
      s = i;
    r < s.length;
    r++
  ) {
    var o = s[r];
    if (t.endsWith(o)) return t;
  }
  return "vimeo.com";
}
a(kf, "getOembedDomain");
function lc() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    e = n.id,
    t = n.url,
    i = e || t;
  if (!i)
    throw new Error(
      "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
    );
  if (Cf(i)) return "https://vimeo.com/".concat(i);
  if (kr(i)) return i.replace("http:", "https:");
  throw e
    ? new TypeError("“".concat(e, "” is not a valid video id."))
    : new TypeError("“".concat(i, "” is not a vimeo.com url."));
}
a(lc, "getVimeoUrl");
var Gl = a(function (e, t, i) {
    var r =
        arguments.length > 3 && arguments[3] !== void 0
          ? arguments[3]
          : "addEventListener",
      s =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : "removeEventListener",
      o = typeof t == "string" ? [t] : t;
    return (
      o.forEach(function (l) {
        e[r](l, i);
      }),
      {
        cancel: a(function () {
          return o.forEach(function (u) {
            return e[s](u, i);
          });
        }, "cancel"),
      }
    );
  }, "subscribe"),
  Pf = typeof Array.prototype.indexOf < "u",
  Mf = typeof window < "u" && typeof window.postMessage < "u";
if (!oc && (!Pf || !Mf))
  throw new Error(
    "Sorry, the Vimeo Player API is not available in this browser."
  );
var Jr =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Af(n, e) {
  return (e = { exports: {} }), n(e, e.exports), e.exports;
}
a(Af, "createCommonjsModule");
(function (n) {
  if (n.WeakMap) return;
  var e = Object.prototype.hasOwnProperty,
    t =
      Object.defineProperty &&
      (function () {
        try {
          return Object.defineProperty({}, "x", { value: 1 }).x === 1;
        } catch {}
      })(),
    i = a(function (s, o, l) {
      t
        ? Object.defineProperty(s, o, {
            configurable: !0,
            writable: !0,
            value: l,
          })
        : (s[o] = l);
    }, "defineProperty");
  n.WeakMap = (function () {
    function s() {
      if (this === void 0)
        throw new TypeError("Constructor WeakMap requires 'new'");
      if ((i(this, "_id", l("_WeakMap")), arguments.length > 0))
        throw new TypeError("WeakMap iterable is not supported");
    }
    a(s, "WeakMap"),
      i(s.prototype, "delete", function (c) {
        if ((o(this, "delete"), !r(c))) return !1;
        var d = c[this._id];
        return d && d[0] === c ? (delete c[this._id], !0) : !1;
      }),
      i(s.prototype, "get", function (c) {
        if ((o(this, "get"), !!r(c))) {
          var d = c[this._id];
          if (d && d[0] === c) return d[1];
        }
      }),
      i(s.prototype, "has", function (c) {
        if ((o(this, "has"), !r(c))) return !1;
        var d = c[this._id];
        return !!(d && d[0] === c);
      }),
      i(s.prototype, "set", function (c, d) {
        if ((o(this, "set"), !r(c)))
          throw new TypeError("Invalid value used as weak map key");
        var f = c[this._id];
        return f && f[0] === c
          ? ((f[1] = d), this)
          : (i(c, this._id, [c, d]), this);
      });
    function o(c, d) {
      if (!r(c) || !e.call(c, "_id"))
        throw new TypeError(
          d + " method called on incompatible receiver " + typeof c
        );
    }
    a(o, "checkInstance");
    function l(c) {
      return c + "_" + u() + "." + u();
    }
    a(l, "genId");
    function u() {
      return Math.random().toString().substring(2);
    }
    return a(u, "rand"), i(s, "_polyfill", !0), s;
  })();
  function r(s) {
    return Object(s) === s;
  }
  a(r, "isObject");
})(
  typeof globalThis < "u"
    ? globalThis
    : typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : Jr
);
var Wt = Af(function (n) {
    a(function (t, i, r) {
      (i[t] = i[t] || r()), n.exports && (n.exports = i[t]);
    }, "UMD")(
      "Promise",
      Jr,
      a(function () {
        var t,
          i,
          r,
          s = Object.prototype.toString,
          o =
            typeof setImmediate < "u"
              ? a(function (_) {
                  return setImmediate(_);
                }, "timer")
              : setTimeout;
        try {
          t = a(function (_, v, x, E) {
            return Object.defineProperty(_, v, {
              value: x,
              writable: !0,
              configurable: E !== !1,
            });
          }, "builtInProp");
        } catch {
          t = a(function (v, x, E) {
            return (v[x] = E), v;
          }, "builtInProp");
        }
        r = a(function () {
          var _, v, x;
          function E(C, S) {
            (this.fn = C), (this.self = S), (this.next = void 0);
          }
          return (
            a(E, "Item"),
            {
              add: a(function (S, A) {
                (x = new E(S, A)),
                  v ? (v.next = x) : (_ = x),
                  (v = x),
                  (x = void 0);
              }, "add"),
              drain: a(function () {
                var S = _;
                for (_ = v = i = void 0; S; ) S.fn.call(S.self), (S = S.next);
              }, "drain"),
            }
          );
        }, "Queue")();
        function l(y, _) {
          r.add(y, _), i || (i = o(r.drain));
        }
        a(l, "schedule");
        function u(y) {
          var _,
            v = typeof y;
          return (
            y != null && (v == "object" || v == "function") && (_ = y.then),
            typeof _ == "function" ? _ : !1
          );
        }
        a(u, "isThenable");
        function c() {
          for (var y = 0; y < this.chain.length; y++)
            d(
              this,
              this.state === 1 ? this.chain[y].success : this.chain[y].failure,
              this.chain[y]
            );
          this.chain.length = 0;
        }
        a(c, "notify");
        function d(y, _, v) {
          var x, E;
          try {
            _ === !1
              ? v.reject(y.msg)
              : (_ === !0 ? (x = y.msg) : (x = _.call(void 0, y.msg)),
                x === v.promise
                  ? v.reject(TypeError("Promise-chain cycle"))
                  : (E = u(x))
                  ? E.call(x, v.resolve, v.reject)
                  : v.resolve(x));
          } catch (C) {
            v.reject(C);
          }
        }
        a(d, "notifyIsolated");
        function f(y) {
          var _,
            v = this;
          if (!v.triggered) {
            (v.triggered = !0), v.def && (v = v.def);
            try {
              (_ = u(y))
                ? l(function () {
                    var x = new m(v);
                    try {
                      _.call(
                        y,
                        a(function () {
                          f.apply(x, arguments);
                        }, "$resolve$"),
                        a(function () {
                          p.apply(x, arguments);
                        }, "$reject$")
                      );
                    } catch (E) {
                      p.call(x, E);
                    }
                  })
                : ((v.msg = y), (v.state = 1), v.chain.length > 0 && l(c, v));
            } catch (x) {
              p.call(new m(v), x);
            }
          }
        }
        a(f, "resolve");
        function p(y) {
          var _ = this;
          _.triggered ||
            ((_.triggered = !0),
            _.def && (_ = _.def),
            (_.msg = y),
            (_.state = 2),
            _.chain.length > 0 && l(c, _));
        }
        a(p, "reject");
        function h(y, _, v, x) {
          for (var E = 0; E < _.length; E++)
            a(function (S) {
              y.resolve(_[S]).then(
                a(function (k) {
                  v(S, k);
                }, "$resolver$"),
                x
              );
            }, "IIFE")(E);
        }
        a(h, "iteratePromises");
        function m(y) {
          (this.def = y), (this.triggered = !1);
        }
        a(m, "MakeDefWrapper");
        function g(y) {
          (this.promise = y),
            (this.state = 0),
            (this.triggered = !1),
            (this.chain = []),
            (this.msg = void 0);
        }
        a(g, "MakeDef");
        function w(y) {
          if (typeof y != "function") throw TypeError("Not a function");
          if (this.__NPO__ !== 0) throw TypeError("Not a promise");
          this.__NPO__ = 1;
          var _ = new g(this);
          (this.then = a(function (x, E) {
            var C = {
              success: typeof x == "function" ? x : !0,
              failure: typeof E == "function" ? E : !1,
            };
            return (
              (C.promise = new this.constructor(
                a(function (A, k) {
                  if (typeof A != "function" || typeof k != "function")
                    throw TypeError("Not a function");
                  (C.resolve = A), (C.reject = k);
                }, "extractChain")
              )),
              _.chain.push(C),
              _.state !== 0 && l(c, _),
              C.promise
            );
          }, "then")),
            (this.catch = a(function (x) {
              return this.then(void 0, x);
            }, "$catch$"));
          try {
            y.call(
              void 0,
              a(function (x) {
                f.call(_, x);
              }, "publicResolve"),
              a(function (x) {
                p.call(_, x);
              }, "publicReject")
            );
          } catch (v) {
            p.call(_, v);
          }
        }
        a(w, "Promise");
        var b = t({}, "constructor", w, !1);
        return (
          (w.prototype = b),
          t(b, "__NPO__", 0, !1),
          t(
            w,
            "resolve",
            a(function (_) {
              var v = this;
              return _ && typeof _ == "object" && _.__NPO__ === 1
                ? _
                : new v(
                    a(function (E, C) {
                      if (typeof E != "function" || typeof C != "function")
                        throw TypeError("Not a function");
                      E(_);
                    }, "executor")
                  );
            }, "Promise$resolve")
          ),
          t(
            w,
            "reject",
            a(function (_) {
              return new this(
                a(function (x, E) {
                  if (typeof x != "function" || typeof E != "function")
                    throw TypeError("Not a function");
                  E(_);
                }, "executor")
              );
            }, "Promise$reject")
          ),
          t(
            w,
            "all",
            a(function (_) {
              var v = this;
              return s.call(_) != "[object Array]"
                ? v.reject(TypeError("Not an array"))
                : _.length === 0
                ? v.resolve([])
                : new v(
                    a(function (E, C) {
                      if (typeof E != "function" || typeof C != "function")
                        throw TypeError("Not a function");
                      var S = _.length,
                        A = Array(S),
                        k = 0;
                      h(
                        v,
                        _,
                        a(function (T, M) {
                          (A[T] = M), ++k === S && E(A);
                        }, "resolver"),
                        C
                      );
                    }, "executor")
                  );
            }, "Promise$all")
          ),
          t(
            w,
            "race",
            a(function (_) {
              var v = this;
              return s.call(_) != "[object Array]"
                ? v.reject(TypeError("Not an array"))
                : new v(
                    a(function (E, C) {
                      if (typeof E != "function" || typeof C != "function")
                        throw TypeError("Not a function");
                      h(
                        v,
                        _,
                        a(function (A, k) {
                          E(k);
                        }, "resolver"),
                        C
                      );
                    }, "executor")
                  );
            }, "Promise$race")
          ),
          w
        );
      }, "DEF")
    );
  }),
  Oi = new WeakMap();
function Cn(n, e, t) {
  var i = Oi.get(n.element) || {};
  e in i || (i[e] = []), i[e].push(t), Oi.set(n.element, i);
}
a(Cn, "storeCallback");
function io(n, e) {
  var t = Oi.get(n.element) || {};
  return t[e] || [];
}
a(io, "getCallbacks");
function ro(n, e, t) {
  var i = Oi.get(n.element) || {};
  if (!i[e]) return !0;
  if (!t) return (i[e] = []), Oi.set(n.element, i), !0;
  var r = i[e].indexOf(t);
  return (
    r !== -1 && i[e].splice(r, 1),
    Oi.set(n.element, i),
    i[e] && i[e].length === 0
  );
}
a(ro, "removeCallback");
function Of(n, e) {
  var t = io(n, e);
  if (t.length < 1) return !1;
  var i = t.shift();
  return ro(n, e, i), i;
}
a(Of, "shiftCallbacks");
function Lf(n, e) {
  var t = Oi.get(n);
  Oi.set(e, t), Oi.delete(n);
}
a(Lf, "swapCallbacks");
function So(n) {
  if (typeof n == "string")
    try {
      n = JSON.parse(n);
    } catch {
      return {};
    }
  return n;
}
a(So, "parseMessageData");
function lr(n, e, t) {
  if (!(!n.element.contentWindow || !n.element.contentWindow.postMessage)) {
    var i = { method: e };
    t !== void 0 && (i.value = t);
    var r = parseFloat(
      navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1")
    );
    r >= 8 && r < 10 && (i = JSON.stringify(i)),
      n.element.contentWindow.postMessage(i, n.origin);
  }
}
a(lr, "postMessage");
function Df(n, e) {
  e = So(e);
  var t = [],
    i;
  if (e.event) {
    if (e.event === "error") {
      var r = io(n, e.data.method);
      r.forEach(function (o) {
        var l = new Error(e.data.message);
        (l.name = e.data.name), o.reject(l), ro(n, e.data.method, o);
      });
    }
    (t = io(n, "event:".concat(e.event))), (i = e.data);
  } else if (e.method) {
    var s = Of(n, e.method);
    s && (t.push(s), (i = e.value));
  }
  t.forEach(function (o) {
    try {
      if (typeof o == "function") {
        o.call(n, i);
        return;
      }
      o.resolve(i);
    } catch {}
  });
}
a(Df, "processData");
var If = [
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
function uc(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return If.reduce(function (t, i) {
    var r = n.getAttribute("data-vimeo-".concat(i));
    return (r || r === "") && (t[i] = r === "" ? 1 : r), t;
  }, e);
}
a(uc, "getOEmbedParameters");
function ja(n, e) {
  var t = n.html;
  if (!e) throw new TypeError("An element must be provided");
  if (e.getAttribute("data-vimeo-initialized") !== null)
    return e.querySelector("iframe");
  var i = document.createElement("div");
  return (
    (i.innerHTML = t),
    e.appendChild(i.firstChild),
    e.setAttribute("data-vimeo-initialized", "true"),
    e.querySelector("iframe")
  );
}
a(ja, "createEmbed");
function cc(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = arguments.length > 2 ? arguments[2] : void 0;
  return new Promise(function (i, r) {
    if (!kr(n)) throw new TypeError("“".concat(n, "” is not a vimeo.com url."));
    var s = kf(n),
      o = "https://"
        .concat(s, "/api/oembed.json?url=")
        .concat(encodeURIComponent(n));
    for (var l in e)
      e.hasOwnProperty(l) &&
        (o += "&".concat(l, "=").concat(encodeURIComponent(e[l])));
    var u =
      "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
    u.open("GET", o, !0),
      (u.onload = function () {
        if (u.status === 404) {
          r(new Error("“".concat(n, "” was not found.")));
          return;
        }
        if (u.status === 403) {
          r(new Error("“".concat(n, "” is not embeddable.")));
          return;
        }
        try {
          var c = JSON.parse(u.responseText);
          if (c.domain_status_code === 403) {
            ja(c, t), r(new Error("“".concat(n, "” is not embeddable.")));
            return;
          }
          i(c);
        } catch (d) {
          r(d);
        }
      }),
      (u.onerror = function () {
        var c = u.status ? " (".concat(u.status, ")") : "";
        r(
          new Error(
            "There was an error fetching the embed code from Vimeo".concat(
              c,
              "."
            )
          )
        );
      }),
      u.send();
  });
}
a(cc, "getOEmbedData");
function zf() {
  var n =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document,
    e = [].slice.call(n.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
    t = a(function (r) {
      "console" in window;
    }, "handleError");
  e.forEach(function (i) {
    try {
      if (i.getAttribute("data-vimeo-defer") !== null) return;
      var r = uc(i),
        s = lc(r);
      cc(s, r, i)
        .then(function (o) {
          return ja(o, i);
        })
        .catch(t);
    } catch (o) {
      t(o);
    }
  });
}
a(zf, "initializeEmbeds");
function Nf() {
  var n =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoPlayerResizeEmbeds_) {
    window.VimeoPlayerResizeEmbeds_ = !0;
    var e = a(function (i) {
      if (kr(i.origin) && !(!i.data || i.data.event !== "spacechange")) {
        for (var r = n.querySelectorAll("iframe"), s = 0; s < r.length; s++)
          if (r[s].contentWindow === i.source) {
            var o = r[s].parentElement;
            o.style.paddingBottom = "".concat(i.data.data[0].bottom, "px");
            break;
          }
      }
    }, "onMessage");
    window.addEventListener("message", e);
  }
}
a(Nf, "resizeEmbeds");
function Rf() {
  var n =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoSeoMetadataAppended) {
    window.VimeoSeoMetadataAppended = !0;
    var e = a(function (i) {
      if (kr(i.origin)) {
        var r = So(i.data);
        if (!(!r || r.event !== "ready"))
          for (var s = n.querySelectorAll("iframe"), o = 0; o < s.length; o++) {
            var l = s[o],
              u = l.contentWindow === i.source;
            if (ac(l.src) && u) {
              var c = new Bn(l);
              c.callMethod("appendVideoMetadata", window.location.href);
            }
          }
      }
    }, "onMessage");
    window.addEventListener("message", e);
  }
}
a(Rf, "initAppendVideoMetadata");
function $f() {
  var n =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoCheckedUrlTimeParam) {
    window.VimeoCheckedUrlTimeParam = !0;
    var e = a(function (r) {
        "console" in window;
      }, "handleError"),
      t = a(function (r) {
        if (kr(r.origin)) {
          var s = So(r.data);
          if (!(!s || s.event !== "ready"))
            for (
              var o = n.querySelectorAll("iframe"),
                l = a(function () {
                  var d = o[u],
                    f = d.contentWindow === r.source;
                  if (ac(d.src) && f) {
                    var p = new Bn(d);
                    p.getVideoId()
                      .then(function (h) {
                        var m = new RegExp(
                          "[?&]vimeo_t_".concat(h, "=([^&#]*)")
                        ).exec(window.location.href);
                        if (m && m[1]) {
                          var g = decodeURI(m[1]);
                          p.setCurrentTime(g);
                        }
                      })
                      .catch(e);
                  }
                }, "_loop"),
                u = 0;
              u < o.length;
              u++
            )
              l();
        }
      }, "onMessage");
    window.addEventListener("message", t);
  }
}
a($f, "checkUrlTimeParam");
function Ff() {
  var n = (function () {
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
          o = r.length,
          l = {};
        s < o;
        s++
      )
        if (((i = r[s]), i && i[1] in document)) {
          for (s = 0; s < i.length; s++) l[r[0][s]] = i[s];
          return l;
        }
      return !1;
    })(),
    e = {
      fullscreenchange: n.fullscreenchange,
      fullscreenerror: n.fullscreenerror,
    },
    t = {
      request: a(function (r) {
        return new Promise(function (s, o) {
          var l = a(function c() {
            t.off("fullscreenchange", c), s();
          }, "onFullScreenEntered");
          t.on("fullscreenchange", l), (r = r || document.documentElement);
          var u = r[n.requestFullscreen]();
          u instanceof Promise && u.then(l).catch(o);
        });
      }, "request"),
      exit: a(function () {
        return new Promise(function (r, s) {
          if (!t.isFullscreen) {
            r();
            return;
          }
          var o = a(function u() {
            t.off("fullscreenchange", u), r();
          }, "onFullScreenExit");
          t.on("fullscreenchange", o);
          var l = document[n.exitFullscreen]();
          l instanceof Promise && l.then(o).catch(s);
        });
      }, "exit"),
      on: a(function (r, s) {
        var o = e[r];
        o && document.addEventListener(o, s);
      }, "on"),
      off: a(function (r, s) {
        var o = e[r];
        o && document.removeEventListener(o, s);
      }, "off"),
    };
  return (
    Object.defineProperties(t, {
      isFullscreen: {
        get: a(function () {
          return !!document[n.fullscreenElement];
        }, "get"),
      },
      element: {
        enumerable: !0,
        get: a(function () {
          return document[n.fullscreenElement];
        }, "get"),
      },
      isEnabled: {
        enumerable: !0,
        get: a(function () {
          return !!document[n.fullscreenEnabled];
        }, "get"),
      },
    }),
    t
  );
}
a(Ff, "initializeScreenfull");
var Bf = {
    role: "viewer",
    autoPlayMuted: !0,
    allowedDrift: 0.3,
    maxAllowedDrift: 1,
    minCheckInterval: 0.1,
    maxRateAdjustment: 0.2,
    maxTimeToCatchUp: 1,
  },
  Vf = (function (n) {
    wf(t, n);
    var e = Sf(t);
    function t(i, r) {
      var s,
        o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        l = arguments.length > 3 ? arguments[3] : void 0;
      return (
        ic(this, t),
        (s = e.call(this)),
        Bs(qs(s), "logger", void 0),
        Bs(qs(s), "speedAdjustment", 0),
        Bs(
          qs(s),
          "adjustSpeed",
          (function () {
            var u = dr(
              pt().mark(
                a(function c(d, f) {
                  var p;
                  return pt().wrap(
                    a(function (m) {
                      for (;;)
                        switch ((m.prev = m.next)) {
                          case 0:
                            if (s.speedAdjustment !== f) {
                              m.next = 2;
                              break;
                            }
                            return m.abrupt("return");
                          case 2:
                            return (m.next = 4), d.getPlaybackRate();
                          case 4:
                            return (
                              (m.t0 = m.sent),
                              (m.t1 = s.speedAdjustment),
                              (m.t2 = m.t0 - m.t1),
                              (m.t3 = f),
                              (p = m.t2 + m.t3),
                              s.log("New playbackRate:  ".concat(p)),
                              (m.next = 12),
                              d.setPlaybackRate(p)
                            );
                          case 12:
                            s.speedAdjustment = f;
                          case 13:
                          case "end":
                            return m.stop();
                        }
                    }, "_callee$"),
                    c
                  );
                }, "_callee")
              )
            );
            return function (c, d) {
              return u.apply(this, arguments);
            };
          })()
        ),
        (s.logger = l),
        s.init(r, i, ql(ql({}, Bf), o)),
        s
      );
    }
    return (
      a(t, "TimingSrcConnector"),
      rc(t, [
        {
          key: "disconnect",
          value: a(function () {
            this.dispatchEvent(new Event("disconnect"));
          }, "disconnect"),
        },
        {
          key: "init",
          value: (function () {
            var i = dr(
              pt().mark(
                a(function s(o, l, u) {
                  var c = this,
                    d,
                    f,
                    p;
                  return pt().wrap(
                    a(function (m) {
                      for (;;)
                        switch ((m.prev = m.next)) {
                          case 0:
                            return (
                              (m.next = 2), this.waitForTOReadyState(o, "open")
                            );
                          case 2:
                            if (u.role !== "viewer") {
                              m.next = 10;
                              break;
                            }
                            return (m.next = 5), this.updatePlayer(o, l, u);
                          case 5:
                            (d = Gl(o, "change", function () {
                              return c.updatePlayer(o, l, u);
                            })),
                              (f = this.maintainPlaybackPosition(o, l, u)),
                              this.addEventListener("disconnect", function () {
                                f.cancel(), d.cancel();
                              }),
                              (m.next = 14);
                            break;
                          case 10:
                            return (m.next = 12), this.updateTimingObject(o, l);
                          case 12:
                            (p = Gl(
                              l,
                              ["seeked", "play", "pause", "ratechange"],
                              function () {
                                return c.updateTimingObject(o, l);
                              },
                              "on",
                              "off"
                            )),
                              this.addEventListener("disconnect", function () {
                                return p.cancel();
                              });
                          case 14:
                          case "end":
                            return m.stop();
                        }
                    }, "_callee2$"),
                    s,
                    this
                  );
                }, "_callee2")
              )
            );
            function r(s, o, l) {
              return i.apply(this, arguments);
            }
            return a(r, "init"), r;
          })(),
        },
        {
          key: "updateTimingObject",
          value: (function () {
            var i = dr(
              pt().mark(
                a(function s(o, l) {
                  return pt().wrap(
                    a(function (c) {
                      for (;;)
                        switch ((c.prev = c.next)) {
                          case 0:
                            return (c.t0 = o), (c.next = 3), l.getCurrentTime();
                          case 3:
                            return (c.t1 = c.sent), (c.next = 6), l.getPaused();
                          case 6:
                            if (!c.sent) {
                              c.next = 10;
                              break;
                            }
                            (c.t2 = 0), (c.next = 13);
                            break;
                          case 10:
                            return (c.next = 12), l.getPlaybackRate();
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
                    }, "_callee3$"),
                    s
                  );
                }, "_callee3")
              )
            );
            function r(s, o) {
              return i.apply(this, arguments);
            }
            return a(r, "updateTimingObject"), r;
          })(),
        },
        {
          key: "updatePlayer",
          value: (function () {
            var i = dr(
              pt().mark(
                a(function s(o, l, u) {
                  var c, d, f;
                  return pt().wrap(
                    a(function (h) {
                      for (;;)
                        switch ((h.prev = h.next)) {
                          case 0:
                            if (
                              ((c = o.query()),
                              (d = c.position),
                              (f = c.velocity),
                              typeof d == "number" && l.setCurrentTime(d),
                              typeof f != "number")
                            ) {
                              h.next = 25;
                              break;
                            }
                            if (f !== 0) {
                              h.next = 11;
                              break;
                            }
                            return (h.next = 6), l.getPaused();
                          case 6:
                            if (((h.t0 = h.sent), h.t0 !== !1)) {
                              h.next = 9;
                              break;
                            }
                            l.pause();
                          case 9:
                            h.next = 25;
                            break;
                          case 11:
                            if (!(f > 0)) {
                              h.next = 25;
                              break;
                            }
                            return (h.next = 14), l.getPaused();
                          case 14:
                            if (((h.t1 = h.sent), h.t1 !== !0)) {
                              h.next = 19;
                              break;
                            }
                            return (
                              (h.next = 18),
                              l.play().catch(
                                (function () {
                                  var m = dr(
                                    pt().mark(
                                      a(function g(w) {
                                        return pt().wrap(
                                          a(function (y) {
                                            for (;;)
                                              switch ((y.prev = y.next)) {
                                                case 0:
                                                  if (
                                                    !(
                                                      w.name ===
                                                        "NotAllowedError" &&
                                                      u.autoPlayMuted
                                                    )
                                                  ) {
                                                    y.next = 5;
                                                    break;
                                                  }
                                                  return (
                                                    (y.next = 3), l.setMuted(!0)
                                                  );
                                                case 3:
                                                  return (
                                                    (y.next = 5),
                                                    l
                                                      .play()
                                                      .catch(function (_) {})
                                                  );
                                                case 5:
                                                case "end":
                                                  return y.stop();
                                              }
                                          }, "_callee4$"),
                                          g
                                        );
                                      }, "_callee4")
                                    )
                                  );
                                  return function (g) {
                                    return m.apply(this, arguments);
                                  };
                                })()
                              )
                            );
                          case 18:
                            this.updatePlayer(o, l, u);
                          case 19:
                            return (h.next = 21), l.getPlaybackRate();
                          case 21:
                            if (((h.t2 = h.sent), (h.t3 = f), h.t2 === h.t3)) {
                              h.next = 25;
                              break;
                            }
                            l.setPlaybackRate(f);
                          case 25:
                          case "end":
                            return h.stop();
                        }
                    }, "_callee5$"),
                    s,
                    this
                  );
                }, "_callee5")
              )
            );
            function r(s, o, l) {
              return i.apply(this, arguments);
            }
            return a(r, "updatePlayer"), r;
          })(),
        },
        {
          key: "maintainPlaybackPosition",
          value: a(function (r, s, o) {
            var l = this,
              u = o.allowedDrift,
              c = o.maxAllowedDrift,
              d = o.minCheckInterval,
              f = o.maxRateAdjustment,
              p = o.maxTimeToCatchUp,
              h = Math.min(p, Math.max(d, c)) * 1e3,
              m = (function () {
                var w = dr(
                  pt().mark(
                    a(function b() {
                      var y, _, v, x, E;
                      return pt().wrap(
                        a(function (S) {
                          for (;;)
                            switch ((S.prev = S.next)) {
                              case 0:
                                if (((S.t0 = r.query().velocity === 0), S.t0)) {
                                  S.next = 6;
                                  break;
                                }
                                return (S.next = 4), s.getPaused();
                              case 4:
                                (S.t1 = S.sent), (S.t0 = S.t1 === !0);
                              case 6:
                                if (!S.t0) {
                                  S.next = 8;
                                  break;
                                }
                                return S.abrupt("return");
                              case 8:
                                return (
                                  (S.t2 = r.query().position),
                                  (S.next = 11),
                                  s.getCurrentTime()
                                );
                              case 11:
                                if (
                                  ((S.t3 = S.sent),
                                  (y = S.t2 - S.t3),
                                  (_ = Math.abs(y)),
                                  l.log("Drift: ".concat(y)),
                                  !(_ > c))
                                ) {
                                  S.next = 22;
                                  break;
                                }
                                return (S.next = 18), l.adjustSpeed(s, 0);
                              case 18:
                                s.setCurrentTime(r.query().position),
                                  l.log("Resync by currentTime"),
                                  (S.next = 29);
                                break;
                              case 22:
                                if (!(_ > u)) {
                                  S.next = 29;
                                  break;
                                }
                                return (
                                  (v = _ / p),
                                  (x = f),
                                  (E = v < x ? (x - v) / 2 : x),
                                  (S.next = 28),
                                  l.adjustSpeed(s, E * Math.sign(y))
                                );
                              case 28:
                                l.log("Resync by playbackRate");
                              case 29:
                              case "end":
                                return S.stop();
                            }
                        }, "_callee6$"),
                        b
                      );
                    }, "_callee6")
                  )
                );
                return a(function () {
                  return w.apply(this, arguments);
                }, "check");
              })(),
              g = setInterval(function () {
                return m();
              }, h);
            return {
              cancel: a(function () {
                return clearInterval(g);
              }, "cancel"),
            };
          }, "maintainPlaybackPosition"),
        },
        {
          key: "log",
          value: a(function (r) {
            var s;
            (s = this.logger) === null ||
              s === void 0 ||
              s.call(this, "TimingSrcConnector: ".concat(r));
          }, "log"),
        },
        {
          key: "waitForTOReadyState",
          value: a(function (r, s) {
            return new Promise(function (o) {
              var l = a(function u() {
                r.readyState === s
                  ? o()
                  : r.addEventListener("readystatechange", u, { once: !0 });
              }, "check");
              l();
            });
          }, "waitForTOReadyState"),
        },
      ]),
      t
    );
  })(ca(EventTarget)),
  Br = new WeakMap(),
  Lo = new WeakMap(),
  bt = {},
  Bn = (function () {
    function n(e) {
      var t = this,
        i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (
        (ic(this, n),
        window.jQuery &&
          e instanceof jQuery &&
          (e.length > 1 && window.console, (e = e[0])),
        typeof document < "u" &&
          typeof e == "string" &&
          (e = document.getElementById(e)),
        !Ef(e))
      )
        throw new TypeError(
          "You must pass either a valid element or a valid id."
        );
      if (e.nodeName !== "IFRAME") {
        var r = e.querySelector("iframe");
        r && (e = r);
      }
      if (e.nodeName === "IFRAME" && !kr(e.getAttribute("src") || ""))
        throw new Error("The player element passed isn’t a Vimeo embed.");
      if (Br.has(e)) return Br.get(e);
      (this._window = e.ownerDocument.defaultView),
        (this.element = e),
        (this.origin = "*");
      var s = new Wt(function (l, u) {
        if (
          ((t._onMessage = function (f) {
            if (!(!kr(f.origin) || t.element.contentWindow !== f.source)) {
              t.origin === "*" && (t.origin = f.origin);
              var p = So(f.data),
                h = p && p.event === "error",
                m = h && p.data && p.data.method === "ready";
              if (m) {
                var g = new Error(p.data.message);
                (g.name = p.data.name), u(g);
                return;
              }
              var w = p && p.event === "ready",
                b = p && p.method === "ping";
              if (w || b) {
                t.element.setAttribute("data-ready", "true"), l();
                return;
              }
              Df(t, p);
            }
          }),
          t._window.addEventListener("message", t._onMessage),
          t.element.nodeName !== "IFRAME")
        ) {
          var c = uc(e, i),
            d = lc(c);
          cc(d, c, e)
            .then(function (f) {
              var p = ja(f, e);
              return (
                (t.element = p),
                (t._originalElement = e),
                Lf(e, p),
                Br.set(t.element, t),
                f
              );
            })
            .catch(u);
        }
      });
      if (
        (Lo.set(this, s),
        Br.set(this.element, this),
        this.element.nodeName === "IFRAME" && lr(this, "ping"),
        bt.isEnabled)
      ) {
        var o = a(function () {
          return bt.exit();
        }, "exitFullscreen");
        (this.fullscreenchangeHandler = function () {
          bt.isFullscreen
            ? Cn(t, "event:exitFullscreen", o)
            : ro(t, "event:exitFullscreen", o),
            t.ready().then(function () {
              lr(t, "fullscreenchange", bt.isFullscreen);
            });
        }),
          bt.on("fullscreenchange", this.fullscreenchangeHandler);
      }
      return this;
    }
    return (
      a(n, "Player"),
      rc(n, [
        {
          key: "callMethod",
          value: a(function (t) {
            var i = this,
              r =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
            return new Wt(function (s, o) {
              return i
                .ready()
                .then(function () {
                  Cn(i, t, { resolve: s, reject: o }), lr(i, t, r);
                })
                .catch(o);
            });
          }, "callMethod"),
        },
        {
          key: "get",
          value: a(function (t) {
            var i = this;
            return new Wt(function (r, s) {
              return (
                (t = Hl(t, "get")),
                i
                  .ready()
                  .then(function () {
                    Cn(i, t, { resolve: r, reject: s }), lr(i, t);
                  })
                  .catch(s)
              );
            });
          }, "get"),
        },
        {
          key: "set",
          value: a(function (t, i) {
            var r = this;
            return new Wt(function (s, o) {
              if (((t = Hl(t, "set")), i == null))
                throw new TypeError("There must be a value to set.");
              return r
                .ready()
                .then(function () {
                  Cn(r, t, { resolve: s, reject: o }), lr(r, t, i);
                })
                .catch(o);
            });
          }, "set"),
        },
        {
          key: "on",
          value: a(function (t, i) {
            if (!t) throw new TypeError("You must pass an event name.");
            if (!i) throw new TypeError("You must pass a callback function.");
            if (typeof i != "function")
              throw new TypeError("The callback must be a function.");
            var r = io(this, "event:".concat(t));
            r.length === 0 &&
              this.callMethod("addEventListener", t).catch(function () {}),
              Cn(this, "event:".concat(t), i);
          }, "on"),
        },
        {
          key: "off",
          value: a(function (t, i) {
            if (!t) throw new TypeError("You must pass an event name.");
            if (i && typeof i != "function")
              throw new TypeError("The callback must be a function.");
            var r = ro(this, "event:".concat(t), i);
            r &&
              this.callMethod("removeEventListener", t).catch(function (s) {});
          }, "off"),
        },
        {
          key: "loadVideo",
          value: a(function (t) {
            return this.callMethod("loadVideo", t);
          }, "loadVideo"),
        },
        {
          key: "ready",
          value: a(function () {
            var t =
              Lo.get(this) ||
              new Wt(function (i, r) {
                r(new Error("Unknown player. Probably unloaded."));
              });
            return Wt.resolve(t);
          }, "ready"),
        },
        {
          key: "addCuePoint",
          value: a(function (t) {
            var i =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            return this.callMethod("addCuePoint", { time: t, data: i });
          }, "addCuePoint"),
        },
        {
          key: "removeCuePoint",
          value: a(function (t) {
            return this.callMethod("removeCuePoint", t);
          }, "removeCuePoint"),
        },
        {
          key: "enableTextTrack",
          value: a(function (t, i) {
            if (!t) throw new TypeError("You must pass a language.");
            return this.callMethod("enableTextTrack", { language: t, kind: i });
          }, "enableTextTrack"),
        },
        {
          key: "disableTextTrack",
          value: a(function () {
            return this.callMethod("disableTextTrack");
          }, "disableTextTrack"),
        },
        {
          key: "pause",
          value: a(function () {
            return this.callMethod("pause");
          }, "pause"),
        },
        {
          key: "play",
          value: a(function () {
            return this.callMethod("play");
          }, "play"),
        },
        {
          key: "requestFullscreen",
          value: a(function () {
            return bt.isEnabled
              ? bt.request(this.element)
              : this.callMethod("requestFullscreen");
          }, "requestFullscreen"),
        },
        {
          key: "exitFullscreen",
          value: a(function () {
            return bt.isEnabled ? bt.exit() : this.callMethod("exitFullscreen");
          }, "exitFullscreen"),
        },
        {
          key: "getFullscreen",
          value: a(function () {
            return bt.isEnabled
              ? Wt.resolve(bt.isFullscreen)
              : this.get("fullscreen");
          }, "getFullscreen"),
        },
        {
          key: "requestPictureInPicture",
          value: a(function () {
            return this.callMethod("requestPictureInPicture");
          }, "requestPictureInPicture"),
        },
        {
          key: "exitPictureInPicture",
          value: a(function () {
            return this.callMethod("exitPictureInPicture");
          }, "exitPictureInPicture"),
        },
        {
          key: "getPictureInPicture",
          value: a(function () {
            return this.get("pictureInPicture");
          }, "getPictureInPicture"),
        },
        {
          key: "remotePlaybackPrompt",
          value: a(function () {
            return this.callMethod("remotePlaybackPrompt");
          }, "remotePlaybackPrompt"),
        },
        {
          key: "unload",
          value: a(function () {
            return this.callMethod("unload");
          }, "unload"),
        },
        {
          key: "destroy",
          value: a(function () {
            var t = this;
            return new Wt(function (i) {
              if (
                (Lo.delete(t),
                Br.delete(t.element),
                t._originalElement &&
                  (Br.delete(t._originalElement),
                  t._originalElement.removeAttribute("data-vimeo-initialized")),
                t.element &&
                  t.element.nodeName === "IFRAME" &&
                  t.element.parentNode &&
                  (t.element.parentNode.parentNode &&
                  t._originalElement &&
                  t._originalElement !== t.element.parentNode
                    ? t.element.parentNode.parentNode.removeChild(
                        t.element.parentNode
                      )
                    : t.element.parentNode.removeChild(t.element)),
                t.element &&
                  t.element.nodeName === "DIV" &&
                  t.element.parentNode)
              ) {
                t.element.removeAttribute("data-vimeo-initialized");
                var r = t.element.querySelector("iframe");
                r &&
                  r.parentNode &&
                  (r.parentNode.parentNode &&
                  t._originalElement &&
                  t._originalElement !== r.parentNode
                    ? r.parentNode.parentNode.removeChild(r.parentNode)
                    : r.parentNode.removeChild(r));
              }
              t._window.removeEventListener("message", t._onMessage),
                bt.isEnabled &&
                  bt.off("fullscreenchange", t.fullscreenchangeHandler),
                i();
            });
          }, "destroy"),
        },
        {
          key: "getAutopause",
          value: a(function () {
            return this.get("autopause");
          }, "getAutopause"),
        },
        {
          key: "setAutopause",
          value: a(function (t) {
            return this.set("autopause", t);
          }, "setAutopause"),
        },
        {
          key: "getBuffered",
          value: a(function () {
            return this.get("buffered");
          }, "getBuffered"),
        },
        {
          key: "getCameraProps",
          value: a(function () {
            return this.get("cameraProps");
          }, "getCameraProps"),
        },
        {
          key: "setCameraProps",
          value: a(function (t) {
            return this.set("cameraProps", t);
          }, "setCameraProps"),
        },
        {
          key: "getChapters",
          value: a(function () {
            return this.get("chapters");
          }, "getChapters"),
        },
        {
          key: "getCurrentChapter",
          value: a(function () {
            return this.get("currentChapter");
          }, "getCurrentChapter"),
        },
        {
          key: "getColor",
          value: a(function () {
            return this.get("color");
          }, "getColor"),
        },
        {
          key: "getColors",
          value: a(function () {
            return Wt.all([
              this.get("colorOne"),
              this.get("colorTwo"),
              this.get("colorThree"),
              this.get("colorFour"),
            ]);
          }, "getColors"),
        },
        {
          key: "setColor",
          value: a(function (t) {
            return this.set("color", t);
          }, "setColor"),
        },
        {
          key: "setColors",
          value: a(function (t) {
            if (!Array.isArray(t))
              return new Wt(function (s, o) {
                return o(new TypeError("Argument must be an array."));
              });
            var i = new Wt(function (s) {
                return s(null);
              }),
              r = [
                t[0] ? this.set("colorOne", t[0]) : i,
                t[1] ? this.set("colorTwo", t[1]) : i,
                t[2] ? this.set("colorThree", t[2]) : i,
                t[3] ? this.set("colorFour", t[3]) : i,
              ];
            return Wt.all(r);
          }, "setColors"),
        },
        {
          key: "getCuePoints",
          value: a(function () {
            return this.get("cuePoints");
          }, "getCuePoints"),
        },
        {
          key: "getCurrentTime",
          value: a(function () {
            return this.get("currentTime");
          }, "getCurrentTime"),
        },
        {
          key: "setCurrentTime",
          value: a(function (t) {
            return this.set("currentTime", t);
          }, "setCurrentTime"),
        },
        {
          key: "getDuration",
          value: a(function () {
            return this.get("duration");
          }, "getDuration"),
        },
        {
          key: "getEnded",
          value: a(function () {
            return this.get("ended");
          }, "getEnded"),
        },
        {
          key: "getLoop",
          value: a(function () {
            return this.get("loop");
          }, "getLoop"),
        },
        {
          key: "setLoop",
          value: a(function (t) {
            return this.set("loop", t);
          }, "setLoop"),
        },
        {
          key: "setMuted",
          value: a(function (t) {
            return this.set("muted", t);
          }, "setMuted"),
        },
        {
          key: "getMuted",
          value: a(function () {
            return this.get("muted");
          }, "getMuted"),
        },
        {
          key: "getPaused",
          value: a(function () {
            return this.get("paused");
          }, "getPaused"),
        },
        {
          key: "getPlaybackRate",
          value: a(function () {
            return this.get("playbackRate");
          }, "getPlaybackRate"),
        },
        {
          key: "setPlaybackRate",
          value: a(function (t) {
            return this.set("playbackRate", t);
          }, "setPlaybackRate"),
        },
        {
          key: "getPlayed",
          value: a(function () {
            return this.get("played");
          }, "getPlayed"),
        },
        {
          key: "getQualities",
          value: a(function () {
            return this.get("qualities");
          }, "getQualities"),
        },
        {
          key: "getQuality",
          value: a(function () {
            return this.get("quality");
          }, "getQuality"),
        },
        {
          key: "setQuality",
          value: a(function (t) {
            return this.set("quality", t);
          }, "setQuality"),
        },
        {
          key: "getRemotePlaybackAvailability",
          value: a(function () {
            return this.get("remotePlaybackAvailability");
          }, "getRemotePlaybackAvailability"),
        },
        {
          key: "getRemotePlaybackState",
          value: a(function () {
            return this.get("remotePlaybackState");
          }, "getRemotePlaybackState"),
        },
        {
          key: "getSeekable",
          value: a(function () {
            return this.get("seekable");
          }, "getSeekable"),
        },
        {
          key: "getSeeking",
          value: a(function () {
            return this.get("seeking");
          }, "getSeeking"),
        },
        {
          key: "getTextTracks",
          value: a(function () {
            return this.get("textTracks");
          }, "getTextTracks"),
        },
        {
          key: "getVideoEmbedCode",
          value: a(function () {
            return this.get("videoEmbedCode");
          }, "getVideoEmbedCode"),
        },
        {
          key: "getVideoId",
          value: a(function () {
            return this.get("videoId");
          }, "getVideoId"),
        },
        {
          key: "getVideoTitle",
          value: a(function () {
            return this.get("videoTitle");
          }, "getVideoTitle"),
        },
        {
          key: "getVideoWidth",
          value: a(function () {
            return this.get("videoWidth");
          }, "getVideoWidth"),
        },
        {
          key: "getVideoHeight",
          value: a(function () {
            return this.get("videoHeight");
          }, "getVideoHeight"),
        },
        {
          key: "getVideoUrl",
          value: a(function () {
            return this.get("videoUrl");
          }, "getVideoUrl"),
        },
        {
          key: "getVolume",
          value: a(function () {
            return this.get("volume");
          }, "getVolume"),
        },
        {
          key: "setVolume",
          value: a(function (t) {
            return this.set("volume", t);
          }, "setVolume"),
        },
        {
          key: "setTimingSrc",
          value: (function () {
            var e = dr(
              pt().mark(
                a(function i(r, s) {
                  var o = this,
                    l;
                  return pt().wrap(
                    a(function (c) {
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
                              (l = new Vf(this, r, s)),
                              lr(this, "notifyTimingObjectConnect"),
                              l.addEventListener("disconnect", function () {
                                return lr(o, "notifyTimingObjectDisconnect");
                              }),
                              c.abrupt("return", l)
                            );
                          case 8:
                          case "end":
                            return c.stop();
                        }
                    }, "_callee$"),
                    i,
                    this
                  );
                }, "_callee")
              )
            );
            function t(i, r) {
              return e.apply(this, arguments);
            }
            return a(t, "setTimingSrc"), t;
          })(),
        },
      ]),
      n
    );
  })();
oc || ((bt = Ff()), zf(), Nf(), Rf(), $f());
const zl = class zl {
  constructor() {
    typeof Bn < "u" &&
      ((this.players = new Map()), (this.resizeTimeout = null), this.init());
  }
  isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
  isMobileViewport() {
    return window.innerWidth <= 768;
  }
  shouldUseMobileVideo() {
    return this.isMobileDevice() || this.isMobileViewport();
  }
  init() {
    document.querySelectorAll("[data-vimeo-player-init]").length > 0 &&
      (this.initVimeoPlayer(),
      this.isMobileDevice() || this.addResizeListener());
  }
  addResizeListener() {
    const e = a(() => {
      clearTimeout(this.resizeTimeout),
        (this.resizeTimeout = setTimeout(() => {
          this.handleVideoResize();
        }, 250));
    }, "handleResize");
    window.addEventListener("resize", e);
  }
  handleVideoResize() {
    document.querySelectorAll("[data-vimeo-player-init]").forEach((t) => {
      const i = t.getAttribute("data-vimeo-active-video-id"),
        r = t.getAttribute("data-vimeo-video-id-mob"),
        s = t.getAttribute("data-vimeo-video-id"),
        l = this.shouldUseMobileVideo() && r ? r : s;
      if (l && i !== l) {
        const u = t.getAttribute("id"),
          c = this.players.get(u);
        if (c) {
          let d = t.getAttribute("data-vimeo-playing") === "true",
            f = 0,
            p = t.getAttribute("data-vimeo-muted") === "true";
          c.getCurrentTime()
            .then((h) => {
              (f = h),
                c.unload(),
                this.players.delete(u),
                this.switchVideo(t, l, {
                  wasPlaying: d,
                  currentTime: f,
                  isMuted: p,
                });
            })
            .catch(() => {
              c.unload(),
                this.players.delete(u),
                this.switchVideo(t, l, {
                  wasPlaying: d,
                  currentTime: 0,
                  isMuted: p,
                });
            });
        }
      }
    });
  }
  switchVideo(e, t, i = {}) {
    const r = e.querySelector("iframe");
    if (!r) return;
    const s = `https://player.vimeo.com/video/${t}?api=1&background=1&autoplay=0&loop=0&muted=1`;
    r.setAttribute("src", s),
      e.setAttribute("data-vimeo-active-video-id", t),
      setTimeout(() => {
        this.initSinglePlayer(e, i);
      }, 500);
  }
  initSinglePlayer(e, t = {}) {
    const i = e.querySelector("iframe");
    if (i)
      try {
        const r = new Bn(i),
          s = e.getAttribute("id");
        this.players.set(s, r),
          r.ready().then(() => {
            t.currentTime && r.setCurrentTime(t.currentTime),
              t.isMuted !== void 0 && r.setVolume(t.isMuted ? 0 : 1),
              t.wasPlaying &&
                (r.play(), e.setAttribute("data-vimeo-playing", "true"));
          }),
          this.setupPlayerControls(e, r);
      } catch {}
  }
  initVimeoPlayer() {
    document.querySelectorAll("[data-vimeo-player-init]").forEach((t, i) => {
      try {
        const r = this.shouldUseMobileVideo(),
          s = t.getAttribute("data-vimeo-video-id-mob"),
          o = t.getAttribute("data-vimeo-video-id"),
          l = r && s ? s : o;
        if (!l) return;
        const u = t.querySelector("iframe");
        if (!u) return;
        const c = `https://player.vimeo.com/video/${l}?api=1&background=1&autoplay=0&loop=0&muted=1`;
        u.setAttribute("src", c),
          t.setAttribute("data-vimeo-active-video-id", l);
        const d = "vimeo-player-index-" + i;
        t.setAttribute("id", d);
        const f = new Bn(u);
        this.players.set(d, f), this.setupPlayerControls(t, f);
      } catch {}
    });
  }
  setupPlayerControls(e, t) {
    const i = e.id;
    if (
      (e.getAttribute("data-vimeo-update-size") === "true" &&
        t.getVideoWidth().then(function (v) {
          t.getVideoHeight().then(function (x) {
            const E = e.querySelector(".vimeo-player__before");
            E && (E.style.paddingTop = (x / v) * 100 + "%");
          });
        }),
      t.on("play", function () {
        e.setAttribute("data-vimeo-loaded", "true");
      }),
      e.getAttribute("data-vimeo-autoplay") === "false")
    )
      t.setVolume(1), t.pause();
    else if (
      (t.setVolume(0),
      e.setAttribute("data-vimeo-muted", "true"),
      e.getAttribute("data-vimeo-paused-by-user") === "false")
    ) {
      const v = a(() => {
        const x = e.getBoundingClientRect();
        x.top < window.innerHeight && x.bottom > 0 ? r() : s();
      }, "checkVisibility");
      v(), window.addEventListener("scroll", v);
    }
    const r = a(() => {
        e.setAttribute("data-vimeo-activated", "true"),
          e.setAttribute("data-vimeo-playing", "true"),
          t.play();
      }, "vimeoPlayerPlay"),
      s = a(() => {
        e.setAttribute("data-vimeo-playing", "false"), t.pause();
      }, "vimeoPlayerPause"),
      o = e.querySelector('[data-vimeo-control="play"]');
    o &&
      o.addEventListener("click", function () {
        t.setVolume(0),
          r(),
          e.getAttribute("data-vimeo-muted") === "true"
            ? t.setVolume(0)
            : t.setVolume(1);
      });
    const l = e.querySelector('[data-vimeo-control="pause"]');
    l &&
      l.addEventListener("click", function () {
        s(),
          e.getAttribute("data-vimeo-autoplay") === "true" &&
            (e.setAttribute("data-vimeo-paused-by-user", "true"),
            window.removeEventListener("scroll", checkVisibility));
      });
    const u = e.querySelector('[data-vimeo-control="mute"]');
    u &&
      u.addEventListener("click", function () {
        e.getAttribute("data-vimeo-muted") === "false"
          ? (t.setVolume(0), e.setAttribute("data-vimeo-muted", "true"))
          : (t.setVolume(1), e.setAttribute("data-vimeo-muted", "false"));
      });
    const c = !!(
        document.fullscreenEnabled ||
        document.webkitFullscreenEnabled ||
        document.mozFullScreenEnabled ||
        document.msFullscreenEnabled
      ),
      d = e.querySelector('[data-vimeo-control="fullscreen"]');
    !c && d && (d.style.display = "none"),
      d &&
        d.addEventListener("click", () => {
          const v = document.getElementById(i);
          if (!v) return;
          document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.msFullscreenElement
            ? (e.setAttribute("data-vimeo-fullscreen", "false"),
              (
                document.exitFullscreen ||
                document.webkitExitFullscreen ||
                document.mozCancelFullScreen ||
                document.msExitFullscreen
              ).call(document))
            : (e.setAttribute("data-vimeo-fullscreen", "true"),
              (
                v.requestFullscreen ||
                v.webkitRequestFullscreen ||
                v.mozRequestFullScreen ||
                v.msRequestFullscreen
              ).call(v));
        });
    const f = a(() => {
      const v =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;
      e.setAttribute("data-vimeo-fullscreen", v ? "true" : "false");
    }, "handleFullscreenChange");
    [
      "fullscreenchange",
      "webkitfullscreenchange",
      "mozfullscreenchange",
      "msfullscreenchange",
    ].forEach((v) => {
      document.addEventListener(v, f);
    });
    function p(v) {
      let x = Math.floor(v / 3600);
      v -= x * 3600;
      let E = Math.floor(v / 60);
      return (v -= E * 60), E + ":" + (v < 10 ? "0" + v : v);
    }
    a(p, "secondsTimeSpanToHMS");
    const h = e.querySelector("[data-vimeo-duration]");
    t.getDuration().then(function (v) {
      h && (h.textContent = p(v)),
        e
          .querySelectorAll('[data-vimeo-control="timeline"], progress')
          .forEach((E) => {
            E.setAttribute("max", v);
          });
    });
    const m = e.querySelector('[data-vimeo-control="timeline"]'),
      g = e.querySelector("progress");
    function w() {
      t.getDuration().then(function () {
        const v = m.value;
        t.setCurrentTime(v), g && (g.value = v);
      });
    }
    a(w, "updateTimelineValue"),
      m &&
        ["input", "change"].forEach((v) => {
          m.addEventListener(v, w);
        }),
      t.on("timeupdate", function (v) {
        m && (m.value = v.seconds),
          g && (g.value = v.seconds),
          h && (h.textContent = p(Math.trunc(v.seconds)));
      });
    let b;
    e.addEventListener("mousemove", function () {
      e.getAttribute("data-vimeo-hover") === "false" &&
        e.setAttribute("data-vimeo-hover", "true"),
        clearTimeout(b),
        (b = setTimeout(y, 3e3));
    });
    function y() {
      e.setAttribute("data-vimeo-hover", "false");
    }
    a(y, "vimeoHoverTrue");
    function _() {
      e.setAttribute("data-vimeo-activated", "false"),
        e.setAttribute("data-vimeo-playing", "false"),
        t.unload();
    }
    a(_, "vimeoOnEnd"), t.on("ended", _);
  }
};
a(zl, "VideoPlayer");
let da = zl;
const qf = a(() => {
  new da();
}, "initVideoPlayer");
function Yl(n) {
  return (
    n !== null &&
    typeof n == "object" &&
    "constructor" in n &&
    n.constructor === Object
  );
}
a(Yl, "isObject$1");
function Ua(n = {}, e = {}) {
  Object.keys(e).forEach((t) => {
    typeof n[t] > "u"
      ? (n[t] = e[t])
      : Yl(e[t]) && Yl(n[t]) && Object.keys(e[t]).length > 0 && Ua(n[t], e[t]);
  });
}
a(Ua, "extend$1");
const dc = {
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
function wt() {
  const n = typeof document < "u" ? document : {};
  return Ua(n, dc), n;
}
a(wt, "getDocument");
const Wf = {
  document: dc,
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
  CustomEvent: a(function () {
    return this;
  }, "CustomEvent"),
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
  requestAnimationFrame(n) {
    return typeof setTimeout > "u" ? (n(), null) : setTimeout(n, 0);
  },
  cancelAnimationFrame(n) {
    typeof setTimeout > "u" || clearTimeout(n);
  },
};
function $e() {
  const n = typeof window < "u" ? window : {};
  return Ua(n, Wf), n;
}
a($e, "getWindow");
function Hf(n) {
  const e = n.__proto__;
  Object.defineProperty(n, "__proto__", {
    get() {
      return e;
    },
    set(t) {
      e.__proto__ = t;
    },
  });
}
a(Hf, "makeReactive");
const Nl = class Nl extends Array {
  constructor(e) {
    typeof e == "number" ? super(e) : (super(...(e || [])), Hf(this));
  }
};
a(Nl, "Dom7");
let hi = Nl;
function gs(n = []) {
  const e = [];
  return (
    n.forEach((t) => {
      Array.isArray(t) ? e.push(...gs(t)) : e.push(t);
    }),
    e
  );
}
a(gs, "arrayFlat");
function fc(n, e) {
  return Array.prototype.filter.call(n, e);
}
a(fc, "arrayFilter");
function Gf(n) {
  const e = [];
  for (let t = 0; t < n.length; t += 1) e.indexOf(n[t]) === -1 && e.push(n[t]);
  return e;
}
a(Gf, "arrayUnique");
function Yf(n, e) {
  if (typeof n != "string") return [n];
  const t = [],
    i = e.querySelectorAll(n);
  for (let r = 0; r < i.length; r += 1) t.push(i[r]);
  return t;
}
a(Yf, "qsa");
function F(n, e) {
  const t = $e(),
    i = wt();
  let r = [];
  if (!e && n instanceof hi) return n;
  if (!n) return new hi(r);
  if (typeof n == "string") {
    const s = n.trim();
    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
      let o = "div";
      s.indexOf("<li") === 0 && (o = "ul"),
        s.indexOf("<tr") === 0 && (o = "tbody"),
        (s.indexOf("<td") === 0 || s.indexOf("<th") === 0) && (o = "tr"),
        s.indexOf("<tbody") === 0 && (o = "table"),
        s.indexOf("<option") === 0 && (o = "select");
      const l = i.createElement(o);
      l.innerHTML = s;
      for (let u = 0; u < l.childNodes.length; u += 1) r.push(l.childNodes[u]);
    } else r = Yf(n.trim(), e || i);
  } else if (n.nodeType || n === t || n === i) r.push(n);
  else if (Array.isArray(n)) {
    if (n instanceof hi) return n;
    r = n;
  }
  return new hi(Gf(r));
}
a(F, "$");
F.fn = hi.prototype;
function Xf(...n) {
  const e = gs(n.map((t) => t.split(" ")));
  return (
    this.forEach((t) => {
      t.classList.add(...e);
    }),
    this
  );
}
a(Xf, "addClass");
function jf(...n) {
  const e = gs(n.map((t) => t.split(" ")));
  return (
    this.forEach((t) => {
      t.classList.remove(...e);
    }),
    this
  );
}
a(jf, "removeClass");
function Uf(...n) {
  const e = gs(n.map((t) => t.split(" ")));
  this.forEach((t) => {
    e.forEach((i) => {
      t.classList.toggle(i);
    });
  });
}
a(Uf, "toggleClass");
function Kf(...n) {
  const e = gs(n.map((t) => t.split(" ")));
  return (
    fc(this, (t) => e.filter((i) => t.classList.contains(i)).length > 0)
      .length > 0
  );
}
a(Kf, "hasClass");
function Zf(n, e) {
  if (arguments.length === 1 && typeof n == "string")
    return this[0] ? this[0].getAttribute(n) : void 0;
  for (let t = 0; t < this.length; t += 1)
    if (arguments.length === 2) this[t].setAttribute(n, e);
    else for (const i in n) (this[t][i] = n[i]), this[t].setAttribute(i, n[i]);
  return this;
}
a(Zf, "attr");
function Qf(n) {
  for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(n);
  return this;
}
a(Qf, "removeAttr");
function Jf(n) {
  for (let e = 0; e < this.length; e += 1) this[e].style.transform = n;
  return this;
}
a(Jf, "transform");
function eh(n) {
  for (let e = 0; e < this.length; e += 1)
    this[e].style.transitionDuration = typeof n != "string" ? `${n}ms` : n;
  return this;
}
a(eh, "transition$1");
function th(...n) {
  let [e, t, i, r] = n;
  typeof n[1] == "function" && (([e, i, r] = n), (t = void 0)), r || (r = !1);
  function s(c) {
    const d = c.target;
    if (!d) return;
    const f = c.target.dom7EventData || [];
    if ((f.indexOf(c) < 0 && f.unshift(c), F(d).is(t))) i.apply(d, f);
    else {
      const p = F(d).parents();
      for (let h = 0; h < p.length; h += 1) F(p[h]).is(t) && i.apply(p[h], f);
    }
  }
  a(s, "handleLiveEvent");
  function o(c) {
    const d = c && c.target ? c.target.dom7EventData || [] : [];
    d.indexOf(c) < 0 && d.unshift(c), i.apply(this, d);
  }
  a(o, "handleEvent");
  const l = e.split(" ");
  let u;
  for (let c = 0; c < this.length; c += 1) {
    const d = this[c];
    if (t)
      for (u = 0; u < l.length; u += 1) {
        const f = l[u];
        d.dom7LiveListeners || (d.dom7LiveListeners = {}),
          d.dom7LiveListeners[f] || (d.dom7LiveListeners[f] = []),
          d.dom7LiveListeners[f].push({ listener: i, proxyListener: s }),
          d.addEventListener(f, s, r);
      }
    else
      for (u = 0; u < l.length; u += 1) {
        const f = l[u];
        d.dom7Listeners || (d.dom7Listeners = {}),
          d.dom7Listeners[f] || (d.dom7Listeners[f] = []),
          d.dom7Listeners[f].push({ listener: i, proxyListener: o }),
          d.addEventListener(f, o, r);
      }
  }
  return this;
}
a(th, "on");
function ih(...n) {
  let [e, t, i, r] = n;
  typeof n[1] == "function" && (([e, i, r] = n), (t = void 0)), r || (r = !1);
  const s = e.split(" ");
  for (let o = 0; o < s.length; o += 1) {
    const l = s[o];
    for (let u = 0; u < this.length; u += 1) {
      const c = this[u];
      let d;
      if (
        (!t && c.dom7Listeners
          ? (d = c.dom7Listeners[l])
          : t && c.dom7LiveListeners && (d = c.dom7LiveListeners[l]),
        d && d.length)
      )
        for (let f = d.length - 1; f >= 0; f -= 1) {
          const p = d[f];
          (i && p.listener === i) ||
          (i &&
            p.listener &&
            p.listener.dom7proxy &&
            p.listener.dom7proxy === i)
            ? (c.removeEventListener(l, p.proxyListener, r), d.splice(f, 1))
            : i ||
              (c.removeEventListener(l, p.proxyListener, r), d.splice(f, 1));
        }
    }
  }
  return this;
}
a(ih, "off");
function rh(...n) {
  const e = $e(),
    t = n[0].split(" "),
    i = n[1];
  for (let r = 0; r < t.length; r += 1) {
    const s = t[r];
    for (let o = 0; o < this.length; o += 1) {
      const l = this[o];
      if (e.CustomEvent) {
        const u = new e.CustomEvent(s, {
          detail: i,
          bubbles: !0,
          cancelable: !0,
        });
        (l.dom7EventData = n.filter((c, d) => d > 0)),
          l.dispatchEvent(u),
          (l.dom7EventData = []),
          delete l.dom7EventData;
      }
    }
  }
  return this;
}
a(rh, "trigger");
function nh(n) {
  const e = this;
  function t(i) {
    i.target === this && (n.call(this, i), e.off("transitionend", t));
  }
  return a(t, "fireCallBack"), n && e.on("transitionend", t), this;
}
a(nh, "transitionEnd$1");
function sh(n) {
  if (this.length > 0) {
    if (n) {
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
a(sh, "outerWidth");
function oh(n) {
  if (this.length > 0) {
    if (n) {
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
a(oh, "outerHeight");
function ah() {
  if (this.length > 0) {
    const n = $e(),
      e = wt(),
      t = this[0],
      i = t.getBoundingClientRect(),
      r = e.body,
      s = t.clientTop || r.clientTop || 0,
      o = t.clientLeft || r.clientLeft || 0,
      l = t === n ? n.scrollY : t.scrollTop,
      u = t === n ? n.scrollX : t.scrollLeft;
    return { top: i.top + l - s, left: i.left + u - o };
  }
  return null;
}
a(ah, "offset");
function lh() {
  const n = $e();
  return this[0] ? n.getComputedStyle(this[0], null) : {};
}
a(lh, "styles");
function uh(n, e) {
  const t = $e();
  let i;
  if (arguments.length === 1)
    if (typeof n == "string") {
      if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(n);
    } else {
      for (i = 0; i < this.length; i += 1)
        for (const r in n) this[i].style[r] = n[r];
      return this;
    }
  if (arguments.length === 2 && typeof n == "string") {
    for (i = 0; i < this.length; i += 1) this[i].style[n] = e;
    return this;
  }
  return this;
}
a(uh, "css");
function ch(n) {
  return n
    ? (this.forEach((e, t) => {
        n.apply(e, [e, t]);
      }),
      this)
    : this;
}
a(ch, "each");
function dh(n) {
  const e = fc(this, n);
  return F(e);
}
a(dh, "filter");
function fh(n) {
  if (typeof n > "u") return this[0] ? this[0].innerHTML : null;
  for (let e = 0; e < this.length; e += 1) this[e].innerHTML = n;
  return this;
}
a(fh, "html");
function hh(n) {
  if (typeof n > "u") return this[0] ? this[0].textContent.trim() : null;
  for (let e = 0; e < this.length; e += 1) this[e].textContent = n;
  return this;
}
a(hh, "text");
function ph(n) {
  const e = $e(),
    t = wt(),
    i = this[0];
  let r, s;
  if (!i || typeof n > "u") return !1;
  if (typeof n == "string") {
    if (i.matches) return i.matches(n);
    if (i.webkitMatchesSelector) return i.webkitMatchesSelector(n);
    if (i.msMatchesSelector) return i.msMatchesSelector(n);
    for (r = F(n), s = 0; s < r.length; s += 1) if (r[s] === i) return !0;
    return !1;
  }
  if (n === t) return i === t;
  if (n === e) return i === e;
  if (n.nodeType || n instanceof hi) {
    for (r = n.nodeType ? [n] : n, s = 0; s < r.length; s += 1)
      if (r[s] === i) return !0;
    return !1;
  }
  return !1;
}
a(ph, "is");
function mh() {
  let n = this[0],
    e;
  if (n) {
    for (e = 0; (n = n.previousSibling) !== null; )
      n.nodeType === 1 && (e += 1);
    return e;
  }
}
a(mh, "index");
function gh(n) {
  if (typeof n > "u") return this;
  const e = this.length;
  if (n > e - 1) return F([]);
  if (n < 0) {
    const t = e + n;
    return t < 0 ? F([]) : F([this[t]]);
  }
  return F([this[n]]);
}
a(gh, "eq");
function vh(...n) {
  let e;
  const t = wt();
  for (let i = 0; i < n.length; i += 1) {
    e = n[i];
    for (let r = 0; r < this.length; r += 1)
      if (typeof e == "string") {
        const s = t.createElement("div");
        for (s.innerHTML = e; s.firstChild; ) this[r].appendChild(s.firstChild);
      } else if (e instanceof hi)
        for (let s = 0; s < e.length; s += 1) this[r].appendChild(e[s]);
      else this[r].appendChild(e);
  }
  return this;
}
a(vh, "append");
function yh(n) {
  const e = wt();
  let t, i;
  for (t = 0; t < this.length; t += 1)
    if (typeof n == "string") {
      const r = e.createElement("div");
      for (r.innerHTML = n, i = r.childNodes.length - 1; i >= 0; i -= 1)
        this[t].insertBefore(r.childNodes[i], this[t].childNodes[0]);
    } else if (n instanceof hi)
      for (i = 0; i < n.length; i += 1)
        this[t].insertBefore(n[i], this[t].childNodes[0]);
    else this[t].insertBefore(n, this[t].childNodes[0]);
  return this;
}
a(yh, "prepend");
function _h(n) {
  return this.length > 0
    ? n
      ? this[0].nextElementSibling && F(this[0].nextElementSibling).is(n)
        ? F([this[0].nextElementSibling])
        : F([])
      : this[0].nextElementSibling
      ? F([this[0].nextElementSibling])
      : F([])
    : F([]);
}
a(_h, "next");
function wh(n) {
  const e = [];
  let t = this[0];
  if (!t) return F([]);
  for (; t.nextElementSibling; ) {
    const i = t.nextElementSibling;
    n ? F(i).is(n) && e.push(i) : e.push(i), (t = i);
  }
  return F(e);
}
a(wh, "nextAll");
function bh(n) {
  if (this.length > 0) {
    const e = this[0];
    return n
      ? e.previousElementSibling && F(e.previousElementSibling).is(n)
        ? F([e.previousElementSibling])
        : F([])
      : e.previousElementSibling
      ? F([e.previousElementSibling])
      : F([]);
  }
  return F([]);
}
a(bh, "prev");
function xh(n) {
  const e = [];
  let t = this[0];
  if (!t) return F([]);
  for (; t.previousElementSibling; ) {
    const i = t.previousElementSibling;
    n ? F(i).is(n) && e.push(i) : e.push(i), (t = i);
  }
  return F(e);
}
a(xh, "prevAll");
function Sh(n) {
  const e = [];
  for (let t = 0; t < this.length; t += 1)
    this[t].parentNode !== null &&
      (n
        ? F(this[t].parentNode).is(n) && e.push(this[t].parentNode)
        : e.push(this[t].parentNode));
  return F(e);
}
a(Sh, "parent");
function Th(n) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    let i = this[t].parentNode;
    for (; i; ) n ? F(i).is(n) && e.push(i) : e.push(i), (i = i.parentNode);
  }
  return F(e);
}
a(Th, "parents");
function Eh(n) {
  let e = this;
  return typeof n > "u" ? F([]) : (e.is(n) || (e = e.parents(n).eq(0)), e);
}
a(Eh, "closest");
function Ch(n) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    const i = this[t].querySelectorAll(n);
    for (let r = 0; r < i.length; r += 1) e.push(i[r]);
  }
  return F(e);
}
a(Ch, "find");
function kh(n) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    const i = this[t].children;
    for (let r = 0; r < i.length; r += 1) (!n || F(i[r]).is(n)) && e.push(i[r]);
  }
  return F(e);
}
a(kh, "children");
function Ph() {
  for (let n = 0; n < this.length; n += 1)
    this[n].parentNode && this[n].parentNode.removeChild(this[n]);
  return this;
}
a(Ph, "remove");
const Xl = {
  addClass: Xf,
  removeClass: jf,
  hasClass: Kf,
  toggleClass: Uf,
  attr: Zf,
  removeAttr: Qf,
  transform: Jf,
  transition: eh,
  on: th,
  off: ih,
  trigger: rh,
  transitionEnd: nh,
  outerWidth: sh,
  outerHeight: oh,
  styles: lh,
  offset: ah,
  css: uh,
  each: ch,
  html: fh,
  text: hh,
  is: ph,
  index: mh,
  eq: gh,
  append: vh,
  prepend: yh,
  next: _h,
  nextAll: wh,
  prev: bh,
  prevAll: xh,
  parent: Sh,
  parents: Th,
  closest: Eh,
  find: Ch,
  children: kh,
  filter: dh,
  remove: Ph,
};
Object.keys(Xl).forEach((n) => {
  Object.defineProperty(F.fn, n, { value: Xl[n], writable: !0 });
});
function Mh(n) {
  const e = n;
  Object.keys(e).forEach((t) => {
    try {
      e[t] = null;
    } catch {}
    try {
      delete e[t];
    } catch {}
  });
}
a(Mh, "deleteProps");
function ss(n, e = 0) {
  return setTimeout(n, e);
}
a(ss, "nextTick");
function di() {
  return Date.now();
}
a(di, "now");
function Ah(n) {
  const e = $e();
  let t;
  return (
    e.getComputedStyle && (t = e.getComputedStyle(n, null)),
    !t && n.currentStyle && (t = n.currentStyle),
    t || (t = n.style),
    t
  );
}
a(Ah, "getComputedStyle$1");
function Oh(n, e = "x") {
  const t = $e();
  let i, r, s;
  const o = Ah(n);
  return (
    t.WebKitCSSMatrix
      ? ((r = o.transform || o.webkitTransform),
        r.split(",").length > 6 &&
          (r = r
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (s = new t.WebKitCSSMatrix(r === "none" ? "" : r)))
      : ((s =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (i = s.toString().split(","))),
    e === "x" &&
      (t.WebKitCSSMatrix
        ? (r = s.m41)
        : i.length === 16
        ? (r = parseFloat(i[12]))
        : (r = parseFloat(i[4]))),
    e === "y" &&
      (t.WebKitCSSMatrix
        ? (r = s.m42)
        : i.length === 16
        ? (r = parseFloat(i[13]))
        : (r = parseFloat(i[5]))),
    r || 0
  );
}
a(Oh, "getTranslate");
function bs(n) {
  return (
    typeof n == "object" &&
    n !== null &&
    n.constructor &&
    Object.prototype.toString.call(n).slice(8, -1) === "Object"
  );
}
a(bs, "isObject");
function Lh(n) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? n instanceof HTMLElement
    : n && (n.nodeType === 1 || n.nodeType === 11);
}
a(Lh, "isNode");
function Ot(...n) {
  const e = Object(n[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < n.length; i += 1) {
    const r = n[i];
    if (r != null && !Lh(r)) {
      const s = Object.keys(Object(r)).filter((o) => t.indexOf(o) < 0);
      for (let o = 0, l = s.length; o < l; o += 1) {
        const u = s[o],
          c = Object.getOwnPropertyDescriptor(r, u);
        c !== void 0 &&
          c.enumerable &&
          (bs(e[u]) && bs(r[u])
            ? r[u].__swiper__
              ? (e[u] = r[u])
              : Ot(e[u], r[u])
            : !bs(e[u]) && bs(r[u])
            ? ((e[u] = {}), r[u].__swiper__ ? (e[u] = r[u]) : Ot(e[u], r[u]))
            : (e[u] = r[u]));
      }
    }
  }
  return e;
}
a(Ot, "extend");
function xs(n, e, t) {
  n.style.setProperty(e, t);
}
a(xs, "setCSSProperty");
function hc({ swiper: n, targetPosition: e, side: t }) {
  const i = $e(),
    r = -n.translate;
  let s = null,
    o;
  const l = n.params.speed;
  (n.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(n.cssModeFrameID);
  const u = e > r ? "next" : "prev",
    c = a(
      (f, p) => (u === "next" && f >= p) || (u === "prev" && f <= p),
      "isOutOfBound"
    ),
    d = a(() => {
      (o = new Date().getTime()), s === null && (s = o);
      const f = Math.max(Math.min((o - s) / l, 1), 0),
        p = 0.5 - Math.cos(f * Math.PI) / 2;
      let h = r + p * (e - r);
      if ((c(h, e) && (h = e), n.wrapperEl.scrollTo({ [t]: h }), c(h, e))) {
        (n.wrapperEl.style.overflow = "hidden"),
          (n.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (n.wrapperEl.style.overflow = ""), n.wrapperEl.scrollTo({ [t]: h });
          }),
          i.cancelAnimationFrame(n.cssModeFrameID);
        return;
      }
      n.cssModeFrameID = i.requestAnimationFrame(d);
    }, "animate");
  d();
}
a(hc, "animateCSSModeScroll");
let Do;
function Dh() {
  const n = $e(),
    e = wt();
  return {
    smoothScroll:
      e.documentElement && "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in n ||
      (n.DocumentTouch && e instanceof n.DocumentTouch)
    ),
    passiveListener: a(function () {
      let i = !1;
      try {
        const r = Object.defineProperty({}, "passive", {
          get() {
            i = !0;
          },
        });
        n.addEventListener("testPassiveListener", null, r);
      } catch {}
      return i;
    }, "checkPassiveListener")(),
    gestures: a(function () {
      return "ongesturestart" in n;
    }, "checkGestures")(),
  };
}
a(Dh, "calcSupport");
function pc() {
  return Do || (Do = Dh()), Do;
}
a(pc, "getSupport");
let Io;
function Ih({ userAgent: n } = {}) {
  const e = pc(),
    t = $e(),
    i = t.navigator.platform,
    r = n || t.navigator.userAgent,
    s = { ios: !1, android: !1 },
    o = t.screen.width,
    l = t.screen.height,
    u = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = r.match(/(iPad).*OS\s([\d_]+)/);
  const d = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    f = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    p = i === "Win32";
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
      m.indexOf(`${o}x${l}`) >= 0 &&
      ((c = r.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (h = !1)),
    u && !p && ((s.os = "android"), (s.android = !0)),
    (c || f || d) && ((s.os = "ios"), (s.ios = !0)),
    s
  );
}
a(Ih, "calcDevice");
function zh(n = {}) {
  return Io || (Io = Ih(n)), Io;
}
a(zh, "getDevice");
let zo;
function Nh() {
  const n = $e();
  function e() {
    const t = n.navigator.userAgent.toLowerCase();
    return (
      t.indexOf("safari") >= 0 &&
      t.indexOf("chrome") < 0 &&
      t.indexOf("android") < 0
    );
  }
  return (
    a(e, "isSafari"),
    {
      isSafari: e(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        n.navigator.userAgent
      ),
    }
  );
}
a(Nh, "calcBrowser");
function Rh() {
  return zo || (zo = Nh()), zo;
}
a(Rh, "getBrowser");
function $h({ swiper: n, on: e, emit: t }) {
  const i = $e();
  let r = null,
    s = null;
  const o = a(() => {
      !n || n.destroyed || !n.initialized || (t("beforeResize"), t("resize"));
    }, "resizeHandler"),
    l = a(() => {
      !n ||
        n.destroyed ||
        !n.initialized ||
        ((r = new ResizeObserver((d) => {
          s = i.requestAnimationFrame(() => {
            const { width: f, height: p } = n;
            let h = f,
              m = p;
            d.forEach(({ contentBoxSize: g, contentRect: w, target: b }) => {
              (b && b !== n.el) ||
                ((h = w ? w.width : (g[0] || g).inlineSize),
                (m = w ? w.height : (g[0] || g).blockSize));
            }),
              (h !== f || m !== p) && o();
          });
        })),
        r.observe(n.el));
    }, "createObserver"),
    u = a(() => {
      s && i.cancelAnimationFrame(s),
        r && r.unobserve && n.el && (r.unobserve(n.el), (r = null));
    }, "removeObserver"),
    c = a(() => {
      !n || n.destroyed || !n.initialized || t("orientationchange");
    }, "orientationChangeHandler");
  e("init", () => {
    if (n.params.resizeObserver && typeof i.ResizeObserver < "u") {
      l();
      return;
    }
    i.addEventListener("resize", o), i.addEventListener("orientationchange", c);
  }),
    e("destroy", () => {
      u(),
        i.removeEventListener("resize", o),
        i.removeEventListener("orientationchange", c);
    });
}
a($h, "Resize");
function Fh({ swiper: n, extendParams: e, on: t, emit: i }) {
  const r = [],
    s = $e(),
    o = a((c, d = {}) => {
      const f = s.MutationObserver || s.WebkitMutationObserver,
        p = new f((h) => {
          if (h.length === 1) {
            i("observerUpdate", h[0]);
            return;
          }
          const m = a(function () {
            i("observerUpdate", h[0]);
          }, "observerUpdate");
          s.requestAnimationFrame
            ? s.requestAnimationFrame(m)
            : s.setTimeout(m, 0);
        });
      p.observe(c, {
        attributes: typeof d.attributes > "u" ? !0 : d.attributes,
        childList: typeof d.childList > "u" ? !0 : d.childList,
        characterData: typeof d.characterData > "u" ? !0 : d.characterData,
      }),
        r.push(p);
    }, "attach"),
    l = a(() => {
      if (n.params.observer) {
        if (n.params.observeParents) {
          const c = n.$el.parents();
          for (let d = 0; d < c.length; d += 1) o(c[d]);
        }
        o(n.$el[0], { childList: n.params.observeSlideChildren }),
          o(n.$wrapperEl[0], { attributes: !1 });
      }
    }, "init"),
    u = a(() => {
      r.forEach((c) => {
        c.disconnect();
      }),
        r.splice(0, r.length);
    }, "destroy");
  e({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    t("init", l),
    t("destroy", u);
}
a(Fh, "Observer$1");
const Bh = {
  on(n, e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    const r = t ? "unshift" : "push";
    return (
      n.split(" ").forEach((s) => {
        i.eventsListeners[s] || (i.eventsListeners[s] = []),
          i.eventsListeners[s][r](e);
      }),
      i
    );
  },
  once(n, e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    function r(...s) {
      i.off(n, r), r.__emitterProxy && delete r.__emitterProxy, e.apply(i, s);
    }
    return a(r, "onceHandler"), (r.__emitterProxy = e), i.on(n, r, t);
  },
  onAny(n, e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof n != "function") return t;
    const i = e ? "unshift" : "push";
    return t.eventsAnyListeners.indexOf(n) < 0 && t.eventsAnyListeners[i](n), t;
  },
  offAny(n) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const t = e.eventsAnyListeners.indexOf(n);
    return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
  },
  off(n, e) {
    const t = this;
    return (
      !t.eventsListeners ||
        t.destroyed ||
        !t.eventsListeners ||
        n.split(" ").forEach((i) => {
          typeof e > "u"
            ? (t.eventsListeners[i] = [])
            : t.eventsListeners[i] &&
              t.eventsListeners[i].forEach((r, s) => {
                (r === e || (r.__emitterProxy && r.__emitterProxy === e)) &&
                  t.eventsListeners[i].splice(s, 1);
              });
        }),
      t
    );
  },
  emit(...n) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, i, r;
    return (
      typeof n[0] == "string" || Array.isArray(n[0])
        ? ((t = n[0]), (i = n.slice(1, n.length)), (r = e))
        : ((t = n[0].events), (i = n[0].data), (r = n[0].context || e)),
      i.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((o) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((l) => {
            l.apply(r, [o, ...i]);
          }),
          e.eventsListeners &&
            e.eventsListeners[o] &&
            e.eventsListeners[o].forEach((l) => {
              l.apply(r, i);
            });
      }),
      e
    );
  },
};
function Vh() {
  const n = this;
  let e, t;
  const i = n.$el;
  typeof n.params.width < "u" && n.params.width !== null
    ? (e = n.params.width)
    : (e = i[0].clientWidth),
    typeof n.params.height < "u" && n.params.height !== null
      ? (t = n.params.height)
      : (t = i[0].clientHeight),
    !((e === 0 && n.isHorizontal()) || (t === 0 && n.isVertical())) &&
      ((e =
        e -
        parseInt(i.css("padding-left") || 0, 10) -
        parseInt(i.css("padding-right") || 0, 10)),
      (t =
        t -
        parseInt(i.css("padding-top") || 0, 10) -
        parseInt(i.css("padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(t) && (t = 0),
      Object.assign(n, {
        width: e,
        height: t,
        size: n.isHorizontal() ? e : t,
      }));
}
a(Vh, "updateSize");
function qh() {
  const n = this;
  function e(k) {
    return n.isHorizontal()
      ? k
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[k];
  }
  a(e, "getDirectionLabel");
  function t(k, L) {
    return parseFloat(k.getPropertyValue(e(L)) || 0);
  }
  a(t, "getDirectionPropertyValue");
  const i = n.params,
    { $wrapperEl: r, size: s, rtlTranslate: o, wrongRTL: l } = n,
    u = n.virtual && i.virtual.enabled,
    c = u ? n.virtual.slides.length : n.slides.length,
    d = r.children(`.${n.params.slideClass}`),
    f = u ? n.virtual.slides.length : d.length;
  let p = [];
  const h = [],
    m = [];
  let g = i.slidesOffsetBefore;
  typeof g == "function" && (g = i.slidesOffsetBefore.call(n));
  let w = i.slidesOffsetAfter;
  typeof w == "function" && (w = i.slidesOffsetAfter.call(n));
  const b = n.snapGrid.length,
    y = n.slidesGrid.length;
  let _ = i.spaceBetween,
    v = -g,
    x = 0,
    E = 0;
  if (typeof s > "u") return;
  typeof _ == "string" &&
    _.indexOf("%") >= 0 &&
    (_ = (parseFloat(_.replace("%", "")) / 100) * s),
    (n.virtualSize = -_),
    o
      ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
      : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
    i.centeredSlides &&
      i.cssMode &&
      (xs(n.wrapperEl, "--swiper-centered-offset-before", ""),
      xs(n.wrapperEl, "--swiper-centered-offset-after", ""));
  const C = i.grid && i.grid.rows > 1 && n.grid;
  C && n.grid.initSlides(f);
  let S;
  const A =
    i.slidesPerView === "auto" &&
    i.breakpoints &&
    Object.keys(i.breakpoints).filter(
      (k) => typeof i.breakpoints[k].slidesPerView < "u"
    ).length > 0;
  for (let k = 0; k < f; k += 1) {
    S = 0;
    const L = d.eq(k);
    if ((C && n.grid.updateSlide(k, L, f, e), L.css("display") !== "none")) {
      if (i.slidesPerView === "auto") {
        A && (d[k].style[e("width")] = "");
        const T = getComputedStyle(L[0]),
          M = L[0].style.transform,
          O = L[0].style.webkitTransform;
        if (
          (M && (L[0].style.transform = "none"),
          O && (L[0].style.webkitTransform = "none"),
          i.roundLengths)
        )
          S = n.isHorizontal() ? L.outerWidth(!0) : L.outerHeight(!0);
        else {
          const I = t(T, "width"),
            N = t(T, "padding-left"),
            R = t(T, "padding-right"),
            B = t(T, "margin-left"),
            q = t(T, "margin-right"),
            P = T.getPropertyValue("box-sizing");
          if (P && P === "border-box") S = I + B + q;
          else {
            const { clientWidth: X, offsetWidth: K } = L[0];
            S = I + N + R + B + q + (K - X);
          }
        }
        M && (L[0].style.transform = M),
          O && (L[0].style.webkitTransform = O),
          i.roundLengths && (S = Math.floor(S));
      } else
        (S = (s - (i.slidesPerView - 1) * _) / i.slidesPerView),
          i.roundLengths && (S = Math.floor(S)),
          d[k] && (d[k].style[e("width")] = `${S}px`);
      d[k] && (d[k].swiperSlideSize = S),
        m.push(S),
        i.centeredSlides
          ? ((v = v + S / 2 + x / 2 + _),
            x === 0 && k !== 0 && (v = v - s / 2 - _),
            k === 0 && (v = v - s / 2 - _),
            Math.abs(v) < 1 / 1e3 && (v = 0),
            i.roundLengths && (v = Math.floor(v)),
            E % i.slidesPerGroup === 0 && p.push(v),
            h.push(v))
          : (i.roundLengths && (v = Math.floor(v)),
            (E - Math.min(n.params.slidesPerGroupSkip, E)) %
              n.params.slidesPerGroup ===
              0 && p.push(v),
            h.push(v),
            (v = v + S + _)),
        (n.virtualSize += S + _),
        (x = S),
        (E += 1);
    }
  }
  if (
    ((n.virtualSize = Math.max(n.virtualSize, s) + w),
    o &&
      l &&
      (i.effect === "slide" || i.effect === "coverflow") &&
      r.css({ width: `${n.virtualSize + i.spaceBetween}px` }),
    i.setWrapperSize &&
      r.css({ [e("width")]: `${n.virtualSize + i.spaceBetween}px` }),
    C && n.grid.updateWrapperSize(S, p, e),
    !i.centeredSlides)
  ) {
    const k = [];
    for (let L = 0; L < p.length; L += 1) {
      let T = p[L];
      i.roundLengths && (T = Math.floor(T)),
        p[L] <= n.virtualSize - s && k.push(T);
    }
    (p = k),
      Math.floor(n.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
        p.push(n.virtualSize - s);
  }
  if ((p.length === 0 && (p = [0]), i.spaceBetween !== 0)) {
    const k = n.isHorizontal() && o ? "marginLeft" : e("marginRight");
    d.filter((L, T) => (i.cssMode ? T !== d.length - 1 : !0)).css({
      [k]: `${_}px`,
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let k = 0;
    m.forEach((T) => {
      k += T + (i.spaceBetween ? i.spaceBetween : 0);
    }),
      (k -= i.spaceBetween);
    const L = k - s;
    p = p.map((T) => (T < 0 ? -g : T > L ? L + w : T));
  }
  if (i.centerInsufficientSlides) {
    let k = 0;
    if (
      (m.forEach((L) => {
        k += L + (i.spaceBetween ? i.spaceBetween : 0);
      }),
      (k -= i.spaceBetween),
      k < s)
    ) {
      const L = (s - k) / 2;
      p.forEach((T, M) => {
        p[M] = T - L;
      }),
        h.forEach((T, M) => {
          h[M] = T + L;
        });
    }
  }
  if (
    (Object.assign(n, {
      slides: d,
      snapGrid: p,
      slidesGrid: h,
      slidesSizesGrid: m,
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
  ) {
    xs(n.wrapperEl, "--swiper-centered-offset-before", `${-p[0]}px`),
      xs(
        n.wrapperEl,
        "--swiper-centered-offset-after",
        `${n.size / 2 - m[m.length - 1] / 2}px`
      );
    const k = -n.snapGrid[0],
      L = -n.slidesGrid[0];
    (n.snapGrid = n.snapGrid.map((T) => T + k)),
      (n.slidesGrid = n.slidesGrid.map((T) => T + L));
  }
  if (
    (f !== c && n.emit("slidesLengthChange"),
    p.length !== b &&
      (n.params.watchOverflow && n.checkOverflow(),
      n.emit("snapGridLengthChange")),
    h.length !== y && n.emit("slidesGridLengthChange"),
    i.watchSlidesProgress && n.updateSlidesOffset(),
    !u && !i.cssMode && (i.effect === "slide" || i.effect === "fade"))
  ) {
    const k = `${i.containerModifierClass}backface-hidden`,
      L = n.$el.hasClass(k);
    f <= i.maxBackfaceHiddenSlides
      ? L || n.$el.addClass(k)
      : L && n.$el.removeClass(k);
  }
}
a(qh, "updateSlides");
function Wh(n) {
  const e = this,
    t = [],
    i = e.virtual && e.params.virtual.enabled;
  let r = 0,
    s;
  typeof n == "number"
    ? e.setTransition(n)
    : n === !0 && e.setTransition(e.params.speed);
  const o = a(
    (l) =>
      i
        ? e.slides.filter(
            (u) => parseInt(u.getAttribute("data-swiper-slide-index"), 10) === l
          )[0]
        : e.slides.eq(l)[0],
    "getSlideByIndex"
  );
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || F([])).each((l) => {
        t.push(l);
      });
    else
      for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
        const l = e.activeIndex + s;
        if (l > e.slides.length && !i) break;
        t.push(o(l));
      }
  else t.push(o(e.activeIndex));
  for (s = 0; s < t.length; s += 1)
    if (typeof t[s] < "u") {
      const l = t[s].offsetHeight;
      r = l > r ? l : r;
    }
  (r || r === 0) && e.$wrapperEl.css("height", `${r}px`);
}
a(Wh, "updateAutoHeight");
function Hh() {
  const n = this,
    e = n.slides;
  for (let t = 0; t < e.length; t += 1)
    e[t].swiperSlideOffset = n.isHorizontal()
      ? e[t].offsetLeft
      : e[t].offsetTop;
}
a(Hh, "updateSlidesOffset");
function Gh(n = (this && this.translate) || 0) {
  const e = this,
    t = e.params,
    { slides: i, rtlTranslate: r, snapGrid: s } = e;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let o = -n;
  r && (o = n),
    i.removeClass(t.slideVisibleClass),
    (e.visibleSlidesIndexes = []),
    (e.visibleSlides = []);
  for (let l = 0; l < i.length; l += 1) {
    const u = i[l];
    let c = u.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (c -= i[0].swiperSlideOffset);
    const d =
        (o + (t.centeredSlides ? e.minTranslate() : 0) - c) /
        (u.swiperSlideSize + t.spaceBetween),
      f =
        (o - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) /
        (u.swiperSlideSize + t.spaceBetween),
      p = -(o - c),
      h = p + e.slidesSizesGrid[l];
    ((p >= 0 && p < e.size - 1) ||
      (h > 1 && h <= e.size) ||
      (p <= 0 && h >= e.size)) &&
      (e.visibleSlides.push(u),
      e.visibleSlidesIndexes.push(l),
      i.eq(l).addClass(t.slideVisibleClass)),
      (u.progress = r ? -d : d),
      (u.originalProgress = r ? -f : f);
  }
  e.visibleSlides = F(e.visibleSlides);
}
a(Gh, "updateSlidesProgress");
function Yh(n) {
  const e = this;
  if (typeof n > "u") {
    const c = e.rtlTranslate ? -1 : 1;
    n = (e && e.translate && e.translate * c) || 0;
  }
  const t = e.params,
    i = e.maxTranslate() - e.minTranslate();
  let { progress: r, isBeginning: s, isEnd: o } = e;
  const l = s,
    u = o;
  i === 0
    ? ((r = 0), (s = !0), (o = !0))
    : ((r = (n - e.minTranslate()) / i), (s = r <= 0), (o = r >= 1)),
    Object.assign(e, { progress: r, isBeginning: s, isEnd: o }),
    (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
      e.updateSlidesProgress(n),
    s && !l && e.emit("reachBeginning toEdge"),
    o && !u && e.emit("reachEnd toEdge"),
    ((l && !s) || (u && !o)) && e.emit("fromEdge"),
    e.emit("progress", r);
}
a(Yh, "updateProgress");
function Xh() {
  const n = this,
    { slides: e, params: t, $wrapperEl: i, activeIndex: r, realIndex: s } = n,
    o = n.virtual && t.virtual.enabled;
  e.removeClass(
    `${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`
  );
  let l;
  o
    ? (l = n.$wrapperEl.find(
        `.${t.slideClass}[data-swiper-slide-index="${r}"]`
      ))
    : (l = e.eq(r)),
    l.addClass(t.slideActiveClass),
    t.loop &&
      (l.hasClass(t.slideDuplicateClass)
        ? i
            .children(
              `.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
            )
            .addClass(t.slideDuplicateActiveClass)
        : i
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
            )
            .addClass(t.slideDuplicateActiveClass));
  let u = l.nextAll(`.${t.slideClass}`).eq(0).addClass(t.slideNextClass);
  t.loop && u.length === 0 && ((u = e.eq(0)), u.addClass(t.slideNextClass));
  let c = l.prevAll(`.${t.slideClass}`).eq(0).addClass(t.slidePrevClass);
  t.loop && c.length === 0 && ((c = e.eq(-1)), c.addClass(t.slidePrevClass)),
    t.loop &&
      (u.hasClass(t.slideDuplicateClass)
        ? i
            .children(
              `.${t.slideClass}:not(.${
                t.slideDuplicateClass
              })[data-swiper-slide-index="${u.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(t.slideDuplicateNextClass)
        : i
            .children(
              `.${t.slideClass}.${
                t.slideDuplicateClass
              }[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`
            )
            .addClass(t.slideDuplicateNextClass),
      c.hasClass(t.slideDuplicateClass)
        ? i
            .children(
              `.${t.slideClass}:not(.${
                t.slideDuplicateClass
              })[data-swiper-slide-index="${c.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(t.slideDuplicatePrevClass)
        : i
            .children(
              `.${t.slideClass}.${
                t.slideDuplicateClass
              }[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`
            )
            .addClass(t.slideDuplicatePrevClass)),
    n.emitSlidesClasses();
}
a(Xh, "updateSlidesClasses");
function jh(n) {
  const e = this,
    t = e.rtlTranslate ? e.translate : -e.translate,
    {
      slidesGrid: i,
      snapGrid: r,
      params: s,
      activeIndex: o,
      realIndex: l,
      snapIndex: u,
    } = e;
  let c = n,
    d;
  if (typeof c > "u") {
    for (let p = 0; p < i.length; p += 1)
      typeof i[p + 1] < "u"
        ? t >= i[p] && t < i[p + 1] - (i[p + 1] - i[p]) / 2
          ? (c = p)
          : t >= i[p] && t < i[p + 1] && (c = p + 1)
        : t >= i[p] && (c = p);
    s.normalizeSlideIndex && (c < 0 || typeof c > "u") && (c = 0);
  }
  if (r.indexOf(t) >= 0) d = r.indexOf(t);
  else {
    const p = Math.min(s.slidesPerGroupSkip, c);
    d = p + Math.floor((c - p) / s.slidesPerGroup);
  }
  if ((d >= r.length && (d = r.length - 1), c === o)) {
    d !== u && ((e.snapIndex = d), e.emit("snapIndexChange"));
    return;
  }
  const f = parseInt(e.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
  Object.assign(e, {
    snapIndex: d,
    realIndex: f,
    previousIndex: o,
    activeIndex: c,
  }),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    l !== f && e.emit("realIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange");
}
a(jh, "updateActiveIndex");
function Uh(n) {
  const e = this,
    t = e.params,
    i = F(n).closest(`.${t.slideClass}`)[0];
  let r = !1,
    s;
  if (i) {
    for (let o = 0; o < e.slides.length; o += 1)
      if (e.slides[o] === i) {
        (r = !0), (s = o);
        break;
      }
  }
  if (i && r)
    (e.clickedSlide = i),
      e.virtual && e.params.virtual.enabled
        ? (e.clickedIndex = parseInt(F(i).attr("data-swiper-slide-index"), 10))
        : (e.clickedIndex = s);
  else {
    (e.clickedSlide = void 0), (e.clickedIndex = void 0);
    return;
  }
  t.slideToClickedSlide &&
    e.clickedIndex !== void 0 &&
    e.clickedIndex !== e.activeIndex &&
    e.slideToClickedSlide();
}
a(Uh, "updateClickedSlide");
const Kh = {
  updateSize: Vh,
  updateSlides: qh,
  updateAutoHeight: Wh,
  updateSlidesOffset: Hh,
  updateSlidesProgress: Gh,
  updateProgress: Yh,
  updateSlidesClasses: Xh,
  updateActiveIndex: jh,
  updateClickedSlide: Uh,
};
function Zh(n = this.isHorizontal() ? "x" : "y") {
  const e = this,
    { params: t, rtlTranslate: i, translate: r, $wrapperEl: s } = e;
  if (t.virtualTranslate) return i ? -r : r;
  if (t.cssMode) return r;
  let o = Oh(s[0], n);
  return i && (o = -o), o || 0;
}
a(Zh, "getSwiperTranslate");
function Qh(n, e) {
  const t = this,
    {
      rtlTranslate: i,
      params: r,
      $wrapperEl: s,
      wrapperEl: o,
      progress: l,
    } = t;
  let u = 0,
    c = 0;
  const d = 0;
  t.isHorizontal() ? (u = i ? -n : n) : (c = n),
    r.roundLengths && ((u = Math.floor(u)), (c = Math.floor(c))),
    r.cssMode
      ? (o[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
          ? -u
          : -c)
      : r.virtualTranslate ||
        s.transform(`translate3d(${u}px, ${c}px, ${d}px)`),
    (t.previousTranslate = t.translate),
    (t.translate = t.isHorizontal() ? u : c);
  let f;
  const p = t.maxTranslate() - t.minTranslate();
  p === 0 ? (f = 0) : (f = (n - t.minTranslate()) / p),
    f !== l && t.updateProgress(n),
    t.emit("setTranslate", t.translate, e);
}
a(Qh, "setTranslate");
function Jh() {
  return -this.snapGrid[0];
}
a(Jh, "minTranslate");
function ep() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
a(ep, "maxTranslate");
function tp(n = 0, e = this.params.speed, t = !0, i = !0, r) {
  const s = this,
    { params: o, wrapperEl: l } = s;
  if (s.animating && o.preventInteractionOnTransition) return !1;
  const u = s.minTranslate(),
    c = s.maxTranslate();
  let d;
  if (
    (i && n > u ? (d = u) : i && n < c ? (d = c) : (d = n),
    s.updateProgress(d),
    o.cssMode)
  ) {
    const f = s.isHorizontal();
    if (e === 0) l[f ? "scrollLeft" : "scrollTop"] = -d;
    else {
      if (!s.support.smoothScroll)
        return (
          hc({ swiper: s, targetPosition: -d, side: f ? "left" : "top" }), !0
        );
      l.scrollTo({ [f ? "left" : "top"]: -d, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (s.setTransition(0),
        s.setTranslate(d),
        t && (s.emit("beforeTransitionStart", e, r), s.emit("transitionEnd")))
      : (s.setTransition(e),
        s.setTranslate(d),
        t && (s.emit("beforeTransitionStart", e, r), s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = a(function (p) {
              !s ||
                s.destroyed ||
                (p.target === this &&
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
                  t && s.emit("transitionEnd")));
            }, "transitionEnd")),
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
a(tp, "translateTo");
const ip = {
  getTranslate: Zh,
  setTranslate: Qh,
  minTranslate: Jh,
  maxTranslate: ep,
  translateTo: tp,
};
function rp(n, e) {
  const t = this;
  t.params.cssMode || t.$wrapperEl.transition(n), t.emit("setTransition", n, e);
}
a(rp, "setTransition");
function mc({ swiper: n, runCallbacks: e, direction: t, step: i }) {
  const { activeIndex: r, previousIndex: s } = n;
  let o = t;
  if (
    (o || (r > s ? (o = "next") : r < s ? (o = "prev") : (o = "reset")),
    n.emit(`transition${i}`),
    e && r !== s)
  ) {
    if (o === "reset") {
      n.emit(`slideResetTransition${i}`);
      return;
    }
    n.emit(`slideChangeTransition${i}`),
      o === "next"
        ? n.emit(`slideNextTransition${i}`)
        : n.emit(`slidePrevTransition${i}`);
  }
}
a(mc, "transitionEmit");
function np(n = !0, e) {
  const t = this,
    { params: i } = t;
  i.cssMode ||
    (i.autoHeight && t.updateAutoHeight(),
    mc({ swiper: t, runCallbacks: n, direction: e, step: "Start" }));
}
a(np, "transitionStart");
function sp(n = !0, e) {
  const t = this,
    { params: i } = t;
  (t.animating = !1),
    !i.cssMode &&
      (t.setTransition(0),
      mc({ swiper: t, runCallbacks: n, direction: e, step: "End" }));
}
a(sp, "transitionEnd");
const op = { setTransition: rp, transitionStart: np, transitionEnd: sp };
function ap(n = 0, e = this.params.speed, t = !0, i, r) {
  if (typeof n != "number" && typeof n != "string")
    throw new Error(
      `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof n}] given.`
    );
  if (typeof n == "string") {
    const _ = parseInt(n, 10);
    if (!isFinite(_))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${n}] given.`
      );
    n = _;
  }
  const s = this;
  let o = n;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: u,
    slidesGrid: c,
    previousIndex: d,
    activeIndex: f,
    rtlTranslate: p,
    wrapperEl: h,
    enabled: m,
  } = s;
  if ((s.animating && l.preventInteractionOnTransition) || (!m && !i && !r))
    return !1;
  const g = Math.min(s.params.slidesPerGroupSkip, o);
  let w = g + Math.floor((o - g) / s.params.slidesPerGroup);
  w >= u.length && (w = u.length - 1);
  const b = -u[w];
  if (l.normalizeSlideIndex)
    for (let _ = 0; _ < c.length; _ += 1) {
      const v = -Math.floor(b * 100),
        x = Math.floor(c[_] * 100),
        E = Math.floor(c[_ + 1] * 100);
      typeof c[_ + 1] < "u"
        ? v >= x && v < E - (E - x) / 2
          ? (o = _)
          : v >= x && v < E && (o = _ + 1)
        : v >= x && (o = _);
    }
  if (
    s.initialized &&
    o !== f &&
    ((!s.allowSlideNext && b < s.translate && b < s.minTranslate()) ||
      (!s.allowSlidePrev &&
        b > s.translate &&
        b > s.maxTranslate() &&
        (f || 0) !== o))
  )
    return !1;
  o !== (d || 0) && t && s.emit("beforeSlideChangeStart"), s.updateProgress(b);
  let y;
  if (
    (o > f ? (y = "next") : o < f ? (y = "prev") : (y = "reset"),
    (p && -b === s.translate) || (!p && b === s.translate))
  )
    return (
      s.updateActiveIndex(o),
      l.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      l.effect !== "slide" && s.setTranslate(b),
      y !== "reset" && (s.transitionStart(t, y), s.transitionEnd(t, y)),
      !1
    );
  if (l.cssMode) {
    const _ = s.isHorizontal(),
      v = p ? b : -b;
    if (e === 0) {
      const x = s.virtual && s.params.virtual.enabled;
      x &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        (h[_ ? "scrollLeft" : "scrollTop"] = v),
        x &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""),
              (s._swiperImmediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll)
        return (
          hc({ swiper: s, targetPosition: v, side: _ ? "left" : "top" }), !0
        );
      h.scrollTo({ [_ ? "left" : "top"]: v, behavior: "smooth" });
    }
    return !0;
  }
  return (
    s.setTransition(e),
    s.setTranslate(b),
    s.updateActiveIndex(o),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", e, i),
    s.transitionStart(t, y),
    e === 0
      ? s.transitionEnd(t, y)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = a(function (v) {
            !s ||
              s.destroyed ||
              (v.target === this &&
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
                s.transitionEnd(t, y)));
          }, "transitionEnd")),
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
a(ap, "slideTo");
function lp(n = 0, e = this.params.speed, t = !0, i) {
  if (typeof n == "string") {
    const o = parseInt(n, 10);
    if (!isFinite(o))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${n}] given.`
      );
    n = o;
  }
  const r = this;
  let s = n;
  return r.params.loop && (s += r.loopedSlides), r.slideTo(s, e, t, i);
}
a(lp, "slideToLoop");
function up(n = this.params.speed, e = !0, t) {
  const i = this,
    { animating: r, enabled: s, params: o } = i;
  if (!s) return i;
  let l = o.slidesPerGroup;
  o.slidesPerView === "auto" &&
    o.slidesPerGroup === 1 &&
    o.slidesPerGroupAuto &&
    (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const u = i.activeIndex < o.slidesPerGroupSkip ? 1 : l;
  if (o.loop) {
    if (r && o.loopPreventsSlide) return !1;
    i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
  }
  return o.rewind && i.isEnd
    ? i.slideTo(0, n, e, t)
    : i.slideTo(i.activeIndex + u, n, e, t);
}
a(up, "slideNext");
function cp(n = this.params.speed, e = !0, t) {
  const i = this,
    {
      params: r,
      animating: s,
      snapGrid: o,
      slidesGrid: l,
      rtlTranslate: u,
      enabled: c,
    } = i;
  if (!c) return i;
  if (r.loop) {
    if (s && r.loopPreventsSlide) return !1;
    i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
  }
  const d = u ? i.translate : -i.translate;
  function f(w) {
    return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w);
  }
  a(f, "normalize");
  const p = f(d),
    h = o.map((w) => f(w));
  let m = o[h.indexOf(p) - 1];
  if (typeof m > "u" && r.cssMode) {
    let w;
    o.forEach((b, y) => {
      p >= b && (w = y);
    }),
      typeof w < "u" && (m = o[w > 0 ? w - 1 : w]);
  }
  let g = 0;
  if (
    (typeof m < "u" &&
      ((g = l.indexOf(m)),
      g < 0 && (g = i.activeIndex - 1),
      r.slidesPerView === "auto" &&
        r.slidesPerGroup === 1 &&
        r.slidesPerGroupAuto &&
        ((g = g - i.slidesPerViewDynamic("previous", !0) + 1),
        (g = Math.max(g, 0)))),
    r.rewind && i.isBeginning)
  ) {
    const w =
      i.params.virtual && i.params.virtual.enabled && i.virtual
        ? i.virtual.slides.length - 1
        : i.slides.length - 1;
    return i.slideTo(w, n, e, t);
  }
  return i.slideTo(g, n, e, t);
}
a(cp, "slidePrev");
function dp(n = this.params.speed, e = !0, t) {
  const i = this;
  return i.slideTo(i.activeIndex, n, e, t);
}
a(dp, "slideReset");
function fp(n = this.params.speed, e = !0, t, i = 0.5) {
  const r = this;
  let s = r.activeIndex;
  const o = Math.min(r.params.slidesPerGroupSkip, s),
    l = o + Math.floor((s - o) / r.params.slidesPerGroup),
    u = r.rtlTranslate ? r.translate : -r.translate;
  if (u >= r.snapGrid[l]) {
    const c = r.snapGrid[l],
      d = r.snapGrid[l + 1];
    u - c > (d - c) * i && (s += r.params.slidesPerGroup);
  } else {
    const c = r.snapGrid[l - 1],
      d = r.snapGrid[l];
    u - c <= (d - c) * i && (s -= r.params.slidesPerGroup);
  }
  return (
    (s = Math.max(s, 0)),
    (s = Math.min(s, r.slidesGrid.length - 1)),
    r.slideTo(s, n, e, t)
  );
}
a(fp, "slideToClosest");
function hp() {
  const n = this,
    { params: e, $wrapperEl: t } = n,
    i = e.slidesPerView === "auto" ? n.slidesPerViewDynamic() : e.slidesPerView;
  let r = n.clickedIndex,
    s;
  if (e.loop) {
    if (n.animating) return;
    (s = parseInt(F(n.clickedSlide).attr("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? r < n.loopedSlides - i / 2 ||
          r > n.slides.length - n.loopedSlides + i / 2
          ? (n.loopFix(),
            (r = t
              .children(
                `.${e.slideClass}[data-swiper-slide-index="${s}"]:not(.${e.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            ss(() => {
              n.slideTo(r);
            }))
          : n.slideTo(r)
        : r > n.slides.length - i
        ? (n.loopFix(),
          (r = t
            .children(
              `.${e.slideClass}[data-swiper-slide-index="${s}"]:not(.${e.slideDuplicateClass})`
            )
            .eq(0)
            .index()),
          ss(() => {
            n.slideTo(r);
          }))
        : n.slideTo(r);
  } else n.slideTo(r);
}
a(hp, "slideToClickedSlide");
const pp = {
  slideTo: ap,
  slideToLoop: lp,
  slideNext: up,
  slidePrev: cp,
  slideReset: dp,
  slideToClosest: fp,
  slideToClickedSlide: hp,
};
function mp() {
  const n = this,
    e = wt(),
    { params: t, $wrapperEl: i } = n,
    r = i.children().length > 0 ? F(i.children()[0].parentNode) : i;
  r.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
  let s = r.children(`.${t.slideClass}`);
  if (t.loopFillGroupWithBlank) {
    const u = t.slidesPerGroup - (s.length % t.slidesPerGroup);
    if (u !== t.slidesPerGroup) {
      for (let c = 0; c < u; c += 1) {
        const d = F(e.createElement("div")).addClass(
          `${t.slideClass} ${t.slideBlankClass}`
        );
        r.append(d);
      }
      s = r.children(`.${t.slideClass}`);
    }
  }
  t.slidesPerView === "auto" && !t.loopedSlides && (t.loopedSlides = s.length),
    (n.loopedSlides = Math.ceil(
      parseFloat(t.loopedSlides || t.slidesPerView, 10)
    )),
    (n.loopedSlides += t.loopAdditionalSlides),
    n.loopedSlides > s.length &&
      n.params.loopedSlidesLimit &&
      (n.loopedSlides = s.length);
  const o = [],
    l = [];
  s.each((u, c) => {
    F(u).attr("data-swiper-slide-index", c);
  });
  for (let u = 0; u < n.loopedSlides; u += 1) {
    const c = u - Math.floor(u / s.length) * s.length;
    l.push(s.eq(c)[0]), o.unshift(s.eq(s.length - c - 1)[0]);
  }
  for (let u = 0; u < l.length; u += 1)
    r.append(F(l[u].cloneNode(!0)).addClass(t.slideDuplicateClass));
  for (let u = o.length - 1; u >= 0; u -= 1)
    r.prepend(F(o[u].cloneNode(!0)).addClass(t.slideDuplicateClass));
}
a(mp, "loopCreate");
function gp() {
  const n = this;
  n.emit("beforeLoopFix");
  const {
    activeIndex: e,
    slides: t,
    loopedSlides: i,
    allowSlidePrev: r,
    allowSlideNext: s,
    snapGrid: o,
    rtlTranslate: l,
  } = n;
  let u;
  (n.allowSlidePrev = !0), (n.allowSlideNext = !0);
  const d = -o[e] - n.getTranslate();
  e < i
    ? ((u = t.length - i * 3 + e),
      (u += i),
      n.slideTo(u, 0, !1, !0) &&
        d !== 0 &&
        n.setTranslate((l ? -n.translate : n.translate) - d))
    : e >= t.length - i &&
      ((u = -t.length + e + i),
      (u += i),
      n.slideTo(u, 0, !1, !0) &&
        d !== 0 &&
        n.setTranslate((l ? -n.translate : n.translate) - d)),
    (n.allowSlidePrev = r),
    (n.allowSlideNext = s),
    n.emit("loopFix");
}
a(gp, "loopFix");
function vp() {
  const n = this,
    { $wrapperEl: e, params: t, slides: i } = n;
  e
    .children(
      `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
    )
    .remove(),
    i.removeAttr("data-swiper-slide-index");
}
a(vp, "loopDestroy");
const yp = { loopCreate: mp, loopFix: gp, loopDestroy: vp };
function _p(n) {
  const e = this;
  if (
    e.support.touch ||
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  (t.style.cursor = "move"), (t.style.cursor = n ? "grabbing" : "grab");
}
a(_p, "setGrabCursor");
function wp() {
  const n = this;
  n.support.touch ||
    (n.params.watchOverflow && n.isLocked) ||
    n.params.cssMode ||
    (n[
      n.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = "");
}
a(wp, "unsetGrabCursor");
const bp = { setGrabCursor: _p, unsetGrabCursor: wp };
function xp(n, e = this) {
  function t(i) {
    if (!i || i === wt() || i === $e()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const r = i.closest(n);
    return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
  }
  return a(t, "__closestFrom"), t(e);
}
a(xp, "closestElement");
function Sp(n) {
  const e = this,
    t = wt(),
    i = $e(),
    r = e.touchEventsData,
    { params: s, touches: o, enabled: l } = e;
  if (!l || (e.animating && s.preventInteractionOnTransition)) return;
  !e.animating && s.cssMode && s.loop && e.loopFix();
  let u = n;
  u.originalEvent && (u = u.originalEvent);
  let c = F(u.target);
  if (
    (s.touchEventsTarget === "wrapper" && !c.closest(e.wrapperEl).length) ||
    ((r.isTouchEvent = u.type === "touchstart"),
    !r.isTouchEvent && "which" in u && u.which === 3) ||
    (!r.isTouchEvent && "button" in u && u.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return;
  const d = !!s.noSwipingClass && s.noSwipingClass !== "",
    f = n.composedPath ? n.composedPath() : n.path;
  d && u.target && u.target.shadowRoot && f && (c = F(f[0]));
  const p = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    h = !!(u.target && u.target.shadowRoot);
  if (s.noSwiping && (h ? xp(p, c[0]) : c.closest(p)[0])) {
    e.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !c.closest(s.swipeHandler)[0]) return;
  (o.currentX = u.type === "touchstart" ? u.targetTouches[0].pageX : u.pageX),
    (o.currentY = u.type === "touchstart" ? u.targetTouches[0].pageY : u.pageY);
  const m = o.currentX,
    g = o.currentY,
    w = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
    b = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
  if (w && (m <= b || m >= i.innerWidth - b))
    if (w === "prevent") n.preventDefault();
    else return;
  if (
    (Object.assign(r, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
    (o.startX = m),
    (o.startY = g),
    (r.touchStartTime = di()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    s.threshold > 0 && (r.allowThresholdMove = !1),
    u.type !== "touchstart")
  ) {
    let y = !0;
    c.is(r.focusableElements) &&
      ((y = !1), c[0].nodeName === "SELECT" && (r.isTouched = !1)),
      t.activeElement &&
        F(t.activeElement).is(r.focusableElements) &&
        t.activeElement !== c[0] &&
        t.activeElement.blur();
    const _ = y && e.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || _) &&
      !c[0].isContentEditable &&
      u.preventDefault();
  }
  e.params.freeMode &&
    e.params.freeMode.enabled &&
    e.freeMode &&
    e.animating &&
    !s.cssMode &&
    e.freeMode.onTouchStart(),
    e.emit("touchStart", u);
}
a(Sp, "onTouchStart");
function Tp(n) {
  const e = wt(),
    t = this,
    i = t.touchEventsData,
    { params: r, touches: s, rtlTranslate: o, enabled: l } = t;
  if (!l) return;
  let u = n;
  if ((u.originalEvent && (u = u.originalEvent), !i.isTouched)) {
    i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", u);
    return;
  }
  if (i.isTouchEvent && u.type !== "touchmove") return;
  const c =
      u.type === "touchmove" &&
      u.targetTouches &&
      (u.targetTouches[0] || u.changedTouches[0]),
    d = u.type === "touchmove" ? c.pageX : u.pageX,
    f = u.type === "touchmove" ? c.pageY : u.pageY;
  if (u.preventedByNestedSwiper) {
    (s.startX = d), (s.startY = f);
    return;
  }
  if (!t.allowTouchMove) {
    F(u.target).is(i.focusableElements) || (t.allowClick = !1),
      i.isTouched &&
        (Object.assign(s, { startX: d, startY: f, currentX: d, currentY: f }),
        (i.touchStartTime = di()));
    return;
  }
  if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
    if (t.isVertical()) {
      if (
        (f < s.startY && t.translate <= t.maxTranslate()) ||
        (f > s.startY && t.translate >= t.minTranslate())
      ) {
        (i.isTouched = !1), (i.isMoved = !1);
        return;
      }
    } else if (
      (d < s.startX && t.translate <= t.maxTranslate()) ||
      (d > s.startX && t.translate >= t.minTranslate())
    )
      return;
  }
  if (
    i.isTouchEvent &&
    e.activeElement &&
    u.target === e.activeElement &&
    F(u.target).is(i.focusableElements)
  ) {
    (i.isMoved = !0), (t.allowClick = !1);
    return;
  }
  if (
    (i.allowTouchCallbacks && t.emit("touchMove", u),
    u.targetTouches && u.targetTouches.length > 1)
  )
    return;
  (s.currentX = d), (s.currentY = f);
  const p = s.currentX - s.startX,
    h = s.currentY - s.startY;
  if (t.params.threshold && Math.sqrt(p ** 2 + h ** 2) < t.params.threshold)
    return;
  if (typeof i.isScrolling > "u") {
    let b;
    (t.isHorizontal() && s.currentY === s.startY) ||
    (t.isVertical() && s.currentX === s.startX)
      ? (i.isScrolling = !1)
      : p * p + h * h >= 25 &&
        ((b = (Math.atan2(Math.abs(h), Math.abs(p)) * 180) / Math.PI),
        (i.isScrolling = t.isHorizontal()
          ? b > r.touchAngle
          : 90 - b > r.touchAngle));
  }
  if (
    (i.isScrolling && t.emit("touchMoveOpposite", u),
    typeof i.startMoving > "u" &&
      (s.currentX !== s.startX || s.currentY !== s.startY) &&
      (i.startMoving = !0),
    i.isScrolling)
  ) {
    i.isTouched = !1;
    return;
  }
  if (!i.startMoving) return;
  (t.allowClick = !1),
    !r.cssMode && u.cancelable && u.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && u.stopPropagation(),
    i.isMoved ||
      (r.loop && !r.cssMode && t.loopFix(),
      (i.startTranslate = t.getTranslate()),
      t.setTransition(0),
      t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
      (i.allowMomentumBounce = !1),
      r.grabCursor &&
        (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
        t.setGrabCursor(!0),
      t.emit("sliderFirstMove", u)),
    t.emit("sliderMove", u),
    (i.isMoved = !0);
  let m = t.isHorizontal() ? p : h;
  (s.diff = m),
    (m *= r.touchRatio),
    o && (m = -m),
    (t.swipeDirection = m > 0 ? "prev" : "next"),
    (i.currentTranslate = m + i.startTranslate);
  let g = !0,
    w = r.resistanceRatio;
  if (
    (r.touchReleaseOnEdges && (w = 0),
    m > 0 && i.currentTranslate > t.minTranslate()
      ? ((g = !1),
        r.resistance &&
          (i.currentTranslate =
            t.minTranslate() -
            1 +
            (-t.minTranslate() + i.startTranslate + m) ** w))
      : m < 0 &&
        i.currentTranslate < t.maxTranslate() &&
        ((g = !1),
        r.resistance &&
          (i.currentTranslate =
            t.maxTranslate() +
            1 -
            (t.maxTranslate() - i.startTranslate - m) ** w)),
    g && (u.preventedByNestedSwiper = !0),
    !t.allowSlideNext &&
      t.swipeDirection === "next" &&
      i.currentTranslate < i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev &&
      t.swipeDirection === "prev" &&
      i.currentTranslate > i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev &&
      !t.allowSlideNext &&
      (i.currentTranslate = i.startTranslate),
    r.threshold > 0)
  )
    if (Math.abs(m) > r.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        (i.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (i.currentTranslate = i.startTranslate),
          (s.diff = t.isHorizontal()
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
    (((r.freeMode && r.freeMode.enabled && t.freeMode) ||
      r.watchSlidesProgress) &&
      (t.updateActiveIndex(), t.updateSlidesClasses()),
    t.params.freeMode &&
      r.freeMode.enabled &&
      t.freeMode &&
      t.freeMode.onTouchMove(),
    t.updateProgress(i.currentTranslate),
    t.setTranslate(i.currentTranslate));
}
a(Tp, "onTouchMove");
function Ep(n) {
  const e = this,
    t = e.touchEventsData,
    { params: i, touches: r, rtlTranslate: s, slidesGrid: o, enabled: l } = e;
  if (!l) return;
  let u = n;
  if (
    (u.originalEvent && (u = u.originalEvent),
    t.allowTouchCallbacks && e.emit("touchEnd", u),
    (t.allowTouchCallbacks = !1),
    !t.isTouched)
  ) {
    t.isMoved && i.grabCursor && e.setGrabCursor(!1),
      (t.isMoved = !1),
      (t.startMoving = !1);
    return;
  }
  i.grabCursor &&
    t.isMoved &&
    t.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1);
  const c = di(),
    d = c - t.touchStartTime;
  if (e.allowClick) {
    const y = u.path || (u.composedPath && u.composedPath());
    e.updateClickedSlide((y && y[0]) || u.target),
      e.emit("tap click", u),
      d < 300 &&
        c - t.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", u);
  }
  if (
    ((t.lastClickTime = di()),
    ss(() => {
      e.destroyed || (e.allowClick = !0);
    }),
    !t.isTouched ||
      !t.isMoved ||
      !e.swipeDirection ||
      r.diff === 0 ||
      t.currentTranslate === t.startTranslate)
  ) {
    (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
    return;
  }
  (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
  let f;
  if (
    (i.followFinger
      ? (f = s ? e.translate : -e.translate)
      : (f = -t.currentTranslate),
    i.cssMode)
  )
    return;
  if (e.params.freeMode && i.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: f });
    return;
  }
  let p = 0,
    h = e.slidesSizesGrid[0];
  for (
    let y = 0;
    y < o.length;
    y += y < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const _ = y < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof o[y + _] < "u"
      ? f >= o[y] && f < o[y + _] && ((p = y), (h = o[y + _] - o[y]))
      : f >= o[y] && ((p = y), (h = o[o.length - 1] - o[o.length - 2]));
  }
  let m = null,
    g = null;
  i.rewind &&
    (e.isBeginning
      ? (g =
          e.params.virtual && e.params.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (m = 0));
  const w = (f - o[p]) / h,
    b = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (d > i.longSwipesMs) {
    if (!i.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (w >= i.longSwipesRatio
        ? e.slideTo(i.rewind && e.isEnd ? m : p + b)
        : e.slideTo(p)),
      e.swipeDirection === "prev" &&
        (w > 1 - i.longSwipesRatio
          ? e.slideTo(p + b)
          : g !== null && w < 0 && Math.abs(w) > i.longSwipesRatio
          ? e.slideTo(g)
          : e.slideTo(p));
  } else {
    if (!i.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (u.target === e.navigation.nextEl || u.target === e.navigation.prevEl)
      ? u.target === e.navigation.nextEl
        ? e.slideTo(p + b)
        : e.slideTo(p)
      : (e.swipeDirection === "next" && e.slideTo(m !== null ? m : p + b),
        e.swipeDirection === "prev" && e.slideTo(g !== null ? g : p));
  }
}
a(Ep, "onTouchEnd");
function jl() {
  const n = this,
    { params: e, el: t } = n;
  if (t && t.offsetWidth === 0) return;
  e.breakpoints && n.setBreakpoint();
  const { allowSlideNext: i, allowSlidePrev: r, snapGrid: s } = n;
  (n.allowSlideNext = !0),
    (n.allowSlidePrev = !0),
    n.updateSize(),
    n.updateSlides(),
    n.updateSlidesClasses(),
    (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
    n.isEnd &&
    !n.isBeginning &&
    !n.params.centeredSlides
      ? n.slideTo(n.slides.length - 1, 0, !1, !0)
      : n.slideTo(n.activeIndex, 0, !1, !0),
    n.autoplay && n.autoplay.running && n.autoplay.paused && n.autoplay.run(),
    (n.allowSlidePrev = r),
    (n.allowSlideNext = i),
    n.params.watchOverflow && s !== n.snapGrid && n.checkOverflow();
}
a(jl, "onResize");
function Cp(n) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && n.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (n.stopPropagation(), n.stopImmediatePropagation())));
}
a(Cp, "onClick");
function kp() {
  const n = this,
    { wrapperEl: e, rtlTranslate: t, enabled: i } = n;
  if (!i) return;
  (n.previousTranslate = n.translate),
    n.isHorizontal()
      ? (n.translate = -e.scrollLeft)
      : (n.translate = -e.scrollTop),
    n.translate === 0 && (n.translate = 0),
    n.updateActiveIndex(),
    n.updateSlidesClasses();
  let r;
  const s = n.maxTranslate() - n.minTranslate();
  s === 0 ? (r = 0) : (r = (n.translate - n.minTranslate()) / s),
    r !== n.progress && n.updateProgress(t ? -n.translate : n.translate),
    n.emit("setTranslate", n.translate, !1);
}
a(kp, "onScroll");
let Ul = !1;
function Pp() {}
a(Pp, "dummyEventListener");
const gc = a((n, e) => {
  const t = wt(),
    {
      params: i,
      touchEvents: r,
      el: s,
      wrapperEl: o,
      device: l,
      support: u,
    } = n,
    c = !!i.nested,
    d = e === "on" ? "addEventListener" : "removeEventListener",
    f = e;
  if (!u.touch)
    s[d](r.start, n.onTouchStart, !1),
      t[d](r.move, n.onTouchMove, c),
      t[d](r.end, n.onTouchEnd, !1);
  else {
    const p =
      r.start === "touchstart" && u.passiveListener && i.passiveListeners
        ? { passive: !0, capture: !1 }
        : !1;
    s[d](r.start, n.onTouchStart, p),
      s[d](
        r.move,
        n.onTouchMove,
        u.passiveListener ? { passive: !1, capture: c } : c
      ),
      s[d](r.end, n.onTouchEnd, p),
      r.cancel && s[d](r.cancel, n.onTouchEnd, p);
  }
  (i.preventClicks || i.preventClicksPropagation) &&
    s[d]("click", n.onClick, !0),
    i.cssMode && o[d]("scroll", n.onScroll),
    i.updateOnWindowResize
      ? n[f](
          l.ios || l.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          jl,
          !0
        )
      : n[f]("observerUpdate", jl, !0);
}, "events");
function Mp() {
  const n = this,
    e = wt(),
    { params: t, support: i } = n;
  (n.onTouchStart = Sp.bind(n)),
    (n.onTouchMove = Tp.bind(n)),
    (n.onTouchEnd = Ep.bind(n)),
    t.cssMode && (n.onScroll = kp.bind(n)),
    (n.onClick = Cp.bind(n)),
    i.touch && !Ul && (e.addEventListener("touchstart", Pp), (Ul = !0)),
    gc(n, "on");
}
a(Mp, "attachEvents");
function Ap() {
  gc(this, "off");
}
a(Ap, "detachEvents");
const Op = { attachEvents: Mp, detachEvents: Ap },
  Kl = a((n, e) => n.grid && e.grid && e.grid.rows > 1, "isGridEnabled");
function Lp() {
  const n = this,
    {
      activeIndex: e,
      initialized: t,
      loopedSlides: i = 0,
      params: r,
      $el: s,
    } = n,
    o = r.breakpoints;
  if (!o || (o && Object.keys(o).length === 0)) return;
  const l = n.getBreakpoint(o, n.params.breakpointsBase, n.el);
  if (!l || n.currentBreakpoint === l) return;
  const c = (l in o ? o[l] : void 0) || n.originalParams,
    d = Kl(n, r),
    f = Kl(n, c),
    p = r.enabled;
  d && !f
    ? (s.removeClass(
        `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
      ),
      n.emitContainerClasses())
    : !d &&
      f &&
      (s.addClass(`${r.containerModifierClass}grid`),
      ((c.grid.fill && c.grid.fill === "column") ||
        (!c.grid.fill && r.grid.fill === "column")) &&
        s.addClass(`${r.containerModifierClass}grid-column`),
      n.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((w) => {
      const b = r[w] && r[w].enabled,
        y = c[w] && c[w].enabled;
      b && !y && n[w].disable(), !b && y && n[w].enable();
    });
  const h = c.direction && c.direction !== r.direction,
    m = r.loop && (c.slidesPerView !== r.slidesPerView || h);
  h && t && n.changeDirection(), Ot(n.params, c);
  const g = n.params.enabled;
  Object.assign(n, {
    allowTouchMove: n.params.allowTouchMove,
    allowSlideNext: n.params.allowSlideNext,
    allowSlidePrev: n.params.allowSlidePrev,
  }),
    p && !g ? n.disable() : !p && g && n.enable(),
    (n.currentBreakpoint = l),
    n.emit("_beforeBreakpoint", c),
    m &&
      t &&
      (n.loopDestroy(),
      n.loopCreate(),
      n.updateSlides(),
      n.slideTo(e - i + n.loopedSlides, 0, !1)),
    n.emit("breakpoint", c);
}
a(Lp, "setBreakpoint");
function Dp(n, e = "window", t) {
  if (!n || (e === "container" && !t)) return;
  let i = !1;
  const r = $e(),
    s = e === "window" ? r.innerHeight : t.clientHeight,
    o = Object.keys(n).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const u = parseFloat(l.substr(1));
        return { value: s * u, point: l };
      }
      return { value: l, point: l };
    });
  o.sort((l, u) => parseInt(l.value, 10) - parseInt(u.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const { point: u, value: c } = o[l];
    e === "window"
      ? r.matchMedia(`(min-width: ${c}px)`).matches && (i = u)
      : c <= t.clientWidth && (i = u);
  }
  return i || "max";
}
a(Dp, "getBreakpoint");
const Ip = { setBreakpoint: Lp, getBreakpoint: Dp };
function zp(n, e) {
  const t = [];
  return (
    n.forEach((i) => {
      typeof i == "object"
        ? Object.keys(i).forEach((r) => {
            i[r] && t.push(e + r);
          })
        : typeof i == "string" && t.push(e + i);
    }),
    t
  );
}
a(zp, "prepareClasses");
function Np() {
  const n = this,
    { classNames: e, params: t, rtl: i, $el: r, device: s, support: o } = n,
    l = zp(
      [
        "initialized",
        t.direction,
        { "pointer-events": !o.touch },
        { "free-mode": n.params.freeMode && t.freeMode.enabled },
        { autoheight: t.autoHeight },
        { rtl: i },
        { grid: t.grid && t.grid.rows > 1 },
        {
          "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column",
        },
        { android: s.android },
        { ios: s.ios },
        { "css-mode": t.cssMode },
        { centered: t.cssMode && t.centeredSlides },
        { "watch-progress": t.watchSlidesProgress },
      ],
      t.containerModifierClass
    );
  e.push(...l), r.addClass([...e].join(" ")), n.emitContainerClasses();
}
a(Np, "addClasses");
function Rp() {
  const n = this,
    { $el: e, classNames: t } = n;
  e.removeClass(t.join(" ")), n.emitContainerClasses();
}
a(Rp, "removeClasses");
const $p = { addClasses: Np, removeClasses: Rp };
function Fp(n, e, t, i, r, s) {
  const o = $e();
  let l;
  function u() {
    s && s();
  }
  a(u, "onReady"),
    !F(n).parent("picture")[0] && (!n.complete || !r) && e
      ? ((l = new o.Image()),
        (l.onload = u),
        (l.onerror = u),
        i && (l.sizes = i),
        t && (l.srcset = t),
        e && (l.src = e))
      : u();
}
a(Fp, "loadImage");
function Bp() {
  const n = this;
  n.imagesToLoad = n.$el.find("img");
  function e() {
    typeof n > "u" ||
      n === null ||
      !n ||
      n.destroyed ||
      (n.imagesLoaded !== void 0 && (n.imagesLoaded += 1),
      n.imagesLoaded === n.imagesToLoad.length &&
        (n.params.updateOnImagesReady && n.update(), n.emit("imagesReady")));
  }
  a(e, "onReady");
  for (let t = 0; t < n.imagesToLoad.length; t += 1) {
    const i = n.imagesToLoad[t];
    n.loadImage(
      i,
      i.currentSrc || i.getAttribute("src"),
      i.srcset || i.getAttribute("srcset"),
      i.sizes || i.getAttribute("sizes"),
      !0,
      e
    );
  }
}
a(Bp, "preloadImages");
const Vp = { loadImage: Fp, preloadImages: Bp };
function qp() {
  const n = this,
    { isLocked: e, params: t } = n,
    { slidesOffsetBefore: i } = t;
  if (i) {
    const r = n.slides.length - 1,
      s = n.slidesGrid[r] + n.slidesSizesGrid[r] + i * 2;
    n.isLocked = n.size > s;
  } else n.isLocked = n.snapGrid.length === 1;
  t.allowSlideNext === !0 && (n.allowSlideNext = !n.isLocked),
    t.allowSlidePrev === !0 && (n.allowSlidePrev = !n.isLocked),
    e && e !== n.isLocked && (n.isEnd = !1),
    e !== n.isLocked && n.emit(n.isLocked ? "lock" : "unlock");
}
a(qp, "checkOverflow");
const Wp = { checkOverflow: qp },
  Zl = {
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
    focusableElements: "input, select, option, textarea, button, video, label",
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
function Hp(n, e) {
  return a(function (i = {}) {
    const r = Object.keys(i)[0],
      s = i[r];
    if (typeof s != "object" || s === null) {
      Ot(e, i);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
        n[r] === !0 &&
        (n[r] = { auto: !0 }),
      !(r in n && "enabled" in s))
    ) {
      Ot(e, i);
      return;
    }
    n[r] === !0 && (n[r] = { enabled: !0 }),
      typeof n[r] == "object" && !("enabled" in n[r]) && (n[r].enabled = !0),
      n[r] || (n[r] = { enabled: !1 }),
      Ot(e, i);
  }, "extendParams");
}
a(Hp, "moduleExtendParams");
const No = {
    eventsEmitter: Bh,
    update: Kh,
    translate: ip,
    transition: op,
    slide: pp,
    loop: yp,
    grabCursor: bp,
    events: Op,
    breakpoints: Ip,
    checkOverflow: Wp,
    classes: $p,
    images: Vp,
  },
  Ro = {},
  ri = class ri {
    constructor(...e) {
      let t, i;
      if (
        (e.length === 1 &&
        e[0].constructor &&
        Object.prototype.toString.call(e[0]).slice(8, -1) === "Object"
          ? (i = e[0])
          : ([t, i] = e),
        i || (i = {}),
        (i = Ot({}, i)),
        t && !i.el && (i.el = t),
        i.el && F(i.el).length > 1)
      ) {
        const l = [];
        return (
          F(i.el).each((u) => {
            const c = Ot({}, i, { el: u });
            l.push(new ri(c));
          }),
          l
        );
      }
      const r = this;
      (r.__swiper__ = !0),
        (r.support = pc()),
        (r.device = zh({ userAgent: i.userAgent })),
        (r.browser = Rh()),
        (r.eventsListeners = {}),
        (r.eventsAnyListeners = []),
        (r.modules = [...r.__modules__]),
        i.modules && Array.isArray(i.modules) && r.modules.push(...i.modules);
      const s = {};
      r.modules.forEach((l) => {
        l({
          swiper: r,
          extendParams: Hp(i, s),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r),
        });
      });
      const o = Ot({}, Zl, s);
      return (
        (r.params = Ot({}, o, Ro, i)),
        (r.originalParams = Ot({}, r.params)),
        (r.passedParams = Ot({}, i)),
        r.params &&
          r.params.on &&
          Object.keys(r.params.on).forEach((l) => {
            r.on(l, r.params.on[l]);
          }),
        r.params && r.params.onAny && r.onAny(r.params.onAny),
        (r.$ = F),
        Object.assign(r, {
          enabled: r.params.enabled,
          el: t,
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
          touchEvents: a(function () {
            const u = ["touchstart", "touchmove", "touchend", "touchcancel"],
              c = ["pointerdown", "pointermove", "pointerup"];
            return (
              (r.touchEventsTouch = {
                start: u[0],
                move: u[1],
                end: u[2],
                cancel: u[3],
              }),
              (r.touchEventsDesktop = { start: c[0], move: c[1], end: c[2] }),
              r.support.touch || !r.params.simulateTouch
                ? r.touchEventsTouch
                : r.touchEventsDesktop
            );
          }, "touchEvents")(),
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
            lastClickTime: di(),
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
    setProgress(e, t) {
      const i = this;
      e = Math.min(Math.max(e, 0), 1);
      const r = i.minTranslate(),
        o = (i.maxTranslate() - r) * e + r;
      i.translateTo(o, typeof t > "u" ? 0 : t),
        i.updateActiveIndex(),
        i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (i) =>
            i.indexOf("swiper") === 0 ||
            i.indexOf(e.params.containerModifierClass) === 0
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (i) =>
                i.indexOf("swiper-slide") === 0 ||
                i.indexOf(t.params.slideClass) === 0
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each((i) => {
        const r = e.getSlideClasses(i);
        t.push({ slideEl: i, classNames: r }), e.emit("_slideClass", i, r);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e = "current", t = !1) {
      const i = this,
        {
          params: r,
          slides: s,
          slidesGrid: o,
          slidesSizesGrid: l,
          size: u,
          activeIndex: c,
        } = i;
      let d = 1;
      if (r.centeredSlides) {
        let f = s[c].swiperSlideSize,
          p;
        for (let h = c + 1; h < s.length; h += 1)
          s[h] &&
            !p &&
            ((f += s[h].swiperSlideSize), (d += 1), f > u && (p = !0));
        for (let h = c - 1; h >= 0; h -= 1)
          s[h] &&
            !p &&
            ((f += s[h].swiperSlideSize), (d += 1), f > u && (p = !0));
      } else if (e === "current")
        for (let f = c + 1; f < s.length; f += 1)
          (t ? o[f] + l[f] - o[c] < u : o[f] - o[c] < u) && (d += 1);
      else for (let f = c - 1; f >= 0; f -= 1) o[c] - o[f] < u && (d += 1);
      return d;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: i } = e;
      i.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
      function r() {
        const o = e.rtlTranslate ? e.translate * -1 : e.translate,
          l = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
        e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      a(r, "setTranslate");
      let s;
      e.params.freeMode && e.params.freeMode.enabled
        ? (r(), e.params.autoHeight && e.updateAutoHeight())
        : ((e.params.slidesPerView === "auto" || e.params.slidesPerView > 1) &&
          e.isEnd &&
          !e.params.centeredSlides
            ? (s = e.slideTo(e.slides.length - 1, 0, !1, !0))
            : (s = e.slideTo(e.activeIndex, 0, !1, !0)),
          s || r()),
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t = !0) {
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
          t && i.update()),
        i
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && e === "rtl") ||
        (!t.rtl && e === "ltr") ||
        ((t.rtl = e === "rtl"),
        (t.rtlTranslate = t.params.direction === "horizontal" && t.rtl),
        t.rtl
          ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const i = F(e || t.params.el);
      if (((e = i[0]), !e)) return !1;
      e.swiper = t;
      const r = a(
        () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`,
        "getWrapperSelector"
      );
      let o = a(() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const l = F(e.shadowRoot.querySelector(r()));
          return (l.children = (u) => i.children(u)), l;
        }
        return i.children ? i.children(r()) : F(i).children(r());
      }, "getWrapper")();
      if (o.length === 0 && t.params.createElements) {
        const u = wt().createElement("div");
        (o = F(u)),
          (u.className = t.params.wrapperClass),
          i.append(u),
          i.children(`.${t.params.slideClass}`).each((c) => {
            o.append(c);
          });
      }
      return (
        Object.assign(t, {
          $el: i,
          el: e,
          $wrapperEl: o,
          wrapperEl: o[0],
          mounted: !0,
          rtl: e.dir.toLowerCase() === "rtl" || i.css("direction") === "rtl",
          rtlTranslate:
            t.params.direction === "horizontal" &&
            (e.dir.toLowerCase() === "rtl" || i.css("direction") === "rtl"),
          wrongRTL: o.css("display") === "-webkit-box",
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      return (
        t.initialized ||
          t.mount(e) === !1 ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop
            ? t.slideTo(
                t.params.initialSlide + t.loopedSlides,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e = !0, t = !0) {
      const i = this,
        { params: r, $el: s, $wrapperEl: o, slides: l } = i;
      return (
        typeof i.params > "u" ||
          i.destroyed ||
          (i.emit("beforeDestroy"),
          (i.initialized = !1),
          i.detachEvents(),
          r.loop && i.loopDestroy(),
          t &&
            (i.removeClasses(),
            s.removeAttr("style"),
            o.removeAttr("style"),
            l &&
              l.length &&
              l
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
          Object.keys(i.eventsListeners).forEach((u) => {
            i.off(u);
          }),
          e !== !1 && ((i.$el[0].swiper = null), Mh(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      Ot(Ro, e);
    }
    static get extendedDefaults() {
      return Ro;
    }
    static get defaults() {
      return Zl;
    }
    static installModule(e) {
      ri.prototype.__modules__ || (ri.prototype.__modules__ = []);
      const t = ri.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((t) => ri.installModule(t)), ri)
        : (ri.installModule(e), ri);
    }
  };
a(ri, "Swiper");
let Pr = ri;
Object.keys(No).forEach((n) => {
  Object.keys(No[n]).forEach((e) => {
    Pr.prototype[e] = No[n][e];
  });
});
Pr.use([$h, Fh]);
function vc({ swiper: n, extendParams: e, on: t, emit: i }) {
  const r = wt(),
    s = $e();
  (n.keyboard = { enabled: !1 }),
    e({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } });
  function o(c) {
    if (!n.enabled) return;
    const { rtlTranslate: d } = n;
    let f = c;
    f.originalEvent && (f = f.originalEvent);
    const p = f.keyCode || f.charCode,
      h = n.params.keyboard.pageUpDown,
      m = h && p === 33,
      g = h && p === 34,
      w = p === 37,
      b = p === 39,
      y = p === 38,
      _ = p === 40;
    if (
      (!n.allowSlideNext &&
        ((n.isHorizontal() && b) || (n.isVertical() && _) || g)) ||
      (!n.allowSlidePrev &&
        ((n.isHorizontal() && w) || (n.isVertical() && y) || m))
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
      if (n.params.keyboard.onlyInViewport && (m || g || w || b || y || _)) {
        let v = !1;
        if (
          n.$el.parents(`.${n.params.slideClass}`).length > 0 &&
          n.$el.parents(`.${n.params.slideActiveClass}`).length === 0
        )
          return;
        const x = n.$el,
          E = x[0].clientWidth,
          C = x[0].clientHeight,
          S = s.innerWidth,
          A = s.innerHeight,
          k = n.$el.offset();
        d && (k.left -= n.$el[0].scrollLeft);
        const L = [
          [k.left, k.top],
          [k.left + E, k.top],
          [k.left, k.top + C],
          [k.left + E, k.top + C],
        ];
        for (let T = 0; T < L.length; T += 1) {
          const M = L[T];
          if (M[0] >= 0 && M[0] <= S && M[1] >= 0 && M[1] <= A) {
            if (M[0] === 0 && M[1] === 0) continue;
            v = !0;
          }
        }
        if (!v) return;
      }
      n.isHorizontal()
        ? ((m || g || w || b) &&
            (f.preventDefault ? f.preventDefault() : (f.returnValue = !1)),
          (((g || b) && !d) || ((m || w) && d)) && n.slideNext(),
          (((m || w) && !d) || ((g || b) && d)) && n.slidePrev())
        : ((m || g || y || _) &&
            (f.preventDefault ? f.preventDefault() : (f.returnValue = !1)),
          (g || _) && n.slideNext(),
          (m || y) && n.slidePrev()),
        i("keyPress", p);
    }
  }
  a(o, "handle");
  function l() {
    n.keyboard.enabled || (F(r).on("keydown", o), (n.keyboard.enabled = !0));
  }
  a(l, "enable");
  function u() {
    n.keyboard.enabled && (F(r).off("keydown", o), (n.keyboard.enabled = !1));
  }
  a(u, "disable"),
    t("init", () => {
      n.params.keyboard.enabled && l();
    }),
    t("destroy", () => {
      n.keyboard.enabled && u();
    }),
    Object.assign(n.keyboard, { enable: l, disable: u });
}
a(vc, "Keyboard");
function yc({ swiper: n, extendParams: e, on: t, emit: i }) {
  const r = $e();
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
    (n.mousewheel = { enabled: !1 });
  let s,
    o = di(),
    l;
  const u = [];
  function c(y) {
    let E = 0,
      C = 0,
      S = 0,
      A = 0;
    return (
      "detail" in y && (C = y.detail),
      "wheelDelta" in y && (C = -y.wheelDelta / 120),
      "wheelDeltaY" in y && (C = -y.wheelDeltaY / 120),
      "wheelDeltaX" in y && (E = -y.wheelDeltaX / 120),
      "axis" in y && y.axis === y.HORIZONTAL_AXIS && ((E = C), (C = 0)),
      (S = E * 10),
      (A = C * 10),
      "deltaY" in y && (A = y.deltaY),
      "deltaX" in y && (S = y.deltaX),
      y.shiftKey && !S && ((S = A), (A = 0)),
      (S || A) &&
        y.deltaMode &&
        (y.deltaMode === 1 ? ((S *= 40), (A *= 40)) : ((S *= 800), (A *= 800))),
      S && !E && (E = S < 1 ? -1 : 1),
      A && !C && (C = A < 1 ? -1 : 1),
      { spinX: E, spinY: C, pixelX: S, pixelY: A }
    );
  }
  a(c, "normalize");
  function d() {
    n.enabled && (n.mouseEntered = !0);
  }
  a(d, "handleMouseEnter");
  function f() {
    n.enabled && (n.mouseEntered = !1);
  }
  a(f, "handleMouseLeave");
  function p(y) {
    return (n.params.mousewheel.thresholdDelta &&
      y.delta < n.params.mousewheel.thresholdDelta) ||
      (n.params.mousewheel.thresholdTime &&
        di() - o < n.params.mousewheel.thresholdTime)
      ? !1
      : y.delta >= 6 && di() - o < 60
      ? !0
      : (y.direction < 0
          ? (!n.isEnd || n.params.loop) &&
            !n.animating &&
            (n.slideNext(), i("scroll", y.raw))
          : (!n.isBeginning || n.params.loop) &&
            !n.animating &&
            (n.slidePrev(), i("scroll", y.raw)),
        (o = new r.Date().getTime()),
        !1);
  }
  a(p, "animateSlider");
  function h(y) {
    const _ = n.params.mousewheel;
    if (y.direction < 0) {
      if (n.isEnd && !n.params.loop && _.releaseOnEdges) return !0;
    } else if (n.isBeginning && !n.params.loop && _.releaseOnEdges) return !0;
    return !1;
  }
  a(h, "releaseScroll");
  function m(y) {
    let _ = y,
      v = !0;
    if (!n.enabled) return;
    const x = n.params.mousewheel;
    n.params.cssMode && _.preventDefault();
    let E = n.$el;
    if (
      (n.params.mousewheel.eventsTarget !== "container" &&
        (E = F(n.params.mousewheel.eventsTarget)),
      !n.mouseEntered && !E[0].contains(_.target) && !x.releaseOnEdges)
    )
      return !0;
    _.originalEvent && (_ = _.originalEvent);
    let C = 0;
    const S = n.rtlTranslate ? -1 : 1,
      A = c(_);
    if (x.forceToAxis)
      if (n.isHorizontal())
        if (Math.abs(A.pixelX) > Math.abs(A.pixelY)) C = -A.pixelX * S;
        else return !0;
      else if (Math.abs(A.pixelY) > Math.abs(A.pixelX)) C = -A.pixelY;
      else return !0;
    else
      C = Math.abs(A.pixelX) > Math.abs(A.pixelY) ? -A.pixelX * S : -A.pixelY;
    if (C === 0) return !0;
    x.invert && (C = -C);
    let k = n.getTranslate() + C * x.sensitivity;
    if (
      (k >= n.minTranslate() && (k = n.minTranslate()),
      k <= n.maxTranslate() && (k = n.maxTranslate()),
      (v = n.params.loop
        ? !0
        : !(k === n.minTranslate() || k === n.maxTranslate())),
      v && n.params.nested && _.stopPropagation(),
      !n.params.freeMode || !n.params.freeMode.enabled)
    ) {
      const L = {
        time: di(),
        delta: Math.abs(C),
        direction: Math.sign(C),
        raw: y,
      };
      u.length >= 2 && u.shift();
      const T = u.length ? u[u.length - 1] : void 0;
      if (
        (u.push(L),
        T
          ? (L.direction !== T.direction ||
              L.delta > T.delta ||
              L.time > T.time + 150) &&
            p(L)
          : p(L),
        h(L))
      )
        return !0;
    } else {
      const L = { time: di(), delta: Math.abs(C), direction: Math.sign(C) },
        T =
          l &&
          L.time < l.time + 500 &&
          L.delta <= l.delta &&
          L.direction === l.direction;
      if (!T) {
        (l = void 0), n.params.loop && n.loopFix();
        let M = n.getTranslate() + C * x.sensitivity;
        const O = n.isBeginning,
          I = n.isEnd;
        if (
          (M >= n.minTranslate() && (M = n.minTranslate()),
          M <= n.maxTranslate() && (M = n.maxTranslate()),
          n.setTransition(0),
          n.setTranslate(M),
          n.updateProgress(),
          n.updateActiveIndex(),
          n.updateSlidesClasses(),
          ((!O && n.isBeginning) || (!I && n.isEnd)) && n.updateSlidesClasses(),
          n.params.freeMode.sticky)
        ) {
          clearTimeout(s), (s = void 0), u.length >= 15 && u.shift();
          const N = u.length ? u[u.length - 1] : void 0,
            R = u[0];
          if (
            (u.push(L), N && (L.delta > N.delta || L.direction !== N.direction))
          )
            u.splice(0);
          else if (
            u.length >= 15 &&
            L.time - R.time < 500 &&
            R.delta - L.delta >= 1 &&
            L.delta <= 6
          ) {
            const B = C > 0 ? 0.8 : 0.2;
            (l = L),
              u.splice(0),
              (s = ss(() => {
                n.slideToClosest(n.params.speed, !0, void 0, B);
              }, 0));
          }
          s ||
            (s = ss(() => {
              (l = L),
                u.splice(0),
                n.slideToClosest(n.params.speed, !0, void 0, 0.5);
            }, 500));
        }
        if (
          (T || i("scroll", _),
          n.params.autoplay &&
            n.params.autoplayDisableOnInteraction &&
            n.autoplay.stop(),
          M === n.minTranslate() || M === n.maxTranslate())
        )
          return !0;
      }
    }
    return _.preventDefault ? _.preventDefault() : (_.returnValue = !1), !1;
  }
  a(m, "handle");
  function g(y) {
    let _ = n.$el;
    n.params.mousewheel.eventsTarget !== "container" &&
      (_ = F(n.params.mousewheel.eventsTarget)),
      _[y]("mouseenter", d),
      _[y]("mouseleave", f),
      _[y]("wheel", m);
  }
  a(g, "events");
  function w() {
    return n.params.cssMode
      ? (n.wrapperEl.removeEventListener("wheel", m), !0)
      : n.mousewheel.enabled
      ? !1
      : (g("on"), (n.mousewheel.enabled = !0), !0);
  }
  a(w, "enable");
  function b() {
    return n.params.cssMode
      ? (n.wrapperEl.addEventListener(event, m), !0)
      : n.mousewheel.enabled
      ? (g("off"), (n.mousewheel.enabled = !1), !0)
      : !1;
  }
  a(b, "disable"),
    t("init", () => {
      !n.params.mousewheel.enabled && n.params.cssMode && b(),
        n.params.mousewheel.enabled && w();
    }),
    t("destroy", () => {
      n.params.cssMode && w(), n.mousewheel.enabled && b();
    }),
    Object.assign(n.mousewheel, { enable: w, disable: b });
}
a(yc, "Mousewheel");
function Gp(n, e, t, i) {
  const r = wt();
  return (
    n.params.createElements &&
      Object.keys(i).forEach((s) => {
        if (!t[s] && t.auto === !0) {
          let o = n.$el.children(`.${i[s]}`)[0];
          o ||
            ((o = r.createElement("div")),
            (o.className = i[s]),
            n.$el.append(o)),
            (t[s] = o),
            (e[s] = o);
        }
      }),
    t
  );
}
a(Gp, "createElementIfNotDefined");
function _c({ swiper: n, extendParams: e, on: t, emit: i }) {
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
    (n.navigation = {
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
        n.params.uniqueNavElements &&
          typeof h == "string" &&
          m.length > 1 &&
          n.$el.find(h).length === 1 &&
          (m = n.$el.find(h))),
      m
    );
  }
  a(r, "getEl");
  function s(h, m) {
    const g = n.params.navigation;
    h &&
      h.length > 0 &&
      (h[m ? "addClass" : "removeClass"](g.disabledClass),
      h[0] && h[0].tagName === "BUTTON" && (h[0].disabled = m),
      n.params.watchOverflow &&
        n.enabled &&
        h[n.isLocked ? "addClass" : "removeClass"](g.lockClass));
  }
  a(s, "toggleEl");
  function o() {
    if (n.params.loop) return;
    const { $nextEl: h, $prevEl: m } = n.navigation;
    s(m, n.isBeginning && !n.params.rewind), s(h, n.isEnd && !n.params.rewind);
  }
  a(o, "update");
  function l(h) {
    h.preventDefault(),
      !(n.isBeginning && !n.params.loop && !n.params.rewind) &&
        (n.slidePrev(), i("navigationPrev"));
  }
  a(l, "onPrevClick");
  function u(h) {
    h.preventDefault(),
      !(n.isEnd && !n.params.loop && !n.params.rewind) &&
        (n.slideNext(), i("navigationNext"));
  }
  a(u, "onNextClick");
  function c() {
    const h = n.params.navigation;
    if (
      ((n.params.navigation = Gp(
        n,
        n.originalParams.navigation,
        n.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(h.nextEl || h.prevEl))
    )
      return;
    const m = r(h.nextEl),
      g = r(h.prevEl);
    m && m.length > 0 && m.on("click", u),
      g && g.length > 0 && g.on("click", l),
      Object.assign(n.navigation, {
        $nextEl: m,
        nextEl: m && m[0],
        $prevEl: g,
        prevEl: g && g[0],
      }),
      n.enabled || (m && m.addClass(h.lockClass), g && g.addClass(h.lockClass));
  }
  a(c, "init");
  function d() {
    const { $nextEl: h, $prevEl: m } = n.navigation;
    h &&
      h.length &&
      (h.off("click", u), h.removeClass(n.params.navigation.disabledClass)),
      m &&
        m.length &&
        (m.off("click", l), m.removeClass(n.params.navigation.disabledClass));
  }
  a(d, "destroy"),
    t("init", () => {
      n.params.navigation.enabled === !1 ? p() : (c(), o());
    }),
    t("toEdge fromEdge lock unlock", () => {
      o();
    }),
    t("destroy", () => {
      d();
    }),
    t("enable disable", () => {
      const { $nextEl: h, $prevEl: m } = n.navigation;
      h &&
        h[n.enabled ? "removeClass" : "addClass"](
          n.params.navigation.lockClass
        ),
        m &&
          m[n.enabled ? "removeClass" : "addClass"](
            n.params.navigation.lockClass
          );
    }),
    t("click", (h, m) => {
      const { $nextEl: g, $prevEl: w } = n.navigation,
        b = m.target;
      if (n.params.navigation.hideOnClick && !F(b).is(w) && !F(b).is(g)) {
        if (
          n.pagination &&
          n.params.pagination &&
          n.params.pagination.clickable &&
          (n.pagination.el === b || n.pagination.el.contains(b))
        )
          return;
        let y;
        g
          ? (y = g.hasClass(n.params.navigation.hiddenClass))
          : w && (y = w.hasClass(n.params.navigation.hiddenClass)),
          i(y === !0 ? "navigationShow" : "navigationHide"),
          g && g.toggleClass(n.params.navigation.hiddenClass),
          w && w.toggleClass(n.params.navigation.hiddenClass);
      }
    });
  const f = a(() => {
      n.$el.removeClass(n.params.navigation.navigationDisabledClass), c(), o();
    }, "enable"),
    p = a(() => {
      n.$el.addClass(n.params.navigation.navigationDisabledClass), d();
    }, "disable");
  Object.assign(n.navigation, {
    enable: f,
    disable: p,
    update: o,
    init: c,
    destroy: d,
  });
}
a(_c, "Navigation");
function wc({ swiper: n, extendParams: e, on: t }) {
  e({ parallax: { enabled: !1 } });
  const i = a((o, l) => {
      const { rtl: u } = n,
        c = F(o),
        d = u ? -1 : 1,
        f = c.attr("data-swiper-parallax") || "0";
      let p = c.attr("data-swiper-parallax-x"),
        h = c.attr("data-swiper-parallax-y");
      const m = c.attr("data-swiper-parallax-scale"),
        g = c.attr("data-swiper-parallax-opacity");
      if (
        (p || h
          ? ((p = p || "0"), (h = h || "0"))
          : n.isHorizontal()
          ? ((p = f), (h = "0"))
          : ((h = f), (p = "0")),
        p.indexOf("%") >= 0
          ? (p = `${parseInt(p, 10) * l * d}%`)
          : (p = `${p * l * d}px`),
        h.indexOf("%") >= 0
          ? (h = `${parseInt(h, 10) * l}%`)
          : (h = `${h * l}px`),
        typeof g < "u" && g !== null)
      ) {
        const w = g - (g - 1) * (1 - Math.abs(l));
        c[0].style.opacity = w;
      }
      if (typeof m > "u" || m === null)
        c.transform(`translate3d(${p}, ${h}, 0px)`);
      else {
        const w = m - (m - 1) * (1 - Math.abs(l));
        c.transform(`translate3d(${p}, ${h}, 0px) scale(${w})`);
      }
    }, "setTransform"),
    r = a(() => {
      const { $el: o, slides: l, progress: u, snapGrid: c } = n;
      o
        .children(
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
        )
        .each((d) => {
          i(d, u);
        }),
        l.each((d, f) => {
          let p = d.progress;
          n.params.slidesPerGroup > 1 &&
            n.params.slidesPerView !== "auto" &&
            (p += Math.ceil(f / 2) - u * (c.length - 1)),
            (p = Math.min(Math.max(p, -1), 1)),
            F(d)
              .find(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              )
              .each((h) => {
                i(h, p);
              });
        });
    }, "setTranslate"),
    s = a((o = n.params.speed) => {
      const { $el: l } = n;
      l.find(
        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
      ).each((u) => {
        const c = F(u);
        let d = parseInt(c.attr("data-swiper-parallax-duration"), 10) || o;
        o === 0 && (d = 0), c.transition(d);
      });
    }, "setTransition");
  t("beforeInit", () => {
    n.params.parallax.enabled &&
      ((n.params.watchSlidesProgress = !0),
      (n.originalParams.watchSlidesProgress = !0));
  }),
    t("init", () => {
      n.params.parallax.enabled && r();
    }),
    t("setTranslate", () => {
      n.params.parallax.enabled && r();
    }),
    t("setTransition", (o, l) => {
      n.params.parallax.enabled && s(l);
    });
}
a(wc, "Parallax");
function Yp(n) {
  const {
    effect: e,
    swiper: t,
    on: i,
    setTranslate: r,
    setTransition: s,
    overwriteParams: o,
    perspective: l,
    recreateShadows: u,
    getEffectParams: c,
  } = n;
  i("beforeInit", () => {
    if (t.params.effect !== e) return;
    t.classNames.push(`${t.params.containerModifierClass}${e}`),
      l && l() && t.classNames.push(`${t.params.containerModifierClass}3d`);
    const f = o ? o() : {};
    Object.assign(t.params, f), Object.assign(t.originalParams, f);
  }),
    i("setTranslate", () => {
      t.params.effect === e && r();
    }),
    i("setTransition", (f, p) => {
      t.params.effect === e && s(p);
    }),
    i("transitionEnd", () => {
      if (t.params.effect === e && u) {
        if (!c || !c().slideShadows) return;
        t.slides.each((f) => {
          t.$(f)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .remove();
        }),
          u();
      }
    });
  let d;
  i("virtualUpdate", () => {
    t.params.effect === e &&
      (t.slides.length || (d = !0),
      requestAnimationFrame(() => {
        d && t.slides && t.slides.length && (r(), (d = !1));
      }));
  });
}
a(Yp, "effectInit");
function Xp(n, e) {
  return n.transformEl
    ? e
        .find(n.transformEl)
        .css({
          "backface-visibility": "hidden",
          "-webkit-backface-visibility": "hidden",
        })
    : e;
}
a(Xp, "effectTarget");
function Ql(n, e, t) {
  const i = `swiper-slide-shadow${t ? `-${t}` : ""}`,
    r = n.transformEl ? e.find(n.transformEl) : e;
  let s = r.children(`.${i}`);
  return (
    s.length ||
      ((s = F(`<div class="swiper-slide-shadow${t ? `-${t}` : ""}"></div>`)),
      r.append(s)),
    s
  );
}
a(Ql, "createShadow");
function jp({ swiper: n, extendParams: e, on: t }) {
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
    Yp({
      effect: "coverflow",
      swiper: n,
      on: t,
      setTranslate: a(() => {
        const { width: s, height: o, slides: l, slidesSizesGrid: u } = n,
          c = n.params.coverflowEffect,
          d = n.isHorizontal(),
          f = n.translate,
          p = d ? -f + s / 2 : -f + o / 2,
          h = d ? c.rotate : -c.rotate,
          m = c.depth;
        for (let g = 0, w = l.length; g < w; g += 1) {
          const b = l.eq(g),
            y = u[g],
            _ = b[0].swiperSlideOffset,
            v = (p - _ - y / 2) / y,
            x =
              typeof c.modifier == "function" ? c.modifier(v) : v * c.modifier;
          let E = d ? h * x : 0,
            C = d ? 0 : h * x,
            S = -m * Math.abs(x),
            A = c.stretch;
          typeof A == "string" &&
            A.indexOf("%") !== -1 &&
            (A = (parseFloat(c.stretch) / 100) * y);
          let k = d ? 0 : A * x,
            L = d ? A * x : 0,
            T = 1 - (1 - c.scale) * Math.abs(x);
          Math.abs(L) < 0.001 && (L = 0),
            Math.abs(k) < 0.001 && (k = 0),
            Math.abs(S) < 0.001 && (S = 0),
            Math.abs(E) < 0.001 && (E = 0),
            Math.abs(C) < 0.001 && (C = 0),
            Math.abs(T) < 0.001 && (T = 0);
          const M = `translate3d(${L}px,${k}px,${S}px)  rotateX(${C}deg) rotateY(${E}deg) scale(${T})`;
          if (
            (Xp(c, b).transform(M),
            (b[0].style.zIndex = -Math.abs(Math.round(x)) + 1),
            c.slideShadows)
          ) {
            let I = d
                ? b.find(".swiper-slide-shadow-left")
                : b.find(".swiper-slide-shadow-top"),
              N = d
                ? b.find(".swiper-slide-shadow-right")
                : b.find(".swiper-slide-shadow-bottom");
            I.length === 0 && (I = Ql(c, b, d ? "left" : "top")),
              N.length === 0 && (N = Ql(c, b, d ? "right" : "bottom")),
              I.length && (I[0].style.opacity = x > 0 ? x : 0),
              N.length && (N[0].style.opacity = -x > 0 ? -x : 0);
          }
        }
      }, "setTranslate"),
      setTransition: a((s) => {
        const { transformEl: o } = n.params.coverflowEffect;
        (o ? n.slides.find(o) : n.slides)
          .transition(s)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(s);
      }, "setTransition"),
      perspective: a(() => !0, "perspective"),
      overwriteParams: a(
        () => ({ watchSlidesProgress: !0 }),
        "overwriteParams"
      ),
    });
}
a(jp, "EffectCoverflow");
let $o = null;
const bc = a(() => {
  const n = document.querySelector(".swiper[work-slider='component']");
  if (!n) return;
  const e = a(() => window.innerWidth >= 768, "getIsDesktop"),
    t = a(() => {
      const r = e();
      $o = new Pr(n, {
        modules: [_c, yc, vc, wc, jp],
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
          init: a(function () {
            const s = Array.from(this.slides).filter(
                (c) => !c.classList.contains("swiper-slide-duplicate")
              ).length,
              o = this.realIndex + 1,
              l = document.querySelector("[data-slider-count]"),
              u = document.querySelector("[data-slider-current]");
            l && (l.textContent = s), u && (u.textContent = o);
          }, "init"),
          slideChange: a(function () {
            const s = this.realIndex + 1,
              o = document.querySelector("[data-slider-current]");
            o && (o.textContent = s);
          }, "slideChange"),
        },
      });
    }, "initSwiper");
  let i = e();
  t(),
    window.addEventListener("resize", () => {
      const r = e();
      r !== i && ((i = r), $o && $o.destroy(!0, !0), t());
    });
}, "initWorkSlider");
function Ti(n) {
  if (n === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return n;
}
a(Ti, "_assertThisInitialized");
function xc(n, e) {
  (n.prototype = Object.create(e.prototype)),
    (n.prototype.constructor = n),
    (n.__proto__ = e);
}
a(xc, "_inheritsLoose");
var Rt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  hn = { duration: 0.5, overwrite: !1, delay: 0 },
  Ka,
  et,
  we,
  vi = 1e8,
  ut = 1 / vi,
  fa = Math.PI * 2,
  Up = fa / 4,
  Kp = 0,
  Sc = Math.sqrt,
  Zp = Math.cos,
  Qp = Math.sin,
  je = a(function (e) {
    return typeof e == "string";
  }, "_isString"),
  ke = a(function (e) {
    return typeof e == "function";
  }, "_isFunction"),
  Di = a(function (e) {
    return typeof e == "number";
  }, "_isNumber"),
  Za = a(function (e) {
    return typeof e > "u";
  }, "_isUndefined"),
  _i = a(function (e) {
    return typeof e == "object";
  }, "_isObject"),
  St = a(function (e) {
    return e !== !1;
  }, "_isNotFalse"),
  Qa = a(function () {
    return typeof window < "u";
  }, "_windowExists"),
  Ss = a(function (e) {
    return ke(e) || je(e);
  }, "_isFuncOrString"),
  Tc =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  dt = Array.isArray,
  ha = /(?:-?\.?\d|\.)+/gi,
  Ec = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  jr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Fo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Cc = /[+-]=-?[.\d]+/,
  kc = /[^,'"\[\]\s]+/gi,
  Jp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Te,
  ui,
  pa,
  Ja,
  $t = {},
  no = {},
  Pc,
  Mc = a(function (e) {
    return (no = pn(e, $t)) && kt;
  }, "_install"),
  el = a(function (e, t) {}, "_missingPlugin"),
  os = a(function (e, t) {
    return !t && void 0;
  }, "_warn"),
  Ac = a(function (e, t) {
    return (e && ($t[e] = t) && no && (no[e] = t)) || $t;
  }, "_addGlobal"),
  as = a(function () {
    return 0;
  }, "_emptyFunc"),
  em = { suppressEvents: !0, isStart: !0, kill: !1 },
  Ws = { suppressEvents: !0, kill: !1 },
  tm = { suppressEvents: !0 },
  tl = {},
  Xi = [],
  ma = {},
  Oc,
  Lt = {},
  Bo = {},
  Jl = 30,
  Hs = [],
  il = "",
  rl = a(function (e) {
    var t = e[0],
      i,
      r;
    if ((_i(t) || ke(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
      for (r = Hs.length; r-- && !Hs[r].targetTest(t); );
      i = Hs[r];
    }
    for (r = e.length; r--; )
      (e[r] && (e[r]._gsap || (e[r]._gsap = new td(e[r], i)))) ||
        e.splice(r, 1);
    return e;
  }, "_harness"),
  yr = a(function (e) {
    return e._gsap || rl(Xt(e))[0]._gsap;
  }, "_getCache"),
  Lc = a(function (e, t, i) {
    return (i = e[t]) && ke(i)
      ? e[t]()
      : (Za(i) && e.getAttribute && e.getAttribute(t)) || i;
  }, "_getProperty"),
  Tt = a(function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  }, "_forEachName"),
  Oe = a(function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  }, "_round"),
  Re = a(function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  }, "_roundPrecise"),
  en = a(function (e, t) {
    var i = t.charAt(0),
      r = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
    );
  }, "_parseRelative"),
  im = a(function (e, t) {
    for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
    return r < i;
  }, "_arrayContainsAny"),
  so = a(function () {
    var e = Xi.length,
      t = Xi.slice(0),
      i,
      r;
    for (ma = {}, Xi.length = 0, i = 0; i < e; i++)
      (r = t[i]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  }, "_lazyRender"),
  nl = a(function (e) {
    return !!(e._initted || e._startAt || e.add);
  }, "_isRevertWorthy"),
  Dc = a(function (e, t, i, r) {
    Xi.length && !et && so(),
      e.render(t, i, !!(et && t < 0 && nl(e))),
      Xi.length && !et && so();
  }, "_lazySafeRender"),
  Ic = a(function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(kc).length < 2
      ? t
      : je(e)
      ? e.trim()
      : e;
  }, "_numericIfPossible"),
  zc = a(function (e) {
    return e;
  }, "_passThrough"),
  Ft = a(function (e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  }, "_setDefaults"),
  rm = a(function (e) {
    return function (t, i) {
      for (var r in i)
        r in t || (r === "duration" && e) || r === "ease" || (t[r] = i[r]);
    };
  }, "_setKeyframeDefaults"),
  pn = a(function (e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  }, "_merge"),
  eu = a(function n(e, t) {
    for (var i in t)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (e[i] = _i(t[i]) ? n(e[i] || (e[i] = {}), t[i]) : t[i]);
    return e;
  }, "_mergeDeep"),
  oo = a(function (e, t) {
    var i = {},
      r;
    for (r in e) r in t || (i[r] = e[r]);
    return i;
  }, "_copyExcluding"),
  Vn = a(function (e) {
    var t = e.parent || Te,
      i = e.keyframes ? rm(dt(e.keyframes)) : Ft;
    if (St(e.inherit))
      for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  }, "_inheritDefaults"),
  nm = a(function (e, t) {
    for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
    return i < 0;
  }, "_arraysMatch"),
  Nc = a(function (e, t, i, r, s) {
    var o = e[r],
      l;
    if (s) for (l = t[s]; o && o[s] > l; ) o = o._prev;
    return (
      o ? ((t._next = o._next), (o._next = t)) : ((t._next = e[i]), (e[i] = t)),
      t._next ? (t._next._prev = t) : (e[r] = t),
      (t._prev = o),
      (t.parent = t._dp = e),
      t
    );
  }, "_addLinkedListItem"),
  To = a(function (e, t, i, r) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var s = t._prev,
      o = t._next;
    s ? (s._next = o) : e[i] === t && (e[i] = o),
      o ? (o._prev = s) : e[r] === t && (e[r] = s),
      (t._next = t._prev = t.parent = null);
  }, "_removeLinkedListItem"),
  Ki = a(function (e, t) {
    e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  }, "_removeFromParent"),
  _r = a(function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
    return e;
  }, "_uncache"),
  sm = a(function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  }, "_recacheAncestors"),
  ga = a(function (e, t, i, r) {
    return (
      e._startAt &&
      (et
        ? e._startAt.revert(Ws)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, r))
    );
  }, "_rewindStartAt"),
  om = a(function n(e) {
    return !e || (e._ts && n(e.parent));
  }, "_hasNoPausedAncestors"),
  tu = a(function (e) {
    return e._repeat ? mn(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  }, "_elapsedCycleDuration"),
  mn = a(function (e, t) {
    var i = Math.floor((e = Re(e / t)));
    return e && i === e ? i - 1 : i;
  }, "_animationCycle"),
  ao = a(function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  }, "_parentToChildTotalTime"),
  Eo = a(function (e) {
    return (e._end = Re(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || ut) || 0)
    ));
  }, "_setEnd"),
  Co = a(function (e, t) {
    var i = e._dp;
    return (
      i &&
        i.smoothChildTiming &&
        e._ts &&
        ((e._start = Re(
          i._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        Eo(e),
        i._dirty || _r(i, e)),
      e
    );
  }, "_alignPlayhead"),
  Rc = a(function (e, t) {
    var i;
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((i = ao(e.rawTime(), t)),
        (!t._dur || vs(0, t.totalDuration(), i) - t._tTime > ut) &&
          t.render(i, !0)),
      _r(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (i = e; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      e._zTime = -1e-8;
    }
  }, "_postAddChecks"),
  fi = a(function (e, t, i, r) {
    return (
      t.parent && Ki(t),
      (t._start = Re(
        (Di(i) ? i : i || e !== Te ? Ht(e, i, t) : e._time) + t._delay
      )),
      (t._end = Re(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      Nc(e, t, "_first", "_last", e._sort ? "_start" : 0),
      va(t) || (e._recent = t),
      r || Rc(e, t),
      e._ts < 0 && Co(e, e._tTime),
      e
    );
  }, "_addToTimeline"),
  $c = a(function (e, t) {
    return (
      ($t.ScrollTrigger || el("scrollTrigger", t)) &&
      $t.ScrollTrigger.create(t, e)
    );
  }, "_scrollTrigger"),
  Fc = a(function (e, t, i, r, s) {
    if ((ol(e, t, s), !e._initted)) return 1;
    if (
      !i &&
      e._pt &&
      !et &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      Oc !== It.frame
    )
      return Xi.push(e), (e._lazy = [s, r]), 1;
  }, "_attemptInitTween"),
  am = a(function n(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t));
  }, "_parentPlayheadIsBeforeStart"),
  va = a(function (e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  }, "_isFromOrFromStart"),
  lm = a(function (e, t, i, r) {
    var s = e.ratio,
      o =
        t < 0 ||
        (!t &&
          ((!e._start && am(e) && !(!e._initted && va(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !va(e))))
          ? 0
          : 1,
      l = e._rDelay,
      u = 0,
      c,
      d,
      f;
    if (
      (l &&
        e._repeat &&
        ((u = vs(0, e._tDur, t)),
        (d = mn(u, l)),
        e._yoyo && d & 1 && (o = 1 - o),
        d !== mn(e._tTime, l) &&
          ((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
      o !== s || et || r || e._zTime === ut || (!t && e._zTime))
    ) {
      if (!e._initted && Fc(e, t, r, i, u)) return;
      for (
        f = e._zTime,
          e._zTime = t || (i ? ut : 0),
          i || (i = t && !f),
          e.ratio = o,
          e._from && (o = 1 - o),
          e._time = 0,
          e._tTime = u,
          c = e._pt;
        c;

      )
        c.r(o, c.d), (c = c._next);
      t < 0 && ga(e, t, i, !0),
        e._onUpdate && !i && Nt(e, "onUpdate"),
        u && e._repeat && !i && e.parent && Nt(e, "onRepeat"),
        (t >= e._tDur || t < 0) &&
          e.ratio === o &&
          (o && Ki(e, 1),
          !i &&
            !et &&
            (Nt(e, o ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  }, "_renderZeroDurationTween"),
  um = a(function (e, t, i) {
    var r;
    if (i > t)
      for (r = e._first; r && r._start <= i; ) {
        if (r.data === "isPause" && r._start > t) return r;
        r = r._next;
      }
    else
      for (r = e._last; r && r._start >= i; ) {
        if (r.data === "isPause" && r._start < t) return r;
        r = r._prev;
      }
  }, "_findNextPauseTween"),
  gn = a(function (e, t, i, r) {
    var s = e._repeat,
      o = Re(t) || 0,
      l = e._tTime / e._tDur;
    return (
      l && !r && (e._time *= o / e._dur),
      (e._dur = o),
      (e._tDur = s ? (s < 0 ? 1e10 : Re(o * (s + 1) + e._rDelay * s)) : o),
      l > 0 && !r && Co(e, (e._tTime = e._tDur * l)),
      e.parent && Eo(e),
      i || _r(e.parent, e),
      e
    );
  }, "_setDuration"),
  iu = a(function (e) {
    return e instanceof yt ? _r(e) : gn(e, e._dur);
  }, "_onUpdateTotalDuration"),
  cm = { _start: 0, endTime: as, totalDuration: as },
  Ht = a(function n(e, t, i) {
    var r = e.labels,
      s = e._recent || cm,
      o = e.duration() >= vi ? s.endTime(!1) : e._dur,
      l,
      u,
      c;
    return je(t) && (isNaN(t) || t in r)
      ? ((u = t.charAt(0)),
        (c = t.substr(-1) === "%"),
        (l = t.indexOf("=")),
        u === "<" || u === ">"
          ? (l >= 0 && (t = t.replace(/=/, "")),
            (u === "<" ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(t.substr(1)) || 0) *
                (c ? (l < 0 ? s : i).totalDuration() / 100 : 1))
          : l < 0
          ? (t in r || (r[t] = o), r[t])
          : ((u = parseFloat(t.charAt(l - 1) + t.substr(l + 1))),
            c && i && (u = (u / 100) * (dt(i) ? i[0] : i).totalDuration()),
            l > 1 ? n(e, t.substr(0, l - 1), i) + u : o + u))
      : t == null
      ? o
      : +t;
  }, "_parsePosition"),
  qn = a(function (e, t, i) {
    var r = Di(t[1]),
      s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[s],
      l,
      u;
    if ((r && (o.duration = t[1]), (o.parent = i), e)) {
      for (l = o, u = i; u && !("immediateRender" in l); )
        (l = u.vars.defaults || {}), (u = St(u.vars.inherit) && u.parent);
      (o.immediateRender = St(l.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
    }
    return new Ne(t[0], o, t[s + 1]);
  }, "_createTweenType"),
  Ji = a(function (e, t) {
    return e || e === 0 ? t(e) : t;
  }, "_conditionalReturn"),
  vs = a(function (e, t, i) {
    return i < e ? e : i > t ? t : i;
  }, "_clamp"),
  at = a(function (e, t) {
    return !je(e) || !(t = Jp.exec(e)) ? "" : t[1];
  }, "getUnit"),
  dm = a(function (e, t, i) {
    return Ji(i, function (r) {
      return vs(e, t, r);
    });
  }, "clamp"),
  ya = [].slice,
  Bc = a(function (e, t) {
    return (
      e &&
      _i(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && _i(e[0]))) &&
      !e.nodeType &&
      e !== ui
    );
  }, "_isArrayLike"),
  fm = a(function (e, t, i) {
    return (
      i === void 0 && (i = []),
      e.forEach(function (r) {
        var s;
        return (je(r) && !t) || Bc(r, 1)
          ? (s = i).push.apply(s, Xt(r))
          : i.push(r);
      }) || i
    );
  }, "_flatten"),
  Xt = a(function (e, t, i) {
    return we && !t && we.selector
      ? we.selector(e)
      : je(e) && !i && (pa || !vn())
      ? ya.call((t || Ja).querySelectorAll(e), 0)
      : dt(e)
      ? fm(e, i)
      : Bc(e)
      ? ya.call(e, 0)
      : e
      ? [e]
      : [];
  }, "toArray"),
  _a = a(function (e) {
    return (
      (e = Xt(e)[0] || os("Invalid scope") || {}),
      function (t) {
        var i = e.current || e.nativeElement || e;
        return Xt(
          t,
          i.querySelectorAll
            ? i
            : i === e
            ? os("Invalid scope") || Ja.createElement("div")
            : e
        );
      }
    );
  }, "selector"),
  Vc = a(function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  }, "shuffle"),
  qc = a(function (e) {
    if (ke(e)) return e;
    var t = _i(e) ? e : { each: e },
      i = wr(t.ease),
      r = t.from || 0,
      s = parseFloat(t.base) || 0,
      o = {},
      l = r > 0 && r < 1,
      u = isNaN(r) || l,
      c = t.axis,
      d = r,
      f = r;
    return (
      je(r)
        ? (d = f = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !l && u && ((d = r[0]), (f = r[1])),
      function (p, h, m) {
        var g = (m || t).length,
          w = o[g],
          b,
          y,
          _,
          v,
          x,
          E,
          C,
          S,
          A;
        if (!w) {
          if (((A = t.grid === "auto" ? 0 : (t.grid || [1, vi])[1]), !A)) {
            for (
              C = -1e8;
              C < (C = m[A++].getBoundingClientRect().left) && A < g;

            );
            A < g && A--;
          }
          for (
            w = o[g] = [],
              b = u ? Math.min(A, g) * d - 0.5 : r % A,
              y = A === vi ? 0 : u ? (g * f) / A - 0.5 : (r / A) | 0,
              C = 0,
              S = vi,
              E = 0;
            E < g;
            E++
          )
            (_ = (E % A) - b),
              (v = y - ((E / A) | 0)),
              (w[E] = x = c ? Math.abs(c === "y" ? v : _) : Sc(_ * _ + v * v)),
              x > C && (C = x),
              x < S && (S = x);
          r === "random" && Vc(w),
            (w.max = C - S),
            (w.min = S),
            (w.v = g =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (A > g
                    ? g - 1
                    : c
                    ? c === "y"
                      ? g / A
                      : A
                    : Math.max(A, g / A)) ||
                0) * (r === "edges" ? -1 : 1)),
            (w.b = g < 0 ? s - g : s),
            (w.u = at(t.amount || t.each) || 0),
            (i = i && g < 0 ? Qc(i) : i);
        }
        return (
          (g = (w[p] - w.min) / w.max || 0),
          Re(w.b + (i ? i(g) : g) * w.v) + w.u
        );
      }
    );
  }, "distribute"),
  wa = a(function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (i) {
      var r = Re(Math.round(parseFloat(i) / e) * e * t);
      return (r - (r % 1)) / t + (Di(i) ? 0 : at(i));
    };
  }, "_roundModifier"),
  Wc = a(function (e, t) {
    var i = dt(e),
      r,
      s;
    return (
      !i &&
        _i(e) &&
        ((r = i = e.radius || vi),
        e.values
          ? ((e = Xt(e.values)), (s = !Di(e[0])) && (r *= r))
          : (e = wa(e.increment))),
      Ji(
        t,
        i
          ? ke(e)
            ? function (o) {
                return (s = e(o)), Math.abs(s - o) <= r ? s : o;
              }
            : function (o) {
                for (
                  var l = parseFloat(s ? o.x : o),
                    u = parseFloat(s ? o.y : 0),
                    c = vi,
                    d = 0,
                    f = e.length,
                    p,
                    h;
                  f--;

                )
                  s
                    ? ((p = e[f].x - l), (h = e[f].y - u), (p = p * p + h * h))
                    : (p = Math.abs(e[f] - l)),
                    p < c && ((c = p), (d = f));
                return (
                  (d = !r || c <= r ? e[d] : o),
                  s || d === o || Di(o) ? d : d + at(o)
                );
              }
          : wa(e)
      )
    );
  }, "snap"),
  Hc = a(function (e, t, i, r) {
    return Ji(dt(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
      return dt(e)
        ? e[~~(Math.random() * e.length)]
        : (i = i || 1e-5) &&
            (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - i / 2 + Math.random() * (t - e + i * 0.99)) / i) *
                i *
                r
            ) / r;
    });
  }, "random"),
  hm = a(function () {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return function (r) {
      return t.reduce(function (s, o) {
        return o(s);
      }, r);
    };
  }, "pipe"),
  pm = a(function (e, t) {
    return function (i) {
      return e(parseFloat(i)) + (t || at(i));
    };
  }, "unitize"),
  mm = a(function (e, t, i) {
    return Yc(e, t, 0, 1, i);
  }, "normalize"),
  Gc = a(function (e, t, i) {
    return Ji(i, function (r) {
      return e[~~t(r)];
    });
  }, "_wrapArray"),
  gm = a(function n(e, t, i) {
    var r = t - e;
    return dt(e)
      ? Gc(e, n(0, e.length), t)
      : Ji(i, function (s) {
          return ((r + ((s - e) % r)) % r) + e;
        });
  }, "wrap"),
  vm = a(function n(e, t, i) {
    var r = t - e,
      s = r * 2;
    return dt(e)
      ? Gc(e, n(0, e.length - 1), t)
      : Ji(i, function (o) {
          return (o = (s + ((o - e) % s)) % s || 0), e + (o > r ? s - o : o);
        });
  }, "wrapYoyo"),
  ls = a(function (e) {
    for (var t = 0, i = "", r, s, o, l; ~(r = e.indexOf("random(", t)); )
      (o = e.indexOf(")", r)),
        (l = e.charAt(r + 7) === "["),
        (s = e.substr(r + 7, o - r - 7).match(l ? kc : ha)),
        (i +=
          e.substr(t, r - t) + Hc(l ? s : +s[0], l ? 0 : +s[1], +s[2] || 1e-5)),
        (t = o + 1);
    return i + e.substr(t, e.length - t);
  }, "_replaceRandom"),
  Yc = a(function (e, t, i, r, s) {
    var o = t - e,
      l = r - i;
    return Ji(s, function (u) {
      return i + (((u - e) / o) * l || 0);
    });
  }, "mapRange"),
  ym = a(function n(e, t, i, r) {
    var s = isNaN(e + t)
      ? 0
      : function (h) {
          return (1 - h) * e + h * t;
        };
    if (!s) {
      var o = je(e),
        l = {},
        u,
        c,
        d,
        f,
        p;
      if ((i === !0 && (r = 1) && (i = null), o))
        (e = { p: e }), (t = { p: t });
      else if (dt(e) && !dt(t)) {
        for (d = [], f = e.length, p = f - 2, c = 1; c < f; c++)
          d.push(n(e[c - 1], e[c]));
        f--,
          (s = a(function (m) {
            m *= f;
            var g = Math.min(p, ~~m);
            return d[g](m - g);
          }, "func")),
          (i = t);
      } else r || (e = pn(dt(e) ? [] : {}, e));
      if (!d) {
        for (u in t) sl.call(l, e, u, "get", t[u]);
        s = a(function (m) {
          return ul(m, l) || (o ? e.p : e);
        }, "func");
      }
    }
    return Ji(i, s);
  }, "interpolate"),
  ru = a(function (e, t, i) {
    var r = e.labels,
      s = vi,
      o,
      l,
      u;
    for (o in r)
      (l = r[o] - t),
        l < 0 == !!i && l && s > (l = Math.abs(l)) && ((u = o), (s = l));
    return u;
  }, "_getLabelInDirection"),
  Nt = a(function (e, t, i) {
    var r = e.vars,
      s = r[t],
      o = we,
      l = e._ctx,
      u,
      c,
      d;
    if (s)
      return (
        (u = r[t + "Params"]),
        (c = r.callbackScope || e),
        i && Xi.length && so(),
        l && (we = l),
        (d = u ? s.apply(c, u) : s.call(c)),
        (we = o),
        d
      );
  }, "_callback"),
  Ln = a(function (e) {
    return (
      Ki(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!et),
      e.progress() < 1 && Nt(e, "onInterrupt"),
      e
    );
  }, "_interrupt"),
  Ur,
  Xc = [],
  jc = a(function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), Qa() || e.headless)) {
        var t = e.name,
          i = ke(e),
          r =
            t && !i && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          s = {
            init: as,
            render: ul,
            add: sl,
            kill: Im,
            modifier: Dm,
            rawVars: 0,
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: ll,
            aliases: {},
            register: 0,
          };
        if ((vn(), e !== r)) {
          if (Lt[t]) return;
          Ft(r, Ft(oo(e, s), o)),
            pn(r.prototype, pn(s, oo(e, o))),
            (Lt[(r.prop = t)] = r),
            e.targetTest && (Hs.push(r), (tl[t] = 1)),
            (t =
              (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
              "Plugin");
        }
        Ac(t, r), e.register && e.register(kt, r, Et);
      } else Xc.push(e);
  }, "_createPlugin"),
  pe = 255,
  Dn = {
    aqua: [0, pe, pe],
    lime: [0, pe, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, pe],
    navy: [0, 0, 128],
    white: [pe, pe, pe],
    olive: [128, 128, 0],
    yellow: [pe, pe, 0],
    orange: [pe, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [pe, 0, 0],
    pink: [pe, 192, 203],
    cyan: [0, pe, pe],
    transparent: [pe, pe, pe, 0],
  },
  Vo = a(function (e, t, i) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (i - t) * e * 6
        : e < 0.5
        ? i
        : e * 3 < 2
        ? t + (i - t) * (2 / 3 - e) * 6
        : t) *
        pe +
        0.5) |
        0
    );
  }, "_hue"),
  Uc = a(function (e, t, i) {
    var r = e ? (Di(e) ? [e >> 16, (e >> 8) & pe, e & pe] : 0) : Dn.black,
      s,
      o,
      l,
      u,
      c,
      d,
      f,
      p,
      h,
      m;
    if (!r) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Dn[e]))
        r = Dn[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((s = e.charAt(1)),
            (o = e.charAt(2)),
            (l = e.charAt(3)),
            (e =
              "#" +
              s +
              s +
              o +
              o +
              l +
              l +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (r = parseInt(e.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & pe, r & pe, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (r = [e >> 16, (e >> 8) & pe, e & pe]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((r = m = e.match(ha)), !t))
          (u = (+r[0] % 360) / 360),
            (c = +r[1] / 100),
            (d = +r[2] / 100),
            (o = d <= 0.5 ? d * (c + 1) : d + c - d * c),
            (s = d * 2 - o),
            r.length > 3 && (r[3] *= 1),
            (r[0] = Vo(u + 1 / 3, s, o)),
            (r[1] = Vo(u, s, o)),
            (r[2] = Vo(u - 1 / 3, s, o));
        else if (~e.indexOf("="))
          return (r = e.match(Ec)), i && r.length < 4 && (r[3] = 1), r;
      } else r = e.match(ha) || Dn.transparent;
      r = r.map(Number);
    }
    return (
      t &&
        !m &&
        ((s = r[0] / pe),
        (o = r[1] / pe),
        (l = r[2] / pe),
        (f = Math.max(s, o, l)),
        (p = Math.min(s, o, l)),
        (d = (f + p) / 2),
        f === p
          ? (u = c = 0)
          : ((h = f - p),
            (c = d > 0.5 ? h / (2 - f - p) : h / (f + p)),
            (u =
              f === s
                ? (o - l) / h + (o < l ? 6 : 0)
                : f === o
                ? (l - s) / h + 2
                : (s - o) / h + 4),
            (u *= 60)),
        (r[0] = ~~(u + 0.5)),
        (r[1] = ~~(c * 100 + 0.5)),
        (r[2] = ~~(d * 100 + 0.5))),
      i && r.length < 4 && (r[3] = 1),
      r
    );
  }, "splitColor"),
  Kc = a(function (e) {
    var t = [],
      i = [],
      r = -1;
    return (
      e.split(ji).forEach(function (s) {
        var o = s.match(jr) || [];
        t.push.apply(t, o), i.push((r += o.length + 1));
      }),
      (t.c = i),
      t
    );
  }, "_colorOrderData"),
  nu = a(function (e, t, i) {
    var r = "",
      s = (e + r).match(ji),
      o = t ? "hsla(" : "rgba(",
      l = 0,
      u,
      c,
      d,
      f;
    if (!s) return e;
    if (
      ((s = s.map(function (p) {
        return (
          (p = Uc(p, t, 1)) &&
          o +
            (t ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3] : p.join(",")) +
            ")"
        );
      })),
      i && ((d = Kc(e)), (u = i.c), u.join(r) !== d.c.join(r)))
    )
      for (c = e.replace(ji, "1").split(jr), f = c.length - 1; l < f; l++)
        r +=
          c[l] +
          (~u.indexOf(l)
            ? s.shift() || o + "0,0,0,0)"
            : (d.length ? d : s.length ? s : i).shift());
    if (!c)
      for (c = e.split(ji), f = c.length - 1; l < f; l++) r += c[l] + s[l];
    return r + c[f];
  }, "_formatColors"),
  ji = (function () {
    var n =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in Dn) n += "|" + e + "\\b";
    return new RegExp(n + ")", "gi");
  })(),
  _m = /hsl[a]?\(/,
  Zc = a(function (e) {
    var t = e.join(" "),
      i;
    if (((ji.lastIndex = 0), ji.test(t)))
      return (
        (i = _m.test(t)),
        (e[1] = nu(e[1], i)),
        (e[0] = nu(e[0], i, Kc(e[1]))),
        !0
      );
  }, "_colorStringFilter"),
  us,
  It = (function () {
    var n = Date.now,
      e = 500,
      t = 33,
      i = n(),
      r = i,
      s = 1e3 / 240,
      o = s,
      l = [],
      u,
      c,
      d,
      f,
      p,
      h,
      m = a(function g(w) {
        var b = n() - r,
          y = w === !0,
          _,
          v,
          x,
          E;
        if (
          ((b > e || b < 0) && (i += b - t),
          (r += b),
          (x = r - i),
          (_ = x - o),
          (_ > 0 || y) &&
            ((E = ++f.frame),
            (p = x - f.time * 1e3),
            (f.time = x = x / 1e3),
            (o += _ + (_ >= s ? 4 : s - _)),
            (v = 1)),
          y || (u = c(g)),
          v)
        )
          for (h = 0; h < l.length; h++) l[h](x, p, E, w);
      }, "_tick");
    return (
      (f = {
        time: 0,
        frame: 0,
        tick: a(function () {
          m(!0);
        }, "tick"),
        deltaRatio: a(function (w) {
          return p / (1e3 / (w || 60));
        }, "deltaRatio"),
        wake: a(function () {
          Pc &&
            (!pa &&
              Qa() &&
              ((ui = pa = window),
              (Ja = ui.document || {}),
              ($t.gsap = kt),
              (ui.gsapVersions || (ui.gsapVersions = [])).push(kt.version),
              Mc(no || ui.GreenSockGlobals || (!ui.gsap && ui) || {}),
              Xc.forEach(jc)),
            (d = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            u && f.sleep(),
            (c =
              d ||
              function (w) {
                return setTimeout(w, (o - f.time * 1e3 + 1) | 0);
              }),
            (us = 1),
            m(2));
        }, "wake"),
        sleep: a(function () {
          (d ? cancelAnimationFrame : clearTimeout)(u), (us = 0), (c = as);
        }, "sleep"),
        lagSmoothing: a(function (w, b) {
          (e = w || 1 / 0), (t = Math.min(b || 33, e));
        }, "lagSmoothing"),
        fps: a(function (w) {
          (s = 1e3 / (w || 240)), (o = f.time * 1e3 + s);
        }, "fps"),
        add: a(function (w, b, y) {
          var _ = b
            ? function (v, x, E, C) {
                w(v, x, E, C), f.remove(_);
              }
            : w;
          return f.remove(w), l[y ? "unshift" : "push"](_), vn(), _;
        }, "add"),
        remove: a(function (w, b) {
          ~(b = l.indexOf(w)) && l.splice(b, 1) && h >= b && h--;
        }, "remove"),
        _listeners: l,
      }),
      f
    );
  })(),
  vn = a(function () {
    return !us && It.wake();
  }, "_wake"),
  Je = {},
  wm = /^[\d.\-M][\d.\-,\s]/,
  bm = /["']/g,
  xm = a(function (e) {
    for (
      var t = {},
        i = e.substr(1, e.length - 3).split(":"),
        r = i[0],
        s = 1,
        o = i.length,
        l,
        u,
        c;
      s < o;
      s++
    )
      (u = i[s]),
        (l = s !== o - 1 ? u.lastIndexOf(",") : u.length),
        (c = u.substr(0, l)),
        (t[r] = isNaN(c) ? c.replace(bm, "").trim() : +c),
        (r = u.substr(l + 1).trim());
    return t;
  }, "_parseObjectInString"),
  Sm = a(function (e) {
    var t = e.indexOf("(") + 1,
      i = e.indexOf(")"),
      r = e.indexOf("(", t);
    return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
  }, "_valueInParentheses"),
  Tm = a(function (e) {
    var t = (e + "").split("("),
      i = Je[t[0]];
    return i && t.length > 1 && i.config
      ? i.config.apply(
          null,
          ~e.indexOf("{") ? [xm(t[1])] : Sm(e).split(",").map(Ic)
        )
      : Je._CE && wm.test(e)
      ? Je._CE("", e)
      : i;
  }, "_configEaseFromString"),
  Qc = a(function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  }, "_invertEase"),
  Jc = a(function n(e, t) {
    for (var i = e._first, r; i; )
      i instanceof yt
        ? n(i, t)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== t &&
          (i.timeline
            ? n(i.timeline, t)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = t))),
        (i = i._next);
  }, "_propagateYoyoEase"),
  wr = a(function (e, t) {
    return (e && (ke(e) ? e : Je[e] || Tm(e))) || t;
  }, "_parseEase"),
  zr = a(function (e, t, i, r) {
    i === void 0 &&
      (i = a(function (u) {
        return 1 - t(1 - u);
      }, "easeOut")),
      r === void 0 &&
        (r = a(function (u) {
          return u < 0.5 ? t(u * 2) / 2 : 1 - t((1 - u) * 2) / 2;
        }, "easeInOut"));
    var s = { easeIn: t, easeOut: i, easeInOut: r },
      o;
    return (
      Tt(e, function (l) {
        (Je[l] = $t[l] = s), (Je[(o = l.toLowerCase())] = i);
        for (var u in s)
          Je[
            o + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")
          ] = Je[l + "." + u] = s[u];
      }),
      s
    );
  }, "_insertEase"),
  ed = a(function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  }, "_easeInOutFromOut"),
  qo = a(function n(e, t, i) {
    var r = t >= 1 ? t : 1,
      s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      o = (s / fa) * (Math.asin(1 / r) || 0),
      l = a(function (d) {
        return d === 1 ? 1 : r * Math.pow(2, -10 * d) * Qp((d - o) * s) + 1;
      }, "easeOut"),
      u =
        e === "out"
          ? l
          : e === "in"
          ? function (c) {
              return 1 - l(1 - c);
            }
          : ed(l);
    return (
      (s = fa / s),
      (u.config = function (c, d) {
        return n(e, c, d);
      }),
      u
    );
  }, "_configElastic"),
  Wo = a(function n(e, t) {
    t === void 0 && (t = 1.70158);
    var i = a(function (o) {
        return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
      }, "easeOut"),
      r =
        e === "out"
          ? i
          : e === "in"
          ? function (s) {
              return 1 - i(1 - s);
            }
          : ed(i);
    return (
      (r.config = function (s) {
        return n(e, s);
      }),
      r
    );
  }, "_configBack");
Tt("Linear,Quad,Cubic,Quart,Quint,Strong", function (n, e) {
  var t = e < 5 ? e + 1 : e;
  zr(
    n + ",Power" + (t - 1),
    e
      ? function (i) {
          return Math.pow(i, t);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, t);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, t) / 2
        : 1 - Math.pow((1 - i) * 2, t) / 2;
    }
  );
});
Je.Linear.easeNone = Je.none = Je.Linear.easeIn;
zr("Elastic", qo("in"), qo("out"), qo());
(function (n, e) {
  var t = 1 / e,
    i = 2 * t,
    r = 2.5 * t,
    s = a(function (l) {
      return l < t
        ? n * l * l
        : l < i
        ? n * Math.pow(l - 1.5 / e, 2) + 0.75
        : l < r
        ? n * (l -= 2.25 / e) * l + 0.9375
        : n * Math.pow(l - 2.625 / e, 2) + 0.984375;
    }, "easeOut");
  zr(
    "Bounce",
    function (o) {
      return 1 - s(1 - o);
    },
    s
  );
})(7.5625, 2.75);
zr("Expo", function (n) {
  return Math.pow(2, 10 * (n - 1)) * n + n * n * n * n * n * n * (1 - n);
});
zr("Circ", function (n) {
  return -(Sc(1 - n * n) - 1);
});
zr("Sine", function (n) {
  return n === 1 ? 1 : -Zp(n * Up) + 1;
});
zr("Back", Wo("in"), Wo("out"), Wo());
Je.SteppedEase =
  Je.steps =
  $t.SteppedEase =
    {
      config: a(function (e, t) {
        e === void 0 && (e = 1);
        var i = 1 / e,
          r = e + (t ? 0 : 1),
          s = t ? 1 : 0,
          o = 1 - ut;
        return function (l) {
          return (((r * vs(0, o, l)) | 0) + s) * i;
        };
      }, "config"),
    };
hn.ease = Je["quad.out"];
Tt(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (n) {
    return (il += n + "," + n + "Params,");
  }
);
var td = a(function (e, t) {
    (this.id = Kp++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : Lc),
      (this.set = t ? t.getSetter : ll);
  }, "GSCache"),
  cs = (function () {
    function n(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        gn(this, +t.duration, 1, 1),
        (this.data = t.data),
        we && ((this._ctx = we), we.data.push(this)),
        us || It.wake();
    }
    a(n, "Animation");
    var e = n.prototype;
    return (
      (e.delay = a(function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }, "delay")),
      (e.duration = a(function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
            )
          : this.totalDuration() && this._dur;
      }, "duration")),
      (e.totalDuration = a(function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            gn(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }, "totalDuration")),
      (e.totalTime = a(function (i, r) {
        if ((vn(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (Co(this, i), !s._dp || s.parent || Rc(s, this); s && s.parent; )
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
            fi(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === ut) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), Dc(this, i, r)),
          this
        );
      }, "totalTime")),
      (e.time = a(function (i, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + tu(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              r
            )
          : this._time;
      }, "time")),
      (e.totalProgress = a(function (i, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, r)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() >= 0 && this._initted
          ? 1
          : 0;
      }, "totalProgress")),
      (e.progress = a(function (i, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                tu(this),
              r
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }, "progress")),
      (e.iteration = a(function (i, r) {
        var s = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * s, r)
          : this._repeat
          ? mn(this._tTime, s) + 1
          : 1;
      }, "iteration")),
      (e.timeScale = a(function (i, r) {
        if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
        if (this._rts === i) return this;
        var s =
          this.parent && this._ts ? ao(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -1e-8 ? 0 : this._rts),
          this.totalTime(
            vs(-Math.abs(this._delay), this.totalDuration(), s),
            r !== !1
          ),
          Eo(this),
          sm(this)
        );
      }, "timeScale")),
      (e.paused = a(function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (vn(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== ut &&
                      (this._tTime -= ut)
                  ))),
            this)
          : this._ps;
      }, "paused")),
      (e.startTime = a(function (i) {
        if (arguments.length) {
          this._start = i;
          var r = this.parent || this._dp;
          return (
            r && (r._sort || !this.parent) && fi(r, this, i - this._delay), this
          );
        }
        return this._start;
      }, "startTime")),
      (e.endTime = a(function (i) {
        return (
          this._start +
          (St(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }, "endTime")),
      (e.rawTime = a(function (i) {
        var r = this.parent || this._dp;
        return r
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? ao(r.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }, "rawTime")),
      (e.revert = a(function (i) {
        i === void 0 && (i = tm);
        var r = et;
        return (
          (et = i),
          nl(this) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (et = r),
          this
        );
      }, "revert")),
      (e.globalTime = a(function (i) {
        for (var r = this, s = arguments.length ? i : r.rawTime(); r; )
          (s = r._start + s / (Math.abs(r._ts) || 1)), (r = r._dp);
        return !this.parent && this._sat ? this._sat.globalTime(i) : s;
      }, "globalTime")),
      (e.repeat = a(function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), iu(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }, "repeat")),
      (e.repeatDelay = a(function (i) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = i), iu(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }, "repeatDelay")),
      (e.yoyo = a(function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }, "yoyo")),
      (e.seek = a(function (i, r) {
        return this.totalTime(Ht(this, i), St(r));
      }, "seek")),
      (e.restart = a(function (i, r) {
        return (
          this.play().totalTime(i ? -this._delay : 0, St(r)),
          this._dur || (this._zTime = -1e-8),
          this
        );
      }, "restart")),
      (e.play = a(function (i, r) {
        return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
      }, "play")),
      (e.reverse = a(function (i, r) {
        return (
          i != null && this.seek(i || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }, "reverse")),
      (e.pause = a(function (i, r) {
        return i != null && this.seek(i, r), this.paused(!0);
      }, "pause")),
      (e.resume = a(function () {
        return this.paused(!1);
      }, "resume")),
      (e.reversed = a(function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -1e-8 : 0)),
            this)
          : this._rts < 0;
      }, "reversed")),
      (e.invalidate = a(function () {
        return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
      }, "invalidate")),
      (e.isActive = a(function () {
        var i = this.parent || this._dp,
          r = this._start,
          s;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (s = i.rawTime(!0)) >= r &&
            s < this.endTime(!0) - ut)
        );
      }, "isActive")),
      (e.eventCallback = a(function (i, r, s) {
        var o = this.vars;
        return arguments.length > 1
          ? (r
              ? ((o[i] = r),
                s && (o[i + "Params"] = s),
                i === "onUpdate" && (this._onUpdate = r))
              : delete o[i],
            this)
          : o[i];
      }, "eventCallback")),
      (e.then = a(function (i) {
        var r = this;
        return new Promise(function (s) {
          var o = ke(i) ? i : zc,
            l = a(function () {
              var c = r.then;
              (r.then = null),
                ke(o) && (o = o(r)) && (o.then || o === r) && (r.then = c),
                s(o),
                (r.then = c);
            }, "_resolve");
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? l()
            : (r._prom = l);
        });
      }, "then")),
      (e.kill = a(function () {
        Ln(this);
      }, "kill")),
      n
    );
  })();
Ft(cs.prototype, {
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
var yt = (function (n) {
  xc(e, n);
  function e(i, r) {
    var s;
    return (
      i === void 0 && (i = {}),
      (s = n.call(this, i) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!i.smoothChildTiming),
      (s.autoRemoveChildren = !!i.autoRemoveChildren),
      (s._sort = St(i.sortChildren)),
      Te && fi(i.parent || Te, Ti(s), r),
      i.reversed && s.reverse(),
      i.paused && s.paused(!0),
      i.scrollTrigger && $c(Ti(s), i.scrollTrigger),
      s
    );
  }
  a(e, "Timeline");
  var t = e.prototype;
  return (
    (t.to = a(function (r, s, o) {
      return qn(0, arguments, this), this;
    }, "to")),
    (t.from = a(function (r, s, o) {
      return qn(1, arguments, this), this;
    }, "from")),
    (t.fromTo = a(function (r, s, o, l) {
      return qn(2, arguments, this), this;
    }, "fromTo")),
    (t.set = a(function (r, s, o) {
      return (
        (s.duration = 0),
        (s.parent = this),
        Vn(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new Ne(r, s, Ht(this, o), 1),
        this
      );
    }, "set")),
    (t.call = a(function (r, s, o) {
      return fi(this, Ne.delayedCall(0, r, s), o);
    }, "call")),
    (t.staggerTo = a(function (r, s, o, l, u, c, d) {
      return (
        (o.duration = s),
        (o.stagger = o.stagger || l),
        (o.onComplete = c),
        (o.onCompleteParams = d),
        (o.parent = this),
        new Ne(r, o, Ht(this, u)),
        this
      );
    }, "staggerTo")),
    (t.staggerFrom = a(function (r, s, o, l, u, c, d) {
      return (
        (o.runBackwards = 1),
        (Vn(o).immediateRender = St(o.immediateRender)),
        this.staggerTo(r, s, o, l, u, c, d)
      );
    }, "staggerFrom")),
    (t.staggerFromTo = a(function (r, s, o, l, u, c, d, f) {
      return (
        (l.startAt = o),
        (Vn(l).immediateRender = St(l.immediateRender)),
        this.staggerTo(r, s, l, u, c, d, f)
      );
    }, "staggerFromTo")),
    (t.render = a(function (r, s, o) {
      var l = this._time,
        u = this._dirty ? this.totalDuration() : this._tDur,
        c = this._dur,
        d = r <= 0 ? 0 : Re(r),
        f = this._zTime < 0 != r < 0 && (this._initted || !c),
        p,
        h,
        m,
        g,
        w,
        b,
        y,
        _,
        v,
        x,
        E,
        C;
      if (
        (this !== Te && d > u && r >= 0 && (d = u), d !== this._tTime || o || f)
      ) {
        if (
          (l !== this._time &&
            c &&
            ((d += this._time - l), (r += this._time - l)),
          (p = d),
          (v = this._start),
          (_ = this._ts),
          (b = !_),
          f && (c || (l = this._zTime), (r || !s) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((E = this._yoyo),
            (w = c + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(w * 100 + r, s, o);
          if (
            ((p = Re(d % w)),
            d === u
              ? ((g = this._repeat), (p = c))
              : ((x = Re(d / w)),
                (g = ~~x),
                g && g === x && ((p = c), g--),
                p > c && (p = c)),
            (x = mn(this._tTime, w)),
            !l &&
              this._tTime &&
              x !== g &&
              this._tTime - x * w - this._dur <= 0 &&
              (x = g),
            E && g & 1 && ((p = c - p), (C = 1)),
            g !== x && !this._lock)
          ) {
            var S = E && x & 1,
              A = S === (E && g & 1);
            if (
              (g < x && (S = !S),
              (l = S ? 0 : d % c ? c : d),
              (this._lock = 1),
              (this.render(l || (C ? 0 : Re(g * w)), s, !c)._lock = 0),
              (this._tTime = d),
              !s && this.parent && Nt(this, "onRepeat"),
              this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1),
              (l && l !== this._time) ||
                b !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((c = this._dur),
              (u = this._tDur),
              A &&
                ((this._lock = 2),
                (l = S ? c : -1e-4),
                this.render(l, !0),
                this.vars.repeatRefresh && !C && this.invalidate()),
              (this._lock = 0),
              !this._ts && !b)
            )
              return this;
            Jc(this, C);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((y = um(this, Re(l), Re(p))), y && (d -= p - (p = y._start))),
          (this._tTime = d),
          (this._time = p),
          (this._act = !_),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (l = 0)),
          !l && d && !s && !x && (Nt(this, "onStart"), this._tTime !== d))
        )
          return this;
        if (p >= l && r >= 0)
          for (h = this._first; h; ) {
            if (
              ((m = h._next), (h._act || p >= h._start) && h._ts && y !== h)
            ) {
              if (h.parent !== this) return this.render(r, s, o);
              if (
                (h.render(
                  h._ts > 0
                    ? (p - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                        (p - h._start) * h._ts,
                  s,
                  o
                ),
                p !== this._time || (!this._ts && !b))
              ) {
                (y = 0), m && (d += this._zTime = -1e-8);
                break;
              }
            }
            h = m;
          }
        else {
          h = this._last;
          for (var k = r < 0 ? r : p; h; ) {
            if (((m = h._prev), (h._act || k <= h._end) && h._ts && y !== h)) {
              if (h.parent !== this) return this.render(r, s, o);
              if (
                (h.render(
                  h._ts > 0
                    ? (k - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                        (k - h._start) * h._ts,
                  s,
                  o || (et && nl(h))
                ),
                p !== this._time || (!this._ts && !b))
              ) {
                (y = 0), m && (d += this._zTime = k ? -1e-8 : ut);
                break;
              }
            }
            h = m;
          }
        }
        if (
          y &&
          !s &&
          (this.pause(),
          (y.render(p >= l ? 0 : -1e-8)._zTime = p >= l ? 1 : -1),
          this._ts)
        )
          return (this._start = v), Eo(this), this.render(r, s, o);
        this._onUpdate && !s && Nt(this, "onUpdate", !0),
          ((d === u && this._tTime >= this.totalDuration()) || (!d && l)) &&
            (v === this._start || Math.abs(_) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !c) &&
                ((d === u && this._ts > 0) || (!d && this._ts < 0)) &&
                Ki(this, 1),
              !s &&
                !(r < 0 && !l) &&
                (d || l || !u) &&
                (Nt(
                  this,
                  d === u && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(d < u && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }, "render")),
    (t.add = a(function (r, s) {
      var o = this;
      if ((Di(s) || (s = Ht(this, s, r)), !(r instanceof cs))) {
        if (dt(r))
          return (
            r.forEach(function (l) {
              return o.add(l, s);
            }),
            this
          );
        if (je(r)) return this.addLabel(r, s);
        if (ke(r)) r = Ne.delayedCall(0, r);
        else return this;
      }
      return this !== r ? fi(this, r, s) : this;
    }, "add")),
    (t.getChildren = a(function (r, s, o, l) {
      r === void 0 && (r = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        l === void 0 && (l = -1e8);
      for (var u = [], c = this._first; c; )
        c._start >= l &&
          (c instanceof Ne
            ? s && u.push(c)
            : (o && u.push(c), r && u.push.apply(u, c.getChildren(!0, s, o)))),
          (c = c._next);
      return u;
    }, "getChildren")),
    (t.getById = a(function (r) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
        if (s[o].vars.id === r) return s[o];
    }, "getById")),
    (t.remove = a(function (r) {
      return je(r)
        ? this.removeLabel(r)
        : ke(r)
        ? this.killTweensOf(r)
        : (r.parent === this && To(this, r),
          r === this._recent && (this._recent = this._last),
          _r(this));
    }, "remove")),
    (t.totalTime = a(function (r, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Re(
              It.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts)
            )),
          n.prototype.totalTime.call(this, r, s),
          (this._forcing = 0),
          this)
        : this._tTime;
    }, "totalTime")),
    (t.addLabel = a(function (r, s) {
      return (this.labels[r] = Ht(this, s)), this;
    }, "addLabel")),
    (t.removeLabel = a(function (r) {
      return delete this.labels[r], this;
    }, "removeLabel")),
    (t.addPause = a(function (r, s, o) {
      var l = Ne.delayedCall(0, s || as, o);
      return (
        (l.data = "isPause"), (this._hasPause = 1), fi(this, l, Ht(this, r))
      );
    }, "addPause")),
    (t.removePause = a(function (r) {
      var s = this._first;
      for (r = Ht(this, r); s; )
        s._start === r && s.data === "isPause" && Ki(s), (s = s._next);
    }, "removePause")),
    (t.killTweensOf = a(function (r, s, o) {
      for (var l = this.getTweensOf(r, o), u = l.length; u--; )
        qi !== l[u] && l[u].kill(r, s);
      return this;
    }, "killTweensOf")),
    (t.getTweensOf = a(function (r, s) {
      for (var o = [], l = Xt(r), u = this._first, c = Di(s), d; u; )
        u instanceof Ne
          ? im(u._targets, l) &&
            (c
              ? (!qi || (u._initted && u._ts)) &&
                u.globalTime(0) <= s &&
                u.globalTime(u.totalDuration()) > s
              : !s || u.isActive()) &&
            o.push(u)
          : (d = u.getTweensOf(l, s)).length && o.push.apply(o, d),
          (u = u._next);
      return o;
    }, "getTweensOf")),
    (t.tweenTo = a(function (r, s) {
      s = s || {};
      var o = this,
        l = Ht(o, r),
        u = s,
        c = u.startAt,
        d = u.onStart,
        f = u.onStartParams,
        p = u.immediateRender,
        h,
        m = Ne.to(
          o,
          Ft(
            {
              ease: s.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: l,
              overwrite: "auto",
              duration:
                s.duration ||
                Math.abs(
                  (l - (c && "time" in c ? c.time : o._time)) / o.timeScale()
                ) ||
                ut,
              onStart: a(function () {
                if ((o.pause(), !h)) {
                  var w =
                    s.duration ||
                    Math.abs(
                      (l - (c && "time" in c ? c.time : o._time)) /
                        o.timeScale()
                    );
                  m._dur !== w && gn(m, w, 0, 1).render(m._time, !0, !0),
                    (h = 1);
                }
                d && d.apply(m, f || []);
              }, "onStart"),
            },
            s
          )
        );
      return p ? m.render(0) : m;
    }, "tweenTo")),
    (t.tweenFromTo = a(function (r, s, o) {
      return this.tweenTo(s, Ft({ startAt: { time: Ht(this, r) } }, o));
    }, "tweenFromTo")),
    (t.recent = a(function () {
      return this._recent;
    }, "recent")),
    (t.nextLabel = a(function (r) {
      return r === void 0 && (r = this._time), ru(this, Ht(this, r));
    }, "nextLabel")),
    (t.previousLabel = a(function (r) {
      return r === void 0 && (r = this._time), ru(this, Ht(this, r), 1);
    }, "previousLabel")),
    (t.currentLabel = a(function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + ut);
    }, "currentLabel")),
    (t.shiftChildren = a(function (r, s, o) {
      o === void 0 && (o = 0);
      for (var l = this._first, u = this.labels, c; l; )
        l._start >= o && ((l._start += r), (l._end += r)), (l = l._next);
      if (s) for (c in u) u[c] >= o && (u[c] += r);
      return _r(this);
    }, "shiftChildren")),
    (t.invalidate = a(function (r) {
      var s = this._first;
      for (this._lock = 0; s; ) s.invalidate(r), (s = s._next);
      return n.prototype.invalidate.call(this, r);
    }, "invalidate")),
    (t.clear = a(function (r) {
      r === void 0 && (r = !0);
      for (var s = this._first, o; s; ) (o = s._next), this.remove(s), (s = o);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        _r(this)
      );
    }, "clear")),
    (t.totalDuration = a(function (r) {
      var s = 0,
        o = this,
        l = o._last,
        u = vi,
        c,
        d,
        f;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -r : r)
        );
      if (o._dirty) {
        for (f = o.parent; l; )
          (c = l._prev),
            l._dirty && l.totalDuration(),
            (d = l._start),
            d > u && o._sort && l._ts && !o._lock
              ? ((o._lock = 1), (fi(o, l, d - l._delay, 1)._lock = 0))
              : (u = d),
            d < 0 &&
              l._ts &&
              ((s -= d),
              ((!f && !o._dp) || (f && f.smoothChildTiming)) &&
                ((o._start += d / o._ts), (o._time -= d), (o._tTime -= d)),
              o.shiftChildren(-d, !1, -1 / 0),
              (u = 0)),
            l._end > s && l._ts && (s = l._end),
            (l = c);
        gn(o, o === Te && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }, "totalDuration")),
    (e.updateRoot = a(function (r) {
      if ((Te._ts && (Dc(Te, ao(r, Te)), (Oc = It.frame)), It.frame >= Jl)) {
        Jl += Rt.autoSleep || 120;
        var s = Te._first;
        if ((!s || !s._ts) && Rt.autoSleep && It._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || It.sleep();
        }
      }
    }, "updateRoot")),
    e
  );
})(cs);
Ft(yt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Em = a(function (e, t, i, r, s, o, l) {
    var u = new Et(this._pt, e, t, 0, 1, ad, null, s),
      c = 0,
      d = 0,
      f,
      p,
      h,
      m,
      g,
      w,
      b,
      y;
    for (
      u.b = i,
        u.e = r,
        i += "",
        r += "",
        (b = ~r.indexOf("random(")) && (r = ls(r)),
        o && ((y = [i, r]), o(y, e, t), (i = y[0]), (r = y[1])),
        p = i.match(Fo) || [];
      (f = Fo.exec(r));

    )
      (m = f[0]),
        (g = r.substring(c, f.index)),
        h ? (h = (h + 1) % 5) : g.substr(-5) === "rgba(" && (h = 1),
        m !== p[d++] &&
          ((w = parseFloat(p[d - 1]) || 0),
          (u._pt = {
            _next: u._pt,
            p: g || d === 1 ? g : ",",
            s: w,
            c: m.charAt(1) === "=" ? en(w, m) - w : parseFloat(m) - w,
            m: h && h < 4 ? Math.round : 0,
          }),
          (c = Fo.lastIndex));
    return (
      (u.c = c < r.length ? r.substring(c, r.length) : ""),
      (u.fp = l),
      (Cc.test(r) || b) && (u.e = 0),
      (this._pt = u),
      u
    );
  }, "_addComplexStringPropTween"),
  sl = a(function (e, t, i, r, s, o, l, u, c, d) {
    ke(r) && (r = r(s || 0, e, o));
    var f = e[t],
      p =
        i !== "get"
          ? i
          : ke(f)
          ? c
            ? e[
                t.indexOf("set") || !ke(e["get" + t.substr(3)])
                  ? t
                  : "get" + t.substr(3)
              ](c)
            : e[t]()
          : f,
      h = ke(f) ? (c ? Am : sd) : al,
      m;
    if (
      (je(r) &&
        (~r.indexOf("random(") && (r = ls(r)),
        r.charAt(1) === "=" &&
          ((m = en(p, r) + (at(p) || 0)), (m || m === 0) && (r = m))),
      !d || p !== r || ba)
    )
      return !isNaN(p * r) && r !== ""
        ? ((m = new Et(
            this._pt,
            e,
            t,
            +p || 0,
            r - (p || 0),
            typeof f == "boolean" ? Lm : od,
            0,
            h
          )),
          c && (m.fp = c),
          l && m.modifier(l, this, e),
          (this._pt = m))
        : (!f && !(t in e) && el(t, r),
          Em.call(this, e, t, p, r, h, u || Rt.stringFilter, c));
  }, "_addPropTween"),
  Cm = a(function (e, t, i, r, s) {
    if (
      (ke(e) && (e = Wn(e, s, t, i, r)),
      !_i(e) || (e.style && e.nodeType) || dt(e) || Tc(e))
    )
      return je(e) ? Wn(e, s, t, i, r) : e;
    var o = {},
      l;
    for (l in e) o[l] = Wn(e[l], s, t, i, r);
    return o;
  }, "_processVars"),
  id = a(function (e, t, i, r, s, o) {
    var l, u, c, d;
    if (
      Lt[e] &&
      (l = new Lt[e]()).init(
        s,
        l.rawVars ? t[e] : Cm(t[e], r, s, o, i),
        i,
        r,
        o
      ) !== !1 &&
      ((i._pt = u = new Et(i._pt, s, e, 0, 1, l.render, l, 0, l.priority)),
      i !== Ur)
    )
      for (c = i._ptLookup[i._targets.indexOf(s)], d = l._props.length; d--; )
        c[l._props[d]] = u;
    return l;
  }, "_checkPlugin"),
  qi,
  ba,
  ol = a(function n(e, t, i) {
    var r = e.vars,
      s = r.ease,
      o = r.startAt,
      l = r.immediateRender,
      u = r.lazy,
      c = r.onUpdate,
      d = r.runBackwards,
      f = r.yoyoEase,
      p = r.keyframes,
      h = r.autoRevert,
      m = e._dur,
      g = e._startAt,
      w = e._targets,
      b = e.parent,
      y = b && b.data === "nested" ? b.vars.targets : w,
      _ = e._overwrite === "auto" && !Ka,
      v = e.timeline,
      x,
      E,
      C,
      S,
      A,
      k,
      L,
      T,
      M,
      O,
      I,
      N,
      R;
    if (
      (v && (!p || !s) && (s = "none"),
      (e._ease = wr(s, hn.ease)),
      (e._yEase = f ? Qc(wr(f === !0 ? s : f, hn.ease)) : 0),
      f &&
        e._yoyo &&
        !e._repeat &&
        ((f = e._yEase), (e._yEase = e._ease), (e._ease = f)),
      (e._from = !v && !!r.runBackwards),
      !v || (p && !r.stagger))
    ) {
      if (
        ((T = w[0] ? yr(w[0]).harness : 0),
        (N = T && r[T.prop]),
        (x = oo(r, tl)),
        g &&
          (g._zTime < 0 && g.progress(1),
          t < 0 && d && l && !h ? g.render(-1, !0) : g.revert(d && m ? Ws : em),
          (g._lazy = 0)),
        o)
      ) {
        if (
          (Ki(
            (e._startAt = Ne.set(
              w,
              Ft(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: b,
                  immediateRender: !0,
                  lazy: !g && St(u),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    c &&
                    function () {
                      return Nt(e, "onUpdate");
                    },
                  stagger: 0,
                },
                o
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (et || (!l && !h)) && e._startAt.revert(Ws),
          l && m && t <= 0 && i <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (d && m && !g) {
        if (
          (t && (l = !1),
          (C = Ft(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: l && !g && St(u),
              immediateRender: l,
              stagger: 0,
              parent: b,
            },
            x
          )),
          N && (C[T.prop] = N),
          Ki((e._startAt = Ne.set(w, C))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (et ? e._startAt.revert(Ws) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !l)
        )
          n(e._startAt, ut, ut);
        else if (!t) return;
      }
      for (
        e._pt = e._ptCache = 0, u = (m && St(u)) || (u && !m), E = 0;
        E < w.length;
        E++
      ) {
        if (
          ((A = w[E]),
          (L = A._gsap || rl(w)[E]._gsap),
          (e._ptLookup[E] = O = {}),
          ma[L.id] && Xi.length && so(),
          (I = y === w ? E : y.indexOf(A)),
          T &&
            (M = new T()).init(A, N || x, e, I, y) !== !1 &&
            ((e._pt = S =
              new Et(e._pt, A, M.name, 0, 1, M.render, M, 0, M.priority)),
            M._props.forEach(function (B) {
              O[B] = S;
            }),
            M.priority && (k = 1)),
          !T || N)
        )
          for (C in x)
            Lt[C] && (M = id(C, x, e, I, A, y))
              ? M.priority && (k = 1)
              : (O[C] = S =
                  sl.call(e, A, C, "get", x[C], I, y, 0, r.stringFilter));
        e._op && e._op[E] && e.kill(A, e._op[E]),
          _ &&
            e._pt &&
            ((qi = e),
            Te.killTweensOf(A, O, e.globalTime(t)),
            (R = !e.parent),
            (qi = 0)),
          e._pt && u && (ma[L.id] = 1);
      }
      k && ld(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = c),
      (e._initted = (!e._op || e._pt) && !R),
      p && t <= 0 && v.render(vi, !0, !0);
  }, "_initTween"),
  km = a(function (e, t, i, r, s, o, l, u) {
    var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      d,
      f,
      p,
      h;
    if (!c)
      for (
        c = e._ptCache[t] = [], p = e._ptLookup, h = e._targets.length;
        h--;

      ) {
        if (((d = p[h][t]), d && d.d && d.d._pt))
          for (d = d.d._pt; d && d.p !== t && d.fp !== t; ) d = d._next;
        if (!d)
          return (
            (ba = 1),
            (e.vars[t] = "+=0"),
            ol(e, l),
            (ba = 0),
            u ? os(t + " not eligible for reset") : 1
          );
        c.push(d);
      }
    for (h = c.length; h--; )
      (f = c[h]),
        (d = f._pt || f),
        (d.s = (r || r === 0) && !s ? r : d.s + (r || 0) + o * d.c),
        (d.c = i - d.s),
        f.e && (f.e = Oe(i) + at(f.e)),
        f.b && (f.b = d.s + at(f.b));
  }, "_updatePropTweens"),
  Pm = a(function (e, t) {
    var i = e[0] ? yr(e[0]).harness : 0,
      r = i && i.aliases,
      s,
      o,
      l,
      u;
    if (!r) return t;
    s = pn({}, t);
    for (o in r)
      if (o in s) for (u = r[o].split(","), l = u.length; l--; ) s[u[l]] = s[o];
    return s;
  }, "_addAliasesToVars"),
  Mm = a(function (e, t, i, r) {
    var s = t.ease || r || "power1.inOut",
      o,
      l;
    if (dt(t))
      (l = i[e] || (i[e] = [])),
        t.forEach(function (u, c) {
          return l.push({ t: (c / (t.length - 1)) * 100, v: u, e: s });
        });
    else
      for (o in t)
        (l = i[o] || (i[o] = [])),
          o === "ease" || l.push({ t: parseFloat(e), v: t[o], e: s });
  }, "_parseKeyframe"),
  Wn = a(function (e, t, i, r, s) {
    return ke(e)
      ? e.call(t, i, r, s)
      : je(e) && ~e.indexOf("random(")
      ? ls(e)
      : e;
  }, "_parseFuncOrString"),
  rd = il + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  nd = {};
Tt(rd + ",id,stagger,delay,duration,paused,scrollTrigger", function (n) {
  return (nd[n] = 1);
});
var Ne = (function (n) {
  xc(e, n);
  function e(i, r, s, o) {
    var l;
    typeof r == "number" && ((s.duration = r), (r = s), (s = null)),
      (l = n.call(this, o ? r : Vn(r)) || this);
    var u = l.vars,
      c = u.duration,
      d = u.delay,
      f = u.immediateRender,
      p = u.stagger,
      h = u.overwrite,
      m = u.keyframes,
      g = u.defaults,
      w = u.scrollTrigger,
      b = u.yoyoEase,
      y = r.parent || Te,
      _ = (dt(i) || Tc(i) ? Di(i[0]) : "length" in r) ? [i] : Xt(i),
      v,
      x,
      E,
      C,
      S,
      A,
      k,
      L;
    if (
      ((l._targets = _.length
        ? rl(_)
        : os(
            "GSAP target " + i + " not found. https://gsap.com",
            !Rt.nullTargetWarn
          ) || []),
      (l._ptLookup = []),
      (l._overwrite = h),
      m || p || Ss(c) || Ss(d))
    ) {
      if (
        ((r = l.vars),
        (v = l.timeline =
          new yt({
            data: "nested",
            defaults: g || {},
            targets: y && y.data === "nested" ? y.vars.targets : _,
          })),
        v.kill(),
        (v.parent = v._dp = Ti(l)),
        (v._start = 0),
        p || Ss(c) || Ss(d))
      ) {
        if (((C = _.length), (k = p && qc(p)), _i(p)))
          for (S in p) ~rd.indexOf(S) && (L || (L = {}), (L[S] = p[S]));
        for (x = 0; x < C; x++)
          (E = oo(r, nd)),
            (E.stagger = 0),
            b && (E.yoyoEase = b),
            L && pn(E, L),
            (A = _[x]),
            (E.duration = +Wn(c, Ti(l), x, A, _)),
            (E.delay = (+Wn(d, Ti(l), x, A, _) || 0) - l._delay),
            !p &&
              C === 1 &&
              E.delay &&
              ((l._delay = d = E.delay), (l._start += d), (E.delay = 0)),
            v.to(A, E, k ? k(x, A, _) : 0),
            (v._ease = Je.none);
        v.duration() ? (c = d = 0) : (l.timeline = 0);
      } else if (m) {
        Vn(Ft(v.vars.defaults, { ease: "none" })),
          (v._ease = wr(m.ease || r.ease || "none"));
        var T = 0,
          M,
          O,
          I;
        if (dt(m))
          m.forEach(function (N) {
            return v.to(_, N, ">");
          }),
            v.duration();
        else {
          E = {};
          for (S in m)
            S === "ease" || S === "easeEach" || Mm(S, m[S], E, m.easeEach);
          for (S in E)
            for (
              M = E[S].sort(function (N, R) {
                return N.t - R.t;
              }),
                T = 0,
                x = 0;
              x < M.length;
              x++
            )
              (O = M[x]),
                (I = {
                  ease: O.e,
                  duration: ((O.t - (x ? M[x - 1].t : 0)) / 100) * c,
                }),
                (I[S] = O.v),
                v.to(_, I, T),
                (T += I.duration);
          v.duration() < c && v.to({}, { duration: c - v.duration() });
        }
      }
      c || l.duration((c = v.duration()));
    } else l.timeline = 0;
    return (
      h === !0 && !Ka && ((qi = Ti(l)), Te.killTweensOf(_), (qi = 0)),
      fi(y, Ti(l), s),
      r.reversed && l.reverse(),
      r.paused && l.paused(!0),
      (f ||
        (!c &&
          !m &&
          l._start === Re(y._time) &&
          St(f) &&
          om(Ti(l)) &&
          y.data !== "nested")) &&
        ((l._tTime = -1e-8), l.render(Math.max(0, -d) || 0)),
      w && $c(Ti(l), w),
      l
    );
  }
  a(e, "Tween");
  var t = e.prototype;
  return (
    (t.render = a(function (r, s, o) {
      var l = this._time,
        u = this._tDur,
        c = this._dur,
        d = r < 0,
        f = r > u - ut && !d ? u : r < ut ? 0 : r,
        p,
        h,
        m,
        g,
        w,
        b,
        y,
        _,
        v;
      if (!c) lm(this, r, s, o);
      else if (
        f !== this._tTime ||
        !r ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== d) ||
        this._lazy
      ) {
        if (((p = f), (_ = this.timeline), this._repeat)) {
          if (((g = c + this._rDelay), this._repeat < -1 && d))
            return this.totalTime(g * 100 + r, s, o);
          if (
            ((p = Re(f % g)),
            f === u
              ? ((m = this._repeat), (p = c))
              : ((w = Re(f / g)),
                (m = ~~w),
                m && m === w ? ((p = c), m--) : p > c && (p = c)),
            (b = this._yoyo && m & 1),
            b && ((v = this._yEase), (p = c - p)),
            (w = mn(this._tTime, g)),
            p === l && !o && this._initted && m === w)
          )
            return (this._tTime = f), this;
          m !== w &&
            (_ && this._yEase && Jc(_, b),
            this.vars.repeatRefresh &&
              !b &&
              !this._lock &&
              p !== g &&
              this._initted &&
              ((this._lock = o = 1),
              (this.render(Re(g * m), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Fc(this, d ? r : p, o, s, f)) return (this._tTime = 0), this;
          if (l !== this._time && !(o && this.vars.repeatRefresh && m !== w))
            return this;
          if (c !== this._dur) return this.render(r, s, o);
        }
        if (
          ((this._tTime = f),
          (this._time = p),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = y = (v || this._ease)(p / c)),
          this._from && (this.ratio = y = 1 - y),
          !l && f && !s && !w && (Nt(this, "onStart"), this._tTime !== f))
        )
          return this;
        for (h = this._pt; h; ) h.r(y, h.d), (h = h._next);
        (_ && _.render(r < 0 ? r : _._dur * _._ease(p / this._dur), s, o)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !s &&
            (d && ga(this, r, s, o), Nt(this, "onUpdate")),
          this._repeat &&
            m !== w &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            Nt(this, "onRepeat"),
          (f === this._tDur || !f) &&
            this._tTime === f &&
            (d && !this._onUpdate && ga(this, r, !0, !0),
            (r || !c) &&
              ((f === this._tDur && this._ts > 0) || (!f && this._ts < 0)) &&
              Ki(this, 1),
            !s &&
              !(d && !l) &&
              (f || l || b) &&
              (Nt(this, f === u ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(f < u && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }, "render")),
    (t.targets = a(function () {
      return this._targets;
    }, "targets")),
    (t.invalidate = a(function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        n.prototype.invalidate.call(this, r)
      );
    }, "invalidate")),
    (t.resetTo = a(function (r, s, o, l, u) {
      us || It.wake(), this._ts || this.play();
      var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        d;
      return (
        this._initted || ol(this, c),
        (d = this._ease(c / this._dur)),
        km(this, r, s, o, l, d, c, u)
          ? this.resetTo(r, s, o, l, 1)
          : (Co(this, 0),
            this.parent ||
              Nc(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }, "resetTo")),
    (t.kill = a(function (r, s) {
      if ((s === void 0 && (s = "all"), !r && (!s || s === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? Ln(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!et),
          this
        );
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, s, qi && qi.vars.overwrite !== !0)
            ._first || Ln(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            gn(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var l = this._targets,
        u = r ? Xt(r) : l,
        c = this._ptLookup,
        d = this._pt,
        f,
        p,
        h,
        m,
        g,
        w,
        b;
      if ((!s || s === "all") && nm(l, u))
        return s === "all" && (this._pt = 0), Ln(this);
      for (
        f = this._op = this._op || [],
          s !== "all" &&
            (je(s) &&
              ((g = {}),
              Tt(s, function (y) {
                return (g[y] = 1);
              }),
              (s = g)),
            (s = Pm(l, s))),
          b = l.length;
        b--;

      )
        if (~u.indexOf(l[b])) {
          (p = c[b]),
            s === "all"
              ? ((f[b] = s), (m = p), (h = {}))
              : ((h = f[b] = f[b] || {}), (m = s));
          for (g in m)
            (w = p && p[g]),
              w &&
                ((!("kill" in w.d) || w.d.kill(g) === !0) && To(this, w, "_pt"),
                delete p[g]),
              h !== "all" && (h[g] = 1);
        }
      return this._initted && !this._pt && d && Ln(this), this;
    }, "kill")),
    (e.to = a(function (r, s) {
      return new e(r, s, arguments[2]);
    }, "to")),
    (e.from = a(function (r, s) {
      return qn(1, arguments);
    }, "from")),
    (e.delayedCall = a(function (r, s, o, l) {
      return new e(s, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: l,
      });
    }, "delayedCall")),
    (e.fromTo = a(function (r, s, o) {
      return qn(2, arguments);
    }, "fromTo")),
    (e.set = a(function (r, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(r, s);
    }, "set")),
    (e.killTweensOf = a(function (r, s, o) {
      return Te.killTweensOf(r, s, o);
    }, "killTweensOf")),
    e
  );
})(cs);
Ft(Ne.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Tt("staggerTo,staggerFrom,staggerFromTo", function (n) {
  Ne[n] = function () {
    var e = new yt(),
      t = ya.call(arguments, 0);
    return t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), e[n].apply(e, t);
  };
});
var al = a(function (e, t, i) {
    return (e[t] = i);
  }, "_setterPlain"),
  sd = a(function (e, t, i) {
    return e[t](i);
  }, "_setterFunc"),
  Am = a(function (e, t, i, r) {
    return e[t](r.fp, i);
  }, "_setterFuncWithParam"),
  Om = a(function (e, t, i) {
    return e.setAttribute(t, i);
  }, "_setterAttribute"),
  ll = a(function (e, t) {
    return ke(e[t]) ? sd : Za(e[t]) && e.setAttribute ? Om : al;
  }, "_getSetter"),
  od = a(function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  }, "_renderPlain"),
  Lm = a(function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  }, "_renderBoolean"),
  ad = a(function (e, t) {
    var i = t._pt,
      r = "";
    if (!e && t.b) r = t.b;
    else if (e === 1 && t.e) r = t.e;
    else {
      for (; i; )
        (r =
          i.p +
          (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) +
          r),
          (i = i._next);
      r += t.c;
    }
    t.set(t.t, t.p, r, t);
  }, "_renderComplexString"),
  ul = a(function (e, t) {
    for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
  }, "_renderPropTweens"),
  Dm = a(function (e, t, i, r) {
    for (var s = this._pt, o; s; )
      (o = s._next), s.p === r && s.modifier(e, t, i), (s = o);
  }, "_addPluginModifier"),
  Im = a(function (e) {
    for (var t = this._pt, i, r; t; )
      (r = t._next),
        (t.p === e && !t.op) || t.op === e
          ? To(this, t, "_pt")
          : t.dep || (i = 1),
        (t = r);
    return !i;
  }, "_killPropTweensOf"),
  zm = a(function (e, t, i, r) {
    r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
  }, "_setterWithModifier"),
  ld = a(function (e) {
    for (var t = e._pt, i, r, s, o; t; ) {
      for (i = t._next, r = s; r && r.pr > t.pr; ) r = r._next;
      (t._prev = r ? r._prev : o) ? (t._prev._next = t) : (s = t),
        (t._next = r) ? (r._prev = t) : (o = t),
        (t = i);
    }
    e._pt = s;
  }, "_sortPropTweensByPriority"),
  Et = (function () {
    function n(t, i, r, s, o, l, u, c, d) {
      (this.t = i),
        (this.s = s),
        (this.c = o),
        (this.p = r),
        (this.r = l || od),
        (this.d = u || this),
        (this.set = c || al),
        (this.pr = d || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    a(n, "PropTween");
    var e = n.prototype;
    return (
      (e.modifier = a(function (i, r, s) {
        (this.mSet = this.mSet || this.set),
          (this.set = zm),
          (this.m = i),
          (this.mt = s),
          (this.tween = r);
      }, "modifier")),
      n
    );
  })();
Tt(
  il +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (n) {
    return (tl[n] = 1);
  }
);
$t.TweenMax = $t.TweenLite = Ne;
$t.TimelineLite = $t.TimelineMax = yt;
Te = new yt({
  sortChildren: !1,
  defaults: hn,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Rt.stringFilter = Zc;
var br = [],
  Gs = {},
  Nm = [],
  su = 0,
  Rm = 0,
  Ho = a(function (e) {
    return (Gs[e] || Nm).map(function (t) {
      return t();
    });
  }, "_dispatch"),
  xa = a(function () {
    var e = Date.now(),
      t = [];
    e - su > 2 &&
      (Ho("matchMediaInit"),
      br.forEach(function (i) {
        var r = i.queries,
          s = i.conditions,
          o,
          l,
          u,
          c;
        for (l in r)
          (o = ui.matchMedia(r[l]).matches),
            o && (u = 1),
            o !== s[l] && ((s[l] = o), (c = 1));
        c && (i.revert(), u && t.push(i));
      }),
      Ho("matchMediaRevert"),
      t.forEach(function (i) {
        return i.onMatch(i, function (r) {
          return i.add(null, r);
        });
      }),
      (su = e),
      Ho("matchMedia"));
  }, "_onMediaChange"),
  ud = (function () {
    function n(t, i) {
      (this.selector = i && _a(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Rm++),
        t && this.add(t);
    }
    a(n, "Context");
    var e = n.prototype;
    return (
      (e.add = a(function (i, r, s) {
        ke(i) && ((s = r), (r = i), (i = ke));
        var o = this,
          l = a(function () {
            var c = we,
              d = o.selector,
              f;
            return (
              c && c !== o && c.data.push(o),
              s && (o.selector = _a(s)),
              (we = o),
              (f = r.apply(o, arguments)),
              ke(f) && o._r.push(f),
              (we = c),
              (o.selector = d),
              (o.isReverted = !1),
              f
            );
          }, "f");
        return (
          (o.last = l),
          i === ke
            ? l(o, function (u) {
                return o.add(null, u);
              })
            : i
            ? (o[i] = l)
            : l
        );
      }, "add")),
      (e.ignore = a(function (i) {
        var r = we;
        (we = null), i(this), (we = r);
      }, "ignore")),
      (e.getTweens = a(function () {
        var i = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof n
              ? i.push.apply(i, r.getTweens())
              : r instanceof Ne &&
                  !(r.parent && r.parent.data === "nested") &&
                  i.push(r);
          }),
          i
        );
      }, "getTweens")),
      (e.clear = a(function () {
        this._r.length = this.data.length = 0;
      }, "clear")),
      (e.kill = a(function (i, r) {
        var s = this;
        if (
          (i
            ? (function () {
                for (var l = s.getTweens(), u = s.data.length, c; u--; )
                  (c = s.data[u]),
                    c.data === "isFlip" &&
                      (c.revert(),
                      c.getChildren(!0, !0, !1).forEach(function (d) {
                        return l.splice(l.indexOf(d), 1);
                      }));
                for (
                  l
                    .map(function (d) {
                      return {
                        g:
                          d._dur ||
                          d._delay ||
                          (d._sat && !d._sat.vars.immediateRender)
                            ? d.globalTime(0)
                            : -1 / 0,
                        t: d,
                      };
                    })
                    .sort(function (d, f) {
                      return f.g - d.g || -1 / 0;
                    })
                    .forEach(function (d) {
                      return d.t.revert(i);
                    }),
                    u = s.data.length;
                  u--;

                )
                  (c = s.data[u]),
                    c instanceof yt
                      ? c.data !== "nested" &&
                        (c.scrollTrigger && c.scrollTrigger.revert(), c.kill())
                      : !(c instanceof Ne) && c.revert && c.revert(i);
                s._r.forEach(function (d) {
                  return d(i, s);
                }),
                  (s.isReverted = !0);
              })()
            : this.data.forEach(function (l) {
                return l.kill && l.kill();
              }),
          this.clear(),
          r)
        )
          for (var o = br.length; o--; )
            br[o].id === this.id && br.splice(o, 1);
      }, "kill")),
      (e.revert = a(function (i) {
        this.kill(i || {});
      }, "revert")),
      n
    );
  })(),
  $m = (function () {
    function n(t) {
      (this.contexts = []), (this.scope = t), we && we.data.push(this);
    }
    a(n, "MatchMedia");
    var e = n.prototype;
    return (
      (e.add = a(function (i, r, s) {
        _i(i) || (i = { matches: i });
        var o = new ud(0, s || this.scope),
          l = (o.conditions = {}),
          u,
          c,
          d;
        we && !o.selector && (o.selector = we.selector),
          this.contexts.push(o),
          (r = o.add("onMatch", r)),
          (o.queries = i);
        for (c in i)
          c === "all"
            ? (d = 1)
            : ((u = ui.matchMedia(i[c])),
              u &&
                (br.indexOf(o) < 0 && br.push(o),
                (l[c] = u.matches) && (d = 1),
                u.addListener
                  ? u.addListener(xa)
                  : u.addEventListener("change", xa)));
        return (
          d &&
            r(o, function (f) {
              return o.add(null, f);
            }),
          this
        );
      }, "add")),
      (e.revert = a(function (i) {
        this.kill(i || {});
      }, "revert")),
      (e.kill = a(function (i) {
        this.contexts.forEach(function (r) {
          return r.kill(i, !0);
        });
      }, "kill")),
      n
    );
  })(),
  lo = {
    registerPlugin: a(function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      t.forEach(function (r) {
        return jc(r);
      });
    }, "registerPlugin"),
    timeline: a(function (e) {
      return new yt(e);
    }, "timeline"),
    getTweensOf: a(function (e, t) {
      return Te.getTweensOf(e, t);
    }, "getTweensOf"),
    getProperty: a(function (e, t, i, r) {
      je(e) && (e = Xt(e)[0]);
      var s = yr(e || {}).get,
        o = i ? zc : Ic;
      return (
        i === "native" && (i = ""),
        e &&
          (t
            ? o(((Lt[t] && Lt[t].get) || s)(e, t, i, r))
            : function (l, u, c) {
                return o(((Lt[l] && Lt[l].get) || s)(e, l, u, c));
              })
      );
    }, "getProperty"),
    quickSetter: a(function (e, t, i) {
      if (((e = Xt(e)), e.length > 1)) {
        var r = e.map(function (d) {
            return kt.quickSetter(d, t, i);
          }),
          s = r.length;
        return function (d) {
          for (var f = s; f--; ) r[f](d);
        };
      }
      e = e[0] || {};
      var o = Lt[t],
        l = yr(e),
        u = (l.harness && (l.harness.aliases || {})[t]) || t,
        c = o
          ? function (d) {
              var f = new o();
              (Ur._pt = 0),
                f.init(e, i ? d + i : d, Ur, 0, [e]),
                f.render(1, f),
                Ur._pt && ul(1, Ur);
            }
          : l.set(e, u);
      return o
        ? c
        : function (d) {
            return c(e, u, i ? d + i : d, l, 1);
          };
    }, "quickSetter"),
    quickTo: a(function (e, t, i) {
      var r,
        s = kt.to(
          e,
          Ft(
            ((r = {}), (r[t] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
            i || {}
          )
        ),
        o = a(function (u, c, d) {
          return s.resetTo(t, u, c, d);
        }, "func");
      return (o.tween = s), o;
    }, "quickTo"),
    isTweening: a(function (e) {
      return Te.getTweensOf(e, !0).length > 0;
    }, "isTweening"),
    defaults: a(function (e) {
      return e && e.ease && (e.ease = wr(e.ease, hn.ease)), eu(hn, e || {});
    }, "defaults"),
    config: a(function (e) {
      return eu(Rt, e || {});
    }, "config"),
    registerEffect: a(function (e) {
      var t = e.name,
        i = e.effect,
        r = e.plugins,
        s = e.defaults,
        o = e.extendTimeline;
      (r || "").split(",").forEach(function (l) {
        return (
          l && !Lt[l] && !$t[l] && os(t + " effect requires " + l + " plugin.")
        );
      }),
        (Bo[t] = function (l, u, c) {
          return i(Xt(l), Ft(u || {}, s), c);
        }),
        o &&
          (yt.prototype[t] = function (l, u, c) {
            return this.add(Bo[t](l, _i(u) ? u : (c = u) && {}, this), c);
          });
    }, "registerEffect"),
    registerEase: a(function (e, t) {
      Je[e] = wr(t);
    }, "registerEase"),
    parseEase: a(function (e, t) {
      return arguments.length ? wr(e, t) : Je;
    }, "parseEase"),
    getById: a(function (e) {
      return Te.getById(e);
    }, "getById"),
    exportRoot: a(function (e, t) {
      e === void 0 && (e = {});
      var i = new yt(e),
        r,
        s;
      for (
        i.smoothChildTiming = St(e.smoothChildTiming),
          Te.remove(i),
          i._dp = 0,
          i._time = i._tTime = Te._time,
          r = Te._first;
        r;

      )
        (s = r._next),
          (t ||
            !(
              !r._dur &&
              r instanceof Ne &&
              r.vars.onComplete === r._targets[0]
            )) &&
            fi(i, r, r._start - r._delay),
          (r = s);
      return fi(Te, i, 0), i;
    }, "exportRoot"),
    context: a(function (e, t) {
      return e ? new ud(e, t) : we;
    }, "context"),
    matchMedia: a(function (e) {
      return new $m(e);
    }, "matchMedia"),
    matchMediaRefresh: a(function () {
      return (
        br.forEach(function (e) {
          var t = e.conditions,
            i,
            r;
          for (r in t) t[r] && ((t[r] = !1), (i = 1));
          i && e.revert();
        }) || xa()
      );
    }, "matchMediaRefresh"),
    addEventListener: a(function (e, t) {
      var i = Gs[e] || (Gs[e] = []);
      ~i.indexOf(t) || i.push(t);
    }, "addEventListener"),
    removeEventListener: a(function (e, t) {
      var i = Gs[e],
        r = i && i.indexOf(t);
      r >= 0 && i.splice(r, 1);
    }, "removeEventListener"),
    utils: {
      wrap: gm,
      wrapYoyo: vm,
      distribute: qc,
      random: Hc,
      snap: Wc,
      normalize: mm,
      getUnit: at,
      clamp: dm,
      splitColor: Uc,
      toArray: Xt,
      selector: _a,
      mapRange: Yc,
      pipe: hm,
      unitize: pm,
      interpolate: ym,
      shuffle: Vc,
    },
    install: Mc,
    effects: Bo,
    ticker: It,
    updateRoot: yt.updateRoot,
    plugins: Lt,
    globalTimeline: Te,
    core: {
      PropTween: Et,
      globals: Ac,
      Tween: Ne,
      Timeline: yt,
      Animation: cs,
      getCache: yr,
      _removeLinkedListItem: To,
      reverting: a(function () {
        return et;
      }, "reverting"),
      context: a(function (e) {
        return e && we && (we.data.push(e), (e._ctx = we)), we;
      }, "context"),
      suppressOverwrites: a(function (e) {
        return (Ka = e);
      }, "suppressOverwrites"),
    },
  };
Tt("to,from,fromTo,delayedCall,set,killTweensOf", function (n) {
  return (lo[n] = Ne[n]);
});
It.add(yt.updateRoot);
Ur = lo.to({}, { duration: 0 });
var Fm = a(function (e, t) {
    for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
      i = i._next;
    return i;
  }, "_getPluginPropTween"),
  Bm = a(function (e, t) {
    var i = e._targets,
      r,
      s,
      o;
    for (r in t)
      for (s = i.length; s--; )
        (o = e._ptLookup[s][r]),
          o &&
            (o = o.d) &&
            (o._pt && (o = Fm(o, r)),
            o && o.modifier && o.modifier(t[r], e, i[s], r));
  }, "_addModifiers"),
  Go = a(function (e, t) {
    return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: a(function (r, s, o) {
        o._onInit = function (l) {
          var u, c;
          if (
            (je(s) &&
              ((u = {}),
              Tt(s, function (d) {
                return (u[d] = 1);
              }),
              (s = u)),
            t)
          ) {
            u = {};
            for (c in s) u[c] = t(s[c]);
            s = u;
          }
          Bm(l, s);
        };
      }, "init"),
    };
  }, "_buildModifierPlugin"),
  kt =
    lo.registerPlugin(
      {
        name: "attr",
        init: a(function (e, t, i, r, s) {
          var o, l, u;
          this.tween = i;
          for (o in t)
            (u = e.getAttribute(o) || ""),
              (l = this.add(
                e,
                "setAttribute",
                (u || 0) + "",
                t[o],
                r,
                s,
                0,
                0,
                o
              )),
              (l.op = o),
              (l.b = u),
              this._props.push(o);
        }, "init"),
        render: a(function (e, t) {
          for (var i = t._pt; i; )
            et ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
        }, "render"),
      },
      {
        name: "endArray",
        headless: 1,
        init: a(function (e, t) {
          for (var i = t.length; i--; )
            this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
        }, "init"),
      },
      Go("roundProps", wa),
      Go("modifiers"),
      Go("snap", Wc)
    ) || lo;
Ne.version = yt.version = kt.version = "3.13.0";
Pc = 1;
Qa() && vn();
var ou,
  Wi,
  tn,
  cl,
  gr,
  au,
  dl,
  Vm = a(function () {
    return typeof window < "u";
  }, "_windowExists"),
  Ii = {},
  fr = 180 / Math.PI,
  rn = Math.PI / 180,
  Vr = Math.atan2,
  lu = 1e8,
  fl = /([A-Z])/g,
  qm = /(left|right|width|margin|padding|x)/i,
  Wm = /[\s,\(]\S/,
  pi = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Sa = a(function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  }, "_renderCSSProp"),
  Hm = a(function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  }, "_renderPropWithEnd"),
  Gm = a(function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  }, "_renderCSSPropWithBeginning"),
  Ym = a(function (e, t) {
    var i = t.s + t.c * e;
    t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
  }, "_renderRoundedCSSProp"),
  cd = a(function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  }, "_renderNonTweeningValue"),
  dd = a(function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  }, "_renderNonTweeningValueOnlyAtEnd"),
  Xm = a(function (e, t, i) {
    return (e.style[t] = i);
  }, "_setterCSSStyle"),
  jm = a(function (e, t, i) {
    return e.style.setProperty(t, i);
  }, "_setterCSSProp"),
  Um = a(function (e, t, i) {
    return (e._gsap[t] = i);
  }, "_setterTransform"),
  Km = a(function (e, t, i) {
    return (e._gsap.scaleX = e._gsap.scaleY = i);
  }, "_setterScale"),
  Zm = a(function (e, t, i, r, s) {
    var o = e._gsap;
    (o.scaleX = o.scaleY = i), o.renderTransform(s, o);
  }, "_setterScaleWithRender"),
  Qm = a(function (e, t, i, r, s) {
    var o = e._gsap;
    (o[t] = i), o.renderTransform(s, o);
  }, "_setterTransformWithRender"),
  Ee = "transform",
  Ct = Ee + "Origin",
  Jm = a(function n(e, t) {
    var i = this,
      r = this.target,
      s = r.style,
      o = r._gsap;
    if (e in Ii && s) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = pi[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (l) {
                return (i.tfm[l] = Ei(r, l));
              })
            : (this.tfm[e] = o.x ? o[e] : Ei(r, e)),
          e === Ct && (this.tfm.zOrigin = o.zOrigin);
      else
        return pi.transform.split(",").forEach(function (l) {
          return n.call(i, l, t);
        });
      if (this.props.indexOf(Ee) >= 0) return;
      o.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(Ct, t, "")),
        (e = Ee);
    }
    (s || t) && this.props.push(e, t, s[e]);
  }, "_saveStyle"),
  fd = a(function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  }, "_removeIndependentTransforms"),
  eg = a(function () {
    var e = this.props,
      t = this.target,
      i = t.style,
      r = t._gsap,
      s,
      o;
    for (s = 0; s < e.length; s += 3)
      e[s + 1]
        ? e[s + 1] === 2
          ? t[e[s]](e[s + 2])
          : (t[e[s]] = e[s + 2])
        : e[s + 2]
        ? (i[e[s]] = e[s + 2])
        : i.removeProperty(
            e[s].substr(0, 2) === "--"
              ? e[s]
              : e[s].replace(fl, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (o in this.tfm) r[o] = this.tfm[o];
      r.svg &&
        (r.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        (s = dl()),
        (!s || !s.isStart) &&
          !i[Ee] &&
          (fd(i),
          r.zOrigin &&
            i[Ct] &&
            ((i[Ct] += " " + r.zOrigin + "px"),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1));
    }
  }, "_revertStyle"),
  hd = a(function (e, t) {
    var i = { target: e, props: [], revert: eg, save: Jm };
    return (
      e._gsap || kt.core.getCache(e),
      t &&
        e.style &&
        e.nodeType &&
        t.split(",").forEach(function (r) {
          return i.save(r);
        }),
      i
    );
  }, "_getStyleSaver"),
  pd,
  Ta = a(function (e, t) {
    var i = Wi.createElementNS
      ? Wi.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : Wi.createElement(e);
    return i && i.style ? i : Wi.createElement(e);
  }, "_createElement"),
  jt = a(function n(e, t, i) {
    var r = getComputedStyle(e);
    return (
      r[t] ||
      r.getPropertyValue(t.replace(fl, "-$1").toLowerCase()) ||
      r.getPropertyValue(t) ||
      (!i && n(e, yn(t) || t, 1)) ||
      ""
    );
  }, "_getComputedProperty"),
  uu = "O,Moz,ms,Ms,Webkit".split(","),
  yn = a(function (e, t, i) {
    var r = t || gr,
      s = r.style,
      o = 5;
    if (e in s && !i) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      o-- && !(uu[o] + e in s);

    );
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? uu[o] : "") + e;
  }, "_checkPropPrefix"),
  Ea = a(function () {
    Vm() &&
      window.document &&
      ((ou = window),
      (Wi = ou.document),
      (tn = Wi.documentElement),
      (gr = Ta("div") || { style: {} }),
      Ta("div"),
      (Ee = yn(Ee)),
      (Ct = Ee + "Origin"),
      (gr.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (pd = !!yn("perspective")),
      (dl = kt.core.reverting),
      (cl = 1));
  }, "_initCore"),
  cu = a(function (e) {
    var t = e.ownerSVGElement,
      i = Ta(
        "svg",
        (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      r = e.cloneNode(!0),
      s;
    (r.style.display = "block"), i.appendChild(r), tn.appendChild(i);
    try {
      s = r.getBBox();
    } catch {}
    return i.removeChild(r), tn.removeChild(i), s;
  }, "_getReparentedCloneBBox"),
  du = a(function (e, t) {
    for (var i = t.length; i--; )
      if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
  }, "_getAttributeFallbacks"),
  md = a(function (e) {
    var t, i;
    try {
      t = e.getBBox();
    } catch {
      (t = cu(e)), (i = 1);
    }
    return (
      (t && (t.width || t.height)) || i || (t = cu(e)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +du(e, ["x", "cx", "x1"]) || 0,
            y: +du(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  }, "_getBBox"),
  gd = a(function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && md(e));
  }, "_isSVG"),
  Mr = a(function (e, t) {
    if (t) {
      var i = e.style,
        r;
      t in Ii && t !== Ct && (t = Ee),
        i.removeProperty
          ? ((r = t.substr(0, 2)),
            (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
            i.removeProperty(
              r === "--" ? t : t.replace(fl, "-$1").toLowerCase()
            ))
          : i.removeAttribute(t);
    }
  }, "_removeProperty"),
  Hi = a(function (e, t, i, r, s, o) {
    var l = new Et(e._pt, t, i, 0, 1, o ? dd : cd);
    return (e._pt = l), (l.b = r), (l.e = s), e._props.push(i), l;
  }, "_addNonTweeningPT"),
  fu = { deg: 1, rad: 1, turn: 1 },
  tg = { grid: 1, flex: 1 },
  Zi = a(function n(e, t, i, r) {
    var s = parseFloat(i) || 0,
      o = (i + "").trim().substr((s + "").length) || "px",
      l = gr.style,
      u = qm.test(t),
      c = e.tagName.toLowerCase() === "svg",
      d = (c ? "client" : "offset") + (u ? "Width" : "Height"),
      f = 100,
      p = r === "px",
      h = r === "%",
      m,
      g,
      w,
      b;
    if (r === o || !s || fu[r] || fu[o]) return s;
    if (
      (o !== "px" && !p && (s = n(e, t, i, "px")),
      (b = e.getCTM && gd(e)),
      (h || o === "%") && (Ii[t] || ~t.indexOf("adius")))
    )
      return (
        (m = b ? e.getBBox()[u ? "width" : "height"] : e[d]),
        Oe(h ? (s / m) * f : (s / 100) * m)
      );
    if (
      ((l[u ? "width" : "height"] = f + (p ? o : r)),
      (g =
        (r !== "rem" && ~t.indexOf("adius")) ||
        (r === "em" && e.appendChild && !c)
          ? e
          : e.parentNode),
      b && (g = (e.ownerSVGElement || {}).parentNode),
      (!g || g === Wi || !g.appendChild) && (g = Wi.body),
      (w = g._gsap),
      w && h && w.width && u && w.time === It.time && !w.uncache)
    )
      return Oe((s / w.width) * f);
    if (h && (t === "height" || t === "width")) {
      var y = e.style[t];
      (e.style[t] = f + r), (m = e[d]), y ? (e.style[t] = y) : Mr(e, t);
    } else (h || o === "%") && !tg[jt(g, "display")] && (l.position = jt(e, "position")), g === e && (l.position = "static"), g.appendChild(gr), (m = gr[d]), g.removeChild(gr), (l.position = "absolute");
    return (
      u && h && ((w = yr(g)), (w.time = It.time), (w.width = g[d])),
      Oe(p ? (m * s) / f : m && s ? (f / m) * s : 0)
    );
  }, "_convertToUnit"),
  Ei = a(function (e, t, i, r) {
    var s;
    return (
      cl || Ea(),
      t in pi &&
        t !== "transform" &&
        ((t = pi[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      Ii[t] && t !== "transform"
        ? ((s = fs(e, r)),
          (s =
            t !== "transformOrigin"
              ? s[t]
              : s.svg
              ? s.origin
              : co(jt(e, Ct)) + " " + s.zOrigin + "px"))
        : ((s = e.style[t]),
          (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) &&
            (s =
              (uo[t] && uo[t](e, t, i)) ||
              jt(e, t) ||
              Lc(e, t) ||
              (t === "opacity" ? 1 : 0))),
      i && !~(s + "").trim().indexOf(" ") ? Zi(e, t, s, i) + i : s
    );
  }, "_get"),
  ig = a(function (e, t, i, r) {
    if (!i || i === "none") {
      var s = yn(t, e, 1),
        o = s && jt(e, s, 1);
      o && o !== i
        ? ((t = s), (i = o))
        : t === "borderColor" && (i = jt(e, "borderTopColor"));
    }
    var l = new Et(this._pt, e.style, t, 0, 1, ad),
      u = 0,
      c = 0,
      d,
      f,
      p,
      h,
      m,
      g,
      w,
      b,
      y,
      _,
      v,
      x;
    if (
      ((l.b = i),
      (l.e = r),
      (i += ""),
      (r += ""),
      r.substring(0, 6) === "var(--" &&
        (r = jt(e, r.substring(4, r.indexOf(")")))),
      r === "auto" &&
        ((g = e.style[t]),
        (e.style[t] = r),
        (r = jt(e, t) || r),
        g ? (e.style[t] = g) : Mr(e, t)),
      (d = [i, r]),
      Zc(d),
      (i = d[0]),
      (r = d[1]),
      (p = i.match(jr) || []),
      (x = r.match(jr) || []),
      x.length)
    ) {
      for (; (f = jr.exec(r)); )
        (w = f[0]),
          (y = r.substring(u, f.index)),
          m
            ? (m = (m + 1) % 5)
            : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (m = 1),
          w !== (g = p[c++] || "") &&
            ((h = parseFloat(g) || 0),
            (v = g.substr((h + "").length)),
            w.charAt(1) === "=" && (w = en(h, w) + v),
            (b = parseFloat(w)),
            (_ = w.substr((b + "").length)),
            (u = jr.lastIndex - _.length),
            _ ||
              ((_ = _ || Rt.units[t] || v),
              u === r.length && ((r += _), (l.e += _))),
            v !== _ && (h = Zi(e, t, g, _) || 0),
            (l._pt = {
              _next: l._pt,
              p: y || c === 1 ? y : ",",
              s: h,
              c: b - h,
              m: (m && m < 4) || t === "zIndex" ? Math.round : 0,
            }));
      l.c = u < r.length ? r.substring(u, r.length) : "";
    } else l.r = t === "display" && r === "none" ? dd : cd;
    return Cc.test(r) && (l.e = 0), (this._pt = l), l;
  }, "_tweenComplexCSSString"),
  hu = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  rg = a(function (e) {
    var t = e.split(" "),
      i = t[0],
      r = t[1] || "50%";
    return (
      (i === "top" || i === "bottom" || r === "left" || r === "right") &&
        ((e = i), (i = r), (r = e)),
      (t[0] = hu[i] || i),
      (t[1] = hu[r] || r),
      t.join(" ")
    );
  }, "_convertKeywordsToPercentages"),
  ng = a(function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var i = t.t,
        r = i.style,
        s = t.u,
        o = i._gsap,
        l,
        u,
        c;
      if (s === "all" || s === !0) (r.cssText = ""), (u = 1);
      else
        for (s = s.split(","), c = s.length; --c > -1; )
          (l = s[c]),
            Ii[l] && ((u = 1), (l = l === "transformOrigin" ? Ct : Ee)),
            Mr(i, l);
      u &&
        (Mr(i, Ee),
        o &&
          (o.svg && i.removeAttribute("transform"),
          (r.scale = r.rotate = r.translate = "none"),
          fs(i, 1),
          (o.uncache = 1),
          fd(r)));
    }
  }, "_renderClearProps"),
  uo = {
    clearProps: a(function (e, t, i, r, s) {
      if (s.data !== "isFromStart") {
        var o = (e._pt = new Et(e._pt, t, i, 0, 0, ng));
        return (o.u = r), (o.pr = -10), (o.tween = s), e._props.push(i), 1;
      }
    }, "clearProps"),
  },
  ds = [1, 0, 0, 1, 0, 0],
  vd = {},
  yd = a(function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  }, "_isNullTransform"),
  pu = a(function (e) {
    var t = jt(e, Ee);
    return yd(t) ? ds : t.substr(7).match(Ec).map(Oe);
  }, "_getComputedTransformMatrixAsArray"),
  hl = a(function (e, t) {
    var i = e._gsap || yr(e),
      r = e.style,
      s = pu(e),
      o,
      l,
      u,
      c;
    return i.svg && e.getAttribute("transform")
      ? ((u = e.transform.baseVal.consolidate().matrix),
        (s = [u.a, u.b, u.c, u.d, u.e, u.f]),
        s.join(",") === "1,0,0,1,0,0" ? ds : s)
      : (s === ds &&
          !e.offsetParent &&
          e !== tn &&
          !i.svg &&
          ((u = r.display),
          (r.display = "block"),
          (o = e.parentNode),
          (!o || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
            ((c = 1), (l = e.nextElementSibling), tn.appendChild(e)),
          (s = pu(e)),
          u ? (r.display = u) : Mr(e, "display"),
          c &&
            (l
              ? o.insertBefore(e, l)
              : o
              ? o.appendChild(e)
              : tn.removeChild(e))),
        t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  }, "_getMatrix"),
  Ca = a(function (e, t, i, r, s, o) {
    var l = e._gsap,
      u = s || hl(e, !0),
      c = l.xOrigin || 0,
      d = l.yOrigin || 0,
      f = l.xOffset || 0,
      p = l.yOffset || 0,
      h = u[0],
      m = u[1],
      g = u[2],
      w = u[3],
      b = u[4],
      y = u[5],
      _ = t.split(" "),
      v = parseFloat(_[0]) || 0,
      x = parseFloat(_[1]) || 0,
      E,
      C,
      S,
      A;
    i
      ? u !== ds &&
        (C = h * w - m * g) &&
        ((S = v * (w / C) + x * (-g / C) + (g * y - w * b) / C),
        (A = v * (-m / C) + x * (h / C) - (h * y - m * b) / C),
        (v = S),
        (x = A))
      : ((E = md(e)),
        (v = E.x + (~_[0].indexOf("%") ? (v / 100) * E.width : v)),
        (x = E.y + (~(_[1] || _[0]).indexOf("%") ? (x / 100) * E.height : x))),
      r || (r !== !1 && l.smooth)
        ? ((b = v - c),
          (y = x - d),
          (l.xOffset = f + (b * h + y * g) - b),
          (l.yOffset = p + (b * m + y * w) - y))
        : (l.xOffset = l.yOffset = 0),
      (l.xOrigin = v),
      (l.yOrigin = x),
      (l.smooth = !!r),
      (l.origin = t),
      (l.originIsAbsolute = !!i),
      (e.style[Ct] = "0px 0px"),
      o &&
        (Hi(o, l, "xOrigin", c, v),
        Hi(o, l, "yOrigin", d, x),
        Hi(o, l, "xOffset", f, l.xOffset),
        Hi(o, l, "yOffset", p, l.yOffset)),
      e.setAttribute("data-svg-origin", v + " " + x);
  }, "_applySVGOrigin"),
  fs = a(function (e, t) {
    var i = e._gsap || new td(e);
    if ("x" in i && !t && !i.uncache) return i;
    var r = e.style,
      s = i.scaleX < 0,
      o = "px",
      l = "deg",
      u = getComputedStyle(e),
      c = jt(e, Ct) || "0",
      d,
      f,
      p,
      h,
      m,
      g,
      w,
      b,
      y,
      _,
      v,
      x,
      E,
      C,
      S,
      A,
      k,
      L,
      T,
      M,
      O,
      I,
      N,
      R,
      B,
      q,
      P,
      X,
      K,
      ce,
      le,
      ne;
    return (
      (d = f = p = g = w = b = y = _ = v = 0),
      (h = m = 1),
      (i.svg = !!(e.getCTM && gd(e))),
      u.translate &&
        ((u.translate !== "none" ||
          u.scale !== "none" ||
          u.rotate !== "none") &&
          (r[Ee] =
            (u.translate !== "none"
              ? "translate3d(" +
                (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") +
            (u.scale !== "none"
              ? "scale(" + u.scale.split(" ").join(",") + ") "
              : "") +
            (u[Ee] !== "none" ? u[Ee] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (C = hl(e, i.svg)),
      i.svg &&
        (i.uncache
          ? ((B = e.getBBox()),
            (c = i.xOrigin - B.x + "px " + (i.yOrigin - B.y) + "px"),
            (R = ""))
          : (R = !t && e.getAttribute("data-svg-origin")),
        Ca(e, R || c, !!R || i.originIsAbsolute, i.smooth !== !1, C)),
      (x = i.xOrigin || 0),
      (E = i.yOrigin || 0),
      C !== ds &&
        ((L = C[0]),
        (T = C[1]),
        (M = C[2]),
        (O = C[3]),
        (d = I = C[4]),
        (f = N = C[5]),
        C.length === 6
          ? ((h = Math.sqrt(L * L + T * T)),
            (m = Math.sqrt(O * O + M * M)),
            (g = L || T ? Vr(T, L) * fr : 0),
            (y = M || O ? Vr(M, O) * fr + g : 0),
            y && (m *= Math.abs(Math.cos(y * rn))),
            i.svg && ((d -= x - (x * L + E * M)), (f -= E - (x * T + E * O))))
          : ((ne = C[6]),
            (ce = C[7]),
            (P = C[8]),
            (X = C[9]),
            (K = C[10]),
            (le = C[11]),
            (d = C[12]),
            (f = C[13]),
            (p = C[14]),
            (S = Vr(ne, K)),
            (w = S * fr),
            S &&
              ((A = Math.cos(-S)),
              (k = Math.sin(-S)),
              (R = I * A + P * k),
              (B = N * A + X * k),
              (q = ne * A + K * k),
              (P = I * -k + P * A),
              (X = N * -k + X * A),
              (K = ne * -k + K * A),
              (le = ce * -k + le * A),
              (I = R),
              (N = B),
              (ne = q)),
            (S = Vr(-M, K)),
            (b = S * fr),
            S &&
              ((A = Math.cos(-S)),
              (k = Math.sin(-S)),
              (R = L * A - P * k),
              (B = T * A - X * k),
              (q = M * A - K * k),
              (le = O * k + le * A),
              (L = R),
              (T = B),
              (M = q)),
            (S = Vr(T, L)),
            (g = S * fr),
            S &&
              ((A = Math.cos(S)),
              (k = Math.sin(S)),
              (R = L * A + T * k),
              (B = I * A + N * k),
              (T = T * A - L * k),
              (N = N * A - I * k),
              (L = R),
              (I = B)),
            w &&
              Math.abs(w) + Math.abs(g) > 359.9 &&
              ((w = g = 0), (b = 180 - b)),
            (h = Oe(Math.sqrt(L * L + T * T + M * M))),
            (m = Oe(Math.sqrt(N * N + ne * ne))),
            (S = Vr(I, N)),
            (y = Math.abs(S) > 2e-4 ? S * fr : 0),
            (v = le ? 1 / (le < 0 ? -le : le) : 0)),
        i.svg &&
          ((R = e.getAttribute("transform")),
          (i.forceCSS = e.setAttribute("transform", "") || !yd(jt(e, Ee))),
          R && e.setAttribute("transform", R))),
      Math.abs(y) > 90 &&
        Math.abs(y) < 270 &&
        (s
          ? ((h *= -1), (y += g <= 0 ? 180 : -180), (g += g <= 0 ? 180 : -180))
          : ((m *= -1), (y += y <= 0 ? 180 : -180))),
      (t = t || i.uncache),
      (i.x =
        d -
        ((i.xPercent =
          d &&
          ((!t && i.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-d) ? -50 : 0)))
          ? (e.offsetWidth * i.xPercent) / 100
          : 0) +
        o),
      (i.y =
        f -
        ((i.yPercent =
          f &&
          ((!t && i.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0)))
          ? (e.offsetHeight * i.yPercent) / 100
          : 0) +
        o),
      (i.z = p + o),
      (i.scaleX = Oe(h)),
      (i.scaleY = Oe(m)),
      (i.rotation = Oe(g) + l),
      (i.rotationX = Oe(w) + l),
      (i.rotationY = Oe(b) + l),
      (i.skewX = y + l),
      (i.skewY = _ + l),
      (i.transformPerspective = v + o),
      (i.zOrigin = parseFloat(c.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
        (r[Ct] = co(c)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = Rt.force3D),
      (i.renderTransform = i.svg ? og : pd ? _d : sg),
      (i.uncache = 0),
      i
    );
  }, "_parseTransform"),
  co = a(function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  }, "_firstTwoOnly"),
  Yo = a(function (e, t, i) {
    var r = at(t);
    return Oe(parseFloat(t) + parseFloat(Zi(e, "x", i + "px", r))) + r;
  }, "_addPxTranslate"),
  sg = a(function (e, t) {
    (t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      _d(e, t);
  }, "_renderNon3DTransforms"),
  ur = "0deg",
  kn = "0px",
  cr = ") ",
  _d = a(function (e, t) {
    var i = t || this,
      r = i.xPercent,
      s = i.yPercent,
      o = i.x,
      l = i.y,
      u = i.z,
      c = i.rotation,
      d = i.rotationY,
      f = i.rotationX,
      p = i.skewX,
      h = i.skewY,
      m = i.scaleX,
      g = i.scaleY,
      w = i.transformPerspective,
      b = i.force3D,
      y = i.target,
      _ = i.zOrigin,
      v = "",
      x = (b === "auto" && e && e !== 1) || b === !0;
    if (_ && (f !== ur || d !== ur)) {
      var E = parseFloat(d) * rn,
        C = Math.sin(E),
        S = Math.cos(E),
        A;
      (E = parseFloat(f) * rn),
        (A = Math.cos(E)),
        (o = Yo(y, o, C * A * -_)),
        (l = Yo(y, l, -Math.sin(E) * -_)),
        (u = Yo(y, u, S * A * -_ + _));
    }
    w !== kn && (v += "perspective(" + w + cr),
      (r || s) && (v += "translate(" + r + "%, " + s + "%) "),
      (x || o !== kn || l !== kn || u !== kn) &&
        (v +=
          u !== kn || x
            ? "translate3d(" + o + ", " + l + ", " + u + ") "
            : "translate(" + o + ", " + l + cr),
      c !== ur && (v += "rotate(" + c + cr),
      d !== ur && (v += "rotateY(" + d + cr),
      f !== ur && (v += "rotateX(" + f + cr),
      (p !== ur || h !== ur) && (v += "skew(" + p + ", " + h + cr),
      (m !== 1 || g !== 1) && (v += "scale(" + m + ", " + g + cr),
      (y.style[Ee] = v || "translate(0, 0)");
  }, "_renderCSSTransforms"),
  og = a(function (e, t) {
    var i = t || this,
      r = i.xPercent,
      s = i.yPercent,
      o = i.x,
      l = i.y,
      u = i.rotation,
      c = i.skewX,
      d = i.skewY,
      f = i.scaleX,
      p = i.scaleY,
      h = i.target,
      m = i.xOrigin,
      g = i.yOrigin,
      w = i.xOffset,
      b = i.yOffset,
      y = i.forceCSS,
      _ = parseFloat(o),
      v = parseFloat(l),
      x,
      E,
      C,
      S,
      A;
    (u = parseFloat(u)),
      (c = parseFloat(c)),
      (d = parseFloat(d)),
      d && ((d = parseFloat(d)), (c += d), (u += d)),
      u || c
        ? ((u *= rn),
          (c *= rn),
          (x = Math.cos(u) * f),
          (E = Math.sin(u) * f),
          (C = Math.sin(u - c) * -p),
          (S = Math.cos(u - c) * p),
          c &&
            ((d *= rn),
            (A = Math.tan(c - d)),
            (A = Math.sqrt(1 + A * A)),
            (C *= A),
            (S *= A),
            d &&
              ((A = Math.tan(d)),
              (A = Math.sqrt(1 + A * A)),
              (x *= A),
              (E *= A))),
          (x = Oe(x)),
          (E = Oe(E)),
          (C = Oe(C)),
          (S = Oe(S)))
        : ((x = f), (S = p), (E = C = 0)),
      ((_ && !~(o + "").indexOf("px")) || (v && !~(l + "").indexOf("px"))) &&
        ((_ = Zi(h, "x", o, "px")), (v = Zi(h, "y", l, "px"))),
      (m || g || w || b) &&
        ((_ = Oe(_ + m - (m * x + g * C) + w)),
        (v = Oe(v + g - (m * E + g * S) + b))),
      (r || s) &&
        ((A = h.getBBox()),
        (_ = Oe(_ + (r / 100) * A.width)),
        (v = Oe(v + (s / 100) * A.height))),
      (A =
        "matrix(" + x + "," + E + "," + C + "," + S + "," + _ + "," + v + ")"),
      h.setAttribute("transform", A),
      y && (h.style[Ee] = A);
  }, "_renderSVGTransforms"),
  ag = a(function (e, t, i, r, s) {
    var o = 360,
      l = je(s),
      u = parseFloat(s) * (l && ~s.indexOf("rad") ? fr : 1),
      c = u - r,
      d = r + c + "deg",
      f,
      p;
    return (
      l &&
        ((f = s.split("_")[1]),
        f === "short" &&
          ((c %= o), c !== c % (o / 2) && (c += c < 0 ? o : -360)),
        f === "cw" && c < 0
          ? (c = ((c + o * lu) % o) - ~~(c / o) * o)
          : f === "ccw" && c > 0 && (c = ((c - o * lu) % o) - ~~(c / o) * o)),
      (e._pt = p = new Et(e._pt, t, i, r, c, Hm)),
      (p.e = d),
      (p.u = "deg"),
      e._props.push(i),
      p
    );
  }, "_addRotationalPropTween"),
  mu = a(function (e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  }, "_assign"),
  lg = a(function (e, t, i) {
    var r = mu({}, i._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      o = i.style,
      l,
      u,
      c,
      d,
      f,
      p,
      h,
      m;
    r.svg
      ? ((c = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (o[Ee] = t),
        (l = fs(i, 1)),
        Mr(i, Ee),
        i.setAttribute("transform", c))
      : ((c = getComputedStyle(i)[Ee]),
        (o[Ee] = t),
        (l = fs(i, 1)),
        (o[Ee] = c));
    for (u in Ii)
      (c = r[u]),
        (d = l[u]),
        c !== d &&
          s.indexOf(u) < 0 &&
          ((h = at(c)),
          (m = at(d)),
          (f = h !== m ? Zi(i, u, c, m) : parseFloat(c)),
          (p = parseFloat(d)),
          (e._pt = new Et(e._pt, l, u, f, p - f, Sa)),
          (e._pt.u = m || 0),
          e._props.push(u));
    mu(l, r);
  }, "_addRawTransformPTs");
Tt("padding,margin,Width,Radius", function (n, e) {
  var t = "Top",
    i = "Right",
    r = "Bottom",
    s = "Left",
    o = (e < 3 ? [t, i, r, s] : [t + s, t + i, r + i, r + s]).map(function (l) {
      return e < 2 ? n + l : "border" + l + n;
    });
  uo[e > 1 ? "border" + n : n] = function (l, u, c, d, f) {
    var p, h;
    if (arguments.length < 4)
      return (
        (p = o.map(function (m) {
          return Ei(l, m, c);
        })),
        (h = p.join(" ")),
        h.split(p[0]).length === 5 ? p[0] : h
      );
    (p = (d + "").split(" ")),
      (h = {}),
      o.forEach(function (m, g) {
        return (h[m] = p[g] = p[g] || p[((g - 1) / 2) | 0]);
      }),
      l.init(u, h, f);
  };
});
var wd = {
  name: "css",
  register: Ea,
  targetTest: a(function (e) {
    return e.style && e.nodeType;
  }, "targetTest"),
  init: a(function (e, t, i, r, s) {
    var o = this._props,
      l = e.style,
      u = i.vars.startAt,
      c,
      d,
      f,
      p,
      h,
      m,
      g,
      w,
      b,
      y,
      _,
      v,
      x,
      E,
      C,
      S;
    cl || Ea(),
      (this.styles = this.styles || hd(e)),
      (S = this.styles.props),
      (this.tween = i);
    for (g in t)
      if (g !== "autoRound" && ((d = t[g]), !(Lt[g] && id(g, t, i, r, e, s)))) {
        if (
          ((h = typeof d),
          (m = uo[g]),
          h === "function" && ((d = d.call(i, r, e, s)), (h = typeof d)),
          h === "string" && ~d.indexOf("random(") && (d = ls(d)),
          m)
        )
          m(this, e, g, d, i) && (C = 1);
        else if (g.substr(0, 2) === "--")
          (c = (getComputedStyle(e).getPropertyValue(g) + "").trim()),
            (d += ""),
            (ji.lastIndex = 0),
            ji.test(c) || ((w = at(c)), (b = at(d))),
            b ? w !== b && (c = Zi(e, g, c, b) + b) : w && (d += w),
            this.add(l, "setProperty", c, d, r, s, 0, 0, g),
            o.push(g),
            S.push(g, 0, l[g]);
        else if (h !== "undefined") {
          if (
            (u && g in u
              ? ((c = typeof u[g] == "function" ? u[g].call(i, r, e, s) : u[g]),
                je(c) && ~c.indexOf("random(") && (c = ls(c)),
                at(c + "") ||
                  c === "auto" ||
                  (c += Rt.units[g] || at(Ei(e, g)) || ""),
                (c + "").charAt(1) === "=" && (c = Ei(e, g)))
              : (c = Ei(e, g)),
            (p = parseFloat(c)),
            (y = h === "string" && d.charAt(1) === "=" && d.substr(0, 2)),
            y && (d = d.substr(2)),
            (f = parseFloat(d)),
            g in pi &&
              (g === "autoAlpha" &&
                (p === 1 && Ei(e, "visibility") === "hidden" && f && (p = 0),
                S.push("visibility", 0, l.visibility),
                Hi(
                  this,
                  l,
                  "visibility",
                  p ? "inherit" : "hidden",
                  f ? "inherit" : "hidden",
                  !f
                )),
              g !== "scale" &&
                g !== "transform" &&
                ((g = pi[g]), ~g.indexOf(",") && (g = g.split(",")[0]))),
            (_ = g in Ii),
            _)
          ) {
            if (
              (this.styles.save(g),
              h === "string" &&
                d.substring(0, 6) === "var(--" &&
                ((d = jt(e, d.substring(4, d.indexOf(")")))),
                (f = parseFloat(d))),
              v ||
                ((x = e._gsap),
                (x.renderTransform && !t.parseTransform) ||
                  fs(e, t.parseTransform),
                (E = t.smoothOrigin !== !1 && x.smooth),
                (v = this._pt =
                  new Et(this._pt, l, Ee, 0, 1, x.renderTransform, x, 0, -1)),
                (v.dep = 1)),
              g === "scale")
            )
              (this._pt = new Et(
                this._pt,
                x,
                "scaleY",
                x.scaleY,
                (y ? en(x.scaleY, y + f) : f) - x.scaleY || 0,
                Sa
              )),
                (this._pt.u = 0),
                o.push("scaleY", g),
                (g += "X");
            else if (g === "transformOrigin") {
              S.push(Ct, 0, l[Ct]),
                (d = rg(d)),
                x.svg
                  ? Ca(e, d, 0, E, 0, this)
                  : ((b = parseFloat(d.split(" ")[2]) || 0),
                    b !== x.zOrigin && Hi(this, x, "zOrigin", x.zOrigin, b),
                    Hi(this, l, g, co(c), co(d)));
              continue;
            } else if (g === "svgOrigin") {
              Ca(e, d, 1, E, 0, this);
              continue;
            } else if (g in vd) {
              ag(this, x, g, p, y ? en(p, y + d) : d);
              continue;
            } else if (g === "smoothOrigin") {
              Hi(this, x, "smooth", x.smooth, d);
              continue;
            } else if (g === "force3D") {
              x[g] = d;
              continue;
            } else if (g === "transform") {
              lg(this, d, e);
              continue;
            }
          } else g in l || (g = yn(g) || g);
          if (_ || ((f || f === 0) && (p || p === 0) && !Wm.test(d) && g in l))
            (w = (c + "").substr((p + "").length)),
              f || (f = 0),
              (b = at(d) || (g in Rt.units ? Rt.units[g] : w)),
              w !== b && (p = Zi(e, g, c, b)),
              (this._pt = new Et(
                this._pt,
                _ ? x : l,
                g,
                p,
                (y ? en(p, y + f) : f) - p,
                !_ && (b === "px" || g === "zIndex") && t.autoRound !== !1
                  ? Ym
                  : Sa
              )),
              (this._pt.u = b || 0),
              w !== b && b !== "%" && ((this._pt.b = c), (this._pt.r = Gm));
          else if (g in l) ig.call(this, e, g, c, y ? y + d : d);
          else if (g in e) this.add(e, g, c || e[g], y ? y + d : d, r, s);
          else if (g !== "parseTransform") {
            el(g, d);
            continue;
          }
          _ ||
            (g in l
              ? S.push(g, 0, l[g])
              : typeof e[g] == "function"
              ? S.push(g, 2, e[g]())
              : S.push(g, 1, c || e[g])),
            o.push(g);
        }
      }
    C && ld(this);
  }, "init"),
  render: a(function (e, t) {
    if (t.tween._time || !dl())
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    else t.styles.revert();
  }, "render"),
  get: Ei,
  aliases: pi,
  getSetter: a(function (e, t, i) {
    var r = pi[t];
    return (
      r && r.indexOf(",") < 0 && (t = r),
      t in Ii && t !== Ct && (e._gsap.x || Ei(e, "x"))
        ? i && au === i
          ? t === "scale"
            ? Km
            : Um
          : (au = i || {}) && (t === "scale" ? Zm : Qm)
        : e.style && !Za(e.style[t])
        ? Xm
        : ~t.indexOf("-")
        ? jm
        : ll(e, t)
    );
  }, "getSetter"),
  core: { _removeProperty: Mr, _getMatrix: hl },
};
kt.utils.checkPrefix = yn;
kt.core.getStyleSaver = hd;
(function (n, e, t, i) {
  var r = Tt(n + "," + e + "," + t, function (s) {
    Ii[s] = 1;
  });
  Tt(e, function (s) {
    (Rt.units[s] = "deg"), (vd[s] = 1);
  }),
    (pi[r[13]] = n + "," + e),
    Tt(i, function (s) {
      var o = s.split(":");
      pi[o[1]] = r[o[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Tt(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (n) {
    Rt.units[n] = "px";
  }
);
kt.registerPlugin(wd);
var z = kt.registerPlugin(wd) || kt;
function ug(n, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(n, i.key, i);
  }
}
a(ug, "_defineProperties");
function cg(n, e, t) {
  return e && ug(n.prototype, e), n;
}
a(cg, "_createClass");
var ct,
  Ys,
  zt,
  Gi,
  Yi,
  nn,
  bd,
  hr,
  Hn,
  xd,
  ki,
  ii,
  Sd,
  Td = a(function () {
    return (
      ct ||
      (typeof window < "u" && (ct = window.gsap) && ct.registerPlugin && ct)
    );
  }, "_getGSAP"),
  Ed = 1,
  Kr = [],
  re = [],
  yi = [],
  Gn = Date.now,
  ka = a(function (e, t) {
    return t;
  }, "_bridge"),
  dg = a(function () {
    var e = Hn.core,
      t = e.bridge || {},
      i = e._scrollers,
      r = e._proxies;
    i.push.apply(i, re),
      r.push.apply(r, yi),
      (re = i),
      (yi = r),
      (ka = a(function (o, l) {
        return t[o](l);
      }, "_bridge"));
  }, "_integrate"),
  Ui = a(function (e, t) {
    return ~yi.indexOf(e) && yi[yi.indexOf(e) + 1][t];
  }, "_getProxyProp"),
  Yn = a(function (e) {
    return !!~xd.indexOf(e);
  }, "_isViewport"),
  ht = a(function (e, t, i, r, s) {
    return e.addEventListener(t, i, { passive: r !== !1, capture: !!s });
  }, "_addListener"),
  ft = a(function (e, t, i, r) {
    return e.removeEventListener(t, i, !!r);
  }, "_removeListener"),
  Ts = "scrollLeft",
  Es = "scrollTop",
  Pa = a(function () {
    return (ki && ki.isPressed) || re.cache++;
  }, "_onScroll"),
  fo = a(function (e, t) {
    var i = a(function r(s) {
      if (s || s === 0) {
        Ed && (zt.history.scrollRestoration = "manual");
        var o = ki && ki.isPressed;
        (s = r.v = Math.round(s) || (ki && ki.iOS ? 1 : 0)),
          e(s),
          (r.cacheID = re.cache),
          o && ka("ss", s);
      } else (t || re.cache !== r.cacheID || ka("ref")) && ((r.cacheID = re.cache), (r.v = e()));
      return r.v + r.offset;
    }, "cachingFunc");
    return (i.offset = 0), e && i;
  }, "_scrollCacheFunc"),
  _t = {
    s: Ts,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: fo(function (n) {
      return arguments.length
        ? zt.scrollTo(n, Ve.sc())
        : zt.pageXOffset || Gi[Ts] || Yi[Ts] || nn[Ts] || 0;
    }),
  },
  Ve = {
    s: Es,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _t,
    sc: fo(function (n) {
      return arguments.length
        ? zt.scrollTo(_t.sc(), n)
        : zt.pageYOffset || Gi[Es] || Yi[Es] || nn[Es] || 0;
    }),
  },
  xt = a(function (e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || ct.utils.toArray)(e)[0] ||
      (typeof e == "string" && ct.config().nullTargetWarn !== !1
        ? void 0
        : null)
    );
  }, "_getTarget"),
  fg = a(function (e, t) {
    for (var i = t.length; i--; ) if (t[i] === e || t[i].contains(e)) return !0;
    return !1;
  }, "_isWithin"),
  Qi = a(function (e, t) {
    var i = t.s,
      r = t.sc;
    Yn(e) && (e = Gi.scrollingElement || Yi);
    var s = re.indexOf(e),
      o = r === Ve.sc ? 1 : 2;
    !~s && (s = re.push(e) - 1), re[s + o] || ht(e, "scroll", Pa);
    var l = re[s + o],
      u =
        l ||
        (re[s + o] =
          fo(Ui(e, i), !0) ||
          (Yn(e)
            ? r
            : fo(function (c) {
                return arguments.length ? (e[i] = c) : e[i];
              })));
    return (
      (u.target = e),
      l || (u.smooth = ct.getProperty(e, "scrollBehavior") === "smooth"),
      u
    );
  }, "_getScrollFunc"),
  Ma = a(function (e, t, i) {
    var r = e,
      s = e,
      o = Gn(),
      l = o,
      u = t || 50,
      c = Math.max(500, u * 3),
      d = a(function (m, g) {
        var w = Gn();
        g || w - o > u
          ? ((s = r), (r = m), (l = o), (o = w))
          : i
          ? (r += m)
          : (r = s + ((m - s) / (w - l)) * (o - l));
      }, "update"),
      f = a(function () {
        (s = r = i ? 0 : r), (l = o = 0);
      }, "reset"),
      p = a(function (m) {
        var g = l,
          w = s,
          b = Gn();
        return (
          (m || m === 0) && m !== r && d(m),
          o === l || b - l > c
            ? 0
            : ((r + (i ? w : -w)) / ((i ? b : o) - g)) * 1e3
        );
      }, "getVelocity");
    return { update: d, reset: f, getVelocity: p };
  }, "_getVelocityProp"),
  Pn = a(function (e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  }, "_getEvent"),
  gu = a(function (e) {
    var t = Math.max.apply(Math, e),
      i = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(i) ? t : i;
  }, "_getAbsoluteMax"),
  Cd = a(function () {
    (Hn = ct.core.globals().ScrollTrigger), Hn && Hn.core && dg();
  }, "_setScrollTrigger"),
  kd = a(function (e) {
    return (
      (ct = e || Td()),
      !Ys &&
        ct &&
        typeof document < "u" &&
        document.body &&
        ((zt = window),
        (Gi = document),
        (Yi = Gi.documentElement),
        (nn = Gi.body),
        (xd = [zt, Gi, Yi, nn]),
        (Sd = ct.core.context || function () {}),
        (hr = "onpointerenter" in nn ? "pointer" : "mouse"),
        (bd = Le.isTouch =
          zt.matchMedia &&
          zt.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in zt ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (ii = Le.eventTypes =
          (
            "ontouchstart" in Yi
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Yi
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (Ed = 0);
        }, 500),
        Cd(),
        (Ys = 1)),
      Ys
    );
  }, "_initCore");
_t.op = Ve;
re.cache = 0;
var Le = (function () {
  function n(t) {
    this.init(t);
  }
  a(n, "Observer");
  var e = n.prototype;
  return (
    (e.init = a(function (i) {
      Ys || kd(ct), Hn || Cd();
      var r = i.tolerance,
        s = i.dragMinimum,
        o = i.type,
        l = i.target,
        u = i.lineHeight,
        c = i.debounce,
        d = i.preventDefault,
        f = i.onStop,
        p = i.onStopDelay,
        h = i.ignore,
        m = i.wheelSpeed,
        g = i.event,
        w = i.onDragStart,
        b = i.onDragEnd,
        y = i.onDrag,
        _ = i.onPress,
        v = i.onRelease,
        x = i.onRight,
        E = i.onLeft,
        C = i.onUp,
        S = i.onDown,
        A = i.onChangeX,
        k = i.onChangeY,
        L = i.onChange,
        T = i.onToggleX,
        M = i.onToggleY,
        O = i.onHover,
        I = i.onHoverEnd,
        N = i.onMove,
        R = i.ignoreCheck,
        B = i.isNormalizer,
        q = i.onGestureStart,
        P = i.onGestureEnd,
        X = i.onWheel,
        K = i.onEnable,
        ce = i.onDisable,
        le = i.onClick,
        ne = i.scrollSpeed,
        ee = i.capture,
        fe = i.allowClicks,
        me = i.lockAxis,
        De = i.onLockAxis;
      (this.target = l = xt(l) || Yi),
        (this.vars = i),
        h && (h = ct.utils.toArray(h)),
        (r = r || 1e-9),
        (s = s || 0),
        (m = m || 1),
        (ne = ne || 1),
        (o = o || "wheel,touch,pointer"),
        (c = c !== !1),
        u || (u = parseFloat(zt.getComputedStyle(nn).lineHeight) || 22);
      var qe,
        ve,
        We,
        G,
        se,
        Ue,
        Ke,
        D = this,
        Pe = 0,
        Kt = 0,
        Bt = i.passive || (!d && i.passive !== !1),
        W = Qi(l, _t),
        Vt = Qi(l, Ve),
        zi = W(),
        rr = Vt(),
        He =
          ~o.indexOf("touch") &&
          !~o.indexOf("pointer") &&
          ii[0] === "pointerdown",
        Ni = Yn(l),
        Me = l.ownerDocument || Gi,
        Zt = [0, 0, 0],
        qt = [0, 0, 0],
        bi = 0,
        xn = a(function () {
          return (bi = Gn());
        }, "clickCapture"),
        Ie = a(function (U, ue) {
          return (
            ((D.event = U) && h && fg(U.target, h)) ||
            (ue && He && U.pointerType !== "touch") ||
            (R && R(U, ue))
          );
        }, "_ignoreCheck"),
        ys = a(function () {
          D._vx.reset(), D._vy.reset(), ve.pause(), f && f(D);
        }, "onStopFunc"),
        xi = a(function () {
          var U = (D.deltaX = gu(Zt)),
            ue = (D.deltaY = gu(qt)),
            $ = Math.abs(U) >= r,
            Z = Math.abs(ue) >= r;
          L && ($ || Z) && L(D, U, ue, Zt, qt),
            $ &&
              (x && D.deltaX > 0 && x(D),
              E && D.deltaX < 0 && E(D),
              A && A(D),
              T && D.deltaX < 0 != Pe < 0 && T(D),
              (Pe = D.deltaX),
              (Zt[0] = Zt[1] = Zt[2] = 0)),
            Z &&
              (S && D.deltaY > 0 && S(D),
              C && D.deltaY < 0 && C(D),
              k && k(D),
              M && D.deltaY < 0 != Kt < 0 && M(D),
              (Kt = D.deltaY),
              (qt[0] = qt[1] = qt[2] = 0)),
            (G || We) &&
              (N && N(D),
              We && (w && We === 1 && w(D), y && y(D), (We = 0)),
              (G = !1)),
            Ue && !(Ue = !1) && De && De(D),
            se && (X(D), (se = !1)),
            (qe = 0);
        }, "update"),
        Rr = a(function (U, ue, $) {
          (Zt[$] += U),
            (qt[$] += ue),
            D._vx.update(U),
            D._vy.update(ue),
            c ? qe || (qe = requestAnimationFrame(xi)) : xi();
        }, "onDelta"),
        $r = a(function (U, ue) {
          me &&
            !Ke &&
            ((D.axis = Ke = Math.abs(U) > Math.abs(ue) ? "x" : "y"), (Ue = !0)),
            Ke !== "y" && ((Zt[2] += U), D._vx.update(U, !0)),
            Ke !== "x" && ((qt[2] += ue), D._vy.update(ue, !0)),
            c ? qe || (qe = requestAnimationFrame(xi)) : xi();
        }, "onTouchOrPointerDelta"),
        Ri = a(function (U) {
          if (!Ie(U, 1)) {
            U = Pn(U, d);
            var ue = U.clientX,
              $ = U.clientY,
              Z = ue - D.x,
              Y = $ - D.y,
              Q = D.isDragging;
            (D.x = ue),
              (D.y = $),
              (Q ||
                ((Z || Y) &&
                  (Math.abs(D.startX - ue) >= s ||
                    Math.abs(D.startY - $) >= s))) &&
                ((We = Q ? 2 : 1), Q || (D.isDragging = !0), $r(Z, Y));
          }
        }, "_onDrag"),
        nr = (D.onPress = function (J) {
          Ie(J, 1) ||
            (J && J.button) ||
            ((D.axis = Ke = null),
            ve.pause(),
            (D.isPressed = !0),
            (J = Pn(J)),
            (Pe = Kt = 0),
            (D.startX = D.x = J.clientX),
            (D.startY = D.y = J.clientY),
            D._vx.reset(),
            D._vy.reset(),
            ht(B ? l : Me, ii[1], Ri, Bt, !0),
            (D.deltaX = D.deltaY = 0),
            _ && _(D));
        }),
        oe = (D.onRelease = function (J) {
          if (!Ie(J, 1)) {
            ft(B ? l : Me, ii[1], Ri, !0);
            var U = !isNaN(D.y - D.startY),
              ue = D.isDragging,
              $ =
                ue &&
                (Math.abs(D.x - D.startX) > 3 || Math.abs(D.y - D.startY) > 3),
              Z = Pn(J);
            !$ &&
              U &&
              (D._vx.reset(),
              D._vy.reset(),
              d &&
                fe &&
                ct.delayedCall(0.08, function () {
                  if (Gn() - bi > 300 && !J.defaultPrevented) {
                    if (J.target.click) J.target.click();
                    else if (Me.createEvent) {
                      var Y = Me.createEvent("MouseEvents");
                      Y.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        zt,
                        1,
                        Z.screenX,
                        Z.screenY,
                        Z.clientX,
                        Z.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        J.target.dispatchEvent(Y);
                    }
                  }
                })),
              (D.isDragging = D.isGesturing = D.isPressed = !1),
              f && ue && !B && ve.restart(!0),
              We && xi(),
              b && ue && b(D),
              v && v(D, $);
          }
        }),
        sr = a(function (U) {
          return (
            U.touches &&
            U.touches.length > 1 &&
            (D.isGesturing = !0) &&
            q(U, D.isDragging)
          );
        }, "_onGestureStart"),
        Qt = a(function () {
          return (D.isGesturing = !1) || P(D);
        }, "_onGestureEnd"),
        Jt = a(function (U) {
          if (!Ie(U)) {
            var ue = W(),
              $ = Vt();
            Rr((ue - zi) * ne, ($ - rr) * ne, 1),
              (zi = ue),
              (rr = $),
              f && ve.restart(!0);
          }
        }, "onScroll"),
        ei = a(function (U) {
          if (!Ie(U)) {
            (U = Pn(U, d)), X && (se = !0);
            var ue =
              (U.deltaMode === 1 ? u : U.deltaMode === 2 ? zt.innerHeight : 1) *
              m;
            Rr(U.deltaX * ue, U.deltaY * ue, 0), f && !B && ve.restart(!0);
          }
        }, "_onWheel"),
        or = a(function (U) {
          if (!Ie(U)) {
            var ue = U.clientX,
              $ = U.clientY,
              Z = ue - D.x,
              Y = $ - D.y;
            (D.x = ue),
              (D.y = $),
              (G = !0),
              f && ve.restart(!0),
              (Z || Y) && $r(Z, Y);
          }
        }, "_onMove"),
        Fr = a(function (U) {
          (D.event = U), O(D);
        }, "_onHover"),
        Si = a(function (U) {
          (D.event = U), I(D);
        }, "_onHoverEnd"),
        Sn = a(function (U) {
          return Ie(U) || (Pn(U, d) && le(D));
        }, "_onClick");
      (ve = D._dc = ct.delayedCall(p || 0.25, ys).pause()),
        (D.deltaX = D.deltaY = 0),
        (D._vx = Ma(0, 50, !0)),
        (D._vy = Ma(0, 50, !0)),
        (D.scrollX = W),
        (D.scrollY = Vt),
        (D.isDragging = D.isGesturing = D.isPressed = !1),
        Sd(this),
        (D.enable = function (J) {
          return (
            D.isEnabled ||
              (ht(Ni ? Me : l, "scroll", Pa),
              o.indexOf("scroll") >= 0 && ht(Ni ? Me : l, "scroll", Jt, Bt, ee),
              o.indexOf("wheel") >= 0 && ht(l, "wheel", ei, Bt, ee),
              ((o.indexOf("touch") >= 0 && bd) || o.indexOf("pointer") >= 0) &&
                (ht(l, ii[0], nr, Bt, ee),
                ht(Me, ii[2], oe),
                ht(Me, ii[3], oe),
                fe && ht(l, "click", xn, !0, !0),
                le && ht(l, "click", Sn),
                q && ht(Me, "gesturestart", sr),
                P && ht(Me, "gestureend", Qt),
                O && ht(l, hr + "enter", Fr),
                I && ht(l, hr + "leave", Si),
                N && ht(l, hr + "move", or)),
              (D.isEnabled = !0),
              (D.isDragging = D.isGesturing = D.isPressed = G = We = !1),
              D._vx.reset(),
              D._vy.reset(),
              (zi = W()),
              (rr = Vt()),
              J && J.type && nr(J),
              K && K(D)),
            D
          );
        }),
        (D.disable = function () {
          D.isEnabled &&
            (Kr.filter(function (J) {
              return J !== D && Yn(J.target);
            }).length || ft(Ni ? Me : l, "scroll", Pa),
            D.isPressed &&
              (D._vx.reset(), D._vy.reset(), ft(B ? l : Me, ii[1], Ri, !0)),
            ft(Ni ? Me : l, "scroll", Jt, ee),
            ft(l, "wheel", ei, ee),
            ft(l, ii[0], nr, ee),
            ft(Me, ii[2], oe),
            ft(Me, ii[3], oe),
            ft(l, "click", xn, !0),
            ft(l, "click", Sn),
            ft(Me, "gesturestart", sr),
            ft(Me, "gestureend", Qt),
            ft(l, hr + "enter", Fr),
            ft(l, hr + "leave", Si),
            ft(l, hr + "move", or),
            (D.isEnabled = D.isPressed = D.isDragging = !1),
            ce && ce(D));
        }),
        (D.kill = D.revert =
          function () {
            D.disable();
            var J = Kr.indexOf(D);
            J >= 0 && Kr.splice(J, 1), ki === D && (ki = 0);
          }),
        Kr.push(D),
        B && Yn(l) && (ki = D),
        D.enable(g);
    }, "init")),
    cg(n, [
      {
        key: "velocityX",
        get: a(function () {
          return this._vx.getVelocity();
        }, "get"),
      },
      {
        key: "velocityY",
        get: a(function () {
          return this._vy.getVelocity();
        }, "get"),
      },
    ]),
    n
  );
})();
Le.version = "3.13.0";
Le.create = function (n) {
  return new Le(n);
};
Le.register = kd;
Le.getAll = function () {
  return Kr.slice();
};
Le.getById = function (n) {
  return Kr.filter(function (e) {
    return e.vars.id === n;
  })[0];
};
Td() && ct.registerPlugin(Le);
var V,
  Yr,
  ie,
  ge,
  Dt,
  de,
  pl,
  ho,
  hs,
  Xn,
  In,
  Cs,
  nt,
  ko,
  Aa,
  gt,
  vu,
  yu,
  Xr,
  Pd,
  Xo,
  Md,
  mt,
  Oa,
  Ad,
  Od,
  Bi,
  La,
  ml,
  sn,
  gl,
  po,
  Da,
  jo,
  ks = 1,
  st = Date.now,
  Uo = st(),
  Ut = 0,
  zn = 0,
  _u = a(function (e, t, i) {
    var r = At(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
  }, "_parseClamp"),
  wu = a(function (e, t) {
    return t && (!At(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  }, "_keepClamp"),
  hg = a(function n() {
    return zn && requestAnimationFrame(n);
  }, "_rafBugFix"),
  bu = a(function () {
    return (ko = 1);
  }, "_pointerDownHandler"),
  xu = a(function () {
    return (ko = 0);
  }, "_pointerUpHandler"),
  ci = a(function (e) {
    return e;
  }, "_passThrough"),
  Nn = a(function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  }, "_round"),
  Ld = a(function () {
    return typeof window < "u";
  }, "_windowExists"),
  Dd = a(function () {
    return V || (Ld() && (V = window.gsap) && V.registerPlugin && V);
  }, "_getGSAP"),
  Ar = a(function (e) {
    return !!~pl.indexOf(e);
  }, "_isViewport"),
  Id = a(function (e) {
    return (
      (e === "Height" ? gl : ie["inner" + e]) ||
      Dt["client" + e] ||
      de["client" + e]
    );
  }, "_getViewportDimension"),
  zd = a(function (e) {
    return (
      Ui(e, "getBoundingClientRect") ||
      (Ar(e)
        ? function () {
            return (Zs.width = ie.innerWidth), (Zs.height = gl), Zs;
          }
        : function () {
            return Ci(e);
          })
    );
  }, "_getBoundsFunc"),
  pg = a(function (e, t, i) {
    var r = i.d,
      s = i.d2,
      o = i.a;
    return (o = Ui(e, "getBoundingClientRect"))
      ? function () {
          return o()[r];
        }
      : function () {
          return (t ? Id(s) : e["client" + s]) || 0;
        };
  }, "_getSizeFunc"),
  mg = a(function (e, t) {
    return !t || ~yi.indexOf(e)
      ? zd(e)
      : function () {
          return Zs;
        };
  }, "_getOffsetsFunc"),
  mi = a(function (e, t) {
    var i = t.s,
      r = t.d2,
      s = t.d,
      o = t.a;
    return Math.max(
      0,
      (i = "scroll" + r) && (o = Ui(e, i))
        ? o() - zd(e)()[s]
        : Ar(e)
        ? (Dt[i] || de[i]) - Id(r)
        : e[i] - e["offset" + r]
    );
  }, "_maxScroll"),
  Ps = a(function (e, t) {
    for (var i = 0; i < Xr.length; i += 3)
      (!t || ~t.indexOf(Xr[i + 1])) && e(Xr[i], Xr[i + 1], Xr[i + 2]);
  }, "_iterateAutoRefresh"),
  At = a(function (e) {
    return typeof e == "string";
  }, "_isString"),
  lt = a(function (e) {
    return typeof e == "function";
  }, "_isFunction"),
  Rn = a(function (e) {
    return typeof e == "number";
  }, "_isNumber"),
  pr = a(function (e) {
    return typeof e == "object";
  }, "_isObject"),
  Mn = a(function (e, t, i) {
    return e && e.progress(t ? 0 : 1) && i && e.pause();
  }, "_endAnimation"),
  Ko = a(function (e, t) {
    if (e.enabled) {
      var i = e._ctx
        ? e._ctx.add(function () {
            return t(e);
          })
        : t(e);
      i && i.totalTime && (e.callbackAnimation = i);
    }
  }, "_callback"),
  qr = Math.abs,
  Nd = "left",
  Rd = "top",
  vl = "right",
  yl = "bottom",
  xr = "width",
  Sr = "height",
  jn = "Right",
  Un = "Left",
  Kn = "Top",
  Zn = "Bottom",
  ze = "padding",
  Gt = "margin",
  _n = "Width",
  _l = "Height",
  Be = "px",
  Yt = a(function (e) {
    return ie.getComputedStyle(e);
  }, "_getComputedStyle"),
  gg = a(function (e) {
    var t = Yt(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
  }, "_makePositionable"),
  Su = a(function (e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  }, "_setDefaults"),
  Ci = a(function (e, t) {
    var i =
        t &&
        Yt(e)[Aa] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        V.to(e, {
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
        }).progress(1),
      r = e.getBoundingClientRect();
    return i && i.progress(0).kill(), r;
  }, "_getBounds"),
  mo = a(function (e, t) {
    var i = t.d2;
    return e["offset" + i] || e["client" + i] || 0;
  }, "_getSize"),
  $d = a(function (e) {
    var t = [],
      i = e.labels,
      r = e.duration(),
      s;
    for (s in i) t.push(i[s] / r);
    return t;
  }, "_getLabelRatioArray"),
  vg = a(function (e) {
    return function (t) {
      return V.utils.snap($d(e), t);
    };
  }, "_getClosestLabel"),
  wl = a(function (e) {
    var t = V.utils.snap(e),
      i =
        Array.isArray(e) &&
        e.slice(0).sort(function (r, s) {
          return r - s;
        });
    return i
      ? function (r, s, o) {
          o === void 0 && (o = 0.001);
          var l;
          if (!s) return t(r);
          if (s > 0) {
            for (r -= o, l = 0; l < i.length; l++) if (i[l] >= r) return i[l];
            return i[l - 1];
          } else for (l = i.length, r += o; l--; ) if (i[l] <= r) return i[l];
          return i[0];
        }
      : function (r, s, o) {
          o === void 0 && (o = 0.001);
          var l = t(r);
          return !s || Math.abs(l - r) < o || l - r < 0 == s < 0
            ? l
            : t(s < 0 ? r - e : r + e);
        };
  }, "_snapDirectional"),
  yg = a(function (e) {
    return function (t, i) {
      return wl($d(e))(t, i.direction);
    };
  }, "_getLabelAtDirection"),
  Ms = a(function (e, t, i, r) {
    return i.split(",").forEach(function (s) {
      return e(t, s, r);
    });
  }, "_multiListener"),
  Xe = a(function (e, t, i, r, s) {
    return e.addEventListener(t, i, { passive: !r, capture: !!s });
  }, "_addListener"),
  Ye = a(function (e, t, i, r) {
    return e.removeEventListener(t, i, !!r);
  }, "_removeListener"),
  As = a(function (e, t, i) {
    (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
  }, "_wheelListener"),
  Tu = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Os = { toggleActions: "play", anticipatePin: 0 },
  go = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Xs = a(function (e, t) {
    if (At(e)) {
      var i = e.indexOf("="),
        r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
      ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
        (e =
          r +
          (e in go
            ? go[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  }, "_offsetToPx"),
  Ls = a(function (e, t, i, r, s, o, l, u) {
    var c = s.startColor,
      d = s.endColor,
      f = s.fontSize,
      p = s.indent,
      h = s.fontWeight,
      m = ge.createElement("div"),
      g = Ar(i) || Ui(i, "pinType") === "fixed",
      w = e.indexOf("scroller") !== -1,
      b = g ? de : i,
      y = e.indexOf("start") !== -1,
      _ = y ? c : d,
      v =
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
      (v += "position:" + ((w || u) && g ? "fixed;" : "absolute;")),
      (w || u || !g) &&
        (v += (r === Ve ? vl : yl) + ":" + (o + parseFloat(p)) + "px;"),
      l &&
        (v +=
          "box-sizing:border-box;text-align:left;width:" +
          l.offsetWidth +
          "px;"),
      (m._isStart = y),
      m.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (m.style.cssText = v),
      (m.innerText = t || t === 0 ? e + "-" + t : e),
      b.children[0] ? b.insertBefore(m, b.children[0]) : b.appendChild(m),
      (m._offset = m["offset" + r.op.d2]),
      js(m, 0, r, y),
      m
    );
  }, "_createMarker"),
  js = a(function (e, t, i, r) {
    var s = { display: "block" },
      o = i[r ? "os2" : "p2"],
      l = i[r ? "p2" : "os2"];
    (e._isFlipped = r),
      (s[i.a + "Percent"] = r ? -100 : 0),
      (s[i.a] = r ? "1px" : 0),
      (s["border" + o + _n] = 1),
      (s["border" + l + _n] = 0),
      (s[i.p] = t + "px"),
      V.set(e, s);
  }, "_positionMarker"),
  te = [],
  Ia = {},
  ps,
  Eu = a(function () {
    return st() - Ut > 34 && (ps || (ps = requestAnimationFrame(Li)));
  }, "_sync"),
  Wr = a(function () {
    (!mt || !mt.isPressed || mt.startX > de.clientWidth) &&
      (re.cache++,
      mt ? ps || (ps = requestAnimationFrame(Li)) : Li(),
      Ut || Lr("scrollStart"),
      (Ut = st()));
  }, "_onScroll"),
  Zo = a(function () {
    (Od = ie.innerWidth), (Ad = ie.innerHeight);
  }, "_setBaseDimensions"),
  $n = a(function (e) {
    re.cache++,
      (e === !0 ||
        (!nt &&
          !Md &&
          !ge.fullscreenElement &&
          !ge.webkitFullscreenElement &&
          (!Oa ||
            Od !== ie.innerWidth ||
            Math.abs(ie.innerHeight - Ad) > ie.innerHeight * 0.25))) &&
        ho.restart(!0);
  }, "_onResize"),
  Or = {},
  _g = [],
  Fd = a(function n() {
    return Ye(j, "scrollEnd", n) || vr(!0);
  }, "_softRefresh"),
  Lr = a(function (e) {
    return (
      (Or[e] &&
        Or[e].map(function (t) {
          return t();
        })) ||
      _g
    );
  }, "_dispatch"),
  Mt = [],
  Bd = a(function (e) {
    for (var t = 0; t < Mt.length; t += 5)
      (!e || (Mt[t + 4] && Mt[t + 4].query === e)) &&
        ((Mt[t].style.cssText = Mt[t + 1]),
        Mt[t].getBBox && Mt[t].setAttribute("transform", Mt[t + 2] || ""),
        (Mt[t + 3].uncache = 1));
  }, "_revertRecorded"),
  bl = a(function (e, t) {
    var i;
    for (gt = 0; gt < te.length; gt++)
      (i = te[gt]),
        i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
    (po = !0), t && Bd(t), t || Lr("revert");
  }, "_revertAll"),
  Vd = a(function (e, t) {
    re.cache++,
      (t || !vt) &&
        re.forEach(function (i) {
          return lt(i) && i.cacheID++ && (i.rec = 0);
        }),
      At(e) && (ie.history.scrollRestoration = ml = e);
  }, "_clearScrollMemory"),
  vt,
  Tr = 0,
  Cu,
  wg = a(function () {
    if (Cu !== Tr) {
      var e = (Cu = Tr);
      requestAnimationFrame(function () {
        return e === Tr && vr(!0);
      });
    }
  }, "_queueRefreshAll"),
  qd = a(function () {
    de.appendChild(sn),
      (gl = (!mt && sn.offsetHeight) || ie.innerHeight),
      de.removeChild(sn);
  }, "_refresh100vh"),
  ku = a(function (e) {
    return hs(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (t) {
      return (t.style.display = e ? "none" : "block");
    });
  }, "_hideAllMarkers"),
  vr = a(function (e, t) {
    if (
      ((Dt = ge.documentElement),
      (de = ge.body),
      (pl = [ie, ge, Dt, de]),
      Ut && !e && !po)
    ) {
      Xe(j, "scrollEnd", Fd);
      return;
    }
    qd(),
      (vt = j.isRefreshing = !0),
      re.forEach(function (r) {
        return lt(r) && ++r.cacheID && (r.rec = r());
      });
    var i = Lr("refreshInit");
    Pd && j.sort(),
      t || bl(),
      re.forEach(function (r) {
        lt(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
      }),
      te.slice(0).forEach(function (r) {
        return r.refresh();
      }),
      (po = !1),
      te.forEach(function (r) {
        if (r._subPinOffset && r.pin) {
          var s = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
            o = r.pin[s];
          r.revert(!0, 1), r.adjustPinSpacing(r.pin[s] - o), r.refresh();
        }
      }),
      (Da = 1),
      ku(!0),
      te.forEach(function (r) {
        var s = mi(r.scroller, r._dir),
          o = r.vars.end === "max" || (r._endClamp && r.end > s),
          l = r._startClamp && r.start >= s;
        (o || l) &&
          r.setPositions(
            l ? s - 1 : r.start,
            o ? Math.max(l ? s : r.start + 1, s) : r.end,
            !0
          );
      }),
      ku(!1),
      (Da = 0),
      i.forEach(function (r) {
        return r && r.render && r.render(-1);
      }),
      re.forEach(function (r) {
        lt(r) &&
          (r.smooth &&
            requestAnimationFrame(function () {
              return (r.target.style.scrollBehavior = "smooth");
            }),
          r.rec && r(r.rec));
      }),
      Vd(ml, 1),
      ho.pause(),
      Tr++,
      (vt = 2),
      Li(2),
      te.forEach(function (r) {
        return lt(r.vars.onRefresh) && r.vars.onRefresh(r);
      }),
      (vt = j.isRefreshing = !1),
      Lr("refresh");
  }, "_refreshAll"),
  za = 0,
  Us = 1,
  Qn,
  Li = a(function (e) {
    if (e === 2 || (!vt && !po)) {
      (j.isUpdating = !0), Qn && Qn.update(0);
      var t = te.length,
        i = st(),
        r = i - Uo >= 50,
        s = t && te[0].scroll();
      if (
        ((Us = za > s ? -1 : 1),
        vt || (za = s),
        r &&
          (Ut && !ko && i - Ut > 200 && ((Ut = 0), Lr("scrollEnd")),
          (In = Uo),
          (Uo = i)),
        Us < 0)
      ) {
        for (gt = t; gt-- > 0; ) te[gt] && te[gt].update(0, r);
        Us = 1;
      } else for (gt = 0; gt < t; gt++) te[gt] && te[gt].update(0, r);
      j.isUpdating = !1;
    }
    ps = 0;
  }, "_updateAll"),
  Na = [
    Nd,
    Rd,
    yl,
    vl,
    Gt + Zn,
    Gt + jn,
    Gt + Kn,
    Gt + Un,
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
  Ks = Na.concat([
    xr,
    Sr,
    "boxSizing",
    "max" + _n,
    "max" + _l,
    "position",
    Gt,
    ze,
    ze + Kn,
    ze + jn,
    ze + Zn,
    ze + Un,
  ]),
  bg = a(function (e, t, i) {
    on(i);
    var r = e._gsap;
    if (r.spacerIsNative) on(r.spacerState);
    else if (e._gsap.swappedIn) {
      var s = t.parentNode;
      s && (s.insertBefore(e, t), s.removeChild(t));
    }
    e._gsap.swappedIn = !1;
  }, "_swapPinOut"),
  Qo = a(function (e, t, i, r) {
    if (!e._gsap.swappedIn) {
      for (var s = Na.length, o = t.style, l = e.style, u; s--; )
        (u = Na[s]), (o[u] = i[u]);
      (o.position = i.position === "absolute" ? "absolute" : "relative"),
        i.display === "inline" && (o.display = "inline-block"),
        (l[yl] = l[vl] = "auto"),
        (o.flexBasis = i.flexBasis || "auto"),
        (o.overflow = "visible"),
        (o.boxSizing = "border-box"),
        (o[xr] = mo(e, _t) + Be),
        (o[Sr] = mo(e, Ve) + Be),
        (o[ze] = l[Gt] = l[Rd] = l[Nd] = "0"),
        on(r),
        (l[xr] = l["max" + _n] = i[xr]),
        (l[Sr] = l["max" + _l] = i[Sr]),
        (l[ze] = i[ze]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  }, "_swapPinIn"),
  xg = /([A-Z])/g,
  on = a(function (e) {
    if (e) {
      var t = e.t.style,
        i = e.length,
        r = 0,
        s,
        o;
      for ((e.t._gsap || V.core.getCache(e.t)).uncache = 1; r < i; r += 2)
        (o = e[r + 1]),
          (s = e[r]),
          o
            ? (t[s] = o)
            : t[s] && t.removeProperty(s.replace(xg, "-$1").toLowerCase());
    }
  }, "_setState"),
  Ds = a(function (e) {
    for (var t = Ks.length, i = e.style, r = [], s = 0; s < t; s++)
      r.push(Ks[s], i[Ks[s]]);
    return (r.t = e), r;
  }, "_getState"),
  Sg = a(function (e, t, i) {
    for (var r = [], s = e.length, o = i ? 8 : 0, l; o < s; o += 2)
      (l = e[o]), r.push(l, l in t ? t[l] : e[o + 1]);
    return (r.t = e.t), r;
  }, "_copyState"),
  Zs = { left: 0, top: 0 },
  Pu = a(function (e, t, i, r, s, o, l, u, c, d, f, p, h, m) {
    lt(e) && (e = e(u)),
      At(e) &&
        e.substr(0, 3) === "max" &&
        (e = p + (e.charAt(4) === "=" ? Xs("0" + e.substr(3), i) : 0));
    var g = h ? h.time() : 0,
      w,
      b,
      y;
    if ((h && h.seek(0), isNaN(e) || (e = +e), Rn(e)))
      h &&
        (e = V.utils.mapRange(
          h.scrollTrigger.start,
          h.scrollTrigger.end,
          0,
          p,
          e
        )),
        l && js(l, i, r, !0);
    else {
      lt(t) && (t = t(u));
      var _ = (e || "0").split(" "),
        v,
        x,
        E,
        C;
      (y = xt(t, u) || de),
        (v = Ci(y) || {}),
        (!v || (!v.left && !v.top)) &&
          Yt(y).display === "none" &&
          ((C = y.style.display),
          (y.style.display = "block"),
          (v = Ci(y)),
          C ? (y.style.display = C) : y.style.removeProperty("display")),
        (x = Xs(_[0], v[r.d])),
        (E = Xs(_[1] || "0", i)),
        (e = v[r.p] - c[r.p] - d + x + s - E),
        l && js(l, E, r, i - E < 20 || (l._isStart && E > 20)),
        (i -= i - E);
    }
    if ((m && ((u[m] = e || -0.001), e < 0 && (e = 0)), o)) {
      var S = e + i,
        A = o._isStart;
      (w = "scroll" + r.d2),
        js(
          o,
          S,
          r,
          (A && S > 20) ||
            (!A && (f ? Math.max(de[w], Dt[w]) : o.parentNode[w]) <= S + 1)
        ),
        f &&
          ((c = Ci(l)),
          f && (o.style[r.op.p] = c[r.op.p] - r.op.m - o._offset + Be));
    }
    return (
      h &&
        y &&
        ((w = Ci(y)),
        h.seek(p),
        (b = Ci(y)),
        (h._caScrollDist = w[r.p] - b[r.p]),
        (e = (e / h._caScrollDist) * p)),
      h && h.seek(g),
      h ? e : Math.round(e)
    );
  }, "_parsePosition"),
  Tg = /(webkit|moz|length|cssText|inset)/i,
  Mu = a(function (e, t, i, r) {
    if (e.parentNode !== t) {
      var s = e.style,
        o,
        l;
      if (t === de) {
        (e._stOrig = s.cssText), (l = Yt(e));
        for (o in l)
          !+o &&
            !Tg.test(o) &&
            l[o] &&
            typeof s[o] == "string" &&
            o !== "0" &&
            (s[o] = l[o]);
        (s.top = i), (s.left = r);
      } else s.cssText = e._stOrig;
      (V.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }, "_reparent"),
  Wd = a(function (e, t, i) {
    var r = t,
      s = r;
    return function (o) {
      var l = Math.round(e());
      return (
        l !== r &&
          l !== s &&
          Math.abs(l - r) > 3 &&
          Math.abs(l - s) > 3 &&
          ((o = l), i && i()),
        (s = r),
        (r = Math.round(o)),
        r
      );
    };
  }, "_interruptionTracker"),
  Is = a(function (e, t, i) {
    var r = {};
    (r[t.p] = "+=" + i), V.set(e, r);
  }, "_shiftMarker"),
  Au = a(function (e, t) {
    var i = Qi(e, t),
      r = "_scroll" + t.p2,
      s = a(function o(l, u, c, d, f) {
        var p = o.tween,
          h = u.onComplete,
          m = {};
        c = c || i();
        var g = Wd(i, c, function () {
          p.kill(), (o.tween = 0);
        });
        return (
          (f = (d && f) || 0),
          (d = d || l - c),
          p && p.kill(),
          (u[r] = l),
          (u.inherit = !1),
          (u.modifiers = m),
          (m[r] = function () {
            return g(c + d * p.ratio + f * p.ratio * p.ratio);
          }),
          (u.onUpdate = function () {
            re.cache++, o.tween && Li();
          }),
          (u.onComplete = function () {
            (o.tween = 0), h && h.call(p);
          }),
          (p = o.tween = V.to(e, u)),
          p
        );
      }, "getTween");
    return (
      (e[r] = i),
      (i.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0);
      }),
      Xe(e, "wheel", i.wheelHandler),
      j.isTouch && Xe(e, "touchmove", i.wheelHandler),
      s
    );
  }, "_getTweenCreator"),
  j = (function () {
    function n(t, i) {
      Yr || n.register(V), La(this), this.init(t, i);
    }
    a(n, "ScrollTrigger");
    var e = n.prototype;
    return (
      (e.init = a(function (i, r) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !zn)
        ) {
          this.update = this.refresh = this.kill = ci;
          return;
        }
        i = Su(At(i) || Rn(i) || i.nodeType ? { trigger: i } : i, Os);
        var s = i,
          o = s.onUpdate,
          l = s.toggleClass,
          u = s.id,
          c = s.onToggle,
          d = s.onRefresh,
          f = s.scrub,
          p = s.trigger,
          h = s.pin,
          m = s.pinSpacing,
          g = s.invalidateOnRefresh,
          w = s.anticipatePin,
          b = s.onScrubComplete,
          y = s.onSnapComplete,
          _ = s.once,
          v = s.snap,
          x = s.pinReparent,
          E = s.pinSpacer,
          C = s.containerAnimation,
          S = s.fastScrollEnd,
          A = s.preventOverlaps,
          k =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? _t
              : Ve,
          L = !f && f !== 0,
          T = xt(i.scroller || ie),
          M = V.core.getCache(T),
          O = Ar(T),
          I =
            ("pinType" in i
              ? i.pinType
              : Ui(T, "pinType") || (O && "fixed")) === "fixed",
          N = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          R = L && i.toggleActions.split(" "),
          B = "markers" in i ? i.markers : Os.markers,
          q = O ? 0 : parseFloat(Yt(T)["border" + k.p2 + _n]) || 0,
          P = this,
          X =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(P);
            },
          K = pg(T, O, k),
          ce = mg(T, O),
          le = 0,
          ne = 0,
          ee = 0,
          fe = Qi(T, k),
          me,
          De,
          qe,
          ve,
          We,
          G,
          se,
          Ue,
          Ke,
          D,
          Pe,
          Kt,
          Bt,
          W,
          Vt,
          zi,
          rr,
          He,
          Ni,
          Me,
          Zt,
          qt,
          bi,
          xn,
          Ie,
          ys,
          xi,
          Rr,
          $r,
          Ri,
          nr,
          oe,
          sr,
          Qt,
          Jt,
          ei,
          or,
          Fr,
          Si;
        if (
          ((P._startClamp = P._endClamp = !1),
          (P._dir = k),
          (w *= 45),
          (P.scroller = T),
          (P.scroll = C ? C.time.bind(C) : fe),
          (ve = fe()),
          (P.vars = i),
          (r = r || i.animation),
          "refreshPriority" in i &&
            ((Pd = 1), i.refreshPriority === -9999 && (Qn = P)),
          (M.tweenScroll = M.tweenScroll || {
            top: Au(T, Ve),
            left: Au(T, _t),
          }),
          (P.tweenTo = me = M.tweenScroll[k.p]),
          (P.scrubDuration = function ($) {
            (sr = Rn($) && $),
              sr
                ? oe
                  ? oe.duration($)
                  : (oe = V.to(r, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: sr,
                      paused: !0,
                      onComplete: a(function () {
                        return b && b(P);
                      }, "onComplete"),
                    }))
                : (oe && oe.progress(1).kill(), (oe = 0));
          }),
          r &&
            ((r.vars.lazy = !1),
            (r._initted && !P.isReverted) ||
              (r.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                r.duration() &&
                r.render(0, !0, !0)),
            (P.animation = r.pause()),
            (r.scrollTrigger = P),
            P.scrubDuration(f),
            (Ri = 0),
            u || (u = r.vars.id)),
          v &&
            ((!pr(v) || v.push) && (v = { snapTo: v }),
            "scrollBehavior" in de.style &&
              V.set(O ? [de, Dt] : T, { scrollBehavior: "auto" }),
            re.forEach(function ($) {
              return (
                lt($) &&
                $.target === (O ? ge.scrollingElement || Dt : T) &&
                ($.smooth = !1)
              );
            }),
            (qe = lt(v.snapTo)
              ? v.snapTo
              : v.snapTo === "labels"
              ? vg(r)
              : v.snapTo === "labelsDirectional"
              ? yg(r)
              : v.directional !== !1
              ? function ($, Z) {
                  return wl(v.snapTo)($, st() - ne < 500 ? 0 : Z.direction);
                }
              : V.utils.snap(v.snapTo)),
            (Qt = v.duration || { min: 0.1, max: 2 }),
            (Qt = pr(Qt) ? Xn(Qt.min, Qt.max) : Xn(Qt, Qt)),
            (Jt = V.delayedCall(v.delay || sr / 2 || 0.1, function () {
              var $ = fe(),
                Z = st() - ne < 500,
                Y = me.tween;
              if (
                (Z || Math.abs(P.getVelocity()) < 10) &&
                !Y &&
                !ko &&
                le !== $
              ) {
                var Q = ($ - G) / W,
                  Ge = r && !L ? r.totalProgress() : Q,
                  ae = Z ? 0 : ((Ge - nr) / (st() - In)) * 1e3 || 0,
                  Ae = V.utils.clamp(-Q, 1 - Q, (qr(ae / 2) * ae) / 0.185),
                  tt = Q + (v.inertia === !1 ? 0 : Ae),
                  Ce,
                  _e,
                  he = v,
                  ti = he.onStart,
                  Se = he.onInterrupt,
                  Pt = he.onComplete;
                if (
                  ((Ce = qe(tt, P)),
                  Rn(Ce) || (Ce = tt),
                  (_e = Math.max(0, Math.round(G + Ce * W))),
                  $ <= se && $ >= G && _e !== $)
                ) {
                  if (Y && !Y._initted && Y.data <= qr(_e - $)) return;
                  v.inertia === !1 && (Ae = Ce - Q),
                    me(
                      _e,
                      {
                        duration: Qt(
                          qr(
                            (Math.max(qr(tt - Ge), qr(Ce - Ge)) * 0.185) /
                              ae /
                              0.05 || 0
                          )
                        ),
                        ease: v.ease || "power3",
                        data: qr(_e - $),
                        onInterrupt: a(function () {
                          return Jt.restart(!0) && Se && Se(P);
                        }, "onInterrupt"),
                        onComplete: a(function () {
                          P.update(),
                            (le = fe()),
                            r &&
                              !L &&
                              (oe
                                ? oe.resetTo(
                                    "totalProgress",
                                    Ce,
                                    r._tTime / r._tDur
                                  )
                                : r.progress(Ce)),
                            (Ri = nr =
                              r && !L ? r.totalProgress() : P.progress),
                            y && y(P),
                            Pt && Pt(P);
                        }, "onComplete"),
                      },
                      $,
                      Ae * W,
                      _e - $ - Ae * W
                    ),
                    ti && ti(P, me.tween);
                }
              } else P.isActive && le !== $ && Jt.restart(!0);
            }).pause())),
          u && (Ia[u] = P),
          (p = P.trigger = xt(p || (h !== !0 && h))),
          (Si = p && p._gsap && p._gsap.stRevert),
          Si && (Si = Si(P)),
          (h = h === !0 ? p : xt(h)),
          At(l) && (l = { targets: p, className: l }),
          h &&
            (m === !1 ||
              m === Gt ||
              (m =
                !m &&
                h.parentNode &&
                h.parentNode.style &&
                Yt(h.parentNode).display === "flex"
                  ? !1
                  : ze),
            (P.pin = h),
            (De = V.core.getCache(h)),
            De.spacer
              ? (Vt = De.pinState)
              : (E &&
                  ((E = xt(E)),
                  E && !E.nodeType && (E = E.current || E.nativeElement),
                  (De.spacerIsNative = !!E),
                  E && (De.spacerState = Ds(E))),
                (De.spacer = He = E || ge.createElement("div")),
                He.classList.add("pin-spacer"),
                u && He.classList.add("pin-spacer-" + u),
                (De.pinState = Vt = Ds(h))),
            i.force3D !== !1 && V.set(h, { force3D: !0 }),
            (P.spacer = He = De.spacer),
            ($r = Yt(h)),
            (xn = $r[m + k.os2]),
            (Me = V.getProperty(h)),
            (Zt = V.quickSetter(h, k.a, Be)),
            Qo(h, He, $r),
            (rr = Ds(h))),
          B)
        ) {
          (Kt = pr(B) ? Su(B, Tu) : Tu),
            (D = Ls("scroller-start", u, T, k, Kt, 0)),
            (Pe = Ls("scroller-end", u, T, k, Kt, 0, D)),
            (Ni = D["offset" + k.op.d2]);
          var Sn = xt(Ui(T, "content") || T);
          (Ue = this.markerStart = Ls("start", u, Sn, k, Kt, Ni, 0, C)),
            (Ke = this.markerEnd = Ls("end", u, Sn, k, Kt, Ni, 0, C)),
            C && (Fr = V.quickSetter([Ue, Ke], k.a, Be)),
            !I &&
              !(yi.length && Ui(T, "fixedMarkers") === !0) &&
              (gg(O ? de : T),
              V.set([D, Pe], { force3D: !0 }),
              (ys = V.quickSetter(D, k.a, Be)),
              (Rr = V.quickSetter(Pe, k.a, Be)));
        }
        if (C) {
          var J = C.vars.onUpdate,
            U = C.vars.onUpdateParams;
          C.eventCallback("onUpdate", function () {
            P.update(0, 0, 1), J && J.apply(C, U || []);
          });
        }
        if (
          ((P.previous = function () {
            return te[te.indexOf(P) - 1];
          }),
          (P.next = function () {
            return te[te.indexOf(P) + 1];
          }),
          (P.revert = function ($, Z) {
            if (!Z) return P.kill(!0);
            var Y = $ !== !1 || !P.enabled,
              Q = nt;
            Y !== P.isReverted &&
              (Y &&
                ((ei = Math.max(fe(), P.scroll.rec || 0)),
                (ee = P.progress),
                (or = r && r.progress())),
              Ue &&
                [Ue, Ke, D, Pe].forEach(function (Ge) {
                  return (Ge.style.display = Y ? "none" : "block");
                }),
              Y && ((nt = P), P.update(Y)),
              h &&
                (!x || !P.isActive) &&
                (Y ? bg(h, He, Vt) : Qo(h, He, Yt(h), Ie)),
              Y || P.update(Y),
              (nt = Q),
              (P.isReverted = Y));
          }),
          (P.refresh = function ($, Z, Y, Q) {
            if (!((nt || !P.enabled) && !Z)) {
              if (h && $ && Ut) {
                Xe(n, "scrollEnd", Fd);
                return;
              }
              !vt && X && X(P),
                (nt = P),
                me.tween && !Y && (me.tween.kill(), (me.tween = 0)),
                oe && oe.pause(),
                g &&
                  r &&
                  (r.revert({ kill: !1 }).invalidate(),
                  r.getChildren &&
                    r.getChildren(!0, !0, !1).forEach(function ($i) {
                      return $i.vars.immediateRender && $i.render(0, !0, !0);
                    })),
                P.isReverted || P.revert(!0, !0),
                (P._subPinOffset = !1);
              var Ge = K(),
                ae = ce(),
                Ae = C ? C.duration() : mi(T, k),
                tt = W <= 0.01 || !W,
                Ce = 0,
                _e = Q || 0,
                he = pr(Y) ? Y.end : i.end,
                ti = i.endTrigger || p,
                Se = pr(Y)
                  ? Y.start
                  : i.start || (i.start === 0 || !p ? 0 : h ? "0 0" : "0 100%"),
                Pt = (P.pinnedContainer =
                  i.pinnedContainer && xt(i.pinnedContainer, P)),
                oi = (p && Math.max(0, te.indexOf(P))) || 0,
                Ze = oi,
                Qe,
                it,
                ar,
                _s,
                rt,
                Fe,
                ai,
                Oo,
                Fl,
                Tn,
                li,
                En,
                ws;
              for (
                B &&
                pr(Y) &&
                ((En = V.getProperty(D, k.p)), (ws = V.getProperty(Pe, k.p)));
                Ze-- > 0;

              )
                (Fe = te[Ze]),
                  Fe.end || Fe.refresh(0, 1) || (nt = P),
                  (ai = Fe.pin),
                  ai &&
                    (ai === p || ai === h || ai === Pt) &&
                    !Fe.isReverted &&
                    (Tn || (Tn = []), Tn.unshift(Fe), Fe.revert(!0, !0)),
                  Fe !== te[Ze] && (oi--, Ze--);
              for (
                lt(Se) && (Se = Se(P)),
                  Se = _u(Se, "start", P),
                  G =
                    Pu(
                      Se,
                      p,
                      Ge,
                      k,
                      fe(),
                      Ue,
                      D,
                      P,
                      ae,
                      q,
                      I,
                      Ae,
                      C,
                      P._startClamp && "_startClamp"
                    ) || (h ? -0.001 : 0),
                  lt(he) && (he = he(P)),
                  At(he) &&
                    !he.indexOf("+=") &&
                    (~he.indexOf(" ")
                      ? (he = (At(Se) ? Se.split(" ")[0] : "") + he)
                      : ((Ce = Xs(he.substr(2), Ge)),
                        (he = At(Se)
                          ? Se
                          : (C
                              ? V.utils.mapRange(
                                  0,
                                  C.duration(),
                                  C.scrollTrigger.start,
                                  C.scrollTrigger.end,
                                  G
                                )
                              : G) + Ce),
                        (ti = p))),
                  he = _u(he, "end", P),
                  se =
                    Math.max(
                      G,
                      Pu(
                        he || (ti ? "100% 0" : Ae),
                        ti,
                        Ge,
                        k,
                        fe() + Ce,
                        Ke,
                        Pe,
                        P,
                        ae,
                        q,
                        I,
                        Ae,
                        C,
                        P._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  Ce = 0,
                  Ze = oi;
                Ze--;

              )
                (Fe = te[Ze]),
                  (ai = Fe.pin),
                  ai &&
                    Fe.start - Fe._pinPush <= G &&
                    !C &&
                    Fe.end > 0 &&
                    ((Qe =
                      Fe.end -
                      (P._startClamp ? Math.max(0, Fe.start) : Fe.start)),
                    ((ai === p && Fe.start - Fe._pinPush < G) || ai === Pt) &&
                      isNaN(Se) &&
                      (Ce += Qe * (1 - Fe.progress)),
                    ai === h && (_e += Qe));
              if (
                ((G += Ce),
                (se += Ce),
                P._startClamp && (P._startClamp += Ce),
                P._endClamp &&
                  !vt &&
                  ((P._endClamp = se || -0.001), (se = Math.min(se, mi(T, k)))),
                (W = se - G || ((G -= 0.01) && 0.001)),
                tt && (ee = V.utils.clamp(0, 1, V.utils.normalize(G, se, ei))),
                (P._pinPush = _e),
                Ue &&
                  Ce &&
                  ((Qe = {}),
                  (Qe[k.a] = "+=" + Ce),
                  Pt && (Qe[k.p] = "-=" + fe()),
                  V.set([Ue, Ke], Qe)),
                h && !(Da && P.end >= mi(T, k)))
              )
                (Qe = Yt(h)),
                  (_s = k === Ve),
                  (ar = fe()),
                  (qt = parseFloat(Me(k.a)) + _e),
                  !Ae &&
                    se > 1 &&
                    ((li = (O ? ge.scrollingElement || Dt : T).style),
                    (li = {
                      style: li,
                      value: li["overflow" + k.a.toUpperCase()],
                    }),
                    O &&
                      Yt(de)["overflow" + k.a.toUpperCase()] !== "scroll" &&
                      (li.style["overflow" + k.a.toUpperCase()] = "scroll")),
                  Qo(h, He, Qe),
                  (rr = Ds(h)),
                  (it = Ci(h, !0)),
                  (Oo = I && Qi(T, _s ? _t : Ve)()),
                  m
                    ? ((Ie = [m + k.os2, W + _e + Be]),
                      (Ie.t = He),
                      (Ze = m === ze ? mo(h, k) + W + _e : 0),
                      Ze &&
                        (Ie.push(k.d, Ze + Be),
                        He.style.flexBasis !== "auto" &&
                          (He.style.flexBasis = Ze + Be)),
                      on(Ie),
                      Pt &&
                        te.forEach(function ($i) {
                          $i.pin === Pt &&
                            $i.vars.pinSpacing !== !1 &&
                            ($i._subPinOffset = !0);
                        }),
                      I && fe(ei))
                    : ((Ze = mo(h, k)),
                      Ze &&
                        He.style.flexBasis !== "auto" &&
                        (He.style.flexBasis = Ze + Be)),
                  I &&
                    ((rt = {
                      top: it.top + (_s ? ar - G : Oo) + Be,
                      left: it.left + (_s ? Oo : ar - G) + Be,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (rt[xr] = rt["max" + _n] = Math.ceil(it.width) + Be),
                    (rt[Sr] = rt["max" + _l] = Math.ceil(it.height) + Be),
                    (rt[Gt] =
                      rt[Gt + Kn] =
                      rt[Gt + jn] =
                      rt[Gt + Zn] =
                      rt[Gt + Un] =
                        "0"),
                    (rt[ze] = Qe[ze]),
                    (rt[ze + Kn] = Qe[ze + Kn]),
                    (rt[ze + jn] = Qe[ze + jn]),
                    (rt[ze + Zn] = Qe[ze + Zn]),
                    (rt[ze + Un] = Qe[ze + Un]),
                    (zi = Sg(Vt, rt, x)),
                    vt && fe(0)),
                  r
                    ? ((Fl = r._initted),
                      Xo(1),
                      r.render(r.duration(), !0, !0),
                      (bi = Me(k.a) - qt + W + _e),
                      (xi = Math.abs(W - bi) > 1),
                      I && xi && zi.splice(zi.length - 2, 2),
                      r.render(0, !0, !0),
                      Fl || r.invalidate(!0),
                      r.parent || r.totalTime(r.totalTime()),
                      Xo(0))
                    : (bi = W),
                  li &&
                    (li.value
                      ? (li.style["overflow" + k.a.toUpperCase()] = li.value)
                      : li.style.removeProperty("overflow-" + k.a));
              else if (p && fe() && !C)
                for (it = p.parentNode; it && it !== de; )
                  it._pinOffset &&
                    ((G -= it._pinOffset), (se -= it._pinOffset)),
                    (it = it.parentNode);
              Tn &&
                Tn.forEach(function ($i) {
                  return $i.revert(!1, !0);
                }),
                (P.start = G),
                (P.end = se),
                (ve = We = vt ? ei : fe()),
                !C && !vt && (ve < ei && fe(ei), (P.scroll.rec = 0)),
                P.revert(!1, !0),
                (ne = st()),
                Jt && ((le = -1), Jt.restart(!0)),
                (nt = 0),
                r &&
                  L &&
                  (r._initted || or) &&
                  r.progress() !== or &&
                  r.progress(or || 0, !0).render(r.time(), !0, !0),
                (tt || ee !== P.progress || C || g || (r && !r._initted)) &&
                  (r &&
                    !L &&
                    (r._initted || ee || r.vars.immediateRender !== !1) &&
                    r.totalProgress(
                      C && G < -0.001 && !ee ? V.utils.normalize(G, se, 0) : ee,
                      !0
                    ),
                  (P.progress = tt || (ve - G) / W === ee ? 0 : ee)),
                h && m && (He._pinOffset = Math.round(P.progress * bi)),
                oe && oe.invalidate(),
                isNaN(En) ||
                  ((En -= V.getProperty(D, k.p)),
                  (ws -= V.getProperty(Pe, k.p)),
                  Is(D, k, En),
                  Is(Ue, k, En - (Q || 0)),
                  Is(Pe, k, ws),
                  Is(Ke, k, ws - (Q || 0))),
                tt && !vt && P.update(),
                d && !vt && !Bt && ((Bt = !0), d(P), (Bt = !1));
            }
          }),
          (P.getVelocity = function () {
            return ((fe() - We) / (st() - In)) * 1e3 || 0;
          }),
          (P.endAnimation = function () {
            Mn(P.callbackAnimation),
              r &&
                (oe
                  ? oe.progress(1)
                  : r.paused()
                  ? L || Mn(r, P.direction < 0, 1)
                  : Mn(r, r.reversed()));
          }),
          (P.labelToScroll = function ($) {
            return (
              (r &&
                r.labels &&
                (G || P.refresh() || G) + (r.labels[$] / r.duration()) * W) ||
              0
            );
          }),
          (P.getTrailing = function ($) {
            var Z = te.indexOf(P),
              Y = P.direction > 0 ? te.slice(0, Z).reverse() : te.slice(Z + 1);
            return (
              At($)
                ? Y.filter(function (Q) {
                    return Q.vars.preventOverlaps === $;
                  })
                : Y
            ).filter(function (Q) {
              return P.direction > 0 ? Q.end <= G : Q.start >= se;
            });
          }),
          (P.update = function ($, Z, Y) {
            if (!(C && !Y && !$)) {
              var Q = vt === !0 ? ei : P.scroll(),
                Ge = $ ? 0 : (Q - G) / W,
                ae = Ge < 0 ? 0 : Ge > 1 ? 1 : Ge || 0,
                Ae = P.progress,
                tt,
                Ce,
                _e,
                he,
                ti,
                Se,
                Pt,
                oi;
              if (
                (Z &&
                  ((We = ve),
                  (ve = C ? fe() : Q),
                  v && ((nr = Ri), (Ri = r && !L ? r.totalProgress() : ae))),
                w &&
                  h &&
                  !nt &&
                  !ks &&
                  Ut &&
                  (!ae && G < Q + ((Q - We) / (st() - In)) * w
                    ? (ae = 1e-4)
                    : ae === 1 &&
                      se > Q + ((Q - We) / (st() - In)) * w &&
                      (ae = 0.9999)),
                ae !== Ae && P.enabled)
              ) {
                if (
                  ((tt = P.isActive = !!ae && ae < 1),
                  (Ce = !!Ae && Ae < 1),
                  (Se = tt !== Ce),
                  (ti = Se || !!ae != !!Ae),
                  (P.direction = ae > Ae ? 1 : -1),
                  (P.progress = ae),
                  ti &&
                    !nt &&
                    ((_e = ae && !Ae ? 0 : ae === 1 ? 1 : Ae === 1 ? 2 : 3),
                    L &&
                      ((he =
                        (!Se && R[_e + 1] !== "none" && R[_e + 1]) || R[_e]),
                      (oi =
                        r &&
                        (he === "complete" || he === "reset" || he in r)))),
                  A &&
                    (Se || oi) &&
                    (oi || f || !r) &&
                    (lt(A)
                      ? A(P)
                      : P.getTrailing(A).forEach(function (ar) {
                          return ar.endAnimation();
                        })),
                  L ||
                    (oe && !nt && !ks
                      ? (oe._dp._time - oe._start !== oe._time &&
                          oe.render(oe._dp._time - oe._start),
                        oe.resetTo
                          ? oe.resetTo("totalProgress", ae, r._tTime / r._tDur)
                          : ((oe.vars.totalProgress = ae),
                            oe.invalidate().restart()))
                      : r && r.totalProgress(ae, !!(nt && (ne || $)))),
                  h)
                ) {
                  if (($ && m && (He.style[m + k.os2] = xn), !I))
                    Zt(Nn(qt + bi * ae));
                  else if (ti) {
                    if (
                      ((Pt = !$ && ae > Ae && se + 1 > Q && Q + 1 >= mi(T, k)),
                      x)
                    )
                      if (!$ && (tt || Pt)) {
                        var Ze = Ci(h, !0),
                          Qe = Q - G;
                        Mu(
                          h,
                          de,
                          Ze.top + (k === Ve ? Qe : 0) + Be,
                          Ze.left + (k === Ve ? 0 : Qe) + Be
                        );
                      } else Mu(h, He);
                    on(tt || Pt ? zi : rr),
                      (xi && ae < 1 && tt) ||
                        Zt(qt + (ae === 1 && !Pt ? bi : 0));
                  }
                }
                v && !me.tween && !nt && !ks && Jt.restart(!0),
                  l &&
                    (Se || (_ && ae && (ae < 1 || !jo))) &&
                    hs(l.targets).forEach(function (ar) {
                      return ar.classList[tt || _ ? "add" : "remove"](
                        l.className
                      );
                    }),
                  o && !L && !$ && o(P),
                  ti && !nt
                    ? (L &&
                        (oi &&
                          (he === "complete"
                            ? r.pause().totalProgress(1)
                            : he === "reset"
                            ? r.restart(!0).pause()
                            : he === "restart"
                            ? r.restart(!0)
                            : r[he]()),
                        o && o(P)),
                      (Se || !jo) &&
                        (c && Se && Ko(P, c),
                        N[_e] && Ko(P, N[_e]),
                        _ && (ae === 1 ? P.kill(!1, 1) : (N[_e] = 0)),
                        Se || ((_e = ae === 1 ? 1 : 3), N[_e] && Ko(P, N[_e]))),
                      S &&
                        !tt &&
                        Math.abs(P.getVelocity()) > (Rn(S) ? S : 2500) &&
                        (Mn(P.callbackAnimation),
                        oe
                          ? oe.progress(1)
                          : Mn(r, he === "reverse" ? 1 : !ae, 1)))
                    : L && o && !nt && o(P);
              }
              if (Rr) {
                var it = C ? (Q / C.duration()) * (C._caScrollDist || 0) : Q;
                ys(it + (D._isFlipped ? 1 : 0)), Rr(it);
              }
              Fr && Fr((-Q / C.duration()) * (C._caScrollDist || 0));
            }
          }),
          (P.enable = function ($, Z) {
            P.enabled ||
              ((P.enabled = !0),
              Xe(T, "resize", $n),
              O || Xe(T, "scroll", Wr),
              X && Xe(n, "refreshInit", X),
              $ !== !1 && ((P.progress = ee = 0), (ve = We = le = fe())),
              Z !== !1 && P.refresh());
          }),
          (P.getTween = function ($) {
            return $ && me ? me.tween : oe;
          }),
          (P.setPositions = function ($, Z, Y, Q) {
            if (C) {
              var Ge = C.scrollTrigger,
                ae = C.duration(),
                Ae = Ge.end - Ge.start;
              ($ = Ge.start + (Ae * $) / ae), (Z = Ge.start + (Ae * Z) / ae);
            }
            P.refresh(
              !1,
              !1,
              {
                start: wu($, Y && !!P._startClamp),
                end: wu(Z, Y && !!P._endClamp),
              },
              Q
            ),
              P.update();
          }),
          (P.adjustPinSpacing = function ($) {
            if (Ie && $) {
              var Z = Ie.indexOf(k.d) + 1;
              (Ie[Z] = parseFloat(Ie[Z]) + $ + Be),
                (Ie[1] = parseFloat(Ie[1]) + $ + Be),
                on(Ie);
            }
          }),
          (P.disable = function ($, Z) {
            if (
              P.enabled &&
              ($ !== !1 && P.revert(!0, !0),
              (P.enabled = P.isActive = !1),
              Z || (oe && oe.pause()),
              (ei = 0),
              De && (De.uncache = 1),
              X && Ye(n, "refreshInit", X),
              Jt && (Jt.pause(), me.tween && me.tween.kill() && (me.tween = 0)),
              !O)
            ) {
              for (var Y = te.length; Y--; )
                if (te[Y].scroller === T && te[Y] !== P) return;
              Ye(T, "resize", $n), O || Ye(T, "scroll", Wr);
            }
          }),
          (P.kill = function ($, Z) {
            P.disable($, Z), oe && !Z && oe.kill(), u && delete Ia[u];
            var Y = te.indexOf(P);
            Y >= 0 && te.splice(Y, 1),
              Y === gt && Us > 0 && gt--,
              (Y = 0),
              te.forEach(function (Q) {
                return Q.scroller === P.scroller && (Y = 1);
              }),
              Y || vt || (P.scroll.rec = 0),
              r &&
                ((r.scrollTrigger = null),
                $ && r.revert({ kill: !1 }),
                Z || r.kill()),
              Ue &&
                [Ue, Ke, D, Pe].forEach(function (Q) {
                  return Q.parentNode && Q.parentNode.removeChild(Q);
                }),
              Qn === P && (Qn = 0),
              h &&
                (De && (De.uncache = 1),
                (Y = 0),
                te.forEach(function (Q) {
                  return Q.pin === h && Y++;
                }),
                Y || (De.spacer = 0)),
              i.onKill && i.onKill(P);
          }),
          te.push(P),
          P.enable(!1, !1),
          Si && Si(P),
          r && r.add && !W)
        ) {
          var ue = P.update;
          (P.update = function () {
            (P.update = ue), re.cache++, G || se || P.refresh();
          }),
            V.delayedCall(0.01, P.update),
            (W = 0.01),
            (G = se = 0);
        } else P.refresh();
        h && wg();
      }, "init")),
      (n.register = a(function (i) {
        return (
          Yr ||
            ((V = i || Dd()), Ld() && window.document && n.enable(), (Yr = zn)),
          Yr
        );
      }, "register")),
      (n.defaults = a(function (i) {
        if (i) for (var r in i) Os[r] = i[r];
        return Os;
      }, "defaults")),
      (n.disable = a(function (i, r) {
        (zn = 0),
          te.forEach(function (o) {
            return o[r ? "kill" : "disable"](i);
          }),
          Ye(ie, "wheel", Wr),
          Ye(ge, "scroll", Wr),
          clearInterval(Cs),
          Ye(ge, "touchcancel", ci),
          Ye(de, "touchstart", ci),
          Ms(Ye, ge, "pointerdown,touchstart,mousedown", bu),
          Ms(Ye, ge, "pointerup,touchend,mouseup", xu),
          ho.kill(),
          Ps(Ye);
        for (var s = 0; s < re.length; s += 3)
          As(Ye, re[s], re[s + 1]), As(Ye, re[s], re[s + 2]);
      }, "disable")),
      (n.enable = a(function () {
        if (
          ((ie = window),
          (ge = document),
          (Dt = ge.documentElement),
          (de = ge.body),
          V &&
            ((hs = V.utils.toArray),
            (Xn = V.utils.clamp),
            (La = V.core.context || ci),
            (Xo = V.core.suppressOverwrites || ci),
            (ml = ie.history.scrollRestoration || "auto"),
            (za = ie.pageYOffset || 0),
            V.core.globals("ScrollTrigger", n),
            de))
        ) {
          (zn = 1),
            (sn = document.createElement("div")),
            (sn.style.height = "100vh"),
            (sn.style.position = "absolute"),
            qd(),
            hg(),
            Le.register(V),
            (n.isTouch = Le.isTouch),
            (Bi =
              Le.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Oa = Le.isTouch === 1),
            Xe(ie, "wheel", Wr),
            (pl = [ie, ge, Dt, de]),
            V.matchMedia &&
              ((n.matchMedia = function (c) {
                var d = V.matchMedia(),
                  f;
                for (f in c) d.add(f, c[f]);
                return d;
              }),
              V.addEventListener("matchMediaInit", function () {
                return bl();
              }),
              V.addEventListener("matchMediaRevert", function () {
                return Bd();
              }),
              V.addEventListener("matchMedia", function () {
                vr(0, 1), Lr("matchMedia");
              }),
              V.matchMedia().add("(orientation: portrait)", function () {
                return Zo(), Zo;
              })),
            Zo(),
            Xe(ge, "scroll", Wr);
          var i = de.hasAttribute("style"),
            r = de.style,
            s = r.borderTopStyle,
            o = V.core.Animation.prototype,
            l,
            u;
          for (
            o.revert ||
              Object.defineProperty(o, "revert", {
                value: a(function () {
                  return this.time(-0.01, !0);
                }, "value"),
              }),
              r.borderTopStyle = "solid",
              l = Ci(de),
              Ve.m = Math.round(l.top + Ve.sc()) || 0,
              _t.m = Math.round(l.left + _t.sc()) || 0,
              s ? (r.borderTopStyle = s) : r.removeProperty("border-top-style"),
              i || (de.setAttribute("style", ""), de.removeAttribute("style")),
              Cs = setInterval(Eu, 250),
              V.delayedCall(0.5, function () {
                return (ks = 0);
              }),
              Xe(ge, "touchcancel", ci),
              Xe(de, "touchstart", ci),
              Ms(Xe, ge, "pointerdown,touchstart,mousedown", bu),
              Ms(Xe, ge, "pointerup,touchend,mouseup", xu),
              Aa = V.utils.checkPrefix("transform"),
              Ks.push(Aa),
              Yr = st(),
              ho = V.delayedCall(0.2, vr).pause(),
              Xr = [
                ge,
                "visibilitychange",
                function () {
                  var c = ie.innerWidth,
                    d = ie.innerHeight;
                  ge.hidden
                    ? ((vu = c), (yu = d))
                    : (vu !== c || yu !== d) && $n();
                },
                ge,
                "DOMContentLoaded",
                vr,
                ie,
                "load",
                vr,
                ie,
                "resize",
                $n,
              ],
              Ps(Xe),
              te.forEach(function (c) {
                return c.enable(0, 1);
              }),
              u = 0;
            u < re.length;
            u += 3
          )
            As(Ye, re[u], re[u + 1]), As(Ye, re[u], re[u + 2]);
        }
      }, "enable")),
      (n.config = a(function (i) {
        "limitCallbacks" in i && (jo = !!i.limitCallbacks);
        var r = i.syncInterval;
        (r && clearInterval(Cs)) || ((Cs = r) && setInterval(Eu, r)),
          "ignoreMobileResize" in i &&
            (Oa = n.isTouch === 1 && i.ignoreMobileResize),
          "autoRefreshEvents" in i &&
            (Ps(Ye) || Ps(Xe, i.autoRefreshEvents || "none"),
            (Md = (i.autoRefreshEvents + "").indexOf("resize") === -1));
      }, "config")),
      (n.scrollerProxy = a(function (i, r) {
        var s = xt(i),
          o = re.indexOf(s),
          l = Ar(s);
        ~o && re.splice(o, l ? 6 : 2),
          r && (l ? yi.unshift(ie, r, de, r, Dt, r) : yi.unshift(s, r));
      }, "scrollerProxy")),
      (n.clearMatchMedia = a(function (i) {
        te.forEach(function (r) {
          return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
        });
      }, "clearMatchMedia")),
      (n.isInViewport = a(function (i, r, s) {
        var o = (At(i) ? xt(i) : i).getBoundingClientRect(),
          l = o[s ? xr : Sr] * r || 0;
        return s
          ? o.right - l > 0 && o.left + l < ie.innerWidth
          : o.bottom - l > 0 && o.top + l < ie.innerHeight;
      }, "isInViewport")),
      (n.positionInViewport = a(function (i, r, s) {
        At(i) && (i = xt(i));
        var o = i.getBoundingClientRect(),
          l = o[s ? xr : Sr],
          u =
            r == null
              ? l / 2
              : r in go
              ? go[r] * l
              : ~r.indexOf("%")
              ? (parseFloat(r) * l) / 100
              : parseFloat(r) || 0;
        return s ? (o.left + u) / ie.innerWidth : (o.top + u) / ie.innerHeight;
      }, "positionInViewport")),
      (n.killAll = a(function (i) {
        if (
          (te.slice(0).forEach(function (s) {
            return s.vars.id !== "ScrollSmoother" && s.kill();
          }),
          i !== !0)
        ) {
          var r = Or.killAll || [];
          (Or = {}),
            r.forEach(function (s) {
              return s();
            });
        }
      }, "killAll")),
      n
    );
  })();
j.version = "3.13.0";
j.saveStyles = function (n) {
  return n
    ? hs(n).forEach(function (e) {
        if (e && e.style) {
          var t = Mt.indexOf(e);
          t >= 0 && Mt.splice(t, 5),
            Mt.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              V.core.getCache(e),
              La()
            );
        }
      })
    : Mt;
};
j.revert = function (n, e) {
  return bl(!n, e);
};
j.create = function (n, e) {
  return new j(n, e);
};
j.refresh = function (n) {
  return n ? $n(!0) : (Yr || j.register()) && vr(!0);
};
j.update = function (n) {
  return ++re.cache && Li(n === !0 ? 2 : 0);
};
j.clearScrollMemory = Vd;
j.maxScroll = function (n, e) {
  return mi(n, e ? _t : Ve);
};
j.getScrollFunc = function (n, e) {
  return Qi(xt(n), e ? _t : Ve);
};
j.getById = function (n) {
  return Ia[n];
};
j.getAll = function () {
  return te.filter(function (n) {
    return n.vars.id !== "ScrollSmoother";
  });
};
j.isScrolling = function () {
  return !!Ut;
};
j.snapDirectional = wl;
j.addEventListener = function (n, e) {
  var t = Or[n] || (Or[n] = []);
  ~t.indexOf(e) || t.push(e);
};
j.removeEventListener = function (n, e) {
  var t = Or[n],
    i = t && t.indexOf(e);
  i >= 0 && t.splice(i, 1);
};
j.batch = function (n, e) {
  var t = [],
    i = {},
    r = e.interval || 0.016,
    s = e.batchMax || 1e9,
    o = a(function (c, d) {
      var f = [],
        p = [],
        h = V.delayedCall(r, function () {
          d(f, p), (f = []), (p = []);
        }).pause();
      return function (m) {
        f.length || h.restart(!0),
          f.push(m.trigger),
          p.push(m),
          s <= f.length && h.progress(1);
      };
    }, "proxyCallback"),
    l;
  for (l in e)
    i[l] =
      l.substr(0, 2) === "on" && lt(e[l]) && l !== "onRefreshInit"
        ? o(l, e[l])
        : e[l];
  return (
    lt(s) &&
      ((s = s()),
      Xe(j, "refresh", function () {
        return (s = e.batchMax());
      })),
    hs(n).forEach(function (u) {
      var c = {};
      for (l in i) c[l] = i[l];
      (c.trigger = u), t.push(j.create(c));
    }),
    t
  );
};
var Ou = a(function (e, t, i, r) {
    return (
      t > r ? e(r) : t < 0 && e(0),
      i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
    );
  }, "_clampScrollAndGetDurationMultiplier"),
  Jo = a(function n(e, t) {
    t === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          t === !0
            ? "auto"
            : t
            ? "pan-" + t + (Le.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === Dt && n(de, t);
  }, "_allowNativePanning"),
  zs = { auto: 1, scroll: 1 },
  Eg = a(function (e) {
    var t = e.event,
      i = e.target,
      r = e.axis,
      s = (t.changedTouches ? t.changedTouches[0] : t).target,
      o = s._gsap || V.core.getCache(s),
      l = st(),
      u;
    if (!o._isScrollT || l - o._isScrollT > 2e3) {
      for (
        ;
        s &&
        s !== de &&
        ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
          !(zs[(u = Yt(s)).overflowY] || zs[u.overflowX]));

      )
        s = s.parentNode;
      (o._isScroll =
        s &&
        s !== i &&
        !Ar(s) &&
        (zs[(u = Yt(s)).overflowY] || zs[u.overflowX])),
        (o._isScrollT = l);
    }
    (o._isScroll || r === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
  }, "_nestedScroll"),
  Hd = a(function (e, t, i, r) {
    return Le.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (r = r && Eg),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: a(function () {
        return i && Xe(ge, Le.eventTypes[0], Du, !1, !0);
      }, "onEnable"),
      onDisable: a(function () {
        return Ye(ge, Le.eventTypes[0], Du, !0);
      }, "onDisable"),
    });
  }, "_inputObserver"),
  Cg = /(input|label|select|textarea)/i,
  Lu,
  Du = a(function (e) {
    var t = Cg.test(e.target.tagName);
    (t || Lu) && ((e._gsapAllow = !0), (Lu = t));
  }, "_captureInputs"),
  kg = a(function (e) {
    pr(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var t = e,
      i = t.normalizeScrollX,
      r = t.momentum,
      s = t.allowNestedScroll,
      o = t.onRelease,
      l,
      u,
      c = xt(e.target) || Dt,
      d = V.core.globals().ScrollSmoother,
      f = d && d.get(),
      p =
        Bi &&
        ((e.content && xt(e.content)) ||
          (f && e.content !== !1 && !f.smooth() && f.content())),
      h = Qi(c, Ve),
      m = Qi(c, _t),
      g = 1,
      w =
        (Le.isTouch && ie.visualViewport
          ? ie.visualViewport.scale * ie.visualViewport.width
          : ie.outerWidth) / ie.innerWidth,
      b = 0,
      y = lt(r)
        ? function () {
            return r(l);
          }
        : function () {
            return r || 2.8;
          },
      _,
      v,
      x = Hd(c, e.type, !0, s),
      E = a(function () {
        return (v = !1);
      }, "resumeTouchMove"),
      C = ci,
      S = ci,
      A = a(function () {
        (u = mi(c, Ve)),
          (S = Xn(Bi ? 1 : 0, u)),
          i && (C = Xn(0, mi(c, _t))),
          (_ = Tr);
      }, "updateClamps"),
      k = a(function () {
        (p._gsap.y = Nn(parseFloat(p._gsap.y) + h.offset) + "px"),
          (p.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(p._gsap.y) +
            ", 0, 1)"),
          (h.offset = h.cacheID = 0);
      }, "removeContentOffset"),
      L = a(function () {
        if (v) {
          requestAnimationFrame(E);
          var B = Nn(l.deltaY / 2),
            q = S(h.v - B);
          if (p && q !== h.v + h.offset) {
            h.offset = q - h.v;
            var P = Nn((parseFloat(p && p._gsap.y) || 0) - h.offset);
            (p.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              P +
              ", 0, 1)"),
              (p._gsap.y = P + "px"),
              (h.cacheID = re.cache),
              Li();
          }
          return !0;
        }
        h.offset && k(), (v = !0);
      }, "ignoreDrag"),
      T,
      M,
      O,
      I,
      N = a(function () {
        A(),
          T.isActive() &&
            T.vars.scrollY > u &&
            (h() > u ? T.progress(1) && h(u) : T.resetTo("scrollY", u));
      }, "onResize");
    return (
      p && V.set(p, { y: "+=0" }),
      (e.ignoreCheck = function (R) {
        return (
          (Bi && R.type === "touchmove" && L()) ||
          (g > 1.05 && R.type !== "touchstart") ||
          l.isGesturing ||
          (R.touches && R.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        v = !1;
        var R = g;
        (g = Nn(((ie.visualViewport && ie.visualViewport.scale) || 1) / w)),
          T.pause(),
          R !== g && Jo(c, g > 1.01 ? !0 : i ? !1 : "x"),
          (M = m()),
          (O = h()),
          A(),
          (_ = Tr);
      }),
      (e.onRelease = e.onGestureStart =
        function (R, B) {
          if ((h.offset && k(), !B)) I.restart(!0);
          else {
            re.cache++;
            var q = y(),
              P,
              X;
            i &&
              ((P = m()),
              (X = P + (q * 0.05 * -R.velocityX) / 0.227),
              (q *= Ou(m, P, X, mi(c, _t))),
              (T.vars.scrollX = C(X))),
              (P = h()),
              (X = P + (q * 0.05 * -R.velocityY) / 0.227),
              (q *= Ou(h, P, X, mi(c, Ve))),
              (T.vars.scrollY = S(X)),
              T.invalidate().duration(q).play(0.01),
              ((Bi && T.vars.scrollY >= u) || P >= u - 1) &&
                V.to({}, { onUpdate: N, duration: q });
          }
          o && o(R);
        }),
      (e.onWheel = function () {
        T._ts && T.pause(), st() - b > 1e3 && ((_ = 0), (b = st()));
      }),
      (e.onChange = function (R, B, q, P, X) {
        if (
          (Tr !== _ && A(),
          B && i && m(C(P[2] === B ? M + (R.startX - R.x) : m() + B - P[1])),
          q)
        ) {
          h.offset && k();
          var K = X[2] === q,
            ce = K ? O + R.startY - R.y : h() + q - X[1],
            le = S(ce);
          K && ce !== le && (O += le - ce), h(le);
        }
        (q || B) && Li();
      }),
      (e.onEnable = function () {
        Jo(c, i ? !1 : "x"),
          j.addEventListener("refresh", N),
          Xe(ie, "resize", N),
          h.smooth &&
            ((h.target.style.scrollBehavior = "auto"),
            (h.smooth = m.smooth = !1)),
          x.enable();
      }),
      (e.onDisable = function () {
        Jo(c, !0),
          Ye(ie, "resize", N),
          j.removeEventListener("refresh", N),
          x.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (l = new Le(e)),
      (l.iOS = Bi),
      Bi && !h() && h(1),
      Bi && V.ticker.add(ci),
      (I = l._dc),
      (T = V.to(l, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Wd(h, h(), function () {
            return T.pause();
          }),
        },
        onUpdate: Li,
        onComplete: I.vars.onComplete,
      })),
      l
    );
  }, "_getScrollNormalizer");
j.sort = function (n) {
  if (lt(n)) return te.sort(n);
  var e = ie.pageYOffset || 0;
  return (
    j.getAll().forEach(function (t) {
      return (t._sortY = t.trigger
        ? e + t.trigger.getBoundingClientRect().top
        : t.start + ie.innerHeight);
    }),
    te.sort(
      n ||
        function (t, i) {
          return (
            (t.vars.refreshPriority || 0) * -1e6 +
            (t.vars.containerAnimation ? 1e6 : t._sortY) -
            ((i.vars.containerAnimation ? 1e6 : i._sortY) +
              (i.vars.refreshPriority || 0) * -1e6)
          );
        }
    )
  );
};
j.observe = function (n) {
  return new Le(n);
};
j.normalizeScroll = function (n) {
  if (typeof n > "u") return mt;
  if (n === !0 && mt) return mt.enable();
  if (n === !1) {
    mt && mt.kill(), (mt = n);
    return;
  }
  var e = n instanceof Le ? n : kg(n);
  return mt && mt.target === e.target && mt.kill(), Ar(e.target) && (mt = e), e;
};
j.core = {
  _getVelocityProp: Ma,
  _inputObserver: Hd,
  _scrollers: re,
  _proxies: yi,
  bridge: {
    ss: a(function () {
      Ut || Lr("scrollStart"), (Ut = st());
    }, "ss"),
    ref: a(function () {
      return nt;
    }, "ref"),
  },
};
Dd() && V.registerPlugin(j);
let An,
  Hr,
  Ra,
  Pg = a(() => Ra || be.register(window.gsap), "_initIfNecessary"),
  Iu = typeof Intl < "u" ? new Intl.Segmenter() : 0,
  vo = a(
    (n) =>
      typeof n == "string"
        ? vo(document.querySelectorAll(n))
        : "length" in n
        ? Array.from(n)
        : [n],
    "_toArray$2"
  ),
  zu = a((n) => vo(n).filter((e) => e instanceof HTMLElement), "_elements"),
  $a = [],
  ea = a(function () {}, "_context"),
  Mg = /\s+/g,
  Nu = new RegExp(
    "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
    "gu"
  ),
  Ru = { left: 0, top: 0, width: 0, height: 0 },
  $u = a((n, e) => {
    if (e) {
      let t = new Set(n.join("").match(e) || $a),
        i = n.length,
        r,
        s,
        o,
        l;
      if (t.size)
        for (; --i > -1; ) {
          s = n[i];
          for (o of t)
            if (o.startsWith(s) && o.length > s.length) {
              for (
                r = 0, l = s;
                o.startsWith((l += n[i + ++r])) && l.length < o.length;

              );
              if (r && l.length === o.length) {
                (n[i] = o), n.splice(i + 1, r);
                break;
              }
            }
        }
    }
    return n;
  }, "_stretchToFitSpecialChars"),
  Fu = a(
    (n) =>
      window.getComputedStyle(n).display === "inline" &&
      (n.style.display = "inline-block"),
    "_disallowInline"
  ),
  Gr = a(
    (n, e, t) =>
      e.insertBefore(typeof n == "string" ? document.createTextNode(n) : n, t),
    "_insertNodeBefore"
  ),
  Fa = a((n, e, t) => {
    let i = e[n + "sClass"] || "",
      { tag: r = "div", aria: s = "auto", propIndex: o = !1 } = e,
      l = n === "line" ? "block" : "inline-block",
      u = i.indexOf("++") > -1,
      c = a((d) => {
        let f = document.createElement(r),
          p = t.length + 1;
        return (
          i && (f.className = i + (u ? " " + i + p : "")),
          o && f.style.setProperty("--" + n, p + ""),
          s !== "none" && f.setAttribute("aria-hidden", "true"),
          r !== "span" &&
            ((f.style.position = "relative"), (f.style.display = l)),
          (f.textContent = d),
          t.push(f),
          f
        );
      }, "wrapper");
    return u && (i = i.replace("++", "")), (c.collection = t), c;
  }, "_getWrapper"),
  Ag = a((n, e, t, i) => {
    let r = Fa("line", t, i),
      s = window.getComputedStyle(n).textAlign || "left";
    return (o, l) => {
      let u = r("");
      for (u.style.textAlign = s, n.insertBefore(u, e[o]); o < l; o++)
        u.appendChild(e[o]);
      u.normalize();
    };
  }, "_getLineWrapper"),
  Gd = a((n, e, t, i, r, s, o, l, u, c) => {
    var d;
    let f = Array.from(n.childNodes),
      p = 0,
      { wordDelimiter: h, reduceWhiteSpace: m = !0, prepareText: g } = e,
      w = n.getBoundingClientRect(),
      b = w,
      y = !m && window.getComputedStyle(n).whiteSpace.substring(0, 3) === "pre",
      _ = 0,
      v = t.collection,
      x,
      E,
      C,
      S,
      A,
      k,
      L,
      T,
      M,
      O,
      I,
      N,
      R,
      B,
      q,
      P,
      X,
      K;
    for (
      typeof h == "object"
        ? ((C = h.delimiter || h), (E = h.replaceWith || ""))
        : (E = h === "" ? "" : h || " "),
        x = E !== " ";
      p < f.length;
      p++
    )
      if (((S = f[p]), S.nodeType === 3)) {
        for (
          q = S.textContent || "",
            m
              ? (q = q.replace(Mg, " "))
              : y &&
                (q = q.replace(
                  /\n/g,
                  E +
                    `
`
                )),
            g && (q = g(q, n)),
            S.textContent = q,
            A = E || C ? q.split(C || E) : q.match(l) || $a,
            X = A[A.length - 1],
            T = x ? X.slice(-1) === " " : !X,
            X || A.pop(),
            b = w,
            L = x ? A[0].charAt(0) === " " : !A[0],
            L && Gr(" ", n, S),
            A[0] || A.shift(),
            $u(A, u),
            (s && c) || (S.textContent = ""),
            M = 1;
          M <= A.length;
          M++
        )
          if (
            ((P = A[M - 1]),
            !m &&
              y &&
              P.charAt(0) ===
                `
` &&
              ((d = S.previousSibling) == null || d.remove(),
              Gr(document.createElement("br"), n, S),
              (P = P.slice(1))),
            !m && P === "")
          )
            Gr(E, n, S);
          else if (P === " ") n.insertBefore(document.createTextNode(" "), S);
          else {
            if (
              (x && P.charAt(0) === " " && Gr(" ", n, S),
              _ && M === 1 && !L && v.indexOf(_.parentNode) > -1
                ? ((k = v[v.length - 1]),
                  k.appendChild(document.createTextNode(i ? "" : P)))
                : ((k = t(i ? "" : P)),
                  Gr(k, n, S),
                  _ && M === 1 && !L && k.insertBefore(_, k.firstChild)),
              i)
            )
              for (
                I = Iu
                  ? $u(
                      [...Iu.segment(P)].map((ce) => ce.segment),
                      u
                    )
                  : P.match(l) || $a,
                  K = 0;
                K < I.length;
                K++
              )
                k.appendChild(
                  I[K] === " " ? document.createTextNode(" ") : i(I[K])
                );
            if (s && c) {
              if (
                ((q = S.textContent = q.substring(P.length + 1, q.length)),
                (O = k.getBoundingClientRect()),
                O.top > b.top && O.left <= b.left)
              ) {
                for (N = n.cloneNode(), R = n.childNodes[0]; R && R !== k; )
                  (B = R), (R = R.nextSibling), N.appendChild(B);
                n.parentNode.insertBefore(N, n), r && Fu(N);
              }
              b = O;
            }
            (M < A.length || T) &&
              Gr(
                M >= A.length ? " " : x && P.slice(-1) === " " ? " " + E : E,
                n,
                S
              );
          }
        n.removeChild(S), (_ = 0);
      } else
        S.nodeType === 1 &&
          (o && o.indexOf(S) > -1
            ? (v.indexOf(S.previousSibling) > -1 &&
                v[v.length - 1].appendChild(S),
              (_ = S))
            : (Gd(S, e, t, i, r, s, o, l, u, !0), (_ = 0)),
          r && Fu(S));
  }, "_splitWordsAndCharsRecursively");
var Cr;
const Yd =
  ((Cr = class {
    constructor(e, t) {
      (this.isSplit = !1),
        Pg(),
        (this.elements = zu(e)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this.masks = []),
        (this.vars = t),
        (this._split = () => this.isSplit && this.split(this.vars));
      let i = [],
        r,
        s = a(() => {
          let o = i.length,
            l;
          for (; o--; ) {
            l = i[o];
            let u = l.element.offsetWidth;
            if (u !== l.width) {
              (l.width = u), this._split();
              return;
            }
          }
        }, "checkWidths");
      (this._data = {
        orig: i,
        obs:
          typeof ResizeObserver < "u" &&
          new ResizeObserver(() => {
            clearTimeout(r), (r = setTimeout(s, 200));
          }),
      }),
        ea(this),
        this.split(t);
    }
    split(e) {
      this.isSplit && this.revert(), (this.vars = e = e || this.vars || {});
      let {
          type: t = "chars,words,lines",
          aria: i = "auto",
          deepSlice: r = !0,
          smartWrap: s,
          onSplit: o,
          autoSplit: l = !1,
          specialChars: u,
          mask: c,
        } = this.vars,
        d = t.indexOf("lines") > -1,
        f = t.indexOf("chars") > -1,
        p = t.indexOf("words") > -1,
        h = f && !p && !d,
        m =
          u && ("push" in u ? new RegExp("(?:" + u.join("|") + ")", "gu") : u),
        g = m ? new RegExp(m.source + "|" + Nu.source, "gu") : Nu,
        w = !!e.ignore && zu(e.ignore),
        { orig: b, animTime: y, obs: _ } = this._data,
        v;
      return (
        (f || p || d) &&
          (this.elements.forEach((x, E) => {
            (b[E] = {
              element: x,
              html: x.innerHTML,
              ariaL: x.getAttribute("aria-label"),
              ariaH: x.getAttribute("aria-hidden"),
            }),
              i === "auto"
                ? x.setAttribute("aria-label", (x.textContent || "").trim())
                : i === "hidden" && x.setAttribute("aria-hidden", "true");
            let C = [],
              S = [],
              A = [],
              k = f ? Fa("char", e, C) : null,
              L = Fa("word", e, S),
              T,
              M,
              O,
              I;
            if ((Gd(x, e, L, k, h, r && (d || h), w, g, m, !1), d)) {
              let N = vo(x.childNodes),
                R = Ag(x, N, e, A),
                B,
                q = [],
                P = 0,
                X = N.map((ce) =>
                  ce.nodeType === 1 ? ce.getBoundingClientRect() : Ru
                ),
                K = Ru;
              for (T = 0; T < N.length; T++)
                (B = N[T]),
                  B.nodeType === 1 &&
                    (B.nodeName === "BR"
                      ? (q.push(B), R(P, T + 1), (P = T + 1), (K = X[P]))
                      : (T &&
                          X[T].top > K.top &&
                          X[T].left <= K.left &&
                          (R(P, T), (P = T)),
                        (K = X[T])));
              P < T && R(P, T),
                q.forEach((ce) => {
                  var le;
                  return (le = ce.parentNode) == null
                    ? void 0
                    : le.removeChild(ce);
                });
            }
            if (!p) {
              for (T = 0; T < S.length; T++)
                if (
                  ((M = S[T]),
                  f || !M.nextSibling || M.nextSibling.nodeType !== 3)
                )
                  if (s && !d) {
                    for (
                      O = document.createElement("span"),
                        O.style.whiteSpace = "nowrap";
                      M.firstChild;

                    )
                      O.appendChild(M.firstChild);
                    M.replaceWith(O);
                  } else M.replaceWith(...M.childNodes);
                else
                  (I = M.nextSibling),
                    I &&
                      I.nodeType === 3 &&
                      ((I.textContent =
                        (M.textContent || "") + (I.textContent || "")),
                      M.remove());
              (S.length = 0), x.normalize();
            }
            this.lines.push(...A), this.words.push(...S), this.chars.push(...C);
          }),
          c &&
            this[c] &&
            this.masks.push(
              ...this[c].map((x) => {
                let E = x.cloneNode();
                return (
                  x.replaceWith(E),
                  E.appendChild(x),
                  x.className &&
                    (E.className = x.className.replace(
                      /(\b\w+\b)/g,
                      "$1-mask"
                    )),
                  (E.style.overflow = "clip"),
                  E
                );
              })
            )),
        (this.isSplit = !0),
        Hr && (l ? Hr.addEventListener("loadingdone", this._split) : Hr.status),
        (v = o && o(this)) &&
          v.totalTime &&
          (this._data.anim = y ? v.totalTime(y) : v),
        d &&
          l &&
          this.elements.forEach((x, E) => {
            (b[E].width = x.offsetWidth), _ && _.observe(x);
          }),
        this
      );
    }
    revert() {
      var e, t;
      let { orig: i, anim: r, obs: s } = this._data;
      return (
        s && s.disconnect(),
        i.forEach(({ element: o, html: l, ariaL: u, ariaH: c }) => {
          (o.innerHTML = l),
            u
              ? o.setAttribute("aria-label", u)
              : o.removeAttribute("aria-label"),
            c
              ? o.setAttribute("aria-hidden", c)
              : o.removeAttribute("aria-hidden");
        }),
        (this.chars.length =
          this.words.length =
          this.lines.length =
          i.length =
          this.masks.length =
            0),
        (this.isSplit = !1),
        Hr?.removeEventListener("loadingdone", this._split),
        r && ((this._data.animTime = r.totalTime()), r.revert()),
        (t = (e = this.vars).onRevert) == null || t.call(e, this),
        this
      );
    }
    static create(e, t) {
      return new Cr(e, t);
    }
    static register(e) {
      (An = An || e || window.gsap),
        An && ((vo = An.utils.toArray), (ea = An.core.context || ea)),
        !Ra && window.innerWidth > 0 && ((Hr = document.fonts), (Ra = !0));
    }
  }),
  a(Cr, "_SplitText"),
  Cr);
Yd.version = "3.13.0";
let be = Yd;
z.registerPlugin(j, be);
const Og = a(async () => {
    await document.fonts.ready;
    const n = document.querySelectorAll("[split-text]");
    n.length &&
      n.forEach((e) => {
        e &&
          (e.hasAttribute("data-split-initialized") ||
            (e.setAttribute("data-split-initialized", "true"),
            be.create(e, {
              type: "lines",
              autoSplit: !0,
              mask: "lines",
              linesClass: "split-line",
              tag: "div",
              onSplit(t) {
                t.lines.forEach((s) => {
                  const o = document.createElement("div");
                  o.setAttribute("data-line-wrapper", ""),
                    (o.style.overflow = "clip"),
                    (o.style.paddingBottom = "5px"),
                    (o.style.position = "relative"),
                    s.parentNode.insertBefore(o, s),
                    o.appendChild(s);
                });
                const i = e.querySelectorAll("[data-line-wrapper]"),
                  r = Array.from(i).map((s) => s.firstChild);
                z.set(r, { willChange: "transform" }),
                  z.from(r, {
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
                      toggleActions: "play none none none",
                      once: !0,
                    },
                  });
              },
            })));
      });
  }, "splitAllText"),
  er = a(() => {
    Og();
  }, "initSplitTextAnimate");
z.registerPlugin(j);
const tr = a(() => {
  const n =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
  let e = [],
    t;
  const i = a(() => {
      e.forEach((l) => {
        l && typeof l.kill == "function" && l.kill();
      }),
        (e = []),
        j.getAll().forEach((l) => l.kill());
    }, "cleanup"),
    r = a((l) => {
      if (!l) return;
      const u = l.getAttribute("motion");
      if (u !== "fade" && u !== "move-up") return;
      const c = parseFloat(l.getAttribute("motion-duration") || "1.4"),
        d = parseFloat(l.getAttribute("motion-delay") || "0"),
        f = l.getAttribute("motion-ease") || "power2.out",
        p = l.getAttribute("motion-start") || "top 80%";
      let h;
      u === "fade"
        ? (z.set(l, { opacity: 0 }),
          (h = z.to(l, {
            opacity: 1,
            duration: c,
            delay: d,
            ease: f,
            scrollTrigger: {
              trigger: l,
              start: p,
              toggleActions: "play none none reverse",
            },
          })))
        : u === "move-up" &&
          (z.set(l, { opacity: 0, y: 50 }),
          (h = z.to(l, {
            opacity: 1,
            y: 0,
            duration: c,
            delay: d,
            ease: f,
            scrollTrigger: {
              trigger: l,
              start: p,
              toggleActions: "play none none reverse",
            },
          }))),
        h && e.push(h);
    }, "createAnimation"),
    s = a(() => {
      const l = document.querySelectorAll("[motion]");
      l.length && l.forEach((u) => r(u));
    }, "createAllAnimations"),
    o = a(() => {
      n ||
        (clearTimeout(t),
        (t = setTimeout(() => {
          i(),
            setTimeout(() => {
              s(), j.refresh();
            }, 100);
        }, 250)));
    }, "handleResize");
  s(), n || window.addEventListener("resize", o);
}, "initGenAnimation");
z.registerPlugin(be);
const Lg = a((n) => {
  const e = document.querySelectorAll("[page-load='component']"),
    t = document.querySelectorAll("[page-load='wrap']"),
    i = document.querySelectorAll("[page-load='gradient']"),
    r = document.querySelectorAll("[page-load='text']"),
    s = document.querySelectorAll(".page_cover");
  if (!e.length) return z.timeline();
  const o = localStorage.getItem("pageLoadPlayed") !== "true",
    l = sessionStorage.getItem("sessionPageLoadPlayed") !== "true";
  o && localStorage.setItem("pageLoadPlayed", "true"),
    l && sessionStorage.setItem("sessionPageLoadPlayed", "true");
  const u = o || l,
    c = z.timeline();
  z.set(i, { opacity: 0 }), z.set(t, { opacity: 0 });
  let d = [],
    f = [];
  return (
    u
      ? (r.forEach((p) => {
          const h = be.create(p, {
            type: "lines",
            mask: "lines",
            linesClass: "pg-load-text-line",
            onSplit: a(function (m) {
              return (
                z.set(m.lines, {
                  opacity: 0,
                  yPercent: 100,
                  willChange: "transform, opacity",
                }),
                m
              );
            }, "onSplit"),
          });
          d.push(h);
        }),
        (f = d.flatMap((p) => p.lines)))
      : z.set(r, { opacity: 0 }),
    c.to(i, {
      opacity: u ? 1 : 0,
      duration: u ? (o ? 2 : 1.6) : 0.6,
      ease: "power1.out",
    }),
    c.to(t, { opacity: 1, duration: u ? 1 : 0.8, ease: "power2.inOut" }, "<"),
    c.to(
      s,
      {
        opacity: 0,
        duration: u ? 1 : 0.8,
        pointerEvents: "none",
        ease: "power2.inOut",
      },
      "<"
    ),
    u &&
      (c.to(r, { opacity: 1, duration: 1, ease: "power2.inOut" }),
      c.to(
        f,
        {
          opacity: 1,
          duration: 1.6,
          stagger: 0.2,
          yPercent: 0,
          ease: "expo.inOut",
        },
        "-=1.4"
      ),
      c.to(f, {
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        yPercent: -100,
        ease: "expo.inOut",
        delay: 0.8,
      })),
    c.to(
      e,
      {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: u ? 1.6 : 1.2,
        ease: "expo.inOut",
        onComplete: a(() => {
          z.set(e, { pointerEvents: "none" }),
            u && d.forEach((p) => p.revert());
        }, "onComplete"),
      },
      u ? (o ? "-=0.7" : "-=0.5") : "-=0.2"
    ),
    c
  );
}, "pageLoad");
z.registerPlugin(be);
const Dg = a((n) => {
    const e = a(
      () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
        window.innerWidth <= 768,
      "isMobile"
    );
    let t, i, r;
    const s = a(() => {
        t && typeof t.revert == "function" && (t.revert(), (t = null)),
          i && (i.kill(), (i = null)),
          document
            .querySelectorAll(".move-text, .home-hero-text-line")
            .forEach((d) => {
              if (d.parentNode && d.firstChild) {
                for (; d.firstChild; )
                  d.parentNode.insertBefore(d.firstChild, d);
                d.remove();
              }
            }),
          document.querySelectorAll("[home-hero='text'] span").forEach((d) => {
            const f = d.parentNode;
            f &&
              f !== d.parentNode.parentNode &&
              (f.parentNode.insertBefore(d, f), f.remove());
          });
      }, "cleanup"),
      o = a(() => {
        s();
        const u = document.querySelector("[home-hero='text']"),
          c = document.querySelector("[home-hero='btn']"),
          d = document.querySelector("[home-hero='visual']");
        u &&
          (t = be.create(u, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "home-hero-text-line",
            tag: "span",
            onSplit(f) {
              f.lines.forEach((h) => {
                const m = document.createElement("div");
                m.classList.add("move-text"),
                  h.parentNode.insertBefore(m, h),
                  m.appendChild(h);
              });
              const p = u.querySelectorAll("span");
              return (
                p.length &&
                  p.forEach((h) => {
                    const m = document.createElement("div");
                    (m.style.overflow = "clip"),
                      (m.style.paddingBottom = "3px"),
                      h.parentNode.insertBefore(m, h),
                      m.appendChild(h);
                  }),
                (i = z.timeline()),
                z.set(".move-text", { opacity: 0, yPercent: 100 }),
                z.set(c, { opacity: 0 }),
                z.set(d, { opacity: 0 }),
                i.to(".move-text", {
                  opacity: 1,
                  duration: 1.8,
                  stagger: 0.08,
                  ease: "expo.inOut",
                  yPercent: 0,
                }),
                i.to(c, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
                i.to(
                  d,
                  {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.4,
                    ease: "expo.inOut",
                  },
                  "-=1"
                ),
                i
              );
            },
          }));
      }, "createHomeTransitions"),
      l = a(() => {
        e() ||
          (clearTimeout(r),
          (r = setTimeout(() => {
            s(),
              setTimeout(() => {
                o();
              }, 100);
          }, 250)));
      }, "handleResize");
    o(), e() || window.addEventListener("resize", l);
  }, "initHomeTransitions"),
  ir = a((n) => {
    const e = document.querySelectorAll("[nav-load='component']"),
      t = document.querySelectorAll("[main-nav='brand']"),
      i = document.querySelectorAll("[nav-link='wrap']");
    if (!e.length && !t.length && !i.length) return z.timeline();
    e.length && z.set(e, { opacity: 0 }),
      t.length && z.set(t, { opacity: 0 }),
      i.length && z.set(i, { opacity: 0, yPercent: -100 });
    const r = z.timeline();
    return (
      e.length && r.to(e, { opacity: 1, duration: 1, ease: "expo.inOut" }),
      t.length &&
        r.to(t, { opacity: 1, duration: 1, ease: "power1.out" }, "-=0.8"),
      i.length &&
        r.to(
          i,
          { opacity: 1, yPercent: 0, duration: 0.6, stagger: 0.06 },
          "-=0.8"
        ),
      r
    );
  }, "navLoad");
let xe = {};
const xl = a(() => {
    if (xe.isMobile !== void 0) return xe.isMobile;
    const n = navigator.userAgent,
      e = "ontouchstart" in window || navigator.maxTouchPoints > 0,
      t = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        n
      ),
      i = window.innerWidth <= 768;
    return (xe.isMobile = e && (t || i)), xe.isMobile;
  }, "isMobile"),
  Ig = a(
    () => (xe.isDesktop !== void 0 || (xe.isDesktop = !xl()), xe.isDesktop),
    "isDesktop"
  ),
  Xd = a(() => {
    if (xe.hasMouseSupport !== void 0) return xe.hasMouseSupport;
    const n = window.matchMedia("(pointer: fine)").matches,
      e = Ig();
    return (xe.hasMouseSupport = n || e), xe.hasMouseSupport;
  }, "hasMouseSupport"),
  zg = a(() => {
    if (xe.prefersReducedMotion !== void 0) return xe.prefersReducedMotion;
    const n = window.matchMedia("(prefers-reduced-motion: reduce)");
    return (xe.prefersReducedMotion = n.matches), xe.prefersReducedMotion;
  }, "prefersReducedMotion"),
  Ng = a(() => {
    if (xe.isLowEndDevice !== void 0) return xe.isLowEndDevice;
    const n = navigator.hardwareConcurrency || 2,
      e = navigator.deviceMemory || 2,
      t = n <= 2,
      i = e <= 2,
      r =
        navigator.connection &&
        navigator.connection.effectiveType &&
        ["slow-2g", "2g", "3g"].includes(navigator.connection.effectiveType);
    return (xe.isLowEndDevice = xl() && (t || i || r)), xe.isLowEndDevice;
  }, "isLowEndDevice"),
  Rg = a(() => {
    xe = {};
  }, "clearDetectionCache");
let Ns = null;
const $g = a(() => {
    Ns && window.removeEventListener("resize", Ns);
    let n;
    (Ns = a(() => {
      clearTimeout(n),
        (n = setTimeout(() => {
          const e = xe.screenWidth,
            t = window.innerWidth;
          Math.abs(t - e) > 100 && (Rg(), (xe.screenWidth = t));
        }, 250));
    }, "resizeHandler")),
      window.addEventListener("resize", Ns),
      (xe.screenWidth = window.innerWidth);
  }, "initDeviceDetection"),
  Fg = a(() => {
    if (!Xd()) return;
    const n = document.querySelector("[home-hero='visual']"),
      e = document.querySelector("[home-hero='follow-button']");
    if (!n || !e) return;
    z.set(e, {
      xPercent: -50,
      yPercent: -50,
      willChange: "transform, opacity",
    });
    let t = !1;
    const i = n.getBoundingClientRect(),
      r = i.width / 2,
      s = i.height / 2;
    n.addEventListener("mouseenter", () => {
      t = !0;
    }),
      n.addEventListener("mouseleave", () => {
        (t = !1),
          z.to(e, { x: 0, y: 0, duration: 1.6, ease: "elastic.out(1.5, 0.5)" });
      }),
      window.addEventListener("mousemove", (o) => {
        if (t) {
          const l = o.clientX + 10,
            u = o.clientY + 10,
            c = e.parentElement.getBoundingClientRect(),
            d = l - c.left,
            f = u - c.top;
          z.to(e, {
            x: d - r + 50,
            y: f - s - 30,
            duration: 1.4,
            ease: "elastic.out(2, 0.75)",
          });
        }
      });
  }, "videoMouseFollow"),
  Bg = a(() => {
    Fg();
  }, "initVideoMouseFollow"),
  Bu = a(() => {
    qf(), bc(), er(), tr(), Bg();
    const n = Lg();
    n.add(() => ir(), "-=0.8"), n.add(() => Dg(), "-=1");
  }, "homeInit"),
  jd = a(() => {
    const n = document.querySelector(".swiper[review-slider='component']");
    n &&
      new Pr(n, {
        modules: [_c, yc, vc, wc],
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
          init: a(function () {
            const e = Array.from(this.slides).filter(
                (s) => !s.classList.contains("swiper-slide-duplicate")
              ).length,
              t = this.realIndex + 1,
              i = document.querySelector("[review-slider-count]"),
              r = document.querySelector("[review-slider-current]");
            i && (i.textContent = e), r && (r.textContent = t);
          }, "init"),
          slideChange: a(function () {
            const e = this.realIndex + 1,
              t = document.querySelector("[review-slider-current]");
            t && (t.textContent = e);
          }, "slideChange"),
        },
      });
  }, "initReviewSlider");
z.registerPlugin(j);
const Vg = a(() => {
    const n =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
    let e, t;
    const i = a(() => {
        e && (e.kill(), (e = null)), j.getAll().forEach((o) => o.kill());
      }, "cleanup"),
      r = a(() => {
        const o = document.querySelector("[impact-slide='main']"),
          l = o?.querySelectorAll("[impact-slide='component']");
        !o ||
          !l.length ||
          (l.forEach((u, c) => {
            z.set(u, {
              clipPath: c === 0 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
            });
          }),
          (e = z.timeline({
            scrollTrigger: {
              trigger: o,
              start: "top top",
              end: `+=${l.length * 100}%`,
              scrub: !0,
              pin: !1,
              markers: !1,
            },
          })),
          l.forEach((u, c) => {
            c !== 0 &&
              e.to(
                u,
                { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.inOut" },
                "+=0.33"
              );
          }));
      }, "createImpactSlide"),
      s = a(() => {
        n ||
          (clearTimeout(t),
          (t = setTimeout(() => {
            i(),
              setTimeout(() => {
                r(), j.refresh();
              }, 100);
          }, 250)));
      }, "handleResize");
    r(), n || window.addEventListener("resize", s);
  }, "initImpactSlide"),
  qg = a(() => {
    document.querySelectorAll("[image-index='wrap']").forEach((n) => {
      const e = n.querySelector("[image-index='large']"),
        t = n.querySelector("[image-index='small']"),
        i = a((u, c) => {
          const d = [];
          let f = u;
          for (; f && f !== c; )
            (f = f.parentElement), f && f !== c && d.push(f);
          return d;
        }, "getAllParents"),
        r = i(e, n),
        s = i(t, n),
        o = a((u, c, d) => {
          (u.style.zIndex = d),
            c.forEach((f) => {
              f.style.zIndex = d;
            });
        }, "setZIndex");
      o(e, r, "2"), o(t, s, "1");
      const l = a((u, c, d, f) => {
        o(u, d, "2"), o(c, f, "1");
      }, "handleClick");
      e.addEventListener("click", () => l(e, t, r, s)),
        t.addEventListener("click", () => l(t, e, s, r));
    });
  }, "imageIndex"),
  Sl = a(() => {
    qg();
  }, "initImageIndex"),
  Wg = a(() => {
    const n = document.querySelector(".swiper[about-slider='component']");
    n &&
      new Pr(n, {
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
          init: a(function () {
            const e = Array.from(this.slides).filter(
                (s) => !s.classList.contains("swiper-slide-duplicate")
              ).length,
              t = this.realIndex + 1,
              i = document.querySelector("[data-slider-count]"),
              r = document.querySelector("[data-slider-current]");
            i && (i.textContent = e), r && (r.textContent = t);
          }, "init"),
          slideChange: a(function () {
            const e = this.realIndex + 1,
              t = document.querySelector("[data-slider-current]");
            t && (t.textContent = e);
          }, "slideChange"),
        },
      });
  }, "initAboutSlider"),
  Nr = a((n) => {
    const e = document.querySelector(".page_overlay"),
      t = document.querySelector("[page-overlay='text-wrap']");
    if (!e || !t) return z.timeline();
    const i = z.timeline();
    return (
      i.fromTo(
        t,
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
        t,
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
  }, "pageEnter");
z.registerPlugin(be);
const Hg = a((n) => {
    const e = a(
      () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
        window.innerWidth <= 768,
      "isMobile"
    );
    let t, i, r;
    const s = a(() => {
        t && typeof t.revert == "function" && (t.revert(), (t = null)),
          i && (i.kill(), (i = null)),
          document
            .querySelectorAll(".move-text, .about-hero-text-line")
            .forEach((d) => {
              if (d.parentNode && d.firstChild) {
                for (; d.firstChild; )
                  d.parentNode.insertBefore(d.firstChild, d);
                d.remove();
              }
            }),
          document.querySelectorAll("[about-hero='text'] span").forEach((d) => {
            const f = d.parentNode;
            f &&
              f !== d.parentNode.parentNode &&
              (f.parentNode.insertBefore(d, f), f.remove());
          });
      }, "cleanup"),
      o = a(() => {
        s();
        const u = document.querySelector("[about-hero='text']"),
          c = document.querySelectorAll("[about-hero='visual']");
        u &&
          (t = be.create(u, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "about-hero-text-line",
            tag: "span",
            onSplit(d) {
              d.lines.forEach((p) => {
                const h = document.createElement("div");
                h.classList.add("move-text"),
                  p.parentNode.insertBefore(h, p),
                  h.appendChild(p);
              });
              const f = u.querySelectorAll("span");
              return (
                f.length &&
                  f.forEach((p) => {
                    const h = document.createElement("div");
                    (h.style.overflow = "clip"),
                      (h.style.paddingBottom = "3px"),
                      p.parentNode.insertBefore(h, p),
                      h.appendChild(p);
                  }),
                (i = z.timeline()),
                z.set(".move-text", { opacity: 0, yPercent: 100 }),
                z.set(c, { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }),
                i.to(".move-text", {
                  opacity: 1,
                  duration: 1.8,
                  stagger: 0.08,
                  ease: "expo.inOut",
                  yPercent: 0,
                }),
                i.to(
                  c,
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
            },
          }));
      }, "createAboutTransitions"),
      l = a(() => {
        e() ||
          (clearTimeout(r),
          (r = setTimeout(() => {
            s(),
              setTimeout(() => {
                o();
              }, 100);
          }, 250)));
      }, "handleResize");
    o(), e() || window.addEventListener("resize", l);
  }, "initAboutTransitions"),
  Gg = a(() => {
    Wg(), jd(), Vg(), Sl(), er(), tr();
    const n = Nr();
    n.add(() => ir(), "-=1"), n.add(() => Hg(), "-=1");
  }, "aboutInit");
var Yg = "1.3.1";
function Ud(n, e, t) {
  return Math.max(n, Math.min(e, t));
}
a(Ud, "clamp");
function Xg(n, e, t) {
  return (1 - t) * n + t * e;
}
a(Xg, "lerp");
function jg(n, e, t, i) {
  return Xg(n, e, 1 - Math.exp(-t * i));
}
a(jg, "damp");
function Ug(n, e) {
  return ((n % e) + e) % e;
}
a(Ug, "modulo");
var ln,
  Kg =
    ((ln = class {
      constructor() {
        H(this, "isRunning", !1);
        H(this, "value", 0);
        H(this, "from", 0);
        H(this, "to", 0);
        H(this, "currentTime", 0);
        H(this, "lerp");
        H(this, "duration");
        H(this, "easing");
        H(this, "onUpdate");
      }
      advance(e) {
        if (!this.isRunning) return;
        let t = !1;
        if (this.duration && this.easing) {
          this.currentTime += e;
          const i = Ud(0, this.currentTime / this.duration, 1);
          t = i >= 1;
          const r = t ? 1 : this.easing(i);
          this.value = this.from + (this.to - this.from) * r;
        } else
          this.lerp
            ? ((this.value = jg(this.value, this.to, this.lerp * 60, e)),
              Math.round(this.value) === this.to &&
                ((this.value = this.to), (t = !0)))
            : ((this.value = this.to), (t = !0));
        t && this.stop(), this.onUpdate?.(this.value, t);
      }
      stop() {
        this.isRunning = !1;
      }
      fromTo(
        e,
        t,
        { lerp: i, duration: r, easing: s, onStart: o, onUpdate: l }
      ) {
        (this.from = this.value = e),
          (this.to = t),
          (this.lerp = i),
          (this.duration = r),
          (this.easing = s),
          (this.currentTime = 0),
          (this.isRunning = !0),
          o?.(),
          (this.onUpdate = l);
      }
    }),
    a(ln, "Animate"),
    ln);
function Zg(n, e) {
  let t;
  return function (...i) {
    let r = this;
    clearTimeout(t),
      (t = setTimeout(() => {
        (t = void 0), n.apply(r, i);
      }, e));
  };
}
a(Zg, "debounce$1");
var un,
  Qg =
    ((un = class {
      constructor(e, t, { autoResize: i = !0, debounce: r = 250 } = {}) {
        H(this, "width", 0);
        H(this, "height", 0);
        H(this, "scrollHeight", 0);
        H(this, "scrollWidth", 0);
        H(this, "debouncedResize");
        H(this, "wrapperResizeObserver");
        H(this, "contentResizeObserver");
        H(
          this,
          "resize",
          a(() => {
            this.onWrapperResize(), this.onContentResize();
          }, "resize")
        );
        H(
          this,
          "onWrapperResize",
          a(() => {
            this.wrapper instanceof Window
              ? ((this.width = window.innerWidth),
                (this.height = window.innerHeight))
              : ((this.width = this.wrapper.clientWidth),
                (this.height = this.wrapper.clientHeight));
          }, "onWrapperResize")
        );
        H(
          this,
          "onContentResize",
          a(() => {
            this.wrapper instanceof Window
              ? ((this.scrollHeight = this.content.scrollHeight),
                (this.scrollWidth = this.content.scrollWidth))
              : ((this.scrollHeight = this.wrapper.scrollHeight),
                (this.scrollWidth = this.wrapper.scrollWidth));
          }, "onContentResize")
        );
        (this.wrapper = e),
          (this.content = t),
          i &&
            ((this.debouncedResize = Zg(this.resize, r)),
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
        this.wrapperResizeObserver?.disconnect(),
          this.contentResizeObserver?.disconnect(),
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
    }),
    a(un, "Dimensions"),
    un),
  cn,
  Kd =
    ((cn = class {
      constructor() {
        H(this, "events", {});
      }
      emit(e, ...t) {
        let i = this.events[e] || [];
        for (let r = 0, s = i.length; r < s; r++) i[r]?.(...t);
      }
      on(e, t) {
        return (
          this.events[e]?.push(t) || (this.events[e] = [t]),
          () => {
            this.events[e] = this.events[e]?.filter((i) => t !== i);
          }
        );
      }
      off(e, t) {
        this.events[e] = this.events[e]?.filter((i) => t !== i);
      }
      destroy() {
        this.events = {};
      }
    }),
    a(cn, "Emitter"),
    cn),
  Vu = 100 / 6,
  Fi = { passive: !1 },
  dn,
  Jg =
    ((dn = class {
      constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        H(this, "touchStart", { x: 0, y: 0 });
        H(this, "lastDelta", { x: 0, y: 0 });
        H(this, "window", { width: 0, height: 0 });
        H(this, "emitter", new Kd());
        H(
          this,
          "onTouchStart",
          a((e) => {
            const { clientX: t, clientY: i } = e.targetTouches
              ? e.targetTouches[0]
              : e;
            (this.touchStart.x = t),
              (this.touchStart.y = i),
              (this.lastDelta = { x: 0, y: 0 }),
              this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: e });
          }, "onTouchStart")
        );
        H(
          this,
          "onTouchMove",
          a((e) => {
            const { clientX: t, clientY: i } = e.targetTouches
                ? e.targetTouches[0]
                : e,
              r = -(t - this.touchStart.x) * this.options.touchMultiplier,
              s = -(i - this.touchStart.y) * this.options.touchMultiplier;
            (this.touchStart.x = t),
              (this.touchStart.y = i),
              (this.lastDelta = { x: r, y: s }),
              this.emitter.emit("scroll", { deltaX: r, deltaY: s, event: e });
          }, "onTouchMove")
        );
        H(
          this,
          "onTouchEnd",
          a((e) => {
            this.emitter.emit("scroll", {
              deltaX: this.lastDelta.x,
              deltaY: this.lastDelta.y,
              event: e,
            });
          }, "onTouchEnd")
        );
        H(
          this,
          "onWheel",
          a((e) => {
            let { deltaX: t, deltaY: i, deltaMode: r } = e;
            const s = r === 1 ? Vu : r === 2 ? this.window.width : 1,
              o = r === 1 ? Vu : r === 2 ? this.window.height : 1;
            (t *= s),
              (i *= o),
              (t *= this.options.wheelMultiplier),
              (i *= this.options.wheelMultiplier),
              this.emitter.emit("scroll", { deltaX: t, deltaY: i, event: e });
          }, "onWheel")
        );
        H(
          this,
          "onWindowResize",
          a(() => {
            this.window = {
              width: window.innerWidth,
              height: window.innerHeight,
            };
          }, "onWindowResize")
        );
        (this.element = e),
          (this.options = t),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, Fi),
          this.element.addEventListener("touchstart", this.onTouchStart, Fi),
          this.element.addEventListener("touchmove", this.onTouchMove, Fi),
          this.element.addEventListener("touchend", this.onTouchEnd, Fi);
      }
      on(e, t) {
        return this.emitter.on(e, t);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, Fi),
          this.element.removeEventListener("touchstart", this.onTouchStart, Fi),
          this.element.removeEventListener("touchmove", this.onTouchMove, Fi),
          this.element.removeEventListener("touchend", this.onTouchEnd, Fi);
      }
    }),
    a(dn, "VirtualScroll"),
    dn),
  fn,
  e0 =
    ((fn = class {
      constructor({
        wrapper: e = window,
        content: t = document.documentElement,
        eventsTarget: i = e,
        smoothWheel: r = !0,
        syncTouch: s = !1,
        syncTouchLerp: o = 0.075,
        touchInertiaMultiplier: l = 35,
        duration: u,
        easing: c = a(
          (A) => Math.min(1, 1.001 - Math.pow(2, -10 * A)),
          "easing"
        ),
        lerp: d = 0.1,
        infinite: f = !1,
        orientation: p = "vertical",
        gestureOrientation: h = "vertical",
        touchMultiplier: m = 1,
        wheelMultiplier: g = 1,
        autoResize: w = !0,
        prevent: b,
        virtualScroll: y,
        overscroll: _ = !0,
        autoRaf: v = !1,
        anchors: x = !1,
        autoToggle: E = !1,
        allowNestedScroll: C = !1,
        __experimental__naiveDimensions: S = !1,
      } = {}) {
        H(this, "_isScrolling", !1);
        H(this, "_isStopped", !1);
        H(this, "_isLocked", !1);
        H(this, "_preventNextNativeScrollEvent", !1);
        H(this, "_resetVelocityTimeout", null);
        H(this, "__rafID", null);
        H(this, "isTouching");
        H(this, "time", 0);
        H(this, "userData", {});
        H(this, "lastVelocity", 0);
        H(this, "velocity", 0);
        H(this, "direction", 0);
        H(this, "options");
        H(this, "targetScroll");
        H(this, "animatedScroll");
        H(this, "animate", new Kg());
        H(this, "emitter", new Kd());
        H(this, "dimensions");
        H(this, "virtualScroll");
        H(
          this,
          "onScrollEnd",
          a((e) => {
            e instanceof CustomEvent ||
              ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
                e.stopPropagation());
          }, "onScrollEnd")
        );
        H(
          this,
          "dispatchScrollendEvent",
          a(() => {
            this.options.wrapper.dispatchEvent(
              new CustomEvent("scrollend", {
                bubbles: this.options.wrapper === window,
                detail: { lenisScrollEnd: !0 },
              })
            );
          }, "dispatchScrollendEvent")
        );
        H(
          this,
          "onTransitionEnd",
          a((e) => {
            if (e.propertyName.includes("overflow")) {
              const t = this.isHorizontal ? "overflow-x" : "overflow-y",
                i = getComputedStyle(this.rootElement)[t];
              ["hidden", "clip"].includes(i) ? this.stop() : this.start();
            }
          }, "onTransitionEnd")
        );
        H(
          this,
          "onClick",
          a((e) => {
            const i = e
              .composedPath()
              .find(
                (r) =>
                  r instanceof HTMLAnchorElement &&
                  (r.getAttribute("href")?.startsWith("#") ||
                    r.getAttribute("href")?.startsWith("/#") ||
                    r.getAttribute("href")?.startsWith("./#"))
              );
            if (i) {
              const r = i.getAttribute("href");
              if (r) {
                const s =
                  typeof this.options.anchors == "object" &&
                  this.options.anchors
                    ? this.options.anchors
                    : void 0;
                let o = `#${r.split("#")[1]}`;
                ["#", "/#", "./#", "#top", "/#top", "./#top"].includes(r) &&
                  (o = 0),
                  this.scrollTo(o, s);
              }
            }
          }, "onClick")
        );
        H(
          this,
          "onPointerDown",
          a((e) => {
            e.button === 1 && this.reset();
          }, "onPointerDown")
        );
        H(
          this,
          "onVirtualScroll",
          a((e) => {
            if (
              typeof this.options.virtualScroll == "function" &&
              this.options.virtualScroll(e) === !1
            )
              return;
            const { deltaX: t, deltaY: i, event: r } = e;
            if (
              (this.emitter.emit("virtual-scroll", {
                deltaX: t,
                deltaY: i,
                event: r,
              }),
              r.ctrlKey || r.lenisStopPropagation)
            )
              return;
            const s = r.type.includes("touch"),
              o = r.type.includes("wheel");
            this.isTouching = r.type === "touchstart" || r.type === "touchmove";
            const l = t === 0 && i === 0;
            if (
              this.options.syncTouch &&
              s &&
              r.type === "touchstart" &&
              l &&
              !this.isStopped &&
              !this.isLocked
            ) {
              this.reset();
              return;
            }
            const c =
              (this.options.gestureOrientation === "vertical" && i === 0) ||
              (this.options.gestureOrientation === "horizontal" && t === 0);
            if (l || c) return;
            let d = r.composedPath();
            d = d.slice(0, d.indexOf(this.rootElement));
            const f = this.options.prevent;
            if (
              d.find(
                (b) =>
                  b instanceof HTMLElement &&
                  ((typeof f == "function" && f?.(b)) ||
                    b.hasAttribute?.("data-lenis-prevent") ||
                    (s && b.hasAttribute?.("data-lenis-prevent-touch")) ||
                    (o && b.hasAttribute?.("data-lenis-prevent-wheel")) ||
                    (this.options.allowNestedScroll &&
                      this.checkNestedScroll(b, { deltaX: t, deltaY: i })))
              )
            )
              return;
            if (this.isStopped || this.isLocked) {
              r.preventDefault();
              return;
            }
            if (
              !(
                (this.options.syncTouch && s) ||
                (this.options.smoothWheel && o)
              )
            ) {
              (this.isScrolling = "native"),
                this.animate.stop(),
                (r.lenisStopPropagation = !0);
              return;
            }
            let h = i;
            this.options.gestureOrientation === "both"
              ? (h = Math.abs(i) > Math.abs(t) ? i : t)
              : this.options.gestureOrientation === "horizontal" && (h = t),
              (!this.options.overscroll ||
                this.options.infinite ||
                (this.options.wrapper !== window &&
                  ((this.animatedScroll > 0 &&
                    this.animatedScroll < this.limit) ||
                    (this.animatedScroll === 0 && i > 0) ||
                    (this.animatedScroll === this.limit && i < 0)))) &&
                (r.lenisStopPropagation = !0),
              r.preventDefault();
            const m = s && this.options.syncTouch,
              w = s && r.type === "touchend" && Math.abs(h) > 5;
            w && (h = this.velocity * this.options.touchInertiaMultiplier),
              this.scrollTo(this.targetScroll + h, {
                programmatic: !1,
                ...(m
                  ? { lerp: w ? this.options.syncTouchLerp : 1 }
                  : {
                      lerp: this.options.lerp,
                      duration: this.options.duration,
                      easing: this.options.easing,
                    }),
              });
          }, "onVirtualScroll")
        );
        H(
          this,
          "onNativeScroll",
          a(() => {
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
          }, "onNativeScroll")
        );
        H(
          this,
          "raf",
          a((e) => {
            const t = e - (this.time || e);
            (this.time = e),
              this.animate.advance(t * 0.001),
              this.options.autoRaf &&
                (this.__rafID = requestAnimationFrame(this.raf));
          }, "raf")
        );
        (window.lenisVersion = Yg),
          (!e || e === document.documentElement) && (e = window),
          (this.options = {
            wrapper: e,
            content: t,
            eventsTarget: i,
            smoothWheel: r,
            syncTouch: s,
            syncTouchLerp: o,
            touchInertiaMultiplier: l,
            duration: u,
            easing: c,
            lerp: d,
            infinite: f,
            gestureOrientation: h,
            orientation: p,
            touchMultiplier: m,
            wheelMultiplier: g,
            autoResize: w,
            prevent: b,
            virtualScroll: y,
            overscroll: _,
            autoRaf: v,
            anchors: x,
            autoToggle: E,
            allowNestedScroll: C,
            __experimental__naiveDimensions: S,
          }),
          (this.dimensions = new Qg(e, t, { autoResize: w })),
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
          (this.virtualScroll = new Jg(i, {
            touchMultiplier: m,
            wheelMultiplier: g,
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
          immediate: i = !1,
          lock: r = !1,
          duration: s = this.options.duration,
          easing: o = this.options.easing,
          lerp: l = this.options.lerp,
          onStart: u,
          onComplete: c,
          force: d = !1,
          programmatic: f = !0,
          userData: p,
        } = {}
      ) {
        if (!((this.isStopped || this.isLocked) && !d)) {
          if (typeof e == "string" && ["top", "left", "start"].includes(e))
            e = 0;
          else if (
            typeof e == "string" &&
            ["bottom", "right", "end"].includes(e)
          )
            e = this.limit;
          else {
            let h;
            if (
              (typeof e == "string"
                ? (h = document.querySelector(e))
                : e instanceof HTMLElement && e?.nodeType && (h = e),
              h)
            ) {
              if (this.options.wrapper !== window) {
                const g = this.rootElement.getBoundingClientRect();
                t -= this.isHorizontal ? g.left : g.top;
              }
              const m = h.getBoundingClientRect();
              e = (this.isHorizontal ? m.left : m.top) + this.animatedScroll;
            }
          }
          if (typeof e == "number") {
            if (((e += t), (e = Math.round(e)), this.options.infinite)) {
              if (f) {
                this.targetScroll = this.animatedScroll = this.scroll;
                const h = e - this.animatedScroll;
                h > this.limit / 2
                  ? (e = e - this.limit)
                  : h < -this.limit / 2 && (e = e + this.limit);
              }
            } else e = Ud(0, e, this.limit);
            if (e === this.targetScroll) {
              u?.(this), c?.(this);
              return;
            }
            if (((this.userData = p ?? {}), i)) {
              (this.animatedScroll = this.targetScroll = e),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                c?.(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                });
              return;
            }
            f || (this.targetScroll = e),
              this.animate.fromTo(this.animatedScroll, e, {
                duration: s,
                easing: o,
                lerp: l,
                onStart: a(() => {
                  r && (this.isLocked = !0),
                    (this.isScrolling = "smooth"),
                    u?.(this);
                }, "onStart"),
                onUpdate: a((h, m) => {
                  (this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = h - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = h),
                    this.setScroll(this.scroll),
                    f && (this.targetScroll = h),
                    m || this.emit(),
                    m &&
                      (this.reset(),
                      this.emit(),
                      c?.(this),
                      (this.userData = {}),
                      requestAnimationFrame(() => {
                        this.dispatchScrollendEvent();
                      }),
                      this.preventNextNativeScrollEvent());
                }, "onUpdate"),
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
      checkNestedScroll(e, { deltaX: t, deltaY: i }) {
        const r = Date.now(),
          s = e._lenis ?? (e._lenis = {});
        let o, l, u, c, d, f, p, h;
        const m = this.options.gestureOrientation;
        if (r - (s.time ?? 0) > 2e3) {
          s.time = Date.now();
          const E = window.getComputedStyle(e);
          s.computedStyle = E;
          const C = E.overflowX,
            S = E.overflowY;
          if (
            ((o = ["auto", "overlay", "scroll"].includes(C)),
            (l = ["auto", "overlay", "scroll"].includes(S)),
            (s.hasOverflowX = o),
            (s.hasOverflowY = l),
            (!o && !l) ||
              (m === "vertical" && !l) ||
              (m === "horizontal" && !o))
          )
            return !1;
          (d = e.scrollWidth),
            (f = e.scrollHeight),
            (p = e.clientWidth),
            (h = e.clientHeight),
            (u = d > p),
            (c = f > h),
            (s.isScrollableX = u),
            (s.isScrollableY = c),
            (s.scrollWidth = d),
            (s.scrollHeight = f),
            (s.clientWidth = p),
            (s.clientHeight = h);
        } else
          (u = s.isScrollableX),
            (c = s.isScrollableY),
            (o = s.hasOverflowX),
            (l = s.hasOverflowY),
            (d = s.scrollWidth),
            (f = s.scrollHeight),
            (p = s.clientWidth),
            (h = s.clientHeight);
        if (
          (!o && !l) ||
          (!u && !c) ||
          (m === "vertical" && (!l || !c)) ||
          (m === "horizontal" && (!o || !u))
        )
          return !1;
        let g;
        if (m === "horizontal") g = "x";
        else if (m === "vertical") g = "y";
        else {
          const E = t !== 0,
            C = i !== 0;
          E && o && u && (g = "x"), C && l && c && (g = "y");
        }
        if (!g) return !1;
        let w, b, y, _, v;
        if (g === "x")
          (w = e.scrollLeft), (b = d - p), (y = t), (_ = o), (v = u);
        else if (g === "y")
          (w = e.scrollTop), (b = f - h), (y = i), (_ = l), (v = c);
        else return !1;
        return (y > 0 ? w < b : w > 0) && _ && v;
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
        const e = this.options.wrapper;
        return this.isHorizontal
          ? e.scrollX ?? e.scrollLeft
          : e.scrollY ?? e.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? Ug(this.animatedScroll, this.limit)
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
    }),
    a(fn, "Lenis"),
    fn);
z.registerPlugin(j);
let Qs;
const t0 = a(() => {
    "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      ((Qs = new e0({
        autoRaf: !0,
        lerp: 0.1,
        duration: 1.2,
        easing: a((n) => Math.min(1, 1.001 - Math.pow(2, -12 * n)), "easing"),
        smoothWheel: !0,
        smoothTouch: !1,
      })),
      Qs.on("scroll", j.update),
      z.ticker.add((n) => {
        Qs.raf(n * 1e3);
      }),
      z.ticker.lagSmoothing(0));
  }, "smoothScroll"),
  i0 = a(() => {
    t0();
  }, "initLenis"),
  Jn = a(() => Qs, "getLenis"),
  r0 = a(() => {
    const n = document.querySelectorAll("[career-modal='open-trigger']"),
      e = document.querySelectorAll("[career-modal='modal']");
    if (!n.length || !e.length) return;
    let t = null,
      i = null;
    const r = a((s) => {
      if (s.key === "Escape" && t && i) {
        i.restart();
        const o = Jn();
        o && o.start();
      }
    }, "handleEscapeKey");
    document.addEventListener("keydown", r),
      e.forEach((s) => {
        const o = s.getAttribute("career-modal-name"),
          l = s.querySelector("[career-modal='component']"),
          u = s.querySelector("[career-modal='main-info']"),
          c = s.querySelector("[career-modal='sec-info']"),
          d = s.querySelectorAll("[career-modal='close-trigger']");
        if (!l || !u || !c || !d) return;
        z.set(s, {
          opacity: 0,
          pointerEvents: "none",
          visibility: "hidden",
          display: "none",
        }),
          z.set(l, { clipPath: "inset(0% 0% 100% 0%)" }),
          z.set([u, c], { opacity: 0, y: 100, filter: "blur(2px)" });
        const f = z.timeline({ paused: !0 }),
          p = z.timeline({ paused: !0 });
        f.to(s, {
          opacity: 1,
          pointerEvents: "auto",
          visibility: "visible",
          display: "block",
          ease: "expo.out",
          duration: 0,
        }),
          f.to(
            l,
            { clipPath: "inset(0% 0% 0% 0%)", ease: "expo.inOut", duration: 1 },
            "<"
          ),
          f.to(
            [u, c],
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
          p.to([u, c], {
            y: 100,
            opacity: 0,
            filter: "blur(2px)",
            ease: "expo.out",
            duration: 0.8,
            stagger: -0.14,
          }),
          p.to(
            l,
            {
              clipPath: "inset(0% 0% 100% 0%)",
              ease: "expo.inOut",
              duration: 0.8,
            },
            "<"
          ),
          p.to(
            s,
            {
              opacity: 0,
              ease: "expo.in",
              duration: 0.8,
              pointerEvents: "none",
              onComplete: a(() => {
                (s.style.visibility = "hidden"),
                  (s.style.display = "none"),
                  (s.style.pointerEvents = "none");
              }, "onComplete"),
            },
            "<"
          );
        const h = Array.from(n).find(
          (m) => m.getAttribute("career-modal-name") === o
        );
        h &&
          h.addEventListener("click", () => {
            f.restart(), (t = s), (i = p);
            const m = Jn();
            m && m.stop();
          }),
          d.forEach((m) => {
            m.addEventListener("click", () => {
              p.restart(), (t = null), (i = null);
              const g = Jn();
              g && g.start();
            });
          });
      });
  }, "careerModal"),
  n0 = a(() => {
    r0();
  }, "initCareerModal"),
  s0 = a(() => {
    const n = document.querySelectorAll("[clock='component']"),
      e = a(() => {
        n.forEach((t) => {
          const r = t.querySelector("[clock-location]")?.dataset.timezone,
            s = t.querySelector("[clock='hour-hand']"),
            o = t.querySelector("[clock='minute-hand']"),
            l = t.querySelector("[clock='text']");
          if (!r || !s || !o || !l) return;
          const u = new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: !0,
              timeZone: r,
            }),
            c = new Date(new Date().toLocaleString("en-US", { timeZone: r })),
            d = c.getHours() % 12,
            f = c.getMinutes(),
            p = c.getSeconds(),
            h = (d + f / 60) * 30,
            m = (f + p / 60) * 6;
          s.setAttribute("transform", `rotate(${h} 10 10)`),
            o.setAttribute("transform", `rotate(${m} 10 10)`),
            (l.textContent = u);
        }),
          requestAnimationFrame(e);
      }, "updateClocks");
    e();
  }, "clock"),
  Zd = a(() => {
    s0();
  }, "initClock");
z.registerPlugin(be);
const o0 = a((n) => {
    const e = a(
      () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
        window.innerWidth <= 768,
      "isMobile"
    );
    let t, i, r;
    const s = a(() => {
        t && typeof t.revert == "function" && (t.revert(), (t = null)),
          i && (i.kill(), (i = null)),
          document
            .querySelectorAll(".move-text, .contact-hero-text-line")
            .forEach((d) => {
              if (d.parentNode && d.firstChild) {
                for (; d.firstChild; )
                  d.parentNode.insertBefore(d.firstChild, d);
                d.remove();
              }
            }),
          document
            .querySelectorAll("[contact-hero='text'] span")
            .forEach((d) => {
              const f = d.parentNode;
              f &&
                f !== d.parentNode.parentNode &&
                (f.parentNode.insertBefore(d, f), f.remove());
            });
      }, "cleanup"),
      o = a(() => {
        s();
        const u = document.querySelector("[contact-hero='text']"),
          c = document.querySelector("[contact-hero='visual']"),
          d = document.querySelectorAll("[contact-hero='visual-info']"),
          f = document.querySelectorAll("[contact-hero='cta']");
        u &&
          (t = be.create(u, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "contact-hero-text-line",
            tag: "span",
            onSplit(p) {
              p.lines.forEach((m) => {
                const g = document.createElement("div");
                g.classList.add("move-text"),
                  m.parentNode.insertBefore(g, m),
                  g.appendChild(m);
              });
              const h = u.querySelectorAll("span");
              return (
                h.length &&
                  h.forEach((m) => {
                    const g = document.createElement("div");
                    (g.style.overflow = "clip"),
                      (g.style.paddingBottom = "3px"),
                      m.parentNode.insertBefore(g, m),
                      g.appendChild(m);
                  }),
                (i = z.timeline()),
                z.set(".move-text", { opacity: 0, yPercent: 100 }),
                z.set(c, { opacity: 0, clipPath: "inset(50% round 16px)" }),
                z.set(d, { opacity: 0, y: 50 }),
                z.set(f, { opacity: 0, yPercent: 50 }),
                i.to(".move-text", {
                  opacity: 1,
                  duration: 1.8,
                  stagger: 0.08,
                  ease: "expo.inOut",
                  yPercent: 0,
                }),
                i.to(
                  c,
                  {
                    opacity: 1,
                    clipPath: "inset(0% round 10px)",
                    duration: 1.8,
                    ease: "expo.inOut",
                  },
                  "-=1.4"
                ),
                i.to(
                  d,
                  {
                    opacity: 1,
                    y: 0,
                    duration: 1.4,
                    stagger: 0.1,
                    ease: "expo.out",
                  },
                  "-=1"
                ),
                i.to(
                  f,
                  {
                    opacity: 1,
                    yPercent: 0,
                    duration: 1.8,
                    stagger: 0.1,
                    ease: "expo.out",
                  },
                  "-=1.2"
                ),
                i
              );
            },
          }));
      }, "createContactTransitions"),
      l = a(() => {
        e() ||
          (clearTimeout(r),
          (r = setTimeout(() => {
            s(),
              setTimeout(() => {
                o();
              }, 100);
          }, 250)));
      }, "handleResize");
    o(), e() || window.addEventListener("resize", l);
  }, "initContactTransitions"),
  a0 = a(() => {
    Zd(), er(), tr();
    const n = Nr();
    n.add(() => ir(), "-=1"), n.add(() => o0(), "-=1");
  }, "contactInit");
z.registerPlugin(be);
const l0 = a((n) => {
    const e = a(
      () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
        window.innerWidth <= 768,
      "isMobile"
    );
    let t, i, r;
    const s = a(() => {
        t && typeof t.revert == "function" && (t.revert(), (t = null)),
          i && (i.kill(), (i = null)),
          document
            .querySelectorAll(".move-text, .career-hero-text-line")
            .forEach((d) => {
              if (d.parentNode && d.firstChild) {
                for (; d.firstChild; )
                  d.parentNode.insertBefore(d.firstChild, d);
                d.remove();
              }
            }),
          document
            .querySelectorAll("[career-hero='text'] span")
            .forEach((d) => {
              const f = d.parentNode;
              f &&
                f !== d.parentNode.parentNode &&
                (f.parentNode.insertBefore(d, f), f.remove());
            });
      }, "cleanup"),
      o = a(() => {
        s();
        const u = document.querySelector("[career-hero='text']"),
          c = document.querySelector("[career-hero='btn']"),
          d = document.querySelector("[career-hero='visual']");
        u &&
          (t = be.create(u, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "career-hero-text-line",
            tag: "span",
            onSplit(f) {
              f.lines.forEach((h) => {
                const m = document.createElement("div");
                m.classList.add("move-text"),
                  h.parentNode.insertBefore(m, h),
                  m.appendChild(h);
              });
              const p = u.querySelectorAll("span");
              return (
                p.length &&
                  p.forEach((h) => {
                    const m = document.createElement("div");
                    (m.style.overflow = "clip"),
                      (m.style.paddingBottom = "3px"),
                      h.parentNode.insertBefore(m, h),
                      m.appendChild(h);
                  }),
                (i = z.timeline()),
                z.set(".move-text", { opacity: 0, yPercent: 100 }),
                z.set(c, { opacity: 0 }),
                z.set(d, { opacity: 0 }),
                i.to(".move-text", {
                  opacity: 1,
                  duration: 1.8,
                  stagger: 0.08,
                  ease: "expo.inOut",
                  yPercent: 0,
                }),
                i.to(c, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
                i.to(
                  d,
                  {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.4,
                    ease: "expo.inOut",
                  },
                  "-=1"
                ),
                i
              );
            },
          }));
      }, "createCareerTransitions"),
      l = a(() => {
        e() ||
          (clearTimeout(r),
          (r = setTimeout(() => {
            s(),
              setTimeout(() => {
                o();
              }, 100);
          }, 250)));
      }, "handleResize");
    o(), e() || window.addEventListener("resize", l);
  }, "initCareerTransitions"),
  u0 = a(() => {
    Sl(), n0(), Zd(), er(), tr();
    const n = Nr();
    n.add(() => ir(), "-=1"), n.add(() => l0(), "-=1");
  }, "careerInit");
z.registerPlugin(be);
const c0 = a((n) => {
    const e = a(
      () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
        window.innerWidth <= 768,
      "isMobile"
    );
    let t, i, r;
    const s = a(() => {
        t && typeof t.revert == "function" && (t.revert(), (t = null)),
          i && (i.kill(), (i = null)),
          document
            .querySelectorAll(".move-text, .work-hero-text-line")
            .forEach((d) => {
              if (d.parentNode && d.firstChild) {
                for (; d.firstChild; )
                  d.parentNode.insertBefore(d.firstChild, d);
                d.remove();
              }
            }),
          document.querySelectorAll("[work-hero='text'] span").forEach((d) => {
            const f = d.parentNode;
            f &&
              f !== d.parentNode.parentNode &&
              (f.parentNode.insertBefore(d, f), f.remove());
          });
      }, "cleanup"),
      o = a(() => {
        s();
        const u = document.querySelector("[work-hero='text']"),
          c = document.querySelector("[work-hero='filter-wrap']"),
          d = document.querySelectorAll("[work-hero='project']");
        u &&
          (t = be.create(u, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "work-hero-text-line",
            tag: "span",
            onSplit(f) {
              f.lines.forEach((h) => {
                const m = document.createElement("div");
                m.classList.add("move-text"),
                  h.parentNode.insertBefore(m, h),
                  m.appendChild(h);
              });
              const p = u.querySelectorAll("span");
              return (
                p.length &&
                  p.forEach((h) => {
                    const m = document.createElement("div");
                    (m.style.overflow = "clip"),
                      (m.style.paddingBottom = "3px"),
                      h.parentNode.insertBefore(m, h),
                      m.appendChild(h);
                  }),
                (i = z.timeline()),
                z.set(".move-text", { opacity: 0, yPercent: 100 }),
                z.set(c, { opacity: 0 }),
                z.set(d, { y: 100, opacity: 0 }),
                i.to(".move-text", {
                  opacity: 1,
                  duration: 1.8,
                  stagger: 0.08,
                  ease: "expo.inOut",
                  yPercent: 0,
                }),
                i.to(c, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
                i.to(
                  d,
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
                i
              );
            },
          }));
      }, "createWorkTransitions"),
      l = a(() => {
        e() ||
          (clearTimeout(r),
          (r = setTimeout(() => {
            s(),
              setTimeout(() => {
                o();
              }, 100);
          }, 250)));
      }, "handleResize");
    o(), e() || window.addEventListener("resize", l);
  }, "initWorkTransitions"),
  d0 = a(() => {
    jd(), er(), tr();
    const n = Nr();
    n.add(() => ir(), "-=1"), n.add(() => c0(), "-=1");
  }, "workInit"),
  f0 = a(() => {
    const n = document.querySelector("[service-link='wrap']");
    if (!n) return;
    const e = n.querySelectorAll("[service-link='item']"),
      t = document.querySelectorAll("[service-item]"),
      i = n.querySelector("[service-link='line-wrap']"),
      r = i?.querySelector("[service-link='line']"),
      s = document.querySelector("[hero-gradient='main']"),
      o = document.querySelectorAll("[hero-gradient]");
    if (!e.length || !t.length || !i || !r) return;
    let l = !1,
      u = null,
      c = null;
    const d = new Set(),
      f = a(() => {
        e.forEach((b) => {
          const y = b.querySelector("[service-link='num']");
          b.setAttribute("service-link-status", "inactive"),
            z.to(b, { opacity: 0.2, duration: 0.3 }),
            z.to(y, { opacity: 0, y: 5, duration: 0.3 });
        }),
          t.forEach((b) => {
            b.setAttribute("service-item-status", "inactive");
          }),
          o.forEach((b) => {
            b.getAttribute("hero-gradient") !== "main" &&
              z.to(b, { opacity: 0, duration: 0.5 });
          }),
          s && z.to(s, { opacity: 1, duration: 0.5 });
      }, "clearAllActive"),
      p = a((b) => {
        if (c === b) return;
        c = b;
        const y = document.querySelector(
            `[service-link='item'][item-name='${b}']`
          ),
          _ = document.querySelector(`[service-item='${b}']`),
          v = document.querySelector(`[hero-gradient='${b}']`);
        if (y && _) {
          f();
          const x = y.querySelector("[service-link='num']");
          y.setAttribute("service-link-status", "active"),
            z.to(y, { opacity: 1, duration: 0.4 }),
            z.to(x, { opacity: 1, y: 0, duration: 0.4 }),
            _.setAttribute("service-item-status", "active"),
            d.has(b) || (h(_), d.add(b)),
            v &&
              (s && z.to(s, { opacity: 0, duration: 0.5 }),
              z.to(v, { opacity: 1, duration: 0.5 })),
            m(y);
        }
      }, "activateByName"),
      h = a((b) => {
        const y = b.children;
        z.set(y, { opacity: 0, y: 50 }),
          z.to(y, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
          });
      }, "animateServiceItemChildren"),
      m = a((b) => {
        const y = Array.from(e).indexOf(b),
          _ = e.length,
          v = i.offsetHeight,
          x = r.offsetHeight,
          E = v - x,
          C = _ > 1 ? y / (_ - 1) : 0,
          S = E * C;
        z.to(r, { y: S, duration: 0.6, ease: "power2.out" });
      }, "moveLineToItem");
    s && z.set(s, { opacity: 1 }),
      o.forEach((b) => {
        b.getAttribute("hero-gradient") !== "main" && z.set(b, { opacity: 0 });
      }),
      t.forEach((b) => {
        z.set(b.children, { opacity: 0, y: 50 });
      }),
      e.forEach((b) => {
        const y = b.getAttribute("item-name");
        b.addEventListener("click", () => {
          y &&
            (u && clearTimeout(u),
            (l = !0),
            p(y),
            Jn().scrollTo(document.querySelector(`[service-item='${y}']`), {
              duration: 1.6,
              offset: -100,
            }),
            (u = setTimeout(() => {
              l = !1;
            }, 2e3)));
        });
      });
    const g = new Map(),
      w = new IntersectionObserver(
        (b) => {
          if (l) return;
          b.forEach((v) => {
            const x = v.target.getAttribute("service-item");
            x &&
              (g.set(x, v.intersectionRatio),
              v.isIntersecting &&
                v.intersectionRatio >= 0.3 &&
                !d.has(x) &&
                (h(v.target), d.add(x)));
          });
          let y = null,
            _ = 0;
          g.forEach((v, x) => {
            v > _ && ((_ = v), (y = x));
          }),
            y && _ >= 0.3 ? p(y) : _ < 0.3 && (f(), (c = null));
        },
        { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
      );
    t.forEach((b) => w.observe(b));
  }, "serviceList"),
  h0 = a(() => {
    f0();
  }, "initServiceList");
var gi,
  Tl,
  yo,
  Qd,
  Jd,
  qu,
  Ba,
  ef,
  tf = a(function () {
    return typeof window < "u";
  }, "_windowExists"),
  rf = a(function () {
    return gi || (tf() && (gi = window.gsap) && gi.registerPlugin && gi);
  }, "_getGSAP"),
  p0 = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
  ta = {
    rect: ["width", "height"],
    circle: ["r", "r"],
    ellipse: ["rx", "ry"],
    line: ["x2", "y2"],
  },
  mr = a(function (e) {
    return Math.round(e * 1e4) / 1e4;
  }, "_round"),
  Pi = a(function (e) {
    return parseFloat(e) || 0;
  }, "_parseNum"),
  Wu = a(function (e, t) {
    var i = Pi(e);
    return ~e.indexOf("%") ? (i / 100) * t : i;
  }, "_parseSingleVal"),
  Rs = a(function (e, t) {
    return Pi(e.getAttribute(t));
  }, "_getAttributeAsNumber"),
  Js = Math.sqrt,
  Hu = a(function (e, t, i, r, s, o) {
    return Js(
      Math.pow((Pi(i) - Pi(e)) * s, 2) + Math.pow((Pi(r) - Pi(t)) * o, 2)
    );
  }, "_getDistance"),
  Gu = a(function (e) {}, "_warn"),
  nf = a(function (e) {
    return e.getAttribute("vector-effect") === "non-scaling-stroke";
  }, "_hasNonScalingStroke"),
  m0 = 1,
  g0 = a(function (e, t, i) {
    var r = e.indexOf(" "),
      s,
      o;
    return (
      r < 0
        ? ((s = i !== void 0 ? i + "" : e), (o = e))
        : ((s = e.substr(0, r)), (o = e.substr(r + 1))),
      (s = Wu(s, t)),
      (o = Wu(o, t)),
      s > o ? [o, s] : [s, o]
    );
  }, "_parse"),
  eo = a(function (e) {
    if (((e = Tl(e)[0]), !e)) return 0;
    var t = e.tagName.toLowerCase(),
      i = e.style,
      r = 1,
      s = 1,
      o,
      l,
      u,
      c,
      d,
      f,
      p;
    nf(e) &&
      ((s = e.getScreenCTM()),
      (r = Js(s.a * s.a + s.b * s.b)),
      (s = Js(s.d * s.d + s.c * s.c)));
    try {
      l = e.getBBox();
    } catch {
      Gu(
        "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
      );
    }
    var h = l || { x: 0, y: 0, width: 0, height: 0 },
      m = h.x,
      g = h.y,
      w = h.width,
      b = h.height;
    if (
      ((!l || (!w && !b)) &&
        ta[t] &&
        ((w = Rs(e, ta[t][0])),
        (b = Rs(e, ta[t][1])),
        t !== "rect" && t !== "line" && ((w *= 2), (b *= 2)),
        t === "line" &&
          ((m = Rs(e, "x1")),
          (g = Rs(e, "y1")),
          (w = Math.abs(w - m)),
          (b = Math.abs(b - g)))),
      t === "path")
    )
      (c = i.strokeDasharray),
        (i.strokeDasharray = "none"),
        (o = e.getTotalLength() || 0),
        mr(r) !== mr(s) &&
          !qu &&
          (qu = 1) &&
          Gu(
            "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
          ),
        (o *= (r + s) / 2),
        (i.strokeDasharray = c);
    else if (t === "rect") o = w * 2 * r + b * 2 * s;
    else if (t === "line") o = Hu(m, g, m + w, g + b, r, s);
    else if (t === "polyline" || t === "polygon")
      for (
        u = e.getAttribute("points").match(p0) || [],
          t === "polygon" && u.push(u[0], u[1]),
          o = 0,
          d = 2;
        d < u.length;
        d += 2
      )
        o += Hu(u[d - 2], u[d - 1], u[d], u[d + 1], r, s) || 0;
    else
      (t === "circle" || t === "ellipse") &&
        ((f = (w / 2) * r),
        (p = (b / 2) * s),
        (o = Math.PI * (3 * (f + p) - Js((3 * f + p) * (f + 3 * p)))));
    return o || 0;
  }, "_getLength"),
  Yu = a(function (e, t) {
    if (((e = Tl(e)[0]), !e)) return [0, 0];
    t || (t = eo(e) + 1);
    var i = yo.getComputedStyle(e),
      r = i.strokeDasharray || "",
      s = Pi(i.strokeDashoffset),
      o = r.indexOf(",");
    return (
      o < 0 && (o = r.indexOf(" ")),
      (r = o < 0 ? t : Pi(r.substr(0, o))),
      r > t && (r = t),
      [-s || 0, r - s || 0]
    );
  }, "_getPosition"),
  Xu = a(function () {
    tf() &&
      ((yo = window),
      (Jd = gi = rf()),
      (Tl = gi.utils.toArray),
      (Ba = gi.core.getStyleSaver),
      (ef = gi.core.reverting || function () {}),
      (Qd = ((yo.navigator || {}).userAgent || "").indexOf("Edge") !== -1));
  }, "_initCore"),
  El = {
    version: "3.13.0",
    name: "drawSVG",
    register: a(function (e) {
      (gi = e), Xu();
    }, "register"),
    init: a(function (e, t, i, r, s) {
      if (!e.getBBox) return !1;
      Jd || Xu();
      var o = eo(e),
        l,
        u,
        c;
      return (
        (this.styles =
          Ba && Ba(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
        (this.tween = i),
        (this._style = e.style),
        (this._target = e),
        t + "" == "true"
          ? (t = "0 100%")
          : t
          ? (t + "").indexOf(" ") === -1 && (t = "0 " + t)
          : (t = "0 0"),
        (l = Yu(e, o)),
        (u = g0(t, o, l[0])),
        (this._length = mr(o)),
        (this._dash = mr(l[1] - l[0])),
        (this._offset = mr(-l[0])),
        (this._dashPT = this.add(
          this,
          "_dash",
          this._dash,
          mr(u[1] - u[0]),
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
          mr(-u[0]),
          0,
          0,
          0,
          0,
          0,
          1
        )),
        Qd &&
          ((c = yo.getComputedStyle(e)),
          c.strokeLinecap !== c.strokeLinejoin &&
            ((u = Pi(c.strokeMiterlimit)),
            this.add(e.style, "strokeMiterlimit", u, u + 0.01))),
        (this._live = nf(e) || ~(t + "").indexOf("live")),
        (this._nowrap = ~(t + "").indexOf("nowrap")),
        this._props.push("drawSVG"),
        m0
      );
    }, "init"),
    render: a(function (e, t) {
      if (t.tween._time || !ef()) {
        var i = t._pt,
          r = t._style,
          s,
          o,
          l,
          u;
        if (i) {
          for (
            t._live &&
            ((s = eo(t._target)),
            s !== t._length &&
              ((o = s / t._length),
              (t._length = s),
              t._offsetPT && ((t._offsetPT.s *= o), (t._offsetPT.c *= o)),
              t._dashPT
                ? ((t._dashPT.s *= o), (t._dashPT.c *= o))
                : (t._dash *= o)));
            i;

          )
            i.r(e, i.d), (i = i._next);
          (l = t._dash || (e && e !== 1 && 1e-4) || 0),
            (s = t._length - l + 0.1),
            (u = t._offset),
            l &&
              u &&
              l + Math.abs(u % t._length) > t._length - 0.05 &&
              (u += u < 0 ? 0.005 : -0.005) &&
              (s += 0.005),
            (r.strokeDashoffset = l ? u : u + 0.001),
            (r.strokeDasharray =
              s < 0.1
                ? "none"
                : l
                ? l + "px," + (t._nowrap ? 999999 : s) + "px"
                : "0px, 999999px");
        }
      } else t.styles.revert();
    }, "render"),
    getLength: eo,
    getPosition: Yu,
  };
rf() && gi.registerPlugin(El);
z.registerPlugin(be, El);
const v0 = a((n) => {
  const e = a(
    () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
      window.innerWidth <= 768,
    "isMobile"
  );
  let t, i, r;
  const s = a(() => {
      t && typeof t.revert == "function" && (t.revert(), (t = null)),
        i && (i.kill(), (i = null)),
        document
          .querySelectorAll(".move-text, .service-hero-text-line")
          .forEach((d) => {
            if (d.parentNode && d.firstChild) {
              for (; d.firstChild; ) d.parentNode.insertBefore(d.firstChild, d);
              d.remove();
            }
          }),
        document.querySelectorAll("[service-hero='text'] span").forEach((d) => {
          const f = d.parentNode;
          f &&
            f !== d.parentNode.parentNode &&
            (f.parentNode.insertBefore(d, f), f.remove());
        });
    }, "cleanup"),
    o = a(() => {
      s();
      const u = document.querySelector("[service-hero='text']"),
        c = document.querySelectorAll("[service-hero='btn']"),
        d = document.querySelectorAll("[service-hero='svg']"),
        f = document.querySelectorAll("[service-hero='svg'] path");
      u &&
        (t = be.create(u, {
          type: "lines",
          autoSplit: !0,
          mask: "lines",
          linesClass: "service-hero-text-line",
          tag: "span",
          onSplit(p) {
            p.lines.forEach((m) => {
              const g = document.createElement("div");
              g.classList.add("move-text"),
                m.parentNode.insertBefore(g, m),
                g.appendChild(m);
            });
            const h = u.querySelectorAll("span");
            return (
              h.length &&
                h.forEach((m) => {
                  const g = document.createElement("div");
                  (g.style.overflow = "clip"),
                    (g.style.paddingBottom = "3px"),
                    m.parentNode.insertBefore(g, m),
                    g.appendChild(m);
                }),
              (i = z.timeline()),
              z.set(".move-text", { opacity: 0, yPercent: 100 }),
              z.set(c, { opacity: 0, yPercent: 20, scale: 0 }),
              z.set(d, { opacity: 0 }),
              z.set(f, { drawSVG: 0 }),
              i.to(d, { opacity: 1, duration: 0, ease: "power1.out" }),
              i.to(
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
              i.to(
                c,
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
              i.to(
                f,
                {
                  opacity: 1,
                  drawSVG: "100%",
                  duration: 5,
                  ease: "expo.inOut",
                },
                "-=2.2"
              ),
              i
            );
          },
        }));
    }, "createServiceTransitions"),
    l = a(() => {
      e() ||
        (clearTimeout(r),
        (r = setTimeout(() => {
          s(),
            setTimeout(() => {
              o();
            }, 100);
        }, 250)));
    }, "handleResize");
  o(), e() || window.addEventListener("resize", l);
}, "initServiceTransitions");
z.registerPlugin(El, j);
const y0 = a(() => {
    const n = document.querySelector(".services_hero_section"),
      e = document.querySelectorAll("[service-hero='svg'] path");
    if (e.length === 0) return;
    z.timeline({
      scrollTrigger: {
        trigger: n,
        start: "bottom 95%",
        end: "bottom 10%",
        scrub: 1.5,
      },
    }).to(e, { drawSVG: "100% 100%" });
  }, "serviceLine"),
  _0 = a(() => {
    y0();
  }, "initServiceLine"),
  w0 = a(() => {
    h0(), er(), tr(), _0();
    const n = Nr();
    n.add(() => ir(), "-=1"), n.add(() => v0(), "-=1");
  }, "serviceInit"),
  b0 = a(() => {
    const n = document.querySelectorAll("[service-item]"),
      e = document.querySelector("[hero-gradient='main']"),
      t = document.querySelectorAll("[hero-gradient]");
    if (!n.length || !e) return;
    let i = !1,
      r = null,
      s = null;
    const o = a(() => {
        t.forEach((f) => {
          f.getAttribute("hero-gradient") !== "main" &&
            z.to(f, { opacity: 0, duration: 0.5 });
        }),
          z.to(e, { opacity: 1, duration: 0.5 });
      }, "showMainGradient"),
      l = a((f) => {
        if (s === f) return;
        s = f;
        const p = document.querySelector(`[hero-gradient='${f}']`);
        p &&
          (z.to(e, { opacity: 0, duration: 0.5 }),
          t.forEach((h) => {
            const m = h.getAttribute("hero-gradient");
            m !== "main" && m !== f && z.to(h, { opacity: 0, duration: 0.5 });
          }),
          z.to(p, { opacity: 1, duration: 0.5 }));
      }, "activateGradientByName");
    z.set(e, { opacity: 1 }),
      t.forEach((f) => {
        f.getAttribute("hero-gradient") !== "main" && z.set(f, { opacity: 0 });
      });
    const u = new Map(),
      c = new IntersectionObserver(
        (f) => {
          if (i) return;
          f.forEach((m) => {
            const g = m.target.getAttribute("service-item");
            g && u.set(g, m.intersectionRatio);
          });
          let p = null,
            h = 0;
          u.forEach((m, g) => {
            m > h && ((h = m), (p = g));
          }),
            p && h >= 0.3 ? l(p) : h < 0.3 && (o(), (s = null));
        },
        { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
      );
    return (
      n.forEach((f) => c.observe(f)),
      {
        setGradient: a((f) => {
          r && clearTimeout(r),
            (i = !0),
            f ? l(f) : (o(), (s = null)),
            (r = setTimeout(() => {
              i = !1;
            }, 1e3));
        }, "setGradient"),
        showMainGradient: o,
      }
    );
  }, "serviceGradients"),
  x0 = a(() => b0(), "initServiceGradients");
var Mi,
  Er,
  Cl,
  Po,
  Fn,
  to,
  _o,
  es,
  ni = "transform",
  Va = ni + "Origin",
  sf,
  kl = a(function (e) {
    var t = e.ownerDocument || e;
    for (
      !(ni in e.style) &&
      ("msTransform" in e.style) &&
      ((ni = "msTransform"), (Va = ni + "Origin"));
      t.parentNode && (t = t.parentNode);

    );
    if (((Er = window), (_o = new Dr()), t)) {
      (Mi = t),
        (Cl = t.documentElement),
        (Po = t.body),
        (es = Mi.createElementNS("http://www.w3.org/2000/svg", "g")),
        (es.style.transform = "none");
      var i = t.createElement("div"),
        r = t.createElement("div"),
        s = t && (t.body || t.firstElementChild);
      s &&
        s.appendChild &&
        (s.appendChild(i),
        i.appendChild(r),
        i.setAttribute(
          "style",
          "position:static;transform:translate3d(0,0,1px)"
        ),
        (sf = r.offsetParent !== i),
        s.removeChild(i));
    }
    return t;
  }, "_setDoc"),
  S0 = a(function (e) {
    for (var t, i; e && e !== Po; )
      (i = e._gsap),
        i && i.uncache && i.get(e, "x"),
        i &&
          !i.scaleX &&
          !i.scaleY &&
          i.renderTransform &&
          ((i.scaleX = i.scaleY = 1e-4),
          i.renderTransform(1, i),
          t ? t.push(i) : (t = [i])),
        (e = e.parentNode);
    return t;
  }, "_forceNonZeroScale"),
  of = [],
  af = [],
  Pl = a(function () {
    return Er.pageYOffset || Mi.scrollTop || Cl.scrollTop || Po.scrollTop || 0;
  }, "_getDocScrollTop"),
  Ml = a(function () {
    return (
      Er.pageXOffset || Mi.scrollLeft || Cl.scrollLeft || Po.scrollLeft || 0
    );
  }, "_getDocScrollLeft"),
  Al = a(function (e) {
    return (
      e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
    );
  }, "_svgOwner"),
  T0 = a(function n(e) {
    if (Er.getComputedStyle(e).position === "fixed") return !0;
    if (((e = e.parentNode), e && e.nodeType === 1)) return n(e);
  }, "_isFixed"),
  ia = a(function n(e, t) {
    if (e.parentNode && (Mi || kl(e))) {
      var i = Al(e),
        r = i
          ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
          : "http://www.w3.org/1999/xhtml",
        s = i ? (t ? "rect" : "g") : "div",
        o = t !== 2 ? 0 : 100,
        l = t === 3 ? 100 : 0,
        u =
          "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        c = Mi.createElementNS
          ? Mi.createElementNS(r.replace(/^https/, "http"), s)
          : Mi.createElement(s);
      return (
        t &&
          (i
            ? (to || (to = n(e)),
              c.setAttribute("width", 0.01),
              c.setAttribute("height", 0.01),
              c.setAttribute("transform", "translate(" + o + "," + l + ")"),
              to.appendChild(c))
            : (Fn || ((Fn = n(e)), (Fn.style.cssText = u)),
              (c.style.cssText =
                u +
                "width:0.1px;height:0.1px;top:" +
                l +
                "px;left:" +
                o +
                "px"),
              Fn.appendChild(c))),
        c
      );
    }
    throw "Need document and parent.";
  }, "_createSibling"),
  E0 = a(function (e) {
    for (var t = new Dr(), i = 0; i < e.numberOfItems; i++)
      t.multiply(e.getItem(i).matrix);
    return t;
  }, "_consolidate"),
  lf = a(function (e) {
    var t = e.getCTM(),
      i;
    return (
      t ||
        ((i = e.style[ni]),
        (e.style[ni] = "none"),
        e.appendChild(es),
        (t = es.getCTM()),
        e.removeChild(es),
        i
          ? (e.style[ni] = i)
          : e.style.removeProperty(
              ni.replace(/([A-Z])/g, "-$1").toLowerCase()
            )),
      t || _o.clone()
    );
  }, "_getCTM"),
  C0 = a(function (e, t) {
    var i = Al(e),
      r = e === i,
      s = i ? of : af,
      o = e.parentNode,
      l =
        o && !i && o.shadowRoot && o.shadowRoot.appendChild ? o.shadowRoot : o,
      u,
      c,
      d,
      f,
      p,
      h;
    if (e === Er) return e;
    if (
      (s.length || s.push(ia(e, 1), ia(e, 2), ia(e, 3)), (u = i ? to : Fn), i)
    )
      r
        ? ((d = lf(e)), (f = -d.e / d.a), (p = -d.f / d.d), (c = _o))
        : e.getBBox
        ? ((d = e.getBBox()),
          (c = e.transform ? e.transform.baseVal : {}),
          (c = c.numberOfItems
            ? c.numberOfItems > 1
              ? E0(c)
              : c.getItem(0).matrix
            : _o),
          (f = c.a * d.x + c.c * d.y),
          (p = c.b * d.x + c.d * d.y))
        : ((c = new Dr()), (f = p = 0)),
        t && e.tagName.toLowerCase() === "g" && (f = p = 0),
        (r ? i : o).appendChild(u),
        u.setAttribute(
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
            (c.f + p) +
            ")"
        );
    else {
      if (((f = p = 0), sf))
        for (
          c = e.offsetParent, d = e;
          d && (d = d.parentNode) && d !== c && d.parentNode;

        )
          (Er.getComputedStyle(d)[ni] + "").length > 4 &&
            ((f = d.offsetLeft), (p = d.offsetTop), (d = 0));
      if (
        ((h = Er.getComputedStyle(e)),
        h.position !== "absolute" && h.position !== "fixed")
      )
        for (c = e.offsetParent; o && o !== c; )
          (f += o.scrollLeft || 0), (p += o.scrollTop || 0), (o = o.parentNode);
      (d = u.style),
        (d.top = e.offsetTop - p + "px"),
        (d.left = e.offsetLeft - f + "px"),
        (d[ni] = h[ni]),
        (d[Va] = h[Va]),
        (d.position = h.position === "fixed" ? "fixed" : "absolute"),
        l.appendChild(u);
    }
    return u;
  }, "_placeSiblings"),
  ra = a(function (e, t, i, r, s, o, l) {
    return (e.a = t), (e.b = i), (e.c = r), (e.d = s), (e.e = o), (e.f = l), e;
  }, "_setMatrix"),
  Dr = (function () {
    function n(t, i, r, s, o, l) {
      t === void 0 && (t = 1),
        i === void 0 && (i = 0),
        r === void 0 && (r = 0),
        s === void 0 && (s = 1),
        o === void 0 && (o = 0),
        l === void 0 && (l = 0),
        ra(this, t, i, r, s, o, l);
    }
    a(n, "Matrix2D");
    var e = n.prototype;
    return (
      (e.inverse = a(function () {
        var i = this.a,
          r = this.b,
          s = this.c,
          o = this.d,
          l = this.e,
          u = this.f,
          c = i * o - r * s || 1e-10;
        return ra(
          this,
          o / c,
          -r / c,
          -s / c,
          i / c,
          (s * u - o * l) / c,
          -(i * u - r * l) / c
        );
      }, "inverse")),
      (e.multiply = a(function (i) {
        var r = this.a,
          s = this.b,
          o = this.c,
          l = this.d,
          u = this.e,
          c = this.f,
          d = i.a,
          f = i.c,
          p = i.b,
          h = i.d,
          m = i.e,
          g = i.f;
        return ra(
          this,
          d * r + p * o,
          d * s + p * l,
          f * r + h * o,
          f * s + h * l,
          u + m * r + g * o,
          c + m * s + g * l
        );
      }, "multiply")),
      (e.clone = a(function () {
        return new n(this.a, this.b, this.c, this.d, this.e, this.f);
      }, "clone")),
      (e.equals = a(function (i) {
        var r = this.a,
          s = this.b,
          o = this.c,
          l = this.d,
          u = this.e,
          c = this.f;
        return (
          r === i.a &&
          s === i.b &&
          o === i.c &&
          l === i.d &&
          u === i.e &&
          c === i.f
        );
      }, "equals")),
      (e.apply = a(function (i, r) {
        r === void 0 && (r = {});
        var s = i.x,
          o = i.y,
          l = this.a,
          u = this.b,
          c = this.c,
          d = this.d,
          f = this.e,
          p = this.f;
        return (
          (r.x = s * l + o * c + f || 0), (r.y = s * u + o * d + p || 0), r
        );
      }, "apply")),
      n
    );
  })();
function wi(n, e, t, i) {
  if (!n || !n.parentNode || (Mi || kl(n)).documentElement === n)
    return new Dr();
  var r = S0(n),
    s = Al(n),
    o = s ? of : af,
    l = C0(n, t),
    u = o[0].getBoundingClientRect(),
    c = o[1].getBoundingClientRect(),
    d = o[2].getBoundingClientRect(),
    f = l.parentNode,
    p = !i && T0(n),
    h = new Dr(
      (c.left - u.left) / 100,
      (c.top - u.top) / 100,
      (d.left - u.left) / 100,
      (d.top - u.top) / 100,
      u.left + (p ? 0 : Ml()),
      u.top + (p ? 0 : Pl())
    );
  if ((f.removeChild(l), r))
    for (u = r.length; u--; )
      (c = r[u]), (c.scaleX = c.scaleY = 0), c.renderTransform(1, c);
  return e ? h.inverse() : h;
}
a(wi, "getGlobalMatrix");
var k0 = 1,
  wn,
  ot,
  ye,
  ts,
  Vi,
  Ai,
  qa,
  ju = a(function (e, t) {
    return e.actions.forEach(function (i) {
      return i.vars[t] && i.vars[t](i);
    });
  }, "_forEachBatch"),
  Wa = {},
  Uu = 180 / Math.PI,
  P0 = Math.PI / 180,
  wo = {},
  Ku = {},
  Mo = {},
  Ol = a(function (e) {
    return typeof e == "string" ? e.split(" ").join("").split(",") : e;
  }, "_listToArray"),
  M0 = Ol("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
  Ao = Ol(
    "transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"
  ),
  is = a(function (e) {
    return wn(e)[0] || void 0;
  }, "_getEl"),
  Zr = a(function (e) {
    return Math.round(e * 1e4) / 1e4 || 0;
  }, "_round"),
  na = a(function (e, t, i) {
    return e.forEach(function (r) {
      return r.classList[i](t);
    });
  }, "_toggleClass"),
  Zu = {
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
  uf = {
    zIndex: 1,
    simple: 1,
    clearProps: 1,
    scale: 1,
    absolute: 1,
    fitChild: 1,
    getVars: 1,
    props: 1,
  },
  cf = a(function (e) {
    return e.replace(/([A-Z])/g, "-$1").toLowerCase();
  }, "_camelToDashed"),
  Qr = a(function (e, t) {
    var i = {},
      r;
    for (r in e) t[r] || (i[r] = e[r]);
    return i;
  }, "_copy"),
  Ll = {},
  df = a(function (e) {
    var t = (Ll[e] = Ol(e));
    return (Mo[e] = t.concat(Ao)), t;
  }, "_memoizeProps"),
  A0 = a(function (e) {
    var t = e._gsap || ot.core.getCache(e);
    return t.gmCache === ot.ticker.frame
      ? t.gMatrix
      : ((t.gmCache = ot.ticker.frame), (t.gMatrix = wi(e, !0, !1, !0)));
  }, "_getInverseGlobalMatrix"),
  O0 = a(function n(e, t, i) {
    i === void 0 && (i = 0);
    for (
      var r = e.parentNode,
        s = 1e3 * Math.pow(10, i) * (t ? -1 : 1),
        o = t ? -s * 900 : 0;
      e;

    )
      (o += s), (e = e.previousSibling);
    return r ? o + n(r, t, i + 1) : o;
  }, "_getDOMDepth"),
  bo = a(function (e, t, i) {
    return (
      e.forEach(function (r) {
        return (r.d = O0(i ? r.element : r.t, t));
      }),
      e.sort(function (r, s) {
        return r.d - s.d;
      }),
      e
    );
  }, "_orderByDOMDepth"),
  ms = a(function (e, t) {
    for (
      var i = e.element.style, r = (e.css = e.css || []), s = t.length, o, l;
      s--;

    )
      (o = t[s]),
        (l = i[o] || i.getPropertyValue(o)),
        r.push(l ? o : Ku[o] || (Ku[o] = cf(o)), l);
    return i;
  }, "_recordInlineStyles"),
  xo = a(function (e) {
    var t = e.css,
      i = e.element.style,
      r = 0;
    for (e.cache.uncache = 1; r < t.length; r += 2)
      t[r + 1] ? (i[t[r]] = t[r + 1]) : i.removeProperty(t[r]);
    !t[t.indexOf("transform") + 1] &&
      i.translate &&
      (i.removeProperty("translate"),
      i.removeProperty("scale"),
      i.removeProperty("rotate"));
  }, "_applyInlineStyles"),
  Qu = a(function (e, t) {
    e.forEach(function (i) {
      return (i.a.cache.uncache = 1);
    }),
      t || e.finalStates.forEach(xo);
  }, "_setFinalStates"),
  sa =
    "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(
      ","
    ),
  Dl = a(function (e, t, i) {
    var r = e.element,
      s = e.width,
      o = e.height,
      l = e.uncache,
      u = e.getProp,
      c = r.style,
      d = 4,
      f,
      p,
      h;
    if ((typeof t != "object" && (t = e), ye && i !== 1))
      return (
        ye._abs.push({ t: r, b: e, a: e, sd: 0 }),
        ye._final.push(function () {
          return (e.cache.uncache = 1) && xo(e);
        }),
        r
      );
    for (
      p = u("display") === "none",
        (!e.isVisible || p) &&
          (p && (ms(e, ["display"]).display = t.display),
          (e.matrix = t.matrix),
          (e.width = s = e.width || t.width),
          (e.height = o = e.height || t.height)),
        ms(e, sa),
        h = window.getComputedStyle(r);
      d--;

    )
      c[sa[d]] = h[sa[d]];
    if (
      ((c.gridArea = "1 / 1 / 1 / 1"),
      (c.transition = "none"),
      (c.position = "absolute"),
      (c.width = s + "px"),
      (c.height = o + "px"),
      c.top || (c.top = "0px"),
      c.left || (c.left = "0px"),
      l)
    )
      f = new Ir(r);
    else if (((f = Qr(e, wo)), (f.position = "absolute"), e.simple)) {
      var m = r.getBoundingClientRect();
      f.matrix = new Dr(1, 0, 0, 1, m.left + Ml(), m.top + Pl());
    } else f.matrix = wi(r, !1, !1, !0);
    return (f = an(f, e, !0)), (e.x = Ai(f.x, 0.01)), (e.y = Ai(f.y, 0.01)), r;
  }, "_makeAbsolute"),
  Ju = a(function (e, t) {
    return (
      t !== !0 &&
        ((t = wn(t)),
        (e = e.filter(function (i) {
          if (t.indexOf((i.sd < 0 ? i.b : i.a).element) !== -1) return !0;
          i.t._gsap.renderTransform(1),
            i.b.isVisible &&
              ((i.t.style.width = i.b.width + "px"),
              (i.t.style.height = i.b.height + "px"));
        }))),
      e
    );
  }, "_filterComps"),
  ff = a(function (e) {
    return bo(e, !0).forEach(function (t) {
      return (
        (t.a.isVisible || t.b.isVisible) && Dl(t.sd < 0 ? t.b : t.a, t.b, 1)
      );
    });
  }, "_makeCompsAbsolute"),
  L0 = a(function (e, t) {
    return (t && e.idLookup[Ha(t).id]) || e.elementStates[0];
  }, "_findElStateInState"),
  Ha = a(function (e, t, i, r) {
    return e instanceof Ir
      ? e
      : e instanceof si
      ? L0(e, r)
      : new Ir(typeof e == "string" ? is(e) || void 0 : e, t, i);
  }, "_parseElementState"),
  D0 = a(function (e, t) {
    for (
      var i = ot.getProperty(e.element, null, "native"),
        r = (e.props = {}),
        s = t.length;
      s--;

    )
      r[t[s]] = (i(t[s]) + "").trim();
    return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), e;
  }, "_recordProps"),
  hf = a(function (e, t) {
    var i = e.style || e,
      r;
    for (r in t) i[r] = t[r];
  }, "_applyProps"),
  I0 = a(function (e) {
    var t = e.getAttribute("data-flip-id");
    return t || e.setAttribute("data-flip-id", (t = "auto-" + k0++)), t;
  }, "_getID"),
  pf = a(function (e) {
    return e.map(function (t) {
      return t.element;
    });
  }, "_elementsFromElementStates"),
  ec = a(function (e, t, i) {
    return e && t.length && i.add(e(pf(t), i, new si(t, 0, !0)), 0);
  }, "_handleCallback"),
  an = a(function (e, t, i, r, s, o) {
    var l = e.element,
      u = e.cache,
      c = e.parent,
      d = e.x,
      f = e.y,
      p = t.width,
      h = t.height,
      m = t.scaleX,
      g = t.scaleY,
      w = t.rotation,
      b = t.bounds,
      y = o && qa && qa(l, "transform,width,height"),
      _ = e,
      v = t.matrix,
      x = v.e,
      E = v.f,
      C =
        e.bounds.width !== b.width ||
        e.bounds.height !== b.height ||
        e.scaleX !== m ||
        e.scaleY !== g ||
        e.rotation !== w,
      S = !C && e.simple && t.simple && !s,
      A,
      k,
      L,
      T,
      M,
      O,
      I;
    return (
      S || !c
        ? ((m = g = 1), (w = A = 0))
        : ((M = A0(c)),
          (O = M.clone().multiply(
            t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix
          )),
          (w = Zr(Math.atan2(O.b, O.a) * Uu)),
          (A = Zr(Math.atan2(O.c, O.d) * Uu + w) % 360),
          (m = Math.sqrt(Math.pow(O.a, 2) + Math.pow(O.b, 2))),
          (g =
            Math.sqrt(Math.pow(O.c, 2) + Math.pow(O.d, 2)) * Math.cos(A * P0)),
          s &&
            ((s = wn(s)[0]),
            (T = ot.getProperty(s)),
            (I = s.getBBox && typeof s.getBBox == "function" && s.getBBox()),
            (_ = {
              scaleX: T("scaleX"),
              scaleY: T("scaleY"),
              width: I ? I.width : Math.ceil(parseFloat(T("width", "px"))),
              height: I ? I.height : parseFloat(T("height", "px")),
            })),
          (u.rotation = w + "deg"),
          (u.skewX = A + "deg")),
      i
        ? ((m *= p === _.width || !_.width ? 1 : p / _.width),
          (g *= h === _.height || !_.height ? 1 : h / _.height),
          (u.scaleX = m),
          (u.scaleY = g))
        : ((p = Ai((p * m) / _.scaleX, 0)),
          (h = Ai((h * g) / _.scaleY, 0)),
          (l.style.width = p + "px"),
          (l.style.height = h + "px")),
      r && hf(l, t.props),
      S || !c
        ? ((d += x - e.matrix.e), (f += E - e.matrix.f))
        : C || c !== t.parent
        ? (u.renderTransform(1, u),
          (O = wi(s || l, !1, !1, !0)),
          (k = M.apply({ x: O.e, y: O.f })),
          (L = M.apply({ x, y: E })),
          (d += L.x - k.x),
          (f += L.y - k.y))
        : ((M.e = M.f = 0),
          (L = M.apply({ x: x - e.matrix.e, y: E - e.matrix.f })),
          (d += L.x),
          (f += L.y)),
      (d = Ai(d, 0.02)),
      (f = Ai(f, 0.02)),
      o && !(o instanceof Ir)
        ? y && y.revert()
        : ((u.x = d + "px"), (u.y = f + "px"), u.renderTransform(1, u)),
      o &&
        ((o.x = d),
        (o.y = f),
        (o.rotation = w),
        (o.skewX = A),
        i ? ((o.scaleX = m), (o.scaleY = g)) : ((o.width = p), (o.height = h))),
      o || u
    );
  }, "_fit"),
  oa = a(function (e, t) {
    return e instanceof si ? e : new si(e, t);
  }, "_parseState"),
  mf = a(function (e, t, i) {
    var r = e.idLookup[i],
      s = e.alt[i];
    return s.isVisible &&
      (!(t.getElementState(s.element) || s).isVisible || !r.isVisible)
      ? s
      : r;
  }, "_getChangingElState"),
  aa = [],
  la = "width,height,overflowX,overflowY".split(","),
  $s,
  tc = a(function (e) {
    if (e !== $s) {
      var t = Vi.style,
        i = Vi.clientWidth === window.outerWidth,
        r = Vi.clientHeight === window.outerHeight,
        s = 4;
      if (e && (i || r)) {
        for (; s--; ) aa[s] = t[la[s]];
        i && ((t.width = Vi.clientWidth + "px"), (t.overflowY = "hidden")),
          r && ((t.height = Vi.clientHeight + "px"), (t.overflowX = "hidden")),
          ($s = e);
      } else if ($s) {
        for (; s--; ) aa[s] ? (t[la[s]] = aa[s]) : t.removeProperty(cf(la[s]));
        $s = e;
      }
    }
  }, "_lockBodyScroll"),
  ua = a(function (e, t, i, r) {
    e instanceof si && t instanceof si, (i = i || {});
    var s = i,
      o = s.clearProps,
      l = s.onEnter,
      u = s.onLeave,
      c = s.absolute,
      d = s.absoluteOnLeave,
      f = s.custom,
      p = s.delay,
      h = s.paused,
      m = s.repeat,
      g = s.repeatDelay,
      w = s.yoyo,
      b = s.toggleClass,
      y = s.nested,
      _ = s.zIndex,
      v = s.scale,
      x = s.fade,
      E = s.stagger,
      C = s.spin,
      S = s.prune,
      A = ("props" in i ? i : e).props,
      k = Qr(i, Zu),
      L = ot.timeline({
        delay: p,
        paused: h,
        repeat: m,
        repeatDelay: g,
        yoyo: w,
        data: "isFlip",
      }),
      T = k,
      M = [],
      O = [],
      I = [],
      N = [],
      R = C === !0 ? 1 : C || 0,
      B =
        typeof C == "function"
          ? C
          : function () {
              return R;
            },
      q = e.interrupted || t.interrupted,
      P = L[r !== 1 ? "to" : "from"],
      X,
      K,
      ce,
      le,
      ne,
      ee,
      fe,
      me,
      De,
      qe,
      ve,
      We,
      G,
      se;
    for (K in t.idLookup)
      (ve = t.alt[K] ? mf(t, e, K) : t.idLookup[K]),
        (ne = ve.element),
        (qe = e.idLookup[K]),
        e.alt[K] &&
          ne === qe.element &&
          (e.alt[K].isVisible || !ve.isVisible) &&
          (qe = e.alt[K]),
        qe
          ? ((ee = {
              t: ne,
              b: qe,
              a: ve,
              sd: qe.element === ne ? 0 : ve.isVisible ? 1 : -1,
            }),
            I.push(ee),
            ee.sd &&
              (ee.sd < 0 && ((ee.b = ve), (ee.a = qe)),
              q && ms(ee.b, A ? Mo[A] : Ao),
              x &&
                I.push(
                  (ee.swap = {
                    t: qe.element,
                    b: ee.b,
                    a: ee.a,
                    sd: -ee.sd,
                    swap: ee,
                  })
                )),
            (ne._flip = qe.element._flip = ye ? ye.timeline : L))
          : ve.isVisible &&
            (I.push({
              t: ne,
              b: Qr(ve, { isVisible: 1 }),
              a: ve,
              sd: 0,
              entering: 1,
            }),
            (ne._flip = ye ? ye.timeline : L));
    if (
      (A &&
        (Ll[A] || df(A)).forEach(function (D) {
          return (k[D] = function (Pe) {
            return I[Pe].a.props[D];
          });
        }),
      (I.finalStates = De = []),
      (We = a(function () {
        for (bo(I), tc(!0), le = 0; le < I.length; le++)
          (ee = I[le]),
            (G = ee.a),
            (se = ee.b),
            S && !G.isDifferent(se) && !ee.entering
              ? I.splice(le--, 1)
              : ((ne = ee.t),
                y && !(ee.sd < 0) && le && (G.matrix = wi(ne, !1, !1, !0)),
                se.isVisible && G.isVisible
                  ? (ee.sd < 0
                      ? ((fe = new Ir(ne, A, e.simple)),
                        an(fe, G, v, 0, 0, fe),
                        (fe.matrix = wi(ne, !1, !1, !0)),
                        (fe.css = ee.b.css),
                        (ee.a = G = fe),
                        x && (ne.style.opacity = q ? se.opacity : G.opacity),
                        E && N.push(ne))
                      : ee.sd > 0 &&
                        x &&
                        (ne.style.opacity = q ? G.opacity - se.opacity : "0"),
                    an(G, se, v, A))
                  : se.isVisible !== G.isVisible &&
                    (se.isVisible
                      ? G.isVisible ||
                        ((se.css = G.css),
                        O.push(se),
                        I.splice(le--, 1),
                        c && y && an(G, se, v, A))
                      : (G.isVisible && M.push(G), I.splice(le--, 1))),
                v ||
                  ((ne.style.maxWidth = Math.max(G.width, se.width) + "px"),
                  (ne.style.maxHeight = Math.max(G.height, se.height) + "px"),
                  (ne.style.minWidth = Math.min(G.width, se.width) + "px"),
                  (ne.style.minHeight = Math.min(G.height, se.height) + "px")),
                y && b && ne.classList.add(b)),
            De.push(G);
        var Pe;
        if (
          (b &&
            ((Pe = De.map(function (W) {
              return W.element;
            })),
            y &&
              Pe.forEach(function (W) {
                return W.classList.remove(b);
              })),
          tc(!1),
          v
            ? ((k.scaleX = function (W) {
                return I[W].a.scaleX;
              }),
              (k.scaleY = function (W) {
                return I[W].a.scaleY;
              }))
            : ((k.width = function (W) {
                return I[W].a.width + "px";
              }),
              (k.height = function (W) {
                return I[W].a.height + "px";
              }),
              (k.autoRound = i.autoRound || !1)),
          (k.x = function (W) {
            return I[W].a.x + "px";
          }),
          (k.y = function (W) {
            return I[W].a.y + "px";
          }),
          (k.rotation = function (W) {
            return I[W].a.rotation + (C ? B(W, me[W], me) * 360 : 0);
          }),
          (k.skewX = function (W) {
            return I[W].a.skewX;
          }),
          (me = I.map(function (W) {
            return W.t;
          })),
          (_ || _ === 0) &&
            ((k.modifiers = {
              zIndex: a(function () {
                return _;
              }, "zIndex"),
            }),
            (k.zIndex = _),
            (k.immediateRender = i.immediateRender !== !1)),
          x &&
            (k.opacity = function (W) {
              return I[W].sd < 0 ? 0 : I[W].sd > 0 ? I[W].a.opacity : "+=0";
            }),
          N.length)
        ) {
          E = ot.utils.distribute(E);
          var Kt = me.slice(N.length);
          k.stagger = function (W, Vt) {
            return E(~N.indexOf(Vt) ? me.indexOf(I[W].swap.t) : W, Vt, Kt);
          };
        }
        if (
          (M0.forEach(function (W) {
            return i[W] && L.eventCallback(W, i[W], i[W + "Params"]);
          }),
          f && me.length)
        ) {
          (T = Qr(k, Zu)),
            "scale" in f && ((f.scaleX = f.scaleY = f.scale), delete f.scale);
          for (K in f)
            (X = Qr(f[K], uf)),
              (X[K] = k[K]),
              !("duration" in X) &&
                "duration" in k &&
                (X.duration = k.duration),
              (X.stagger = k.stagger),
              P.call(L, me, X, 0),
              delete T[K];
        }
        (me.length || O.length || M.length) &&
          (b &&
            L.add(function () {
              return na(Pe, b, L._zTime < 0 ? "remove" : "add");
            }, 0) &&
            !h &&
            na(Pe, b, "add"),
          me.length && P.call(L, me, T, 0)),
          ec(l, M, L),
          ec(u, O, L);
        var Bt = ye && ye.timeline;
        Bt &&
          (Bt.add(L, 0),
          ye._final.push(function () {
            return Qu(I, !o);
          })),
          (ce = L.duration()),
          L.call(function () {
            var W = L.time() >= ce;
            W && !Bt && Qu(I, !o), b && na(Pe, b, W ? "remove" : "add");
          });
      }, "run")),
      d &&
        (c = I.filter(function (D) {
          return !D.sd && !D.a.isVisible && D.b.isVisible;
        }).map(function (D) {
          return D.a.element;
        })),
      ye)
    ) {
      var Ue;
      c && (Ue = ye._abs).push.apply(Ue, Ju(I, c)), ye._run.push(We);
    } else c && ff(Ju(I, c)), We();
    var Ke = ye ? ye.timeline : L;
    return (
      (Ke.revert = function () {
        return Il(Ke, 1, 1);
      }),
      Ke
    );
  }, "_fromTo"),
  z0 = a(function n(e) {
    e.vars.onInterrupt &&
      e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []),
      e.getChildren(!0, !1, !0).forEach(n);
  }, "_interrupt"),
  Il = a(function (e, t, i) {
    if (e && e.progress() < 1 && (!e.paused() || i))
      return t && (z0(e), t < 2 && e.progress(1), e.kill()), !0;
  }, "_killFlip"),
  Fs = a(function (e) {
    for (
      var t = (e.idLookup = {}),
        i = (e.alt = {}),
        r = e.elementStates,
        s = r.length,
        o;
      s--;

    )
      (o = r[s]), t[o.id] ? (i[o.id] = o) : (t[o.id] = o);
  }, "_createLookup"),
  si = (function () {
    function n(t, i, r) {
      if (((this.props = i && i.props), (this.simple = !!(i && i.simple)), r))
        (this.targets = pf(t)), (this.elementStates = t), Fs(this);
      else {
        this.targets = wn(t);
        var s = i && (i.kill === !1 || (i.batch && !i.kill));
        ye && !s && ye._kill.push(this), this.update(s || !!ye);
      }
    }
    a(n, "FlipState");
    var e = n.prototype;
    return (
      (e.update = a(function (i) {
        var r = this;
        return (
          (this.elementStates = this.targets.map(function (s) {
            return new Ir(s, r.props, r.simple);
          })),
          Fs(this),
          this.interrupt(i),
          this.recordInlineStyles(),
          this
        );
      }, "update")),
      (e.clear = a(function () {
        return (
          (this.targets.length = this.elementStates.length = 0), Fs(this), this
        );
      }, "clear")),
      (e.fit = a(function (i, r, s) {
        for (
          var o = bo(this.elementStates.slice(0), !1, !0),
            l = (i || this).idLookup,
            u = 0,
            c,
            d;
          u < o.length;
          u++
        )
          (c = o[u]),
            s && (c.matrix = wi(c.element, !1, !1, !0)),
            (d = l[c.id]),
            d && an(c, d, r, !0, 0, c),
            (c.matrix = wi(c.element, !1, !1, !0));
        return this;
      }, "fit")),
      (e.getProperty = a(function (i, r) {
        var s = this.getElementState(i) || wo;
        return (r in s ? s : s.props || wo)[r];
      }, "getProperty")),
      (e.add = a(function (i) {
        for (
          var r = i.targets.length, s = this.idLookup, o = this.alt, l, u, c;
          r--;

        )
          (u = i.elementStates[r]),
            (c = s[u.id]),
            c &&
            (u.element === c.element ||
              (o[u.id] && o[u.id].element === u.element))
              ? ((l = this.elementStates.indexOf(
                  u.element === c.element ? c : o[u.id]
                )),
                this.targets.splice(l, 1, i.targets[r]),
                this.elementStates.splice(l, 1, u))
              : (this.targets.push(i.targets[r]), this.elementStates.push(u));
        return (
          i.interrupted && (this.interrupted = !0),
          i.simple || (this.simple = !1),
          Fs(this),
          this
        );
      }, "add")),
      (e.compare = a(function (i) {
        var r = i.idLookup,
          s = this.idLookup,
          o = [],
          l = [],
          u = [],
          c = [],
          d = [],
          f = i.alt,
          p = this.alt,
          h = a(function (S, A, k) {
            return (
              (S.isVisible !== A.isVisible
                ? S.isVisible
                  ? u
                  : c
                : S.isVisible
                ? l
                : o
              ).push(k) && d.push(k)
            );
          }, "place"),
          m = a(function (S, A, k) {
            return d.indexOf(k) < 0 && h(S, A, k);
          }, "placeIfDoesNotExist"),
          g,
          w,
          b,
          y,
          _,
          v,
          x,
          E;
        for (b in r)
          (_ = f[b]),
            (v = p[b]),
            (g = _ ? mf(i, this, b) : r[b]),
            (y = g.element),
            (w = s[b]),
            v
              ? ((E = w.isVisible || (!v.isVisible && y === w.element) ? w : v),
                (x =
                  _ && !g.isVisible && !_.isVisible && E.element === _.element
                    ? _
                    : g),
                x.isVisible && E.isVisible && x.element !== E.element
                  ? ((x.isDifferent(E) ? l : o).push(x.element, E.element),
                    d.push(x.element, E.element))
                  : h(x, E, x.element),
                _ && x.element === _.element && (_ = r[b]),
                m(x.element !== w.element && _ ? _ : x, w, w.element),
                m(_ && _.element === v.element ? _ : x, v, v.element),
                _ && m(_, v.element === _.element ? v : w, _.element))
              : (w ? (w.isDifferent(g) ? h(g, w, y) : o.push(y)) : u.push(y),
                _ && m(_, w, _.element));
        for (b in s)
          r[b] || (c.push(s[b].element), p[b] && c.push(p[b].element));
        return { changed: l, unchanged: o, enter: u, leave: c };
      }, "compare")),
      (e.recordInlineStyles = a(function () {
        for (var i = Mo[this.props] || Ao, r = this.elementStates.length; r--; )
          ms(this.elementStates[r], i);
      }, "recordInlineStyles")),
      (e.interrupt = a(function (i) {
        var r = this,
          s = [];
        this.targets.forEach(function (o) {
          var l = o._flip,
            u = Il(l, i ? 0 : 1);
          i &&
            u &&
            s.indexOf(l) < 0 &&
            l.add(function () {
              return r.updateVisibility();
            }),
            u && s.push(l);
        }),
          !i && s.length && this.updateVisibility(),
          this.interrupted || (this.interrupted = !!s.length);
      }, "interrupt")),
      (e.updateVisibility = a(function () {
        this.elementStates.forEach(function (i) {
          var r = i.element.getBoundingClientRect();
          (i.isVisible = !!(r.width || r.height || r.top || r.left)),
            (i.uncache = 1);
        });
      }, "updateVisibility")),
      (e.getElementState = a(function (i) {
        return this.elementStates[this.targets.indexOf(is(i))];
      }, "getElementState")),
      (e.makeAbsolute = a(function () {
        return bo(this.elementStates.slice(0), !0, !0).map(Dl);
      }, "makeAbsolute")),
      n
    );
  })(),
  Ir = (function () {
    function n(t, i, r) {
      (this.element = t), this.update(i, r);
    }
    a(n, "ElementState");
    var e = n.prototype;
    return (
      (e.isDifferent = a(function (i) {
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
      }, "isDifferent")),
      (e.update = a(function (i, r) {
        var s = this,
          o = s.element,
          l = ot.getProperty(o),
          u = ot.core.getCache(o),
          c = o.getBoundingClientRect(),
          d =
            o.getBBox &&
            typeof o.getBBox == "function" &&
            o.nodeName.toLowerCase() !== "svg" &&
            o.getBBox(),
          f = r
            ? new Dr(1, 0, 0, 1, c.left + Ml(), c.top + Pl())
            : wi(o, !1, !1, !0);
        (u.uncache = 1),
          (s.getProp = l),
          (s.element = o),
          (s.id = I0(o)),
          (s.matrix = f),
          (s.cache = u),
          (s.bounds = c),
          (s.isVisible = !!(c.width || c.height || c.left || c.top)),
          (s.display = l("display")),
          (s.position = l("position")),
          (s.parent = o.parentNode),
          (s.x = l("x")),
          (s.y = l("y")),
          (s.scaleX = u.scaleX),
          (s.scaleY = u.scaleY),
          (s.rotation = l("rotation")),
          (s.skewX = l("skewX")),
          (s.opacity = l("opacity")),
          (s.width = d ? d.width : Ai(l("width", "px"), 0.04)),
          (s.height = d ? d.height : Ai(l("height", "px"), 0.04)),
          i && D0(s, Ll[i] || df(i)),
          (s.ctm =
            o.getCTM && o.nodeName.toLowerCase() === "svg" && lf(o).inverse()),
          (s.simple =
            r || (Zr(f.a) === 1 && !Zr(f.b) && !Zr(f.c) && Zr(f.d) === 1)),
          (s.uncache = 0);
      }, "update")),
      n
    );
  })(),
  N0 = (function () {
    function n(t, i) {
      (this.vars = t),
        (this.batch = i),
        (this.states = []),
        (this.timeline = i.timeline);
    }
    a(n, "FlipAction");
    var e = n.prototype;
    return (
      (e.getStateById = a(function (i) {
        for (var r = this.states.length; r--; )
          if (this.states[r].idLookup[i]) return this.states[r];
      }, "getStateById")),
      (e.kill = a(function () {
        this.batch.remove(this);
      }, "kill")),
      n
    );
  })(),
  R0 = (function () {
    function n(t) {
      (this.id = t),
        (this.actions = []),
        (this._kill = []),
        (this._final = []),
        (this._abs = []),
        (this._run = []),
        (this.data = {}),
        (this.state = new si()),
        (this.timeline = ot.timeline());
    }
    a(n, "FlipBatch");
    var e = n.prototype;
    return (
      (e.add = a(function (i) {
        var r = this.actions.filter(function (s) {
          return s.vars === i;
        });
        return r.length
          ? r[0]
          : ((r = new N0(typeof i == "function" ? { animate: i } : i, this)),
            this.actions.push(r),
            r);
      }, "add")),
      (e.remove = a(function (i) {
        var r = this.actions.indexOf(i);
        return r >= 0 && this.actions.splice(r, 1), this;
      }, "remove")),
      (e.getState = a(function (i) {
        var r = this,
          s = ye,
          o = ts;
        return (
          (ye = this),
          this.state.clear(),
          (this._kill.length = 0),
          this.actions.forEach(function (l) {
            l.vars.getState &&
              ((l.states.length = 0), (ts = l), (l.state = l.vars.getState(l))),
              i &&
                l.states.forEach(function (u) {
                  return r.state.add(u);
                });
          }),
          (ts = o),
          (ye = s),
          this.killConflicts(),
          this
        );
      }, "getState")),
      (e.animate = a(function () {
        var i = this,
          r = ye,
          s = this.timeline,
          o = this.actions.length,
          l,
          u;
        for (
          ye = this,
            s.clear(),
            this._abs.length = this._final.length = this._run.length = 0,
            this.actions.forEach(function (c) {
              c.vars.animate && c.vars.animate(c);
              var d = c.vars.onEnter,
                f = c.vars.onLeave,
                p = c.targets,
                h,
                m;
              p &&
                p.length &&
                (d || f) &&
                ((h = new si()),
                c.states.forEach(function (g) {
                  return h.add(g);
                }),
                (m = h.compare(bn.getState(p))),
                m.enter.length && d && d(m.enter),
                m.leave.length && f && f(m.leave));
            }),
            ff(this._abs),
            this._run.forEach(function (c) {
              return c();
            }),
            u = s.duration(),
            l = this._final.slice(0),
            s.add(function () {
              u <= s.time() &&
                (l.forEach(function (c) {
                  return c();
                }),
                ju(i, "onComplete"));
            }),
            ye = r;
          o--;

        )
          this.actions[o].vars.once && this.actions[o].kill();
        return ju(this, "onStart"), s.restart(), this;
      }, "animate")),
      (e.loadState = a(function (i) {
        i ||
          (i = a(function () {
            return 0;
          }, "done"));
        var r = [];
        return (
          this.actions.forEach(function (s) {
            if (s.vars.loadState) {
              var o,
                l = a(function u(c) {
                  c && (s.targets = c),
                    (o = r.indexOf(u)),
                    ~o && (r.splice(o, 1), r.length || i());
                }, "f");
              r.push(l), s.vars.loadState(l);
            }
          }),
          r.length || i(),
          this
        );
      }, "loadState")),
      (e.setState = a(function () {
        return (
          this.actions.forEach(function (i) {
            return (i.targets = i.vars.setState && i.vars.setState(i));
          }),
          this
        );
      }, "setState")),
      (e.killConflicts = a(function (i) {
        return (
          this.state.interrupt(i),
          this._kill.forEach(function (r) {
            return r.interrupt(i);
          }),
          this
        );
      }, "killConflicts")),
      (e.run = a(function (i, r) {
        var s = this;
        return (
          this !== ye &&
            (i || this.getState(r),
            this.loadState(function () {
              s._killed || (s.setState(), s.animate());
            })),
          this
        );
      }, "run")),
      (e.clear = a(function (i) {
        this.state.clear(), i || (this.actions.length = 0);
      }, "clear")),
      (e.getStateById = a(function (i) {
        for (var r = this.actions.length, s; r--; )
          if (((s = this.actions[r].getStateById(i)), s)) return s;
        return this.state.idLookup[i] && this.state;
      }, "getStateById")),
      (e.kill = a(function () {
        (this._killed = 1), this.clear(), delete Wa[this.id];
      }, "kill")),
      n
    );
  })(),
  bn = (function () {
    function n() {}
    return (
      a(n, "Flip"),
      (n.getState = a(function (t, i) {
        var r = oa(t, i);
        return (
          ts && ts.states.push(r),
          i && i.batch && n.batch(i.batch).state.add(r),
          r
        );
      }, "getState")),
      (n.from = a(function (t, i) {
        return (
          (i = i || {}),
          "clearProps" in i || (i.clearProps = !0),
          ua(
            t,
            oa(i.targets || t.targets, {
              props: i.props || t.props,
              simple: i.simple,
              kill: !!i.kill,
            }),
            i,
            -1
          )
        );
      }, "from")),
      (n.to = a(function (t, i) {
        return ua(
          t,
          oa(i.targets || t.targets, {
            props: i.props || t.props,
            simple: i.simple,
            kill: !!i.kill,
          }),
          i,
          1
        );
      }, "to")),
      (n.fromTo = a(function (t, i, r) {
        return ua(t, i, r);
      }, "fromTo")),
      (n.fit = a(function (t, i, r) {
        var s = r ? Qr(r, uf) : {},
          o = r || s,
          l = o.absolute,
          u = o.scale,
          c = o.getVars,
          d = o.props,
          f = o.runBackwards,
          p = o.onComplete,
          h = o.simple,
          m = r && r.fitChild && is(r.fitChild),
          g = Ha(i, d, h, t),
          w = Ha(t, 0, h, g),
          b = d ? Mo[d] : Ao,
          y = ot.context();
        return (
          d && hf(s, g.props),
          ms(w, b),
          f &&
            ("immediateRender" in s || (s.immediateRender = !0),
            (s.onComplete = function () {
              xo(w), p && p.apply(this, arguments);
            })),
          l && Dl(w, g),
          (s = an(w, g, u || m, !s.duration && d, m, s.duration || c ? s : 0)),
          typeof r == "object" && "zIndex" in r && (s.zIndex = r.zIndex),
          y &&
            !c &&
            y.add(function () {
              return function () {
                return xo(w);
              };
            }),
          c ? s : s.duration ? ot.to(w.element, s) : null
        );
      }, "fit")),
      (n.makeAbsolute = a(function (t, i) {
        return (t instanceof si ? t : new si(t, i)).makeAbsolute();
      }, "makeAbsolute")),
      (n.batch = a(function (t) {
        return t || (t = "default"), Wa[t] || (Wa[t] = new R0(t));
      }, "batch")),
      (n.killFlipsOf = a(function (t, i) {
        (t instanceof si ? t.targets : wn(t)).forEach(function (r) {
          return r && Il(r._flip, i !== !1 ? 1 : 2);
        });
      }, "killFlipsOf")),
      (n.isFlipping = a(function (t) {
        var i = n.getByTarget(t);
        return !!i && i.isActive();
      }, "isFlipping")),
      (n.getByTarget = a(function (t) {
        return (is(t) || wo)._flip;
      }, "getByTarget")),
      (n.getElementState = a(function (t, i) {
        return new Ir(is(t), i);
      }, "getElementState")),
      (n.convertCoordinates = a(function (t, i, r) {
        var s = wi(i, !0, !0).multiply(wi(t));
        return r ? s.apply(r) : s;
      }, "convertCoordinates")),
      (n.register = a(function (t) {
        if (((Vi = typeof document < "u" && document.body), Vi)) {
          (ot = t),
            kl(Vi),
            (wn = ot.utils.toArray),
            (qa = ot.core.getStyleSaver);
          var i = ot.utils.snap(0.1);
          Ai = a(function (s, o) {
            return i(parseFloat(s) + o);
          }, "_closestTenth");
        }
      }, "register")),
      n
    );
  })();
bn.version = "3.13.0";
typeof window < "u" && window.gsap && window.gsap.registerPlugin(bn);
z.registerPlugin(bn);
const $0 = a(() => {
    document.querySelector(".seo_header_flip_wrap");
    const n = document.querySelector(".seo_header_title_col"),
      e = document.querySelector(".seo_header_title_text"),
      t = document.querySelector(".seo_header_empty_col"),
      i = document.querySelector(".seo_header_service_col"),
      r = document.querySelector(".seo_header_service_component"),
      s = document.querySelector(".seo_heading_text"),
      o = document.querySelector(".seo_header_service_button"),
      l = document.querySelector(".seo_service_list_wrap"),
      u = document.querySelector(".project_card_tags_seo");
    if (!n || !e || !t || !i || !r || !s || !o || !l || !u) return;
    function c() {
      const d = bn.getState([n, e, t, i, r, s, o, l, u], {
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
      n.classList.toggle("inactive"),
        t.classList.toggle("inactive"),
        i.classList.toggle("u-column-3"),
        i.classList.toggle("u-column-12"),
        l.classList.toggle("inactive"),
        u.classList.toggle("active"),
        s.classList.toggle("active"),
        r.classList.toggle("active"),
        o.classList.toggle("active"),
        bn.from(d, { duration: 1.6, ease: "expo.inOut", absoluteOnLeave: !0 });
    }
    a(c, "flipService"),
      o.addEventListener("click", c),
      o.addEventListener("click", () => {});
  }, "seoFlip"),
  F0 = a(() => {
    $0();
  }, "initSeoFlip"),
  B0 = a(() => {
    x0(), er(), Sl(), tr(), F0(), bc(), Nr().add(() => ir(), "-=1");
  }, "seoInit");
z.registerPlugin(be);
const V0 = a((n) => {
    const e = a(
      () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
        window.innerWidth <= 768,
      "isMobile"
    );
    let t = [],
      i,
      r;
    const s = a(() => {
        t.forEach((d) => {
          d && typeof d.revert == "function" && d.revert();
        }),
          (t = []),
          i && (i.kill(), (i = null)),
          document
            .querySelectorAll(
              ".move-text-main, .move-text-title, .move-text-info, .move-text-meta, .work-cms-hero-text-line, .work-cms-info-title-line, .work-cms-info-text-line, .work-cms-info-meta-line"
            )
            .forEach((d) => {
              if (d.parentNode && d.firstChild) {
                for (; d.firstChild; )
                  d.parentNode.insertBefore(d.firstChild, d);
                d.remove();
              }
            }),
          document
            .querySelectorAll(
              "[work-cms-hero='text'] span, [work-cms-hero='info-title'] span, [work-cms-hero='info-text'] span, [work-cms-hero='info-meta'] span"
            )
            .forEach((d) => {
              const f = d.parentNode;
              f &&
                f !== d.parentNode.parentNode &&
                (f.parentNode.insertBefore(d, f), f.remove());
            });
      }, "cleanup"),
      o = a(async () => {
        s();
        const u = document.querySelector("[work-cms-hero='text']"),
          c = document.querySelector("[work-cms-hero='back-btn']"),
          d = document.querySelector("[work-cms-hero='line']"),
          f = document.querySelector("[work-cms-hero='info']"),
          p = document.querySelector("[work-cms-hero='info-title']"),
          h = document.querySelector("[work-cms-hero='info-text']"),
          m = document.querySelector("[work-cms-hero='info-meta']"),
          g = document.querySelectorAll("[work-cms-hero='tag']"),
          w = document.querySelectorAll("[work-cms-hero='visual']"),
          b = document.querySelector("[work-cms-hero='bg'] img");
        u &&
          be.create(u, {
            type: "chars, lines, words",
            autoSplit: !0,
            mask: "lines",
            linesClass: "work-cms-hero-text-line",
            tag: "div",
            onSplit(y) {
              be.create(p, {
                type: "lines",
                autoSplit: !0,
                mask: "lines",
                linesClass: "work-cms-info-title-line",
                tag: "div",
                onSplit(_) {
                  be.create(h, {
                    type: "lines",
                    autoSplit: !0,
                    mask: "lines",
                    linesClass: "work-cms-info-text-line",
                    tag: "div",
                    onSplit(v) {
                      be.create(m, {
                        type: "lines",
                        autoSplit: !0,
                        mask: "lines",
                        linesClass: "work-cms-info-meta-line",
                        tag: "div",
                        onSplit(x) {
                          t.push(y, _, v, x),
                            y.lines.forEach((C) => {
                              const S = document.createElement("div");
                              S.classList.add("move-text-main"),
                                (S.style.overflow = "clip"),
                                (S.style.position = "relative"),
                                C.parentNode.insertBefore(S, C),
                                S.appendChild(C);
                            }),
                            _.lines.forEach((C) => {
                              const S = document.createElement("div");
                              S.classList.add("move-text-title"),
                                (S.style.overflow = "clip"),
                                (S.style.position = "relative"),
                                C.parentNode.insertBefore(S, C),
                                S.appendChild(C);
                            }),
                            v.lines.forEach((C) => {
                              const S = document.createElement("div");
                              S.classList.add("move-text-info"),
                                (S.style.overflow = "clip"),
                                (S.style.position = "relative"),
                                C.parentNode.insertBefore(S, C),
                                S.appendChild(C);
                            }),
                            x.lines.forEach((C) => {
                              const S = document.createElement("div");
                              S.classList.add("move-text-meta"),
                                (S.style.overflow = "clip"),
                                (S.style.position = "relative"),
                                C.parentNode.insertBefore(S, C),
                                S.appendChild(C);
                            });
                          const E = a((C, S) => {
                            const A = C.querySelectorAll("span");
                            A.length &&
                              A.forEach((k) => {
                                const L = document.createElement("div");
                                (L.style.overflow = "clip"),
                                  (L.style.position = "relative"),
                                  (L.style.paddingBottom = "3px"),
                                  k.parentNode.insertBefore(L, k),
                                  L.appendChild(k);
                              });
                          }, "wrapSpans");
                          return (
                            E(u),
                            E(p),
                            E(h),
                            E(m),
                            (i = z.timeline()),
                            z.set(y.chars, { opacity: 0, yPercent: 100 }),
                            z.set(c, { opacity: 0, yPercent: 100 }),
                            z.set(g, {
                              opacity: 0,
                              y: 50,
                              scale: 0.4,
                              transformOrigin: "center right",
                            }),
                            z.set(d, {
                              opacity: 0,
                              scaleX: 0,
                              transformOrigin: "center left",
                            }),
                            z.set(f, { opacity: 0, y: 50 }),
                            z.set(".move-text-title", {
                              opacity: 0,
                              yPercent: 100,
                            }),
                            z.set(".move-text-info", {
                              opacity: 0,
                              yPercent: 100,
                            }),
                            z.set(".move-text-meta", {
                              opacity: 0,
                              yPercent: 100,
                            }),
                            z.set(w, { y: 100, opacity: 0 }),
                            z.set(b, { scale: 1.4 }),
                            i.to(
                              y.chars,
                              {
                                opacity: 1,
                                duration: 1.8,
                                stagger: 0.01,
                                ease: "expo.inOut",
                                yPercent: 0,
                              },
                              "<"
                            ),
                            i.to(
                              b,
                              { scale: 1, duration: 2.5, ease: "expo.inOut" },
                              "-=2.5"
                            ),
                            i.to(
                              g,
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
                            i.to(d, { opacity: 1, duration: 0 }, "<"),
                            i.to(
                              d,
                              { scaleX: 1, duration: 2.4, ease: "expo.inOut" },
                              "-=2"
                            ),
                            i.to(
                              f,
                              {
                                opacity: 1,
                                y: 0,
                                duration: 1,
                                ease: "expo.inOut",
                              },
                              "-=1.8"
                            ),
                            i.to(
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
                            i.to(
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
                            i.to(
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
                            i.to(
                              w,
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
                            i
                          );
                        },
                      });
                    },
                  });
                },
              });
            },
          });
      }, "createWorkCmsTransitions"),
      l = a(() => {
        e() ||
          (clearTimeout(r),
          (r = setTimeout(() => {
            s(),
              setTimeout(() => {
                o();
              }, 100);
          }, 250)));
      }, "handleResize");
    o(), e() || window.addEventListener("resize", l);
  }, "initWorkCmsTransitions"),
  q0 = a(() => {
    er(), tr();
    const n = Nr();
    n.add(() => ir(), "-=1.4"), n.add(() => V0(), "-=1.4");
  }, "workCmsInit"),
  W0 = {
    home: Bu,
    about: Gg,
    work: d0,
    contact: a0,
    career: u0,
    "extra-page": Bu,
    service: w0,
    work_cms: q0,
    seo: B0,
  },
  H0 = a(() => {
    const n = document.querySelector("[page-route]");
    if (!n) return;
    const e = n.getAttribute("page-route"),
      t = W0[e];
    t && t();
  }, "PageRouter"),
  G0 = a(() => {
    const n = document.querySelector("[nav-menu='trigger']"),
      e = document.querySelector("[nav-menu='component']"),
      t = document.querySelector("[nav-menu='contain']"),
      i = document.querySelector("[main-nav='brand']"),
      r = document.querySelector("[nav-menu='brand']"),
      s = document.querySelectorAll("[nav-menu='link-item']"),
      o = document.querySelector("[nav-menu='info-text']"),
      l = document.querySelectorAll("[nav-menu='close']"),
      u = document.querySelectorAll("[nav-menu='social-link']");
    if (!n || !e || !t || !r || !s || !o || !u) return;
    z.set(e, { clipPath: "inset(0% 0% 100% 0%)" }),
      z.set([r, s, u], { y: "100%", opacity: 0 }),
      z.set(o, { y: "20%", opacity: 0 });
    const c = z.timeline({ paused: !0 }),
      d = z.timeline({ paused: !0 });
    c
      .to(e, {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "expo.inOut",
        duration: 1,
      })
      .to(r, { y: "0%", duration: 1, opacity: 1, ease: "expo.out" }, "-=0.4")
      .to(i, { x: "-100%", duration: 1, opacity: 0, ease: "expo.out" }, "-=1.4")
      .to(
        s,
        { y: "0%", duration: 1.2, opacity: 1, ease: "expo.out", stagger: 0.06 },
        "-=1"
      )
      .to(o, { y: "0%", opacity: 1, duration: 1.2, ease: "expo.out" }, "-=0.9")
      .to(
        u,
        { y: "0%", duration: 1.2, opacity: 1, ease: "expo.out", stagger: 0.1 },
        "-=1"
      ),
      d
        .to([r, s], {
          y: "100%",
          duration: 0.6,
          ease: "expo.in",
          opacity: 0,
          stagger: 0.05,
        })
        .to(
          [o, u],
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
      n.addEventListener("click", () => {
        const m =
          n.getAttribute("hamburger-state") === "open" ? "closed" : "open";
        n.setAttribute("hamburger-state", m),
          m === "open" ? (d.pause(), c.play(0)) : (c.pause(), d.play(0));
      }),
      l.forEach((h) => {
        h.addEventListener("click", () => {
          n.setAttribute("hamburger-state", "closed"), d.play(0);
        });
      });
    const f = 767;
    function p() {
      return window.innerWidth <= f;
    }
    a(p, "isMobile"),
      window.addEventListener("resize", () => {
        n.getAttribute("hamburger-state") === "open" &&
          !p() &&
          (n.setAttribute("hamburger-state", "closed"), d.play(0));
      });
  }, "navMenu"),
  Y0 = a(() => {
    G0();
  }, "initNavMenu"),
  Rl = class Rl {
    constructor() {
      (this.canvas = document.getElementById("noise")),
        !(!this.canvas || xl() || Ng() || zg()) &&
          ((this.ctx = this.canvas.getContext("2d")),
          (this.wWidth = window.innerWidth),
          (this.wHeight = window.innerHeight),
          (this.noiseData = []),
          (this.frame = 0),
          (this.loopTimeout = null),
          (this.resizeThrottle = null),
          (this.rafId = null),
          (this.isActive = !0),
          (this.frameRate = 15),
          (this._resizeHandler = this._resizeHandler.bind(this)),
          (this._handleVisibilityChange =
            this._handleVisibilityChange.bind(this)),
          this._init());
    }
    _createNoise() {
      const e = this.ctx.createImageData(this.wWidth, this.wHeight),
        t = new Uint32Array(e.data.buffer),
        i = t.length;
      for (let r = 0; r < i; r++) Math.random() < 0.5 && (t[r] = 4278190080);
      this.noiseData.push(e);
    }
    _paintNoise() {
      this.frame === 9 ? (this.frame = 0) : this.frame++,
        this.ctx.putImageData(this.noiseData[this.frame], 0, 0);
    }
    _loop() {
      this.isActive &&
        (this._paintNoise(),
        (this.loopTimeout = window.setTimeout(() => {
          this.rafId = window.requestAnimationFrame(() => this._loop());
        }, 1e3 / this.frameRate)));
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
    _handleVisibilityChange() {
      document.visibilityState === "hidden"
        ? ((this.isActive = !1),
          this.rafId && window.cancelAnimationFrame(this.rafId),
          window.clearTimeout(this.loopTimeout))
        : ((this.isActive = !0), this._loop());
    }
    _init() {
      window.addEventListener("resize", this._resizeHandler, !1),
        document.addEventListener(
          "visibilitychange",
          this._handleVisibilityChange,
          !1
        ),
        this._setup();
    }
    cleanup() {
      window.removeEventListener("resize", this._resizeHandler, !1),
        document.removeEventListener(
          "visibilitychange",
          this._handleVisibilityChange,
          !1
        ),
        window.clearTimeout(this.loopTimeout),
        this.rafId && window.cancelAnimationFrame(this.rafId),
        (this.noiseData = []),
        (this.isActive = !1);
    }
  };
a(Rl, "Noise");
let Ga = Rl;
const On = a((n) => {
    const e = document.querySelector(".page_overlay"),
      t = document.querySelector("[page-overlay='text-wrap']"),
      i = document.querySelectorAll("[page-load='component']"),
      r = document.querySelectorAll("[page-load='wrap']"),
      s = document.querySelectorAll("[page-load='gradient']"),
      o = document.querySelectorAll("[page-load='text']");
    e && z.set(e, { clipPath: "inset(100% 0% 0% 0%)", pointerEvents: "none" }),
      t && z.set(t, { opacity: 0, y: 50, willChange: "transform, opacity" });
    const l = z.timeline();
    return (
      e &&
        l.fromTo(
          e,
          { clipPath: "inset(100% 0% 0% 0%)", pointerEvents: "none" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            pointerEvents: "auto",
            duration: 1,
            ease: "expo.inOut",
            onComplete: a(() => {
              s.length && z.set(s, { opacity: 1 }),
                r.length && z.set(r, { opacity: 0 }),
                o.length && z.set(o, { opacity: 0 }),
                i.length &&
                  z.set(i, {
                    pointerEvents: "auto",
                    opacity: 0,
                    display: "block",
                    clipPath: "inset(0% 0% 0% 0%)",
                  });
            }, "onComplete"),
          },
          "<"
        ),
      l
    );
  }, "pageLeave"),
  X0 = a(() => {
    document.querySelectorAll("a[href]").forEach((s) => {
      const o = s.getAttribute("href");
      if (
        o.startsWith("#") ||
        o.startsWith("mailto:") ||
        o.startsWith("tel:") ||
        o.startsWith("javascript:") ||
        s.target === "_blank"
      )
        return;
      new URL(o, window.location.origin).hostname ===
        window.location.hostname &&
        s.addEventListener("click", async (c) => {
          c.preventDefault();
          const d = s.href,
            f = document.createElement("link");
          (f.rel = "prefetch"),
            (f.href = d),
            document.head.appendChild(f),
            await On(),
            (window.location.href = d);
        });
    });
    let e = !1;
    const t = history.back,
      i = history.forward,
      r = history.go;
    (history.back = function () {
      e
        ? t.call(history)
        : ((e = !0),
          On().then(() => {
            t.call(history), (e = !1);
          }));
    }),
      (history.forward = function () {
        e
          ? i.call(history)
          : ((e = !0),
            On().then(() => {
              i.call(history), (e = !1);
            }));
      }),
      (history.go = function (s) {
        e
          ? r.call(history, s)
          : ((e = !0),
            On().then(() => {
              r.call(history, s), (e = !1);
            }));
      }),
      window.addEventListener("popstate", async (s) => {
        e || ((e = !0), await On(), (e = !1));
      });
  }, "pageToPage");
z.registerPlugin(be, j);
const j0 = {
    lines: { duration: 1.8, stagger: 0.08 },
    words: { duration: 0.6, stagger: 0.06 },
    chars: { duration: 0.4, stagger: 0.01 },
  },
  U0 = a(() => {
    const n = a(
      () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
        window.innerWidth <= 768,
      "isMobile"
    );
    let e = [],
      t;
    const i = a(() => {
        e.forEach((o) => {
          o && typeof o.revert == "function" && o.revert();
        }),
          (e = []),
          j.getAll().forEach((o) => o.kill());
      }, "cleanup"),
      r = a(() => {
        const o = document.querySelectorAll("[split-text]");
        o.length &&
          o.forEach((l) => {
            if (!l) return;
            z.set(l, { autoAlpha: 1 });
            const u = l.getAttribute("split-text") || "lines",
              c =
                u === "lines"
                  ? ["lines"]
                  : u === "words"
                  ? ["lines", "words"]
                  : ["lines", "words", "chars"],
              d = be.create(l, {
                type: c.join(", "),
                mask: "lines",
                autoSplit: !0,
                linesClass: "line",
                wordsClass: "word",
                charsClass: "letter",
                onSplit: a(function (f) {
                  const p = f[u];
                  if (!p || !p.length) return;
                  const h = j0[u];
                  return z.from(p, {
                    yPercent: 110,
                    duration: h.duration,
                    stagger: h.stagger,
                    ease: "expo.out",
                    scrollTrigger: {
                      trigger: l,
                      start: "clamp(top 80%)",
                      once: !0,
                    },
                  });
                }, "onSplit"),
              });
            d && e.push(d);
          });
      }, "createSplitAnimations"),
      s = a(() => {
        n() ||
          (clearTimeout(t),
          (t = setTimeout(() => {
            i(),
              setTimeout(() => {
                r(), j.refresh();
              }, 100);
          }, 250)));
      }, "handleResize");
    document.fonts.ready.then(() => {
      r(), n() || window.addEventListener("resize", s);
    });
  }, "initSplitText"),
  K0 = a(() => {
    if (!Xd()) return;
    const n = document.querySelector(".cursor");
    if (!n) return;
    z.set(n, { xPercent: -50, yPercent: -50 });
    let e = z.quickTo(n, "x", { duration: 0.6, ease: "power3" }),
      t = z.quickTo(n, "y", { duration: 0.6, ease: "power3" });
    window.addEventListener("mousemove", (i) => {
      e(i.clientX), t(i.clientY);
    });
  }, "customCursor"),
  Z0 = a(() => {
    K0();
  }, "initCustomCursor"),
  Q0 = a(() => {
    Y0(), new Ga(), i0(), X0(), U0(), Z0();
  }, "globalInit"),
  gf = a(() => {
    const n = navigator.userAgent,
      e = /iPad|iPhone|iPod/.test(n),
      t = /WebKit/.test(n),
      i = /Safari/.test(n) && !/Chrome/.test(n),
      r = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    return e && t && i && r;
  }, "isSafariMobile");
let Ya = window.innerHeight;
const vf = a((n) => {
    (Math.abs(n - Ya) > 150 || !gf()) && (Ya = n);
  }, "updateStableViewportHeight"),
  J0 = a(() => {
    if (!gf()) return;
    const n = a(() => {
      document.documentElement.style.setProperty(
        "--stable-vh",
        `${Ya * 0.01}px`
      );
    }, "setViewportHeight");
    n(),
      window.addEventListener("orientationchange", () => {
        setTimeout(() => {
          vf(window.innerHeight), n();
        }, 500);
      });
  }, "applySafariViewportFix"),
  ev = a((n, e) => {
    let t;
    return a(function (...r) {
      const s = a(() => {
        clearTimeout(t), n(...r);
      }, "later");
      clearTimeout(t), (t = setTimeout(s, e));
    }, "executedFunction");
  }, "debounce"),
  $l = class $l {
    constructor() {
      (this.handlers = new Set()),
        (this.isInitialized = !1),
        (this.lastWidth = window.innerWidth),
        (this.lastHeight = window.innerHeight),
        (this.handleResize = this.handleResize.bind(this)),
        (this.handleOrientationChange =
          this.handleOrientationChange.bind(this)),
        (this.debouncedResize = ev(this.handleResize, 250));
    }
    init() {
      this.isInitialized ||
        (window.addEventListener("resize", this.debouncedResize),
        window.addEventListener(
          "orientationchange",
          this.handleOrientationChange
        ),
        (this.isInitialized = !0));
    }
    destroy() {
      this.isInitialized &&
        (window.removeEventListener("resize", this.debouncedResize),
        window.removeEventListener(
          "orientationchange",
          this.handleOrientationChange
        ),
        this.handlers.clear(),
        (this.isInitialized = !1));
    }
    addHandler(e, t = {}) {
      const i = {
        handler: e,
        minWidthChange: t.minWidthChange || 0,
        minHeightChange: t.minHeightChange || 0,
        debounce: t.debounce !== !1,
        ...t,
      };
      return (
        this.handlers.add(i),
        this.isInitialized || this.init(),
        () => this.removeHandler(i)
      );
    }
    removeHandler(e) {
      this.handlers.delete(e);
    }
    handleResize() {
      const e = window.innerWidth,
        t = window.innerHeight,
        i = Math.abs(e - this.lastWidth),
        r = Math.abs(t - this.lastHeight);
      this.handlers.forEach((s) => {
        const { handler: o, minWidthChange: l, minHeightChange: u } = s;
        if (i >= l || r >= u)
          try {
            o({
              width: e,
              height: t,
              widthChanged: i,
              heightChanged: r,
              lastWidth: this.lastWidth,
              lastHeight: this.lastHeight,
            });
          } catch {}
      }),
        (this.lastWidth = e),
        (this.lastHeight = t);
    }
    handleOrientationChange() {
      setTimeout(() => {
        this.handleResize();
      }, 500);
    }
    getDimensions() {
      return { width: window.innerWidth, height: window.innerHeight };
    }
    hasChangedSignificantly(e = 100) {
      const t = Math.abs(window.innerWidth - this.lastWidth),
        i = Math.abs(window.innerHeight - this.lastHeight);
      return t >= e || i >= e;
    }
  };
a($l, "ResizeManager");
let Xa = $l;
const tv = new Xa(),
  iv = a((n, e) => tv.addHandler(n, e), "addResizeHandler"),
  rv = a(({ height: n, heightChanged: e }) => {
    vf(n);
    const t = Jn();
    t && t.resize(), j.refresh();
  }, "handleResize"),
  nv = a(() => {
    J0(), iv(rv, { minHeightChange: 50, debounce: !0 });
  }, "initializeScrollTriggerManager");
document.addEventListener("DOMContentLoaded", () => {
  $g(), nv(), Q0(), H0();
});
