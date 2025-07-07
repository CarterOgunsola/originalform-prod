var gv = Object.defineProperty;
var vv = (Li, si, on) =>
  si in Li
    ? gv(Li, si, { enumerable: !0, configurable: !0, writable: !0, value: on })
    : (Li[si] = on);
var W = (Li, si, on) => vv(Li, typeof si != "symbol" ? si + "" : si, on);
(function () {
  "use strict";
  var Li = document.createElement("style");
  (Li.textContent = `@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA);font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-pointer-events{touch-action:pan-y}.swiper-pointer-events.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper:after{content:"";position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper:after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper:after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:"next"}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:50%;background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:#00000040;position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:#0000001a}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:#00000080;border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-next+.swiper-slide,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-right,.swiper-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:"";background:#000;position:absolute;inset:0;filter:blur(50px)}.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-right,.swiper-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-creative .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}
/*$vite$:1*/`),
    document.head.appendChild(Li);
  /*! @vimeo/player v2.26.0 | (c) 2025 Vimeo | MIT License | https://github.com/vimeo/player.js */ function si(
    t,
    e
  ) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e &&
        (n = n.filter(function (r) {
          return Object.getOwnPropertyDescriptor(t, r).enumerable;
        })),
        i.push.apply(i, n);
    }
    return i;
  }
  function on(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? si(Object(i), !0).forEach(function (n) {
            ys(t, n, i[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
        : si(Object(i)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(i, n));
          });
    }
    return t;
  }
  function dt() {
    dt = function () {
      return t;
    };
    var t = {},
      e = Object.prototype,
      i = e.hasOwnProperty,
      n =
        Object.defineProperty ||
        function (w, S, O) {
          w[S] = O.value;
        },
      r = typeof Symbol == "function" ? Symbol : {},
      s = r.iterator || "@@iterator",
      a = r.asyncIterator || "@@asyncIterator",
      o = r.toStringTag || "@@toStringTag";
    function l(w, S, O) {
      return (
        Object.defineProperty(w, S, {
          value: O,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        w[S]
      );
    }
    try {
      l({}, "");
    } catch {
      l = function (S, O, z) {
        return (S[O] = z);
      };
    }
    function c(w, S, O, z) {
      var A = S && S.prototype instanceof f ? S : f,
        L = Object.create(A.prototype),
        I = new $(z || []);
      return n(L, "_invoke", { value: x(w, O, I) }), L;
    }
    function u(w, S, O) {
      try {
        return { type: "normal", arg: w.call(S, O) };
      } catch (z) {
        return { type: "throw", arg: z };
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
      b = g && g(g(k([])));
    b && b !== e && i.call(b, s) && (p = b);
    var v = (m.prototype = f.prototype = Object.create(p));
    function y(w) {
      ["next", "throw", "return"].forEach(function (S) {
        l(w, S, function (O) {
          return this._invoke(S, O);
        });
      });
    }
    function _(w, S) {
      function O(A, L, I, B) {
        var P = u(w[A], w, L);
        if (P.type !== "throw") {
          var q = P.arg,
            G = q.value;
          return G && typeof G == "object" && i.call(G, "__await")
            ? S.resolve(G.__await).then(
                function (oe) {
                  O("next", oe, I, B);
                },
                function (oe) {
                  O("throw", oe, I, B);
                }
              )
            : S.resolve(G).then(
                function (oe) {
                  (q.value = oe), I(q);
                },
                function (oe) {
                  return O("throw", oe, I, B);
                }
              );
        }
        B(P.arg);
      }
      var z;
      n(this, "_invoke", {
        value: function (A, L) {
          function I() {
            return new S(function (B, P) {
              O(A, L, B, P);
            });
          }
          return (z = z ? z.then(I, I) : I());
        },
      });
    }
    function x(w, S, O) {
      var z = "suspendedStart";
      return function (A, L) {
        if (z === "executing") throw new Error("Generator is already running");
        if (z === "completed") {
          if (A === "throw") throw L;
          return M();
        }
        for (O.method = A, O.arg = L; ; ) {
          var I = O.delegate;
          if (I) {
            var B = T(I, O);
            if (B) {
              if (B === d) continue;
              return B;
            }
          }
          if (O.method === "next") O.sent = O._sent = O.arg;
          else if (O.method === "throw") {
            if (z === "suspendedStart") throw ((z = "completed"), O.arg);
            O.dispatchException(O.arg);
          } else O.method === "return" && O.abrupt("return", O.arg);
          z = "executing";
          var P = u(w, S, O);
          if (P.type === "normal") {
            if (((z = O.done ? "completed" : "suspendedYield"), P.arg === d))
              continue;
            return { value: P.arg, done: O.done };
          }
          P.type === "throw" &&
            ((z = "completed"), (O.method = "throw"), (O.arg = P.arg));
        }
      };
    }
    function T(w, S) {
      var O = S.method,
        z = w.iterator[O];
      if (z === void 0)
        return (
          (S.delegate = null),
          (O === "throw" &&
            w.iterator.return &&
            ((S.method = "return"),
            (S.arg = void 0),
            T(w, S),
            S.method === "throw")) ||
            (O !== "return" &&
              ((S.method = "throw"),
              (S.arg = new TypeError(
                "The iterator does not provide a '" + O + "' method"
              )))),
          d
        );
      var A = u(z, w.iterator, S.arg);
      if (A.type === "throw")
        return (S.method = "throw"), (S.arg = A.arg), (S.delegate = null), d;
      var L = A.arg;
      return L
        ? L.done
          ? ((S[w.resultName] = L.value),
            (S.next = w.nextLoc),
            S.method !== "return" && ((S.method = "next"), (S.arg = void 0)),
            (S.delegate = null),
            d)
          : L
        : ((S.method = "throw"),
          (S.arg = new TypeError("iterator result is not an object")),
          (S.delegate = null),
          d);
    }
    function E(w) {
      var S = { tryLoc: w[0] };
      1 in w && (S.catchLoc = w[1]),
        2 in w && ((S.finallyLoc = w[2]), (S.afterLoc = w[3])),
        this.tryEntries.push(S);
    }
    function C(w) {
      var S = w.completion || {};
      (S.type = "normal"), delete S.arg, (w.completion = S);
    }
    function $(w) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        w.forEach(E, this),
        this.reset(!0);
    }
    function k(w) {
      if (w) {
        var S = w[s];
        if (S) return S.call(w);
        if (typeof w.next == "function") return w;
        if (!isNaN(w.length)) {
          var O = -1,
            z = function A() {
              for (; ++O < w.length; )
                if (i.call(w, O)) return (A.value = w[O]), (A.done = !1), A;
              return (A.value = void 0), (A.done = !0), A;
            };
          return (z.next = z);
        }
      }
      return { next: M };
    }
    function M() {
      return { value: void 0, done: !0 };
    }
    return (
      (h.prototype = m),
      n(v, "constructor", { value: m, configurable: !0 }),
      n(m, "constructor", { value: h, configurable: !0 }),
      (h.displayName = l(m, o, "GeneratorFunction")),
      (t.isGeneratorFunction = function (w) {
        var S = typeof w == "function" && w.constructor;
        return (
          !!S && (S === h || (S.displayName || S.name) === "GeneratorFunction")
        );
      }),
      (t.mark = function (w) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(w, m)
            : ((w.__proto__ = m), l(w, o, "GeneratorFunction")),
          (w.prototype = Object.create(v)),
          w
        );
      }),
      (t.awrap = function (w) {
        return { __await: w };
      }),
      y(_.prototype),
      l(_.prototype, a, function () {
        return this;
      }),
      (t.AsyncIterator = _),
      (t.async = function (w, S, O, z, A) {
        A === void 0 && (A = Promise);
        var L = new _(c(w, S, O, z), A);
        return t.isGeneratorFunction(S)
          ? L
          : L.next().then(function (I) {
              return I.done ? I.value : L.next();
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
      (t.keys = function (w) {
        var S = Object(w),
          O = [];
        for (var z in S) O.push(z);
        return (
          O.reverse(),
          function A() {
            for (; O.length; ) {
              var L = O.pop();
              if (L in S) return (A.value = L), (A.done = !1), A;
            }
            return (A.done = !0), A;
          }
        );
      }),
      (t.values = k),
      ($.prototype = {
        constructor: $,
        reset: function (w) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = void 0),
            this.tryEntries.forEach(C),
            !w)
          )
            for (var S in this)
              S.charAt(0) === "t" &&
                i.call(this, S) &&
                !isNaN(+S.slice(1)) &&
                (this[S] = void 0);
        },
        stop: function () {
          this.done = !0;
          var w = this.tryEntries[0].completion;
          if (w.type === "throw") throw w.arg;
          return this.rval;
        },
        dispatchException: function (w) {
          if (this.done) throw w;
          var S = this;
          function O(P, q) {
            return (
              (L.type = "throw"),
              (L.arg = w),
              (S.next = P),
              q && ((S.method = "next"), (S.arg = void 0)),
              !!q
            );
          }
          for (var z = this.tryEntries.length - 1; z >= 0; --z) {
            var A = this.tryEntries[z],
              L = A.completion;
            if (A.tryLoc === "root") return O("end");
            if (A.tryLoc <= this.prev) {
              var I = i.call(A, "catchLoc"),
                B = i.call(A, "finallyLoc");
              if (I && B) {
                if (this.prev < A.catchLoc) return O(A.catchLoc, !0);
                if (this.prev < A.finallyLoc) return O(A.finallyLoc);
              } else if (I) {
                if (this.prev < A.catchLoc) return O(A.catchLoc, !0);
              } else {
                if (!B)
                  throw new Error("try statement without catch or finally");
                if (this.prev < A.finallyLoc) return O(A.finallyLoc);
              }
            }
          }
        },
        abrupt: function (w, S) {
          for (var O = this.tryEntries.length - 1; O >= 0; --O) {
            var z = this.tryEntries[O];
            if (
              z.tryLoc <= this.prev &&
              i.call(z, "finallyLoc") &&
              this.prev < z.finallyLoc
            ) {
              var A = z;
              break;
            }
          }
          A &&
            (w === "break" || w === "continue") &&
            A.tryLoc <= S &&
            S <= A.finallyLoc &&
            (A = null);
          var L = A ? A.completion : {};
          return (
            (L.type = w),
            (L.arg = S),
            A
              ? ((this.method = "next"), (this.next = A.finallyLoc), d)
              : this.complete(L)
          );
        },
        complete: function (w, S) {
          if (w.type === "throw") throw w.arg;
          return (
            w.type === "break" || w.type === "continue"
              ? (this.next = w.arg)
              : w.type === "return"
              ? ((this.rval = this.arg = w.arg),
                (this.method = "return"),
                (this.next = "end"))
              : w.type === "normal" && S && (this.next = S),
            d
          );
        },
        finish: function (w) {
          for (var S = this.tryEntries.length - 1; S >= 0; --S) {
            var O = this.tryEntries[S];
            if (O.finallyLoc === w)
              return this.complete(O.completion, O.afterLoc), C(O), d;
          }
        },
        catch: function (w) {
          for (var S = this.tryEntries.length - 1; S >= 0; --S) {
            var O = this.tryEntries[S];
            if (O.tryLoc === w) {
              var z = O.completion;
              if (z.type === "throw") {
                var A = z.arg;
                C(O);
              }
              return A;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (w, S, O) {
          return (
            (this.delegate = { iterator: k(w), resultName: S, nextLoc: O }),
            this.method === "next" && (this.arg = void 0),
            d
          );
        },
      }),
      t
    );
  }
  function zl(t, e, i, n, r, s, a) {
    try {
      var o = t[s](a),
        l = o.value;
    } catch (c) {
      i(c);
      return;
    }
    o.done ? e(l) : Promise.resolve(l).then(n, r);
  }
  function ln(t) {
    return function () {
      var e = this,
        i = arguments;
      return new Promise(function (n, r) {
        var s = t.apply(e, i);
        function a(l) {
          zl(s, n, r, a, o, "next", l);
        }
        function o(l) {
          zl(s, n, r, a, o, "throw", l);
        }
        a(void 0);
      });
    };
  }
  function Ll(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function af(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, Rl(n.key), n);
    }
  }
  function Il(t, e, i) {
    return (
      e && af(t.prototype, e),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  function ys(t, e, i) {
    return (
      (e = Rl(e)),
      e in t
        ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = i),
      t
    );
  }
  function of(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      e && Sr(t, e);
  }
  function xr(t) {
    return (
      (xr = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (i) {
            return i.__proto__ || Object.getPrototypeOf(i);
          }),
      xr(t)
    );
  }
  function Sr(t, e) {
    return (
      (Sr = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, r) {
            return (n.__proto__ = r), n;
          }),
      Sr(t, e)
    );
  }
  function Dl() {
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
  function bs(t, e, i) {
    return (
      Dl()
        ? (bs = Reflect.construct.bind())
        : (bs = function (r, s, a) {
            var o = [null];
            o.push.apply(o, s);
            var l = Function.bind.apply(r, o),
              c = new l();
            return a && Sr(c, a.prototype), c;
          }),
      bs.apply(null, arguments)
    );
  }
  function lf(t) {
    return Function.toString.call(t).indexOf("[native code]") !== -1;
  }
  function Aa(t) {
    var e = typeof Map == "function" ? new Map() : void 0;
    return (
      (Aa = function (n) {
        if (n === null || !lf(n)) return n;
        if (typeof n != "function")
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (typeof e < "u") {
          if (e.has(n)) return e.get(n);
          e.set(n, r);
        }
        function r() {
          return bs(n, arguments, xr(this).constructor);
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
          Sr(r, n)
        );
      }),
      Aa(t)
    );
  }
  function _s(t) {
    if (t === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function cf(t, e) {
    if (e && (typeof e == "object" || typeof e == "function")) return e;
    if (e !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return _s(t);
  }
  function uf(t) {
    var e = Dl();
    return function () {
      var n = xr(t),
        r;
      if (e) {
        var s = xr(this).constructor;
        r = Reflect.construct(n, arguments, s);
      } else r = n.apply(this, arguments);
      return cf(this, r);
    };
  }
  function df(t, e) {
    if (typeof t != "object" || t === null) return t;
    var i = t[Symbol.toPrimitive];
    if (i !== void 0) {
      var n = i.call(t, e);
      if (typeof n != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(t);
  }
  function Rl(t) {
    var e = df(t, "string");
    return typeof e == "symbol" ? e : String(e);
  }
  var Nl =
    typeof global < "u" && {}.toString.call(global) === "[object global]";
  function Bl(t, e) {
    return t.indexOf(e.toLowerCase()) === 0
      ? t
      : ""
          .concat(e.toLowerCase())
          .concat(t.substr(0, 1).toUpperCase())
          .concat(t.substr(1));
  }
  function ff(t) {
    return !!(
      t &&
      t.nodeType === 1 &&
      "nodeName" in t &&
      t.ownerDocument &&
      t.ownerDocument.defaultView
    );
  }
  function hf(t) {
    return !isNaN(parseFloat(t)) && isFinite(t) && Math.floor(t) == t;
  }
  function cn(t) {
    return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(
      t
    );
  }
  function Fl(t) {
    var e =
      /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
    return e.test(t);
  }
  function pf(t) {
    for (
      var e = (t || "").match(/^(?:https?:)?(?:\/\/)?([^/?]+)/),
        i = ((e && e[1]) || "").replace("player.", ""),
        n = [".videoji.hk", ".vimeo.work", ".videoji.cn"],
        r = 0,
        s = n;
      r < s.length;
      r++
    ) {
      var a = s[r];
      if (i.endsWith(a)) return i;
    }
    return "vimeo.com";
  }
  function Vl() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      e = t.id,
      i = t.url,
      n = e || i;
    if (!n)
      throw new Error(
        "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
      );
    if (hf(n)) return "https://vimeo.com/".concat(n);
    if (cn(n)) return n.replace("http:", "https:");
    throw e
      ? new TypeError("“".concat(e, "” is not a valid video id."))
      : new TypeError("“".concat(n, "” is not a vimeo.com url."));
  }
  var ql = function (e, i, n) {
      var r =
          arguments.length > 3 && arguments[3] !== void 0
            ? arguments[3]
            : "addEventListener",
        s =
          arguments.length > 4 && arguments[4] !== void 0
            ? arguments[4]
            : "removeEventListener",
        a = typeof i == "string" ? [i] : i;
      return (
        a.forEach(function (o) {
          e[r](o, n);
        }),
        {
          cancel: function () {
            return a.forEach(function (l) {
              return e[s](l, n);
            });
          },
        }
      );
    },
    mf = typeof Array.prototype.indexOf < "u",
    gf = typeof window < "u" && typeof window.postMessage < "u";
  if (!Nl && (!mf || !gf))
    throw new Error(
      "Sorry, the Vimeo Player API is not available in this browser."
    );
  var Vn =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
  function vf(t, e) {
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
      i =
        Object.defineProperty &&
        (function () {
          try {
            return Object.defineProperty({}, "x", { value: 1 }).x === 1;
          } catch {}
        })(),
      n = function (s, a, o) {
        i
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
        if ((n(this, "_id", o("_WeakMap")), arguments.length > 0))
          throw new TypeError("WeakMap iterable is not supported");
      }
      n(s.prototype, "delete", function (c) {
        if ((a(this, "delete"), !r(c))) return !1;
        var u = c[this._id];
        return u && u[0] === c ? (delete c[this._id], !0) : !1;
      }),
        n(s.prototype, "get", function (c) {
          if ((a(this, "get"), !!r(c))) {
            var u = c[this._id];
            if (u && u[0] === c) return u[1];
          }
        }),
        n(s.prototype, "has", function (c) {
          if ((a(this, "has"), !r(c))) return !1;
          var u = c[this._id];
          return !!(u && u[0] === c);
        }),
        n(s.prototype, "set", function (c, u) {
          if ((a(this, "set"), !r(c)))
            throw new TypeError("Invalid value used as weak map key");
          var d = c[this._id];
          return d && d[0] === c
            ? ((d[1] = u), this)
            : (n(c, this._id, [c, u]), this);
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
      return n(s, "_polyfill", !0), s;
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
      : Vn
  );
  var Ft = vf(function (t) {
      /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/ (function (i, n, r) {
        (n[i] = n[i] || r()), t.exports && (t.exports = n[i]);
      })("Promise", Vn, function () {
        var i,
          n,
          r,
          s = Object.prototype.toString,
          a =
            typeof setImmediate < "u"
              ? function (y) {
                  return setImmediate(y);
                }
              : setTimeout;
        try {
          i = function (y, _, x, T) {
            return Object.defineProperty(y, _, {
              value: x,
              writable: !0,
              configurable: T !== !1,
            });
          };
        } catch {
          i = function (_, x, T) {
            return (_[x] = T), _;
          };
        }
        r = (function () {
          var y, _, x;
          function T(E, C) {
            (this.fn = E), (this.self = C), (this.next = void 0);
          }
          return {
            add: function (C, $) {
              (x = new T(C, $)),
                _ ? (_.next = x) : (y = x),
                (_ = x),
                (x = void 0);
            },
            drain: function () {
              var C = y;
              for (y = _ = n = void 0; C; ) C.fn.call(C.self), (C = C.next);
            },
          };
        })();
        function o(v, y) {
          r.add(v, y), n || (n = a(r.drain));
        }
        function l(v) {
          var y,
            _ = typeof v;
          return (
            v != null && (_ == "object" || _ == "function") && (y = v.then),
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
        function u(v, y, _) {
          var x, T;
          try {
            y === !1
              ? _.reject(v.msg)
              : (y === !0 ? (x = v.msg) : (x = y.call(void 0, v.msg)),
                x === _.promise
                  ? _.reject(TypeError("Promise-chain cycle"))
                  : (T = l(x))
                  ? T.call(x, _.resolve, _.reject)
                  : _.resolve(x));
          } catch (E) {
            _.reject(E);
          }
        }
        function d(v) {
          var y,
            _ = this;
          if (!_.triggered) {
            (_.triggered = !0), _.def && (_ = _.def);
            try {
              (y = l(v))
                ? o(function () {
                    var x = new m(_);
                    try {
                      y.call(
                        v,
                        function () {
                          d.apply(x, arguments);
                        },
                        function () {
                          f.apply(x, arguments);
                        }
                      );
                    } catch (T) {
                      f.call(x, T);
                    }
                  })
                : ((_.msg = v), (_.state = 1), _.chain.length > 0 && o(c, _));
            } catch (x) {
              f.call(new m(_), x);
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
        function h(v, y, _, x) {
          for (var T = 0; T < y.length; T++)
            (function (C) {
              v.resolve(y[C]).then(function (k) {
                _(C, k);
              }, x);
            })(T);
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
          (this.then = function (x, T) {
            var E = {
              success: typeof x == "function" ? x : !0,
              failure: typeof T == "function" ? T : !1,
            };
            return (
              (E.promise = new this.constructor(function ($, k) {
                if (typeof $ != "function" || typeof k != "function")
                  throw TypeError("Not a function");
                (E.resolve = $), (E.reject = k);
              })),
              y.chain.push(E),
              y.state !== 0 && o(c, y),
              E.promise
            );
          }),
            (this.catch = function (x) {
              return this.then(void 0, x);
            });
          try {
            v.call(
              void 0,
              function (x) {
                d.call(y, x);
              },
              function (x) {
                f.call(y, x);
              }
            );
          } catch (_) {
            f.call(y, _);
          }
        }
        var b = i({}, "constructor", g, !1);
        return (
          (g.prototype = b),
          i(b, "__NPO__", 0, !1),
          i(g, "resolve", function (y) {
            var _ = this;
            return y && typeof y == "object" && y.__NPO__ === 1
              ? y
              : new _(function (T, E) {
                  if (typeof T != "function" || typeof E != "function")
                    throw TypeError("Not a function");
                  T(y);
                });
          }),
          i(g, "reject", function (y) {
            return new this(function (x, T) {
              if (typeof x != "function" || typeof T != "function")
                throw TypeError("Not a function");
              T(y);
            });
          }),
          i(g, "all", function (y) {
            var _ = this;
            return s.call(y) != "[object Array]"
              ? _.reject(TypeError("Not an array"))
              : y.length === 0
              ? _.resolve([])
              : new _(function (T, E) {
                  if (typeof T != "function" || typeof E != "function")
                    throw TypeError("Not a function");
                  var C = y.length,
                    $ = Array(C),
                    k = 0;
                  h(
                    _,
                    y,
                    function (w, S) {
                      ($[w] = S), ++k === C && T($);
                    },
                    E
                  );
                });
          }),
          i(g, "race", function (y) {
            var _ = this;
            return s.call(y) != "[object Array]"
              ? _.reject(TypeError("Not an array"))
              : new _(function (T, E) {
                  if (typeof T != "function" || typeof E != "function")
                    throw TypeError("Not a function");
                  h(
                    _,
                    y,
                    function ($, k) {
                      T(k);
                    },
                    E
                  );
                });
          }),
          g
        );
      });
    }),
    bi = new WeakMap();
  function Tr(t, e, i) {
    var n = bi.get(t.element) || {};
    e in n || (n[e] = []), n[e].push(i), bi.set(t.element, n);
  }
  function ws(t, e) {
    var i = bi.get(t.element) || {};
    return i[e] || [];
  }
  function xs(t, e, i) {
    var n = bi.get(t.element) || {};
    if (!n[e]) return !0;
    if (!i) return (n[e] = []), bi.set(t.element, n), !0;
    var r = n[e].indexOf(i);
    return (
      r !== -1 && n[e].splice(r, 1),
      bi.set(t.element, n),
      n[e] && n[e].length === 0
    );
  }
  function yf(t, e) {
    var i = ws(t, e);
    if (i.length < 1) return !1;
    var n = i.shift();
    return xs(t, e, n), n;
  }
  function bf(t, e) {
    var i = bi.get(t);
    bi.set(e, i), bi.delete(t);
  }
  function Ss(t) {
    if (typeof t == "string")
      try {
        t = JSON.parse(t);
      } catch (e) {
        return console.warn(e), {};
      }
    return t;
  }
  function un(t, e, i) {
    if (!(!t.element.contentWindow || !t.element.contentWindow.postMessage)) {
      var n = { method: e };
      i !== void 0 && (n.value = i);
      var r = parseFloat(
        navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1")
      );
      r >= 8 && r < 10 && (n = JSON.stringify(n)),
        t.element.contentWindow.postMessage(n, t.origin);
    }
  }
  function _f(t, e) {
    e = Ss(e);
    var i = [],
      n;
    if (e.event) {
      if (e.event === "error") {
        var r = ws(t, e.data.method);
        r.forEach(function (a) {
          var o = new Error(e.data.message);
          (o.name = e.data.name), a.reject(o), xs(t, e.data.method, a);
        });
      }
      (i = ws(t, "event:".concat(e.event))), (n = e.data);
    } else if (e.method) {
      var s = yf(t, e.method);
      s && (i.push(s), (n = e.value));
    }
    i.forEach(function (a) {
      try {
        if (typeof a == "function") {
          a.call(t, n);
          return;
        }
        a.resolve(n);
      } catch {}
    });
  }
  var wf = [
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
  function Hl(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return wf.reduce(function (i, n) {
      var r = t.getAttribute("data-vimeo-".concat(n));
      return (r || r === "") && (i[n] = r === "" ? 1 : r), i;
    }, e);
  }
  function Pa(t, e) {
    var i = t.html;
    if (!e) throw new TypeError("An element must be provided");
    if (e.getAttribute("data-vimeo-initialized") !== null)
      return e.querySelector("iframe");
    var n = document.createElement("div");
    return (
      (n.innerHTML = i),
      e.appendChild(n.firstChild),
      e.setAttribute("data-vimeo-initialized", "true"),
      e.querySelector("iframe")
    );
  }
  function Yl(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      i = arguments.length > 2 ? arguments[2] : void 0;
    return new Promise(function (n, r) {
      if (!cn(t))
        throw new TypeError("“".concat(t, "” is not a vimeo.com url."));
      var s = pf(t),
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
              Pa(c, i), r(new Error("“".concat(t, "” is not embeddable.")));
              return;
            }
            n(c);
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
  function xf() {
    var t =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : document,
      e = [].slice.call(
        t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")
      ),
      i = function (r) {
        "console" in window &&
          console.error &&
          console.error("There was an error creating an embed: ".concat(r));
      };
    e.forEach(function (n) {
      try {
        if (n.getAttribute("data-vimeo-defer") !== null) return;
        var r = Hl(n),
          s = Vl(r);
        Yl(s, r, n)
          .then(function (a) {
            return Pa(a, n);
          })
          .catch(i);
      } catch (a) {
        i(a);
      }
    });
  }
  function Sf() {
    var t =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoPlayerResizeEmbeds_) {
      window.VimeoPlayerResizeEmbeds_ = !0;
      var e = function (n) {
        if (cn(n.origin) && !(!n.data || n.data.event !== "spacechange")) {
          for (var r = t.querySelectorAll("iframe"), s = 0; s < r.length; s++)
            if (r[s].contentWindow === n.source) {
              var a = r[s].parentElement;
              a.style.paddingBottom = "".concat(n.data.data[0].bottom, "px");
              break;
            }
        }
      };
      window.addEventListener("message", e);
    }
  }
  function Tf() {
    var t =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoSeoMetadataAppended) {
      window.VimeoSeoMetadataAppended = !0;
      var e = function (n) {
        if (cn(n.origin)) {
          var r = Ss(n.data);
          if (!(!r || r.event !== "ready"))
            for (
              var s = t.querySelectorAll("iframe"), a = 0;
              a < s.length;
              a++
            ) {
              var o = s[a],
                l = o.contentWindow === n.source;
              if (Fl(o.src) && l) {
                var c = new Er(o);
                c.callMethod("appendVideoMetadata", window.location.href);
              }
            }
        }
      };
      window.addEventListener("message", e);
    }
  }
  function Ef() {
    var t =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoCheckedUrlTimeParam) {
      window.VimeoCheckedUrlTimeParam = !0;
      var e = function (r) {
          "console" in window &&
            console.error &&
            console.error("There was an error getting video Id: ".concat(r));
        },
        i = function (r) {
          if (cn(r.origin)) {
            var s = Ss(r.data);
            if (!(!s || s.event !== "ready"))
              for (
                var a = t.querySelectorAll("iframe"),
                  o = function () {
                    var u = a[l],
                      d = u.contentWindow === r.source;
                    if (Fl(u.src) && d) {
                      var f = new Er(u);
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
      window.addEventListener("message", i);
    }
  }
  function Cf() {
    var t = (function () {
        for (
          var n,
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
          if (((n = r[s]), n && n[1] in document)) {
            for (s = 0; s < n.length; s++) o[r[0][s]] = n[s];
            return o;
          }
        return !1;
      })(),
      e = {
        fullscreenchange: t.fullscreenchange,
        fullscreenerror: t.fullscreenerror,
      },
      i = {
        request: function (r) {
          return new Promise(function (s, a) {
            var o = function c() {
              i.off("fullscreenchange", c), s();
            };
            i.on("fullscreenchange", o), (r = r || document.documentElement);
            var l = r[t.requestFullscreen]();
            l instanceof Promise && l.then(o).catch(a);
          });
        },
        exit: function () {
          return new Promise(function (r, s) {
            if (!i.isFullscreen) {
              r();
              return;
            }
            var a = function l() {
              i.off("fullscreenchange", l), r();
            };
            i.on("fullscreenchange", a);
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
      Object.defineProperties(i, {
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
      i
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
    Af = (function (t) {
      of(i, t);
      var e = uf(i);
      function i(n, r) {
        var s,
          a =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          o = arguments.length > 3 ? arguments[3] : void 0;
        return (
          Ll(this, i),
          (s = e.call(this)),
          ys(_s(s), "logger", void 0),
          ys(_s(s), "speedAdjustment", 0),
          ys(
            _s(s),
            "adjustSpeed",
            (function () {
              var l = ln(
                dt().mark(function c(u, d) {
                  var f;
                  return dt().wrap(function (m) {
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
          s.init(r, n, on(on({}, kf), a)),
          s
        );
      }
      return (
        Il(i, [
          {
            key: "disconnect",
            value: function () {
              this.dispatchEvent(new Event("disconnect"));
            },
          },
          {
            key: "init",
            value: (function () {
              var n = ln(
                dt().mark(function s(a, o, l) {
                  var c = this,
                    u,
                    d,
                    f;
                  return dt().wrap(
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
                            (u = ql(a, "change", function () {
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
                            (f = ql(
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
                return n.apply(this, arguments);
              }
              return r;
            })(),
          },
          {
            key: "updateTimingObject",
            value: (function () {
              var n = ln(
                dt().mark(function s(a, o) {
                  return dt().wrap(function (c) {
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
                return n.apply(this, arguments);
              }
              return r;
            })(),
          },
          {
            key: "updatePlayer",
            value: (function () {
              var n = ln(
                dt().mark(function s(a, o, l) {
                  var c, u, d;
                  return dt().wrap(
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
                                  var m = ln(
                                    dt().mark(function p(g) {
                                      return dt().wrap(function (v) {
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
                return n.apply(this, arguments);
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
                  var g = ln(
                    dt().mark(function b() {
                      var v, y, _, x, T;
                      return dt().wrap(function (C) {
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
                                (_ = y / f),
                                (x = d),
                                (T = _ < x ? (x - _) / 2 : x),
                                (C.next = 28),
                                o.adjustSpeed(s, T * Math.sign(v))
                              );
                            case 28:
                              o.log("Resync by playbackRate");
                            case 29:
                            case "end":
                              return C.stop();
                          }
                      }, b);
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
        i
      );
    })(Aa(EventTarget)),
    qn = new WeakMap(),
    Ma = new WeakMap(),
    _t = {},
    Er = (function () {
      function t(e) {
        var i = this,
          n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (
          (Ll(this, t),
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
          !ff(e))
        )
          throw new TypeError(
            "You must pass either a valid element or a valid id."
          );
        if (e.nodeName !== "IFRAME") {
          var r = e.querySelector("iframe");
          r && (e = r);
        }
        if (e.nodeName === "IFRAME" && !cn(e.getAttribute("src") || ""))
          throw new Error("The player element passed isn’t a Vimeo embed.");
        if (qn.has(e)) return qn.get(e);
        (this._window = e.ownerDocument.defaultView),
          (this.element = e),
          (this.origin = "*");
        var s = new Ft(function (o, l) {
          if (
            ((i._onMessage = function (d) {
              if (!(!cn(d.origin) || i.element.contentWindow !== d.source)) {
                i.origin === "*" && (i.origin = d.origin);
                var f = Ss(d.data),
                  h = f && f.event === "error",
                  m = h && f.data && f.data.method === "ready";
                if (m) {
                  var p = new Error(f.data.message);
                  (p.name = f.data.name), l(p);
                  return;
                }
                var g = f && f.event === "ready",
                  b = f && f.method === "ping";
                if (g || b) {
                  i.element.setAttribute("data-ready", "true"), o();
                  return;
                }
                _f(i, f);
              }
            }),
            i._window.addEventListener("message", i._onMessage),
            i.element.nodeName !== "IFRAME")
          ) {
            var c = Hl(e, n),
              u = Vl(c);
            Yl(u, c, e)
              .then(function (d) {
                var f = Pa(d, e);
                return (
                  (i.element = f),
                  (i._originalElement = e),
                  bf(e, f),
                  qn.set(i.element, i),
                  d
                );
              })
              .catch(l);
          }
        });
        if (
          (Ma.set(this, s),
          qn.set(this.element, this),
          this.element.nodeName === "IFRAME" && un(this, "ping"),
          _t.isEnabled)
        ) {
          var a = function () {
            return _t.exit();
          };
          (this.fullscreenchangeHandler = function () {
            _t.isFullscreen
              ? Tr(i, "event:exitFullscreen", a)
              : xs(i, "event:exitFullscreen", a),
              i.ready().then(function () {
                un(i, "fullscreenchange", _t.isFullscreen);
              });
          }),
            _t.on("fullscreenchange", this.fullscreenchangeHandler);
        }
        return this;
      }
      return (
        Il(t, [
          {
            key: "callMethod",
            value: function (i) {
              var n = this,
                r =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
              return new Ft(function (s, a) {
                return n
                  .ready()
                  .then(function () {
                    Tr(n, i, { resolve: s, reject: a }), un(n, i, r);
                  })
                  .catch(a);
              });
            },
          },
          {
            key: "get",
            value: function (i) {
              var n = this;
              return new Ft(function (r, s) {
                return (
                  (i = Bl(i, "get")),
                  n
                    .ready()
                    .then(function () {
                      Tr(n, i, { resolve: r, reject: s }), un(n, i);
                    })
                    .catch(s)
                );
              });
            },
          },
          {
            key: "set",
            value: function (i, n) {
              var r = this;
              return new Ft(function (s, a) {
                if (((i = Bl(i, "set")), n == null))
                  throw new TypeError("There must be a value to set.");
                return r
                  .ready()
                  .then(function () {
                    Tr(r, i, { resolve: s, reject: a }), un(r, i, n);
                  })
                  .catch(a);
              });
            },
          },
          {
            key: "on",
            value: function (i, n) {
              if (!i) throw new TypeError("You must pass an event name.");
              if (!n) throw new TypeError("You must pass a callback function.");
              if (typeof n != "function")
                throw new TypeError("The callback must be a function.");
              var r = ws(this, "event:".concat(i));
              r.length === 0 &&
                this.callMethod("addEventListener", i).catch(function () {}),
                Tr(this, "event:".concat(i), n);
            },
          },
          {
            key: "off",
            value: function (i, n) {
              if (!i) throw new TypeError("You must pass an event name.");
              if (n && typeof n != "function")
                throw new TypeError("The callback must be a function.");
              var r = xs(this, "event:".concat(i), n);
              r &&
                this.callMethod("removeEventListener", i).catch(function (
                  s
                ) {});
            },
          },
          {
            key: "loadVideo",
            value: function (i) {
              return this.callMethod("loadVideo", i);
            },
          },
          {
            key: "ready",
            value: function () {
              var i =
                Ma.get(this) ||
                new Ft(function (n, r) {
                  r(new Error("Unknown player. Probably unloaded."));
                });
              return Ft.resolve(i);
            },
          },
          {
            key: "addCuePoint",
            value: function (i) {
              var n =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
              return this.callMethod("addCuePoint", { time: i, data: n });
            },
          },
          {
            key: "removeCuePoint",
            value: function (i) {
              return this.callMethod("removeCuePoint", i);
            },
          },
          {
            key: "enableTextTrack",
            value: function (i, n) {
              if (!i) throw new TypeError("You must pass a language.");
              return this.callMethod("enableTextTrack", {
                language: i,
                kind: n,
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
                ? Ft.resolve(_t.isFullscreen)
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
              var i = this;
              return new Ft(function (n) {
                if (
                  (Ma.delete(i),
                  qn.delete(i.element),
                  i._originalElement &&
                    (qn.delete(i._originalElement),
                    i._originalElement.removeAttribute(
                      "data-vimeo-initialized"
                    )),
                  i.element &&
                    i.element.nodeName === "IFRAME" &&
                    i.element.parentNode &&
                    (i.element.parentNode.parentNode &&
                    i._originalElement &&
                    i._originalElement !== i.element.parentNode
                      ? i.element.parentNode.parentNode.removeChild(
                          i.element.parentNode
                        )
                      : i.element.parentNode.removeChild(i.element)),
                  i.element &&
                    i.element.nodeName === "DIV" &&
                    i.element.parentNode)
                ) {
                  i.element.removeAttribute("data-vimeo-initialized");
                  var r = i.element.querySelector("iframe");
                  r &&
                    r.parentNode &&
                    (r.parentNode.parentNode &&
                    i._originalElement &&
                    i._originalElement !== r.parentNode
                      ? r.parentNode.parentNode.removeChild(r.parentNode)
                      : r.parentNode.removeChild(r));
                }
                i._window.removeEventListener("message", i._onMessage),
                  _t.isEnabled &&
                    _t.off("fullscreenchange", i.fullscreenchangeHandler),
                  n();
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
            value: function (i) {
              return this.set("autopause", i);
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
            value: function (i) {
              return this.set("cameraProps", i);
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
              return Ft.all([
                this.get("colorOne"),
                this.get("colorTwo"),
                this.get("colorThree"),
                this.get("colorFour"),
              ]);
            },
          },
          {
            key: "setColor",
            value: function (i) {
              return this.set("color", i);
            },
          },
          {
            key: "setColors",
            value: function (i) {
              if (!Array.isArray(i))
                return new Ft(function (s, a) {
                  return a(new TypeError("Argument must be an array."));
                });
              var n = new Ft(function (s) {
                  return s(null);
                }),
                r = [
                  i[0] ? this.set("colorOne", i[0]) : n,
                  i[1] ? this.set("colorTwo", i[1]) : n,
                  i[2] ? this.set("colorThree", i[2]) : n,
                  i[3] ? this.set("colorFour", i[3]) : n,
                ];
              return Ft.all(r);
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
            value: function (i) {
              return this.set("currentTime", i);
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
            value: function (i) {
              return this.set("loop", i);
            },
          },
          {
            key: "setMuted",
            value: function (i) {
              return this.set("muted", i);
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
            value: function (i) {
              return this.set("playbackRate", i);
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
            value: function (i) {
              return this.set("quality", i);
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
            value: function (i) {
              return this.set("volume", i);
            },
          },
          {
            key: "setTimingSrc",
            value: (function () {
              var e = ln(
                dt().mark(function n(r, s) {
                  var a = this,
                    o;
                  return dt().wrap(
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
                              (o = new Af(this, r, s)),
                              un(this, "notifyTimingObjectConnect"),
                              o.addEventListener("disconnect", function () {
                                return un(a, "notifyTimingObjectDisconnect");
                              }),
                              c.abrupt("return", o)
                            );
                          case 8:
                          case "end":
                            return c.stop();
                        }
                    },
                    n,
                    this
                  );
                })
              );
              function i(n, r) {
                return e.apply(this, arguments);
              }
              return i;
            })(),
          },
        ]),
        t
      );
    })();
  Nl || ((_t = Cf()), xf(), Sf(), Tf(), Ef());
  class Pf {
    constructor() {
      typeof Er < "u"
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
      document.querySelectorAll("[data-vimeo-player-init]").forEach((i) => {
        const n = i.getAttribute("data-vimeo-active-video-id"),
          r = i.getAttribute("data-vimeo-video-id-mob"),
          s = i.getAttribute("data-vimeo-video-id"),
          a = this.shouldUseMobileVideo(),
          o = a && r ? r : s;
        if (o && n !== o) {
          console.log(
            `Switching from ${n} to ${o} (${a ? "mobile" : "desktop"} video)`
          );
          const l = i.getAttribute("id"),
            c = this.players.get(l);
          if (c) {
            let u = i.getAttribute("data-vimeo-playing") === "true",
              d = 0,
              f = i.getAttribute("data-vimeo-muted") === "true";
            c.getCurrentTime()
              .then((h) => {
                (d = h),
                  c.unload(),
                  this.players.delete(l),
                  this.switchVideo(i, o, {
                    wasPlaying: u,
                    currentTime: d,
                    isMuted: f,
                  });
              })
              .catch(() => {
                c.unload(),
                  this.players.delete(l),
                  this.switchVideo(i, o, {
                    wasPlaying: u,
                    currentTime: 0,
                    isMuted: f,
                  });
              });
          }
        }
      });
    }
    switchVideo(e, i, n = {}) {
      const r = e.querySelector("iframe");
      if (!r) return;
      const s = `https://player.vimeo.com/video/${i}?api=1&background=1&autoplay=0&loop=0&muted=1`;
      r.setAttribute("src", s),
        e.setAttribute("data-vimeo-active-video-id", i),
        setTimeout(() => {
          this.initSinglePlayer(e, n);
        }, 500);
    }
    initSinglePlayer(e, i = {}) {
      const n = e.querySelector("iframe");
      if (n)
        try {
          const r = new Er(n),
            s = e.getAttribute("id");
          this.players.set(s, r),
            r.ready().then(() => {
              i.currentTime && r.setCurrentTime(i.currentTime),
                i.isMuted !== void 0 && r.setVolume(i.isMuted ? 0 : 1),
                i.wasPlaying &&
                  (r.play(), e.setAttribute("data-vimeo-playing", "true"));
            }),
            this.setupPlayerControls(e, r);
        } catch (r) {
          console.error("Error reinitializing Vimeo player:", r);
        }
    }
    initVimeoPlayer() {
      document.querySelectorAll("[data-vimeo-player-init]").forEach((i, n) => {
        try {
          const r = this.shouldUseMobileVideo(),
            s = i.getAttribute("data-vimeo-video-id-mob"),
            a = i.getAttribute("data-vimeo-video-id"),
            o = r && s ? s : a;
          if (!o) {
            console.error(
              "No video ID found for",
              r ? "mobile" : "desktop",
              "device"
            );
            return;
          }
          console.log(
            `Loading ${r && s ? "mobile" : "desktop"} video ID: ${o}`
          );
          const l = i.querySelector("iframe");
          if (!l) {
            console.error("No iframe found in vimeo player element", i);
            return;
          }
          const c = `https://player.vimeo.com/video/${o}?api=1&background=1&autoplay=0&loop=0&muted=1`;
          l.setAttribute("src", c),
            i.setAttribute("data-vimeo-active-video-id", o);
          const u = "vimeo-player-index-" + n;
          i.setAttribute("id", u);
          const d = new Er(l);
          this.players.set(u, d), this.setupPlayerControls(i, d);
        } catch (r) {
          console.error("Error initializing Vimeo player:", r);
        }
      });
    }
    setupPlayerControls(e, i) {
      const n = e.id;
      if (
        (e.getAttribute("data-vimeo-update-size") === "true" &&
          i.getVideoWidth().then(function (_) {
            i.getVideoHeight().then(function (x) {
              const T = e.querySelector(".vimeo-player__before");
              T && (T.style.paddingTop = (x / _) * 100 + "%");
            });
          }),
        i.on("play", function () {
          e.setAttribute("data-vimeo-loaded", "true");
        }),
        e.getAttribute("data-vimeo-autoplay") === "false")
      )
        i.setVolume(1), i.pause();
      else if (
        (i.setVolume(0),
        e.setAttribute("data-vimeo-muted", "true"),
        e.getAttribute("data-vimeo-paused-by-user") === "false")
      ) {
        const _ = () => {
          const x = e.getBoundingClientRect();
          x.top < window.innerHeight && x.bottom > 0 ? r() : s();
        };
        _(), window.addEventListener("scroll", _);
      }
      const r = () => {
          e.setAttribute("data-vimeo-activated", "true"),
            e.setAttribute("data-vimeo-playing", "true"),
            i.play();
        },
        s = () => {
          e.setAttribute("data-vimeo-playing", "false"), i.pause();
        },
        a = e.querySelector('[data-vimeo-control="play"]');
      a &&
        a.addEventListener("click", function () {
          i.setVolume(0),
            r(),
            e.getAttribute("data-vimeo-muted") === "true"
              ? i.setVolume(0)
              : i.setVolume(1);
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
            ? (i.setVolume(0), e.setAttribute("data-vimeo-muted", "true"))
            : (i.setVolume(1), e.setAttribute("data-vimeo-muted", "false"));
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
            const _ = document.getElementById(n);
            if (!_) return;
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
                  _.requestFullscreen ||
                  _.webkitRequestFullscreen ||
                  _.mozRequestFullScreen ||
                  _.msRequestFullscreen
                ).call(_));
          });
      const d = () => {
        const _ =
          document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.msFullscreenElement;
        e.setAttribute("data-vimeo-fullscreen", _ ? "true" : "false");
      };
      [
        "fullscreenchange",
        "webkitfullscreenchange",
        "mozfullscreenchange",
        "msfullscreenchange",
      ].forEach((_) => {
        document.addEventListener(_, d);
      });
      function f(_) {
        let x = Math.floor(_ / 3600);
        _ -= x * 3600;
        let T = Math.floor(_ / 60);
        return (_ -= T * 60), T + ":" + (_ < 10 ? "0" + _ : _);
      }
      const h = e.querySelector("[data-vimeo-duration]");
      i.getDuration().then(function (_) {
        h && (h.textContent = f(_)),
          e
            .querySelectorAll('[data-vimeo-control="timeline"], progress')
            .forEach((T) => {
              T.setAttribute("max", _);
            });
      });
      const m = e.querySelector('[data-vimeo-control="timeline"]'),
        p = e.querySelector("progress");
      function g() {
        i.getDuration().then(function () {
          const _ = m.value;
          i.setCurrentTime(_), p && (p.value = _);
        });
      }
      m &&
        ["input", "change"].forEach((_) => {
          m.addEventListener(_, g);
        }),
        i.on("timeupdate", function (_) {
          m && (m.value = _.seconds),
            p && (p.value = _.seconds),
            h && (h.textContent = f(Math.trunc(_.seconds)));
        });
      let b;
      e.addEventListener("mousemove", function () {
        e.getAttribute("data-vimeo-hover") === "false" &&
          e.setAttribute("data-vimeo-hover", "true"),
          clearTimeout(b),
          (b = setTimeout(v, 3e3));
      });
      function v() {
        e.setAttribute("data-vimeo-hover", "false");
      }
      function y() {
        e.setAttribute("data-vimeo-activated", "false"),
          e.setAttribute("data-vimeo-playing", "false"),
          i.unload();
      }
      i.on("ended", y);
    }
  }
  const Mf = () => {
    new Pf();
  };
  function Wl(t) {
    return (
      t !== null &&
      typeof t == "object" &&
      "constructor" in t &&
      t.constructor === Object
    );
  }
  function $a(t = {}, e = {}) {
    Object.keys(e).forEach((i) => {
      typeof t[i] > "u"
        ? (t[i] = e[i])
        : Wl(e[i]) &&
          Wl(t[i]) &&
          Object.keys(e[i]).length > 0 &&
          $a(t[i], e[i]);
    });
  }
  const Gl = {
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
  function Re() {
    const t = typeof document < "u" ? document : {};
    return $a(t, Gl), t;
  }
  const $f = {
    document: Gl,
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
  function pe() {
    const t = typeof window < "u" ? window : {};
    return $a(t, $f), t;
  }
  function Of(t) {
    const e = t.__proto__;
    Object.defineProperty(t, "__proto__", {
      get() {
        return e;
      },
      set(i) {
        e.__proto__ = i;
      },
    });
  }
  class Ii extends Array {
    constructor(e) {
      typeof e == "number" ? super(e) : (super(...(e || [])), Of(this));
    }
  }
  function Cr(t = []) {
    const e = [];
    return (
      t.forEach((i) => {
        Array.isArray(i) ? e.push(...Cr(i)) : e.push(i);
      }),
      e
    );
  }
  function Xl(t, e) {
    return Array.prototype.filter.call(t, e);
  }
  function zf(t) {
    const e = [];
    for (let i = 0; i < t.length; i += 1)
      e.indexOf(t[i]) === -1 && e.push(t[i]);
    return e;
  }
  function Lf(t, e) {
    if (typeof t != "string") return [t];
    const i = [],
      n = e.querySelectorAll(t);
    for (let r = 0; r < n.length; r += 1) i.push(n[r]);
    return i;
  }
  function N(t, e) {
    const i = pe(),
      n = Re();
    let r = [];
    if (!e && t instanceof Ii) return t;
    if (!t) return new Ii(r);
    if (typeof t == "string") {
      const s = t.trim();
      if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
        let a = "div";
        s.indexOf("<li") === 0 && (a = "ul"),
          s.indexOf("<tr") === 0 && (a = "tbody"),
          (s.indexOf("<td") === 0 || s.indexOf("<th") === 0) && (a = "tr"),
          s.indexOf("<tbody") === 0 && (a = "table"),
          s.indexOf("<option") === 0 && (a = "select");
        const o = n.createElement(a);
        o.innerHTML = s;
        for (let l = 0; l < o.childNodes.length; l += 1)
          r.push(o.childNodes[l]);
      } else r = Lf(t.trim(), e || n);
    } else if (t.nodeType || t === i || t === n) r.push(t);
    else if (Array.isArray(t)) {
      if (t instanceof Ii) return t;
      r = t;
    }
    return new Ii(zf(r));
  }
  N.fn = Ii.prototype;
  function If(...t) {
    const e = Cr(t.map((i) => i.split(" ")));
    return (
      this.forEach((i) => {
        i.classList.add(...e);
      }),
      this
    );
  }
  function Df(...t) {
    const e = Cr(t.map((i) => i.split(" ")));
    return (
      this.forEach((i) => {
        i.classList.remove(...e);
      }),
      this
    );
  }
  function Rf(...t) {
    const e = Cr(t.map((i) => i.split(" ")));
    this.forEach((i) => {
      e.forEach((n) => {
        i.classList.toggle(n);
      });
    });
  }
  function Nf(...t) {
    const e = Cr(t.map((i) => i.split(" ")));
    return (
      Xl(this, (i) => e.filter((n) => i.classList.contains(n)).length > 0)
        .length > 0
    );
  }
  function Bf(t, e) {
    if (arguments.length === 1 && typeof t == "string")
      return this[0] ? this[0].getAttribute(t) : void 0;
    for (let i = 0; i < this.length; i += 1)
      if (arguments.length === 2) this[i].setAttribute(t, e);
      else
        for (const n in t) (this[i][n] = t[n]), this[i].setAttribute(n, t[n]);
    return this;
  }
  function Ff(t) {
    for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
    return this;
  }
  function Vf(t) {
    for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
    return this;
  }
  function qf(t) {
    for (let e = 0; e < this.length; e += 1)
      this[e].style.transitionDuration = typeof t != "string" ? `${t}ms` : t;
    return this;
  }
  function Hf(...t) {
    let [e, i, n, r] = t;
    typeof t[1] == "function" && (([e, n, r] = t), (i = void 0)), r || (r = !1);
    function s(c) {
      const u = c.target;
      if (!u) return;
      const d = c.target.dom7EventData || [];
      if ((d.indexOf(c) < 0 && d.unshift(c), N(u).is(i))) n.apply(u, d);
      else {
        const f = N(u).parents();
        for (let h = 0; h < f.length; h += 1) N(f[h]).is(i) && n.apply(f[h], d);
      }
    }
    function a(c) {
      const u = c && c.target ? c.target.dom7EventData || [] : [];
      u.indexOf(c) < 0 && u.unshift(c), n.apply(this, u);
    }
    const o = e.split(" ");
    let l;
    for (let c = 0; c < this.length; c += 1) {
      const u = this[c];
      if (i)
        for (l = 0; l < o.length; l += 1) {
          const d = o[l];
          u.dom7LiveListeners || (u.dom7LiveListeners = {}),
            u.dom7LiveListeners[d] || (u.dom7LiveListeners[d] = []),
            u.dom7LiveListeners[d].push({ listener: n, proxyListener: s }),
            u.addEventListener(d, s, r);
        }
      else
        for (l = 0; l < o.length; l += 1) {
          const d = o[l];
          u.dom7Listeners || (u.dom7Listeners = {}),
            u.dom7Listeners[d] || (u.dom7Listeners[d] = []),
            u.dom7Listeners[d].push({ listener: n, proxyListener: a }),
            u.addEventListener(d, a, r);
        }
    }
    return this;
  }
  function Yf(...t) {
    let [e, i, n, r] = t;
    typeof t[1] == "function" && (([e, n, r] = t), (i = void 0)), r || (r = !1);
    const s = e.split(" ");
    for (let a = 0; a < s.length; a += 1) {
      const o = s[a];
      for (let l = 0; l < this.length; l += 1) {
        const c = this[l];
        let u;
        if (
          (!i && c.dom7Listeners
            ? (u = c.dom7Listeners[o])
            : i && c.dom7LiveListeners && (u = c.dom7LiveListeners[o]),
          u && u.length)
        )
          for (let d = u.length - 1; d >= 0; d -= 1) {
            const f = u[d];
            (n && f.listener === n) ||
            (n &&
              f.listener &&
              f.listener.dom7proxy &&
              f.listener.dom7proxy === n)
              ? (c.removeEventListener(o, f.proxyListener, r), u.splice(d, 1))
              : n ||
                (c.removeEventListener(o, f.proxyListener, r), u.splice(d, 1));
          }
      }
    }
    return this;
  }
  function Wf(...t) {
    const e = pe(),
      i = t[0].split(" "),
      n = t[1];
    for (let r = 0; r < i.length; r += 1) {
      const s = i[r];
      for (let a = 0; a < this.length; a += 1) {
        const o = this[a];
        if (e.CustomEvent) {
          const l = new e.CustomEvent(s, {
            detail: n,
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
    function i(n) {
      n.target === this && (t.call(this, n), e.off("transitionend", i));
    }
    return t && e.on("transitionend", i), this;
  }
  function Xf(t) {
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
  function jf(t) {
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
  function Uf() {
    if (this.length > 0) {
      const t = pe(),
        e = Re(),
        i = this[0],
        n = i.getBoundingClientRect(),
        r = e.body,
        s = i.clientTop || r.clientTop || 0,
        a = i.clientLeft || r.clientLeft || 0,
        o = i === t ? t.scrollY : i.scrollTop,
        l = i === t ? t.scrollX : i.scrollLeft;
      return { top: n.top + o - s, left: n.left + l - a };
    }
    return null;
  }
  function Zf() {
    const t = pe();
    return this[0] ? t.getComputedStyle(this[0], null) : {};
  }
  function Qf(t, e) {
    const i = pe();
    let n;
    if (arguments.length === 1)
      if (typeof t == "string") {
        if (this[0])
          return i.getComputedStyle(this[0], null).getPropertyValue(t);
      } else {
        for (n = 0; n < this.length; n += 1)
          for (const r in t) this[n].style[r] = t[r];
        return this;
      }
    if (arguments.length === 2 && typeof t == "string") {
      for (n = 0; n < this.length; n += 1) this[n].style[t] = e;
      return this;
    }
    return this;
  }
  function Kf(t) {
    return t
      ? (this.forEach((e, i) => {
          t.apply(e, [e, i]);
        }),
        this)
      : this;
  }
  function Jf(t) {
    const e = Xl(this, t);
    return N(e);
  }
  function eh(t) {
    if (typeof t > "u") return this[0] ? this[0].innerHTML : null;
    for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
    return this;
  }
  function th(t) {
    if (typeof t > "u") return this[0] ? this[0].textContent.trim() : null;
    for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
    return this;
  }
  function ih(t) {
    const e = pe(),
      i = Re(),
      n = this[0];
    let r, s;
    if (!n || typeof t > "u") return !1;
    if (typeof t == "string") {
      if (n.matches) return n.matches(t);
      if (n.webkitMatchesSelector) return n.webkitMatchesSelector(t);
      if (n.msMatchesSelector) return n.msMatchesSelector(t);
      for (r = N(t), s = 0; s < r.length; s += 1) if (r[s] === n) return !0;
      return !1;
    }
    if (t === i) return n === i;
    if (t === e) return n === e;
    if (t.nodeType || t instanceof Ii) {
      for (r = t.nodeType ? [t] : t, s = 0; s < r.length; s += 1)
        if (r[s] === n) return !0;
      return !1;
    }
    return !1;
  }
  function nh() {
    let t = this[0],
      e;
    if (t) {
      for (e = 0; (t = t.previousSibling) !== null; )
        t.nodeType === 1 && (e += 1);
      return e;
    }
  }
  function rh(t) {
    if (typeof t > "u") return this;
    const e = this.length;
    if (t > e - 1) return N([]);
    if (t < 0) {
      const i = e + t;
      return i < 0 ? N([]) : N([this[i]]);
    }
    return N([this[t]]);
  }
  function sh(...t) {
    let e;
    const i = Re();
    for (let n = 0; n < t.length; n += 1) {
      e = t[n];
      for (let r = 0; r < this.length; r += 1)
        if (typeof e == "string") {
          const s = i.createElement("div");
          for (s.innerHTML = e; s.firstChild; )
            this[r].appendChild(s.firstChild);
        } else if (e instanceof Ii)
          for (let s = 0; s < e.length; s += 1) this[r].appendChild(e[s]);
        else this[r].appendChild(e);
    }
    return this;
  }
  function ah(t) {
    const e = Re();
    let i, n;
    for (i = 0; i < this.length; i += 1)
      if (typeof t == "string") {
        const r = e.createElement("div");
        for (r.innerHTML = t, n = r.childNodes.length - 1; n >= 0; n -= 1)
          this[i].insertBefore(r.childNodes[n], this[i].childNodes[0]);
      } else if (t instanceof Ii)
        for (n = 0; n < t.length; n += 1)
          this[i].insertBefore(t[n], this[i].childNodes[0]);
      else this[i].insertBefore(t, this[i].childNodes[0]);
    return this;
  }
  function oh(t) {
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
  function lh(t) {
    const e = [];
    let i = this[0];
    if (!i) return N([]);
    for (; i.nextElementSibling; ) {
      const n = i.nextElementSibling;
      t ? N(n).is(t) && e.push(n) : e.push(n), (i = n);
    }
    return N(e);
  }
  function ch(t) {
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
  function uh(t) {
    const e = [];
    let i = this[0];
    if (!i) return N([]);
    for (; i.previousElementSibling; ) {
      const n = i.previousElementSibling;
      t ? N(n).is(t) && e.push(n) : e.push(n), (i = n);
    }
    return N(e);
  }
  function dh(t) {
    const e = [];
    for (let i = 0; i < this.length; i += 1)
      this[i].parentNode !== null &&
        (t
          ? N(this[i].parentNode).is(t) && e.push(this[i].parentNode)
          : e.push(this[i].parentNode));
    return N(e);
  }
  function fh(t) {
    const e = [];
    for (let i = 0; i < this.length; i += 1) {
      let n = this[i].parentNode;
      for (; n; ) t ? N(n).is(t) && e.push(n) : e.push(n), (n = n.parentNode);
    }
    return N(e);
  }
  function hh(t) {
    let e = this;
    return typeof t > "u" ? N([]) : (e.is(t) || (e = e.parents(t).eq(0)), e);
  }
  function ph(t) {
    const e = [];
    for (let i = 0; i < this.length; i += 1) {
      const n = this[i].querySelectorAll(t);
      for (let r = 0; r < n.length; r += 1) e.push(n[r]);
    }
    return N(e);
  }
  function mh(t) {
    const e = [];
    for (let i = 0; i < this.length; i += 1) {
      const n = this[i].children;
      for (let r = 0; r < n.length; r += 1)
        (!t || N(n[r]).is(t)) && e.push(n[r]);
    }
    return N(e);
  }
  function gh() {
    for (let t = 0; t < this.length; t += 1)
      this[t].parentNode && this[t].parentNode.removeChild(this[t]);
    return this;
  }
  const jl = {
    addClass: If,
    removeClass: Df,
    hasClass: Nf,
    toggleClass: Rf,
    attr: Bf,
    removeAttr: Ff,
    transform: Vf,
    transition: qf,
    on: Hf,
    off: Yf,
    trigger: Wf,
    transitionEnd: Gf,
    outerWidth: Xf,
    outerHeight: jf,
    styles: Zf,
    offset: Uf,
    css: Qf,
    each: Kf,
    html: eh,
    text: th,
    is: ih,
    index: nh,
    eq: rh,
    append: sh,
    prepend: ah,
    next: oh,
    nextAll: lh,
    prev: ch,
    prevAll: uh,
    parent: dh,
    parents: fh,
    closest: hh,
    find: ph,
    children: mh,
    filter: Jf,
    remove: gh,
  };
  Object.keys(jl).forEach((t) => {
    Object.defineProperty(N.fn, t, { value: jl[t], writable: !0 });
  });
  function vh(t) {
    const e = t;
    Object.keys(e).forEach((i) => {
      try {
        e[i] = null;
      } catch {}
      try {
        delete e[i];
      } catch {}
    });
  }
  function Di(t, e = 0) {
    return setTimeout(t, e);
  }
  function kt() {
    return Date.now();
  }
  function yh(t) {
    const e = pe();
    let i;
    return (
      e.getComputedStyle && (i = e.getComputedStyle(t, null)),
      !i && t.currentStyle && (i = t.currentStyle),
      i || (i = t.style),
      i
    );
  }
  function Oa(t, e = "x") {
    const i = pe();
    let n, r, s;
    const a = yh(t);
    return (
      i.WebKitCSSMatrix
        ? ((r = a.transform || a.webkitTransform),
          r.split(",").length > 6 &&
            (r = r
              .split(", ")
              .map((o) => o.replace(",", "."))
              .join(", ")),
          (s = new i.WebKitCSSMatrix(r === "none" ? "" : r)))
        : ((s =
            a.MozTransform ||
            a.OTransform ||
            a.MsTransform ||
            a.msTransform ||
            a.transform ||
            a
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (n = s.toString().split(","))),
      e === "x" &&
        (i.WebKitCSSMatrix
          ? (r = s.m41)
          : n.length === 16
          ? (r = parseFloat(n[12]))
          : (r = parseFloat(n[4]))),
      e === "y" &&
        (i.WebKitCSSMatrix
          ? (r = s.m42)
          : n.length === 16
          ? (r = parseFloat(n[13]))
          : (r = parseFloat(n[5]))),
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
  function At(...t) {
    const e = Object(t[0]),
      i = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < t.length; n += 1) {
      const r = t[n];
      if (r != null && !bh(r)) {
        const s = Object.keys(Object(r)).filter((a) => i.indexOf(a) < 0);
        for (let a = 0, o = s.length; a < o; a += 1) {
          const l = s[a],
            c = Object.getOwnPropertyDescriptor(r, l);
          c !== void 0 &&
            c.enumerable &&
            (kr(e[l]) && kr(r[l])
              ? r[l].__swiper__
                ? (e[l] = r[l])
                : At(e[l], r[l])
              : !kr(e[l]) && kr(r[l])
              ? ((e[l] = {}), r[l].__swiper__ ? (e[l] = r[l]) : At(e[l], r[l]))
              : (e[l] = r[l]));
        }
      }
    }
    return e;
  }
  function Ar(t, e, i) {
    t.style.setProperty(e, i);
  }
  function Ul({ swiper: t, targetPosition: e, side: i }) {
    const n = pe(),
      r = -t.translate;
    let s = null,
      a;
    const o = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      n.cancelAnimationFrame(t.cssModeFrameID);
    const l = e > r ? "next" : "prev",
      c = (d, f) => (l === "next" && d >= f) || (l === "prev" && d <= f),
      u = () => {
        (a = new Date().getTime()), s === null && (s = a);
        const d = Math.max(Math.min((a - s) / o, 1), 0),
          f = 0.5 - Math.cos(d * Math.PI) / 2;
        let h = r + f * (e - r);
        if ((c(h, e) && (h = e), t.wrapperEl.scrollTo({ [i]: h }), c(h, e))) {
          (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [i]: h });
            }),
            n.cancelAnimationFrame(t.cssModeFrameID);
          return;
        }
        t.cssModeFrameID = n.requestAnimationFrame(u);
      };
    u();
  }
  let za;
  function _h() {
    const t = pe(),
      e = Re();
    return {
      smoothScroll:
        e.documentElement && "scrollBehavior" in e.documentElement.style,
      touch: !!(
        "ontouchstart" in t ||
        (t.DocumentTouch && e instanceof t.DocumentTouch)
      ),
      passiveListener: (function () {
        let n = !1;
        try {
          const r = Object.defineProperty({}, "passive", {
            get() {
              n = !0;
            },
          });
          t.addEventListener("testPassiveListener", null, r);
        } catch {}
        return n;
      })(),
      gestures: (function () {
        return "ongesturestart" in t;
      })(),
    };
  }
  function Zl() {
    return za || (za = _h()), za;
  }
  let La;
  function wh({ userAgent: t } = {}) {
    const e = Zl(),
      i = pe(),
      n = i.navigator.platform,
      r = t || i.navigator.userAgent,
      s = { ios: !1, android: !1 },
      a = i.screen.width,
      o = i.screen.height,
      l = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = r.match(/(iPad).*OS\s([\d_]+)/);
    const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
      d = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      f = n === "Win32";
    let h = n === "MacIntel";
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
  function xh(t = {}) {
    return La || (La = wh(t)), La;
  }
  let Ia;
  function Sh() {
    const t = pe();
    function e() {
      const i = t.navigator.userAgent.toLowerCase();
      return (
        i.indexOf("safari") >= 0 &&
        i.indexOf("chrome") < 0 &&
        i.indexOf("android") < 0
      );
    }
    return {
      isSafari: e(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        t.navigator.userAgent
      ),
    };
  }
  function Th() {
    return Ia || (Ia = Sh()), Ia;
  }
  function Eh({ swiper: t, on: e, emit: i }) {
    const n = pe();
    let r = null,
      s = null;
    const a = () => {
        !t || t.destroyed || !t.initialized || (i("beforeResize"), i("resize"));
      },
      o = () => {
        !t ||
          t.destroyed ||
          !t.initialized ||
          ((r = new ResizeObserver((u) => {
            s = n.requestAnimationFrame(() => {
              const { width: d, height: f } = t;
              let h = d,
                m = f;
              u.forEach(({ contentBoxSize: p, contentRect: g, target: b }) => {
                (b && b !== t.el) ||
                  ((h = g ? g.width : (p[0] || p).inlineSize),
                  (m = g ? g.height : (p[0] || p).blockSize));
              }),
                (h !== d || m !== f) && a();
            });
          })),
          r.observe(t.el));
      },
      l = () => {
        s && n.cancelAnimationFrame(s),
          r && r.unobserve && t.el && (r.unobserve(t.el), (r = null));
      },
      c = () => {
        !t || t.destroyed || !t.initialized || i("orientationchange");
      };
    e("init", () => {
      if (t.params.resizeObserver && typeof n.ResizeObserver < "u") {
        o();
        return;
      }
      n.addEventListener("resize", a),
        n.addEventListener("orientationchange", c);
    }),
      e("destroy", () => {
        l(),
          n.removeEventListener("resize", a),
          n.removeEventListener("orientationchange", c);
      });
  }
  function Ch({ swiper: t, extendParams: e, on: i, emit: n }) {
    const r = [],
      s = pe(),
      a = (c, u = {}) => {
        const d = s.MutationObserver || s.WebkitMutationObserver,
          f = new d((h) => {
            if (h.length === 1) {
              n("observerUpdate", h[0]);
              return;
            }
            const m = function () {
              n("observerUpdate", h[0]);
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
      i("init", o),
      i("destroy", l);
  }
  const kh = {
    on(t, e, i) {
      const n = this;
      if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
      const r = i ? "unshift" : "push";
      return (
        t.split(" ").forEach((s) => {
          n.eventsListeners[s] || (n.eventsListeners[s] = []),
            n.eventsListeners[s][r](e);
        }),
        n
      );
    },
    once(t, e, i) {
      const n = this;
      if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
      function r(...s) {
        n.off(t, r), r.__emitterProxy && delete r.__emitterProxy, e.apply(n, s);
      }
      return (r.__emitterProxy = e), n.on(t, r, i);
    },
    onAny(t, e) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
      const n = e ? "unshift" : "push";
      return (
        i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[n](t), i
      );
    },
    offAny(t) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
      const i = e.eventsAnyListeners.indexOf(t);
      return i >= 0 && e.eventsAnyListeners.splice(i, 1), e;
    },
    off(t, e) {
      const i = this;
      return (
        !i.eventsListeners ||
          i.destroyed ||
          !i.eventsListeners ||
          t.split(" ").forEach((n) => {
            typeof e > "u"
              ? (i.eventsListeners[n] = [])
              : i.eventsListeners[n] &&
                i.eventsListeners[n].forEach((r, s) => {
                  (r === e || (r.__emitterProxy && r.__emitterProxy === e)) &&
                    i.eventsListeners[n].splice(s, 1);
                });
          }),
        i
      );
    },
    emit(...t) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
      let i, n, r;
      return (
        typeof t[0] == "string" || Array.isArray(t[0])
          ? ((i = t[0]), (n = t.slice(1, t.length)), (r = e))
          : ((i = t[0].events), (n = t[0].data), (r = t[0].context || e)),
        n.unshift(r),
        (Array.isArray(i) ? i : i.split(" ")).forEach((a) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((o) => {
              o.apply(r, [a, ...n]);
            }),
            e.eventsListeners &&
              e.eventsListeners[a] &&
              e.eventsListeners[a].forEach((o) => {
                o.apply(r, n);
              });
        }),
        e
      );
    },
  };
  function Ah() {
    const t = this;
    let e, i;
    const n = t.$el;
    typeof t.params.width < "u" && t.params.width !== null
      ? (e = t.params.width)
      : (e = n[0].clientWidth),
      typeof t.params.height < "u" && t.params.height !== null
        ? (i = t.params.height)
        : (i = n[0].clientHeight),
      !((e === 0 && t.isHorizontal()) || (i === 0 && t.isVertical())) &&
        ((e =
          e -
          parseInt(n.css("padding-left") || 0, 10) -
          parseInt(n.css("padding-right") || 0, 10)),
        (i =
          i -
          parseInt(n.css("padding-top") || 0, 10) -
          parseInt(n.css("padding-bottom") || 0, 10)),
        Number.isNaN(e) && (e = 0),
        Number.isNaN(i) && (i = 0),
        Object.assign(t, {
          width: e,
          height: i,
          size: t.isHorizontal() ? e : i,
        }));
  }
  function Ph() {
    const t = this;
    function e(k) {
      return t.isHorizontal()
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
    function i(k, M) {
      return parseFloat(k.getPropertyValue(e(M)) || 0);
    }
    const n = t.params,
      { $wrapperEl: r, size: s, rtlTranslate: a, wrongRTL: o } = t,
      l = t.virtual && n.virtual.enabled,
      c = l ? t.virtual.slides.length : t.slides.length,
      u = r.children(`.${t.params.slideClass}`),
      d = l ? t.virtual.slides.length : u.length;
    let f = [];
    const h = [],
      m = [];
    let p = n.slidesOffsetBefore;
    typeof p == "function" && (p = n.slidesOffsetBefore.call(t));
    let g = n.slidesOffsetAfter;
    typeof g == "function" && (g = n.slidesOffsetAfter.call(t));
    const b = t.snapGrid.length,
      v = t.slidesGrid.length;
    let y = n.spaceBetween,
      _ = -p,
      x = 0,
      T = 0;
    if (typeof s > "u") return;
    typeof y == "string" &&
      y.indexOf("%") >= 0 &&
      (y = (parseFloat(y.replace("%", "")) / 100) * s),
      (t.virtualSize = -y),
      a
        ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" })
        : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
      n.centeredSlides &&
        n.cssMode &&
        (Ar(t.wrapperEl, "--swiper-centered-offset-before", ""),
        Ar(t.wrapperEl, "--swiper-centered-offset-after", ""));
    const E = n.grid && n.grid.rows > 1 && t.grid;
    E && t.grid.initSlides(d);
    let C;
    const $ =
      n.slidesPerView === "auto" &&
      n.breakpoints &&
      Object.keys(n.breakpoints).filter(
        (k) => typeof n.breakpoints[k].slidesPerView < "u"
      ).length > 0;
    for (let k = 0; k < d; k += 1) {
      C = 0;
      const M = u.eq(k);
      if ((E && t.grid.updateSlide(k, M, d, e), M.css("display") !== "none")) {
        if (n.slidesPerView === "auto") {
          $ && (u[k].style[e("width")] = "");
          const w = getComputedStyle(M[0]),
            S = M[0].style.transform,
            O = M[0].style.webkitTransform;
          if (
            (S && (M[0].style.transform = "none"),
            O && (M[0].style.webkitTransform = "none"),
            n.roundLengths)
          )
            C = t.isHorizontal() ? M.outerWidth(!0) : M.outerHeight(!0);
          else {
            const z = i(w, "width"),
              A = i(w, "padding-left"),
              L = i(w, "padding-right"),
              I = i(w, "margin-left"),
              B = i(w, "margin-right"),
              P = w.getPropertyValue("box-sizing");
            if (P && P === "border-box") C = z + I + B;
            else {
              const { clientWidth: q, offsetWidth: G } = M[0];
              C = z + A + L + I + B + (G - q);
            }
          }
          S && (M[0].style.transform = S),
            O && (M[0].style.webkitTransform = O),
            n.roundLengths && (C = Math.floor(C));
        } else
          (C = (s - (n.slidesPerView - 1) * y) / n.slidesPerView),
            n.roundLengths && (C = Math.floor(C)),
            u[k] && (u[k].style[e("width")] = `${C}px`);
        u[k] && (u[k].swiperSlideSize = C),
          m.push(C),
          n.centeredSlides
            ? ((_ = _ + C / 2 + x / 2 + y),
              x === 0 && k !== 0 && (_ = _ - s / 2 - y),
              k === 0 && (_ = _ - s / 2 - y),
              Math.abs(_) < 1 / 1e3 && (_ = 0),
              n.roundLengths && (_ = Math.floor(_)),
              T % n.slidesPerGroup === 0 && f.push(_),
              h.push(_))
            : (n.roundLengths && (_ = Math.floor(_)),
              (T - Math.min(t.params.slidesPerGroupSkip, T)) %
                t.params.slidesPerGroup ===
                0 && f.push(_),
              h.push(_),
              (_ = _ + C + y)),
          (t.virtualSize += C + y),
          (x = C),
          (T += 1);
      }
    }
    if (
      ((t.virtualSize = Math.max(t.virtualSize, s) + g),
      a &&
        o &&
        (n.effect === "slide" || n.effect === "coverflow") &&
        r.css({ width: `${t.virtualSize + n.spaceBetween}px` }),
      n.setWrapperSize &&
        r.css({ [e("width")]: `${t.virtualSize + n.spaceBetween}px` }),
      E && t.grid.updateWrapperSize(C, f, e),
      !n.centeredSlides)
    ) {
      const k = [];
      for (let M = 0; M < f.length; M += 1) {
        let w = f[M];
        n.roundLengths && (w = Math.floor(w)),
          f[M] <= t.virtualSize - s && k.push(w);
      }
      (f = k),
        Math.floor(t.virtualSize - s) - Math.floor(f[f.length - 1]) > 1 &&
          f.push(t.virtualSize - s);
    }
    if ((f.length === 0 && (f = [0]), n.spaceBetween !== 0)) {
      const k = t.isHorizontal() && a ? "marginLeft" : e("marginRight");
      u.filter((M, w) => (n.cssMode ? w !== u.length - 1 : !0)).css({
        [k]: `${y}px`,
      });
    }
    if (n.centeredSlides && n.centeredSlidesBounds) {
      let k = 0;
      m.forEach((w) => {
        k += w + (n.spaceBetween ? n.spaceBetween : 0);
      }),
        (k -= n.spaceBetween);
      const M = k - s;
      f = f.map((w) => (w < 0 ? -p : w > M ? M + g : w));
    }
    if (n.centerInsufficientSlides) {
      let k = 0;
      if (
        (m.forEach((M) => {
          k += M + (n.spaceBetween ? n.spaceBetween : 0);
        }),
        (k -= n.spaceBetween),
        k < s)
      ) {
        const M = (s - k) / 2;
        f.forEach((w, S) => {
          f[S] = w - M;
        }),
          h.forEach((w, S) => {
            h[S] = w + M;
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
      n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
    ) {
      Ar(t.wrapperEl, "--swiper-centered-offset-before", `${-f[0]}px`),
        Ar(
          t.wrapperEl,
          "--swiper-centered-offset-after",
          `${t.size / 2 - m[m.length - 1] / 2}px`
        );
      const k = -t.snapGrid[0],
        M = -t.slidesGrid[0];
      (t.snapGrid = t.snapGrid.map((w) => w + k)),
        (t.slidesGrid = t.slidesGrid.map((w) => w + M));
    }
    if (
      (d !== c && t.emit("slidesLengthChange"),
      f.length !== b &&
        (t.params.watchOverflow && t.checkOverflow(),
        t.emit("snapGridLengthChange")),
      h.length !== v && t.emit("slidesGridLengthChange"),
      n.watchSlidesProgress && t.updateSlidesOffset(),
      !l && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
    ) {
      const k = `${n.containerModifierClass}backface-hidden`,
        M = t.$el.hasClass(k);
      d <= n.maxBackfaceHiddenSlides
        ? M || t.$el.addClass(k)
        : M && t.$el.removeClass(k);
    }
  }
  function Mh(t) {
    const e = this,
      i = [],
      n = e.virtual && e.params.virtual.enabled;
    let r = 0,
      s;
    typeof t == "number"
      ? e.setTransition(t)
      : t === !0 && e.setTransition(e.params.speed);
    const a = (o) =>
      n
        ? e.slides.filter(
            (l) => parseInt(l.getAttribute("data-swiper-slide-index"), 10) === o
          )[0]
        : e.slides.eq(o)[0];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
      if (e.params.centeredSlides)
        (e.visibleSlides || N([])).each((o) => {
          i.push(o);
        });
      else
        for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
          const o = e.activeIndex + s;
          if (o > e.slides.length && !n) break;
          i.push(a(o));
        }
    else i.push(a(e.activeIndex));
    for (s = 0; s < i.length; s += 1)
      if (typeof i[s] < "u") {
        const o = i[s].offsetHeight;
        r = o > r ? o : r;
      }
    (r || r === 0) && e.$wrapperEl.css("height", `${r}px`);
  }
  function $h() {
    const t = this,
      e = t.slides;
    for (let i = 0; i < e.length; i += 1)
      e[i].swiperSlideOffset = t.isHorizontal()
        ? e[i].offsetLeft
        : e[i].offsetTop;
  }
  function Oh(t = (this && this.translate) || 0) {
    const e = this,
      i = e.params,
      { slides: n, rtlTranslate: r, snapGrid: s } = e;
    if (n.length === 0) return;
    typeof n[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let a = -t;
    r && (a = t),
      n.removeClass(i.slideVisibleClass),
      (e.visibleSlidesIndexes = []),
      (e.visibleSlides = []);
    for (let o = 0; o < n.length; o += 1) {
      const l = n[o];
      let c = l.swiperSlideOffset;
      i.cssMode && i.centeredSlides && (c -= n[0].swiperSlideOffset);
      const u =
          (a + (i.centeredSlides ? e.minTranslate() : 0) - c) /
          (l.swiperSlideSize + i.spaceBetween),
        d =
          (a - s[0] + (i.centeredSlides ? e.minTranslate() : 0) - c) /
          (l.swiperSlideSize + i.spaceBetween),
        f = -(a - c),
        h = f + e.slidesSizesGrid[o];
      ((f >= 0 && f < e.size - 1) ||
        (h > 1 && h <= e.size) ||
        (f <= 0 && h >= e.size)) &&
        (e.visibleSlides.push(l),
        e.visibleSlidesIndexes.push(o),
        n.eq(o).addClass(i.slideVisibleClass)),
        (l.progress = r ? -u : u),
        (l.originalProgress = r ? -d : d);
    }
    e.visibleSlides = N(e.visibleSlides);
  }
  function zh(t) {
    const e = this;
    if (typeof t > "u") {
      const c = e.rtlTranslate ? -1 : 1;
      t = (e && e.translate && e.translate * c) || 0;
    }
    const i = e.params,
      n = e.maxTranslate() - e.minTranslate();
    let { progress: r, isBeginning: s, isEnd: a } = e;
    const o = s,
      l = a;
    n === 0
      ? ((r = 0), (s = !0), (a = !0))
      : ((r = (t - e.minTranslate()) / n), (s = r <= 0), (a = r >= 1)),
      Object.assign(e, { progress: r, isBeginning: s, isEnd: a }),
      (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
        e.updateSlidesProgress(t),
      s && !o && e.emit("reachBeginning toEdge"),
      a && !l && e.emit("reachEnd toEdge"),
      ((o && !s) || (l && !a)) && e.emit("fromEdge"),
      e.emit("progress", r);
  }
  function Lh() {
    const t = this,
      { slides: e, params: i, $wrapperEl: n, activeIndex: r, realIndex: s } = t,
      a = t.virtual && i.virtual.enabled;
    e.removeClass(
      `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
    );
    let o;
    a
      ? (o = t.$wrapperEl.find(
          `.${i.slideClass}[data-swiper-slide-index="${r}"]`
        ))
      : (o = e.eq(r)),
      o.addClass(i.slideActiveClass),
      i.loop &&
        (o.hasClass(i.slideDuplicateClass)
          ? n
              .children(
                `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
              )
              .addClass(i.slideDuplicateActiveClass)
          : n
              .children(
                `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
              )
              .addClass(i.slideDuplicateActiveClass));
    let l = o.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
    i.loop && l.length === 0 && ((l = e.eq(0)), l.addClass(i.slideNextClass));
    let c = o.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
    i.loop && c.length === 0 && ((c = e.eq(-1)), c.addClass(i.slidePrevClass)),
      i.loop &&
        (l.hasClass(i.slideDuplicateClass)
          ? n
              .children(
                `.${i.slideClass}:not(.${
                  i.slideDuplicateClass
                })[data-swiper-slide-index="${l.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(i.slideDuplicateNextClass)
          : n
              .children(
                `.${i.slideClass}.${
                  i.slideDuplicateClass
                }[data-swiper-slide-index="${l.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(i.slideDuplicateNextClass),
        c.hasClass(i.slideDuplicateClass)
          ? n
              .children(
                `.${i.slideClass}:not(.${
                  i.slideDuplicateClass
                })[data-swiper-slide-index="${c.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(i.slideDuplicatePrevClass)
          : n
              .children(
                `.${i.slideClass}.${
                  i.slideDuplicateClass
                }[data-swiper-slide-index="${c.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(i.slideDuplicatePrevClass)),
      t.emitSlidesClasses();
  }
  function Ih(t) {
    const e = this,
      i = e.rtlTranslate ? e.translate : -e.translate,
      {
        slidesGrid: n,
        snapGrid: r,
        params: s,
        activeIndex: a,
        realIndex: o,
        snapIndex: l,
      } = e;
    let c = t,
      u;
    if (typeof c > "u") {
      for (let f = 0; f < n.length; f += 1)
        typeof n[f + 1] < "u"
          ? i >= n[f] && i < n[f + 1] - (n[f + 1] - n[f]) / 2
            ? (c = f)
            : i >= n[f] && i < n[f + 1] && (c = f + 1)
          : i >= n[f] && (c = f);
      s.normalizeSlideIndex && (c < 0 || typeof c > "u") && (c = 0);
    }
    if (r.indexOf(i) >= 0) u = r.indexOf(i);
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
  function Dh(t) {
    const e = this,
      i = e.params,
      n = N(t).closest(`.${i.slideClass}`)[0];
    let r = !1,
      s;
    if (n) {
      for (let a = 0; a < e.slides.length; a += 1)
        if (e.slides[a] === n) {
          (r = !0), (s = a);
          break;
        }
    }
    if (n && r)
      (e.clickedSlide = n),
        e.virtual && e.params.virtual.enabled
          ? (e.clickedIndex = parseInt(
              N(n).attr("data-swiper-slide-index"),
              10
            ))
          : (e.clickedIndex = s);
    else {
      (e.clickedSlide = void 0), (e.clickedIndex = void 0);
      return;
    }
    i.slideToClickedSlide &&
      e.clickedIndex !== void 0 &&
      e.clickedIndex !== e.activeIndex &&
      e.slideToClickedSlide();
  }
  const Rh = {
    updateSize: Ah,
    updateSlides: Ph,
    updateAutoHeight: Mh,
    updateSlidesOffset: $h,
    updateSlidesProgress: Oh,
    updateProgress: zh,
    updateSlidesClasses: Lh,
    updateActiveIndex: Ih,
    updateClickedSlide: Dh,
  };
  function Nh(t = this.isHorizontal() ? "x" : "y") {
    const e = this,
      { params: i, rtlTranslate: n, translate: r, $wrapperEl: s } = e;
    if (i.virtualTranslate) return n ? -r : r;
    if (i.cssMode) return r;
    let a = Oa(s[0], t);
    return n && (a = -a), a || 0;
  }
  function Bh(t, e) {
    const i = this,
      {
        rtlTranslate: n,
        params: r,
        $wrapperEl: s,
        wrapperEl: a,
        progress: o,
      } = i;
    let l = 0,
      c = 0;
    const u = 0;
    i.isHorizontal() ? (l = n ? -t : t) : (c = t),
      r.roundLengths && ((l = Math.floor(l)), (c = Math.floor(c))),
      r.cssMode
        ? (a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal()
            ? -l
            : -c)
        : r.virtualTranslate ||
          s.transform(`translate3d(${l}px, ${c}px, ${u}px)`),
      (i.previousTranslate = i.translate),
      (i.translate = i.isHorizontal() ? l : c);
    let d;
    const f = i.maxTranslate() - i.minTranslate();
    f === 0 ? (d = 0) : (d = (t - i.minTranslate()) / f),
      d !== o && i.updateProgress(t),
      i.emit("setTranslate", i.translate, e);
  }
  function Fh() {
    return -this.snapGrid[0];
  }
  function Vh() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function qh(t = 0, e = this.params.speed, i = !0, n = !0, r) {
    const s = this,
      { params: a, wrapperEl: o } = s;
    if (s.animating && a.preventInteractionOnTransition) return !1;
    const l = s.minTranslate(),
      c = s.maxTranslate();
    let u;
    if (
      (n && t > l ? (u = l) : n && t < c ? (u = c) : (u = t),
      s.updateProgress(u),
      a.cssMode)
    ) {
      const d = s.isHorizontal();
      if (e === 0) o[d ? "scrollLeft" : "scrollTop"] = -u;
      else {
        if (!s.support.smoothScroll)
          return (
            Ul({ swiper: s, targetPosition: -u, side: d ? "left" : "top" }), !0
          );
        o.scrollTo({ [d ? "left" : "top"]: -u, behavior: "smooth" });
      }
      return !0;
    }
    return (
      e === 0
        ? (s.setTransition(0),
          s.setTranslate(u),
          i && (s.emit("beforeTransitionStart", e, r), s.emit("transitionEnd")))
        : (s.setTransition(e),
          s.setTranslate(u),
          i &&
            (s.emit("beforeTransitionStart", e, r), s.emit("transitionStart")),
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
                    i && s.emit("transitionEnd")));
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
  const Hh = {
    getTranslate: Nh,
    setTranslate: Bh,
    minTranslate: Fh,
    maxTranslate: Vh,
    translateTo: qh,
  };
  function Yh(t, e) {
    const i = this;
    i.params.cssMode || i.$wrapperEl.transition(t),
      i.emit("setTransition", t, e);
  }
  function Ql({ swiper: t, runCallbacks: e, direction: i, step: n }) {
    const { activeIndex: r, previousIndex: s } = t;
    let a = i;
    if (
      (a || (r > s ? (a = "next") : r < s ? (a = "prev") : (a = "reset")),
      t.emit(`transition${n}`),
      e && r !== s)
    ) {
      if (a === "reset") {
        t.emit(`slideResetTransition${n}`);
        return;
      }
      t.emit(`slideChangeTransition${n}`),
        a === "next"
          ? t.emit(`slideNextTransition${n}`)
          : t.emit(`slidePrevTransition${n}`);
    }
  }
  function Wh(t = !0, e) {
    const i = this,
      { params: n } = i;
    n.cssMode ||
      (n.autoHeight && i.updateAutoHeight(),
      Ql({ swiper: i, runCallbacks: t, direction: e, step: "Start" }));
  }
  function Gh(t = !0, e) {
    const i = this,
      { params: n } = i;
    (i.animating = !1),
      !n.cssMode &&
        (i.setTransition(0),
        Ql({ swiper: i, runCallbacks: t, direction: e, step: "End" }));
  }
  const Xh = { setTransition: Yh, transitionStart: Wh, transitionEnd: Gh };
  function jh(t = 0, e = this.params.speed, i = !0, n, r) {
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
    if ((s.animating && o.preventInteractionOnTransition) || (!m && !n && !r))
      return !1;
    const p = Math.min(s.params.slidesPerGroupSkip, a);
    let g = p + Math.floor((a - p) / s.params.slidesPerGroup);
    g >= l.length && (g = l.length - 1);
    const b = -l[g];
    if (o.normalizeSlideIndex)
      for (let y = 0; y < c.length; y += 1) {
        const _ = -Math.floor(b * 100),
          x = Math.floor(c[y] * 100),
          T = Math.floor(c[y + 1] * 100);
        typeof c[y + 1] < "u"
          ? _ >= x && _ < T - (T - x) / 2
            ? (a = y)
            : _ >= x && _ < T && (a = y + 1)
          : _ >= x && (a = y);
      }
    if (
      s.initialized &&
      a !== d &&
      ((!s.allowSlideNext && b < s.translate && b < s.minTranslate()) ||
        (!s.allowSlidePrev &&
          b > s.translate &&
          b > s.maxTranslate() &&
          (d || 0) !== a))
    )
      return !1;
    a !== (u || 0) && i && s.emit("beforeSlideChangeStart"),
      s.updateProgress(b);
    let v;
    if (
      (a > d ? (v = "next") : a < d ? (v = "prev") : (v = "reset"),
      (f && -b === s.translate) || (!f && b === s.translate))
    )
      return (
        s.updateActiveIndex(a),
        o.autoHeight && s.updateAutoHeight(),
        s.updateSlidesClasses(),
        o.effect !== "slide" && s.setTranslate(b),
        v !== "reset" && (s.transitionStart(i, v), s.transitionEnd(i, v)),
        !1
      );
    if (o.cssMode) {
      const y = s.isHorizontal(),
        _ = f ? b : -b;
      if (e === 0) {
        const x = s.virtual && s.params.virtual.enabled;
        x &&
          ((s.wrapperEl.style.scrollSnapType = "none"),
          (s._immediateVirtual = !0)),
          (h[y ? "scrollLeft" : "scrollTop"] = _),
          x &&
            requestAnimationFrame(() => {
              (s.wrapperEl.style.scrollSnapType = ""),
                (s._swiperImmediateVirtual = !1);
            });
      } else {
        if (!s.support.smoothScroll)
          return (
            Ul({ swiper: s, targetPosition: _, side: y ? "left" : "top" }), !0
          );
        h.scrollTo({ [y ? "left" : "top"]: _, behavior: "smooth" });
      }
      return !0;
    }
    return (
      s.setTransition(e),
      s.setTranslate(b),
      s.updateActiveIndex(a),
      s.updateSlidesClasses(),
      s.emit("beforeTransitionStart", e, n),
      s.transitionStart(i, v),
      e === 0
        ? s.transitionEnd(i, v)
        : s.animating ||
          ((s.animating = !0),
          s.onSlideToWrapperTransitionEnd ||
            (s.onSlideToWrapperTransitionEnd = function (_) {
              !s ||
                s.destroyed ||
                (_.target === this &&
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
                  s.transitionEnd(i, v)));
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
  function Uh(t = 0, e = this.params.speed, i = !0, n) {
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
    return r.params.loop && (s += r.loopedSlides), r.slideTo(s, e, i, n);
  }
  function Zh(t = this.params.speed, e = !0, i) {
    const n = this,
      { animating: r, enabled: s, params: a } = n;
    if (!s) return n;
    let o = a.slidesPerGroup;
    a.slidesPerView === "auto" &&
      a.slidesPerGroup === 1 &&
      a.slidesPerGroupAuto &&
      (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
    const l = n.activeIndex < a.slidesPerGroupSkip ? 1 : o;
    if (a.loop) {
      if (r && a.loopPreventsSlide) return !1;
      n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
    }
    return a.rewind && n.isEnd
      ? n.slideTo(0, t, e, i)
      : n.slideTo(n.activeIndex + l, t, e, i);
  }
  function Qh(t = this.params.speed, e = !0, i) {
    const n = this,
      {
        params: r,
        animating: s,
        snapGrid: a,
        slidesGrid: o,
        rtlTranslate: l,
        enabled: c,
      } = n;
    if (!c) return n;
    if (r.loop) {
      if (s && r.loopPreventsSlide) return !1;
      n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
    }
    const u = l ? n.translate : -n.translate;
    function d(g) {
      return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g);
    }
    const f = d(u),
      h = a.map((g) => d(g));
    let m = a[h.indexOf(f) - 1];
    if (typeof m > "u" && r.cssMode) {
      let g;
      a.forEach((b, v) => {
        f >= b && (g = v);
      }),
        typeof g < "u" && (m = a[g > 0 ? g - 1 : g]);
    }
    let p = 0;
    if (
      (typeof m < "u" &&
        ((p = o.indexOf(m)),
        p < 0 && (p = n.activeIndex - 1),
        r.slidesPerView === "auto" &&
          r.slidesPerGroup === 1 &&
          r.slidesPerGroupAuto &&
          ((p = p - n.slidesPerViewDynamic("previous", !0) + 1),
          (p = Math.max(p, 0)))),
      r.rewind && n.isBeginning)
    ) {
      const g =
        n.params.virtual && n.params.virtual.enabled && n.virtual
          ? n.virtual.slides.length - 1
          : n.slides.length - 1;
      return n.slideTo(g, t, e, i);
    }
    return n.slideTo(p, t, e, i);
  }
  function Kh(t = this.params.speed, e = !0, i) {
    const n = this;
    return n.slideTo(n.activeIndex, t, e, i);
  }
  function Jh(t = this.params.speed, e = !0, i, n = 0.5) {
    const r = this;
    let s = r.activeIndex;
    const a = Math.min(r.params.slidesPerGroupSkip, s),
      o = a + Math.floor((s - a) / r.params.slidesPerGroup),
      l = r.rtlTranslate ? r.translate : -r.translate;
    if (l >= r.snapGrid[o]) {
      const c = r.snapGrid[o],
        u = r.snapGrid[o + 1];
      l - c > (u - c) * n && (s += r.params.slidesPerGroup);
    } else {
      const c = r.snapGrid[o - 1],
        u = r.snapGrid[o];
      l - c <= (u - c) * n && (s -= r.params.slidesPerGroup);
    }
    return (
      (s = Math.max(s, 0)),
      (s = Math.min(s, r.slidesGrid.length - 1)),
      r.slideTo(s, t, e, i)
    );
  }
  function ep() {
    const t = this,
      { params: e, $wrapperEl: i } = t,
      n =
        e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
    let r = t.clickedIndex,
      s;
    if (e.loop) {
      if (t.animating) return;
      (s = parseInt(N(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
        e.centeredSlides
          ? r < t.loopedSlides - n / 2 ||
            r > t.slides.length - t.loopedSlides + n / 2
            ? (t.loopFix(),
              (r = i
                .children(
                  `.${e.slideClass}[data-swiper-slide-index="${s}"]:not(.${e.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              Di(() => {
                t.slideTo(r);
              }))
            : t.slideTo(r)
          : r > t.slides.length - n
          ? (t.loopFix(),
            (r = i
              .children(
                `.${e.slideClass}[data-swiper-slide-index="${s}"]:not(.${e.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            Di(() => {
              t.slideTo(r);
            }))
          : t.slideTo(r);
    } else t.slideTo(r);
  }
  const tp = {
    slideTo: jh,
    slideToLoop: Uh,
    slideNext: Zh,
    slidePrev: Qh,
    slideReset: Kh,
    slideToClosest: Jh,
    slideToClickedSlide: ep,
  };
  function ip() {
    const t = this,
      e = Re(),
      { params: i, $wrapperEl: n } = t,
      r = n.children().length > 0 ? N(n.children()[0].parentNode) : n;
    r.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
    let s = r.children(`.${i.slideClass}`);
    if (i.loopFillGroupWithBlank) {
      const l = i.slidesPerGroup - (s.length % i.slidesPerGroup);
      if (l !== i.slidesPerGroup) {
        for (let c = 0; c < l; c += 1) {
          const u = N(e.createElement("div")).addClass(
            `${i.slideClass} ${i.slideBlankClass}`
          );
          r.append(u);
        }
        s = r.children(`.${i.slideClass}`);
      }
    }
    i.slidesPerView === "auto" &&
      !i.loopedSlides &&
      (i.loopedSlides = s.length),
      (t.loopedSlides = Math.ceil(
        parseFloat(i.loopedSlides || i.slidesPerView, 10)
      )),
      (t.loopedSlides += i.loopAdditionalSlides),
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
      r.append(N(o[l].cloneNode(!0)).addClass(i.slideDuplicateClass));
    for (let l = a.length - 1; l >= 0; l -= 1)
      r.prepend(N(a[l].cloneNode(!0)).addClass(i.slideDuplicateClass));
  }
  function np() {
    const t = this;
    t.emit("beforeLoopFix");
    const {
      activeIndex: e,
      slides: i,
      loopedSlides: n,
      allowSlidePrev: r,
      allowSlideNext: s,
      snapGrid: a,
      rtlTranslate: o,
    } = t;
    let l;
    (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
    const u = -a[e] - t.getTranslate();
    e < n
      ? ((l = i.length - n * 3 + e),
        (l += n),
        t.slideTo(l, 0, !1, !0) &&
          u !== 0 &&
          t.setTranslate((o ? -t.translate : t.translate) - u))
      : e >= i.length - n &&
        ((l = -i.length + e + n),
        (l += n),
        t.slideTo(l, 0, !1, !0) &&
          u !== 0 &&
          t.setTranslate((o ? -t.translate : t.translate) - u)),
      (t.allowSlidePrev = r),
      (t.allowSlideNext = s),
      t.emit("loopFix");
  }
  function rp() {
    const t = this,
      { $wrapperEl: e, params: i, slides: n } = t;
    e
      .children(
        `.${i.slideClass}.${i.slideDuplicateClass},.${i.slideClass}.${i.slideBlankClass}`
      )
      .remove(),
      n.removeAttr("data-swiper-slide-index");
  }
  const sp = { loopCreate: ip, loopFix: np, loopDestroy: rp };
  function ap(t) {
    const e = this;
    if (
      e.support.touch ||
      !e.params.simulateTouch ||
      (e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode
    )
      return;
    const i = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    (i.style.cursor = "move"), (i.style.cursor = t ? "grabbing" : "grab");
  }
  function op() {
    const t = this;
    t.support.touch ||
      (t.params.watchOverflow && t.isLocked) ||
      t.params.cssMode ||
      (t[
        t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = "");
  }
  const lp = { setGrabCursor: ap, unsetGrabCursor: op };
  function cp(t, e = this) {
    function i(n) {
      if (!n || n === Re() || n === pe()) return null;
      n.assignedSlot && (n = n.assignedSlot);
      const r = n.closest(t);
      return !r && !n.getRootNode ? null : r || i(n.getRootNode().host);
    }
    return i(e);
  }
  function up(t) {
    const e = this,
      i = Re(),
      n = pe(),
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
    const f = s.noSwipingSelector
        ? s.noSwipingSelector
        : `.${s.noSwipingClass}`,
      h = !!(l.target && l.target.shadowRoot);
    if (s.noSwiping && (h ? cp(f, c[0]) : c.closest(f)[0])) {
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
      b = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
    if (g && (m <= b || m >= n.innerWidth - b))
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
      (r.touchStartTime = kt()),
      (e.allowClick = !0),
      e.updateSize(),
      (e.swipeDirection = void 0),
      s.threshold > 0 && (r.allowThresholdMove = !1),
      l.type !== "touchstart")
    ) {
      let v = !0;
      c.is(r.focusableElements) &&
        ((v = !1), c[0].nodeName === "SELECT" && (r.isTouched = !1)),
        i.activeElement &&
          N(i.activeElement).is(r.focusableElements) &&
          i.activeElement !== c[0] &&
          i.activeElement.blur();
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
  function dp(t) {
    const e = Re(),
      i = this,
      n = i.touchEventsData,
      { params: r, touches: s, rtlTranslate: a, enabled: o } = i;
    if (!o) return;
    let l = t;
    if ((l.originalEvent && (l = l.originalEvent), !n.isTouched)) {
      n.startMoving && n.isScrolling && i.emit("touchMoveOpposite", l);
      return;
    }
    if (n.isTouchEvent && l.type !== "touchmove") return;
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
    if (!i.allowTouchMove) {
      N(l.target).is(n.focusableElements) || (i.allowClick = !1),
        n.isTouched &&
          (Object.assign(s, { startX: u, startY: d, currentX: u, currentY: d }),
          (n.touchStartTime = kt()));
      return;
    }
    if (n.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
      if (i.isVertical()) {
        if (
          (d < s.startY && i.translate <= i.maxTranslate()) ||
          (d > s.startY && i.translate >= i.minTranslate())
        ) {
          (n.isTouched = !1), (n.isMoved = !1);
          return;
        }
      } else if (
        (u < s.startX && i.translate <= i.maxTranslate()) ||
        (u > s.startX && i.translate >= i.minTranslate())
      )
        return;
    }
    if (
      n.isTouchEvent &&
      e.activeElement &&
      l.target === e.activeElement &&
      N(l.target).is(n.focusableElements)
    ) {
      (n.isMoved = !0), (i.allowClick = !1);
      return;
    }
    if (
      (n.allowTouchCallbacks && i.emit("touchMove", l),
      l.targetTouches && l.targetTouches.length > 1)
    )
      return;
    (s.currentX = u), (s.currentY = d);
    const f = s.currentX - s.startX,
      h = s.currentY - s.startY;
    if (i.params.threshold && Math.sqrt(f ** 2 + h ** 2) < i.params.threshold)
      return;
    if (typeof n.isScrolling > "u") {
      let b;
      (i.isHorizontal() && s.currentY === s.startY) ||
      (i.isVertical() && s.currentX === s.startX)
        ? (n.isScrolling = !1)
        : f * f + h * h >= 25 &&
          ((b = (Math.atan2(Math.abs(h), Math.abs(f)) * 180) / Math.PI),
          (n.isScrolling = i.isHorizontal()
            ? b > r.touchAngle
            : 90 - b > r.touchAngle));
    }
    if (
      (n.isScrolling && i.emit("touchMoveOpposite", l),
      typeof n.startMoving > "u" &&
        (s.currentX !== s.startX || s.currentY !== s.startY) &&
        (n.startMoving = !0),
      n.isScrolling)
    ) {
      n.isTouched = !1;
      return;
    }
    if (!n.startMoving) return;
    (i.allowClick = !1),
      !r.cssMode && l.cancelable && l.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && l.stopPropagation(),
      n.isMoved ||
        (r.loop && !r.cssMode && i.loopFix(),
        (n.startTranslate = i.getTranslate()),
        i.setTransition(0),
        i.animating &&
          i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (n.allowMomentumBounce = !1),
        r.grabCursor &&
          (i.allowSlideNext === !0 || i.allowSlidePrev === !0) &&
          i.setGrabCursor(!0),
        i.emit("sliderFirstMove", l)),
      i.emit("sliderMove", l),
      (n.isMoved = !0);
    let m = i.isHorizontal() ? f : h;
    (s.diff = m),
      (m *= r.touchRatio),
      a && (m = -m),
      (i.swipeDirection = m > 0 ? "prev" : "next"),
      (n.currentTranslate = m + n.startTranslate);
    let p = !0,
      g = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (g = 0),
      m > 0 && n.currentTranslate > i.minTranslate()
        ? ((p = !1),
          r.resistance &&
            (n.currentTranslate =
              i.minTranslate() -
              1 +
              (-i.minTranslate() + n.startTranslate + m) ** g))
        : m < 0 &&
          n.currentTranslate < i.maxTranslate() &&
          ((p = !1),
          r.resistance &&
            (n.currentTranslate =
              i.maxTranslate() +
              1 -
              (i.maxTranslate() - n.startTranslate - m) ** g)),
      p && (l.preventedByNestedSwiper = !0),
      !i.allowSlideNext &&
        i.swipeDirection === "next" &&
        n.currentTranslate < n.startTranslate &&
        (n.currentTranslate = n.startTranslate),
      !i.allowSlidePrev &&
        i.swipeDirection === "prev" &&
        n.currentTranslate > n.startTranslate &&
        (n.currentTranslate = n.startTranslate),
      !i.allowSlidePrev &&
        !i.allowSlideNext &&
        (n.currentTranslate = n.startTranslate),
      r.threshold > 0)
    )
      if (Math.abs(m) > r.threshold || n.allowThresholdMove) {
        if (!n.allowThresholdMove) {
          (n.allowThresholdMove = !0),
            (s.startX = s.currentX),
            (s.startY = s.currentY),
            (n.currentTranslate = n.startTranslate),
            (s.diff = i.isHorizontal()
              ? s.currentX - s.startX
              : s.currentY - s.startY);
          return;
        }
      } else {
        n.currentTranslate = n.startTranslate;
        return;
      }
    !r.followFinger ||
      r.cssMode ||
      (((r.freeMode && r.freeMode.enabled && i.freeMode) ||
        r.watchSlidesProgress) &&
        (i.updateActiveIndex(), i.updateSlidesClasses()),
      i.params.freeMode &&
        r.freeMode.enabled &&
        i.freeMode &&
        i.freeMode.onTouchMove(),
      i.updateProgress(n.currentTranslate),
      i.setTranslate(n.currentTranslate));
  }
  function fp(t) {
    const e = this,
      i = e.touchEventsData,
      { params: n, touches: r, rtlTranslate: s, slidesGrid: a, enabled: o } = e;
    if (!o) return;
    let l = t;
    if (
      (l.originalEvent && (l = l.originalEvent),
      i.allowTouchCallbacks && e.emit("touchEnd", l),
      (i.allowTouchCallbacks = !1),
      !i.isTouched)
    ) {
      i.isMoved && n.grabCursor && e.setGrabCursor(!1),
        (i.isMoved = !1),
        (i.startMoving = !1);
      return;
    }
    n.grabCursor &&
      i.isMoved &&
      i.isTouched &&
      (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
      e.setGrabCursor(!1);
    const c = kt(),
      u = c - i.touchStartTime;
    if (e.allowClick) {
      const v = l.path || (l.composedPath && l.composedPath());
      e.updateClickedSlide((v && v[0]) || l.target),
        e.emit("tap click", l),
        u < 300 &&
          c - i.lastClickTime < 300 &&
          e.emit("doubleTap doubleClick", l);
    }
    if (
      ((i.lastClickTime = kt()),
      Di(() => {
        e.destroyed || (e.allowClick = !0);
      }),
      !i.isTouched ||
        !i.isMoved ||
        !e.swipeDirection ||
        r.diff === 0 ||
        i.currentTranslate === i.startTranslate)
    ) {
      (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
      return;
    }
    (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
    let d;
    if (
      (n.followFinger
        ? (d = s ? e.translate : -e.translate)
        : (d = -i.currentTranslate),
      n.cssMode)
    )
      return;
    if (e.params.freeMode && n.freeMode.enabled) {
      e.freeMode.onTouchEnd({ currentPos: d });
      return;
    }
    let f = 0,
      h = e.slidesSizesGrid[0];
    for (
      let v = 0;
      v < a.length;
      v += v < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
    ) {
      const y = v < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      typeof a[v + y] < "u"
        ? d >= a[v] && d < a[v + y] && ((f = v), (h = a[v + y] - a[v]))
        : d >= a[v] && ((f = v), (h = a[a.length - 1] - a[a.length - 2]));
    }
    let m = null,
      p = null;
    n.rewind &&
      (e.isBeginning
        ? (p =
            e.params.virtual && e.params.virtual.enabled && e.virtual
              ? e.virtual.slides.length - 1
              : e.slides.length - 1)
        : e.isEnd && (m = 0));
    const g = (d - a[f]) / h,
      b = f < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    if (u > n.longSwipesMs) {
      if (!n.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" &&
        (g >= n.longSwipesRatio
          ? e.slideTo(n.rewind && e.isEnd ? m : f + b)
          : e.slideTo(f)),
        e.swipeDirection === "prev" &&
          (g > 1 - n.longSwipesRatio
            ? e.slideTo(f + b)
            : p !== null && g < 0 && Math.abs(g) > n.longSwipesRatio
            ? e.slideTo(p)
            : e.slideTo(f));
    } else {
      if (!n.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation &&
      (l.target === e.navigation.nextEl || l.target === e.navigation.prevEl)
        ? l.target === e.navigation.nextEl
          ? e.slideTo(f + b)
          : e.slideTo(f)
        : (e.swipeDirection === "next" && e.slideTo(m !== null ? m : f + b),
          e.swipeDirection === "prev" && e.slideTo(p !== null ? p : f));
    }
  }
  function Kl() {
    const t = this,
      { params: e, el: i } = t;
    if (i && i.offsetWidth === 0) return;
    e.breakpoints && t.setBreakpoint();
    const { allowSlideNext: n, allowSlidePrev: r, snapGrid: s } = t;
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
      (t.allowSlideNext = n),
      t.params.watchOverflow && s !== t.snapGrid && t.checkOverflow();
  }
  function hp(t) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && t.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (t.stopPropagation(), t.stopImmediatePropagation())));
  }
  function pp() {
    const t = this,
      { wrapperEl: e, rtlTranslate: i, enabled: n } = t;
    if (!n) return;
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
      r !== t.progress && t.updateProgress(i ? -t.translate : t.translate),
      t.emit("setTranslate", t.translate, !1);
  }
  let Jl = !1;
  function mp() {}
  const ec = (t, e) => {
    const i = Re(),
      {
        params: n,
        touchEvents: r,
        el: s,
        wrapperEl: a,
        device: o,
        support: l,
      } = t,
      c = !!n.nested,
      u = e === "on" ? "addEventListener" : "removeEventListener",
      d = e;
    if (!l.touch)
      s[u](r.start, t.onTouchStart, !1),
        i[u](r.move, t.onTouchMove, c),
        i[u](r.end, t.onTouchEnd, !1);
    else {
      const f =
        r.start === "touchstart" && l.passiveListener && n.passiveListeners
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
    (n.preventClicks || n.preventClicksPropagation) &&
      s[u]("click", t.onClick, !0),
      n.cssMode && a[u]("scroll", t.onScroll),
      n.updateOnWindowResize
        ? t[d](
            o.ios || o.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            Kl,
            !0
          )
        : t[d]("observerUpdate", Kl, !0);
  };
  function gp() {
    const t = this,
      e = Re(),
      { params: i, support: n } = t;
    (t.onTouchStart = up.bind(t)),
      (t.onTouchMove = dp.bind(t)),
      (t.onTouchEnd = fp.bind(t)),
      i.cssMode && (t.onScroll = pp.bind(t)),
      (t.onClick = hp.bind(t)),
      n.touch && !Jl && (e.addEventListener("touchstart", mp), (Jl = !0)),
      ec(t, "on");
  }
  function vp() {
    ec(this, "off");
  }
  const yp = { attachEvents: gp, detachEvents: vp },
    tc = (t, e) => t.grid && e.grid && e.grid.rows > 1;
  function bp() {
    const t = this,
      {
        activeIndex: e,
        initialized: i,
        loopedSlides: n = 0,
        params: r,
        $el: s,
      } = t,
      a = r.breakpoints;
    if (!a || (a && Object.keys(a).length === 0)) return;
    const o = t.getBreakpoint(a, t.params.breakpointsBase, t.el);
    if (!o || t.currentBreakpoint === o) return;
    const c = (o in a ? a[o] : void 0) || t.originalParams,
      u = tc(t, r),
      d = tc(t, c),
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
        const b = r[g] && r[g].enabled,
          v = c[g] && c[g].enabled;
        b && !v && t[g].disable(), !b && v && t[g].enable();
      });
    const h = c.direction && c.direction !== r.direction,
      m = r.loop && (c.slidesPerView !== r.slidesPerView || h);
    h && i && t.changeDirection(), At(t.params, c);
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
        i &&
        (t.loopDestroy(),
        t.loopCreate(),
        t.updateSlides(),
        t.slideTo(e - n + t.loopedSlides, 0, !1)),
      t.emit("breakpoint", c);
  }
  function _p(t, e = "window", i) {
    if (!t || (e === "container" && !i)) return;
    let n = !1;
    const r = pe(),
      s = e === "window" ? r.innerHeight : i.clientHeight,
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
        ? r.matchMedia(`(min-width: ${c}px)`).matches && (n = l)
        : c <= i.clientWidth && (n = l);
    }
    return n || "max";
  }
  const wp = { setBreakpoint: bp, getBreakpoint: _p };
  function xp(t, e) {
    const i = [];
    return (
      t.forEach((n) => {
        typeof n == "object"
          ? Object.keys(n).forEach((r) => {
              n[r] && i.push(e + r);
            })
          : typeof n == "string" && i.push(e + n);
      }),
      i
    );
  }
  function Sp() {
    const t = this,
      { classNames: e, params: i, rtl: n, $el: r, device: s, support: a } = t,
      o = xp(
        [
          "initialized",
          i.direction,
          { "pointer-events": !a.touch },
          { "free-mode": t.params.freeMode && i.freeMode.enabled },
          { autoheight: i.autoHeight },
          { rtl: n },
          { grid: i.grid && i.grid.rows > 1 },
          {
            "grid-column":
              i.grid && i.grid.rows > 1 && i.grid.fill === "column",
          },
          { android: s.android },
          { ios: s.ios },
          { "css-mode": i.cssMode },
          { centered: i.cssMode && i.centeredSlides },
          { "watch-progress": i.watchSlidesProgress },
        ],
        i.containerModifierClass
      );
    e.push(...o), r.addClass([...e].join(" ")), t.emitContainerClasses();
  }
  function Tp() {
    const t = this,
      { $el: e, classNames: i } = t;
    e.removeClass(i.join(" ")), t.emitContainerClasses();
  }
  const Ep = { addClasses: Sp, removeClasses: Tp };
  function Cp(t, e, i, n, r, s) {
    const a = pe();
    let o;
    function l() {
      s && s();
    }
    !N(t).parent("picture")[0] && (!t.complete || !r) && e
      ? ((o = new a.Image()),
        (o.onload = l),
        (o.onerror = l),
        n && (o.sizes = n),
        i && (o.srcset = i),
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
    for (let i = 0; i < t.imagesToLoad.length; i += 1) {
      const n = t.imagesToLoad[i];
      t.loadImage(
        n,
        n.currentSrc || n.getAttribute("src"),
        n.srcset || n.getAttribute("srcset"),
        n.sizes || n.getAttribute("sizes"),
        !0,
        e
      );
    }
  }
  const Ap = { loadImage: Cp, preloadImages: kp };
  function Pp() {
    const t = this,
      { isLocked: e, params: i } = t,
      { slidesOffsetBefore: n } = i;
    if (n) {
      const r = t.slides.length - 1,
        s = t.slidesGrid[r] + t.slidesSizesGrid[r] + n * 2;
      t.isLocked = t.size > s;
    } else t.isLocked = t.snapGrid.length === 1;
    i.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
      i.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
      e && e !== t.isLocked && (t.isEnd = !1),
      e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
  }
  const Mp = { checkOverflow: Pp },
    ic = {
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
  function $p(t, e) {
    return function (n = {}) {
      const r = Object.keys(n)[0],
        s = n[r];
      if (typeof s != "object" || s === null) {
        At(e, n);
        return;
      }
      if (
        (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
          t[r] === !0 &&
          (t[r] = { auto: !0 }),
        !(r in t && "enabled" in s))
      ) {
        At(e, n);
        return;
      }
      t[r] === !0 && (t[r] = { enabled: !0 }),
        typeof t[r] == "object" && !("enabled" in t[r]) && (t[r].enabled = !0),
        t[r] || (t[r] = { enabled: !1 }),
        At(e, n);
    };
  }
  const Da = {
      eventsEmitter: kh,
      update: Rh,
      translate: Hh,
      transition: Xh,
      slide: tp,
      loop: sp,
      grabCursor: lp,
      events: yp,
      breakpoints: wp,
      checkOverflow: Mp,
      classes: Ep,
      images: Ap,
    },
    Ra = {};
  class ft {
    constructor(...e) {
      let i, n;
      if (
        (e.length === 1 &&
        e[0].constructor &&
        Object.prototype.toString.call(e[0]).slice(8, -1) === "Object"
          ? (n = e[0])
          : ([i, n] = e),
        n || (n = {}),
        (n = At({}, n)),
        i && !n.el && (n.el = i),
        n.el && N(n.el).length > 1)
      ) {
        const o = [];
        return (
          N(n.el).each((l) => {
            const c = At({}, n, { el: l });
            o.push(new ft(c));
          }),
          o
        );
      }
      const r = this;
      (r.__swiper__ = !0),
        (r.support = Zl()),
        (r.device = xh({ userAgent: n.userAgent })),
        (r.browser = Th()),
        (r.eventsListeners = {}),
        (r.eventsAnyListeners = []),
        (r.modules = [...r.__modules__]),
        n.modules && Array.isArray(n.modules) && r.modules.push(...n.modules);
      const s = {};
      r.modules.forEach((o) => {
        o({
          swiper: r,
          extendParams: $p(n, s),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r),
        });
      });
      const a = At({}, ic, s);
      return (
        (r.params = At({}, a, Ra, n)),
        (r.originalParams = At({}, r.params)),
        (r.passedParams = At({}, n)),
        r.params &&
          r.params.on &&
          Object.keys(r.params.on).forEach((o) => {
            r.on(o, r.params.on[o]);
          }),
        r.params && r.params.onAny && r.onAny(r.params.onAny),
        (r.$ = N),
        Object.assign(r, {
          enabled: r.params.enabled,
          el: i,
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
            lastClickTime: kt(),
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
    setProgress(e, i) {
      const n = this;
      e = Math.min(Math.max(e, 0), 1);
      const r = n.minTranslate(),
        a = (n.maxTranslate() - r) * e + r;
      n.translateTo(a, typeof i > "u" ? 0 : i),
        n.updateActiveIndex(),
        n.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const i = e.el.className
        .split(" ")
        .filter(
          (n) =>
            n.indexOf("swiper") === 0 ||
            n.indexOf(e.params.containerModifierClass) === 0
        );
      e.emit("_containerClasses", i.join(" "));
    }
    getSlideClasses(e) {
      const i = this;
      return i.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (n) =>
                n.indexOf("swiper-slide") === 0 ||
                n.indexOf(i.params.slideClass) === 0
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const i = [];
      e.slides.each((n) => {
        const r = e.getSlideClasses(n);
        i.push({ slideEl: n, classNames: r }), e.emit("_slideClass", n, r);
      }),
        e.emit("_slideClasses", i);
    }
    slidesPerViewDynamic(e = "current", i = !1) {
      const n = this,
        {
          params: r,
          slides: s,
          slidesGrid: a,
          slidesSizesGrid: o,
          size: l,
          activeIndex: c,
        } = n;
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
          (i ? a[d] + o[d] - a[c] < l : a[d] - a[c] < l) && (u += 1);
      else for (let d = c - 1; d >= 0; d -= 1) a[c] - a[d] < l && (u += 1);
      return u;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: i, params: n } = e;
      n.breakpoints && e.setBreakpoint(),
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
        n.watchOverflow && i !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, i = !0) {
      const n = this,
        r = n.params.direction;
      return (
        e || (e = r === "horizontal" ? "vertical" : "horizontal"),
        e === r ||
          (e !== "horizontal" && e !== "vertical") ||
          (n.$el
            .removeClass(`${n.params.containerModifierClass}${r}`)
            .addClass(`${n.params.containerModifierClass}${e}`),
          n.emitContainerClasses(),
          (n.params.direction = e),
          n.slides.each((s) => {
            e === "vertical" ? (s.style.width = "") : (s.style.height = "");
          }),
          n.emit("changeDirection"),
          i && n.update()),
        n
      );
    }
    changeLanguageDirection(e) {
      const i = this;
      (i.rtl && e === "rtl") ||
        (!i.rtl && e === "ltr") ||
        ((i.rtl = e === "rtl"),
        (i.rtlTranslate = i.params.direction === "horizontal" && i.rtl),
        i.rtl
          ? (i.$el.addClass(`${i.params.containerModifierClass}rtl`),
            (i.el.dir = "rtl"))
          : (i.$el.removeClass(`${i.params.containerModifierClass}rtl`),
            (i.el.dir = "ltr")),
        i.update());
    }
    mount(e) {
      const i = this;
      if (i.mounted) return !0;
      const n = N(e || i.params.el);
      if (((e = n[0]), !e)) return !1;
      e.swiper = i;
      const r = () =>
        `.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let a = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const o = N(e.shadowRoot.querySelector(r()));
          return (o.children = (l) => n.children(l)), o;
        }
        return n.children ? n.children(r()) : N(n).children(r());
      })();
      if (a.length === 0 && i.params.createElements) {
        const l = Re().createElement("div");
        (a = N(l)),
          (l.className = i.params.wrapperClass),
          n.append(l),
          n.children(`.${i.params.slideClass}`).each((c) => {
            a.append(c);
          });
      }
      return (
        Object.assign(i, {
          $el: n,
          el: e,
          $wrapperEl: a,
          wrapperEl: a[0],
          mounted: !0,
          rtl: e.dir.toLowerCase() === "rtl" || n.css("direction") === "rtl",
          rtlTranslate:
            i.params.direction === "horizontal" &&
            (e.dir.toLowerCase() === "rtl" || n.css("direction") === "rtl"),
          wrongRTL: a.css("display") === "-webkit-box",
        }),
        !0
      );
    }
    init(e) {
      const i = this;
      return (
        i.initialized ||
          i.mount(e) === !1 ||
          (i.emit("beforeInit"),
          i.params.breakpoints && i.setBreakpoint(),
          i.addClasses(),
          i.params.loop && i.loopCreate(),
          i.updateSize(),
          i.updateSlides(),
          i.params.watchOverflow && i.checkOverflow(),
          i.params.grabCursor && i.enabled && i.setGrabCursor(),
          i.params.preloadImages && i.preloadImages(),
          i.params.loop
            ? i.slideTo(
                i.params.initialSlide + i.loopedSlides,
                0,
                i.params.runCallbacksOnInit,
                !1,
                !0
              )
            : i.slideTo(
                i.params.initialSlide,
                0,
                i.params.runCallbacksOnInit,
                !1,
                !0
              ),
          i.attachEvents(),
          (i.initialized = !0),
          i.emit("init"),
          i.emit("afterInit")),
        i
      );
    }
    destroy(e = !0, i = !0) {
      const n = this,
        { params: r, $el: s, $wrapperEl: a, slides: o } = n;
      return (
        typeof n.params > "u" ||
          n.destroyed ||
          (n.emit("beforeDestroy"),
          (n.initialized = !1),
          n.detachEvents(),
          r.loop && n.loopDestroy(),
          i &&
            (n.removeClasses(),
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
          n.emit("destroy"),
          Object.keys(n.eventsListeners).forEach((l) => {
            n.off(l);
          }),
          e !== !1 && ((n.$el[0].swiper = null), vh(n)),
          (n.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      At(Ra, e);
    }
    static get extendedDefaults() {
      return Ra;
    }
    static get defaults() {
      return ic;
    }
    static installModule(e) {
      ft.prototype.__modules__ || (ft.prototype.__modules__ = []);
      const i = ft.prototype.__modules__;
      typeof e == "function" && i.indexOf(e) < 0 && i.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((i) => ft.installModule(i)), ft)
        : (ft.installModule(e), ft);
    }
  }
  Object.keys(Da).forEach((t) => {
    Object.keys(Da[t]).forEach((e) => {
      ft.prototype[e] = Da[t][e];
    });
  }),
    ft.use([Eh, Ch]);
  function Op({ swiper: t, extendParams: e, on: i, emit: n }) {
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
        m.attr("data-swiper-slide-index") ||
          m.attr("data-swiper-slide-index", f),
        h.cache && (t.virtual.cache[f] = m),
        m
      );
    }
    function a(d) {
      const {
          slidesPerView: f,
          slidesPerGroup: h,
          centeredSlides: m,
        } = t.params,
        { addSlidesBefore: p, addSlidesAfter: g } = t.params.virtual,
        { from: b, to: v, slides: y, slidesGrid: _, offset: x } = t.virtual;
      t.params.cssMode || t.updateActiveIndex();
      const T = t.activeIndex || 0;
      let E;
      t.rtlTranslate ? (E = "right") : (E = t.isHorizontal() ? "left" : "top");
      let C, $;
      m
        ? ((C = Math.floor(f / 2) + h + g), ($ = Math.floor(f / 2) + h + p))
        : ((C = f + (h - 1) + g), ($ = h + p));
      const k = Math.max((T || 0) - $, 0),
        M = Math.min((T || 0) + C, y.length - 1),
        w = (t.slidesGrid[k] || 0) - (t.slidesGrid[0] || 0);
      Object.assign(t.virtual, {
        from: k,
        to: M,
        offset: w,
        slidesGrid: t.slidesGrid,
      });
      function S() {
        t.updateSlides(),
          t.updateProgress(),
          t.updateSlidesClasses(),
          t.lazy && t.params.lazy.enabled && t.lazy.load(),
          n("virtualUpdate");
      }
      if (b === k && v === M && !d) {
        t.slidesGrid !== _ && w !== x && t.slides.css(E, `${w}px`),
          t.updateProgress(),
          n("virtualUpdate");
        return;
      }
      if (t.params.virtual.renderExternal) {
        t.params.virtual.renderExternal.call(t, {
          offset: w,
          from: k,
          to: M,
          slides: (function () {
            const L = [];
            for (let I = k; I <= M; I += 1) L.push(y[I]);
            return L;
          })(),
        }),
          t.params.virtual.renderExternalUpdate ? S() : n("virtualUpdate");
        return;
      }
      const O = [],
        z = [];
      if (d) t.$wrapperEl.find(`.${t.params.slideClass}`).remove();
      else
        for (let A = b; A <= v; A += 1)
          (A < k || A > M) &&
            t.$wrapperEl
              .find(`.${t.params.slideClass}[data-swiper-slide-index="${A}"]`)
              .remove();
      for (let A = 0; A < y.length; A += 1)
        A >= k &&
          A <= M &&
          (typeof v > "u" || d
            ? z.push(A)
            : (A > v && z.push(A), A < b && O.push(A)));
      z.forEach((A) => {
        t.$wrapperEl.append(s(y[A], A));
      }),
        O.sort((A, L) => L - A).forEach((A) => {
          t.$wrapperEl.prepend(s(y[A], A));
        }),
        t.$wrapperEl.children(".swiper-slide").css(E, `${w}px`),
        S();
    }
    function o(d) {
      if (typeof d == "object" && "length" in d)
        for (let f = 0; f < d.length; f += 1)
          d[f] && t.virtual.slides.push(d[f]);
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
        Object.keys(p).forEach((b) => {
          const v = p[b],
            y = v.attr("data-swiper-slide-index");
          y && v.attr("data-swiper-slide-index", parseInt(y, 10) + m),
            (g[parseInt(b, 10) + m] = v);
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
    i("beforeInit", () => {
      t.params.virtual.enabled &&
        ((t.virtual.slides = t.params.virtual.slides),
        t.classNames.push(`${t.params.containerModifierClass}virtual`),
        (t.params.watchSlidesProgress = !0),
        (t.originalParams.watchSlidesProgress = !0),
        t.params.initialSlide || a());
    }),
      i("setTranslate", () => {
        t.params.virtual.enabled &&
          (t.params.cssMode && !t._immediateVirtual
            ? (clearTimeout(r),
              (r = setTimeout(() => {
                a();
              }, 100)))
            : a());
      }),
      i("init update resize", () => {
        t.params.virtual.enabled &&
          t.params.cssMode &&
          Ar(t.wrapperEl, "--swiper-virtual-size", `${t.virtualSize}px`);
      }),
      Object.assign(t.virtual, {
        appendSlide: o,
        prependSlide: l,
        removeSlide: c,
        removeAllSlides: u,
        update: a,
      });
  }
  function zp({ swiper: t, extendParams: e, on: i, emit: n }) {
    const r = Re(),
      s = pe();
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
        b = f === 39,
        v = f === 38,
        y = f === 40;
      if (
        (!t.allowSlideNext &&
          ((t.isHorizontal() && b) || (t.isVertical() && y) || p)) ||
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
        if (t.params.keyboard.onlyInViewport && (m || p || g || b || v || y)) {
          let _ = !1;
          if (
            t.$el.parents(`.${t.params.slideClass}`).length > 0 &&
            t.$el.parents(`.${t.params.slideActiveClass}`).length === 0
          )
            return;
          const x = t.$el,
            T = x[0].clientWidth,
            E = x[0].clientHeight,
            C = s.innerWidth,
            $ = s.innerHeight,
            k = t.$el.offset();
          u && (k.left -= t.$el[0].scrollLeft);
          const M = [
            [k.left, k.top],
            [k.left + T, k.top],
            [k.left, k.top + E],
            [k.left + T, k.top + E],
          ];
          for (let w = 0; w < M.length; w += 1) {
            const S = M[w];
            if (S[0] >= 0 && S[0] <= C && S[1] >= 0 && S[1] <= $) {
              if (S[0] === 0 && S[1] === 0) continue;
              _ = !0;
            }
          }
          if (!_) return;
        }
        t.isHorizontal()
          ? ((m || p || g || b) &&
              (d.preventDefault ? d.preventDefault() : (d.returnValue = !1)),
            (((p || b) && !u) || ((m || g) && u)) && t.slideNext(),
            (((m || g) && !u) || ((p || b) && u)) && t.slidePrev())
          : ((m || p || v || y) &&
              (d.preventDefault ? d.preventDefault() : (d.returnValue = !1)),
            (p || y) && t.slideNext(),
            (m || v) && t.slidePrev()),
          n("keyPress", f);
      }
    }
    function o() {
      t.keyboard.enabled || (N(r).on("keydown", a), (t.keyboard.enabled = !0));
    }
    function l() {
      t.keyboard.enabled && (N(r).off("keydown", a), (t.keyboard.enabled = !1));
    }
    i("init", () => {
      t.params.keyboard.enabled && o();
    }),
      i("destroy", () => {
        t.keyboard.enabled && l();
      }),
      Object.assign(t.keyboard, { enable: o, disable: l });
  }
  function Lp({ swiper: t, extendParams: e, on: i, emit: n }) {
    const r = pe();
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
      a = kt(),
      o;
    const l = [];
    function c(v) {
      let T = 0,
        E = 0,
        C = 0,
        $ = 0;
      return (
        "detail" in v && (E = v.detail),
        "wheelDelta" in v && (E = -v.wheelDelta / 120),
        "wheelDeltaY" in v && (E = -v.wheelDeltaY / 120),
        "wheelDeltaX" in v && (T = -v.wheelDeltaX / 120),
        "axis" in v && v.axis === v.HORIZONTAL_AXIS && ((T = E), (E = 0)),
        (C = T * 10),
        ($ = E * 10),
        "deltaY" in v && ($ = v.deltaY),
        "deltaX" in v && (C = v.deltaX),
        v.shiftKey && !C && ((C = $), ($ = 0)),
        (C || $) &&
          v.deltaMode &&
          (v.deltaMode === 1
            ? ((C *= 40), ($ *= 40))
            : ((C *= 800), ($ *= 800))),
        C && !T && (T = C < 1 ? -1 : 1),
        $ && !E && (E = $ < 1 ? -1 : 1),
        { spinX: T, spinY: E, pixelX: C, pixelY: $ }
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
          kt() - a < t.params.mousewheel.thresholdTime)
        ? !1
        : v.delta >= 6 && kt() - a < 60
        ? !0
        : (v.direction < 0
            ? (!t.isEnd || t.params.loop) &&
              !t.animating &&
              (t.slideNext(), n("scroll", v.raw))
            : (!t.isBeginning || t.params.loop) &&
              !t.animating &&
              (t.slidePrev(), n("scroll", v.raw)),
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
        _ = !0;
      if (!t.enabled) return;
      const x = t.params.mousewheel;
      t.params.cssMode && y.preventDefault();
      let T = t.$el;
      if (
        (t.params.mousewheel.eventsTarget !== "container" &&
          (T = N(t.params.mousewheel.eventsTarget)),
        !t.mouseEntered && !T[0].contains(y.target) && !x.releaseOnEdges)
      )
        return !0;
      y.originalEvent && (y = y.originalEvent);
      let E = 0;
      const C = t.rtlTranslate ? -1 : 1,
        $ = c(y);
      if (x.forceToAxis)
        if (t.isHorizontal())
          if (Math.abs($.pixelX) > Math.abs($.pixelY)) E = -$.pixelX * C;
          else return !0;
        else if (Math.abs($.pixelY) > Math.abs($.pixelX)) E = -$.pixelY;
        else return !0;
      else
        E = Math.abs($.pixelX) > Math.abs($.pixelY) ? -$.pixelX * C : -$.pixelY;
      if (E === 0) return !0;
      x.invert && (E = -E);
      let k = t.getTranslate() + E * x.sensitivity;
      if (
        (k >= t.minTranslate() && (k = t.minTranslate()),
        k <= t.maxTranslate() && (k = t.maxTranslate()),
        (_ = t.params.loop
          ? !0
          : !(k === t.minTranslate() || k === t.maxTranslate())),
        _ && t.params.nested && y.stopPropagation(),
        !t.params.freeMode || !t.params.freeMode.enabled)
      ) {
        const M = {
          time: kt(),
          delta: Math.abs(E),
          direction: Math.sign(E),
          raw: v,
        };
        l.length >= 2 && l.shift();
        const w = l.length ? l[l.length - 1] : void 0;
        if (
          (l.push(M),
          w
            ? (M.direction !== w.direction ||
                M.delta > w.delta ||
                M.time > w.time + 150) &&
              f(M)
            : f(M),
          h(M))
        )
          return !0;
      } else {
        const M = { time: kt(), delta: Math.abs(E), direction: Math.sign(E) },
          w =
            o &&
            M.time < o.time + 500 &&
            M.delta <= o.delta &&
            M.direction === o.direction;
        if (!w) {
          (o = void 0), t.params.loop && t.loopFix();
          let S = t.getTranslate() + E * x.sensitivity;
          const O = t.isBeginning,
            z = t.isEnd;
          if (
            (S >= t.minTranslate() && (S = t.minTranslate()),
            S <= t.maxTranslate() && (S = t.maxTranslate()),
            t.setTransition(0),
            t.setTranslate(S),
            t.updateProgress(),
            t.updateActiveIndex(),
            t.updateSlidesClasses(),
            ((!O && t.isBeginning) || (!z && t.isEnd)) &&
              t.updateSlidesClasses(),
            t.params.freeMode.sticky)
          ) {
            clearTimeout(s), (s = void 0), l.length >= 15 && l.shift();
            const A = l.length ? l[l.length - 1] : void 0,
              L = l[0];
            if (
              (l.push(M),
              A && (M.delta > A.delta || M.direction !== A.direction))
            )
              l.splice(0);
            else if (
              l.length >= 15 &&
              M.time - L.time < 500 &&
              L.delta - M.delta >= 1 &&
              M.delta <= 6
            ) {
              const I = E > 0 ? 0.8 : 0.2;
              (o = M),
                l.splice(0),
                (s = Di(() => {
                  t.slideToClosest(t.params.speed, !0, void 0, I);
                }, 0));
            }
            s ||
              (s = Di(() => {
                (o = M),
                  l.splice(0),
                  t.slideToClosest(t.params.speed, !0, void 0, 0.5);
              }, 500));
          }
          if (
            (w || n("scroll", y),
            t.params.autoplay &&
              t.params.autoplayDisableOnInteraction &&
              t.autoplay.stop(),
            S === t.minTranslate() || S === t.maxTranslate())
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
    function b() {
      return t.params.cssMode
        ? (t.wrapperEl.addEventListener(event, m), !0)
        : t.mousewheel.enabled
        ? (p("off"), (t.mousewheel.enabled = !1), !0)
        : !1;
    }
    i("init", () => {
      !t.params.mousewheel.enabled && t.params.cssMode && b(),
        t.params.mousewheel.enabled && g();
    }),
      i("destroy", () => {
        t.params.cssMode && g(), t.mousewheel.enabled && b();
      }),
      Object.assign(t.mousewheel, { enable: g, disable: b });
  }
  function Na(t, e, i, n) {
    const r = Re();
    return (
      t.params.createElements &&
        Object.keys(n).forEach((s) => {
          if (!i[s] && i.auto === !0) {
            let a = t.$el.children(`.${n[s]}`)[0];
            a ||
              ((a = r.createElement("div")),
              (a.className = n[s]),
              t.$el.append(a)),
              (i[s] = a),
              (e[s] = a);
          }
        }),
      i
    );
  }
  function Ip({ swiper: t, extendParams: e, on: i, emit: n }) {
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
      s(m, t.isBeginning && !t.params.rewind),
        s(h, t.isEnd && !t.params.rewind);
    }
    function o(h) {
      h.preventDefault(),
        !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
          (t.slidePrev(), n("navigationPrev"));
    }
    function l(h) {
      h.preventDefault(),
        !(t.isEnd && !t.params.loop && !t.params.rewind) &&
          (t.slideNext(), n("navigationNext"));
    }
    function c() {
      const h = t.params.navigation;
      if (
        ((t.params.navigation = Na(
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
    i("init", () => {
      t.params.navigation.enabled === !1 ? f() : (c(), a());
    }),
      i("toEdge fromEdge lock unlock", () => {
        a();
      }),
      i("destroy", () => {
        u();
      }),
      i("enable disable", () => {
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
      i("click", (h, m) => {
        const { $nextEl: p, $prevEl: g } = t.navigation,
          b = m.target;
        if (t.params.navigation.hideOnClick && !N(b).is(g) && !N(b).is(p)) {
          if (
            t.pagination &&
            t.params.pagination &&
            t.params.pagination.clickable &&
            (t.pagination.el === b || t.pagination.el.contains(b))
          )
            return;
          let v;
          p
            ? (v = p.hasClass(t.params.navigation.hiddenClass))
            : g && (v = g.hasClass(t.params.navigation.hiddenClass)),
            n(v === !0 ? "navigationShow" : "navigationHide"),
            p && p.toggleClass(t.params.navigation.hiddenClass),
            g && g.toggleClass(t.params.navigation.hiddenClass);
        }
      });
    const d = () => {
        t.$el.removeClass(t.params.navigation.navigationDisabledClass),
          c(),
          a();
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
  function _i(t = "") {
    return `.${t
      .trim()
      .replace(/([\.:!\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }
  function Dp({ swiper: t, extendParams: e, on: i, emit: n }) {
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
      const { bulletActiveClass: b } = t.params.pagination;
      p[g]().addClass(`${b}-${g}`)[g]().addClass(`${b}-${g}-${g}`);
    }
    function c() {
      const p = t.rtl,
        g = t.params.pagination;
      if (o()) return;
      const b =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length,
        v = t.pagination.$el;
      let y;
      const _ = t.params.loop
        ? Math.ceil((b - t.loopedSlides * 2) / t.params.slidesPerGroup)
        : t.snapGrid.length;
      if (
        (t.params.loop
          ? ((y = Math.ceil(
              (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
            )),
            y > b - 1 - t.loopedSlides * 2 && (y -= b - t.loopedSlides * 2),
            y > _ - 1 && (y -= _),
            y < 0 && t.params.paginationType !== "bullets" && (y = _ + y))
          : typeof t.snapIndex < "u"
          ? (y = t.snapIndex)
          : (y = t.activeIndex || 0),
        g.type === "bullets" &&
          t.pagination.bullets &&
          t.pagination.bullets.length > 0)
      ) {
        const x = t.pagination.bullets;
        let T, E, C;
        if (
          (g.dynamicBullets &&
            ((s = x.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
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
            (T = Math.max(y - a, 0)),
            (E = T + (Math.min(x.length, g.dynamicMainBullets) - 1)),
            (C = (E + T) / 2)),
          x.removeClass(
            ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
              .map(($) => `${g.bulletActiveClass}${$}`)
              .join(" ")
          ),
          v.length > 1)
        )
          x.each(($) => {
            const k = N($),
              M = k.index();
            M === y && k.addClass(g.bulletActiveClass),
              g.dynamicBullets &&
                (M >= T && M <= E && k.addClass(`${g.bulletActiveClass}-main`),
                M === T && l(k, "prev"),
                M === E && l(k, "next"));
          });
        else {
          const $ = x.eq(y),
            k = $.index();
          if (($.addClass(g.bulletActiveClass), g.dynamicBullets)) {
            const M = x.eq(T),
              w = x.eq(E);
            for (let S = T; S <= E; S += 1)
              x.eq(S).addClass(`${g.bulletActiveClass}-main`);
            if (t.params.loop)
              if (k >= x.length) {
                for (let S = g.dynamicMainBullets; S >= 0; S -= 1)
                  x.eq(x.length - S).addClass(`${g.bulletActiveClass}-main`);
                x.eq(x.length - g.dynamicMainBullets - 1).addClass(
                  `${g.bulletActiveClass}-prev`
                );
              } else l(M, "prev"), l(w, "next");
            else l(M, "prev"), l(w, "next");
          }
        }
        if (g.dynamicBullets) {
          const $ = Math.min(x.length, g.dynamicMainBullets + 4),
            k = (s * $ - s) / 2 - C * s,
            M = p ? "right" : "left";
          x.css(t.isHorizontal() ? M : "top", `${k}px`);
        }
      }
      if (
        (g.type === "fraction" &&
          (v.find(_i(g.currentClass)).text(g.formatFractionCurrent(y + 1)),
          v.find(_i(g.totalClass)).text(g.formatFractionTotal(_))),
        g.type === "progressbar")
      ) {
        let x;
        g.progressbarOpposite
          ? (x = t.isHorizontal() ? "vertical" : "horizontal")
          : (x = t.isHorizontal() ? "horizontal" : "vertical");
        const T = (y + 1) / _;
        let E = 1,
          C = 1;
        x === "horizontal" ? (E = T) : (C = T),
          v
            .find(_i(g.progressbarFillClass))
            .transform(`translate3d(0,0,0) scaleX(${E}) scaleY(${C})`)
            .transition(t.params.speed);
      }
      g.type === "custom" && g.renderCustom
        ? (v.html(g.renderCustom(t, y + 1, _)), n("paginationRender", v[0]))
        : n("paginationUpdate", v[0]),
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
        b = t.pagination.$el;
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
        for (let _ = 0; _ < y; _ += 1)
          p.renderBullet
            ? (v += p.renderBullet.call(t, _, p.bulletClass))
            : (v += `<${p.bulletElement} class="${p.bulletClass}"></${p.bulletElement}>`);
        b.html(v), (t.pagination.bullets = b.find(_i(p.bulletClass)));
      }
      p.type === "fraction" &&
        (p.renderFraction
          ? (v = p.renderFraction.call(t, p.currentClass, p.totalClass))
          : (v = `<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),
        b.html(v)),
        p.type === "progressbar" &&
          (p.renderProgressbar
            ? (v = p.renderProgressbar.call(t, p.progressbarFillClass))
            : (v = `<span class="${p.progressbarFillClass}"></span>`),
          b.html(v)),
        p.type !== "custom" && n("paginationRender", t.pagination.$el[0]);
    }
    function d() {
      t.params.pagination = Na(
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
            (g = g.filter((b) => N(b).parents(".swiper")[0] === t.el))),
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
          g.on("click", _i(p.bulletClass), function (v) {
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
        p.clickable && g.off("click", _i(p.bulletClass));
    }
    i("init", () => {
      t.params.pagination.enabled === !1 ? m() : (d(), u(), c());
    }),
      i("activeIndexChange", () => {
        (t.params.loop || typeof t.snapIndex > "u") && c();
      }),
      i("snapIndexChange", () => {
        t.params.loop || c();
      }),
      i("slidesLengthChange", () => {
        t.params.loop && (u(), c());
      }),
      i("snapGridLengthChange", () => {
        t.params.loop || (u(), c());
      }),
      i("destroy", () => {
        f();
      }),
      i("enable disable", () => {
        const { $el: p } = t.pagination;
        p &&
          p[t.enabled ? "removeClass" : "addClass"](
            t.params.pagination.lockClass
          );
      }),
      i("lock unlock", () => {
        c();
      }),
      i("click", (p, g) => {
        const b = g.target,
          { $el: v } = t.pagination;
        if (
          t.params.pagination.el &&
          t.params.pagination.hideOnClick &&
          v &&
          v.length > 0 &&
          !N(b).hasClass(t.params.pagination.bulletClass)
        ) {
          if (
            t.navigation &&
            ((t.navigation.nextEl && b === t.navigation.nextEl) ||
              (t.navigation.prevEl && b === t.navigation.prevEl))
          )
            return;
          const y = v.hasClass(t.params.pagination.hiddenClass);
          n(y === !0 ? "paginationShow" : "paginationHide"),
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
  function Rp({ swiper: t, extendParams: e, on: i, emit: n }) {
    const r = Re();
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
      const { scrollbar: M, rtlTranslate: w, progress: S } = t,
        { $dragEl: O, $el: z } = M,
        A = t.params.scrollbar;
      let L = c,
        I = (u - c) * S;
      w
        ? ((I = -I), I > 0 ? ((L = c - I), (I = 0)) : -I + c > u && (L = u + I))
        : I < 0
        ? ((L = c + I), (I = 0))
        : I + c > u && (L = u - I),
        t.isHorizontal()
          ? (O.transform(`translate3d(${I}px, 0, 0)`),
            (O[0].style.width = `${L}px`))
          : (O.transform(`translate3d(0px, ${I}px, 0)`),
            (O[0].style.height = `${L}px`)),
        A.hide &&
          (clearTimeout(a),
          (z[0].style.opacity = 1),
          (a = setTimeout(() => {
            (z[0].style.opacity = 0), z.transition(400);
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
        { $dragEl: w, $el: S } = M;
      (w[0].style.width = ""),
        (w[0].style.height = ""),
        (u = t.isHorizontal() ? S[0].offsetWidth : S[0].offsetHeight),
        (d =
          t.size /
          (t.virtualSize +
            t.params.slidesOffsetBefore -
            (t.params.centeredSlides ? t.snapGrid[0] : 0))),
        t.params.scrollbar.dragSize === "auto"
          ? (c = u * d)
          : (c = parseInt(t.params.scrollbar.dragSize, 10)),
        t.isHorizontal()
          ? (w[0].style.width = `${c}px`)
          : (w[0].style.height = `${c}px`),
        d >= 1 ? (S[0].style.display = "none") : (S[0].style.display = ""),
        t.params.scrollbar.hide && (S[0].style.opacity = 0),
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
      const { scrollbar: w, rtlTranslate: S } = t,
        { $el: O } = w;
      let z;
      (z =
        (p(M) -
          O.offset()[t.isHorizontal() ? "left" : "top"] -
          (l !== null ? l : c / 2)) /
        (u - c)),
        (z = Math.max(Math.min(z, 1), 0)),
        S && (z = 1 - z);
      const A = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * z;
      t.updateProgress(A),
        t.setTranslate(A),
        t.updateActiveIndex(),
        t.updateSlidesClasses();
    }
    function b(M) {
      const w = t.params.scrollbar,
        { scrollbar: S, $wrapperEl: O } = t,
        { $el: z, $dragEl: A } = S;
      (s = !0),
        (l =
          M.target === A[0] || M.target === A
            ? p(M) -
              M.target.getBoundingClientRect()[
                t.isHorizontal() ? "left" : "top"
              ]
            : null),
        M.preventDefault(),
        M.stopPropagation(),
        O.transition(100),
        A.transition(100),
        g(M),
        clearTimeout(o),
        z.transition(0),
        w.hide && z.css("opacity", 1),
        t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
        n("scrollbarDragStart", M);
    }
    function v(M) {
      const { scrollbar: w, $wrapperEl: S } = t,
        { $el: O, $dragEl: z } = w;
      s &&
        (M.preventDefault ? M.preventDefault() : (M.returnValue = !1),
        g(M),
        S.transition(0),
        O.transition(0),
        z.transition(0),
        n("scrollbarDragMove", M));
    }
    function y(M) {
      const w = t.params.scrollbar,
        { scrollbar: S, $wrapperEl: O } = t,
        { $el: z } = S;
      s &&
        ((s = !1),
        t.params.cssMode &&
          (t.$wrapperEl.css("scroll-snap-type", ""), O.transition("")),
        w.hide &&
          (clearTimeout(o),
          (o = Di(() => {
            z.css("opacity", 0), z.transition(400);
          }, 1e3))),
        n("scrollbarDragEnd", M),
        w.snapOnRelease && t.slideToClosest());
    }
    function _(M) {
      const {
          scrollbar: w,
          touchEventsTouch: S,
          touchEventsDesktop: O,
          params: z,
          support: A,
        } = t,
        L = w.$el;
      if (!L) return;
      const I = L[0],
        B =
          A.passiveListener && z.passiveListeners
            ? { passive: !1, capture: !1 }
            : !1,
        P =
          A.passiveListener && z.passiveListeners
            ? { passive: !0, capture: !1 }
            : !1;
      if (!I) return;
      const q = M === "on" ? "addEventListener" : "removeEventListener";
      A.touch
        ? (I[q](S.start, b, B), I[q](S.move, v, B), I[q](S.end, y, P))
        : (I[q](O.start, b, B), r[q](O.move, v, B), r[q](O.end, y, P));
    }
    function x() {
      !t.params.scrollbar.el || !t.scrollbar.el || _("on");
    }
    function T() {
      !t.params.scrollbar.el || !t.scrollbar.el || _("off");
    }
    function E() {
      const { scrollbar: M, $el: w } = t;
      t.params.scrollbar = Na(
        t,
        t.originalParams.scrollbar,
        t.params.scrollbar,
        { el: "swiper-scrollbar" }
      );
      const S = t.params.scrollbar;
      if (!S.el) return;
      let O = N(S.el);
      t.params.uniqueNavElements &&
        typeof S.el == "string" &&
        O.length > 1 &&
        w.find(S.el).length === 1 &&
        (O = w.find(S.el)),
        O.addClass(t.isHorizontal() ? S.horizontalClass : S.verticalClass);
      let z = O.find(`.${t.params.scrollbar.dragClass}`);
      z.length === 0 &&
        ((z = N(`<div class="${t.params.scrollbar.dragClass}"></div>`)),
        O.append(z)),
        Object.assign(M, { $el: O, el: O[0], $dragEl: z, dragEl: z[0] }),
        S.draggable && x(),
        O &&
          O[t.enabled ? "removeClass" : "addClass"](
            t.params.scrollbar.lockClass
          );
    }
    function C() {
      const M = t.params.scrollbar,
        w = t.scrollbar.$el;
      w &&
        w.removeClass(t.isHorizontal() ? M.horizontalClass : M.verticalClass),
        T();
    }
    i("init", () => {
      t.params.scrollbar.enabled === !1 ? k() : (E(), m(), f());
    }),
      i("update resize observerUpdate lock unlock", () => {
        m();
      }),
      i("setTranslate", () => {
        f();
      }),
      i("setTransition", (M, w) => {
        h(w);
      }),
      i("enable disable", () => {
        const { $el: M } = t.scrollbar;
        M &&
          M[t.enabled ? "removeClass" : "addClass"](
            t.params.scrollbar.lockClass
          );
      }),
      i("destroy", () => {
        C();
      });
    const $ = () => {
        t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),
          t.scrollbar.$el &&
            t.scrollbar.$el.removeClass(
              t.params.scrollbar.scrollbarDisabledClass
            ),
          E(),
          m(),
          f();
      },
      k = () => {
        t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
          t.scrollbar.$el &&
            t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
          C();
      };
    Object.assign(t.scrollbar, {
      enable: $,
      disable: k,
      updateSize: m,
      setTranslate: f,
      init: E,
      destroy: C,
    });
  }
  function Np({ swiper: t, extendParams: e, on: i }) {
    e({ parallax: { enabled: !1 } });
    const n = (a, o) => {
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
            n(u, l);
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
                  n(h, f);
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
    i("beforeInit", () => {
      t.params.parallax.enabled &&
        ((t.params.watchSlidesProgress = !0),
        (t.originalParams.watchSlidesProgress = !0));
    }),
      i("init", () => {
        t.params.parallax.enabled && r();
      }),
      i("setTranslate", () => {
        t.params.parallax.enabled && r();
      }),
      i("setTransition", (a, o) => {
        t.params.parallax.enabled && s(o);
      });
  }
  function Bp({ swiper: t, extendParams: e, on: i, emit: n }) {
    const r = pe();
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
      set(A) {
        if (h !== A) {
          const L = u.$imageEl ? u.$imageEl[0] : void 0,
            I = u.$slideEl ? u.$slideEl[0] : void 0;
          n("zoomChange", A, L, I);
        }
        h = A;
      },
    });
    function m(A) {
      if (A.targetTouches.length < 2) return 1;
      const L = A.targetTouches[0].pageX,
        I = A.targetTouches[0].pageY,
        B = A.targetTouches[1].pageX,
        P = A.targetTouches[1].pageY;
      return Math.sqrt((B - L) ** 2 + (P - I) ** 2);
    }
    function p(A) {
      const L = t.support,
        I = t.params.zoom;
      if (((l = !1), (c = !1), !L.gestures)) {
        if (
          A.type !== "touchstart" ||
          (A.type === "touchstart" && A.targetTouches.length < 2)
        )
          return;
        (l = !0), (u.scaleStart = m(A));
      }
      if (
        (!u.$slideEl || !u.$slideEl.length) &&
        ((u.$slideEl = N(A.target).closest(`.${t.params.slideClass}`)),
        u.$slideEl.length === 0 && (u.$slideEl = t.slides.eq(t.activeIndex)),
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
    function g(A) {
      const L = t.support,
        I = t.params.zoom,
        B = t.zoom;
      if (!L.gestures) {
        if (
          A.type !== "touchmove" ||
          (A.type === "touchmove" && A.targetTouches.length < 2)
        )
          return;
        (c = !0), (u.scaleMove = m(A));
      }
      if (!u.$imageEl || u.$imageEl.length === 0) {
        A.type === "gesturechange" && p(A);
        return;
      }
      L.gestures
        ? (B.scale = A.scale * s)
        : (B.scale = (u.scaleMove / u.scaleStart) * s),
        B.scale > u.maxRatio &&
          (B.scale = u.maxRatio - 1 + (B.scale - u.maxRatio + 1) ** 0.5),
        B.scale < I.minRatio &&
          (B.scale = I.minRatio + 1 - (I.minRatio - B.scale + 1) ** 0.5),
        u.$imageEl.transform(`translate3d(0,0,0) scale(${B.scale})`);
    }
    function b(A) {
      const L = t.device,
        I = t.support,
        B = t.params.zoom,
        P = t.zoom;
      if (!I.gestures) {
        if (
          !l ||
          !c ||
          A.type !== "touchend" ||
          (A.type === "touchend" && A.changedTouches.length < 2 && !L.android)
        )
          return;
        (l = !1), (c = !1);
      }
      !u.$imageEl ||
        u.$imageEl.length === 0 ||
        ((P.scale = Math.max(Math.min(P.scale, u.maxRatio), B.minRatio)),
        u.$imageEl
          .transition(t.params.speed)
          .transform(`translate3d(0,0,0) scale(${P.scale})`),
        (s = P.scale),
        (a = !1),
        P.scale === 1 && (u.$slideEl = void 0));
    }
    function v(A) {
      const L = t.device;
      !u.$imageEl ||
        u.$imageEl.length === 0 ||
        d.isTouched ||
        (L.android && A.cancelable && A.preventDefault(),
        (d.isTouched = !0),
        (d.touchesStart.x =
          A.type === "touchstart" ? A.targetTouches[0].pageX : A.pageX),
        (d.touchesStart.y =
          A.type === "touchstart" ? A.targetTouches[0].pageY : A.pageY));
    }
    function y(A) {
      const L = t.zoom;
      if (
        !u.$imageEl ||
        u.$imageEl.length === 0 ||
        ((t.allowClick = !1), !d.isTouched || !u.$slideEl)
      )
        return;
      d.isMoved ||
        ((d.width = u.$imageEl[0].offsetWidth),
        (d.height = u.$imageEl[0].offsetHeight),
        (d.startX = Oa(u.$imageWrapEl[0], "x") || 0),
        (d.startY = Oa(u.$imageWrapEl[0], "y") || 0),
        (u.slideWidth = u.$slideEl[0].offsetWidth),
        (u.slideHeight = u.$slideEl[0].offsetHeight),
        u.$imageWrapEl.transition(0));
      const I = d.width * L.scale,
        B = d.height * L.scale;
      if (!(I < u.slideWidth && B < u.slideHeight)) {
        if (
          ((d.minX = Math.min(u.slideWidth / 2 - I / 2, 0)),
          (d.maxX = -d.minX),
          (d.minY = Math.min(u.slideHeight / 2 - B / 2, 0)),
          (d.maxY = -d.minY),
          (d.touchesCurrent.x =
            A.type === "touchmove" ? A.targetTouches[0].pageX : A.pageX),
          (d.touchesCurrent.y =
            A.type === "touchmove" ? A.targetTouches[0].pageY : A.pageY),
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
        A.cancelable && A.preventDefault(),
          A.stopPropagation(),
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
    function _() {
      const A = t.zoom;
      if (!u.$imageEl || u.$imageEl.length === 0) return;
      if (!d.isTouched || !d.isMoved) {
        (d.isTouched = !1), (d.isMoved = !1);
        return;
      }
      (d.isTouched = !1), (d.isMoved = !1);
      let L = 300,
        I = 300;
      const B = f.x * L,
        P = d.currentX + B,
        q = f.y * I,
        G = d.currentY + q;
      f.x !== 0 && (L = Math.abs((P - d.currentX) / f.x)),
        f.y !== 0 && (I = Math.abs((G - d.currentY) / f.y));
      const oe = Math.max(L, I);
      (d.currentX = P), (d.currentY = G);
      const ne = d.width * A.scale,
        Z = d.height * A.scale;
      (d.minX = Math.min(u.slideWidth / 2 - ne / 2, 0)),
        (d.maxX = -d.minX),
        (d.minY = Math.min(u.slideHeight / 2 - Z / 2, 0)),
        (d.maxY = -d.minY),
        (d.currentX = Math.max(Math.min(d.currentX, d.maxX), d.minX)),
        (d.currentY = Math.max(Math.min(d.currentY, d.maxY), d.minY)),
        u.$imageWrapEl
          .transition(oe)
          .transform(`translate3d(${d.currentX}px, ${d.currentY}px,0)`);
    }
    function x() {
      const A = t.zoom;
      u.$slideEl &&
        t.previousIndex !== t.activeIndex &&
        (u.$imageEl && u.$imageEl.transform("translate3d(0,0,0) scale(1)"),
        u.$imageWrapEl && u.$imageWrapEl.transform("translate3d(0,0,0)"),
        (A.scale = 1),
        (s = 1),
        (u.$slideEl = void 0),
        (u.$imageEl = void 0),
        (u.$imageWrapEl = void 0));
    }
    function T(A) {
      const L = t.zoom,
        I = t.params.zoom;
      if (
        (u.$slideEl ||
          (A &&
            A.target &&
            (u.$slideEl = N(A.target).closest(`.${t.params.slideClass}`)),
          u.$slideEl ||
            (t.params.virtual && t.params.virtual.enabled && t.virtual
              ? (u.$slideEl = t.$wrapperEl.children(
                  `.${t.params.slideActiveClass}`
                ))
              : (u.$slideEl = t.slides.eq(t.activeIndex))),
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
      t.params.cssMode &&
        ((t.wrapperEl.style.overflow = "hidden"),
        (t.wrapperEl.style.touchAction = "none")),
        u.$slideEl.addClass(`${I.zoomedSlideClass}`);
      let B, P, q, G, oe, ne, Z, Q, de, he, Te, $e, fe, Ee, Y, te, Oe, ze;
      typeof d.touchesStart.x > "u" && A
        ? ((B = A.type === "touchend" ? A.changedTouches[0].pageX : A.pageX),
          (P = A.type === "touchend" ? A.changedTouches[0].pageY : A.pageY))
        : ((B = d.touchesStart.x), (P = d.touchesStart.y)),
        (L.scale = u.$imageWrapEl.attr("data-swiper-zoom") || I.maxRatio),
        (s = u.$imageWrapEl.attr("data-swiper-zoom") || I.maxRatio),
        A
          ? ((Oe = u.$slideEl[0].offsetWidth),
            (ze = u.$slideEl[0].offsetHeight),
            (q = u.$slideEl.offset().left + r.scrollX),
            (G = u.$slideEl.offset().top + r.scrollY),
            (oe = q + Oe / 2 - B),
            (ne = G + ze / 2 - P),
            (de = u.$imageEl[0].offsetWidth),
            (he = u.$imageEl[0].offsetHeight),
            (Te = de * L.scale),
            ($e = he * L.scale),
            (fe = Math.min(Oe / 2 - Te / 2, 0)),
            (Ee = Math.min(ze / 2 - $e / 2, 0)),
            (Y = -fe),
            (te = -Ee),
            (Z = oe * L.scale),
            (Q = ne * L.scale),
            Z < fe && (Z = fe),
            Z > Y && (Z = Y),
            Q < Ee && (Q = Ee),
            Q > te && (Q = te))
          : ((Z = 0), (Q = 0)),
        u.$imageWrapEl
          .transition(300)
          .transform(`translate3d(${Z}px, ${Q}px,0)`),
        u.$imageEl
          .transition(300)
          .transform(`translate3d(0,0,0) scale(${L.scale})`);
    }
    function E() {
      const A = t.zoom,
        L = t.params.zoom;
      u.$slideEl ||
        (t.params.virtual && t.params.virtual.enabled && t.virtual
          ? (u.$slideEl = t.$wrapperEl.children(
              `.${t.params.slideActiveClass}`
            ))
          : (u.$slideEl = t.slides.eq(t.activeIndex)),
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
          (t.params.cssMode &&
            ((t.wrapperEl.style.overflow = ""),
            (t.wrapperEl.style.touchAction = "")),
          (A.scale = 1),
          (s = 1),
          u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
          u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
          u.$slideEl.removeClass(`${L.zoomedSlideClass}`),
          (u.$slideEl = void 0));
    }
    function C(A) {
      const L = t.zoom;
      L.scale && L.scale !== 1 ? E() : T(A);
    }
    function $() {
      const A = t.support,
        L =
          t.touchEvents.start === "touchstart" &&
          A.passiveListener &&
          t.params.passiveListeners
            ? { passive: !0, capture: !1 }
            : !1,
        I = A.passiveListener ? { passive: !1, capture: !0 } : !0;
      return { passiveListener: L, activeListenerWithCapture: I };
    }
    function k() {
      return `.${t.params.slideClass}`;
    }
    function M(A) {
      const { passiveListener: L } = $(),
        I = k();
      t.$wrapperEl[A]("gesturestart", I, p, L),
        t.$wrapperEl[A]("gesturechange", I, g, L),
        t.$wrapperEl[A]("gestureend", I, b, L);
    }
    function w() {
      o || ((o = !0), M("on"));
    }
    function S() {
      o && ((o = !1), M("off"));
    }
    function O() {
      const A = t.zoom;
      if (A.enabled) return;
      A.enabled = !0;
      const L = t.support,
        { passiveListener: I, activeListenerWithCapture: B } = $(),
        P = k();
      L.gestures
        ? (t.$wrapperEl.on(t.touchEvents.start, w, I),
          t.$wrapperEl.on(t.touchEvents.end, S, I))
        : t.touchEvents.start === "touchstart" &&
          (t.$wrapperEl.on(t.touchEvents.start, P, p, I),
          t.$wrapperEl.on(t.touchEvents.move, P, g, B),
          t.$wrapperEl.on(t.touchEvents.end, P, b, I),
          t.touchEvents.cancel &&
            t.$wrapperEl.on(t.touchEvents.cancel, P, b, I)),
        t.$wrapperEl.on(
          t.touchEvents.move,
          `.${t.params.zoom.containerClass}`,
          y,
          B
        );
    }
    function z() {
      const A = t.zoom;
      if (!A.enabled) return;
      const L = t.support;
      A.enabled = !1;
      const { passiveListener: I, activeListenerWithCapture: B } = $(),
        P = k();
      L.gestures
        ? (t.$wrapperEl.off(t.touchEvents.start, w, I),
          t.$wrapperEl.off(t.touchEvents.end, S, I))
        : t.touchEvents.start === "touchstart" &&
          (t.$wrapperEl.off(t.touchEvents.start, P, p, I),
          t.$wrapperEl.off(t.touchEvents.move, P, g, B),
          t.$wrapperEl.off(t.touchEvents.end, P, b, I),
          t.touchEvents.cancel &&
            t.$wrapperEl.off(t.touchEvents.cancel, P, b, I)),
        t.$wrapperEl.off(
          t.touchEvents.move,
          `.${t.params.zoom.containerClass}`,
          y,
          B
        );
    }
    i("init", () => {
      t.params.zoom.enabled && O();
    }),
      i("destroy", () => {
        z();
      }),
      i("touchStart", (A, L) => {
        t.zoom.enabled && v(L);
      }),
      i("touchEnd", (A, L) => {
        t.zoom.enabled && _();
      }),
      i("doubleTap", (A, L) => {
        !t.animating &&
          t.params.zoom.enabled &&
          t.zoom.enabled &&
          t.params.zoom.toggle &&
          C(L);
      }),
      i("transitionEnd", () => {
        t.zoom.enabled && t.params.zoom.enabled && x();
      }),
      i("slideChange", () => {
        t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && x();
      }),
      Object.assign(t.zoom, {
        enable: O,
        disable: z,
        in: T,
        out: E,
        toggle: C,
      });
  }
  function Fp({ swiper: t, extendParams: e, on: i, emit: n }) {
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
            const b = g.attr("data-background"),
              v = g.attr("data-src"),
              y = g.attr("data-srcset"),
              _ = g.attr("data-sizes"),
              x = g.parent("picture");
            t.loadImage(g[0], v || b, y, _, !1, () => {
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
                  (b
                    ? (g.css("background-image", `url("${b}")`),
                      g.removeAttr("data-background"))
                    : (y && (g.attr("srcset", y), g.removeAttr("data-srcset")),
                      _ && (g.attr("sizes", _), g.removeAttr("data-sizes")),
                      x.length &&
                        x.children("source").each((T) => {
                          const E = N(T);
                          E.attr("data-srcset") &&
                            (E.attr("srcset", E.attr("data-srcset")),
                            E.removeAttr("data-srcset"));
                        }),
                      v && (g.attr("src", v), g.removeAttr("data-src"))),
                  g.addClass(d.loadedClass).removeClass(d.loadingClass),
                  h.find(`.${d.preloaderClass}`).remove(),
                  t.params.loop && u)
                ) {
                  const T = h.attr("data-swiper-slide-index");
                  if (h.hasClass(t.params.slideDuplicateClass)) {
                    const E = t.$wrapperEl.children(
                      `[data-swiper-slide-index="${T}"]:not(.${t.params.slideDuplicateClass})`
                    );
                    a(E.index(), !1);
                  } else {
                    const E = t.$wrapperEl.children(
                      `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${T}"]`
                    );
                    a(E.index(), !1);
                  }
                }
                n("lazyImageReady", h[0], g[0]),
                  t.params.autoHeight && t.updateAutoHeight();
              }
            }),
              n("lazyImageLoad", h[0], g[0]);
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
            c.children(`.${u.slideClass}[data-swiper-slide-index="${v}"]`)
              .length
          )
            return !0;
        } else if (d[v]) return !0;
        return !1;
      }
      function b(v) {
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
            _ = Math.min(f + y + Math.max(v, y), d.length),
            x = Math.max(f - Math.max(y, v), 0);
          for (let T = f + y; T < _; T += 1) g(T) && a(T);
          for (let T = x; T < f; T += 1) g(T) && a(T);
        } else {
          const v = c.children(`.${u.slideNextClass}`);
          v.length > 0 && a(b(v));
          const y = c.children(`.${u.slidePrevClass}`);
          y.length > 0 && a(b(y));
        }
    }
    function l() {
      const c = pe();
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
      const b = [
        [m.left, m.top],
        [m.left + t.width, m.top],
        [m.left, m.top + t.height],
        [m.left + t.width, m.top + t.height],
      ];
      for (let y = 0; y < b.length; y += 1) {
        const _ = b[y];
        if (_[0] >= 0 && _[0] <= f && _[1] >= 0 && _[1] <= h) {
          if (_[0] === 0 && _[1] === 0) continue;
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
    i("beforeInit", () => {
      t.params.lazy.enabled &&
        t.params.preloadImages &&
        (t.params.preloadImages = !1);
    }),
      i("init", () => {
        t.params.lazy.enabled && (t.params.lazy.checkInView ? l() : o());
      }),
      i("scroll", () => {
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          !t.params.freeMode.sticky &&
          o();
      }),
      i("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
        t.params.lazy.enabled && (t.params.lazy.checkInView ? l() : o());
      }),
      i("transitionStart", () => {
        t.params.lazy.enabled &&
          (t.params.lazy.loadOnTransitionStart ||
            (!t.params.lazy.loadOnTransitionStart && !s)) &&
          (t.params.lazy.checkInView ? l() : o());
      }),
      i("transitionEnd", () => {
        t.params.lazy.enabled &&
          !t.params.lazy.loadOnTransitionStart &&
          (t.params.lazy.checkInView ? l() : o());
      }),
      i("slideChange", () => {
        const {
          lazy: c,
          cssMode: u,
          watchSlidesProgress: d,
          touchReleaseOnEdges: f,
          resistanceRatio: h,
        } = t.params;
        c.enabled && (u || (d && (f || h === 0))) && o();
      }),
      i("destroy", () => {
        t.$el &&
          t.$el
            .find(`.${t.params.lazy.loadingClass}`)
            .removeClass(t.params.lazy.loadingClass);
      }),
      Object.assign(t.lazy, { load: o, loadInSlide: a });
  }
  function Vp({ swiper: t, extendParams: e, on: i }) {
    e({ controller: { control: void 0, inverse: !1, by: "slide" } }),
      (t.controller = { control: void 0 });
    function n(l, c) {
      const u = (function () {
        let m, p, g;
        return (b, v) => {
          for (p = -1, m = b.length; m - p > 1; )
            (g = (m + p) >> 1), b[g] <= v ? (p = g) : (m = g);
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
          ? new n(t.slidesGrid, l.slidesGrid)
          : new n(t.snapGrid, l.snapGrid));
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
              Di(() => {
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
    i("beforeInit", () => {
      t.controller.control = t.params.controller.control;
    }),
      i("update", () => {
        o();
      }),
      i("resize", () => {
        o();
      }),
      i("observerUpdate", () => {
        o();
      }),
      i("setTranslate", (l, c, u) => {
        t.controller.control && t.controller.setTranslate(c, u);
      }),
      i("setTransition", (l, c, u) => {
        t.controller.control && t.controller.setTransition(c, u);
      }),
      Object.assign(t.controller, { setTranslate: s, setTransition: a });
  }
  function qp({ swiper: t, extendParams: e, on: i }) {
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
    let n = null;
    function r(w) {
      const S = n;
      S.length !== 0 && (S.html(""), S.html(w));
    }
    function s(w = 16) {
      const S = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(w).replace(/x/g, S);
    }
    function a(w) {
      w.attr("tabIndex", "0");
    }
    function o(w) {
      w.attr("tabIndex", "-1");
    }
    function l(w, S) {
      w.attr("role", S);
    }
    function c(w, S) {
      w.attr("aria-roledescription", S);
    }
    function u(w, S) {
      w.attr("aria-controls", S);
    }
    function d(w, S) {
      w.attr("aria-label", S);
    }
    function f(w, S) {
      w.attr("id", S);
    }
    function h(w, S) {
      w.attr("aria-live", S);
    }
    function m(w) {
      w.attr("aria-disabled", !0);
    }
    function p(w) {
      w.attr("aria-disabled", !1);
    }
    function g(w) {
      if (w.keyCode !== 13 && w.keyCode !== 32) return;
      const S = t.params.a11y,
        O = N(w.target);
      t.navigation &&
        t.navigation.$nextEl &&
        O.is(t.navigation.$nextEl) &&
        ((t.isEnd && !t.params.loop) || t.slideNext(),
        t.isEnd ? r(S.lastSlideMessage) : r(S.nextSlideMessage)),
        t.navigation &&
          t.navigation.$prevEl &&
          O.is(t.navigation.$prevEl) &&
          ((t.isBeginning && !t.params.loop) || t.slidePrev(),
          t.isBeginning ? r(S.firstSlideMessage) : r(S.prevSlideMessage)),
        t.pagination &&
          O.is(_i(t.params.pagination.bulletClass)) &&
          O[0].click();
    }
    function b() {
      if (t.params.loop || t.params.rewind || !t.navigation) return;
      const { $nextEl: w, $prevEl: S } = t.navigation;
      S && S.length > 0 && (t.isBeginning ? (m(S), o(S)) : (p(S), a(S))),
        w && w.length > 0 && (t.isEnd ? (m(w), o(w)) : (p(w), a(w)));
    }
    function v() {
      return (
        t.pagination && t.pagination.bullets && t.pagination.bullets.length
      );
    }
    function y() {
      return v() && t.params.pagination.clickable;
    }
    function _() {
      const w = t.params.a11y;
      v() &&
        t.pagination.bullets.each((S) => {
          const O = N(S);
          t.params.pagination.clickable &&
            (a(O),
            t.params.pagination.renderBullet ||
              (l(O, "button"),
              d(
                O,
                w.paginationBulletMessage.replace(
                  /\{\{index\}\}/,
                  O.index() + 1
                )
              ))),
            O.is(`.${t.params.pagination.bulletActiveClass}`)
              ? O.attr("aria-current", "true")
              : O.removeAttr("aria-current");
        });
    }
    const x = (w, S, O) => {
        a(w),
          w[0].tagName !== "BUTTON" && (l(w, "button"), w.on("keydown", g)),
          d(w, O),
          u(w, S);
      },
      T = () => {
        t.a11y.clicked = !0;
      },
      E = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            t.destroyed || (t.a11y.clicked = !1);
          });
        });
      },
      C = (w) => {
        if (t.a11y.clicked) return;
        const S = w.target.closest(`.${t.params.slideClass}`);
        if (!S || !t.slides.includes(S)) return;
        const O = t.slides.indexOf(S) === t.activeIndex,
          z =
            t.params.watchSlidesProgress &&
            t.visibleSlides &&
            t.visibleSlides.includes(S);
        O ||
          z ||
          (w.sourceCapabilities && w.sourceCapabilities.firesTouchEvents) ||
          (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
          t.slideTo(t.slides.indexOf(S), 0));
      },
      $ = () => {
        const w = t.params.a11y;
        w.itemRoleDescriptionMessage &&
          c(N(t.slides), w.itemRoleDescriptionMessage),
          w.slideRole && l(N(t.slides), w.slideRole);
        const S = t.params.loop
          ? t.slides.filter(
              (O) => !O.classList.contains(t.params.slideDuplicateClass)
            ).length
          : t.slides.length;
        w.slideLabelMessage &&
          t.slides.each((O, z) => {
            const A = N(O),
              L = t.params.loop
                ? parseInt(A.attr("data-swiper-slide-index"), 10)
                : z,
              I = w.slideLabelMessage
                .replace(/\{\{index\}\}/, L + 1)
                .replace(/\{\{slidesLength\}\}/, S);
            d(A, I);
          });
      },
      k = () => {
        const w = t.params.a11y;
        t.$el.append(n);
        const S = t.$el;
        w.containerRoleDescriptionMessage &&
          c(S, w.containerRoleDescriptionMessage),
          w.containerMessage && d(S, w.containerMessage);
        const O = t.$wrapperEl,
          z = w.id || O.attr("id") || `swiper-wrapper-${s(16)}`,
          A = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
        f(O, z), h(O, A), $();
        let L, I;
        t.navigation && t.navigation.$nextEl && (L = t.navigation.$nextEl),
          t.navigation && t.navigation.$prevEl && (I = t.navigation.$prevEl),
          L && L.length && x(L, z, w.nextSlideMessage),
          I && I.length && x(I, z, w.prevSlideMessage),
          y() &&
            t.pagination.$el.on(
              "keydown",
              _i(t.params.pagination.bulletClass),
              g
            ),
          t.$el.on("focus", C, !0),
          t.$el.on("pointerdown", T, !0),
          t.$el.on("pointerup", E, !0);
      };
    function M() {
      n && n.length > 0 && n.remove();
      let w, S;
      t.navigation && t.navigation.$nextEl && (w = t.navigation.$nextEl),
        t.navigation && t.navigation.$prevEl && (S = t.navigation.$prevEl),
        w && w.off("keydown", g),
        S && S.off("keydown", g),
        y() &&
          t.pagination.$el.off(
            "keydown",
            _i(t.params.pagination.bulletClass),
            g
          ),
        t.$el.off("focus", C, !0),
        t.$el.off("pointerdown", T, !0),
        t.$el.off("pointerup", E, !0);
    }
    i("beforeInit", () => {
      n = N(
        `<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
      );
    }),
      i("afterInit", () => {
        t.params.a11y.enabled && k();
      }),
      i(
        "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
        () => {
          t.params.a11y.enabled && $();
        }
      ),
      i("fromEdge toEdge afterInit lock unlock", () => {
        t.params.a11y.enabled && b();
      }),
      i("paginationUpdate", () => {
        t.params.a11y.enabled && _();
      }),
      i("destroy", () => {
        t.params.a11y.enabled && M();
      });
  }
  function Hp({ swiper: t, extendParams: e, on: i }) {
    e({
      history: {
        enabled: !1,
        root: "",
        replaceState: !1,
        key: "slides",
        keepQuery: !1,
      },
    });
    let n = !1,
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
        const h = pe();
        let m;
        f ? (m = new URL(f)) : (m = h.location);
        const p = m.pathname
            .slice(1)
            .split("/")
            .filter((y) => y !== ""),
          g = p.length,
          b = p[g - 2],
          v = p[g - 1];
        return { key: b, value: v };
      },
      o = (f, h) => {
        const m = pe();
        if (!n || !t.params.history.enabled) return;
        let p;
        t.params.url ? (p = new URL(t.params.url)) : (p = m.location);
        const g = t.slides.eq(h);
        let b = s(g.attr("data-history"));
        if (t.params.history.root.length > 0) {
          let y = t.params.history.root;
          y[y.length - 1] === "/" && (y = y.slice(0, y.length - 1)),
            (b = `${y}/${f}/${b}`);
        } else p.pathname.includes(f) || (b = `${f}/${b}`);
        t.params.history.keepQuery && (b += p.search);
        const v = m.history.state;
        (v && v.value === b) ||
          (t.params.history.replaceState
            ? m.history.replaceState({ value: b }, null, b)
            : m.history.pushState({ value: b }, null, b));
      },
      l = (f, h, m) => {
        if (h)
          for (let p = 0, g = t.slides.length; p < g; p += 1) {
            const b = t.slides.eq(p);
            if (
              s(b.attr("data-history")) === h &&
              !b.hasClass(t.params.slideDuplicateClass)
            ) {
              const y = b.index();
              t.slideTo(y, f, m);
            }
          }
        else t.slideTo(0, f, m);
      },
      c = () => {
        (r = a(t.params.url)), l(t.params.speed, r.value, !1);
      },
      u = () => {
        const f = pe();
        if (t.params.history) {
          if (!f.history || !f.history.pushState) {
            (t.params.history.enabled = !1),
              (t.params.hashNavigation.enabled = !0);
            return;
          }
          (n = !0),
            (r = a(t.params.url)),
            !(!r.key && !r.value) &&
              (l(0, r.value, t.params.runCallbacksOnInit),
              t.params.history.replaceState ||
                f.addEventListener("popstate", c));
        }
      },
      d = () => {
        const f = pe();
        t.params.history.replaceState || f.removeEventListener("popstate", c);
      };
    i("init", () => {
      t.params.history.enabled && u();
    }),
      i("destroy", () => {
        t.params.history.enabled && d();
      }),
      i("transitionEnd _freeModeNoMomentumRelease", () => {
        n && o(t.params.history.key, t.activeIndex);
      }),
      i("slideChange", () => {
        n && t.params.cssMode && o(t.params.history.key, t.activeIndex);
      });
  }
  function Yp({ swiper: t, extendParams: e, emit: i, on: n }) {
    let r = !1;
    const s = Re(),
      a = pe();
    e({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
    const o = () => {
        i("hashChange");
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
              i("hashSet");
          else {
            const d = t.slides.eq(t.activeIndex),
              f = d.attr("data-hash") || d.attr("data-history");
            (s.location.hash = f || ""), i("hashSet");
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
              const b = p.index();
              t.slideTo(b, 0, t.params.runCallbacksOnInit, !0);
            }
          }
        t.params.hashNavigation.watchState && N(a).on("hashchange", o);
      },
      u = () => {
        t.params.hashNavigation.watchState && N(a).off("hashchange", o);
      };
    n("init", () => {
      t.params.hashNavigation.enabled && c();
    }),
      n("destroy", () => {
        t.params.hashNavigation.enabled && u();
      }),
      n("transitionEnd _freeModeNoMomentumRelease", () => {
        r && l();
      }),
      n("slideChange", () => {
        r && t.params.cssMode && l();
      });
  }
  function Wp({ swiper: t, extendParams: e, on: i, emit: n }) {
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
        (r = Di(() => {
          let b;
          t.params.autoplay.reverseDirection
            ? t.params.loop
              ? (t.loopFix(),
                (b = t.slidePrev(t.params.speed, !0, !0)),
                n("autoplay"))
              : t.isBeginning
              ? t.params.autoplay.stopOnLastSlide
                ? o()
                : ((b = t.slideTo(t.slides.length - 1, t.params.speed, !0, !0)),
                  n("autoplay"))
              : ((b = t.slidePrev(t.params.speed, !0, !0)), n("autoplay"))
            : t.params.loop
            ? (t.loopFix(),
              (b = t.slideNext(t.params.speed, !0, !0)),
              n("autoplay"))
            : t.isEnd
            ? t.params.autoplay.stopOnLastSlide
              ? o()
              : ((b = t.slideTo(0, t.params.speed, !0, !0)), n("autoplay"))
            : ((b = t.slideNext(t.params.speed, !0, !0)), n("autoplay")),
            ((t.params.cssMode && t.autoplay.running) || b === !1) && s();
        }, g));
    }
    function a() {
      return typeof r < "u" || t.autoplay.running
        ? !1
        : ((t.autoplay.running = !0), n("autoplayStart"), s(), !0);
    }
    function o() {
      return !t.autoplay.running || typeof r > "u"
        ? !1
        : (r && (clearTimeout(r), (r = void 0)),
          (t.autoplay.running = !1),
          n("autoplayStop"),
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
      const p = Re();
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
      t.params.autoplay.disableOnInteraction ? o() : (n("autoplayPause"), l()),
        ["transitionend", "webkitTransitionEnd"].forEach((p) => {
          t.$wrapperEl[0].removeEventListener(p, u);
        });
    }
    function f() {
      t.params.autoplay.disableOnInteraction ||
        ((t.autoplay.paused = !1), n("autoplayResume"), s());
    }
    function h() {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.$el.on("mouseenter", d), t.$el.on("mouseleave", f));
    }
    function m() {
      t.$el.off("mouseenter", d), t.$el.off("mouseleave", f);
    }
    i("init", () => {
      t.params.autoplay.enabled &&
        (a(), Re().addEventListener("visibilitychange", c), h());
    }),
      i("beforeTransitionStart", (p, g, b) => {
        t.autoplay.running &&
          (b || !t.params.autoplay.disableOnInteraction
            ? t.autoplay.pause(g)
            : o());
      }),
      i("sliderFirstMove", () => {
        t.autoplay.running &&
          (t.params.autoplay.disableOnInteraction ? o() : l());
      }),
      i("touchEnd", () => {
        t.params.cssMode &&
          t.autoplay.paused &&
          !t.params.autoplay.disableOnInteraction &&
          s();
      }),
      i("destroy", () => {
        m(),
          t.autoplay.running && o(),
          Re().removeEventListener("visibilitychange", c);
      }),
      Object.assign(t.autoplay, { pause: l, run: s, start: a, stop: o });
  }
  function Gp({ swiper: t, extendParams: e, on: i }) {
    e({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs",
      },
    });
    let n = !1,
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
          ? (d = parseInt(
              N(l.clickedSlide).attr("data-swiper-slide-index"),
              10
            ))
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
      if (n) return !1;
      n = !0;
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
          b;
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
            (b = t.activeIndex > t.previousIndex ? "next" : "prev");
        } else (g = t.realIndex), (b = g > t.previousIndex ? "next" : "prev");
        m && (g += b === "next" ? h : -1 * h),
          c.visibleSlidesIndexes &&
            c.visibleSlidesIndexes.indexOf(g) < 0 &&
            (c.params.centeredSlides &&
              (g > p
                ? (g = g - Math.floor(u / 2) + 1)
                : (g = g + Math.floor(u / 2) - 1)),
            c.slideTo(g, l ? 0 : void 0));
      }
    }
    i("beforeInit", () => {
      const { thumbs: l } = t.params;
      !l || !l.swiper || (a(), o(!0));
    }),
      i("slideChange update resize observerUpdate", () => {
        o();
      }),
      i("setTransition", (l, c) => {
        const u = t.thumbs.swiper;
        !u || u.destroyed || u.setTransition(c);
      }),
      i("beforeDestroy", () => {
        const l = t.thumbs.swiper;
        !l || l.destroyed || (r && l.destroy());
      }),
      Object.assign(t.thumbs, { init: a, update: o });
  }
  function Xp({ swiper: t, extendParams: e, emit: i, once: n }) {
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
          time: kt(),
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
        m = kt() - f.touchStartTime;
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
          const T = f.velocities.pop(),
            E = f.velocities.pop(),
            C = T.position - E.position,
            $ = T.time - E.time;
          (t.velocity = C / $),
            (t.velocity /= 2),
            Math.abs(t.velocity) < l.freeMode.minimumVelocity &&
              (t.velocity = 0),
            ($ > 150 || kt() - T.time > 300) && (t.velocity = 0);
        } else t.velocity = 0;
        (t.velocity *= l.freeMode.momentumVelocityRatio),
          (f.velocities.length = 0);
        let p = 1e3 * l.freeMode.momentumRatio;
        const g = t.velocity * p;
        let b = t.translate + g;
        u && (b = -b);
        let v = !1,
          y;
        const _ = Math.abs(t.velocity) * 20 * l.freeMode.momentumBounceRatio;
        let x;
        if (b < t.maxTranslate())
          l.freeMode.momentumBounce
            ? (b + t.maxTranslate() < -_ && (b = t.maxTranslate() - _),
              (y = t.maxTranslate()),
              (v = !0),
              (f.allowMomentumBounce = !0))
            : (b = t.maxTranslate()),
            l.loop && l.centeredSlides && (x = !0);
        else if (b > t.minTranslate())
          l.freeMode.momentumBounce
            ? (b - t.minTranslate() > _ && (b = t.minTranslate() + _),
              (y = t.minTranslate()),
              (v = !0),
              (f.allowMomentumBounce = !0))
            : (b = t.minTranslate()),
            l.loop && l.centeredSlides && (x = !0);
        else if (l.freeMode.sticky) {
          let T;
          for (let E = 0; E < d.length; E += 1)
            if (d[E] > -b) {
              T = E;
              break;
            }
          Math.abs(d[T] - b) < Math.abs(d[T - 1] - b) ||
          t.swipeDirection === "next"
            ? (b = d[T])
            : (b = d[T - 1]),
            (b = -b);
        }
        if (
          (x &&
            n("transitionEnd", () => {
              t.loopFix();
            }),
          t.velocity !== 0)
        ) {
          if (
            (u
              ? (p = Math.abs((-b - t.translate) / t.velocity))
              : (p = Math.abs((b - t.translate) / t.velocity)),
            l.freeMode.sticky)
          ) {
            const T = Math.abs((u ? -b : b) - t.translate),
              E = t.slidesSizesGrid[t.activeIndex];
            T < E
              ? (p = l.speed)
              : T < 2 * E
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
            t.setTranslate(b),
            t.transitionStart(!0, t.swipeDirection),
            (t.animating = !0),
            c.transitionEnd(() => {
              !t ||
                t.destroyed ||
                !f.allowMomentumBounce ||
                (i("momentumBounce"),
                t.setTransition(l.speed),
                setTimeout(() => {
                  t.setTranslate(y),
                    c.transitionEnd(() => {
                      !t || t.destroyed || t.transitionEnd();
                    });
                }, 0));
            }))
          : t.velocity
          ? (i("_freeModeNoMomentumRelease"),
            t.updateProgress(b),
            t.setTransition(p),
            t.setTranslate(b),
            t.transitionStart(!0, t.swipeDirection),
            t.animating ||
              ((t.animating = !0),
              c.transitionEnd(() => {
                !t || t.destroyed || t.transitionEnd();
              })))
          : t.updateProgress(b),
          t.updateActiveIndex(),
          t.updateSlidesClasses();
      } else if (l.freeMode.sticky) {
        t.slideToClosest();
        return;
      } else l.freeMode && i("_freeModeNoMomentumRelease");
      (!l.freeMode.momentum || m >= l.longSwipesMs) &&
        (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
    }
    Object.assign(t, {
      freeMode: { onTouchStart: r, onTouchMove: s, onTouchEnd: a },
    });
  }
  function jp({ swiper: t, extendParams: e }) {
    e({ grid: { rows: 1, fill: "column" } });
    let i, n, r;
    const s = (l) => {
        const { slidesPerView: c } = t.params,
          { rows: u, fill: d } = t.params.grid;
        (n = i / u),
          (r = Math.floor(l / u)),
          Math.floor(l / u) === l / u ? (i = l) : (i = Math.ceil(l / u) * u),
          c !== "auto" && d === "row" && (i = Math.max(i, c * u));
      },
      a = (l, c, u, d) => {
        const { slidesPerGroup: f, spaceBetween: h } = t.params,
          { rows: m, fill: p } = t.params.grid;
        let g, b, v;
        if (p === "row" && f > 1) {
          const y = Math.floor(l / (f * m)),
            _ = l - m * f * y,
            x = y === 0 ? f : Math.min(Math.ceil((u - y * m * f) / m), f);
          (v = Math.floor(_ / x)),
            (b = _ - v * x + y * f),
            (g = b + (v * i) / m),
            c.css({ "-webkit-order": g, order: g });
        } else
          p === "column"
            ? ((b = Math.floor(l / m)),
              (v = l - b * m),
              (b > r || (b === r && v === m - 1)) &&
                ((v += 1), v >= m && ((v = 0), (b += 1))))
            : ((v = Math.floor(l / n)), (b = l - v * n));
        c.css(d("margin-top"), v !== 0 ? h && `${h}px` : "");
      },
      o = (l, c, u) => {
        const {
            spaceBetween: d,
            centeredSlides: f,
            roundLengths: h,
          } = t.params,
          { rows: m } = t.params.grid;
        if (
          ((t.virtualSize = (l + d) * i),
          (t.virtualSize = Math.ceil(t.virtualSize / m) - d),
          t.$wrapperEl.css({ [u("width")]: `${t.virtualSize + d}px` }),
          f)
        ) {
          c.splice(0, c.length);
          const p = [];
          for (let g = 0; g < c.length; g += 1) {
            let b = c[g];
            h && (b = Math.floor(b)), c[g] < t.virtualSize + c[0] && p.push(b);
          }
          c.push(...p);
        }
      };
    t.grid = { initSlides: s, updateSlide: a, updateWrapperSize: o };
  }
  function Up(t) {
    const e = this,
      { $wrapperEl: i, params: n } = e;
    if ((n.loop && e.loopDestroy(), typeof t == "object" && "length" in t))
      for (let r = 0; r < t.length; r += 1) t[r] && i.append(t[r]);
    else i.append(t);
    n.loop && e.loopCreate(), n.observer || e.update();
  }
  function Zp(t) {
    const e = this,
      { params: i, $wrapperEl: n, activeIndex: r } = e;
    i.loop && e.loopDestroy();
    let s = r + 1;
    if (typeof t == "object" && "length" in t) {
      for (let a = 0; a < t.length; a += 1) t[a] && n.prepend(t[a]);
      s = r + t.length;
    } else n.prepend(t);
    i.loop && e.loopCreate(), i.observer || e.update(), e.slideTo(s, 0, !1);
  }
  function Qp(t, e) {
    const i = this,
      { $wrapperEl: n, params: r, activeIndex: s } = i;
    let a = s;
    r.loop &&
      ((a -= i.loopedSlides),
      i.loopDestroy(),
      (i.slides = n.children(`.${r.slideClass}`)));
    const o = i.slides.length;
    if (t <= 0) {
      i.prependSlide(e);
      return;
    }
    if (t >= o) {
      i.appendSlide(e);
      return;
    }
    let l = a > t ? a + 1 : a;
    const c = [];
    for (let u = o - 1; u >= t; u -= 1) {
      const d = i.slides.eq(u);
      d.remove(), c.unshift(d);
    }
    if (typeof e == "object" && "length" in e) {
      for (let u = 0; u < e.length; u += 1) e[u] && n.append(e[u]);
      l = a > t ? a + e.length : a;
    } else n.append(e);
    for (let u = 0; u < c.length; u += 1) n.append(c[u]);
    r.loop && i.loopCreate(),
      r.observer || i.update(),
      r.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1);
  }
  function Kp(t) {
    const e = this,
      { params: i, $wrapperEl: n, activeIndex: r } = e;
    let s = r;
    i.loop &&
      ((s -= e.loopedSlides),
      e.loopDestroy(),
      (e.slides = n.children(`.${i.slideClass}`)));
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
    i.loop && e.loopCreate(),
      i.observer || e.update(),
      i.loop ? e.slideTo(a + e.loopedSlides, 0, !1) : e.slideTo(a, 0, !1);
  }
  function Jp() {
    const t = this,
      e = [];
    for (let i = 0; i < t.slides.length; i += 1) e.push(i);
    t.removeSlide(e);
  }
  function em({ swiper: t }) {
    Object.assign(t, {
      appendSlide: Up.bind(t),
      prependSlide: Zp.bind(t),
      addSlide: Qp.bind(t),
      removeSlide: Kp.bind(t),
      removeAllSlides: Jp.bind(t),
    });
  }
  function Hn(t) {
    const {
      effect: e,
      swiper: i,
      on: n,
      setTranslate: r,
      setTransition: s,
      overwriteParams: a,
      perspective: o,
      recreateShadows: l,
      getEffectParams: c,
    } = t;
    n("beforeInit", () => {
      if (i.params.effect !== e) return;
      i.classNames.push(`${i.params.containerModifierClass}${e}`),
        o && o() && i.classNames.push(`${i.params.containerModifierClass}3d`);
      const d = a ? a() : {};
      Object.assign(i.params, d), Object.assign(i.originalParams, d);
    }),
      n("setTranslate", () => {
        i.params.effect === e && r();
      }),
      n("setTransition", (d, f) => {
        i.params.effect === e && s(f);
      }),
      n("transitionEnd", () => {
        if (i.params.effect === e && l) {
          if (!c || !c().slideShadows) return;
          i.slides.each((d) => {
            i.$(d)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .remove();
          }),
            l();
        }
      });
    let u;
    n("virtualUpdate", () => {
      i.params.effect === e &&
        (i.slides.length || (u = !0),
        requestAnimationFrame(() => {
          u && i.slides && i.slides.length && (r(), (u = !1));
        }));
    });
  }
  function Pr(t, e) {
    return t.transformEl
      ? e
          .find(t.transformEl)
          .css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden",
          })
      : e;
  }
  function Ts({ swiper: t, duration: e, transformEl: i, allSlides: n }) {
    const { slides: r, activeIndex: s, $wrapperEl: a } = t;
    if (t.params.virtualTranslate && e !== 0) {
      let o = !1,
        l;
      n ? (l = i ? r.find(i) : r) : (l = i ? r.eq(s).find(i) : r.eq(s)),
        l.transitionEnd(() => {
          if (o || !t || t.destroyed) return;
          (o = !0), (t.animating = !1);
          const c = ["webkitTransitionEnd", "transitionend"];
          for (let u = 0; u < c.length; u += 1) a.trigger(c[u]);
        });
    }
  }
  function tm({ swiper: t, extendParams: e, on: i }) {
    e({ fadeEffect: { crossFade: !1, transformEl: null } }),
      Hn({
        effect: "fade",
        swiper: t,
        on: i,
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
            Pr(a, l)
              .css({ opacity: f })
              .transform(`translate3d(${u}px, ${d}px, 0px)`);
          }
        },
        setTransition: (s) => {
          const { transformEl: a } = t.params.fadeEffect;
          (a ? t.slides.find(a) : t.slides).transition(s),
            Ts({ swiper: t, duration: s, transformEl: a, allSlides: !0 });
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
  function im({ swiper: t, extendParams: e, on: i }) {
    e({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    });
    const n = (o, l, c) => {
      let u = c
          ? o.find(".swiper-slide-shadow-left")
          : o.find(".swiper-slide-shadow-top"),
        d = c
          ? o.find(".swiper-slide-shadow-right")
          : o.find(".swiper-slide-shadow-bottom");
      u.length === 0 &&
        ((u = N(
          `<div class="swiper-slide-shadow-${c ? "left" : "top"}"></div>`
        )),
        o.append(u)),
        d.length === 0 &&
          ((d = N(
            `<div class="swiper-slide-shadow-${c ? "right" : "bottom"}"></div>`
          )),
          o.append(d)),
        u.length && (u[0].style.opacity = Math.max(-l, 0)),
        d.length && (d[0].style.opacity = Math.max(l, 0));
    };
    Hn({
      effect: "cube",
      swiper: t,
      on: i,
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
          b = t.virtual && t.params.virtual.enabled;
        let v = 0,
          y;
        p.shadow &&
          (g
            ? ((y = l.find(".swiper-cube-shadow")),
              y.length === 0 &&
                ((y = N('<div class="swiper-cube-shadow"></div>')),
                l.append(y)),
              y.css({ height: `${u}px` }))
            : ((y = o.find(".swiper-cube-shadow")),
              y.length === 0 &&
                ((y = N('<div class="swiper-cube-shadow"></div>')),
                o.append(y))));
        for (let x = 0; x < c.length; x += 1) {
          const T = c.eq(x);
          let E = x;
          b && (E = parseInt(T.attr("data-swiper-slide-index"), 10));
          let C = E * 90,
            $ = Math.floor(C / 360);
          f && ((C = -C), ($ = Math.floor(-C / 360)));
          const k = Math.max(Math.min(T[0].progress, 1), -1);
          let M = 0,
            w = 0,
            S = 0;
          E % 4 === 0
            ? ((M = -$ * 4 * h), (S = 0))
            : (E - 1) % 4 === 0
            ? ((M = 0), (S = -$ * 4 * h))
            : (E - 2) % 4 === 0
            ? ((M = h + $ * 4 * h), (S = h))
            : (E - 3) % 4 === 0 && ((M = -h), (S = 3 * h + h * 4 * $)),
            f && (M = -M),
            g || ((w = M), (M = 0));
          const O = `rotateX(${g ? 0 : -C}deg) rotateY(${
            g ? C : 0
          }deg) translate3d(${M}px, ${w}px, ${S}px)`;
          k <= 1 &&
            k > -1 &&
            ((v = E * 90 + k * 90), f && (v = -E * 90 - k * 90)),
            T.transform(O),
            p.slideShadows && n(T, k, g);
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
            const x = Math.abs(v) - Math.floor(Math.abs(v) / 90) * 90,
              T =
                1.5 -
                (Math.sin((x * 2 * Math.PI) / 360) / 2 +
                  Math.cos((x * 2 * Math.PI) / 360) / 2),
              E = p.shadowScale,
              C = p.shadowScale / T,
              $ = p.shadowOffset;
            y.transform(
              `scale3d(${E}, 1, ${C}) translate3d(0px, ${d / 2 + $}px, ${
                -d / 2 / C
              }px) rotateX(-90deg)`
            );
          }
        const _ = m.isSafari || m.isWebView ? -h / 2 : 0;
        l.transform(
          `translate3d(0px,0,${_}px) rotateX(${
            t.isHorizontal() ? 0 : v
          }deg) rotateY(${t.isHorizontal() ? -v : 0}deg)`
        ),
          l[0].style.setProperty("--swiper-cube-translate-z", `${_}px`);
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
          n(N(l), c, o);
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
  function Yn(t, e, i) {
    const n = `swiper-slide-shadow${i ? `-${i}` : ""}`,
      r = t.transformEl ? e.find(t.transformEl) : e;
    let s = r.children(`.${n}`);
    return (
      s.length ||
        ((s = N(`<div class="swiper-slide-shadow${i ? `-${i}` : ""}"></div>`)),
        r.append(s)),
      s
    );
  }
  function nm({ swiper: t, extendParams: e, on: i }) {
    e({
      flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null },
    });
    const n = (o, l, c) => {
      let u = t.isHorizontal()
          ? o.find(".swiper-slide-shadow-left")
          : o.find(".swiper-slide-shadow-top"),
        d = t.isHorizontal()
          ? o.find(".swiper-slide-shadow-right")
          : o.find(".swiper-slide-shadow-bottom");
      u.length === 0 && (u = Yn(c, o, t.isHorizontal() ? "left" : "top")),
        d.length === 0 && (d = Yn(c, o, t.isHorizontal() ? "right" : "bottom")),
        u.length && (u[0].style.opacity = Math.max(-l, 0)),
        d.length && (d[0].style.opacity = Math.max(l, 0));
    };
    Hn({
      effect: "flip",
      swiper: t,
      on: i,
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
            b = t.params.cssMode ? -h - t.translate : -h,
            v = 0;
          t.isHorizontal()
            ? l && (p = -p)
            : ((v = b), (b = 0), (g = -p), (p = 0)),
            (d[0].style.zIndex = -Math.abs(Math.round(f)) + o.length),
            c.slideShadows && n(d, f, c);
          const y = `translate3d(${b}px, ${v}px, 0px) rotateX(${g}deg) rotateY(${p}deg)`;
          Pr(c, d).transform(y);
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
          Ts({ swiper: t, duration: o, transformEl: l });
      },
      recreateShadows: () => {
        const o = t.params.flipEffect;
        t.slides.each((l) => {
          const c = N(l);
          let u = c[0].progress;
          t.params.flipEffect.limitRotation &&
            (u = Math.max(Math.min(l.progress, 1), -1)),
            n(c, u, o);
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
  function rm({ swiper: t, extendParams: e, on: i }) {
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
      Hn({
        effect: "coverflow",
        swiper: t,
        on: i,
        setTranslate: () => {
          const { width: s, height: a, slides: o, slidesSizesGrid: l } = t,
            c = t.params.coverflowEffect,
            u = t.isHorizontal(),
            d = t.translate,
            f = u ? -d + s / 2 : -d + a / 2,
            h = u ? c.rotate : -c.rotate,
            m = c.depth;
          for (let p = 0, g = o.length; p < g; p += 1) {
            const b = o.eq(p),
              v = l[p],
              y = b[0].swiperSlideOffset,
              _ = (f - y - v / 2) / v,
              x =
                typeof c.modifier == "function"
                  ? c.modifier(_)
                  : _ * c.modifier;
            let T = u ? h * x : 0,
              E = u ? 0 : h * x,
              C = -m * Math.abs(x),
              $ = c.stretch;
            typeof $ == "string" &&
              $.indexOf("%") !== -1 &&
              ($ = (parseFloat(c.stretch) / 100) * v);
            let k = u ? 0 : $ * x,
              M = u ? $ * x : 0,
              w = 1 - (1 - c.scale) * Math.abs(x);
            Math.abs(M) < 0.001 && (M = 0),
              Math.abs(k) < 0.001 && (k = 0),
              Math.abs(C) < 0.001 && (C = 0),
              Math.abs(T) < 0.001 && (T = 0),
              Math.abs(E) < 0.001 && (E = 0),
              Math.abs(w) < 0.001 && (w = 0);
            const S = `translate3d(${M}px,${k}px,${C}px)  rotateX(${E}deg) rotateY(${T}deg) scale(${w})`;
            if (
              (Pr(c, b).transform(S),
              (b[0].style.zIndex = -Math.abs(Math.round(x)) + 1),
              c.slideShadows)
            ) {
              let z = u
                  ? b.find(".swiper-slide-shadow-left")
                  : b.find(".swiper-slide-shadow-top"),
                A = u
                  ? b.find(".swiper-slide-shadow-right")
                  : b.find(".swiper-slide-shadow-bottom");
              z.length === 0 && (z = Yn(c, b, u ? "left" : "top")),
                A.length === 0 && (A = Yn(c, b, u ? "right" : "bottom")),
                z.length && (z[0].style.opacity = x > 0 ? x : 0),
                A.length && (A[0].style.opacity = -x > 0 ? -x : 0);
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
  function sm({ swiper: t, extendParams: e, on: i }) {
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
    const n = (a) => (typeof a == "string" ? a : `${a}px`);
    Hn({
      effect: "creative",
      swiper: t,
      on: i,
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
          const b = h[0].swiperSlideOffset,
            v = [t.params.cssMode ? -b - t.translate : -b, 0, 0],
            y = [0, 0, 0];
          let _ = !1;
          t.isHorizontal() || ((v[1] = v[0]), (v[0] = 0));
          let x = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1,
          };
          p < 0 ? ((x = c.next), (_ = !0)) : p > 0 && ((x = c.prev), (_ = !0)),
            v.forEach((w, S) => {
              v[S] = `calc(${w}px + (${n(x.translate[S])} * ${Math.abs(
                p * u
              )}))`;
            }),
            y.forEach((w, S) => {
              y[S] = x.rotate[S] * Math.abs(p * u);
            }),
            (h[0].style.zIndex = -Math.abs(Math.round(m)) + a.length);
          const T = v.join(", "),
            E = `rotateX(${y[0]}deg) rotateY(${y[1]}deg) rotateZ(${y[2]}deg)`,
            C =
              g < 0
                ? `scale(${1 + (1 - x.scale) * g * u})`
                : `scale(${1 - (1 - x.scale) * g * u})`,
            $ =
              g < 0 ? 1 + (1 - x.opacity) * g * u : 1 - (1 - x.opacity) * g * u,
            k = `translate3d(${T}) ${E} ${C}`;
          if ((_ && x.shadow) || !_) {
            let w = h.children(".swiper-slide-shadow");
            if ((w.length === 0 && x.shadow && (w = Yn(c, h)), w.length)) {
              const S = c.shadowPerProgress ? p * (1 / c.limitProgress) : p;
              w[0].style.opacity = Math.min(Math.max(Math.abs(S), 0), 1);
            }
          }
          const M = Pr(c, h);
          M.transform(k).css({ opacity: $ }),
            x.origin && M.css("transform-origin", x.origin);
        }
      },
      setTransition: (a) => {
        const { transformEl: o } = t.params.creativeEffect;
        (o ? t.slides.find(o) : t.slides)
          .transition(a)
          .find(".swiper-slide-shadow")
          .transition(a),
          Ts({ swiper: t, duration: a, transformEl: o, allSlides: !0 });
      },
      perspective: () => t.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !t.params.cssMode,
      }),
    });
  }
  function am({ swiper: t, extendParams: e, on: i }) {
    e({
      cardsEffect: {
        slideShadows: !0,
        transformEl: null,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8,
      },
    }),
      Hn({
        effect: "cards",
        swiper: t,
        on: i,
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
              b = 0;
            const v = -100 * Math.abs(m);
            let y = 1,
              _ = -o.perSlideRotate * m,
              x = o.perSlideOffset - Math.abs(m) * 0.75;
            const T =
                t.virtual && t.params.virtual.enabled ? t.virtual.from + d : d,
              E =
                (T === a || T === a - 1) &&
                m > 0 &&
                m < 1 &&
                (c || t.params.cssMode) &&
                u < l,
              C =
                (T === a || T === a + 1) &&
                m < 0 &&
                m > -1 &&
                (c || t.params.cssMode) &&
                u > l;
            if (E || C) {
              const w = (1 - Math.abs((Math.abs(m) - 0.5) / 0.5)) ** 0.5;
              (_ += -28 * m * w),
                (y += -0.5 * w),
                (x += 96 * w),
                (b = `${-25 * w * Math.abs(m)}%`);
            }
            if (
              (m < 0
                ? (g = `calc(${g}px + (${x * Math.abs(m)}%))`)
                : m > 0
                ? (g = `calc(${g}px + (-${x * Math.abs(m)}%))`)
                : (g = `${g}px`),
              !t.isHorizontal())
            ) {
              const w = b;
              (b = g), (g = w);
            }
            const $ = m < 0 ? `${1 + (1 - y) * m}` : `${1 - (1 - y) * m}`,
              k = `
        translate3d(${g}, ${b}, ${v}px)
        rotateZ(${o.rotate ? _ : 0}deg)
        scale(${$})
      `;
            if (o.slideShadows) {
              let w = f.find(".swiper-slide-shadow");
              w.length === 0 && (w = Yn(o, f)),
                w.length &&
                  (w[0].style.opacity = Math.min(
                    Math.max((Math.abs(m) - 0.5) / 0.5, 0),
                    1
                  ));
            }
            (f[0].style.zIndex = -Math.abs(Math.round(h)) + s.length),
              Pr(o, f).transform(k);
          }
        },
        setTransition: (s) => {
          const { transformEl: a } = t.params.cardsEffect;
          (a ? t.slides.find(a) : t.slides)
            .transition(s)
            .find(".swiper-slide-shadow")
            .transition(s),
            Ts({ swiper: t, duration: s, transformEl: a });
        },
        perspective: () => !0,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
  }
  const om = [
    Op,
    zp,
    Lp,
    Ip,
    Dp,
    Rp,
    Np,
    Bp,
    Fp,
    Vp,
    qp,
    Hp,
    Yp,
    Wp,
    Gp,
    Xp,
    jp,
    em,
    tm,
    im,
    nm,
    rm,
    sm,
    am,
  ];
  ft.use(om);
  let Ba = null;
  const nc = () => {
    const t = document.querySelector(".swiper[work-slider='component']");
    if (!t) return;
    const e = () => window.innerWidth >= 768,
      i = () => {
        const r = e();
        Ba = new ft(t, {
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
    let n = e();
    i(),
      window.addEventListener("resize", () => {
        const r = e();
        r !== n && ((n = r), Ba && Ba.destroy(!0, !0), i());
      });
  };
  function wi(t) {
    if (t === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function rc(t, e) {
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
   */ var Pt = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Wn = { duration: 0.5, overwrite: !1, delay: 0 },
    Fa,
    Ze,
    be,
    ai = 1e8,
    et = 1 / ai,
    Va = Math.PI * 2,
    lm = Va / 4,
    cm = 0,
    sc = Math.sqrt,
    um = Math.cos,
    dm = Math.sin,
    We = function (e) {
      return typeof e == "string";
    },
    ke = function (e) {
      return typeof e == "function";
    },
    xi = function (e) {
      return typeof e == "number";
    },
    qa = function (e) {
      return typeof e > "u";
    },
    oi = function (e) {
      return typeof e == "object";
    },
    wt = function (e) {
      return e !== !1;
    },
    Ha = function () {
      return typeof window < "u";
    },
    Es = function (e) {
      return ke(e) || We(e);
    },
    ac =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    tt = Array.isArray,
    Ya = /(?:-?\.?\d|\.)+/gi,
    oc = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Gn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Wa = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    lc = /[+-]=-?[.\d]+/,
    cc = /[^,'"\[\]\s]+/gi,
    fm = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    xe,
    li,
    Ga,
    Xa,
    Mt = {},
    Cs = {},
    uc,
    dc = function (e) {
      return (Cs = jn(e, Mt)) && Tt;
    },
    ja = function (e, i) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        i,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    Mr = function (e, i) {
      return !i && console.warn(e);
    },
    fc = function (e, i) {
      return (e && (Mt[e] = i) && Cs && (Cs[e] = i)) || Mt;
    },
    $r = function () {
      return 0;
    },
    hm = { suppressEvents: !0, isStart: !0, kill: !1 },
    ks = { suppressEvents: !0, kill: !1 },
    pm = { suppressEvents: !0 },
    Ua = {},
    Ri = [],
    Za = {},
    hc,
    $t = {},
    Qa = {},
    pc = 30,
    As = [],
    Ka = "",
    Ja = function (e) {
      var i = e[0],
        n,
        r;
      if ((oi(i) || ke(i) || (e = [e]), !(n = (i._gsap || {}).harness))) {
        for (r = As.length; r-- && !As[r].targetTest(i); );
        n = As[r];
      }
      for (r = e.length; r--; )
        (e[r] && (e[r]._gsap || (e[r]._gsap = new Hc(e[r], n)))) ||
          e.splice(r, 1);
      return e;
    },
    dn = function (e) {
      return e._gsap || Ja(qt(e))[0]._gsap;
    },
    mc = function (e, i, n) {
      return (n = e[i]) && ke(n)
        ? e[i]()
        : (qa(n) && e.getAttribute && e.getAttribute(i)) || n;
    },
    xt = function (e, i) {
      return (e = e.split(",")).forEach(i) || e;
    },
    Pe = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Ne = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    Xn = function (e, i) {
      var n = i.charAt(0),
        r = parseFloat(i.substr(2));
      return (
        (e = parseFloat(e)),
        n === "+" ? e + r : n === "-" ? e - r : n === "*" ? e * r : e / r
      );
    },
    mm = function (e, i) {
      for (var n = i.length, r = 0; e.indexOf(i[r]) < 0 && ++r < n; );
      return r < n;
    },
    Ps = function () {
      var e = Ri.length,
        i = Ri.slice(0),
        n,
        r;
      for (Za = {}, Ri.length = 0, n = 0; n < e; n++)
        (r = i[n]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    eo = function (e) {
      return !!(e._initted || e._startAt || e.add);
    },
    gc = function (e, i, n, r) {
      Ri.length && !Ze && Ps(),
        e.render(i, n, !!(Ze && i < 0 && eo(e))),
        Ri.length && !Ze && Ps();
    },
    vc = function (e) {
      var i = parseFloat(e);
      return (i || i === 0) && (e + "").match(cc).length < 2
        ? i
        : We(e)
        ? e.trim()
        : e;
    },
    yc = function (e) {
      return e;
    },
    Ot = function (e, i) {
      for (var n in i) n in e || (e[n] = i[n]);
      return e;
    },
    gm = function (e) {
      return function (i, n) {
        for (var r in n)
          r in i || (r === "duration" && e) || r === "ease" || (i[r] = n[r]);
      };
    },
    jn = function (e, i) {
      for (var n in i) e[n] = i[n];
      return e;
    },
    bc = function t(e, i) {
      for (var n in i)
        n !== "__proto__" &&
          n !== "constructor" &&
          n !== "prototype" &&
          (e[n] = oi(i[n]) ? t(e[n] || (e[n] = {}), i[n]) : i[n]);
      return e;
    },
    Ms = function (e, i) {
      var n = {},
        r;
      for (r in e) r in i || (n[r] = e[r]);
      return n;
    },
    Or = function (e) {
      var i = e.parent || xe,
        n = e.keyframes ? gm(tt(e.keyframes)) : Ot;
      if (wt(e.inherit))
        for (; i; ) n(e, i.vars.defaults), (i = i.parent || i._dp);
      return e;
    },
    vm = function (e, i) {
      for (var n = e.length, r = n === i.length; r && n-- && e[n] === i[n]; );
      return n < 0;
    },
    _c = function (e, i, n, r, s) {
      var a = e[r],
        o;
      if (s) for (o = i[s]; a && a[s] > o; ) a = a._prev;
      return (
        a
          ? ((i._next = a._next), (a._next = i))
          : ((i._next = e[n]), (e[n] = i)),
        i._next ? (i._next._prev = i) : (e[r] = i),
        (i._prev = a),
        (i.parent = i._dp = e),
        i
      );
    },
    $s = function (e, i, n, r) {
      n === void 0 && (n = "_first"), r === void 0 && (r = "_last");
      var s = i._prev,
        a = i._next;
      s ? (s._next = a) : e[n] === i && (e[n] = a),
        a ? (a._prev = s) : e[r] === i && (e[r] = s),
        (i._next = i._prev = i.parent = null);
    },
    Ni = function (e, i) {
      e.parent &&
        (!i || e.parent.autoRemoveChildren) &&
        e.parent.remove &&
        e.parent.remove(e),
        (e._act = 0);
    },
    fn = function (e, i) {
      if (e && (!i || i._end > e._dur || i._start < 0))
        for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
      return e;
    },
    ym = function (e) {
      for (var i = e.parent; i && i.parent; )
        (i._dirty = 1), i.totalDuration(), (i = i.parent);
      return e;
    },
    to = function (e, i, n, r) {
      return (
        e._startAt &&
        (Ze
          ? e._startAt.revert(ks)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(i, !0, r))
      );
    },
    bm = function t(e) {
      return !e || (e._ts && t(e.parent));
    },
    wc = function (e) {
      return e._repeat ? Un(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    Un = function (e, i) {
      var n = Math.floor((e = Ne(e / i)));
      return e && n === e ? n - 1 : n;
    },
    Os = function (e, i) {
      return (
        (e - i._start) * i._ts +
        (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur)
      );
    },
    zs = function (e) {
      return (e._end = Ne(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || et) || 0)
      ));
    },
    Ls = function (e, i) {
      var n = e._dp;
      return (
        n &&
          n.smoothChildTiming &&
          e._ts &&
          ((e._start = Ne(
            n._time -
              (e._ts > 0
                ? i / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - i) / -e._ts)
          )),
          zs(e),
          n._dirty || fn(n, e)),
        e
      );
    },
    xc = function (e, i) {
      var n;
      if (
        ((i._time ||
          (!i._dur && i._initted) ||
          (i._start < e._time && (i._dur || !i.add))) &&
          ((n = Os(e.rawTime(), i)),
          (!i._dur || Lr(0, i.totalDuration(), n) - i._tTime > et) &&
            i.render(n, !0)),
        fn(e, i)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (n = e; n._dp; )
            n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
        e._zTime = -1e-8;
      }
    },
    ci = function (e, i, n, r) {
      return (
        i.parent && Ni(i),
        (i._start = Ne(
          (xi(n) ? n : n || e !== xe ? Vt(e, n, i) : e._time) + i._delay
        )),
        (i._end = Ne(
          i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0)
        )),
        _c(e, i, "_first", "_last", e._sort ? "_start" : 0),
        io(i) || (e._recent = i),
        r || xc(e, i),
        e._ts < 0 && Ls(e, e._tTime),
        e
      );
    },
    Sc = function (e, i) {
      return (
        (Mt.ScrollTrigger || ja("scrollTrigger", i)) &&
        Mt.ScrollTrigger.create(i, e)
      );
    },
    Tc = function (e, i, n, r, s) {
      if ((fo(e, i, s), !e._initted)) return 1;
      if (
        !n &&
        e._pt &&
        !Ze &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        hc !== Lt.frame
      )
        return Ri.push(e), (e._lazy = [s, r]), 1;
    },
    _m = function t(e) {
      var i = e.parent;
      return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i));
    },
    io = function (e) {
      var i = e.data;
      return i === "isFromStart" || i === "isStart";
    },
    wm = function (e, i, n, r) {
      var s = e.ratio,
        a =
          i < 0 ||
          (!i &&
            ((!e._start && _m(e) && !(!e._initted && io(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !io(e))))
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
          ((l = Lr(0, e._tDur, i)),
          (u = Un(l, o)),
          e._yoyo && u & 1 && (a = 1 - a),
          u !== Un(e._tTime, o) &&
            ((s = 1 - a),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        a !== s || Ze || r || e._zTime === et || (!i && e._zTime))
      ) {
        if (!e._initted && Tc(e, i, r, n, l)) return;
        for (
          d = e._zTime,
            e._zTime = i || (n ? et : 0),
            n || (n = i && !d),
            e.ratio = a,
            e._from && (a = 1 - a),
            e._time = 0,
            e._tTime = l,
            c = e._pt;
          c;

        )
          c.r(a, c.d), (c = c._next);
        i < 0 && to(e, i, n, !0),
          e._onUpdate && !n && zt(e, "onUpdate"),
          l && e._repeat && !n && e.parent && zt(e, "onRepeat"),
          (i >= e._tDur || i < 0) &&
            e.ratio === a &&
            (a && Ni(e, 1),
            !n &&
              !Ze &&
              (zt(e, a ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = i);
    },
    xm = function (e, i, n) {
      var r;
      if (n > i)
        for (r = e._first; r && r._start <= n; ) {
          if (r.data === "isPause" && r._start > i) return r;
          r = r._next;
        }
      else
        for (r = e._last; r && r._start >= n; ) {
          if (r.data === "isPause" && r._start < i) return r;
          r = r._prev;
        }
    },
    Zn = function (e, i, n, r) {
      var s = e._repeat,
        a = Ne(i) || 0,
        o = e._tTime / e._tDur;
      return (
        o && !r && (e._time *= a / e._dur),
        (e._dur = a),
        (e._tDur = s ? (s < 0 ? 1e10 : Ne(a * (s + 1) + e._rDelay * s)) : a),
        o > 0 && !r && Ls(e, (e._tTime = e._tDur * o)),
        e.parent && zs(e),
        n || fn(e.parent, e),
        e
      );
    },
    Ec = function (e) {
      return e instanceof ht ? fn(e) : Zn(e, e._dur);
    },
    Sm = { _start: 0, endTime: $r, totalDuration: $r },
    Vt = function t(e, i, n) {
      var r = e.labels,
        s = e._recent || Sm,
        a = e.duration() >= ai ? s.endTime(!1) : e._dur,
        o,
        l,
        c;
      return We(i) && (isNaN(i) || i in r)
        ? ((l = i.charAt(0)),
          (c = i.substr(-1) === "%"),
          (o = i.indexOf("=")),
          l === "<" || l === ">"
            ? (o >= 0 && (i = i.replace(/=/, "")),
              (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
                (parseFloat(i.substr(1)) || 0) *
                  (c ? (o < 0 ? s : n).totalDuration() / 100 : 1))
            : o < 0
            ? (i in r || (r[i] = a), r[i])
            : ((l = parseFloat(i.charAt(o - 1) + i.substr(o + 1))),
              c && n && (l = (l / 100) * (tt(n) ? n[0] : n).totalDuration()),
              o > 1 ? t(e, i.substr(0, o - 1), n) + l : a + l))
        : i == null
        ? a
        : +i;
    },
    zr = function (e, i, n) {
      var r = xi(i[1]),
        s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
        a = i[s],
        o,
        l;
      if ((r && (a.duration = i[1]), (a.parent = n), e)) {
        for (o = a, l = n; l && !("immediateRender" in o); )
          (o = l.vars.defaults || {}), (l = wt(l.vars.inherit) && l.parent);
        (a.immediateRender = wt(o.immediateRender)),
          e < 2 ? (a.runBackwards = 1) : (a.startAt = i[s - 1]);
      }
      return new Be(i[0], a, i[s + 1]);
    },
    Bi = function (e, i) {
      return e || e === 0 ? i(e) : i;
    },
    Lr = function (e, i, n) {
      return n < e ? e : n > i ? i : n;
    },
    it = function (e, i) {
      return !We(e) || !(i = fm.exec(e)) ? "" : i[1];
    },
    Tm = function (e, i, n) {
      return Bi(n, function (r) {
        return Lr(e, i, r);
      });
    },
    no = [].slice,
    Cc = function (e, i) {
      return (
        e &&
        oi(e) &&
        "length" in e &&
        ((!i && !e.length) || (e.length - 1 in e && oi(e[0]))) &&
        !e.nodeType &&
        e !== li
      );
    },
    Em = function (e, i, n) {
      return (
        n === void 0 && (n = []),
        e.forEach(function (r) {
          var s;
          return (We(r) && !i) || Cc(r, 1)
            ? (s = n).push.apply(s, qt(r))
            : n.push(r);
        }) || n
      );
    },
    qt = function (e, i, n) {
      return be && !i && be.selector
        ? be.selector(e)
        : We(e) && !n && (Ga || !Kn())
        ? no.call((i || Xa).querySelectorAll(e), 0)
        : tt(e)
        ? Em(e, n)
        : Cc(e)
        ? no.call(e, 0)
        : e
        ? [e]
        : [];
    },
    ro = function (e) {
      return (
        (e = qt(e)[0] || Mr("Invalid scope") || {}),
        function (i) {
          var n = e.current || e.nativeElement || e;
          return qt(
            i,
            n.querySelectorAll
              ? n
              : n === e
              ? Mr("Invalid scope") || Xa.createElement("div")
              : e
          );
        }
      );
    },
    kc = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    Ac = function (e) {
      if (ke(e)) return e;
      var i = oi(e) ? e : { each: e },
        n = hn(i.ease),
        r = i.from || 0,
        s = parseFloat(i.base) || 0,
        a = {},
        o = r > 0 && r < 1,
        l = isNaN(r) || o,
        c = i.axis,
        u = r,
        d = r;
      return (
        We(r)
          ? (u = d = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !o && l && ((u = r[0]), (d = r[1])),
        function (f, h, m) {
          var p = (m || i).length,
            g = a[p],
            b,
            v,
            y,
            _,
            x,
            T,
            E,
            C,
            $;
          if (!g) {
            if ((($ = i.grid === "auto" ? 0 : (i.grid || [1, ai])[1]), !$)) {
              for (
                E = -1e8;
                E < (E = m[$++].getBoundingClientRect().left) && $ < p;

              );
              $ < p && $--;
            }
            for (
              g = a[p] = [],
                b = l ? Math.min($, p) * u - 0.5 : r % $,
                v = $ === ai ? 0 : l ? (p * d) / $ - 0.5 : (r / $) | 0,
                E = 0,
                C = ai,
                T = 0;
              T < p;
              T++
            )
              (y = (T % $) - b),
                (_ = v - ((T / $) | 0)),
                (g[T] = x =
                  c ? Math.abs(c === "y" ? _ : y) : sc(y * y + _ * _)),
                x > E && (E = x),
                x < C && (C = x);
            r === "random" && kc(g),
              (g.max = E - C),
              (g.min = C),
              (g.v = p =
                (parseFloat(i.amount) ||
                  parseFloat(i.each) *
                    ($ > p
                      ? p - 1
                      : c
                      ? c === "y"
                        ? p / $
                        : $
                      : Math.max($, p / $)) ||
                  0) * (r === "edges" ? -1 : 1)),
              (g.b = p < 0 ? s - p : s),
              (g.u = it(i.amount || i.each) || 0),
              (n = n && p < 0 ? Fc(n) : n);
          }
          return (
            (p = (g[f] - g.min) / g.max || 0),
            Ne(g.b + (n ? n(p) : p) * g.v) + g.u
          );
        }
      );
    },
    so = function (e) {
      var i = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (n) {
        var r = Ne(Math.round(parseFloat(n) / e) * e * i);
        return (r - (r % 1)) / i + (xi(n) ? 0 : it(n));
      };
    },
    Pc = function (e, i) {
      var n = tt(e),
        r,
        s;
      return (
        !n &&
          oi(e) &&
          ((r = n = e.radius || ai),
          e.values
            ? ((e = qt(e.values)), (s = !xi(e[0])) && (r *= r))
            : (e = so(e.increment))),
        Bi(
          i,
          n
            ? ke(e)
              ? function (a) {
                  return (s = e(a)), Math.abs(s - a) <= r ? s : a;
                }
              : function (a) {
                  for (
                    var o = parseFloat(s ? a.x : a),
                      l = parseFloat(s ? a.y : 0),
                      c = ai,
                      u = 0,
                      d = e.length,
                      f,
                      h;
                    d--;

                  )
                    s
                      ? ((f = e[d].x - o),
                        (h = e[d].y - l),
                        (f = f * f + h * h))
                      : (f = Math.abs(e[d] - o)),
                      f < c && ((c = f), (u = d));
                  return (
                    (u = !r || c <= r ? e[u] : a),
                    s || u === a || xi(a) ? u : u + it(a)
                  );
                }
            : so(e)
        )
      );
    },
    Mc = function (e, i, n, r) {
      return Bi(tt(e) ? !i : n === !0 ? !!(n = 0) : !r, function () {
        return tt(e)
          ? e[~~(Math.random() * e.length)]
          : (n = n || 1e-5) &&
              (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (e - n / 2 + Math.random() * (i - e + n * 0.99)) / n
                ) *
                  n *
                  r
              ) / r;
      });
    },
    Cm = function () {
      for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++)
        i[n] = arguments[n];
      return function (r) {
        return i.reduce(function (s, a) {
          return a(s);
        }, r);
      };
    },
    km = function (e, i) {
      return function (n) {
        return e(parseFloat(n)) + (i || it(n));
      };
    },
    Am = function (e, i, n) {
      return Oc(e, i, 0, 1, n);
    },
    $c = function (e, i, n) {
      return Bi(n, function (r) {
        return e[~~i(r)];
      });
    },
    Pm = function t(e, i, n) {
      var r = i - e;
      return tt(e)
        ? $c(e, t(0, e.length), i)
        : Bi(n, function (s) {
            return ((r + ((s - e) % r)) % r) + e;
          });
    },
    Mm = function t(e, i, n) {
      var r = i - e,
        s = r * 2;
      return tt(e)
        ? $c(e, t(0, e.length - 1), i)
        : Bi(n, function (a) {
            return (a = (s + ((a - e) % s)) % s || 0), e + (a > r ? s - a : a);
          });
    },
    Ir = function (e) {
      for (var i = 0, n = "", r, s, a, o; ~(r = e.indexOf("random(", i)); )
        (a = e.indexOf(")", r)),
          (o = e.charAt(r + 7) === "["),
          (s = e.substr(r + 7, a - r - 7).match(o ? cc : Ya)),
          (n +=
            e.substr(i, r - i) +
            Mc(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5)),
          (i = a + 1);
      return n + e.substr(i, e.length - i);
    },
    Oc = function (e, i, n, r, s) {
      var a = i - e,
        o = r - n;
      return Bi(s, function (l) {
        return n + (((l - e) / a) * o || 0);
      });
    },
    $m = function t(e, i, n, r) {
      var s = isNaN(e + i)
        ? 0
        : function (h) {
            return (1 - h) * e + h * i;
          };
      if (!s) {
        var a = We(e),
          o = {},
          l,
          c,
          u,
          d,
          f;
        if ((n === !0 && (r = 1) && (n = null), a))
          (e = { p: e }), (i = { p: i });
        else if (tt(e) && !tt(i)) {
          for (u = [], d = e.length, f = d - 2, c = 1; c < d; c++)
            u.push(t(e[c - 1], e[c]));
          d--,
            (s = function (m) {
              m *= d;
              var p = Math.min(f, ~~m);
              return u[p](m - p);
            }),
            (n = i);
        } else r || (e = jn(tt(e) ? [] : {}, e));
        if (!u) {
          for (l in i) co.call(o, e, l, "get", i[l]);
          s = function (m) {
            return mo(m, o) || (a ? e.p : e);
          };
        }
      }
      return Bi(n, s);
    },
    zc = function (e, i, n) {
      var r = e.labels,
        s = ai,
        a,
        o,
        l;
      for (a in r)
        (o = r[a] - i),
          o < 0 == !!n && o && s > (o = Math.abs(o)) && ((l = a), (s = o));
      return l;
    },
    zt = function (e, i, n) {
      var r = e.vars,
        s = r[i],
        a = be,
        o = e._ctx,
        l,
        c,
        u;
      if (s)
        return (
          (l = r[i + "Params"]),
          (c = r.callbackScope || e),
          n && Ri.length && Ps(),
          o && (be = o),
          (u = l ? s.apply(c, l) : s.call(c)),
          (be = a),
          u
        );
    },
    Dr = function (e) {
      return (
        Ni(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!Ze),
        e.progress() < 1 && zt(e, "onInterrupt"),
        e
      );
    },
    Qn,
    Lc = [],
    Ic = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), Ha() || e.headless)) {
          var i = e.name,
            n = ke(e),
            r =
              i && !n && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            s = {
              init: $r,
              render: mo,
              add: co,
              kill: Xm,
              modifier: Gm,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: po,
              aliases: {},
              register: 0,
            };
          if ((Kn(), e !== r)) {
            if ($t[i]) return;
            Ot(r, Ot(Ms(e, s), a)),
              jn(r.prototype, jn(s, Ms(e, a))),
              ($t[(r.prop = i)] = r),
              e.targetTest && (As.push(r), (Ua[i] = 1)),
              (i =
                (i === "css"
                  ? "CSS"
                  : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin");
          }
          fc(i, r), e.register && e.register(Tt, r, St);
        } else Lc.push(e);
    },
    me = 255,
    Rr = {
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
    ao = function (e, i, n) {
      return (
        (e += e < 0 ? 1 : e > 1 ? -1 : 0),
        ((e * 6 < 1
          ? i + (n - i) * e * 6
          : e < 0.5
          ? n
          : e * 3 < 2
          ? i + (n - i) * (2 / 3 - e) * 6
          : i) *
          me +
          0.5) |
          0
      );
    },
    Dc = function (e, i, n) {
      var r = e ? (xi(e) ? [e >> 16, (e >> 8) & me, e & me] : 0) : Rr.black,
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
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Rr[e]))
          r = Rr[e];
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
          (e = parseInt(e.substr(1), 16)),
            (r = [e >> 16, (e >> 8) & me, e & me]);
        } else if (e.substr(0, 3) === "hsl") {
          if (((r = m = e.match(Ya)), !i))
            (l = (+r[0] % 360) / 360),
              (c = +r[1] / 100),
              (u = +r[2] / 100),
              (a = u <= 0.5 ? u * (c + 1) : u + c - u * c),
              (s = u * 2 - a),
              r.length > 3 && (r[3] *= 1),
              (r[0] = ao(l + 1 / 3, s, a)),
              (r[1] = ao(l, s, a)),
              (r[2] = ao(l - 1 / 3, s, a));
          else if (~e.indexOf("="))
            return (r = e.match(oc)), n && r.length < 4 && (r[3] = 1), r;
        } else r = e.match(Ya) || Rr.transparent;
        r = r.map(Number);
      }
      return (
        i &&
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
        n && r.length < 4 && (r[3] = 1),
        r
      );
    },
    Rc = function (e) {
      var i = [],
        n = [],
        r = -1;
      return (
        e.split(Fi).forEach(function (s) {
          var a = s.match(Gn) || [];
          i.push.apply(i, a), n.push((r += a.length + 1));
        }),
        (i.c = n),
        i
      );
    },
    Nc = function (e, i, n) {
      var r = "",
        s = (e + r).match(Fi),
        a = i ? "hsla(" : "rgba(",
        o = 0,
        l,
        c,
        u,
        d;
      if (!s) return e;
      if (
        ((s = s.map(function (f) {
          return (
            (f = Dc(f, i, 1)) &&
            a +
              (i
                ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3]
                : f.join(",")) +
              ")"
          );
        })),
        n && ((u = Rc(e)), (l = n.c), l.join(r) !== u.c.join(r)))
      )
        for (c = e.replace(Fi, "1").split(Gn), d = c.length - 1; o < d; o++)
          r +=
            c[o] +
            (~l.indexOf(o)
              ? s.shift() || a + "0,0,0,0)"
              : (u.length ? u : s.length ? s : n).shift());
      if (!c)
        for (c = e.split(Fi), d = c.length - 1; o < d; o++) r += c[o] + s[o];
      return r + c[d];
    },
    Fi = (function () {
      var t =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in Rr) t += "|" + e + "\\b";
      return new RegExp(t + ")", "gi");
    })(),
    Om = /hsl[a]?\(/,
    Bc = function (e) {
      var i = e.join(" "),
        n;
      if (((Fi.lastIndex = 0), Fi.test(i)))
        return (
          (n = Om.test(i)),
          (e[1] = Nc(e[1], n)),
          (e[0] = Nc(e[0], n, Rc(e[1]))),
          !0
        );
    },
    Nr,
    Lt = (function () {
      var t = Date.now,
        e = 500,
        i = 33,
        n = t(),
        r = n,
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
          var b = t() - r,
            v = g === !0,
            y,
            _,
            x,
            T;
          if (
            ((b > e || b < 0) && (n += b - i),
            (r += b),
            (x = r - n),
            (y = x - a),
            (y > 0 || v) &&
              ((T = ++d.frame),
              (f = x - d.time * 1e3),
              (d.time = x = x / 1e3),
              (a += y + (y >= s ? 4 : s - y)),
              (_ = 1)),
            v || (l = c(p)),
            _)
          )
            for (h = 0; h < o.length; h++) o[h](x, f, T, g);
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
            uc &&
              (!Ga &&
                Ha() &&
                ((li = Ga = window),
                (Xa = li.document || {}),
                (Mt.gsap = Tt),
                (li.gsapVersions || (li.gsapVersions = [])).push(Tt.version),
                dc(Cs || li.GreenSockGlobals || (!li.gsap && li) || {}),
                Lc.forEach(Ic)),
              (u = typeof requestAnimationFrame < "u" && requestAnimationFrame),
              l && d.sleep(),
              (c =
                u ||
                function (g) {
                  return setTimeout(g, (a - d.time * 1e3 + 1) | 0);
                }),
              (Nr = 1),
              m(2));
          },
          sleep: function () {
            (u ? cancelAnimationFrame : clearTimeout)(l), (Nr = 0), (c = $r);
          },
          lagSmoothing: function (g, b) {
            (e = g || 1 / 0), (i = Math.min(b || 33, e));
          },
          fps: function (g) {
            (s = 1e3 / (g || 240)), (a = d.time * 1e3 + s);
          },
          add: function (g, b, v) {
            var y = b
              ? function (_, x, T, E) {
                  g(_, x, T, E), d.remove(y);
                }
              : g;
            return d.remove(g), o[v ? "unshift" : "push"](y), Kn(), y;
          },
          remove: function (g, b) {
            ~(b = o.indexOf(g)) && o.splice(b, 1) && h >= b && h--;
          },
          _listeners: o,
        }),
        d
      );
    })(),
    Kn = function () {
      return !Nr && Lt.wake();
    },
    Qe = {},
    zm = /^[\d.\-M][\d.\-,\s]/,
    Lm = /["']/g,
    Im = function (e) {
      for (
        var i = {},
          n = e.substr(1, e.length - 3).split(":"),
          r = n[0],
          s = 1,
          a = n.length,
          o,
          l,
          c;
        s < a;
        s++
      )
        (l = n[s]),
          (o = s !== a - 1 ? l.lastIndexOf(",") : l.length),
          (c = l.substr(0, o)),
          (i[r] = isNaN(c) ? c.replace(Lm, "").trim() : +c),
          (r = l.substr(o + 1).trim());
      return i;
    },
    Dm = function (e) {
      var i = e.indexOf("(") + 1,
        n = e.indexOf(")"),
        r = e.indexOf("(", i);
      return e.substring(i, ~r && r < n ? e.indexOf(")", n + 1) : n);
    },
    Rm = function (e) {
      var i = (e + "").split("("),
        n = Qe[i[0]];
      return n && i.length > 1 && n.config
        ? n.config.apply(
            null,
            ~e.indexOf("{") ? [Im(i[1])] : Dm(e).split(",").map(vc)
          )
        : Qe._CE && zm.test(e)
        ? Qe._CE("", e)
        : n;
    },
    Fc = function (e) {
      return function (i) {
        return 1 - e(1 - i);
      };
    },
    Vc = function t(e, i) {
      for (var n = e._first, r; n; )
        n instanceof ht
          ? t(n, i)
          : n.vars.yoyoEase &&
            (!n._yoyo || !n._repeat) &&
            n._yoyo !== i &&
            (n.timeline
              ? t(n.timeline, i)
              : ((r = n._ease),
                (n._ease = n._yEase),
                (n._yEase = r),
                (n._yoyo = i))),
          (n = n._next);
    },
    hn = function (e, i) {
      return (e && (ke(e) ? e : Qe[e] || Rm(e))) || i;
    },
    pn = function (e, i, n, r) {
      n === void 0 &&
        (n = function (l) {
          return 1 - i(1 - l);
        }),
        r === void 0 &&
          (r = function (l) {
            return l < 0.5 ? i(l * 2) / 2 : 1 - i((1 - l) * 2) / 2;
          });
      var s = { easeIn: i, easeOut: n, easeInOut: r },
        a;
      return (
        xt(e, function (o) {
          (Qe[o] = Mt[o] = s), (Qe[(a = o.toLowerCase())] = n);
          for (var l in s)
            Qe[
              a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = Qe[o + "." + l] = s[l];
        }),
        s
      );
    },
    qc = function (e) {
      return function (i) {
        return i < 0.5 ? (1 - e(1 - i * 2)) / 2 : 0.5 + e((i - 0.5) * 2) / 2;
      };
    },
    oo = function t(e, i, n) {
      var r = i >= 1 ? i : 1,
        s = (n || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
        a = (s / Va) * (Math.asin(1 / r) || 0),
        o = function (u) {
          return u === 1 ? 1 : r * Math.pow(2, -10 * u) * dm((u - a) * s) + 1;
        },
        l =
          e === "out"
            ? o
            : e === "in"
            ? function (c) {
                return 1 - o(1 - c);
              }
            : qc(o);
      return (
        (s = Va / s),
        (l.config = function (c, u) {
          return t(e, c, u);
        }),
        l
      );
    },
    lo = function t(e, i) {
      i === void 0 && (i = 1.70158);
      var n = function (a) {
          return a ? --a * a * ((i + 1) * a + i) + 1 : 0;
        },
        r =
          e === "out"
            ? n
            : e === "in"
            ? function (s) {
                return 1 - n(1 - s);
              }
            : qc(n);
      return (
        (r.config = function (s) {
          return t(e, s);
        }),
        r
      );
    };
  xt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var i = e < 5 ? e + 1 : e;
    pn(
      t + ",Power" + (i - 1),
      e
        ? function (n) {
            return Math.pow(n, i);
          }
        : function (n) {
            return n;
          },
      function (n) {
        return 1 - Math.pow(1 - n, i);
      },
      function (n) {
        return n < 0.5
          ? Math.pow(n * 2, i) / 2
          : 1 - Math.pow((1 - n) * 2, i) / 2;
      }
    );
  }),
    (Qe.Linear.easeNone = Qe.none = Qe.Linear.easeIn),
    pn("Elastic", oo("in"), oo("out"), oo()),
    (function (t, e) {
      var i = 1 / e,
        n = 2 * i,
        r = 2.5 * i,
        s = function (o) {
          return o < i
            ? t * o * o
            : o < n
            ? t * Math.pow(o - 1.5 / e, 2) + 0.75
            : o < r
            ? t * (o -= 2.25 / e) * o + 0.9375
            : t * Math.pow(o - 2.625 / e, 2) + 0.984375;
        };
      pn(
        "Bounce",
        function (a) {
          return 1 - s(1 - a);
        },
        s
      );
    })(7.5625, 2.75),
    pn("Expo", function (t) {
      return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t);
    }),
    pn("Circ", function (t) {
      return -(sc(1 - t * t) - 1);
    }),
    pn("Sine", function (t) {
      return t === 1 ? 1 : -um(t * lm) + 1;
    }),
    pn("Back", lo("in"), lo("out"), lo()),
    (Qe.SteppedEase =
      Qe.steps =
      Mt.SteppedEase =
        {
          config: function (e, i) {
            e === void 0 && (e = 1);
            var n = 1 / e,
              r = e + (i ? 0 : 1),
              s = i ? 1 : 0,
              a = 1 - et;
            return function (o) {
              return (((r * Lr(0, a, o)) | 0) + s) * n;
            };
          },
        }),
    (Wn.ease = Qe["quad.out"]),
    xt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (Ka += t + "," + t + "Params,");
      }
    );
  var Hc = function (e, i) {
      (this.id = cm++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = i),
        (this.get = i ? i.get : mc),
        (this.set = i ? i.getSetter : po);
    },
    Br = (function () {
      function t(i) {
        (this.vars = i),
          (this._delay = +i.delay || 0),
          (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) &&
            ((this._rDelay = i.repeatDelay || 0),
            (this._yoyo = !!i.yoyo || !!i.yoyoEase)),
          (this._ts = 1),
          Zn(this, +i.duration, 1, 1),
          (this.data = i.data),
          be && ((this._ctx = be), be.data.push(this)),
          Nr || Lt.wake();
      }
      var e = t.prototype;
      return (
        (e.delay = function (n) {
          return n || n === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + n - this._delay),
              (this._delay = n),
              this)
            : this._delay;
        }),
        (e.duration = function (n) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (n) {
          return arguments.length
            ? ((this._dirty = 0),
              Zn(
                this,
                this._repeat < 0
                  ? n
                  : (n - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (n, r) {
          if ((Kn(), !arguments.length)) return this._tTime;
          var s = this._dp;
          if (s && s.smoothChildTiming && this._ts) {
            for (
              Ls(this, n), !s._dp || s.parent || xc(s, this);
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
              ((this._ts > 0 && n < this._tDur) ||
                (this._ts < 0 && n > 0) ||
                (!this._tDur && !n)) &&
              ci(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== n ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === et) ||
              (!n && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = n), gc(this, n, r)),
            this
          );
        }),
        (e.time = function (n, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), n + wc(this)) %
                  (this._dur + this._rDelay) || (n ? this._dur : 0),
                r
              )
            : this._time;
        }),
        (e.totalProgress = function (n, r) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * n, r)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
            ? 1
            : 0;
        }),
        (e.progress = function (n, r) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) +
                  wc(this),
                r
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (e.iteration = function (n, r) {
          var s = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (n - 1) * s, r)
            : this._repeat
            ? Un(this._tTime, s) + 1
            : 1;
        }),
        (e.timeScale = function (n, r) {
          if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
          if (this._rts === n) return this;
          var s =
            this.parent && this._ts ? Os(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +n || 0),
            (this._ts = this._ps || n === -1e-8 ? 0 : this._rts),
            this.totalTime(
              Lr(-Math.abs(this._delay), this.totalDuration(), s),
              r !== !1
            ),
            zs(this),
            ym(this)
          );
        }),
        (e.paused = function (n) {
          return arguments.length
            ? (this._ps !== n &&
                ((this._ps = n),
                n
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (Kn(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== et &&
                        (this._tTime -= et)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (n) {
          if (arguments.length) {
            this._start = n;
            var r = this.parent || this._dp;
            return (
              r && (r._sort || !this.parent) && ci(r, this, n - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (n) {
          return (
            this._start +
            (wt(n) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (e.rawTime = function (n) {
          var r = this.parent || this._dp;
          return r
            ? n &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? Os(r.rawTime(n), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (n) {
          n === void 0 && (n = pm);
          var r = Ze;
          return (
            (Ze = n),
            eo(this) &&
              (this.timeline && this.timeline.revert(n),
              this.totalTime(-0.01, n.suppressEvents)),
            this.data !== "nested" && n.kill !== !1 && this.kill(),
            (Ze = r),
            this
          );
        }),
        (e.globalTime = function (n) {
          for (var r = this, s = arguments.length ? n : r.rawTime(); r; )
            (s = r._start + s / (Math.abs(r._ts) || 1)), (r = r._dp);
          return !this.parent && this._sat ? this._sat.globalTime(n) : s;
        }),
        (e.repeat = function (n) {
          return arguments.length
            ? ((this._repeat = n === 1 / 0 ? -2 : n), Ec(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (n) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = n), Ec(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (n) {
          return arguments.length ? ((this._yoyo = n), this) : this._yoyo;
        }),
        (e.seek = function (n, r) {
          return this.totalTime(Vt(this, n), wt(r));
        }),
        (e.restart = function (n, r) {
          return (
            this.play().totalTime(n ? -this._delay : 0, wt(r)),
            this._dur || (this._zTime = -1e-8),
            this
          );
        }),
        (e.play = function (n, r) {
          return n != null && this.seek(n, r), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (n, r) {
          return (
            n != null && this.seek(n || this.totalDuration(), r),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (n, r) {
          return n != null && this.seek(n, r), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (n) {
          return arguments.length
            ? (!!n !== this.reversed() &&
                this.timeScale(-this._rts || (n ? -1e-8 : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
        }),
        (e.isActive = function () {
          var n = this.parent || this._dp,
            r = this._start,
            s;
          return !!(
            !n ||
            (this._ts &&
              this._initted &&
              n.isActive() &&
              (s = n.rawTime(!0)) >= r &&
              s < this.endTime(!0) - et)
          );
        }),
        (e.eventCallback = function (n, r, s) {
          var a = this.vars;
          return arguments.length > 1
            ? (r
                ? ((a[n] = r),
                  s && (a[n + "Params"] = s),
                  n === "onUpdate" && (this._onUpdate = r))
                : delete a[n],
              this)
            : a[n];
        }),
        (e.then = function (n) {
          var r = this;
          return new Promise(function (s) {
            var a = ke(n) ? n : yc,
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
          Dr(this);
        }),
        t
      );
    })();
  Ot(Br.prototype, {
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
  var ht = (function (t) {
    rc(e, t);
    function e(n, r) {
      var s;
      return (
        n === void 0 && (n = {}),
        (s = t.call(this, n) || this),
        (s.labels = {}),
        (s.smoothChildTiming = !!n.smoothChildTiming),
        (s.autoRemoveChildren = !!n.autoRemoveChildren),
        (s._sort = wt(n.sortChildren)),
        xe && ci(n.parent || xe, wi(s), r),
        n.reversed && s.reverse(),
        n.paused && s.paused(!0),
        n.scrollTrigger && Sc(wi(s), n.scrollTrigger),
        s
      );
    }
    var i = e.prototype;
    return (
      (i.to = function (r, s, a) {
        return zr(0, arguments, this), this;
      }),
      (i.from = function (r, s, a) {
        return zr(1, arguments, this), this;
      }),
      (i.fromTo = function (r, s, a, o) {
        return zr(2, arguments, this), this;
      }),
      (i.set = function (r, s, a) {
        return (
          (s.duration = 0),
          (s.parent = this),
          Or(s).repeatDelay || (s.repeat = 0),
          (s.immediateRender = !!s.immediateRender),
          new Be(r, s, Vt(this, a), 1),
          this
        );
      }),
      (i.call = function (r, s, a) {
        return ci(this, Be.delayedCall(0, r, s), a);
      }),
      (i.staggerTo = function (r, s, a, o, l, c, u) {
        return (
          (a.duration = s),
          (a.stagger = a.stagger || o),
          (a.onComplete = c),
          (a.onCompleteParams = u),
          (a.parent = this),
          new Be(r, a, Vt(this, l)),
          this
        );
      }),
      (i.staggerFrom = function (r, s, a, o, l, c, u) {
        return (
          (a.runBackwards = 1),
          (Or(a).immediateRender = wt(a.immediateRender)),
          this.staggerTo(r, s, a, o, l, c, u)
        );
      }),
      (i.staggerFromTo = function (r, s, a, o, l, c, u, d) {
        return (
          (o.startAt = a),
          (Or(o).immediateRender = wt(o.immediateRender)),
          this.staggerTo(r, s, o, l, c, u, d)
        );
      }),
      (i.render = function (r, s, a) {
        var o = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          c = this._dur,
          u = r <= 0 ? 0 : Ne(r),
          d = this._zTime < 0 != r < 0 && (this._initted || !c),
          f,
          h,
          m,
          p,
          g,
          b,
          v,
          y,
          _,
          x,
          T,
          E;
        if (
          (this !== xe && u > l && r >= 0 && (u = l),
          u !== this._tTime || a || d)
        ) {
          if (
            (o !== this._time &&
              c &&
              ((u += this._time - o), (r += this._time - o)),
            (f = u),
            (_ = this._start),
            (y = this._ts),
            (b = !y),
            d && (c || (o = this._zTime), (r || !s) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((T = this._yoyo),
              (g = c + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(g * 100 + r, s, a);
            if (
              ((f = Ne(u % g)),
              u === l
                ? ((p = this._repeat), (f = c))
                : ((x = Ne(u / g)),
                  (p = ~~x),
                  p && p === x && ((f = c), p--),
                  f > c && (f = c)),
              (x = Un(this._tTime, g)),
              !o &&
                this._tTime &&
                x !== p &&
                this._tTime - x * g - this._dur <= 0 &&
                (x = p),
              T && p & 1 && ((f = c - f), (E = 1)),
              p !== x && !this._lock)
            ) {
              var C = T && x & 1,
                $ = C === (T && p & 1);
              if (
                (p < x && (C = !C),
                (o = C ? 0 : u % c ? c : u),
                (this._lock = 1),
                (this.render(o || (E ? 0 : Ne(p * g)), s, !c)._lock = 0),
                (this._tTime = u),
                !s && this.parent && zt(this, "onRepeat"),
                this.vars.repeatRefresh && !E && (this.invalidate()._lock = 1),
                (o && o !== this._time) ||
                  b !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((c = this._dur),
                (l = this._tDur),
                $ &&
                  ((this._lock = 2),
                  (o = C ? c : -1e-4),
                  this.render(o, !0),
                  this.vars.repeatRefresh && !E && this.invalidate()),
                (this._lock = 0),
                !this._ts && !b)
              )
                return this;
              Vc(this, E);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((v = xm(this, Ne(o), Ne(f))), v && (u -= f - (f = v._start))),
            (this._tTime = u),
            (this._time = f),
            (this._act = !y),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (o = 0)),
            !o && u && !s && !x && (zt(this, "onStart"), this._tTime !== u))
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
                  f !== this._time || (!this._ts && !b))
                ) {
                  (v = 0), m && (u += this._zTime = -1e-8);
                  break;
                }
              }
              h = m;
            }
          else {
            h = this._last;
            for (var k = r < 0 ? r : f; h; ) {
              if (
                ((m = h._prev), (h._act || k <= h._end) && h._ts && v !== h)
              ) {
                if (h.parent !== this) return this.render(r, s, a);
                if (
                  (h.render(
                    h._ts > 0
                      ? (k - h._start) * h._ts
                      : (h._dirty ? h.totalDuration() : h._tDur) +
                          (k - h._start) * h._ts,
                    s,
                    a || (Ze && eo(h))
                  ),
                  f !== this._time || (!this._ts && !b))
                ) {
                  (v = 0), m && (u += this._zTime = k ? -1e-8 : et);
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
            return (this._start = _), zs(this), this.render(r, s, a);
          this._onUpdate && !s && zt(this, "onUpdate", !0),
            ((u === l && this._tTime >= this.totalDuration()) || (!u && o)) &&
              (_ === this._start || Math.abs(y) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !c) &&
                  ((u === l && this._ts > 0) || (!u && this._ts < 0)) &&
                  Ni(this, 1),
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
      (i.add = function (r, s) {
        var a = this;
        if ((xi(s) || (s = Vt(this, s, r)), !(r instanceof Br))) {
          if (tt(r))
            return (
              r.forEach(function (o) {
                return a.add(o, s);
              }),
              this
            );
          if (We(r)) return this.addLabel(r, s);
          if (ke(r)) r = Be.delayedCall(0, r);
          else return this;
        }
        return this !== r ? ci(this, r, s) : this;
      }),
      (i.getChildren = function (r, s, a, o) {
        r === void 0 && (r = !0),
          s === void 0 && (s = !0),
          a === void 0 && (a = !0),
          o === void 0 && (o = -1e8);
        for (var l = [], c = this._first; c; )
          c._start >= o &&
            (c instanceof Be
              ? s && l.push(c)
              : (a && l.push(c),
                r && l.push.apply(l, c.getChildren(!0, s, a)))),
            (c = c._next);
        return l;
      }),
      (i.getById = function (r) {
        for (var s = this.getChildren(1, 1, 1), a = s.length; a--; )
          if (s[a].vars.id === r) return s[a];
      }),
      (i.remove = function (r) {
        return We(r)
          ? this.removeLabel(r)
          : ke(r)
          ? this.killTweensOf(r)
          : (r.parent === this && $s(this, r),
            r === this._recent && (this._recent = this._last),
            fn(this));
      }),
      (i.totalTime = function (r, s) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Ne(
                Lt.time -
                  (this._ts > 0
                    ? r / this._ts
                    : (this.totalDuration() - r) / -this._ts)
              )),
            t.prototype.totalTime.call(this, r, s),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (i.addLabel = function (r, s) {
        return (this.labels[r] = Vt(this, s)), this;
      }),
      (i.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (i.addPause = function (r, s, a) {
        var o = Be.delayedCall(0, s || $r, a);
        return (
          (o.data = "isPause"), (this._hasPause = 1), ci(this, o, Vt(this, r))
        );
      }),
      (i.removePause = function (r) {
        var s = this._first;
        for (r = Vt(this, r); s; )
          s._start === r && s.data === "isPause" && Ni(s), (s = s._next);
      }),
      (i.killTweensOf = function (r, s, a) {
        for (var o = this.getTweensOf(r, a), l = o.length; l--; )
          Vi !== o[l] && o[l].kill(r, s);
        return this;
      }),
      (i.getTweensOf = function (r, s) {
        for (var a = [], o = qt(r), l = this._first, c = xi(s), u; l; )
          l instanceof Be
            ? mm(l._targets, o) &&
              (c
                ? (!Vi || (l._initted && l._ts)) &&
                  l.globalTime(0) <= s &&
                  l.globalTime(l.totalDuration()) > s
                : !s || l.isActive()) &&
              a.push(l)
            : (u = l.getTweensOf(o, s)).length && a.push.apply(a, u),
            (l = l._next);
        return a;
      }),
      (i.tweenTo = function (r, s) {
        s = s || {};
        var a = this,
          o = Vt(a, r),
          l = s,
          c = l.startAt,
          u = l.onStart,
          d = l.onStartParams,
          f = l.immediateRender,
          h,
          m = Be.to(
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
                  et,
                onStart: function () {
                  if ((a.pause(), !h)) {
                    var g =
                      s.duration ||
                      Math.abs(
                        (o - (c && "time" in c ? c.time : a._time)) /
                          a.timeScale()
                      );
                    m._dur !== g && Zn(m, g, 0, 1).render(m._time, !0, !0),
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
      (i.tweenFromTo = function (r, s, a) {
        return this.tweenTo(s, Ot({ startAt: { time: Vt(this, r) } }, a));
      }),
      (i.recent = function () {
        return this._recent;
      }),
      (i.nextLabel = function (r) {
        return r === void 0 && (r = this._time), zc(this, Vt(this, r));
      }),
      (i.previousLabel = function (r) {
        return r === void 0 && (r = this._time), zc(this, Vt(this, r), 1);
      }),
      (i.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + et);
      }),
      (i.shiftChildren = function (r, s, a) {
        a === void 0 && (a = 0);
        for (var o = this._first, l = this.labels, c; o; )
          o._start >= a && ((o._start += r), (o._end += r)), (o = o._next);
        if (s) for (c in l) l[c] >= a && (l[c] += r);
        return fn(this);
      }),
      (i.invalidate = function (r) {
        var s = this._first;
        for (this._lock = 0; s; ) s.invalidate(r), (s = s._next);
        return t.prototype.invalidate.call(this, r);
      }),
      (i.clear = function (r) {
        r === void 0 && (r = !0);
        for (var s = this._first, a; s; )
          (a = s._next), this.remove(s), (s = a);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          r && (this.labels = {}),
          fn(this)
        );
      }),
      (i.totalDuration = function (r) {
        var s = 0,
          a = this,
          o = a._last,
          l = ai,
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
                ? ((a._lock = 1), (ci(a, o, u - o._delay, 1)._lock = 0))
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
          Zn(a, a === xe && a._time > s ? a._time : s, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (e.updateRoot = function (r) {
        if ((xe._ts && (gc(xe, Os(r, xe)), (hc = Lt.frame)), Lt.frame >= pc)) {
          pc += Pt.autoSleep || 120;
          var s = xe._first;
          if ((!s || !s._ts) && Pt.autoSleep && Lt._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || Lt.sleep();
          }
        }
      }),
      e
    );
  })(Br);
  Ot(ht.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Nm = function (e, i, n, r, s, a, o) {
      var l = new St(this._pt, e, i, 0, 1, Uc, null, s),
        c = 0,
        u = 0,
        d,
        f,
        h,
        m,
        p,
        g,
        b,
        v;
      for (
        l.b = n,
          l.e = r,
          n += "",
          r += "",
          (b = ~r.indexOf("random(")) && (r = Ir(r)),
          a && ((v = [n, r]), a(v, e, i), (n = v[0]), (r = v[1])),
          f = n.match(Wa) || [];
        (d = Wa.exec(r));

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
              c: m.charAt(1) === "=" ? Xn(g, m) - g : parseFloat(m) - g,
              m: h && h < 4 ? Math.round : 0,
            }),
            (c = Wa.lastIndex));
      return (
        (l.c = c < r.length ? r.substring(c, r.length) : ""),
        (l.fp = o),
        (lc.test(r) || b) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    co = function (e, i, n, r, s, a, o, l, c, u) {
      ke(r) && (r = r(s || 0, e, a));
      var d = e[i],
        f =
          n !== "get"
            ? n
            : ke(d)
            ? c
              ? e[
                  i.indexOf("set") || !ke(e["get" + i.substr(3)])
                    ? i
                    : "get" + i.substr(3)
                ](c)
              : e[i]()
            : d,
        h = ke(d) ? (c ? Hm : Xc) : ho,
        m;
      if (
        (We(r) &&
          (~r.indexOf("random(") && (r = Ir(r)),
          r.charAt(1) === "=" &&
            ((m = Xn(f, r) + (it(f) || 0)), (m || m === 0) && (r = m))),
        !u || f !== r || uo)
      )
        return !isNaN(f * r) && r !== ""
          ? ((m = new St(
              this._pt,
              e,
              i,
              +f || 0,
              r - (f || 0),
              typeof d == "boolean" ? Wm : jc,
              0,
              h
            )),
            c && (m.fp = c),
            o && m.modifier(o, this, e),
            (this._pt = m))
          : (!d && !(i in e) && ja(i, r),
            Nm.call(this, e, i, f, r, h, l || Pt.stringFilter, c));
    },
    Bm = function (e, i, n, r, s) {
      if (
        (ke(e) && (e = Fr(e, s, i, n, r)),
        !oi(e) || (e.style && e.nodeType) || tt(e) || ac(e))
      )
        return We(e) ? Fr(e, s, i, n, r) : e;
      var a = {},
        o;
      for (o in e) a[o] = Fr(e[o], s, i, n, r);
      return a;
    },
    Yc = function (e, i, n, r, s, a) {
      var o, l, c, u;
      if (
        $t[e] &&
        (o = new $t[e]()).init(
          s,
          o.rawVars ? i[e] : Bm(i[e], r, s, a, n),
          n,
          r,
          a
        ) !== !1 &&
        ((n._pt = l = new St(n._pt, s, e, 0, 1, o.render, o, 0, o.priority)),
        n !== Qn)
      )
        for (c = n._ptLookup[n._targets.indexOf(s)], u = o._props.length; u--; )
          c[o._props[u]] = l;
      return o;
    },
    Vi,
    uo,
    fo = function t(e, i, n) {
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
        b = e.parent,
        v = b && b.data === "nested" ? b.vars.targets : g,
        y = e._overwrite === "auto" && !Fa,
        _ = e.timeline,
        x,
        T,
        E,
        C,
        $,
        k,
        M,
        w,
        S,
        O,
        z,
        A,
        L;
      if (
        (_ && (!f || !s) && (s = "none"),
        (e._ease = hn(s, Wn.ease)),
        (e._yEase = d ? Fc(hn(d === !0 ? s : d, Wn.ease)) : 0),
        d &&
          e._yoyo &&
          !e._repeat &&
          ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
        (e._from = !_ && !!r.runBackwards),
        !_ || (f && !r.stagger))
      ) {
        if (
          ((w = g[0] ? dn(g[0]).harness : 0),
          (A = w && r[w.prop]),
          (x = Ms(r, Ua)),
          p &&
            (p._zTime < 0 && p.progress(1),
            i < 0 && u && o && !h
              ? p.render(-1, !0)
              : p.revert(u && m ? ks : hm),
            (p._lazy = 0)),
          a)
        ) {
          if (
            (Ni(
              (e._startAt = Be.set(
                g,
                Ot(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: b,
                    immediateRender: !0,
                    lazy: !p && wt(l),
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
            i < 0 && (Ze || (!o && !h)) && e._startAt.revert(ks),
            o && m && i <= 0 && n <= 0)
          ) {
            i && (e._zTime = i);
            return;
          }
        } else if (u && m && !p) {
          if (
            (i && (o = !1),
            (E = Ot(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !p && wt(l),
                immediateRender: o,
                stagger: 0,
                parent: b,
              },
              x
            )),
            A && (E[w.prop] = A),
            Ni((e._startAt = Be.set(g, E))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            i < 0 && (Ze ? e._startAt.revert(ks) : e._startAt.render(-1, !0)),
            (e._zTime = i),
            !o)
          )
            t(e._startAt, et, et);
          else if (!i) return;
        }
        for (
          e._pt = e._ptCache = 0, l = (m && wt(l)) || (l && !m), T = 0;
          T < g.length;
          T++
        ) {
          if (
            (($ = g[T]),
            (M = $._gsap || Ja(g)[T]._gsap),
            (e._ptLookup[T] = O = {}),
            Za[M.id] && Ri.length && Ps(),
            (z = v === g ? T : v.indexOf($)),
            w &&
              (S = new w()).init($, A || x, e, z, v) !== !1 &&
              ((e._pt = C =
                new St(e._pt, $, S.name, 0, 1, S.render, S, 0, S.priority)),
              S._props.forEach(function (I) {
                O[I] = C;
              }),
              S.priority && (k = 1)),
            !w || A)
          )
            for (E in x)
              $t[E] && (S = Yc(E, x, e, z, $, v))
                ? S.priority && (k = 1)
                : (O[E] = C =
                    co.call(e, $, E, "get", x[E], z, v, 0, r.stringFilter));
          e._op && e._op[T] && e.kill($, e._op[T]),
            y &&
              e._pt &&
              ((Vi = e),
              xe.killTweensOf($, O, e.globalTime(i)),
              (L = !e.parent),
              (Vi = 0)),
            e._pt && l && (Za[M.id] = 1);
        }
        k && Zc(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = c),
        (e._initted = (!e._op || e._pt) && !L),
        f && i <= 0 && _.render(ai, !0, !0);
    },
    Fm = function (e, i, n, r, s, a, o, l) {
      var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[i],
        u,
        d,
        f,
        h;
      if (!c)
        for (
          c = e._ptCache[i] = [], f = e._ptLookup, h = e._targets.length;
          h--;

        ) {
          if (((u = f[h][i]), u && u.d && u.d._pt))
            for (u = u.d._pt; u && u.p !== i && u.fp !== i; ) u = u._next;
          if (!u)
            return (
              (uo = 1),
              (e.vars[i] = "+=0"),
              fo(e, o),
              (uo = 0),
              l ? Mr(i + " not eligible for reset") : 1
            );
          c.push(u);
        }
      for (h = c.length; h--; )
        (d = c[h]),
          (u = d._pt || d),
          (u.s = (r || r === 0) && !s ? r : u.s + (r || 0) + a * u.c),
          (u.c = n - u.s),
          d.e && (d.e = Pe(n) + it(d.e)),
          d.b && (d.b = u.s + it(d.b));
    },
    Vm = function (e, i) {
      var n = e[0] ? dn(e[0]).harness : 0,
        r = n && n.aliases,
        s,
        a,
        o,
        l;
      if (!r) return i;
      s = jn({}, i);
      for (a in r)
        if (a in s)
          for (l = r[a].split(","), o = l.length; o--; ) s[l[o]] = s[a];
      return s;
    },
    qm = function (e, i, n, r) {
      var s = i.ease || r || "power1.inOut",
        a,
        o;
      if (tt(i))
        (o = n[e] || (n[e] = [])),
          i.forEach(function (l, c) {
            return o.push({ t: (c / (i.length - 1)) * 100, v: l, e: s });
          });
      else
        for (a in i)
          (o = n[a] || (n[a] = [])),
            a === "ease" || o.push({ t: parseFloat(e), v: i[a], e: s });
    },
    Fr = function (e, i, n, r, s) {
      return ke(e)
        ? e.call(i, n, r, s)
        : We(e) && ~e.indexOf("random(")
        ? Ir(e)
        : e;
    },
    Wc = Ka + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Gc = {};
  xt(Wc + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return (Gc[t] = 1);
  });
  var Be = (function (t) {
    rc(e, t);
    function e(n, r, s, a) {
      var o;
      typeof r == "number" && ((s.duration = r), (r = s), (s = null)),
        (o = t.call(this, a ? r : Or(r)) || this);
      var l = o.vars,
        c = l.duration,
        u = l.delay,
        d = l.immediateRender,
        f = l.stagger,
        h = l.overwrite,
        m = l.keyframes,
        p = l.defaults,
        g = l.scrollTrigger,
        b = l.yoyoEase,
        v = r.parent || xe,
        y = (tt(n) || ac(n) ? xi(n[0]) : "length" in r) ? [n] : qt(n),
        _,
        x,
        T,
        E,
        C,
        $,
        k,
        M;
      if (
        ((o._targets = y.length
          ? Ja(y)
          : Mr(
              "GSAP target " + n + " not found. https://gsap.com",
              !Pt.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = h),
        m || f || Es(c) || Es(u))
      ) {
        if (
          ((r = o.vars),
          (_ = o.timeline =
            new ht({
              data: "nested",
              defaults: p || {},
              targets: v && v.data === "nested" ? v.vars.targets : y,
            })),
          _.kill(),
          (_.parent = _._dp = wi(o)),
          (_._start = 0),
          f || Es(c) || Es(u))
        ) {
          if (((E = y.length), (k = f && Ac(f)), oi(f)))
            for (C in f) ~Wc.indexOf(C) && (M || (M = {}), (M[C] = f[C]));
          for (x = 0; x < E; x++)
            (T = Ms(r, Gc)),
              (T.stagger = 0),
              b && (T.yoyoEase = b),
              M && jn(T, M),
              ($ = y[x]),
              (T.duration = +Fr(c, wi(o), x, $, y)),
              (T.delay = (+Fr(u, wi(o), x, $, y) || 0) - o._delay),
              !f &&
                E === 1 &&
                T.delay &&
                ((o._delay = u = T.delay), (o._start += u), (T.delay = 0)),
              _.to($, T, k ? k(x, $, y) : 0),
              (_._ease = Qe.none);
          _.duration() ? (c = u = 0) : (o.timeline = 0);
        } else if (m) {
          Or(Ot(_.vars.defaults, { ease: "none" })),
            (_._ease = hn(m.ease || r.ease || "none"));
          var w = 0,
            S,
            O,
            z;
          if (tt(m))
            m.forEach(function (A) {
              return _.to(y, A, ">");
            }),
              _.duration();
          else {
            T = {};
            for (C in m)
              C === "ease" || C === "easeEach" || qm(C, m[C], T, m.easeEach);
            for (C in T)
              for (
                S = T[C].sort(function (A, L) {
                  return A.t - L.t;
                }),
                  w = 0,
                  x = 0;
                x < S.length;
                x++
              )
                (O = S[x]),
                  (z = {
                    ease: O.e,
                    duration: ((O.t - (x ? S[x - 1].t : 0)) / 100) * c,
                  }),
                  (z[C] = O.v),
                  _.to(y, z, w),
                  (w += z.duration);
            _.duration() < c && _.to({}, { duration: c - _.duration() });
          }
        }
        c || o.duration((c = _.duration()));
      } else o.timeline = 0;
      return (
        h === !0 && !Fa && ((Vi = wi(o)), xe.killTweensOf(y), (Vi = 0)),
        ci(v, wi(o), s),
        r.reversed && o.reverse(),
        r.paused && o.paused(!0),
        (d ||
          (!c &&
            !m &&
            o._start === Ne(v._time) &&
            wt(d) &&
            bm(wi(o)) &&
            v.data !== "nested")) &&
          ((o._tTime = -1e-8), o.render(Math.max(0, -u) || 0)),
        g && Sc(wi(o), g),
        o
      );
    }
    var i = e.prototype;
    return (
      (i.render = function (r, s, a) {
        var o = this._time,
          l = this._tDur,
          c = this._dur,
          u = r < 0,
          d = r > l - et && !u ? l : r < et ? 0 : r,
          f,
          h,
          m,
          p,
          g,
          b,
          v,
          y,
          _;
        if (!c) wm(this, r, s, a);
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
              ((f = Ne(d % p)),
              d === l
                ? ((m = this._repeat), (f = c))
                : ((g = Ne(d / p)),
                  (m = ~~g),
                  m && m === g ? ((f = c), m--) : f > c && (f = c)),
              (b = this._yoyo && m & 1),
              b && ((_ = this._yEase), (f = c - f)),
              (g = Un(this._tTime, p)),
              f === o && !a && this._initted && m === g)
            )
              return (this._tTime = d), this;
            m !== g &&
              (y && this._yEase && Vc(y, b),
              this.vars.repeatRefresh &&
                !b &&
                !this._lock &&
                f !== p &&
                this._initted &&
                ((this._lock = a = 1),
                (this.render(Ne(p * m), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Tc(this, u ? r : f, a, s, d)) return (this._tTime = 0), this;
            if (o !== this._time && !(a && this.vars.repeatRefresh && m !== g))
              return this;
            if (c !== this._dur) return this.render(r, s, a);
          }
          if (
            ((this._tTime = d),
            (this._time = f),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = v = (_ || this._ease)(f / c)),
            this._from && (this.ratio = v = 1 - v),
            !o && d && !s && !g && (zt(this, "onStart"), this._tTime !== d))
          )
            return this;
          for (h = this._pt; h; ) h.r(v, h.d), (h = h._next);
          (y && y.render(r < 0 ? r : y._dur * y._ease(f / this._dur), s, a)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !s &&
              (u && to(this, r, s, a), zt(this, "onUpdate")),
            this._repeat &&
              m !== g &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              zt(this, "onRepeat"),
            (d === this._tDur || !d) &&
              this._tTime === d &&
              (u && !this._onUpdate && to(this, r, !0, !0),
              (r || !c) &&
                ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
                Ni(this, 1),
              !s &&
                !(u && !o) &&
                (d || o || b) &&
                (zt(this, d === l ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(d < l && this.timeScale() > 0) &&
                  this._prom()));
        }
        return this;
      }),
      (i.targets = function () {
        return this._targets;
      }),
      (i.invalidate = function (r) {
        return (
          (!r || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(r),
          t.prototype.invalidate.call(this, r)
        );
      }),
      (i.resetTo = function (r, s, a, o, l) {
        Nr || Lt.wake(), this._ts || this.play();
        var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          u;
        return (
          this._initted || fo(this, c),
          (u = this._ease(c / this._dur)),
          Fm(this, r, s, a, o, u, c, l)
            ? this.resetTo(r, s, a, o, 1)
            : (Ls(this, 0),
              this.parent ||
                _c(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (i.kill = function (r, s) {
        if ((s === void 0 && (s = "all"), !r && (!s || s === "all")))
          return (
            (this._lazy = this._pt = 0),
            this.parent
              ? Dr(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!Ze),
            this
          );
        if (this.timeline) {
          var a = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, s, Vi && Vi.vars.overwrite !== !0)
              ._first || Dr(this),
            this.parent &&
              a !== this.timeline.totalDuration() &&
              Zn(this, (this._dur * this.timeline._tDur) / a, 0, 1),
            this
          );
        }
        var o = this._targets,
          l = r ? qt(r) : o,
          c = this._ptLookup,
          u = this._pt,
          d,
          f,
          h,
          m,
          p,
          g,
          b;
        if ((!s || s === "all") && vm(o, l))
          return s === "all" && (this._pt = 0), Dr(this);
        for (
          d = this._op = this._op || [],
            s !== "all" &&
              (We(s) &&
                ((p = {}),
                xt(s, function (v) {
                  return (p[v] = 1);
                }),
                (s = p)),
              (s = Vm(o, s))),
            b = o.length;
          b--;

        )
          if (~l.indexOf(o[b])) {
            (f = c[b]),
              s === "all"
                ? ((d[b] = s), (m = f), (h = {}))
                : ((h = d[b] = d[b] || {}), (m = s));
            for (p in m)
              (g = f && f[p]),
                g &&
                  ((!("kill" in g.d) || g.d.kill(p) === !0) &&
                    $s(this, g, "_pt"),
                  delete f[p]),
                h !== "all" && (h[p] = 1);
          }
        return this._initted && !this._pt && u && Dr(this), this;
      }),
      (e.to = function (r, s) {
        return new e(r, s, arguments[2]);
      }),
      (e.from = function (r, s) {
        return zr(1, arguments);
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
        return zr(2, arguments);
      }),
      (e.set = function (r, s) {
        return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(r, s);
      }),
      (e.killTweensOf = function (r, s, a) {
        return xe.killTweensOf(r, s, a);
      }),
      e
    );
  })(Br);
  Ot(Be.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    xt("staggerTo,staggerFrom,staggerFromTo", function (t) {
      Be[t] = function () {
        var e = new ht(),
          i = no.call(arguments, 0);
        return i.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, i);
      };
    });
  var ho = function (e, i, n) {
      return (e[i] = n);
    },
    Xc = function (e, i, n) {
      return e[i](n);
    },
    Hm = function (e, i, n, r) {
      return e[i](r.fp, n);
    },
    Ym = function (e, i, n) {
      return e.setAttribute(i, n);
    },
    po = function (e, i) {
      return ke(e[i]) ? Xc : qa(e[i]) && e.setAttribute ? Ym : ho;
    },
    jc = function (e, i) {
      return i.set(i.t, i.p, Math.round((i.s + i.c * e) * 1e6) / 1e6, i);
    },
    Wm = function (e, i) {
      return i.set(i.t, i.p, !!(i.s + i.c * e), i);
    },
    Uc = function (e, i) {
      var n = i._pt,
        r = "";
      if (!e && i.b) r = i.b;
      else if (e === 1 && i.e) r = i.e;
      else {
        for (; n; )
          (r =
            n.p +
            (n.m
              ? n.m(n.s + n.c * e)
              : Math.round((n.s + n.c * e) * 1e4) / 1e4) +
            r),
            (n = n._next);
        r += i.c;
      }
      i.set(i.t, i.p, r, i);
    },
    mo = function (e, i) {
      for (var n = i._pt; n; ) n.r(e, n.d), (n = n._next);
    },
    Gm = function (e, i, n, r) {
      for (var s = this._pt, a; s; )
        (a = s._next), s.p === r && s.modifier(e, i, n), (s = a);
    },
    Xm = function (e) {
      for (var i = this._pt, n, r; i; )
        (r = i._next),
          (i.p === e && !i.op) || i.op === e
            ? $s(this, i, "_pt")
            : i.dep || (n = 1),
          (i = r);
      return !n;
    },
    jm = function (e, i, n, r) {
      r.mSet(e, i, r.m.call(r.tween, n, r.mt), r);
    },
    Zc = function (e) {
      for (var i = e._pt, n, r, s, a; i; ) {
        for (n = i._next, r = s; r && r.pr > i.pr; ) r = r._next;
        (i._prev = r ? r._prev : a) ? (i._prev._next = i) : (s = i),
          (i._next = r) ? (r._prev = i) : (a = i),
          (i = n);
      }
      e._pt = s;
    },
    St = (function () {
      function t(i, n, r, s, a, o, l, c, u) {
        (this.t = n),
          (this.s = s),
          (this.c = a),
          (this.p = r),
          (this.r = o || jc),
          (this.d = l || this),
          (this.set = c || ho),
          (this.pr = u || 0),
          (this._next = i),
          i && (i._prev = this);
      }
      var e = t.prototype;
      return (
        (e.modifier = function (n, r, s) {
          (this.mSet = this.mSet || this.set),
            (this.set = jm),
            (this.m = n),
            (this.mt = s),
            (this.tween = r);
        }),
        t
      );
    })();
  xt(
    Ka +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (Ua[t] = 1);
    }
  ),
    (Mt.TweenMax = Mt.TweenLite = Be),
    (Mt.TimelineLite = Mt.TimelineMax = ht),
    (xe = new ht({
      sortChildren: !1,
      defaults: Wn,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Pt.stringFilter = Bc);
  var mn = [],
    Is = {},
    Um = [],
    Qc = 0,
    Zm = 0,
    go = function (e) {
      return (Is[e] || Um).map(function (i) {
        return i();
      });
    },
    vo = function () {
      var e = Date.now(),
        i = [];
      e - Qc > 2 &&
        (go("matchMediaInit"),
        mn.forEach(function (n) {
          var r = n.queries,
            s = n.conditions,
            a,
            o,
            l,
            c;
          for (o in r)
            (a = li.matchMedia(r[o]).matches),
              a && (l = 1),
              a !== s[o] && ((s[o] = a), (c = 1));
          c && (n.revert(), l && i.push(n));
        }),
        go("matchMediaRevert"),
        i.forEach(function (n) {
          return n.onMatch(n, function (r) {
            return n.add(null, r);
          });
        }),
        (Qc = e),
        go("matchMedia"));
    },
    Kc = (function () {
      function t(i, n) {
        (this.selector = n && ro(n)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = Zm++),
          i && this.add(i);
      }
      var e = t.prototype;
      return (
        (e.add = function (n, r, s) {
          ke(n) && ((s = r), (r = n), (n = ke));
          var a = this,
            o = function () {
              var c = be,
                u = a.selector,
                d;
              return (
                c && c !== a && c.data.push(a),
                s && (a.selector = ro(s)),
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
            n === ke
              ? o(a, function (l) {
                  return a.add(null, l);
                })
              : n
              ? (a[n] = o)
              : o
          );
        }),
        (e.ignore = function (n) {
          var r = be;
          (be = null), n(this), (be = r);
        }),
        (e.getTweens = function () {
          var n = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof t
                ? n.push.apply(n, r.getTweens())
                : r instanceof Be &&
                    !(r.parent && r.parent.data === "nested") &&
                    n.push(r);
            }),
            n
          );
        }),
        (e.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (e.kill = function (n, r) {
          var s = this;
          if (
            (n
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
                        return u.t.revert(n);
                      }),
                      l = s.data.length;
                    l--;

                  )
                    (c = s.data[l]),
                      c instanceof ht
                        ? c.data !== "nested" &&
                          (c.scrollTrigger && c.scrollTrigger.revert(),
                          c.kill())
                        : !(c instanceof Be) && c.revert && c.revert(n);
                  s._r.forEach(function (u) {
                    return u(n, s);
                  }),
                    (s.isReverted = !0);
                })()
              : this.data.forEach(function (o) {
                  return o.kill && o.kill();
                }),
            this.clear(),
            r)
          )
            for (var a = mn.length; a--; )
              mn[a].id === this.id && mn.splice(a, 1);
        }),
        (e.revert = function (n) {
          this.kill(n || {});
        }),
        t
      );
    })(),
    Qm = (function () {
      function t(i) {
        (this.contexts = []), (this.scope = i), be && be.data.push(this);
      }
      var e = t.prototype;
      return (
        (e.add = function (n, r, s) {
          oi(n) || (n = { matches: n });
          var a = new Kc(0, s || this.scope),
            o = (a.conditions = {}),
            l,
            c,
            u;
          be && !a.selector && (a.selector = be.selector),
            this.contexts.push(a),
            (r = a.add("onMatch", r)),
            (a.queries = n);
          for (c in n)
            c === "all"
              ? (u = 1)
              : ((l = li.matchMedia(n[c])),
                l &&
                  (mn.indexOf(a) < 0 && mn.push(a),
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
        (e.revert = function (n) {
          this.kill(n || {});
        }),
        (e.kill = function (n) {
          this.contexts.forEach(function (r) {
            return r.kill(n, !0);
          });
        }),
        t
      );
    })(),
    Ds = {
      registerPlugin: function () {
        for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++)
          i[n] = arguments[n];
        i.forEach(function (r) {
          return Ic(r);
        });
      },
      timeline: function (e) {
        return new ht(e);
      },
      getTweensOf: function (e, i) {
        return xe.getTweensOf(e, i);
      },
      getProperty: function (e, i, n, r) {
        We(e) && (e = qt(e)[0]);
        var s = dn(e || {}).get,
          a = n ? yc : vc;
        return (
          n === "native" && (n = ""),
          e &&
            (i
              ? a((($t[i] && $t[i].get) || s)(e, i, n, r))
              : function (o, l, c) {
                  return a((($t[o] && $t[o].get) || s)(e, o, l, c));
                })
        );
      },
      quickSetter: function (e, i, n) {
        if (((e = qt(e)), e.length > 1)) {
          var r = e.map(function (u) {
              return Tt.quickSetter(u, i, n);
            }),
            s = r.length;
          return function (u) {
            for (var d = s; d--; ) r[d](u);
          };
        }
        e = e[0] || {};
        var a = $t[i],
          o = dn(e),
          l = (o.harness && (o.harness.aliases || {})[i]) || i,
          c = a
            ? function (u) {
                var d = new a();
                (Qn._pt = 0),
                  d.init(e, n ? u + n : u, Qn, 0, [e]),
                  d.render(1, d),
                  Qn._pt && mo(1, Qn);
              }
            : o.set(e, l);
        return a
          ? c
          : function (u) {
              return c(e, l, n ? u + n : u, o, 1);
            };
      },
      quickTo: function (e, i, n) {
        var r,
          s = Tt.to(
            e,
            Ot(
              ((r = {}), (r[i] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
              n || {}
            )
          ),
          a = function (l, c, u) {
            return s.resetTo(i, l, c, u);
          };
        return (a.tween = s), a;
      },
      isTweening: function (e) {
        return xe.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = hn(e.ease, Wn.ease)), bc(Wn, e || {});
      },
      config: function (e) {
        return bc(Pt, e || {});
      },
      registerEffect: function (e) {
        var i = e.name,
          n = e.effect,
          r = e.plugins,
          s = e.defaults,
          a = e.extendTimeline;
        (r || "").split(",").forEach(function (o) {
          return (
            o &&
            !$t[o] &&
            !Mt[o] &&
            Mr(i + " effect requires " + o + " plugin.")
          );
        }),
          (Qa[i] = function (o, l, c) {
            return n(qt(o), Ot(l || {}, s), c);
          }),
          a &&
            (ht.prototype[i] = function (o, l, c) {
              return this.add(Qa[i](o, oi(l) ? l : (c = l) && {}, this), c);
            });
      },
      registerEase: function (e, i) {
        Qe[e] = hn(i);
      },
      parseEase: function (e, i) {
        return arguments.length ? hn(e, i) : Qe;
      },
      getById: function (e) {
        return xe.getById(e);
      },
      exportRoot: function (e, i) {
        e === void 0 && (e = {});
        var n = new ht(e),
          r,
          s;
        for (
          n.smoothChildTiming = wt(e.smoothChildTiming),
            xe.remove(n),
            n._dp = 0,
            n._time = n._tTime = xe._time,
            r = xe._first;
          r;

        )
          (s = r._next),
            (i ||
              !(
                !r._dur &&
                r instanceof Be &&
                r.vars.onComplete === r._targets[0]
              )) &&
              ci(n, r, r._start - r._delay),
            (r = s);
        return ci(xe, n, 0), n;
      },
      context: function (e, i) {
        return e ? new Kc(e, i) : be;
      },
      matchMedia: function (e) {
        return new Qm(e);
      },
      matchMediaRefresh: function () {
        return (
          mn.forEach(function (e) {
            var i = e.conditions,
              n,
              r;
            for (r in i) i[r] && ((i[r] = !1), (n = 1));
            n && e.revert();
          }) || vo()
        );
      },
      addEventListener: function (e, i) {
        var n = Is[e] || (Is[e] = []);
        ~n.indexOf(i) || n.push(i);
      },
      removeEventListener: function (e, i) {
        var n = Is[e],
          r = n && n.indexOf(i);
        r >= 0 && n.splice(r, 1);
      },
      utils: {
        wrap: Pm,
        wrapYoyo: Mm,
        distribute: Ac,
        random: Mc,
        snap: Pc,
        normalize: Am,
        getUnit: it,
        clamp: Tm,
        splitColor: Dc,
        toArray: qt,
        selector: ro,
        mapRange: Oc,
        pipe: Cm,
        unitize: km,
        interpolate: $m,
        shuffle: kc,
      },
      install: dc,
      effects: Qa,
      ticker: Lt,
      updateRoot: ht.updateRoot,
      plugins: $t,
      globalTimeline: xe,
      core: {
        PropTween: St,
        globals: fc,
        Tween: Be,
        Timeline: ht,
        Animation: Br,
        getCache: dn,
        _removeLinkedListItem: $s,
        reverting: function () {
          return Ze;
        },
        context: function (e) {
          return e && be && (be.data.push(e), (e._ctx = be)), be;
        },
        suppressOverwrites: function (e) {
          return (Fa = e);
        },
      },
    };
  xt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (Ds[t] = Be[t]);
  }),
    Lt.add(ht.updateRoot),
    (Qn = Ds.to({}, { duration: 0 }));
  var Km = function (e, i) {
      for (var n = e._pt; n && n.p !== i && n.op !== i && n.fp !== i; )
        n = n._next;
      return n;
    },
    Jm = function (e, i) {
      var n = e._targets,
        r,
        s,
        a;
      for (r in i)
        for (s = n.length; s--; )
          (a = e._ptLookup[s][r]),
            a &&
              (a = a.d) &&
              (a._pt && (a = Km(a, r)),
              a && a.modifier && a.modifier(i[r], e, n[s], r));
    },
    yo = function (e, i) {
      return {
        name: e,
        headless: 1,
        rawVars: 1,
        init: function (r, s, a) {
          a._onInit = function (o) {
            var l, c;
            if (
              (We(s) &&
                ((l = {}),
                xt(s, function (u) {
                  return (l[u] = 1);
                }),
                (s = l)),
              i)
            ) {
              l = {};
              for (c in s) l[c] = i(s[c]);
              s = l;
            }
            Jm(o, s);
          };
        },
      };
    },
    Tt =
      Ds.registerPlugin(
        {
          name: "attr",
          init: function (e, i, n, r, s) {
            var a, o, l;
            this.tween = n;
            for (a in i)
              (l = e.getAttribute(a) || ""),
                (o = this.add(
                  e,
                  "setAttribute",
                  (l || 0) + "",
                  i[a],
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
          render: function (e, i) {
            for (var n = i._pt; n; )
              Ze ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next);
          },
        },
        {
          name: "endArray",
          headless: 1,
          init: function (e, i) {
            for (var n = i.length; n--; )
              this.add(e, n, e[n] || 0, i[n], 0, 0, 0, 0, 0, 1);
          },
        },
        yo("roundProps", so),
        yo("modifiers"),
        yo("snap", Pc)
      ) || Ds;
  (Be.version = ht.version = Tt.version = "3.13.0"), (uc = 1), Ha() && Kn();
  /*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Jc,
    qi,
    Jn,
    bo,
    gn,
    eu,
    _o,
    eg = function () {
      return typeof window < "u";
    },
    Si = {},
    vn = 180 / Math.PI,
    er = Math.PI / 180,
    tr = Math.atan2,
    tu = 1e8,
    wo = /([A-Z])/g,
    tg = /(left|right|width|margin|padding|x)/i,
    ig = /[\s,\(]\S/,
    ui = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    xo = function (e, i) {
      return i.set(i.t, i.p, Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u, i);
    },
    ng = function (e, i) {
      return i.set(
        i.t,
        i.p,
        e === 1 ? i.e : Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u,
        i
      );
    },
    rg = function (e, i) {
      return i.set(
        i.t,
        i.p,
        e ? Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u : i.b,
        i
      );
    },
    sg = function (e, i) {
      var n = i.s + i.c * e;
      i.set(i.t, i.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + i.u, i);
    },
    iu = function (e, i) {
      return i.set(i.t, i.p, e ? i.e : i.b, i);
    },
    nu = function (e, i) {
      return i.set(i.t, i.p, e !== 1 ? i.b : i.e, i);
    },
    ag = function (e, i, n) {
      return (e.style[i] = n);
    },
    og = function (e, i, n) {
      return e.style.setProperty(i, n);
    },
    lg = function (e, i, n) {
      return (e._gsap[i] = n);
    },
    cg = function (e, i, n) {
      return (e._gsap.scaleX = e._gsap.scaleY = n);
    },
    ug = function (e, i, n, r, s) {
      var a = e._gsap;
      (a.scaleX = a.scaleY = n), a.renderTransform(s, a);
    },
    dg = function (e, i, n, r, s) {
      var a = e._gsap;
      (a[i] = n), a.renderTransform(s, a);
    },
    Se = "transform",
    Et = Se + "Origin",
    fg = function t(e, i) {
      var n = this,
        r = this.target,
        s = r.style,
        a = r._gsap;
      if (e in Si && s) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = ui[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (o) {
                  return (n.tfm[o] = Ti(r, o));
                })
              : (this.tfm[e] = a.x ? a[e] : Ti(r, e)),
            e === Et && (this.tfm.zOrigin = a.zOrigin);
        else
          return ui.transform.split(",").forEach(function (o) {
            return t.call(n, o, i);
          });
        if (this.props.indexOf(Se) >= 0) return;
        a.svg &&
          ((this.svgo = r.getAttribute("data-svg-origin")),
          this.props.push(Et, i, "")),
          (e = Se);
      }
      (s || i) && this.props.push(e, i, s[e]);
    },
    ru = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    hg = function () {
      var e = this.props,
        i = this.target,
        n = i.style,
        r = i._gsap,
        s,
        a;
      for (s = 0; s < e.length; s += 3)
        e[s + 1]
          ? e[s + 1] === 2
            ? i[e[s]](e[s + 2])
            : (i[e[s]] = e[s + 2])
          : e[s + 2]
          ? (n[e[s]] = e[s + 2])
          : n.removeProperty(
              e[s].substr(0, 2) === "--"
                ? e[s]
                : e[s].replace(wo, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (a in this.tfm) r[a] = this.tfm[a];
        r.svg &&
          (r.renderTransform(),
          i.setAttribute("data-svg-origin", this.svgo || "")),
          (s = _o()),
          (!s || !s.isStart) &&
            !n[Se] &&
            (ru(n),
            r.zOrigin &&
              n[Et] &&
              ((n[Et] += " " + r.zOrigin + "px"),
              (r.zOrigin = 0),
              r.renderTransform()),
            (r.uncache = 1));
      }
    },
    su = function (e, i) {
      var n = { target: e, props: [], revert: hg, save: fg };
      return (
        e._gsap || Tt.core.getCache(e),
        i &&
          e.style &&
          e.nodeType &&
          i.split(",").forEach(function (r) {
            return n.save(r);
          }),
        n
      );
    },
    au,
    So = function (e, i) {
      var n = qi.createElementNS
        ? qi.createElementNS(
            (i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : qi.createElement(e);
      return n && n.style ? n : qi.createElement(e);
    },
    Ht = function t(e, i, n) {
      var r = getComputedStyle(e);
      return (
        r[i] ||
        r.getPropertyValue(i.replace(wo, "-$1").toLowerCase()) ||
        r.getPropertyValue(i) ||
        (!n && t(e, ir(i) || i, 1)) ||
        ""
      );
    },
    ou = "O,Moz,ms,Ms,Webkit".split(","),
    ir = function (e, i, n) {
      var r = i || gn,
        s = r.style,
        a = 5;
      if (e in s && !n) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        a-- && !(ou[a] + e in s);

      );
      return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? ou[a] : "") + e;
    },
    To = function () {
      eg() &&
        window.document &&
        ((Jc = window),
        (qi = Jc.document),
        (Jn = qi.documentElement),
        (gn = So("div") || { style: {} }),
        So("div"),
        (Se = ir(Se)),
        (Et = Se + "Origin"),
        (gn.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (au = !!ir("perspective")),
        (_o = Tt.core.reverting),
        (bo = 1));
    },
    lu = function (e) {
      var i = e.ownerSVGElement,
        n = So(
          "svg",
          (i && i.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        r = e.cloneNode(!0),
        s;
      (r.style.display = "block"), n.appendChild(r), Jn.appendChild(n);
      try {
        s = r.getBBox();
      } catch {}
      return n.removeChild(r), Jn.removeChild(n), s;
    },
    cu = function (e, i) {
      for (var n = i.length; n--; )
        if (e.hasAttribute(i[n])) return e.getAttribute(i[n]);
    },
    uu = function (e) {
      var i, n;
      try {
        i = e.getBBox();
      } catch {
        (i = lu(e)), (n = 1);
      }
      return (
        (i && (i.width || i.height)) || n || (i = lu(e)),
        i && !i.width && !i.x && !i.y
          ? {
              x: +cu(e, ["x", "cx", "x1"]) || 0,
              y: +cu(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : i
      );
    },
    du = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && uu(e));
    },
    yn = function (e, i) {
      if (i) {
        var n = e.style,
          r;
        i in Si && i !== Et && (i = Se),
          n.removeProperty
            ? ((r = i.substr(0, 2)),
              (r === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i),
              n.removeProperty(
                r === "--" ? i : i.replace(wo, "-$1").toLowerCase()
              ))
            : n.removeAttribute(i);
      }
    },
    Hi = function (e, i, n, r, s, a) {
      var o = new St(e._pt, i, n, 0, 1, a ? nu : iu);
      return (e._pt = o), (o.b = r), (o.e = s), e._props.push(n), o;
    },
    fu = { deg: 1, rad: 1, turn: 1 },
    pg = { grid: 1, flex: 1 },
    Yi = function t(e, i, n, r) {
      var s = parseFloat(n) || 0,
        a = (n + "").trim().substr((s + "").length) || "px",
        o = gn.style,
        l = tg.test(i),
        c = e.tagName.toLowerCase() === "svg",
        u = (c ? "client" : "offset") + (l ? "Width" : "Height"),
        d = 100,
        f = r === "px",
        h = r === "%",
        m,
        p,
        g,
        b;
      if (r === a || !s || fu[r] || fu[a]) return s;
      if (
        (a !== "px" && !f && (s = t(e, i, n, "px")),
        (b = e.getCTM && du(e)),
        (h || a === "%") && (Si[i] || ~i.indexOf("adius")))
      )
        return (
          (m = b ? e.getBBox()[l ? "width" : "height"] : e[u]),
          Pe(h ? (s / m) * d : (s / 100) * m)
        );
      if (
        ((o[l ? "width" : "height"] = d + (f ? a : r)),
        (p =
          (r !== "rem" && ~i.indexOf("adius")) ||
          (r === "em" && e.appendChild && !c)
            ? e
            : e.parentNode),
        b && (p = (e.ownerSVGElement || {}).parentNode),
        (!p || p === qi || !p.appendChild) && (p = qi.body),
        (g = p._gsap),
        g && h && g.width && l && g.time === Lt.time && !g.uncache)
      )
        return Pe((s / g.width) * d);
      if (h && (i === "height" || i === "width")) {
        var v = e.style[i];
        (e.style[i] = d + r), (m = e[u]), v ? (e.style[i] = v) : yn(e, i);
      } else
        (h || a === "%") &&
          !pg[Ht(p, "display")] &&
          (o.position = Ht(e, "position")),
          p === e && (o.position = "static"),
          p.appendChild(gn),
          (m = gn[u]),
          p.removeChild(gn),
          (o.position = "absolute");
      return (
        l && h && ((g = dn(p)), (g.time = Lt.time), (g.width = p[u])),
        Pe(f ? (m * s) / d : m && s ? (d / m) * s : 0)
      );
    },
    Ti = function (e, i, n, r) {
      var s;
      return (
        bo || To(),
        i in ui &&
          i !== "transform" &&
          ((i = ui[i]), ~i.indexOf(",") && (i = i.split(",")[0])),
        Si[i] && i !== "transform"
          ? ((s = qr(e, r)),
            (s =
              i !== "transformOrigin"
                ? s[i]
                : s.svg
                ? s.origin
                : Ns(Ht(e, Et)) + " " + s.zOrigin + "px"))
          : ((s = e.style[i]),
            (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) &&
              (s =
                (Rs[i] && Rs[i](e, i, n)) ||
                Ht(e, i) ||
                mc(e, i) ||
                (i === "opacity" ? 1 : 0))),
        n && !~(s + "").trim().indexOf(" ") ? Yi(e, i, s, n) + n : s
      );
    },
    mg = function (e, i, n, r) {
      if (!n || n === "none") {
        var s = ir(i, e, 1),
          a = s && Ht(e, s, 1);
        a && a !== n
          ? ((i = s), (n = a))
          : i === "borderColor" && (n = Ht(e, "borderTopColor"));
      }
      var o = new St(this._pt, e.style, i, 0, 1, Uc),
        l = 0,
        c = 0,
        u,
        d,
        f,
        h,
        m,
        p,
        g,
        b,
        v,
        y,
        _,
        x;
      if (
        ((o.b = n),
        (o.e = r),
        (n += ""),
        (r += ""),
        r.substring(0, 6) === "var(--" &&
          (r = Ht(e, r.substring(4, r.indexOf(")")))),
        r === "auto" &&
          ((p = e.style[i]),
          (e.style[i] = r),
          (r = Ht(e, i) || r),
          p ? (e.style[i] = p) : yn(e, i)),
        (u = [n, r]),
        Bc(u),
        (n = u[0]),
        (r = u[1]),
        (f = n.match(Gn) || []),
        (x = r.match(Gn) || []),
        x.length)
      ) {
        for (; (d = Gn.exec(r)); )
          (g = d[0]),
            (v = r.substring(l, d.index)),
            m
              ? (m = (m + 1) % 5)
              : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") &&
                (m = 1),
            g !== (p = f[c++] || "") &&
              ((h = parseFloat(p) || 0),
              (_ = p.substr((h + "").length)),
              g.charAt(1) === "=" && (g = Xn(h, g) + _),
              (b = parseFloat(g)),
              (y = g.substr((b + "").length)),
              (l = Gn.lastIndex - y.length),
              y ||
                ((y = y || Pt.units[i] || _),
                l === r.length && ((r += y), (o.e += y))),
              _ !== y && (h = Yi(e, i, p, y) || 0),
              (o._pt = {
                _next: o._pt,
                p: v || c === 1 ? v : ",",
                s: h,
                c: b - h,
                m: (m && m < 4) || i === "zIndex" ? Math.round : 0,
              }));
        o.c = l < r.length ? r.substring(l, r.length) : "";
      } else o.r = i === "display" && r === "none" ? nu : iu;
      return lc.test(r) && (o.e = 0), (this._pt = o), o;
    },
    hu = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    gg = function (e) {
      var i = e.split(" "),
        n = i[0],
        r = i[1] || "50%";
      return (
        (n === "top" || n === "bottom" || r === "left" || r === "right") &&
          ((e = n), (n = r), (r = e)),
        (i[0] = hu[n] || n),
        (i[1] = hu[r] || r),
        i.join(" ")
      );
    },
    vg = function (e, i) {
      if (i.tween && i.tween._time === i.tween._dur) {
        var n = i.t,
          r = n.style,
          s = i.u,
          a = n._gsap,
          o,
          l,
          c;
        if (s === "all" || s === !0) (r.cssText = ""), (l = 1);
        else
          for (s = s.split(","), c = s.length; --c > -1; )
            (o = s[c]),
              Si[o] && ((l = 1), (o = o === "transformOrigin" ? Et : Se)),
              yn(n, o);
        l &&
          (yn(n, Se),
          a &&
            (a.svg && n.removeAttribute("transform"),
            (r.scale = r.rotate = r.translate = "none"),
            qr(n, 1),
            (a.uncache = 1),
            ru(r)));
      }
    },
    Rs = {
      clearProps: function (e, i, n, r, s) {
        if (s.data !== "isFromStart") {
          var a = (e._pt = new St(e._pt, i, n, 0, 0, vg));
          return (a.u = r), (a.pr = -10), (a.tween = s), e._props.push(n), 1;
        }
      },
    },
    Vr = [1, 0, 0, 1, 0, 0],
    pu = {},
    mu = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    gu = function (e) {
      var i = Ht(e, Se);
      return mu(i) ? Vr : i.substr(7).match(oc).map(Pe);
    },
    Eo = function (e, i) {
      var n = e._gsap || dn(e),
        r = e.style,
        s = gu(e),
        a,
        o,
        l,
        c;
      return n.svg && e.getAttribute("transform")
        ? ((l = e.transform.baseVal.consolidate().matrix),
          (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
          s.join(",") === "1,0,0,1,0,0" ? Vr : s)
        : (s === Vr &&
            !e.offsetParent &&
            e !== Jn &&
            !n.svg &&
            ((l = r.display),
            (r.display = "block"),
            (a = e.parentNode),
            (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((c = 1), (o = e.nextElementSibling), Jn.appendChild(e)),
            (s = gu(e)),
            l ? (r.display = l) : yn(e, "display"),
            c &&
              (o
                ? a.insertBefore(e, o)
                : a
                ? a.appendChild(e)
                : Jn.removeChild(e))),
          i && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    Co = function (e, i, n, r, s, a) {
      var o = e._gsap,
        l = s || Eo(e, !0),
        c = o.xOrigin || 0,
        u = o.yOrigin || 0,
        d = o.xOffset || 0,
        f = o.yOffset || 0,
        h = l[0],
        m = l[1],
        p = l[2],
        g = l[3],
        b = l[4],
        v = l[5],
        y = i.split(" "),
        _ = parseFloat(y[0]) || 0,
        x = parseFloat(y[1]) || 0,
        T,
        E,
        C,
        $;
      n
        ? l !== Vr &&
          (E = h * g - m * p) &&
          ((C = _ * (g / E) + x * (-p / E) + (p * v - g * b) / E),
          ($ = _ * (-m / E) + x * (h / E) - (h * v - m * b) / E),
          (_ = C),
          (x = $))
        : ((T = uu(e)),
          (_ = T.x + (~y[0].indexOf("%") ? (_ / 100) * T.width : _)),
          (x =
            T.y + (~(y[1] || y[0]).indexOf("%") ? (x / 100) * T.height : x))),
        r || (r !== !1 && o.smooth)
          ? ((b = _ - c),
            (v = x - u),
            (o.xOffset = d + (b * h + v * p) - b),
            (o.yOffset = f + (b * m + v * g) - v))
          : (o.xOffset = o.yOffset = 0),
        (o.xOrigin = _),
        (o.yOrigin = x),
        (o.smooth = !!r),
        (o.origin = i),
        (o.originIsAbsolute = !!n),
        (e.style[Et] = "0px 0px"),
        a &&
          (Hi(a, o, "xOrigin", c, _),
          Hi(a, o, "yOrigin", u, x),
          Hi(a, o, "xOffset", d, o.xOffset),
          Hi(a, o, "yOffset", f, o.yOffset)),
        e.setAttribute("data-svg-origin", _ + " " + x);
    },
    qr = function (e, i) {
      var n = e._gsap || new Hc(e);
      if ("x" in n && !i && !n.uncache) return n;
      var r = e.style,
        s = n.scaleX < 0,
        a = "px",
        o = "deg",
        l = getComputedStyle(e),
        c = Ht(e, Et) || "0",
        u,
        d,
        f,
        h,
        m,
        p,
        g,
        b,
        v,
        y,
        _,
        x,
        T,
        E,
        C,
        $,
        k,
        M,
        w,
        S,
        O,
        z,
        A,
        L,
        I,
        B,
        P,
        q,
        G,
        oe,
        ne,
        Z;
      return (
        (u = d = f = p = g = b = v = y = _ = 0),
        (h = m = 1),
        (n.svg = !!(e.getCTM && du(e))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (r[Se] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[Se] !== "none" ? l[Se] : "")),
          (r.scale = r.rotate = r.translate = "none")),
        (E = Eo(e, n.svg)),
        n.svg &&
          (n.uncache
            ? ((I = e.getBBox()),
              (c = n.xOrigin - I.x + "px " + (n.yOrigin - I.y) + "px"),
              (L = ""))
            : (L = !i && e.getAttribute("data-svg-origin")),
          Co(e, L || c, !!L || n.originIsAbsolute, n.smooth !== !1, E)),
        (x = n.xOrigin || 0),
        (T = n.yOrigin || 0),
        E !== Vr &&
          ((M = E[0]),
          (w = E[1]),
          (S = E[2]),
          (O = E[3]),
          (u = z = E[4]),
          (d = A = E[5]),
          E.length === 6
            ? ((h = Math.sqrt(M * M + w * w)),
              (m = Math.sqrt(O * O + S * S)),
              (p = M || w ? tr(w, M) * vn : 0),
              (v = S || O ? tr(S, O) * vn + p : 0),
              v && (m *= Math.abs(Math.cos(v * er))),
              n.svg && ((u -= x - (x * M + T * S)), (d -= T - (x * w + T * O))))
            : ((Z = E[6]),
              (oe = E[7]),
              (P = E[8]),
              (q = E[9]),
              (G = E[10]),
              (ne = E[11]),
              (u = E[12]),
              (d = E[13]),
              (f = E[14]),
              (C = tr(Z, G)),
              (g = C * vn),
              C &&
                (($ = Math.cos(-C)),
                (k = Math.sin(-C)),
                (L = z * $ + P * k),
                (I = A * $ + q * k),
                (B = Z * $ + G * k),
                (P = z * -k + P * $),
                (q = A * -k + q * $),
                (G = Z * -k + G * $),
                (ne = oe * -k + ne * $),
                (z = L),
                (A = I),
                (Z = B)),
              (C = tr(-S, G)),
              (b = C * vn),
              C &&
                (($ = Math.cos(-C)),
                (k = Math.sin(-C)),
                (L = M * $ - P * k),
                (I = w * $ - q * k),
                (B = S * $ - G * k),
                (ne = O * k + ne * $),
                (M = L),
                (w = I),
                (S = B)),
              (C = tr(w, M)),
              (p = C * vn),
              C &&
                (($ = Math.cos(C)),
                (k = Math.sin(C)),
                (L = M * $ + w * k),
                (I = z * $ + A * k),
                (w = w * $ - M * k),
                (A = A * $ - z * k),
                (M = L),
                (z = I)),
              g &&
                Math.abs(g) + Math.abs(p) > 359.9 &&
                ((g = p = 0), (b = 180 - b)),
              (h = Pe(Math.sqrt(M * M + w * w + S * S))),
              (m = Pe(Math.sqrt(A * A + Z * Z))),
              (C = tr(z, A)),
              (v = Math.abs(C) > 2e-4 ? C * vn : 0),
              (_ = ne ? 1 / (ne < 0 ? -ne : ne) : 0)),
          n.svg &&
            ((L = e.getAttribute("transform")),
            (n.forceCSS = e.setAttribute("transform", "") || !mu(Ht(e, Se))),
            L && e.setAttribute("transform", L))),
        Math.abs(v) > 90 &&
          Math.abs(v) < 270 &&
          (s
            ? ((h *= -1),
              (v += p <= 0 ? 180 : -180),
              (p += p <= 0 ? 180 : -180))
            : ((m *= -1), (v += v <= 0 ? 180 : -180))),
        (i = i || n.uncache),
        (n.x =
          u -
          ((n.xPercent =
            u &&
            ((!i && n.xPercent) ||
              (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
            ? (e.offsetWidth * n.xPercent) / 100
            : 0) +
          a),
        (n.y =
          d -
          ((n.yPercent =
            d &&
            ((!i && n.yPercent) ||
              (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
            ? (e.offsetHeight * n.yPercent) / 100
            : 0) +
          a),
        (n.z = f + a),
        (n.scaleX = Pe(h)),
        (n.scaleY = Pe(m)),
        (n.rotation = Pe(p) + o),
        (n.rotationX = Pe(g) + o),
        (n.rotationY = Pe(b) + o),
        (n.skewX = v + o),
        (n.skewY = y + o),
        (n.transformPerspective = _ + a),
        (n.zOrigin = parseFloat(c.split(" ")[2]) || (!i && n.zOrigin) || 0) &&
          (r[Et] = Ns(c)),
        (n.xOffset = n.yOffset = 0),
        (n.force3D = Pt.force3D),
        (n.renderTransform = n.svg ? bg : au ? vu : yg),
        (n.uncache = 0),
        n
      );
    },
    Ns = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    ko = function (e, i, n) {
      var r = it(i);
      return Pe(parseFloat(i) + parseFloat(Yi(e, "x", n + "px", r))) + r;
    },
    yg = function (e, i) {
      (i.z = "0px"),
        (i.rotationY = i.rotationX = "0deg"),
        (i.force3D = 0),
        vu(e, i);
    },
    bn = "0deg",
    Hr = "0px",
    _n = ") ",
    vu = function (e, i) {
      var n = i || this,
        r = n.xPercent,
        s = n.yPercent,
        a = n.x,
        o = n.y,
        l = n.z,
        c = n.rotation,
        u = n.rotationY,
        d = n.rotationX,
        f = n.skewX,
        h = n.skewY,
        m = n.scaleX,
        p = n.scaleY,
        g = n.transformPerspective,
        b = n.force3D,
        v = n.target,
        y = n.zOrigin,
        _ = "",
        x = (b === "auto" && e && e !== 1) || b === !0;
      if (y && (d !== bn || u !== bn)) {
        var T = parseFloat(u) * er,
          E = Math.sin(T),
          C = Math.cos(T),
          $;
        (T = parseFloat(d) * er),
          ($ = Math.cos(T)),
          (a = ko(v, a, E * $ * -y)),
          (o = ko(v, o, -Math.sin(T) * -y)),
          (l = ko(v, l, C * $ * -y + y));
      }
      g !== Hr && (_ += "perspective(" + g + _n),
        (r || s) && (_ += "translate(" + r + "%, " + s + "%) "),
        (x || a !== Hr || o !== Hr || l !== Hr) &&
          (_ +=
            l !== Hr || x
              ? "translate3d(" + a + ", " + o + ", " + l + ") "
              : "translate(" + a + ", " + o + _n),
        c !== bn && (_ += "rotate(" + c + _n),
        u !== bn && (_ += "rotateY(" + u + _n),
        d !== bn && (_ += "rotateX(" + d + _n),
        (f !== bn || h !== bn) && (_ += "skew(" + f + ", " + h + _n),
        (m !== 1 || p !== 1) && (_ += "scale(" + m + ", " + p + _n),
        (v.style[Se] = _ || "translate(0, 0)");
    },
    bg = function (e, i) {
      var n = i || this,
        r = n.xPercent,
        s = n.yPercent,
        a = n.x,
        o = n.y,
        l = n.rotation,
        c = n.skewX,
        u = n.skewY,
        d = n.scaleX,
        f = n.scaleY,
        h = n.target,
        m = n.xOrigin,
        p = n.yOrigin,
        g = n.xOffset,
        b = n.yOffset,
        v = n.forceCSS,
        y = parseFloat(a),
        _ = parseFloat(o),
        x,
        T,
        E,
        C,
        $;
      (l = parseFloat(l)),
        (c = parseFloat(c)),
        (u = parseFloat(u)),
        u && ((u = parseFloat(u)), (c += u), (l += u)),
        l || c
          ? ((l *= er),
            (c *= er),
            (x = Math.cos(l) * d),
            (T = Math.sin(l) * d),
            (E = Math.sin(l - c) * -f),
            (C = Math.cos(l - c) * f),
            c &&
              ((u *= er),
              ($ = Math.tan(c - u)),
              ($ = Math.sqrt(1 + $ * $)),
              (E *= $),
              (C *= $),
              u &&
                (($ = Math.tan(u)),
                ($ = Math.sqrt(1 + $ * $)),
                (x *= $),
                (T *= $))),
            (x = Pe(x)),
            (T = Pe(T)),
            (E = Pe(E)),
            (C = Pe(C)))
          : ((x = d), (C = f), (T = E = 0)),
        ((y && !~(a + "").indexOf("px")) || (_ && !~(o + "").indexOf("px"))) &&
          ((y = Yi(h, "x", a, "px")), (_ = Yi(h, "y", o, "px"))),
        (m || p || g || b) &&
          ((y = Pe(y + m - (m * x + p * E) + g)),
          (_ = Pe(_ + p - (m * T + p * C) + b))),
        (r || s) &&
          (($ = h.getBBox()),
          (y = Pe(y + (r / 100) * $.width)),
          (_ = Pe(_ + (s / 100) * $.height))),
        ($ =
          "matrix(" +
          x +
          "," +
          T +
          "," +
          E +
          "," +
          C +
          "," +
          y +
          "," +
          _ +
          ")"),
        h.setAttribute("transform", $),
        v && (h.style[Se] = $);
    },
    _g = function (e, i, n, r, s) {
      var a = 360,
        o = We(s),
        l = parseFloat(s) * (o && ~s.indexOf("rad") ? vn : 1),
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
            ? (c = ((c + a * tu) % a) - ~~(c / a) * a)
            : d === "ccw" && c > 0 && (c = ((c - a * tu) % a) - ~~(c / a) * a)),
        (e._pt = f = new St(e._pt, i, n, r, c, ng)),
        (f.e = u),
        (f.u = "deg"),
        e._props.push(n),
        f
      );
    },
    yu = function (e, i) {
      for (var n in i) e[n] = i[n];
      return e;
    },
    wg = function (e, i, n) {
      var r = yu({}, n._gsap),
        s = "perspective,force3D,transformOrigin,svgOrigin",
        a = n.style,
        o,
        l,
        c,
        u,
        d,
        f,
        h,
        m;
      r.svg
        ? ((c = n.getAttribute("transform")),
          n.setAttribute("transform", ""),
          (a[Se] = i),
          (o = qr(n, 1)),
          yn(n, Se),
          n.setAttribute("transform", c))
        : ((c = getComputedStyle(n)[Se]),
          (a[Se] = i),
          (o = qr(n, 1)),
          (a[Se] = c));
      for (l in Si)
        (c = r[l]),
          (u = o[l]),
          c !== u &&
            s.indexOf(l) < 0 &&
            ((h = it(c)),
            (m = it(u)),
            (d = h !== m ? Yi(n, l, c, m) : parseFloat(c)),
            (f = parseFloat(u)),
            (e._pt = new St(e._pt, o, l, d, f - d, xo)),
            (e._pt.u = m || 0),
            e._props.push(l));
      yu(o, r);
    };
  xt("padding,margin,Width,Radius", function (t, e) {
    var i = "Top",
      n = "Right",
      r = "Bottom",
      s = "Left",
      a = (e < 3 ? [i, n, r, s] : [i + s, i + n, r + n, r + s]).map(function (
        o
      ) {
        return e < 2 ? t + o : "border" + o + t;
      });
    Rs[e > 1 ? "border" + t : t] = function (o, l, c, u, d) {
      var f, h;
      if (arguments.length < 4)
        return (
          (f = a.map(function (m) {
            return Ti(o, m, c);
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
  var bu = {
    name: "css",
    register: To,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, i, n, r, s) {
      var a = this._props,
        o = e.style,
        l = n.vars.startAt,
        c,
        u,
        d,
        f,
        h,
        m,
        p,
        g,
        b,
        v,
        y,
        _,
        x,
        T,
        E,
        C;
      bo || To(),
        (this.styles = this.styles || su(e)),
        (C = this.styles.props),
        (this.tween = n);
      for (p in i)
        if (
          p !== "autoRound" &&
          ((u = i[p]), !($t[p] && Yc(p, i, n, r, e, s)))
        ) {
          if (
            ((h = typeof u),
            (m = Rs[p]),
            h === "function" && ((u = u.call(n, r, e, s)), (h = typeof u)),
            h === "string" && ~u.indexOf("random(") && (u = Ir(u)),
            m)
          )
            m(this, e, p, u, n) && (E = 1);
          else if (p.substr(0, 2) === "--")
            (c = (getComputedStyle(e).getPropertyValue(p) + "").trim()),
              (u += ""),
              (Fi.lastIndex = 0),
              Fi.test(c) || ((g = it(c)), (b = it(u))),
              b ? g !== b && (c = Yi(e, p, c, b) + b) : g && (u += g),
              this.add(o, "setProperty", c, u, r, s, 0, 0, p),
              a.push(p),
              C.push(p, 0, o[p]);
          else if (h !== "undefined") {
            if (
              (l && p in l
                ? ((c =
                    typeof l[p] == "function" ? l[p].call(n, r, e, s) : l[p]),
                  We(c) && ~c.indexOf("random(") && (c = Ir(c)),
                  it(c + "") ||
                    c === "auto" ||
                    (c += Pt.units[p] || it(Ti(e, p)) || ""),
                  (c + "").charAt(1) === "=" && (c = Ti(e, p)))
                : (c = Ti(e, p)),
              (f = parseFloat(c)),
              (v = h === "string" && u.charAt(1) === "=" && u.substr(0, 2)),
              v && (u = u.substr(2)),
              (d = parseFloat(u)),
              p in ui &&
                (p === "autoAlpha" &&
                  (f === 1 && Ti(e, "visibility") === "hidden" && d && (f = 0),
                  C.push("visibility", 0, o.visibility),
                  Hi(
                    this,
                    o,
                    "visibility",
                    f ? "inherit" : "hidden",
                    d ? "inherit" : "hidden",
                    !d
                  )),
                p !== "scale" &&
                  p !== "transform" &&
                  ((p = ui[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
              (y = p in Si),
              y)
            ) {
              if (
                (this.styles.save(p),
                h === "string" &&
                  u.substring(0, 6) === "var(--" &&
                  ((u = Ht(e, u.substring(4, u.indexOf(")")))),
                  (d = parseFloat(u))),
                _ ||
                  ((x = e._gsap),
                  (x.renderTransform && !i.parseTransform) ||
                    qr(e, i.parseTransform),
                  (T = i.smoothOrigin !== !1 && x.smooth),
                  (_ = this._pt =
                    new St(this._pt, o, Se, 0, 1, x.renderTransform, x, 0, -1)),
                  (_.dep = 1)),
                p === "scale")
              )
                (this._pt = new St(
                  this._pt,
                  x,
                  "scaleY",
                  x.scaleY,
                  (v ? Xn(x.scaleY, v + d) : d) - x.scaleY || 0,
                  xo
                )),
                  (this._pt.u = 0),
                  a.push("scaleY", p),
                  (p += "X");
              else if (p === "transformOrigin") {
                C.push(Et, 0, o[Et]),
                  (u = gg(u)),
                  x.svg
                    ? Co(e, u, 0, T, 0, this)
                    : ((b = parseFloat(u.split(" ")[2]) || 0),
                      b !== x.zOrigin && Hi(this, x, "zOrigin", x.zOrigin, b),
                      Hi(this, o, p, Ns(c), Ns(u)));
                continue;
              } else if (p === "svgOrigin") {
                Co(e, u, 1, T, 0, this);
                continue;
              } else if (p in pu) {
                _g(this, x, p, f, v ? Xn(f, v + u) : u);
                continue;
              } else if (p === "smoothOrigin") {
                Hi(this, x, "smooth", x.smooth, u);
                continue;
              } else if (p === "force3D") {
                x[p] = u;
                continue;
              } else if (p === "transform") {
                wg(this, u, e);
                continue;
              }
            } else p in o || (p = ir(p) || p);
            if (
              y ||
              ((d || d === 0) && (f || f === 0) && !ig.test(u) && p in o)
            )
              (g = (c + "").substr((f + "").length)),
                d || (d = 0),
                (b = it(u) || (p in Pt.units ? Pt.units[p] : g)),
                g !== b && (f = Yi(e, p, c, b)),
                (this._pt = new St(
                  this._pt,
                  y ? x : o,
                  p,
                  f,
                  (v ? Xn(f, v + d) : d) - f,
                  !y && (b === "px" || p === "zIndex") && i.autoRound !== !1
                    ? sg
                    : xo
                )),
                (this._pt.u = b || 0),
                g !== b && b !== "%" && ((this._pt.b = c), (this._pt.r = rg));
            else if (p in o) mg.call(this, e, p, c, v ? v + u : u);
            else if (p in e) this.add(e, p, c || e[p], v ? v + u : u, r, s);
            else if (p !== "parseTransform") {
              ja(p, u);
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
      E && Zc(this);
    },
    render: function (e, i) {
      if (i.tween._time || !_o())
        for (var n = i._pt; n; ) n.r(e, n.d), (n = n._next);
      else i.styles.revert();
    },
    get: Ti,
    aliases: ui,
    getSetter: function (e, i, n) {
      var r = ui[i];
      return (
        r && r.indexOf(",") < 0 && (i = r),
        i in Si && i !== Et && (e._gsap.x || Ti(e, "x"))
          ? n && eu === n
            ? i === "scale"
              ? cg
              : lg
            : (eu = n || {}) && (i === "scale" ? ug : dg)
          : e.style && !qa(e.style[i])
          ? ag
          : ~i.indexOf("-")
          ? og
          : po(e, i)
      );
    },
    core: { _removeProperty: yn, _getMatrix: Eo },
  };
  (Tt.utils.checkPrefix = ir),
    (Tt.core.getStyleSaver = su),
    (function (t, e, i, n) {
      var r = xt(t + "," + e + "," + i, function (s) {
        Si[s] = 1;
      });
      xt(e, function (s) {
        (Pt.units[s] = "deg"), (pu[s] = 1);
      }),
        (ui[r[13]] = t + "," + e),
        xt(n, function (s) {
          var a = s.split(":");
          ui[a[1]] = r[a[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    xt(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        Pt.units[t] = "px";
      }
    ),
    Tt.registerPlugin(bu);
  var R = Tt.registerPlugin(bu) || Tt;
  function xg(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  function Sg(t, e, i) {
    return e && xg(t.prototype, e), t;
  }
  /*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var nt,
    Bs,
    It,
    Wi,
    Gi,
    nr,
    _u,
    wn,
    Yr,
    wu,
    Ei,
    Zt,
    xu,
    Su = function () {
      return (
        nt ||
        (typeof window < "u" && (nt = window.gsap) && nt.registerPlugin && nt)
      );
    },
    Tu = 1,
    rr = [],
    re = [],
    di = [],
    Wr = Date.now,
    Ao = function (e, i) {
      return i;
    },
    Tg = function () {
      var e = Yr.core,
        i = e.bridge || {},
        n = e._scrollers,
        r = e._proxies;
      n.push.apply(n, re),
        r.push.apply(r, di),
        (re = n),
        (di = r),
        (Ao = function (a, o) {
          return i[a](o);
        });
    },
    Xi = function (e, i) {
      return ~di.indexOf(e) && di[di.indexOf(e) + 1][i];
    },
    Gr = function (e) {
      return !!~wu.indexOf(e);
    },
    pt = function (e, i, n, r, s) {
      return e.addEventListener(i, n, { passive: r !== !1, capture: !!s });
    },
    mt = function (e, i, n, r) {
      return e.removeEventListener(i, n, !!r);
    },
    Fs = "scrollLeft",
    Vs = "scrollTop",
    Po = function () {
      return (Ei && Ei.isPressed) || re.cache++;
    },
    qs = function (e, i) {
      var n = function r(s) {
        if (s || s === 0) {
          Tu && (It.history.scrollRestoration = "manual");
          var a = Ei && Ei.isPressed;
          (s = r.v = Math.round(s) || (Ei && Ei.iOS ? 1 : 0)),
            e(s),
            (r.cacheID = re.cache),
            a && Ao("ss", s);
        } else
          (i || re.cache !== r.cacheID || Ao("ref")) &&
            ((r.cacheID = re.cache), (r.v = e()));
        return r.v + r.offset;
      };
      return (n.offset = 0), e && n;
    },
    gt = {
      s: Fs,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: qs(function (t) {
        return arguments.length
          ? It.scrollTo(t, qe.sc())
          : It.pageXOffset || Wi[Fs] || Gi[Fs] || nr[Fs] || 0;
      }),
    },
    qe = {
      s: Vs,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: gt,
      sc: qs(function (t) {
        return arguments.length
          ? It.scrollTo(gt.sc(), t)
          : It.pageYOffset || Wi[Vs] || Gi[Vs] || nr[Vs] || 0;
      }),
    },
    Ct = function (e, i) {
      return (
        ((i && i._ctx && i._ctx.selector) || nt.utils.toArray)(e)[0] ||
        (typeof e == "string" && nt.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    Eg = function (e, i) {
      for (var n = i.length; n--; )
        if (i[n] === e || i[n].contains(e)) return !0;
      return !1;
    },
    ji = function (e, i) {
      var n = i.s,
        r = i.sc;
      Gr(e) && (e = Wi.scrollingElement || Gi);
      var s = re.indexOf(e),
        a = r === qe.sc ? 1 : 2;
      !~s && (s = re.push(e) - 1), re[s + a] || pt(e, "scroll", Po);
      var o = re[s + a],
        l =
          o ||
          (re[s + a] =
            qs(Xi(e, n), !0) ||
            (Gr(e)
              ? r
              : qs(function (c) {
                  return arguments.length ? (e[n] = c) : e[n];
                })));
      return (
        (l.target = e),
        o || (l.smooth = nt.getProperty(e, "scrollBehavior") === "smooth"),
        l
      );
    },
    Mo = function (e, i, n) {
      var r = e,
        s = e,
        a = Wr(),
        o = a,
        l = i || 50,
        c = Math.max(500, l * 3),
        u = function (m, p) {
          var g = Wr();
          p || g - a > l
            ? ((s = r), (r = m), (o = a), (a = g))
            : n
            ? (r += m)
            : (r = s + ((m - s) / (g - o)) * (a - o));
        },
        d = function () {
          (s = r = n ? 0 : r), (o = a = 0);
        },
        f = function (m) {
          var p = o,
            g = s,
            b = Wr();
          return (
            (m || m === 0) && m !== r && u(m),
            a === o || b - o > c
              ? 0
              : ((r + (n ? g : -g)) / ((n ? b : a) - p)) * 1e3
          );
        };
      return { update: u, reset: d, getVelocity: f };
    },
    Xr = function (e, i) {
      return (
        i && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    Eu = function (e) {
      var i = Math.max.apply(Math, e),
        n = Math.min.apply(Math, e);
      return Math.abs(i) >= Math.abs(n) ? i : n;
    },
    Cu = function () {
      (Yr = nt.core.globals().ScrollTrigger), Yr && Yr.core && Tg();
    },
    ku = function (e) {
      return (
        (nt = e || Su()),
        !Bs &&
          nt &&
          typeof document < "u" &&
          document.body &&
          ((It = window),
          (Wi = document),
          (Gi = Wi.documentElement),
          (nr = Wi.body),
          (wu = [It, Wi, Gi, nr]),
          (xu = nt.core.context || function () {}),
          (wn = "onpointerenter" in nr ? "pointer" : "mouse"),
          (_u = Me.isTouch =
            It.matchMedia &&
            It.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in It ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (Zt = Me.eventTypes =
            (
              "ontouchstart" in Gi
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Gi
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (Tu = 0);
          }, 500),
          Cu(),
          (Bs = 1)),
        Bs
      );
    };
  (gt.op = qe), (re.cache = 0);
  var Me = (function () {
    function t(i) {
      this.init(i);
    }
    var e = t.prototype;
    return (
      (e.init = function (n) {
        Bs || ku(nt) || console.warn("Please gsap.registerPlugin(Observer)"),
          Yr || Cu();
        var r = n.tolerance,
          s = n.dragMinimum,
          a = n.type,
          o = n.target,
          l = n.lineHeight,
          c = n.debounce,
          u = n.preventDefault,
          d = n.onStop,
          f = n.onStopDelay,
          h = n.ignore,
          m = n.wheelSpeed,
          p = n.event,
          g = n.onDragStart,
          b = n.onDragEnd,
          v = n.onDrag,
          y = n.onPress,
          _ = n.onRelease,
          x = n.onRight,
          T = n.onLeft,
          E = n.onUp,
          C = n.onDown,
          $ = n.onChangeX,
          k = n.onChangeY,
          M = n.onChange,
          w = n.onToggleX,
          S = n.onToggleY,
          O = n.onHover,
          z = n.onHoverEnd,
          A = n.onMove,
          L = n.ignoreCheck,
          I = n.isNormalizer,
          B = n.onGestureStart,
          P = n.onGestureEnd,
          q = n.onWheel,
          G = n.onEnable,
          oe = n.onDisable,
          ne = n.onClick,
          Z = n.scrollSpeed,
          Q = n.capture,
          de = n.allowClicks,
          he = n.lockAxis,
          Te = n.onLockAxis;
        (this.target = o = Ct(o) || Gi),
          (this.vars = n),
          h && (h = nt.utils.toArray(h)),
          (r = r || 1e-9),
          (s = s || 0),
          (m = m || 1),
          (Z = Z || 1),
          (a = a || "wheel,touch,pointer"),
          (c = c !== !1),
          l || (l = parseFloat(It.getComputedStyle(nr).lineHeight) || 22);
        var $e,
          fe,
          Ee,
          Y,
          te,
          Oe,
          ze,
          D = this,
          Le = 0,
          Jt = 0,
          Xt = n.passive || (!u && n.passive !== !1),
          H = ji(o, gt),
          jt = ji(o, qe),
          nn = H(),
          Dn = jt(),
          je =
            ~a.indexOf("touch") &&
            !~a.indexOf("pointer") &&
            Zt[0] === "pointerdown",
          rn = Gr(o),
          Ie = o.ownerDocument || Wi,
          ei = [0, 0, 0],
          Ut = [0, 0, 0],
          $i = 0,
          ps = function () {
            return ($i = Wr());
          },
          Ve = function (U, ce) {
            return (
              ((D.event = U) && h && Eg(U.target, h)) ||
              (ce && je && U.pointerType !== "touch") ||
              (L && L(U, ce))
            );
          },
          Ea = function () {
            D._vx.reset(), D._vy.reset(), fe.pause(), d && d(D);
          },
          Oi = function () {
            var U = (D.deltaX = Eu(ei)),
              ce = (D.deltaY = Eu(Ut)),
              F = Math.abs(U) >= r,
              K = Math.abs(ce) >= r;
            M && (F || K) && M(D, U, ce, ei, Ut),
              F &&
                (x && D.deltaX > 0 && x(D),
                T && D.deltaX < 0 && T(D),
                $ && $(D),
                w && D.deltaX < 0 != Le < 0 && w(D),
                (Le = D.deltaX),
                (ei[0] = ei[1] = ei[2] = 0)),
              K &&
                (C && D.deltaY > 0 && C(D),
                E && D.deltaY < 0 && E(D),
                k && k(D),
                S && D.deltaY < 0 != Jt < 0 && S(D),
                (Jt = D.deltaY),
                (Ut[0] = Ut[1] = Ut[2] = 0)),
              (Y || Ee) &&
                (A && A(D),
                Ee && (g && Ee === 1 && g(D), v && v(D), (Ee = 0)),
                (Y = !1)),
              Oe && !(Oe = !1) && Te && Te(D),
              te && (q(D), (te = !1)),
              ($e = 0);
          },
          br = function (U, ce, F) {
            (ei[F] += U),
              (Ut[F] += ce),
              D._vx.update(U),
              D._vy.update(ce),
              c ? $e || ($e = requestAnimationFrame(Oi)) : Oi();
          },
          _r = function (U, ce) {
            he &&
              !ze &&
              ((D.axis = ze = Math.abs(U) > Math.abs(ce) ? "x" : "y"),
              (Oe = !0)),
              ze !== "y" && ((ei[2] += U), D._vx.update(U, !0)),
              ze !== "x" && ((Ut[2] += ce), D._vy.update(ce, !0)),
              c ? $e || ($e = requestAnimationFrame(Oi)) : Oi();
          },
          sn = function (U) {
            if (!Ve(U, 1)) {
              U = Xr(U, u);
              var ce = U.clientX,
                F = U.clientY,
                K = ce - D.x,
                j = F - D.y,
                J = D.isDragging;
              (D.x = ce),
                (D.y = F),
                (J ||
                  ((K || j) &&
                    (Math.abs(D.startX - ce) >= s ||
                      Math.abs(D.startY - F) >= s))) &&
                  ((Ee = J ? 2 : 1), J || (D.isDragging = !0), _r(K, j));
            }
          },
          Rn = (D.onPress = function (ee) {
            Ve(ee, 1) ||
              (ee && ee.button) ||
              ((D.axis = ze = null),
              fe.pause(),
              (D.isPressed = !0),
              (ee = Xr(ee)),
              (Le = Jt = 0),
              (D.startX = D.x = ee.clientX),
              (D.startY = D.y = ee.clientY),
              D._vx.reset(),
              D._vy.reset(),
              pt(I ? o : Ie, Zt[1], sn, Xt, !0),
              (D.deltaX = D.deltaY = 0),
              y && y(D));
          }),
          ae = (D.onRelease = function (ee) {
            if (!Ve(ee, 1)) {
              mt(I ? o : Ie, Zt[1], sn, !0);
              var U = !isNaN(D.y - D.startY),
                ce = D.isDragging,
                F =
                  ce &&
                  (Math.abs(D.x - D.startX) > 3 ||
                    Math.abs(D.y - D.startY) > 3),
                K = Xr(ee);
              !F &&
                U &&
                (D._vx.reset(),
                D._vy.reset(),
                u &&
                  de &&
                  nt.delayedCall(0.08, function () {
                    if (Wr() - $i > 300 && !ee.defaultPrevented) {
                      if (ee.target.click) ee.target.click();
                      else if (Ie.createEvent) {
                        var j = Ie.createEvent("MouseEvents");
                        j.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          It,
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
                          ee.target.dispatchEvent(j);
                      }
                    }
                  })),
                (D.isDragging = D.isGesturing = D.isPressed = !1),
                d && ce && !I && fe.restart(!0),
                Ee && Oi(),
                b && ce && b(D),
                _ && _(D, F);
            }
          }),
          Nn = function (U) {
            return (
              U.touches &&
              U.touches.length > 1 &&
              (D.isGesturing = !0) &&
              B(U, D.isDragging)
            );
          },
          ti = function () {
            return (D.isGesturing = !1) || P(D);
          },
          ii = function (U) {
            if (!Ve(U)) {
              var ce = H(),
                F = jt();
              br((ce - nn) * Z, (F - Dn) * Z, 1),
                (nn = ce),
                (Dn = F),
                d && fe.restart(!0);
            }
          },
          ni = function (U) {
            if (!Ve(U)) {
              (U = Xr(U, u)), q && (te = !0);
              var ce =
                (U.deltaMode === 1
                  ? l
                  : U.deltaMode === 2
                  ? It.innerHeight
                  : 1) * m;
              br(U.deltaX * ce, U.deltaY * ce, 0), d && !I && fe.restart(!0);
            }
          },
          Bn = function (U) {
            if (!Ve(U)) {
              var ce = U.clientX,
                F = U.clientY,
                K = ce - D.x,
                j = F - D.y;
              (D.x = ce),
                (D.y = F),
                (Y = !0),
                d && fe.restart(!0),
                (K || j) && _r(K, j);
            }
          },
          wr = function (U) {
            (D.event = U), O(D);
          },
          zi = function (U) {
            (D.event = U), z(D);
          },
          ms = function (U) {
            return Ve(U) || (Xr(U, u) && ne(D));
          };
        (fe = D._dc = nt.delayedCall(f || 0.25, Ea).pause()),
          (D.deltaX = D.deltaY = 0),
          (D._vx = Mo(0, 50, !0)),
          (D._vy = Mo(0, 50, !0)),
          (D.scrollX = H),
          (D.scrollY = jt),
          (D.isDragging = D.isGesturing = D.isPressed = !1),
          xu(this),
          (D.enable = function (ee) {
            return (
              D.isEnabled ||
                (pt(rn ? Ie : o, "scroll", Po),
                a.indexOf("scroll") >= 0 &&
                  pt(rn ? Ie : o, "scroll", ii, Xt, Q),
                a.indexOf("wheel") >= 0 && pt(o, "wheel", ni, Xt, Q),
                ((a.indexOf("touch") >= 0 && _u) ||
                  a.indexOf("pointer") >= 0) &&
                  (pt(o, Zt[0], Rn, Xt, Q),
                  pt(Ie, Zt[2], ae),
                  pt(Ie, Zt[3], ae),
                  de && pt(o, "click", ps, !0, !0),
                  ne && pt(o, "click", ms),
                  B && pt(Ie, "gesturestart", Nn),
                  P && pt(Ie, "gestureend", ti),
                  O && pt(o, wn + "enter", wr),
                  z && pt(o, wn + "leave", zi),
                  A && pt(o, wn + "move", Bn)),
                (D.isEnabled = !0),
                (D.isDragging = D.isGesturing = D.isPressed = Y = Ee = !1),
                D._vx.reset(),
                D._vy.reset(),
                (nn = H()),
                (Dn = jt()),
                ee && ee.type && Rn(ee),
                G && G(D)),
              D
            );
          }),
          (D.disable = function () {
            D.isEnabled &&
              (rr.filter(function (ee) {
                return ee !== D && Gr(ee.target);
              }).length || mt(rn ? Ie : o, "scroll", Po),
              D.isPressed &&
                (D._vx.reset(), D._vy.reset(), mt(I ? o : Ie, Zt[1], sn, !0)),
              mt(rn ? Ie : o, "scroll", ii, Q),
              mt(o, "wheel", ni, Q),
              mt(o, Zt[0], Rn, Q),
              mt(Ie, Zt[2], ae),
              mt(Ie, Zt[3], ae),
              mt(o, "click", ps, !0),
              mt(o, "click", ms),
              mt(Ie, "gesturestart", Nn),
              mt(Ie, "gestureend", ti),
              mt(o, wn + "enter", wr),
              mt(o, wn + "leave", zi),
              mt(o, wn + "move", Bn),
              (D.isEnabled = D.isPressed = D.isDragging = !1),
              oe && oe(D));
          }),
          (D.kill = D.revert =
            function () {
              D.disable();
              var ee = rr.indexOf(D);
              ee >= 0 && rr.splice(ee, 1), Ei === D && (Ei = 0);
            }),
          rr.push(D),
          I && Gr(o) && (Ei = D),
          D.enable(p);
      }),
      Sg(t, [
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
  (Me.version = "3.13.0"),
    (Me.create = function (t) {
      return new Me(t);
    }),
    (Me.register = ku),
    (Me.getAll = function () {
      return rr.slice();
    }),
    (Me.getById = function (t) {
      return rr.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    Su() && nt.registerPlugin(Me);
  /*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var V,
    sr,
    se,
    ve,
    Dt,
    ue,
    $o,
    Hs,
    jr,
    Ur,
    Zr,
    Ys,
    rt,
    Ws,
    Oo,
    vt,
    Au,
    Pu,
    ar,
    Mu,
    zo,
    $u,
    yt,
    Lo,
    Ou,
    zu,
    Ui,
    Io,
    Do,
    or,
    Ro,
    Gs,
    No,
    Bo,
    Xs = 1,
    st = Date.now,
    Fo = st(),
    Yt = 0,
    Qr = 0,
    Lu = function (e, i, n) {
      var r = Rt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (n["_" + i + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
    },
    Iu = function (e, i) {
      return i && (!Rt(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    Cg = function t() {
      return Qr && requestAnimationFrame(t);
    },
    Du = function () {
      return (Ws = 1);
    },
    Ru = function () {
      return (Ws = 0);
    },
    fi = function (e) {
      return e;
    },
    Kr = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Nu = function () {
      return typeof window < "u";
    },
    Bu = function () {
      return V || (Nu() && (V = window.gsap) && V.registerPlugin && V);
    },
    xn = function (e) {
      return !!~$o.indexOf(e);
    },
    Fu = function (e) {
      return (
        (e === "Height" ? Ro : se["inner" + e]) ||
        Dt["client" + e] ||
        ue["client" + e]
      );
    },
    Vu = function (e) {
      return (
        Xi(e, "getBoundingClientRect") ||
        (xn(e)
          ? function () {
              return (aa.width = se.innerWidth), (aa.height = Ro), aa;
            }
          : function () {
              return Ci(e);
            })
      );
    },
    kg = function (e, i, n) {
      var r = n.d,
        s = n.d2,
        a = n.a;
      return (a = Xi(e, "getBoundingClientRect"))
        ? function () {
            return a()[r];
          }
        : function () {
            return (i ? Fu(s) : e["client" + s]) || 0;
          };
    },
    Ag = function (e, i) {
      return !i || ~di.indexOf(e)
        ? Vu(e)
        : function () {
            return aa;
          };
    },
    hi = function (e, i) {
      var n = i.s,
        r = i.d2,
        s = i.d,
        a = i.a;
      return Math.max(
        0,
        (n = "scroll" + r) && (a = Xi(e, n))
          ? a() - Vu(e)()[s]
          : xn(e)
          ? (Dt[n] || ue[n]) - Fu(r)
          : e[n] - e["offset" + r]
      );
    },
    js = function (e, i) {
      for (var n = 0; n < ar.length; n += 3)
        (!i || ~i.indexOf(ar[n + 1])) && e(ar[n], ar[n + 1], ar[n + 2]);
    },
    Rt = function (e) {
      return typeof e == "string";
    },
    at = function (e) {
      return typeof e == "function";
    },
    Jr = function (e) {
      return typeof e == "number";
    },
    Sn = function (e) {
      return typeof e == "object";
    },
    es = function (e, i, n) {
      return e && e.progress(i ? 0 : 1) && n && e.pause();
    },
    Vo = function (e, i) {
      if (e.enabled) {
        var n = e._ctx
          ? e._ctx.add(function () {
              return i(e);
            })
          : i(e);
        n && n.totalTime && (e.callbackAnimation = n);
      }
    },
    lr = Math.abs,
    qu = "left",
    Hu = "top",
    qo = "right",
    Ho = "bottom",
    Tn = "width",
    En = "height",
    ts = "Right",
    is = "Left",
    ns = "Top",
    rs = "Bottom",
    Fe = "padding",
    Wt = "margin",
    cr = "Width",
    Yo = "Height",
    He = "px",
    Gt = function (e) {
      return se.getComputedStyle(e);
    },
    Pg = function (e) {
      var i = Gt(e).position;
      e.style.position = i === "absolute" || i === "fixed" ? i : "relative";
    },
    Yu = function (e, i) {
      for (var n in i) n in e || (e[n] = i[n]);
      return e;
    },
    Ci = function (e, i) {
      var n =
          i &&
          Gt(e)[Oo] !== "matrix(1, 0, 0, 1, 0, 0)" &&
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
      return n && n.progress(0).kill(), r;
    },
    Us = function (e, i) {
      var n = i.d2;
      return e["offset" + n] || e["client" + n] || 0;
    },
    Wu = function (e) {
      var i = [],
        n = e.labels,
        r = e.duration(),
        s;
      for (s in n) i.push(n[s] / r);
      return i;
    },
    Mg = function (e) {
      return function (i) {
        return V.utils.snap(Wu(e), i);
      };
    },
    Wo = function (e) {
      var i = V.utils.snap(e),
        n =
          Array.isArray(e) &&
          e.slice(0).sort(function (r, s) {
            return r - s;
          });
      return n
        ? function (r, s, a) {
            a === void 0 && (a = 0.001);
            var o;
            if (!s) return i(r);
            if (s > 0) {
              for (r -= a, o = 0; o < n.length; o++) if (n[o] >= r) return n[o];
              return n[o - 1];
            } else for (o = n.length, r += a; o--; ) if (n[o] <= r) return n[o];
            return n[0];
          }
        : function (r, s, a) {
            a === void 0 && (a = 0.001);
            var o = i(r);
            return !s || Math.abs(o - r) < a || o - r < 0 == s < 0
              ? o
              : i(s < 0 ? r - e : r + e);
          };
    },
    $g = function (e) {
      return function (i, n) {
        return Wo(Wu(e))(i, n.direction);
      };
    },
    Zs = function (e, i, n, r) {
      return n.split(",").forEach(function (s) {
        return e(i, s, r);
      });
    },
    Ge = function (e, i, n, r, s) {
      return e.addEventListener(i, n, { passive: !r, capture: !!s });
    },
    Xe = function (e, i, n, r) {
      return e.removeEventListener(i, n, !!r);
    },
    Qs = function (e, i, n) {
      (n = n && n.wheelHandler), n && (e(i, "wheel", n), e(i, "touchmove", n));
    },
    Gu = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Ks = { toggleActions: "play", anticipatePin: 0 },
    Js = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    ea = function (e, i) {
      if (Rt(e)) {
        var n = e.indexOf("="),
          r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
        ~n && (e.indexOf("%") > n && (r *= i / 100), (e = e.substr(0, n - 1))),
          (e =
            r +
            (e in Js
              ? Js[e] * i
              : ~e.indexOf("%")
              ? (parseFloat(e) * i) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    ta = function (e, i, n, r, s, a, o, l) {
      var c = s.startColor,
        u = s.endColor,
        d = s.fontSize,
        f = s.indent,
        h = s.fontWeight,
        m = ve.createElement("div"),
        p = xn(n) || Xi(n, "pinType") === "fixed",
        g = e.indexOf("scroller") !== -1,
        b = p ? ue : n,
        v = e.indexOf("start") !== -1,
        y = v ? c : u,
        _ =
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
        (_ += "position:" + ((g || l) && p ? "fixed;" : "absolute;")),
        (g || l || !p) &&
          (_ += (r === qe ? qo : Ho) + ":" + (a + parseFloat(f)) + "px;"),
        o &&
          (_ +=
            "box-sizing:border-box;text-align:left;width:" +
            o.offsetWidth +
            "px;"),
        (m._isStart = v),
        m.setAttribute("class", "gsap-marker-" + e + (i ? " marker-" + i : "")),
        (m.style.cssText = _),
        (m.innerText = i || i === 0 ? e + "-" + i : e),
        b.children[0] ? b.insertBefore(m, b.children[0]) : b.appendChild(m),
        (m._offset = m["offset" + r.op.d2]),
        ia(m, 0, r, v),
        m
      );
    },
    ia = function (e, i, n, r) {
      var s = { display: "block" },
        a = n[r ? "os2" : "p2"],
        o = n[r ? "p2" : "os2"];
      (e._isFlipped = r),
        (s[n.a + "Percent"] = r ? -100 : 0),
        (s[n.a] = r ? "1px" : 0),
        (s["border" + a + cr] = 1),
        (s["border" + o + cr] = 0),
        (s[n.p] = i + "px"),
        V.set(e, s);
    },
    ie = [],
    Go = {},
    ss,
    Xu = function () {
      return st() - Yt > 34 && (ss || (ss = requestAnimationFrame(ki)));
    },
    ur = function () {
      (!yt || !yt.isPressed || yt.startX > ue.clientWidth) &&
        (re.cache++,
        yt ? ss || (ss = requestAnimationFrame(ki)) : ki(),
        Yt || kn("scrollStart"),
        (Yt = st()));
    },
    Xo = function () {
      (zu = se.innerWidth), (Ou = se.innerHeight);
    },
    as = function (e) {
      re.cache++,
        (e === !0 ||
          (!rt &&
            !$u &&
            !ve.fullscreenElement &&
            !ve.webkitFullscreenElement &&
            (!Lo ||
              zu !== se.innerWidth ||
              Math.abs(se.innerHeight - Ou) > se.innerHeight * 0.25))) &&
          Hs.restart(!0);
    },
    Cn = {},
    Og = [],
    ju = function t() {
      return Xe(X, "scrollEnd", t) || Pn(!0);
    },
    kn = function (e) {
      return (
        (Cn[e] &&
          Cn[e].map(function (i) {
            return i();
          })) ||
        Og
      );
    },
    Nt = [],
    Uu = function (e) {
      for (var i = 0; i < Nt.length; i += 5)
        (!e || (Nt[i + 4] && Nt[i + 4].query === e)) &&
          ((Nt[i].style.cssText = Nt[i + 1]),
          Nt[i].getBBox && Nt[i].setAttribute("transform", Nt[i + 2] || ""),
          (Nt[i + 3].uncache = 1));
    },
    jo = function (e, i) {
      var n;
      for (vt = 0; vt < ie.length; vt++)
        (n = ie[vt]),
          n && (!i || n._ctx === i) && (e ? n.kill(1) : n.revert(!0, !0));
      (Gs = !0), i && Uu(i), i || kn("revert");
    },
    Zu = function (e, i) {
      re.cache++,
        (i || !bt) &&
          re.forEach(function (n) {
            return at(n) && n.cacheID++ && (n.rec = 0);
          }),
        Rt(e) && (se.history.scrollRestoration = Do = e);
    },
    bt,
    An = 0,
    Qu,
    zg = function () {
      if (Qu !== An) {
        var e = (Qu = An);
        requestAnimationFrame(function () {
          return e === An && Pn(!0);
        });
      }
    },
    Ku = function () {
      ue.appendChild(or),
        (Ro = (!yt && or.offsetHeight) || se.innerHeight),
        ue.removeChild(or);
    },
    Ju = function (e) {
      return jr(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (i) {
        return (i.style.display = e ? "none" : "block");
      });
    },
    Pn = function (e, i) {
      if (
        ((Dt = ve.documentElement),
        (ue = ve.body),
        ($o = [se, ve, Dt, ue]),
        Yt && !e && !Gs)
      ) {
        Ge(X, "scrollEnd", ju);
        return;
      }
      Ku(),
        (bt = X.isRefreshing = !0),
        re.forEach(function (r) {
          return at(r) && ++r.cacheID && (r.rec = r());
        });
      var n = kn("refreshInit");
      Mu && X.sort(),
        i || jo(),
        re.forEach(function (r) {
          at(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
        }),
        ie.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        (Gs = !1),
        ie.forEach(function (r) {
          if (r._subPinOffset && r.pin) {
            var s = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
              a = r.pin[s];
            r.revert(!0, 1), r.adjustPinSpacing(r.pin[s] - a), r.refresh();
          }
        }),
        (No = 1),
        Ju(!0),
        ie.forEach(function (r) {
          var s = hi(r.scroller, r._dir),
            a = r.vars.end === "max" || (r._endClamp && r.end > s),
            o = r._startClamp && r.start >= s;
          (a || o) &&
            r.setPositions(
              o ? s - 1 : r.start,
              a ? Math.max(o ? s : r.start + 1, s) : r.end,
              !0
            );
        }),
        Ju(!1),
        (No = 0),
        n.forEach(function (r) {
          return r && r.render && r.render(-1);
        }),
        re.forEach(function (r) {
          at(r) &&
            (r.smooth &&
              requestAnimationFrame(function () {
                return (r.target.style.scrollBehavior = "smooth");
              }),
            r.rec && r(r.rec));
        }),
        Zu(Do, 1),
        Hs.pause(),
        An++,
        (bt = 2),
        ki(2),
        ie.forEach(function (r) {
          return at(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (bt = X.isRefreshing = !1),
        kn("refresh");
    },
    Uo = 0,
    na = 1,
    os,
    ki = function (e) {
      if (e === 2 || (!bt && !Gs)) {
        (X.isUpdating = !0), os && os.update(0);
        var i = ie.length,
          n = st(),
          r = n - Fo >= 50,
          s = i && ie[0].scroll();
        if (
          ((na = Uo > s ? -1 : 1),
          bt || (Uo = s),
          r &&
            (Yt && !Ws && n - Yt > 200 && ((Yt = 0), kn("scrollEnd")),
            (Zr = Fo),
            (Fo = n)),
          na < 0)
        ) {
          for (vt = i; vt-- > 0; ) ie[vt] && ie[vt].update(0, r);
          na = 1;
        } else for (vt = 0; vt < i; vt++) ie[vt] && ie[vt].update(0, r);
        X.isUpdating = !1;
      }
      ss = 0;
    },
    Zo = [
      qu,
      Hu,
      Ho,
      qo,
      Wt + rs,
      Wt + ts,
      Wt + ns,
      Wt + is,
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
    ra = Zo.concat([
      Tn,
      En,
      "boxSizing",
      "max" + cr,
      "max" + Yo,
      "position",
      Wt,
      Fe,
      Fe + ns,
      Fe + ts,
      Fe + rs,
      Fe + is,
    ]),
    Lg = function (e, i, n) {
      dr(n);
      var r = e._gsap;
      if (r.spacerIsNative) dr(r.spacerState);
      else if (e._gsap.swappedIn) {
        var s = i.parentNode;
        s && (s.insertBefore(e, i), s.removeChild(i));
      }
      e._gsap.swappedIn = !1;
    },
    Qo = function (e, i, n, r) {
      if (!e._gsap.swappedIn) {
        for (var s = Zo.length, a = i.style, o = e.style, l; s--; )
          (l = Zo[s]), (a[l] = n[l]);
        (a.position = n.position === "absolute" ? "absolute" : "relative"),
          n.display === "inline" && (a.display = "inline-block"),
          (o[Ho] = o[qo] = "auto"),
          (a.flexBasis = n.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[Tn] = Us(e, gt) + He),
          (a[En] = Us(e, qe) + He),
          (a[Fe] = o[Wt] = o[Hu] = o[qu] = "0"),
          dr(r),
          (o[Tn] = o["max" + cr] = n[Tn]),
          (o[En] = o["max" + Yo] = n[En]),
          (o[Fe] = n[Fe]),
          e.parentNode !== i &&
            (e.parentNode.insertBefore(i, e), i.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    Ig = /([A-Z])/g,
    dr = function (e) {
      if (e) {
        var i = e.t.style,
          n = e.length,
          r = 0,
          s,
          a;
        for ((e.t._gsap || V.core.getCache(e.t)).uncache = 1; r < n; r += 2)
          (a = e[r + 1]),
            (s = e[r]),
            a
              ? (i[s] = a)
              : i[s] && i.removeProperty(s.replace(Ig, "-$1").toLowerCase());
      }
    },
    sa = function (e) {
      for (var i = ra.length, n = e.style, r = [], s = 0; s < i; s++)
        r.push(ra[s], n[ra[s]]);
      return (r.t = e), r;
    },
    Dg = function (e, i, n) {
      for (var r = [], s = e.length, a = n ? 8 : 0, o; a < s; a += 2)
        (o = e[a]), r.push(o, o in i ? i[o] : e[a + 1]);
      return (r.t = e.t), r;
    },
    aa = { left: 0, top: 0 },
    ed = function (e, i, n, r, s, a, o, l, c, u, d, f, h, m) {
      at(e) && (e = e(l)),
        Rt(e) &&
          e.substr(0, 3) === "max" &&
          (e = f + (e.charAt(4) === "=" ? ea("0" + e.substr(3), n) : 0));
      var p = h ? h.time() : 0,
        g,
        b,
        v;
      if ((h && h.seek(0), isNaN(e) || (e = +e), Jr(e)))
        h &&
          (e = V.utils.mapRange(
            h.scrollTrigger.start,
            h.scrollTrigger.end,
            0,
            f,
            e
          )),
          o && ia(o, n, r, !0);
      else {
        at(i) && (i = i(l));
        var y = (e || "0").split(" "),
          _,
          x,
          T,
          E;
        (v = Ct(i, l) || ue),
          (_ = Ci(v) || {}),
          (!_ || (!_.left && !_.top)) &&
            Gt(v).display === "none" &&
            ((E = v.style.display),
            (v.style.display = "block"),
            (_ = Ci(v)),
            E ? (v.style.display = E) : v.style.removeProperty("display")),
          (x = ea(y[0], _[r.d])),
          (T = ea(y[1] || "0", n)),
          (e = _[r.p] - c[r.p] - u + x + s - T),
          o && ia(o, T, r, n - T < 20 || (o._isStart && T > 20)),
          (n -= n - T);
      }
      if ((m && ((l[m] = e || -0.001), e < 0 && (e = 0)), a)) {
        var C = e + n,
          $ = a._isStart;
        (g = "scroll" + r.d2),
          ia(
            a,
            C,
            r,
            ($ && C > 20) ||
              (!$ && (d ? Math.max(ue[g], Dt[g]) : a.parentNode[g]) <= C + 1)
          ),
          d &&
            ((c = Ci(o)),
            d && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + He));
      }
      return (
        h &&
          v &&
          ((g = Ci(v)),
          h.seek(f),
          (b = Ci(v)),
          (h._caScrollDist = g[r.p] - b[r.p]),
          (e = (e / h._caScrollDist) * f)),
        h && h.seek(p),
        h ? e : Math.round(e)
      );
    },
    Rg = /(webkit|moz|length|cssText|inset)/i,
    td = function (e, i, n, r) {
      if (e.parentNode !== i) {
        var s = e.style,
          a,
          o;
        if (i === ue) {
          (e._stOrig = s.cssText), (o = Gt(e));
          for (a in o)
            !+a &&
              !Rg.test(a) &&
              o[a] &&
              typeof s[a] == "string" &&
              a !== "0" &&
              (s[a] = o[a]);
          (s.top = n), (s.left = r);
        } else s.cssText = e._stOrig;
        (V.core.getCache(e).uncache = 1), i.appendChild(e);
      }
    },
    id = function (e, i, n) {
      var r = i,
        s = r;
      return function (a) {
        var o = Math.round(e());
        return (
          o !== r &&
            o !== s &&
            Math.abs(o - r) > 3 &&
            Math.abs(o - s) > 3 &&
            ((a = o), n && n()),
          (s = r),
          (r = Math.round(a)),
          r
        );
      };
    },
    oa = function (e, i, n) {
      var r = {};
      (r[i.p] = "+=" + n), V.set(e, r);
    },
    nd = function (e, i) {
      var n = ji(e, i),
        r = "_scroll" + i.p2,
        s = function a(o, l, c, u, d) {
          var f = a.tween,
            h = l.onComplete,
            m = {};
          c = c || n();
          var p = id(n, c, function () {
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
              re.cache++, a.tween && ki();
            }),
            (l.onComplete = function () {
              (a.tween = 0), h && h.call(f);
            }),
            (f = a.tween = V.to(e, l)),
            f
          );
        };
      return (
        (e[r] = n),
        (n.wheelHandler = function () {
          return s.tween && s.tween.kill() && (s.tween = 0);
        }),
        Ge(e, "wheel", n.wheelHandler),
        X.isTouch && Ge(e, "touchmove", n.wheelHandler),
        s
      );
    },
    X = (function () {
      function t(i, n) {
        sr ||
          t.register(V) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          Io(this),
          this.init(i, n);
      }
      var e = t.prototype;
      return (
        (e.init = function (n, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !Qr)
          ) {
            this.update = this.refresh = this.kill = fi;
            return;
          }
          n = Yu(Rt(n) || Jr(n) || n.nodeType ? { trigger: n } : n, Ks);
          var s = n,
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
            b = s.onScrubComplete,
            v = s.onSnapComplete,
            y = s.once,
            _ = s.snap,
            x = s.pinReparent,
            T = s.pinSpacer,
            E = s.containerAnimation,
            C = s.fastScrollEnd,
            $ = s.preventOverlaps,
            k =
              n.horizontal || (n.containerAnimation && n.horizontal !== !1)
                ? gt
                : qe,
            M = !d && d !== 0,
            w = Ct(n.scroller || se),
            S = V.core.getCache(w),
            O = xn(w),
            z =
              ("pinType" in n
                ? n.pinType
                : Xi(w, "pinType") || (O && "fixed")) === "fixed",
            A = [n.onEnter, n.onLeave, n.onEnterBack, n.onLeaveBack],
            L = M && n.toggleActions.split(" "),
            I = "markers" in n ? n.markers : Ks.markers,
            B = O ? 0 : parseFloat(Gt(w)["border" + k.p2 + cr]) || 0,
            P = this,
            q =
              n.onRefreshInit &&
              function () {
                return n.onRefreshInit(P);
              },
            G = kg(w, O, k),
            oe = Ag(w, O),
            ne = 0,
            Z = 0,
            Q = 0,
            de = ji(w, k),
            he,
            Te,
            $e,
            fe,
            Ee,
            Y,
            te,
            Oe,
            ze,
            D,
            Le,
            Jt,
            Xt,
            H,
            jt,
            nn,
            Dn,
            je,
            rn,
            Ie,
            ei,
            Ut,
            $i,
            ps,
            Ve,
            Ea,
            Oi,
            br,
            _r,
            sn,
            Rn,
            ae,
            Nn,
            ti,
            ii,
            ni,
            Bn,
            wr,
            zi;
          if (
            ((P._startClamp = P._endClamp = !1),
            (P._dir = k),
            (g *= 45),
            (P.scroller = w),
            (P.scroll = E ? E.time.bind(E) : de),
            (fe = de()),
            (P.vars = n),
            (r = r || n.animation),
            "refreshPriority" in n &&
              ((Mu = 1), n.refreshPriority === -9999 && (os = P)),
            (S.tweenScroll = S.tweenScroll || {
              top: nd(w, qe),
              left: nd(w, gt),
            }),
            (P.tweenTo = he = S.tweenScroll[k.p]),
            (P.scrubDuration = function (F) {
              (Nn = Jr(F) && F),
                Nn
                  ? ae
                    ? ae.duration(F)
                    : (ae = V.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: Nn,
                        paused: !0,
                        onComplete: function () {
                          return b && b(P);
                        },
                      }))
                  : (ae && ae.progress(1).kill(), (ae = 0));
            }),
            r &&
              ((r.vars.lazy = !1),
              (r._initted && !P.isReverted) ||
                (r.vars.immediateRender !== !1 &&
                  n.immediateRender !== !1 &&
                  r.duration() &&
                  r.render(0, !0, !0)),
              (P.animation = r.pause()),
              (r.scrollTrigger = P),
              P.scrubDuration(d),
              (sn = 0),
              l || (l = r.vars.id)),
            _ &&
              ((!Sn(_) || _.push) && (_ = { snapTo: _ }),
              "scrollBehavior" in ue.style &&
                V.set(O ? [ue, Dt] : w, { scrollBehavior: "auto" }),
              re.forEach(function (F) {
                return (
                  at(F) &&
                  F.target === (O ? ve.scrollingElement || Dt : w) &&
                  (F.smooth = !1)
                );
              }),
              ($e = at(_.snapTo)
                ? _.snapTo
                : _.snapTo === "labels"
                ? Mg(r)
                : _.snapTo === "labelsDirectional"
                ? $g(r)
                : _.directional !== !1
                ? function (F, K) {
                    return Wo(_.snapTo)(F, st() - Z < 500 ? 0 : K.direction);
                  }
                : V.utils.snap(_.snapTo)),
              (ti = _.duration || { min: 0.1, max: 2 }),
              (ti = Sn(ti) ? Ur(ti.min, ti.max) : Ur(ti, ti)),
              (ii = V.delayedCall(_.delay || Nn / 2 || 0.1, function () {
                var F = de(),
                  K = st() - Z < 500,
                  j = he.tween;
                if (
                  (K || Math.abs(P.getVelocity()) < 10) &&
                  !j &&
                  !Ws &&
                  ne !== F
                ) {
                  var J = (F - Y) / H,
                    Ue = r && !M ? r.totalProgress() : J,
                    le = K ? 0 : ((Ue - Rn) / (st() - Zr)) * 1e3 || 0,
                    De = V.utils.clamp(-J, 1 - J, (lr(le / 2) * le) / 0.185),
                    lt = J + (_.inertia === !1 ? 0 : De),
                    Ae,
                    we,
                    ge = _,
                    ri = ge.onStart,
                    Ce = ge.onInterrupt,
                    Bt = ge.onComplete;
                  if (
                    ((Ae = $e(lt, P)),
                    Jr(Ae) || (Ae = lt),
                    (we = Math.max(0, Math.round(Y + Ae * H))),
                    F <= te && F >= Y && we !== F)
                  ) {
                    if (j && !j._initted && j.data <= lr(we - F)) return;
                    _.inertia === !1 && (De = Ae - J),
                      he(
                        we,
                        {
                          duration: ti(
                            lr(
                              (Math.max(lr(lt - Ue), lr(Ae - Ue)) * 0.185) /
                                le /
                                0.05 || 0
                            )
                          ),
                          ease: _.ease || "power3",
                          data: lr(we - F),
                          onInterrupt: function () {
                            return ii.restart(!0) && Ce && Ce(P);
                          },
                          onComplete: function () {
                            P.update(),
                              (ne = de()),
                              r &&
                                !M &&
                                (ae
                                  ? ae.resetTo(
                                      "totalProgress",
                                      Ae,
                                      r._tTime / r._tDur
                                    )
                                  : r.progress(Ae)),
                              (sn = Rn =
                                r && !M ? r.totalProgress() : P.progress),
                              v && v(P),
                              Bt && Bt(P);
                          },
                        },
                        F,
                        De * H,
                        we - F - De * H
                      ),
                      ri && ri(P, he.tween);
                  }
                } else P.isActive && ne !== F && ii.restart(!0);
              }).pause())),
            l && (Go[l] = P),
            (f = P.trigger = Ct(f || (h !== !0 && h))),
            (zi = f && f._gsap && f._gsap.stRevert),
            zi && (zi = zi(P)),
            (h = h === !0 ? f : Ct(h)),
            Rt(o) && (o = { targets: f, className: o }),
            h &&
              (m === !1 ||
                m === Wt ||
                (m =
                  !m &&
                  h.parentNode &&
                  h.parentNode.style &&
                  Gt(h.parentNode).display === "flex"
                    ? !1
                    : Fe),
              (P.pin = h),
              (Te = V.core.getCache(h)),
              Te.spacer
                ? (jt = Te.pinState)
                : (T &&
                    ((T = Ct(T)),
                    T && !T.nodeType && (T = T.current || T.nativeElement),
                    (Te.spacerIsNative = !!T),
                    T && (Te.spacerState = sa(T))),
                  (Te.spacer = je = T || ve.createElement("div")),
                  je.classList.add("pin-spacer"),
                  l && je.classList.add("pin-spacer-" + l),
                  (Te.pinState = jt = sa(h))),
              n.force3D !== !1 && V.set(h, { force3D: !0 }),
              (P.spacer = je = Te.spacer),
              (_r = Gt(h)),
              (ps = _r[m + k.os2]),
              (Ie = V.getProperty(h)),
              (ei = V.quickSetter(h, k.a, He)),
              Qo(h, je, _r),
              (Dn = sa(h))),
            I)
          ) {
            (Jt = Sn(I) ? Yu(I, Gu) : Gu),
              (D = ta("scroller-start", l, w, k, Jt, 0)),
              (Le = ta("scroller-end", l, w, k, Jt, 0, D)),
              (rn = D["offset" + k.op.d2]);
            var ms = Ct(Xi(w, "content") || w);
            (Oe = this.markerStart = ta("start", l, ms, k, Jt, rn, 0, E)),
              (ze = this.markerEnd = ta("end", l, ms, k, Jt, rn, 0, E)),
              E && (wr = V.quickSetter([Oe, ze], k.a, He)),
              !z &&
                !(di.length && Xi(w, "fixedMarkers") === !0) &&
                (Pg(O ? ue : w),
                V.set([D, Le], { force3D: !0 }),
                (Ea = V.quickSetter(D, k.a, He)),
                (br = V.quickSetter(Le, k.a, He)));
          }
          if (E) {
            var ee = E.vars.onUpdate,
              U = E.vars.onUpdateParams;
            E.eventCallback("onUpdate", function () {
              P.update(0, 0, 1), ee && ee.apply(E, U || []);
            });
          }
          if (
            ((P.previous = function () {
              return ie[ie.indexOf(P) - 1];
            }),
            (P.next = function () {
              return ie[ie.indexOf(P) + 1];
            }),
            (P.revert = function (F, K) {
              if (!K) return P.kill(!0);
              var j = F !== !1 || !P.enabled,
                J = rt;
              j !== P.isReverted &&
                (j &&
                  ((ni = Math.max(de(), P.scroll.rec || 0)),
                  (Q = P.progress),
                  (Bn = r && r.progress())),
                Oe &&
                  [Oe, ze, D, Le].forEach(function (Ue) {
                    return (Ue.style.display = j ? "none" : "block");
                  }),
                j && ((rt = P), P.update(j)),
                h &&
                  (!x || !P.isActive) &&
                  (j ? Lg(h, je, jt) : Qo(h, je, Gt(h), Ve)),
                j || P.update(j),
                (rt = J),
                (P.isReverted = j));
            }),
            (P.refresh = function (F, K, j, J) {
              if (!((rt || !P.enabled) && !K)) {
                if (h && F && Yt) {
                  Ge(t, "scrollEnd", ju);
                  return;
                }
                !bt && q && q(P),
                  (rt = P),
                  he.tween && !j && (he.tween.kill(), (he.tween = 0)),
                  ae && ae.pause(),
                  p &&
                    r &&
                    (r.revert({ kill: !1 }).invalidate(),
                    r.getChildren &&
                      r.getChildren(!0, !0, !1).forEach(function (an) {
                        return an.vars.immediateRender && an.render(0, !0, !0);
                      })),
                  P.isReverted || P.revert(!0, !0),
                  (P._subPinOffset = !1);
                var Ue = G(),
                  le = oe(),
                  De = E ? E.duration() : hi(w, k),
                  lt = H <= 0.01 || !H,
                  Ae = 0,
                  we = J || 0,
                  ge = Sn(j) ? j.end : n.end,
                  ri = n.endTrigger || f,
                  Ce = Sn(j)
                    ? j.start
                    : n.start ||
                      (n.start === 0 || !f ? 0 : h ? "0 0" : "0 100%"),
                  Bt = (P.pinnedContainer =
                    n.pinnedContainer && Ct(n.pinnedContainer, P)),
                  gi = (f && Math.max(0, ie.indexOf(P))) || 0,
                  Ke = gi,
                  Je,
                  ct,
                  Fn,
                  Ca,
                  ut,
                  Ye,
                  vi,
                  Ol,
                  rf,
                  gs,
                  yi,
                  vs,
                  ka;
                for (
                  I &&
                  Sn(j) &&
                  ((vs = V.getProperty(D, k.p)), (ka = V.getProperty(Le, k.p)));
                  Ke-- > 0;

                )
                  (Ye = ie[Ke]),
                    Ye.end || Ye.refresh(0, 1) || (rt = P),
                    (vi = Ye.pin),
                    vi &&
                      (vi === f || vi === h || vi === Bt) &&
                      !Ye.isReverted &&
                      (gs || (gs = []), gs.unshift(Ye), Ye.revert(!0, !0)),
                    Ye !== ie[Ke] && (gi--, Ke--);
                for (
                  at(Ce) && (Ce = Ce(P)),
                    Ce = Lu(Ce, "start", P),
                    Y =
                      ed(
                        Ce,
                        f,
                        Ue,
                        k,
                        de(),
                        Oe,
                        D,
                        P,
                        le,
                        B,
                        z,
                        De,
                        E,
                        P._startClamp && "_startClamp"
                      ) || (h ? -0.001 : 0),
                    at(ge) && (ge = ge(P)),
                    Rt(ge) &&
                      !ge.indexOf("+=") &&
                      (~ge.indexOf(" ")
                        ? (ge = (Rt(Ce) ? Ce.split(" ")[0] : "") + ge)
                        : ((Ae = ea(ge.substr(2), Ue)),
                          (ge = Rt(Ce)
                            ? Ce
                            : (E
                                ? V.utils.mapRange(
                                    0,
                                    E.duration(),
                                    E.scrollTrigger.start,
                                    E.scrollTrigger.end,
                                    Y
                                  )
                                : Y) + Ae),
                          (ri = f))),
                    ge = Lu(ge, "end", P),
                    te =
                      Math.max(
                        Y,
                        ed(
                          ge || (ri ? "100% 0" : De),
                          ri,
                          Ue,
                          k,
                          de() + Ae,
                          ze,
                          Le,
                          P,
                          le,
                          B,
                          z,
                          De,
                          E,
                          P._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    Ae = 0,
                    Ke = gi;
                  Ke--;

                )
                  (Ye = ie[Ke]),
                    (vi = Ye.pin),
                    vi &&
                      Ye.start - Ye._pinPush <= Y &&
                      !E &&
                      Ye.end > 0 &&
                      ((Je =
                        Ye.end -
                        (P._startClamp ? Math.max(0, Ye.start) : Ye.start)),
                      ((vi === f && Ye.start - Ye._pinPush < Y) || vi === Bt) &&
                        isNaN(Ce) &&
                        (Ae += Je * (1 - Ye.progress)),
                      vi === h && (we += Je));
                if (
                  ((Y += Ae),
                  (te += Ae),
                  P._startClamp && (P._startClamp += Ae),
                  P._endClamp &&
                    !bt &&
                    ((P._endClamp = te || -0.001),
                    (te = Math.min(te, hi(w, k)))),
                  (H = te - Y || ((Y -= 0.01) && 0.001)),
                  lt && (Q = V.utils.clamp(0, 1, V.utils.normalize(Y, te, ni))),
                  (P._pinPush = we),
                  Oe &&
                    Ae &&
                    ((Je = {}),
                    (Je[k.a] = "+=" + Ae),
                    Bt && (Je[k.p] = "-=" + de()),
                    V.set([Oe, ze], Je)),
                  h && !(No && P.end >= hi(w, k)))
                )
                  (Je = Gt(h)),
                    (Ca = k === qe),
                    (Fn = de()),
                    (Ut = parseFloat(Ie(k.a)) + we),
                    !De &&
                      te > 1 &&
                      ((yi = (O ? ve.scrollingElement || Dt : w).style),
                      (yi = {
                        style: yi,
                        value: yi["overflow" + k.a.toUpperCase()],
                      }),
                      O &&
                        Gt(ue)["overflow" + k.a.toUpperCase()] !== "scroll" &&
                        (yi.style["overflow" + k.a.toUpperCase()] = "scroll")),
                    Qo(h, je, Je),
                    (Dn = sa(h)),
                    (ct = Ci(h, !0)),
                    (Ol = z && ji(w, Ca ? gt : qe)()),
                    m
                      ? ((Ve = [m + k.os2, H + we + He]),
                        (Ve.t = je),
                        (Ke = m === Fe ? Us(h, k) + H + we : 0),
                        Ke &&
                          (Ve.push(k.d, Ke + He),
                          je.style.flexBasis !== "auto" &&
                            (je.style.flexBasis = Ke + He)),
                        dr(Ve),
                        Bt &&
                          ie.forEach(function (an) {
                            an.pin === Bt &&
                              an.vars.pinSpacing !== !1 &&
                              (an._subPinOffset = !0);
                          }),
                        z && de(ni))
                      : ((Ke = Us(h, k)),
                        Ke &&
                          je.style.flexBasis !== "auto" &&
                          (je.style.flexBasis = Ke + He)),
                    z &&
                      ((ut = {
                        top: ct.top + (Ca ? Fn - Y : Ol) + He,
                        left: ct.left + (Ca ? Ol : Fn - Y) + He,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (ut[Tn] = ut["max" + cr] = Math.ceil(ct.width) + He),
                      (ut[En] = ut["max" + Yo] = Math.ceil(ct.height) + He),
                      (ut[Wt] =
                        ut[Wt + ns] =
                        ut[Wt + ts] =
                        ut[Wt + rs] =
                        ut[Wt + is] =
                          "0"),
                      (ut[Fe] = Je[Fe]),
                      (ut[Fe + ns] = Je[Fe + ns]),
                      (ut[Fe + ts] = Je[Fe + ts]),
                      (ut[Fe + rs] = Je[Fe + rs]),
                      (ut[Fe + is] = Je[Fe + is]),
                      (nn = Dg(jt, ut, x)),
                      bt && de(0)),
                    r
                      ? ((rf = r._initted),
                        zo(1),
                        r.render(r.duration(), !0, !0),
                        ($i = Ie(k.a) - Ut + H + we),
                        (Oi = Math.abs(H - $i) > 1),
                        z && Oi && nn.splice(nn.length - 2, 2),
                        r.render(0, !0, !0),
                        rf || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        zo(0))
                      : ($i = H),
                    yi &&
                      (yi.value
                        ? (yi.style["overflow" + k.a.toUpperCase()] = yi.value)
                        : yi.style.removeProperty("overflow-" + k.a));
                else if (f && de() && !E)
                  for (ct = f.parentNode; ct && ct !== ue; )
                    ct._pinOffset &&
                      ((Y -= ct._pinOffset), (te -= ct._pinOffset)),
                      (ct = ct.parentNode);
                gs &&
                  gs.forEach(function (an) {
                    return an.revert(!1, !0);
                  }),
                  (P.start = Y),
                  (P.end = te),
                  (fe = Ee = bt ? ni : de()),
                  !E && !bt && (fe < ni && de(ni), (P.scroll.rec = 0)),
                  P.revert(!1, !0),
                  (Z = st()),
                  ii && ((ne = -1), ii.restart(!0)),
                  (rt = 0),
                  r &&
                    M &&
                    (r._initted || Bn) &&
                    r.progress() !== Bn &&
                    r.progress(Bn || 0, !0).render(r.time(), !0, !0),
                  (lt || Q !== P.progress || E || p || (r && !r._initted)) &&
                    (r &&
                      !M &&
                      (r._initted || Q || r.vars.immediateRender !== !1) &&
                      r.totalProgress(
                        E && Y < -0.001 && !Q ? V.utils.normalize(Y, te, 0) : Q,
                        !0
                      ),
                    (P.progress = lt || (fe - Y) / H === Q ? 0 : Q)),
                  h && m && (je._pinOffset = Math.round(P.progress * $i)),
                  ae && ae.invalidate(),
                  isNaN(vs) ||
                    ((vs -= V.getProperty(D, k.p)),
                    (ka -= V.getProperty(Le, k.p)),
                    oa(D, k, vs),
                    oa(Oe, k, vs - (J || 0)),
                    oa(Le, k, ka),
                    oa(ze, k, ka - (J || 0))),
                  lt && !bt && P.update(),
                  u && !bt && !Xt && ((Xt = !0), u(P), (Xt = !1));
              }
            }),
            (P.getVelocity = function () {
              return ((de() - Ee) / (st() - Zr)) * 1e3 || 0;
            }),
            (P.endAnimation = function () {
              es(P.callbackAnimation),
                r &&
                  (ae
                    ? ae.progress(1)
                    : r.paused()
                    ? M || es(r, P.direction < 0, 1)
                    : es(r, r.reversed()));
            }),
            (P.labelToScroll = function (F) {
              return (
                (r &&
                  r.labels &&
                  (Y || P.refresh() || Y) + (r.labels[F] / r.duration()) * H) ||
                0
              );
            }),
            (P.getTrailing = function (F) {
              var K = ie.indexOf(P),
                j =
                  P.direction > 0 ? ie.slice(0, K).reverse() : ie.slice(K + 1);
              return (
                Rt(F)
                  ? j.filter(function (J) {
                      return J.vars.preventOverlaps === F;
                    })
                  : j
              ).filter(function (J) {
                return P.direction > 0 ? J.end <= Y : J.start >= te;
              });
            }),
            (P.update = function (F, K, j) {
              if (!(E && !j && !F)) {
                var J = bt === !0 ? ni : P.scroll(),
                  Ue = F ? 0 : (J - Y) / H,
                  le = Ue < 0 ? 0 : Ue > 1 ? 1 : Ue || 0,
                  De = P.progress,
                  lt,
                  Ae,
                  we,
                  ge,
                  ri,
                  Ce,
                  Bt,
                  gi;
                if (
                  (K &&
                    ((Ee = fe),
                    (fe = E ? de() : J),
                    _ && ((Rn = sn), (sn = r && !M ? r.totalProgress() : le))),
                  g &&
                    h &&
                    !rt &&
                    !Xs &&
                    Yt &&
                    (!le && Y < J + ((J - Ee) / (st() - Zr)) * g
                      ? (le = 1e-4)
                      : le === 1 &&
                        te > J + ((J - Ee) / (st() - Zr)) * g &&
                        (le = 0.9999)),
                  le !== De && P.enabled)
                ) {
                  if (
                    ((lt = P.isActive = !!le && le < 1),
                    (Ae = !!De && De < 1),
                    (Ce = lt !== Ae),
                    (ri = Ce || !!le != !!De),
                    (P.direction = le > De ? 1 : -1),
                    (P.progress = le),
                    ri &&
                      !rt &&
                      ((we = le && !De ? 0 : le === 1 ? 1 : De === 1 ? 2 : 3),
                      M &&
                        ((ge =
                          (!Ce && L[we + 1] !== "none" && L[we + 1]) || L[we]),
                        (gi =
                          r &&
                          (ge === "complete" || ge === "reset" || ge in r)))),
                    $ &&
                      (Ce || gi) &&
                      (gi || d || !r) &&
                      (at($)
                        ? $(P)
                        : P.getTrailing($).forEach(function (Fn) {
                            return Fn.endAnimation();
                          })),
                    M ||
                      (ae && !rt && !Xs
                        ? (ae._dp._time - ae._start !== ae._time &&
                            ae.render(ae._dp._time - ae._start),
                          ae.resetTo
                            ? ae.resetTo(
                                "totalProgress",
                                le,
                                r._tTime / r._tDur
                              )
                            : ((ae.vars.totalProgress = le),
                              ae.invalidate().restart()))
                        : r && r.totalProgress(le, !!(rt && (Z || F)))),
                    h)
                  ) {
                    if ((F && m && (je.style[m + k.os2] = ps), !z))
                      ei(Kr(Ut + $i * le));
                    else if (ri) {
                      if (
                        ((Bt =
                          !F && le > De && te + 1 > J && J + 1 >= hi(w, k)),
                        x)
                      )
                        if (!F && (lt || Bt)) {
                          var Ke = Ci(h, !0),
                            Je = J - Y;
                          td(
                            h,
                            ue,
                            Ke.top + (k === qe ? Je : 0) + He,
                            Ke.left + (k === qe ? 0 : Je) + He
                          );
                        } else td(h, je);
                      dr(lt || Bt ? nn : Dn),
                        (Oi && le < 1 && lt) ||
                          ei(Ut + (le === 1 && !Bt ? $i : 0));
                    }
                  }
                  _ && !he.tween && !rt && !Xs && ii.restart(!0),
                    o &&
                      (Ce || (y && le && (le < 1 || !Bo))) &&
                      jr(o.targets).forEach(function (Fn) {
                        return Fn.classList[lt || y ? "add" : "remove"](
                          o.className
                        );
                      }),
                    a && !M && !F && a(P),
                    ri && !rt
                      ? (M &&
                          (gi &&
                            (ge === "complete"
                              ? r.pause().totalProgress(1)
                              : ge === "reset"
                              ? r.restart(!0).pause()
                              : ge === "restart"
                              ? r.restart(!0)
                              : r[ge]()),
                          a && a(P)),
                        (Ce || !Bo) &&
                          (c && Ce && Vo(P, c),
                          A[we] && Vo(P, A[we]),
                          y && (le === 1 ? P.kill(!1, 1) : (A[we] = 0)),
                          Ce ||
                            ((we = le === 1 ? 1 : 3), A[we] && Vo(P, A[we]))),
                        C &&
                          !lt &&
                          Math.abs(P.getVelocity()) > (Jr(C) ? C : 2500) &&
                          (es(P.callbackAnimation),
                          ae
                            ? ae.progress(1)
                            : es(r, ge === "reverse" ? 1 : !le, 1)))
                      : M && a && !rt && a(P);
                }
                if (br) {
                  var ct = E ? (J / E.duration()) * (E._caScrollDist || 0) : J;
                  Ea(ct + (D._isFlipped ? 1 : 0)), br(ct);
                }
                wr && wr((-J / E.duration()) * (E._caScrollDist || 0));
              }
            }),
            (P.enable = function (F, K) {
              P.enabled ||
                ((P.enabled = !0),
                Ge(w, "resize", as),
                O || Ge(w, "scroll", ur),
                q && Ge(t, "refreshInit", q),
                F !== !1 && ((P.progress = Q = 0), (fe = Ee = ne = de())),
                K !== !1 && P.refresh());
            }),
            (P.getTween = function (F) {
              return F && he ? he.tween : ae;
            }),
            (P.setPositions = function (F, K, j, J) {
              if (E) {
                var Ue = E.scrollTrigger,
                  le = E.duration(),
                  De = Ue.end - Ue.start;
                (F = Ue.start + (De * F) / le), (K = Ue.start + (De * K) / le);
              }
              P.refresh(
                !1,
                !1,
                {
                  start: Iu(F, j && !!P._startClamp),
                  end: Iu(K, j && !!P._endClamp),
                },
                J
              ),
                P.update();
            }),
            (P.adjustPinSpacing = function (F) {
              if (Ve && F) {
                var K = Ve.indexOf(k.d) + 1;
                (Ve[K] = parseFloat(Ve[K]) + F + He),
                  (Ve[1] = parseFloat(Ve[1]) + F + He),
                  dr(Ve);
              }
            }),
            (P.disable = function (F, K) {
              if (
                P.enabled &&
                (F !== !1 && P.revert(!0, !0),
                (P.enabled = P.isActive = !1),
                K || (ae && ae.pause()),
                (ni = 0),
                Te && (Te.uncache = 1),
                q && Xe(t, "refreshInit", q),
                ii &&
                  (ii.pause(), he.tween && he.tween.kill() && (he.tween = 0)),
                !O)
              ) {
                for (var j = ie.length; j--; )
                  if (ie[j].scroller === w && ie[j] !== P) return;
                Xe(w, "resize", as), O || Xe(w, "scroll", ur);
              }
            }),
            (P.kill = function (F, K) {
              P.disable(F, K), ae && !K && ae.kill(), l && delete Go[l];
              var j = ie.indexOf(P);
              j >= 0 && ie.splice(j, 1),
                j === vt && na > 0 && vt--,
                (j = 0),
                ie.forEach(function (J) {
                  return J.scroller === P.scroller && (j = 1);
                }),
                j || bt || (P.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  F && r.revert({ kill: !1 }),
                  K || r.kill()),
                Oe &&
                  [Oe, ze, D, Le].forEach(function (J) {
                    return J.parentNode && J.parentNode.removeChild(J);
                  }),
                os === P && (os = 0),
                h &&
                  (Te && (Te.uncache = 1),
                  (j = 0),
                  ie.forEach(function (J) {
                    return J.pin === h && j++;
                  }),
                  j || (Te.spacer = 0)),
                n.onKill && n.onKill(P);
            }),
            ie.push(P),
            P.enable(!1, !1),
            zi && zi(P),
            r && r.add && !H)
          ) {
            var ce = P.update;
            (P.update = function () {
              (P.update = ce), re.cache++, Y || te || P.refresh();
            }),
              V.delayedCall(0.01, P.update),
              (H = 0.01),
              (Y = te = 0);
          } else P.refresh();
          h && zg();
        }),
        (t.register = function (n) {
          return (
            sr ||
              ((V = n || Bu()),
              Nu() && window.document && t.enable(),
              (sr = Qr)),
            sr
          );
        }),
        (t.defaults = function (n) {
          if (n) for (var r in n) Ks[r] = n[r];
          return Ks;
        }),
        (t.disable = function (n, r) {
          (Qr = 0),
            ie.forEach(function (a) {
              return a[r ? "kill" : "disable"](n);
            }),
            Xe(se, "wheel", ur),
            Xe(ve, "scroll", ur),
            clearInterval(Ys),
            Xe(ve, "touchcancel", fi),
            Xe(ue, "touchstart", fi),
            Zs(Xe, ve, "pointerdown,touchstart,mousedown", Du),
            Zs(Xe, ve, "pointerup,touchend,mouseup", Ru),
            Hs.kill(),
            js(Xe);
          for (var s = 0; s < re.length; s += 3)
            Qs(Xe, re[s], re[s + 1]), Qs(Xe, re[s], re[s + 2]);
        }),
        (t.enable = function () {
          if (
            ((se = window),
            (ve = document),
            (Dt = ve.documentElement),
            (ue = ve.body),
            V &&
              ((jr = V.utils.toArray),
              (Ur = V.utils.clamp),
              (Io = V.core.context || fi),
              (zo = V.core.suppressOverwrites || fi),
              (Do = se.history.scrollRestoration || "auto"),
              (Uo = se.pageYOffset || 0),
              V.core.globals("ScrollTrigger", t),
              ue))
          ) {
            (Qr = 1),
              (or = document.createElement("div")),
              (or.style.height = "100vh"),
              (or.style.position = "absolute"),
              Ku(),
              Cg(),
              Me.register(V),
              (t.isTouch = Me.isTouch),
              (Ui =
                Me.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Lo = Me.isTouch === 1),
              Ge(se, "wheel", ur),
              ($o = [se, ve, Dt, ue]),
              V.matchMedia
                ? ((t.matchMedia = function (c) {
                    var u = V.matchMedia(),
                      d;
                    for (d in c) u.add(d, c[d]);
                    return u;
                  }),
                  V.addEventListener("matchMediaInit", function () {
                    return jo();
                  }),
                  V.addEventListener("matchMediaRevert", function () {
                    return Uu();
                  }),
                  V.addEventListener("matchMedia", function () {
                    Pn(0, 1), kn("matchMedia");
                  }),
                  V.matchMedia().add("(orientation: portrait)", function () {
                    return Xo(), Xo;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              Xo(),
              Ge(ve, "scroll", ur);
            var n = ue.hasAttribute("style"),
              r = ue.style,
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
                o = Ci(ue),
                qe.m = Math.round(o.top + qe.sc()) || 0,
                gt.m = Math.round(o.left + gt.sc()) || 0,
                s
                  ? (r.borderTopStyle = s)
                  : r.removeProperty("border-top-style"),
                n ||
                  (ue.setAttribute("style", ""), ue.removeAttribute("style")),
                Ys = setInterval(Xu, 250),
                V.delayedCall(0.5, function () {
                  return (Xs = 0);
                }),
                Ge(ve, "touchcancel", fi),
                Ge(ue, "touchstart", fi),
                Zs(Ge, ve, "pointerdown,touchstart,mousedown", Du),
                Zs(Ge, ve, "pointerup,touchend,mouseup", Ru),
                Oo = V.utils.checkPrefix("transform"),
                ra.push(Oo),
                sr = st(),
                Hs = V.delayedCall(0.2, Pn).pause(),
                ar = [
                  ve,
                  "visibilitychange",
                  function () {
                    var c = se.innerWidth,
                      u = se.innerHeight;
                    ve.hidden
                      ? ((Au = c), (Pu = u))
                      : (Au !== c || Pu !== u) && as();
                  },
                  ve,
                  "DOMContentLoaded",
                  Pn,
                  se,
                  "load",
                  Pn,
                  se,
                  "resize",
                  as,
                ],
                js(Ge),
                ie.forEach(function (c) {
                  return c.enable(0, 1);
                }),
                l = 0;
              l < re.length;
              l += 3
            )
              Qs(Xe, re[l], re[l + 1]), Qs(Xe, re[l], re[l + 2]);
          }
        }),
        (t.config = function (n) {
          "limitCallbacks" in n && (Bo = !!n.limitCallbacks);
          var r = n.syncInterval;
          (r && clearInterval(Ys)) || ((Ys = r) && setInterval(Xu, r)),
            "ignoreMobileResize" in n &&
              (Lo = t.isTouch === 1 && n.ignoreMobileResize),
            "autoRefreshEvents" in n &&
              (js(Xe) || js(Ge, n.autoRefreshEvents || "none"),
              ($u = (n.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (t.scrollerProxy = function (n, r) {
          var s = Ct(n),
            a = re.indexOf(s),
            o = xn(s);
          ~a && re.splice(a, o ? 6 : 2),
            r && (o ? di.unshift(se, r, ue, r, Dt, r) : di.unshift(s, r));
        }),
        (t.clearMatchMedia = function (n) {
          ie.forEach(function (r) {
            return r._ctx && r._ctx.query === n && r._ctx.kill(!0, !0);
          });
        }),
        (t.isInViewport = function (n, r, s) {
          var a = (Rt(n) ? Ct(n) : n).getBoundingClientRect(),
            o = a[s ? Tn : En] * r || 0;
          return s
            ? a.right - o > 0 && a.left + o < se.innerWidth
            : a.bottom - o > 0 && a.top + o < se.innerHeight;
        }),
        (t.positionInViewport = function (n, r, s) {
          Rt(n) && (n = Ct(n));
          var a = n.getBoundingClientRect(),
            o = a[s ? Tn : En],
            l =
              r == null
                ? o / 2
                : r in Js
                ? Js[r] * o
                : ~r.indexOf("%")
                ? (parseFloat(r) * o) / 100
                : parseFloat(r) || 0;
          return s
            ? (a.left + l) / se.innerWidth
            : (a.top + l) / se.innerHeight;
        }),
        (t.killAll = function (n) {
          if (
            (ie.slice(0).forEach(function (s) {
              return s.vars.id !== "ScrollSmoother" && s.kill();
            }),
            n !== !0)
          ) {
            var r = Cn.killAll || [];
            (Cn = {}),
              r.forEach(function (s) {
                return s();
              });
          }
        }),
        t
      );
    })();
  (X.version = "3.13.0"),
    (X.saveStyles = function (t) {
      return t
        ? jr(t).forEach(function (e) {
            if (e && e.style) {
              var i = Nt.indexOf(e);
              i >= 0 && Nt.splice(i, 5),
                Nt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  V.core.getCache(e),
                  Io()
                );
            }
          })
        : Nt;
    }),
    (X.revert = function (t, e) {
      return jo(!t, e);
    }),
    (X.create = function (t, e) {
      return new X(t, e);
    }),
    (X.refresh = function (t) {
      return t ? as(!0) : (sr || X.register()) && Pn(!0);
    }),
    (X.update = function (t) {
      return ++re.cache && ki(t === !0 ? 2 : 0);
    }),
    (X.clearScrollMemory = Zu),
    (X.maxScroll = function (t, e) {
      return hi(t, e ? gt : qe);
    }),
    (X.getScrollFunc = function (t, e) {
      return ji(Ct(t), e ? gt : qe);
    }),
    (X.getById = function (t) {
      return Go[t];
    }),
    (X.getAll = function () {
      return ie.filter(function (t) {
        return t.vars.id !== "ScrollSmoother";
      });
    }),
    (X.isScrolling = function () {
      return !!Yt;
    }),
    (X.snapDirectional = Wo),
    (X.addEventListener = function (t, e) {
      var i = Cn[t] || (Cn[t] = []);
      ~i.indexOf(e) || i.push(e);
    }),
    (X.removeEventListener = function (t, e) {
      var i = Cn[t],
        n = i && i.indexOf(e);
      n >= 0 && i.splice(n, 1);
    }),
    (X.batch = function (t, e) {
      var i = [],
        n = {},
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
        n[o] =
          o.substr(0, 2) === "on" && at(e[o]) && o !== "onRefreshInit"
            ? a(o, e[o])
            : e[o];
      return (
        at(s) &&
          ((s = s()),
          Ge(X, "refresh", function () {
            return (s = e.batchMax());
          })),
        jr(t).forEach(function (l) {
          var c = {};
          for (o in n) c[o] = n[o];
          (c.trigger = l), i.push(X.create(c));
        }),
        i
      );
    });
  var rd = function (e, i, n, r) {
      return (
        i > r ? e(r) : i < 0 && e(0),
        n > r ? (r - i) / (n - i) : n < 0 ? i / (i - n) : 1
      );
    },
    Ko = function t(e, i) {
      i === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            i === !0
              ? "auto"
              : i
              ? "pan-" + i + (Me.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === Dt && t(ue, i);
    },
    la = { auto: 1, scroll: 1 },
    Ng = function (e) {
      var i = e.event,
        n = e.target,
        r = e.axis,
        s = (i.changedTouches ? i.changedTouches[0] : i).target,
        a = s._gsap || V.core.getCache(s),
        o = st(),
        l;
      if (!a._isScrollT || o - a._isScrollT > 2e3) {
        for (
          ;
          s &&
          s !== ue &&
          ((s.scrollHeight <= s.clientHeight &&
            s.scrollWidth <= s.clientWidth) ||
            !(la[(l = Gt(s)).overflowY] || la[l.overflowX]));

        )
          s = s.parentNode;
        (a._isScroll =
          s &&
          s !== n &&
          !xn(s) &&
          (la[(l = Gt(s)).overflowY] || la[l.overflowX])),
          (a._isScrollT = o);
      }
      (a._isScroll || r === "x") && (i.stopPropagation(), (i._gsapAllow = !0));
    },
    sd = function (e, i, n, r) {
      return Me.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: i,
        onWheel: (r = r && Ng),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return n && Ge(ve, Me.eventTypes[0], od, !1, !0);
        },
        onDisable: function () {
          return Xe(ve, Me.eventTypes[0], od, !0);
        },
      });
    },
    Bg = /(input|label|select|textarea)/i,
    ad,
    od = function (e) {
      var i = Bg.test(e.target.tagName);
      (i || ad) && ((e._gsapAllow = !0), (ad = i));
    },
    Fg = function (e) {
      Sn(e) || (e = {}),
        (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
        e.type || (e.type = "wheel,touch"),
        (e.debounce = !!e.debounce),
        (e.id = e.id || "normalizer");
      var i = e,
        n = i.normalizeScrollX,
        r = i.momentum,
        s = i.allowNestedScroll,
        a = i.onRelease,
        o,
        l,
        c = Ct(e.target) || Dt,
        u = V.core.globals().ScrollSmoother,
        d = u && u.get(),
        f =
          Ui &&
          ((e.content && Ct(e.content)) ||
            (d && e.content !== !1 && !d.smooth() && d.content())),
        h = ji(c, qe),
        m = ji(c, gt),
        p = 1,
        g =
          (Me.isTouch && se.visualViewport
            ? se.visualViewport.scale * se.visualViewport.width
            : se.outerWidth) / se.innerWidth,
        b = 0,
        v = at(r)
          ? function () {
              return r(o);
            }
          : function () {
              return r || 2.8;
            },
        y,
        _,
        x = sd(c, e.type, !0, s),
        T = function () {
          return (_ = !1);
        },
        E = fi,
        C = fi,
        $ = function () {
          (l = hi(c, qe)),
            (C = Ur(Ui ? 1 : 0, l)),
            n && (E = Ur(0, hi(c, gt))),
            (y = An);
        },
        k = function () {
          (f._gsap.y = Kr(parseFloat(f._gsap.y) + h.offset) + "px"),
            (f.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(f._gsap.y) +
              ", 0, 1)"),
            (h.offset = h.cacheID = 0);
        },
        M = function () {
          if (_) {
            requestAnimationFrame(T);
            var I = Kr(o.deltaY / 2),
              B = C(h.v - I);
            if (f && B !== h.v + h.offset) {
              h.offset = B - h.v;
              var P = Kr((parseFloat(f && f._gsap.y) || 0) - h.offset);
              (f.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                P +
                ", 0, 1)"),
                (f._gsap.y = P + "px"),
                (h.cacheID = re.cache),
                ki();
            }
            return !0;
          }
          h.offset && k(), (_ = !0);
        },
        w,
        S,
        O,
        z,
        A = function () {
          $(),
            w.isActive() &&
              w.vars.scrollY > l &&
              (h() > l ? w.progress(1) && h(l) : w.resetTo("scrollY", l));
        };
      return (
        f && V.set(f, { y: "+=0" }),
        (e.ignoreCheck = function (L) {
          return (
            (Ui && L.type === "touchmove" && M()) ||
            (p > 1.05 && L.type !== "touchstart") ||
            o.isGesturing ||
            (L.touches && L.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          _ = !1;
          var L = p;
          (p = Kr(((se.visualViewport && se.visualViewport.scale) || 1) / g)),
            w.pause(),
            L !== p && Ko(c, p > 1.01 ? !0 : n ? !1 : "x"),
            (S = m()),
            (O = h()),
            $(),
            (y = An);
        }),
        (e.onRelease = e.onGestureStart =
          function (L, I) {
            if ((h.offset && k(), !I)) z.restart(!0);
            else {
              re.cache++;
              var B = v(),
                P,
                q;
              n &&
                ((P = m()),
                (q = P + (B * 0.05 * -L.velocityX) / 0.227),
                (B *= rd(m, P, q, hi(c, gt))),
                (w.vars.scrollX = E(q))),
                (P = h()),
                (q = P + (B * 0.05 * -L.velocityY) / 0.227),
                (B *= rd(h, P, q, hi(c, qe))),
                (w.vars.scrollY = C(q)),
                w.invalidate().duration(B).play(0.01),
                ((Ui && w.vars.scrollY >= l) || P >= l - 1) &&
                  V.to({}, { onUpdate: A, duration: B });
            }
            a && a(L);
          }),
        (e.onWheel = function () {
          w._ts && w.pause(), st() - b > 1e3 && ((y = 0), (b = st()));
        }),
        (e.onChange = function (L, I, B, P, q) {
          if (
            (An !== y && $(),
            I && n && m(E(P[2] === I ? S + (L.startX - L.x) : m() + I - P[1])),
            B)
          ) {
            h.offset && k();
            var G = q[2] === B,
              oe = G ? O + L.startY - L.y : h() + B - q[1],
              ne = C(oe);
            G && oe !== ne && (O += ne - oe), h(ne);
          }
          (B || I) && ki();
        }),
        (e.onEnable = function () {
          Ko(c, n ? !1 : "x"),
            X.addEventListener("refresh", A),
            Ge(se, "resize", A),
            h.smooth &&
              ((h.target.style.scrollBehavior = "auto"),
              (h.smooth = m.smooth = !1)),
            x.enable();
        }),
        (e.onDisable = function () {
          Ko(c, !0),
            Xe(se, "resize", A),
            X.removeEventListener("refresh", A),
            x.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (o = new Me(e)),
        (o.iOS = Ui),
        Ui && !h() && h(1),
        Ui && V.ticker.add(fi),
        (z = o._dc),
        (w = V.to(o, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: n ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: id(h, h(), function () {
              return w.pause();
            }),
          },
          onUpdate: ki,
          onComplete: z.vars.onComplete,
        })),
        o
      );
    };
  (X.sort = function (t) {
    if (at(t)) return ie.sort(t);
    var e = se.pageYOffset || 0;
    return (
      X.getAll().forEach(function (i) {
        return (i._sortY = i.trigger
          ? e + i.trigger.getBoundingClientRect().top
          : i.start + se.innerHeight);
      }),
      ie.sort(
        t ||
          function (i, n) {
            return (
              (i.vars.refreshPriority || 0) * -1e6 +
              (i.vars.containerAnimation ? 1e6 : i._sortY) -
              ((n.vars.containerAnimation ? 1e6 : n._sortY) +
                (n.vars.refreshPriority || 0) * -1e6)
            );
          }
      )
    );
  }),
    (X.observe = function (t) {
      return new Me(t);
    }),
    (X.normalizeScroll = function (t) {
      if (typeof t > "u") return yt;
      if (t === !0 && yt) return yt.enable();
      if (t === !1) {
        yt && yt.kill(), (yt = t);
        return;
      }
      var e = t instanceof Me ? t : Fg(t);
      return (
        yt && yt.target === e.target && yt.kill(), xn(e.target) && (yt = e), e
      );
    }),
    (X.core = {
      _getVelocityProp: Mo,
      _inputObserver: sd,
      _scrollers: re,
      _proxies: di,
      bridge: {
        ss: function () {
          Yt || kn("scrollStart"), (Yt = st());
        },
        ref: function () {
          return rt;
        },
      },
    }),
    Bu() && V.registerPlugin(X);
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let ls,
    fr,
    Jo,
    Vg = () => Jo || _e.register(window.gsap),
    ld = typeof Intl < "u" ? new Intl.Segmenter() : 0,
    ca = (t) =>
      typeof t == "string"
        ? ca(document.querySelectorAll(t))
        : "length" in t
        ? Array.from(t)
        : [t],
    cd = (t) => ca(t).filter((e) => e instanceof HTMLElement),
    el = [],
    tl = function () {},
    qg = /\s+/g,
    ud = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    dd = { left: 0, top: 0, width: 0, height: 0 },
    fd = (t, e) => {
      if (e) {
        let i = new Set(t.join("").match(e) || el),
          n = t.length,
          r,
          s,
          a,
          o;
        if (i.size)
          for (; --n > -1; ) {
            s = t[n];
            for (a of i)
              if (a.startsWith(s) && a.length > s.length) {
                for (
                  r = 0, o = s;
                  a.startsWith((o += t[n + ++r])) && o.length < a.length;

                );
                if (r && o.length === a.length) {
                  (t[n] = a), t.splice(n + 1, r);
                  break;
                }
              }
          }
      }
      return t;
    },
    hd = (t) =>
      window.getComputedStyle(t).display === "inline" &&
      (t.style.display = "inline-block"),
    hr = (t, e, i) =>
      e.insertBefore(typeof t == "string" ? document.createTextNode(t) : t, i),
    il = (t, e, i) => {
      let n = e[t + "sClass"] || "",
        { tag: r = "div", aria: s = "auto", propIndex: a = !1 } = e,
        o = t === "line" ? "block" : "inline-block",
        l = n.indexOf("++") > -1,
        c = (u) => {
          let d = document.createElement(r),
            f = i.length + 1;
          return (
            n && (d.className = n + (l ? " " + n + f : "")),
            a && d.style.setProperty("--" + t, f + ""),
            s !== "none" && d.setAttribute("aria-hidden", "true"),
            r !== "span" &&
              ((d.style.position = "relative"), (d.style.display = o)),
            (d.textContent = u),
            i.push(d),
            d
          );
        };
      return l && (n = n.replace("++", "")), (c.collection = i), c;
    },
    Hg = (t, e, i, n) => {
      let r = il("line", i, n),
        s = window.getComputedStyle(t).textAlign || "left";
      return (a, o) => {
        let l = r("");
        for (l.style.textAlign = s, t.insertBefore(l, e[a]); a < o; a++)
          l.appendChild(e[a]);
        l.normalize();
      };
    },
    pd = (t, e, i, n, r, s, a, o, l, c) => {
      var u;
      let d = Array.from(t.childNodes),
        f = 0,
        { wordDelimiter: h, reduceWhiteSpace: m = !0, prepareText: p } = e,
        g = t.getBoundingClientRect(),
        b = g,
        v =
          !m && window.getComputedStyle(t).whiteSpace.substring(0, 3) === "pre",
        y = 0,
        _ = i.collection,
        x,
        T,
        E,
        C,
        $,
        k,
        M,
        w,
        S,
        O,
        z,
        A,
        L,
        I,
        B,
        P,
        q,
        G;
      for (
        typeof h == "object"
          ? ((E = h.delimiter || h), (T = h.replaceWith || ""))
          : (T = h === "" ? "" : h || " "),
          x = T !== " ";
        f < d.length;
        f++
      )
        if (((C = d[f]), C.nodeType === 3)) {
          for (
            B = C.textContent || "",
              m
                ? (B = B.replace(qg, " "))
                : v &&
                  (B = B.replace(
                    /\n/g,
                    T +
                      `
`
                  )),
              p && (B = p(B, t)),
              C.textContent = B,
              $ = T || E ? B.split(E || T) : B.match(o) || el,
              q = $[$.length - 1],
              w = x ? q.slice(-1) === " " : !q,
              q || $.pop(),
              b = g,
              M = x ? $[0].charAt(0) === " " : !$[0],
              M && hr(" ", t, C),
              $[0] || $.shift(),
              fd($, l),
              (s && c) || (C.textContent = ""),
              S = 1;
            S <= $.length;
            S++
          )
            if (
              ((P = $[S - 1]),
              !m &&
                v &&
                P.charAt(0) ===
                  `
` &&
                ((u = C.previousSibling) == null || u.remove(),
                hr(document.createElement("br"), t, C),
                (P = P.slice(1))),
              !m && P === "")
            )
              hr(T, t, C);
            else if (P === " ") t.insertBefore(document.createTextNode(" "), C);
            else {
              if (
                (x && P.charAt(0) === " " && hr(" ", t, C),
                y && S === 1 && !M && _.indexOf(y.parentNode) > -1
                  ? ((k = _[_.length - 1]),
                    k.appendChild(document.createTextNode(n ? "" : P)))
                  : ((k = i(n ? "" : P)),
                    hr(k, t, C),
                    y && S === 1 && !M && k.insertBefore(y, k.firstChild)),
                n)
              )
                for (
                  z = ld
                    ? fd(
                        [...ld.segment(P)].map((oe) => oe.segment),
                        l
                      )
                    : P.match(o) || el,
                    G = 0;
                  G < z.length;
                  G++
                )
                  k.appendChild(
                    z[G] === " " ? document.createTextNode(" ") : n(z[G])
                  );
              if (s && c) {
                if (
                  ((B = C.textContent = B.substring(P.length + 1, B.length)),
                  (O = k.getBoundingClientRect()),
                  O.top > b.top && O.left <= b.left)
                ) {
                  for (A = t.cloneNode(), L = t.childNodes[0]; L && L !== k; )
                    (I = L), (L = L.nextSibling), A.appendChild(I);
                  t.parentNode.insertBefore(A, t), r && hd(A);
                }
                b = O;
              }
              (S < $.length || w) &&
                hr(
                  S >= $.length ? " " : x && P.slice(-1) === " " ? " " + T : T,
                  t,
                  C
                );
            }
          t.removeChild(C), (y = 0);
        } else
          C.nodeType === 1 &&
            (a && a.indexOf(C) > -1
              ? (_.indexOf(C.previousSibling) > -1 &&
                  _[_.length - 1].appendChild(C),
                (y = C))
              : (pd(C, e, i, n, r, s, a, o, l, !0), (y = 0)),
            r && hd(C));
    };
  const md = class sf {
    constructor(e, i) {
      (this.isSplit = !1),
        Vg(),
        (this.elements = cd(e)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this.masks = []),
        (this.vars = i),
        (this._split = () => this.isSplit && this.split(this.vars));
      let n = [],
        r,
        s = () => {
          let a = n.length,
            o;
          for (; a--; ) {
            o = n[a];
            let l = o.element.offsetWidth;
            if (l !== o.width) {
              (o.width = l), this._split();
              return;
            }
          }
        };
      (this._data = {
        orig: n,
        obs:
          typeof ResizeObserver < "u" &&
          new ResizeObserver(() => {
            clearTimeout(r), (r = setTimeout(s, 200));
          }),
      }),
        tl(this),
        this.split(i);
    }
    split(e) {
      this.isSplit && this.revert(), (this.vars = e = e || this.vars || {});
      let {
          type: i = "chars,words,lines",
          aria: n = "auto",
          deepSlice: r = !0,
          smartWrap: s,
          onSplit: a,
          autoSplit: o = !1,
          specialChars: l,
          mask: c,
        } = this.vars,
        u = i.indexOf("lines") > -1,
        d = i.indexOf("chars") > -1,
        f = i.indexOf("words") > -1,
        h = d && !f && !u,
        m =
          l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
        p = m ? new RegExp(m.source + "|" + ud.source, "gu") : ud,
        g = !!e.ignore && cd(e.ignore),
        { orig: b, animTime: v, obs: y } = this._data,
        _;
      return (
        (d || f || u) &&
          (this.elements.forEach((x, T) => {
            (b[T] = {
              element: x,
              html: x.innerHTML,
              ariaL: x.getAttribute("aria-label"),
              ariaH: x.getAttribute("aria-hidden"),
            }),
              n === "auto"
                ? x.setAttribute("aria-label", (x.textContent || "").trim())
                : n === "hidden" && x.setAttribute("aria-hidden", "true");
            let E = [],
              C = [],
              $ = [],
              k = d ? il("char", e, E) : null,
              M = il("word", e, C),
              w,
              S,
              O,
              z;
            if ((pd(x, e, M, k, h, r && (u || h), g, p, m, !1), u)) {
              let A = ca(x.childNodes),
                L = Hg(x, A, e, $),
                I,
                B = [],
                P = 0,
                q = A.map((oe) =>
                  oe.nodeType === 1 ? oe.getBoundingClientRect() : dd
                ),
                G = dd;
              for (w = 0; w < A.length; w++)
                (I = A[w]),
                  I.nodeType === 1 &&
                    (I.nodeName === "BR"
                      ? (B.push(I), L(P, w + 1), (P = w + 1), (G = q[P]))
                      : (w &&
                          q[w].top > G.top &&
                          q[w].left <= G.left &&
                          (L(P, w), (P = w)),
                        (G = q[w])));
              P < w && L(P, w),
                B.forEach((oe) => {
                  var ne;
                  return (ne = oe.parentNode) == null
                    ? void 0
                    : ne.removeChild(oe);
                });
            }
            if (!f) {
              for (w = 0; w < C.length; w++)
                if (
                  ((S = C[w]),
                  d || !S.nextSibling || S.nextSibling.nodeType !== 3)
                )
                  if (s && !u) {
                    for (
                      O = document.createElement("span"),
                        O.style.whiteSpace = "nowrap";
                      S.firstChild;

                    )
                      O.appendChild(S.firstChild);
                    S.replaceWith(O);
                  } else S.replaceWith(...S.childNodes);
                else
                  (z = S.nextSibling),
                    z &&
                      z.nodeType === 3 &&
                      ((z.textContent =
                        (S.textContent || "") + (z.textContent || "")),
                      S.remove());
              (C.length = 0), x.normalize();
            }
            this.lines.push(...$), this.words.push(...C), this.chars.push(...E);
          }),
          c &&
            this[c] &&
            this.masks.push(
              ...this[c].map((x) => {
                let T = x.cloneNode();
                return (
                  x.replaceWith(T),
                  T.appendChild(x),
                  x.className &&
                    (T.className = x.className.replace(
                      /(\b\w+\b)/g,
                      "$1-mask"
                    )),
                  (T.style.overflow = "clip"),
                  T
                );
              })
            )),
        (this.isSplit = !0),
        fr &&
          (o
            ? fr.addEventListener("loadingdone", this._split)
            : fr.status === "loading" &&
              console.warn("SplitText called before fonts loaded")),
        (_ = a && a(this)) &&
          _.totalTime &&
          (this._data.anim = v ? _.totalTime(v) : _),
        u &&
          o &&
          this.elements.forEach((x, T) => {
            (b[T].width = x.offsetWidth), y && y.observe(x);
          }),
        this
      );
    }
    revert() {
      var e, i;
      let { orig: n, anim: r, obs: s } = this._data;
      return (
        s && s.disconnect(),
        n.forEach(({ element: a, html: o, ariaL: l, ariaH: c }) => {
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
          n.length =
          this.masks.length =
            0),
        (this.isSplit = !1),
        fr?.removeEventListener("loadingdone", this._split),
        r && ((this._data.animTime = r.totalTime()), r.revert()),
        (i = (e = this.vars).onRevert) == null || i.call(e, this),
        this
      );
    }
    static create(e, i) {
      return new sf(e, i);
    }
    static register(e) {
      (ls = ls || e || window.gsap),
        ls && ((ca = ls.utils.toArray), (tl = ls.core.context || tl)),
        !Jo && window.innerWidth > 0 && ((fr = document.fonts), (Jo = !0));
    }
  };
  md.version = "3.13.0";
  let _e = md;
  R.registerPlugin(X, _e);
  const Yg = async () => {
      await document.fonts.ready,
        document.querySelectorAll("[split-text]").forEach((e) => {
          e.hasAttribute("data-split-initialized") ||
            (e.setAttribute("data-split-initialized", "true"),
            _e.create(e, {
              type: "lines",
              autoSplit: !0,
              mask: "lines",
              linesClass: "split-line",
              tag: "div",
              onSplit(i) {
                i.lines.forEach((s) => {
                  const a = document.createElement("div");
                  a.setAttribute("data-line-wrapper", ""),
                    (a.style.overflow = "clip"),
                    (a.style.paddingBottom = "5px"),
                    (a.style.position = "relative"),
                    s.parentNode.insertBefore(a, s),
                    a.appendChild(s);
                });
                const n = e.querySelectorAll("[data-line-wrapper]"),
                  r = Array.from(n).map((s) => s.firstChild);
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
    Zi = () => {
      Yg();
    };
  R.registerPlugin(X);
  const Qi = () => {
    const t =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
    let e = [],
      i;
    const n = () => {
        e.forEach((o) => {
          o && typeof o.kill == "function" && o.kill();
        }),
          (e = []),
          X.getAll().forEach((o) => o.kill());
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
          (clearTimeout(i),
          (i = setTimeout(() => {
            n(),
              setTimeout(() => {
                s(), X.refresh();
              }, 100);
          }, 250)));
      };
    s(), t || window.addEventListener("resize", a);
  };
  R.registerPlugin(_e);
  const Wg = (t) => {
    const e = document.querySelectorAll("[page-load='component']"),
      i = document.querySelectorAll("[page-load='wrap']"),
      n = document.querySelectorAll("[page-load='gradient']"),
      r = document.querySelectorAll("[page-load='text']"),
      s = document.querySelectorAll(".page_cover"),
      a = R.timeline();
    R.set(n, { opacity: 0 }), R.set(i, { opacity: 0 });
    const o = [];
    r.forEach((c) => {
      const u = _e.create(c, {
        type: "lines",
        mask: "lines",
        linesClass: "pg-load-text-line",
        onSplit: function (d) {
          return (
            R.set(d.lines, {
              opacity: 0,
              yPercent: 100,
              willChange: "transform, opacity",
            }),
            d
          );
        },
      });
      o.push(u);
    });
    const l = o.flatMap((c) => c.lines);
    return (
      a.to(n, { opacity: 1, duration: 2, ease: "power1.out" }),
      a.to(i, { opacity: 1, duration: 1, ease: "power2.inOut" }, "<"),
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
  R.registerPlugin(_e);
  const Gg = (t) => {
      const e =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
      let i, n, r;
      const s = () => {
          i && typeof i.revert == "function" && (i.revert(), (i = null)),
            n && (n.kill(), (n = null)),
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
            (i = _e.create(l, {
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
                  (n = R.timeline()),
                  R.set(".move-text", { opacity: 0, yPercent: 100 }),
                  R.set(c, { opacity: 0 }),
                  R.set(u, { opacity: 0 }),
                  n.to(".move-text", {
                    opacity: 1,
                    duration: 1.8,
                    stagger: 0.08,
                    ease: "expo.inOut",
                    yPercent: 0,
                  }),
                  n.to(
                    c,
                    { opacity: 1, duration: 1, ease: "power1.out" },
                    "-=1"
                  ),
                  n.to(
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
                  n
                );
              },
            }));
        },
        o = () => {
          e ||
            (clearTimeout(r),
            (r = setTimeout(() => {
              s(),
                setTimeout(() => {
                  a();
                }, 100);
            }, 250)));
        };
      a(), e || window.addEventListener("resize", o);
    },
    Ki = (t) => {
      const e = document.querySelectorAll("[nav-load='component']"),
        i = document.querySelectorAll("[main-nav='brand']"),
        n = document.querySelectorAll("[nav-link='wrap']");
      R.set(e, { opacity: 0 }),
        R.set(i, { opacity: 0 }),
        R.set(n, { opacity: 0, yPercent: -100 });
      const r = R.timeline();
      return (
        r.to(e, { opacity: 1, duration: 1, ease: "expo.inOut" }),
        r.to(i, { opacity: 1, duration: 1, ease: "power1.out" }, "-=0.8"),
        r.to(
          n,
          { opacity: 1, yPercent: 0, duration: 0.6, stagger: 0.06 },
          "-=0.8"
        ),
        r
      );
    },
    Xg = () => {
      const t = document.querySelector("[home-hero='visual']"),
        e = document.querySelector("[home-hero='follow-button']");
      R.set(e, {
        xPercent: -50,
        yPercent: -50,
        willChange: "transform, opacity",
      });
      let i = !1;
      const n = t.getBoundingClientRect(),
        r = n.width / 2,
        s = n.height / 2;
      t.addEventListener("mouseenter", () => {
        i = !0;
      }),
        t.addEventListener("mouseleave", () => {
          (i = !1),
            R.to(e, {
              x: 0,
              y: 0,
              duration: 1.6,
              ease: "elastic.out(1.5, 0.5)",
            });
        }),
        window.addEventListener("mousemove", (a) => {
          if (i) {
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
    jg = () => {
      Xg();
    },
    gd = () => {
      console.log("homeInit"), Mf(), nc(), Zi(), Qi(), jg();
      const t = Wg();
      t.add(() => Ki(), "-=0.8"), t.add(() => Gg(), "-=1");
    },
    vd = () => {
      const t = document.querySelector(".swiper[review-slider='component']");
      t &&
        new ft(t, {
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
                  (n) => !n.classList.contains("swiper-slide-duplicate")
                ).length,
                i = this.realIndex + 1;
              (document.querySelector("[review-slider-count]").textContent = e),
                (document.querySelector("[review-slider-current]").textContent =
                  i);
            },
            slideChange: function () {
              const e = this.realIndex + 1;
              document.querySelector("[review-slider-current]").textContent = e;
            },
          },
        });
    };
  R.registerPlugin(X);
  const Ug = () => {
      const t =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
      let e, i;
      const n = () => {
          e && (e.kill(), (e = null)), X.getAll().forEach((a) => a.kill());
        },
        r = () => {
          const a = document.querySelector("[impact-slide='main']"),
            o = a?.querySelectorAll("[impact-slide='component']");
          !a ||
            !o.length ||
            (o.forEach((l, c) => {
              R.set(l, {
                clipPath:
                  c === 0 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
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
            (clearTimeout(i),
            (i = setTimeout(() => {
              n(),
                setTimeout(() => {
                  r(), X.refresh();
                }, 100);
            }, 250)));
        };
      r(), t || window.addEventListener("resize", s);
    },
    Zg = () => {
      document.querySelectorAll("[image-index='wrap']").forEach((t) => {
        const e = t.querySelector("[image-index='large']"),
          i = t.querySelector("[image-index='small']"),
          n = (l, c) => {
            const u = [];
            let d = l;
            for (; d && d !== c; )
              (d = d.parentElement), d && d !== c && u.push(d);
            return u;
          },
          r = n(e, t),
          s = n(i, t),
          a = (l, c, u) => {
            (l.style.zIndex = u),
              c.forEach((d) => {
                d.style.zIndex = u;
              });
          };
        a(e, r, "2"), a(i, s, "1");
        const o = (l, c, u, d) => {
          a(l, u, "2"), a(c, d, "1");
        };
        e.addEventListener("click", () => o(e, i, r, s)),
          i.addEventListener("click", () => o(i, e, s, r));
      });
    },
    nl = () => {
      Zg();
    },
    Qg = () => {
      const t = document.querySelector(".swiper[about-slider='component']");
      t &&
        new ft(t, {
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
                  (n) => !n.classList.contains("swiper-slide-duplicate")
                ).length,
                i = this.realIndex + 1;
              (document.querySelector("[data-slider-count]").textContent = e),
                (document.querySelector("[data-slider-current]").textContent =
                  i);
            },
            slideChange: function () {
              const e = this.realIndex + 1;
              document.querySelector("[data-slider-current]").textContent = e;
            },
          },
        });
    },
    Mn = (t) => {
      const e = document.querySelector(".page_overlay"),
        i = document.querySelector("[page-overlay='text-wrap']"),
        n = R.timeline();
      return (
        n.fromTo(
          i,
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
        n.fromTo(
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
        n.to(
          i,
          {
            y: -800,
            duration: 1.4,
            filter: "blur(5px)",
            opacity: 0,
            ease: "expo.inOut",
          },
          "<"
        ),
        n
      );
    };
  R.registerPlugin(_e);
  const Kg = (t) => {
      const e =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
      let i, n, r;
      const s = () => {
          i && typeof i.revert == "function" && (i.revert(), (i = null)),
            n && (n.kill(), (n = null)),
            document.querySelectorAll(".move-text").forEach((c) => {
              c.parentNode &&
                (c.parentNode.insertBefore(c.firstChild, c), c.remove());
            });
        },
        a = () => {
          const l = document.querySelector("[about-hero='text']"),
            c = document.querySelectorAll("[about-hero='visual']");
          l &&
            (i = _e.create(l, {
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
                  (n = R.timeline()),
                  R.set(".move-text", { opacity: 0, yPercent: 100 }),
                  R.set(c, { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }),
                  n.to(".move-text", {
                    opacity: 1,
                    duration: 1.8,
                    stagger: 0.08,
                    ease: "expo.inOut",
                    yPercent: 0,
                  }),
                  n.to(
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
                  n
                );
              },
            }));
        },
        o = () => {
          e ||
            (clearTimeout(r),
            (r = setTimeout(() => {
              s(),
                setTimeout(() => {
                  a();
                }, 100);
            }, 250)));
        };
      a(), e || window.addEventListener("resize", o);
    },
    Jg = () => {
      Qg(), vd(), Ug(), nl(), Zi(), Qi();
      const t = Mn();
      t.add(() => Ki(), "-=1"), t.add(() => Kg(), "-=1");
    };
  var e0 = "1.3.1";
  function yd(t, e, i) {
    return Math.max(t, Math.min(e, i));
  }
  function t0(t, e, i) {
    return (1 - i) * t + i * e;
  }
  function i0(t, e, i, n) {
    return t0(t, e, 1 - Math.exp(-i * n));
  }
  function n0(t, e) {
    return ((t % e) + e) % e;
  }
  var r0 = class {
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
    advance(t) {
      if (!this.isRunning) return;
      let e = !1;
      if (this.duration && this.easing) {
        this.currentTime += t;
        const i = yd(0, this.currentTime / this.duration, 1);
        e = i >= 1;
        const n = e ? 1 : this.easing(i);
        this.value = this.from + (this.to - this.from) * n;
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
    fromTo(t, e, { lerp: i, duration: n, easing: r, onStart: s, onUpdate: a }) {
      (this.from = this.value = t),
        (this.to = e),
        (this.lerp = i),
        (this.duration = n),
        (this.easing = r),
        (this.currentTime = 0),
        (this.isRunning = !0),
        s?.(),
        (this.onUpdate = a);
    }
  };
  function s0(t, e) {
    let i;
    return function (...n) {
      let r = this;
      clearTimeout(i),
        (i = setTimeout(() => {
          (i = void 0), t.apply(r, n);
        }, e));
    };
  }
  var a0 = class {
      constructor(t, e, { autoResize: i = !0, debounce: n = 250 } = {}) {
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
        (this.wrapper = t),
          (this.content = e),
          i &&
            ((this.debouncedResize = s0(this.resize, n)),
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
    bd = class {
      constructor() {
        W(this, "events", {});
      }
      emit(t, ...e) {
        let i = this.events[t] || [];
        for (let n = 0, r = i.length; n < r; n++) i[n]?.(...e);
      }
      on(t, e) {
        return (
          this.events[t]?.push(e) || (this.events[t] = [e]),
          () => {
            this.events[t] = this.events[t]?.filter((i) => e !== i);
          }
        );
      }
      off(t, e) {
        this.events[t] = this.events[t]?.filter((i) => e !== i);
      }
      destroy() {
        this.events = {};
      }
    },
    _d = 100 / 6,
    Ji = { passive: !1 },
    o0 = class {
      constructor(t, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        W(this, "touchStart", { x: 0, y: 0 });
        W(this, "lastDelta", { x: 0, y: 0 });
        W(this, "window", { width: 0, height: 0 });
        W(this, "emitter", new bd());
        W(this, "onTouchStart", (t) => {
          const { clientX: e, clientY: i } = t.targetTouches
            ? t.targetTouches[0]
            : t;
          (this.touchStart.x = e),
            (this.touchStart.y = i),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t });
        });
        W(this, "onTouchMove", (t) => {
          const { clientX: e, clientY: i } = t.targetTouches
              ? t.targetTouches[0]
              : t,
            n = -(e - this.touchStart.x) * this.options.touchMultiplier,
            r = -(i - this.touchStart.y) * this.options.touchMultiplier;
          (this.touchStart.x = e),
            (this.touchStart.y = i),
            (this.lastDelta = { x: n, y: r }),
            this.emitter.emit("scroll", { deltaX: n, deltaY: r, event: t });
        });
        W(this, "onTouchEnd", (t) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: t,
          });
        });
        W(this, "onWheel", (t) => {
          let { deltaX: e, deltaY: i, deltaMode: n } = t;
          const r = n === 1 ? _d : n === 2 ? this.window.width : 1,
            s = n === 1 ? _d : n === 2 ? this.window.height : 1;
          (e *= r),
            (i *= s),
            (e *= this.options.wheelMultiplier),
            (i *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: e, deltaY: i, event: t });
        });
        W(this, "onWindowResize", () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        });
        (this.element = t),
          (this.options = e),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, Ji),
          this.element.addEventListener("touchstart", this.onTouchStart, Ji),
          this.element.addEventListener("touchmove", this.onTouchMove, Ji),
          this.element.addEventListener("touchend", this.onTouchEnd, Ji);
      }
      on(t, e) {
        return this.emitter.on(t, e);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, Ji),
          this.element.removeEventListener("touchstart", this.onTouchStart, Ji),
          this.element.removeEventListener("touchmove", this.onTouchMove, Ji),
          this.element.removeEventListener("touchend", this.onTouchEnd, Ji);
      }
    },
    l0 = class {
      constructor({
        wrapper: t = window,
        content: e = document.documentElement,
        eventsTarget: i = t,
        smoothWheel: n = !0,
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
        virtualScroll: b,
        overscroll: v = !0,
        autoRaf: y = !1,
        anchors: _ = !1,
        autoToggle: x = !1,
        allowNestedScroll: T = !1,
        __experimental__naiveDimensions: E = !1,
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
        W(this, "animate", new r0());
        W(this, "emitter", new bd());
        W(this, "dimensions");
        W(this, "virtualScroll");
        W(this, "onScrollEnd", (t) => {
          t instanceof CustomEvent ||
            ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
              t.stopPropagation());
        });
        W(this, "dispatchScrollendEvent", () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            })
          );
        });
        W(this, "onTransitionEnd", (t) => {
          if (t.propertyName.includes("overflow")) {
            const e = this.isHorizontal ? "overflow-x" : "overflow-y",
              i = getComputedStyle(this.rootElement)[e];
            ["hidden", "clip"].includes(i) ? this.stop() : this.start();
          }
        });
        W(this, "onClick", (t) => {
          const i = t
            .composedPath()
            .find(
              (n) =>
                n instanceof HTMLAnchorElement &&
                (n.getAttribute("href")?.startsWith("#") ||
                  n.getAttribute("href")?.startsWith("/#") ||
                  n.getAttribute("href")?.startsWith("./#"))
            );
          if (i) {
            const n = i.getAttribute("href");
            if (n) {
              const r =
                typeof this.options.anchors == "object" && this.options.anchors
                  ? this.options.anchors
                  : void 0;
              let s = `#${n.split("#")[1]}`;
              ["#", "/#", "./#", "#top", "/#top", "./#top"].includes(n) &&
                (s = 0),
                this.scrollTo(s, r);
            }
          }
        });
        W(this, "onPointerDown", (t) => {
          t.button === 1 && this.reset();
        });
        W(this, "onVirtualScroll", (t) => {
          if (
            typeof this.options.virtualScroll == "function" &&
            this.options.virtualScroll(t) === !1
          )
            return;
          const { deltaX: e, deltaY: i, event: n } = t;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: e,
              deltaY: i,
              event: n,
            }),
            n.ctrlKey || n.lenisStopPropagation)
          )
            return;
          const r = n.type.includes("touch"),
            s = n.type.includes("wheel");
          this.isTouching = n.type === "touchstart" || n.type === "touchmove";
          const a = e === 0 && i === 0;
          if (
            this.options.syncTouch &&
            r &&
            n.type === "touchstart" &&
            a &&
            !this.isStopped &&
            !this.isLocked
          ) {
            this.reset();
            return;
          }
          const l =
            (this.options.gestureOrientation === "vertical" && i === 0) ||
            (this.options.gestureOrientation === "horizontal" && e === 0);
          if (a || l) return;
          let c = n.composedPath();
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
                    this.checkNestedScroll(g, { deltaX: e, deltaY: i })))
            )
          )
            return;
          if (this.isStopped || this.isLocked) {
            n.preventDefault();
            return;
          }
          if (
            !((this.options.syncTouch && r) || (this.options.smoothWheel && s))
          ) {
            (this.isScrolling = "native"),
              this.animate.stop(),
              (n.lenisStopPropagation = !0);
            return;
          }
          let f = i;
          this.options.gestureOrientation === "both"
            ? (f = Math.abs(i) > Math.abs(e) ? i : e)
            : this.options.gestureOrientation === "horizontal" && (f = e),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== window &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && i > 0) ||
                  (this.animatedScroll === this.limit && i < 0)))) &&
              (n.lenisStopPropagation = !0),
            n.preventDefault();
          const h = r && this.options.syncTouch,
            p = r && n.type === "touchend" && Math.abs(f) > 5;
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
        W(this, "raf", (t) => {
          const e = t - (this.time || t);
          (this.time = t),
            this.animate.advance(e * 0.001),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf));
        });
        (window.lenisVersion = e0),
          (!t || t === document.documentElement) && (t = window),
          (this.options = {
            wrapper: t,
            content: e,
            eventsTarget: i,
            smoothWheel: n,
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
            virtualScroll: b,
            overscroll: v,
            autoRaf: y,
            anchors: _,
            autoToggle: x,
            allowNestedScroll: T,
            __experimental__naiveDimensions: E,
          }),
          (this.dimensions = new a0(t, e, { autoResize: p })),
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
          (this.virtualScroll = new o0(i, {
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
          immediate: i = !1,
          lock: n = !1,
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
          if (typeof t == "string" && ["top", "left", "start"].includes(t))
            t = 0;
          else if (
            typeof t == "string" &&
            ["bottom", "right", "end"].includes(t)
          )
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
            } else t = yd(0, t, this.limit);
            if (t === this.targetScroll) {
              o?.(this), l?.(this);
              return;
            }
            if (((this.userData = d ?? {}), i)) {
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
                  n && (this.isLocked = !0),
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
      checkNestedScroll(t, { deltaX: e, deltaY: i }) {
        const n = Date.now(),
          r = t._lenis ?? (t._lenis = {});
        let s, a, o, l, c, u, d, f;
        const h = this.options.gestureOrientation;
        if (n - (r.time ?? 0) > 2e3) {
          r.time = Date.now();
          const x = window.getComputedStyle(t);
          r.computedStyle = x;
          const T = x.overflowX,
            E = x.overflowY;
          if (
            ((s = ["auto", "overlay", "scroll"].includes(T)),
            (a = ["auto", "overlay", "scroll"].includes(E)),
            (r.hasOverflowX = s),
            (r.hasOverflowY = a),
            (!s && !a) ||
              (h === "vertical" && !a) ||
              (h === "horizontal" && !s))
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
          const x = e !== 0,
            T = i !== 0;
          x && s && o && (m = "x"), T && a && l && (m = "y");
        }
        if (!m) return !1;
        let p, g, b, v, y;
        if (m === "x")
          (p = t.scrollLeft), (g = c - d), (b = e), (v = s), (y = o);
        else if (m === "y")
          (p = t.scrollTop), (g = u - f), (b = i), (v = a), (y = l);
        else return !1;
        return (b > 0 ? p < g : p > 0) && v && y;
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
          ? n0(this.animatedScroll, this.limit)
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
  R.registerPlugin(X);
  let ua;
  const c0 = () => {
      "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        ((ua = new l0({ autoRaf: !0, smoothWheel: !0, smoothTouch: !1 })),
        ua.on("scroll", X.update),
        R.ticker.add((t) => {
          ua.raf(t * 1e3);
        }),
        R.ticker.lagSmoothing(0));
    },
    wd = () => {
      c0();
    },
    $n = () => ua,
    u0 = () => {
      const t = document.querySelectorAll("[career-modal='open-trigger']"),
        e = document.querySelectorAll("[career-modal='modal']");
      if (!t || !e) {
        console.error("No open triggers or career modal found");
        return;
      }
      let i = null,
        n = null;
      const r = (s) => {
        if (s.key === "Escape" && i && n) {
          n.restart();
          const a = $n();
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
              {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "expo.inOut",
                duration: 1,
              },
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
              d.restart(), (i = s), (n = f);
              const m = $n();
              m && m.stop();
            }),
            u.forEach((m) => {
              m.addEventListener("click", () => {
                f.restart(), (i = null), (n = null);
                const p = $n();
                p && p.start();
              });
            });
        });
    },
    d0 = () => {
      u0();
    },
    f0 = () => {
      const t = document.querySelectorAll("[clock='component']"),
        e = () => {
          t.forEach((i) => {
            const r = i.querySelector("[clock-location]")?.dataset.timezone,
              s = i.querySelector("[clock='hour-hand']"),
              a = i.querySelector("[clock='minute-hand']"),
              o = i.querySelector("[clock='text']");
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
    xd = () => {
      f0();
    };
  R.registerPlugin(_e);
  const h0 = (t) => {
      const e =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
      let i, n, r;
      const s = () => {
          i && typeof i.revert == "function" && (i.revert(), (i = null)),
            n && (n.kill(), (n = null)),
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
            (i = _e.create(l, {
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
                  (n = R.timeline()),
                  R.set(".move-text", { opacity: 0, yPercent: 100 }),
                  R.set(c, { opacity: 0, clipPath: "inset(50% round 16px)" }),
                  R.set(u, { opacity: 0, y: 50 }),
                  R.set(d, { opacity: 0, yPercent: 50 }),
                  n.to(".move-text", {
                    opacity: 1,
                    duration: 1.8,
                    stagger: 0.08,
                    ease: "expo.inOut",
                    yPercent: 0,
                  }),
                  n.to(
                    c,
                    {
                      opacity: 1,
                      clipPath: "inset(0% round 10px)",
                      duration: 1.8,
                      ease: "expo.inOut",
                    },
                    "-=1.4"
                  ),
                  n.to(
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
                  n.to(
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
                  n
                );
              },
            }));
        },
        o = () => {
          e ||
            (clearTimeout(r),
            (r = setTimeout(() => {
              s(),
                setTimeout(() => {
                  a();
                }, 100);
            }, 250)));
        };
      a(), e || window.addEventListener("resize", o);
    },
    p0 = () => {
      xd(), Zi(), Qi();
      const t = Mn();
      t.add(() => Ki(), "-=1"), t.add(() => h0(), "-=1");
    };
  R.registerPlugin(_e);
  const m0 = (t) => {
      const e =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
      let i, n, r;
      const s = () => {
          i && typeof i.revert == "function" && (i.revert(), (i = null)),
            n && (n.kill(), (n = null)),
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
            (i = _e.create(l, {
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
                  (n = R.timeline()),
                  R.set(".move-text", { opacity: 0, yPercent: 100 }),
                  R.set(c, { opacity: 0 }),
                  R.set(u, { opacity: 0 }),
                  n.to(".move-text", {
                    opacity: 1,
                    duration: 1.8,
                    stagger: 0.08,
                    ease: "expo.inOut",
                    yPercent: 0,
                  }),
                  n.to(
                    c,
                    { opacity: 1, duration: 1, ease: "power1.out" },
                    "-=1"
                  ),
                  n.to(
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
                  n
                );
              },
            }));
        },
        o = () => {
          e ||
            (clearTimeout(r),
            (r = setTimeout(() => {
              s(),
                setTimeout(() => {
                  a();
                }, 100);
            }, 250)));
        };
      a(), e || window.addEventListener("resize", o);
    },
    g0 = () => {
      nl(), d0(), xd(), Zi(), Qi();
      const t = Mn();
      t.add(() => Ki(), "-=1"), t.add(() => m0(), "-=1");
    };
  R.registerPlugin(_e);
  const v0 = (t) => {
      const e =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
      let i, n, r;
      const s = () => {
          i && typeof i.revert == "function" && (i.revert(), (i = null)),
            n && (n.kill(), (n = null)),
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
            (i = _e.create(l, {
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
                  (n = R.timeline()),
                  R.set(".move-text", { opacity: 0, yPercent: 100 }),
                  R.set(c, { opacity: 0 }),
                  R.set(u, { y: 100, opacity: 0 }),
                  n.to(".move-text", {
                    opacity: 1,
                    duration: 1.8,
                    stagger: 0.08,
                    ease: "expo.inOut",
                    yPercent: 0,
                  }),
                  n.to(
                    c,
                    { opacity: 1, duration: 1, ease: "power1.out" },
                    "-=1"
                  ),
                  n.to(
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
                  n
                );
              },
            }));
        },
        o = () => {
          e ||
            (clearTimeout(r),
            (r = setTimeout(() => {
              s(),
                setTimeout(() => {
                  a();
                }, 100);
            }, 250)));
        };
      a(), e || window.addEventListener("resize", o);
    },
    y0 = () => {
      vd(), Zi(), Qi();
      const t = Mn();
      t.add(() => Ki(), "-=1"), t.add(() => v0(), "-=1");
    },
    b0 = () => {
      const t = document.querySelector("[service-link='wrap']");
      if (!t) return;
      const e = t.querySelectorAll("[service-link='item']"),
        i = document.querySelectorAll("[service-item]"),
        n = t.querySelector("[service-link='line-wrap']"),
        r = n?.querySelector("[service-link='line']"),
        s = document.querySelector("[hero-gradient='main']"),
        a = document.querySelectorAll("[hero-gradient]");
      if (!e.length || !i.length || !n || !r) return;
      let o = !1,
        l = null,
        c = null;
      const u = new Set(),
        d = () => {
          e.forEach((b) => {
            const v = b.querySelector("[service-link='num']");
            b.setAttribute("service-link-status", "inactive"),
              R.to(b, { opacity: 0.2, duration: 0.3 }),
              R.to(v, { opacity: 0, y: 5, duration: 0.3 });
          }),
            i.forEach((b) => {
              b.setAttribute("service-item-status", "inactive");
            }),
            a.forEach((b) => {
              b.getAttribute("hero-gradient") !== "main" &&
                R.to(b, { opacity: 0, duration: 0.5 });
            }),
            s && R.to(s, { opacity: 1, duration: 0.5 });
        },
        f = (b) => {
          if (c === b) return;
          c = b;
          const v = document.querySelector(
              `[service-link='item'][item-name='${b}']`
            ),
            y = document.querySelector(`[service-item='${b}']`),
            _ = document.querySelector(`[hero-gradient='${b}']`);
          if (v && y) {
            d();
            const x = v.querySelector("[service-link='num']");
            v.setAttribute("service-link-status", "active"),
              R.to(v, { opacity: 1, duration: 0.4 }),
              R.to(x, { opacity: 1, y: 0, duration: 0.4 }),
              y.setAttribute("service-item-status", "active"),
              u.has(b) || (h(y), u.add(b)),
              _ &&
                (s && R.to(s, { opacity: 0, duration: 0.5 }),
                R.to(_, { opacity: 1, duration: 0.5 })),
              m(v);
          }
        },
        h = (b) => {
          const v = b.children;
          R.set(v, { opacity: 0, y: 50 }),
            R.to(v, {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.1,
              ease: "power2.out",
            });
        },
        m = (b) => {
          const v = Array.from(e).indexOf(b),
            y = e.length,
            _ = n.offsetHeight,
            x = r.offsetHeight,
            T = _ - x,
            E = y > 1 ? v / (y - 1) : 0,
            C = T * E;
          R.to(r, { y: C, duration: 0.6, ease: "power2.out" });
        };
      s && R.set(s, { opacity: 1 }),
        a.forEach((b) => {
          b.getAttribute("hero-gradient") !== "main" &&
            R.set(b, { opacity: 0 });
        }),
        i.forEach((b) => {
          R.set(b.children, { opacity: 0, y: 50 });
        }),
        e.forEach((b) => {
          const v = b.getAttribute("item-name");
          b.addEventListener("click", () => {
            v &&
              (l && clearTimeout(l),
              (o = !0),
              f(v),
              $n().scrollTo(document.querySelector(`[service-item='${v}']`), {
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
          (b) => {
            if (o) return;
            b.forEach((_) => {
              const x = _.target.getAttribute("service-item");
              x &&
                (p.set(x, _.intersectionRatio),
                _.isIntersecting &&
                  _.intersectionRatio >= 0.3 &&
                  !u.has(x) &&
                  (h(_.target), u.add(x)));
            });
            let v = null,
              y = 0;
            p.forEach((_, x) => {
              _ > y && ((y = _), (v = x));
            }),
              v && y >= 0.3 ? f(v) : y < 0.3 && (d(), (c = null));
          },
          { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
        );
      i.forEach((b) => g.observe(b));
    },
    _0 = () => {
      b0();
    };
  /*!
   * DrawSVGPlugin 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var pi,
    rl,
    da,
    Sd,
    Td,
    Ed,
    sl,
    Cd,
    kd = function () {
      return typeof window < "u";
    },
    Ad = function () {
      return pi || (kd() && (pi = window.gsap) && pi.registerPlugin && pi);
    },
    w0 = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    al = {
      rect: ["width", "height"],
      circle: ["r", "r"],
      ellipse: ["rx", "ry"],
      line: ["x2", "y2"],
    },
    On = function (e) {
      return Math.round(e * 1e4) / 1e4;
    },
    Ai = function (e) {
      return parseFloat(e) || 0;
    },
    Pd = function (e, i) {
      var n = Ai(e);
      return ~e.indexOf("%") ? (n / 100) * i : n;
    },
    fa = function (e, i) {
      return Ai(e.getAttribute(i));
    },
    ha = Math.sqrt,
    Md = function (e, i, n, r, s, a) {
      return ha(
        Math.pow((Ai(n) - Ai(e)) * s, 2) + Math.pow((Ai(r) - Ai(i)) * a, 2)
      );
    },
    $d = function (e) {
      return console.warn(e);
    },
    Od = function (e) {
      return e.getAttribute("vector-effect") === "non-scaling-stroke";
    },
    x0 = 1,
    S0 = function (e, i, n) {
      var r = e.indexOf(" "),
        s,
        a;
      return (
        r < 0
          ? ((s = n !== void 0 ? n + "" : e), (a = e))
          : ((s = e.substr(0, r)), (a = e.substr(r + 1))),
        (s = Pd(s, i)),
        (a = Pd(a, i)),
        s > a ? [a, s] : [s, a]
      );
    },
    pa = function (e) {
      if (((e = rl(e)[0]), !e)) return 0;
      var i = e.tagName.toLowerCase(),
        n = e.style,
        r = 1,
        s = 1,
        a,
        o,
        l,
        c,
        u,
        d,
        f;
      Od(e) &&
        ((s = e.getScreenCTM()),
        (r = ha(s.a * s.a + s.b * s.b)),
        (s = ha(s.d * s.d + s.c * s.c)));
      try {
        o = e.getBBox();
      } catch {
        $d(
          "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
        );
      }
      var h = o || { x: 0, y: 0, width: 0, height: 0 },
        m = h.x,
        p = h.y,
        g = h.width,
        b = h.height;
      if (
        ((!o || (!g && !b)) &&
          al[i] &&
          ((g = fa(e, al[i][0])),
          (b = fa(e, al[i][1])),
          i !== "rect" && i !== "line" && ((g *= 2), (b *= 2)),
          i === "line" &&
            ((m = fa(e, "x1")),
            (p = fa(e, "y1")),
            (g = Math.abs(g - m)),
            (b = Math.abs(b - p)))),
        i === "path")
      )
        (c = n.strokeDasharray),
          (n.strokeDasharray = "none"),
          (a = e.getTotalLength() || 0),
          On(r) !== On(s) &&
            !Ed &&
            (Ed = 1) &&
            $d(
              "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
            ),
          (a *= (r + s) / 2),
          (n.strokeDasharray = c);
      else if (i === "rect") a = g * 2 * r + b * 2 * s;
      else if (i === "line") a = Md(m, p, m + g, p + b, r, s);
      else if (i === "polyline" || i === "polygon")
        for (
          l = e.getAttribute("points").match(w0) || [],
            i === "polygon" && l.push(l[0], l[1]),
            a = 0,
            u = 2;
          u < l.length;
          u += 2
        )
          a += Md(l[u - 2], l[u - 1], l[u], l[u + 1], r, s) || 0;
      else
        (i === "circle" || i === "ellipse") &&
          ((d = (g / 2) * r),
          (f = (b / 2) * s),
          (a = Math.PI * (3 * (d + f) - ha((3 * d + f) * (d + 3 * f)))));
      return a || 0;
    },
    zd = function (e, i) {
      if (((e = rl(e)[0]), !e)) return [0, 0];
      i || (i = pa(e) + 1);
      var n = da.getComputedStyle(e),
        r = n.strokeDasharray || "",
        s = Ai(n.strokeDashoffset),
        a = r.indexOf(",");
      return (
        a < 0 && (a = r.indexOf(" ")),
        (r = a < 0 ? i : Ai(r.substr(0, a))),
        r > i && (r = i),
        [-s || 0, r - s || 0]
      );
    },
    Ld = function () {
      kd() &&
        ((da = window),
        (Td = pi = Ad()),
        (rl = pi.utils.toArray),
        (sl = pi.core.getStyleSaver),
        (Cd = pi.core.reverting || function () {}),
        (Sd = ((da.navigator || {}).userAgent || "").indexOf("Edge") !== -1));
    },
    ol = {
      version: "3.13.0",
      name: "drawSVG",
      register: function (e) {
        (pi = e), Ld();
      },
      init: function (e, i, n, r, s) {
        if (!e.getBBox) return !1;
        Td || Ld();
        var a = pa(e),
          o,
          l,
          c;
        return (
          (this.styles =
            sl && sl(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
          (this.tween = n),
          (this._style = e.style),
          (this._target = e),
          i + "" == "true"
            ? (i = "0 100%")
            : i
            ? (i + "").indexOf(" ") === -1 && (i = "0 " + i)
            : (i = "0 0"),
          (o = zd(e, a)),
          (l = S0(i, a, o[0])),
          (this._length = On(a)),
          (this._dash = On(o[1] - o[0])),
          (this._offset = On(-o[0])),
          (this._dashPT = this.add(
            this,
            "_dash",
            this._dash,
            On(l[1] - l[0]),
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
            On(-l[0]),
            0,
            0,
            0,
            0,
            0,
            1
          )),
          Sd &&
            ((c = da.getComputedStyle(e)),
            c.strokeLinecap !== c.strokeLinejoin &&
              ((l = Ai(c.strokeMiterlimit)),
              this.add(e.style, "strokeMiterlimit", l, l + 0.01))),
          (this._live = Od(e) || ~(i + "").indexOf("live")),
          (this._nowrap = ~(i + "").indexOf("nowrap")),
          this._props.push("drawSVG"),
          x0
        );
      },
      render: function (e, i) {
        if (i.tween._time || !Cd()) {
          var n = i._pt,
            r = i._style,
            s,
            a,
            o,
            l;
          if (n) {
            for (
              i._live &&
              ((s = pa(i._target)),
              s !== i._length &&
                ((a = s / i._length),
                (i._length = s),
                i._offsetPT && ((i._offsetPT.s *= a), (i._offsetPT.c *= a)),
                i._dashPT
                  ? ((i._dashPT.s *= a), (i._dashPT.c *= a))
                  : (i._dash *= a)));
              n;

            )
              n.r(e, n.d), (n = n._next);
            (o = i._dash || (e && e !== 1 && 1e-4) || 0),
              (s = i._length - o + 0.1),
              (l = i._offset),
              o &&
                l &&
                o + Math.abs(l % i._length) > i._length - 0.05 &&
                (l += l < 0 ? 0.005 : -0.005) &&
                (s += 0.005),
              (r.strokeDashoffset = o ? l : l + 0.001),
              (r.strokeDasharray =
                s < 0.1
                  ? "none"
                  : o
                  ? o + "px," + (i._nowrap ? 999999 : s) + "px"
                  : "0px, 999999px");
          }
        } else i.styles.revert();
      },
      getLength: pa,
      getPosition: zd,
    };
  Ad() && pi.registerPlugin(ol), R.registerPlugin(_e, ol);
  const T0 = (t) => {
    const e =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
    let i, n, r;
    const s = () => {
        i && typeof i.revert == "function" && (i.revert(), (i = null)),
          n && (n.kill(), (n = null)),
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
          (i = _e.create(l, {
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
                (n = R.timeline()),
                R.set(".move-text", { opacity: 0, yPercent: 100 }),
                R.set(c, { opacity: 0, yPercent: 20, scale: 0 }),
                R.set(u, { opacity: 0 }),
                R.set(d, { drawSVG: 0 }),
                n.to(u, { opacity: 1, duration: 0, ease: "power1.out" }),
                n.to(
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
                n.to(
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
                n.to(
                  d,
                  {
                    opacity: 1,
                    drawSVG: "100%",
                    duration: 5,
                    ease: "expo.inOut",
                  },
                  "-=2.2"
                ),
                n
              );
            },
          }));
      },
      o = () => {
        e ||
          (clearTimeout(r),
          (r = setTimeout(() => {
            s(),
              setTimeout(() => {
                a();
              }, 100);
          }, 250)));
      };
    a(), e || window.addEventListener("resize", o);
  };
  R.registerPlugin(ol, X);
  const E0 = () => {
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
    C0 = () => {
      E0();
    },
    k0 = () => {
      _0(), Zi(), Qi(), C0();
      const t = Mn();
      t.add(() => Ki(), "-=1"), t.add(() => T0(), "-=1");
    },
    A0 = () => {
      const t = document.querySelectorAll("[service-item]"),
        e = document.querySelector("[hero-gradient='main']"),
        i = document.querySelectorAll("[hero-gradient]");
      if (!t.length || !e) return;
      let n = !1,
        r = null,
        s = null;
      const a = () => {
          i.forEach((d) => {
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
            i.forEach((h) => {
              const m = h.getAttribute("hero-gradient");
              m !== "main" && m !== d && R.to(h, { opacity: 0, duration: 0.5 });
            }),
            R.to(f, { opacity: 1, duration: 0.5 }));
        };
      R.set(e, { opacity: 1 }),
        i.forEach((d) => {
          d.getAttribute("hero-gradient") !== "main" &&
            R.set(d, { opacity: 0 });
        });
      const l = new Map(),
        c = new IntersectionObserver(
          (d) => {
            if (n) return;
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
              (n = !0),
              d ? o(d) : (a(), (s = null)),
              (r = setTimeout(() => {
                n = !1;
              }, 1e3));
          },
          showMainGradient: a,
        }
      );
    },
    P0 = () => A0();
  /*!
   * matrix 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Pi,
    zn,
    ll,
    ma,
    cs,
    ga,
    va,
    us,
    Qt = "transform",
    cl = Qt + "Origin",
    Id,
    ul = function (e) {
      var i = e.ownerDocument || e;
      for (
        !(Qt in e.style) &&
        ("msTransform" in e.style) &&
        ((Qt = "msTransform"), (cl = Qt + "Origin"));
        i.parentNode && (i = i.parentNode);

      );
      if (((zn = window), (va = new Ln()), i)) {
        (Pi = i),
          (ll = i.documentElement),
          (ma = i.body),
          (us = Pi.createElementNS("http://www.w3.org/2000/svg", "g")),
          (us.style.transform = "none");
        var n = i.createElement("div"),
          r = i.createElement("div"),
          s = i && (i.body || i.firstElementChild);
        s &&
          s.appendChild &&
          (s.appendChild(n),
          n.appendChild(r),
          n.setAttribute(
            "style",
            "position:static;transform:translate3d(0,0,1px)"
          ),
          (Id = r.offsetParent !== n),
          s.removeChild(n));
      }
      return i;
    },
    M0 = function (e) {
      for (var i, n; e && e !== ma; )
        (n = e._gsap),
          n && n.uncache && n.get(e, "x"),
          n &&
            !n.scaleX &&
            !n.scaleY &&
            n.renderTransform &&
            ((n.scaleX = n.scaleY = 1e-4),
            n.renderTransform(1, n),
            i ? i.push(n) : (i = [n])),
          (e = e.parentNode);
      return i;
    },
    Dd = [],
    Rd = [],
    dl = function () {
      return (
        zn.pageYOffset || Pi.scrollTop || ll.scrollTop || ma.scrollTop || 0
      );
    },
    fl = function () {
      return (
        zn.pageXOffset || Pi.scrollLeft || ll.scrollLeft || ma.scrollLeft || 0
      );
    },
    hl = function (e) {
      return (
        e.ownerSVGElement ||
        ((e.tagName + "").toLowerCase() === "svg" ? e : null)
      );
    },
    $0 = function t(e) {
      if (zn.getComputedStyle(e).position === "fixed") return !0;
      if (((e = e.parentNode), e && e.nodeType === 1)) return t(e);
    },
    pl = function t(e, i) {
      if (e.parentNode && (Pi || ul(e))) {
        var n = hl(e),
          r = n
            ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
            : "http://www.w3.org/1999/xhtml",
          s = n ? (i ? "rect" : "g") : "div",
          a = i !== 2 ? 0 : 100,
          o = i === 3 ? 100 : 0,
          l =
            "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
          c = Pi.createElementNS
            ? Pi.createElementNS(r.replace(/^https/, "http"), s)
            : Pi.createElement(s);
        return (
          i &&
            (n
              ? (ga || (ga = t(e)),
                c.setAttribute("width", 0.01),
                c.setAttribute("height", 0.01),
                c.setAttribute("transform", "translate(" + a + "," + o + ")"),
                ga.appendChild(c))
              : (cs || ((cs = t(e)), (cs.style.cssText = l)),
                (c.style.cssText =
                  l +
                  "width:0.1px;height:0.1px;top:" +
                  o +
                  "px;left:" +
                  a +
                  "px"),
                cs.appendChild(c))),
          c
        );
      }
      throw "Need document and parent.";
    },
    O0 = function (e) {
      for (var i = new Ln(), n = 0; n < e.numberOfItems; n++)
        i.multiply(e.getItem(n).matrix);
      return i;
    },
    Nd = function (e) {
      var i = e.getCTM(),
        n;
      return (
        i ||
          ((n = e.style[Qt]),
          (e.style[Qt] = "none"),
          e.appendChild(us),
          (i = us.getCTM()),
          e.removeChild(us),
          n
            ? (e.style[Qt] = n)
            : e.style.removeProperty(
                Qt.replace(/([A-Z])/g, "-$1").toLowerCase()
              )),
        i || va.clone()
      );
    },
    z0 = function (e, i) {
      var n = hl(e),
        r = e === n,
        s = n ? Dd : Rd,
        a = e.parentNode,
        o =
          a && !n && a.shadowRoot && a.shadowRoot.appendChild
            ? a.shadowRoot
            : a,
        l,
        c,
        u,
        d,
        f,
        h;
      if (e === zn) return e;
      if (
        (s.length || s.push(pl(e, 1), pl(e, 2), pl(e, 3)), (l = n ? ga : cs), n)
      )
        r
          ? ((u = Nd(e)), (d = -u.e / u.a), (f = -u.f / u.d), (c = va))
          : e.getBBox
          ? ((u = e.getBBox()),
            (c = e.transform ? e.transform.baseVal : {}),
            (c = c.numberOfItems
              ? c.numberOfItems > 1
                ? O0(c)
                : c.getItem(0).matrix
              : va),
            (d = c.a * u.x + c.c * u.y),
            (f = c.b * u.x + c.d * u.y))
          : ((c = new Ln()), (d = f = 0)),
          i && e.tagName.toLowerCase() === "g" && (d = f = 0),
          (r ? n : a).appendChild(l),
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
        if (((d = f = 0), Id))
          for (
            c = e.offsetParent, u = e;
            u && (u = u.parentNode) && u !== c && u.parentNode;

          )
            (zn.getComputedStyle(u)[Qt] + "").length > 4 &&
              ((d = u.offsetLeft), (f = u.offsetTop), (u = 0));
        if (
          ((h = zn.getComputedStyle(e)),
          h.position !== "absolute" && h.position !== "fixed")
        )
          for (c = e.offsetParent; a && a !== c; )
            (d += a.scrollLeft || 0),
              (f += a.scrollTop || 0),
              (a = a.parentNode);
        (u = l.style),
          (u.top = e.offsetTop - f + "px"),
          (u.left = e.offsetLeft - d + "px"),
          (u[Qt] = h[Qt]),
          (u[cl] = h[cl]),
          (u.position = h.position === "fixed" ? "fixed" : "absolute"),
          o.appendChild(l);
      }
      return l;
    },
    ml = function (e, i, n, r, s, a, o) {
      return (
        (e.a = i), (e.b = n), (e.c = r), (e.d = s), (e.e = a), (e.f = o), e
      );
    },
    Ln = (function () {
      function t(i, n, r, s, a, o) {
        i === void 0 && (i = 1),
          n === void 0 && (n = 0),
          r === void 0 && (r = 0),
          s === void 0 && (s = 1),
          a === void 0 && (a = 0),
          o === void 0 && (o = 0),
          ml(this, i, n, r, s, a, o);
      }
      var e = t.prototype;
      return (
        (e.inverse = function () {
          var n = this.a,
            r = this.b,
            s = this.c,
            a = this.d,
            o = this.e,
            l = this.f,
            c = n * a - r * s || 1e-10;
          return ml(
            this,
            a / c,
            -r / c,
            -s / c,
            n / c,
            (s * l - a * o) / c,
            -(n * l - r * o) / c
          );
        }),
        (e.multiply = function (n) {
          var r = this.a,
            s = this.b,
            a = this.c,
            o = this.d,
            l = this.e,
            c = this.f,
            u = n.a,
            d = n.c,
            f = n.b,
            h = n.d,
            m = n.e,
            p = n.f;
          return ml(
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
        (e.equals = function (n) {
          var r = this.a,
            s = this.b,
            a = this.c,
            o = this.d,
            l = this.e,
            c = this.f;
          return (
            r === n.a &&
            s === n.b &&
            a === n.c &&
            o === n.d &&
            l === n.e &&
            c === n.f
          );
        }),
        (e.apply = function (n, r) {
          r === void 0 && (r = {});
          var s = n.x,
            a = n.y,
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
  function mi(t, e, i, n) {
    if (!t || !t.parentNode || (Pi || ul(t)).documentElement === t)
      return new Ln();
    var r = M0(t),
      s = hl(t),
      a = s ? Dd : Rd,
      o = z0(t, i),
      l = a[0].getBoundingClientRect(),
      c = a[1].getBoundingClientRect(),
      u = a[2].getBoundingClientRect(),
      d = o.parentNode,
      f = !n && $0(t),
      h = new Ln(
        (c.left - l.left) / 100,
        (c.top - l.top) / 100,
        (u.left - l.left) / 100,
        (u.top - l.top) / 100,
        l.left + (f ? 0 : fl()),
        l.top + (f ? 0 : dl())
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
   */ var L0 = 1,
    pr,
    ot,
    ye,
    ds,
    en,
    Mi,
    gl,
    Bd = function (e, i) {
      return e.actions.forEach(function (n) {
        return n.vars[i] && n.vars[i](n);
      });
    },
    vl = {},
    Fd = 180 / Math.PI,
    I0 = Math.PI / 180,
    ya = {},
    Vd = {},
    ba = {},
    yl = function (e) {
      return typeof e == "string" ? e.split(" ").join("").split(",") : e;
    },
    D0 = yl("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
    _a = yl(
      "transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"
    ),
    fs = function (e) {
      return pr(e)[0] || console.warn("Element not found:", e);
    },
    mr = function (e) {
      return Math.round(e * 1e4) / 1e4 || 0;
    },
    bl = function (e, i, n) {
      return e.forEach(function (r) {
        return r.classList[n](i);
      });
    },
    qd = {
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
    Hd = {
      zIndex: 1,
      simple: 1,
      clearProps: 1,
      scale: 1,
      absolute: 1,
      fitChild: 1,
      getVars: 1,
      props: 1,
    },
    Yd = function (e) {
      return e.replace(/([A-Z])/g, "-$1").toLowerCase();
    },
    gr = function (e, i) {
      var n = {},
        r;
      for (r in e) i[r] || (n[r] = e[r]);
      return n;
    },
    _l = {},
    Wd = function (e) {
      var i = (_l[e] = yl(e));
      return (ba[e] = i.concat(_a)), i;
    },
    R0 = function (e) {
      var i = e._gsap || ot.core.getCache(e);
      return i.gmCache === ot.ticker.frame
        ? i.gMatrix
        : ((i.gmCache = ot.ticker.frame), (i.gMatrix = mi(e, !0, !1, !0)));
    },
    N0 = function t(e, i, n) {
      n === void 0 && (n = 0);
      for (
        var r = e.parentNode,
          s = 1e3 * Math.pow(10, n) * (i ? -1 : 1),
          a = i ? -s * 900 : 0;
        e;

      )
        (a += s), (e = e.previousSibling);
      return r ? a + t(r, i, n + 1) : a;
    },
    wa = function (e, i, n) {
      return (
        e.forEach(function (r) {
          return (r.d = N0(n ? r.element : r.t, i));
        }),
        e.sort(function (r, s) {
          return r.d - s.d;
        }),
        e
      );
    },
    hs = function (e, i) {
      for (
        var n = e.element.style, r = (e.css = e.css || []), s = i.length, a, o;
        s--;

      )
        (a = i[s]),
          (o = n[a] || n.getPropertyValue(a)),
          r.push(o ? a : Vd[a] || (Vd[a] = Yd(a)), o);
      return n;
    },
    xa = function (e) {
      var i = e.css,
        n = e.element.style,
        r = 0;
      for (e.cache.uncache = 1; r < i.length; r += 2)
        i[r + 1] ? (n[i[r]] = i[r + 1]) : n.removeProperty(i[r]);
      !i[i.indexOf("transform") + 1] &&
        n.translate &&
        (n.removeProperty("translate"),
        n.removeProperty("scale"),
        n.removeProperty("rotate"));
    },
    Gd = function (e, i) {
      e.forEach(function (n) {
        return (n.a.cache.uncache = 1);
      }),
        i || e.finalStates.forEach(xa);
    },
    wl =
      "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(
        ","
      ),
    xl = function (e, i, n) {
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
      if ((typeof i != "object" && (i = e), ye && n !== 1))
        return (
          ye._abs.push({ t: r, b: e, a: e, sd: 0 }),
          ye._final.push(function () {
            return (e.cache.uncache = 1) && xa(e);
          }),
          r
        );
      for (
        f = l("display") === "none",
          (!e.isVisible || f) &&
            (f && (hs(e, ["display"]).display = i.display),
            (e.matrix = i.matrix),
            (e.width = s = e.width || i.width),
            (e.height = a = e.height || i.height)),
          hs(e, wl),
          h = window.getComputedStyle(r);
        u--;

      )
        c[wl[u]] = h[wl[u]];
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
        d = new In(r);
      else if (((d = gr(e, ya)), (d.position = "absolute"), e.simple)) {
        var m = r.getBoundingClientRect();
        d.matrix = new Ln(1, 0, 0, 1, m.left + fl(), m.top + dl());
      } else d.matrix = mi(r, !1, !1, !0);
      return (
        (d = vr(d, e, !0)), (e.x = Mi(d.x, 0.01)), (e.y = Mi(d.y, 0.01)), r
      );
    },
    Xd = function (e, i) {
      return (
        i !== !0 &&
          ((i = pr(i)),
          (e = e.filter(function (n) {
            if (i.indexOf((n.sd < 0 ? n.b : n.a).element) !== -1) return !0;
            n.t._gsap.renderTransform(1),
              n.b.isVisible &&
                ((n.t.style.width = n.b.width + "px"),
                (n.t.style.height = n.b.height + "px"));
          }))),
        e
      );
    },
    jd = function (e) {
      return wa(e, !0).forEach(function (i) {
        return (
          (i.a.isVisible || i.b.isVisible) && xl(i.sd < 0 ? i.b : i.a, i.b, 1)
        );
      });
    },
    B0 = function (e, i) {
      return (i && e.idLookup[Sl(i).id]) || e.elementStates[0];
    },
    Sl = function (e, i, n, r) {
      return e instanceof In
        ? e
        : e instanceof Kt
        ? B0(e, r)
        : new In(
            typeof e == "string" ? fs(e) || console.warn(e + " not found") : e,
            i,
            n
          );
    },
    F0 = function (e, i) {
      for (
        var n = ot.getProperty(e.element, null, "native"),
          r = (e.props = {}),
          s = i.length;
        s--;

      )
        r[i[s]] = (n(i[s]) + "").trim();
      return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), e;
    },
    Ud = function (e, i) {
      var n = e.style || e,
        r;
      for (r in i) n[r] = i[r];
    },
    V0 = function (e) {
      var i = e.getAttribute("data-flip-id");
      return i || e.setAttribute("data-flip-id", (i = "auto-" + L0++)), i;
    },
    Zd = function (e) {
      return e.map(function (i) {
        return i.element;
      });
    },
    Qd = function (e, i, n) {
      return e && i.length && n.add(e(Zd(i), n, new Kt(i, 0, !0)), 0);
    },
    vr = function (e, i, n, r, s, a) {
      var o = e.element,
        l = e.cache,
        c = e.parent,
        u = e.x,
        d = e.y,
        f = i.width,
        h = i.height,
        m = i.scaleX,
        p = i.scaleY,
        g = i.rotation,
        b = i.bounds,
        v = a && gl && gl(o, "transform,width,height"),
        y = e,
        _ = i.matrix,
        x = _.e,
        T = _.f,
        E =
          e.bounds.width !== b.width ||
          e.bounds.height !== b.height ||
          e.scaleX !== m ||
          e.scaleY !== p ||
          e.rotation !== g,
        C = !E && e.simple && i.simple && !s,
        $,
        k,
        M,
        w,
        S,
        O,
        z;
      return (
        C || !c
          ? ((m = p = 1), (g = $ = 0))
          : ((S = R0(c)),
            (O = S.clone().multiply(
              i.ctm ? i.matrix.clone().multiply(i.ctm) : i.matrix
            )),
            (g = mr(Math.atan2(O.b, O.a) * Fd)),
            ($ = mr(Math.atan2(O.c, O.d) * Fd + g) % 360),
            (m = Math.sqrt(Math.pow(O.a, 2) + Math.pow(O.b, 2))),
            (p =
              Math.sqrt(Math.pow(O.c, 2) + Math.pow(O.d, 2)) *
              Math.cos($ * I0)),
            s &&
              ((s = pr(s)[0]),
              (w = ot.getProperty(s)),
              (z = s.getBBox && typeof s.getBBox == "function" && s.getBBox()),
              (y = {
                scaleX: w("scaleX"),
                scaleY: w("scaleY"),
                width: z ? z.width : Math.ceil(parseFloat(w("width", "px"))),
                height: z ? z.height : parseFloat(w("height", "px")),
              })),
            (l.rotation = g + "deg"),
            (l.skewX = $ + "deg")),
        n
          ? ((m *= f === y.width || !y.width ? 1 : f / y.width),
            (p *= h === y.height || !y.height ? 1 : h / y.height),
            (l.scaleX = m),
            (l.scaleY = p))
          : ((f = Mi((f * m) / y.scaleX, 0)),
            (h = Mi((h * p) / y.scaleY, 0)),
            (o.style.width = f + "px"),
            (o.style.height = h + "px")),
        r && Ud(o, i.props),
        C || !c
          ? ((u += x - e.matrix.e), (d += T - e.matrix.f))
          : E || c !== i.parent
          ? (l.renderTransform(1, l),
            (O = mi(s || o, !1, !1, !0)),
            (k = S.apply({ x: O.e, y: O.f })),
            (M = S.apply({ x, y: T })),
            (u += M.x - k.x),
            (d += M.y - k.y))
          : ((S.e = S.f = 0),
            (M = S.apply({ x: x - e.matrix.e, y: T - e.matrix.f })),
            (u += M.x),
            (d += M.y)),
        (u = Mi(u, 0.02)),
        (d = Mi(d, 0.02)),
        a && !(a instanceof In)
          ? v && v.revert()
          : ((l.x = u + "px"), (l.y = d + "px"), l.renderTransform(1, l)),
        a &&
          ((a.x = u),
          (a.y = d),
          (a.rotation = g),
          (a.skewX = $),
          n
            ? ((a.scaleX = m), (a.scaleY = p))
            : ((a.width = f), (a.height = h))),
        a || l
      );
    },
    Tl = function (e, i) {
      return e instanceof Kt ? e : new Kt(e, i);
    },
    Kd = function (e, i, n) {
      var r = e.idLookup[n],
        s = e.alt[n];
      return s.isVisible &&
        (!(i.getElementState(s.element) || s).isVisible || !r.isVisible)
        ? s
        : r;
    },
    El = [],
    Cl = "width,height,overflowX,overflowY".split(","),
    Sa,
    Jd = function (e) {
      if (e !== Sa) {
        var i = en.style,
          n = en.clientWidth === window.outerWidth,
          r = en.clientHeight === window.outerHeight,
          s = 4;
        if (e && (n || r)) {
          for (; s--; ) El[s] = i[Cl[s]];
          n && ((i.width = en.clientWidth + "px"), (i.overflowY = "hidden")),
            r &&
              ((i.height = en.clientHeight + "px"), (i.overflowX = "hidden")),
            (Sa = e);
        } else if (Sa) {
          for (; s--; )
            El[s] ? (i[Cl[s]] = El[s]) : i.removeProperty(Yd(Cl[s]));
          Sa = e;
        }
      }
    },
    kl = function (e, i, n, r) {
      (e instanceof Kt && i instanceof Kt) ||
        console.warn("Not a valid state object."),
        (n = n || {});
      var s = n,
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
        b = s.toggleClass,
        v = s.nested,
        y = s.zIndex,
        _ = s.scale,
        x = s.fade,
        T = s.stagger,
        E = s.spin,
        C = s.prune,
        $ = ("props" in n ? n : e).props,
        k = gr(n, qd),
        M = ot.timeline({
          delay: f,
          paused: h,
          repeat: m,
          repeatDelay: p,
          yoyo: g,
          data: "isFlip",
        }),
        w = k,
        S = [],
        O = [],
        z = [],
        A = [],
        L = E === !0 ? 1 : E || 0,
        I =
          typeof E == "function"
            ? E
            : function () {
                return L;
              },
        B = e.interrupted || i.interrupted,
        P = M[r !== 1 ? "to" : "from"],
        q,
        G,
        oe,
        ne,
        Z,
        Q,
        de,
        he,
        Te,
        $e,
        fe,
        Ee,
        Y,
        te;
      for (G in i.idLookup)
        (fe = i.alt[G] ? Kd(i, e, G) : i.idLookup[G]),
          (Z = fe.element),
          ($e = e.idLookup[G]),
          e.alt[G] &&
            Z === $e.element &&
            (e.alt[G].isVisible || !fe.isVisible) &&
            ($e = e.alt[G]),
          $e
            ? ((Q = {
                t: Z,
                b: $e,
                a: fe,
                sd: $e.element === Z ? 0 : fe.isVisible ? 1 : -1,
              }),
              z.push(Q),
              Q.sd &&
                (Q.sd < 0 && ((Q.b = fe), (Q.a = $e)),
                B && hs(Q.b, $ ? ba[$] : _a),
                x &&
                  z.push(
                    (Q.swap = {
                      t: $e.element,
                      b: Q.b,
                      a: Q.a,
                      sd: -Q.sd,
                      swap: Q,
                    })
                  )),
              (Z._flip = $e.element._flip = ye ? ye.timeline : M))
            : fe.isVisible &&
              (z.push({
                t: Z,
                b: gr(fe, { isVisible: 1 }),
                a: fe,
                sd: 0,
                entering: 1,
              }),
              (Z._flip = ye ? ye.timeline : M));
      if (
        ($ &&
          (_l[$] || Wd($)).forEach(function (D) {
            return (k[D] = function (Le) {
              return z[Le].a.props[D];
            });
          }),
        (z.finalStates = Te = []),
        (Ee = function () {
          for (wa(z), Jd(!0), ne = 0; ne < z.length; ne++)
            (Q = z[ne]),
              (Y = Q.a),
              (te = Q.b),
              C && !Y.isDifferent(te) && !Q.entering
                ? z.splice(ne--, 1)
                : ((Z = Q.t),
                  v && !(Q.sd < 0) && ne && (Y.matrix = mi(Z, !1, !1, !0)),
                  te.isVisible && Y.isVisible
                    ? (Q.sd < 0
                        ? ((de = new In(Z, $, e.simple)),
                          vr(de, Y, _, 0, 0, de),
                          (de.matrix = mi(Z, !1, !1, !0)),
                          (de.css = Q.b.css),
                          (Q.a = Y = de),
                          x && (Z.style.opacity = B ? te.opacity : Y.opacity),
                          T && A.push(Z))
                        : Q.sd > 0 &&
                          x &&
                          (Z.style.opacity = B ? Y.opacity - te.opacity : "0"),
                      vr(Y, te, _, $))
                    : te.isVisible !== Y.isVisible &&
                      (te.isVisible
                        ? Y.isVisible ||
                          ((te.css = Y.css),
                          O.push(te),
                          z.splice(ne--, 1),
                          c && v && vr(Y, te, _, $))
                        : (Y.isVisible && S.push(Y), z.splice(ne--, 1))),
                  _ ||
                    ((Z.style.maxWidth = Math.max(Y.width, te.width) + "px"),
                    (Z.style.maxHeight = Math.max(Y.height, te.height) + "px"),
                    (Z.style.minWidth = Math.min(Y.width, te.width) + "px"),
                    (Z.style.minHeight = Math.min(Y.height, te.height) + "px")),
                  v && b && Z.classList.add(b)),
              Te.push(Y);
          var Le;
          if (
            (b &&
              ((Le = Te.map(function (H) {
                return H.element;
              })),
              v &&
                Le.forEach(function (H) {
                  return H.classList.remove(b);
                })),
            Jd(!1),
            _
              ? ((k.scaleX = function (H) {
                  return z[H].a.scaleX;
                }),
                (k.scaleY = function (H) {
                  return z[H].a.scaleY;
                }))
              : ((k.width = function (H) {
                  return z[H].a.width + "px";
                }),
                (k.height = function (H) {
                  return z[H].a.height + "px";
                }),
                (k.autoRound = n.autoRound || !1)),
            (k.x = function (H) {
              return z[H].a.x + "px";
            }),
            (k.y = function (H) {
              return z[H].a.y + "px";
            }),
            (k.rotation = function (H) {
              return z[H].a.rotation + (E ? I(H, he[H], he) * 360 : 0);
            }),
            (k.skewX = function (H) {
              return z[H].a.skewX;
            }),
            (he = z.map(function (H) {
              return H.t;
            })),
            (y || y === 0) &&
              ((k.modifiers = {
                zIndex: function () {
                  return y;
                },
              }),
              (k.zIndex = y),
              (k.immediateRender = n.immediateRender !== !1)),
            x &&
              (k.opacity = function (H) {
                return z[H].sd < 0 ? 0 : z[H].sd > 0 ? z[H].a.opacity : "+=0";
              }),
            A.length)
          ) {
            T = ot.utils.distribute(T);
            var Jt = he.slice(A.length);
            k.stagger = function (H, jt) {
              return T(~A.indexOf(jt) ? he.indexOf(z[H].swap.t) : H, jt, Jt);
            };
          }
          if (
            (D0.forEach(function (H) {
              return n[H] && M.eventCallback(H, n[H], n[H + "Params"]);
            }),
            d && he.length)
          ) {
            (w = gr(k, qd)),
              "scale" in d && ((d.scaleX = d.scaleY = d.scale), delete d.scale);
            for (G in d)
              (q = gr(d[G], Hd)),
                (q[G] = k[G]),
                !("duration" in q) &&
                  "duration" in k &&
                  (q.duration = k.duration),
                (q.stagger = k.stagger),
                P.call(M, he, q, 0),
                delete w[G];
          }
          (he.length || O.length || S.length) &&
            (b &&
              M.add(function () {
                return bl(Le, b, M._zTime < 0 ? "remove" : "add");
              }, 0) &&
              !h &&
              bl(Le, b, "add"),
            he.length && P.call(M, he, w, 0)),
            Qd(o, S, M),
            Qd(l, O, M);
          var Xt = ye && ye.timeline;
          Xt &&
            (Xt.add(M, 0),
            ye._final.push(function () {
              return Gd(z, !a);
            })),
            (oe = M.duration()),
            M.call(function () {
              var H = M.time() >= oe;
              H && !Xt && Gd(z, !a), b && bl(Le, b, H ? "remove" : "add");
            });
        }),
        u &&
          (c = z
            .filter(function (D) {
              return !D.sd && !D.a.isVisible && D.b.isVisible;
            })
            .map(function (D) {
              return D.a.element;
            })),
        ye)
      ) {
        var Oe;
        c && (Oe = ye._abs).push.apply(Oe, Xd(z, c)), ye._run.push(Ee);
      } else c && jd(Xd(z, c)), Ee();
      var ze = ye ? ye.timeline : M;
      return (
        (ze.revert = function () {
          return Al(ze, 1, 1);
        }),
        ze
      );
    },
    q0 = function t(e) {
      e.vars.onInterrupt &&
        e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []),
        e.getChildren(!0, !1, !0).forEach(t);
    },
    Al = function (e, i, n) {
      if (e && e.progress() < 1 && (!e.paused() || n))
        return i && (q0(e), i < 2 && e.progress(1), e.kill()), !0;
    },
    Ta = function (e) {
      for (
        var i = (e.idLookup = {}),
          n = (e.alt = {}),
          r = e.elementStates,
          s = r.length,
          a;
        s--;

      )
        (a = r[s]), i[a.id] ? (n[a.id] = a) : (i[a.id] = a);
    },
    Kt = (function () {
      function t(i, n, r) {
        if (((this.props = n && n.props), (this.simple = !!(n && n.simple)), r))
          (this.targets = Zd(i)), (this.elementStates = i), Ta(this);
        else {
          this.targets = pr(i);
          var s = n && (n.kill === !1 || (n.batch && !n.kill));
          ye && !s && ye._kill.push(this), this.update(s || !!ye);
        }
      }
      var e = t.prototype;
      return (
        (e.update = function (n) {
          var r = this;
          return (
            (this.elementStates = this.targets.map(function (s) {
              return new In(s, r.props, r.simple);
            })),
            Ta(this),
            this.interrupt(n),
            this.recordInlineStyles(),
            this
          );
        }),
        (e.clear = function () {
          return (
            (this.targets.length = this.elementStates.length = 0),
            Ta(this),
            this
          );
        }),
        (e.fit = function (n, r, s) {
          for (
            var a = wa(this.elementStates.slice(0), !1, !0),
              o = (n || this).idLookup,
              l = 0,
              c,
              u;
            l < a.length;
            l++
          )
            (c = a[l]),
              s && (c.matrix = mi(c.element, !1, !1, !0)),
              (u = o[c.id]),
              u && vr(c, u, r, !0, 0, c),
              (c.matrix = mi(c.element, !1, !1, !0));
          return this;
        }),
        (e.getProperty = function (n, r) {
          var s = this.getElementState(n) || ya;
          return (r in s ? s : s.props || ya)[r];
        }),
        (e.add = function (n) {
          for (
            var r = n.targets.length, s = this.idLookup, a = this.alt, o, l, c;
            r--;

          )
            (l = n.elementStates[r]),
              (c = s[l.id]),
              c &&
              (l.element === c.element ||
                (a[l.id] && a[l.id].element === l.element))
                ? ((o = this.elementStates.indexOf(
                    l.element === c.element ? c : a[l.id]
                  )),
                  this.targets.splice(o, 1, n.targets[r]),
                  this.elementStates.splice(o, 1, l))
                : (this.targets.push(n.targets[r]), this.elementStates.push(l));
          return (
            n.interrupted && (this.interrupted = !0),
            n.simple || (this.simple = !1),
            Ta(this),
            this
          );
        }),
        (e.compare = function (n) {
          var r = n.idLookup,
            s = this.idLookup,
            a = [],
            o = [],
            l = [],
            c = [],
            u = [],
            d = n.alt,
            f = this.alt,
            h = function (C, $, k) {
              return (
                (C.isVisible !== $.isVisible
                  ? C.isVisible
                    ? l
                    : c
                  : C.isVisible
                  ? o
                  : a
                ).push(k) && u.push(k)
              );
            },
            m = function (C, $, k) {
              return u.indexOf(k) < 0 && h(C, $, k);
            },
            p,
            g,
            b,
            v,
            y,
            _,
            x,
            T;
          for (b in r)
            (y = d[b]),
              (_ = f[b]),
              (p = y ? Kd(n, this, b) : r[b]),
              (v = p.element),
              (g = s[b]),
              _
                ? ((T =
                    g.isVisible || (!_.isVisible && v === g.element) ? g : _),
                  (x =
                    y && !p.isVisible && !y.isVisible && T.element === y.element
                      ? y
                      : p),
                  x.isVisible && T.isVisible && x.element !== T.element
                    ? ((x.isDifferent(T) ? o : a).push(x.element, T.element),
                      u.push(x.element, T.element))
                    : h(x, T, x.element),
                  y && x.element === y.element && (y = r[b]),
                  m(x.element !== g.element && y ? y : x, g, g.element),
                  m(y && y.element === _.element ? y : x, _, _.element),
                  y && m(y, _.element === y.element ? _ : g, y.element))
                : (g ? (g.isDifferent(p) ? h(p, g, v) : a.push(v)) : l.push(v),
                  y && m(y, g, y.element));
          for (b in s)
            r[b] || (c.push(s[b].element), f[b] && c.push(f[b].element));
          return { changed: o, unchanged: a, enter: l, leave: c };
        }),
        (e.recordInlineStyles = function () {
          for (
            var n = ba[this.props] || _a, r = this.elementStates.length;
            r--;

          )
            hs(this.elementStates[r], n);
        }),
        (e.interrupt = function (n) {
          var r = this,
            s = [];
          this.targets.forEach(function (a) {
            var o = a._flip,
              l = Al(o, n ? 0 : 1);
            n &&
              l &&
              s.indexOf(o) < 0 &&
              o.add(function () {
                return r.updateVisibility();
              }),
              l && s.push(o);
          }),
            !n && s.length && this.updateVisibility(),
            this.interrupted || (this.interrupted = !!s.length);
        }),
        (e.updateVisibility = function () {
          this.elementStates.forEach(function (n) {
            var r = n.element.getBoundingClientRect();
            (n.isVisible = !!(r.width || r.height || r.top || r.left)),
              (n.uncache = 1);
          });
        }),
        (e.getElementState = function (n) {
          return this.elementStates[this.targets.indexOf(fs(n))];
        }),
        (e.makeAbsolute = function () {
          return wa(this.elementStates.slice(0), !0, !0).map(xl);
        }),
        t
      );
    })(),
    In = (function () {
      function t(i, n, r) {
        (this.element = i), this.update(n, r);
      }
      var e = t.prototype;
      return (
        (e.isDifferent = function (n) {
          var r = this.bounds,
            s = n.bounds;
          return (
            r.top !== s.top ||
            r.left !== s.left ||
            r.width !== s.width ||
            r.height !== s.height ||
            !this.matrix.equals(n.matrix) ||
            this.opacity !== n.opacity ||
            (this.props &&
              n.props &&
              JSON.stringify(this.props) !== JSON.stringify(n.props))
          );
        }),
        (e.update = function (n, r) {
          var s = this,
            a = s.element,
            o = ot.getProperty(a),
            l = ot.core.getCache(a),
            c = a.getBoundingClientRect(),
            u =
              a.getBBox &&
              typeof a.getBBox == "function" &&
              a.nodeName.toLowerCase() !== "svg" &&
              a.getBBox(),
            d = r
              ? new Ln(1, 0, 0, 1, c.left + fl(), c.top + dl())
              : mi(a, !1, !1, !0);
          (l.uncache = 1),
            (s.getProp = o),
            (s.element = a),
            (s.id = V0(a)),
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
            (s.width = u ? u.width : Mi(o("width", "px"), 0.04)),
            (s.height = u ? u.height : Mi(o("height", "px"), 0.04)),
            n && F0(s, _l[n] || Wd(n)),
            (s.ctm =
              a.getCTM &&
              a.nodeName.toLowerCase() === "svg" &&
              Nd(a).inverse()),
            (s.simple =
              r || (mr(d.a) === 1 && !mr(d.b) && !mr(d.c) && mr(d.d) === 1)),
            (s.uncache = 0);
        }),
        t
      );
    })(),
    H0 = (function () {
      function t(i, n) {
        (this.vars = i),
          (this.batch = n),
          (this.states = []),
          (this.timeline = n.timeline);
      }
      var e = t.prototype;
      return (
        (e.getStateById = function (n) {
          for (var r = this.states.length; r--; )
            if (this.states[r].idLookup[n]) return this.states[r];
        }),
        (e.kill = function () {
          this.batch.remove(this);
        }),
        t
      );
    })(),
    Y0 = (function () {
      function t(i) {
        (this.id = i),
          (this.actions = []),
          (this._kill = []),
          (this._final = []),
          (this._abs = []),
          (this._run = []),
          (this.data = {}),
          (this.state = new Kt()),
          (this.timeline = ot.timeline());
      }
      var e = t.prototype;
      return (
        (e.add = function (n) {
          var r = this.actions.filter(function (s) {
            return s.vars === n;
          });
          return r.length
            ? r[0]
            : ((r = new H0(typeof n == "function" ? { animate: n } : n, this)),
              this.actions.push(r),
              r);
        }),
        (e.remove = function (n) {
          var r = this.actions.indexOf(n);
          return r >= 0 && this.actions.splice(r, 1), this;
        }),
        (e.getState = function (n) {
          var r = this,
            s = ye,
            a = ds;
          return (
            (ye = this),
            this.state.clear(),
            (this._kill.length = 0),
            this.actions.forEach(function (o) {
              o.vars.getState &&
                ((o.states.length = 0),
                (ds = o),
                (o.state = o.vars.getState(o))),
                n &&
                  o.states.forEach(function (l) {
                    return r.state.add(l);
                  });
            }),
            (ds = a),
            (ye = s),
            this.killConflicts(),
            this
          );
        }),
        (e.animate = function () {
          var n = this,
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
                  ((h = new Kt()),
                  c.states.forEach(function (p) {
                    return h.add(p);
                  }),
                  (m = h.compare(yr.getState(f))),
                  m.enter.length && u && u(m.enter),
                  m.leave.length && d && d(m.leave));
              }),
              jd(this._abs),
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
                  Bd(n, "onComplete"));
              }),
              ye = r;
            a--;

          )
            this.actions[a].vars.once && this.actions[a].kill();
          return Bd(this, "onStart"), s.restart(), this;
        }),
        (e.loadState = function (n) {
          n ||
            (n = function () {
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
                      ~a && (r.splice(a, 1), r.length || n());
                  };
                r.push(o), s.vars.loadState(o);
              }
            }),
            r.length || n(),
            this
          );
        }),
        (e.setState = function () {
          return (
            this.actions.forEach(function (n) {
              return (n.targets = n.vars.setState && n.vars.setState(n));
            }),
            this
          );
        }),
        (e.killConflicts = function (n) {
          return (
            this.state.interrupt(n),
            this._kill.forEach(function (r) {
              return r.interrupt(n);
            }),
            this
          );
        }),
        (e.run = function (n, r) {
          var s = this;
          return (
            this !== ye &&
              (n || this.getState(r),
              this.loadState(function () {
                s._killed || (s.setState(), s.animate());
              })),
            this
          );
        }),
        (e.clear = function (n) {
          this.state.clear(), n || (this.actions.length = 0);
        }),
        (e.getStateById = function (n) {
          for (var r = this.actions.length, s; r--; )
            if (((s = this.actions[r].getStateById(n)), s)) return s;
          return this.state.idLookup[n] && this.state;
        }),
        (e.kill = function () {
          (this._killed = 1), this.clear(), delete vl[this.id];
        }),
        t
      );
    })(),
    yr = (function () {
      function t() {}
      return (
        (t.getState = function (i, n) {
          var r = Tl(i, n);
          return (
            ds && ds.states.push(r),
            n && n.batch && t.batch(n.batch).state.add(r),
            r
          );
        }),
        (t.from = function (i, n) {
          return (
            (n = n || {}),
            "clearProps" in n || (n.clearProps = !0),
            kl(
              i,
              Tl(n.targets || i.targets, {
                props: n.props || i.props,
                simple: n.simple,
                kill: !!n.kill,
              }),
              n,
              -1
            )
          );
        }),
        (t.to = function (i, n) {
          return kl(
            i,
            Tl(n.targets || i.targets, {
              props: n.props || i.props,
              simple: n.simple,
              kill: !!n.kill,
            }),
            n,
            1
          );
        }),
        (t.fromTo = function (i, n, r) {
          return kl(i, n, r);
        }),
        (t.fit = function (i, n, r) {
          var s = r ? gr(r, Hd) : {},
            a = r || s,
            o = a.absolute,
            l = a.scale,
            c = a.getVars,
            u = a.props,
            d = a.runBackwards,
            f = a.onComplete,
            h = a.simple,
            m = r && r.fitChild && fs(r.fitChild),
            p = Sl(n, u, h, i),
            g = Sl(i, 0, h, p),
            b = u ? ba[u] : _a,
            v = ot.context();
          return (
            u && Ud(s, p.props),
            hs(g, b),
            d &&
              ("immediateRender" in s || (s.immediateRender = !0),
              (s.onComplete = function () {
                xa(g), f && f.apply(this, arguments);
              })),
            o && xl(g, p),
            (s = vr(
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
                  return xa(g);
                };
              }),
            c ? s : s.duration ? ot.to(g.element, s) : null
          );
        }),
        (t.makeAbsolute = function (i, n) {
          return (i instanceof Kt ? i : new Kt(i, n)).makeAbsolute();
        }),
        (t.batch = function (i) {
          return i || (i = "default"), vl[i] || (vl[i] = new Y0(i));
        }),
        (t.killFlipsOf = function (i, n) {
          (i instanceof Kt ? i.targets : pr(i)).forEach(function (r) {
            return r && Al(r._flip, n !== !1 ? 1 : 2);
          });
        }),
        (t.isFlipping = function (i) {
          var n = t.getByTarget(i);
          return !!n && n.isActive();
        }),
        (t.getByTarget = function (i) {
          return (fs(i) || ya)._flip;
        }),
        (t.getElementState = function (i, n) {
          return new In(fs(i), n);
        }),
        (t.convertCoordinates = function (i, n, r) {
          var s = mi(n, !0, !0).multiply(mi(i));
          return r ? s.apply(r) : s;
        }),
        (t.register = function (i) {
          if (((en = typeof document < "u" && document.body), en)) {
            (ot = i),
              ul(en),
              (pr = ot.utils.toArray),
              (gl = ot.core.getStyleSaver);
            var n = ot.utils.snap(0.1);
            Mi = function (s, a) {
              return n(parseFloat(s) + a);
            };
          }
        }),
        t
      );
    })();
  (yr.version = "3.13.0"),
    typeof window < "u" && window.gsap && window.gsap.registerPlugin(yr),
    R.registerPlugin(yr);
  const W0 = () => {
      document.querySelector(".seo_header_flip_wrap");
      const t = document.querySelector(".seo_header_title_col"),
        e = document.querySelector(".seo_header_title_text"),
        i = document.querySelector(".seo_header_empty_col"),
        n = document.querySelector(".seo_header_service_col"),
        r = document.querySelector(".seo_header_service_component"),
        s = document.querySelector(".seo_heading_text"),
        a = document.querySelector(".seo_header_service_button"),
        o = document.querySelector(".seo_service_list_wrap"),
        l = document.querySelector(".project_card_tags_seo");
      function c() {
        const u = yr.getState([t, e, i, n, r, s, a, o, l], {
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
          i.classList.toggle("inactive"),
          n.classList.toggle("u-column-3"),
          n.classList.toggle("u-column-12"),
          o.classList.toggle("inactive"),
          l.classList.toggle("active"),
          s.classList.toggle("active"),
          r.classList.toggle("active"),
          a.classList.toggle("active"),
          yr.from(u, {
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
    G0 = () => {
      W0(), console.log("seoFlip");
    },
    X0 = () => {
      P0(), Zi(), nl(), Qi(), G0(), nc(), Mn().add(() => Ki(), "-=1");
    };
  R.registerPlugin(_e);
  const j0 = (t) => {
      const e =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
      let i = [],
        n,
        r;
      const s = () => {
          i.forEach((c) => {
            c && typeof c.revert == "function" && c.revert();
          }),
            (i = []),
            n && (n.kill(), (n = null)),
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
            b = document.querySelector("[work-cms-hero='bg'] img");
          l &&
            _e.create(l, {
              type: "chars, lines, words",
              autoSplit: !0,
              mask: "lines",
              linesClass: "work-cms-hero-text-line",
              tag: "div",
              onSplit(v) {
                _e.create(f, {
                  type: "lines",
                  autoSplit: !0,
                  mask: "lines",
                  linesClass: "work-cms-info-title-line",
                  tag: "div",
                  onSplit(y) {
                    _e.create(h, {
                      type: "lines",
                      autoSplit: !0,
                      mask: "lines",
                      linesClass: "work-cms-info-text-line",
                      tag: "div",
                      onSplit(_) {
                        _e.create(m, {
                          type: "lines",
                          autoSplit: !0,
                          mask: "lines",
                          linesClass: "work-cms-info-meta-line",
                          tag: "div",
                          onSplit(x) {
                            i.push(v, y, _, x),
                              v.lines.forEach((E) => {
                                const C = document.createElement("div");
                                C.classList.add("move-text-main"),
                                  (C.style.overflow = "clip"),
                                  (C.style.position = "relative"),
                                  E.parentNode.insertBefore(C, E),
                                  C.appendChild(E);
                              }),
                              y.lines.forEach((E) => {
                                const C = document.createElement("div");
                                C.classList.add("move-text-title"),
                                  (C.style.overflow = "clip"),
                                  (C.style.position = "relative"),
                                  E.parentNode.insertBefore(C, E),
                                  C.appendChild(E);
                              }),
                              _.lines.forEach((E) => {
                                const C = document.createElement("div");
                                C.classList.add("move-text-info"),
                                  (C.style.overflow = "clip"),
                                  (C.style.position = "relative"),
                                  E.parentNode.insertBefore(C, E),
                                  C.appendChild(E);
                              }),
                              x.lines.forEach((E) => {
                                const C = document.createElement("div");
                                C.classList.add("move-text-meta"),
                                  (C.style.overflow = "clip"),
                                  (C.style.position = "relative"),
                                  E.parentNode.insertBefore(C, E),
                                  C.appendChild(E);
                              });
                            const T = (E, C) => {
                              const $ = E.querySelectorAll("span");
                              $.length &&
                                $.forEach((k) => {
                                  const M = document.createElement("div");
                                  (M.style.overflow = "clip"),
                                    (M.style.position = "relative"),
                                    (M.style.paddingBottom = "3px"),
                                    k.parentNode.insertBefore(M, k),
                                    M.appendChild(k);
                                });
                            };
                            return (
                              T(l),
                              T(f),
                              T(h),
                              T(m),
                              (n = R.timeline()),
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
                              R.set(b, { scale: 1.4 }),
                              n.to(
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
                              n.to(
                                b,
                                { scale: 1, duration: 2.5, ease: "expo.inOut" },
                                "-=2.5"
                              ),
                              n.to(
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
                              n.to(u, { opacity: 1, duration: 0 }, "<"),
                              n.to(
                                u,
                                {
                                  scaleX: 1,
                                  duration: 2.4,
                                  ease: "expo.inOut",
                                },
                                "-=2"
                              ),
                              n.to(
                                d,
                                {
                                  opacity: 1,
                                  y: 0,
                                  duration: 1,
                                  ease: "expo.inOut",
                                },
                                "-=1.8"
                              ),
                              n.to(
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
                              n.to(
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
                              n.to(
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
                              n.to(
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
                              n
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
          e ||
            (clearTimeout(r),
            (r = setTimeout(() => {
              s(),
                setTimeout(() => {
                  a();
                }, 100);
            }, 250)));
        };
      a(), e || window.addEventListener("resize", o);
    },
    U0 = {
      home: gd,
      about: Jg,
      work: y0,
      contact: p0,
      career: g0,
      "extra-page": gd,
      service: k0,
      work_cms: () => {
        Zi(), Qi();
        const t = Mn();
        t.add(() => Ki(), "-=1.4"), t.add(() => j0(), "-=1.4");
      },
      seo: X0,
    },
    Z0 = () => {
      const t = document.querySelector("[page-route]");
      if (!t) {
        console.log("No element with page-route attribute found");
        return;
      }
      const e = t.getAttribute("page-route"),
        i = U0[e];
      i ? i() : console.log(`No specific script for route: ${e}`);
    },
    Q0 = () => {
      const t = document.querySelector("[nav-menu='trigger']"),
        e = document.querySelector("[nav-menu='component']"),
        i = document.querySelector("[nav-menu='contain']"),
        n = document.querySelector("[main-nav='brand']"),
        r = document.querySelector("[nav-menu='brand']"),
        s = document.querySelectorAll("[nav-menu='link-item']"),
        a = document.querySelector("[nav-menu='info-text']"),
        o = document.querySelectorAll("[nav-menu='close']"),
        l = document.querySelectorAll("[nav-menu='social-link']");
      if (!t || !e || !i || !r || !s || !a || !l) return;
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
          n,
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
            n,
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
    K0 = () => {
      Q0();
    };
  class J0 {
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
        i = new Uint32Array(e.data.buffer),
        n = i.length;
      for (let r = 0; r < n; r++) Math.random() < 0.5 && (i[r] = 4278190080);
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
  const ev = (t) => {
      const e = document.querySelector(".page_overlay"),
        i = document.querySelector("[page-overlay='text-wrap']"),
        n = document.querySelectorAll("[page-load='component']"),
        r = document.querySelectorAll("[page-load='wrap']"),
        s = document.querySelectorAll("[page-load='gradient']"),
        a = document.querySelectorAll("[page-load='text']");
      e &&
        R.set(e, { clipPath: "inset(100% 0% 0% 0%)", pointerEvents: "none" }),
        i && R.set(i, { opacity: 0, y: 50, willChange: "transform, opacity" });
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
                  n.length &&
                    R.set(n, {
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
    tv = () => {
      document.querySelectorAll("a[href]").forEach((e) => {
        const i = e.getAttribute("href");
        if (
          i.startsWith("#") ||
          i.startsWith("mailto:") ||
          i.startsWith("tel:") ||
          i.startsWith("javascript:") ||
          e.target === "_blank"
        )
          return;
        new URL(i, window.location.origin).hostname ===
          window.location.hostname &&
          e.addEventListener("click", async (s) => {
            s.preventDefault();
            const a = e.href,
              o = document.createElement("link");
            (o.rel = "prefetch"),
              (o.href = a),
              document.head.appendChild(o),
              await ev(),
              (window.location.href = a);
          });
      });
    };
  R.registerPlugin(_e, X);
  const iv = {
      lines: { duration: 1.8, stagger: 0.08 },
      words: { duration: 0.6, stagger: 0.06 },
      chars: { duration: 0.4, stagger: 0.01 },
    },
    nv = () => {
      const t =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
      let e = [],
        i;
      const n = () => {
          e.forEach((a) => {
            a && typeof a.revert == "function" && a.revert();
          }),
            (e = []),
            X.getAll().forEach((a) => a.kill());
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
              c = _e.create(a, {
                type: l.join(", "),
                mask: "lines",
                autoSplit: !0,
                linesClass: "line",
                wordsClass: "word",
                charsClass: "letter",
                onSplit: function (u) {
                  const d = u[o],
                    f = iv[o];
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
          t ||
            (clearTimeout(i),
            (i = setTimeout(() => {
              n(),
                setTimeout(() => {
                  r(), X.refresh();
                }, 100);
            }, 250)));
        };
      document.fonts.ready.then(() => {
        r(), t || window.addEventListener("resize", s);
      });
    },
    rv = () => {
      R.set(".cursor", { xPercent: -50, yPercent: -50 });
      let t = R.quickTo(".cursor", "x", { duration: 0.6, ease: "power3" }),
        e = R.quickTo(".cursor", "y", { duration: 0.6, ease: "power3" });
      window.addEventListener("mousemove", (i) => {
        t(i.clientX), e(i.clientY);
      });
    },
    sv = () => {
      rv();
    },
    av = () => {
      K0(), new J0(), wd(), tv(), nv(), sv();
    };
  function ov(t, e) {
    (t.prototype = Object.create(e.prototype)),
      (t.prototype.constructor = t),
      Pl(t, e);
  }
  function Pl(t, e) {
    return (
      (Pl = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (i, n) {
            return (i.__proto__ = n), i;
          }),
      Pl(t, e)
    );
  }
  var tn,
    lv = function () {
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
  })(tn || (tn = {}));
  var ef = tn.off,
    cv = (function () {
      function t(i) {
        (this.t = void 0), (this.t = i);
      }
      (t.getLevel = function () {
        return ef;
      }),
        (t.setLevel = function (i) {
          return (ef = tn[i]);
        });
      var e = t.prototype;
      return (
        (e.error = function () {
          this.i(console.error, tn.error, [].slice.call(arguments));
        }),
        (e.warn = function () {
          this.i(console.warn, tn.warning, [].slice.call(arguments));
        }),
        (e.info = function () {
          this.i(console.info, tn.info, [].slice.call(arguments));
        }),
        (e.debug = function () {
          this.i(console.log, tn.debug, [].slice.call(arguments));
        }),
        (e.i = function (i, n, r) {
          n <= t.getLevel() &&
            i.apply(console, ["[" + this.t + "] "].concat(r));
        }),
        t
      );
    })();
  function uv(t) {
    return (
      !!t &&
      (typeof t == "object" || typeof t == "function") &&
      typeof t.then == "function"
    );
  }
  function dv(t, e) {
    return (
      e === void 0 && (e = {}),
      function () {
        var i = arguments,
          n = !1,
          r = new Promise(function (s, a) {
            e.async = function () {
              return (
                (n = !0),
                function (l, c) {
                  l ? a(l) : s(c);
                }
              );
            };
            var o = t.apply(e, [].slice.call(i));
            n || (uv(o) ? o.then(s, a) : s(o));
          });
        return r;
      }
    );
  }
  new ((function (t) {
    function e() {
      var n;
      return (
        ((n = t.call(this) || this).logger = new cv("@barba/core")),
        (n.all = [
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
        (n.registered = new Map()),
        n.init(),
        n
      );
    }
    ov(e, t);
    var i = e.prototype;
    return (
      (i.init = function () {
        var n = this;
        this.registered.clear(),
          this.all.forEach(function (r) {
            n[r] ||
              (n[r] = function (s, a) {
                n.registered.has(r) || n.registered.set(r, new Set()),
                  n.registered.get(r).add({ ctx: a || {}, fn: s });
              });
          });
      }),
      (i.do = function (n) {
        var r = arguments,
          s = this;
        if (this.registered.has(n)) {
          var a = Promise.resolve();
          return (
            this.registered.get(n).forEach(function (o) {
              a = a.then(function () {
                return dv(o.fn, o.ctx).apply(void 0, [].slice.call(r, 1));
              });
            }),
            a.catch(function (o) {
              s.logger.debug("Hook error [" + n + "]"), s.logger.error(o);
            })
          );
        }
        return Promise.resolve();
      }),
      (i.clear = function () {
        var n = this;
        this.all.forEach(function (r) {
          delete n[r];
        }),
          this.init();
      }),
      (i.help = function () {
        this.logger.info("Available hooks: " + this.all.join(","));
        var n = [];
        this.registered.forEach(function (r, s) {
          return n.push(s);
        }),
          this.logger.info("Registered hooks: " + n.join(","));
      }),
      e
    );
  })(lv))(),
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
      }),
    R.registerPlugin(X);
  const tf = () => {
    const t = navigator.userAgent,
      e = /iPad|iPhone|iPod/.test(t),
      i = /WebKit/.test(t),
      n = /Safari/.test(t) && !/Chrome/.test(t),
      r = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    return e && i && n && r;
  };
  let Ml = window.innerHeight;
  const $l = (t) => {
      (Math.abs(t - Ml) > 150 || !tf()) && (Ml = t);
    },
    fv = () => {
      if (!tf()) return;
      const t = () => {
        document.documentElement.style.setProperty(
          "--stable-vh",
          `${Ml * 0.01}px`
        );
      };
      t(),
        window.addEventListener("orientationchange", () => {
          setTimeout(() => {
            $l(window.innerHeight), t();
          }, 500);
        });
    },
    nf = (t, e) => {
      let i;
      return function (...r) {
        const s = () => {
          clearTimeout(i), t(...r);
        };
        clearTimeout(i), (i = setTimeout(s, e));
      };
    },
    hv = nf(() => {
      const t = window.innerHeight;
      $l(t);
      const e = $n();
      e && e.resize(), X.refresh();
    }, 250),
    pv = () => {
      setTimeout(() => {
        const t = $n();
        t && t.resize(), X.refresh();
      }, 500);
    },
    mv = () => {
      fv(),
        window.addEventListener("resize", hv),
        window.addEventListener("orientationchange", pv);
      let t = window.innerHeight,
        e = window.innerWidth;
      const i = nf(() => {
        const n = window.innerHeight,
          r = Math.abs(n - t) > 100,
          s = Math.abs(window.innerWidth - e) > 100;
        if (r || s) {
          $l(n);
          const a = $n();
          a && a.resize(), X.refresh(), (t = n), (e = window.innerWidth);
        }
      }, 100);
      window.addEventListener("resize", i),
        console.log(
          "ScrollTrigger global manager initialized with Lenis integration"
        );
    };
  document.addEventListener("DOMContentLoaded", () => {
    mv(), av(), Z0(), wd();
  });
})();
