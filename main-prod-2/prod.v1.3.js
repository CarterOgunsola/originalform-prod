var lc = Object.defineProperty;
var Vd = (n, e, t) =>
  e in n
    ? lc(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (n[e] = t);
var a = (n, e) => lc(n, "name", { value: e, configurable: !0 });
var Y = (n, e, t) => Vd(n, typeof e != "symbol" ? e + "" : e, t);
function cc(n, e) {
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
a(cc, "ownKeys");
function uc(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? cc(Object(t), !0).forEach(function (i) {
          Js(n, i, t[i]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
      : cc(Object(t)).forEach(function (i) {
          Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(t, i));
        });
  }
  return n;
}
a(uc, "_objectSpread2");
function pt() {
  pt = a(function () {
    return n;
  }, "_regeneratorRuntime");
  var n = {},
    e = Object.prototype,
    t = e.hasOwnProperty,
    i =
      Object.defineProperty ||
      function (x, E, O) {
        x[E] = O.value;
      },
    r = typeof Symbol == "function" ? Symbol : {},
    s = r.iterator || "@@iterator",
    o = r.asyncIterator || "@@asyncIterator",
    l = r.toStringTag || "@@toStringTag";
  function c(x, E, O) {
    return (
      Object.defineProperty(x, E, {
        value: O,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      x[E]
    );
  }
  a(c, "define");
  try {
    c({}, "");
  } catch {
    c = a(function (E, O, I) {
      return (E[O] = I);
    }, "define");
  }
  function u(x, E, O, I) {
    var M = E && E.prototype instanceof h ? E : h,
      D = Object.create(M.prototype),
      z = new L(I || []);
    return i(D, "_invoke", { value: T(x, O, z) }), D;
  }
  a(u, "wrap");
  function f(x, E, O) {
    try {
      return { type: "normal", arg: x.call(E, O) };
    } catch (I) {
      return { type: "throw", arg: I };
    }
  }
  a(f, "tryCatch"), (n.wrap = u);
  var d = {};
  function h() {}
  a(h, "Generator");
  function p() {}
  a(p, "GeneratorFunction");
  function g() {}
  a(g, "GeneratorFunctionPrototype");
  var m = {};
  c(m, s, function () {
    return this;
  });
  var v = Object.getPrototypeOf,
    b = v && v(v(k([])));
  b && b !== e && t.call(b, s) && (m = b);
  var y = (g.prototype = h.prototype = Object.create(m));
  function _(x) {
    ["next", "throw", "return"].forEach(function (E) {
      c(x, E, function (O) {
        return this._invoke(E, O);
      });
    });
  }
  a(_, "defineIteratorMethods");
  function S(x, E) {
    function O(M, D, z, B) {
      var A = f(x[M], x, D);
      if (A.type !== "throw") {
        var V = A.arg,
          G = V.value;
        return G && typeof G == "object" && t.call(G, "__await")
          ? E.resolve(G.__await).then(
              function (le) {
                O("next", le, z, B);
              },
              function (le) {
                O("throw", le, z, B);
              }
            )
          : E.resolve(G).then(
              function (le) {
                (V.value = le), z(V);
              },
              function (le) {
                return O("throw", le, z, B);
              }
            );
      }
      B(A.arg);
    }
    a(O, "invoke");
    var I;
    i(this, "_invoke", {
      value: a(function (M, D) {
        function z() {
          return new E(function (B, A) {
            O(M, D, B, A);
          });
        }
        return a(z, "callInvokeWithMethodAndArg"), (I = I ? I.then(z, z) : z());
      }, "value"),
    });
  }
  a(S, "AsyncIterator");
  function T(x, E, O) {
    var I = "suspendedStart";
    return function (M, D) {
      if (I === "executing") throw new Error("Generator is already running");
      if (I === "completed") {
        if (M === "throw") throw D;
        return $();
      }
      for (O.method = M, O.arg = D; ; ) {
        var z = O.delegate;
        if (z) {
          var B = w(z, O);
          if (B) {
            if (B === d) continue;
            return B;
          }
        }
        if (O.method === "next") O.sent = O._sent = O.arg;
        else if (O.method === "throw") {
          if (I === "suspendedStart") throw ((I = "completed"), O.arg);
          O.dispatchException(O.arg);
        } else O.method === "return" && O.abrupt("return", O.arg);
        I = "executing";
        var A = f(x, E, O);
        if (A.type === "normal") {
          if (((I = O.done ? "completed" : "suspendedYield"), A.arg === d))
            continue;
          return { value: A.arg, done: O.done };
        }
        A.type === "throw" &&
          ((I = "completed"), (O.method = "throw"), (O.arg = A.arg));
      }
    };
  }
  a(T, "makeInvokeMethod");
  function w(x, E) {
    var O = E.method,
      I = x.iterator[O];
    if (I === void 0)
      return (
        (E.delegate = null),
        (O === "throw" &&
          x.iterator.return &&
          ((E.method = "return"),
          (E.arg = void 0),
          w(x, E),
          E.method === "throw")) ||
          (O !== "return" &&
            ((E.method = "throw"),
            (E.arg = new TypeError(
              "The iterator does not provide a '" + O + "' method"
            )))),
        d
      );
    var M = f(I, x.iterator, E.arg);
    if (M.type === "throw")
      return (E.method = "throw"), (E.arg = M.arg), (E.delegate = null), d;
    var D = M.arg;
    return D
      ? D.done
        ? ((E[x.resultName] = D.value),
          (E.next = x.nextLoc),
          E.method !== "return" && ((E.method = "next"), (E.arg = void 0)),
          (E.delegate = null),
          d)
        : D
      : ((E.method = "throw"),
        (E.arg = new TypeError("iterator result is not an object")),
        (E.delegate = null),
        d);
  }
  a(w, "maybeInvokeDelegate");
  function C(x) {
    var E = { tryLoc: x[0] };
    1 in x && (E.catchLoc = x[1]),
      2 in x && ((E.finallyLoc = x[2]), (E.afterLoc = x[3])),
      this.tryEntries.push(E);
  }
  a(C, "pushTryEntry");
  function P(x) {
    var E = x.completion || {};
    (E.type = "normal"), delete E.arg, (x.completion = E);
  }
  a(P, "resetTryEntry");
  function L(x) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      x.forEach(C, this),
      this.reset(!0);
  }
  a(L, "Context");
  function k(x) {
    if (x) {
      var E = x[s];
      if (E) return E.call(x);
      if (typeof x.next == "function") return x;
      if (!isNaN(x.length)) {
        var O = -1,
          I = a(function M() {
            for (; ++O < x.length; )
              if (t.call(x, O)) return (M.value = x[O]), (M.done = !1), M;
            return (M.value = void 0), (M.done = !0), M;
          }, "next");
        return (I.next = I);
      }
    }
    return { next: $ };
  }
  a(k, "values");
  function $() {
    return { value: void 0, done: !0 };
  }
  return (
    a($, "doneResult"),
    (p.prototype = g),
    i(y, "constructor", { value: g, configurable: !0 }),
    i(g, "constructor", { value: p, configurable: !0 }),
    (p.displayName = c(g, l, "GeneratorFunction")),
    (n.isGeneratorFunction = function (x) {
      var E = typeof x == "function" && x.constructor;
      return (
        !!E && (E === p || (E.displayName || E.name) === "GeneratorFunction")
      );
    }),
    (n.mark = function (x) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(x, g)
          : ((x.__proto__ = g), c(x, l, "GeneratorFunction")),
        (x.prototype = Object.create(y)),
        x
      );
    }),
    (n.awrap = function (x) {
      return { __await: x };
    }),
    _(S.prototype),
    c(S.prototype, o, function () {
      return this;
    }),
    (n.AsyncIterator = S),
    (n.async = function (x, E, O, I, M) {
      M === void 0 && (M = Promise);
      var D = new S(u(x, E, O, I), M);
      return n.isGeneratorFunction(E)
        ? D
        : D.next().then(function (z) {
            return z.done ? z.value : D.next();
          });
    }),
    _(y),
    c(y, l, "Generator"),
    c(y, s, function () {
      return this;
    }),
    c(y, "toString", function () {
      return "[object Generator]";
    }),
    (n.keys = function (x) {
      var E = Object(x),
        O = [];
      for (var I in E) O.push(I);
      return (
        O.reverse(),
        a(function M() {
          for (; O.length; ) {
            var D = O.pop();
            if (D in E) return (M.value = D), (M.done = !1), M;
          }
          return (M.done = !0), M;
        }, "next")
      );
    }),
    (n.values = k),
    (L.prototype = {
      constructor: L,
      reset: a(function (x) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = void 0),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = void 0),
          this.tryEntries.forEach(P),
          !x)
        )
          for (var E in this)
            E.charAt(0) === "t" &&
              t.call(this, E) &&
              !isNaN(+E.slice(1)) &&
              (this[E] = void 0);
      }, "reset"),
      stop: a(function () {
        this.done = !0;
        var x = this.tryEntries[0].completion;
        if (x.type === "throw") throw x.arg;
        return this.rval;
      }, "stop"),
      dispatchException: a(function (x) {
        if (this.done) throw x;
        var E = this;
        function O(A, V) {
          return (
            (D.type = "throw"),
            (D.arg = x),
            (E.next = A),
            V && ((E.method = "next"), (E.arg = void 0)),
            !!V
          );
        }
        a(O, "handle");
        for (var I = this.tryEntries.length - 1; I >= 0; --I) {
          var M = this.tryEntries[I],
            D = M.completion;
          if (M.tryLoc === "root") return O("end");
          if (M.tryLoc <= this.prev) {
            var z = t.call(M, "catchLoc"),
              B = t.call(M, "finallyLoc");
            if (z && B) {
              if (this.prev < M.catchLoc) return O(M.catchLoc, !0);
              if (this.prev < M.finallyLoc) return O(M.finallyLoc);
            } else if (z) {
              if (this.prev < M.catchLoc) return O(M.catchLoc, !0);
            } else {
              if (!B) throw new Error("try statement without catch or finally");
              if (this.prev < M.finallyLoc) return O(M.finallyLoc);
            }
          }
        }
      }, "dispatchException"),
      abrupt: a(function (x, E) {
        for (var O = this.tryEntries.length - 1; O >= 0; --O) {
          var I = this.tryEntries[O];
          if (
            I.tryLoc <= this.prev &&
            t.call(I, "finallyLoc") &&
            this.prev < I.finallyLoc
          ) {
            var M = I;
            break;
          }
        }
        M &&
          (x === "break" || x === "continue") &&
          M.tryLoc <= E &&
          E <= M.finallyLoc &&
          (M = null);
        var D = M ? M.completion : {};
        return (
          (D.type = x),
          (D.arg = E),
          M
            ? ((this.method = "next"), (this.next = M.finallyLoc), d)
            : this.complete(D)
        );
      }, "abrupt"),
      complete: a(function (x, E) {
        if (x.type === "throw") throw x.arg;
        return (
          x.type === "break" || x.type === "continue"
            ? (this.next = x.arg)
            : x.type === "return"
            ? ((this.rval = this.arg = x.arg),
              (this.method = "return"),
              (this.next = "end"))
            : x.type === "normal" && E && (this.next = E),
          d
        );
      }, "complete"),
      finish: a(function (x) {
        for (var E = this.tryEntries.length - 1; E >= 0; --E) {
          var O = this.tryEntries[E];
          if (O.finallyLoc === x)
            return this.complete(O.completion, O.afterLoc), P(O), d;
        }
      }, "finish"),
      catch: a(function (x) {
        for (var E = this.tryEntries.length - 1; E >= 0; --E) {
          var O = this.tryEntries[E];
          if (O.tryLoc === x) {
            var I = O.completion;
            if (I.type === "throw") {
              var M = I.arg;
              P(O);
            }
            return M;
          }
        }
        throw new Error("illegal catch attempt");
      }, "catch"),
      delegateYield: a(function (x, E, O) {
        return (
          (this.delegate = { iterator: k(x), resultName: E, nextLoc: O }),
          this.method === "next" && (this.arg = void 0),
          d
        );
      }, "delegateYield"),
    }),
    n
  );
}
a(pt, "_regeneratorRuntime");
function fc(n, e, t, i, r, s, o) {
  try {
    var l = n[s](o),
      c = l.value;
  } catch (u) {
    t(u);
    return;
  }
  l.done ? e(c) : Promise.resolve(c).then(i, r);
}
a(fc, "asyncGeneratorStep");
function bi(n) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (i, r) {
      var s = n.apply(e, t);
      function o(c) {
        fc(s, i, r, o, l, "next", c);
      }
      a(o, "_next");
      function l(c) {
        fc(s, i, r, o, l, "throw", c);
      }
      a(l, "_throw"), o(void 0);
    });
  };
}
a(bi, "_asyncToGenerator");
function Cu(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
a(Cu, "_classCallCheck");
function Wd(n, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(n, Mu(i.key), i);
  }
}
a(Wd, "_defineProperties$1");
function Pu(n, e, t) {
  return (
    e && Wd(n.prototype, e),
    Object.defineProperty(n, "prototype", { writable: !1 }),
    n
  );
}
a(Pu, "_createClass$1");
function Js(n, e, t) {
  return (
    (e = Mu(e)),
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
a(Js, "_defineProperty");
function Xd(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (n.prototype = Object.create(e && e.prototype, {
    constructor: { value: n, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(n, "prototype", { writable: !1 }),
    e && ys(n, e);
}
a(Xd, "_inherits");
function vs(n) {
  return (
    (vs = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : a(function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }, "_getPrototypeOf")),
    vs(n)
  );
}
a(vs, "_getPrototypeOf");
function ys(n, e) {
  return (
    (ys = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : a(function (i, r) {
          return (i.__proto__ = r), i;
        }, "_setPrototypeOf")),
    ys(n, e)
  );
}
a(ys, "_setPrototypeOf");
function ku() {
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
a(ku, "_isNativeReflectConstruct");
function eo(n, e, t) {
  return (
    ku()
      ? (eo = Reflect.construct.bind())
      : (eo = a(function (r, s, o) {
          var l = [null];
          l.push.apply(l, s);
          var c = Function.bind.apply(r, l),
            u = new c();
          return o && ys(u, o.prototype), u;
        }, "_construct")),
    eo.apply(null, arguments)
  );
}
a(eo, "_construct");
function Yd(n) {
  return Function.toString.call(n).indexOf("[native code]") !== -1;
}
a(Yd, "_isNativeFunction");
function Pa(n) {
  var e = typeof Map == "function" ? new Map() : void 0;
  return (
    (Pa = a(function (i) {
      if (i === null || !Yd(i)) return i;
      if (typeof i != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof e < "u") {
        if (e.has(i)) return e.get(i);
        e.set(i, r);
      }
      function r() {
        return eo(i, arguments, vs(this).constructor);
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
        ys(r, i)
      );
    }, "_wrapNativeSuper")),
    Pa(n)
  );
}
a(Pa, "_wrapNativeSuper");
function to(n) {
  if (n === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return n;
}
a(to, "_assertThisInitialized$1");
function Gd(n, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return to(n);
}
a(Gd, "_possibleConstructorReturn");
function jd(n) {
  var e = ku();
  return a(function () {
    var i = vs(n),
      r;
    if (e) {
      var s = vs(this).constructor;
      r = Reflect.construct(i, arguments, s);
    } else r = i.apply(this, arguments);
    return Gd(this, r);
  }, "_createSuperInternal");
}
a(jd, "_createSuper");
function Ud(n, e) {
  if (typeof n != "object" || n === null) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(n, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
a(Ud, "_toPrimitive");
function Mu(n) {
  var e = Ud(n, "string");
  return typeof e == "symbol" ? e : String(e);
}
a(Mu, "_toPropertyKey");
var Au = typeof global < "u" && {}.toString.call(global) === "[object global]";
function dc(n, e) {
  return n.indexOf(e.toLowerCase()) === 0
    ? n
    : ""
        .concat(e.toLowerCase())
        .concat(n.substr(0, 1).toUpperCase())
        .concat(n.substr(1));
}
a(dc, "getMethodName");
function Kd(n) {
  return !!(
    n &&
    n.nodeType === 1 &&
    "nodeName" in n &&
    n.ownerDocument &&
    n.ownerDocument.defaultView
  );
}
a(Kd, "isDomElement");
function Zd(n) {
  return !isNaN(parseFloat(n)) && isFinite(n) && Math.floor(n) == n;
}
a(Zd, "isInteger");
function Ni(n) {
  return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(
    n
  );
}
a(Ni, "isVimeoUrl");
function $u(n) {
  var e =
    /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
  return e.test(n);
}
a($u, "isVimeoEmbed");
function Qd(n) {
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
a(Qd, "getOembedDomain");
function Ou() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    e = n.id,
    t = n.url,
    i = e || t;
  if (!i)
    throw new Error(
      "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
    );
  if (Zd(i)) return "https://vimeo.com/".concat(i);
  if (Ni(i)) return i.replace("http:", "https:");
  throw e
    ? new TypeError("“".concat(e, "” is not a valid video id."))
    : new TypeError("“".concat(i, "” is not a vimeo.com url."));
}
a(Ou, "getVimeoUrl");
var hc = a(function (e, t, i) {
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
          return o.forEach(function (c) {
            return e[s](c, i);
          });
        }, "cancel"),
      }
    );
  }, "subscribe"),
  Jd = typeof Array.prototype.indexOf < "u",
  eh = typeof window < "u" && typeof window.postMessage < "u";
if (!Au && (!Jd || !eh))
  throw new Error(
    "Sorry, the Vimeo Player API is not available in this browser."
  );
var fr =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function th(n, e) {
  return (e = { exports: {} }), n(e, e.exports), e.exports;
}
a(th, "createCommonjsModule");
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
      i(s.prototype, "delete", function (u) {
        if ((o(this, "delete"), !r(u))) return !1;
        var f = u[this._id];
        return f && f[0] === u ? (delete u[this._id], !0) : !1;
      }),
      i(s.prototype, "get", function (u) {
        if ((o(this, "get"), !!r(u))) {
          var f = u[this._id];
          if (f && f[0] === u) return f[1];
        }
      }),
      i(s.prototype, "has", function (u) {
        if ((o(this, "has"), !r(u))) return !1;
        var f = u[this._id];
        return !!(f && f[0] === u);
      }),
      i(s.prototype, "set", function (u, f) {
        if ((o(this, "set"), !r(u)))
          throw new TypeError("Invalid value used as weak map key");
        var d = u[this._id];
        return d && d[0] === u
          ? ((d[1] = f), this)
          : (i(u, this._id, [u, f]), this);
      });
    function o(u, f) {
      if (!r(u) || !e.call(u, "_id"))
        throw new TypeError(
          f + " method called on incompatible receiver " + typeof u
        );
    }
    a(o, "checkInstance");
    function l(u) {
      return u + "_" + c() + "." + c();
    }
    a(l, "genId");
    function c() {
      return Math.random().toString().substring(2);
    }
    return a(c, "rand"), i(s, "_polyfill", !0), s;
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
    : fr
);
var Vt = th(function (n) {
    a(function (t, i, r) {
      (i[t] = i[t] || r()), n.exports && (n.exports = i[t]);
    }, "UMD")(
      "Promise",
      fr,
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
          Object.defineProperty({}, "x", {}),
            (t = a(function (_, S, T, w) {
              return Object.defineProperty(_, S, {
                value: T,
                writable: !0,
                configurable: w !== !1,
              });
            }, "builtInProp"));
        } catch {
          t = a(function (S, T, w) {
            return (S[T] = w), S;
          }, "builtInProp");
        }
        r = a(function () {
          var _, S, T;
          function w(C, P) {
            (this.fn = C), (this.self = P), (this.next = void 0);
          }
          return (
            a(w, "Item"),
            {
              add: a(function (P, L) {
                (T = new w(P, L)),
                  S ? (S.next = T) : (_ = T),
                  (S = T),
                  (T = void 0);
              }, "add"),
              drain: a(function () {
                var P = _;
                for (_ = S = i = void 0; P; ) P.fn.call(P.self), (P = P.next);
              }, "drain"),
            }
          );
        }, "Queue")();
        function l(y, _) {
          r.add(y, _), i || (i = o(r.drain));
        }
        a(l, "schedule");
        function c(y) {
          var _,
            S = typeof y;
          return (
            y != null && (S == "object" || S == "function") && (_ = y.then),
            typeof _ == "function" ? _ : !1
          );
        }
        a(c, "isThenable");
        function u() {
          for (var y = 0; y < this.chain.length; y++)
            f(
              this,
              this.state === 1 ? this.chain[y].success : this.chain[y].failure,
              this.chain[y]
            );
          this.chain.length = 0;
        }
        a(u, "notify");
        function f(y, _, S) {
          var T, w;
          try {
            _ === !1
              ? S.reject(y.msg)
              : (_ === !0 ? (T = y.msg) : (T = _.call(void 0, y.msg)),
                T === S.promise
                  ? S.reject(TypeError("Promise-chain cycle"))
                  : (w = c(T))
                  ? w.call(T, S.resolve, S.reject)
                  : S.resolve(T));
          } catch (C) {
            S.reject(C);
          }
        }
        a(f, "notifyIsolated");
        function d(y) {
          var _,
            S = this;
          if (!S.triggered) {
            (S.triggered = !0), S.def && (S = S.def);
            try {
              (_ = c(y))
                ? l(function () {
                    var T = new g(S);
                    try {
                      _.call(
                        y,
                        a(function () {
                          d.apply(T, arguments);
                        }, "$resolve$"),
                        a(function () {
                          h.apply(T, arguments);
                        }, "$reject$")
                      );
                    } catch (w) {
                      h.call(T, w);
                    }
                  })
                : ((S.msg = y), (S.state = 1), S.chain.length > 0 && l(u, S));
            } catch (T) {
              h.call(new g(S), T);
            }
          }
        }
        a(d, "resolve");
        function h(y) {
          var _ = this;
          _.triggered ||
            ((_.triggered = !0),
            _.def && (_ = _.def),
            (_.msg = y),
            (_.state = 2),
            _.chain.length > 0 && l(u, _));
        }
        a(h, "reject");
        function p(y, _, S, T) {
          for (var w = 0; w < _.length; w++)
            a(function (P) {
              y.resolve(_[P]).then(
                a(function (k) {
                  S(P, k);
                }, "$resolver$"),
                T
              );
            }, "IIFE")(w);
        }
        a(p, "iteratePromises");
        function g(y) {
          (this.def = y), (this.triggered = !1);
        }
        a(g, "MakeDefWrapper");
        function m(y) {
          (this.promise = y),
            (this.state = 0),
            (this.triggered = !1),
            (this.chain = []),
            (this.msg = void 0);
        }
        a(m, "MakeDef");
        function v(y) {
          if (typeof y != "function") throw TypeError("Not a function");
          if (this.__NPO__ !== 0) throw TypeError("Not a promise");
          this.__NPO__ = 1;
          var _ = new m(this);
          (this.then = a(function (T, w) {
            var C = {
              success: typeof T == "function" ? T : !0,
              failure: typeof w == "function" ? w : !1,
            };
            return (
              (C.promise = new this.constructor(
                a(function (L, k) {
                  if (typeof L != "function" || typeof k != "function")
                    throw TypeError("Not a function");
                  (C.resolve = L), (C.reject = k);
                }, "extractChain")
              )),
              _.chain.push(C),
              _.state !== 0 && l(u, _),
              C.promise
            );
          }, "then")),
            (this.catch = a(function (T) {
              return this.then(void 0, T);
            }, "$catch$"));
          try {
            y.call(
              void 0,
              a(function (T) {
                d.call(_, T);
              }, "publicResolve"),
              a(function (T) {
                h.call(_, T);
              }, "publicReject")
            );
          } catch (S) {
            h.call(_, S);
          }
        }
        a(v, "Promise");
        var b = t({}, "constructor", v, !1);
        return (
          (v.prototype = b),
          t(b, "__NPO__", 0, !1),
          t(
            v,
            "resolve",
            a(function (_) {
              var S = this;
              return _ && typeof _ == "object" && _.__NPO__ === 1
                ? _
                : new S(
                    a(function (w, C) {
                      if (typeof w != "function" || typeof C != "function")
                        throw TypeError("Not a function");
                      w(_);
                    }, "executor")
                  );
            }, "Promise$resolve")
          ),
          t(
            v,
            "reject",
            a(function (_) {
              return new this(
                a(function (T, w) {
                  if (typeof T != "function" || typeof w != "function")
                    throw TypeError("Not a function");
                  w(_);
                }, "executor")
              );
            }, "Promise$reject")
          ),
          t(
            v,
            "all",
            a(function (_) {
              var S = this;
              return s.call(_) != "[object Array]"
                ? S.reject(TypeError("Not an array"))
                : _.length === 0
                ? S.resolve([])
                : new S(
                    a(function (w, C) {
                      if (typeof w != "function" || typeof C != "function")
                        throw TypeError("Not a function");
                      var P = _.length,
                        L = Array(P),
                        k = 0;
                      p(
                        S,
                        _,
                        a(function (x, E) {
                          (L[x] = E), ++k === P && w(L);
                        }, "resolver"),
                        C
                      );
                    }, "executor")
                  );
            }, "Promise$all")
          ),
          t(
            v,
            "race",
            a(function (_) {
              var S = this;
              return s.call(_) != "[object Array]"
                ? S.reject(TypeError("Not an array"))
                : new S(
                    a(function (w, C) {
                      if (typeof w != "function" || typeof C != "function")
                        throw TypeError("Not a function");
                      p(
                        S,
                        _,
                        a(function (L, k) {
                          w(k);
                        }, "resolver"),
                        C
                      );
                    }, "executor")
                  );
            }, "Promise$race")
          ),
          v
        );
      }, "DEF")
    );
  }),
  In = new WeakMap();
function Br(n, e, t) {
  var i = In.get(n.element) || {};
  e in i || (i[e] = []), i[e].push(t), In.set(n.element, i);
}
a(Br, "storeCallback");
function go(n, e) {
  var t = In.get(n.element) || {};
  return t[e] || [];
}
a(go, "getCallbacks");
function vo(n, e, t) {
  var i = In.get(n.element) || {};
  if (!i[e]) return !0;
  if (!t) return (i[e] = []), In.set(n.element, i), !0;
  var r = i[e].indexOf(t);
  return (
    r !== -1 && i[e].splice(r, 1),
    In.set(n.element, i),
    i[e] && i[e].length === 0
  );
}
a(vo, "removeCallback");
function nh(n, e) {
  var t = go(n, e);
  if (t.length < 1) return !1;
  var i = t.shift();
  return vo(n, e, i), i;
}
a(nh, "shiftCallbacks");
function ih(n, e) {
  var t = In.get(n);
  In.set(e, t), In.delete(n);
}
a(ih, "swapCallbacks");
function Ro(n) {
  if (typeof n == "string")
    try {
      n = JSON.parse(n);
    } catch {
      return {};
    }
  return n;
}
a(Ro, "parseMessageData");
function gi(n, e, t) {
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
a(gi, "postMessage");
function rh(n, e) {
  e = Ro(e);
  var t = [],
    i;
  if (e.event) {
    if (e.event === "error") {
      var r = go(n, e.data.method);
      r.forEach(function (o) {
        var l = new Error(e.data.message);
        (l.name = e.data.name), o.reject(l), vo(n, e.data.method, o);
      });
    }
    (t = go(n, "event:".concat(e.event))), (i = e.data);
  } else if (e.method) {
    var s = nh(n, e.method);
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
a(rh, "processData");
var sh = [
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
function Lu(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return sh.reduce(function (t, i) {
    var r = n.getAttribute("data-vimeo-".concat(i));
    return (r || r === "") && (t[i] = r === "" ? 1 : r), t;
  }, e);
}
a(Lu, "getOEmbedParameters");
function ml(n, e) {
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
a(ml, "createEmbed");
function Iu(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = arguments.length > 2 ? arguments[2] : void 0;
  return new Promise(function (i, r) {
    if (!Ni(n)) throw new TypeError("“".concat(n, "” is not a vimeo.com url."));
    var s = Qd(n),
      o = "https://"
        .concat(s, "/api/oembed.json?url=")
        .concat(encodeURIComponent(n));
    for (var l in e)
      e.hasOwnProperty(l) &&
        (o += "&".concat(l, "=").concat(encodeURIComponent(e[l])));
    var c =
      "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
    c.open("GET", o, !0),
      (c.onload = function () {
        if (c.status === 404) {
          r(new Error("“".concat(n, "” was not found.")));
          return;
        }
        if (c.status === 403) {
          r(new Error("“".concat(n, "” is not embeddable.")));
          return;
        }
        try {
          var u = JSON.parse(c.responseText);
          if (u.domain_status_code === 403) {
            ml(u, t), r(new Error("“".concat(n, "” is not embeddable.")));
            return;
          }
          i(u);
        } catch (f) {
          r(f);
        }
      }),
      (c.onerror = function () {
        var u = c.status ? " (".concat(c.status, ")") : "";
        r(
          new Error(
            "There was an error fetching the embed code from Vimeo".concat(
              u,
              "."
            )
          )
        );
      }),
      c.send();
  });
}
a(Iu, "getOEmbedData");
function oh() {
  var n =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document,
    e = [].slice.call(n.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
    t = a(function (r) {
      "console" in window;
    }, "handleError");
  e.forEach(function (i) {
    try {
      if (i.getAttribute("data-vimeo-defer") !== null) return;
      var r = Lu(i),
        s = Ou(r);
      Iu(s, r, i)
        .then(function (o) {
          return ml(o, i);
        })
        .catch(t);
    } catch (o) {
      t(o);
    }
  });
}
a(oh, "initializeEmbeds");
function ah() {
  var n =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoPlayerResizeEmbeds_) {
    window.VimeoPlayerResizeEmbeds_ = !0;
    var e = a(function (i) {
      if (Ni(i.origin) && !(!i.data || i.data.event !== "spacechange")) {
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
a(ah, "resizeEmbeds");
function lh() {
  var n =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoSeoMetadataAppended) {
    window.VimeoSeoMetadataAppended = !0;
    var e = a(function (i) {
      if (Ni(i.origin)) {
        var r = Ro(i.data);
        if (!(!r || r.event !== "ready"))
          for (var s = n.querySelectorAll("iframe"), o = 0; o < s.length; o++) {
            var l = s[o],
              c = l.contentWindow === i.source;
            if ($u(l.src) && c) {
              var u = new ts(l);
              u.callMethod("appendVideoMetadata", window.location.href);
            }
          }
      }
    }, "onMessage");
    window.addEventListener("message", e);
  }
}
a(lh, "initAppendVideoMetadata");
function ch() {
  var n =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoCheckedUrlTimeParam) {
    window.VimeoCheckedUrlTimeParam = !0;
    var e = a(function (r) {
        "console" in window;
      }, "handleError"),
      t = a(function (r) {
        if (Ni(r.origin)) {
          var s = Ro(r.data);
          if (!(!s || s.event !== "ready"))
            for (
              var o = n.querySelectorAll("iframe"),
                l = a(function () {
                  var f = o[c],
                    d = f.contentWindow === r.source;
                  if ($u(f.src) && d) {
                    var h = new ts(f);
                    h.getVideoId()
                      .then(function (p) {
                        var g = new RegExp(
                          "[?&]vimeo_t_".concat(p, "=([^&#]*)")
                        ).exec(window.location.href);
                        if (g && g[1]) {
                          var m = decodeURI(g[1]);
                          h.setCurrentTime(m);
                        }
                      })
                      .catch(e);
                  }
                }, "_loop"),
                c = 0;
              c < o.length;
              c++
            )
              l();
        }
      }, "onMessage");
    window.addEventListener("message", t);
  }
}
a(ch, "checkUrlTimeParam");
function uh() {
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
          var l = a(function u() {
            t.off("fullscreenchange", u), s();
          }, "onFullScreenEntered");
          t.on("fullscreenchange", l), (r = r || document.documentElement);
          var c = r[n.requestFullscreen]();
          c instanceof Promise && c.then(l).catch(o);
        });
      }, "request"),
      exit: a(function () {
        return new Promise(function (r, s) {
          if (!t.isFullscreen) {
            r();
            return;
          }
          var o = a(function c() {
            t.off("fullscreenchange", c), r();
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
a(uh, "initializeScreenfull");
var fh = {
    role: "viewer",
    autoPlayMuted: !0,
    allowedDrift: 0.3,
    maxAllowedDrift: 1,
    minCheckInterval: 0.1,
    maxRateAdjustment: 0.2,
    maxTimeToCatchUp: 1,
  },
  dh = (function (n) {
    Xd(t, n);
    var e = jd(t);
    function t(i, r) {
      var s,
        o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        l = arguments.length > 3 ? arguments[3] : void 0;
      return (
        Cu(this, t),
        (s = e.call(this)),
        Js(to(s), "logger", void 0),
        Js(to(s), "speedAdjustment", 0),
        Js(
          to(s),
          "adjustSpeed",
          (function () {
            var c = bi(
              pt().mark(
                a(function u(f, d) {
                  var h;
                  return pt().wrap(
                    a(function (g) {
                      for (;;)
                        switch ((g.prev = g.next)) {
                          case 0:
                            if (s.speedAdjustment !== d) {
                              g.next = 2;
                              break;
                            }
                            return g.abrupt("return");
                          case 2:
                            return (g.next = 4), f.getPlaybackRate();
                          case 4:
                            return (
                              (g.t0 = g.sent),
                              (g.t1 = s.speedAdjustment),
                              (g.t2 = g.t0 - g.t1),
                              (g.t3 = d),
                              (h = g.t2 + g.t3),
                              s.log("New playbackRate:  ".concat(h)),
                              (g.next = 12),
                              f.setPlaybackRate(h)
                            );
                          case 12:
                            s.speedAdjustment = d;
                          case 13:
                          case "end":
                            return g.stop();
                        }
                    }, "_callee$"),
                    u
                  );
                }, "_callee")
              )
            );
            return function (u, f) {
              return c.apply(this, arguments);
            };
          })()
        ),
        (s.logger = l),
        s.init(r, i, uc(uc({}, fh), o)),
        s
      );
    }
    return (
      a(t, "TimingSrcConnector"),
      Pu(t, [
        {
          key: "disconnect",
          value: a(function () {
            this.dispatchEvent(new Event("disconnect"));
          }, "disconnect"),
        },
        {
          key: "init",
          value: (function () {
            var i = bi(
              pt().mark(
                a(function s(o, l, c) {
                  var u = this,
                    f,
                    d,
                    h;
                  return pt().wrap(
                    a(function (g) {
                      for (;;)
                        switch ((g.prev = g.next)) {
                          case 0:
                            return (
                              (g.next = 2), this.waitForTOReadyState(o, "open")
                            );
                          case 2:
                            if (c.role !== "viewer") {
                              g.next = 10;
                              break;
                            }
                            return (g.next = 5), this.updatePlayer(o, l, c);
                          case 5:
                            (f = hc(o, "change", function () {
                              return u.updatePlayer(o, l, c);
                            })),
                              (d = this.maintainPlaybackPosition(o, l, c)),
                              this.addEventListener("disconnect", function () {
                                d.cancel(), f.cancel();
                              }),
                              (g.next = 14);
                            break;
                          case 10:
                            return (g.next = 12), this.updateTimingObject(o, l);
                          case 12:
                            (h = hc(
                              l,
                              ["seeked", "play", "pause", "ratechange"],
                              function () {
                                return u.updateTimingObject(o, l);
                              },
                              "on",
                              "off"
                            )),
                              this.addEventListener("disconnect", function () {
                                return h.cancel();
                              });
                          case 14:
                          case "end":
                            return g.stop();
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
            var i = bi(
              pt().mark(
                a(function s(o, l) {
                  return pt().wrap(
                    a(function (u) {
                      for (;;)
                        switch ((u.prev = u.next)) {
                          case 0:
                            return (u.t0 = o), (u.next = 3), l.getCurrentTime();
                          case 3:
                            return (u.t1 = u.sent), (u.next = 6), l.getPaused();
                          case 6:
                            if (!u.sent) {
                              u.next = 10;
                              break;
                            }
                            (u.t2 = 0), (u.next = 13);
                            break;
                          case 10:
                            return (u.next = 12), l.getPlaybackRate();
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
            var i = bi(
              pt().mark(
                a(function s(o, l, c) {
                  var u, f, d;
                  return pt().wrap(
                    a(function (p) {
                      for (;;)
                        switch ((p.prev = p.next)) {
                          case 0:
                            if (
                              ((u = o.query()),
                              (f = u.position),
                              (d = u.velocity),
                              typeof f == "number" && l.setCurrentTime(f),
                              typeof d != "number")
                            ) {
                              p.next = 25;
                              break;
                            }
                            if (d !== 0) {
                              p.next = 11;
                              break;
                            }
                            return (p.next = 6), l.getPaused();
                          case 6:
                            if (((p.t0 = p.sent), p.t0 !== !1)) {
                              p.next = 9;
                              break;
                            }
                            l.pause();
                          case 9:
                            p.next = 25;
                            break;
                          case 11:
                            if (!(d > 0)) {
                              p.next = 25;
                              break;
                            }
                            return (p.next = 14), l.getPaused();
                          case 14:
                            if (((p.t1 = p.sent), p.t1 !== !0)) {
                              p.next = 19;
                              break;
                            }
                            return (
                              (p.next = 18),
                              l.play().catch(
                                (function () {
                                  var g = bi(
                                    pt().mark(
                                      a(function m(v) {
                                        return pt().wrap(
                                          a(function (y) {
                                            for (;;)
                                              switch ((y.prev = y.next)) {
                                                case 0:
                                                  if (
                                                    !(
                                                      v.name ===
                                                        "NotAllowedError" &&
                                                      c.autoPlayMuted
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
                                          m
                                        );
                                      }, "_callee4")
                                    )
                                  );
                                  return function (m) {
                                    return g.apply(this, arguments);
                                  };
                                })()
                              )
                            );
                          case 18:
                            this.updatePlayer(o, l, c);
                          case 19:
                            return (p.next = 21), l.getPlaybackRate();
                          case 21:
                            if (((p.t2 = p.sent), (p.t3 = d), p.t2 === p.t3)) {
                              p.next = 25;
                              break;
                            }
                            l.setPlaybackRate(d);
                          case 25:
                          case "end":
                            return p.stop();
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
              c = o.allowedDrift,
              u = o.maxAllowedDrift,
              f = o.minCheckInterval,
              d = o.maxRateAdjustment,
              h = o.maxTimeToCatchUp,
              p = Math.min(h, Math.max(f, u)) * 1e3,
              g = (function () {
                var v = bi(
                  pt().mark(
                    a(function b() {
                      var y, _, S, T, w;
                      return pt().wrap(
                        a(function (P) {
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
                                  (y = P.t2 - P.t3),
                                  (_ = Math.abs(y)),
                                  l.log("Drift: ".concat(y)),
                                  !(_ > u))
                                ) {
                                  P.next = 22;
                                  break;
                                }
                                return (P.next = 18), l.adjustSpeed(s, 0);
                              case 18:
                                s.setCurrentTime(r.query().position),
                                  l.log("Resync by currentTime"),
                                  (P.next = 29);
                                break;
                              case 22:
                                if (!(_ > c)) {
                                  P.next = 29;
                                  break;
                                }
                                return (
                                  (S = _ / h),
                                  (T = d),
                                  (w = S < T ? (T - S) / 2 : T),
                                  (P.next = 28),
                                  l.adjustSpeed(s, w * Math.sign(y))
                                );
                              case 28:
                                l.log("Resync by playbackRate");
                              case 29:
                              case "end":
                                return P.stop();
                            }
                        }, "_callee6$"),
                        b
                      );
                    }, "_callee6")
                  )
                );
                return a(function () {
                  return v.apply(this, arguments);
                }, "check");
              })(),
              m = setInterval(function () {
                return g();
              }, p);
            return {
              cancel: a(function () {
                return clearInterval(m);
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
              var l = a(function c() {
                r.readyState === s
                  ? o()
                  : r.addEventListener("readystatechange", c, { once: !0 });
              }, "check");
              l();
            });
          }, "waitForTOReadyState"),
        },
      ]),
      t
    );
  })(Pa(EventTarget)),
  Ki = new WeakMap(),
  jo = new WeakMap(),
  _t = {},
  ts = (function () {
    function n(e) {
      var t = this,
        i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (
        (Cu(this, n),
        window.jQuery &&
          e instanceof jQuery &&
          (e.length > 1 && window.console, (e = e[0])),
        typeof document < "u" &&
          typeof e == "string" &&
          (e = document.getElementById(e)),
        !Kd(e))
      )
        throw new TypeError(
          "You must pass either a valid element or a valid id."
        );
      if (e.nodeName !== "IFRAME") {
        var r = e.querySelector("iframe");
        r && (e = r);
      }
      if (e.nodeName === "IFRAME" && !Ni(e.getAttribute("src") || ""))
        throw new Error("The player element passed isn’t a Vimeo embed.");
      if (Ki.has(e)) return Ki.get(e);
      (this._window = e.ownerDocument.defaultView),
        (this.element = e),
        (this.origin = "*");
      var s = new Vt(function (l, c) {
        if (
          ((t._onMessage = function (d) {
            if (!(!Ni(d.origin) || t.element.contentWindow !== d.source)) {
              t.origin === "*" && (t.origin = d.origin);
              var h = Ro(d.data),
                p = h && h.event === "error",
                g = p && h.data && h.data.method === "ready";
              if (g) {
                var m = new Error(h.data.message);
                (m.name = h.data.name), c(m);
                return;
              }
              var v = h && h.event === "ready",
                b = h && h.method === "ping";
              if (v || b) {
                t.element.setAttribute("data-ready", "true"), l();
                return;
              }
              rh(t, h);
            }
          }),
          t._window.addEventListener("message", t._onMessage),
          t.element.nodeName !== "IFRAME")
        ) {
          var u = Lu(e, i),
            f = Ou(u);
          Iu(f, u, e)
            .then(function (d) {
              var h = ml(d, e);
              return (
                (t.element = h),
                (t._originalElement = e),
                ih(e, h),
                Ki.set(t.element, t),
                d
              );
            })
            .catch(c);
        }
      });
      if (
        (jo.set(this, s),
        Ki.set(this.element, this),
        this.element.nodeName === "IFRAME" && gi(this, "ping"),
        _t.isEnabled)
      ) {
        var o = a(function () {
          return _t.exit();
        }, "exitFullscreen");
        (this.fullscreenchangeHandler = function () {
          _t.isFullscreen
            ? Br(t, "event:exitFullscreen", o)
            : vo(t, "event:exitFullscreen", o),
            t.ready().then(function () {
              gi(t, "fullscreenchange", _t.isFullscreen);
            });
        }),
          _t.on("fullscreenchange", this.fullscreenchangeHandler);
      }
      return this;
    }
    return (
      a(n, "Player"),
      Pu(n, [
        {
          key: "callMethod",
          value: a(function (t) {
            var i = this,
              r =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
            return new Vt(function (s, o) {
              return i
                .ready()
                .then(function () {
                  Br(i, t, { resolve: s, reject: o }), gi(i, t, r);
                })
                .catch(o);
            });
          }, "callMethod"),
        },
        {
          key: "get",
          value: a(function (t) {
            var i = this;
            return new Vt(function (r, s) {
              return (
                (t = dc(t, "get")),
                i
                  .ready()
                  .then(function () {
                    Br(i, t, { resolve: r, reject: s }), gi(i, t);
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
            return new Vt(function (s, o) {
              if (((t = dc(t, "set")), i == null))
                throw new TypeError("There must be a value to set.");
              return r
                .ready()
                .then(function () {
                  Br(r, t, { resolve: s, reject: o }), gi(r, t, i);
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
            var r = go(this, "event:".concat(t));
            r.length === 0 &&
              this.callMethod("addEventListener", t).catch(function () {}),
              Br(this, "event:".concat(t), i);
          }, "on"),
        },
        {
          key: "off",
          value: a(function (t, i) {
            if (!t) throw new TypeError("You must pass an event name.");
            if (i && typeof i != "function")
              throw new TypeError("The callback must be a function.");
            var r = vo(this, "event:".concat(t), i);
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
              jo.get(this) ||
              new Vt(function (i, r) {
                r(new Error("Unknown player. Probably unloaded."));
              });
            return Vt.resolve(t);
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
            return _t.isEnabled
              ? _t.request(this.element)
              : this.callMethod("requestFullscreen");
          }, "requestFullscreen"),
        },
        {
          key: "exitFullscreen",
          value: a(function () {
            return _t.isEnabled ? _t.exit() : this.callMethod("exitFullscreen");
          }, "exitFullscreen"),
        },
        {
          key: "getFullscreen",
          value: a(function () {
            return _t.isEnabled
              ? Vt.resolve(_t.isFullscreen)
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
            return new Vt(function (i) {
              if (
                (jo.delete(t),
                Ki.delete(t.element),
                t._originalElement &&
                  (Ki.delete(t._originalElement),
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
            return Vt.all([
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
              return new Vt(function (s, o) {
                return o(new TypeError("Argument must be an array."));
              });
            var i = new Vt(function (s) {
                return s(null);
              }),
              r = [
                t[0] ? this.set("colorOne", t[0]) : i,
                t[1] ? this.set("colorTwo", t[1]) : i,
                t[2] ? this.set("colorThree", t[2]) : i,
                t[3] ? this.set("colorFour", t[3]) : i,
              ];
            return Vt.all(r);
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
            var e = bi(
              pt().mark(
                a(function i(r, s) {
                  var o = this,
                    l;
                  return pt().wrap(
                    a(function (u) {
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
                              (l = new dh(this, r, s)),
                              gi(this, "notifyTimingObjectConnect"),
                              l.addEventListener("disconnect", function () {
                                return gi(o, "notifyTimingObjectDisconnect");
                              }),
                              u.abrupt("return", l)
                            );
                          case 8:
                          case "end":
                            return u.stop();
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
Au || ((_t = uh()), oh(), ah(), lh(), ch());
const rc = class rc {
  constructor() {
    typeof ts < "u" &&
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
        const c = t.getAttribute("id"),
          u = this.players.get(c);
        if (u) {
          let f = t.getAttribute("data-vimeo-playing") === "true",
            d = 0,
            h = t.getAttribute("data-vimeo-muted") === "true";
          u.getCurrentTime()
            .then((p) => {
              (d = p),
                u.unload(),
                this.players.delete(c),
                this.switchVideo(t, l, {
                  wasPlaying: f,
                  currentTime: d,
                  isMuted: h,
                });
            })
            .catch(() => {
              u.unload(),
                this.players.delete(c),
                this.switchVideo(t, l, {
                  wasPlaying: f,
                  currentTime: 0,
                  isMuted: h,
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
        const r = new ts(i),
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
        const c = t.querySelector("iframe");
        if (!c) return;
        const u = `https://player.vimeo.com/video/${l}?api=1&background=1&autoplay=0&loop=0&muted=1`;
        c.setAttribute("src", u),
          t.setAttribute("data-vimeo-active-video-id", l);
        const f = "vimeo-player-index-" + i;
        t.setAttribute("id", f);
        const d = new ts(c);
        this.players.set(f, d), this.setupPlayerControls(t, d);
      } catch {}
    });
  }
  setupPlayerControls(e, t) {
    const i = e.id;
    if (
      (e.getAttribute("data-vimeo-update-size") === "true" &&
        t.getVideoWidth().then(function (S) {
          t.getVideoHeight().then(function (T) {
            const w = e.querySelector(".vimeo-player__before");
            w && (w.style.paddingTop = (T / S) * 100 + "%");
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
      const S = a(() => {
        const T = e.getBoundingClientRect();
        T.top < window.innerHeight && T.bottom > 0 ? r() : s();
      }, "checkVisibility");
      S(), window.addEventListener("scroll", S);
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
    const c = e.querySelector('[data-vimeo-control="mute"]');
    c &&
      c.addEventListener("click", function () {
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
      f = e.querySelector('[data-vimeo-control="fullscreen"]');
    !u && f && (f.style.display = "none"),
      f &&
        f.addEventListener("click", () => {
          const S = document.getElementById(i);
          if (!S) return;
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
                S.requestFullscreen ||
                S.webkitRequestFullscreen ||
                S.mozRequestFullScreen ||
                S.msRequestFullscreen
              ).call(S));
        });
    const d = a(() => {
      const S =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;
      e.setAttribute("data-vimeo-fullscreen", S ? "true" : "false");
    }, "handleFullscreenChange");
    [
      "fullscreenchange",
      "webkitfullscreenchange",
      "mozfullscreenchange",
      "msfullscreenchange",
    ].forEach((S) => {
      document.addEventListener(S, d);
    });
    function h(S) {
      let T = Math.floor(S / 3600);
      S -= T * 3600;
      let w = Math.floor(S / 60);
      return (S -= w * 60), w + ":" + (S < 10 ? "0" + S : S);
    }
    a(h, "secondsTimeSpanToHMS");
    const p = e.querySelector("[data-vimeo-duration]");
    t.getDuration().then(function (S) {
      p && (p.textContent = h(S)),
        e
          .querySelectorAll('[data-vimeo-control="timeline"], progress')
          .forEach((w) => {
            w.setAttribute("max", S);
          });
    });
    const g = e.querySelector('[data-vimeo-control="timeline"]'),
      m = e.querySelector("progress");
    function v() {
      t.getDuration().then(function () {
        const S = g.value;
        t.setCurrentTime(S), m && (m.value = S);
      });
    }
    a(v, "updateTimelineValue"),
      g &&
        ["input", "change"].forEach((S) => {
          g.addEventListener(S, v);
        }),
      t.on("timeupdate", function (S) {
        g && (g.value = S.seconds),
          m && (m.value = S.seconds),
          p && (p.textContent = h(Math.trunc(S.seconds)));
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
a(rc, "VideoPlayer");
let ka = rc;
const hh = a(() => {
  new ka();
}, "initVideoPlayer");
function pc(n) {
  return (
    n !== null &&
    typeof n == "object" &&
    "constructor" in n &&
    n.constructor === Object
  );
}
a(pc, "isObject$1");
function gl(n = {}, e = {}) {
  Object.keys(e).forEach((t) => {
    typeof n[t] > "u"
      ? (n[t] = e[t])
      : pc(e[t]) && pc(n[t]) && Object.keys(e[t]).length > 0 && gl(n[t], e[t]);
  });
}
a(gl, "extend$1");
const Du = {
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
function Ve() {
  const n = typeof document < "u" ? document : {};
  return gl(n, Du), n;
}
a(Ve, "getDocument");
const ph = {
  document: Du,
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
function ye() {
  const n = typeof window < "u" ? window : {};
  return gl(n, ph), n;
}
a(ye, "getWindow");
function mh(n) {
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
a(mh, "makeReactive");
const sc = class sc extends Array {
  constructor(e) {
    typeof e == "number" ? super(e) : (super(...(e || [])), mh(this));
  }
};
a(sc, "Dom7");
let hn = sc;
function $s(n = []) {
  const e = [];
  return (
    n.forEach((t) => {
      Array.isArray(t) ? e.push(...$s(t)) : e.push(t);
    }),
    e
  );
}
a($s, "arrayFlat");
function zu(n, e) {
  return Array.prototype.filter.call(n, e);
}
a(zu, "arrayFilter");
function gh(n) {
  const e = [];
  for (let t = 0; t < n.length; t += 1) e.indexOf(n[t]) === -1 && e.push(n[t]);
  return e;
}
a(gh, "arrayUnique");
function vh(n, e) {
  if (typeof n != "string") return [n];
  const t = [],
    i = e.querySelectorAll(n);
  for (let r = 0; r < i.length; r += 1) t.push(i[r]);
  return t;
}
a(vh, "qsa");
function F(n, e) {
  const t = ye(),
    i = Ve();
  let r = [];
  if (!e && n instanceof hn) return n;
  if (!n) return new hn(r);
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
      for (let c = 0; c < l.childNodes.length; c += 1) r.push(l.childNodes[c]);
    } else r = vh(n.trim(), e || i);
  } else if (n.nodeType || n === t || n === i) r.push(n);
  else if (Array.isArray(n)) {
    if (n instanceof hn) return n;
    r = n;
  }
  return new hn(gh(r));
}
a(F, "$$1");
F.fn = hn.prototype;
function yh(...n) {
  const e = $s(n.map((t) => t.split(" ")));
  return (
    this.forEach((t) => {
      t.classList.add(...e);
    }),
    this
  );
}
a(yh, "addClass");
function bh(...n) {
  const e = $s(n.map((t) => t.split(" ")));
  return (
    this.forEach((t) => {
      t.classList.remove(...e);
    }),
    this
  );
}
a(bh, "removeClass");
function _h(...n) {
  const e = $s(n.map((t) => t.split(" ")));
  this.forEach((t) => {
    e.forEach((i) => {
      t.classList.toggle(i);
    });
  });
}
a(_h, "toggleClass");
function xh(...n) {
  const e = $s(n.map((t) => t.split(" ")));
  return (
    zu(this, (t) => e.filter((i) => t.classList.contains(i)).length > 0)
      .length > 0
  );
}
a(xh, "hasClass");
function Sh(n, e) {
  if (arguments.length === 1 && typeof n == "string")
    return this[0] ? this[0].getAttribute(n) : void 0;
  for (let t = 0; t < this.length; t += 1)
    if (arguments.length === 2) this[t].setAttribute(n, e);
    else for (const i in n) (this[t][i] = n[i]), this[t].setAttribute(i, n[i]);
  return this;
}
a(Sh, "attr");
function Th(n) {
  for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(n);
  return this;
}
a(Th, "removeAttr");
function Eh(n) {
  for (let e = 0; e < this.length; e += 1) this[e].style.transform = n;
  return this;
}
a(Eh, "transform");
function wh(n) {
  for (let e = 0; e < this.length; e += 1)
    this[e].style.transitionDuration = typeof n != "string" ? `${n}ms` : n;
  return this;
}
a(wh, "transition$1");
function Ch(...n) {
  let [e, t, i, r] = n;
  typeof n[1] == "function" && (([e, i, r] = n), (t = void 0)), r || (r = !1);
  function s(u) {
    const f = u.target;
    if (!f) return;
    const d = u.target.dom7EventData || [];
    if ((d.indexOf(u) < 0 && d.unshift(u), F(f).is(t))) i.apply(f, d);
    else {
      const h = F(f).parents();
      for (let p = 0; p < h.length; p += 1) F(h[p]).is(t) && i.apply(h[p], d);
    }
  }
  a(s, "handleLiveEvent");
  function o(u) {
    const f = u && u.target ? u.target.dom7EventData || [] : [];
    f.indexOf(u) < 0 && f.unshift(u), i.apply(this, f);
  }
  a(o, "handleEvent");
  const l = e.split(" ");
  let c;
  for (let u = 0; u < this.length; u += 1) {
    const f = this[u];
    if (t)
      for (c = 0; c < l.length; c += 1) {
        const d = l[c];
        f.dom7LiveListeners || (f.dom7LiveListeners = {}),
          f.dom7LiveListeners[d] || (f.dom7LiveListeners[d] = []),
          f.dom7LiveListeners[d].push({ listener: i, proxyListener: s }),
          f.addEventListener(d, s, r);
      }
    else
      for (c = 0; c < l.length; c += 1) {
        const d = l[c];
        f.dom7Listeners || (f.dom7Listeners = {}),
          f.dom7Listeners[d] || (f.dom7Listeners[d] = []),
          f.dom7Listeners[d].push({ listener: i, proxyListener: o }),
          f.addEventListener(d, o, r);
      }
  }
  return this;
}
a(Ch, "on");
function Ph(...n) {
  let [e, t, i, r] = n;
  typeof n[1] == "function" && (([e, i, r] = n), (t = void 0)), r || (r = !1);
  const s = e.split(" ");
  for (let o = 0; o < s.length; o += 1) {
    const l = s[o];
    for (let c = 0; c < this.length; c += 1) {
      const u = this[c];
      let f;
      if (
        (!t && u.dom7Listeners
          ? (f = u.dom7Listeners[l])
          : t && u.dom7LiveListeners && (f = u.dom7LiveListeners[l]),
        f && f.length)
      )
        for (let d = f.length - 1; d >= 0; d -= 1) {
          const h = f[d];
          (i && h.listener === i) ||
          (i &&
            h.listener &&
            h.listener.dom7proxy &&
            h.listener.dom7proxy === i)
            ? (u.removeEventListener(l, h.proxyListener, r), f.splice(d, 1))
            : i ||
              (u.removeEventListener(l, h.proxyListener, r), f.splice(d, 1));
        }
    }
  }
  return this;
}
a(Ph, "off");
function kh(...n) {
  const e = ye(),
    t = n[0].split(" "),
    i = n[1];
  for (let r = 0; r < t.length; r += 1) {
    const s = t[r];
    for (let o = 0; o < this.length; o += 1) {
      const l = this[o];
      if (e.CustomEvent) {
        const c = new e.CustomEvent(s, {
          detail: i,
          bubbles: !0,
          cancelable: !0,
        });
        (l.dom7EventData = n.filter((u, f) => f > 0)),
          l.dispatchEvent(c),
          (l.dom7EventData = []),
          delete l.dom7EventData;
      }
    }
  }
  return this;
}
a(kh, "trigger");
function Mh(n) {
  const e = this;
  function t(i) {
    i.target === this && (n.call(this, i), e.off("transitionend", t));
  }
  return a(t, "fireCallBack"), n && e.on("transitionend", t), this;
}
a(Mh, "transitionEnd$1");
function Ah(n) {
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
a(Ah, "outerWidth");
function $h(n) {
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
a($h, "outerHeight");
function Oh() {
  if (this.length > 0) {
    const n = ye(),
      e = Ve(),
      t = this[0],
      i = t.getBoundingClientRect(),
      r = e.body,
      s = t.clientTop || r.clientTop || 0,
      o = t.clientLeft || r.clientLeft || 0,
      l = t === n ? n.scrollY : t.scrollTop,
      c = t === n ? n.scrollX : t.scrollLeft;
    return { top: i.top + l - s, left: i.left + c - o };
  }
  return null;
}
a(Oh, "offset");
function Lh() {
  const n = ye();
  return this[0] ? n.getComputedStyle(this[0], null) : {};
}
a(Lh, "styles");
function Ih(n, e) {
  const t = ye();
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
a(Ih, "css");
function Dh(n) {
  return n
    ? (this.forEach((e, t) => {
        n.apply(e, [e, t]);
      }),
      this)
    : this;
}
a(Dh, "each");
function zh(n) {
  const e = zu(this, n);
  return F(e);
}
a(zh, "filter");
function Rh(n) {
  if (typeof n > "u") return this[0] ? this[0].innerHTML : null;
  for (let e = 0; e < this.length; e += 1) this[e].innerHTML = n;
  return this;
}
a(Rh, "html");
function Nh(n) {
  if (typeof n > "u") return this[0] ? this[0].textContent.trim() : null;
  for (let e = 0; e < this.length; e += 1) this[e].textContent = n;
  return this;
}
a(Nh, "text");
function Bh(n) {
  const e = ye(),
    t = Ve(),
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
  if (n.nodeType || n instanceof hn) {
    for (r = n.nodeType ? [n] : n, s = 0; s < r.length; s += 1)
      if (r[s] === i) return !0;
    return !1;
  }
  return !1;
}
a(Bh, "is");
function Fh() {
  let n = this[0],
    e;
  if (n) {
    for (e = 0; (n = n.previousSibling) !== null; )
      n.nodeType === 1 && (e += 1);
    return e;
  }
}
a(Fh, "index");
function qh(n) {
  if (typeof n > "u") return this;
  const e = this.length;
  if (n > e - 1) return F([]);
  if (n < 0) {
    const t = e + n;
    return t < 0 ? F([]) : F([this[t]]);
  }
  return F([this[n]]);
}
a(qh, "eq");
function Hh(...n) {
  let e;
  const t = Ve();
  for (let i = 0; i < n.length; i += 1) {
    e = n[i];
    for (let r = 0; r < this.length; r += 1)
      if (typeof e == "string") {
        const s = t.createElement("div");
        for (s.innerHTML = e; s.firstChild; ) this[r].appendChild(s.firstChild);
      } else if (e instanceof hn)
        for (let s = 0; s < e.length; s += 1) this[r].appendChild(e[s]);
      else this[r].appendChild(e);
  }
  return this;
}
a(Hh, "append");
function Vh(n) {
  const e = Ve();
  let t, i;
  for (t = 0; t < this.length; t += 1)
    if (typeof n == "string") {
      const r = e.createElement("div");
      for (r.innerHTML = n, i = r.childNodes.length - 1; i >= 0; i -= 1)
        this[t].insertBefore(r.childNodes[i], this[t].childNodes[0]);
    } else if (n instanceof hn)
      for (i = 0; i < n.length; i += 1)
        this[t].insertBefore(n[i], this[t].childNodes[0]);
    else this[t].insertBefore(n, this[t].childNodes[0]);
  return this;
}
a(Vh, "prepend");
function Wh(n) {
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
a(Wh, "next");
function Xh(n) {
  const e = [];
  let t = this[0];
  if (!t) return F([]);
  for (; t.nextElementSibling; ) {
    const i = t.nextElementSibling;
    n ? F(i).is(n) && e.push(i) : e.push(i), (t = i);
  }
  return F(e);
}
a(Xh, "nextAll");
function Yh(n) {
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
a(Yh, "prev");
function Gh(n) {
  const e = [];
  let t = this[0];
  if (!t) return F([]);
  for (; t.previousElementSibling; ) {
    const i = t.previousElementSibling;
    n ? F(i).is(n) && e.push(i) : e.push(i), (t = i);
  }
  return F(e);
}
a(Gh, "prevAll");
function jh(n) {
  const e = [];
  for (let t = 0; t < this.length; t += 1)
    this[t].parentNode !== null &&
      (n
        ? F(this[t].parentNode).is(n) && e.push(this[t].parentNode)
        : e.push(this[t].parentNode));
  return F(e);
}
a(jh, "parent");
function Uh(n) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    let i = this[t].parentNode;
    for (; i; ) n ? F(i).is(n) && e.push(i) : e.push(i), (i = i.parentNode);
  }
  return F(e);
}
a(Uh, "parents");
function Kh(n) {
  let e = this;
  return typeof n > "u" ? F([]) : (e.is(n) || (e = e.parents(n).eq(0)), e);
}
a(Kh, "closest");
function Zh(n) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    const i = this[t].querySelectorAll(n);
    for (let r = 0; r < i.length; r += 1) e.push(i[r]);
  }
  return F(e);
}
a(Zh, "find");
function Qh(n) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    const i = this[t].children;
    for (let r = 0; r < i.length; r += 1) (!n || F(i[r]).is(n)) && e.push(i[r]);
  }
  return F(e);
}
a(Qh, "children");
function Jh() {
  for (let n = 0; n < this.length; n += 1)
    this[n].parentNode && this[n].parentNode.removeChild(this[n]);
  return this;
}
a(Jh, "remove");
const mc = {
  addClass: yh,
  removeClass: bh,
  hasClass: xh,
  toggleClass: _h,
  attr: Sh,
  removeAttr: Th,
  transform: Eh,
  transition: wh,
  on: Ch,
  off: Ph,
  trigger: kh,
  transitionEnd: Mh,
  outerWidth: Ah,
  outerHeight: $h,
  styles: Lh,
  offset: Oh,
  css: Ih,
  each: Dh,
  html: Rh,
  text: Nh,
  is: Bh,
  index: Fh,
  eq: qh,
  append: Hh,
  prepend: Vh,
  next: Wh,
  nextAll: Xh,
  prev: Yh,
  prevAll: Gh,
  parent: jh,
  parents: Uh,
  closest: Kh,
  find: Zh,
  children: Qh,
  filter: zh,
  remove: Jh,
};
Object.keys(mc).forEach((n) => {
  Object.defineProperty(F.fn, n, { value: mc[n], writable: !0 });
});
function ep(n) {
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
a(ep, "deleteProps");
function ni(n, e = 0) {
  return setTimeout(n, e);
}
a(ni, "nextTick");
function Lt() {
  return Date.now();
}
a(Lt, "now");
function tp(n) {
  const e = ye();
  let t;
  return (
    e.getComputedStyle && (t = e.getComputedStyle(n, null)),
    !t && n.currentStyle && (t = n.currentStyle),
    t || (t = n.style),
    t
  );
}
a(tp, "getComputedStyle$1");
function Ma(n, e = "x") {
  const t = ye();
  let i, r, s;
  const o = tp(n);
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
a(Ma, "getTranslate");
function Xr(n) {
  return (
    typeof n == "object" &&
    n !== null &&
    n.constructor &&
    Object.prototype.toString.call(n).slice(8, -1) === "Object"
  );
}
a(Xr, "isObject");
function np(n) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? n instanceof HTMLElement
    : n && (n.nodeType === 1 || n.nodeType === 11);
}
a(np, "isNode");
function At(...n) {
  const e = Object(n[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < n.length; i += 1) {
    const r = n[i];
    if (r != null && !np(r)) {
      const s = Object.keys(Object(r)).filter((o) => t.indexOf(o) < 0);
      for (let o = 0, l = s.length; o < l; o += 1) {
        const c = s[o],
          u = Object.getOwnPropertyDescriptor(r, c);
        u !== void 0 &&
          u.enumerable &&
          (Xr(e[c]) && Xr(r[c])
            ? r[c].__swiper__
              ? (e[c] = r[c])
              : At(e[c], r[c])
            : !Xr(e[c]) && Xr(r[c])
            ? ((e[c] = {}), r[c].__swiper__ ? (e[c] = r[c]) : At(e[c], r[c]))
            : (e[c] = r[c]));
      }
    }
  }
  return e;
}
a(At, "extend");
function Yr(n, e, t) {
  n.style.setProperty(e, t);
}
a(Yr, "setCSSProperty");
function Ru({ swiper: n, targetPosition: e, side: t }) {
  const i = ye(),
    r = -n.translate;
  let s = null,
    o;
  const l = n.params.speed;
  (n.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(n.cssModeFrameID);
  const c = e > r ? "next" : "prev",
    u = a(
      (d, h) => (c === "next" && d >= h) || (c === "prev" && d <= h),
      "isOutOfBound"
    ),
    f = a(() => {
      (o = new Date().getTime()), s === null && (s = o);
      const d = Math.max(Math.min((o - s) / l, 1), 0),
        h = 0.5 - Math.cos(d * Math.PI) / 2;
      let p = r + h * (e - r);
      if ((u(p, e) && (p = e), n.wrapperEl.scrollTo({ [t]: p }), u(p, e))) {
        (n.wrapperEl.style.overflow = "hidden"),
          (n.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (n.wrapperEl.style.overflow = ""), n.wrapperEl.scrollTo({ [t]: p });
          }),
          i.cancelAnimationFrame(n.cssModeFrameID);
        return;
      }
      n.cssModeFrameID = i.requestAnimationFrame(f);
    }, "animate");
  f();
}
a(Ru, "animateCSSModeScroll");
let Uo;
function ip() {
  const n = ye(),
    e = Ve();
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
a(ip, "calcSupport");
function Nu() {
  return Uo || (Uo = ip()), Uo;
}
a(Nu, "getSupport");
let Ko;
function rp({ userAgent: n } = {}) {
  const e = Nu(),
    t = ye(),
    i = t.navigator.platform,
    r = n || t.navigator.userAgent,
    s = { ios: !1, android: !1 },
    o = t.screen.width,
    l = t.screen.height,
    c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = r.match(/(iPad).*OS\s([\d_]+)/);
  const f = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    d = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    h = i === "Win32";
  let p = i === "MacIntel";
  const g = [
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
      p &&
      e.touch &&
      g.indexOf(`${o}x${l}`) >= 0 &&
      ((u = r.match(/(Version)\/([\d.]+)/)),
      u || (u = [0, 1, "13_0_0"]),
      (p = !1)),
    c && !h && ((s.os = "android"), (s.android = !0)),
    (u || d || f) && ((s.os = "ios"), (s.ios = !0)),
    s
  );
}
a(rp, "calcDevice");
function sp(n = {}) {
  return Ko || (Ko = rp(n)), Ko;
}
a(sp, "getDevice");
let Zo;
function op() {
  const n = ye();
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
a(op, "calcBrowser");
function ap() {
  return Zo || (Zo = op()), Zo;
}
a(ap, "getBrowser");
function lp({ swiper: n, on: e, emit: t }) {
  const i = ye();
  let r = null,
    s = null;
  const o = a(() => {
      !n || n.destroyed || !n.initialized || (t("beforeResize"), t("resize"));
    }, "resizeHandler"),
    l = a(() => {
      !n ||
        n.destroyed ||
        !n.initialized ||
        ((r = new ResizeObserver((f) => {
          s = i.requestAnimationFrame(() => {
            const { width: d, height: h } = n;
            let p = d,
              g = h;
            f.forEach(({ contentBoxSize: m, contentRect: v, target: b }) => {
              (b && b !== n.el) ||
                ((p = v ? v.width : (m[0] || m).inlineSize),
                (g = v ? v.height : (m[0] || m).blockSize));
            }),
              (p !== d || g !== h) && o();
          });
        })),
        r.observe(n.el));
    }, "createObserver"),
    c = a(() => {
      s && i.cancelAnimationFrame(s),
        r && r.unobserve && n.el && (r.unobserve(n.el), (r = null));
    }, "removeObserver"),
    u = a(() => {
      !n || n.destroyed || !n.initialized || t("orientationchange");
    }, "orientationChangeHandler");
  e("init", () => {
    if (n.params.resizeObserver && typeof i.ResizeObserver < "u") {
      l();
      return;
    }
    i.addEventListener("resize", o), i.addEventListener("orientationchange", u);
  }),
    e("destroy", () => {
      c(),
        i.removeEventListener("resize", o),
        i.removeEventListener("orientationchange", u);
    });
}
a(lp, "Resize");
function cp({ swiper: n, extendParams: e, on: t, emit: i }) {
  const r = [],
    s = ye(),
    o = a((u, f = {}) => {
      const d = s.MutationObserver || s.WebkitMutationObserver,
        h = new d((p) => {
          if (p.length === 1) {
            i("observerUpdate", p[0]);
            return;
          }
          const g = a(function () {
            i("observerUpdate", p[0]);
          }, "observerUpdate");
          s.requestAnimationFrame
            ? s.requestAnimationFrame(g)
            : s.setTimeout(g, 0);
        });
      h.observe(u, {
        attributes: typeof f.attributes > "u" ? !0 : f.attributes,
        childList: typeof f.childList > "u" ? !0 : f.childList,
        characterData: typeof f.characterData > "u" ? !0 : f.characterData,
      }),
        r.push(h);
    }, "attach"),
    l = a(() => {
      if (n.params.observer) {
        if (n.params.observeParents) {
          const u = n.$el.parents();
          for (let f = 0; f < u.length; f += 1) o(u[f]);
        }
        o(n.$el[0], { childList: n.params.observeSlideChildren }),
          o(n.$wrapperEl[0], { attributes: !1 });
      }
    }, "init"),
    c = a(() => {
      r.forEach((u) => {
        u.disconnect();
      }),
        r.splice(0, r.length);
    }, "destroy");
  e({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    t("init", l),
    t("destroy", c);
}
a(cp, "Observer$1");
const up = {
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
function fp() {
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
a(fp, "updateSize");
function dp() {
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
  function t(k, $) {
    return parseFloat(k.getPropertyValue(e($)) || 0);
  }
  a(t, "getDirectionPropertyValue");
  const i = n.params,
    { $wrapperEl: r, size: s, rtlTranslate: o, wrongRTL: l } = n,
    c = n.virtual && i.virtual.enabled,
    u = c ? n.virtual.slides.length : n.slides.length,
    f = r.children(`.${n.params.slideClass}`),
    d = c ? n.virtual.slides.length : f.length;
  let h = [];
  const p = [],
    g = [];
  let m = i.slidesOffsetBefore;
  typeof m == "function" && (m = i.slidesOffsetBefore.call(n));
  let v = i.slidesOffsetAfter;
  typeof v == "function" && (v = i.slidesOffsetAfter.call(n));
  const b = n.snapGrid.length,
    y = n.slidesGrid.length;
  let _ = i.spaceBetween,
    S = -m,
    T = 0,
    w = 0;
  if (typeof s > "u") return;
  typeof _ == "string" &&
    _.indexOf("%") >= 0 &&
    (_ = (parseFloat(_.replace("%", "")) / 100) * s),
    (n.virtualSize = -_),
    o
      ? f.css({ marginLeft: "", marginBottom: "", marginTop: "" })
      : f.css({ marginRight: "", marginBottom: "", marginTop: "" }),
    i.centeredSlides &&
      i.cssMode &&
      (Yr(n.wrapperEl, "--swiper-centered-offset-before", ""),
      Yr(n.wrapperEl, "--swiper-centered-offset-after", ""));
  const C = i.grid && i.grid.rows > 1 && n.grid;
  C && n.grid.initSlides(d);
  let P;
  const L =
    i.slidesPerView === "auto" &&
    i.breakpoints &&
    Object.keys(i.breakpoints).filter(
      (k) => typeof i.breakpoints[k].slidesPerView < "u"
    ).length > 0;
  for (let k = 0; k < d; k += 1) {
    P = 0;
    const $ = f.eq(k);
    if ((C && n.grid.updateSlide(k, $, d, e), $.css("display") !== "none")) {
      if (i.slidesPerView === "auto") {
        L && (f[k].style[e("width")] = "");
        const x = getComputedStyle($[0]),
          E = $[0].style.transform,
          O = $[0].style.webkitTransform;
        if (
          (E && ($[0].style.transform = "none"),
          O && ($[0].style.webkitTransform = "none"),
          i.roundLengths)
        )
          P = n.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
        else {
          const I = t(x, "width"),
            M = t(x, "padding-left"),
            D = t(x, "padding-right"),
            z = t(x, "margin-left"),
            B = t(x, "margin-right"),
            A = x.getPropertyValue("box-sizing");
          if (A && A === "border-box") P = I + z + B;
          else {
            const { clientWidth: V, offsetWidth: G } = $[0];
            P = I + M + D + z + B + (G - V);
          }
        }
        E && ($[0].style.transform = E),
          O && ($[0].style.webkitTransform = O),
          i.roundLengths && (P = Math.floor(P));
      } else
        (P = (s - (i.slidesPerView - 1) * _) / i.slidesPerView),
          i.roundLengths && (P = Math.floor(P)),
          f[k] && (f[k].style[e("width")] = `${P}px`);
      f[k] && (f[k].swiperSlideSize = P),
        g.push(P),
        i.centeredSlides
          ? ((S = S + P / 2 + T / 2 + _),
            T === 0 && k !== 0 && (S = S - s / 2 - _),
            k === 0 && (S = S - s / 2 - _),
            Math.abs(S) < 1 / 1e3 && (S = 0),
            i.roundLengths && (S = Math.floor(S)),
            w % i.slidesPerGroup === 0 && h.push(S),
            p.push(S))
          : (i.roundLengths && (S = Math.floor(S)),
            (w - Math.min(n.params.slidesPerGroupSkip, w)) %
              n.params.slidesPerGroup ===
              0 && h.push(S),
            p.push(S),
            (S = S + P + _)),
        (n.virtualSize += P + _),
        (T = P),
        (w += 1);
    }
  }
  if (
    ((n.virtualSize = Math.max(n.virtualSize, s) + v),
    o &&
      l &&
      (i.effect === "slide" || i.effect === "coverflow") &&
      r.css({ width: `${n.virtualSize + i.spaceBetween}px` }),
    i.setWrapperSize &&
      r.css({ [e("width")]: `${n.virtualSize + i.spaceBetween}px` }),
    C && n.grid.updateWrapperSize(P, h, e),
    !i.centeredSlides)
  ) {
    const k = [];
    for (let $ = 0; $ < h.length; $ += 1) {
      let x = h[$];
      i.roundLengths && (x = Math.floor(x)),
        h[$] <= n.virtualSize - s && k.push(x);
    }
    (h = k),
      Math.floor(n.virtualSize - s) - Math.floor(h[h.length - 1]) > 1 &&
        h.push(n.virtualSize - s);
  }
  if ((h.length === 0 && (h = [0]), i.spaceBetween !== 0)) {
    const k = n.isHorizontal() && o ? "marginLeft" : e("marginRight");
    f.filter(($, x) => (i.cssMode ? x !== f.length - 1 : !0)).css({
      [k]: `${_}px`,
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let k = 0;
    g.forEach((x) => {
      k += x + (i.spaceBetween ? i.spaceBetween : 0);
    }),
      (k -= i.spaceBetween);
    const $ = k - s;
    h = h.map((x) => (x < 0 ? -m : x > $ ? $ + v : x));
  }
  if (i.centerInsufficientSlides) {
    let k = 0;
    if (
      (g.forEach(($) => {
        k += $ + (i.spaceBetween ? i.spaceBetween : 0);
      }),
      (k -= i.spaceBetween),
      k < s)
    ) {
      const $ = (s - k) / 2;
      h.forEach((x, E) => {
        h[E] = x - $;
      }),
        p.forEach((x, E) => {
          p[E] = x + $;
        });
    }
  }
  if (
    (Object.assign(n, {
      slides: f,
      snapGrid: h,
      slidesGrid: p,
      slidesSizesGrid: g,
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
  ) {
    Yr(n.wrapperEl, "--swiper-centered-offset-before", `${-h[0]}px`),
      Yr(
        n.wrapperEl,
        "--swiper-centered-offset-after",
        `${n.size / 2 - g[g.length - 1] / 2}px`
      );
    const k = -n.snapGrid[0],
      $ = -n.slidesGrid[0];
    (n.snapGrid = n.snapGrid.map((x) => x + k)),
      (n.slidesGrid = n.slidesGrid.map((x) => x + $));
  }
  if (
    (d !== u && n.emit("slidesLengthChange"),
    h.length !== b &&
      (n.params.watchOverflow && n.checkOverflow(),
      n.emit("snapGridLengthChange")),
    p.length !== y && n.emit("slidesGridLengthChange"),
    i.watchSlidesProgress && n.updateSlidesOffset(),
    !c && !i.cssMode && (i.effect === "slide" || i.effect === "fade"))
  ) {
    const k = `${i.containerModifierClass}backface-hidden`,
      $ = n.$el.hasClass(k);
    d <= i.maxBackfaceHiddenSlides
      ? $ || n.$el.addClass(k)
      : $ && n.$el.removeClass(k);
  }
}
a(dp, "updateSlides");
function hp(n) {
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
            (c) => parseInt(c.getAttribute("data-swiper-slide-index"), 10) === l
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
a(hp, "updateAutoHeight");
function pp() {
  const n = this,
    e = n.slides;
  for (let t = 0; t < e.length; t += 1)
    e[t].swiperSlideOffset = n.isHorizontal()
      ? e[t].offsetLeft
      : e[t].offsetTop;
}
a(pp, "updateSlidesOffset");
function mp(n = (this && this.translate) || 0) {
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
    const c = i[l];
    let u = c.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (u -= i[0].swiperSlideOffset);
    const f =
        (o + (t.centeredSlides ? e.minTranslate() : 0) - u) /
        (c.swiperSlideSize + t.spaceBetween),
      d =
        (o - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - u) /
        (c.swiperSlideSize + t.spaceBetween),
      h = -(o - u),
      p = h + e.slidesSizesGrid[l];
    ((h >= 0 && h < e.size - 1) ||
      (p > 1 && p <= e.size) ||
      (h <= 0 && p >= e.size)) &&
      (e.visibleSlides.push(c),
      e.visibleSlidesIndexes.push(l),
      i.eq(l).addClass(t.slideVisibleClass)),
      (c.progress = r ? -f : f),
      (c.originalProgress = r ? -d : d);
  }
  e.visibleSlides = F(e.visibleSlides);
}
a(mp, "updateSlidesProgress");
function gp(n) {
  const e = this;
  if (typeof n > "u") {
    const u = e.rtlTranslate ? -1 : 1;
    n = (e && e.translate && e.translate * u) || 0;
  }
  const t = e.params,
    i = e.maxTranslate() - e.minTranslate();
  let { progress: r, isBeginning: s, isEnd: o } = e;
  const l = s,
    c = o;
  i === 0
    ? ((r = 0), (s = !0), (o = !0))
    : ((r = (n - e.minTranslate()) / i), (s = r <= 0), (o = r >= 1)),
    Object.assign(e, { progress: r, isBeginning: s, isEnd: o }),
    (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
      e.updateSlidesProgress(n),
    s && !l && e.emit("reachBeginning toEdge"),
    o && !c && e.emit("reachEnd toEdge"),
    ((l && !s) || (c && !o)) && e.emit("fromEdge"),
    e.emit("progress", r);
}
a(gp, "updateProgress");
function vp() {
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
  let c = l.nextAll(`.${t.slideClass}`).eq(0).addClass(t.slideNextClass);
  t.loop && c.length === 0 && ((c = e.eq(0)), c.addClass(t.slideNextClass));
  let u = l.prevAll(`.${t.slideClass}`).eq(0).addClass(t.slidePrevClass);
  t.loop && u.length === 0 && ((u = e.eq(-1)), u.addClass(t.slidePrevClass)),
    t.loop &&
      (c.hasClass(t.slideDuplicateClass)
        ? i
            .children(
              `.${t.slideClass}:not(.${
                t.slideDuplicateClass
              })[data-swiper-slide-index="${c.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(t.slideDuplicateNextClass)
        : i
            .children(
              `.${t.slideClass}.${
                t.slideDuplicateClass
              }[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`
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
a(vp, "updateSlidesClasses");
function yp(n) {
  const e = this,
    t = e.rtlTranslate ? e.translate : -e.translate,
    {
      slidesGrid: i,
      snapGrid: r,
      params: s,
      activeIndex: o,
      realIndex: l,
      snapIndex: c,
    } = e;
  let u = n,
    f;
  if (typeof u > "u") {
    for (let h = 0; h < i.length; h += 1)
      typeof i[h + 1] < "u"
        ? t >= i[h] && t < i[h + 1] - (i[h + 1] - i[h]) / 2
          ? (u = h)
          : t >= i[h] && t < i[h + 1] && (u = h + 1)
        : t >= i[h] && (u = h);
    s.normalizeSlideIndex && (u < 0 || typeof u > "u") && (u = 0);
  }
  if (r.indexOf(t) >= 0) f = r.indexOf(t);
  else {
    const h = Math.min(s.slidesPerGroupSkip, u);
    f = h + Math.floor((u - h) / s.slidesPerGroup);
  }
  if ((f >= r.length && (f = r.length - 1), u === o)) {
    f !== c && ((e.snapIndex = f), e.emit("snapIndexChange"));
    return;
  }
  const d = parseInt(e.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
  Object.assign(e, {
    snapIndex: f,
    realIndex: d,
    previousIndex: o,
    activeIndex: u,
  }),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    l !== d && e.emit("realIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange");
}
a(yp, "updateActiveIndex");
function bp(n) {
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
a(bp, "updateClickedSlide");
const _p = {
  updateSize: fp,
  updateSlides: dp,
  updateAutoHeight: hp,
  updateSlidesOffset: pp,
  updateSlidesProgress: mp,
  updateProgress: gp,
  updateSlidesClasses: vp,
  updateActiveIndex: yp,
  updateClickedSlide: bp,
};
function xp(n = this.isHorizontal() ? "x" : "y") {
  const e = this,
    { params: t, rtlTranslate: i, translate: r, $wrapperEl: s } = e;
  if (t.virtualTranslate) return i ? -r : r;
  if (t.cssMode) return r;
  let o = Ma(s[0], n);
  return i && (o = -o), o || 0;
}
a(xp, "getSwiperTranslate");
function Sp(n, e) {
  const t = this,
    {
      rtlTranslate: i,
      params: r,
      $wrapperEl: s,
      wrapperEl: o,
      progress: l,
    } = t;
  let c = 0,
    u = 0;
  const f = 0;
  t.isHorizontal() ? (c = i ? -n : n) : (u = n),
    r.roundLengths && ((c = Math.floor(c)), (u = Math.floor(u))),
    r.cssMode
      ? (o[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
          ? -c
          : -u)
      : r.virtualTranslate ||
        s.transform(`translate3d(${c}px, ${u}px, ${f}px)`),
    (t.previousTranslate = t.translate),
    (t.translate = t.isHorizontal() ? c : u);
  let d;
  const h = t.maxTranslate() - t.minTranslate();
  h === 0 ? (d = 0) : (d = (n - t.minTranslate()) / h),
    d !== l && t.updateProgress(n),
    t.emit("setTranslate", t.translate, e);
}
a(Sp, "setTranslate");
function Tp() {
  return -this.snapGrid[0];
}
a(Tp, "minTranslate");
function Ep() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
a(Ep, "maxTranslate");
function wp(n = 0, e = this.params.speed, t = !0, i = !0, r) {
  const s = this,
    { params: o, wrapperEl: l } = s;
  if (s.animating && o.preventInteractionOnTransition) return !1;
  const c = s.minTranslate(),
    u = s.maxTranslate();
  let f;
  if (
    (i && n > c ? (f = c) : i && n < u ? (f = u) : (f = n),
    s.updateProgress(f),
    o.cssMode)
  ) {
    const d = s.isHorizontal();
    if (e === 0) l[d ? "scrollLeft" : "scrollTop"] = -f;
    else {
      if (!s.support.smoothScroll)
        return (
          Ru({ swiper: s, targetPosition: -f, side: d ? "left" : "top" }), !0
        );
      l.scrollTo({ [d ? "left" : "top"]: -f, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (s.setTransition(0),
        s.setTranslate(f),
        t && (s.emit("beforeTransitionStart", e, r), s.emit("transitionEnd")))
      : (s.setTransition(e),
        s.setTranslate(f),
        t && (s.emit("beforeTransitionStart", e, r), s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = a(function (h) {
              !s ||
                s.destroyed ||
                (h.target === this &&
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
a(wp, "translateTo");
const Cp = {
  getTranslate: xp,
  setTranslate: Sp,
  minTranslate: Tp,
  maxTranslate: Ep,
  translateTo: wp,
};
function Pp(n, e) {
  const t = this;
  t.params.cssMode || t.$wrapperEl.transition(n), t.emit("setTransition", n, e);
}
a(Pp, "setTransition");
function Bu({ swiper: n, runCallbacks: e, direction: t, step: i }) {
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
a(Bu, "transitionEmit");
function kp(n = !0, e) {
  const t = this,
    { params: i } = t;
  i.cssMode ||
    (i.autoHeight && t.updateAutoHeight(),
    Bu({ swiper: t, runCallbacks: n, direction: e, step: "Start" }));
}
a(kp, "transitionStart");
function Mp(n = !0, e) {
  const t = this,
    { params: i } = t;
  (t.animating = !1),
    !i.cssMode &&
      (t.setTransition(0),
      Bu({ swiper: t, runCallbacks: n, direction: e, step: "End" }));
}
a(Mp, "transitionEnd");
const Ap = { setTransition: Pp, transitionStart: kp, transitionEnd: Mp };
function $p(n = 0, e = this.params.speed, t = !0, i, r) {
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
    snapGrid: c,
    slidesGrid: u,
    previousIndex: f,
    activeIndex: d,
    rtlTranslate: h,
    wrapperEl: p,
    enabled: g,
  } = s;
  if ((s.animating && l.preventInteractionOnTransition) || (!g && !i && !r))
    return !1;
  const m = Math.min(s.params.slidesPerGroupSkip, o);
  let v = m + Math.floor((o - m) / s.params.slidesPerGroup);
  v >= c.length && (v = c.length - 1);
  const b = -c[v];
  if (l.normalizeSlideIndex)
    for (let _ = 0; _ < u.length; _ += 1) {
      const S = -Math.floor(b * 100),
        T = Math.floor(u[_] * 100),
        w = Math.floor(u[_ + 1] * 100);
      typeof u[_ + 1] < "u"
        ? S >= T && S < w - (w - T) / 2
          ? (o = _)
          : S >= T && S < w && (o = _ + 1)
        : S >= T && (o = _);
    }
  if (
    s.initialized &&
    o !== d &&
    ((!s.allowSlideNext && b < s.translate && b < s.minTranslate()) ||
      (!s.allowSlidePrev &&
        b > s.translate &&
        b > s.maxTranslate() &&
        (d || 0) !== o))
  )
    return !1;
  o !== (f || 0) && t && s.emit("beforeSlideChangeStart"), s.updateProgress(b);
  let y;
  if (
    (o > d ? (y = "next") : o < d ? (y = "prev") : (y = "reset"),
    (h && -b === s.translate) || (!h && b === s.translate))
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
      S = h ? b : -b;
    if (e === 0) {
      const T = s.virtual && s.params.virtual.enabled;
      T &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        (p[_ ? "scrollLeft" : "scrollTop"] = S),
        T &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""),
              (s._swiperImmediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll)
        return (
          Ru({ swiper: s, targetPosition: S, side: _ ? "left" : "top" }), !0
        );
      p.scrollTo({ [_ ? "left" : "top"]: S, behavior: "smooth" });
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
          (s.onSlideToWrapperTransitionEnd = a(function (S) {
            !s ||
              s.destroyed ||
              (S.target === this &&
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
a($p, "slideTo");
function Op(n = 0, e = this.params.speed, t = !0, i) {
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
a(Op, "slideToLoop");
function Lp(n = this.params.speed, e = !0, t) {
  const i = this,
    { animating: r, enabled: s, params: o } = i;
  if (!s) return i;
  let l = o.slidesPerGroup;
  o.slidesPerView === "auto" &&
    o.slidesPerGroup === 1 &&
    o.slidesPerGroupAuto &&
    (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const c = i.activeIndex < o.slidesPerGroupSkip ? 1 : l;
  if (o.loop) {
    if (r && o.loopPreventsSlide) return !1;
    i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
  }
  return o.rewind && i.isEnd
    ? i.slideTo(0, n, e, t)
    : i.slideTo(i.activeIndex + c, n, e, t);
}
a(Lp, "slideNext");
function Ip(n = this.params.speed, e = !0, t) {
  const i = this,
    {
      params: r,
      animating: s,
      snapGrid: o,
      slidesGrid: l,
      rtlTranslate: c,
      enabled: u,
    } = i;
  if (!u) return i;
  if (r.loop) {
    if (s && r.loopPreventsSlide) return !1;
    i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
  }
  const f = c ? i.translate : -i.translate;
  function d(v) {
    return v < 0 ? -Math.floor(Math.abs(v)) : Math.floor(v);
  }
  a(d, "normalize");
  const h = d(f),
    p = o.map((v) => d(v));
  let g = o[p.indexOf(h) - 1];
  if (typeof g > "u" && r.cssMode) {
    let v;
    o.forEach((b, y) => {
      h >= b && (v = y);
    }),
      typeof v < "u" && (g = o[v > 0 ? v - 1 : v]);
  }
  let m = 0;
  if (
    (typeof g < "u" &&
      ((m = l.indexOf(g)),
      m < 0 && (m = i.activeIndex - 1),
      r.slidesPerView === "auto" &&
        r.slidesPerGroup === 1 &&
        r.slidesPerGroupAuto &&
        ((m = m - i.slidesPerViewDynamic("previous", !0) + 1),
        (m = Math.max(m, 0)))),
    r.rewind && i.isBeginning)
  ) {
    const v =
      i.params.virtual && i.params.virtual.enabled && i.virtual
        ? i.virtual.slides.length - 1
        : i.slides.length - 1;
    return i.slideTo(v, n, e, t);
  }
  return i.slideTo(m, n, e, t);
}
a(Ip, "slidePrev");
function Dp(n = this.params.speed, e = !0, t) {
  const i = this;
  return i.slideTo(i.activeIndex, n, e, t);
}
a(Dp, "slideReset");
function zp(n = this.params.speed, e = !0, t, i = 0.5) {
  const r = this;
  let s = r.activeIndex;
  const o = Math.min(r.params.slidesPerGroupSkip, s),
    l = o + Math.floor((s - o) / r.params.slidesPerGroup),
    c = r.rtlTranslate ? r.translate : -r.translate;
  if (c >= r.snapGrid[l]) {
    const u = r.snapGrid[l],
      f = r.snapGrid[l + 1];
    c - u > (f - u) * i && (s += r.params.slidesPerGroup);
  } else {
    const u = r.snapGrid[l - 1],
      f = r.snapGrid[l];
    c - u <= (f - u) * i && (s -= r.params.slidesPerGroup);
  }
  return (
    (s = Math.max(s, 0)),
    (s = Math.min(s, r.slidesGrid.length - 1)),
    r.slideTo(s, n, e, t)
  );
}
a(zp, "slideToClosest");
function Rp() {
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
            ni(() => {
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
          ni(() => {
            n.slideTo(r);
          }))
        : n.slideTo(r);
  } else n.slideTo(r);
}
a(Rp, "slideToClickedSlide");
const Np = {
  slideTo: $p,
  slideToLoop: Op,
  slideNext: Lp,
  slidePrev: Ip,
  slideReset: Dp,
  slideToClosest: zp,
  slideToClickedSlide: Rp,
};
function Bp() {
  const n = this,
    e = Ve(),
    { params: t, $wrapperEl: i } = n,
    r = i.children().length > 0 ? F(i.children()[0].parentNode) : i;
  r.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
  let s = r.children(`.${t.slideClass}`);
  if (t.loopFillGroupWithBlank) {
    const c = t.slidesPerGroup - (s.length % t.slidesPerGroup);
    if (c !== t.slidesPerGroup) {
      for (let u = 0; u < c; u += 1) {
        const f = F(e.createElement("div")).addClass(
          `${t.slideClass} ${t.slideBlankClass}`
        );
        r.append(f);
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
  s.each((c, u) => {
    F(c).attr("data-swiper-slide-index", u);
  });
  for (let c = 0; c < n.loopedSlides; c += 1) {
    const u = c - Math.floor(c / s.length) * s.length;
    l.push(s.eq(u)[0]), o.unshift(s.eq(s.length - u - 1)[0]);
  }
  for (let c = 0; c < l.length; c += 1)
    r.append(F(l[c].cloneNode(!0)).addClass(t.slideDuplicateClass));
  for (let c = o.length - 1; c >= 0; c -= 1)
    r.prepend(F(o[c].cloneNode(!0)).addClass(t.slideDuplicateClass));
}
a(Bp, "loopCreate");
function Fp() {
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
  let c;
  (n.allowSlidePrev = !0), (n.allowSlideNext = !0);
  const f = -o[e] - n.getTranslate();
  e < i
    ? ((c = t.length - i * 3 + e),
      (c += i),
      n.slideTo(c, 0, !1, !0) &&
        f !== 0 &&
        n.setTranslate((l ? -n.translate : n.translate) - f))
    : e >= t.length - i &&
      ((c = -t.length + e + i),
      (c += i),
      n.slideTo(c, 0, !1, !0) &&
        f !== 0 &&
        n.setTranslate((l ? -n.translate : n.translate) - f)),
    (n.allowSlidePrev = r),
    (n.allowSlideNext = s),
    n.emit("loopFix");
}
a(Fp, "loopFix");
function qp() {
  const n = this,
    { $wrapperEl: e, params: t, slides: i } = n;
  e
    .children(
      `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
    )
    .remove(),
    i.removeAttr("data-swiper-slide-index");
}
a(qp, "loopDestroy");
const Hp = { loopCreate: Bp, loopFix: Fp, loopDestroy: qp };
function Vp(n) {
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
a(Vp, "setGrabCursor");
function Wp() {
  const n = this;
  n.support.touch ||
    (n.params.watchOverflow && n.isLocked) ||
    n.params.cssMode ||
    (n[
      n.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = "");
}
a(Wp, "unsetGrabCursor");
const Xp = { setGrabCursor: Vp, unsetGrabCursor: Wp };
function Yp(n, e = this) {
  function t(i) {
    if (!i || i === Ve() || i === ye()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const r = i.closest(n);
    return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
  }
  return a(t, "__closestFrom"), t(e);
}
a(Yp, "closestElement");
function Gp(n) {
  const e = this,
    t = Ve(),
    i = ye(),
    r = e.touchEventsData,
    { params: s, touches: o, enabled: l } = e;
  if (!l || (e.animating && s.preventInteractionOnTransition)) return;
  !e.animating && s.cssMode && s.loop && e.loopFix();
  let c = n;
  c.originalEvent && (c = c.originalEvent);
  let u = F(c.target);
  if (
    (s.touchEventsTarget === "wrapper" && !u.closest(e.wrapperEl).length) ||
    ((r.isTouchEvent = c.type === "touchstart"),
    !r.isTouchEvent && "which" in c && c.which === 3) ||
    (!r.isTouchEvent && "button" in c && c.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return;
  const f = !!s.noSwipingClass && s.noSwipingClass !== "",
    d = n.composedPath ? n.composedPath() : n.path;
  f && c.target && c.target.shadowRoot && d && (u = F(d[0]));
  const h = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    p = !!(c.target && c.target.shadowRoot);
  if (s.noSwiping && (p ? Yp(h, u[0]) : u.closest(h)[0])) {
    e.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !u.closest(s.swipeHandler)[0]) return;
  (o.currentX = c.type === "touchstart" ? c.targetTouches[0].pageX : c.pageX),
    (o.currentY = c.type === "touchstart" ? c.targetTouches[0].pageY : c.pageY);
  const g = o.currentX,
    m = o.currentY,
    v = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
    b = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
  if (v && (g <= b || g >= i.innerWidth - b))
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
    (o.startX = g),
    (o.startY = m),
    (r.touchStartTime = Lt()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    s.threshold > 0 && (r.allowThresholdMove = !1),
    c.type !== "touchstart")
  ) {
    let y = !0;
    u.is(r.focusableElements) &&
      ((y = !1), u[0].nodeName === "SELECT" && (r.isTouched = !1)),
      t.activeElement &&
        F(t.activeElement).is(r.focusableElements) &&
        t.activeElement !== u[0] &&
        t.activeElement.blur();
    const _ = y && e.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || _) &&
      !u[0].isContentEditable &&
      c.preventDefault();
  }
  e.params.freeMode &&
    e.params.freeMode.enabled &&
    e.freeMode &&
    e.animating &&
    !s.cssMode &&
    e.freeMode.onTouchStart(),
    e.emit("touchStart", c);
}
a(Gp, "onTouchStart");
function jp(n) {
  const e = Ve(),
    t = this,
    i = t.touchEventsData,
    { params: r, touches: s, rtlTranslate: o, enabled: l } = t;
  if (!l) return;
  let c = n;
  if ((c.originalEvent && (c = c.originalEvent), !i.isTouched)) {
    i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", c);
    return;
  }
  if (i.isTouchEvent && c.type !== "touchmove") return;
  const u =
      c.type === "touchmove" &&
      c.targetTouches &&
      (c.targetTouches[0] || c.changedTouches[0]),
    f = c.type === "touchmove" ? u.pageX : c.pageX,
    d = c.type === "touchmove" ? u.pageY : c.pageY;
  if (c.preventedByNestedSwiper) {
    (s.startX = f), (s.startY = d);
    return;
  }
  if (!t.allowTouchMove) {
    F(c.target).is(i.focusableElements) || (t.allowClick = !1),
      i.isTouched &&
        (Object.assign(s, { startX: f, startY: d, currentX: f, currentY: d }),
        (i.touchStartTime = Lt()));
    return;
  }
  if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
    if (t.isVertical()) {
      if (
        (d < s.startY && t.translate <= t.maxTranslate()) ||
        (d > s.startY && t.translate >= t.minTranslate())
      ) {
        (i.isTouched = !1), (i.isMoved = !1);
        return;
      }
    } else if (
      (f < s.startX && t.translate <= t.maxTranslate()) ||
      (f > s.startX && t.translate >= t.minTranslate())
    )
      return;
  }
  if (
    i.isTouchEvent &&
    e.activeElement &&
    c.target === e.activeElement &&
    F(c.target).is(i.focusableElements)
  ) {
    (i.isMoved = !0), (t.allowClick = !1);
    return;
  }
  if (
    (i.allowTouchCallbacks && t.emit("touchMove", c),
    c.targetTouches && c.targetTouches.length > 1)
  )
    return;
  (s.currentX = f), (s.currentY = d);
  const h = s.currentX - s.startX,
    p = s.currentY - s.startY;
  if (t.params.threshold && Math.sqrt(h ** 2 + p ** 2) < t.params.threshold)
    return;
  if (typeof i.isScrolling > "u") {
    let b;
    (t.isHorizontal() && s.currentY === s.startY) ||
    (t.isVertical() && s.currentX === s.startX)
      ? (i.isScrolling = !1)
      : h * h + p * p >= 25 &&
        ((b = (Math.atan2(Math.abs(p), Math.abs(h)) * 180) / Math.PI),
        (i.isScrolling = t.isHorizontal()
          ? b > r.touchAngle
          : 90 - b > r.touchAngle));
  }
  if (
    (i.isScrolling && t.emit("touchMoveOpposite", c),
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
    !r.cssMode && c.cancelable && c.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
    i.isMoved ||
      (r.loop && !r.cssMode && t.loopFix(),
      (i.startTranslate = t.getTranslate()),
      t.setTransition(0),
      t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
      (i.allowMomentumBounce = !1),
      r.grabCursor &&
        (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
        t.setGrabCursor(!0),
      t.emit("sliderFirstMove", c)),
    t.emit("sliderMove", c),
    (i.isMoved = !0);
  let g = t.isHorizontal() ? h : p;
  (s.diff = g),
    (g *= r.touchRatio),
    o && (g = -g),
    (t.swipeDirection = g > 0 ? "prev" : "next"),
    (i.currentTranslate = g + i.startTranslate);
  let m = !0,
    v = r.resistanceRatio;
  if (
    (r.touchReleaseOnEdges && (v = 0),
    g > 0 && i.currentTranslate > t.minTranslate()
      ? ((m = !1),
        r.resistance &&
          (i.currentTranslate =
            t.minTranslate() -
            1 +
            (-t.minTranslate() + i.startTranslate + g) ** v))
      : g < 0 &&
        i.currentTranslate < t.maxTranslate() &&
        ((m = !1),
        r.resistance &&
          (i.currentTranslate =
            t.maxTranslate() +
            1 -
            (t.maxTranslate() - i.startTranslate - g) ** v)),
    m && (c.preventedByNestedSwiper = !0),
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
    if (Math.abs(g) > r.threshold || i.allowThresholdMove) {
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
a(jp, "onTouchMove");
function Up(n) {
  const e = this,
    t = e.touchEventsData,
    { params: i, touches: r, rtlTranslate: s, slidesGrid: o, enabled: l } = e;
  if (!l) return;
  let c = n;
  if (
    (c.originalEvent && (c = c.originalEvent),
    t.allowTouchCallbacks && e.emit("touchEnd", c),
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
  const u = Lt(),
    f = u - t.touchStartTime;
  if (e.allowClick) {
    const y = c.path || (c.composedPath && c.composedPath());
    e.updateClickedSlide((y && y[0]) || c.target),
      e.emit("tap click", c),
      f < 300 &&
        u - t.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", c);
  }
  if (
    ((t.lastClickTime = Lt()),
    ni(() => {
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
  let d;
  if (
    (i.followFinger
      ? (d = s ? e.translate : -e.translate)
      : (d = -t.currentTranslate),
    i.cssMode)
  )
    return;
  if (e.params.freeMode && i.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: d });
    return;
  }
  let h = 0,
    p = e.slidesSizesGrid[0];
  for (
    let y = 0;
    y < o.length;
    y += y < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const _ = y < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof o[y + _] < "u"
      ? d >= o[y] && d < o[y + _] && ((h = y), (p = o[y + _] - o[y]))
      : d >= o[y] && ((h = y), (p = o[o.length - 1] - o[o.length - 2]));
  }
  let g = null,
    m = null;
  i.rewind &&
    (e.isBeginning
      ? (m =
          e.params.virtual && e.params.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (g = 0));
  const v = (d - o[h]) / p,
    b = h < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (f > i.longSwipesMs) {
    if (!i.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (v >= i.longSwipesRatio
        ? e.slideTo(i.rewind && e.isEnd ? g : h + b)
        : e.slideTo(h)),
      e.swipeDirection === "prev" &&
        (v > 1 - i.longSwipesRatio
          ? e.slideTo(h + b)
          : m !== null && v < 0 && Math.abs(v) > i.longSwipesRatio
          ? e.slideTo(m)
          : e.slideTo(h));
  } else {
    if (!i.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (c.target === e.navigation.nextEl || c.target === e.navigation.prevEl)
      ? c.target === e.navigation.nextEl
        ? e.slideTo(h + b)
        : e.slideTo(h)
      : (e.swipeDirection === "next" && e.slideTo(g !== null ? g : h + b),
        e.swipeDirection === "prev" && e.slideTo(m !== null ? m : h));
  }
}
a(Up, "onTouchEnd");
function gc() {
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
a(gc, "onResize");
function Kp(n) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && n.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (n.stopPropagation(), n.stopImmediatePropagation())));
}
a(Kp, "onClick");
function Zp() {
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
a(Zp, "onScroll");
let vc = !1;
function Qp() {}
a(Qp, "dummyEventListener");
const Fu = a((n, e) => {
  const t = Ve(),
    {
      params: i,
      touchEvents: r,
      el: s,
      wrapperEl: o,
      device: l,
      support: c,
    } = n,
    u = !!i.nested,
    f = e === "on" ? "addEventListener" : "removeEventListener",
    d = e;
  if (!c.touch)
    s[f](r.start, n.onTouchStart, !1),
      t[f](r.move, n.onTouchMove, u),
      t[f](r.end, n.onTouchEnd, !1);
  else {
    const h =
      r.start === "touchstart" && c.passiveListener && i.passiveListeners
        ? { passive: !0, capture: !1 }
        : !1;
    s[f](r.start, n.onTouchStart, h),
      s[f](
        r.move,
        n.onTouchMove,
        c.passiveListener ? { passive: !1, capture: u } : u
      ),
      s[f](r.end, n.onTouchEnd, h),
      r.cancel && s[f](r.cancel, n.onTouchEnd, h);
  }
  (i.preventClicks || i.preventClicksPropagation) &&
    s[f]("click", n.onClick, !0),
    i.cssMode && o[f]("scroll", n.onScroll),
    i.updateOnWindowResize
      ? n[d](
          l.ios || l.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          gc,
          !0
        )
      : n[d]("observerUpdate", gc, !0);
}, "events");
function Jp() {
  const n = this,
    e = Ve(),
    { params: t, support: i } = n;
  (n.onTouchStart = Gp.bind(n)),
    (n.onTouchMove = jp.bind(n)),
    (n.onTouchEnd = Up.bind(n)),
    t.cssMode && (n.onScroll = Zp.bind(n)),
    (n.onClick = Kp.bind(n)),
    i.touch && !vc && (e.addEventListener("touchstart", Qp), (vc = !0)),
    Fu(n, "on");
}
a(Jp, "attachEvents");
function em() {
  Fu(this, "off");
}
a(em, "detachEvents");
const tm = { attachEvents: Jp, detachEvents: em },
  yc = a((n, e) => n.grid && e.grid && e.grid.rows > 1, "isGridEnabled");
function nm() {
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
  const u = (l in o ? o[l] : void 0) || n.originalParams,
    f = yc(n, r),
    d = yc(n, u),
    h = r.enabled;
  f && !d
    ? (s.removeClass(
        `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
      ),
      n.emitContainerClasses())
    : !f &&
      d &&
      (s.addClass(`${r.containerModifierClass}grid`),
      ((u.grid.fill && u.grid.fill === "column") ||
        (!u.grid.fill && r.grid.fill === "column")) &&
        s.addClass(`${r.containerModifierClass}grid-column`),
      n.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((v) => {
      const b = r[v] && r[v].enabled,
        y = u[v] && u[v].enabled;
      b && !y && n[v].disable(), !b && y && n[v].enable();
    });
  const p = u.direction && u.direction !== r.direction,
    g = r.loop && (u.slidesPerView !== r.slidesPerView || p);
  p && t && n.changeDirection(), At(n.params, u);
  const m = n.params.enabled;
  Object.assign(n, {
    allowTouchMove: n.params.allowTouchMove,
    allowSlideNext: n.params.allowSlideNext,
    allowSlidePrev: n.params.allowSlidePrev,
  }),
    h && !m ? n.disable() : !h && m && n.enable(),
    (n.currentBreakpoint = l),
    n.emit("_beforeBreakpoint", u),
    g &&
      t &&
      (n.loopDestroy(),
      n.loopCreate(),
      n.updateSlides(),
      n.slideTo(e - i + n.loopedSlides, 0, !1)),
    n.emit("breakpoint", u);
}
a(nm, "setBreakpoint");
function im(n, e = "window", t) {
  if (!n || (e === "container" && !t)) return;
  let i = !1;
  const r = ye(),
    s = e === "window" ? r.innerHeight : t.clientHeight,
    o = Object.keys(n).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const c = parseFloat(l.substr(1));
        return { value: s * c, point: l };
      }
      return { value: l, point: l };
    });
  o.sort((l, c) => parseInt(l.value, 10) - parseInt(c.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const { point: c, value: u } = o[l];
    e === "window"
      ? r.matchMedia(`(min-width: ${u}px)`).matches && (i = c)
      : u <= t.clientWidth && (i = c);
  }
  return i || "max";
}
a(im, "getBreakpoint");
const rm = { setBreakpoint: nm, getBreakpoint: im };
function sm(n, e) {
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
a(sm, "prepareClasses");
function om() {
  const n = this,
    { classNames: e, params: t, rtl: i, $el: r, device: s, support: o } = n,
    l = sm(
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
a(om, "addClasses");
function am() {
  const n = this,
    { $el: e, classNames: t } = n;
  e.removeClass(t.join(" ")), n.emitContainerClasses();
}
a(am, "removeClasses");
const lm = { addClasses: om, removeClasses: am };
function cm(n, e, t, i, r, s) {
  const o = ye();
  let l;
  function c() {
    s && s();
  }
  a(c, "onReady"),
    !F(n).parent("picture")[0] && (!n.complete || !r) && e
      ? ((l = new o.Image()),
        (l.onload = c),
        (l.onerror = c),
        i && (l.sizes = i),
        t && (l.srcset = t),
        e && (l.src = e))
      : c();
}
a(cm, "loadImage");
function um() {
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
a(um, "preloadImages");
const fm = { loadImage: cm, preloadImages: um };
function dm() {
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
a(dm, "checkOverflow");
const hm = { checkOverflow: dm },
  bc = {
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
function pm(n, e) {
  return a(function (i = {}) {
    const r = Object.keys(i)[0],
      s = i[r];
    if (typeof s != "object" || s === null) {
      At(e, i);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
        n[r] === !0 &&
        (n[r] = { auto: !0 }),
      !(r in n && "enabled" in s))
    ) {
      At(e, i);
      return;
    }
    n[r] === !0 && (n[r] = { enabled: !0 }),
      typeof n[r] == "object" && !("enabled" in n[r]) && (n[r].enabled = !0),
      n[r] || (n[r] = { enabled: !1 }),
      At(e, i);
  }, "extendParams");
}
a(pm, "moduleExtendParams");
const Qo = {
    eventsEmitter: up,
    update: _p,
    translate: Cp,
    transition: Ap,
    slide: Np,
    loop: Hp,
    grabCursor: Xp,
    events: tm,
    breakpoints: rm,
    checkOverflow: hm,
    classes: lm,
    images: fm,
  },
  Jo = {},
  rn = class rn {
    constructor(...e) {
      let t, i;
      if (
        (e.length === 1 &&
        e[0].constructor &&
        Object.prototype.toString.call(e[0]).slice(8, -1) === "Object"
          ? (i = e[0])
          : ([t, i] = e),
        i || (i = {}),
        (i = At({}, i)),
        t && !i.el && (i.el = t),
        i.el && F(i.el).length > 1)
      ) {
        const l = [];
        return (
          F(i.el).each((c) => {
            const u = At({}, i, { el: c });
            l.push(new rn(u));
          }),
          l
        );
      }
      const r = this;
      (r.__swiper__ = !0),
        (r.support = Nu()),
        (r.device = sp({ userAgent: i.userAgent })),
        (r.browser = ap()),
        (r.eventsListeners = {}),
        (r.eventsAnyListeners = []),
        (r.modules = [...r.__modules__]),
        i.modules && Array.isArray(i.modules) && r.modules.push(...i.modules);
      const s = {};
      r.modules.forEach((l) => {
        l({
          swiper: r,
          extendParams: pm(i, s),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r),
        });
      });
      const o = At({}, bc, s);
      return (
        (r.params = At({}, o, Jo, i)),
        (r.originalParams = At({}, r.params)),
        (r.passedParams = At({}, i)),
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
            const c = ["touchstart", "touchmove", "touchend", "touchcancel"],
              u = ["pointerdown", "pointermove", "pointerup"];
            return (
              (r.touchEventsTouch = {
                start: c[0],
                move: c[1],
                end: c[2],
                cancel: c[3],
              }),
              (r.touchEventsDesktop = { start: u[0], move: u[1], end: u[2] }),
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
            lastClickTime: Lt(),
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
          size: c,
          activeIndex: u,
        } = i;
      let f = 1;
      if (r.centeredSlides) {
        let d = s[u].swiperSlideSize,
          h;
        for (let p = u + 1; p < s.length; p += 1)
          s[p] &&
            !h &&
            ((d += s[p].swiperSlideSize), (f += 1), d > c && (h = !0));
        for (let p = u - 1; p >= 0; p -= 1)
          s[p] &&
            !h &&
            ((d += s[p].swiperSlideSize), (f += 1), d > c && (h = !0));
      } else if (e === "current")
        for (let d = u + 1; d < s.length; d += 1)
          (t ? o[d] + l[d] - o[u] < c : o[d] - o[u] < c) && (f += 1);
      else for (let d = u - 1; d >= 0; d -= 1) o[u] - o[d] < c && (f += 1);
      return f;
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
          return (l.children = (c) => i.children(c)), l;
        }
        return i.children ? i.children(r()) : F(i).children(r());
      }, "getWrapper")();
      if (o.length === 0 && t.params.createElements) {
        const c = Ve().createElement("div");
        (o = F(c)),
          (c.className = t.params.wrapperClass),
          i.append(c),
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
          Object.keys(i.eventsListeners).forEach((c) => {
            i.off(c);
          }),
          e !== !1 && ((i.$el[0].swiper = null), ep(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      At(Jo, e);
    }
    static get extendedDefaults() {
      return Jo;
    }
    static get defaults() {
      return bc;
    }
    static installModule(e) {
      rn.prototype.__modules__ || (rn.prototype.__modules__ = []);
      const t = rn.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((t) => rn.installModule(t)), rn)
        : (rn.installModule(e), rn);
    }
  };
a(rn, "Swiper");
let ii = rn;
Object.keys(Qo).forEach((n) => {
  Object.keys(Qo[n]).forEach((e) => {
    ii.prototype[e] = Qo[n][e];
  });
});
ii.use([lp, cp]);
function mm({ swiper: n, extendParams: e, on: t, emit: i }) {
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
  n.virtual = {
    cache: {},
    from: void 0,
    to: void 0,
    slides: [],
    offset: 0,
    slidesGrid: [],
  };
  function s(d, h) {
    const p = n.params.virtual;
    if (p.cache && n.virtual.cache[h]) return n.virtual.cache[h];
    const g = p.renderSlide
      ? F(p.renderSlide.call(n, d, h))
      : F(
          `<div class="${n.params.slideClass}" data-swiper-slide-index="${h}">${d}</div>`
        );
    return (
      g.attr("data-swiper-slide-index") || g.attr("data-swiper-slide-index", h),
      p.cache && (n.virtual.cache[h] = g),
      g
    );
  }
  a(s, "renderSlide");
  function o(d) {
    const { slidesPerView: h, slidesPerGroup: p, centeredSlides: g } = n.params,
      { addSlidesBefore: m, addSlidesAfter: v } = n.params.virtual,
      { from: b, to: y, slides: _, slidesGrid: S, offset: T } = n.virtual;
    n.params.cssMode || n.updateActiveIndex();
    const w = n.activeIndex || 0;
    let C;
    n.rtlTranslate ? (C = "right") : (C = n.isHorizontal() ? "left" : "top");
    let P, L;
    g
      ? ((P = Math.floor(h / 2) + p + v), (L = Math.floor(h / 2) + p + m))
      : ((P = h + (p - 1) + v), (L = p + m));
    const k = Math.max((w || 0) - L, 0),
      $ = Math.min((w || 0) + P, _.length - 1),
      x = (n.slidesGrid[k] || 0) - (n.slidesGrid[0] || 0);
    Object.assign(n.virtual, {
      from: k,
      to: $,
      offset: x,
      slidesGrid: n.slidesGrid,
    });
    function E() {
      n.updateSlides(),
        n.updateProgress(),
        n.updateSlidesClasses(),
        n.lazy && n.params.lazy.enabled && n.lazy.load(),
        i("virtualUpdate");
    }
    if ((a(E, "onRendered"), b === k && y === $ && !d)) {
      n.slidesGrid !== S && x !== T && n.slides.css(C, `${x}px`),
        n.updateProgress(),
        i("virtualUpdate");
      return;
    }
    if (n.params.virtual.renderExternal) {
      n.params.virtual.renderExternal.call(n, {
        offset: x,
        from: k,
        to: $,
        slides: a(function () {
          const D = [];
          for (let z = k; z <= $; z += 1) D.push(_[z]);
          return D;
        }, "getSlides")(),
      }),
        n.params.virtual.renderExternalUpdate ? E() : i("virtualUpdate");
      return;
    }
    const O = [],
      I = [];
    if (d) n.$wrapperEl.find(`.${n.params.slideClass}`).remove();
    else
      for (let M = b; M <= y; M += 1)
        (M < k || M > $) &&
          n.$wrapperEl
            .find(`.${n.params.slideClass}[data-swiper-slide-index="${M}"]`)
            .remove();
    for (let M = 0; M < _.length; M += 1)
      M >= k &&
        M <= $ &&
        (typeof y > "u" || d
          ? I.push(M)
          : (M > y && I.push(M), M < b && O.push(M)));
    I.forEach((M) => {
      n.$wrapperEl.append(s(_[M], M));
    }),
      O.sort((M, D) => D - M).forEach((M) => {
        n.$wrapperEl.prepend(s(_[M], M));
      }),
      n.$wrapperEl.children(".swiper-slide").css(C, `${x}px`),
      E();
  }
  a(o, "update");
  function l(d) {
    if (typeof d == "object" && "length" in d)
      for (let h = 0; h < d.length; h += 1) d[h] && n.virtual.slides.push(d[h]);
    else n.virtual.slides.push(d);
    o(!0);
  }
  a(l, "appendSlide");
  function c(d) {
    const h = n.activeIndex;
    let p = h + 1,
      g = 1;
    if (Array.isArray(d)) {
      for (let m = 0; m < d.length; m += 1)
        d[m] && n.virtual.slides.unshift(d[m]);
      (p = h + d.length), (g = d.length);
    } else n.virtual.slides.unshift(d);
    if (n.params.virtual.cache) {
      const m = n.virtual.cache,
        v = {};
      Object.keys(m).forEach((b) => {
        const y = m[b],
          _ = y.attr("data-swiper-slide-index");
        _ && y.attr("data-swiper-slide-index", parseInt(_, 10) + g),
          (v[parseInt(b, 10) + g] = y);
      }),
        (n.virtual.cache = v);
    }
    o(!0), n.slideTo(p, 0);
  }
  a(c, "prependSlide");
  function u(d) {
    if (typeof d > "u" || d === null) return;
    let h = n.activeIndex;
    if (Array.isArray(d))
      for (let p = d.length - 1; p >= 0; p -= 1)
        n.virtual.slides.splice(d[p], 1),
          n.params.virtual.cache && delete n.virtual.cache[d[p]],
          d[p] < h && (h -= 1),
          (h = Math.max(h, 0));
    else
      n.virtual.slides.splice(d, 1),
        n.params.virtual.cache && delete n.virtual.cache[d],
        d < h && (h -= 1),
        (h = Math.max(h, 0));
    o(!0), n.slideTo(h, 0);
  }
  a(u, "removeSlide");
  function f() {
    (n.virtual.slides = []),
      n.params.virtual.cache && (n.virtual.cache = {}),
      o(!0),
      n.slideTo(0, 0);
  }
  a(f, "removeAllSlides"),
    t("beforeInit", () => {
      n.params.virtual.enabled &&
        ((n.virtual.slides = n.params.virtual.slides),
        n.classNames.push(`${n.params.containerModifierClass}virtual`),
        (n.params.watchSlidesProgress = !0),
        (n.originalParams.watchSlidesProgress = !0),
        n.params.initialSlide || o());
    }),
    t("setTranslate", () => {
      n.params.virtual.enabled &&
        (n.params.cssMode && !n._immediateVirtual
          ? (clearTimeout(r),
            (r = setTimeout(() => {
              o();
            }, 100)))
          : o());
    }),
    t("init update resize", () => {
      n.params.virtual.enabled &&
        n.params.cssMode &&
        Yr(n.wrapperEl, "--swiper-virtual-size", `${n.virtualSize}px`);
    }),
    Object.assign(n.virtual, {
      appendSlide: l,
      prependSlide: c,
      removeSlide: u,
      removeAllSlides: f,
      update: o,
    });
}
a(mm, "Virtual");
function gm({ swiper: n, extendParams: e, on: t, emit: i }) {
  const r = Ve(),
    s = ye();
  (n.keyboard = { enabled: !1 }),
    e({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } });
  function o(u) {
    if (!n.enabled) return;
    const { rtlTranslate: f } = n;
    let d = u;
    d.originalEvent && (d = d.originalEvent);
    const h = d.keyCode || d.charCode,
      p = n.params.keyboard.pageUpDown,
      g = p && h === 33,
      m = p && h === 34,
      v = h === 37,
      b = h === 39,
      y = h === 38,
      _ = h === 40;
    if (
      (!n.allowSlideNext &&
        ((n.isHorizontal() && b) || (n.isVertical() && _) || m)) ||
      (!n.allowSlidePrev &&
        ((n.isHorizontal() && v) || (n.isVertical() && y) || g))
    )
      return !1;
    if (
      !(d.shiftKey || d.altKey || d.ctrlKey || d.metaKey) &&
      !(
        r.activeElement &&
        r.activeElement.nodeName &&
        (r.activeElement.nodeName.toLowerCase() === "input" ||
          r.activeElement.nodeName.toLowerCase() === "textarea")
      )
    ) {
      if (n.params.keyboard.onlyInViewport && (g || m || v || b || y || _)) {
        let S = !1;
        if (
          n.$el.parents(`.${n.params.slideClass}`).length > 0 &&
          n.$el.parents(`.${n.params.slideActiveClass}`).length === 0
        )
          return;
        const T = n.$el,
          w = T[0].clientWidth,
          C = T[0].clientHeight,
          P = s.innerWidth,
          L = s.innerHeight,
          k = n.$el.offset();
        f && (k.left -= n.$el[0].scrollLeft);
        const $ = [
          [k.left, k.top],
          [k.left + w, k.top],
          [k.left, k.top + C],
          [k.left + w, k.top + C],
        ];
        for (let x = 0; x < $.length; x += 1) {
          const E = $[x];
          if (E[0] >= 0 && E[0] <= P && E[1] >= 0 && E[1] <= L) {
            if (E[0] === 0 && E[1] === 0) continue;
            S = !0;
          }
        }
        if (!S) return;
      }
      n.isHorizontal()
        ? ((g || m || v || b) &&
            (d.preventDefault ? d.preventDefault() : (d.returnValue = !1)),
          (((m || b) && !f) || ((g || v) && f)) && n.slideNext(),
          (((g || v) && !f) || ((m || b) && f)) && n.slidePrev())
        : ((g || m || y || _) &&
            (d.preventDefault ? d.preventDefault() : (d.returnValue = !1)),
          (m || _) && n.slideNext(),
          (g || y) && n.slidePrev()),
        i("keyPress", h);
    }
  }
  a(o, "handle");
  function l() {
    n.keyboard.enabled || (F(r).on("keydown", o), (n.keyboard.enabled = !0));
  }
  a(l, "enable");
  function c() {
    n.keyboard.enabled && (F(r).off("keydown", o), (n.keyboard.enabled = !1));
  }
  a(c, "disable"),
    t("init", () => {
      n.params.keyboard.enabled && l();
    }),
    t("destroy", () => {
      n.keyboard.enabled && c();
    }),
    Object.assign(n.keyboard, { enable: l, disable: c });
}
a(gm, "Keyboard");
function vm({ swiper: n, extendParams: e, on: t, emit: i }) {
  const r = ye();
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
    o = Lt(),
    l;
  const c = [];
  function u(y) {
    let w = 0,
      C = 0,
      P = 0,
      L = 0;
    return (
      "detail" in y && (C = y.detail),
      "wheelDelta" in y && (C = -y.wheelDelta / 120),
      "wheelDeltaY" in y && (C = -y.wheelDeltaY / 120),
      "wheelDeltaX" in y && (w = -y.wheelDeltaX / 120),
      "axis" in y && y.axis === y.HORIZONTAL_AXIS && ((w = C), (C = 0)),
      (P = w * 10),
      (L = C * 10),
      "deltaY" in y && (L = y.deltaY),
      "deltaX" in y && (P = y.deltaX),
      y.shiftKey && !P && ((P = L), (L = 0)),
      (P || L) &&
        y.deltaMode &&
        (y.deltaMode === 1 ? ((P *= 40), (L *= 40)) : ((P *= 800), (L *= 800))),
      P && !w && (w = P < 1 ? -1 : 1),
      L && !C && (C = L < 1 ? -1 : 1),
      { spinX: w, spinY: C, pixelX: P, pixelY: L }
    );
  }
  a(u, "normalize");
  function f() {
    n.enabled && (n.mouseEntered = !0);
  }
  a(f, "handleMouseEnter");
  function d() {
    n.enabled && (n.mouseEntered = !1);
  }
  a(d, "handleMouseLeave");
  function h(y) {
    return (n.params.mousewheel.thresholdDelta &&
      y.delta < n.params.mousewheel.thresholdDelta) ||
      (n.params.mousewheel.thresholdTime &&
        Lt() - o < n.params.mousewheel.thresholdTime)
      ? !1
      : y.delta >= 6 && Lt() - o < 60
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
  a(h, "animateSlider");
  function p(y) {
    const _ = n.params.mousewheel;
    if (y.direction < 0) {
      if (n.isEnd && !n.params.loop && _.releaseOnEdges) return !0;
    } else if (n.isBeginning && !n.params.loop && _.releaseOnEdges) return !0;
    return !1;
  }
  a(p, "releaseScroll");
  function g(y) {
    let _ = y,
      S = !0;
    if (!n.enabled) return;
    const T = n.params.mousewheel;
    n.params.cssMode && _.preventDefault();
    let w = n.$el;
    if (
      (n.params.mousewheel.eventsTarget !== "container" &&
        (w = F(n.params.mousewheel.eventsTarget)),
      !n.mouseEntered && !w[0].contains(_.target) && !T.releaseOnEdges)
    )
      return !0;
    _.originalEvent && (_ = _.originalEvent);
    let C = 0;
    const P = n.rtlTranslate ? -1 : 1,
      L = u(_);
    if (T.forceToAxis)
      if (n.isHorizontal())
        if (Math.abs(L.pixelX) > Math.abs(L.pixelY)) C = -L.pixelX * P;
        else return !0;
      else if (Math.abs(L.pixelY) > Math.abs(L.pixelX)) C = -L.pixelY;
      else return !0;
    else
      C = Math.abs(L.pixelX) > Math.abs(L.pixelY) ? -L.pixelX * P : -L.pixelY;
    if (C === 0) return !0;
    T.invert && (C = -C);
    let k = n.getTranslate() + C * T.sensitivity;
    if (
      (k >= n.minTranslate() && (k = n.minTranslate()),
      k <= n.maxTranslate() && (k = n.maxTranslate()),
      (S = n.params.loop
        ? !0
        : !(k === n.minTranslate() || k === n.maxTranslate())),
      S && n.params.nested && _.stopPropagation(),
      !n.params.freeMode || !n.params.freeMode.enabled)
    ) {
      const $ = {
        time: Lt(),
        delta: Math.abs(C),
        direction: Math.sign(C),
        raw: y,
      };
      c.length >= 2 && c.shift();
      const x = c.length ? c[c.length - 1] : void 0;
      if (
        (c.push($),
        x
          ? ($.direction !== x.direction ||
              $.delta > x.delta ||
              $.time > x.time + 150) &&
            h($)
          : h($),
        p($))
      )
        return !0;
    } else {
      const $ = { time: Lt(), delta: Math.abs(C), direction: Math.sign(C) },
        x =
          l &&
          $.time < l.time + 500 &&
          $.delta <= l.delta &&
          $.direction === l.direction;
      if (!x) {
        (l = void 0), n.params.loop && n.loopFix();
        let E = n.getTranslate() + C * T.sensitivity;
        const O = n.isBeginning,
          I = n.isEnd;
        if (
          (E >= n.minTranslate() && (E = n.minTranslate()),
          E <= n.maxTranslate() && (E = n.maxTranslate()),
          n.setTransition(0),
          n.setTranslate(E),
          n.updateProgress(),
          n.updateActiveIndex(),
          n.updateSlidesClasses(),
          ((!O && n.isBeginning) || (!I && n.isEnd)) && n.updateSlidesClasses(),
          n.params.freeMode.sticky)
        ) {
          clearTimeout(s), (s = void 0), c.length >= 15 && c.shift();
          const M = c.length ? c[c.length - 1] : void 0,
            D = c[0];
          if (
            (c.push($), M && ($.delta > M.delta || $.direction !== M.direction))
          )
            c.splice(0);
          else if (
            c.length >= 15 &&
            $.time - D.time < 500 &&
            D.delta - $.delta >= 1 &&
            $.delta <= 6
          ) {
            const z = C > 0 ? 0.8 : 0.2;
            (l = $),
              c.splice(0),
              (s = ni(() => {
                n.slideToClosest(n.params.speed, !0, void 0, z);
              }, 0));
          }
          s ||
            (s = ni(() => {
              (l = $),
                c.splice(0),
                n.slideToClosest(n.params.speed, !0, void 0, 0.5);
            }, 500));
        }
        if (
          (x || i("scroll", _),
          n.params.autoplay &&
            n.params.autoplayDisableOnInteraction &&
            n.autoplay.stop(),
          E === n.minTranslate() || E === n.maxTranslate())
        )
          return !0;
      }
    }
    return _.preventDefault ? _.preventDefault() : (_.returnValue = !1), !1;
  }
  a(g, "handle");
  function m(y) {
    let _ = n.$el;
    n.params.mousewheel.eventsTarget !== "container" &&
      (_ = F(n.params.mousewheel.eventsTarget)),
      _[y]("mouseenter", f),
      _[y]("mouseleave", d),
      _[y]("wheel", g);
  }
  a(m, "events");
  function v() {
    return n.params.cssMode
      ? (n.wrapperEl.removeEventListener("wheel", g), !0)
      : n.mousewheel.enabled
      ? !1
      : (m("on"), (n.mousewheel.enabled = !0), !0);
  }
  a(v, "enable");
  function b() {
    return n.params.cssMode
      ? (n.wrapperEl.addEventListener(event, g), !0)
      : n.mousewheel.enabled
      ? (m("off"), (n.mousewheel.enabled = !1), !0)
      : !1;
  }
  a(b, "disable"),
    t("init", () => {
      !n.params.mousewheel.enabled && n.params.cssMode && b(),
        n.params.mousewheel.enabled && v();
    }),
    t("destroy", () => {
      n.params.cssMode && v(), n.mousewheel.enabled && b();
    }),
    Object.assign(n.mousewheel, { enable: v, disable: b });
}
a(vm, "Mousewheel");
function vl(n, e, t, i) {
  const r = Ve();
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
a(vl, "createElementIfNotDefined");
function ym({ swiper: n, extendParams: e, on: t, emit: i }) {
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
  function r(p) {
    let g;
    return (
      p &&
        ((g = F(p)),
        n.params.uniqueNavElements &&
          typeof p == "string" &&
          g.length > 1 &&
          n.$el.find(p).length === 1 &&
          (g = n.$el.find(p))),
      g
    );
  }
  a(r, "getEl");
  function s(p, g) {
    const m = n.params.navigation;
    p &&
      p.length > 0 &&
      (p[g ? "addClass" : "removeClass"](m.disabledClass),
      p[0] && p[0].tagName === "BUTTON" && (p[0].disabled = g),
      n.params.watchOverflow &&
        n.enabled &&
        p[n.isLocked ? "addClass" : "removeClass"](m.lockClass));
  }
  a(s, "toggleEl");
  function o() {
    if (n.params.loop) return;
    const { $nextEl: p, $prevEl: g } = n.navigation;
    s(g, n.isBeginning && !n.params.rewind), s(p, n.isEnd && !n.params.rewind);
  }
  a(o, "update");
  function l(p) {
    p.preventDefault(),
      !(n.isBeginning && !n.params.loop && !n.params.rewind) &&
        (n.slidePrev(), i("navigationPrev"));
  }
  a(l, "onPrevClick");
  function c(p) {
    p.preventDefault(),
      !(n.isEnd && !n.params.loop && !n.params.rewind) &&
        (n.slideNext(), i("navigationNext"));
  }
  a(c, "onNextClick");
  function u() {
    const p = n.params.navigation;
    if (
      ((n.params.navigation = vl(
        n,
        n.originalParams.navigation,
        n.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(p.nextEl || p.prevEl))
    )
      return;
    const g = r(p.nextEl),
      m = r(p.prevEl);
    g && g.length > 0 && g.on("click", c),
      m && m.length > 0 && m.on("click", l),
      Object.assign(n.navigation, {
        $nextEl: g,
        nextEl: g && g[0],
        $prevEl: m,
        prevEl: m && m[0],
      }),
      n.enabled || (g && g.addClass(p.lockClass), m && m.addClass(p.lockClass));
  }
  a(u, "init");
  function f() {
    const { $nextEl: p, $prevEl: g } = n.navigation;
    p &&
      p.length &&
      (p.off("click", c), p.removeClass(n.params.navigation.disabledClass)),
      g &&
        g.length &&
        (g.off("click", l), g.removeClass(n.params.navigation.disabledClass));
  }
  a(f, "destroy"),
    t("init", () => {
      n.params.navigation.enabled === !1 ? h() : (u(), o());
    }),
    t("toEdge fromEdge lock unlock", () => {
      o();
    }),
    t("destroy", () => {
      f();
    }),
    t("enable disable", () => {
      const { $nextEl: p, $prevEl: g } = n.navigation;
      p &&
        p[n.enabled ? "removeClass" : "addClass"](
          n.params.navigation.lockClass
        ),
        g &&
          g[n.enabled ? "removeClass" : "addClass"](
            n.params.navigation.lockClass
          );
    }),
    t("click", (p, g) => {
      const { $nextEl: m, $prevEl: v } = n.navigation,
        b = g.target;
      if (n.params.navigation.hideOnClick && !F(b).is(v) && !F(b).is(m)) {
        if (
          n.pagination &&
          n.params.pagination &&
          n.params.pagination.clickable &&
          (n.pagination.el === b || n.pagination.el.contains(b))
        )
          return;
        let y;
        m
          ? (y = m.hasClass(n.params.navigation.hiddenClass))
          : v && (y = v.hasClass(n.params.navigation.hiddenClass)),
          i(y === !0 ? "navigationShow" : "navigationHide"),
          m && m.toggleClass(n.params.navigation.hiddenClass),
          v && v.toggleClass(n.params.navigation.hiddenClass);
      }
    });
  const d = a(() => {
      n.$el.removeClass(n.params.navigation.navigationDisabledClass), u(), o();
    }, "enable"),
    h = a(() => {
      n.$el.addClass(n.params.navigation.navigationDisabledClass), f();
    }, "disable");
  Object.assign(n.navigation, {
    enable: d,
    disable: h,
    update: o,
    init: u,
    destroy: f,
  });
}
a(ym, "Navigation");
function Pn(n = "") {
  return `.${n
    .trim()
    .replace(/([\.:!\/])/g, "\\$1")
    .replace(/ /g, ".")}`;
}
a(Pn, "classesToSelector");
function bm({ swiper: n, extendParams: e, on: t, emit: i }) {
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
      formatFractionCurrent: a((m) => m, "formatFractionCurrent"),
      formatFractionTotal: a((m) => m, "formatFractionTotal"),
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
    (n.pagination = { el: null, $el: null, bullets: [] });
  let s,
    o = 0;
  function l() {
    return (
      !n.params.pagination.el ||
      !n.pagination.el ||
      !n.pagination.$el ||
      n.pagination.$el.length === 0
    );
  }
  a(l, "isPaginationDisabled");
  function c(m, v) {
    const { bulletActiveClass: b } = n.params.pagination;
    m[v]().addClass(`${b}-${v}`)[v]().addClass(`${b}-${v}-${v}`);
  }
  a(c, "setSideBullets");
  function u() {
    const m = n.rtl,
      v = n.params.pagination;
    if (l()) return;
    const b =
        n.virtual && n.params.virtual.enabled
          ? n.virtual.slides.length
          : n.slides.length,
      y = n.pagination.$el;
    let _;
    const S = n.params.loop
      ? Math.ceil((b - n.loopedSlides * 2) / n.params.slidesPerGroup)
      : n.snapGrid.length;
    if (
      (n.params.loop
        ? ((_ = Math.ceil(
            (n.activeIndex - n.loopedSlides) / n.params.slidesPerGroup
          )),
          _ > b - 1 - n.loopedSlides * 2 && (_ -= b - n.loopedSlides * 2),
          _ > S - 1 && (_ -= S),
          _ < 0 && n.params.paginationType !== "bullets" && (_ = S + _))
        : typeof n.snapIndex < "u"
        ? (_ = n.snapIndex)
        : (_ = n.activeIndex || 0),
      v.type === "bullets" &&
        n.pagination.bullets &&
        n.pagination.bullets.length > 0)
    ) {
      const T = n.pagination.bullets;
      let w, C, P;
      if (
        (v.dynamicBullets &&
          ((s = T.eq(0)[n.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
          y.css(
            n.isHorizontal() ? "width" : "height",
            `${s * (v.dynamicMainBullets + 4)}px`
          ),
          v.dynamicMainBullets > 1 &&
            n.previousIndex !== void 0 &&
            ((o += _ - (n.previousIndex - n.loopedSlides || 0)),
            o > v.dynamicMainBullets - 1
              ? (o = v.dynamicMainBullets - 1)
              : o < 0 && (o = 0)),
          (w = Math.max(_ - o, 0)),
          (C = w + (Math.min(T.length, v.dynamicMainBullets) - 1)),
          (P = (C + w) / 2)),
        T.removeClass(
          ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
            .map((L) => `${v.bulletActiveClass}${L}`)
            .join(" ")
        ),
        y.length > 1)
      )
        T.each((L) => {
          const k = F(L),
            $ = k.index();
          $ === _ && k.addClass(v.bulletActiveClass),
            v.dynamicBullets &&
              ($ >= w && $ <= C && k.addClass(`${v.bulletActiveClass}-main`),
              $ === w && c(k, "prev"),
              $ === C && c(k, "next"));
        });
      else {
        const L = T.eq(_),
          k = L.index();
        if ((L.addClass(v.bulletActiveClass), v.dynamicBullets)) {
          const $ = T.eq(w),
            x = T.eq(C);
          for (let E = w; E <= C; E += 1)
            T.eq(E).addClass(`${v.bulletActiveClass}-main`);
          if (n.params.loop)
            if (k >= T.length) {
              for (let E = v.dynamicMainBullets; E >= 0; E -= 1)
                T.eq(T.length - E).addClass(`${v.bulletActiveClass}-main`);
              T.eq(T.length - v.dynamicMainBullets - 1).addClass(
                `${v.bulletActiveClass}-prev`
              );
            } else c($, "prev"), c(x, "next");
          else c($, "prev"), c(x, "next");
        }
      }
      if (v.dynamicBullets) {
        const L = Math.min(T.length, v.dynamicMainBullets + 4),
          k = (s * L - s) / 2 - P * s,
          $ = m ? "right" : "left";
        T.css(n.isHorizontal() ? $ : "top", `${k}px`);
      }
    }
    if (
      (v.type === "fraction" &&
        (y.find(Pn(v.currentClass)).text(v.formatFractionCurrent(_ + 1)),
        y.find(Pn(v.totalClass)).text(v.formatFractionTotal(S))),
      v.type === "progressbar")
    ) {
      let T;
      v.progressbarOpposite
        ? (T = n.isHorizontal() ? "vertical" : "horizontal")
        : (T = n.isHorizontal() ? "horizontal" : "vertical");
      const w = (_ + 1) / S;
      let C = 1,
        P = 1;
      T === "horizontal" ? (C = w) : (P = w),
        y
          .find(Pn(v.progressbarFillClass))
          .transform(`translate3d(0,0,0) scaleX(${C}) scaleY(${P})`)
          .transition(n.params.speed);
    }
    v.type === "custom" && v.renderCustom
      ? (y.html(v.renderCustom(n, _ + 1, S)), i("paginationRender", y[0]))
      : i("paginationUpdate", y[0]),
      n.params.watchOverflow &&
        n.enabled &&
        y[n.isLocked ? "addClass" : "removeClass"](v.lockClass);
  }
  a(u, "update");
  function f() {
    const m = n.params.pagination;
    if (l()) return;
    const v =
        n.virtual && n.params.virtual.enabled
          ? n.virtual.slides.length
          : n.slides.length,
      b = n.pagination.$el;
    let y = "";
    if (m.type === "bullets") {
      let _ = n.params.loop
        ? Math.ceil((v - n.loopedSlides * 2) / n.params.slidesPerGroup)
        : n.snapGrid.length;
      n.params.freeMode &&
        n.params.freeMode.enabled &&
        !n.params.loop &&
        _ > v &&
        (_ = v);
      for (let S = 0; S < _; S += 1)
        m.renderBullet
          ? (y += m.renderBullet.call(n, S, m.bulletClass))
          : (y += `<${m.bulletElement} class="${m.bulletClass}"></${m.bulletElement}>`);
      b.html(y), (n.pagination.bullets = b.find(Pn(m.bulletClass)));
    }
    m.type === "fraction" &&
      (m.renderFraction
        ? (y = m.renderFraction.call(n, m.currentClass, m.totalClass))
        : (y = `<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`),
      b.html(y)),
      m.type === "progressbar" &&
        (m.renderProgressbar
          ? (y = m.renderProgressbar.call(n, m.progressbarFillClass))
          : (y = `<span class="${m.progressbarFillClass}"></span>`),
        b.html(y)),
      m.type !== "custom" && i("paginationRender", n.pagination.$el[0]);
  }
  a(f, "render");
  function d() {
    n.params.pagination = vl(
      n,
      n.originalParams.pagination,
      n.params.pagination,
      { el: "swiper-pagination" }
    );
    const m = n.params.pagination;
    if (!m.el) return;
    let v = F(m.el);
    v.length !== 0 &&
      (n.params.uniqueNavElements &&
        typeof m.el == "string" &&
        v.length > 1 &&
        ((v = n.$el.find(m.el)),
        v.length > 1 &&
          (v = v.filter((b) => F(b).parents(".swiper")[0] === n.el))),
      m.type === "bullets" && m.clickable && v.addClass(m.clickableClass),
      v.addClass(m.modifierClass + m.type),
      v.addClass(n.isHorizontal() ? m.horizontalClass : m.verticalClass),
      m.type === "bullets" &&
        m.dynamicBullets &&
        (v.addClass(`${m.modifierClass}${m.type}-dynamic`),
        (o = 0),
        m.dynamicMainBullets < 1 && (m.dynamicMainBullets = 1)),
      m.type === "progressbar" &&
        m.progressbarOpposite &&
        v.addClass(m.progressbarOppositeClass),
      m.clickable &&
        v.on(
          "click",
          Pn(m.bulletClass),
          a(function (y) {
            y.preventDefault();
            let _ = F(this).index() * n.params.slidesPerGroup;
            n.params.loop && (_ += n.loopedSlides), n.slideTo(_);
          }, "onClick")
        ),
      Object.assign(n.pagination, { $el: v, el: v[0] }),
      n.enabled || v.addClass(m.lockClass));
  }
  a(d, "init");
  function h() {
    const m = n.params.pagination;
    if (l()) return;
    const v = n.pagination.$el;
    v.removeClass(m.hiddenClass),
      v.removeClass(m.modifierClass + m.type),
      v.removeClass(n.isHorizontal() ? m.horizontalClass : m.verticalClass),
      n.pagination.bullets &&
        n.pagination.bullets.removeClass &&
        n.pagination.bullets.removeClass(m.bulletActiveClass),
      m.clickable && v.off("click", Pn(m.bulletClass));
  }
  a(h, "destroy"),
    t("init", () => {
      n.params.pagination.enabled === !1 ? g() : (d(), f(), u());
    }),
    t("activeIndexChange", () => {
      (n.params.loop || typeof n.snapIndex > "u") && u();
    }),
    t("snapIndexChange", () => {
      n.params.loop || u();
    }),
    t("slidesLengthChange", () => {
      n.params.loop && (f(), u());
    }),
    t("snapGridLengthChange", () => {
      n.params.loop || (f(), u());
    }),
    t("destroy", () => {
      h();
    }),
    t("enable disable", () => {
      const { $el: m } = n.pagination;
      m &&
        m[n.enabled ? "removeClass" : "addClass"](
          n.params.pagination.lockClass
        );
    }),
    t("lock unlock", () => {
      u();
    }),
    t("click", (m, v) => {
      const b = v.target,
        { $el: y } = n.pagination;
      if (
        n.params.pagination.el &&
        n.params.pagination.hideOnClick &&
        y &&
        y.length > 0 &&
        !F(b).hasClass(n.params.pagination.bulletClass)
      ) {
        if (
          n.navigation &&
          ((n.navigation.nextEl && b === n.navigation.nextEl) ||
            (n.navigation.prevEl && b === n.navigation.prevEl))
        )
          return;
        const _ = y.hasClass(n.params.pagination.hiddenClass);
        i(_ === !0 ? "paginationShow" : "paginationHide"),
          y.toggleClass(n.params.pagination.hiddenClass);
      }
    });
  const p = a(() => {
      n.$el.removeClass(n.params.pagination.paginationDisabledClass),
        n.pagination.$el &&
          n.pagination.$el.removeClass(
            n.params.pagination.paginationDisabledClass
          ),
        d(),
        f(),
        u();
    }, "enable"),
    g = a(() => {
      n.$el.addClass(n.params.pagination.paginationDisabledClass),
        n.pagination.$el &&
          n.pagination.$el.addClass(
            n.params.pagination.paginationDisabledClass
          ),
        h();
    }, "disable");
  Object.assign(n.pagination, {
    enable: p,
    disable: g,
    render: f,
    update: u,
    init: d,
    destroy: h,
  });
}
a(bm, "Pagination");
function _m({ swiper: n, extendParams: e, on: t, emit: i }) {
  const r = Ve();
  let s = !1,
    o = null,
    l = null,
    c,
    u,
    f,
    d;
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
    (n.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null });
  function h() {
    if (!n.params.scrollbar.el || !n.scrollbar.el) return;
    const { scrollbar: $, rtlTranslate: x, progress: E } = n,
      { $dragEl: O, $el: I } = $,
      M = n.params.scrollbar;
    let D = u,
      z = (f - u) * E;
    x
      ? ((z = -z), z > 0 ? ((D = u - z), (z = 0)) : -z + u > f && (D = f + z))
      : z < 0
      ? ((D = u + z), (z = 0))
      : z + u > f && (D = f - z),
      n.isHorizontal()
        ? (O.transform(`translate3d(${z}px, 0, 0)`),
          (O[0].style.width = `${D}px`))
        : (O.transform(`translate3d(0px, ${z}px, 0)`),
          (O[0].style.height = `${D}px`)),
      M.hide &&
        (clearTimeout(o),
        (I[0].style.opacity = 1),
        (o = setTimeout(() => {
          (I[0].style.opacity = 0), I.transition(400);
        }, 1e3)));
  }
  a(h, "setTranslate");
  function p($) {
    !n.params.scrollbar.el ||
      !n.scrollbar.el ||
      n.scrollbar.$dragEl.transition($);
  }
  a(p, "setTransition");
  function g() {
    if (!n.params.scrollbar.el || !n.scrollbar.el) return;
    const { scrollbar: $ } = n,
      { $dragEl: x, $el: E } = $;
    (x[0].style.width = ""),
      (x[0].style.height = ""),
      (f = n.isHorizontal() ? E[0].offsetWidth : E[0].offsetHeight),
      (d =
        n.size /
        (n.virtualSize +
          n.params.slidesOffsetBefore -
          (n.params.centeredSlides ? n.snapGrid[0] : 0))),
      n.params.scrollbar.dragSize === "auto"
        ? (u = f * d)
        : (u = parseInt(n.params.scrollbar.dragSize, 10)),
      n.isHorizontal()
        ? (x[0].style.width = `${u}px`)
        : (x[0].style.height = `${u}px`),
      d >= 1 ? (E[0].style.display = "none") : (E[0].style.display = ""),
      n.params.scrollbar.hide && (E[0].style.opacity = 0),
      n.params.watchOverflow &&
        n.enabled &&
        $.$el[n.isLocked ? "addClass" : "removeClass"](
          n.params.scrollbar.lockClass
        );
  }
  a(g, "updateSize");
  function m($) {
    return n.isHorizontal()
      ? $.type === "touchstart" || $.type === "touchmove"
        ? $.targetTouches[0].clientX
        : $.clientX
      : $.type === "touchstart" || $.type === "touchmove"
      ? $.targetTouches[0].clientY
      : $.clientY;
  }
  a(m, "getPointerPosition");
  function v($) {
    const { scrollbar: x, rtlTranslate: E } = n,
      { $el: O } = x;
    let I;
    (I =
      (m($) -
        O.offset()[n.isHorizontal() ? "left" : "top"] -
        (c !== null ? c : u / 2)) /
      (f - u)),
      (I = Math.max(Math.min(I, 1), 0)),
      E && (I = 1 - I);
    const M = n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * I;
    n.updateProgress(M),
      n.setTranslate(M),
      n.updateActiveIndex(),
      n.updateSlidesClasses();
  }
  a(v, "setDragPosition");
  function b($) {
    const x = n.params.scrollbar,
      { scrollbar: E, $wrapperEl: O } = n,
      { $el: I, $dragEl: M } = E;
    (s = !0),
      (c =
        $.target === M[0] || $.target === M
          ? m($) -
            $.target.getBoundingClientRect()[n.isHorizontal() ? "left" : "top"]
          : null),
      $.preventDefault(),
      $.stopPropagation(),
      O.transition(100),
      M.transition(100),
      v($),
      clearTimeout(l),
      I.transition(0),
      x.hide && I.css("opacity", 1),
      n.params.cssMode && n.$wrapperEl.css("scroll-snap-type", "none"),
      i("scrollbarDragStart", $);
  }
  a(b, "onDragStart");
  function y($) {
    const { scrollbar: x, $wrapperEl: E } = n,
      { $el: O, $dragEl: I } = x;
    s &&
      ($.preventDefault ? $.preventDefault() : ($.returnValue = !1),
      v($),
      E.transition(0),
      O.transition(0),
      I.transition(0),
      i("scrollbarDragMove", $));
  }
  a(y, "onDragMove");
  function _($) {
    const x = n.params.scrollbar,
      { scrollbar: E, $wrapperEl: O } = n,
      { $el: I } = E;
    s &&
      ((s = !1),
      n.params.cssMode &&
        (n.$wrapperEl.css("scroll-snap-type", ""), O.transition("")),
      x.hide &&
        (clearTimeout(l),
        (l = ni(() => {
          I.css("opacity", 0), I.transition(400);
        }, 1e3))),
      i("scrollbarDragEnd", $),
      x.snapOnRelease && n.slideToClosest());
  }
  a(_, "onDragEnd");
  function S($) {
    const {
        scrollbar: x,
        touchEventsTouch: E,
        touchEventsDesktop: O,
        params: I,
        support: M,
      } = n,
      D = x.$el;
    if (!D) return;
    const z = D[0],
      B =
        M.passiveListener && I.passiveListeners
          ? { passive: !1, capture: !1 }
          : !1,
      A =
        M.passiveListener && I.passiveListeners
          ? { passive: !0, capture: !1 }
          : !1;
    if (!z) return;
    const V = $ === "on" ? "addEventListener" : "removeEventListener";
    M.touch
      ? (z[V](E.start, b, B), z[V](E.move, y, B), z[V](E.end, _, A))
      : (z[V](O.start, b, B), r[V](O.move, y, B), r[V](O.end, _, A));
  }
  a(S, "events");
  function T() {
    !n.params.scrollbar.el || !n.scrollbar.el || S("on");
  }
  a(T, "enableDraggable");
  function w() {
    !n.params.scrollbar.el || !n.scrollbar.el || S("off");
  }
  a(w, "disableDraggable");
  function C() {
    const { scrollbar: $, $el: x } = n;
    n.params.scrollbar = vl(n, n.originalParams.scrollbar, n.params.scrollbar, {
      el: "swiper-scrollbar",
    });
    const E = n.params.scrollbar;
    if (!E.el) return;
    let O = F(E.el);
    n.params.uniqueNavElements &&
      typeof E.el == "string" &&
      O.length > 1 &&
      x.find(E.el).length === 1 &&
      (O = x.find(E.el)),
      O.addClass(n.isHorizontal() ? E.horizontalClass : E.verticalClass);
    let I = O.find(`.${n.params.scrollbar.dragClass}`);
    I.length === 0 &&
      ((I = F(`<div class="${n.params.scrollbar.dragClass}"></div>`)),
      O.append(I)),
      Object.assign($, { $el: O, el: O[0], $dragEl: I, dragEl: I[0] }),
      E.draggable && T(),
      O &&
        O[n.enabled ? "removeClass" : "addClass"](n.params.scrollbar.lockClass);
  }
  a(C, "init");
  function P() {
    const $ = n.params.scrollbar,
      x = n.scrollbar.$el;
    x && x.removeClass(n.isHorizontal() ? $.horizontalClass : $.verticalClass),
      w();
  }
  a(P, "destroy"),
    t("init", () => {
      n.params.scrollbar.enabled === !1 ? k() : (C(), g(), h());
    }),
    t("update resize observerUpdate lock unlock", () => {
      g();
    }),
    t("setTranslate", () => {
      h();
    }),
    t("setTransition", ($, x) => {
      p(x);
    }),
    t("enable disable", () => {
      const { $el: $ } = n.scrollbar;
      $ &&
        $[n.enabled ? "removeClass" : "addClass"](n.params.scrollbar.lockClass);
    }),
    t("destroy", () => {
      P();
    });
  const L = a(() => {
      n.$el.removeClass(n.params.scrollbar.scrollbarDisabledClass),
        n.scrollbar.$el &&
          n.scrollbar.$el.removeClass(
            n.params.scrollbar.scrollbarDisabledClass
          ),
        C(),
        g(),
        h();
    }, "enable"),
    k = a(() => {
      n.$el.addClass(n.params.scrollbar.scrollbarDisabledClass),
        n.scrollbar.$el &&
          n.scrollbar.$el.addClass(n.params.scrollbar.scrollbarDisabledClass),
        P();
    }, "disable");
  Object.assign(n.scrollbar, {
    enable: L,
    disable: k,
    updateSize: g,
    setTranslate: h,
    init: C,
    destroy: P,
  });
}
a(_m, "Scrollbar");
function xm({ swiper: n, extendParams: e, on: t }) {
  e({ parallax: { enabled: !1 } });
  const i = a((o, l) => {
      const { rtl: c } = n,
        u = F(o),
        f = c ? -1 : 1,
        d = u.attr("data-swiper-parallax") || "0";
      let h = u.attr("data-swiper-parallax-x"),
        p = u.attr("data-swiper-parallax-y");
      const g = u.attr("data-swiper-parallax-scale"),
        m = u.attr("data-swiper-parallax-opacity");
      if (
        (h || p
          ? ((h = h || "0"), (p = p || "0"))
          : n.isHorizontal()
          ? ((h = d), (p = "0"))
          : ((p = d), (h = "0")),
        h.indexOf("%") >= 0
          ? (h = `${parseInt(h, 10) * l * f}%`)
          : (h = `${h * l * f}px`),
        p.indexOf("%") >= 0
          ? (p = `${parseInt(p, 10) * l}%`)
          : (p = `${p * l}px`),
        typeof m < "u" && m !== null)
      ) {
        const v = m - (m - 1) * (1 - Math.abs(l));
        u[0].style.opacity = v;
      }
      if (typeof g > "u" || g === null)
        u.transform(`translate3d(${h}, ${p}, 0px)`);
      else {
        const v = g - (g - 1) * (1 - Math.abs(l));
        u.transform(`translate3d(${h}, ${p}, 0px) scale(${v})`);
      }
    }, "setTransform"),
    r = a(() => {
      const { $el: o, slides: l, progress: c, snapGrid: u } = n;
      o
        .children(
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
        )
        .each((f) => {
          i(f, c);
        }),
        l.each((f, d) => {
          let h = f.progress;
          n.params.slidesPerGroup > 1 &&
            n.params.slidesPerView !== "auto" &&
            (h += Math.ceil(d / 2) - c * (u.length - 1)),
            (h = Math.min(Math.max(h, -1), 1)),
            F(f)
              .find(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              )
              .each((p) => {
                i(p, h);
              });
        });
    }, "setTranslate"),
    s = a((o = n.params.speed) => {
      const { $el: l } = n;
      l.find(
        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
      ).each((c) => {
        const u = F(c);
        let f = parseInt(u.attr("data-swiper-parallax-duration"), 10) || o;
        o === 0 && (f = 0), u.transition(f);
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
a(xm, "Parallax");
function Sm({ swiper: n, extendParams: e, on: t, emit: i }) {
  const r = ye();
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
    (n.zoom = { enabled: !1 });
  let s = 1,
    o = !1,
    l,
    c,
    u;
  const f = {
      $slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      $imageEl: void 0,
      $imageWrapEl: void 0,
      maxRatio: 3,
    },
    d = {
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
    h = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0,
    };
  let p = 1;
  Object.defineProperty(n.zoom, "scale", {
    get() {
      return p;
    },
    set(M) {
      if (p !== M) {
        const D = f.$imageEl ? f.$imageEl[0] : void 0,
          z = f.$slideEl ? f.$slideEl[0] : void 0;
        i("zoomChange", M, D, z);
      }
      p = M;
    },
  });
  function g(M) {
    if (M.targetTouches.length < 2) return 1;
    const D = M.targetTouches[0].pageX,
      z = M.targetTouches[0].pageY,
      B = M.targetTouches[1].pageX,
      A = M.targetTouches[1].pageY;
    return Math.sqrt((B - D) ** 2 + (A - z) ** 2);
  }
  a(g, "getDistanceBetweenTouches");
  function m(M) {
    const D = n.support,
      z = n.params.zoom;
    if (((c = !1), (u = !1), !D.gestures)) {
      if (
        M.type !== "touchstart" ||
        (M.type === "touchstart" && M.targetTouches.length < 2)
      )
        return;
      (c = !0), (f.scaleStart = g(M));
    }
    if (
      (!f.$slideEl || !f.$slideEl.length) &&
      ((f.$slideEl = F(M.target).closest(`.${n.params.slideClass}`)),
      f.$slideEl.length === 0 && (f.$slideEl = n.slides.eq(n.activeIndex)),
      (f.$imageEl = f.$slideEl
        .find(`.${z.containerClass}`)
        .eq(0)
        .find("picture, img, svg, canvas, .swiper-zoom-target")
        .eq(0)),
      (f.$imageWrapEl = f.$imageEl.parent(`.${z.containerClass}`)),
      (f.maxRatio = f.$imageWrapEl.attr("data-swiper-zoom") || z.maxRatio),
      f.$imageWrapEl.length === 0)
    ) {
      f.$imageEl = void 0;
      return;
    }
    f.$imageEl && f.$imageEl.transition(0), (o = !0);
  }
  a(m, "onGestureStart");
  function v(M) {
    const D = n.support,
      z = n.params.zoom,
      B = n.zoom;
    if (!D.gestures) {
      if (
        M.type !== "touchmove" ||
        (M.type === "touchmove" && M.targetTouches.length < 2)
      )
        return;
      (u = !0), (f.scaleMove = g(M));
    }
    if (!f.$imageEl || f.$imageEl.length === 0) {
      M.type === "gesturechange" && m(M);
      return;
    }
    D.gestures
      ? (B.scale = M.scale * s)
      : (B.scale = (f.scaleMove / f.scaleStart) * s),
      B.scale > f.maxRatio &&
        (B.scale = f.maxRatio - 1 + (B.scale - f.maxRatio + 1) ** 0.5),
      B.scale < z.minRatio &&
        (B.scale = z.minRatio + 1 - (z.minRatio - B.scale + 1) ** 0.5),
      f.$imageEl.transform(`translate3d(0,0,0) scale(${B.scale})`);
  }
  a(v, "onGestureChange");
  function b(M) {
    const D = n.device,
      z = n.support,
      B = n.params.zoom,
      A = n.zoom;
    if (!z.gestures) {
      if (
        !c ||
        !u ||
        M.type !== "touchend" ||
        (M.type === "touchend" && M.changedTouches.length < 2 && !D.android)
      )
        return;
      (c = !1), (u = !1);
    }
    !f.$imageEl ||
      f.$imageEl.length === 0 ||
      ((A.scale = Math.max(Math.min(A.scale, f.maxRatio), B.minRatio)),
      f.$imageEl
        .transition(n.params.speed)
        .transform(`translate3d(0,0,0) scale(${A.scale})`),
      (s = A.scale),
      (o = !1),
      A.scale === 1 && (f.$slideEl = void 0));
  }
  a(b, "onGestureEnd");
  function y(M) {
    const D = n.device;
    !f.$imageEl ||
      f.$imageEl.length === 0 ||
      d.isTouched ||
      (D.android && M.cancelable && M.preventDefault(),
      (d.isTouched = !0),
      (d.touchesStart.x =
        M.type === "touchstart" ? M.targetTouches[0].pageX : M.pageX),
      (d.touchesStart.y =
        M.type === "touchstart" ? M.targetTouches[0].pageY : M.pageY));
  }
  a(y, "onTouchStart");
  function _(M) {
    const D = n.zoom;
    if (
      !f.$imageEl ||
      f.$imageEl.length === 0 ||
      ((n.allowClick = !1), !d.isTouched || !f.$slideEl)
    )
      return;
    d.isMoved ||
      ((d.width = f.$imageEl[0].offsetWidth),
      (d.height = f.$imageEl[0].offsetHeight),
      (d.startX = Ma(f.$imageWrapEl[0], "x") || 0),
      (d.startY = Ma(f.$imageWrapEl[0], "y") || 0),
      (f.slideWidth = f.$slideEl[0].offsetWidth),
      (f.slideHeight = f.$slideEl[0].offsetHeight),
      f.$imageWrapEl.transition(0));
    const z = d.width * D.scale,
      B = d.height * D.scale;
    if (!(z < f.slideWidth && B < f.slideHeight)) {
      if (
        ((d.minX = Math.min(f.slideWidth / 2 - z / 2, 0)),
        (d.maxX = -d.minX),
        (d.minY = Math.min(f.slideHeight / 2 - B / 2, 0)),
        (d.maxY = -d.minY),
        (d.touchesCurrent.x =
          M.type === "touchmove" ? M.targetTouches[0].pageX : M.pageX),
        (d.touchesCurrent.y =
          M.type === "touchmove" ? M.targetTouches[0].pageY : M.pageY),
        !d.isMoved && !o)
      ) {
        if (
          n.isHorizontal() &&
          ((Math.floor(d.minX) === Math.floor(d.startX) &&
            d.touchesCurrent.x < d.touchesStart.x) ||
            (Math.floor(d.maxX) === Math.floor(d.startX) &&
              d.touchesCurrent.x > d.touchesStart.x))
        ) {
          d.isTouched = !1;
          return;
        }
        if (
          !n.isHorizontal() &&
          ((Math.floor(d.minY) === Math.floor(d.startY) &&
            d.touchesCurrent.y < d.touchesStart.y) ||
            (Math.floor(d.maxY) === Math.floor(d.startY) &&
              d.touchesCurrent.y > d.touchesStart.y))
        ) {
          d.isTouched = !1;
          return;
        }
      }
      M.cancelable && M.preventDefault(),
        M.stopPropagation(),
        (d.isMoved = !0),
        (d.currentX = d.touchesCurrent.x - d.touchesStart.x + d.startX),
        (d.currentY = d.touchesCurrent.y - d.touchesStart.y + d.startY),
        d.currentX < d.minX &&
          (d.currentX = d.minX + 1 - (d.minX - d.currentX + 1) ** 0.8),
        d.currentX > d.maxX &&
          (d.currentX = d.maxX - 1 + (d.currentX - d.maxX + 1) ** 0.8),
        d.currentY < d.minY &&
          (d.currentY = d.minY + 1 - (d.minY - d.currentY + 1) ** 0.8),
        d.currentY > d.maxY &&
          (d.currentY = d.maxY - 1 + (d.currentY - d.maxY + 1) ** 0.8),
        h.prevPositionX || (h.prevPositionX = d.touchesCurrent.x),
        h.prevPositionY || (h.prevPositionY = d.touchesCurrent.y),
        h.prevTime || (h.prevTime = Date.now()),
        (h.x =
          (d.touchesCurrent.x - h.prevPositionX) /
          (Date.now() - h.prevTime) /
          2),
        (h.y =
          (d.touchesCurrent.y - h.prevPositionY) /
          (Date.now() - h.prevTime) /
          2),
        Math.abs(d.touchesCurrent.x - h.prevPositionX) < 2 && (h.x = 0),
        Math.abs(d.touchesCurrent.y - h.prevPositionY) < 2 && (h.y = 0),
        (h.prevPositionX = d.touchesCurrent.x),
        (h.prevPositionY = d.touchesCurrent.y),
        (h.prevTime = Date.now()),
        f.$imageWrapEl.transform(
          `translate3d(${d.currentX}px, ${d.currentY}px,0)`
        );
    }
  }
  a(_, "onTouchMove");
  function S() {
    const M = n.zoom;
    if (!f.$imageEl || f.$imageEl.length === 0) return;
    if (!d.isTouched || !d.isMoved) {
      (d.isTouched = !1), (d.isMoved = !1);
      return;
    }
    (d.isTouched = !1), (d.isMoved = !1);
    let D = 300,
      z = 300;
    const B = h.x * D,
      A = d.currentX + B,
      V = h.y * z,
      G = d.currentY + V;
    h.x !== 0 && (D = Math.abs((A - d.currentX) / h.x)),
      h.y !== 0 && (z = Math.abs((G - d.currentY) / h.y));
    const le = Math.max(D, z);
    (d.currentX = A), (d.currentY = G);
    const ie = d.width * M.scale,
      Z = d.height * M.scale;
    (d.minX = Math.min(f.slideWidth / 2 - ie / 2, 0)),
      (d.maxX = -d.minX),
      (d.minY = Math.min(f.slideHeight / 2 - Z / 2, 0)),
      (d.maxY = -d.minY),
      (d.currentX = Math.max(Math.min(d.currentX, d.maxX), d.minX)),
      (d.currentY = Math.max(Math.min(d.currentY, d.maxY), d.minY)),
      f.$imageWrapEl
        .transition(le)
        .transform(`translate3d(${d.currentX}px, ${d.currentY}px,0)`);
  }
  a(S, "onTouchEnd");
  function T() {
    const M = n.zoom;
    f.$slideEl &&
      n.previousIndex !== n.activeIndex &&
      (f.$imageEl && f.$imageEl.transform("translate3d(0,0,0) scale(1)"),
      f.$imageWrapEl && f.$imageWrapEl.transform("translate3d(0,0,0)"),
      (M.scale = 1),
      (s = 1),
      (f.$slideEl = void 0),
      (f.$imageEl = void 0),
      (f.$imageWrapEl = void 0));
  }
  a(T, "onTransitionEnd");
  function w(M) {
    const D = n.zoom,
      z = n.params.zoom;
    if (
      (f.$slideEl ||
        (M &&
          M.target &&
          (f.$slideEl = F(M.target).closest(`.${n.params.slideClass}`)),
        f.$slideEl ||
          (n.params.virtual && n.params.virtual.enabled && n.virtual
            ? (f.$slideEl = n.$wrapperEl.children(
                `.${n.params.slideActiveClass}`
              ))
            : (f.$slideEl = n.slides.eq(n.activeIndex))),
        (f.$imageEl = f.$slideEl
          .find(`.${z.containerClass}`)
          .eq(0)
          .find("picture, img, svg, canvas, .swiper-zoom-target")
          .eq(0)),
        (f.$imageWrapEl = f.$imageEl.parent(`.${z.containerClass}`))),
      !f.$imageEl ||
        f.$imageEl.length === 0 ||
        !f.$imageWrapEl ||
        f.$imageWrapEl.length === 0)
    )
      return;
    n.params.cssMode &&
      ((n.wrapperEl.style.overflow = "hidden"),
      (n.wrapperEl.style.touchAction = "none")),
      f.$slideEl.addClass(`${z.zoomedSlideClass}`);
    let B, A, V, G, le, ie, Z, Q, de, me, Ee, $e, he, we, X, ne, Oe, Le;
    typeof d.touchesStart.x > "u" && M
      ? ((B = M.type === "touchend" ? M.changedTouches[0].pageX : M.pageX),
        (A = M.type === "touchend" ? M.changedTouches[0].pageY : M.pageY))
      : ((B = d.touchesStart.x), (A = d.touchesStart.y)),
      (D.scale = f.$imageWrapEl.attr("data-swiper-zoom") || z.maxRatio),
      (s = f.$imageWrapEl.attr("data-swiper-zoom") || z.maxRatio),
      M
        ? ((Oe = f.$slideEl[0].offsetWidth),
          (Le = f.$slideEl[0].offsetHeight),
          (V = f.$slideEl.offset().left + r.scrollX),
          (G = f.$slideEl.offset().top + r.scrollY),
          (le = V + Oe / 2 - B),
          (ie = G + Le / 2 - A),
          (de = f.$imageEl[0].offsetWidth),
          (me = f.$imageEl[0].offsetHeight),
          (Ee = de * D.scale),
          ($e = me * D.scale),
          (he = Math.min(Oe / 2 - Ee / 2, 0)),
          (we = Math.min(Le / 2 - $e / 2, 0)),
          (X = -he),
          (ne = -we),
          (Z = le * D.scale),
          (Q = ie * D.scale),
          Z < he && (Z = he),
          Z > X && (Z = X),
          Q < we && (Q = we),
          Q > ne && (Q = ne))
        : ((Z = 0), (Q = 0)),
      f.$imageWrapEl.transition(300).transform(`translate3d(${Z}px, ${Q}px,0)`),
      f.$imageEl
        .transition(300)
        .transform(`translate3d(0,0,0) scale(${D.scale})`);
  }
  a(w, "zoomIn");
  function C() {
    const M = n.zoom,
      D = n.params.zoom;
    f.$slideEl ||
      (n.params.virtual && n.params.virtual.enabled && n.virtual
        ? (f.$slideEl = n.$wrapperEl.children(`.${n.params.slideActiveClass}`))
        : (f.$slideEl = n.slides.eq(n.activeIndex)),
      (f.$imageEl = f.$slideEl
        .find(`.${D.containerClass}`)
        .eq(0)
        .find("picture, img, svg, canvas, .swiper-zoom-target")
        .eq(0)),
      (f.$imageWrapEl = f.$imageEl.parent(`.${D.containerClass}`))),
      !(
        !f.$imageEl ||
        f.$imageEl.length === 0 ||
        !f.$imageWrapEl ||
        f.$imageWrapEl.length === 0
      ) &&
        (n.params.cssMode &&
          ((n.wrapperEl.style.overflow = ""),
          (n.wrapperEl.style.touchAction = "")),
        (M.scale = 1),
        (s = 1),
        f.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
        f.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
        f.$slideEl.removeClass(`${D.zoomedSlideClass}`),
        (f.$slideEl = void 0));
  }
  a(C, "zoomOut");
  function P(M) {
    const D = n.zoom;
    D.scale && D.scale !== 1 ? C() : w(M);
  }
  a(P, "zoomToggle");
  function L() {
    const M = n.support,
      D =
        n.touchEvents.start === "touchstart" &&
        M.passiveListener &&
        n.params.passiveListeners
          ? { passive: !0, capture: !1 }
          : !1,
      z = M.passiveListener ? { passive: !1, capture: !0 } : !0;
    return { passiveListener: D, activeListenerWithCapture: z };
  }
  a(L, "getListeners");
  function k() {
    return `.${n.params.slideClass}`;
  }
  a(k, "getSlideSelector");
  function $(M) {
    const { passiveListener: D } = L(),
      z = k();
    n.$wrapperEl[M]("gesturestart", z, m, D),
      n.$wrapperEl[M]("gesturechange", z, v, D),
      n.$wrapperEl[M]("gestureend", z, b, D);
  }
  a($, "toggleGestures");
  function x() {
    l || ((l = !0), $("on"));
  }
  a(x, "enableGestures");
  function E() {
    l && ((l = !1), $("off"));
  }
  a(E, "disableGestures");
  function O() {
    const M = n.zoom;
    if (M.enabled) return;
    M.enabled = !0;
    const D = n.support,
      { passiveListener: z, activeListenerWithCapture: B } = L(),
      A = k();
    D.gestures
      ? (n.$wrapperEl.on(n.touchEvents.start, x, z),
        n.$wrapperEl.on(n.touchEvents.end, E, z))
      : n.touchEvents.start === "touchstart" &&
        (n.$wrapperEl.on(n.touchEvents.start, A, m, z),
        n.$wrapperEl.on(n.touchEvents.move, A, v, B),
        n.$wrapperEl.on(n.touchEvents.end, A, b, z),
        n.touchEvents.cancel && n.$wrapperEl.on(n.touchEvents.cancel, A, b, z)),
      n.$wrapperEl.on(
        n.touchEvents.move,
        `.${n.params.zoom.containerClass}`,
        _,
        B
      );
  }
  a(O, "enable");
  function I() {
    const M = n.zoom;
    if (!M.enabled) return;
    const D = n.support;
    M.enabled = !1;
    const { passiveListener: z, activeListenerWithCapture: B } = L(),
      A = k();
    D.gestures
      ? (n.$wrapperEl.off(n.touchEvents.start, x, z),
        n.$wrapperEl.off(n.touchEvents.end, E, z))
      : n.touchEvents.start === "touchstart" &&
        (n.$wrapperEl.off(n.touchEvents.start, A, m, z),
        n.$wrapperEl.off(n.touchEvents.move, A, v, B),
        n.$wrapperEl.off(n.touchEvents.end, A, b, z),
        n.touchEvents.cancel &&
          n.$wrapperEl.off(n.touchEvents.cancel, A, b, z)),
      n.$wrapperEl.off(
        n.touchEvents.move,
        `.${n.params.zoom.containerClass}`,
        _,
        B
      );
  }
  a(I, "disable"),
    t("init", () => {
      n.params.zoom.enabled && O();
    }),
    t("destroy", () => {
      I();
    }),
    t("touchStart", (M, D) => {
      n.zoom.enabled && y(D);
    }),
    t("touchEnd", (M, D) => {
      n.zoom.enabled && S();
    }),
    t("doubleTap", (M, D) => {
      !n.animating &&
        n.params.zoom.enabled &&
        n.zoom.enabled &&
        n.params.zoom.toggle &&
        P(D);
    }),
    t("transitionEnd", () => {
      n.zoom.enabled && n.params.zoom.enabled && T();
    }),
    t("slideChange", () => {
      n.zoom.enabled && n.params.zoom.enabled && n.params.cssMode && T();
    }),
    Object.assign(n.zoom, { enable: O, disable: I, in: w, out: C, toggle: P });
}
a(Sm, "Zoom");
function Tm({ swiper: n, extendParams: e, on: t, emit: i }) {
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
    (n.lazy = {});
  let r = !1,
    s = !1;
  function o(u, f = !0) {
    const d = n.params.lazy;
    if (typeof u > "u" || n.slides.length === 0) return;
    const p =
        n.virtual && n.params.virtual.enabled
          ? n.$wrapperEl.children(
              `.${n.params.slideClass}[data-swiper-slide-index="${u}"]`
            )
          : n.slides.eq(u),
      g = p.find(
        `.${d.elementClass}:not(.${d.loadedClass}):not(.${d.loadingClass})`
      );
    p.hasClass(d.elementClass) &&
      !p.hasClass(d.loadedClass) &&
      !p.hasClass(d.loadingClass) &&
      g.push(p[0]),
      g.length !== 0 &&
        g.each((m) => {
          const v = F(m);
          v.addClass(d.loadingClass);
          const b = v.attr("data-background"),
            y = v.attr("data-src"),
            _ = v.attr("data-srcset"),
            S = v.attr("data-sizes"),
            T = v.parent("picture");
          n.loadImage(v[0], y || b, _, S, !1, () => {
            if (
              !(
                typeof n > "u" ||
                n === null ||
                !n ||
                (n && !n.params) ||
                n.destroyed
              )
            ) {
              if (
                (b
                  ? (v.css("background-image", `url("${b}")`),
                    v.removeAttr("data-background"))
                  : (_ && (v.attr("srcset", _), v.removeAttr("data-srcset")),
                    S && (v.attr("sizes", S), v.removeAttr("data-sizes")),
                    T.length &&
                      T.children("source").each((w) => {
                        const C = F(w);
                        C.attr("data-srcset") &&
                          (C.attr("srcset", C.attr("data-srcset")),
                          C.removeAttr("data-srcset"));
                      }),
                    y && (v.attr("src", y), v.removeAttr("data-src"))),
                v.addClass(d.loadedClass).removeClass(d.loadingClass),
                p.find(`.${d.preloaderClass}`).remove(),
                n.params.loop && f)
              ) {
                const w = p.attr("data-swiper-slide-index");
                if (p.hasClass(n.params.slideDuplicateClass)) {
                  const C = n.$wrapperEl.children(
                    `[data-swiper-slide-index="${w}"]:not(.${n.params.slideDuplicateClass})`
                  );
                  o(C.index(), !1);
                } else {
                  const C = n.$wrapperEl.children(
                    `.${n.params.slideDuplicateClass}[data-swiper-slide-index="${w}"]`
                  );
                  o(C.index(), !1);
                }
              }
              i("lazyImageReady", p[0], v[0]),
                n.params.autoHeight && n.updateAutoHeight();
            }
          }),
            i("lazyImageLoad", p[0], v[0]);
        });
  }
  a(o, "loadInSlide");
  function l() {
    const { $wrapperEl: u, params: f, slides: d, activeIndex: h } = n,
      p = n.virtual && f.virtual.enabled,
      g = f.lazy;
    let m = f.slidesPerView;
    m === "auto" && (m = 0);
    function v(y) {
      if (p) {
        if (
          u.children(`.${f.slideClass}[data-swiper-slide-index="${y}"]`).length
        )
          return !0;
      } else if (d[y]) return !0;
      return !1;
    }
    a(v, "slideExist");
    function b(y) {
      return p ? F(y).attr("data-swiper-slide-index") : F(y).index();
    }
    if ((a(b, "slideIndex"), s || (s = !0), n.params.watchSlidesProgress))
      u.children(`.${f.slideVisibleClass}`).each((y) => {
        const _ = p ? F(y).attr("data-swiper-slide-index") : F(y).index();
        o(_);
      });
    else if (m > 1) for (let y = h; y < h + m; y += 1) v(y) && o(y);
    else o(h);
    if (g.loadPrevNext)
      if (m > 1 || (g.loadPrevNextAmount && g.loadPrevNextAmount > 1)) {
        const y = g.loadPrevNextAmount,
          _ = Math.ceil(m),
          S = Math.min(h + _ + Math.max(y, _), d.length),
          T = Math.max(h - Math.max(_, y), 0);
        for (let w = h + _; w < S; w += 1) v(w) && o(w);
        for (let w = T; w < h; w += 1) v(w) && o(w);
      } else {
        const y = u.children(`.${f.slideNextClass}`);
        y.length > 0 && o(b(y));
        const _ = u.children(`.${f.slidePrevClass}`);
        _.length > 0 && o(b(_));
      }
  }
  a(l, "load");
  function c() {
    const u = ye();
    if (!n || n.destroyed) return;
    const f = n.params.lazy.scrollingElement
        ? F(n.params.lazy.scrollingElement)
        : F(u),
      d = f[0] === u,
      h = d ? u.innerWidth : f[0].offsetWidth,
      p = d ? u.innerHeight : f[0].offsetHeight,
      g = n.$el.offset(),
      { rtlTranslate: m } = n;
    let v = !1;
    m && (g.left -= n.$el[0].scrollLeft);
    const b = [
      [g.left, g.top],
      [g.left + n.width, g.top],
      [g.left, g.top + n.height],
      [g.left + n.width, g.top + n.height],
    ];
    for (let _ = 0; _ < b.length; _ += 1) {
      const S = b[_];
      if (S[0] >= 0 && S[0] <= h && S[1] >= 0 && S[1] <= p) {
        if (S[0] === 0 && S[1] === 0) continue;
        v = !0;
      }
    }
    const y =
      n.touchEvents.start === "touchstart" &&
      n.support.passiveListener &&
      n.params.passiveListeners
        ? { passive: !0, capture: !1 }
        : !1;
    v ? (l(), f.off("scroll", c, y)) : r || ((r = !0), f.on("scroll", c, y));
  }
  a(c, "checkInViewOnLoad"),
    t("beforeInit", () => {
      n.params.lazy.enabled &&
        n.params.preloadImages &&
        (n.params.preloadImages = !1);
    }),
    t("init", () => {
      n.params.lazy.enabled && (n.params.lazy.checkInView ? c() : l());
    }),
    t("scroll", () => {
      n.params.freeMode &&
        n.params.freeMode.enabled &&
        !n.params.freeMode.sticky &&
        l();
    }),
    t("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
      n.params.lazy.enabled && (n.params.lazy.checkInView ? c() : l());
    }),
    t("transitionStart", () => {
      n.params.lazy.enabled &&
        (n.params.lazy.loadOnTransitionStart ||
          (!n.params.lazy.loadOnTransitionStart && !s)) &&
        (n.params.lazy.checkInView ? c() : l());
    }),
    t("transitionEnd", () => {
      n.params.lazy.enabled &&
        !n.params.lazy.loadOnTransitionStart &&
        (n.params.lazy.checkInView ? c() : l());
    }),
    t("slideChange", () => {
      const {
        lazy: u,
        cssMode: f,
        watchSlidesProgress: d,
        touchReleaseOnEdges: h,
        resistanceRatio: p,
      } = n.params;
      u.enabled && (f || (d && (h || p === 0))) && l();
    }),
    t("destroy", () => {
      n.$el &&
        n.$el
          .find(`.${n.params.lazy.loadingClass}`)
          .removeClass(n.params.lazy.loadingClass);
    }),
    Object.assign(n.lazy, { load: l, loadInSlide: o });
}
a(Tm, "Lazy");
function Em({ swiper: n, extendParams: e, on: t }) {
  e({ controller: { control: void 0, inverse: !1, by: "slide" } }),
    (n.controller = { control: void 0 });
  function i(c, u) {
    const f = a(function () {
      let g, m, v;
      return (b, y) => {
        for (m = -1, g = b.length; g - m > 1; )
          (v = (g + m) >> 1), b[v] <= y ? (m = v) : (g = v);
        return g;
      };
    }, "search")();
    (this.x = c), (this.y = u), (this.lastIndex = c.length - 1);
    let d, h;
    return (
      (this.interpolate = a(function (g) {
        return g
          ? ((h = f(this.x, g)),
            (d = h - 1),
            ((g - this.x[d]) * (this.y[h] - this.y[d])) /
              (this.x[h] - this.x[d]) +
              this.y[d])
          : 0;
      }, "interpolate")),
      this
    );
  }
  a(i, "LinearSpline");
  function r(c) {
    n.controller.spline ||
      (n.controller.spline = n.params.loop
        ? new i(n.slidesGrid, c.slidesGrid)
        : new i(n.snapGrid, c.snapGrid));
  }
  a(r, "getInterpolateFunction");
  function s(c, u) {
    const f = n.controller.control;
    let d, h;
    const p = n.constructor;
    function g(m) {
      const v = n.rtlTranslate ? -n.translate : n.translate;
      n.params.controller.by === "slide" &&
        (r(m), (h = -n.controller.spline.interpolate(-v))),
        (!h || n.params.controller.by === "container") &&
          ((d =
            (m.maxTranslate() - m.minTranslate()) /
            (n.maxTranslate() - n.minTranslate())),
          (h = (v - n.minTranslate()) * d + m.minTranslate())),
        n.params.controller.inverse && (h = m.maxTranslate() - h),
        m.updateProgress(h),
        m.setTranslate(h, n),
        m.updateActiveIndex(),
        m.updateSlidesClasses();
    }
    if ((a(g, "setControlledTranslate"), Array.isArray(f)))
      for (let m = 0; m < f.length; m += 1)
        f[m] !== u && f[m] instanceof p && g(f[m]);
    else f instanceof p && u !== f && g(f);
  }
  a(s, "setTranslate");
  function o(c, u) {
    const f = n.constructor,
      d = n.controller.control;
    let h;
    function p(g) {
      g.setTransition(c, n),
        c !== 0 &&
          (g.transitionStart(),
          g.params.autoHeight &&
            ni(() => {
              g.updateAutoHeight();
            }),
          g.$wrapperEl.transitionEnd(() => {
            d &&
              (g.params.loop &&
                n.params.controller.by === "slide" &&
                g.loopFix(),
              g.transitionEnd());
          }));
    }
    if ((a(p, "setControlledTransition"), Array.isArray(d)))
      for (h = 0; h < d.length; h += 1)
        d[h] !== u && d[h] instanceof f && p(d[h]);
    else d instanceof f && u !== d && p(d);
  }
  a(o, "setTransition");
  function l() {
    n.controller.control &&
      n.controller.spline &&
      ((n.controller.spline = void 0), delete n.controller.spline);
  }
  a(l, "removeSpline"),
    t("beforeInit", () => {
      n.controller.control = n.params.controller.control;
    }),
    t("update", () => {
      l();
    }),
    t("resize", () => {
      l();
    }),
    t("observerUpdate", () => {
      l();
    }),
    t("setTranslate", (c, u, f) => {
      n.controller.control && n.controller.setTranslate(u, f);
    }),
    t("setTransition", (c, u, f) => {
      n.controller.control && n.controller.setTransition(u, f);
    }),
    Object.assign(n.controller, { setTranslate: s, setTransition: o });
}
a(Em, "Controller");
function wm({ swiper: n, extendParams: e, on: t }) {
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
    (n.a11y = { clicked: !1 });
  let i = null;
  function r(x) {
    const E = i;
    E.length !== 0 && (E.html(""), E.html(x));
  }
  a(r, "notify");
  function s(x = 16) {
    const E = a(
      () => Math.round(16 * Math.random()).toString(16),
      "randomChar"
    );
    return "x".repeat(x).replace(/x/g, E);
  }
  a(s, "getRandomNumber");
  function o(x) {
    x.attr("tabIndex", "0");
  }
  a(o, "makeElFocusable");
  function l(x) {
    x.attr("tabIndex", "-1");
  }
  a(l, "makeElNotFocusable");
  function c(x, E) {
    x.attr("role", E);
  }
  a(c, "addElRole");
  function u(x, E) {
    x.attr("aria-roledescription", E);
  }
  a(u, "addElRoleDescription");
  function f(x, E) {
    x.attr("aria-controls", E);
  }
  a(f, "addElControls");
  function d(x, E) {
    x.attr("aria-label", E);
  }
  a(d, "addElLabel");
  function h(x, E) {
    x.attr("id", E);
  }
  a(h, "addElId");
  function p(x, E) {
    x.attr("aria-live", E);
  }
  a(p, "addElLive");
  function g(x) {
    x.attr("aria-disabled", !0);
  }
  a(g, "disableEl");
  function m(x) {
    x.attr("aria-disabled", !1);
  }
  a(m, "enableEl");
  function v(x) {
    if (x.keyCode !== 13 && x.keyCode !== 32) return;
    const E = n.params.a11y,
      O = F(x.target);
    n.navigation &&
      n.navigation.$nextEl &&
      O.is(n.navigation.$nextEl) &&
      ((n.isEnd && !n.params.loop) || n.slideNext(),
      n.isEnd ? r(E.lastSlideMessage) : r(E.nextSlideMessage)),
      n.navigation &&
        n.navigation.$prevEl &&
        O.is(n.navigation.$prevEl) &&
        ((n.isBeginning && !n.params.loop) || n.slidePrev(),
        n.isBeginning ? r(E.firstSlideMessage) : r(E.prevSlideMessage)),
      n.pagination && O.is(Pn(n.params.pagination.bulletClass)) && O[0].click();
  }
  a(v, "onEnterOrSpaceKey");
  function b() {
    if (n.params.loop || n.params.rewind || !n.navigation) return;
    const { $nextEl: x, $prevEl: E } = n.navigation;
    E && E.length > 0 && (n.isBeginning ? (g(E), l(E)) : (m(E), o(E))),
      x && x.length > 0 && (n.isEnd ? (g(x), l(x)) : (m(x), o(x)));
  }
  a(b, "updateNavigation");
  function y() {
    return n.pagination && n.pagination.bullets && n.pagination.bullets.length;
  }
  a(y, "hasPagination");
  function _() {
    return y() && n.params.pagination.clickable;
  }
  a(_, "hasClickablePagination");
  function S() {
    const x = n.params.a11y;
    y() &&
      n.pagination.bullets.each((E) => {
        const O = F(E);
        n.params.pagination.clickable &&
          (o(O),
          n.params.pagination.renderBullet ||
            (c(O, "button"),
            d(
              O,
              x.paginationBulletMessage.replace(/\{\{index\}\}/, O.index() + 1)
            ))),
          O.is(`.${n.params.pagination.bulletActiveClass}`)
            ? O.attr("aria-current", "true")
            : O.removeAttr("aria-current");
      });
  }
  a(S, "updatePagination");
  const T = a((x, E, O) => {
      o(x),
        x[0].tagName !== "BUTTON" && (c(x, "button"), x.on("keydown", v)),
        d(x, O),
        f(x, E);
    }, "initNavEl"),
    w = a(() => {
      n.a11y.clicked = !0;
    }, "handlePointerDown"),
    C = a(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          n.destroyed || (n.a11y.clicked = !1);
        });
      });
    }, "handlePointerUp"),
    P = a((x) => {
      if (n.a11y.clicked) return;
      const E = x.target.closest(`.${n.params.slideClass}`);
      if (!E || !n.slides.includes(E)) return;
      const O = n.slides.indexOf(E) === n.activeIndex,
        I =
          n.params.watchSlidesProgress &&
          n.visibleSlides &&
          n.visibleSlides.includes(E);
      O ||
        I ||
        (x.sourceCapabilities && x.sourceCapabilities.firesTouchEvents) ||
        (n.isHorizontal() ? (n.el.scrollLeft = 0) : (n.el.scrollTop = 0),
        n.slideTo(n.slides.indexOf(E), 0));
    }, "handleFocus"),
    L = a(() => {
      const x = n.params.a11y;
      x.itemRoleDescriptionMessage &&
        u(F(n.slides), x.itemRoleDescriptionMessage),
        x.slideRole && c(F(n.slides), x.slideRole);
      const E = n.params.loop
        ? n.slides.filter(
            (O) => !O.classList.contains(n.params.slideDuplicateClass)
          ).length
        : n.slides.length;
      x.slideLabelMessage &&
        n.slides.each((O, I) => {
          const M = F(O),
            D = n.params.loop
              ? parseInt(M.attr("data-swiper-slide-index"), 10)
              : I,
            z = x.slideLabelMessage
              .replace(/\{\{index\}\}/, D + 1)
              .replace(/\{\{slidesLength\}\}/, E);
          d(M, z);
        });
    }, "initSlides"),
    k = a(() => {
      const x = n.params.a11y;
      n.$el.append(i);
      const E = n.$el;
      x.containerRoleDescriptionMessage &&
        u(E, x.containerRoleDescriptionMessage),
        x.containerMessage && d(E, x.containerMessage);
      const O = n.$wrapperEl,
        I = x.id || O.attr("id") || `swiper-wrapper-${s(16)}`,
        M = n.params.autoplay && n.params.autoplay.enabled ? "off" : "polite";
      h(O, I), p(O, M), L();
      let D, z;
      n.navigation && n.navigation.$nextEl && (D = n.navigation.$nextEl),
        n.navigation && n.navigation.$prevEl && (z = n.navigation.$prevEl),
        D && D.length && T(D, I, x.nextSlideMessage),
        z && z.length && T(z, I, x.prevSlideMessage),
        _() &&
          n.pagination.$el.on(
            "keydown",
            Pn(n.params.pagination.bulletClass),
            v
          ),
        n.$el.on("focus", P, !0),
        n.$el.on("pointerdown", w, !0),
        n.$el.on("pointerup", C, !0);
    }, "init");
  function $() {
    i && i.length > 0 && i.remove();
    let x, E;
    n.navigation && n.navigation.$nextEl && (x = n.navigation.$nextEl),
      n.navigation && n.navigation.$prevEl && (E = n.navigation.$prevEl),
      x && x.off("keydown", v),
      E && E.off("keydown", v),
      _() &&
        n.pagination.$el.off("keydown", Pn(n.params.pagination.bulletClass), v),
      n.$el.off("focus", P, !0),
      n.$el.off("pointerdown", w, !0),
      n.$el.off("pointerup", C, !0);
  }
  a($, "destroy"),
    t("beforeInit", () => {
      i = F(
        `<span class="${n.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
      );
    }),
    t("afterInit", () => {
      n.params.a11y.enabled && k();
    }),
    t("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      n.params.a11y.enabled && L();
    }),
    t("fromEdge toEdge afterInit lock unlock", () => {
      n.params.a11y.enabled && b();
    }),
    t("paginationUpdate", () => {
      n.params.a11y.enabled && S();
    }),
    t("destroy", () => {
      n.params.a11y.enabled && $();
    });
}
a(wm, "A11y");
function Cm({ swiper: n, extendParams: e, on: t }) {
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
  const s = a(
      (h) =>
        h
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, ""),
      "slugify"
    ),
    o = a((h) => {
      const p = ye();
      let g;
      h ? (g = new URL(h)) : (g = p.location);
      const m = g.pathname
          .slice(1)
          .split("/")
          .filter((_) => _ !== ""),
        v = m.length,
        b = m[v - 2],
        y = m[v - 1];
      return { key: b, value: y };
    }, "getPathValues"),
    l = a((h, p) => {
      const g = ye();
      if (!i || !n.params.history.enabled) return;
      let m;
      n.params.url ? (m = new URL(n.params.url)) : (m = g.location);
      const v = n.slides.eq(p);
      let b = s(v.attr("data-history"));
      if (n.params.history.root.length > 0) {
        let _ = n.params.history.root;
        _[_.length - 1] === "/" && (_ = _.slice(0, _.length - 1)),
          (b = `${_}/${h}/${b}`);
      } else m.pathname.includes(h) || (b = `${h}/${b}`);
      n.params.history.keepQuery && (b += m.search);
      const y = g.history.state;
      (y && y.value === b) ||
        (n.params.history.replaceState
          ? g.history.replaceState({ value: b }, null, b)
          : g.history.pushState({ value: b }, null, b));
    }, "setHistory"),
    c = a((h, p, g) => {
      if (p)
        for (let m = 0, v = n.slides.length; m < v; m += 1) {
          const b = n.slides.eq(m);
          if (
            s(b.attr("data-history")) === p &&
            !b.hasClass(n.params.slideDuplicateClass)
          ) {
            const _ = b.index();
            n.slideTo(_, h, g);
          }
        }
      else n.slideTo(0, h, g);
    }, "scrollToSlide"),
    u = a(() => {
      (r = o(n.params.url)), c(n.params.speed, r.value, !1);
    }, "setHistoryPopState"),
    f = a(() => {
      const h = ye();
      if (n.params.history) {
        if (!h.history || !h.history.pushState) {
          (n.params.history.enabled = !1),
            (n.params.hashNavigation.enabled = !0);
          return;
        }
        (i = !0),
          (r = o(n.params.url)),
          !(!r.key && !r.value) &&
            (c(0, r.value, n.params.runCallbacksOnInit),
            n.params.history.replaceState || h.addEventListener("popstate", u));
      }
    }, "init"),
    d = a(() => {
      const h = ye();
      n.params.history.replaceState || h.removeEventListener("popstate", u);
    }, "destroy");
  t("init", () => {
    n.params.history.enabled && f();
  }),
    t("destroy", () => {
      n.params.history.enabled && d();
    }),
    t("transitionEnd _freeModeNoMomentumRelease", () => {
      i && l(n.params.history.key, n.activeIndex);
    }),
    t("slideChange", () => {
      i && n.params.cssMode && l(n.params.history.key, n.activeIndex);
    });
}
a(Cm, "History");
function Pm({ swiper: n, extendParams: e, emit: t, on: i }) {
  let r = !1;
  const s = Ve(),
    o = ye();
  e({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
  const l = a(() => {
      t("hashChange");
      const d = s.location.hash.replace("#", ""),
        h = n.slides.eq(n.activeIndex).attr("data-hash");
      if (d !== h) {
        const p = n.$wrapperEl
          .children(`.${n.params.slideClass}[data-hash="${d}"]`)
          .index();
        if (typeof p > "u") return;
        n.slideTo(p);
      }
    }, "onHashChange"),
    c = a(() => {
      if (!(!r || !n.params.hashNavigation.enabled))
        if (
          n.params.hashNavigation.replaceState &&
          o.history &&
          o.history.replaceState
        )
          o.history.replaceState(
            null,
            null,
            `#${n.slides.eq(n.activeIndex).attr("data-hash")}` || ""
          ),
            t("hashSet");
        else {
          const d = n.slides.eq(n.activeIndex),
            h = d.attr("data-hash") || d.attr("data-history");
          (s.location.hash = h || ""), t("hashSet");
        }
    }, "setHash"),
    u = a(() => {
      if (
        !n.params.hashNavigation.enabled ||
        (n.params.history && n.params.history.enabled)
      )
        return;
      r = !0;
      const d = s.location.hash.replace("#", "");
      if (d)
        for (let p = 0, g = n.slides.length; p < g; p += 1) {
          const m = n.slides.eq(p);
          if (
            (m.attr("data-hash") || m.attr("data-history")) === d &&
            !m.hasClass(n.params.slideDuplicateClass)
          ) {
            const b = m.index();
            n.slideTo(b, 0, n.params.runCallbacksOnInit, !0);
          }
        }
      n.params.hashNavigation.watchState && F(o).on("hashchange", l);
    }, "init"),
    f = a(() => {
      n.params.hashNavigation.watchState && F(o).off("hashchange", l);
    }, "destroy");
  i("init", () => {
    n.params.hashNavigation.enabled && u();
  }),
    i("destroy", () => {
      n.params.hashNavigation.enabled && f();
    }),
    i("transitionEnd _freeModeNoMomentumRelease", () => {
      r && c();
    }),
    i("slideChange", () => {
      r && n.params.cssMode && c();
    });
}
a(Pm, "HashNavigation");
function km({ swiper: n, extendParams: e, on: t, emit: i }) {
  let r;
  (n.autoplay = { running: !1, paused: !1 }),
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
    if (!n.size) {
      (n.autoplay.running = !1), (n.autoplay.paused = !1);
      return;
    }
    const m = n.slides.eq(n.activeIndex);
    let v = n.params.autoplay.delay;
    m.attr("data-swiper-autoplay") &&
      (v = m.attr("data-swiper-autoplay") || n.params.autoplay.delay),
      clearTimeout(r),
      (r = ni(() => {
        let b;
        n.params.autoplay.reverseDirection
          ? n.params.loop
            ? (n.loopFix(),
              (b = n.slidePrev(n.params.speed, !0, !0)),
              i("autoplay"))
            : n.isBeginning
            ? n.params.autoplay.stopOnLastSlide
              ? l()
              : ((b = n.slideTo(n.slides.length - 1, n.params.speed, !0, !0)),
                i("autoplay"))
            : ((b = n.slidePrev(n.params.speed, !0, !0)), i("autoplay"))
          : n.params.loop
          ? (n.loopFix(),
            (b = n.slideNext(n.params.speed, !0, !0)),
            i("autoplay"))
          : n.isEnd
          ? n.params.autoplay.stopOnLastSlide
            ? l()
            : ((b = n.slideTo(0, n.params.speed, !0, !0)), i("autoplay"))
          : ((b = n.slideNext(n.params.speed, !0, !0)), i("autoplay")),
          ((n.params.cssMode && n.autoplay.running) || b === !1) && s();
      }, v));
  }
  a(s, "run");
  function o() {
    return typeof r < "u" || n.autoplay.running
      ? !1
      : ((n.autoplay.running = !0), i("autoplayStart"), s(), !0);
  }
  a(o, "start");
  function l() {
    return !n.autoplay.running || typeof r > "u"
      ? !1
      : (r && (clearTimeout(r), (r = void 0)),
        (n.autoplay.running = !1),
        i("autoplayStop"),
        !0);
  }
  a(l, "stop");
  function c(m) {
    n.autoplay.running &&
      (n.autoplay.paused ||
        (r && clearTimeout(r),
        (n.autoplay.paused = !0),
        m === 0 || !n.params.autoplay.waitForTransition
          ? ((n.autoplay.paused = !1), s())
          : ["transitionend", "webkitTransitionEnd"].forEach((v) => {
              n.$wrapperEl[0].addEventListener(v, f);
            })));
  }
  a(c, "pause");
  function u() {
    const m = Ve();
    m.visibilityState === "hidden" && n.autoplay.running && c(),
      m.visibilityState === "visible" &&
        n.autoplay.paused &&
        (s(), (n.autoplay.paused = !1));
  }
  a(u, "onVisibilityChange");
  function f(m) {
    !n ||
      n.destroyed ||
      !n.$wrapperEl ||
      (m.target === n.$wrapperEl[0] &&
        (["transitionend", "webkitTransitionEnd"].forEach((v) => {
          n.$wrapperEl[0].removeEventListener(v, f);
        }),
        (n.autoplay.paused = !1),
        n.autoplay.running ? s() : l()));
  }
  a(f, "onTransitionEnd");
  function d() {
    n.params.autoplay.disableOnInteraction ? l() : (i("autoplayPause"), c()),
      ["transitionend", "webkitTransitionEnd"].forEach((m) => {
        n.$wrapperEl[0].removeEventListener(m, f);
      });
  }
  a(d, "onMouseEnter");
  function h() {
    n.params.autoplay.disableOnInteraction ||
      ((n.autoplay.paused = !1), i("autoplayResume"), s());
  }
  a(h, "onMouseLeave");
  function p() {
    n.params.autoplay.pauseOnMouseEnter &&
      (n.$el.on("mouseenter", d), n.$el.on("mouseleave", h));
  }
  a(p, "attachMouseEvents");
  function g() {
    n.$el.off("mouseenter", d), n.$el.off("mouseleave", h);
  }
  a(g, "detachMouseEvents"),
    t("init", () => {
      n.params.autoplay.enabled &&
        (o(), Ve().addEventListener("visibilitychange", u), p());
    }),
    t("beforeTransitionStart", (m, v, b) => {
      n.autoplay.running &&
        (b || !n.params.autoplay.disableOnInteraction
          ? n.autoplay.pause(v)
          : l());
    }),
    t("sliderFirstMove", () => {
      n.autoplay.running &&
        (n.params.autoplay.disableOnInteraction ? l() : c());
    }),
    t("touchEnd", () => {
      n.params.cssMode &&
        n.autoplay.paused &&
        !n.params.autoplay.disableOnInteraction &&
        s();
    }),
    t("destroy", () => {
      g(),
        n.autoplay.running && l(),
        Ve().removeEventListener("visibilitychange", u);
    }),
    Object.assign(n.autoplay, { pause: c, run: s, start: o, stop: l });
}
a(km, "Autoplay");
function Mm({ swiper: n, extendParams: e, on: t }) {
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
  n.thumbs = { swiper: null };
  function s() {
    const c = n.thumbs.swiper;
    if (!c || c.destroyed) return;
    const u = c.clickedIndex,
      f = c.clickedSlide;
    if (
      (f && F(f).hasClass(n.params.thumbs.slideThumbActiveClass)) ||
      typeof u > "u" ||
      u === null
    )
      return;
    let d;
    if (
      (c.params.loop
        ? (d = parseInt(F(c.clickedSlide).attr("data-swiper-slide-index"), 10))
        : (d = u),
      n.params.loop)
    ) {
      let h = n.activeIndex;
      n.slides.eq(h).hasClass(n.params.slideDuplicateClass) &&
        (n.loopFix(),
        (n._clientLeft = n.$wrapperEl[0].clientLeft),
        (h = n.activeIndex));
      const p = n.slides
          .eq(h)
          .prevAll(`[data-swiper-slide-index="${d}"]`)
          .eq(0)
          .index(),
        g = n.slides
          .eq(h)
          .nextAll(`[data-swiper-slide-index="${d}"]`)
          .eq(0)
          .index();
      typeof p > "u"
        ? (d = g)
        : typeof g > "u"
        ? (d = p)
        : g - h < h - p
        ? (d = g)
        : (d = p);
    }
    n.slideTo(d);
  }
  a(s, "onThumbClick");
  function o() {
    const { thumbs: c } = n.params;
    if (i) return !1;
    i = !0;
    const u = n.constructor;
    if (c.swiper instanceof u)
      (n.thumbs.swiper = c.swiper),
        Object.assign(n.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        Object.assign(n.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        });
    else if (Xr(c.swiper)) {
      const f = Object.assign({}, c.swiper);
      Object.assign(f, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
        (n.thumbs.swiper = new u(f)),
        (r = !0);
    }
    return (
      n.thumbs.swiper.$el.addClass(n.params.thumbs.thumbsContainerClass),
      n.thumbs.swiper.on("tap", s),
      !0
    );
  }
  a(o, "init");
  function l(c) {
    const u = n.thumbs.swiper;
    if (!u || u.destroyed) return;
    const f =
      u.params.slidesPerView === "auto"
        ? u.slidesPerViewDynamic()
        : u.params.slidesPerView;
    let d = 1;
    const h = n.params.thumbs.slideThumbActiveClass;
    if (
      (n.params.slidesPerView > 1 &&
        !n.params.centeredSlides &&
        (d = n.params.slidesPerView),
      n.params.thumbs.multipleActiveThumbs || (d = 1),
      (d = Math.floor(d)),
      u.slides.removeClass(h),
      u.params.loop || (u.params.virtual && u.params.virtual.enabled))
    )
      for (let m = 0; m < d; m += 1)
        u.$wrapperEl
          .children(`[data-swiper-slide-index="${n.realIndex + m}"]`)
          .addClass(h);
    else
      for (let m = 0; m < d; m += 1) u.slides.eq(n.realIndex + m).addClass(h);
    const p = n.params.thumbs.autoScrollOffset,
      g = p && !u.params.loop;
    if (n.realIndex !== u.realIndex || g) {
      let m = u.activeIndex,
        v,
        b;
      if (u.params.loop) {
        u.slides.eq(m).hasClass(u.params.slideDuplicateClass) &&
          (u.loopFix(),
          (u._clientLeft = u.$wrapperEl[0].clientLeft),
          (m = u.activeIndex));
        const y = u.slides
            .eq(m)
            .prevAll(`[data-swiper-slide-index="${n.realIndex}"]`)
            .eq(0)
            .index(),
          _ = u.slides
            .eq(m)
            .nextAll(`[data-swiper-slide-index="${n.realIndex}"]`)
            .eq(0)
            .index();
        typeof y > "u"
          ? (v = _)
          : typeof _ > "u"
          ? (v = y)
          : _ - m === m - y
          ? (v = u.params.slidesPerGroup > 1 ? _ : m)
          : _ - m < m - y
          ? (v = _)
          : (v = y),
          (b = n.activeIndex > n.previousIndex ? "next" : "prev");
      } else (v = n.realIndex), (b = v > n.previousIndex ? "next" : "prev");
      g && (v += b === "next" ? p : -1 * p),
        u.visibleSlidesIndexes &&
          u.visibleSlidesIndexes.indexOf(v) < 0 &&
          (u.params.centeredSlides
            ? v > m
              ? (v = v - Math.floor(f / 2) + 1)
              : (v = v + Math.floor(f / 2) - 1)
            : v > m && u.params.slidesPerGroup,
          u.slideTo(v, c ? 0 : void 0));
    }
  }
  a(l, "update"),
    t("beforeInit", () => {
      const { thumbs: c } = n.params;
      !c || !c.swiper || (o(), l(!0));
    }),
    t("slideChange update resize observerUpdate", () => {
      l();
    }),
    t("setTransition", (c, u) => {
      const f = n.thumbs.swiper;
      !f || f.destroyed || f.setTransition(u);
    }),
    t("beforeDestroy", () => {
      const c = n.thumbs.swiper;
      !c || c.destroyed || (r && c.destroy());
    }),
    Object.assign(n.thumbs, { init: o, update: l });
}
a(Mm, "Thumb");
function Am({ swiper: n, extendParams: e, emit: t, once: i }) {
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
    const l = n.getTranslate();
    n.setTranslate(l),
      n.setTransition(0),
      (n.touchEventsData.velocities.length = 0),
      n.freeMode.onTouchEnd({ currentPos: n.rtl ? n.translate : -n.translate });
  }
  a(r, "onTouchStart");
  function s() {
    const { touchEventsData: l, touches: c } = n;
    l.velocities.length === 0 &&
      l.velocities.push({
        position: c[n.isHorizontal() ? "startX" : "startY"],
        time: l.touchStartTime,
      }),
      l.velocities.push({
        position: c[n.isHorizontal() ? "currentX" : "currentY"],
        time: Lt(),
      });
  }
  a(s, "onTouchMove");
  function o({ currentPos: l }) {
    const {
        params: c,
        $wrapperEl: u,
        rtlTranslate: f,
        snapGrid: d,
        touchEventsData: h,
      } = n,
      g = Lt() - h.touchStartTime;
    if (l < -n.minTranslate()) {
      n.slideTo(n.activeIndex);
      return;
    }
    if (l > -n.maxTranslate()) {
      n.slides.length < d.length
        ? n.slideTo(d.length - 1)
        : n.slideTo(n.slides.length - 1);
      return;
    }
    if (c.freeMode.momentum) {
      if (h.velocities.length > 1) {
        const w = h.velocities.pop(),
          C = h.velocities.pop(),
          P = w.position - C.position,
          L = w.time - C.time;
        (n.velocity = P / L),
          (n.velocity /= 2),
          Math.abs(n.velocity) < c.freeMode.minimumVelocity && (n.velocity = 0),
          (L > 150 || Lt() - w.time > 300) && (n.velocity = 0);
      } else n.velocity = 0;
      (n.velocity *= c.freeMode.momentumVelocityRatio),
        (h.velocities.length = 0);
      let m = 1e3 * c.freeMode.momentumRatio;
      const v = n.velocity * m;
      let b = n.translate + v;
      f && (b = -b);
      let y = !1,
        _;
      const S = Math.abs(n.velocity) * 20 * c.freeMode.momentumBounceRatio;
      let T;
      if (b < n.maxTranslate())
        c.freeMode.momentumBounce
          ? (b + n.maxTranslate() < -S && (b = n.maxTranslate() - S),
            (_ = n.maxTranslate()),
            (y = !0),
            (h.allowMomentumBounce = !0))
          : (b = n.maxTranslate()),
          c.loop && c.centeredSlides && (T = !0);
      else if (b > n.minTranslate())
        c.freeMode.momentumBounce
          ? (b - n.minTranslate() > S && (b = n.minTranslate() + S),
            (_ = n.minTranslate()),
            (y = !0),
            (h.allowMomentumBounce = !0))
          : (b = n.minTranslate()),
          c.loop && c.centeredSlides && (T = !0);
      else if (c.freeMode.sticky) {
        let w;
        for (let C = 0; C < d.length; C += 1)
          if (d[C] > -b) {
            w = C;
            break;
          }
        Math.abs(d[w] - b) < Math.abs(d[w - 1] - b) ||
        n.swipeDirection === "next"
          ? (b = d[w])
          : (b = d[w - 1]),
          (b = -b);
      }
      if (
        (T &&
          i("transitionEnd", () => {
            n.loopFix();
          }),
        n.velocity !== 0)
      ) {
        if (
          (f
            ? (m = Math.abs((-b - n.translate) / n.velocity))
            : (m = Math.abs((b - n.translate) / n.velocity)),
          c.freeMode.sticky)
        ) {
          const w = Math.abs((f ? -b : b) - n.translate),
            C = n.slidesSizesGrid[n.activeIndex];
          w < C
            ? (m = c.speed)
            : w < 2 * C
            ? (m = c.speed * 1.5)
            : (m = c.speed * 2.5);
        }
      } else if (c.freeMode.sticky) {
        n.slideToClosest();
        return;
      }
      c.freeMode.momentumBounce && y
        ? (n.updateProgress(_),
          n.setTransition(m),
          n.setTranslate(b),
          n.transitionStart(!0, n.swipeDirection),
          (n.animating = !0),
          u.transitionEnd(() => {
            !n ||
              n.destroyed ||
              !h.allowMomentumBounce ||
              (t("momentumBounce"),
              n.setTransition(c.speed),
              setTimeout(() => {
                n.setTranslate(_),
                  u.transitionEnd(() => {
                    !n || n.destroyed || n.transitionEnd();
                  });
              }, 0));
          }))
        : n.velocity
        ? (t("_freeModeNoMomentumRelease"),
          n.updateProgress(b),
          n.setTransition(m),
          n.setTranslate(b),
          n.transitionStart(!0, n.swipeDirection),
          n.animating ||
            ((n.animating = !0),
            u.transitionEnd(() => {
              !n || n.destroyed || n.transitionEnd();
            })))
        : n.updateProgress(b),
        n.updateActiveIndex(),
        n.updateSlidesClasses();
    } else if (c.freeMode.sticky) {
      n.slideToClosest();
      return;
    } else c.freeMode && t("_freeModeNoMomentumRelease");
    (!c.freeMode.momentum || g >= c.longSwipesMs) &&
      (n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses());
  }
  a(o, "onTouchEnd"),
    Object.assign(n, {
      freeMode: { onTouchStart: r, onTouchMove: s, onTouchEnd: o },
    });
}
a(Am, "freeMode");
function $m({ swiper: n, extendParams: e }) {
  e({ grid: { rows: 1, fill: "column" } });
  let t, i, r;
  const s = a((c) => {
      const { slidesPerView: u } = n.params,
        { rows: f, fill: d } = n.params.grid;
      (i = t / f),
        (r = Math.floor(c / f)),
        Math.floor(c / f) === c / f ? (t = c) : (t = Math.ceil(c / f) * f),
        u !== "auto" && d === "row" && (t = Math.max(t, u * f));
    }, "initSlides"),
    o = a((c, u, f, d) => {
      const { slidesPerGroup: h, spaceBetween: p } = n.params,
        { rows: g, fill: m } = n.params.grid;
      let v, b, y;
      if (m === "row" && h > 1) {
        const _ = Math.floor(c / (h * g)),
          S = c - g * h * _,
          T = _ === 0 ? h : Math.min(Math.ceil((f - _ * g * h) / g), h);
        (y = Math.floor(S / T)),
          (b = S - y * T + _ * h),
          (v = b + (y * t) / g),
          u.css({ "-webkit-order": v, order: v });
      } else
        m === "column"
          ? ((b = Math.floor(c / g)),
            (y = c - b * g),
            (b > r || (b === r && y === g - 1)) &&
              ((y += 1), y >= g && ((y = 0), (b += 1))))
          : ((y = Math.floor(c / i)), (b = c - y * i));
      u.css(d("margin-top"), y !== 0 ? p && `${p}px` : "");
    }, "updateSlide"),
    l = a((c, u, f) => {
      const { spaceBetween: d, centeredSlides: h, roundLengths: p } = n.params,
        { rows: g } = n.params.grid;
      if (
        ((n.virtualSize = (c + d) * t),
        (n.virtualSize = Math.ceil(n.virtualSize / g) - d),
        n.$wrapperEl.css({ [f("width")]: `${n.virtualSize + d}px` }),
        h)
      ) {
        u.splice(0, u.length);
        const m = [];
        for (let v = 0; v < u.length; v += 1) {
          let b = u[v];
          p && (b = Math.floor(b)), u[v] < n.virtualSize + u[0] && m.push(b);
        }
        u.push(...m);
      }
    }, "updateWrapperSize");
  n.grid = { initSlides: s, updateSlide: o, updateWrapperSize: l };
}
a($m, "Grid");
function Om(n) {
  const e = this,
    { $wrapperEl: t, params: i } = e;
  if ((i.loop && e.loopDestroy(), typeof n == "object" && "length" in n))
    for (let r = 0; r < n.length; r += 1) n[r] && t.append(n[r]);
  else t.append(n);
  i.loop && e.loopCreate(), i.observer || e.update();
}
a(Om, "appendSlide");
function Lm(n) {
  const e = this,
    { params: t, $wrapperEl: i, activeIndex: r } = e;
  t.loop && e.loopDestroy();
  let s = r + 1;
  if (typeof n == "object" && "length" in n) {
    for (let o = 0; o < n.length; o += 1) n[o] && i.prepend(n[o]);
    s = r + n.length;
  } else i.prepend(n);
  t.loop && e.loopCreate(), t.observer || e.update(), e.slideTo(s, 0, !1);
}
a(Lm, "prependSlide");
function Im(n, e) {
  const t = this,
    { $wrapperEl: i, params: r, activeIndex: s } = t;
  let o = s;
  r.loop &&
    ((o -= t.loopedSlides),
    t.loopDestroy(),
    (t.slides = i.children(`.${r.slideClass}`)));
  const l = t.slides.length;
  if (n <= 0) {
    t.prependSlide(e);
    return;
  }
  if (n >= l) {
    t.appendSlide(e);
    return;
  }
  let c = o > n ? o + 1 : o;
  const u = [];
  for (let f = l - 1; f >= n; f -= 1) {
    const d = t.slides.eq(f);
    d.remove(), u.unshift(d);
  }
  if (typeof e == "object" && "length" in e) {
    for (let f = 0; f < e.length; f += 1) e[f] && i.append(e[f]);
    c = o > n ? o + e.length : o;
  } else i.append(e);
  for (let f = 0; f < u.length; f += 1) i.append(u[f]);
  r.loop && t.loopCreate(),
    r.observer || t.update(),
    r.loop ? t.slideTo(c + t.loopedSlides, 0, !1) : t.slideTo(c, 0, !1);
}
a(Im, "addSlide");
function Dm(n) {
  const e = this,
    { params: t, $wrapperEl: i, activeIndex: r } = e;
  let s = r;
  t.loop &&
    ((s -= e.loopedSlides),
    e.loopDestroy(),
    (e.slides = i.children(`.${t.slideClass}`)));
  let o = s,
    l;
  if (typeof n == "object" && "length" in n) {
    for (let c = 0; c < n.length; c += 1)
      (l = n[c]), e.slides[l] && e.slides.eq(l).remove(), l < o && (o -= 1);
    o = Math.max(o, 0);
  } else
    (l = n),
      e.slides[l] && e.slides.eq(l).remove(),
      l < o && (o -= 1),
      (o = Math.max(o, 0));
  t.loop && e.loopCreate(),
    t.observer || e.update(),
    t.loop ? e.slideTo(o + e.loopedSlides, 0, !1) : e.slideTo(o, 0, !1);
}
a(Dm, "removeSlide");
function zm() {
  const n = this,
    e = [];
  for (let t = 0; t < n.slides.length; t += 1) e.push(t);
  n.removeSlide(e);
}
a(zm, "removeAllSlides");
function Rm({ swiper: n }) {
  Object.assign(n, {
    appendSlide: Om.bind(n),
    prependSlide: Lm.bind(n),
    addSlide: Im.bind(n),
    removeSlide: Dm.bind(n),
    removeAllSlides: zm.bind(n),
  });
}
a(Rm, "Manipulation");
function Ir(n) {
  const {
    effect: e,
    swiper: t,
    on: i,
    setTranslate: r,
    setTransition: s,
    overwriteParams: o,
    perspective: l,
    recreateShadows: c,
    getEffectParams: u,
  } = n;
  i("beforeInit", () => {
    if (t.params.effect !== e) return;
    t.classNames.push(`${t.params.containerModifierClass}${e}`),
      l && l() && t.classNames.push(`${t.params.containerModifierClass}3d`);
    const d = o ? o() : {};
    Object.assign(t.params, d), Object.assign(t.originalParams, d);
  }),
    i("setTranslate", () => {
      t.params.effect === e && r();
    }),
    i("setTransition", (d, h) => {
      t.params.effect === e && s(h);
    }),
    i("transitionEnd", () => {
      if (t.params.effect === e && c) {
        if (!u || !u().slideShadows) return;
        t.slides.each((d) => {
          t.$(d)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .remove();
        }),
          c();
      }
    });
  let f;
  i("virtualUpdate", () => {
    t.params.effect === e &&
      (t.slides.length || (f = !0),
      requestAnimationFrame(() => {
        f && t.slides && t.slides.length && (r(), (f = !1));
      }));
  });
}
a(Ir, "effectInit");
function Os(n, e) {
  return n.transformEl
    ? e
        .find(n.transformEl)
        .css({
          "backface-visibility": "hidden",
          "-webkit-backface-visibility": "hidden",
        })
    : e;
}
a(Os, "effectTarget");
function No({ swiper: n, duration: e, transformEl: t, allSlides: i }) {
  const { slides: r, activeIndex: s, $wrapperEl: o } = n;
  if (n.params.virtualTranslate && e !== 0) {
    let l = !1,
      c;
    i ? (c = t ? r.find(t) : r) : (c = t ? r.eq(s).find(t) : r.eq(s)),
      c.transitionEnd(() => {
        if (l || !n || n.destroyed) return;
        (l = !0), (n.animating = !1);
        const u = ["webkitTransitionEnd", "transitionend"];
        for (let f = 0; f < u.length; f += 1) o.trigger(u[f]);
      });
  }
}
a(No, "effectVirtualTransitionEnd");
function Nm({ swiper: n, extendParams: e, on: t }) {
  e({ fadeEffect: { crossFade: !1, transformEl: null } }),
    Ir({
      effect: "fade",
      swiper: n,
      on: t,
      setTranslate: a(() => {
        const { slides: s } = n,
          o = n.params.fadeEffect;
        for (let l = 0; l < s.length; l += 1) {
          const c = n.slides.eq(l);
          let f = -c[0].swiperSlideOffset;
          n.params.virtualTranslate || (f -= n.translate);
          let d = 0;
          n.isHorizontal() || ((d = f), (f = 0));
          const h = n.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(c[0].progress), 0)
            : 1 + Math.min(Math.max(c[0].progress, -1), 0);
          Os(o, c)
            .css({ opacity: h })
            .transform(`translate3d(${f}px, ${d}px, 0px)`);
        }
      }, "setTranslate"),
      setTransition: a((s) => {
        const { transformEl: o } = n.params.fadeEffect;
        (o ? n.slides.find(o) : n.slides).transition(s),
          No({ swiper: n, duration: s, transformEl: o, allSlides: !0 });
      }, "setTransition"),
      overwriteParams: a(
        () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !n.params.cssMode,
        }),
        "overwriteParams"
      ),
    });
}
a(Nm, "EffectFade");
function Bm({ swiper: n, extendParams: e, on: t }) {
  e({
    cubeEffect: {
      slideShadows: !0,
      shadow: !0,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
  });
  const i = a((l, c, u) => {
    let f = u
        ? l.find(".swiper-slide-shadow-left")
        : l.find(".swiper-slide-shadow-top"),
      d = u
        ? l.find(".swiper-slide-shadow-right")
        : l.find(".swiper-slide-shadow-bottom");
    f.length === 0 &&
      ((f = F(`<div class="swiper-slide-shadow-${u ? "left" : "top"}"></div>`)),
      l.append(f)),
      d.length === 0 &&
        ((d = F(
          `<div class="swiper-slide-shadow-${u ? "right" : "bottom"}"></div>`
        )),
        l.append(d)),
      f.length && (f[0].style.opacity = Math.max(-c, 0)),
      d.length && (d[0].style.opacity = Math.max(c, 0));
  }, "createSlideShadows");
  Ir({
    effect: "cube",
    swiper: n,
    on: t,
    setTranslate: a(() => {
      const {
          $el: l,
          $wrapperEl: c,
          slides: u,
          width: f,
          height: d,
          rtlTranslate: h,
          size: p,
          browser: g,
        } = n,
        m = n.params.cubeEffect,
        v = n.isHorizontal(),
        b = n.virtual && n.params.virtual.enabled;
      let y = 0,
        _;
      m.shadow &&
        (v
          ? ((_ = c.find(".swiper-cube-shadow")),
            _.length === 0 &&
              ((_ = F('<div class="swiper-cube-shadow"></div>')), c.append(_)),
            _.css({ height: `${f}px` }))
          : ((_ = l.find(".swiper-cube-shadow")),
            _.length === 0 &&
              ((_ = F('<div class="swiper-cube-shadow"></div>')),
              l.append(_))));
      for (let T = 0; T < u.length; T += 1) {
        const w = u.eq(T);
        let C = T;
        b && (C = parseInt(w.attr("data-swiper-slide-index"), 10));
        let P = C * 90,
          L = Math.floor(P / 360);
        h && ((P = -P), (L = Math.floor(-P / 360)));
        const k = Math.max(Math.min(w[0].progress, 1), -1);
        let $ = 0,
          x = 0,
          E = 0;
        C % 4 === 0
          ? (($ = -L * 4 * p), (E = 0))
          : (C - 1) % 4 === 0
          ? (($ = 0), (E = -L * 4 * p))
          : (C - 2) % 4 === 0
          ? (($ = p + L * 4 * p), (E = p))
          : (C - 3) % 4 === 0 && (($ = -p), (E = 3 * p + p * 4 * L)),
          h && ($ = -$),
          v || ((x = $), ($ = 0));
        const O = `rotateX(${v ? 0 : -P}deg) rotateY(${
          v ? P : 0
        }deg) translate3d(${$}px, ${x}px, ${E}px)`;
        k <= 1 &&
          k > -1 &&
          ((y = C * 90 + k * 90), h && (y = -C * 90 - k * 90)),
          w.transform(O),
          m.slideShadows && i(w, k, v);
      }
      if (
        (c.css({
          "-webkit-transform-origin": `50% 50% -${p / 2}px`,
          "transform-origin": `50% 50% -${p / 2}px`,
        }),
        m.shadow)
      )
        if (v)
          _.transform(
            `translate3d(0px, ${f / 2 + m.shadowOffset}px, ${
              -f / 2
            }px) rotateX(90deg) rotateZ(0deg) scale(${m.shadowScale})`
          );
        else {
          const T = Math.abs(y) - Math.floor(Math.abs(y) / 90) * 90,
            w =
              1.5 -
              (Math.sin((T * 2 * Math.PI) / 360) / 2 +
                Math.cos((T * 2 * Math.PI) / 360) / 2),
            C = m.shadowScale,
            P = m.shadowScale / w,
            L = m.shadowOffset;
          _.transform(
            `scale3d(${C}, 1, ${P}) translate3d(0px, ${d / 2 + L}px, ${
              -d / 2 / P
            }px) rotateX(-90deg)`
          );
        }
      const S = g.isSafari || g.isWebView ? -p / 2 : 0;
      c.transform(
        `translate3d(0px,0,${S}px) rotateX(${
          n.isHorizontal() ? 0 : y
        }deg) rotateY(${n.isHorizontal() ? -y : 0}deg)`
      ),
        c[0].style.setProperty("--swiper-cube-translate-z", `${S}px`);
    }, "setTranslate"),
    setTransition: a((l) => {
      const { $el: c, slides: u } = n;
      u
        .transition(l)
        .find(
          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
        )
        .transition(l),
        n.params.cubeEffect.shadow &&
          !n.isHorizontal() &&
          c.find(".swiper-cube-shadow").transition(l);
    }, "setTransition"),
    recreateShadows: a(() => {
      const l = n.isHorizontal();
      n.slides.each((c) => {
        const u = Math.max(Math.min(c.progress, 1), -1);
        i(F(c), u, l);
      });
    }, "recreateShadows"),
    getEffectParams: a(() => n.params.cubeEffect, "getEffectParams"),
    perspective: a(() => !0, "perspective"),
    overwriteParams: a(
      () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: !1,
        virtualTranslate: !0,
      }),
      "overwriteParams"
    ),
  });
}
a(Bm, "EffectCube");
function Er(n, e, t) {
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
a(Er, "createShadow");
function Fm({ swiper: n, extendParams: e, on: t }) {
  e({ flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null } });
  const i = a((l, c, u) => {
    let f = n.isHorizontal()
        ? l.find(".swiper-slide-shadow-left")
        : l.find(".swiper-slide-shadow-top"),
      d = n.isHorizontal()
        ? l.find(".swiper-slide-shadow-right")
        : l.find(".swiper-slide-shadow-bottom");
    f.length === 0 && (f = Er(u, l, n.isHorizontal() ? "left" : "top")),
      d.length === 0 && (d = Er(u, l, n.isHorizontal() ? "right" : "bottom")),
      f.length && (f[0].style.opacity = Math.max(-c, 0)),
      d.length && (d[0].style.opacity = Math.max(c, 0));
  }, "createSlideShadows");
  Ir({
    effect: "flip",
    swiper: n,
    on: t,
    setTranslate: a(() => {
      const { slides: l, rtlTranslate: c } = n,
        u = n.params.flipEffect;
      for (let f = 0; f < l.length; f += 1) {
        const d = l.eq(f);
        let h = d[0].progress;
        n.params.flipEffect.limitRotation &&
          (h = Math.max(Math.min(d[0].progress, 1), -1));
        const p = d[0].swiperSlideOffset;
        let m = -180 * h,
          v = 0,
          b = n.params.cssMode ? -p - n.translate : -p,
          y = 0;
        n.isHorizontal()
          ? c && (m = -m)
          : ((y = b), (b = 0), (v = -m), (m = 0)),
          (d[0].style.zIndex = -Math.abs(Math.round(h)) + l.length),
          u.slideShadows && i(d, h, u);
        const _ = `translate3d(${b}px, ${y}px, 0px) rotateX(${v}deg) rotateY(${m}deg)`;
        Os(u, d).transform(_);
      }
    }, "setTranslate"),
    setTransition: a((l) => {
      const { transformEl: c } = n.params.flipEffect;
      (c ? n.slides.find(c) : n.slides)
        .transition(l)
        .find(
          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
        )
        .transition(l),
        No({ swiper: n, duration: l, transformEl: c });
    }, "setTransition"),
    recreateShadows: a(() => {
      const l = n.params.flipEffect;
      n.slides.each((c) => {
        const u = F(c);
        let f = u[0].progress;
        n.params.flipEffect.limitRotation &&
          (f = Math.max(Math.min(c.progress, 1), -1)),
          i(u, f, l);
      });
    }, "recreateShadows"),
    getEffectParams: a(() => n.params.flipEffect, "getEffectParams"),
    perspective: a(() => !0, "perspective"),
    overwriteParams: a(
      () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !n.params.cssMode,
      }),
      "overwriteParams"
    ),
  });
}
a(Fm, "EffectFlip");
function qm({ swiper: n, extendParams: e, on: t }) {
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
    Ir({
      effect: "coverflow",
      swiper: n,
      on: t,
      setTranslate: a(() => {
        const { width: s, height: o, slides: l, slidesSizesGrid: c } = n,
          u = n.params.coverflowEffect,
          f = n.isHorizontal(),
          d = n.translate,
          h = f ? -d + s / 2 : -d + o / 2,
          p = f ? u.rotate : -u.rotate,
          g = u.depth;
        for (let m = 0, v = l.length; m < v; m += 1) {
          const b = l.eq(m),
            y = c[m],
            _ = b[0].swiperSlideOffset,
            S = (h - _ - y / 2) / y,
            T =
              typeof u.modifier == "function" ? u.modifier(S) : S * u.modifier;
          let w = f ? p * T : 0,
            C = f ? 0 : p * T,
            P = -g * Math.abs(T),
            L = u.stretch;
          typeof L == "string" &&
            L.indexOf("%") !== -1 &&
            (L = (parseFloat(u.stretch) / 100) * y);
          let k = f ? 0 : L * T,
            $ = f ? L * T : 0,
            x = 1 - (1 - u.scale) * Math.abs(T);
          Math.abs($) < 0.001 && ($ = 0),
            Math.abs(k) < 0.001 && (k = 0),
            Math.abs(P) < 0.001 && (P = 0),
            Math.abs(w) < 0.001 && (w = 0),
            Math.abs(C) < 0.001 && (C = 0),
            Math.abs(x) < 0.001 && (x = 0);
          const E = `translate3d(${$}px,${k}px,${P}px)  rotateX(${C}deg) rotateY(${w}deg) scale(${x})`;
          if (
            (Os(u, b).transform(E),
            (b[0].style.zIndex = -Math.abs(Math.round(T)) + 1),
            u.slideShadows)
          ) {
            let I = f
                ? b.find(".swiper-slide-shadow-left")
                : b.find(".swiper-slide-shadow-top"),
              M = f
                ? b.find(".swiper-slide-shadow-right")
                : b.find(".swiper-slide-shadow-bottom");
            I.length === 0 && (I = Er(u, b, f ? "left" : "top")),
              M.length === 0 && (M = Er(u, b, f ? "right" : "bottom")),
              I.length && (I[0].style.opacity = T > 0 ? T : 0),
              M.length && (M[0].style.opacity = -T > 0 ? -T : 0);
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
a(qm, "EffectCoverflow");
function Hm({ swiper: n, extendParams: e, on: t }) {
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
  const i = a(
    (o) => (typeof o == "string" ? o : `${o}px`),
    "getTranslateValue"
  );
  Ir({
    effect: "creative",
    swiper: n,
    on: t,
    setTranslate: a(() => {
      const { slides: o, $wrapperEl: l, slidesSizesGrid: c } = n,
        u = n.params.creativeEffect,
        { progressMultiplier: f } = u,
        d = n.params.centeredSlides;
      if (d) {
        const h = c[0] / 2 - n.params.slidesOffsetBefore || 0;
        l.transform(`translateX(calc(50% - ${h}px))`);
      }
      for (let h = 0; h < o.length; h += 1) {
        const p = o.eq(h),
          g = p[0].progress,
          m = Math.min(
            Math.max(p[0].progress, -u.limitProgress),
            u.limitProgress
          );
        let v = m;
        d ||
          (v = Math.min(
            Math.max(p[0].originalProgress, -u.limitProgress),
            u.limitProgress
          ));
        const b = p[0].swiperSlideOffset,
          y = [n.params.cssMode ? -b - n.translate : -b, 0, 0],
          _ = [0, 0, 0];
        let S = !1;
        n.isHorizontal() || ((y[1] = y[0]), (y[0] = 0));
        let T = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1,
        };
        m < 0 ? ((T = u.next), (S = !0)) : m > 0 && ((T = u.prev), (S = !0)),
          y.forEach((x, E) => {
            y[E] = `calc(${x}px + (${i(T.translate[E])} * ${Math.abs(m * f)}))`;
          }),
          _.forEach((x, E) => {
            _[E] = T.rotate[E] * Math.abs(m * f);
          }),
          (p[0].style.zIndex = -Math.abs(Math.round(g)) + o.length);
        const w = y.join(", "),
          C = `rotateX(${_[0]}deg) rotateY(${_[1]}deg) rotateZ(${_[2]}deg)`,
          P =
            v < 0
              ? `scale(${1 + (1 - T.scale) * v * f})`
              : `scale(${1 - (1 - T.scale) * v * f})`,
          L = v < 0 ? 1 + (1 - T.opacity) * v * f : 1 - (1 - T.opacity) * v * f,
          k = `translate3d(${w}) ${C} ${P}`;
        if ((S && T.shadow) || !S) {
          let x = p.children(".swiper-slide-shadow");
          if ((x.length === 0 && T.shadow && (x = Er(u, p)), x.length)) {
            const E = u.shadowPerProgress ? m * (1 / u.limitProgress) : m;
            x[0].style.opacity = Math.min(Math.max(Math.abs(E), 0), 1);
          }
        }
        const $ = Os(u, p);
        $.transform(k).css({ opacity: L }),
          T.origin && $.css("transform-origin", T.origin);
      }
    }, "setTranslate"),
    setTransition: a((o) => {
      const { transformEl: l } = n.params.creativeEffect;
      (l ? n.slides.find(l) : n.slides)
        .transition(o)
        .find(".swiper-slide-shadow")
        .transition(o),
        No({ swiper: n, duration: o, transformEl: l, allSlides: !0 });
    }, "setTransition"),
    perspective: a(() => n.params.creativeEffect.perspective, "perspective"),
    overwriteParams: a(
      () => ({ watchSlidesProgress: !0, virtualTranslate: !n.params.cssMode }),
      "overwriteParams"
    ),
  });
}
a(Hm, "EffectCreative");
function Vm({ swiper: n, extendParams: e, on: t }) {
  e({
    cardsEffect: {
      slideShadows: !0,
      transformEl: null,
      rotate: !0,
      perSlideRotate: 2,
      perSlideOffset: 8,
    },
  }),
    Ir({
      effect: "cards",
      swiper: n,
      on: t,
      setTranslate: a(() => {
        const { slides: s, activeIndex: o } = n,
          l = n.params.cardsEffect,
          { startTranslate: c, isTouched: u } = n.touchEventsData,
          f = n.translate;
        for (let d = 0; d < s.length; d += 1) {
          const h = s.eq(d),
            p = h[0].progress,
            g = Math.min(Math.max(p, -4), 4);
          let m = h[0].swiperSlideOffset;
          n.params.centeredSlides &&
            !n.params.cssMode &&
            n.$wrapperEl.transform(`translateX(${n.minTranslate()}px)`),
            n.params.centeredSlides &&
              n.params.cssMode &&
              (m -= s[0].swiperSlideOffset);
          let v = n.params.cssMode ? -m - n.translate : -m,
            b = 0;
          const y = -100 * Math.abs(g);
          let _ = 1,
            S = -l.perSlideRotate * g,
            T = l.perSlideOffset - Math.abs(g) * 0.75;
          const w =
              n.virtual && n.params.virtual.enabled ? n.virtual.from + d : d,
            C =
              (w === o || w === o - 1) &&
              g > 0 &&
              g < 1 &&
              (u || n.params.cssMode) &&
              f < c,
            P =
              (w === o || w === o + 1) &&
              g < 0 &&
              g > -1 &&
              (u || n.params.cssMode) &&
              f > c;
          if (C || P) {
            const x = (1 - Math.abs((Math.abs(g) - 0.5) / 0.5)) ** 0.5;
            (S += -28 * g * x),
              (_ += -0.5 * x),
              (T += 96 * x),
              (b = `${-25 * x * Math.abs(g)}%`);
          }
          if (
            (g < 0
              ? (v = `calc(${v}px + (${T * Math.abs(g)}%))`)
              : g > 0
              ? (v = `calc(${v}px + (-${T * Math.abs(g)}%))`)
              : (v = `${v}px`),
            !n.isHorizontal())
          ) {
            const x = b;
            (b = v), (v = x);
          }
          const L = g < 0 ? `${1 + (1 - _) * g}` : `${1 - (1 - _) * g}`,
            k = `
        translate3d(${v}, ${b}, ${y}px)
        rotateZ(${l.rotate ? S : 0}deg)
        scale(${L})
      `;
          if (l.slideShadows) {
            let x = h.find(".swiper-slide-shadow");
            x.length === 0 && (x = Er(l, h)),
              x.length &&
                (x[0].style.opacity = Math.min(
                  Math.max((Math.abs(g) - 0.5) / 0.5, 0),
                  1
                ));
          }
          (h[0].style.zIndex = -Math.abs(Math.round(p)) + s.length),
            Os(l, h).transform(k);
        }
      }, "setTranslate"),
      setTransition: a((s) => {
        const { transformEl: o } = n.params.cardsEffect;
        (o ? n.slides.find(o) : n.slides)
          .transition(s)
          .find(".swiper-slide-shadow")
          .transition(s),
          No({ swiper: n, duration: s, transformEl: o });
      }, "setTransition"),
      perspective: a(() => !0, "perspective"),
      overwriteParams: a(
        () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !n.params.cssMode,
        }),
        "overwriteParams"
      ),
    });
}
a(Vm, "EffectCards");
const Wm = [
  mm,
  gm,
  vm,
  ym,
  bm,
  _m,
  xm,
  Sm,
  Tm,
  Em,
  wm,
  Cm,
  Pm,
  km,
  Mm,
  Am,
  $m,
  Rm,
  Nm,
  Bm,
  Fm,
  qm,
  Hm,
  Vm,
];
ii.use(Wm);
let ea = null;
const qu = a(() => {
  const n = document.querySelector(".swiper[work-slider='component']");
  if (!n) return;
  const e = a(() => window.innerWidth >= 768, "getIsDesktop"),
    t = a(() => {
      const r = e();
      ea = new ii(n, {
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
                (l) => !l.classList.contains("swiper-slide-duplicate")
              ).length,
              o = this.realIndex + 1;
            (document.querySelector("[data-slider-count]").textContent = s),
              (document.querySelector("[data-slider-current]").textContent = o);
          }, "init"),
          slideChange: a(function () {
            const s = this.realIndex + 1;
            document.querySelector("[data-slider-current]").textContent = s;
          }, "slideChange"),
        },
      });
    }, "initSwiper");
  let i = e();
  t(),
    window.addEventListener("resize", () => {
      const r = e();
      r !== i && ((i = r), ea && ea.destroy(!0, !0), t());
    });
}, "initWorkSlider");
function Cn(n) {
  if (n === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return n;
}
a(Cn, "_assertThisInitialized");
function Hu(n, e) {
  (n.prototype = Object.create(e.prototype)),
    (n.prototype.constructor = n),
    (n.__proto__ = e);
}
a(Hu, "_inheritsLoose");
var Rt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  wr = { duration: 0.5, overwrite: !1, delay: 0 },
  yl,
  tt,
  Se,
  yn = 1e8,
  ut = 1 / yn,
  Aa = Math.PI * 2,
  Xm = Aa / 4,
  Ym = 0,
  Vu = Math.sqrt,
  Gm = Math.cos,
  jm = Math.sin,
  Ze = a(function (e) {
    return typeof e == "string";
  }, "_isString"),
  Ae = a(function (e) {
    return typeof e == "function";
  }, "_isFunction"),
  zn = a(function (e) {
    return typeof e == "number";
  }, "_isNumber"),
  bl = a(function (e) {
    return typeof e > "u";
  }, "_isUndefined"),
  xn = a(function (e) {
    return typeof e == "object";
  }, "_isObject"),
  St = a(function (e) {
    return e !== !1;
  }, "_isNotFalse"),
  _l = a(function () {
    return typeof window < "u";
  }, "_windowExists"),
  Rs = a(function (e) {
    return Ae(e) || Ze(e);
  }, "_isFuncOrString"),
  Wu =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  ft = Array.isArray,
  $a = /(?:-?\.?\d|\.)+/gi,
  Xu = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  sr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  ta = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Yu = /[+-]=-?[.\d]+/,
  Gu = /[^,'"\[\]\s]+/gi,
  Um = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Pe,
  un,
  Oa,
  xl,
  Nt = {},
  yo = {},
  ju,
  Uu = a(function (e) {
    return (yo = Cr(e, Nt)) && Ct;
  }, "_install"),
  Sl = a(function (e, t) {}, "_missingPlugin"),
  bs = a(function (e, t) {
    return !t && void 0;
  }, "_warn"),
  Ku = a(function (e, t) {
    return (e && (Nt[e] = t) && yo && (yo[e] = t)) || Nt;
  }, "_addGlobal"),
  _s = a(function () {
    return 0;
  }, "_emptyFunc"),
  Km = { suppressEvents: !0, isStart: !0, kill: !1 },
  no = { suppressEvents: !0, kill: !1 },
  Zm = { suppressEvents: !0 },
  Tl = {},
  Jn = [],
  La = {},
  Zu,
  $t = {},
  na = {},
  _c = 30,
  io = [],
  El = "",
  wl = a(function (e) {
    var t = e[0],
      i,
      r;
    if ((xn(t) || Ae(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
      for (r = io.length; r-- && !io[r].targetTest(t); );
      i = io[r];
    }
    for (r = e.length; r--; )
      (e[r] && (e[r]._gsap || (e[r]._gsap = new Sf(e[r], i)))) ||
        e.splice(r, 1);
    return e;
  }, "_harness"),
  ki = a(function (e) {
    return e._gsap || wl(Gt(e))[0]._gsap;
  }, "_getCache"),
  Qu = a(function (e, t, i) {
    return (i = e[t]) && Ae(i)
      ? e[t]()
      : (bl(i) && e.getAttribute && e.getAttribute(t)) || i;
  }, "_getProperty"),
  Tt = a(function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  }, "_forEachName"),
  Re = a(function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  }, "_round"),
  He = a(function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  }, "_roundPrecise"),
  dr = a(function (e, t) {
    var i = t.charAt(0),
      r = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
    );
  }, "_parseRelative"),
  Qm = a(function (e, t) {
    for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
    return r < i;
  }, "_arrayContainsAny"),
  bo = a(function () {
    var e = Jn.length,
      t = Jn.slice(0),
      i,
      r;
    for (La = {}, Jn.length = 0, i = 0; i < e; i++)
      (r = t[i]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  }, "_lazyRender"),
  Cl = a(function (e) {
    return !!(e._initted || e._startAt || e.add);
  }, "_isRevertWorthy"),
  Ju = a(function (e, t, i, r) {
    Jn.length && !tt && bo(),
      e.render(t, i, !!(tt && t < 0 && Cl(e))),
      Jn.length && !tt && bo();
  }, "_lazySafeRender"),
  ef = a(function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(Gu).length < 2
      ? t
      : Ze(e)
      ? e.trim()
      : e;
  }, "_numericIfPossible"),
  tf = a(function (e) {
    return e;
  }, "_passThrough"),
  Bt = a(function (e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  }, "_setDefaults"),
  Jm = a(function (e) {
    return function (t, i) {
      for (var r in i)
        r in t || (r === "duration" && e) || r === "ease" || (t[r] = i[r]);
    };
  }, "_setKeyframeDefaults"),
  Cr = a(function (e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  }, "_merge"),
  xc = a(function n(e, t) {
    for (var i in t)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (e[i] = xn(t[i]) ? n(e[i] || (e[i] = {}), t[i]) : t[i]);
    return e;
  }, "_mergeDeep"),
  _o = a(function (e, t) {
    var i = {},
      r;
    for (r in e) r in t || (i[r] = e[r]);
    return i;
  }, "_copyExcluding"),
  ns = a(function (e) {
    var t = e.parent || Pe,
      i = e.keyframes ? Jm(ft(e.keyframes)) : Bt;
    if (St(e.inherit))
      for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  }, "_inheritDefaults"),
  eg = a(function (e, t) {
    for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
    return i < 0;
  }, "_arraysMatch"),
  nf = a(function (e, t, i, r, s) {
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
  Bo = a(function (e, t, i, r) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var s = t._prev,
      o = t._next;
    s ? (s._next = o) : e[i] === t && (e[i] = o),
      o ? (o._prev = s) : e[r] === t && (e[r] = s),
      (t._next = t._prev = t.parent = null);
  }, "_removeLinkedListItem"),
  ri = a(function (e, t) {
    e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  }, "_removeFromParent"),
  Mi = a(function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
    return e;
  }, "_uncache"),
  tg = a(function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  }, "_recacheAncestors"),
  Ia = a(function (e, t, i, r) {
    return (
      e._startAt &&
      (tt
        ? e._startAt.revert(no)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, r))
    );
  }, "_rewindStartAt"),
  ng = a(function n(e) {
    return !e || (e._ts && n(e.parent));
  }, "_hasNoPausedAncestors"),
  Sc = a(function (e) {
    return e._repeat ? Pr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  }, "_elapsedCycleDuration"),
  Pr = a(function (e, t) {
    var i = Math.floor((e = He(e / t)));
    return e && i === e ? i - 1 : i;
  }, "_animationCycle"),
  xo = a(function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  }, "_parentToChildTotalTime"),
  Fo = a(function (e) {
    return (e._end = He(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || ut) || 0)
    ));
  }, "_setEnd"),
  qo = a(function (e, t) {
    var i = e._dp;
    return (
      i &&
        i.smoothChildTiming &&
        e._ts &&
        ((e._start = He(
          i._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        Fo(e),
        i._dirty || Mi(i, e)),
      e
    );
  }, "_alignPlayhead"),
  rf = a(function (e, t) {
    var i;
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((i = xo(e.rawTime(), t)),
        (!t._dur || Ls(0, t.totalDuration(), i) - t._tTime > ut) &&
          t.render(i, !0)),
      Mi(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (i = e; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      e._zTime = -1e-8;
    }
  }, "_postAddChecks"),
  dn = a(function (e, t, i, r) {
    return (
      t.parent && ri(t),
      (t._start = He(
        (zn(i) ? i : i || e !== Pe ? Wt(e, i, t) : e._time) + t._delay
      )),
      (t._end = He(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      nf(e, t, "_first", "_last", e._sort ? "_start" : 0),
      Da(t) || (e._recent = t),
      r || rf(e, t),
      e._ts < 0 && qo(e, e._tTime),
      e
    );
  }, "_addToTimeline"),
  sf = a(function (e, t) {
    return (
      (Nt.ScrollTrigger || Sl("scrollTrigger", t)) &&
      Nt.ScrollTrigger.create(t, e)
    );
  }, "_scrollTrigger"),
  of = a(function (e, t, i, r, s) {
    if ((kl(e, t, s), !e._initted)) return 1;
    if (
      !i &&
      e._pt &&
      !tt &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      Zu !== It.frame
    )
      return Jn.push(e), (e._lazy = [s, r]), 1;
  }, "_attemptInitTween"),
  ig = a(function n(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t));
  }, "_parentPlayheadIsBeforeStart"),
  Da = a(function (e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  }, "_isFromOrFromStart"),
  rg = a(function (e, t, i, r) {
    var s = e.ratio,
      o =
        t < 0 ||
        (!t &&
          ((!e._start && ig(e) && !(!e._initted && Da(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !Da(e))))
          ? 0
          : 1,
      l = e._rDelay,
      c = 0,
      u,
      f,
      d;
    if (
      (l &&
        e._repeat &&
        ((c = Ls(0, e._tDur, t)),
        (f = Pr(c, l)),
        e._yoyo && f & 1 && (o = 1 - o),
        f !== Pr(e._tTime, l) &&
          ((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
      o !== s || tt || r || e._zTime === ut || (!t && e._zTime))
    ) {
      if (!e._initted && of(e, t, r, i, c)) return;
      for (
        d = e._zTime,
          e._zTime = t || (i ? ut : 0),
          i || (i = t && !d),
          e.ratio = o,
          e._from && (o = 1 - o),
          e._time = 0,
          e._tTime = c,
          u = e._pt;
        u;

      )
        u.r(o, u.d), (u = u._next);
      t < 0 && Ia(e, t, i, !0),
        e._onUpdate && !i && zt(e, "onUpdate"),
        c && e._repeat && !i && e.parent && zt(e, "onRepeat"),
        (t >= e._tDur || t < 0) &&
          e.ratio === o &&
          (o && ri(e, 1),
          !i &&
            !tt &&
            (zt(e, o ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  }, "_renderZeroDurationTween"),
  sg = a(function (e, t, i) {
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
  kr = a(function (e, t, i, r) {
    var s = e._repeat,
      o = He(t) || 0,
      l = e._tTime / e._tDur;
    return (
      l && !r && (e._time *= o / e._dur),
      (e._dur = o),
      (e._tDur = s ? (s < 0 ? 1e10 : He(o * (s + 1) + e._rDelay * s)) : o),
      l > 0 && !r && qo(e, (e._tTime = e._tDur * l)),
      e.parent && Fo(e),
      i || Mi(e.parent, e),
      e
    );
  }, "_setDuration"),
  Tc = a(function (e) {
    return e instanceof yt ? Mi(e) : kr(e, e._dur);
  }, "_onUpdateTotalDuration"),
  og = { _start: 0, endTime: _s, totalDuration: _s },
  Wt = a(function n(e, t, i) {
    var r = e.labels,
      s = e._recent || og,
      o = e.duration() >= yn ? s.endTime(!1) : e._dur,
      l,
      c,
      u;
    return Ze(t) && (isNaN(t) || t in r)
      ? ((c = t.charAt(0)),
        (u = t.substr(-1) === "%"),
        (l = t.indexOf("=")),
        c === "<" || c === ">"
          ? (l >= 0 && (t = t.replace(/=/, "")),
            (c === "<" ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(t.substr(1)) || 0) *
                (u ? (l < 0 ? s : i).totalDuration() / 100 : 1))
          : l < 0
          ? (t in r || (r[t] = o), r[t])
          : ((c = parseFloat(t.charAt(l - 1) + t.substr(l + 1))),
            u && i && (c = (c / 100) * (ft(i) ? i[0] : i).totalDuration()),
            l > 1 ? n(e, t.substr(0, l - 1), i) + c : o + c))
      : t == null
      ? o
      : +t;
  }, "_parsePosition"),
  is = a(function (e, t, i) {
    var r = zn(t[1]),
      s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[s],
      l,
      c;
    if ((r && (o.duration = t[1]), (o.parent = i), e)) {
      for (l = o, c = i; c && !("immediateRender" in l); )
        (l = c.vars.defaults || {}), (c = St(c.vars.inherit) && c.parent);
      (o.immediateRender = St(l.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
    }
    return new qe(t[0], o, t[s + 1]);
  }, "_createTweenType"),
  ai = a(function (e, t) {
    return e || e === 0 ? t(e) : t;
  }, "_conditionalReturn"),
  Ls = a(function (e, t, i) {
    return i < e ? e : i > t ? t : i;
  }, "_clamp"),
  lt = a(function (e, t) {
    return !Ze(e) || !(t = Um.exec(e)) ? "" : t[1];
  }, "getUnit"),
  ag = a(function (e, t, i) {
    return ai(i, function (r) {
      return Ls(e, t, r);
    });
  }, "clamp"),
  za = [].slice,
  af = a(function (e, t) {
    return (
      e &&
      xn(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && xn(e[0]))) &&
      !e.nodeType &&
      e !== un
    );
  }, "_isArrayLike"),
  lg = a(function (e, t, i) {
    return (
      i === void 0 && (i = []),
      e.forEach(function (r) {
        var s;
        return (Ze(r) && !t) || af(r, 1)
          ? (s = i).push.apply(s, Gt(r))
          : i.push(r);
      }) || i
    );
  }, "_flatten"),
  Gt = a(function (e, t, i) {
    return Se && !t && Se.selector
      ? Se.selector(e)
      : Ze(e) && !i && (Oa || !Mr())
      ? za.call((t || xl).querySelectorAll(e), 0)
      : ft(e)
      ? lg(e, i)
      : af(e)
      ? za.call(e, 0)
      : e
      ? [e]
      : [];
  }, "toArray"),
  Ra = a(function (e) {
    return (
      (e = Gt(e)[0] || bs("Invalid scope") || {}),
      function (t) {
        var i = e.current || e.nativeElement || e;
        return Gt(
          t,
          i.querySelectorAll
            ? i
            : i === e
            ? bs("Invalid scope") || xl.createElement("div")
            : e
        );
      }
    );
  }, "selector"),
  lf = a(function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  }, "shuffle"),
  cf = a(function (e) {
    if (Ae(e)) return e;
    var t = xn(e) ? e : { each: e },
      i = Ai(t.ease),
      r = t.from || 0,
      s = parseFloat(t.base) || 0,
      o = {},
      l = r > 0 && r < 1,
      c = isNaN(r) || l,
      u = t.axis,
      f = r,
      d = r;
    return (
      Ze(r)
        ? (f = d = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !l && c && ((f = r[0]), (d = r[1])),
      function (h, p, g) {
        var m = (g || t).length,
          v = o[m],
          b,
          y,
          _,
          S,
          T,
          w,
          C,
          P,
          L;
        if (!v) {
          if (((L = t.grid === "auto" ? 0 : (t.grid || [1, yn])[1]), !L)) {
            for (
              C = -1e8;
              C < (C = g[L++].getBoundingClientRect().left) && L < m;

            );
            L < m && L--;
          }
          for (
            v = o[m] = [],
              b = c ? Math.min(L, m) * f - 0.5 : r % L,
              y = L === yn ? 0 : c ? (m * d) / L - 0.5 : (r / L) | 0,
              C = 0,
              P = yn,
              w = 0;
            w < m;
            w++
          )
            (_ = (w % L) - b),
              (S = y - ((w / L) | 0)),
              (v[w] = T = u ? Math.abs(u === "y" ? S : _) : Vu(_ * _ + S * S)),
              T > C && (C = T),
              T < P && (P = T);
          r === "random" && lf(v),
            (v.max = C - P),
            (v.min = P),
            (v.v = m =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (L > m
                    ? m - 1
                    : u
                    ? u === "y"
                      ? m / L
                      : L
                    : Math.max(L, m / L)) ||
                0) * (r === "edges" ? -1 : 1)),
            (v.b = m < 0 ? s - m : s),
            (v.u = lt(t.amount || t.each) || 0),
            (i = i && m < 0 ? bf(i) : i);
        }
        return (
          (m = (v[h] - v.min) / v.max || 0),
          He(v.b + (i ? i(m) : m) * v.v) + v.u
        );
      }
    );
  }, "distribute"),
  Na = a(function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (i) {
      var r = He(Math.round(parseFloat(i) / e) * e * t);
      return (r - (r % 1)) / t + (zn(i) ? 0 : lt(i));
    };
  }, "_roundModifier"),
  uf = a(function (e, t) {
    var i = ft(e),
      r,
      s;
    return (
      !i &&
        xn(e) &&
        ((r = i = e.radius || yn),
        e.values
          ? ((e = Gt(e.values)), (s = !zn(e[0])) && (r *= r))
          : (e = Na(e.increment))),
      ai(
        t,
        i
          ? Ae(e)
            ? function (o) {
                return (s = e(o)), Math.abs(s - o) <= r ? s : o;
              }
            : function (o) {
                for (
                  var l = parseFloat(s ? o.x : o),
                    c = parseFloat(s ? o.y : 0),
                    u = yn,
                    f = 0,
                    d = e.length,
                    h,
                    p;
                  d--;

                )
                  s
                    ? ((h = e[d].x - l), (p = e[d].y - c), (h = h * h + p * p))
                    : (h = Math.abs(e[d] - l)),
                    h < u && ((u = h), (f = d));
                return (
                  (f = !r || u <= r ? e[f] : o),
                  s || f === o || zn(o) ? f : f + lt(o)
                );
              }
          : Na(e)
      )
    );
  }, "snap"),
  ff = a(function (e, t, i, r) {
    return ai(ft(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
      return ft(e)
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
  cg = a(function () {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return function (r) {
      return t.reduce(function (s, o) {
        return o(s);
      }, r);
    };
  }, "pipe"),
  ug = a(function (e, t) {
    return function (i) {
      return e(parseFloat(i)) + (t || lt(i));
    };
  }, "unitize"),
  fg = a(function (e, t, i) {
    return hf(e, t, 0, 1, i);
  }, "normalize"),
  df = a(function (e, t, i) {
    return ai(i, function (r) {
      return e[~~t(r)];
    });
  }, "_wrapArray"),
  dg = a(function n(e, t, i) {
    var r = t - e;
    return ft(e)
      ? df(e, n(0, e.length), t)
      : ai(i, function (s) {
          return ((r + ((s - e) % r)) % r) + e;
        });
  }, "wrap"),
  hg = a(function n(e, t, i) {
    var r = t - e,
      s = r * 2;
    return ft(e)
      ? df(e, n(0, e.length - 1), t)
      : ai(i, function (o) {
          return (o = (s + ((o - e) % s)) % s || 0), e + (o > r ? s - o : o);
        });
  }, "wrapYoyo"),
  xs = a(function (e) {
    for (var t = 0, i = "", r, s, o, l; ~(r = e.indexOf("random(", t)); )
      (o = e.indexOf(")", r)),
        (l = e.charAt(r + 7) === "["),
        (s = e.substr(r + 7, o - r - 7).match(l ? Gu : $a)),
        (i +=
          e.substr(t, r - t) + ff(l ? s : +s[0], l ? 0 : +s[1], +s[2] || 1e-5)),
        (t = o + 1);
    return i + e.substr(t, e.length - t);
  }, "_replaceRandom"),
  hf = a(function (e, t, i, r, s) {
    var o = t - e,
      l = r - i;
    return ai(s, function (c) {
      return i + (((c - e) / o) * l || 0);
    });
  }, "mapRange"),
  pg = a(function n(e, t, i, r) {
    var s = isNaN(e + t)
      ? 0
      : function (p) {
          return (1 - p) * e + p * t;
        };
    if (!s) {
      var o = Ze(e),
        l = {},
        c,
        u,
        f,
        d,
        h;
      if ((i === !0 && (r = 1) && (i = null), o))
        (e = { p: e }), (t = { p: t });
      else if (ft(e) && !ft(t)) {
        for (f = [], d = e.length, h = d - 2, u = 1; u < d; u++)
          f.push(n(e[u - 1], e[u]));
        d--,
          (s = a(function (g) {
            g *= d;
            var m = Math.min(h, ~~g);
            return f[m](g - m);
          }, "func")),
          (i = t);
      } else r || (e = Cr(ft(e) ? [] : {}, e));
      if (!f) {
        for (c in t) Pl.call(l, e, c, "get", t[c]);
        s = a(function (g) {
          return $l(g, l) || (o ? e.p : e);
        }, "func");
      }
    }
    return ai(i, s);
  }, "interpolate"),
  Ec = a(function (e, t, i) {
    var r = e.labels,
      s = yn,
      o,
      l,
      c;
    for (o in r)
      (l = r[o] - t),
        l < 0 == !!i && l && s > (l = Math.abs(l)) && ((c = o), (s = l));
    return c;
  }, "_getLabelInDirection"),
  zt = a(function (e, t, i) {
    var r = e.vars,
      s = r[t],
      o = Se,
      l = e._ctx,
      c,
      u,
      f;
    if (s)
      return (
        (c = r[t + "Params"]),
        (u = r.callbackScope || e),
        i && Jn.length && bo(),
        l && (Se = l),
        (f = c ? s.apply(u, c) : s.call(u)),
        (Se = o),
        f
      );
  }, "_callback"),
  Gr = a(function (e) {
    return (
      ri(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!tt),
      e.progress() < 1 && zt(e, "onInterrupt"),
      e
    );
  }, "_interrupt"),
  or,
  pf = [],
  mf = a(function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), _l() || e.headless)) {
        var t = e.name,
          i = Ae(e),
          r =
            t && !i && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          s = {
            init: _s,
            render: $l,
            add: Pl,
            kill: Ag,
            modifier: Mg,
            rawVars: 0,
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: Al,
            aliases: {},
            register: 0,
          };
        if ((Mr(), e !== r)) {
          if ($t[t]) return;
          Bt(r, Bt(_o(e, s), o)),
            Cr(r.prototype, Cr(s, _o(e, o))),
            ($t[(r.prop = t)] = r),
            e.targetTest && (io.push(r), (Tl[t] = 1)),
            (t =
              (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
              "Plugin");
        }
        Ku(t, r), e.register && e.register(Ct, r, Et);
      } else pf.push(e);
  }, "_createPlugin"),
  ve = 255,
  jr = {
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
  ia = a(function (e, t, i) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (i - t) * e * 6
        : e < 0.5
        ? i
        : e * 3 < 2
        ? t + (i - t) * (2 / 3 - e) * 6
        : t) *
        ve +
        0.5) |
        0
    );
  }, "_hue"),
  gf = a(function (e, t, i) {
    var r = e ? (zn(e) ? [e >> 16, (e >> 8) & ve, e & ve] : 0) : jr.black,
      s,
      o,
      l,
      c,
      u,
      f,
      d,
      h,
      p,
      g;
    if (!r) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), jr[e]))
        r = jr[e];
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
            [r >> 16, (r >> 8) & ve, r & ve, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (r = [e >> 16, (e >> 8) & ve, e & ve]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((r = g = e.match($a)), !t))
          (c = (+r[0] % 360) / 360),
            (u = +r[1] / 100),
            (f = +r[2] / 100),
            (o = f <= 0.5 ? f * (u + 1) : f + u - f * u),
            (s = f * 2 - o),
            r.length > 3 && (r[3] *= 1),
            (r[0] = ia(c + 1 / 3, s, o)),
            (r[1] = ia(c, s, o)),
            (r[2] = ia(c - 1 / 3, s, o));
        else if (~e.indexOf("="))
          return (r = e.match(Xu)), i && r.length < 4 && (r[3] = 1), r;
      } else r = e.match($a) || jr.transparent;
      r = r.map(Number);
    }
    return (
      t &&
        !g &&
        ((s = r[0] / ve),
        (o = r[1] / ve),
        (l = r[2] / ve),
        (d = Math.max(s, o, l)),
        (h = Math.min(s, o, l)),
        (f = (d + h) / 2),
        d === h
          ? (c = u = 0)
          : ((p = d - h),
            (u = f > 0.5 ? p / (2 - d - h) : p / (d + h)),
            (c =
              d === s
                ? (o - l) / p + (o < l ? 6 : 0)
                : d === o
                ? (l - s) / p + 2
                : (s - o) / p + 4),
            (c *= 60)),
        (r[0] = ~~(c + 0.5)),
        (r[1] = ~~(u * 100 + 0.5)),
        (r[2] = ~~(f * 100 + 0.5))),
      i && r.length < 4 && (r[3] = 1),
      r
    );
  }, "splitColor"),
  vf = a(function (e) {
    var t = [],
      i = [],
      r = -1;
    return (
      e.split(ei).forEach(function (s) {
        var o = s.match(sr) || [];
        t.push.apply(t, o), i.push((r += o.length + 1));
      }),
      (t.c = i),
      t
    );
  }, "_colorOrderData"),
  wc = a(function (e, t, i) {
    var r = "",
      s = (e + r).match(ei),
      o = t ? "hsla(" : "rgba(",
      l = 0,
      c,
      u,
      f,
      d;
    if (!s) return e;
    if (
      ((s = s.map(function (h) {
        return (
          (h = gf(h, t, 1)) &&
          o +
            (t ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) +
            ")"
        );
      })),
      i && ((f = vf(e)), (c = i.c), c.join(r) !== f.c.join(r)))
    )
      for (u = e.replace(ei, "1").split(sr), d = u.length - 1; l < d; l++)
        r +=
          u[l] +
          (~c.indexOf(l)
            ? s.shift() || o + "0,0,0,0)"
            : (f.length ? f : s.length ? s : i).shift());
    if (!u)
      for (u = e.split(ei), d = u.length - 1; l < d; l++) r += u[l] + s[l];
    return r + u[d];
  }, "_formatColors"),
  ei = (function () {
    var n =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in jr) n += "|" + e + "\\b";
    return new RegExp(n + ")", "gi");
  })(),
  mg = /hsl[a]?\(/,
  yf = a(function (e) {
    var t = e.join(" "),
      i;
    if (((ei.lastIndex = 0), ei.test(t)))
      return (
        (i = mg.test(t)),
        (e[1] = wc(e[1], i)),
        (e[0] = wc(e[0], i, vf(e[1]))),
        !0
      );
  }, "_colorStringFilter"),
  Ss,
  It = (function () {
    var n = Date.now,
      e = 500,
      t = 33,
      i = n(),
      r = i,
      s = 1e3 / 240,
      o = s,
      l = [],
      c,
      u,
      f,
      d,
      h,
      p,
      g = a(function m(v) {
        var b = n() - r,
          y = v === !0,
          _,
          S,
          T,
          w;
        if (
          ((b > e || b < 0) && (i += b - t),
          (r += b),
          (T = r - i),
          (_ = T - o),
          (_ > 0 || y) &&
            ((w = ++d.frame),
            (h = T - d.time * 1e3),
            (d.time = T = T / 1e3),
            (o += _ + (_ >= s ? 4 : s - _)),
            (S = 1)),
          y || (c = u(m)),
          S)
        )
          for (p = 0; p < l.length; p++) l[p](T, h, w, v);
      }, "_tick");
    return (
      (d = {
        time: 0,
        frame: 0,
        tick: a(function () {
          g(!0);
        }, "tick"),
        deltaRatio: a(function (v) {
          return h / (1e3 / (v || 60));
        }, "deltaRatio"),
        wake: a(function () {
          ju &&
            (!Oa &&
              _l() &&
              ((un = Oa = window),
              (xl = un.document || {}),
              (Nt.gsap = Ct),
              (un.gsapVersions || (un.gsapVersions = [])).push(Ct.version),
              Uu(yo || un.GreenSockGlobals || (!un.gsap && un) || {}),
              pf.forEach(mf)),
            (f = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            c && d.sleep(),
            (u =
              f ||
              function (v) {
                return setTimeout(v, (o - d.time * 1e3 + 1) | 0);
              }),
            (Ss = 1),
            g(2));
        }, "wake"),
        sleep: a(function () {
          (f ? cancelAnimationFrame : clearTimeout)(c), (Ss = 0), (u = _s);
        }, "sleep"),
        lagSmoothing: a(function (v, b) {
          (e = v || 1 / 0), (t = Math.min(b || 33, e));
        }, "lagSmoothing"),
        fps: a(function (v) {
          (s = 1e3 / (v || 240)), (o = d.time * 1e3 + s);
        }, "fps"),
        add: a(function (v, b, y) {
          var _ = b
            ? function (S, T, w, C) {
                v(S, T, w, C), d.remove(_);
              }
            : v;
          return d.remove(v), l[y ? "unshift" : "push"](_), Mr(), _;
        }, "add"),
        remove: a(function (v, b) {
          ~(b = l.indexOf(v)) && l.splice(b, 1) && p >= b && p--;
        }, "remove"),
        _listeners: l,
      }),
      d
    );
  })(),
  Mr = a(function () {
    return !Ss && It.wake();
  }, "_wake"),
  ue = {},
  gg = /^[\d.\-M][\d.\-,\s]/,
  vg = /["']/g,
  yg = a(function (e) {
    for (
      var t = {},
        i = e.substr(1, e.length - 3).split(":"),
        r = i[0],
        s = 1,
        o = i.length,
        l,
        c,
        u;
      s < o;
      s++
    )
      (c = i[s]),
        (l = s !== o - 1 ? c.lastIndexOf(",") : c.length),
        (u = c.substr(0, l)),
        (t[r] = isNaN(u) ? u.replace(vg, "").trim() : +u),
        (r = c.substr(l + 1).trim());
    return t;
  }, "_parseObjectInString"),
  bg = a(function (e) {
    var t = e.indexOf("(") + 1,
      i = e.indexOf(")"),
      r = e.indexOf("(", t);
    return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
  }, "_valueInParentheses"),
  _g = a(function (e) {
    var t = (e + "").split("("),
      i = ue[t[0]];
    return i && t.length > 1 && i.config
      ? i.config.apply(
          null,
          ~e.indexOf("{") ? [yg(t[1])] : bg(e).split(",").map(ef)
        )
      : ue._CE && gg.test(e)
      ? ue._CE("", e)
      : i;
  }, "_configEaseFromString"),
  bf = a(function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  }, "_invertEase"),
  _f = a(function n(e, t) {
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
  Ai = a(function (e, t) {
    return (e && (Ae(e) ? e : ue[e] || _g(e))) || t;
  }, "_parseEase"),
  Xi = a(function (e, t, i, r) {
    i === void 0 &&
      (i = a(function (c) {
        return 1 - t(1 - c);
      }, "easeOut")),
      r === void 0 &&
        (r = a(function (c) {
          return c < 0.5 ? t(c * 2) / 2 : 1 - t((1 - c) * 2) / 2;
        }, "easeInOut"));
    var s = { easeIn: t, easeOut: i, easeInOut: r },
      o;
    return (
      Tt(e, function (l) {
        (ue[l] = Nt[l] = s), (ue[(o = l.toLowerCase())] = i);
        for (var c in s)
          ue[
            o + (c === "easeIn" ? ".in" : c === "easeOut" ? ".out" : ".inOut")
          ] = ue[l + "." + c] = s[c];
      }),
      s
    );
  }, "_insertEase"),
  xf = a(function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  }, "_easeInOutFromOut"),
  ra = a(function n(e, t, i) {
    var r = t >= 1 ? t : 1,
      s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      o = (s / Aa) * (Math.asin(1 / r) || 0),
      l = a(function (f) {
        return f === 1 ? 1 : r * Math.pow(2, -10 * f) * jm((f - o) * s) + 1;
      }, "easeOut"),
      c =
        e === "out"
          ? l
          : e === "in"
          ? function (u) {
              return 1 - l(1 - u);
            }
          : xf(l);
    return (
      (s = Aa / s),
      (c.config = function (u, f) {
        return n(e, u, f);
      }),
      c
    );
  }, "_configElastic"),
  sa = a(function n(e, t) {
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
          : xf(i);
    return (
      (r.config = function (s) {
        return n(e, s);
      }),
      r
    );
  }, "_configBack");
Tt("Linear,Quad,Cubic,Quart,Quint,Strong", function (n, e) {
  var t = e < 5 ? e + 1 : e;
  Xi(
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
ue.Linear.easeNone = ue.none = ue.Linear.easeIn;
Xi("Elastic", ra("in"), ra("out"), ra());
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
  Xi(
    "Bounce",
    function (o) {
      return 1 - s(1 - o);
    },
    s
  );
})(7.5625, 2.75);
Xi("Expo", function (n) {
  return Math.pow(2, 10 * (n - 1)) * n + n * n * n * n * n * n * (1 - n);
});
Xi("Circ", function (n) {
  return -(Vu(1 - n * n) - 1);
});
Xi("Sine", function (n) {
  return n === 1 ? 1 : -Gm(n * Xm) + 1;
});
Xi("Back", sa("in"), sa("out"), sa());
ue.SteppedEase =
  ue.steps =
  Nt.SteppedEase =
    {
      config: a(function (e, t) {
        e === void 0 && (e = 1);
        var i = 1 / e,
          r = e + (t ? 0 : 1),
          s = t ? 1 : 0,
          o = 1 - ut;
        return function (l) {
          return (((r * Ls(0, o, l)) | 0) + s) * i;
        };
      }, "config"),
    };
wr.ease = ue["quad.out"];
Tt(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (n) {
    return (El += n + "," + n + "Params,");
  }
);
var Sf = a(function (e, t) {
    (this.id = Ym++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : Qu),
      (this.set = t ? t.getSetter : Al);
  }, "GSCache"),
  Ts = (function () {
    function n(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        kr(this, +t.duration, 1, 1),
        (this.data = t.data),
        Se && ((this._ctx = Se), Se.data.push(this)),
        Ss || It.wake();
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
            kr(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }, "totalDuration")),
      (e.totalTime = a(function (i, r) {
        if ((Mr(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (qo(this, i), !s._dp || s.parent || rf(s, this); s && s.parent; )
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
            dn(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === ut) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), Ju(this, i, r)),
          this
        );
      }, "totalTime")),
      (e.time = a(function (i, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + Sc(this)) %
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
                Sc(this),
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
          ? Pr(this._tTime, s) + 1
          : 1;
      }, "iteration")),
      (e.timeScale = a(function (i, r) {
        if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
        if (this._rts === i) return this;
        var s =
          this.parent && this._ts ? xo(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -1e-8 ? 0 : this._rts),
          this.totalTime(
            Ls(-Math.abs(this._delay), this.totalDuration(), s),
            r !== !1
          ),
          Fo(this),
          tg(this)
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
                : (Mr(),
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
            r && (r._sort || !this.parent) && dn(r, this, i - this._delay), this
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
            ? xo(r.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }, "rawTime")),
      (e.revert = a(function (i) {
        i === void 0 && (i = Zm);
        var r = tt;
        return (
          (tt = i),
          Cl(this) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (tt = r),
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
          ? ((this._repeat = i === 1 / 0 ? -2 : i), Tc(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }, "repeat")),
      (e.repeatDelay = a(function (i) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = i), Tc(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }, "repeatDelay")),
      (e.yoyo = a(function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }, "yoyo")),
      (e.seek = a(function (i, r) {
        return this.totalTime(Wt(this, i), St(r));
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
          var o = Ae(i) ? i : tf,
            l = a(function () {
              var u = r.then;
              (r.then = null),
                Ae(o) && (o = o(r)) && (o.then || o === r) && (r.then = u),
                s(o),
                (r.then = u);
            }, "_resolve");
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? l()
            : (r._prom = l);
        });
      }, "then")),
      (e.kill = a(function () {
        Gr(this);
      }, "kill")),
      n
    );
  })();
Bt(Ts.prototype, {
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
  Hu(e, n);
  function e(i, r) {
    var s;
    return (
      i === void 0 && (i = {}),
      (s = n.call(this, i) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!i.smoothChildTiming),
      (s.autoRemoveChildren = !!i.autoRemoveChildren),
      (s._sort = St(i.sortChildren)),
      Pe && dn(i.parent || Pe, Cn(s), r),
      i.reversed && s.reverse(),
      i.paused && s.paused(!0),
      i.scrollTrigger && sf(Cn(s), i.scrollTrigger),
      s
    );
  }
  a(e, "Timeline");
  var t = e.prototype;
  return (
    (t.to = a(function (r, s, o) {
      return is(0, arguments, this), this;
    }, "to")),
    (t.from = a(function (r, s, o) {
      return is(1, arguments, this), this;
    }, "from")),
    (t.fromTo = a(function (r, s, o, l) {
      return is(2, arguments, this), this;
    }, "fromTo")),
    (t.set = a(function (r, s, o) {
      return (
        (s.duration = 0),
        (s.parent = this),
        ns(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new qe(r, s, Wt(this, o), 1),
        this
      );
    }, "set")),
    (t.call = a(function (r, s, o) {
      return dn(this, qe.delayedCall(0, r, s), o);
    }, "call")),
    (t.staggerTo = a(function (r, s, o, l, c, u, f) {
      return (
        (o.duration = s),
        (o.stagger = o.stagger || l),
        (o.onComplete = u),
        (o.onCompleteParams = f),
        (o.parent = this),
        new qe(r, o, Wt(this, c)),
        this
      );
    }, "staggerTo")),
    (t.staggerFrom = a(function (r, s, o, l, c, u, f) {
      return (
        (o.runBackwards = 1),
        (ns(o).immediateRender = St(o.immediateRender)),
        this.staggerTo(r, s, o, l, c, u, f)
      );
    }, "staggerFrom")),
    (t.staggerFromTo = a(function (r, s, o, l, c, u, f, d) {
      return (
        (l.startAt = o),
        (ns(l).immediateRender = St(l.immediateRender)),
        this.staggerTo(r, s, l, c, u, f, d)
      );
    }, "staggerFromTo")),
    (t.render = a(function (r, s, o) {
      var l = this._time,
        c = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        f = r <= 0 ? 0 : He(r),
        d = this._zTime < 0 != r < 0 && (this._initted || !u),
        h,
        p,
        g,
        m,
        v,
        b,
        y,
        _,
        S,
        T,
        w,
        C;
      if (
        (this !== Pe && f > c && r >= 0 && (f = c), f !== this._tTime || o || d)
      ) {
        if (
          (l !== this._time &&
            u &&
            ((f += this._time - l), (r += this._time - l)),
          (h = f),
          (S = this._start),
          (_ = this._ts),
          (b = !_),
          d && (u || (l = this._zTime), (r || !s) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((w = this._yoyo),
            (v = u + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(v * 100 + r, s, o);
          if (
            ((h = He(f % v)),
            f === c
              ? ((m = this._repeat), (h = u))
              : ((T = He(f / v)),
                (m = ~~T),
                m && m === T && ((h = u), m--),
                h > u && (h = u)),
            (T = Pr(this._tTime, v)),
            !l &&
              this._tTime &&
              T !== m &&
              this._tTime - T * v - this._dur <= 0 &&
              (T = m),
            w && m & 1 && ((h = u - h), (C = 1)),
            m !== T && !this._lock)
          ) {
            var P = w && T & 1,
              L = P === (w && m & 1);
            if (
              (m < T && (P = !P),
              (l = P ? 0 : f % u ? u : f),
              (this._lock = 1),
              (this.render(l || (C ? 0 : He(m * v)), s, !u)._lock = 0),
              (this._tTime = f),
              !s && this.parent && zt(this, "onRepeat"),
              this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1),
              (l && l !== this._time) ||
                b !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (c = this._tDur),
              L &&
                ((this._lock = 2),
                (l = P ? u : -1e-4),
                this.render(l, !0),
                this.vars.repeatRefresh && !C && this.invalidate()),
              (this._lock = 0),
              !this._ts && !b)
            )
              return this;
            _f(this, C);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((y = sg(this, He(l), He(h))), y && (f -= h - (h = y._start))),
          (this._tTime = f),
          (this._time = h),
          (this._act = !_),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (l = 0)),
          !l && f && !s && !T && (zt(this, "onStart"), this._tTime !== f))
        )
          return this;
        if (h >= l && r >= 0)
          for (p = this._first; p; ) {
            if (
              ((g = p._next), (p._act || h >= p._start) && p._ts && y !== p)
            ) {
              if (p.parent !== this) return this.render(r, s, o);
              if (
                (p.render(
                  p._ts > 0
                    ? (h - p._start) * p._ts
                    : (p._dirty ? p.totalDuration() : p._tDur) +
                        (h - p._start) * p._ts,
                  s,
                  o
                ),
                h !== this._time || (!this._ts && !b))
              ) {
                (y = 0), g && (f += this._zTime = -1e-8);
                break;
              }
            }
            p = g;
          }
        else {
          p = this._last;
          for (var k = r < 0 ? r : h; p; ) {
            if (((g = p._prev), (p._act || k <= p._end) && p._ts && y !== p)) {
              if (p.parent !== this) return this.render(r, s, o);
              if (
                (p.render(
                  p._ts > 0
                    ? (k - p._start) * p._ts
                    : (p._dirty ? p.totalDuration() : p._tDur) +
                        (k - p._start) * p._ts,
                  s,
                  o || (tt && Cl(p))
                ),
                h !== this._time || (!this._ts && !b))
              ) {
                (y = 0), g && (f += this._zTime = k ? -1e-8 : ut);
                break;
              }
            }
            p = g;
          }
        }
        if (
          y &&
          !s &&
          (this.pause(),
          (y.render(h >= l ? 0 : -1e-8)._zTime = h >= l ? 1 : -1),
          this._ts)
        )
          return (this._start = S), Fo(this), this.render(r, s, o);
        this._onUpdate && !s && zt(this, "onUpdate", !0),
          ((f === c && this._tTime >= this.totalDuration()) || (!f && l)) &&
            (S === this._start || Math.abs(_) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !u) &&
                ((f === c && this._ts > 0) || (!f && this._ts < 0)) &&
                ri(this, 1),
              !s &&
                !(r < 0 && !l) &&
                (f || l || !c) &&
                (zt(
                  this,
                  f === c && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(f < c && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }, "render")),
    (t.add = a(function (r, s) {
      var o = this;
      if ((zn(s) || (s = Wt(this, s, r)), !(r instanceof Ts))) {
        if (ft(r))
          return (
            r.forEach(function (l) {
              return o.add(l, s);
            }),
            this
          );
        if (Ze(r)) return this.addLabel(r, s);
        if (Ae(r)) r = qe.delayedCall(0, r);
        else return this;
      }
      return this !== r ? dn(this, r, s) : this;
    }, "add")),
    (t.getChildren = a(function (r, s, o, l) {
      r === void 0 && (r = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        l === void 0 && (l = -1e8);
      for (var c = [], u = this._first; u; )
        u._start >= l &&
          (u instanceof qe
            ? s && c.push(u)
            : (o && c.push(u), r && c.push.apply(c, u.getChildren(!0, s, o)))),
          (u = u._next);
      return c;
    }, "getChildren")),
    (t.getById = a(function (r) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
        if (s[o].vars.id === r) return s[o];
    }, "getById")),
    (t.remove = a(function (r) {
      return Ze(r)
        ? this.removeLabel(r)
        : Ae(r)
        ? this.killTweensOf(r)
        : (r.parent === this && Bo(this, r),
          r === this._recent && (this._recent = this._last),
          Mi(this));
    }, "remove")),
    (t.totalTime = a(function (r, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = He(
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
      return (this.labels[r] = Wt(this, s)), this;
    }, "addLabel")),
    (t.removeLabel = a(function (r) {
      return delete this.labels[r], this;
    }, "removeLabel")),
    (t.addPause = a(function (r, s, o) {
      var l = qe.delayedCall(0, s || _s, o);
      return (
        (l.data = "isPause"), (this._hasPause = 1), dn(this, l, Wt(this, r))
      );
    }, "addPause")),
    (t.removePause = a(function (r) {
      var s = this._first;
      for (r = Wt(this, r); s; )
        s._start === r && s.data === "isPause" && ri(s), (s = s._next);
    }, "removePause")),
    (t.killTweensOf = a(function (r, s, o) {
      for (var l = this.getTweensOf(r, o), c = l.length; c--; )
        jn !== l[c] && l[c].kill(r, s);
      return this;
    }, "killTweensOf")),
    (t.getTweensOf = a(function (r, s) {
      for (var o = [], l = Gt(r), c = this._first, u = zn(s), f; c; )
        c instanceof qe
          ? Qm(c._targets, l) &&
            (u
              ? (!jn || (c._initted && c._ts)) &&
                c.globalTime(0) <= s &&
                c.globalTime(c.totalDuration()) > s
              : !s || c.isActive()) &&
            o.push(c)
          : (f = c.getTweensOf(l, s)).length && o.push.apply(o, f),
          (c = c._next);
      return o;
    }, "getTweensOf")),
    (t.tweenTo = a(function (r, s) {
      s = s || {};
      var o = this,
        l = Wt(o, r),
        c = s,
        u = c.startAt,
        f = c.onStart,
        d = c.onStartParams,
        h = c.immediateRender,
        p,
        g = qe.to(
          o,
          Bt(
            {
              ease: s.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: l,
              overwrite: "auto",
              duration:
                s.duration ||
                Math.abs(
                  (l - (u && "time" in u ? u.time : o._time)) / o.timeScale()
                ) ||
                ut,
              onStart: a(function () {
                if ((o.pause(), !p)) {
                  var v =
                    s.duration ||
                    Math.abs(
                      (l - (u && "time" in u ? u.time : o._time)) /
                        o.timeScale()
                    );
                  g._dur !== v && kr(g, v, 0, 1).render(g._time, !0, !0),
                    (p = 1);
                }
                f && f.apply(g, d || []);
              }, "onStart"),
            },
            s
          )
        );
      return h ? g.render(0) : g;
    }, "tweenTo")),
    (t.tweenFromTo = a(function (r, s, o) {
      return this.tweenTo(s, Bt({ startAt: { time: Wt(this, r) } }, o));
    }, "tweenFromTo")),
    (t.recent = a(function () {
      return this._recent;
    }, "recent")),
    (t.nextLabel = a(function (r) {
      return r === void 0 && (r = this._time), Ec(this, Wt(this, r));
    }, "nextLabel")),
    (t.previousLabel = a(function (r) {
      return r === void 0 && (r = this._time), Ec(this, Wt(this, r), 1);
    }, "previousLabel")),
    (t.currentLabel = a(function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + ut);
    }, "currentLabel")),
    (t.shiftChildren = a(function (r, s, o) {
      o === void 0 && (o = 0);
      for (var l = this._first, c = this.labels, u; l; )
        l._start >= o && ((l._start += r), (l._end += r)), (l = l._next);
      if (s) for (u in c) c[u] >= o && (c[u] += r);
      return Mi(this);
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
        Mi(this)
      );
    }, "clear")),
    (t.totalDuration = a(function (r) {
      var s = 0,
        o = this,
        l = o._last,
        c = yn,
        u,
        f,
        d;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -r : r)
        );
      if (o._dirty) {
        for (d = o.parent; l; )
          (u = l._prev),
            l._dirty && l.totalDuration(),
            (f = l._start),
            f > c && o._sort && l._ts && !o._lock
              ? ((o._lock = 1), (dn(o, l, f - l._delay, 1)._lock = 0))
              : (c = f),
            f < 0 &&
              l._ts &&
              ((s -= f),
              ((!d && !o._dp) || (d && d.smoothChildTiming)) &&
                ((o._start += f / o._ts), (o._time -= f), (o._tTime -= f)),
              o.shiftChildren(-f, !1, -1 / 0),
              (c = 0)),
            l._end > s && l._ts && (s = l._end),
            (l = u);
        kr(o, o === Pe && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }, "totalDuration")),
    (e.updateRoot = a(function (r) {
      if ((Pe._ts && (Ju(Pe, xo(r, Pe)), (Zu = It.frame)), It.frame >= _c)) {
        _c += Rt.autoSleep || 120;
        var s = Pe._first;
        if ((!s || !s._ts) && Rt.autoSleep && It._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || It.sleep();
        }
      }
    }, "updateRoot")),
    e
  );
})(Ts);
Bt(yt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var xg = a(function (e, t, i, r, s, o, l) {
    var c = new Et(this._pt, e, t, 0, 1, kf, null, s),
      u = 0,
      f = 0,
      d,
      h,
      p,
      g,
      m,
      v,
      b,
      y;
    for (
      c.b = i,
        c.e = r,
        i += "",
        r += "",
        (b = ~r.indexOf("random(")) && (r = xs(r)),
        o && ((y = [i, r]), o(y, e, t), (i = y[0]), (r = y[1])),
        h = i.match(ta) || [];
      (d = ta.exec(r));

    )
      (g = d[0]),
        (m = r.substring(u, d.index)),
        p ? (p = (p + 1) % 5) : m.substr(-5) === "rgba(" && (p = 1),
        g !== h[f++] &&
          ((v = parseFloat(h[f - 1]) || 0),
          (c._pt = {
            _next: c._pt,
            p: m || f === 1 ? m : ",",
            s: v,
            c: g.charAt(1) === "=" ? dr(v, g) - v : parseFloat(g) - v,
            m: p && p < 4 ? Math.round : 0,
          }),
          (u = ta.lastIndex));
    return (
      (c.c = u < r.length ? r.substring(u, r.length) : ""),
      (c.fp = l),
      (Yu.test(r) || b) && (c.e = 0),
      (this._pt = c),
      c
    );
  }, "_addComplexStringPropTween"),
  Pl = a(function (e, t, i, r, s, o, l, c, u, f) {
    Ae(r) && (r = r(s || 0, e, o));
    var d = e[t],
      h =
        i !== "get"
          ? i
          : Ae(d)
          ? u
            ? e[
                t.indexOf("set") || !Ae(e["get" + t.substr(3)])
                  ? t
                  : "get" + t.substr(3)
              ](u)
            : e[t]()
          : d,
      p = Ae(d) ? (u ? Cg : Cf) : Ml,
      g;
    if (
      (Ze(r) &&
        (~r.indexOf("random(") && (r = xs(r)),
        r.charAt(1) === "=" &&
          ((g = dr(h, r) + (lt(h) || 0)), (g || g === 0) && (r = g))),
      !f || h !== r || Ba)
    )
      return !isNaN(h * r) && r !== ""
        ? ((g = new Et(
            this._pt,
            e,
            t,
            +h || 0,
            r - (h || 0),
            typeof d == "boolean" ? kg : Pf,
            0,
            p
          )),
          u && (g.fp = u),
          l && g.modifier(l, this, e),
          (this._pt = g))
        : (!d && !(t in e) && Sl(t, r),
          xg.call(this, e, t, h, r, p, c || Rt.stringFilter, u));
  }, "_addPropTween"),
  Sg = a(function (e, t, i, r, s) {
    if (
      (Ae(e) && (e = rs(e, s, t, i, r)),
      !xn(e) || (e.style && e.nodeType) || ft(e) || Wu(e))
    )
      return Ze(e) ? rs(e, s, t, i, r) : e;
    var o = {},
      l;
    for (l in e) o[l] = rs(e[l], s, t, i, r);
    return o;
  }, "_processVars"),
  Tf = a(function (e, t, i, r, s, o) {
    var l, c, u, f;
    if (
      $t[e] &&
      (l = new $t[e]()).init(
        s,
        l.rawVars ? t[e] : Sg(t[e], r, s, o, i),
        i,
        r,
        o
      ) !== !1 &&
      ((i._pt = c = new Et(i._pt, s, e, 0, 1, l.render, l, 0, l.priority)),
      i !== or)
    )
      for (u = i._ptLookup[i._targets.indexOf(s)], f = l._props.length; f--; )
        u[l._props[f]] = c;
    return l;
  }, "_checkPlugin"),
  jn,
  Ba,
  kl = a(function n(e, t, i) {
    var r = e.vars,
      s = r.ease,
      o = r.startAt,
      l = r.immediateRender,
      c = r.lazy,
      u = r.onUpdate,
      f = r.runBackwards,
      d = r.yoyoEase,
      h = r.keyframes,
      p = r.autoRevert,
      g = e._dur,
      m = e._startAt,
      v = e._targets,
      b = e.parent,
      y = b && b.data === "nested" ? b.vars.targets : v,
      _ = e._overwrite === "auto" && !yl,
      S = e.timeline,
      T,
      w,
      C,
      P,
      L,
      k,
      $,
      x,
      E,
      O,
      I,
      M,
      D;
    if (
      (S && (!h || !s) && (s = "none"),
      (e._ease = Ai(s, wr.ease)),
      (e._yEase = d ? bf(Ai(d === !0 ? s : d, wr.ease)) : 0),
      d &&
        e._yoyo &&
        !e._repeat &&
        ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
      (e._from = !S && !!r.runBackwards),
      !S || (h && !r.stagger))
    ) {
      if (
        ((x = v[0] ? ki(v[0]).harness : 0),
        (M = x && r[x.prop]),
        (T = _o(r, Tl)),
        m &&
          (m._zTime < 0 && m.progress(1),
          t < 0 && f && l && !p ? m.render(-1, !0) : m.revert(f && g ? no : Km),
          (m._lazy = 0)),
        o)
      ) {
        if (
          (ri(
            (e._startAt = qe.set(
              v,
              Bt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: b,
                  immediateRender: !0,
                  lazy: !m && St(c),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    u &&
                    function () {
                      return zt(e, "onUpdate");
                    },
                  stagger: 0,
                },
                o
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (tt || (!l && !p)) && e._startAt.revert(no),
          l && g && t <= 0 && i <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (f && g && !m) {
        if (
          (t && (l = !1),
          (C = Bt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: l && !m && St(c),
              immediateRender: l,
              stagger: 0,
              parent: b,
            },
            T
          )),
          M && (C[x.prop] = M),
          ri((e._startAt = qe.set(v, C))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (tt ? e._startAt.revert(no) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !l)
        )
          n(e._startAt, ut, ut);
        else if (!t) return;
      }
      for (
        e._pt = e._ptCache = 0, c = (g && St(c)) || (c && !g), w = 0;
        w < v.length;
        w++
      ) {
        if (
          ((L = v[w]),
          ($ = L._gsap || wl(v)[w]._gsap),
          (e._ptLookup[w] = O = {}),
          La[$.id] && Jn.length && bo(),
          (I = y === v ? w : y.indexOf(L)),
          x &&
            (E = new x()).init(L, M || T, e, I, y) !== !1 &&
            ((e._pt = P =
              new Et(e._pt, L, E.name, 0, 1, E.render, E, 0, E.priority)),
            E._props.forEach(function (z) {
              O[z] = P;
            }),
            E.priority && (k = 1)),
          !x || M)
        )
          for (C in T)
            $t[C] && (E = Tf(C, T, e, I, L, y))
              ? E.priority && (k = 1)
              : (O[C] = P =
                  Pl.call(e, L, C, "get", T[C], I, y, 0, r.stringFilter));
        e._op && e._op[w] && e.kill(L, e._op[w]),
          _ &&
            e._pt &&
            ((jn = e),
            Pe.killTweensOf(L, O, e.globalTime(t)),
            (D = !e.parent),
            (jn = 0)),
          e._pt && c && (La[$.id] = 1);
      }
      k && Mf(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = u),
      (e._initted = (!e._op || e._pt) && !D),
      h && t <= 0 && S.render(yn, !0, !0);
  }, "_initTween"),
  Tg = a(function (e, t, i, r, s, o, l, c) {
    var u = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      f,
      d,
      h,
      p;
    if (!u)
      for (
        u = e._ptCache[t] = [], h = e._ptLookup, p = e._targets.length;
        p--;

      ) {
        if (((f = h[p][t]), f && f.d && f.d._pt))
          for (f = f.d._pt; f && f.p !== t && f.fp !== t; ) f = f._next;
        if (!f)
          return (
            (Ba = 1),
            (e.vars[t] = "+=0"),
            kl(e, l),
            (Ba = 0),
            c ? bs(t + " not eligible for reset") : 1
          );
        u.push(f);
      }
    for (p = u.length; p--; )
      (d = u[p]),
        (f = d._pt || d),
        (f.s = (r || r === 0) && !s ? r : f.s + (r || 0) + o * f.c),
        (f.c = i - f.s),
        d.e && (d.e = Re(i) + lt(d.e)),
        d.b && (d.b = f.s + lt(d.b));
  }, "_updatePropTweens"),
  Eg = a(function (e, t) {
    var i = e[0] ? ki(e[0]).harness : 0,
      r = i && i.aliases,
      s,
      o,
      l,
      c;
    if (!r) return t;
    s = Cr({}, t);
    for (o in r)
      if (o in s) for (c = r[o].split(","), l = c.length; l--; ) s[c[l]] = s[o];
    return s;
  }, "_addAliasesToVars"),
  wg = a(function (e, t, i, r) {
    var s = t.ease || r || "power1.inOut",
      o,
      l;
    if (ft(t))
      (l = i[e] || (i[e] = [])),
        t.forEach(function (c, u) {
          return l.push({ t: (u / (t.length - 1)) * 100, v: c, e: s });
        });
    else
      for (o in t)
        (l = i[o] || (i[o] = [])),
          o === "ease" || l.push({ t: parseFloat(e), v: t[o], e: s });
  }, "_parseKeyframe"),
  rs = a(function (e, t, i, r, s) {
    return Ae(e)
      ? e.call(t, i, r, s)
      : Ze(e) && ~e.indexOf("random(")
      ? xs(e)
      : e;
  }, "_parseFuncOrString"),
  Ef = El + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  wf = {};
Tt(Ef + ",id,stagger,delay,duration,paused,scrollTrigger", function (n) {
  return (wf[n] = 1);
});
var qe = (function (n) {
  Hu(e, n);
  function e(i, r, s, o) {
    var l;
    typeof r == "number" && ((s.duration = r), (r = s), (s = null)),
      (l = n.call(this, o ? r : ns(r)) || this);
    var c = l.vars,
      u = c.duration,
      f = c.delay,
      d = c.immediateRender,
      h = c.stagger,
      p = c.overwrite,
      g = c.keyframes,
      m = c.defaults,
      v = c.scrollTrigger,
      b = c.yoyoEase,
      y = r.parent || Pe,
      _ = (ft(i) || Wu(i) ? zn(i[0]) : "length" in r) ? [i] : Gt(i),
      S,
      T,
      w,
      C,
      P,
      L,
      k,
      $;
    if (
      ((l._targets = _.length
        ? wl(_)
        : bs(
            "GSAP target " + i + " not found. https://gsap.com",
            !Rt.nullTargetWarn
          ) || []),
      (l._ptLookup = []),
      (l._overwrite = p),
      g || h || Rs(u) || Rs(f))
    ) {
      if (
        ((r = l.vars),
        (S = l.timeline =
          new yt({
            data: "nested",
            defaults: m || {},
            targets: y && y.data === "nested" ? y.vars.targets : _,
          })),
        S.kill(),
        (S.parent = S._dp = Cn(l)),
        (S._start = 0),
        h || Rs(u) || Rs(f))
      ) {
        if (((C = _.length), (k = h && cf(h)), xn(h)))
          for (P in h) ~Ef.indexOf(P) && ($ || ($ = {}), ($[P] = h[P]));
        for (T = 0; T < C; T++)
          (w = _o(r, wf)),
            (w.stagger = 0),
            b && (w.yoyoEase = b),
            $ && Cr(w, $),
            (L = _[T]),
            (w.duration = +rs(u, Cn(l), T, L, _)),
            (w.delay = (+rs(f, Cn(l), T, L, _) || 0) - l._delay),
            !h &&
              C === 1 &&
              w.delay &&
              ((l._delay = f = w.delay), (l._start += f), (w.delay = 0)),
            S.to(L, w, k ? k(T, L, _) : 0),
            (S._ease = ue.none);
        S.duration() ? (u = f = 0) : (l.timeline = 0);
      } else if (g) {
        ns(Bt(S.vars.defaults, { ease: "none" })),
          (S._ease = Ai(g.ease || r.ease || "none"));
        var x = 0,
          E,
          O,
          I;
        if (ft(g))
          g.forEach(function (M) {
            return S.to(_, M, ">");
          }),
            S.duration();
        else {
          w = {};
          for (P in g)
            P === "ease" || P === "easeEach" || wg(P, g[P], w, g.easeEach);
          for (P in w)
            for (
              E = w[P].sort(function (M, D) {
                return M.t - D.t;
              }),
                x = 0,
                T = 0;
              T < E.length;
              T++
            )
              (O = E[T]),
                (I = {
                  ease: O.e,
                  duration: ((O.t - (T ? E[T - 1].t : 0)) / 100) * u,
                }),
                (I[P] = O.v),
                S.to(_, I, x),
                (x += I.duration);
          S.duration() < u && S.to({}, { duration: u - S.duration() });
        }
      }
      u || l.duration((u = S.duration()));
    } else l.timeline = 0;
    return (
      p === !0 && !yl && ((jn = Cn(l)), Pe.killTweensOf(_), (jn = 0)),
      dn(y, Cn(l), s),
      r.reversed && l.reverse(),
      r.paused && l.paused(!0),
      (d ||
        (!u &&
          !g &&
          l._start === He(y._time) &&
          St(d) &&
          ng(Cn(l)) &&
          y.data !== "nested")) &&
        ((l._tTime = -1e-8), l.render(Math.max(0, -f) || 0)),
      v && sf(Cn(l), v),
      l
    );
  }
  a(e, "Tween");
  var t = e.prototype;
  return (
    (t.render = a(function (r, s, o) {
      var l = this._time,
        c = this._tDur,
        u = this._dur,
        f = r < 0,
        d = r > c - ut && !f ? c : r < ut ? 0 : r,
        h,
        p,
        g,
        m,
        v,
        b,
        y,
        _,
        S;
      if (!u) rg(this, r, s, o);
      else if (
        d !== this._tTime ||
        !r ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== f) ||
        this._lazy
      ) {
        if (((h = d), (_ = this.timeline), this._repeat)) {
          if (((m = u + this._rDelay), this._repeat < -1 && f))
            return this.totalTime(m * 100 + r, s, o);
          if (
            ((h = He(d % m)),
            d === c
              ? ((g = this._repeat), (h = u))
              : ((v = He(d / m)),
                (g = ~~v),
                g && g === v ? ((h = u), g--) : h > u && (h = u)),
            (b = this._yoyo && g & 1),
            b && ((S = this._yEase), (h = u - h)),
            (v = Pr(this._tTime, m)),
            h === l && !o && this._initted && g === v)
          )
            return (this._tTime = d), this;
          g !== v &&
            (_ && this._yEase && _f(_, b),
            this.vars.repeatRefresh &&
              !b &&
              !this._lock &&
              h !== m &&
              this._initted &&
              ((this._lock = o = 1),
              (this.render(He(m * g), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (of(this, f ? r : h, o, s, d)) return (this._tTime = 0), this;
          if (l !== this._time && !(o && this.vars.repeatRefresh && g !== v))
            return this;
          if (u !== this._dur) return this.render(r, s, o);
        }
        if (
          ((this._tTime = d),
          (this._time = h),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = y = (S || this._ease)(h / u)),
          this._from && (this.ratio = y = 1 - y),
          !l && d && !s && !v && (zt(this, "onStart"), this._tTime !== d))
        )
          return this;
        for (p = this._pt; p; ) p.r(y, p.d), (p = p._next);
        (_ && _.render(r < 0 ? r : _._dur * _._ease(h / this._dur), s, o)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !s &&
            (f && Ia(this, r, s, o), zt(this, "onUpdate")),
          this._repeat &&
            g !== v &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            zt(this, "onRepeat"),
          (d === this._tDur || !d) &&
            this._tTime === d &&
            (f && !this._onUpdate && Ia(this, r, !0, !0),
            (r || !u) &&
              ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
              ri(this, 1),
            !s &&
              !(f && !l) &&
              (d || l || b) &&
              (zt(this, d === c ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(d < c && this.timeScale() > 0) && this._prom()));
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
    (t.resetTo = a(function (r, s, o, l, c) {
      Ss || It.wake(), this._ts || this.play();
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        f;
      return (
        this._initted || kl(this, u),
        (f = this._ease(u / this._dur)),
        Tg(this, r, s, o, l, f, u, c)
          ? this.resetTo(r, s, o, l, 1)
          : (qo(this, 0),
            this.parent ||
              nf(
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
            ? Gr(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!tt),
          this
        );
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, s, jn && jn.vars.overwrite !== !0)
            ._first || Gr(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            kr(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var l = this._targets,
        c = r ? Gt(r) : l,
        u = this._ptLookup,
        f = this._pt,
        d,
        h,
        p,
        g,
        m,
        v,
        b;
      if ((!s || s === "all") && eg(l, c))
        return s === "all" && (this._pt = 0), Gr(this);
      for (
        d = this._op = this._op || [],
          s !== "all" &&
            (Ze(s) &&
              ((m = {}),
              Tt(s, function (y) {
                return (m[y] = 1);
              }),
              (s = m)),
            (s = Eg(l, s))),
          b = l.length;
        b--;

      )
        if (~c.indexOf(l[b])) {
          (h = u[b]),
            s === "all"
              ? ((d[b] = s), (g = h), (p = {}))
              : ((p = d[b] = d[b] || {}), (g = s));
          for (m in g)
            (v = h && h[m]),
              v &&
                ((!("kill" in v.d) || v.d.kill(m) === !0) && Bo(this, v, "_pt"),
                delete h[m]),
              p !== "all" && (p[m] = 1);
        }
      return this._initted && !this._pt && f && Gr(this), this;
    }, "kill")),
    (e.to = a(function (r, s) {
      return new e(r, s, arguments[2]);
    }, "to")),
    (e.from = a(function (r, s) {
      return is(1, arguments);
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
      return is(2, arguments);
    }, "fromTo")),
    (e.set = a(function (r, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(r, s);
    }, "set")),
    (e.killTweensOf = a(function (r, s, o) {
      return Pe.killTweensOf(r, s, o);
    }, "killTweensOf")),
    e
  );
})(Ts);
Bt(qe.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Tt("staggerTo,staggerFrom,staggerFromTo", function (n) {
  qe[n] = function () {
    var e = new yt(),
      t = za.call(arguments, 0);
    return t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), e[n].apply(e, t);
  };
});
var Ml = a(function (e, t, i) {
    return (e[t] = i);
  }, "_setterPlain"),
  Cf = a(function (e, t, i) {
    return e[t](i);
  }, "_setterFunc"),
  Cg = a(function (e, t, i, r) {
    return e[t](r.fp, i);
  }, "_setterFuncWithParam"),
  Pg = a(function (e, t, i) {
    return e.setAttribute(t, i);
  }, "_setterAttribute"),
  Al = a(function (e, t) {
    return Ae(e[t]) ? Cf : bl(e[t]) && e.setAttribute ? Pg : Ml;
  }, "_getSetter"),
  Pf = a(function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  }, "_renderPlain"),
  kg = a(function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  }, "_renderBoolean"),
  kf = a(function (e, t) {
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
  $l = a(function (e, t) {
    for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
  }, "_renderPropTweens"),
  Mg = a(function (e, t, i, r) {
    for (var s = this._pt, o; s; )
      (o = s._next), s.p === r && s.modifier(e, t, i), (s = o);
  }, "_addPluginModifier"),
  Ag = a(function (e) {
    for (var t = this._pt, i, r; t; )
      (r = t._next),
        (t.p === e && !t.op) || t.op === e
          ? Bo(this, t, "_pt")
          : t.dep || (i = 1),
        (t = r);
    return !i;
  }, "_killPropTweensOf"),
  $g = a(function (e, t, i, r) {
    r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
  }, "_setterWithModifier"),
  Mf = a(function (e) {
    for (var t = e._pt, i, r, s, o; t; ) {
      for (i = t._next, r = s; r && r.pr > t.pr; ) r = r._next;
      (t._prev = r ? r._prev : o) ? (t._prev._next = t) : (s = t),
        (t._next = r) ? (r._prev = t) : (o = t),
        (t = i);
    }
    e._pt = s;
  }, "_sortPropTweensByPriority"),
  Et = (function () {
    function n(t, i, r, s, o, l, c, u, f) {
      (this.t = i),
        (this.s = s),
        (this.c = o),
        (this.p = r),
        (this.r = l || Pf),
        (this.d = c || this),
        (this.set = u || Ml),
        (this.pr = f || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    a(n, "PropTween");
    var e = n.prototype;
    return (
      (e.modifier = a(function (i, r, s) {
        (this.mSet = this.mSet || this.set),
          (this.set = $g),
          (this.m = i),
          (this.mt = s),
          (this.tween = r);
      }, "modifier")),
      n
    );
  })();
Tt(
  El +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (n) {
    return (Tl[n] = 1);
  }
);
Nt.TweenMax = Nt.TweenLite = qe;
Nt.TimelineLite = Nt.TimelineMax = yt;
Pe = new yt({
  sortChildren: !1,
  defaults: wr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Rt.stringFilter = yf;
var $i = [],
  ro = {},
  Og = [],
  Cc = 0,
  Lg = 0,
  oa = a(function (e) {
    return (ro[e] || Og).map(function (t) {
      return t();
    });
  }, "_dispatch"),
  Fa = a(function () {
    var e = Date.now(),
      t = [];
    e - Cc > 2 &&
      (oa("matchMediaInit"),
      $i.forEach(function (i) {
        var r = i.queries,
          s = i.conditions,
          o,
          l,
          c,
          u;
        for (l in r)
          (o = un.matchMedia(r[l]).matches),
            o && (c = 1),
            o !== s[l] && ((s[l] = o), (u = 1));
        u && (i.revert(), c && t.push(i));
      }),
      oa("matchMediaRevert"),
      t.forEach(function (i) {
        return i.onMatch(i, function (r) {
          return i.add(null, r);
        });
      }),
      (Cc = e),
      oa("matchMedia"));
  }, "_onMediaChange"),
  Af = (function () {
    function n(t, i) {
      (this.selector = i && Ra(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Lg++),
        t && this.add(t);
    }
    a(n, "Context");
    var e = n.prototype;
    return (
      (e.add = a(function (i, r, s) {
        Ae(i) && ((s = r), (r = i), (i = Ae));
        var o = this,
          l = a(function () {
            var u = Se,
              f = o.selector,
              d;
            return (
              u && u !== o && u.data.push(o),
              s && (o.selector = Ra(s)),
              (Se = o),
              (d = r.apply(o, arguments)),
              Ae(d) && o._r.push(d),
              (Se = u),
              (o.selector = f),
              (o.isReverted = !1),
              d
            );
          }, "f");
        return (
          (o.last = l),
          i === Ae
            ? l(o, function (c) {
                return o.add(null, c);
              })
            : i
            ? (o[i] = l)
            : l
        );
      }, "add")),
      (e.ignore = a(function (i) {
        var r = Se;
        (Se = null), i(this), (Se = r);
      }, "ignore")),
      (e.getTweens = a(function () {
        var i = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof n
              ? i.push.apply(i, r.getTweens())
              : r instanceof qe &&
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
                for (var l = s.getTweens(), c = s.data.length, u; c--; )
                  (u = s.data[c]),
                    u.data === "isFlip" &&
                      (u.revert(),
                      u.getChildren(!0, !0, !1).forEach(function (f) {
                        return l.splice(l.indexOf(f), 1);
                      }));
                for (
                  l
                    .map(function (f) {
                      return {
                        g:
                          f._dur ||
                          f._delay ||
                          (f._sat && !f._sat.vars.immediateRender)
                            ? f.globalTime(0)
                            : -1 / 0,
                        t: f,
                      };
                    })
                    .sort(function (f, d) {
                      return d.g - f.g || -1 / 0;
                    })
                    .forEach(function (f) {
                      return f.t.revert(i);
                    }),
                    c = s.data.length;
                  c--;

                )
                  (u = s.data[c]),
                    u instanceof yt
                      ? u.data !== "nested" &&
                        (u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
                      : !(u instanceof qe) && u.revert && u.revert(i);
                s._r.forEach(function (f) {
                  return f(i, s);
                }),
                  (s.isReverted = !0);
              })()
            : this.data.forEach(function (l) {
                return l.kill && l.kill();
              }),
          this.clear(),
          r)
        )
          for (var o = $i.length; o--; )
            $i[o].id === this.id && $i.splice(o, 1);
      }, "kill")),
      (e.revert = a(function (i) {
        this.kill(i || {});
      }, "revert")),
      n
    );
  })(),
  Ig = (function () {
    function n(t) {
      (this.contexts = []), (this.scope = t), Se && Se.data.push(this);
    }
    a(n, "MatchMedia");
    var e = n.prototype;
    return (
      (e.add = a(function (i, r, s) {
        xn(i) || (i = { matches: i });
        var o = new Af(0, s || this.scope),
          l = (o.conditions = {}),
          c,
          u,
          f;
        Se && !o.selector && (o.selector = Se.selector),
          this.contexts.push(o),
          (r = o.add("onMatch", r)),
          (o.queries = i);
        for (u in i)
          u === "all"
            ? (f = 1)
            : ((c = un.matchMedia(i[u])),
              c &&
                ($i.indexOf(o) < 0 && $i.push(o),
                (l[u] = c.matches) && (f = 1),
                c.addListener
                  ? c.addListener(Fa)
                  : c.addEventListener("change", Fa)));
        return (
          f &&
            r(o, function (d) {
              return o.add(null, d);
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
  So = {
    registerPlugin: a(function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      t.forEach(function (r) {
        return mf(r);
      });
    }, "registerPlugin"),
    timeline: a(function (e) {
      return new yt(e);
    }, "timeline"),
    getTweensOf: a(function (e, t) {
      return Pe.getTweensOf(e, t);
    }, "getTweensOf"),
    getProperty: a(function (e, t, i, r) {
      Ze(e) && (e = Gt(e)[0]);
      var s = ki(e || {}).get,
        o = i ? tf : ef;
      return (
        i === "native" && (i = ""),
        e &&
          (t
            ? o((($t[t] && $t[t].get) || s)(e, t, i, r))
            : function (l, c, u) {
                return o((($t[l] && $t[l].get) || s)(e, l, c, u));
              })
      );
    }, "getProperty"),
    quickSetter: a(function (e, t, i) {
      if (((e = Gt(e)), e.length > 1)) {
        var r = e.map(function (f) {
            return Ct.quickSetter(f, t, i);
          }),
          s = r.length;
        return function (f) {
          for (var d = s; d--; ) r[d](f);
        };
      }
      e = e[0] || {};
      var o = $t[t],
        l = ki(e),
        c = (l.harness && (l.harness.aliases || {})[t]) || t,
        u = o
          ? function (f) {
              var d = new o();
              (or._pt = 0),
                d.init(e, i ? f + i : f, or, 0, [e]),
                d.render(1, d),
                or._pt && $l(1, or);
            }
          : l.set(e, c);
      return o
        ? u
        : function (f) {
            return u(e, c, i ? f + i : f, l, 1);
          };
    }, "quickSetter"),
    quickTo: a(function (e, t, i) {
      var r,
        s = Ct.to(
          e,
          Bt(
            ((r = {}), (r[t] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
            i || {}
          )
        ),
        o = a(function (c, u, f) {
          return s.resetTo(t, c, u, f);
        }, "func");
      return (o.tween = s), o;
    }, "quickTo"),
    isTweening: a(function (e) {
      return Pe.getTweensOf(e, !0).length > 0;
    }, "isTweening"),
    defaults: a(function (e) {
      return e && e.ease && (e.ease = Ai(e.ease, wr.ease)), xc(wr, e || {});
    }, "defaults"),
    config: a(function (e) {
      return xc(Rt, e || {});
    }, "config"),
    registerEffect: a(function (e) {
      var t = e.name,
        i = e.effect,
        r = e.plugins,
        s = e.defaults,
        o = e.extendTimeline;
      (r || "").split(",").forEach(function (l) {
        return (
          l && !$t[l] && !Nt[l] && bs(t + " effect requires " + l + " plugin.")
        );
      }),
        (na[t] = function (l, c, u) {
          return i(Gt(l), Bt(c || {}, s), u);
        }),
        o &&
          (yt.prototype[t] = function (l, c, u) {
            return this.add(na[t](l, xn(c) ? c : (u = c) && {}, this), u);
          });
    }, "registerEffect"),
    registerEase: a(function (e, t) {
      ue[e] = Ai(t);
    }, "registerEase"),
    parseEase: a(function (e, t) {
      return arguments.length ? Ai(e, t) : ue;
    }, "parseEase"),
    getById: a(function (e) {
      return Pe.getById(e);
    }, "getById"),
    exportRoot: a(function (e, t) {
      e === void 0 && (e = {});
      var i = new yt(e),
        r,
        s;
      for (
        i.smoothChildTiming = St(e.smoothChildTiming),
          Pe.remove(i),
          i._dp = 0,
          i._time = i._tTime = Pe._time,
          r = Pe._first;
        r;

      )
        (s = r._next),
          (t ||
            !(
              !r._dur &&
              r instanceof qe &&
              r.vars.onComplete === r._targets[0]
            )) &&
            dn(i, r, r._start - r._delay),
          (r = s);
      return dn(Pe, i, 0), i;
    }, "exportRoot"),
    context: a(function (e, t) {
      return e ? new Af(e, t) : Se;
    }, "context"),
    matchMedia: a(function (e) {
      return new Ig(e);
    }, "matchMedia"),
    matchMediaRefresh: a(function () {
      return (
        $i.forEach(function (e) {
          var t = e.conditions,
            i,
            r;
          for (r in t) t[r] && ((t[r] = !1), (i = 1));
          i && e.revert();
        }) || Fa()
      );
    }, "matchMediaRefresh"),
    addEventListener: a(function (e, t) {
      var i = ro[e] || (ro[e] = []);
      ~i.indexOf(t) || i.push(t);
    }, "addEventListener"),
    removeEventListener: a(function (e, t) {
      var i = ro[e],
        r = i && i.indexOf(t);
      r >= 0 && i.splice(r, 1);
    }, "removeEventListener"),
    utils: {
      wrap: dg,
      wrapYoyo: hg,
      distribute: cf,
      random: ff,
      snap: uf,
      normalize: fg,
      getUnit: lt,
      clamp: ag,
      splitColor: gf,
      toArray: Gt,
      selector: Ra,
      mapRange: hf,
      pipe: cg,
      unitize: ug,
      interpolate: pg,
      shuffle: lf,
    },
    install: Uu,
    effects: na,
    ticker: It,
    updateRoot: yt.updateRoot,
    plugins: $t,
    globalTimeline: Pe,
    core: {
      PropTween: Et,
      globals: Ku,
      Tween: qe,
      Timeline: yt,
      Animation: Ts,
      getCache: ki,
      _removeLinkedListItem: Bo,
      reverting: a(function () {
        return tt;
      }, "reverting"),
      context: a(function (e) {
        return e && Se && (Se.data.push(e), (e._ctx = Se)), Se;
      }, "context"),
      suppressOverwrites: a(function (e) {
        return (yl = e);
      }, "suppressOverwrites"),
    },
  };
Tt("to,from,fromTo,delayedCall,set,killTweensOf", function (n) {
  return (So[n] = qe[n]);
});
It.add(yt.updateRoot);
or = So.to({}, { duration: 0 });
var Dg = a(function (e, t) {
    for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
      i = i._next;
    return i;
  }, "_getPluginPropTween"),
  zg = a(function (e, t) {
    var i = e._targets,
      r,
      s,
      o;
    for (r in t)
      for (s = i.length; s--; )
        (o = e._ptLookup[s][r]),
          o &&
            (o = o.d) &&
            (o._pt && (o = Dg(o, r)),
            o && o.modifier && o.modifier(t[r], e, i[s], r));
  }, "_addModifiers"),
  aa = a(function (e, t) {
    return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: a(function (r, s, o) {
        o._onInit = function (l) {
          var c, u;
          if (
            (Ze(s) &&
              ((c = {}),
              Tt(s, function (f) {
                return (c[f] = 1);
              }),
              (s = c)),
            t)
          ) {
            c = {};
            for (u in s) c[u] = t(s[u]);
            s = c;
          }
          zg(l, s);
        };
      }, "init"),
    };
  }, "_buildModifierPlugin"),
  Ct =
    So.registerPlugin(
      {
        name: "attr",
        init: a(function (e, t, i, r, s) {
          var o, l, c;
          this.tween = i;
          for (o in t)
            (c = e.getAttribute(o) || ""),
              (l = this.add(
                e,
                "setAttribute",
                (c || 0) + "",
                t[o],
                r,
                s,
                0,
                0,
                o
              )),
              (l.op = o),
              (l.b = c),
              this._props.push(o);
        }, "init"),
        render: a(function (e, t) {
          for (var i = t._pt; i; )
            tt ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
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
      aa("roundProps", Na),
      aa("modifiers"),
      aa("snap", uf)
    ) || So;
qe.version = yt.version = Ct.version = "3.13.0";
ju = 1;
_l() && Mr();
ue.Power0;
ue.Power1;
ue.Power2;
ue.Power3;
ue.Power4;
ue.Linear;
ue.Quad;
ue.Cubic;
ue.Quart;
ue.Quint;
ue.Strong;
ue.Elastic;
ue.Back;
ue.SteppedEase;
ue.Bounce;
ue.Sine;
ue.Expo;
ue.Circ;
var Pc,
  Un,
  hr,
  Ol,
  Ei,
  kc,
  Ll,
  Rg = a(function () {
    return typeof window < "u";
  }, "_windowExists"),
  Rn = {},
  _i = 180 / Math.PI,
  pr = Math.PI / 180,
  Zi = Math.atan2,
  Mc = 1e8,
  Il = /([A-Z])/g,
  Ng = /(left|right|width|margin|padding|x)/i,
  Bg = /[\s,\(]\S/,
  pn = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  qa = a(function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  }, "_renderCSSProp"),
  Fg = a(function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  }, "_renderPropWithEnd"),
  qg = a(function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  }, "_renderCSSPropWithBeginning"),
  Hg = a(function (e, t) {
    var i = t.s + t.c * e;
    t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
  }, "_renderRoundedCSSProp"),
  $f = a(function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  }, "_renderNonTweeningValue"),
  Of = a(function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  }, "_renderNonTweeningValueOnlyAtEnd"),
  Vg = a(function (e, t, i) {
    return (e.style[t] = i);
  }, "_setterCSSStyle"),
  Wg = a(function (e, t, i) {
    return e.style.setProperty(t, i);
  }, "_setterCSSProp"),
  Xg = a(function (e, t, i) {
    return (e._gsap[t] = i);
  }, "_setterTransform"),
  Yg = a(function (e, t, i) {
    return (e._gsap.scaleX = e._gsap.scaleY = i);
  }, "_setterScale"),
  Gg = a(function (e, t, i, r, s) {
    var o = e._gsap;
    (o.scaleX = o.scaleY = i), o.renderTransform(s, o);
  }, "_setterScaleWithRender"),
  jg = a(function (e, t, i, r, s) {
    var o = e._gsap;
    (o[t] = i), o.renderTransform(s, o);
  }, "_setterTransformWithRender"),
  ke = "transform",
  wt = ke + "Origin",
  Ug = a(function n(e, t) {
    var i = this,
      r = this.target,
      s = r.style,
      o = r._gsap;
    if (e in Rn && s) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = pn[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (l) {
                return (i.tfm[l] = kn(r, l));
              })
            : (this.tfm[e] = o.x ? o[e] : kn(r, e)),
          e === wt && (this.tfm.zOrigin = o.zOrigin);
      else
        return pn.transform.split(",").forEach(function (l) {
          return n.call(i, l, t);
        });
      if (this.props.indexOf(ke) >= 0) return;
      o.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(wt, t, "")),
        (e = ke);
    }
    (s || t) && this.props.push(e, t, s[e]);
  }, "_saveStyle"),
  Lf = a(function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  }, "_removeIndependentTransforms"),
  Kg = a(function () {
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
              : e[s].replace(Il, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (o in this.tfm) r[o] = this.tfm[o];
      r.svg &&
        (r.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        (s = Ll()),
        (!s || !s.isStart) &&
          !i[ke] &&
          (Lf(i),
          r.zOrigin &&
            i[wt] &&
            ((i[wt] += " " + r.zOrigin + "px"),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1));
    }
  }, "_revertStyle"),
  If = a(function (e, t) {
    var i = { target: e, props: [], revert: Kg, save: Ug };
    return (
      e._gsap || Ct.core.getCache(e),
      t &&
        e.style &&
        e.nodeType &&
        t.split(",").forEach(function (r) {
          return i.save(r);
        }),
      i
    );
  }, "_getStyleSaver"),
  Df,
  Ha = a(function (e, t) {
    var i = Un.createElementNS
      ? Un.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : Un.createElement(e);
    return i && i.style ? i : Un.createElement(e);
  }, "_createElement"),
  jt = a(function n(e, t, i) {
    var r = getComputedStyle(e);
    return (
      r[t] ||
      r.getPropertyValue(t.replace(Il, "-$1").toLowerCase()) ||
      r.getPropertyValue(t) ||
      (!i && n(e, Ar(t) || t, 1)) ||
      ""
    );
  }, "_getComputedProperty"),
  Ac = "O,Moz,ms,Ms,Webkit".split(","),
  Ar = a(function (e, t, i) {
    var r = t || Ei,
      s = r.style,
      o = 5;
    if (e in s && !i) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      o-- && !(Ac[o] + e in s);

    );
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Ac[o] : "") + e;
  }, "_checkPropPrefix"),
  Va = a(function () {
    Rg() &&
      window.document &&
      ((Pc = window),
      (Un = Pc.document),
      (hr = Un.documentElement),
      (Ei = Ha("div") || { style: {} }),
      Ha("div"),
      (ke = Ar(ke)),
      (wt = ke + "Origin"),
      (Ei.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Df = !!Ar("perspective")),
      (Ll = Ct.core.reverting),
      (Ol = 1));
  }, "_initCore"),
  $c = a(function (e) {
    var t = e.ownerSVGElement,
      i = Ha(
        "svg",
        (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      r = e.cloneNode(!0),
      s;
    (r.style.display = "block"), i.appendChild(r), hr.appendChild(i);
    try {
      s = r.getBBox();
    } catch {}
    return i.removeChild(r), hr.removeChild(i), s;
  }, "_getReparentedCloneBBox"),
  Oc = a(function (e, t) {
    for (var i = t.length; i--; )
      if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
  }, "_getAttributeFallbacks"),
  zf = a(function (e) {
    var t, i;
    try {
      t = e.getBBox();
    } catch {
      (t = $c(e)), (i = 1);
    }
    return (
      (t && (t.width || t.height)) || i || (t = $c(e)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +Oc(e, ["x", "cx", "x1"]) || 0,
            y: +Oc(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  }, "_getBBox"),
  Rf = a(function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && zf(e));
  }, "_isSVG"),
  Bi = a(function (e, t) {
    if (t) {
      var i = e.style,
        r;
      t in Rn && t !== wt && (t = ke),
        i.removeProperty
          ? ((r = t.substr(0, 2)),
            (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
            i.removeProperty(
              r === "--" ? t : t.replace(Il, "-$1").toLowerCase()
            ))
          : i.removeAttribute(t);
    }
  }, "_removeProperty"),
  Kn = a(function (e, t, i, r, s, o) {
    var l = new Et(e._pt, t, i, 0, 1, o ? Of : $f);
    return (e._pt = l), (l.b = r), (l.e = s), e._props.push(i), l;
  }, "_addNonTweeningPT"),
  Lc = { deg: 1, rad: 1, turn: 1 },
  Zg = { grid: 1, flex: 1 },
  si = a(function n(e, t, i, r) {
    var s = parseFloat(i) || 0,
      o = (i + "").trim().substr((s + "").length) || "px",
      l = Ei.style,
      c = Ng.test(t),
      u = e.tagName.toLowerCase() === "svg",
      f = (u ? "client" : "offset") + (c ? "Width" : "Height"),
      d = 100,
      h = r === "px",
      p = r === "%",
      g,
      m,
      v,
      b;
    if (r === o || !s || Lc[r] || Lc[o]) return s;
    if (
      (o !== "px" && !h && (s = n(e, t, i, "px")),
      (b = e.getCTM && Rf(e)),
      (p || o === "%") && (Rn[t] || ~t.indexOf("adius")))
    )
      return (
        (g = b ? e.getBBox()[c ? "width" : "height"] : e[f]),
        Re(p ? (s / g) * d : (s / 100) * g)
      );
    if (
      ((l[c ? "width" : "height"] = d + (h ? o : r)),
      (m =
        (r !== "rem" && ~t.indexOf("adius")) ||
        (r === "em" && e.appendChild && !u)
          ? e
          : e.parentNode),
      b && (m = (e.ownerSVGElement || {}).parentNode),
      (!m || m === Un || !m.appendChild) && (m = Un.body),
      (v = m._gsap),
      v && p && v.width && c && v.time === It.time && !v.uncache)
    )
      return Re((s / v.width) * d);
    if (p && (t === "height" || t === "width")) {
      var y = e.style[t];
      (e.style[t] = d + r), (g = e[f]), y ? (e.style[t] = y) : Bi(e, t);
    } else (p || o === "%") && !Zg[jt(m, "display")] && (l.position = jt(e, "position")), m === e && (l.position = "static"), m.appendChild(Ei), (g = Ei[f]), m.removeChild(Ei), (l.position = "absolute");
    return (
      c && p && ((v = ki(m)), (v.time = It.time), (v.width = m[f])),
      Re(h ? (g * s) / d : g && s ? (d / g) * s : 0)
    );
  }, "_convertToUnit"),
  kn = a(function (e, t, i, r) {
    var s;
    return (
      Ol || Va(),
      t in pn &&
        t !== "transform" &&
        ((t = pn[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      Rn[t] && t !== "transform"
        ? ((s = ws(e, r)),
          (s =
            t !== "transformOrigin"
              ? s[t]
              : s.svg
              ? s.origin
              : Eo(jt(e, wt)) + " " + s.zOrigin + "px"))
        : ((s = e.style[t]),
          (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) &&
            (s =
              (To[t] && To[t](e, t, i)) ||
              jt(e, t) ||
              Qu(e, t) ||
              (t === "opacity" ? 1 : 0))),
      i && !~(s + "").trim().indexOf(" ") ? si(e, t, s, i) + i : s
    );
  }, "_get"),
  Qg = a(function (e, t, i, r) {
    if (!i || i === "none") {
      var s = Ar(t, e, 1),
        o = s && jt(e, s, 1);
      o && o !== i
        ? ((t = s), (i = o))
        : t === "borderColor" && (i = jt(e, "borderTopColor"));
    }
    var l = new Et(this._pt, e.style, t, 0, 1, kf),
      c = 0,
      u = 0,
      f,
      d,
      h,
      p,
      g,
      m,
      v,
      b,
      y,
      _,
      S,
      T;
    if (
      ((l.b = i),
      (l.e = r),
      (i += ""),
      (r += ""),
      r.substring(0, 6) === "var(--" &&
        (r = jt(e, r.substring(4, r.indexOf(")")))),
      r === "auto" &&
        ((m = e.style[t]),
        (e.style[t] = r),
        (r = jt(e, t) || r),
        m ? (e.style[t] = m) : Bi(e, t)),
      (f = [i, r]),
      yf(f),
      (i = f[0]),
      (r = f[1]),
      (h = i.match(sr) || []),
      (T = r.match(sr) || []),
      T.length)
    ) {
      for (; (d = sr.exec(r)); )
        (v = d[0]),
          (y = r.substring(c, d.index)),
          g
            ? (g = (g + 1) % 5)
            : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (g = 1),
          v !== (m = h[u++] || "") &&
            ((p = parseFloat(m) || 0),
            (S = m.substr((p + "").length)),
            v.charAt(1) === "=" && (v = dr(p, v) + S),
            (b = parseFloat(v)),
            (_ = v.substr((b + "").length)),
            (c = sr.lastIndex - _.length),
            _ ||
              ((_ = _ || Rt.units[t] || S),
              c === r.length && ((r += _), (l.e += _))),
            S !== _ && (p = si(e, t, m, _) || 0),
            (l._pt = {
              _next: l._pt,
              p: y || u === 1 ? y : ",",
              s: p,
              c: b - p,
              m: (g && g < 4) || t === "zIndex" ? Math.round : 0,
            }));
      l.c = c < r.length ? r.substring(c, r.length) : "";
    } else l.r = t === "display" && r === "none" ? Of : $f;
    return Yu.test(r) && (l.e = 0), (this._pt = l), l;
  }, "_tweenComplexCSSString"),
  Ic = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  Jg = a(function (e) {
    var t = e.split(" "),
      i = t[0],
      r = t[1] || "50%";
    return (
      (i === "top" || i === "bottom" || r === "left" || r === "right") &&
        ((e = i), (i = r), (r = e)),
      (t[0] = Ic[i] || i),
      (t[1] = Ic[r] || r),
      t.join(" ")
    );
  }, "_convertKeywordsToPercentages"),
  ev = a(function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var i = t.t,
        r = i.style,
        s = t.u,
        o = i._gsap,
        l,
        c,
        u;
      if (s === "all" || s === !0) (r.cssText = ""), (c = 1);
      else
        for (s = s.split(","), u = s.length; --u > -1; )
          (l = s[u]),
            Rn[l] && ((c = 1), (l = l === "transformOrigin" ? wt : ke)),
            Bi(i, l);
      c &&
        (Bi(i, ke),
        o &&
          (o.svg && i.removeAttribute("transform"),
          (r.scale = r.rotate = r.translate = "none"),
          ws(i, 1),
          (o.uncache = 1),
          Lf(r)));
    }
  }, "_renderClearProps"),
  To = {
    clearProps: a(function (e, t, i, r, s) {
      if (s.data !== "isFromStart") {
        var o = (e._pt = new Et(e._pt, t, i, 0, 0, ev));
        return (o.u = r), (o.pr = -10), (o.tween = s), e._props.push(i), 1;
      }
    }, "clearProps"),
  },
  Es = [1, 0, 0, 1, 0, 0],
  Nf = {},
  Bf = a(function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  }, "_isNullTransform"),
  Dc = a(function (e) {
    var t = jt(e, ke);
    return Bf(t) ? Es : t.substr(7).match(Xu).map(Re);
  }, "_getComputedTransformMatrixAsArray"),
  Dl = a(function (e, t) {
    var i = e._gsap || ki(e),
      r = e.style,
      s = Dc(e),
      o,
      l,
      c,
      u;
    return i.svg && e.getAttribute("transform")
      ? ((c = e.transform.baseVal.consolidate().matrix),
        (s = [c.a, c.b, c.c, c.d, c.e, c.f]),
        s.join(",") === "1,0,0,1,0,0" ? Es : s)
      : (s === Es &&
          !e.offsetParent &&
          e !== hr &&
          !i.svg &&
          ((c = r.display),
          (r.display = "block"),
          (o = e.parentNode),
          (!o || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
            ((u = 1), (l = e.nextElementSibling), hr.appendChild(e)),
          (s = Dc(e)),
          c ? (r.display = c) : Bi(e, "display"),
          u &&
            (l
              ? o.insertBefore(e, l)
              : o
              ? o.appendChild(e)
              : hr.removeChild(e))),
        t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  }, "_getMatrix"),
  Wa = a(function (e, t, i, r, s, o) {
    var l = e._gsap,
      c = s || Dl(e, !0),
      u = l.xOrigin || 0,
      f = l.yOrigin || 0,
      d = l.xOffset || 0,
      h = l.yOffset || 0,
      p = c[0],
      g = c[1],
      m = c[2],
      v = c[3],
      b = c[4],
      y = c[5],
      _ = t.split(" "),
      S = parseFloat(_[0]) || 0,
      T = parseFloat(_[1]) || 0,
      w,
      C,
      P,
      L;
    i
      ? c !== Es &&
        (C = p * v - g * m) &&
        ((P = S * (v / C) + T * (-m / C) + (m * y - v * b) / C),
        (L = S * (-g / C) + T * (p / C) - (p * y - g * b) / C),
        (S = P),
        (T = L))
      : ((w = zf(e)),
        (S = w.x + (~_[0].indexOf("%") ? (S / 100) * w.width : S)),
        (T = w.y + (~(_[1] || _[0]).indexOf("%") ? (T / 100) * w.height : T))),
      r || (r !== !1 && l.smooth)
        ? ((b = S - u),
          (y = T - f),
          (l.xOffset = d + (b * p + y * m) - b),
          (l.yOffset = h + (b * g + y * v) - y))
        : (l.xOffset = l.yOffset = 0),
      (l.xOrigin = S),
      (l.yOrigin = T),
      (l.smooth = !!r),
      (l.origin = t),
      (l.originIsAbsolute = !!i),
      (e.style[wt] = "0px 0px"),
      o &&
        (Kn(o, l, "xOrigin", u, S),
        Kn(o, l, "yOrigin", f, T),
        Kn(o, l, "xOffset", d, l.xOffset),
        Kn(o, l, "yOffset", h, l.yOffset)),
      e.setAttribute("data-svg-origin", S + " " + T);
  }, "_applySVGOrigin"),
  ws = a(function (e, t) {
    var i = e._gsap || new Sf(e);
    if ("x" in i && !t && !i.uncache) return i;
    var r = e.style,
      s = i.scaleX < 0,
      o = "px",
      l = "deg",
      c = getComputedStyle(e),
      u = jt(e, wt) || "0",
      f,
      d,
      h,
      p,
      g,
      m,
      v,
      b,
      y,
      _,
      S,
      T,
      w,
      C,
      P,
      L,
      k,
      $,
      x,
      E,
      O,
      I,
      M,
      D,
      z,
      B,
      A,
      V,
      G,
      le,
      ie,
      Z;
    return (
      (f = d = h = m = v = b = y = _ = S = 0),
      (p = g = 1),
      (i.svg = !!(e.getCTM && Rf(e))),
      c.translate &&
        ((c.translate !== "none" ||
          c.scale !== "none" ||
          c.rotate !== "none") &&
          (r[ke] =
            (c.translate !== "none"
              ? "translate3d(" +
                (c.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (c.rotate !== "none" ? "rotate(" + c.rotate + ") " : "") +
            (c.scale !== "none"
              ? "scale(" + c.scale.split(" ").join(",") + ") "
              : "") +
            (c[ke] !== "none" ? c[ke] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (C = Dl(e, i.svg)),
      i.svg &&
        (i.uncache
          ? ((z = e.getBBox()),
            (u = i.xOrigin - z.x + "px " + (i.yOrigin - z.y) + "px"),
            (D = ""))
          : (D = !t && e.getAttribute("data-svg-origin")),
        Wa(e, D || u, !!D || i.originIsAbsolute, i.smooth !== !1, C)),
      (T = i.xOrigin || 0),
      (w = i.yOrigin || 0),
      C !== Es &&
        (($ = C[0]),
        (x = C[1]),
        (E = C[2]),
        (O = C[3]),
        (f = I = C[4]),
        (d = M = C[5]),
        C.length === 6
          ? ((p = Math.sqrt($ * $ + x * x)),
            (g = Math.sqrt(O * O + E * E)),
            (m = $ || x ? Zi(x, $) * _i : 0),
            (y = E || O ? Zi(E, O) * _i + m : 0),
            y && (g *= Math.abs(Math.cos(y * pr))),
            i.svg && ((f -= T - (T * $ + w * E)), (d -= w - (T * x + w * O))))
          : ((Z = C[6]),
            (le = C[7]),
            (A = C[8]),
            (V = C[9]),
            (G = C[10]),
            (ie = C[11]),
            (f = C[12]),
            (d = C[13]),
            (h = C[14]),
            (P = Zi(Z, G)),
            (v = P * _i),
            P &&
              ((L = Math.cos(-P)),
              (k = Math.sin(-P)),
              (D = I * L + A * k),
              (z = M * L + V * k),
              (B = Z * L + G * k),
              (A = I * -k + A * L),
              (V = M * -k + V * L),
              (G = Z * -k + G * L),
              (ie = le * -k + ie * L),
              (I = D),
              (M = z),
              (Z = B)),
            (P = Zi(-E, G)),
            (b = P * _i),
            P &&
              ((L = Math.cos(-P)),
              (k = Math.sin(-P)),
              (D = $ * L - A * k),
              (z = x * L - V * k),
              (B = E * L - G * k),
              (ie = O * k + ie * L),
              ($ = D),
              (x = z),
              (E = B)),
            (P = Zi(x, $)),
            (m = P * _i),
            P &&
              ((L = Math.cos(P)),
              (k = Math.sin(P)),
              (D = $ * L + x * k),
              (z = I * L + M * k),
              (x = x * L - $ * k),
              (M = M * L - I * k),
              ($ = D),
              (I = z)),
            v &&
              Math.abs(v) + Math.abs(m) > 359.9 &&
              ((v = m = 0), (b = 180 - b)),
            (p = Re(Math.sqrt($ * $ + x * x + E * E))),
            (g = Re(Math.sqrt(M * M + Z * Z))),
            (P = Zi(I, M)),
            (y = Math.abs(P) > 2e-4 ? P * _i : 0),
            (S = ie ? 1 / (ie < 0 ? -ie : ie) : 0)),
        i.svg &&
          ((D = e.getAttribute("transform")),
          (i.forceCSS = e.setAttribute("transform", "") || !Bf(jt(e, ke))),
          D && e.setAttribute("transform", D))),
      Math.abs(y) > 90 &&
        Math.abs(y) < 270 &&
        (s
          ? ((p *= -1), (y += m <= 0 ? 180 : -180), (m += m <= 0 ? 180 : -180))
          : ((g *= -1), (y += y <= 0 ? 180 : -180))),
      (t = t || i.uncache),
      (i.x =
        f -
        ((i.xPercent =
          f &&
          ((!t && i.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-f) ? -50 : 0)))
          ? (e.offsetWidth * i.xPercent) / 100
          : 0) +
        o),
      (i.y =
        d -
        ((i.yPercent =
          d &&
          ((!t && i.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
          ? (e.offsetHeight * i.yPercent) / 100
          : 0) +
        o),
      (i.z = h + o),
      (i.scaleX = Re(p)),
      (i.scaleY = Re(g)),
      (i.rotation = Re(m) + l),
      (i.rotationX = Re(v) + l),
      (i.rotationY = Re(b) + l),
      (i.skewX = y + l),
      (i.skewY = _ + l),
      (i.transformPerspective = S + o),
      (i.zOrigin = parseFloat(u.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
        (r[wt] = Eo(u)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = Rt.force3D),
      (i.renderTransform = i.svg ? nv : Df ? Ff : tv),
      (i.uncache = 0),
      i
    );
  }, "_parseTransform"),
  Eo = a(function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  }, "_firstTwoOnly"),
  la = a(function (e, t, i) {
    var r = lt(t);
    return Re(parseFloat(t) + parseFloat(si(e, "x", i + "px", r))) + r;
  }, "_addPxTranslate"),
  tv = a(function (e, t) {
    (t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      Ff(e, t);
  }, "_renderNon3DTransforms"),
  vi = "0deg",
  Fr = "0px",
  yi = ") ",
  Ff = a(function (e, t) {
    var i = t || this,
      r = i.xPercent,
      s = i.yPercent,
      o = i.x,
      l = i.y,
      c = i.z,
      u = i.rotation,
      f = i.rotationY,
      d = i.rotationX,
      h = i.skewX,
      p = i.skewY,
      g = i.scaleX,
      m = i.scaleY,
      v = i.transformPerspective,
      b = i.force3D,
      y = i.target,
      _ = i.zOrigin,
      S = "",
      T = (b === "auto" && e && e !== 1) || b === !0;
    if (_ && (d !== vi || f !== vi)) {
      var w = parseFloat(f) * pr,
        C = Math.sin(w),
        P = Math.cos(w),
        L;
      (w = parseFloat(d) * pr),
        (L = Math.cos(w)),
        (o = la(y, o, C * L * -_)),
        (l = la(y, l, -Math.sin(w) * -_)),
        (c = la(y, c, P * L * -_ + _));
    }
    v !== Fr && (S += "perspective(" + v + yi),
      (r || s) && (S += "translate(" + r + "%, " + s + "%) "),
      (T || o !== Fr || l !== Fr || c !== Fr) &&
        (S +=
          c !== Fr || T
            ? "translate3d(" + o + ", " + l + ", " + c + ") "
            : "translate(" + o + ", " + l + yi),
      u !== vi && (S += "rotate(" + u + yi),
      f !== vi && (S += "rotateY(" + f + yi),
      d !== vi && (S += "rotateX(" + d + yi),
      (h !== vi || p !== vi) && (S += "skew(" + h + ", " + p + yi),
      (g !== 1 || m !== 1) && (S += "scale(" + g + ", " + m + yi),
      (y.style[ke] = S || "translate(0, 0)");
  }, "_renderCSSTransforms"),
  nv = a(function (e, t) {
    var i = t || this,
      r = i.xPercent,
      s = i.yPercent,
      o = i.x,
      l = i.y,
      c = i.rotation,
      u = i.skewX,
      f = i.skewY,
      d = i.scaleX,
      h = i.scaleY,
      p = i.target,
      g = i.xOrigin,
      m = i.yOrigin,
      v = i.xOffset,
      b = i.yOffset,
      y = i.forceCSS,
      _ = parseFloat(o),
      S = parseFloat(l),
      T,
      w,
      C,
      P,
      L;
    (c = parseFloat(c)),
      (u = parseFloat(u)),
      (f = parseFloat(f)),
      f && ((f = parseFloat(f)), (u += f), (c += f)),
      c || u
        ? ((c *= pr),
          (u *= pr),
          (T = Math.cos(c) * d),
          (w = Math.sin(c) * d),
          (C = Math.sin(c - u) * -h),
          (P = Math.cos(c - u) * h),
          u &&
            ((f *= pr),
            (L = Math.tan(u - f)),
            (L = Math.sqrt(1 + L * L)),
            (C *= L),
            (P *= L),
            f &&
              ((L = Math.tan(f)),
              (L = Math.sqrt(1 + L * L)),
              (T *= L),
              (w *= L))),
          (T = Re(T)),
          (w = Re(w)),
          (C = Re(C)),
          (P = Re(P)))
        : ((T = d), (P = h), (w = C = 0)),
      ((_ && !~(o + "").indexOf("px")) || (S && !~(l + "").indexOf("px"))) &&
        ((_ = si(p, "x", o, "px")), (S = si(p, "y", l, "px"))),
      (g || m || v || b) &&
        ((_ = Re(_ + g - (g * T + m * C) + v)),
        (S = Re(S + m - (g * w + m * P) + b))),
      (r || s) &&
        ((L = p.getBBox()),
        (_ = Re(_ + (r / 100) * L.width)),
        (S = Re(S + (s / 100) * L.height))),
      (L =
        "matrix(" + T + "," + w + "," + C + "," + P + "," + _ + "," + S + ")"),
      p.setAttribute("transform", L),
      y && (p.style[ke] = L);
  }, "_renderSVGTransforms"),
  iv = a(function (e, t, i, r, s) {
    var o = 360,
      l = Ze(s),
      c = parseFloat(s) * (l && ~s.indexOf("rad") ? _i : 1),
      u = c - r,
      f = r + u + "deg",
      d,
      h;
    return (
      l &&
        ((d = s.split("_")[1]),
        d === "short" &&
          ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -360)),
        d === "cw" && u < 0
          ? (u = ((u + o * Mc) % o) - ~~(u / o) * o)
          : d === "ccw" && u > 0 && (u = ((u - o * Mc) % o) - ~~(u / o) * o)),
      (e._pt = h = new Et(e._pt, t, i, r, u, Fg)),
      (h.e = f),
      (h.u = "deg"),
      e._props.push(i),
      h
    );
  }, "_addRotationalPropTween"),
  zc = a(function (e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  }, "_assign"),
  rv = a(function (e, t, i) {
    var r = zc({}, i._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      o = i.style,
      l,
      c,
      u,
      f,
      d,
      h,
      p,
      g;
    r.svg
      ? ((u = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (o[ke] = t),
        (l = ws(i, 1)),
        Bi(i, ke),
        i.setAttribute("transform", u))
      : ((u = getComputedStyle(i)[ke]),
        (o[ke] = t),
        (l = ws(i, 1)),
        (o[ke] = u));
    for (c in Rn)
      (u = r[c]),
        (f = l[c]),
        u !== f &&
          s.indexOf(c) < 0 &&
          ((p = lt(u)),
          (g = lt(f)),
          (d = p !== g ? si(i, c, u, g) : parseFloat(u)),
          (h = parseFloat(f)),
          (e._pt = new Et(e._pt, l, c, d, h - d, qa)),
          (e._pt.u = g || 0),
          e._props.push(c));
    zc(l, r);
  }, "_addRawTransformPTs");
Tt("padding,margin,Width,Radius", function (n, e) {
  var t = "Top",
    i = "Right",
    r = "Bottom",
    s = "Left",
    o = (e < 3 ? [t, i, r, s] : [t + s, t + i, r + i, r + s]).map(function (l) {
      return e < 2 ? n + l : "border" + l + n;
    });
  To[e > 1 ? "border" + n : n] = function (l, c, u, f, d) {
    var h, p;
    if (arguments.length < 4)
      return (
        (h = o.map(function (g) {
          return kn(l, g, u);
        })),
        (p = h.join(" ")),
        p.split(h[0]).length === 5 ? h[0] : p
      );
    (h = (f + "").split(" ")),
      (p = {}),
      o.forEach(function (g, m) {
        return (p[g] = h[m] = h[m] || h[((m - 1) / 2) | 0]);
      }),
      l.init(c, p, d);
  };
});
var qf = {
  name: "css",
  register: Va,
  targetTest: a(function (e) {
    return e.style && e.nodeType;
  }, "targetTest"),
  init: a(function (e, t, i, r, s) {
    var o = this._props,
      l = e.style,
      c = i.vars.startAt,
      u,
      f,
      d,
      h,
      p,
      g,
      m,
      v,
      b,
      y,
      _,
      S,
      T,
      w,
      C,
      P;
    Ol || Va(),
      (this.styles = this.styles || If(e)),
      (P = this.styles.props),
      (this.tween = i);
    for (m in t)
      if (m !== "autoRound" && ((f = t[m]), !($t[m] && Tf(m, t, i, r, e, s)))) {
        if (
          ((p = typeof f),
          (g = To[m]),
          p === "function" && ((f = f.call(i, r, e, s)), (p = typeof f)),
          p === "string" && ~f.indexOf("random(") && (f = xs(f)),
          g)
        )
          g(this, e, m, f, i) && (C = 1);
        else if (m.substr(0, 2) === "--")
          (u = (getComputedStyle(e).getPropertyValue(m) + "").trim()),
            (f += ""),
            (ei.lastIndex = 0),
            ei.test(u) || ((v = lt(u)), (b = lt(f))),
            b ? v !== b && (u = si(e, m, u, b) + b) : v && (f += v),
            this.add(l, "setProperty", u, f, r, s, 0, 0, m),
            o.push(m),
            P.push(m, 0, l[m]);
        else if (p !== "undefined") {
          if (
            (c && m in c
              ? ((u = typeof c[m] == "function" ? c[m].call(i, r, e, s) : c[m]),
                Ze(u) && ~u.indexOf("random(") && (u = xs(u)),
                lt(u + "") ||
                  u === "auto" ||
                  (u += Rt.units[m] || lt(kn(e, m)) || ""),
                (u + "").charAt(1) === "=" && (u = kn(e, m)))
              : (u = kn(e, m)),
            (h = parseFloat(u)),
            (y = p === "string" && f.charAt(1) === "=" && f.substr(0, 2)),
            y && (f = f.substr(2)),
            (d = parseFloat(f)),
            m in pn &&
              (m === "autoAlpha" &&
                (h === 1 && kn(e, "visibility") === "hidden" && d && (h = 0),
                P.push("visibility", 0, l.visibility),
                Kn(
                  this,
                  l,
                  "visibility",
                  h ? "inherit" : "hidden",
                  d ? "inherit" : "hidden",
                  !d
                )),
              m !== "scale" &&
                m !== "transform" &&
                ((m = pn[m]), ~m.indexOf(",") && (m = m.split(",")[0]))),
            (_ = m in Rn),
            _)
          ) {
            if (
              (this.styles.save(m),
              p === "string" &&
                f.substring(0, 6) === "var(--" &&
                ((f = jt(e, f.substring(4, f.indexOf(")")))),
                (d = parseFloat(f))),
              S ||
                ((T = e._gsap),
                (T.renderTransform && !t.parseTransform) ||
                  ws(e, t.parseTransform),
                (w = t.smoothOrigin !== !1 && T.smooth),
                (S = this._pt =
                  new Et(this._pt, l, ke, 0, 1, T.renderTransform, T, 0, -1)),
                (S.dep = 1)),
              m === "scale")
            )
              (this._pt = new Et(
                this._pt,
                T,
                "scaleY",
                T.scaleY,
                (y ? dr(T.scaleY, y + d) : d) - T.scaleY || 0,
                qa
              )),
                (this._pt.u = 0),
                o.push("scaleY", m),
                (m += "X");
            else if (m === "transformOrigin") {
              P.push(wt, 0, l[wt]),
                (f = Jg(f)),
                T.svg
                  ? Wa(e, f, 0, w, 0, this)
                  : ((b = parseFloat(f.split(" ")[2]) || 0),
                    b !== T.zOrigin && Kn(this, T, "zOrigin", T.zOrigin, b),
                    Kn(this, l, m, Eo(u), Eo(f)));
              continue;
            } else if (m === "svgOrigin") {
              Wa(e, f, 1, w, 0, this);
              continue;
            } else if (m in Nf) {
              iv(this, T, m, h, y ? dr(h, y + f) : f);
              continue;
            } else if (m === "smoothOrigin") {
              Kn(this, T, "smooth", T.smooth, f);
              continue;
            } else if (m === "force3D") {
              T[m] = f;
              continue;
            } else if (m === "transform") {
              rv(this, f, e);
              continue;
            }
          } else m in l || (m = Ar(m) || m);
          if (_ || ((d || d === 0) && (h || h === 0) && !Bg.test(f) && m in l))
            (v = (u + "").substr((h + "").length)),
              d || (d = 0),
              (b = lt(f) || (m in Rt.units ? Rt.units[m] : v)),
              v !== b && (h = si(e, m, u, b)),
              (this._pt = new Et(
                this._pt,
                _ ? T : l,
                m,
                h,
                (y ? dr(h, y + d) : d) - h,
                !_ && (b === "px" || m === "zIndex") && t.autoRound !== !1
                  ? Hg
                  : qa
              )),
              (this._pt.u = b || 0),
              v !== b && b !== "%" && ((this._pt.b = u), (this._pt.r = qg));
          else if (m in l) Qg.call(this, e, m, u, y ? y + f : f);
          else if (m in e) this.add(e, m, u || e[m], y ? y + f : f, r, s);
          else if (m !== "parseTransform") {
            Sl(m, f);
            continue;
          }
          _ ||
            (m in l
              ? P.push(m, 0, l[m])
              : typeof e[m] == "function"
              ? P.push(m, 2, e[m]())
              : P.push(m, 1, u || e[m])),
            o.push(m);
        }
      }
    C && Mf(this);
  }, "init"),
  render: a(function (e, t) {
    if (t.tween._time || !Ll())
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    else t.styles.revert();
  }, "render"),
  get: kn,
  aliases: pn,
  getSetter: a(function (e, t, i) {
    var r = pn[t];
    return (
      r && r.indexOf(",") < 0 && (t = r),
      t in Rn && t !== wt && (e._gsap.x || kn(e, "x"))
        ? i && kc === i
          ? t === "scale"
            ? Yg
            : Xg
          : (kc = i || {}) && (t === "scale" ? Gg : jg)
        : e.style && !bl(e.style[t])
        ? Vg
        : ~t.indexOf("-")
        ? Wg
        : Al(e, t)
    );
  }, "getSetter"),
  core: { _removeProperty: Bi, _getMatrix: Dl },
};
Ct.utils.checkPrefix = Ar;
Ct.core.getStyleSaver = If;
(function (n, e, t, i) {
  var r = Tt(n + "," + e + "," + t, function (s) {
    Rn[s] = 1;
  });
  Tt(e, function (s) {
    (Rt.units[s] = "deg"), (Nf[s] = 1);
  }),
    (pn[r[13]] = n + "," + e),
    Tt(i, function (s) {
      var o = s.split(":");
      pn[o[1]] = r[o[0]];
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
Ct.registerPlugin(qf);
var N = Ct.registerPlugin(qf) || Ct;
N.core.Tween;
function sv(n, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(n, i.key, i);
  }
}
a(sv, "_defineProperties");
function ov(n, e, t) {
  return e && sv(n.prototype, e), n;
}
a(ov, "_createClass");
var et,
  so,
  Dt,
  Zn,
  Qn,
  mr,
  Hf,
  xi,
  ss,
  Vf,
  An,
  nn,
  Wf,
  Xf = a(function () {
    return (
      et ||
      (typeof window < "u" && (et = window.gsap) && et.registerPlugin && et)
    );
  }, "_getGSAP"),
  Yf = 1,
  ar = [],
  oe = [],
  bn = [],
  os = Date.now,
  Xa = a(function (e, t) {
    return t;
  }, "_bridge"),
  av = a(function () {
    var e = ss.core,
      t = e.bridge || {},
      i = e._scrollers,
      r = e._proxies;
    i.push.apply(i, oe),
      r.push.apply(r, bn),
      (oe = i),
      (bn = r),
      (Xa = a(function (o, l) {
        return t[o](l);
      }, "_bridge"));
  }, "_integrate"),
  ti = a(function (e, t) {
    return ~bn.indexOf(e) && bn[bn.indexOf(e) + 1][t];
  }, "_getProxyProp"),
  as = a(function (e) {
    return !!~Vf.indexOf(e);
  }, "_isViewport"),
  ht = a(function (e, t, i, r, s) {
    return e.addEventListener(t, i, { passive: r !== !1, capture: !!s });
  }, "_addListener"),
  dt = a(function (e, t, i, r) {
    return e.removeEventListener(t, i, !!r);
  }, "_removeListener"),
  Ns = "scrollLeft",
  Bs = "scrollTop",
  Ya = a(function () {
    return (An && An.isPressed) || oe.cache++;
  }, "_onScroll"),
  wo = a(function (e, t) {
    var i = a(function r(s) {
      if (s || s === 0) {
        Yf && (Dt.history.scrollRestoration = "manual");
        var o = An && An.isPressed;
        (s = r.v = Math.round(s) || (An && An.iOS ? 1 : 0)),
          e(s),
          (r.cacheID = oe.cache),
          o && Xa("ss", s);
      } else (t || oe.cache !== r.cacheID || Xa("ref")) && ((r.cacheID = oe.cache), (r.v = e()));
      return r.v + r.offset;
    }, "cachingFunc");
    return (i.offset = 0), e && i;
  }, "_scrollCacheFunc"),
  bt = {
    s: Ns,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: wo(function (n) {
      return arguments.length
        ? Dt.scrollTo(n, Ye.sc())
        : Dt.pageXOffset || Zn[Ns] || Qn[Ns] || mr[Ns] || 0;
    }),
  },
  Ye = {
    s: Bs,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: bt,
    sc: wo(function (n) {
      return arguments.length
        ? Dt.scrollTo(bt.sc(), n)
        : Dt.pageYOffset || Zn[Bs] || Qn[Bs] || mr[Bs] || 0;
    }),
  },
  xt = a(function (e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || et.utils.toArray)(e)[0] ||
      (typeof e == "string" && et.config().nullTargetWarn !== !1
        ? void 0
        : null)
    );
  }, "_getTarget"),
  lv = a(function (e, t) {
    for (var i = t.length; i--; ) if (t[i] === e || t[i].contains(e)) return !0;
    return !1;
  }, "_isWithin"),
  oi = a(function (e, t) {
    var i = t.s,
      r = t.sc;
    as(e) && (e = Zn.scrollingElement || Qn);
    var s = oe.indexOf(e),
      o = r === Ye.sc ? 1 : 2;
    !~s && (s = oe.push(e) - 1), oe[s + o] || ht(e, "scroll", Ya);
    var l = oe[s + o],
      c =
        l ||
        (oe[s + o] =
          wo(ti(e, i), !0) ||
          (as(e)
            ? r
            : wo(function (u) {
                return arguments.length ? (e[i] = u) : e[i];
              })));
    return (
      (c.target = e),
      l || (c.smooth = et.getProperty(e, "scrollBehavior") === "smooth"),
      c
    );
  }, "_getScrollFunc"),
  Ga = a(function (e, t, i) {
    var r = e,
      s = e,
      o = os(),
      l = o,
      c = t || 50,
      u = Math.max(500, c * 3),
      f = a(function (g, m) {
        var v = os();
        m || v - o > c
          ? ((s = r), (r = g), (l = o), (o = v))
          : i
          ? (r += g)
          : (r = s + ((g - s) / (v - l)) * (o - l));
      }, "update"),
      d = a(function () {
        (s = r = i ? 0 : r), (l = o = 0);
      }, "reset"),
      h = a(function (g) {
        var m = l,
          v = s,
          b = os();
        return (
          (g || g === 0) && g !== r && f(g),
          o === l || b - l > u
            ? 0
            : ((r + (i ? v : -v)) / ((i ? b : o) - m)) * 1e3
        );
      }, "getVelocity");
    return { update: f, reset: d, getVelocity: h };
  }, "_getVelocityProp"),
  qr = a(function (e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  }, "_getEvent"),
  Rc = a(function (e) {
    var t = Math.max.apply(Math, e),
      i = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(i) ? t : i;
  }, "_getAbsoluteMax"),
  Gf = a(function () {
    (ss = et.core.globals().ScrollTrigger), ss && ss.core && av();
  }, "_setScrollTrigger"),
  jf = a(function (e) {
    return (
      (et = e || Xf()),
      !so &&
        et &&
        typeof document < "u" &&
        document.body &&
        ((Dt = window),
        (Zn = document),
        (Qn = Zn.documentElement),
        (mr = Zn.body),
        (Vf = [Dt, Zn, Qn, mr]),
        et.utils.clamp,
        (Wf = et.core.context || function () {}),
        (xi = "onpointerenter" in mr ? "pointer" : "mouse"),
        (Hf = Ne.isTouch =
          Dt.matchMedia &&
          Dt.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Dt ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (nn = Ne.eventTypes =
          (
            "ontouchstart" in Qn
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Qn
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (Yf = 0);
        }, 500),
        Gf(),
        (so = 1)),
      so
    );
  }, "_initCore");
bt.op = Ye;
oe.cache = 0;
var Ne = (function () {
  function n(t) {
    this.init(t);
  }
  a(n, "Observer");
  var e = n.prototype;
  return (
    (e.init = a(function (i) {
      so || jf(et), ss || Gf();
      var r = i.tolerance,
        s = i.dragMinimum,
        o = i.type,
        l = i.target,
        c = i.lineHeight,
        u = i.debounce,
        f = i.preventDefault,
        d = i.onStop,
        h = i.onStopDelay,
        p = i.ignore,
        g = i.wheelSpeed,
        m = i.event,
        v = i.onDragStart,
        b = i.onDragEnd,
        y = i.onDrag,
        _ = i.onPress,
        S = i.onRelease,
        T = i.onRight,
        w = i.onLeft,
        C = i.onUp,
        P = i.onDown,
        L = i.onChangeX,
        k = i.onChangeY,
        $ = i.onChange,
        x = i.onToggleX,
        E = i.onToggleY,
        O = i.onHover,
        I = i.onHoverEnd,
        M = i.onMove,
        D = i.ignoreCheck,
        z = i.isNormalizer,
        B = i.onGestureStart,
        A = i.onGestureEnd,
        V = i.onWheel,
        G = i.onEnable,
        le = i.onDisable,
        ie = i.onClick,
        Z = i.scrollSpeed,
        Q = i.capture,
        de = i.allowClicks,
        me = i.lockAxis,
        Ee = i.onLockAxis;
      (this.target = l = xt(l) || Qn),
        (this.vars = i),
        p && (p = et.utils.toArray(p)),
        (r = r || 1e-9),
        (s = s || 0),
        (g = g || 1),
        (Z = Z || 1),
        (o = o || "wheel,touch,pointer"),
        (u = u !== !1),
        c || (c = parseFloat(Dt.getComputedStyle(mr).lineHeight) || 22);
      var $e,
        he,
        we,
        X,
        ne,
        Oe,
        Le,
        R = this,
        Ie = 0,
        Kt = 0,
        Ft = i.passive || (!f && i.passive !== !1),
        W = oi(l, bt),
        qt = oi(l, Ye),
        Nn = W(),
        fi = qt(),
        Ge =
          ~o.indexOf("touch") &&
          !~o.indexOf("pointer") &&
          nn[0] === "pointerdown",
        Bn = as(l),
        De = l.ownerDocument || Zn,
        Zt = [0, 0, 0],
        Ht = [0, 0, 0],
        Tn = 0,
        Dr = a(function () {
          return (Tn = os());
        }, "clickCapture"),
        Be = a(function (K, fe) {
          return (
            ((R.event = K) && p && lv(K.target, p)) ||
            (fe && Ge && K.pointerType !== "touch") ||
            (D && D(K, fe))
          );
        }, "_ignoreCheck"),
        Is = a(function () {
          R._vx.reset(), R._vy.reset(), he.pause(), d && d(R);
        }, "onStopFunc"),
        En = a(function () {
          var K = (R.deltaX = Rc(Zt)),
            fe = (R.deltaY = Rc(Ht)),
            q = Math.abs(K) >= r,
            J = Math.abs(fe) >= r;
          $ && (q || J) && $(R, K, fe, Zt, Ht),
            q &&
              (T && R.deltaX > 0 && T(R),
              w && R.deltaX < 0 && w(R),
              L && L(R),
              x && R.deltaX < 0 != Ie < 0 && x(R),
              (Ie = R.deltaX),
              (Zt[0] = Zt[1] = Zt[2] = 0)),
            J &&
              (P && R.deltaY > 0 && P(R),
              C && R.deltaY < 0 && C(R),
              k && k(R),
              E && R.deltaY < 0 != Kt < 0 && E(R),
              (Kt = R.deltaY),
              (Ht[0] = Ht[1] = Ht[2] = 0)),
            (X || we) &&
              (M && M(R),
              we && (v && we === 1 && v(R), y && y(R), (we = 0)),
              (X = !1)),
            Oe && !(Oe = !1) && Ee && Ee(R),
            ne && (V(R), (ne = !1)),
            ($e = 0);
        }, "update"),
        Gi = a(function (K, fe, q) {
          (Zt[q] += K),
            (Ht[q] += fe),
            R._vx.update(K),
            R._vy.update(fe),
            u ? $e || ($e = requestAnimationFrame(En)) : En();
        }, "onDelta"),
        ji = a(function (K, fe) {
          me &&
            !Le &&
            ((R.axis = Le = Math.abs(K) > Math.abs(fe) ? "x" : "y"), (Oe = !0)),
            Le !== "y" && ((Zt[2] += K), R._vx.update(K, !0)),
            Le !== "x" && ((Ht[2] += fe), R._vy.update(fe, !0)),
            u ? $e || ($e = requestAnimationFrame(En)) : En();
        }, "onTouchOrPointerDelta"),
        Fn = a(function (K) {
          if (!Be(K, 1)) {
            K = qr(K, f);
            var fe = K.clientX,
              q = K.clientY,
              J = fe - R.x,
              U = q - R.y,
              ee = R.isDragging;
            (R.x = fe),
              (R.y = q),
              (ee ||
                ((J || U) &&
                  (Math.abs(R.startX - fe) >= s ||
                    Math.abs(R.startY - q) >= s))) &&
                ((we = ee ? 2 : 1), ee || (R.isDragging = !0), ji(J, U));
          }
        }, "_onDrag"),
        di = (R.onPress = function (te) {
          Be(te, 1) ||
            (te && te.button) ||
            ((R.axis = Le = null),
            he.pause(),
            (R.isPressed = !0),
            (te = qr(te)),
            (Ie = Kt = 0),
            (R.startX = R.x = te.clientX),
            (R.startY = R.y = te.clientY),
            R._vx.reset(),
            R._vy.reset(),
            ht(z ? l : De, nn[1], Fn, Ft, !0),
            (R.deltaX = R.deltaY = 0),
            _ && _(R));
        }),
        ae = (R.onRelease = function (te) {
          if (!Be(te, 1)) {
            dt(z ? l : De, nn[1], Fn, !0);
            var K = !isNaN(R.y - R.startY),
              fe = R.isDragging,
              q =
                fe &&
                (Math.abs(R.x - R.startX) > 3 || Math.abs(R.y - R.startY) > 3),
              J = qr(te);
            !q &&
              K &&
              (R._vx.reset(),
              R._vy.reset(),
              f &&
                de &&
                et.delayedCall(0.08, function () {
                  if (os() - Tn > 300 && !te.defaultPrevented) {
                    if (te.target.click) te.target.click();
                    else if (De.createEvent) {
                      var U = De.createEvent("MouseEvents");
                      U.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Dt,
                        1,
                        J.screenX,
                        J.screenY,
                        J.clientX,
                        J.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        te.target.dispatchEvent(U);
                    }
                  }
                })),
              (R.isDragging = R.isGesturing = R.isPressed = !1),
              d && fe && !z && he.restart(!0),
              we && En(),
              b && fe && b(R),
              S && S(R, q);
          }
        }),
        hi = a(function (K) {
          return (
            K.touches &&
            K.touches.length > 1 &&
            (R.isGesturing = !0) &&
            B(K, R.isDragging)
          );
        }, "_onGestureStart"),
        Qt = a(function () {
          return (R.isGesturing = !1) || A(R);
        }, "_onGestureEnd"),
        Jt = a(function (K) {
          if (!Be(K)) {
            var fe = W(),
              q = qt();
            Gi((fe - Nn) * Z, (q - fi) * Z, 1),
              (Nn = fe),
              (fi = q),
              d && he.restart(!0);
          }
        }, "onScroll"),
        en = a(function (K) {
          if (!Be(K)) {
            (K = qr(K, f)), V && (ne = !0);
            var fe =
              (K.deltaMode === 1 ? c : K.deltaMode === 2 ? Dt.innerHeight : 1) *
              g;
            Gi(K.deltaX * fe, K.deltaY * fe, 0), d && !z && he.restart(!0);
          }
        }, "_onWheel"),
        pi = a(function (K) {
          if (!Be(K)) {
            var fe = K.clientX,
              q = K.clientY,
              J = fe - R.x,
              U = q - R.y;
            (R.x = fe),
              (R.y = q),
              (X = !0),
              d && he.restart(!0),
              (J || U) && ji(J, U);
          }
        }, "_onMove"),
        Ui = a(function (K) {
          (R.event = K), O(R);
        }, "_onHover"),
        wn = a(function (K) {
          (R.event = K), I(R);
        }, "_onHoverEnd"),
        zr = a(function (K) {
          return Be(K) || (qr(K, f) && ie(R));
        }, "_onClick");
      (he = R._dc = et.delayedCall(h || 0.25, Is).pause()),
        (R.deltaX = R.deltaY = 0),
        (R._vx = Ga(0, 50, !0)),
        (R._vy = Ga(0, 50, !0)),
        (R.scrollX = W),
        (R.scrollY = qt),
        (R.isDragging = R.isGesturing = R.isPressed = !1),
        Wf(this),
        (R.enable = function (te) {
          return (
            R.isEnabled ||
              (ht(Bn ? De : l, "scroll", Ya),
              o.indexOf("scroll") >= 0 && ht(Bn ? De : l, "scroll", Jt, Ft, Q),
              o.indexOf("wheel") >= 0 && ht(l, "wheel", en, Ft, Q),
              ((o.indexOf("touch") >= 0 && Hf) || o.indexOf("pointer") >= 0) &&
                (ht(l, nn[0], di, Ft, Q),
                ht(De, nn[2], ae),
                ht(De, nn[3], ae),
                de && ht(l, "click", Dr, !0, !0),
                ie && ht(l, "click", zr),
                B && ht(De, "gesturestart", hi),
                A && ht(De, "gestureend", Qt),
                O && ht(l, xi + "enter", Ui),
                I && ht(l, xi + "leave", wn),
                M && ht(l, xi + "move", pi)),
              (R.isEnabled = !0),
              (R.isDragging = R.isGesturing = R.isPressed = X = we = !1),
              R._vx.reset(),
              R._vy.reset(),
              (Nn = W()),
              (fi = qt()),
              te && te.type && di(te),
              G && G(R)),
            R
          );
        }),
        (R.disable = function () {
          R.isEnabled &&
            (ar.filter(function (te) {
              return te !== R && as(te.target);
            }).length || dt(Bn ? De : l, "scroll", Ya),
            R.isPressed &&
              (R._vx.reset(), R._vy.reset(), dt(z ? l : De, nn[1], Fn, !0)),
            dt(Bn ? De : l, "scroll", Jt, Q),
            dt(l, "wheel", en, Q),
            dt(l, nn[0], di, Q),
            dt(De, nn[2], ae),
            dt(De, nn[3], ae),
            dt(l, "click", Dr, !0),
            dt(l, "click", zr),
            dt(De, "gesturestart", hi),
            dt(De, "gestureend", Qt),
            dt(l, xi + "enter", Ui),
            dt(l, xi + "leave", wn),
            dt(l, xi + "move", pi),
            (R.isEnabled = R.isPressed = R.isDragging = !1),
            le && le(R));
        }),
        (R.kill = R.revert =
          function () {
            R.disable();
            var te = ar.indexOf(R);
            te >= 0 && ar.splice(te, 1), An === R && (An = 0);
          }),
        ar.push(R),
        z && as(l) && (An = R),
        R.enable(m);
    }, "init")),
    ov(n, [
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
Ne.version = "3.13.0";
Ne.create = function (n) {
  return new Ne(n);
};
Ne.register = jf;
Ne.getAll = function () {
  return ar.slice();
};
Ne.getById = function (n) {
  return ar.filter(function (e) {
    return e.vars.id === n;
  })[0];
};
Xf() && et.registerPlugin(Ne);
var H,
  ir,
  se,
  be,
  Ot,
  pe,
  zl,
  Co,
  Cs,
  ls,
  Ur,
  Fs,
  st,
  Ho,
  ja,
  gt,
  Nc,
  Bc,
  rr,
  Uf,
  ca,
  Kf,
  mt,
  Ua,
  Zf,
  Qf,
  Vn,
  Ka,
  Rl,
  gr,
  Nl,
  Po,
  Za,
  ua,
  qs = 1,
  ot = Date.now,
  fa = ot(),
  Ut = 0,
  Kr = 0,
  Fc = a(function (e, t, i) {
    var r = Mt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
  }, "_parseClamp"),
  qc = a(function (e, t) {
    return t && (!Mt(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  }, "_keepClamp"),
  cv = a(function n() {
    return Kr && requestAnimationFrame(n);
  }, "_rafBugFix"),
  Hc = a(function () {
    return (Ho = 1);
  }, "_pointerDownHandler"),
  Vc = a(function () {
    return (Ho = 0);
  }, "_pointerUpHandler"),
  fn = a(function (e) {
    return e;
  }, "_passThrough"),
  Zr = a(function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  }, "_round"),
  Jf = a(function () {
    return typeof window < "u";
  }, "_windowExists"),
  ed = a(function () {
    return H || (Jf() && (H = window.gsap) && H.registerPlugin && H);
  }, "_getGSAP"),
  Fi = a(function (e) {
    return !!~zl.indexOf(e);
  }, "_isViewport"),
  td = a(function (e) {
    return (
      (e === "Height" ? Nl : se["inner" + e]) ||
      Ot["client" + e] ||
      pe["client" + e]
    );
  }, "_getViewportDimension"),
  nd = a(function (e) {
    return (
      ti(e, "getBoundingClientRect") ||
      (Fi(e)
        ? function () {
            return (uo.width = se.innerWidth), (uo.height = Nl), uo;
          }
        : function () {
            return Mn(e);
          })
    );
  }, "_getBoundsFunc"),
  uv = a(function (e, t, i) {
    var r = i.d,
      s = i.d2,
      o = i.a;
    return (o = ti(e, "getBoundingClientRect"))
      ? function () {
          return o()[r];
        }
      : function () {
          return (t ? td(s) : e["client" + s]) || 0;
        };
  }, "_getSizeFunc"),
  fv = a(function (e, t) {
    return !t || ~bn.indexOf(e)
      ? nd(e)
      : function () {
          return uo;
        };
  }, "_getOffsetsFunc"),
  mn = a(function (e, t) {
    var i = t.s,
      r = t.d2,
      s = t.d,
      o = t.a;
    return Math.max(
      0,
      (i = "scroll" + r) && (o = ti(e, i))
        ? o() - nd(e)()[s]
        : Fi(e)
        ? (Ot[i] || pe[i]) - td(r)
        : e[i] - e["offset" + r]
    );
  }, "_maxScroll"),
  Hs = a(function (e, t) {
    for (var i = 0; i < rr.length; i += 3)
      (!t || ~t.indexOf(rr[i + 1])) && e(rr[i], rr[i + 1], rr[i + 2]);
  }, "_iterateAutoRefresh"),
  Mt = a(function (e) {
    return typeof e == "string";
  }, "_isString"),
  ct = a(function (e) {
    return typeof e == "function";
  }, "_isFunction"),
  Qr = a(function (e) {
    return typeof e == "number";
  }, "_isNumber"),
  Si = a(function (e) {
    return typeof e == "object";
  }, "_isObject"),
  Hr = a(function (e, t, i) {
    return e && e.progress(t ? 0 : 1) && i && e.pause();
  }, "_endAnimation"),
  da = a(function (e, t) {
    if (e.enabled) {
      var i = e._ctx
        ? e._ctx.add(function () {
            return t(e);
          })
        : t(e);
      i && i.totalTime && (e.callbackAnimation = i);
    }
  }, "_callback"),
  Qi = Math.abs,
  id = "left",
  rd = "top",
  Bl = "right",
  Fl = "bottom",
  Oi = "width",
  Li = "height",
  cs = "Right",
  us = "Left",
  fs = "Top",
  ds = "Bottom",
  Fe = "padding",
  Xt = "margin",
  $r = "Width",
  ql = "Height",
  Xe = "px",
  Yt = a(function (e) {
    return se.getComputedStyle(e);
  }, "_getComputedStyle"),
  dv = a(function (e) {
    var t = Yt(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
  }, "_makePositionable"),
  Wc = a(function (e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  }, "_setDefaults"),
  Mn = a(function (e, t) {
    var i =
        t &&
        Yt(e)[ja] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        H.to(e, {
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
  ko = a(function (e, t) {
    var i = t.d2;
    return e["offset" + i] || e["client" + i] || 0;
  }, "_getSize"),
  sd = a(function (e) {
    var t = [],
      i = e.labels,
      r = e.duration(),
      s;
    for (s in i) t.push(i[s] / r);
    return t;
  }, "_getLabelRatioArray"),
  hv = a(function (e) {
    return function (t) {
      return H.utils.snap(sd(e), t);
    };
  }, "_getClosestLabel"),
  Hl = a(function (e) {
    var t = H.utils.snap(e),
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
  pv = a(function (e) {
    return function (t, i) {
      return Hl(sd(e))(t, i.direction);
    };
  }, "_getLabelAtDirection"),
  Vs = a(function (e, t, i, r) {
    return i.split(",").forEach(function (s) {
      return e(t, s, r);
    });
  }, "_multiListener"),
  Ke = a(function (e, t, i, r, s) {
    return e.addEventListener(t, i, { passive: !r, capture: !!s });
  }, "_addListener"),
  Ue = a(function (e, t, i, r) {
    return e.removeEventListener(t, i, !!r);
  }, "_removeListener"),
  Ws = a(function (e, t, i) {
    (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
  }, "_wheelListener"),
  Xc = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Xs = { toggleActions: "play", anticipatePin: 0 },
  Mo = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  oo = a(function (e, t) {
    if (Mt(e)) {
      var i = e.indexOf("="),
        r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
      ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
        (e =
          r +
          (e in Mo
            ? Mo[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  }, "_offsetToPx"),
  Ys = a(function (e, t, i, r, s, o, l, c) {
    var u = s.startColor,
      f = s.endColor,
      d = s.fontSize,
      h = s.indent,
      p = s.fontWeight,
      g = be.createElement("div"),
      m = Fi(i) || ti(i, "pinType") === "fixed",
      v = e.indexOf("scroller") !== -1,
      b = m ? pe : i,
      y = e.indexOf("start") !== -1,
      _ = y ? u : f,
      S =
        "border-color:" +
        _ +
        ";font-size:" +
        d +
        ";color:" +
        _ +
        ";font-weight:" +
        p +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (S += "position:" + ((v || c) && m ? "fixed;" : "absolute;")),
      (v || c || !m) &&
        (S += (r === Ye ? Bl : Fl) + ":" + (o + parseFloat(h)) + "px;"),
      l &&
        (S +=
          "box-sizing:border-box;text-align:left;width:" +
          l.offsetWidth +
          "px;"),
      (g._isStart = y),
      g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (g.style.cssText = S),
      (g.innerText = t || t === 0 ? e + "-" + t : e),
      b.children[0] ? b.insertBefore(g, b.children[0]) : b.appendChild(g),
      (g._offset = g["offset" + r.op.d2]),
      ao(g, 0, r, y),
      g
    );
  }, "_createMarker"),
  ao = a(function (e, t, i, r) {
    var s = { display: "block" },
      o = i[r ? "os2" : "p2"],
      l = i[r ? "p2" : "os2"];
    (e._isFlipped = r),
      (s[i.a + "Percent"] = r ? -100 : 0),
      (s[i.a] = r ? "1px" : 0),
      (s["border" + o + $r] = 1),
      (s["border" + l + $r] = 0),
      (s[i.p] = t + "px"),
      H.set(e, s);
  }, "_positionMarker"),
  re = [],
  Qa = {},
  Ps,
  Yc = a(function () {
    return ot() - Ut > 34 && (Ps || (Ps = requestAnimationFrame(Dn)));
  }, "_sync"),
  Ji = a(function () {
    (!mt || !mt.isPressed || mt.startX > pe.clientWidth) &&
      (oe.cache++,
      mt ? Ps || (Ps = requestAnimationFrame(Dn)) : Dn(),
      Ut || Hi("scrollStart"),
      (Ut = ot()));
  }, "_onScroll"),
  ha = a(function () {
    (Qf = se.innerWidth), (Zf = se.innerHeight);
  }, "_setBaseDimensions"),
  Jr = a(function (e) {
    oe.cache++,
      (e === !0 ||
        (!st &&
          !Kf &&
          !be.fullscreenElement &&
          !be.webkitFullscreenElement &&
          (!Ua ||
            Qf !== se.innerWidth ||
            Math.abs(se.innerHeight - Zf) > se.innerHeight * 0.25))) &&
        Co.restart(!0);
  }, "_onResize"),
  qi = {},
  mv = [],
  od = a(function n() {
    return Ue(j, "scrollEnd", n) || wi(!0);
  }, "_softRefresh"),
  Hi = a(function (e) {
    return (
      (qi[e] &&
        qi[e].map(function (t) {
          return t();
        })) ||
      mv
    );
  }, "_dispatch"),
  kt = [],
  ad = a(function (e) {
    for (var t = 0; t < kt.length; t += 5)
      (!e || (kt[t + 4] && kt[t + 4].query === e)) &&
        ((kt[t].style.cssText = kt[t + 1]),
        kt[t].getBBox && kt[t].setAttribute("transform", kt[t + 2] || ""),
        (kt[t + 3].uncache = 1));
  }, "_revertRecorded"),
  Vl = a(function (e, t) {
    var i;
    for (gt = 0; gt < re.length; gt++)
      (i = re[gt]),
        i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
    (Po = !0), t && ad(t), t || Hi("revert");
  }, "_revertAll"),
  ld = a(function (e, t) {
    oe.cache++,
      (t || !vt) &&
        oe.forEach(function (i) {
          return ct(i) && i.cacheID++ && (i.rec = 0);
        }),
      Mt(e) && (se.history.scrollRestoration = Rl = e);
  }, "_clearScrollMemory"),
  vt,
  Ii = 0,
  Gc,
  gv = a(function () {
    if (Gc !== Ii) {
      var e = (Gc = Ii);
      requestAnimationFrame(function () {
        return e === Ii && wi(!0);
      });
    }
  }, "_queueRefreshAll"),
  cd = a(function () {
    pe.appendChild(gr),
      (Nl = (!mt && gr.offsetHeight) || se.innerHeight),
      pe.removeChild(gr);
  }, "_refresh100vh"),
  jc = a(function (e) {
    return Cs(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (t) {
      return (t.style.display = e ? "none" : "block");
    });
  }, "_hideAllMarkers"),
  wi = a(function (e, t) {
    if (
      ((Ot = be.documentElement),
      (pe = be.body),
      (zl = [se, be, Ot, pe]),
      Ut && !e && !Po)
    ) {
      Ke(j, "scrollEnd", od);
      return;
    }
    cd(),
      (vt = j.isRefreshing = !0),
      oe.forEach(function (r) {
        return ct(r) && ++r.cacheID && (r.rec = r());
      });
    var i = Hi("refreshInit");
    Uf && j.sort(),
      t || Vl(),
      oe.forEach(function (r) {
        ct(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
      }),
      re.slice(0).forEach(function (r) {
        return r.refresh();
      }),
      (Po = !1),
      re.forEach(function (r) {
        if (r._subPinOffset && r.pin) {
          var s = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
            o = r.pin[s];
          r.revert(!0, 1), r.adjustPinSpacing(r.pin[s] - o), r.refresh();
        }
      }),
      (Za = 1),
      jc(!0),
      re.forEach(function (r) {
        var s = mn(r.scroller, r._dir),
          o = r.vars.end === "max" || (r._endClamp && r.end > s),
          l = r._startClamp && r.start >= s;
        (o || l) &&
          r.setPositions(
            l ? s - 1 : r.start,
            o ? Math.max(l ? s : r.start + 1, s) : r.end,
            !0
          );
      }),
      jc(!1),
      (Za = 0),
      i.forEach(function (r) {
        return r && r.render && r.render(-1);
      }),
      oe.forEach(function (r) {
        ct(r) &&
          (r.smooth &&
            requestAnimationFrame(function () {
              return (r.target.style.scrollBehavior = "smooth");
            }),
          r.rec && r(r.rec));
      }),
      ld(Rl, 1),
      Co.pause(),
      Ii++,
      (vt = 2),
      Dn(2),
      re.forEach(function (r) {
        return ct(r.vars.onRefresh) && r.vars.onRefresh(r);
      }),
      (vt = j.isRefreshing = !1),
      Hi("refresh");
  }, "_refreshAll"),
  Ja = 0,
  lo = 1,
  hs,
  Dn = a(function (e) {
    if (e === 2 || (!vt && !Po)) {
      (j.isUpdating = !0), hs && hs.update(0);
      var t = re.length,
        i = ot(),
        r = i - fa >= 50,
        s = t && re[0].scroll();
      if (
        ((lo = Ja > s ? -1 : 1),
        vt || (Ja = s),
        r &&
          (Ut && !Ho && i - Ut > 200 && ((Ut = 0), Hi("scrollEnd")),
          (Ur = fa),
          (fa = i)),
        lo < 0)
      ) {
        for (gt = t; gt-- > 0; ) re[gt] && re[gt].update(0, r);
        lo = 1;
      } else for (gt = 0; gt < t; gt++) re[gt] && re[gt].update(0, r);
      j.isUpdating = !1;
    }
    Ps = 0;
  }, "_updateAll"),
  el = [
    id,
    rd,
    Fl,
    Bl,
    Xt + ds,
    Xt + cs,
    Xt + fs,
    Xt + us,
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
  co = el.concat([
    Oi,
    Li,
    "boxSizing",
    "max" + $r,
    "max" + ql,
    "position",
    Xt,
    Fe,
    Fe + fs,
    Fe + cs,
    Fe + ds,
    Fe + us,
  ]),
  vv = a(function (e, t, i) {
    vr(i);
    var r = e._gsap;
    if (r.spacerIsNative) vr(r.spacerState);
    else if (e._gsap.swappedIn) {
      var s = t.parentNode;
      s && (s.insertBefore(e, t), s.removeChild(t));
    }
    e._gsap.swappedIn = !1;
  }, "_swapPinOut"),
  pa = a(function (e, t, i, r) {
    if (!e._gsap.swappedIn) {
      for (var s = el.length, o = t.style, l = e.style, c; s--; )
        (c = el[s]), (o[c] = i[c]);
      (o.position = i.position === "absolute" ? "absolute" : "relative"),
        i.display === "inline" && (o.display = "inline-block"),
        (l[Fl] = l[Bl] = "auto"),
        (o.flexBasis = i.flexBasis || "auto"),
        (o.overflow = "visible"),
        (o.boxSizing = "border-box"),
        (o[Oi] = ko(e, bt) + Xe),
        (o[Li] = ko(e, Ye) + Xe),
        (o[Fe] = l[Xt] = l[rd] = l[id] = "0"),
        vr(r),
        (l[Oi] = l["max" + $r] = i[Oi]),
        (l[Li] = l["max" + ql] = i[Li]),
        (l[Fe] = i[Fe]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  }, "_swapPinIn"),
  yv = /([A-Z])/g,
  vr = a(function (e) {
    if (e) {
      var t = e.t.style,
        i = e.length,
        r = 0,
        s,
        o;
      for ((e.t._gsap || H.core.getCache(e.t)).uncache = 1; r < i; r += 2)
        (o = e[r + 1]),
          (s = e[r]),
          o
            ? (t[s] = o)
            : t[s] && t.removeProperty(s.replace(yv, "-$1").toLowerCase());
    }
  }, "_setState"),
  Gs = a(function (e) {
    for (var t = co.length, i = e.style, r = [], s = 0; s < t; s++)
      r.push(co[s], i[co[s]]);
    return (r.t = e), r;
  }, "_getState"),
  bv = a(function (e, t, i) {
    for (var r = [], s = e.length, o = i ? 8 : 0, l; o < s; o += 2)
      (l = e[o]), r.push(l, l in t ? t[l] : e[o + 1]);
    return (r.t = e.t), r;
  }, "_copyState"),
  uo = { left: 0, top: 0 },
  Uc = a(function (e, t, i, r, s, o, l, c, u, f, d, h, p, g) {
    ct(e) && (e = e(c)),
      Mt(e) &&
        e.substr(0, 3) === "max" &&
        (e = h + (e.charAt(4) === "=" ? oo("0" + e.substr(3), i) : 0));
    var m = p ? p.time() : 0,
      v,
      b,
      y;
    if ((p && p.seek(0), isNaN(e) || (e = +e), Qr(e)))
      p &&
        (e = H.utils.mapRange(
          p.scrollTrigger.start,
          p.scrollTrigger.end,
          0,
          h,
          e
        )),
        l && ao(l, i, r, !0);
    else {
      ct(t) && (t = t(c));
      var _ = (e || "0").split(" "),
        S,
        T,
        w,
        C;
      (y = xt(t, c) || pe),
        (S = Mn(y) || {}),
        (!S || (!S.left && !S.top)) &&
          Yt(y).display === "none" &&
          ((C = y.style.display),
          (y.style.display = "block"),
          (S = Mn(y)),
          C ? (y.style.display = C) : y.style.removeProperty("display")),
        (T = oo(_[0], S[r.d])),
        (w = oo(_[1] || "0", i)),
        (e = S[r.p] - u[r.p] - f + T + s - w),
        l && ao(l, w, r, i - w < 20 || (l._isStart && w > 20)),
        (i -= i - w);
    }
    if ((g && ((c[g] = e || -0.001), e < 0 && (e = 0)), o)) {
      var P = e + i,
        L = o._isStart;
      (v = "scroll" + r.d2),
        ao(
          o,
          P,
          r,
          (L && P > 20) ||
            (!L && (d ? Math.max(pe[v], Ot[v]) : o.parentNode[v]) <= P + 1)
        ),
        d &&
          ((u = Mn(l)),
          d && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + Xe));
    }
    return (
      p &&
        y &&
        ((v = Mn(y)),
        p.seek(h),
        (b = Mn(y)),
        (p._caScrollDist = v[r.p] - b[r.p]),
        (e = (e / p._caScrollDist) * h)),
      p && p.seek(m),
      p ? e : Math.round(e)
    );
  }, "_parsePosition"),
  _v = /(webkit|moz|length|cssText|inset)/i,
  Kc = a(function (e, t, i, r) {
    if (e.parentNode !== t) {
      var s = e.style,
        o,
        l;
      if (t === pe) {
        (e._stOrig = s.cssText), (l = Yt(e));
        for (o in l)
          !+o &&
            !_v.test(o) &&
            l[o] &&
            typeof s[o] == "string" &&
            o !== "0" &&
            (s[o] = l[o]);
        (s.top = i), (s.left = r);
      } else s.cssText = e._stOrig;
      (H.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }, "_reparent"),
  ud = a(function (e, t, i) {
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
  js = a(function (e, t, i) {
    var r = {};
    (r[t.p] = "+=" + i), H.set(e, r);
  }, "_shiftMarker"),
  Zc = a(function (e, t) {
    var i = oi(e, t),
      r = "_scroll" + t.p2,
      s = a(function o(l, c, u, f, d) {
        var h = o.tween,
          p = c.onComplete,
          g = {};
        u = u || i();
        var m = ud(i, u, function () {
          h.kill(), (o.tween = 0);
        });
        return (
          (d = (f && d) || 0),
          (f = f || l - u),
          h && h.kill(),
          (c[r] = l),
          (c.inherit = !1),
          (c.modifiers = g),
          (g[r] = function () {
            return m(u + f * h.ratio + d * h.ratio * h.ratio);
          }),
          (c.onUpdate = function () {
            oe.cache++, o.tween && Dn();
          }),
          (c.onComplete = function () {
            (o.tween = 0), p && p.call(h);
          }),
          (h = o.tween = H.to(e, c)),
          h
        );
      }, "getTween");
    return (
      (e[r] = i),
      (i.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0);
      }),
      Ke(e, "wheel", i.wheelHandler),
      j.isTouch && Ke(e, "touchmove", i.wheelHandler),
      s
    );
  }, "_getTweenCreator"),
  j = (function () {
    function n(t, i) {
      ir || n.register(H), Ka(this), this.init(t, i);
    }
    a(n, "ScrollTrigger");
    var e = n.prototype;
    return (
      (e.init = a(function (i, r) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Kr)
        ) {
          this.update = this.refresh = this.kill = fn;
          return;
        }
        i = Wc(Mt(i) || Qr(i) || i.nodeType ? { trigger: i } : i, Xs);
        var s = i,
          o = s.onUpdate,
          l = s.toggleClass,
          c = s.id,
          u = s.onToggle,
          f = s.onRefresh,
          d = s.scrub,
          h = s.trigger,
          p = s.pin,
          g = s.pinSpacing,
          m = s.invalidateOnRefresh,
          v = s.anticipatePin,
          b = s.onScrubComplete,
          y = s.onSnapComplete,
          _ = s.once,
          S = s.snap,
          T = s.pinReparent,
          w = s.pinSpacer,
          C = s.containerAnimation,
          P = s.fastScrollEnd,
          L = s.preventOverlaps,
          k =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? bt
              : Ye,
          $ = !d && d !== 0,
          x = xt(i.scroller || se),
          E = H.core.getCache(x),
          O = Fi(x),
          I =
            ("pinType" in i
              ? i.pinType
              : ti(x, "pinType") || (O && "fixed")) === "fixed",
          M = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          D = $ && i.toggleActions.split(" "),
          z = "markers" in i ? i.markers : Xs.markers,
          B = O ? 0 : parseFloat(Yt(x)["border" + k.p2 + $r]) || 0,
          A = this,
          V =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(A);
            },
          G = uv(x, O, k),
          le = fv(x, O),
          ie = 0,
          Z = 0,
          Q = 0,
          de = oi(x, k),
          me,
          Ee,
          $e,
          he,
          we,
          X,
          ne,
          Oe,
          Le,
          R,
          Ie,
          Kt,
          Ft,
          W,
          qt,
          Nn,
          fi,
          Ge,
          Bn,
          De,
          Zt,
          Ht,
          Tn,
          Dr,
          Be,
          Is,
          En,
          Gi,
          ji,
          Fn,
          di,
          ae,
          hi,
          Qt,
          Jt,
          en,
          pi,
          Ui,
          wn;
        if (
          ((A._startClamp = A._endClamp = !1),
          (A._dir = k),
          (v *= 45),
          (A.scroller = x),
          (A.scroll = C ? C.time.bind(C) : de),
          (he = de()),
          (A.vars = i),
          (r = r || i.animation),
          "refreshPriority" in i &&
            ((Uf = 1), i.refreshPriority === -9999 && (hs = A)),
          (E.tweenScroll = E.tweenScroll || {
            top: Zc(x, Ye),
            left: Zc(x, bt),
          }),
          (A.tweenTo = me = E.tweenScroll[k.p]),
          (A.scrubDuration = function (q) {
            (hi = Qr(q) && q),
              hi
                ? ae
                  ? ae.duration(q)
                  : (ae = H.to(r, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: hi,
                      paused: !0,
                      onComplete: a(function () {
                        return b && b(A);
                      }, "onComplete"),
                    }))
                : (ae && ae.progress(1).kill(), (ae = 0));
          }),
          r &&
            ((r.vars.lazy = !1),
            (r._initted && !A.isReverted) ||
              (r.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                r.duration() &&
                r.render(0, !0, !0)),
            (A.animation = r.pause()),
            (r.scrollTrigger = A),
            A.scrubDuration(d),
            (Fn = 0),
            c || (c = r.vars.id)),
          S &&
            ((!Si(S) || S.push) && (S = { snapTo: S }),
            "scrollBehavior" in pe.style &&
              H.set(O ? [pe, Ot] : x, { scrollBehavior: "auto" }),
            oe.forEach(function (q) {
              return (
                ct(q) &&
                q.target === (O ? be.scrollingElement || Ot : x) &&
                (q.smooth = !1)
              );
            }),
            ($e = ct(S.snapTo)
              ? S.snapTo
              : S.snapTo === "labels"
              ? hv(r)
              : S.snapTo === "labelsDirectional"
              ? pv(r)
              : S.directional !== !1
              ? function (q, J) {
                  return Hl(S.snapTo)(q, ot() - Z < 500 ? 0 : J.direction);
                }
              : H.utils.snap(S.snapTo)),
            (Qt = S.duration || { min: 0.1, max: 2 }),
            (Qt = Si(Qt) ? ls(Qt.min, Qt.max) : ls(Qt, Qt)),
            (Jt = H.delayedCall(S.delay || hi / 2 || 0.1, function () {
              var q = de(),
                J = ot() - Z < 500,
                U = me.tween;
              if (
                (J || Math.abs(A.getVelocity()) < 10) &&
                !U &&
                !Ho &&
                ie !== q
              ) {
                var ee = (q - X) / W,
                  je = r && !$ ? r.totalProgress() : ee,
                  ce = J ? 0 : ((je - di) / (ot() - Ur)) * 1e3 || 0,
                  ze = H.utils.clamp(-ee, 1 - ee, (Qi(ce / 2) * ce) / 0.185),
                  nt = ee + (S.inertia === !1 ? 0 : ze),
                  Me,
                  xe,
                  ge = S,
                  tn = ge.onStart,
                  Ce = ge.onInterrupt,
                  Pt = ge.onComplete;
                if (
                  ((Me = $e(nt, A)),
                  Qr(Me) || (Me = nt),
                  (xe = Math.max(0, Math.round(X + Me * W))),
                  q <= ne && q >= X && xe !== q)
                ) {
                  if (U && !U._initted && U.data <= Qi(xe - q)) return;
                  S.inertia === !1 && (ze = Me - ee),
                    me(
                      xe,
                      {
                        duration: Qt(
                          Qi(
                            (Math.max(Qi(nt - je), Qi(Me - je)) * 0.185) /
                              ce /
                              0.05 || 0
                          )
                        ),
                        ease: S.ease || "power3",
                        data: Qi(xe - q),
                        onInterrupt: a(function () {
                          return Jt.restart(!0) && Ce && Ce(A);
                        }, "onInterrupt"),
                        onComplete: a(function () {
                          A.update(),
                            (ie = de()),
                            r &&
                              !$ &&
                              (ae
                                ? ae.resetTo(
                                    "totalProgress",
                                    Me,
                                    r._tTime / r._tDur
                                  )
                                : r.progress(Me)),
                            (Fn = di =
                              r && !$ ? r.totalProgress() : A.progress),
                            y && y(A),
                            Pt && Pt(A);
                        }, "onComplete"),
                      },
                      q,
                      ze * W,
                      xe - q - ze * W
                    ),
                    tn && tn(A, me.tween);
                }
              } else A.isActive && ie !== q && Jt.restart(!0);
            }).pause())),
          c && (Qa[c] = A),
          (h = A.trigger = xt(h || (p !== !0 && p))),
          (wn = h && h._gsap && h._gsap.stRevert),
          wn && (wn = wn(A)),
          (p = p === !0 ? h : xt(p)),
          Mt(l) && (l = { targets: h, className: l }),
          p &&
            (g === !1 ||
              g === Xt ||
              (g =
                !g &&
                p.parentNode &&
                p.parentNode.style &&
                Yt(p.parentNode).display === "flex"
                  ? !1
                  : Fe),
            (A.pin = p),
            (Ee = H.core.getCache(p)),
            Ee.spacer
              ? (qt = Ee.pinState)
              : (w &&
                  ((w = xt(w)),
                  w && !w.nodeType && (w = w.current || w.nativeElement),
                  (Ee.spacerIsNative = !!w),
                  w && (Ee.spacerState = Gs(w))),
                (Ee.spacer = Ge = w || be.createElement("div")),
                Ge.classList.add("pin-spacer"),
                c && Ge.classList.add("pin-spacer-" + c),
                (Ee.pinState = qt = Gs(p))),
            i.force3D !== !1 && H.set(p, { force3D: !0 }),
            (A.spacer = Ge = Ee.spacer),
            (ji = Yt(p)),
            (Dr = ji[g + k.os2]),
            (De = H.getProperty(p)),
            (Zt = H.quickSetter(p, k.a, Xe)),
            pa(p, Ge, ji),
            (fi = Gs(p))),
          z)
        ) {
          (Kt = Si(z) ? Wc(z, Xc) : Xc),
            (R = Ys("scroller-start", c, x, k, Kt, 0)),
            (Ie = Ys("scroller-end", c, x, k, Kt, 0, R)),
            (Bn = R["offset" + k.op.d2]);
          var zr = xt(ti(x, "content") || x);
          (Oe = this.markerStart = Ys("start", c, zr, k, Kt, Bn, 0, C)),
            (Le = this.markerEnd = Ys("end", c, zr, k, Kt, Bn, 0, C)),
            C && (Ui = H.quickSetter([Oe, Le], k.a, Xe)),
            !I &&
              !(bn.length && ti(x, "fixedMarkers") === !0) &&
              (dv(O ? pe : x),
              H.set([R, Ie], { force3D: !0 }),
              (Is = H.quickSetter(R, k.a, Xe)),
              (Gi = H.quickSetter(Ie, k.a, Xe)));
        }
        if (C) {
          var te = C.vars.onUpdate,
            K = C.vars.onUpdateParams;
          C.eventCallback("onUpdate", function () {
            A.update(0, 0, 1), te && te.apply(C, K || []);
          });
        }
        if (
          ((A.previous = function () {
            return re[re.indexOf(A) - 1];
          }),
          (A.next = function () {
            return re[re.indexOf(A) + 1];
          }),
          (A.revert = function (q, J) {
            if (!J) return A.kill(!0);
            var U = q !== !1 || !A.enabled,
              ee = st;
            U !== A.isReverted &&
              (U &&
                ((en = Math.max(de(), A.scroll.rec || 0)),
                (Q = A.progress),
                (pi = r && r.progress())),
              Oe &&
                [Oe, Le, R, Ie].forEach(function (je) {
                  return (je.style.display = U ? "none" : "block");
                }),
              U && ((st = A), A.update(U)),
              p &&
                (!T || !A.isActive) &&
                (U ? vv(p, Ge, qt) : pa(p, Ge, Yt(p), Be)),
              U || A.update(U),
              (st = ee),
              (A.isReverted = U));
          }),
          (A.refresh = function (q, J, U, ee) {
            if (!((st || !A.enabled) && !J)) {
              if (p && q && Ut) {
                Ke(n, "scrollEnd", od);
                return;
              }
              !vt && V && V(A),
                (st = A),
                me.tween && !U && (me.tween.kill(), (me.tween = 0)),
                ae && ae.pause(),
                m &&
                  r &&
                  (r.revert({ kill: !1 }).invalidate(),
                  r.getChildren &&
                    r.getChildren(!0, !0, !1).forEach(function (qn) {
                      return qn.vars.immediateRender && qn.render(0, !0, !0);
                    })),
                A.isReverted || A.revert(!0, !0),
                (A._subPinOffset = !1);
              var je = G(),
                ce = le(),
                ze = C ? C.duration() : mn(x, k),
                nt = W <= 0.01 || !W,
                Me = 0,
                xe = ee || 0,
                ge = Si(U) ? U.end : i.end,
                tn = i.endTrigger || h,
                Ce = Si(U)
                  ? U.start
                  : i.start || (i.start === 0 || !h ? 0 : p ? "0 0" : "0 100%"),
                Pt = (A.pinnedContainer =
                  i.pinnedContainer && xt(i.pinnedContainer, A)),
                an = (h && Math.max(0, re.indexOf(A))) || 0,
                Qe = an,
                Je,
                it,
                mi,
                Ds,
                rt,
                We,
                ln,
                Go,
                ac,
                Rr,
                cn,
                Nr,
                zs;
              for (
                z &&
                Si(U) &&
                ((Nr = H.getProperty(R, k.p)), (zs = H.getProperty(Ie, k.p)));
                Qe-- > 0;

              )
                (We = re[Qe]),
                  We.end || We.refresh(0, 1) || (st = A),
                  (ln = We.pin),
                  ln &&
                    (ln === h || ln === p || ln === Pt) &&
                    !We.isReverted &&
                    (Rr || (Rr = []), Rr.unshift(We), We.revert(!0, !0)),
                  We !== re[Qe] && (an--, Qe--);
              for (
                ct(Ce) && (Ce = Ce(A)),
                  Ce = Fc(Ce, "start", A),
                  X =
                    Uc(
                      Ce,
                      h,
                      je,
                      k,
                      de(),
                      Oe,
                      R,
                      A,
                      ce,
                      B,
                      I,
                      ze,
                      C,
                      A._startClamp && "_startClamp"
                    ) || (p ? -0.001 : 0),
                  ct(ge) && (ge = ge(A)),
                  Mt(ge) &&
                    !ge.indexOf("+=") &&
                    (~ge.indexOf(" ")
                      ? (ge = (Mt(Ce) ? Ce.split(" ")[0] : "") + ge)
                      : ((Me = oo(ge.substr(2), je)),
                        (ge = Mt(Ce)
                          ? Ce
                          : (C
                              ? H.utils.mapRange(
                                  0,
                                  C.duration(),
                                  C.scrollTrigger.start,
                                  C.scrollTrigger.end,
                                  X
                                )
                              : X) + Me),
                        (tn = h))),
                  ge = Fc(ge, "end", A),
                  ne =
                    Math.max(
                      X,
                      Uc(
                        ge || (tn ? "100% 0" : ze),
                        tn,
                        je,
                        k,
                        de() + Me,
                        Le,
                        Ie,
                        A,
                        ce,
                        B,
                        I,
                        ze,
                        C,
                        A._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  Me = 0,
                  Qe = an;
                Qe--;

              )
                (We = re[Qe]),
                  (ln = We.pin),
                  ln &&
                    We.start - We._pinPush <= X &&
                    !C &&
                    We.end > 0 &&
                    ((Je =
                      We.end -
                      (A._startClamp ? Math.max(0, We.start) : We.start)),
                    ((ln === h && We.start - We._pinPush < X) || ln === Pt) &&
                      isNaN(Ce) &&
                      (Me += Je * (1 - We.progress)),
                    ln === p && (xe += Je));
              if (
                ((X += Me),
                (ne += Me),
                A._startClamp && (A._startClamp += Me),
                A._endClamp &&
                  !vt &&
                  ((A._endClamp = ne || -0.001), (ne = Math.min(ne, mn(x, k)))),
                (W = ne - X || ((X -= 0.01) && 0.001)),
                nt && (Q = H.utils.clamp(0, 1, H.utils.normalize(X, ne, en))),
                (A._pinPush = xe),
                Oe &&
                  Me &&
                  ((Je = {}),
                  (Je[k.a] = "+=" + Me),
                  Pt && (Je[k.p] = "-=" + de()),
                  H.set([Oe, Le], Je)),
                p && !(Za && A.end >= mn(x, k)))
              )
                (Je = Yt(p)),
                  (Ds = k === Ye),
                  (mi = de()),
                  (Ht = parseFloat(De(k.a)) + xe),
                  !ze &&
                    ne > 1 &&
                    ((cn = (O ? be.scrollingElement || Ot : x).style),
                    (cn = {
                      style: cn,
                      value: cn["overflow" + k.a.toUpperCase()],
                    }),
                    O &&
                      Yt(pe)["overflow" + k.a.toUpperCase()] !== "scroll" &&
                      (cn.style["overflow" + k.a.toUpperCase()] = "scroll")),
                  pa(p, Ge, Je),
                  (fi = Gs(p)),
                  (it = Mn(p, !0)),
                  (Go = I && oi(x, Ds ? bt : Ye)()),
                  g
                    ? ((Be = [g + k.os2, W + xe + Xe]),
                      (Be.t = Ge),
                      (Qe = g === Fe ? ko(p, k) + W + xe : 0),
                      Qe &&
                        (Be.push(k.d, Qe + Xe),
                        Ge.style.flexBasis !== "auto" &&
                          (Ge.style.flexBasis = Qe + Xe)),
                      vr(Be),
                      Pt &&
                        re.forEach(function (qn) {
                          qn.pin === Pt &&
                            qn.vars.pinSpacing !== !1 &&
                            (qn._subPinOffset = !0);
                        }),
                      I && de(en))
                    : ((Qe = ko(p, k)),
                      Qe &&
                        Ge.style.flexBasis !== "auto" &&
                        (Ge.style.flexBasis = Qe + Xe)),
                  I &&
                    ((rt = {
                      top: it.top + (Ds ? mi - X : Go) + Xe,
                      left: it.left + (Ds ? Go : mi - X) + Xe,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (rt[Oi] = rt["max" + $r] = Math.ceil(it.width) + Xe),
                    (rt[Li] = rt["max" + ql] = Math.ceil(it.height) + Xe),
                    (rt[Xt] =
                      rt[Xt + fs] =
                      rt[Xt + cs] =
                      rt[Xt + ds] =
                      rt[Xt + us] =
                        "0"),
                    (rt[Fe] = Je[Fe]),
                    (rt[Fe + fs] = Je[Fe + fs]),
                    (rt[Fe + cs] = Je[Fe + cs]),
                    (rt[Fe + ds] = Je[Fe + ds]),
                    (rt[Fe + us] = Je[Fe + us]),
                    (Nn = bv(qt, rt, T)),
                    vt && de(0)),
                  r
                    ? ((ac = r._initted),
                      ca(1),
                      r.render(r.duration(), !0, !0),
                      (Tn = De(k.a) - Ht + W + xe),
                      (En = Math.abs(W - Tn) > 1),
                      I && En && Nn.splice(Nn.length - 2, 2),
                      r.render(0, !0, !0),
                      ac || r.invalidate(!0),
                      r.parent || r.totalTime(r.totalTime()),
                      ca(0))
                    : (Tn = W),
                  cn &&
                    (cn.value
                      ? (cn.style["overflow" + k.a.toUpperCase()] = cn.value)
                      : cn.style.removeProperty("overflow-" + k.a));
              else if (h && de() && !C)
                for (it = h.parentNode; it && it !== pe; )
                  it._pinOffset &&
                    ((X -= it._pinOffset), (ne -= it._pinOffset)),
                    (it = it.parentNode);
              Rr &&
                Rr.forEach(function (qn) {
                  return qn.revert(!1, !0);
                }),
                (A.start = X),
                (A.end = ne),
                (he = we = vt ? en : de()),
                !C && !vt && (he < en && de(en), (A.scroll.rec = 0)),
                A.revert(!1, !0),
                (Z = ot()),
                Jt && ((ie = -1), Jt.restart(!0)),
                (st = 0),
                r &&
                  $ &&
                  (r._initted || pi) &&
                  r.progress() !== pi &&
                  r.progress(pi || 0, !0).render(r.time(), !0, !0),
                (nt || Q !== A.progress || C || m || (r && !r._initted)) &&
                  (r &&
                    !$ &&
                    (r._initted || Q || r.vars.immediateRender !== !1) &&
                    r.totalProgress(
                      C && X < -0.001 && !Q ? H.utils.normalize(X, ne, 0) : Q,
                      !0
                    ),
                  (A.progress = nt || (he - X) / W === Q ? 0 : Q)),
                p && g && (Ge._pinOffset = Math.round(A.progress * Tn)),
                ae && ae.invalidate(),
                isNaN(Nr) ||
                  ((Nr -= H.getProperty(R, k.p)),
                  (zs -= H.getProperty(Ie, k.p)),
                  js(R, k, Nr),
                  js(Oe, k, Nr - (ee || 0)),
                  js(Ie, k, zs),
                  js(Le, k, zs - (ee || 0))),
                nt && !vt && A.update(),
                f && !vt && !Ft && ((Ft = !0), f(A), (Ft = !1));
            }
          }),
          (A.getVelocity = function () {
            return ((de() - we) / (ot() - Ur)) * 1e3 || 0;
          }),
          (A.endAnimation = function () {
            Hr(A.callbackAnimation),
              r &&
                (ae
                  ? ae.progress(1)
                  : r.paused()
                  ? $ || Hr(r, A.direction < 0, 1)
                  : Hr(r, r.reversed()));
          }),
          (A.labelToScroll = function (q) {
            return (
              (r &&
                r.labels &&
                (X || A.refresh() || X) + (r.labels[q] / r.duration()) * W) ||
              0
            );
          }),
          (A.getTrailing = function (q) {
            var J = re.indexOf(A),
              U = A.direction > 0 ? re.slice(0, J).reverse() : re.slice(J + 1);
            return (
              Mt(q)
                ? U.filter(function (ee) {
                    return ee.vars.preventOverlaps === q;
                  })
                : U
            ).filter(function (ee) {
              return A.direction > 0 ? ee.end <= X : ee.start >= ne;
            });
          }),
          (A.update = function (q, J, U) {
            if (!(C && !U && !q)) {
              var ee = vt === !0 ? en : A.scroll(),
                je = q ? 0 : (ee - X) / W,
                ce = je < 0 ? 0 : je > 1 ? 1 : je || 0,
                ze = A.progress,
                nt,
                Me,
                xe,
                ge,
                tn,
                Ce,
                Pt,
                an;
              if (
                (J &&
                  ((we = he),
                  (he = C ? de() : ee),
                  S && ((di = Fn), (Fn = r && !$ ? r.totalProgress() : ce))),
                v &&
                  p &&
                  !st &&
                  !qs &&
                  Ut &&
                  (!ce && X < ee + ((ee - we) / (ot() - Ur)) * v
                    ? (ce = 1e-4)
                    : ce === 1 &&
                      ne > ee + ((ee - we) / (ot() - Ur)) * v &&
                      (ce = 0.9999)),
                ce !== ze && A.enabled)
              ) {
                if (
                  ((nt = A.isActive = !!ce && ce < 1),
                  (Me = !!ze && ze < 1),
                  (Ce = nt !== Me),
                  (tn = Ce || !!ce != !!ze),
                  (A.direction = ce > ze ? 1 : -1),
                  (A.progress = ce),
                  tn &&
                    !st &&
                    ((xe = ce && !ze ? 0 : ce === 1 ? 1 : ze === 1 ? 2 : 3),
                    $ &&
                      ((ge =
                        (!Ce && D[xe + 1] !== "none" && D[xe + 1]) || D[xe]),
                      (an =
                        r &&
                        (ge === "complete" || ge === "reset" || ge in r)))),
                  L &&
                    (Ce || an) &&
                    (an || d || !r) &&
                    (ct(L)
                      ? L(A)
                      : A.getTrailing(L).forEach(function (mi) {
                          return mi.endAnimation();
                        })),
                  $ ||
                    (ae && !st && !qs
                      ? (ae._dp._time - ae._start !== ae._time &&
                          ae.render(ae._dp._time - ae._start),
                        ae.resetTo
                          ? ae.resetTo("totalProgress", ce, r._tTime / r._tDur)
                          : ((ae.vars.totalProgress = ce),
                            ae.invalidate().restart()))
                      : r && r.totalProgress(ce, !!(st && (Z || q)))),
                  p)
                ) {
                  if ((q && g && (Ge.style[g + k.os2] = Dr), !I))
                    Zt(Zr(Ht + Tn * ce));
                  else if (tn) {
                    if (
                      ((Pt =
                        !q && ce > ze && ne + 1 > ee && ee + 1 >= mn(x, k)),
                      T)
                    )
                      if (!q && (nt || Pt)) {
                        var Qe = Mn(p, !0),
                          Je = ee - X;
                        Kc(
                          p,
                          pe,
                          Qe.top + (k === Ye ? Je : 0) + Xe,
                          Qe.left + (k === Ye ? 0 : Je) + Xe
                        );
                      } else Kc(p, Ge);
                    vr(nt || Pt ? Nn : fi),
                      (En && ce < 1 && nt) ||
                        Zt(Ht + (ce === 1 && !Pt ? Tn : 0));
                  }
                }
                S && !me.tween && !st && !qs && Jt.restart(!0),
                  l &&
                    (Ce || (_ && ce && (ce < 1 || !ua))) &&
                    Cs(l.targets).forEach(function (mi) {
                      return mi.classList[nt || _ ? "add" : "remove"](
                        l.className
                      );
                    }),
                  o && !$ && !q && o(A),
                  tn && !st
                    ? ($ &&
                        (an &&
                          (ge === "complete"
                            ? r.pause().totalProgress(1)
                            : ge === "reset"
                            ? r.restart(!0).pause()
                            : ge === "restart"
                            ? r.restart(!0)
                            : r[ge]()),
                        o && o(A)),
                      (Ce || !ua) &&
                        (u && Ce && da(A, u),
                        M[xe] && da(A, M[xe]),
                        _ && (ce === 1 ? A.kill(!1, 1) : (M[xe] = 0)),
                        Ce || ((xe = ce === 1 ? 1 : 3), M[xe] && da(A, M[xe]))),
                      P &&
                        !nt &&
                        Math.abs(A.getVelocity()) > (Qr(P) ? P : 2500) &&
                        (Hr(A.callbackAnimation),
                        ae
                          ? ae.progress(1)
                          : Hr(r, ge === "reverse" ? 1 : !ce, 1)))
                    : $ && o && !st && o(A);
              }
              if (Gi) {
                var it = C ? (ee / C.duration()) * (C._caScrollDist || 0) : ee;
                Is(it + (R._isFlipped ? 1 : 0)), Gi(it);
              }
              Ui && Ui((-ee / C.duration()) * (C._caScrollDist || 0));
            }
          }),
          (A.enable = function (q, J) {
            A.enabled ||
              ((A.enabled = !0),
              Ke(x, "resize", Jr),
              O || Ke(x, "scroll", Ji),
              V && Ke(n, "refreshInit", V),
              q !== !1 && ((A.progress = Q = 0), (he = we = ie = de())),
              J !== !1 && A.refresh());
          }),
          (A.getTween = function (q) {
            return q && me ? me.tween : ae;
          }),
          (A.setPositions = function (q, J, U, ee) {
            if (C) {
              var je = C.scrollTrigger,
                ce = C.duration(),
                ze = je.end - je.start;
              (q = je.start + (ze * q) / ce), (J = je.start + (ze * J) / ce);
            }
            A.refresh(
              !1,
              !1,
              {
                start: qc(q, U && !!A._startClamp),
                end: qc(J, U && !!A._endClamp),
              },
              ee
            ),
              A.update();
          }),
          (A.adjustPinSpacing = function (q) {
            if (Be && q) {
              var J = Be.indexOf(k.d) + 1;
              (Be[J] = parseFloat(Be[J]) + q + Xe),
                (Be[1] = parseFloat(Be[1]) + q + Xe),
                vr(Be);
            }
          }),
          (A.disable = function (q, J) {
            if (
              A.enabled &&
              (q !== !1 && A.revert(!0, !0),
              (A.enabled = A.isActive = !1),
              J || (ae && ae.pause()),
              (en = 0),
              Ee && (Ee.uncache = 1),
              V && Ue(n, "refreshInit", V),
              Jt && (Jt.pause(), me.tween && me.tween.kill() && (me.tween = 0)),
              !O)
            ) {
              for (var U = re.length; U--; )
                if (re[U].scroller === x && re[U] !== A) return;
              Ue(x, "resize", Jr), O || Ue(x, "scroll", Ji);
            }
          }),
          (A.kill = function (q, J) {
            A.disable(q, J), ae && !J && ae.kill(), c && delete Qa[c];
            var U = re.indexOf(A);
            U >= 0 && re.splice(U, 1),
              U === gt && lo > 0 && gt--,
              (U = 0),
              re.forEach(function (ee) {
                return ee.scroller === A.scroller && (U = 1);
              }),
              U || vt || (A.scroll.rec = 0),
              r &&
                ((r.scrollTrigger = null),
                q && r.revert({ kill: !1 }),
                J || r.kill()),
              Oe &&
                [Oe, Le, R, Ie].forEach(function (ee) {
                  return ee.parentNode && ee.parentNode.removeChild(ee);
                }),
              hs === A && (hs = 0),
              p &&
                (Ee && (Ee.uncache = 1),
                (U = 0),
                re.forEach(function (ee) {
                  return ee.pin === p && U++;
                }),
                U || (Ee.spacer = 0)),
              i.onKill && i.onKill(A);
          }),
          re.push(A),
          A.enable(!1, !1),
          wn && wn(A),
          r && r.add && !W)
        ) {
          var fe = A.update;
          (A.update = function () {
            (A.update = fe), oe.cache++, X || ne || A.refresh();
          }),
            H.delayedCall(0.01, A.update),
            (W = 0.01),
            (X = ne = 0);
        } else A.refresh();
        p && gv();
      }, "init")),
      (n.register = a(function (i) {
        return (
          ir ||
            ((H = i || ed()), Jf() && window.document && n.enable(), (ir = Kr)),
          ir
        );
      }, "register")),
      (n.defaults = a(function (i) {
        if (i) for (var r in i) Xs[r] = i[r];
        return Xs;
      }, "defaults")),
      (n.disable = a(function (i, r) {
        (Kr = 0),
          re.forEach(function (o) {
            return o[r ? "kill" : "disable"](i);
          }),
          Ue(se, "wheel", Ji),
          Ue(be, "scroll", Ji),
          clearInterval(Fs),
          Ue(be, "touchcancel", fn),
          Ue(pe, "touchstart", fn),
          Vs(Ue, be, "pointerdown,touchstart,mousedown", Hc),
          Vs(Ue, be, "pointerup,touchend,mouseup", Vc),
          Co.kill(),
          Hs(Ue);
        for (var s = 0; s < oe.length; s += 3)
          Ws(Ue, oe[s], oe[s + 1]), Ws(Ue, oe[s], oe[s + 2]);
      }, "disable")),
      (n.enable = a(function () {
        if (
          ((se = window),
          (be = document),
          (Ot = be.documentElement),
          (pe = be.body),
          H &&
            ((Cs = H.utils.toArray),
            (ls = H.utils.clamp),
            (Ka = H.core.context || fn),
            (ca = H.core.suppressOverwrites || fn),
            (Rl = se.history.scrollRestoration || "auto"),
            (Ja = se.pageYOffset || 0),
            H.core.globals("ScrollTrigger", n),
            pe))
        ) {
          (Kr = 1),
            (gr = document.createElement("div")),
            (gr.style.height = "100vh"),
            (gr.style.position = "absolute"),
            cd(),
            cv(),
            Ne.register(H),
            (n.isTouch = Ne.isTouch),
            (Vn =
              Ne.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Ua = Ne.isTouch === 1),
            Ke(se, "wheel", Ji),
            (zl = [se, be, Ot, pe]),
            H.matchMedia &&
              ((n.matchMedia = function (u) {
                var f = H.matchMedia(),
                  d;
                for (d in u) f.add(d, u[d]);
                return f;
              }),
              H.addEventListener("matchMediaInit", function () {
                return Vl();
              }),
              H.addEventListener("matchMediaRevert", function () {
                return ad();
              }),
              H.addEventListener("matchMedia", function () {
                wi(0, 1), Hi("matchMedia");
              }),
              H.matchMedia().add("(orientation: portrait)", function () {
                return ha(), ha;
              })),
            ha(),
            Ke(be, "scroll", Ji);
          var i = pe.hasAttribute("style"),
            r = pe.style,
            s = r.borderTopStyle,
            o = H.core.Animation.prototype,
            l,
            c;
          for (
            o.revert ||
              Object.defineProperty(o, "revert", {
                value: a(function () {
                  return this.time(-0.01, !0);
                }, "value"),
              }),
              r.borderTopStyle = "solid",
              l = Mn(pe),
              Ye.m = Math.round(l.top + Ye.sc()) || 0,
              bt.m = Math.round(l.left + bt.sc()) || 0,
              s ? (r.borderTopStyle = s) : r.removeProperty("border-top-style"),
              i || (pe.setAttribute("style", ""), pe.removeAttribute("style")),
              Fs = setInterval(Yc, 250),
              H.delayedCall(0.5, function () {
                return (qs = 0);
              }),
              Ke(be, "touchcancel", fn),
              Ke(pe, "touchstart", fn),
              Vs(Ke, be, "pointerdown,touchstart,mousedown", Hc),
              Vs(Ke, be, "pointerup,touchend,mouseup", Vc),
              ja = H.utils.checkPrefix("transform"),
              co.push(ja),
              ir = ot(),
              Co = H.delayedCall(0.2, wi).pause(),
              rr = [
                be,
                "visibilitychange",
                function () {
                  var u = se.innerWidth,
                    f = se.innerHeight;
                  be.hidden
                    ? ((Nc = u), (Bc = f))
                    : (Nc !== u || Bc !== f) && Jr();
                },
                be,
                "DOMContentLoaded",
                wi,
                se,
                "load",
                wi,
                se,
                "resize",
                Jr,
              ],
              Hs(Ke),
              re.forEach(function (u) {
                return u.enable(0, 1);
              }),
              c = 0;
            c < oe.length;
            c += 3
          )
            Ws(Ue, oe[c], oe[c + 1]), Ws(Ue, oe[c], oe[c + 2]);
        }
      }, "enable")),
      (n.config = a(function (i) {
        "limitCallbacks" in i && (ua = !!i.limitCallbacks);
        var r = i.syncInterval;
        (r && clearInterval(Fs)) || ((Fs = r) && setInterval(Yc, r)),
          "ignoreMobileResize" in i &&
            (Ua = n.isTouch === 1 && i.ignoreMobileResize),
          "autoRefreshEvents" in i &&
            (Hs(Ue) || Hs(Ke, i.autoRefreshEvents || "none"),
            (Kf = (i.autoRefreshEvents + "").indexOf("resize") === -1));
      }, "config")),
      (n.scrollerProxy = a(function (i, r) {
        var s = xt(i),
          o = oe.indexOf(s),
          l = Fi(s);
        ~o && oe.splice(o, l ? 6 : 2),
          r && (l ? bn.unshift(se, r, pe, r, Ot, r) : bn.unshift(s, r));
      }, "scrollerProxy")),
      (n.clearMatchMedia = a(function (i) {
        re.forEach(function (r) {
          return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
        });
      }, "clearMatchMedia")),
      (n.isInViewport = a(function (i, r, s) {
        var o = (Mt(i) ? xt(i) : i).getBoundingClientRect(),
          l = o[s ? Oi : Li] * r || 0;
        return s
          ? o.right - l > 0 && o.left + l < se.innerWidth
          : o.bottom - l > 0 && o.top + l < se.innerHeight;
      }, "isInViewport")),
      (n.positionInViewport = a(function (i, r, s) {
        Mt(i) && (i = xt(i));
        var o = i.getBoundingClientRect(),
          l = o[s ? Oi : Li],
          c =
            r == null
              ? l / 2
              : r in Mo
              ? Mo[r] * l
              : ~r.indexOf("%")
              ? (parseFloat(r) * l) / 100
              : parseFloat(r) || 0;
        return s ? (o.left + c) / se.innerWidth : (o.top + c) / se.innerHeight;
      }, "positionInViewport")),
      (n.killAll = a(function (i) {
        if (
          (re.slice(0).forEach(function (s) {
            return s.vars.id !== "ScrollSmoother" && s.kill();
          }),
          i !== !0)
        ) {
          var r = qi.killAll || [];
          (qi = {}),
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
    ? Cs(n).forEach(function (e) {
        if (e && e.style) {
          var t = kt.indexOf(e);
          t >= 0 && kt.splice(t, 5),
            kt.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              H.core.getCache(e),
              Ka()
            );
        }
      })
    : kt;
};
j.revert = function (n, e) {
  return Vl(!n, e);
};
j.create = function (n, e) {
  return new j(n, e);
};
j.refresh = function (n) {
  return n ? Jr(!0) : (ir || j.register()) && wi(!0);
};
j.update = function (n) {
  return ++oe.cache && Dn(n === !0 ? 2 : 0);
};
j.clearScrollMemory = ld;
j.maxScroll = function (n, e) {
  return mn(n, e ? bt : Ye);
};
j.getScrollFunc = function (n, e) {
  return oi(xt(n), e ? bt : Ye);
};
j.getById = function (n) {
  return Qa[n];
};
j.getAll = function () {
  return re.filter(function (n) {
    return n.vars.id !== "ScrollSmoother";
  });
};
j.isScrolling = function () {
  return !!Ut;
};
j.snapDirectional = Hl;
j.addEventListener = function (n, e) {
  var t = qi[n] || (qi[n] = []);
  ~t.indexOf(e) || t.push(e);
};
j.removeEventListener = function (n, e) {
  var t = qi[n],
    i = t && t.indexOf(e);
  i >= 0 && t.splice(i, 1);
};
j.batch = function (n, e) {
  var t = [],
    i = {},
    r = e.interval || 0.016,
    s = e.batchMax || 1e9,
    o = a(function (u, f) {
      var d = [],
        h = [],
        p = H.delayedCall(r, function () {
          f(d, h), (d = []), (h = []);
        }).pause();
      return function (g) {
        d.length || p.restart(!0),
          d.push(g.trigger),
          h.push(g),
          s <= d.length && p.progress(1);
      };
    }, "proxyCallback"),
    l;
  for (l in e)
    i[l] =
      l.substr(0, 2) === "on" && ct(e[l]) && l !== "onRefreshInit"
        ? o(l, e[l])
        : e[l];
  return (
    ct(s) &&
      ((s = s()),
      Ke(j, "refresh", function () {
        return (s = e.batchMax());
      })),
    Cs(n).forEach(function (c) {
      var u = {};
      for (l in i) u[l] = i[l];
      (u.trigger = c), t.push(j.create(u));
    }),
    t
  );
};
var Qc = a(function (e, t, i, r) {
    return (
      t > r ? e(r) : t < 0 && e(0),
      i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
    );
  }, "_clampScrollAndGetDurationMultiplier"),
  ma = a(function n(e, t) {
    t === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          t === !0
            ? "auto"
            : t
            ? "pan-" + t + (Ne.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === Ot && n(pe, t);
  }, "_allowNativePanning"),
  Us = { auto: 1, scroll: 1 },
  xv = a(function (e) {
    var t = e.event,
      i = e.target,
      r = e.axis,
      s = (t.changedTouches ? t.changedTouches[0] : t).target,
      o = s._gsap || H.core.getCache(s),
      l = ot(),
      c;
    if (!o._isScrollT || l - o._isScrollT > 2e3) {
      for (
        ;
        s &&
        s !== pe &&
        ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
          !(Us[(c = Yt(s)).overflowY] || Us[c.overflowX]));

      )
        s = s.parentNode;
      (o._isScroll =
        s &&
        s !== i &&
        !Fi(s) &&
        (Us[(c = Yt(s)).overflowY] || Us[c.overflowX])),
        (o._isScrollT = l);
    }
    (o._isScroll || r === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
  }, "_nestedScroll"),
  fd = a(function (e, t, i, r) {
    return Ne.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (r = r && xv),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: a(function () {
        return i && Ke(be, Ne.eventTypes[0], eu, !1, !0);
      }, "onEnable"),
      onDisable: a(function () {
        return Ue(be, Ne.eventTypes[0], eu, !0);
      }, "onDisable"),
    });
  }, "_inputObserver"),
  Sv = /(input|label|select|textarea)/i,
  Jc,
  eu = a(function (e) {
    var t = Sv.test(e.target.tagName);
    (t || Jc) && ((e._gsapAllow = !0), (Jc = t));
  }, "_captureInputs"),
  Tv = a(function (e) {
    Si(e) || (e = {}),
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
      c,
      u = xt(e.target) || Ot,
      f = H.core.globals().ScrollSmoother,
      d = f && f.get(),
      h =
        Vn &&
        ((e.content && xt(e.content)) ||
          (d && e.content !== !1 && !d.smooth() && d.content())),
      p = oi(u, Ye),
      g = oi(u, bt),
      m = 1,
      v =
        (Ne.isTouch && se.visualViewport
          ? se.visualViewport.scale * se.visualViewport.width
          : se.outerWidth) / se.innerWidth,
      b = 0,
      y = ct(r)
        ? function () {
            return r(l);
          }
        : function () {
            return r || 2.8;
          },
      _,
      S,
      T = fd(u, e.type, !0, s),
      w = a(function () {
        return (S = !1);
      }, "resumeTouchMove"),
      C = fn,
      P = fn,
      L = a(function () {
        (c = mn(u, Ye)),
          (P = ls(Vn ? 1 : 0, c)),
          i && (C = ls(0, mn(u, bt))),
          (_ = Ii);
      }, "updateClamps"),
      k = a(function () {
        (h._gsap.y = Zr(parseFloat(h._gsap.y) + p.offset) + "px"),
          (h.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(h._gsap.y) +
            ", 0, 1)"),
          (p.offset = p.cacheID = 0);
      }, "removeContentOffset"),
      $ = a(function () {
        if (S) {
          requestAnimationFrame(w);
          var z = Zr(l.deltaY / 2),
            B = P(p.v - z);
          if (h && B !== p.v + p.offset) {
            p.offset = B - p.v;
            var A = Zr((parseFloat(h && h._gsap.y) || 0) - p.offset);
            (h.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              A +
              ", 0, 1)"),
              (h._gsap.y = A + "px"),
              (p.cacheID = oe.cache),
              Dn();
          }
          return !0;
        }
        p.offset && k(), (S = !0);
      }, "ignoreDrag"),
      x,
      E,
      O,
      I,
      M = a(function () {
        L(),
          x.isActive() &&
            x.vars.scrollY > c &&
            (p() > c ? x.progress(1) && p(c) : x.resetTo("scrollY", c));
      }, "onResize");
    return (
      h && H.set(h, { y: "+=0" }),
      (e.ignoreCheck = function (D) {
        return (
          (Vn && D.type === "touchmove" && $()) ||
          (m > 1.05 && D.type !== "touchstart") ||
          l.isGesturing ||
          (D.touches && D.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        S = !1;
        var D = m;
        (m = Zr(((se.visualViewport && se.visualViewport.scale) || 1) / v)),
          x.pause(),
          D !== m && ma(u, m > 1.01 ? !0 : i ? !1 : "x"),
          (E = g()),
          (O = p()),
          L(),
          (_ = Ii);
      }),
      (e.onRelease = e.onGestureStart =
        function (D, z) {
          if ((p.offset && k(), !z)) I.restart(!0);
          else {
            oe.cache++;
            var B = y(),
              A,
              V;
            i &&
              ((A = g()),
              (V = A + (B * 0.05 * -D.velocityX) / 0.227),
              (B *= Qc(g, A, V, mn(u, bt))),
              (x.vars.scrollX = C(V))),
              (A = p()),
              (V = A + (B * 0.05 * -D.velocityY) / 0.227),
              (B *= Qc(p, A, V, mn(u, Ye))),
              (x.vars.scrollY = P(V)),
              x.invalidate().duration(B).play(0.01),
              ((Vn && x.vars.scrollY >= c) || A >= c - 1) &&
                H.to({}, { onUpdate: M, duration: B });
          }
          o && o(D);
        }),
      (e.onWheel = function () {
        x._ts && x.pause(), ot() - b > 1e3 && ((_ = 0), (b = ot()));
      }),
      (e.onChange = function (D, z, B, A, V) {
        if (
          (Ii !== _ && L(),
          z && i && g(C(A[2] === z ? E + (D.startX - D.x) : g() + z - A[1])),
          B)
        ) {
          p.offset && k();
          var G = V[2] === B,
            le = G ? O + D.startY - D.y : p() + B - V[1],
            ie = P(le);
          G && le !== ie && (O += ie - le), p(ie);
        }
        (B || z) && Dn();
      }),
      (e.onEnable = function () {
        ma(u, i ? !1 : "x"),
          j.addEventListener("refresh", M),
          Ke(se, "resize", M),
          p.smooth &&
            ((p.target.style.scrollBehavior = "auto"),
            (p.smooth = g.smooth = !1)),
          T.enable();
      }),
      (e.onDisable = function () {
        ma(u, !0),
          Ue(se, "resize", M),
          j.removeEventListener("refresh", M),
          T.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (l = new Ne(e)),
      (l.iOS = Vn),
      Vn && !p() && p(1),
      Vn && H.ticker.add(fn),
      (I = l._dc),
      (x = H.to(l, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: ud(p, p(), function () {
            return x.pause();
          }),
        },
        onUpdate: Dn,
        onComplete: I.vars.onComplete,
      })),
      l
    );
  }, "_getScrollNormalizer");
j.sort = function (n) {
  if (ct(n)) return re.sort(n);
  var e = se.pageYOffset || 0;
  return (
    j.getAll().forEach(function (t) {
      return (t._sortY = t.trigger
        ? e + t.trigger.getBoundingClientRect().top
        : t.start + se.innerHeight);
    }),
    re.sort(
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
  return new Ne(n);
};
j.normalizeScroll = function (n) {
  if (typeof n > "u") return mt;
  if (n === !0 && mt) return mt.enable();
  if (n === !1) {
    mt && mt.kill(), (mt = n);
    return;
  }
  var e = n instanceof Ne ? n : Tv(n);
  return mt && mt.target === e.target && mt.kill(), Fi(e.target) && (mt = e), e;
};
j.core = {
  _getVelocityProp: Ga,
  _inputObserver: fd,
  _scrollers: oe,
  _proxies: bn,
  bridge: {
    ss: a(function () {
      Ut || Hi("scrollStart"), (Ut = ot());
    }, "ss"),
    ref: a(function () {
      return st;
    }, "ref"),
  },
};
ed() && H.registerPlugin(j);
let Vr,
  er,
  tl,
  Ev = a(() => tl || Te.register(window.gsap), "_initIfNecessary"),
  tu = typeof Intl < "u" ? new Intl.Segmenter() : 0,
  Ao = a(
    (n) =>
      typeof n == "string"
        ? Ao(document.querySelectorAll(n))
        : "length" in n
        ? Array.from(n)
        : [n],
    "_toArray$2"
  ),
  nu = a((n) => Ao(n).filter((e) => e instanceof HTMLElement), "_elements"),
  nl = [],
  ga = a(function () {}, "_context"),
  wv = /\s+/g,
  iu = new RegExp(
    "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
    "gu"
  ),
  ru = { left: 0, top: 0, width: 0, height: 0 },
  su = a((n, e) => {
    if (e) {
      let t = new Set(n.join("").match(e) || nl),
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
  ou = a(
    (n) =>
      window.getComputedStyle(n).display === "inline" &&
      (n.style.display = "inline-block"),
    "_disallowInline"
  ),
  tr = a(
    (n, e, t) =>
      e.insertBefore(typeof n == "string" ? document.createTextNode(n) : n, t),
    "_insertNodeBefore"
  ),
  il = a((n, e, t) => {
    let i = e[n + "sClass"] || "",
      { tag: r = "div", aria: s = "auto", propIndex: o = !1 } = e,
      l = n === "line" ? "block" : "inline-block",
      c = i.indexOf("++") > -1,
      u = a((f) => {
        let d = document.createElement(r),
          h = t.length + 1;
        return (
          i && (d.className = i + (c ? " " + i + h : "")),
          o && d.style.setProperty("--" + n, h + ""),
          s !== "none" && d.setAttribute("aria-hidden", "true"),
          r !== "span" &&
            ((d.style.position = "relative"), (d.style.display = l)),
          (d.textContent = f),
          t.push(d),
          d
        );
      }, "wrapper");
    return c && (i = i.replace("++", "")), (u.collection = t), u;
  }, "_getWrapper"),
  Cv = a((n, e, t, i) => {
    let r = il("line", t, i),
      s = window.getComputedStyle(n).textAlign || "left";
    return (o, l) => {
      let c = r("");
      for (c.style.textAlign = s, n.insertBefore(c, e[o]); o < l; o++)
        c.appendChild(e[o]);
      c.normalize();
    };
  }, "_getLineWrapper"),
  dd = a((n, e, t, i, r, s, o, l, c, u) => {
    var f;
    let d = Array.from(n.childNodes),
      h = 0,
      { wordDelimiter: p, reduceWhiteSpace: g = !0, prepareText: m } = e,
      v = n.getBoundingClientRect(),
      b = v,
      y = !g && window.getComputedStyle(n).whiteSpace.substring(0, 3) === "pre",
      _ = 0,
      S = t.collection,
      T,
      w,
      C,
      P,
      L,
      k,
      $,
      x,
      E,
      O,
      I,
      M,
      D,
      z,
      B,
      A,
      V,
      G;
    for (
      typeof p == "object"
        ? ((C = p.delimiter || p), (w = p.replaceWith || ""))
        : (w = p === "" ? "" : p || " "),
        T = w !== " ";
      h < d.length;
      h++
    )
      if (((P = d[h]), P.nodeType === 3)) {
        for (
          B = P.textContent || "",
            g
              ? (B = B.replace(wv, " "))
              : y &&
                (B = B.replace(
                  /\n/g,
                  w +
                    `
`
                )),
            m && (B = m(B, n)),
            P.textContent = B,
            L = w || C ? B.split(C || w) : B.match(l) || nl,
            V = L[L.length - 1],
            x = T ? V.slice(-1) === " " : !V,
            V || L.pop(),
            b = v,
            $ = T ? L[0].charAt(0) === " " : !L[0],
            $ && tr(" ", n, P),
            L[0] || L.shift(),
            su(L, c),
            (s && u) || (P.textContent = ""),
            E = 1;
          E <= L.length;
          E++
        )
          if (
            ((A = L[E - 1]),
            !g &&
              y &&
              A.charAt(0) ===
                `
` &&
              ((f = P.previousSibling) == null || f.remove(),
              tr(document.createElement("br"), n, P),
              (A = A.slice(1))),
            !g && A === "")
          )
            tr(w, n, P);
          else if (A === " ") n.insertBefore(document.createTextNode(" "), P);
          else {
            if (
              (T && A.charAt(0) === " " && tr(" ", n, P),
              _ && E === 1 && !$ && S.indexOf(_.parentNode) > -1
                ? ((k = S[S.length - 1]),
                  k.appendChild(document.createTextNode(i ? "" : A)))
                : ((k = t(i ? "" : A)),
                  tr(k, n, P),
                  _ && E === 1 && !$ && k.insertBefore(_, k.firstChild)),
              i)
            )
              for (
                I = tu
                  ? su(
                      [...tu.segment(A)].map((le) => le.segment),
                      c
                    )
                  : A.match(l) || nl,
                  G = 0;
                G < I.length;
                G++
              )
                k.appendChild(
                  I[G] === " " ? document.createTextNode(" ") : i(I[G])
                );
            if (s && u) {
              if (
                ((B = P.textContent = B.substring(A.length + 1, B.length)),
                (O = k.getBoundingClientRect()),
                O.top > b.top && O.left <= b.left)
              ) {
                for (M = n.cloneNode(), D = n.childNodes[0]; D && D !== k; )
                  (z = D), (D = D.nextSibling), M.appendChild(z);
                n.parentNode.insertBefore(M, n), r && ou(M);
              }
              b = O;
            }
            (E < L.length || x) &&
              tr(
                E >= L.length ? " " : T && A.slice(-1) === " " ? " " + w : w,
                n,
                P
              );
          }
        n.removeChild(P), (_ = 0);
      } else
        P.nodeType === 1 &&
          (o && o.indexOf(P) > -1
            ? (S.indexOf(P.previousSibling) > -1 &&
                S[S.length - 1].appendChild(P),
              (_ = P))
            : (dd(P, e, t, i, r, s, o, l, c, !0), (_ = 0)),
          r && ou(P));
  }, "_splitWordsAndCharsRecursively");
var Ri;
const hd =
  ((Ri = class {
    constructor(e, t) {
      (this.isSplit = !1),
        Ev(),
        (this.elements = nu(e)),
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
            let c = l.element.offsetWidth;
            if (c !== l.width) {
              (l.width = c), this._split();
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
        ga(this),
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
          specialChars: c,
          mask: u,
        } = this.vars,
        f = t.indexOf("lines") > -1,
        d = t.indexOf("chars") > -1,
        h = t.indexOf("words") > -1,
        p = d && !h && !f,
        g =
          c && ("push" in c ? new RegExp("(?:" + c.join("|") + ")", "gu") : c),
        m = g ? new RegExp(g.source + "|" + iu.source, "gu") : iu,
        v = !!e.ignore && nu(e.ignore),
        { orig: b, animTime: y, obs: _ } = this._data,
        S;
      return (
        (d || h || f) &&
          (this.elements.forEach((T, w) => {
            (b[w] = {
              element: T,
              html: T.innerHTML,
              ariaL: T.getAttribute("aria-label"),
              ariaH: T.getAttribute("aria-hidden"),
            }),
              i === "auto"
                ? T.setAttribute("aria-label", (T.textContent || "").trim())
                : i === "hidden" && T.setAttribute("aria-hidden", "true");
            let C = [],
              P = [],
              L = [],
              k = d ? il("char", e, C) : null,
              $ = il("word", e, P),
              x,
              E,
              O,
              I;
            if ((dd(T, e, $, k, p, r && (f || p), v, m, g, !1), f)) {
              let M = Ao(T.childNodes),
                D = Cv(T, M, e, L),
                z,
                B = [],
                A = 0,
                V = M.map((le) =>
                  le.nodeType === 1 ? le.getBoundingClientRect() : ru
                ),
                G = ru;
              for (x = 0; x < M.length; x++)
                (z = M[x]),
                  z.nodeType === 1 &&
                    (z.nodeName === "BR"
                      ? (B.push(z), D(A, x + 1), (A = x + 1), (G = V[A]))
                      : (x &&
                          V[x].top > G.top &&
                          V[x].left <= G.left &&
                          (D(A, x), (A = x)),
                        (G = V[x])));
              A < x && D(A, x),
                B.forEach((le) => {
                  var ie;
                  return (ie = le.parentNode) == null
                    ? void 0
                    : ie.removeChild(le);
                });
            }
            if (!h) {
              for (x = 0; x < P.length; x++)
                if (
                  ((E = P[x]),
                  d || !E.nextSibling || E.nextSibling.nodeType !== 3)
                )
                  if (s && !f) {
                    for (
                      O = document.createElement("span"),
                        O.style.whiteSpace = "nowrap";
                      E.firstChild;

                    )
                      O.appendChild(E.firstChild);
                    E.replaceWith(O);
                  } else E.replaceWith(...E.childNodes);
                else
                  (I = E.nextSibling),
                    I &&
                      I.nodeType === 3 &&
                      ((I.textContent =
                        (E.textContent || "") + (I.textContent || "")),
                      E.remove());
              (P.length = 0), T.normalize();
            }
            this.lines.push(...L), this.words.push(...P), this.chars.push(...C);
          }),
          u &&
            this[u] &&
            this.masks.push(
              ...this[u].map((T) => {
                let w = T.cloneNode();
                return (
                  T.replaceWith(w),
                  w.appendChild(T),
                  T.className &&
                    (w.className = T.className.replace(
                      /(\b\w+\b)/g,
                      "$1-mask"
                    )),
                  (w.style.overflow = "clip"),
                  w
                );
              })
            )),
        (this.isSplit = !0),
        er && (l ? er.addEventListener("loadingdone", this._split) : er.status),
        (S = o && o(this)) &&
          S.totalTime &&
          (this._data.anim = y ? S.totalTime(y) : S),
        f &&
          l &&
          this.elements.forEach((T, w) => {
            (b[w].width = T.offsetWidth), _ && _.observe(T);
          }),
        this
      );
    }
    revert() {
      var e, t;
      let { orig: i, anim: r, obs: s } = this._data;
      return (
        s && s.disconnect(),
        i.forEach(({ element: o, html: l, ariaL: c, ariaH: u }) => {
          (o.innerHTML = l),
            c
              ? o.setAttribute("aria-label", c)
              : o.removeAttribute("aria-label"),
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
        er?.removeEventListener("loadingdone", this._split),
        r && ((this._data.animTime = r.totalTime()), r.revert()),
        (t = (e = this.vars).onRevert) == null || t.call(e, this),
        this
      );
    }
    static create(e, t) {
      return new Ri(e, t);
    }
    static register(e) {
      (Vr = Vr || e || window.gsap),
        Vr && ((Ao = Vr.utils.toArray), (ga = Vr.core.context || ga)),
        !tl && window.innerWidth > 0 && ((er = document.fonts), (tl = !0));
    }
  }),
  a(Ri, "_SplitText"),
  Ri);
hd.version = "3.13.0";
let Te = hd;
N.registerPlugin(j, Te);
const Pv = a(async () => {
    await document.fonts.ready,
      document.querySelectorAll("[split-text]").forEach((e) => {
        e.hasAttribute("data-split-initialized") ||
          (e.setAttribute("data-split-initialized", "true"),
          Te.create(e, {
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
              N.set(r, { willChange: "transform" }),
                N.from(r, {
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
  }, "splitAllText"),
  li = a(() => {
    Pv();
  }, "initSplitTextAnimate");
N.registerPlugin(j);
const ci = a(() => {
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
      const c = l.getAttribute("motion");
      if (c !== "fade" && c !== "move-up") return;
      const u = parseFloat(l.getAttribute("motion-duration") || "1.4"),
        f = parseFloat(l.getAttribute("motion-delay") || "0"),
        d = l.getAttribute("motion-ease") || "power2.out",
        h = l.getAttribute("motion-start") || "top 80%";
      let p;
      c === "fade"
        ? (N.set(l, { opacity: 0 }),
          (p = N.to(l, {
            opacity: 1,
            duration: u,
            delay: f,
            ease: d,
            scrollTrigger: {
              trigger: l,
              start: h,
              toggleActions: "play none none reverse",
            },
          })))
        : c === "move-up" &&
          (N.set(l, { opacity: 0, y: 50 }),
          (p = N.to(l, {
            opacity: 1,
            y: 0,
            duration: u,
            delay: f,
            ease: d,
            scrollTrigger: {
              trigger: l,
              start: h,
              toggleActions: "play none none reverse",
            },
          }))),
        p && e.push(p);
    }, "createAnimation"),
    s = a(() => {
      document.querySelectorAll("[motion]").forEach((c) => r(c));
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
N.registerPlugin(Te);
const kv = a((n) => {
  const e = document.querySelectorAll("[page-load='component']"),
    t = document.querySelectorAll("[page-load='wrap']"),
    i = document.querySelectorAll("[page-load='gradient']"),
    r = document.querySelectorAll("[page-load='text']"),
    s = document.querySelectorAll(".page_cover"),
    o = localStorage.getItem("pageLoadPlayed") !== "true",
    l = sessionStorage.getItem("sessionPageLoadPlayed") !== "true";
  o && localStorage.setItem("pageLoadPlayed", "true"),
    l && sessionStorage.setItem("sessionPageLoadPlayed", "true");
  const c = o || l,
    u = N.timeline();
  N.set(i, { opacity: 0 }), N.set(t, { opacity: 0 });
  let f = [],
    d = [];
  return (
    c
      ? (r.forEach((h) => {
          const p = Te.create(h, {
            type: "lines",
            mask: "lines",
            linesClass: "pg-load-text-line",
            onSplit: a(function (g) {
              return (
                N.set(g.lines, {
                  opacity: 0,
                  yPercent: 100,
                  willChange: "transform, opacity",
                }),
                g
              );
            }, "onSplit"),
          });
          f.push(p);
        }),
        (d = f.flatMap((h) => h.lines)))
      : N.set(r, { opacity: 0 }),
    u.to(i, {
      opacity: c ? 1 : 0,
      duration: c ? (o ? 2 : 1.6) : 0.6,
      ease: "power1.out",
    }),
    u.to(t, { opacity: 1, duration: c ? 1 : 0.8, ease: "power2.inOut" }, "<"),
    u.to(
      s,
      {
        opacity: 0,
        duration: c ? 1 : 0.8,
        pointerEvents: "none",
        ease: "power2.inOut",
      },
      "<"
    ),
    c &&
      (u.to(r, { opacity: 1, duration: 1, ease: "power2.inOut" }),
      u.to(
        d,
        {
          opacity: 1,
          duration: 1.6,
          stagger: 0.2,
          yPercent: 0,
          ease: "expo.inOut",
        },
        "-=1.4"
      ),
      u.to(d, {
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
        duration: c ? 1.6 : 1.2,
        ease: "expo.inOut",
        onComplete: a(() => {
          N.set(e, { pointerEvents: "none" }),
            c && f.forEach((h) => h.revert());
        }, "onComplete"),
      },
      c ? (o ? "-=0.7" : "-=0.5") : "-=0.2"
    ),
    u
  );
}, "pageLoad");
N.registerPlugin(Te);
const Mv = a((n) => {
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
          document.querySelectorAll(".move-text").forEach((u) => {
            u.parentNode &&
              (u.parentNode.insertBefore(u.firstChild, u), u.remove());
          });
      }, "cleanup"),
      o = a(() => {
        const c = document.querySelector("[home-hero='text']"),
          u = document.querySelector("[home-hero='btn']"),
          f = document.querySelector("[home-hero='visual']");
        c &&
          (t = Te.create(c, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "home-hero-text-line",
            tag: "span",
            onSplit(d) {
              d.lines.forEach((p) => {
                const g = document.createElement("div");
                g.classList.add("move-text"),
                  p.parentNode.insertBefore(g, p),
                  g.appendChild(p);
              });
              const h = c.querySelectorAll("span");
              return (
                h.length &&
                  h.forEach((p) => {
                    const g = document.createElement("div");
                    (g.style.overflow = "clip"),
                      (g.style.paddingBottom = "3px"),
                      p.parentNode.insertBefore(g, p),
                      g.appendChild(p);
                  }),
                (i = N.timeline()),
                N.set(".move-text", { opacity: 0, yPercent: 100 }),
                N.set(u, { opacity: 0 }),
                N.set(f, { opacity: 0 }),
                i.to(".move-text", {
                  opacity: 1,
                  duration: 1.8,
                  stagger: 0.08,
                  ease: "expo.inOut",
                  yPercent: 0,
                }),
                i.to(u, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
                i.to(
                  f,
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
  ui = a((n) => {
    const e = document.querySelectorAll("[nav-load='component']"),
      t = document.querySelectorAll("[main-nav='brand']"),
      i = document.querySelectorAll("[nav-link='wrap']");
    N.set(e, { opacity: 0 }),
      N.set(t, { opacity: 0 }),
      N.set(i, { opacity: 0, yPercent: -100 });
    const r = N.timeline();
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
  }, "navLoad"),
  Av = a(() => {
    const n = document.querySelector("[home-hero='visual']"),
      e = document.querySelector("[home-hero='follow-button']");
    N.set(e, {
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
          N.to(e, { x: 0, y: 0, duration: 1.6, ease: "elastic.out(1.5, 0.5)" });
      }),
      window.addEventListener("mousemove", (o) => {
        if (t) {
          const l = o.clientX + 10,
            c = o.clientY + 10,
            u = e.parentElement.getBoundingClientRect(),
            f = l - u.left,
            d = c - u.top;
          N.to(e, {
            x: f - r + 50,
            y: d - s - 30,
            duration: 1.4,
            ease: "elastic.out(2, 0.75)",
          });
        }
      });
  }, "videoMouseFollow"),
  $v = a(() => {
    Av();
  }, "initVideoMouseFollow"),
  au = a(() => {
    hh(), qu(), li(), ci(), $v();
    const n = kv();
    n.add(() => ui(), "-=0.8"), n.add(() => Mv(), "-=1");
  }, "homeInit"),
  pd = a(() => {
    const n = document.querySelector(".swiper[review-slider='component']");
    n &&
      new ii(n, {
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
                (i) => !i.classList.contains("swiper-slide-duplicate")
              ).length,
              t = this.realIndex + 1;
            (document.querySelector("[review-slider-count]").textContent = e),
              (document.querySelector("[review-slider-current]").textContent =
                t);
          }, "init"),
          slideChange: a(function () {
            const e = this.realIndex + 1;
            document.querySelector("[review-slider-current]").textContent = e;
          }, "slideChange"),
        },
      });
  }, "initReviewSlider");
N.registerPlugin(j);
const Ov = a(() => {
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
          (l.forEach((c, u) => {
            N.set(c, {
              clipPath: u === 0 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
            });
          }),
          (e = N.timeline({
            scrollTrigger: {
              trigger: o,
              start: "top top",
              end: `+=${l.length * 100}%`,
              scrub: !0,
              pin: !1,
              markers: !1,
            },
          })),
          l.forEach((c, u) => {
            u !== 0 &&
              e.to(
                c,
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
  Lv = a(() => {
    document.querySelectorAll("[image-index='wrap']").forEach((n) => {
      const e = n.querySelector("[image-index='large']"),
        t = n.querySelector("[image-index='small']"),
        i = a((c, u) => {
          const f = [];
          let d = c;
          for (; d && d !== u; )
            (d = d.parentElement), d && d !== u && f.push(d);
          return f;
        }, "getAllParents"),
        r = i(e, n),
        s = i(t, n),
        o = a((c, u, f) => {
          (c.style.zIndex = f),
            u.forEach((d) => {
              d.style.zIndex = f;
            });
        }, "setZIndex");
      o(e, r, "2"), o(t, s, "1");
      const l = a((c, u, f, d) => {
        o(c, f, "2"), o(u, d, "1");
      }, "handleClick");
      e.addEventListener("click", () => l(e, t, r, s)),
        t.addEventListener("click", () => l(t, e, s, r));
    });
  }, "imageIndex"),
  Wl = a(() => {
    Lv();
  }, "initImageIndex"),
  Iv = a(() => {
    const n = document.querySelector(".swiper[about-slider='component']");
    n &&
      new ii(n, {
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
                (i) => !i.classList.contains("swiper-slide-duplicate")
              ).length,
              t = this.realIndex + 1;
            (document.querySelector("[data-slider-count]").textContent = e),
              (document.querySelector("[data-slider-current]").textContent = t);
          }, "init"),
          slideChange: a(function () {
            const e = this.realIndex + 1;
            document.querySelector("[data-slider-current]").textContent = e;
          }, "slideChange"),
        },
      });
  }, "initAboutSlider"),
  Yi = a((n) => {
    const e = document.querySelector(".page_overlay"),
      t = document.querySelector("[page-overlay='text-wrap']"),
      i = N.timeline();
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
N.registerPlugin(Te);
const Dv = a((n) => {
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
          document.querySelectorAll(".move-text").forEach((u) => {
            u.parentNode &&
              (u.parentNode.insertBefore(u.firstChild, u), u.remove());
          });
      }, "cleanup"),
      o = a(() => {
        const c = document.querySelector("[about-hero='text']"),
          u = document.querySelectorAll("[about-hero='visual']");
        c &&
          (t = Te.create(c, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "about-hero-text-line",
            tag: "span",
            onSplit(f) {
              f.lines.forEach((h) => {
                const p = document.createElement("div");
                p.classList.add("move-text"),
                  h.parentNode.insertBefore(p, h),
                  p.appendChild(h);
              });
              const d = c.querySelectorAll("span");
              return (
                d.length &&
                  d.forEach((h) => {
                    const p = document.createElement("div");
                    (p.style.overflow = "clip"),
                      (p.style.paddingBottom = "3px"),
                      h.parentNode.insertBefore(p, h),
                      p.appendChild(h);
                  }),
                (i = N.timeline()),
                N.set(".move-text", { opacity: 0, yPercent: 100 }),
                N.set(u, { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }),
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
  zv = a(() => {
    Iv(), pd(), Ov(), Wl(), li(), ci();
    const n = Yi();
    n.add(() => ui(), "-=1"), n.add(() => Dv(), "-=1");
  }, "aboutInit");
var Rv = "1.3.1";
function md(n, e, t) {
  return Math.max(n, Math.min(e, t));
}
a(md, "clamp");
function Nv(n, e, t) {
  return (1 - t) * n + t * e;
}
a(Nv, "lerp");
function Bv(n, e, t, i) {
  return Nv(n, e, 1 - Math.exp(-t * i));
}
a(Bv, "damp");
function Fv(n, e) {
  return ((n % e) + e) % e;
}
a(Fv, "modulo");
var br,
  qv =
    ((br = class {
      constructor() {
        Y(this, "isRunning", !1);
        Y(this, "value", 0);
        Y(this, "from", 0);
        Y(this, "to", 0);
        Y(this, "currentTime", 0);
        Y(this, "lerp");
        Y(this, "duration");
        Y(this, "easing");
        Y(this, "onUpdate");
      }
      advance(e) {
        if (!this.isRunning) return;
        let t = !1;
        if (this.duration && this.easing) {
          this.currentTime += e;
          const i = md(0, this.currentTime / this.duration, 1);
          t = i >= 1;
          const r = t ? 1 : this.easing(i);
          this.value = this.from + (this.to - this.from) * r;
        } else
          this.lerp
            ? ((this.value = Bv(this.value, this.to, this.lerp * 60, e)),
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
    a(br, "Animate"),
    br);
function Hv(n, e) {
  let t;
  return function (...i) {
    let r = this;
    clearTimeout(t),
      (t = setTimeout(() => {
        (t = void 0), n.apply(r, i);
      }, e));
  };
}
a(Hv, "debounce$1");
var _r,
  Vv =
    ((_r = class {
      constructor(e, t, { autoResize: i = !0, debounce: r = 250 } = {}) {
        Y(this, "width", 0);
        Y(this, "height", 0);
        Y(this, "scrollHeight", 0);
        Y(this, "scrollWidth", 0);
        Y(this, "debouncedResize");
        Y(this, "wrapperResizeObserver");
        Y(this, "contentResizeObserver");
        Y(
          this,
          "resize",
          a(() => {
            this.onWrapperResize(), this.onContentResize();
          }, "resize")
        );
        Y(
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
        Y(
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
            ((this.debouncedResize = Hv(this.resize, r)),
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
    a(_r, "Dimensions"),
    _r),
  xr,
  gd =
    ((xr = class {
      constructor() {
        Y(this, "events", {});
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
    a(xr, "Emitter"),
    xr),
  lu = 100 / 6,
  Hn = { passive: !1 },
  Sr,
  Wv =
    ((Sr = class {
      constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        Y(this, "touchStart", { x: 0, y: 0 });
        Y(this, "lastDelta", { x: 0, y: 0 });
        Y(this, "window", { width: 0, height: 0 });
        Y(this, "emitter", new gd());
        Y(
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
        Y(
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
        Y(
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
        Y(
          this,
          "onWheel",
          a((e) => {
            let { deltaX: t, deltaY: i, deltaMode: r } = e;
            const s = r === 1 ? lu : r === 2 ? this.window.width : 1,
              o = r === 1 ? lu : r === 2 ? this.window.height : 1;
            (t *= s),
              (i *= o),
              (t *= this.options.wheelMultiplier),
              (i *= this.options.wheelMultiplier),
              this.emitter.emit("scroll", { deltaX: t, deltaY: i, event: e });
          }, "onWheel")
        );
        Y(
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
          this.element.addEventListener("wheel", this.onWheel, Hn),
          this.element.addEventListener("touchstart", this.onTouchStart, Hn),
          this.element.addEventListener("touchmove", this.onTouchMove, Hn),
          this.element.addEventListener("touchend", this.onTouchEnd, Hn);
      }
      on(e, t) {
        return this.emitter.on(e, t);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, Hn),
          this.element.removeEventListener("touchstart", this.onTouchStart, Hn),
          this.element.removeEventListener("touchmove", this.onTouchMove, Hn),
          this.element.removeEventListener("touchend", this.onTouchEnd, Hn);
      }
    }),
    a(Sr, "VirtualScroll"),
    Sr),
  Tr,
  Xv =
    ((Tr = class {
      constructor({
        wrapper: e = window,
        content: t = document.documentElement,
        eventsTarget: i = e,
        smoothWheel: r = !0,
        syncTouch: s = !1,
        syncTouchLerp: o = 0.075,
        touchInertiaMultiplier: l = 35,
        duration: c,
        easing: u = a(
          (L) => Math.min(1, 1.001 - Math.pow(2, -10 * L)),
          "easing"
        ),
        lerp: f = 0.1,
        infinite: d = !1,
        orientation: h = "vertical",
        gestureOrientation: p = "vertical",
        touchMultiplier: g = 1,
        wheelMultiplier: m = 1,
        autoResize: v = !0,
        prevent: b,
        virtualScroll: y,
        overscroll: _ = !0,
        autoRaf: S = !1,
        anchors: T = !1,
        autoToggle: w = !1,
        allowNestedScroll: C = !1,
        __experimental__naiveDimensions: P = !1,
      } = {}) {
        Y(this, "_isScrolling", !1);
        Y(this, "_isStopped", !1);
        Y(this, "_isLocked", !1);
        Y(this, "_preventNextNativeScrollEvent", !1);
        Y(this, "_resetVelocityTimeout", null);
        Y(this, "__rafID", null);
        Y(this, "isTouching");
        Y(this, "time", 0);
        Y(this, "userData", {});
        Y(this, "lastVelocity", 0);
        Y(this, "velocity", 0);
        Y(this, "direction", 0);
        Y(this, "options");
        Y(this, "targetScroll");
        Y(this, "animatedScroll");
        Y(this, "animate", new qv());
        Y(this, "emitter", new gd());
        Y(this, "dimensions");
        Y(this, "virtualScroll");
        Y(
          this,
          "onScrollEnd",
          a((e) => {
            e instanceof CustomEvent ||
              ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
                e.stopPropagation());
          }, "onScrollEnd")
        );
        Y(
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
        Y(
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
        Y(
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
        Y(
          this,
          "onPointerDown",
          a((e) => {
            e.button === 1 && this.reset();
          }, "onPointerDown")
        );
        Y(
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
            const u =
              (this.options.gestureOrientation === "vertical" && i === 0) ||
              (this.options.gestureOrientation === "horizontal" && t === 0);
            if (l || u) return;
            let f = r.composedPath();
            f = f.slice(0, f.indexOf(this.rootElement));
            const d = this.options.prevent;
            if (
              f.find(
                (b) =>
                  b instanceof HTMLElement &&
                  ((typeof d == "function" && d?.(b)) ||
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
            let p = i;
            this.options.gestureOrientation === "both"
              ? (p = Math.abs(i) > Math.abs(t) ? i : t)
              : this.options.gestureOrientation === "horizontal" && (p = t),
              (!this.options.overscroll ||
                this.options.infinite ||
                (this.options.wrapper !== window &&
                  ((this.animatedScroll > 0 &&
                    this.animatedScroll < this.limit) ||
                    (this.animatedScroll === 0 && i > 0) ||
                    (this.animatedScroll === this.limit && i < 0)))) &&
                (r.lenisStopPropagation = !0),
              r.preventDefault();
            const g = s && this.options.syncTouch,
              v = s && r.type === "touchend" && Math.abs(p) > 5;
            v && (p = this.velocity * this.options.touchInertiaMultiplier),
              this.scrollTo(this.targetScroll + p, {
                programmatic: !1,
                ...(g
                  ? { lerp: v ? this.options.syncTouchLerp : 1 }
                  : {
                      lerp: this.options.lerp,
                      duration: this.options.duration,
                      easing: this.options.easing,
                    }),
              });
          }, "onVirtualScroll")
        );
        Y(
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
        Y(
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
        (window.lenisVersion = Rv),
          (!e || e === document.documentElement) && (e = window),
          (this.options = {
            wrapper: e,
            content: t,
            eventsTarget: i,
            smoothWheel: r,
            syncTouch: s,
            syncTouchLerp: o,
            touchInertiaMultiplier: l,
            duration: c,
            easing: u,
            lerp: f,
            infinite: d,
            gestureOrientation: p,
            orientation: h,
            touchMultiplier: g,
            wheelMultiplier: m,
            autoResize: v,
            prevent: b,
            virtualScroll: y,
            overscroll: _,
            autoRaf: S,
            anchors: T,
            autoToggle: w,
            allowNestedScroll: C,
            __experimental__naiveDimensions: P,
          }),
          (this.dimensions = new Vv(e, t, { autoResize: v })),
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
          (this.virtualScroll = new Wv(i, {
            touchMultiplier: g,
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
          immediate: i = !1,
          lock: r = !1,
          duration: s = this.options.duration,
          easing: o = this.options.easing,
          lerp: l = this.options.lerp,
          onStart: c,
          onComplete: u,
          force: f = !1,
          programmatic: d = !0,
          userData: h,
        } = {}
      ) {
        if (!((this.isStopped || this.isLocked) && !f)) {
          if (typeof e == "string" && ["top", "left", "start"].includes(e))
            e = 0;
          else if (
            typeof e == "string" &&
            ["bottom", "right", "end"].includes(e)
          )
            e = this.limit;
          else {
            let p;
            if (
              (typeof e == "string"
                ? (p = document.querySelector(e))
                : e instanceof HTMLElement && e?.nodeType && (p = e),
              p)
            ) {
              if (this.options.wrapper !== window) {
                const m = this.rootElement.getBoundingClientRect();
                t -= this.isHorizontal ? m.left : m.top;
              }
              const g = p.getBoundingClientRect();
              e = (this.isHorizontal ? g.left : g.top) + this.animatedScroll;
            }
          }
          if (typeof e == "number") {
            if (((e += t), (e = Math.round(e)), this.options.infinite)) {
              if (d) {
                this.targetScroll = this.animatedScroll = this.scroll;
                const p = e - this.animatedScroll;
                p > this.limit / 2
                  ? (e = e - this.limit)
                  : p < -this.limit / 2 && (e = e + this.limit);
              }
            } else e = md(0, e, this.limit);
            if (e === this.targetScroll) {
              c?.(this), u?.(this);
              return;
            }
            if (((this.userData = h ?? {}), i)) {
              (this.animatedScroll = this.targetScroll = e),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                u?.(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                });
              return;
            }
            d || (this.targetScroll = e),
              this.animate.fromTo(this.animatedScroll, e, {
                duration: s,
                easing: o,
                lerp: l,
                onStart: a(() => {
                  r && (this.isLocked = !0),
                    (this.isScrolling = "smooth"),
                    c?.(this);
                }, "onStart"),
                onUpdate: a((p, g) => {
                  (this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = p - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = p),
                    this.setScroll(this.scroll),
                    d && (this.targetScroll = p),
                    g || this.emit(),
                    g &&
                      (this.reset(),
                      this.emit(),
                      u?.(this),
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
        let o, l, c, u, f, d, h, p;
        const g = this.options.gestureOrientation;
        if (r - (s.time ?? 0) > 2e3) {
          s.time = Date.now();
          const w = window.getComputedStyle(e);
          s.computedStyle = w;
          const C = w.overflowX,
            P = w.overflowY;
          if (
            ((o = ["auto", "overlay", "scroll"].includes(C)),
            (l = ["auto", "overlay", "scroll"].includes(P)),
            (s.hasOverflowX = o),
            (s.hasOverflowY = l),
            (!o && !l) ||
              (g === "vertical" && !l) ||
              (g === "horizontal" && !o))
          )
            return !1;
          (f = e.scrollWidth),
            (d = e.scrollHeight),
            (h = e.clientWidth),
            (p = e.clientHeight),
            (c = f > h),
            (u = d > p),
            (s.isScrollableX = c),
            (s.isScrollableY = u),
            (s.scrollWidth = f),
            (s.scrollHeight = d),
            (s.clientWidth = h),
            (s.clientHeight = p);
        } else
          (c = s.isScrollableX),
            (u = s.isScrollableY),
            (o = s.hasOverflowX),
            (l = s.hasOverflowY),
            (f = s.scrollWidth),
            (d = s.scrollHeight),
            (h = s.clientWidth),
            (p = s.clientHeight);
        if (
          (!o && !l) ||
          (!c && !u) ||
          (g === "vertical" && (!l || !u)) ||
          (g === "horizontal" && (!o || !c))
        )
          return !1;
        let m;
        if (g === "horizontal") m = "x";
        else if (g === "vertical") m = "y";
        else {
          const w = t !== 0,
            C = i !== 0;
          w && o && c && (m = "x"), C && l && u && (m = "y");
        }
        if (!m) return !1;
        let v, b, y, _, S;
        if (m === "x")
          (v = e.scrollLeft), (b = f - h), (y = t), (_ = o), (S = c);
        else if (m === "y")
          (v = e.scrollTop), (b = d - p), (y = i), (_ = l), (S = u);
        else return !1;
        return (y > 0 ? v < b : v > 0) && _ && S;
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
          ? Fv(this.animatedScroll, this.limit)
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
    a(Tr, "Lenis"),
    Tr);
N.registerPlugin(j);
let fo;
const Yv = a(() => {
    "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      ((fo = new Xv({
        autoRaf: !0,
        lerp: 0.1,
        duration: 1.2,
        easing: a((n) => Math.min(1, 1.001 - Math.pow(2, -12 * n)), "easing"),
        smoothWheel: !0,
        smoothTouch: !1,
      })),
      fo.on("scroll", j.update),
      N.ticker.add((n) => {
        fo.raf(n * 1e3);
      }),
      N.ticker.lagSmoothing(0));
  }, "smoothScroll"),
  vd = a(() => {
    Yv();
  }, "initLenis"),
  Di = a(() => fo, "getLenis"),
  Gv = a(() => {
    const n = document.querySelectorAll("[career-modal='open-trigger']"),
      e = document.querySelectorAll("[career-modal='modal']");
    if (!n || !e) return;
    let t = null,
      i = null;
    const r = a((s) => {
      if (s.key === "Escape" && t && i) {
        i.restart();
        const o = Di();
        o && o.start();
      }
    }, "handleEscapeKey");
    document.addEventListener("keydown", r),
      e.forEach((s) => {
        const o = s.getAttribute("career-modal-name"),
          l = s.querySelector("[career-modal='component']"),
          c = s.querySelector("[career-modal='main-info']"),
          u = s.querySelector("[career-modal='sec-info']"),
          f = s.querySelectorAll("[career-modal='close-trigger']");
        if (!l || !c || !u || !f) return;
        N.set(s, {
          opacity: 0,
          pointerEvents: "none",
          visibility: "hidden",
          display: "none",
        }),
          N.set(l, { clipPath: "inset(0% 0% 100% 0%)" }),
          N.set([c, u], { opacity: 0, y: 100, filter: "blur(2px)" });
        const d = N.timeline({ paused: !0 }),
          h = N.timeline({ paused: !0 });
        d.to(s, {
          opacity: 1,
          pointerEvents: "auto",
          visibility: "visible",
          display: "block",
          ease: "expo.out",
          duration: 0,
        }),
          d.to(
            l,
            { clipPath: "inset(0% 0% 0% 0%)", ease: "expo.inOut", duration: 1 },
            "<"
          ),
          d.to(
            [c, u],
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
          h.to([c, u], {
            y: 100,
            opacity: 0,
            filter: "blur(2px)",
            ease: "expo.out",
            duration: 0.8,
            stagger: -0.14,
          }),
          h.to(
            l,
            {
              clipPath: "inset(0% 0% 100% 0%)",
              ease: "expo.inOut",
              duration: 0.8,
            },
            "<"
          ),
          h.to(
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
        const p = Array.from(n).find(
          (g) => g.getAttribute("career-modal-name") === o
        );
        p &&
          p.addEventListener("click", () => {
            d.restart(), (t = s), (i = h);
            const g = Di();
            g && g.stop();
          }),
          f.forEach((g) => {
            g.addEventListener("click", () => {
              h.restart(), (t = null), (i = null);
              const m = Di();
              m && m.start();
            });
          });
      });
  }, "careerModal"),
  jv = a(() => {
    Gv();
  }, "initCareerModal"),
  Uv = a(() => {
    const n = document.querySelectorAll("[clock='component']"),
      e = a(() => {
        n.forEach((t) => {
          const r = t.querySelector("[clock-location]")?.dataset.timezone,
            s = t.querySelector("[clock='hour-hand']"),
            o = t.querySelector("[clock='minute-hand']"),
            l = t.querySelector("[clock='text']");
          if (!r || !s || !o || !l) return;
          const c = new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: !0,
              timeZone: r,
            }),
            u = new Date(new Date().toLocaleString("en-US", { timeZone: r })),
            f = u.getHours() % 12,
            d = u.getMinutes(),
            h = u.getSeconds(),
            p = (f + d / 60) * 30,
            g = (d + h / 60) * 6;
          s.setAttribute("transform", `rotate(${p} 10 10)`),
            o.setAttribute("transform", `rotate(${g} 10 10)`),
            (l.textContent = c);
        }),
          requestAnimationFrame(e);
      }, "updateClocks");
    e();
  }, "clock"),
  yd = a(() => {
    Uv();
  }, "initClock");
N.registerPlugin(Te);
const Kv = a((n) => {
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
          document.querySelectorAll(".move-text").forEach((u) => {
            u.parentNode &&
              (u.parentNode.insertBefore(u.firstChild, u), u.remove());
          });
      }, "cleanup"),
      o = a(() => {
        const c = document.querySelector("[contact-hero='text']"),
          u = document.querySelector("[contact-hero='visual']"),
          f = document.querySelectorAll("[contact-hero='visual-info']"),
          d = document.querySelectorAll("[contact-hero='cta']");
        c &&
          (t = Te.create(c, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "contact-hero-text-line",
            tag: "span",
            onSplit(h) {
              h.lines.forEach((g) => {
                const m = document.createElement("div");
                m.classList.add("move-text"),
                  g.parentNode.insertBefore(m, g),
                  m.appendChild(g);
              });
              const p = c.querySelectorAll("span");
              return (
                p.length &&
                  p.forEach((g) => {
                    const m = document.createElement("div");
                    (m.style.overflow = "clip"),
                      (m.style.paddingBottom = "3px"),
                      g.parentNode.insertBefore(m, g),
                      m.appendChild(g);
                  }),
                (i = N.timeline()),
                N.set(".move-text", { opacity: 0, yPercent: 100 }),
                N.set(u, { opacity: 0, clipPath: "inset(50% round 16px)" }),
                N.set(f, { opacity: 0, y: 50 }),
                N.set(d, { opacity: 0, yPercent: 50 }),
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
                  f,
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
                  d,
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
  Zv = a(() => {
    yd(), li(), ci();
    const n = Yi();
    n.add(() => ui(), "-=1"), n.add(() => Kv(), "-=1");
  }, "contactInit");
N.registerPlugin(Te);
const Qv = a((n) => {
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
          document.querySelectorAll(".move-text").forEach((u) => {
            u.parentNode &&
              (u.parentNode.insertBefore(u.firstChild, u), u.remove());
          });
      }, "cleanup"),
      o = a(() => {
        const c = document.querySelector("[career-hero='text']"),
          u = document.querySelector("[career-hero='btn']"),
          f = document.querySelector("[career-hero='visual']");
        c &&
          (t = Te.create(c, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "career-hero-text-line",
            tag: "span",
            onSplit(d) {
              d.lines.forEach((p) => {
                const g = document.createElement("div");
                g.classList.add("move-text"),
                  p.parentNode.insertBefore(g, p),
                  g.appendChild(p);
              });
              const h = c.querySelectorAll("span");
              return (
                h.length &&
                  h.forEach((p) => {
                    const g = document.createElement("div");
                    (g.style.overflow = "clip"),
                      (g.style.paddingBottom = "3px"),
                      p.parentNode.insertBefore(g, p),
                      g.appendChild(p);
                  }),
                (i = N.timeline()),
                N.set(".move-text", { opacity: 0, yPercent: 100 }),
                N.set(u, { opacity: 0 }),
                N.set(f, { opacity: 0 }),
                i.to(".move-text", {
                  opacity: 1,
                  duration: 1.8,
                  stagger: 0.08,
                  ease: "expo.inOut",
                  yPercent: 0,
                }),
                i.to(u, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
                i.to(
                  f,
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
  Jv = a(() => {
    Wl(), jv(), yd(), li(), ci();
    const n = Yi();
    n.add(() => ui(), "-=1"), n.add(() => Qv(), "-=1");
  }, "careerInit");
N.registerPlugin(Te);
const e0 = a((n) => {
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
          document.querySelectorAll(".move-text").forEach((u) => {
            u.parentNode &&
              (u.parentNode.insertBefore(u.firstChild, u), u.remove());
          });
      }, "cleanup"),
      o = a(() => {
        const c = document.querySelector("[work-hero='text']"),
          u = document.querySelector("[work-hero='filter-wrap']"),
          f = document.querySelectorAll("[work-hero='project']");
        c &&
          (t = Te.create(c, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "work-hero-text-line",
            tag: "span",
            onSplit(d) {
              d.lines.forEach((p) => {
                const g = document.createElement("div");
                g.classList.add("move-text"),
                  p.parentNode.insertBefore(g, p),
                  g.appendChild(p);
              });
              const h = c.querySelectorAll("span");
              return (
                h.length &&
                  h.forEach((p) => {
                    const g = document.createElement("div");
                    (g.style.overflow = "clip"),
                      (g.style.paddingBottom = "3px"),
                      p.parentNode.insertBefore(g, p),
                      g.appendChild(p);
                  }),
                (i = N.timeline()),
                N.set(".move-text", { opacity: 0, yPercent: 100 }),
                N.set(u, { opacity: 0 }),
                N.set(f, { y: 100, opacity: 0 }),
                i.to(".move-text", {
                  opacity: 1,
                  duration: 1.8,
                  stagger: 0.08,
                  ease: "expo.inOut",
                  yPercent: 0,
                }),
                i.to(u, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
                i.to(
                  f,
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
  t0 = a(() => {
    pd(), li(), ci();
    const n = Yi();
    n.add(() => ui(), "-=1"), n.add(() => e0(), "-=1");
  }, "workInit"),
  n0 = a(() => {
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
      c = null,
      u = null;
    const f = new Set(),
      d = a(() => {
        e.forEach((b) => {
          const y = b.querySelector("[service-link='num']");
          b.setAttribute("service-link-status", "inactive"),
            N.to(b, { opacity: 0.2, duration: 0.3 }),
            N.to(y, { opacity: 0, y: 5, duration: 0.3 });
        }),
          t.forEach((b) => {
            b.setAttribute("service-item-status", "inactive");
          }),
          o.forEach((b) => {
            b.getAttribute("hero-gradient") !== "main" &&
              N.to(b, { opacity: 0, duration: 0.5 });
          }),
          s && N.to(s, { opacity: 1, duration: 0.5 });
      }, "clearAllActive"),
      h = a((b) => {
        if (u === b) return;
        u = b;
        const y = document.querySelector(
            `[service-link='item'][item-name='${b}']`
          ),
          _ = document.querySelector(`[service-item='${b}']`),
          S = document.querySelector(`[hero-gradient='${b}']`);
        if (y && _) {
          d();
          const T = y.querySelector("[service-link='num']");
          y.setAttribute("service-link-status", "active"),
            N.to(y, { opacity: 1, duration: 0.4 }),
            N.to(T, { opacity: 1, y: 0, duration: 0.4 }),
            _.setAttribute("service-item-status", "active"),
            f.has(b) || (p(_), f.add(b)),
            S &&
              (s && N.to(s, { opacity: 0, duration: 0.5 }),
              N.to(S, { opacity: 1, duration: 0.5 })),
            g(y);
        }
      }, "activateByName"),
      p = a((b) => {
        const y = b.children;
        N.set(y, { opacity: 0, y: 50 }),
          N.to(y, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
          });
      }, "animateServiceItemChildren"),
      g = a((b) => {
        const y = Array.from(e).indexOf(b),
          _ = e.length,
          S = i.offsetHeight,
          T = r.offsetHeight,
          w = S - T,
          C = _ > 1 ? y / (_ - 1) : 0,
          P = w * C;
        N.to(r, { y: P, duration: 0.6, ease: "power2.out" });
      }, "moveLineToItem");
    s && N.set(s, { opacity: 1 }),
      o.forEach((b) => {
        b.getAttribute("hero-gradient") !== "main" && N.set(b, { opacity: 0 });
      }),
      t.forEach((b) => {
        N.set(b.children, { opacity: 0, y: 50 });
      }),
      e.forEach((b) => {
        const y = b.getAttribute("item-name");
        b.addEventListener("click", () => {
          y &&
            (c && clearTimeout(c),
            (l = !0),
            h(y),
            Di().scrollTo(document.querySelector(`[service-item='${y}']`), {
              duration: 1.6,
              offset: -100,
            }),
            (c = setTimeout(() => {
              l = !1;
            }, 2e3)));
        });
      });
    const m = new Map(),
      v = new IntersectionObserver(
        (b) => {
          if (l) return;
          b.forEach((S) => {
            const T = S.target.getAttribute("service-item");
            T &&
              (m.set(T, S.intersectionRatio),
              S.isIntersecting &&
                S.intersectionRatio >= 0.3 &&
                !f.has(T) &&
                (p(S.target), f.add(T)));
          });
          let y = null,
            _ = 0;
          m.forEach((S, T) => {
            S > _ && ((_ = S), (y = T));
          }),
            y && _ >= 0.3 ? h(y) : _ < 0.3 && (d(), (u = null));
        },
        { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
      );
    t.forEach((b) => v.observe(b));
  }, "serviceList"),
  i0 = a(() => {
    n0();
  }, "initServiceList");
var gn,
  Xl,
  $o,
  bd,
  _d,
  cu,
  rl,
  xd,
  Sd = a(function () {
    return typeof window < "u";
  }, "_windowExists"),
  Td = a(function () {
    return gn || (Sd() && (gn = window.gsap) && gn.registerPlugin && gn);
  }, "_getGSAP"),
  r0 = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
  va = {
    rect: ["width", "height"],
    circle: ["r", "r"],
    ellipse: ["rx", "ry"],
    line: ["x2", "y2"],
  },
  Ti = a(function (e) {
    return Math.round(e * 1e4) / 1e4;
  }, "_round"),
  $n = a(function (e) {
    return parseFloat(e) || 0;
  }, "_parseNum"),
  uu = a(function (e, t) {
    var i = $n(e);
    return ~e.indexOf("%") ? (i / 100) * t : i;
  }, "_parseSingleVal"),
  Ks = a(function (e, t) {
    return $n(e.getAttribute(t));
  }, "_getAttributeAsNumber"),
  ho = Math.sqrt,
  fu = a(function (e, t, i, r, s, o) {
    return ho(
      Math.pow(($n(i) - $n(e)) * s, 2) + Math.pow(($n(r) - $n(t)) * o, 2)
    );
  }, "_getDistance"),
  du = a(function (e) {}, "_warn"),
  Ed = a(function (e) {
    return e.getAttribute("vector-effect") === "non-scaling-stroke";
  }, "_hasNonScalingStroke"),
  s0 = 1,
  o0 = a(function (e, t, i) {
    var r = e.indexOf(" "),
      s,
      o;
    return (
      r < 0
        ? ((s = i !== void 0 ? i + "" : e), (o = e))
        : ((s = e.substr(0, r)), (o = e.substr(r + 1))),
      (s = uu(s, t)),
      (o = uu(o, t)),
      s > o ? [o, s] : [s, o]
    );
  }, "_parse"),
  po = a(function (e) {
    if (((e = Xl(e)[0]), !e)) return 0;
    var t = e.tagName.toLowerCase(),
      i = e.style,
      r = 1,
      s = 1,
      o,
      l,
      c,
      u,
      f,
      d,
      h;
    Ed(e) &&
      ((s = e.getScreenCTM()),
      (r = ho(s.a * s.a + s.b * s.b)),
      (s = ho(s.d * s.d + s.c * s.c)));
    try {
      l = e.getBBox();
    } catch {
      du(
        "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
      );
    }
    var p = l || { x: 0, y: 0, width: 0, height: 0 },
      g = p.x,
      m = p.y,
      v = p.width,
      b = p.height;
    if (
      ((!l || (!v && !b)) &&
        va[t] &&
        ((v = Ks(e, va[t][0])),
        (b = Ks(e, va[t][1])),
        t !== "rect" && t !== "line" && ((v *= 2), (b *= 2)),
        t === "line" &&
          ((g = Ks(e, "x1")),
          (m = Ks(e, "y1")),
          (v = Math.abs(v - g)),
          (b = Math.abs(b - m)))),
      t === "path")
    )
      (u = i.strokeDasharray),
        (i.strokeDasharray = "none"),
        (o = e.getTotalLength() || 0),
        Ti(r) !== Ti(s) &&
          !cu &&
          (cu = 1) &&
          du(
            "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
          ),
        (o *= (r + s) / 2),
        (i.strokeDasharray = u);
    else if (t === "rect") o = v * 2 * r + b * 2 * s;
    else if (t === "line") o = fu(g, m, g + v, m + b, r, s);
    else if (t === "polyline" || t === "polygon")
      for (
        c = e.getAttribute("points").match(r0) || [],
          t === "polygon" && c.push(c[0], c[1]),
          o = 0,
          f = 2;
        f < c.length;
        f += 2
      )
        o += fu(c[f - 2], c[f - 1], c[f], c[f + 1], r, s) || 0;
    else
      (t === "circle" || t === "ellipse") &&
        ((d = (v / 2) * r),
        (h = (b / 2) * s),
        (o = Math.PI * (3 * (d + h) - ho((3 * d + h) * (d + 3 * h)))));
    return o || 0;
  }, "_getLength"),
  hu = a(function (e, t) {
    if (((e = Xl(e)[0]), !e)) return [0, 0];
    t || (t = po(e) + 1);
    var i = $o.getComputedStyle(e),
      r = i.strokeDasharray || "",
      s = $n(i.strokeDashoffset),
      o = r.indexOf(",");
    return (
      o < 0 && (o = r.indexOf(" ")),
      (r = o < 0 ? t : $n(r.substr(0, o))),
      r > t && (r = t),
      [-s || 0, r - s || 0]
    );
  }, "_getPosition"),
  pu = a(function () {
    Sd() &&
      (($o = window),
      (_d = gn = Td()),
      (Xl = gn.utils.toArray),
      (rl = gn.core.getStyleSaver),
      (xd = gn.core.reverting || function () {}),
      (bd = (($o.navigator || {}).userAgent || "").indexOf("Edge") !== -1));
  }, "_initCore"),
  Yl = {
    version: "3.13.0",
    name: "drawSVG",
    register: a(function (e) {
      (gn = e), pu();
    }, "register"),
    init: a(function (e, t, i, r, s) {
      if (!e.getBBox) return !1;
      _d || pu();
      var o = po(e),
        l,
        c,
        u;
      return (
        (this.styles =
          rl && rl(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
        (this.tween = i),
        (this._style = e.style),
        (this._target = e),
        t + "" == "true"
          ? (t = "0 100%")
          : t
          ? (t + "").indexOf(" ") === -1 && (t = "0 " + t)
          : (t = "0 0"),
        (l = hu(e, o)),
        (c = o0(t, o, l[0])),
        (this._length = Ti(o)),
        (this._dash = Ti(l[1] - l[0])),
        (this._offset = Ti(-l[0])),
        (this._dashPT = this.add(
          this,
          "_dash",
          this._dash,
          Ti(c[1] - c[0]),
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
          Ti(-c[0]),
          0,
          0,
          0,
          0,
          0,
          1
        )),
        bd &&
          ((u = $o.getComputedStyle(e)),
          u.strokeLinecap !== u.strokeLinejoin &&
            ((c = $n(u.strokeMiterlimit)),
            this.add(e.style, "strokeMiterlimit", c, c + 0.01))),
        (this._live = Ed(e) || ~(t + "").indexOf("live")),
        (this._nowrap = ~(t + "").indexOf("nowrap")),
        this._props.push("drawSVG"),
        s0
      );
    }, "init"),
    render: a(function (e, t) {
      if (t.tween._time || !xd()) {
        var i = t._pt,
          r = t._style,
          s,
          o,
          l,
          c;
        if (i) {
          for (
            t._live &&
            ((s = po(t._target)),
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
            (c = t._offset),
            l &&
              c &&
              l + Math.abs(c % t._length) > t._length - 0.05 &&
              (c += c < 0 ? 0.005 : -0.005) &&
              (s += 0.005),
            (r.strokeDashoffset = l ? c : c + 0.001),
            (r.strokeDasharray =
              s < 0.1
                ? "none"
                : l
                ? l + "px," + (t._nowrap ? 999999 : s) + "px"
                : "0px, 999999px");
        }
      } else t.styles.revert();
    }, "render"),
    getLength: po,
    getPosition: hu,
  };
Td() && gn.registerPlugin(Yl);
N.registerPlugin(Te, Yl);
const a0 = a((n) => {
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
        document.querySelectorAll(".move-text").forEach((u) => {
          u.parentNode &&
            (u.parentNode.insertBefore(u.firstChild, u), u.remove());
        });
    }, "cleanup"),
    o = a(() => {
      const c = document.querySelector("[service-hero='text']"),
        u = document.querySelectorAll("[service-hero='btn']"),
        f = document.querySelectorAll("[service-hero='svg']"),
        d = document.querySelectorAll("[service-hero='svg'] path");
      c &&
        (t = Te.create(c, {
          type: "lines",
          autoSplit: !0,
          mask: "lines",
          linesClass: "service-hero-text-line",
          tag: "span",
          onSplit(h) {
            h.lines.forEach((g) => {
              const m = document.createElement("div");
              m.classList.add("move-text"),
                g.parentNode.insertBefore(m, g),
                m.appendChild(g);
            });
            const p = c.querySelectorAll("span");
            return (
              p.length &&
                p.forEach((g) => {
                  const m = document.createElement("div");
                  (m.style.overflow = "clip"),
                    (m.style.paddingBottom = "3px"),
                    g.parentNode.insertBefore(m, g),
                    m.appendChild(g);
                }),
              (i = N.timeline()),
              N.set(".move-text", { opacity: 0, yPercent: 100 }),
              N.set(u, { opacity: 0, yPercent: 20, scale: 0 }),
              N.set(f, { opacity: 0 }),
              N.set(d, { drawSVG: 0 }),
              i.to(f, { opacity: 1, duration: 0, ease: "power1.out" }),
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
                d,
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
N.registerPlugin(Yl, j);
const l0 = a(() => {
    const n = document.querySelector(".services_hero_section"),
      e = document.querySelectorAll("[service-hero='svg'] path");
    if (e.length === 0) return;
    N.timeline({
      scrollTrigger: {
        trigger: n,
        start: "bottom 95%",
        end: "bottom 10%",
        scrub: 1.5,
      },
    }).to(e, { drawSVG: "100% 100% " });
  }, "serviceLine"),
  c0 = a(() => {
    l0();
  }, "initServiceLine"),
  u0 = a(() => {
    i0(), li(), ci(), c0();
    const n = Yi();
    n.add(() => ui(), "-=1"), n.add(() => a0(), "-=1");
  }, "serviceInit"),
  f0 = a(() => {
    const n = document.querySelectorAll("[service-item]"),
      e = document.querySelector("[hero-gradient='main']"),
      t = document.querySelectorAll("[hero-gradient]");
    if (!n.length || !e) return;
    let i = !1,
      r = null,
      s = null;
    const o = a(() => {
        t.forEach((d) => {
          d.getAttribute("hero-gradient") !== "main" &&
            N.to(d, { opacity: 0, duration: 0.5 });
        }),
          N.to(e, { opacity: 1, duration: 0.5 });
      }, "showMainGradient"),
      l = a((d) => {
        if (s === d) return;
        s = d;
        const h = document.querySelector(`[hero-gradient='${d}']`);
        h &&
          (N.to(e, { opacity: 0, duration: 0.5 }),
          t.forEach((p) => {
            const g = p.getAttribute("hero-gradient");
            g !== "main" && g !== d && N.to(p, { opacity: 0, duration: 0.5 });
          }),
          N.to(h, { opacity: 1, duration: 0.5 }));
      }, "activateGradientByName");
    N.set(e, { opacity: 1 }),
      t.forEach((d) => {
        d.getAttribute("hero-gradient") !== "main" && N.set(d, { opacity: 0 });
      });
    const c = new Map(),
      u = new IntersectionObserver(
        (d) => {
          if (i) return;
          d.forEach((g) => {
            const m = g.target.getAttribute("service-item");
            m && c.set(m, g.intersectionRatio);
          });
          let h = null,
            p = 0;
          c.forEach((g, m) => {
            g > p && ((p = g), (h = m));
          }),
            h && p >= 0.3 ? l(h) : p < 0.3 && (o(), (s = null));
        },
        { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
      );
    return (
      n.forEach((d) => u.observe(d)),
      {
        setGradient: a((d) => {
          r && clearTimeout(r),
            (i = !0),
            d ? l(d) : (o(), (s = null)),
            (r = setTimeout(() => {
              i = !1;
            }, 1e3));
        }, "setGradient"),
        showMainGradient: o,
      }
    );
  }, "serviceGradients"),
  d0 = a(() => f0(), "initServiceGradients");
var On,
  zi,
  Gl,
  Vo,
  es,
  mo,
  Oo,
  ps,
  sn = "transform",
  sl = sn + "Origin",
  wd,
  jl = a(function (e) {
    var t = e.ownerDocument || e;
    for (
      !(sn in e.style) &&
      ("msTransform" in e.style) &&
      ((sn = "msTransform"), (sl = sn + "Origin"));
      t.parentNode && (t = t.parentNode);

    );
    if (((zi = window), (Oo = new Vi()), t)) {
      (On = t),
        (Gl = t.documentElement),
        (Vo = t.body),
        (ps = On.createElementNS("http://www.w3.org/2000/svg", "g")),
        (ps.style.transform = "none");
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
        (wd = r.offsetParent !== i),
        s.removeChild(i));
    }
    return t;
  }, "_setDoc"),
  h0 = a(function (e) {
    for (var t, i; e && e !== Vo; )
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
  Cd = [],
  Pd = [],
  Ul = a(function () {
    return zi.pageYOffset || On.scrollTop || Gl.scrollTop || Vo.scrollTop || 0;
  }, "_getDocScrollTop"),
  Kl = a(function () {
    return (
      zi.pageXOffset || On.scrollLeft || Gl.scrollLeft || Vo.scrollLeft || 0
    );
  }, "_getDocScrollLeft"),
  Zl = a(function (e) {
    return (
      e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
    );
  }, "_svgOwner"),
  p0 = a(function n(e) {
    if (zi.getComputedStyle(e).position === "fixed") return !0;
    if (((e = e.parentNode), e && e.nodeType === 1)) return n(e);
  }, "_isFixed"),
  ya = a(function n(e, t) {
    if (e.parentNode && (On || jl(e))) {
      var i = Zl(e),
        r = i
          ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
          : "http://www.w3.org/1999/xhtml",
        s = i ? (t ? "rect" : "g") : "div",
        o = t !== 2 ? 0 : 100,
        l = t === 3 ? 100 : 0,
        c =
          "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        u = On.createElementNS
          ? On.createElementNS(r.replace(/^https/, "http"), s)
          : On.createElement(s);
      return (
        t &&
          (i
            ? (mo || (mo = n(e)),
              u.setAttribute("width", 0.01),
              u.setAttribute("height", 0.01),
              u.setAttribute("transform", "translate(" + o + "," + l + ")"),
              mo.appendChild(u))
            : (es || ((es = n(e)), (es.style.cssText = c)),
              (u.style.cssText =
                c +
                "width:0.1px;height:0.1px;top:" +
                l +
                "px;left:" +
                o +
                "px"),
              es.appendChild(u))),
        u
      );
    }
    throw "Need document and parent.";
  }, "_createSibling"),
  m0 = a(function (e) {
    for (var t = new Vi(), i = 0; i < e.numberOfItems; i++)
      t.multiply(e.getItem(i).matrix);
    return t;
  }, "_consolidate"),
  kd = a(function (e) {
    var t = e.getCTM(),
      i;
    return (
      t ||
        ((i = e.style[sn]),
        (e.style[sn] = "none"),
        e.appendChild(ps),
        (t = ps.getCTM()),
        e.removeChild(ps),
        i
          ? (e.style[sn] = i)
          : e.style.removeProperty(
              sn.replace(/([A-Z])/g, "-$1").toLowerCase()
            )),
      t || Oo.clone()
    );
  }, "_getCTM"),
  g0 = a(function (e, t) {
    var i = Zl(e),
      r = e === i,
      s = i ? Cd : Pd,
      o = e.parentNode,
      l =
        o && !i && o.shadowRoot && o.shadowRoot.appendChild ? o.shadowRoot : o,
      c,
      u,
      f,
      d,
      h,
      p;
    if (e === zi) return e;
    if (
      (s.length || s.push(ya(e, 1), ya(e, 2), ya(e, 3)), (c = i ? mo : es), i)
    )
      r
        ? ((f = kd(e)), (d = -f.e / f.a), (h = -f.f / f.d), (u = Oo))
        : e.getBBox
        ? ((f = e.getBBox()),
          (u = e.transform ? e.transform.baseVal : {}),
          (u = u.numberOfItems
            ? u.numberOfItems > 1
              ? m0(u)
              : u.getItem(0).matrix
            : Oo),
          (d = u.a * f.x + u.c * f.y),
          (h = u.b * f.x + u.d * f.y))
        : ((u = new Vi()), (d = h = 0)),
        t && e.tagName.toLowerCase() === "g" && (d = h = 0),
        (r ? i : o).appendChild(c),
        c.setAttribute(
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
            (u.e + d) +
            "," +
            (u.f + h) +
            ")"
        );
    else {
      if (((d = h = 0), wd))
        for (
          u = e.offsetParent, f = e;
          f && (f = f.parentNode) && f !== u && f.parentNode;

        )
          (zi.getComputedStyle(f)[sn] + "").length > 4 &&
            ((d = f.offsetLeft), (h = f.offsetTop), (f = 0));
      if (
        ((p = zi.getComputedStyle(e)),
        p.position !== "absolute" && p.position !== "fixed")
      )
        for (u = e.offsetParent; o && o !== u; )
          (d += o.scrollLeft || 0), (h += o.scrollTop || 0), (o = o.parentNode);
      (f = c.style),
        (f.top = e.offsetTop - h + "px"),
        (f.left = e.offsetLeft - d + "px"),
        (f[sn] = p[sn]),
        (f[sl] = p[sl]),
        (f.position = p.position === "fixed" ? "fixed" : "absolute"),
        l.appendChild(c);
    }
    return c;
  }, "_placeSiblings"),
  ba = a(function (e, t, i, r, s, o, l) {
    return (e.a = t), (e.b = i), (e.c = r), (e.d = s), (e.e = o), (e.f = l), e;
  }, "_setMatrix"),
  Vi = (function () {
    function n(t, i, r, s, o, l) {
      t === void 0 && (t = 1),
        i === void 0 && (i = 0),
        r === void 0 && (r = 0),
        s === void 0 && (s = 1),
        o === void 0 && (o = 0),
        l === void 0 && (l = 0),
        ba(this, t, i, r, s, o, l);
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
          c = this.f,
          u = i * o - r * s || 1e-10;
        return ba(
          this,
          o / u,
          -r / u,
          -s / u,
          i / u,
          (s * c - o * l) / u,
          -(i * c - r * l) / u
        );
      }, "inverse")),
      (e.multiply = a(function (i) {
        var r = this.a,
          s = this.b,
          o = this.c,
          l = this.d,
          c = this.e,
          u = this.f,
          f = i.a,
          d = i.c,
          h = i.b,
          p = i.d,
          g = i.e,
          m = i.f;
        return ba(
          this,
          f * r + h * o,
          f * s + h * l,
          d * r + p * o,
          d * s + p * l,
          c + g * r + m * o,
          u + g * s + m * l
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
          c = this.e,
          u = this.f;
        return (
          r === i.a &&
          s === i.b &&
          o === i.c &&
          l === i.d &&
          c === i.e &&
          u === i.f
        );
      }, "equals")),
      (e.apply = a(function (i, r) {
        r === void 0 && (r = {});
        var s = i.x,
          o = i.y,
          l = this.a,
          c = this.b,
          u = this.c,
          f = this.d,
          d = this.e,
          h = this.f;
        return (
          (r.x = s * l + o * u + d || 0), (r.y = s * c + o * f + h || 0), r
        );
      }, "apply")),
      n
    );
  })();
function Sn(n, e, t, i) {
  if (!n || !n.parentNode || (On || jl(n)).documentElement === n)
    return new Vi();
  var r = h0(n),
    s = Zl(n),
    o = s ? Cd : Pd,
    l = g0(n, t),
    c = o[0].getBoundingClientRect(),
    u = o[1].getBoundingClientRect(),
    f = o[2].getBoundingClientRect(),
    d = l.parentNode,
    h = !i && p0(n),
    p = new Vi(
      (u.left - c.left) / 100,
      (u.top - c.top) / 100,
      (f.left - c.left) / 100,
      (f.top - c.top) / 100,
      c.left + (h ? 0 : Kl()),
      c.top + (h ? 0 : Ul())
    );
  if ((d.removeChild(l), r))
    for (c = r.length; c--; )
      (u = r[c]), (u.scaleX = u.scaleY = 0), u.renderTransform(1, u);
  return e ? p.inverse() : p;
}
a(Sn, "getGlobalMatrix");
var v0 = 1,
  Or,
  at,
  _e,
  ms,
  Xn,
  Ln,
  ol,
  mu = a(function (e, t) {
    return e.actions.forEach(function (i) {
      return i.vars[t] && i.vars[t](i);
    });
  }, "_forEachBatch"),
  al = {},
  gu = 180 / Math.PI,
  y0 = Math.PI / 180,
  Lo = {},
  vu = {},
  Wo = {},
  Ql = a(function (e) {
    return typeof e == "string" ? e.split(" ").join("").split(",") : e;
  }, "_listToArray"),
  b0 = Ql("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
  Xo = Ql(
    "transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"
  ),
  gs = a(function (e) {
    return Or(e)[0] || void 0;
  }, "_getEl"),
  lr = a(function (e) {
    return Math.round(e * 1e4) / 1e4 || 0;
  }, "_round"),
  _a = a(function (e, t, i) {
    return e.forEach(function (r) {
      return r.classList[i](t);
    });
  }, "_toggleClass"),
  yu = {
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
  Md = {
    zIndex: 1,
    simple: 1,
    clearProps: 1,
    scale: 1,
    absolute: 1,
    fitChild: 1,
    getVars: 1,
    props: 1,
  },
  Ad = a(function (e) {
    return e.replace(/([A-Z])/g, "-$1").toLowerCase();
  }, "_camelToDashed"),
  cr = a(function (e, t) {
    var i = {},
      r;
    for (r in e) t[r] || (i[r] = e[r]);
    return i;
  }, "_copy"),
  Jl = {},
  $d = a(function (e) {
    var t = (Jl[e] = Ql(e));
    return (Wo[e] = t.concat(Xo)), t;
  }, "_memoizeProps"),
  _0 = a(function (e) {
    var t = e._gsap || at.core.getCache(e);
    return t.gmCache === at.ticker.frame
      ? t.gMatrix
      : ((t.gmCache = at.ticker.frame), (t.gMatrix = Sn(e, !0, !1, !0)));
  }, "_getInverseGlobalMatrix"),
  x0 = a(function n(e, t, i) {
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
  Io = a(function (e, t, i) {
    return (
      e.forEach(function (r) {
        return (r.d = x0(i ? r.element : r.t, t));
      }),
      e.sort(function (r, s) {
        return r.d - s.d;
      }),
      e
    );
  }, "_orderByDOMDepth"),
  ks = a(function (e, t) {
    for (
      var i = e.element.style, r = (e.css = e.css || []), s = t.length, o, l;
      s--;

    )
      (o = t[s]),
        (l = i[o] || i.getPropertyValue(o)),
        r.push(l ? o : vu[o] || (vu[o] = Ad(o)), l);
    return i;
  }, "_recordInlineStyles"),
  Do = a(function (e) {
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
  bu = a(function (e, t) {
    e.forEach(function (i) {
      return (i.a.cache.uncache = 1);
    }),
      t || e.finalStates.forEach(Do);
  }, "_setFinalStates"),
  xa =
    "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(
      ","
    ),
  ec = a(function (e, t, i) {
    var r = e.element,
      s = e.width,
      o = e.height,
      l = e.uncache,
      c = e.getProp,
      u = r.style,
      f = 4,
      d,
      h,
      p;
    if ((typeof t != "object" && (t = e), _e && i !== 1))
      return (
        _e._abs.push({ t: r, b: e, a: e, sd: 0 }),
        _e._final.push(function () {
          return (e.cache.uncache = 1) && Do(e);
        }),
        r
      );
    for (
      h = c("display") === "none",
        (!e.isVisible || h) &&
          (h && (ks(e, ["display"]).display = t.display),
          (e.matrix = t.matrix),
          (e.width = s = e.width || t.width),
          (e.height = o = e.height || t.height)),
        ks(e, xa),
        p = window.getComputedStyle(r);
      f--;

    )
      u[xa[f]] = p[xa[f]];
    if (
      ((u.gridArea = "1 / 1 / 1 / 1"),
      (u.transition = "none"),
      (u.position = "absolute"),
      (u.width = s + "px"),
      (u.height = o + "px"),
      u.top || (u.top = "0px"),
      u.left || (u.left = "0px"),
      l)
    )
      d = new Wi(r);
    else if (((d = cr(e, Lo)), (d.position = "absolute"), e.simple)) {
      var g = r.getBoundingClientRect();
      d.matrix = new Vi(1, 0, 0, 1, g.left + Kl(), g.top + Ul());
    } else d.matrix = Sn(r, !1, !1, !0);
    return (d = yr(d, e, !0)), (e.x = Ln(d.x, 0.01)), (e.y = Ln(d.y, 0.01)), r;
  }, "_makeAbsolute"),
  _u = a(function (e, t) {
    return (
      t !== !0 &&
        ((t = Or(t)),
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
  Od = a(function (e) {
    return Io(e, !0).forEach(function (t) {
      return (
        (t.a.isVisible || t.b.isVisible) && ec(t.sd < 0 ? t.b : t.a, t.b, 1)
      );
    });
  }, "_makeCompsAbsolute"),
  S0 = a(function (e, t) {
    return (t && e.idLookup[ll(t).id]) || e.elementStates[0];
  }, "_findElStateInState"),
  ll = a(function (e, t, i, r) {
    return e instanceof Wi
      ? e
      : e instanceof on
      ? S0(e, r)
      : new Wi(typeof e == "string" ? gs(e) || void 0 : e, t, i);
  }, "_parseElementState"),
  T0 = a(function (e, t) {
    for (
      var i = at.getProperty(e.element, null, "native"),
        r = (e.props = {}),
        s = t.length;
      s--;

    )
      r[t[s]] = (i(t[s]) + "").trim();
    return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), e;
  }, "_recordProps"),
  Ld = a(function (e, t) {
    var i = e.style || e,
      r;
    for (r in t) i[r] = t[r];
  }, "_applyProps"),
  E0 = a(function (e) {
    var t = e.getAttribute("data-flip-id");
    return t || e.setAttribute("data-flip-id", (t = "auto-" + v0++)), t;
  }, "_getID"),
  Id = a(function (e) {
    return e.map(function (t) {
      return t.element;
    });
  }, "_elementsFromElementStates"),
  xu = a(function (e, t, i) {
    return e && t.length && i.add(e(Id(t), i, new on(t, 0, !0)), 0);
  }, "_handleCallback"),
  yr = a(function (e, t, i, r, s, o) {
    var l = e.element,
      c = e.cache,
      u = e.parent,
      f = e.x,
      d = e.y,
      h = t.width,
      p = t.height,
      g = t.scaleX,
      m = t.scaleY,
      v = t.rotation,
      b = t.bounds,
      y = o && ol && ol(l, "transform,width,height"),
      _ = e,
      S = t.matrix,
      T = S.e,
      w = S.f,
      C =
        e.bounds.width !== b.width ||
        e.bounds.height !== b.height ||
        e.scaleX !== g ||
        e.scaleY !== m ||
        e.rotation !== v,
      P = !C && e.simple && t.simple && !s,
      L,
      k,
      $,
      x,
      E,
      O,
      I;
    return (
      P || !u
        ? ((g = m = 1), (v = L = 0))
        : ((E = _0(u)),
          (O = E.clone().multiply(
            t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix
          )),
          (v = lr(Math.atan2(O.b, O.a) * gu)),
          (L = lr(Math.atan2(O.c, O.d) * gu + v) % 360),
          (g = Math.sqrt(Math.pow(O.a, 2) + Math.pow(O.b, 2))),
          (m =
            Math.sqrt(Math.pow(O.c, 2) + Math.pow(O.d, 2)) * Math.cos(L * y0)),
          s &&
            ((s = Or(s)[0]),
            (x = at.getProperty(s)),
            (I = s.getBBox && typeof s.getBBox == "function" && s.getBBox()),
            (_ = {
              scaleX: x("scaleX"),
              scaleY: x("scaleY"),
              width: I ? I.width : Math.ceil(parseFloat(x("width", "px"))),
              height: I ? I.height : parseFloat(x("height", "px")),
            })),
          (c.rotation = v + "deg"),
          (c.skewX = L + "deg")),
      i
        ? ((g *= h === _.width || !_.width ? 1 : h / _.width),
          (m *= p === _.height || !_.height ? 1 : p / _.height),
          (c.scaleX = g),
          (c.scaleY = m))
        : ((h = Ln((h * g) / _.scaleX, 0)),
          (p = Ln((p * m) / _.scaleY, 0)),
          (l.style.width = h + "px"),
          (l.style.height = p + "px")),
      r && Ld(l, t.props),
      P || !u
        ? ((f += T - e.matrix.e), (d += w - e.matrix.f))
        : C || u !== t.parent
        ? (c.renderTransform(1, c),
          (O = Sn(s || l, !1, !1, !0)),
          (k = E.apply({ x: O.e, y: O.f })),
          ($ = E.apply({ x: T, y: w })),
          (f += $.x - k.x),
          (d += $.y - k.y))
        : ((E.e = E.f = 0),
          ($ = E.apply({ x: T - e.matrix.e, y: w - e.matrix.f })),
          (f += $.x),
          (d += $.y)),
      (f = Ln(f, 0.02)),
      (d = Ln(d, 0.02)),
      o && !(o instanceof Wi)
        ? y && y.revert()
        : ((c.x = f + "px"), (c.y = d + "px"), c.renderTransform(1, c)),
      o &&
        ((o.x = f),
        (o.y = d),
        (o.rotation = v),
        (o.skewX = L),
        i ? ((o.scaleX = g), (o.scaleY = m)) : ((o.width = h), (o.height = p))),
      o || c
    );
  }, "_fit"),
  Sa = a(function (e, t) {
    return e instanceof on ? e : new on(e, t);
  }, "_parseState"),
  Dd = a(function (e, t, i) {
    var r = e.idLookup[i],
      s = e.alt[i];
    return s.isVisible &&
      (!(t.getElementState(s.element) || s).isVisible || !r.isVisible)
      ? s
      : r;
  }, "_getChangingElState"),
  Ta = [],
  Ea = "width,height,overflowX,overflowY".split(","),
  Zs,
  Su = a(function (e) {
    if (e !== Zs) {
      var t = Xn.style,
        i = Xn.clientWidth === window.outerWidth,
        r = Xn.clientHeight === window.outerHeight,
        s = 4;
      if (e && (i || r)) {
        for (; s--; ) Ta[s] = t[Ea[s]];
        i && ((t.width = Xn.clientWidth + "px"), (t.overflowY = "hidden")),
          r && ((t.height = Xn.clientHeight + "px"), (t.overflowX = "hidden")),
          (Zs = e);
      } else if (Zs) {
        for (; s--; ) Ta[s] ? (t[Ea[s]] = Ta[s]) : t.removeProperty(Ad(Ea[s]));
        Zs = e;
      }
    }
  }, "_lockBodyScroll"),
  wa = a(function (e, t, i, r) {
    e instanceof on && t instanceof on, (i = i || {});
    var s = i,
      o = s.clearProps,
      l = s.onEnter,
      c = s.onLeave,
      u = s.absolute,
      f = s.absoluteOnLeave,
      d = s.custom,
      h = s.delay,
      p = s.paused,
      g = s.repeat,
      m = s.repeatDelay,
      v = s.yoyo,
      b = s.toggleClass,
      y = s.nested,
      _ = s.zIndex,
      S = s.scale,
      T = s.fade,
      w = s.stagger,
      C = s.spin,
      P = s.prune,
      L = ("props" in i ? i : e).props,
      k = cr(i, yu),
      $ = at.timeline({
        delay: h,
        paused: p,
        repeat: g,
        repeatDelay: m,
        yoyo: v,
        data: "isFlip",
      }),
      x = k,
      E = [],
      O = [],
      I = [],
      M = [],
      D = C === !0 ? 1 : C || 0,
      z =
        typeof C == "function"
          ? C
          : function () {
              return D;
            },
      B = e.interrupted || t.interrupted,
      A = $[r !== 1 ? "to" : "from"],
      V,
      G,
      le,
      ie,
      Z,
      Q,
      de,
      me,
      Ee,
      $e,
      he,
      we,
      X,
      ne;
    for (G in t.idLookup)
      (he = t.alt[G] ? Dd(t, e, G) : t.idLookup[G]),
        (Z = he.element),
        ($e = e.idLookup[G]),
        e.alt[G] &&
          Z === $e.element &&
          (e.alt[G].isVisible || !he.isVisible) &&
          ($e = e.alt[G]),
        $e
          ? ((Q = {
              t: Z,
              b: $e,
              a: he,
              sd: $e.element === Z ? 0 : he.isVisible ? 1 : -1,
            }),
            I.push(Q),
            Q.sd &&
              (Q.sd < 0 && ((Q.b = he), (Q.a = $e)),
              B && ks(Q.b, L ? Wo[L] : Xo),
              T &&
                I.push(
                  (Q.swap = {
                    t: $e.element,
                    b: Q.b,
                    a: Q.a,
                    sd: -Q.sd,
                    swap: Q,
                  })
                )),
            (Z._flip = $e.element._flip = _e ? _e.timeline : $))
          : he.isVisible &&
            (I.push({
              t: Z,
              b: cr(he, { isVisible: 1 }),
              a: he,
              sd: 0,
              entering: 1,
            }),
            (Z._flip = _e ? _e.timeline : $));
    if (
      (L &&
        (Jl[L] || $d(L)).forEach(function (R) {
          return (k[R] = function (Ie) {
            return I[Ie].a.props[R];
          });
        }),
      (I.finalStates = Ee = []),
      (we = a(function () {
        for (Io(I), Su(!0), ie = 0; ie < I.length; ie++)
          (Q = I[ie]),
            (X = Q.a),
            (ne = Q.b),
            P && !X.isDifferent(ne) && !Q.entering
              ? I.splice(ie--, 1)
              : ((Z = Q.t),
                y && !(Q.sd < 0) && ie && (X.matrix = Sn(Z, !1, !1, !0)),
                ne.isVisible && X.isVisible
                  ? (Q.sd < 0
                      ? ((de = new Wi(Z, L, e.simple)),
                        yr(de, X, S, 0, 0, de),
                        (de.matrix = Sn(Z, !1, !1, !0)),
                        (de.css = Q.b.css),
                        (Q.a = X = de),
                        T && (Z.style.opacity = B ? ne.opacity : X.opacity),
                        w && M.push(Z))
                      : Q.sd > 0 &&
                        T &&
                        (Z.style.opacity = B ? X.opacity - ne.opacity : "0"),
                    yr(X, ne, S, L))
                  : ne.isVisible !== X.isVisible &&
                    (ne.isVisible
                      ? X.isVisible ||
                        ((ne.css = X.css),
                        O.push(ne),
                        I.splice(ie--, 1),
                        u && y && yr(X, ne, S, L))
                      : (X.isVisible && E.push(X), I.splice(ie--, 1))),
                S ||
                  ((Z.style.maxWidth = Math.max(X.width, ne.width) + "px"),
                  (Z.style.maxHeight = Math.max(X.height, ne.height) + "px"),
                  (Z.style.minWidth = Math.min(X.width, ne.width) + "px"),
                  (Z.style.minHeight = Math.min(X.height, ne.height) + "px")),
                y && b && Z.classList.add(b)),
            Ee.push(X);
        var Ie;
        if (
          (b &&
            ((Ie = Ee.map(function (W) {
              return W.element;
            })),
            y &&
              Ie.forEach(function (W) {
                return W.classList.remove(b);
              })),
          Su(!1),
          S
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
            return I[W].a.rotation + (C ? z(W, me[W], me) * 360 : 0);
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
          T &&
            (k.opacity = function (W) {
              return I[W].sd < 0 ? 0 : I[W].sd > 0 ? I[W].a.opacity : "+=0";
            }),
          M.length)
        ) {
          w = at.utils.distribute(w);
          var Kt = me.slice(M.length);
          k.stagger = function (W, qt) {
            return w(~M.indexOf(qt) ? me.indexOf(I[W].swap.t) : W, qt, Kt);
          };
        }
        if (
          (b0.forEach(function (W) {
            return i[W] && $.eventCallback(W, i[W], i[W + "Params"]);
          }),
          d && me.length)
        ) {
          (x = cr(k, yu)),
            "scale" in d && ((d.scaleX = d.scaleY = d.scale), delete d.scale);
          for (G in d)
            (V = cr(d[G], Md)),
              (V[G] = k[G]),
              !("duration" in V) &&
                "duration" in k &&
                (V.duration = k.duration),
              (V.stagger = k.stagger),
              A.call($, me, V, 0),
              delete x[G];
        }
        (me.length || O.length || E.length) &&
          (b &&
            $.add(function () {
              return _a(Ie, b, $._zTime < 0 ? "remove" : "add");
            }, 0) &&
            !p &&
            _a(Ie, b, "add"),
          me.length && A.call($, me, x, 0)),
          xu(l, E, $),
          xu(c, O, $);
        var Ft = _e && _e.timeline;
        Ft &&
          (Ft.add($, 0),
          _e._final.push(function () {
            return bu(I, !o);
          })),
          (le = $.duration()),
          $.call(function () {
            var W = $.time() >= le;
            W && !Ft && bu(I, !o), b && _a(Ie, b, W ? "remove" : "add");
          });
      }, "run")),
      f &&
        (u = I.filter(function (R) {
          return !R.sd && !R.a.isVisible && R.b.isVisible;
        }).map(function (R) {
          return R.a.element;
        })),
      _e)
    ) {
      var Oe;
      u && (Oe = _e._abs).push.apply(Oe, _u(I, u)), _e._run.push(we);
    } else u && Od(_u(I, u)), we();
    var Le = _e ? _e.timeline : $;
    return (
      (Le.revert = function () {
        return tc(Le, 1, 1);
      }),
      Le
    );
  }, "_fromTo"),
  w0 = a(function n(e) {
    e.vars.onInterrupt &&
      e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []),
      e.getChildren(!0, !1, !0).forEach(n);
  }, "_interrupt"),
  tc = a(function (e, t, i) {
    if (e && e.progress() < 1 && (!e.paused() || i))
      return t && (w0(e), t < 2 && e.progress(1), e.kill()), !0;
  }, "_killFlip"),
  Qs = a(function (e) {
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
  on = (function () {
    function n(t, i, r) {
      if (((this.props = i && i.props), (this.simple = !!(i && i.simple)), r))
        (this.targets = Id(t)), (this.elementStates = t), Qs(this);
      else {
        this.targets = Or(t);
        var s = i && (i.kill === !1 || (i.batch && !i.kill));
        _e && !s && _e._kill.push(this), this.update(s || !!_e);
      }
    }
    a(n, "FlipState");
    var e = n.prototype;
    return (
      (e.update = a(function (i) {
        var r = this;
        return (
          (this.elementStates = this.targets.map(function (s) {
            return new Wi(s, r.props, r.simple);
          })),
          Qs(this),
          this.interrupt(i),
          this.recordInlineStyles(),
          this
        );
      }, "update")),
      (e.clear = a(function () {
        return (
          (this.targets.length = this.elementStates.length = 0), Qs(this), this
        );
      }, "clear")),
      (e.fit = a(function (i, r, s) {
        for (
          var o = Io(this.elementStates.slice(0), !1, !0),
            l = (i || this).idLookup,
            c = 0,
            u,
            f;
          c < o.length;
          c++
        )
          (u = o[c]),
            s && (u.matrix = Sn(u.element, !1, !1, !0)),
            (f = l[u.id]),
            f && yr(u, f, r, !0, 0, u),
            (u.matrix = Sn(u.element, !1, !1, !0));
        return this;
      }, "fit")),
      (e.getProperty = a(function (i, r) {
        var s = this.getElementState(i) || Lo;
        return (r in s ? s : s.props || Lo)[r];
      }, "getProperty")),
      (e.add = a(function (i) {
        for (
          var r = i.targets.length, s = this.idLookup, o = this.alt, l, c, u;
          r--;

        )
          (c = i.elementStates[r]),
            (u = s[c.id]),
            u &&
            (c.element === u.element ||
              (o[c.id] && o[c.id].element === c.element))
              ? ((l = this.elementStates.indexOf(
                  c.element === u.element ? u : o[c.id]
                )),
                this.targets.splice(l, 1, i.targets[r]),
                this.elementStates.splice(l, 1, c))
              : (this.targets.push(i.targets[r]), this.elementStates.push(c));
        return (
          i.interrupted && (this.interrupted = !0),
          i.simple || (this.simple = !1),
          Qs(this),
          this
        );
      }, "add")),
      (e.compare = a(function (i) {
        var r = i.idLookup,
          s = this.idLookup,
          o = [],
          l = [],
          c = [],
          u = [],
          f = [],
          d = i.alt,
          h = this.alt,
          p = a(function (P, L, k) {
            return (
              (P.isVisible !== L.isVisible
                ? P.isVisible
                  ? c
                  : u
                : P.isVisible
                ? l
                : o
              ).push(k) && f.push(k)
            );
          }, "place"),
          g = a(function (P, L, k) {
            return f.indexOf(k) < 0 && p(P, L, k);
          }, "placeIfDoesNotExist"),
          m,
          v,
          b,
          y,
          _,
          S,
          T,
          w;
        for (b in r)
          (_ = d[b]),
            (S = h[b]),
            (m = _ ? Dd(i, this, b) : r[b]),
            (y = m.element),
            (v = s[b]),
            S
              ? ((w = v.isVisible || (!S.isVisible && y === v.element) ? v : S),
                (T =
                  _ && !m.isVisible && !_.isVisible && w.element === _.element
                    ? _
                    : m),
                T.isVisible && w.isVisible && T.element !== w.element
                  ? ((T.isDifferent(w) ? l : o).push(T.element, w.element),
                    f.push(T.element, w.element))
                  : p(T, w, T.element),
                _ && T.element === _.element && (_ = r[b]),
                g(T.element !== v.element && _ ? _ : T, v, v.element),
                g(_ && _.element === S.element ? _ : T, S, S.element),
                _ && g(_, S.element === _.element ? S : v, _.element))
              : (v ? (v.isDifferent(m) ? p(m, v, y) : o.push(y)) : c.push(y),
                _ && g(_, v, _.element));
        for (b in s)
          r[b] || (u.push(s[b].element), h[b] && u.push(h[b].element));
        return { changed: l, unchanged: o, enter: c, leave: u };
      }, "compare")),
      (e.recordInlineStyles = a(function () {
        for (var i = Wo[this.props] || Xo, r = this.elementStates.length; r--; )
          ks(this.elementStates[r], i);
      }, "recordInlineStyles")),
      (e.interrupt = a(function (i) {
        var r = this,
          s = [];
        this.targets.forEach(function (o) {
          var l = o._flip,
            c = tc(l, i ? 0 : 1);
          i &&
            c &&
            s.indexOf(l) < 0 &&
            l.add(function () {
              return r.updateVisibility();
            }),
            c && s.push(l);
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
        return this.elementStates[this.targets.indexOf(gs(i))];
      }, "getElementState")),
      (e.makeAbsolute = a(function () {
        return Io(this.elementStates.slice(0), !0, !0).map(ec);
      }, "makeAbsolute")),
      n
    );
  })(),
  Wi = (function () {
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
          l = at.getProperty(o),
          c = at.core.getCache(o),
          u = o.getBoundingClientRect(),
          f =
            o.getBBox &&
            typeof o.getBBox == "function" &&
            o.nodeName.toLowerCase() !== "svg" &&
            o.getBBox(),
          d = r
            ? new Vi(1, 0, 0, 1, u.left + Kl(), u.top + Ul())
            : Sn(o, !1, !1, !0);
        (c.uncache = 1),
          (s.getProp = l),
          (s.element = o),
          (s.id = E0(o)),
          (s.matrix = d),
          (s.cache = c),
          (s.bounds = u),
          (s.isVisible = !!(u.width || u.height || u.left || u.top)),
          (s.display = l("display")),
          (s.position = l("position")),
          (s.parent = o.parentNode),
          (s.x = l("x")),
          (s.y = l("y")),
          (s.scaleX = c.scaleX),
          (s.scaleY = c.scaleY),
          (s.rotation = l("rotation")),
          (s.skewX = l("skewX")),
          (s.opacity = l("opacity")),
          (s.width = f ? f.width : Ln(l("width", "px"), 0.04)),
          (s.height = f ? f.height : Ln(l("height", "px"), 0.04)),
          i && T0(s, Jl[i] || $d(i)),
          (s.ctm =
            o.getCTM && o.nodeName.toLowerCase() === "svg" && kd(o).inverse()),
          (s.simple =
            r || (lr(d.a) === 1 && !lr(d.b) && !lr(d.c) && lr(d.d) === 1)),
          (s.uncache = 0);
      }, "update")),
      n
    );
  })(),
  C0 = (function () {
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
  P0 = (function () {
    function n(t) {
      (this.id = t),
        (this.actions = []),
        (this._kill = []),
        (this._final = []),
        (this._abs = []),
        (this._run = []),
        (this.data = {}),
        (this.state = new on()),
        (this.timeline = at.timeline());
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
          : ((r = new C0(typeof i == "function" ? { animate: i } : i, this)),
            this.actions.push(r),
            r);
      }, "add")),
      (e.remove = a(function (i) {
        var r = this.actions.indexOf(i);
        return r >= 0 && this.actions.splice(r, 1), this;
      }, "remove")),
      (e.getState = a(function (i) {
        var r = this,
          s = _e,
          o = ms;
        return (
          (_e = this),
          this.state.clear(),
          (this._kill.length = 0),
          this.actions.forEach(function (l) {
            l.vars.getState &&
              ((l.states.length = 0), (ms = l), (l.state = l.vars.getState(l))),
              i &&
                l.states.forEach(function (c) {
                  return r.state.add(c);
                });
          }),
          (ms = o),
          (_e = s),
          this.killConflicts(),
          this
        );
      }, "getState")),
      (e.animate = a(function () {
        var i = this,
          r = _e,
          s = this.timeline,
          o = this.actions.length,
          l,
          c;
        for (
          _e = this,
            s.clear(),
            this._abs.length = this._final.length = this._run.length = 0,
            this.actions.forEach(function (u) {
              u.vars.animate && u.vars.animate(u);
              var f = u.vars.onEnter,
                d = u.vars.onLeave,
                h = u.targets,
                p,
                g;
              h &&
                h.length &&
                (f || d) &&
                ((p = new on()),
                u.states.forEach(function (m) {
                  return p.add(m);
                }),
                (g = p.compare(Lr.getState(h))),
                g.enter.length && f && f(g.enter),
                g.leave.length && d && d(g.leave));
            }),
            Od(this._abs),
            this._run.forEach(function (u) {
              return u();
            }),
            c = s.duration(),
            l = this._final.slice(0),
            s.add(function () {
              c <= s.time() &&
                (l.forEach(function (u) {
                  return u();
                }),
                mu(i, "onComplete"));
            }),
            _e = r;
          o--;

        )
          this.actions[o].vars.once && this.actions[o].kill();
        return mu(this, "onStart"), s.restart(), this;
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
                l = a(function c(u) {
                  u && (s.targets = u),
                    (o = r.indexOf(c)),
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
          this !== _e &&
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
        (this._killed = 1), this.clear(), delete al[this.id];
      }, "kill")),
      n
    );
  })(),
  Lr = (function () {
    function n() {}
    return (
      a(n, "Flip"),
      (n.getState = a(function (t, i) {
        var r = Sa(t, i);
        return (
          ms && ms.states.push(r),
          i && i.batch && n.batch(i.batch).state.add(r),
          r
        );
      }, "getState")),
      (n.from = a(function (t, i) {
        return (
          (i = i || {}),
          "clearProps" in i || (i.clearProps = !0),
          wa(
            t,
            Sa(i.targets || t.targets, {
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
        return wa(
          t,
          Sa(i.targets || t.targets, {
            props: i.props || t.props,
            simple: i.simple,
            kill: !!i.kill,
          }),
          i,
          1
        );
      }, "to")),
      (n.fromTo = a(function (t, i, r) {
        return wa(t, i, r);
      }, "fromTo")),
      (n.fit = a(function (t, i, r) {
        var s = r ? cr(r, Md) : {},
          o = r || s,
          l = o.absolute,
          c = o.scale,
          u = o.getVars,
          f = o.props,
          d = o.runBackwards,
          h = o.onComplete,
          p = o.simple,
          g = r && r.fitChild && gs(r.fitChild),
          m = ll(i, f, p, t),
          v = ll(t, 0, p, m),
          b = f ? Wo[f] : Xo,
          y = at.context();
        return (
          f && Ld(s, m.props),
          ks(v, b),
          d &&
            ("immediateRender" in s || (s.immediateRender = !0),
            (s.onComplete = function () {
              Do(v), h && h.apply(this, arguments);
            })),
          l && ec(v, m),
          (s = yr(v, m, c || g, !s.duration && f, g, s.duration || u ? s : 0)),
          typeof r == "object" && "zIndex" in r && (s.zIndex = r.zIndex),
          y &&
            !u &&
            y.add(function () {
              return function () {
                return Do(v);
              };
            }),
          u ? s : s.duration ? at.to(v.element, s) : null
        );
      }, "fit")),
      (n.makeAbsolute = a(function (t, i) {
        return (t instanceof on ? t : new on(t, i)).makeAbsolute();
      }, "makeAbsolute")),
      (n.batch = a(function (t) {
        return t || (t = "default"), al[t] || (al[t] = new P0(t));
      }, "batch")),
      (n.killFlipsOf = a(function (t, i) {
        (t instanceof on ? t.targets : Or(t)).forEach(function (r) {
          return r && tc(r._flip, i !== !1 ? 1 : 2);
        });
      }, "killFlipsOf")),
      (n.isFlipping = a(function (t) {
        var i = n.getByTarget(t);
        return !!i && i.isActive();
      }, "isFlipping")),
      (n.getByTarget = a(function (t) {
        return (gs(t) || Lo)._flip;
      }, "getByTarget")),
      (n.getElementState = a(function (t, i) {
        return new Wi(gs(t), i);
      }, "getElementState")),
      (n.convertCoordinates = a(function (t, i, r) {
        var s = Sn(i, !0, !0).multiply(Sn(t));
        return r ? s.apply(r) : s;
      }, "convertCoordinates")),
      (n.register = a(function (t) {
        if (((Xn = typeof document < "u" && document.body), Xn)) {
          (at = t),
            jl(Xn),
            (Or = at.utils.toArray),
            (ol = at.core.getStyleSaver);
          var i = at.utils.snap(0.1);
          Ln = a(function (s, o) {
            return i(parseFloat(s) + o);
          }, "_closestTenth");
        }
      }, "register")),
      n
    );
  })();
Lr.version = "3.13.0";
typeof window < "u" && window.gsap && window.gsap.registerPlugin(Lr);
N.registerPlugin(Lr);
const k0 = a(() => {
    document.querySelector(".seo_header_flip_wrap");
    const n = document.querySelector(".seo_header_title_col"),
      e = document.querySelector(".seo_header_title_text"),
      t = document.querySelector(".seo_header_empty_col"),
      i = document.querySelector(".seo_header_service_col"),
      r = document.querySelector(".seo_header_service_component"),
      s = document.querySelector(".seo_heading_text"),
      o = document.querySelector(".seo_header_service_button"),
      l = document.querySelector(".seo_service_list_wrap"),
      c = document.querySelector(".project_card_tags_seo");
    function u() {
      const f = Lr.getState([n, e, t, i, r, s, o, l, c], {
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
        c.classList.toggle("active"),
        s.classList.toggle("active"),
        r.classList.toggle("active"),
        o.classList.toggle("active"),
        Lr.from(f, { duration: 1.6, ease: "expo.inOut", absoluteOnLeave: !0 });
    }
    a(u, "flipService"),
      o.addEventListener("click", u),
      o.addEventListener("click", () => {});
  }, "seoFlip"),
  M0 = a(() => {
    k0();
  }, "initSeoFlip"),
  A0 = a(() => {
    d0(), li(), Wl(), ci(), M0(), qu(), Yi().add(() => ui(), "-=1");
  }, "seoInit");
N.registerPlugin(Te);
const $0 = a((n) => {
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
      }, "cleanup"),
      o = a(async () => {
        const c = document.querySelector("[work-cms-hero='text']"),
          u = document.querySelector("[work-cms-hero='back-btn']"),
          f = document.querySelector("[work-cms-hero='line']"),
          d = document.querySelector("[work-cms-hero='info']"),
          h = document.querySelector("[work-cms-hero='info-title']"),
          p = document.querySelector("[work-cms-hero='info-text']"),
          g = document.querySelector("[work-cms-hero='info-meta']"),
          m = document.querySelectorAll("[work-cms-hero='tag']"),
          v = document.querySelectorAll("[work-cms-hero='visual']"),
          b = document.querySelector("[work-cms-hero='bg'] img");
        c &&
          Te.create(c, {
            type: "chars, lines, words",
            autoSplit: !0,
            mask: "lines",
            linesClass: "work-cms-hero-text-line",
            tag: "div",
            onSplit(y) {
              Te.create(h, {
                type: "lines",
                autoSplit: !0,
                mask: "lines",
                linesClass: "work-cms-info-title-line",
                tag: "div",
                onSplit(_) {
                  Te.create(p, {
                    type: "lines",
                    autoSplit: !0,
                    mask: "lines",
                    linesClass: "work-cms-info-text-line",
                    tag: "div",
                    onSplit(S) {
                      Te.create(g, {
                        type: "lines",
                        autoSplit: !0,
                        mask: "lines",
                        linesClass: "work-cms-info-meta-line",
                        tag: "div",
                        onSplit(T) {
                          t.push(y, _, S, T),
                            y.lines.forEach((C) => {
                              const P = document.createElement("div");
                              P.classList.add("move-text-main"),
                                (P.style.overflow = "clip"),
                                (P.style.position = "relative"),
                                C.parentNode.insertBefore(P, C),
                                P.appendChild(C);
                            }),
                            _.lines.forEach((C) => {
                              const P = document.createElement("div");
                              P.classList.add("move-text-title"),
                                (P.style.overflow = "clip"),
                                (P.style.position = "relative"),
                                C.parentNode.insertBefore(P, C),
                                P.appendChild(C);
                            }),
                            S.lines.forEach((C) => {
                              const P = document.createElement("div");
                              P.classList.add("move-text-info"),
                                (P.style.overflow = "clip"),
                                (P.style.position = "relative"),
                                C.parentNode.insertBefore(P, C),
                                P.appendChild(C);
                            }),
                            T.lines.forEach((C) => {
                              const P = document.createElement("div");
                              P.classList.add("move-text-meta"),
                                (P.style.overflow = "clip"),
                                (P.style.position = "relative"),
                                C.parentNode.insertBefore(P, C),
                                P.appendChild(C);
                            });
                          const w = a((C, P) => {
                            const L = C.querySelectorAll("span");
                            L.length &&
                              L.forEach((k) => {
                                const $ = document.createElement("div");
                                ($.style.overflow = "clip"),
                                  ($.style.position = "relative"),
                                  ($.style.paddingBottom = "3px"),
                                  k.parentNode.insertBefore($, k),
                                  $.appendChild(k);
                              });
                          }, "wrapSpans");
                          return (
                            w(c),
                            w(h),
                            w(p),
                            w(g),
                            (i = N.timeline()),
                            N.set(y.chars, { opacity: 0, yPercent: 100 }),
                            N.set(u, { opacity: 0, yPercent: 100 }),
                            N.set(m, {
                              opacity: 0,
                              y: 50,
                              scale: 0.4,
                              transformOrigin: "center right",
                            }),
                            N.set(f, {
                              opacity: 0,
                              scaleX: 0,
                              transformOrigin: "center left",
                            }),
                            N.set(d, { opacity: 0, y: 50 }),
                            N.set(".move-text-title", {
                              opacity: 0,
                              yPercent: 100,
                            }),
                            N.set(".move-text-info", {
                              opacity: 0,
                              yPercent: 100,
                            }),
                            N.set(".move-text-meta", {
                              opacity: 0,
                              yPercent: 100,
                            }),
                            N.set(v, { y: 100, opacity: 0 }),
                            N.set(b, { scale: 1.4 }),
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
                              m,
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
                            i.to(f, { opacity: 1, duration: 0 }, "<"),
                            i.to(
                              f,
                              { scaleX: 1, duration: 2.4, ease: "expo.inOut" },
                              "-=2"
                            ),
                            i.to(
                              d,
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
  O0 = a(() => {
    li(), ci();
    const n = Yi();
    n.add(() => ui(), "-=1.4"), n.add(() => $0(), "-=1.4");
  }, "workCmsInit"),
  L0 = {
    home: au,
    about: zv,
    work: t0,
    contact: Zv,
    career: Jv,
    "extra-page": au,
    service: u0,
    work_cms: O0,
    seo: A0,
  },
  I0 = a(() => {
    const n = document.querySelector("[page-route]");
    if (!n) return;
    const e = n.getAttribute("page-route"),
      t = L0[e];
    t && t();
  }, "PageRouter"),
  D0 = a(() => {
    const n = document.querySelector("[nav-menu='trigger']"),
      e = document.querySelector("[nav-menu='component']"),
      t = document.querySelector("[nav-menu='contain']"),
      i = document.querySelector("[main-nav='brand']"),
      r = document.querySelector("[nav-menu='brand']"),
      s = document.querySelectorAll("[nav-menu='link-item']"),
      o = document.querySelector("[nav-menu='info-text']"),
      l = document.querySelectorAll("[nav-menu='close']"),
      c = document.querySelectorAll("[nav-menu='social-link']");
    if (!n || !e || !t || !r || !s || !o || !c) return;
    N.set(e, { clipPath: "inset(0% 0% 100% 0%)" }),
      N.set([r, s, c], { y: "100%", opacity: 0 }),
      N.set(o, { y: "20%", opacity: 0 });
    const u = N.timeline({ paused: !0 }),
      f = N.timeline({ paused: !0 });
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
        c,
        { y: "0%", duration: 1.2, opacity: 1, ease: "expo.out", stagger: 0.1 },
        "-=1"
      ),
      f
        .to([r, s], {
          y: "100%",
          duration: 0.6,
          ease: "expo.in",
          opacity: 0,
          stagger: 0.05,
        })
        .to(
          [o, c],
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
        const g =
          n.getAttribute("hamburger-state") === "open" ? "closed" : "open";
        n.setAttribute("hamburger-state", g),
          g === "open" ? (f.pause(), u.play(0)) : (u.pause(), f.play(0));
      }),
      l.forEach((p) => {
        p.addEventListener("click", () => {
          n.setAttribute("hamburger-state", "closed"), f.play(0);
        });
      });
    const d = 767;
    function h() {
      return window.innerWidth <= d;
    }
    a(h, "isMobile"),
      window.addEventListener("resize", () => {
        n.getAttribute("hamburger-state") === "open" &&
          !h() &&
          (n.setAttribute("hamburger-state", "closed"), f.play(0));
      });
  }, "navMenu"),
  z0 = a(() => {
    D0();
  }, "initNavMenu"),
  oc = class oc {
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
  };
a(oc, "Noise");
let cl = oc;
const Tu = a((n) => {
    const e = document.querySelector(".page_overlay"),
      t = document.querySelector("[page-overlay='text-wrap']"),
      i = document.querySelectorAll("[page-load='component']"),
      r = document.querySelectorAll("[page-load='wrap']"),
      s = document.querySelectorAll("[page-load='gradient']"),
      o = document.querySelectorAll("[page-load='text']");
    e && N.set(e, { clipPath: "inset(100% 0% 0% 0%)", pointerEvents: "none" }),
      t && N.set(t, { opacity: 0, y: 50, willChange: "transform, opacity" });
    const l = N.timeline();
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
              s.length && N.set(s, { opacity: 1 }),
                r.length && N.set(r, { opacity: 0 }),
                o.length && N.set(o, { opacity: 0 }),
                i.length &&
                  N.set(i, {
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
  R0 = a(() => {
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
            l = document.createElement("link");
          (l.rel = "prefetch"),
            (l.href = o),
            document.head.appendChild(l),
            await Tu(),
            (window.location.href = o);
        });
    }),
      window.addEventListener("popstate", async () => {
        await Tu(), window.location.reload();
      });
  }, "pageToPage");
N.registerPlugin(Te, j);
const N0 = {
    lines: { duration: 1.8, stagger: 0.08 },
    words: { duration: 0.6, stagger: 0.06 },
    chars: { duration: 0.4, stagger: 0.01 },
  },
  B0 = a(() => {
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
        document.querySelectorAll("[split-text]").forEach((o) => {
          N.set(o, { autoAlpha: 1 });
          const l = o.getAttribute("split-text") || "lines",
            c =
              l === "lines"
                ? ["lines"]
                : l === "words"
                ? ["lines", "words"]
                : ["lines", "words", "chars"],
            u = Te.create(o, {
              type: c.join(", "),
              mask: "lines",
              autoSplit: !0,
              linesClass: "line",
              wordsClass: "word",
              charsClass: "letter",
              onSplit: a(function (f) {
                const d = f[l],
                  h = N0[l];
                return N.from(d, {
                  yPercent: 110,
                  duration: h.duration,
                  stagger: h.stagger,
                  ease: "expo.out",
                  scrollTrigger: {
                    trigger: o,
                    start: "clamp(top 80%)",
                    once: !0,
                  },
                });
              }, "onSplit"),
            });
          e.push(u);
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
  F0 = a(() => {
    N.set(".cursor", { xPercent: -50, yPercent: -50 });
    let n = N.quickTo(".cursor", "x", { duration: 0.6, ease: "power3" }),
      e = N.quickTo(".cursor", "y", { duration: 0.6, ease: "power3" });
    window.addEventListener("mousemove", (t) => {
      n(t.clientX), e(t.clientY);
    });
  }, "customCursor"),
  q0 = a(() => {
    F0();
  }, "initCustomCursor"),
  H0 = a(() => {
    z0(), new cl(), vd(), R0(), B0(), q0();
  }, "globalInit");
function V0(n, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(
        n,
        typeof (r = (function (s, o) {
          if (typeof s != "object" || s === null) return s;
          var l = s[Symbol.toPrimitive];
          if (l !== void 0) {
            var c = l.call(s, "string");
            if (typeof c != "object") return c;
            throw new TypeError("@@toPrimitive must return a primitive value.");
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
a(V0, "t");
function nc(n, e, t) {
  return (
    e && V0(n.prototype, e),
    Object.defineProperty(n, "prototype", { writable: !1 }),
    n
  );
}
a(nc, "n");
function vn() {
  return (
    (vn = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
          }
          return n;
        }),
    vn.apply(this, arguments)
  );
}
a(vn, "r");
function Yo(n, e) {
  (n.prototype = Object.create(e.prototype)),
    (n.prototype.constructor = n),
    Ms(n, e);
}
a(Yo, "i");
function ul(n) {
  return (
    (ul = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    ul(n)
  );
}
a(ul, "e");
function Ms(n, e) {
  return (
    (Ms = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, i) {
          return (t.__proto__ = i), t;
        }),
    Ms(n, e)
  );
}
a(Ms, "o");
function W0() {
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
a(W0, "u");
function fl(n, e, t) {
  return (
    (fl = W0()
      ? Reflect.construct.bind()
      : function (i, r, s) {
          var o = [null];
          o.push.apply(o, r);
          var l = new (Function.bind.apply(i, o))();
          return s && Ms(l, s.prototype), l;
        }),
    fl.apply(null, arguments)
  );
}
a(fl, "s");
function dl(n) {
  var e = typeof Map == "function" ? new Map() : void 0;
  return (
    (dl = a(function (t) {
      if (
        t === null ||
        Function.toString.call(t).indexOf("[native code]") === -1
      )
        return t;
      if (typeof t != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (e !== void 0) {
        if (e.has(t)) return e.get(t);
        e.set(t, i);
      }
      function i() {
        return fl(t, arguments, ul(this).constructor);
      }
      return (
        a(i, "r"),
        (i.prototype = Object.create(t.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Ms(i, t)
      );
    }, "f")),
    dl(n)
  );
}
a(dl, "f");
function X0(n) {
  if (n === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return n;
}
a(X0, "c");
var Yn,
  Y0 = a(function () {
    (this.before = void 0),
      (this.beforeLeave = void 0),
      (this.leave = void 0),
      (this.afterLeave = void 0),
      (this.beforeEnter = void 0),
      (this.enter = void 0),
      (this.afterEnter = void 0),
      (this.after = void 0);
  }, "h");
(function (n) {
  (n[(n.off = 0)] = "off"),
    (n[(n.error = 1)] = "error"),
    (n[(n.warning = 2)] = "warning"),
    (n[(n.info = 3)] = "info"),
    (n[(n.debug = 4)] = "debug");
})(Yn || (Yn = {}));
var Eu = Yn.off,
  Ci = (function () {
    function n(t) {
      (this.t = void 0), (this.t = t);
    }
    a(n, "t"),
      (n.getLevel = function () {
        return Eu;
      }),
      (n.setLevel = function (t) {
        return (Eu = Yn[t]);
      });
    var e = n.prototype;
    return (
      (e.error = function () {
        this.i(console.error, Yn.error, [].slice.call(arguments));
      }),
      (e.warn = function () {
        this.i(console.warn, Yn.warning, [].slice.call(arguments));
      }),
      (e.info = function () {
        this.i(console.info, Yn.info, [].slice.call(arguments));
      }),
      (e.debug = function () {
        this.i(console.log, Yn.debug, [].slice.call(arguments));
      }),
      (e.i = function (t, i, r) {
        i <= n.getLevel() && t.apply(console, ["[" + this.t + "] "].concat(r));
      }),
      n
    );
  })();
function nr(n) {
  return n.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
a(nr, "l");
function wu(n) {
  return n && n.sensitive ? "" : "i";
}
a(wu, "p");
var _n = {
    container: "container",
    history: "history",
    namespace: "namespace",
    prefix: "data-barba",
    prevent: "prevent",
    wrapper: "wrapper",
  },
  Pi = new ((function () {
    function n() {
      (this.o = _n),
        (this.u = void 0),
        (this.h = { after: null, before: null, parent: null });
    }
    a(n, "t");
    var e = n.prototype;
    return (
      (e.toString = function (t) {
        return t.outerHTML;
      }),
      (e.toDocument = function (t) {
        return (
          this.u || (this.u = new DOMParser()),
          this.u.parseFromString(t, "text/html")
        );
      }),
      (e.toElement = function (t) {
        var i = document.createElement("div");
        return (i.innerHTML = t), i;
      }),
      (e.getHtml = function (t) {
        return t === void 0 && (t = document), this.toString(t.documentElement);
      }),
      (e.getWrapper = function (t) {
        return (
          t === void 0 && (t = document),
          t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
        );
      }),
      (e.getContainer = function (t) {
        return (
          t === void 0 && (t = document),
          t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
        );
      }),
      (e.removeContainer = function (t) {
        document.body.contains(t) && (this.v(t), t.parentNode.removeChild(t));
      }),
      (e.addContainer = function (t, i) {
        var r = this.getContainer() || this.h.before;
        r
          ? this.l(t, r)
          : this.h.after
          ? this.h.after.parentNode.insertBefore(t, this.h.after)
          : this.h.parent
          ? this.h.parent.appendChild(t)
          : i.appendChild(t);
      }),
      (e.getSibling = function () {
        return this.h;
      }),
      (e.getNamespace = function (t) {
        t === void 0 && (t = document);
        var i = t.querySelector(
          "[" + this.o.prefix + "-" + this.o.namespace + "]"
        );
        return i
          ? i.getAttribute(this.o.prefix + "-" + this.o.namespace)
          : null;
      }),
      (e.getHref = function (t) {
        if (t.tagName && t.tagName.toLowerCase() === "a") {
          if (typeof t.href == "string") return t.href;
          var i = t.getAttribute("href") || t.getAttribute("xlink:href");
          if (i) return this.resolveUrl(i.baseVal || i);
        }
        return null;
      }),
      (e.resolveUrl = function () {
        var t = [].slice.call(arguments).length;
        if (t === 0)
          throw new Error(
            "resolveUrl requires at least one argument; got none."
          );
        var i = document.createElement("base");
        if (((i.href = arguments[0]), t === 1)) return i.href;
        var r = document.getElementsByTagName("head")[0];
        r.insertBefore(i, r.firstChild);
        for (var s, o = document.createElement("a"), l = 1; l < t; l++)
          (o.href = arguments[l]), (i.href = s = o.href);
        return r.removeChild(i), s;
      }),
      (e.l = function (t, i) {
        i.parentNode.insertBefore(t, i.nextSibling);
      }),
      (e.v = function (t) {
        return (
          (this.h = {
            after: t.nextElementSibling,
            before: t.previousElementSibling,
            parent: t.parentElement,
          }),
          this.h
        );
      }),
      n
    );
  })())(),
  G0 = (function () {
    function n() {
      (this.p = void 0), (this.m = []), (this.P = -1);
    }
    a(n, "t");
    var e = n.prototype;
    return (
      (e.init = function (t, i) {
        this.p = "barba";
        var r = {
          data: {},
          ns: i,
          scroll: { x: window.scrollX, y: window.scrollY },
          url: t,
        };
        (this.P = 0), this.m.push(r);
        var s = { from: this.p, index: this.P, states: [].concat(this.m) };
        window.history && window.history.replaceState(s, "", t);
      }),
      (e.change = function (t, i, r) {
        if (r && r.state) {
          var s = r.state,
            o = s.index;
          (i = this.g(this.P - o)), this.replace(s.states), (this.P = o);
        } else this.add(t, i);
        return i;
      }),
      (e.add = function (t, i, r, s) {
        var o = r ?? this.R(i),
          l = {
            data: s ?? {},
            ns: "tmp",
            scroll: { x: window.scrollX, y: window.scrollY },
            url: t,
          };
        switch (o) {
          case "push":
            (this.P = this.size), this.m.push(l);
            break;
          case "replace":
            this.set(this.P, l);
        }
        var c = { from: this.p, index: this.P, states: [].concat(this.m) };
        switch (o) {
          case "push":
            window.history && window.history.pushState(c, "", t);
            break;
          case "replace":
            window.history && window.history.replaceState(c, "", t);
        }
      }),
      (e.store = function (t, i) {
        var r = i || this.P,
          s = this.get(r);
        (s.data = vn({}, s.data, t)), this.set(r, s);
        var o = { from: this.p, index: this.P, states: [].concat(this.m) };
        window.history.replaceState(o, "");
      }),
      (e.update = function (t, i) {
        var r = i || this.P,
          s = vn({}, this.get(r), t);
        this.set(r, s);
      }),
      (e.remove = function (t) {
        t ? this.m.splice(t, 1) : this.m.pop(), this.P--;
      }),
      (e.clear = function () {
        (this.m = []), (this.P = -1);
      }),
      (e.replace = function (t) {
        this.m = t;
      }),
      (e.get = function (t) {
        return this.m[t];
      }),
      (e.set = function (t, i) {
        return (this.m[t] = i);
      }),
      (e.R = function (t) {
        var i = "push",
          r = t,
          s = _n.prefix + "-" + _n.history;
        return (
          r.hasAttribute && r.hasAttribute(s) && (i = r.getAttribute(s)), i
        );
      }),
      (e.g = function (t) {
        return Math.abs(t) > 1
          ? t > 0
            ? "forward"
            : "back"
          : t === 0
          ? "popstate"
          : t > 0
          ? "back"
          : "forward";
      }),
      nc(n, [
        {
          key: "current",
          get: a(function () {
            return this.m[this.P];
          }, "get"),
        },
        {
          key: "previous",
          get: a(function () {
            return this.P < 1 ? null : this.m[this.P - 1];
          }, "get"),
        },
        {
          key: "size",
          get: a(function () {
            return this.m.length;
          }, "get"),
        },
      ]),
      n
    );
  })(),
  zd = new G0(),
  zo = a(function (n, e) {
    try {
      var t = (function () {
        if (!e.next.html)
          return Promise.resolve(n).then(function (i) {
            var r = e.next;
            if (i) {
              var s = Pi.toElement(i.html);
              (r.namespace = Pi.getNamespace(s)),
                (r.container = Pi.getContainer(s)),
                (r.url = i.url),
                (r.html = i.html),
                zd.update({ ns: r.namespace });
              var o = Pi.toDocument(i.html);
              document.title = o.title;
            }
          });
      })();
      return Promise.resolve(t && t.then ? t.then(function () {}) : void 0);
    } catch (i) {
      return Promise.reject(i);
    }
  }, "P"),
  Rd = a(function n(e, t, i) {
    return e instanceof RegExp
      ? (function (r, s) {
          if (!s) return r;
          for (
            var o = /\((?:\?<(.*?)>)?(?!\?)/g, l = 0, c = o.exec(r.source);
            c;

          )
            s.push({
              name: c[1] || l++,
              prefix: "",
              suffix: "",
              modifier: "",
              pattern: "",
            }),
              (c = o.exec(r.source));
          return r;
        })(e, t)
      : Array.isArray(e)
      ? (function (r, s, o) {
          var l = r.map(function (c) {
            return n(c, s, o).source;
          });
          return new RegExp("(?:".concat(l.join("|"), ")"), wu(o));
        })(e, t, i)
      : (function (r, s, o) {
          return (function (l, c, u) {
            u === void 0 && (u = {});
            for (
              var f = u.strict,
                d = f !== void 0 && f,
                h = u.start,
                p = h === void 0 || h,
                g = u.end,
                m = g === void 0 || g,
                v = u.encode,
                b =
                  v === void 0
                    ? function (M) {
                        return M;
                      }
                    : v,
                y = u.delimiter,
                _ = y === void 0 ? "/#?" : y,
                S = u.endsWith,
                T = "[".concat(nr(S === void 0 ? "" : S), "]|$"),
                w = "[".concat(nr(_), "]"),
                C = p ? "^" : "",
                P = 0,
                L = l;
              P < L.length;
              P++
            ) {
              var k = L[P];
              if (typeof k == "string") C += nr(b(k));
              else {
                var $ = nr(b(k.prefix)),
                  x = nr(b(k.suffix));
                if (k.pattern)
                  if ((c && c.push(k), $ || x))
                    if (k.modifier === "+" || k.modifier === "*") {
                      var E = k.modifier === "*" ? "?" : "";
                      C += "(?:"
                        .concat($, "((?:")
                        .concat(k.pattern, ")(?:")
                        .concat(x)
                        .concat($, "(?:")
                        .concat(k.pattern, "))*)")
                        .concat(x, ")")
                        .concat(E);
                    } else
                      C += "(?:"
                        .concat($, "(")
                        .concat(k.pattern, ")")
                        .concat(x, ")")
                        .concat(k.modifier);
                  else
                    C +=
                      k.modifier === "+" || k.modifier === "*"
                        ? "((?:".concat(k.pattern, ")").concat(k.modifier, ")")
                        : "(".concat(k.pattern, ")").concat(k.modifier);
                else C += "(?:".concat($).concat(x, ")").concat(k.modifier);
              }
            }
            if (m)
              d || (C += "".concat(w, "?")),
                (C += u.endsWith ? "(?=".concat(T, ")") : "$");
            else {
              var O = l[l.length - 1],
                I =
                  typeof O == "string"
                    ? w.indexOf(O[O.length - 1]) > -1
                    : O === void 0;
              d || (C += "(?:".concat(w, "(?=").concat(T, "))?")),
                I || (C += "(?=".concat(w, "|").concat(T, ")"));
            }
            return new RegExp(C, wu(u));
          })(
            (function (l, c) {
              c === void 0 && (c = {});
              for (
                var u = (function (x) {
                    for (var E = [], O = 0; O < x.length; ) {
                      var I = x[O];
                      if (I !== "*" && I !== "+" && I !== "?")
                        if (I !== "\\")
                          if (I !== "{")
                            if (I !== "}")
                              if (I !== ":")
                                if (I !== "(")
                                  E.push({
                                    type: "CHAR",
                                    index: O,
                                    value: x[O++],
                                  });
                                else {
                                  var M = 1,
                                    D = "";
                                  if (x[(B = O + 1)] === "?")
                                    throw new TypeError(
                                      'Pattern cannot start with "?" at '.concat(
                                        B
                                      )
                                    );
                                  for (; B < x.length; )
                                    if (x[B] !== "\\") {
                                      if (x[B] === ")") {
                                        if (--M == 0) {
                                          B++;
                                          break;
                                        }
                                      } else if (
                                        x[B] === "(" &&
                                        (M++, x[B + 1] !== "?")
                                      )
                                        throw new TypeError(
                                          "Capturing groups are not allowed at ".concat(
                                            B
                                          )
                                        );
                                      D += x[B++];
                                    } else D += x[B++] + x[B++];
                                  if (M)
                                    throw new TypeError(
                                      "Unbalanced pattern at ".concat(O)
                                    );
                                  if (!D)
                                    throw new TypeError(
                                      "Missing pattern at ".concat(O)
                                    );
                                  E.push({
                                    type: "PATTERN",
                                    index: O,
                                    value: D,
                                  }),
                                    (O = B);
                                }
                              else {
                                for (var z = "", B = O + 1; B < x.length; ) {
                                  var A = x.charCodeAt(B);
                                  if (
                                    !(
                                      (A >= 48 && A <= 57) ||
                                      (A >= 65 && A <= 90) ||
                                      (A >= 97 && A <= 122) ||
                                      A === 95
                                    )
                                  )
                                    break;
                                  z += x[B++];
                                }
                                if (!z)
                                  throw new TypeError(
                                    "Missing parameter name at ".concat(O)
                                  );
                                E.push({ type: "NAME", index: O, value: z }),
                                  (O = B);
                              }
                            else
                              E.push({
                                type: "CLOSE",
                                index: O,
                                value: x[O++],
                              });
                          else
                            E.push({ type: "OPEN", index: O, value: x[O++] });
                        else
                          E.push({
                            type: "ESCAPED_CHAR",
                            index: O++,
                            value: x[O++],
                          });
                      else
                        E.push({ type: "MODIFIER", index: O, value: x[O++] });
                    }
                    return E.push({ type: "END", index: O, value: "" }), E;
                  })(l),
                  f = c.prefixes,
                  d = f === void 0 ? "./" : f,
                  h = "[^".concat(nr(c.delimiter || "/#?"), "]+?"),
                  p = [],
                  g = 0,
                  m = 0,
                  v = "",
                  b = function (x) {
                    if (m < u.length && u[m].type === x) return u[m++].value;
                  },
                  y = function (x) {
                    var E = b(x);
                    if (E !== void 0) return E;
                    var O = u[m],
                      I = O.index;
                    throw new TypeError(
                      "Unexpected "
                        .concat(O.type, " at ")
                        .concat(I, ", expected ")
                        .concat(x)
                    );
                  },
                  _ = function () {
                    for (var x, E = ""; (x = b("CHAR") || b("ESCAPED_CHAR")); )
                      E += x;
                    return E;
                  };
                m < u.length;

              ) {
                var S = b("CHAR"),
                  T = b("NAME"),
                  w = b("PATTERN");
                if (T || w)
                  d.indexOf((P = S || "")) === -1 && ((v += P), (P = "")),
                    v && (p.push(v), (v = "")),
                    p.push({
                      name: T || g++,
                      prefix: P,
                      suffix: "",
                      pattern: w || h,
                      modifier: b("MODIFIER") || "",
                    });
                else {
                  var C = S || b("ESCAPED_CHAR");
                  if (C) v += C;
                  else if ((v && (p.push(v), (v = "")), b("OPEN"))) {
                    var P = _(),
                      L = b("NAME") || "",
                      k = b("PATTERN") || "",
                      $ = _();
                    y("CLOSE"),
                      p.push({
                        name: L || (k ? g++ : ""),
                        pattern: L && !k ? h : k,
                        prefix: P,
                        suffix: $,
                        modifier: b("MODIFIER") || "",
                      });
                  } else y("END");
                }
              }
              return p;
            })(r, o),
            s,
            o
          );
        })(e, t, i);
  }, "t"),
  j0 = {
    __proto__: null,
    update: zo,
    nextTick: a(function () {
      return new Promise(function (n) {
        window.requestAnimationFrame(n);
      });
    }, "nextTick"),
    pathToRegexp: Rd,
  },
  Nd = a(function () {
    return window.location.origin;
  }, "x"),
  As = a(function (n) {
    return n === void 0 && (n = window.location.href), Gn(n).port;
  }, "R"),
  Gn = a(function (n) {
    var e,
      t = n.match(/:\d+/);
    if (t === null) /^http/.test(n) && (e = 80), /^https/.test(n) && (e = 443);
    else {
      var i = t[0].substring(1);
      e = parseInt(i, 10);
    }
    var r,
      s = n.replace(Nd(), ""),
      o = {},
      l = s.indexOf("#");
    l >= 0 && ((r = s.slice(l + 1)), (s = s.slice(0, l)));
    var c = s.indexOf("?");
    return (
      c >= 0 && ((o = Bd(s.slice(c + 1))), (s = s.slice(0, c))),
      { hash: r, path: s, port: e, query: o }
    );
  }, "k"),
  Bd = a(function (n) {
    return n.split("&").reduce(function (e, t) {
      var i = t.split("=");
      return (e[i[0]] = i[1]), e;
    }, {});
  }, "O"),
  hl = a(function (n) {
    return (
      n === void 0 && (n = window.location.href),
      n.replace(/(\/#.*|\/|#.*)$/, "")
    );
  }, "T"),
  U0 = {
    __proto__: null,
    getHref: a(function () {
      return window.location.href;
    }, "getHref"),
    getAbsoluteHref: a(function (n, e) {
      return e === void 0 && (e = document.baseURI), new URL(n, e).href;
    }, "getAbsoluteHref"),
    getOrigin: Nd,
    getPort: As,
    getPath: a(function (n) {
      return n === void 0 && (n = window.location.href), Gn(n).path;
    }, "getPath"),
    getQuery: a(function (n, e) {
      return (
        e === void 0 && (e = !1), e ? JSON.stringify(Gn(n).query) : Gn(n).query
      );
    }, "getQuery"),
    getHash: a(function (n) {
      return Gn(n).hash;
    }, "getHash"),
    parse: Gn,
    parseQuery: Bd,
    clean: hl,
  };
function K0(n, e, t, i, r) {
  return (
    e === void 0 && (e = 2e3),
    new Promise(function (s, o) {
      var l = new XMLHttpRequest();
      (l.onreadystatechange = function () {
        if (l.readyState === XMLHttpRequest.DONE) {
          if (l.status === 200) {
            var c =
              l.responseURL !== "" && l.responseURL !== n ? l.responseURL : n;
            s({ html: l.responseText, url: vn({ href: c }, Gn(c)) }),
              i.update(n, { status: "fulfilled", target: c });
          } else if (l.status) {
            var u = { status: l.status, statusText: l.statusText };
            t(n, u), o(u), i.update(n, { status: "rejected" });
          }
        }
      }),
        (l.ontimeout = function () {
          var c = new Error("Timeout error [" + e + "]");
          t(n, c), o(c), i.update(n, { status: "rejected" });
        }),
        (l.onerror = function () {
          var c = new Error("Fetch error");
          t(n, c), o(c), i.update(n, { status: "rejected" });
        }),
        l.open("GET", n),
        (l.timeout = e),
        l.setRequestHeader(
          "Accept",
          "text/html,application/xhtml+xml,application/xml"
        ),
        l.setRequestHeader("x-barba", "yes"),
        r.all().forEach(function (c, u) {
          l.setRequestHeader(u, c);
        }),
        l.send();
    })
  );
}
a(K0, "j");
function Z0(n) {
  return (
    !!n &&
    (typeof n == "object" || typeof n == "function") &&
    typeof n.then == "function"
  );
}
a(Z0, "M");
function ur(n, e) {
  return (
    e === void 0 && (e = {}),
    function () {
      var t = arguments,
        i = !1,
        r = new Promise(function (s, o) {
          e.async = function () {
            return (
              (i = !0),
              function (c, u) {
                c ? o(c) : s(u);
              }
            );
          };
          var l = n.apply(e, [].slice.call(t));
          i || (Z0(l) ? l.then(s, o) : s(l));
        });
      return r;
    }
  );
}
a(ur, "N");
var Wn = new ((function (n) {
    function e() {
      var i;
      return (
        ((i = n.call(this) || this).logger = new Ci("@barba/core")),
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
    a(e, "n"), Yo(e, n);
    var t = e.prototype;
    return (
      (t.init = function () {
        var i = this;
        this.registered.clear(),
          this.all.forEach(function (r) {
            i[r] ||
              (i[r] = function (s, o) {
                i.registered.has(r) || i.registered.set(r, new Set()),
                  i.registered.get(r).add({ ctx: o || {}, fn: s });
              });
          });
      }),
      (t.do = function (i) {
        var r = arguments,
          s = this;
        if (this.registered.has(i)) {
          var o = Promise.resolve();
          return (
            this.registered.get(i).forEach(function (l) {
              o = o.then(function () {
                return ur(l.fn, l.ctx).apply(void 0, [].slice.call(r, 1));
              });
            }),
            o.catch(function (l) {
              s.logger.debug("Hook error [" + i + "]"), s.logger.error(l);
            })
          );
        }
        return Promise.resolve();
      }),
      (t.clear = function () {
        var i = this;
        this.all.forEach(function (r) {
          delete i[r];
        }),
          this.init();
      }),
      (t.help = function () {
        this.logger.info("Available hooks: " + this.all.join(","));
        var i = [];
        this.registered.forEach(function (r, s) {
          return i.push(s);
        }),
          this.logger.info("Registered hooks: " + i.join(","));
      }),
      e
    );
  })(Y0))(),
  Fd = (function () {
    function n(e) {
      if (((this.k = void 0), (this.O = []), typeof e == "boolean")) this.k = e;
      else {
        var t = Array.isArray(e) ? e : [e];
        this.O = t.map(function (i) {
          return Rd(i);
        });
      }
    }
    return (
      a(n, "t"),
      (n.prototype.checkHref = function (e) {
        if (typeof this.k == "boolean") return this.k;
        var t = Gn(e).path;
        return this.O.some(function (i) {
          return i.exec(t) !== null;
        });
      }),
      n
    );
  })(),
  Q0 = (function (n) {
    function e(i) {
      var r;
      return ((r = n.call(this, i) || this).T = new Map()), r;
    }
    a(e, "n"), Yo(e, n);
    var t = e.prototype;
    return (
      (t.set = function (i, r, s, o, l) {
        return (
          this.T.set(i, { action: s, request: r, status: o, target: l ?? i }),
          { action: s, request: r, status: o, target: l }
        );
      }),
      (t.get = function (i) {
        return this.T.get(i);
      }),
      (t.getRequest = function (i) {
        return this.T.get(i).request;
      }),
      (t.getAction = function (i) {
        return this.T.get(i).action;
      }),
      (t.getStatus = function (i) {
        return this.T.get(i).status;
      }),
      (t.getTarget = function (i) {
        return this.T.get(i).target;
      }),
      (t.has = function (i) {
        return !this.checkHref(i) && this.T.has(i);
      }),
      (t.delete = function (i) {
        return this.T.delete(i);
      }),
      (t.update = function (i, r) {
        var s = vn({}, this.T.get(i), r);
        return this.T.set(i, s), s;
      }),
      e
    );
  })(Fd),
  J0 = (function () {
    function n() {
      this.A = new Map();
    }
    a(n, "t");
    var e = n.prototype;
    return (
      (e.set = function (t, i) {
        return this.A.set(t, i), { name: i };
      }),
      (e.get = function (t) {
        return this.A.get(t);
      }),
      (e.all = function () {
        return this.A;
      }),
      (e.has = function (t) {
        return this.A.has(t);
      }),
      (e.delete = function (t) {
        return this.A.delete(t);
      }),
      (e.clear = function () {
        return this.A.clear();
      }),
      n
    );
  })(),
  ey = a(function () {
    return !window.history.pushState;
  }, "_"),
  ty = a(function (n) {
    return !n.el || !n.href;
  }, "D"),
  ny = a(function (n) {
    var e = n.event;
    return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
  }, "B"),
  iy = a(function (n) {
    var e = n.el;
    return e.hasAttribute("target") && e.target === "_blank";
  }, "q"),
  ry = a(function (n) {
    var e = n.el;
    return (
      (e.protocol !== void 0 && window.location.protocol !== e.protocol) ||
      (e.hostname !== void 0 && window.location.hostname !== e.hostname)
    );
  }, "F"),
  sy = a(function (n) {
    var e = n.el;
    return e.port !== void 0 && As() !== As(e.href);
  }, "I"),
  oy = a(function (n) {
    var e = n.el;
    return e.getAttribute && typeof e.getAttribute("download") == "string";
  }, "U"),
  ay = a(function (n) {
    return n.el.hasAttribute(_n.prefix + "-" + _n.prevent);
  }, "$"),
  ly = a(function (n) {
    return !!n.el.closest("[" + _n.prefix + "-" + _n.prevent + '="all"]');
  }, "Q"),
  cy = a(function (n) {
    var e = n.href;
    return hl(e) === hl() && As(e) === As();
  }, "X"),
  uy = (function (n) {
    function e(i) {
      var r;
      return (
        ((r = n.call(this, i) || this).suite = []),
        (r.tests = new Map()),
        r.init(),
        r
      );
    }
    a(e, "n"), Yo(e, n);
    var t = e.prototype;
    return (
      (t.init = function () {
        this.add("pushState", ey),
          this.add("exists", ty),
          this.add("newTab", ny),
          this.add("blank", iy),
          this.add("corsDomain", ry),
          this.add("corsPort", sy),
          this.add("download", oy),
          this.add("preventSelf", ay),
          this.add("preventAll", ly),
          this.add("sameUrl", cy, !1);
      }),
      (t.add = function (i, r, s) {
        s === void 0 && (s = !0), this.tests.set(i, r), s && this.suite.push(i);
      }),
      (t.run = function (i, r, s, o) {
        return this.tests.get(i)({ el: r, event: s, href: o });
      }),
      (t.checkLink = function (i, r, s) {
        var o = this;
        return this.suite.some(function (l) {
          return o.run(l, i, r, s);
        });
      }),
      e
    );
  })(Fd),
  Ca = (function (n) {
    function e(t, i) {
      var r;
      return (
        i === void 0 && (i = "Barba error"),
        ((r =
          n.call.apply(n, [this].concat([].slice.call(arguments, 2))) ||
          this).error = void 0),
        (r.label = void 0),
        (r.error = t),
        (r.label = i),
        Error.captureStackTrace && Error.captureStackTrace(X0(r), e),
        (r.name = "BarbaError"),
        r
      );
    }
    return a(e, "n"), Yo(e, n), e;
  })(dl(Error)),
  fy = (function () {
    function n(t) {
      t === void 0 && (t = []),
        (this.logger = new Ci("@barba/core")),
        (this.all = []),
        (this.page = []),
        (this.once = []),
        (this.j = [
          { name: "namespace", type: "strings" },
          { name: "custom", type: "function" },
        ]),
        t && (this.all = this.all.concat(t)),
        this.update();
    }
    a(n, "t");
    var e = n.prototype;
    return (
      (e.add = function (t, i) {
        t === "rule"
          ? this.j.splice(i.position || 0, 0, i.value)
          : this.all.push(i),
          this.update();
      }),
      (e.resolve = function (t, i) {
        var r = this;
        i === void 0 && (i = {});
        var s = i.once ? this.once : this.page;
        s = s.filter(
          i.self
            ? function (h) {
                return h.name && h.name === "self";
              }
            : function (h) {
                return !h.name || h.name !== "self";
              }
        );
        var o = new Map(),
          l = s.find(function (h) {
            var p = !0,
              g = {};
            return i.self && h.name === "self"
              ? (o.set(h, g), !0)
              : (r.j.reverse().forEach(function (m) {
                  p &&
                    ((p = r.M(h, m, t, g)),
                    h.from &&
                      h.to &&
                      (p = r.M(h, m, t, g, "from") && r.M(h, m, t, g, "to")),
                    h.from && !h.to && (p = r.M(h, m, t, g, "from")),
                    !h.from && h.to && (p = r.M(h, m, t, g, "to")));
                }),
                o.set(h, g),
                p);
          }),
          c = o.get(l),
          u = [];
        if ((u.push(i.once ? "once" : "page"), i.self && u.push("self"), c)) {
          var f,
            d = [l];
          Object.keys(c).length > 0 && d.push(c),
            (f = this.logger).info.apply(
              f,
              ["Transition found [" + u.join(",") + "]"].concat(d)
            );
        } else this.logger.info("No transition found [" + u.join(",") + "]");
        return l;
      }),
      (e.update = function () {
        var t = this;
        (this.all = this.all
          .map(function (i) {
            return t.N(i);
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
      (e.M = function (t, i, r, s, o) {
        var l = !0,
          c = !1,
          u = t,
          f = i.name,
          d = f,
          h = f,
          p = f,
          g = o ? u[o] : u,
          m = o === "to" ? r.next : r.current;
        if (o ? g && g[f] : g[f]) {
          switch (i.type) {
            case "strings":
            default:
              var v = Array.isArray(g[d]) ? g[d] : [g[d]];
              m[d] && v.indexOf(m[d]) !== -1 && (c = !0),
                v.indexOf(m[d]) === -1 && (l = !1);
              break;
            case "object":
              var b = Array.isArray(g[h]) ? g[h] : [g[h]];
              m[h]
                ? (m[h].name && b.indexOf(m[h].name) !== -1 && (c = !0),
                  b.indexOf(m[h].name) === -1 && (l = !1))
                : (l = !1);
              break;
            case "function":
              g[p](r) ? (c = !0) : (l = !1);
          }
          c && (o ? ((s[o] = s[o] || {}), (s[o][f] = u[o][f])) : (s[f] = u[f]));
        }
        return l;
      }),
      (e.S = function (t, i, r) {
        var s = 0;
        return (
          (t[i] || (t.from && t.from[i]) || (t.to && t.to[i])) &&
            ((s += Math.pow(10, r)),
            t.from && t.from[i] && (s += 1),
            t.to && t.to[i] && (s += 2)),
          s
        );
      }),
      (e.N = function (t) {
        var i = this;
        t.priority = 0;
        var r = 0;
        return (
          this.j.forEach(function (s, o) {
            r += i.S(t, s.name, o + 1);
          }),
          (t.priority = r),
          t
        );
      }),
      n
    );
  })();
function Wr(n, e) {
  try {
    var t = n();
  } catch (i) {
    return e(i);
  }
  return t && t.then ? t.then(void 0, e) : t;
}
a(Wr, "W");
var dy = (function () {
    function n(t) {
      t === void 0 && (t = []),
        (this.logger = new Ci("@barba/core")),
        (this.store = void 0),
        (this.C = !1),
        (this.store = new fy(t));
    }
    a(n, "t");
    var e = n.prototype;
    return (
      (e.get = function (t, i) {
        return this.store.resolve(t, i);
      }),
      (e.doOnce = function (t) {
        var i = t.data,
          r = t.transition;
        try {
          var s = a(function () {
              o.C = !1;
            }, "i"),
            o = this,
            l = r || {};
          o.C = !0;
          var c = Wr(
            function () {
              return Promise.resolve(o.L("beforeOnce", i, l)).then(function () {
                return Promise.resolve(o.once(i, l)).then(function () {
                  return Promise.resolve(o.L("afterOnce", i, l)).then(
                    function () {}
                  );
                });
              });
            },
            function (u) {
              (o.C = !1),
                o.logger.debug("Transition error [before/after/once]"),
                o.logger.error(u);
            }
          );
          return Promise.resolve(c && c.then ? c.then(s) : s());
        } catch (u) {
          return Promise.reject(u);
        }
      }),
      (e.doPage = function (t) {
        var i = t.data,
          r = t.transition,
          s = t.page,
          o = t.wrapper;
        try {
          var l = a(function (h) {
              c.C = !1;
            }, "o"),
            c = this,
            u = r || {},
            f = u.sync === !0 || !1;
          c.C = !0;
          var d = Wr(
            function () {
              function h() {
                return Promise.resolve(c.L("before", i, u)).then(function () {
                  function g(v) {
                    return Promise.resolve(c.remove(i)).then(function () {
                      return Promise.resolve(c.L("after", i, u)).then(
                        function () {}
                      );
                    });
                  }
                  a(g, "t");
                  var m = (function () {
                    if (f)
                      return Wr(
                        function () {
                          return Promise.resolve(c.add(i, o)).then(function () {
                            return Promise.resolve(
                              c.L("beforeLeave", i, u)
                            ).then(function () {
                              return Promise.resolve(
                                c.L("beforeEnter", i, u)
                              ).then(function () {
                                return Promise.resolve(
                                  Promise.all([c.leave(i, u), c.enter(i, u)])
                                ).then(function () {
                                  return Promise.resolve(
                                    c.L("afterLeave", i, u)
                                  ).then(function () {
                                    return Promise.resolve(
                                      c.L("afterEnter", i, u)
                                    ).then(function () {});
                                  });
                                });
                              });
                            });
                          });
                        },
                        function (_) {
                          if (c.H(_))
                            throw new Ca(_, "Transition error [sync]");
                        }
                      );
                    var v = a(function (_) {
                        return Wr(
                          function () {
                            var S = (function () {
                              if (b !== !1)
                                return Promise.resolve(c.add(i, o)).then(
                                  function () {
                                    return Promise.resolve(
                                      c.L("beforeEnter", i, u)
                                    ).then(function () {
                                      return Promise.resolve(
                                        c.enter(i, u, b)
                                      ).then(function () {
                                        return Promise.resolve(
                                          c.L("afterEnter", i, u)
                                        ).then(function () {});
                                      });
                                    });
                                  }
                                );
                            })();
                            if (S && S.then) return S.then(function () {});
                          },
                          function (S) {
                            if (c.H(S))
                              throw new Ca(
                                S,
                                "Transition error [before/after/enter]"
                              );
                          }
                        );
                      }, "t"),
                      b = !1,
                      y = Wr(
                        function () {
                          return Promise.resolve(c.L("beforeLeave", i, u)).then(
                            function () {
                              return Promise.resolve(
                                Promise.all([c.leave(i, u), zo(s, i)]).then(
                                  function (_) {
                                    return _[0];
                                  }
                                )
                              ).then(function (_) {
                                return (
                                  (b = _),
                                  Promise.resolve(c.L("afterLeave", i, u)).then(
                                    function () {}
                                  )
                                );
                              });
                            }
                          );
                        },
                        function (_) {
                          if (c.H(_))
                            throw new Ca(
                              _,
                              "Transition error [before/after/leave]"
                            );
                        }
                      );
                    return y && y.then ? y.then(v) : v();
                  })();
                  return m && m.then ? m.then(g) : g();
                });
              }
              a(h, "t");
              var p = (function () {
                if (f) return Promise.resolve(zo(s, i)).then(function () {});
              })();
              return p && p.then ? p.then(h) : h();
            },
            function (h) {
              throw (
                ((c.C = !1),
                h.name && h.name === "BarbaError"
                  ? (c.logger.debug(h.label), c.logger.error(h.error), h)
                  : (c.logger.debug("Transition error [page]"),
                    c.logger.error(h),
                    h))
              );
            }
          );
          return Promise.resolve(d && d.then ? d.then(l) : l());
        } catch (h) {
          return Promise.reject(h);
        }
      }),
      (e.once = function (t, i) {
        try {
          return Promise.resolve(Wn.do("once", t, i)).then(function () {
            return i.once ? ur(i.once, i)(t) : Promise.resolve();
          });
        } catch (r) {
          return Promise.reject(r);
        }
      }),
      (e.leave = function (t, i) {
        try {
          return Promise.resolve(Wn.do("leave", t, i)).then(function () {
            return i.leave ? ur(i.leave, i)(t) : Promise.resolve();
          });
        } catch (r) {
          return Promise.reject(r);
        }
      }),
      (e.enter = function (t, i, r) {
        try {
          return Promise.resolve(Wn.do("enter", t, i)).then(function () {
            return i.enter ? ur(i.enter, i)(t, r) : Promise.resolve();
          });
        } catch (s) {
          return Promise.reject(s);
        }
      }),
      (e.add = function (t, i) {
        try {
          return (
            Pi.addContainer(t.next.container, i),
            Wn.do("nextAdded", t),
            Promise.resolve()
          );
        } catch (r) {
          return Promise.reject(r);
        }
      }),
      (e.remove = function (t) {
        try {
          return (
            Pi.removeContainer(t.current.container),
            Wn.do("currentRemoved", t),
            Promise.resolve()
          );
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      (e.H = function (t) {
        return t.message
          ? !/Timeout error|Fetch error/.test(t.message)
          : !t.status;
      }),
      (e.L = function (t, i, r) {
        try {
          return Promise.resolve(Wn.do(t, i, r)).then(function () {
            return r[t] ? ur(r[t], r)(i) : Promise.resolve();
          });
        } catch (s) {
          return Promise.reject(s);
        }
      }),
      nc(n, [
        {
          key: "isRunning",
          get: a(function () {
            return this.C;
          }, "get"),
          set: a(function (t) {
            this.C = t;
          }, "set"),
        },
        {
          key: "hasOnce",
          get: a(function () {
            return this.store.once.length > 0;
          }, "get"),
        },
        {
          key: "hasSelf",
          get: a(function () {
            return this.store.all.some(function (t) {
              return t.name === "self";
            });
          }, "get"),
        },
        {
          key: "shouldWait",
          get: a(function () {
            return this.store.all.some(function (t) {
              return (t.to && !t.to.route) || t.sync;
            });
          }, "get"),
        },
      ]),
      n
    );
  })(),
  hy = (function () {
    function n(e) {
      var t = this;
      (this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"]),
        (this.byNamespace = new Map()),
        e.length !== 0 &&
          (e.forEach(function (i) {
            t.byNamespace.set(i.namespace, i);
          }),
          this.names.forEach(function (i) {
            Wn[i](t._(i));
          }));
    }
    return (
      a(n, "t"),
      (n.prototype._ = function (e) {
        var t = this;
        return function (i) {
          var r = e.match(/enter/i) ? i.next : i.current,
            s = t.byNamespace.get(r.namespace);
          return s && s[e] ? ur(s[e], s)(i) : Promise.resolve();
        };
      }),
      n
    );
  })();
Element.prototype.matches ||
  (Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector),
  Element.prototype.closest ||
    (Element.prototype.closest = function (n) {
      var e = this;
      do {
        if (e.matches(n)) return e;
        e = e.parentElement || e.parentNode;
      } while (e !== null && e.nodeType === 1);
      return null;
    });
var py = {
  container: null,
  html: "",
  namespace: "",
  url: { hash: "", href: "", path: "", port: null, query: {} },
};
new ((function () {
  function n() {
    (this.version = "2.10.3"),
      (this.schemaPage = py),
      (this.Logger = Ci),
      (this.logger = new Ci("@barba/core")),
      (this.plugins = []),
      (this.timeout = void 0),
      (this.cacheIgnore = void 0),
      (this.cacheFirstPage = void 0),
      (this.prefetchIgnore = void 0),
      (this.preventRunning = void 0),
      (this.hooks = Wn),
      (this.cache = void 0),
      (this.headers = void 0),
      (this.prevent = void 0),
      (this.transitions = void 0),
      (this.views = void 0),
      (this.dom = Pi),
      (this.helpers = j0),
      (this.history = zd),
      (this.request = K0),
      (this.url = U0),
      (this.D = void 0),
      (this.B = void 0),
      (this.q = void 0),
      (this.F = void 0);
  }
  a(n, "t");
  var e = n.prototype;
  return (
    (e.use = function (t, i) {
      var r = this.plugins;
      r.indexOf(t) > -1
        ? this.logger.warn("Plugin [" + t.name + "] already installed.")
        : typeof t.install == "function"
        ? (t.install(this, i), r.push(t))
        : this.logger.warn("Plugin [" + t.name + '] has no "install" method.');
    }),
    (e.init = function (t) {
      var i = t === void 0 ? {} : t,
        r = i.transitions,
        s = r === void 0 ? [] : r,
        o = i.views,
        l = o === void 0 ? [] : o,
        c = i.schema,
        u = c === void 0 ? _n : c,
        f = i.requestError,
        d = i.timeout,
        h = d === void 0 ? 2e3 : d,
        p = i.cacheIgnore,
        g = p !== void 0 && p,
        m = i.cacheFirstPage,
        v = m !== void 0 && m,
        b = i.prefetchIgnore,
        y = b !== void 0 && b,
        _ = i.preventRunning,
        S = _ !== void 0 && _,
        T = i.prevent,
        w = T === void 0 ? null : T,
        C = i.debug,
        P = i.logLevel;
      if (
        (Ci.setLevel(
          (C !== void 0 && C) === !0 ? "debug" : P === void 0 ? "off" : P
        ),
        this.logger.info(this.version),
        Object.keys(u).forEach(function ($) {
          _n[$] && (_n[$] = u[$]);
        }),
        (this.B = f),
        (this.timeout = h),
        (this.cacheIgnore = g),
        (this.cacheFirstPage = v),
        (this.prefetchIgnore = y),
        (this.preventRunning = S),
        (this.q = this.dom.getWrapper()),
        !this.q)
      )
        throw new Error("[@barba/core] No Barba wrapper found");
      this.I();
      var L = this.data.current;
      if (!L.container)
        throw new Error("[@barba/core] No Barba container found");
      if (
        ((this.cache = new Q0(g)),
        (this.headers = new J0()),
        (this.prevent = new uy(y)),
        (this.transitions = new dy(s)),
        (this.views = new hy(l)),
        w !== null)
      ) {
        if (typeof w != "function")
          throw new Error("[@barba/core] Prevent should be a function");
        this.prevent.add("preventCustom", w);
      }
      this.history.init(L.url.href, L.namespace),
        v &&
          this.cache.set(
            L.url.href,
            Promise.resolve({ html: L.html, url: L.url }),
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
      var k = this.data;
      (k.trigger = "barba"),
        (k.next = k.current),
        (k.current = vn({}, this.schemaPage)),
        this.hooks.do("ready", k),
        this.once(k),
        this.I();
    }),
    (e.destroy = function () {
      this.I(),
        this.J(),
        this.history.clear(),
        this.hooks.clear(),
        (this.plugins = []);
    }),
    (e.force = function (t) {
      window.location.assign(t);
    }),
    (e.go = function (t, i, r) {
      var s;
      if (
        (i === void 0 && (i = "barba"),
        (this.F = null),
        this.transitions.isRunning)
      )
        this.force(t);
      else if (
        !(s =
          i === "popstate"
            ? this.history.current &&
              this.url.getPath(this.history.current.url) ===
                this.url.getPath(t) &&
              this.url.getQuery(this.history.current.url, !0) ===
                this.url.getQuery(t, !0)
            : this.prevent.run("sameUrl", null, null, t)) ||
        this.transitions.hasSelf
      )
        return (
          (i = this.history.change(
            this.cache.has(t) ? this.cache.get(t).target : t,
            i,
            r
          )),
          r && (r.stopPropagation(), r.preventDefault()),
          this.page(t, i, r ?? void 0, s)
        );
    }),
    (e.once = function (t) {
      try {
        var i = this;
        return Promise.resolve(i.hooks.do("beforeEnter", t)).then(function () {
          function r() {
            return Promise.resolve(i.hooks.do("afterEnter", t)).then(
              function () {}
            );
          }
          a(r, "r");
          var s = (function () {
            if (i.transitions.hasOnce) {
              var o = i.transitions.get(t, { once: !0 });
              return Promise.resolve(
                i.transitions.doOnce({ transition: o, data: t })
              ).then(function () {});
            }
          })();
          return s && s.then ? s.then(r) : r();
        });
      } catch (r) {
        return Promise.reject(r);
      }
    }),
    (e.page = function (t, i, r, s) {
      try {
        var o,
          l = a(function () {
            var d = c.data;
            return Promise.resolve(c.hooks.do("page", d)).then(function () {
              var h = (function (p, g) {
                try {
                  var m =
                    ((v = c.transitions.get(d, { once: !1, self: s })),
                    Promise.resolve(
                      c.transitions.doPage({
                        data: d,
                        page: o,
                        transition: v,
                        wrapper: c.q,
                      })
                    ).then(function () {
                      c.I();
                    }));
                } catch {
                  return g();
                }
                var v;
                return m && m.then ? m.then(void 0, g) : m;
              })(0, function () {
                Ci.getLevel() === 0 && c.force(d.next.url.href);
              });
              if (h && h.then) return h.then(function () {});
            });
          }, "u"),
          c = this;
        if (
          ((c.data.next.url = vn({ href: t }, c.url.parse(t))),
          (c.data.trigger = i),
          (c.data.event = r),
          c.cache.has(t))
        )
          o = c.cache.update(t, { action: "click" }).request;
        else {
          var u = c.request(
            t,
            c.timeout,
            c.onRequestError.bind(c, i),
            c.cache,
            c.headers
          );
          u.then(function (d) {
            d.url.href !== t && c.history.add(d.url.href, i, "replace");
          }),
            (o = c.cache.set(t, u, "click", "pending").request);
        }
        var f = (function () {
          if (c.transitions.shouldWait)
            return Promise.resolve(zo(o, c.data)).then(function () {});
        })();
        return Promise.resolve(f && f.then ? f.then(l) : l());
      } catch (d) {
        return Promise.reject(d);
      }
    }),
    (e.onRequestError = function (t) {
      this.transitions.isRunning = !1;
      var i = [].slice.call(arguments, 1),
        r = i[0],
        s = i[1],
        o = this.cache.getAction(r);
      return (
        this.cache.delete(r),
        (this.B && this.B(t, o, r, s) === !1) ||
          (o === "click" && this.force(r)),
        !1
      );
    }),
    (e.prefetch = function (t) {
      var i = this;
      (t = this.url.getAbsoluteHref(t)),
        this.cache.has(t) ||
          this.cache.set(
            t,
            this.request(
              t,
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
    (e.U = function (t) {
      var i = this,
        r = this.W(t);
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
            ).catch(function (o) {
              i.logger.error(o);
            }),
            "enter",
            "pending"
          );
      }
    }),
    (e.$ = function (t) {
      var i = this.W(t);
      if (i) {
        if (this.transitions.isRunning && this.preventRunning)
          return t.preventDefault(), void t.stopPropagation();
        (this.F = t), this.go(this.dom.getHref(i), i, t);
      }
    }),
    (e.X = function (t) {
      this.go(this.url.getHref(), "popstate", t);
    }),
    (e.W = function (t) {
      for (var i = t.target; i && !this.dom.getHref(i); ) i = i.parentNode;
      if (i && !this.prevent.checkLink(i, t, this.dom.getHref(i))) return i;
    }),
    (e.I = function () {
      var t = this.url.getHref(),
        i = {
          container: this.dom.getContainer(),
          html: this.dom.getHtml(),
          namespace: this.dom.getNamespace(),
          url: vn({ href: t }, this.url.parse(t)),
        };
      (this.D = {
        current: i,
        event: void 0,
        next: vn({}, this.schemaPage),
        trigger: void 0,
      }),
        this.hooks.do("reset", this.data);
    }),
    nc(n, [
      {
        key: "data",
        get: a(function () {
          return this.D;
        }, "get"),
      },
      {
        key: "wrapper",
        get: a(function () {
          return this.q;
        }, "get"),
      },
    ]),
    n
  );
})())();
N.registerPlugin(j);
const qd = a(() => {
  const n = navigator.userAgent,
    e = /iPad|iPhone|iPod/.test(n),
    t = /WebKit/.test(n),
    i = /Safari/.test(n) && !/Chrome/.test(n),
    r = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  return e && t && i && r;
}, "isSafariMobile");
let pl = window.innerHeight;
const ic = a((n) => {
    (Math.abs(n - pl) > 150 || !qd()) && (pl = n);
  }, "updateStableViewportHeight"),
  my = a(() => {
    if (!qd()) return;
    const n = a(() => {
      document.documentElement.style.setProperty(
        "--stable-vh",
        `${pl * 0.01}px`
      );
    }, "setViewportHeight");
    n(),
      window.addEventListener("orientationchange", () => {
        setTimeout(() => {
          ic(window.innerHeight), n();
        }, 500);
      });
  }, "applySafariViewportFix"),
  Hd = a((n, e) => {
    let t;
    return a(function (...r) {
      const s = a(() => {
        clearTimeout(t), n(...r);
      }, "later");
      clearTimeout(t), (t = setTimeout(s, e));
    }, "executedFunction");
  }, "debounce"),
  gy = Hd(() => {
    const n = window.innerHeight;
    ic(n);
    const e = Di();
    e && e.resize(), j.refresh();
  }, 250),
  vy = a(() => {
    setTimeout(() => {
      const n = Di();
      n && n.resize(), j.refresh();
    }, 500);
  }, "handleOrientationChange"),
  yy = a(() => {
    my(),
      window.addEventListener("resize", gy),
      window.addEventListener("orientationchange", vy);
    let n = window.innerHeight,
      e = window.innerWidth;
    const t = Hd(() => {
      const i = window.innerHeight,
        r = Math.abs(i - n) > 100,
        s = Math.abs(window.innerWidth - e) > 100;
      if (r || s) {
        ic(i);
        const o = Di();
        o && o.resize(), j.refresh(), (n = i), (e = window.innerWidth);
      }
    }, 100);
    window.addEventListener("resize", t);
  }, "initializeScrollTriggerManager");
document.addEventListener("DOMContentLoaded", () => {
  yy(), H0(), I0(), vd();
});
