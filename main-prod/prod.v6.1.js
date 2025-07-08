var Uf = Object.defineProperty;
var Kf = (n, e, t) =>
  e in n
    ? Uf(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (n[e] = t);
var W = (n, e, t) => Kf(n, typeof e != "symbol" ? e + "" : e, t);
function Sl(n, e) {
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
function xl(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Sl(Object(t), !0).forEach(function (i) {
          Ps(n, i, t[i]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
      : Sl(Object(t)).forEach(function (i) {
          Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(t, i));
        });
  }
  return n;
}
function dt() {
  dt = function () {
    return n;
  };
  var n = {},
    e = Object.prototype,
    t = e.hasOwnProperty,
    i =
      Object.defineProperty ||
      function (S, P, A) {
        S[P] = A.value;
      },
    r = typeof Symbol == "function" ? Symbol : {},
    s = r.iterator || "@@iterator",
    o = r.asyncIterator || "@@asyncIterator",
    a = r.toStringTag || "@@toStringTag";
  function l(S, P, A) {
    return (
      Object.defineProperty(S, P, {
        value: A,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      S[P]
    );
  }
  try {
    l({}, "");
  } catch {
    l = function (P, A, L) {
      return (P[A] = L);
    };
  }
  function u(S, P, A, L) {
    var z = P && P.prototype instanceof d ? P : d,
      R = Object.create(z.prototype),
      F = new M(L || []);
    return i(R, "_invoke", { value: b(S, A, F) }), R;
  }
  function c(S, P, A) {
    try {
      return { type: "normal", arg: S.call(P, A) };
    } catch (L) {
      return { type: "throw", arg: L };
    }
  }
  n.wrap = u;
  var f = {};
  function d() {}
  function h() {}
  function p() {}
  var g = {};
  l(g, s, function () {
    return this;
  });
  var v = Object.getPrototypeOf,
    w = v && v(v(C([])));
  w && w !== e && t.call(w, s) && (g = w);
  var y = (p.prototype = d.prototype = Object.create(g));
  function _(S) {
    ["next", "throw", "return"].forEach(function (P) {
      l(S, P, function (A) {
        return this._invoke(P, A);
      });
    });
  }
  function m(S, P) {
    function A(z, R, F, V) {
      var T = c(S[z], S, R);
      if (T.type !== "throw") {
        var X = T.arg,
          U = X.value;
        return U && typeof U == "object" && t.call(U, "__await")
          ? P.resolve(U.__await).then(
              function (ue) {
                A("next", ue, F, V);
              },
              function (ue) {
                A("throw", ue, F, V);
              }
            )
          : P.resolve(U).then(
              function (ue) {
                (X.value = ue), F(X);
              },
              function (ue) {
                return A("throw", ue, F, V);
              }
            );
      }
      V(T.arg);
    }
    var L;
    i(this, "_invoke", {
      value: function (z, R) {
        function F() {
          return new P(function (V, T) {
            A(z, R, V, T);
          });
        }
        return (L = L ? L.then(F, F) : F());
      },
    });
  }
  function b(S, P, A) {
    var L = "suspendedStart";
    return function (z, R) {
      if (L === "executing") throw new Error("Generator is already running");
      if (L === "completed") {
        if (z === "throw") throw R;
        return I();
      }
      for (A.method = z, A.arg = R; ; ) {
        var F = A.delegate;
        if (F) {
          var V = E(F, A);
          if (V) {
            if (V === f) continue;
            return V;
          }
        }
        if (A.method === "next") A.sent = A._sent = A.arg;
        else if (A.method === "throw") {
          if (L === "suspendedStart") throw ((L = "completed"), A.arg);
          A.dispatchException(A.arg);
        } else A.method === "return" && A.abrupt("return", A.arg);
        L = "executing";
        var T = c(S, P, A);
        if (T.type === "normal") {
          if (((L = A.done ? "completed" : "suspendedYield"), T.arg === f))
            continue;
          return { value: T.arg, done: A.done };
        }
        T.type === "throw" &&
          ((L = "completed"), (A.method = "throw"), (A.arg = T.arg));
      }
    };
  }
  function E(S, P) {
    var A = P.method,
      L = S.iterator[A];
    if (L === void 0)
      return (
        (P.delegate = null),
        (A === "throw" &&
          S.iterator.return &&
          ((P.method = "return"),
          (P.arg = void 0),
          E(S, P),
          P.method === "throw")) ||
          (A !== "return" &&
            ((P.method = "throw"),
            (P.arg = new TypeError(
              "The iterator does not provide a '" + A + "' method"
            )))),
        f
      );
    var z = c(L, S.iterator, P.arg);
    if (z.type === "throw")
      return (P.method = "throw"), (P.arg = z.arg), (P.delegate = null), f;
    var R = z.arg;
    return R
      ? R.done
        ? ((P[S.resultName] = R.value),
          (P.next = S.nextLoc),
          P.method !== "return" && ((P.method = "next"), (P.arg = void 0)),
          (P.delegate = null),
          f)
        : R
      : ((P.method = "throw"),
        (P.arg = new TypeError("iterator result is not an object")),
        (P.delegate = null),
        f);
  }
  function k(S) {
    var P = { tryLoc: S[0] };
    1 in S && (P.catchLoc = S[1]),
      2 in S && ((P.finallyLoc = S[2]), (P.afterLoc = S[3])),
      this.tryEntries.push(P);
  }
  function x(S) {
    var P = S.completion || {};
    (P.type = "normal"), delete P.arg, (S.completion = P);
  }
  function M(S) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      S.forEach(k, this),
      this.reset(!0);
  }
  function C(S) {
    if (S) {
      var P = S[s];
      if (P) return P.call(S);
      if (typeof S.next == "function") return S;
      if (!isNaN(S.length)) {
        var A = -1,
          L = function z() {
            for (; ++A < S.length; )
              if (t.call(S, A)) return (z.value = S[A]), (z.done = !1), z;
            return (z.value = void 0), (z.done = !0), z;
          };
        return (L.next = L);
      }
    }
    return { next: I };
  }
  function I() {
    return { value: void 0, done: !0 };
  }
  return (
    (h.prototype = p),
    i(y, "constructor", { value: p, configurable: !0 }),
    i(p, "constructor", { value: h, configurable: !0 }),
    (h.displayName = l(p, a, "GeneratorFunction")),
    (n.isGeneratorFunction = function (S) {
      var P = typeof S == "function" && S.constructor;
      return (
        !!P && (P === h || (P.displayName || P.name) === "GeneratorFunction")
      );
    }),
    (n.mark = function (S) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(S, p)
          : ((S.__proto__ = p), l(S, a, "GeneratorFunction")),
        (S.prototype = Object.create(y)),
        S
      );
    }),
    (n.awrap = function (S) {
      return { __await: S };
    }),
    _(m.prototype),
    l(m.prototype, o, function () {
      return this;
    }),
    (n.AsyncIterator = m),
    (n.async = function (S, P, A, L, z) {
      z === void 0 && (z = Promise);
      var R = new m(u(S, P, A, L), z);
      return n.isGeneratorFunction(P)
        ? R
        : R.next().then(function (F) {
            return F.done ? F.value : R.next();
          });
    }),
    _(y),
    l(y, a, "Generator"),
    l(y, s, function () {
      return this;
    }),
    l(y, "toString", function () {
      return "[object Generator]";
    }),
    (n.keys = function (S) {
      var P = Object(S),
        A = [];
      for (var L in P) A.push(L);
      return (
        A.reverse(),
        function z() {
          for (; A.length; ) {
            var R = A.pop();
            if (R in P) return (z.value = R), (z.done = !1), z;
          }
          return (z.done = !0), z;
        }
      );
    }),
    (n.values = C),
    (M.prototype = {
      constructor: M,
      reset: function (S) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = void 0),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = void 0),
          this.tryEntries.forEach(x),
          !S)
        )
          for (var P in this)
            P.charAt(0) === "t" &&
              t.call(this, P) &&
              !isNaN(+P.slice(1)) &&
              (this[P] = void 0);
      },
      stop: function () {
        this.done = !0;
        var S = this.tryEntries[0].completion;
        if (S.type === "throw") throw S.arg;
        return this.rval;
      },
      dispatchException: function (S) {
        if (this.done) throw S;
        var P = this;
        function A(T, X) {
          return (
            (R.type = "throw"),
            (R.arg = S),
            (P.next = T),
            X && ((P.method = "next"), (P.arg = void 0)),
            !!X
          );
        }
        for (var L = this.tryEntries.length - 1; L >= 0; --L) {
          var z = this.tryEntries[L],
            R = z.completion;
          if (z.tryLoc === "root") return A("end");
          if (z.tryLoc <= this.prev) {
            var F = t.call(z, "catchLoc"),
              V = t.call(z, "finallyLoc");
            if (F && V) {
              if (this.prev < z.catchLoc) return A(z.catchLoc, !0);
              if (this.prev < z.finallyLoc) return A(z.finallyLoc);
            } else if (F) {
              if (this.prev < z.catchLoc) return A(z.catchLoc, !0);
            } else {
              if (!V) throw new Error("try statement without catch or finally");
              if (this.prev < z.finallyLoc) return A(z.finallyLoc);
            }
          }
        }
      },
      abrupt: function (S, P) {
        for (var A = this.tryEntries.length - 1; A >= 0; --A) {
          var L = this.tryEntries[A];
          if (
            L.tryLoc <= this.prev &&
            t.call(L, "finallyLoc") &&
            this.prev < L.finallyLoc
          ) {
            var z = L;
            break;
          }
        }
        z &&
          (S === "break" || S === "continue") &&
          z.tryLoc <= P &&
          P <= z.finallyLoc &&
          (z = null);
        var R = z ? z.completion : {};
        return (
          (R.type = S),
          (R.arg = P),
          z
            ? ((this.method = "next"), (this.next = z.finallyLoc), f)
            : this.complete(R)
        );
      },
      complete: function (S, P) {
        if (S.type === "throw") throw S.arg;
        return (
          S.type === "break" || S.type === "continue"
            ? (this.next = S.arg)
            : S.type === "return"
            ? ((this.rval = this.arg = S.arg),
              (this.method = "return"),
              (this.next = "end"))
            : S.type === "normal" && P && (this.next = P),
          f
        );
      },
      finish: function (S) {
        for (var P = this.tryEntries.length - 1; P >= 0; --P) {
          var A = this.tryEntries[P];
          if (A.finallyLoc === S)
            return this.complete(A.completion, A.afterLoc), x(A), f;
        }
      },
      catch: function (S) {
        for (var P = this.tryEntries.length - 1; P >= 0; --P) {
          var A = this.tryEntries[P];
          if (A.tryLoc === S) {
            var L = A.completion;
            if (L.type === "throw") {
              var z = L.arg;
              x(A);
            }
            return z;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (S, P, A) {
        return (
          (this.delegate = { iterator: C(S), resultName: P, nextLoc: A }),
          this.method === "next" && (this.arg = void 0),
          f
        );
      },
    }),
    n
  );
}
function Tl(n, e, t, i, r, s, o) {
  try {
    var a = n[s](o),
      l = a.value;
  } catch (u) {
    t(u);
    return;
  }
  a.done ? e(l) : Promise.resolve(l).then(i, r);
}
function lr(n) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (i, r) {
      var s = n.apply(e, t);
      function o(l) {
        Tl(s, i, r, o, a, "next", l);
      }
      function a(l) {
        Tl(s, i, r, o, a, "throw", l);
      }
      o(void 0);
    });
  };
}
function Ru(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Zf(n, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(n, Bu(i.key), i);
  }
}
function Nu(n, e, t) {
  return (
    e && Zf(n.prototype, e),
    Object.defineProperty(n, "prototype", { writable: !1 }),
    n
  );
}
function Ps(n, e, t) {
  return (
    (e = Bu(e)),
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
function Qf(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (n.prototype = Object.create(e && e.prototype, {
    constructor: { value: n, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(n, "prototype", { writable: !1 }),
    e && Xn(n, e);
}
function Yn(n) {
  return (
    (Yn = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Yn(n)
  );
}
function Xn(n, e) {
  return (
    (Xn = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (i, r) {
          return (i.__proto__ = r), i;
        }),
    Xn(n, e)
  );
}
function Fu() {
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
function Ms(n, e, t) {
  return (
    Fu()
      ? (Ms = Reflect.construct.bind())
      : (Ms = function (r, s, o) {
          var a = [null];
          a.push.apply(a, s);
          var l = Function.bind.apply(r, a),
            u = new l();
          return o && Xn(u, o.prototype), u;
        }),
    Ms.apply(null, arguments)
  );
}
function Jf(n) {
  return Function.toString.call(n).indexOf("[native code]") !== -1;
}
function Qo(n) {
  var e = typeof Map == "function" ? new Map() : void 0;
  return (
    (Qo = function (i) {
      if (i === null || !Jf(i)) return i;
      if (typeof i != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof e < "u") {
        if (e.has(i)) return e.get(i);
        e.set(i, r);
      }
      function r() {
        return Ms(i, arguments, Yn(this).constructor);
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
        Xn(r, i)
      );
    }),
    Qo(n)
  );
}
function As(n) {
  if (n === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return n;
}
function ed(n, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return As(n);
}
function td(n) {
  var e = Fu();
  return function () {
    var i = Yn(n),
      r;
    if (e) {
      var s = Yn(this).constructor;
      r = Reflect.construct(i, arguments, s);
    } else r = i.apply(this, arguments);
    return ed(this, r);
  };
}
function id(n, e) {
  if (typeof n != "object" || n === null) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(n, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
function Bu(n) {
  var e = id(n, "string");
  return typeof e == "symbol" ? e : String(e);
}
var Vu = typeof global < "u" && {}.toString.call(global) === "[object global]";
function El(n, e) {
  return n.indexOf(e.toLowerCase()) === 0
    ? n
    : ""
        .concat(e.toLowerCase())
        .concat(n.substr(0, 1).toUpperCase())
        .concat(n.substr(1));
}
function rd(n) {
  return !!(
    n &&
    n.nodeType === 1 &&
    "nodeName" in n &&
    n.ownerDocument &&
    n.ownerDocument.defaultView
  );
}
function nd(n) {
  return !isNaN(parseFloat(n)) && isFinite(n) && Math.floor(n) == n;
}
function Tr(n) {
  return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(
    n
  );
}
function qu(n) {
  var e =
    /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
  return e.test(n);
}
function sd(n) {
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
function $u() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    e = n.id,
    t = n.url,
    i = e || t;
  if (!i)
    throw new Error(
      "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
    );
  if (nd(i)) return "https://vimeo.com/".concat(i);
  if (Tr(i)) return i.replace("http:", "https:");
  throw e
    ? new TypeError("“".concat(e, "” is not a valid video id."))
    : new TypeError("“".concat(i, "” is not a vimeo.com url."));
}
var kl = function (e, t, i) {
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
      o.forEach(function (a) {
        e[r](a, i);
      }),
      {
        cancel: function () {
          return o.forEach(function (l) {
            return e[s](l, i);
          });
        },
      }
    );
  },
  od = typeof Array.prototype.indexOf < "u",
  ad = typeof window < "u" && typeof window.postMessage < "u";
if (!Vu && (!od || !ad))
  throw new Error(
    "Sorry, the Vimeo Player API is not available in this browser."
  );
var Ur =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function ld(n, e) {
  return (e = { exports: {} }), n(e, e.exports), e.exports;
}
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
    i = function (s, o, a) {
      t
        ? Object.defineProperty(s, o, {
            configurable: !0,
            writable: !0,
            value: a,
          })
        : (s[o] = a);
    };
  n.WeakMap = (function () {
    function s() {
      if (this === void 0)
        throw new TypeError("Constructor WeakMap requires 'new'");
      if ((i(this, "_id", a("_WeakMap")), arguments.length > 0))
        throw new TypeError("WeakMap iterable is not supported");
    }
    i(s.prototype, "delete", function (u) {
      if ((o(this, "delete"), !r(u))) return !1;
      var c = u[this._id];
      return c && c[0] === u ? (delete u[this._id], !0) : !1;
    }),
      i(s.prototype, "get", function (u) {
        if ((o(this, "get"), !!r(u))) {
          var c = u[this._id];
          if (c && c[0] === u) return c[1];
        }
      }),
      i(s.prototype, "has", function (u) {
        if ((o(this, "has"), !r(u))) return !1;
        var c = u[this._id];
        return !!(c && c[0] === u);
      }),
      i(s.prototype, "set", function (u, c) {
        if ((o(this, "set"), !r(u)))
          throw new TypeError("Invalid value used as weak map key");
        var f = u[this._id];
        return f && f[0] === u
          ? ((f[1] = c), this)
          : (i(u, this._id, [u, c]), this);
      });
    function o(u, c) {
      if (!r(u) || !e.call(u, "_id"))
        throw new TypeError(
          c + " method called on incompatible receiver " + typeof u
        );
    }
    function a(u) {
      return u + "_" + l() + "." + l();
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
  typeof globalThis < "u"
    ? globalThis
    : typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : Ur
);
var $t = ld(function (n) {
    (function (t, i, r) {
      (i[t] = i[t] || r()), n.exports && (n.exports = i[t]);
    })("Promise", Ur, function () {
      var t,
        i,
        r,
        s = Object.prototype.toString,
        o =
          typeof setImmediate < "u"
            ? function (_) {
                return setImmediate(_);
              }
            : setTimeout;
      try {
        t = function (_, m, b, E) {
          return Object.defineProperty(_, m, {
            value: b,
            writable: !0,
            configurable: E !== !1,
          });
        };
      } catch {
        t = function (m, b, E) {
          return (m[b] = E), m;
        };
      }
      r = (function () {
        var _, m, b;
        function E(k, x) {
          (this.fn = k), (this.self = x), (this.next = void 0);
        }
        return {
          add: function (x, M) {
            (b = new E(x, M)),
              m ? (m.next = b) : (_ = b),
              (m = b),
              (b = void 0);
          },
          drain: function () {
            var x = _;
            for (_ = m = i = void 0; x; ) x.fn.call(x.self), (x = x.next);
          },
        };
      })();
      function a(y, _) {
        r.add(y, _), i || (i = o(r.drain));
      }
      function l(y) {
        var _,
          m = typeof y;
        return (
          y != null && (m == "object" || m == "function") && (_ = y.then),
          typeof _ == "function" ? _ : !1
        );
      }
      function u() {
        for (var y = 0; y < this.chain.length; y++)
          c(
            this,
            this.state === 1 ? this.chain[y].success : this.chain[y].failure,
            this.chain[y]
          );
        this.chain.length = 0;
      }
      function c(y, _, m) {
        var b, E;
        try {
          _ === !1
            ? m.reject(y.msg)
            : (_ === !0 ? (b = y.msg) : (b = _.call(void 0, y.msg)),
              b === m.promise
                ? m.reject(TypeError("Promise-chain cycle"))
                : (E = l(b))
                ? E.call(b, m.resolve, m.reject)
                : m.resolve(b));
        } catch (k) {
          m.reject(k);
        }
      }
      function f(y) {
        var _,
          m = this;
        if (!m.triggered) {
          (m.triggered = !0), m.def && (m = m.def);
          try {
            (_ = l(y))
              ? a(function () {
                  var b = new p(m);
                  try {
                    _.call(
                      y,
                      function () {
                        f.apply(b, arguments);
                      },
                      function () {
                        d.apply(b, arguments);
                      }
                    );
                  } catch (E) {
                    d.call(b, E);
                  }
                })
              : ((m.msg = y), (m.state = 1), m.chain.length > 0 && a(u, m));
          } catch (b) {
            d.call(new p(m), b);
          }
        }
      }
      function d(y) {
        var _ = this;
        _.triggered ||
          ((_.triggered = !0),
          _.def && (_ = _.def),
          (_.msg = y),
          (_.state = 2),
          _.chain.length > 0 && a(u, _));
      }
      function h(y, _, m, b) {
        for (var E = 0; E < _.length; E++)
          (function (x) {
            y.resolve(_[x]).then(function (C) {
              m(x, C);
            }, b);
          })(E);
      }
      function p(y) {
        (this.def = y), (this.triggered = !1);
      }
      function g(y) {
        (this.promise = y),
          (this.state = 0),
          (this.triggered = !1),
          (this.chain = []),
          (this.msg = void 0);
      }
      function v(y) {
        if (typeof y != "function") throw TypeError("Not a function");
        if (this.__NPO__ !== 0) throw TypeError("Not a promise");
        this.__NPO__ = 1;
        var _ = new g(this);
        (this.then = function (b, E) {
          var k = {
            success: typeof b == "function" ? b : !0,
            failure: typeof E == "function" ? E : !1,
          };
          return (
            (k.promise = new this.constructor(function (M, C) {
              if (typeof M != "function" || typeof C != "function")
                throw TypeError("Not a function");
              (k.resolve = M), (k.reject = C);
            })),
            _.chain.push(k),
            _.state !== 0 && a(u, _),
            k.promise
          );
        }),
          (this.catch = function (b) {
            return this.then(void 0, b);
          });
        try {
          y.call(
            void 0,
            function (b) {
              f.call(_, b);
            },
            function (b) {
              d.call(_, b);
            }
          );
        } catch (m) {
          d.call(_, m);
        }
      }
      var w = t({}, "constructor", v, !1);
      return (
        (v.prototype = w),
        t(w, "__NPO__", 0, !1),
        t(v, "resolve", function (_) {
          var m = this;
          return _ && typeof _ == "object" && _.__NPO__ === 1
            ? _
            : new m(function (E, k) {
                if (typeof E != "function" || typeof k != "function")
                  throw TypeError("Not a function");
                E(_);
              });
        }),
        t(v, "reject", function (_) {
          return new this(function (b, E) {
            if (typeof b != "function" || typeof E != "function")
              throw TypeError("Not a function");
            E(_);
          });
        }),
        t(v, "all", function (_) {
          var m = this;
          return s.call(_) != "[object Array]"
            ? m.reject(TypeError("Not an array"))
            : _.length === 0
            ? m.resolve([])
            : new m(function (E, k) {
                if (typeof E != "function" || typeof k != "function")
                  throw TypeError("Not a function");
                var x = _.length,
                  M = Array(x),
                  C = 0;
                h(
                  m,
                  _,
                  function (S, P) {
                    (M[S] = P), ++C === x && E(M);
                  },
                  k
                );
              });
        }),
        t(v, "race", function (_) {
          var m = this;
          return s.call(_) != "[object Array]"
            ? m.reject(TypeError("Not an array"))
            : new m(function (E, k) {
                if (typeof E != "function" || typeof k != "function")
                  throw TypeError("Not a function");
                h(
                  m,
                  _,
                  function (M, C) {
                    E(C);
                  },
                  k
                );
              });
        }),
        v
      );
    });
  }),
  Ci = new WeakMap();
function vn(n, e, t) {
  var i = Ci.get(n.element) || {};
  e in i || (i[e] = []), i[e].push(t), Ci.set(n.element, i);
}
function Hs(n, e) {
  var t = Ci.get(n.element) || {};
  return t[e] || [];
}
function Gs(n, e, t) {
  var i = Ci.get(n.element) || {};
  if (!i[e]) return !0;
  if (!t) return (i[e] = []), Ci.set(n.element, i), !0;
  var r = i[e].indexOf(t);
  return (
    r !== -1 && i[e].splice(r, 1),
    Ci.set(n.element, i),
    i[e] && i[e].length === 0
  );
}
function ud(n, e) {
  var t = Hs(n, e);
  if (t.length < 1) return !1;
  var i = t.shift();
  return Gs(n, e, i), i;
}
function cd(n, e) {
  var t = Ci.get(n);
  Ci.set(e, t), Ci.delete(n);
}
function co(n) {
  if (typeof n == "string")
    try {
      n = JSON.parse(n);
    } catch {
      return {};
    }
  return n;
}
function sr(n, e, t) {
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
function fd(n, e) {
  e = co(e);
  var t = [],
    i;
  if (e.event) {
    if (e.event === "error") {
      var r = Hs(n, e.data.method);
      r.forEach(function (o) {
        var a = new Error(e.data.message);
        (a.name = e.data.name), o.reject(a), Gs(n, e.data.method, o);
      });
    }
    (t = Hs(n, "event:".concat(e.event))), (i = e.data);
  } else if (e.method) {
    var s = ud(n, e.method);
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
var dd = [
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
function Wu(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return dd.reduce(function (t, i) {
    var r = n.getAttribute("data-vimeo-".concat(i));
    return (r || r === "") && (t[i] = r === "" ? 1 : r), t;
  }, e);
}
function Ia(n, e) {
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
function Hu(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = arguments.length > 2 ? arguments[2] : void 0;
  return new Promise(function (i, r) {
    if (!Tr(n)) throw new TypeError("“".concat(n, "” is not a vimeo.com url."));
    var s = sd(n),
      o = "https://"
        .concat(s, "/api/oembed.json?url=")
        .concat(encodeURIComponent(n));
    for (var a in e)
      e.hasOwnProperty(a) &&
        (o += "&".concat(a, "=").concat(encodeURIComponent(e[a])));
    var l =
      "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
    l.open("GET", o, !0),
      (l.onload = function () {
        if (l.status === 404) {
          r(new Error("“".concat(n, "” was not found.")));
          return;
        }
        if (l.status === 403) {
          r(new Error("“".concat(n, "” is not embeddable.")));
          return;
        }
        try {
          var u = JSON.parse(l.responseText);
          if (u.domain_status_code === 403) {
            Ia(u, t), r(new Error("“".concat(n, "” is not embeddable.")));
            return;
          }
          i(u);
        } catch (c) {
          r(c);
        }
      }),
      (l.onerror = function () {
        var u = l.status ? " (".concat(l.status, ")") : "";
        r(
          new Error(
            "There was an error fetching the embed code from Vimeo".concat(
              u,
              "."
            )
          )
        );
      }),
      l.send();
  });
}
function hd() {
  var n =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document,
    e = [].slice.call(n.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
    t = function (r) {
      "console" in window;
    };
  e.forEach(function (i) {
    try {
      if (i.getAttribute("data-vimeo-defer") !== null) return;
      var r = Wu(i),
        s = $u(r);
      Hu(s, r, i)
        .then(function (o) {
          return Ia(o, i);
        })
        .catch(t);
    } catch (o) {
      t(o);
    }
  });
}
function pd() {
  var n =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoPlayerResizeEmbeds_) {
    window.VimeoPlayerResizeEmbeds_ = !0;
    var e = function (i) {
      if (Tr(i.origin) && !(!i.data || i.data.event !== "spacechange")) {
        for (var r = n.querySelectorAll("iframe"), s = 0; s < r.length; s++)
          if (r[s].contentWindow === i.source) {
            var o = r[s].parentElement;
            o.style.paddingBottom = "".concat(i.data.data[0].bottom, "px");
            break;
          }
      }
    };
    window.addEventListener("message", e);
  }
}
function gd() {
  var n =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoSeoMetadataAppended) {
    window.VimeoSeoMetadataAppended = !0;
    var e = function (i) {
      if (Tr(i.origin)) {
        var r = co(i.data);
        if (!(!r || r.event !== "ready"))
          for (var s = n.querySelectorAll("iframe"), o = 0; o < s.length; o++) {
            var a = s[o],
              l = a.contentWindow === i.source;
            if (qu(a.src) && l) {
              var u = new An(a);
              u.callMethod("appendVideoMetadata", window.location.href);
            }
          }
      }
    };
    window.addEventListener("message", e);
  }
}
function md() {
  var n =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoCheckedUrlTimeParam) {
    window.VimeoCheckedUrlTimeParam = !0;
    var e = function (r) {
        "console" in window;
      },
      t = function (r) {
        if (Tr(r.origin)) {
          var s = co(r.data);
          if (!(!s || s.event !== "ready"))
            for (
              var o = n.querySelectorAll("iframe"),
                a = function () {
                  var c = o[l],
                    f = c.contentWindow === r.source;
                  if (qu(c.src) && f) {
                    var d = new An(c);
                    d.getVideoId()
                      .then(function (h) {
                        var p = new RegExp(
                          "[?&]vimeo_t_".concat(h, "=([^&#]*)")
                        ).exec(window.location.href);
                        if (p && p[1]) {
                          var g = decodeURI(p[1]);
                          d.setCurrentTime(g);
                        }
                      })
                      .catch(e);
                  }
                },
                l = 0;
              l < o.length;
              l++
            )
              a();
        }
      };
    window.addEventListener("message", t);
  }
}
function vd() {
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
          a = {};
        s < o;
        s++
      )
        if (((i = r[s]), i && i[1] in document)) {
          for (s = 0; s < i.length; s++) a[r[0][s]] = i[s];
          return a;
        }
      return !1;
    })(),
    e = {
      fullscreenchange: n.fullscreenchange,
      fullscreenerror: n.fullscreenerror,
    },
    t = {
      request: function (r) {
        return new Promise(function (s, o) {
          var a = function u() {
            t.off("fullscreenchange", u), s();
          };
          t.on("fullscreenchange", a), (r = r || document.documentElement);
          var l = r[n.requestFullscreen]();
          l instanceof Promise && l.then(a).catch(o);
        });
      },
      exit: function () {
        return new Promise(function (r, s) {
          if (!t.isFullscreen) {
            r();
            return;
          }
          var o = function l() {
            t.off("fullscreenchange", l), r();
          };
          t.on("fullscreenchange", o);
          var a = document[n.exitFullscreen]();
          a instanceof Promise && a.then(o).catch(s);
        });
      },
      on: function (r, s) {
        var o = e[r];
        o && document.addEventListener(o, s);
      },
      off: function (r, s) {
        var o = e[r];
        o && document.removeEventListener(o, s);
      },
    };
  return (
    Object.defineProperties(t, {
      isFullscreen: {
        get: function () {
          return !!document[n.fullscreenElement];
        },
      },
      element: {
        enumerable: !0,
        get: function () {
          return document[n.fullscreenElement];
        },
      },
      isEnabled: {
        enumerable: !0,
        get: function () {
          return !!document[n.fullscreenEnabled];
        },
      },
    }),
    t
  );
}
var _d = {
    role: "viewer",
    autoPlayMuted: !0,
    allowedDrift: 0.3,
    maxAllowedDrift: 1,
    minCheckInterval: 0.1,
    maxRateAdjustment: 0.2,
    maxTimeToCatchUp: 1,
  },
  yd = (function (n) {
    Qf(t, n);
    var e = td(t);
    function t(i, r) {
      var s,
        o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        a = arguments.length > 3 ? arguments[3] : void 0;
      return (
        Ru(this, t),
        (s = e.call(this)),
        Ps(As(s), "logger", void 0),
        Ps(As(s), "speedAdjustment", 0),
        Ps(
          As(s),
          "adjustSpeed",
          (function () {
            var l = lr(
              dt().mark(function u(c, f) {
                var d;
                return dt().wrap(function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (s.speedAdjustment !== f) {
                          p.next = 2;
                          break;
                        }
                        return p.abrupt("return");
                      case 2:
                        return (p.next = 4), c.getPlaybackRate();
                      case 4:
                        return (
                          (p.t0 = p.sent),
                          (p.t1 = s.speedAdjustment),
                          (p.t2 = p.t0 - p.t1),
                          (p.t3 = f),
                          (d = p.t2 + p.t3),
                          s.log("New playbackRate:  ".concat(d)),
                          (p.next = 12),
                          c.setPlaybackRate(d)
                        );
                      case 12:
                        s.speedAdjustment = f;
                      case 13:
                      case "end":
                        return p.stop();
                    }
                }, u);
              })
            );
            return function (u, c) {
              return l.apply(this, arguments);
            };
          })()
        ),
        (s.logger = a),
        s.init(r, i, xl(xl({}, _d), o)),
        s
      );
    }
    return (
      Nu(t, [
        {
          key: "disconnect",
          value: function () {
            this.dispatchEvent(new Event("disconnect"));
          },
        },
        {
          key: "init",
          value: (function () {
            var i = lr(
              dt().mark(function s(o, a, l) {
                var u = this,
                  c,
                  f,
                  d;
                return dt().wrap(
                  function (p) {
                    for (;;)
                      switch ((p.prev = p.next)) {
                        case 0:
                          return (
                            (p.next = 2), this.waitForTOReadyState(o, "open")
                          );
                        case 2:
                          if (l.role !== "viewer") {
                            p.next = 10;
                            break;
                          }
                          return (p.next = 5), this.updatePlayer(o, a, l);
                        case 5:
                          (c = kl(o, "change", function () {
                            return u.updatePlayer(o, a, l);
                          })),
                            (f = this.maintainPlaybackPosition(o, a, l)),
                            this.addEventListener("disconnect", function () {
                              f.cancel(), c.cancel();
                            }),
                            (p.next = 14);
                          break;
                        case 10:
                          return (p.next = 12), this.updateTimingObject(o, a);
                        case 12:
                          (d = kl(
                            a,
                            ["seeked", "play", "pause", "ratechange"],
                            function () {
                              return u.updateTimingObject(o, a);
                            },
                            "on",
                            "off"
                          )),
                            this.addEventListener("disconnect", function () {
                              return d.cancel();
                            });
                        case 14:
                        case "end":
                          return p.stop();
                      }
                  },
                  s,
                  this
                );
              })
            );
            function r(s, o, a) {
              return i.apply(this, arguments);
            }
            return r;
          })(),
        },
        {
          key: "updateTimingObject",
          value: (function () {
            var i = lr(
              dt().mark(function s(o, a) {
                return dt().wrap(function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return (u.t0 = o), (u.next = 3), a.getCurrentTime();
                      case 3:
                        return (u.t1 = u.sent), (u.next = 6), a.getPaused();
                      case 6:
                        if (!u.sent) {
                          u.next = 10;
                          break;
                        }
                        (u.t2 = 0), (u.next = 13);
                        break;
                      case 10:
                        return (u.next = 12), a.getPlaybackRate();
                      case 12:
                        u.t2 = u.sent;
                      case 13:
                        (u.t3 = u.t2),
                          (u.t4 = { position: u.t1, velocity: u.t3 }),
                          u.t0.update.call(u.t0, u.t4);
                      case 16:
                      case "end":
                        return u.stop();
                    }
                }, s);
              })
            );
            function r(s, o) {
              return i.apply(this, arguments);
            }
            return r;
          })(),
        },
        {
          key: "updatePlayer",
          value: (function () {
            var i = lr(
              dt().mark(function s(o, a, l) {
                var u, c, f;
                return dt().wrap(
                  function (h) {
                    for (;;)
                      switch ((h.prev = h.next)) {
                        case 0:
                          if (
                            ((u = o.query()),
                            (c = u.position),
                            (f = u.velocity),
                            typeof c == "number" && a.setCurrentTime(c),
                            typeof f != "number")
                          ) {
                            h.next = 25;
                            break;
                          }
                          if (f !== 0) {
                            h.next = 11;
                            break;
                          }
                          return (h.next = 6), a.getPaused();
                        case 6:
                          if (((h.t0 = h.sent), h.t0 !== !1)) {
                            h.next = 9;
                            break;
                          }
                          a.pause();
                        case 9:
                          h.next = 25;
                          break;
                        case 11:
                          if (!(f > 0)) {
                            h.next = 25;
                            break;
                          }
                          return (h.next = 14), a.getPaused();
                        case 14:
                          if (((h.t1 = h.sent), h.t1 !== !0)) {
                            h.next = 19;
                            break;
                          }
                          return (
                            (h.next = 18),
                            a.play().catch(
                              (function () {
                                var p = lr(
                                  dt().mark(function g(v) {
                                    return dt().wrap(function (y) {
                                      for (;;)
                                        switch ((y.prev = y.next)) {
                                          case 0:
                                            if (
                                              !(
                                                v.name === "NotAllowedError" &&
                                                l.autoPlayMuted
                                              )
                                            ) {
                                              y.next = 5;
                                              break;
                                            }
                                            return (y.next = 3), a.setMuted(!0);
                                          case 3:
                                            return (
                                              (y.next = 5),
                                              a.play().catch(function (_) {})
                                            );
                                          case 5:
                                          case "end":
                                            return y.stop();
                                        }
                                    }, g);
                                  })
                                );
                                return function (g) {
                                  return p.apply(this, arguments);
                                };
                              })()
                            )
                          );
                        case 18:
                          this.updatePlayer(o, a, l);
                        case 19:
                          return (h.next = 21), a.getPlaybackRate();
                        case 21:
                          if (((h.t2 = h.sent), (h.t3 = f), h.t2 === h.t3)) {
                            h.next = 25;
                            break;
                          }
                          a.setPlaybackRate(f);
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
            function r(s, o, a) {
              return i.apply(this, arguments);
            }
            return r;
          })(),
        },
        {
          key: "maintainPlaybackPosition",
          value: function (r, s, o) {
            var a = this,
              l = o.allowedDrift,
              u = o.maxAllowedDrift,
              c = o.minCheckInterval,
              f = o.maxRateAdjustment,
              d = o.maxTimeToCatchUp,
              h = Math.min(d, Math.max(c, u)) * 1e3,
              p = (function () {
                var v = lr(
                  dt().mark(function w() {
                    var y, _, m, b, E;
                    return dt().wrap(function (x) {
                      for (;;)
                        switch ((x.prev = x.next)) {
                          case 0:
                            if (((x.t0 = r.query().velocity === 0), x.t0)) {
                              x.next = 6;
                              break;
                            }
                            return (x.next = 4), s.getPaused();
                          case 4:
                            (x.t1 = x.sent), (x.t0 = x.t1 === !0);
                          case 6:
                            if (!x.t0) {
                              x.next = 8;
                              break;
                            }
                            return x.abrupt("return");
                          case 8:
                            return (
                              (x.t2 = r.query().position),
                              (x.next = 11),
                              s.getCurrentTime()
                            );
                          case 11:
                            if (
                              ((x.t3 = x.sent),
                              (y = x.t2 - x.t3),
                              (_ = Math.abs(y)),
                              a.log("Drift: ".concat(y)),
                              !(_ > u))
                            ) {
                              x.next = 22;
                              break;
                            }
                            return (x.next = 18), a.adjustSpeed(s, 0);
                          case 18:
                            s.setCurrentTime(r.query().position),
                              a.log("Resync by currentTime"),
                              (x.next = 29);
                            break;
                          case 22:
                            if (!(_ > l)) {
                              x.next = 29;
                              break;
                            }
                            return (
                              (m = _ / d),
                              (b = f),
                              (E = m < b ? (b - m) / 2 : b),
                              (x.next = 28),
                              a.adjustSpeed(s, E * Math.sign(y))
                            );
                          case 28:
                            a.log("Resync by playbackRate");
                          case 29:
                          case "end":
                            return x.stop();
                        }
                    }, w);
                  })
                );
                return function () {
                  return v.apply(this, arguments);
                };
              })(),
              g = setInterval(function () {
                return p();
              }, h);
            return {
              cancel: function () {
                return clearInterval(g);
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
            return new Promise(function (o) {
              var a = function l() {
                r.readyState === s
                  ? o()
                  : r.addEventListener("readystatechange", l, { once: !0 });
              };
              a();
            });
          },
        },
      ]),
      t
    );
  })(Qo(EventTarget)),
  Rr = new WeakMap(),
  wo = new WeakMap(),
  _t = {},
  An = (function () {
    function n(e) {
      var t = this,
        i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (
        (Ru(this, n),
        window.jQuery &&
          e instanceof jQuery &&
          (e.length > 1 && window.console, (e = e[0])),
        typeof document < "u" &&
          typeof e == "string" &&
          (e = document.getElementById(e)),
        !rd(e))
      )
        throw new TypeError(
          "You must pass either a valid element or a valid id."
        );
      if (e.nodeName !== "IFRAME") {
        var r = e.querySelector("iframe");
        r && (e = r);
      }
      if (e.nodeName === "IFRAME" && !Tr(e.getAttribute("src") || ""))
        throw new Error("The player element passed isn’t a Vimeo embed.");
      if (Rr.has(e)) return Rr.get(e);
      (this._window = e.ownerDocument.defaultView),
        (this.element = e),
        (this.origin = "*");
      var s = new $t(function (a, l) {
        if (
          ((t._onMessage = function (f) {
            if (!(!Tr(f.origin) || t.element.contentWindow !== f.source)) {
              t.origin === "*" && (t.origin = f.origin);
              var d = co(f.data),
                h = d && d.event === "error",
                p = h && d.data && d.data.method === "ready";
              if (p) {
                var g = new Error(d.data.message);
                (g.name = d.data.name), l(g);
                return;
              }
              var v = d && d.event === "ready",
                w = d && d.method === "ping";
              if (v || w) {
                t.element.setAttribute("data-ready", "true"), a();
                return;
              }
              fd(t, d);
            }
          }),
          t._window.addEventListener("message", t._onMessage),
          t.element.nodeName !== "IFRAME")
        ) {
          var u = Wu(e, i),
            c = $u(u);
          Hu(c, u, e)
            .then(function (f) {
              var d = Ia(f, e);
              return (
                (t.element = d),
                (t._originalElement = e),
                cd(e, d),
                Rr.set(t.element, t),
                f
              );
            })
            .catch(l);
        }
      });
      if (
        (wo.set(this, s),
        Rr.set(this.element, this),
        this.element.nodeName === "IFRAME" && sr(this, "ping"),
        _t.isEnabled)
      ) {
        var o = function () {
          return _t.exit();
        };
        (this.fullscreenchangeHandler = function () {
          _t.isFullscreen
            ? vn(t, "event:exitFullscreen", o)
            : Gs(t, "event:exitFullscreen", o),
            t.ready().then(function () {
              sr(t, "fullscreenchange", _t.isFullscreen);
            });
        }),
          _t.on("fullscreenchange", this.fullscreenchangeHandler);
      }
      return this;
    }
    return (
      Nu(n, [
        {
          key: "callMethod",
          value: function (t) {
            var i = this,
              r =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
            return new $t(function (s, o) {
              return i
                .ready()
                .then(function () {
                  vn(i, t, { resolve: s, reject: o }), sr(i, t, r);
                })
                .catch(o);
            });
          },
        },
        {
          key: "get",
          value: function (t) {
            var i = this;
            return new $t(function (r, s) {
              return (
                (t = El(t, "get")),
                i
                  .ready()
                  .then(function () {
                    vn(i, t, { resolve: r, reject: s }), sr(i, t);
                  })
                  .catch(s)
              );
            });
          },
        },
        {
          key: "set",
          value: function (t, i) {
            var r = this;
            return new $t(function (s, o) {
              if (((t = El(t, "set")), i == null))
                throw new TypeError("There must be a value to set.");
              return r
                .ready()
                .then(function () {
                  vn(r, t, { resolve: s, reject: o }), sr(r, t, i);
                })
                .catch(o);
            });
          },
        },
        {
          key: "on",
          value: function (t, i) {
            if (!t) throw new TypeError("You must pass an event name.");
            if (!i) throw new TypeError("You must pass a callback function.");
            if (typeof i != "function")
              throw new TypeError("The callback must be a function.");
            var r = Hs(this, "event:".concat(t));
            r.length === 0 &&
              this.callMethod("addEventListener", t).catch(function () {}),
              vn(this, "event:".concat(t), i);
          },
        },
        {
          key: "off",
          value: function (t, i) {
            if (!t) throw new TypeError("You must pass an event name.");
            if (i && typeof i != "function")
              throw new TypeError("The callback must be a function.");
            var r = Gs(this, "event:".concat(t), i);
            r &&
              this.callMethod("removeEventListener", t).catch(function (s) {});
          },
        },
        {
          key: "loadVideo",
          value: function (t) {
            return this.callMethod("loadVideo", t);
          },
        },
        {
          key: "ready",
          value: function () {
            var t =
              wo.get(this) ||
              new $t(function (i, r) {
                r(new Error("Unknown player. Probably unloaded."));
              });
            return $t.resolve(t);
          },
        },
        {
          key: "addCuePoint",
          value: function (t) {
            var i =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            return this.callMethod("addCuePoint", { time: t, data: i });
          },
        },
        {
          key: "removeCuePoint",
          value: function (t) {
            return this.callMethod("removeCuePoint", t);
          },
        },
        {
          key: "enableTextTrack",
          value: function (t, i) {
            if (!t) throw new TypeError("You must pass a language.");
            return this.callMethod("enableTextTrack", { language: t, kind: i });
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
            return _t.isEnabled ? _t.exit() : this.callMethod("exitFullscreen");
          },
        },
        {
          key: "getFullscreen",
          value: function () {
            return _t.isEnabled
              ? $t.resolve(_t.isFullscreen)
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
            var t = this;
            return new $t(function (i) {
              if (
                (wo.delete(t),
                Rr.delete(t.element),
                t._originalElement &&
                  (Rr.delete(t._originalElement),
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
                _t.isEnabled &&
                  _t.off("fullscreenchange", t.fullscreenchangeHandler),
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
          value: function (t) {
            return this.set("autopause", t);
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
          value: function (t) {
            return this.set("cameraProps", t);
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
            return $t.all([
              this.get("colorOne"),
              this.get("colorTwo"),
              this.get("colorThree"),
              this.get("colorFour"),
            ]);
          },
        },
        {
          key: "setColor",
          value: function (t) {
            return this.set("color", t);
          },
        },
        {
          key: "setColors",
          value: function (t) {
            if (!Array.isArray(t))
              return new $t(function (s, o) {
                return o(new TypeError("Argument must be an array."));
              });
            var i = new $t(function (s) {
                return s(null);
              }),
              r = [
                t[0] ? this.set("colorOne", t[0]) : i,
                t[1] ? this.set("colorTwo", t[1]) : i,
                t[2] ? this.set("colorThree", t[2]) : i,
                t[3] ? this.set("colorFour", t[3]) : i,
              ];
            return $t.all(r);
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
          value: function (t) {
            return this.set("currentTime", t);
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
          value: function (t) {
            return this.set("loop", t);
          },
        },
        {
          key: "setMuted",
          value: function (t) {
            return this.set("muted", t);
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
          value: function (t) {
            return this.set("playbackRate", t);
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
          value: function (t) {
            return this.set("quality", t);
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
          value: function (t) {
            return this.set("volume", t);
          },
        },
        {
          key: "setTimingSrc",
          value: (function () {
            var e = lr(
              dt().mark(function i(r, s) {
                var o = this,
                  a;
                return dt().wrap(
                  function (u) {
                    for (;;)
                      switch ((u.prev = u.next)) {
                        case 0:
                          if (r) {
                            u.next = 2;
                            break;
                          }
                          throw new TypeError(
                            "A Timing Object must be provided."
                          );
                        case 2:
                          return (u.next = 4), this.ready();
                        case 4:
                          return (
                            (a = new yd(this, r, s)),
                            sr(this, "notifyTimingObjectConnect"),
                            a.addEventListener("disconnect", function () {
                              return sr(o, "notifyTimingObjectDisconnect");
                            }),
                            u.abrupt("return", a)
                          );
                        case 8:
                        case "end":
                          return u.stop();
                      }
                  },
                  i,
                  this
                );
              })
            );
            function t(i, r) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
        },
      ]),
      n
    );
  })();
Vu || ((_t = vd()), hd(), pd(), gd(), md());
class wd {
  constructor() {
    typeof An < "u" &&
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
    const e = () => {
      clearTimeout(this.resizeTimeout),
        (this.resizeTimeout = setTimeout(() => {
          this.handleVideoResize();
        }, 250));
    };
    window.addEventListener("resize", e);
  }
  handleVideoResize() {
    document.querySelectorAll("[data-vimeo-player-init]").forEach((t) => {
      const i = t.getAttribute("data-vimeo-active-video-id"),
        r = t.getAttribute("data-vimeo-video-id-mob"),
        s = t.getAttribute("data-vimeo-video-id"),
        a = this.shouldUseMobileVideo() && r ? r : s;
      if (a && i !== a) {
        const l = t.getAttribute("id"),
          u = this.players.get(l);
        if (u) {
          let c = t.getAttribute("data-vimeo-playing") === "true",
            f = 0,
            d = t.getAttribute("data-vimeo-muted") === "true";
          u.getCurrentTime()
            .then((h) => {
              (f = h),
                u.unload(),
                this.players.delete(l),
                this.switchVideo(t, a, {
                  wasPlaying: c,
                  currentTime: f,
                  isMuted: d,
                });
            })
            .catch(() => {
              u.unload(),
                this.players.delete(l),
                this.switchVideo(t, a, {
                  wasPlaying: c,
                  currentTime: 0,
                  isMuted: d,
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
        const r = new An(i),
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
          a = r && s ? s : o;
        if (!a) return;
        const l = t.querySelector("iframe");
        if (!l) return;
        const u = `https://player.vimeo.com/video/${a}?api=1&background=1&autoplay=0&loop=0&muted=1`;
        l.setAttribute("src", u),
          t.setAttribute("data-vimeo-active-video-id", a);
        const c = "vimeo-player-index-" + i;
        t.setAttribute("id", c);
        const f = new An(l);
        this.players.set(c, f), this.setupPlayerControls(t, f);
      } catch {}
    });
  }
  setupPlayerControls(e, t) {
    const i = e.id;
    if (
      (e.getAttribute("data-vimeo-update-size") === "true" &&
        t.getVideoWidth().then(function (m) {
          t.getVideoHeight().then(function (b) {
            const E = e.querySelector(".vimeo-player__before");
            E && (E.style.paddingTop = (b / m) * 100 + "%");
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
      const m = () => {
        const b = e.getBoundingClientRect();
        b.top < window.innerHeight && b.bottom > 0 ? r() : s();
      };
      m(), window.addEventListener("scroll", m);
    }
    const r = () => {
        e.setAttribute("data-vimeo-activated", "true"),
          e.setAttribute("data-vimeo-playing", "true"),
          t.play();
      },
      s = () => {
        e.setAttribute("data-vimeo-playing", "false"), t.pause();
      },
      o = e.querySelector('[data-vimeo-control="play"]');
    o &&
      o.addEventListener("click", function () {
        t.setVolume(0),
          r(),
          e.getAttribute("data-vimeo-muted") === "true"
            ? t.setVolume(0)
            : t.setVolume(1);
      });
    const a = e.querySelector('[data-vimeo-control="pause"]');
    a &&
      a.addEventListener("click", function () {
        s(),
          e.getAttribute("data-vimeo-autoplay") === "true" &&
            (e.setAttribute("data-vimeo-paused-by-user", "true"),
            window.removeEventListener("scroll", checkVisibility));
      });
    const l = e.querySelector('[data-vimeo-control="mute"]');
    l &&
      l.addEventListener("click", function () {
        e.getAttribute("data-vimeo-muted") === "false"
          ? (t.setVolume(0), e.setAttribute("data-vimeo-muted", "true"))
          : (t.setVolume(1), e.setAttribute("data-vimeo-muted", "false"));
      });
    const u = !!(
        document.fullscreenEnabled ||
        document.webkitFullscreenEnabled ||
        document.mozFullScreenEnabled ||
        document.msFullscreenEnabled
      ),
      c = e.querySelector('[data-vimeo-control="fullscreen"]');
    !u && c && (c.style.display = "none"),
      c &&
        c.addEventListener("click", () => {
          const m = document.getElementById(i);
          if (!m) return;
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
                m.requestFullscreen ||
                m.webkitRequestFullscreen ||
                m.mozRequestFullScreen ||
                m.msRequestFullscreen
              ).call(m));
        });
    const f = () => {
      const m =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;
      e.setAttribute("data-vimeo-fullscreen", m ? "true" : "false");
    };
    [
      "fullscreenchange",
      "webkitfullscreenchange",
      "mozfullscreenchange",
      "msfullscreenchange",
    ].forEach((m) => {
      document.addEventListener(m, f);
    });
    function d(m) {
      let b = Math.floor(m / 3600);
      m -= b * 3600;
      let E = Math.floor(m / 60);
      return (m -= E * 60), E + ":" + (m < 10 ? "0" + m : m);
    }
    const h = e.querySelector("[data-vimeo-duration]");
    t.getDuration().then(function (m) {
      h && (h.textContent = d(m)),
        e
          .querySelectorAll('[data-vimeo-control="timeline"], progress')
          .forEach((E) => {
            E.setAttribute("max", m);
          });
    });
    const p = e.querySelector('[data-vimeo-control="timeline"]'),
      g = e.querySelector("progress");
    function v() {
      t.getDuration().then(function () {
        const m = p.value;
        t.setCurrentTime(m), g && (g.value = m);
      });
    }
    p &&
      ["input", "change"].forEach((m) => {
        p.addEventListener(m, v);
      }),
      t.on("timeupdate", function (m) {
        p && (p.value = m.seconds),
          g && (g.value = m.seconds),
          h && (h.textContent = d(Math.trunc(m.seconds)));
      });
    let w;
    e.addEventListener("mousemove", function () {
      e.getAttribute("data-vimeo-hover") === "false" &&
        e.setAttribute("data-vimeo-hover", "true"),
        clearTimeout(w),
        (w = setTimeout(y, 3e3));
    });
    function y() {
      e.setAttribute("data-vimeo-hover", "false");
    }
    function _() {
      e.setAttribute("data-vimeo-activated", "false"),
        e.setAttribute("data-vimeo-playing", "false"),
        t.unload();
    }
    t.on("ended", _);
  }
}
const bd = () => {
  new wd();
};
function Cl(n) {
  return (
    n !== null &&
    typeof n == "object" &&
    "constructor" in n &&
    n.constructor === Object
  );
}
function za(n = {}, e = {}) {
  Object.keys(e).forEach((t) => {
    typeof n[t] > "u"
      ? (n[t] = e[t])
      : Cl(e[t]) && Cl(n[t]) && Object.keys(e[t]).length > 0 && za(n[t], e[t]);
  });
}
const Gu = {
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
function Ft() {
  const n = typeof document < "u" ? document : {};
  return za(n, Gu), n;
}
const Sd = {
  document: Gu,
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
  requestAnimationFrame(n) {
    return typeof setTimeout > "u" ? (n(), null) : setTimeout(n, 0);
  },
  cancelAnimationFrame(n) {
    typeof setTimeout > "u" || clearTimeout(n);
  },
};
function Ye() {
  const n = typeof window < "u" ? window : {};
  return za(n, Sd), n;
}
function xd(n) {
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
class Fi extends Array {
  constructor(e) {
    typeof e == "number" ? super(e) : (super(...(e || [])), xd(this));
  }
}
function ss(n = []) {
  const e = [];
  return (
    n.forEach((t) => {
      Array.isArray(t) ? e.push(...ss(t)) : e.push(t);
    }),
    e
  );
}
function Yu(n, e) {
  return Array.prototype.filter.call(n, e);
}
function Td(n) {
  const e = [];
  for (let t = 0; t < n.length; t += 1) e.indexOf(n[t]) === -1 && e.push(n[t]);
  return e;
}
function Ed(n, e) {
  if (typeof n != "string") return [n];
  const t = [],
    i = e.querySelectorAll(n);
  for (let r = 0; r < i.length; r += 1) t.push(i[r]);
  return t;
}
function $(n, e) {
  const t = Ye(),
    i = Ft();
  let r = [];
  if (!e && n instanceof Fi) return n;
  if (!n) return new Fi(r);
  if (typeof n == "string") {
    const s = n.trim();
    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
      let o = "div";
      s.indexOf("<li") === 0 && (o = "ul"),
        s.indexOf("<tr") === 0 && (o = "tbody"),
        (s.indexOf("<td") === 0 || s.indexOf("<th") === 0) && (o = "tr"),
        s.indexOf("<tbody") === 0 && (o = "table"),
        s.indexOf("<option") === 0 && (o = "select");
      const a = i.createElement(o);
      a.innerHTML = s;
      for (let l = 0; l < a.childNodes.length; l += 1) r.push(a.childNodes[l]);
    } else r = Ed(n.trim(), e || i);
  } else if (n.nodeType || n === t || n === i) r.push(n);
  else if (Array.isArray(n)) {
    if (n instanceof Fi) return n;
    r = n;
  }
  return new Fi(Td(r));
}
$.fn = Fi.prototype;
function kd(...n) {
  const e = ss(n.map((t) => t.split(" ")));
  return (
    this.forEach((t) => {
      t.classList.add(...e);
    }),
    this
  );
}
function Cd(...n) {
  const e = ss(n.map((t) => t.split(" ")));
  return (
    this.forEach((t) => {
      t.classList.remove(...e);
    }),
    this
  );
}
function Pd(...n) {
  const e = ss(n.map((t) => t.split(" ")));
  this.forEach((t) => {
    e.forEach((i) => {
      t.classList.toggle(i);
    });
  });
}
function Md(...n) {
  const e = ss(n.map((t) => t.split(" ")));
  return (
    Yu(this, (t) => e.filter((i) => t.classList.contains(i)).length > 0)
      .length > 0
  );
}
function Ad(n, e) {
  if (arguments.length === 1 && typeof n == "string")
    return this[0] ? this[0].getAttribute(n) : void 0;
  for (let t = 0; t < this.length; t += 1)
    if (arguments.length === 2) this[t].setAttribute(n, e);
    else for (const i in n) (this[t][i] = n[i]), this[t].setAttribute(i, n[i]);
  return this;
}
function Od(n) {
  for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(n);
  return this;
}
function Ld(n) {
  for (let e = 0; e < this.length; e += 1) this[e].style.transform = n;
  return this;
}
function Dd(n) {
  for (let e = 0; e < this.length; e += 1)
    this[e].style.transitionDuration = typeof n != "string" ? `${n}ms` : n;
  return this;
}
function Id(...n) {
  let [e, t, i, r] = n;
  typeof n[1] == "function" && (([e, i, r] = n), (t = void 0)), r || (r = !1);
  function s(u) {
    const c = u.target;
    if (!c) return;
    const f = u.target.dom7EventData || [];
    if ((f.indexOf(u) < 0 && f.unshift(u), $(c).is(t))) i.apply(c, f);
    else {
      const d = $(c).parents();
      for (let h = 0; h < d.length; h += 1) $(d[h]).is(t) && i.apply(d[h], f);
    }
  }
  function o(u) {
    const c = u && u.target ? u.target.dom7EventData || [] : [];
    c.indexOf(u) < 0 && c.unshift(u), i.apply(this, c);
  }
  const a = e.split(" ");
  let l;
  for (let u = 0; u < this.length; u += 1) {
    const c = this[u];
    if (t)
      for (l = 0; l < a.length; l += 1) {
        const f = a[l];
        c.dom7LiveListeners || (c.dom7LiveListeners = {}),
          c.dom7LiveListeners[f] || (c.dom7LiveListeners[f] = []),
          c.dom7LiveListeners[f].push({ listener: i, proxyListener: s }),
          c.addEventListener(f, s, r);
      }
    else
      for (l = 0; l < a.length; l += 1) {
        const f = a[l];
        c.dom7Listeners || (c.dom7Listeners = {}),
          c.dom7Listeners[f] || (c.dom7Listeners[f] = []),
          c.dom7Listeners[f].push({ listener: i, proxyListener: o }),
          c.addEventListener(f, o, r);
      }
  }
  return this;
}
function zd(...n) {
  let [e, t, i, r] = n;
  typeof n[1] == "function" && (([e, i, r] = n), (t = void 0)), r || (r = !1);
  const s = e.split(" ");
  for (let o = 0; o < s.length; o += 1) {
    const a = s[o];
    for (let l = 0; l < this.length; l += 1) {
      const u = this[l];
      let c;
      if (
        (!t && u.dom7Listeners
          ? (c = u.dom7Listeners[a])
          : t && u.dom7LiveListeners && (c = u.dom7LiveListeners[a]),
        c && c.length)
      )
        for (let f = c.length - 1; f >= 0; f -= 1) {
          const d = c[f];
          (i && d.listener === i) ||
          (i &&
            d.listener &&
            d.listener.dom7proxy &&
            d.listener.dom7proxy === i)
            ? (u.removeEventListener(a, d.proxyListener, r), c.splice(f, 1))
            : i ||
              (u.removeEventListener(a, d.proxyListener, r), c.splice(f, 1));
        }
    }
  }
  return this;
}
function Rd(...n) {
  const e = Ye(),
    t = n[0].split(" "),
    i = n[1];
  for (let r = 0; r < t.length; r += 1) {
    const s = t[r];
    for (let o = 0; o < this.length; o += 1) {
      const a = this[o];
      if (e.CustomEvent) {
        const l = new e.CustomEvent(s, {
          detail: i,
          bubbles: !0,
          cancelable: !0,
        });
        (a.dom7EventData = n.filter((u, c) => c > 0)),
          a.dispatchEvent(l),
          (a.dom7EventData = []),
          delete a.dom7EventData;
      }
    }
  }
  return this;
}
function Nd(n) {
  const e = this;
  function t(i) {
    i.target === this && (n.call(this, i), e.off("transitionend", t));
  }
  return n && e.on("transitionend", t), this;
}
function Fd(n) {
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
function Bd(n) {
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
function Vd() {
  if (this.length > 0) {
    const n = Ye(),
      e = Ft(),
      t = this[0],
      i = t.getBoundingClientRect(),
      r = e.body,
      s = t.clientTop || r.clientTop || 0,
      o = t.clientLeft || r.clientLeft || 0,
      a = t === n ? n.scrollY : t.scrollTop,
      l = t === n ? n.scrollX : t.scrollLeft;
    return { top: i.top + a - s, left: i.left + l - o };
  }
  return null;
}
function qd() {
  const n = Ye();
  return this[0] ? n.getComputedStyle(this[0], null) : {};
}
function $d(n, e) {
  const t = Ye();
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
function Wd(n) {
  return n
    ? (this.forEach((e, t) => {
        n.apply(e, [e, t]);
      }),
      this)
    : this;
}
function Hd(n) {
  const e = Yu(this, n);
  return $(e);
}
function Gd(n) {
  if (typeof n > "u") return this[0] ? this[0].innerHTML : null;
  for (let e = 0; e < this.length; e += 1) this[e].innerHTML = n;
  return this;
}
function Yd(n) {
  if (typeof n > "u") return this[0] ? this[0].textContent.trim() : null;
  for (let e = 0; e < this.length; e += 1) this[e].textContent = n;
  return this;
}
function Xd(n) {
  const e = Ye(),
    t = Ft(),
    i = this[0];
  let r, s;
  if (!i || typeof n > "u") return !1;
  if (typeof n == "string") {
    if (i.matches) return i.matches(n);
    if (i.webkitMatchesSelector) return i.webkitMatchesSelector(n);
    if (i.msMatchesSelector) return i.msMatchesSelector(n);
    for (r = $(n), s = 0; s < r.length; s += 1) if (r[s] === i) return !0;
    return !1;
  }
  if (n === t) return i === t;
  if (n === e) return i === e;
  if (n.nodeType || n instanceof Fi) {
    for (r = n.nodeType ? [n] : n, s = 0; s < r.length; s += 1)
      if (r[s] === i) return !0;
    return !1;
  }
  return !1;
}
function jd() {
  let n = this[0],
    e;
  if (n) {
    for (e = 0; (n = n.previousSibling) !== null; )
      n.nodeType === 1 && (e += 1);
    return e;
  }
}
function Ud(n) {
  if (typeof n > "u") return this;
  const e = this.length;
  if (n > e - 1) return $([]);
  if (n < 0) {
    const t = e + n;
    return t < 0 ? $([]) : $([this[t]]);
  }
  return $([this[n]]);
}
function Kd(...n) {
  let e;
  const t = Ft();
  for (let i = 0; i < n.length; i += 1) {
    e = n[i];
    for (let r = 0; r < this.length; r += 1)
      if (typeof e == "string") {
        const s = t.createElement("div");
        for (s.innerHTML = e; s.firstChild; ) this[r].appendChild(s.firstChild);
      } else if (e instanceof Fi)
        for (let s = 0; s < e.length; s += 1) this[r].appendChild(e[s]);
      else this[r].appendChild(e);
  }
  return this;
}
function Zd(n) {
  const e = Ft();
  let t, i;
  for (t = 0; t < this.length; t += 1)
    if (typeof n == "string") {
      const r = e.createElement("div");
      for (r.innerHTML = n, i = r.childNodes.length - 1; i >= 0; i -= 1)
        this[t].insertBefore(r.childNodes[i], this[t].childNodes[0]);
    } else if (n instanceof Fi)
      for (i = 0; i < n.length; i += 1)
        this[t].insertBefore(n[i], this[t].childNodes[0]);
    else this[t].insertBefore(n, this[t].childNodes[0]);
  return this;
}
function Qd(n) {
  return this.length > 0
    ? n
      ? this[0].nextElementSibling && $(this[0].nextElementSibling).is(n)
        ? $([this[0].nextElementSibling])
        : $([])
      : this[0].nextElementSibling
      ? $([this[0].nextElementSibling])
      : $([])
    : $([]);
}
function Jd(n) {
  const e = [];
  let t = this[0];
  if (!t) return $([]);
  for (; t.nextElementSibling; ) {
    const i = t.nextElementSibling;
    n ? $(i).is(n) && e.push(i) : e.push(i), (t = i);
  }
  return $(e);
}
function eh(n) {
  if (this.length > 0) {
    const e = this[0];
    return n
      ? e.previousElementSibling && $(e.previousElementSibling).is(n)
        ? $([e.previousElementSibling])
        : $([])
      : e.previousElementSibling
      ? $([e.previousElementSibling])
      : $([]);
  }
  return $([]);
}
function th(n) {
  const e = [];
  let t = this[0];
  if (!t) return $([]);
  for (; t.previousElementSibling; ) {
    const i = t.previousElementSibling;
    n ? $(i).is(n) && e.push(i) : e.push(i), (t = i);
  }
  return $(e);
}
function ih(n) {
  const e = [];
  for (let t = 0; t < this.length; t += 1)
    this[t].parentNode !== null &&
      (n
        ? $(this[t].parentNode).is(n) && e.push(this[t].parentNode)
        : e.push(this[t].parentNode));
  return $(e);
}
function rh(n) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    let i = this[t].parentNode;
    for (; i; ) n ? $(i).is(n) && e.push(i) : e.push(i), (i = i.parentNode);
  }
  return $(e);
}
function nh(n) {
  let e = this;
  return typeof n > "u" ? $([]) : (e.is(n) || (e = e.parents(n).eq(0)), e);
}
function sh(n) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    const i = this[t].querySelectorAll(n);
    for (let r = 0; r < i.length; r += 1) e.push(i[r]);
  }
  return $(e);
}
function oh(n) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    const i = this[t].children;
    for (let r = 0; r < i.length; r += 1) (!n || $(i[r]).is(n)) && e.push(i[r]);
  }
  return $(e);
}
function ah() {
  for (let n = 0; n < this.length; n += 1)
    this[n].parentNode && this[n].parentNode.removeChild(this[n]);
  return this;
}
const Pl = {
  addClass: kd,
  removeClass: Cd,
  hasClass: Md,
  toggleClass: Pd,
  attr: Ad,
  removeAttr: Od,
  transform: Ld,
  transition: Dd,
  on: Id,
  off: zd,
  trigger: Rd,
  transitionEnd: Nd,
  outerWidth: Fd,
  outerHeight: Bd,
  styles: qd,
  offset: Vd,
  css: $d,
  each: Wd,
  html: Gd,
  text: Yd,
  is: Xd,
  index: jd,
  eq: Ud,
  append: Kd,
  prepend: Zd,
  next: Qd,
  nextAll: Jd,
  prev: eh,
  prevAll: th,
  parent: ih,
  parents: rh,
  closest: nh,
  find: sh,
  children: oh,
  filter: Hd,
  remove: ah,
};
Object.keys(Pl).forEach((n) => {
  Object.defineProperty($.fn, n, { value: Pl[n], writable: !0 });
});
function lh(n) {
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
function Jo(n, e = 0) {
  return setTimeout(n, e);
}
function jn() {
  return Date.now();
}
function uh(n) {
  const e = Ye();
  let t;
  return (
    e.getComputedStyle && (t = e.getComputedStyle(n, null)),
    !t && n.currentStyle && (t = n.currentStyle),
    t || (t = n.style),
    t
  );
}
function ch(n, e = "x") {
  const t = Ye();
  let i, r, s;
  const o = uh(n);
  return (
    t.WebKitCSSMatrix
      ? ((r = o.transform || o.webkitTransform),
        r.split(",").length > 6 &&
          (r = r
            .split(", ")
            .map((a) => a.replace(",", "."))
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
function cs(n) {
  return (
    typeof n == "object" &&
    n !== null &&
    n.constructor &&
    Object.prototype.toString.call(n).slice(8, -1) === "Object"
  );
}
function fh(n) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? n instanceof HTMLElement
    : n && (n.nodeType === 1 || n.nodeType === 11);
}
function Mt(...n) {
  const e = Object(n[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < n.length; i += 1) {
    const r = n[i];
    if (r != null && !fh(r)) {
      const s = Object.keys(Object(r)).filter((o) => t.indexOf(o) < 0);
      for (let o = 0, a = s.length; o < a; o += 1) {
        const l = s[o],
          u = Object.getOwnPropertyDescriptor(r, l);
        u !== void 0 &&
          u.enumerable &&
          (cs(e[l]) && cs(r[l])
            ? r[l].__swiper__
              ? (e[l] = r[l])
              : Mt(e[l], r[l])
            : !cs(e[l]) && cs(r[l])
            ? ((e[l] = {}), r[l].__swiper__ ? (e[l] = r[l]) : Mt(e[l], r[l]))
            : (e[l] = r[l]));
      }
    }
  }
  return e;
}
function fs(n, e, t) {
  n.style.setProperty(e, t);
}
function Xu({ swiper: n, targetPosition: e, side: t }) {
  const i = Ye(),
    r = -n.translate;
  let s = null,
    o;
  const a = n.params.speed;
  (n.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(n.cssModeFrameID);
  const l = e > r ? "next" : "prev",
    u = (f, d) => (l === "next" && f >= d) || (l === "prev" && f <= d),
    c = () => {
      (o = new Date().getTime()), s === null && (s = o);
      const f = Math.max(Math.min((o - s) / a, 1), 0),
        d = 0.5 - Math.cos(f * Math.PI) / 2;
      let h = r + d * (e - r);
      if ((u(h, e) && (h = e), n.wrapperEl.scrollTo({ [t]: h }), u(h, e))) {
        (n.wrapperEl.style.overflow = "hidden"),
          (n.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (n.wrapperEl.style.overflow = ""), n.wrapperEl.scrollTo({ [t]: h });
          }),
          i.cancelAnimationFrame(n.cssModeFrameID);
        return;
      }
      n.cssModeFrameID = i.requestAnimationFrame(c);
    };
  c();
}
let bo;
function dh() {
  const n = Ye(),
    e = Ft();
  return {
    smoothScroll:
      e.documentElement && "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in n ||
      (n.DocumentTouch && e instanceof n.DocumentTouch)
    ),
    passiveListener: (function () {
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
    })(),
    gestures: (function () {
      return "ongesturestart" in n;
    })(),
  };
}
function ju() {
  return bo || (bo = dh()), bo;
}
let So;
function hh({ userAgent: n } = {}) {
  const e = ju(),
    t = Ye(),
    i = t.navigator.platform,
    r = n || t.navigator.userAgent,
    s = { ios: !1, android: !1 },
    o = t.screen.width,
    a = t.screen.height,
    l = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = r.match(/(iPad).*OS\s([\d_]+)/);
  const c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    f = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    d = i === "Win32";
  let h = i === "MacIntel";
  const p = [
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
    !u &&
      h &&
      e.touch &&
      p.indexOf(`${o}x${a}`) >= 0 &&
      ((u = r.match(/(Version)\/([\d.]+)/)),
      u || (u = [0, 1, "13_0_0"]),
      (h = !1)),
    l && !d && ((s.os = "android"), (s.android = !0)),
    (u || f || c) && ((s.os = "ios"), (s.ios = !0)),
    s
  );
}
function ph(n = {}) {
  return So || (So = hh(n)), So;
}
let xo;
function gh() {
  const n = Ye();
  function e() {
    const t = n.navigator.userAgent.toLowerCase();
    return (
      t.indexOf("safari") >= 0 &&
      t.indexOf("chrome") < 0 &&
      t.indexOf("android") < 0
    );
  }
  return {
    isSafari: e(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      n.navigator.userAgent
    ),
  };
}
function mh() {
  return xo || (xo = gh()), xo;
}
function vh({ swiper: n, on: e, emit: t }) {
  const i = Ye();
  let r = null,
    s = null;
  const o = () => {
      !n || n.destroyed || !n.initialized || (t("beforeResize"), t("resize"));
    },
    a = () => {
      !n ||
        n.destroyed ||
        !n.initialized ||
        ((r = new ResizeObserver((c) => {
          s = i.requestAnimationFrame(() => {
            const { width: f, height: d } = n;
            let h = f,
              p = d;
            c.forEach(({ contentBoxSize: g, contentRect: v, target: w }) => {
              (w && w !== n.el) ||
                ((h = v ? v.width : (g[0] || g).inlineSize),
                (p = v ? v.height : (g[0] || g).blockSize));
            }),
              (h !== f || p !== d) && o();
          });
        })),
        r.observe(n.el));
    },
    l = () => {
      s && i.cancelAnimationFrame(s),
        r && r.unobserve && n.el && (r.unobserve(n.el), (r = null));
    },
    u = () => {
      !n || n.destroyed || !n.initialized || t("orientationchange");
    };
  e("init", () => {
    if (n.params.resizeObserver && typeof i.ResizeObserver < "u") {
      a();
      return;
    }
    i.addEventListener("resize", o), i.addEventListener("orientationchange", u);
  }),
    e("destroy", () => {
      l(),
        i.removeEventListener("resize", o),
        i.removeEventListener("orientationchange", u);
    });
}
function _h({ swiper: n, extendParams: e, on: t, emit: i }) {
  const r = [],
    s = Ye(),
    o = (u, c = {}) => {
      const f = s.MutationObserver || s.WebkitMutationObserver,
        d = new f((h) => {
          if (h.length === 1) {
            i("observerUpdate", h[0]);
            return;
          }
          const p = function () {
            i("observerUpdate", h[0]);
          };
          s.requestAnimationFrame
            ? s.requestAnimationFrame(p)
            : s.setTimeout(p, 0);
        });
      d.observe(u, {
        attributes: typeof c.attributes > "u" ? !0 : c.attributes,
        childList: typeof c.childList > "u" ? !0 : c.childList,
        characterData: typeof c.characterData > "u" ? !0 : c.characterData,
      }),
        r.push(d);
    },
    a = () => {
      if (n.params.observer) {
        if (n.params.observeParents) {
          const u = n.$el.parents();
          for (let c = 0; c < u.length; c += 1) o(u[c]);
        }
        o(n.$el[0], { childList: n.params.observeSlideChildren }),
          o(n.$wrapperEl[0], { attributes: !1 });
      }
    },
    l = () => {
      r.forEach((u) => {
        u.disconnect();
      }),
        r.splice(0, r.length);
    };
  e({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    t("init", a),
    t("destroy", l);
}
const yh = {
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
    return (r.__emitterProxy = e), i.on(n, r, t);
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
          e.eventsAnyListeners.forEach((a) => {
            a.apply(r, [o, ...i]);
          }),
          e.eventsListeners &&
            e.eventsListeners[o] &&
            e.eventsListeners[o].forEach((a) => {
              a.apply(r, i);
            });
      }),
      e
    );
  },
};
function wh() {
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
function bh() {
  const n = this;
  function e(C) {
    return n.isHorizontal()
      ? C
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[C];
  }
  function t(C, I) {
    return parseFloat(C.getPropertyValue(e(I)) || 0);
  }
  const i = n.params,
    { $wrapperEl: r, size: s, rtlTranslate: o, wrongRTL: a } = n,
    l = n.virtual && i.virtual.enabled,
    u = l ? n.virtual.slides.length : n.slides.length,
    c = r.children(`.${n.params.slideClass}`),
    f = l ? n.virtual.slides.length : c.length;
  let d = [];
  const h = [],
    p = [];
  let g = i.slidesOffsetBefore;
  typeof g == "function" && (g = i.slidesOffsetBefore.call(n));
  let v = i.slidesOffsetAfter;
  typeof v == "function" && (v = i.slidesOffsetAfter.call(n));
  const w = n.snapGrid.length,
    y = n.slidesGrid.length;
  let _ = i.spaceBetween,
    m = -g,
    b = 0,
    E = 0;
  if (typeof s > "u") return;
  typeof _ == "string" &&
    _.indexOf("%") >= 0 &&
    (_ = (parseFloat(_.replace("%", "")) / 100) * s),
    (n.virtualSize = -_),
    o
      ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
      : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
    i.centeredSlides &&
      i.cssMode &&
      (fs(n.wrapperEl, "--swiper-centered-offset-before", ""),
      fs(n.wrapperEl, "--swiper-centered-offset-after", ""));
  const k = i.grid && i.grid.rows > 1 && n.grid;
  k && n.grid.initSlides(f);
  let x;
  const M =
    i.slidesPerView === "auto" &&
    i.breakpoints &&
    Object.keys(i.breakpoints).filter(
      (C) => typeof i.breakpoints[C].slidesPerView < "u"
    ).length > 0;
  for (let C = 0; C < f; C += 1) {
    x = 0;
    const I = c.eq(C);
    if ((k && n.grid.updateSlide(C, I, f, e), I.css("display") !== "none")) {
      if (i.slidesPerView === "auto") {
        M && (c[C].style[e("width")] = "");
        const S = getComputedStyle(I[0]),
          P = I[0].style.transform,
          A = I[0].style.webkitTransform;
        if (
          (P && (I[0].style.transform = "none"),
          A && (I[0].style.webkitTransform = "none"),
          i.roundLengths)
        )
          x = n.isHorizontal() ? I.outerWidth(!0) : I.outerHeight(!0);
        else {
          const L = t(S, "width"),
            z = t(S, "padding-left"),
            R = t(S, "padding-right"),
            F = t(S, "margin-left"),
            V = t(S, "margin-right"),
            T = S.getPropertyValue("box-sizing");
          if (T && T === "border-box") x = L + F + V;
          else {
            const { clientWidth: X, offsetWidth: U } = I[0];
            x = L + z + R + F + V + (U - X);
          }
        }
        P && (I[0].style.transform = P),
          A && (I[0].style.webkitTransform = A),
          i.roundLengths && (x = Math.floor(x));
      } else
        (x = (s - (i.slidesPerView - 1) * _) / i.slidesPerView),
          i.roundLengths && (x = Math.floor(x)),
          c[C] && (c[C].style[e("width")] = `${x}px`);
      c[C] && (c[C].swiperSlideSize = x),
        p.push(x),
        i.centeredSlides
          ? ((m = m + x / 2 + b / 2 + _),
            b === 0 && C !== 0 && (m = m - s / 2 - _),
            C === 0 && (m = m - s / 2 - _),
            Math.abs(m) < 1 / 1e3 && (m = 0),
            i.roundLengths && (m = Math.floor(m)),
            E % i.slidesPerGroup === 0 && d.push(m),
            h.push(m))
          : (i.roundLengths && (m = Math.floor(m)),
            (E - Math.min(n.params.slidesPerGroupSkip, E)) %
              n.params.slidesPerGroup ===
              0 && d.push(m),
            h.push(m),
            (m = m + x + _)),
        (n.virtualSize += x + _),
        (b = x),
        (E += 1);
    }
  }
  if (
    ((n.virtualSize = Math.max(n.virtualSize, s) + v),
    o &&
      a &&
      (i.effect === "slide" || i.effect === "coverflow") &&
      r.css({ width: `${n.virtualSize + i.spaceBetween}px` }),
    i.setWrapperSize &&
      r.css({ [e("width")]: `${n.virtualSize + i.spaceBetween}px` }),
    k && n.grid.updateWrapperSize(x, d, e),
    !i.centeredSlides)
  ) {
    const C = [];
    for (let I = 0; I < d.length; I += 1) {
      let S = d[I];
      i.roundLengths && (S = Math.floor(S)),
        d[I] <= n.virtualSize - s && C.push(S);
    }
    (d = C),
      Math.floor(n.virtualSize - s) - Math.floor(d[d.length - 1]) > 1 &&
        d.push(n.virtualSize - s);
  }
  if ((d.length === 0 && (d = [0]), i.spaceBetween !== 0)) {
    const C = n.isHorizontal() && o ? "marginLeft" : e("marginRight");
    c.filter((I, S) => (i.cssMode ? S !== c.length - 1 : !0)).css({
      [C]: `${_}px`,
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let C = 0;
    p.forEach((S) => {
      C += S + (i.spaceBetween ? i.spaceBetween : 0);
    }),
      (C -= i.spaceBetween);
    const I = C - s;
    d = d.map((S) => (S < 0 ? -g : S > I ? I + v : S));
  }
  if (i.centerInsufficientSlides) {
    let C = 0;
    if (
      (p.forEach((I) => {
        C += I + (i.spaceBetween ? i.spaceBetween : 0);
      }),
      (C -= i.spaceBetween),
      C < s)
    ) {
      const I = (s - C) / 2;
      d.forEach((S, P) => {
        d[P] = S - I;
      }),
        h.forEach((S, P) => {
          h[P] = S + I;
        });
    }
  }
  if (
    (Object.assign(n, {
      slides: c,
      snapGrid: d,
      slidesGrid: h,
      slidesSizesGrid: p,
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
  ) {
    fs(n.wrapperEl, "--swiper-centered-offset-before", `${-d[0]}px`),
      fs(
        n.wrapperEl,
        "--swiper-centered-offset-after",
        `${n.size / 2 - p[p.length - 1] / 2}px`
      );
    const C = -n.snapGrid[0],
      I = -n.slidesGrid[0];
    (n.snapGrid = n.snapGrid.map((S) => S + C)),
      (n.slidesGrid = n.slidesGrid.map((S) => S + I));
  }
  if (
    (f !== u && n.emit("slidesLengthChange"),
    d.length !== w &&
      (n.params.watchOverflow && n.checkOverflow(),
      n.emit("snapGridLengthChange")),
    h.length !== y && n.emit("slidesGridLengthChange"),
    i.watchSlidesProgress && n.updateSlidesOffset(),
    !l && !i.cssMode && (i.effect === "slide" || i.effect === "fade"))
  ) {
    const C = `${i.containerModifierClass}backface-hidden`,
      I = n.$el.hasClass(C);
    f <= i.maxBackfaceHiddenSlides
      ? I || n.$el.addClass(C)
      : I && n.$el.removeClass(C);
  }
}
function Sh(n) {
  const e = this,
    t = [],
    i = e.virtual && e.params.virtual.enabled;
  let r = 0,
    s;
  typeof n == "number"
    ? e.setTransition(n)
    : n === !0 && e.setTransition(e.params.speed);
  const o = (a) =>
    i
      ? e.slides.filter(
          (l) => parseInt(l.getAttribute("data-swiper-slide-index"), 10) === a
        )[0]
      : e.slides.eq(a)[0];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || $([])).each((a) => {
        t.push(a);
      });
    else
      for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
        const a = e.activeIndex + s;
        if (a > e.slides.length && !i) break;
        t.push(o(a));
      }
  else t.push(o(e.activeIndex));
  for (s = 0; s < t.length; s += 1)
    if (typeof t[s] < "u") {
      const a = t[s].offsetHeight;
      r = a > r ? a : r;
    }
  (r || r === 0) && e.$wrapperEl.css("height", `${r}px`);
}
function xh() {
  const n = this,
    e = n.slides;
  for (let t = 0; t < e.length; t += 1)
    e[t].swiperSlideOffset = n.isHorizontal()
      ? e[t].offsetLeft
      : e[t].offsetTop;
}
function Th(n = (this && this.translate) || 0) {
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
  for (let a = 0; a < i.length; a += 1) {
    const l = i[a];
    let u = l.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (u -= i[0].swiperSlideOffset);
    const c =
        (o + (t.centeredSlides ? e.minTranslate() : 0) - u) /
        (l.swiperSlideSize + t.spaceBetween),
      f =
        (o - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - u) /
        (l.swiperSlideSize + t.spaceBetween),
      d = -(o - u),
      h = d + e.slidesSizesGrid[a];
    ((d >= 0 && d < e.size - 1) ||
      (h > 1 && h <= e.size) ||
      (d <= 0 && h >= e.size)) &&
      (e.visibleSlides.push(l),
      e.visibleSlidesIndexes.push(a),
      i.eq(a).addClass(t.slideVisibleClass)),
      (l.progress = r ? -c : c),
      (l.originalProgress = r ? -f : f);
  }
  e.visibleSlides = $(e.visibleSlides);
}
function Eh(n) {
  const e = this;
  if (typeof n > "u") {
    const u = e.rtlTranslate ? -1 : 1;
    n = (e && e.translate && e.translate * u) || 0;
  }
  const t = e.params,
    i = e.maxTranslate() - e.minTranslate();
  let { progress: r, isBeginning: s, isEnd: o } = e;
  const a = s,
    l = o;
  i === 0
    ? ((r = 0), (s = !0), (o = !0))
    : ((r = (n - e.minTranslate()) / i), (s = r <= 0), (o = r >= 1)),
    Object.assign(e, { progress: r, isBeginning: s, isEnd: o }),
    (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
      e.updateSlidesProgress(n),
    s && !a && e.emit("reachBeginning toEdge"),
    o && !l && e.emit("reachEnd toEdge"),
    ((a && !s) || (l && !o)) && e.emit("fromEdge"),
    e.emit("progress", r);
}
function kh() {
  const n = this,
    { slides: e, params: t, $wrapperEl: i, activeIndex: r, realIndex: s } = n,
    o = n.virtual && t.virtual.enabled;
  e.removeClass(
    `${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`
  );
  let a;
  o
    ? (a = n.$wrapperEl.find(
        `.${t.slideClass}[data-swiper-slide-index="${r}"]`
      ))
    : (a = e.eq(r)),
    a.addClass(t.slideActiveClass),
    t.loop &&
      (a.hasClass(t.slideDuplicateClass)
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
  let l = a.nextAll(`.${t.slideClass}`).eq(0).addClass(t.slideNextClass);
  t.loop && l.length === 0 && ((l = e.eq(0)), l.addClass(t.slideNextClass));
  let u = a.prevAll(`.${t.slideClass}`).eq(0).addClass(t.slidePrevClass);
  t.loop && u.length === 0 && ((u = e.eq(-1)), u.addClass(t.slidePrevClass)),
    t.loop &&
      (l.hasClass(t.slideDuplicateClass)
        ? i
            .children(
              `.${t.slideClass}:not(.${
                t.slideDuplicateClass
              })[data-swiper-slide-index="${l.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(t.slideDuplicateNextClass)
        : i
            .children(
              `.${t.slideClass}.${
                t.slideDuplicateClass
              }[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`
            )
            .addClass(t.slideDuplicateNextClass),
      u.hasClass(t.slideDuplicateClass)
        ? i
            .children(
              `.${t.slideClass}:not(.${
                t.slideDuplicateClass
              })[data-swiper-slide-index="${u.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(t.slideDuplicatePrevClass)
        : i
            .children(
              `.${t.slideClass}.${
                t.slideDuplicateClass
              }[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`
            )
            .addClass(t.slideDuplicatePrevClass)),
    n.emitSlidesClasses();
}
function Ch(n) {
  const e = this,
    t = e.rtlTranslate ? e.translate : -e.translate,
    {
      slidesGrid: i,
      snapGrid: r,
      params: s,
      activeIndex: o,
      realIndex: a,
      snapIndex: l,
    } = e;
  let u = n,
    c;
  if (typeof u > "u") {
    for (let d = 0; d < i.length; d += 1)
      typeof i[d + 1] < "u"
        ? t >= i[d] && t < i[d + 1] - (i[d + 1] - i[d]) / 2
          ? (u = d)
          : t >= i[d] && t < i[d + 1] && (u = d + 1)
        : t >= i[d] && (u = d);
    s.normalizeSlideIndex && (u < 0 || typeof u > "u") && (u = 0);
  }
  if (r.indexOf(t) >= 0) c = r.indexOf(t);
  else {
    const d = Math.min(s.slidesPerGroupSkip, u);
    c = d + Math.floor((u - d) / s.slidesPerGroup);
  }
  if ((c >= r.length && (c = r.length - 1), u === o)) {
    c !== l && ((e.snapIndex = c), e.emit("snapIndexChange"));
    return;
  }
  const f = parseInt(e.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
  Object.assign(e, {
    snapIndex: c,
    realIndex: f,
    previousIndex: o,
    activeIndex: u,
  }),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    a !== f && e.emit("realIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange");
}
function Ph(n) {
  const e = this,
    t = e.params,
    i = $(n).closest(`.${t.slideClass}`)[0];
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
        ? (e.clickedIndex = parseInt($(i).attr("data-swiper-slide-index"), 10))
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
const Mh = {
  updateSize: wh,
  updateSlides: bh,
  updateAutoHeight: Sh,
  updateSlidesOffset: xh,
  updateSlidesProgress: Th,
  updateProgress: Eh,
  updateSlidesClasses: kh,
  updateActiveIndex: Ch,
  updateClickedSlide: Ph,
};
function Ah(n = this.isHorizontal() ? "x" : "y") {
  const e = this,
    { params: t, rtlTranslate: i, translate: r, $wrapperEl: s } = e;
  if (t.virtualTranslate) return i ? -r : r;
  if (t.cssMode) return r;
  let o = ch(s[0], n);
  return i && (o = -o), o || 0;
}
function Oh(n, e) {
  const t = this,
    {
      rtlTranslate: i,
      params: r,
      $wrapperEl: s,
      wrapperEl: o,
      progress: a,
    } = t;
  let l = 0,
    u = 0;
  const c = 0;
  t.isHorizontal() ? (l = i ? -n : n) : (u = n),
    r.roundLengths && ((l = Math.floor(l)), (u = Math.floor(u))),
    r.cssMode
      ? (o[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
          ? -l
          : -u)
      : r.virtualTranslate ||
        s.transform(`translate3d(${l}px, ${u}px, ${c}px)`),
    (t.previousTranslate = t.translate),
    (t.translate = t.isHorizontal() ? l : u);
  let f;
  const d = t.maxTranslate() - t.minTranslate();
  d === 0 ? (f = 0) : (f = (n - t.minTranslate()) / d),
    f !== a && t.updateProgress(n),
    t.emit("setTranslate", t.translate, e);
}
function Lh() {
  return -this.snapGrid[0];
}
function Dh() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Ih(n = 0, e = this.params.speed, t = !0, i = !0, r) {
  const s = this,
    { params: o, wrapperEl: a } = s;
  if (s.animating && o.preventInteractionOnTransition) return !1;
  const l = s.minTranslate(),
    u = s.maxTranslate();
  let c;
  if (
    (i && n > l ? (c = l) : i && n < u ? (c = u) : (c = n),
    s.updateProgress(c),
    o.cssMode)
  ) {
    const f = s.isHorizontal();
    if (e === 0) a[f ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!s.support.smoothScroll)
        return (
          Xu({ swiper: s, targetPosition: -c, side: f ? "left" : "top" }), !0
        );
      a.scrollTo({ [f ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (s.setTransition(0),
        s.setTranslate(c),
        t && (s.emit("beforeTransitionStart", e, r), s.emit("transitionEnd")))
      : (s.setTransition(e),
        s.setTranslate(c),
        t && (s.emit("beforeTransitionStart", e, r), s.emit("transitionStart")),
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
                  t && s.emit("transitionEnd")));
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
const zh = {
  getTranslate: Ah,
  setTranslate: Oh,
  minTranslate: Lh,
  maxTranslate: Dh,
  translateTo: Ih,
};
function Rh(n, e) {
  const t = this;
  t.params.cssMode || t.$wrapperEl.transition(n), t.emit("setTransition", n, e);
}
function Uu({ swiper: n, runCallbacks: e, direction: t, step: i }) {
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
function Nh(n = !0, e) {
  const t = this,
    { params: i } = t;
  i.cssMode ||
    (i.autoHeight && t.updateAutoHeight(),
    Uu({ swiper: t, runCallbacks: n, direction: e, step: "Start" }));
}
function Fh(n = !0, e) {
  const t = this,
    { params: i } = t;
  (t.animating = !1),
    !i.cssMode &&
      (t.setTransition(0),
      Uu({ swiper: t, runCallbacks: n, direction: e, step: "End" }));
}
const Bh = { setTransition: Rh, transitionStart: Nh, transitionEnd: Fh };
function Vh(n = 0, e = this.params.speed, t = !0, i, r) {
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
    params: a,
    snapGrid: l,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: f,
    rtlTranslate: d,
    wrapperEl: h,
    enabled: p,
  } = s;
  if ((s.animating && a.preventInteractionOnTransition) || (!p && !i && !r))
    return !1;
  const g = Math.min(s.params.slidesPerGroupSkip, o);
  let v = g + Math.floor((o - g) / s.params.slidesPerGroup);
  v >= l.length && (v = l.length - 1);
  const w = -l[v];
  if (a.normalizeSlideIndex)
    for (let _ = 0; _ < u.length; _ += 1) {
      const m = -Math.floor(w * 100),
        b = Math.floor(u[_] * 100),
        E = Math.floor(u[_ + 1] * 100);
      typeof u[_ + 1] < "u"
        ? m >= b && m < E - (E - b) / 2
          ? (o = _)
          : m >= b && m < E && (o = _ + 1)
        : m >= b && (o = _);
    }
  if (
    s.initialized &&
    o !== f &&
    ((!s.allowSlideNext && w < s.translate && w < s.minTranslate()) ||
      (!s.allowSlidePrev &&
        w > s.translate &&
        w > s.maxTranslate() &&
        (f || 0) !== o))
  )
    return !1;
  o !== (c || 0) && t && s.emit("beforeSlideChangeStart"), s.updateProgress(w);
  let y;
  if (
    (o > f ? (y = "next") : o < f ? (y = "prev") : (y = "reset"),
    (d && -w === s.translate) || (!d && w === s.translate))
  )
    return (
      s.updateActiveIndex(o),
      a.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      a.effect !== "slide" && s.setTranslate(w),
      y !== "reset" && (s.transitionStart(t, y), s.transitionEnd(t, y)),
      !1
    );
  if (a.cssMode) {
    const _ = s.isHorizontal(),
      m = d ? w : -w;
    if (e === 0) {
      const b = s.virtual && s.params.virtual.enabled;
      b &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        (h[_ ? "scrollLeft" : "scrollTop"] = m),
        b &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""),
              (s._swiperImmediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll)
        return (
          Xu({ swiper: s, targetPosition: m, side: _ ? "left" : "top" }), !0
        );
      h.scrollTo({ [_ ? "left" : "top"]: m, behavior: "smooth" });
    }
    return !0;
  }
  return (
    s.setTransition(e),
    s.setTranslate(w),
    s.updateActiveIndex(o),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", e, i),
    s.transitionStart(t, y),
    e === 0
      ? s.transitionEnd(t, y)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (m) {
            !s ||
              s.destroyed ||
              (m.target === this &&
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
function qh(n = 0, e = this.params.speed, t = !0, i) {
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
function $h(n = this.params.speed, e = !0, t) {
  const i = this,
    { animating: r, enabled: s, params: o } = i;
  if (!s) return i;
  let a = o.slidesPerGroup;
  o.slidesPerView === "auto" &&
    o.slidesPerGroup === 1 &&
    o.slidesPerGroupAuto &&
    (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
  if (o.loop) {
    if (r && o.loopPreventsSlide) return !1;
    i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
  }
  return o.rewind && i.isEnd
    ? i.slideTo(0, n, e, t)
    : i.slideTo(i.activeIndex + l, n, e, t);
}
function Wh(n = this.params.speed, e = !0, t) {
  const i = this,
    {
      params: r,
      animating: s,
      snapGrid: o,
      slidesGrid: a,
      rtlTranslate: l,
      enabled: u,
    } = i;
  if (!u) return i;
  if (r.loop) {
    if (s && r.loopPreventsSlide) return !1;
    i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
  }
  const c = l ? i.translate : -i.translate;
  function f(v) {
    return v < 0 ? -Math.floor(Math.abs(v)) : Math.floor(v);
  }
  const d = f(c),
    h = o.map((v) => f(v));
  let p = o[h.indexOf(d) - 1];
  if (typeof p > "u" && r.cssMode) {
    let v;
    o.forEach((w, y) => {
      d >= w && (v = y);
    }),
      typeof v < "u" && (p = o[v > 0 ? v - 1 : v]);
  }
  let g = 0;
  if (
    (typeof p < "u" &&
      ((g = a.indexOf(p)),
      g < 0 && (g = i.activeIndex - 1),
      r.slidesPerView === "auto" &&
        r.slidesPerGroup === 1 &&
        r.slidesPerGroupAuto &&
        ((g = g - i.slidesPerViewDynamic("previous", !0) + 1),
        (g = Math.max(g, 0)))),
    r.rewind && i.isBeginning)
  ) {
    const v =
      i.params.virtual && i.params.virtual.enabled && i.virtual
        ? i.virtual.slides.length - 1
        : i.slides.length - 1;
    return i.slideTo(v, n, e, t);
  }
  return i.slideTo(g, n, e, t);
}
function Hh(n = this.params.speed, e = !0, t) {
  const i = this;
  return i.slideTo(i.activeIndex, n, e, t);
}
function Gh(n = this.params.speed, e = !0, t, i = 0.5) {
  const r = this;
  let s = r.activeIndex;
  const o = Math.min(r.params.slidesPerGroupSkip, s),
    a = o + Math.floor((s - o) / r.params.slidesPerGroup),
    l = r.rtlTranslate ? r.translate : -r.translate;
  if (l >= r.snapGrid[a]) {
    const u = r.snapGrid[a],
      c = r.snapGrid[a + 1];
    l - u > (c - u) * i && (s += r.params.slidesPerGroup);
  } else {
    const u = r.snapGrid[a - 1],
      c = r.snapGrid[a];
    l - u <= (c - u) * i && (s -= r.params.slidesPerGroup);
  }
  return (
    (s = Math.max(s, 0)),
    (s = Math.min(s, r.slidesGrid.length - 1)),
    r.slideTo(s, n, e, t)
  );
}
function Yh() {
  const n = this,
    { params: e, $wrapperEl: t } = n,
    i = e.slidesPerView === "auto" ? n.slidesPerViewDynamic() : e.slidesPerView;
  let r = n.clickedIndex,
    s;
  if (e.loop) {
    if (n.animating) return;
    (s = parseInt($(n.clickedSlide).attr("data-swiper-slide-index"), 10)),
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
            Jo(() => {
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
          Jo(() => {
            n.slideTo(r);
          }))
        : n.slideTo(r);
  } else n.slideTo(r);
}
const Xh = {
  slideTo: Vh,
  slideToLoop: qh,
  slideNext: $h,
  slidePrev: Wh,
  slideReset: Hh,
  slideToClosest: Gh,
  slideToClickedSlide: Yh,
};
function jh() {
  const n = this,
    e = Ft(),
    { params: t, $wrapperEl: i } = n,
    r = i.children().length > 0 ? $(i.children()[0].parentNode) : i;
  r.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
  let s = r.children(`.${t.slideClass}`);
  if (t.loopFillGroupWithBlank) {
    const l = t.slidesPerGroup - (s.length % t.slidesPerGroup);
    if (l !== t.slidesPerGroup) {
      for (let u = 0; u < l; u += 1) {
        const c = $(e.createElement("div")).addClass(
          `${t.slideClass} ${t.slideBlankClass}`
        );
        r.append(c);
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
    a = [];
  s.each((l, u) => {
    $(l).attr("data-swiper-slide-index", u);
  });
  for (let l = 0; l < n.loopedSlides; l += 1) {
    const u = l - Math.floor(l / s.length) * s.length;
    a.push(s.eq(u)[0]), o.unshift(s.eq(s.length - u - 1)[0]);
  }
  for (let l = 0; l < a.length; l += 1)
    r.append($(a[l].cloneNode(!0)).addClass(t.slideDuplicateClass));
  for (let l = o.length - 1; l >= 0; l -= 1)
    r.prepend($(o[l].cloneNode(!0)).addClass(t.slideDuplicateClass));
}
function Uh() {
  const n = this;
  n.emit("beforeLoopFix");
  const {
    activeIndex: e,
    slides: t,
    loopedSlides: i,
    allowSlidePrev: r,
    allowSlideNext: s,
    snapGrid: o,
    rtlTranslate: a,
  } = n;
  let l;
  (n.allowSlidePrev = !0), (n.allowSlideNext = !0);
  const c = -o[e] - n.getTranslate();
  e < i
    ? ((l = t.length - i * 3 + e),
      (l += i),
      n.slideTo(l, 0, !1, !0) &&
        c !== 0 &&
        n.setTranslate((a ? -n.translate : n.translate) - c))
    : e >= t.length - i &&
      ((l = -t.length + e + i),
      (l += i),
      n.slideTo(l, 0, !1, !0) &&
        c !== 0 &&
        n.setTranslate((a ? -n.translate : n.translate) - c)),
    (n.allowSlidePrev = r),
    (n.allowSlideNext = s),
    n.emit("loopFix");
}
function Kh() {
  const n = this,
    { $wrapperEl: e, params: t, slides: i } = n;
  e
    .children(
      `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
    )
    .remove(),
    i.removeAttr("data-swiper-slide-index");
}
const Zh = { loopCreate: jh, loopFix: Uh, loopDestroy: Kh };
function Qh(n) {
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
function Jh() {
  const n = this;
  n.support.touch ||
    (n.params.watchOverflow && n.isLocked) ||
    n.params.cssMode ||
    (n[
      n.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = "");
}
const ep = { setGrabCursor: Qh, unsetGrabCursor: Jh };
function tp(n, e = this) {
  function t(i) {
    if (!i || i === Ft() || i === Ye()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const r = i.closest(n);
    return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
  }
  return t(e);
}
function ip(n) {
  const e = this,
    t = Ft(),
    i = Ye(),
    r = e.touchEventsData,
    { params: s, touches: o, enabled: a } = e;
  if (!a || (e.animating && s.preventInteractionOnTransition)) return;
  !e.animating && s.cssMode && s.loop && e.loopFix();
  let l = n;
  l.originalEvent && (l = l.originalEvent);
  let u = $(l.target);
  if (
    (s.touchEventsTarget === "wrapper" && !u.closest(e.wrapperEl).length) ||
    ((r.isTouchEvent = l.type === "touchstart"),
    !r.isTouchEvent && "which" in l && l.which === 3) ||
    (!r.isTouchEvent && "button" in l && l.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return;
  const c = !!s.noSwipingClass && s.noSwipingClass !== "",
    f = n.composedPath ? n.composedPath() : n.path;
  c && l.target && l.target.shadowRoot && f && (u = $(f[0]));
  const d = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    h = !!(l.target && l.target.shadowRoot);
  if (s.noSwiping && (h ? tp(d, u[0]) : u.closest(d)[0])) {
    e.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !u.closest(s.swipeHandler)[0]) return;
  (o.currentX = l.type === "touchstart" ? l.targetTouches[0].pageX : l.pageX),
    (o.currentY = l.type === "touchstart" ? l.targetTouches[0].pageY : l.pageY);
  const p = o.currentX,
    g = o.currentY,
    v = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
    w = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
  if (v && (p <= w || p >= i.innerWidth - w))
    if (v === "prevent") n.preventDefault();
    else return;
  if (
    (Object.assign(r, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
    (o.startX = p),
    (o.startY = g),
    (r.touchStartTime = jn()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    s.threshold > 0 && (r.allowThresholdMove = !1),
    l.type !== "touchstart")
  ) {
    let y = !0;
    u.is(r.focusableElements) &&
      ((y = !1), u[0].nodeName === "SELECT" && (r.isTouched = !1)),
      t.activeElement &&
        $(t.activeElement).is(r.focusableElements) &&
        t.activeElement !== u[0] &&
        t.activeElement.blur();
    const _ = y && e.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || _) &&
      !u[0].isContentEditable &&
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
function rp(n) {
  const e = Ft(),
    t = this,
    i = t.touchEventsData,
    { params: r, touches: s, rtlTranslate: o, enabled: a } = t;
  if (!a) return;
  let l = n;
  if ((l.originalEvent && (l = l.originalEvent), !i.isTouched)) {
    i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l);
    return;
  }
  if (i.isTouchEvent && l.type !== "touchmove") return;
  const u =
      l.type === "touchmove" &&
      l.targetTouches &&
      (l.targetTouches[0] || l.changedTouches[0]),
    c = l.type === "touchmove" ? u.pageX : l.pageX,
    f = l.type === "touchmove" ? u.pageY : l.pageY;
  if (l.preventedByNestedSwiper) {
    (s.startX = c), (s.startY = f);
    return;
  }
  if (!t.allowTouchMove) {
    $(l.target).is(i.focusableElements) || (t.allowClick = !1),
      i.isTouched &&
        (Object.assign(s, { startX: c, startY: f, currentX: c, currentY: f }),
        (i.touchStartTime = jn()));
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
      (c < s.startX && t.translate <= t.maxTranslate()) ||
      (c > s.startX && t.translate >= t.minTranslate())
    )
      return;
  }
  if (
    i.isTouchEvent &&
    e.activeElement &&
    l.target === e.activeElement &&
    $(l.target).is(i.focusableElements)
  ) {
    (i.isMoved = !0), (t.allowClick = !1);
    return;
  }
  if (
    (i.allowTouchCallbacks && t.emit("touchMove", l),
    l.targetTouches && l.targetTouches.length > 1)
  )
    return;
  (s.currentX = c), (s.currentY = f);
  const d = s.currentX - s.startX,
    h = s.currentY - s.startY;
  if (t.params.threshold && Math.sqrt(d ** 2 + h ** 2) < t.params.threshold)
    return;
  if (typeof i.isScrolling > "u") {
    let w;
    (t.isHorizontal() && s.currentY === s.startY) ||
    (t.isVertical() && s.currentX === s.startX)
      ? (i.isScrolling = !1)
      : d * d + h * h >= 25 &&
        ((w = (Math.atan2(Math.abs(h), Math.abs(d)) * 180) / Math.PI),
        (i.isScrolling = t.isHorizontal()
          ? w > r.touchAngle
          : 90 - w > r.touchAngle));
  }
  if (
    (i.isScrolling && t.emit("touchMoveOpposite", l),
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
    !r.cssMode && l.cancelable && l.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && l.stopPropagation(),
    i.isMoved ||
      (r.loop && !r.cssMode && t.loopFix(),
      (i.startTranslate = t.getTranslate()),
      t.setTransition(0),
      t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
      (i.allowMomentumBounce = !1),
      r.grabCursor &&
        (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
        t.setGrabCursor(!0),
      t.emit("sliderFirstMove", l)),
    t.emit("sliderMove", l),
    (i.isMoved = !0);
  let p = t.isHorizontal() ? d : h;
  (s.diff = p),
    (p *= r.touchRatio),
    o && (p = -p),
    (t.swipeDirection = p > 0 ? "prev" : "next"),
    (i.currentTranslate = p + i.startTranslate);
  let g = !0,
    v = r.resistanceRatio;
  if (
    (r.touchReleaseOnEdges && (v = 0),
    p > 0 && i.currentTranslate > t.minTranslate()
      ? ((g = !1),
        r.resistance &&
          (i.currentTranslate =
            t.minTranslate() -
            1 +
            (-t.minTranslate() + i.startTranslate + p) ** v))
      : p < 0 &&
        i.currentTranslate < t.maxTranslate() &&
        ((g = !1),
        r.resistance &&
          (i.currentTranslate =
            t.maxTranslate() +
            1 -
            (t.maxTranslate() - i.startTranslate - p) ** v)),
    g && (l.preventedByNestedSwiper = !0),
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
    if (Math.abs(p) > r.threshold || i.allowThresholdMove) {
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
function np(n) {
  const e = this,
    t = e.touchEventsData,
    { params: i, touches: r, rtlTranslate: s, slidesGrid: o, enabled: a } = e;
  if (!a) return;
  let l = n;
  if (
    (l.originalEvent && (l = l.originalEvent),
    t.allowTouchCallbacks && e.emit("touchEnd", l),
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
  const u = jn(),
    c = u - t.touchStartTime;
  if (e.allowClick) {
    const y = l.path || (l.composedPath && l.composedPath());
    e.updateClickedSlide((y && y[0]) || l.target),
      e.emit("tap click", l),
      c < 300 &&
        u - t.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", l);
  }
  if (
    ((t.lastClickTime = jn()),
    Jo(() => {
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
  let d = 0,
    h = e.slidesSizesGrid[0];
  for (
    let y = 0;
    y < o.length;
    y += y < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const _ = y < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof o[y + _] < "u"
      ? f >= o[y] && f < o[y + _] && ((d = y), (h = o[y + _] - o[y]))
      : f >= o[y] && ((d = y), (h = o[o.length - 1] - o[o.length - 2]));
  }
  let p = null,
    g = null;
  i.rewind &&
    (e.isBeginning
      ? (g =
          e.params.virtual && e.params.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (p = 0));
  const v = (f - o[d]) / h,
    w = d < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (c > i.longSwipesMs) {
    if (!i.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (v >= i.longSwipesRatio
        ? e.slideTo(i.rewind && e.isEnd ? p : d + w)
        : e.slideTo(d)),
      e.swipeDirection === "prev" &&
        (v > 1 - i.longSwipesRatio
          ? e.slideTo(d + w)
          : g !== null && v < 0 && Math.abs(v) > i.longSwipesRatio
          ? e.slideTo(g)
          : e.slideTo(d));
  } else {
    if (!i.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (l.target === e.navigation.nextEl || l.target === e.navigation.prevEl)
      ? l.target === e.navigation.nextEl
        ? e.slideTo(d + w)
        : e.slideTo(d)
      : (e.swipeDirection === "next" && e.slideTo(p !== null ? p : d + w),
        e.swipeDirection === "prev" && e.slideTo(g !== null ? g : d));
  }
}
function Ml() {
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
function sp(n) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && n.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (n.stopPropagation(), n.stopImmediatePropagation())));
}
function op() {
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
let Al = !1;
function ap() {}
const Ku = (n, e) => {
  const t = Ft(),
    {
      params: i,
      touchEvents: r,
      el: s,
      wrapperEl: o,
      device: a,
      support: l,
    } = n,
    u = !!i.nested,
    c = e === "on" ? "addEventListener" : "removeEventListener",
    f = e;
  if (!l.touch)
    s[c](r.start, n.onTouchStart, !1),
      t[c](r.move, n.onTouchMove, u),
      t[c](r.end, n.onTouchEnd, !1);
  else {
    const d =
      r.start === "touchstart" && l.passiveListener && i.passiveListeners
        ? { passive: !0, capture: !1 }
        : !1;
    s[c](r.start, n.onTouchStart, d),
      s[c](
        r.move,
        n.onTouchMove,
        l.passiveListener ? { passive: !1, capture: u } : u
      ),
      s[c](r.end, n.onTouchEnd, d),
      r.cancel && s[c](r.cancel, n.onTouchEnd, d);
  }
  (i.preventClicks || i.preventClicksPropagation) &&
    s[c]("click", n.onClick, !0),
    i.cssMode && o[c]("scroll", n.onScroll),
    i.updateOnWindowResize
      ? n[f](
          a.ios || a.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Ml,
          !0
        )
      : n[f]("observerUpdate", Ml, !0);
};
function lp() {
  const n = this,
    e = Ft(),
    { params: t, support: i } = n;
  (n.onTouchStart = ip.bind(n)),
    (n.onTouchMove = rp.bind(n)),
    (n.onTouchEnd = np.bind(n)),
    t.cssMode && (n.onScroll = op.bind(n)),
    (n.onClick = sp.bind(n)),
    i.touch && !Al && (e.addEventListener("touchstart", ap), (Al = !0)),
    Ku(n, "on");
}
function up() {
  Ku(this, "off");
}
const cp = { attachEvents: lp, detachEvents: up },
  Ol = (n, e) => n.grid && e.grid && e.grid.rows > 1;
function fp() {
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
  const a = n.getBreakpoint(o, n.params.breakpointsBase, n.el);
  if (!a || n.currentBreakpoint === a) return;
  const u = (a in o ? o[a] : void 0) || n.originalParams,
    c = Ol(n, r),
    f = Ol(n, u),
    d = r.enabled;
  c && !f
    ? (s.removeClass(
        `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
      ),
      n.emitContainerClasses())
    : !c &&
      f &&
      (s.addClass(`${r.containerModifierClass}grid`),
      ((u.grid.fill && u.grid.fill === "column") ||
        (!u.grid.fill && r.grid.fill === "column")) &&
        s.addClass(`${r.containerModifierClass}grid-column`),
      n.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((v) => {
      const w = r[v] && r[v].enabled,
        y = u[v] && u[v].enabled;
      w && !y && n[v].disable(), !w && y && n[v].enable();
    });
  const h = u.direction && u.direction !== r.direction,
    p = r.loop && (u.slidesPerView !== r.slidesPerView || h);
  h && t && n.changeDirection(), Mt(n.params, u);
  const g = n.params.enabled;
  Object.assign(n, {
    allowTouchMove: n.params.allowTouchMove,
    allowSlideNext: n.params.allowSlideNext,
    allowSlidePrev: n.params.allowSlidePrev,
  }),
    d && !g ? n.disable() : !d && g && n.enable(),
    (n.currentBreakpoint = a),
    n.emit("_beforeBreakpoint", u),
    p &&
      t &&
      (n.loopDestroy(),
      n.loopCreate(),
      n.updateSlides(),
      n.slideTo(e - i + n.loopedSlides, 0, !1)),
    n.emit("breakpoint", u);
}
function dp(n, e = "window", t) {
  if (!n || (e === "container" && !t)) return;
  let i = !1;
  const r = Ye(),
    s = e === "window" ? r.innerHeight : t.clientHeight,
    o = Object.keys(n).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const l = parseFloat(a.substr(1));
        return { value: s * l, point: a };
      }
      return { value: a, point: a };
    });
  o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
  for (let a = 0; a < o.length; a += 1) {
    const { point: l, value: u } = o[a];
    e === "window"
      ? r.matchMedia(`(min-width: ${u}px)`).matches && (i = l)
      : u <= t.clientWidth && (i = l);
  }
  return i || "max";
}
const hp = { setBreakpoint: fp, getBreakpoint: dp };
function pp(n, e) {
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
function gp() {
  const n = this,
    { classNames: e, params: t, rtl: i, $el: r, device: s, support: o } = n,
    a = pp(
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
  e.push(...a), r.addClass([...e].join(" ")), n.emitContainerClasses();
}
function mp() {
  const n = this,
    { $el: e, classNames: t } = n;
  e.removeClass(t.join(" ")), n.emitContainerClasses();
}
const vp = { addClasses: gp, removeClasses: mp };
function _p(n, e, t, i, r, s) {
  const o = Ye();
  let a;
  function l() {
    s && s();
  }
  !$(n).parent("picture")[0] && (!n.complete || !r) && e
    ? ((a = new o.Image()),
      (a.onload = l),
      (a.onerror = l),
      i && (a.sizes = i),
      t && (a.srcset = t),
      e && (a.src = e))
    : l();
}
function yp() {
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
const wp = { loadImage: _p, preloadImages: yp };
function bp() {
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
const Sp = { checkOverflow: bp },
  Ll = {
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
function xp(n, e) {
  return function (i = {}) {
    const r = Object.keys(i)[0],
      s = i[r];
    if (typeof s != "object" || s === null) {
      Mt(e, i);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
        n[r] === !0 &&
        (n[r] = { auto: !0 }),
      !(r in n && "enabled" in s))
    ) {
      Mt(e, i);
      return;
    }
    n[r] === !0 && (n[r] = { enabled: !0 }),
      typeof n[r] == "object" && !("enabled" in n[r]) && (n[r].enabled = !0),
      n[r] || (n[r] = { enabled: !1 }),
      Mt(e, i);
  };
}
const To = {
    eventsEmitter: yh,
    update: Mh,
    translate: zh,
    transition: Bh,
    slide: Xh,
    loop: Zh,
    grabCursor: ep,
    events: cp,
    breakpoints: hp,
    checkOverflow: Sp,
    classes: vp,
    images: wp,
  },
  Eo = {};
class wt {
  constructor(...e) {
    let t, i;
    if (
      (e.length === 1 &&
      e[0].constructor &&
      Object.prototype.toString.call(e[0]).slice(8, -1) === "Object"
        ? (i = e[0])
        : ([t, i] = e),
      i || (i = {}),
      (i = Mt({}, i)),
      t && !i.el && (i.el = t),
      i.el && $(i.el).length > 1)
    ) {
      const a = [];
      return (
        $(i.el).each((l) => {
          const u = Mt({}, i, { el: l });
          a.push(new wt(u));
        }),
        a
      );
    }
    const r = this;
    (r.__swiper__ = !0),
      (r.support = ju()),
      (r.device = ph({ userAgent: i.userAgent })),
      (r.browser = mh()),
      (r.eventsListeners = {}),
      (r.eventsAnyListeners = []),
      (r.modules = [...r.__modules__]),
      i.modules && Array.isArray(i.modules) && r.modules.push(...i.modules);
    const s = {};
    r.modules.forEach((a) => {
      a({
        swiper: r,
        extendParams: xp(i, s),
        on: r.on.bind(r),
        once: r.once.bind(r),
        off: r.off.bind(r),
        emit: r.emit.bind(r),
      });
    });
    const o = Mt({}, Ll, s);
    return (
      (r.params = Mt({}, o, Eo, i)),
      (r.originalParams = Mt({}, r.params)),
      (r.passedParams = Mt({}, i)),
      r.params &&
        r.params.on &&
        Object.keys(r.params.on).forEach((a) => {
          r.on(a, r.params.on[a]);
        }),
      r.params && r.params.onAny && r.onAny(r.params.onAny),
      (r.$ = $),
      Object.assign(r, {
        enabled: r.params.enabled,
        el: t,
        classNames: [],
        slides: $(),
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
            u = ["pointerdown", "pointermove", "pointerup"];
          return (
            (r.touchEventsTouch = {
              start: l[0],
              move: l[1],
              end: l[2],
              cancel: l[3],
            }),
            (r.touchEventsDesktop = { start: u[0], move: u[1], end: u[2] }),
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
          lastClickTime: jn(),
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
        slidesSizesGrid: a,
        size: l,
        activeIndex: u,
      } = i;
    let c = 1;
    if (r.centeredSlides) {
      let f = s[u].swiperSlideSize,
        d;
      for (let h = u + 1; h < s.length; h += 1)
        s[h] &&
          !d &&
          ((f += s[h].swiperSlideSize), (c += 1), f > l && (d = !0));
      for (let h = u - 1; h >= 0; h -= 1)
        s[h] &&
          !d &&
          ((f += s[h].swiperSlideSize), (c += 1), f > l && (d = !0));
    } else if (e === "current")
      for (let f = u + 1; f < s.length; f += 1)
        (t ? o[f] + a[f] - o[u] < l : o[f] - o[u] < l) && (c += 1);
    else for (let f = u - 1; f >= 0; f -= 1) o[u] - o[f] < l && (c += 1);
    return c;
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
        a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
      e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
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
    const i = $(e || t.params.el);
    if (((e = i[0]), !e)) return !1;
    e.swiper = t;
    const r = () =>
      `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = (() => {
      if (e && e.shadowRoot && e.shadowRoot.querySelector) {
        const a = $(e.shadowRoot.querySelector(r()));
        return (a.children = (l) => i.children(l)), a;
      }
      return i.children ? i.children(r()) : $(i).children(r());
    })();
    if (o.length === 0 && t.params.createElements) {
      const l = Ft().createElement("div");
      (o = $(l)),
        (l.className = t.params.wrapperClass),
        i.append(l),
        i.children(`.${t.params.slideClass}`).each((u) => {
          o.append(u);
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
      { params: r, $el: s, $wrapperEl: o, slides: a } = i;
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
          a &&
            a.length &&
            a
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
        e !== !1 && ((i.$el[0].swiper = null), lh(i)),
        (i.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    Mt(Eo, e);
  }
  static get extendedDefaults() {
    return Eo;
  }
  static get defaults() {
    return Ll;
  }
  static installModule(e) {
    wt.prototype.__modules__ || (wt.prototype.__modules__ = []);
    const t = wt.prototype.__modules__;
    typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((t) => wt.installModule(t)), wt)
      : (wt.installModule(e), wt);
  }
}
Object.keys(To).forEach((n) => {
  Object.keys(To[n]).forEach((e) => {
    wt.prototype[e] = To[n][e];
  });
});
wt.use([vh, _h]);
let ko = null;
const Zu = () => {
  const n = document.querySelector(".swiper[work-slider='component']");
  if (!n) return;
  const e = () => window.innerWidth >= 768,
    t = () => {
      const r = e();
      ko = new wt(n, {
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
                (a) => !a.classList.contains("swiper-slide-duplicate")
              ).length,
              o = this.realIndex + 1;
            (document.querySelector("[data-slider-count]").textContent = s),
              (document.querySelector("[data-slider-current]").textContent = o);
          },
          slideChange: function () {
            const s = this.realIndex + 1;
            document.querySelector("[data-slider-current]").textContent = s;
          },
        },
      });
    };
  let i = e();
  t(),
    window.addEventListener("resize", () => {
      const r = e();
      r !== i && ((i = r), ko && ko.destroy(!0, !0), t());
    });
};
function wi(n) {
  if (n === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return n;
}
function Qu(n, e) {
  (n.prototype = Object.create(e.prototype)),
    (n.prototype.constructor = n),
    (n.__proto__ = e);
}
var zt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  nn = { duration: 0.5, overwrite: !1, delay: 0 },
  Ra,
  Qe,
  ye,
  hi = 1e8,
  at = 1 / hi,
  ea = Math.PI * 2,
  Tp = ea / 4,
  Ep = 0,
  Ju = Math.sqrt,
  kp = Math.cos,
  Cp = Math.sin,
  Ge = function (e) {
    return typeof e == "string";
  },
  Ee = function (e) {
    return typeof e == "function";
  },
  Mi = function (e) {
    return typeof e == "number";
  },
  Na = function (e) {
    return typeof e > "u";
  },
  gi = function (e) {
    return typeof e == "object";
  },
  bt = function (e) {
    return e !== !1;
  },
  Fa = function () {
    return typeof window < "u";
  },
  ds = function (e) {
    return Ee(e) || Ge(e);
  },
  ec =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  ut = Array.isArray,
  ta = /(?:-?\.?\d|\.)+/gi,
  tc = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Hr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Co = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  ic = /[+-]=-?[.\d]+/,
  rc = /[^,'"\[\]\s]+/gi,
  Pp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Se,
  ai,
  ia,
  Ba,
  Rt = {},
  Ys = {},
  nc,
  sc = function (e) {
    return (Ys = sn(e, Rt)) && Et;
  },
  Va = function (e, t) {},
  Un = function (e, t) {
    return !t && void 0;
  },
  oc = function (e, t) {
    return (e && (Rt[e] = t) && Ys && (Ys[e] = t)) || Rt;
  },
  Kn = function () {
    return 0;
  },
  Mp = { suppressEvents: !0, isStart: !0, kill: !1 },
  Os = { suppressEvents: !0, kill: !1 },
  Ap = { suppressEvents: !0 },
  qa = {},
  Hi = [],
  ra = {},
  ac,
  At = {},
  Po = {},
  Dl = 30,
  Ls = [],
  $a = "",
  Wa = function (e) {
    var t = e[0],
      i,
      r;
    if ((gi(t) || Ee(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
      for (r = Ls.length; r-- && !Ls[r].targetTest(t); );
      i = Ls[r];
    }
    for (r = e.length; r--; )
      (e[r] && (e[r]._gsap || (e[r]._gsap = new Oc(e[r], i)))) ||
        e.splice(r, 1);
    return e;
  },
  gr = function (e) {
    return e._gsap || Wa(Yt(e))[0]._gsap;
  },
  lc = function (e, t, i) {
    return (i = e[t]) && Ee(i)
      ? e[t]()
      : (Na(i) && e.getAttribute && e.getAttribute(t)) || i;
  },
  St = function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  },
  Me = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  ze = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  Kr = function (e, t) {
    var i = t.charAt(0),
      r = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
    );
  },
  Op = function (e, t) {
    for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
    return r < i;
  },
  Xs = function () {
    var e = Hi.length,
      t = Hi.slice(0),
      i,
      r;
    for (ra = {}, Hi.length = 0, i = 0; i < e; i++)
      (r = t[i]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  },
  Ha = function (e) {
    return !!(e._initted || e._startAt || e.add);
  },
  uc = function (e, t, i, r) {
    Hi.length && !Qe && Xs(),
      e.render(t, i, !!(Qe && t < 0 && Ha(e))),
      Hi.length && !Qe && Xs();
  },
  cc = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(rc).length < 2
      ? t
      : Ge(e)
      ? e.trim()
      : e;
  },
  fc = function (e) {
    return e;
  },
  Nt = function (e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  },
  Lp = function (e) {
    return function (t, i) {
      for (var r in i)
        r in t || (r === "duration" && e) || r === "ease" || (t[r] = i[r]);
    };
  },
  sn = function (e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  },
  Il = function n(e, t) {
    for (var i in t)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (e[i] = gi(t[i]) ? n(e[i] || (e[i] = {}), t[i]) : t[i]);
    return e;
  },
  js = function (e, t) {
    var i = {},
      r;
    for (r in e) r in t || (i[r] = e[r]);
    return i;
  },
  On = function (e) {
    var t = e.parent || Se,
      i = e.keyframes ? Lp(ut(e.keyframes)) : Nt;
    if (bt(e.inherit))
      for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  },
  Dp = function (e, t) {
    for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
    return i < 0;
  },
  dc = function (e, t, i, r, s) {
    var o = e[r],
      a;
    if (s) for (a = t[s]; o && o[s] > a; ) o = o._prev;
    return (
      o ? ((t._next = o._next), (o._next = t)) : ((t._next = e[i]), (e[i] = t)),
      t._next ? (t._next._prev = t) : (e[r] = t),
      (t._prev = o),
      (t.parent = t._dp = e),
      t
    );
  },
  fo = function (e, t, i, r) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var s = t._prev,
      o = t._next;
    s ? (s._next = o) : e[i] === t && (e[i] = o),
      o ? (o._prev = s) : e[r] === t && (e[r] = s),
      (t._next = t._prev = t.parent = null);
  },
  Xi = function (e, t) {
    e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  },
  mr = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
    return e;
  },
  Ip = function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  },
  na = function (e, t, i, r) {
    return (
      e._startAt &&
      (Qe
        ? e._startAt.revert(Os)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, r))
    );
  },
  zp = function n(e) {
    return !e || (e._ts && n(e.parent));
  },
  zl = function (e) {
    return e._repeat ? on(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  on = function (e, t) {
    var i = Math.floor((e = ze(e / t)));
    return e && i === e ? i - 1 : i;
  },
  Us = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  ho = function (e) {
    return (e._end = ze(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || at) || 0)
    ));
  },
  po = function (e, t) {
    var i = e._dp;
    return (
      i &&
        i.smoothChildTiming &&
        e._ts &&
        ((e._start = ze(
          i._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        ho(e),
        i._dirty || mr(i, e)),
      e
    );
  },
  hc = function (e, t) {
    var i;
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((i = Us(e.rawTime(), t)),
        (!t._dur || os(0, t.totalDuration(), i) - t._tTime > at) &&
          t.render(i, !0)),
      mr(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (i = e; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      e._zTime = -1e-8;
    }
  },
  ui = function (e, t, i, r) {
    return (
      t.parent && Xi(t),
      (t._start = ze(
        (Mi(i) ? i : i || e !== Se ? Wt(e, i, t) : e._time) + t._delay
      )),
      (t._end = ze(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      dc(e, t, "_first", "_last", e._sort ? "_start" : 0),
      sa(t) || (e._recent = t),
      r || hc(e, t),
      e._ts < 0 && po(e, e._tTime),
      e
    );
  },
  pc = function (e, t) {
    return (
      (Rt.ScrollTrigger || Va("scrollTrigger", t)) &&
      Rt.ScrollTrigger.create(t, e)
    );
  },
  gc = function (e, t, i, r, s) {
    if ((Ya(e, t, s), !e._initted)) return 1;
    if (
      !i &&
      e._pt &&
      !Qe &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      ac !== Lt.frame
    )
      return Hi.push(e), (e._lazy = [s, r]), 1;
  },
  Rp = function n(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t));
  },
  sa = function (e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  },
  Np = function (e, t, i, r) {
    var s = e.ratio,
      o =
        t < 0 ||
        (!t &&
          ((!e._start && Rp(e) && !(!e._initted && sa(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !sa(e))))
          ? 0
          : 1,
      a = e._rDelay,
      l = 0,
      u,
      c,
      f;
    if (
      (a &&
        e._repeat &&
        ((l = os(0, e._tDur, t)),
        (c = on(l, a)),
        e._yoyo && c & 1 && (o = 1 - o),
        c !== on(e._tTime, a) &&
          ((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
      o !== s || Qe || r || e._zTime === at || (!t && e._zTime))
    ) {
      if (!e._initted && gc(e, t, r, i, l)) return;
      for (
        f = e._zTime,
          e._zTime = t || (i ? at : 0),
          i || (i = t && !f),
          e.ratio = o,
          e._from && (o = 1 - o),
          e._time = 0,
          e._tTime = l,
          u = e._pt;
        u;

      )
        u.r(o, u.d), (u = u._next);
      t < 0 && na(e, t, i, !0),
        e._onUpdate && !i && It(e, "onUpdate"),
        l && e._repeat && !i && e.parent && It(e, "onRepeat"),
        (t >= e._tDur || t < 0) &&
          e.ratio === o &&
          (o && Xi(e, 1),
          !i &&
            !Qe &&
            (It(e, o ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  },
  Fp = function (e, t, i) {
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
  },
  an = function (e, t, i, r) {
    var s = e._repeat,
      o = ze(t) || 0,
      a = e._tTime / e._tDur;
    return (
      a && !r && (e._time *= o / e._dur),
      (e._dur = o),
      (e._tDur = s ? (s < 0 ? 1e10 : ze(o * (s + 1) + e._rDelay * s)) : o),
      a > 0 && !r && po(e, (e._tTime = e._tDur * a)),
      e.parent && ho(e),
      i || mr(e.parent, e),
      e
    );
  },
  Rl = function (e) {
    return e instanceof mt ? mr(e) : an(e, e._dur);
  },
  Bp = { _start: 0, endTime: Kn, totalDuration: Kn },
  Wt = function n(e, t, i) {
    var r = e.labels,
      s = e._recent || Bp,
      o = e.duration() >= hi ? s.endTime(!1) : e._dur,
      a,
      l,
      u;
    return Ge(t) && (isNaN(t) || t in r)
      ? ((l = t.charAt(0)),
        (u = t.substr(-1) === "%"),
        (a = t.indexOf("=")),
        l === "<" || l === ">"
          ? (a >= 0 && (t = t.replace(/=/, "")),
            (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(t.substr(1)) || 0) *
                (u ? (a < 0 ? s : i).totalDuration() / 100 : 1))
          : a < 0
          ? (t in r || (r[t] = o), r[t])
          : ((l = parseFloat(t.charAt(a - 1) + t.substr(a + 1))),
            u && i && (l = (l / 100) * (ut(i) ? i[0] : i).totalDuration()),
            a > 1 ? n(e, t.substr(0, a - 1), i) + l : o + l))
      : t == null
      ? o
      : +t;
  },
  Ln = function (e, t, i) {
    var r = Mi(t[1]),
      s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[s],
      a,
      l;
    if ((r && (o.duration = t[1]), (o.parent = i), e)) {
      for (a = o, l = i; l && !("immediateRender" in a); )
        (a = l.vars.defaults || {}), (l = bt(l.vars.inherit) && l.parent);
      (o.immediateRender = bt(a.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
    }
    return new Ie(t[0], o, t[s + 1]);
  },
  Ki = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  os = function (e, t, i) {
    return i < e ? e : i > t ? t : i;
  },
  st = function (e, t) {
    return !Ge(e) || !(t = Pp.exec(e)) ? "" : t[1];
  },
  Vp = function (e, t, i) {
    return Ki(i, function (r) {
      return os(e, t, r);
    });
  },
  oa = [].slice,
  mc = function (e, t) {
    return (
      e &&
      gi(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && gi(e[0]))) &&
      !e.nodeType &&
      e !== ai
    );
  },
  qp = function (e, t, i) {
    return (
      i === void 0 && (i = []),
      e.forEach(function (r) {
        var s;
        return (Ge(r) && !t) || mc(r, 1)
          ? (s = i).push.apply(s, Yt(r))
          : i.push(r);
      }) || i
    );
  },
  Yt = function (e, t, i) {
    return ye && !t && ye.selector
      ? ye.selector(e)
      : Ge(e) && !i && (ia || !ln())
      ? oa.call((t || Ba).querySelectorAll(e), 0)
      : ut(e)
      ? qp(e, i)
      : mc(e)
      ? oa.call(e, 0)
      : e
      ? [e]
      : [];
  },
  aa = function (e) {
    return (
      (e = Yt(e)[0] || Un("Invalid scope") || {}),
      function (t) {
        var i = e.current || e.nativeElement || e;
        return Yt(
          t,
          i.querySelectorAll
            ? i
            : i === e
            ? Un("Invalid scope") || Ba.createElement("div")
            : e
        );
      }
    );
  },
  vc = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  _c = function (e) {
    if (Ee(e)) return e;
    var t = gi(e) ? e : { each: e },
      i = vr(t.ease),
      r = t.from || 0,
      s = parseFloat(t.base) || 0,
      o = {},
      a = r > 0 && r < 1,
      l = isNaN(r) || a,
      u = t.axis,
      c = r,
      f = r;
    return (
      Ge(r)
        ? (c = f = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !a && l && ((c = r[0]), (f = r[1])),
      function (d, h, p) {
        var g = (p || t).length,
          v = o[g],
          w,
          y,
          _,
          m,
          b,
          E,
          k,
          x,
          M;
        if (!v) {
          if (((M = t.grid === "auto" ? 0 : (t.grid || [1, hi])[1]), !M)) {
            for (
              k = -1e8;
              k < (k = p[M++].getBoundingClientRect().left) && M < g;

            );
            M < g && M--;
          }
          for (
            v = o[g] = [],
              w = l ? Math.min(M, g) * c - 0.5 : r % M,
              y = M === hi ? 0 : l ? (g * f) / M - 0.5 : (r / M) | 0,
              k = 0,
              x = hi,
              E = 0;
            E < g;
            E++
          )
            (_ = (E % M) - w),
              (m = y - ((E / M) | 0)),
              (v[E] = b = u ? Math.abs(u === "y" ? m : _) : Ju(_ * _ + m * m)),
              b > k && (k = b),
              b < x && (x = b);
          r === "random" && vc(v),
            (v.max = k - x),
            (v.min = x),
            (v.v = g =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (M > g
                    ? g - 1
                    : u
                    ? u === "y"
                      ? g / M
                      : M
                    : Math.max(M, g / M)) ||
                0) * (r === "edges" ? -1 : 1)),
            (v.b = g < 0 ? s - g : s),
            (v.u = st(t.amount || t.each) || 0),
            (i = i && g < 0 ? Pc(i) : i);
        }
        return (
          (g = (v[d] - v.min) / v.max || 0),
          ze(v.b + (i ? i(g) : g) * v.v) + v.u
        );
      }
    );
  },
  la = function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (i) {
      var r = ze(Math.round(parseFloat(i) / e) * e * t);
      return (r - (r % 1)) / t + (Mi(i) ? 0 : st(i));
    };
  },
  yc = function (e, t) {
    var i = ut(e),
      r,
      s;
    return (
      !i &&
        gi(e) &&
        ((r = i = e.radius || hi),
        e.values
          ? ((e = Yt(e.values)), (s = !Mi(e[0])) && (r *= r))
          : (e = la(e.increment))),
      Ki(
        t,
        i
          ? Ee(e)
            ? function (o) {
                return (s = e(o)), Math.abs(s - o) <= r ? s : o;
              }
            : function (o) {
                for (
                  var a = parseFloat(s ? o.x : o),
                    l = parseFloat(s ? o.y : 0),
                    u = hi,
                    c = 0,
                    f = e.length,
                    d,
                    h;
                  f--;

                )
                  s
                    ? ((d = e[f].x - a), (h = e[f].y - l), (d = d * d + h * h))
                    : (d = Math.abs(e[f] - a)),
                    d < u && ((u = d), (c = f));
                return (
                  (c = !r || u <= r ? e[c] : o),
                  s || c === o || Mi(o) ? c : c + st(o)
                );
              }
          : la(e)
      )
    );
  },
  wc = function (e, t, i, r) {
    return Ki(ut(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
      return ut(e)
        ? e[~~(Math.random() * e.length)]
        : (i = i || 1e-5) &&
            (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - i / 2 + Math.random() * (t - e + i * 0.99)) / i) *
                i *
                r
            ) / r;
    });
  },
  $p = function () {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return function (r) {
      return t.reduce(function (s, o) {
        return o(s);
      }, r);
    };
  },
  Wp = function (e, t) {
    return function (i) {
      return e(parseFloat(i)) + (t || st(i));
    };
  },
  Hp = function (e, t, i) {
    return Sc(e, t, 0, 1, i);
  },
  bc = function (e, t, i) {
    return Ki(i, function (r) {
      return e[~~t(r)];
    });
  },
  Gp = function n(e, t, i) {
    var r = t - e;
    return ut(e)
      ? bc(e, n(0, e.length), t)
      : Ki(i, function (s) {
          return ((r + ((s - e) % r)) % r) + e;
        });
  },
  Yp = function n(e, t, i) {
    var r = t - e,
      s = r * 2;
    return ut(e)
      ? bc(e, n(0, e.length - 1), t)
      : Ki(i, function (o) {
          return (o = (s + ((o - e) % s)) % s || 0), e + (o > r ? s - o : o);
        });
  },
  Zn = function (e) {
    for (var t = 0, i = "", r, s, o, a; ~(r = e.indexOf("random(", t)); )
      (o = e.indexOf(")", r)),
        (a = e.charAt(r + 7) === "["),
        (s = e.substr(r + 7, o - r - 7).match(a ? rc : ta)),
        (i +=
          e.substr(t, r - t) + wc(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
        (t = o + 1);
    return i + e.substr(t, e.length - t);
  },
  Sc = function (e, t, i, r, s) {
    var o = t - e,
      a = r - i;
    return Ki(s, function (l) {
      return i + (((l - e) / o) * a || 0);
    });
  },
  Xp = function n(e, t, i, r) {
    var s = isNaN(e + t)
      ? 0
      : function (h) {
          return (1 - h) * e + h * t;
        };
    if (!s) {
      var o = Ge(e),
        a = {},
        l,
        u,
        c,
        f,
        d;
      if ((i === !0 && (r = 1) && (i = null), o))
        (e = { p: e }), (t = { p: t });
      else if (ut(e) && !ut(t)) {
        for (c = [], f = e.length, d = f - 2, u = 1; u < f; u++)
          c.push(n(e[u - 1], e[u]));
        f--,
          (s = function (p) {
            p *= f;
            var g = Math.min(d, ~~p);
            return c[g](p - g);
          }),
          (i = t);
      } else r || (e = sn(ut(e) ? [] : {}, e));
      if (!c) {
        for (l in t) Ga.call(a, e, l, "get", t[l]);
        s = function (p) {
          return Ua(p, a) || (o ? e.p : e);
        };
      }
    }
    return Ki(i, s);
  },
  Nl = function (e, t, i) {
    var r = e.labels,
      s = hi,
      o,
      a,
      l;
    for (o in r)
      (a = r[o] - t),
        a < 0 == !!i && a && s > (a = Math.abs(a)) && ((l = o), (s = a));
    return l;
  },
  It = function (e, t, i) {
    var r = e.vars,
      s = r[t],
      o = ye,
      a = e._ctx,
      l,
      u,
      c;
    if (s)
      return (
        (l = r[t + "Params"]),
        (u = r.callbackScope || e),
        i && Hi.length && Xs(),
        a && (ye = a),
        (c = l ? s.apply(u, l) : s.call(u)),
        (ye = o),
        c
      );
  },
  Sn = function (e) {
    return (
      Xi(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!Qe),
      e.progress() < 1 && It(e, "onInterrupt"),
      e
    );
  },
  Gr,
  xc = [],
  Tc = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), Fa() || e.headless)) {
        var t = e.name,
          i = Ee(e),
          r =
            t && !i && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          s = {
            init: Kn,
            render: Ua,
            add: Ga,
            kill: ug,
            modifier: lg,
            rawVars: 0,
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: ja,
            aliases: {},
            register: 0,
          };
        if ((ln(), e !== r)) {
          if (At[t]) return;
          Nt(r, Nt(js(e, s), o)),
            sn(r.prototype, sn(s, js(e, o))),
            (At[(r.prop = t)] = r),
            e.targetTest && (Ls.push(r), (qa[t] = 1)),
            (t =
              (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
              "Plugin");
        }
        oc(t, r), e.register && e.register(Et, r, xt);
      } else xc.push(e);
  },
  he = 255,
  xn = {
    aqua: [0, he, he],
    lime: [0, he, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, he],
    navy: [0, 0, 128],
    white: [he, he, he],
    olive: [128, 128, 0],
    yellow: [he, he, 0],
    orange: [he, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [he, 0, 0],
    pink: [he, 192, 203],
    cyan: [0, he, he],
    transparent: [he, he, he, 0],
  },
  Mo = function (e, t, i) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (i - t) * e * 6
        : e < 0.5
        ? i
        : e * 3 < 2
        ? t + (i - t) * (2 / 3 - e) * 6
        : t) *
        he +
        0.5) |
        0
    );
  },
  Ec = function (e, t, i) {
    var r = e ? (Mi(e) ? [e >> 16, (e >> 8) & he, e & he] : 0) : xn.black,
      s,
      o,
      a,
      l,
      u,
      c,
      f,
      d,
      h,
      p;
    if (!r) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), xn[e]))
        r = xn[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((s = e.charAt(1)),
            (o = e.charAt(2)),
            (a = e.charAt(3)),
            (e =
              "#" +
              s +
              s +
              o +
              o +
              a +
              a +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (r = parseInt(e.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & he, r & he, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (r = [e >> 16, (e >> 8) & he, e & he]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((r = p = e.match(ta)), !t))
          (l = (+r[0] % 360) / 360),
            (u = +r[1] / 100),
            (c = +r[2] / 100),
            (o = c <= 0.5 ? c * (u + 1) : c + u - c * u),
            (s = c * 2 - o),
            r.length > 3 && (r[3] *= 1),
            (r[0] = Mo(l + 1 / 3, s, o)),
            (r[1] = Mo(l, s, o)),
            (r[2] = Mo(l - 1 / 3, s, o));
        else if (~e.indexOf("="))
          return (r = e.match(tc)), i && r.length < 4 && (r[3] = 1), r;
      } else r = e.match(ta) || xn.transparent;
      r = r.map(Number);
    }
    return (
      t &&
        !p &&
        ((s = r[0] / he),
        (o = r[1] / he),
        (a = r[2] / he),
        (f = Math.max(s, o, a)),
        (d = Math.min(s, o, a)),
        (c = (f + d) / 2),
        f === d
          ? (l = u = 0)
          : ((h = f - d),
            (u = c > 0.5 ? h / (2 - f - d) : h / (f + d)),
            (l =
              f === s
                ? (o - a) / h + (o < a ? 6 : 0)
                : f === o
                ? (a - s) / h + 2
                : (s - o) / h + 4),
            (l *= 60)),
        (r[0] = ~~(l + 0.5)),
        (r[1] = ~~(u * 100 + 0.5)),
        (r[2] = ~~(c * 100 + 0.5))),
      i && r.length < 4 && (r[3] = 1),
      r
    );
  },
  kc = function (e) {
    var t = [],
      i = [],
      r = -1;
    return (
      e.split(Gi).forEach(function (s) {
        var o = s.match(Hr) || [];
        t.push.apply(t, o), i.push((r += o.length + 1));
      }),
      (t.c = i),
      t
    );
  },
  Fl = function (e, t, i) {
    var r = "",
      s = (e + r).match(Gi),
      o = t ? "hsla(" : "rgba(",
      a = 0,
      l,
      u,
      c,
      f;
    if (!s) return e;
    if (
      ((s = s.map(function (d) {
        return (
          (d = Ec(d, t, 1)) &&
          o +
            (t ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) +
            ")"
        );
      })),
      i && ((c = kc(e)), (l = i.c), l.join(r) !== c.c.join(r)))
    )
      for (u = e.replace(Gi, "1").split(Hr), f = u.length - 1; a < f; a++)
        r +=
          u[a] +
          (~l.indexOf(a)
            ? s.shift() || o + "0,0,0,0)"
            : (c.length ? c : s.length ? s : i).shift());
    if (!u)
      for (u = e.split(Gi), f = u.length - 1; a < f; a++) r += u[a] + s[a];
    return r + u[f];
  },
  Gi = (function () {
    var n =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in xn) n += "|" + e + "\\b";
    return new RegExp(n + ")", "gi");
  })(),
  jp = /hsl[a]?\(/,
  Cc = function (e) {
    var t = e.join(" "),
      i;
    if (((Gi.lastIndex = 0), Gi.test(t)))
      return (
        (i = jp.test(t)),
        (e[1] = Fl(e[1], i)),
        (e[0] = Fl(e[0], i, kc(e[1]))),
        !0
      );
  },
  Qn,
  Lt = (function () {
    var n = Date.now,
      e = 500,
      t = 33,
      i = n(),
      r = i,
      s = 1e3 / 240,
      o = s,
      a = [],
      l,
      u,
      c,
      f,
      d,
      h,
      p = function g(v) {
        var w = n() - r,
          y = v === !0,
          _,
          m,
          b,
          E;
        if (
          ((w > e || w < 0) && (i += w - t),
          (r += w),
          (b = r - i),
          (_ = b - o),
          (_ > 0 || y) &&
            ((E = ++f.frame),
            (d = b - f.time * 1e3),
            (f.time = b = b / 1e3),
            (o += _ + (_ >= s ? 4 : s - _)),
            (m = 1)),
          y || (l = u(g)),
          m)
        )
          for (h = 0; h < a.length; h++) a[h](b, d, E, v);
      };
    return (
      (f = {
        time: 0,
        frame: 0,
        tick: function () {
          p(!0);
        },
        deltaRatio: function (v) {
          return d / (1e3 / (v || 60));
        },
        wake: function () {
          nc &&
            (!ia &&
              Fa() &&
              ((ai = ia = window),
              (Ba = ai.document || {}),
              (Rt.gsap = Et),
              (ai.gsapVersions || (ai.gsapVersions = [])).push(Et.version),
              sc(Ys || ai.GreenSockGlobals || (!ai.gsap && ai) || {}),
              xc.forEach(Tc)),
            (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            l && f.sleep(),
            (u =
              c ||
              function (v) {
                return setTimeout(v, (o - f.time * 1e3 + 1) | 0);
              }),
            (Qn = 1),
            p(2));
        },
        sleep: function () {
          (c ? cancelAnimationFrame : clearTimeout)(l), (Qn = 0), (u = Kn);
        },
        lagSmoothing: function (v, w) {
          (e = v || 1 / 0), (t = Math.min(w || 33, e));
        },
        fps: function (v) {
          (s = 1e3 / (v || 240)), (o = f.time * 1e3 + s);
        },
        add: function (v, w, y) {
          var _ = w
            ? function (m, b, E, k) {
                v(m, b, E, k), f.remove(_);
              }
            : v;
          return f.remove(v), a[y ? "unshift" : "push"](_), ln(), _;
        },
        remove: function (v, w) {
          ~(w = a.indexOf(v)) && a.splice(w, 1) && h >= w && h--;
        },
        _listeners: a,
      }),
      f
    );
  })(),
  ln = function () {
    return !Qn && Lt.wake();
  },
  Ze = {},
  Up = /^[\d.\-M][\d.\-,\s]/,
  Kp = /["']/g,
  Zp = function (e) {
    for (
      var t = {},
        i = e.substr(1, e.length - 3).split(":"),
        r = i[0],
        s = 1,
        o = i.length,
        a,
        l,
        u;
      s < o;
      s++
    )
      (l = i[s]),
        (a = s !== o - 1 ? l.lastIndexOf(",") : l.length),
        (u = l.substr(0, a)),
        (t[r] = isNaN(u) ? u.replace(Kp, "").trim() : +u),
        (r = l.substr(a + 1).trim());
    return t;
  },
  Qp = function (e) {
    var t = e.indexOf("(") + 1,
      i = e.indexOf(")"),
      r = e.indexOf("(", t);
    return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
  },
  Jp = function (e) {
    var t = (e + "").split("("),
      i = Ze[t[0]];
    return i && t.length > 1 && i.config
      ? i.config.apply(
          null,
          ~e.indexOf("{") ? [Zp(t[1])] : Qp(e).split(",").map(cc)
        )
      : Ze._CE && Up.test(e)
      ? Ze._CE("", e)
      : i;
  },
  Pc = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  Mc = function n(e, t) {
    for (var i = e._first, r; i; )
      i instanceof mt
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
  },
  vr = function (e, t) {
    return (e && (Ee(e) ? e : Ze[e] || Jp(e))) || t;
  },
  Or = function (e, t, i, r) {
    i === void 0 &&
      (i = function (l) {
        return 1 - t(1 - l);
      }),
      r === void 0 &&
        (r = function (l) {
          return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
        });
    var s = { easeIn: t, easeOut: i, easeInOut: r },
      o;
    return (
      St(e, function (a) {
        (Ze[a] = Rt[a] = s), (Ze[(o = a.toLowerCase())] = i);
        for (var l in s)
          Ze[
            o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = Ze[a + "." + l] = s[l];
      }),
      s
    );
  },
  Ac = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  Ao = function n(e, t, i) {
    var r = t >= 1 ? t : 1,
      s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      o = (s / ea) * (Math.asin(1 / r) || 0),
      a = function (c) {
        return c === 1 ? 1 : r * Math.pow(2, -10 * c) * Cp((c - o) * s) + 1;
      },
      l =
        e === "out"
          ? a
          : e === "in"
          ? function (u) {
              return 1 - a(1 - u);
            }
          : Ac(a);
    return (
      (s = ea / s),
      (l.config = function (u, c) {
        return n(e, u, c);
      }),
      l
    );
  },
  Oo = function n(e, t) {
    t === void 0 && (t = 1.70158);
    var i = function (o) {
        return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
      },
      r =
        e === "out"
          ? i
          : e === "in"
          ? function (s) {
              return 1 - i(1 - s);
            }
          : Ac(i);
    return (
      (r.config = function (s) {
        return n(e, s);
      }),
      r
    );
  };
St("Linear,Quad,Cubic,Quart,Quint,Strong", function (n, e) {
  var t = e < 5 ? e + 1 : e;
  Or(
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
Ze.Linear.easeNone = Ze.none = Ze.Linear.easeIn;
Or("Elastic", Ao("in"), Ao("out"), Ao());
(function (n, e) {
  var t = 1 / e,
    i = 2 * t,
    r = 2.5 * t,
    s = function (a) {
      return a < t
        ? n * a * a
        : a < i
        ? n * Math.pow(a - 1.5 / e, 2) + 0.75
        : a < r
        ? n * (a -= 2.25 / e) * a + 0.9375
        : n * Math.pow(a - 2.625 / e, 2) + 0.984375;
    };
  Or(
    "Bounce",
    function (o) {
      return 1 - s(1 - o);
    },
    s
  );
})(7.5625, 2.75);
Or("Expo", function (n) {
  return Math.pow(2, 10 * (n - 1)) * n + n * n * n * n * n * n * (1 - n);
});
Or("Circ", function (n) {
  return -(Ju(1 - n * n) - 1);
});
Or("Sine", function (n) {
  return n === 1 ? 1 : -kp(n * Tp) + 1;
});
Or("Back", Oo("in"), Oo("out"), Oo());
Ze.SteppedEase =
  Ze.steps =
  Rt.SteppedEase =
    {
      config: function (e, t) {
        e === void 0 && (e = 1);
        var i = 1 / e,
          r = e + (t ? 0 : 1),
          s = t ? 1 : 0,
          o = 1 - at;
        return function (a) {
          return (((r * os(0, o, a)) | 0) + s) * i;
        };
      },
    };
nn.ease = Ze["quad.out"];
St(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (n) {
    return ($a += n + "," + n + "Params,");
  }
);
var Oc = function (e, t) {
    (this.id = Ep++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : lc),
      (this.set = t ? t.getSetter : ja);
  },
  Jn = (function () {
    function n(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        an(this, +t.duration, 1, 1),
        (this.data = t.data),
        ye && ((this._ctx = ye), ye.data.push(this)),
        Qn || Lt.wake();
    }
    var e = n.prototype;
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
            an(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (i, r) {
        if ((ln(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (po(this, i), !s._dp || s.parent || hc(s, this); s && s.parent; )
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
            ui(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === at) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), uc(this, i, r)),
          this
        );
      }),
      (e.time = function (i, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + zl(this)) %
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
                zl(this),
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
          ? on(this._tTime, s) + 1
          : 1;
      }),
      (e.timeScale = function (i, r) {
        if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
        if (this._rts === i) return this;
        var s =
          this.parent && this._ts ? Us(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -1e-8 ? 0 : this._rts),
          this.totalTime(
            os(-Math.abs(this._delay), this.totalDuration(), s),
            r !== !1
          ),
          ho(this),
          Ip(this)
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
                : (ln(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== at &&
                      (this._tTime -= at)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (i) {
        if (arguments.length) {
          this._start = i;
          var r = this.parent || this._dp;
          return (
            r && (r._sort || !this.parent) && ui(r, this, i - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (i) {
        return (
          this._start +
          (bt(i) ? this.totalDuration() : this.duration()) /
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
            ? Us(r.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (i) {
        i === void 0 && (i = Ap);
        var r = Qe;
        return (
          (Qe = i),
          Ha(this) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (Qe = r),
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
          ? ((this._repeat = i === 1 / 0 ? -2 : i), Rl(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (i) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = i), Rl(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (e.seek = function (i, r) {
        return this.totalTime(Wt(this, i), bt(r));
      }),
      (e.restart = function (i, r) {
        return (
          this.play().totalTime(i ? -this._delay : 0, bt(r)),
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
            s < this.endTime(!0) - at)
        );
      }),
      (e.eventCallback = function (i, r, s) {
        var o = this.vars;
        return arguments.length > 1
          ? (r
              ? ((o[i] = r),
                s && (o[i + "Params"] = s),
                i === "onUpdate" && (this._onUpdate = r))
              : delete o[i],
            this)
          : o[i];
      }),
      (e.then = function (i) {
        var r = this;
        return new Promise(function (s) {
          var o = Ee(i) ? i : fc,
            a = function () {
              var u = r.then;
              (r.then = null),
                Ee(o) && (o = o(r)) && (o.then || o === r) && (r.then = u),
                s(o),
                (r.then = u);
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? a()
            : (r._prom = a);
        });
      }),
      (e.kill = function () {
        Sn(this);
      }),
      n
    );
  })();
Nt(Jn.prototype, {
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
var mt = (function (n) {
  Qu(e, n);
  function e(i, r) {
    var s;
    return (
      i === void 0 && (i = {}),
      (s = n.call(this, i) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!i.smoothChildTiming),
      (s.autoRemoveChildren = !!i.autoRemoveChildren),
      (s._sort = bt(i.sortChildren)),
      Se && ui(i.parent || Se, wi(s), r),
      i.reversed && s.reverse(),
      i.paused && s.paused(!0),
      i.scrollTrigger && pc(wi(s), i.scrollTrigger),
      s
    );
  }
  var t = e.prototype;
  return (
    (t.to = function (r, s, o) {
      return Ln(0, arguments, this), this;
    }),
    (t.from = function (r, s, o) {
      return Ln(1, arguments, this), this;
    }),
    (t.fromTo = function (r, s, o, a) {
      return Ln(2, arguments, this), this;
    }),
    (t.set = function (r, s, o) {
      return (
        (s.duration = 0),
        (s.parent = this),
        On(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new Ie(r, s, Wt(this, o), 1),
        this
      );
    }),
    (t.call = function (r, s, o) {
      return ui(this, Ie.delayedCall(0, r, s), o);
    }),
    (t.staggerTo = function (r, s, o, a, l, u, c) {
      return (
        (o.duration = s),
        (o.stagger = o.stagger || a),
        (o.onComplete = u),
        (o.onCompleteParams = c),
        (o.parent = this),
        new Ie(r, o, Wt(this, l)),
        this
      );
    }),
    (t.staggerFrom = function (r, s, o, a, l, u, c) {
      return (
        (o.runBackwards = 1),
        (On(o).immediateRender = bt(o.immediateRender)),
        this.staggerTo(r, s, o, a, l, u, c)
      );
    }),
    (t.staggerFromTo = function (r, s, o, a, l, u, c, f) {
      return (
        (a.startAt = o),
        (On(a).immediateRender = bt(a.immediateRender)),
        this.staggerTo(r, s, a, l, u, c, f)
      );
    }),
    (t.render = function (r, s, o) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        c = r <= 0 ? 0 : ze(r),
        f = this._zTime < 0 != r < 0 && (this._initted || !u),
        d,
        h,
        p,
        g,
        v,
        w,
        y,
        _,
        m,
        b,
        E,
        k;
      if (
        (this !== Se && c > l && r >= 0 && (c = l), c !== this._tTime || o || f)
      ) {
        if (
          (a !== this._time &&
            u &&
            ((c += this._time - a), (r += this._time - a)),
          (d = c),
          (m = this._start),
          (_ = this._ts),
          (w = !_),
          f && (u || (a = this._zTime), (r || !s) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((E = this._yoyo),
            (v = u + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(v * 100 + r, s, o);
          if (
            ((d = ze(c % v)),
            c === l
              ? ((g = this._repeat), (d = u))
              : ((b = ze(c / v)),
                (g = ~~b),
                g && g === b && ((d = u), g--),
                d > u && (d = u)),
            (b = on(this._tTime, v)),
            !a &&
              this._tTime &&
              b !== g &&
              this._tTime - b * v - this._dur <= 0 &&
              (b = g),
            E && g & 1 && ((d = u - d), (k = 1)),
            g !== b && !this._lock)
          ) {
            var x = E && b & 1,
              M = x === (E && g & 1);
            if (
              (g < b && (x = !x),
              (a = x ? 0 : c % u ? u : c),
              (this._lock = 1),
              (this.render(a || (k ? 0 : ze(g * v)), s, !u)._lock = 0),
              (this._tTime = c),
              !s && this.parent && It(this, "onRepeat"),
              this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1),
              (a && a !== this._time) ||
                w !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (l = this._tDur),
              M &&
                ((this._lock = 2),
                (a = x ? u : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !k && this.invalidate()),
              (this._lock = 0),
              !this._ts && !w)
            )
              return this;
            Mc(this, k);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((y = Fp(this, ze(a), ze(d))), y && (c -= d - (d = y._start))),
          (this._tTime = c),
          (this._time = d),
          (this._act = !_),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (a = 0)),
          !a && c && !s && !b && (It(this, "onStart"), this._tTime !== c))
        )
          return this;
        if (d >= a && r >= 0)
          for (h = this._first; h; ) {
            if (
              ((p = h._next), (h._act || d >= h._start) && h._ts && y !== h)
            ) {
              if (h.parent !== this) return this.render(r, s, o);
              if (
                (h.render(
                  h._ts > 0
                    ? (d - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                        (d - h._start) * h._ts,
                  s,
                  o
                ),
                d !== this._time || (!this._ts && !w))
              ) {
                (y = 0), p && (c += this._zTime = -1e-8);
                break;
              }
            }
            h = p;
          }
        else {
          h = this._last;
          for (var C = r < 0 ? r : d; h; ) {
            if (((p = h._prev), (h._act || C <= h._end) && h._ts && y !== h)) {
              if (h.parent !== this) return this.render(r, s, o);
              if (
                (h.render(
                  h._ts > 0
                    ? (C - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                        (C - h._start) * h._ts,
                  s,
                  o || (Qe && Ha(h))
                ),
                d !== this._time || (!this._ts && !w))
              ) {
                (y = 0), p && (c += this._zTime = C ? -1e-8 : at);
                break;
              }
            }
            h = p;
          }
        }
        if (
          y &&
          !s &&
          (this.pause(),
          (y.render(d >= a ? 0 : -1e-8)._zTime = d >= a ? 1 : -1),
          this._ts)
        )
          return (this._start = m), ho(this), this.render(r, s, o);
        this._onUpdate && !s && It(this, "onUpdate", !0),
          ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
            (m === this._start || Math.abs(_) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !u) &&
                ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                Xi(this, 1),
              !s &&
                !(r < 0 && !a) &&
                (c || a || !l) &&
                (It(
                  this,
                  c === l && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(c < l && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (t.add = function (r, s) {
      var o = this;
      if ((Mi(s) || (s = Wt(this, s, r)), !(r instanceof Jn))) {
        if (ut(r))
          return (
            r.forEach(function (a) {
              return o.add(a, s);
            }),
            this
          );
        if (Ge(r)) return this.addLabel(r, s);
        if (Ee(r)) r = Ie.delayedCall(0, r);
        else return this;
      }
      return this !== r ? ui(this, r, s) : this;
    }),
    (t.getChildren = function (r, s, o, a) {
      r === void 0 && (r = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -1e8);
      for (var l = [], u = this._first; u; )
        u._start >= a &&
          (u instanceof Ie
            ? s && l.push(u)
            : (o && l.push(u), r && l.push.apply(l, u.getChildren(!0, s, o)))),
          (u = u._next);
      return l;
    }),
    (t.getById = function (r) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
        if (s[o].vars.id === r) return s[o];
    }),
    (t.remove = function (r) {
      return Ge(r)
        ? this.removeLabel(r)
        : Ee(r)
        ? this.killTweensOf(r)
        : (r.parent === this && fo(this, r),
          r === this._recent && (this._recent = this._last),
          mr(this));
    }),
    (t.totalTime = function (r, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = ze(
              Lt.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts)
            )),
          n.prototype.totalTime.call(this, r, s),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (t.addLabel = function (r, s) {
      return (this.labels[r] = Wt(this, s)), this;
    }),
    (t.removeLabel = function (r) {
      return delete this.labels[r], this;
    }),
    (t.addPause = function (r, s, o) {
      var a = Ie.delayedCall(0, s || Kn, o);
      return (
        (a.data = "isPause"), (this._hasPause = 1), ui(this, a, Wt(this, r))
      );
    }),
    (t.removePause = function (r) {
      var s = this._first;
      for (r = Wt(this, r); s; )
        s._start === r && s.data === "isPause" && Xi(s), (s = s._next);
    }),
    (t.killTweensOf = function (r, s, o) {
      for (var a = this.getTweensOf(r, o), l = a.length; l--; )
        Bi !== a[l] && a[l].kill(r, s);
      return this;
    }),
    (t.getTweensOf = function (r, s) {
      for (var o = [], a = Yt(r), l = this._first, u = Mi(s), c; l; )
        l instanceof Ie
          ? Op(l._targets, a) &&
            (u
              ? (!Bi || (l._initted && l._ts)) &&
                l.globalTime(0) <= s &&
                l.globalTime(l.totalDuration()) > s
              : !s || l.isActive()) &&
            o.push(l)
          : (c = l.getTweensOf(a, s)).length && o.push.apply(o, c),
          (l = l._next);
      return o;
    }),
    (t.tweenTo = function (r, s) {
      s = s || {};
      var o = this,
        a = Wt(o, r),
        l = s,
        u = l.startAt,
        c = l.onStart,
        f = l.onStartParams,
        d = l.immediateRender,
        h,
        p = Ie.to(
          o,
          Nt(
            {
              ease: s.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration:
                s.duration ||
                Math.abs(
                  (a - (u && "time" in u ? u.time : o._time)) / o.timeScale()
                ) ||
                at,
              onStart: function () {
                if ((o.pause(), !h)) {
                  var v =
                    s.duration ||
                    Math.abs(
                      (a - (u && "time" in u ? u.time : o._time)) /
                        o.timeScale()
                    );
                  p._dur !== v && an(p, v, 0, 1).render(p._time, !0, !0),
                    (h = 1);
                }
                c && c.apply(p, f || []);
              },
            },
            s
          )
        );
      return d ? p.render(0) : p;
    }),
    (t.tweenFromTo = function (r, s, o) {
      return this.tweenTo(s, Nt({ startAt: { time: Wt(this, r) } }, o));
    }),
    (t.recent = function () {
      return this._recent;
    }),
    (t.nextLabel = function (r) {
      return r === void 0 && (r = this._time), Nl(this, Wt(this, r));
    }),
    (t.previousLabel = function (r) {
      return r === void 0 && (r = this._time), Nl(this, Wt(this, r), 1);
    }),
    (t.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + at);
    }),
    (t.shiftChildren = function (r, s, o) {
      o === void 0 && (o = 0);
      for (var a = this._first, l = this.labels, u; a; )
        a._start >= o && ((a._start += r), (a._end += r)), (a = a._next);
      if (s) for (u in l) l[u] >= o && (l[u] += r);
      return mr(this);
    }),
    (t.invalidate = function (r) {
      var s = this._first;
      for (this._lock = 0; s; ) s.invalidate(r), (s = s._next);
      return n.prototype.invalidate.call(this, r);
    }),
    (t.clear = function (r) {
      r === void 0 && (r = !0);
      for (var s = this._first, o; s; ) (o = s._next), this.remove(s), (s = o);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        mr(this)
      );
    }),
    (t.totalDuration = function (r) {
      var s = 0,
        o = this,
        a = o._last,
        l = hi,
        u,
        c,
        f;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -r : r)
        );
      if (o._dirty) {
        for (f = o.parent; a; )
          (u = a._prev),
            a._dirty && a.totalDuration(),
            (c = a._start),
            c > l && o._sort && a._ts && !o._lock
              ? ((o._lock = 1), (ui(o, a, c - a._delay, 1)._lock = 0))
              : (l = c),
            c < 0 &&
              a._ts &&
              ((s -= c),
              ((!f && !o._dp) || (f && f.smoothChildTiming)) &&
                ((o._start += c / o._ts), (o._time -= c), (o._tTime -= c)),
              o.shiftChildren(-c, !1, -1 / 0),
              (l = 0)),
            a._end > s && a._ts && (s = a._end),
            (a = u);
        an(o, o === Se && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }),
    (e.updateRoot = function (r) {
      if ((Se._ts && (uc(Se, Us(r, Se)), (ac = Lt.frame)), Lt.frame >= Dl)) {
        Dl += zt.autoSleep || 120;
        var s = Se._first;
        if ((!s || !s._ts) && zt.autoSleep && Lt._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || Lt.sleep();
        }
      }
    }),
    e
  );
})(Jn);
Nt(mt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var eg = function (e, t, i, r, s, o, a) {
    var l = new xt(this._pt, e, t, 0, 1, Nc, null, s),
      u = 0,
      c = 0,
      f,
      d,
      h,
      p,
      g,
      v,
      w,
      y;
    for (
      l.b = i,
        l.e = r,
        i += "",
        r += "",
        (w = ~r.indexOf("random(")) && (r = Zn(r)),
        o && ((y = [i, r]), o(y, e, t), (i = y[0]), (r = y[1])),
        d = i.match(Co) || [];
      (f = Co.exec(r));

    )
      (p = f[0]),
        (g = r.substring(u, f.index)),
        h ? (h = (h + 1) % 5) : g.substr(-5) === "rgba(" && (h = 1),
        p !== d[c++] &&
          ((v = parseFloat(d[c - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: g || c === 1 ? g : ",",
            s: v,
            c: p.charAt(1) === "=" ? Kr(v, p) - v : parseFloat(p) - v,
            m: h && h < 4 ? Math.round : 0,
          }),
          (u = Co.lastIndex));
    return (
      (l.c = u < r.length ? r.substring(u, r.length) : ""),
      (l.fp = a),
      (ic.test(r) || w) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  Ga = function (e, t, i, r, s, o, a, l, u, c) {
    Ee(r) && (r = r(s || 0, e, o));
    var f = e[t],
      d =
        i !== "get"
          ? i
          : Ee(f)
          ? u
            ? e[
                t.indexOf("set") || !Ee(e["get" + t.substr(3)])
                  ? t
                  : "get" + t.substr(3)
              ](u)
            : e[t]()
          : f,
      h = Ee(f) ? (u ? sg : zc) : Xa,
      p;
    if (
      (Ge(r) &&
        (~r.indexOf("random(") && (r = Zn(r)),
        r.charAt(1) === "=" &&
          ((p = Kr(d, r) + (st(d) || 0)), (p || p === 0) && (r = p))),
      !c || d !== r || ua)
    )
      return !isNaN(d * r) && r !== ""
        ? ((p = new xt(
            this._pt,
            e,
            t,
            +d || 0,
            r - (d || 0),
            typeof f == "boolean" ? ag : Rc,
            0,
            h
          )),
          u && (p.fp = u),
          a && p.modifier(a, this, e),
          (this._pt = p))
        : (!f && !(t in e) && Va(t, r),
          eg.call(this, e, t, d, r, h, l || zt.stringFilter, u));
  },
  tg = function (e, t, i, r, s) {
    if (
      (Ee(e) && (e = Dn(e, s, t, i, r)),
      !gi(e) || (e.style && e.nodeType) || ut(e) || ec(e))
    )
      return Ge(e) ? Dn(e, s, t, i, r) : e;
    var o = {},
      a;
    for (a in e) o[a] = Dn(e[a], s, t, i, r);
    return o;
  },
  Lc = function (e, t, i, r, s, o) {
    var a, l, u, c;
    if (
      At[e] &&
      (a = new At[e]()).init(
        s,
        a.rawVars ? t[e] : tg(t[e], r, s, o, i),
        i,
        r,
        o
      ) !== !1 &&
      ((i._pt = l = new xt(i._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
      i !== Gr)
    )
      for (u = i._ptLookup[i._targets.indexOf(s)], c = a._props.length; c--; )
        u[a._props[c]] = l;
    return a;
  },
  Bi,
  ua,
  Ya = function n(e, t, i) {
    var r = e.vars,
      s = r.ease,
      o = r.startAt,
      a = r.immediateRender,
      l = r.lazy,
      u = r.onUpdate,
      c = r.runBackwards,
      f = r.yoyoEase,
      d = r.keyframes,
      h = r.autoRevert,
      p = e._dur,
      g = e._startAt,
      v = e._targets,
      w = e.parent,
      y = w && w.data === "nested" ? w.vars.targets : v,
      _ = e._overwrite === "auto" && !Ra,
      m = e.timeline,
      b,
      E,
      k,
      x,
      M,
      C,
      I,
      S,
      P,
      A,
      L,
      z,
      R;
    if (
      (m && (!d || !s) && (s = "none"),
      (e._ease = vr(s, nn.ease)),
      (e._yEase = f ? Pc(vr(f === !0 ? s : f, nn.ease)) : 0),
      f &&
        e._yoyo &&
        !e._repeat &&
        ((f = e._yEase), (e._yEase = e._ease), (e._ease = f)),
      (e._from = !m && !!r.runBackwards),
      !m || (d && !r.stagger))
    ) {
      if (
        ((S = v[0] ? gr(v[0]).harness : 0),
        (z = S && r[S.prop]),
        (b = js(r, qa)),
        g &&
          (g._zTime < 0 && g.progress(1),
          t < 0 && c && a && !h ? g.render(-1, !0) : g.revert(c && p ? Os : Mp),
          (g._lazy = 0)),
        o)
      ) {
        if (
          (Xi(
            (e._startAt = Ie.set(
              v,
              Nt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: w,
                  immediateRender: !0,
                  lazy: !g && bt(l),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    u &&
                    function () {
                      return It(e, "onUpdate");
                    },
                  stagger: 0,
                },
                o
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (Qe || (!a && !h)) && e._startAt.revert(Os),
          a && p && t <= 0 && i <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (c && p && !g) {
        if (
          (t && (a = !1),
          (k = Nt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !g && bt(l),
              immediateRender: a,
              stagger: 0,
              parent: w,
            },
            b
          )),
          z && (k[S.prop] = z),
          Xi((e._startAt = Ie.set(v, k))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (Qe ? e._startAt.revert(Os) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !a)
        )
          n(e._startAt, at, at);
        else if (!t) return;
      }
      for (
        e._pt = e._ptCache = 0, l = (p && bt(l)) || (l && !p), E = 0;
        E < v.length;
        E++
      ) {
        if (
          ((M = v[E]),
          (I = M._gsap || Wa(v)[E]._gsap),
          (e._ptLookup[E] = A = {}),
          ra[I.id] && Hi.length && Xs(),
          (L = y === v ? E : y.indexOf(M)),
          S &&
            (P = new S()).init(M, z || b, e, L, y) !== !1 &&
            ((e._pt = x =
              new xt(e._pt, M, P.name, 0, 1, P.render, P, 0, P.priority)),
            P._props.forEach(function (F) {
              A[F] = x;
            }),
            P.priority && (C = 1)),
          !S || z)
        )
          for (k in b)
            At[k] && (P = Lc(k, b, e, L, M, y))
              ? P.priority && (C = 1)
              : (A[k] = x =
                  Ga.call(e, M, k, "get", b[k], L, y, 0, r.stringFilter));
        e._op && e._op[E] && e.kill(M, e._op[E]),
          _ &&
            e._pt &&
            ((Bi = e),
            Se.killTweensOf(M, A, e.globalTime(t)),
            (R = !e.parent),
            (Bi = 0)),
          e._pt && l && (ra[I.id] = 1);
      }
      C && Fc(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = u),
      (e._initted = (!e._op || e._pt) && !R),
      d && t <= 0 && m.render(hi, !0, !0);
  },
  ig = function (e, t, i, r, s, o, a, l) {
    var u = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      c,
      f,
      d,
      h;
    if (!u)
      for (
        u = e._ptCache[t] = [], d = e._ptLookup, h = e._targets.length;
        h--;

      ) {
        if (((c = d[h][t]), c && c.d && c.d._pt))
          for (c = c.d._pt; c && c.p !== t && c.fp !== t; ) c = c._next;
        if (!c)
          return (
            (ua = 1),
            (e.vars[t] = "+=0"),
            Ya(e, a),
            (ua = 0),
            l ? Un(t + " not eligible for reset") : 1
          );
        u.push(c);
      }
    for (h = u.length; h--; )
      (f = u[h]),
        (c = f._pt || f),
        (c.s = (r || r === 0) && !s ? r : c.s + (r || 0) + o * c.c),
        (c.c = i - c.s),
        f.e && (f.e = Me(i) + st(f.e)),
        f.b && (f.b = c.s + st(f.b));
  },
  rg = function (e, t) {
    var i = e[0] ? gr(e[0]).harness : 0,
      r = i && i.aliases,
      s,
      o,
      a,
      l;
    if (!r) return t;
    s = sn({}, t);
    for (o in r)
      if (o in s) for (l = r[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
    return s;
  },
  ng = function (e, t, i, r) {
    var s = t.ease || r || "power1.inOut",
      o,
      a;
    if (ut(t))
      (a = i[e] || (i[e] = [])),
        t.forEach(function (l, u) {
          return a.push({ t: (u / (t.length - 1)) * 100, v: l, e: s });
        });
    else
      for (o in t)
        (a = i[o] || (i[o] = [])),
          o === "ease" || a.push({ t: parseFloat(e), v: t[o], e: s });
  },
  Dn = function (e, t, i, r, s) {
    return Ee(e)
      ? e.call(t, i, r, s)
      : Ge(e) && ~e.indexOf("random(")
      ? Zn(e)
      : e;
  },
  Dc = $a + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Ic = {};
St(Dc + ",id,stagger,delay,duration,paused,scrollTrigger", function (n) {
  return (Ic[n] = 1);
});
var Ie = (function (n) {
  Qu(e, n);
  function e(i, r, s, o) {
    var a;
    typeof r == "number" && ((s.duration = r), (r = s), (s = null)),
      (a = n.call(this, o ? r : On(r)) || this);
    var l = a.vars,
      u = l.duration,
      c = l.delay,
      f = l.immediateRender,
      d = l.stagger,
      h = l.overwrite,
      p = l.keyframes,
      g = l.defaults,
      v = l.scrollTrigger,
      w = l.yoyoEase,
      y = r.parent || Se,
      _ = (ut(i) || ec(i) ? Mi(i[0]) : "length" in r) ? [i] : Yt(i),
      m,
      b,
      E,
      k,
      x,
      M,
      C,
      I;
    if (
      ((a._targets = _.length
        ? Wa(_)
        : Un(
            "GSAP target " + i + " not found. https://gsap.com",
            !zt.nullTargetWarn
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = h),
      p || d || ds(u) || ds(c))
    ) {
      if (
        ((r = a.vars),
        (m = a.timeline =
          new mt({
            data: "nested",
            defaults: g || {},
            targets: y && y.data === "nested" ? y.vars.targets : _,
          })),
        m.kill(),
        (m.parent = m._dp = wi(a)),
        (m._start = 0),
        d || ds(u) || ds(c))
      ) {
        if (((k = _.length), (C = d && _c(d)), gi(d)))
          for (x in d) ~Dc.indexOf(x) && (I || (I = {}), (I[x] = d[x]));
        for (b = 0; b < k; b++)
          (E = js(r, Ic)),
            (E.stagger = 0),
            w && (E.yoyoEase = w),
            I && sn(E, I),
            (M = _[b]),
            (E.duration = +Dn(u, wi(a), b, M, _)),
            (E.delay = (+Dn(c, wi(a), b, M, _) || 0) - a._delay),
            !d &&
              k === 1 &&
              E.delay &&
              ((a._delay = c = E.delay), (a._start += c), (E.delay = 0)),
            m.to(M, E, C ? C(b, M, _) : 0),
            (m._ease = Ze.none);
        m.duration() ? (u = c = 0) : (a.timeline = 0);
      } else if (p) {
        On(Nt(m.vars.defaults, { ease: "none" })),
          (m._ease = vr(p.ease || r.ease || "none"));
        var S = 0,
          P,
          A,
          L;
        if (ut(p))
          p.forEach(function (z) {
            return m.to(_, z, ">");
          }),
            m.duration();
        else {
          E = {};
          for (x in p)
            x === "ease" || x === "easeEach" || ng(x, p[x], E, p.easeEach);
          for (x in E)
            for (
              P = E[x].sort(function (z, R) {
                return z.t - R.t;
              }),
                S = 0,
                b = 0;
              b < P.length;
              b++
            )
              (A = P[b]),
                (L = {
                  ease: A.e,
                  duration: ((A.t - (b ? P[b - 1].t : 0)) / 100) * u,
                }),
                (L[x] = A.v),
                m.to(_, L, S),
                (S += L.duration);
          m.duration() < u && m.to({}, { duration: u - m.duration() });
        }
      }
      u || a.duration((u = m.duration()));
    } else a.timeline = 0;
    return (
      h === !0 && !Ra && ((Bi = wi(a)), Se.killTweensOf(_), (Bi = 0)),
      ui(y, wi(a), s),
      r.reversed && a.reverse(),
      r.paused && a.paused(!0),
      (f ||
        (!u &&
          !p &&
          a._start === ze(y._time) &&
          bt(f) &&
          zp(wi(a)) &&
          y.data !== "nested")) &&
        ((a._tTime = -1e-8), a.render(Math.max(0, -c) || 0)),
      v && pc(wi(a), v),
      a
    );
  }
  var t = e.prototype;
  return (
    (t.render = function (r, s, o) {
      var a = this._time,
        l = this._tDur,
        u = this._dur,
        c = r < 0,
        f = r > l - at && !c ? l : r < at ? 0 : r,
        d,
        h,
        p,
        g,
        v,
        w,
        y,
        _,
        m;
      if (!u) Np(this, r, s, o);
      else if (
        f !== this._tTime ||
        !r ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== c) ||
        this._lazy
      ) {
        if (((d = f), (_ = this.timeline), this._repeat)) {
          if (((g = u + this._rDelay), this._repeat < -1 && c))
            return this.totalTime(g * 100 + r, s, o);
          if (
            ((d = ze(f % g)),
            f === l
              ? ((p = this._repeat), (d = u))
              : ((v = ze(f / g)),
                (p = ~~v),
                p && p === v ? ((d = u), p--) : d > u && (d = u)),
            (w = this._yoyo && p & 1),
            w && ((m = this._yEase), (d = u - d)),
            (v = on(this._tTime, g)),
            d === a && !o && this._initted && p === v)
          )
            return (this._tTime = f), this;
          p !== v &&
            (_ && this._yEase && Mc(_, w),
            this.vars.repeatRefresh &&
              !w &&
              !this._lock &&
              d !== g &&
              this._initted &&
              ((this._lock = o = 1),
              (this.render(ze(g * p), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (gc(this, c ? r : d, o, s, f)) return (this._tTime = 0), this;
          if (a !== this._time && !(o && this.vars.repeatRefresh && p !== v))
            return this;
          if (u !== this._dur) return this.render(r, s, o);
        }
        if (
          ((this._tTime = f),
          (this._time = d),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = y = (m || this._ease)(d / u)),
          this._from && (this.ratio = y = 1 - y),
          !a && f && !s && !v && (It(this, "onStart"), this._tTime !== f))
        )
          return this;
        for (h = this._pt; h; ) h.r(y, h.d), (h = h._next);
        (_ && _.render(r < 0 ? r : _._dur * _._ease(d / this._dur), s, o)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !s &&
            (c && na(this, r, s, o), It(this, "onUpdate")),
          this._repeat &&
            p !== v &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            It(this, "onRepeat"),
          (f === this._tDur || !f) &&
            this._tTime === f &&
            (c && !this._onUpdate && na(this, r, !0, !0),
            (r || !u) &&
              ((f === this._tDur && this._ts > 0) || (!f && this._ts < 0)) &&
              Xi(this, 1),
            !s &&
              !(c && !a) &&
              (f || a || w) &&
              (It(this, f === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(f < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (t.targets = function () {
      return this._targets;
    }),
    (t.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        n.prototype.invalidate.call(this, r)
      );
    }),
    (t.resetTo = function (r, s, o, a, l) {
      Qn || Lt.wake(), this._ts || this.play();
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        c;
      return (
        this._initted || Ya(this, u),
        (c = this._ease(u / this._dur)),
        ig(this, r, s, o, a, c, u, l)
          ? this.resetTo(r, s, o, a, 1)
          : (po(this, 0),
            this.parent ||
              dc(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (t.kill = function (r, s) {
      if ((s === void 0 && (s = "all"), !r && (!s || s === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? Sn(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!Qe),
          this
        );
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, s, Bi && Bi.vars.overwrite !== !0)
            ._first || Sn(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            an(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var a = this._targets,
        l = r ? Yt(r) : a,
        u = this._ptLookup,
        c = this._pt,
        f,
        d,
        h,
        p,
        g,
        v,
        w;
      if ((!s || s === "all") && Dp(a, l))
        return s === "all" && (this._pt = 0), Sn(this);
      for (
        f = this._op = this._op || [],
          s !== "all" &&
            (Ge(s) &&
              ((g = {}),
              St(s, function (y) {
                return (g[y] = 1);
              }),
              (s = g)),
            (s = rg(a, s))),
          w = a.length;
        w--;

      )
        if (~l.indexOf(a[w])) {
          (d = u[w]),
            s === "all"
              ? ((f[w] = s), (p = d), (h = {}))
              : ((h = f[w] = f[w] || {}), (p = s));
          for (g in p)
            (v = d && d[g]),
              v &&
                ((!("kill" in v.d) || v.d.kill(g) === !0) && fo(this, v, "_pt"),
                delete d[g]),
              h !== "all" && (h[g] = 1);
        }
      return this._initted && !this._pt && c && Sn(this), this;
    }),
    (e.to = function (r, s) {
      return new e(r, s, arguments[2]);
    }),
    (e.from = function (r, s) {
      return Ln(1, arguments);
    }),
    (e.delayedCall = function (r, s, o, a) {
      return new e(s, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: a,
      });
    }),
    (e.fromTo = function (r, s, o) {
      return Ln(2, arguments);
    }),
    (e.set = function (r, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(r, s);
    }),
    (e.killTweensOf = function (r, s, o) {
      return Se.killTweensOf(r, s, o);
    }),
    e
  );
})(Jn);
Nt(Ie.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
St("staggerTo,staggerFrom,staggerFromTo", function (n) {
  Ie[n] = function () {
    var e = new mt(),
      t = oa.call(arguments, 0);
    return t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), e[n].apply(e, t);
  };
});
var Xa = function (e, t, i) {
    return (e[t] = i);
  },
  zc = function (e, t, i) {
    return e[t](i);
  },
  sg = function (e, t, i, r) {
    return e[t](r.fp, i);
  },
  og = function (e, t, i) {
    return e.setAttribute(t, i);
  },
  ja = function (e, t) {
    return Ee(e[t]) ? zc : Na(e[t]) && e.setAttribute ? og : Xa;
  },
  Rc = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  ag = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  Nc = function (e, t) {
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
  },
  Ua = function (e, t) {
    for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
  },
  lg = function (e, t, i, r) {
    for (var s = this._pt, o; s; )
      (o = s._next), s.p === r && s.modifier(e, t, i), (s = o);
  },
  ug = function (e) {
    for (var t = this._pt, i, r; t; )
      (r = t._next),
        (t.p === e && !t.op) || t.op === e
          ? fo(this, t, "_pt")
          : t.dep || (i = 1),
        (t = r);
    return !i;
  },
  cg = function (e, t, i, r) {
    r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
  },
  Fc = function (e) {
    for (var t = e._pt, i, r, s, o; t; ) {
      for (i = t._next, r = s; r && r.pr > t.pr; ) r = r._next;
      (t._prev = r ? r._prev : o) ? (t._prev._next = t) : (s = t),
        (t._next = r) ? (r._prev = t) : (o = t),
        (t = i);
    }
    e._pt = s;
  },
  xt = (function () {
    function n(t, i, r, s, o, a, l, u, c) {
      (this.t = i),
        (this.s = s),
        (this.c = o),
        (this.p = r),
        (this.r = a || Rc),
        (this.d = l || this),
        (this.set = u || Xa),
        (this.pr = c || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    var e = n.prototype;
    return (
      (e.modifier = function (i, r, s) {
        (this.mSet = this.mSet || this.set),
          (this.set = cg),
          (this.m = i),
          (this.mt = s),
          (this.tween = r);
      }),
      n
    );
  })();
St(
  $a +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (n) {
    return (qa[n] = 1);
  }
);
Rt.TweenMax = Rt.TweenLite = Ie;
Rt.TimelineLite = Rt.TimelineMax = mt;
Se = new mt({
  sortChildren: !1,
  defaults: nn,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
zt.stringFilter = Cc;
var _r = [],
  Ds = {},
  fg = [],
  Bl = 0,
  dg = 0,
  Lo = function (e) {
    return (Ds[e] || fg).map(function (t) {
      return t();
    });
  },
  ca = function () {
    var e = Date.now(),
      t = [];
    e - Bl > 2 &&
      (Lo("matchMediaInit"),
      _r.forEach(function (i) {
        var r = i.queries,
          s = i.conditions,
          o,
          a,
          l,
          u;
        for (a in r)
          (o = ai.matchMedia(r[a]).matches),
            o && (l = 1),
            o !== s[a] && ((s[a] = o), (u = 1));
        u && (i.revert(), l && t.push(i));
      }),
      Lo("matchMediaRevert"),
      t.forEach(function (i) {
        return i.onMatch(i, function (r) {
          return i.add(null, r);
        });
      }),
      (Bl = e),
      Lo("matchMedia"));
  },
  Bc = (function () {
    function n(t, i) {
      (this.selector = i && aa(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = dg++),
        t && this.add(t);
    }
    var e = n.prototype;
    return (
      (e.add = function (i, r, s) {
        Ee(i) && ((s = r), (r = i), (i = Ee));
        var o = this,
          a = function () {
            var u = ye,
              c = o.selector,
              f;
            return (
              u && u !== o && u.data.push(o),
              s && (o.selector = aa(s)),
              (ye = o),
              (f = r.apply(o, arguments)),
              Ee(f) && o._r.push(f),
              (ye = u),
              (o.selector = c),
              (o.isReverted = !1),
              f
            );
          };
        return (
          (o.last = a),
          i === Ee
            ? a(o, function (l) {
                return o.add(null, l);
              })
            : i
            ? (o[i] = a)
            : a
        );
      }),
      (e.ignore = function (i) {
        var r = ye;
        (ye = null), i(this), (ye = r);
      }),
      (e.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof n
              ? i.push.apply(i, r.getTweens())
              : r instanceof Ie &&
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
                for (var a = s.getTweens(), l = s.data.length, u; l--; )
                  (u = s.data[l]),
                    u.data === "isFlip" &&
                      (u.revert(),
                      u.getChildren(!0, !0, !1).forEach(function (c) {
                        return a.splice(a.indexOf(c), 1);
                      }));
                for (
                  a
                    .map(function (c) {
                      return {
                        g:
                          c._dur ||
                          c._delay ||
                          (c._sat && !c._sat.vars.immediateRender)
                            ? c.globalTime(0)
                            : -1 / 0,
                        t: c,
                      };
                    })
                    .sort(function (c, f) {
                      return f.g - c.g || -1 / 0;
                    })
                    .forEach(function (c) {
                      return c.t.revert(i);
                    }),
                    l = s.data.length;
                  l--;

                )
                  (u = s.data[l]),
                    u instanceof mt
                      ? u.data !== "nested" &&
                        (u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
                      : !(u instanceof Ie) && u.revert && u.revert(i);
                s._r.forEach(function (c) {
                  return c(i, s);
                }),
                  (s.isReverted = !0);
              })()
            : this.data.forEach(function (a) {
                return a.kill && a.kill();
              }),
          this.clear(),
          r)
        )
          for (var o = _r.length; o--; )
            _r[o].id === this.id && _r.splice(o, 1);
      }),
      (e.revert = function (i) {
        this.kill(i || {});
      }),
      n
    );
  })(),
  hg = (function () {
    function n(t) {
      (this.contexts = []), (this.scope = t), ye && ye.data.push(this);
    }
    var e = n.prototype;
    return (
      (e.add = function (i, r, s) {
        gi(i) || (i = { matches: i });
        var o = new Bc(0, s || this.scope),
          a = (o.conditions = {}),
          l,
          u,
          c;
        ye && !o.selector && (o.selector = ye.selector),
          this.contexts.push(o),
          (r = o.add("onMatch", r)),
          (o.queries = i);
        for (u in i)
          u === "all"
            ? (c = 1)
            : ((l = ai.matchMedia(i[u])),
              l &&
                (_r.indexOf(o) < 0 && _r.push(o),
                (a[u] = l.matches) && (c = 1),
                l.addListener
                  ? l.addListener(ca)
                  : l.addEventListener("change", ca)));
        return (
          c &&
            r(o, function (f) {
              return o.add(null, f);
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
      n
    );
  })(),
  Ks = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      t.forEach(function (r) {
        return Tc(r);
      });
    },
    timeline: function (e) {
      return new mt(e);
    },
    getTweensOf: function (e, t) {
      return Se.getTweensOf(e, t);
    },
    getProperty: function (e, t, i, r) {
      Ge(e) && (e = Yt(e)[0]);
      var s = gr(e || {}).get,
        o = i ? fc : cc;
      return (
        i === "native" && (i = ""),
        e &&
          (t
            ? o(((At[t] && At[t].get) || s)(e, t, i, r))
            : function (a, l, u) {
                return o(((At[a] && At[a].get) || s)(e, a, l, u));
              })
      );
    },
    quickSetter: function (e, t, i) {
      if (((e = Yt(e)), e.length > 1)) {
        var r = e.map(function (c) {
            return Et.quickSetter(c, t, i);
          }),
          s = r.length;
        return function (c) {
          for (var f = s; f--; ) r[f](c);
        };
      }
      e = e[0] || {};
      var o = At[t],
        a = gr(e),
        l = (a.harness && (a.harness.aliases || {})[t]) || t,
        u = o
          ? function (c) {
              var f = new o();
              (Gr._pt = 0),
                f.init(e, i ? c + i : c, Gr, 0, [e]),
                f.render(1, f),
                Gr._pt && Ua(1, Gr);
            }
          : a.set(e, l);
      return o
        ? u
        : function (c) {
            return u(e, l, i ? c + i : c, a, 1);
          };
    },
    quickTo: function (e, t, i) {
      var r,
        s = Et.to(
          e,
          Nt(
            ((r = {}), (r[t] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
            i || {}
          )
        ),
        o = function (l, u, c) {
          return s.resetTo(t, l, u, c);
        };
      return (o.tween = s), o;
    },
    isTweening: function (e) {
      return Se.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = vr(e.ease, nn.ease)), Il(nn, e || {});
    },
    config: function (e) {
      return Il(zt, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        i = e.effect,
        r = e.plugins,
        s = e.defaults,
        o = e.extendTimeline;
      (r || "").split(",").forEach(function (a) {
        return (
          a && !At[a] && !Rt[a] && Un(t + " effect requires " + a + " plugin.")
        );
      }),
        (Po[t] = function (a, l, u) {
          return i(Yt(a), Nt(l || {}, s), u);
        }),
        o &&
          (mt.prototype[t] = function (a, l, u) {
            return this.add(Po[t](a, gi(l) ? l : (u = l) && {}, this), u);
          });
    },
    registerEase: function (e, t) {
      Ze[e] = vr(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? vr(e, t) : Ze;
    },
    getById: function (e) {
      return Se.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var i = new mt(e),
        r,
        s;
      for (
        i.smoothChildTiming = bt(e.smoothChildTiming),
          Se.remove(i),
          i._dp = 0,
          i._time = i._tTime = Se._time,
          r = Se._first;
        r;

      )
        (s = r._next),
          (t ||
            !(
              !r._dur &&
              r instanceof Ie &&
              r.vars.onComplete === r._targets[0]
            )) &&
            ui(i, r, r._start - r._delay),
          (r = s);
      return ui(Se, i, 0), i;
    },
    context: function (e, t) {
      return e ? new Bc(e, t) : ye;
    },
    matchMedia: function (e) {
      return new hg(e);
    },
    matchMediaRefresh: function () {
      return (
        _r.forEach(function (e) {
          var t = e.conditions,
            i,
            r;
          for (r in t) t[r] && ((t[r] = !1), (i = 1));
          i && e.revert();
        }) || ca()
      );
    },
    addEventListener: function (e, t) {
      var i = Ds[e] || (Ds[e] = []);
      ~i.indexOf(t) || i.push(t);
    },
    removeEventListener: function (e, t) {
      var i = Ds[e],
        r = i && i.indexOf(t);
      r >= 0 && i.splice(r, 1);
    },
    utils: {
      wrap: Gp,
      wrapYoyo: Yp,
      distribute: _c,
      random: wc,
      snap: yc,
      normalize: Hp,
      getUnit: st,
      clamp: Vp,
      splitColor: Ec,
      toArray: Yt,
      selector: aa,
      mapRange: Sc,
      pipe: $p,
      unitize: Wp,
      interpolate: Xp,
      shuffle: vc,
    },
    install: sc,
    effects: Po,
    ticker: Lt,
    updateRoot: mt.updateRoot,
    plugins: At,
    globalTimeline: Se,
    core: {
      PropTween: xt,
      globals: oc,
      Tween: Ie,
      Timeline: mt,
      Animation: Jn,
      getCache: gr,
      _removeLinkedListItem: fo,
      reverting: function () {
        return Qe;
      },
      context: function (e) {
        return e && ye && (ye.data.push(e), (e._ctx = ye)), ye;
      },
      suppressOverwrites: function (e) {
        return (Ra = e);
      },
    },
  };
St("to,from,fromTo,delayedCall,set,killTweensOf", function (n) {
  return (Ks[n] = Ie[n]);
});
Lt.add(mt.updateRoot);
Gr = Ks.to({}, { duration: 0 });
var pg = function (e, t) {
    for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
      i = i._next;
    return i;
  },
  gg = function (e, t) {
    var i = e._targets,
      r,
      s,
      o;
    for (r in t)
      for (s = i.length; s--; )
        (o = e._ptLookup[s][r]),
          o &&
            (o = o.d) &&
            (o._pt && (o = pg(o, r)),
            o && o.modifier && o.modifier(t[r], e, i[s], r));
  },
  Do = function (e, t) {
    return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: function (r, s, o) {
        o._onInit = function (a) {
          var l, u;
          if (
            (Ge(s) &&
              ((l = {}),
              St(s, function (c) {
                return (l[c] = 1);
              }),
              (s = l)),
            t)
          ) {
            l = {};
            for (u in s) l[u] = t(s[u]);
            s = l;
          }
          gg(a, s);
        };
      },
    };
  },
  Et =
    Ks.registerPlugin(
      {
        name: "attr",
        init: function (e, t, i, r, s) {
          var o, a, l;
          this.tween = i;
          for (o in t)
            (l = e.getAttribute(o) || ""),
              (a = this.add(
                e,
                "setAttribute",
                (l || 0) + "",
                t[o],
                r,
                s,
                0,
                0,
                o
              )),
              (a.op = o),
              (a.b = l),
              this._props.push(o);
        },
        render: function (e, t) {
          for (var i = t._pt; i; )
            Qe ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (e, t) {
          for (var i = t.length; i--; )
            this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
        },
      },
      Do("roundProps", la),
      Do("modifiers"),
      Do("snap", yc)
    ) || Ks;
Ie.version = mt.version = Et.version = "3.13.0";
nc = 1;
Fa() && ln();
var Vl,
  Vi,
  Zr,
  Ka,
  hr,
  ql,
  Za,
  mg = function () {
    return typeof window < "u";
  },
  Ai = {},
  ur = 180 / Math.PI,
  Qr = Math.PI / 180,
  Nr = Math.atan2,
  $l = 1e8,
  Qa = /([A-Z])/g,
  vg = /(left|right|width|margin|padding|x)/i,
  _g = /[\s,\(]\S/,
  ci = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  fa = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  yg = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  },
  wg = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  },
  bg = function (e, t) {
    var i = t.s + t.c * e;
    t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  Vc = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  qc = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  },
  Sg = function (e, t, i) {
    return (e.style[t] = i);
  },
  xg = function (e, t, i) {
    return e.style.setProperty(t, i);
  },
  Tg = function (e, t, i) {
    return (e._gsap[t] = i);
  },
  Eg = function (e, t, i) {
    return (e._gsap.scaleX = e._gsap.scaleY = i);
  },
  kg = function (e, t, i, r, s) {
    var o = e._gsap;
    (o.scaleX = o.scaleY = i), o.renderTransform(s, o);
  },
  Cg = function (e, t, i, r, s) {
    var o = e._gsap;
    (o[t] = i), o.renderTransform(s, o);
  },
  xe = "transform",
  Tt = xe + "Origin",
  Pg = function n(e, t) {
    var i = this,
      r = this.target,
      s = r.style,
      o = r._gsap;
    if (e in Ai && s) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = ci[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (a) {
                return (i.tfm[a] = bi(r, a));
              })
            : (this.tfm[e] = o.x ? o[e] : bi(r, e)),
          e === Tt && (this.tfm.zOrigin = o.zOrigin);
      else
        return ci.transform.split(",").forEach(function (a) {
          return n.call(i, a, t);
        });
      if (this.props.indexOf(xe) >= 0) return;
      o.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(Tt, t, "")),
        (e = xe);
    }
    (s || t) && this.props.push(e, t, s[e]);
  },
  $c = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  Mg = function () {
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
              : e[s].replace(Qa, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (o in this.tfm) r[o] = this.tfm[o];
      r.svg &&
        (r.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        (s = Za()),
        (!s || !s.isStart) &&
          !i[xe] &&
          ($c(i),
          r.zOrigin &&
            i[Tt] &&
            ((i[Tt] += " " + r.zOrigin + "px"),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1));
    }
  },
  Wc = function (e, t) {
    var i = { target: e, props: [], revert: Mg, save: Pg };
    return (
      e._gsap || Et.core.getCache(e),
      t &&
        e.style &&
        e.nodeType &&
        t.split(",").forEach(function (r) {
          return i.save(r);
        }),
      i
    );
  },
  Hc,
  da = function (e, t) {
    var i = Vi.createElementNS
      ? Vi.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : Vi.createElement(e);
    return i && i.style ? i : Vi.createElement(e);
  },
  Xt = function n(e, t, i) {
    var r = getComputedStyle(e);
    return (
      r[t] ||
      r.getPropertyValue(t.replace(Qa, "-$1").toLowerCase()) ||
      r.getPropertyValue(t) ||
      (!i && n(e, un(t) || t, 1)) ||
      ""
    );
  },
  Wl = "O,Moz,ms,Ms,Webkit".split(","),
  un = function (e, t, i) {
    var r = t || hr,
      s = r.style,
      o = 5;
    if (e in s && !i) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      o-- && !(Wl[o] + e in s);

    );
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Wl[o] : "") + e;
  },
  ha = function () {
    mg() &&
      window.document &&
      ((Vl = window),
      (Vi = Vl.document),
      (Zr = Vi.documentElement),
      (hr = da("div") || { style: {} }),
      da("div"),
      (xe = un(xe)),
      (Tt = xe + "Origin"),
      (hr.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Hc = !!un("perspective")),
      (Za = Et.core.reverting),
      (Ka = 1));
  },
  Hl = function (e) {
    var t = e.ownerSVGElement,
      i = da(
        "svg",
        (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      r = e.cloneNode(!0),
      s;
    (r.style.display = "block"), i.appendChild(r), Zr.appendChild(i);
    try {
      s = r.getBBox();
    } catch {}
    return i.removeChild(r), Zr.removeChild(i), s;
  },
  Gl = function (e, t) {
    for (var i = t.length; i--; )
      if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
  },
  Gc = function (e) {
    var t, i;
    try {
      t = e.getBBox();
    } catch {
      (t = Hl(e)), (i = 1);
    }
    return (
      (t && (t.width || t.height)) || i || (t = Hl(e)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +Gl(e, ["x", "cx", "x1"]) || 0,
            y: +Gl(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  Yc = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Gc(e));
  },
  Er = function (e, t) {
    if (t) {
      var i = e.style,
        r;
      t in Ai && t !== Tt && (t = xe),
        i.removeProperty
          ? ((r = t.substr(0, 2)),
            (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
            i.removeProperty(
              r === "--" ? t : t.replace(Qa, "-$1").toLowerCase()
            ))
          : i.removeAttribute(t);
    }
  },
  qi = function (e, t, i, r, s, o) {
    var a = new xt(e._pt, t, i, 0, 1, o ? qc : Vc);
    return (e._pt = a), (a.b = r), (a.e = s), e._props.push(i), a;
  },
  Yl = { deg: 1, rad: 1, turn: 1 },
  Ag = { grid: 1, flex: 1 },
  ji = function n(e, t, i, r) {
    var s = parseFloat(i) || 0,
      o = (i + "").trim().substr((s + "").length) || "px",
      a = hr.style,
      l = vg.test(t),
      u = e.tagName.toLowerCase() === "svg",
      c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
      f = 100,
      d = r === "px",
      h = r === "%",
      p,
      g,
      v,
      w;
    if (r === o || !s || Yl[r] || Yl[o]) return s;
    if (
      (o !== "px" && !d && (s = n(e, t, i, "px")),
      (w = e.getCTM && Yc(e)),
      (h || o === "%") && (Ai[t] || ~t.indexOf("adius")))
    )
      return (
        (p = w ? e.getBBox()[l ? "width" : "height"] : e[c]),
        Me(h ? (s / p) * f : (s / 100) * p)
      );
    if (
      ((a[l ? "width" : "height"] = f + (d ? o : r)),
      (g =
        (r !== "rem" && ~t.indexOf("adius")) ||
        (r === "em" && e.appendChild && !u)
          ? e
          : e.parentNode),
      w && (g = (e.ownerSVGElement || {}).parentNode),
      (!g || g === Vi || !g.appendChild) && (g = Vi.body),
      (v = g._gsap),
      v && h && v.width && l && v.time === Lt.time && !v.uncache)
    )
      return Me((s / v.width) * f);
    if (h && (t === "height" || t === "width")) {
      var y = e.style[t];
      (e.style[t] = f + r), (p = e[c]), y ? (e.style[t] = y) : Er(e, t);
    } else
      (h || o === "%") &&
        !Ag[Xt(g, "display")] &&
        (a.position = Xt(e, "position")),
        g === e && (a.position = "static"),
        g.appendChild(hr),
        (p = hr[c]),
        g.removeChild(hr),
        (a.position = "absolute");
    return (
      l && h && ((v = gr(g)), (v.time = Lt.time), (v.width = g[c])),
      Me(d ? (p * s) / f : p && s ? (f / p) * s : 0)
    );
  },
  bi = function (e, t, i, r) {
    var s;
    return (
      Ka || ha(),
      t in ci &&
        t !== "transform" &&
        ((t = ci[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      Ai[t] && t !== "transform"
        ? ((s = ts(e, r)),
          (s =
            t !== "transformOrigin"
              ? s[t]
              : s.svg
              ? s.origin
              : Qs(Xt(e, Tt)) + " " + s.zOrigin + "px"))
        : ((s = e.style[t]),
          (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) &&
            (s =
              (Zs[t] && Zs[t](e, t, i)) ||
              Xt(e, t) ||
              lc(e, t) ||
              (t === "opacity" ? 1 : 0))),
      i && !~(s + "").trim().indexOf(" ") ? ji(e, t, s, i) + i : s
    );
  },
  Og = function (e, t, i, r) {
    if (!i || i === "none") {
      var s = un(t, e, 1),
        o = s && Xt(e, s, 1);
      o && o !== i
        ? ((t = s), (i = o))
        : t === "borderColor" && (i = Xt(e, "borderTopColor"));
    }
    var a = new xt(this._pt, e.style, t, 0, 1, Nc),
      l = 0,
      u = 0,
      c,
      f,
      d,
      h,
      p,
      g,
      v,
      w,
      y,
      _,
      m,
      b;
    if (
      ((a.b = i),
      (a.e = r),
      (i += ""),
      (r += ""),
      r.substring(0, 6) === "var(--" &&
        (r = Xt(e, r.substring(4, r.indexOf(")")))),
      r === "auto" &&
        ((g = e.style[t]),
        (e.style[t] = r),
        (r = Xt(e, t) || r),
        g ? (e.style[t] = g) : Er(e, t)),
      (c = [i, r]),
      Cc(c),
      (i = c[0]),
      (r = c[1]),
      (d = i.match(Hr) || []),
      (b = r.match(Hr) || []),
      b.length)
    ) {
      for (; (f = Hr.exec(r)); )
        (v = f[0]),
          (y = r.substring(l, f.index)),
          p
            ? (p = (p + 1) % 5)
            : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1),
          v !== (g = d[u++] || "") &&
            ((h = parseFloat(g) || 0),
            (m = g.substr((h + "").length)),
            v.charAt(1) === "=" && (v = Kr(h, v) + m),
            (w = parseFloat(v)),
            (_ = v.substr((w + "").length)),
            (l = Hr.lastIndex - _.length),
            _ ||
              ((_ = _ || zt.units[t] || m),
              l === r.length && ((r += _), (a.e += _))),
            m !== _ && (h = ji(e, t, g, _) || 0),
            (a._pt = {
              _next: a._pt,
              p: y || u === 1 ? y : ",",
              s: h,
              c: w - h,
              m: (p && p < 4) || t === "zIndex" ? Math.round : 0,
            }));
      a.c = l < r.length ? r.substring(l, r.length) : "";
    } else a.r = t === "display" && r === "none" ? qc : Vc;
    return ic.test(r) && (a.e = 0), (this._pt = a), a;
  },
  Xl = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  Lg = function (e) {
    var t = e.split(" "),
      i = t[0],
      r = t[1] || "50%";
    return (
      (i === "top" || i === "bottom" || r === "left" || r === "right") &&
        ((e = i), (i = r), (r = e)),
      (t[0] = Xl[i] || i),
      (t[1] = Xl[r] || r),
      t.join(" ")
    );
  },
  Dg = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var i = t.t,
        r = i.style,
        s = t.u,
        o = i._gsap,
        a,
        l,
        u;
      if (s === "all" || s === !0) (r.cssText = ""), (l = 1);
      else
        for (s = s.split(","), u = s.length; --u > -1; )
          (a = s[u]),
            Ai[a] && ((l = 1), (a = a === "transformOrigin" ? Tt : xe)),
            Er(i, a);
      l &&
        (Er(i, xe),
        o &&
          (o.svg && i.removeAttribute("transform"),
          (r.scale = r.rotate = r.translate = "none"),
          ts(i, 1),
          (o.uncache = 1),
          $c(r)));
    }
  },
  Zs = {
    clearProps: function (e, t, i, r, s) {
      if (s.data !== "isFromStart") {
        var o = (e._pt = new xt(e._pt, t, i, 0, 0, Dg));
        return (o.u = r), (o.pr = -10), (o.tween = s), e._props.push(i), 1;
      }
    },
  },
  es = [1, 0, 0, 1, 0, 0],
  Xc = {},
  jc = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  jl = function (e) {
    var t = Xt(e, xe);
    return jc(t) ? es : t.substr(7).match(tc).map(Me);
  },
  Ja = function (e, t) {
    var i = e._gsap || gr(e),
      r = e.style,
      s = jl(e),
      o,
      a,
      l,
      u;
    return i.svg && e.getAttribute("transform")
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
        s.join(",") === "1,0,0,1,0,0" ? es : s)
      : (s === es &&
          !e.offsetParent &&
          e !== Zr &&
          !i.svg &&
          ((l = r.display),
          (r.display = "block"),
          (o = e.parentNode),
          (!o || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
            ((u = 1), (a = e.nextElementSibling), Zr.appendChild(e)),
          (s = jl(e)),
          l ? (r.display = l) : Er(e, "display"),
          u &&
            (a
              ? o.insertBefore(e, a)
              : o
              ? o.appendChild(e)
              : Zr.removeChild(e))),
        t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  },
  pa = function (e, t, i, r, s, o) {
    var a = e._gsap,
      l = s || Ja(e, !0),
      u = a.xOrigin || 0,
      c = a.yOrigin || 0,
      f = a.xOffset || 0,
      d = a.yOffset || 0,
      h = l[0],
      p = l[1],
      g = l[2],
      v = l[3],
      w = l[4],
      y = l[5],
      _ = t.split(" "),
      m = parseFloat(_[0]) || 0,
      b = parseFloat(_[1]) || 0,
      E,
      k,
      x,
      M;
    i
      ? l !== es &&
        (k = h * v - p * g) &&
        ((x = m * (v / k) + b * (-g / k) + (g * y - v * w) / k),
        (M = m * (-p / k) + b * (h / k) - (h * y - p * w) / k),
        (m = x),
        (b = M))
      : ((E = Gc(e)),
        (m = E.x + (~_[0].indexOf("%") ? (m / 100) * E.width : m)),
        (b = E.y + (~(_[1] || _[0]).indexOf("%") ? (b / 100) * E.height : b))),
      r || (r !== !1 && a.smooth)
        ? ((w = m - u),
          (y = b - c),
          (a.xOffset = f + (w * h + y * g) - w),
          (a.yOffset = d + (w * p + y * v) - y))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = m),
      (a.yOrigin = b),
      (a.smooth = !!r),
      (a.origin = t),
      (a.originIsAbsolute = !!i),
      (e.style[Tt] = "0px 0px"),
      o &&
        (qi(o, a, "xOrigin", u, m),
        qi(o, a, "yOrigin", c, b),
        qi(o, a, "xOffset", f, a.xOffset),
        qi(o, a, "yOffset", d, a.yOffset)),
      e.setAttribute("data-svg-origin", m + " " + b);
  },
  ts = function (e, t) {
    var i = e._gsap || new Oc(e);
    if ("x" in i && !t && !i.uncache) return i;
    var r = e.style,
      s = i.scaleX < 0,
      o = "px",
      a = "deg",
      l = getComputedStyle(e),
      u = Xt(e, Tt) || "0",
      c,
      f,
      d,
      h,
      p,
      g,
      v,
      w,
      y,
      _,
      m,
      b,
      E,
      k,
      x,
      M,
      C,
      I,
      S,
      P,
      A,
      L,
      z,
      R,
      F,
      V,
      T,
      X,
      U,
      ue,
      ae,
      re;
    return (
      (c = f = d = g = v = w = y = _ = m = 0),
      (h = p = 1),
      (i.svg = !!(e.getCTM && Yc(e))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (r[xe] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[xe] !== "none" ? l[xe] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (k = Ja(e, i.svg)),
      i.svg &&
        (i.uncache
          ? ((F = e.getBBox()),
            (u = i.xOrigin - F.x + "px " + (i.yOrigin - F.y) + "px"),
            (R = ""))
          : (R = !t && e.getAttribute("data-svg-origin")),
        pa(e, R || u, !!R || i.originIsAbsolute, i.smooth !== !1, k)),
      (b = i.xOrigin || 0),
      (E = i.yOrigin || 0),
      k !== es &&
        ((I = k[0]),
        (S = k[1]),
        (P = k[2]),
        (A = k[3]),
        (c = L = k[4]),
        (f = z = k[5]),
        k.length === 6
          ? ((h = Math.sqrt(I * I + S * S)),
            (p = Math.sqrt(A * A + P * P)),
            (g = I || S ? Nr(S, I) * ur : 0),
            (y = P || A ? Nr(P, A) * ur + g : 0),
            y && (p *= Math.abs(Math.cos(y * Qr))),
            i.svg && ((c -= b - (b * I + E * P)), (f -= E - (b * S + E * A))))
          : ((re = k[6]),
            (ue = k[7]),
            (T = k[8]),
            (X = k[9]),
            (U = k[10]),
            (ae = k[11]),
            (c = k[12]),
            (f = k[13]),
            (d = k[14]),
            (x = Nr(re, U)),
            (v = x * ur),
            x &&
              ((M = Math.cos(-x)),
              (C = Math.sin(-x)),
              (R = L * M + T * C),
              (F = z * M + X * C),
              (V = re * M + U * C),
              (T = L * -C + T * M),
              (X = z * -C + X * M),
              (U = re * -C + U * M),
              (ae = ue * -C + ae * M),
              (L = R),
              (z = F),
              (re = V)),
            (x = Nr(-P, U)),
            (w = x * ur),
            x &&
              ((M = Math.cos(-x)),
              (C = Math.sin(-x)),
              (R = I * M - T * C),
              (F = S * M - X * C),
              (V = P * M - U * C),
              (ae = A * C + ae * M),
              (I = R),
              (S = F),
              (P = V)),
            (x = Nr(S, I)),
            (g = x * ur),
            x &&
              ((M = Math.cos(x)),
              (C = Math.sin(x)),
              (R = I * M + S * C),
              (F = L * M + z * C),
              (S = S * M - I * C),
              (z = z * M - L * C),
              (I = R),
              (L = F)),
            v &&
              Math.abs(v) + Math.abs(g) > 359.9 &&
              ((v = g = 0), (w = 180 - w)),
            (h = Me(Math.sqrt(I * I + S * S + P * P))),
            (p = Me(Math.sqrt(z * z + re * re))),
            (x = Nr(L, z)),
            (y = Math.abs(x) > 2e-4 ? x * ur : 0),
            (m = ae ? 1 / (ae < 0 ? -ae : ae) : 0)),
        i.svg &&
          ((R = e.getAttribute("transform")),
          (i.forceCSS = e.setAttribute("transform", "") || !jc(Xt(e, xe))),
          R && e.setAttribute("transform", R))),
      Math.abs(y) > 90 &&
        Math.abs(y) < 270 &&
        (s
          ? ((h *= -1), (y += g <= 0 ? 180 : -180), (g += g <= 0 ? 180 : -180))
          : ((p *= -1), (y += y <= 0 ? 180 : -180))),
      (t = t || i.uncache),
      (i.x =
        c -
        ((i.xPercent =
          c &&
          ((!t && i.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
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
      (i.z = d + o),
      (i.scaleX = Me(h)),
      (i.scaleY = Me(p)),
      (i.rotation = Me(g) + a),
      (i.rotationX = Me(v) + a),
      (i.rotationY = Me(w) + a),
      (i.skewX = y + a),
      (i.skewY = _ + a),
      (i.transformPerspective = m + o),
      (i.zOrigin = parseFloat(u.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
        (r[Tt] = Qs(u)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = zt.force3D),
      (i.renderTransform = i.svg ? zg : Hc ? Uc : Ig),
      (i.uncache = 0),
      i
    );
  },
  Qs = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  Io = function (e, t, i) {
    var r = st(t);
    return Me(parseFloat(t) + parseFloat(ji(e, "x", i + "px", r))) + r;
  },
  Ig = function (e, t) {
    (t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      Uc(e, t);
  },
  or = "0deg",
  _n = "0px",
  ar = ") ",
  Uc = function (e, t) {
    var i = t || this,
      r = i.xPercent,
      s = i.yPercent,
      o = i.x,
      a = i.y,
      l = i.z,
      u = i.rotation,
      c = i.rotationY,
      f = i.rotationX,
      d = i.skewX,
      h = i.skewY,
      p = i.scaleX,
      g = i.scaleY,
      v = i.transformPerspective,
      w = i.force3D,
      y = i.target,
      _ = i.zOrigin,
      m = "",
      b = (w === "auto" && e && e !== 1) || w === !0;
    if (_ && (f !== or || c !== or)) {
      var E = parseFloat(c) * Qr,
        k = Math.sin(E),
        x = Math.cos(E),
        M;
      (E = parseFloat(f) * Qr),
        (M = Math.cos(E)),
        (o = Io(y, o, k * M * -_)),
        (a = Io(y, a, -Math.sin(E) * -_)),
        (l = Io(y, l, x * M * -_ + _));
    }
    v !== _n && (m += "perspective(" + v + ar),
      (r || s) && (m += "translate(" + r + "%, " + s + "%) "),
      (b || o !== _n || a !== _n || l !== _n) &&
        (m +=
          l !== _n || b
            ? "translate3d(" + o + ", " + a + ", " + l + ") "
            : "translate(" + o + ", " + a + ar),
      u !== or && (m += "rotate(" + u + ar),
      c !== or && (m += "rotateY(" + c + ar),
      f !== or && (m += "rotateX(" + f + ar),
      (d !== or || h !== or) && (m += "skew(" + d + ", " + h + ar),
      (p !== 1 || g !== 1) && (m += "scale(" + p + ", " + g + ar),
      (y.style[xe] = m || "translate(0, 0)");
  },
  zg = function (e, t) {
    var i = t || this,
      r = i.xPercent,
      s = i.yPercent,
      o = i.x,
      a = i.y,
      l = i.rotation,
      u = i.skewX,
      c = i.skewY,
      f = i.scaleX,
      d = i.scaleY,
      h = i.target,
      p = i.xOrigin,
      g = i.yOrigin,
      v = i.xOffset,
      w = i.yOffset,
      y = i.forceCSS,
      _ = parseFloat(o),
      m = parseFloat(a),
      b,
      E,
      k,
      x,
      M;
    (l = parseFloat(l)),
      (u = parseFloat(u)),
      (c = parseFloat(c)),
      c && ((c = parseFloat(c)), (u += c), (l += c)),
      l || u
        ? ((l *= Qr),
          (u *= Qr),
          (b = Math.cos(l) * f),
          (E = Math.sin(l) * f),
          (k = Math.sin(l - u) * -d),
          (x = Math.cos(l - u) * d),
          u &&
            ((c *= Qr),
            (M = Math.tan(u - c)),
            (M = Math.sqrt(1 + M * M)),
            (k *= M),
            (x *= M),
            c &&
              ((M = Math.tan(c)),
              (M = Math.sqrt(1 + M * M)),
              (b *= M),
              (E *= M))),
          (b = Me(b)),
          (E = Me(E)),
          (k = Me(k)),
          (x = Me(x)))
        : ((b = f), (x = d), (E = k = 0)),
      ((_ && !~(o + "").indexOf("px")) || (m && !~(a + "").indexOf("px"))) &&
        ((_ = ji(h, "x", o, "px")), (m = ji(h, "y", a, "px"))),
      (p || g || v || w) &&
        ((_ = Me(_ + p - (p * b + g * k) + v)),
        (m = Me(m + g - (p * E + g * x) + w))),
      (r || s) &&
        ((M = h.getBBox()),
        (_ = Me(_ + (r / 100) * M.width)),
        (m = Me(m + (s / 100) * M.height))),
      (M =
        "matrix(" + b + "," + E + "," + k + "," + x + "," + _ + "," + m + ")"),
      h.setAttribute("transform", M),
      y && (h.style[xe] = M);
  },
  Rg = function (e, t, i, r, s) {
    var o = 360,
      a = Ge(s),
      l = parseFloat(s) * (a && ~s.indexOf("rad") ? ur : 1),
      u = l - r,
      c = r + u + "deg",
      f,
      d;
    return (
      a &&
        ((f = s.split("_")[1]),
        f === "short" &&
          ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -360)),
        f === "cw" && u < 0
          ? (u = ((u + o * $l) % o) - ~~(u / o) * o)
          : f === "ccw" && u > 0 && (u = ((u - o * $l) % o) - ~~(u / o) * o)),
      (e._pt = d = new xt(e._pt, t, i, r, u, yg)),
      (d.e = c),
      (d.u = "deg"),
      e._props.push(i),
      d
    );
  },
  Ul = function (e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  },
  Ng = function (e, t, i) {
    var r = Ul({}, i._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      o = i.style,
      a,
      l,
      u,
      c,
      f,
      d,
      h,
      p;
    r.svg
      ? ((u = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (o[xe] = t),
        (a = ts(i, 1)),
        Er(i, xe),
        i.setAttribute("transform", u))
      : ((u = getComputedStyle(i)[xe]),
        (o[xe] = t),
        (a = ts(i, 1)),
        (o[xe] = u));
    for (l in Ai)
      (u = r[l]),
        (c = a[l]),
        u !== c &&
          s.indexOf(l) < 0 &&
          ((h = st(u)),
          (p = st(c)),
          (f = h !== p ? ji(i, l, u, p) : parseFloat(u)),
          (d = parseFloat(c)),
          (e._pt = new xt(e._pt, a, l, f, d - f, fa)),
          (e._pt.u = p || 0),
          e._props.push(l));
    Ul(a, r);
  };
St("padding,margin,Width,Radius", function (n, e) {
  var t = "Top",
    i = "Right",
    r = "Bottom",
    s = "Left",
    o = (e < 3 ? [t, i, r, s] : [t + s, t + i, r + i, r + s]).map(function (a) {
      return e < 2 ? n + a : "border" + a + n;
    });
  Zs[e > 1 ? "border" + n : n] = function (a, l, u, c, f) {
    var d, h;
    if (arguments.length < 4)
      return (
        (d = o.map(function (p) {
          return bi(a, p, u);
        })),
        (h = d.join(" ")),
        h.split(d[0]).length === 5 ? d[0] : h
      );
    (d = (c + "").split(" ")),
      (h = {}),
      o.forEach(function (p, g) {
        return (h[p] = d[g] = d[g] || d[((g - 1) / 2) | 0]);
      }),
      a.init(l, h, f);
  };
});
var Kc = {
  name: "css",
  register: ha,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, i, r, s) {
    var o = this._props,
      a = e.style,
      l = i.vars.startAt,
      u,
      c,
      f,
      d,
      h,
      p,
      g,
      v,
      w,
      y,
      _,
      m,
      b,
      E,
      k,
      x;
    Ka || ha(),
      (this.styles = this.styles || Wc(e)),
      (x = this.styles.props),
      (this.tween = i);
    for (g in t)
      if (g !== "autoRound" && ((c = t[g]), !(At[g] && Lc(g, t, i, r, e, s)))) {
        if (
          ((h = typeof c),
          (p = Zs[g]),
          h === "function" && ((c = c.call(i, r, e, s)), (h = typeof c)),
          h === "string" && ~c.indexOf("random(") && (c = Zn(c)),
          p)
        )
          p(this, e, g, c, i) && (k = 1);
        else if (g.substr(0, 2) === "--")
          (u = (getComputedStyle(e).getPropertyValue(g) + "").trim()),
            (c += ""),
            (Gi.lastIndex = 0),
            Gi.test(u) || ((v = st(u)), (w = st(c))),
            w ? v !== w && (u = ji(e, g, u, w) + w) : v && (c += v),
            this.add(a, "setProperty", u, c, r, s, 0, 0, g),
            o.push(g),
            x.push(g, 0, a[g]);
        else if (h !== "undefined") {
          if (
            (l && g in l
              ? ((u = typeof l[g] == "function" ? l[g].call(i, r, e, s) : l[g]),
                Ge(u) && ~u.indexOf("random(") && (u = Zn(u)),
                st(u + "") ||
                  u === "auto" ||
                  (u += zt.units[g] || st(bi(e, g)) || ""),
                (u + "").charAt(1) === "=" && (u = bi(e, g)))
              : (u = bi(e, g)),
            (d = parseFloat(u)),
            (y = h === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
            y && (c = c.substr(2)),
            (f = parseFloat(c)),
            g in ci &&
              (g === "autoAlpha" &&
                (d === 1 && bi(e, "visibility") === "hidden" && f && (d = 0),
                x.push("visibility", 0, a.visibility),
                qi(
                  this,
                  a,
                  "visibility",
                  d ? "inherit" : "hidden",
                  f ? "inherit" : "hidden",
                  !f
                )),
              g !== "scale" &&
                g !== "transform" &&
                ((g = ci[g]), ~g.indexOf(",") && (g = g.split(",")[0]))),
            (_ = g in Ai),
            _)
          ) {
            if (
              (this.styles.save(g),
              h === "string" &&
                c.substring(0, 6) === "var(--" &&
                ((c = Xt(e, c.substring(4, c.indexOf(")")))),
                (f = parseFloat(c))),
              m ||
                ((b = e._gsap),
                (b.renderTransform && !t.parseTransform) ||
                  ts(e, t.parseTransform),
                (E = t.smoothOrigin !== !1 && b.smooth),
                (m = this._pt =
                  new xt(this._pt, a, xe, 0, 1, b.renderTransform, b, 0, -1)),
                (m.dep = 1)),
              g === "scale")
            )
              (this._pt = new xt(
                this._pt,
                b,
                "scaleY",
                b.scaleY,
                (y ? Kr(b.scaleY, y + f) : f) - b.scaleY || 0,
                fa
              )),
                (this._pt.u = 0),
                o.push("scaleY", g),
                (g += "X");
            else if (g === "transformOrigin") {
              x.push(Tt, 0, a[Tt]),
                (c = Lg(c)),
                b.svg
                  ? pa(e, c, 0, E, 0, this)
                  : ((w = parseFloat(c.split(" ")[2]) || 0),
                    w !== b.zOrigin && qi(this, b, "zOrigin", b.zOrigin, w),
                    qi(this, a, g, Qs(u), Qs(c)));
              continue;
            } else if (g === "svgOrigin") {
              pa(e, c, 1, E, 0, this);
              continue;
            } else if (g in Xc) {
              Rg(this, b, g, d, y ? Kr(d, y + c) : c);
              continue;
            } else if (g === "smoothOrigin") {
              qi(this, b, "smooth", b.smooth, c);
              continue;
            } else if (g === "force3D") {
              b[g] = c;
              continue;
            } else if (g === "transform") {
              Ng(this, c, e);
              continue;
            }
          } else g in a || (g = un(g) || g);
          if (_ || ((f || f === 0) && (d || d === 0) && !_g.test(c) && g in a))
            (v = (u + "").substr((d + "").length)),
              f || (f = 0),
              (w = st(c) || (g in zt.units ? zt.units[g] : v)),
              v !== w && (d = ji(e, g, u, w)),
              (this._pt = new xt(
                this._pt,
                _ ? b : a,
                g,
                d,
                (y ? Kr(d, y + f) : f) - d,
                !_ && (w === "px" || g === "zIndex") && t.autoRound !== !1
                  ? bg
                  : fa
              )),
              (this._pt.u = w || 0),
              v !== w && w !== "%" && ((this._pt.b = u), (this._pt.r = wg));
          else if (g in a) Og.call(this, e, g, u, y ? y + c : c);
          else if (g in e) this.add(e, g, u || e[g], y ? y + c : c, r, s);
          else if (g !== "parseTransform") {
            Va(g, c);
            continue;
          }
          _ ||
            (g in a
              ? x.push(g, 0, a[g])
              : typeof e[g] == "function"
              ? x.push(g, 2, e[g]())
              : x.push(g, 1, u || e[g])),
            o.push(g);
        }
      }
    k && Fc(this);
  },
  render: function (e, t) {
    if (t.tween._time || !Za())
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    else t.styles.revert();
  },
  get: bi,
  aliases: ci,
  getSetter: function (e, t, i) {
    var r = ci[t];
    return (
      r && r.indexOf(",") < 0 && (t = r),
      t in Ai && t !== Tt && (e._gsap.x || bi(e, "x"))
        ? i && ql === i
          ? t === "scale"
            ? Eg
            : Tg
          : (ql = i || {}) && (t === "scale" ? kg : Cg)
        : e.style && !Na(e.style[t])
        ? Sg
        : ~t.indexOf("-")
        ? xg
        : ja(e, t)
    );
  },
  core: { _removeProperty: Er, _getMatrix: Ja },
};
Et.utils.checkPrefix = un;
Et.core.getStyleSaver = Wc;
(function (n, e, t, i) {
  var r = St(n + "," + e + "," + t, function (s) {
    Ai[s] = 1;
  });
  St(e, function (s) {
    (zt.units[s] = "deg"), (Xc[s] = 1);
  }),
    (ci[r[13]] = n + "," + e),
    St(i, function (s) {
      var o = s.split(":");
      ci[o[1]] = r[o[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
St(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (n) {
    zt.units[n] = "px";
  }
);
Et.registerPlugin(Kc);
var D = Et.registerPlugin(Kc) || Et;
function Fg(n, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(n, i.key, i);
  }
}
function Bg(n, e, t) {
  return e && Fg(n.prototype, e), n;
}
var lt,
  Is,
  Dt,
  $i,
  Wi,
  Jr,
  Zc,
  cr,
  In,
  Qc,
  xi,
  ti,
  Jc,
  ef = function () {
    return (
      lt ||
      (typeof window < "u" && (lt = window.gsap) && lt.registerPlugin && lt)
    );
  },
  tf = 1,
  Yr = [],
  ie = [],
  pi = [],
  zn = Date.now,
  ga = function (e, t) {
    return t;
  },
  Vg = function () {
    var e = In.core,
      t = e.bridge || {},
      i = e._scrollers,
      r = e._proxies;
    i.push.apply(i, ie),
      r.push.apply(r, pi),
      (ie = i),
      (pi = r),
      (ga = function (o, a) {
        return t[o](a);
      });
  },
  Yi = function (e, t) {
    return ~pi.indexOf(e) && pi[pi.indexOf(e) + 1][t];
  },
  Rn = function (e) {
    return !!~Qc.indexOf(e);
  },
  ft = function (e, t, i, r, s) {
    return e.addEventListener(t, i, { passive: r !== !1, capture: !!s });
  },
  ct = function (e, t, i, r) {
    return e.removeEventListener(t, i, !!r);
  },
  hs = "scrollLeft",
  ps = "scrollTop",
  ma = function () {
    return (xi && xi.isPressed) || ie.cache++;
  },
  Js = function (e, t) {
    var i = function r(s) {
      if (s || s === 0) {
        tf && (Dt.history.scrollRestoration = "manual");
        var o = xi && xi.isPressed;
        (s = r.v = Math.round(s) || (xi && xi.iOS ? 1 : 0)),
          e(s),
          (r.cacheID = ie.cache),
          o && ga("ss", s);
      } else
        (t || ie.cache !== r.cacheID || ga("ref")) &&
          ((r.cacheID = ie.cache), (r.v = e()));
      return r.v + r.offset;
    };
    return (i.offset = 0), e && i;
  },
  vt = {
    s: hs,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Js(function (n) {
      return arguments.length
        ? Dt.scrollTo(n, Fe.sc())
        : Dt.pageXOffset || $i[hs] || Wi[hs] || Jr[hs] || 0;
    }),
  },
  Fe = {
    s: ps,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: vt,
    sc: Js(function (n) {
      return arguments.length
        ? Dt.scrollTo(vt.sc(), n)
        : Dt.pageYOffset || $i[ps] || Wi[ps] || Jr[ps] || 0;
    }),
  },
  yt = function (e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || lt.utils.toArray)(e)[0] ||
      (typeof e == "string" && lt.config().nullTargetWarn !== !1
        ? void 0
        : null)
    );
  },
  qg = function (e, t) {
    for (var i = t.length; i--; ) if (t[i] === e || t[i].contains(e)) return !0;
    return !1;
  },
  Ui = function (e, t) {
    var i = t.s,
      r = t.sc;
    Rn(e) && (e = $i.scrollingElement || Wi);
    var s = ie.indexOf(e),
      o = r === Fe.sc ? 1 : 2;
    !~s && (s = ie.push(e) - 1), ie[s + o] || ft(e, "scroll", ma);
    var a = ie[s + o],
      l =
        a ||
        (ie[s + o] =
          Js(Yi(e, i), !0) ||
          (Rn(e)
            ? r
            : Js(function (u) {
                return arguments.length ? (e[i] = u) : e[i];
              })));
    return (
      (l.target = e),
      a || (l.smooth = lt.getProperty(e, "scrollBehavior") === "smooth"),
      l
    );
  },
  va = function (e, t, i) {
    var r = e,
      s = e,
      o = zn(),
      a = o,
      l = t || 50,
      u = Math.max(500, l * 3),
      c = function (p, g) {
        var v = zn();
        g || v - o > l
          ? ((s = r), (r = p), (a = o), (o = v))
          : i
          ? (r += p)
          : (r = s + ((p - s) / (v - a)) * (o - a));
      },
      f = function () {
        (s = r = i ? 0 : r), (a = o = 0);
      },
      d = function (p) {
        var g = a,
          v = s,
          w = zn();
        return (
          (p || p === 0) && p !== r && c(p),
          o === a || w - a > u
            ? 0
            : ((r + (i ? v : -v)) / ((i ? w : o) - g)) * 1e3
        );
      };
    return { update: c, reset: f, getVelocity: d };
  },
  yn = function (e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  Kl = function (e) {
    var t = Math.max.apply(Math, e),
      i = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(i) ? t : i;
  },
  rf = function () {
    (In = lt.core.globals().ScrollTrigger), In && In.core && Vg();
  },
  nf = function (e) {
    return (
      (lt = e || ef()),
      !Is &&
        lt &&
        typeof document < "u" &&
        document.body &&
        ((Dt = window),
        ($i = document),
        (Wi = $i.documentElement),
        (Jr = $i.body),
        (Qc = [Dt, $i, Wi, Jr]),
        (Jc = lt.core.context || function () {}),
        (cr = "onpointerenter" in Jr ? "pointer" : "mouse"),
        (Zc = Ae.isTouch =
          Dt.matchMedia &&
          Dt.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Dt ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (ti = Ae.eventTypes =
          (
            "ontouchstart" in Wi
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Wi
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (tf = 0);
        }, 500),
        rf(),
        (Is = 1)),
      Is
    );
  };
vt.op = Fe;
ie.cache = 0;
var Ae = (function () {
  function n(t) {
    this.init(t);
  }
  var e = n.prototype;
  return (
    (e.init = function (i) {
      Is || nf(lt), In || rf();
      var r = i.tolerance,
        s = i.dragMinimum,
        o = i.type,
        a = i.target,
        l = i.lineHeight,
        u = i.debounce,
        c = i.preventDefault,
        f = i.onStop,
        d = i.onStopDelay,
        h = i.ignore,
        p = i.wheelSpeed,
        g = i.event,
        v = i.onDragStart,
        w = i.onDragEnd,
        y = i.onDrag,
        _ = i.onPress,
        m = i.onRelease,
        b = i.onRight,
        E = i.onLeft,
        k = i.onUp,
        x = i.onDown,
        M = i.onChangeX,
        C = i.onChangeY,
        I = i.onChange,
        S = i.onToggleX,
        P = i.onToggleY,
        A = i.onHover,
        L = i.onHoverEnd,
        z = i.onMove,
        R = i.ignoreCheck,
        F = i.isNormalizer,
        V = i.onGestureStart,
        T = i.onGestureEnd,
        X = i.onWheel,
        U = i.onEnable,
        ue = i.onDisable,
        ae = i.onClick,
        re = i.scrollSpeed,
        J = i.capture,
        fe = i.allowClicks,
        pe = i.lockAxis,
        Oe = i.onLockAxis;
      (this.target = a = yt(a) || Wi),
        (this.vars = i),
        h && (h = lt.utils.toArray(h)),
        (r = r || 1e-9),
        (s = s || 0),
        (p = p || 1),
        (re = re || 1),
        (o = o || "wheel,touch,pointer"),
        (u = u !== !1),
        l || (l = parseFloat(Dt.getComputedStyle(Jr).lineHeight) || 22);
      var Be,
        me,
        Ve,
        H,
        ne,
        Xe,
        je,
        O = this,
        ke = 0,
        Ut = 0,
        Bt = i.passive || (!c && i.passive !== !1),
        q = Ui(a, vt),
        Vt = Ui(a, Fe),
        Oi = q(),
        er = Vt(),
        qe =
          ~o.indexOf("touch") &&
          !~o.indexOf("pointer") &&
          ti[0] === "pointerdown",
        Li = Rn(a),
        Ce = a.ownerDocument || $i,
        Kt = [0, 0, 0],
        qt = [0, 0, 0],
        vi = 0,
        hn = function () {
          return (vi = zn());
        },
        Le = function (j, le) {
          return (
            ((O.event = j) && h && qg(j.target, h)) ||
            (le && qe && j.pointerType !== "touch") ||
            (R && R(j, le))
          );
        },
        as = function () {
          O._vx.reset(), O._vy.reset(), me.pause(), f && f(O);
        },
        _i = function () {
          var j = (O.deltaX = Kl(Kt)),
            le = (O.deltaY = Kl(qt)),
            N = Math.abs(j) >= r,
            K = Math.abs(le) >= r;
          I && (N || K) && I(O, j, le, Kt, qt),
            N &&
              (b && O.deltaX > 0 && b(O),
              E && O.deltaX < 0 && E(O),
              M && M(O),
              S && O.deltaX < 0 != ke < 0 && S(O),
              (ke = O.deltaX),
              (Kt[0] = Kt[1] = Kt[2] = 0)),
            K &&
              (x && O.deltaY > 0 && x(O),
              k && O.deltaY < 0 && k(O),
              C && C(O),
              P && O.deltaY < 0 != Ut < 0 && P(O),
              (Ut = O.deltaY),
              (qt[0] = qt[1] = qt[2] = 0)),
            (H || Ve) &&
              (z && z(O),
              Ve && (v && Ve === 1 && v(O), y && y(O), (Ve = 0)),
              (H = !1)),
            Xe && !(Xe = !1) && Oe && Oe(O),
            ne && (X(O), (ne = !1)),
            (Be = 0);
        },
        Dr = function (j, le, N) {
          (Kt[N] += j),
            (qt[N] += le),
            O._vx.update(j),
            O._vy.update(le),
            u ? Be || (Be = requestAnimationFrame(_i)) : _i();
        },
        Ir = function (j, le) {
          pe &&
            !je &&
            ((O.axis = je = Math.abs(j) > Math.abs(le) ? "x" : "y"), (Xe = !0)),
            je !== "y" && ((Kt[2] += j), O._vx.update(j, !0)),
            je !== "x" && ((qt[2] += le), O._vy.update(le, !0)),
            u ? Be || (Be = requestAnimationFrame(_i)) : _i();
        },
        Di = function (j) {
          if (!Le(j, 1)) {
            j = yn(j, c);
            var le = j.clientX,
              N = j.clientY,
              K = le - O.x,
              G = N - O.y,
              Z = O.isDragging;
            (O.x = le),
              (O.y = N),
              (Z ||
                ((K || G) &&
                  (Math.abs(O.startX - le) >= s ||
                    Math.abs(O.startY - N) >= s))) &&
                ((Ve = Z ? 2 : 1), Z || (O.isDragging = !0), Ir(K, G));
          }
        },
        tr = (O.onPress = function (Q) {
          Le(Q, 1) ||
            (Q && Q.button) ||
            ((O.axis = je = null),
            me.pause(),
            (O.isPressed = !0),
            (Q = yn(Q)),
            (ke = Ut = 0),
            (O.startX = O.x = Q.clientX),
            (O.startY = O.y = Q.clientY),
            O._vx.reset(),
            O._vy.reset(),
            ft(F ? a : Ce, ti[1], Di, Bt, !0),
            (O.deltaX = O.deltaY = 0),
            _ && _(O));
        }),
        se = (O.onRelease = function (Q) {
          if (!Le(Q, 1)) {
            ct(F ? a : Ce, ti[1], Di, !0);
            var j = !isNaN(O.y - O.startY),
              le = O.isDragging,
              N =
                le &&
                (Math.abs(O.x - O.startX) > 3 || Math.abs(O.y - O.startY) > 3),
              K = yn(Q);
            !N &&
              j &&
              (O._vx.reset(),
              O._vy.reset(),
              c &&
                fe &&
                lt.delayedCall(0.08, function () {
                  if (zn() - vi > 300 && !Q.defaultPrevented) {
                    if (Q.target.click) Q.target.click();
                    else if (Ce.createEvent) {
                      var G = Ce.createEvent("MouseEvents");
                      G.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Dt,
                        1,
                        K.screenX,
                        K.screenY,
                        K.clientX,
                        K.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        Q.target.dispatchEvent(G);
                    }
                  }
                })),
              (O.isDragging = O.isGesturing = O.isPressed = !1),
              f && le && !F && me.restart(!0),
              Ve && _i(),
              w && le && w(O),
              m && m(O, N);
          }
        }),
        ir = function (j) {
          return (
            j.touches &&
            j.touches.length > 1 &&
            (O.isGesturing = !0) &&
            V(j, O.isDragging)
          );
        },
        Zt = function () {
          return (O.isGesturing = !1) || T(O);
        },
        Qt = function (j) {
          if (!Le(j)) {
            var le = q(),
              N = Vt();
            Dr((le - Oi) * re, (N - er) * re, 1),
              (Oi = le),
              (er = N),
              f && me.restart(!0);
          }
        },
        Jt = function (j) {
          if (!Le(j)) {
            (j = yn(j, c)), X && (ne = !0);
            var le =
              (j.deltaMode === 1 ? l : j.deltaMode === 2 ? Dt.innerHeight : 1) *
              p;
            Dr(j.deltaX * le, j.deltaY * le, 0), f && !F && me.restart(!0);
          }
        },
        rr = function (j) {
          if (!Le(j)) {
            var le = j.clientX,
              N = j.clientY,
              K = le - O.x,
              G = N - O.y;
            (O.x = le),
              (O.y = N),
              (H = !0),
              f && me.restart(!0),
              (K || G) && Ir(K, G);
          }
        },
        zr = function (j) {
          (O.event = j), A(O);
        },
        yi = function (j) {
          (O.event = j), L(O);
        },
        pn = function (j) {
          return Le(j) || (yn(j, c) && ae(O));
        };
      (me = O._dc = lt.delayedCall(d || 0.25, as).pause()),
        (O.deltaX = O.deltaY = 0),
        (O._vx = va(0, 50, !0)),
        (O._vy = va(0, 50, !0)),
        (O.scrollX = q),
        (O.scrollY = Vt),
        (O.isDragging = O.isGesturing = O.isPressed = !1),
        Jc(this),
        (O.enable = function (Q) {
          return (
            O.isEnabled ||
              (ft(Li ? Ce : a, "scroll", ma),
              o.indexOf("scroll") >= 0 && ft(Li ? Ce : a, "scroll", Qt, Bt, J),
              o.indexOf("wheel") >= 0 && ft(a, "wheel", Jt, Bt, J),
              ((o.indexOf("touch") >= 0 && Zc) || o.indexOf("pointer") >= 0) &&
                (ft(a, ti[0], tr, Bt, J),
                ft(Ce, ti[2], se),
                ft(Ce, ti[3], se),
                fe && ft(a, "click", hn, !0, !0),
                ae && ft(a, "click", pn),
                V && ft(Ce, "gesturestart", ir),
                T && ft(Ce, "gestureend", Zt),
                A && ft(a, cr + "enter", zr),
                L && ft(a, cr + "leave", yi),
                z && ft(a, cr + "move", rr)),
              (O.isEnabled = !0),
              (O.isDragging = O.isGesturing = O.isPressed = H = Ve = !1),
              O._vx.reset(),
              O._vy.reset(),
              (Oi = q()),
              (er = Vt()),
              Q && Q.type && tr(Q),
              U && U(O)),
            O
          );
        }),
        (O.disable = function () {
          O.isEnabled &&
            (Yr.filter(function (Q) {
              return Q !== O && Rn(Q.target);
            }).length || ct(Li ? Ce : a, "scroll", ma),
            O.isPressed &&
              (O._vx.reset(), O._vy.reset(), ct(F ? a : Ce, ti[1], Di, !0)),
            ct(Li ? Ce : a, "scroll", Qt, J),
            ct(a, "wheel", Jt, J),
            ct(a, ti[0], tr, J),
            ct(Ce, ti[2], se),
            ct(Ce, ti[3], se),
            ct(a, "click", hn, !0),
            ct(a, "click", pn),
            ct(Ce, "gesturestart", ir),
            ct(Ce, "gestureend", Zt),
            ct(a, cr + "enter", zr),
            ct(a, cr + "leave", yi),
            ct(a, cr + "move", rr),
            (O.isEnabled = O.isPressed = O.isDragging = !1),
            ue && ue(O));
        }),
        (O.kill = O.revert =
          function () {
            O.disable();
            var Q = Yr.indexOf(O);
            Q >= 0 && Yr.splice(Q, 1), xi === O && (xi = 0);
          }),
        Yr.push(O),
        F && Rn(a) && (xi = O),
        O.enable(g);
    }),
    Bg(n, [
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
    n
  );
})();
Ae.version = "3.13.0";
Ae.create = function (n) {
  return new Ae(n);
};
Ae.register = nf;
Ae.getAll = function () {
  return Yr.slice();
};
Ae.getById = function (n) {
  return Yr.filter(function (e) {
    return e.vars.id === n;
  })[0];
};
ef() && lt.registerPlugin(Ae);
var B,
  $r,
  te,
  ge,
  Ot,
  ce,
  el,
  eo,
  is,
  Nn,
  Tn,
  gs,
  it,
  go,
  _a,
  pt,
  Zl,
  Ql,
  Wr,
  sf,
  zo,
  of,
  ht,
  ya,
  af,
  lf,
  Ri,
  wa,
  tl,
  en,
  il,
  to,
  ba,
  Ro,
  ms = 1,
  rt = Date.now,
  No = rt(),
  jt = 0,
  En = 0,
  Jl = function (e, t, i) {
    var r = Pt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
  },
  eu = function (e, t) {
    return t && (!Pt(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  },
  $g = function n() {
    return En && requestAnimationFrame(n);
  },
  tu = function () {
    return (go = 1);
  },
  iu = function () {
    return (go = 0);
  },
  li = function (e) {
    return e;
  },
  kn = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  uf = function () {
    return typeof window < "u";
  },
  cf = function () {
    return B || (uf() && (B = window.gsap) && B.registerPlugin && B);
  },
  kr = function (e) {
    return !!~el.indexOf(e);
  },
  ff = function (e) {
    return (
      (e === "Height" ? il : te["inner" + e]) ||
      Ot["client" + e] ||
      ce["client" + e]
    );
  },
  df = function (e) {
    return (
      Yi(e, "getBoundingClientRect") ||
      (kr(e)
        ? function () {
            return (Bs.width = te.innerWidth), (Bs.height = il), Bs;
          }
        : function () {
            return Si(e);
          })
    );
  },
  Wg = function (e, t, i) {
    var r = i.d,
      s = i.d2,
      o = i.a;
    return (o = Yi(e, "getBoundingClientRect"))
      ? function () {
          return o()[r];
        }
      : function () {
          return (t ? ff(s) : e["client" + s]) || 0;
        };
  },
  Hg = function (e, t) {
    return !t || ~pi.indexOf(e)
      ? df(e)
      : function () {
          return Bs;
        };
  },
  fi = function (e, t) {
    var i = t.s,
      r = t.d2,
      s = t.d,
      o = t.a;
    return Math.max(
      0,
      (i = "scroll" + r) && (o = Yi(e, i))
        ? o() - df(e)()[s]
        : kr(e)
        ? (Ot[i] || ce[i]) - ff(r)
        : e[i] - e["offset" + r]
    );
  },
  vs = function (e, t) {
    for (var i = 0; i < Wr.length; i += 3)
      (!t || ~t.indexOf(Wr[i + 1])) && e(Wr[i], Wr[i + 1], Wr[i + 2]);
  },
  Pt = function (e) {
    return typeof e == "string";
  },
  ot = function (e) {
    return typeof e == "function";
  },
  Cn = function (e) {
    return typeof e == "number";
  },
  fr = function (e) {
    return typeof e == "object";
  },
  wn = function (e, t, i) {
    return e && e.progress(t ? 0 : 1) && i && e.pause();
  },
  Fo = function (e, t) {
    if (e.enabled) {
      var i = e._ctx
        ? e._ctx.add(function () {
            return t(e);
          })
        : t(e);
      i && i.totalTime && (e.callbackAnimation = i);
    }
  },
  Fr = Math.abs,
  hf = "left",
  pf = "top",
  rl = "right",
  nl = "bottom",
  yr = "width",
  wr = "height",
  Fn = "Right",
  Bn = "Left",
  Vn = "Top",
  qn = "Bottom",
  De = "padding",
  Ht = "margin",
  cn = "Width",
  sl = "Height",
  Ne = "px",
  Gt = function (e) {
    return te.getComputedStyle(e);
  },
  Gg = function (e) {
    var t = Gt(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
  },
  ru = function (e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  },
  Si = function (e, t) {
    var i =
        t &&
        Gt(e)[_a] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        B.to(e, {
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
  },
  io = function (e, t) {
    var i = t.d2;
    return e["offset" + i] || e["client" + i] || 0;
  },
  gf = function (e) {
    var t = [],
      i = e.labels,
      r = e.duration(),
      s;
    for (s in i) t.push(i[s] / r);
    return t;
  },
  Yg = function (e) {
    return function (t) {
      return B.utils.snap(gf(e), t);
    };
  },
  ol = function (e) {
    var t = B.utils.snap(e),
      i =
        Array.isArray(e) &&
        e.slice(0).sort(function (r, s) {
          return r - s;
        });
    return i
      ? function (r, s, o) {
          o === void 0 && (o = 0.001);
          var a;
          if (!s) return t(r);
          if (s > 0) {
            for (r -= o, a = 0; a < i.length; a++) if (i[a] >= r) return i[a];
            return i[a - 1];
          } else for (a = i.length, r += o; a--; ) if (i[a] <= r) return i[a];
          return i[0];
        }
      : function (r, s, o) {
          o === void 0 && (o = 0.001);
          var a = t(r);
          return !s || Math.abs(a - r) < o || a - r < 0 == s < 0
            ? a
            : t(s < 0 ? r - e : r + e);
        };
  },
  Xg = function (e) {
    return function (t, i) {
      return ol(gf(e))(t, i.direction);
    };
  },
  _s = function (e, t, i, r) {
    return i.split(",").forEach(function (s) {
      return e(t, s, r);
    });
  },
  He = function (e, t, i, r, s) {
    return e.addEventListener(t, i, { passive: !r, capture: !!s });
  },
  We = function (e, t, i, r) {
    return e.removeEventListener(t, i, !!r);
  },
  ys = function (e, t, i) {
    (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
  },
  nu = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  ws = { toggleActions: "play", anticipatePin: 0 },
  ro = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  zs = function (e, t) {
    if (Pt(e)) {
      var i = e.indexOf("="),
        r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
      ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
        (e =
          r +
          (e in ro
            ? ro[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  bs = function (e, t, i, r, s, o, a, l) {
    var u = s.startColor,
      c = s.endColor,
      f = s.fontSize,
      d = s.indent,
      h = s.fontWeight,
      p = ge.createElement("div"),
      g = kr(i) || Yi(i, "pinType") === "fixed",
      v = e.indexOf("scroller") !== -1,
      w = g ? ce : i,
      y = e.indexOf("start") !== -1,
      _ = y ? u : c,
      m =
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
      (m += "position:" + ((v || l) && g ? "fixed;" : "absolute;")),
      (v || l || !g) &&
        (m += (r === Fe ? rl : nl) + ":" + (o + parseFloat(d)) + "px;"),
      a &&
        (m +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (p._isStart = y),
      p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (p.style.cssText = m),
      (p.innerText = t || t === 0 ? e + "-" + t : e),
      w.children[0] ? w.insertBefore(p, w.children[0]) : w.appendChild(p),
      (p._offset = p["offset" + r.op.d2]),
      Rs(p, 0, r, y),
      p
    );
  },
  Rs = function (e, t, i, r) {
    var s = { display: "block" },
      o = i[r ? "os2" : "p2"],
      a = i[r ? "p2" : "os2"];
    (e._isFlipped = r),
      (s[i.a + "Percent"] = r ? -100 : 0),
      (s[i.a] = r ? "1px" : 0),
      (s["border" + o + cn] = 1),
      (s["border" + a + cn] = 0),
      (s[i.p] = t + "px"),
      B.set(e, s);
  },
  ee = [],
  Sa = {},
  rs,
  su = function () {
    return rt() - jt > 34 && (rs || (rs = requestAnimationFrame(Pi)));
  },
  Br = function () {
    (!ht || !ht.isPressed || ht.startX > ce.clientWidth) &&
      (ie.cache++,
      ht ? rs || (rs = requestAnimationFrame(Pi)) : Pi(),
      jt || Pr("scrollStart"),
      (jt = rt()));
  },
  Bo = function () {
    (lf = te.innerWidth), (af = te.innerHeight);
  },
  Pn = function (e) {
    ie.cache++,
      (e === !0 ||
        (!it &&
          !of &&
          !ge.fullscreenElement &&
          !ge.webkitFullscreenElement &&
          (!ya ||
            lf !== te.innerWidth ||
            Math.abs(te.innerHeight - af) > te.innerHeight * 0.25))) &&
        eo.restart(!0);
  },
  Cr = {},
  jg = [],
  mf = function n() {
    return We(Y, "scrollEnd", n) || pr(!0);
  },
  Pr = function (e) {
    return (
      (Cr[e] &&
        Cr[e].map(function (t) {
          return t();
        })) ||
      jg
    );
  },
  Ct = [],
  vf = function (e) {
    for (var t = 0; t < Ct.length; t += 5)
      (!e || (Ct[t + 4] && Ct[t + 4].query === e)) &&
        ((Ct[t].style.cssText = Ct[t + 1]),
        Ct[t].getBBox && Ct[t].setAttribute("transform", Ct[t + 2] || ""),
        (Ct[t + 3].uncache = 1));
  },
  al = function (e, t) {
    var i;
    for (pt = 0; pt < ee.length; pt++)
      (i = ee[pt]),
        i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
    (to = !0), t && vf(t), t || Pr("revert");
  },
  _f = function (e, t) {
    ie.cache++,
      (t || !gt) &&
        ie.forEach(function (i) {
          return ot(i) && i.cacheID++ && (i.rec = 0);
        }),
      Pt(e) && (te.history.scrollRestoration = tl = e);
  },
  gt,
  br = 0,
  ou,
  Ug = function () {
    if (ou !== br) {
      var e = (ou = br);
      requestAnimationFrame(function () {
        return e === br && pr(!0);
      });
    }
  },
  yf = function () {
    ce.appendChild(en),
      (il = (!ht && en.offsetHeight) || te.innerHeight),
      ce.removeChild(en);
  },
  au = function (e) {
    return is(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (t) {
      return (t.style.display = e ? "none" : "block");
    });
  },
  pr = function (e, t) {
    if (
      ((Ot = ge.documentElement),
      (ce = ge.body),
      (el = [te, ge, Ot, ce]),
      jt && !e && !to)
    ) {
      He(Y, "scrollEnd", mf);
      return;
    }
    yf(),
      (gt = Y.isRefreshing = !0),
      ie.forEach(function (r) {
        return ot(r) && ++r.cacheID && (r.rec = r());
      });
    var i = Pr("refreshInit");
    sf && Y.sort(),
      t || al(),
      ie.forEach(function (r) {
        ot(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
      }),
      ee.slice(0).forEach(function (r) {
        return r.refresh();
      }),
      (to = !1),
      ee.forEach(function (r) {
        if (r._subPinOffset && r.pin) {
          var s = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
            o = r.pin[s];
          r.revert(!0, 1), r.adjustPinSpacing(r.pin[s] - o), r.refresh();
        }
      }),
      (ba = 1),
      au(!0),
      ee.forEach(function (r) {
        var s = fi(r.scroller, r._dir),
          o = r.vars.end === "max" || (r._endClamp && r.end > s),
          a = r._startClamp && r.start >= s;
        (o || a) &&
          r.setPositions(
            a ? s - 1 : r.start,
            o ? Math.max(a ? s : r.start + 1, s) : r.end,
            !0
          );
      }),
      au(!1),
      (ba = 0),
      i.forEach(function (r) {
        return r && r.render && r.render(-1);
      }),
      ie.forEach(function (r) {
        ot(r) &&
          (r.smooth &&
            requestAnimationFrame(function () {
              return (r.target.style.scrollBehavior = "smooth");
            }),
          r.rec && r(r.rec));
      }),
      _f(tl, 1),
      eo.pause(),
      br++,
      (gt = 2),
      Pi(2),
      ee.forEach(function (r) {
        return ot(r.vars.onRefresh) && r.vars.onRefresh(r);
      }),
      (gt = Y.isRefreshing = !1),
      Pr("refresh");
  },
  xa = 0,
  Ns = 1,
  $n,
  Pi = function (e) {
    if (e === 2 || (!gt && !to)) {
      (Y.isUpdating = !0), $n && $n.update(0);
      var t = ee.length,
        i = rt(),
        r = i - No >= 50,
        s = t && ee[0].scroll();
      if (
        ((Ns = xa > s ? -1 : 1),
        gt || (xa = s),
        r &&
          (jt && !go && i - jt > 200 && ((jt = 0), Pr("scrollEnd")),
          (Tn = No),
          (No = i)),
        Ns < 0)
      ) {
        for (pt = t; pt-- > 0; ) ee[pt] && ee[pt].update(0, r);
        Ns = 1;
      } else for (pt = 0; pt < t; pt++) ee[pt] && ee[pt].update(0, r);
      Y.isUpdating = !1;
    }
    rs = 0;
  },
  Ta = [
    hf,
    pf,
    nl,
    rl,
    Ht + qn,
    Ht + Fn,
    Ht + Vn,
    Ht + Bn,
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
  Fs = Ta.concat([
    yr,
    wr,
    "boxSizing",
    "max" + cn,
    "max" + sl,
    "position",
    Ht,
    De,
    De + Vn,
    De + Fn,
    De + qn,
    De + Bn,
  ]),
  Kg = function (e, t, i) {
    tn(i);
    var r = e._gsap;
    if (r.spacerIsNative) tn(r.spacerState);
    else if (e._gsap.swappedIn) {
      var s = t.parentNode;
      s && (s.insertBefore(e, t), s.removeChild(t));
    }
    e._gsap.swappedIn = !1;
  },
  Vo = function (e, t, i, r) {
    if (!e._gsap.swappedIn) {
      for (var s = Ta.length, o = t.style, a = e.style, l; s--; )
        (l = Ta[s]), (o[l] = i[l]);
      (o.position = i.position === "absolute" ? "absolute" : "relative"),
        i.display === "inline" && (o.display = "inline-block"),
        (a[nl] = a[rl] = "auto"),
        (o.flexBasis = i.flexBasis || "auto"),
        (o.overflow = "visible"),
        (o.boxSizing = "border-box"),
        (o[yr] = io(e, vt) + Ne),
        (o[wr] = io(e, Fe) + Ne),
        (o[De] = a[Ht] = a[pf] = a[hf] = "0"),
        tn(r),
        (a[yr] = a["max" + cn] = i[yr]),
        (a[wr] = a["max" + sl] = i[wr]),
        (a[De] = i[De]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  Zg = /([A-Z])/g,
  tn = function (e) {
    if (e) {
      var t = e.t.style,
        i = e.length,
        r = 0,
        s,
        o;
      for ((e.t._gsap || B.core.getCache(e.t)).uncache = 1; r < i; r += 2)
        (o = e[r + 1]),
          (s = e[r]),
          o
            ? (t[s] = o)
            : t[s] && t.removeProperty(s.replace(Zg, "-$1").toLowerCase());
    }
  },
  Ss = function (e) {
    for (var t = Fs.length, i = e.style, r = [], s = 0; s < t; s++)
      r.push(Fs[s], i[Fs[s]]);
    return (r.t = e), r;
  },
  Qg = function (e, t, i) {
    for (var r = [], s = e.length, o = i ? 8 : 0, a; o < s; o += 2)
      (a = e[o]), r.push(a, a in t ? t[a] : e[o + 1]);
    return (r.t = e.t), r;
  },
  Bs = { left: 0, top: 0 },
  lu = function (e, t, i, r, s, o, a, l, u, c, f, d, h, p) {
    ot(e) && (e = e(l)),
      Pt(e) &&
        e.substr(0, 3) === "max" &&
        (e = d + (e.charAt(4) === "=" ? zs("0" + e.substr(3), i) : 0));
    var g = h ? h.time() : 0,
      v,
      w,
      y;
    if ((h && h.seek(0), isNaN(e) || (e = +e), Cn(e)))
      h &&
        (e = B.utils.mapRange(
          h.scrollTrigger.start,
          h.scrollTrigger.end,
          0,
          d,
          e
        )),
        a && Rs(a, i, r, !0);
    else {
      ot(t) && (t = t(l));
      var _ = (e || "0").split(" "),
        m,
        b,
        E,
        k;
      (y = yt(t, l) || ce),
        (m = Si(y) || {}),
        (!m || (!m.left && !m.top)) &&
          Gt(y).display === "none" &&
          ((k = y.style.display),
          (y.style.display = "block"),
          (m = Si(y)),
          k ? (y.style.display = k) : y.style.removeProperty("display")),
        (b = zs(_[0], m[r.d])),
        (E = zs(_[1] || "0", i)),
        (e = m[r.p] - u[r.p] - c + b + s - E),
        a && Rs(a, E, r, i - E < 20 || (a._isStart && E > 20)),
        (i -= i - E);
    }
    if ((p && ((l[p] = e || -0.001), e < 0 && (e = 0)), o)) {
      var x = e + i,
        M = o._isStart;
      (v = "scroll" + r.d2),
        Rs(
          o,
          x,
          r,
          (M && x > 20) ||
            (!M && (f ? Math.max(ce[v], Ot[v]) : o.parentNode[v]) <= x + 1)
        ),
        f &&
          ((u = Si(a)),
          f && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + Ne));
    }
    return (
      h &&
        y &&
        ((v = Si(y)),
        h.seek(d),
        (w = Si(y)),
        (h._caScrollDist = v[r.p] - w[r.p]),
        (e = (e / h._caScrollDist) * d)),
      h && h.seek(g),
      h ? e : Math.round(e)
    );
  },
  Jg = /(webkit|moz|length|cssText|inset)/i,
  uu = function (e, t, i, r) {
    if (e.parentNode !== t) {
      var s = e.style,
        o,
        a;
      if (t === ce) {
        (e._stOrig = s.cssText), (a = Gt(e));
        for (o in a)
          !+o &&
            !Jg.test(o) &&
            a[o] &&
            typeof s[o] == "string" &&
            o !== "0" &&
            (s[o] = a[o]);
        (s.top = i), (s.left = r);
      } else s.cssText = e._stOrig;
      (B.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  },
  wf = function (e, t, i) {
    var r = t,
      s = r;
    return function (o) {
      var a = Math.round(e());
      return (
        a !== r &&
          a !== s &&
          Math.abs(a - r) > 3 &&
          Math.abs(a - s) > 3 &&
          ((o = a), i && i()),
        (s = r),
        (r = Math.round(o)),
        r
      );
    };
  },
  xs = function (e, t, i) {
    var r = {};
    (r[t.p] = "+=" + i), B.set(e, r);
  },
  cu = function (e, t) {
    var i = Ui(e, t),
      r = "_scroll" + t.p2,
      s = function o(a, l, u, c, f) {
        var d = o.tween,
          h = l.onComplete,
          p = {};
        u = u || i();
        var g = wf(i, u, function () {
          d.kill(), (o.tween = 0);
        });
        return (
          (f = (c && f) || 0),
          (c = c || a - u),
          d && d.kill(),
          (l[r] = a),
          (l.inherit = !1),
          (l.modifiers = p),
          (p[r] = function () {
            return g(u + c * d.ratio + f * d.ratio * d.ratio);
          }),
          (l.onUpdate = function () {
            ie.cache++, o.tween && Pi();
          }),
          (l.onComplete = function () {
            (o.tween = 0), h && h.call(d);
          }),
          (d = o.tween = B.to(e, l)),
          d
        );
      };
    return (
      (e[r] = i),
      (i.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0);
      }),
      He(e, "wheel", i.wheelHandler),
      Y.isTouch && He(e, "touchmove", i.wheelHandler),
      s
    );
  },
  Y = (function () {
    function n(t, i) {
      $r || n.register(B), wa(this), this.init(t, i);
    }
    var e = n.prototype;
    return (
      (e.init = function (i, r) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !En)
        ) {
          this.update = this.refresh = this.kill = li;
          return;
        }
        i = ru(Pt(i) || Cn(i) || i.nodeType ? { trigger: i } : i, ws);
        var s = i,
          o = s.onUpdate,
          a = s.toggleClass,
          l = s.id,
          u = s.onToggle,
          c = s.onRefresh,
          f = s.scrub,
          d = s.trigger,
          h = s.pin,
          p = s.pinSpacing,
          g = s.invalidateOnRefresh,
          v = s.anticipatePin,
          w = s.onScrubComplete,
          y = s.onSnapComplete,
          _ = s.once,
          m = s.snap,
          b = s.pinReparent,
          E = s.pinSpacer,
          k = s.containerAnimation,
          x = s.fastScrollEnd,
          M = s.preventOverlaps,
          C =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? vt
              : Fe,
          I = !f && f !== 0,
          S = yt(i.scroller || te),
          P = B.core.getCache(S),
          A = kr(S),
          L =
            ("pinType" in i
              ? i.pinType
              : Yi(S, "pinType") || (A && "fixed")) === "fixed",
          z = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          R = I && i.toggleActions.split(" "),
          F = "markers" in i ? i.markers : ws.markers,
          V = A ? 0 : parseFloat(Gt(S)["border" + C.p2 + cn]) || 0,
          T = this,
          X =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(T);
            },
          U = Wg(S, A, C),
          ue = Hg(S, A),
          ae = 0,
          re = 0,
          J = 0,
          fe = Ui(S, C),
          pe,
          Oe,
          Be,
          me,
          Ve,
          H,
          ne,
          Xe,
          je,
          O,
          ke,
          Ut,
          Bt,
          q,
          Vt,
          Oi,
          er,
          qe,
          Li,
          Ce,
          Kt,
          qt,
          vi,
          hn,
          Le,
          as,
          _i,
          Dr,
          Ir,
          Di,
          tr,
          se,
          ir,
          Zt,
          Qt,
          Jt,
          rr,
          zr,
          yi;
        if (
          ((T._startClamp = T._endClamp = !1),
          (T._dir = C),
          (v *= 45),
          (T.scroller = S),
          (T.scroll = k ? k.time.bind(k) : fe),
          (me = fe()),
          (T.vars = i),
          (r = r || i.animation),
          "refreshPriority" in i &&
            ((sf = 1), i.refreshPriority === -9999 && ($n = T)),
          (P.tweenScroll = P.tweenScroll || {
            top: cu(S, Fe),
            left: cu(S, vt),
          }),
          (T.tweenTo = pe = P.tweenScroll[C.p]),
          (T.scrubDuration = function (N) {
            (ir = Cn(N) && N),
              ir
                ? se
                  ? se.duration(N)
                  : (se = B.to(r, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: ir,
                      paused: !0,
                      onComplete: function () {
                        return w && w(T);
                      },
                    }))
                : (se && se.progress(1).kill(), (se = 0));
          }),
          r &&
            ((r.vars.lazy = !1),
            (r._initted && !T.isReverted) ||
              (r.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                r.duration() &&
                r.render(0, !0, !0)),
            (T.animation = r.pause()),
            (r.scrollTrigger = T),
            T.scrubDuration(f),
            (Di = 0),
            l || (l = r.vars.id)),
          m &&
            ((!fr(m) || m.push) && (m = { snapTo: m }),
            "scrollBehavior" in ce.style &&
              B.set(A ? [ce, Ot] : S, { scrollBehavior: "auto" }),
            ie.forEach(function (N) {
              return (
                ot(N) &&
                N.target === (A ? ge.scrollingElement || Ot : S) &&
                (N.smooth = !1)
              );
            }),
            (Be = ot(m.snapTo)
              ? m.snapTo
              : m.snapTo === "labels"
              ? Yg(r)
              : m.snapTo === "labelsDirectional"
              ? Xg(r)
              : m.directional !== !1
              ? function (N, K) {
                  return ol(m.snapTo)(N, rt() - re < 500 ? 0 : K.direction);
                }
              : B.utils.snap(m.snapTo)),
            (Zt = m.duration || { min: 0.1, max: 2 }),
            (Zt = fr(Zt) ? Nn(Zt.min, Zt.max) : Nn(Zt, Zt)),
            (Qt = B.delayedCall(m.delay || ir / 2 || 0.1, function () {
              var N = fe(),
                K = rt() - re < 500,
                G = pe.tween;
              if (
                (K || Math.abs(T.getVelocity()) < 10) &&
                !G &&
                !go &&
                ae !== N
              ) {
                var Z = (N - H) / q,
                  $e = r && !I ? r.totalProgress() : Z,
                  oe = K ? 0 : (($e - tr) / (rt() - Tn)) * 1e3 || 0,
                  Pe = B.utils.clamp(-Z, 1 - Z, (Fr(oe / 2) * oe) / 0.185),
                  Je = Z + (m.inertia === !1 ? 0 : Pe),
                  Te,
                  _e,
                  de = m,
                  ei = de.onStart,
                  be = de.onInterrupt,
                  kt = de.onComplete;
                if (
                  ((Te = Be(Je, T)),
                  Cn(Te) || (Te = Je),
                  (_e = Math.max(0, Math.round(H + Te * q))),
                  N <= ne && N >= H && _e !== N)
                ) {
                  if (G && !G._initted && G.data <= Fr(_e - N)) return;
                  m.inertia === !1 && (Pe = Te - Z),
                    pe(
                      _e,
                      {
                        duration: Zt(
                          Fr(
                            (Math.max(Fr(Je - $e), Fr(Te - $e)) * 0.185) /
                              oe /
                              0.05 || 0
                          )
                        ),
                        ease: m.ease || "power3",
                        data: Fr(_e - N),
                        onInterrupt: function () {
                          return Qt.restart(!0) && be && be(T);
                        },
                        onComplete: function () {
                          T.update(),
                            (ae = fe()),
                            r &&
                              !I &&
                              (se
                                ? se.resetTo(
                                    "totalProgress",
                                    Te,
                                    r._tTime / r._tDur
                                  )
                                : r.progress(Te)),
                            (Di = tr =
                              r && !I ? r.totalProgress() : T.progress),
                            y && y(T),
                            kt && kt(T);
                        },
                      },
                      N,
                      Pe * q,
                      _e - N - Pe * q
                    ),
                    ei && ei(T, pe.tween);
                }
              } else T.isActive && ae !== N && Qt.restart(!0);
            }).pause())),
          l && (Sa[l] = T),
          (d = T.trigger = yt(d || (h !== !0 && h))),
          (yi = d && d._gsap && d._gsap.stRevert),
          yi && (yi = yi(T)),
          (h = h === !0 ? d : yt(h)),
          Pt(a) && (a = { targets: d, className: a }),
          h &&
            (p === !1 ||
              p === Ht ||
              (p =
                !p &&
                h.parentNode &&
                h.parentNode.style &&
                Gt(h.parentNode).display === "flex"
                  ? !1
                  : De),
            (T.pin = h),
            (Oe = B.core.getCache(h)),
            Oe.spacer
              ? (Vt = Oe.pinState)
              : (E &&
                  ((E = yt(E)),
                  E && !E.nodeType && (E = E.current || E.nativeElement),
                  (Oe.spacerIsNative = !!E),
                  E && (Oe.spacerState = Ss(E))),
                (Oe.spacer = qe = E || ge.createElement("div")),
                qe.classList.add("pin-spacer"),
                l && qe.classList.add("pin-spacer-" + l),
                (Oe.pinState = Vt = Ss(h))),
            i.force3D !== !1 && B.set(h, { force3D: !0 }),
            (T.spacer = qe = Oe.spacer),
            (Ir = Gt(h)),
            (hn = Ir[p + C.os2]),
            (Ce = B.getProperty(h)),
            (Kt = B.quickSetter(h, C.a, Ne)),
            Vo(h, qe, Ir),
            (er = Ss(h))),
          F)
        ) {
          (Ut = fr(F) ? ru(F, nu) : nu),
            (O = bs("scroller-start", l, S, C, Ut, 0)),
            (ke = bs("scroller-end", l, S, C, Ut, 0, O)),
            (Li = O["offset" + C.op.d2]);
          var pn = yt(Yi(S, "content") || S);
          (Xe = this.markerStart = bs("start", l, pn, C, Ut, Li, 0, k)),
            (je = this.markerEnd = bs("end", l, pn, C, Ut, Li, 0, k)),
            k && (zr = B.quickSetter([Xe, je], C.a, Ne)),
            !L &&
              !(pi.length && Yi(S, "fixedMarkers") === !0) &&
              (Gg(A ? ce : S),
              B.set([O, ke], { force3D: !0 }),
              (as = B.quickSetter(O, C.a, Ne)),
              (Dr = B.quickSetter(ke, C.a, Ne)));
        }
        if (k) {
          var Q = k.vars.onUpdate,
            j = k.vars.onUpdateParams;
          k.eventCallback("onUpdate", function () {
            T.update(0, 0, 1), Q && Q.apply(k, j || []);
          });
        }
        if (
          ((T.previous = function () {
            return ee[ee.indexOf(T) - 1];
          }),
          (T.next = function () {
            return ee[ee.indexOf(T) + 1];
          }),
          (T.revert = function (N, K) {
            if (!K) return T.kill(!0);
            var G = N !== !1 || !T.enabled,
              Z = it;
            G !== T.isReverted &&
              (G &&
                ((Jt = Math.max(fe(), T.scroll.rec || 0)),
                (J = T.progress),
                (rr = r && r.progress())),
              Xe &&
                [Xe, je, O, ke].forEach(function ($e) {
                  return ($e.style.display = G ? "none" : "block");
                }),
              G && ((it = T), T.update(G)),
              h &&
                (!b || !T.isActive) &&
                (G ? Kg(h, qe, Vt) : Vo(h, qe, Gt(h), Le)),
              G || T.update(G),
              (it = Z),
              (T.isReverted = G));
          }),
          (T.refresh = function (N, K, G, Z) {
            if (!((it || !T.enabled) && !K)) {
              if (h && N && jt) {
                He(n, "scrollEnd", mf);
                return;
              }
              !gt && X && X(T),
                (it = T),
                pe.tween && !G && (pe.tween.kill(), (pe.tween = 0)),
                se && se.pause(),
                g &&
                  r &&
                  (r.revert({ kill: !1 }).invalidate(),
                  r.getChildren &&
                    r.getChildren(!0, !0, !1).forEach(function (Ii) {
                      return Ii.vars.immediateRender && Ii.render(0, !0, !0);
                    })),
                T.isReverted || T.revert(!0, !0),
                (T._subPinOffset = !1);
              var $e = U(),
                oe = ue(),
                Pe = k ? k.duration() : fi(S, C),
                Je = q <= 0.01 || !q,
                Te = 0,
                _e = Z || 0,
                de = fr(G) ? G.end : i.end,
                ei = i.endTrigger || d,
                be = fr(G)
                  ? G.start
                  : i.start || (i.start === 0 || !d ? 0 : h ? "0 0" : "0 100%"),
                kt = (T.pinnedContainer =
                  i.pinnedContainer && yt(i.pinnedContainer, T)),
                ni = (d && Math.max(0, ee.indexOf(T))) || 0,
                Ue = ni,
                Ke,
                et,
                nr,
                ls,
                tt,
                Re,
                si,
                yo,
                bl,
                gn,
                oi,
                mn,
                us;
              for (
                F &&
                fr(G) &&
                ((mn = B.getProperty(O, C.p)), (us = B.getProperty(ke, C.p)));
                Ue-- > 0;

              )
                (Re = ee[Ue]),
                  Re.end || Re.refresh(0, 1) || (it = T),
                  (si = Re.pin),
                  si &&
                    (si === d || si === h || si === kt) &&
                    !Re.isReverted &&
                    (gn || (gn = []), gn.unshift(Re), Re.revert(!0, !0)),
                  Re !== ee[Ue] && (ni--, Ue--);
              for (
                ot(be) && (be = be(T)),
                  be = Jl(be, "start", T),
                  H =
                    lu(
                      be,
                      d,
                      $e,
                      C,
                      fe(),
                      Xe,
                      O,
                      T,
                      oe,
                      V,
                      L,
                      Pe,
                      k,
                      T._startClamp && "_startClamp"
                    ) || (h ? -0.001 : 0),
                  ot(de) && (de = de(T)),
                  Pt(de) &&
                    !de.indexOf("+=") &&
                    (~de.indexOf(" ")
                      ? (de = (Pt(be) ? be.split(" ")[0] : "") + de)
                      : ((Te = zs(de.substr(2), $e)),
                        (de = Pt(be)
                          ? be
                          : (k
                              ? B.utils.mapRange(
                                  0,
                                  k.duration(),
                                  k.scrollTrigger.start,
                                  k.scrollTrigger.end,
                                  H
                                )
                              : H) + Te),
                        (ei = d))),
                  de = Jl(de, "end", T),
                  ne =
                    Math.max(
                      H,
                      lu(
                        de || (ei ? "100% 0" : Pe),
                        ei,
                        $e,
                        C,
                        fe() + Te,
                        je,
                        ke,
                        T,
                        oe,
                        V,
                        L,
                        Pe,
                        k,
                        T._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  Te = 0,
                  Ue = ni;
                Ue--;

              )
                (Re = ee[Ue]),
                  (si = Re.pin),
                  si &&
                    Re.start - Re._pinPush <= H &&
                    !k &&
                    Re.end > 0 &&
                    ((Ke =
                      Re.end -
                      (T._startClamp ? Math.max(0, Re.start) : Re.start)),
                    ((si === d && Re.start - Re._pinPush < H) || si === kt) &&
                      isNaN(be) &&
                      (Te += Ke * (1 - Re.progress)),
                    si === h && (_e += Ke));
              if (
                ((H += Te),
                (ne += Te),
                T._startClamp && (T._startClamp += Te),
                T._endClamp &&
                  !gt &&
                  ((T._endClamp = ne || -0.001), (ne = Math.min(ne, fi(S, C)))),
                (q = ne - H || ((H -= 0.01) && 0.001)),
                Je && (J = B.utils.clamp(0, 1, B.utils.normalize(H, ne, Jt))),
                (T._pinPush = _e),
                Xe &&
                  Te &&
                  ((Ke = {}),
                  (Ke[C.a] = "+=" + Te),
                  kt && (Ke[C.p] = "-=" + fe()),
                  B.set([Xe, je], Ke)),
                h && !(ba && T.end >= fi(S, C)))
              )
                (Ke = Gt(h)),
                  (ls = C === Fe),
                  (nr = fe()),
                  (qt = parseFloat(Ce(C.a)) + _e),
                  !Pe &&
                    ne > 1 &&
                    ((oi = (A ? ge.scrollingElement || Ot : S).style),
                    (oi = {
                      style: oi,
                      value: oi["overflow" + C.a.toUpperCase()],
                    }),
                    A &&
                      Gt(ce)["overflow" + C.a.toUpperCase()] !== "scroll" &&
                      (oi.style["overflow" + C.a.toUpperCase()] = "scroll")),
                  Vo(h, qe, Ke),
                  (er = Ss(h)),
                  (et = Si(h, !0)),
                  (yo = L && Ui(S, ls ? vt : Fe)()),
                  p
                    ? ((Le = [p + C.os2, q + _e + Ne]),
                      (Le.t = qe),
                      (Ue = p === De ? io(h, C) + q + _e : 0),
                      Ue &&
                        (Le.push(C.d, Ue + Ne),
                        qe.style.flexBasis !== "auto" &&
                          (qe.style.flexBasis = Ue + Ne)),
                      tn(Le),
                      kt &&
                        ee.forEach(function (Ii) {
                          Ii.pin === kt &&
                            Ii.vars.pinSpacing !== !1 &&
                            (Ii._subPinOffset = !0);
                        }),
                      L && fe(Jt))
                    : ((Ue = io(h, C)),
                      Ue &&
                        qe.style.flexBasis !== "auto" &&
                        (qe.style.flexBasis = Ue + Ne)),
                  L &&
                    ((tt = {
                      top: et.top + (ls ? nr - H : yo) + Ne,
                      left: et.left + (ls ? yo : nr - H) + Ne,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (tt[yr] = tt["max" + cn] = Math.ceil(et.width) + Ne),
                    (tt[wr] = tt["max" + sl] = Math.ceil(et.height) + Ne),
                    (tt[Ht] =
                      tt[Ht + Vn] =
                      tt[Ht + Fn] =
                      tt[Ht + qn] =
                      tt[Ht + Bn] =
                        "0"),
                    (tt[De] = Ke[De]),
                    (tt[De + Vn] = Ke[De + Vn]),
                    (tt[De + Fn] = Ke[De + Fn]),
                    (tt[De + qn] = Ke[De + qn]),
                    (tt[De + Bn] = Ke[De + Bn]),
                    (Oi = Qg(Vt, tt, b)),
                    gt && fe(0)),
                  r
                    ? ((bl = r._initted),
                      zo(1),
                      r.render(r.duration(), !0, !0),
                      (vi = Ce(C.a) - qt + q + _e),
                      (_i = Math.abs(q - vi) > 1),
                      L && _i && Oi.splice(Oi.length - 2, 2),
                      r.render(0, !0, !0),
                      bl || r.invalidate(!0),
                      r.parent || r.totalTime(r.totalTime()),
                      zo(0))
                    : (vi = q),
                  oi &&
                    (oi.value
                      ? (oi.style["overflow" + C.a.toUpperCase()] = oi.value)
                      : oi.style.removeProperty("overflow-" + C.a));
              else if (d && fe() && !k)
                for (et = d.parentNode; et && et !== ce; )
                  et._pinOffset &&
                    ((H -= et._pinOffset), (ne -= et._pinOffset)),
                    (et = et.parentNode);
              gn &&
                gn.forEach(function (Ii) {
                  return Ii.revert(!1, !0);
                }),
                (T.start = H),
                (T.end = ne),
                (me = Ve = gt ? Jt : fe()),
                !k && !gt && (me < Jt && fe(Jt), (T.scroll.rec = 0)),
                T.revert(!1, !0),
                (re = rt()),
                Qt && ((ae = -1), Qt.restart(!0)),
                (it = 0),
                r &&
                  I &&
                  (r._initted || rr) &&
                  r.progress() !== rr &&
                  r.progress(rr || 0, !0).render(r.time(), !0, !0),
                (Je || J !== T.progress || k || g || (r && !r._initted)) &&
                  (r &&
                    !I &&
                    (r._initted || J || r.vars.immediateRender !== !1) &&
                    r.totalProgress(
                      k && H < -0.001 && !J ? B.utils.normalize(H, ne, 0) : J,
                      !0
                    ),
                  (T.progress = Je || (me - H) / q === J ? 0 : J)),
                h && p && (qe._pinOffset = Math.round(T.progress * vi)),
                se && se.invalidate(),
                isNaN(mn) ||
                  ((mn -= B.getProperty(O, C.p)),
                  (us -= B.getProperty(ke, C.p)),
                  xs(O, C, mn),
                  xs(Xe, C, mn - (Z || 0)),
                  xs(ke, C, us),
                  xs(je, C, us - (Z || 0))),
                Je && !gt && T.update(),
                c && !gt && !Bt && ((Bt = !0), c(T), (Bt = !1));
            }
          }),
          (T.getVelocity = function () {
            return ((fe() - Ve) / (rt() - Tn)) * 1e3 || 0;
          }),
          (T.endAnimation = function () {
            wn(T.callbackAnimation),
              r &&
                (se
                  ? se.progress(1)
                  : r.paused()
                  ? I || wn(r, T.direction < 0, 1)
                  : wn(r, r.reversed()));
          }),
          (T.labelToScroll = function (N) {
            return (
              (r &&
                r.labels &&
                (H || T.refresh() || H) + (r.labels[N] / r.duration()) * q) ||
              0
            );
          }),
          (T.getTrailing = function (N) {
            var K = ee.indexOf(T),
              G = T.direction > 0 ? ee.slice(0, K).reverse() : ee.slice(K + 1);
            return (
              Pt(N)
                ? G.filter(function (Z) {
                    return Z.vars.preventOverlaps === N;
                  })
                : G
            ).filter(function (Z) {
              return T.direction > 0 ? Z.end <= H : Z.start >= ne;
            });
          }),
          (T.update = function (N, K, G) {
            if (!(k && !G && !N)) {
              var Z = gt === !0 ? Jt : T.scroll(),
                $e = N ? 0 : (Z - H) / q,
                oe = $e < 0 ? 0 : $e > 1 ? 1 : $e || 0,
                Pe = T.progress,
                Je,
                Te,
                _e,
                de,
                ei,
                be,
                kt,
                ni;
              if (
                (K &&
                  ((Ve = me),
                  (me = k ? fe() : Z),
                  m && ((tr = Di), (Di = r && !I ? r.totalProgress() : oe))),
                v &&
                  h &&
                  !it &&
                  !ms &&
                  jt &&
                  (!oe && H < Z + ((Z - Ve) / (rt() - Tn)) * v
                    ? (oe = 1e-4)
                    : oe === 1 &&
                      ne > Z + ((Z - Ve) / (rt() - Tn)) * v &&
                      (oe = 0.9999)),
                oe !== Pe && T.enabled)
              ) {
                if (
                  ((Je = T.isActive = !!oe && oe < 1),
                  (Te = !!Pe && Pe < 1),
                  (be = Je !== Te),
                  (ei = be || !!oe != !!Pe),
                  (T.direction = oe > Pe ? 1 : -1),
                  (T.progress = oe),
                  ei &&
                    !it &&
                    ((_e = oe && !Pe ? 0 : oe === 1 ? 1 : Pe === 1 ? 2 : 3),
                    I &&
                      ((de =
                        (!be && R[_e + 1] !== "none" && R[_e + 1]) || R[_e]),
                      (ni =
                        r &&
                        (de === "complete" || de === "reset" || de in r)))),
                  M &&
                    (be || ni) &&
                    (ni || f || !r) &&
                    (ot(M)
                      ? M(T)
                      : T.getTrailing(M).forEach(function (nr) {
                          return nr.endAnimation();
                        })),
                  I ||
                    (se && !it && !ms
                      ? (se._dp._time - se._start !== se._time &&
                          se.render(se._dp._time - se._start),
                        se.resetTo
                          ? se.resetTo("totalProgress", oe, r._tTime / r._tDur)
                          : ((se.vars.totalProgress = oe),
                            se.invalidate().restart()))
                      : r && r.totalProgress(oe, !!(it && (re || N)))),
                  h)
                ) {
                  if ((N && p && (qe.style[p + C.os2] = hn), !L))
                    Kt(kn(qt + vi * oe));
                  else if (ei) {
                    if (
                      ((kt = !N && oe > Pe && ne + 1 > Z && Z + 1 >= fi(S, C)),
                      b)
                    )
                      if (!N && (Je || kt)) {
                        var Ue = Si(h, !0),
                          Ke = Z - H;
                        uu(
                          h,
                          ce,
                          Ue.top + (C === Fe ? Ke : 0) + Ne,
                          Ue.left + (C === Fe ? 0 : Ke) + Ne
                        );
                      } else uu(h, qe);
                    tn(Je || kt ? Oi : er),
                      (_i && oe < 1 && Je) ||
                        Kt(qt + (oe === 1 && !kt ? vi : 0));
                  }
                }
                m && !pe.tween && !it && !ms && Qt.restart(!0),
                  a &&
                    (be || (_ && oe && (oe < 1 || !Ro))) &&
                    is(a.targets).forEach(function (nr) {
                      return nr.classList[Je || _ ? "add" : "remove"](
                        a.className
                      );
                    }),
                  o && !I && !N && o(T),
                  ei && !it
                    ? (I &&
                        (ni &&
                          (de === "complete"
                            ? r.pause().totalProgress(1)
                            : de === "reset"
                            ? r.restart(!0).pause()
                            : de === "restart"
                            ? r.restart(!0)
                            : r[de]()),
                        o && o(T)),
                      (be || !Ro) &&
                        (u && be && Fo(T, u),
                        z[_e] && Fo(T, z[_e]),
                        _ && (oe === 1 ? T.kill(!1, 1) : (z[_e] = 0)),
                        be || ((_e = oe === 1 ? 1 : 3), z[_e] && Fo(T, z[_e]))),
                      x &&
                        !Je &&
                        Math.abs(T.getVelocity()) > (Cn(x) ? x : 2500) &&
                        (wn(T.callbackAnimation),
                        se
                          ? se.progress(1)
                          : wn(r, de === "reverse" ? 1 : !oe, 1)))
                    : I && o && !it && o(T);
              }
              if (Dr) {
                var et = k ? (Z / k.duration()) * (k._caScrollDist || 0) : Z;
                as(et + (O._isFlipped ? 1 : 0)), Dr(et);
              }
              zr && zr((-Z / k.duration()) * (k._caScrollDist || 0));
            }
          }),
          (T.enable = function (N, K) {
            T.enabled ||
              ((T.enabled = !0),
              He(S, "resize", Pn),
              A || He(S, "scroll", Br),
              X && He(n, "refreshInit", X),
              N !== !1 && ((T.progress = J = 0), (me = Ve = ae = fe())),
              K !== !1 && T.refresh());
          }),
          (T.getTween = function (N) {
            return N && pe ? pe.tween : se;
          }),
          (T.setPositions = function (N, K, G, Z) {
            if (k) {
              var $e = k.scrollTrigger,
                oe = k.duration(),
                Pe = $e.end - $e.start;
              (N = $e.start + (Pe * N) / oe), (K = $e.start + (Pe * K) / oe);
            }
            T.refresh(
              !1,
              !1,
              {
                start: eu(N, G && !!T._startClamp),
                end: eu(K, G && !!T._endClamp),
              },
              Z
            ),
              T.update();
          }),
          (T.adjustPinSpacing = function (N) {
            if (Le && N) {
              var K = Le.indexOf(C.d) + 1;
              (Le[K] = parseFloat(Le[K]) + N + Ne),
                (Le[1] = parseFloat(Le[1]) + N + Ne),
                tn(Le);
            }
          }),
          (T.disable = function (N, K) {
            if (
              T.enabled &&
              (N !== !1 && T.revert(!0, !0),
              (T.enabled = T.isActive = !1),
              K || (se && se.pause()),
              (Jt = 0),
              Oe && (Oe.uncache = 1),
              X && We(n, "refreshInit", X),
              Qt && (Qt.pause(), pe.tween && pe.tween.kill() && (pe.tween = 0)),
              !A)
            ) {
              for (var G = ee.length; G--; )
                if (ee[G].scroller === S && ee[G] !== T) return;
              We(S, "resize", Pn), A || We(S, "scroll", Br);
            }
          }),
          (T.kill = function (N, K) {
            T.disable(N, K), se && !K && se.kill(), l && delete Sa[l];
            var G = ee.indexOf(T);
            G >= 0 && ee.splice(G, 1),
              G === pt && Ns > 0 && pt--,
              (G = 0),
              ee.forEach(function (Z) {
                return Z.scroller === T.scroller && (G = 1);
              }),
              G || gt || (T.scroll.rec = 0),
              r &&
                ((r.scrollTrigger = null),
                N && r.revert({ kill: !1 }),
                K || r.kill()),
              Xe &&
                [Xe, je, O, ke].forEach(function (Z) {
                  return Z.parentNode && Z.parentNode.removeChild(Z);
                }),
              $n === T && ($n = 0),
              h &&
                (Oe && (Oe.uncache = 1),
                (G = 0),
                ee.forEach(function (Z) {
                  return Z.pin === h && G++;
                }),
                G || (Oe.spacer = 0)),
              i.onKill && i.onKill(T);
          }),
          ee.push(T),
          T.enable(!1, !1),
          yi && yi(T),
          r && r.add && !q)
        ) {
          var le = T.update;
          (T.update = function () {
            (T.update = le), ie.cache++, H || ne || T.refresh();
          }),
            B.delayedCall(0.01, T.update),
            (q = 0.01),
            (H = ne = 0);
        } else T.refresh();
        h && Ug();
      }),
      (n.register = function (i) {
        return (
          $r ||
            ((B = i || cf()), uf() && window.document && n.enable(), ($r = En)),
          $r
        );
      }),
      (n.defaults = function (i) {
        if (i) for (var r in i) ws[r] = i[r];
        return ws;
      }),
      (n.disable = function (i, r) {
        (En = 0),
          ee.forEach(function (o) {
            return o[r ? "kill" : "disable"](i);
          }),
          We(te, "wheel", Br),
          We(ge, "scroll", Br),
          clearInterval(gs),
          We(ge, "touchcancel", li),
          We(ce, "touchstart", li),
          _s(We, ge, "pointerdown,touchstart,mousedown", tu),
          _s(We, ge, "pointerup,touchend,mouseup", iu),
          eo.kill(),
          vs(We);
        for (var s = 0; s < ie.length; s += 3)
          ys(We, ie[s], ie[s + 1]), ys(We, ie[s], ie[s + 2]);
      }),
      (n.enable = function () {
        if (
          ((te = window),
          (ge = document),
          (Ot = ge.documentElement),
          (ce = ge.body),
          B &&
            ((is = B.utils.toArray),
            (Nn = B.utils.clamp),
            (wa = B.core.context || li),
            (zo = B.core.suppressOverwrites || li),
            (tl = te.history.scrollRestoration || "auto"),
            (xa = te.pageYOffset || 0),
            B.core.globals("ScrollTrigger", n),
            ce))
        ) {
          (En = 1),
            (en = document.createElement("div")),
            (en.style.height = "100vh"),
            (en.style.position = "absolute"),
            yf(),
            $g(),
            Ae.register(B),
            (n.isTouch = Ae.isTouch),
            (Ri =
              Ae.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (ya = Ae.isTouch === 1),
            He(te, "wheel", Br),
            (el = [te, ge, Ot, ce]),
            B.matchMedia &&
              ((n.matchMedia = function (u) {
                var c = B.matchMedia(),
                  f;
                for (f in u) c.add(f, u[f]);
                return c;
              }),
              B.addEventListener("matchMediaInit", function () {
                return al();
              }),
              B.addEventListener("matchMediaRevert", function () {
                return vf();
              }),
              B.addEventListener("matchMedia", function () {
                pr(0, 1), Pr("matchMedia");
              }),
              B.matchMedia().add("(orientation: portrait)", function () {
                return Bo(), Bo;
              })),
            Bo(),
            He(ge, "scroll", Br);
          var i = ce.hasAttribute("style"),
            r = ce.style,
            s = r.borderTopStyle,
            o = B.core.Animation.prototype,
            a,
            l;
          for (
            o.revert ||
              Object.defineProperty(o, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              a = Si(ce),
              Fe.m = Math.round(a.top + Fe.sc()) || 0,
              vt.m = Math.round(a.left + vt.sc()) || 0,
              s ? (r.borderTopStyle = s) : r.removeProperty("border-top-style"),
              i || (ce.setAttribute("style", ""), ce.removeAttribute("style")),
              gs = setInterval(su, 250),
              B.delayedCall(0.5, function () {
                return (ms = 0);
              }),
              He(ge, "touchcancel", li),
              He(ce, "touchstart", li),
              _s(He, ge, "pointerdown,touchstart,mousedown", tu),
              _s(He, ge, "pointerup,touchend,mouseup", iu),
              _a = B.utils.checkPrefix("transform"),
              Fs.push(_a),
              $r = rt(),
              eo = B.delayedCall(0.2, pr).pause(),
              Wr = [
                ge,
                "visibilitychange",
                function () {
                  var u = te.innerWidth,
                    c = te.innerHeight;
                  ge.hidden
                    ? ((Zl = u), (Ql = c))
                    : (Zl !== u || Ql !== c) && Pn();
                },
                ge,
                "DOMContentLoaded",
                pr,
                te,
                "load",
                pr,
                te,
                "resize",
                Pn,
              ],
              vs(He),
              ee.forEach(function (u) {
                return u.enable(0, 1);
              }),
              l = 0;
            l < ie.length;
            l += 3
          )
            ys(We, ie[l], ie[l + 1]), ys(We, ie[l], ie[l + 2]);
        }
      }),
      (n.config = function (i) {
        "limitCallbacks" in i && (Ro = !!i.limitCallbacks);
        var r = i.syncInterval;
        (r && clearInterval(gs)) || ((gs = r) && setInterval(su, r)),
          "ignoreMobileResize" in i &&
            (ya = n.isTouch === 1 && i.ignoreMobileResize),
          "autoRefreshEvents" in i &&
            (vs(We) || vs(He, i.autoRefreshEvents || "none"),
            (of = (i.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (n.scrollerProxy = function (i, r) {
        var s = yt(i),
          o = ie.indexOf(s),
          a = kr(s);
        ~o && ie.splice(o, a ? 6 : 2),
          r && (a ? pi.unshift(te, r, ce, r, Ot, r) : pi.unshift(s, r));
      }),
      (n.clearMatchMedia = function (i) {
        ee.forEach(function (r) {
          return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
        });
      }),
      (n.isInViewport = function (i, r, s) {
        var o = (Pt(i) ? yt(i) : i).getBoundingClientRect(),
          a = o[s ? yr : wr] * r || 0;
        return s
          ? o.right - a > 0 && o.left + a < te.innerWidth
          : o.bottom - a > 0 && o.top + a < te.innerHeight;
      }),
      (n.positionInViewport = function (i, r, s) {
        Pt(i) && (i = yt(i));
        var o = i.getBoundingClientRect(),
          a = o[s ? yr : wr],
          l =
            r == null
              ? a / 2
              : r in ro
              ? ro[r] * a
              : ~r.indexOf("%")
              ? (parseFloat(r) * a) / 100
              : parseFloat(r) || 0;
        return s ? (o.left + l) / te.innerWidth : (o.top + l) / te.innerHeight;
      }),
      (n.killAll = function (i) {
        if (
          (ee.slice(0).forEach(function (s) {
            return s.vars.id !== "ScrollSmoother" && s.kill();
          }),
          i !== !0)
        ) {
          var r = Cr.killAll || [];
          (Cr = {}),
            r.forEach(function (s) {
              return s();
            });
        }
      }),
      n
    );
  })();
Y.version = "3.13.0";
Y.saveStyles = function (n) {
  return n
    ? is(n).forEach(function (e) {
        if (e && e.style) {
          var t = Ct.indexOf(e);
          t >= 0 && Ct.splice(t, 5),
            Ct.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              B.core.getCache(e),
              wa()
            );
        }
      })
    : Ct;
};
Y.revert = function (n, e) {
  return al(!n, e);
};
Y.create = function (n, e) {
  return new Y(n, e);
};
Y.refresh = function (n) {
  return n ? Pn(!0) : ($r || Y.register()) && pr(!0);
};
Y.update = function (n) {
  return ++ie.cache && Pi(n === !0 ? 2 : 0);
};
Y.clearScrollMemory = _f;
Y.maxScroll = function (n, e) {
  return fi(n, e ? vt : Fe);
};
Y.getScrollFunc = function (n, e) {
  return Ui(yt(n), e ? vt : Fe);
};
Y.getById = function (n) {
  return Sa[n];
};
Y.getAll = function () {
  return ee.filter(function (n) {
    return n.vars.id !== "ScrollSmoother";
  });
};
Y.isScrolling = function () {
  return !!jt;
};
Y.snapDirectional = ol;
Y.addEventListener = function (n, e) {
  var t = Cr[n] || (Cr[n] = []);
  ~t.indexOf(e) || t.push(e);
};
Y.removeEventListener = function (n, e) {
  var t = Cr[n],
    i = t && t.indexOf(e);
  i >= 0 && t.splice(i, 1);
};
Y.batch = function (n, e) {
  var t = [],
    i = {},
    r = e.interval || 0.016,
    s = e.batchMax || 1e9,
    o = function (u, c) {
      var f = [],
        d = [],
        h = B.delayedCall(r, function () {
          c(f, d), (f = []), (d = []);
        }).pause();
      return function (p) {
        f.length || h.restart(!0),
          f.push(p.trigger),
          d.push(p),
          s <= f.length && h.progress(1);
      };
    },
    a;
  for (a in e)
    i[a] =
      a.substr(0, 2) === "on" && ot(e[a]) && a !== "onRefreshInit"
        ? o(a, e[a])
        : e[a];
  return (
    ot(s) &&
      ((s = s()),
      He(Y, "refresh", function () {
        return (s = e.batchMax());
      })),
    is(n).forEach(function (l) {
      var u = {};
      for (a in i) u[a] = i[a];
      (u.trigger = l), t.push(Y.create(u));
    }),
    t
  );
};
var fu = function (e, t, i, r) {
    return (
      t > r ? e(r) : t < 0 && e(0),
      i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
    );
  },
  qo = function n(e, t) {
    t === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          t === !0
            ? "auto"
            : t
            ? "pan-" + t + (Ae.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === Ot && n(ce, t);
  },
  Ts = { auto: 1, scroll: 1 },
  em = function (e) {
    var t = e.event,
      i = e.target,
      r = e.axis,
      s = (t.changedTouches ? t.changedTouches[0] : t).target,
      o = s._gsap || B.core.getCache(s),
      a = rt(),
      l;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
      for (
        ;
        s &&
        s !== ce &&
        ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
          !(Ts[(l = Gt(s)).overflowY] || Ts[l.overflowX]));

      )
        s = s.parentNode;
      (o._isScroll =
        s &&
        s !== i &&
        !kr(s) &&
        (Ts[(l = Gt(s)).overflowY] || Ts[l.overflowX])),
        (o._isScrollT = a);
    }
    (o._isScroll || r === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
  },
  bf = function (e, t, i, r) {
    return Ae.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (r = r && em),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return i && He(ge, Ae.eventTypes[0], hu, !1, !0);
      },
      onDisable: function () {
        return We(ge, Ae.eventTypes[0], hu, !0);
      },
    });
  },
  tm = /(input|label|select|textarea)/i,
  du,
  hu = function (e) {
    var t = tm.test(e.target.tagName);
    (t || du) && ((e._gsapAllow = !0), (du = t));
  },
  im = function (e) {
    fr(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var t = e,
      i = t.normalizeScrollX,
      r = t.momentum,
      s = t.allowNestedScroll,
      o = t.onRelease,
      a,
      l,
      u = yt(e.target) || Ot,
      c = B.core.globals().ScrollSmoother,
      f = c && c.get(),
      d =
        Ri &&
        ((e.content && yt(e.content)) ||
          (f && e.content !== !1 && !f.smooth() && f.content())),
      h = Ui(u, Fe),
      p = Ui(u, vt),
      g = 1,
      v =
        (Ae.isTouch && te.visualViewport
          ? te.visualViewport.scale * te.visualViewport.width
          : te.outerWidth) / te.innerWidth,
      w = 0,
      y = ot(r)
        ? function () {
            return r(a);
          }
        : function () {
            return r || 2.8;
          },
      _,
      m,
      b = bf(u, e.type, !0, s),
      E = function () {
        return (m = !1);
      },
      k = li,
      x = li,
      M = function () {
        (l = fi(u, Fe)),
          (x = Nn(Ri ? 1 : 0, l)),
          i && (k = Nn(0, fi(u, vt))),
          (_ = br);
      },
      C = function () {
        (d._gsap.y = kn(parseFloat(d._gsap.y) + h.offset) + "px"),
          (d.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(d._gsap.y) +
            ", 0, 1)"),
          (h.offset = h.cacheID = 0);
      },
      I = function () {
        if (m) {
          requestAnimationFrame(E);
          var F = kn(a.deltaY / 2),
            V = x(h.v - F);
          if (d && V !== h.v + h.offset) {
            h.offset = V - h.v;
            var T = kn((parseFloat(d && d._gsap.y) || 0) - h.offset);
            (d.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              T +
              ", 0, 1)"),
              (d._gsap.y = T + "px"),
              (h.cacheID = ie.cache),
              Pi();
          }
          return !0;
        }
        h.offset && C(), (m = !0);
      },
      S,
      P,
      A,
      L,
      z = function () {
        M(),
          S.isActive() &&
            S.vars.scrollY > l &&
            (h() > l ? S.progress(1) && h(l) : S.resetTo("scrollY", l));
      };
    return (
      d && B.set(d, { y: "+=0" }),
      (e.ignoreCheck = function (R) {
        return (
          (Ri && R.type === "touchmove" && I()) ||
          (g > 1.05 && R.type !== "touchstart") ||
          a.isGesturing ||
          (R.touches && R.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        m = !1;
        var R = g;
        (g = kn(((te.visualViewport && te.visualViewport.scale) || 1) / v)),
          S.pause(),
          R !== g && qo(u, g > 1.01 ? !0 : i ? !1 : "x"),
          (P = p()),
          (A = h()),
          M(),
          (_ = br);
      }),
      (e.onRelease = e.onGestureStart =
        function (R, F) {
          if ((h.offset && C(), !F)) L.restart(!0);
          else {
            ie.cache++;
            var V = y(),
              T,
              X;
            i &&
              ((T = p()),
              (X = T + (V * 0.05 * -R.velocityX) / 0.227),
              (V *= fu(p, T, X, fi(u, vt))),
              (S.vars.scrollX = k(X))),
              (T = h()),
              (X = T + (V * 0.05 * -R.velocityY) / 0.227),
              (V *= fu(h, T, X, fi(u, Fe))),
              (S.vars.scrollY = x(X)),
              S.invalidate().duration(V).play(0.01),
              ((Ri && S.vars.scrollY >= l) || T >= l - 1) &&
                B.to({}, { onUpdate: z, duration: V });
          }
          o && o(R);
        }),
      (e.onWheel = function () {
        S._ts && S.pause(), rt() - w > 1e3 && ((_ = 0), (w = rt()));
      }),
      (e.onChange = function (R, F, V, T, X) {
        if (
          (br !== _ && M(),
          F && i && p(k(T[2] === F ? P + (R.startX - R.x) : p() + F - T[1])),
          V)
        ) {
          h.offset && C();
          var U = X[2] === V,
            ue = U ? A + R.startY - R.y : h() + V - X[1],
            ae = x(ue);
          U && ue !== ae && (A += ae - ue), h(ae);
        }
        (V || F) && Pi();
      }),
      (e.onEnable = function () {
        qo(u, i ? !1 : "x"),
          Y.addEventListener("refresh", z),
          He(te, "resize", z),
          h.smooth &&
            ((h.target.style.scrollBehavior = "auto"),
            (h.smooth = p.smooth = !1)),
          b.enable();
      }),
      (e.onDisable = function () {
        qo(u, !0),
          We(te, "resize", z),
          Y.removeEventListener("refresh", z),
          b.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (a = new Ae(e)),
      (a.iOS = Ri),
      Ri && !h() && h(1),
      Ri && B.ticker.add(li),
      (L = a._dc),
      (S = B.to(a, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: wf(h, h(), function () {
            return S.pause();
          }),
        },
        onUpdate: Pi,
        onComplete: L.vars.onComplete,
      })),
      a
    );
  };
Y.sort = function (n) {
  if (ot(n)) return ee.sort(n);
  var e = te.pageYOffset || 0;
  return (
    Y.getAll().forEach(function (t) {
      return (t._sortY = t.trigger
        ? e + t.trigger.getBoundingClientRect().top
        : t.start + te.innerHeight);
    }),
    ee.sort(
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
Y.observe = function (n) {
  return new Ae(n);
};
Y.normalizeScroll = function (n) {
  if (typeof n > "u") return ht;
  if (n === !0 && ht) return ht.enable();
  if (n === !1) {
    ht && ht.kill(), (ht = n);
    return;
  }
  var e = n instanceof Ae ? n : im(n);
  return ht && ht.target === e.target && ht.kill(), kr(e.target) && (ht = e), e;
};
Y.core = {
  _getVelocityProp: va,
  _inputObserver: bf,
  _scrollers: ie,
  _proxies: pi,
  bridge: {
    ss: function () {
      jt || Pr("scrollStart"), (jt = rt());
    },
    ref: function () {
      return it;
    },
  },
};
cf() && B.registerPlugin(Y);
let bn,
  Vr,
  Ea,
  rm = () => Ea || we.register(window.gsap),
  pu = typeof Intl < "u" ? new Intl.Segmenter() : 0,
  no = (n) =>
    typeof n == "string"
      ? no(document.querySelectorAll(n))
      : "length" in n
      ? Array.from(n)
      : [n],
  gu = (n) => no(n).filter((e) => e instanceof HTMLElement),
  ka = [],
  $o = function () {},
  nm = /\s+/g,
  mu = new RegExp(
    "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
    "gu"
  ),
  vu = { left: 0, top: 0, width: 0, height: 0 },
  _u = (n, e) => {
    if (e) {
      let t = new Set(n.join("").match(e) || ka),
        i = n.length,
        r,
        s,
        o,
        a;
      if (t.size)
        for (; --i > -1; ) {
          s = n[i];
          for (o of t)
            if (o.startsWith(s) && o.length > s.length) {
              for (
                r = 0, a = s;
                o.startsWith((a += n[i + ++r])) && a.length < o.length;

              );
              if (r && a.length === o.length) {
                (n[i] = o), n.splice(i + 1, r);
                break;
              }
            }
        }
    }
    return n;
  },
  yu = (n) =>
    window.getComputedStyle(n).display === "inline" &&
    (n.style.display = "inline-block"),
  qr = (n, e, t) =>
    e.insertBefore(typeof n == "string" ? document.createTextNode(n) : n, t),
  Ca = (n, e, t) => {
    let i = e[n + "sClass"] || "",
      { tag: r = "div", aria: s = "auto", propIndex: o = !1 } = e,
      a = n === "line" ? "block" : "inline-block",
      l = i.indexOf("++") > -1,
      u = (c) => {
        let f = document.createElement(r),
          d = t.length + 1;
        return (
          i && (f.className = i + (l ? " " + i + d : "")),
          o && f.style.setProperty("--" + n, d + ""),
          s !== "none" && f.setAttribute("aria-hidden", "true"),
          r !== "span" &&
            ((f.style.position = "relative"), (f.style.display = a)),
          (f.textContent = c),
          t.push(f),
          f
        );
      };
    return l && (i = i.replace("++", "")), (u.collection = t), u;
  },
  sm = (n, e, t, i) => {
    let r = Ca("line", t, i),
      s = window.getComputedStyle(n).textAlign || "left";
    return (o, a) => {
      let l = r("");
      for (l.style.textAlign = s, n.insertBefore(l, e[o]); o < a; o++)
        l.appendChild(e[o]);
      l.normalize();
    };
  },
  Sf = (n, e, t, i, r, s, o, a, l, u) => {
    var c;
    let f = Array.from(n.childNodes),
      d = 0,
      { wordDelimiter: h, reduceWhiteSpace: p = !0, prepareText: g } = e,
      v = n.getBoundingClientRect(),
      w = v,
      y = !p && window.getComputedStyle(n).whiteSpace.substring(0, 3) === "pre",
      _ = 0,
      m = t.collection,
      b,
      E,
      k,
      x,
      M,
      C,
      I,
      S,
      P,
      A,
      L,
      z,
      R,
      F,
      V,
      T,
      X,
      U;
    for (
      typeof h == "object"
        ? ((k = h.delimiter || h), (E = h.replaceWith || ""))
        : (E = h === "" ? "" : h || " "),
        b = E !== " ";
      d < f.length;
      d++
    )
      if (((x = f[d]), x.nodeType === 3)) {
        for (
          V = x.textContent || "",
            p
              ? (V = V.replace(nm, " "))
              : y &&
                (V = V.replace(
                  /\n/g,
                  E +
                    `
`
                )),
            g && (V = g(V, n)),
            x.textContent = V,
            M = E || k ? V.split(k || E) : V.match(a) || ka,
            X = M[M.length - 1],
            S = b ? X.slice(-1) === " " : !X,
            X || M.pop(),
            w = v,
            I = b ? M[0].charAt(0) === " " : !M[0],
            I && qr(" ", n, x),
            M[0] || M.shift(),
            _u(M, l),
            (s && u) || (x.textContent = ""),
            P = 1;
          P <= M.length;
          P++
        )
          if (
            ((T = M[P - 1]),
            !p &&
              y &&
              T.charAt(0) ===
                `
` &&
              ((c = x.previousSibling) == null || c.remove(),
              qr(document.createElement("br"), n, x),
              (T = T.slice(1))),
            !p && T === "")
          )
            qr(E, n, x);
          else if (T === " ") n.insertBefore(document.createTextNode(" "), x);
          else {
            if (
              (b && T.charAt(0) === " " && qr(" ", n, x),
              _ && P === 1 && !I && m.indexOf(_.parentNode) > -1
                ? ((C = m[m.length - 1]),
                  C.appendChild(document.createTextNode(i ? "" : T)))
                : ((C = t(i ? "" : T)),
                  qr(C, n, x),
                  _ && P === 1 && !I && C.insertBefore(_, C.firstChild)),
              i)
            )
              for (
                L = pu
                  ? _u(
                      [...pu.segment(T)].map((ue) => ue.segment),
                      l
                    )
                  : T.match(a) || ka,
                  U = 0;
                U < L.length;
                U++
              )
                C.appendChild(
                  L[U] === " " ? document.createTextNode(" ") : i(L[U])
                );
            if (s && u) {
              if (
                ((V = x.textContent = V.substring(T.length + 1, V.length)),
                (A = C.getBoundingClientRect()),
                A.top > w.top && A.left <= w.left)
              ) {
                for (z = n.cloneNode(), R = n.childNodes[0]; R && R !== C; )
                  (F = R), (R = R.nextSibling), z.appendChild(F);
                n.parentNode.insertBefore(z, n), r && yu(z);
              }
              w = A;
            }
            (P < M.length || S) &&
              qr(
                P >= M.length ? " " : b && T.slice(-1) === " " ? " " + E : E,
                n,
                x
              );
          }
        n.removeChild(x), (_ = 0);
      } else
        x.nodeType === 1 &&
          (o && o.indexOf(x) > -1
            ? (m.indexOf(x.previousSibling) > -1 &&
                m[m.length - 1].appendChild(x),
              (_ = x))
            : (Sf(x, e, t, i, r, s, o, a, l, !0), (_ = 0)),
          r && yu(x));
  };
const xf = class Tf {
  constructor(e, t) {
    (this.isSplit = !1),
      rm(),
      (this.elements = gu(e)),
      (this.chars = []),
      (this.words = []),
      (this.lines = []),
      (this.masks = []),
      (this.vars = t),
      (this._split = () => this.isSplit && this.split(this.vars));
    let i = [],
      r,
      s = () => {
        let o = i.length,
          a;
        for (; o--; ) {
          a = i[o];
          let l = a.element.offsetWidth;
          if (l !== a.width) {
            (a.width = l), this._split();
            return;
          }
        }
      };
    (this._data = {
      orig: i,
      obs:
        typeof ResizeObserver < "u" &&
        new ResizeObserver(() => {
          clearTimeout(r), (r = setTimeout(s, 200));
        }),
    }),
      $o(this),
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
        autoSplit: a = !1,
        specialChars: l,
        mask: u,
      } = this.vars,
      c = t.indexOf("lines") > -1,
      f = t.indexOf("chars") > -1,
      d = t.indexOf("words") > -1,
      h = f && !d && !c,
      p = l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
      g = p ? new RegExp(p.source + "|" + mu.source, "gu") : mu,
      v = !!e.ignore && gu(e.ignore),
      { orig: w, animTime: y, obs: _ } = this._data,
      m;
    return (
      (f || d || c) &&
        (this.elements.forEach((b, E) => {
          (w[E] = {
            element: b,
            html: b.innerHTML,
            ariaL: b.getAttribute("aria-label"),
            ariaH: b.getAttribute("aria-hidden"),
          }),
            i === "auto"
              ? b.setAttribute("aria-label", (b.textContent || "").trim())
              : i === "hidden" && b.setAttribute("aria-hidden", "true");
          let k = [],
            x = [],
            M = [],
            C = f ? Ca("char", e, k) : null,
            I = Ca("word", e, x),
            S,
            P,
            A,
            L;
          if ((Sf(b, e, I, C, h, r && (c || h), v, g, p, !1), c)) {
            let z = no(b.childNodes),
              R = sm(b, z, e, M),
              F,
              V = [],
              T = 0,
              X = z.map((ue) =>
                ue.nodeType === 1 ? ue.getBoundingClientRect() : vu
              ),
              U = vu;
            for (S = 0; S < z.length; S++)
              (F = z[S]),
                F.nodeType === 1 &&
                  (F.nodeName === "BR"
                    ? (V.push(F), R(T, S + 1), (T = S + 1), (U = X[T]))
                    : (S &&
                        X[S].top > U.top &&
                        X[S].left <= U.left &&
                        (R(T, S), (T = S)),
                      (U = X[S])));
            T < S && R(T, S),
              V.forEach((ue) => {
                var ae;
                return (ae = ue.parentNode) == null
                  ? void 0
                  : ae.removeChild(ue);
              });
          }
          if (!d) {
            for (S = 0; S < x.length; S++)
              if (
                ((P = x[S]),
                f || !P.nextSibling || P.nextSibling.nodeType !== 3)
              )
                if (s && !c) {
                  for (
                    A = document.createElement("span"),
                      A.style.whiteSpace = "nowrap";
                    P.firstChild;

                  )
                    A.appendChild(P.firstChild);
                  P.replaceWith(A);
                } else P.replaceWith(...P.childNodes);
              else
                (L = P.nextSibling),
                  L &&
                    L.nodeType === 3 &&
                    ((L.textContent =
                      (P.textContent || "") + (L.textContent || "")),
                    P.remove());
            (x.length = 0), b.normalize();
          }
          this.lines.push(...M), this.words.push(...x), this.chars.push(...k);
        }),
        u &&
          this[u] &&
          this.masks.push(
            ...this[u].map((b) => {
              let E = b.cloneNode();
              return (
                b.replaceWith(E),
                E.appendChild(b),
                b.className &&
                  (E.className = b.className.replace(/(\b\w+\b)/g, "$1-mask")),
                (E.style.overflow = "clip"),
                E
              );
            })
          )),
      (this.isSplit = !0),
      Vr && (a ? Vr.addEventListener("loadingdone", this._split) : Vr.status),
      (m = o && o(this)) &&
        m.totalTime &&
        (this._data.anim = y ? m.totalTime(y) : m),
      c &&
        a &&
        this.elements.forEach((b, E) => {
          (w[E].width = b.offsetWidth), _ && _.observe(b);
        }),
      this
    );
  }
  revert() {
    var e, t;
    let { orig: i, anim: r, obs: s } = this._data;
    return (
      s && s.disconnect(),
      i.forEach(({ element: o, html: a, ariaL: l, ariaH: u }) => {
        (o.innerHTML = a),
          l ? o.setAttribute("aria-label", l) : o.removeAttribute("aria-label"),
          u
            ? o.setAttribute("aria-hidden", u)
            : o.removeAttribute("aria-hidden");
      }),
      (this.chars.length =
        this.words.length =
        this.lines.length =
        i.length =
        this.masks.length =
          0),
      (this.isSplit = !1),
      Vr?.removeEventListener("loadingdone", this._split),
      r && ((this._data.animTime = r.totalTime()), r.revert()),
      (t = (e = this.vars).onRevert) == null || t.call(e, this),
      this
    );
  }
  static create(e, t) {
    return new Tf(e, t);
  }
  static register(e) {
    (bn = bn || e || window.gsap),
      bn && ((no = bn.utils.toArray), ($o = bn.core.context || $o)),
      !Ea && window.innerWidth > 0 && ((Vr = document.fonts), (Ea = !0));
  }
};
xf.version = "3.13.0";
let we = xf;
D.registerPlugin(Y, we);
const om = async () => {
    await document.fonts.ready,
      document.querySelectorAll("[split-text]").forEach((e) => {
        e.hasAttribute("data-split-initialized") ||
          (e.setAttribute("data-split-initialized", "true"),
          we.create(e, {
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
              D.set(r, { willChange: "transform" }),
                D.from(r, {
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
          }));
      });
  },
  Zi = () => {
    om();
  };
D.registerPlugin(Y);
const Qi = () => {
  const n =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
  let e = [],
    t;
  const i = () => {
      e.forEach((a) => {
        a && typeof a.kill == "function" && a.kill();
      }),
        (e = []),
        Y.getAll().forEach((a) => a.kill());
    },
    r = (a) => {
      const l = a.getAttribute("motion");
      if (l !== "fade" && l !== "move-up") return;
      const u = parseFloat(a.getAttribute("motion-duration") || "1.4"),
        c = parseFloat(a.getAttribute("motion-delay") || "0"),
        f = a.getAttribute("motion-ease") || "power2.out",
        d = a.getAttribute("motion-start") || "top 80%";
      let h;
      l === "fade"
        ? (D.set(a, { opacity: 0 }),
          (h = D.to(a, {
            opacity: 1,
            duration: u,
            delay: c,
            ease: f,
            scrollTrigger: {
              trigger: a,
              start: d,
              toggleActions: "play none none reverse",
            },
          })))
        : l === "move-up" &&
          (D.set(a, { opacity: 0, y: 50 }),
          (h = D.to(a, {
            opacity: 1,
            y: 0,
            duration: u,
            delay: c,
            ease: f,
            scrollTrigger: {
              trigger: a,
              start: d,
              toggleActions: "play none none reverse",
            },
          }))),
        h && e.push(h);
    },
    s = () => {
      document.querySelectorAll("[motion]").forEach((l) => r(l));
    },
    o = () => {
      n ||
        (clearTimeout(t),
        (t = setTimeout(() => {
          i(),
            setTimeout(() => {
              s(), Y.refresh();
            }, 100);
        }, 250)));
    };
  s(), n || window.addEventListener("resize", o);
};
D.registerPlugin(we);
const am = (n) => {
  const e = document.querySelectorAll("[page-load='component']"),
    t = document.querySelectorAll("[page-load='wrap']"),
    i = document.querySelectorAll("[page-load='gradient']"),
    r = document.querySelectorAll("[page-load='text']"),
    s = document.querySelectorAll(".page_cover"),
    o = localStorage.getItem("pageLoadPlayed") !== "true",
    a = sessionStorage.getItem("sessionPageLoadPlayed") !== "true";
  o && localStorage.setItem("pageLoadPlayed", "true"),
    a && sessionStorage.setItem("sessionPageLoadPlayed", "true");
  const l = o || a,
    u = D.timeline();
  D.set(i, { opacity: 0 }), D.set(t, { opacity: 0 });
  let c = [],
    f = [];
  return (
    l
      ? (r.forEach((d) => {
          const h = we.create(d, {
            type: "lines",
            mask: "lines",
            linesClass: "pg-load-text-line",
            onSplit: function (p) {
              return (
                D.set(p.lines, {
                  opacity: 0,
                  yPercent: 100,
                  willChange: "transform, opacity",
                }),
                p
              );
            },
          });
          c.push(h);
        }),
        (f = c.flatMap((d) => d.lines)))
      : D.set(r, { opacity: 0 }),
    u.to(i, {
      opacity: l ? 1 : 0,
      duration: l ? (o ? 2 : 1.6) : 0.6,
      ease: "power1.out",
    }),
    u.to(t, { opacity: 1, duration: l ? 1 : 0.8, ease: "power2.inOut" }, "<"),
    u.to(
      s,
      {
        opacity: 0,
        duration: l ? 1 : 0.8,
        pointerEvents: "none",
        ease: "power2.inOut",
      },
      "<"
    ),
    l &&
      (u.to(r, { opacity: 1, duration: 1, ease: "power2.inOut" }),
      u.to(
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
      u.to(f, {
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        yPercent: -100,
        ease: "expo.inOut",
        delay: 0.8,
      })),
    u.to(
      e,
      {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: l ? 1.6 : 1.2,
        ease: "expo.inOut",
        onComplete: () => {
          D.set(e, { pointerEvents: "none" }),
            l && c.forEach((d) => d.revert());
        },
      },
      l ? (o ? "-=0.7" : "-=0.5") : "-=0.2"
    ),
    u
  );
};
D.registerPlugin(we);
const lm = (n) => {
    const e = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
      window.innerWidth <= 768;
    let t, i, r;
    const s = () => {
        t && typeof t.revert == "function" && (t.revert(), (t = null)),
          i && (i.kill(), (i = null)),
          document.querySelectorAll(".move-text").forEach((u) => {
            u.parentNode &&
              (u.parentNode.insertBefore(u.firstChild, u), u.remove());
          });
      },
      o = () => {
        const l = document.querySelector("[home-hero='text']"),
          u = document.querySelector("[home-hero='btn']"),
          c = document.querySelector("[home-hero='visual']");
        l &&
          (t = we.create(l, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "home-hero-text-line",
            tag: "span",
            onSplit(f) {
              f.lines.forEach((h) => {
                const p = document.createElement("div");
                p.classList.add("move-text"),
                  h.parentNode.insertBefore(p, h),
                  p.appendChild(h);
              });
              const d = l.querySelectorAll("span");
              return (
                d.length &&
                  d.forEach((h) => {
                    const p = document.createElement("div");
                    (p.style.overflow = "clip"),
                      (p.style.paddingBottom = "3px"),
                      h.parentNode.insertBefore(p, h),
                      p.appendChild(h);
                  }),
                (i = D.timeline()),
                D.set(".move-text", { opacity: 0, yPercent: 100 }),
                D.set(u, { opacity: 0 }),
                D.set(c, { opacity: 0 }),
                i.to(".move-text", {
                  opacity: 1,
                  duration: 1.8,
                  stagger: 0.08,
                  ease: "expo.inOut",
                  yPercent: 0,
                }),
                i.to(u, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
                i.to(
                  c,
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
      },
      a = () => {
        e() ||
          (clearTimeout(r),
          (r = setTimeout(() => {
            s(),
              setTimeout(() => {
                o();
              }, 100);
          }, 250)));
      };
    o(), e() || window.addEventListener("resize", a);
  },
  Ji = (n) => {
    const e = document.querySelectorAll("[nav-load='component']"),
      t = document.querySelectorAll("[main-nav='brand']"),
      i = document.querySelectorAll("[nav-link='wrap']");
    D.set(e, { opacity: 0 }),
      D.set(t, { opacity: 0 }),
      D.set(i, { opacity: 0, yPercent: -100 });
    const r = D.timeline();
    return (
      r.to(e, { opacity: 1, duration: 1, ease: "expo.inOut" }),
      r.to(t, { opacity: 1, duration: 1, ease: "power1.out" }, "-=0.8"),
      r.to(
        i,
        { opacity: 1, yPercent: 0, duration: 0.6, stagger: 0.06 },
        "-=0.8"
      ),
      r
    );
  },
  um = () => {
    const n = document.querySelector("[home-hero='visual']"),
      e = document.querySelector("[home-hero='follow-button']");
    D.set(e, {
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
          D.to(e, { x: 0, y: 0, duration: 1.6, ease: "elastic.out(1.5, 0.5)" });
      }),
      window.addEventListener("mousemove", (o) => {
        if (t) {
          const a = o.clientX + 10,
            l = o.clientY + 10,
            u = e.parentElement.getBoundingClientRect(),
            c = a - u.left,
            f = l - u.top;
          D.to(e, {
            x: c - r + 50,
            y: f - s - 30,
            duration: 1.4,
            ease: "elastic.out(2, 0.75)",
          });
        }
      });
  },
  cm = () => {
    um();
  },
  wu = () => {
    bd(), Zu(), Zi(), Qi(), cm();
    const n = am();
    n.add(() => Ji(), "-=0.8"), n.add(() => lm(), "-=1");
  },
  Ef = () => {
    const n = document.querySelector(".swiper[review-slider='component']");
    n &&
      new wt(n, {
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
              t = this.realIndex + 1;
            (document.querySelector("[review-slider-count]").textContent = e),
              (document.querySelector("[review-slider-current]").textContent =
                t);
          },
          slideChange: function () {
            const e = this.realIndex + 1;
            document.querySelector("[review-slider-current]").textContent = e;
          },
        },
      });
  };
D.registerPlugin(Y);
const fm = () => {
    const n =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
    let e, t;
    const i = () => {
        e && (e.kill(), (e = null)), Y.getAll().forEach((o) => o.kill());
      },
      r = () => {
        const o = document.querySelector("[impact-slide='main']"),
          a = o?.querySelectorAll("[impact-slide='component']");
        !o ||
          !a.length ||
          (a.forEach((l, u) => {
            D.set(l, {
              clipPath: u === 0 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
            });
          }),
          (e = D.timeline({
            scrollTrigger: {
              trigger: o,
              start: "top top",
              end: `+=${a.length * 100}%`,
              scrub: !0,
              pin: !1,
              markers: !1,
            },
          })),
          a.forEach((l, u) => {
            u !== 0 &&
              e.to(
                l,
                { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.inOut" },
                "+=0.33"
              );
          }));
      },
      s = () => {
        n ||
          (clearTimeout(t),
          (t = setTimeout(() => {
            i(),
              setTimeout(() => {
                r(), Y.refresh();
              }, 100);
          }, 250)));
      };
    r(), n || window.addEventListener("resize", s);
  },
  dm = () => {
    document.querySelectorAll("[image-index='wrap']").forEach((n) => {
      const e = n.querySelector("[image-index='large']"),
        t = n.querySelector("[image-index='small']"),
        i = (l, u) => {
          const c = [];
          let f = l;
          for (; f && f !== u; )
            (f = f.parentElement), f && f !== u && c.push(f);
          return c;
        },
        r = i(e, n),
        s = i(t, n),
        o = (l, u, c) => {
          (l.style.zIndex = c),
            u.forEach((f) => {
              f.style.zIndex = c;
            });
        };
      o(e, r, "2"), o(t, s, "1");
      const a = (l, u, c, f) => {
        o(l, c, "2"), o(u, f, "1");
      };
      e.addEventListener("click", () => a(e, t, r, s)),
        t.addEventListener("click", () => a(t, e, s, r));
    });
  },
  ll = () => {
    dm();
  },
  hm = () => {
    const n = document.querySelector(".swiper[about-slider='component']");
    n &&
      new wt(n, {
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
              t = this.realIndex + 1;
            (document.querySelector("[data-slider-count]").textContent = e),
              (document.querySelector("[data-slider-current]").textContent = t);
          },
          slideChange: function () {
            const e = this.realIndex + 1;
            document.querySelector("[data-slider-current]").textContent = e;
          },
        },
      });
  },
  Lr = (n) => {
    const e = document.querySelector(".page_overlay"),
      t = document.querySelector("[page-overlay='text-wrap']"),
      i = D.timeline();
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
  };
D.registerPlugin(we);
const pm = (n) => {
    const e = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
      window.innerWidth <= 768;
    let t, i, r;
    const s = () => {
        t && typeof t.revert == "function" && (t.revert(), (t = null)),
          i && (i.kill(), (i = null)),
          document.querySelectorAll(".move-text").forEach((u) => {
            u.parentNode &&
              (u.parentNode.insertBefore(u.firstChild, u), u.remove());
          });
      },
      o = () => {
        const l = document.querySelector("[about-hero='text']"),
          u = document.querySelectorAll("[about-hero='visual']");
        l &&
          (t = we.create(l, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "about-hero-text-line",
            tag: "span",
            onSplit(c) {
              c.lines.forEach((d) => {
                const h = document.createElement("div");
                h.classList.add("move-text"),
                  d.parentNode.insertBefore(h, d),
                  h.appendChild(d);
              });
              const f = l.querySelectorAll("span");
              return (
                f.length &&
                  f.forEach((d) => {
                    const h = document.createElement("div");
                    (h.style.overflow = "clip"),
                      (h.style.paddingBottom = "3px"),
                      d.parentNode.insertBefore(h, d),
                      h.appendChild(d);
                  }),
                (i = D.timeline()),
                D.set(".move-text", { opacity: 0, yPercent: 100 }),
                D.set(u, { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }),
                i.to(".move-text", {
                  opacity: 1,
                  duration: 1.8,
                  stagger: 0.08,
                  ease: "expo.inOut",
                  yPercent: 0,
                }),
                i.to(
                  u,
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
      },
      a = () => {
        e() ||
          (clearTimeout(r),
          (r = setTimeout(() => {
            s(),
              setTimeout(() => {
                o();
              }, 100);
          }, 250)));
      };
    o(), e() || window.addEventListener("resize", a);
  },
  gm = () => {
    hm(), Ef(), fm(), ll(), Zi(), Qi();
    const n = Lr();
    n.add(() => Ji(), "-=1"), n.add(() => pm(), "-=1");
  };
var mm = "1.3.1";
function kf(n, e, t) {
  return Math.max(n, Math.min(e, t));
}
function vm(n, e, t) {
  return (1 - t) * n + t * e;
}
function _m(n, e, t, i) {
  return vm(n, e, 1 - Math.exp(-t * i));
}
function ym(n, e) {
  return ((n % e) + e) % e;
}
var wm = class {
  constructor() {
    W(this, "isRunning", !1);
    W(this, "value", 0);
    W(this, "from", 0);
    W(this, "to", 0);
    W(this, "currentTime", 0);
    W(this, "lerp");
    W(this, "duration");
    W(this, "easing");
    W(this, "onUpdate");
  }
  advance(n) {
    if (!this.isRunning) return;
    let e = !1;
    if (this.duration && this.easing) {
      this.currentTime += n;
      const t = kf(0, this.currentTime / this.duration, 1);
      e = t >= 1;
      const i = e ? 1 : this.easing(t);
      this.value = this.from + (this.to - this.from) * i;
    } else
      this.lerp
        ? ((this.value = _m(this.value, this.to, this.lerp * 60, n)),
          Math.round(this.value) === this.to &&
            ((this.value = this.to), (e = !0)))
        : ((this.value = this.to), (e = !0));
    e && this.stop(), this.onUpdate?.(this.value, e);
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(n, e, { lerp: t, duration: i, easing: r, onStart: s, onUpdate: o }) {
    (this.from = this.value = n),
      (this.to = e),
      (this.lerp = t),
      (this.duration = i),
      (this.easing = r),
      (this.currentTime = 0),
      (this.isRunning = !0),
      s?.(),
      (this.onUpdate = o);
  }
};
function bm(n, e) {
  let t;
  return function (...i) {
    let r = this;
    clearTimeout(t),
      (t = setTimeout(() => {
        (t = void 0), n.apply(r, i);
      }, e));
  };
}
var Sm = class {
    constructor(n, e, { autoResize: t = !0, debounce: i = 250 } = {}) {
      W(this, "width", 0);
      W(this, "height", 0);
      W(this, "scrollHeight", 0);
      W(this, "scrollWidth", 0);
      W(this, "debouncedResize");
      W(this, "wrapperResizeObserver");
      W(this, "contentResizeObserver");
      W(this, "resize", () => {
        this.onWrapperResize(), this.onContentResize();
      });
      W(this, "onWrapperResize", () => {
        this.wrapper instanceof Window
          ? ((this.width = window.innerWidth),
            (this.height = window.innerHeight))
          : ((this.width = this.wrapper.clientWidth),
            (this.height = this.wrapper.clientHeight));
      });
      W(this, "onContentResize", () => {
        this.wrapper instanceof Window
          ? ((this.scrollHeight = this.content.scrollHeight),
            (this.scrollWidth = this.content.scrollWidth))
          : ((this.scrollHeight = this.wrapper.scrollHeight),
            (this.scrollWidth = this.wrapper.scrollWidth));
      });
      (this.wrapper = n),
        (this.content = e),
        t &&
          ((this.debouncedResize = bm(this.resize, i)),
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
  },
  Cf = class {
    constructor() {
      W(this, "events", {});
    }
    emit(n, ...e) {
      let t = this.events[n] || [];
      for (let i = 0, r = t.length; i < r; i++) t[i]?.(...e);
    }
    on(n, e) {
      return (
        this.events[n]?.push(e) || (this.events[n] = [e]),
        () => {
          this.events[n] = this.events[n]?.filter((t) => e !== t);
        }
      );
    }
    off(n, e) {
      this.events[n] = this.events[n]?.filter((t) => e !== t);
    }
    destroy() {
      this.events = {};
    }
  },
  bu = 100 / 6,
  zi = { passive: !1 },
  xm = class {
    constructor(n, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
      W(this, "touchStart", { x: 0, y: 0 });
      W(this, "lastDelta", { x: 0, y: 0 });
      W(this, "window", { width: 0, height: 0 });
      W(this, "emitter", new Cf());
      W(this, "onTouchStart", (n) => {
        const { clientX: e, clientY: t } = n.targetTouches
          ? n.targetTouches[0]
          : n;
        (this.touchStart.x = e),
          (this.touchStart.y = t),
          (this.lastDelta = { x: 0, y: 0 }),
          this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: n });
      });
      W(this, "onTouchMove", (n) => {
        const { clientX: e, clientY: t } = n.targetTouches
            ? n.targetTouches[0]
            : n,
          i = -(e - this.touchStart.x) * this.options.touchMultiplier,
          r = -(t - this.touchStart.y) * this.options.touchMultiplier;
        (this.touchStart.x = e),
          (this.touchStart.y = t),
          (this.lastDelta = { x: i, y: r }),
          this.emitter.emit("scroll", { deltaX: i, deltaY: r, event: n });
      });
      W(this, "onTouchEnd", (n) => {
        this.emitter.emit("scroll", {
          deltaX: this.lastDelta.x,
          deltaY: this.lastDelta.y,
          event: n,
        });
      });
      W(this, "onWheel", (n) => {
        let { deltaX: e, deltaY: t, deltaMode: i } = n;
        const r = i === 1 ? bu : i === 2 ? this.window.width : 1,
          s = i === 1 ? bu : i === 2 ? this.window.height : 1;
        (e *= r),
          (t *= s),
          (e *= this.options.wheelMultiplier),
          (t *= this.options.wheelMultiplier),
          this.emitter.emit("scroll", { deltaX: e, deltaY: t, event: n });
      });
      W(this, "onWindowResize", () => {
        this.window = { width: window.innerWidth, height: window.innerHeight };
      });
      (this.element = n),
        (this.options = e),
        window.addEventListener("resize", this.onWindowResize, !1),
        this.onWindowResize(),
        this.element.addEventListener("wheel", this.onWheel, zi),
        this.element.addEventListener("touchstart", this.onTouchStart, zi),
        this.element.addEventListener("touchmove", this.onTouchMove, zi),
        this.element.addEventListener("touchend", this.onTouchEnd, zi);
    }
    on(n, e) {
      return this.emitter.on(n, e);
    }
    destroy() {
      this.emitter.destroy(),
        window.removeEventListener("resize", this.onWindowResize, !1),
        this.element.removeEventListener("wheel", this.onWheel, zi),
        this.element.removeEventListener("touchstart", this.onTouchStart, zi),
        this.element.removeEventListener("touchmove", this.onTouchMove, zi),
        this.element.removeEventListener("touchend", this.onTouchEnd, zi);
    }
  },
  Tm = class {
    constructor({
      wrapper: n = window,
      content: e = document.documentElement,
      eventsTarget: t = n,
      smoothWheel: i = !0,
      syncTouch: r = !1,
      syncTouchLerp: s = 0.075,
      touchInertiaMultiplier: o = 35,
      duration: a,
      easing: l = (x) => Math.min(1, 1.001 - Math.pow(2, -10 * x)),
      lerp: u = 0.1,
      infinite: c = !1,
      orientation: f = "vertical",
      gestureOrientation: d = "vertical",
      touchMultiplier: h = 1,
      wheelMultiplier: p = 1,
      autoResize: g = !0,
      prevent: v,
      virtualScroll: w,
      overscroll: y = !0,
      autoRaf: _ = !1,
      anchors: m = !1,
      autoToggle: b = !1,
      allowNestedScroll: E = !1,
      __experimental__naiveDimensions: k = !1,
    } = {}) {
      W(this, "_isScrolling", !1);
      W(this, "_isStopped", !1);
      W(this, "_isLocked", !1);
      W(this, "_preventNextNativeScrollEvent", !1);
      W(this, "_resetVelocityTimeout", null);
      W(this, "__rafID", null);
      W(this, "isTouching");
      W(this, "time", 0);
      W(this, "userData", {});
      W(this, "lastVelocity", 0);
      W(this, "velocity", 0);
      W(this, "direction", 0);
      W(this, "options");
      W(this, "targetScroll");
      W(this, "animatedScroll");
      W(this, "animate", new wm());
      W(this, "emitter", new Cf());
      W(this, "dimensions");
      W(this, "virtualScroll");
      W(this, "onScrollEnd", (n) => {
        n instanceof CustomEvent ||
          ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
            n.stopPropagation());
      });
      W(this, "dispatchScrollendEvent", () => {
        this.options.wrapper.dispatchEvent(
          new CustomEvent("scrollend", {
            bubbles: this.options.wrapper === window,
            detail: { lenisScrollEnd: !0 },
          })
        );
      });
      W(this, "onTransitionEnd", (n) => {
        if (n.propertyName.includes("overflow")) {
          const e = this.isHorizontal ? "overflow-x" : "overflow-y",
            t = getComputedStyle(this.rootElement)[e];
          ["hidden", "clip"].includes(t) ? this.stop() : this.start();
        }
      });
      W(this, "onClick", (n) => {
        const t = n
          .composedPath()
          .find(
            (i) =>
              i instanceof HTMLAnchorElement &&
              (i.getAttribute("href")?.startsWith("#") ||
                i.getAttribute("href")?.startsWith("/#") ||
                i.getAttribute("href")?.startsWith("./#"))
          );
        if (t) {
          const i = t.getAttribute("href");
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
      W(this, "onPointerDown", (n) => {
        n.button === 1 && this.reset();
      });
      W(this, "onVirtualScroll", (n) => {
        if (
          typeof this.options.virtualScroll == "function" &&
          this.options.virtualScroll(n) === !1
        )
          return;
        const { deltaX: e, deltaY: t, event: i } = n;
        if (
          (this.emitter.emit("virtual-scroll", {
            deltaX: e,
            deltaY: t,
            event: i,
          }),
          i.ctrlKey || i.lenisStopPropagation)
        )
          return;
        const r = i.type.includes("touch"),
          s = i.type.includes("wheel");
        this.isTouching = i.type === "touchstart" || i.type === "touchmove";
        const o = e === 0 && t === 0;
        if (
          this.options.syncTouch &&
          r &&
          i.type === "touchstart" &&
          o &&
          !this.isStopped &&
          !this.isLocked
        ) {
          this.reset();
          return;
        }
        const l =
          (this.options.gestureOrientation === "vertical" && t === 0) ||
          (this.options.gestureOrientation === "horizontal" && e === 0);
        if (o || l) return;
        let u = i.composedPath();
        u = u.slice(0, u.indexOf(this.rootElement));
        const c = this.options.prevent;
        if (
          u.find(
            (v) =>
              v instanceof HTMLElement &&
              ((typeof c == "function" && c?.(v)) ||
                v.hasAttribute?.("data-lenis-prevent") ||
                (r && v.hasAttribute?.("data-lenis-prevent-touch")) ||
                (s && v.hasAttribute?.("data-lenis-prevent-wheel")) ||
                (this.options.allowNestedScroll &&
                  this.checkNestedScroll(v, { deltaX: e, deltaY: t })))
          )
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
        let d = t;
        this.options.gestureOrientation === "both"
          ? (d = Math.abs(t) > Math.abs(e) ? t : e)
          : this.options.gestureOrientation === "horizontal" && (d = e),
          (!this.options.overscroll ||
            this.options.infinite ||
            (this.options.wrapper !== window &&
              ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
                (this.animatedScroll === 0 && t > 0) ||
                (this.animatedScroll === this.limit && t < 0)))) &&
            (i.lenisStopPropagation = !0),
          i.preventDefault();
        const h = r && this.options.syncTouch,
          g = r && i.type === "touchend" && Math.abs(d) > 5;
        g && (d = this.velocity * this.options.touchInertiaMultiplier),
          this.scrollTo(this.targetScroll + d, {
            programmatic: !1,
            ...(h
              ? { lerp: g ? this.options.syncTouchLerp : 1 }
              : {
                  lerp: this.options.lerp,
                  duration: this.options.duration,
                  easing: this.options.easing,
                }),
          });
      });
      W(this, "onNativeScroll", () => {
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
          const n = this.animatedScroll;
          (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity),
            (this.velocity = this.animatedScroll - n),
            (this.direction = Math.sign(this.animatedScroll - n)),
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
      W(this, "raf", (n) => {
        const e = n - (this.time || n);
        (this.time = n),
          this.animate.advance(e * 0.001),
          this.options.autoRaf &&
            (this.__rafID = requestAnimationFrame(this.raf));
      });
      (window.lenisVersion = mm),
        (!n || n === document.documentElement) && (n = window),
        (this.options = {
          wrapper: n,
          content: e,
          eventsTarget: t,
          smoothWheel: i,
          syncTouch: r,
          syncTouchLerp: s,
          touchInertiaMultiplier: o,
          duration: a,
          easing: l,
          lerp: u,
          infinite: c,
          gestureOrientation: d,
          orientation: f,
          touchMultiplier: h,
          wheelMultiplier: p,
          autoResize: g,
          prevent: v,
          virtualScroll: w,
          overscroll: y,
          autoRaf: _,
          anchors: m,
          autoToggle: b,
          allowNestedScroll: E,
          __experimental__naiveDimensions: k,
        }),
        (this.dimensions = new Sm(n, e, { autoResize: g })),
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
        (this.virtualScroll = new xm(t, {
          touchMultiplier: h,
          wheelMultiplier: p,
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
    on(n, e) {
      return this.emitter.on(n, e);
    }
    off(n, e) {
      return this.emitter.off(n, e);
    }
    setScroll(n) {
      this.isHorizontal
        ? this.options.wrapper.scrollTo({ left: n, behavior: "instant" })
        : this.options.wrapper.scrollTo({ top: n, behavior: "instant" });
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
      n,
      {
        offset: e = 0,
        immediate: t = !1,
        lock: i = !1,
        duration: r = this.options.duration,
        easing: s = this.options.easing,
        lerp: o = this.options.lerp,
        onStart: a,
        onComplete: l,
        force: u = !1,
        programmatic: c = !0,
        userData: f,
      } = {}
    ) {
      if (!((this.isStopped || this.isLocked) && !u)) {
        if (typeof n == "string" && ["top", "left", "start"].includes(n)) n = 0;
        else if (typeof n == "string" && ["bottom", "right", "end"].includes(n))
          n = this.limit;
        else {
          let d;
          if (
            (typeof n == "string"
              ? (d = document.querySelector(n))
              : n instanceof HTMLElement && n?.nodeType && (d = n),
            d)
          ) {
            if (this.options.wrapper !== window) {
              const p = this.rootElement.getBoundingClientRect();
              e -= this.isHorizontal ? p.left : p.top;
            }
            const h = d.getBoundingClientRect();
            n = (this.isHorizontal ? h.left : h.top) + this.animatedScroll;
          }
        }
        if (typeof n == "number") {
          if (((n += e), (n = Math.round(n)), this.options.infinite)) {
            if (c) {
              this.targetScroll = this.animatedScroll = this.scroll;
              const d = n - this.animatedScroll;
              d > this.limit / 2
                ? (n = n - this.limit)
                : d < -this.limit / 2 && (n = n + this.limit);
            }
          } else n = kf(0, n, this.limit);
          if (n === this.targetScroll) {
            a?.(this), l?.(this);
            return;
          }
          if (((this.userData = f ?? {}), t)) {
            (this.animatedScroll = this.targetScroll = n),
              this.setScroll(this.scroll),
              this.reset(),
              this.preventNextNativeScrollEvent(),
              this.emit(),
              l?.(this),
              (this.userData = {}),
              requestAnimationFrame(() => {
                this.dispatchScrollendEvent();
              });
            return;
          }
          c || (this.targetScroll = n),
            this.animate.fromTo(this.animatedScroll, n, {
              duration: r,
              easing: s,
              lerp: o,
              onStart: () => {
                i && (this.isLocked = !0),
                  (this.isScrolling = "smooth"),
                  a?.(this);
              },
              onUpdate: (d, h) => {
                (this.isScrolling = "smooth"),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = d - this.animatedScroll),
                  (this.direction = Math.sign(this.velocity)),
                  (this.animatedScroll = d),
                  this.setScroll(this.scroll),
                  c && (this.targetScroll = d),
                  h || this.emit(),
                  h &&
                    (this.reset(),
                    this.emit(),
                    l?.(this),
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
    checkNestedScroll(n, { deltaX: e, deltaY: t }) {
      const i = Date.now(),
        r = n._lenis ?? (n._lenis = {});
      let s, o, a, l, u, c, f, d;
      const h = this.options.gestureOrientation;
      if (i - (r.time ?? 0) > 2e3) {
        r.time = Date.now();
        const b = window.getComputedStyle(n);
        r.computedStyle = b;
        const E = b.overflowX,
          k = b.overflowY;
        if (
          ((s = ["auto", "overlay", "scroll"].includes(E)),
          (o = ["auto", "overlay", "scroll"].includes(k)),
          (r.hasOverflowX = s),
          (r.hasOverflowY = o),
          (!s && !o) || (h === "vertical" && !o) || (h === "horizontal" && !s))
        )
          return !1;
        (u = n.scrollWidth),
          (c = n.scrollHeight),
          (f = n.clientWidth),
          (d = n.clientHeight),
          (a = u > f),
          (l = c > d),
          (r.isScrollableX = a),
          (r.isScrollableY = l),
          (r.scrollWidth = u),
          (r.scrollHeight = c),
          (r.clientWidth = f),
          (r.clientHeight = d);
      } else
        (a = r.isScrollableX),
          (l = r.isScrollableY),
          (s = r.hasOverflowX),
          (o = r.hasOverflowY),
          (u = r.scrollWidth),
          (c = r.scrollHeight),
          (f = r.clientWidth),
          (d = r.clientHeight);
      if (
        (!s && !o) ||
        (!a && !l) ||
        (h === "vertical" && (!o || !l)) ||
        (h === "horizontal" && (!s || !a))
      )
        return !1;
      let p;
      if (h === "horizontal") p = "x";
      else if (h === "vertical") p = "y";
      else {
        const b = e !== 0,
          E = t !== 0;
        b && s && a && (p = "x"), E && o && l && (p = "y");
      }
      if (!p) return !1;
      let g, v, w, y, _;
      if (p === "x") (g = n.scrollLeft), (v = u - f), (w = e), (y = s), (_ = a);
      else if (p === "y")
        (g = n.scrollTop), (v = c - d), (w = t), (y = o), (_ = l);
      else return !1;
      return (w > 0 ? g < v : g > 0) && y && _;
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
      const n = this.options.wrapper;
      return this.isHorizontal
        ? n.scrollX ?? n.scrollLeft
        : n.scrollY ?? n.scrollTop;
    }
    get scroll() {
      return this.options.infinite
        ? ym(this.animatedScroll, this.limit)
        : this.animatedScroll;
    }
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    get isScrolling() {
      return this._isScrolling;
    }
    set isScrolling(n) {
      this._isScrolling !== n &&
        ((this._isScrolling = n), this.updateClassName());
    }
    get isStopped() {
      return this._isStopped;
    }
    set isStopped(n) {
      this._isStopped !== n && ((this._isStopped = n), this.updateClassName());
    }
    get isLocked() {
      return this._isLocked;
    }
    set isLocked(n) {
      this._isLocked !== n && ((this._isLocked = n), this.updateClassName());
    }
    get isSmooth() {
      return this.isScrolling === "smooth";
    }
    get className() {
      let n = "lenis";
      return (
        this.options.autoToggle && (n += " lenis-autoToggle"),
        this.isStopped && (n += " lenis-stopped"),
        this.isLocked && (n += " lenis-locked"),
        this.isScrolling && (n += " lenis-scrolling"),
        this.isScrolling === "smooth" && (n += " lenis-smooth"),
        n
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
D.registerPlugin(Y);
let Vs;
const Em = () => {
    "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      ((Vs = new Tm({
        autoRaf: !0,
        lerp: 0.1,
        duration: 1.2,
        easing: (n) => Math.min(1, 1.001 - Math.pow(2, -12 * n)),
        smoothWheel: !0,
        smoothTouch: !1,
      })),
      Vs.on("scroll", Y.update),
      D.ticker.add((n) => {
        Vs.raf(n * 1e3);
      }),
      D.ticker.lagSmoothing(0));
  },
  Pf = () => {
    Em();
  },
  Sr = () => Vs,
  km = () => {
    const n = document.querySelectorAll("[career-modal='open-trigger']"),
      e = document.querySelectorAll("[career-modal='modal']");
    if (!n || !e) return;
    let t = null,
      i = null;
    const r = (s) => {
      if (s.key === "Escape" && t && i) {
        i.restart();
        const o = Sr();
        o && o.start();
      }
    };
    document.addEventListener("keydown", r),
      e.forEach((s) => {
        const o = s.getAttribute("career-modal-name"),
          a = s.querySelector("[career-modal='component']"),
          l = s.querySelector("[career-modal='main-info']"),
          u = s.querySelector("[career-modal='sec-info']"),
          c = s.querySelectorAll("[career-modal='close-trigger']");
        if (!a || !l || !u || !c) return;
        D.set(s, {
          opacity: 0,
          pointerEvents: "none",
          visibility: "hidden",
          display: "none",
        }),
          D.set(a, { clipPath: "inset(0% 0% 100% 0%)" }),
          D.set([l, u], { opacity: 0, y: 100, filter: "blur(2px)" });
        const f = D.timeline({ paused: !0 }),
          d = D.timeline({ paused: !0 });
        f.to(s, {
          opacity: 1,
          pointerEvents: "auto",
          visibility: "visible",
          display: "block",
          ease: "expo.out",
          duration: 0,
        }),
          f.to(
            a,
            { clipPath: "inset(0% 0% 0% 0%)", ease: "expo.inOut", duration: 1 },
            "<"
          ),
          f.to(
            [l, u],
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
          d.to([l, u], {
            y: 100,
            opacity: 0,
            filter: "blur(2px)",
            ease: "expo.out",
            duration: 0.8,
            stagger: -0.14,
          }),
          d.to(
            a,
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
        const h = Array.from(n).find(
          (p) => p.getAttribute("career-modal-name") === o
        );
        h &&
          h.addEventListener("click", () => {
            f.restart(), (t = s), (i = d);
            const p = Sr();
            p && p.stop();
          }),
          c.forEach((p) => {
            p.addEventListener("click", () => {
              d.restart(), (t = null), (i = null);
              const g = Sr();
              g && g.start();
            });
          });
      });
  },
  Cm = () => {
    km();
  },
  Pm = () => {
    const n = document.querySelectorAll("[clock='component']"),
      e = () => {
        n.forEach((t) => {
          const r = t.querySelector("[clock-location]")?.dataset.timezone,
            s = t.querySelector("[clock='hour-hand']"),
            o = t.querySelector("[clock='minute-hand']"),
            a = t.querySelector("[clock='text']");
          if (!r || !s || !o || !a) return;
          const l = new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: !0,
              timeZone: r,
            }),
            u = new Date(new Date().toLocaleString("en-US", { timeZone: r })),
            c = u.getHours() % 12,
            f = u.getMinutes(),
            d = u.getSeconds(),
            h = (c + f / 60) * 30,
            p = (f + d / 60) * 6;
          s.setAttribute("transform", `rotate(${h} 10 10)`),
            o.setAttribute("transform", `rotate(${p} 10 10)`),
            (a.textContent = l);
        }),
          requestAnimationFrame(e);
      };
    e();
  },
  Mf = () => {
    Pm();
  };
D.registerPlugin(we);
const Mm = (n) => {
    const e = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
      window.innerWidth <= 768;
    let t, i, r;
    const s = () => {
        t && typeof t.revert == "function" && (t.revert(), (t = null)),
          i && (i.kill(), (i = null)),
          document.querySelectorAll(".move-text").forEach((u) => {
            u.parentNode &&
              (u.parentNode.insertBefore(u.firstChild, u), u.remove());
          });
      },
      o = () => {
        const l = document.querySelector("[contact-hero='text']"),
          u = document.querySelector("[contact-hero='visual']"),
          c = document.querySelectorAll("[contact-hero='visual-info']"),
          f = document.querySelectorAll("[contact-hero='cta']");
        l &&
          (t = we.create(l, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "contact-hero-text-line",
            tag: "span",
            onSplit(d) {
              d.lines.forEach((p) => {
                const g = document.createElement("div");
                g.classList.add("move-text"),
                  p.parentNode.insertBefore(g, p),
                  g.appendChild(p);
              });
              const h = l.querySelectorAll("span");
              return (
                h.length &&
                  h.forEach((p) => {
                    const g = document.createElement("div");
                    (g.style.overflow = "clip"),
                      (g.style.paddingBottom = "3px"),
                      p.parentNode.insertBefore(g, p),
                      g.appendChild(p);
                  }),
                (i = D.timeline()),
                D.set(".move-text", { opacity: 0, yPercent: 100 }),
                D.set(u, { opacity: 0, clipPath: "inset(50% round 16px)" }),
                D.set(c, { opacity: 0, y: 50 }),
                D.set(f, { opacity: 0, yPercent: 50 }),
                i.to(".move-text", {
                  opacity: 1,
                  duration: 1.8,
                  stagger: 0.08,
                  ease: "expo.inOut",
                  yPercent: 0,
                }),
                i.to(
                  u,
                  {
                    opacity: 1,
                    clipPath: "inset(0% round 10px)",
                    duration: 1.8,
                    ease: "expo.inOut",
                  },
                  "-=1.4"
                ),
                i.to(
                  c,
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
      },
      a = () => {
        e() ||
          (clearTimeout(r),
          (r = setTimeout(() => {
            s(),
              setTimeout(() => {
                o();
              }, 100);
          }, 250)));
      };
    o(), e() || window.addEventListener("resize", a);
  },
  Am = () => {
    Mf(), Zi(), Qi();
    const n = Lr();
    n.add(() => Ji(), "-=1"), n.add(() => Mm(), "-=1");
  };
D.registerPlugin(we);
const Om = (n) => {
    const e = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
      window.innerWidth <= 768;
    let t, i, r;
    const s = () => {
        t && typeof t.revert == "function" && (t.revert(), (t = null)),
          i && (i.kill(), (i = null)),
          document.querySelectorAll(".move-text").forEach((u) => {
            u.parentNode &&
              (u.parentNode.insertBefore(u.firstChild, u), u.remove());
          });
      },
      o = () => {
        const l = document.querySelector("[career-hero='text']"),
          u = document.querySelector("[career-hero='btn']"),
          c = document.querySelector("[career-hero='visual']");
        l &&
          (t = we.create(l, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "career-hero-text-line",
            tag: "span",
            onSplit(f) {
              f.lines.forEach((h) => {
                const p = document.createElement("div");
                p.classList.add("move-text"),
                  h.parentNode.insertBefore(p, h),
                  p.appendChild(h);
              });
              const d = l.querySelectorAll("span");
              return (
                d.length &&
                  d.forEach((h) => {
                    const p = document.createElement("div");
                    (p.style.overflow = "clip"),
                      (p.style.paddingBottom = "3px"),
                      h.parentNode.insertBefore(p, h),
                      p.appendChild(h);
                  }),
                (i = D.timeline()),
                D.set(".move-text", { opacity: 0, yPercent: 100 }),
                D.set(u, { opacity: 0 }),
                D.set(c, { opacity: 0 }),
                i.to(".move-text", {
                  opacity: 1,
                  duration: 1.8,
                  stagger: 0.08,
                  ease: "expo.inOut",
                  yPercent: 0,
                }),
                i.to(u, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
                i.to(
                  c,
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
      },
      a = () => {
        e() ||
          (clearTimeout(r),
          (r = setTimeout(() => {
            s(),
              setTimeout(() => {
                o();
              }, 100);
          }, 250)));
      };
    o(), e() || window.addEventListener("resize", a);
  },
  Lm = () => {
    ll(), Cm(), Mf(), Zi(), Qi();
    const n = Lr();
    n.add(() => Ji(), "-=1"), n.add(() => Om(), "-=1");
  };
D.registerPlugin(we);
const Dm = (n) => {
    const e = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
      window.innerWidth <= 768;
    let t, i, r;
    const s = () => {
        t && typeof t.revert == "function" && (t.revert(), (t = null)),
          i && (i.kill(), (i = null)),
          document.querySelectorAll(".move-text").forEach((u) => {
            u.parentNode &&
              (u.parentNode.insertBefore(u.firstChild, u), u.remove());
          });
      },
      o = () => {
        const l = document.querySelector("[work-hero='text']"),
          u = document.querySelector("[work-hero='filter-wrap']"),
          c = document.querySelectorAll("[work-hero='project']");
        l &&
          (t = we.create(l, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "work-hero-text-line",
            tag: "span",
            onSplit(f) {
              f.lines.forEach((h) => {
                const p = document.createElement("div");
                p.classList.add("move-text"),
                  h.parentNode.insertBefore(p, h),
                  p.appendChild(h);
              });
              const d = l.querySelectorAll("span");
              return (
                d.length &&
                  d.forEach((h) => {
                    const p = document.createElement("div");
                    (p.style.overflow = "clip"),
                      (p.style.paddingBottom = "3px"),
                      h.parentNode.insertBefore(p, h),
                      p.appendChild(h);
                  }),
                (i = D.timeline()),
                D.set(".move-text", { opacity: 0, yPercent: 100 }),
                D.set(u, { opacity: 0 }),
                D.set(c, { y: 100, opacity: 0 }),
                i.to(".move-text", {
                  opacity: 1,
                  duration: 1.8,
                  stagger: 0.08,
                  ease: "expo.inOut",
                  yPercent: 0,
                }),
                i.to(u, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
                i.to(
                  c,
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
      },
      a = () => {
        e() ||
          (clearTimeout(r),
          (r = setTimeout(() => {
            s(),
              setTimeout(() => {
                o();
              }, 100);
          }, 250)));
      };
    o(), e() || window.addEventListener("resize", a);
  },
  Im = () => {
    Ef(), Zi(), Qi();
    const n = Lr();
    n.add(() => Ji(), "-=1"), n.add(() => Dm(), "-=1");
  },
  zm = () => {
    const n = document.querySelector("[service-link='wrap']");
    if (!n) return;
    const e = n.querySelectorAll("[service-link='item']"),
      t = document.querySelectorAll("[service-item]"),
      i = n.querySelector("[service-link='line-wrap']"),
      r = i?.querySelector("[service-link='line']"),
      s = document.querySelector("[hero-gradient='main']"),
      o = document.querySelectorAll("[hero-gradient]");
    if (!e.length || !t.length || !i || !r) return;
    let a = !1,
      l = null,
      u = null;
    const c = new Set(),
      f = () => {
        e.forEach((w) => {
          const y = w.querySelector("[service-link='num']");
          w.setAttribute("service-link-status", "inactive"),
            D.to(w, { opacity: 0.2, duration: 0.3 }),
            D.to(y, { opacity: 0, y: 5, duration: 0.3 });
        }),
          t.forEach((w) => {
            w.setAttribute("service-item-status", "inactive");
          }),
          o.forEach((w) => {
            w.getAttribute("hero-gradient") !== "main" &&
              D.to(w, { opacity: 0, duration: 0.5 });
          }),
          s && D.to(s, { opacity: 1, duration: 0.5 });
      },
      d = (w) => {
        if (u === w) return;
        u = w;
        const y = document.querySelector(
            `[service-link='item'][item-name='${w}']`
          ),
          _ = document.querySelector(`[service-item='${w}']`),
          m = document.querySelector(`[hero-gradient='${w}']`);
        if (y && _) {
          f();
          const b = y.querySelector("[service-link='num']");
          y.setAttribute("service-link-status", "active"),
            D.to(y, { opacity: 1, duration: 0.4 }),
            D.to(b, { opacity: 1, y: 0, duration: 0.4 }),
            _.setAttribute("service-item-status", "active"),
            c.has(w) || (h(_), c.add(w)),
            m &&
              (s && D.to(s, { opacity: 0, duration: 0.5 }),
              D.to(m, { opacity: 1, duration: 0.5 })),
            p(y);
        }
      },
      h = (w) => {
        const y = w.children;
        D.set(y, { opacity: 0, y: 50 }),
          D.to(y, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
          });
      },
      p = (w) => {
        const y = Array.from(e).indexOf(w),
          _ = e.length,
          m = i.offsetHeight,
          b = r.offsetHeight,
          E = m - b,
          k = _ > 1 ? y / (_ - 1) : 0,
          x = E * k;
        D.to(r, { y: x, duration: 0.6, ease: "power2.out" });
      };
    s && D.set(s, { opacity: 1 }),
      o.forEach((w) => {
        w.getAttribute("hero-gradient") !== "main" && D.set(w, { opacity: 0 });
      }),
      t.forEach((w) => {
        D.set(w.children, { opacity: 0, y: 50 });
      }),
      e.forEach((w) => {
        const y = w.getAttribute("item-name");
        w.addEventListener("click", () => {
          y &&
            (l && clearTimeout(l),
            (a = !0),
            d(y),
            Sr().scrollTo(document.querySelector(`[service-item='${y}']`), {
              duration: 1.6,
              offset: -100,
            }),
            (l = setTimeout(() => {
              a = !1;
            }, 2e3)));
        });
      });
    const g = new Map(),
      v = new IntersectionObserver(
        (w) => {
          if (a) return;
          w.forEach((m) => {
            const b = m.target.getAttribute("service-item");
            b &&
              (g.set(b, m.intersectionRatio),
              m.isIntersecting &&
                m.intersectionRatio >= 0.3 &&
                !c.has(b) &&
                (h(m.target), c.add(b)));
          });
          let y = null,
            _ = 0;
          g.forEach((m, b) => {
            m > _ && ((_ = m), (y = b));
          }),
            y && _ >= 0.3 ? d(y) : _ < 0.3 && (f(), (u = null));
        },
        { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
      );
    t.forEach((w) => v.observe(w));
  },
  Rm = () => {
    zm();
  };
var di,
  ul,
  so,
  Af,
  Of,
  Su,
  Pa,
  Lf,
  Df = function () {
    return typeof window < "u";
  },
  If = function () {
    return di || (Df() && (di = window.gsap) && di.registerPlugin && di);
  },
  Nm = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
  Wo = {
    rect: ["width", "height"],
    circle: ["r", "r"],
    ellipse: ["rx", "ry"],
    line: ["x2", "y2"],
  },
  dr = function (e) {
    return Math.round(e * 1e4) / 1e4;
  },
  Ti = function (e) {
    return parseFloat(e) || 0;
  },
  xu = function (e, t) {
    var i = Ti(e);
    return ~e.indexOf("%") ? (i / 100) * t : i;
  },
  Es = function (e, t) {
    return Ti(e.getAttribute(t));
  },
  qs = Math.sqrt,
  Tu = function (e, t, i, r, s, o) {
    return qs(
      Math.pow((Ti(i) - Ti(e)) * s, 2) + Math.pow((Ti(r) - Ti(t)) * o, 2)
    );
  },
  Eu = function (e) {},
  zf = function (e) {
    return e.getAttribute("vector-effect") === "non-scaling-stroke";
  },
  Fm = 1,
  Bm = function (e, t, i) {
    var r = e.indexOf(" "),
      s,
      o;
    return (
      r < 0
        ? ((s = i !== void 0 ? i + "" : e), (o = e))
        : ((s = e.substr(0, r)), (o = e.substr(r + 1))),
      (s = xu(s, t)),
      (o = xu(o, t)),
      s > o ? [o, s] : [s, o]
    );
  },
  $s = function (e) {
    if (((e = ul(e)[0]), !e)) return 0;
    var t = e.tagName.toLowerCase(),
      i = e.style,
      r = 1,
      s = 1,
      o,
      a,
      l,
      u,
      c,
      f,
      d;
    zf(e) &&
      ((s = e.getScreenCTM()),
      (r = qs(s.a * s.a + s.b * s.b)),
      (s = qs(s.d * s.d + s.c * s.c)));
    try {
      a = e.getBBox();
    } catch {
      Eu(
        "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
      );
    }
    var h = a || { x: 0, y: 0, width: 0, height: 0 },
      p = h.x,
      g = h.y,
      v = h.width,
      w = h.height;
    if (
      ((!a || (!v && !w)) &&
        Wo[t] &&
        ((v = Es(e, Wo[t][0])),
        (w = Es(e, Wo[t][1])),
        t !== "rect" && t !== "line" && ((v *= 2), (w *= 2)),
        t === "line" &&
          ((p = Es(e, "x1")),
          (g = Es(e, "y1")),
          (v = Math.abs(v - p)),
          (w = Math.abs(w - g)))),
      t === "path")
    )
      (u = i.strokeDasharray),
        (i.strokeDasharray = "none"),
        (o = e.getTotalLength() || 0),
        dr(r) !== dr(s) &&
          !Su &&
          (Su = 1) &&
          Eu(
            "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
          ),
        (o *= (r + s) / 2),
        (i.strokeDasharray = u);
    else if (t === "rect") o = v * 2 * r + w * 2 * s;
    else if (t === "line") o = Tu(p, g, p + v, g + w, r, s);
    else if (t === "polyline" || t === "polygon")
      for (
        l = e.getAttribute("points").match(Nm) || [],
          t === "polygon" && l.push(l[0], l[1]),
          o = 0,
          c = 2;
        c < l.length;
        c += 2
      )
        o += Tu(l[c - 2], l[c - 1], l[c], l[c + 1], r, s) || 0;
    else
      (t === "circle" || t === "ellipse") &&
        ((f = (v / 2) * r),
        (d = (w / 2) * s),
        (o = Math.PI * (3 * (f + d) - qs((3 * f + d) * (f + 3 * d)))));
    return o || 0;
  },
  ku = function (e, t) {
    if (((e = ul(e)[0]), !e)) return [0, 0];
    t || (t = $s(e) + 1);
    var i = so.getComputedStyle(e),
      r = i.strokeDasharray || "",
      s = Ti(i.strokeDashoffset),
      o = r.indexOf(",");
    return (
      o < 0 && (o = r.indexOf(" ")),
      (r = o < 0 ? t : Ti(r.substr(0, o))),
      r > t && (r = t),
      [-s || 0, r - s || 0]
    );
  },
  Cu = function () {
    Df() &&
      ((so = window),
      (Of = di = If()),
      (ul = di.utils.toArray),
      (Pa = di.core.getStyleSaver),
      (Lf = di.core.reverting || function () {}),
      (Af = ((so.navigator || {}).userAgent || "").indexOf("Edge") !== -1));
  },
  cl = {
    version: "3.13.0",
    name: "drawSVG",
    register: function (e) {
      (di = e), Cu();
    },
    init: function (e, t, i, r, s) {
      if (!e.getBBox) return !1;
      Of || Cu();
      var o = $s(e),
        a,
        l,
        u;
      return (
        (this.styles =
          Pa && Pa(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
        (this.tween = i),
        (this._style = e.style),
        (this._target = e),
        t + "" == "true"
          ? (t = "0 100%")
          : t
          ? (t + "").indexOf(" ") === -1 && (t = "0 " + t)
          : (t = "0 0"),
        (a = ku(e, o)),
        (l = Bm(t, o, a[0])),
        (this._length = dr(o)),
        (this._dash = dr(a[1] - a[0])),
        (this._offset = dr(-a[0])),
        (this._dashPT = this.add(
          this,
          "_dash",
          this._dash,
          dr(l[1] - l[0]),
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
          dr(-l[0]),
          0,
          0,
          0,
          0,
          0,
          1
        )),
        Af &&
          ((u = so.getComputedStyle(e)),
          u.strokeLinecap !== u.strokeLinejoin &&
            ((l = Ti(u.strokeMiterlimit)),
            this.add(e.style, "strokeMiterlimit", l, l + 0.01))),
        (this._live = zf(e) || ~(t + "").indexOf("live")),
        (this._nowrap = ~(t + "").indexOf("nowrap")),
        this._props.push("drawSVG"),
        Fm
      );
    },
    render: function (e, t) {
      if (t.tween._time || !Lf()) {
        var i = t._pt,
          r = t._style,
          s,
          o,
          a,
          l;
        if (i) {
          for (
            t._live &&
            ((s = $s(t._target)),
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
          (a = t._dash || (e && e !== 1 && 1e-4) || 0),
            (s = t._length - a + 0.1),
            (l = t._offset),
            a &&
              l &&
              a + Math.abs(l % t._length) > t._length - 0.05 &&
              (l += l < 0 ? 0.005 : -0.005) &&
              (s += 0.005),
            (r.strokeDashoffset = a ? l : l + 0.001),
            (r.strokeDasharray =
              s < 0.1
                ? "none"
                : a
                ? a + "px," + (t._nowrap ? 999999 : s) + "px"
                : "0px, 999999px");
        }
      } else t.styles.revert();
    },
    getLength: $s,
    getPosition: ku,
  };
If() && di.registerPlugin(cl);
D.registerPlugin(we, cl);
const Vm = (n) => {
  const e = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
    window.innerWidth <= 768;
  let t, i, r;
  const s = () => {
      t && typeof t.revert == "function" && (t.revert(), (t = null)),
        i && (i.kill(), (i = null)),
        document.querySelectorAll(".move-text").forEach((u) => {
          u.parentNode &&
            (u.parentNode.insertBefore(u.firstChild, u), u.remove());
        });
    },
    o = () => {
      const l = document.querySelector("[service-hero='text']"),
        u = document.querySelectorAll("[service-hero='btn']"),
        c = document.querySelectorAll("[service-hero='svg']"),
        f = document.querySelectorAll("[service-hero='svg'] path");
      l &&
        (t = we.create(l, {
          type: "lines",
          autoSplit: !0,
          mask: "lines",
          linesClass: "service-hero-text-line",
          tag: "span",
          onSplit(d) {
            d.lines.forEach((p) => {
              const g = document.createElement("div");
              g.classList.add("move-text"),
                p.parentNode.insertBefore(g, p),
                g.appendChild(p);
            });
            const h = l.querySelectorAll("span");
            return (
              h.length &&
                h.forEach((p) => {
                  const g = document.createElement("div");
                  (g.style.overflow = "clip"),
                    (g.style.paddingBottom = "3px"),
                    p.parentNode.insertBefore(g, p),
                    g.appendChild(p);
                }),
              (i = D.timeline()),
              D.set(".move-text", { opacity: 0, yPercent: 100 }),
              D.set(u, { opacity: 0, yPercent: 20, scale: 0 }),
              D.set(c, { opacity: 0 }),
              D.set(f, { drawSVG: 0 }),
              i.to(c, { opacity: 1, duration: 0, ease: "power1.out" }),
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
                u,
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
    },
    a = () => {
      e() ||
        (clearTimeout(r),
        (r = setTimeout(() => {
          s(),
            setTimeout(() => {
              o();
            }, 100);
        }, 250)));
    };
  o(), e() || window.addEventListener("resize", a);
};
D.registerPlugin(cl, Y);
const qm = () => {
    const n = document.querySelector(".services_hero_section"),
      e = document.querySelectorAll("[service-hero='svg'] path");
    if (e.length === 0) return;
    D.timeline({
      scrollTrigger: {
        trigger: n,
        start: "bottom 95%",
        end: "bottom 10%",
        scrub: 1.5,
      },
    }).to(e, { drawSVG: "100% 100% " });
  },
  $m = () => {
    qm();
  },
  Wm = () => {
    Rm(), Zi(), Qi(), $m();
    const n = Lr();
    n.add(() => Ji(), "-=1"), n.add(() => Vm(), "-=1");
  },
  Hm = () => {
    const n = document.querySelectorAll("[service-item]"),
      e = document.querySelector("[hero-gradient='main']"),
      t = document.querySelectorAll("[hero-gradient]");
    if (!n.length || !e) return;
    let i = !1,
      r = null,
      s = null;
    const o = () => {
        t.forEach((f) => {
          f.getAttribute("hero-gradient") !== "main" &&
            D.to(f, { opacity: 0, duration: 0.5 });
        }),
          D.to(e, { opacity: 1, duration: 0.5 });
      },
      a = (f) => {
        if (s === f) return;
        s = f;
        const d = document.querySelector(`[hero-gradient='${f}']`);
        d &&
          (D.to(e, { opacity: 0, duration: 0.5 }),
          t.forEach((h) => {
            const p = h.getAttribute("hero-gradient");
            p !== "main" && p !== f && D.to(h, { opacity: 0, duration: 0.5 });
          }),
          D.to(d, { opacity: 1, duration: 0.5 }));
      };
    D.set(e, { opacity: 1 }),
      t.forEach((f) => {
        f.getAttribute("hero-gradient") !== "main" && D.set(f, { opacity: 0 });
      });
    const l = new Map(),
      u = new IntersectionObserver(
        (f) => {
          if (i) return;
          f.forEach((p) => {
            const g = p.target.getAttribute("service-item");
            g && l.set(g, p.intersectionRatio);
          });
          let d = null,
            h = 0;
          l.forEach((p, g) => {
            p > h && ((h = p), (d = g));
          }),
            d && h >= 0.3 ? a(d) : h < 0.3 && (o(), (s = null));
        },
        { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
      );
    return (
      n.forEach((f) => u.observe(f)),
      {
        setGradient: (f) => {
          r && clearTimeout(r),
            (i = !0),
            f ? a(f) : (o(), (s = null)),
            (r = setTimeout(() => {
              i = !1;
            }, 1e3));
        },
        showMainGradient: o,
      }
    );
  },
  Gm = () => Hm();
var Ei,
  xr,
  fl,
  mo,
  Mn,
  Ws,
  oo,
  Wn,
  ii = "transform",
  Ma = ii + "Origin",
  Rf,
  dl = function (e) {
    var t = e.ownerDocument || e;
    for (
      !(ii in e.style) &&
      ("msTransform" in e.style) &&
      ((ii = "msTransform"), (Ma = ii + "Origin"));
      t.parentNode && (t = t.parentNode);

    );
    if (((xr = window), (oo = new Mr()), t)) {
      (Ei = t),
        (fl = t.documentElement),
        (mo = t.body),
        (Wn = Ei.createElementNS("http://www.w3.org/2000/svg", "g")),
        (Wn.style.transform = "none");
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
        (Rf = r.offsetParent !== i),
        s.removeChild(i));
    }
    return t;
  },
  Ym = function (e) {
    for (var t, i; e && e !== mo; )
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
  },
  Nf = [],
  Ff = [],
  hl = function () {
    return xr.pageYOffset || Ei.scrollTop || fl.scrollTop || mo.scrollTop || 0;
  },
  pl = function () {
    return (
      xr.pageXOffset || Ei.scrollLeft || fl.scrollLeft || mo.scrollLeft || 0
    );
  },
  gl = function (e) {
    return (
      e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
    );
  },
  Xm = function n(e) {
    if (xr.getComputedStyle(e).position === "fixed") return !0;
    if (((e = e.parentNode), e && e.nodeType === 1)) return n(e);
  },
  Ho = function n(e, t) {
    if (e.parentNode && (Ei || dl(e))) {
      var i = gl(e),
        r = i
          ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
          : "http://www.w3.org/1999/xhtml",
        s = i ? (t ? "rect" : "g") : "div",
        o = t !== 2 ? 0 : 100,
        a = t === 3 ? 100 : 0,
        l =
          "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        u = Ei.createElementNS
          ? Ei.createElementNS(r.replace(/^https/, "http"), s)
          : Ei.createElement(s);
      return (
        t &&
          (i
            ? (Ws || (Ws = n(e)),
              u.setAttribute("width", 0.01),
              u.setAttribute("height", 0.01),
              u.setAttribute("transform", "translate(" + o + "," + a + ")"),
              Ws.appendChild(u))
            : (Mn || ((Mn = n(e)), (Mn.style.cssText = l)),
              (u.style.cssText =
                l +
                "width:0.1px;height:0.1px;top:" +
                a +
                "px;left:" +
                o +
                "px"),
              Mn.appendChild(u))),
        u
      );
    }
    throw "Need document and parent.";
  },
  jm = function (e) {
    for (var t = new Mr(), i = 0; i < e.numberOfItems; i++)
      t.multiply(e.getItem(i).matrix);
    return t;
  },
  Bf = function (e) {
    var t = e.getCTM(),
      i;
    return (
      t ||
        ((i = e.style[ii]),
        (e.style[ii] = "none"),
        e.appendChild(Wn),
        (t = Wn.getCTM()),
        e.removeChild(Wn),
        i
          ? (e.style[ii] = i)
          : e.style.removeProperty(
              ii.replace(/([A-Z])/g, "-$1").toLowerCase()
            )),
      t || oo.clone()
    );
  },
  Um = function (e, t) {
    var i = gl(e),
      r = e === i,
      s = i ? Nf : Ff,
      o = e.parentNode,
      a =
        o && !i && o.shadowRoot && o.shadowRoot.appendChild ? o.shadowRoot : o,
      l,
      u,
      c,
      f,
      d,
      h;
    if (e === xr) return e;
    if (
      (s.length || s.push(Ho(e, 1), Ho(e, 2), Ho(e, 3)), (l = i ? Ws : Mn), i)
    )
      r
        ? ((c = Bf(e)), (f = -c.e / c.a), (d = -c.f / c.d), (u = oo))
        : e.getBBox
        ? ((c = e.getBBox()),
          (u = e.transform ? e.transform.baseVal : {}),
          (u = u.numberOfItems
            ? u.numberOfItems > 1
              ? jm(u)
              : u.getItem(0).matrix
            : oo),
          (f = u.a * c.x + u.c * c.y),
          (d = u.b * c.x + u.d * c.y))
        : ((u = new Mr()), (f = d = 0)),
        t && e.tagName.toLowerCase() === "g" && (f = d = 0),
        (r ? i : o).appendChild(l),
        l.setAttribute(
          "transform",
          "matrix(" +
            u.a +
            "," +
            u.b +
            "," +
            u.c +
            "," +
            u.d +
            "," +
            (u.e + f) +
            "," +
            (u.f + d) +
            ")"
        );
    else {
      if (((f = d = 0), Rf))
        for (
          u = e.offsetParent, c = e;
          c && (c = c.parentNode) && c !== u && c.parentNode;

        )
          (xr.getComputedStyle(c)[ii] + "").length > 4 &&
            ((f = c.offsetLeft), (d = c.offsetTop), (c = 0));
      if (
        ((h = xr.getComputedStyle(e)),
        h.position !== "absolute" && h.position !== "fixed")
      )
        for (u = e.offsetParent; o && o !== u; )
          (f += o.scrollLeft || 0), (d += o.scrollTop || 0), (o = o.parentNode);
      (c = l.style),
        (c.top = e.offsetTop - d + "px"),
        (c.left = e.offsetLeft - f + "px"),
        (c[ii] = h[ii]),
        (c[Ma] = h[Ma]),
        (c.position = h.position === "fixed" ? "fixed" : "absolute"),
        a.appendChild(l);
    }
    return l;
  },
  Go = function (e, t, i, r, s, o, a) {
    return (e.a = t), (e.b = i), (e.c = r), (e.d = s), (e.e = o), (e.f = a), e;
  },
  Mr = (function () {
    function n(t, i, r, s, o, a) {
      t === void 0 && (t = 1),
        i === void 0 && (i = 0),
        r === void 0 && (r = 0),
        s === void 0 && (s = 1),
        o === void 0 && (o = 0),
        a === void 0 && (a = 0),
        Go(this, t, i, r, s, o, a);
    }
    var e = n.prototype;
    return (
      (e.inverse = function () {
        var i = this.a,
          r = this.b,
          s = this.c,
          o = this.d,
          a = this.e,
          l = this.f,
          u = i * o - r * s || 1e-10;
        return Go(
          this,
          o / u,
          -r / u,
          -s / u,
          i / u,
          (s * l - o * a) / u,
          -(i * l - r * a) / u
        );
      }),
      (e.multiply = function (i) {
        var r = this.a,
          s = this.b,
          o = this.c,
          a = this.d,
          l = this.e,
          u = this.f,
          c = i.a,
          f = i.c,
          d = i.b,
          h = i.d,
          p = i.e,
          g = i.f;
        return Go(
          this,
          c * r + d * o,
          c * s + d * a,
          f * r + h * o,
          f * s + h * a,
          l + p * r + g * o,
          u + p * s + g * a
        );
      }),
      (e.clone = function () {
        return new n(this.a, this.b, this.c, this.d, this.e, this.f);
      }),
      (e.equals = function (i) {
        var r = this.a,
          s = this.b,
          o = this.c,
          a = this.d,
          l = this.e,
          u = this.f;
        return (
          r === i.a &&
          s === i.b &&
          o === i.c &&
          a === i.d &&
          l === i.e &&
          u === i.f
        );
      }),
      (e.apply = function (i, r) {
        r === void 0 && (r = {});
        var s = i.x,
          o = i.y,
          a = this.a,
          l = this.b,
          u = this.c,
          c = this.d,
          f = this.e,
          d = this.f;
        return (
          (r.x = s * a + o * u + f || 0), (r.y = s * l + o * c + d || 0), r
        );
      }),
      n
    );
  })();
function mi(n, e, t, i) {
  if (!n || !n.parentNode || (Ei || dl(n)).documentElement === n)
    return new Mr();
  var r = Ym(n),
    s = gl(n),
    o = s ? Nf : Ff,
    a = Um(n, t),
    l = o[0].getBoundingClientRect(),
    u = o[1].getBoundingClientRect(),
    c = o[2].getBoundingClientRect(),
    f = a.parentNode,
    d = !i && Xm(n),
    h = new Mr(
      (u.left - l.left) / 100,
      (u.top - l.top) / 100,
      (c.left - l.left) / 100,
      (c.top - l.top) / 100,
      l.left + (d ? 0 : pl()),
      l.top + (d ? 0 : hl())
    );
  if ((f.removeChild(a), r))
    for (l = r.length; l--; )
      (u = r[l]), (u.scaleX = u.scaleY = 0), u.renderTransform(1, u);
  return e ? h.inverse() : h;
}
var Km = 1,
  fn,
  nt,
  ve,
  Hn,
  Ni,
  ki,
  Aa,
  Pu = function (e, t) {
    return e.actions.forEach(function (i) {
      return i.vars[t] && i.vars[t](i);
    });
  },
  Oa = {},
  Mu = 180 / Math.PI,
  Zm = Math.PI / 180,
  ao = {},
  Au = {},
  vo = {},
  ml = function (e) {
    return typeof e == "string" ? e.split(" ").join("").split(",") : e;
  },
  Qm = ml("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
  _o = ml(
    "transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"
  ),
  Gn = function (e) {
    return fn(e)[0] || void 0;
  },
  Xr = function (e) {
    return Math.round(e * 1e4) / 1e4 || 0;
  },
  Yo = function (e, t, i) {
    return e.forEach(function (r) {
      return r.classList[i](t);
    });
  },
  Ou = {
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
  Vf = {
    zIndex: 1,
    simple: 1,
    clearProps: 1,
    scale: 1,
    absolute: 1,
    fitChild: 1,
    getVars: 1,
    props: 1,
  },
  qf = function (e) {
    return e.replace(/([A-Z])/g, "-$1").toLowerCase();
  },
  jr = function (e, t) {
    var i = {},
      r;
    for (r in e) t[r] || (i[r] = e[r]);
    return i;
  },
  vl = {},
  $f = function (e) {
    var t = (vl[e] = ml(e));
    return (vo[e] = t.concat(_o)), t;
  },
  Jm = function (e) {
    var t = e._gsap || nt.core.getCache(e);
    return t.gmCache === nt.ticker.frame
      ? t.gMatrix
      : ((t.gmCache = nt.ticker.frame), (t.gMatrix = mi(e, !0, !1, !0)));
  },
  e0 = function n(e, t, i) {
    i === void 0 && (i = 0);
    for (
      var r = e.parentNode,
        s = 1e3 * Math.pow(10, i) * (t ? -1 : 1),
        o = t ? -s * 900 : 0;
      e;

    )
      (o += s), (e = e.previousSibling);
    return r ? o + n(r, t, i + 1) : o;
  },
  lo = function (e, t, i) {
    return (
      e.forEach(function (r) {
        return (r.d = e0(i ? r.element : r.t, t));
      }),
      e.sort(function (r, s) {
        return r.d - s.d;
      }),
      e
    );
  },
  ns = function (e, t) {
    for (
      var i = e.element.style, r = (e.css = e.css || []), s = t.length, o, a;
      s--;

    )
      (o = t[s]),
        (a = i[o] || i.getPropertyValue(o)),
        r.push(a ? o : Au[o] || (Au[o] = qf(o)), a);
    return i;
  },
  uo = function (e) {
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
  },
  Lu = function (e, t) {
    e.forEach(function (i) {
      return (i.a.cache.uncache = 1);
    }),
      t || e.finalStates.forEach(uo);
  },
  Xo =
    "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(
      ","
    ),
  _l = function (e, t, i) {
    var r = e.element,
      s = e.width,
      o = e.height,
      a = e.uncache,
      l = e.getProp,
      u = r.style,
      c = 4,
      f,
      d,
      h;
    if ((typeof t != "object" && (t = e), ve && i !== 1))
      return (
        ve._abs.push({ t: r, b: e, a: e, sd: 0 }),
        ve._final.push(function () {
          return (e.cache.uncache = 1) && uo(e);
        }),
        r
      );
    for (
      d = l("display") === "none",
        (!e.isVisible || d) &&
          (d && (ns(e, ["display"]).display = t.display),
          (e.matrix = t.matrix),
          (e.width = s = e.width || t.width),
          (e.height = o = e.height || t.height)),
        ns(e, Xo),
        h = window.getComputedStyle(r);
      c--;

    )
      u[Xo[c]] = h[Xo[c]];
    if (
      ((u.gridArea = "1 / 1 / 1 / 1"),
      (u.transition = "none"),
      (u.position = "absolute"),
      (u.width = s + "px"),
      (u.height = o + "px"),
      u.top || (u.top = "0px"),
      u.left || (u.left = "0px"),
      a)
    )
      f = new Ar(r);
    else if (((f = jr(e, ao)), (f.position = "absolute"), e.simple)) {
      var p = r.getBoundingClientRect();
      f.matrix = new Mr(1, 0, 0, 1, p.left + pl(), p.top + hl());
    } else f.matrix = mi(r, !1, !1, !0);
    return (f = rn(f, e, !0)), (e.x = ki(f.x, 0.01)), (e.y = ki(f.y, 0.01)), r;
  },
  Du = function (e, t) {
    return (
      t !== !0 &&
        ((t = fn(t)),
        (e = e.filter(function (i) {
          if (t.indexOf((i.sd < 0 ? i.b : i.a).element) !== -1) return !0;
          i.t._gsap.renderTransform(1),
            i.b.isVisible &&
              ((i.t.style.width = i.b.width + "px"),
              (i.t.style.height = i.b.height + "px"));
        }))),
      e
    );
  },
  Wf = function (e) {
    return lo(e, !0).forEach(function (t) {
      return (
        (t.a.isVisible || t.b.isVisible) && _l(t.sd < 0 ? t.b : t.a, t.b, 1)
      );
    });
  },
  t0 = function (e, t) {
    return (t && e.idLookup[La(t).id]) || e.elementStates[0];
  },
  La = function (e, t, i, r) {
    return e instanceof Ar
      ? e
      : e instanceof ri
      ? t0(e, r)
      : new Ar(typeof e == "string" ? Gn(e) || void 0 : e, t, i);
  },
  i0 = function (e, t) {
    for (
      var i = nt.getProperty(e.element, null, "native"),
        r = (e.props = {}),
        s = t.length;
      s--;

    )
      r[t[s]] = (i(t[s]) + "").trim();
    return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), e;
  },
  Hf = function (e, t) {
    var i = e.style || e,
      r;
    for (r in t) i[r] = t[r];
  },
  r0 = function (e) {
    var t = e.getAttribute("data-flip-id");
    return t || e.setAttribute("data-flip-id", (t = "auto-" + Km++)), t;
  },
  Gf = function (e) {
    return e.map(function (t) {
      return t.element;
    });
  },
  Iu = function (e, t, i) {
    return e && t.length && i.add(e(Gf(t), i, new ri(t, 0, !0)), 0);
  },
  rn = function (e, t, i, r, s, o) {
    var a = e.element,
      l = e.cache,
      u = e.parent,
      c = e.x,
      f = e.y,
      d = t.width,
      h = t.height,
      p = t.scaleX,
      g = t.scaleY,
      v = t.rotation,
      w = t.bounds,
      y = o && Aa && Aa(a, "transform,width,height"),
      _ = e,
      m = t.matrix,
      b = m.e,
      E = m.f,
      k =
        e.bounds.width !== w.width ||
        e.bounds.height !== w.height ||
        e.scaleX !== p ||
        e.scaleY !== g ||
        e.rotation !== v,
      x = !k && e.simple && t.simple && !s,
      M,
      C,
      I,
      S,
      P,
      A,
      L;
    return (
      x || !u
        ? ((p = g = 1), (v = M = 0))
        : ((P = Jm(u)),
          (A = P.clone().multiply(
            t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix
          )),
          (v = Xr(Math.atan2(A.b, A.a) * Mu)),
          (M = Xr(Math.atan2(A.c, A.d) * Mu + v) % 360),
          (p = Math.sqrt(Math.pow(A.a, 2) + Math.pow(A.b, 2))),
          (g =
            Math.sqrt(Math.pow(A.c, 2) + Math.pow(A.d, 2)) * Math.cos(M * Zm)),
          s &&
            ((s = fn(s)[0]),
            (S = nt.getProperty(s)),
            (L = s.getBBox && typeof s.getBBox == "function" && s.getBBox()),
            (_ = {
              scaleX: S("scaleX"),
              scaleY: S("scaleY"),
              width: L ? L.width : Math.ceil(parseFloat(S("width", "px"))),
              height: L ? L.height : parseFloat(S("height", "px")),
            })),
          (l.rotation = v + "deg"),
          (l.skewX = M + "deg")),
      i
        ? ((p *= d === _.width || !_.width ? 1 : d / _.width),
          (g *= h === _.height || !_.height ? 1 : h / _.height),
          (l.scaleX = p),
          (l.scaleY = g))
        : ((d = ki((d * p) / _.scaleX, 0)),
          (h = ki((h * g) / _.scaleY, 0)),
          (a.style.width = d + "px"),
          (a.style.height = h + "px")),
      r && Hf(a, t.props),
      x || !u
        ? ((c += b - e.matrix.e), (f += E - e.matrix.f))
        : k || u !== t.parent
        ? (l.renderTransform(1, l),
          (A = mi(s || a, !1, !1, !0)),
          (C = P.apply({ x: A.e, y: A.f })),
          (I = P.apply({ x: b, y: E })),
          (c += I.x - C.x),
          (f += I.y - C.y))
        : ((P.e = P.f = 0),
          (I = P.apply({ x: b - e.matrix.e, y: E - e.matrix.f })),
          (c += I.x),
          (f += I.y)),
      (c = ki(c, 0.02)),
      (f = ki(f, 0.02)),
      o && !(o instanceof Ar)
        ? y && y.revert()
        : ((l.x = c + "px"), (l.y = f + "px"), l.renderTransform(1, l)),
      o &&
        ((o.x = c),
        (o.y = f),
        (o.rotation = v),
        (o.skewX = M),
        i ? ((o.scaleX = p), (o.scaleY = g)) : ((o.width = d), (o.height = h))),
      o || l
    );
  },
  jo = function (e, t) {
    return e instanceof ri ? e : new ri(e, t);
  },
  Yf = function (e, t, i) {
    var r = e.idLookup[i],
      s = e.alt[i];
    return s.isVisible &&
      (!(t.getElementState(s.element) || s).isVisible || !r.isVisible)
      ? s
      : r;
  },
  Uo = [],
  Ko = "width,height,overflowX,overflowY".split(","),
  ks,
  zu = function (e) {
    if (e !== ks) {
      var t = Ni.style,
        i = Ni.clientWidth === window.outerWidth,
        r = Ni.clientHeight === window.outerHeight,
        s = 4;
      if (e && (i || r)) {
        for (; s--; ) Uo[s] = t[Ko[s]];
        i && ((t.width = Ni.clientWidth + "px"), (t.overflowY = "hidden")),
          r && ((t.height = Ni.clientHeight + "px"), (t.overflowX = "hidden")),
          (ks = e);
      } else if (ks) {
        for (; s--; ) Uo[s] ? (t[Ko[s]] = Uo[s]) : t.removeProperty(qf(Ko[s]));
        ks = e;
      }
    }
  },
  Zo = function (e, t, i, r) {
    e instanceof ri && t instanceof ri, (i = i || {});
    var s = i,
      o = s.clearProps,
      a = s.onEnter,
      l = s.onLeave,
      u = s.absolute,
      c = s.absoluteOnLeave,
      f = s.custom,
      d = s.delay,
      h = s.paused,
      p = s.repeat,
      g = s.repeatDelay,
      v = s.yoyo,
      w = s.toggleClass,
      y = s.nested,
      _ = s.zIndex,
      m = s.scale,
      b = s.fade,
      E = s.stagger,
      k = s.spin,
      x = s.prune,
      M = ("props" in i ? i : e).props,
      C = jr(i, Ou),
      I = nt.timeline({
        delay: d,
        paused: h,
        repeat: p,
        repeatDelay: g,
        yoyo: v,
        data: "isFlip",
      }),
      S = C,
      P = [],
      A = [],
      L = [],
      z = [],
      R = k === !0 ? 1 : k || 0,
      F =
        typeof k == "function"
          ? k
          : function () {
              return R;
            },
      V = e.interrupted || t.interrupted,
      T = I[r !== 1 ? "to" : "from"],
      X,
      U,
      ue,
      ae,
      re,
      J,
      fe,
      pe,
      Oe,
      Be,
      me,
      Ve,
      H,
      ne;
    for (U in t.idLookup)
      (me = t.alt[U] ? Yf(t, e, U) : t.idLookup[U]),
        (re = me.element),
        (Be = e.idLookup[U]),
        e.alt[U] &&
          re === Be.element &&
          (e.alt[U].isVisible || !me.isVisible) &&
          (Be = e.alt[U]),
        Be
          ? ((J = {
              t: re,
              b: Be,
              a: me,
              sd: Be.element === re ? 0 : me.isVisible ? 1 : -1,
            }),
            L.push(J),
            J.sd &&
              (J.sd < 0 && ((J.b = me), (J.a = Be)),
              V && ns(J.b, M ? vo[M] : _o),
              b &&
                L.push(
                  (J.swap = {
                    t: Be.element,
                    b: J.b,
                    a: J.a,
                    sd: -J.sd,
                    swap: J,
                  })
                )),
            (re._flip = Be.element._flip = ve ? ve.timeline : I))
          : me.isVisible &&
            (L.push({
              t: re,
              b: jr(me, { isVisible: 1 }),
              a: me,
              sd: 0,
              entering: 1,
            }),
            (re._flip = ve ? ve.timeline : I));
    if (
      (M &&
        (vl[M] || $f(M)).forEach(function (O) {
          return (C[O] = function (ke) {
            return L[ke].a.props[O];
          });
        }),
      (L.finalStates = Oe = []),
      (Ve = function () {
        for (lo(L), zu(!0), ae = 0; ae < L.length; ae++)
          (J = L[ae]),
            (H = J.a),
            (ne = J.b),
            x && !H.isDifferent(ne) && !J.entering
              ? L.splice(ae--, 1)
              : ((re = J.t),
                y && !(J.sd < 0) && ae && (H.matrix = mi(re, !1, !1, !0)),
                ne.isVisible && H.isVisible
                  ? (J.sd < 0
                      ? ((fe = new Ar(re, M, e.simple)),
                        rn(fe, H, m, 0, 0, fe),
                        (fe.matrix = mi(re, !1, !1, !0)),
                        (fe.css = J.b.css),
                        (J.a = H = fe),
                        b && (re.style.opacity = V ? ne.opacity : H.opacity),
                        E && z.push(re))
                      : J.sd > 0 &&
                        b &&
                        (re.style.opacity = V ? H.opacity - ne.opacity : "0"),
                    rn(H, ne, m, M))
                  : ne.isVisible !== H.isVisible &&
                    (ne.isVisible
                      ? H.isVisible ||
                        ((ne.css = H.css),
                        A.push(ne),
                        L.splice(ae--, 1),
                        u && y && rn(H, ne, m, M))
                      : (H.isVisible && P.push(H), L.splice(ae--, 1))),
                m ||
                  ((re.style.maxWidth = Math.max(H.width, ne.width) + "px"),
                  (re.style.maxHeight = Math.max(H.height, ne.height) + "px"),
                  (re.style.minWidth = Math.min(H.width, ne.width) + "px"),
                  (re.style.minHeight = Math.min(H.height, ne.height) + "px")),
                y && w && re.classList.add(w)),
            Oe.push(H);
        var ke;
        if (
          (w &&
            ((ke = Oe.map(function (q) {
              return q.element;
            })),
            y &&
              ke.forEach(function (q) {
                return q.classList.remove(w);
              })),
          zu(!1),
          m
            ? ((C.scaleX = function (q) {
                return L[q].a.scaleX;
              }),
              (C.scaleY = function (q) {
                return L[q].a.scaleY;
              }))
            : ((C.width = function (q) {
                return L[q].a.width + "px";
              }),
              (C.height = function (q) {
                return L[q].a.height + "px";
              }),
              (C.autoRound = i.autoRound || !1)),
          (C.x = function (q) {
            return L[q].a.x + "px";
          }),
          (C.y = function (q) {
            return L[q].a.y + "px";
          }),
          (C.rotation = function (q) {
            return L[q].a.rotation + (k ? F(q, pe[q], pe) * 360 : 0);
          }),
          (C.skewX = function (q) {
            return L[q].a.skewX;
          }),
          (pe = L.map(function (q) {
            return q.t;
          })),
          (_ || _ === 0) &&
            ((C.modifiers = {
              zIndex: function () {
                return _;
              },
            }),
            (C.zIndex = _),
            (C.immediateRender = i.immediateRender !== !1)),
          b &&
            (C.opacity = function (q) {
              return L[q].sd < 0 ? 0 : L[q].sd > 0 ? L[q].a.opacity : "+=0";
            }),
          z.length)
        ) {
          E = nt.utils.distribute(E);
          var Ut = pe.slice(z.length);
          C.stagger = function (q, Vt) {
            return E(~z.indexOf(Vt) ? pe.indexOf(L[q].swap.t) : q, Vt, Ut);
          };
        }
        if (
          (Qm.forEach(function (q) {
            return i[q] && I.eventCallback(q, i[q], i[q + "Params"]);
          }),
          f && pe.length)
        ) {
          (S = jr(C, Ou)),
            "scale" in f && ((f.scaleX = f.scaleY = f.scale), delete f.scale);
          for (U in f)
            (X = jr(f[U], Vf)),
              (X[U] = C[U]),
              !("duration" in X) &&
                "duration" in C &&
                (X.duration = C.duration),
              (X.stagger = C.stagger),
              T.call(I, pe, X, 0),
              delete S[U];
        }
        (pe.length || A.length || P.length) &&
          (w &&
            I.add(function () {
              return Yo(ke, w, I._zTime < 0 ? "remove" : "add");
            }, 0) &&
            !h &&
            Yo(ke, w, "add"),
          pe.length && T.call(I, pe, S, 0)),
          Iu(a, P, I),
          Iu(l, A, I);
        var Bt = ve && ve.timeline;
        Bt &&
          (Bt.add(I, 0),
          ve._final.push(function () {
            return Lu(L, !o);
          })),
          (ue = I.duration()),
          I.call(function () {
            var q = I.time() >= ue;
            q && !Bt && Lu(L, !o), w && Yo(ke, w, q ? "remove" : "add");
          });
      }),
      c &&
        (u = L.filter(function (O) {
          return !O.sd && !O.a.isVisible && O.b.isVisible;
        }).map(function (O) {
          return O.a.element;
        })),
      ve)
    ) {
      var Xe;
      u && (Xe = ve._abs).push.apply(Xe, Du(L, u)), ve._run.push(Ve);
    } else u && Wf(Du(L, u)), Ve();
    var je = ve ? ve.timeline : I;
    return (
      (je.revert = function () {
        return yl(je, 1, 1);
      }),
      je
    );
  },
  n0 = function n(e) {
    e.vars.onInterrupt &&
      e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []),
      e.getChildren(!0, !1, !0).forEach(n);
  },
  yl = function (e, t, i) {
    if (e && e.progress() < 1 && (!e.paused() || i))
      return t && (n0(e), t < 2 && e.progress(1), e.kill()), !0;
  },
  Cs = function (e) {
    for (
      var t = (e.idLookup = {}),
        i = (e.alt = {}),
        r = e.elementStates,
        s = r.length,
        o;
      s--;

    )
      (o = r[s]), t[o.id] ? (i[o.id] = o) : (t[o.id] = o);
  },
  ri = (function () {
    function n(t, i, r) {
      if (((this.props = i && i.props), (this.simple = !!(i && i.simple)), r))
        (this.targets = Gf(t)), (this.elementStates = t), Cs(this);
      else {
        this.targets = fn(t);
        var s = i && (i.kill === !1 || (i.batch && !i.kill));
        ve && !s && ve._kill.push(this), this.update(s || !!ve);
      }
    }
    var e = n.prototype;
    return (
      (e.update = function (i) {
        var r = this;
        return (
          (this.elementStates = this.targets.map(function (s) {
            return new Ar(s, r.props, r.simple);
          })),
          Cs(this),
          this.interrupt(i),
          this.recordInlineStyles(),
          this
        );
      }),
      (e.clear = function () {
        return (
          (this.targets.length = this.elementStates.length = 0), Cs(this), this
        );
      }),
      (e.fit = function (i, r, s) {
        for (
          var o = lo(this.elementStates.slice(0), !1, !0),
            a = (i || this).idLookup,
            l = 0,
            u,
            c;
          l < o.length;
          l++
        )
          (u = o[l]),
            s && (u.matrix = mi(u.element, !1, !1, !0)),
            (c = a[u.id]),
            c && rn(u, c, r, !0, 0, u),
            (u.matrix = mi(u.element, !1, !1, !0));
        return this;
      }),
      (e.getProperty = function (i, r) {
        var s = this.getElementState(i) || ao;
        return (r in s ? s : s.props || ao)[r];
      }),
      (e.add = function (i) {
        for (
          var r = i.targets.length, s = this.idLookup, o = this.alt, a, l, u;
          r--;

        )
          (l = i.elementStates[r]),
            (u = s[l.id]),
            u &&
            (l.element === u.element ||
              (o[l.id] && o[l.id].element === l.element))
              ? ((a = this.elementStates.indexOf(
                  l.element === u.element ? u : o[l.id]
                )),
                this.targets.splice(a, 1, i.targets[r]),
                this.elementStates.splice(a, 1, l))
              : (this.targets.push(i.targets[r]), this.elementStates.push(l));
        return (
          i.interrupted && (this.interrupted = !0),
          i.simple || (this.simple = !1),
          Cs(this),
          this
        );
      }),
      (e.compare = function (i) {
        var r = i.idLookup,
          s = this.idLookup,
          o = [],
          a = [],
          l = [],
          u = [],
          c = [],
          f = i.alt,
          d = this.alt,
          h = function (x, M, C) {
            return (
              (x.isVisible !== M.isVisible
                ? x.isVisible
                  ? l
                  : u
                : x.isVisible
                ? a
                : o
              ).push(C) && c.push(C)
            );
          },
          p = function (x, M, C) {
            return c.indexOf(C) < 0 && h(x, M, C);
          },
          g,
          v,
          w,
          y,
          _,
          m,
          b,
          E;
        for (w in r)
          (_ = f[w]),
            (m = d[w]),
            (g = _ ? Yf(i, this, w) : r[w]),
            (y = g.element),
            (v = s[w]),
            m
              ? ((E = v.isVisible || (!m.isVisible && y === v.element) ? v : m),
                (b =
                  _ && !g.isVisible && !_.isVisible && E.element === _.element
                    ? _
                    : g),
                b.isVisible && E.isVisible && b.element !== E.element
                  ? ((b.isDifferent(E) ? a : o).push(b.element, E.element),
                    c.push(b.element, E.element))
                  : h(b, E, b.element),
                _ && b.element === _.element && (_ = r[w]),
                p(b.element !== v.element && _ ? _ : b, v, v.element),
                p(_ && _.element === m.element ? _ : b, m, m.element),
                _ && p(_, m.element === _.element ? m : v, _.element))
              : (v ? (v.isDifferent(g) ? h(g, v, y) : o.push(y)) : l.push(y),
                _ && p(_, v, _.element));
        for (w in s)
          r[w] || (u.push(s[w].element), d[w] && u.push(d[w].element));
        return { changed: a, unchanged: o, enter: l, leave: u };
      }),
      (e.recordInlineStyles = function () {
        for (var i = vo[this.props] || _o, r = this.elementStates.length; r--; )
          ns(this.elementStates[r], i);
      }),
      (e.interrupt = function (i) {
        var r = this,
          s = [];
        this.targets.forEach(function (o) {
          var a = o._flip,
            l = yl(a, i ? 0 : 1);
          i &&
            l &&
            s.indexOf(a) < 0 &&
            a.add(function () {
              return r.updateVisibility();
            }),
            l && s.push(a);
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
        return this.elementStates[this.targets.indexOf(Gn(i))];
      }),
      (e.makeAbsolute = function () {
        return lo(this.elementStates.slice(0), !0, !0).map(_l);
      }),
      n
    );
  })(),
  Ar = (function () {
    function n(t, i, r) {
      (this.element = t), this.update(i, r);
    }
    var e = n.prototype;
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
          o = s.element,
          a = nt.getProperty(o),
          l = nt.core.getCache(o),
          u = o.getBoundingClientRect(),
          c =
            o.getBBox &&
            typeof o.getBBox == "function" &&
            o.nodeName.toLowerCase() !== "svg" &&
            o.getBBox(),
          f = r
            ? new Mr(1, 0, 0, 1, u.left + pl(), u.top + hl())
            : mi(o, !1, !1, !0);
        (l.uncache = 1),
          (s.getProp = a),
          (s.element = o),
          (s.id = r0(o)),
          (s.matrix = f),
          (s.cache = l),
          (s.bounds = u),
          (s.isVisible = !!(u.width || u.height || u.left || u.top)),
          (s.display = a("display")),
          (s.position = a("position")),
          (s.parent = o.parentNode),
          (s.x = a("x")),
          (s.y = a("y")),
          (s.scaleX = l.scaleX),
          (s.scaleY = l.scaleY),
          (s.rotation = a("rotation")),
          (s.skewX = a("skewX")),
          (s.opacity = a("opacity")),
          (s.width = c ? c.width : ki(a("width", "px"), 0.04)),
          (s.height = c ? c.height : ki(a("height", "px"), 0.04)),
          i && i0(s, vl[i] || $f(i)),
          (s.ctm =
            o.getCTM && o.nodeName.toLowerCase() === "svg" && Bf(o).inverse()),
          (s.simple =
            r || (Xr(f.a) === 1 && !Xr(f.b) && !Xr(f.c) && Xr(f.d) === 1)),
          (s.uncache = 0);
      }),
      n
    );
  })(),
  s0 = (function () {
    function n(t, i) {
      (this.vars = t),
        (this.batch = i),
        (this.states = []),
        (this.timeline = i.timeline);
    }
    var e = n.prototype;
    return (
      (e.getStateById = function (i) {
        for (var r = this.states.length; r--; )
          if (this.states[r].idLookup[i]) return this.states[r];
      }),
      (e.kill = function () {
        this.batch.remove(this);
      }),
      n
    );
  })(),
  o0 = (function () {
    function n(t) {
      (this.id = t),
        (this.actions = []),
        (this._kill = []),
        (this._final = []),
        (this._abs = []),
        (this._run = []),
        (this.data = {}),
        (this.state = new ri()),
        (this.timeline = nt.timeline());
    }
    var e = n.prototype;
    return (
      (e.add = function (i) {
        var r = this.actions.filter(function (s) {
          return s.vars === i;
        });
        return r.length
          ? r[0]
          : ((r = new s0(typeof i == "function" ? { animate: i } : i, this)),
            this.actions.push(r),
            r);
      }),
      (e.remove = function (i) {
        var r = this.actions.indexOf(i);
        return r >= 0 && this.actions.splice(r, 1), this;
      }),
      (e.getState = function (i) {
        var r = this,
          s = ve,
          o = Hn;
        return (
          (ve = this),
          this.state.clear(),
          (this._kill.length = 0),
          this.actions.forEach(function (a) {
            a.vars.getState &&
              ((a.states.length = 0), (Hn = a), (a.state = a.vars.getState(a))),
              i &&
                a.states.forEach(function (l) {
                  return r.state.add(l);
                });
          }),
          (Hn = o),
          (ve = s),
          this.killConflicts(),
          this
        );
      }),
      (e.animate = function () {
        var i = this,
          r = ve,
          s = this.timeline,
          o = this.actions.length,
          a,
          l;
        for (
          ve = this,
            s.clear(),
            this._abs.length = this._final.length = this._run.length = 0,
            this.actions.forEach(function (u) {
              u.vars.animate && u.vars.animate(u);
              var c = u.vars.onEnter,
                f = u.vars.onLeave,
                d = u.targets,
                h,
                p;
              d &&
                d.length &&
                (c || f) &&
                ((h = new ri()),
                u.states.forEach(function (g) {
                  return h.add(g);
                }),
                (p = h.compare(dn.getState(d))),
                p.enter.length && c && c(p.enter),
                p.leave.length && f && f(p.leave));
            }),
            Wf(this._abs),
            this._run.forEach(function (u) {
              return u();
            }),
            l = s.duration(),
            a = this._final.slice(0),
            s.add(function () {
              l <= s.time() &&
                (a.forEach(function (u) {
                  return u();
                }),
                Pu(i, "onComplete"));
            }),
            ve = r;
          o--;

        )
          this.actions[o].vars.once && this.actions[o].kill();
        return Pu(this, "onStart"), s.restart(), this;
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
              var o,
                a = function l(u) {
                  u && (s.targets = u),
                    (o = r.indexOf(l)),
                    ~o && (r.splice(o, 1), r.length || i());
                };
              r.push(a), s.vars.loadState(a);
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
          this !== ve &&
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
        (this._killed = 1), this.clear(), delete Oa[this.id];
      }),
      n
    );
  })(),
  dn = (function () {
    function n() {}
    return (
      (n.getState = function (t, i) {
        var r = jo(t, i);
        return (
          Hn && Hn.states.push(r),
          i && i.batch && n.batch(i.batch).state.add(r),
          r
        );
      }),
      (n.from = function (t, i) {
        return (
          (i = i || {}),
          "clearProps" in i || (i.clearProps = !0),
          Zo(
            t,
            jo(i.targets || t.targets, {
              props: i.props || t.props,
              simple: i.simple,
              kill: !!i.kill,
            }),
            i,
            -1
          )
        );
      }),
      (n.to = function (t, i) {
        return Zo(
          t,
          jo(i.targets || t.targets, {
            props: i.props || t.props,
            simple: i.simple,
            kill: !!i.kill,
          }),
          i,
          1
        );
      }),
      (n.fromTo = function (t, i, r) {
        return Zo(t, i, r);
      }),
      (n.fit = function (t, i, r) {
        var s = r ? jr(r, Vf) : {},
          o = r || s,
          a = o.absolute,
          l = o.scale,
          u = o.getVars,
          c = o.props,
          f = o.runBackwards,
          d = o.onComplete,
          h = o.simple,
          p = r && r.fitChild && Gn(r.fitChild),
          g = La(i, c, h, t),
          v = La(t, 0, h, g),
          w = c ? vo[c] : _o,
          y = nt.context();
        return (
          c && Hf(s, g.props),
          ns(v, w),
          f &&
            ("immediateRender" in s || (s.immediateRender = !0),
            (s.onComplete = function () {
              uo(v), d && d.apply(this, arguments);
            })),
          a && _l(v, g),
          (s = rn(v, g, l || p, !s.duration && c, p, s.duration || u ? s : 0)),
          typeof r == "object" && "zIndex" in r && (s.zIndex = r.zIndex),
          y &&
            !u &&
            y.add(function () {
              return function () {
                return uo(v);
              };
            }),
          u ? s : s.duration ? nt.to(v.element, s) : null
        );
      }),
      (n.makeAbsolute = function (t, i) {
        return (t instanceof ri ? t : new ri(t, i)).makeAbsolute();
      }),
      (n.batch = function (t) {
        return t || (t = "default"), Oa[t] || (Oa[t] = new o0(t));
      }),
      (n.killFlipsOf = function (t, i) {
        (t instanceof ri ? t.targets : fn(t)).forEach(function (r) {
          return r && yl(r._flip, i !== !1 ? 1 : 2);
        });
      }),
      (n.isFlipping = function (t) {
        var i = n.getByTarget(t);
        return !!i && i.isActive();
      }),
      (n.getByTarget = function (t) {
        return (Gn(t) || ao)._flip;
      }),
      (n.getElementState = function (t, i) {
        return new Ar(Gn(t), i);
      }),
      (n.convertCoordinates = function (t, i, r) {
        var s = mi(i, !0, !0).multiply(mi(t));
        return r ? s.apply(r) : s;
      }),
      (n.register = function (t) {
        if (((Ni = typeof document < "u" && document.body), Ni)) {
          (nt = t),
            dl(Ni),
            (fn = nt.utils.toArray),
            (Aa = nt.core.getStyleSaver);
          var i = nt.utils.snap(0.1);
          ki = function (s, o) {
            return i(parseFloat(s) + o);
          };
        }
      }),
      n
    );
  })();
dn.version = "3.13.0";
typeof window < "u" && window.gsap && window.gsap.registerPlugin(dn);
D.registerPlugin(dn);
const a0 = () => {
    document.querySelector(".seo_header_flip_wrap");
    const n = document.querySelector(".seo_header_title_col"),
      e = document.querySelector(".seo_header_title_text"),
      t = document.querySelector(".seo_header_empty_col"),
      i = document.querySelector(".seo_header_service_col"),
      r = document.querySelector(".seo_header_service_component"),
      s = document.querySelector(".seo_heading_text"),
      o = document.querySelector(".seo_header_service_button"),
      a = document.querySelector(".seo_service_list_wrap"),
      l = document.querySelector(".project_card_tags_seo");
    function u() {
      const c = dn.getState([n, e, t, i, r, s, o, a, l], {
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
        a.classList.toggle("inactive"),
        l.classList.toggle("active"),
        s.classList.toggle("active"),
        r.classList.toggle("active"),
        o.classList.toggle("active"),
        dn.from(c, { duration: 1.6, ease: "expo.inOut", absoluteOnLeave: !0 });
    }
    o.addEventListener("click", u), o.addEventListener("click", () => {});
  },
  l0 = () => {
    a0();
  },
  u0 = () => {
    Gm(), Zi(), ll(), Qi(), l0(), Zu(), Lr().add(() => Ji(), "-=1");
  };
D.registerPlugin(we);
const c0 = (n) => {
    const e = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
      window.innerWidth <= 768;
    let t = [],
      i,
      r;
    const s = () => {
        t.forEach((u) => {
          u && typeof u.revert == "function" && u.revert();
        }),
          (t = []),
          i && (i.kill(), (i = null)),
          document
            .querySelectorAll(
              ".move-text-main, .move-text-title, .move-text-info, .move-text-meta"
            )
            .forEach((u) => {
              u.parentNode &&
                (u.parentNode.insertBefore(u.firstChild, u), u.remove());
            });
      },
      o = async () => {
        const l = document.querySelector("[work-cms-hero='text']"),
          u = document.querySelector("[work-cms-hero='back-btn']"),
          c = document.querySelector("[work-cms-hero='line']"),
          f = document.querySelector("[work-cms-hero='info']"),
          d = document.querySelector("[work-cms-hero='info-title']"),
          h = document.querySelector("[work-cms-hero='info-text']"),
          p = document.querySelector("[work-cms-hero='info-meta']"),
          g = document.querySelectorAll("[work-cms-hero='tag']"),
          v = document.querySelectorAll("[work-cms-hero='visual']"),
          w = document.querySelector("[work-cms-hero='bg'] img");
        l &&
          we.create(l, {
            type: "chars, lines, words",
            autoSplit: !0,
            mask: "lines",
            linesClass: "work-cms-hero-text-line",
            tag: "div",
            onSplit(y) {
              we.create(d, {
                type: "lines",
                autoSplit: !0,
                mask: "lines",
                linesClass: "work-cms-info-title-line",
                tag: "div",
                onSplit(_) {
                  we.create(h, {
                    type: "lines",
                    autoSplit: !0,
                    mask: "lines",
                    linesClass: "work-cms-info-text-line",
                    tag: "div",
                    onSplit(m) {
                      we.create(p, {
                        type: "lines",
                        autoSplit: !0,
                        mask: "lines",
                        linesClass: "work-cms-info-meta-line",
                        tag: "div",
                        onSplit(b) {
                          t.push(y, _, m, b),
                            y.lines.forEach((k) => {
                              const x = document.createElement("div");
                              x.classList.add("move-text-main"),
                                (x.style.overflow = "clip"),
                                (x.style.position = "relative"),
                                k.parentNode.insertBefore(x, k),
                                x.appendChild(k);
                            }),
                            _.lines.forEach((k) => {
                              const x = document.createElement("div");
                              x.classList.add("move-text-title"),
                                (x.style.overflow = "clip"),
                                (x.style.position = "relative"),
                                k.parentNode.insertBefore(x, k),
                                x.appendChild(k);
                            }),
                            m.lines.forEach((k) => {
                              const x = document.createElement("div");
                              x.classList.add("move-text-info"),
                                (x.style.overflow = "clip"),
                                (x.style.position = "relative"),
                                k.parentNode.insertBefore(x, k),
                                x.appendChild(k);
                            }),
                            b.lines.forEach((k) => {
                              const x = document.createElement("div");
                              x.classList.add("move-text-meta"),
                                (x.style.overflow = "clip"),
                                (x.style.position = "relative"),
                                k.parentNode.insertBefore(x, k),
                                x.appendChild(k);
                            });
                          const E = (k, x) => {
                            const M = k.querySelectorAll("span");
                            M.length &&
                              M.forEach((C) => {
                                const I = document.createElement("div");
                                (I.style.overflow = "clip"),
                                  (I.style.position = "relative"),
                                  (I.style.paddingBottom = "3px"),
                                  C.parentNode.insertBefore(I, C),
                                  I.appendChild(C);
                              });
                          };
                          return (
                            E(l),
                            E(d),
                            E(h),
                            E(p),
                            (i = D.timeline()),
                            D.set(y.chars, { opacity: 0, yPercent: 100 }),
                            D.set(u, { opacity: 0, yPercent: 100 }),
                            D.set(g, {
                              opacity: 0,
                              y: 50,
                              scale: 0.4,
                              transformOrigin: "center right",
                            }),
                            D.set(c, {
                              opacity: 0,
                              scaleX: 0,
                              transformOrigin: "center left",
                            }),
                            D.set(f, { opacity: 0, y: 50 }),
                            D.set(".move-text-title", {
                              opacity: 0,
                              yPercent: 100,
                            }),
                            D.set(".move-text-info", {
                              opacity: 0,
                              yPercent: 100,
                            }),
                            D.set(".move-text-meta", {
                              opacity: 0,
                              yPercent: 100,
                            }),
                            D.set(v, { y: 100, opacity: 0 }),
                            D.set(w, { scale: 1.4 }),
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
                              w,
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
                            i.to(c, { opacity: 1, duration: 0 }, "<"),
                            i.to(
                              c,
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
                              v,
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
      },
      a = () => {
        e() ||
          (clearTimeout(r),
          (r = setTimeout(() => {
            s(),
              setTimeout(() => {
                o();
              }, 100);
          }, 250)));
      };
    o(), e() || window.addEventListener("resize", a);
  },
  f0 = () => {
    Zi(), Qi();
    const n = Lr();
    n.add(() => Ji(), "-=1.4"), n.add(() => c0(), "-=1.4");
  },
  d0 = {
    home: wu,
    about: gm,
    work: Im,
    contact: Am,
    career: Lm,
    "extra-page": wu,
    service: Wm,
    work_cms: f0,
    seo: u0,
  },
  h0 = () => {
    const n = document.querySelector("[page-route]");
    if (!n) return;
    const e = n.getAttribute("page-route"),
      t = d0[e];
    t && t();
  },
  p0 = () => {
    const n = document.querySelector("[nav-menu='trigger']"),
      e = document.querySelector("[nav-menu='component']"),
      t = document.querySelector("[nav-menu='contain']"),
      i = document.querySelector("[main-nav='brand']"),
      r = document.querySelector("[nav-menu='brand']"),
      s = document.querySelectorAll("[nav-menu='link-item']"),
      o = document.querySelector("[nav-menu='info-text']"),
      a = document.querySelectorAll("[nav-menu='close']"),
      l = document.querySelectorAll("[nav-menu='social-link']");
    if (!n || !e || !t || !r || !s || !o || !l) return;
    D.set(e, { clipPath: "inset(0% 0% 100% 0%)" }),
      D.set([r, s, l], { y: "100%", opacity: 0 }),
      D.set(o, { y: "20%", opacity: 0 });
    const u = D.timeline({ paused: !0 }),
      c = D.timeline({ paused: !0 });
    u
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
        l,
        { y: "0%", duration: 1.2, opacity: 1, ease: "expo.out", stagger: 0.1 },
        "-=1"
      ),
      c
        .to([r, s], {
          y: "100%",
          duration: 0.6,
          ease: "expo.in",
          opacity: 0,
          stagger: 0.05,
        })
        .to(
          [o, l],
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
        const p =
          n.getAttribute("hamburger-state") === "open" ? "closed" : "open";
        n.setAttribute("hamburger-state", p),
          p === "open" ? (c.pause(), u.play(0)) : (u.pause(), c.play(0));
      }),
      a.forEach((h) => {
        h.addEventListener("click", () => {
          n.setAttribute("hamburger-state", "closed"), c.play(0);
        });
      });
    const f = 767;
    function d() {
      return window.innerWidth <= f;
    }
    window.addEventListener("resize", () => {
      n.getAttribute("hamburger-state") === "open" &&
        !d() &&
        (n.setAttribute("hamburger-state", "closed"), c.play(0));
    });
  },
  g0 = () => {
    p0();
  };
class m0 {
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
const v0 = (n) => {
    const e = document.querySelector(".page_overlay"),
      t = document.querySelector("[page-overlay='text-wrap']"),
      i = document.querySelectorAll("[page-load='component']"),
      r = document.querySelectorAll("[page-load='wrap']"),
      s = document.querySelectorAll("[page-load='gradient']"),
      o = document.querySelectorAll("[page-load='text']");
    e && D.set(e, { clipPath: "inset(100% 0% 0% 0%)", pointerEvents: "none" }),
      t && D.set(t, { opacity: 0, y: 50, willChange: "transform, opacity" });
    const a = D.timeline();
    return (
      e &&
        a.fromTo(
          e,
          { clipPath: "inset(100% 0% 0% 0%)", pointerEvents: "none" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            pointerEvents: "auto",
            duration: 1,
            ease: "expo.inOut",
            onComplete: () => {
              s.length && D.set(s, { opacity: 1 }),
                r.length && D.set(r, { opacity: 0 }),
                o.length && D.set(o, { opacity: 0 }),
                i.length &&
                  D.set(i, {
                    pointerEvents: "auto",
                    opacity: 0,
                    display: "block",
                    clipPath: "inset(0% 0% 0% 0%)",
                  });
            },
          },
          "<"
        ),
      a
    );
  },
  _0 = () => {
    document.querySelectorAll("a[href]").forEach((e) => {
      const t = e.getAttribute("href");
      if (
        t.startsWith("#") ||
        t.startsWith("mailto:") ||
        t.startsWith("tel:") ||
        t.startsWith("javascript:") ||
        e.target === "_blank"
      )
        return;
      new URL(t, window.location.origin).hostname ===
        window.location.hostname &&
        e.addEventListener("click", async (s) => {
          s.preventDefault();
          const o = e.href,
            a = document.createElement("link");
          (a.rel = "prefetch"),
            (a.href = o),
            document.head.appendChild(a),
            await v0(),
            (window.location.href = o);
        });
    });
  };
D.registerPlugin(we, Y);
const y0 = {
    lines: { duration: 1.8, stagger: 0.08 },
    words: { duration: 0.6, stagger: 0.06 },
    chars: { duration: 0.4, stagger: 0.01 },
  },
  w0 = () => {
    const n = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
      window.innerWidth <= 768;
    let e = [],
      t;
    const i = () => {
        e.forEach((o) => {
          o && typeof o.revert == "function" && o.revert();
        }),
          (e = []),
          Y.getAll().forEach((o) => o.kill());
      },
      r = () => {
        document.querySelectorAll("[split-text]").forEach((o) => {
          D.set(o, { autoAlpha: 1 });
          const a = o.getAttribute("split-text") || "lines",
            l =
              a === "lines"
                ? ["lines"]
                : a === "words"
                ? ["lines", "words"]
                : ["lines", "words", "chars"],
            u = we.create(o, {
              type: l.join(", "),
              mask: "lines",
              autoSplit: !0,
              linesClass: "line",
              wordsClass: "word",
              charsClass: "letter",
              onSplit: function (c) {
                const f = c[a],
                  d = y0[a];
                return D.from(f, {
                  yPercent: 110,
                  duration: d.duration,
                  stagger: d.stagger,
                  ease: "expo.out",
                  scrollTrigger: {
                    trigger: o,
                    start: "clamp(top 80%)",
                    once: !0,
                  },
                });
              },
            });
          e.push(u);
        });
      },
      s = () => {
        n() ||
          (clearTimeout(t),
          (t = setTimeout(() => {
            i(),
              setTimeout(() => {
                r(), Y.refresh();
              }, 100);
          }, 250)));
      };
    document.fonts.ready.then(() => {
      r(), n() || window.addEventListener("resize", s);
    });
  },
  b0 = () => {
    D.set(".cursor", { xPercent: -50, yPercent: -50 });
    let n = D.quickTo(".cursor", "x", { duration: 0.6, ease: "power3" }),
      e = D.quickTo(".cursor", "y", { duration: 0.6, ease: "power3" });
    window.addEventListener("mousemove", (t) => {
      n(t.clientX), e(t.clientY);
    });
  },
  S0 = () => {
    b0();
  },
  x0 = () => {
    g0(), new m0(), Pf(), _0(), w0(), S0();
  },
  Xf = () => {
    const n = navigator.userAgent,
      e = /iPad|iPhone|iPod/.test(n),
      t = /WebKit/.test(n),
      i = /Safari/.test(n) && !/Chrome/.test(n),
      r = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    return e && t && i && r;
  };
let Da = window.innerHeight;
const wl = (n) => {
    (Math.abs(n - Da) > 150 || !Xf()) && (Da = n);
  },
  T0 = () => {
    if (!Xf()) return;
    const n = () => {
      document.documentElement.style.setProperty(
        "--stable-vh",
        `${Da * 0.01}px`
      );
    };
    n(),
      window.addEventListener("orientationchange", () => {
        setTimeout(() => {
          wl(window.innerHeight), n();
        }, 500);
      });
  },
  jf = (n, e) => {
    let t;
    return function (...r) {
      const s = () => {
        clearTimeout(t), n(...r);
      };
      clearTimeout(t), (t = setTimeout(s, e));
    };
  },
  E0 = jf(() => {
    const n = window.innerHeight;
    wl(n);
    const e = Sr();
    e && e.resize(), Y.refresh();
  }, 250),
  k0 = () => {
    setTimeout(() => {
      const n = Sr();
      n && n.resize(), Y.refresh();
    }, 500);
  },
  C0 = () => {
    T0(),
      window.addEventListener("resize", E0),
      window.addEventListener("orientationchange", k0);
    let n = window.innerHeight,
      e = window.innerWidth;
    const t = jf(() => {
      const i = window.innerHeight,
        r = Math.abs(i - n) > 100,
        s = Math.abs(window.innerWidth - e) > 100;
      if (r || s) {
        wl(i);
        const o = Sr();
        o && o.resize(), Y.refresh(), (n = i), (e = window.innerWidth);
      }
    }, 100);
    window.addEventListener("resize", t);
  };
document.addEventListener("DOMContentLoaded", () => {
  C0(), x0(), h0(), Pf();
});
