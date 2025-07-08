(() => {
  const style = document.createElement("style");
  style.textContent =
    '@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA);font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-pointer-events{touch-action:pan-y}.swiper-pointer-events.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper:after{content:"";position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper:after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper:after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:"next"}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:50%;background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:#00000040;position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:#0000001a}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:#00000080;border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-next+.swiper-slide,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-right,.swiper-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:"";background:#000;position:absolute;inset:0;filter:blur(50px)}.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-right,.swiper-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-creative .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}\n';
  document.head.appendChild(style);
})();
var sf = Object.defineProperty;
var af = (t, e, n) =>
  e in t
    ? sf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n);
var Y = (t, e, n) => af(t, typeof e != "symbol" ? e + "" : e, n);
/*! @vimeo/player v2.26.0 | (c) 2025 Vimeo | MIT License | https://github.com/vimeo/player.js */ function Al(
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
function Ol(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Al(Object(n), !0).forEach(function (i) {
          Is(t, i, n[i]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : Al(Object(n)).forEach(function (i) {
          Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
        });
  }
  return t;
}
function ht() {
  ht = function () {
    return t;
  };
  var t = {},
    e = Object.prototype,
    n = e.hasOwnProperty,
    i =
      Object.defineProperty ||
      function (x, T, O) {
        x[T] = O.value;
      },
    r = typeof Symbol == "function" ? Symbol : {},
    s = r.iterator || "@@iterator",
    a = r.asyncIterator || "@@asyncIterator",
    o = r.toStringTag || "@@toStringTag";
  function l(x, T, O) {
    return (
      Object.defineProperty(x, T, {
        value: O,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      x[T]
    );
  }
  try {
    l({}, "");
  } catch {
    l = function (T, O, L) {
      return (T[O] = L);
    };
  }
  function c(x, T, O, L) {
    var k = T && T.prototype instanceof f ? T : f,
      I = Object.create(k.prototype),
      z = new A(L || []);
    return i(I, "_invoke", { value: S(x, O, z) }), I;
  }
  function u(x, T, O) {
    try {
      return { type: "normal", arg: x.call(T, O) };
    } catch (L) {
      return { type: "throw", arg: L };
    }
  }
  t.wrap = c;
  var d = {};
  function f() {}
  function h() {}
  function m() {}
  var p = {};
  l(p, s, function () {
    return this;
  });
  var g = Object.getPrototypeOf,
    _ = g && g(g(P([])));
  _ && _ !== e && n.call(_, s) && (p = _);
  var v = (m.prototype = f.prototype = Object.create(p));
  function y(x) {
    ["next", "throw", "return"].forEach(function (T) {
      l(x, T, function (O) {
        return this._invoke(T, O);
      });
    });
  }
  function b(x, T) {
    function O(k, I, z, B) {
      var M = u(x[k], x, I);
      if (M.type !== "throw") {
        var q = M.arg,
          X = q.value;
        return X && typeof X == "object" && n.call(X, "__await")
          ? T.resolve(X.__await).then(
              function (oe) {
                O("next", oe, z, B);
              },
              function (oe) {
                O("throw", oe, z, B);
              }
            )
          : T.resolve(X).then(
              function (oe) {
                (q.value = oe), z(q);
              },
              function (oe) {
                return O("throw", oe, z, B);
              }
            );
      }
      B(M.arg);
    }
    var L;
    i(this, "_invoke", {
      value: function (k, I) {
        function z() {
          return new T(function (B, M) {
            O(k, I, B, M);
          });
        }
        return (L = L ? L.then(z, z) : z());
      },
    });
  }
  function S(x, T, O) {
    var L = "suspendedStart";
    return function (k, I) {
      if (L === "executing") throw new Error("Generator is already running");
      if (L === "completed") {
        if (k === "throw") throw I;
        return $();
      }
      for (O.method = k, O.arg = I; ; ) {
        var z = O.delegate;
        if (z) {
          var B = E(z, O);
          if (B) {
            if (B === d) continue;
            return B;
          }
        }
        if (O.method === "next") O.sent = O._sent = O.arg;
        else if (O.method === "throw") {
          if (L === "suspendedStart") throw ((L = "completed"), O.arg);
          O.dispatchException(O.arg);
        } else O.method === "return" && O.abrupt("return", O.arg);
        L = "executing";
        var M = u(x, T, O);
        if (M.type === "normal") {
          if (((L = O.done ? "completed" : "suspendedYield"), M.arg === d))
            continue;
          return { value: M.arg, done: O.done };
        }
        M.type === "throw" &&
          ((L = "completed"), (O.method = "throw"), (O.arg = M.arg));
      }
    };
  }
  function E(x, T) {
    var O = T.method,
      L = x.iterator[O];
    if (L === void 0)
      return (
        (T.delegate = null),
        (O === "throw" &&
          x.iterator.return &&
          ((T.method = "return"),
          (T.arg = void 0),
          E(x, T),
          T.method === "throw")) ||
          (O !== "return" &&
            ((T.method = "throw"),
            (T.arg = new TypeError(
              "The iterator does not provide a '" + O + "' method"
            )))),
        d
      );
    var k = u(L, x.iterator, T.arg);
    if (k.type === "throw")
      return (T.method = "throw"), (T.arg = k.arg), (T.delegate = null), d;
    var I = k.arg;
    return I
      ? I.done
        ? ((T[x.resultName] = I.value),
          (T.next = x.nextLoc),
          T.method !== "return" && ((T.method = "next"), (T.arg = void 0)),
          (T.delegate = null),
          d)
        : I
      : ((T.method = "throw"),
        (T.arg = new TypeError("iterator result is not an object")),
        (T.delegate = null),
        d);
  }
  function w(x) {
    var T = { tryLoc: x[0] };
    1 in x && (T.catchLoc = x[1]),
      2 in x && ((T.finallyLoc = x[2]), (T.afterLoc = x[3])),
      this.tryEntries.push(T);
  }
  function C(x) {
    var T = x.completion || {};
    (T.type = "normal"), delete T.arg, (x.completion = T);
  }
  function A(x) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      x.forEach(w, this),
      this.reset(!0);
  }
  function P(x) {
    if (x) {
      var T = x[s];
      if (T) return T.call(x);
      if (typeof x.next == "function") return x;
      if (!isNaN(x.length)) {
        var O = -1,
          L = function k() {
            for (; ++O < x.length; )
              if (n.call(x, O)) return (k.value = x[O]), (k.done = !1), k;
            return (k.value = void 0), (k.done = !0), k;
          };
        return (L.next = L);
      }
    }
    return { next: $ };
  }
  function $() {
    return { value: void 0, done: !0 };
  }
  return (
    (h.prototype = m),
    i(v, "constructor", { value: m, configurable: !0 }),
    i(m, "constructor", { value: h, configurable: !0 }),
    (h.displayName = l(m, o, "GeneratorFunction")),
    (t.isGeneratorFunction = function (x) {
      var T = typeof x == "function" && x.constructor;
      return (
        !!T && (T === h || (T.displayName || T.name) === "GeneratorFunction")
      );
    }),
    (t.mark = function (x) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(x, m)
          : ((x.__proto__ = m), l(x, o, "GeneratorFunction")),
        (x.prototype = Object.create(v)),
        x
      );
    }),
    (t.awrap = function (x) {
      return { __await: x };
    }),
    y(b.prototype),
    l(b.prototype, a, function () {
      return this;
    }),
    (t.AsyncIterator = b),
    (t.async = function (x, T, O, L, k) {
      k === void 0 && (k = Promise);
      var I = new b(c(x, T, O, L), k);
      return t.isGeneratorFunction(T)
        ? I
        : I.next().then(function (z) {
            return z.done ? z.value : I.next();
          });
    }),
    y(v),
    l(v, o, "Generator"),
    l(v, s, function () {
      return this;
    }),
    l(v, "toString", function () {
      return "[object Generator]";
    }),
    (t.keys = function (x) {
      var T = Object(x),
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
    (t.values = P),
    (A.prototype = {
      constructor: A,
      reset: function (x) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = void 0),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = void 0),
          this.tryEntries.forEach(C),
          !x)
        )
          for (var T in this)
            T.charAt(0) === "t" &&
              n.call(this, T) &&
              !isNaN(+T.slice(1)) &&
              (this[T] = void 0);
      },
      stop: function () {
        this.done = !0;
        var x = this.tryEntries[0].completion;
        if (x.type === "throw") throw x.arg;
        return this.rval;
      },
      dispatchException: function (x) {
        if (this.done) throw x;
        var T = this;
        function O(M, q) {
          return (
            (I.type = "throw"),
            (I.arg = x),
            (T.next = M),
            q && ((T.method = "next"), (T.arg = void 0)),
            !!q
          );
        }
        for (var L = this.tryEntries.length - 1; L >= 0; --L) {
          var k = this.tryEntries[L],
            I = k.completion;
          if (k.tryLoc === "root") return O("end");
          if (k.tryLoc <= this.prev) {
            var z = n.call(k, "catchLoc"),
              B = n.call(k, "finallyLoc");
            if (z && B) {
              if (this.prev < k.catchLoc) return O(k.catchLoc, !0);
              if (this.prev < k.finallyLoc) return O(k.finallyLoc);
            } else if (z) {
              if (this.prev < k.catchLoc) return O(k.catchLoc, !0);
            } else {
              if (!B) throw new Error("try statement without catch or finally");
              if (this.prev < k.finallyLoc) return O(k.finallyLoc);
            }
          }
        }
      },
      abrupt: function (x, T) {
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
          (x === "break" || x === "continue") &&
          k.tryLoc <= T &&
          T <= k.finallyLoc &&
          (k = null);
        var I = k ? k.completion : {};
        return (
          (I.type = x),
          (I.arg = T),
          k
            ? ((this.method = "next"), (this.next = k.finallyLoc), d)
            : this.complete(I)
        );
      },
      complete: function (x, T) {
        if (x.type === "throw") throw x.arg;
        return (
          x.type === "break" || x.type === "continue"
            ? (this.next = x.arg)
            : x.type === "return"
            ? ((this.rval = this.arg = x.arg),
              (this.method = "return"),
              (this.next = "end"))
            : x.type === "normal" && T && (this.next = T),
          d
        );
      },
      finish: function (x) {
        for (var T = this.tryEntries.length - 1; T >= 0; --T) {
          var O = this.tryEntries[T];
          if (O.finallyLoc === x)
            return this.complete(O.completion, O.afterLoc), C(O), d;
        }
      },
      catch: function (x) {
        for (var T = this.tryEntries.length - 1; T >= 0; --T) {
          var O = this.tryEntries[T];
          if (O.tryLoc === x) {
            var L = O.completion;
            if (L.type === "throw") {
              var k = L.arg;
              C(O);
            }
            return k;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (x, T, O) {
        return (
          (this.delegate = { iterator: P(x), resultName: T, nextLoc: O }),
          this.method === "next" && (this.arg = void 0),
          d
        );
      },
    }),
    t
  );
}
function Ll(t, e, n, i, r, s, a) {
  try {
    var o = t[s](a),
      l = o.value;
  } catch (c) {
    n(c);
    return;
  }
  o.done ? e(l) : Promise.resolve(l).then(i, r);
}
function hi(t) {
  return function () {
    var e = this,
      n = arguments;
    return new Promise(function (i, r) {
      var s = t.apply(e, n);
      function a(l) {
        Ll(s, i, r, a, o, "next", l);
      }
      function o(l) {
        Ll(s, i, r, a, o, "throw", l);
      }
      a(void 0);
    });
  };
}
function Xc(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function of(t, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(t, Uc(i.key), i);
  }
}
function Gc(t, e, n) {
  return (
    e && of(t.prototype, e),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function Is(t, e, n) {
  return (
    (e = Uc(e)),
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
function lf(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && ts(t, e);
}
function es(t) {
  return (
    (es = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    es(t)
  );
}
function ts(t, e) {
  return (
    (ts = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (i, r) {
          return (i.__proto__ = r), i;
        }),
    ts(t, e)
  );
}
function jc() {
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
function zs(t, e, n) {
  return (
    jc()
      ? (zs = Reflect.construct.bind())
      : (zs = function (r, s, a) {
          var o = [null];
          o.push.apply(o, s);
          var l = Function.bind.apply(r, o),
            c = new l();
          return a && ts(c, a.prototype), c;
        }),
    zs.apply(null, arguments)
  );
}
function cf(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function ro(t) {
  var e = typeof Map == "function" ? new Map() : void 0;
  return (
    (ro = function (i) {
      if (i === null || !cf(i)) return i;
      if (typeof i != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof e < "u") {
        if (e.has(i)) return e.get(i);
        e.set(i, r);
      }
      function r() {
        return zs(i, arguments, es(this).constructor);
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
        ts(r, i)
      );
    }),
    ro(t)
  );
}
function Ds(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function uf(t, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Ds(t);
}
function df(t) {
  var e = jc();
  return function () {
    var i = es(t),
      r;
    if (e) {
      var s = es(this).constructor;
      r = Reflect.construct(i, arguments, s);
    } else r = i.apply(this, arguments);
    return uf(this, r);
  };
}
function ff(t, e) {
  if (typeof t != "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(t, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function Uc(t) {
  var e = ff(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var Kc = typeof global < "u" && {}.toString.call(global) === "[object global]";
function Il(t, e) {
  return t.indexOf(e.toLowerCase()) === 0
    ? t
    : ""
        .concat(e.toLowerCase())
        .concat(t.substr(0, 1).toUpperCase())
        .concat(t.substr(1));
}
function hf(t) {
  return !!(
    t &&
    t.nodeType === 1 &&
    "nodeName" in t &&
    t.ownerDocument &&
    t.ownerDocument.defaultView
  );
}
function pf(t) {
  return !isNaN(parseFloat(t)) && isFinite(t) && Math.floor(t) == t;
}
function Mi(t) {
  return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(
    t
  );
}
function Zc(t) {
  var e =
    /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
  return e.test(t);
}
function mf(t) {
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
function Qc() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    e = t.id,
    n = t.url,
    i = e || n;
  if (!i)
    throw new Error(
      "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
    );
  if (pf(i)) return "https://vimeo.com/".concat(i);
  if (Mi(i)) return i.replace("http:", "https:");
  throw e
    ? new TypeError("“".concat(e, "” is not a valid video id."))
    : new TypeError("“".concat(i, "” is not a vimeo.com url."));
}
var zl = function (e, n, i) {
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
  gf = typeof Array.prototype.indexOf < "u",
  vf = typeof window < "u" && typeof window.postMessage < "u";
if (!Kc && (!gf || !vf))
  throw new Error(
    "Sorry, the Vimeo Player API is not available in this browser."
  );
var er =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function yf(t, e) {
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
        } catch {}
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
        var d = c[this._id];
        return d && d[0] === c
          ? ((d[1] = u), this)
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
  typeof globalThis < "u"
    ? globalThis
    : typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : er
);
var Ht = yf(function (t) {
    /*! Native Promise Only
v0.8.1 (c) Kyle Simpson
MIT License: http://getify.mit-license.org
*/ (function (n, i, r) {
      (i[n] = i[n] || r()), t.exports && (t.exports = i[n]);
    })("Promise", er, function () {
      var n,
        i,
        r,
        s = Object.prototype.toString,
        a =
          typeof setImmediate < "u"
            ? function (y) {
                return setImmediate(y);
              }
            : setTimeout;
      try {
        n = function (y, b, S, E) {
          return Object.defineProperty(y, b, {
            value: S,
            writable: !0,
            configurable: E !== !1,
          });
        };
      } catch {
        n = function (b, S, E) {
          return (b[S] = E), b;
        };
      }
      r = (function () {
        var y, b, S;
        function E(w, C) {
          (this.fn = w), (this.self = C), (this.next = void 0);
        }
        return {
          add: function (C, A) {
            (S = new E(C, A)),
              b ? (b.next = S) : (y = S),
              (b = S),
              (S = void 0);
          },
          drain: function () {
            var C = y;
            for (y = b = i = void 0; C; ) C.fn.call(C.self), (C = C.next);
          },
        };
      })();
      function o(v, y) {
        r.add(v, y), i || (i = a(r.drain));
      }
      function l(v) {
        var y,
          b = typeof v;
        return (
          v != null && (b == "object" || b == "function") && (y = v.then),
          typeof y == "function" ? y : !1
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
      function u(v, y, b) {
        var S, E;
        try {
          y === !1
            ? b.reject(v.msg)
            : (y === !0 ? (S = v.msg) : (S = y.call(void 0, v.msg)),
              S === b.promise
                ? b.reject(TypeError("Promise-chain cycle"))
                : (E = l(S))
                ? E.call(S, b.resolve, b.reject)
                : b.resolve(S));
        } catch (w) {
          b.reject(w);
        }
      }
      function d(v) {
        var y,
          b = this;
        if (!b.triggered) {
          (b.triggered = !0), b.def && (b = b.def);
          try {
            (y = l(v))
              ? o(function () {
                  var S = new m(b);
                  try {
                    y.call(
                      v,
                      function () {
                        d.apply(S, arguments);
                      },
                      function () {
                        f.apply(S, arguments);
                      }
                    );
                  } catch (E) {
                    f.call(S, E);
                  }
                })
              : ((b.msg = v), (b.state = 1), b.chain.length > 0 && o(c, b));
          } catch (S) {
            f.call(new m(b), S);
          }
        }
      }
      function f(v) {
        var y = this;
        y.triggered ||
          ((y.triggered = !0),
          y.def && (y = y.def),
          (y.msg = v),
          (y.state = 2),
          y.chain.length > 0 && o(c, y));
      }
      function h(v, y, b, S) {
        for (var E = 0; E < y.length; E++)
          (function (C) {
            v.resolve(y[C]).then(function (P) {
              b(C, P);
            }, S);
          })(E);
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
        var y = new p(this);
        (this.then = function (S, E) {
          var w = {
            success: typeof S == "function" ? S : !0,
            failure: typeof E == "function" ? E : !1,
          };
          return (
            (w.promise = new this.constructor(function (A, P) {
              if (typeof A != "function" || typeof P != "function")
                throw TypeError("Not a function");
              (w.resolve = A), (w.reject = P);
            })),
            y.chain.push(w),
            y.state !== 0 && o(c, y),
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
              d.call(y, S);
            },
            function (S) {
              f.call(y, S);
            }
          );
        } catch (b) {
          f.call(y, b);
        }
      }
      var _ = n({}, "constructor", g, !1);
      return (
        (g.prototype = _),
        n(_, "__NPO__", 0, !1),
        n(g, "resolve", function (y) {
          var b = this;
          return y && typeof y == "object" && y.__NPO__ === 1
            ? y
            : new b(function (E, w) {
                if (typeof E != "function" || typeof w != "function")
                  throw TypeError("Not a function");
                E(y);
              });
        }),
        n(g, "reject", function (y) {
          return new this(function (S, E) {
            if (typeof S != "function" || typeof E != "function")
              throw TypeError("Not a function");
            E(y);
          });
        }),
        n(g, "all", function (y) {
          var b = this;
          return s.call(y) != "[object Array]"
            ? b.reject(TypeError("Not an array"))
            : y.length === 0
            ? b.resolve([])
            : new b(function (E, w) {
                if (typeof E != "function" || typeof w != "function")
                  throw TypeError("Not a function");
                var C = y.length,
                  A = Array(C),
                  P = 0;
                h(
                  b,
                  y,
                  function (x, T) {
                    (A[x] = T), ++P === C && E(A);
                  },
                  w
                );
              });
        }),
        n(g, "race", function (y) {
          var b = this;
          return s.call(y) != "[object Array]"
            ? b.reject(TypeError("Not an array"))
            : new b(function (E, w) {
                if (typeof E != "function" || typeof w != "function")
                  throw TypeError("Not a function");
                h(
                  b,
                  y,
                  function (A, P) {
                    E(P);
                  },
                  w
                );
              });
        }),
        g
      );
    });
  }),
  $n = new WeakMap();
function Tr(t, e, n) {
  var i = $n.get(t.element) || {};
  e in i || (i[e] = []), i[e].push(n), $n.set(t.element, i);
}
function Ks(t, e) {
  var n = $n.get(t.element) || {};
  return n[e] || [];
}
function Zs(t, e, n) {
  var i = $n.get(t.element) || {};
  if (!i[e]) return !0;
  if (!n) return (i[e] = []), $n.set(t.element, i), !0;
  var r = i[e].indexOf(n);
  return (
    r !== -1 && i[e].splice(r, 1),
    $n.set(t.element, i),
    i[e] && i[e].length === 0
  );
}
function _f(t, e) {
  var n = Ks(t, e);
  if (n.length < 1) return !1;
  var i = n.shift();
  return Zs(t, e, i), i;
}
function bf(t, e) {
  var n = $n.get(t);
  $n.set(e, n), $n.delete(t);
}
function ga(t) {
  if (typeof t == "string")
    try {
      t = JSON.parse(t);
    } catch (e) {
      return console.warn(e), {};
    }
  return t;
}
function ui(t, e, n) {
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
function xf(t, e) {
  e = ga(e);
  var n = [],
    i;
  if (e.event) {
    if (e.event === "error") {
      var r = Ks(t, e.data.method);
      r.forEach(function (a) {
        var o = new Error(e.data.message);
        (o.name = e.data.name), a.reject(o), Zs(t, e.data.method, a);
      });
    }
    (n = Ks(t, "event:".concat(e.event))), (i = e.data);
  } else if (e.method) {
    var s = _f(t, e.method);
    s && (n.push(s), (i = e.value));
  }
  n.forEach(function (a) {
    try {
      if (typeof a == "function") {
        a.call(t, i);
        return;
      }
      a.resolve(i);
    } catch {}
  });
}
var Sf = [
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
function Jc(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Sf.reduce(function (n, i) {
    var r = t.getAttribute("data-vimeo-".concat(i));
    return (r || r === "") && (n[i] = r === "" ? 1 : r), n;
  }, e);
}
function qo(t, e) {
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
function eu(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 ? arguments[2] : void 0;
  return new Promise(function (i, r) {
    if (!Mi(t)) throw new TypeError("“".concat(t, "” is not a vimeo.com url."));
    var s = mf(t),
      a = "https://"
        .concat(s, "/api/oembed.json?url=")
        .concat(encodeURIComponent(t));
    for (var o in e)
      e.hasOwnProperty(o) &&
        (a += "&".concat(o, "=").concat(encodeURIComponent(e[o])));
    var l =
      "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
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
            qo(c, n), r(new Error("“".concat(t, "” is not embeddable.")));
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
function Tf() {
  var t =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document,
    e = [].slice.call(t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
    n = function (r) {
      "console" in window &&
        console.error &&
        console.error("There was an error creating an embed: ".concat(r));
    };
  e.forEach(function (i) {
    try {
      if (i.getAttribute("data-vimeo-defer") !== null) return;
      var r = Jc(i),
        s = Qc(r);
      eu(s, r, i)
        .then(function (a) {
          return qo(a, i);
        })
        .catch(n);
    } catch (a) {
      n(a);
    }
  });
}
function Ef() {
  var t =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoPlayerResizeEmbeds_) {
    window.VimeoPlayerResizeEmbeds_ = !0;
    var e = function (i) {
      if (Mi(i.origin) && !(!i.data || i.data.event !== "spacechange")) {
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
function wf() {
  var t =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoSeoMetadataAppended) {
    window.VimeoSeoMetadataAppended = !0;
    var e = function (i) {
      if (Mi(i.origin)) {
        var r = ga(i.data);
        if (!(!r || r.event !== "ready"))
          for (var s = t.querySelectorAll("iframe"), a = 0; a < s.length; a++) {
            var o = s[a],
              l = o.contentWindow === i.source;
            if (Zc(o.src) && l) {
              var c = new Nr(o);
              c.callMethod("appendVideoMetadata", window.location.href);
            }
          }
      }
    };
    window.addEventListener("message", e);
  }
}
function Cf() {
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
        if (Mi(r.origin)) {
          var s = ga(r.data);
          if (!(!s || s.event !== "ready"))
            for (
              var a = t.querySelectorAll("iframe"),
                o = function () {
                  var u = a[l],
                    d = u.contentWindow === r.source;
                  if (Zc(u.src) && d) {
                    var f = new Nr(u);
                    f.getVideoId()
                      .then(function (h) {
                        var m = new RegExp(
                          "[?&]vimeo_t_".concat(h, "=([^&#]*)")
                        ).exec(window.location.href);
                        if (m && m[1]) {
                          var p = decodeURI(m[1]);
                          f.setCurrentTime(p);
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
function Pf() {
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
var kf = {
    role: "viewer",
    autoPlayMuted: !0,
    allowedDrift: 0.3,
    maxAllowedDrift: 1,
    minCheckInterval: 0.1,
    maxRateAdjustment: 0.2,
    maxTimeToCatchUp: 1,
  },
  Mf = (function (t) {
    lf(n, t);
    var e = df(n);
    function n(i, r) {
      var s,
        a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        o = arguments.length > 3 ? arguments[3] : void 0;
      return (
        Xc(this, n),
        (s = e.call(this)),
        Is(Ds(s), "logger", void 0),
        Is(Ds(s), "speedAdjustment", 0),
        Is(
          Ds(s),
          "adjustSpeed",
          (function () {
            var l = hi(
              ht().mark(function c(u, d) {
                var f;
                return ht().wrap(function (m) {
                  for (;;)
                    switch ((m.prev = m.next)) {
                      case 0:
                        if (s.speedAdjustment !== d) {
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
                          (m.t3 = d),
                          (f = m.t2 + m.t3),
                          s.log("New playbackRate:  ".concat(f)),
                          (m.next = 12),
                          u.setPlaybackRate(f)
                        );
                      case 12:
                        s.speedAdjustment = d;
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
        s.init(r, i, Ol(Ol({}, kf), a)),
        s
      );
    }
    return (
      Gc(n, [
        {
          key: "disconnect",
          value: function () {
            this.dispatchEvent(new Event("disconnect"));
          },
        },
        {
          key: "init",
          value: (function () {
            var i = hi(
              ht().mark(function s(a, o, l) {
                var c = this,
                  u,
                  d,
                  f;
                return ht().wrap(
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
                          (u = zl(a, "change", function () {
                            return c.updatePlayer(a, o, l);
                          })),
                            (d = this.maintainPlaybackPosition(a, o, l)),
                            this.addEventListener("disconnect", function () {
                              d.cancel(), u.cancel();
                            }),
                            (m.next = 14);
                          break;
                        case 10:
                          return (m.next = 12), this.updateTimingObject(a, o);
                        case 12:
                          (f = zl(
                            o,
                            ["seeked", "play", "pause", "ratechange"],
                            function () {
                              return c.updateTimingObject(a, o);
                            },
                            "on",
                            "off"
                          )),
                            this.addEventListener("disconnect", function () {
                              return f.cancel();
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
            var i = hi(
              ht().mark(function s(a, o) {
                return ht().wrap(function (c) {
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
            var i = hi(
              ht().mark(function s(a, o, l) {
                var c, u, d;
                return ht().wrap(
                  function (h) {
                    for (;;)
                      switch ((h.prev = h.next)) {
                        case 0:
                          if (
                            ((c = a.query()),
                            (u = c.position),
                            (d = c.velocity),
                            typeof u == "number" && o.setCurrentTime(u),
                            typeof d != "number")
                          ) {
                            h.next = 25;
                            break;
                          }
                          if (d !== 0) {
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
                          if (!(d > 0)) {
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
                                var m = hi(
                                  ht().mark(function p(g) {
                                    return ht().wrap(function (v) {
                                      for (;;)
                                        switch ((v.prev = v.next)) {
                                          case 0:
                                            if (
                                              !(
                                                g.name === "NotAllowedError" &&
                                                l.autoPlayMuted
                                              )
                                            ) {
                                              v.next = 5;
                                              break;
                                            }
                                            return (v.next = 3), o.setMuted(!0);
                                          case 3:
                                            return (
                                              (v.next = 5),
                                              o.play().catch(function (y) {
                                                return console.error(
                                                  "Couldn't play the video from TimingSrcConnector. Error:",
                                                  y
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
                          if (((h.t2 = h.sent), (h.t3 = d), h.t2 === h.t3)) {
                            h.next = 25;
                            break;
                          }
                          o.setPlaybackRate(d);
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
              d = a.maxRateAdjustment,
              f = a.maxTimeToCatchUp,
              h = Math.min(f, Math.max(u, c)) * 1e3,
              m = (function () {
                var g = hi(
                  ht().mark(function _() {
                    var v, y, b, S, E;
                    return ht().wrap(function (C) {
                      for (;;)
                        switch ((C.prev = C.next)) {
                          case 0:
                            if (((C.t0 = r.query().velocity === 0), C.t0)) {
                              C.next = 6;
                              break;
                            }
                            return (C.next = 4), s.getPaused();
                          case 4:
                            (C.t1 = C.sent), (C.t0 = C.t1 === !0);
                          case 6:
                            if (!C.t0) {
                              C.next = 8;
                              break;
                            }
                            return C.abrupt("return");
                          case 8:
                            return (
                              (C.t2 = r.query().position),
                              (C.next = 11),
                              s.getCurrentTime()
                            );
                          case 11:
                            if (
                              ((C.t3 = C.sent),
                              (v = C.t2 - C.t3),
                              (y = Math.abs(v)),
                              o.log("Drift: ".concat(v)),
                              !(y > c))
                            ) {
                              C.next = 22;
                              break;
                            }
                            return (C.next = 18), o.adjustSpeed(s, 0);
                          case 18:
                            s.setCurrentTime(r.query().position),
                              o.log("Resync by currentTime"),
                              (C.next = 29);
                            break;
                          case 22:
                            if (!(y > l)) {
                              C.next = 29;
                              break;
                            }
                            return (
                              (b = y / f),
                              (S = d),
                              (E = b < S ? (S - b) / 2 : S),
                              (C.next = 28),
                              o.adjustSpeed(s, E * Math.sign(v))
                            );
                          case 28:
                            o.log("Resync by playbackRate");
                          case 29:
                          case "end":
                            return C.stop();
                        }
                    }, _);
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
  })(ro(EventTarget)),
  Vi = new WeakMap(),
  Ca = new WeakMap(),
  bt = {},
  Nr = (function () {
    function t(e) {
      var n = this,
        i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (
        (Xc(this, t),
        window.jQuery &&
          e instanceof jQuery &&
          (e.length > 1 &&
            window.console &&
            console.warn &&
            console.warn(
              "A jQuery object with multiple elements was passed, using the first element."
            ),
          (e = e[0])),
        typeof document < "u" &&
          typeof e == "string" &&
          (e = document.getElementById(e)),
        !hf(e))
      )
        throw new TypeError(
          "You must pass either a valid element or a valid id."
        );
      if (e.nodeName !== "IFRAME") {
        var r = e.querySelector("iframe");
        r && (e = r);
      }
      if (e.nodeName === "IFRAME" && !Mi(e.getAttribute("src") || ""))
        throw new Error("The player element passed isn’t a Vimeo embed.");
      if (Vi.has(e)) return Vi.get(e);
      (this._window = e.ownerDocument.defaultView),
        (this.element = e),
        (this.origin = "*");
      var s = new Ht(function (o, l) {
        if (
          ((n._onMessage = function (d) {
            if (!(!Mi(d.origin) || n.element.contentWindow !== d.source)) {
              n.origin === "*" && (n.origin = d.origin);
              var f = ga(d.data),
                h = f && f.event === "error",
                m = h && f.data && f.data.method === "ready";
              if (m) {
                var p = new Error(f.data.message);
                (p.name = f.data.name), l(p);
                return;
              }
              var g = f && f.event === "ready",
                _ = f && f.method === "ping";
              if (g || _) {
                n.element.setAttribute("data-ready", "true"), o();
                return;
              }
              xf(n, f);
            }
          }),
          n._window.addEventListener("message", n._onMessage),
          n.element.nodeName !== "IFRAME")
        ) {
          var c = Jc(e, i),
            u = Qc(c);
          eu(u, c, e)
            .then(function (d) {
              var f = qo(d, e);
              return (
                (n.element = f),
                (n._originalElement = e),
                bf(e, f),
                Vi.set(n.element, n),
                d
              );
            })
            .catch(l);
        }
      });
      if (
        (Ca.set(this, s),
        Vi.set(this.element, this),
        this.element.nodeName === "IFRAME" && ui(this, "ping"),
        bt.isEnabled)
      ) {
        var a = function () {
          return bt.exit();
        };
        (this.fullscreenchangeHandler = function () {
          bt.isFullscreen
            ? Tr(n, "event:exitFullscreen", a)
            : Zs(n, "event:exitFullscreen", a),
            n.ready().then(function () {
              ui(n, "fullscreenchange", bt.isFullscreen);
            });
        }),
          bt.on("fullscreenchange", this.fullscreenchangeHandler);
      }
      return this;
    }
    return (
      Gc(t, [
        {
          key: "callMethod",
          value: function (n) {
            var i = this,
              r =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
            return new Ht(function (s, a) {
              return i
                .ready()
                .then(function () {
                  Tr(i, n, { resolve: s, reject: a }), ui(i, n, r);
                })
                .catch(a);
            });
          },
        },
        {
          key: "get",
          value: function (n) {
            var i = this;
            return new Ht(function (r, s) {
              return (
                (n = Il(n, "get")),
                i
                  .ready()
                  .then(function () {
                    Tr(i, n, { resolve: r, reject: s }), ui(i, n);
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
            return new Ht(function (s, a) {
              if (((n = Il(n, "set")), i == null))
                throw new TypeError("There must be a value to set.");
              return r
                .ready()
                .then(function () {
                  Tr(r, n, { resolve: s, reject: a }), ui(r, n, i);
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
            var r = Ks(this, "event:".concat(n));
            r.length === 0 &&
              this.callMethod("addEventListener", n).catch(function () {}),
              Tr(this, "event:".concat(n), i);
          },
        },
        {
          key: "off",
          value: function (n, i) {
            if (!n) throw new TypeError("You must pass an event name.");
            if (i && typeof i != "function")
              throw new TypeError("The callback must be a function.");
            var r = Zs(this, "event:".concat(n), i);
            r &&
              this.callMethod("removeEventListener", n).catch(function (s) {});
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
              Ca.get(this) ||
              new Ht(function (i, r) {
                r(new Error("Unknown player. Probably unloaded."));
              });
            return Ht.resolve(n);
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
            return this.callMethod("enableTextTrack", { language: n, kind: i });
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
            return bt.isEnabled ? bt.exit() : this.callMethod("exitFullscreen");
          },
        },
        {
          key: "getFullscreen",
          value: function () {
            return bt.isEnabled
              ? Ht.resolve(bt.isFullscreen)
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
            return new Ht(function (i) {
              if (
                (Ca.delete(n),
                Vi.delete(n.element),
                n._originalElement &&
                  (Vi.delete(n._originalElement),
                  n._originalElement.removeAttribute("data-vimeo-initialized")),
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
                bt.isEnabled &&
                  bt.off("fullscreenchange", n.fullscreenchangeHandler),
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
            return Ht.all([
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
              return new Ht(function (s, a) {
                return a(new TypeError("Argument must be an array."));
              });
            var i = new Ht(function (s) {
                return s(null);
              }),
              r = [
                n[0] ? this.set("colorOne", n[0]) : i,
                n[1] ? this.set("colorTwo", n[1]) : i,
                n[2] ? this.set("colorThree", n[2]) : i,
                n[3] ? this.set("colorFour", n[3]) : i,
              ];
            return Ht.all(r);
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
            var e = hi(
              ht().mark(function i(r, s) {
                var a = this,
                  o;
                return ht().wrap(
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
                            (o = new Mf(this, r, s)),
                            ui(this, "notifyTimingObjectConnect"),
                            o.addEventListener("disconnect", function () {
                              return ui(a, "notifyTimingObjectDisconnect");
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
Kc || ((bt = Pf()), Tf(), Ef(), wf(), Cf());
class $f {
  constructor() {
    typeof Nr < "u"
      ? ((this.players = new Map()), (this.resizeTimeout = null), this.init())
      : console.error("Vimeo Player SDK not available");
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
    document.querySelectorAll("[data-vimeo-player-init]").forEach((n) => {
      const i = n.getAttribute("data-vimeo-active-video-id"),
        r = n.getAttribute("data-vimeo-video-id-mob"),
        s = n.getAttribute("data-vimeo-video-id"),
        a = this.shouldUseMobileVideo(),
        o = a && r ? r : s;
      if (o && i !== o) {
        console.log(
          `Switching from ${i} to ${o} (${a ? "mobile" : "desktop"} video)`
        );
        const l = n.getAttribute("id"),
          c = this.players.get(l);
        if (c) {
          let u = n.getAttribute("data-vimeo-playing") === "true",
            d = 0,
            f = n.getAttribute("data-vimeo-muted") === "true";
          c.getCurrentTime()
            .then((h) => {
              (d = h),
                c.unload(),
                this.players.delete(l),
                this.switchVideo(n, o, {
                  wasPlaying: u,
                  currentTime: d,
                  isMuted: f,
                });
            })
            .catch(() => {
              c.unload(),
                this.players.delete(l),
                this.switchVideo(n, o, {
                  wasPlaying: u,
                  currentTime: 0,
                  isMuted: f,
                });
            });
        }
      }
    });
  }
  switchVideo(e, n, i = {}) {
    const r = e.querySelector("iframe");
    if (!r) return;
    const s = `https://player.vimeo.com/video/${n}?api=1&background=1&autoplay=0&loop=0&muted=1`;
    r.setAttribute("src", s),
      e.setAttribute("data-vimeo-active-video-id", n),
      setTimeout(() => {
        this.initSinglePlayer(e, i);
      }, 500);
  }
  initSinglePlayer(e, n = {}) {
    const i = e.querySelector("iframe");
    if (i)
      try {
        const r = new Nr(i),
          s = e.getAttribute("id");
        this.players.set(s, r),
          r.ready().then(() => {
            n.currentTime && r.setCurrentTime(n.currentTime),
              n.isMuted !== void 0 && r.setVolume(n.isMuted ? 0 : 1),
              n.wasPlaying &&
                (r.play(), e.setAttribute("data-vimeo-playing", "true"));
          }),
          this.setupPlayerControls(e, r);
      } catch (r) {
        console.error("Error reinitializing Vimeo player:", r);
      }
  }
  initVimeoPlayer() {
    document.querySelectorAll("[data-vimeo-player-init]").forEach((n, i) => {
      try {
        const r = this.shouldUseMobileVideo(),
          s = n.getAttribute("data-vimeo-video-id-mob"),
          a = n.getAttribute("data-vimeo-video-id"),
          o = r && s ? s : a;
        if (!o) {
          console.error(
            "No video ID found for",
            r ? "mobile" : "desktop",
            "device"
          );
          return;
        }
        console.log(`Loading ${r && s ? "mobile" : "desktop"} video ID: ${o}`);
        const l = n.querySelector("iframe");
        if (!l) {
          console.error("No iframe found in vimeo player element", n);
          return;
        }
        const c = `https://player.vimeo.com/video/${o}?api=1&background=1&autoplay=0&loop=0&muted=1`;
        l.setAttribute("src", c),
          n.setAttribute("data-vimeo-active-video-id", o);
        const u = "vimeo-player-index-" + i;
        n.setAttribute("id", u);
        const d = new Nr(l);
        this.players.set(u, d), this.setupPlayerControls(n, d);
      } catch (r) {
        console.error("Error initializing Vimeo player:", r);
      }
    });
  }
  setupPlayerControls(e, n) {
    const i = e.id;
    if (
      (e.getAttribute("data-vimeo-update-size") === "true" &&
        n.getVideoWidth().then(function (b) {
          n.getVideoHeight().then(function (S) {
            const E = e.querySelector(".vimeo-player__before");
            E && (E.style.paddingTop = (S / b) * 100 + "%");
          });
        }),
      n.on("play", function () {
        e.setAttribute("data-vimeo-loaded", "true");
      }),
      e.getAttribute("data-vimeo-autoplay") === "false")
    )
      n.setVolume(1), n.pause();
    else if (
      (n.setVolume(0),
      e.setAttribute("data-vimeo-muted", "true"),
      e.getAttribute("data-vimeo-paused-by-user") === "false")
    ) {
      const b = () => {
        const S = e.getBoundingClientRect();
        S.top < window.innerHeight && S.bottom > 0 ? r() : s();
      };
      b(), window.addEventListener("scroll", b);
    }
    const r = () => {
        e.setAttribute("data-vimeo-activated", "true"),
          e.setAttribute("data-vimeo-playing", "true"),
          n.play();
      },
      s = () => {
        e.setAttribute("data-vimeo-playing", "false"), n.pause();
      },
      a = e.querySelector('[data-vimeo-control="play"]');
    a &&
      a.addEventListener("click", function () {
        n.setVolume(0),
          r(),
          e.getAttribute("data-vimeo-muted") === "true"
            ? n.setVolume(0)
            : n.setVolume(1);
      });
    const o = e.querySelector('[data-vimeo-control="pause"]');
    o &&
      o.addEventListener("click", function () {
        s(),
          e.getAttribute("data-vimeo-autoplay") === "true" &&
            (e.setAttribute("data-vimeo-paused-by-user", "true"),
            window.removeEventListener("scroll", checkVisibility));
      });
    const l = e.querySelector('[data-vimeo-control="mute"]');
    l &&
      l.addEventListener("click", function () {
        e.getAttribute("data-vimeo-muted") === "false"
          ? (n.setVolume(0), e.setAttribute("data-vimeo-muted", "true"))
          : (n.setVolume(1), e.setAttribute("data-vimeo-muted", "false"));
      });
    const c = !!(
        document.fullscreenEnabled ||
        document.webkitFullscreenEnabled ||
        document.mozFullScreenEnabled ||
        document.msFullscreenEnabled
      ),
      u = e.querySelector('[data-vimeo-control="fullscreen"]');
    !c && u && (u.style.display = "none"),
      u &&
        u.addEventListener("click", () => {
          const b = document.getElementById(i);
          if (!b) return;
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
                b.requestFullscreen ||
                b.webkitRequestFullscreen ||
                b.mozRequestFullScreen ||
                b.msRequestFullscreen
              ).call(b));
        });
    const d = () => {
      const b =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;
      e.setAttribute("data-vimeo-fullscreen", b ? "true" : "false");
    };
    [
      "fullscreenchange",
      "webkitfullscreenchange",
      "mozfullscreenchange",
      "msfullscreenchange",
    ].forEach((b) => {
      document.addEventListener(b, d);
    });
    function f(b) {
      let S = Math.floor(b / 3600);
      b -= S * 3600;
      let E = Math.floor(b / 60);
      return (b -= E * 60), E + ":" + (b < 10 ? "0" + b : b);
    }
    const h = e.querySelector("[data-vimeo-duration]");
    n.getDuration().then(function (b) {
      h && (h.textContent = f(b)),
        e
          .querySelectorAll('[data-vimeo-control="timeline"], progress')
          .forEach((E) => {
            E.setAttribute("max", b);
          });
    });
    const m = e.querySelector('[data-vimeo-control="timeline"]'),
      p = e.querySelector("progress");
    function g() {
      n.getDuration().then(function () {
        const b = m.value;
        n.setCurrentTime(b), p && (p.value = b);
      });
    }
    m &&
      ["input", "change"].forEach((b) => {
        m.addEventListener(b, g);
      }),
      n.on("timeupdate", function (b) {
        m && (m.value = b.seconds),
          p && (p.value = b.seconds),
          h && (h.textContent = f(Math.trunc(b.seconds)));
      });
    let _;
    e.addEventListener("mousemove", function () {
      e.getAttribute("data-vimeo-hover") === "false" &&
        e.setAttribute("data-vimeo-hover", "true"),
        clearTimeout(_),
        (_ = setTimeout(v, 3e3));
    });
    function v() {
      e.setAttribute("data-vimeo-hover", "false");
    }
    function y() {
      e.setAttribute("data-vimeo-activated", "false"),
        e.setAttribute("data-vimeo-playing", "false"),
        n.unload();
    }
    n.on("ended", y);
  }
}
const Af = () => {
  new $f();
};
function Dl(t) {
  return (
    t !== null &&
    typeof t == "object" &&
    "constructor" in t &&
    t.constructor === Object
  );
}
function Ho(t = {}, e = {}) {
  Object.keys(e).forEach((n) => {
    typeof t[n] > "u"
      ? (t[n] = e[n])
      : Dl(e[n]) && Dl(t[n]) && Object.keys(e[n]).length > 0 && Ho(t[n], e[n]);
  });
}
const tu = {
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
  const t = typeof document < "u" ? document : {};
  return Ho(t, tu), t;
}
const Of = {
  document: tu,
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
    return typeof setTimeout > "u" ? (t(), null) : setTimeout(t, 0);
  },
  cancelAnimationFrame(t) {
    typeof setTimeout > "u" || clearTimeout(t);
  },
};
function ge() {
  const t = typeof window < "u" ? window : {};
  return Ho(t, Of), t;
}
function Lf(t) {
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
    typeof e == "number" ? super(e) : (super(...(e || [])), Lf(this));
  }
}
function fs(t = []) {
  const e = [];
  return (
    t.forEach((n) => {
      Array.isArray(n) ? e.push(...fs(n)) : e.push(n);
    }),
    e
  );
}
function nu(t, e) {
  return Array.prototype.filter.call(t, e);
}
function If(t) {
  const e = [];
  for (let n = 0; n < t.length; n += 1) e.indexOf(t[n]) === -1 && e.push(t[n]);
  return e;
}
function zf(t, e) {
  if (typeof t != "string") return [t];
  const n = [],
    i = e.querySelectorAll(t);
  for (let r = 0; r < i.length; r += 1) n.push(i[r]);
  return n;
}
function N(t, e) {
  const n = ge(),
    i = Ve();
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
      for (let l = 0; l < o.childNodes.length; l += 1) r.push(o.childNodes[l]);
    } else r = zf(t.trim(), e || i);
  } else if (t.nodeType || t === n || t === i) r.push(t);
  else if (Array.isArray(t)) {
    if (t instanceof qn) return t;
    r = t;
  }
  return new qn(If(r));
}
N.fn = qn.prototype;
function Df(...t) {
  const e = fs(t.map((n) => n.split(" ")));
  return (
    this.forEach((n) => {
      n.classList.add(...e);
    }),
    this
  );
}
function Rf(...t) {
  const e = fs(t.map((n) => n.split(" ")));
  return (
    this.forEach((n) => {
      n.classList.remove(...e);
    }),
    this
  );
}
function Nf(...t) {
  const e = fs(t.map((n) => n.split(" ")));
  this.forEach((n) => {
    e.forEach((i) => {
      n.classList.toggle(i);
    });
  });
}
function Bf(...t) {
  const e = fs(t.map((n) => n.split(" ")));
  return (
    nu(this, (n) => e.filter((i) => n.classList.contains(i)).length > 0)
      .length > 0
  );
}
function Ff(t, e) {
  if (arguments.length === 1 && typeof t == "string")
    return this[0] ? this[0].getAttribute(t) : void 0;
  for (let n = 0; n < this.length; n += 1)
    if (arguments.length === 2) this[n].setAttribute(t, e);
    else for (const i in t) (this[n][i] = t[i]), this[n].setAttribute(i, t[i]);
  return this;
}
function Vf(t) {
  for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
  return this;
}
function qf(t) {
  for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
  return this;
}
function Hf(t) {
  for (let e = 0; e < this.length; e += 1)
    this[e].style.transitionDuration = typeof t != "string" ? `${t}ms` : t;
  return this;
}
function Wf(...t) {
  let [e, n, i, r] = t;
  typeof t[1] == "function" && (([e, i, r] = t), (n = void 0)), r || (r = !1);
  function s(c) {
    const u = c.target;
    if (!u) return;
    const d = c.target.dom7EventData || [];
    if ((d.indexOf(c) < 0 && d.unshift(c), N(u).is(n))) i.apply(u, d);
    else {
      const f = N(u).parents();
      for (let h = 0; h < f.length; h += 1) N(f[h]).is(n) && i.apply(f[h], d);
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
        const d = o[l];
        u.dom7LiveListeners || (u.dom7LiveListeners = {}),
          u.dom7LiveListeners[d] || (u.dom7LiveListeners[d] = []),
          u.dom7LiveListeners[d].push({ listener: i, proxyListener: s }),
          u.addEventListener(d, s, r);
      }
    else
      for (l = 0; l < o.length; l += 1) {
        const d = o[l];
        u.dom7Listeners || (u.dom7Listeners = {}),
          u.dom7Listeners[d] || (u.dom7Listeners[d] = []),
          u.dom7Listeners[d].push({ listener: i, proxyListener: a }),
          u.addEventListener(d, a, r);
      }
  }
  return this;
}
function Yf(...t) {
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
        for (let d = u.length - 1; d >= 0; d -= 1) {
          const f = u[d];
          (i && f.listener === i) ||
          (i &&
            f.listener &&
            f.listener.dom7proxy &&
            f.listener.dom7proxy === i)
            ? (c.removeEventListener(o, f.proxyListener, r), u.splice(d, 1))
            : i ||
              (c.removeEventListener(o, f.proxyListener, r), u.splice(d, 1));
        }
    }
  }
  return this;
}
function Xf(...t) {
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
function Gf(t) {
  const e = this;
  function n(i) {
    i.target === this && (t.call(this, i), e.off("transitionend", n));
  }
  return t && e.on("transitionend", n), this;
}
function jf(t) {
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
function Uf(t) {
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
function Kf() {
  if (this.length > 0) {
    const t = ge(),
      e = Ve(),
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
function Zf() {
  const t = ge();
  return this[0] ? t.getComputedStyle(this[0], null) : {};
}
function Qf(t, e) {
  const n = ge();
  let i;
  if (arguments.length === 1)
    if (typeof t == "string") {
      if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(t);
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
function Jf(t) {
  return t
    ? (this.forEach((e, n) => {
        t.apply(e, [e, n]);
      }),
      this)
    : this;
}
function eh(t) {
  const e = nu(this, t);
  return N(e);
}
function th(t) {
  if (typeof t > "u") return this[0] ? this[0].innerHTML : null;
  for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
  return this;
}
function nh(t) {
  if (typeof t > "u") return this[0] ? this[0].textContent.trim() : null;
  for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
  return this;
}
function ih(t) {
  const e = ge(),
    n = Ve(),
    i = this[0];
  let r, s;
  if (!i || typeof t > "u") return !1;
  if (typeof t == "string") {
    if (i.matches) return i.matches(t);
    if (i.webkitMatchesSelector) return i.webkitMatchesSelector(t);
    if (i.msMatchesSelector) return i.msMatchesSelector(t);
    for (r = N(t), s = 0; s < r.length; s += 1) if (r[s] === i) return !0;
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
function rh() {
  let t = this[0],
    e;
  if (t) {
    for (e = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (e += 1);
    return e;
  }
}
function sh(t) {
  if (typeof t > "u") return this;
  const e = this.length;
  if (t > e - 1) return N([]);
  if (t < 0) {
    const n = e + t;
    return n < 0 ? N([]) : N([this[n]]);
  }
  return N([this[t]]);
}
function ah(...t) {
  let e;
  const n = Ve();
  for (let i = 0; i < t.length; i += 1) {
    e = t[i];
    for (let r = 0; r < this.length; r += 1)
      if (typeof e == "string") {
        const s = n.createElement("div");
        for (s.innerHTML = e; s.firstChild; ) this[r].appendChild(s.firstChild);
      } else if (e instanceof qn)
        for (let s = 0; s < e.length; s += 1) this[r].appendChild(e[s]);
      else this[r].appendChild(e);
  }
  return this;
}
function oh(t) {
  const e = Ve();
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
function lh(t) {
  return this.length > 0
    ? t
      ? this[0].nextElementSibling && N(this[0].nextElementSibling).is(t)
        ? N([this[0].nextElementSibling])
        : N([])
      : this[0].nextElementSibling
      ? N([this[0].nextElementSibling])
      : N([])
    : N([]);
}
function ch(t) {
  const e = [];
  let n = this[0];
  if (!n) return N([]);
  for (; n.nextElementSibling; ) {
    const i = n.nextElementSibling;
    t ? N(i).is(t) && e.push(i) : e.push(i), (n = i);
  }
  return N(e);
}
function uh(t) {
  if (this.length > 0) {
    const e = this[0];
    return t
      ? e.previousElementSibling && N(e.previousElementSibling).is(t)
        ? N([e.previousElementSibling])
        : N([])
      : e.previousElementSibling
      ? N([e.previousElementSibling])
      : N([]);
  }
  return N([]);
}
function dh(t) {
  const e = [];
  let n = this[0];
  if (!n) return N([]);
  for (; n.previousElementSibling; ) {
    const i = n.previousElementSibling;
    t ? N(i).is(t) && e.push(i) : e.push(i), (n = i);
  }
  return N(e);
}
function fh(t) {
  const e = [];
  for (let n = 0; n < this.length; n += 1)
    this[n].parentNode !== null &&
      (t
        ? N(this[n].parentNode).is(t) && e.push(this[n].parentNode)
        : e.push(this[n].parentNode));
  return N(e);
}
function hh(t) {
  const e = [];
  for (let n = 0; n < this.length; n += 1) {
    let i = this[n].parentNode;
    for (; i; ) t ? N(i).is(t) && e.push(i) : e.push(i), (i = i.parentNode);
  }
  return N(e);
}
function ph(t) {
  let e = this;
  return typeof t > "u" ? N([]) : (e.is(t) || (e = e.parents(t).eq(0)), e);
}
function mh(t) {
  const e = [];
  for (let n = 0; n < this.length; n += 1) {
    const i = this[n].querySelectorAll(t);
    for (let r = 0; r < i.length; r += 1) e.push(i[r]);
  }
  return N(e);
}
function gh(t) {
  const e = [];
  for (let n = 0; n < this.length; n += 1) {
    const i = this[n].children;
    for (let r = 0; r < i.length; r += 1) (!t || N(i[r]).is(t)) && e.push(i[r]);
  }
  return N(e);
}
function vh() {
  for (let t = 0; t < this.length; t += 1)
    this[t].parentNode && this[t].parentNode.removeChild(this[t]);
  return this;
}
const Rl = {
  addClass: Df,
  removeClass: Rf,
  hasClass: Bf,
  toggleClass: Nf,
  attr: Ff,
  removeAttr: Vf,
  transform: qf,
  transition: Hf,
  on: Wf,
  off: Yf,
  trigger: Xf,
  transitionEnd: Gf,
  outerWidth: jf,
  outerHeight: Uf,
  styles: Zf,
  offset: Kf,
  css: Qf,
  each: Jf,
  html: th,
  text: nh,
  is: ih,
  index: rh,
  eq: sh,
  append: ah,
  prepend: oh,
  next: lh,
  nextAll: ch,
  prev: uh,
  prevAll: dh,
  parent: fh,
  parents: hh,
  closest: ph,
  find: mh,
  children: gh,
  filter: eh,
  remove: vh,
};
Object.keys(Rl).forEach((t) => {
  Object.defineProperty(N.fn, t, { value: Rl[t], writable: !0 });
});
function yh(t) {
  const e = t;
  Object.keys(e).forEach((n) => {
    try {
      e[n] = null;
    } catch {}
    try {
      delete e[n];
    } catch {}
  });
}
function Zn(t, e = 0) {
  return setTimeout(t, e);
}
function Lt() {
  return Date.now();
}
function _h(t) {
  const e = ge();
  let n;
  return (
    e.getComputedStyle && (n = e.getComputedStyle(t, null)),
    !n && t.currentStyle && (n = t.currentStyle),
    n || (n = t.style),
    n
  );
}
function so(t, e = "x") {
  const n = ge();
  let i, r, s;
  const a = _h(t);
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
function kr(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === "Object"
  );
}
function bh(t) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? t instanceof HTMLElement
    : t && (t.nodeType === 1 || t.nodeType === 11);
}
function $t(...t) {
  const e = Object(t[0]),
    n = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < t.length; i += 1) {
    const r = t[i];
    if (r != null && !bh(r)) {
      const s = Object.keys(Object(r)).filter((a) => n.indexOf(a) < 0);
      for (let a = 0, o = s.length; a < o; a += 1) {
        const l = s[a],
          c = Object.getOwnPropertyDescriptor(r, l);
        c !== void 0 &&
          c.enumerable &&
          (kr(e[l]) && kr(r[l])
            ? r[l].__swiper__
              ? (e[l] = r[l])
              : $t(e[l], r[l])
            : !kr(e[l]) && kr(r[l])
            ? ((e[l] = {}), r[l].__swiper__ ? (e[l] = r[l]) : $t(e[l], r[l]))
            : (e[l] = r[l]));
      }
    }
  }
  return e;
}
function Mr(t, e, n) {
  t.style.setProperty(e, n);
}
function iu({ swiper: t, targetPosition: e, side: n }) {
  const i = ge(),
    r = -t.translate;
  let s = null,
    a;
  const o = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const l = e > r ? "next" : "prev",
    c = (d, f) => (l === "next" && d >= f) || (l === "prev" && d <= f),
    u = () => {
      (a = new Date().getTime()), s === null && (s = a);
      const d = Math.max(Math.min((a - s) / o, 1), 0),
        f = 0.5 - Math.cos(d * Math.PI) / 2;
      let h = r + f * (e - r);
      if ((c(h, e) && (h = e), t.wrapperEl.scrollTo({ [n]: h }), c(h, e))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [n]: h });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(u);
    };
  u();
}
let Pa;
function xh() {
  const t = ge(),
    e = Ve();
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
      } catch {}
      return i;
    })(),
    gestures: (function () {
      return "ongesturestart" in t;
    })(),
  };
}
function ru() {
  return Pa || (Pa = xh()), Pa;
}
let ka;
function Sh({ userAgent: t } = {}) {
  const e = ru(),
    n = ge(),
    i = n.navigator.platform,
    r = t || n.navigator.userAgent,
    s = { ios: !1, android: !1 },
    a = n.screen.width,
    o = n.screen.height,
    l = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = r.match(/(iPad).*OS\s([\d_]+)/);
  const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    d = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    f = i === "Win32";
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
    l && !f && ((s.os = "android"), (s.android = !0)),
    (c || d || u) && ((s.os = "ios"), (s.ios = !0)),
    s
  );
}
function Th(t = {}) {
  return ka || (ka = Sh(t)), ka;
}
let Ma;
function Eh() {
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
function wh() {
  return Ma || (Ma = Eh()), Ma;
}
function Ch({ swiper: t, on: e, emit: n }) {
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
            const { width: d, height: f } = t;
            let h = d,
              m = f;
            u.forEach(({ contentBoxSize: p, contentRect: g, target: _ }) => {
              (_ && _ !== t.el) ||
                ((h = g ? g.width : (p[0] || p).inlineSize),
                (m = g ? g.height : (p[0] || p).blockSize));
            }),
              (h !== d || m !== f) && a();
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
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      o();
      return;
    }
    i.addEventListener("resize", a), i.addEventListener("orientationchange", c);
  }),
    e("destroy", () => {
      l(),
        i.removeEventListener("resize", a),
        i.removeEventListener("orientationchange", c);
    });
}
function Ph({ swiper: t, extendParams: e, on: n, emit: i }) {
  const r = [],
    s = ge(),
    a = (c, u = {}) => {
      const d = s.MutationObserver || s.WebkitMutationObserver,
        f = new d((h) => {
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
      f.observe(c, {
        attributes: typeof u.attributes > "u" ? !0 : u.attributes,
        childList: typeof u.childList > "u" ? !0 : u.childList,
        characterData: typeof u.characterData > "u" ? !0 : u.characterData,
      }),
        r.push(f);
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
const kh = {
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
    return n.eventsAnyListeners.indexOf(t) < 0 && n.eventsAnyListeners[i](t), n;
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
          typeof e > "u"
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
function Mh() {
  const t = this;
  let e, n;
  const i = t.$el;
  typeof t.params.width < "u" && t.params.width !== null
    ? (e = t.params.width)
    : (e = i[0].clientWidth),
    typeof t.params.height < "u" && t.params.height !== null
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
function $h() {
  const t = this;
  function e(P) {
    return t.isHorizontal()
      ? P
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[P];
  }
  function n(P, $) {
    return parseFloat(P.getPropertyValue(e($)) || 0);
  }
  const i = t.params,
    { $wrapperEl: r, size: s, rtlTranslate: a, wrongRTL: o } = t,
    l = t.virtual && i.virtual.enabled,
    c = l ? t.virtual.slides.length : t.slides.length,
    u = r.children(`.${t.params.slideClass}`),
    d = l ? t.virtual.slides.length : u.length;
  let f = [];
  const h = [],
    m = [];
  let p = i.slidesOffsetBefore;
  typeof p == "function" && (p = i.slidesOffsetBefore.call(t));
  let g = i.slidesOffsetAfter;
  typeof g == "function" && (g = i.slidesOffsetAfter.call(t));
  const _ = t.snapGrid.length,
    v = t.slidesGrid.length;
  let y = i.spaceBetween,
    b = -p,
    S = 0,
    E = 0;
  if (typeof s > "u") return;
  typeof y == "string" &&
    y.indexOf("%") >= 0 &&
    (y = (parseFloat(y.replace("%", "")) / 100) * s),
    (t.virtualSize = -y),
    a
      ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" })
      : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
    i.centeredSlides &&
      i.cssMode &&
      (Mr(t.wrapperEl, "--swiper-centered-offset-before", ""),
      Mr(t.wrapperEl, "--swiper-centered-offset-after", ""));
  const w = i.grid && i.grid.rows > 1 && t.grid;
  w && t.grid.initSlides(d);
  let C;
  const A =
    i.slidesPerView === "auto" &&
    i.breakpoints &&
    Object.keys(i.breakpoints).filter(
      (P) => typeof i.breakpoints[P].slidesPerView < "u"
    ).length > 0;
  for (let P = 0; P < d; P += 1) {
    C = 0;
    const $ = u.eq(P);
    if ((w && t.grid.updateSlide(P, $, d, e), $.css("display") !== "none")) {
      if (i.slidesPerView === "auto") {
        A && (u[P].style[e("width")] = "");
        const x = getComputedStyle($[0]),
          T = $[0].style.transform,
          O = $[0].style.webkitTransform;
        if (
          (T && ($[0].style.transform = "none"),
          O && ($[0].style.webkitTransform = "none"),
          i.roundLengths)
        )
          C = t.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
        else {
          const L = n(x, "width"),
            k = n(x, "padding-left"),
            I = n(x, "padding-right"),
            z = n(x, "margin-left"),
            B = n(x, "margin-right"),
            M = x.getPropertyValue("box-sizing");
          if (M && M === "border-box") C = L + z + B;
          else {
            const { clientWidth: q, offsetWidth: X } = $[0];
            C = L + k + I + z + B + (X - q);
          }
        }
        T && ($[0].style.transform = T),
          O && ($[0].style.webkitTransform = O),
          i.roundLengths && (C = Math.floor(C));
      } else
        (C = (s - (i.slidesPerView - 1) * y) / i.slidesPerView),
          i.roundLengths && (C = Math.floor(C)),
          u[P] && (u[P].style[e("width")] = `${C}px`);
      u[P] && (u[P].swiperSlideSize = C),
        m.push(C),
        i.centeredSlides
          ? ((b = b + C / 2 + S / 2 + y),
            S === 0 && P !== 0 && (b = b - s / 2 - y),
            P === 0 && (b = b - s / 2 - y),
            Math.abs(b) < 1 / 1e3 && (b = 0),
            i.roundLengths && (b = Math.floor(b)),
            E % i.slidesPerGroup === 0 && f.push(b),
            h.push(b))
          : (i.roundLengths && (b = Math.floor(b)),
            (E - Math.min(t.params.slidesPerGroupSkip, E)) %
              t.params.slidesPerGroup ===
              0 && f.push(b),
            h.push(b),
            (b = b + C + y)),
        (t.virtualSize += C + y),
        (S = C),
        (E += 1);
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
    w && t.grid.updateWrapperSize(C, f, e),
    !i.centeredSlides)
  ) {
    const P = [];
    for (let $ = 0; $ < f.length; $ += 1) {
      let x = f[$];
      i.roundLengths && (x = Math.floor(x)),
        f[$] <= t.virtualSize - s && P.push(x);
    }
    (f = P),
      Math.floor(t.virtualSize - s) - Math.floor(f[f.length - 1]) > 1 &&
        f.push(t.virtualSize - s);
  }
  if ((f.length === 0 && (f = [0]), i.spaceBetween !== 0)) {
    const P = t.isHorizontal() && a ? "marginLeft" : e("marginRight");
    u.filter(($, x) => (i.cssMode ? x !== u.length - 1 : !0)).css({
      [P]: `${y}px`,
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let P = 0;
    m.forEach((x) => {
      P += x + (i.spaceBetween ? i.spaceBetween : 0);
    }),
      (P -= i.spaceBetween);
    const $ = P - s;
    f = f.map((x) => (x < 0 ? -p : x > $ ? $ + g : x));
  }
  if (i.centerInsufficientSlides) {
    let P = 0;
    if (
      (m.forEach(($) => {
        P += $ + (i.spaceBetween ? i.spaceBetween : 0);
      }),
      (P -= i.spaceBetween),
      P < s)
    ) {
      const $ = (s - P) / 2;
      f.forEach((x, T) => {
        f[T] = x - $;
      }),
        h.forEach((x, T) => {
          h[T] = x + $;
        });
    }
  }
  if (
    (Object.assign(t, {
      slides: u,
      snapGrid: f,
      slidesGrid: h,
      slidesSizesGrid: m,
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
  ) {
    Mr(t.wrapperEl, "--swiper-centered-offset-before", `${-f[0]}px`),
      Mr(
        t.wrapperEl,
        "--swiper-centered-offset-after",
        `${t.size / 2 - m[m.length - 1] / 2}px`
      );
    const P = -t.snapGrid[0],
      $ = -t.slidesGrid[0];
    (t.snapGrid = t.snapGrid.map((x) => x + P)),
      (t.slidesGrid = t.slidesGrid.map((x) => x + $));
  }
  if (
    (d !== c && t.emit("slidesLengthChange"),
    f.length !== _ &&
      (t.params.watchOverflow && t.checkOverflow(),
      t.emit("snapGridLengthChange")),
    h.length !== v && t.emit("slidesGridLengthChange"),
    i.watchSlidesProgress && t.updateSlidesOffset(),
    !l && !i.cssMode && (i.effect === "slide" || i.effect === "fade"))
  ) {
    const P = `${i.containerModifierClass}backface-hidden`,
      $ = t.$el.hasClass(P);
    d <= i.maxBackfaceHiddenSlides
      ? $ || t.$el.addClass(P)
      : $ && t.$el.removeClass(P);
  }
}
function Ah(t) {
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
      (e.visibleSlides || N([])).each((o) => {
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
    if (typeof n[s] < "u") {
      const o = n[s].offsetHeight;
      r = o > r ? o : r;
    }
  (r || r === 0) && e.$wrapperEl.css("height", `${r}px`);
}
function Oh() {
  const t = this,
    e = t.slides;
  for (let n = 0; n < e.length; n += 1)
    e[n].swiperSlideOffset = t.isHorizontal()
      ? e[n].offsetLeft
      : e[n].offsetTop;
}
function Lh(t = (this && this.translate) || 0) {
  const e = this,
    n = e.params,
    { slides: i, rtlTranslate: r, snapGrid: s } = e;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
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
      d =
        (a - s[0] + (n.centeredSlides ? e.minTranslate() : 0) - c) /
        (l.swiperSlideSize + n.spaceBetween),
      f = -(a - c),
      h = f + e.slidesSizesGrid[o];
    ((f >= 0 && f < e.size - 1) ||
      (h > 1 && h <= e.size) ||
      (f <= 0 && h >= e.size)) &&
      (e.visibleSlides.push(l),
      e.visibleSlidesIndexes.push(o),
      i.eq(o).addClass(n.slideVisibleClass)),
      (l.progress = r ? -u : u),
      (l.originalProgress = r ? -d : d);
  }
  e.visibleSlides = N(e.visibleSlides);
}
function Ih(t) {
  const e = this;
  if (typeof t > "u") {
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
function zh() {
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
              }[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`
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
              }[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`
            )
            .addClass(n.slideDuplicatePrevClass)),
    t.emitSlidesClasses();
}
function Dh(t) {
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
  if (typeof c > "u") {
    for (let f = 0; f < i.length; f += 1)
      typeof i[f + 1] < "u"
        ? n >= i[f] && n < i[f + 1] - (i[f + 1] - i[f]) / 2
          ? (c = f)
          : n >= i[f] && n < i[f + 1] && (c = f + 1)
        : n >= i[f] && (c = f);
    s.normalizeSlideIndex && (c < 0 || typeof c > "u") && (c = 0);
  }
  if (r.indexOf(n) >= 0) u = r.indexOf(n);
  else {
    const f = Math.min(s.slidesPerGroupSkip, c);
    u = f + Math.floor((c - f) / s.slidesPerGroup);
  }
  if ((u >= r.length && (u = r.length - 1), c === a)) {
    u !== l && ((e.snapIndex = u), e.emit("snapIndexChange"));
    return;
  }
  const d = parseInt(e.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
  Object.assign(e, {
    snapIndex: u,
    realIndex: d,
    previousIndex: a,
    activeIndex: c,
  }),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    o !== d && e.emit("realIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange");
}
function Rh(t) {
  const e = this,
    n = e.params,
    i = N(t).closest(`.${n.slideClass}`)[0];
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
        ? (e.clickedIndex = parseInt(N(i).attr("data-swiper-slide-index"), 10))
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
const Nh = {
  updateSize: Mh,
  updateSlides: $h,
  updateAutoHeight: Ah,
  updateSlidesOffset: Oh,
  updateSlidesProgress: Lh,
  updateProgress: Ih,
  updateSlidesClasses: zh,
  updateActiveIndex: Dh,
  updateClickedSlide: Rh,
};
function Bh(t = this.isHorizontal() ? "x" : "y") {
  const e = this,
    { params: n, rtlTranslate: i, translate: r, $wrapperEl: s } = e;
  if (n.virtualTranslate) return i ? -r : r;
  if (n.cssMode) return r;
  let a = so(s[0], t);
  return i && (a = -a), a || 0;
}
function Fh(t, e) {
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
  let d;
  const f = n.maxTranslate() - n.minTranslate();
  f === 0 ? (d = 0) : (d = (t - n.minTranslate()) / f),
    d !== o && n.updateProgress(t),
    n.emit("setTranslate", n.translate, e);
}
function Vh() {
  return -this.snapGrid[0];
}
function qh() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Hh(t = 0, e = this.params.speed, n = !0, i = !0, r) {
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
    const d = s.isHorizontal();
    if (e === 0) o[d ? "scrollLeft" : "scrollTop"] = -u;
    else {
      if (!s.support.smoothScroll)
        return (
          iu({ swiper: s, targetPosition: -u, side: d ? "left" : "top" }), !0
        );
      o.scrollTo({ [d ? "left" : "top"]: -u, behavior: "smooth" });
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
        n && (s.emit("beforeTransitionStart", e, r), s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (f) {
              !s ||
                s.destroyed ||
                (f.target === this &&
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
const Wh = {
  getTranslate: Bh,
  setTranslate: Fh,
  minTranslate: Vh,
  maxTranslate: qh,
  translateTo: Hh,
};
function Yh(t, e) {
  const n = this;
  n.params.cssMode || n.$wrapperEl.transition(t), n.emit("setTransition", t, e);
}
function su({ swiper: t, runCallbacks: e, direction: n, step: i }) {
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
function Xh(t = !0, e) {
  const n = this,
    { params: i } = n;
  i.cssMode ||
    (i.autoHeight && n.updateAutoHeight(),
    su({ swiper: n, runCallbacks: t, direction: e, step: "Start" }));
}
function Gh(t = !0, e) {
  const n = this,
    { params: i } = n;
  (n.animating = !1),
    !i.cssMode &&
      (n.setTransition(0),
      su({ swiper: n, runCallbacks: t, direction: e, step: "End" }));
}
const jh = { setTransition: Yh, transitionStart: Xh, transitionEnd: Gh };
function Uh(t = 0, e = this.params.speed, n = !0, i, r) {
  if (typeof t != "number" && typeof t != "string")
    throw new Error(
      `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof t}] given.`
    );
  if (typeof t == "string") {
    const y = parseInt(t, 10);
    if (!isFinite(y))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`
      );
    t = y;
  }
  const s = this;
  let a = t;
  a < 0 && (a = 0);
  const {
    params: o,
    snapGrid: l,
    slidesGrid: c,
    previousIndex: u,
    activeIndex: d,
    rtlTranslate: f,
    wrapperEl: h,
    enabled: m,
  } = s;
  if ((s.animating && o.preventInteractionOnTransition) || (!m && !i && !r))
    return !1;
  const p = Math.min(s.params.slidesPerGroupSkip, a);
  let g = p + Math.floor((a - p) / s.params.slidesPerGroup);
  g >= l.length && (g = l.length - 1);
  const _ = -l[g];
  if (o.normalizeSlideIndex)
    for (let y = 0; y < c.length; y += 1) {
      const b = -Math.floor(_ * 100),
        S = Math.floor(c[y] * 100),
        E = Math.floor(c[y + 1] * 100);
      typeof c[y + 1] < "u"
        ? b >= S && b < E - (E - S) / 2
          ? (a = y)
          : b >= S && b < E && (a = y + 1)
        : b >= S && (a = y);
    }
  if (
    s.initialized &&
    a !== d &&
    ((!s.allowSlideNext && _ < s.translate && _ < s.minTranslate()) ||
      (!s.allowSlidePrev &&
        _ > s.translate &&
        _ > s.maxTranslate() &&
        (d || 0) !== a))
  )
    return !1;
  a !== (u || 0) && n && s.emit("beforeSlideChangeStart"), s.updateProgress(_);
  let v;
  if (
    (a > d ? (v = "next") : a < d ? (v = "prev") : (v = "reset"),
    (f && -_ === s.translate) || (!f && _ === s.translate))
  )
    return (
      s.updateActiveIndex(a),
      o.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      o.effect !== "slide" && s.setTranslate(_),
      v !== "reset" && (s.transitionStart(n, v), s.transitionEnd(n, v)),
      !1
    );
  if (o.cssMode) {
    const y = s.isHorizontal(),
      b = f ? _ : -_;
    if (e === 0) {
      const S = s.virtual && s.params.virtual.enabled;
      S &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        (h[y ? "scrollLeft" : "scrollTop"] = b),
        S &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""),
              (s._swiperImmediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll)
        return (
          iu({ swiper: s, targetPosition: b, side: y ? "left" : "top" }), !0
        );
      h.scrollTo({ [y ? "left" : "top"]: b, behavior: "smooth" });
    }
    return !0;
  }
  return (
    s.setTransition(e),
    s.setTranslate(_),
    s.updateActiveIndex(a),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", e, i),
    s.transitionStart(n, v),
    e === 0
      ? s.transitionEnd(n, v)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (b) {
            !s ||
              s.destroyed ||
              (b.target === this &&
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
function Kh(t = 0, e = this.params.speed, n = !0, i) {
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
function Zh(t = this.params.speed, e = !0, n) {
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
function Qh(t = this.params.speed, e = !0, n) {
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
  function d(g) {
    return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g);
  }
  const f = d(u),
    h = a.map((g) => d(g));
  let m = a[h.indexOf(f) - 1];
  if (typeof m > "u" && r.cssMode) {
    let g;
    a.forEach((_, v) => {
      f >= _ && (g = v);
    }),
      typeof g < "u" && (m = a[g > 0 ? g - 1 : g]);
  }
  let p = 0;
  if (
    (typeof m < "u" &&
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
function Jh(t = this.params.speed, e = !0, n) {
  const i = this;
  return i.slideTo(i.activeIndex, t, e, n);
}
function ep(t = this.params.speed, e = !0, n, i = 0.5) {
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
function tp() {
  const t = this,
    { params: e, $wrapperEl: n } = t,
    i = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
  let r = t.clickedIndex,
    s;
  if (e.loop) {
    if (t.animating) return;
    (s = parseInt(N(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
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
            Zn(() => {
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
          Zn(() => {
            t.slideTo(r);
          }))
        : t.slideTo(r);
  } else t.slideTo(r);
}
const np = {
  slideTo: Uh,
  slideToLoop: Kh,
  slideNext: Zh,
  slidePrev: Qh,
  slideReset: Jh,
  slideToClosest: ep,
  slideToClickedSlide: tp,
};
function ip() {
  const t = this,
    e = Ve(),
    { params: n, $wrapperEl: i } = t,
    r = i.children().length > 0 ? N(i.children()[0].parentNode) : i;
  r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
  let s = r.children(`.${n.slideClass}`);
  if (n.loopFillGroupWithBlank) {
    const l = n.slidesPerGroup - (s.length % n.slidesPerGroup);
    if (l !== n.slidesPerGroup) {
      for (let c = 0; c < l; c += 1) {
        const u = N(e.createElement("div")).addClass(
          `${n.slideClass} ${n.slideBlankClass}`
        );
        r.append(u);
      }
      s = r.children(`.${n.slideClass}`);
    }
  }
  n.slidesPerView === "auto" && !n.loopedSlides && (n.loopedSlides = s.length),
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
    N(l).attr("data-swiper-slide-index", c);
  });
  for (let l = 0; l < t.loopedSlides; l += 1) {
    const c = l - Math.floor(l / s.length) * s.length;
    o.push(s.eq(c)[0]), a.unshift(s.eq(s.length - c - 1)[0]);
  }
  for (let l = 0; l < o.length; l += 1)
    r.append(N(o[l].cloneNode(!0)).addClass(n.slideDuplicateClass));
  for (let l = a.length - 1; l >= 0; l -= 1)
    r.prepend(N(a[l].cloneNode(!0)).addClass(n.slideDuplicateClass));
}
function rp() {
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
function sp() {
  const t = this,
    { $wrapperEl: e, params: n, slides: i } = t;
  e
    .children(
      `.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`
    )
    .remove(),
    i.removeAttr("data-swiper-slide-index");
}
const ap = { loopCreate: ip, loopFix: rp, loopDestroy: sp };
function op(t) {
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
function lp() {
  const t = this;
  t.support.touch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode ||
    (t[
      t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = "");
}
const cp = { setGrabCursor: op, unsetGrabCursor: lp };
function up(t, e = this) {
  function n(i) {
    if (!i || i === Ve() || i === ge()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const r = i.closest(t);
    return !r && !i.getRootNode ? null : r || n(i.getRootNode().host);
  }
  return n(e);
}
function dp(t) {
  const e = this,
    n = Ve(),
    i = ge(),
    r = e.touchEventsData,
    { params: s, touches: a, enabled: o } = e;
  if (!o || (e.animating && s.preventInteractionOnTransition)) return;
  !e.animating && s.cssMode && s.loop && e.loopFix();
  let l = t;
  l.originalEvent && (l = l.originalEvent);
  let c = N(l.target);
  if (
    (s.touchEventsTarget === "wrapper" && !c.closest(e.wrapperEl).length) ||
    ((r.isTouchEvent = l.type === "touchstart"),
    !r.isTouchEvent && "which" in l && l.which === 3) ||
    (!r.isTouchEvent && "button" in l && l.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return;
  const u = !!s.noSwipingClass && s.noSwipingClass !== "",
    d = t.composedPath ? t.composedPath() : t.path;
  u && l.target && l.target.shadowRoot && d && (c = N(d[0]));
  const f = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    h = !!(l.target && l.target.shadowRoot);
  if (s.noSwiping && (h ? up(f, c[0]) : c.closest(f)[0])) {
    e.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !c.closest(s.swipeHandler)[0]) return;
  (a.currentX = l.type === "touchstart" ? l.targetTouches[0].pageX : l.pageX),
    (a.currentY = l.type === "touchstart" ? l.targetTouches[0].pageY : l.pageY);
  const m = a.currentX,
    p = a.currentY,
    g = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
    _ = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
  if (g && (m <= _ || m >= i.innerWidth - _))
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
    (r.touchStartTime = Lt()),
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
        N(n.activeElement).is(r.focusableElements) &&
        n.activeElement !== c[0] &&
        n.activeElement.blur();
    const y = v && e.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || y) &&
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
function fp(t) {
  const e = Ve(),
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
    d = l.type === "touchmove" ? c.pageY : l.pageY;
  if (l.preventedByNestedSwiper) {
    (s.startX = u), (s.startY = d);
    return;
  }
  if (!n.allowTouchMove) {
    N(l.target).is(i.focusableElements) || (n.allowClick = !1),
      i.isTouched &&
        (Object.assign(s, { startX: u, startY: d, currentX: u, currentY: d }),
        (i.touchStartTime = Lt()));
    return;
  }
  if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
    if (n.isVertical()) {
      if (
        (d < s.startY && n.translate <= n.maxTranslate()) ||
        (d > s.startY && n.translate >= n.minTranslate())
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
    N(l.target).is(i.focusableElements)
  ) {
    (i.isMoved = !0), (n.allowClick = !1);
    return;
  }
  if (
    (i.allowTouchCallbacks && n.emit("touchMove", l),
    l.targetTouches && l.targetTouches.length > 1)
  )
    return;
  (s.currentX = u), (s.currentY = d);
  const f = s.currentX - s.startX,
    h = s.currentY - s.startY;
  if (n.params.threshold && Math.sqrt(f ** 2 + h ** 2) < n.params.threshold)
    return;
  if (typeof i.isScrolling > "u") {
    let _;
    (n.isHorizontal() && s.currentY === s.startY) ||
    (n.isVertical() && s.currentX === s.startX)
      ? (i.isScrolling = !1)
      : f * f + h * h >= 25 &&
        ((_ = (Math.atan2(Math.abs(h), Math.abs(f)) * 180) / Math.PI),
        (i.isScrolling = n.isHorizontal()
          ? _ > r.touchAngle
          : 90 - _ > r.touchAngle));
  }
  if (
    (i.isScrolling && n.emit("touchMoveOpposite", l),
    typeof i.startMoving > "u" &&
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
      n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
      (i.allowMomentumBounce = !1),
      r.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", l)),
    n.emit("sliderMove", l),
    (i.isMoved = !0);
  let m = n.isHorizontal() ? f : h;
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
            (-n.minTranslate() + i.startTranslate + m) ** g))
      : m < 0 &&
        i.currentTranslate < n.maxTranslate() &&
        ((p = !1),
        r.resistance &&
          (i.currentTranslate =
            n.maxTranslate() +
            1 -
            (n.maxTranslate() - i.startTranslate - m) ** g)),
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
function hp(t) {
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
  const c = Lt(),
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
    ((n.lastClickTime = Lt()),
    Zn(() => {
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
  let d;
  if (
    (i.followFinger
      ? (d = s ? e.translate : -e.translate)
      : (d = -n.currentTranslate),
    i.cssMode)
  )
    return;
  if (e.params.freeMode && i.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: d });
    return;
  }
  let f = 0,
    h = e.slidesSizesGrid[0];
  for (
    let v = 0;
    v < a.length;
    v += v < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const y = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof a[v + y] < "u"
      ? d >= a[v] && d < a[v + y] && ((f = v), (h = a[v + y] - a[v]))
      : d >= a[v] && ((f = v), (h = a[a.length - 1] - a[a.length - 2]));
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
  const g = (d - a[f]) / h,
    _ = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (u > i.longSwipesMs) {
    if (!i.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (g >= i.longSwipesRatio
        ? e.slideTo(i.rewind && e.isEnd ? m : f + _)
        : e.slideTo(f)),
      e.swipeDirection === "prev" &&
        (g > 1 - i.longSwipesRatio
          ? e.slideTo(f + _)
          : p !== null && g < 0 && Math.abs(g) > i.longSwipesRatio
          ? e.slideTo(p)
          : e.slideTo(f));
  } else {
    if (!i.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (l.target === e.navigation.nextEl || l.target === e.navigation.prevEl)
      ? l.target === e.navigation.nextEl
        ? e.slideTo(f + _)
        : e.slideTo(f)
      : (e.swipeDirection === "next" && e.slideTo(m !== null ? m : f + _),
        e.swipeDirection === "prev" && e.slideTo(p !== null ? p : f));
  }
}
function Nl() {
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
function pp(t) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && t.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (t.stopPropagation(), t.stopImmediatePropagation())));
}
function mp() {
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
let Bl = !1;
function gp() {}
const au = (t, e) => {
  const n = Ve(),
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
    d = e;
  if (!l.touch)
    s[u](r.start, t.onTouchStart, !1),
      n[u](r.move, t.onTouchMove, c),
      n[u](r.end, t.onTouchEnd, !1);
  else {
    const f =
      r.start === "touchstart" && l.passiveListener && i.passiveListeners
        ? { passive: !0, capture: !1 }
        : !1;
    s[u](r.start, t.onTouchStart, f),
      s[u](
        r.move,
        t.onTouchMove,
        l.passiveListener ? { passive: !1, capture: c } : c
      ),
      s[u](r.end, t.onTouchEnd, f),
      r.cancel && s[u](r.cancel, t.onTouchEnd, f);
  }
  (i.preventClicks || i.preventClicksPropagation) &&
    s[u]("click", t.onClick, !0),
    i.cssMode && a[u]("scroll", t.onScroll),
    i.updateOnWindowResize
      ? t[d](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Nl,
          !0
        )
      : t[d]("observerUpdate", Nl, !0);
};
function vp() {
  const t = this,
    e = Ve(),
    { params: n, support: i } = t;
  (t.onTouchStart = dp.bind(t)),
    (t.onTouchMove = fp.bind(t)),
    (t.onTouchEnd = hp.bind(t)),
    n.cssMode && (t.onScroll = mp.bind(t)),
    (t.onClick = pp.bind(t)),
    i.touch && !Bl && (e.addEventListener("touchstart", gp), (Bl = !0)),
    au(t, "on");
}
function yp() {
  au(this, "off");
}
const _p = { attachEvents: vp, detachEvents: yp },
  Fl = (t, e) => t.grid && e.grid && e.grid.rows > 1;
function bp() {
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
    u = Fl(t, r),
    d = Fl(t, c),
    f = r.enabled;
  u && !d
    ? (s.removeClass(
        `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
      ),
      t.emitContainerClasses())
    : !u &&
      d &&
      (s.addClass(`${r.containerModifierClass}grid`),
      ((c.grid.fill && c.grid.fill === "column") ||
        (!c.grid.fill && r.grid.fill === "column")) &&
        s.addClass(`${r.containerModifierClass}grid-column`),
      t.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((g) => {
      const _ = r[g] && r[g].enabled,
        v = c[g] && c[g].enabled;
      _ && !v && t[g].disable(), !_ && v && t[g].enable();
    });
  const h = c.direction && c.direction !== r.direction,
    m = r.loop && (c.slidesPerView !== r.slidesPerView || h);
  h && n && t.changeDirection(), $t(t.params, c);
  const p = t.params.enabled;
  Object.assign(t, {
    allowTouchMove: t.params.allowTouchMove,
    allowSlideNext: t.params.allowSlideNext,
    allowSlidePrev: t.params.allowSlidePrev,
  }),
    f && !p ? t.disable() : !f && p && t.enable(),
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
function xp(t, e = "window", n) {
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
const Sp = { setBreakpoint: bp, getBreakpoint: xp };
function Tp(t, e) {
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
function Ep() {
  const t = this,
    { classNames: e, params: n, rtl: i, $el: r, device: s, support: a } = t,
    o = Tp(
      [
        "initialized",
        n.direction,
        { "pointer-events": !a.touch },
        { "free-mode": t.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: i },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
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
function wp() {
  const t = this,
    { $el: e, classNames: n } = t;
  e.removeClass(n.join(" ")), t.emitContainerClasses();
}
const Cp = { addClasses: Ep, removeClasses: wp };
function Pp(t, e, n, i, r, s) {
  const a = ge();
  let o;
  function l() {
    s && s();
  }
  !N(t).parent("picture")[0] && (!t.complete || !r) && e
    ? ((o = new a.Image()),
      (o.onload = l),
      (o.onerror = l),
      i && (o.sizes = i),
      n && (o.srcset = n),
      e && (o.src = e))
    : l();
}
function kp() {
  const t = this;
  t.imagesToLoad = t.$el.find("img");
  function e() {
    typeof t > "u" ||
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
const Mp = { loadImage: Pp, preloadImages: kp };
function $p() {
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
const Ap = { checkOverflow: $p },
  Vl = {
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
function Op(t, e) {
  return function (i = {}) {
    const r = Object.keys(i)[0],
      s = i[r];
    if (typeof s != "object" || s === null) {
      $t(e, i);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
        t[r] === !0 &&
        (t[r] = { auto: !0 }),
      !(r in t && "enabled" in s))
    ) {
      $t(e, i);
      return;
    }
    t[r] === !0 && (t[r] = { enabled: !0 }),
      typeof t[r] == "object" && !("enabled" in t[r]) && (t[r].enabled = !0),
      t[r] || (t[r] = { enabled: !1 }),
      $t(e, i);
  };
}
const $a = {
    eventsEmitter: kh,
    update: Nh,
    translate: Wh,
    transition: jh,
    slide: np,
    loop: ap,
    grabCursor: cp,
    events: _p,
    breakpoints: Sp,
    checkOverflow: Ap,
    classes: Cp,
    images: Mp,
  },
  Aa = {};
class vt {
  constructor(...e) {
    let n, i;
    if (
      (e.length === 1 &&
      e[0].constructor &&
      Object.prototype.toString.call(e[0]).slice(8, -1) === "Object"
        ? (i = e[0])
        : ([n, i] = e),
      i || (i = {}),
      (i = $t({}, i)),
      n && !i.el && (i.el = n),
      i.el && N(i.el).length > 1)
    ) {
      const o = [];
      return (
        N(i.el).each((l) => {
          const c = $t({}, i, { el: l });
          o.push(new vt(c));
        }),
        o
      );
    }
    const r = this;
    (r.__swiper__ = !0),
      (r.support = ru()),
      (r.device = Th({ userAgent: i.userAgent })),
      (r.browser = wh()),
      (r.eventsListeners = {}),
      (r.eventsAnyListeners = []),
      (r.modules = [...r.__modules__]),
      i.modules && Array.isArray(i.modules) && r.modules.push(...i.modules);
    const s = {};
    r.modules.forEach((o) => {
      o({
        swiper: r,
        extendParams: Op(i, s),
        on: r.on.bind(r),
        once: r.once.bind(r),
        off: r.off.bind(r),
        emit: r.emit.bind(r),
      });
    });
    const a = $t({}, Vl, s);
    return (
      (r.params = $t({}, a, Aa, i)),
      (r.originalParams = $t({}, r.params)),
      (r.passedParams = $t({}, i)),
      r.params &&
        r.params.on &&
        Object.keys(r.params.on).forEach((o) => {
          r.on(o, r.params.on[o]);
        }),
      r.params && r.params.onAny && r.onAny(r.params.onAny),
      (r.$ = N),
      Object.assign(r, {
        enabled: r.params.enabled,
        el: n,
        classNames: [],
        slides: N(),
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
  setProgress(e, n) {
    const i = this;
    e = Math.min(Math.max(e, 0), 1);
    const r = i.minTranslate(),
      a = (i.maxTranslate() - r) * e + r;
    i.translateTo(a, typeof n > "u" ? 0 : n),
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
      let d = s[c].swiperSlideSize,
        f;
      for (let h = c + 1; h < s.length; h += 1)
        s[h] &&
          !f &&
          ((d += s[h].swiperSlideSize), (u += 1), d > l && (f = !0));
      for (let h = c - 1; h >= 0; h -= 1)
        s[h] &&
          !f &&
          ((d += s[h].swiperSlideSize), (u += 1), d > l && (f = !0));
    } else if (e === "current")
      for (let d = c + 1; d < s.length; d += 1)
        (n ? a[d] + o[d] - a[c] < l : a[d] - a[c] < l) && (u += 1);
    else for (let d = c - 1; d >= 0; d -= 1) a[c] - a[d] < l && (u += 1);
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
    const i = N(e || n.params.el);
    if (((e = i[0]), !e)) return !1;
    e.swiper = n;
    const r = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let a = (() => {
      if (e && e.shadowRoot && e.shadowRoot.querySelector) {
        const o = N(e.shadowRoot.querySelector(r()));
        return (o.children = (l) => i.children(l)), o;
      }
      return i.children ? i.children(r()) : N(i).children(r());
    })();
    if (a.length === 0 && n.params.createElements) {
      const l = Ve().createElement("div");
      (a = N(l)),
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
      typeof i.params > "u" ||
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
        e !== !1 && ((i.$el[0].swiper = null), yh(i)),
        (i.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    $t(Aa, e);
  }
  static get extendedDefaults() {
    return Aa;
  }
  static get defaults() {
    return Vl;
  }
  static installModule(e) {
    vt.prototype.__modules__ || (vt.prototype.__modules__ = []);
    const n = vt.prototype.__modules__;
    typeof e == "function" && n.indexOf(e) < 0 && n.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((n) => vt.installModule(n)), vt)
      : (vt.installModule(e), vt);
  }
}
Object.keys($a).forEach((t) => {
  Object.keys($a[t]).forEach((e) => {
    vt.prototype[e] = $a[t][e];
  });
});
vt.use([Ch, Ph]);
function Lp({ swiper: t, extendParams: e, on: n, emit: i }) {
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
  function s(d, f) {
    const h = t.params.virtual;
    if (h.cache && t.virtual.cache[f]) return t.virtual.cache[f];
    const m = h.renderSlide
      ? N(h.renderSlide.call(t, d, f))
      : N(
          `<div class="${t.params.slideClass}" data-swiper-slide-index="${f}">${d}</div>`
        );
    return (
      m.attr("data-swiper-slide-index") || m.attr("data-swiper-slide-index", f),
      h.cache && (t.virtual.cache[f] = m),
      m
    );
  }
  function a(d) {
    const { slidesPerView: f, slidesPerGroup: h, centeredSlides: m } = t.params,
      { addSlidesBefore: p, addSlidesAfter: g } = t.params.virtual,
      { from: _, to: v, slides: y, slidesGrid: b, offset: S } = t.virtual;
    t.params.cssMode || t.updateActiveIndex();
    const E = t.activeIndex || 0;
    let w;
    t.rtlTranslate ? (w = "right") : (w = t.isHorizontal() ? "left" : "top");
    let C, A;
    m
      ? ((C = Math.floor(f / 2) + h + g), (A = Math.floor(f / 2) + h + p))
      : ((C = f + (h - 1) + g), (A = h + p));
    const P = Math.max((E || 0) - A, 0),
      $ = Math.min((E || 0) + C, y.length - 1),
      x = (t.slidesGrid[P] || 0) - (t.slidesGrid[0] || 0);
    Object.assign(t.virtual, {
      from: P,
      to: $,
      offset: x,
      slidesGrid: t.slidesGrid,
    });
    function T() {
      t.updateSlides(),
        t.updateProgress(),
        t.updateSlidesClasses(),
        t.lazy && t.params.lazy.enabled && t.lazy.load(),
        i("virtualUpdate");
    }
    if (_ === P && v === $ && !d) {
      t.slidesGrid !== b && x !== S && t.slides.css(w, `${x}px`),
        t.updateProgress(),
        i("virtualUpdate");
      return;
    }
    if (t.params.virtual.renderExternal) {
      t.params.virtual.renderExternal.call(t, {
        offset: x,
        from: P,
        to: $,
        slides: (function () {
          const I = [];
          for (let z = P; z <= $; z += 1) I.push(y[z]);
          return I;
        })(),
      }),
        t.params.virtual.renderExternalUpdate ? T() : i("virtualUpdate");
      return;
    }
    const O = [],
      L = [];
    if (d) t.$wrapperEl.find(`.${t.params.slideClass}`).remove();
    else
      for (let k = _; k <= v; k += 1)
        (k < P || k > $) &&
          t.$wrapperEl
            .find(`.${t.params.slideClass}[data-swiper-slide-index="${k}"]`)
            .remove();
    for (let k = 0; k < y.length; k += 1)
      k >= P &&
        k <= $ &&
        (typeof v > "u" || d
          ? L.push(k)
          : (k > v && L.push(k), k < _ && O.push(k)));
    L.forEach((k) => {
      t.$wrapperEl.append(s(y[k], k));
    }),
      O.sort((k, I) => I - k).forEach((k) => {
        t.$wrapperEl.prepend(s(y[k], k));
      }),
      t.$wrapperEl.children(".swiper-slide").css(w, `${x}px`),
      T();
  }
  function o(d) {
    if (typeof d == "object" && "length" in d)
      for (let f = 0; f < d.length; f += 1) d[f] && t.virtual.slides.push(d[f]);
    else t.virtual.slides.push(d);
    a(!0);
  }
  function l(d) {
    const f = t.activeIndex;
    let h = f + 1,
      m = 1;
    if (Array.isArray(d)) {
      for (let p = 0; p < d.length; p += 1)
        d[p] && t.virtual.slides.unshift(d[p]);
      (h = f + d.length), (m = d.length);
    } else t.virtual.slides.unshift(d);
    if (t.params.virtual.cache) {
      const p = t.virtual.cache,
        g = {};
      Object.keys(p).forEach((_) => {
        const v = p[_],
          y = v.attr("data-swiper-slide-index");
        y && v.attr("data-swiper-slide-index", parseInt(y, 10) + m),
          (g[parseInt(_, 10) + m] = v);
      }),
        (t.virtual.cache = g);
    }
    a(!0), t.slideTo(h, 0);
  }
  function c(d) {
    if (typeof d > "u" || d === null) return;
    let f = t.activeIndex;
    if (Array.isArray(d))
      for (let h = d.length - 1; h >= 0; h -= 1)
        t.virtual.slides.splice(d[h], 1),
          t.params.virtual.cache && delete t.virtual.cache[d[h]],
          d[h] < f && (f -= 1),
          (f = Math.max(f, 0));
    else
      t.virtual.slides.splice(d, 1),
        t.params.virtual.cache && delete t.virtual.cache[d],
        d < f && (f -= 1),
        (f = Math.max(f, 0));
    a(!0), t.slideTo(f, 0);
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
        Mr(t.wrapperEl, "--swiper-virtual-size", `${t.virtualSize}px`);
    }),
    Object.assign(t.virtual, {
      appendSlide: o,
      prependSlide: l,
      removeSlide: c,
      removeAllSlides: u,
      update: a,
    });
}
function Ip({ swiper: t, extendParams: e, on: n, emit: i }) {
  const r = Ve(),
    s = ge();
  (t.keyboard = { enabled: !1 }),
    e({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } });
  function a(c) {
    if (!t.enabled) return;
    const { rtlTranslate: u } = t;
    let d = c;
    d.originalEvent && (d = d.originalEvent);
    const f = d.keyCode || d.charCode,
      h = t.params.keyboard.pageUpDown,
      m = h && f === 33,
      p = h && f === 34,
      g = f === 37,
      _ = f === 39,
      v = f === 38,
      y = f === 40;
    if (
      (!t.allowSlideNext &&
        ((t.isHorizontal() && _) || (t.isVertical() && y) || p)) ||
      (!t.allowSlidePrev &&
        ((t.isHorizontal() && g) || (t.isVertical() && v) || m))
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
      if (t.params.keyboard.onlyInViewport && (m || p || g || _ || v || y)) {
        let b = !1;
        if (
          t.$el.parents(`.${t.params.slideClass}`).length > 0 &&
          t.$el.parents(`.${t.params.slideActiveClass}`).length === 0
        )
          return;
        const S = t.$el,
          E = S[0].clientWidth,
          w = S[0].clientHeight,
          C = s.innerWidth,
          A = s.innerHeight,
          P = t.$el.offset();
        u && (P.left -= t.$el[0].scrollLeft);
        const $ = [
          [P.left, P.top],
          [P.left + E, P.top],
          [P.left, P.top + w],
          [P.left + E, P.top + w],
        ];
        for (let x = 0; x < $.length; x += 1) {
          const T = $[x];
          if (T[0] >= 0 && T[0] <= C && T[1] >= 0 && T[1] <= A) {
            if (T[0] === 0 && T[1] === 0) continue;
            b = !0;
          }
        }
        if (!b) return;
      }
      t.isHorizontal()
        ? ((m || p || g || _) &&
            (d.preventDefault ? d.preventDefault() : (d.returnValue = !1)),
          (((p || _) && !u) || ((m || g) && u)) && t.slideNext(),
          (((m || g) && !u) || ((p || _) && u)) && t.slidePrev())
        : ((m || p || v || y) &&
            (d.preventDefault ? d.preventDefault() : (d.returnValue = !1)),
          (p || y) && t.slideNext(),
          (m || v) && t.slidePrev()),
        i("keyPress", f);
    }
  }
  function o() {
    t.keyboard.enabled || (N(r).on("keydown", a), (t.keyboard.enabled = !0));
  }
  function l() {
    t.keyboard.enabled && (N(r).off("keydown", a), (t.keyboard.enabled = !1));
  }
  n("init", () => {
    t.params.keyboard.enabled && o();
  }),
    n("destroy", () => {
      t.keyboard.enabled && l();
    }),
    Object.assign(t.keyboard, { enable: o, disable: l });
}
function zp({ swiper: t, extendParams: e, on: n, emit: i }) {
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
    a = Lt(),
    o;
  const l = [];
  function c(v) {
    let E = 0,
      w = 0,
      C = 0,
      A = 0;
    return (
      "detail" in v && (w = v.detail),
      "wheelDelta" in v && (w = -v.wheelDelta / 120),
      "wheelDeltaY" in v && (w = -v.wheelDeltaY / 120),
      "wheelDeltaX" in v && (E = -v.wheelDeltaX / 120),
      "axis" in v && v.axis === v.HORIZONTAL_AXIS && ((E = w), (w = 0)),
      (C = E * 10),
      (A = w * 10),
      "deltaY" in v && (A = v.deltaY),
      "deltaX" in v && (C = v.deltaX),
      v.shiftKey && !C && ((C = A), (A = 0)),
      (C || A) &&
        v.deltaMode &&
        (v.deltaMode === 1 ? ((C *= 40), (A *= 40)) : ((C *= 800), (A *= 800))),
      C && !E && (E = C < 1 ? -1 : 1),
      A && !w && (w = A < 1 ? -1 : 1),
      { spinX: E, spinY: w, pixelX: C, pixelY: A }
    );
  }
  function u() {
    t.enabled && (t.mouseEntered = !0);
  }
  function d() {
    t.enabled && (t.mouseEntered = !1);
  }
  function f(v) {
    return (t.params.mousewheel.thresholdDelta &&
      v.delta < t.params.mousewheel.thresholdDelta) ||
      (t.params.mousewheel.thresholdTime &&
        Lt() - a < t.params.mousewheel.thresholdTime)
      ? !1
      : v.delta >= 6 && Lt() - a < 60
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
    const y = t.params.mousewheel;
    if (v.direction < 0) {
      if (t.isEnd && !t.params.loop && y.releaseOnEdges) return !0;
    } else if (t.isBeginning && !t.params.loop && y.releaseOnEdges) return !0;
    return !1;
  }
  function m(v) {
    let y = v,
      b = !0;
    if (!t.enabled) return;
    const S = t.params.mousewheel;
    t.params.cssMode && y.preventDefault();
    let E = t.$el;
    if (
      (t.params.mousewheel.eventsTarget !== "container" &&
        (E = N(t.params.mousewheel.eventsTarget)),
      !t.mouseEntered && !E[0].contains(y.target) && !S.releaseOnEdges)
    )
      return !0;
    y.originalEvent && (y = y.originalEvent);
    let w = 0;
    const C = t.rtlTranslate ? -1 : 1,
      A = c(y);
    if (S.forceToAxis)
      if (t.isHorizontal())
        if (Math.abs(A.pixelX) > Math.abs(A.pixelY)) w = -A.pixelX * C;
        else return !0;
      else if (Math.abs(A.pixelY) > Math.abs(A.pixelX)) w = -A.pixelY;
      else return !0;
    else
      w = Math.abs(A.pixelX) > Math.abs(A.pixelY) ? -A.pixelX * C : -A.pixelY;
    if (w === 0) return !0;
    S.invert && (w = -w);
    let P = t.getTranslate() + w * S.sensitivity;
    if (
      (P >= t.minTranslate() && (P = t.minTranslate()),
      P <= t.maxTranslate() && (P = t.maxTranslate()),
      (b = t.params.loop
        ? !0
        : !(P === t.minTranslate() || P === t.maxTranslate())),
      b && t.params.nested && y.stopPropagation(),
      !t.params.freeMode || !t.params.freeMode.enabled)
    ) {
      const $ = {
        time: Lt(),
        delta: Math.abs(w),
        direction: Math.sign(w),
        raw: v,
      };
      l.length >= 2 && l.shift();
      const x = l.length ? l[l.length - 1] : void 0;
      if (
        (l.push($),
        x
          ? ($.direction !== x.direction ||
              $.delta > x.delta ||
              $.time > x.time + 150) &&
            f($)
          : f($),
        h($))
      )
        return !0;
    } else {
      const $ = { time: Lt(), delta: Math.abs(w), direction: Math.sign(w) },
        x =
          o &&
          $.time < o.time + 500 &&
          $.delta <= o.delta &&
          $.direction === o.direction;
      if (!x) {
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
          ((!O && t.isBeginning) || (!L && t.isEnd)) && t.updateSlidesClasses(),
          t.params.freeMode.sticky)
        ) {
          clearTimeout(s), (s = void 0), l.length >= 15 && l.shift();
          const k = l.length ? l[l.length - 1] : void 0,
            I = l[0];
          if (
            (l.push($), k && ($.delta > k.delta || $.direction !== k.direction))
          )
            l.splice(0);
          else if (
            l.length >= 15 &&
            $.time - I.time < 500 &&
            I.delta - $.delta >= 1 &&
            $.delta <= 6
          ) {
            const z = w > 0 ? 0.8 : 0.2;
            (o = $),
              l.splice(0),
              (s = Zn(() => {
                t.slideToClosest(t.params.speed, !0, void 0, z);
              }, 0));
          }
          s ||
            (s = Zn(() => {
              (o = $),
                l.splice(0),
                t.slideToClosest(t.params.speed, !0, void 0, 0.5);
            }, 500));
        }
        if (
          (x || i("scroll", y),
          t.params.autoplay &&
            t.params.autoplayDisableOnInteraction &&
            t.autoplay.stop(),
          T === t.minTranslate() || T === t.maxTranslate())
        )
          return !0;
      }
    }
    return y.preventDefault ? y.preventDefault() : (y.returnValue = !1), !1;
  }
  function p(v) {
    let y = t.$el;
    t.params.mousewheel.eventsTarget !== "container" &&
      (y = N(t.params.mousewheel.eventsTarget)),
      y[v]("mouseenter", u),
      y[v]("mouseleave", d),
      y[v]("wheel", m);
  }
  function g() {
    return t.params.cssMode
      ? (t.wrapperEl.removeEventListener("wheel", m), !0)
      : t.mousewheel.enabled
      ? !1
      : (p("on"), (t.mousewheel.enabled = !0), !0);
  }
  function _() {
    return t.params.cssMode
      ? (t.wrapperEl.addEventListener(event, m), !0)
      : t.mousewheel.enabled
      ? (p("off"), (t.mousewheel.enabled = !1), !0)
      : !1;
  }
  n("init", () => {
    !t.params.mousewheel.enabled && t.params.cssMode && _(),
      t.params.mousewheel.enabled && g();
  }),
    n("destroy", () => {
      t.params.cssMode && g(), t.mousewheel.enabled && _();
    }),
    Object.assign(t.mousewheel, { enable: g, disable: _ });
}
function Wo(t, e, n, i) {
  const r = Ve();
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
function Dp({ swiper: t, extendParams: e, on: n, emit: i }) {
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
        ((m = N(h)),
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
    s(m, t.isBeginning && !t.params.rewind), s(h, t.isEnd && !t.params.rewind);
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
      ((t.params.navigation = Wo(
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
      t.enabled || (m && m.addClass(h.lockClass), p && p.addClass(h.lockClass));
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
    t.params.navigation.enabled === !1 ? f() : (c(), a());
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
        _ = m.target;
      if (t.params.navigation.hideOnClick && !N(_).is(g) && !N(_).is(p)) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === _ || t.pagination.el.contains(_))
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
  const d = () => {
      t.$el.removeClass(t.params.navigation.navigationDisabledClass), c(), a();
    },
    f = () => {
      t.$el.addClass(t.params.navigation.navigationDisabledClass), u();
    };
  Object.assign(t.navigation, {
    enable: d,
    disable: f,
    update: a,
    init: c,
    destroy: u,
  });
}
function Tn(t = "") {
  return `.${t
    .trim()
    .replace(/([\.:!\/])/g, "\\$1")
    .replace(/ /g, ".")}`;
}
function Rp({ swiper: t, extendParams: e, on: n, emit: i }) {
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
    const { bulletActiveClass: _ } = t.params.pagination;
    p[g]().addClass(`${_}-${g}`)[g]().addClass(`${_}-${g}-${g}`);
  }
  function c() {
    const p = t.rtl,
      g = t.params.pagination;
    if (o()) return;
    const _ =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      v = t.pagination.$el;
    let y;
    const b = t.params.loop
      ? Math.ceil((_ - t.loopedSlides * 2) / t.params.slidesPerGroup)
      : t.snapGrid.length;
    if (
      (t.params.loop
        ? ((y = Math.ceil(
            (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
          )),
          y > _ - 1 - t.loopedSlides * 2 && (y -= _ - t.loopedSlides * 2),
          y > b - 1 && (y -= b),
          y < 0 && t.params.paginationType !== "bullets" && (y = b + y))
        : typeof t.snapIndex < "u"
        ? (y = t.snapIndex)
        : (y = t.activeIndex || 0),
      g.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const S = t.pagination.bullets;
      let E, w, C;
      if (
        (g.dynamicBullets &&
          ((s = S.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
          v.css(
            t.isHorizontal() ? "width" : "height",
            `${s * (g.dynamicMainBullets + 4)}px`
          ),
          g.dynamicMainBullets > 1 &&
            t.previousIndex !== void 0 &&
            ((a += y - (t.previousIndex - t.loopedSlides || 0)),
            a > g.dynamicMainBullets - 1
              ? (a = g.dynamicMainBullets - 1)
              : a < 0 && (a = 0)),
          (E = Math.max(y - a, 0)),
          (w = E + (Math.min(S.length, g.dynamicMainBullets) - 1)),
          (C = (w + E) / 2)),
        S.removeClass(
          ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
            .map((A) => `${g.bulletActiveClass}${A}`)
            .join(" ")
        ),
        v.length > 1)
      )
        S.each((A) => {
          const P = N(A),
            $ = P.index();
          $ === y && P.addClass(g.bulletActiveClass),
            g.dynamicBullets &&
              ($ >= E && $ <= w && P.addClass(`${g.bulletActiveClass}-main`),
              $ === E && l(P, "prev"),
              $ === w && l(P, "next"));
        });
      else {
        const A = S.eq(y),
          P = A.index();
        if ((A.addClass(g.bulletActiveClass), g.dynamicBullets)) {
          const $ = S.eq(E),
            x = S.eq(w);
          for (let T = E; T <= w; T += 1)
            S.eq(T).addClass(`${g.bulletActiveClass}-main`);
          if (t.params.loop)
            if (P >= S.length) {
              for (let T = g.dynamicMainBullets; T >= 0; T -= 1)
                S.eq(S.length - T).addClass(`${g.bulletActiveClass}-main`);
              S.eq(S.length - g.dynamicMainBullets - 1).addClass(
                `${g.bulletActiveClass}-prev`
              );
            } else l($, "prev"), l(x, "next");
          else l($, "prev"), l(x, "next");
        }
      }
      if (g.dynamicBullets) {
        const A = Math.min(S.length, g.dynamicMainBullets + 4),
          P = (s * A - s) / 2 - C * s,
          $ = p ? "right" : "left";
        S.css(t.isHorizontal() ? $ : "top", `${P}px`);
      }
    }
    if (
      (g.type === "fraction" &&
        (v.find(Tn(g.currentClass)).text(g.formatFractionCurrent(y + 1)),
        v.find(Tn(g.totalClass)).text(g.formatFractionTotal(b))),
      g.type === "progressbar")
    ) {
      let S;
      g.progressbarOpposite
        ? (S = t.isHorizontal() ? "vertical" : "horizontal")
        : (S = t.isHorizontal() ? "horizontal" : "vertical");
      const E = (y + 1) / b;
      let w = 1,
        C = 1;
      S === "horizontal" ? (w = E) : (C = E),
        v
          .find(Tn(g.progressbarFillClass))
          .transform(`translate3d(0,0,0) scaleX(${w}) scaleY(${C})`)
          .transition(t.params.speed);
    }
    g.type === "custom" && g.renderCustom
      ? (v.html(g.renderCustom(t, y + 1, b)), i("paginationRender", v[0]))
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
      _ = t.pagination.$el;
    let v = "";
    if (p.type === "bullets") {
      let y = t.params.loop
        ? Math.ceil((g - t.loopedSlides * 2) / t.params.slidesPerGroup)
        : t.snapGrid.length;
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        !t.params.loop &&
        y > g &&
        (y = g);
      for (let b = 0; b < y; b += 1)
        p.renderBullet
          ? (v += p.renderBullet.call(t, b, p.bulletClass))
          : (v += `<${p.bulletElement} class="${p.bulletClass}"></${p.bulletElement}>`);
      _.html(v), (t.pagination.bullets = _.find(Tn(p.bulletClass)));
    }
    p.type === "fraction" &&
      (p.renderFraction
        ? (v = p.renderFraction.call(t, p.currentClass, p.totalClass))
        : (v = `<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),
      _.html(v)),
      p.type === "progressbar" &&
        (p.renderProgressbar
          ? (v = p.renderProgressbar.call(t, p.progressbarFillClass))
          : (v = `<span class="${p.progressbarFillClass}"></span>`),
        _.html(v)),
      p.type !== "custom" && i("paginationRender", t.pagination.$el[0]);
  }
  function d() {
    t.params.pagination = Wo(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: "swiper-pagination" }
    );
    const p = t.params.pagination;
    if (!p.el) return;
    let g = N(p.el);
    g.length !== 0 &&
      (t.params.uniqueNavElements &&
        typeof p.el == "string" &&
        g.length > 1 &&
        ((g = t.$el.find(p.el)),
        g.length > 1 &&
          (g = g.filter((_) => N(_).parents(".swiper")[0] === t.el))),
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
        g.on("click", Tn(p.bulletClass), function (v) {
          v.preventDefault();
          let y = N(this).index() * t.params.slidesPerGroup;
          t.params.loop && (y += t.loopedSlides), t.slideTo(y);
        }),
      Object.assign(t.pagination, { $el: g, el: g[0] }),
      t.enabled || g.addClass(p.lockClass));
  }
  function f() {
    const p = t.params.pagination;
    if (o()) return;
    const g = t.pagination.$el;
    g.removeClass(p.hiddenClass),
      g.removeClass(p.modifierClass + p.type),
      g.removeClass(t.isHorizontal() ? p.horizontalClass : p.verticalClass),
      t.pagination.bullets &&
        t.pagination.bullets.removeClass &&
        t.pagination.bullets.removeClass(p.bulletActiveClass),
      p.clickable && g.off("click", Tn(p.bulletClass));
  }
  n("init", () => {
    t.params.pagination.enabled === !1 ? m() : (d(), u(), c());
  }),
    n("activeIndexChange", () => {
      (t.params.loop || typeof t.snapIndex > "u") && c();
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
      f();
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
      const _ = g.target,
        { $el: v } = t.pagination;
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        v &&
        v.length > 0 &&
        !N(_).hasClass(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && _ === t.navigation.nextEl) ||
            (t.navigation.prevEl && _ === t.navigation.prevEl))
        )
          return;
        const y = v.hasClass(t.params.pagination.hiddenClass);
        i(y === !0 ? "paginationShow" : "paginationHide"),
          v.toggleClass(t.params.pagination.hiddenClass);
      }
    });
  const h = () => {
      t.$el.removeClass(t.params.pagination.paginationDisabledClass),
        t.pagination.$el &&
          t.pagination.$el.removeClass(
            t.params.pagination.paginationDisabledClass
          ),
        d(),
        u(),
        c();
    },
    m = () => {
      t.$el.addClass(t.params.pagination.paginationDisabledClass),
        t.pagination.$el &&
          t.pagination.$el.addClass(
            t.params.pagination.paginationDisabledClass
          ),
        f();
    };
  Object.assign(t.pagination, {
    enable: h,
    disable: m,
    render: u,
    update: c,
    init: d,
    destroy: f,
  });
}
function Np({ swiper: t, extendParams: e, on: n, emit: i }) {
  const r = Ve();
  let s = !1,
    a = null,
    o = null,
    l,
    c,
    u,
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
    (t.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null });
  function f() {
    if (!t.params.scrollbar.el || !t.scrollbar.el) return;
    const { scrollbar: $, rtlTranslate: x, progress: T } = t,
      { $dragEl: O, $el: L } = $,
      k = t.params.scrollbar;
    let I = c,
      z = (u - c) * T;
    x
      ? ((z = -z), z > 0 ? ((I = c - z), (z = 0)) : -z + c > u && (I = u + z))
      : z < 0
      ? ((I = c + z), (z = 0))
      : z + c > u && (I = u - z),
      t.isHorizontal()
        ? (O.transform(`translate3d(${z}px, 0, 0)`),
          (O[0].style.width = `${I}px`))
        : (O.transform(`translate3d(0px, ${z}px, 0)`),
          (O[0].style.height = `${I}px`)),
      k.hide &&
        (clearTimeout(a),
        (L[0].style.opacity = 1),
        (a = setTimeout(() => {
          (L[0].style.opacity = 0), L.transition(400);
        }, 1e3)));
  }
  function h($) {
    !t.params.scrollbar.el ||
      !t.scrollbar.el ||
      t.scrollbar.$dragEl.transition($);
  }
  function m() {
    if (!t.params.scrollbar.el || !t.scrollbar.el) return;
    const { scrollbar: $ } = t,
      { $dragEl: x, $el: T } = $;
    (x[0].style.width = ""),
      (x[0].style.height = ""),
      (u = t.isHorizontal() ? T[0].offsetWidth : T[0].offsetHeight),
      (d =
        t.size /
        (t.virtualSize +
          t.params.slidesOffsetBefore -
          (t.params.centeredSlides ? t.snapGrid[0] : 0))),
      t.params.scrollbar.dragSize === "auto"
        ? (c = u * d)
        : (c = parseInt(t.params.scrollbar.dragSize, 10)),
      t.isHorizontal()
        ? (x[0].style.width = `${c}px`)
        : (x[0].style.height = `${c}px`),
      d >= 1 ? (T[0].style.display = "none") : (T[0].style.display = ""),
      t.params.scrollbar.hide && (T[0].style.opacity = 0),
      t.params.watchOverflow &&
        t.enabled &&
        $.$el[t.isLocked ? "addClass" : "removeClass"](
          t.params.scrollbar.lockClass
        );
  }
  function p($) {
    return t.isHorizontal()
      ? $.type === "touchstart" || $.type === "touchmove"
        ? $.targetTouches[0].clientX
        : $.clientX
      : $.type === "touchstart" || $.type === "touchmove"
      ? $.targetTouches[0].clientY
      : $.clientY;
  }
  function g($) {
    const { scrollbar: x, rtlTranslate: T } = t,
      { $el: O } = x;
    let L;
    (L =
      (p($) -
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
  function _($) {
    const x = t.params.scrollbar,
      { scrollbar: T, $wrapperEl: O } = t,
      { $el: L, $dragEl: k } = T;
    (s = !0),
      (l =
        $.target === k[0] || $.target === k
          ? p($) -
            $.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"]
          : null),
      $.preventDefault(),
      $.stopPropagation(),
      O.transition(100),
      k.transition(100),
      g($),
      clearTimeout(o),
      L.transition(0),
      x.hide && L.css("opacity", 1),
      t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
      i("scrollbarDragStart", $);
  }
  function v($) {
    const { scrollbar: x, $wrapperEl: T } = t,
      { $el: O, $dragEl: L } = x;
    s &&
      ($.preventDefault ? $.preventDefault() : ($.returnValue = !1),
      g($),
      T.transition(0),
      O.transition(0),
      L.transition(0),
      i("scrollbarDragMove", $));
  }
  function y($) {
    const x = t.params.scrollbar,
      { scrollbar: T, $wrapperEl: O } = t,
      { $el: L } = T;
    s &&
      ((s = !1),
      t.params.cssMode &&
        (t.$wrapperEl.css("scroll-snap-type", ""), O.transition("")),
      x.hide &&
        (clearTimeout(o),
        (o = Zn(() => {
          L.css("opacity", 0), L.transition(400);
        }, 1e3))),
      i("scrollbarDragEnd", $),
      x.snapOnRelease && t.slideToClosest());
  }
  function b($) {
    const {
        scrollbar: x,
        touchEventsTouch: T,
        touchEventsDesktop: O,
        params: L,
        support: k,
      } = t,
      I = x.$el;
    if (!I) return;
    const z = I[0],
      B =
        k.passiveListener && L.passiveListeners
          ? { passive: !1, capture: !1 }
          : !1,
      M =
        k.passiveListener && L.passiveListeners
          ? { passive: !0, capture: !1 }
          : !1;
    if (!z) return;
    const q = $ === "on" ? "addEventListener" : "removeEventListener";
    k.touch
      ? (z[q](T.start, _, B), z[q](T.move, v, B), z[q](T.end, y, M))
      : (z[q](O.start, _, B), r[q](O.move, v, B), r[q](O.end, y, M));
  }
  function S() {
    !t.params.scrollbar.el || !t.scrollbar.el || b("on");
  }
  function E() {
    !t.params.scrollbar.el || !t.scrollbar.el || b("off");
  }
  function w() {
    const { scrollbar: $, $el: x } = t;
    t.params.scrollbar = Wo(t, t.originalParams.scrollbar, t.params.scrollbar, {
      el: "swiper-scrollbar",
    });
    const T = t.params.scrollbar;
    if (!T.el) return;
    let O = N(T.el);
    t.params.uniqueNavElements &&
      typeof T.el == "string" &&
      O.length > 1 &&
      x.find(T.el).length === 1 &&
      (O = x.find(T.el)),
      O.addClass(t.isHorizontal() ? T.horizontalClass : T.verticalClass);
    let L = O.find(`.${t.params.scrollbar.dragClass}`);
    L.length === 0 &&
      ((L = N(`<div class="${t.params.scrollbar.dragClass}"></div>`)),
      O.append(L)),
      Object.assign($, { $el: O, el: O[0], $dragEl: L, dragEl: L[0] }),
      T.draggable && S(),
      O &&
        O[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
  }
  function C() {
    const $ = t.params.scrollbar,
      x = t.scrollbar.$el;
    x && x.removeClass(t.isHorizontal() ? $.horizontalClass : $.verticalClass),
      E();
  }
  n("init", () => {
    t.params.scrollbar.enabled === !1 ? P() : (w(), m(), f());
  }),
    n("update resize observerUpdate lock unlock", () => {
      m();
    }),
    n("setTranslate", () => {
      f();
    }),
    n("setTransition", ($, x) => {
      h(x);
    }),
    n("enable disable", () => {
      const { $el: $ } = t.scrollbar;
      $ &&
        $[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
    }),
    n("destroy", () => {
      C();
    });
  const A = () => {
      t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),
        t.scrollbar.$el &&
          t.scrollbar.$el.removeClass(
            t.params.scrollbar.scrollbarDisabledClass
          ),
        w(),
        m(),
        f();
    },
    P = () => {
      t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
        t.scrollbar.$el &&
          t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
        C();
    };
  Object.assign(t.scrollbar, {
    enable: A,
    disable: P,
    updateSize: m,
    setTranslate: f,
    init: w,
    destroy: C,
  });
}
function Bp({ swiper: t, extendParams: e, on: n }) {
  e({ parallax: { enabled: !1 } });
  const i = (a, o) => {
      const { rtl: l } = t,
        c = N(a),
        u = l ? -1 : 1,
        d = c.attr("data-swiper-parallax") || "0";
      let f = c.attr("data-swiper-parallax-x"),
        h = c.attr("data-swiper-parallax-y");
      const m = c.attr("data-swiper-parallax-scale"),
        p = c.attr("data-swiper-parallax-opacity");
      if (
        (f || h
          ? ((f = f || "0"), (h = h || "0"))
          : t.isHorizontal()
          ? ((f = d), (h = "0"))
          : ((h = d), (f = "0")),
        f.indexOf("%") >= 0
          ? (f = `${parseInt(f, 10) * o * u}%`)
          : (f = `${f * o * u}px`),
        h.indexOf("%") >= 0
          ? (h = `${parseInt(h, 10) * o}%`)
          : (h = `${h * o}px`),
        typeof p < "u" && p !== null)
      ) {
        const g = p - (p - 1) * (1 - Math.abs(o));
        c[0].style.opacity = g;
      }
      if (typeof m > "u" || m === null)
        c.transform(`translate3d(${f}, ${h}, 0px)`);
      else {
        const g = m - (m - 1) * (1 - Math.abs(o));
        c.transform(`translate3d(${f}, ${h}, 0px) scale(${g})`);
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
        o.each((u, d) => {
          let f = u.progress;
          t.params.slidesPerGroup > 1 &&
            t.params.slidesPerView !== "auto" &&
            (f += Math.ceil(d / 2) - l * (c.length - 1)),
            (f = Math.min(Math.max(f, -1), 1)),
            N(u)
              .find(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              )
              .each((h) => {
                i(h, f);
              });
        });
    },
    s = (a = t.params.speed) => {
      const { $el: o } = t;
      o.find(
        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
      ).each((l) => {
        const c = N(l);
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
function Fp({ swiper: t, extendParams: e, on: n, emit: i }) {
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
    f = {
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
          z = u.$slideEl ? u.$slideEl[0] : void 0;
        i("zoomChange", k, I, z);
      }
      h = k;
    },
  });
  function m(k) {
    if (k.targetTouches.length < 2) return 1;
    const I = k.targetTouches[0].pageX,
      z = k.targetTouches[0].pageY,
      B = k.targetTouches[1].pageX,
      M = k.targetTouches[1].pageY;
    return Math.sqrt((B - I) ** 2 + (M - z) ** 2);
  }
  function p(k) {
    const I = t.support,
      z = t.params.zoom;
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
      ((u.$slideEl = N(k.target).closest(`.${t.params.slideClass}`)),
      u.$slideEl.length === 0 && (u.$slideEl = t.slides.eq(t.activeIndex)),
      (u.$imageEl = u.$slideEl
        .find(`.${z.containerClass}`)
        .eq(0)
        .find("picture, img, svg, canvas, .swiper-zoom-target")
        .eq(0)),
      (u.$imageWrapEl = u.$imageEl.parent(`.${z.containerClass}`)),
      (u.maxRatio = u.$imageWrapEl.attr("data-swiper-zoom") || z.maxRatio),
      u.$imageWrapEl.length === 0)
    ) {
      u.$imageEl = void 0;
      return;
    }
    u.$imageEl && u.$imageEl.transition(0), (a = !0);
  }
  function g(k) {
    const I = t.support,
      z = t.params.zoom,
      B = t.zoom;
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
      ? (B.scale = k.scale * s)
      : (B.scale = (u.scaleMove / u.scaleStart) * s),
      B.scale > u.maxRatio &&
        (B.scale = u.maxRatio - 1 + (B.scale - u.maxRatio + 1) ** 0.5),
      B.scale < z.minRatio &&
        (B.scale = z.minRatio + 1 - (z.minRatio - B.scale + 1) ** 0.5),
      u.$imageEl.transform(`translate3d(0,0,0) scale(${B.scale})`);
  }
  function _(k) {
    const I = t.device,
      z = t.support,
      B = t.params.zoom,
      M = t.zoom;
    if (!z.gestures) {
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
      ((M.scale = Math.max(Math.min(M.scale, u.maxRatio), B.minRatio)),
      u.$imageEl
        .transition(t.params.speed)
        .transform(`translate3d(0,0,0) scale(${M.scale})`),
      (s = M.scale),
      (a = !1),
      M.scale === 1 && (u.$slideEl = void 0));
  }
  function v(k) {
    const I = t.device;
    !u.$imageEl ||
      u.$imageEl.length === 0 ||
      d.isTouched ||
      (I.android && k.cancelable && k.preventDefault(),
      (d.isTouched = !0),
      (d.touchesStart.x =
        k.type === "touchstart" ? k.targetTouches[0].pageX : k.pageX),
      (d.touchesStart.y =
        k.type === "touchstart" ? k.targetTouches[0].pageY : k.pageY));
  }
  function y(k) {
    const I = t.zoom;
    if (
      !u.$imageEl ||
      u.$imageEl.length === 0 ||
      ((t.allowClick = !1), !d.isTouched || !u.$slideEl)
    )
      return;
    d.isMoved ||
      ((d.width = u.$imageEl[0].offsetWidth),
      (d.height = u.$imageEl[0].offsetHeight),
      (d.startX = so(u.$imageWrapEl[0], "x") || 0),
      (d.startY = so(u.$imageWrapEl[0], "y") || 0),
      (u.slideWidth = u.$slideEl[0].offsetWidth),
      (u.slideHeight = u.$slideEl[0].offsetHeight),
      u.$imageWrapEl.transition(0));
    const z = d.width * I.scale,
      B = d.height * I.scale;
    if (!(z < u.slideWidth && B < u.slideHeight)) {
      if (
        ((d.minX = Math.min(u.slideWidth / 2 - z / 2, 0)),
        (d.maxX = -d.minX),
        (d.minY = Math.min(u.slideHeight / 2 - B / 2, 0)),
        (d.maxY = -d.minY),
        (d.touchesCurrent.x =
          k.type === "touchmove" ? k.targetTouches[0].pageX : k.pageX),
        (d.touchesCurrent.y =
          k.type === "touchmove" ? k.targetTouches[0].pageY : k.pageY),
        !d.isMoved && !a)
      ) {
        if (
          t.isHorizontal() &&
          ((Math.floor(d.minX) === Math.floor(d.startX) &&
            d.touchesCurrent.x < d.touchesStart.x) ||
            (Math.floor(d.maxX) === Math.floor(d.startX) &&
              d.touchesCurrent.x > d.touchesStart.x))
        ) {
          d.isTouched = !1;
          return;
        }
        if (
          !t.isHorizontal() &&
          ((Math.floor(d.minY) === Math.floor(d.startY) &&
            d.touchesCurrent.y < d.touchesStart.y) ||
            (Math.floor(d.maxY) === Math.floor(d.startY) &&
              d.touchesCurrent.y > d.touchesStart.y))
        ) {
          d.isTouched = !1;
          return;
        }
      }
      k.cancelable && k.preventDefault(),
        k.stopPropagation(),
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
        f.prevPositionX || (f.prevPositionX = d.touchesCurrent.x),
        f.prevPositionY || (f.prevPositionY = d.touchesCurrent.y),
        f.prevTime || (f.prevTime = Date.now()),
        (f.x =
          (d.touchesCurrent.x - f.prevPositionX) /
          (Date.now() - f.prevTime) /
          2),
        (f.y =
          (d.touchesCurrent.y - f.prevPositionY) /
          (Date.now() - f.prevTime) /
          2),
        Math.abs(d.touchesCurrent.x - f.prevPositionX) < 2 && (f.x = 0),
        Math.abs(d.touchesCurrent.y - f.prevPositionY) < 2 && (f.y = 0),
        (f.prevPositionX = d.touchesCurrent.x),
        (f.prevPositionY = d.touchesCurrent.y),
        (f.prevTime = Date.now()),
        u.$imageWrapEl.transform(
          `translate3d(${d.currentX}px, ${d.currentY}px,0)`
        );
    }
  }
  function b() {
    const k = t.zoom;
    if (!u.$imageEl || u.$imageEl.length === 0) return;
    if (!d.isTouched || !d.isMoved) {
      (d.isTouched = !1), (d.isMoved = !1);
      return;
    }
    (d.isTouched = !1), (d.isMoved = !1);
    let I = 300,
      z = 300;
    const B = f.x * I,
      M = d.currentX + B,
      q = f.y * z,
      X = d.currentY + q;
    f.x !== 0 && (I = Math.abs((M - d.currentX) / f.x)),
      f.y !== 0 && (z = Math.abs((X - d.currentY) / f.y));
    const oe = Math.max(I, z);
    (d.currentX = M), (d.currentY = X);
    const ne = d.width * k.scale,
      K = d.height * k.scale;
    (d.minX = Math.min(u.slideWidth / 2 - ne / 2, 0)),
      (d.maxX = -d.minX),
      (d.minY = Math.min(u.slideHeight / 2 - K / 2, 0)),
      (d.maxY = -d.minY),
      (d.currentX = Math.max(Math.min(d.currentX, d.maxX), d.minX)),
      (d.currentY = Math.max(Math.min(d.currentY, d.maxY), d.minY)),
      u.$imageWrapEl
        .transition(oe)
        .transform(`translate3d(${d.currentX}px, ${d.currentY}px,0)`);
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
  function E(k) {
    const I = t.zoom,
      z = t.params.zoom;
    if (
      (u.$slideEl ||
        (k &&
          k.target &&
          (u.$slideEl = N(k.target).closest(`.${t.params.slideClass}`)),
        u.$slideEl ||
          (t.params.virtual && t.params.virtual.enabled && t.virtual
            ? (u.$slideEl = t.$wrapperEl.children(
                `.${t.params.slideActiveClass}`
              ))
            : (u.$slideEl = t.slides.eq(t.activeIndex))),
        (u.$imageEl = u.$slideEl
          .find(`.${z.containerClass}`)
          .eq(0)
          .find("picture, img, svg, canvas, .swiper-zoom-target")
          .eq(0)),
        (u.$imageWrapEl = u.$imageEl.parent(`.${z.containerClass}`))),
      !u.$imageEl ||
        u.$imageEl.length === 0 ||
        !u.$imageWrapEl ||
        u.$imageWrapEl.length === 0)
    )
      return;
    t.params.cssMode &&
      ((t.wrapperEl.style.overflow = "hidden"),
      (t.wrapperEl.style.touchAction = "none")),
      u.$slideEl.addClass(`${z.zoomedSlideClass}`);
    let B, M, q, X, oe, ne, K, Z, ue, he, Se, Me, de, Te, W, te, $e, Ae;
    typeof d.touchesStart.x > "u" && k
      ? ((B = k.type === "touchend" ? k.changedTouches[0].pageX : k.pageX),
        (M = k.type === "touchend" ? k.changedTouches[0].pageY : k.pageY))
      : ((B = d.touchesStart.x), (M = d.touchesStart.y)),
      (I.scale = u.$imageWrapEl.attr("data-swiper-zoom") || z.maxRatio),
      (s = u.$imageWrapEl.attr("data-swiper-zoom") || z.maxRatio),
      k
        ? (($e = u.$slideEl[0].offsetWidth),
          (Ae = u.$slideEl[0].offsetHeight),
          (q = u.$slideEl.offset().left + r.scrollX),
          (X = u.$slideEl.offset().top + r.scrollY),
          (oe = q + $e / 2 - B),
          (ne = X + Ae / 2 - M),
          (ue = u.$imageEl[0].offsetWidth),
          (he = u.$imageEl[0].offsetHeight),
          (Se = ue * I.scale),
          (Me = he * I.scale),
          (de = Math.min($e / 2 - Se / 2, 0)),
          (Te = Math.min(Ae / 2 - Me / 2, 0)),
          (W = -de),
          (te = -Te),
          (K = oe * I.scale),
          (Z = ne * I.scale),
          K < de && (K = de),
          K > W && (K = W),
          Z < Te && (Z = Te),
          Z > te && (Z = te))
        : ((K = 0), (Z = 0)),
      u.$imageWrapEl.transition(300).transform(`translate3d(${K}px, ${Z}px,0)`),
      u.$imageEl
        .transition(300)
        .transform(`translate3d(0,0,0) scale(${I.scale})`);
  }
  function w() {
    const k = t.zoom,
      I = t.params.zoom;
    u.$slideEl ||
      (t.params.virtual && t.params.virtual.enabled && t.virtual
        ? (u.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`))
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
  function C(k) {
    const I = t.zoom;
    I.scale && I.scale !== 1 ? w() : E(k);
  }
  function A() {
    const k = t.support,
      I =
        t.touchEvents.start === "touchstart" &&
        k.passiveListener &&
        t.params.passiveListeners
          ? { passive: !0, capture: !1 }
          : !1,
      z = k.passiveListener ? { passive: !1, capture: !0 } : !0;
    return { passiveListener: I, activeListenerWithCapture: z };
  }
  function P() {
    return `.${t.params.slideClass}`;
  }
  function $(k) {
    const { passiveListener: I } = A(),
      z = P();
    t.$wrapperEl[k]("gesturestart", z, p, I),
      t.$wrapperEl[k]("gesturechange", z, g, I),
      t.$wrapperEl[k]("gestureend", z, _, I);
  }
  function x() {
    o || ((o = !0), $("on"));
  }
  function T() {
    o && ((o = !1), $("off"));
  }
  function O() {
    const k = t.zoom;
    if (k.enabled) return;
    k.enabled = !0;
    const I = t.support,
      { passiveListener: z, activeListenerWithCapture: B } = A(),
      M = P();
    I.gestures
      ? (t.$wrapperEl.on(t.touchEvents.start, x, z),
        t.$wrapperEl.on(t.touchEvents.end, T, z))
      : t.touchEvents.start === "touchstart" &&
        (t.$wrapperEl.on(t.touchEvents.start, M, p, z),
        t.$wrapperEl.on(t.touchEvents.move, M, g, B),
        t.$wrapperEl.on(t.touchEvents.end, M, _, z),
        t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, M, _, z)),
      t.$wrapperEl.on(
        t.touchEvents.move,
        `.${t.params.zoom.containerClass}`,
        y,
        B
      );
  }
  function L() {
    const k = t.zoom;
    if (!k.enabled) return;
    const I = t.support;
    k.enabled = !1;
    const { passiveListener: z, activeListenerWithCapture: B } = A(),
      M = P();
    I.gestures
      ? (t.$wrapperEl.off(t.touchEvents.start, x, z),
        t.$wrapperEl.off(t.touchEvents.end, T, z))
      : t.touchEvents.start === "touchstart" &&
        (t.$wrapperEl.off(t.touchEvents.start, M, p, z),
        t.$wrapperEl.off(t.touchEvents.move, M, g, B),
        t.$wrapperEl.off(t.touchEvents.end, M, _, z),
        t.touchEvents.cancel &&
          t.$wrapperEl.off(t.touchEvents.cancel, M, _, z)),
      t.$wrapperEl.off(
        t.touchEvents.move,
        `.${t.params.zoom.containerClass}`,
        y,
        B
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
      t.zoom.enabled && b();
    }),
    n("doubleTap", (k, I) => {
      !t.animating &&
        t.params.zoom.enabled &&
        t.zoom.enabled &&
        t.params.zoom.toggle &&
        C(I);
    }),
    n("transitionEnd", () => {
      t.zoom.enabled && t.params.zoom.enabled && S();
    }),
    n("slideChange", () => {
      t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && S();
    }),
    Object.assign(t.zoom, { enable: O, disable: L, in: E, out: w, toggle: C });
}
function Vp({ swiper: t, extendParams: e, on: n, emit: i }) {
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
    const d = t.params.lazy;
    if (typeof c > "u" || t.slides.length === 0) return;
    const h =
        t.virtual && t.params.virtual.enabled
          ? t.$wrapperEl.children(
              `.${t.params.slideClass}[data-swiper-slide-index="${c}"]`
            )
          : t.slides.eq(c),
      m = h.find(
        `.${d.elementClass}:not(.${d.loadedClass}):not(.${d.loadingClass})`
      );
    h.hasClass(d.elementClass) &&
      !h.hasClass(d.loadedClass) &&
      !h.hasClass(d.loadingClass) &&
      m.push(h[0]),
      m.length !== 0 &&
        m.each((p) => {
          const g = N(p);
          g.addClass(d.loadingClass);
          const _ = g.attr("data-background"),
            v = g.attr("data-src"),
            y = g.attr("data-srcset"),
            b = g.attr("data-sizes"),
            S = g.parent("picture");
          t.loadImage(g[0], v || _, y, b, !1, () => {
            if (
              !(
                typeof t > "u" ||
                t === null ||
                !t ||
                (t && !t.params) ||
                t.destroyed
              )
            ) {
              if (
                (_
                  ? (g.css("background-image", `url("${_}")`),
                    g.removeAttr("data-background"))
                  : (y && (g.attr("srcset", y), g.removeAttr("data-srcset")),
                    b && (g.attr("sizes", b), g.removeAttr("data-sizes")),
                    S.length &&
                      S.children("source").each((E) => {
                        const w = N(E);
                        w.attr("data-srcset") &&
                          (w.attr("srcset", w.attr("data-srcset")),
                          w.removeAttr("data-srcset"));
                      }),
                    v && (g.attr("src", v), g.removeAttr("data-src"))),
                g.addClass(d.loadedClass).removeClass(d.loadingClass),
                h.find(`.${d.preloaderClass}`).remove(),
                t.params.loop && u)
              ) {
                const E = h.attr("data-swiper-slide-index");
                if (h.hasClass(t.params.slideDuplicateClass)) {
                  const w = t.$wrapperEl.children(
                    `[data-swiper-slide-index="${E}"]:not(.${t.params.slideDuplicateClass})`
                  );
                  a(w.index(), !1);
                } else {
                  const w = t.$wrapperEl.children(
                    `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${E}"]`
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
    const { $wrapperEl: c, params: u, slides: d, activeIndex: f } = t,
      h = t.virtual && u.virtual.enabled,
      m = u.lazy;
    let p = u.slidesPerView;
    p === "auto" && (p = 0);
    function g(v) {
      if (h) {
        if (
          c.children(`.${u.slideClass}[data-swiper-slide-index="${v}"]`).length
        )
          return !0;
      } else if (d[v]) return !0;
      return !1;
    }
    function _(v) {
      return h ? N(v).attr("data-swiper-slide-index") : N(v).index();
    }
    if ((s || (s = !0), t.params.watchSlidesProgress))
      c.children(`.${u.slideVisibleClass}`).each((v) => {
        const y = h ? N(v).attr("data-swiper-slide-index") : N(v).index();
        a(y);
      });
    else if (p > 1) for (let v = f; v < f + p; v += 1) g(v) && a(v);
    else a(f);
    if (m.loadPrevNext)
      if (p > 1 || (m.loadPrevNextAmount && m.loadPrevNextAmount > 1)) {
        const v = m.loadPrevNextAmount,
          y = Math.ceil(p),
          b = Math.min(f + y + Math.max(v, y), d.length),
          S = Math.max(f - Math.max(y, v), 0);
        for (let E = f + y; E < b; E += 1) g(E) && a(E);
        for (let E = S; E < f; E += 1) g(E) && a(E);
      } else {
        const v = c.children(`.${u.slideNextClass}`);
        v.length > 0 && a(_(v));
        const y = c.children(`.${u.slidePrevClass}`);
        y.length > 0 && a(_(y));
      }
  }
  function l() {
    const c = ge();
    if (!t || t.destroyed) return;
    const u = t.params.lazy.scrollingElement
        ? N(t.params.lazy.scrollingElement)
        : N(c),
      d = u[0] === c,
      f = d ? c.innerWidth : u[0].offsetWidth,
      h = d ? c.innerHeight : u[0].offsetHeight,
      m = t.$el.offset(),
      { rtlTranslate: p } = t;
    let g = !1;
    p && (m.left -= t.$el[0].scrollLeft);
    const _ = [
      [m.left, m.top],
      [m.left + t.width, m.top],
      [m.left, m.top + t.height],
      [m.left + t.width, m.top + t.height],
    ];
    for (let y = 0; y < _.length; y += 1) {
      const b = _[y];
      if (b[0] >= 0 && b[0] <= f && b[1] >= 0 && b[1] <= h) {
        if (b[0] === 0 && b[1] === 0) continue;
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
        watchSlidesProgress: d,
        touchReleaseOnEdges: f,
        resistanceRatio: h,
      } = t.params;
      c.enabled && (u || (d && (f || h === 0))) && o();
    }),
    n("destroy", () => {
      t.$el &&
        t.$el
          .find(`.${t.params.lazy.loadingClass}`)
          .removeClass(t.params.lazy.loadingClass);
    }),
    Object.assign(t.lazy, { load: o, loadInSlide: a });
}
function qp({ swiper: t, extendParams: e, on: n }) {
  e({ controller: { control: void 0, inverse: !1, by: "slide" } }),
    (t.controller = { control: void 0 });
  function i(l, c) {
    const u = (function () {
      let m, p, g;
      return (_, v) => {
        for (p = -1, m = _.length; m - p > 1; )
          (g = (m + p) >> 1), _[g] <= v ? (p = g) : (m = g);
        return m;
      };
    })();
    (this.x = l), (this.y = c), (this.lastIndex = l.length - 1);
    let d, f;
    return (
      (this.interpolate = function (m) {
        return m
          ? ((f = u(this.x, m)),
            (d = f - 1),
            ((m - this.x[d]) * (this.y[f] - this.y[d])) /
              (this.x[f] - this.x[d]) +
              this.y[d])
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
    let d, f;
    const h = t.constructor;
    function m(p) {
      const g = t.rtlTranslate ? -t.translate : t.translate;
      t.params.controller.by === "slide" &&
        (r(p), (f = -t.controller.spline.interpolate(-g))),
        (!f || t.params.controller.by === "container") &&
          ((d =
            (p.maxTranslate() - p.minTranslate()) /
            (t.maxTranslate() - t.minTranslate())),
          (f = (g - t.minTranslate()) * d + p.minTranslate())),
        t.params.controller.inverse && (f = p.maxTranslate() - f),
        p.updateProgress(f),
        p.setTranslate(f, t),
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
      d = t.controller.control;
    let f;
    function h(m) {
      m.setTransition(l, t),
        l !== 0 &&
          (m.transitionStart(),
          m.params.autoHeight &&
            Zn(() => {
              m.updateAutoHeight();
            }),
          m.$wrapperEl.transitionEnd(() => {
            d &&
              (m.params.loop &&
                t.params.controller.by === "slide" &&
                m.loopFix(),
              m.transitionEnd());
          }));
    }
    if (Array.isArray(d))
      for (f = 0; f < d.length; f += 1)
        d[f] !== c && d[f] instanceof u && h(d[f]);
    else d instanceof u && c !== d && h(d);
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
function Hp({ swiper: t, extendParams: e, on: n }) {
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
  function r(x) {
    const T = i;
    T.length !== 0 && (T.html(""), T.html(x));
  }
  function s(x = 16) {
    const T = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(x).replace(/x/g, T);
  }
  function a(x) {
    x.attr("tabIndex", "0");
  }
  function o(x) {
    x.attr("tabIndex", "-1");
  }
  function l(x, T) {
    x.attr("role", T);
  }
  function c(x, T) {
    x.attr("aria-roledescription", T);
  }
  function u(x, T) {
    x.attr("aria-controls", T);
  }
  function d(x, T) {
    x.attr("aria-label", T);
  }
  function f(x, T) {
    x.attr("id", T);
  }
  function h(x, T) {
    x.attr("aria-live", T);
  }
  function m(x) {
    x.attr("aria-disabled", !0);
  }
  function p(x) {
    x.attr("aria-disabled", !1);
  }
  function g(x) {
    if (x.keyCode !== 13 && x.keyCode !== 32) return;
    const T = t.params.a11y,
      O = N(x.target);
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
      t.pagination && O.is(Tn(t.params.pagination.bulletClass)) && O[0].click();
  }
  function _() {
    if (t.params.loop || t.params.rewind || !t.navigation) return;
    const { $nextEl: x, $prevEl: T } = t.navigation;
    T && T.length > 0 && (t.isBeginning ? (m(T), o(T)) : (p(T), a(T))),
      x && x.length > 0 && (t.isEnd ? (m(x), o(x)) : (p(x), a(x)));
  }
  function v() {
    return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
  }
  function y() {
    return v() && t.params.pagination.clickable;
  }
  function b() {
    const x = t.params.a11y;
    v() &&
      t.pagination.bullets.each((T) => {
        const O = N(T);
        t.params.pagination.clickable &&
          (a(O),
          t.params.pagination.renderBullet ||
            (l(O, "button"),
            d(
              O,
              x.paginationBulletMessage.replace(/\{\{index\}\}/, O.index() + 1)
            ))),
          O.is(`.${t.params.pagination.bulletActiveClass}`)
            ? O.attr("aria-current", "true")
            : O.removeAttr("aria-current");
      });
  }
  const S = (x, T, O) => {
      a(x),
        x[0].tagName !== "BUTTON" && (l(x, "button"), x.on("keydown", g)),
        d(x, O),
        u(x, T);
    },
    E = () => {
      t.a11y.clicked = !0;
    },
    w = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          t.destroyed || (t.a11y.clicked = !1);
        });
      });
    },
    C = (x) => {
      if (t.a11y.clicked) return;
      const T = x.target.closest(`.${t.params.slideClass}`);
      if (!T || !t.slides.includes(T)) return;
      const O = t.slides.indexOf(T) === t.activeIndex,
        L =
          t.params.watchSlidesProgress &&
          t.visibleSlides &&
          t.visibleSlides.includes(T);
      O ||
        L ||
        (x.sourceCapabilities && x.sourceCapabilities.firesTouchEvents) ||
        (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
        t.slideTo(t.slides.indexOf(T), 0));
    },
    A = () => {
      const x = t.params.a11y;
      x.itemRoleDescriptionMessage &&
        c(N(t.slides), x.itemRoleDescriptionMessage),
        x.slideRole && l(N(t.slides), x.slideRole);
      const T = t.params.loop
        ? t.slides.filter(
            (O) => !O.classList.contains(t.params.slideDuplicateClass)
          ).length
        : t.slides.length;
      x.slideLabelMessage &&
        t.slides.each((O, L) => {
          const k = N(O),
            I = t.params.loop
              ? parseInt(k.attr("data-swiper-slide-index"), 10)
              : L,
            z = x.slideLabelMessage
              .replace(/\{\{index\}\}/, I + 1)
              .replace(/\{\{slidesLength\}\}/, T);
          d(k, z);
        });
    },
    P = () => {
      const x = t.params.a11y;
      t.$el.append(i);
      const T = t.$el;
      x.containerRoleDescriptionMessage &&
        c(T, x.containerRoleDescriptionMessage),
        x.containerMessage && d(T, x.containerMessage);
      const O = t.$wrapperEl,
        L = x.id || O.attr("id") || `swiper-wrapper-${s(16)}`,
        k = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
      f(O, L), h(O, k), A();
      let I, z;
      t.navigation && t.navigation.$nextEl && (I = t.navigation.$nextEl),
        t.navigation && t.navigation.$prevEl && (z = t.navigation.$prevEl),
        I && I.length && S(I, L, x.nextSlideMessage),
        z && z.length && S(z, L, x.prevSlideMessage),
        y() &&
          t.pagination.$el.on(
            "keydown",
            Tn(t.params.pagination.bulletClass),
            g
          ),
        t.$el.on("focus", C, !0),
        t.$el.on("pointerdown", E, !0),
        t.$el.on("pointerup", w, !0);
    };
  function $() {
    i && i.length > 0 && i.remove();
    let x, T;
    t.navigation && t.navigation.$nextEl && (x = t.navigation.$nextEl),
      t.navigation && t.navigation.$prevEl && (T = t.navigation.$prevEl),
      x && x.off("keydown", g),
      T && T.off("keydown", g),
      y() &&
        t.pagination.$el.off("keydown", Tn(t.params.pagination.bulletClass), g),
      t.$el.off("focus", C, !0),
      t.$el.off("pointerdown", E, !0),
      t.$el.off("pointerup", w, !0);
  }
  n("beforeInit", () => {
    i = N(
      `<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
    );
  }),
    n("afterInit", () => {
      t.params.a11y.enabled && P();
    }),
    n("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      t.params.a11y.enabled && A();
    }),
    n("fromEdge toEdge afterInit lock unlock", () => {
      t.params.a11y.enabled && _();
    }),
    n("paginationUpdate", () => {
      t.params.a11y.enabled && b();
    }),
    n("destroy", () => {
      t.params.a11y.enabled && $();
    });
}
function Wp({ swiper: t, extendParams: e, on: n }) {
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
  const s = (f) =>
      f
        .toString()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, ""),
    a = (f) => {
      const h = ge();
      let m;
      f ? (m = new URL(f)) : (m = h.location);
      const p = m.pathname
          .slice(1)
          .split("/")
          .filter((y) => y !== ""),
        g = p.length,
        _ = p[g - 2],
        v = p[g - 1];
      return { key: _, value: v };
    },
    o = (f, h) => {
      const m = ge();
      if (!i || !t.params.history.enabled) return;
      let p;
      t.params.url ? (p = new URL(t.params.url)) : (p = m.location);
      const g = t.slides.eq(h);
      let _ = s(g.attr("data-history"));
      if (t.params.history.root.length > 0) {
        let y = t.params.history.root;
        y[y.length - 1] === "/" && (y = y.slice(0, y.length - 1)),
          (_ = `${y}/${f}/${_}`);
      } else p.pathname.includes(f) || (_ = `${f}/${_}`);
      t.params.history.keepQuery && (_ += p.search);
      const v = m.history.state;
      (v && v.value === _) ||
        (t.params.history.replaceState
          ? m.history.replaceState({ value: _ }, null, _)
          : m.history.pushState({ value: _ }, null, _));
    },
    l = (f, h, m) => {
      if (h)
        for (let p = 0, g = t.slides.length; p < g; p += 1) {
          const _ = t.slides.eq(p);
          if (
            s(_.attr("data-history")) === h &&
            !_.hasClass(t.params.slideDuplicateClass)
          ) {
            const y = _.index();
            t.slideTo(y, f, m);
          }
        }
      else t.slideTo(0, f, m);
    },
    c = () => {
      (r = a(t.params.url)), l(t.params.speed, r.value, !1);
    },
    u = () => {
      const f = ge();
      if (t.params.history) {
        if (!f.history || !f.history.pushState) {
          (t.params.history.enabled = !1),
            (t.params.hashNavigation.enabled = !0);
          return;
        }
        (i = !0),
          (r = a(t.params.url)),
          !(!r.key && !r.value) &&
            (l(0, r.value, t.params.runCallbacksOnInit),
            t.params.history.replaceState || f.addEventListener("popstate", c));
      }
    },
    d = () => {
      const f = ge();
      t.params.history.replaceState || f.removeEventListener("popstate", c);
    };
  n("init", () => {
    t.params.history.enabled && u();
  }),
    n("destroy", () => {
      t.params.history.enabled && d();
    }),
    n("transitionEnd _freeModeNoMomentumRelease", () => {
      i && o(t.params.history.key, t.activeIndex);
    }),
    n("slideChange", () => {
      i && t.params.cssMode && o(t.params.history.key, t.activeIndex);
    });
}
function Yp({ swiper: t, extendParams: e, emit: n, on: i }) {
  let r = !1;
  const s = Ve(),
    a = ge();
  e({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
  const o = () => {
      n("hashChange");
      const d = s.location.hash.replace("#", ""),
        f = t.slides.eq(t.activeIndex).attr("data-hash");
      if (d !== f) {
        const h = t.$wrapperEl
          .children(`.${t.params.slideClass}[data-hash="${d}"]`)
          .index();
        if (typeof h > "u") return;
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
          const d = t.slides.eq(t.activeIndex),
            f = d.attr("data-hash") || d.attr("data-history");
          (s.location.hash = f || ""), n("hashSet");
        }
    },
    c = () => {
      if (
        !t.params.hashNavigation.enabled ||
        (t.params.history && t.params.history.enabled)
      )
        return;
      r = !0;
      const d = s.location.hash.replace("#", "");
      if (d)
        for (let h = 0, m = t.slides.length; h < m; h += 1) {
          const p = t.slides.eq(h);
          if (
            (p.attr("data-hash") || p.attr("data-history")) === d &&
            !p.hasClass(t.params.slideDuplicateClass)
          ) {
            const _ = p.index();
            t.slideTo(_, 0, t.params.runCallbacksOnInit, !0);
          }
        }
      t.params.hashNavigation.watchState && N(a).on("hashchange", o);
    },
    u = () => {
      t.params.hashNavigation.watchState && N(a).off("hashchange", o);
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
function Xp({ swiper: t, extendParams: e, on: n, emit: i }) {
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
      (r = Zn(() => {
        let _;
        t.params.autoplay.reverseDirection
          ? t.params.loop
            ? (t.loopFix(),
              (_ = t.slidePrev(t.params.speed, !0, !0)),
              i("autoplay"))
            : t.isBeginning
            ? t.params.autoplay.stopOnLastSlide
              ? o()
              : ((_ = t.slideTo(t.slides.length - 1, t.params.speed, !0, !0)),
                i("autoplay"))
            : ((_ = t.slidePrev(t.params.speed, !0, !0)), i("autoplay"))
          : t.params.loop
          ? (t.loopFix(),
            (_ = t.slideNext(t.params.speed, !0, !0)),
            i("autoplay"))
          : t.isEnd
          ? t.params.autoplay.stopOnLastSlide
            ? o()
            : ((_ = t.slideTo(0, t.params.speed, !0, !0)), i("autoplay"))
          : ((_ = t.slideNext(t.params.speed, !0, !0)), i("autoplay")),
          ((t.params.cssMode && t.autoplay.running) || _ === !1) && s();
      }, g));
  }
  function a() {
    return typeof r < "u" || t.autoplay.running
      ? !1
      : ((t.autoplay.running = !0), i("autoplayStart"), s(), !0);
  }
  function o() {
    return !t.autoplay.running || typeof r > "u"
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
    const p = Ve();
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
  function d() {
    t.params.autoplay.disableOnInteraction ? o() : (i("autoplayPause"), l()),
      ["transitionend", "webkitTransitionEnd"].forEach((p) => {
        t.$wrapperEl[0].removeEventListener(p, u);
      });
  }
  function f() {
    t.params.autoplay.disableOnInteraction ||
      ((t.autoplay.paused = !1), i("autoplayResume"), s());
  }
  function h() {
    t.params.autoplay.pauseOnMouseEnter &&
      (t.$el.on("mouseenter", d), t.$el.on("mouseleave", f));
  }
  function m() {
    t.$el.off("mouseenter", d), t.$el.off("mouseleave", f);
  }
  n("init", () => {
    t.params.autoplay.enabled &&
      (a(), Ve().addEventListener("visibilitychange", c), h());
  }),
    n("beforeTransitionStart", (p, g, _) => {
      t.autoplay.running &&
        (_ || !t.params.autoplay.disableOnInteraction
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
        Ve().removeEventListener("visibilitychange", c);
    }),
    Object.assign(t.autoplay, { pause: l, run: s, start: a, stop: o });
}
function Gp({ swiper: t, extendParams: e, on: n }) {
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
      (u && N(u).hasClass(t.params.thumbs.slideThumbActiveClass)) ||
      typeof c > "u" ||
      c === null
    )
      return;
    let d;
    if (
      (l.params.loop
        ? (d = parseInt(N(l.clickedSlide).attr("data-swiper-slide-index"), 10))
        : (d = c),
      t.params.loop)
    ) {
      let f = t.activeIndex;
      t.slides.eq(f).hasClass(t.params.slideDuplicateClass) &&
        (t.loopFix(),
        (t._clientLeft = t.$wrapperEl[0].clientLeft),
        (f = t.activeIndex));
      const h = t.slides
          .eq(f)
          .prevAll(`[data-swiper-slide-index="${d}"]`)
          .eq(0)
          .index(),
        m = t.slides
          .eq(f)
          .nextAll(`[data-swiper-slide-index="${d}"]`)
          .eq(0)
          .index();
      typeof h > "u"
        ? (d = m)
        : typeof m > "u"
        ? (d = h)
        : m - f < f - h
        ? (d = m)
        : (d = h);
    }
    t.slideTo(d);
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
    else if (kr(l.swiper)) {
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
    let d = 1;
    const f = t.params.thumbs.slideThumbActiveClass;
    if (
      (t.params.slidesPerView > 1 &&
        !t.params.centeredSlides &&
        (d = t.params.slidesPerView),
      t.params.thumbs.multipleActiveThumbs || (d = 1),
      (d = Math.floor(d)),
      c.slides.removeClass(f),
      c.params.loop || (c.params.virtual && c.params.virtual.enabled))
    )
      for (let p = 0; p < d; p += 1)
        c.$wrapperEl
          .children(`[data-swiper-slide-index="${t.realIndex + p}"]`)
          .addClass(f);
    else
      for (let p = 0; p < d; p += 1) c.slides.eq(t.realIndex + p).addClass(f);
    const h = t.params.thumbs.autoScrollOffset,
      m = h && !c.params.loop;
    if (t.realIndex !== c.realIndex || m) {
      let p = c.activeIndex,
        g,
        _;
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
          y = c.slides
            .eq(p)
            .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
            .eq(0)
            .index();
        typeof v > "u"
          ? (g = y)
          : typeof y > "u"
          ? (g = v)
          : y - p === p - v
          ? (g = c.params.slidesPerGroup > 1 ? y : p)
          : y - p < p - v
          ? (g = y)
          : (g = v),
          (_ = t.activeIndex > t.previousIndex ? "next" : "prev");
      } else (g = t.realIndex), (_ = g > t.previousIndex ? "next" : "prev");
      m && (g += _ === "next" ? h : -1 * h),
        c.visibleSlidesIndexes &&
          c.visibleSlidesIndexes.indexOf(g) < 0 &&
          (c.params.centeredSlides &&
            (g > p
              ? (g = g - Math.floor(u / 2) + 1)
              : (g = g + Math.floor(u / 2) - 1)),
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
function jp({ swiper: t, extendParams: e, emit: n, once: i }) {
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
      t.freeMode.onTouchEnd({ currentPos: t.rtl ? t.translate : -t.translate });
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
        time: Lt(),
      });
  }
  function a({ currentPos: o }) {
    const {
        params: l,
        $wrapperEl: c,
        rtlTranslate: u,
        snapGrid: d,
        touchEventsData: f,
      } = t,
      m = Lt() - f.touchStartTime;
    if (o < -t.minTranslate()) {
      t.slideTo(t.activeIndex);
      return;
    }
    if (o > -t.maxTranslate()) {
      t.slides.length < d.length
        ? t.slideTo(d.length - 1)
        : t.slideTo(t.slides.length - 1);
      return;
    }
    if (l.freeMode.momentum) {
      if (f.velocities.length > 1) {
        const E = f.velocities.pop(),
          w = f.velocities.pop(),
          C = E.position - w.position,
          A = E.time - w.time;
        (t.velocity = C / A),
          (t.velocity /= 2),
          Math.abs(t.velocity) < l.freeMode.minimumVelocity && (t.velocity = 0),
          (A > 150 || Lt() - E.time > 300) && (t.velocity = 0);
      } else t.velocity = 0;
      (t.velocity *= l.freeMode.momentumVelocityRatio),
        (f.velocities.length = 0);
      let p = 1e3 * l.freeMode.momentumRatio;
      const g = t.velocity * p;
      let _ = t.translate + g;
      u && (_ = -_);
      let v = !1,
        y;
      const b = Math.abs(t.velocity) * 20 * l.freeMode.momentumBounceRatio;
      let S;
      if (_ < t.maxTranslate())
        l.freeMode.momentumBounce
          ? (_ + t.maxTranslate() < -b && (_ = t.maxTranslate() - b),
            (y = t.maxTranslate()),
            (v = !0),
            (f.allowMomentumBounce = !0))
          : (_ = t.maxTranslate()),
          l.loop && l.centeredSlides && (S = !0);
      else if (_ > t.minTranslate())
        l.freeMode.momentumBounce
          ? (_ - t.minTranslate() > b && (_ = t.minTranslate() + b),
            (y = t.minTranslate()),
            (v = !0),
            (f.allowMomentumBounce = !0))
          : (_ = t.minTranslate()),
          l.loop && l.centeredSlides && (S = !0);
      else if (l.freeMode.sticky) {
        let E;
        for (let w = 0; w < d.length; w += 1)
          if (d[w] > -_) {
            E = w;
            break;
          }
        Math.abs(d[E] - _) < Math.abs(d[E - 1] - _) ||
        t.swipeDirection === "next"
          ? (_ = d[E])
          : (_ = d[E - 1]),
          (_ = -_);
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
            ? (p = Math.abs((-_ - t.translate) / t.velocity))
            : (p = Math.abs((_ - t.translate) / t.velocity)),
          l.freeMode.sticky)
        ) {
          const E = Math.abs((u ? -_ : _) - t.translate),
            w = t.slidesSizesGrid[t.activeIndex];
          E < w
            ? (p = l.speed)
            : E < 2 * w
            ? (p = l.speed * 1.5)
            : (p = l.speed * 2.5);
        }
      } else if (l.freeMode.sticky) {
        t.slideToClosest();
        return;
      }
      l.freeMode.momentumBounce && v
        ? (t.updateProgress(y),
          t.setTransition(p),
          t.setTranslate(_),
          t.transitionStart(!0, t.swipeDirection),
          (t.animating = !0),
          c.transitionEnd(() => {
            !t ||
              t.destroyed ||
              !f.allowMomentumBounce ||
              (n("momentumBounce"),
              t.setTransition(l.speed),
              setTimeout(() => {
                t.setTranslate(y),
                  c.transitionEnd(() => {
                    !t || t.destroyed || t.transitionEnd();
                  });
              }, 0));
          }))
        : t.velocity
        ? (n("_freeModeNoMomentumRelease"),
          t.updateProgress(_),
          t.setTransition(p),
          t.setTranslate(_),
          t.transitionStart(!0, t.swipeDirection),
          t.animating ||
            ((t.animating = !0),
            c.transitionEnd(() => {
              !t || t.destroyed || t.transitionEnd();
            })))
        : t.updateProgress(_),
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
function Up({ swiper: t, extendParams: e }) {
  e({ grid: { rows: 1, fill: "column" } });
  let n, i, r;
  const s = (l) => {
      const { slidesPerView: c } = t.params,
        { rows: u, fill: d } = t.params.grid;
      (i = n / u),
        (r = Math.floor(l / u)),
        Math.floor(l / u) === l / u ? (n = l) : (n = Math.ceil(l / u) * u),
        c !== "auto" && d === "row" && (n = Math.max(n, c * u));
    },
    a = (l, c, u, d) => {
      const { slidesPerGroup: f, spaceBetween: h } = t.params,
        { rows: m, fill: p } = t.params.grid;
      let g, _, v;
      if (p === "row" && f > 1) {
        const y = Math.floor(l / (f * m)),
          b = l - m * f * y,
          S = y === 0 ? f : Math.min(Math.ceil((u - y * m * f) / m), f);
        (v = Math.floor(b / S)),
          (_ = b - v * S + y * f),
          (g = _ + (v * n) / m),
          c.css({ "-webkit-order": g, order: g });
      } else
        p === "column"
          ? ((_ = Math.floor(l / m)),
            (v = l - _ * m),
            (_ > r || (_ === r && v === m - 1)) &&
              ((v += 1), v >= m && ((v = 0), (_ += 1))))
          : ((v = Math.floor(l / i)), (_ = l - v * i));
      c.css(d("margin-top"), v !== 0 ? h && `${h}px` : "");
    },
    o = (l, c, u) => {
      const { spaceBetween: d, centeredSlides: f, roundLengths: h } = t.params,
        { rows: m } = t.params.grid;
      if (
        ((t.virtualSize = (l + d) * n),
        (t.virtualSize = Math.ceil(t.virtualSize / m) - d),
        t.$wrapperEl.css({ [u("width")]: `${t.virtualSize + d}px` }),
        f)
      ) {
        c.splice(0, c.length);
        const p = [];
        for (let g = 0; g < c.length; g += 1) {
          let _ = c[g];
          h && (_ = Math.floor(_)), c[g] < t.virtualSize + c[0] && p.push(_);
        }
        c.push(...p);
      }
    };
  t.grid = { initSlides: s, updateSlide: a, updateWrapperSize: o };
}
function Kp(t) {
  const e = this,
    { $wrapperEl: n, params: i } = e;
  if ((i.loop && e.loopDestroy(), typeof t == "object" && "length" in t))
    for (let r = 0; r < t.length; r += 1) t[r] && n.append(t[r]);
  else n.append(t);
  i.loop && e.loopCreate(), i.observer || e.update();
}
function Zp(t) {
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
function Qp(t, e) {
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
    const d = n.slides.eq(u);
    d.remove(), c.unshift(d);
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
function Jp(t) {
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
  } else
    (o = t),
      e.slides[o] && e.slides.eq(o).remove(),
      o < a && (a -= 1),
      (a = Math.max(a, 0));
  n.loop && e.loopCreate(),
    n.observer || e.update(),
    n.loop ? e.slideTo(a + e.loopedSlides, 0, !1) : e.slideTo(a, 0, !1);
}
function em() {
  const t = this,
    e = [];
  for (let n = 0; n < t.slides.length; n += 1) e.push(n);
  t.removeSlide(e);
}
function tm({ swiper: t }) {
  Object.assign(t, {
    appendSlide: Kp.bind(t),
    prependSlide: Zp.bind(t),
    addSlide: Qp.bind(t),
    removeSlide: Jp.bind(t),
    removeAllSlides: em.bind(t),
  });
}
function yr(t) {
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
    const d = a ? a() : {};
    Object.assign(n.params, d), Object.assign(n.originalParams, d);
  }),
    i("setTranslate", () => {
      n.params.effect === e && r();
    }),
    i("setTransition", (d, f) => {
      n.params.effect === e && s(f);
    }),
    i("transitionEnd", () => {
      if (n.params.effect === e && l) {
        if (!c || !c().slideShadows) return;
        n.slides.each((d) => {
          n.$(d)
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
function hs(t, e) {
  return t.transformEl
    ? e
        .find(t.transformEl)
        .css({
          "backface-visibility": "hidden",
          "-webkit-backface-visibility": "hidden",
        })
    : e;
}
function va({ swiper: t, duration: e, transformEl: n, allSlides: i }) {
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
function nm({ swiper: t, extendParams: e, on: n }) {
  e({ fadeEffect: { crossFade: !1, transformEl: null } }),
    yr({
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
          let d = 0;
          t.isHorizontal() || ((d = u), (u = 0));
          const f = t.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(l[0].progress), 0)
            : 1 + Math.min(Math.max(l[0].progress, -1), 0);
          hs(a, l)
            .css({ opacity: f })
            .transform(`translate3d(${u}px, ${d}px, 0px)`);
        }
      },
      setTransition: (s) => {
        const { transformEl: a } = t.params.fadeEffect;
        (a ? t.slides.find(a) : t.slides).transition(s),
          va({ swiper: t, duration: s, transformEl: a, allSlides: !0 });
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
function im({ swiper: t, extendParams: e, on: n }) {
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
      d = c
        ? o.find(".swiper-slide-shadow-right")
        : o.find(".swiper-slide-shadow-bottom");
    u.length === 0 &&
      ((u = N(`<div class="swiper-slide-shadow-${c ? "left" : "top"}"></div>`)),
      o.append(u)),
      d.length === 0 &&
        ((d = N(
          `<div class="swiper-slide-shadow-${c ? "right" : "bottom"}"></div>`
        )),
        o.append(d)),
      u.length && (u[0].style.opacity = Math.max(-l, 0)),
      d.length && (d[0].style.opacity = Math.max(l, 0));
  };
  yr({
    effect: "cube",
    swiper: t,
    on: n,
    setTranslate: () => {
      const {
          $el: o,
          $wrapperEl: l,
          slides: c,
          width: u,
          height: d,
          rtlTranslate: f,
          size: h,
          browser: m,
        } = t,
        p = t.params.cubeEffect,
        g = t.isHorizontal(),
        _ = t.virtual && t.params.virtual.enabled;
      let v = 0,
        y;
      p.shadow &&
        (g
          ? ((y = l.find(".swiper-cube-shadow")),
            y.length === 0 &&
              ((y = N('<div class="swiper-cube-shadow"></div>')), l.append(y)),
            y.css({ height: `${u}px` }))
          : ((y = o.find(".swiper-cube-shadow")),
            y.length === 0 &&
              ((y = N('<div class="swiper-cube-shadow"></div>')),
              o.append(y))));
      for (let S = 0; S < c.length; S += 1) {
        const E = c.eq(S);
        let w = S;
        _ && (w = parseInt(E.attr("data-swiper-slide-index"), 10));
        let C = w * 90,
          A = Math.floor(C / 360);
        f && ((C = -C), (A = Math.floor(-C / 360)));
        const P = Math.max(Math.min(E[0].progress, 1), -1);
        let $ = 0,
          x = 0,
          T = 0;
        w % 4 === 0
          ? (($ = -A * 4 * h), (T = 0))
          : (w - 1) % 4 === 0
          ? (($ = 0), (T = -A * 4 * h))
          : (w - 2) % 4 === 0
          ? (($ = h + A * 4 * h), (T = h))
          : (w - 3) % 4 === 0 && (($ = -h), (T = 3 * h + h * 4 * A)),
          f && ($ = -$),
          g || ((x = $), ($ = 0));
        const O = `rotateX(${g ? 0 : -C}deg) rotateY(${
          g ? C : 0
        }deg) translate3d(${$}px, ${x}px, ${T}px)`;
        P <= 1 &&
          P > -1 &&
          ((v = w * 90 + P * 90), f && (v = -w * 90 - P * 90)),
          E.transform(O),
          p.slideShadows && i(E, P, g);
      }
      if (
        (l.css({
          "-webkit-transform-origin": `50% 50% -${h / 2}px`,
          "transform-origin": `50% 50% -${h / 2}px`,
        }),
        p.shadow)
      )
        if (g)
          y.transform(
            `translate3d(0px, ${u / 2 + p.shadowOffset}px, ${
              -u / 2
            }px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`
          );
        else {
          const S = Math.abs(v) - Math.floor(Math.abs(v) / 90) * 90,
            E =
              1.5 -
              (Math.sin((S * 2 * Math.PI) / 360) / 2 +
                Math.cos((S * 2 * Math.PI) / 360) / 2),
            w = p.shadowScale,
            C = p.shadowScale / E,
            A = p.shadowOffset;
          y.transform(
            `scale3d(${w}, 1, ${C}) translate3d(0px, ${d / 2 + A}px, ${
              -d / 2 / C
            }px) rotateX(-90deg)`
          );
        }
      const b = m.isSafari || m.isWebView ? -h / 2 : 0;
      l.transform(
        `translate3d(0px,0,${b}px) rotateX(${
          t.isHorizontal() ? 0 : v
        }deg) rotateY(${t.isHorizontal() ? -v : 0}deg)`
      ),
        l[0].style.setProperty("--swiper-cube-translate-z", `${b}px`);
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
        i(N(l), c, o);
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
function lr(t, e, n) {
  const i = `swiper-slide-shadow${n ? `-${n}` : ""}`,
    r = t.transformEl ? e.find(t.transformEl) : e;
  let s = r.children(`.${i}`);
  return (
    s.length ||
      ((s = N(`<div class="swiper-slide-shadow${n ? `-${n}` : ""}"></div>`)),
      r.append(s)),
    s
  );
}
function rm({ swiper: t, extendParams: e, on: n }) {
  e({ flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null } });
  const i = (o, l, c) => {
    let u = t.isHorizontal()
        ? o.find(".swiper-slide-shadow-left")
        : o.find(".swiper-slide-shadow-top"),
      d = t.isHorizontal()
        ? o.find(".swiper-slide-shadow-right")
        : o.find(".swiper-slide-shadow-bottom");
    u.length === 0 && (u = lr(c, o, t.isHorizontal() ? "left" : "top")),
      d.length === 0 && (d = lr(c, o, t.isHorizontal() ? "right" : "bottom")),
      u.length && (u[0].style.opacity = Math.max(-l, 0)),
      d.length && (d[0].style.opacity = Math.max(l, 0));
  };
  yr({
    effect: "flip",
    swiper: t,
    on: n,
    setTranslate: () => {
      const { slides: o, rtlTranslate: l } = t,
        c = t.params.flipEffect;
      for (let u = 0; u < o.length; u += 1) {
        const d = o.eq(u);
        let f = d[0].progress;
        t.params.flipEffect.limitRotation &&
          (f = Math.max(Math.min(d[0].progress, 1), -1));
        const h = d[0].swiperSlideOffset;
        let p = -180 * f,
          g = 0,
          _ = t.params.cssMode ? -h - t.translate : -h,
          v = 0;
        t.isHorizontal()
          ? l && (p = -p)
          : ((v = _), (_ = 0), (g = -p), (p = 0)),
          (d[0].style.zIndex = -Math.abs(Math.round(f)) + o.length),
          c.slideShadows && i(d, f, c);
        const y = `translate3d(${_}px, ${v}px, 0px) rotateX(${g}deg) rotateY(${p}deg)`;
        hs(c, d).transform(y);
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
        va({ swiper: t, duration: o, transformEl: l });
    },
    recreateShadows: () => {
      const o = t.params.flipEffect;
      t.slides.each((l) => {
        const c = N(l);
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
function sm({ swiper: t, extendParams: e, on: n }) {
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
    yr({
      effect: "coverflow",
      swiper: t,
      on: n,
      setTranslate: () => {
        const { width: s, height: a, slides: o, slidesSizesGrid: l } = t,
          c = t.params.coverflowEffect,
          u = t.isHorizontal(),
          d = t.translate,
          f = u ? -d + s / 2 : -d + a / 2,
          h = u ? c.rotate : -c.rotate,
          m = c.depth;
        for (let p = 0, g = o.length; p < g; p += 1) {
          const _ = o.eq(p),
            v = l[p],
            y = _[0].swiperSlideOffset,
            b = (f - y - v / 2) / v,
            S =
              typeof c.modifier == "function" ? c.modifier(b) : b * c.modifier;
          let E = u ? h * S : 0,
            w = u ? 0 : h * S,
            C = -m * Math.abs(S),
            A = c.stretch;
          typeof A == "string" &&
            A.indexOf("%") !== -1 &&
            (A = (parseFloat(c.stretch) / 100) * v);
          let P = u ? 0 : A * S,
            $ = u ? A * S : 0,
            x = 1 - (1 - c.scale) * Math.abs(S);
          Math.abs($) < 0.001 && ($ = 0),
            Math.abs(P) < 0.001 && (P = 0),
            Math.abs(C) < 0.001 && (C = 0),
            Math.abs(E) < 0.001 && (E = 0),
            Math.abs(w) < 0.001 && (w = 0),
            Math.abs(x) < 0.001 && (x = 0);
          const T = `translate3d(${$}px,${P}px,${C}px)  rotateX(${w}deg) rotateY(${E}deg) scale(${x})`;
          if (
            (hs(c, _).transform(T),
            (_[0].style.zIndex = -Math.abs(Math.round(S)) + 1),
            c.slideShadows)
          ) {
            let L = u
                ? _.find(".swiper-slide-shadow-left")
                : _.find(".swiper-slide-shadow-top"),
              k = u
                ? _.find(".swiper-slide-shadow-right")
                : _.find(".swiper-slide-shadow-bottom");
            L.length === 0 && (L = lr(c, _, u ? "left" : "top")),
              k.length === 0 && (k = lr(c, _, u ? "right" : "bottom")),
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
function am({ swiper: t, extendParams: e, on: n }) {
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
  yr({
    effect: "creative",
    swiper: t,
    on: n,
    setTranslate: () => {
      const { slides: a, $wrapperEl: o, slidesSizesGrid: l } = t,
        c = t.params.creativeEffect,
        { progressMultiplier: u } = c,
        d = t.params.centeredSlides;
      if (d) {
        const f = l[0] / 2 - t.params.slidesOffsetBefore || 0;
        o.transform(`translateX(calc(50% - ${f}px))`);
      }
      for (let f = 0; f < a.length; f += 1) {
        const h = a.eq(f),
          m = h[0].progress,
          p = Math.min(
            Math.max(h[0].progress, -c.limitProgress),
            c.limitProgress
          );
        let g = p;
        d ||
          (g = Math.min(
            Math.max(h[0].originalProgress, -c.limitProgress),
            c.limitProgress
          ));
        const _ = h[0].swiperSlideOffset,
          v = [t.params.cssMode ? -_ - t.translate : -_, 0, 0],
          y = [0, 0, 0];
        let b = !1;
        t.isHorizontal() || ((v[1] = v[0]), (v[0] = 0));
        let S = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1,
        };
        p < 0 ? ((S = c.next), (b = !0)) : p > 0 && ((S = c.prev), (b = !0)),
          v.forEach((x, T) => {
            v[T] = `calc(${x}px + (${i(S.translate[T])} * ${Math.abs(p * u)}))`;
          }),
          y.forEach((x, T) => {
            y[T] = S.rotate[T] * Math.abs(p * u);
          }),
          (h[0].style.zIndex = -Math.abs(Math.round(m)) + a.length);
        const E = v.join(", "),
          w = `rotateX(${y[0]}deg) rotateY(${y[1]}deg) rotateZ(${y[2]}deg)`,
          C =
            g < 0
              ? `scale(${1 + (1 - S.scale) * g * u})`
              : `scale(${1 - (1 - S.scale) * g * u})`,
          A = g < 0 ? 1 + (1 - S.opacity) * g * u : 1 - (1 - S.opacity) * g * u,
          P = `translate3d(${E}) ${w} ${C}`;
        if ((b && S.shadow) || !b) {
          let x = h.children(".swiper-slide-shadow");
          if ((x.length === 0 && S.shadow && (x = lr(c, h)), x.length)) {
            const T = c.shadowPerProgress ? p * (1 / c.limitProgress) : p;
            x[0].style.opacity = Math.min(Math.max(Math.abs(T), 0), 1);
          }
        }
        const $ = hs(c, h);
        $.transform(P).css({ opacity: A }),
          S.origin && $.css("transform-origin", S.origin);
      }
    },
    setTransition: (a) => {
      const { transformEl: o } = t.params.creativeEffect;
      (o ? t.slides.find(o) : t.slides)
        .transition(a)
        .find(".swiper-slide-shadow")
        .transition(a),
        va({ swiper: t, duration: a, transformEl: o, allSlides: !0 });
    },
    perspective: () => t.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: !0,
      virtualTranslate: !t.params.cssMode,
    }),
  });
}
function om({ swiper: t, extendParams: e, on: n }) {
  e({
    cardsEffect: {
      slideShadows: !0,
      transformEl: null,
      rotate: !0,
      perSlideRotate: 2,
      perSlideOffset: 8,
    },
  }),
    yr({
      effect: "cards",
      swiper: t,
      on: n,
      setTranslate: () => {
        const { slides: s, activeIndex: a } = t,
          o = t.params.cardsEffect,
          { startTranslate: l, isTouched: c } = t.touchEventsData,
          u = t.translate;
        for (let d = 0; d < s.length; d += 1) {
          const f = s.eq(d),
            h = f[0].progress,
            m = Math.min(Math.max(h, -4), 4);
          let p = f[0].swiperSlideOffset;
          t.params.centeredSlides &&
            !t.params.cssMode &&
            t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),
            t.params.centeredSlides &&
              t.params.cssMode &&
              (p -= s[0].swiperSlideOffset);
          let g = t.params.cssMode ? -p - t.translate : -p,
            _ = 0;
          const v = -100 * Math.abs(m);
          let y = 1,
            b = -o.perSlideRotate * m,
            S = o.perSlideOffset - Math.abs(m) * 0.75;
          const E =
              t.virtual && t.params.virtual.enabled ? t.virtual.from + d : d,
            w =
              (E === a || E === a - 1) &&
              m > 0 &&
              m < 1 &&
              (c || t.params.cssMode) &&
              u < l,
            C =
              (E === a || E === a + 1) &&
              m < 0 &&
              m > -1 &&
              (c || t.params.cssMode) &&
              u > l;
          if (w || C) {
            const x = (1 - Math.abs((Math.abs(m) - 0.5) / 0.5)) ** 0.5;
            (b += -28 * m * x),
              (y += -0.5 * x),
              (S += 96 * x),
              (_ = `${-25 * x * Math.abs(m)}%`);
          }
          if (
            (m < 0
              ? (g = `calc(${g}px + (${S * Math.abs(m)}%))`)
              : m > 0
              ? (g = `calc(${g}px + (-${S * Math.abs(m)}%))`)
              : (g = `${g}px`),
            !t.isHorizontal())
          ) {
            const x = _;
            (_ = g), (g = x);
          }
          const A = m < 0 ? `${1 + (1 - y) * m}` : `${1 - (1 - y) * m}`,
            P = `
translate3d(${g}, ${_}, ${v}px)
rotateZ(${o.rotate ? b : 0}deg)
scale(${A})
`;
          if (o.slideShadows) {
            let x = f.find(".swiper-slide-shadow");
            x.length === 0 && (x = lr(o, f)),
              x.length &&
                (x[0].style.opacity = Math.min(
                  Math.max((Math.abs(m) - 0.5) / 0.5, 0),
                  1
                ));
          }
          (f[0].style.zIndex = -Math.abs(Math.round(h)) + s.length),
            hs(o, f).transform(P);
        }
      },
      setTransition: (s) => {
        const { transformEl: a } = t.params.cardsEffect;
        (a ? t.slides.find(a) : t.slides)
          .transition(s)
          .find(".swiper-slide-shadow")
          .transition(s),
          va({ swiper: t, duration: s, transformEl: a });
      },
      perspective: () => !0,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !t.params.cssMode,
      }),
    });
}
const lm = [
  Lp,
  Ip,
  zp,
  Dp,
  Rp,
  Np,
  Bp,
  Fp,
  Vp,
  qp,
  Hp,
  Wp,
  Yp,
  Xp,
  Gp,
  jp,
  Up,
  tm,
  nm,
  im,
  rm,
  sm,
  am,
  om,
];
vt.use(lm);
let Oa = null;
const ou = () => {
  const t = document.querySelector(".swiper[work-slider='component']");
  if (!t) return;
  const e = () => window.innerWidth >= 768,
    n = () => {
      const r = e();
      Oa = new vt(t, {
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
              (document.querySelector("[data-slider-current]").textContent = a);
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
      r !== i && ((i = r), Oa && Oa.destroy(!0, !0), n());
    });
};
function Sn(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function lu(t, e) {
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
 */ var Rt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  cr = { duration: 0.5, overwrite: !1, delay: 0 },
  Yo,
  Je,
  be,
  mn = 1e8,
  lt = 1 / mn,
  ao = Math.PI * 2,
  cm = ao / 4,
  um = 0,
  cu = Math.sqrt,
  dm = Math.cos,
  fm = Math.sin,
  Ue = function (e) {
    return typeof e == "string";
  },
  ke = function (e) {
    return typeof e == "function";
  },
  On = function (e) {
    return typeof e == "number";
  },
  Xo = function (e) {
    return typeof e > "u";
  },
  vn = function (e) {
    return typeof e == "object";
  },
  St = function (e) {
    return e !== !1;
  },
  Go = function () {
    return typeof window < "u";
  },
  ys = function (e) {
    return ke(e) || Ue(e);
  },
  uu =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  ut = Array.isArray,
  oo = /(?:-?\.?\d|\.)+/gi,
  du = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Ui = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  La = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  fu = /[+-]=-?[.\d]+/,
  hu = /[^,'"\[\]\s]+/gi,
  hm = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  we,
  cn,
  lo,
  jo,
  Nt = {},
  Qs = {},
  pu,
  mu = function (e) {
    return (Qs = ur(e, Nt)) && Ct;
  },
  Uo = function (e, n) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      n,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  ns = function (e, n) {
    return !n && console.warn(e);
  },
  gu = function (e, n) {
    return (e && (Nt[e] = n) && Qs && (Qs[e] = n)) || Nt;
  },
  is = function () {
    return 0;
  },
  pm = { suppressEvents: !0, isStart: !0, kill: !1 },
  Rs = { suppressEvents: !0, kill: !1 },
  mm = { suppressEvents: !0 },
  Ko = {},
  jn = [],
  co = {},
  vu,
  At = {},
  Ia = {},
  ql = 30,
  Ns = [],
  Zo = "",
  Qo = function (e) {
    var n = e[0],
      i,
      r;
    if ((vn(n) || ke(n) || (e = [e]), !(i = (n._gsap || {}).harness))) {
      for (r = Ns.length; r-- && !Ns[r].targetTest(n); );
      i = Ns[r];
    }
    for (r = e.length; r--; )
      (e[r] && (e[r]._gsap || (e[r]._gsap = new Vu(e[r], i)))) ||
        e.splice(r, 1);
    return e;
  },
  bi = function (e) {
    return e._gsap || Qo(Gt(e))[0]._gsap;
  },
  yu = function (e, n, i) {
    return (i = e[n]) && ke(i)
      ? e[n]()
      : (Xo(i) && e.getAttribute && e.getAttribute(n)) || i;
  },
  Tt = function (e, n) {
    return (e = e.split(",")).forEach(n) || e;
  },
  ze = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Fe = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  tr = function (e, n) {
    var i = n.charAt(0),
      r = parseFloat(n.substr(2));
    return (
      (e = parseFloat(e)),
      i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
    );
  },
  gm = function (e, n) {
    for (var i = n.length, r = 0; e.indexOf(n[r]) < 0 && ++r < i; );
    return r < i;
  },
  Js = function () {
    var e = jn.length,
      n = jn.slice(0),
      i,
      r;
    for (co = {}, jn.length = 0, i = 0; i < e; i++)
      (r = n[i]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  },
  Jo = function (e) {
    return !!(e._initted || e._startAt || e.add);
  },
  _u = function (e, n, i, r) {
    jn.length && !Je && Js(),
      e.render(n, i, !!(Je && n < 0 && Jo(e))),
      jn.length && !Je && Js();
  },
  bu = function (e) {
    var n = parseFloat(e);
    return (n || n === 0) && (e + "").match(hu).length < 2
      ? n
      : Ue(e)
      ? e.trim()
      : e;
  },
  xu = function (e) {
    return e;
  },
  Bt = function (e, n) {
    for (var i in n) i in e || (e[i] = n[i]);
    return e;
  },
  vm = function (e) {
    return function (n, i) {
      for (var r in i)
        r in n || (r === "duration" && e) || r === "ease" || (n[r] = i[r]);
    };
  },
  ur = function (e, n) {
    for (var i in n) e[i] = n[i];
    return e;
  },
  Hl = function t(e, n) {
    for (var i in n)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (e[i] = vn(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i]);
    return e;
  },
  ea = function (e, n) {
    var i = {},
      r;
    for (r in e) r in n || (i[r] = e[r]);
    return i;
  },
  Br = function (e) {
    var n = e.parent || we,
      i = e.keyframes ? vm(ut(e.keyframes)) : Bt;
    if (St(e.inherit))
      for (; n; ) i(e, n.vars.defaults), (n = n.parent || n._dp);
    return e;
  },
  ym = function (e, n) {
    for (var i = e.length, r = i === n.length; r && i-- && e[i] === n[i]; );
    return i < 0;
  },
  Su = function (e, n, i, r, s) {
    var a = e[r],
      o;
    if (s) for (o = n[s]; a && a[s] > o; ) a = a._prev;
    return (
      a ? ((n._next = a._next), (a._next = n)) : ((n._next = e[i]), (e[i] = n)),
      n._next ? (n._next._prev = n) : (e[r] = n),
      (n._prev = a),
      (n.parent = n._dp = e),
      n
    );
  },
  ya = function (e, n, i, r) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var s = n._prev,
      a = n._next;
    s ? (s._next = a) : e[i] === n && (e[i] = a),
      a ? (a._prev = s) : e[r] === n && (e[r] = s),
      (n._next = n._prev = n.parent = null);
  },
  Qn = function (e, n) {
    e.parent &&
      (!n || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  },
  xi = function (e, n) {
    if (e && (!n || n._end > e._dur || n._start < 0))
      for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
    return e;
  },
  _m = function (e) {
    for (var n = e.parent; n && n.parent; )
      (n._dirty = 1), n.totalDuration(), (n = n.parent);
    return e;
  },
  uo = function (e, n, i, r) {
    return (
      e._startAt &&
      (Je
        ? e._startAt.revert(Rs)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(n, !0, r))
    );
  },
  bm = function t(e) {
    return !e || (e._ts && t(e.parent));
  },
  Wl = function (e) {
    return e._repeat ? dr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  dr = function (e, n) {
    var i = Math.floor((e = Fe(e / n)));
    return e && i === e ? i - 1 : i;
  },
  ta = function (e, n) {
    return (
      (e - n._start) * n._ts +
      (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
    );
  },
  _a = function (e) {
    return (e._end = Fe(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || lt) || 0)
    ));
  },
  ba = function (e, n) {
    var i = e._dp;
    return (
      i &&
        i.smoothChildTiming &&
        e._ts &&
        ((e._start = Fe(
          i._time -
            (e._ts > 0
              ? n / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)
        )),
        _a(e),
        i._dirty || xi(i, e)),
      e
    );
  },
  Tu = function (e, n) {
    var i;
    if (
      ((n._time ||
        (!n._dur && n._initted) ||
        (n._start < e._time && (n._dur || !n.add))) &&
        ((i = ta(e.rawTime(), n)),
        (!n._dur || ps(0, n.totalDuration(), i) - n._tTime > lt) &&
          n.render(i, !0)),
      xi(e, n)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (i = e; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      e._zTime = -1e-8;
    }
  },
  dn = function (e, n, i, r) {
    return (
      n.parent && Qn(n),
      (n._start = Fe(
        (On(i) ? i : i || e !== we ? Wt(e, i, n) : e._time) + n._delay
      )),
      (n._end = Fe(
        n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)
      )),
      Su(e, n, "_first", "_last", e._sort ? "_start" : 0),
      fo(n) || (e._recent = n),
      r || Tu(e, n),
      e._ts < 0 && ba(e, e._tTime),
      e
    );
  },
  Eu = function (e, n) {
    return (
      (Nt.ScrollTrigger || Uo("scrollTrigger", n)) &&
      Nt.ScrollTrigger.create(n, e)
    );
  },
  wu = function (e, n, i, r, s) {
    if ((tl(e, n, s), !e._initted)) return 1;
    if (
      !i &&
      e._pt &&
      !Je &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      vu !== It.frame
    )
      return jn.push(e), (e._lazy = [s, r]), 1;
  },
  xm = function t(e) {
    var n = e.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
  },
  fo = function (e) {
    var n = e.data;
    return n === "isFromStart" || n === "isStart";
  },
  Sm = function (e, n, i, r) {
    var s = e.ratio,
      a =
        n < 0 ||
        (!n &&
          ((!e._start && xm(e) && !(!e._initted && fo(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !fo(e))))
          ? 0
          : 1,
      o = e._rDelay,
      l = 0,
      c,
      u,
      d;
    if (
      (o &&
        e._repeat &&
        ((l = ps(0, e._tDur, n)),
        (u = dr(l, o)),
        e._yoyo && u & 1 && (a = 1 - a),
        u !== dr(e._tTime, o) &&
          ((s = 1 - a), e.vars.repeatRefresh && e._initted && e.invalidate())),
      a !== s || Je || r || e._zTime === lt || (!n && e._zTime))
    ) {
      if (!e._initted && wu(e, n, r, i, l)) return;
      for (
        d = e._zTime,
          e._zTime = n || (i ? lt : 0),
          i || (i = n && !d),
          e.ratio = a,
          e._from && (a = 1 - a),
          e._time = 0,
          e._tTime = l,
          c = e._pt;
        c;

      )
        c.r(a, c.d), (c = c._next);
      n < 0 && uo(e, n, i, !0),
        e._onUpdate && !i && Dt(e, "onUpdate"),
        l && e._repeat && !i && e.parent && Dt(e, "onRepeat"),
        (n >= e._tDur || n < 0) &&
          e.ratio === a &&
          (a && Qn(e, 1),
          !i &&
            !Je &&
            (Dt(e, a ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = n);
  },
  Tm = function (e, n, i) {
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
  fr = function (e, n, i, r) {
    var s = e._repeat,
      a = Fe(n) || 0,
      o = e._tTime / e._tDur;
    return (
      o && !r && (e._time *= a / e._dur),
      (e._dur = a),
      (e._tDur = s ? (s < 0 ? 1e10 : Fe(a * (s + 1) + e._rDelay * s)) : a),
      o > 0 && !r && ba(e, (e._tTime = e._tDur * o)),
      e.parent && _a(e),
      i || xi(e.parent, e),
      e
    );
  },
  Yl = function (e) {
    return e instanceof yt ? xi(e) : fr(e, e._dur);
  },
  Em = { _start: 0, endTime: is, totalDuration: is },
  Wt = function t(e, n, i) {
    var r = e.labels,
      s = e._recent || Em,
      a = e.duration() >= mn ? s.endTime(!1) : e._dur,
      o,
      l,
      c;
    return Ue(n) && (isNaN(n) || n in r)
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
            c && i && (l = (l / 100) * (ut(i) ? i[0] : i).totalDuration()),
            o > 1 ? t(e, n.substr(0, o - 1), i) + l : a + l))
      : n == null
      ? a
      : +n;
  },
  Fr = function (e, n, i) {
    var r = On(n[1]),
      s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      a = n[s],
      o,
      l;
    if ((r && (a.duration = n[1]), (a.parent = i), e)) {
      for (o = a, l = i; l && !("immediateRender" in o); )
        (o = l.vars.defaults || {}), (l = St(l.vars.inherit) && l.parent);
      (a.immediateRender = St(o.immediateRender)),
        e < 2 ? (a.runBackwards = 1) : (a.startAt = n[s - 1]);
    }
    return new Be(n[0], a, n[s + 1]);
  },
  ti = function (e, n) {
    return e || e === 0 ? n(e) : n;
  },
  ps = function (e, n, i) {
    return i < e ? e : i > n ? n : i;
  },
  at = function (e, n) {
    return !Ue(e) || !(n = hm.exec(e)) ? "" : n[1];
  },
  wm = function (e, n, i) {
    return ti(i, function (r) {
      return ps(e, n, r);
    });
  },
  ho = [].slice,
  Cu = function (e, n) {
    return (
      e &&
      vn(e) &&
      "length" in e &&
      ((!n && !e.length) || (e.length - 1 in e && vn(e[0]))) &&
      !e.nodeType &&
      e !== cn
    );
  },
  Cm = function (e, n, i) {
    return (
      i === void 0 && (i = []),
      e.forEach(function (r) {
        var s;
        return (Ue(r) && !n) || Cu(r, 1)
          ? (s = i).push.apply(s, Gt(r))
          : i.push(r);
      }) || i
    );
  },
  Gt = function (e, n, i) {
    return be && !n && be.selector
      ? be.selector(e)
      : Ue(e) && !i && (lo || !hr())
      ? ho.call((n || jo).querySelectorAll(e), 0)
      : ut(e)
      ? Cm(e, i)
      : Cu(e)
      ? ho.call(e, 0)
      : e
      ? [e]
      : [];
  },
  po = function (e) {
    return (
      (e = Gt(e)[0] || ns("Invalid scope") || {}),
      function (n) {
        var i = e.current || e.nativeElement || e;
        return Gt(
          n,
          i.querySelectorAll
            ? i
            : i === e
            ? ns("Invalid scope") || jo.createElement("div")
            : e
        );
      }
    );
  },
  Pu = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  ku = function (e) {
    if (ke(e)) return e;
    var n = vn(e) ? e : { each: e },
      i = Si(n.ease),
      r = n.from || 0,
      s = parseFloat(n.base) || 0,
      a = {},
      o = r > 0 && r < 1,
      l = isNaN(r) || o,
      c = n.axis,
      u = r,
      d = r;
    return (
      Ue(r)
        ? (u = d = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !o && l && ((u = r[0]), (d = r[1])),
      function (f, h, m) {
        var p = (m || n).length,
          g = a[p],
          _,
          v,
          y,
          b,
          S,
          E,
          w,
          C,
          A;
        if (!g) {
          if (((A = n.grid === "auto" ? 0 : (n.grid || [1, mn])[1]), !A)) {
            for (
              w = -1e8;
              w < (w = m[A++].getBoundingClientRect().left) && A < p;

            );
            A < p && A--;
          }
          for (
            g = a[p] = [],
              _ = l ? Math.min(A, p) * u - 0.5 : r % A,
              v = A === mn ? 0 : l ? (p * d) / A - 0.5 : (r / A) | 0,
              w = 0,
              C = mn,
              E = 0;
            E < p;
            E++
          )
            (y = (E % A) - _),
              (b = v - ((E / A) | 0)),
              (g[E] = S = c ? Math.abs(c === "y" ? b : y) : cu(y * y + b * b)),
              S > w && (w = S),
              S < C && (C = S);
          r === "random" && Pu(g),
            (g.max = w - C),
            (g.min = C),
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
            (i = i && p < 0 ? Nu(i) : i);
        }
        return (
          (p = (g[f] - g.min) / g.max || 0),
          Fe(g.b + (i ? i(p) : p) * g.v) + g.u
        );
      }
    );
  },
  mo = function (e) {
    var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (i) {
      var r = Fe(Math.round(parseFloat(i) / e) * e * n);
      return (r - (r % 1)) / n + (On(i) ? 0 : at(i));
    };
  },
  Mu = function (e, n) {
    var i = ut(e),
      r,
      s;
    return (
      !i &&
        vn(e) &&
        ((r = i = e.radius || mn),
        e.values
          ? ((e = Gt(e.values)), (s = !On(e[0])) && (r *= r))
          : (e = mo(e.increment))),
      ti(
        n,
        i
          ? ke(e)
            ? function (a) {
                return (s = e(a)), Math.abs(s - a) <= r ? s : a;
              }
            : function (a) {
                for (
                  var o = parseFloat(s ? a.x : a),
                    l = parseFloat(s ? a.y : 0),
                    c = mn,
                    u = 0,
                    d = e.length,
                    f,
                    h;
                  d--;

                )
                  s
                    ? ((f = e[d].x - o), (h = e[d].y - l), (f = f * f + h * h))
                    : (f = Math.abs(e[d] - o)),
                    f < c && ((c = f), (u = d));
                return (
                  (u = !r || c <= r ? e[u] : a),
                  s || u === a || On(a) ? u : u + at(a)
                );
              }
          : mo(e)
      )
    );
  },
  $u = function (e, n, i, r) {
    return ti(ut(e) ? !n : i === !0 ? !!(i = 0) : !r, function () {
      return ut(e)
        ? e[~~(Math.random() * e.length)]
        : (i = i || 1e-5) &&
            (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - i / 2 + Math.random() * (n - e + i * 0.99)) / i) *
                i *
                r
            ) / r;
    });
  },
  Pm = function () {
    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
      n[i] = arguments[i];
    return function (r) {
      return n.reduce(function (s, a) {
        return a(s);
      }, r);
    };
  },
  km = function (e, n) {
    return function (i) {
      return e(parseFloat(i)) + (n || at(i));
    };
  },
  Mm = function (e, n, i) {
    return Ou(e, n, 0, 1, i);
  },
  Au = function (e, n, i) {
    return ti(i, function (r) {
      return e[~~n(r)];
    });
  },
  $m = function t(e, n, i) {
    var r = n - e;
    return ut(e)
      ? Au(e, t(0, e.length), n)
      : ti(i, function (s) {
          return ((r + ((s - e) % r)) % r) + e;
        });
  },
  Am = function t(e, n, i) {
    var r = n - e,
      s = r * 2;
    return ut(e)
      ? Au(e, t(0, e.length - 1), n)
      : ti(i, function (a) {
          return (a = (s + ((a - e) % s)) % s || 0), e + (a > r ? s - a : a);
        });
  },
  rs = function (e) {
    for (var n = 0, i = "", r, s, a, o; ~(r = e.indexOf("random(", n)); )
      (a = e.indexOf(")", r)),
        (o = e.charAt(r + 7) === "["),
        (s = e.substr(r + 7, a - r - 7).match(o ? hu : oo)),
        (i +=
          e.substr(n, r - n) + $u(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5)),
        (n = a + 1);
    return i + e.substr(n, e.length - n);
  },
  Ou = function (e, n, i, r, s) {
    var a = n - e,
      o = r - i;
    return ti(s, function (l) {
      return i + (((l - e) / a) * o || 0);
    });
  },
  Om = function t(e, n, i, r) {
    var s = isNaN(e + n)
      ? 0
      : function (h) {
          return (1 - h) * e + h * n;
        };
    if (!s) {
      var a = Ue(e),
        o = {},
        l,
        c,
        u,
        d,
        f;
      if ((i === !0 && (r = 1) && (i = null), a))
        (e = { p: e }), (n = { p: n });
      else if (ut(e) && !ut(n)) {
        for (u = [], d = e.length, f = d - 2, c = 1; c < d; c++)
          u.push(t(e[c - 1], e[c]));
        d--,
          (s = function (m) {
            m *= d;
            var p = Math.min(f, ~~m);
            return u[p](m - p);
          }),
          (i = n);
      } else r || (e = ur(ut(e) ? [] : {}, e));
      if (!u) {
        for (l in n) el.call(o, e, l, "get", n[l]);
        s = function (m) {
          return rl(m, o) || (a ? e.p : e);
        };
      }
    }
    return ti(i, s);
  },
  Xl = function (e, n, i) {
    var r = e.labels,
      s = mn,
      a,
      o,
      l;
    for (a in r)
      (o = r[a] - n),
        o < 0 == !!i && o && s > (o = Math.abs(o)) && ((l = a), (s = o));
    return l;
  },
  Dt = function (e, n, i) {
    var r = e.vars,
      s = r[n],
      a = be,
      o = e._ctx,
      l,
      c,
      u;
    if (s)
      return (
        (l = r[n + "Params"]),
        (c = r.callbackScope || e),
        i && jn.length && Js(),
        o && (be = o),
        (u = l ? s.apply(c, l) : s.call(c)),
        (be = a),
        u
      );
  },
  $r = function (e) {
    return (
      Qn(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!Je),
      e.progress() < 1 && Dt(e, "onInterrupt"),
      e
    );
  },
  Ki,
  Lu = [],
  Iu = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), Go() || e.headless)) {
        var n = e.name,
          i = ke(e),
          r =
            n && !i && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          s = {
            init: is,
            render: rl,
            add: el,
            kill: jm,
            modifier: Gm,
            rawVars: 0,
          },
          a = {
            targetTest: 0,
            get: 0,
            getSetter: il,
            aliases: {},
            register: 0,
          };
        if ((hr(), e !== r)) {
          if (At[n]) return;
          Bt(r, Bt(ea(e, s), a)),
            ur(r.prototype, ur(s, ea(e, a))),
            (At[(r.prop = n)] = r),
            e.targetTest && (Ns.push(r), (Ko[n] = 1)),
            (n =
              (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) +
              "Plugin");
        }
        gu(n, r), e.register && e.register(Ct, r, Et);
      } else Lu.push(e);
  },
  me = 255,
  Ar = {
    aqua: [0, me, me],
    lime: [0, me, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, me],
    navy: [0, 0, 128],
    white: [me, me, me],
    olive: [128, 128, 0],
    yellow: [me, me, 0],
    orange: [me, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [me, 0, 0],
    pink: [me, 192, 203],
    cyan: [0, me, me],
    transparent: [me, me, me, 0],
  },
  za = function (e, n, i) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? n + (i - n) * e * 6
        : e < 0.5
        ? i
        : e * 3 < 2
        ? n + (i - n) * (2 / 3 - e) * 6
        : n) *
        me +
        0.5) |
        0
    );
  },
  zu = function (e, n, i) {
    var r = e ? (On(e) ? [e >> 16, (e >> 8) & me, e & me] : 0) : Ar.black,
      s,
      a,
      o,
      l,
      c,
      u,
      d,
      f,
      h,
      m;
    if (!r) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Ar[e]))
        r = Ar[e];
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
            [r >> 16, (r >> 8) & me, r & me, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (r = [e >> 16, (e >> 8) & me, e & me]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((r = m = e.match(oo)), !n))
          (l = (+r[0] % 360) / 360),
            (c = +r[1] / 100),
            (u = +r[2] / 100),
            (a = u <= 0.5 ? u * (c + 1) : u + c - u * c),
            (s = u * 2 - a),
            r.length > 3 && (r[3] *= 1),
            (r[0] = za(l + 1 / 3, s, a)),
            (r[1] = za(l, s, a)),
            (r[2] = za(l - 1 / 3, s, a));
        else if (~e.indexOf("="))
          return (r = e.match(du)), i && r.length < 4 && (r[3] = 1), r;
      } else r = e.match(oo) || Ar.transparent;
      r = r.map(Number);
    }
    return (
      n &&
        !m &&
        ((s = r[0] / me),
        (a = r[1] / me),
        (o = r[2] / me),
        (d = Math.max(s, a, o)),
        (f = Math.min(s, a, o)),
        (u = (d + f) / 2),
        d === f
          ? (l = c = 0)
          : ((h = d - f),
            (c = u > 0.5 ? h / (2 - d - f) : h / (d + f)),
            (l =
              d === s
                ? (a - o) / h + (a < o ? 6 : 0)
                : d === a
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
  Du = function (e) {
    var n = [],
      i = [],
      r = -1;
    return (
      e.split(Un).forEach(function (s) {
        var a = s.match(Ui) || [];
        n.push.apply(n, a), i.push((r += a.length + 1));
      }),
      (n.c = i),
      n
    );
  },
  Gl = function (e, n, i) {
    var r = "",
      s = (e + r).match(Un),
      a = n ? "hsla(" : "rgba(",
      o = 0,
      l,
      c,
      u,
      d;
    if (!s) return e;
    if (
      ((s = s.map(function (f) {
        return (
          (f = zu(f, n, 1)) &&
          a +
            (n ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) +
            ")"
        );
      })),
      i && ((u = Du(e)), (l = i.c), l.join(r) !== u.c.join(r)))
    )
      for (c = e.replace(Un, "1").split(Ui), d = c.length - 1; o < d; o++)
        r +=
          c[o] +
          (~l.indexOf(o)
            ? s.shift() || a + "0,0,0,0)"
            : (u.length ? u : s.length ? s : i).shift());
    if (!c)
      for (c = e.split(Un), d = c.length - 1; o < d; o++) r += c[o] + s[o];
    return r + c[d];
  },
  Un = (function () {
    var t =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in Ar) t += "|" + e + "\\b";
    return new RegExp(t + ")", "gi");
  })(),
  Lm = /hsl[a]?\(/,
  Ru = function (e) {
    var n = e.join(" "),
      i;
    if (((Un.lastIndex = 0), Un.test(n)))
      return (
        (i = Lm.test(n)),
        (e[1] = Gl(e[1], i)),
        (e[0] = Gl(e[0], i, Du(e[1]))),
        !0
      );
  },
  ss,
  It = (function () {
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
      d,
      f,
      h,
      m = function p(g) {
        var _ = t() - r,
          v = g === !0,
          y,
          b,
          S,
          E;
        if (
          ((_ > e || _ < 0) && (i += _ - n),
          (r += _),
          (S = r - i),
          (y = S - a),
          (y > 0 || v) &&
            ((E = ++d.frame),
            (f = S - d.time * 1e3),
            (d.time = S = S / 1e3),
            (a += y + (y >= s ? 4 : s - y)),
            (b = 1)),
          v || (l = c(p)),
          b)
        )
          for (h = 0; h < o.length; h++) o[h](S, f, E, g);
      };
    return (
      (d = {
        time: 0,
        frame: 0,
        tick: function () {
          m(!0);
        },
        deltaRatio: function (g) {
          return f / (1e3 / (g || 60));
        },
        wake: function () {
          pu &&
            (!lo &&
              Go() &&
              ((cn = lo = window),
              (jo = cn.document || {}),
              (Nt.gsap = Ct),
              (cn.gsapVersions || (cn.gsapVersions = [])).push(Ct.version),
              mu(Qs || cn.GreenSockGlobals || (!cn.gsap && cn) || {}),
              Lu.forEach(Iu)),
            (u = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            l && d.sleep(),
            (c =
              u ||
              function (g) {
                return setTimeout(g, (a - d.time * 1e3 + 1) | 0);
              }),
            (ss = 1),
            m(2));
        },
        sleep: function () {
          (u ? cancelAnimationFrame : clearTimeout)(l), (ss = 0), (c = is);
        },
        lagSmoothing: function (g, _) {
          (e = g || 1 / 0), (n = Math.min(_ || 33, e));
        },
        fps: function (g) {
          (s = 1e3 / (g || 240)), (a = d.time * 1e3 + s);
        },
        add: function (g, _, v) {
          var y = _
            ? function (b, S, E, w) {
                g(b, S, E, w), d.remove(y);
              }
            : g;
          return d.remove(g), o[v ? "unshift" : "push"](y), hr(), y;
        },
        remove: function (g, _) {
          ~(_ = o.indexOf(g)) && o.splice(_, 1) && h >= _ && h--;
        },
        _listeners: o,
      }),
      d
    );
  })(),
  hr = function () {
    return !ss && It.wake();
  },
  Qe = {},
  Im = /^[\d.\-M][\d.\-,\s]/,
  zm = /["']/g,
  Dm = function (e) {
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
        (n[r] = isNaN(c) ? c.replace(zm, "").trim() : +c),
        (r = l.substr(o + 1).trim());
    return n;
  },
  Rm = function (e) {
    var n = e.indexOf("(") + 1,
      i = e.indexOf(")"),
      r = e.indexOf("(", n);
    return e.substring(n, ~r && r < i ? e.indexOf(")", i + 1) : i);
  },
  Nm = function (e) {
    var n = (e + "").split("("),
      i = Qe[n[0]];
    return i && n.length > 1 && i.config
      ? i.config.apply(
          null,
          ~e.indexOf("{") ? [Dm(n[1])] : Rm(e).split(",").map(bu)
        )
      : Qe._CE && Im.test(e)
      ? Qe._CE("", e)
      : i;
  },
  Nu = function (e) {
    return function (n) {
      return 1 - e(1 - n);
    };
  },
  Bu = function t(e, n) {
    for (var i = e._first, r; i; )
      i instanceof yt
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
  Si = function (e, n) {
    return (e && (ke(e) ? e : Qe[e] || Nm(e))) || n;
  },
  Di = function (e, n, i, r) {
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
      Tt(e, function (o) {
        (Qe[o] = Nt[o] = s), (Qe[(a = o.toLowerCase())] = i);
        for (var l in s)
          Qe[
            a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = Qe[o + "." + l] = s[l];
      }),
      s
    );
  },
  Fu = function (e) {
    return function (n) {
      return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2;
    };
  },
  Da = function t(e, n, i) {
    var r = n >= 1 ? n : 1,
      s = (i || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
      a = (s / ao) * (Math.asin(1 / r) || 0),
      o = function (u) {
        return u === 1 ? 1 : r * Math.pow(2, -10 * u) * fm((u - a) * s) + 1;
      },
      l =
        e === "out"
          ? o
          : e === "in"
          ? function (c) {
              return 1 - o(1 - c);
            }
          : Fu(o);
    return (
      (s = ao / s),
      (l.config = function (c, u) {
        return t(e, c, u);
      }),
      l
    );
  },
  Ra = function t(e, n) {
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
          : Fu(i);
    return (
      (r.config = function (s) {
        return t(e, s);
      }),
      r
    );
  };
Tt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
  var n = e < 5 ? e + 1 : e;
  Di(
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
});
Qe.Linear.easeNone = Qe.none = Qe.Linear.easeIn;
Di("Elastic", Da("in"), Da("out"), Da());
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
  Di(
    "Bounce",
    function (a) {
      return 1 - s(1 - a);
    },
    s
  );
})(7.5625, 2.75);
Di("Expo", function (t) {
  return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t);
});
Di("Circ", function (t) {
  return -(cu(1 - t * t) - 1);
});
Di("Sine", function (t) {
  return t === 1 ? 1 : -dm(t * cm) + 1;
});
Di("Back", Ra("in"), Ra("out"), Ra());
Qe.SteppedEase =
  Qe.steps =
  Nt.SteppedEase =
    {
      config: function (e, n) {
        e === void 0 && (e = 1);
        var i = 1 / e,
          r = e + (n ? 0 : 1),
          s = n ? 1 : 0,
          a = 1 - lt;
        return function (o) {
          return (((r * ps(0, a, o)) | 0) + s) * i;
        };
      },
    };
cr.ease = Qe["quad.out"];
Tt(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (t) {
    return (Zo += t + "," + t + "Params,");
  }
);
var Vu = function (e, n) {
    (this.id = um++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = n),
      (this.get = n ? n.get : yu),
      (this.set = n ? n.getSetter : il);
  },
  as = (function () {
    function t(n) {
      (this.vars = n),
        (this._delay = +n.delay || 0),
        (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
          ((this._rDelay = n.repeatDelay || 0),
          (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
        (this._ts = 1),
        fr(this, +n.duration, 1, 1),
        (this.data = n.data),
        be && ((this._ctx = be), be.data.push(this)),
        ss || It.wake();
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
            fr(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (i, r) {
        if ((hr(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (ba(this, i), !s._dp || s.parent || Tu(s, this); s && s.parent; )
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
            (this._initted && Math.abs(this._zTime) === lt) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), _u(this, i, r)),
          this
        );
      }),
      (e.time = function (i, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + Wl(this)) %
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
                Wl(this),
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
          ? dr(this._tTime, s) + 1
          : 1;
      }),
      (e.timeScale = function (i, r) {
        if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
        if (this._rts === i) return this;
        var s =
          this.parent && this._ts ? ta(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -1e-8 ? 0 : this._rts),
          this.totalTime(
            ps(-Math.abs(this._delay), this.totalDuration(), s),
            r !== !1
          ),
          _a(this),
          _m(this)
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
                : (hr(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== lt &&
                      (this._tTime -= lt)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (i) {
        if (arguments.length) {
          this._start = i;
          var r = this.parent || this._dp;
          return (
            r && (r._sort || !this.parent) && dn(r, this, i - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (i) {
        return (
          this._start +
          (St(i) ? this.totalDuration() : this.duration()) /
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
            ? ta(r.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (i) {
        i === void 0 && (i = mm);
        var r = Je;
        return (
          (Je = i),
          Jo(this) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (Je = r),
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
          ? ((this._repeat = i === 1 / 0 ? -2 : i), Yl(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (i) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = i), Yl(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (e.seek = function (i, r) {
        return this.totalTime(Wt(this, i), St(r));
      }),
      (e.restart = function (i, r) {
        return (
          this.play().totalTime(i ? -this._delay : 0, St(r)),
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
            s < this.endTime(!0) - lt)
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
          var a = ke(i) ? i : xu,
            o = function () {
              var c = r.then;
              (r.then = null),
                ke(a) && (a = a(r)) && (a.then || a === r) && (r.then = c),
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
        $r(this);
      }),
      t
    );
  })();
Bt(as.prototype, {
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
var yt = (function (t) {
  lu(e, t);
  function e(i, r) {
    var s;
    return (
      i === void 0 && (i = {}),
      (s = t.call(this, i) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!i.smoothChildTiming),
      (s.autoRemoveChildren = !!i.autoRemoveChildren),
      (s._sort = St(i.sortChildren)),
      we && dn(i.parent || we, Sn(s), r),
      i.reversed && s.reverse(),
      i.paused && s.paused(!0),
      i.scrollTrigger && Eu(Sn(s), i.scrollTrigger),
      s
    );
  }
  var n = e.prototype;
  return (
    (n.to = function (r, s, a) {
      return Fr(0, arguments, this), this;
    }),
    (n.from = function (r, s, a) {
      return Fr(1, arguments, this), this;
    }),
    (n.fromTo = function (r, s, a, o) {
      return Fr(2, arguments, this), this;
    }),
    (n.set = function (r, s, a) {
      return (
        (s.duration = 0),
        (s.parent = this),
        Br(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new Be(r, s, Wt(this, a), 1),
        this
      );
    }),
    (n.call = function (r, s, a) {
      return dn(this, Be.delayedCall(0, r, s), a);
    }),
    (n.staggerTo = function (r, s, a, o, l, c, u) {
      return (
        (a.duration = s),
        (a.stagger = a.stagger || o),
        (a.onComplete = c),
        (a.onCompleteParams = u),
        (a.parent = this),
        new Be(r, a, Wt(this, l)),
        this
      );
    }),
    (n.staggerFrom = function (r, s, a, o, l, c, u) {
      return (
        (a.runBackwards = 1),
        (Br(a).immediateRender = St(a.immediateRender)),
        this.staggerTo(r, s, a, o, l, c, u)
      );
    }),
    (n.staggerFromTo = function (r, s, a, o, l, c, u, d) {
      return (
        (o.startAt = a),
        (Br(o).immediateRender = St(o.immediateRender)),
        this.staggerTo(r, s, o, l, c, u, d)
      );
    }),
    (n.render = function (r, s, a) {
      var o = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        c = this._dur,
        u = r <= 0 ? 0 : Fe(r),
        d = this._zTime < 0 != r < 0 && (this._initted || !c),
        f,
        h,
        m,
        p,
        g,
        _,
        v,
        y,
        b,
        S,
        E,
        w;
      if (
        (this !== we && u > l && r >= 0 && (u = l), u !== this._tTime || a || d)
      ) {
        if (
          (o !== this._time &&
            c &&
            ((u += this._time - o), (r += this._time - o)),
          (f = u),
          (b = this._start),
          (y = this._ts),
          (_ = !y),
          d && (c || (o = this._zTime), (r || !s) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((E = this._yoyo),
            (g = c + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(g * 100 + r, s, a);
          if (
            ((f = Fe(u % g)),
            u === l
              ? ((p = this._repeat), (f = c))
              : ((S = Fe(u / g)),
                (p = ~~S),
                p && p === S && ((f = c), p--),
                f > c && (f = c)),
            (S = dr(this._tTime, g)),
            !o &&
              this._tTime &&
              S !== p &&
              this._tTime - S * g - this._dur <= 0 &&
              (S = p),
            E && p & 1 && ((f = c - f), (w = 1)),
            p !== S && !this._lock)
          ) {
            var C = E && S & 1,
              A = C === (E && p & 1);
            if (
              (p < S && (C = !C),
              (o = C ? 0 : u % c ? c : u),
              (this._lock = 1),
              (this.render(o || (w ? 0 : Fe(p * g)), s, !c)._lock = 0),
              (this._tTime = u),
              !s && this.parent && Dt(this, "onRepeat"),
              this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1),
              (o && o !== this._time) ||
                _ !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((c = this._dur),
              (l = this._tDur),
              A &&
                ((this._lock = 2),
                (o = C ? c : -1e-4),
                this.render(o, !0),
                this.vars.repeatRefresh && !w && this.invalidate()),
              (this._lock = 0),
              !this._ts && !_)
            )
              return this;
            Bu(this, w);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((v = Tm(this, Fe(o), Fe(f))), v && (u -= f - (f = v._start))),
          (this._tTime = u),
          (this._time = f),
          (this._act = !y),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (o = 0)),
          !o && u && !s && !S && (Dt(this, "onStart"), this._tTime !== u))
        )
          return this;
        if (f >= o && r >= 0)
          for (h = this._first; h; ) {
            if (
              ((m = h._next), (h._act || f >= h._start) && h._ts && v !== h)
            ) {
              if (h.parent !== this) return this.render(r, s, a);
              if (
                (h.render(
                  h._ts > 0
                    ? (f - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                        (f - h._start) * h._ts,
                  s,
                  a
                ),
                f !== this._time || (!this._ts && !_))
              ) {
                (v = 0), m && (u += this._zTime = -1e-8);
                break;
              }
            }
            h = m;
          }
        else {
          h = this._last;
          for (var P = r < 0 ? r : f; h; ) {
            if (((m = h._prev), (h._act || P <= h._end) && h._ts && v !== h)) {
              if (h.parent !== this) return this.render(r, s, a);
              if (
                (h.render(
                  h._ts > 0
                    ? (P - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                        (P - h._start) * h._ts,
                  s,
                  a || (Je && Jo(h))
                ),
                f !== this._time || (!this._ts && !_))
              ) {
                (v = 0), m && (u += this._zTime = P ? -1e-8 : lt);
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
          (v.render(f >= o ? 0 : -1e-8)._zTime = f >= o ? 1 : -1),
          this._ts)
        )
          return (this._start = b), _a(this), this.render(r, s, a);
        this._onUpdate && !s && Dt(this, "onUpdate", !0),
          ((u === l && this._tTime >= this.totalDuration()) || (!u && o)) &&
            (b === this._start || Math.abs(y) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !c) &&
                ((u === l && this._ts > 0) || (!u && this._ts < 0)) &&
                Qn(this, 1),
              !s &&
                !(r < 0 && !o) &&
                (u || o || !l) &&
                (Dt(
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
      if ((On(s) || (s = Wt(this, s, r)), !(r instanceof as))) {
        if (ut(r))
          return (
            r.forEach(function (o) {
              return a.add(o, s);
            }),
            this
          );
        if (Ue(r)) return this.addLabel(r, s);
        if (ke(r)) r = Be.delayedCall(0, r);
        else return this;
      }
      return this !== r ? dn(this, r, s) : this;
    }),
    (n.getChildren = function (r, s, a, o) {
      r === void 0 && (r = !0),
        s === void 0 && (s = !0),
        a === void 0 && (a = !0),
        o === void 0 && (o = -1e8);
      for (var l = [], c = this._first; c; )
        c._start >= o &&
          (c instanceof Be
            ? s && l.push(c)
            : (a && l.push(c), r && l.push.apply(l, c.getChildren(!0, s, a)))),
          (c = c._next);
      return l;
    }),
    (n.getById = function (r) {
      for (var s = this.getChildren(1, 1, 1), a = s.length; a--; )
        if (s[a].vars.id === r) return s[a];
    }),
    (n.remove = function (r) {
      return Ue(r)
        ? this.removeLabel(r)
        : ke(r)
        ? this.killTweensOf(r)
        : (r.parent === this && ya(this, r),
          r === this._recent && (this._recent = this._last),
          xi(this));
    }),
    (n.totalTime = function (r, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Fe(
              It.time -
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
      return (this.labels[r] = Wt(this, s)), this;
    }),
    (n.removeLabel = function (r) {
      return delete this.labels[r], this;
    }),
    (n.addPause = function (r, s, a) {
      var o = Be.delayedCall(0, s || is, a);
      return (
        (o.data = "isPause"), (this._hasPause = 1), dn(this, o, Wt(this, r))
      );
    }),
    (n.removePause = function (r) {
      var s = this._first;
      for (r = Wt(this, r); s; )
        s._start === r && s.data === "isPause" && Qn(s), (s = s._next);
    }),
    (n.killTweensOf = function (r, s, a) {
      for (var o = this.getTweensOf(r, a), l = o.length; l--; )
        Hn !== o[l] && o[l].kill(r, s);
      return this;
    }),
    (n.getTweensOf = function (r, s) {
      for (var a = [], o = Gt(r), l = this._first, c = On(s), u; l; )
        l instanceof Be
          ? gm(l._targets, o) &&
            (c
              ? (!Hn || (l._initted && l._ts)) &&
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
        o = Wt(a, r),
        l = s,
        c = l.startAt,
        u = l.onStart,
        d = l.onStartParams,
        f = l.immediateRender,
        h,
        m = Be.to(
          a,
          Bt(
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
                lt,
              onStart: function () {
                if ((a.pause(), !h)) {
                  var g =
                    s.duration ||
                    Math.abs(
                      (o - (c && "time" in c ? c.time : a._time)) /
                        a.timeScale()
                    );
                  m._dur !== g && fr(m, g, 0, 1).render(m._time, !0, !0),
                    (h = 1);
                }
                u && u.apply(m, d || []);
              },
            },
            s
          )
        );
      return f ? m.render(0) : m;
    }),
    (n.tweenFromTo = function (r, s, a) {
      return this.tweenTo(s, Bt({ startAt: { time: Wt(this, r) } }, a));
    }),
    (n.recent = function () {
      return this._recent;
    }),
    (n.nextLabel = function (r) {
      return r === void 0 && (r = this._time), Xl(this, Wt(this, r));
    }),
    (n.previousLabel = function (r) {
      return r === void 0 && (r = this._time), Xl(this, Wt(this, r), 1);
    }),
    (n.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + lt);
    }),
    (n.shiftChildren = function (r, s, a) {
      a === void 0 && (a = 0);
      for (var o = this._first, l = this.labels, c; o; )
        o._start >= a && ((o._start += r), (o._end += r)), (o = o._next);
      if (s) for (c in l) l[c] >= a && (l[c] += r);
      return xi(this);
    }),
    (n.invalidate = function (r) {
      var s = this._first;
      for (this._lock = 0; s; ) s.invalidate(r), (s = s._next);
      return t.prototype.invalidate.call(this, r);
    }),
    (n.clear = function (r) {
      r === void 0 && (r = !0);
      for (var s = this._first, a; s; ) (a = s._next), this.remove(s), (s = a);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        xi(this)
      );
    }),
    (n.totalDuration = function (r) {
      var s = 0,
        a = this,
        o = a._last,
        l = mn,
        c,
        u,
        d;
      if (arguments.length)
        return a.timeScale(
          (a._repeat < 0 ? a.duration() : a.totalDuration()) /
            (a.reversed() ? -r : r)
        );
      if (a._dirty) {
        for (d = a.parent; o; )
          (c = o._prev),
            o._dirty && o.totalDuration(),
            (u = o._start),
            u > l && a._sort && o._ts && !a._lock
              ? ((a._lock = 1), (dn(a, o, u - o._delay, 1)._lock = 0))
              : (l = u),
            u < 0 &&
              o._ts &&
              ((s -= u),
              ((!d && !a._dp) || (d && d.smoothChildTiming)) &&
                ((a._start += u / a._ts), (a._time -= u), (a._tTime -= u)),
              a.shiftChildren(-u, !1, -1 / 0),
              (l = 0)),
            o._end > s && o._ts && (s = o._end),
            (o = c);
        fr(a, a === we && a._time > s ? a._time : s, 1, 1), (a._dirty = 0);
      }
      return a._tDur;
    }),
    (e.updateRoot = function (r) {
      if ((we._ts && (_u(we, ta(r, we)), (vu = It.frame)), It.frame >= ql)) {
        ql += Rt.autoSleep || 120;
        var s = we._first;
        if ((!s || !s._ts) && Rt.autoSleep && It._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || It.sleep();
        }
      }
    }),
    e
  );
})(as);
Bt(yt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Bm = function (e, n, i, r, s, a, o) {
    var l = new Et(this._pt, e, n, 0, 1, Gu, null, s),
      c = 0,
      u = 0,
      d,
      f,
      h,
      m,
      p,
      g,
      _,
      v;
    for (
      l.b = i,
        l.e = r,
        i += "",
        r += "",
        (_ = ~r.indexOf("random(")) && (r = rs(r)),
        a && ((v = [i, r]), a(v, e, n), (i = v[0]), (r = v[1])),
        f = i.match(La) || [];
      (d = La.exec(r));

    )
      (m = d[0]),
        (p = r.substring(c, d.index)),
        h ? (h = (h + 1) % 5) : p.substr(-5) === "rgba(" && (h = 1),
        m !== f[u++] &&
          ((g = parseFloat(f[u - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: p || u === 1 ? p : ",",
            s: g,
            c: m.charAt(1) === "=" ? tr(g, m) - g : parseFloat(m) - g,
            m: h && h < 4 ? Math.round : 0,
          }),
          (c = La.lastIndex));
    return (
      (l.c = c < r.length ? r.substring(c, r.length) : ""),
      (l.fp = o),
      (fu.test(r) || _) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  el = function (e, n, i, r, s, a, o, l, c, u) {
    ke(r) && (r = r(s || 0, e, a));
    var d = e[n],
      f =
        i !== "get"
          ? i
          : ke(d)
          ? c
            ? e[
                n.indexOf("set") || !ke(e["get" + n.substr(3)])
                  ? n
                  : "get" + n.substr(3)
              ](c)
            : e[n]()
          : d,
      h = ke(d) ? (c ? Wm : Yu) : nl,
      m;
    if (
      (Ue(r) &&
        (~r.indexOf("random(") && (r = rs(r)),
        r.charAt(1) === "=" &&
          ((m = tr(f, r) + (at(f) || 0)), (m || m === 0) && (r = m))),
      !u || f !== r || go)
    )
      return !isNaN(f * r) && r !== ""
        ? ((m = new Et(
            this._pt,
            e,
            n,
            +f || 0,
            r - (f || 0),
            typeof d == "boolean" ? Xm : Xu,
            0,
            h
          )),
          c && (m.fp = c),
          o && m.modifier(o, this, e),
          (this._pt = m))
        : (!d && !(n in e) && Uo(n, r),
          Bm.call(this, e, n, f, r, h, l || Rt.stringFilter, c));
  },
  Fm = function (e, n, i, r, s) {
    if (
      (ke(e) && (e = Vr(e, s, n, i, r)),
      !vn(e) || (e.style && e.nodeType) || ut(e) || uu(e))
    )
      return Ue(e) ? Vr(e, s, n, i, r) : e;
    var a = {},
      o;
    for (o in e) a[o] = Vr(e[o], s, n, i, r);
    return a;
  },
  qu = function (e, n, i, r, s, a) {
    var o, l, c, u;
    if (
      At[e] &&
      (o = new At[e]()).init(
        s,
        o.rawVars ? n[e] : Fm(n[e], r, s, a, i),
        i,
        r,
        a
      ) !== !1 &&
      ((i._pt = l = new Et(i._pt, s, e, 0, 1, o.render, o, 0, o.priority)),
      i !== Ki)
    )
      for (c = i._ptLookup[i._targets.indexOf(s)], u = o._props.length; u--; )
        c[o._props[u]] = l;
    return o;
  },
  Hn,
  go,
  tl = function t(e, n, i) {
    var r = e.vars,
      s = r.ease,
      a = r.startAt,
      o = r.immediateRender,
      l = r.lazy,
      c = r.onUpdate,
      u = r.runBackwards,
      d = r.yoyoEase,
      f = r.keyframes,
      h = r.autoRevert,
      m = e._dur,
      p = e._startAt,
      g = e._targets,
      _ = e.parent,
      v = _ && _.data === "nested" ? _.vars.targets : g,
      y = e._overwrite === "auto" && !Yo,
      b = e.timeline,
      S,
      E,
      w,
      C,
      A,
      P,
      $,
      x,
      T,
      O,
      L,
      k,
      I;
    if (
      (b && (!f || !s) && (s = "none"),
      (e._ease = Si(s, cr.ease)),
      (e._yEase = d ? Nu(Si(d === !0 ? s : d, cr.ease)) : 0),
      d &&
        e._yoyo &&
        !e._repeat &&
        ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
      (e._from = !b && !!r.runBackwards),
      !b || (f && !r.stagger))
    ) {
      if (
        ((x = g[0] ? bi(g[0]).harness : 0),
        (k = x && r[x.prop]),
        (S = ea(r, Ko)),
        p &&
          (p._zTime < 0 && p.progress(1),
          n < 0 && u && o && !h ? p.render(-1, !0) : p.revert(u && m ? Rs : pm),
          (p._lazy = 0)),
        a)
      ) {
        if (
          (Qn(
            (e._startAt = Be.set(
              g,
              Bt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: _,
                  immediateRender: !0,
                  lazy: !p && St(l),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    c &&
                    function () {
                      return Dt(e, "onUpdate");
                    },
                  stagger: 0,
                },
                a
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          n < 0 && (Je || (!o && !h)) && e._startAt.revert(Rs),
          o && m && n <= 0 && i <= 0)
        ) {
          n && (e._zTime = n);
          return;
        }
      } else if (u && m && !p) {
        if (
          (n && (o = !1),
          (w = Bt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: o && !p && St(l),
              immediateRender: o,
              stagger: 0,
              parent: _,
            },
            S
          )),
          k && (w[x.prop] = k),
          Qn((e._startAt = Be.set(g, w))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          n < 0 && (Je ? e._startAt.revert(Rs) : e._startAt.render(-1, !0)),
          (e._zTime = n),
          !o)
        )
          t(e._startAt, lt, lt);
        else if (!n) return;
      }
      for (
        e._pt = e._ptCache = 0, l = (m && St(l)) || (l && !m), E = 0;
        E < g.length;
        E++
      ) {
        if (
          ((A = g[E]),
          ($ = A._gsap || Qo(g)[E]._gsap),
          (e._ptLookup[E] = O = {}),
          co[$.id] && jn.length && Js(),
          (L = v === g ? E : v.indexOf(A)),
          x &&
            (T = new x()).init(A, k || S, e, L, v) !== !1 &&
            ((e._pt = C =
              new Et(e._pt, A, T.name, 0, 1, T.render, T, 0, T.priority)),
            T._props.forEach(function (z) {
              O[z] = C;
            }),
            T.priority && (P = 1)),
          !x || k)
        )
          for (w in S)
            At[w] && (T = qu(w, S, e, L, A, v))
              ? T.priority && (P = 1)
              : (O[w] = C =
                  el.call(e, A, w, "get", S[w], L, v, 0, r.stringFilter));
        e._op && e._op[E] && e.kill(A, e._op[E]),
          y &&
            e._pt &&
            ((Hn = e),
            we.killTweensOf(A, O, e.globalTime(n)),
            (I = !e.parent),
            (Hn = 0)),
          e._pt && l && (co[$.id] = 1);
      }
      P && ju(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = c),
      (e._initted = (!e._op || e._pt) && !I),
      f && n <= 0 && b.render(mn, !0, !0);
  },
  Vm = function (e, n, i, r, s, a, o, l) {
    var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[n],
      u,
      d,
      f,
      h;
    if (!c)
      for (
        c = e._ptCache[n] = [], f = e._ptLookup, h = e._targets.length;
        h--;

      ) {
        if (((u = f[h][n]), u && u.d && u.d._pt))
          for (u = u.d._pt; u && u.p !== n && u.fp !== n; ) u = u._next;
        if (!u)
          return (
            (go = 1),
            (e.vars[n] = "+=0"),
            tl(e, o),
            (go = 0),
            l ? ns(n + " not eligible for reset") : 1
          );
        c.push(u);
      }
    for (h = c.length; h--; )
      (d = c[h]),
        (u = d._pt || d),
        (u.s = (r || r === 0) && !s ? r : u.s + (r || 0) + a * u.c),
        (u.c = i - u.s),
        d.e && (d.e = ze(i) + at(d.e)),
        d.b && (d.b = u.s + at(d.b));
  },
  qm = function (e, n) {
    var i = e[0] ? bi(e[0]).harness : 0,
      r = i && i.aliases,
      s,
      a,
      o,
      l;
    if (!r) return n;
    s = ur({}, n);
    for (a in r)
      if (a in s) for (l = r[a].split(","), o = l.length; o--; ) s[l[o]] = s[a];
    return s;
  },
  Hm = function (e, n, i, r) {
    var s = n.ease || r || "power1.inOut",
      a,
      o;
    if (ut(n))
      (o = i[e] || (i[e] = [])),
        n.forEach(function (l, c) {
          return o.push({ t: (c / (n.length - 1)) * 100, v: l, e: s });
        });
    else
      for (a in n)
        (o = i[a] || (i[a] = [])),
          a === "ease" || o.push({ t: parseFloat(e), v: n[a], e: s });
  },
  Vr = function (e, n, i, r, s) {
    return ke(e)
      ? e.call(n, i, r, s)
      : Ue(e) && ~e.indexOf("random(")
      ? rs(e)
      : e;
  },
  Hu = Zo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Wu = {};
Tt(Hu + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
  return (Wu[t] = 1);
});
var Be = (function (t) {
  lu(e, t);
  function e(i, r, s, a) {
    var o;
    typeof r == "number" && ((s.duration = r), (r = s), (s = null)),
      (o = t.call(this, a ? r : Br(r)) || this);
    var l = o.vars,
      c = l.duration,
      u = l.delay,
      d = l.immediateRender,
      f = l.stagger,
      h = l.overwrite,
      m = l.keyframes,
      p = l.defaults,
      g = l.scrollTrigger,
      _ = l.yoyoEase,
      v = r.parent || we,
      y = (ut(i) || uu(i) ? On(i[0]) : "length" in r) ? [i] : Gt(i),
      b,
      S,
      E,
      w,
      C,
      A,
      P,
      $;
    if (
      ((o._targets = y.length
        ? Qo(y)
        : ns(
            "GSAP target " + i + " not found. https://gsap.com",
            !Rt.nullTargetWarn
          ) || []),
      (o._ptLookup = []),
      (o._overwrite = h),
      m || f || ys(c) || ys(u))
    ) {
      if (
        ((r = o.vars),
        (b = o.timeline =
          new yt({
            data: "nested",
            defaults: p || {},
            targets: v && v.data === "nested" ? v.vars.targets : y,
          })),
        b.kill(),
        (b.parent = b._dp = Sn(o)),
        (b._start = 0),
        f || ys(c) || ys(u))
      ) {
        if (((w = y.length), (P = f && ku(f)), vn(f)))
          for (C in f) ~Hu.indexOf(C) && ($ || ($ = {}), ($[C] = f[C]));
        for (S = 0; S < w; S++)
          (E = ea(r, Wu)),
            (E.stagger = 0),
            _ && (E.yoyoEase = _),
            $ && ur(E, $),
            (A = y[S]),
            (E.duration = +Vr(c, Sn(o), S, A, y)),
            (E.delay = (+Vr(u, Sn(o), S, A, y) || 0) - o._delay),
            !f &&
              w === 1 &&
              E.delay &&
              ((o._delay = u = E.delay), (o._start += u), (E.delay = 0)),
            b.to(A, E, P ? P(S, A, y) : 0),
            (b._ease = Qe.none);
        b.duration() ? (c = u = 0) : (o.timeline = 0);
      } else if (m) {
        Br(Bt(b.vars.defaults, { ease: "none" })),
          (b._ease = Si(m.ease || r.ease || "none"));
        var x = 0,
          T,
          O,
          L;
        if (ut(m))
          m.forEach(function (k) {
            return b.to(y, k, ">");
          }),
            b.duration();
        else {
          E = {};
          for (C in m)
            C === "ease" || C === "easeEach" || Hm(C, m[C], E, m.easeEach);
          for (C in E)
            for (
              T = E[C].sort(function (k, I) {
                return k.t - I.t;
              }),
                x = 0,
                S = 0;
              S < T.length;
              S++
            )
              (O = T[S]),
                (L = {
                  ease: O.e,
                  duration: ((O.t - (S ? T[S - 1].t : 0)) / 100) * c,
                }),
                (L[C] = O.v),
                b.to(y, L, x),
                (x += L.duration);
          b.duration() < c && b.to({}, { duration: c - b.duration() });
        }
      }
      c || o.duration((c = b.duration()));
    } else o.timeline = 0;
    return (
      h === !0 && !Yo && ((Hn = Sn(o)), we.killTweensOf(y), (Hn = 0)),
      dn(v, Sn(o), s),
      r.reversed && o.reverse(),
      r.paused && o.paused(!0),
      (d ||
        (!c &&
          !m &&
          o._start === Fe(v._time) &&
          St(d) &&
          bm(Sn(o)) &&
          v.data !== "nested")) &&
        ((o._tTime = -1e-8), o.render(Math.max(0, -u) || 0)),
      g && Eu(Sn(o), g),
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
        d = r > l - lt && !u ? l : r < lt ? 0 : r,
        f,
        h,
        m,
        p,
        g,
        _,
        v,
        y,
        b;
      if (!c) Sm(this, r, s, a);
      else if (
        d !== this._tTime ||
        !r ||
        a ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== u) ||
        this._lazy
      ) {
        if (((f = d), (y = this.timeline), this._repeat)) {
          if (((p = c + this._rDelay), this._repeat < -1 && u))
            return this.totalTime(p * 100 + r, s, a);
          if (
            ((f = Fe(d % p)),
            d === l
              ? ((m = this._repeat), (f = c))
              : ((g = Fe(d / p)),
                (m = ~~g),
                m && m === g ? ((f = c), m--) : f > c && (f = c)),
            (_ = this._yoyo && m & 1),
            _ && ((b = this._yEase), (f = c - f)),
            (g = dr(this._tTime, p)),
            f === o && !a && this._initted && m === g)
          )
            return (this._tTime = d), this;
          m !== g &&
            (y && this._yEase && Bu(y, _),
            this.vars.repeatRefresh &&
              !_ &&
              !this._lock &&
              f !== p &&
              this._initted &&
              ((this._lock = a = 1),
              (this.render(Fe(p * m), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (wu(this, u ? r : f, a, s, d)) return (this._tTime = 0), this;
          if (o !== this._time && !(a && this.vars.repeatRefresh && m !== g))
            return this;
          if (c !== this._dur) return this.render(r, s, a);
        }
        if (
          ((this._tTime = d),
          (this._time = f),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = v = (b || this._ease)(f / c)),
          this._from && (this.ratio = v = 1 - v),
          !o && d && !s && !g && (Dt(this, "onStart"), this._tTime !== d))
        )
          return this;
        for (h = this._pt; h; ) h.r(v, h.d), (h = h._next);
        (y && y.render(r < 0 ? r : y._dur * y._ease(f / this._dur), s, a)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !s &&
            (u && uo(this, r, s, a), Dt(this, "onUpdate")),
          this._repeat &&
            m !== g &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            Dt(this, "onRepeat"),
          (d === this._tDur || !d) &&
            this._tTime === d &&
            (u && !this._onUpdate && uo(this, r, !0, !0),
            (r || !c) &&
              ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
              Qn(this, 1),
            !s &&
              !(u && !o) &&
              (d || o || _) &&
              (Dt(this, d === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(d < l && this.timeScale() > 0) && this._prom()));
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
      ss || It.wake(), this._ts || this.play();
      var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        u;
      return (
        this._initted || tl(this, c),
        (u = this._ease(c / this._dur)),
        Vm(this, r, s, a, o, u, c, l)
          ? this.resetTo(r, s, a, o, 1)
          : (ba(this, 0),
            this.parent ||
              Su(
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
            ? $r(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!Je),
          this
        );
      if (this.timeline) {
        var a = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, s, Hn && Hn.vars.overwrite !== !0)
            ._first || $r(this),
          this.parent &&
            a !== this.timeline.totalDuration() &&
            fr(this, (this._dur * this.timeline._tDur) / a, 0, 1),
          this
        );
      }
      var o = this._targets,
        l = r ? Gt(r) : o,
        c = this._ptLookup,
        u = this._pt,
        d,
        f,
        h,
        m,
        p,
        g,
        _;
      if ((!s || s === "all") && ym(o, l))
        return s === "all" && (this._pt = 0), $r(this);
      for (
        d = this._op = this._op || [],
          s !== "all" &&
            (Ue(s) &&
              ((p = {}),
              Tt(s, function (v) {
                return (p[v] = 1);
              }),
              (s = p)),
            (s = qm(o, s))),
          _ = o.length;
        _--;

      )
        if (~l.indexOf(o[_])) {
          (f = c[_]),
            s === "all"
              ? ((d[_] = s), (m = f), (h = {}))
              : ((h = d[_] = d[_] || {}), (m = s));
          for (p in m)
            (g = f && f[p]),
              g &&
                ((!("kill" in g.d) || g.d.kill(p) === !0) && ya(this, g, "_pt"),
                delete f[p]),
              h !== "all" && (h[p] = 1);
        }
      return this._initted && !this._pt && u && $r(this), this;
    }),
    (e.to = function (r, s) {
      return new e(r, s, arguments[2]);
    }),
    (e.from = function (r, s) {
      return Fr(1, arguments);
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
      return Fr(2, arguments);
    }),
    (e.set = function (r, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(r, s);
    }),
    (e.killTweensOf = function (r, s, a) {
      return we.killTweensOf(r, s, a);
    }),
    e
  );
})(as);
Bt(Be.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Tt("staggerTo,staggerFrom,staggerFromTo", function (t) {
  Be[t] = function () {
    var e = new yt(),
      n = ho.call(arguments, 0);
    return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n);
  };
});
var nl = function (e, n, i) {
    return (e[n] = i);
  },
  Yu = function (e, n, i) {
    return e[n](i);
  },
  Wm = function (e, n, i, r) {
    return e[n](r.fp, i);
  },
  Ym = function (e, n, i) {
    return e.setAttribute(n, i);
  },
  il = function (e, n) {
    return ke(e[n]) ? Yu : Xo(e[n]) && e.setAttribute ? Ym : nl;
  },
  Xu = function (e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n);
  },
  Xm = function (e, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * e), n);
  },
  Gu = function (e, n) {
    var i = n._pt,
      r = "";
    if (!e && n.b) r = n.b;
    else if (e === 1 && n.e) r = n.e;
    else {
      for (; i; )
        (r =
          i.p +
          (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) +
          r),
          (i = i._next);
      r += n.c;
    }
    n.set(n.t, n.p, r, n);
  },
  rl = function (e, n) {
    for (var i = n._pt; i; ) i.r(e, i.d), (i = i._next);
  },
  Gm = function (e, n, i, r) {
    for (var s = this._pt, a; s; )
      (a = s._next), s.p === r && s.modifier(e, n, i), (s = a);
  },
  jm = function (e) {
    for (var n = this._pt, i, r; n; )
      (r = n._next),
        (n.p === e && !n.op) || n.op === e
          ? ya(this, n, "_pt")
          : n.dep || (i = 1),
        (n = r);
    return !i;
  },
  Um = function (e, n, i, r) {
    r.mSet(e, n, r.m.call(r.tween, i, r.mt), r);
  },
  ju = function (e) {
    for (var n = e._pt, i, r, s, a; n; ) {
      for (i = n._next, r = s; r && r.pr > n.pr; ) r = r._next;
      (n._prev = r ? r._prev : a) ? (n._prev._next = n) : (s = n),
        (n._next = r) ? (r._prev = n) : (a = n),
        (n = i);
    }
    e._pt = s;
  },
  Et = (function () {
    function t(n, i, r, s, a, o, l, c, u) {
      (this.t = i),
        (this.s = s),
        (this.c = a),
        (this.p = r),
        (this.r = o || Xu),
        (this.d = l || this),
        (this.set = c || nl),
        (this.pr = u || 0),
        (this._next = n),
        n && (n._prev = this);
    }
    var e = t.prototype;
    return (
      (e.modifier = function (i, r, s) {
        (this.mSet = this.mSet || this.set),
          (this.set = Um),
          (this.m = i),
          (this.mt = s),
          (this.tween = r);
      }),
      t
    );
  })();
Tt(
  Zo +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (t) {
    return (Ko[t] = 1);
  }
);
Nt.TweenMax = Nt.TweenLite = Be;
Nt.TimelineLite = Nt.TimelineMax = yt;
we = new yt({
  sortChildren: !1,
  defaults: cr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Rt.stringFilter = Ru;
var Ti = [],
  Bs = {},
  Km = [],
  jl = 0,
  Zm = 0,
  Na = function (e) {
    return (Bs[e] || Km).map(function (n) {
      return n();
    });
  },
  vo = function () {
    var e = Date.now(),
      n = [];
    e - jl > 2 &&
      (Na("matchMediaInit"),
      Ti.forEach(function (i) {
        var r = i.queries,
          s = i.conditions,
          a,
          o,
          l,
          c;
        for (o in r)
          (a = cn.matchMedia(r[o]).matches),
            a && (l = 1),
            a !== s[o] && ((s[o] = a), (c = 1));
        c && (i.revert(), l && n.push(i));
      }),
      Na("matchMediaRevert"),
      n.forEach(function (i) {
        return i.onMatch(i, function (r) {
          return i.add(null, r);
        });
      }),
      (jl = e),
      Na("matchMedia"));
  },
  Uu = (function () {
    function t(n, i) {
      (this.selector = i && po(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Zm++),
        n && this.add(n);
    }
    var e = t.prototype;
    return (
      (e.add = function (i, r, s) {
        ke(i) && ((s = r), (r = i), (i = ke));
        var a = this,
          o = function () {
            var c = be,
              u = a.selector,
              d;
            return (
              c && c !== a && c.data.push(a),
              s && (a.selector = po(s)),
              (be = a),
              (d = r.apply(a, arguments)),
              ke(d) && a._r.push(d),
              (be = c),
              (a.selector = u),
              (a.isReverted = !1),
              d
            );
          };
        return (
          (a.last = o),
          i === ke
            ? o(a, function (l) {
                return a.add(null, l);
              })
            : i
            ? (a[i] = o)
            : o
        );
      }),
      (e.ignore = function (i) {
        var r = be;
        (be = null), i(this), (be = r);
      }),
      (e.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof t
              ? i.push.apply(i, r.getTweens())
              : r instanceof Be &&
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
                    .sort(function (u, d) {
                      return d.g - u.g || -1 / 0;
                    })
                    .forEach(function (u) {
                      return u.t.revert(i);
                    }),
                    l = s.data.length;
                  l--;

                )
                  (c = s.data[l]),
                    c instanceof yt
                      ? c.data !== "nested" &&
                        (c.scrollTrigger && c.scrollTrigger.revert(), c.kill())
                      : !(c instanceof Be) && c.revert && c.revert(i);
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
          for (var a = Ti.length; a--; )
            Ti[a].id === this.id && Ti.splice(a, 1);
      }),
      (e.revert = function (i) {
        this.kill(i || {});
      }),
      t
    );
  })(),
  Qm = (function () {
    function t(n) {
      (this.contexts = []), (this.scope = n), be && be.data.push(this);
    }
    var e = t.prototype;
    return (
      (e.add = function (i, r, s) {
        vn(i) || (i = { matches: i });
        var a = new Uu(0, s || this.scope),
          o = (a.conditions = {}),
          l,
          c,
          u;
        be && !a.selector && (a.selector = be.selector),
          this.contexts.push(a),
          (r = a.add("onMatch", r)),
          (a.queries = i);
        for (c in i)
          c === "all"
            ? (u = 1)
            : ((l = cn.matchMedia(i[c])),
              l &&
                (Ti.indexOf(a) < 0 && Ti.push(a),
                (o[c] = l.matches) && (u = 1),
                l.addListener
                  ? l.addListener(vo)
                  : l.addEventListener("change", vo)));
        return (
          u &&
            r(a, function (d) {
              return a.add(null, d);
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
  na = {
    registerPlugin: function () {
      for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
        n[i] = arguments[i];
      n.forEach(function (r) {
        return Iu(r);
      });
    },
    timeline: function (e) {
      return new yt(e);
    },
    getTweensOf: function (e, n) {
      return we.getTweensOf(e, n);
    },
    getProperty: function (e, n, i, r) {
      Ue(e) && (e = Gt(e)[0]);
      var s = bi(e || {}).get,
        a = i ? xu : bu;
      return (
        i === "native" && (i = ""),
        e &&
          (n
            ? a(((At[n] && At[n].get) || s)(e, n, i, r))
            : function (o, l, c) {
                return a(((At[o] && At[o].get) || s)(e, o, l, c));
              })
      );
    },
    quickSetter: function (e, n, i) {
      if (((e = Gt(e)), e.length > 1)) {
        var r = e.map(function (u) {
            return Ct.quickSetter(u, n, i);
          }),
          s = r.length;
        return function (u) {
          for (var d = s; d--; ) r[d](u);
        };
      }
      e = e[0] || {};
      var a = At[n],
        o = bi(e),
        l = (o.harness && (o.harness.aliases || {})[n]) || n,
        c = a
          ? function (u) {
              var d = new a();
              (Ki._pt = 0),
                d.init(e, i ? u + i : u, Ki, 0, [e]),
                d.render(1, d),
                Ki._pt && rl(1, Ki);
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
          Bt(
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
      return we.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = Si(e.ease, cr.ease)), Hl(cr, e || {});
    },
    config: function (e) {
      return Hl(Rt, e || {});
    },
    registerEffect: function (e) {
      var n = e.name,
        i = e.effect,
        r = e.plugins,
        s = e.defaults,
        a = e.extendTimeline;
      (r || "").split(",").forEach(function (o) {
        return (
          o && !At[o] && !Nt[o] && ns(n + " effect requires " + o + " plugin.")
        );
      }),
        (Ia[n] = function (o, l, c) {
          return i(Gt(o), Bt(l || {}, s), c);
        }),
        a &&
          (yt.prototype[n] = function (o, l, c) {
            return this.add(Ia[n](o, vn(l) ? l : (c = l) && {}, this), c);
          });
    },
    registerEase: function (e, n) {
      Qe[e] = Si(n);
    },
    parseEase: function (e, n) {
      return arguments.length ? Si(e, n) : Qe;
    },
    getById: function (e) {
      return we.getById(e);
    },
    exportRoot: function (e, n) {
      e === void 0 && (e = {});
      var i = new yt(e),
        r,
        s;
      for (
        i.smoothChildTiming = St(e.smoothChildTiming),
          we.remove(i),
          i._dp = 0,
          i._time = i._tTime = we._time,
          r = we._first;
        r;

      )
        (s = r._next),
          (n ||
            !(
              !r._dur &&
              r instanceof Be &&
              r.vars.onComplete === r._targets[0]
            )) &&
            dn(i, r, r._start - r._delay),
          (r = s);
      return dn(we, i, 0), i;
    },
    context: function (e, n) {
      return e ? new Uu(e, n) : be;
    },
    matchMedia: function (e) {
      return new Qm(e);
    },
    matchMediaRefresh: function () {
      return (
        Ti.forEach(function (e) {
          var n = e.conditions,
            i,
            r;
          for (r in n) n[r] && ((n[r] = !1), (i = 1));
          i && e.revert();
        }) || vo()
      );
    },
    addEventListener: function (e, n) {
      var i = Bs[e] || (Bs[e] = []);
      ~i.indexOf(n) || i.push(n);
    },
    removeEventListener: function (e, n) {
      var i = Bs[e],
        r = i && i.indexOf(n);
      r >= 0 && i.splice(r, 1);
    },
    utils: {
      wrap: $m,
      wrapYoyo: Am,
      distribute: ku,
      random: $u,
      snap: Mu,
      normalize: Mm,
      getUnit: at,
      clamp: wm,
      splitColor: zu,
      toArray: Gt,
      selector: po,
      mapRange: Ou,
      pipe: Pm,
      unitize: km,
      interpolate: Om,
      shuffle: Pu,
    },
    install: mu,
    effects: Ia,
    ticker: It,
    updateRoot: yt.updateRoot,
    plugins: At,
    globalTimeline: we,
    core: {
      PropTween: Et,
      globals: gu,
      Tween: Be,
      Timeline: yt,
      Animation: as,
      getCache: bi,
      _removeLinkedListItem: ya,
      reverting: function () {
        return Je;
      },
      context: function (e) {
        return e && be && (be.data.push(e), (e._ctx = be)), be;
      },
      suppressOverwrites: function (e) {
        return (Yo = e);
      },
    },
  };
Tt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
  return (na[t] = Be[t]);
});
It.add(yt.updateRoot);
Ki = na.to({}, { duration: 0 });
var Jm = function (e, n) {
    for (var i = e._pt; i && i.p !== n && i.op !== n && i.fp !== n; )
      i = i._next;
    return i;
  },
  eg = function (e, n) {
    var i = e._targets,
      r,
      s,
      a;
    for (r in n)
      for (s = i.length; s--; )
        (a = e._ptLookup[s][r]),
          a &&
            (a = a.d) &&
            (a._pt && (a = Jm(a, r)),
            a && a.modifier && a.modifier(n[r], e, i[s], r));
  },
  Ba = function (e, n) {
    return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: function (r, s, a) {
        a._onInit = function (o) {
          var l, c;
          if (
            (Ue(s) &&
              ((l = {}),
              Tt(s, function (u) {
                return (l[u] = 1);
              }),
              (s = l)),
            n)
          ) {
            l = {};
            for (c in s) l[c] = n(s[c]);
            s = l;
          }
          eg(o, s);
        };
      },
    };
  },
  Ct =
    na.registerPlugin(
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
            Je ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
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
      Ba("roundProps", mo),
      Ba("modifiers"),
      Ba("snap", Mu)
    ) || na;
Be.version = yt.version = Ct.version = "3.13.0";
pu = 1;
Go() && hr();
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Ul,
  Wn,
  nr,
  sl,
  yi,
  Kl,
  al,
  tg = function () {
    return typeof window < "u";
  },
  Ln = {},
  pi = 180 / Math.PI,
  ir = Math.PI / 180,
  qi = Math.atan2,
  Zl = 1e8,
  ol = /([A-Z])/g,
  ng = /(left|right|width|margin|padding|x)/i,
  ig = /[\s,\(]\S/,
  fn = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  yo = function (e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
  },
  rg = function (e, n) {
    return n.set(
      n.t,
      n.p,
      e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u,
      n
    );
  },
  sg = function (e, n) {
    return n.set(
      n.t,
      n.p,
      e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b,
      n
    );
  },
  ag = function (e, n) {
    var i = n.s + n.c * e;
    n.set(n.t, n.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + n.u, n);
  },
  Ku = function (e, n) {
    return n.set(n.t, n.p, e ? n.e : n.b, n);
  },
  Zu = function (e, n) {
    return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n);
  },
  og = function (e, n, i) {
    return (e.style[n] = i);
  },
  lg = function (e, n, i) {
    return e.style.setProperty(n, i);
  },
  cg = function (e, n, i) {
    return (e._gsap[n] = i);
  },
  ug = function (e, n, i) {
    return (e._gsap.scaleX = e._gsap.scaleY = i);
  },
  dg = function (e, n, i, r, s) {
    var a = e._gsap;
    (a.scaleX = a.scaleY = i), a.renderTransform(s, a);
  },
  fg = function (e, n, i, r, s) {
    var a = e._gsap;
    (a[n] = i), a.renderTransform(s, a);
  },
  Ce = "transform",
  wt = Ce + "Origin",
  hg = function t(e, n) {
    var i = this,
      r = this.target,
      s = r.style,
      a = r._gsap;
    if (e in Ln && s) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = fn[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (o) {
                return (i.tfm[o] = En(r, o));
              })
            : (this.tfm[e] = a.x ? a[e] : En(r, e)),
          e === wt && (this.tfm.zOrigin = a.zOrigin);
      else
        return fn.transform.split(",").forEach(function (o) {
          return t.call(i, o, n);
        });
      if (this.props.indexOf(Ce) >= 0) return;
      a.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(wt, n, "")),
        (e = Ce);
    }
    (s || n) && this.props.push(e, n, s[e]);
  },
  Qu = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  pg = function () {
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
              : e[s].replace(ol, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (a in this.tfm) r[a] = this.tfm[a];
      r.svg &&
        (r.renderTransform(),
        n.setAttribute("data-svg-origin", this.svgo || "")),
        (s = al()),
        (!s || !s.isStart) &&
          !i[Ce] &&
          (Qu(i),
          r.zOrigin &&
            i[wt] &&
            ((i[wt] += " " + r.zOrigin + "px"),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1));
    }
  },
  Ju = function (e, n) {
    var i = { target: e, props: [], revert: pg, save: hg };
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
  ed,
  _o = function (e, n) {
    var i = Wn.createElementNS
      ? Wn.createElementNS(
          (n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : Wn.createElement(e);
    return i && i.style ? i : Wn.createElement(e);
  },
  jt = function t(e, n, i) {
    var r = getComputedStyle(e);
    return (
      r[n] ||
      r.getPropertyValue(n.replace(ol, "-$1").toLowerCase()) ||
      r.getPropertyValue(n) ||
      (!i && t(e, pr(n) || n, 1)) ||
      ""
    );
  },
  Ql = "O,Moz,ms,Ms,Webkit".split(","),
  pr = function (e, n, i) {
    var r = n || yi,
      s = r.style,
      a = 5;
    if (e in s && !i) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      a-- && !(Ql[a] + e in s);

    );
    return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? Ql[a] : "") + e;
  },
  bo = function () {
    tg() &&
      window.document &&
      ((Ul = window),
      (Wn = Ul.document),
      (nr = Wn.documentElement),
      (yi = _o("div") || { style: {} }),
      _o("div"),
      (Ce = pr(Ce)),
      (wt = Ce + "Origin"),
      (yi.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (ed = !!pr("perspective")),
      (al = Ct.core.reverting),
      (sl = 1));
  },
  Jl = function (e) {
    var n = e.ownerSVGElement,
      i = _o(
        "svg",
        (n && n.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      r = e.cloneNode(!0),
      s;
    (r.style.display = "block"), i.appendChild(r), nr.appendChild(i);
    try {
      s = r.getBBox();
    } catch {}
    return i.removeChild(r), nr.removeChild(i), s;
  },
  ec = function (e, n) {
    for (var i = n.length; i--; )
      if (e.hasAttribute(n[i])) return e.getAttribute(n[i]);
  },
  td = function (e) {
    var n, i;
    try {
      n = e.getBBox();
    } catch {
      (n = Jl(e)), (i = 1);
    }
    return (
      (n && (n.width || n.height)) || i || (n = Jl(e)),
      n && !n.width && !n.x && !n.y
        ? {
            x: +ec(e, ["x", "cx", "x1"]) || 0,
            y: +ec(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : n
    );
  },
  nd = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && td(e));
  },
  $i = function (e, n) {
    if (n) {
      var i = e.style,
        r;
      n in Ln && n !== wt && (n = Ce),
        i.removeProperty
          ? ((r = n.substr(0, 2)),
            (r === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
            i.removeProperty(
              r === "--" ? n : n.replace(ol, "-$1").toLowerCase()
            ))
          : i.removeAttribute(n);
    }
  },
  Yn = function (e, n, i, r, s, a) {
    var o = new Et(e._pt, n, i, 0, 1, a ? Zu : Ku);
    return (e._pt = o), (o.b = r), (o.e = s), e._props.push(i), o;
  },
  tc = { deg: 1, rad: 1, turn: 1 },
  mg = { grid: 1, flex: 1 },
  Jn = function t(e, n, i, r) {
    var s = parseFloat(i) || 0,
      a = (i + "").trim().substr((s + "").length) || "px",
      o = yi.style,
      l = ng.test(n),
      c = e.tagName.toLowerCase() === "svg",
      u = (c ? "client" : "offset") + (l ? "Width" : "Height"),
      d = 100,
      f = r === "px",
      h = r === "%",
      m,
      p,
      g,
      _;
    if (r === a || !s || tc[r] || tc[a]) return s;
    if (
      (a !== "px" && !f && (s = t(e, n, i, "px")),
      (_ = e.getCTM && nd(e)),
      (h || a === "%") && (Ln[n] || ~n.indexOf("adius")))
    )
      return (
        (m = _ ? e.getBBox()[l ? "width" : "height"] : e[u]),
        ze(h ? (s / m) * d : (s / 100) * m)
      );
    if (
      ((o[l ? "width" : "height"] = d + (f ? a : r)),
      (p =
        (r !== "rem" && ~n.indexOf("adius")) ||
        (r === "em" && e.appendChild && !c)
          ? e
          : e.parentNode),
      _ && (p = (e.ownerSVGElement || {}).parentNode),
      (!p || p === Wn || !p.appendChild) && (p = Wn.body),
      (g = p._gsap),
      g && h && g.width && l && g.time === It.time && !g.uncache)
    )
      return ze((s / g.width) * d);
    if (h && (n === "height" || n === "width")) {
      var v = e.style[n];
      (e.style[n] = d + r), (m = e[u]), v ? (e.style[n] = v) : $i(e, n);
    } else
      (h || a === "%") &&
        !mg[jt(p, "display")] &&
        (o.position = jt(e, "position")),
        p === e && (o.position = "static"),
        p.appendChild(yi),
        (m = yi[u]),
        p.removeChild(yi),
        (o.position = "absolute");
    return (
      l && h && ((g = bi(p)), (g.time = It.time), (g.width = p[u])),
      ze(f ? (m * s) / d : m && s ? (d / m) * s : 0)
    );
  },
  En = function (e, n, i, r) {
    var s;
    return (
      sl || bo(),
      n in fn &&
        n !== "transform" &&
        ((n = fn[n]), ~n.indexOf(",") && (n = n.split(",")[0])),
      Ln[n] && n !== "transform"
        ? ((s = ls(e, r)),
          (s =
            n !== "transformOrigin"
              ? s[n]
              : s.svg
              ? s.origin
              : ra(jt(e, wt)) + " " + s.zOrigin + "px"))
        : ((s = e.style[n]),
          (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) &&
            (s =
              (ia[n] && ia[n](e, n, i)) ||
              jt(e, n) ||
              yu(e, n) ||
              (n === "opacity" ? 1 : 0))),
      i && !~(s + "").trim().indexOf(" ") ? Jn(e, n, s, i) + i : s
    );
  },
  gg = function (e, n, i, r) {
    if (!i || i === "none") {
      var s = pr(n, e, 1),
        a = s && jt(e, s, 1);
      a && a !== i
        ? ((n = s), (i = a))
        : n === "borderColor" && (i = jt(e, "borderTopColor"));
    }
    var o = new Et(this._pt, e.style, n, 0, 1, Gu),
      l = 0,
      c = 0,
      u,
      d,
      f,
      h,
      m,
      p,
      g,
      _,
      v,
      y,
      b,
      S;
    if (
      ((o.b = i),
      (o.e = r),
      (i += ""),
      (r += ""),
      r.substring(0, 6) === "var(--" &&
        (r = jt(e, r.substring(4, r.indexOf(")")))),
      r === "auto" &&
        ((p = e.style[n]),
        (e.style[n] = r),
        (r = jt(e, n) || r),
        p ? (e.style[n] = p) : $i(e, n)),
      (u = [i, r]),
      Ru(u),
      (i = u[0]),
      (r = u[1]),
      (f = i.match(Ui) || []),
      (S = r.match(Ui) || []),
      S.length)
    ) {
      for (; (d = Ui.exec(r)); )
        (g = d[0]),
          (v = r.substring(l, d.index)),
          m
            ? (m = (m + 1) % 5)
            : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (m = 1),
          g !== (p = f[c++] || "") &&
            ((h = parseFloat(p) || 0),
            (b = p.substr((h + "").length)),
            g.charAt(1) === "=" && (g = tr(h, g) + b),
            (_ = parseFloat(g)),
            (y = g.substr((_ + "").length)),
            (l = Ui.lastIndex - y.length),
            y ||
              ((y = y || Rt.units[n] || b),
              l === r.length && ((r += y), (o.e += y))),
            b !== y && (h = Jn(e, n, p, y) || 0),
            (o._pt = {
              _next: o._pt,
              p: v || c === 1 ? v : ",",
              s: h,
              c: _ - h,
              m: (m && m < 4) || n === "zIndex" ? Math.round : 0,
            }));
      o.c = l < r.length ? r.substring(l, r.length) : "";
    } else o.r = n === "display" && r === "none" ? Zu : Ku;
    return fu.test(r) && (o.e = 0), (this._pt = o), o;
  },
  nc = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  vg = function (e) {
    var n = e.split(" "),
      i = n[0],
      r = n[1] || "50%";
    return (
      (i === "top" || i === "bottom" || r === "left" || r === "right") &&
        ((e = i), (i = r), (r = e)),
      (n[0] = nc[i] || i),
      (n[1] = nc[r] || r),
      n.join(" ")
    );
  },
  yg = function (e, n) {
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
            Ln[o] && ((l = 1), (o = o === "transformOrigin" ? wt : Ce)),
            $i(i, o);
      l &&
        ($i(i, Ce),
        a &&
          (a.svg && i.removeAttribute("transform"),
          (r.scale = r.rotate = r.translate = "none"),
          ls(i, 1),
          (a.uncache = 1),
          Qu(r)));
    }
  },
  ia = {
    clearProps: function (e, n, i, r, s) {
      if (s.data !== "isFromStart") {
        var a = (e._pt = new Et(e._pt, n, i, 0, 0, yg));
        return (a.u = r), (a.pr = -10), (a.tween = s), e._props.push(i), 1;
      }
    },
  },
  os = [1, 0, 0, 1, 0, 0],
  id = {},
  rd = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  ic = function (e) {
    var n = jt(e, Ce);
    return rd(n) ? os : n.substr(7).match(du).map(ze);
  },
  ll = function (e, n) {
    var i = e._gsap || bi(e),
      r = e.style,
      s = ic(e),
      a,
      o,
      l,
      c;
    return i.svg && e.getAttribute("transform")
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
        s.join(",") === "1,0,0,1,0,0" ? os : s)
      : (s === os &&
          !e.offsetParent &&
          e !== nr &&
          !i.svg &&
          ((l = r.display),
          (r.display = "block"),
          (a = e.parentNode),
          (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
            ((c = 1), (o = e.nextElementSibling), nr.appendChild(e)),
          (s = ic(e)),
          l ? (r.display = l) : $i(e, "display"),
          c &&
            (o
              ? a.insertBefore(e, o)
              : a
              ? a.appendChild(e)
              : nr.removeChild(e))),
        n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  },
  xo = function (e, n, i, r, s, a) {
    var o = e._gsap,
      l = s || ll(e, !0),
      c = o.xOrigin || 0,
      u = o.yOrigin || 0,
      d = o.xOffset || 0,
      f = o.yOffset || 0,
      h = l[0],
      m = l[1],
      p = l[2],
      g = l[3],
      _ = l[4],
      v = l[5],
      y = n.split(" "),
      b = parseFloat(y[0]) || 0,
      S = parseFloat(y[1]) || 0,
      E,
      w,
      C,
      A;
    i
      ? l !== os &&
        (w = h * g - m * p) &&
        ((C = b * (g / w) + S * (-p / w) + (p * v - g * _) / w),
        (A = b * (-m / w) + S * (h / w) - (h * v - m * _) / w),
        (b = C),
        (S = A))
      : ((E = td(e)),
        (b = E.x + (~y[0].indexOf("%") ? (b / 100) * E.width : b)),
        (S = E.y + (~(y[1] || y[0]).indexOf("%") ? (S / 100) * E.height : S))),
      r || (r !== !1 && o.smooth)
        ? ((_ = b - c),
          (v = S - u),
          (o.xOffset = d + (_ * h + v * p) - _),
          (o.yOffset = f + (_ * m + v * g) - v))
        : (o.xOffset = o.yOffset = 0),
      (o.xOrigin = b),
      (o.yOrigin = S),
      (o.smooth = !!r),
      (o.origin = n),
      (o.originIsAbsolute = !!i),
      (e.style[wt] = "0px 0px"),
      a &&
        (Yn(a, o, "xOrigin", c, b),
        Yn(a, o, "yOrigin", u, S),
        Yn(a, o, "xOffset", d, o.xOffset),
        Yn(a, o, "yOffset", f, o.yOffset)),
      e.setAttribute("data-svg-origin", b + " " + S);
  },
  ls = function (e, n) {
    var i = e._gsap || new Vu(e);
    if ("x" in i && !n && !i.uncache) return i;
    var r = e.style,
      s = i.scaleX < 0,
      a = "px",
      o = "deg",
      l = getComputedStyle(e),
      c = jt(e, wt) || "0",
      u,
      d,
      f,
      h,
      m,
      p,
      g,
      _,
      v,
      y,
      b,
      S,
      E,
      w,
      C,
      A,
      P,
      $,
      x,
      T,
      O,
      L,
      k,
      I,
      z,
      B,
      M,
      q,
      X,
      oe,
      ne,
      K;
    return (
      (u = d = f = p = g = _ = v = y = b = 0),
      (h = m = 1),
      (i.svg = !!(e.getCTM && nd(e))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (r[Ce] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[Ce] !== "none" ? l[Ce] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (w = ll(e, i.svg)),
      i.svg &&
        (i.uncache
          ? ((z = e.getBBox()),
            (c = i.xOrigin - z.x + "px " + (i.yOrigin - z.y) + "px"),
            (I = ""))
          : (I = !n && e.getAttribute("data-svg-origin")),
        xo(e, I || c, !!I || i.originIsAbsolute, i.smooth !== !1, w)),
      (S = i.xOrigin || 0),
      (E = i.yOrigin || 0),
      w !== os &&
        (($ = w[0]),
        (x = w[1]),
        (T = w[2]),
        (O = w[3]),
        (u = L = w[4]),
        (d = k = w[5]),
        w.length === 6
          ? ((h = Math.sqrt($ * $ + x * x)),
            (m = Math.sqrt(O * O + T * T)),
            (p = $ || x ? qi(x, $) * pi : 0),
            (v = T || O ? qi(T, O) * pi + p : 0),
            v && (m *= Math.abs(Math.cos(v * ir))),
            i.svg && ((u -= S - (S * $ + E * T)), (d -= E - (S * x + E * O))))
          : ((K = w[6]),
            (oe = w[7]),
            (M = w[8]),
            (q = w[9]),
            (X = w[10]),
            (ne = w[11]),
            (u = w[12]),
            (d = w[13]),
            (f = w[14]),
            (C = qi(K, X)),
            (g = C * pi),
            C &&
              ((A = Math.cos(-C)),
              (P = Math.sin(-C)),
              (I = L * A + M * P),
              (z = k * A + q * P),
              (B = K * A + X * P),
              (M = L * -P + M * A),
              (q = k * -P + q * A),
              (X = K * -P + X * A),
              (ne = oe * -P + ne * A),
              (L = I),
              (k = z),
              (K = B)),
            (C = qi(-T, X)),
            (_ = C * pi),
            C &&
              ((A = Math.cos(-C)),
              (P = Math.sin(-C)),
              (I = $ * A - M * P),
              (z = x * A - q * P),
              (B = T * A - X * P),
              (ne = O * P + ne * A),
              ($ = I),
              (x = z),
              (T = B)),
            (C = qi(x, $)),
            (p = C * pi),
            C &&
              ((A = Math.cos(C)),
              (P = Math.sin(C)),
              (I = $ * A + x * P),
              (z = L * A + k * P),
              (x = x * A - $ * P),
              (k = k * A - L * P),
              ($ = I),
              (L = z)),
            g &&
              Math.abs(g) + Math.abs(p) > 359.9 &&
              ((g = p = 0), (_ = 180 - _)),
            (h = ze(Math.sqrt($ * $ + x * x + T * T))),
            (m = ze(Math.sqrt(k * k + K * K))),
            (C = qi(L, k)),
            (v = Math.abs(C) > 2e-4 ? C * pi : 0),
            (b = ne ? 1 / (ne < 0 ? -ne : ne) : 0)),
        i.svg &&
          ((I = e.getAttribute("transform")),
          (i.forceCSS = e.setAttribute("transform", "") || !rd(jt(e, Ce))),
          I && e.setAttribute("transform", I))),
      Math.abs(v) > 90 &&
        Math.abs(v) < 270 &&
        (s
          ? ((h *= -1), (v += p <= 0 ? 180 : -180), (p += p <= 0 ? 180 : -180))
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
        d -
        ((i.yPercent =
          d &&
          ((!n && i.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
          ? (e.offsetHeight * i.yPercent) / 100
          : 0) +
        a),
      (i.z = f + a),
      (i.scaleX = ze(h)),
      (i.scaleY = ze(m)),
      (i.rotation = ze(p) + o),
      (i.rotationX = ze(g) + o),
      (i.rotationY = ze(_) + o),
      (i.skewX = v + o),
      (i.skewY = y + o),
      (i.transformPerspective = b + a),
      (i.zOrigin = parseFloat(c.split(" ")[2]) || (!n && i.zOrigin) || 0) &&
        (r[wt] = ra(c)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = Rt.force3D),
      (i.renderTransform = i.svg ? bg : ed ? sd : _g),
      (i.uncache = 0),
      i
    );
  },
  ra = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  Fa = function (e, n, i) {
    var r = at(n);
    return ze(parseFloat(n) + parseFloat(Jn(e, "x", i + "px", r))) + r;
  },
  _g = function (e, n) {
    (n.z = "0px"),
      (n.rotationY = n.rotationX = "0deg"),
      (n.force3D = 0),
      sd(e, n);
  },
  di = "0deg",
  Er = "0px",
  fi = ") ",
  sd = function (e, n) {
    var i = n || this,
      r = i.xPercent,
      s = i.yPercent,
      a = i.x,
      o = i.y,
      l = i.z,
      c = i.rotation,
      u = i.rotationY,
      d = i.rotationX,
      f = i.skewX,
      h = i.skewY,
      m = i.scaleX,
      p = i.scaleY,
      g = i.transformPerspective,
      _ = i.force3D,
      v = i.target,
      y = i.zOrigin,
      b = "",
      S = (_ === "auto" && e && e !== 1) || _ === !0;
    if (y && (d !== di || u !== di)) {
      var E = parseFloat(u) * ir,
        w = Math.sin(E),
        C = Math.cos(E),
        A;
      (E = parseFloat(d) * ir),
        (A = Math.cos(E)),
        (a = Fa(v, a, w * A * -y)),
        (o = Fa(v, o, -Math.sin(E) * -y)),
        (l = Fa(v, l, C * A * -y + y));
    }
    g !== Er && (b += "perspective(" + g + fi),
      (r || s) && (b += "translate(" + r + "%, " + s + "%) "),
      (S || a !== Er || o !== Er || l !== Er) &&
        (b +=
          l !== Er || S
            ? "translate3d(" + a + ", " + o + ", " + l + ") "
            : "translate(" + a + ", " + o + fi),
      c !== di && (b += "rotate(" + c + fi),
      u !== di && (b += "rotateY(" + u + fi),
      d !== di && (b += "rotateX(" + d + fi),
      (f !== di || h !== di) && (b += "skew(" + f + ", " + h + fi),
      (m !== 1 || p !== 1) && (b += "scale(" + m + ", " + p + fi),
      (v.style[Ce] = b || "translate(0, 0)");
  },
  bg = function (e, n) {
    var i = n || this,
      r = i.xPercent,
      s = i.yPercent,
      a = i.x,
      o = i.y,
      l = i.rotation,
      c = i.skewX,
      u = i.skewY,
      d = i.scaleX,
      f = i.scaleY,
      h = i.target,
      m = i.xOrigin,
      p = i.yOrigin,
      g = i.xOffset,
      _ = i.yOffset,
      v = i.forceCSS,
      y = parseFloat(a),
      b = parseFloat(o),
      S,
      E,
      w,
      C,
      A;
    (l = parseFloat(l)),
      (c = parseFloat(c)),
      (u = parseFloat(u)),
      u && ((u = parseFloat(u)), (c += u), (l += u)),
      l || c
        ? ((l *= ir),
          (c *= ir),
          (S = Math.cos(l) * d),
          (E = Math.sin(l) * d),
          (w = Math.sin(l - c) * -f),
          (C = Math.cos(l - c) * f),
          c &&
            ((u *= ir),
            (A = Math.tan(c - u)),
            (A = Math.sqrt(1 + A * A)),
            (w *= A),
            (C *= A),
            u &&
              ((A = Math.tan(u)),
              (A = Math.sqrt(1 + A * A)),
              (S *= A),
              (E *= A))),
          (S = ze(S)),
          (E = ze(E)),
          (w = ze(w)),
          (C = ze(C)))
        : ((S = d), (C = f), (E = w = 0)),
      ((y && !~(a + "").indexOf("px")) || (b && !~(o + "").indexOf("px"))) &&
        ((y = Jn(h, "x", a, "px")), (b = Jn(h, "y", o, "px"))),
      (m || p || g || _) &&
        ((y = ze(y + m - (m * S + p * w) + g)),
        (b = ze(b + p - (m * E + p * C) + _))),
      (r || s) &&
        ((A = h.getBBox()),
        (y = ze(y + (r / 100) * A.width)),
        (b = ze(b + (s / 100) * A.height))),
      (A =
        "matrix(" + S + "," + E + "," + w + "," + C + "," + y + "," + b + ")"),
      h.setAttribute("transform", A),
      v && (h.style[Ce] = A);
  },
  xg = function (e, n, i, r, s) {
    var a = 360,
      o = Ue(s),
      l = parseFloat(s) * (o && ~s.indexOf("rad") ? pi : 1),
      c = l - r,
      u = r + c + "deg",
      d,
      f;
    return (
      o &&
        ((d = s.split("_")[1]),
        d === "short" &&
          ((c %= a), c !== c % (a / 2) && (c += c < 0 ? a : -360)),
        d === "cw" && c < 0
          ? (c = ((c + a * Zl) % a) - ~~(c / a) * a)
          : d === "ccw" && c > 0 && (c = ((c - a * Zl) % a) - ~~(c / a) * a)),
      (e._pt = f = new Et(e._pt, n, i, r, c, rg)),
      (f.e = u),
      (f.u = "deg"),
      e._props.push(i),
      f
    );
  },
  rc = function (e, n) {
    for (var i in n) e[i] = n[i];
    return e;
  },
  Sg = function (e, n, i) {
    var r = rc({}, i._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      a = i.style,
      o,
      l,
      c,
      u,
      d,
      f,
      h,
      m;
    r.svg
      ? ((c = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (a[Ce] = n),
        (o = ls(i, 1)),
        $i(i, Ce),
        i.setAttribute("transform", c))
      : ((c = getComputedStyle(i)[Ce]),
        (a[Ce] = n),
        (o = ls(i, 1)),
        (a[Ce] = c));
    for (l in Ln)
      (c = r[l]),
        (u = o[l]),
        c !== u &&
          s.indexOf(l) < 0 &&
          ((h = at(c)),
          (m = at(u)),
          (d = h !== m ? Jn(i, l, c, m) : parseFloat(c)),
          (f = parseFloat(u)),
          (e._pt = new Et(e._pt, o, l, d, f - d, yo)),
          (e._pt.u = m || 0),
          e._props.push(l));
    rc(o, r);
  };
Tt("padding,margin,Width,Radius", function (t, e) {
  var n = "Top",
    i = "Right",
    r = "Bottom",
    s = "Left",
    a = (e < 3 ? [n, i, r, s] : [n + s, n + i, r + i, r + s]).map(function (o) {
      return e < 2 ? t + o : "border" + o + t;
    });
  ia[e > 1 ? "border" + t : t] = function (o, l, c, u, d) {
    var f, h;
    if (arguments.length < 4)
      return (
        (f = a.map(function (m) {
          return En(o, m, c);
        })),
        (h = f.join(" ")),
        h.split(f[0]).length === 5 ? f[0] : h
      );
    (f = (u + "").split(" ")),
      (h = {}),
      a.forEach(function (m, p) {
        return (h[m] = f[p] = f[p] || f[((p - 1) / 2) | 0]);
      }),
      o.init(l, h, d);
  };
});
var ad = {
  name: "css",
  register: bo,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, n, i, r, s) {
    var a = this._props,
      o = e.style,
      l = i.vars.startAt,
      c,
      u,
      d,
      f,
      h,
      m,
      p,
      g,
      _,
      v,
      y,
      b,
      S,
      E,
      w,
      C;
    sl || bo(),
      (this.styles = this.styles || Ju(e)),
      (C = this.styles.props),
      (this.tween = i);
    for (p in n)
      if (p !== "autoRound" && ((u = n[p]), !(At[p] && qu(p, n, i, r, e, s)))) {
        if (
          ((h = typeof u),
          (m = ia[p]),
          h === "function" && ((u = u.call(i, r, e, s)), (h = typeof u)),
          h === "string" && ~u.indexOf("random(") && (u = rs(u)),
          m)
        )
          m(this, e, p, u, i) && (w = 1);
        else if (p.substr(0, 2) === "--")
          (c = (getComputedStyle(e).getPropertyValue(p) + "").trim()),
            (u += ""),
            (Un.lastIndex = 0),
            Un.test(c) || ((g = at(c)), (_ = at(u))),
            _ ? g !== _ && (c = Jn(e, p, c, _) + _) : g && (u += g),
            this.add(o, "setProperty", c, u, r, s, 0, 0, p),
            a.push(p),
            C.push(p, 0, o[p]);
        else if (h !== "undefined") {
          if (
            (l && p in l
              ? ((c = typeof l[p] == "function" ? l[p].call(i, r, e, s) : l[p]),
                Ue(c) && ~c.indexOf("random(") && (c = rs(c)),
                at(c + "") ||
                  c === "auto" ||
                  (c += Rt.units[p] || at(En(e, p)) || ""),
                (c + "").charAt(1) === "=" && (c = En(e, p)))
              : (c = En(e, p)),
            (f = parseFloat(c)),
            (v = h === "string" && u.charAt(1) === "=" && u.substr(0, 2)),
            v && (u = u.substr(2)),
            (d = parseFloat(u)),
            p in fn &&
              (p === "autoAlpha" &&
                (f === 1 && En(e, "visibility") === "hidden" && d && (f = 0),
                C.push("visibility", 0, o.visibility),
                Yn(
                  this,
                  o,
                  "visibility",
                  f ? "inherit" : "hidden",
                  d ? "inherit" : "hidden",
                  !d
                )),
              p !== "scale" &&
                p !== "transform" &&
                ((p = fn[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
            (y = p in Ln),
            y)
          ) {
            if (
              (this.styles.save(p),
              h === "string" &&
                u.substring(0, 6) === "var(--" &&
                ((u = jt(e, u.substring(4, u.indexOf(")")))),
                (d = parseFloat(u))),
              b ||
                ((S = e._gsap),
                (S.renderTransform && !n.parseTransform) ||
                  ls(e, n.parseTransform),
                (E = n.smoothOrigin !== !1 && S.smooth),
                (b = this._pt =
                  new Et(this._pt, o, Ce, 0, 1, S.renderTransform, S, 0, -1)),
                (b.dep = 1)),
              p === "scale")
            )
              (this._pt = new Et(
                this._pt,
                S,
                "scaleY",
                S.scaleY,
                (v ? tr(S.scaleY, v + d) : d) - S.scaleY || 0,
                yo
              )),
                (this._pt.u = 0),
                a.push("scaleY", p),
                (p += "X");
            else if (p === "transformOrigin") {
              C.push(wt, 0, o[wt]),
                (u = vg(u)),
                S.svg
                  ? xo(e, u, 0, E, 0, this)
                  : ((_ = parseFloat(u.split(" ")[2]) || 0),
                    _ !== S.zOrigin && Yn(this, S, "zOrigin", S.zOrigin, _),
                    Yn(this, o, p, ra(c), ra(u)));
              continue;
            } else if (p === "svgOrigin") {
              xo(e, u, 1, E, 0, this);
              continue;
            } else if (p in id) {
              xg(this, S, p, f, v ? tr(f, v + u) : u);
              continue;
            } else if (p === "smoothOrigin") {
              Yn(this, S, "smooth", S.smooth, u);
              continue;
            } else if (p === "force3D") {
              S[p] = u;
              continue;
            } else if (p === "transform") {
              Sg(this, u, e);
              continue;
            }
          } else p in o || (p = pr(p) || p);
          if (y || ((d || d === 0) && (f || f === 0) && !ig.test(u) && p in o))
            (g = (c + "").substr((f + "").length)),
              d || (d = 0),
              (_ = at(u) || (p in Rt.units ? Rt.units[p] : g)),
              g !== _ && (f = Jn(e, p, c, _)),
              (this._pt = new Et(
                this._pt,
                y ? S : o,
                p,
                f,
                (v ? tr(f, v + d) : d) - f,
                !y && (_ === "px" || p === "zIndex") && n.autoRound !== !1
                  ? ag
                  : yo
              )),
              (this._pt.u = _ || 0),
              g !== _ && _ !== "%" && ((this._pt.b = c), (this._pt.r = sg));
          else if (p in o) gg.call(this, e, p, c, v ? v + u : u);
          else if (p in e) this.add(e, p, c || e[p], v ? v + u : u, r, s);
          else if (p !== "parseTransform") {
            Uo(p, u);
            continue;
          }
          y ||
            (p in o
              ? C.push(p, 0, o[p])
              : typeof e[p] == "function"
              ? C.push(p, 2, e[p]())
              : C.push(p, 1, c || e[p])),
            a.push(p);
        }
      }
    w && ju(this);
  },
  render: function (e, n) {
    if (n.tween._time || !al())
      for (var i = n._pt; i; ) i.r(e, i.d), (i = i._next);
    else n.styles.revert();
  },
  get: En,
  aliases: fn,
  getSetter: function (e, n, i) {
    var r = fn[n];
    return (
      r && r.indexOf(",") < 0 && (n = r),
      n in Ln && n !== wt && (e._gsap.x || En(e, "x"))
        ? i && Kl === i
          ? n === "scale"
            ? ug
            : cg
          : (Kl = i || {}) && (n === "scale" ? dg : fg)
        : e.style && !Xo(e.style[n])
        ? og
        : ~n.indexOf("-")
        ? lg
        : il(e, n)
    );
  },
  core: { _removeProperty: $i, _getMatrix: ll },
};
Ct.utils.checkPrefix = pr;
Ct.core.getStyleSaver = Ju;
(function (t, e, n, i) {
  var r = Tt(t + "," + e + "," + n, function (s) {
    Ln[s] = 1;
  });
  Tt(e, function (s) {
    (Rt.units[s] = "deg"), (id[s] = 1);
  }),
    (fn[r[13]] = t + "," + e),
    Tt(i, function (s) {
      var a = s.split(":");
      fn[a[1]] = r[a[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Tt(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (t) {
    Rt.units[t] = "px";
  }
);
Ct.registerPlugin(ad);
var R = Ct.registerPlugin(ad) || Ct;
function Tg(t, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(t, i.key, i);
  }
}
function Eg(t, e, n) {
  return e && Tg(t.prototype, e), t;
}
/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var ct,
  Fs,
  zt,
  Xn,
  Gn,
  rr,
  od,
  mi,
  qr,
  ld,
  Cn,
  nn,
  cd,
  ud = function () {
    return (
      ct ||
      (typeof window < "u" && (ct = window.gsap) && ct.registerPlugin && ct)
    );
  },
  dd = 1,
  Zi = [],
  se = [],
  gn = [],
  Hr = Date.now,
  So = function (e, n) {
    return n;
  },
  wg = function () {
    var e = qr.core,
      n = e.bridge || {},
      i = e._scrollers,
      r = e._proxies;
    i.push.apply(i, se),
      r.push.apply(r, gn),
      (se = i),
      (gn = r),
      (So = function (a, o) {
        return n[a](o);
      });
  },
  Kn = function (e, n) {
    return ~gn.indexOf(e) && gn[gn.indexOf(e) + 1][n];
  },
  Wr = function (e) {
    return !!~ld.indexOf(e);
  },
  ft = function (e, n, i, r, s) {
    return e.addEventListener(n, i, { passive: r !== !1, capture: !!s });
  },
  dt = function (e, n, i, r) {
    return e.removeEventListener(n, i, !!r);
  },
  _s = "scrollLeft",
  bs = "scrollTop",
  To = function () {
    return (Cn && Cn.isPressed) || se.cache++;
  },
  sa = function (e, n) {
    var i = function r(s) {
      if (s || s === 0) {
        dd && (zt.history.scrollRestoration = "manual");
        var a = Cn && Cn.isPressed;
        (s = r.v = Math.round(s) || (Cn && Cn.iOS ? 1 : 0)),
          e(s),
          (r.cacheID = se.cache),
          a && So("ss", s);
      } else
        (n || se.cache !== r.cacheID || So("ref")) &&
          ((r.cacheID = se.cache), (r.v = e()));
      return r.v + r.offset;
    };
    return (i.offset = 0), e && i;
  },
  _t = {
    s: _s,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: sa(function (t) {
      return arguments.length
        ? zt.scrollTo(t, We.sc())
        : zt.pageXOffset || Xn[_s] || Gn[_s] || rr[_s] || 0;
    }),
  },
  We = {
    s: bs,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _t,
    sc: sa(function (t) {
      return arguments.length
        ? zt.scrollTo(_t.sc(), t)
        : zt.pageYOffset || Xn[bs] || Gn[bs] || rr[bs] || 0;
    }),
  },
  xt = function (e, n) {
    return (
      ((n && n._ctx && n._ctx.selector) || ct.utils.toArray)(e)[0] ||
      (typeof e == "string" && ct.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", e)
        : null)
    );
  },
  Cg = function (e, n) {
    for (var i = n.length; i--; ) if (n[i] === e || n[i].contains(e)) return !0;
    return !1;
  },
  ei = function (e, n) {
    var i = n.s,
      r = n.sc;
    Wr(e) && (e = Xn.scrollingElement || Gn);
    var s = se.indexOf(e),
      a = r === We.sc ? 1 : 2;
    !~s && (s = se.push(e) - 1), se[s + a] || ft(e, "scroll", To);
    var o = se[s + a],
      l =
        o ||
        (se[s + a] =
          sa(Kn(e, i), !0) ||
          (Wr(e)
            ? r
            : sa(function (c) {
                return arguments.length ? (e[i] = c) : e[i];
              })));
    return (
      (l.target = e),
      o || (l.smooth = ct.getProperty(e, "scrollBehavior") === "smooth"),
      l
    );
  },
  Eo = function (e, n, i) {
    var r = e,
      s = e,
      a = Hr(),
      o = a,
      l = n || 50,
      c = Math.max(500, l * 3),
      u = function (m, p) {
        var g = Hr();
        p || g - a > l
          ? ((s = r), (r = m), (o = a), (a = g))
          : i
          ? (r += m)
          : (r = s + ((m - s) / (g - o)) * (a - o));
      },
      d = function () {
        (s = r = i ? 0 : r), (o = a = 0);
      },
      f = function (m) {
        var p = o,
          g = s,
          _ = Hr();
        return (
          (m || m === 0) && m !== r && u(m),
          a === o || _ - o > c
            ? 0
            : ((r + (i ? g : -g)) / ((i ? _ : a) - p)) * 1e3
        );
      };
    return { update: u, reset: d, getVelocity: f };
  },
  wr = function (e, n) {
    return (
      n && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  sc = function (e) {
    var n = Math.max.apply(Math, e),
      i = Math.min.apply(Math, e);
    return Math.abs(n) >= Math.abs(i) ? n : i;
  },
  fd = function () {
    (qr = ct.core.globals().ScrollTrigger), qr && qr.core && wg();
  },
  hd = function (e) {
    return (
      (ct = e || ud()),
      !Fs &&
        ct &&
        typeof document < "u" &&
        document.body &&
        ((zt = window),
        (Xn = document),
        (Gn = Xn.documentElement),
        (rr = Xn.body),
        (ld = [zt, Xn, Gn, rr]),
        (cd = ct.core.context || function () {}),
        (mi = "onpointerenter" in rr ? "pointer" : "mouse"),
        (od = De.isTouch =
          zt.matchMedia &&
          zt.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in zt ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (nn = De.eventTypes =
          (
            "ontouchstart" in Gn
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Gn
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (dd = 0);
        }, 500),
        fd(),
        (Fs = 1)),
      Fs
    );
  };
_t.op = We;
se.cache = 0;
var De = (function () {
  function t(n) {
    this.init(n);
  }
  var e = t.prototype;
  return (
    (e.init = function (i) {
      Fs || hd(ct) || console.warn("Please gsap.registerPlugin(Observer)"),
        qr || fd();
      var r = i.tolerance,
        s = i.dragMinimum,
        a = i.type,
        o = i.target,
        l = i.lineHeight,
        c = i.debounce,
        u = i.preventDefault,
        d = i.onStop,
        f = i.onStopDelay,
        h = i.ignore,
        m = i.wheelSpeed,
        p = i.event,
        g = i.onDragStart,
        _ = i.onDragEnd,
        v = i.onDrag,
        y = i.onPress,
        b = i.onRelease,
        S = i.onRight,
        E = i.onLeft,
        w = i.onUp,
        C = i.onDown,
        A = i.onChangeX,
        P = i.onChangeY,
        $ = i.onChange,
        x = i.onToggleX,
        T = i.onToggleY,
        O = i.onHover,
        L = i.onHoverEnd,
        k = i.onMove,
        I = i.ignoreCheck,
        z = i.isNormalizer,
        B = i.onGestureStart,
        M = i.onGestureEnd,
        q = i.onWheel,
        X = i.onEnable,
        oe = i.onDisable,
        ne = i.onClick,
        K = i.scrollSpeed,
        Z = i.capture,
        ue = i.allowClicks,
        he = i.lockAxis,
        Se = i.onLockAxis;
      (this.target = o = xt(o) || Gn),
        (this.vars = i),
        h && (h = ct.utils.toArray(h)),
        (r = r || 1e-9),
        (s = s || 0),
        (m = m || 1),
        (K = K || 1),
        (a = a || "wheel,touch,pointer"),
        (c = c !== !1),
        l || (l = parseFloat(zt.getComputedStyle(rr).lineHeight) || 22);
      var Me,
        de,
        Te,
        W,
        te,
        $e,
        Ae,
        D = this,
        Oe = 0,
        Kt = 0,
        Ft = i.passive || (!u && i.passive !== !1),
        H = ei(o, _t),
        Vt = ei(o, We),
        In = H(),
        si = Vt(),
        Ye =
          ~a.indexOf("touch") &&
          !~a.indexOf("pointer") &&
          nn[0] === "pointerdown",
        zn = Wr(o),
        Le = o.ownerDocument || Xn,
        Zt = [0, 0, 0],
        qt = [0, 0, 0],
        _n = 0,
        _r = function () {
          return (_n = Hr());
        },
        Re = function (U, ce) {
          return (
            ((D.event = U) && h && Cg(U.target, h)) ||
            (ce && Ye && U.pointerType !== "touch") ||
            (I && I(U, ce))
          );
        },
        ms = function () {
          D._vx.reset(), D._vy.reset(), de.pause(), d && d(D);
        },
        bn = function () {
          var U = (D.deltaX = sc(Zt)),
            ce = (D.deltaY = sc(qt)),
            F = Math.abs(U) >= r,
            Q = Math.abs(ce) >= r;
          $ && (F || Q) && $(D, U, ce, Zt, qt),
            F &&
              (S && D.deltaX > 0 && S(D),
              E && D.deltaX < 0 && E(D),
              A && A(D),
              x && D.deltaX < 0 != Oe < 0 && x(D),
              (Oe = D.deltaX),
              (Zt[0] = Zt[1] = Zt[2] = 0)),
            Q &&
              (C && D.deltaY > 0 && C(D),
              w && D.deltaY < 0 && w(D),
              P && P(D),
              T && D.deltaY < 0 != Kt < 0 && T(D),
              (Kt = D.deltaY),
              (qt[0] = qt[1] = qt[2] = 0)),
            (W || Te) &&
              (k && k(D),
              Te && (g && Te === 1 && g(D), v && v(D), (Te = 0)),
              (W = !1)),
            $e && !($e = !1) && Se && Se(D),
            te && (q(D), (te = !1)),
            (Me = 0);
        },
        Ni = function (U, ce, F) {
          (Zt[F] += U),
            (qt[F] += ce),
            D._vx.update(U),
            D._vy.update(ce),
            c ? Me || (Me = requestAnimationFrame(bn)) : bn();
        },
        Bi = function (U, ce) {
          he &&
            !Ae &&
            ((D.axis = Ae = Math.abs(U) > Math.abs(ce) ? "x" : "y"), ($e = !0)),
            Ae !== "y" && ((Zt[2] += U), D._vx.update(U, !0)),
            Ae !== "x" && ((qt[2] += ce), D._vy.update(ce, !0)),
            c ? Me || (Me = requestAnimationFrame(bn)) : bn();
        },
        Dn = function (U) {
          if (!Re(U, 1)) {
            U = wr(U, u);
            var ce = U.clientX,
              F = U.clientY,
              Q = ce - D.x,
              j = F - D.y,
              J = D.isDragging;
            (D.x = ce),
              (D.y = F),
              (J ||
                ((Q || j) &&
                  (Math.abs(D.startX - ce) >= s ||
                    Math.abs(D.startY - F) >= s))) &&
                ((Te = J ? 2 : 1), J || (D.isDragging = !0), Bi(Q, j));
          }
        },
        ai = (D.onPress = function (ee) {
          Re(ee, 1) ||
            (ee && ee.button) ||
            ((D.axis = Ae = null),
            de.pause(),
            (D.isPressed = !0),
            (ee = wr(ee)),
            (Oe = Kt = 0),
            (D.startX = D.x = ee.clientX),
            (D.startY = D.y = ee.clientY),
            D._vx.reset(),
            D._vy.reset(),
            ft(z ? o : Le, nn[1], Dn, Ft, !0),
            (D.deltaX = D.deltaY = 0),
            y && y(D));
        }),
        ae = (D.onRelease = function (ee) {
          if (!Re(ee, 1)) {
            dt(z ? o : Le, nn[1], Dn, !0);
            var U = !isNaN(D.y - D.startY),
              ce = D.isDragging,
              F =
                ce &&
                (Math.abs(D.x - D.startX) > 3 || Math.abs(D.y - D.startY) > 3),
              Q = wr(ee);
            !F &&
              U &&
              (D._vx.reset(),
              D._vy.reset(),
              u &&
                ue &&
                ct.delayedCall(0.08, function () {
                  if (Hr() - _n > 300 && !ee.defaultPrevented) {
                    if (ee.target.click) ee.target.click();
                    else if (Le.createEvent) {
                      var j = Le.createEvent("MouseEvents");
                      j.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        zt,
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
                        ee.target.dispatchEvent(j);
                    }
                  }
                })),
              (D.isDragging = D.isGesturing = D.isPressed = !1),
              d && ce && !z && de.restart(!0),
              Te && bn(),
              _ && ce && _(D),
              b && b(D, F);
          }
        }),
        oi = function (U) {
          return (
            U.touches &&
            U.touches.length > 1 &&
            (D.isGesturing = !0) &&
            B(U, D.isDragging)
          );
        },
        Qt = function () {
          return (D.isGesturing = !1) || M(D);
        },
        Jt = function (U) {
          if (!Re(U)) {
            var ce = H(),
              F = Vt();
            Ni((ce - In) * K, (F - si) * K, 1),
              (In = ce),
              (si = F),
              d && de.restart(!0);
          }
        },
        en = function (U) {
          if (!Re(U)) {
            (U = wr(U, u)), q && (te = !0);
            var ce =
              (U.deltaMode === 1 ? l : U.deltaMode === 2 ? zt.innerHeight : 1) *
              m;
            Ni(U.deltaX * ce, U.deltaY * ce, 0), d && !z && de.restart(!0);
          }
        },
        li = function (U) {
          if (!Re(U)) {
            var ce = U.clientX,
              F = U.clientY,
              Q = ce - D.x,
              j = F - D.y;
            (D.x = ce),
              (D.y = F),
              (W = !0),
              d && de.restart(!0),
              (Q || j) && Bi(Q, j);
          }
        },
        Fi = function (U) {
          (D.event = U), O(D);
        },
        xn = function (U) {
          (D.event = U), L(D);
        },
        br = function (U) {
          return Re(U) || (wr(U, u) && ne(D));
        };
      (de = D._dc = ct.delayedCall(f || 0.25, ms).pause()),
        (D.deltaX = D.deltaY = 0),
        (D._vx = Eo(0, 50, !0)),
        (D._vy = Eo(0, 50, !0)),
        (D.scrollX = H),
        (D.scrollY = Vt),
        (D.isDragging = D.isGesturing = D.isPressed = !1),
        cd(this),
        (D.enable = function (ee) {
          return (
            D.isEnabled ||
              (ft(zn ? Le : o, "scroll", To),
              a.indexOf("scroll") >= 0 && ft(zn ? Le : o, "scroll", Jt, Ft, Z),
              a.indexOf("wheel") >= 0 && ft(o, "wheel", en, Ft, Z),
              ((a.indexOf("touch") >= 0 && od) || a.indexOf("pointer") >= 0) &&
                (ft(o, nn[0], ai, Ft, Z),
                ft(Le, nn[2], ae),
                ft(Le, nn[3], ae),
                ue && ft(o, "click", _r, !0, !0),
                ne && ft(o, "click", br),
                B && ft(Le, "gesturestart", oi),
                M && ft(Le, "gestureend", Qt),
                O && ft(o, mi + "enter", Fi),
                L && ft(o, mi + "leave", xn),
                k && ft(o, mi + "move", li)),
              (D.isEnabled = !0),
              (D.isDragging = D.isGesturing = D.isPressed = W = Te = !1),
              D._vx.reset(),
              D._vy.reset(),
              (In = H()),
              (si = Vt()),
              ee && ee.type && ai(ee),
              X && X(D)),
            D
          );
        }),
        (D.disable = function () {
          D.isEnabled &&
            (Zi.filter(function (ee) {
              return ee !== D && Wr(ee.target);
            }).length || dt(zn ? Le : o, "scroll", To),
            D.isPressed &&
              (D._vx.reset(), D._vy.reset(), dt(z ? o : Le, nn[1], Dn, !0)),
            dt(zn ? Le : o, "scroll", Jt, Z),
            dt(o, "wheel", en, Z),
            dt(o, nn[0], ai, Z),
            dt(Le, nn[2], ae),
            dt(Le, nn[3], ae),
            dt(o, "click", _r, !0),
            dt(o, "click", br),
            dt(Le, "gesturestart", oi),
            dt(Le, "gestureend", Qt),
            dt(o, mi + "enter", Fi),
            dt(o, mi + "leave", xn),
            dt(o, mi + "move", li),
            (D.isEnabled = D.isPressed = D.isDragging = !1),
            oe && oe(D));
        }),
        (D.kill = D.revert =
          function () {
            D.disable();
            var ee = Zi.indexOf(D);
            ee >= 0 && Zi.splice(ee, 1), Cn === D && (Cn = 0);
          }),
        Zi.push(D),
        z && Wr(o) && (Cn = D),
        D.enable(p);
    }),
    Eg(t, [
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
De.version = "3.13.0";
De.create = function (t) {
  return new De(t);
};
De.register = hd;
De.getAll = function () {
  return Zi.slice();
};
De.getById = function (t) {
  return Zi.filter(function (e) {
    return e.vars.id === t;
  })[0];
};
ud() && ct.registerPlugin(De);
/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var V,
  Gi,
  re,
  ve,
  Ot,
  fe,
  cl,
  aa,
  cs,
  Yr,
  Or,
  xs,
  it,
  xa,
  wo,
  mt,
  ac,
  oc,
  ji,
  pd,
  Va,
  md,
  pt,
  Co,
  gd,
  vd,
  Bn,
  Po,
  ul,
  sr,
  dl,
  oa,
  ko,
  qa,
  Ss = 1,
  rt = Date.now,
  Ha = rt(),
  Ut = 0,
  Lr = 0,
  lc = function (e, n, i) {
    var r = Mt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (i["_" + n + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
  },
  cc = function (e, n) {
    return n && (!Mt(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  },
  Pg = function t() {
    return Lr && requestAnimationFrame(t);
  },
  uc = function () {
    return (xa = 1);
  },
  dc = function () {
    return (xa = 0);
  },
  un = function (e) {
    return e;
  },
  Ir = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  yd = function () {
    return typeof window < "u";
  },
  _d = function () {
    return V || (yd() && (V = window.gsap) && V.registerPlugin && V);
  },
  Ai = function (e) {
    return !!~cl.indexOf(e);
  },
  bd = function (e) {
    return (
      (e === "Height" ? dl : re["inner" + e]) ||
      Ot["client" + e] ||
      fe["client" + e]
    );
  },
  xd = function (e) {
    return (
      Kn(e, "getBoundingClientRect") ||
      (Ai(e)
        ? function () {
            return (Ys.width = re.innerWidth), (Ys.height = dl), Ys;
          }
        : function () {
            return wn(e);
          })
    );
  },
  kg = function (e, n, i) {
    var r = i.d,
      s = i.d2,
      a = i.a;
    return (a = Kn(e, "getBoundingClientRect"))
      ? function () {
          return a()[r];
        }
      : function () {
          return (n ? bd(s) : e["client" + s]) || 0;
        };
  },
  Mg = function (e, n) {
    return !n || ~gn.indexOf(e)
      ? xd(e)
      : function () {
          return Ys;
        };
  },
  hn = function (e, n) {
    var i = n.s,
      r = n.d2,
      s = n.d,
      a = n.a;
    return Math.max(
      0,
      (i = "scroll" + r) && (a = Kn(e, i))
        ? a() - xd(e)()[s]
        : Ai(e)
        ? (Ot[i] || fe[i]) - bd(r)
        : e[i] - e["offset" + r]
    );
  },
  Ts = function (e, n) {
    for (var i = 0; i < ji.length; i += 3)
      (!n || ~n.indexOf(ji[i + 1])) && e(ji[i], ji[i + 1], ji[i + 2]);
  },
  Mt = function (e) {
    return typeof e == "string";
  },
  ot = function (e) {
    return typeof e == "function";
  },
  zr = function (e) {
    return typeof e == "number";
  },
  gi = function (e) {
    return typeof e == "object";
  },
  Cr = function (e, n, i) {
    return e && e.progress(n ? 0 : 1) && i && e.pause();
  },
  Wa = function (e, n) {
    if (e.enabled) {
      var i = e._ctx
        ? e._ctx.add(function () {
            return n(e);
          })
        : n(e);
      i && i.totalTime && (e.callbackAnimation = i);
    }
  },
  Hi = Math.abs,
  Sd = "left",
  Td = "top",
  fl = "right",
  hl = "bottom",
  Ei = "width",
  wi = "height",
  Xr = "Right",
  Gr = "Left",
  jr = "Top",
  Ur = "Bottom",
  Ne = "padding",
  Yt = "margin",
  mr = "Width",
  pl = "Height",
  He = "px",
  Xt = function (e) {
    return re.getComputedStyle(e);
  },
  $g = function (e) {
    var n = Xt(e).position;
    e.style.position = n === "absolute" || n === "fixed" ? n : "relative";
  },
  fc = function (e, n) {
    for (var i in n) i in e || (e[i] = n[i]);
    return e;
  },
  wn = function (e, n) {
    var i =
        n &&
        Xt(e)[wo] !== "matrix(1, 0, 0, 1, 0, 0)" &&
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
  },
  la = function (e, n) {
    var i = n.d2;
    return e["offset" + i] || e["client" + i] || 0;
  },
  Ed = function (e) {
    var n = [],
      i = e.labels,
      r = e.duration(),
      s;
    for (s in i) n.push(i[s] / r);
    return n;
  },
  Ag = function (e) {
    return function (n) {
      return V.utils.snap(Ed(e), n);
    };
  },
  ml = function (e) {
    var n = V.utils.snap(e),
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
  Og = function (e) {
    return function (n, i) {
      return ml(Ed(e))(n, i.direction);
    };
  },
  Es = function (e, n, i, r) {
    return i.split(",").forEach(function (s) {
      return e(n, s, r);
    });
  },
  je = function (e, n, i, r, s) {
    return e.addEventListener(n, i, { passive: !r, capture: !!s });
  },
  Ge = function (e, n, i, r) {
    return e.removeEventListener(n, i, !!r);
  },
  ws = function (e, n, i) {
    (i = i && i.wheelHandler), i && (e(n, "wheel", i), e(n, "touchmove", i));
  },
  hc = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Cs = { toggleActions: "play", anticipatePin: 0 },
  ca = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Vs = function (e, n) {
    if (Mt(e)) {
      var i = e.indexOf("="),
        r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
      ~i && (e.indexOf("%") > i && (r *= n / 100), (e = e.substr(0, i - 1))),
        (e =
          r +
          (e in ca
            ? ca[e] * n
            : ~e.indexOf("%")
            ? (parseFloat(e) * n) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  Ps = function (e, n, i, r, s, a, o, l) {
    var c = s.startColor,
      u = s.endColor,
      d = s.fontSize,
      f = s.indent,
      h = s.fontWeight,
      m = ve.createElement("div"),
      p = Ai(i) || Kn(i, "pinType") === "fixed",
      g = e.indexOf("scroller") !== -1,
      _ = p ? fe : i,
      v = e.indexOf("start") !== -1,
      y = v ? c : u,
      b =
        "border-color:" +
        y +
        ";font-size:" +
        d +
        ";color:" +
        y +
        ";font-weight:" +
        h +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (b += "position:" + ((g || l) && p ? "fixed;" : "absolute;")),
      (g || l || !p) &&
        (b += (r === We ? fl : hl) + ":" + (a + parseFloat(f)) + "px;"),
      o &&
        (b +=
          "box-sizing:border-box;text-align:left;width:" +
          o.offsetWidth +
          "px;"),
      (m._isStart = v),
      m.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")),
      (m.style.cssText = b),
      (m.innerText = n || n === 0 ? e + "-" + n : e),
      _.children[0] ? _.insertBefore(m, _.children[0]) : _.appendChild(m),
      (m._offset = m["offset" + r.op.d2]),
      qs(m, 0, r, v),
      m
    );
  },
  qs = function (e, n, i, r) {
    var s = { display: "block" },
      a = i[r ? "os2" : "p2"],
      o = i[r ? "p2" : "os2"];
    (e._isFlipped = r),
      (s[i.a + "Percent"] = r ? -100 : 0),
      (s[i.a] = r ? "1px" : 0),
      (s["border" + a + mr] = 1),
      (s["border" + o + mr] = 0),
      (s[i.p] = n + "px"),
      V.set(e, s);
  },
  ie = [],
  Mo = {},
  us,
  pc = function () {
    return rt() - Ut > 34 && (us || (us = requestAnimationFrame(An)));
  },
  Wi = function () {
    (!pt || !pt.isPressed || pt.startX > fe.clientWidth) &&
      (se.cache++,
      pt ? us || (us = requestAnimationFrame(An)) : An(),
      Ut || Li("scrollStart"),
      (Ut = rt()));
  },
  Ya = function () {
    (vd = re.innerWidth), (gd = re.innerHeight);
  },
  Dr = function (e) {
    se.cache++,
      (e === !0 ||
        (!it &&
          !md &&
          !ve.fullscreenElement &&
          !ve.webkitFullscreenElement &&
          (!Co ||
            vd !== re.innerWidth ||
            Math.abs(re.innerHeight - gd) > re.innerHeight * 0.25))) &&
        aa.restart(!0);
  },
  Oi = {},
  Lg = [],
  wd = function t() {
    return Ge(G, "scrollEnd", t) || _i(!0);
  },
  Li = function (e) {
    return (
      (Oi[e] &&
        Oi[e].map(function (n) {
          return n();
        })) ||
      Lg
    );
  },
  kt = [],
  Cd = function (e) {
    for (var n = 0; n < kt.length; n += 5)
      (!e || (kt[n + 4] && kt[n + 4].query === e)) &&
        ((kt[n].style.cssText = kt[n + 1]),
        kt[n].getBBox && kt[n].setAttribute("transform", kt[n + 2] || ""),
        (kt[n + 3].uncache = 1));
  },
  gl = function (e, n) {
    var i;
    for (mt = 0; mt < ie.length; mt++)
      (i = ie[mt]),
        i && (!n || i._ctx === n) && (e ? i.kill(1) : i.revert(!0, !0));
    (oa = !0), n && Cd(n), n || Li("revert");
  },
  Pd = function (e, n) {
    se.cache++,
      (n || !gt) &&
        se.forEach(function (i) {
          return ot(i) && i.cacheID++ && (i.rec = 0);
        }),
      Mt(e) && (re.history.scrollRestoration = ul = e);
  },
  gt,
  Ci = 0,
  mc,
  Ig = function () {
    if (mc !== Ci) {
      var e = (mc = Ci);
      requestAnimationFrame(function () {
        return e === Ci && _i(!0);
      });
    }
  },
  kd = function () {
    fe.appendChild(sr),
      (dl = (!pt && sr.offsetHeight) || re.innerHeight),
      fe.removeChild(sr);
  },
  gc = function (e) {
    return cs(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (n) {
      return (n.style.display = e ? "none" : "block");
    });
  },
  _i = function (e, n) {
    if (
      ((Ot = ve.documentElement),
      (fe = ve.body),
      (cl = [re, ve, Ot, fe]),
      Ut && !e && !oa)
    ) {
      je(G, "scrollEnd", wd);
      return;
    }
    kd(),
      (gt = G.isRefreshing = !0),
      se.forEach(function (r) {
        return ot(r) && ++r.cacheID && (r.rec = r());
      });
    var i = Li("refreshInit");
    pd && G.sort(),
      n || gl(),
      se.forEach(function (r) {
        ot(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
      }),
      ie.slice(0).forEach(function (r) {
        return r.refresh();
      }),
      (oa = !1),
      ie.forEach(function (r) {
        if (r._subPinOffset && r.pin) {
          var s = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
            a = r.pin[s];
          r.revert(!0, 1), r.adjustPinSpacing(r.pin[s] - a), r.refresh();
        }
      }),
      (ko = 1),
      gc(!0),
      ie.forEach(function (r) {
        var s = hn(r.scroller, r._dir),
          a = r.vars.end === "max" || (r._endClamp && r.end > s),
          o = r._startClamp && r.start >= s;
        (a || o) &&
          r.setPositions(
            o ? s - 1 : r.start,
            a ? Math.max(o ? s : r.start + 1, s) : r.end,
            !0
          );
      }),
      gc(!1),
      (ko = 0),
      i.forEach(function (r) {
        return r && r.render && r.render(-1);
      }),
      se.forEach(function (r) {
        ot(r) &&
          (r.smooth &&
            requestAnimationFrame(function () {
              return (r.target.style.scrollBehavior = "smooth");
            }),
          r.rec && r(r.rec));
      }),
      Pd(ul, 1),
      aa.pause(),
      Ci++,
      (gt = 2),
      An(2),
      ie.forEach(function (r) {
        return ot(r.vars.onRefresh) && r.vars.onRefresh(r);
      }),
      (gt = G.isRefreshing = !1),
      Li("refresh");
  },
  $o = 0,
  Hs = 1,
  Kr,
  An = function (e) {
    if (e === 2 || (!gt && !oa)) {
      (G.isUpdating = !0), Kr && Kr.update(0);
      var n = ie.length,
        i = rt(),
        r = i - Ha >= 50,
        s = n && ie[0].scroll();
      if (
        ((Hs = $o > s ? -1 : 1),
        gt || ($o = s),
        r &&
          (Ut && !xa && i - Ut > 200 && ((Ut = 0), Li("scrollEnd")),
          (Or = Ha),
          (Ha = i)),
        Hs < 0)
      ) {
        for (mt = n; mt-- > 0; ) ie[mt] && ie[mt].update(0, r);
        Hs = 1;
      } else for (mt = 0; mt < n; mt++) ie[mt] && ie[mt].update(0, r);
      G.isUpdating = !1;
    }
    us = 0;
  },
  Ao = [
    Sd,
    Td,
    hl,
    fl,
    Yt + Ur,
    Yt + Xr,
    Yt + jr,
    Yt + Gr,
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
  Ws = Ao.concat([
    Ei,
    wi,
    "boxSizing",
    "max" + mr,
    "max" + pl,
    "position",
    Yt,
    Ne,
    Ne + jr,
    Ne + Xr,
    Ne + Ur,
    Ne + Gr,
  ]),
  zg = function (e, n, i) {
    ar(i);
    var r = e._gsap;
    if (r.spacerIsNative) ar(r.spacerState);
    else if (e._gsap.swappedIn) {
      var s = n.parentNode;
      s && (s.insertBefore(e, n), s.removeChild(n));
    }
    e._gsap.swappedIn = !1;
  },
  Xa = function (e, n, i, r) {
    if (!e._gsap.swappedIn) {
      for (var s = Ao.length, a = n.style, o = e.style, l; s--; )
        (l = Ao[s]), (a[l] = i[l]);
      (a.position = i.position === "absolute" ? "absolute" : "relative"),
        i.display === "inline" && (a.display = "inline-block"),
        (o[hl] = o[fl] = "auto"),
        (a.flexBasis = i.flexBasis || "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[Ei] = la(e, _t) + He),
        (a[wi] = la(e, We) + He),
        (a[Ne] = o[Yt] = o[Td] = o[Sd] = "0"),
        ar(r),
        (o[Ei] = o["max" + mr] = i[Ei]),
        (o[wi] = o["max" + pl] = i[wi]),
        (o[Ne] = i[Ne]),
        e.parentNode !== n &&
          (e.parentNode.insertBefore(n, e), n.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  Dg = /([A-Z])/g,
  ar = function (e) {
    if (e) {
      var n = e.t.style,
        i = e.length,
        r = 0,
        s,
        a;
      for ((e.t._gsap || V.core.getCache(e.t)).uncache = 1; r < i; r += 2)
        (a = e[r + 1]),
          (s = e[r]),
          a
            ? (n[s] = a)
            : n[s] && n.removeProperty(s.replace(Dg, "-$1").toLowerCase());
    }
  },
  ks = function (e) {
    for (var n = Ws.length, i = e.style, r = [], s = 0; s < n; s++)
      r.push(Ws[s], i[Ws[s]]);
    return (r.t = e), r;
  },
  Rg = function (e, n, i) {
    for (var r = [], s = e.length, a = i ? 8 : 0, o; a < s; a += 2)
      (o = e[a]), r.push(o, o in n ? n[o] : e[a + 1]);
    return (r.t = e.t), r;
  },
  Ys = { left: 0, top: 0 },
  vc = function (e, n, i, r, s, a, o, l, c, u, d, f, h, m) {
    ot(e) && (e = e(l)),
      Mt(e) &&
        e.substr(0, 3) === "max" &&
        (e = f + (e.charAt(4) === "=" ? Vs("0" + e.substr(3), i) : 0));
    var p = h ? h.time() : 0,
      g,
      _,
      v;
    if ((h && h.seek(0), isNaN(e) || (e = +e), zr(e)))
      h &&
        (e = V.utils.mapRange(
          h.scrollTrigger.start,
          h.scrollTrigger.end,
          0,
          f,
          e
        )),
        o && qs(o, i, r, !0);
    else {
      ot(n) && (n = n(l));
      var y = (e || "0").split(" "),
        b,
        S,
        E,
        w;
      (v = xt(n, l) || fe),
        (b = wn(v) || {}),
        (!b || (!b.left && !b.top)) &&
          Xt(v).display === "none" &&
          ((w = v.style.display),
          (v.style.display = "block"),
          (b = wn(v)),
          w ? (v.style.display = w) : v.style.removeProperty("display")),
        (S = Vs(y[0], b[r.d])),
        (E = Vs(y[1] || "0", i)),
        (e = b[r.p] - c[r.p] - u + S + s - E),
        o && qs(o, E, r, i - E < 20 || (o._isStart && E > 20)),
        (i -= i - E);
    }
    if ((m && ((l[m] = e || -0.001), e < 0 && (e = 0)), a)) {
      var C = e + i,
        A = a._isStart;
      (g = "scroll" + r.d2),
        qs(
          a,
          C,
          r,
          (A && C > 20) ||
            (!A && (d ? Math.max(fe[g], Ot[g]) : a.parentNode[g]) <= C + 1)
        ),
        d &&
          ((c = wn(o)),
          d && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + He));
    }
    return (
      h &&
        v &&
        ((g = wn(v)),
        h.seek(f),
        (_ = wn(v)),
        (h._caScrollDist = g[r.p] - _[r.p]),
        (e = (e / h._caScrollDist) * f)),
      h && h.seek(p),
      h ? e : Math.round(e)
    );
  },
  Ng = /(webkit|moz|length|cssText|inset)/i,
  yc = function (e, n, i, r) {
    if (e.parentNode !== n) {
      var s = e.style,
        a,
        o;
      if (n === fe) {
        (e._stOrig = s.cssText), (o = Xt(e));
        for (a in o)
          !+a &&
            !Ng.test(a) &&
            o[a] &&
            typeof s[a] == "string" &&
            a !== "0" &&
            (s[a] = o[a]);
        (s.top = i), (s.left = r);
      } else s.cssText = e._stOrig;
      (V.core.getCache(e).uncache = 1), n.appendChild(e);
    }
  },
  Md = function (e, n, i) {
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
  Ms = function (e, n, i) {
    var r = {};
    (r[n.p] = "+=" + i), V.set(e, r);
  },
  _c = function (e, n) {
    var i = ei(e, n),
      r = "_scroll" + n.p2,
      s = function a(o, l, c, u, d) {
        var f = a.tween,
          h = l.onComplete,
          m = {};
        c = c || i();
        var p = Md(i, c, function () {
          f.kill(), (a.tween = 0);
        });
        return (
          (d = (u && d) || 0),
          (u = u || o - c),
          f && f.kill(),
          (l[r] = o),
          (l.inherit = !1),
          (l.modifiers = m),
          (m[r] = function () {
            return p(c + u * f.ratio + d * f.ratio * f.ratio);
          }),
          (l.onUpdate = function () {
            se.cache++, a.tween && An();
          }),
          (l.onComplete = function () {
            (a.tween = 0), h && h.call(f);
          }),
          (f = a.tween = V.to(e, l)),
          f
        );
      };
    return (
      (e[r] = i),
      (i.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0);
      }),
      je(e, "wheel", i.wheelHandler),
      G.isTouch && je(e, "touchmove", i.wheelHandler),
      s
    );
  },
  G = (function () {
    function t(n, i) {
      Gi ||
        t.register(V) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Po(this),
        this.init(n, i);
    }
    var e = t.prototype;
    return (
      (e.init = function (i, r) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Lr)
        ) {
          this.update = this.refresh = this.kill = un;
          return;
        }
        i = fc(Mt(i) || zr(i) || i.nodeType ? { trigger: i } : i, Cs);
        var s = i,
          a = s.onUpdate,
          o = s.toggleClass,
          l = s.id,
          c = s.onToggle,
          u = s.onRefresh,
          d = s.scrub,
          f = s.trigger,
          h = s.pin,
          m = s.pinSpacing,
          p = s.invalidateOnRefresh,
          g = s.anticipatePin,
          _ = s.onScrubComplete,
          v = s.onSnapComplete,
          y = s.once,
          b = s.snap,
          S = s.pinReparent,
          E = s.pinSpacer,
          w = s.containerAnimation,
          C = s.fastScrollEnd,
          A = s.preventOverlaps,
          P =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? _t
              : We,
          $ = !d && d !== 0,
          x = xt(i.scroller || re),
          T = V.core.getCache(x),
          O = Ai(x),
          L =
            ("pinType" in i
              ? i.pinType
              : Kn(x, "pinType") || (O && "fixed")) === "fixed",
          k = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          I = $ && i.toggleActions.split(" "),
          z = "markers" in i ? i.markers : Cs.markers,
          B = O ? 0 : parseFloat(Xt(x)["border" + P.p2 + mr]) || 0,
          M = this,
          q =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(M);
            },
          X = kg(x, O, P),
          oe = Mg(x, O),
          ne = 0,
          K = 0,
          Z = 0,
          ue = ei(x, P),
          he,
          Se,
          Me,
          de,
          Te,
          W,
          te,
          $e,
          Ae,
          D,
          Oe,
          Kt,
          Ft,
          H,
          Vt,
          In,
          si,
          Ye,
          zn,
          Le,
          Zt,
          qt,
          _n,
          _r,
          Re,
          ms,
          bn,
          Ni,
          Bi,
          Dn,
          ai,
          ae,
          oi,
          Qt,
          Jt,
          en,
          li,
          Fi,
          xn;
        if (
          ((M._startClamp = M._endClamp = !1),
          (M._dir = P),
          (g *= 45),
          (M.scroller = x),
          (M.scroll = w ? w.time.bind(w) : ue),
          (de = ue()),
          (M.vars = i),
          (r = r || i.animation),
          "refreshPriority" in i &&
            ((pd = 1), i.refreshPriority === -9999 && (Kr = M)),
          (T.tweenScroll = T.tweenScroll || {
            top: _c(x, We),
            left: _c(x, _t),
          }),
          (M.tweenTo = he = T.tweenScroll[P.p]),
          (M.scrubDuration = function (F) {
            (oi = zr(F) && F),
              oi
                ? ae
                  ? ae.duration(F)
                  : (ae = V.to(r, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: oi,
                      paused: !0,
                      onComplete: function () {
                        return _ && _(M);
                      },
                    }))
                : (ae && ae.progress(1).kill(), (ae = 0));
          }),
          r &&
            ((r.vars.lazy = !1),
            (r._initted && !M.isReverted) ||
              (r.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                r.duration() &&
                r.render(0, !0, !0)),
            (M.animation = r.pause()),
            (r.scrollTrigger = M),
            M.scrubDuration(d),
            (Dn = 0),
            l || (l = r.vars.id)),
          b &&
            ((!gi(b) || b.push) && (b = { snapTo: b }),
            "scrollBehavior" in fe.style &&
              V.set(O ? [fe, Ot] : x, { scrollBehavior: "auto" }),
            se.forEach(function (F) {
              return (
                ot(F) &&
                F.target === (O ? ve.scrollingElement || Ot : x) &&
                (F.smooth = !1)
              );
            }),
            (Me = ot(b.snapTo)
              ? b.snapTo
              : b.snapTo === "labels"
              ? Ag(r)
              : b.snapTo === "labelsDirectional"
              ? Og(r)
              : b.directional !== !1
              ? function (F, Q) {
                  return ml(b.snapTo)(F, rt() - K < 500 ? 0 : Q.direction);
                }
              : V.utils.snap(b.snapTo)),
            (Qt = b.duration || { min: 0.1, max: 2 }),
            (Qt = gi(Qt) ? Yr(Qt.min, Qt.max) : Yr(Qt, Qt)),
            (Jt = V.delayedCall(b.delay || oi / 2 || 0.1, function () {
              var F = ue(),
                Q = rt() - K < 500,
                j = he.tween;
              if (
                (Q || Math.abs(M.getVelocity()) < 10) &&
                !j &&
                !xa &&
                ne !== F
              ) {
                var J = (F - W) / H,
                  Xe = r && !$ ? r.totalProgress() : J,
                  le = Q ? 0 : ((Xe - ai) / (rt() - Or)) * 1e3 || 0,
                  Ie = V.utils.clamp(-J, 1 - J, (Hi(le / 2) * le) / 0.185),
                  et = J + (b.inertia === !1 ? 0 : Ie),
                  Pe,
                  _e,
                  pe = b,
                  tn = pe.onStart,
                  Ee = pe.onInterrupt,
                  Pt = pe.onComplete;
                if (
                  ((Pe = Me(et, M)),
                  zr(Pe) || (Pe = et),
                  (_e = Math.max(0, Math.round(W + Pe * H))),
                  F <= te && F >= W && _e !== F)
                ) {
                  if (j && !j._initted && j.data <= Hi(_e - F)) return;
                  b.inertia === !1 && (Ie = Pe - J),
                    he(
                      _e,
                      {
                        duration: Qt(
                          Hi(
                            (Math.max(Hi(et - Xe), Hi(Pe - Xe)) * 0.185) /
                              le /
                              0.05 || 0
                          )
                        ),
                        ease: b.ease || "power3",
                        data: Hi(_e - F),
                        onInterrupt: function () {
                          return Jt.restart(!0) && Ee && Ee(M);
                        },
                        onComplete: function () {
                          M.update(),
                            (ne = ue()),
                            r &&
                              !$ &&
                              (ae
                                ? ae.resetTo(
                                    "totalProgress",
                                    Pe,
                                    r._tTime / r._tDur
                                  )
                                : r.progress(Pe)),
                            (Dn = ai =
                              r && !$ ? r.totalProgress() : M.progress),
                            v && v(M),
                            Pt && Pt(M);
                        },
                      },
                      F,
                      Ie * H,
                      _e - F - Ie * H
                    ),
                    tn && tn(M, he.tween);
                }
              } else M.isActive && ne !== F && Jt.restart(!0);
            }).pause())),
          l && (Mo[l] = M),
          (f = M.trigger = xt(f || (h !== !0 && h))),
          (xn = f && f._gsap && f._gsap.stRevert),
          xn && (xn = xn(M)),
          (h = h === !0 ? f : xt(h)),
          Mt(o) && (o = { targets: f, className: o }),
          h &&
            (m === !1 ||
              m === Yt ||
              (m =
                !m &&
                h.parentNode &&
                h.parentNode.style &&
                Xt(h.parentNode).display === "flex"
                  ? !1
                  : Ne),
            (M.pin = h),
            (Se = V.core.getCache(h)),
            Se.spacer
              ? (Vt = Se.pinState)
              : (E &&
                  ((E = xt(E)),
                  E && !E.nodeType && (E = E.current || E.nativeElement),
                  (Se.spacerIsNative = !!E),
                  E && (Se.spacerState = ks(E))),
                (Se.spacer = Ye = E || ve.createElement("div")),
                Ye.classList.add("pin-spacer"),
                l && Ye.classList.add("pin-spacer-" + l),
                (Se.pinState = Vt = ks(h))),
            i.force3D !== !1 && V.set(h, { force3D: !0 }),
            (M.spacer = Ye = Se.spacer),
            (Bi = Xt(h)),
            (_r = Bi[m + P.os2]),
            (Le = V.getProperty(h)),
            (Zt = V.quickSetter(h, P.a, He)),
            Xa(h, Ye, Bi),
            (si = ks(h))),
          z)
        ) {
          (Kt = gi(z) ? fc(z, hc) : hc),
            (D = Ps("scroller-start", l, x, P, Kt, 0)),
            (Oe = Ps("scroller-end", l, x, P, Kt, 0, D)),
            (zn = D["offset" + P.op.d2]);
          var br = xt(Kn(x, "content") || x);
          ($e = this.markerStart = Ps("start", l, br, P, Kt, zn, 0, w)),
            (Ae = this.markerEnd = Ps("end", l, br, P, Kt, zn, 0, w)),
            w && (Fi = V.quickSetter([$e, Ae], P.a, He)),
            !L &&
              !(gn.length && Kn(x, "fixedMarkers") === !0) &&
              ($g(O ? fe : x),
              V.set([D, Oe], { force3D: !0 }),
              (ms = V.quickSetter(D, P.a, He)),
              (Ni = V.quickSetter(Oe, P.a, He)));
        }
        if (w) {
          var ee = w.vars.onUpdate,
            U = w.vars.onUpdateParams;
          w.eventCallback("onUpdate", function () {
            M.update(0, 0, 1), ee && ee.apply(w, U || []);
          });
        }
        if (
          ((M.previous = function () {
            return ie[ie.indexOf(M) - 1];
          }),
          (M.next = function () {
            return ie[ie.indexOf(M) + 1];
          }),
          (M.revert = function (F, Q) {
            if (!Q) return M.kill(!0);
            var j = F !== !1 || !M.enabled,
              J = it;
            j !== M.isReverted &&
              (j &&
                ((en = Math.max(ue(), M.scroll.rec || 0)),
                (Z = M.progress),
                (li = r && r.progress())),
              $e &&
                [$e, Ae, D, Oe].forEach(function (Xe) {
                  return (Xe.style.display = j ? "none" : "block");
                }),
              j && ((it = M), M.update(j)),
              h &&
                (!S || !M.isActive) &&
                (j ? zg(h, Ye, Vt) : Xa(h, Ye, Xt(h), Re)),
              j || M.update(j),
              (it = J),
              (M.isReverted = j));
          }),
          (M.refresh = function (F, Q, j, J) {
            if (!((it || !M.enabled) && !Q)) {
              if (h && F && Ut) {
                je(t, "scrollEnd", wd);
                return;
              }
              !gt && q && q(M),
                (it = M),
                he.tween && !j && (he.tween.kill(), (he.tween = 0)),
                ae && ae.pause(),
                p &&
                  r &&
                  (r.revert({ kill: !1 }).invalidate(),
                  r.getChildren &&
                    r.getChildren(!0, !0, !1).forEach(function (Rn) {
                      return Rn.vars.immediateRender && Rn.render(0, !0, !0);
                    })),
                M.isReverted || M.revert(!0, !0),
                (M._subPinOffset = !1);
              var Xe = X(),
                le = oe(),
                Ie = w ? w.duration() : hn(x, P),
                et = H <= 0.01 || !H,
                Pe = 0,
                _e = J || 0,
                pe = gi(j) ? j.end : i.end,
                tn = i.endTrigger || f,
                Ee = gi(j)
                  ? j.start
                  : i.start || (i.start === 0 || !f ? 0 : h ? "0 0" : "0 100%"),
                Pt = (M.pinnedContainer =
                  i.pinnedContainer && xt(i.pinnedContainer, M)),
                an = (f && Math.max(0, ie.indexOf(M))) || 0,
                Ke = an,
                Ze,
                tt,
                ci,
                gs,
                nt,
                qe,
                on,
                wa,
                $l,
                xr,
                ln,
                Sr,
                vs;
              for (
                z &&
                gi(j) &&
                ((Sr = V.getProperty(D, P.p)), (vs = V.getProperty(Oe, P.p)));
                Ke-- > 0;

              )
                (qe = ie[Ke]),
                  qe.end || qe.refresh(0, 1) || (it = M),
                  (on = qe.pin),
                  on &&
                    (on === f || on === h || on === Pt) &&
                    !qe.isReverted &&
                    (xr || (xr = []), xr.unshift(qe), qe.revert(!0, !0)),
                  qe !== ie[Ke] && (an--, Ke--);
              for (
                ot(Ee) && (Ee = Ee(M)),
                  Ee = lc(Ee, "start", M),
                  W =
                    vc(
                      Ee,
                      f,
                      Xe,
                      P,
                      ue(),
                      $e,
                      D,
                      M,
                      le,
                      B,
                      L,
                      Ie,
                      w,
                      M._startClamp && "_startClamp"
                    ) || (h ? -0.001 : 0),
                  ot(pe) && (pe = pe(M)),
                  Mt(pe) &&
                    !pe.indexOf("+=") &&
                    (~pe.indexOf(" ")
                      ? (pe = (Mt(Ee) ? Ee.split(" ")[0] : "") + pe)
                      : ((Pe = Vs(pe.substr(2), Xe)),
                        (pe = Mt(Ee)
                          ? Ee
                          : (w
                              ? V.utils.mapRange(
                                  0,
                                  w.duration(),
                                  w.scrollTrigger.start,
                                  w.scrollTrigger.end,
                                  W
                                )
                              : W) + Pe),
                        (tn = f))),
                  pe = lc(pe, "end", M),
                  te =
                    Math.max(
                      W,
                      vc(
                        pe || (tn ? "100% 0" : Ie),
                        tn,
                        Xe,
                        P,
                        ue() + Pe,
                        Ae,
                        Oe,
                        M,
                        le,
                        B,
                        L,
                        Ie,
                        w,
                        M._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  Pe = 0,
                  Ke = an;
                Ke--;

              )
                (qe = ie[Ke]),
                  (on = qe.pin),
                  on &&
                    qe.start - qe._pinPush <= W &&
                    !w &&
                    qe.end > 0 &&
                    ((Ze =
                      qe.end -
                      (M._startClamp ? Math.max(0, qe.start) : qe.start)),
                    ((on === f && qe.start - qe._pinPush < W) || on === Pt) &&
                      isNaN(Ee) &&
                      (Pe += Ze * (1 - qe.progress)),
                    on === h && (_e += Ze));
              if (
                ((W += Pe),
                (te += Pe),
                M._startClamp && (M._startClamp += Pe),
                M._endClamp &&
                  !gt &&
                  ((M._endClamp = te || -0.001), (te = Math.min(te, hn(x, P)))),
                (H = te - W || ((W -= 0.01) && 0.001)),
                et && (Z = V.utils.clamp(0, 1, V.utils.normalize(W, te, en))),
                (M._pinPush = _e),
                $e &&
                  Pe &&
                  ((Ze = {}),
                  (Ze[P.a] = "+=" + Pe),
                  Pt && (Ze[P.p] = "-=" + ue()),
                  V.set([$e, Ae], Ze)),
                h && !(ko && M.end >= hn(x, P)))
              )
                (Ze = Xt(h)),
                  (gs = P === We),
                  (ci = ue()),
                  (qt = parseFloat(Le(P.a)) + _e),
                  !Ie &&
                    te > 1 &&
                    ((ln = (O ? ve.scrollingElement || Ot : x).style),
                    (ln = {
                      style: ln,
                      value: ln["overflow" + P.a.toUpperCase()],
                    }),
                    O &&
                      Xt(fe)["overflow" + P.a.toUpperCase()] !== "scroll" &&
                      (ln.style["overflow" + P.a.toUpperCase()] = "scroll")),
                  Xa(h, Ye, Ze),
                  (si = ks(h)),
                  (tt = wn(h, !0)),
                  (wa = L && ei(x, gs ? _t : We)()),
                  m
                    ? ((Re = [m + P.os2, H + _e + He]),
                      (Re.t = Ye),
                      (Ke = m === Ne ? la(h, P) + H + _e : 0),
                      Ke &&
                        (Re.push(P.d, Ke + He),
                        Ye.style.flexBasis !== "auto" &&
                          (Ye.style.flexBasis = Ke + He)),
                      ar(Re),
                      Pt &&
                        ie.forEach(function (Rn) {
                          Rn.pin === Pt &&
                            Rn.vars.pinSpacing !== !1 &&
                            (Rn._subPinOffset = !0);
                        }),
                      L && ue(en))
                    : ((Ke = la(h, P)),
                      Ke &&
                        Ye.style.flexBasis !== "auto" &&
                        (Ye.style.flexBasis = Ke + He)),
                  L &&
                    ((nt = {
                      top: tt.top + (gs ? ci - W : wa) + He,
                      left: tt.left + (gs ? wa : ci - W) + He,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (nt[Ei] = nt["max" + mr] = Math.ceil(tt.width) + He),
                    (nt[wi] = nt["max" + pl] = Math.ceil(tt.height) + He),
                    (nt[Yt] =
                      nt[Yt + jr] =
                      nt[Yt + Xr] =
                      nt[Yt + Ur] =
                      nt[Yt + Gr] =
                        "0"),
                    (nt[Ne] = Ze[Ne]),
                    (nt[Ne + jr] = Ze[Ne + jr]),
                    (nt[Ne + Xr] = Ze[Ne + Xr]),
                    (nt[Ne + Ur] = Ze[Ne + Ur]),
                    (nt[Ne + Gr] = Ze[Ne + Gr]),
                    (In = Rg(Vt, nt, S)),
                    gt && ue(0)),
                  r
                    ? (($l = r._initted),
                      Va(1),
                      r.render(r.duration(), !0, !0),
                      (_n = Le(P.a) - qt + H + _e),
                      (bn = Math.abs(H - _n) > 1),
                      L && bn && In.splice(In.length - 2, 2),
                      r.render(0, !0, !0),
                      $l || r.invalidate(!0),
                      r.parent || r.totalTime(r.totalTime()),
                      Va(0))
                    : (_n = H),
                  ln &&
                    (ln.value
                      ? (ln.style["overflow" + P.a.toUpperCase()] = ln.value)
                      : ln.style.removeProperty("overflow-" + P.a));
              else if (f && ue() && !w)
                for (tt = f.parentNode; tt && tt !== fe; )
                  tt._pinOffset &&
                    ((W -= tt._pinOffset), (te -= tt._pinOffset)),
                    (tt = tt.parentNode);
              xr &&
                xr.forEach(function (Rn) {
                  return Rn.revert(!1, !0);
                }),
                (M.start = W),
                (M.end = te),
                (de = Te = gt ? en : ue()),
                !w && !gt && (de < en && ue(en), (M.scroll.rec = 0)),
                M.revert(!1, !0),
                (K = rt()),
                Jt && ((ne = -1), Jt.restart(!0)),
                (it = 0),
                r &&
                  $ &&
                  (r._initted || li) &&
                  r.progress() !== li &&
                  r.progress(li || 0, !0).render(r.time(), !0, !0),
                (et || Z !== M.progress || w || p || (r && !r._initted)) &&
                  (r &&
                    !$ &&
                    (r._initted || Z || r.vars.immediateRender !== !1) &&
                    r.totalProgress(
                      w && W < -0.001 && !Z ? V.utils.normalize(W, te, 0) : Z,
                      !0
                    ),
                  (M.progress = et || (de - W) / H === Z ? 0 : Z)),
                h && m && (Ye._pinOffset = Math.round(M.progress * _n)),
                ae && ae.invalidate(),
                isNaN(Sr) ||
                  ((Sr -= V.getProperty(D, P.p)),
                  (vs -= V.getProperty(Oe, P.p)),
                  Ms(D, P, Sr),
                  Ms($e, P, Sr - (J || 0)),
                  Ms(Oe, P, vs),
                  Ms(Ae, P, vs - (J || 0))),
                et && !gt && M.update(),
                u && !gt && !Ft && ((Ft = !0), u(M), (Ft = !1));
            }
          }),
          (M.getVelocity = function () {
            return ((ue() - Te) / (rt() - Or)) * 1e3 || 0;
          }),
          (M.endAnimation = function () {
            Cr(M.callbackAnimation),
              r &&
                (ae
                  ? ae.progress(1)
                  : r.paused()
                  ? $ || Cr(r, M.direction < 0, 1)
                  : Cr(r, r.reversed()));
          }),
          (M.labelToScroll = function (F) {
            return (
              (r &&
                r.labels &&
                (W || M.refresh() || W) + (r.labels[F] / r.duration()) * H) ||
              0
            );
          }),
          (M.getTrailing = function (F) {
            var Q = ie.indexOf(M),
              j = M.direction > 0 ? ie.slice(0, Q).reverse() : ie.slice(Q + 1);
            return (
              Mt(F)
                ? j.filter(function (J) {
                    return J.vars.preventOverlaps === F;
                  })
                : j
            ).filter(function (J) {
              return M.direction > 0 ? J.end <= W : J.start >= te;
            });
          }),
          (M.update = function (F, Q, j) {
            if (!(w && !j && !F)) {
              var J = gt === !0 ? en : M.scroll(),
                Xe = F ? 0 : (J - W) / H,
                le = Xe < 0 ? 0 : Xe > 1 ? 1 : Xe || 0,
                Ie = M.progress,
                et,
                Pe,
                _e,
                pe,
                tn,
                Ee,
                Pt,
                an;
              if (
                (Q &&
                  ((Te = de),
                  (de = w ? ue() : J),
                  b && ((ai = Dn), (Dn = r && !$ ? r.totalProgress() : le))),
                g &&
                  h &&
                  !it &&
                  !Ss &&
                  Ut &&
                  (!le && W < J + ((J - Te) / (rt() - Or)) * g
                    ? (le = 1e-4)
                    : le === 1 &&
                      te > J + ((J - Te) / (rt() - Or)) * g &&
                      (le = 0.9999)),
                le !== Ie && M.enabled)
              ) {
                if (
                  ((et = M.isActive = !!le && le < 1),
                  (Pe = !!Ie && Ie < 1),
                  (Ee = et !== Pe),
                  (tn = Ee || !!le != !!Ie),
                  (M.direction = le > Ie ? 1 : -1),
                  (M.progress = le),
                  tn &&
                    !it &&
                    ((_e = le && !Ie ? 0 : le === 1 ? 1 : Ie === 1 ? 2 : 3),
                    $ &&
                      ((pe =
                        (!Ee && I[_e + 1] !== "none" && I[_e + 1]) || I[_e]),
                      (an =
                        r &&
                        (pe === "complete" || pe === "reset" || pe in r)))),
                  A &&
                    (Ee || an) &&
                    (an || d || !r) &&
                    (ot(A)
                      ? A(M)
                      : M.getTrailing(A).forEach(function (ci) {
                          return ci.endAnimation();
                        })),
                  $ ||
                    (ae && !it && !Ss
                      ? (ae._dp._time - ae._start !== ae._time &&
                          ae.render(ae._dp._time - ae._start),
                        ae.resetTo
                          ? ae.resetTo("totalProgress", le, r._tTime / r._tDur)
                          : ((ae.vars.totalProgress = le),
                            ae.invalidate().restart()))
                      : r && r.totalProgress(le, !!(it && (K || F)))),
                  h)
                ) {
                  if ((F && m && (Ye.style[m + P.os2] = _r), !L))
                    Zt(Ir(qt + _n * le));
                  else if (tn) {
                    if (
                      ((Pt = !F && le > Ie && te + 1 > J && J + 1 >= hn(x, P)),
                      S)
                    )
                      if (!F && (et || Pt)) {
                        var Ke = wn(h, !0),
                          Ze = J - W;
                        yc(
                          h,
                          fe,
                          Ke.top + (P === We ? Ze : 0) + He,
                          Ke.left + (P === We ? 0 : Ze) + He
                        );
                      } else yc(h, Ye);
                    ar(et || Pt ? In : si),
                      (bn && le < 1 && et) ||
                        Zt(qt + (le === 1 && !Pt ? _n : 0));
                  }
                }
                b && !he.tween && !it && !Ss && Jt.restart(!0),
                  o &&
                    (Ee || (y && le && (le < 1 || !qa))) &&
                    cs(o.targets).forEach(function (ci) {
                      return ci.classList[et || y ? "add" : "remove"](
                        o.className
                      );
                    }),
                  a && !$ && !F && a(M),
                  tn && !it
                    ? ($ &&
                        (an &&
                          (pe === "complete"
                            ? r.pause().totalProgress(1)
                            : pe === "reset"
                            ? r.restart(!0).pause()
                            : pe === "restart"
                            ? r.restart(!0)
                            : r[pe]()),
                        a && a(M)),
                      (Ee || !qa) &&
                        (c && Ee && Wa(M, c),
                        k[_e] && Wa(M, k[_e]),
                        y && (le === 1 ? M.kill(!1, 1) : (k[_e] = 0)),
                        Ee || ((_e = le === 1 ? 1 : 3), k[_e] && Wa(M, k[_e]))),
                      C &&
                        !et &&
                        Math.abs(M.getVelocity()) > (zr(C) ? C : 2500) &&
                        (Cr(M.callbackAnimation),
                        ae
                          ? ae.progress(1)
                          : Cr(r, pe === "reverse" ? 1 : !le, 1)))
                    : $ && a && !it && a(M);
              }
              if (Ni) {
                var tt = w ? (J / w.duration()) * (w._caScrollDist || 0) : J;
                ms(tt + (D._isFlipped ? 1 : 0)), Ni(tt);
              }
              Fi && Fi((-J / w.duration()) * (w._caScrollDist || 0));
            }
          }),
          (M.enable = function (F, Q) {
            M.enabled ||
              ((M.enabled = !0),
              je(x, "resize", Dr),
              O || je(x, "scroll", Wi),
              q && je(t, "refreshInit", q),
              F !== !1 && ((M.progress = Z = 0), (de = Te = ne = ue())),
              Q !== !1 && M.refresh());
          }),
          (M.getTween = function (F) {
            return F && he ? he.tween : ae;
          }),
          (M.setPositions = function (F, Q, j, J) {
            if (w) {
              var Xe = w.scrollTrigger,
                le = w.duration(),
                Ie = Xe.end - Xe.start;
              (F = Xe.start + (Ie * F) / le), (Q = Xe.start + (Ie * Q) / le);
            }
            M.refresh(
              !1,
              !1,
              {
                start: cc(F, j && !!M._startClamp),
                end: cc(Q, j && !!M._endClamp),
              },
              J
            ),
              M.update();
          }),
          (M.adjustPinSpacing = function (F) {
            if (Re && F) {
              var Q = Re.indexOf(P.d) + 1;
              (Re[Q] = parseFloat(Re[Q]) + F + He),
                (Re[1] = parseFloat(Re[1]) + F + He),
                ar(Re);
            }
          }),
          (M.disable = function (F, Q) {
            if (
              M.enabled &&
              (F !== !1 && M.revert(!0, !0),
              (M.enabled = M.isActive = !1),
              Q || (ae && ae.pause()),
              (en = 0),
              Se && (Se.uncache = 1),
              q && Ge(t, "refreshInit", q),
              Jt && (Jt.pause(), he.tween && he.tween.kill() && (he.tween = 0)),
              !O)
            ) {
              for (var j = ie.length; j--; )
                if (ie[j].scroller === x && ie[j] !== M) return;
              Ge(x, "resize", Dr), O || Ge(x, "scroll", Wi);
            }
          }),
          (M.kill = function (F, Q) {
            M.disable(F, Q), ae && !Q && ae.kill(), l && delete Mo[l];
            var j = ie.indexOf(M);
            j >= 0 && ie.splice(j, 1),
              j === mt && Hs > 0 && mt--,
              (j = 0),
              ie.forEach(function (J) {
                return J.scroller === M.scroller && (j = 1);
              }),
              j || gt || (M.scroll.rec = 0),
              r &&
                ((r.scrollTrigger = null),
                F && r.revert({ kill: !1 }),
                Q || r.kill()),
              $e &&
                [$e, Ae, D, Oe].forEach(function (J) {
                  return J.parentNode && J.parentNode.removeChild(J);
                }),
              Kr === M && (Kr = 0),
              h &&
                (Se && (Se.uncache = 1),
                (j = 0),
                ie.forEach(function (J) {
                  return J.pin === h && j++;
                }),
                j || (Se.spacer = 0)),
              i.onKill && i.onKill(M);
          }),
          ie.push(M),
          M.enable(!1, !1),
          xn && xn(M),
          r && r.add && !H)
        ) {
          var ce = M.update;
          (M.update = function () {
            (M.update = ce), se.cache++, W || te || M.refresh();
          }),
            V.delayedCall(0.01, M.update),
            (H = 0.01),
            (W = te = 0);
        } else M.refresh();
        h && Ig();
      }),
      (t.register = function (i) {
        return (
          Gi ||
            ((V = i || _d()), yd() && window.document && t.enable(), (Gi = Lr)),
          Gi
        );
      }),
      (t.defaults = function (i) {
        if (i) for (var r in i) Cs[r] = i[r];
        return Cs;
      }),
      (t.disable = function (i, r) {
        (Lr = 0),
          ie.forEach(function (a) {
            return a[r ? "kill" : "disable"](i);
          }),
          Ge(re, "wheel", Wi),
          Ge(ve, "scroll", Wi),
          clearInterval(xs),
          Ge(ve, "touchcancel", un),
          Ge(fe, "touchstart", un),
          Es(Ge, ve, "pointerdown,touchstart,mousedown", uc),
          Es(Ge, ve, "pointerup,touchend,mouseup", dc),
          aa.kill(),
          Ts(Ge);
        for (var s = 0; s < se.length; s += 3)
          ws(Ge, se[s], se[s + 1]), ws(Ge, se[s], se[s + 2]);
      }),
      (t.enable = function () {
        if (
          ((re = window),
          (ve = document),
          (Ot = ve.documentElement),
          (fe = ve.body),
          V &&
            ((cs = V.utils.toArray),
            (Yr = V.utils.clamp),
            (Po = V.core.context || un),
            (Va = V.core.suppressOverwrites || un),
            (ul = re.history.scrollRestoration || "auto"),
            ($o = re.pageYOffset || 0),
            V.core.globals("ScrollTrigger", t),
            fe))
        ) {
          (Lr = 1),
            (sr = document.createElement("div")),
            (sr.style.height = "100vh"),
            (sr.style.position = "absolute"),
            kd(),
            Pg(),
            De.register(V),
            (t.isTouch = De.isTouch),
            (Bn =
              De.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Co = De.isTouch === 1),
            je(re, "wheel", Wi),
            (cl = [re, ve, Ot, fe]),
            V.matchMedia
              ? ((t.matchMedia = function (c) {
                  var u = V.matchMedia(),
                    d;
                  for (d in c) u.add(d, c[d]);
                  return u;
                }),
                V.addEventListener("matchMediaInit", function () {
                  return gl();
                }),
                V.addEventListener("matchMediaRevert", function () {
                  return Cd();
                }),
                V.addEventListener("matchMedia", function () {
                  _i(0, 1), Li("matchMedia");
                }),
                V.matchMedia().add("(orientation: portrait)", function () {
                  return Ya(), Ya;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Ya(),
            je(ve, "scroll", Wi);
          var i = fe.hasAttribute("style"),
            r = fe.style,
            s = r.borderTopStyle,
            a = V.core.Animation.prototype,
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
              o = wn(fe),
              We.m = Math.round(o.top + We.sc()) || 0,
              _t.m = Math.round(o.left + _t.sc()) || 0,
              s ? (r.borderTopStyle = s) : r.removeProperty("border-top-style"),
              i || (fe.setAttribute("style", ""), fe.removeAttribute("style")),
              xs = setInterval(pc, 250),
              V.delayedCall(0.5, function () {
                return (Ss = 0);
              }),
              je(ve, "touchcancel", un),
              je(fe, "touchstart", un),
              Es(je, ve, "pointerdown,touchstart,mousedown", uc),
              Es(je, ve, "pointerup,touchend,mouseup", dc),
              wo = V.utils.checkPrefix("transform"),
              Ws.push(wo),
              Gi = rt(),
              aa = V.delayedCall(0.2, _i).pause(),
              ji = [
                ve,
                "visibilitychange",
                function () {
                  var c = re.innerWidth,
                    u = re.innerHeight;
                  ve.hidden
                    ? ((ac = c), (oc = u))
                    : (ac !== c || oc !== u) && Dr();
                },
                ve,
                "DOMContentLoaded",
                _i,
                re,
                "load",
                _i,
                re,
                "resize",
                Dr,
              ],
              Ts(je),
              ie.forEach(function (c) {
                return c.enable(0, 1);
              }),
              l = 0;
            l < se.length;
            l += 3
          )
            ws(Ge, se[l], se[l + 1]), ws(Ge, se[l], se[l + 2]);
        }
      }),
      (t.config = function (i) {
        "limitCallbacks" in i && (qa = !!i.limitCallbacks);
        var r = i.syncInterval;
        (r && clearInterval(xs)) || ((xs = r) && setInterval(pc, r)),
          "ignoreMobileResize" in i &&
            (Co = t.isTouch === 1 && i.ignoreMobileResize),
          "autoRefreshEvents" in i &&
            (Ts(Ge) || Ts(je, i.autoRefreshEvents || "none"),
            (md = (i.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (t.scrollerProxy = function (i, r) {
        var s = xt(i),
          a = se.indexOf(s),
          o = Ai(s);
        ~a && se.splice(a, o ? 6 : 2),
          r && (o ? gn.unshift(re, r, fe, r, Ot, r) : gn.unshift(s, r));
      }),
      (t.clearMatchMedia = function (i) {
        ie.forEach(function (r) {
          return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
        });
      }),
      (t.isInViewport = function (i, r, s) {
        var a = (Mt(i) ? xt(i) : i).getBoundingClientRect(),
          o = a[s ? Ei : wi] * r || 0;
        return s
          ? a.right - o > 0 && a.left + o < re.innerWidth
          : a.bottom - o > 0 && a.top + o < re.innerHeight;
      }),
      (t.positionInViewport = function (i, r, s) {
        Mt(i) && (i = xt(i));
        var a = i.getBoundingClientRect(),
          o = a[s ? Ei : wi],
          l =
            r == null
              ? o / 2
              : r in ca
              ? ca[r] * o
              : ~r.indexOf("%")
              ? (parseFloat(r) * o) / 100
              : parseFloat(r) || 0;
        return s ? (a.left + l) / re.innerWidth : (a.top + l) / re.innerHeight;
      }),
      (t.killAll = function (i) {
        if (
          (ie.slice(0).forEach(function (s) {
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
G.version = "3.13.0";
G.saveStyles = function (t) {
  return t
    ? cs(t).forEach(function (e) {
        if (e && e.style) {
          var n = kt.indexOf(e);
          n >= 0 && kt.splice(n, 5),
            kt.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              V.core.getCache(e),
              Po()
            );
        }
      })
    : kt;
};
G.revert = function (t, e) {
  return gl(!t, e);
};
G.create = function (t, e) {
  return new G(t, e);
};
G.refresh = function (t) {
  return t ? Dr(!0) : (Gi || G.register()) && _i(!0);
};
G.update = function (t) {
  return ++se.cache && An(t === !0 ? 2 : 0);
};
G.clearScrollMemory = Pd;
G.maxScroll = function (t, e) {
  return hn(t, e ? _t : We);
};
G.getScrollFunc = function (t, e) {
  return ei(xt(t), e ? _t : We);
};
G.getById = function (t) {
  return Mo[t];
};
G.getAll = function () {
  return ie.filter(function (t) {
    return t.vars.id !== "ScrollSmoother";
  });
};
G.isScrolling = function () {
  return !!Ut;
};
G.snapDirectional = ml;
G.addEventListener = function (t, e) {
  var n = Oi[t] || (Oi[t] = []);
  ~n.indexOf(e) || n.push(e);
};
G.removeEventListener = function (t, e) {
  var n = Oi[t],
    i = n && n.indexOf(e);
  i >= 0 && n.splice(i, 1);
};
G.batch = function (t, e) {
  var n = [],
    i = {},
    r = e.interval || 0.016,
    s = e.batchMax || 1e9,
    a = function (c, u) {
      var d = [],
        f = [],
        h = V.delayedCall(r, function () {
          u(d, f), (d = []), (f = []);
        }).pause();
      return function (m) {
        d.length || h.restart(!0),
          d.push(m.trigger),
          f.push(m),
          s <= d.length && h.progress(1);
      };
    },
    o;
  for (o in e)
    i[o] =
      o.substr(0, 2) === "on" && ot(e[o]) && o !== "onRefreshInit"
        ? a(o, e[o])
        : e[o];
  return (
    ot(s) &&
      ((s = s()),
      je(G, "refresh", function () {
        return (s = e.batchMax());
      })),
    cs(t).forEach(function (l) {
      var c = {};
      for (o in i) c[o] = i[o];
      (c.trigger = l), n.push(G.create(c));
    }),
    n
  );
};
var bc = function (e, n, i, r) {
    return (
      n > r ? e(r) : n < 0 && e(0),
      i > r ? (r - n) / (i - n) : i < 0 ? n / (n - i) : 1
    );
  },
  Ga = function t(e, n) {
    n === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          n === !0
            ? "auto"
            : n
            ? "pan-" + n + (De.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === Ot && t(fe, n);
  },
  $s = { auto: 1, scroll: 1 },
  Bg = function (e) {
    var n = e.event,
      i = e.target,
      r = e.axis,
      s = (n.changedTouches ? n.changedTouches[0] : n).target,
      a = s._gsap || V.core.getCache(s),
      o = rt(),
      l;
    if (!a._isScrollT || o - a._isScrollT > 2e3) {
      for (
        ;
        s &&
        s !== fe &&
        ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
          !($s[(l = Xt(s)).overflowY] || $s[l.overflowX]));

      )
        s = s.parentNode;
      (a._isScroll =
        s &&
        s !== i &&
        !Ai(s) &&
        ($s[(l = Xt(s)).overflowY] || $s[l.overflowX])),
        (a._isScrollT = o);
    }
    (a._isScroll || r === "x") && (n.stopPropagation(), (n._gsapAllow = !0));
  },
  $d = function (e, n, i, r) {
    return De.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: n,
      onWheel: (r = r && Bg),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return i && je(ve, De.eventTypes[0], Sc, !1, !0);
      },
      onDisable: function () {
        return Ge(ve, De.eventTypes[0], Sc, !0);
      },
    });
  },
  Fg = /(input|label|select|textarea)/i,
  xc,
  Sc = function (e) {
    var n = Fg.test(e.target.tagName);
    (n || xc) && ((e._gsapAllow = !0), (xc = n));
  },
  Vg = function (e) {
    gi(e) || (e = {}),
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
      c = xt(e.target) || Ot,
      u = V.core.globals().ScrollSmoother,
      d = u && u.get(),
      f =
        Bn &&
        ((e.content && xt(e.content)) ||
          (d && e.content !== !1 && !d.smooth() && d.content())),
      h = ei(c, We),
      m = ei(c, _t),
      p = 1,
      g =
        (De.isTouch && re.visualViewport
          ? re.visualViewport.scale * re.visualViewport.width
          : re.outerWidth) / re.innerWidth,
      _ = 0,
      v = ot(r)
        ? function () {
            return r(o);
          }
        : function () {
            return r || 2.8;
          },
      y,
      b,
      S = $d(c, e.type, !0, s),
      E = function () {
        return (b = !1);
      },
      w = un,
      C = un,
      A = function () {
        (l = hn(c, We)),
          (C = Yr(Bn ? 1 : 0, l)),
          i && (w = Yr(0, hn(c, _t))),
          (y = Ci);
      },
      P = function () {
        (f._gsap.y = Ir(parseFloat(f._gsap.y) + h.offset) + "px"),
          (f.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(f._gsap.y) +
            ", 0, 1)"),
          (h.offset = h.cacheID = 0);
      },
      $ = function () {
        if (b) {
          requestAnimationFrame(E);
          var z = Ir(o.deltaY / 2),
            B = C(h.v - z);
          if (f && B !== h.v + h.offset) {
            h.offset = B - h.v;
            var M = Ir((parseFloat(f && f._gsap.y) || 0) - h.offset);
            (f.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              M +
              ", 0, 1)"),
              (f._gsap.y = M + "px"),
              (h.cacheID = se.cache),
              An();
          }
          return !0;
        }
        h.offset && P(), (b = !0);
      },
      x,
      T,
      O,
      L,
      k = function () {
        A(),
          x.isActive() &&
            x.vars.scrollY > l &&
            (h() > l ? x.progress(1) && h(l) : x.resetTo("scrollY", l));
      };
    return (
      f && V.set(f, { y: "+=0" }),
      (e.ignoreCheck = function (I) {
        return (
          (Bn && I.type === "touchmove" && $()) ||
          (p > 1.05 && I.type !== "touchstart") ||
          o.isGesturing ||
          (I.touches && I.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        b = !1;
        var I = p;
        (p = Ir(((re.visualViewport && re.visualViewport.scale) || 1) / g)),
          x.pause(),
          I !== p && Ga(c, p > 1.01 ? !0 : i ? !1 : "x"),
          (T = m()),
          (O = h()),
          A(),
          (y = Ci);
      }),
      (e.onRelease = e.onGestureStart =
        function (I, z) {
          if ((h.offset && P(), !z)) L.restart(!0);
          else {
            se.cache++;
            var B = v(),
              M,
              q;
            i &&
              ((M = m()),
              (q = M + (B * 0.05 * -I.velocityX) / 0.227),
              (B *= bc(m, M, q, hn(c, _t))),
              (x.vars.scrollX = w(q))),
              (M = h()),
              (q = M + (B * 0.05 * -I.velocityY) / 0.227),
              (B *= bc(h, M, q, hn(c, We))),
              (x.vars.scrollY = C(q)),
              x.invalidate().duration(B).play(0.01),
              ((Bn && x.vars.scrollY >= l) || M >= l - 1) &&
                V.to({}, { onUpdate: k, duration: B });
          }
          a && a(I);
        }),
      (e.onWheel = function () {
        x._ts && x.pause(), rt() - _ > 1e3 && ((y = 0), (_ = rt()));
      }),
      (e.onChange = function (I, z, B, M, q) {
        if (
          (Ci !== y && A(),
          z && i && m(w(M[2] === z ? T + (I.startX - I.x) : m() + z - M[1])),
          B)
        ) {
          h.offset && P();
          var X = q[2] === B,
            oe = X ? O + I.startY - I.y : h() + B - q[1],
            ne = C(oe);
          X && oe !== ne && (O += ne - oe), h(ne);
        }
        (B || z) && An();
      }),
      (e.onEnable = function () {
        Ga(c, i ? !1 : "x"),
          G.addEventListener("refresh", k),
          je(re, "resize", k),
          h.smooth &&
            ((h.target.style.scrollBehavior = "auto"),
            (h.smooth = m.smooth = !1)),
          S.enable();
      }),
      (e.onDisable = function () {
        Ga(c, !0),
          Ge(re, "resize", k),
          G.removeEventListener("refresh", k),
          S.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (o = new De(e)),
      (o.iOS = Bn),
      Bn && !h() && h(1),
      Bn && V.ticker.add(un),
      (L = o._dc),
      (x = V.to(o, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Md(h, h(), function () {
            return x.pause();
          }),
        },
        onUpdate: An,
        onComplete: L.vars.onComplete,
      })),
      o
    );
  };
G.sort = function (t) {
  if (ot(t)) return ie.sort(t);
  var e = re.pageYOffset || 0;
  return (
    G.getAll().forEach(function (n) {
      return (n._sortY = n.trigger
        ? e + n.trigger.getBoundingClientRect().top
        : n.start + re.innerHeight);
    }),
    ie.sort(
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
};
G.observe = function (t) {
  return new De(t);
};
G.normalizeScroll = function (t) {
  if (typeof t > "u") return pt;
  if (t === !0 && pt) return pt.enable();
  if (t === !1) {
    pt && pt.kill(), (pt = t);
    return;
  }
  var e = t instanceof De ? t : Vg(t);
  return pt && pt.target === e.target && pt.kill(), Ai(e.target) && (pt = e), e;
};
G.core = {
  _getVelocityProp: Eo,
  _inputObserver: $d,
  _scrollers: se,
  _proxies: gn,
  bridge: {
    ss: function () {
      Ut || Li("scrollStart"), (Ut = rt());
    },
    ref: function () {
      return it;
    },
  },
};
_d() && V.registerPlugin(G);
/*!
 * SplitText 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */ let Pr,
  Yi,
  Oo,
  qg = () => Oo || xe.register(window.gsap),
  Tc = typeof Intl < "u" ? new Intl.Segmenter() : 0,
  ua = (t) =>
    typeof t == "string"
      ? ua(document.querySelectorAll(t))
      : "length" in t
      ? Array.from(t)
      : [t],
  Ec = (t) => ua(t).filter((e) => e instanceof HTMLElement),
  Lo = [],
  ja = function () {},
  Hg = /\s+/g,
  wc = new RegExp(
    "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
    "gu"
  ),
  Cc = { left: 0, top: 0, width: 0, height: 0 },
  Pc = (t, e) => {
    if (e) {
      let n = new Set(t.join("").match(e) || Lo),
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
  kc = (t) =>
    window.getComputedStyle(t).display === "inline" &&
    (t.style.display = "inline-block"),
  Xi = (t, e, n) =>
    e.insertBefore(typeof t == "string" ? document.createTextNode(t) : t, n),
  Io = (t, e, n) => {
    let i = e[t + "sClass"] || "",
      { tag: r = "div", aria: s = "auto", propIndex: a = !1 } = e,
      o = t === "line" ? "block" : "inline-block",
      l = i.indexOf("++") > -1,
      c = (u) => {
        let d = document.createElement(r),
          f = n.length + 1;
        return (
          i && (d.className = i + (l ? " " + i + f : "")),
          a && d.style.setProperty("--" + t, f + ""),
          s !== "none" && d.setAttribute("aria-hidden", "true"),
          r !== "span" &&
            ((d.style.position = "relative"), (d.style.display = o)),
          (d.textContent = u),
          n.push(d),
          d
        );
      };
    return l && (i = i.replace("++", "")), (c.collection = n), c;
  },
  Wg = (t, e, n, i) => {
    let r = Io("line", n, i),
      s = window.getComputedStyle(t).textAlign || "left";
    return (a, o) => {
      let l = r("");
      for (l.style.textAlign = s, t.insertBefore(l, e[a]); a < o; a++)
        l.appendChild(e[a]);
      l.normalize();
    };
  },
  Ad = (t, e, n, i, r, s, a, o, l, c) => {
    var u;
    let d = Array.from(t.childNodes),
      f = 0,
      { wordDelimiter: h, reduceWhiteSpace: m = !0, prepareText: p } = e,
      g = t.getBoundingClientRect(),
      _ = g,
      v = !m && window.getComputedStyle(t).whiteSpace.substring(0, 3) === "pre",
      y = 0,
      b = n.collection,
      S,
      E,
      w,
      C,
      A,
      P,
      $,
      x,
      T,
      O,
      L,
      k,
      I,
      z,
      B,
      M,
      q,
      X;
    for (
      typeof h == "object"
        ? ((w = h.delimiter || h), (E = h.replaceWith || ""))
        : (E = h === "" ? "" : h || " "),
        S = E !== " ";
      f < d.length;
      f++
    )
      if (((C = d[f]), C.nodeType === 3)) {
        for (
          B = C.textContent || "",
            m
              ? (B = B.replace(Hg, " "))
              : v &&
                (B = B.replace(
                  /\n/g,
                  E +
                    `
`
                )),
            p && (B = p(B, t)),
            C.textContent = B,
            A = E || w ? B.split(w || E) : B.match(o) || Lo,
            q = A[A.length - 1],
            x = S ? q.slice(-1) === " " : !q,
            q || A.pop(),
            _ = g,
            $ = S ? A[0].charAt(0) === " " : !A[0],
            $ && Xi(" ", t, C),
            A[0] || A.shift(),
            Pc(A, l),
            (s && c) || (C.textContent = ""),
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
              ((u = C.previousSibling) == null || u.remove(),
              Xi(document.createElement("br"), t, C),
              (M = M.slice(1))),
            !m && M === "")
          )
            Xi(E, t, C);
          else if (M === " ") t.insertBefore(document.createTextNode(" "), C);
          else {
            if (
              (S && M.charAt(0) === " " && Xi(" ", t, C),
              y && T === 1 && !$ && b.indexOf(y.parentNode) > -1
                ? ((P = b[b.length - 1]),
                  P.appendChild(document.createTextNode(i ? "" : M)))
                : ((P = n(i ? "" : M)),
                  Xi(P, t, C),
                  y && T === 1 && !$ && P.insertBefore(y, P.firstChild)),
              i)
            )
              for (
                L = Tc
                  ? Pc(
                      [...Tc.segment(M)].map((oe) => oe.segment),
                      l
                    )
                  : M.match(o) || Lo,
                  X = 0;
                X < L.length;
                X++
              )
                P.appendChild(
                  L[X] === " " ? document.createTextNode(" ") : i(L[X])
                );
            if (s && c) {
              if (
                ((B = C.textContent = B.substring(M.length + 1, B.length)),
                (O = P.getBoundingClientRect()),
                O.top > _.top && O.left <= _.left)
              ) {
                for (k = t.cloneNode(), I = t.childNodes[0]; I && I !== P; )
                  (z = I), (I = I.nextSibling), k.appendChild(z);
                t.parentNode.insertBefore(k, t), r && kc(k);
              }
              _ = O;
            }
            (T < A.length || x) &&
              Xi(
                T >= A.length ? " " : S && M.slice(-1) === " " ? " " + E : E,
                t,
                C
              );
          }
        t.removeChild(C), (y = 0);
      } else
        C.nodeType === 1 &&
          (a && a.indexOf(C) > -1
            ? (b.indexOf(C.previousSibling) > -1 &&
                b[b.length - 1].appendChild(C),
              (y = C))
            : (Ad(C, e, n, i, r, s, a, o, l, !0), (y = 0)),
          r && kc(C));
  };
const Od = class Ld {
  constructor(e, n) {
    (this.isSplit = !1),
      qg(),
      (this.elements = Ec(e)),
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
        typeof ResizeObserver < "u" &&
        new ResizeObserver(() => {
          clearTimeout(r), (r = setTimeout(s, 200));
        }),
    }),
      ja(this),
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
      d = n.indexOf("chars") > -1,
      f = n.indexOf("words") > -1,
      h = d && !f && !u,
      m = l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
      p = m ? new RegExp(m.source + "|" + wc.source, "gu") : wc,
      g = !!e.ignore && Ec(e.ignore),
      { orig: _, animTime: v, obs: y } = this._data,
      b;
    return (
      (d || f || u) &&
        (this.elements.forEach((S, E) => {
          (_[E] = {
            element: S,
            html: S.innerHTML,
            ariaL: S.getAttribute("aria-label"),
            ariaH: S.getAttribute("aria-hidden"),
          }),
            i === "auto"
              ? S.setAttribute("aria-label", (S.textContent || "").trim())
              : i === "hidden" && S.setAttribute("aria-hidden", "true");
          let w = [],
            C = [],
            A = [],
            P = d ? Io("char", e, w) : null,
            $ = Io("word", e, C),
            x,
            T,
            O,
            L;
          if ((Ad(S, e, $, P, h, r && (u || h), g, p, m, !1), u)) {
            let k = ua(S.childNodes),
              I = Wg(S, k, e, A),
              z,
              B = [],
              M = 0,
              q = k.map((oe) =>
                oe.nodeType === 1 ? oe.getBoundingClientRect() : Cc
              ),
              X = Cc;
            for (x = 0; x < k.length; x++)
              (z = k[x]),
                z.nodeType === 1 &&
                  (z.nodeName === "BR"
                    ? (B.push(z), I(M, x + 1), (M = x + 1), (X = q[M]))
                    : (x &&
                        q[x].top > X.top &&
                        q[x].left <= X.left &&
                        (I(M, x), (M = x)),
                      (X = q[x])));
            M < x && I(M, x),
              B.forEach((oe) => {
                var ne;
                return (ne = oe.parentNode) == null
                  ? void 0
                  : ne.removeChild(oe);
              });
          }
          if (!f) {
            for (x = 0; x < C.length; x++)
              if (
                ((T = C[x]),
                d || !T.nextSibling || T.nextSibling.nodeType !== 3)
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
            (C.length = 0), S.normalize();
          }
          this.lines.push(...A), this.words.push(...C), this.chars.push(...w);
        }),
        c &&
          this[c] &&
          this.masks.push(
            ...this[c].map((S) => {
              let E = S.cloneNode();
              return (
                S.replaceWith(E),
                E.appendChild(S),
                S.className &&
                  (E.className = S.className.replace(/(\b\w+\b)/g, "$1-mask")),
                (E.style.overflow = "clip"),
                E
              );
            })
          )),
      (this.isSplit = !0),
      Yi &&
        (o
          ? Yi.addEventListener("loadingdone", this._split)
          : Yi.status === "loading" &&
            console.warn("SplitText called before fonts loaded")),
      (b = a && a(this)) &&
        b.totalTime &&
        (this._data.anim = v ? b.totalTime(v) : b),
      u &&
        o &&
        this.elements.forEach((S, E) => {
          (_[E].width = S.offsetWidth), y && y.observe(S);
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
          l ? a.setAttribute("aria-label", l) : a.removeAttribute("aria-label"),
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
      Yi?.removeEventListener("loadingdone", this._split),
      r && ((this._data.animTime = r.totalTime()), r.revert()),
      (n = (e = this.vars).onRevert) == null || n.call(e, this),
      this
    );
  }
  static create(e, n) {
    return new Ld(e, n);
  }
  static register(e) {
    (Pr = Pr || e || window.gsap),
      Pr && ((ua = Pr.utils.toArray), (ja = Pr.core.context || ja)),
      !Oo && window.innerWidth > 0 && ((Yi = document.fonts), (Oo = !0));
  }
};
Od.version = "3.13.0";
let xe = Od;
R.registerPlugin(G, xe);
const Yg = async () => {
    await document.fonts.ready,
      document.querySelectorAll("[split-text]").forEach((e) => {
        e.hasAttribute("data-split-initialized") ||
          (e.setAttribute("data-split-initialized", "true"),
          xe.create(e, {
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
                    toggleActions: "play none none none",
                    once: !0,
                  },
                });
            },
          }));
      });
  },
  ni = () => {
    Yg();
  };
R.registerPlugin(G);
const ii = () => {
  const t =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
  let e = [],
    n;
  const i = () => {
      e.forEach((o) => {
        o && typeof o.kill == "function" && o.kill();
      }),
        (e = []),
        G.getAll().forEach((o) => o.kill());
    },
    r = (o) => {
      const l = o.getAttribute("motion");
      if (l !== "fade" && l !== "move-up") return;
      const c = parseFloat(o.getAttribute("motion-duration") || "1.4"),
        u = parseFloat(o.getAttribute("motion-delay") || "0"),
        d = o.getAttribute("motion-ease") || "power2.out",
        f = o.getAttribute("motion-start") || "top 80%";
      let h;
      l === "fade"
        ? (R.set(o, { opacity: 0 }),
          (h = R.to(o, {
            opacity: 1,
            duration: c,
            delay: u,
            ease: d,
            scrollTrigger: {
              trigger: o,
              start: f,
              toggleActions: "play none none reverse",
            },
          })))
        : l === "move-up" &&
          (R.set(o, { opacity: 0, y: 50 }),
          (h = R.to(o, {
            opacity: 1,
            y: 0,
            duration: c,
            delay: u,
            ease: d,
            scrollTrigger: {
              trigger: o,
              start: f,
              toggleActions: "play none none reverse",
            },
          }))),
        h && e.push(h);
    },
    s = () => {
      document.querySelectorAll("[motion]").forEach((l) => r(l));
    },
    a = () => {
      t ||
        (clearTimeout(n),
        (n = setTimeout(() => {
          i(),
            setTimeout(() => {
              s(), G.refresh();
            }, 100);
        }, 250)));
    };
  s(), t || window.addEventListener("resize", a);
};
R.registerPlugin(xe);
const Xg = (t) => {
  const e = document.querySelectorAll("[page-load='component']"),
    n = document.querySelectorAll("[page-load='wrap']"),
    i = document.querySelectorAll("[page-load='gradient']"),
    r = document.querySelectorAll("[page-load='text']"),
    s = document.querySelectorAll(".page_cover"),
    a = localStorage.getItem("pageLoadPlayed") !== "true",
    o = sessionStorage.getItem("sessionPageLoadPlayed") !== "true";
  a && localStorage.setItem("pageLoadPlayed", "true"),
    o && sessionStorage.setItem("sessionPageLoadPlayed", "true");
  const l = a || o,
    c = R.timeline();
  R.set(i, { opacity: 0 }), R.set(n, { opacity: 0 });
  let u = [],
    d = [];
  return (
    l
      ? (r.forEach((f) => {
          const h = xe.create(f, {
            type: "lines",
            mask: "lines",
            linesClass: "pg-load-text-line",
            onSplit: function (m) {
              return (
                R.set(m.lines, {
                  opacity: 0,
                  yPercent: 100,
                  willChange: "transform, opacity",
                }),
                m
              );
            },
          });
          u.push(h);
        }),
        (d = u.flatMap((f) => f.lines)))
      : R.set(r, { opacity: 0 }),
    c.to(i, {
      opacity: l ? 1 : 0,
      duration: l ? (a ? 2 : 1.6) : 0.6,
      ease: "power1.out",
    }),
    c.to(n, { opacity: 1, duration: l ? 1 : 0.8, ease: "power2.inOut" }, "<"),
    c.to(
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
      (c.to(r, { opacity: 1, duration: 1, ease: "power2.inOut" }),
      c.to(
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
      c.to(d, {
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
        duration: l ? 1.6 : 1.2,
        ease: "expo.inOut",
        onComplete: () => {
          R.set(e, { pointerEvents: "none" }),
            l && u.forEach((f) => f.revert());
        },
      },
      l ? (a ? "-=0.7" : "-=0.5") : "-=0.2"
    ),
    c
  );
};
R.registerPlugin(xe);
const Gg = (t) => {
    const e = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
      window.innerWidth <= 768;
    let n, i, r;
    const s = () => {
        n && typeof n.revert == "function" && (n.revert(), (n = null)),
          i && (i.kill(), (i = null)),
          document.querySelectorAll(".move-text").forEach((c) => {
            c.parentNode &&
              (c.parentNode.insertBefore(c.firstChild, c), c.remove());
          });
      },
      a = () => {
        const l = document.querySelector("[home-hero='text']"),
          c = document.querySelector("[home-hero='btn']"),
          u = document.querySelector("[home-hero='visual']");
        l &&
          (n = xe.create(l, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "home-hero-text-line",
            tag: "span",
            onSplit(d) {
              d.lines.forEach((h) => {
                const m = document.createElement("div");
                m.classList.add("move-text"),
                  h.parentNode.insertBefore(m, h),
                  m.appendChild(h);
              });
              const f = l.querySelectorAll("span");
              return (
                f.length &&
                  f.forEach((h) => {
                    const m = document.createElement("div");
                    (m.style.overflow = "clip"),
                      (m.style.paddingBottom = "3px"),
                      h.parentNode.insertBefore(m, h),
                      m.appendChild(h);
                  }),
                (i = R.timeline()),
                R.set(".move-text", { opacity: 0, yPercent: 100 }),
                R.set(c, { opacity: 0 }),
                R.set(u, { opacity: 0 }),
                i.to(".move-text", {
                  opacity: 1,
                  duration: 1.8,
                  stagger: 0.08,
                  ease: "expo.inOut",
                  yPercent: 0,
                }),
                i.to(c, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
                i.to(
                  u,
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
      o = () => {
        e() ||
          (clearTimeout(r),
          (r = setTimeout(() => {
            s(),
              setTimeout(() => {
                a();
              }, 100);
          }, 250)));
      };
    a(), e() || window.addEventListener("resize", o);
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
  jg = () => {
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
          R.to(e, { x: 0, y: 0, duration: 1.6, ease: "elastic.out(1.5, 0.5)" });
      }),
      window.addEventListener("mousemove", (a) => {
        if (n) {
          const o = a.clientX + 10,
            l = a.clientY + 10,
            c = e.parentElement.getBoundingClientRect(),
            u = o - c.left,
            d = l - c.top;
          R.to(e, {
            x: u - r + 50,
            y: d - s - 30,
            duration: 1.4,
            ease: "elastic.out(2, 0.75)",
          });
        }
      });
  },
  Ug = () => {
    jg();
  },
  Mc = () => {
    console.log("homeInit"), Af(), ou(), ni(), ii(), Ug();
    const t = Xg();
    t.add(() => ri(), "-=0.8"), t.add(() => Gg(), "-=1");
  },
  Id = () => {
    const t = document.querySelector(".swiper[review-slider='component']");
    t &&
      new vt(t, {
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
R.registerPlugin(G);
const Kg = () => {
    const t =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
    let e, n;
    const i = () => {
        e && (e.kill(), (e = null)), G.getAll().forEach((a) => a.kill());
      },
      r = () => {
        const a = document.querySelector("[impact-slide='main']"),
          o = a?.querySelectorAll("[impact-slide='component']");
        !a ||
          !o.length ||
          (o.forEach((l, c) => {
            R.set(l, {
              clipPath: c === 0 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
            });
          }),
          (e = R.timeline({
            scrollTrigger: {
              trigger: a,
              start: "top top",
              end: `+=${o.length * 100}%`,
              scrub: !0,
              pin: !1,
              markers: !1,
            },
          })),
          o.forEach((l, c) => {
            c !== 0 &&
              e.to(
                l,
                { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.inOut" },
                "+=0.33"
              );
          }));
      },
      s = () => {
        t ||
          (clearTimeout(n),
          (n = setTimeout(() => {
            i(),
              setTimeout(() => {
                r(), G.refresh();
              }, 100);
          }, 250)));
      };
    r(), t || window.addEventListener("resize", s);
  },
  Zg = () => {
    document.querySelectorAll("[image-index='wrap']").forEach((t) => {
      const e = t.querySelector("[image-index='large']"),
        n = t.querySelector("[image-index='small']"),
        i = (l, c) => {
          const u = [];
          let d = l;
          for (; d && d !== c; )
            (d = d.parentElement), d && d !== c && u.push(d);
          return u;
        },
        r = i(e, t),
        s = i(n, t),
        a = (l, c, u) => {
          (l.style.zIndex = u),
            c.forEach((d) => {
              d.style.zIndex = u;
            });
        };
      a(e, r, "2"), a(n, s, "1");
      const o = (l, c, u, d) => {
        a(l, u, "2"), a(c, d, "1");
      };
      e.addEventListener("click", () => o(e, n, r, s)),
        n.addEventListener("click", () => o(n, e, s, r));
    });
  },
  vl = () => {
    Zg();
  },
  Qg = () => {
    const t = document.querySelector(".swiper[about-slider='component']");
    t &&
      new vt(t, {
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
              (document.querySelector("[data-slider-current]").textContent = n);
          },
          slideChange: function () {
            const e = this.realIndex + 1;
            document.querySelector("[data-slider-current]").textContent = e;
          },
        },
      });
  },
  Ri = (t) => {
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
R.registerPlugin(xe);
const Jg = (t) => {
    const e = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
      window.innerWidth <= 768;
    let n, i, r;
    const s = () => {
        n && typeof n.revert == "function" && (n.revert(), (n = null)),
          i && (i.kill(), (i = null)),
          document.querySelectorAll(".move-text").forEach((c) => {
            c.parentNode &&
              (c.parentNode.insertBefore(c.firstChild, c), c.remove());
          });
      },
      a = () => {
        const l = document.querySelector("[about-hero='text']"),
          c = document.querySelectorAll("[about-hero='visual']");
        l &&
          (n = xe.create(l, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "about-hero-text-line",
            tag: "span",
            onSplit(u) {
              u.lines.forEach((f) => {
                const h = document.createElement("div");
                h.classList.add("move-text"),
                  f.parentNode.insertBefore(h, f),
                  h.appendChild(f);
              });
              const d = l.querySelectorAll("span");
              return (
                d.length &&
                  d.forEach((f) => {
                    const h = document.createElement("div");
                    (h.style.overflow = "clip"),
                      (h.style.paddingBottom = "3px"),
                      f.parentNode.insertBefore(h, f),
                      h.appendChild(f);
                  }),
                (i = R.timeline()),
                R.set(".move-text", { opacity: 0, yPercent: 100 }),
                R.set(c, { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }),
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
      },
      o = () => {
        e() ||
          (clearTimeout(r),
          (r = setTimeout(() => {
            s(),
              setTimeout(() => {
                a();
              }, 100);
          }, 250)));
      };
    a(), e() || window.addEventListener("resize", o);
  },
  e0 = () => {
    Qg(), Id(), Kg(), vl(), ni(), ii();
    const t = Ri();
    t.add(() => ri(), "-=1"), t.add(() => Jg(), "-=1");
  };
var t0 = "1.3.1";
function zd(t, e, n) {
  return Math.max(t, Math.min(e, n));
}
function n0(t, e, n) {
  return (1 - n) * t + n * e;
}
function i0(t, e, n, i) {
  return n0(t, e, 1 - Math.exp(-n * i));
}
function r0(t, e) {
  return ((t % e) + e) % e;
}
var s0 = class {
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
  advance(t) {
    if (!this.isRunning) return;
    let e = !1;
    if (this.duration && this.easing) {
      this.currentTime += t;
      const n = zd(0, this.currentTime / this.duration, 1);
      e = n >= 1;
      const i = e ? 1 : this.easing(n);
      this.value = this.from + (this.to - this.from) * i;
    } else
      this.lerp
        ? ((this.value = i0(this.value, this.to, this.lerp * 60, t)),
          Math.round(this.value) === this.to &&
            ((this.value = this.to), (e = !0)))
        : ((this.value = this.to), (e = !0));
    e && this.stop(), this.onUpdate?.(this.value, e);
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
      s?.(),
      (this.onUpdate = a);
  }
};
function a0(t, e) {
  let n;
  return function (...i) {
    let r = this;
    clearTimeout(n),
      (n = setTimeout(() => {
        (n = void 0), t.apply(r, i);
      }, e));
  };
}
var o0 = class {
    constructor(t, e, { autoResize: n = !0, debounce: i = 250 } = {}) {
      Y(this, "width", 0);
      Y(this, "height", 0);
      Y(this, "scrollHeight", 0);
      Y(this, "scrollWidth", 0);
      Y(this, "debouncedResize");
      Y(this, "wrapperResizeObserver");
      Y(this, "contentResizeObserver");
      Y(this, "resize", () => {
        this.onWrapperResize(), this.onContentResize();
      });
      Y(this, "onWrapperResize", () => {
        this.wrapper instanceof Window
          ? ((this.width = window.innerWidth),
            (this.height = window.innerHeight))
          : ((this.width = this.wrapper.clientWidth),
            (this.height = this.wrapper.clientHeight));
      });
      Y(this, "onContentResize", () => {
        this.wrapper instanceof Window
          ? ((this.scrollHeight = this.content.scrollHeight),
            (this.scrollWidth = this.content.scrollWidth))
          : ((this.scrollHeight = this.wrapper.scrollHeight),
            (this.scrollWidth = this.wrapper.scrollWidth));
      });
      (this.wrapper = t),
        (this.content = e),
        n &&
          ((this.debouncedResize = a0(this.resize, i)),
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
  Dd = class {
    constructor() {
      Y(this, "events", {});
    }
    emit(t, ...e) {
      let n = this.events[t] || [];
      for (let i = 0, r = n.length; i < r; i++) n[i]?.(...e);
    }
    on(t, e) {
      return (
        this.events[t]?.push(e) || (this.events[t] = [e]),
        () => {
          this.events[t] = this.events[t]?.filter((n) => e !== n);
        }
      );
    }
    off(t, e) {
      this.events[t] = this.events[t]?.filter((n) => e !== n);
    }
    destroy() {
      this.events = {};
    }
  },
  $c = 100 / 6,
  Nn = { passive: !1 },
  l0 = class {
    constructor(t, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
      Y(this, "touchStart", { x: 0, y: 0 });
      Y(this, "lastDelta", { x: 0, y: 0 });
      Y(this, "window", { width: 0, height: 0 });
      Y(this, "emitter", new Dd());
      Y(this, "onTouchStart", (t) => {
        const { clientX: e, clientY: n } = t.targetTouches
          ? t.targetTouches[0]
          : t;
        (this.touchStart.x = e),
          (this.touchStart.y = n),
          (this.lastDelta = { x: 0, y: 0 }),
          this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t });
      });
      Y(this, "onTouchMove", (t) => {
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
      Y(this, "onTouchEnd", (t) => {
        this.emitter.emit("scroll", {
          deltaX: this.lastDelta.x,
          deltaY: this.lastDelta.y,
          event: t,
        });
      });
      Y(this, "onWheel", (t) => {
        let { deltaX: e, deltaY: n, deltaMode: i } = t;
        const r = i === 1 ? $c : i === 2 ? this.window.width : 1,
          s = i === 1 ? $c : i === 2 ? this.window.height : 1;
        (e *= r),
          (n *= s),
          (e *= this.options.wheelMultiplier),
          (n *= this.options.wheelMultiplier),
          this.emitter.emit("scroll", { deltaX: e, deltaY: n, event: t });
      });
      Y(this, "onWindowResize", () => {
        this.window = { width: window.innerWidth, height: window.innerHeight };
      });
      (this.element = t),
        (this.options = e),
        window.addEventListener("resize", this.onWindowResize, !1),
        this.onWindowResize(),
        this.element.addEventListener("wheel", this.onWheel, Nn),
        this.element.addEventListener("touchstart", this.onTouchStart, Nn),
        this.element.addEventListener("touchmove", this.onTouchMove, Nn),
        this.element.addEventListener("touchend", this.onTouchEnd, Nn);
    }
    on(t, e) {
      return this.emitter.on(t, e);
    }
    destroy() {
      this.emitter.destroy(),
        window.removeEventListener("resize", this.onWindowResize, !1),
        this.element.removeEventListener("wheel", this.onWheel, Nn),
        this.element.removeEventListener("touchstart", this.onTouchStart, Nn),
        this.element.removeEventListener("touchmove", this.onTouchMove, Nn),
        this.element.removeEventListener("touchend", this.onTouchEnd, Nn);
    }
  },
  c0 = class {
    constructor({
      wrapper: t = window,
      content: e = document.documentElement,
      eventsTarget: n = t,
      smoothWheel: i = !0,
      syncTouch: r = !1,
      syncTouchLerp: s = 0.075,
      touchInertiaMultiplier: a = 35,
      duration: o,
      easing: l = (C) => Math.min(1, 1.001 - Math.pow(2, -10 * C)),
      lerp: c = 0.1,
      infinite: u = !1,
      orientation: d = "vertical",
      gestureOrientation: f = "vertical",
      touchMultiplier: h = 1,
      wheelMultiplier: m = 1,
      autoResize: p = !0,
      prevent: g,
      virtualScroll: _,
      overscroll: v = !0,
      autoRaf: y = !1,
      anchors: b = !1,
      autoToggle: S = !1,
      allowNestedScroll: E = !1,
      __experimental__naiveDimensions: w = !1,
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
      Y(this, "animate", new s0());
      Y(this, "emitter", new Dd());
      Y(this, "dimensions");
      Y(this, "virtualScroll");
      Y(this, "onScrollEnd", (t) => {
        t instanceof CustomEvent ||
          ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
            t.stopPropagation());
      });
      Y(this, "dispatchScrollendEvent", () => {
        this.options.wrapper.dispatchEvent(
          new CustomEvent("scrollend", {
            bubbles: this.options.wrapper === window,
            detail: { lenisScrollEnd: !0 },
          })
        );
      });
      Y(this, "onTransitionEnd", (t) => {
        if (t.propertyName.includes("overflow")) {
          const e = this.isHorizontal ? "overflow-x" : "overflow-y",
            n = getComputedStyle(this.rootElement)[e];
          ["hidden", "clip"].includes(n) ? this.stop() : this.start();
        }
      });
      Y(this, "onClick", (t) => {
        const n = t
          .composedPath()
          .find(
            (i) =>
              i instanceof HTMLAnchorElement &&
              (i.getAttribute("href")?.startsWith("#") ||
                i.getAttribute("href")?.startsWith("/#") ||
                i.getAttribute("href")?.startsWith("./#"))
          );
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
      Y(this, "onPointerDown", (t) => {
        t.button === 1 && this.reset();
      });
      Y(this, "onVirtualScroll", (t) => {
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
          c.find(
            (g) =>
              g instanceof HTMLElement &&
              ((typeof u == "function" && u?.(g)) ||
                g.hasAttribute?.("data-lenis-prevent") ||
                (r && g.hasAttribute?.("data-lenis-prevent-touch")) ||
                (s && g.hasAttribute?.("data-lenis-prevent-wheel")) ||
                (this.options.allowNestedScroll &&
                  this.checkNestedScroll(g, { deltaX: e, deltaY: n })))
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
        let f = n;
        this.options.gestureOrientation === "both"
          ? (f = Math.abs(n) > Math.abs(e) ? n : e)
          : this.options.gestureOrientation === "horizontal" && (f = e),
          (!this.options.overscroll ||
            this.options.infinite ||
            (this.options.wrapper !== window &&
              ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
                (this.animatedScroll === 0 && n > 0) ||
                (this.animatedScroll === this.limit && n < 0)))) &&
            (i.lenisStopPropagation = !0),
          i.preventDefault();
        const h = r && this.options.syncTouch,
          p = r && i.type === "touchend" && Math.abs(f) > 5;
        p && (f = this.velocity * this.options.touchInertiaMultiplier),
          this.scrollTo(this.targetScroll + f, {
            programmatic: !1,
            ...(h
              ? { lerp: p ? this.options.syncTouchLerp : 1 }
              : {
                  lerp: this.options.lerp,
                  duration: this.options.duration,
                  easing: this.options.easing,
                }),
          });
      });
      Y(this, "onNativeScroll", () => {
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
      Y(this, "raf", (t) => {
        const e = t - (this.time || t);
        (this.time = t),
          this.animate.advance(e * 0.001),
          this.options.autoRaf &&
            (this.__rafID = requestAnimationFrame(this.raf));
      });
      (window.lenisVersion = t0),
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
          gestureOrientation: f,
          orientation: d,
          touchMultiplier: h,
          wheelMultiplier: m,
          autoResize: p,
          prevent: g,
          virtualScroll: _,
          overscroll: v,
          autoRaf: y,
          anchors: b,
          autoToggle: S,
          allowNestedScroll: E,
          __experimental__naiveDimensions: w,
        }),
        (this.dimensions = new o0(t, e, { autoResize: p })),
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
        (this.virtualScroll = new l0(n, {
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
        userData: d,
      } = {}
    ) {
      if (!((this.isStopped || this.isLocked) && !c)) {
        if (typeof t == "string" && ["top", "left", "start"].includes(t)) t = 0;
        else if (typeof t == "string" && ["bottom", "right", "end"].includes(t))
          t = this.limit;
        else {
          let f;
          if (
            (typeof t == "string"
              ? (f = document.querySelector(t))
              : t instanceof HTMLElement && t?.nodeType && (f = t),
            f)
          ) {
            if (this.options.wrapper !== window) {
              const m = this.rootElement.getBoundingClientRect();
              e -= this.isHorizontal ? m.left : m.top;
            }
            const h = f.getBoundingClientRect();
            t = (this.isHorizontal ? h.left : h.top) + this.animatedScroll;
          }
        }
        if (typeof t == "number") {
          if (((t += e), (t = Math.round(t)), this.options.infinite)) {
            if (u) {
              this.targetScroll = this.animatedScroll = this.scroll;
              const f = t - this.animatedScroll;
              f > this.limit / 2
                ? (t = t - this.limit)
                : f < -this.limit / 2 && (t = t + this.limit);
            }
          } else t = zd(0, t, this.limit);
          if (t === this.targetScroll) {
            o?.(this), l?.(this);
            return;
          }
          if (((this.userData = d ?? {}), n)) {
            (this.animatedScroll = this.targetScroll = t),
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
          u || (this.targetScroll = t),
            this.animate.fromTo(this.animatedScroll, t, {
              duration: r,
              easing: s,
              lerp: a,
              onStart: () => {
                i && (this.isLocked = !0),
                  (this.isScrolling = "smooth"),
                  o?.(this);
              },
              onUpdate: (f, h) => {
                (this.isScrolling = "smooth"),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = f - this.animatedScroll),
                  (this.direction = Math.sign(this.velocity)),
                  (this.animatedScroll = f),
                  this.setScroll(this.scroll),
                  u && (this.targetScroll = f),
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
    checkNestedScroll(t, { deltaX: e, deltaY: n }) {
      const i = Date.now(),
        r = t._lenis ?? (t._lenis = {});
      let s, a, o, l, c, u, d, f;
      const h = this.options.gestureOrientation;
      if (i - (r.time ?? 0) > 2e3) {
        r.time = Date.now();
        const S = window.getComputedStyle(t);
        r.computedStyle = S;
        const E = S.overflowX,
          w = S.overflowY;
        if (
          ((s = ["auto", "overlay", "scroll"].includes(E)),
          (a = ["auto", "overlay", "scroll"].includes(w)),
          (r.hasOverflowX = s),
          (r.hasOverflowY = a),
          (!s && !a) || (h === "vertical" && !a) || (h === "horizontal" && !s))
        )
          return !1;
        (c = t.scrollWidth),
          (u = t.scrollHeight),
          (d = t.clientWidth),
          (f = t.clientHeight),
          (o = c > d),
          (l = u > f),
          (r.isScrollableX = o),
          (r.isScrollableY = l),
          (r.scrollWidth = c),
          (r.scrollHeight = u),
          (r.clientWidth = d),
          (r.clientHeight = f);
      } else
        (o = r.isScrollableX),
          (l = r.isScrollableY),
          (s = r.hasOverflowX),
          (a = r.hasOverflowY),
          (c = r.scrollWidth),
          (u = r.scrollHeight),
          (d = r.clientWidth),
          (f = r.clientHeight);
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
        const S = e !== 0,
          E = n !== 0;
        S && s && o && (m = "x"), E && a && l && (m = "y");
      }
      if (!m) return !1;
      let p, g, _, v, y;
      if (m === "x") (p = t.scrollLeft), (g = c - d), (_ = e), (v = s), (y = o);
      else if (m === "y")
        (p = t.scrollTop), (g = u - f), (_ = n), (v = a), (y = l);
      else return !1;
      return (_ > 0 ? p < g : p > 0) && v && y;
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
      const t = this.options.wrapper;
      return this.isHorizontal
        ? t.scrollX ?? t.scrollLeft
        : t.scrollY ?? t.scrollTop;
    }
    get scroll() {
      return this.options.infinite
        ? r0(this.animatedScroll, this.limit)
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
      this._isStopped !== t && ((this._isStopped = t), this.updateClassName());
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
R.registerPlugin(G);
let Xs;
const u0 = () => {
    "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      ((Xs = new c0({
        autoRaf: !0,
        lerp: 0.1,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -12 * t)),
        smoothWheel: !0,
        smoothTouch: !1,
      })),
      Xs.on("scroll", G.update),
      R.ticker.add((t) => {
        Xs.raf(t * 1e3);
      }),
      R.ticker.lagSmoothing(0));
  },
  Rd = () => {
    u0();
  },
  Pi = () => Xs,
  d0 = () => {
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
        const a = Pi();
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
        const d = R.timeline({ paused: !0 }),
          f = R.timeline({ paused: !0 });
        d.to(s, {
          opacity: 1,
          pointerEvents: "auto",
          visibility: "visible",
          display: "block",
          ease: "expo.out",
          duration: 0,
        }),
          d.to(
            o,
            { clipPath: "inset(0% 0% 0% 0%)", ease: "expo.inOut", duration: 1 },
            "<"
          ),
          d.to(
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
          f.to([l, c], {
            y: 100,
            opacity: 0,
            filter: "blur(2px)",
            ease: "expo.out",
            duration: 0.8,
            stagger: -0.14,
          }),
          f.to(
            o,
            {
              clipPath: "inset(0% 0% 100% 0%)",
              ease: "expo.inOut",
              duration: 0.8,
            },
            "<"
          ),
          f.to(
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
            d.restart(), (n = s), (i = f);
            const m = Pi();
            m && m.stop();
          }),
          u.forEach((m) => {
            m.addEventListener("click", () => {
              f.restart(), (n = null), (i = null);
              const p = Pi();
              p && p.start();
            });
          });
      });
  },
  f0 = () => {
    d0();
  },
  h0 = () => {
    const t = document.querySelectorAll("[clock='component']"),
      e = () => {
        t.forEach((n) => {
          const r = n.querySelector("[clock-location]")?.dataset.timezone,
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
            d = c.getMinutes(),
            f = c.getSeconds(),
            h = (u + d / 60) * 30,
            m = (d + f / 60) * 6;
          s.setAttribute("transform", `rotate(${h} 10 10)`),
            a.setAttribute("transform", `rotate(${m} 10 10)`),
            (o.textContent = l);
        }),
          requestAnimationFrame(e);
      };
    e();
  },
  Nd = () => {
    h0();
  };
R.registerPlugin(xe);
const p0 = (t) => {
    const e = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
      window.innerWidth <= 768;
    let n, i, r;
    const s = () => {
        n && typeof n.revert == "function" && (n.revert(), (n = null)),
          i && (i.kill(), (i = null)),
          document.querySelectorAll(".move-text").forEach((c) => {
            c.parentNode &&
              (c.parentNode.insertBefore(c.firstChild, c), c.remove());
          });
      },
      a = () => {
        const l = document.querySelector("[contact-hero='text']"),
          c = document.querySelector("[contact-hero='visual']"),
          u = document.querySelectorAll("[contact-hero='visual-info']"),
          d = document.querySelectorAll("[contact-hero='cta']");
        l &&
          (n = xe.create(l, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "contact-hero-text-line",
            tag: "span",
            onSplit(f) {
              f.lines.forEach((m) => {
                const p = document.createElement("div");
                p.classList.add("move-text"),
                  m.parentNode.insertBefore(p, m),
                  p.appendChild(m);
              });
              const h = l.querySelectorAll("span");
              return (
                h.length &&
                  h.forEach((m) => {
                    const p = document.createElement("div");
                    (p.style.overflow = "clip"),
                      (p.style.paddingBottom = "3px"),
                      m.parentNode.insertBefore(p, m),
                      p.appendChild(m);
                  }),
                (i = R.timeline()),
                R.set(".move-text", { opacity: 0, yPercent: 100 }),
                R.set(c, { opacity: 0, clipPath: "inset(50% round 16px)" }),
                R.set(u, { opacity: 0, y: 50 }),
                R.set(d, { opacity: 0, yPercent: 50 }),
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
                  u,
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
      },
      o = () => {
        e() ||
          (clearTimeout(r),
          (r = setTimeout(() => {
            s(),
              setTimeout(() => {
                a();
              }, 100);
          }, 250)));
      };
    a(), e() || window.addEventListener("resize", o);
  },
  m0 = () => {
    Nd(), ni(), ii();
    const t = Ri();
    t.add(() => ri(), "-=1"), t.add(() => p0(), "-=1");
  };
R.registerPlugin(xe);
const g0 = (t) => {
    const e = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
      window.innerWidth <= 768;
    let n, i, r;
    const s = () => {
        n && typeof n.revert == "function" && (n.revert(), (n = null)),
          i && (i.kill(), (i = null)),
          document.querySelectorAll(".move-text").forEach((c) => {
            c.parentNode &&
              (c.parentNode.insertBefore(c.firstChild, c), c.remove());
          });
      },
      a = () => {
        const l = document.querySelector("[career-hero='text']"),
          c = document.querySelector("[career-hero='btn']"),
          u = document.querySelector("[career-hero='visual']");
        l &&
          (n = xe.create(l, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "career-hero-text-line",
            tag: "span",
            onSplit(d) {
              d.lines.forEach((h) => {
                const m = document.createElement("div");
                m.classList.add("move-text"),
                  h.parentNode.insertBefore(m, h),
                  m.appendChild(h);
              });
              const f = l.querySelectorAll("span");
              return (
                f.length &&
                  f.forEach((h) => {
                    const m = document.createElement("div");
                    (m.style.overflow = "clip"),
                      (m.style.paddingBottom = "3px"),
                      h.parentNode.insertBefore(m, h),
                      m.appendChild(h);
                  }),
                (i = R.timeline()),
                R.set(".move-text", { opacity: 0, yPercent: 100 }),
                R.set(c, { opacity: 0 }),
                R.set(u, { opacity: 0 }),
                i.to(".move-text", {
                  opacity: 1,
                  duration: 1.8,
                  stagger: 0.08,
                  ease: "expo.inOut",
                  yPercent: 0,
                }),
                i.to(c, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
                i.to(
                  u,
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
      o = () => {
        e() ||
          (clearTimeout(r),
          (r = setTimeout(() => {
            s(),
              setTimeout(() => {
                a();
              }, 100);
          }, 250)));
      };
    a(), e() || window.addEventListener("resize", o);
  },
  v0 = () => {
    vl(), f0(), Nd(), ni(), ii();
    const t = Ri();
    t.add(() => ri(), "-=1"), t.add(() => g0(), "-=1");
  };
R.registerPlugin(xe);
const y0 = (t) => {
    const e = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
      window.innerWidth <= 768;
    let n, i, r;
    const s = () => {
        n && typeof n.revert == "function" && (n.revert(), (n = null)),
          i && (i.kill(), (i = null)),
          document.querySelectorAll(".move-text").forEach((c) => {
            c.parentNode &&
              (c.parentNode.insertBefore(c.firstChild, c), c.remove());
          });
      },
      a = () => {
        const l = document.querySelector("[work-hero='text']"),
          c = document.querySelector("[work-hero='filter-wrap']"),
          u = document.querySelectorAll("[work-hero='project']");
        l &&
          (n = xe.create(l, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "work-hero-text-line",
            tag: "span",
            onSplit(d) {
              d.lines.forEach((h) => {
                const m = document.createElement("div");
                m.classList.add("move-text"),
                  h.parentNode.insertBefore(m, h),
                  m.appendChild(h);
              });
              const f = l.querySelectorAll("span");
              return (
                f.length &&
                  f.forEach((h) => {
                    const m = document.createElement("div");
                    (m.style.overflow = "clip"),
                      (m.style.paddingBottom = "3px"),
                      h.parentNode.insertBefore(m, h),
                      m.appendChild(h);
                  }),
                (i = R.timeline()),
                R.set(".move-text", { opacity: 0, yPercent: 100 }),
                R.set(c, { opacity: 0 }),
                R.set(u, { y: 100, opacity: 0 }),
                i.to(".move-text", {
                  opacity: 1,
                  duration: 1.8,
                  stagger: 0.08,
                  ease: "expo.inOut",
                  yPercent: 0,
                }),
                i.to(c, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
                i.to(
                  u,
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
      o = () => {
        e() ||
          (clearTimeout(r),
          (r = setTimeout(() => {
            s(),
              setTimeout(() => {
                a();
              }, 100);
          }, 250)));
      };
    a(), e() || window.addEventListener("resize", o);
  },
  _0 = () => {
    Id(), ni(), ii();
    const t = Ri();
    t.add(() => ri(), "-=1"), t.add(() => y0(), "-=1");
  },
  b0 = () => {
    const t = document.querySelector("[service-link='wrap']");
    if (!t) return;
    const e = t.querySelectorAll("[service-link='item']"),
      n = document.querySelectorAll("[service-item]"),
      i = t.querySelector("[service-link='line-wrap']"),
      r = i?.querySelector("[service-link='line']"),
      s = document.querySelector("[hero-gradient='main']"),
      a = document.querySelectorAll("[hero-gradient]");
    if (!e.length || !n.length || !i || !r) return;
    let o = !1,
      l = null,
      c = null;
    const u = new Set(),
      d = () => {
        e.forEach((_) => {
          const v = _.querySelector("[service-link='num']");
          _.setAttribute("service-link-status", "inactive"),
            R.to(_, { opacity: 0.2, duration: 0.3 }),
            R.to(v, { opacity: 0, y: 5, duration: 0.3 });
        }),
          n.forEach((_) => {
            _.setAttribute("service-item-status", "inactive");
          }),
          a.forEach((_) => {
            _.getAttribute("hero-gradient") !== "main" &&
              R.to(_, { opacity: 0, duration: 0.5 });
          }),
          s && R.to(s, { opacity: 1, duration: 0.5 });
      },
      f = (_) => {
        if (c === _) return;
        c = _;
        const v = document.querySelector(
            `[service-link='item'][item-name='${_}']`
          ),
          y = document.querySelector(`[service-item='${_}']`),
          b = document.querySelector(`[hero-gradient='${_}']`);
        if (v && y) {
          d();
          const S = v.querySelector("[service-link='num']");
          v.setAttribute("service-link-status", "active"),
            R.to(v, { opacity: 1, duration: 0.4 }),
            R.to(S, { opacity: 1, y: 0, duration: 0.4 }),
            y.setAttribute("service-item-status", "active"),
            u.has(_) || (h(y), u.add(_)),
            b &&
              (s && R.to(s, { opacity: 0, duration: 0.5 }),
              R.to(b, { opacity: 1, duration: 0.5 })),
            m(v);
        }
      },
      h = (_) => {
        const v = _.children;
        R.set(v, { opacity: 0, y: 50 }),
          R.to(v, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
          });
      },
      m = (_) => {
        const v = Array.from(e).indexOf(_),
          y = e.length,
          b = i.offsetHeight,
          S = r.offsetHeight,
          E = b - S,
          w = y > 1 ? v / (y - 1) : 0,
          C = E * w;
        R.to(r, { y: C, duration: 0.6, ease: "power2.out" });
      };
    s && R.set(s, { opacity: 1 }),
      a.forEach((_) => {
        _.getAttribute("hero-gradient") !== "main" && R.set(_, { opacity: 0 });
      }),
      n.forEach((_) => {
        R.set(_.children, { opacity: 0, y: 50 });
      }),
      e.forEach((_) => {
        const v = _.getAttribute("item-name");
        _.addEventListener("click", () => {
          v &&
            (l && clearTimeout(l),
            (o = !0),
            f(v),
            Pi().scrollTo(document.querySelector(`[service-item='${v}']`), {
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
        (_) => {
          if (o) return;
          _.forEach((b) => {
            const S = b.target.getAttribute("service-item");
            S &&
              (p.set(S, b.intersectionRatio),
              b.isIntersecting &&
                b.intersectionRatio >= 0.3 &&
                !u.has(S) &&
                (h(b.target), u.add(S)));
          });
          let v = null,
            y = 0;
          p.forEach((b, S) => {
            b > y && ((y = b), (v = S));
          }),
            v && y >= 0.3 ? f(v) : y < 0.3 && (d(), (c = null));
        },
        { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
      );
    n.forEach((_) => g.observe(_));
  },
  x0 = () => {
    b0();
  };
/*!
 * DrawSVGPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var pn,
  yl,
  da,
  Bd,
  Fd,
  Ac,
  zo,
  Vd,
  qd = function () {
    return typeof window < "u";
  },
  Hd = function () {
    return pn || (qd() && (pn = window.gsap) && pn.registerPlugin && pn);
  },
  S0 = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
  Ua = {
    rect: ["width", "height"],
    circle: ["r", "r"],
    ellipse: ["rx", "ry"],
    line: ["x2", "y2"],
  },
  vi = function (e) {
    return Math.round(e * 1e4) / 1e4;
  },
  Pn = function (e) {
    return parseFloat(e) || 0;
  },
  Oc = function (e, n) {
    var i = Pn(e);
    return ~e.indexOf("%") ? (i / 100) * n : i;
  },
  As = function (e, n) {
    return Pn(e.getAttribute(n));
  },
  Gs = Math.sqrt,
  Lc = function (e, n, i, r, s, a) {
    return Gs(
      Math.pow((Pn(i) - Pn(e)) * s, 2) + Math.pow((Pn(r) - Pn(n)) * a, 2)
    );
  },
  Ic = function (e) {
    return console.warn(e);
  },
  Wd = function (e) {
    return e.getAttribute("vector-effect") === "non-scaling-stroke";
  },
  T0 = 1,
  E0 = function (e, n, i) {
    var r = e.indexOf(" "),
      s,
      a;
    return (
      r < 0
        ? ((s = i !== void 0 ? i + "" : e), (a = e))
        : ((s = e.substr(0, r)), (a = e.substr(r + 1))),
      (s = Oc(s, n)),
      (a = Oc(a, n)),
      s > a ? [a, s] : [s, a]
    );
  },
  js = function (e) {
    if (((e = yl(e)[0]), !e)) return 0;
    var n = e.tagName.toLowerCase(),
      i = e.style,
      r = 1,
      s = 1,
      a,
      o,
      l,
      c,
      u,
      d,
      f;
    Wd(e) &&
      ((s = e.getScreenCTM()),
      (r = Gs(s.a * s.a + s.b * s.b)),
      (s = Gs(s.d * s.d + s.c * s.c)));
    try {
      o = e.getBBox();
    } catch {
      Ic(
        "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
      );
    }
    var h = o || { x: 0, y: 0, width: 0, height: 0 },
      m = h.x,
      p = h.y,
      g = h.width,
      _ = h.height;
    if (
      ((!o || (!g && !_)) &&
        Ua[n] &&
        ((g = As(e, Ua[n][0])),
        (_ = As(e, Ua[n][1])),
        n !== "rect" && n !== "line" && ((g *= 2), (_ *= 2)),
        n === "line" &&
          ((m = As(e, "x1")),
          (p = As(e, "y1")),
          (g = Math.abs(g - m)),
          (_ = Math.abs(_ - p)))),
      n === "path")
    )
      (c = i.strokeDasharray),
        (i.strokeDasharray = "none"),
        (a = e.getTotalLength() || 0),
        vi(r) !== vi(s) &&
          !Ac &&
          (Ac = 1) &&
          Ic(
            "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
          ),
        (a *= (r + s) / 2),
        (i.strokeDasharray = c);
    else if (n === "rect") a = g * 2 * r + _ * 2 * s;
    else if (n === "line") a = Lc(m, p, m + g, p + _, r, s);
    else if (n === "polyline" || n === "polygon")
      for (
        l = e.getAttribute("points").match(S0) || [],
          n === "polygon" && l.push(l[0], l[1]),
          a = 0,
          u = 2;
        u < l.length;
        u += 2
      )
        a += Lc(l[u - 2], l[u - 1], l[u], l[u + 1], r, s) || 0;
    else
      (n === "circle" || n === "ellipse") &&
        ((d = (g / 2) * r),
        (f = (_ / 2) * s),
        (a = Math.PI * (3 * (d + f) - Gs((3 * d + f) * (d + 3 * f)))));
    return a || 0;
  },
  zc = function (e, n) {
    if (((e = yl(e)[0]), !e)) return [0, 0];
    n || (n = js(e) + 1);
    var i = da.getComputedStyle(e),
      r = i.strokeDasharray || "",
      s = Pn(i.strokeDashoffset),
      a = r.indexOf(",");
    return (
      a < 0 && (a = r.indexOf(" ")),
      (r = a < 0 ? n : Pn(r.substr(0, a))),
      r > n && (r = n),
      [-s || 0, r - s || 0]
    );
  },
  Dc = function () {
    qd() &&
      ((da = window),
      (Fd = pn = Hd()),
      (yl = pn.utils.toArray),
      (zo = pn.core.getStyleSaver),
      (Vd = pn.core.reverting || function () {}),
      (Bd = ((da.navigator || {}).userAgent || "").indexOf("Edge") !== -1));
  },
  _l = {
    version: "3.13.0",
    name: "drawSVG",
    register: function (e) {
      (pn = e), Dc();
    },
    init: function (e, n, i, r, s) {
      if (!e.getBBox) return !1;
      Fd || Dc();
      var a = js(e),
        o,
        l,
        c;
      return (
        (this.styles =
          zo && zo(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
        (this.tween = i),
        (this._style = e.style),
        (this._target = e),
        n + "" == "true"
          ? (n = "0 100%")
          : n
          ? (n + "").indexOf(" ") === -1 && (n = "0 " + n)
          : (n = "0 0"),
        (o = zc(e, a)),
        (l = E0(n, a, o[0])),
        (this._length = vi(a)),
        (this._dash = vi(o[1] - o[0])),
        (this._offset = vi(-o[0])),
        (this._dashPT = this.add(
          this,
          "_dash",
          this._dash,
          vi(l[1] - l[0]),
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
          vi(-l[0]),
          0,
          0,
          0,
          0,
          0,
          1
        )),
        Bd &&
          ((c = da.getComputedStyle(e)),
          c.strokeLinecap !== c.strokeLinejoin &&
            ((l = Pn(c.strokeMiterlimit)),
            this.add(e.style, "strokeMiterlimit", l, l + 0.01))),
        (this._live = Wd(e) || ~(n + "").indexOf("live")),
        (this._nowrap = ~(n + "").indexOf("nowrap")),
        this._props.push("drawSVG"),
        T0
      );
    },
    render: function (e, n) {
      if (n.tween._time || !Vd()) {
        var i = n._pt,
          r = n._style,
          s,
          a,
          o,
          l;
        if (i) {
          for (
            n._live &&
            ((s = js(n._target)),
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
    getLength: js,
    getPosition: zc,
  };
Hd() && pn.registerPlugin(_l);
R.registerPlugin(xe, _l);
const w0 = (t) => {
  const e = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
    window.innerWidth <= 768;
  let n, i, r;
  const s = () => {
      n && typeof n.revert == "function" && (n.revert(), (n = null)),
        i && (i.kill(), (i = null)),
        document.querySelectorAll(".move-text").forEach((c) => {
          c.parentNode &&
            (c.parentNode.insertBefore(c.firstChild, c), c.remove());
        });
    },
    a = () => {
      const l = document.querySelector("[service-hero='text']"),
        c = document.querySelectorAll("[service-hero='btn']"),
        u = document.querySelectorAll("[service-hero='svg']"),
        d = document.querySelectorAll("[service-hero='svg'] path");
      l &&
        (n = xe.create(l, {
          type: "lines",
          autoSplit: !0,
          mask: "lines",
          linesClass: "service-hero-text-line",
          tag: "span",
          onSplit(f) {
            f.lines.forEach((m) => {
              const p = document.createElement("div");
              p.classList.add("move-text"),
                m.parentNode.insertBefore(p, m),
                p.appendChild(m);
            });
            const h = l.querySelectorAll("span");
            return (
              h.length &&
                h.forEach((m) => {
                  const p = document.createElement("div");
                  (p.style.overflow = "clip"),
                    (p.style.paddingBottom = "3px"),
                    m.parentNode.insertBefore(p, m),
                    p.appendChild(m);
                }),
              (i = R.timeline()),
              R.set(".move-text", { opacity: 0, yPercent: 100 }),
              R.set(c, { opacity: 0, yPercent: 20, scale: 0 }),
              R.set(u, { opacity: 0 }),
              R.set(d, { drawSVG: 0 }),
              i.to(u, { opacity: 1, duration: 0, ease: "power1.out" }),
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
    },
    o = () => {
      e() ||
        (clearTimeout(r),
        (r = setTimeout(() => {
          s(),
            setTimeout(() => {
              a();
            }, 100);
        }, 250)));
    };
  a(), e() || window.addEventListener("resize", o);
};
R.registerPlugin(_l, G);
const C0 = () => {
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
  P0 = () => {
    C0();
  },
  k0 = () => {
    x0(), ni(), ii(), P0();
    const t = Ri();
    t.add(() => ri(), "-=1"), t.add(() => w0(), "-=1");
  },
  M0 = () => {
    const t = document.querySelectorAll("[service-item]"),
      e = document.querySelector("[hero-gradient='main']"),
      n = document.querySelectorAll("[hero-gradient]");
    if (!t.length || !e) return;
    let i = !1,
      r = null,
      s = null;
    const a = () => {
        n.forEach((d) => {
          d.getAttribute("hero-gradient") !== "main" &&
            R.to(d, { opacity: 0, duration: 0.5 });
        }),
          R.to(e, { opacity: 1, duration: 0.5 });
      },
      o = (d) => {
        if (s === d) return;
        s = d;
        const f = document.querySelector(`[hero-gradient='${d}']`);
        f &&
          (R.to(e, { opacity: 0, duration: 0.5 }),
          n.forEach((h) => {
            const m = h.getAttribute("hero-gradient");
            m !== "main" && m !== d && R.to(h, { opacity: 0, duration: 0.5 });
          }),
          R.to(f, { opacity: 1, duration: 0.5 }));
      };
    R.set(e, { opacity: 1 }),
      n.forEach((d) => {
        d.getAttribute("hero-gradient") !== "main" && R.set(d, { opacity: 0 });
      });
    const l = new Map(),
      c = new IntersectionObserver(
        (d) => {
          if (i) return;
          d.forEach((m) => {
            const p = m.target.getAttribute("service-item");
            p && l.set(p, m.intersectionRatio);
          });
          let f = null,
            h = 0;
          l.forEach((m, p) => {
            m > h && ((h = m), (f = p));
          }),
            f && h >= 0.3 ? o(f) : h < 0.3 && (a(), (s = null));
        },
        { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
      );
    return (
      t.forEach((d) => c.observe(d)),
      {
        setGradient: (d) => {
          r && clearTimeout(r),
            (i = !0),
            d ? o(d) : (a(), (s = null)),
            (r = setTimeout(() => {
              i = !1;
            }, 1e3));
        },
        showMainGradient: a,
      }
    );
  },
  $0 = () => M0();
/*!
 * matrix 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var kn,
  ki,
  bl,
  Sa,
  Rr,
  Us,
  fa,
  Zr,
  rn = "transform",
  Do = rn + "Origin",
  Yd,
  xl = function (e) {
    var n = e.ownerDocument || e;
    for (
      !(rn in e.style) &&
      ("msTransform" in e.style) &&
      ((rn = "msTransform"), (Do = rn + "Origin"));
      n.parentNode && (n = n.parentNode);

    );
    if (((ki = window), (fa = new Ii()), n)) {
      (kn = n),
        (bl = n.documentElement),
        (Sa = n.body),
        (Zr = kn.createElementNS("http://www.w3.org/2000/svg", "g")),
        (Zr.style.transform = "none");
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
        (Yd = r.offsetParent !== i),
        s.removeChild(i));
    }
    return n;
  },
  A0 = function (e) {
    for (var n, i; e && e !== Sa; )
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
  Xd = [],
  Gd = [],
  Sl = function () {
    return ki.pageYOffset || kn.scrollTop || bl.scrollTop || Sa.scrollTop || 0;
  },
  Tl = function () {
    return (
      ki.pageXOffset || kn.scrollLeft || bl.scrollLeft || Sa.scrollLeft || 0
    );
  },
  El = function (e) {
    return (
      e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
    );
  },
  O0 = function t(e) {
    if (ki.getComputedStyle(e).position === "fixed") return !0;
    if (((e = e.parentNode), e && e.nodeType === 1)) return t(e);
  },
  Ka = function t(e, n) {
    if (e.parentNode && (kn || xl(e))) {
      var i = El(e),
        r = i
          ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
          : "http://www.w3.org/1999/xhtml",
        s = i ? (n ? "rect" : "g") : "div",
        a = n !== 2 ? 0 : 100,
        o = n === 3 ? 100 : 0,
        l =
          "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        c = kn.createElementNS
          ? kn.createElementNS(r.replace(/^https/, "http"), s)
          : kn.createElement(s);
      return (
        n &&
          (i
            ? (Us || (Us = t(e)),
              c.setAttribute("width", 0.01),
              c.setAttribute("height", 0.01),
              c.setAttribute("transform", "translate(" + a + "," + o + ")"),
              Us.appendChild(c))
            : (Rr || ((Rr = t(e)), (Rr.style.cssText = l)),
              (c.style.cssText =
                l +
                "width:0.1px;height:0.1px;top:" +
                o +
                "px;left:" +
                a +
                "px"),
              Rr.appendChild(c))),
        c
      );
    }
    throw "Need document and parent.";
  },
  L0 = function (e) {
    for (var n = new Ii(), i = 0; i < e.numberOfItems; i++)
      n.multiply(e.getItem(i).matrix);
    return n;
  },
  jd = function (e) {
    var n = e.getCTM(),
      i;
    return (
      n ||
        ((i = e.style[rn]),
        (e.style[rn] = "none"),
        e.appendChild(Zr),
        (n = Zr.getCTM()),
        e.removeChild(Zr),
        i
          ? (e.style[rn] = i)
          : e.style.removeProperty(
              rn.replace(/([A-Z])/g, "-$1").toLowerCase()
            )),
      n || fa.clone()
    );
  },
  I0 = function (e, n) {
    var i = El(e),
      r = e === i,
      s = i ? Xd : Gd,
      a = e.parentNode,
      o =
        a && !i && a.shadowRoot && a.shadowRoot.appendChild ? a.shadowRoot : a,
      l,
      c,
      u,
      d,
      f,
      h;
    if (e === ki) return e;
    if (
      (s.length || s.push(Ka(e, 1), Ka(e, 2), Ka(e, 3)), (l = i ? Us : Rr), i)
    )
      r
        ? ((u = jd(e)), (d = -u.e / u.a), (f = -u.f / u.d), (c = fa))
        : e.getBBox
        ? ((u = e.getBBox()),
          (c = e.transform ? e.transform.baseVal : {}),
          (c = c.numberOfItems
            ? c.numberOfItems > 1
              ? L0(c)
              : c.getItem(0).matrix
            : fa),
          (d = c.a * u.x + c.c * u.y),
          (f = c.b * u.x + c.d * u.y))
        : ((c = new Ii()), (d = f = 0)),
        n && e.tagName.toLowerCase() === "g" && (d = f = 0),
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
            (c.e + d) +
            "," +
            (c.f + f) +
            ")"
        );
    else {
      if (((d = f = 0), Yd))
        for (
          c = e.offsetParent, u = e;
          u && (u = u.parentNode) && u !== c && u.parentNode;

        )
          (ki.getComputedStyle(u)[rn] + "").length > 4 &&
            ((d = u.offsetLeft), (f = u.offsetTop), (u = 0));
      if (
        ((h = ki.getComputedStyle(e)),
        h.position !== "absolute" && h.position !== "fixed")
      )
        for (c = e.offsetParent; a && a !== c; )
          (d += a.scrollLeft || 0), (f += a.scrollTop || 0), (a = a.parentNode);
      (u = l.style),
        (u.top = e.offsetTop - f + "px"),
        (u.left = e.offsetLeft - d + "px"),
        (u[rn] = h[rn]),
        (u[Do] = h[Do]),
        (u.position = h.position === "fixed" ? "fixed" : "absolute"),
        o.appendChild(l);
    }
    return l;
  },
  Za = function (e, n, i, r, s, a, o) {
    return (e.a = n), (e.b = i), (e.c = r), (e.d = s), (e.e = a), (e.f = o), e;
  },
  Ii = (function () {
    function t(n, i, r, s, a, o) {
      n === void 0 && (n = 1),
        i === void 0 && (i = 0),
        r === void 0 && (r = 0),
        s === void 0 && (s = 1),
        a === void 0 && (a = 0),
        o === void 0 && (o = 0),
        Za(this, n, i, r, s, a, o);
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
        return Za(
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
          d = i.c,
          f = i.b,
          h = i.d,
          m = i.e,
          p = i.f;
        return Za(
          this,
          u * r + f * a,
          u * s + f * o,
          d * r + h * a,
          d * s + h * o,
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
          d = this.e,
          f = this.f;
        return (
          (r.x = s * o + a * c + d || 0), (r.y = s * l + a * u + f || 0), r
        );
      }),
      t
    );
  })();
function yn(t, e, n, i) {
  if (!t || !t.parentNode || (kn || xl(t)).documentElement === t)
    return new Ii();
  var r = A0(t),
    s = El(t),
    a = s ? Xd : Gd,
    o = I0(t, n),
    l = a[0].getBoundingClientRect(),
    c = a[1].getBoundingClientRect(),
    u = a[2].getBoundingClientRect(),
    d = o.parentNode,
    f = !i && O0(t),
    h = new Ii(
      (c.left - l.left) / 100,
      (c.top - l.top) / 100,
      (u.left - l.left) / 100,
      (u.top - l.top) / 100,
      l.left + (f ? 0 : Tl()),
      l.top + (f ? 0 : Sl())
    );
  if ((d.removeChild(o), r))
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
 */ var z0 = 1,
  gr,
  st,
  ye,
  Qr,
  Fn,
  Mn,
  Ro,
  Rc = function (e, n) {
    return e.actions.forEach(function (i) {
      return i.vars[n] && i.vars[n](i);
    });
  },
  No = {},
  Nc = 180 / Math.PI,
  D0 = Math.PI / 180,
  ha = {},
  Bc = {},
  Ta = {},
  wl = function (e) {
    return typeof e == "string" ? e.split(" ").join("").split(",") : e;
  },
  R0 = wl("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
  Ea = wl(
    "transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"
  ),
  Jr = function (e) {
    return gr(e)[0] || console.warn("Element not found:", e);
  },
  Qi = function (e) {
    return Math.round(e * 1e4) / 1e4 || 0;
  },
  Qa = function (e, n, i) {
    return e.forEach(function (r) {
      return r.classList[i](n);
    });
  },
  Fc = {
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
  Ji = function (e, n) {
    var i = {},
      r;
    for (r in e) n[r] || (i[r] = e[r]);
    return i;
  },
  Cl = {},
  Zd = function (e) {
    var n = (Cl[e] = wl(e));
    return (Ta[e] = n.concat(Ea)), n;
  },
  N0 = function (e) {
    var n = e._gsap || st.core.getCache(e);
    return n.gmCache === st.ticker.frame
      ? n.gMatrix
      : ((n.gmCache = st.ticker.frame), (n.gMatrix = yn(e, !0, !1, !0)));
  },
  B0 = function t(e, n, i) {
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
  pa = function (e, n, i) {
    return (
      e.forEach(function (r) {
        return (r.d = B0(i ? r.element : r.t, n));
      }),
      e.sort(function (r, s) {
        return r.d - s.d;
      }),
      e
    );
  },
  ds = function (e, n) {
    for (
      var i = e.element.style, r = (e.css = e.css || []), s = n.length, a, o;
      s--;

    )
      (a = n[s]),
        (o = i[a] || i.getPropertyValue(a)),
        r.push(o ? a : Bc[a] || (Bc[a] = Kd(a)), o);
    return i;
  },
  ma = function (e) {
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
  Vc = function (e, n) {
    e.forEach(function (i) {
      return (i.a.cache.uncache = 1);
    }),
      n || e.finalStates.forEach(ma);
  },
  Ja =
    "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(
      ","
    ),
  Pl = function (e, n, i) {
    var r = e.element,
      s = e.width,
      a = e.height,
      o = e.uncache,
      l = e.getProp,
      c = r.style,
      u = 4,
      d,
      f,
      h;
    if ((typeof n != "object" && (n = e), ye && i !== 1))
      return (
        ye._abs.push({ t: r, b: e, a: e, sd: 0 }),
        ye._final.push(function () {
          return (e.cache.uncache = 1) && ma(e);
        }),
        r
      );
    for (
      f = l("display") === "none",
        (!e.isVisible || f) &&
          (f && (ds(e, ["display"]).display = n.display),
          (e.matrix = n.matrix),
          (e.width = s = e.width || n.width),
          (e.height = a = e.height || n.height)),
        ds(e, Ja),
        h = window.getComputedStyle(r);
      u--;

    )
      c[Ja[u]] = h[Ja[u]];
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
      d = new zi(r);
    else if (((d = Ji(e, ha)), (d.position = "absolute"), e.simple)) {
      var m = r.getBoundingClientRect();
      d.matrix = new Ii(1, 0, 0, 1, m.left + Tl(), m.top + Sl());
    } else d.matrix = yn(r, !1, !1, !0);
    return (d = or(d, e, !0)), (e.x = Mn(d.x, 0.01)), (e.y = Mn(d.y, 0.01)), r;
  },
  qc = function (e, n) {
    return (
      n !== !0 &&
        ((n = gr(n)),
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
  Qd = function (e) {
    return pa(e, !0).forEach(function (n) {
      return (
        (n.a.isVisible || n.b.isVisible) && Pl(n.sd < 0 ? n.b : n.a, n.b, 1)
      );
    });
  },
  F0 = function (e, n) {
    return (n && e.idLookup[Bo(n).id]) || e.elementStates[0];
  },
  Bo = function (e, n, i, r) {
    return e instanceof zi
      ? e
      : e instanceof sn
      ? F0(e, r)
      : new zi(
          typeof e == "string" ? Jr(e) || console.warn(e + " not found") : e,
          n,
          i
        );
  },
  V0 = function (e, n) {
    for (
      var i = st.getProperty(e.element, null, "native"),
        r = (e.props = {}),
        s = n.length;
      s--;

    )
      r[n[s]] = (i(n[s]) + "").trim();
    return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), e;
  },
  Jd = function (e, n) {
    var i = e.style || e,
      r;
    for (r in n) i[r] = n[r];
  },
  q0 = function (e) {
    var n = e.getAttribute("data-flip-id");
    return n || e.setAttribute("data-flip-id", (n = "auto-" + z0++)), n;
  },
  ef = function (e) {
    return e.map(function (n) {
      return n.element;
    });
  },
  Hc = function (e, n, i) {
    return e && n.length && i.add(e(ef(n), i, new sn(n, 0, !0)), 0);
  },
  or = function (e, n, i, r, s, a) {
    var o = e.element,
      l = e.cache,
      c = e.parent,
      u = e.x,
      d = e.y,
      f = n.width,
      h = n.height,
      m = n.scaleX,
      p = n.scaleY,
      g = n.rotation,
      _ = n.bounds,
      v = a && Ro && Ro(o, "transform,width,height"),
      y = e,
      b = n.matrix,
      S = b.e,
      E = b.f,
      w =
        e.bounds.width !== _.width ||
        e.bounds.height !== _.height ||
        e.scaleX !== m ||
        e.scaleY !== p ||
        e.rotation !== g,
      C = !w && e.simple && n.simple && !s,
      A,
      P,
      $,
      x,
      T,
      O,
      L;
    return (
      C || !c
        ? ((m = p = 1), (g = A = 0))
        : ((T = N0(c)),
          (O = T.clone().multiply(
            n.ctm ? n.matrix.clone().multiply(n.ctm) : n.matrix
          )),
          (g = Qi(Math.atan2(O.b, O.a) * Nc)),
          (A = Qi(Math.atan2(O.c, O.d) * Nc + g) % 360),
          (m = Math.sqrt(Math.pow(O.a, 2) + Math.pow(O.b, 2))),
          (p =
            Math.sqrt(Math.pow(O.c, 2) + Math.pow(O.d, 2)) * Math.cos(A * D0)),
          s &&
            ((s = gr(s)[0]),
            (x = st.getProperty(s)),
            (L = s.getBBox && typeof s.getBBox == "function" && s.getBBox()),
            (y = {
              scaleX: x("scaleX"),
              scaleY: x("scaleY"),
              width: L ? L.width : Math.ceil(parseFloat(x("width", "px"))),
              height: L ? L.height : parseFloat(x("height", "px")),
            })),
          (l.rotation = g + "deg"),
          (l.skewX = A + "deg")),
      i
        ? ((m *= f === y.width || !y.width ? 1 : f / y.width),
          (p *= h === y.height || !y.height ? 1 : h / y.height),
          (l.scaleX = m),
          (l.scaleY = p))
        : ((f = Mn((f * m) / y.scaleX, 0)),
          (h = Mn((h * p) / y.scaleY, 0)),
          (o.style.width = f + "px"),
          (o.style.height = h + "px")),
      r && Jd(o, n.props),
      C || !c
        ? ((u += S - e.matrix.e), (d += E - e.matrix.f))
        : w || c !== n.parent
        ? (l.renderTransform(1, l),
          (O = yn(s || o, !1, !1, !0)),
          (P = T.apply({ x: O.e, y: O.f })),
          ($ = T.apply({ x: S, y: E })),
          (u += $.x - P.x),
          (d += $.y - P.y))
        : ((T.e = T.f = 0),
          ($ = T.apply({ x: S - e.matrix.e, y: E - e.matrix.f })),
          (u += $.x),
          (d += $.y)),
      (u = Mn(u, 0.02)),
      (d = Mn(d, 0.02)),
      a && !(a instanceof zi)
        ? v && v.revert()
        : ((l.x = u + "px"), (l.y = d + "px"), l.renderTransform(1, l)),
      a &&
        ((a.x = u),
        (a.y = d),
        (a.rotation = g),
        (a.skewX = A),
        i ? ((a.scaleX = m), (a.scaleY = p)) : ((a.width = f), (a.height = h))),
      a || l
    );
  },
  eo = function (e, n) {
    return e instanceof sn ? e : new sn(e, n);
  },
  tf = function (e, n, i) {
    var r = e.idLookup[i],
      s = e.alt[i];
    return s.isVisible &&
      (!(n.getElementState(s.element) || s).isVisible || !r.isVisible)
      ? s
      : r;
  },
  to = [],
  no = "width,height,overflowX,overflowY".split(","),
  Os,
  Wc = function (e) {
    if (e !== Os) {
      var n = Fn.style,
        i = Fn.clientWidth === window.outerWidth,
        r = Fn.clientHeight === window.outerHeight,
        s = 4;
      if (e && (i || r)) {
        for (; s--; ) to[s] = n[no[s]];
        i && ((n.width = Fn.clientWidth + "px"), (n.overflowY = "hidden")),
          r && ((n.height = Fn.clientHeight + "px"), (n.overflowX = "hidden")),
          (Os = e);
      } else if (Os) {
        for (; s--; ) to[s] ? (n[no[s]] = to[s]) : n.removeProperty(Kd(no[s]));
        Os = e;
      }
    }
  },
  io = function (e, n, i, r) {
    (e instanceof sn && n instanceof sn) ||
      console.warn("Not a valid state object."),
      (i = i || {});
    var s = i,
      a = s.clearProps,
      o = s.onEnter,
      l = s.onLeave,
      c = s.absolute,
      u = s.absoluteOnLeave,
      d = s.custom,
      f = s.delay,
      h = s.paused,
      m = s.repeat,
      p = s.repeatDelay,
      g = s.yoyo,
      _ = s.toggleClass,
      v = s.nested,
      y = s.zIndex,
      b = s.scale,
      S = s.fade,
      E = s.stagger,
      w = s.spin,
      C = s.prune,
      A = ("props" in i ? i : e).props,
      P = Ji(i, Fc),
      $ = st.timeline({
        delay: f,
        paused: h,
        repeat: m,
        repeatDelay: p,
        yoyo: g,
        data: "isFlip",
      }),
      x = P,
      T = [],
      O = [],
      L = [],
      k = [],
      I = w === !0 ? 1 : w || 0,
      z =
        typeof w == "function"
          ? w
          : function () {
              return I;
            },
      B = e.interrupted || n.interrupted,
      M = $[r !== 1 ? "to" : "from"],
      q,
      X,
      oe,
      ne,
      K,
      Z,
      ue,
      he,
      Se,
      Me,
      de,
      Te,
      W,
      te;
    for (X in n.idLookup)
      (de = n.alt[X] ? tf(n, e, X) : n.idLookup[X]),
        (K = de.element),
        (Me = e.idLookup[X]),
        e.alt[X] &&
          K === Me.element &&
          (e.alt[X].isVisible || !de.isVisible) &&
          (Me = e.alt[X]),
        Me
          ? ((Z = {
              t: K,
              b: Me,
              a: de,
              sd: Me.element === K ? 0 : de.isVisible ? 1 : -1,
            }),
            L.push(Z),
            Z.sd &&
              (Z.sd < 0 && ((Z.b = de), (Z.a = Me)),
              B && ds(Z.b, A ? Ta[A] : Ea),
              S &&
                L.push(
                  (Z.swap = {
                    t: Me.element,
                    b: Z.b,
                    a: Z.a,
                    sd: -Z.sd,
                    swap: Z,
                  })
                )),
            (K._flip = Me.element._flip = ye ? ye.timeline : $))
          : de.isVisible &&
            (L.push({
              t: K,
              b: Ji(de, { isVisible: 1 }),
              a: de,
              sd: 0,
              entering: 1,
            }),
            (K._flip = ye ? ye.timeline : $));
    if (
      (A &&
        (Cl[A] || Zd(A)).forEach(function (D) {
          return (P[D] = function (Oe) {
            return L[Oe].a.props[D];
          });
        }),
      (L.finalStates = Se = []),
      (Te = function () {
        for (pa(L), Wc(!0), ne = 0; ne < L.length; ne++)
          (Z = L[ne]),
            (W = Z.a),
            (te = Z.b),
            C && !W.isDifferent(te) && !Z.entering
              ? L.splice(ne--, 1)
              : ((K = Z.t),
                v && !(Z.sd < 0) && ne && (W.matrix = yn(K, !1, !1, !0)),
                te.isVisible && W.isVisible
                  ? (Z.sd < 0
                      ? ((ue = new zi(K, A, e.simple)),
                        or(ue, W, b, 0, 0, ue),
                        (ue.matrix = yn(K, !1, !1, !0)),
                        (ue.css = Z.b.css),
                        (Z.a = W = ue),
                        S && (K.style.opacity = B ? te.opacity : W.opacity),
                        E && k.push(K))
                      : Z.sd > 0 &&
                        S &&
                        (K.style.opacity = B ? W.opacity - te.opacity : "0"),
                    or(W, te, b, A))
                  : te.isVisible !== W.isVisible &&
                    (te.isVisible
                      ? W.isVisible ||
                        ((te.css = W.css),
                        O.push(te),
                        L.splice(ne--, 1),
                        c && v && or(W, te, b, A))
                      : (W.isVisible && T.push(W), L.splice(ne--, 1))),
                b ||
                  ((K.style.maxWidth = Math.max(W.width, te.width) + "px"),
                  (K.style.maxHeight = Math.max(W.height, te.height) + "px"),
                  (K.style.minWidth = Math.min(W.width, te.width) + "px"),
                  (K.style.minHeight = Math.min(W.height, te.height) + "px")),
                v && _ && K.classList.add(_)),
            Se.push(W);
        var Oe;
        if (
          (_ &&
            ((Oe = Se.map(function (H) {
              return H.element;
            })),
            v &&
              Oe.forEach(function (H) {
                return H.classList.remove(_);
              })),
          Wc(!1),
          b
            ? ((P.scaleX = function (H) {
                return L[H].a.scaleX;
              }),
              (P.scaleY = function (H) {
                return L[H].a.scaleY;
              }))
            : ((P.width = function (H) {
                return L[H].a.width + "px";
              }),
              (P.height = function (H) {
                return L[H].a.height + "px";
              }),
              (P.autoRound = i.autoRound || !1)),
          (P.x = function (H) {
            return L[H].a.x + "px";
          }),
          (P.y = function (H) {
            return L[H].a.y + "px";
          }),
          (P.rotation = function (H) {
            return L[H].a.rotation + (w ? z(H, he[H], he) * 360 : 0);
          }),
          (P.skewX = function (H) {
            return L[H].a.skewX;
          }),
          (he = L.map(function (H) {
            return H.t;
          })),
          (y || y === 0) &&
            ((P.modifiers = {
              zIndex: function () {
                return y;
              },
            }),
            (P.zIndex = y),
            (P.immediateRender = i.immediateRender !== !1)),
          S &&
            (P.opacity = function (H) {
              return L[H].sd < 0 ? 0 : L[H].sd > 0 ? L[H].a.opacity : "+=0";
            }),
          k.length)
        ) {
          E = st.utils.distribute(E);
          var Kt = he.slice(k.length);
          P.stagger = function (H, Vt) {
            return E(~k.indexOf(Vt) ? he.indexOf(L[H].swap.t) : H, Vt, Kt);
          };
        }
        if (
          (R0.forEach(function (H) {
            return i[H] && $.eventCallback(H, i[H], i[H + "Params"]);
          }),
          d && he.length)
        ) {
          (x = Ji(P, Fc)),
            "scale" in d && ((d.scaleX = d.scaleY = d.scale), delete d.scale);
          for (X in d)
            (q = Ji(d[X], Ud)),
              (q[X] = P[X]),
              !("duration" in q) &&
                "duration" in P &&
                (q.duration = P.duration),
              (q.stagger = P.stagger),
              M.call($, he, q, 0),
              delete x[X];
        }
        (he.length || O.length || T.length) &&
          (_ &&
            $.add(function () {
              return Qa(Oe, _, $._zTime < 0 ? "remove" : "add");
            }, 0) &&
            !h &&
            Qa(Oe, _, "add"),
          he.length && M.call($, he, x, 0)),
          Hc(o, T, $),
          Hc(l, O, $);
        var Ft = ye && ye.timeline;
        Ft &&
          (Ft.add($, 0),
          ye._final.push(function () {
            return Vc(L, !a);
          })),
          (oe = $.duration()),
          $.call(function () {
            var H = $.time() >= oe;
            H && !Ft && Vc(L, !a), _ && Qa(Oe, _, H ? "remove" : "add");
          });
      }),
      u &&
        (c = L.filter(function (D) {
          return !D.sd && !D.a.isVisible && D.b.isVisible;
        }).map(function (D) {
          return D.a.element;
        })),
      ye)
    ) {
      var $e;
      c && ($e = ye._abs).push.apply($e, qc(L, c)), ye._run.push(Te);
    } else c && Qd(qc(L, c)), Te();
    var Ae = ye ? ye.timeline : $;
    return (
      (Ae.revert = function () {
        return kl(Ae, 1, 1);
      }),
      Ae
    );
  },
  H0 = function t(e) {
    e.vars.onInterrupt &&
      e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []),
      e.getChildren(!0, !1, !0).forEach(t);
  },
  kl = function (e, n, i) {
    if (e && e.progress() < 1 && (!e.paused() || i))
      return n && (H0(e), n < 2 && e.progress(1), e.kill()), !0;
  },
  Ls = function (e) {
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
  sn = (function () {
    function t(n, i, r) {
      if (((this.props = i && i.props), (this.simple = !!(i && i.simple)), r))
        (this.targets = ef(n)), (this.elementStates = n), Ls(this);
      else {
        this.targets = gr(n);
        var s = i && (i.kill === !1 || (i.batch && !i.kill));
        ye && !s && ye._kill.push(this), this.update(s || !!ye);
      }
    }
    var e = t.prototype;
    return (
      (e.update = function (i) {
        var r = this;
        return (
          (this.elementStates = this.targets.map(function (s) {
            return new zi(s, r.props, r.simple);
          })),
          Ls(this),
          this.interrupt(i),
          this.recordInlineStyles(),
          this
        );
      }),
      (e.clear = function () {
        return (
          (this.targets.length = this.elementStates.length = 0), Ls(this), this
        );
      }),
      (e.fit = function (i, r, s) {
        for (
          var a = pa(this.elementStates.slice(0), !1, !0),
            o = (i || this).idLookup,
            l = 0,
            c,
            u;
          l < a.length;
          l++
        )
          (c = a[l]),
            s && (c.matrix = yn(c.element, !1, !1, !0)),
            (u = o[c.id]),
            u && or(c, u, r, !0, 0, c),
            (c.matrix = yn(c.element, !1, !1, !0));
        return this;
      }),
      (e.getProperty = function (i, r) {
        var s = this.getElementState(i) || ha;
        return (r in s ? s : s.props || ha)[r];
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
          Ls(this),
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
          d = i.alt,
          f = this.alt,
          h = function (C, A, P) {
            return (
              (C.isVisible !== A.isVisible
                ? C.isVisible
                  ? l
                  : c
                : C.isVisible
                ? o
                : a
              ).push(P) && u.push(P)
            );
          },
          m = function (C, A, P) {
            return u.indexOf(P) < 0 && h(C, A, P);
          },
          p,
          g,
          _,
          v,
          y,
          b,
          S,
          E;
        for (_ in r)
          (y = d[_]),
            (b = f[_]),
            (p = y ? tf(i, this, _) : r[_]),
            (v = p.element),
            (g = s[_]),
            b
              ? ((E = g.isVisible || (!b.isVisible && v === g.element) ? g : b),
                (S =
                  y && !p.isVisible && !y.isVisible && E.element === y.element
                    ? y
                    : p),
                S.isVisible && E.isVisible && S.element !== E.element
                  ? ((S.isDifferent(E) ? o : a).push(S.element, E.element),
                    u.push(S.element, E.element))
                  : h(S, E, S.element),
                y && S.element === y.element && (y = r[_]),
                m(S.element !== g.element && y ? y : S, g, g.element),
                m(y && y.element === b.element ? y : S, b, b.element),
                y && m(y, b.element === y.element ? b : g, y.element))
              : (g ? (g.isDifferent(p) ? h(p, g, v) : a.push(v)) : l.push(v),
                y && m(y, g, y.element));
        for (_ in s)
          r[_] || (c.push(s[_].element), f[_] && c.push(f[_].element));
        return { changed: o, unchanged: a, enter: l, leave: c };
      }),
      (e.recordInlineStyles = function () {
        for (var i = Ta[this.props] || Ea, r = this.elementStates.length; r--; )
          ds(this.elementStates[r], i);
      }),
      (e.interrupt = function (i) {
        var r = this,
          s = [];
        this.targets.forEach(function (a) {
          var o = a._flip,
            l = kl(o, i ? 0 : 1);
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
        return this.elementStates[this.targets.indexOf(Jr(i))];
      }),
      (e.makeAbsolute = function () {
        return pa(this.elementStates.slice(0), !0, !0).map(Pl);
      }),
      t
    );
  })(),
  zi = (function () {
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
          o = st.getProperty(a),
          l = st.core.getCache(a),
          c = a.getBoundingClientRect(),
          u =
            a.getBBox &&
            typeof a.getBBox == "function" &&
            a.nodeName.toLowerCase() !== "svg" &&
            a.getBBox(),
          d = r
            ? new Ii(1, 0, 0, 1, c.left + Tl(), c.top + Sl())
            : yn(a, !1, !1, !0);
        (l.uncache = 1),
          (s.getProp = o),
          (s.element = a),
          (s.id = q0(a)),
          (s.matrix = d),
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
          (s.width = u ? u.width : Mn(o("width", "px"), 0.04)),
          (s.height = u ? u.height : Mn(o("height", "px"), 0.04)),
          i && V0(s, Cl[i] || Zd(i)),
          (s.ctm =
            a.getCTM && a.nodeName.toLowerCase() === "svg" && jd(a).inverse()),
          (s.simple =
            r || (Qi(d.a) === 1 && !Qi(d.b) && !Qi(d.c) && Qi(d.d) === 1)),
          (s.uncache = 0);
      }),
      t
    );
  })(),
  W0 = (function () {
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
  Y0 = (function () {
    function t(n) {
      (this.id = n),
        (this.actions = []),
        (this._kill = []),
        (this._final = []),
        (this._abs = []),
        (this._run = []),
        (this.data = {}),
        (this.state = new sn()),
        (this.timeline = st.timeline());
    }
    var e = t.prototype;
    return (
      (e.add = function (i) {
        var r = this.actions.filter(function (s) {
          return s.vars === i;
        });
        return r.length
          ? r[0]
          : ((r = new W0(typeof i == "function" ? { animate: i } : i, this)),
            this.actions.push(r),
            r);
      }),
      (e.remove = function (i) {
        var r = this.actions.indexOf(i);
        return r >= 0 && this.actions.splice(r, 1), this;
      }),
      (e.getState = function (i) {
        var r = this,
          s = ye,
          a = Qr;
        return (
          (ye = this),
          this.state.clear(),
          (this._kill.length = 0),
          this.actions.forEach(function (o) {
            o.vars.getState &&
              ((o.states.length = 0), (Qr = o), (o.state = o.vars.getState(o))),
              i &&
                o.states.forEach(function (l) {
                  return r.state.add(l);
                });
          }),
          (Qr = a),
          (ye = s),
          this.killConflicts(),
          this
        );
      }),
      (e.animate = function () {
        var i = this,
          r = ye,
          s = this.timeline,
          a = this.actions.length,
          o,
          l;
        for (
          ye = this,
            s.clear(),
            this._abs.length = this._final.length = this._run.length = 0,
            this.actions.forEach(function (c) {
              c.vars.animate && c.vars.animate(c);
              var u = c.vars.onEnter,
                d = c.vars.onLeave,
                f = c.targets,
                h,
                m;
              f &&
                f.length &&
                (u || d) &&
                ((h = new sn()),
                c.states.forEach(function (p) {
                  return h.add(p);
                }),
                (m = h.compare(vr.getState(f))),
                m.enter.length && u && u(m.enter),
                m.leave.length && d && d(m.leave));
            }),
            Qd(this._abs),
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
                Rc(i, "onComplete"));
            }),
            ye = r;
          a--;

        )
          this.actions[a].vars.once && this.actions[a].kill();
        return Rc(this, "onStart"), s.restart(), this;
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
          this !== ye &&
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
        (this._killed = 1), this.clear(), delete No[this.id];
      }),
      t
    );
  })(),
  vr = (function () {
    function t() {}
    return (
      (t.getState = function (n, i) {
        var r = eo(n, i);
        return (
          Qr && Qr.states.push(r),
          i && i.batch && t.batch(i.batch).state.add(r),
          r
        );
      }),
      (t.from = function (n, i) {
        return (
          (i = i || {}),
          "clearProps" in i || (i.clearProps = !0),
          io(
            n,
            eo(i.targets || n.targets, {
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
        return io(
          n,
          eo(i.targets || n.targets, {
            props: i.props || n.props,
            simple: i.simple,
            kill: !!i.kill,
          }),
          i,
          1
        );
      }),
      (t.fromTo = function (n, i, r) {
        return io(n, i, r);
      }),
      (t.fit = function (n, i, r) {
        var s = r ? Ji(r, Ud) : {},
          a = r || s,
          o = a.absolute,
          l = a.scale,
          c = a.getVars,
          u = a.props,
          d = a.runBackwards,
          f = a.onComplete,
          h = a.simple,
          m = r && r.fitChild && Jr(r.fitChild),
          p = Bo(i, u, h, n),
          g = Bo(n, 0, h, p),
          _ = u ? Ta[u] : Ea,
          v = st.context();
        return (
          u && Jd(s, p.props),
          ds(g, _),
          d &&
            ("immediateRender" in s || (s.immediateRender = !0),
            (s.onComplete = function () {
              ma(g), f && f.apply(this, arguments);
            })),
          o && Pl(g, p),
          (s = or(g, p, l || m, !s.duration && u, m, s.duration || c ? s : 0)),
          typeof r == "object" && "zIndex" in r && (s.zIndex = r.zIndex),
          v &&
            !c &&
            v.add(function () {
              return function () {
                return ma(g);
              };
            }),
          c ? s : s.duration ? st.to(g.element, s) : null
        );
      }),
      (t.makeAbsolute = function (n, i) {
        return (n instanceof sn ? n : new sn(n, i)).makeAbsolute();
      }),
      (t.batch = function (n) {
        return n || (n = "default"), No[n] || (No[n] = new Y0(n));
      }),
      (t.killFlipsOf = function (n, i) {
        (n instanceof sn ? n.targets : gr(n)).forEach(function (r) {
          return r && kl(r._flip, i !== !1 ? 1 : 2);
        });
      }),
      (t.isFlipping = function (n) {
        var i = t.getByTarget(n);
        return !!i && i.isActive();
      }),
      (t.getByTarget = function (n) {
        return (Jr(n) || ha)._flip;
      }),
      (t.getElementState = function (n, i) {
        return new zi(Jr(n), i);
      }),
      (t.convertCoordinates = function (n, i, r) {
        var s = yn(i, !0, !0).multiply(yn(n));
        return r ? s.apply(r) : s;
      }),
      (t.register = function (n) {
        if (((Fn = typeof document < "u" && document.body), Fn)) {
          (st = n),
            xl(Fn),
            (gr = st.utils.toArray),
            (Ro = st.core.getStyleSaver);
          var i = st.utils.snap(0.1);
          Mn = function (s, a) {
            return i(parseFloat(s) + a);
          };
        }
      }),
      t
    );
  })();
vr.version = "3.13.0";
typeof window < "u" && window.gsap && window.gsap.registerPlugin(vr);
R.registerPlugin(vr);
const X0 = () => {
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
      const u = vr.getState([t, e, n, i, r, s, a, o, l], {
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
        vr.from(u, { duration: 1.6, ease: "expo.inOut", absoluteOnLeave: !0 });
    }
    a.addEventListener("click", c),
      a.addEventListener("click", () => {
        console.log("clicked");
      });
  },
  G0 = () => {
    X0(), console.log("seoFlip");
  },
  j0 = () => {
    $0(), ni(), vl(), ii(), G0(), ou(), Ri().add(() => ri(), "-=1");
  };
R.registerPlugin(xe);
const U0 = (t) => {
    const e = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
      window.innerWidth <= 768;
    let n = [],
      i,
      r;
    const s = () => {
        n.forEach((c) => {
          c && typeof c.revert == "function" && c.revert();
        }),
          (n = []),
          i && (i.kill(), (i = null)),
          document
            .querySelectorAll(
              ".move-text-main, .move-text-title, .move-text-info, .move-text-meta"
            )
            .forEach((c) => {
              c.parentNode &&
                (c.parentNode.insertBefore(c.firstChild, c), c.remove());
            });
      },
      a = async () => {
        const l = document.querySelector("[work-cms-hero='text']"),
          c = document.querySelector("[work-cms-hero='back-btn']"),
          u = document.querySelector("[work-cms-hero='line']"),
          d = document.querySelector("[work-cms-hero='info']"),
          f = document.querySelector("[work-cms-hero='info-title']"),
          h = document.querySelector("[work-cms-hero='info-text']"),
          m = document.querySelector("[work-cms-hero='info-meta']"),
          p = document.querySelectorAll("[work-cms-hero='tag']"),
          g = document.querySelectorAll("[work-cms-hero='visual']"),
          _ = document.querySelector("[work-cms-hero='bg'] img");
        l &&
          xe.create(l, {
            type: "chars, lines, words",
            autoSplit: !0,
            mask: "lines",
            linesClass: "work-cms-hero-text-line",
            tag: "div",
            onSplit(v) {
              xe.create(f, {
                type: "lines",
                autoSplit: !0,
                mask: "lines",
                linesClass: "work-cms-info-title-line",
                tag: "div",
                onSplit(y) {
                  xe.create(h, {
                    type: "lines",
                    autoSplit: !0,
                    mask: "lines",
                    linesClass: "work-cms-info-text-line",
                    tag: "div",
                    onSplit(b) {
                      xe.create(m, {
                        type: "lines",
                        autoSplit: !0,
                        mask: "lines",
                        linesClass: "work-cms-info-meta-line",
                        tag: "div",
                        onSplit(S) {
                          n.push(v, y, b, S),
                            v.lines.forEach((w) => {
                              const C = document.createElement("div");
                              C.classList.add("move-text-main"),
                                (C.style.overflow = "clip"),
                                (C.style.position = "relative"),
                                w.parentNode.insertBefore(C, w),
                                C.appendChild(w);
                            }),
                            y.lines.forEach((w) => {
                              const C = document.createElement("div");
                              C.classList.add("move-text-title"),
                                (C.style.overflow = "clip"),
                                (C.style.position = "relative"),
                                w.parentNode.insertBefore(C, w),
                                C.appendChild(w);
                            }),
                            b.lines.forEach((w) => {
                              const C = document.createElement("div");
                              C.classList.add("move-text-info"),
                                (C.style.overflow = "clip"),
                                (C.style.position = "relative"),
                                w.parentNode.insertBefore(C, w),
                                C.appendChild(w);
                            }),
                            S.lines.forEach((w) => {
                              const C = document.createElement("div");
                              C.classList.add("move-text-meta"),
                                (C.style.overflow = "clip"),
                                (C.style.position = "relative"),
                                w.parentNode.insertBefore(C, w),
                                C.appendChild(w);
                            });
                          const E = (w, C) => {
                            const A = w.querySelectorAll("span");
                            A.length &&
                              A.forEach((P) => {
                                const $ = document.createElement("div");
                                ($.style.overflow = "clip"),
                                  ($.style.position = "relative"),
                                  ($.style.paddingBottom = "3px"),
                                  P.parentNode.insertBefore($, P),
                                  $.appendChild(P);
                              });
                          };
                          return (
                            E(l),
                            E(f),
                            E(h),
                            E(m),
                            (i = R.timeline()),
                            R.set(v.chars, { opacity: 0, yPercent: 100 }),
                            R.set(c, { opacity: 0, yPercent: 100 }),
                            R.set(p, {
                              opacity: 0,
                              y: 50,
                              scale: 0.4,
                              transformOrigin: "center right",
                            }),
                            R.set(u, {
                              opacity: 0,
                              scaleX: 0,
                              transformOrigin: "center left",
                            }),
                            R.set(d, { opacity: 0, y: 50 }),
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
                            R.set(g, { y: 100, opacity: 0 }),
                            R.set(_, { scale: 1.4 }),
                            i.to(
                              v.chars,
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
                              _,
                              { scale: 1, duration: 2.5, ease: "expo.inOut" },
                              "-=2.5"
                            ),
                            i.to(
                              p,
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
                            i.to(u, { opacity: 1, duration: 0 }, "<"),
                            i.to(
                              u,
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
                              g,
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
      o = () => {
        e() ||
          (clearTimeout(r),
          (r = setTimeout(() => {
            s(),
              setTimeout(() => {
                a();
              }, 100);
          }, 250)));
      };
    a(), e() || window.addEventListener("resize", o);
  },
  K0 = () => {
    ni(), ii();
    const t = Ri();
    t.add(() => ri(), "-=1.4"), t.add(() => U0(), "-=1.4");
  },
  Z0 = {
    home: Mc,
    about: e0,
    work: _0,
    contact: m0,
    career: v0,
    "extra-page": Mc,
    service: k0,
    work_cms: K0,
    seo: j0,
  },
  Q0 = () => {
    const t = document.querySelector("[page-route]");
    if (!t) {
      console.log("No element with page-route attribute found");
      return;
    }
    const e = t.getAttribute("page-route"),
      n = Z0[e];
    n ? n() : console.log(`No specific script for route: ${e}`);
  },
  J0 = () => {
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
      .to(i, { x: "-100%", duration: 1, opacity: 0, ease: "expo.out" }, "-=1.4")
      .to(
        s,
        { y: "0%", duration: 1.2, opacity: 1, ease: "expo.out", stagger: 0.06 },
        "-=1"
      )
      .to(a, { y: "0%", opacity: 1, duration: 1.2, ease: "expo.out" }, "-=0.9")
      .to(
        l,
        { y: "0%", duration: 1.2, opacity: 1, ease: "expo.out", stagger: 0.1 },
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
    const d = 767;
    function f() {
      return window.innerWidth <= d;
    }
    window.addEventListener("resize", () => {
      t.getAttribute("hamburger-state") === "open" &&
        !f() &&
        (t.setAttribute("hamburger-state", "closed"), u.play(0));
    });
  },
  ev = () => {
    J0();
  };
class tv {
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
const nv = (t) => {
    const e = document.querySelector(".page_overlay"),
      n = document.querySelector("[page-overlay='text-wrap']"),
      i = document.querySelectorAll("[page-load='component']"),
      r = document.querySelectorAll("[page-load='wrap']"),
      s = document.querySelectorAll("[page-load='gradient']"),
      a = document.querySelectorAll("[page-load='text']");
    e && R.set(e, { clipPath: "inset(100% 0% 0% 0%)", pointerEvents: "none" }),
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
  iv = () => {
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
        e.addEventListener("click", async (s) => {
          s.preventDefault();
          const a = e.href,
            o = document.createElement("link");
          (o.rel = "prefetch"),
            (o.href = a),
            document.head.appendChild(o),
            await nv(),
            (window.location.href = a);
        });
    });
  };
R.registerPlugin(xe, G);
const rv = {
    lines: { duration: 1.8, stagger: 0.08 },
    words: { duration: 0.6, stagger: 0.06 },
    chars: { duration: 0.4, stagger: 0.01 },
  },
  sv = () => {
    const t = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
      window.innerWidth <= 768;
    let e = [],
      n;
    const i = () => {
        e.forEach((a) => {
          a && typeof a.revert == "function" && a.revert();
        }),
          (e = []),
          G.getAll().forEach((a) => a.kill());
      },
      r = () => {
        document.querySelectorAll("[split-text]").forEach((a) => {
          R.set(a, { autoAlpha: 1 });
          const o = a.getAttribute("split-text") || "lines",
            l =
              o === "lines"
                ? ["lines"]
                : o === "words"
                ? ["lines", "words"]
                : ["lines", "words", "chars"],
            c = xe.create(a, {
              type: l.join(", "),
              mask: "lines",
              autoSplit: !0,
              linesClass: "line",
              wordsClass: "word",
              charsClass: "letter",
              onSplit: function (u) {
                const d = u[o],
                  f = rv[o];
                return R.from(d, {
                  yPercent: 110,
                  duration: f.duration,
                  stagger: f.stagger,
                  ease: "expo.out",
                  scrollTrigger: {
                    trigger: a,
                    start: "clamp(top 80%)",
                    once: !0,
                  },
                });
              },
            });
          e.push(c);
        });
      },
      s = () => {
        t() ||
          (clearTimeout(n),
          (n = setTimeout(() => {
            i(),
              setTimeout(() => {
                r(), G.refresh();
              }, 100);
          }, 250)));
      };
    document.fonts.ready.then(() => {
      r(), t() || window.addEventListener("resize", s);
    });
  },
  av = () => {
    R.set(".cursor", { xPercent: -50, yPercent: -50 });
    let t = R.quickTo(".cursor", "x", { duration: 0.6, ease: "power3" }),
      e = R.quickTo(".cursor", "y", { duration: 0.6, ease: "power3" });
    window.addEventListener("mousemove", (n) => {
      t(n.clientX), e(n.clientY);
    });
  },
  ov = () => {
    av();
  },
  lv = () => {
    ev(), new tv(), Rd(), iv(), sv(), ov();
  };
function cv(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    Fo(t, e);
}
function Fo(t, e) {
  return (
    (Fo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Fo(t, e)
  );
}
var Vn,
  uv = function () {
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
})(Vn || (Vn = {}));
var Yc = Vn.off,
  dv = (function () {
    function t(n) {
      (this.t = void 0), (this.t = n);
    }
    (t.getLevel = function () {
      return Yc;
    }),
      (t.setLevel = function (n) {
        return (Yc = Vn[n]);
      });
    var e = t.prototype;
    return (
      (e.error = function () {
        this.i(console.error, Vn.error, [].slice.call(arguments));
      }),
      (e.warn = function () {
        this.i(console.warn, Vn.warning, [].slice.call(arguments));
      }),
      (e.info = function () {
        this.i(console.info, Vn.info, [].slice.call(arguments));
      }),
      (e.debug = function () {
        this.i(console.log, Vn.debug, [].slice.call(arguments));
      }),
      (e.i = function (n, i, r) {
        i <= t.getLevel() && n.apply(console, ["[" + this.t + "] "].concat(r));
      }),
      t
    );
  })();
function fv(t) {
  return (
    !!t &&
    (typeof t == "object" || typeof t == "function") &&
    typeof t.then == "function"
  );
}
function hv(t, e) {
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
          i || (fv(o) ? o.then(s, a) : s(o));
        });
      return r;
    }
  );
}
new ((function (t) {
  function e() {
    var i;
    return (
      ((i = t.call(this) || this).logger = new dv("@barba/core")),
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
  cv(e, t);
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
              return hv(o.fn, o.ctx).apply(void 0, [].slice.call(r, 1));
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
})(uv))();
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
R.registerPlugin(G);
const nf = () => {
  const t = navigator.userAgent,
    e = /iPad|iPhone|iPod/.test(t),
    n = /WebKit/.test(t),
    i = /Safari/.test(t) && !/Chrome/.test(t),
    r = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  return e && n && i && r;
};
let Vo = window.innerHeight;
const Ml = (t) => {
    (Math.abs(t - Vo) > 150 || !nf()) && (Vo = t);
  },
  pv = () => {
    if (!nf()) return;
    const t = () => {
      document.documentElement.style.setProperty(
        "--stable-vh",
        `${Vo * 0.01}px`
      );
    };
    t(),
      window.addEventListener("orientationchange", () => {
        setTimeout(() => {
          Ml(window.innerHeight), t();
        }, 500);
      });
  },
  rf = (t, e) => {
    let n;
    return function (...r) {
      const s = () => {
        clearTimeout(n), t(...r);
      };
      clearTimeout(n), (n = setTimeout(s, e));
    };
  },
  mv = rf(() => {
    const t = window.innerHeight;
    Ml(t);
    const e = Pi();
    e && e.resize(), G.refresh();
  }, 250),
  gv = () => {
    setTimeout(() => {
      const t = Pi();
      t && t.resize(), G.refresh();
    }, 500);
  },
  vv = () => {
    pv(),
      window.addEventListener("resize", mv),
      window.addEventListener("orientationchange", gv);
    let t = window.innerHeight,
      e = window.innerWidth;
    const n = rf(() => {
      const i = window.innerHeight,
        r = Math.abs(i - t) > 100,
        s = Math.abs(window.innerWidth - e) > 100;
      if (r || s) {
        Ml(i);
        const a = Pi();
        a && a.resize(), G.refresh(), (t = i), (e = window.innerWidth);
      }
    }, 100);
    window.addEventListener("resize", n),
      console.log(
        "ScrollTrigger global manager initialized with Lenis integration"
      );
  };
document.addEventListener("DOMContentLoaded", () => {
  vv(), lv(), Q0(), Rd();
});
