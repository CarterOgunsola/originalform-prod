var $v = Object.defineProperty;
var Ov = (zi, si, on) =>
  si in zi
    ? $v(zi, si, { enumerable: !0, configurable: !0, writable: !0, value: on })
    : (zi[si] = on);
var W = (zi, si, on) => Ov(zi, typeof si != "symbol" ? si + "" : si, on);
(function () {
  "use strict";
  var zi = document.createElement("style");
  (zi.textContent = `@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA);font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-pointer-events{touch-action:pan-y}.swiper-pointer-events.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper:after{content:"";position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper:after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper:after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:"next"}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:50%;background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:#00000040;position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:#0000001a}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:#00000080;border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-next+.swiper-slide,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-right,.swiper-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:"";background:#000;position:absolute;inset:0;filter:blur(50px)}.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-right,.swiper-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-creative .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}
/*$vite$:1*/`),
    document.head.appendChild(zi);
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
            vs(t, n, i[n]);
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
        function (_, S, O) {
          _[S] = O.value;
        },
      r = typeof Symbol == "function" ? Symbol : {},
      s = r.iterator || "@@iterator",
      a = r.asyncIterator || "@@asyncIterator",
      o = r.toStringTag || "@@toStringTag";
    function l(_, S, O) {
      return (
        Object.defineProperty(_, S, {
          value: O,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        _[S]
      );
    }
    try {
      l({}, "");
    } catch {
      l = function (S, O, L) {
        return (S[O] = L);
      };
    }
    function c(_, S, O, L) {
      var A = S && S.prototype instanceof f ? S : f,
        z = Object.create(A.prototype),
        D = new $(L || []);
      return n(z, "_invoke", { value: x(_, O, D) }), z;
    }
    function u(_, S, O) {
      try {
        return { type: "normal", arg: _.call(S, O) };
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
      y = g && g(g(T([])));
    y && y !== e && i.call(y, s) && (p = y);
    var v = (m.prototype = f.prototype = Object.create(p));
    function b(_) {
      ["next", "throw", "return"].forEach(function (S) {
        l(_, S, function (O) {
          return this._invoke(S, O);
        });
      });
    }
    function w(_, S) {
      function O(A, z, D, B) {
        var P = u(_[A], _, z);
        if (P.type !== "throw") {
          var q = P.arg,
            X = q.value;
          return X && typeof X == "object" && i.call(X, "__await")
            ? S.resolve(X.__await).then(
                function (oe) {
                  O("next", oe, D, B);
                },
                function (oe) {
                  O("throw", oe, D, B);
                }
              )
            : S.resolve(X).then(
                function (oe) {
                  (q.value = oe), D(q);
                },
                function (oe) {
                  return O("throw", oe, D, B);
                }
              );
        }
        B(P.arg);
      }
      var L;
      n(this, "_invoke", {
        value: function (A, z) {
          function D() {
            return new S(function (B, P) {
              O(A, z, B, P);
            });
          }
          return (L = L ? L.then(D, D) : D());
        },
      });
    }
    function x(_, S, O) {
      var L = "suspendedStart";
      return function (A, z) {
        if (L === "executing") throw new Error("Generator is already running");
        if (L === "completed") {
          if (A === "throw") throw z;
          return M();
        }
        for (O.method = A, O.arg = z; ; ) {
          var D = O.delegate;
          if (D) {
            var B = E(D, O);
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
          var P = u(_, S, O);
          if (P.type === "normal") {
            if (((L = O.done ? "completed" : "suspendedYield"), P.arg === d))
              continue;
            return { value: P.arg, done: O.done };
          }
          P.type === "throw" &&
            ((L = "completed"), (O.method = "throw"), (O.arg = P.arg));
        }
      };
    }
    function E(_, S) {
      var O = S.method,
        L = _.iterator[O];
      if (L === void 0)
        return (
          (S.delegate = null),
          (O === "throw" &&
            _.iterator.return &&
            ((S.method = "return"),
            (S.arg = void 0),
            E(_, S),
            S.method === "throw")) ||
            (O !== "return" &&
              ((S.method = "throw"),
              (S.arg = new TypeError(
                "The iterator does not provide a '" + O + "' method"
              )))),
          d
        );
      var A = u(L, _.iterator, S.arg);
      if (A.type === "throw")
        return (S.method = "throw"), (S.arg = A.arg), (S.delegate = null), d;
      var z = A.arg;
      return z
        ? z.done
          ? ((S[_.resultName] = z.value),
            (S.next = _.nextLoc),
            S.method !== "return" && ((S.method = "next"), (S.arg = void 0)),
            (S.delegate = null),
            d)
          : z
        : ((S.method = "throw"),
          (S.arg = new TypeError("iterator result is not an object")),
          (S.delegate = null),
          d);
    }
    function C(_) {
      var S = { tryLoc: _[0] };
      1 in _ && (S.catchLoc = _[1]),
        2 in _ && ((S.finallyLoc = _[2]), (S.afterLoc = _[3])),
        this.tryEntries.push(S);
    }
    function k(_) {
      var S = _.completion || {};
      (S.type = "normal"), delete S.arg, (_.completion = S);
    }
    function $(_) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        _.forEach(C, this),
        this.reset(!0);
    }
    function T(_) {
      if (_) {
        var S = _[s];
        if (S) return S.call(_);
        if (typeof _.next == "function") return _;
        if (!isNaN(_.length)) {
          var O = -1,
            L = function A() {
              for (; ++O < _.length; )
                if (i.call(_, O)) return (A.value = _[O]), (A.done = !1), A;
              return (A.value = void 0), (A.done = !0), A;
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
      n(v, "constructor", { value: m, configurable: !0 }),
      n(m, "constructor", { value: h, configurable: !0 }),
      (h.displayName = l(m, o, "GeneratorFunction")),
      (t.isGeneratorFunction = function (_) {
        var S = typeof _ == "function" && _.constructor;
        return (
          !!S && (S === h || (S.displayName || S.name) === "GeneratorFunction")
        );
      }),
      (t.mark = function (_) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(_, m)
            : ((_.__proto__ = m), l(_, o, "GeneratorFunction")),
          (_.prototype = Object.create(v)),
          _
        );
      }),
      (t.awrap = function (_) {
        return { __await: _ };
      }),
      b(w.prototype),
      l(w.prototype, a, function () {
        return this;
      }),
      (t.AsyncIterator = w),
      (t.async = function (_, S, O, L, A) {
        A === void 0 && (A = Promise);
        var z = new w(c(_, S, O, L), A);
        return t.isGeneratorFunction(S)
          ? z
          : z.next().then(function (D) {
              return D.done ? D.value : z.next();
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
      (t.keys = function (_) {
        var S = Object(_),
          O = [];
        for (var L in S) O.push(L);
        return (
          O.reverse(),
          function A() {
            for (; O.length; ) {
              var z = O.pop();
              if (z in S) return (A.value = z), (A.done = !1), A;
            }
            return (A.done = !0), A;
          }
        );
      }),
      (t.values = T),
      ($.prototype = {
        constructor: $,
        reset: function (_) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = void 0),
            this.tryEntries.forEach(k),
            !_)
          )
            for (var S in this)
              S.charAt(0) === "t" &&
                i.call(this, S) &&
                !isNaN(+S.slice(1)) &&
                (this[S] = void 0);
        },
        stop: function () {
          this.done = !0;
          var _ = this.tryEntries[0].completion;
          if (_.type === "throw") throw _.arg;
          return this.rval;
        },
        dispatchException: function (_) {
          if (this.done) throw _;
          var S = this;
          function O(P, q) {
            return (
              (z.type = "throw"),
              (z.arg = _),
              (S.next = P),
              q && ((S.method = "next"), (S.arg = void 0)),
              !!q
            );
          }
          for (var L = this.tryEntries.length - 1; L >= 0; --L) {
            var A = this.tryEntries[L],
              z = A.completion;
            if (A.tryLoc === "root") return O("end");
            if (A.tryLoc <= this.prev) {
              var D = i.call(A, "catchLoc"),
                B = i.call(A, "finallyLoc");
              if (D && B) {
                if (this.prev < A.catchLoc) return O(A.catchLoc, !0);
                if (this.prev < A.finallyLoc) return O(A.finallyLoc);
              } else if (D) {
                if (this.prev < A.catchLoc) return O(A.catchLoc, !0);
              } else {
                if (!B)
                  throw new Error("try statement without catch or finally");
                if (this.prev < A.finallyLoc) return O(A.finallyLoc);
              }
            }
          }
        },
        abrupt: function (_, S) {
          for (var O = this.tryEntries.length - 1; O >= 0; --O) {
            var L = this.tryEntries[O];
            if (
              L.tryLoc <= this.prev &&
              i.call(L, "finallyLoc") &&
              this.prev < L.finallyLoc
            ) {
              var A = L;
              break;
            }
          }
          A &&
            (_ === "break" || _ === "continue") &&
            A.tryLoc <= S &&
            S <= A.finallyLoc &&
            (A = null);
          var z = A ? A.completion : {};
          return (
            (z.type = _),
            (z.arg = S),
            A
              ? ((this.method = "next"), (this.next = A.finallyLoc), d)
              : this.complete(z)
          );
        },
        complete: function (_, S) {
          if (_.type === "throw") throw _.arg;
          return (
            _.type === "break" || _.type === "continue"
              ? (this.next = _.arg)
              : _.type === "return"
              ? ((this.rval = this.arg = _.arg),
                (this.method = "return"),
                (this.next = "end"))
              : _.type === "normal" && S && (this.next = S),
            d
          );
        },
        finish: function (_) {
          for (var S = this.tryEntries.length - 1; S >= 0; --S) {
            var O = this.tryEntries[S];
            if (O.finallyLoc === _)
              return this.complete(O.completion, O.afterLoc), k(O), d;
          }
        },
        catch: function (_) {
          for (var S = this.tryEntries.length - 1; S >= 0; --S) {
            var O = this.tryEntries[S];
            if (O.tryLoc === _) {
              var L = O.completion;
              if (L.type === "throw") {
                var A = L.arg;
                k(O);
              }
              return A;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (_, S, O) {
          return (
            (this.delegate = { iterator: T(_), resultName: S, nextLoc: O }),
            this.method === "next" && (this.arg = void 0),
            d
          );
        },
      }),
      t
    );
  }
  function Bl(t, e, i, n, r, s, a) {
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
          Bl(s, n, r, a, o, "next", l);
        }
        function o(l) {
          Bl(s, n, r, a, o, "throw", l);
        }
        a(void 0);
      });
    };
  }
  function Fl(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function gf(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, Vl(n.key), n);
    }
  }
  function Hl(t, e, i) {
    return (
      e && gf(t.prototype, e),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  function vs(t, e, i) {
    return (
      (e = Vl(e)),
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
  function vf(t, e) {
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
  function ql() {
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
  function ys(t, e, i) {
    return (
      ql()
        ? (ys = Reflect.construct.bind())
        : (ys = function (r, s, a) {
            var o = [null];
            o.push.apply(o, s);
            var l = Function.bind.apply(r, o),
              c = new l();
            return a && Sr(c, a.prototype), c;
          }),
      ys.apply(null, arguments)
    );
  }
  function yf(t) {
    return Function.toString.call(t).indexOf("[native code]") !== -1;
  }
  function Ma(t) {
    var e = typeof Map == "function" ? new Map() : void 0;
    return (
      (Ma = function (n) {
        if (n === null || !yf(n)) return n;
        if (typeof n != "function")
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (typeof e < "u") {
          if (e.has(n)) return e.get(n);
          e.set(n, r);
        }
        function r() {
          return ys(n, arguments, xr(this).constructor);
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
      Ma(t)
    );
  }
  function bs(t) {
    if (t === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function bf(t, e) {
    if (e && (typeof e == "object" || typeof e == "function")) return e;
    if (e !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return bs(t);
  }
  function _f(t) {
    var e = ql();
    return function () {
      var n = xr(t),
        r;
      if (e) {
        var s = xr(this).constructor;
        r = Reflect.construct(n, arguments, s);
      } else r = n.apply(this, arguments);
      return bf(this, r);
    };
  }
  function wf(t, e) {
    if (typeof t != "object" || t === null) return t;
    var i = t[Symbol.toPrimitive];
    if (i !== void 0) {
      var n = i.call(t, e);
      if (typeof n != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(t);
  }
  function Vl(t) {
    var e = wf(t, "string");
    return typeof e == "symbol" ? e : String(e);
  }
  var Yl =
    typeof global < "u" && {}.toString.call(global) === "[object global]";
  function Wl(t, e) {
    return t.indexOf(e.toLowerCase()) === 0
      ? t
      : ""
          .concat(e.toLowerCase())
          .concat(t.substr(0, 1).toUpperCase())
          .concat(t.substr(1));
  }
  function xf(t) {
    return !!(
      t &&
      t.nodeType === 1 &&
      "nodeName" in t &&
      t.ownerDocument &&
      t.ownerDocument.defaultView
    );
  }
  function Sf(t) {
    return !isNaN(parseFloat(t)) && isFinite(t) && Math.floor(t) == t;
  }
  function cn(t) {
    return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(
      t
    );
  }
  function Gl(t) {
    var e =
      /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
    return e.test(t);
  }
  function Tf(t) {
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
  function Xl() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      e = t.id,
      i = t.url,
      n = e || i;
    if (!n)
      throw new Error(
        "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
      );
    if (Sf(n)) return "https://vimeo.com/".concat(n);
    if (cn(n)) return n.replace("http:", "https:");
    throw e
      ? new TypeError("“".concat(e, "” is not a valid video id."))
      : new TypeError("“".concat(n, "” is not a vimeo.com url."));
  }
  var jl = function (e, i, n) {
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
    Ef = typeof Array.prototype.indexOf < "u",
    Cf = typeof window < "u" && typeof window.postMessage < "u";
  if (!Yl && (!Ef || !Cf))
    throw new Error(
      "Sorry, the Vimeo Player API is not available in this browser."
    );
  var Hn =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
  function kf(t, e) {
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
      : Hn
  );
  var Ft = kf(function (t) {
      /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/ (function (i, n, r) {
        (n[i] = n[i] || r()), t.exports && (t.exports = n[i]);
      })("Promise", Hn, function () {
        var i,
          n,
          r,
          s = Object.prototype.toString,
          a =
            typeof setImmediate < "u"
              ? function (b) {
                  return setImmediate(b);
                }
              : setTimeout;
        try {
          i = function (b, w, x, E) {
            return Object.defineProperty(b, w, {
              value: x,
              writable: !0,
              configurable: E !== !1,
            });
          };
        } catch {
          i = function (w, x, E) {
            return (w[x] = E), w;
          };
        }
        r = (function () {
          var b, w, x;
          function E(C, k) {
            (this.fn = C), (this.self = k), (this.next = void 0);
          }
          return {
            add: function (k, $) {
              (x = new E(k, $)),
                w ? (w.next = x) : (b = x),
                (w = x),
                (x = void 0);
            },
            drain: function () {
              var k = b;
              for (b = w = n = void 0; k; ) k.fn.call(k.self), (k = k.next);
            },
          };
        })();
        function o(v, b) {
          r.add(v, b), n || (n = a(r.drain));
        }
        function l(v) {
          var b,
            w = typeof v;
          return (
            v != null && (w == "object" || w == "function") && (b = v.then),
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
        function u(v, b, w) {
          var x, E;
          try {
            b === !1
              ? w.reject(v.msg)
              : (b === !0 ? (x = v.msg) : (x = b.call(void 0, v.msg)),
                x === w.promise
                  ? w.reject(TypeError("Promise-chain cycle"))
                  : (E = l(x))
                  ? E.call(x, w.resolve, w.reject)
                  : w.resolve(x));
          } catch (C) {
            w.reject(C);
          }
        }
        function d(v) {
          var b,
            w = this;
          if (!w.triggered) {
            (w.triggered = !0), w.def && (w = w.def);
            try {
              (b = l(v))
                ? o(function () {
                    var x = new m(w);
                    try {
                      b.call(
                        v,
                        function () {
                          d.apply(x, arguments);
                        },
                        function () {
                          f.apply(x, arguments);
                        }
                      );
                    } catch (E) {
                      f.call(x, E);
                    }
                  })
                : ((w.msg = v), (w.state = 1), w.chain.length > 0 && o(c, w));
            } catch (x) {
              f.call(new m(w), x);
            }
          }
        }
        function f(v) {
          var b = this;
          b.triggered ||
            ((b.triggered = !0),
            b.def && (b = b.def),
            (b.msg = v),
            (b.state = 2),
            b.chain.length > 0 && o(c, b));
        }
        function h(v, b, w, x) {
          for (var E = 0; E < b.length; E++)
            (function (k) {
              v.resolve(b[k]).then(function (T) {
                w(k, T);
              }, x);
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
          var b = new p(this);
          (this.then = function (x, E) {
            var C = {
              success: typeof x == "function" ? x : !0,
              failure: typeof E == "function" ? E : !1,
            };
            return (
              (C.promise = new this.constructor(function ($, T) {
                if (typeof $ != "function" || typeof T != "function")
                  throw TypeError("Not a function");
                (C.resolve = $), (C.reject = T);
              })),
              b.chain.push(C),
              b.state !== 0 && o(c, b),
              C.promise
            );
          }),
            (this.catch = function (x) {
              return this.then(void 0, x);
            });
          try {
            v.call(
              void 0,
              function (x) {
                d.call(b, x);
              },
              function (x) {
                f.call(b, x);
              }
            );
          } catch (w) {
            f.call(b, w);
          }
        }
        var y = i({}, "constructor", g, !1);
        return (
          (g.prototype = y),
          i(y, "__NPO__", 0, !1),
          i(g, "resolve", function (b) {
            var w = this;
            return b && typeof b == "object" && b.__NPO__ === 1
              ? b
              : new w(function (E, C) {
                  if (typeof E != "function" || typeof C != "function")
                    throw TypeError("Not a function");
                  E(b);
                });
          }),
          i(g, "reject", function (b) {
            return new this(function (x, E) {
              if (typeof x != "function" || typeof E != "function")
                throw TypeError("Not a function");
              E(b);
            });
          }),
          i(g, "all", function (b) {
            var w = this;
            return s.call(b) != "[object Array]"
              ? w.reject(TypeError("Not an array"))
              : b.length === 0
              ? w.resolve([])
              : new w(function (E, C) {
                  if (typeof E != "function" || typeof C != "function")
                    throw TypeError("Not a function");
                  var k = b.length,
                    $ = Array(k),
                    T = 0;
                  h(
                    w,
                    b,
                    function (_, S) {
                      ($[_] = S), ++T === k && E($);
                    },
                    C
                  );
                });
          }),
          i(g, "race", function (b) {
            var w = this;
            return s.call(b) != "[object Array]"
              ? w.reject(TypeError("Not an array"))
              : new w(function (E, C) {
                  if (typeof E != "function" || typeof C != "function")
                    throw TypeError("Not a function");
                  h(
                    w,
                    b,
                    function ($, T) {
                      E(T);
                    },
                    C
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
  function _s(t, e) {
    var i = bi.get(t.element) || {};
    return i[e] || [];
  }
  function ws(t, e, i) {
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
  function Af(t, e) {
    var i = _s(t, e);
    if (i.length < 1) return !1;
    var n = i.shift();
    return ws(t, e, n), n;
  }
  function Pf(t, e) {
    var i = bi.get(t);
    bi.set(e, i), bi.delete(t);
  }
  function xs(t) {
    if (typeof t == "string")
      try {
        t = JSON.parse(t);
      } catch {
        return {};
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
  function Mf(t, e) {
    e = xs(e);
    var i = [],
      n;
    if (e.event) {
      if (e.event === "error") {
        var r = _s(t, e.data.method);
        r.forEach(function (a) {
          var o = new Error(e.data.message);
          (o.name = e.data.name), a.reject(o), ws(t, e.data.method, a);
        });
      }
      (i = _s(t, "event:".concat(e.event))), (n = e.data);
    } else if (e.method) {
      var s = Af(t, e.method);
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
  var $f = [
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
  function Ul(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return $f.reduce(function (i, n) {
      var r = t.getAttribute("data-vimeo-".concat(n));
      return (r || r === "") && (i[n] = r === "" ? 1 : r), i;
    }, e);
  }
  function $a(t, e) {
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
  function Zl(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      i = arguments.length > 2 ? arguments[2] : void 0;
    return new Promise(function (n, r) {
      if (!cn(t))
        throw new TypeError("“".concat(t, "” is not a vimeo.com url."));
      var s = Tf(t),
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
              $a(c, i), r(new Error("“".concat(t, "” is not embeddable.")));
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
  function Of() {
    var t =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : document,
      e = [].slice.call(
        t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")
      ),
      i = function (r) {
        "console" in window;
      };
    e.forEach(function (n) {
      try {
        if (n.getAttribute("data-vimeo-defer") !== null) return;
        var r = Ul(n),
          s = Xl(r);
        Zl(s, r, n)
          .then(function (a) {
            return $a(a, n);
          })
          .catch(i);
      } catch (a) {
        i(a);
      }
    });
  }
  function Lf() {
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
  function zf() {
    var t =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoSeoMetadataAppended) {
      window.VimeoSeoMetadataAppended = !0;
      var e = function (n) {
        if (cn(n.origin)) {
          var r = xs(n.data);
          if (!(!r || r.event !== "ready"))
            for (
              var s = t.querySelectorAll("iframe"), a = 0;
              a < s.length;
              a++
            ) {
              var o = s[a],
                l = o.contentWindow === n.source;
              if (Gl(o.src) && l) {
                var c = new Ss(o);
                c.callMethod("appendVideoMetadata", window.location.href);
              }
            }
        }
      };
      window.addEventListener("message", e);
    }
  }
  function Df() {
    var t =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoCheckedUrlTimeParam) {
      window.VimeoCheckedUrlTimeParam = !0;
      var e = function (r) {
          "console" in window;
        },
        i = function (r) {
          if (cn(r.origin)) {
            var s = xs(r.data);
            if (!(!s || s.event !== "ready"))
              for (
                var a = t.querySelectorAll("iframe"),
                  o = function () {
                    var u = a[l],
                      d = u.contentWindow === r.source;
                    if (Gl(u.src) && d) {
                      var f = new Ss(u);
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
  function If() {
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
  var Rf = {
      role: "viewer",
      autoPlayMuted: !0,
      allowedDrift: 0.3,
      maxAllowedDrift: 1,
      minCheckInterval: 0.1,
      maxRateAdjustment: 0.2,
      maxTimeToCatchUp: 1,
    },
    Nf = (function (t) {
      vf(i, t);
      var e = _f(i);
      function i(n, r) {
        var s,
          a =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          o = arguments.length > 3 ? arguments[3] : void 0;
        return (
          Fl(this, i),
          (s = e.call(this)),
          vs(bs(s), "logger", void 0),
          vs(bs(s), "speedAdjustment", 0),
          vs(
            bs(s),
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
          s.init(r, n, on(on({}, Rf), a)),
          s
        );
      }
      return (
        Hl(i, [
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
                            (u = jl(a, "change", function () {
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
                            (f = jl(
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
                                                o.play().catch(function (b) {})
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
                    dt().mark(function y() {
                      var v, b, w, x, E;
                      return dt().wrap(function (k) {
                        for (;;)
                          switch ((k.prev = k.next)) {
                            case 0:
                              if (((k.t0 = r.query().velocity === 0), k.t0)) {
                                k.next = 6;
                                break;
                              }
                              return (k.next = 4), s.getPaused();
                            case 4:
                              (k.t1 = k.sent), (k.t0 = k.t1 === !0);
                            case 6:
                              if (!k.t0) {
                                k.next = 8;
                                break;
                              }
                              return k.abrupt("return");
                            case 8:
                              return (
                                (k.t2 = r.query().position),
                                (k.next = 11),
                                s.getCurrentTime()
                              );
                            case 11:
                              if (
                                ((k.t3 = k.sent),
                                (v = k.t2 - k.t3),
                                (b = Math.abs(v)),
                                o.log("Drift: ".concat(v)),
                                !(b > c))
                              ) {
                                k.next = 22;
                                break;
                              }
                              return (k.next = 18), o.adjustSpeed(s, 0);
                            case 18:
                              s.setCurrentTime(r.query().position),
                                o.log("Resync by currentTime"),
                                (k.next = 29);
                              break;
                            case 22:
                              if (!(b > l)) {
                                k.next = 29;
                                break;
                              }
                              return (
                                (w = b / f),
                                (x = d),
                                (E = w < x ? (x - w) / 2 : x),
                                (k.next = 28),
                                o.adjustSpeed(s, E * Math.sign(v))
                              );
                            case 28:
                              o.log("Resync by playbackRate");
                            case 29:
                            case "end":
                              return k.stop();
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
        i
      );
    })(Ma(EventTarget)),
    qn = new WeakMap(),
    Oa = new WeakMap(),
    _t = {},
    Ss = (function () {
      function t(e) {
        var i = this,
          n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (
          (Fl(this, t),
          window.jQuery &&
            e instanceof jQuery &&
            (e.length > 1 && window.console, (e = e[0])),
          typeof document < "u" &&
            typeof e == "string" &&
            (e = document.getElementById(e)),
          !xf(e))
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
                var f = xs(d.data),
                  h = f && f.event === "error",
                  m = h && f.data && f.data.method === "ready";
                if (m) {
                  var p = new Error(f.data.message);
                  (p.name = f.data.name), l(p);
                  return;
                }
                var g = f && f.event === "ready",
                  y = f && f.method === "ping";
                if (g || y) {
                  i.element.setAttribute("data-ready", "true"), o();
                  return;
                }
                Mf(i, f);
              }
            }),
            i._window.addEventListener("message", i._onMessage),
            i.element.nodeName !== "IFRAME")
          ) {
            var c = Ul(e, n),
              u = Xl(c);
            Zl(u, c, e)
              .then(function (d) {
                var f = $a(d, e);
                return (
                  (i.element = f),
                  (i._originalElement = e),
                  Pf(e, f),
                  qn.set(i.element, i),
                  d
                );
              })
              .catch(l);
          }
        });
        if (
          (Oa.set(this, s),
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
              : ws(i, "event:exitFullscreen", a),
              i.ready().then(function () {
                un(i, "fullscreenchange", _t.isFullscreen);
              });
          }),
            _t.on("fullscreenchange", this.fullscreenchangeHandler);
        }
        return this;
      }
      return (
        Hl(t, [
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
                  (i = Wl(i, "get")),
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
                if (((i = Wl(i, "set")), n == null))
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
              var r = _s(this, "event:".concat(i));
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
              var r = ws(this, "event:".concat(i), n);
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
                Oa.get(this) ||
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
                  (Oa.delete(i),
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
                              (o = new Nf(this, r, s)),
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
  Yl || ((_t = If()), Of(), Lf(), zf(), Df());
  class Bf {
    constructor() {
      typeof Ss < "u" && this.init();
    }
    init() {
      document.querySelectorAll("[data-vimeo-player-init]").length > 0 &&
        this.initVimeoPlayer();
    }
    initVimeoPlayer() {
      document.querySelectorAll("[data-vimeo-player-init]").forEach((i, n) => {
        try {
          let v = function (T) {
              let M = Math.floor(T / 3600);
              T -= M * 3600;
              let _ = Math.floor(T / 60);
              return (T -= _ * 60), _ + ":" + (T < 10 ? "0" + T : T);
            },
            E = function () {
              c.getDuration().then(function () {
                const T = w.value;
                c.setCurrentTime(T), x && (x.value = T);
              });
            },
            k = function () {
              i.setAttribute("data-vimeo-hover", "false");
            },
            $ = function () {
              i.setAttribute("data-vimeo-activated", "false"),
                i.setAttribute("data-vimeo-playing", "false"),
                c.unload();
            };
          const r = i.getAttribute("data-vimeo-video-id");
          if (!r) return;
          const s = i.querySelector("iframe");
          if (!s) return;
          const a = `https://player.vimeo.com/video/${r}?api=1&background=1&autoplay=0&loop=0&muted=1`;
          s.setAttribute("src", a);
          const o = "vimeo-player-index-" + n;
          i.setAttribute("id", o);
          const l = i.id,
            c = new Ss(s);
          if (
            (i.getAttribute("data-vimeo-update-size") === "true" &&
              c.getVideoWidth().then(function (T) {
                c.getVideoHeight().then(function (M) {
                  const _ = i.querySelector(".vimeo-player__before");
                  _ && (_.style.paddingTop = (M / T) * 100 + "%");
                });
              }),
            c.on("play", function () {
              i.setAttribute("data-vimeo-loaded", "true");
            }),
            i.getAttribute("data-vimeo-autoplay") === "false")
          )
            c.setVolume(1), c.pause();
          else if (
            (c.setVolume(0),
            i.setAttribute("data-vimeo-muted", "true"),
            i.getAttribute("data-vimeo-paused-by-user") === "false")
          ) {
            const T = () => {
              const M = i.getBoundingClientRect();
              M.top < window.innerHeight && M.bottom > 0 ? u() : d();
            };
            T(), window.addEventListener("scroll", T);
          }
          const u = () => {
              i.setAttribute("data-vimeo-activated", "true"),
                i.setAttribute("data-vimeo-playing", "true"),
                c.play();
            },
            d = () => {
              i.setAttribute("data-vimeo-playing", "false"), c.pause();
            },
            f = i.querySelector('[data-vimeo-control="play"]');
          f &&
            f.addEventListener("click", function () {
              c.setVolume(0),
                u(),
                i.getAttribute("data-vimeo-muted") === "true"
                  ? c.setVolume(0)
                  : c.setVolume(1);
            });
          const h = i.querySelector('[data-vimeo-control="pause"]');
          h &&
            h.addEventListener("click", function () {
              d(),
                i.getAttribute("data-vimeo-autoplay") === "true" &&
                  (i.setAttribute("data-vimeo-paused-by-user", "true"),
                  window.removeEventListener("scroll", checkVisibility));
            });
          const m = i.querySelector('[data-vimeo-control="mute"]');
          m &&
            m.addEventListener("click", function () {
              i.getAttribute("data-vimeo-muted") === "false"
                ? (c.setVolume(0), i.setAttribute("data-vimeo-muted", "true"))
                : (c.setVolume(1), i.setAttribute("data-vimeo-muted", "false"));
            });
          const p = !!(
              document.fullscreenEnabled ||
              document.webkitFullscreenEnabled ||
              document.mozFullScreenEnabled ||
              document.msFullscreenEnabled
            ),
            g = i.querySelector('[data-vimeo-control="fullscreen"]');
          !p && g && (g.style.display = "none"),
            g &&
              g.addEventListener("click", () => {
                const T = document.getElementById(l);
                if (!T) return;
                document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement
                  ? (i.setAttribute("data-vimeo-fullscreen", "false"),
                    (
                      document.exitFullscreen ||
                      document.webkitExitFullscreen ||
                      document.mozCancelFullScreen ||
                      document.msExitFullscreen
                    ).call(document))
                  : (i.setAttribute("data-vimeo-fullscreen", "true"),
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
            i.setAttribute("data-vimeo-fullscreen", T ? "true" : "false");
          };
          [
            "fullscreenchange",
            "webkitfullscreenchange",
            "mozfullscreenchange",
            "msfullscreenchange",
          ].forEach((T) => {
            document.addEventListener(T, y);
          });
          const b = i.querySelector("[data-vimeo-duration]");
          c.getDuration().then(function (T) {
            b && (b.textContent = v(T)),
              i
                .querySelectorAll('[data-vimeo-control="timeline"], progress')
                .forEach((_) => {
                  _.setAttribute("max", T);
                });
          });
          const w = i.querySelector('[data-vimeo-control="timeline"]'),
            x = i.querySelector("progress");
          w &&
            ["input", "change"].forEach((T) => {
              w.addEventListener(T, E);
            }),
            c.on("timeupdate", function (T) {
              w && (w.value = T.seconds),
                x && (x.value = T.seconds),
                b && (b.textContent = v(Math.trunc(T.seconds)));
            });
          let C;
          i.addEventListener("mousemove", function () {
            i.getAttribute("data-vimeo-hover") === "false" &&
              i.setAttribute("data-vimeo-hover", "true"),
              clearTimeout(C),
              (C = setTimeout(k, 3e3));
          }),
            c.on("ended", $);
        } catch {}
      });
    }
  }
  const Ff = () => {
    new Bf();
  };
  function Ql(t) {
    return (
      t !== null &&
      typeof t == "object" &&
      "constructor" in t &&
      t.constructor === Object
    );
  }
  function La(t = {}, e = {}) {
    Object.keys(e).forEach((i) => {
      typeof t[i] > "u"
        ? (t[i] = e[i])
        : Ql(e[i]) &&
          Ql(t[i]) &&
          Object.keys(e[i]).length > 0 &&
          La(t[i], e[i]);
    });
  }
  const Kl = {
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
    return La(t, Kl), t;
  }
  const Hf = {
    document: Kl,
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
    return La(t, Hf), t;
  }
  function qf(t) {
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
  class Di extends Array {
    constructor(e) {
      typeof e == "number" ? super(e) : (super(...(e || [])), qf(this));
    }
  }
  function Er(t = []) {
    const e = [];
    return (
      t.forEach((i) => {
        Array.isArray(i) ? e.push(...Er(i)) : e.push(i);
      }),
      e
    );
  }
  function Jl(t, e) {
    return Array.prototype.filter.call(t, e);
  }
  function Vf(t) {
    const e = [];
    for (let i = 0; i < t.length; i += 1)
      e.indexOf(t[i]) === -1 && e.push(t[i]);
    return e;
  }
  function Yf(t, e) {
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
    if (!e && t instanceof Di) return t;
    if (!t) return new Di(r);
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
      } else r = Yf(t.trim(), e || n);
    } else if (t.nodeType || t === i || t === n) r.push(t);
    else if (Array.isArray(t)) {
      if (t instanceof Di) return t;
      r = t;
    }
    return new Di(Vf(r));
  }
  N.fn = Di.prototype;
  function Wf(...t) {
    const e = Er(t.map((i) => i.split(" ")));
    return (
      this.forEach((i) => {
        i.classList.add(...e);
      }),
      this
    );
  }
  function Gf(...t) {
    const e = Er(t.map((i) => i.split(" ")));
    return (
      this.forEach((i) => {
        i.classList.remove(...e);
      }),
      this
    );
  }
  function Xf(...t) {
    const e = Er(t.map((i) => i.split(" ")));
    this.forEach((i) => {
      e.forEach((n) => {
        i.classList.toggle(n);
      });
    });
  }
  function jf(...t) {
    const e = Er(t.map((i) => i.split(" ")));
    return (
      Jl(this, (i) => e.filter((n) => i.classList.contains(n)).length > 0)
        .length > 0
    );
  }
  function Uf(t, e) {
    if (arguments.length === 1 && typeof t == "string")
      return this[0] ? this[0].getAttribute(t) : void 0;
    for (let i = 0; i < this.length; i += 1)
      if (arguments.length === 2) this[i].setAttribute(t, e);
      else
        for (const n in t) (this[i][n] = t[n]), this[i].setAttribute(n, t[n]);
    return this;
  }
  function Zf(t) {
    for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
    return this;
  }
  function Qf(t) {
    for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
    return this;
  }
  function Kf(t) {
    for (let e = 0; e < this.length; e += 1)
      this[e].style.transitionDuration = typeof t != "string" ? `${t}ms` : t;
    return this;
  }
  function Jf(...t) {
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
  function eh(...t) {
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
  function th(...t) {
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
  function ih(t) {
    const e = this;
    function i(n) {
      n.target === this && (t.call(this, n), e.off("transitionend", i));
    }
    return t && e.on("transitionend", i), this;
  }
  function nh(t) {
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
  function rh(t) {
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
  function sh() {
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
  function ah() {
    const t = pe();
    return this[0] ? t.getComputedStyle(this[0], null) : {};
  }
  function oh(t, e) {
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
  function lh(t) {
    return t
      ? (this.forEach((e, i) => {
          t.apply(e, [e, i]);
        }),
        this)
      : this;
  }
  function ch(t) {
    const e = Jl(this, t);
    return N(e);
  }
  function uh(t) {
    if (typeof t > "u") return this[0] ? this[0].innerHTML : null;
    for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
    return this;
  }
  function dh(t) {
    if (typeof t > "u") return this[0] ? this[0].textContent.trim() : null;
    for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
    return this;
  }
  function fh(t) {
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
    if (t.nodeType || t instanceof Di) {
      for (r = t.nodeType ? [t] : t, s = 0; s < r.length; s += 1)
        if (r[s] === n) return !0;
      return !1;
    }
    return !1;
  }
  function hh() {
    let t = this[0],
      e;
    if (t) {
      for (e = 0; (t = t.previousSibling) !== null; )
        t.nodeType === 1 && (e += 1);
      return e;
    }
  }
  function ph(t) {
    if (typeof t > "u") return this;
    const e = this.length;
    if (t > e - 1) return N([]);
    if (t < 0) {
      const i = e + t;
      return i < 0 ? N([]) : N([this[i]]);
    }
    return N([this[t]]);
  }
  function mh(...t) {
    let e;
    const i = Re();
    for (let n = 0; n < t.length; n += 1) {
      e = t[n];
      for (let r = 0; r < this.length; r += 1)
        if (typeof e == "string") {
          const s = i.createElement("div");
          for (s.innerHTML = e; s.firstChild; )
            this[r].appendChild(s.firstChild);
        } else if (e instanceof Di)
          for (let s = 0; s < e.length; s += 1) this[r].appendChild(e[s]);
        else this[r].appendChild(e);
    }
    return this;
  }
  function gh(t) {
    const e = Re();
    let i, n;
    for (i = 0; i < this.length; i += 1)
      if (typeof t == "string") {
        const r = e.createElement("div");
        for (r.innerHTML = t, n = r.childNodes.length - 1; n >= 0; n -= 1)
          this[i].insertBefore(r.childNodes[n], this[i].childNodes[0]);
      } else if (t instanceof Di)
        for (n = 0; n < t.length; n += 1)
          this[i].insertBefore(t[n], this[i].childNodes[0]);
      else this[i].insertBefore(t, this[i].childNodes[0]);
    return this;
  }
  function vh(t) {
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
  function yh(t) {
    const e = [];
    let i = this[0];
    if (!i) return N([]);
    for (; i.nextElementSibling; ) {
      const n = i.nextElementSibling;
      t ? N(n).is(t) && e.push(n) : e.push(n), (i = n);
    }
    return N(e);
  }
  function bh(t) {
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
  function _h(t) {
    const e = [];
    let i = this[0];
    if (!i) return N([]);
    for (; i.previousElementSibling; ) {
      const n = i.previousElementSibling;
      t ? N(n).is(t) && e.push(n) : e.push(n), (i = n);
    }
    return N(e);
  }
  function wh(t) {
    const e = [];
    for (let i = 0; i < this.length; i += 1)
      this[i].parentNode !== null &&
        (t
          ? N(this[i].parentNode).is(t) && e.push(this[i].parentNode)
          : e.push(this[i].parentNode));
    return N(e);
  }
  function xh(t) {
    const e = [];
    for (let i = 0; i < this.length; i += 1) {
      let n = this[i].parentNode;
      for (; n; ) t ? N(n).is(t) && e.push(n) : e.push(n), (n = n.parentNode);
    }
    return N(e);
  }
  function Sh(t) {
    let e = this;
    return typeof t > "u" ? N([]) : (e.is(t) || (e = e.parents(t).eq(0)), e);
  }
  function Th(t) {
    const e = [];
    for (let i = 0; i < this.length; i += 1) {
      const n = this[i].querySelectorAll(t);
      for (let r = 0; r < n.length; r += 1) e.push(n[r]);
    }
    return N(e);
  }
  function Eh(t) {
    const e = [];
    for (let i = 0; i < this.length; i += 1) {
      const n = this[i].children;
      for (let r = 0; r < n.length; r += 1)
        (!t || N(n[r]).is(t)) && e.push(n[r]);
    }
    return N(e);
  }
  function Ch() {
    for (let t = 0; t < this.length; t += 1)
      this[t].parentNode && this[t].parentNode.removeChild(this[t]);
    return this;
  }
  const ec = {
    addClass: Wf,
    removeClass: Gf,
    hasClass: jf,
    toggleClass: Xf,
    attr: Uf,
    removeAttr: Zf,
    transform: Qf,
    transition: Kf,
    on: Jf,
    off: eh,
    trigger: th,
    transitionEnd: ih,
    outerWidth: nh,
    outerHeight: rh,
    styles: ah,
    offset: sh,
    css: oh,
    each: lh,
    html: uh,
    text: dh,
    is: fh,
    index: hh,
    eq: ph,
    append: mh,
    prepend: gh,
    next: vh,
    nextAll: yh,
    prev: bh,
    prevAll: _h,
    parent: wh,
    parents: xh,
    closest: Sh,
    find: Th,
    children: Eh,
    filter: ch,
    remove: Ch,
  };
  Object.keys(ec).forEach((t) => {
    Object.defineProperty(N.fn, t, { value: ec[t], writable: !0 });
  });
  function kh(t) {
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
  function Ii(t, e = 0) {
    return setTimeout(t, e);
  }
  function kt() {
    return Date.now();
  }
  function Ah(t) {
    const e = pe();
    let i;
    return (
      e.getComputedStyle && (i = e.getComputedStyle(t, null)),
      !i && t.currentStyle && (i = t.currentStyle),
      i || (i = t.style),
      i
    );
  }
  function za(t, e = "x") {
    const i = pe();
    let n, r, s;
    const a = Ah(t);
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
  function Cr(t) {
    return (
      typeof t == "object" &&
      t !== null &&
      t.constructor &&
      Object.prototype.toString.call(t).slice(8, -1) === "Object"
    );
  }
  function Ph(t) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? t instanceof HTMLElement
      : t && (t.nodeType === 1 || t.nodeType === 11);
  }
  function At(...t) {
    const e = Object(t[0]),
      i = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < t.length; n += 1) {
      const r = t[n];
      if (r != null && !Ph(r)) {
        const s = Object.keys(Object(r)).filter((a) => i.indexOf(a) < 0);
        for (let a = 0, o = s.length; a < o; a += 1) {
          const l = s[a],
            c = Object.getOwnPropertyDescriptor(r, l);
          c !== void 0 &&
            c.enumerable &&
            (Cr(e[l]) && Cr(r[l])
              ? r[l].__swiper__
                ? (e[l] = r[l])
                : At(e[l], r[l])
              : !Cr(e[l]) && Cr(r[l])
              ? ((e[l] = {}), r[l].__swiper__ ? (e[l] = r[l]) : At(e[l], r[l]))
              : (e[l] = r[l]));
        }
      }
    }
    return e;
  }
  function kr(t, e, i) {
    t.style.setProperty(e, i);
  }
  function tc({ swiper: t, targetPosition: e, side: i }) {
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
  let Da;
  function Mh() {
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
  function ic() {
    return Da || (Da = Mh()), Da;
  }
  let Ia;
  function $h({ userAgent: t } = {}) {
    const e = ic(),
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
  function Oh(t = {}) {
    return Ia || (Ia = $h(t)), Ia;
  }
  let Ra;
  function Lh() {
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
  function zh() {
    return Ra || (Ra = Lh()), Ra;
  }
  function Dh({ swiper: t, on: e, emit: i }) {
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
              u.forEach(({ contentBoxSize: p, contentRect: g, target: y }) => {
                (y && y !== t.el) ||
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
  function Ih({ swiper: t, extendParams: e, on: i, emit: n }) {
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
  const Rh = {
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
  function Nh() {
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
  function Bh() {
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
    function i(T, M) {
      return parseFloat(T.getPropertyValue(e(M)) || 0);
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
    const y = t.snapGrid.length,
      v = t.slidesGrid.length;
    let b = n.spaceBetween,
      w = -p,
      x = 0,
      E = 0;
    if (typeof s > "u") return;
    typeof b == "string" &&
      b.indexOf("%") >= 0 &&
      (b = (parseFloat(b.replace("%", "")) / 100) * s),
      (t.virtualSize = -b),
      a
        ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" })
        : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
      n.centeredSlides &&
        n.cssMode &&
        (kr(t.wrapperEl, "--swiper-centered-offset-before", ""),
        kr(t.wrapperEl, "--swiper-centered-offset-after", ""));
    const C = n.grid && n.grid.rows > 1 && t.grid;
    C && t.grid.initSlides(d);
    let k;
    const $ =
      n.slidesPerView === "auto" &&
      n.breakpoints &&
      Object.keys(n.breakpoints).filter(
        (T) => typeof n.breakpoints[T].slidesPerView < "u"
      ).length > 0;
    for (let T = 0; T < d; T += 1) {
      k = 0;
      const M = u.eq(T);
      if ((C && t.grid.updateSlide(T, M, d, e), M.css("display") !== "none")) {
        if (n.slidesPerView === "auto") {
          $ && (u[T].style[e("width")] = "");
          const _ = getComputedStyle(M[0]),
            S = M[0].style.transform,
            O = M[0].style.webkitTransform;
          if (
            (S && (M[0].style.transform = "none"),
            O && (M[0].style.webkitTransform = "none"),
            n.roundLengths)
          )
            k = t.isHorizontal() ? M.outerWidth(!0) : M.outerHeight(!0);
          else {
            const L = i(_, "width"),
              A = i(_, "padding-left"),
              z = i(_, "padding-right"),
              D = i(_, "margin-left"),
              B = i(_, "margin-right"),
              P = _.getPropertyValue("box-sizing");
            if (P && P === "border-box") k = L + D + B;
            else {
              const { clientWidth: q, offsetWidth: X } = M[0];
              k = L + A + z + D + B + (X - q);
            }
          }
          S && (M[0].style.transform = S),
            O && (M[0].style.webkitTransform = O),
            n.roundLengths && (k = Math.floor(k));
        } else
          (k = (s - (n.slidesPerView - 1) * b) / n.slidesPerView),
            n.roundLengths && (k = Math.floor(k)),
            u[T] && (u[T].style[e("width")] = `${k}px`);
        u[T] && (u[T].swiperSlideSize = k),
          m.push(k),
          n.centeredSlides
            ? ((w = w + k / 2 + x / 2 + b),
              x === 0 && T !== 0 && (w = w - s / 2 - b),
              T === 0 && (w = w - s / 2 - b),
              Math.abs(w) < 1 / 1e3 && (w = 0),
              n.roundLengths && (w = Math.floor(w)),
              E % n.slidesPerGroup === 0 && f.push(w),
              h.push(w))
            : (n.roundLengths && (w = Math.floor(w)),
              (E - Math.min(t.params.slidesPerGroupSkip, E)) %
                t.params.slidesPerGroup ===
                0 && f.push(w),
              h.push(w),
              (w = w + k + b)),
          (t.virtualSize += k + b),
          (x = k),
          (E += 1);
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
      C && t.grid.updateWrapperSize(k, f, e),
      !n.centeredSlides)
    ) {
      const T = [];
      for (let M = 0; M < f.length; M += 1) {
        let _ = f[M];
        n.roundLengths && (_ = Math.floor(_)),
          f[M] <= t.virtualSize - s && T.push(_);
      }
      (f = T),
        Math.floor(t.virtualSize - s) - Math.floor(f[f.length - 1]) > 1 &&
          f.push(t.virtualSize - s);
    }
    if ((f.length === 0 && (f = [0]), n.spaceBetween !== 0)) {
      const T = t.isHorizontal() && a ? "marginLeft" : e("marginRight");
      u.filter((M, _) => (n.cssMode ? _ !== u.length - 1 : !0)).css({
        [T]: `${b}px`,
      });
    }
    if (n.centeredSlides && n.centeredSlidesBounds) {
      let T = 0;
      m.forEach((_) => {
        T += _ + (n.spaceBetween ? n.spaceBetween : 0);
      }),
        (T -= n.spaceBetween);
      const M = T - s;
      f = f.map((_) => (_ < 0 ? -p : _ > M ? M + g : _));
    }
    if (n.centerInsufficientSlides) {
      let T = 0;
      if (
        (m.forEach((M) => {
          T += M + (n.spaceBetween ? n.spaceBetween : 0);
        }),
        (T -= n.spaceBetween),
        T < s)
      ) {
        const M = (s - T) / 2;
        f.forEach((_, S) => {
          f[S] = _ - M;
        }),
          h.forEach((_, S) => {
            h[S] = _ + M;
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
      kr(t.wrapperEl, "--swiper-centered-offset-before", `${-f[0]}px`),
        kr(
          t.wrapperEl,
          "--swiper-centered-offset-after",
          `${t.size / 2 - m[m.length - 1] / 2}px`
        );
      const T = -t.snapGrid[0],
        M = -t.slidesGrid[0];
      (t.snapGrid = t.snapGrid.map((_) => _ + T)),
        (t.slidesGrid = t.slidesGrid.map((_) => _ + M));
    }
    if (
      (d !== c && t.emit("slidesLengthChange"),
      f.length !== y &&
        (t.params.watchOverflow && t.checkOverflow(),
        t.emit("snapGridLengthChange")),
      h.length !== v && t.emit("slidesGridLengthChange"),
      n.watchSlidesProgress && t.updateSlidesOffset(),
      !l && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
    ) {
      const T = `${n.containerModifierClass}backface-hidden`,
        M = t.$el.hasClass(T);
      d <= n.maxBackfaceHiddenSlides
        ? M || t.$el.addClass(T)
        : M && t.$el.removeClass(T);
    }
  }
  function Fh(t) {
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
  function Hh() {
    const t = this,
      e = t.slides;
    for (let i = 0; i < e.length; i += 1)
      e[i].swiperSlideOffset = t.isHorizontal()
        ? e[i].offsetLeft
        : e[i].offsetTop;
  }
  function qh(t = (this && this.translate) || 0) {
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
  function Vh(t) {
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
  function Yh() {
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
  function Wh(t) {
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
  function Gh(t) {
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
  const Xh = {
    updateSize: Nh,
    updateSlides: Bh,
    updateAutoHeight: Fh,
    updateSlidesOffset: Hh,
    updateSlidesProgress: qh,
    updateProgress: Vh,
    updateSlidesClasses: Yh,
    updateActiveIndex: Wh,
    updateClickedSlide: Gh,
  };
  function jh(t = this.isHorizontal() ? "x" : "y") {
    const e = this,
      { params: i, rtlTranslate: n, translate: r, $wrapperEl: s } = e;
    if (i.virtualTranslate) return n ? -r : r;
    if (i.cssMode) return r;
    let a = za(s[0], t);
    return n && (a = -a), a || 0;
  }
  function Uh(t, e) {
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
  function Zh() {
    return -this.snapGrid[0];
  }
  function Qh() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function Kh(t = 0, e = this.params.speed, i = !0, n = !0, r) {
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
            tc({ swiper: s, targetPosition: -u, side: d ? "left" : "top" }), !0
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
  const Jh = {
    getTranslate: jh,
    setTranslate: Uh,
    minTranslate: Zh,
    maxTranslate: Qh,
    translateTo: Kh,
  };
  function ep(t, e) {
    const i = this;
    i.params.cssMode || i.$wrapperEl.transition(t),
      i.emit("setTransition", t, e);
  }
  function nc({ swiper: t, runCallbacks: e, direction: i, step: n }) {
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
  function tp(t = !0, e) {
    const i = this,
      { params: n } = i;
    n.cssMode ||
      (n.autoHeight && i.updateAutoHeight(),
      nc({ swiper: i, runCallbacks: t, direction: e, step: "Start" }));
  }
  function ip(t = !0, e) {
    const i = this,
      { params: n } = i;
    (i.animating = !1),
      !n.cssMode &&
        (i.setTransition(0),
        nc({ swiper: i, runCallbacks: t, direction: e, step: "End" }));
  }
  const np = { setTransition: ep, transitionStart: tp, transitionEnd: ip };
  function rp(t = 0, e = this.params.speed, i = !0, n, r) {
    if (typeof t != "number" && typeof t != "string")
      throw new Error(
        `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof t}] given.`
      );
    if (typeof t == "string") {
      const b = parseInt(t, 10);
      if (!isFinite(b))
        throw new Error(
          `The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`
        );
      t = b;
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
    const y = -l[g];
    if (o.normalizeSlideIndex)
      for (let b = 0; b < c.length; b += 1) {
        const w = -Math.floor(y * 100),
          x = Math.floor(c[b] * 100),
          E = Math.floor(c[b + 1] * 100);
        typeof c[b + 1] < "u"
          ? w >= x && w < E - (E - x) / 2
            ? (a = b)
            : w >= x && w < E && (a = b + 1)
          : w >= x && (a = b);
      }
    if (
      s.initialized &&
      a !== d &&
      ((!s.allowSlideNext && y < s.translate && y < s.minTranslate()) ||
        (!s.allowSlidePrev &&
          y > s.translate &&
          y > s.maxTranslate() &&
          (d || 0) !== a))
    )
      return !1;
    a !== (u || 0) && i && s.emit("beforeSlideChangeStart"),
      s.updateProgress(y);
    let v;
    if (
      (a > d ? (v = "next") : a < d ? (v = "prev") : (v = "reset"),
      (f && -y === s.translate) || (!f && y === s.translate))
    )
      return (
        s.updateActiveIndex(a),
        o.autoHeight && s.updateAutoHeight(),
        s.updateSlidesClasses(),
        o.effect !== "slide" && s.setTranslate(y),
        v !== "reset" && (s.transitionStart(i, v), s.transitionEnd(i, v)),
        !1
      );
    if (o.cssMode) {
      const b = s.isHorizontal(),
        w = f ? y : -y;
      if (e === 0) {
        const x = s.virtual && s.params.virtual.enabled;
        x &&
          ((s.wrapperEl.style.scrollSnapType = "none"),
          (s._immediateVirtual = !0)),
          (h[b ? "scrollLeft" : "scrollTop"] = w),
          x &&
            requestAnimationFrame(() => {
              (s.wrapperEl.style.scrollSnapType = ""),
                (s._swiperImmediateVirtual = !1);
            });
      } else {
        if (!s.support.smoothScroll)
          return (
            tc({ swiper: s, targetPosition: w, side: b ? "left" : "top" }), !0
          );
        h.scrollTo({ [b ? "left" : "top"]: w, behavior: "smooth" });
      }
      return !0;
    }
    return (
      s.setTransition(e),
      s.setTranslate(y),
      s.updateActiveIndex(a),
      s.updateSlidesClasses(),
      s.emit("beforeTransitionStart", e, n),
      s.transitionStart(i, v),
      e === 0
        ? s.transitionEnd(i, v)
        : s.animating ||
          ((s.animating = !0),
          s.onSlideToWrapperTransitionEnd ||
            (s.onSlideToWrapperTransitionEnd = function (w) {
              !s ||
                s.destroyed ||
                (w.target === this &&
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
  function sp(t = 0, e = this.params.speed, i = !0, n) {
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
  function ap(t = this.params.speed, e = !0, i) {
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
  function op(t = this.params.speed, e = !0, i) {
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
      a.forEach((y, v) => {
        f >= y && (g = v);
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
  function lp(t = this.params.speed, e = !0, i) {
    const n = this;
    return n.slideTo(n.activeIndex, t, e, i);
  }
  function cp(t = this.params.speed, e = !0, i, n = 0.5) {
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
  function up() {
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
              Ii(() => {
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
            Ii(() => {
              t.slideTo(r);
            }))
          : t.slideTo(r);
    } else t.slideTo(r);
  }
  const dp = {
    slideTo: rp,
    slideToLoop: sp,
    slideNext: ap,
    slidePrev: op,
    slideReset: lp,
    slideToClosest: cp,
    slideToClickedSlide: up,
  };
  function fp() {
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
  function hp() {
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
  function pp() {
    const t = this,
      { $wrapperEl: e, params: i, slides: n } = t;
    e
      .children(
        `.${i.slideClass}.${i.slideDuplicateClass},.${i.slideClass}.${i.slideBlankClass}`
      )
      .remove(),
      n.removeAttr("data-swiper-slide-index");
  }
  const mp = { loopCreate: fp, loopFix: hp, loopDestroy: pp };
  function gp(t) {
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
  function vp() {
    const t = this;
    t.support.touch ||
      (t.params.watchOverflow && t.isLocked) ||
      t.params.cssMode ||
      (t[
        t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = "");
  }
  const yp = { setGrabCursor: gp, unsetGrabCursor: vp };
  function bp(t, e = this) {
    function i(n) {
      if (!n || n === Re() || n === pe()) return null;
      n.assignedSlot && (n = n.assignedSlot);
      const r = n.closest(t);
      return !r && !n.getRootNode ? null : r || i(n.getRootNode().host);
    }
    return i(e);
  }
  function _p(t) {
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
    if (s.noSwiping && (h ? bp(f, c[0]) : c.closest(f)[0])) {
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
    if (g && (m <= y || m >= n.innerWidth - y))
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
      const b = v && e.allowTouchMove && s.touchStartPreventDefault;
      (s.touchStartForcePreventDefault || b) &&
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
  function wp(t) {
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
      let y;
      (i.isHorizontal() && s.currentY === s.startY) ||
      (i.isVertical() && s.currentX === s.startX)
        ? (n.isScrolling = !1)
        : f * f + h * h >= 25 &&
          ((y = (Math.atan2(Math.abs(h), Math.abs(f)) * 180) / Math.PI),
          (n.isScrolling = i.isHorizontal()
            ? y > r.touchAngle
            : 90 - y > r.touchAngle));
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
  function xp(t) {
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
      Ii(() => {
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
      const b = v < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      typeof a[v + b] < "u"
        ? d >= a[v] && d < a[v + b] && ((f = v), (h = a[v + b] - a[v]))
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
      y = f < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    if (u > n.longSwipesMs) {
      if (!n.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" &&
        (g >= n.longSwipesRatio
          ? e.slideTo(n.rewind && e.isEnd ? m : f + y)
          : e.slideTo(f)),
        e.swipeDirection === "prev" &&
          (g > 1 - n.longSwipesRatio
            ? e.slideTo(f + y)
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
          ? e.slideTo(f + y)
          : e.slideTo(f)
        : (e.swipeDirection === "next" && e.slideTo(m !== null ? m : f + y),
          e.swipeDirection === "prev" && e.slideTo(p !== null ? p : f));
    }
  }
  function rc() {
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
  function Sp(t) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && t.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (t.stopPropagation(), t.stopImmediatePropagation())));
  }
  function Tp() {
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
  let sc = !1;
  function Ep() {}
  const ac = (t, e) => {
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
            rc,
            !0
          )
        : t[d]("observerUpdate", rc, !0);
  };
  function Cp() {
    const t = this,
      e = Re(),
      { params: i, support: n } = t;
    (t.onTouchStart = _p.bind(t)),
      (t.onTouchMove = wp.bind(t)),
      (t.onTouchEnd = xp.bind(t)),
      i.cssMode && (t.onScroll = Tp.bind(t)),
      (t.onClick = Sp.bind(t)),
      n.touch && !sc && (e.addEventListener("touchstart", Ep), (sc = !0)),
      ac(t, "on");
  }
  function kp() {
    ac(this, "off");
  }
  const Ap = { attachEvents: Cp, detachEvents: kp },
    oc = (t, e) => t.grid && e.grid && e.grid.rows > 1;
  function Pp() {
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
      u = oc(t, r),
      d = oc(t, c),
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
        const y = r[g] && r[g].enabled,
          v = c[g] && c[g].enabled;
        y && !v && t[g].disable(), !y && v && t[g].enable();
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
  function Mp(t, e = "window", i) {
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
  const $p = { setBreakpoint: Pp, getBreakpoint: Mp };
  function Op(t, e) {
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
  function Lp() {
    const t = this,
      { classNames: e, params: i, rtl: n, $el: r, device: s, support: a } = t,
      o = Op(
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
  function zp() {
    const t = this,
      { $el: e, classNames: i } = t;
    e.removeClass(i.join(" ")), t.emitContainerClasses();
  }
  const Dp = { addClasses: Lp, removeClasses: zp };
  function Ip(t, e, i, n, r, s) {
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
  function Rp() {
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
  const Np = { loadImage: Ip, preloadImages: Rp };
  function Bp() {
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
  const Fp = { checkOverflow: Bp },
    lc = {
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
  function Hp(t, e) {
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
  const Na = {
      eventsEmitter: Rh,
      update: Xh,
      translate: Jh,
      transition: np,
      slide: dp,
      loop: mp,
      grabCursor: yp,
      events: Ap,
      breakpoints: $p,
      checkOverflow: Fp,
      classes: Dp,
      images: Np,
    },
    Ba = {};
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
        (r.support = ic()),
        (r.device = Oh({ userAgent: n.userAgent })),
        (r.browser = zh()),
        (r.eventsListeners = {}),
        (r.eventsAnyListeners = []),
        (r.modules = [...r.__modules__]),
        n.modules && Array.isArray(n.modules) && r.modules.push(...n.modules);
      const s = {};
      r.modules.forEach((o) => {
        o({
          swiper: r,
          extendParams: Hp(n, s),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r),
        });
      });
      const a = At({}, lc, s);
      return (
        (r.params = At({}, a, Ba, n)),
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
          e !== !1 && ((n.$el[0].swiper = null), kh(n)),
          (n.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      At(Ba, e);
    }
    static get extendedDefaults() {
      return Ba;
    }
    static get defaults() {
      return lc;
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
  Object.keys(Na).forEach((t) => {
    Object.keys(Na[t]).forEach((e) => {
      ft.prototype[e] = Na[t][e];
    });
  }),
    ft.use([Dh, Ih]);
  function qp({ swiper: t, extendParams: e, on: i, emit: n }) {
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
        { from: y, to: v, slides: b, slidesGrid: w, offset: x } = t.virtual;
      t.params.cssMode || t.updateActiveIndex();
      const E = t.activeIndex || 0;
      let C;
      t.rtlTranslate ? (C = "right") : (C = t.isHorizontal() ? "left" : "top");
      let k, $;
      m
        ? ((k = Math.floor(f / 2) + h + g), ($ = Math.floor(f / 2) + h + p))
        : ((k = f + (h - 1) + g), ($ = h + p));
      const T = Math.max((E || 0) - $, 0),
        M = Math.min((E || 0) + k, b.length - 1),
        _ = (t.slidesGrid[T] || 0) - (t.slidesGrid[0] || 0);
      Object.assign(t.virtual, {
        from: T,
        to: M,
        offset: _,
        slidesGrid: t.slidesGrid,
      });
      function S() {
        t.updateSlides(),
          t.updateProgress(),
          t.updateSlidesClasses(),
          t.lazy && t.params.lazy.enabled && t.lazy.load(),
          n("virtualUpdate");
      }
      if (y === T && v === M && !d) {
        t.slidesGrid !== w && _ !== x && t.slides.css(C, `${_}px`),
          t.updateProgress(),
          n("virtualUpdate");
        return;
      }
      if (t.params.virtual.renderExternal) {
        t.params.virtual.renderExternal.call(t, {
          offset: _,
          from: T,
          to: M,
          slides: (function () {
            const z = [];
            for (let D = T; D <= M; D += 1) z.push(b[D]);
            return z;
          })(),
        }),
          t.params.virtual.renderExternalUpdate ? S() : n("virtualUpdate");
        return;
      }
      const O = [],
        L = [];
      if (d) t.$wrapperEl.find(`.${t.params.slideClass}`).remove();
      else
        for (let A = y; A <= v; A += 1)
          (A < T || A > M) &&
            t.$wrapperEl
              .find(`.${t.params.slideClass}[data-swiper-slide-index="${A}"]`)
              .remove();
      for (let A = 0; A < b.length; A += 1)
        A >= T &&
          A <= M &&
          (typeof v > "u" || d
            ? L.push(A)
            : (A > v && L.push(A), A < y && O.push(A)));
      L.forEach((A) => {
        t.$wrapperEl.append(s(b[A], A));
      }),
        O.sort((A, z) => z - A).forEach((A) => {
          t.$wrapperEl.prepend(s(b[A], A));
        }),
        t.$wrapperEl.children(".swiper-slide").css(C, `${_}px`),
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
        Object.keys(p).forEach((y) => {
          const v = p[y],
            b = v.attr("data-swiper-slide-index");
          b && v.attr("data-swiper-slide-index", parseInt(b, 10) + m),
            (g[parseInt(y, 10) + m] = v);
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
          kr(t.wrapperEl, "--swiper-virtual-size", `${t.virtualSize}px`);
      }),
      Object.assign(t.virtual, {
        appendSlide: o,
        prependSlide: l,
        removeSlide: c,
        removeAllSlides: u,
        update: a,
      });
  }
  function Vp({ swiper: t, extendParams: e, on: i, emit: n }) {
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
        y = f === 39,
        v = f === 38,
        b = f === 40;
      if (
        (!t.allowSlideNext &&
          ((t.isHorizontal() && y) || (t.isVertical() && b) || p)) ||
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
        if (t.params.keyboard.onlyInViewport && (m || p || g || y || v || b)) {
          let w = !1;
          if (
            t.$el.parents(`.${t.params.slideClass}`).length > 0 &&
            t.$el.parents(`.${t.params.slideActiveClass}`).length === 0
          )
            return;
          const x = t.$el,
            E = x[0].clientWidth,
            C = x[0].clientHeight,
            k = s.innerWidth,
            $ = s.innerHeight,
            T = t.$el.offset();
          u && (T.left -= t.$el[0].scrollLeft);
          const M = [
            [T.left, T.top],
            [T.left + E, T.top],
            [T.left, T.top + C],
            [T.left + E, T.top + C],
          ];
          for (let _ = 0; _ < M.length; _ += 1) {
            const S = M[_];
            if (S[0] >= 0 && S[0] <= k && S[1] >= 0 && S[1] <= $) {
              if (S[0] === 0 && S[1] === 0) continue;
              w = !0;
            }
          }
          if (!w) return;
        }
        t.isHorizontal()
          ? ((m || p || g || y) &&
              (d.preventDefault ? d.preventDefault() : (d.returnValue = !1)),
            (((p || y) && !u) || ((m || g) && u)) && t.slideNext(),
            (((m || g) && !u) || ((p || y) && u)) && t.slidePrev())
          : ((m || p || v || b) &&
              (d.preventDefault ? d.preventDefault() : (d.returnValue = !1)),
            (p || b) && t.slideNext(),
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
  function Yp({ swiper: t, extendParams: e, on: i, emit: n }) {
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
      let E = 0,
        C = 0,
        k = 0,
        $ = 0;
      return (
        "detail" in v && (C = v.detail),
        "wheelDelta" in v && (C = -v.wheelDelta / 120),
        "wheelDeltaY" in v && (C = -v.wheelDeltaY / 120),
        "wheelDeltaX" in v && (E = -v.wheelDeltaX / 120),
        "axis" in v && v.axis === v.HORIZONTAL_AXIS && ((E = C), (C = 0)),
        (k = E * 10),
        ($ = C * 10),
        "deltaY" in v && ($ = v.deltaY),
        "deltaX" in v && (k = v.deltaX),
        v.shiftKey && !k && ((k = $), ($ = 0)),
        (k || $) &&
          v.deltaMode &&
          (v.deltaMode === 1
            ? ((k *= 40), ($ *= 40))
            : ((k *= 800), ($ *= 800))),
        k && !E && (E = k < 1 ? -1 : 1),
        $ && !C && (C = $ < 1 ? -1 : 1),
        { spinX: E, spinY: C, pixelX: k, pixelY: $ }
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
      const b = t.params.mousewheel;
      if (v.direction < 0) {
        if (t.isEnd && !t.params.loop && b.releaseOnEdges) return !0;
      } else if (t.isBeginning && !t.params.loop && b.releaseOnEdges) return !0;
      return !1;
    }
    function m(v) {
      let b = v,
        w = !0;
      if (!t.enabled) return;
      const x = t.params.mousewheel;
      t.params.cssMode && b.preventDefault();
      let E = t.$el;
      if (
        (t.params.mousewheel.eventsTarget !== "container" &&
          (E = N(t.params.mousewheel.eventsTarget)),
        !t.mouseEntered && !E[0].contains(b.target) && !x.releaseOnEdges)
      )
        return !0;
      b.originalEvent && (b = b.originalEvent);
      let C = 0;
      const k = t.rtlTranslate ? -1 : 1,
        $ = c(b);
      if (x.forceToAxis)
        if (t.isHorizontal())
          if (Math.abs($.pixelX) > Math.abs($.pixelY)) C = -$.pixelX * k;
          else return !0;
        else if (Math.abs($.pixelY) > Math.abs($.pixelX)) C = -$.pixelY;
        else return !0;
      else
        C = Math.abs($.pixelX) > Math.abs($.pixelY) ? -$.pixelX * k : -$.pixelY;
      if (C === 0) return !0;
      x.invert && (C = -C);
      let T = t.getTranslate() + C * x.sensitivity;
      if (
        (T >= t.minTranslate() && (T = t.minTranslate()),
        T <= t.maxTranslate() && (T = t.maxTranslate()),
        (w = t.params.loop
          ? !0
          : !(T === t.minTranslate() || T === t.maxTranslate())),
        w && t.params.nested && b.stopPropagation(),
        !t.params.freeMode || !t.params.freeMode.enabled)
      ) {
        const M = {
          time: kt(),
          delta: Math.abs(C),
          direction: Math.sign(C),
          raw: v,
        };
        l.length >= 2 && l.shift();
        const _ = l.length ? l[l.length - 1] : void 0;
        if (
          (l.push(M),
          _
            ? (M.direction !== _.direction ||
                M.delta > _.delta ||
                M.time > _.time + 150) &&
              f(M)
            : f(M),
          h(M))
        )
          return !0;
      } else {
        const M = { time: kt(), delta: Math.abs(C), direction: Math.sign(C) },
          _ =
            o &&
            M.time < o.time + 500 &&
            M.delta <= o.delta &&
            M.direction === o.direction;
        if (!_) {
          (o = void 0), t.params.loop && t.loopFix();
          let S = t.getTranslate() + C * x.sensitivity;
          const O = t.isBeginning,
            L = t.isEnd;
          if (
            (S >= t.minTranslate() && (S = t.minTranslate()),
            S <= t.maxTranslate() && (S = t.maxTranslate()),
            t.setTransition(0),
            t.setTranslate(S),
            t.updateProgress(),
            t.updateActiveIndex(),
            t.updateSlidesClasses(),
            ((!O && t.isBeginning) || (!L && t.isEnd)) &&
              t.updateSlidesClasses(),
            t.params.freeMode.sticky)
          ) {
            clearTimeout(s), (s = void 0), l.length >= 15 && l.shift();
            const A = l.length ? l[l.length - 1] : void 0,
              z = l[0];
            if (
              (l.push(M),
              A && (M.delta > A.delta || M.direction !== A.direction))
            )
              l.splice(0);
            else if (
              l.length >= 15 &&
              M.time - z.time < 500 &&
              z.delta - M.delta >= 1 &&
              M.delta <= 6
            ) {
              const D = C > 0 ? 0.8 : 0.2;
              (o = M),
                l.splice(0),
                (s = Ii(() => {
                  t.slideToClosest(t.params.speed, !0, void 0, D);
                }, 0));
            }
            s ||
              (s = Ii(() => {
                (o = M),
                  l.splice(0),
                  t.slideToClosest(t.params.speed, !0, void 0, 0.5);
              }, 500));
          }
          if (
            (_ || n("scroll", b),
            t.params.autoplay &&
              t.params.autoplayDisableOnInteraction &&
              t.autoplay.stop(),
            S === t.minTranslate() || S === t.maxTranslate())
          )
            return !0;
        }
      }
      return b.preventDefault ? b.preventDefault() : (b.returnValue = !1), !1;
    }
    function p(v) {
      let b = t.$el;
      t.params.mousewheel.eventsTarget !== "container" &&
        (b = N(t.params.mousewheel.eventsTarget)),
        b[v]("mouseenter", u),
        b[v]("mouseleave", d),
        b[v]("wheel", m);
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
    i("init", () => {
      !t.params.mousewheel.enabled && t.params.cssMode && y(),
        t.params.mousewheel.enabled && g();
    }),
      i("destroy", () => {
        t.params.cssMode && g(), t.mousewheel.enabled && y();
      }),
      Object.assign(t.mousewheel, { enable: g, disable: y });
  }
  function Fa(t, e, i, n) {
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
  function Wp({ swiper: t, extendParams: e, on: i, emit: n }) {
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
        ((t.params.navigation = Fa(
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
          y = m.target;
        if (t.params.navigation.hideOnClick && !N(y).is(g) && !N(y).is(p)) {
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
  function Gp({ swiper: t, extendParams: e, on: i, emit: n }) {
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
      let b;
      const w = t.params.loop
        ? Math.ceil((y - t.loopedSlides * 2) / t.params.slidesPerGroup)
        : t.snapGrid.length;
      if (
        (t.params.loop
          ? ((b = Math.ceil(
              (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
            )),
            b > y - 1 - t.loopedSlides * 2 && (b -= y - t.loopedSlides * 2),
            b > w - 1 && (b -= w),
            b < 0 && t.params.paginationType !== "bullets" && (b = w + b))
          : typeof t.snapIndex < "u"
          ? (b = t.snapIndex)
          : (b = t.activeIndex || 0),
        g.type === "bullets" &&
          t.pagination.bullets &&
          t.pagination.bullets.length > 0)
      ) {
        const x = t.pagination.bullets;
        let E, C, k;
        if (
          (g.dynamicBullets &&
            ((s = x.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
            v.css(
              t.isHorizontal() ? "width" : "height",
              `${s * (g.dynamicMainBullets + 4)}px`
            ),
            g.dynamicMainBullets > 1 &&
              t.previousIndex !== void 0 &&
              ((a += b - (t.previousIndex - t.loopedSlides || 0)),
              a > g.dynamicMainBullets - 1
                ? (a = g.dynamicMainBullets - 1)
                : a < 0 && (a = 0)),
            (E = Math.max(b - a, 0)),
            (C = E + (Math.min(x.length, g.dynamicMainBullets) - 1)),
            (k = (C + E) / 2)),
          x.removeClass(
            ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
              .map(($) => `${g.bulletActiveClass}${$}`)
              .join(" ")
          ),
          v.length > 1)
        )
          x.each(($) => {
            const T = N($),
              M = T.index();
            M === b && T.addClass(g.bulletActiveClass),
              g.dynamicBullets &&
                (M >= E && M <= C && T.addClass(`${g.bulletActiveClass}-main`),
                M === E && l(T, "prev"),
                M === C && l(T, "next"));
          });
        else {
          const $ = x.eq(b),
            T = $.index();
          if (($.addClass(g.bulletActiveClass), g.dynamicBullets)) {
            const M = x.eq(E),
              _ = x.eq(C);
            for (let S = E; S <= C; S += 1)
              x.eq(S).addClass(`${g.bulletActiveClass}-main`);
            if (t.params.loop)
              if (T >= x.length) {
                for (let S = g.dynamicMainBullets; S >= 0; S -= 1)
                  x.eq(x.length - S).addClass(`${g.bulletActiveClass}-main`);
                x.eq(x.length - g.dynamicMainBullets - 1).addClass(
                  `${g.bulletActiveClass}-prev`
                );
              } else l(M, "prev"), l(_, "next");
            else l(M, "prev"), l(_, "next");
          }
        }
        if (g.dynamicBullets) {
          const $ = Math.min(x.length, g.dynamicMainBullets + 4),
            T = (s * $ - s) / 2 - k * s,
            M = p ? "right" : "left";
          x.css(t.isHorizontal() ? M : "top", `${T}px`);
        }
      }
      if (
        (g.type === "fraction" &&
          (v.find(_i(g.currentClass)).text(g.formatFractionCurrent(b + 1)),
          v.find(_i(g.totalClass)).text(g.formatFractionTotal(w))),
        g.type === "progressbar")
      ) {
        let x;
        g.progressbarOpposite
          ? (x = t.isHorizontal() ? "vertical" : "horizontal")
          : (x = t.isHorizontal() ? "horizontal" : "vertical");
        const E = (b + 1) / w;
        let C = 1,
          k = 1;
        x === "horizontal" ? (C = E) : (k = E),
          v
            .find(_i(g.progressbarFillClass))
            .transform(`translate3d(0,0,0) scaleX(${C}) scaleY(${k})`)
            .transition(t.params.speed);
      }
      g.type === "custom" && g.renderCustom
        ? (v.html(g.renderCustom(t, b + 1, w)), n("paginationRender", v[0]))
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
        y = t.pagination.$el;
      let v = "";
      if (p.type === "bullets") {
        let b = t.params.loop
          ? Math.ceil((g - t.loopedSlides * 2) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          !t.params.loop &&
          b > g &&
          (b = g);
        for (let w = 0; w < b; w += 1)
          p.renderBullet
            ? (v += p.renderBullet.call(t, w, p.bulletClass))
            : (v += `<${p.bulletElement} class="${p.bulletClass}"></${p.bulletElement}>`);
        y.html(v), (t.pagination.bullets = y.find(_i(p.bulletClass)));
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
        p.type !== "custom" && n("paginationRender", t.pagination.$el[0]);
    }
    function d() {
      t.params.pagination = Fa(
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
            (g = g.filter((y) => N(y).parents(".swiper")[0] === t.el))),
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
            let b = N(this).index() * t.params.slidesPerGroup;
            t.params.loop && (b += t.loopedSlides), t.slideTo(b);
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
        const y = g.target,
          { $el: v } = t.pagination;
        if (
          t.params.pagination.el &&
          t.params.pagination.hideOnClick &&
          v &&
          v.length > 0 &&
          !N(y).hasClass(t.params.pagination.bulletClass)
        ) {
          if (
            t.navigation &&
            ((t.navigation.nextEl && y === t.navigation.nextEl) ||
              (t.navigation.prevEl && y === t.navigation.prevEl))
          )
            return;
          const b = v.hasClass(t.params.pagination.hiddenClass);
          n(b === !0 ? "paginationShow" : "paginationHide"),
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
  function Xp({ swiper: t, extendParams: e, on: i, emit: n }) {
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
      const { scrollbar: M, rtlTranslate: _, progress: S } = t,
        { $dragEl: O, $el: L } = M,
        A = t.params.scrollbar;
      let z = c,
        D = (u - c) * S;
      _
        ? ((D = -D), D > 0 ? ((z = c - D), (D = 0)) : -D + c > u && (z = u + D))
        : D < 0
        ? ((z = c + D), (D = 0))
        : D + c > u && (z = u - D),
        t.isHorizontal()
          ? (O.transform(`translate3d(${D}px, 0, 0)`),
            (O[0].style.width = `${z}px`))
          : (O.transform(`translate3d(0px, ${D}px, 0)`),
            (O[0].style.height = `${z}px`)),
        A.hide &&
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
        { $dragEl: _, $el: S } = M;
      (_[0].style.width = ""),
        (_[0].style.height = ""),
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
          ? (_[0].style.width = `${c}px`)
          : (_[0].style.height = `${c}px`),
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
      const { scrollbar: _, rtlTranslate: S } = t,
        { $el: O } = _;
      let L;
      (L =
        (p(M) -
          O.offset()[t.isHorizontal() ? "left" : "top"] -
          (l !== null ? l : c / 2)) /
        (u - c)),
        (L = Math.max(Math.min(L, 1), 0)),
        S && (L = 1 - L);
      const A = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * L;
      t.updateProgress(A),
        t.setTranslate(A),
        t.updateActiveIndex(),
        t.updateSlidesClasses();
    }
    function y(M) {
      const _ = t.params.scrollbar,
        { scrollbar: S, $wrapperEl: O } = t,
        { $el: L, $dragEl: A } = S;
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
        L.transition(0),
        _.hide && L.css("opacity", 1),
        t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
        n("scrollbarDragStart", M);
    }
    function v(M) {
      const { scrollbar: _, $wrapperEl: S } = t,
        { $el: O, $dragEl: L } = _;
      s &&
        (M.preventDefault ? M.preventDefault() : (M.returnValue = !1),
        g(M),
        S.transition(0),
        O.transition(0),
        L.transition(0),
        n("scrollbarDragMove", M));
    }
    function b(M) {
      const _ = t.params.scrollbar,
        { scrollbar: S, $wrapperEl: O } = t,
        { $el: L } = S;
      s &&
        ((s = !1),
        t.params.cssMode &&
          (t.$wrapperEl.css("scroll-snap-type", ""), O.transition("")),
        _.hide &&
          (clearTimeout(o),
          (o = Ii(() => {
            L.css("opacity", 0), L.transition(400);
          }, 1e3))),
        n("scrollbarDragEnd", M),
        _.snapOnRelease && t.slideToClosest());
    }
    function w(M) {
      const {
          scrollbar: _,
          touchEventsTouch: S,
          touchEventsDesktop: O,
          params: L,
          support: A,
        } = t,
        z = _.$el;
      if (!z) return;
      const D = z[0],
        B =
          A.passiveListener && L.passiveListeners
            ? { passive: !1, capture: !1 }
            : !1,
        P =
          A.passiveListener && L.passiveListeners
            ? { passive: !0, capture: !1 }
            : !1;
      if (!D) return;
      const q = M === "on" ? "addEventListener" : "removeEventListener";
      A.touch
        ? (D[q](S.start, y, B), D[q](S.move, v, B), D[q](S.end, b, P))
        : (D[q](O.start, y, B), r[q](O.move, v, B), r[q](O.end, b, P));
    }
    function x() {
      !t.params.scrollbar.el || !t.scrollbar.el || w("on");
    }
    function E() {
      !t.params.scrollbar.el || !t.scrollbar.el || w("off");
    }
    function C() {
      const { scrollbar: M, $el: _ } = t;
      t.params.scrollbar = Fa(
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
        _.find(S.el).length === 1 &&
        (O = _.find(S.el)),
        O.addClass(t.isHorizontal() ? S.horizontalClass : S.verticalClass);
      let L = O.find(`.${t.params.scrollbar.dragClass}`);
      L.length === 0 &&
        ((L = N(`<div class="${t.params.scrollbar.dragClass}"></div>`)),
        O.append(L)),
        Object.assign(M, { $el: O, el: O[0], $dragEl: L, dragEl: L[0] }),
        S.draggable && x(),
        O &&
          O[t.enabled ? "removeClass" : "addClass"](
            t.params.scrollbar.lockClass
          );
    }
    function k() {
      const M = t.params.scrollbar,
        _ = t.scrollbar.$el;
      _ &&
        _.removeClass(t.isHorizontal() ? M.horizontalClass : M.verticalClass),
        E();
    }
    i("init", () => {
      t.params.scrollbar.enabled === !1 ? T() : (C(), m(), f());
    }),
      i("update resize observerUpdate lock unlock", () => {
        m();
      }),
      i("setTranslate", () => {
        f();
      }),
      i("setTransition", (M, _) => {
        h(_);
      }),
      i("enable disable", () => {
        const { $el: M } = t.scrollbar;
        M &&
          M[t.enabled ? "removeClass" : "addClass"](
            t.params.scrollbar.lockClass
          );
      }),
      i("destroy", () => {
        k();
      });
    const $ = () => {
        t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),
          t.scrollbar.$el &&
            t.scrollbar.$el.removeClass(
              t.params.scrollbar.scrollbarDisabledClass
            ),
          C(),
          m(),
          f();
      },
      T = () => {
        t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
          t.scrollbar.$el &&
            t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
          k();
      };
    Object.assign(t.scrollbar, {
      enable: $,
      disable: T,
      updateSize: m,
      setTranslate: f,
      init: C,
      destroy: k,
    });
  }
  function jp({ swiper: t, extendParams: e, on: i }) {
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
  function Up({ swiper: t, extendParams: e, on: i, emit: n }) {
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
          const z = u.$imageEl ? u.$imageEl[0] : void 0,
            D = u.$slideEl ? u.$slideEl[0] : void 0;
          n("zoomChange", A, z, D);
        }
        h = A;
      },
    });
    function m(A) {
      if (A.targetTouches.length < 2) return 1;
      const z = A.targetTouches[0].pageX,
        D = A.targetTouches[0].pageY,
        B = A.targetTouches[1].pageX,
        P = A.targetTouches[1].pageY;
      return Math.sqrt((B - z) ** 2 + (P - D) ** 2);
    }
    function p(A) {
      const z = t.support,
        D = t.params.zoom;
      if (((l = !1), (c = !1), !z.gestures)) {
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
    function g(A) {
      const z = t.support,
        D = t.params.zoom,
        B = t.zoom;
      if (!z.gestures) {
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
      z.gestures
        ? (B.scale = A.scale * s)
        : (B.scale = (u.scaleMove / u.scaleStart) * s),
        B.scale > u.maxRatio &&
          (B.scale = u.maxRatio - 1 + (B.scale - u.maxRatio + 1) ** 0.5),
        B.scale < D.minRatio &&
          (B.scale = D.minRatio + 1 - (D.minRatio - B.scale + 1) ** 0.5),
        u.$imageEl.transform(`translate3d(0,0,0) scale(${B.scale})`);
    }
    function y(A) {
      const z = t.device,
        D = t.support,
        B = t.params.zoom,
        P = t.zoom;
      if (!D.gestures) {
        if (
          !l ||
          !c ||
          A.type !== "touchend" ||
          (A.type === "touchend" && A.changedTouches.length < 2 && !z.android)
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
      const z = t.device;
      !u.$imageEl ||
        u.$imageEl.length === 0 ||
        d.isTouched ||
        (z.android && A.cancelable && A.preventDefault(),
        (d.isTouched = !0),
        (d.touchesStart.x =
          A.type === "touchstart" ? A.targetTouches[0].pageX : A.pageX),
        (d.touchesStart.y =
          A.type === "touchstart" ? A.targetTouches[0].pageY : A.pageY));
    }
    function b(A) {
      const z = t.zoom;
      if (
        !u.$imageEl ||
        u.$imageEl.length === 0 ||
        ((t.allowClick = !1), !d.isTouched || !u.$slideEl)
      )
        return;
      d.isMoved ||
        ((d.width = u.$imageEl[0].offsetWidth),
        (d.height = u.$imageEl[0].offsetHeight),
        (d.startX = za(u.$imageWrapEl[0], "x") || 0),
        (d.startY = za(u.$imageWrapEl[0], "y") || 0),
        (u.slideWidth = u.$slideEl[0].offsetWidth),
        (u.slideHeight = u.$slideEl[0].offsetHeight),
        u.$imageWrapEl.transition(0));
      const D = d.width * z.scale,
        B = d.height * z.scale;
      if (!(D < u.slideWidth && B < u.slideHeight)) {
        if (
          ((d.minX = Math.min(u.slideWidth / 2 - D / 2, 0)),
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
    function w() {
      const A = t.zoom;
      if (!u.$imageEl || u.$imageEl.length === 0) return;
      if (!d.isTouched || !d.isMoved) {
        (d.isTouched = !1), (d.isMoved = !1);
        return;
      }
      (d.isTouched = !1), (d.isMoved = !1);
      let z = 300,
        D = 300;
      const B = f.x * z,
        P = d.currentX + B,
        q = f.y * D,
        X = d.currentY + q;
      f.x !== 0 && (z = Math.abs((P - d.currentX) / f.x)),
        f.y !== 0 && (D = Math.abs((X - d.currentY) / f.y));
      const oe = Math.max(z, D);
      (d.currentX = P), (d.currentY = X);
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
    function E(A) {
      const z = t.zoom,
        D = t.params.zoom;
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
      let B, P, q, X, oe, ne, Z, Q, de, he, Te, $e, fe, Ee, Y, te, Oe, Le;
      typeof d.touchesStart.x > "u" && A
        ? ((B = A.type === "touchend" ? A.changedTouches[0].pageX : A.pageX),
          (P = A.type === "touchend" ? A.changedTouches[0].pageY : A.pageY))
        : ((B = d.touchesStart.x), (P = d.touchesStart.y)),
        (z.scale = u.$imageWrapEl.attr("data-swiper-zoom") || D.maxRatio),
        (s = u.$imageWrapEl.attr("data-swiper-zoom") || D.maxRatio),
        A
          ? ((Oe = u.$slideEl[0].offsetWidth),
            (Le = u.$slideEl[0].offsetHeight),
            (q = u.$slideEl.offset().left + r.scrollX),
            (X = u.$slideEl.offset().top + r.scrollY),
            (oe = q + Oe / 2 - B),
            (ne = X + Le / 2 - P),
            (de = u.$imageEl[0].offsetWidth),
            (he = u.$imageEl[0].offsetHeight),
            (Te = de * z.scale),
            ($e = he * z.scale),
            (fe = Math.min(Oe / 2 - Te / 2, 0)),
            (Ee = Math.min(Le / 2 - $e / 2, 0)),
            (Y = -fe),
            (te = -Ee),
            (Z = oe * z.scale),
            (Q = ne * z.scale),
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
          .transform(`translate3d(0,0,0) scale(${z.scale})`);
    }
    function C() {
      const A = t.zoom,
        z = t.params.zoom;
      u.$slideEl ||
        (t.params.virtual && t.params.virtual.enabled && t.virtual
          ? (u.$slideEl = t.$wrapperEl.children(
              `.${t.params.slideActiveClass}`
            ))
          : (u.$slideEl = t.slides.eq(t.activeIndex)),
        (u.$imageEl = u.$slideEl
          .find(`.${z.containerClass}`)
          .eq(0)
          .find("picture, img, svg, canvas, .swiper-zoom-target")
          .eq(0)),
        (u.$imageWrapEl = u.$imageEl.parent(`.${z.containerClass}`))),
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
          u.$slideEl.removeClass(`${z.zoomedSlideClass}`),
          (u.$slideEl = void 0));
    }
    function k(A) {
      const z = t.zoom;
      z.scale && z.scale !== 1 ? C() : E(A);
    }
    function $() {
      const A = t.support,
        z =
          t.touchEvents.start === "touchstart" &&
          A.passiveListener &&
          t.params.passiveListeners
            ? { passive: !0, capture: !1 }
            : !1,
        D = A.passiveListener ? { passive: !1, capture: !0 } : !0;
      return { passiveListener: z, activeListenerWithCapture: D };
    }
    function T() {
      return `.${t.params.slideClass}`;
    }
    function M(A) {
      const { passiveListener: z } = $(),
        D = T();
      t.$wrapperEl[A]("gesturestart", D, p, z),
        t.$wrapperEl[A]("gesturechange", D, g, z),
        t.$wrapperEl[A]("gestureend", D, y, z);
    }
    function _() {
      o || ((o = !0), M("on"));
    }
    function S() {
      o && ((o = !1), M("off"));
    }
    function O() {
      const A = t.zoom;
      if (A.enabled) return;
      A.enabled = !0;
      const z = t.support,
        { passiveListener: D, activeListenerWithCapture: B } = $(),
        P = T();
      z.gestures
        ? (t.$wrapperEl.on(t.touchEvents.start, _, D),
          t.$wrapperEl.on(t.touchEvents.end, S, D))
        : t.touchEvents.start === "touchstart" &&
          (t.$wrapperEl.on(t.touchEvents.start, P, p, D),
          t.$wrapperEl.on(t.touchEvents.move, P, g, B),
          t.$wrapperEl.on(t.touchEvents.end, P, y, D),
          t.touchEvents.cancel &&
            t.$wrapperEl.on(t.touchEvents.cancel, P, y, D)),
        t.$wrapperEl.on(
          t.touchEvents.move,
          `.${t.params.zoom.containerClass}`,
          b,
          B
        );
    }
    function L() {
      const A = t.zoom;
      if (!A.enabled) return;
      const z = t.support;
      A.enabled = !1;
      const { passiveListener: D, activeListenerWithCapture: B } = $(),
        P = T();
      z.gestures
        ? (t.$wrapperEl.off(t.touchEvents.start, _, D),
          t.$wrapperEl.off(t.touchEvents.end, S, D))
        : t.touchEvents.start === "touchstart" &&
          (t.$wrapperEl.off(t.touchEvents.start, P, p, D),
          t.$wrapperEl.off(t.touchEvents.move, P, g, B),
          t.$wrapperEl.off(t.touchEvents.end, P, y, D),
          t.touchEvents.cancel &&
            t.$wrapperEl.off(t.touchEvents.cancel, P, y, D)),
        t.$wrapperEl.off(
          t.touchEvents.move,
          `.${t.params.zoom.containerClass}`,
          b,
          B
        );
    }
    i("init", () => {
      t.params.zoom.enabled && O();
    }),
      i("destroy", () => {
        L();
      }),
      i("touchStart", (A, z) => {
        t.zoom.enabled && v(z);
      }),
      i("touchEnd", (A, z) => {
        t.zoom.enabled && w();
      }),
      i("doubleTap", (A, z) => {
        !t.animating &&
          t.params.zoom.enabled &&
          t.zoom.enabled &&
          t.params.zoom.toggle &&
          k(z);
      }),
      i("transitionEnd", () => {
        t.zoom.enabled && t.params.zoom.enabled && x();
      }),
      i("slideChange", () => {
        t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && x();
      }),
      Object.assign(t.zoom, {
        enable: O,
        disable: L,
        in: E,
        out: C,
        toggle: k,
      });
  }
  function Zp({ swiper: t, extendParams: e, on: i, emit: n }) {
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
            const y = g.attr("data-background"),
              v = g.attr("data-src"),
              b = g.attr("data-srcset"),
              w = g.attr("data-sizes"),
              x = g.parent("picture");
            t.loadImage(g[0], v || y, b, w, !1, () => {
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
                  (y
                    ? (g.css("background-image", `url("${y}")`),
                      g.removeAttr("data-background"))
                    : (b && (g.attr("srcset", b), g.removeAttr("data-srcset")),
                      w && (g.attr("sizes", w), g.removeAttr("data-sizes")),
                      x.length &&
                        x.children("source").each((E) => {
                          const C = N(E);
                          C.attr("data-srcset") &&
                            (C.attr("srcset", C.attr("data-srcset")),
                            C.removeAttr("data-srcset"));
                        }),
                      v && (g.attr("src", v), g.removeAttr("data-src"))),
                  g.addClass(d.loadedClass).removeClass(d.loadingClass),
                  h.find(`.${d.preloaderClass}`).remove(),
                  t.params.loop && u)
                ) {
                  const E = h.attr("data-swiper-slide-index");
                  if (h.hasClass(t.params.slideDuplicateClass)) {
                    const C = t.$wrapperEl.children(
                      `[data-swiper-slide-index="${E}"]:not(.${t.params.slideDuplicateClass})`
                    );
                    a(C.index(), !1);
                  } else {
                    const C = t.$wrapperEl.children(
                      `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${E}"]`
                    );
                    a(C.index(), !1);
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
      function y(v) {
        return h ? N(v).attr("data-swiper-slide-index") : N(v).index();
      }
      if ((s || (s = !0), t.params.watchSlidesProgress))
        c.children(`.${u.slideVisibleClass}`).each((v) => {
          const b = h ? N(v).attr("data-swiper-slide-index") : N(v).index();
          a(b);
        });
      else if (p > 1) for (let v = f; v < f + p; v += 1) g(v) && a(v);
      else a(f);
      if (m.loadPrevNext)
        if (p > 1 || (m.loadPrevNextAmount && m.loadPrevNextAmount > 1)) {
          const v = m.loadPrevNextAmount,
            b = Math.ceil(p),
            w = Math.min(f + b + Math.max(v, b), d.length),
            x = Math.max(f - Math.max(b, v), 0);
          for (let E = f + b; E < w; E += 1) g(E) && a(E);
          for (let E = x; E < f; E += 1) g(E) && a(E);
        } else {
          const v = c.children(`.${u.slideNextClass}`);
          v.length > 0 && a(y(v));
          const b = c.children(`.${u.slidePrevClass}`);
          b.length > 0 && a(y(b));
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
      const y = [
        [m.left, m.top],
        [m.left + t.width, m.top],
        [m.left, m.top + t.height],
        [m.left + t.width, m.top + t.height],
      ];
      for (let b = 0; b < y.length; b += 1) {
        const w = y[b];
        if (w[0] >= 0 && w[0] <= f && w[1] >= 0 && w[1] <= h) {
          if (w[0] === 0 && w[1] === 0) continue;
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
  function Qp({ swiper: t, extendParams: e, on: i }) {
    e({ controller: { control: void 0, inverse: !1, by: "slide" } }),
      (t.controller = { control: void 0 });
    function n(l, c) {
      const u = (function () {
        let m, p, g;
        return (y, v) => {
          for (p = -1, m = y.length; m - p > 1; )
            (g = (m + p) >> 1), y[g] <= v ? (p = g) : (m = g);
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
              Ii(() => {
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
  function Kp({ swiper: t, extendParams: e, on: i }) {
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
    function r(_) {
      const S = n;
      S.length !== 0 && (S.html(""), S.html(_));
    }
    function s(_ = 16) {
      const S = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(_).replace(/x/g, S);
    }
    function a(_) {
      _.attr("tabIndex", "0");
    }
    function o(_) {
      _.attr("tabIndex", "-1");
    }
    function l(_, S) {
      _.attr("role", S);
    }
    function c(_, S) {
      _.attr("aria-roledescription", S);
    }
    function u(_, S) {
      _.attr("aria-controls", S);
    }
    function d(_, S) {
      _.attr("aria-label", S);
    }
    function f(_, S) {
      _.attr("id", S);
    }
    function h(_, S) {
      _.attr("aria-live", S);
    }
    function m(_) {
      _.attr("aria-disabled", !0);
    }
    function p(_) {
      _.attr("aria-disabled", !1);
    }
    function g(_) {
      if (_.keyCode !== 13 && _.keyCode !== 32) return;
      const S = t.params.a11y,
        O = N(_.target);
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
    function y() {
      if (t.params.loop || t.params.rewind || !t.navigation) return;
      const { $nextEl: _, $prevEl: S } = t.navigation;
      S && S.length > 0 && (t.isBeginning ? (m(S), o(S)) : (p(S), a(S))),
        _ && _.length > 0 && (t.isEnd ? (m(_), o(_)) : (p(_), a(_)));
    }
    function v() {
      return (
        t.pagination && t.pagination.bullets && t.pagination.bullets.length
      );
    }
    function b() {
      return v() && t.params.pagination.clickable;
    }
    function w() {
      const _ = t.params.a11y;
      v() &&
        t.pagination.bullets.each((S) => {
          const O = N(S);
          t.params.pagination.clickable &&
            (a(O),
            t.params.pagination.renderBullet ||
              (l(O, "button"),
              d(
                O,
                _.paginationBulletMessage.replace(
                  /\{\{index\}\}/,
                  O.index() + 1
                )
              ))),
            O.is(`.${t.params.pagination.bulletActiveClass}`)
              ? O.attr("aria-current", "true")
              : O.removeAttr("aria-current");
        });
    }
    const x = (_, S, O) => {
        a(_),
          _[0].tagName !== "BUTTON" && (l(_, "button"), _.on("keydown", g)),
          d(_, O),
          u(_, S);
      },
      E = () => {
        t.a11y.clicked = !0;
      },
      C = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            t.destroyed || (t.a11y.clicked = !1);
          });
        });
      },
      k = (_) => {
        if (t.a11y.clicked) return;
        const S = _.target.closest(`.${t.params.slideClass}`);
        if (!S || !t.slides.includes(S)) return;
        const O = t.slides.indexOf(S) === t.activeIndex,
          L =
            t.params.watchSlidesProgress &&
            t.visibleSlides &&
            t.visibleSlides.includes(S);
        O ||
          L ||
          (_.sourceCapabilities && _.sourceCapabilities.firesTouchEvents) ||
          (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
          t.slideTo(t.slides.indexOf(S), 0));
      },
      $ = () => {
        const _ = t.params.a11y;
        _.itemRoleDescriptionMessage &&
          c(N(t.slides), _.itemRoleDescriptionMessage),
          _.slideRole && l(N(t.slides), _.slideRole);
        const S = t.params.loop
          ? t.slides.filter(
              (O) => !O.classList.contains(t.params.slideDuplicateClass)
            ).length
          : t.slides.length;
        _.slideLabelMessage &&
          t.slides.each((O, L) => {
            const A = N(O),
              z = t.params.loop
                ? parseInt(A.attr("data-swiper-slide-index"), 10)
                : L,
              D = _.slideLabelMessage
                .replace(/\{\{index\}\}/, z + 1)
                .replace(/\{\{slidesLength\}\}/, S);
            d(A, D);
          });
      },
      T = () => {
        const _ = t.params.a11y;
        t.$el.append(n);
        const S = t.$el;
        _.containerRoleDescriptionMessage &&
          c(S, _.containerRoleDescriptionMessage),
          _.containerMessage && d(S, _.containerMessage);
        const O = t.$wrapperEl,
          L = _.id || O.attr("id") || `swiper-wrapper-${s(16)}`,
          A = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
        f(O, L), h(O, A), $();
        let z, D;
        t.navigation && t.navigation.$nextEl && (z = t.navigation.$nextEl),
          t.navigation && t.navigation.$prevEl && (D = t.navigation.$prevEl),
          z && z.length && x(z, L, _.nextSlideMessage),
          D && D.length && x(D, L, _.prevSlideMessage),
          b() &&
            t.pagination.$el.on(
              "keydown",
              _i(t.params.pagination.bulletClass),
              g
            ),
          t.$el.on("focus", k, !0),
          t.$el.on("pointerdown", E, !0),
          t.$el.on("pointerup", C, !0);
      };
    function M() {
      n && n.length > 0 && n.remove();
      let _, S;
      t.navigation && t.navigation.$nextEl && (_ = t.navigation.$nextEl),
        t.navigation && t.navigation.$prevEl && (S = t.navigation.$prevEl),
        _ && _.off("keydown", g),
        S && S.off("keydown", g),
        b() &&
          t.pagination.$el.off(
            "keydown",
            _i(t.params.pagination.bulletClass),
            g
          ),
        t.$el.off("focus", k, !0),
        t.$el.off("pointerdown", E, !0),
        t.$el.off("pointerup", C, !0);
    }
    i("beforeInit", () => {
      n = N(
        `<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
      );
    }),
      i("afterInit", () => {
        t.params.a11y.enabled && T();
      }),
      i(
        "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
        () => {
          t.params.a11y.enabled && $();
        }
      ),
      i("fromEdge toEdge afterInit lock unlock", () => {
        t.params.a11y.enabled && y();
      }),
      i("paginationUpdate", () => {
        t.params.a11y.enabled && w();
      }),
      i("destroy", () => {
        t.params.a11y.enabled && M();
      });
  }
  function Jp({ swiper: t, extendParams: e, on: i }) {
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
            .filter((b) => b !== ""),
          g = p.length,
          y = p[g - 2],
          v = p[g - 1];
        return { key: y, value: v };
      },
      o = (f, h) => {
        const m = pe();
        if (!n || !t.params.history.enabled) return;
        let p;
        t.params.url ? (p = new URL(t.params.url)) : (p = m.location);
        const g = t.slides.eq(h);
        let y = s(g.attr("data-history"));
        if (t.params.history.root.length > 0) {
          let b = t.params.history.root;
          b[b.length - 1] === "/" && (b = b.slice(0, b.length - 1)),
            (y = `${b}/${f}/${y}`);
        } else p.pathname.includes(f) || (y = `${f}/${y}`);
        t.params.history.keepQuery && (y += p.search);
        const v = m.history.state;
        (v && v.value === y) ||
          (t.params.history.replaceState
            ? m.history.replaceState({ value: y }, null, y)
            : m.history.pushState({ value: y }, null, y));
      },
      l = (f, h, m) => {
        if (h)
          for (let p = 0, g = t.slides.length; p < g; p += 1) {
            const y = t.slides.eq(p);
            if (
              s(y.attr("data-history")) === h &&
              !y.hasClass(t.params.slideDuplicateClass)
            ) {
              const b = y.index();
              t.slideTo(b, f, m);
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
  function em({ swiper: t, extendParams: e, emit: i, on: n }) {
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
              const y = p.index();
              t.slideTo(y, 0, t.params.runCallbacksOnInit, !0);
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
  function tm({ swiper: t, extendParams: e, on: i, emit: n }) {
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
        (r = Ii(() => {
          let y;
          t.params.autoplay.reverseDirection
            ? t.params.loop
              ? (t.loopFix(),
                (y = t.slidePrev(t.params.speed, !0, !0)),
                n("autoplay"))
              : t.isBeginning
              ? t.params.autoplay.stopOnLastSlide
                ? o()
                : ((y = t.slideTo(t.slides.length - 1, t.params.speed, !0, !0)),
                  n("autoplay"))
              : ((y = t.slidePrev(t.params.speed, !0, !0)), n("autoplay"))
            : t.params.loop
            ? (t.loopFix(),
              (y = t.slideNext(t.params.speed, !0, !0)),
              n("autoplay"))
            : t.isEnd
            ? t.params.autoplay.stopOnLastSlide
              ? o()
              : ((y = t.slideTo(0, t.params.speed, !0, !0)), n("autoplay"))
            : ((y = t.slideNext(t.params.speed, !0, !0)), n("autoplay")),
            ((t.params.cssMode && t.autoplay.running) || y === !1) && s();
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
      i("beforeTransitionStart", (p, g, y) => {
        t.autoplay.running &&
          (y || !t.params.autoplay.disableOnInteraction
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
  function im({ swiper: t, extendParams: e, on: i }) {
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
      else if (Cr(l.swiper)) {
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
            b = c.slides
              .eq(p)
              .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
              .eq(0)
              .index();
          typeof v > "u"
            ? (g = b)
            : typeof b > "u"
            ? (g = v)
            : b - p === p - v
            ? (g = c.params.slidesPerGroup > 1 ? b : p)
            : b - p < p - v
            ? (g = b)
            : (g = v),
            (y = t.activeIndex > t.previousIndex ? "next" : "prev");
        } else (g = t.realIndex), (y = g > t.previousIndex ? "next" : "prev");
        m && (g += y === "next" ? h : -1 * h),
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
  function nm({ swiper: t, extendParams: e, emit: i, once: n }) {
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
          const E = f.velocities.pop(),
            C = f.velocities.pop(),
            k = E.position - C.position,
            $ = E.time - C.time;
          (t.velocity = k / $),
            (t.velocity /= 2),
            Math.abs(t.velocity) < l.freeMode.minimumVelocity &&
              (t.velocity = 0),
            ($ > 150 || kt() - E.time > 300) && (t.velocity = 0);
        } else t.velocity = 0;
        (t.velocity *= l.freeMode.momentumVelocityRatio),
          (f.velocities.length = 0);
        let p = 1e3 * l.freeMode.momentumRatio;
        const g = t.velocity * p;
        let y = t.translate + g;
        u && (y = -y);
        let v = !1,
          b;
        const w = Math.abs(t.velocity) * 20 * l.freeMode.momentumBounceRatio;
        let x;
        if (y < t.maxTranslate())
          l.freeMode.momentumBounce
            ? (y + t.maxTranslate() < -w && (y = t.maxTranslate() - w),
              (b = t.maxTranslate()),
              (v = !0),
              (f.allowMomentumBounce = !0))
            : (y = t.maxTranslate()),
            l.loop && l.centeredSlides && (x = !0);
        else if (y > t.minTranslate())
          l.freeMode.momentumBounce
            ? (y - t.minTranslate() > w && (y = t.minTranslate() + w),
              (b = t.minTranslate()),
              (v = !0),
              (f.allowMomentumBounce = !0))
            : (y = t.minTranslate()),
            l.loop && l.centeredSlides && (x = !0);
        else if (l.freeMode.sticky) {
          let E;
          for (let C = 0; C < d.length; C += 1)
            if (d[C] > -y) {
              E = C;
              break;
            }
          Math.abs(d[E] - y) < Math.abs(d[E - 1] - y) ||
          t.swipeDirection === "next"
            ? (y = d[E])
            : (y = d[E - 1]),
            (y = -y);
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
              ? (p = Math.abs((-y - t.translate) / t.velocity))
              : (p = Math.abs((y - t.translate) / t.velocity)),
            l.freeMode.sticky)
          ) {
            const E = Math.abs((u ? -y : y) - t.translate),
              C = t.slidesSizesGrid[t.activeIndex];
            E < C
              ? (p = l.speed)
              : E < 2 * C
              ? (p = l.speed * 1.5)
              : (p = l.speed * 2.5);
          }
        } else if (l.freeMode.sticky) {
          t.slideToClosest();
          return;
        }
        l.freeMode.momentumBounce && v
          ? (t.updateProgress(b),
            t.setTransition(p),
            t.setTranslate(y),
            t.transitionStart(!0, t.swipeDirection),
            (t.animating = !0),
            c.transitionEnd(() => {
              !t ||
                t.destroyed ||
                !f.allowMomentumBounce ||
                (i("momentumBounce"),
                t.setTransition(l.speed),
                setTimeout(() => {
                  t.setTranslate(b),
                    c.transitionEnd(() => {
                      !t || t.destroyed || t.transitionEnd();
                    });
                }, 0));
            }))
          : t.velocity
          ? (i("_freeModeNoMomentumRelease"),
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
      } else l.freeMode && i("_freeModeNoMomentumRelease");
      (!l.freeMode.momentum || m >= l.longSwipesMs) &&
        (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
    }
    Object.assign(t, {
      freeMode: { onTouchStart: r, onTouchMove: s, onTouchEnd: a },
    });
  }
  function rm({ swiper: t, extendParams: e }) {
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
        let g, y, v;
        if (p === "row" && f > 1) {
          const b = Math.floor(l / (f * m)),
            w = l - m * f * b,
            x = b === 0 ? f : Math.min(Math.ceil((u - b * m * f) / m), f);
          (v = Math.floor(w / x)),
            (y = w - v * x + b * f),
            (g = y + (v * i) / m),
            c.css({ "-webkit-order": g, order: g });
        } else
          p === "column"
            ? ((y = Math.floor(l / m)),
              (v = l - y * m),
              (y > r || (y === r && v === m - 1)) &&
                ((v += 1), v >= m && ((v = 0), (y += 1))))
            : ((v = Math.floor(l / n)), (y = l - v * n));
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
            let y = c[g];
            h && (y = Math.floor(y)), c[g] < t.virtualSize + c[0] && p.push(y);
          }
          c.push(...p);
        }
      };
    t.grid = { initSlides: s, updateSlide: a, updateWrapperSize: o };
  }
  function sm(t) {
    const e = this,
      { $wrapperEl: i, params: n } = e;
    if ((n.loop && e.loopDestroy(), typeof t == "object" && "length" in t))
      for (let r = 0; r < t.length; r += 1) t[r] && i.append(t[r]);
    else i.append(t);
    n.loop && e.loopCreate(), n.observer || e.update();
  }
  function am(t) {
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
  function om(t, e) {
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
  function lm(t) {
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
  function cm() {
    const t = this,
      e = [];
    for (let i = 0; i < t.slides.length; i += 1) e.push(i);
    t.removeSlide(e);
  }
  function um({ swiper: t }) {
    Object.assign(t, {
      appendSlide: sm.bind(t),
      prependSlide: am.bind(t),
      addSlide: om.bind(t),
      removeSlide: lm.bind(t),
      removeAllSlides: cm.bind(t),
    });
  }
  function Vn(t) {
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
  function Ar(t, e) {
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
  function dm({ swiper: t, extendParams: e, on: i }) {
    e({ fadeEffect: { crossFade: !1, transformEl: null } }),
      Vn({
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
            Ar(a, l)
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
  function fm({ swiper: t, extendParams: e, on: i }) {
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
    Vn({
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
          y = t.virtual && t.params.virtual.enabled;
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
        for (let x = 0; x < c.length; x += 1) {
          const E = c.eq(x);
          let C = x;
          y && (C = parseInt(E.attr("data-swiper-slide-index"), 10));
          let k = C * 90,
            $ = Math.floor(k / 360);
          f && ((k = -k), ($ = Math.floor(-k / 360)));
          const T = Math.max(Math.min(E[0].progress, 1), -1);
          let M = 0,
            _ = 0,
            S = 0;
          C % 4 === 0
            ? ((M = -$ * 4 * h), (S = 0))
            : (C - 1) % 4 === 0
            ? ((M = 0), (S = -$ * 4 * h))
            : (C - 2) % 4 === 0
            ? ((M = h + $ * 4 * h), (S = h))
            : (C - 3) % 4 === 0 && ((M = -h), (S = 3 * h + h * 4 * $)),
            f && (M = -M),
            g || ((_ = M), (M = 0));
          const O = `rotateX(${g ? 0 : -k}deg) rotateY(${
            g ? k : 0
          }deg) translate3d(${M}px, ${_}px, ${S}px)`;
          T <= 1 &&
            T > -1 &&
            ((v = C * 90 + T * 90), f && (v = -C * 90 - T * 90)),
            E.transform(O),
            p.slideShadows && n(E, T, g);
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
            const x = Math.abs(v) - Math.floor(Math.abs(v) / 90) * 90,
              E =
                1.5 -
                (Math.sin((x * 2 * Math.PI) / 360) / 2 +
                  Math.cos((x * 2 * Math.PI) / 360) / 2),
              C = p.shadowScale,
              k = p.shadowScale / E,
              $ = p.shadowOffset;
            b.transform(
              `scale3d(${C}, 1, ${k}) translate3d(0px, ${d / 2 + $}px, ${
                -d / 2 / k
              }px) rotateX(-90deg)`
            );
          }
        const w = m.isSafari || m.isWebView ? -h / 2 : 0;
        l.transform(
          `translate3d(0px,0,${w}px) rotateX(${
            t.isHorizontal() ? 0 : v
          }deg) rotateY(${t.isHorizontal() ? -v : 0}deg)`
        ),
          l[0].style.setProperty("--swiper-cube-translate-z", `${w}px`);
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
  function hm({ swiper: t, extendParams: e, on: i }) {
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
    Vn({
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
            y = t.params.cssMode ? -h - t.translate : -h,
            v = 0;
          t.isHorizontal()
            ? l && (p = -p)
            : ((v = y), (y = 0), (g = -p), (p = 0)),
            (d[0].style.zIndex = -Math.abs(Math.round(f)) + o.length),
            c.slideShadows && n(d, f, c);
          const b = `translate3d(${y}px, ${v}px, 0px) rotateX(${g}deg) rotateY(${p}deg)`;
          Ar(c, d).transform(b);
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
  function pm({ swiper: t, extendParams: e, on: i }) {
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
      Vn({
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
            const y = o.eq(p),
              v = l[p],
              b = y[0].swiperSlideOffset,
              w = (f - b - v / 2) / v,
              x =
                typeof c.modifier == "function"
                  ? c.modifier(w)
                  : w * c.modifier;
            let E = u ? h * x : 0,
              C = u ? 0 : h * x,
              k = -m * Math.abs(x),
              $ = c.stretch;
            typeof $ == "string" &&
              $.indexOf("%") !== -1 &&
              ($ = (parseFloat(c.stretch) / 100) * v);
            let T = u ? 0 : $ * x,
              M = u ? $ * x : 0,
              _ = 1 - (1 - c.scale) * Math.abs(x);
            Math.abs(M) < 0.001 && (M = 0),
              Math.abs(T) < 0.001 && (T = 0),
              Math.abs(k) < 0.001 && (k = 0),
              Math.abs(E) < 0.001 && (E = 0),
              Math.abs(C) < 0.001 && (C = 0),
              Math.abs(_) < 0.001 && (_ = 0);
            const S = `translate3d(${M}px,${T}px,${k}px)  rotateX(${C}deg) rotateY(${E}deg) scale(${_})`;
            if (
              (Ar(c, y).transform(S),
              (y[0].style.zIndex = -Math.abs(Math.round(x)) + 1),
              c.slideShadows)
            ) {
              let L = u
                  ? y.find(".swiper-slide-shadow-left")
                  : y.find(".swiper-slide-shadow-top"),
                A = u
                  ? y.find(".swiper-slide-shadow-right")
                  : y.find(".swiper-slide-shadow-bottom");
              L.length === 0 && (L = Yn(c, y, u ? "left" : "top")),
                A.length === 0 && (A = Yn(c, y, u ? "right" : "bottom")),
                L.length && (L[0].style.opacity = x > 0 ? x : 0),
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
  function mm({ swiper: t, extendParams: e, on: i }) {
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
    Vn({
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
          const y = h[0].swiperSlideOffset,
            v = [t.params.cssMode ? -y - t.translate : -y, 0, 0],
            b = [0, 0, 0];
          let w = !1;
          t.isHorizontal() || ((v[1] = v[0]), (v[0] = 0));
          let x = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1,
          };
          p < 0 ? ((x = c.next), (w = !0)) : p > 0 && ((x = c.prev), (w = !0)),
            v.forEach((_, S) => {
              v[S] = `calc(${_}px + (${n(x.translate[S])} * ${Math.abs(
                p * u
              )}))`;
            }),
            b.forEach((_, S) => {
              b[S] = x.rotate[S] * Math.abs(p * u);
            }),
            (h[0].style.zIndex = -Math.abs(Math.round(m)) + a.length);
          const E = v.join(", "),
            C = `rotateX(${b[0]}deg) rotateY(${b[1]}deg) rotateZ(${b[2]}deg)`,
            k =
              g < 0
                ? `scale(${1 + (1 - x.scale) * g * u})`
                : `scale(${1 - (1 - x.scale) * g * u})`,
            $ =
              g < 0 ? 1 + (1 - x.opacity) * g * u : 1 - (1 - x.opacity) * g * u,
            T = `translate3d(${E}) ${C} ${k}`;
          if ((w && x.shadow) || !w) {
            let _ = h.children(".swiper-slide-shadow");
            if ((_.length === 0 && x.shadow && (_ = Yn(c, h)), _.length)) {
              const S = c.shadowPerProgress ? p * (1 / c.limitProgress) : p;
              _[0].style.opacity = Math.min(Math.max(Math.abs(S), 0), 1);
            }
          }
          const M = Ar(c, h);
          M.transform(T).css({ opacity: $ }),
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
  function gm({ swiper: t, extendParams: e, on: i }) {
    e({
      cardsEffect: {
        slideShadows: !0,
        transformEl: null,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8,
      },
    }),
      Vn({
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
              y = 0;
            const v = -100 * Math.abs(m);
            let b = 1,
              w = -o.perSlideRotate * m,
              x = o.perSlideOffset - Math.abs(m) * 0.75;
            const E =
                t.virtual && t.params.virtual.enabled ? t.virtual.from + d : d,
              C =
                (E === a || E === a - 1) &&
                m > 0 &&
                m < 1 &&
                (c || t.params.cssMode) &&
                u < l,
              k =
                (E === a || E === a + 1) &&
                m < 0 &&
                m > -1 &&
                (c || t.params.cssMode) &&
                u > l;
            if (C || k) {
              const _ = (1 - Math.abs((Math.abs(m) - 0.5) / 0.5)) ** 0.5;
              (w += -28 * m * _),
                (b += -0.5 * _),
                (x += 96 * _),
                (y = `${-25 * _ * Math.abs(m)}%`);
            }
            if (
              (m < 0
                ? (g = `calc(${g}px + (${x * Math.abs(m)}%))`)
                : m > 0
                ? (g = `calc(${g}px + (-${x * Math.abs(m)}%))`)
                : (g = `${g}px`),
              !t.isHorizontal())
            ) {
              const _ = y;
              (y = g), (g = _);
            }
            const $ = m < 0 ? `${1 + (1 - b) * m}` : `${1 - (1 - b) * m}`,
              T = `
        translate3d(${g}, ${y}, ${v}px)
        rotateZ(${o.rotate ? w : 0}deg)
        scale(${$})
      `;
            if (o.slideShadows) {
              let _ = f.find(".swiper-slide-shadow");
              _.length === 0 && (_ = Yn(o, f)),
                _.length &&
                  (_[0].style.opacity = Math.min(
                    Math.max((Math.abs(m) - 0.5) / 0.5, 0),
                    1
                  ));
            }
            (f[0].style.zIndex = -Math.abs(Math.round(h)) + s.length),
              Ar(o, f).transform(T);
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
  const vm = [
    qp,
    Vp,
    Yp,
    Wp,
    Gp,
    Xp,
    jp,
    Up,
    Zp,
    Qp,
    Kp,
    Jp,
    em,
    tm,
    im,
    nm,
    rm,
    um,
    dm,
    fm,
    hm,
    pm,
    mm,
    gm,
  ];
  ft.use(vm);
  let Ha = null;
  const cc = () => {
    const t = document.querySelector(".swiper[work-slider='component']");
    if (!t) return;
    const e = () => window.innerWidth >= 768,
      i = () => {
        const r = e();
        Ha = new ft(t, {
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
        r !== n && ((n = r), Ha && Ha.destroy(!0, !0), i());
      });
  };
  function wi(t) {
    if (t === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function uc(t, e) {
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
    qa,
    Ze,
    _e,
    ai = 1e8,
    et = 1 / ai,
    Va = Math.PI * 2,
    ym = Va / 4,
    bm = 0,
    dc = Math.sqrt,
    _m = Math.cos,
    wm = Math.sin,
    We = function (e) {
      return typeof e == "string";
    },
    ke = function (e) {
      return typeof e == "function";
    },
    xi = function (e) {
      return typeof e == "number";
    },
    Ya = function (e) {
      return typeof e > "u";
    },
    oi = function (e) {
      return typeof e == "object";
    },
    wt = function (e) {
      return e !== !1;
    },
    Wa = function () {
      return typeof window < "u";
    },
    Es = function (e) {
      return ke(e) || We(e);
    },
    fc =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    tt = Array.isArray,
    Ga = /(?:-?\.?\d|\.)+/gi,
    hc = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Gn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Xa = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    pc = /[+-]=-?[.\d]+/,
    mc = /[^,'"\[\]\s]+/gi,
    xm = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    xe,
    li,
    ja,
    Ua,
    Mt = {},
    Cs = {},
    gc,
    vc = function (e) {
      return (Cs = jn(e, Mt)) && Tt;
    },
    Za = function (e, i) {},
    Pr = function (e, i) {
      return !i && void 0;
    },
    yc = function (e, i) {
      return (e && (Mt[e] = i) && Cs && (Cs[e] = i)) || Mt;
    },
    Mr = function () {
      return 0;
    },
    Sm = { suppressEvents: !0, isStart: !0, kill: !1 },
    ks = { suppressEvents: !0, kill: !1 },
    Tm = { suppressEvents: !0 },
    Qa = {},
    Ri = [],
    Ka = {},
    bc,
    $t = {},
    Ja = {},
    _c = 30,
    As = [],
    eo = "",
    to = function (e) {
      var i = e[0],
        n,
        r;
      if ((oi(i) || ke(i) || (e = [e]), !(n = (i._gsap || {}).harness))) {
        for (r = As.length; r-- && !As[r].targetTest(i); );
        n = As[r];
      }
      for (r = e.length; r--; )
        (e[r] && (e[r]._gsap || (e[r]._gsap = new Uc(e[r], n)))) ||
          e.splice(r, 1);
      return e;
    },
    dn = function (e) {
      return e._gsap || to(qt(e))[0]._gsap;
    },
    wc = function (e, i, n) {
      return (n = e[i]) && ke(n)
        ? e[i]()
        : (Ya(n) && e.getAttribute && e.getAttribute(i)) || n;
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
    Em = function (e, i) {
      for (var n = i.length, r = 0; e.indexOf(i[r]) < 0 && ++r < n; );
      return r < n;
    },
    Ps = function () {
      var e = Ri.length,
        i = Ri.slice(0),
        n,
        r;
      for (Ka = {}, Ri.length = 0, n = 0; n < e; n++)
        (r = i[n]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    io = function (e) {
      return !!(e._initted || e._startAt || e.add);
    },
    xc = function (e, i, n, r) {
      Ri.length && !Ze && Ps(),
        e.render(i, n, !!(Ze && i < 0 && io(e))),
        Ri.length && !Ze && Ps();
    },
    Sc = function (e) {
      var i = parseFloat(e);
      return (i || i === 0) && (e + "").match(mc).length < 2
        ? i
        : We(e)
        ? e.trim()
        : e;
    },
    Tc = function (e) {
      return e;
    },
    Ot = function (e, i) {
      for (var n in i) n in e || (e[n] = i[n]);
      return e;
    },
    Cm = function (e) {
      return function (i, n) {
        for (var r in n)
          r in i || (r === "duration" && e) || r === "ease" || (i[r] = n[r]);
      };
    },
    jn = function (e, i) {
      for (var n in i) e[n] = i[n];
      return e;
    },
    Ec = function t(e, i) {
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
    $r = function (e) {
      var i = e.parent || xe,
        n = e.keyframes ? Cm(tt(e.keyframes)) : Ot;
      if (wt(e.inherit))
        for (; i; ) n(e, i.vars.defaults), (i = i.parent || i._dp);
      return e;
    },
    km = function (e, i) {
      for (var n = e.length, r = n === i.length; r && n-- && e[n] === i[n]; );
      return n < 0;
    },
    Cc = function (e, i, n, r, s) {
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
    Am = function (e) {
      for (var i = e.parent; i && i.parent; )
        (i._dirty = 1), i.totalDuration(), (i = i.parent);
      return e;
    },
    no = function (e, i, n, r) {
      return (
        e._startAt &&
        (Ze
          ? e._startAt.revert(ks)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(i, !0, r))
      );
    },
    Pm = function t(e) {
      return !e || (e._ts && t(e.parent));
    },
    kc = function (e) {
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
    Ls = function (e) {
      return (e._end = Ne(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || et) || 0)
      ));
    },
    zs = function (e, i) {
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
          Ls(e),
          n._dirty || fn(n, e)),
        e
      );
    },
    Ac = function (e, i) {
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
          (xi(n) ? n : n || e !== xe ? Ht(e, n, i) : e._time) + i._delay
        )),
        (i._end = Ne(
          i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0)
        )),
        Cc(e, i, "_first", "_last", e._sort ? "_start" : 0),
        ro(i) || (e._recent = i),
        r || Ac(e, i),
        e._ts < 0 && zs(e, e._tTime),
        e
      );
    },
    Pc = function (e, i) {
      return (
        (Mt.ScrollTrigger || Za("scrollTrigger", i)) &&
        Mt.ScrollTrigger.create(i, e)
      );
    },
    Mc = function (e, i, n, r, s) {
      if ((po(e, i, s), !e._initted)) return 1;
      if (
        !n &&
        e._pt &&
        !Ze &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        bc !== zt.frame
      )
        return Ri.push(e), (e._lazy = [s, r]), 1;
    },
    Mm = function t(e) {
      var i = e.parent;
      return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i));
    },
    ro = function (e) {
      var i = e.data;
      return i === "isFromStart" || i === "isStart";
    },
    $m = function (e, i, n, r) {
      var s = e.ratio,
        a =
          i < 0 ||
          (!i &&
            ((!e._start && Mm(e) && !(!e._initted && ro(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !ro(e))))
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
        if (!e._initted && Mc(e, i, r, n, l)) return;
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
        i < 0 && no(e, i, n, !0),
          e._onUpdate && !n && Lt(e, "onUpdate"),
          l && e._repeat && !n && e.parent && Lt(e, "onRepeat"),
          (i >= e._tDur || i < 0) &&
            e.ratio === a &&
            (a && Ni(e, 1),
            !n &&
              !Ze &&
              (Lt(e, a ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = i);
    },
    Om = function (e, i, n) {
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
        o > 0 && !r && zs(e, (e._tTime = e._tDur * o)),
        e.parent && Ls(e),
        n || fn(e.parent, e),
        e
      );
    },
    $c = function (e) {
      return e instanceof ht ? fn(e) : Zn(e, e._dur);
    },
    Lm = { _start: 0, endTime: Mr, totalDuration: Mr },
    Ht = function t(e, i, n) {
      var r = e.labels,
        s = e._recent || Lm,
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
    Or = function (e, i, n) {
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
      return !We(e) || !(i = xm.exec(e)) ? "" : i[1];
    },
    zm = function (e, i, n) {
      return Bi(n, function (r) {
        return Lr(e, i, r);
      });
    },
    so = [].slice,
    Oc = function (e, i) {
      return (
        e &&
        oi(e) &&
        "length" in e &&
        ((!i && !e.length) || (e.length - 1 in e && oi(e[0]))) &&
        !e.nodeType &&
        e !== li
      );
    },
    Dm = function (e, i, n) {
      return (
        n === void 0 && (n = []),
        e.forEach(function (r) {
          var s;
          return (We(r) && !i) || Oc(r, 1)
            ? (s = n).push.apply(s, qt(r))
            : n.push(r);
        }) || n
      );
    },
    qt = function (e, i, n) {
      return _e && !i && _e.selector
        ? _e.selector(e)
        : We(e) && !n && (ja || !Kn())
        ? so.call((i || Ua).querySelectorAll(e), 0)
        : tt(e)
        ? Dm(e, n)
        : Oc(e)
        ? so.call(e, 0)
        : e
        ? [e]
        : [];
    },
    ao = function (e) {
      return (
        (e = qt(e)[0] || Pr("Invalid scope") || {}),
        function (i) {
          var n = e.current || e.nativeElement || e;
          return qt(
            i,
            n.querySelectorAll
              ? n
              : n === e
              ? Pr("Invalid scope") || Ua.createElement("div")
              : e
          );
        }
      );
    },
    Lc = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    zc = function (e) {
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
            y,
            v,
            b,
            w,
            x,
            E,
            C,
            k,
            $;
          if (!g) {
            if ((($ = i.grid === "auto" ? 0 : (i.grid || [1, ai])[1]), !$)) {
              for (
                C = -1e8;
                C < (C = m[$++].getBoundingClientRect().left) && $ < p;

              );
              $ < p && $--;
            }
            for (
              g = a[p] = [],
                y = l ? Math.min($, p) * u - 0.5 : r % $,
                v = $ === ai ? 0 : l ? (p * d) / $ - 0.5 : (r / $) | 0,
                C = 0,
                k = ai,
                E = 0;
              E < p;
              E++
            )
              (b = (E % $) - y),
                (w = v - ((E / $) | 0)),
                (g[E] = x =
                  c ? Math.abs(c === "y" ? w : b) : dc(b * b + w * w)),
                x > C && (C = x),
                x < k && (k = x);
            r === "random" && Lc(g),
              (g.max = C - k),
              (g.min = k),
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
              (n = n && p < 0 ? Gc(n) : n);
          }
          return (
            (p = (g[f] - g.min) / g.max || 0),
            Ne(g.b + (n ? n(p) : p) * g.v) + g.u
          );
        }
      );
    },
    oo = function (e) {
      var i = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (n) {
        var r = Ne(Math.round(parseFloat(n) / e) * e * i);
        return (r - (r % 1)) / i + (xi(n) ? 0 : it(n));
      };
    },
    Dc = function (e, i) {
      var n = tt(e),
        r,
        s;
      return (
        !n &&
          oi(e) &&
          ((r = n = e.radius || ai),
          e.values
            ? ((e = qt(e.values)), (s = !xi(e[0])) && (r *= r))
            : (e = oo(e.increment))),
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
            : oo(e)
        )
      );
    },
    Ic = function (e, i, n, r) {
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
    Im = function () {
      for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++)
        i[n] = arguments[n];
      return function (r) {
        return i.reduce(function (s, a) {
          return a(s);
        }, r);
      };
    },
    Rm = function (e, i) {
      return function (n) {
        return e(parseFloat(n)) + (i || it(n));
      };
    },
    Nm = function (e, i, n) {
      return Nc(e, i, 0, 1, n);
    },
    Rc = function (e, i, n) {
      return Bi(n, function (r) {
        return e[~~i(r)];
      });
    },
    Bm = function t(e, i, n) {
      var r = i - e;
      return tt(e)
        ? Rc(e, t(0, e.length), i)
        : Bi(n, function (s) {
            return ((r + ((s - e) % r)) % r) + e;
          });
    },
    Fm = function t(e, i, n) {
      var r = i - e,
        s = r * 2;
      return tt(e)
        ? Rc(e, t(0, e.length - 1), i)
        : Bi(n, function (a) {
            return (a = (s + ((a - e) % s)) % s || 0), e + (a > r ? s - a : a);
          });
    },
    zr = function (e) {
      for (var i = 0, n = "", r, s, a, o; ~(r = e.indexOf("random(", i)); )
        (a = e.indexOf(")", r)),
          (o = e.charAt(r + 7) === "["),
          (s = e.substr(r + 7, a - r - 7).match(o ? mc : Ga)),
          (n +=
            e.substr(i, r - i) +
            Ic(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5)),
          (i = a + 1);
      return n + e.substr(i, e.length - i);
    },
    Nc = function (e, i, n, r, s) {
      var a = i - e,
        o = r - n;
      return Bi(s, function (l) {
        return n + (((l - e) / a) * o || 0);
      });
    },
    Hm = function t(e, i, n, r) {
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
          for (l in i) fo.call(o, e, l, "get", i[l]);
          s = function (m) {
            return vo(m, o) || (a ? e.p : e);
          };
        }
      }
      return Bi(n, s);
    },
    Bc = function (e, i, n) {
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
    Lt = function (e, i, n) {
      var r = e.vars,
        s = r[i],
        a = _e,
        o = e._ctx,
        l,
        c,
        u;
      if (s)
        return (
          (l = r[i + "Params"]),
          (c = r.callbackScope || e),
          n && Ri.length && Ps(),
          o && (_e = o),
          (u = l ? s.apply(c, l) : s.call(c)),
          (_e = a),
          u
        );
    },
    Dr = function (e) {
      return (
        Ni(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!Ze),
        e.progress() < 1 && Lt(e, "onInterrupt"),
        e
      );
    },
    Qn,
    Fc = [],
    Hc = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), Wa() || e.headless)) {
          var i = e.name,
            n = ke(e),
            r =
              i && !n && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            s = {
              init: Mr,
              render: vo,
              add: fo,
              kill: ng,
              modifier: ig,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: go,
              aliases: {},
              register: 0,
            };
          if ((Kn(), e !== r)) {
            if ($t[i]) return;
            Ot(r, Ot(Ms(e, s), a)),
              jn(r.prototype, jn(s, Ms(e, a))),
              ($t[(r.prop = i)] = r),
              e.targetTest && (As.push(r), (Qa[i] = 1)),
              (i =
                (i === "css"
                  ? "CSS"
                  : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin");
          }
          yc(i, r), e.register && e.register(Tt, r, St);
        } else Fc.push(e);
    },
    me = 255,
    Ir = {
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
    lo = function (e, i, n) {
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
    qc = function (e, i, n) {
      var r = e ? (xi(e) ? [e >> 16, (e >> 8) & me, e & me] : 0) : Ir.black,
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
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Ir[e]))
          r = Ir[e];
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
          if (((r = m = e.match(Ga)), !i))
            (l = (+r[0] % 360) / 360),
              (c = +r[1] / 100),
              (u = +r[2] / 100),
              (a = u <= 0.5 ? u * (c + 1) : u + c - u * c),
              (s = u * 2 - a),
              r.length > 3 && (r[3] *= 1),
              (r[0] = lo(l + 1 / 3, s, a)),
              (r[1] = lo(l, s, a)),
              (r[2] = lo(l - 1 / 3, s, a));
          else if (~e.indexOf("="))
            return (r = e.match(hc)), n && r.length < 4 && (r[3] = 1), r;
        } else r = e.match(Ga) || Ir.transparent;
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
    Vc = function (e) {
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
    Yc = function (e, i, n) {
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
            (f = qc(f, i, 1)) &&
            a +
              (i
                ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3]
                : f.join(",")) +
              ")"
          );
        })),
        n && ((u = Vc(e)), (l = n.c), l.join(r) !== u.c.join(r)))
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
      for (e in Ir) t += "|" + e + "\\b";
      return new RegExp(t + ")", "gi");
    })(),
    qm = /hsl[a]?\(/,
    Wc = function (e) {
      var i = e.join(" "),
        n;
      if (((Fi.lastIndex = 0), Fi.test(i)))
        return (
          (n = qm.test(i)),
          (e[1] = Yc(e[1], n)),
          (e[0] = Yc(e[0], n, Vc(e[1]))),
          !0
        );
    },
    Rr,
    zt = (function () {
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
          var y = t() - r,
            v = g === !0,
            b,
            w,
            x,
            E;
          if (
            ((y > e || y < 0) && (n += y - i),
            (r += y),
            (x = r - n),
            (b = x - a),
            (b > 0 || v) &&
              ((E = ++d.frame),
              (f = x - d.time * 1e3),
              (d.time = x = x / 1e3),
              (a += b + (b >= s ? 4 : s - b)),
              (w = 1)),
            v || (l = c(p)),
            w)
          )
            for (h = 0; h < o.length; h++) o[h](x, f, E, g);
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
            gc &&
              (!ja &&
                Wa() &&
                ((li = ja = window),
                (Ua = li.document || {}),
                (Mt.gsap = Tt),
                (li.gsapVersions || (li.gsapVersions = [])).push(Tt.version),
                vc(Cs || li.GreenSockGlobals || (!li.gsap && li) || {}),
                Fc.forEach(Hc)),
              (u = typeof requestAnimationFrame < "u" && requestAnimationFrame),
              l && d.sleep(),
              (c =
                u ||
                function (g) {
                  return setTimeout(g, (a - d.time * 1e3 + 1) | 0);
                }),
              (Rr = 1),
              m(2));
          },
          sleep: function () {
            (u ? cancelAnimationFrame : clearTimeout)(l), (Rr = 0), (c = Mr);
          },
          lagSmoothing: function (g, y) {
            (e = g || 1 / 0), (i = Math.min(y || 33, e));
          },
          fps: function (g) {
            (s = 1e3 / (g || 240)), (a = d.time * 1e3 + s);
          },
          add: function (g, y, v) {
            var b = y
              ? function (w, x, E, C) {
                  g(w, x, E, C), d.remove(b);
                }
              : g;
            return d.remove(g), o[v ? "unshift" : "push"](b), Kn(), b;
          },
          remove: function (g, y) {
            ~(y = o.indexOf(g)) && o.splice(y, 1) && h >= y && h--;
          },
          _listeners: o,
        }),
        d
      );
    })(),
    Kn = function () {
      return !Rr && zt.wake();
    },
    Qe = {},
    Vm = /^[\d.\-M][\d.\-,\s]/,
    Ym = /["']/g,
    Wm = function (e) {
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
          (i[r] = isNaN(c) ? c.replace(Ym, "").trim() : +c),
          (r = l.substr(o + 1).trim());
      return i;
    },
    Gm = function (e) {
      var i = e.indexOf("(") + 1,
        n = e.indexOf(")"),
        r = e.indexOf("(", i);
      return e.substring(i, ~r && r < n ? e.indexOf(")", n + 1) : n);
    },
    Xm = function (e) {
      var i = (e + "").split("("),
        n = Qe[i[0]];
      return n && i.length > 1 && n.config
        ? n.config.apply(
            null,
            ~e.indexOf("{") ? [Wm(i[1])] : Gm(e).split(",").map(Sc)
          )
        : Qe._CE && Vm.test(e)
        ? Qe._CE("", e)
        : n;
    },
    Gc = function (e) {
      return function (i) {
        return 1 - e(1 - i);
      };
    },
    Xc = function t(e, i) {
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
      return (e && (ke(e) ? e : Qe[e] || Xm(e))) || i;
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
    jc = function (e) {
      return function (i) {
        return i < 0.5 ? (1 - e(1 - i * 2)) / 2 : 0.5 + e((i - 0.5) * 2) / 2;
      };
    },
    co = function t(e, i, n) {
      var r = i >= 1 ? i : 1,
        s = (n || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
        a = (s / Va) * (Math.asin(1 / r) || 0),
        o = function (u) {
          return u === 1 ? 1 : r * Math.pow(2, -10 * u) * wm((u - a) * s) + 1;
        },
        l =
          e === "out"
            ? o
            : e === "in"
            ? function (c) {
                return 1 - o(1 - c);
              }
            : jc(o);
      return (
        (s = Va / s),
        (l.config = function (c, u) {
          return t(e, c, u);
        }),
        l
      );
    },
    uo = function t(e, i) {
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
            : jc(n);
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
    pn("Elastic", co("in"), co("out"), co()),
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
      return -(dc(1 - t * t) - 1);
    }),
    pn("Sine", function (t) {
      return t === 1 ? 1 : -_m(t * ym) + 1;
    }),
    pn("Back", uo("in"), uo("out"), uo()),
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
        return (eo += t + "," + t + "Params,");
      }
    );
  var Uc = function (e, i) {
      (this.id = bm++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = i),
        (this.get = i ? i.get : wc),
        (this.set = i ? i.getSetter : go);
    },
    Nr = (function () {
      function t(i) {
        (this.vars = i),
          (this._delay = +i.delay || 0),
          (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) &&
            ((this._rDelay = i.repeatDelay || 0),
            (this._yoyo = !!i.yoyo || !!i.yoyoEase)),
          (this._ts = 1),
          Zn(this, +i.duration, 1, 1),
          (this.data = i.data),
          _e && ((this._ctx = _e), _e.data.push(this)),
          Rr || zt.wake();
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
              zs(this, n), !s._dp || s.parent || Ac(s, this);
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
              (this._ts || (this._pTime = n), xc(this, n, r)),
            this
          );
        }),
        (e.time = function (n, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), n + kc(this)) %
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
                  kc(this),
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
            Ls(this),
            Am(this)
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
          n === void 0 && (n = Tm);
          var r = Ze;
          return (
            (Ze = n),
            io(this) &&
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
            ? ((this._repeat = n === 1 / 0 ? -2 : n), $c(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (n) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = n), $c(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (n) {
          return arguments.length ? ((this._yoyo = n), this) : this._yoyo;
        }),
        (e.seek = function (n, r) {
          return this.totalTime(Ht(this, n), wt(r));
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
            var a = ke(n) ? n : Tc,
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
  Ot(Nr.prototype, {
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
    uc(e, t);
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
        n.scrollTrigger && Pc(wi(s), n.scrollTrigger),
        s
      );
    }
    var i = e.prototype;
    return (
      (i.to = function (r, s, a) {
        return Or(0, arguments, this), this;
      }),
      (i.from = function (r, s, a) {
        return Or(1, arguments, this), this;
      }),
      (i.fromTo = function (r, s, a, o) {
        return Or(2, arguments, this), this;
      }),
      (i.set = function (r, s, a) {
        return (
          (s.duration = 0),
          (s.parent = this),
          $r(s).repeatDelay || (s.repeat = 0),
          (s.immediateRender = !!s.immediateRender),
          new Be(r, s, Ht(this, a), 1),
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
          new Be(r, a, Ht(this, l)),
          this
        );
      }),
      (i.staggerFrom = function (r, s, a, o, l, c, u) {
        return (
          (a.runBackwards = 1),
          ($r(a).immediateRender = wt(a.immediateRender)),
          this.staggerTo(r, s, a, o, l, c, u)
        );
      }),
      (i.staggerFromTo = function (r, s, a, o, l, c, u, d) {
        return (
          (o.startAt = a),
          ($r(o).immediateRender = wt(o.immediateRender)),
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
          y,
          v,
          b,
          w,
          x,
          E,
          C;
        if (
          (this !== xe && u > l && r >= 0 && (u = l),
          u !== this._tTime || a || d)
        ) {
          if (
            (o !== this._time &&
              c &&
              ((u += this._time - o), (r += this._time - o)),
            (f = u),
            (w = this._start),
            (b = this._ts),
            (y = !b),
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
              E && p & 1 && ((f = c - f), (C = 1)),
              p !== x && !this._lock)
            ) {
              var k = E && x & 1,
                $ = k === (E && p & 1);
              if (
                (p < x && (k = !k),
                (o = k ? 0 : u % c ? c : u),
                (this._lock = 1),
                (this.render(o || (C ? 0 : Ne(p * g)), s, !c)._lock = 0),
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
                $ &&
                  ((this._lock = 2),
                  (o = k ? c : -1e-4),
                  this.render(o, !0),
                  this.vars.repeatRefresh && !C && this.invalidate()),
                (this._lock = 0),
                !this._ts && !y)
              )
                return this;
              Xc(this, C);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((v = Om(this, Ne(o), Ne(f))), v && (u -= f - (f = v._start))),
            (this._tTime = u),
            (this._time = f),
            (this._act = !b),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (o = 0)),
            !o && u && !s && !x && (Lt(this, "onStart"), this._tTime !== u))
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
                  f !== this._time || (!this._ts && !y))
                ) {
                  (v = 0), m && (u += this._zTime = -1e-8);
                  break;
                }
              }
              h = m;
            }
          else {
            h = this._last;
            for (var T = r < 0 ? r : f; h; ) {
              if (
                ((m = h._prev), (h._act || T <= h._end) && h._ts && v !== h)
              ) {
                if (h.parent !== this) return this.render(r, s, a);
                if (
                  (h.render(
                    h._ts > 0
                      ? (T - h._start) * h._ts
                      : (h._dirty ? h.totalDuration() : h._tDur) +
                          (T - h._start) * h._ts,
                    s,
                    a || (Ze && io(h))
                  ),
                  f !== this._time || (!this._ts && !y))
                ) {
                  (v = 0), m && (u += this._zTime = T ? -1e-8 : et);
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
            return (this._start = w), Ls(this), this.render(r, s, a);
          this._onUpdate && !s && Lt(this, "onUpdate", !0),
            ((u === l && this._tTime >= this.totalDuration()) || (!u && o)) &&
              (w === this._start || Math.abs(b) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !c) &&
                  ((u === l && this._ts > 0) || (!u && this._ts < 0)) &&
                  Ni(this, 1),
                !s &&
                  !(r < 0 && !o) &&
                  (u || o || !l) &&
                  (Lt(
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
        if ((xi(s) || (s = Ht(this, s, r)), !(r instanceof Nr))) {
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
                zt.time -
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
        return (this.labels[r] = Ht(this, s)), this;
      }),
      (i.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (i.addPause = function (r, s, a) {
        var o = Be.delayedCall(0, s || Mr, a);
        return (
          (o.data = "isPause"), (this._hasPause = 1), ci(this, o, Ht(this, r))
        );
      }),
      (i.removePause = function (r) {
        var s = this._first;
        for (r = Ht(this, r); s; )
          s._start === r && s.data === "isPause" && Ni(s), (s = s._next);
      }),
      (i.killTweensOf = function (r, s, a) {
        for (var o = this.getTweensOf(r, a), l = o.length; l--; )
          Hi !== o[l] && o[l].kill(r, s);
        return this;
      }),
      (i.getTweensOf = function (r, s) {
        for (var a = [], o = qt(r), l = this._first, c = xi(s), u; l; )
          l instanceof Be
            ? Em(l._targets, o) &&
              (c
                ? (!Hi || (l._initted && l._ts)) &&
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
          o = Ht(a, r),
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
        return this.tweenTo(s, Ot({ startAt: { time: Ht(this, r) } }, a));
      }),
      (i.recent = function () {
        return this._recent;
      }),
      (i.nextLabel = function (r) {
        return r === void 0 && (r = this._time), Bc(this, Ht(this, r));
      }),
      (i.previousLabel = function (r) {
        return r === void 0 && (r = this._time), Bc(this, Ht(this, r), 1);
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
        if ((xe._ts && (xc(xe, Os(r, xe)), (bc = zt.frame)), zt.frame >= _c)) {
          _c += Pt.autoSleep || 120;
          var s = xe._first;
          if ((!s || !s._ts) && Pt.autoSleep && zt._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || zt.sleep();
          }
        }
      }),
      e
    );
  })(Nr);
  Ot(ht.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var jm = function (e, i, n, r, s, a, o) {
      var l = new St(this._pt, e, i, 0, 1, tu, null, s),
        c = 0,
        u = 0,
        d,
        f,
        h,
        m,
        p,
        g,
        y,
        v;
      for (
        l.b = n,
          l.e = r,
          n += "",
          r += "",
          (y = ~r.indexOf("random(")) && (r = zr(r)),
          a && ((v = [n, r]), a(v, e, i), (n = v[0]), (r = v[1])),
          f = n.match(Xa) || [];
        (d = Xa.exec(r));

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
            (c = Xa.lastIndex));
      return (
        (l.c = c < r.length ? r.substring(c, r.length) : ""),
        (l.fp = o),
        (pc.test(r) || y) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    fo = function (e, i, n, r, s, a, o, l, c, u) {
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
        h = ke(d) ? (c ? Jm : Jc) : mo,
        m;
      if (
        (We(r) &&
          (~r.indexOf("random(") && (r = zr(r)),
          r.charAt(1) === "=" &&
            ((m = Xn(f, r) + (it(f) || 0)), (m || m === 0) && (r = m))),
        !u || f !== r || ho)
      )
        return !isNaN(f * r) && r !== ""
          ? ((m = new St(
              this._pt,
              e,
              i,
              +f || 0,
              r - (f || 0),
              typeof d == "boolean" ? tg : eu,
              0,
              h
            )),
            c && (m.fp = c),
            o && m.modifier(o, this, e),
            (this._pt = m))
          : (!d && !(i in e) && Za(i, r),
            jm.call(this, e, i, f, r, h, l || Pt.stringFilter, c));
    },
    Um = function (e, i, n, r, s) {
      if (
        (ke(e) && (e = Br(e, s, i, n, r)),
        !oi(e) || (e.style && e.nodeType) || tt(e) || fc(e))
      )
        return We(e) ? Br(e, s, i, n, r) : e;
      var a = {},
        o;
      for (o in e) a[o] = Br(e[o], s, i, n, r);
      return a;
    },
    Zc = function (e, i, n, r, s, a) {
      var o, l, c, u;
      if (
        $t[e] &&
        (o = new $t[e]()).init(
          s,
          o.rawVars ? i[e] : Um(i[e], r, s, a, n),
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
    Hi,
    ho,
    po = function t(e, i, n) {
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
        y = e.parent,
        v = y && y.data === "nested" ? y.vars.targets : g,
        b = e._overwrite === "auto" && !qa,
        w = e.timeline,
        x,
        E,
        C,
        k,
        $,
        T,
        M,
        _,
        S,
        O,
        L,
        A,
        z;
      if (
        (w && (!f || !s) && (s = "none"),
        (e._ease = hn(s, Wn.ease)),
        (e._yEase = d ? Gc(hn(d === !0 ? s : d, Wn.ease)) : 0),
        d &&
          e._yoyo &&
          !e._repeat &&
          ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
        (e._from = !w && !!r.runBackwards),
        !w || (f && !r.stagger))
      ) {
        if (
          ((_ = g[0] ? dn(g[0]).harness : 0),
          (A = _ && r[_.prop]),
          (x = Ms(r, Qa)),
          p &&
            (p._zTime < 0 && p.progress(1),
            i < 0 && u && o && !h
              ? p.render(-1, !0)
              : p.revert(u && m ? ks : Sm),
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
                    parent: y,
                    immediateRender: !0,
                    lazy: !p && wt(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      c &&
                      function () {
                        return Lt(e, "onUpdate");
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
            (C = Ot(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !p && wt(l),
                immediateRender: o,
                stagger: 0,
                parent: y,
              },
              x
            )),
            A && (C[_.prop] = A),
            Ni((e._startAt = Be.set(g, C))),
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
          e._pt = e._ptCache = 0, l = (m && wt(l)) || (l && !m), E = 0;
          E < g.length;
          E++
        ) {
          if (
            (($ = g[E]),
            (M = $._gsap || to(g)[E]._gsap),
            (e._ptLookup[E] = O = {}),
            Ka[M.id] && Ri.length && Ps(),
            (L = v === g ? E : v.indexOf($)),
            _ &&
              (S = new _()).init($, A || x, e, L, v) !== !1 &&
              ((e._pt = k =
                new St(e._pt, $, S.name, 0, 1, S.render, S, 0, S.priority)),
              S._props.forEach(function (D) {
                O[D] = k;
              }),
              S.priority && (T = 1)),
            !_ || A)
          )
            for (C in x)
              $t[C] && (S = Zc(C, x, e, L, $, v))
                ? S.priority && (T = 1)
                : (O[C] = k =
                    fo.call(e, $, C, "get", x[C], L, v, 0, r.stringFilter));
          e._op && e._op[E] && e.kill($, e._op[E]),
            b &&
              e._pt &&
              ((Hi = e),
              xe.killTweensOf($, O, e.globalTime(i)),
              (z = !e.parent),
              (Hi = 0)),
            e._pt && l && (Ka[M.id] = 1);
        }
        T && iu(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = c),
        (e._initted = (!e._op || e._pt) && !z),
        f && i <= 0 && w.render(ai, !0, !0);
    },
    Zm = function (e, i, n, r, s, a, o, l) {
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
              (ho = 1),
              (e.vars[i] = "+=0"),
              po(e, o),
              (ho = 0),
              l ? Pr(i + " not eligible for reset") : 1
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
    Qm = function (e, i) {
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
    Km = function (e, i, n, r) {
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
    Br = function (e, i, n, r, s) {
      return ke(e)
        ? e.call(i, n, r, s)
        : We(e) && ~e.indexOf("random(")
        ? zr(e)
        : e;
    },
    Qc = eo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Kc = {};
  xt(Qc + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return (Kc[t] = 1);
  });
  var Be = (function (t) {
    uc(e, t);
    function e(n, r, s, a) {
      var o;
      typeof r == "number" && ((s.duration = r), (r = s), (s = null)),
        (o = t.call(this, a ? r : $r(r)) || this);
      var l = o.vars,
        c = l.duration,
        u = l.delay,
        d = l.immediateRender,
        f = l.stagger,
        h = l.overwrite,
        m = l.keyframes,
        p = l.defaults,
        g = l.scrollTrigger,
        y = l.yoyoEase,
        v = r.parent || xe,
        b = (tt(n) || fc(n) ? xi(n[0]) : "length" in r) ? [n] : qt(n),
        w,
        x,
        E,
        C,
        k,
        $,
        T,
        M;
      if (
        ((o._targets = b.length
          ? to(b)
          : Pr(
              "GSAP target " + n + " not found. https://gsap.com",
              !Pt.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = h),
        m || f || Es(c) || Es(u))
      ) {
        if (
          ((r = o.vars),
          (w = o.timeline =
            new ht({
              data: "nested",
              defaults: p || {},
              targets: v && v.data === "nested" ? v.vars.targets : b,
            })),
          w.kill(),
          (w.parent = w._dp = wi(o)),
          (w._start = 0),
          f || Es(c) || Es(u))
        ) {
          if (((C = b.length), (T = f && zc(f)), oi(f)))
            for (k in f) ~Qc.indexOf(k) && (M || (M = {}), (M[k] = f[k]));
          for (x = 0; x < C; x++)
            (E = Ms(r, Kc)),
              (E.stagger = 0),
              y && (E.yoyoEase = y),
              M && jn(E, M),
              ($ = b[x]),
              (E.duration = +Br(c, wi(o), x, $, b)),
              (E.delay = (+Br(u, wi(o), x, $, b) || 0) - o._delay),
              !f &&
                C === 1 &&
                E.delay &&
                ((o._delay = u = E.delay), (o._start += u), (E.delay = 0)),
              w.to($, E, T ? T(x, $, b) : 0),
              (w._ease = Qe.none);
          w.duration() ? (c = u = 0) : (o.timeline = 0);
        } else if (m) {
          $r(Ot(w.vars.defaults, { ease: "none" })),
            (w._ease = hn(m.ease || r.ease || "none"));
          var _ = 0,
            S,
            O,
            L;
          if (tt(m))
            m.forEach(function (A) {
              return w.to(b, A, ">");
            }),
              w.duration();
          else {
            E = {};
            for (k in m)
              k === "ease" || k === "easeEach" || Km(k, m[k], E, m.easeEach);
            for (k in E)
              for (
                S = E[k].sort(function (A, z) {
                  return A.t - z.t;
                }),
                  _ = 0,
                  x = 0;
                x < S.length;
                x++
              )
                (O = S[x]),
                  (L = {
                    ease: O.e,
                    duration: ((O.t - (x ? S[x - 1].t : 0)) / 100) * c,
                  }),
                  (L[k] = O.v),
                  w.to(b, L, _),
                  (_ += L.duration);
            w.duration() < c && w.to({}, { duration: c - w.duration() });
          }
        }
        c || o.duration((c = w.duration()));
      } else o.timeline = 0;
      return (
        h === !0 && !qa && ((Hi = wi(o)), xe.killTweensOf(b), (Hi = 0)),
        ci(v, wi(o), s),
        r.reversed && o.reverse(),
        r.paused && o.paused(!0),
        (d ||
          (!c &&
            !m &&
            o._start === Ne(v._time) &&
            wt(d) &&
            Pm(wi(o)) &&
            v.data !== "nested")) &&
          ((o._tTime = -1e-8), o.render(Math.max(0, -u) || 0)),
        g && Pc(wi(o), g),
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
          y,
          v,
          b,
          w;
        if (!c) $m(this, r, s, a);
        else if (
          d !== this._tTime ||
          !r ||
          a ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== u) ||
          this._lazy
        ) {
          if (((f = d), (b = this.timeline), this._repeat)) {
            if (((p = c + this._rDelay), this._repeat < -1 && u))
              return this.totalTime(p * 100 + r, s, a);
            if (
              ((f = Ne(d % p)),
              d === l
                ? ((m = this._repeat), (f = c))
                : ((g = Ne(d / p)),
                  (m = ~~g),
                  m && m === g ? ((f = c), m--) : f > c && (f = c)),
              (y = this._yoyo && m & 1),
              y && ((w = this._yEase), (f = c - f)),
              (g = Un(this._tTime, p)),
              f === o && !a && this._initted && m === g)
            )
              return (this._tTime = d), this;
            m !== g &&
              (b && this._yEase && Xc(b, y),
              this.vars.repeatRefresh &&
                !y &&
                !this._lock &&
                f !== p &&
                this._initted &&
                ((this._lock = a = 1),
                (this.render(Ne(p * m), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Mc(this, u ? r : f, a, s, d)) return (this._tTime = 0), this;
            if (o !== this._time && !(a && this.vars.repeatRefresh && m !== g))
              return this;
            if (c !== this._dur) return this.render(r, s, a);
          }
          if (
            ((this._tTime = d),
            (this._time = f),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = v = (w || this._ease)(f / c)),
            this._from && (this.ratio = v = 1 - v),
            !o && d && !s && !g && (Lt(this, "onStart"), this._tTime !== d))
          )
            return this;
          for (h = this._pt; h; ) h.r(v, h.d), (h = h._next);
          (b && b.render(r < 0 ? r : b._dur * b._ease(f / this._dur), s, a)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !s &&
              (u && no(this, r, s, a), Lt(this, "onUpdate")),
            this._repeat &&
              m !== g &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              Lt(this, "onRepeat"),
            (d === this._tDur || !d) &&
              this._tTime === d &&
              (u && !this._onUpdate && no(this, r, !0, !0),
              (r || !c) &&
                ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
                Ni(this, 1),
              !s &&
                !(u && !o) &&
                (d || o || y) &&
                (Lt(this, d === l ? "onComplete" : "onReverseComplete", !0),
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
        Rr || zt.wake(), this._ts || this.play();
        var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          u;
        return (
          this._initted || po(this, c),
          (u = this._ease(c / this._dur)),
          Zm(this, r, s, a, o, u, c, l)
            ? this.resetTo(r, s, a, o, 1)
            : (zs(this, 0),
              this.parent ||
                Cc(
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
            this.timeline.killTweensOf(r, s, Hi && Hi.vars.overwrite !== !0)
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
          y;
        if ((!s || s === "all") && km(o, l))
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
              (s = Qm(o, s))),
            y = o.length;
          y--;

        )
          if (~l.indexOf(o[y])) {
            (f = c[y]),
              s === "all"
                ? ((d[y] = s), (m = f), (h = {}))
                : ((h = d[y] = d[y] || {}), (m = s));
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
        return Or(1, arguments);
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
        return Or(2, arguments);
      }),
      (e.set = function (r, s) {
        return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(r, s);
      }),
      (e.killTweensOf = function (r, s, a) {
        return xe.killTweensOf(r, s, a);
      }),
      e
    );
  })(Nr);
  Ot(Be.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    xt("staggerTo,staggerFrom,staggerFromTo", function (t) {
      Be[t] = function () {
        var e = new ht(),
          i = so.call(arguments, 0);
        return i.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, i);
      };
    });
  var mo = function (e, i, n) {
      return (e[i] = n);
    },
    Jc = function (e, i, n) {
      return e[i](n);
    },
    Jm = function (e, i, n, r) {
      return e[i](r.fp, n);
    },
    eg = function (e, i, n) {
      return e.setAttribute(i, n);
    },
    go = function (e, i) {
      return ke(e[i]) ? Jc : Ya(e[i]) && e.setAttribute ? eg : mo;
    },
    eu = function (e, i) {
      return i.set(i.t, i.p, Math.round((i.s + i.c * e) * 1e6) / 1e6, i);
    },
    tg = function (e, i) {
      return i.set(i.t, i.p, !!(i.s + i.c * e), i);
    },
    tu = function (e, i) {
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
    vo = function (e, i) {
      for (var n = i._pt; n; ) n.r(e, n.d), (n = n._next);
    },
    ig = function (e, i, n, r) {
      for (var s = this._pt, a; s; )
        (a = s._next), s.p === r && s.modifier(e, i, n), (s = a);
    },
    ng = function (e) {
      for (var i = this._pt, n, r; i; )
        (r = i._next),
          (i.p === e && !i.op) || i.op === e
            ? $s(this, i, "_pt")
            : i.dep || (n = 1),
          (i = r);
      return !n;
    },
    rg = function (e, i, n, r) {
      r.mSet(e, i, r.m.call(r.tween, n, r.mt), r);
    },
    iu = function (e) {
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
          (this.r = o || eu),
          (this.d = l || this),
          (this.set = c || mo),
          (this.pr = u || 0),
          (this._next = i),
          i && (i._prev = this);
      }
      var e = t.prototype;
      return (
        (e.modifier = function (n, r, s) {
          (this.mSet = this.mSet || this.set),
            (this.set = rg),
            (this.m = n),
            (this.mt = s),
            (this.tween = r);
        }),
        t
      );
    })();
  xt(
    eo +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (Qa[t] = 1);
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
    (Pt.stringFilter = Wc);
  var mn = [],
    Ds = {},
    sg = [],
    nu = 0,
    ag = 0,
    yo = function (e) {
      return (Ds[e] || sg).map(function (i) {
        return i();
      });
    },
    bo = function () {
      var e = Date.now(),
        i = [];
      e - nu > 2 &&
        (yo("matchMediaInit"),
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
        yo("matchMediaRevert"),
        i.forEach(function (n) {
          return n.onMatch(n, function (r) {
            return n.add(null, r);
          });
        }),
        (nu = e),
        yo("matchMedia"));
    },
    ru = (function () {
      function t(i, n) {
        (this.selector = n && ao(n)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = ag++),
          i && this.add(i);
      }
      var e = t.prototype;
      return (
        (e.add = function (n, r, s) {
          ke(n) && ((s = r), (r = n), (n = ke));
          var a = this,
            o = function () {
              var c = _e,
                u = a.selector,
                d;
              return (
                c && c !== a && c.data.push(a),
                s && (a.selector = ao(s)),
                (_e = a),
                (d = r.apply(a, arguments)),
                ke(d) && a._r.push(d),
                (_e = c),
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
          var r = _e;
          (_e = null), n(this), (_e = r);
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
    og = (function () {
      function t(i) {
        (this.contexts = []), (this.scope = i), _e && _e.data.push(this);
      }
      var e = t.prototype;
      return (
        (e.add = function (n, r, s) {
          oi(n) || (n = { matches: n });
          var a = new ru(0, s || this.scope),
            o = (a.conditions = {}),
            l,
            c,
            u;
          _e && !a.selector && (a.selector = _e.selector),
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
                    ? l.addListener(bo)
                    : l.addEventListener("change", bo)));
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
    Is = {
      registerPlugin: function () {
        for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++)
          i[n] = arguments[n];
        i.forEach(function (r) {
          return Hc(r);
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
          a = n ? Tc : Sc;
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
                  Qn._pt && vo(1, Qn);
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
        return e && e.ease && (e.ease = hn(e.ease, Wn.ease)), Ec(Wn, e || {});
      },
      config: function (e) {
        return Ec(Pt, e || {});
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
            Pr(i + " effect requires " + o + " plugin.")
          );
        }),
          (Ja[i] = function (o, l, c) {
            return n(qt(o), Ot(l || {}, s), c);
          }),
          a &&
            (ht.prototype[i] = function (o, l, c) {
              return this.add(Ja[i](o, oi(l) ? l : (c = l) && {}, this), c);
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
        return e ? new ru(e, i) : _e;
      },
      matchMedia: function (e) {
        return new og(e);
      },
      matchMediaRefresh: function () {
        return (
          mn.forEach(function (e) {
            var i = e.conditions,
              n,
              r;
            for (r in i) i[r] && ((i[r] = !1), (n = 1));
            n && e.revert();
          }) || bo()
        );
      },
      addEventListener: function (e, i) {
        var n = Ds[e] || (Ds[e] = []);
        ~n.indexOf(i) || n.push(i);
      },
      removeEventListener: function (e, i) {
        var n = Ds[e],
          r = n && n.indexOf(i);
        r >= 0 && n.splice(r, 1);
      },
      utils: {
        wrap: Bm,
        wrapYoyo: Fm,
        distribute: zc,
        random: Ic,
        snap: Dc,
        normalize: Nm,
        getUnit: it,
        clamp: zm,
        splitColor: qc,
        toArray: qt,
        selector: ao,
        mapRange: Nc,
        pipe: Im,
        unitize: Rm,
        interpolate: Hm,
        shuffle: Lc,
      },
      install: vc,
      effects: Ja,
      ticker: zt,
      updateRoot: ht.updateRoot,
      plugins: $t,
      globalTimeline: xe,
      core: {
        PropTween: St,
        globals: yc,
        Tween: Be,
        Timeline: ht,
        Animation: Nr,
        getCache: dn,
        _removeLinkedListItem: $s,
        reverting: function () {
          return Ze;
        },
        context: function (e) {
          return e && _e && (_e.data.push(e), (e._ctx = _e)), _e;
        },
        suppressOverwrites: function (e) {
          return (qa = e);
        },
      },
    };
  xt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (Is[t] = Be[t]);
  }),
    zt.add(ht.updateRoot),
    (Qn = Is.to({}, { duration: 0 }));
  var lg = function (e, i) {
      for (var n = e._pt; n && n.p !== i && n.op !== i && n.fp !== i; )
        n = n._next;
      return n;
    },
    cg = function (e, i) {
      var n = e._targets,
        r,
        s,
        a;
      for (r in i)
        for (s = n.length; s--; )
          (a = e._ptLookup[s][r]),
            a &&
              (a = a.d) &&
              (a._pt && (a = lg(a, r)),
              a && a.modifier && a.modifier(i[r], e, n[s], r));
    },
    _o = function (e, i) {
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
            cg(o, s);
          };
        },
      };
    },
    Tt =
      Is.registerPlugin(
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
        _o("roundProps", oo),
        _o("modifiers"),
        _o("snap", Dc)
      ) || Is;
  (Be.version = ht.version = Tt.version = "3.13.0"), (gc = 1), Wa() && Kn();
  /*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var su,
    qi,
    Jn,
    wo,
    gn,
    au,
    xo,
    ug = function () {
      return typeof window < "u";
    },
    Si = {},
    vn = 180 / Math.PI,
    er = Math.PI / 180,
    tr = Math.atan2,
    ou = 1e8,
    So = /([A-Z])/g,
    dg = /(left|right|width|margin|padding|x)/i,
    fg = /[\s,\(]\S/,
    ui = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    To = function (e, i) {
      return i.set(i.t, i.p, Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u, i);
    },
    hg = function (e, i) {
      return i.set(
        i.t,
        i.p,
        e === 1 ? i.e : Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u,
        i
      );
    },
    pg = function (e, i) {
      return i.set(
        i.t,
        i.p,
        e ? Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u : i.b,
        i
      );
    },
    mg = function (e, i) {
      var n = i.s + i.c * e;
      i.set(i.t, i.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + i.u, i);
    },
    lu = function (e, i) {
      return i.set(i.t, i.p, e ? i.e : i.b, i);
    },
    cu = function (e, i) {
      return i.set(i.t, i.p, e !== 1 ? i.b : i.e, i);
    },
    gg = function (e, i, n) {
      return (e.style[i] = n);
    },
    vg = function (e, i, n) {
      return e.style.setProperty(i, n);
    },
    yg = function (e, i, n) {
      return (e._gsap[i] = n);
    },
    bg = function (e, i, n) {
      return (e._gsap.scaleX = e._gsap.scaleY = n);
    },
    _g = function (e, i, n, r, s) {
      var a = e._gsap;
      (a.scaleX = a.scaleY = n), a.renderTransform(s, a);
    },
    wg = function (e, i, n, r, s) {
      var a = e._gsap;
      (a[i] = n), a.renderTransform(s, a);
    },
    Se = "transform",
    Et = Se + "Origin",
    xg = function t(e, i) {
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
    uu = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    Sg = function () {
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
                : e[s].replace(So, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (a in this.tfm) r[a] = this.tfm[a];
        r.svg &&
          (r.renderTransform(),
          i.setAttribute("data-svg-origin", this.svgo || "")),
          (s = xo()),
          (!s || !s.isStart) &&
            !n[Se] &&
            (uu(n),
            r.zOrigin &&
              n[Et] &&
              ((n[Et] += " " + r.zOrigin + "px"),
              (r.zOrigin = 0),
              r.renderTransform()),
            (r.uncache = 1));
      }
    },
    du = function (e, i) {
      var n = { target: e, props: [], revert: Sg, save: xg };
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
    fu,
    Eo = function (e, i) {
      var n = qi.createElementNS
        ? qi.createElementNS(
            (i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : qi.createElement(e);
      return n && n.style ? n : qi.createElement(e);
    },
    Vt = function t(e, i, n) {
      var r = getComputedStyle(e);
      return (
        r[i] ||
        r.getPropertyValue(i.replace(So, "-$1").toLowerCase()) ||
        r.getPropertyValue(i) ||
        (!n && t(e, ir(i) || i, 1)) ||
        ""
      );
    },
    hu = "O,Moz,ms,Ms,Webkit".split(","),
    ir = function (e, i, n) {
      var r = i || gn,
        s = r.style,
        a = 5;
      if (e in s && !n) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        a-- && !(hu[a] + e in s);

      );
      return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? hu[a] : "") + e;
    },
    Co = function () {
      ug() &&
        window.document &&
        ((su = window),
        (qi = su.document),
        (Jn = qi.documentElement),
        (gn = Eo("div") || { style: {} }),
        Eo("div"),
        (Se = ir(Se)),
        (Et = Se + "Origin"),
        (gn.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (fu = !!ir("perspective")),
        (xo = Tt.core.reverting),
        (wo = 1));
    },
    pu = function (e) {
      var i = e.ownerSVGElement,
        n = Eo(
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
    mu = function (e, i) {
      for (var n = i.length; n--; )
        if (e.hasAttribute(i[n])) return e.getAttribute(i[n]);
    },
    gu = function (e) {
      var i, n;
      try {
        i = e.getBBox();
      } catch {
        (i = pu(e)), (n = 1);
      }
      return (
        (i && (i.width || i.height)) || n || (i = pu(e)),
        i && !i.width && !i.x && !i.y
          ? {
              x: +mu(e, ["x", "cx", "x1"]) || 0,
              y: +mu(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : i
      );
    },
    vu = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && gu(e));
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
                r === "--" ? i : i.replace(So, "-$1").toLowerCase()
              ))
            : n.removeAttribute(i);
      }
    },
    Vi = function (e, i, n, r, s, a) {
      var o = new St(e._pt, i, n, 0, 1, a ? cu : lu);
      return (e._pt = o), (o.b = r), (o.e = s), e._props.push(n), o;
    },
    yu = { deg: 1, rad: 1, turn: 1 },
    Tg = { grid: 1, flex: 1 },
    Yi = function t(e, i, n, r) {
      var s = parseFloat(n) || 0,
        a = (n + "").trim().substr((s + "").length) || "px",
        o = gn.style,
        l = dg.test(i),
        c = e.tagName.toLowerCase() === "svg",
        u = (c ? "client" : "offset") + (l ? "Width" : "Height"),
        d = 100,
        f = r === "px",
        h = r === "%",
        m,
        p,
        g,
        y;
      if (r === a || !s || yu[r] || yu[a]) return s;
      if (
        (a !== "px" && !f && (s = t(e, i, n, "px")),
        (y = e.getCTM && vu(e)),
        (h || a === "%") && (Si[i] || ~i.indexOf("adius")))
      )
        return (
          (m = y ? e.getBBox()[l ? "width" : "height"] : e[u]),
          Pe(h ? (s / m) * d : (s / 100) * m)
        );
      if (
        ((o[l ? "width" : "height"] = d + (f ? a : r)),
        (p =
          (r !== "rem" && ~i.indexOf("adius")) ||
          (r === "em" && e.appendChild && !c)
            ? e
            : e.parentNode),
        y && (p = (e.ownerSVGElement || {}).parentNode),
        (!p || p === qi || !p.appendChild) && (p = qi.body),
        (g = p._gsap),
        g && h && g.width && l && g.time === zt.time && !g.uncache)
      )
        return Pe((s / g.width) * d);
      if (h && (i === "height" || i === "width")) {
        var v = e.style[i];
        (e.style[i] = d + r), (m = e[u]), v ? (e.style[i] = v) : yn(e, i);
      } else
        (h || a === "%") &&
          !Tg[Vt(p, "display")] &&
          (o.position = Vt(e, "position")),
          p === e && (o.position = "static"),
          p.appendChild(gn),
          (m = gn[u]),
          p.removeChild(gn),
          (o.position = "absolute");
      return (
        l && h && ((g = dn(p)), (g.time = zt.time), (g.width = p[u])),
        Pe(f ? (m * s) / d : m && s ? (d / m) * s : 0)
      );
    },
    Ti = function (e, i, n, r) {
      var s;
      return (
        wo || Co(),
        i in ui &&
          i !== "transform" &&
          ((i = ui[i]), ~i.indexOf(",") && (i = i.split(",")[0])),
        Si[i] && i !== "transform"
          ? ((s = Hr(e, r)),
            (s =
              i !== "transformOrigin"
                ? s[i]
                : s.svg
                ? s.origin
                : Ns(Vt(e, Et)) + " " + s.zOrigin + "px"))
          : ((s = e.style[i]),
            (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) &&
              (s =
                (Rs[i] && Rs[i](e, i, n)) ||
                Vt(e, i) ||
                wc(e, i) ||
                (i === "opacity" ? 1 : 0))),
        n && !~(s + "").trim().indexOf(" ") ? Yi(e, i, s, n) + n : s
      );
    },
    Eg = function (e, i, n, r) {
      if (!n || n === "none") {
        var s = ir(i, e, 1),
          a = s && Vt(e, s, 1);
        a && a !== n
          ? ((i = s), (n = a))
          : i === "borderColor" && (n = Vt(e, "borderTopColor"));
      }
      var o = new St(this._pt, e.style, i, 0, 1, tu),
        l = 0,
        c = 0,
        u,
        d,
        f,
        h,
        m,
        p,
        g,
        y,
        v,
        b,
        w,
        x;
      if (
        ((o.b = n),
        (o.e = r),
        (n += ""),
        (r += ""),
        r.substring(0, 6) === "var(--" &&
          (r = Vt(e, r.substring(4, r.indexOf(")")))),
        r === "auto" &&
          ((p = e.style[i]),
          (e.style[i] = r),
          (r = Vt(e, i) || r),
          p ? (e.style[i] = p) : yn(e, i)),
        (u = [n, r]),
        Wc(u),
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
              (w = p.substr((h + "").length)),
              g.charAt(1) === "=" && (g = Xn(h, g) + w),
              (y = parseFloat(g)),
              (b = g.substr((y + "").length)),
              (l = Gn.lastIndex - b.length),
              b ||
                ((b = b || Pt.units[i] || w),
                l === r.length && ((r += b), (o.e += b))),
              w !== b && (h = Yi(e, i, p, b) || 0),
              (o._pt = {
                _next: o._pt,
                p: v || c === 1 ? v : ",",
                s: h,
                c: y - h,
                m: (m && m < 4) || i === "zIndex" ? Math.round : 0,
              }));
        o.c = l < r.length ? r.substring(l, r.length) : "";
      } else o.r = i === "display" && r === "none" ? cu : lu;
      return pc.test(r) && (o.e = 0), (this._pt = o), o;
    },
    bu = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Cg = function (e) {
      var i = e.split(" "),
        n = i[0],
        r = i[1] || "50%";
      return (
        (n === "top" || n === "bottom" || r === "left" || r === "right") &&
          ((e = n), (n = r), (r = e)),
        (i[0] = bu[n] || n),
        (i[1] = bu[r] || r),
        i.join(" ")
      );
    },
    kg = function (e, i) {
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
            Hr(n, 1),
            (a.uncache = 1),
            uu(r)));
      }
    },
    Rs = {
      clearProps: function (e, i, n, r, s) {
        if (s.data !== "isFromStart") {
          var a = (e._pt = new St(e._pt, i, n, 0, 0, kg));
          return (a.u = r), (a.pr = -10), (a.tween = s), e._props.push(n), 1;
        }
      },
    },
    Fr = [1, 0, 0, 1, 0, 0],
    _u = {},
    wu = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    xu = function (e) {
      var i = Vt(e, Se);
      return wu(i) ? Fr : i.substr(7).match(hc).map(Pe);
    },
    ko = function (e, i) {
      var n = e._gsap || dn(e),
        r = e.style,
        s = xu(e),
        a,
        o,
        l,
        c;
      return n.svg && e.getAttribute("transform")
        ? ((l = e.transform.baseVal.consolidate().matrix),
          (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
          s.join(",") === "1,0,0,1,0,0" ? Fr : s)
        : (s === Fr &&
            !e.offsetParent &&
            e !== Jn &&
            !n.svg &&
            ((l = r.display),
            (r.display = "block"),
            (a = e.parentNode),
            (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((c = 1), (o = e.nextElementSibling), Jn.appendChild(e)),
            (s = xu(e)),
            l ? (r.display = l) : yn(e, "display"),
            c &&
              (o
                ? a.insertBefore(e, o)
                : a
                ? a.appendChild(e)
                : Jn.removeChild(e))),
          i && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    Ao = function (e, i, n, r, s, a) {
      var o = e._gsap,
        l = s || ko(e, !0),
        c = o.xOrigin || 0,
        u = o.yOrigin || 0,
        d = o.xOffset || 0,
        f = o.yOffset || 0,
        h = l[0],
        m = l[1],
        p = l[2],
        g = l[3],
        y = l[4],
        v = l[5],
        b = i.split(" "),
        w = parseFloat(b[0]) || 0,
        x = parseFloat(b[1]) || 0,
        E,
        C,
        k,
        $;
      n
        ? l !== Fr &&
          (C = h * g - m * p) &&
          ((k = w * (g / C) + x * (-p / C) + (p * v - g * y) / C),
          ($ = w * (-m / C) + x * (h / C) - (h * v - m * y) / C),
          (w = k),
          (x = $))
        : ((E = gu(e)),
          (w = E.x + (~b[0].indexOf("%") ? (w / 100) * E.width : w)),
          (x =
            E.y + (~(b[1] || b[0]).indexOf("%") ? (x / 100) * E.height : x))),
        r || (r !== !1 && o.smooth)
          ? ((y = w - c),
            (v = x - u),
            (o.xOffset = d + (y * h + v * p) - y),
            (o.yOffset = f + (y * m + v * g) - v))
          : (o.xOffset = o.yOffset = 0),
        (o.xOrigin = w),
        (o.yOrigin = x),
        (o.smooth = !!r),
        (o.origin = i),
        (o.originIsAbsolute = !!n),
        (e.style[Et] = "0px 0px"),
        a &&
          (Vi(a, o, "xOrigin", c, w),
          Vi(a, o, "yOrigin", u, x),
          Vi(a, o, "xOffset", d, o.xOffset),
          Vi(a, o, "yOffset", f, o.yOffset)),
        e.setAttribute("data-svg-origin", w + " " + x);
    },
    Hr = function (e, i) {
      var n = e._gsap || new Uc(e);
      if ("x" in n && !i && !n.uncache) return n;
      var r = e.style,
        s = n.scaleX < 0,
        a = "px",
        o = "deg",
        l = getComputedStyle(e),
        c = Vt(e, Et) || "0",
        u,
        d,
        f,
        h,
        m,
        p,
        g,
        y,
        v,
        b,
        w,
        x,
        E,
        C,
        k,
        $,
        T,
        M,
        _,
        S,
        O,
        L,
        A,
        z,
        D,
        B,
        P,
        q,
        X,
        oe,
        ne,
        Z;
      return (
        (u = d = f = p = g = y = v = b = w = 0),
        (h = m = 1),
        (n.svg = !!(e.getCTM && vu(e))),
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
        (C = ko(e, n.svg)),
        n.svg &&
          (n.uncache
            ? ((D = e.getBBox()),
              (c = n.xOrigin - D.x + "px " + (n.yOrigin - D.y) + "px"),
              (z = ""))
            : (z = !i && e.getAttribute("data-svg-origin")),
          Ao(e, z || c, !!z || n.originIsAbsolute, n.smooth !== !1, C)),
        (x = n.xOrigin || 0),
        (E = n.yOrigin || 0),
        C !== Fr &&
          ((M = C[0]),
          (_ = C[1]),
          (S = C[2]),
          (O = C[3]),
          (u = L = C[4]),
          (d = A = C[5]),
          C.length === 6
            ? ((h = Math.sqrt(M * M + _ * _)),
              (m = Math.sqrt(O * O + S * S)),
              (p = M || _ ? tr(_, M) * vn : 0),
              (v = S || O ? tr(S, O) * vn + p : 0),
              v && (m *= Math.abs(Math.cos(v * er))),
              n.svg && ((u -= x - (x * M + E * S)), (d -= E - (x * _ + E * O))))
            : ((Z = C[6]),
              (oe = C[7]),
              (P = C[8]),
              (q = C[9]),
              (X = C[10]),
              (ne = C[11]),
              (u = C[12]),
              (d = C[13]),
              (f = C[14]),
              (k = tr(Z, X)),
              (g = k * vn),
              k &&
                (($ = Math.cos(-k)),
                (T = Math.sin(-k)),
                (z = L * $ + P * T),
                (D = A * $ + q * T),
                (B = Z * $ + X * T),
                (P = L * -T + P * $),
                (q = A * -T + q * $),
                (X = Z * -T + X * $),
                (ne = oe * -T + ne * $),
                (L = z),
                (A = D),
                (Z = B)),
              (k = tr(-S, X)),
              (y = k * vn),
              k &&
                (($ = Math.cos(-k)),
                (T = Math.sin(-k)),
                (z = M * $ - P * T),
                (D = _ * $ - q * T),
                (B = S * $ - X * T),
                (ne = O * T + ne * $),
                (M = z),
                (_ = D),
                (S = B)),
              (k = tr(_, M)),
              (p = k * vn),
              k &&
                (($ = Math.cos(k)),
                (T = Math.sin(k)),
                (z = M * $ + _ * T),
                (D = L * $ + A * T),
                (_ = _ * $ - M * T),
                (A = A * $ - L * T),
                (M = z),
                (L = D)),
              g &&
                Math.abs(g) + Math.abs(p) > 359.9 &&
                ((g = p = 0), (y = 180 - y)),
              (h = Pe(Math.sqrt(M * M + _ * _ + S * S))),
              (m = Pe(Math.sqrt(A * A + Z * Z))),
              (k = tr(L, A)),
              (v = Math.abs(k) > 2e-4 ? k * vn : 0),
              (w = ne ? 1 / (ne < 0 ? -ne : ne) : 0)),
          n.svg &&
            ((z = e.getAttribute("transform")),
            (n.forceCSS = e.setAttribute("transform", "") || !wu(Vt(e, Se))),
            z && e.setAttribute("transform", z))),
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
        (n.rotationY = Pe(y) + o),
        (n.skewX = v + o),
        (n.skewY = b + o),
        (n.transformPerspective = w + a),
        (n.zOrigin = parseFloat(c.split(" ")[2]) || (!i && n.zOrigin) || 0) &&
          (r[Et] = Ns(c)),
        (n.xOffset = n.yOffset = 0),
        (n.force3D = Pt.force3D),
        (n.renderTransform = n.svg ? Pg : fu ? Su : Ag),
        (n.uncache = 0),
        n
      );
    },
    Ns = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    Po = function (e, i, n) {
      var r = it(i);
      return Pe(parseFloat(i) + parseFloat(Yi(e, "x", n + "px", r))) + r;
    },
    Ag = function (e, i) {
      (i.z = "0px"),
        (i.rotationY = i.rotationX = "0deg"),
        (i.force3D = 0),
        Su(e, i);
    },
    bn = "0deg",
    qr = "0px",
    _n = ") ",
    Su = function (e, i) {
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
        y = n.force3D,
        v = n.target,
        b = n.zOrigin,
        w = "",
        x = (y === "auto" && e && e !== 1) || y === !0;
      if (b && (d !== bn || u !== bn)) {
        var E = parseFloat(u) * er,
          C = Math.sin(E),
          k = Math.cos(E),
          $;
        (E = parseFloat(d) * er),
          ($ = Math.cos(E)),
          (a = Po(v, a, C * $ * -b)),
          (o = Po(v, o, -Math.sin(E) * -b)),
          (l = Po(v, l, k * $ * -b + b));
      }
      g !== qr && (w += "perspective(" + g + _n),
        (r || s) && (w += "translate(" + r + "%, " + s + "%) "),
        (x || a !== qr || o !== qr || l !== qr) &&
          (w +=
            l !== qr || x
              ? "translate3d(" + a + ", " + o + ", " + l + ") "
              : "translate(" + a + ", " + o + _n),
        c !== bn && (w += "rotate(" + c + _n),
        u !== bn && (w += "rotateY(" + u + _n),
        d !== bn && (w += "rotateX(" + d + _n),
        (f !== bn || h !== bn) && (w += "skew(" + f + ", " + h + _n),
        (m !== 1 || p !== 1) && (w += "scale(" + m + ", " + p + _n),
        (v.style[Se] = w || "translate(0, 0)");
    },
    Pg = function (e, i) {
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
        y = n.yOffset,
        v = n.forceCSS,
        b = parseFloat(a),
        w = parseFloat(o),
        x,
        E,
        C,
        k,
        $;
      (l = parseFloat(l)),
        (c = parseFloat(c)),
        (u = parseFloat(u)),
        u && ((u = parseFloat(u)), (c += u), (l += u)),
        l || c
          ? ((l *= er),
            (c *= er),
            (x = Math.cos(l) * d),
            (E = Math.sin(l) * d),
            (C = Math.sin(l - c) * -f),
            (k = Math.cos(l - c) * f),
            c &&
              ((u *= er),
              ($ = Math.tan(c - u)),
              ($ = Math.sqrt(1 + $ * $)),
              (C *= $),
              (k *= $),
              u &&
                (($ = Math.tan(u)),
                ($ = Math.sqrt(1 + $ * $)),
                (x *= $),
                (E *= $))),
            (x = Pe(x)),
            (E = Pe(E)),
            (C = Pe(C)),
            (k = Pe(k)))
          : ((x = d), (k = f), (E = C = 0)),
        ((b && !~(a + "").indexOf("px")) || (w && !~(o + "").indexOf("px"))) &&
          ((b = Yi(h, "x", a, "px")), (w = Yi(h, "y", o, "px"))),
        (m || p || g || y) &&
          ((b = Pe(b + m - (m * x + p * C) + g)),
          (w = Pe(w + p - (m * E + p * k) + y))),
        (r || s) &&
          (($ = h.getBBox()),
          (b = Pe(b + (r / 100) * $.width)),
          (w = Pe(w + (s / 100) * $.height))),
        ($ =
          "matrix(" +
          x +
          "," +
          E +
          "," +
          C +
          "," +
          k +
          "," +
          b +
          "," +
          w +
          ")"),
        h.setAttribute("transform", $),
        v && (h.style[Se] = $);
    },
    Mg = function (e, i, n, r, s) {
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
            ? (c = ((c + a * ou) % a) - ~~(c / a) * a)
            : d === "ccw" && c > 0 && (c = ((c - a * ou) % a) - ~~(c / a) * a)),
        (e._pt = f = new St(e._pt, i, n, r, c, hg)),
        (f.e = u),
        (f.u = "deg"),
        e._props.push(n),
        f
      );
    },
    Tu = function (e, i) {
      for (var n in i) e[n] = i[n];
      return e;
    },
    $g = function (e, i, n) {
      var r = Tu({}, n._gsap),
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
          (o = Hr(n, 1)),
          yn(n, Se),
          n.setAttribute("transform", c))
        : ((c = getComputedStyle(n)[Se]),
          (a[Se] = i),
          (o = Hr(n, 1)),
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
            (e._pt = new St(e._pt, o, l, d, f - d, To)),
            (e._pt.u = m || 0),
            e._props.push(l));
      Tu(o, r);
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
  var Eu = {
    name: "css",
    register: Co,
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
        y,
        v,
        b,
        w,
        x,
        E,
        C,
        k;
      wo || Co(),
        (this.styles = this.styles || du(e)),
        (k = this.styles.props),
        (this.tween = n);
      for (p in i)
        if (
          p !== "autoRound" &&
          ((u = i[p]), !($t[p] && Zc(p, i, n, r, e, s)))
        ) {
          if (
            ((h = typeof u),
            (m = Rs[p]),
            h === "function" && ((u = u.call(n, r, e, s)), (h = typeof u)),
            h === "string" && ~u.indexOf("random(") && (u = zr(u)),
            m)
          )
            m(this, e, p, u, n) && (C = 1);
          else if (p.substr(0, 2) === "--")
            (c = (getComputedStyle(e).getPropertyValue(p) + "").trim()),
              (u += ""),
              (Fi.lastIndex = 0),
              Fi.test(c) || ((g = it(c)), (y = it(u))),
              y ? g !== y && (c = Yi(e, p, c, y) + y) : g && (u += g),
              this.add(o, "setProperty", c, u, r, s, 0, 0, p),
              a.push(p),
              k.push(p, 0, o[p]);
          else if (h !== "undefined") {
            if (
              (l && p in l
                ? ((c =
                    typeof l[p] == "function" ? l[p].call(n, r, e, s) : l[p]),
                  We(c) && ~c.indexOf("random(") && (c = zr(c)),
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
                  k.push("visibility", 0, o.visibility),
                  Vi(
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
              (b = p in Si),
              b)
            ) {
              if (
                (this.styles.save(p),
                h === "string" &&
                  u.substring(0, 6) === "var(--" &&
                  ((u = Vt(e, u.substring(4, u.indexOf(")")))),
                  (d = parseFloat(u))),
                w ||
                  ((x = e._gsap),
                  (x.renderTransform && !i.parseTransform) ||
                    Hr(e, i.parseTransform),
                  (E = i.smoothOrigin !== !1 && x.smooth),
                  (w = this._pt =
                    new St(this._pt, o, Se, 0, 1, x.renderTransform, x, 0, -1)),
                  (w.dep = 1)),
                p === "scale")
              )
                (this._pt = new St(
                  this._pt,
                  x,
                  "scaleY",
                  x.scaleY,
                  (v ? Xn(x.scaleY, v + d) : d) - x.scaleY || 0,
                  To
                )),
                  (this._pt.u = 0),
                  a.push("scaleY", p),
                  (p += "X");
              else if (p === "transformOrigin") {
                k.push(Et, 0, o[Et]),
                  (u = Cg(u)),
                  x.svg
                    ? Ao(e, u, 0, E, 0, this)
                    : ((y = parseFloat(u.split(" ")[2]) || 0),
                      y !== x.zOrigin && Vi(this, x, "zOrigin", x.zOrigin, y),
                      Vi(this, o, p, Ns(c), Ns(u)));
                continue;
              } else if (p === "svgOrigin") {
                Ao(e, u, 1, E, 0, this);
                continue;
              } else if (p in _u) {
                Mg(this, x, p, f, v ? Xn(f, v + u) : u);
                continue;
              } else if (p === "smoothOrigin") {
                Vi(this, x, "smooth", x.smooth, u);
                continue;
              } else if (p === "force3D") {
                x[p] = u;
                continue;
              } else if (p === "transform") {
                $g(this, u, e);
                continue;
              }
            } else p in o || (p = ir(p) || p);
            if (
              b ||
              ((d || d === 0) && (f || f === 0) && !fg.test(u) && p in o)
            )
              (g = (c + "").substr((f + "").length)),
                d || (d = 0),
                (y = it(u) || (p in Pt.units ? Pt.units[p] : g)),
                g !== y && (f = Yi(e, p, c, y)),
                (this._pt = new St(
                  this._pt,
                  b ? x : o,
                  p,
                  f,
                  (v ? Xn(f, v + d) : d) - f,
                  !b && (y === "px" || p === "zIndex") && i.autoRound !== !1
                    ? mg
                    : To
                )),
                (this._pt.u = y || 0),
                g !== y && y !== "%" && ((this._pt.b = c), (this._pt.r = pg));
            else if (p in o) Eg.call(this, e, p, c, v ? v + u : u);
            else if (p in e) this.add(e, p, c || e[p], v ? v + u : u, r, s);
            else if (p !== "parseTransform") {
              Za(p, u);
              continue;
            }
            b ||
              (p in o
                ? k.push(p, 0, o[p])
                : typeof e[p] == "function"
                ? k.push(p, 2, e[p]())
                : k.push(p, 1, c || e[p])),
              a.push(p);
          }
        }
      C && iu(this);
    },
    render: function (e, i) {
      if (i.tween._time || !xo())
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
          ? n && au === n
            ? i === "scale"
              ? bg
              : yg
            : (au = n || {}) && (i === "scale" ? _g : wg)
          : e.style && !Ya(e.style[i])
          ? gg
          : ~i.indexOf("-")
          ? vg
          : go(e, i)
      );
    },
    core: { _removeProperty: yn, _getMatrix: ko },
  };
  (Tt.utils.checkPrefix = ir),
    (Tt.core.getStyleSaver = du),
    (function (t, e, i, n) {
      var r = xt(t + "," + e + "," + i, function (s) {
        Si[s] = 1;
      });
      xt(e, function (s) {
        (Pt.units[s] = "deg"), (_u[s] = 1);
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
    Tt.registerPlugin(Eu);
  var R = Tt.registerPlugin(Eu) || Tt;
  function Og(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  function Lg(t, e, i) {
    return e && Og(t.prototype, e), t;
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
    Dt,
    Wi,
    Gi,
    nr,
    Cu,
    wn,
    Vr,
    ku,
    Ei,
    Zt,
    Au,
    Pu = function () {
      return (
        nt ||
        (typeof window < "u" && (nt = window.gsap) && nt.registerPlugin && nt)
      );
    },
    Mu = 1,
    rr = [],
    re = [],
    di = [],
    Yr = Date.now,
    Mo = function (e, i) {
      return i;
    },
    zg = function () {
      var e = Vr.core,
        i = e.bridge || {},
        n = e._scrollers,
        r = e._proxies;
      n.push.apply(n, re),
        r.push.apply(r, di),
        (re = n),
        (di = r),
        (Mo = function (a, o) {
          return i[a](o);
        });
    },
    Xi = function (e, i) {
      return ~di.indexOf(e) && di[di.indexOf(e) + 1][i];
    },
    Wr = function (e) {
      return !!~ku.indexOf(e);
    },
    pt = function (e, i, n, r, s) {
      return e.addEventListener(i, n, { passive: r !== !1, capture: !!s });
    },
    mt = function (e, i, n, r) {
      return e.removeEventListener(i, n, !!r);
    },
    Fs = "scrollLeft",
    Hs = "scrollTop",
    $o = function () {
      return (Ei && Ei.isPressed) || re.cache++;
    },
    qs = function (e, i) {
      var n = function r(s) {
        if (s || s === 0) {
          Mu && (Dt.history.scrollRestoration = "manual");
          var a = Ei && Ei.isPressed;
          (s = r.v = Math.round(s) || (Ei && Ei.iOS ? 1 : 0)),
            e(s),
            (r.cacheID = re.cache),
            a && Mo("ss", s);
        } else
          (i || re.cache !== r.cacheID || Mo("ref")) &&
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
          ? Dt.scrollTo(t, qe.sc())
          : Dt.pageXOffset || Wi[Fs] || Gi[Fs] || nr[Fs] || 0;
      }),
    },
    qe = {
      s: Hs,
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
          ? Dt.scrollTo(gt.sc(), t)
          : Dt.pageYOffset || Wi[Hs] || Gi[Hs] || nr[Hs] || 0;
      }),
    },
    Ct = function (e, i) {
      return (
        ((i && i._ctx && i._ctx.selector) || nt.utils.toArray)(e)[0] ||
        (typeof e == "string" && nt.config().nullTargetWarn !== !1
          ? void 0
          : null)
      );
    },
    Dg = function (e, i) {
      for (var n = i.length; n--; )
        if (i[n] === e || i[n].contains(e)) return !0;
      return !1;
    },
    ji = function (e, i) {
      var n = i.s,
        r = i.sc;
      Wr(e) && (e = Wi.scrollingElement || Gi);
      var s = re.indexOf(e),
        a = r === qe.sc ? 1 : 2;
      !~s && (s = re.push(e) - 1), re[s + a] || pt(e, "scroll", $o);
      var o = re[s + a],
        l =
          o ||
          (re[s + a] =
            qs(Xi(e, n), !0) ||
            (Wr(e)
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
    Oo = function (e, i, n) {
      var r = e,
        s = e,
        a = Yr(),
        o = a,
        l = i || 50,
        c = Math.max(500, l * 3),
        u = function (m, p) {
          var g = Yr();
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
            y = Yr();
          return (
            (m || m === 0) && m !== r && u(m),
            a === o || y - o > c
              ? 0
              : ((r + (n ? g : -g)) / ((n ? y : a) - p)) * 1e3
          );
        };
      return { update: u, reset: d, getVelocity: f };
    },
    Gr = function (e, i) {
      return (
        i && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    $u = function (e) {
      var i = Math.max.apply(Math, e),
        n = Math.min.apply(Math, e);
      return Math.abs(i) >= Math.abs(n) ? i : n;
    },
    Ou = function () {
      (Vr = nt.core.globals().ScrollTrigger), Vr && Vr.core && zg();
    },
    Lu = function (e) {
      return (
        (nt = e || Pu()),
        !Bs &&
          nt &&
          typeof document < "u" &&
          document.body &&
          ((Dt = window),
          (Wi = document),
          (Gi = Wi.documentElement),
          (nr = Wi.body),
          (ku = [Dt, Wi, Gi, nr]),
          (Au = nt.core.context || function () {}),
          (wn = "onpointerenter" in nr ? "pointer" : "mouse"),
          (Cu = Me.isTouch =
            Dt.matchMedia &&
            Dt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Dt ||
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
            return (Mu = 0);
          }, 500),
          Ou(),
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
        Bs || Lu(nt), Vr || Ou();
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
          y = n.onDragEnd,
          v = n.onDrag,
          b = n.onPress,
          w = n.onRelease,
          x = n.onRight,
          E = n.onLeft,
          C = n.onUp,
          k = n.onDown,
          $ = n.onChangeX,
          T = n.onChangeY,
          M = n.onChange,
          _ = n.onToggleX,
          S = n.onToggleY,
          O = n.onHover,
          L = n.onHoverEnd,
          A = n.onMove,
          z = n.ignoreCheck,
          D = n.isNormalizer,
          B = n.onGestureStart,
          P = n.onGestureEnd,
          q = n.onWheel,
          X = n.onEnable,
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
          l || (l = parseFloat(Dt.getComputedStyle(nr).lineHeight) || 22);
        var $e,
          fe,
          Ee,
          Y,
          te,
          Oe,
          Le,
          I = this,
          ze = 0,
          Jt = 0,
          Xt = n.passive || (!u && n.passive !== !1),
          V = ji(o, gt),
          jt = ji(o, qe),
          nn = V(),
          In = jt(),
          je =
            ~a.indexOf("touch") &&
            !~a.indexOf("pointer") &&
            Zt[0] === "pointerdown",
          rn = Wr(o),
          De = o.ownerDocument || Wi,
          ei = [0, 0, 0],
          Ut = [0, 0, 0],
          $i = 0,
          hs = function () {
            return ($i = Yr());
          },
          He = function (U, ce) {
            return (
              ((I.event = U) && h && Dg(U.target, h)) ||
              (ce && je && U.pointerType !== "touch") ||
              (z && z(U, ce))
            );
          },
          ka = function () {
            I._vx.reset(), I._vy.reset(), fe.pause(), d && d(I);
          },
          Oi = function () {
            var U = (I.deltaX = $u(ei)),
              ce = (I.deltaY = $u(Ut)),
              F = Math.abs(U) >= r,
              K = Math.abs(ce) >= r;
            M && (F || K) && M(I, U, ce, ei, Ut),
              F &&
                (x && I.deltaX > 0 && x(I),
                E && I.deltaX < 0 && E(I),
                $ && $(I),
                _ && I.deltaX < 0 != ze < 0 && _(I),
                (ze = I.deltaX),
                (ei[0] = ei[1] = ei[2] = 0)),
              K &&
                (k && I.deltaY > 0 && k(I),
                C && I.deltaY < 0 && C(I),
                T && T(I),
                S && I.deltaY < 0 != Jt < 0 && S(I),
                (Jt = I.deltaY),
                (Ut[0] = Ut[1] = Ut[2] = 0)),
              (Y || Ee) &&
                (A && A(I),
                Ee && (g && Ee === 1 && g(I), v && v(I), (Ee = 0)),
                (Y = !1)),
              Oe && !(Oe = !1) && Te && Te(I),
              te && (q(I), (te = !1)),
              ($e = 0);
          },
          br = function (U, ce, F) {
            (ei[F] += U),
              (Ut[F] += ce),
              I._vx.update(U),
              I._vy.update(ce),
              c ? $e || ($e = requestAnimationFrame(Oi)) : Oi();
          },
          _r = function (U, ce) {
            he &&
              !Le &&
              ((I.axis = Le = Math.abs(U) > Math.abs(ce) ? "x" : "y"),
              (Oe = !0)),
              Le !== "y" && ((ei[2] += U), I._vx.update(U, !0)),
              Le !== "x" && ((Ut[2] += ce), I._vy.update(ce, !0)),
              c ? $e || ($e = requestAnimationFrame(Oi)) : Oi();
          },
          sn = function (U) {
            if (!He(U, 1)) {
              U = Gr(U, u);
              var ce = U.clientX,
                F = U.clientY,
                K = ce - I.x,
                j = F - I.y,
                J = I.isDragging;
              (I.x = ce),
                (I.y = F),
                (J ||
                  ((K || j) &&
                    (Math.abs(I.startX - ce) >= s ||
                      Math.abs(I.startY - F) >= s))) &&
                  ((Ee = J ? 2 : 1), J || (I.isDragging = !0), _r(K, j));
            }
          },
          Rn = (I.onPress = function (ee) {
            He(ee, 1) ||
              (ee && ee.button) ||
              ((I.axis = Le = null),
              fe.pause(),
              (I.isPressed = !0),
              (ee = Gr(ee)),
              (ze = Jt = 0),
              (I.startX = I.x = ee.clientX),
              (I.startY = I.y = ee.clientY),
              I._vx.reset(),
              I._vy.reset(),
              pt(D ? o : De, Zt[1], sn, Xt, !0),
              (I.deltaX = I.deltaY = 0),
              b && b(I));
          }),
          ae = (I.onRelease = function (ee) {
            if (!He(ee, 1)) {
              mt(D ? o : De, Zt[1], sn, !0);
              var U = !isNaN(I.y - I.startY),
                ce = I.isDragging,
                F =
                  ce &&
                  (Math.abs(I.x - I.startX) > 3 ||
                    Math.abs(I.y - I.startY) > 3),
                K = Gr(ee);
              !F &&
                U &&
                (I._vx.reset(),
                I._vy.reset(),
                u &&
                  de &&
                  nt.delayedCall(0.08, function () {
                    if (Yr() - $i > 300 && !ee.defaultPrevented) {
                      if (ee.target.click) ee.target.click();
                      else if (De.createEvent) {
                        var j = De.createEvent("MouseEvents");
                        j.initMouseEvent(
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
                          ee.target.dispatchEvent(j);
                      }
                    }
                  })),
                (I.isDragging = I.isGesturing = I.isPressed = !1),
                d && ce && !D && fe.restart(!0),
                Ee && Oi(),
                y && ce && y(I),
                w && w(I, F);
            }
          }),
          Nn = function (U) {
            return (
              U.touches &&
              U.touches.length > 1 &&
              (I.isGesturing = !0) &&
              B(U, I.isDragging)
            );
          },
          ti = function () {
            return (I.isGesturing = !1) || P(I);
          },
          ii = function (U) {
            if (!He(U)) {
              var ce = V(),
                F = jt();
              br((ce - nn) * Z, (F - In) * Z, 1),
                (nn = ce),
                (In = F),
                d && fe.restart(!0);
            }
          },
          ni = function (U) {
            if (!He(U)) {
              (U = Gr(U, u)), q && (te = !0);
              var ce =
                (U.deltaMode === 1
                  ? l
                  : U.deltaMode === 2
                  ? Dt.innerHeight
                  : 1) * m;
              br(U.deltaX * ce, U.deltaY * ce, 0), d && !D && fe.restart(!0);
            }
          },
          Bn = function (U) {
            if (!He(U)) {
              var ce = U.clientX,
                F = U.clientY,
                K = ce - I.x,
                j = F - I.y;
              (I.x = ce),
                (I.y = F),
                (Y = !0),
                d && fe.restart(!0),
                (K || j) && _r(K, j);
            }
          },
          wr = function (U) {
            (I.event = U), O(I);
          },
          Li = function (U) {
            (I.event = U), L(I);
          },
          ps = function (U) {
            return He(U) || (Gr(U, u) && ne(I));
          };
        (fe = I._dc = nt.delayedCall(f || 0.25, ka).pause()),
          (I.deltaX = I.deltaY = 0),
          (I._vx = Oo(0, 50, !0)),
          (I._vy = Oo(0, 50, !0)),
          (I.scrollX = V),
          (I.scrollY = jt),
          (I.isDragging = I.isGesturing = I.isPressed = !1),
          Au(this),
          (I.enable = function (ee) {
            return (
              I.isEnabled ||
                (pt(rn ? De : o, "scroll", $o),
                a.indexOf("scroll") >= 0 &&
                  pt(rn ? De : o, "scroll", ii, Xt, Q),
                a.indexOf("wheel") >= 0 && pt(o, "wheel", ni, Xt, Q),
                ((a.indexOf("touch") >= 0 && Cu) ||
                  a.indexOf("pointer") >= 0) &&
                  (pt(o, Zt[0], Rn, Xt, Q),
                  pt(De, Zt[2], ae),
                  pt(De, Zt[3], ae),
                  de && pt(o, "click", hs, !0, !0),
                  ne && pt(o, "click", ps),
                  B && pt(De, "gesturestart", Nn),
                  P && pt(De, "gestureend", ti),
                  O && pt(o, wn + "enter", wr),
                  L && pt(o, wn + "leave", Li),
                  A && pt(o, wn + "move", Bn)),
                (I.isEnabled = !0),
                (I.isDragging = I.isGesturing = I.isPressed = Y = Ee = !1),
                I._vx.reset(),
                I._vy.reset(),
                (nn = V()),
                (In = jt()),
                ee && ee.type && Rn(ee),
                X && X(I)),
              I
            );
          }),
          (I.disable = function () {
            I.isEnabled &&
              (rr.filter(function (ee) {
                return ee !== I && Wr(ee.target);
              }).length || mt(rn ? De : o, "scroll", $o),
              I.isPressed &&
                (I._vx.reset(), I._vy.reset(), mt(D ? o : De, Zt[1], sn, !0)),
              mt(rn ? De : o, "scroll", ii, Q),
              mt(o, "wheel", ni, Q),
              mt(o, Zt[0], Rn, Q),
              mt(De, Zt[2], ae),
              mt(De, Zt[3], ae),
              mt(o, "click", hs, !0),
              mt(o, "click", ps),
              mt(De, "gesturestart", Nn),
              mt(De, "gestureend", ti),
              mt(o, wn + "enter", wr),
              mt(o, wn + "leave", Li),
              mt(o, wn + "move", Bn),
              (I.isEnabled = I.isPressed = I.isDragging = !1),
              oe && oe(I));
          }),
          (I.kill = I.revert =
            function () {
              I.disable();
              var ee = rr.indexOf(I);
              ee >= 0 && rr.splice(ee, 1), Ei === I && (Ei = 0);
            }),
          rr.push(I),
          D && Wr(o) && (Ei = I),
          I.enable(p);
      }),
      Lg(t, [
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
    (Me.register = Lu),
    (Me.getAll = function () {
      return rr.slice();
    }),
    (Me.getById = function (t) {
      return rr.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    Pu() && nt.registerPlugin(Me);
  /*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var H,
    sr,
    se,
    ve,
    It,
    ue,
    Lo,
    Vs,
    Xr,
    jr,
    Ur,
    Ys,
    rt,
    Ws,
    zo,
    vt,
    zu,
    Du,
    ar,
    Iu,
    Do,
    Ru,
    yt,
    Io,
    Nu,
    Bu,
    Ui,
    Ro,
    No,
    or,
    Bo,
    Gs,
    Fo,
    Ho,
    Xs = 1,
    st = Date.now,
    qo = st(),
    Yt = 0,
    Zr = 0,
    Fu = function (e, i, n) {
      var r = Rt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (n["_" + i + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
    },
    Hu = function (e, i) {
      return i && (!Rt(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    Ig = function t() {
      return Zr && requestAnimationFrame(t);
    },
    qu = function () {
      return (Ws = 1);
    },
    Vu = function () {
      return (Ws = 0);
    },
    fi = function (e) {
      return e;
    },
    Qr = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Yu = function () {
      return typeof window < "u";
    },
    Wu = function () {
      return H || (Yu() && (H = window.gsap) && H.registerPlugin && H);
    },
    xn = function (e) {
      return !!~Lo.indexOf(e);
    },
    Gu = function (e) {
      return (
        (e === "Height" ? Bo : se["inner" + e]) ||
        It["client" + e] ||
        ue["client" + e]
      );
    },
    Xu = function (e) {
      return (
        Xi(e, "getBoundingClientRect") ||
        (xn(e)
          ? function () {
              return (aa.width = se.innerWidth), (aa.height = Bo), aa;
            }
          : function () {
              return Ci(e);
            })
      );
    },
    Rg = function (e, i, n) {
      var r = n.d,
        s = n.d2,
        a = n.a;
      return (a = Xi(e, "getBoundingClientRect"))
        ? function () {
            return a()[r];
          }
        : function () {
            return (i ? Gu(s) : e["client" + s]) || 0;
          };
    },
    Ng = function (e, i) {
      return !i || ~di.indexOf(e)
        ? Xu(e)
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
          ? a() - Xu(e)()[s]
          : xn(e)
          ? (It[n] || ue[n]) - Gu(r)
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
    Kr = function (e) {
      return typeof e == "number";
    },
    Sn = function (e) {
      return typeof e == "object";
    },
    Jr = function (e, i, n) {
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
    ju = "left",
    Uu = "top",
    Yo = "right",
    Wo = "bottom",
    Tn = "width",
    En = "height",
    es = "Right",
    ts = "Left",
    is = "Top",
    ns = "Bottom",
    Fe = "padding",
    Wt = "margin",
    cr = "Width",
    Go = "Height",
    Ve = "px",
    Gt = function (e) {
      return se.getComputedStyle(e);
    },
    Bg = function (e) {
      var i = Gt(e).position;
      e.style.position = i === "absolute" || i === "fixed" ? i : "relative";
    },
    Zu = function (e, i) {
      for (var n in i) n in e || (e[n] = i[n]);
      return e;
    },
    Ci = function (e, i) {
      var n =
          i &&
          Gt(e)[zo] !== "matrix(1, 0, 0, 1, 0, 0)" &&
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
      return n && n.progress(0).kill(), r;
    },
    Us = function (e, i) {
      var n = i.d2;
      return e["offset" + n] || e["client" + n] || 0;
    },
    Qu = function (e) {
      var i = [],
        n = e.labels,
        r = e.duration(),
        s;
      for (s in n) i.push(n[s] / r);
      return i;
    },
    Fg = function (e) {
      return function (i) {
        return H.utils.snap(Qu(e), i);
      };
    },
    Xo = function (e) {
      var i = H.utils.snap(e),
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
    Hg = function (e) {
      return function (i, n) {
        return Xo(Qu(e))(i, n.direction);
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
    Ku = {
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
        y = p ? ue : n,
        v = e.indexOf("start") !== -1,
        b = v ? c : u,
        w =
          "border-color:" +
          b +
          ";font-size:" +
          d +
          ";color:" +
          b +
          ";font-weight:" +
          h +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (w += "position:" + ((g || l) && p ? "fixed;" : "absolute;")),
        (g || l || !p) &&
          (w += (r === qe ? Yo : Wo) + ":" + (a + parseFloat(f)) + "px;"),
        o &&
          (w +=
            "box-sizing:border-box;text-align:left;width:" +
            o.offsetWidth +
            "px;"),
        (m._isStart = v),
        m.setAttribute("class", "gsap-marker-" + e + (i ? " marker-" + i : "")),
        (m.style.cssText = w),
        (m.innerText = i || i === 0 ? e + "-" + i : e),
        y.children[0] ? y.insertBefore(m, y.children[0]) : y.appendChild(m),
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
        H.set(e, s);
    },
    ie = [],
    jo = {},
    rs,
    Ju = function () {
      return st() - Yt > 34 && (rs || (rs = requestAnimationFrame(ki)));
    },
    ur = function () {
      (!yt || !yt.isPressed || yt.startX > ue.clientWidth) &&
        (re.cache++,
        yt ? rs || (rs = requestAnimationFrame(ki)) : ki(),
        Yt || kn("scrollStart"),
        (Yt = st()));
    },
    Uo = function () {
      (Bu = se.innerWidth), (Nu = se.innerHeight);
    },
    ss = function (e) {
      re.cache++,
        (e === !0 ||
          (!rt &&
            !Ru &&
            !ve.fullscreenElement &&
            !ve.webkitFullscreenElement &&
            (!Io ||
              Bu !== se.innerWidth ||
              Math.abs(se.innerHeight - Nu) > se.innerHeight * 0.25))) &&
          Vs.restart(!0);
    },
    Cn = {},
    qg = [],
    ed = function t() {
      return Xe(G, "scrollEnd", t) || Pn(!0);
    },
    kn = function (e) {
      return (
        (Cn[e] &&
          Cn[e].map(function (i) {
            return i();
          })) ||
        qg
      );
    },
    Nt = [],
    td = function (e) {
      for (var i = 0; i < Nt.length; i += 5)
        (!e || (Nt[i + 4] && Nt[i + 4].query === e)) &&
          ((Nt[i].style.cssText = Nt[i + 1]),
          Nt[i].getBBox && Nt[i].setAttribute("transform", Nt[i + 2] || ""),
          (Nt[i + 3].uncache = 1));
    },
    Zo = function (e, i) {
      var n;
      for (vt = 0; vt < ie.length; vt++)
        (n = ie[vt]),
          n && (!i || n._ctx === i) && (e ? n.kill(1) : n.revert(!0, !0));
      (Gs = !0), i && td(i), i || kn("revert");
    },
    id = function (e, i) {
      re.cache++,
        (i || !bt) &&
          re.forEach(function (n) {
            return at(n) && n.cacheID++ && (n.rec = 0);
          }),
        Rt(e) && (se.history.scrollRestoration = No = e);
    },
    bt,
    An = 0,
    nd,
    Vg = function () {
      if (nd !== An) {
        var e = (nd = An);
        requestAnimationFrame(function () {
          return e === An && Pn(!0);
        });
      }
    },
    rd = function () {
      ue.appendChild(or),
        (Bo = (!yt && or.offsetHeight) || se.innerHeight),
        ue.removeChild(or);
    },
    sd = function (e) {
      return Xr(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (i) {
        return (i.style.display = e ? "none" : "block");
      });
    },
    Pn = function (e, i) {
      if (
        ((It = ve.documentElement),
        (ue = ve.body),
        (Lo = [se, ve, It, ue]),
        Yt && !e && !Gs)
      ) {
        Ge(G, "scrollEnd", ed);
        return;
      }
      rd(),
        (bt = G.isRefreshing = !0),
        re.forEach(function (r) {
          return at(r) && ++r.cacheID && (r.rec = r());
        });
      var n = kn("refreshInit");
      Iu && G.sort(),
        i || Zo(),
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
        (Fo = 1),
        sd(!0),
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
        sd(!1),
        (Fo = 0),
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
        id(No, 1),
        Vs.pause(),
        An++,
        (bt = 2),
        ki(2),
        ie.forEach(function (r) {
          return at(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (bt = G.isRefreshing = !1),
        kn("refresh");
    },
    Qo = 0,
    na = 1,
    as,
    ki = function (e) {
      if (e === 2 || (!bt && !Gs)) {
        (G.isUpdating = !0), as && as.update(0);
        var i = ie.length,
          n = st(),
          r = n - qo >= 50,
          s = i && ie[0].scroll();
        if (
          ((na = Qo > s ? -1 : 1),
          bt || (Qo = s),
          r &&
            (Yt && !Ws && n - Yt > 200 && ((Yt = 0), kn("scrollEnd")),
            (Ur = qo),
            (qo = n)),
          na < 0)
        ) {
          for (vt = i; vt-- > 0; ) ie[vt] && ie[vt].update(0, r);
          na = 1;
        } else for (vt = 0; vt < i; vt++) ie[vt] && ie[vt].update(0, r);
        G.isUpdating = !1;
      }
      rs = 0;
    },
    Ko = [
      ju,
      Uu,
      Wo,
      Yo,
      Wt + ns,
      Wt + es,
      Wt + is,
      Wt + ts,
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
    ra = Ko.concat([
      Tn,
      En,
      "boxSizing",
      "max" + cr,
      "max" + Go,
      "position",
      Wt,
      Fe,
      Fe + is,
      Fe + es,
      Fe + ns,
      Fe + ts,
    ]),
    Yg = function (e, i, n) {
      dr(n);
      var r = e._gsap;
      if (r.spacerIsNative) dr(r.spacerState);
      else if (e._gsap.swappedIn) {
        var s = i.parentNode;
        s && (s.insertBefore(e, i), s.removeChild(i));
      }
      e._gsap.swappedIn = !1;
    },
    Jo = function (e, i, n, r) {
      if (!e._gsap.swappedIn) {
        for (var s = Ko.length, a = i.style, o = e.style, l; s--; )
          (l = Ko[s]), (a[l] = n[l]);
        (a.position = n.position === "absolute" ? "absolute" : "relative"),
          n.display === "inline" && (a.display = "inline-block"),
          (o[Wo] = o[Yo] = "auto"),
          (a.flexBasis = n.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[Tn] = Us(e, gt) + Ve),
          (a[En] = Us(e, qe) + Ve),
          (a[Fe] = o[Wt] = o[Uu] = o[ju] = "0"),
          dr(r),
          (o[Tn] = o["max" + cr] = n[Tn]),
          (o[En] = o["max" + Go] = n[En]),
          (o[Fe] = n[Fe]),
          e.parentNode !== i &&
            (e.parentNode.insertBefore(i, e), i.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    Wg = /([A-Z])/g,
    dr = function (e) {
      if (e) {
        var i = e.t.style,
          n = e.length,
          r = 0,
          s,
          a;
        for ((e.t._gsap || H.core.getCache(e.t)).uncache = 1; r < n; r += 2)
          (a = e[r + 1]),
            (s = e[r]),
            a
              ? (i[s] = a)
              : i[s] && i.removeProperty(s.replace(Wg, "-$1").toLowerCase());
      }
    },
    sa = function (e) {
      for (var i = ra.length, n = e.style, r = [], s = 0; s < i; s++)
        r.push(ra[s], n[ra[s]]);
      return (r.t = e), r;
    },
    Gg = function (e, i, n) {
      for (var r = [], s = e.length, a = n ? 8 : 0, o; a < s; a += 2)
        (o = e[a]), r.push(o, o in i ? i[o] : e[a + 1]);
      return (r.t = e.t), r;
    },
    aa = { left: 0, top: 0 },
    ad = function (e, i, n, r, s, a, o, l, c, u, d, f, h, m) {
      at(e) && (e = e(l)),
        Rt(e) &&
          e.substr(0, 3) === "max" &&
          (e = f + (e.charAt(4) === "=" ? ea("0" + e.substr(3), n) : 0));
      var p = h ? h.time() : 0,
        g,
        y,
        v;
      if ((h && h.seek(0), isNaN(e) || (e = +e), Kr(e)))
        h &&
          (e = H.utils.mapRange(
            h.scrollTrigger.start,
            h.scrollTrigger.end,
            0,
            f,
            e
          )),
          o && ia(o, n, r, !0);
      else {
        at(i) && (i = i(l));
        var b = (e || "0").split(" "),
          w,
          x,
          E,
          C;
        (v = Ct(i, l) || ue),
          (w = Ci(v) || {}),
          (!w || (!w.left && !w.top)) &&
            Gt(v).display === "none" &&
            ((C = v.style.display),
            (v.style.display = "block"),
            (w = Ci(v)),
            C ? (v.style.display = C) : v.style.removeProperty("display")),
          (x = ea(b[0], w[r.d])),
          (E = ea(b[1] || "0", n)),
          (e = w[r.p] - c[r.p] - u + x + s - E),
          o && ia(o, E, r, n - E < 20 || (o._isStart && E > 20)),
          (n -= n - E);
      }
      if ((m && ((l[m] = e || -0.001), e < 0 && (e = 0)), a)) {
        var k = e + n,
          $ = a._isStart;
        (g = "scroll" + r.d2),
          ia(
            a,
            k,
            r,
            ($ && k > 20) ||
              (!$ && (d ? Math.max(ue[g], It[g]) : a.parentNode[g]) <= k + 1)
          ),
          d &&
            ((c = Ci(o)),
            d && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + Ve));
      }
      return (
        h &&
          v &&
          ((g = Ci(v)),
          h.seek(f),
          (y = Ci(v)),
          (h._caScrollDist = g[r.p] - y[r.p]),
          (e = (e / h._caScrollDist) * f)),
        h && h.seek(p),
        h ? e : Math.round(e)
      );
    },
    Xg = /(webkit|moz|length|cssText|inset)/i,
    od = function (e, i, n, r) {
      if (e.parentNode !== i) {
        var s = e.style,
          a,
          o;
        if (i === ue) {
          (e._stOrig = s.cssText), (o = Gt(e));
          for (a in o)
            !+a &&
              !Xg.test(a) &&
              o[a] &&
              typeof s[a] == "string" &&
              a !== "0" &&
              (s[a] = o[a]);
          (s.top = n), (s.left = r);
        } else s.cssText = e._stOrig;
        (H.core.getCache(e).uncache = 1), i.appendChild(e);
      }
    },
    ld = function (e, i, n) {
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
      (r[i.p] = "+=" + n), H.set(e, r);
    },
    cd = function (e, i) {
      var n = ji(e, i),
        r = "_scroll" + i.p2,
        s = function a(o, l, c, u, d) {
          var f = a.tween,
            h = l.onComplete,
            m = {};
          c = c || n();
          var p = ld(n, c, function () {
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
            (f = a.tween = H.to(e, l)),
            f
          );
        };
      return (
        (e[r] = n),
        (n.wheelHandler = function () {
          return s.tween && s.tween.kill() && (s.tween = 0);
        }),
        Ge(e, "wheel", n.wheelHandler),
        G.isTouch && Ge(e, "touchmove", n.wheelHandler),
        s
      );
    },
    G = (function () {
      function t(i, n) {
        sr || t.register(H), Ro(this), this.init(i, n);
      }
      var e = t.prototype;
      return (
        (e.init = function (n, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !Zr)
          ) {
            this.update = this.refresh = this.kill = fi;
            return;
          }
          n = Zu(Rt(n) || Kr(n) || n.nodeType ? { trigger: n } : n, Ks);
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
            y = s.onScrubComplete,
            v = s.onSnapComplete,
            b = s.once,
            w = s.snap,
            x = s.pinReparent,
            E = s.pinSpacer,
            C = s.containerAnimation,
            k = s.fastScrollEnd,
            $ = s.preventOverlaps,
            T =
              n.horizontal || (n.containerAnimation && n.horizontal !== !1)
                ? gt
                : qe,
            M = !d && d !== 0,
            _ = Ct(n.scroller || se),
            S = H.core.getCache(_),
            O = xn(_),
            L =
              ("pinType" in n
                ? n.pinType
                : Xi(_, "pinType") || (O && "fixed")) === "fixed",
            A = [n.onEnter, n.onLeave, n.onEnterBack, n.onLeaveBack],
            z = M && n.toggleActions.split(" "),
            D = "markers" in n ? n.markers : Ks.markers,
            B = O ? 0 : parseFloat(Gt(_)["border" + T.p2 + cr]) || 0,
            P = this,
            q =
              n.onRefreshInit &&
              function () {
                return n.onRefreshInit(P);
              },
            X = Rg(_, O, T),
            oe = Ng(_, O),
            ne = 0,
            Z = 0,
            Q = 0,
            de = ji(_, T),
            he,
            Te,
            $e,
            fe,
            Ee,
            Y,
            te,
            Oe,
            Le,
            I,
            ze,
            Jt,
            Xt,
            V,
            jt,
            nn,
            In,
            je,
            rn,
            De,
            ei,
            Ut,
            $i,
            hs,
            He,
            ka,
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
            Li;
          if (
            ((P._startClamp = P._endClamp = !1),
            (P._dir = T),
            (g *= 45),
            (P.scroller = _),
            (P.scroll = C ? C.time.bind(C) : de),
            (fe = de()),
            (P.vars = n),
            (r = r || n.animation),
            "refreshPriority" in n &&
              ((Iu = 1), n.refreshPriority === -9999 && (as = P)),
            (S.tweenScroll = S.tweenScroll || {
              top: cd(_, qe),
              left: cd(_, gt),
            }),
            (P.tweenTo = he = S.tweenScroll[T.p]),
            (P.scrubDuration = function (F) {
              (Nn = Kr(F) && F),
                Nn
                  ? ae
                    ? ae.duration(F)
                    : (ae = H.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: Nn,
                        paused: !0,
                        onComplete: function () {
                          return y && y(P);
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
            w &&
              ((!Sn(w) || w.push) && (w = { snapTo: w }),
              "scrollBehavior" in ue.style &&
                H.set(O ? [ue, It] : _, { scrollBehavior: "auto" }),
              re.forEach(function (F) {
                return (
                  at(F) &&
                  F.target === (O ? ve.scrollingElement || It : _) &&
                  (F.smooth = !1)
                );
              }),
              ($e = at(w.snapTo)
                ? w.snapTo
                : w.snapTo === "labels"
                ? Fg(r)
                : w.snapTo === "labelsDirectional"
                ? Hg(r)
                : w.directional !== !1
                ? function (F, K) {
                    return Xo(w.snapTo)(F, st() - Z < 500 ? 0 : K.direction);
                  }
                : H.utils.snap(w.snapTo)),
              (ti = w.duration || { min: 0.1, max: 2 }),
              (ti = Sn(ti) ? jr(ti.min, ti.max) : jr(ti, ti)),
              (ii = H.delayedCall(w.delay || Nn / 2 || 0.1, function () {
                var F = de(),
                  K = st() - Z < 500,
                  j = he.tween;
                if (
                  (K || Math.abs(P.getVelocity()) < 10) &&
                  !j &&
                  !Ws &&
                  ne !== F
                ) {
                  var J = (F - Y) / V,
                    Ue = r && !M ? r.totalProgress() : J,
                    le = K ? 0 : ((Ue - Rn) / (st() - Ur)) * 1e3 || 0,
                    Ie = H.utils.clamp(-J, 1 - J, (lr(le / 2) * le) / 0.185),
                    lt = J + (w.inertia === !1 ? 0 : Ie),
                    Ae,
                    we,
                    ge = w,
                    ri = ge.onStart,
                    Ce = ge.onInterrupt,
                    Bt = ge.onComplete;
                  if (
                    ((Ae = $e(lt, P)),
                    Kr(Ae) || (Ae = lt),
                    (we = Math.max(0, Math.round(Y + Ae * V))),
                    F <= te && F >= Y && we !== F)
                  ) {
                    if (j && !j._initted && j.data <= lr(we - F)) return;
                    w.inertia === !1 && (Ie = Ae - J),
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
                          ease: w.ease || "power3",
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
                        Ie * V,
                        we - F - Ie * V
                      ),
                      ri && ri(P, he.tween);
                  }
                } else P.isActive && ne !== F && ii.restart(!0);
              }).pause())),
            l && (jo[l] = P),
            (f = P.trigger = Ct(f || (h !== !0 && h))),
            (Li = f && f._gsap && f._gsap.stRevert),
            Li && (Li = Li(P)),
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
              (Te = H.core.getCache(h)),
              Te.spacer
                ? (jt = Te.pinState)
                : (E &&
                    ((E = Ct(E)),
                    E && !E.nodeType && (E = E.current || E.nativeElement),
                    (Te.spacerIsNative = !!E),
                    E && (Te.spacerState = sa(E))),
                  (Te.spacer = je = E || ve.createElement("div")),
                  je.classList.add("pin-spacer"),
                  l && je.classList.add("pin-spacer-" + l),
                  (Te.pinState = jt = sa(h))),
              n.force3D !== !1 && H.set(h, { force3D: !0 }),
              (P.spacer = je = Te.spacer),
              (_r = Gt(h)),
              (hs = _r[m + T.os2]),
              (De = H.getProperty(h)),
              (ei = H.quickSetter(h, T.a, Ve)),
              Jo(h, je, _r),
              (In = sa(h))),
            D)
          ) {
            (Jt = Sn(D) ? Zu(D, Ku) : Ku),
              (I = ta("scroller-start", l, _, T, Jt, 0)),
              (ze = ta("scroller-end", l, _, T, Jt, 0, I)),
              (rn = I["offset" + T.op.d2]);
            var ps = Ct(Xi(_, "content") || _);
            (Oe = this.markerStart = ta("start", l, ps, T, Jt, rn, 0, C)),
              (Le = this.markerEnd = ta("end", l, ps, T, Jt, rn, 0, C)),
              C && (wr = H.quickSetter([Oe, Le], T.a, Ve)),
              !L &&
                !(di.length && Xi(_, "fixedMarkers") === !0) &&
                (Bg(O ? ue : _),
                H.set([I, ze], { force3D: !0 }),
                (ka = H.quickSetter(I, T.a, Ve)),
                (br = H.quickSetter(ze, T.a, Ve)));
          }
          if (C) {
            var ee = C.vars.onUpdate,
              U = C.vars.onUpdateParams;
            C.eventCallback("onUpdate", function () {
              P.update(0, 0, 1), ee && ee.apply(C, U || []);
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
                  [Oe, Le, I, ze].forEach(function (Ue) {
                    return (Ue.style.display = j ? "none" : "block");
                  }),
                j && ((rt = P), P.update(j)),
                h &&
                  (!x || !P.isActive) &&
                  (j ? Yg(h, je, jt) : Jo(h, je, Gt(h), He)),
                j || P.update(j),
                (rt = J),
                (P.isReverted = j));
            }),
            (P.refresh = function (F, K, j, J) {
              if (!((rt || !P.enabled) && !K)) {
                if (h && F && Yt) {
                  Ge(t, "scrollEnd", ed);
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
                var Ue = X(),
                  le = oe(),
                  Ie = C ? C.duration() : hi(_, T),
                  lt = V <= 0.01 || !V,
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
                  Aa,
                  ut,
                  Ye,
                  vi,
                  Nl,
                  pf,
                  ms,
                  yi,
                  gs,
                  Pa;
                for (
                  D &&
                  Sn(j) &&
                  ((gs = H.getProperty(I, T.p)), (Pa = H.getProperty(ze, T.p)));
                  Ke-- > 0;

                )
                  (Ye = ie[Ke]),
                    Ye.end || Ye.refresh(0, 1) || (rt = P),
                    (vi = Ye.pin),
                    vi &&
                      (vi === f || vi === h || vi === Bt) &&
                      !Ye.isReverted &&
                      (ms || (ms = []), ms.unshift(Ye), Ye.revert(!0, !0)),
                    Ye !== ie[Ke] && (gi--, Ke--);
                for (
                  at(Ce) && (Ce = Ce(P)),
                    Ce = Fu(Ce, "start", P),
                    Y =
                      ad(
                        Ce,
                        f,
                        Ue,
                        T,
                        de(),
                        Oe,
                        I,
                        P,
                        le,
                        B,
                        L,
                        Ie,
                        C,
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
                            : (C
                                ? H.utils.mapRange(
                                    0,
                                    C.duration(),
                                    C.scrollTrigger.start,
                                    C.scrollTrigger.end,
                                    Y
                                  )
                                : Y) + Ae),
                          (ri = f))),
                    ge = Fu(ge, "end", P),
                    te =
                      Math.max(
                        Y,
                        ad(
                          ge || (ri ? "100% 0" : Ie),
                          ri,
                          Ue,
                          T,
                          de() + Ae,
                          Le,
                          ze,
                          P,
                          le,
                          B,
                          L,
                          Ie,
                          C,
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
                      !C &&
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
                    (te = Math.min(te, hi(_, T)))),
                  (V = te - Y || ((Y -= 0.01) && 0.001)),
                  lt && (Q = H.utils.clamp(0, 1, H.utils.normalize(Y, te, ni))),
                  (P._pinPush = we),
                  Oe &&
                    Ae &&
                    ((Je = {}),
                    (Je[T.a] = "+=" + Ae),
                    Bt && (Je[T.p] = "-=" + de()),
                    H.set([Oe, Le], Je)),
                  h && !(Fo && P.end >= hi(_, T)))
                )
                  (Je = Gt(h)),
                    (Aa = T === qe),
                    (Fn = de()),
                    (Ut = parseFloat(De(T.a)) + we),
                    !Ie &&
                      te > 1 &&
                      ((yi = (O ? ve.scrollingElement || It : _).style),
                      (yi = {
                        style: yi,
                        value: yi["overflow" + T.a.toUpperCase()],
                      }),
                      O &&
                        Gt(ue)["overflow" + T.a.toUpperCase()] !== "scroll" &&
                        (yi.style["overflow" + T.a.toUpperCase()] = "scroll")),
                    Jo(h, je, Je),
                    (In = sa(h)),
                    (ct = Ci(h, !0)),
                    (Nl = L && ji(_, Aa ? gt : qe)()),
                    m
                      ? ((He = [m + T.os2, V + we + Ve]),
                        (He.t = je),
                        (Ke = m === Fe ? Us(h, T) + V + we : 0),
                        Ke &&
                          (He.push(T.d, Ke + Ve),
                          je.style.flexBasis !== "auto" &&
                            (je.style.flexBasis = Ke + Ve)),
                        dr(He),
                        Bt &&
                          ie.forEach(function (an) {
                            an.pin === Bt &&
                              an.vars.pinSpacing !== !1 &&
                              (an._subPinOffset = !0);
                          }),
                        L && de(ni))
                      : ((Ke = Us(h, T)),
                        Ke &&
                          je.style.flexBasis !== "auto" &&
                          (je.style.flexBasis = Ke + Ve)),
                    L &&
                      ((ut = {
                        top: ct.top + (Aa ? Fn - Y : Nl) + Ve,
                        left: ct.left + (Aa ? Nl : Fn - Y) + Ve,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (ut[Tn] = ut["max" + cr] = Math.ceil(ct.width) + Ve),
                      (ut[En] = ut["max" + Go] = Math.ceil(ct.height) + Ve),
                      (ut[Wt] =
                        ut[Wt + is] =
                        ut[Wt + es] =
                        ut[Wt + ns] =
                        ut[Wt + ts] =
                          "0"),
                      (ut[Fe] = Je[Fe]),
                      (ut[Fe + is] = Je[Fe + is]),
                      (ut[Fe + es] = Je[Fe + es]),
                      (ut[Fe + ns] = Je[Fe + ns]),
                      (ut[Fe + ts] = Je[Fe + ts]),
                      (nn = Gg(jt, ut, x)),
                      bt && de(0)),
                    r
                      ? ((pf = r._initted),
                        Do(1),
                        r.render(r.duration(), !0, !0),
                        ($i = De(T.a) - Ut + V + we),
                        (Oi = Math.abs(V - $i) > 1),
                        L && Oi && nn.splice(nn.length - 2, 2),
                        r.render(0, !0, !0),
                        pf || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        Do(0))
                      : ($i = V),
                    yi &&
                      (yi.value
                        ? (yi.style["overflow" + T.a.toUpperCase()] = yi.value)
                        : yi.style.removeProperty("overflow-" + T.a));
                else if (f && de() && !C)
                  for (ct = f.parentNode; ct && ct !== ue; )
                    ct._pinOffset &&
                      ((Y -= ct._pinOffset), (te -= ct._pinOffset)),
                      (ct = ct.parentNode);
                ms &&
                  ms.forEach(function (an) {
                    return an.revert(!1, !0);
                  }),
                  (P.start = Y),
                  (P.end = te),
                  (fe = Ee = bt ? ni : de()),
                  !C && !bt && (fe < ni && de(ni), (P.scroll.rec = 0)),
                  P.revert(!1, !0),
                  (Z = st()),
                  ii && ((ne = -1), ii.restart(!0)),
                  (rt = 0),
                  r &&
                    M &&
                    (r._initted || Bn) &&
                    r.progress() !== Bn &&
                    r.progress(Bn || 0, !0).render(r.time(), !0, !0),
                  (lt || Q !== P.progress || C || p || (r && !r._initted)) &&
                    (r &&
                      !M &&
                      (r._initted || Q || r.vars.immediateRender !== !1) &&
                      r.totalProgress(
                        C && Y < -0.001 && !Q ? H.utils.normalize(Y, te, 0) : Q,
                        !0
                      ),
                    (P.progress = lt || (fe - Y) / V === Q ? 0 : Q)),
                  h && m && (je._pinOffset = Math.round(P.progress * $i)),
                  ae && ae.invalidate(),
                  isNaN(gs) ||
                    ((gs -= H.getProperty(I, T.p)),
                    (Pa -= H.getProperty(ze, T.p)),
                    oa(I, T, gs),
                    oa(Oe, T, gs - (J || 0)),
                    oa(ze, T, Pa),
                    oa(Le, T, Pa - (J || 0))),
                  lt && !bt && P.update(),
                  u && !bt && !Xt && ((Xt = !0), u(P), (Xt = !1));
              }
            }),
            (P.getVelocity = function () {
              return ((de() - Ee) / (st() - Ur)) * 1e3 || 0;
            }),
            (P.endAnimation = function () {
              Jr(P.callbackAnimation),
                r &&
                  (ae
                    ? ae.progress(1)
                    : r.paused()
                    ? M || Jr(r, P.direction < 0, 1)
                    : Jr(r, r.reversed()));
            }),
            (P.labelToScroll = function (F) {
              return (
                (r &&
                  r.labels &&
                  (Y || P.refresh() || Y) + (r.labels[F] / r.duration()) * V) ||
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
              if (!(C && !j && !F)) {
                var J = bt === !0 ? ni : P.scroll(),
                  Ue = F ? 0 : (J - Y) / V,
                  le = Ue < 0 ? 0 : Ue > 1 ? 1 : Ue || 0,
                  Ie = P.progress,
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
                    (fe = C ? de() : J),
                    w && ((Rn = sn), (sn = r && !M ? r.totalProgress() : le))),
                  g &&
                    h &&
                    !rt &&
                    !Xs &&
                    Yt &&
                    (!le && Y < J + ((J - Ee) / (st() - Ur)) * g
                      ? (le = 1e-4)
                      : le === 1 &&
                        te > J + ((J - Ee) / (st() - Ur)) * g &&
                        (le = 0.9999)),
                  le !== Ie && P.enabled)
                ) {
                  if (
                    ((lt = P.isActive = !!le && le < 1),
                    (Ae = !!Ie && Ie < 1),
                    (Ce = lt !== Ae),
                    (ri = Ce || !!le != !!Ie),
                    (P.direction = le > Ie ? 1 : -1),
                    (P.progress = le),
                    ri &&
                      !rt &&
                      ((we = le && !Ie ? 0 : le === 1 ? 1 : Ie === 1 ? 2 : 3),
                      M &&
                        ((ge =
                          (!Ce && z[we + 1] !== "none" && z[we + 1]) || z[we]),
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
                    if ((F && m && (je.style[m + T.os2] = hs), !L))
                      ei(Qr(Ut + $i * le));
                    else if (ri) {
                      if (
                        ((Bt =
                          !F && le > Ie && te + 1 > J && J + 1 >= hi(_, T)),
                        x)
                      )
                        if (!F && (lt || Bt)) {
                          var Ke = Ci(h, !0),
                            Je = J - Y;
                          od(
                            h,
                            ue,
                            Ke.top + (T === qe ? Je : 0) + Ve,
                            Ke.left + (T === qe ? 0 : Je) + Ve
                          );
                        } else od(h, je);
                      dr(lt || Bt ? nn : In),
                        (Oi && le < 1 && lt) ||
                          ei(Ut + (le === 1 && !Bt ? $i : 0));
                    }
                  }
                  w && !he.tween && !rt && !Xs && ii.restart(!0),
                    o &&
                      (Ce || (b && le && (le < 1 || !Ho))) &&
                      Xr(o.targets).forEach(function (Fn) {
                        return Fn.classList[lt || b ? "add" : "remove"](
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
                        (Ce || !Ho) &&
                          (c && Ce && Vo(P, c),
                          A[we] && Vo(P, A[we]),
                          b && (le === 1 ? P.kill(!1, 1) : (A[we] = 0)),
                          Ce ||
                            ((we = le === 1 ? 1 : 3), A[we] && Vo(P, A[we]))),
                        k &&
                          !lt &&
                          Math.abs(P.getVelocity()) > (Kr(k) ? k : 2500) &&
                          (Jr(P.callbackAnimation),
                          ae
                            ? ae.progress(1)
                            : Jr(r, ge === "reverse" ? 1 : !le, 1)))
                      : M && a && !rt && a(P);
                }
                if (br) {
                  var ct = C ? (J / C.duration()) * (C._caScrollDist || 0) : J;
                  ka(ct + (I._isFlipped ? 1 : 0)), br(ct);
                }
                wr && wr((-J / C.duration()) * (C._caScrollDist || 0));
              }
            }),
            (P.enable = function (F, K) {
              P.enabled ||
                ((P.enabled = !0),
                Ge(_, "resize", ss),
                O || Ge(_, "scroll", ur),
                q && Ge(t, "refreshInit", q),
                F !== !1 && ((P.progress = Q = 0), (fe = Ee = ne = de())),
                K !== !1 && P.refresh());
            }),
            (P.getTween = function (F) {
              return F && he ? he.tween : ae;
            }),
            (P.setPositions = function (F, K, j, J) {
              if (C) {
                var Ue = C.scrollTrigger,
                  le = C.duration(),
                  Ie = Ue.end - Ue.start;
                (F = Ue.start + (Ie * F) / le), (K = Ue.start + (Ie * K) / le);
              }
              P.refresh(
                !1,
                !1,
                {
                  start: Hu(F, j && !!P._startClamp),
                  end: Hu(K, j && !!P._endClamp),
                },
                J
              ),
                P.update();
            }),
            (P.adjustPinSpacing = function (F) {
              if (He && F) {
                var K = He.indexOf(T.d) + 1;
                (He[K] = parseFloat(He[K]) + F + Ve),
                  (He[1] = parseFloat(He[1]) + F + Ve),
                  dr(He);
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
                  if (ie[j].scroller === _ && ie[j] !== P) return;
                Xe(_, "resize", ss), O || Xe(_, "scroll", ur);
              }
            }),
            (P.kill = function (F, K) {
              P.disable(F, K), ae && !K && ae.kill(), l && delete jo[l];
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
                  [Oe, Le, I, ze].forEach(function (J) {
                    return J.parentNode && J.parentNode.removeChild(J);
                  }),
                as === P && (as = 0),
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
            Li && Li(P),
            r && r.add && !V)
          ) {
            var ce = P.update;
            (P.update = function () {
              (P.update = ce), re.cache++, Y || te || P.refresh();
            }),
              H.delayedCall(0.01, P.update),
              (V = 0.01),
              (Y = te = 0);
          } else P.refresh();
          h && Vg();
        }),
        (t.register = function (n) {
          return (
            sr ||
              ((H = n || Wu()),
              Yu() && window.document && t.enable(),
              (sr = Zr)),
            sr
          );
        }),
        (t.defaults = function (n) {
          if (n) for (var r in n) Ks[r] = n[r];
          return Ks;
        }),
        (t.disable = function (n, r) {
          (Zr = 0),
            ie.forEach(function (a) {
              return a[r ? "kill" : "disable"](n);
            }),
            Xe(se, "wheel", ur),
            Xe(ve, "scroll", ur),
            clearInterval(Ys),
            Xe(ve, "touchcancel", fi),
            Xe(ue, "touchstart", fi),
            Zs(Xe, ve, "pointerdown,touchstart,mousedown", qu),
            Zs(Xe, ve, "pointerup,touchend,mouseup", Vu),
            Vs.kill(),
            js(Xe);
          for (var s = 0; s < re.length; s += 3)
            Qs(Xe, re[s], re[s + 1]), Qs(Xe, re[s], re[s + 2]);
        }),
        (t.enable = function () {
          if (
            ((se = window),
            (ve = document),
            (It = ve.documentElement),
            (ue = ve.body),
            H &&
              ((Xr = H.utils.toArray),
              (jr = H.utils.clamp),
              (Ro = H.core.context || fi),
              (Do = H.core.suppressOverwrites || fi),
              (No = se.history.scrollRestoration || "auto"),
              (Qo = se.pageYOffset || 0),
              H.core.globals("ScrollTrigger", t),
              ue))
          ) {
            (Zr = 1),
              (or = document.createElement("div")),
              (or.style.height = "100vh"),
              (or.style.position = "absolute"),
              rd(),
              Ig(),
              Me.register(H),
              (t.isTouch = Me.isTouch),
              (Ui =
                Me.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Io = Me.isTouch === 1),
              Ge(se, "wheel", ur),
              (Lo = [se, ve, It, ue]),
              H.matchMedia &&
                ((t.matchMedia = function (c) {
                  var u = H.matchMedia(),
                    d;
                  for (d in c) u.add(d, c[d]);
                  return u;
                }),
                H.addEventListener("matchMediaInit", function () {
                  return Zo();
                }),
                H.addEventListener("matchMediaRevert", function () {
                  return td();
                }),
                H.addEventListener("matchMedia", function () {
                  Pn(0, 1), kn("matchMedia");
                }),
                H.matchMedia().add("(orientation: portrait)", function () {
                  return Uo(), Uo;
                })),
              Uo(),
              Ge(ve, "scroll", ur);
            var n = ue.hasAttribute("style"),
              r = ue.style,
              s = r.borderTopStyle,
              a = H.core.Animation.prototype,
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
                Ys = setInterval(Ju, 250),
                H.delayedCall(0.5, function () {
                  return (Xs = 0);
                }),
                Ge(ve, "touchcancel", fi),
                Ge(ue, "touchstart", fi),
                Zs(Ge, ve, "pointerdown,touchstart,mousedown", qu),
                Zs(Ge, ve, "pointerup,touchend,mouseup", Vu),
                zo = H.utils.checkPrefix("transform"),
                ra.push(zo),
                sr = st(),
                Vs = H.delayedCall(0.2, Pn).pause(),
                ar = [
                  ve,
                  "visibilitychange",
                  function () {
                    var c = se.innerWidth,
                      u = se.innerHeight;
                    ve.hidden
                      ? ((zu = c), (Du = u))
                      : (zu !== c || Du !== u) && ss();
                  },
                  ve,
                  "DOMContentLoaded",
                  Pn,
                  se,
                  "load",
                  Pn,
                  se,
                  "resize",
                  ss,
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
          "limitCallbacks" in n && (Ho = !!n.limitCallbacks);
          var r = n.syncInterval;
          (r && clearInterval(Ys)) || ((Ys = r) && setInterval(Ju, r)),
            "ignoreMobileResize" in n &&
              (Io = t.isTouch === 1 && n.ignoreMobileResize),
            "autoRefreshEvents" in n &&
              (js(Xe) || js(Ge, n.autoRefreshEvents || "none"),
              (Ru = (n.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (t.scrollerProxy = function (n, r) {
          var s = Ct(n),
            a = re.indexOf(s),
            o = xn(s);
          ~a && re.splice(a, o ? 6 : 2),
            r && (o ? di.unshift(se, r, ue, r, It, r) : di.unshift(s, r));
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
  (G.version = "3.13.0"),
    (G.saveStyles = function (t) {
      return t
        ? Xr(t).forEach(function (e) {
            if (e && e.style) {
              var i = Nt.indexOf(e);
              i >= 0 && Nt.splice(i, 5),
                Nt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  H.core.getCache(e),
                  Ro()
                );
            }
          })
        : Nt;
    }),
    (G.revert = function (t, e) {
      return Zo(!t, e);
    }),
    (G.create = function (t, e) {
      return new G(t, e);
    }),
    (G.refresh = function (t) {
      return t ? ss(!0) : (sr || G.register()) && Pn(!0);
    }),
    (G.update = function (t) {
      return ++re.cache && ki(t === !0 ? 2 : 0);
    }),
    (G.clearScrollMemory = id),
    (G.maxScroll = function (t, e) {
      return hi(t, e ? gt : qe);
    }),
    (G.getScrollFunc = function (t, e) {
      return ji(Ct(t), e ? gt : qe);
    }),
    (G.getById = function (t) {
      return jo[t];
    }),
    (G.getAll = function () {
      return ie.filter(function (t) {
        return t.vars.id !== "ScrollSmoother";
      });
    }),
    (G.isScrolling = function () {
      return !!Yt;
    }),
    (G.snapDirectional = Xo),
    (G.addEventListener = function (t, e) {
      var i = Cn[t] || (Cn[t] = []);
      ~i.indexOf(e) || i.push(e);
    }),
    (G.removeEventListener = function (t, e) {
      var i = Cn[t],
        n = i && i.indexOf(e);
      n >= 0 && i.splice(n, 1);
    }),
    (G.batch = function (t, e) {
      var i = [],
        n = {},
        r = e.interval || 0.016,
        s = e.batchMax || 1e9,
        a = function (c, u) {
          var d = [],
            f = [],
            h = H.delayedCall(r, function () {
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
          Ge(G, "refresh", function () {
            return (s = e.batchMax());
          })),
        Xr(t).forEach(function (l) {
          var c = {};
          for (o in n) c[o] = n[o];
          (c.trigger = l), i.push(G.create(c));
        }),
        i
      );
    });
  var ud = function (e, i, n, r) {
      return (
        i > r ? e(r) : i < 0 && e(0),
        n > r ? (r - i) / (n - i) : n < 0 ? i / (i - n) : 1
      );
    },
    el = function t(e, i) {
      i === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            i === !0
              ? "auto"
              : i
              ? "pan-" + i + (Me.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === It && t(ue, i);
    },
    la = { auto: 1, scroll: 1 },
    jg = function (e) {
      var i = e.event,
        n = e.target,
        r = e.axis,
        s = (i.changedTouches ? i.changedTouches[0] : i).target,
        a = s._gsap || H.core.getCache(s),
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
    dd = function (e, i, n, r) {
      return Me.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: i,
        onWheel: (r = r && jg),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return n && Ge(ve, Me.eventTypes[0], hd, !1, !0);
        },
        onDisable: function () {
          return Xe(ve, Me.eventTypes[0], hd, !0);
        },
      });
    },
    Ug = /(input|label|select|textarea)/i,
    fd,
    hd = function (e) {
      var i = Ug.test(e.target.tagName);
      (i || fd) && ((e._gsapAllow = !0), (fd = i));
    },
    Zg = function (e) {
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
        c = Ct(e.target) || It,
        u = H.core.globals().ScrollSmoother,
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
        y = 0,
        v = at(r)
          ? function () {
              return r(o);
            }
          : function () {
              return r || 2.8;
            },
        b,
        w,
        x = dd(c, e.type, !0, s),
        E = function () {
          return (w = !1);
        },
        C = fi,
        k = fi,
        $ = function () {
          (l = hi(c, qe)),
            (k = jr(Ui ? 1 : 0, l)),
            n && (C = jr(0, hi(c, gt))),
            (b = An);
        },
        T = function () {
          (f._gsap.y = Qr(parseFloat(f._gsap.y) + h.offset) + "px"),
            (f.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(f._gsap.y) +
              ", 0, 1)"),
            (h.offset = h.cacheID = 0);
        },
        M = function () {
          if (w) {
            requestAnimationFrame(E);
            var D = Qr(o.deltaY / 2),
              B = k(h.v - D);
            if (f && B !== h.v + h.offset) {
              h.offset = B - h.v;
              var P = Qr((parseFloat(f && f._gsap.y) || 0) - h.offset);
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
          h.offset && T(), (w = !0);
        },
        _,
        S,
        O,
        L,
        A = function () {
          $(),
            _.isActive() &&
              _.vars.scrollY > l &&
              (h() > l ? _.progress(1) && h(l) : _.resetTo("scrollY", l));
        };
      return (
        f && H.set(f, { y: "+=0" }),
        (e.ignoreCheck = function (z) {
          return (
            (Ui && z.type === "touchmove" && M()) ||
            (p > 1.05 && z.type !== "touchstart") ||
            o.isGesturing ||
            (z.touches && z.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          w = !1;
          var z = p;
          (p = Qr(((se.visualViewport && se.visualViewport.scale) || 1) / g)),
            _.pause(),
            z !== p && el(c, p > 1.01 ? !0 : n ? !1 : "x"),
            (S = m()),
            (O = h()),
            $(),
            (b = An);
        }),
        (e.onRelease = e.onGestureStart =
          function (z, D) {
            if ((h.offset && T(), !D)) L.restart(!0);
            else {
              re.cache++;
              var B = v(),
                P,
                q;
              n &&
                ((P = m()),
                (q = P + (B * 0.05 * -z.velocityX) / 0.227),
                (B *= ud(m, P, q, hi(c, gt))),
                (_.vars.scrollX = C(q))),
                (P = h()),
                (q = P + (B * 0.05 * -z.velocityY) / 0.227),
                (B *= ud(h, P, q, hi(c, qe))),
                (_.vars.scrollY = k(q)),
                _.invalidate().duration(B).play(0.01),
                ((Ui && _.vars.scrollY >= l) || P >= l - 1) &&
                  H.to({}, { onUpdate: A, duration: B });
            }
            a && a(z);
          }),
        (e.onWheel = function () {
          _._ts && _.pause(), st() - y > 1e3 && ((b = 0), (y = st()));
        }),
        (e.onChange = function (z, D, B, P, q) {
          if (
            (An !== b && $(),
            D && n && m(C(P[2] === D ? S + (z.startX - z.x) : m() + D - P[1])),
            B)
          ) {
            h.offset && T();
            var X = q[2] === B,
              oe = X ? O + z.startY - z.y : h() + B - q[1],
              ne = k(oe);
            X && oe !== ne && (O += ne - oe), h(ne);
          }
          (B || D) && ki();
        }),
        (e.onEnable = function () {
          el(c, n ? !1 : "x"),
            G.addEventListener("refresh", A),
            Ge(se, "resize", A),
            h.smooth &&
              ((h.target.style.scrollBehavior = "auto"),
              (h.smooth = m.smooth = !1)),
            x.enable();
        }),
        (e.onDisable = function () {
          el(c, !0),
            Xe(se, "resize", A),
            G.removeEventListener("refresh", A),
            x.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (o = new Me(e)),
        (o.iOS = Ui),
        Ui && !h() && h(1),
        Ui && H.ticker.add(fi),
        (L = o._dc),
        (_ = H.to(o, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: n ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: ld(h, h(), function () {
              return _.pause();
            }),
          },
          onUpdate: ki,
          onComplete: L.vars.onComplete,
        })),
        o
      );
    };
  (G.sort = function (t) {
    if (at(t)) return ie.sort(t);
    var e = se.pageYOffset || 0;
    return (
      G.getAll().forEach(function (i) {
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
    (G.observe = function (t) {
      return new Me(t);
    }),
    (G.normalizeScroll = function (t) {
      if (typeof t > "u") return yt;
      if (t === !0 && yt) return yt.enable();
      if (t === !1) {
        yt && yt.kill(), (yt = t);
        return;
      }
      var e = t instanceof Me ? t : Zg(t);
      return (
        yt && yt.target === e.target && yt.kill(), xn(e.target) && (yt = e), e
      );
    }),
    (G.core = {
      _getVelocityProp: Oo,
      _inputObserver: dd,
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
    Wu() && H.registerPlugin(G);
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let os,
    fr,
    tl,
    Qg = () => tl || ye.register(window.gsap),
    pd = typeof Intl < "u" ? new Intl.Segmenter() : 0,
    ca = (t) =>
      typeof t == "string"
        ? ca(document.querySelectorAll(t))
        : "length" in t
        ? Array.from(t)
        : [t],
    md = (t) => ca(t).filter((e) => e instanceof HTMLElement),
    il = [],
    nl = function () {},
    Kg = /\s+/g,
    gd = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    vd = { left: 0, top: 0, width: 0, height: 0 },
    yd = (t, e) => {
      if (e) {
        let i = new Set(t.join("").match(e) || il),
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
    bd = (t) =>
      window.getComputedStyle(t).display === "inline" &&
      (t.style.display = "inline-block"),
    hr = (t, e, i) =>
      e.insertBefore(typeof t == "string" ? document.createTextNode(t) : t, i),
    rl = (t, e, i) => {
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
    Jg = (t, e, i, n) => {
      let r = rl("line", i, n),
        s = window.getComputedStyle(t).textAlign || "left";
      return (a, o) => {
        let l = r("");
        for (l.style.textAlign = s, t.insertBefore(l, e[a]); a < o; a++)
          l.appendChild(e[a]);
        l.normalize();
      };
    },
    _d = (t, e, i, n, r, s, a, o, l, c) => {
      var u;
      let d = Array.from(t.childNodes),
        f = 0,
        { wordDelimiter: h, reduceWhiteSpace: m = !0, prepareText: p } = e,
        g = t.getBoundingClientRect(),
        y = g,
        v =
          !m && window.getComputedStyle(t).whiteSpace.substring(0, 3) === "pre",
        b = 0,
        w = i.collection,
        x,
        E,
        C,
        k,
        $,
        T,
        M,
        _,
        S,
        O,
        L,
        A,
        z,
        D,
        B,
        P,
        q,
        X;
      for (
        typeof h == "object"
          ? ((C = h.delimiter || h), (E = h.replaceWith || ""))
          : (E = h === "" ? "" : h || " "),
          x = E !== " ";
        f < d.length;
        f++
      )
        if (((k = d[f]), k.nodeType === 3)) {
          for (
            B = k.textContent || "",
              m
                ? (B = B.replace(Kg, " "))
                : v &&
                  (B = B.replace(
                    /\n/g,
                    E +
                      `
`
                  )),
              p && (B = p(B, t)),
              k.textContent = B,
              $ = E || C ? B.split(C || E) : B.match(o) || il,
              q = $[$.length - 1],
              _ = x ? q.slice(-1) === " " : !q,
              q || $.pop(),
              y = g,
              M = x ? $[0].charAt(0) === " " : !$[0],
              M && hr(" ", t, k),
              $[0] || $.shift(),
              yd($, l),
              (s && c) || (k.textContent = ""),
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
                ((u = k.previousSibling) == null || u.remove(),
                hr(document.createElement("br"), t, k),
                (P = P.slice(1))),
              !m && P === "")
            )
              hr(E, t, k);
            else if (P === " ") t.insertBefore(document.createTextNode(" "), k);
            else {
              if (
                (x && P.charAt(0) === " " && hr(" ", t, k),
                b && S === 1 && !M && w.indexOf(b.parentNode) > -1
                  ? ((T = w[w.length - 1]),
                    T.appendChild(document.createTextNode(n ? "" : P)))
                  : ((T = i(n ? "" : P)),
                    hr(T, t, k),
                    b && S === 1 && !M && T.insertBefore(b, T.firstChild)),
                n)
              )
                for (
                  L = pd
                    ? yd(
                        [...pd.segment(P)].map((oe) => oe.segment),
                        l
                      )
                    : P.match(o) || il,
                    X = 0;
                  X < L.length;
                  X++
                )
                  T.appendChild(
                    L[X] === " " ? document.createTextNode(" ") : n(L[X])
                  );
              if (s && c) {
                if (
                  ((B = k.textContent = B.substring(P.length + 1, B.length)),
                  (O = T.getBoundingClientRect()),
                  O.top > y.top && O.left <= y.left)
                ) {
                  for (A = t.cloneNode(), z = t.childNodes[0]; z && z !== T; )
                    (D = z), (z = z.nextSibling), A.appendChild(D);
                  t.parentNode.insertBefore(A, t), r && bd(A);
                }
                y = O;
              }
              (S < $.length || _) &&
                hr(
                  S >= $.length ? " " : x && P.slice(-1) === " " ? " " + E : E,
                  t,
                  k
                );
            }
          t.removeChild(k), (b = 0);
        } else
          k.nodeType === 1 &&
            (a && a.indexOf(k) > -1
              ? (w.indexOf(k.previousSibling) > -1 &&
                  w[w.length - 1].appendChild(k),
                (b = k))
              : (_d(k, e, i, n, r, s, a, o, l, !0), (b = 0)),
            r && bd(k));
    };
  const wd = class mf {
    constructor(e, i) {
      (this.isSplit = !1),
        Qg(),
        (this.elements = md(e)),
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
        nl(this),
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
        p = m ? new RegExp(m.source + "|" + gd.source, "gu") : gd,
        g = !!e.ignore && md(e.ignore),
        { orig: y, animTime: v, obs: b } = this._data,
        w;
      return (
        (d || f || u) &&
          (this.elements.forEach((x, E) => {
            (y[E] = {
              element: x,
              html: x.innerHTML,
              ariaL: x.getAttribute("aria-label"),
              ariaH: x.getAttribute("aria-hidden"),
            }),
              n === "auto"
                ? x.setAttribute("aria-label", (x.textContent || "").trim())
                : n === "hidden" && x.setAttribute("aria-hidden", "true");
            let C = [],
              k = [],
              $ = [],
              T = d ? rl("char", e, C) : null,
              M = rl("word", e, k),
              _,
              S,
              O,
              L;
            if ((_d(x, e, M, T, h, r && (u || h), g, p, m, !1), u)) {
              let A = ca(x.childNodes),
                z = Jg(x, A, e, $),
                D,
                B = [],
                P = 0,
                q = A.map((oe) =>
                  oe.nodeType === 1 ? oe.getBoundingClientRect() : vd
                ),
                X = vd;
              for (_ = 0; _ < A.length; _++)
                (D = A[_]),
                  D.nodeType === 1 &&
                    (D.nodeName === "BR"
                      ? (B.push(D), z(P, _ + 1), (P = _ + 1), (X = q[P]))
                      : (_ &&
                          q[_].top > X.top &&
                          q[_].left <= X.left &&
                          (z(P, _), (P = _)),
                        (X = q[_])));
              P < _ && z(P, _),
                B.forEach((oe) => {
                  var ne;
                  return (ne = oe.parentNode) == null
                    ? void 0
                    : ne.removeChild(oe);
                });
            }
            if (!f) {
              for (_ = 0; _ < k.length; _++)
                if (
                  ((S = k[_]),
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
                  (L = S.nextSibling),
                    L &&
                      L.nodeType === 3 &&
                      ((L.textContent =
                        (S.textContent || "") + (L.textContent || "")),
                      S.remove());
              (k.length = 0), x.normalize();
            }
            this.lines.push(...$), this.words.push(...k), this.chars.push(...C);
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
        fr && (o ? fr.addEventListener("loadingdone", this._split) : fr.status),
        (w = a && a(this)) &&
          w.totalTime &&
          (this._data.anim = v ? w.totalTime(v) : w),
        u &&
          o &&
          this.elements.forEach((x, E) => {
            (y[E].width = x.offsetWidth), b && b.observe(x);
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
      return new mf(e, i);
    }
    static register(e) {
      (os = os || e || window.gsap),
        os && ((ca = os.utils.toArray), (nl = os.core.context || nl)),
        !tl && window.innerWidth > 0 && ((fr = document.fonts), (tl = !0));
    }
  };
  wd.version = "3.13.0";
  let ye = wd;
  R.registerPlugin(G, ye);
  const e0 = async () => {
      await document.fonts.ready;
      const t =
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ) ||
          (navigator.maxTouchPoints && navigator.maxTouchPoints > 2),
        e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        i = t || e;
      G.getAll().forEach((r) => {
        r.vars &&
          r.vars.trigger &&
          r.vars.trigger.hasAttribute &&
          r.vars.trigger.hasAttribute("split-text") &&
          r.kill(!0);
      }),
        document.querySelectorAll("[split-text]").forEach((r) => {
          ye.create(r, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "split-line",
            tag: "div",
            onSplit(s) {
              s.lines.forEach((c) => {
                const u = document.createElement("div");
                u.setAttribute("data-line-wrapper", ""),
                  (u.style.overflow = "clip"),
                  (u.style.paddingBottom = "5px"),
                  (u.style.position = "relative"),
                  c.parentNode.insertBefore(u, c),
                  u.appendChild(c);
              });
              const a = r.querySelectorAll("[data-line-wrapper]"),
                o = Array.from(a).map((c) => c.firstChild);
              R.set(o, { willChange: "transform" });
              const l = {
                trigger: r,
                start: "top 80%",
                end: "bottom top",
                toggleActions: "play none none reverse",
                markers: !1,
              };
              return (
                i &&
                  ((l.refreshPriority = -99),
                  (l.fastScrollEnd = !0),
                  (l.ignoreMobileResize = !0)),
                R.from(o, {
                  yPercent: 120,
                  opacity: 0,
                  rotateZ: 2,
                  rotateY: 20,
                  rotateX: 20,
                  duration: 1.8,
                  ease: "expo.out",
                  stagger: 0.08,
                  scrollTrigger: l,
                })
              );
            },
          });
        });
    },
    t0 = () => {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 2)
      ) {
        let e;
        const i = G.refresh;
        (G.refresh = function (...n) {
          if (!e)
            return (
              (e = setTimeout(() => {
                e = null;
              }, 150)),
              i.apply(this, n)
            );
        }),
          G.config({
            ignoreMobileResize: !0,
            autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
          });
      }
    },
    Zi = () => {
      t0(), e0();
    },
    ua = () => {
      const t = navigator.userAgent,
        e = /iPad|iPhone|iPod/.test(t),
        i = /WebKit/.test(t),
        n = /Safari/.test(t) && !/Chrome/.test(t),
        r = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      return e && i && n && r;
    };
  let xd = window.innerHeight,
    sl = window.innerHeight;
  const al = (t) => {
      if (!ua()) return !1;
      const e = Math.abs(t - xd);
      return e > 50 && e < 150;
    },
    ol = (t) => {
      (Math.abs(t - sl) > 150 || !ua()) && ((sl = t), (xd = t));
    },
    ll = () => {
      const t = navigator.userAgent,
        e = "ontouchstart" in window || navigator.maxTouchPoints > 0,
        n =
          /iPhone|Android.*Mobile|BlackBerry|Opera Mini|IEMobile|Windows Phone/i.test(
            t
          ),
        r = window.innerWidth <= 768 && window.innerHeight <= 1024;
      return e && (n || r);
    },
    i0 = () => {
      if (!ua()) return;
      const t = () => {
        document.documentElement.style.setProperty(
          "--stable-vh",
          `${sl * 0.01}px`
        );
      };
      t(),
        window.addEventListener("orientationchange", () => {
          setTimeout(() => {
            ol(window.innerHeight), t();
          }, 500);
        });
    };
  R.registerPlugin(G);
  let cl = new Set();
  const ul = () => {
      const t = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        e = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      if (t || e) {
        document.querySelectorAll("[motion]").forEach((r) => {
          R.set(r, { opacity: 1, y: 0 });
        });
        return;
      }
      Sd();
      const i = document.querySelectorAll("[motion]");
      i.length !== 0 &&
        (i.forEach((n) => {
          n0(n);
        }),
        G.refresh());
    },
    n0 = (t) => {
      const e = t.getAttribute("motion");
      if (e !== "fade" && e !== "move-up") return;
      const i = parseFloat(t.getAttribute("motion-duration") || "1.4"),
        n = parseFloat(t.getAttribute("motion-delay") || "0"),
        r = t.getAttribute("motion-ease") || "power2.out",
        s = t.getAttribute("motion-start") || "top 80%",
        a = t.getAttribute("motion-toggle-actions") || "play none none reverse",
        o = {};
      e === "fade"
        ? (o.opacity = 1)
        : e === "move-up" && ((o.opacity = 1), (o.y = 0));
      const l = { trigger: t, start: s, toggleActions: a, markers: !1 };
      ua() && ((l.refreshPriority = -1), (l.fastScrollEnd = !0));
      const c = R.fromTo(
        t,
        {
          opacity:
            e === "fade"
              ? parseFloat(t.getAttribute("opacity-value") || "0")
              : 1,
          y:
            e === "move-up"
              ? parseFloat(t.getAttribute("move-value") || "50")
              : 0,
        },
        { ...o, duration: i, delay: n, ease: r, scrollTrigger: l }
      );
      cl.add(c);
    },
    Sd = () => {
      cl.forEach((t) => {
        t && t.kill && t.kill(!0);
      }),
        cl.clear();
    },
    Qi = () => {
      document.readyState === "complete" ||
      document.readyState === "interactive"
        ? ul()
        : window.addEventListener("DOMContentLoaded", ul);
      let t;
      const e = () => {
        clearTimeout(t),
          (t = setTimeout(() => {
            ll() || al(window.innerHeight) || G.refresh();
          }, 150));
      };
      return (
        window.addEventListener("resize", e),
        () => {
          window.removeEventListener("resize", e),
            window.removeEventListener("DOMContentLoaded", ul),
            Sd();
        }
      );
    };
  R.registerPlugin(ye);
  const r0 = (t) => {
    const e = document.querySelectorAll("[page-load='component']"),
      i = document.querySelectorAll("[page-load='wrap']"),
      n = document.querySelectorAll("[page-load='gradient']"),
      r = document.querySelectorAll("[page-load='text']"),
      s = document.querySelectorAll(".page_cover"),
      a = R.timeline();
    R.set(n, { opacity: 0 }), R.set(i, { opacity: 0 });
    const o = [];
    r.forEach((c) => {
      const u = ye.create(c, {
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
  R.registerPlugin(ye);
  const s0 = (t) => {
      const e = document.querySelector("[home-hero='text']"),
        i = document.querySelector("[home-hero='btn']"),
        n = document.querySelector("[home-hero='visual']");
      e &&
        ye.create(e, {
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
              R.set(i, { opacity: 0 }),
              R.set(n, { opacity: 0 }),
              a.to(".move-text", {
                opacity: 1,
                duration: 1.8,
                stagger: 0.08,
                ease: "expo.inOut",
                yPercent: 0,
              }),
              a.to(i, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
              a.to(
                n,
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
    a0 = () => {
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
    o0 = () => {
      a0();
    },
    Td = () => {
      Ff(), cc(), Zi(), Qi(), o0();
      const t = r0();
      t.add(() => Ki(), "-=0.8"), t.add(() => s0(), "-=0.8");
    },
    Ed = () => {
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
  R.registerPlugin(G);
  const l0 = () => {
      const t = document.querySelector("[impact-slide='main']"),
        e = t.querySelectorAll("[impact-slide='component']");
      if (!t || !e.length) return;
      e.forEach((n, r) => {
        R.set(n, {
          clipPath: r === 0 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
        });
      });
      const i = R.timeline({
        scrollTrigger: {
          trigger: t,
          start: "top top",
          end: `+=${e.length * 100}%`,
          scrub: !0,
          pin: !1,
          markers: !1,
        },
      });
      e.forEach((n, r) => {
        r !== 0 &&
          i.to(
            n,
            { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.inOut" },
            "+=0.33"
          );
      });
    },
    c0 = () => {
      l0();
    },
    u0 = () => {
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
    dl = () => {
      u0();
    },
    d0 = () => {
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
  R.registerPlugin(ye);
  const f0 = (t) => {
      const e = document.querySelector("[about-hero='text']"),
        i = document.querySelectorAll("[about-hero='visual']");
      e &&
        ye.create(e, {
          type: "lines",
          autoSplit: !0,
          mask: "lines",
          linesClass: "about-hero-text-line",
          tag: "span",
          onSplit(n) {
            n.lines.forEach((a) => {
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
              R.set(i, { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }),
              s.to(".move-text", {
                opacity: 1,
                duration: 1.8,
                stagger: 0.08,
                ease: "expo.inOut",
                yPercent: 0,
              }),
              s.to(
                i,
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
    h0 = () => {
      d0(), Ed(), c0(), dl(), Zi(), Qi();
      const t = Mn();
      t.add(() => Ki(), "-=1"), t.add(() => f0(), "-=1");
    };
  var p0 = "1.3.1";
  function Cd(t, e, i) {
    return Math.max(t, Math.min(e, i));
  }
  function m0(t, e, i) {
    return (1 - i) * t + i * e;
  }
  function g0(t, e, i, n) {
    return m0(t, e, 1 - Math.exp(-i * n));
  }
  function v0(t, e) {
    return ((t % e) + e) % e;
  }
  var y0 = class {
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
        const i = Cd(0, this.currentTime / this.duration, 1);
        e = i >= 1;
        const n = e ? 1 : this.easing(i);
        this.value = this.from + (this.to - this.from) * n;
      } else
        this.lerp
          ? ((this.value = g0(this.value, this.to, this.lerp * 60, t)),
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
  function b0(t, e) {
    let i;
    return function (...n) {
      let r = this;
      clearTimeout(i),
        (i = setTimeout(() => {
          (i = void 0), t.apply(r, n);
        }, e));
    };
  }
  var _0 = class {
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
            ((this.debouncedResize = b0(this.resize, n)),
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
    kd = class {
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
    Ad = 100 / 6,
    Ji = { passive: !1 },
    w0 = class {
      constructor(t, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        W(this, "touchStart", { x: 0, y: 0 });
        W(this, "lastDelta", { x: 0, y: 0 });
        W(this, "window", { width: 0, height: 0 });
        W(this, "emitter", new kd());
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
          const r = n === 1 ? Ad : n === 2 ? this.window.width : 1,
            s = n === 1 ? Ad : n === 2 ? this.window.height : 1;
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
    x0 = class {
      constructor({
        wrapper: t = window,
        content: e = document.documentElement,
        eventsTarget: i = t,
        smoothWheel: n = !0,
        syncTouch: r = !1,
        syncTouchLerp: s = 0.075,
        touchInertiaMultiplier: a = 35,
        duration: o,
        easing: l = (k) => Math.min(1, 1.001 - Math.pow(2, -10 * k)),
        lerp: c = 0.1,
        infinite: u = !1,
        orientation: d = "vertical",
        gestureOrientation: f = "vertical",
        touchMultiplier: h = 1,
        wheelMultiplier: m = 1,
        autoResize: p = !0,
        prevent: g,
        virtualScroll: y,
        overscroll: v = !0,
        autoRaf: b = !1,
        anchors: w = !1,
        autoToggle: x = !1,
        allowNestedScroll: E = !1,
        __experimental__naiveDimensions: C = !1,
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
        W(this, "animate", new y0());
        W(this, "emitter", new kd());
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
        (window.lenisVersion = p0),
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
            virtualScroll: y,
            overscroll: v,
            autoRaf: b,
            anchors: w,
            autoToggle: x,
            allowNestedScroll: E,
            __experimental__naiveDimensions: C,
          }),
          (this.dimensions = new _0(t, e, { autoResize: p })),
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
          (this.virtualScroll = new w0(i, {
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
            } else t = Cd(0, t, this.limit);
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
          const E = x.overflowX,
            C = x.overflowY;
          if (
            ((s = ["auto", "overlay", "scroll"].includes(E)),
            (a = ["auto", "overlay", "scroll"].includes(C)),
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
            E = i !== 0;
          x && s && o && (m = "x"), E && a && l && (m = "y");
        }
        if (!m) return !1;
        let p, g, y, v, b;
        if (m === "x")
          (p = t.scrollLeft), (g = c - d), (y = e), (v = s), (b = o);
        else if (m === "y")
          (p = t.scrollTop), (g = u - f), (y = i), (v = a), (b = l);
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
        const t = this.options.wrapper;
        return this.isHorizontal
          ? t.scrollX ?? t.scrollLeft
          : t.scrollY ?? t.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? v0(this.animatedScroll, this.limit)
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
  R.registerPlugin(G);
  let da;
  const S0 = () => {
      "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        ((da = new x0({ autoRaf: !0, smoothWheel: !0, smoothTouch: !1 })),
        da.on("scroll", G.update),
        R.ticker.add((t) => {
          da.raf(t * 1e3);
        }),
        R.ticker.lagSmoothing(0));
    },
    Pd = () => {
      S0();
    },
    $n = () => da,
    T0 = () => {
      const t = document.querySelectorAll("[career-modal='open-trigger']"),
        e = document.querySelectorAll("[career-modal='modal']");
      if (!t || !e) return;
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
    E0 = () => {
      T0();
    },
    C0 = () => {
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
    Md = () => {
      C0();
    };
  R.registerPlugin(ye);
  const k0 = (t) => {
      const e = document.querySelector("[contact-hero='text']"),
        i = document.querySelector("[contact-hero='visual']"),
        n = document.querySelectorAll("[contact-hero='visual-info']"),
        r = document.querySelectorAll("[contact-hero='cta']");
      e &&
        ye.create(e, {
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
              R.set(i, { opacity: 0, clipPath: "inset(50% round 16px)" }),
              R.set(n, { opacity: 0, y: 50 }),
              R.set(r, { opacity: 0, yPercent: 50 }),
              o.to(".move-text", {
                opacity: 1,
                duration: 1.8,
                stagger: 0.08,
                ease: "expo.inOut",
                yPercent: 0,
              }),
              o.to(
                i,
                {
                  opacity: 1,
                  clipPath: "inset(0% round 10px)",
                  duration: 1.8,
                  ease: "expo.inOut",
                },
                "-=1.4"
              ),
              o.to(
                n,
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
    A0 = () => {
      Md(), Zi(), Qi();
      const t = Mn();
      t.add(() => Ki(), "-=1"), t.add(() => k0(), "-=1");
    };
  R.registerPlugin(ye);
  const P0 = (t) => {
      const e = document.querySelector("[career-hero='text']"),
        i = document.querySelector("[career-hero='btn']"),
        n = document.querySelector("[career-hero='visual']");
      e &&
        ye.create(e, {
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
              R.set(i, { opacity: 0 }),
              R.set(n, { opacity: 0 }),
              a.to(".move-text", {
                opacity: 1,
                duration: 1.8,
                stagger: 0.08,
                ease: "expo.inOut",
                yPercent: 0,
              }),
              a.to(i, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
              a.to(
                n,
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
    M0 = () => {
      dl(), E0(), Md(), Zi(), Qi();
      const t = Mn();
      t.add(() => Ki(), "-=1"), t.add(() => P0(), "-=1");
    };
  R.registerPlugin(ye);
  const $0 = (t) => {
      const e = document.querySelector("[work-hero='text']"),
        i = document.querySelector("[work-hero='filter-wrap']"),
        n = document.querySelectorAll("[work-hero='project']");
      e &&
        ye.create(e, {
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
              R.set(i, { opacity: 0 }),
              R.set(n, { y: 100, opacity: 0 }),
              a.to(".move-text", {
                opacity: 1,
                duration: 1.8,
                stagger: 0.08,
                ease: "expo.inOut",
                yPercent: 0,
              }),
              a.to(i, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
              a.to(
                n,
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
    O0 = () => {
      Ed(), Zi(), Qi();
      const t = Mn();
      t.add(() => Ki(), "-=1"), t.add(() => $0(), "-=1");
    },
    L0 = () => {
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
          e.forEach((y) => {
            const v = y.querySelector("[service-link='num']");
            y.setAttribute("service-link-status", "inactive"),
              R.to(y, { opacity: 0.2, duration: 0.3 }),
              R.to(v, { opacity: 0, y: 5, duration: 0.3 });
          }),
            i.forEach((y) => {
              y.setAttribute("service-item-status", "inactive");
            }),
            a.forEach((y) => {
              y.getAttribute("hero-gradient") !== "main" &&
                R.to(y, { opacity: 0, duration: 0.5 });
            }),
            s && R.to(s, { opacity: 1, duration: 0.5 });
        },
        f = (y) => {
          if (c === y) return;
          c = y;
          const v = document.querySelector(
              `[service-link='item'][item-name='${y}']`
            ),
            b = document.querySelector(`[service-item='${y}']`),
            w = document.querySelector(`[hero-gradient='${y}']`);
          if (v && b) {
            d();
            const x = v.querySelector("[service-link='num']");
            v.setAttribute("service-link-status", "active"),
              R.to(v, { opacity: 1, duration: 0.4 }),
              R.to(x, { opacity: 1, y: 0, duration: 0.4 }),
              b.setAttribute("service-item-status", "active"),
              u.has(y) || (h(b), u.add(y)),
              w &&
                (s && R.to(s, { opacity: 0, duration: 0.5 }),
                R.to(w, { opacity: 1, duration: 0.5 })),
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
            b = e.length,
            w = n.offsetHeight,
            x = r.offsetHeight,
            E = w - x,
            C = b > 1 ? v / (b - 1) : 0,
            k = E * C;
          R.to(r, { y: k, duration: 0.6, ease: "power2.out" });
        };
      s && R.set(s, { opacity: 1 }),
        a.forEach((y) => {
          y.getAttribute("hero-gradient") !== "main" &&
            R.set(y, { opacity: 0 });
        }),
        i.forEach((y) => {
          R.set(y.children, { opacity: 0, y: 50 });
        }),
        e.forEach((y) => {
          const v = y.getAttribute("item-name");
          y.addEventListener("click", () => {
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
          (y) => {
            if (o) return;
            y.forEach((w) => {
              const x = w.target.getAttribute("service-item");
              x &&
                (p.set(x, w.intersectionRatio),
                w.isIntersecting &&
                  w.intersectionRatio >= 0.3 &&
                  !u.has(x) &&
                  (h(w.target), u.add(x)));
            });
            let v = null,
              b = 0;
            p.forEach((w, x) => {
              w > b && ((b = w), (v = x));
            }),
              v && b >= 0.3 ? f(v) : b < 0.3 && (d(), (c = null));
          },
          { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
        );
      i.forEach((y) => g.observe(y));
    },
    z0 = () => {
      L0();
    };
  /*!
   * DrawSVGPlugin 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var pi,
    fl,
    fa,
    $d,
    Od,
    Ld,
    hl,
    zd,
    Dd = function () {
      return typeof window < "u";
    },
    Id = function () {
      return pi || (Dd() && (pi = window.gsap) && pi.registerPlugin && pi);
    },
    D0 = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    pl = {
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
    Rd = function (e, i) {
      var n = Ai(e);
      return ~e.indexOf("%") ? (n / 100) * i : n;
    },
    ha = function (e, i) {
      return Ai(e.getAttribute(i));
    },
    pa = Math.sqrt,
    Nd = function (e, i, n, r, s, a) {
      return pa(
        Math.pow((Ai(n) - Ai(e)) * s, 2) + Math.pow((Ai(r) - Ai(i)) * a, 2)
      );
    },
    Bd = function (e) {},
    Fd = function (e) {
      return e.getAttribute("vector-effect") === "non-scaling-stroke";
    },
    I0 = 1,
    R0 = function (e, i, n) {
      var r = e.indexOf(" "),
        s,
        a;
      return (
        r < 0
          ? ((s = n !== void 0 ? n + "" : e), (a = e))
          : ((s = e.substr(0, r)), (a = e.substr(r + 1))),
        (s = Rd(s, i)),
        (a = Rd(a, i)),
        s > a ? [a, s] : [s, a]
      );
    },
    ma = function (e) {
      if (((e = fl(e)[0]), !e)) return 0;
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
      Fd(e) &&
        ((s = e.getScreenCTM()),
        (r = pa(s.a * s.a + s.b * s.b)),
        (s = pa(s.d * s.d + s.c * s.c)));
      try {
        o = e.getBBox();
      } catch {
        Bd(
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
          pl[i] &&
          ((g = ha(e, pl[i][0])),
          (y = ha(e, pl[i][1])),
          i !== "rect" && i !== "line" && ((g *= 2), (y *= 2)),
          i === "line" &&
            ((m = ha(e, "x1")),
            (p = ha(e, "y1")),
            (g = Math.abs(g - m)),
            (y = Math.abs(y - p)))),
        i === "path")
      )
        (c = n.strokeDasharray),
          (n.strokeDasharray = "none"),
          (a = e.getTotalLength() || 0),
          On(r) !== On(s) &&
            !Ld &&
            (Ld = 1) &&
            Bd(
              "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
            ),
          (a *= (r + s) / 2),
          (n.strokeDasharray = c);
      else if (i === "rect") a = g * 2 * r + y * 2 * s;
      else if (i === "line") a = Nd(m, p, m + g, p + y, r, s);
      else if (i === "polyline" || i === "polygon")
        for (
          l = e.getAttribute("points").match(D0) || [],
            i === "polygon" && l.push(l[0], l[1]),
            a = 0,
            u = 2;
          u < l.length;
          u += 2
        )
          a += Nd(l[u - 2], l[u - 1], l[u], l[u + 1], r, s) || 0;
      else
        (i === "circle" || i === "ellipse") &&
          ((d = (g / 2) * r),
          (f = (y / 2) * s),
          (a = Math.PI * (3 * (d + f) - pa((3 * d + f) * (d + 3 * f)))));
      return a || 0;
    },
    Hd = function (e, i) {
      if (((e = fl(e)[0]), !e)) return [0, 0];
      i || (i = ma(e) + 1);
      var n = fa.getComputedStyle(e),
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
    qd = function () {
      Dd() &&
        ((fa = window),
        (Od = pi = Id()),
        (fl = pi.utils.toArray),
        (hl = pi.core.getStyleSaver),
        (zd = pi.core.reverting || function () {}),
        ($d = ((fa.navigator || {}).userAgent || "").indexOf("Edge") !== -1));
    },
    ml = {
      version: "3.13.0",
      name: "drawSVG",
      register: function (e) {
        (pi = e), qd();
      },
      init: function (e, i, n, r, s) {
        if (!e.getBBox) return !1;
        Od || qd();
        var a = ma(e),
          o,
          l,
          c;
        return (
          (this.styles =
            hl && hl(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
          (this.tween = n),
          (this._style = e.style),
          (this._target = e),
          i + "" == "true"
            ? (i = "0 100%")
            : i
            ? (i + "").indexOf(" ") === -1 && (i = "0 " + i)
            : (i = "0 0"),
          (o = Hd(e, a)),
          (l = R0(i, a, o[0])),
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
          $d &&
            ((c = fa.getComputedStyle(e)),
            c.strokeLinecap !== c.strokeLinejoin &&
              ((l = Ai(c.strokeMiterlimit)),
              this.add(e.style, "strokeMiterlimit", l, l + 0.01))),
          (this._live = Fd(e) || ~(i + "").indexOf("live")),
          (this._nowrap = ~(i + "").indexOf("nowrap")),
          this._props.push("drawSVG"),
          I0
        );
      },
      render: function (e, i) {
        if (i.tween._time || !zd()) {
          var n = i._pt,
            r = i._style,
            s,
            a,
            o,
            l;
          if (n) {
            for (
              i._live &&
              ((s = ma(i._target)),
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
      getLength: ma,
      getPosition: Hd,
    };
  Id() && pi.registerPlugin(ml), R.registerPlugin(ye, ml);
  const N0 = (t) => {
    const e = document.querySelector("[service-hero='text']"),
      i = document.querySelectorAll("[service-hero='btn']"),
      n = document.querySelectorAll("[service-hero='svg']"),
      r = document.querySelectorAll("[service-hero='svg'] path");
    e &&
      ye.create(e, {
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
            R.set(i, { opacity: 0, yPercent: 20, scale: 0 }),
            R.set(n, { opacity: 0 }),
            R.set(r, { drawSVG: 0 }),
            o.to(n, { opacity: 1, duration: 0, ease: "power1.out" }),
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
              i,
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
  R.registerPlugin(ml, G);
  const B0 = () => {
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
    F0 = () => {
      B0();
    },
    H0 = () => {
      z0(), Zi(), Qi(), F0();
      const t = Mn();
      t.add(() => Ki(), "-=1"), t.add(() => N0(), "-=1");
    },
    q0 = () => {
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
    V0 = () => q0();
  /*!
   * matrix 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Pi,
    Ln,
    gl,
    ga,
    ls,
    va,
    ya,
    cs,
    Qt = "transform",
    vl = Qt + "Origin",
    Vd,
    yl = function (e) {
      var i = e.ownerDocument || e;
      for (
        !(Qt in e.style) &&
        ("msTransform" in e.style) &&
        ((Qt = "msTransform"), (vl = Qt + "Origin"));
        i.parentNode && (i = i.parentNode);

      );
      if (((Ln = window), (ya = new zn()), i)) {
        (Pi = i),
          (gl = i.documentElement),
          (ga = i.body),
          (cs = Pi.createElementNS("http://www.w3.org/2000/svg", "g")),
          (cs.style.transform = "none");
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
          (Vd = r.offsetParent !== n),
          s.removeChild(n));
      }
      return i;
    },
    Y0 = function (e) {
      for (var i, n; e && e !== ga; )
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
    Yd = [],
    Wd = [],
    bl = function () {
      return (
        Ln.pageYOffset || Pi.scrollTop || gl.scrollTop || ga.scrollTop || 0
      );
    },
    _l = function () {
      return (
        Ln.pageXOffset || Pi.scrollLeft || gl.scrollLeft || ga.scrollLeft || 0
      );
    },
    wl = function (e) {
      return (
        e.ownerSVGElement ||
        ((e.tagName + "").toLowerCase() === "svg" ? e : null)
      );
    },
    W0 = function t(e) {
      if (Ln.getComputedStyle(e).position === "fixed") return !0;
      if (((e = e.parentNode), e && e.nodeType === 1)) return t(e);
    },
    xl = function t(e, i) {
      if (e.parentNode && (Pi || yl(e))) {
        var n = wl(e),
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
              ? (va || (va = t(e)),
                c.setAttribute("width", 0.01),
                c.setAttribute("height", 0.01),
                c.setAttribute("transform", "translate(" + a + "," + o + ")"),
                va.appendChild(c))
              : (ls || ((ls = t(e)), (ls.style.cssText = l)),
                (c.style.cssText =
                  l +
                  "width:0.1px;height:0.1px;top:" +
                  o +
                  "px;left:" +
                  a +
                  "px"),
                ls.appendChild(c))),
          c
        );
      }
      throw "Need document and parent.";
    },
    G0 = function (e) {
      for (var i = new zn(), n = 0; n < e.numberOfItems; n++)
        i.multiply(e.getItem(n).matrix);
      return i;
    },
    Gd = function (e) {
      var i = e.getCTM(),
        n;
      return (
        i ||
          ((n = e.style[Qt]),
          (e.style[Qt] = "none"),
          e.appendChild(cs),
          (i = cs.getCTM()),
          e.removeChild(cs),
          n
            ? (e.style[Qt] = n)
            : e.style.removeProperty(
                Qt.replace(/([A-Z])/g, "-$1").toLowerCase()
              )),
        i || ya.clone()
      );
    },
    X0 = function (e, i) {
      var n = wl(e),
        r = e === n,
        s = n ? Yd : Wd,
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
      if (e === Ln) return e;
      if (
        (s.length || s.push(xl(e, 1), xl(e, 2), xl(e, 3)), (l = n ? va : ls), n)
      )
        r
          ? ((u = Gd(e)), (d = -u.e / u.a), (f = -u.f / u.d), (c = ya))
          : e.getBBox
          ? ((u = e.getBBox()),
            (c = e.transform ? e.transform.baseVal : {}),
            (c = c.numberOfItems
              ? c.numberOfItems > 1
                ? G0(c)
                : c.getItem(0).matrix
              : ya),
            (d = c.a * u.x + c.c * u.y),
            (f = c.b * u.x + c.d * u.y))
          : ((c = new zn()), (d = f = 0)),
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
        if (((d = f = 0), Vd))
          for (
            c = e.offsetParent, u = e;
            u && (u = u.parentNode) && u !== c && u.parentNode;

          )
            (Ln.getComputedStyle(u)[Qt] + "").length > 4 &&
              ((d = u.offsetLeft), (f = u.offsetTop), (u = 0));
        if (
          ((h = Ln.getComputedStyle(e)),
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
          (u[vl] = h[vl]),
          (u.position = h.position === "fixed" ? "fixed" : "absolute"),
          o.appendChild(l);
      }
      return l;
    },
    Sl = function (e, i, n, r, s, a, o) {
      return (
        (e.a = i), (e.b = n), (e.c = r), (e.d = s), (e.e = a), (e.f = o), e
      );
    },
    zn = (function () {
      function t(i, n, r, s, a, o) {
        i === void 0 && (i = 1),
          n === void 0 && (n = 0),
          r === void 0 && (r = 0),
          s === void 0 && (s = 1),
          a === void 0 && (a = 0),
          o === void 0 && (o = 0),
          Sl(this, i, n, r, s, a, o);
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
          return Sl(
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
          return Sl(
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
    if (!t || !t.parentNode || (Pi || yl(t)).documentElement === t)
      return new zn();
    var r = Y0(t),
      s = wl(t),
      a = s ? Yd : Wd,
      o = X0(t, i),
      l = a[0].getBoundingClientRect(),
      c = a[1].getBoundingClientRect(),
      u = a[2].getBoundingClientRect(),
      d = o.parentNode,
      f = !n && W0(t),
      h = new zn(
        (c.left - l.left) / 100,
        (c.top - l.top) / 100,
        (u.left - l.left) / 100,
        (u.top - l.top) / 100,
        l.left + (f ? 0 : _l()),
        l.top + (f ? 0 : bl())
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
   */ var j0 = 1,
    pr,
    ot,
    be,
    us,
    en,
    Mi,
    Tl,
    Xd = function (e, i) {
      return e.actions.forEach(function (n) {
        return n.vars[i] && n.vars[i](n);
      });
    },
    El = {},
    jd = 180 / Math.PI,
    U0 = Math.PI / 180,
    ba = {},
    Ud = {},
    _a = {},
    Cl = function (e) {
      return typeof e == "string" ? e.split(" ").join("").split(",") : e;
    },
    Z0 = Cl("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
    wa = Cl(
      "transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"
    ),
    ds = function (e) {
      return pr(e)[0] || void 0;
    },
    mr = function (e) {
      return Math.round(e * 1e4) / 1e4 || 0;
    },
    kl = function (e, i, n) {
      return e.forEach(function (r) {
        return r.classList[n](i);
      });
    },
    Zd = {
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
    Qd = {
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
    gr = function (e, i) {
      var n = {},
        r;
      for (r in e) i[r] || (n[r] = e[r]);
      return n;
    },
    Al = {},
    Jd = function (e) {
      var i = (Al[e] = Cl(e));
      return (_a[e] = i.concat(wa)), i;
    },
    Q0 = function (e) {
      var i = e._gsap || ot.core.getCache(e);
      return i.gmCache === ot.ticker.frame
        ? i.gMatrix
        : ((i.gmCache = ot.ticker.frame), (i.gMatrix = mi(e, !0, !1, !0)));
    },
    K0 = function t(e, i, n) {
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
    xa = function (e, i, n) {
      return (
        e.forEach(function (r) {
          return (r.d = K0(n ? r.element : r.t, i));
        }),
        e.sort(function (r, s) {
          return r.d - s.d;
        }),
        e
      );
    },
    fs = function (e, i) {
      for (
        var n = e.element.style, r = (e.css = e.css || []), s = i.length, a, o;
        s--;

      )
        (a = i[s]),
          (o = n[a] || n.getPropertyValue(a)),
          r.push(o ? a : Ud[a] || (Ud[a] = Kd(a)), o);
      return n;
    },
    Sa = function (e) {
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
    ef = function (e, i) {
      e.forEach(function (n) {
        return (n.a.cache.uncache = 1);
      }),
        i || e.finalStates.forEach(Sa);
    },
    Pl =
      "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(
        ","
      ),
    Ml = function (e, i, n) {
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
      if ((typeof i != "object" && (i = e), be && n !== 1))
        return (
          be._abs.push({ t: r, b: e, a: e, sd: 0 }),
          be._final.push(function () {
            return (e.cache.uncache = 1) && Sa(e);
          }),
          r
        );
      for (
        f = l("display") === "none",
          (!e.isVisible || f) &&
            (f && (fs(e, ["display"]).display = i.display),
            (e.matrix = i.matrix),
            (e.width = s = e.width || i.width),
            (e.height = a = e.height || i.height)),
          fs(e, Pl),
          h = window.getComputedStyle(r);
        u--;

      )
        c[Pl[u]] = h[Pl[u]];
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
        d = new Dn(r);
      else if (((d = gr(e, ba)), (d.position = "absolute"), e.simple)) {
        var m = r.getBoundingClientRect();
        d.matrix = new zn(1, 0, 0, 1, m.left + _l(), m.top + bl());
      } else d.matrix = mi(r, !1, !1, !0);
      return (
        (d = vr(d, e, !0)), (e.x = Mi(d.x, 0.01)), (e.y = Mi(d.y, 0.01)), r
      );
    },
    tf = function (e, i) {
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
    nf = function (e) {
      return xa(e, !0).forEach(function (i) {
        return (
          (i.a.isVisible || i.b.isVisible) && Ml(i.sd < 0 ? i.b : i.a, i.b, 1)
        );
      });
    },
    J0 = function (e, i) {
      return (i && e.idLookup[$l(i).id]) || e.elementStates[0];
    },
    $l = function (e, i, n, r) {
      return e instanceof Dn
        ? e
        : e instanceof Kt
        ? J0(e, r)
        : new Dn(typeof e == "string" ? ds(e) || void 0 : e, i, n);
    },
    ev = function (e, i) {
      for (
        var n = ot.getProperty(e.element, null, "native"),
          r = (e.props = {}),
          s = i.length;
        s--;

      )
        r[i[s]] = (n(i[s]) + "").trim();
      return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), e;
    },
    rf = function (e, i) {
      var n = e.style || e,
        r;
      for (r in i) n[r] = i[r];
    },
    tv = function (e) {
      var i = e.getAttribute("data-flip-id");
      return i || e.setAttribute("data-flip-id", (i = "auto-" + j0++)), i;
    },
    sf = function (e) {
      return e.map(function (i) {
        return i.element;
      });
    },
    af = function (e, i, n) {
      return e && i.length && n.add(e(sf(i), n, new Kt(i, 0, !0)), 0);
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
        y = i.bounds,
        v = a && Tl && Tl(o, "transform,width,height"),
        b = e,
        w = i.matrix,
        x = w.e,
        E = w.f,
        C =
          e.bounds.width !== y.width ||
          e.bounds.height !== y.height ||
          e.scaleX !== m ||
          e.scaleY !== p ||
          e.rotation !== g,
        k = !C && e.simple && i.simple && !s,
        $,
        T,
        M,
        _,
        S,
        O,
        L;
      return (
        k || !c
          ? ((m = p = 1), (g = $ = 0))
          : ((S = Q0(c)),
            (O = S.clone().multiply(
              i.ctm ? i.matrix.clone().multiply(i.ctm) : i.matrix
            )),
            (g = mr(Math.atan2(O.b, O.a) * jd)),
            ($ = mr(Math.atan2(O.c, O.d) * jd + g) % 360),
            (m = Math.sqrt(Math.pow(O.a, 2) + Math.pow(O.b, 2))),
            (p =
              Math.sqrt(Math.pow(O.c, 2) + Math.pow(O.d, 2)) *
              Math.cos($ * U0)),
            s &&
              ((s = pr(s)[0]),
              (_ = ot.getProperty(s)),
              (L = s.getBBox && typeof s.getBBox == "function" && s.getBBox()),
              (b = {
                scaleX: _("scaleX"),
                scaleY: _("scaleY"),
                width: L ? L.width : Math.ceil(parseFloat(_("width", "px"))),
                height: L ? L.height : parseFloat(_("height", "px")),
              })),
            (l.rotation = g + "deg"),
            (l.skewX = $ + "deg")),
        n
          ? ((m *= f === b.width || !b.width ? 1 : f / b.width),
            (p *= h === b.height || !b.height ? 1 : h / b.height),
            (l.scaleX = m),
            (l.scaleY = p))
          : ((f = Mi((f * m) / b.scaleX, 0)),
            (h = Mi((h * p) / b.scaleY, 0)),
            (o.style.width = f + "px"),
            (o.style.height = h + "px")),
        r && rf(o, i.props),
        k || !c
          ? ((u += x - e.matrix.e), (d += E - e.matrix.f))
          : C || c !== i.parent
          ? (l.renderTransform(1, l),
            (O = mi(s || o, !1, !1, !0)),
            (T = S.apply({ x: O.e, y: O.f })),
            (M = S.apply({ x, y: E })),
            (u += M.x - T.x),
            (d += M.y - T.y))
          : ((S.e = S.f = 0),
            (M = S.apply({ x: x - e.matrix.e, y: E - e.matrix.f })),
            (u += M.x),
            (d += M.y)),
        (u = Mi(u, 0.02)),
        (d = Mi(d, 0.02)),
        a && !(a instanceof Dn)
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
    Ol = function (e, i) {
      return e instanceof Kt ? e : new Kt(e, i);
    },
    of = function (e, i, n) {
      var r = e.idLookup[n],
        s = e.alt[n];
      return s.isVisible &&
        (!(i.getElementState(s.element) || s).isVisible || !r.isVisible)
        ? s
        : r;
    },
    Ll = [],
    zl = "width,height,overflowX,overflowY".split(","),
    Ta,
    lf = function (e) {
      if (e !== Ta) {
        var i = en.style,
          n = en.clientWidth === window.outerWidth,
          r = en.clientHeight === window.outerHeight,
          s = 4;
        if (e && (n || r)) {
          for (; s--; ) Ll[s] = i[zl[s]];
          n && ((i.width = en.clientWidth + "px"), (i.overflowY = "hidden")),
            r &&
              ((i.height = en.clientHeight + "px"), (i.overflowX = "hidden")),
            (Ta = e);
        } else if (Ta) {
          for (; s--; )
            Ll[s] ? (i[zl[s]] = Ll[s]) : i.removeProperty(Kd(zl[s]));
          Ta = e;
        }
      }
    },
    Dl = function (e, i, n, r) {
      e instanceof Kt && i instanceof Kt, (n = n || {});
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
        y = s.toggleClass,
        v = s.nested,
        b = s.zIndex,
        w = s.scale,
        x = s.fade,
        E = s.stagger,
        C = s.spin,
        k = s.prune,
        $ = ("props" in n ? n : e).props,
        T = gr(n, Zd),
        M = ot.timeline({
          delay: f,
          paused: h,
          repeat: m,
          repeatDelay: p,
          yoyo: g,
          data: "isFlip",
        }),
        _ = T,
        S = [],
        O = [],
        L = [],
        A = [],
        z = C === !0 ? 1 : C || 0,
        D =
          typeof C == "function"
            ? C
            : function () {
                return z;
              },
        B = e.interrupted || i.interrupted,
        P = M[r !== 1 ? "to" : "from"],
        q,
        X,
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
      for (X in i.idLookup)
        (fe = i.alt[X] ? of(i, e, X) : i.idLookup[X]),
          (Z = fe.element),
          ($e = e.idLookup[X]),
          e.alt[X] &&
            Z === $e.element &&
            (e.alt[X].isVisible || !fe.isVisible) &&
            ($e = e.alt[X]),
          $e
            ? ((Q = {
                t: Z,
                b: $e,
                a: fe,
                sd: $e.element === Z ? 0 : fe.isVisible ? 1 : -1,
              }),
              L.push(Q),
              Q.sd &&
                (Q.sd < 0 && ((Q.b = fe), (Q.a = $e)),
                B && fs(Q.b, $ ? _a[$] : wa),
                x &&
                  L.push(
                    (Q.swap = {
                      t: $e.element,
                      b: Q.b,
                      a: Q.a,
                      sd: -Q.sd,
                      swap: Q,
                    })
                  )),
              (Z._flip = $e.element._flip = be ? be.timeline : M))
            : fe.isVisible &&
              (L.push({
                t: Z,
                b: gr(fe, { isVisible: 1 }),
                a: fe,
                sd: 0,
                entering: 1,
              }),
              (Z._flip = be ? be.timeline : M));
      if (
        ($ &&
          (Al[$] || Jd($)).forEach(function (I) {
            return (T[I] = function (ze) {
              return L[ze].a.props[I];
            });
          }),
        (L.finalStates = Te = []),
        (Ee = function () {
          for (xa(L), lf(!0), ne = 0; ne < L.length; ne++)
            (Q = L[ne]),
              (Y = Q.a),
              (te = Q.b),
              k && !Y.isDifferent(te) && !Q.entering
                ? L.splice(ne--, 1)
                : ((Z = Q.t),
                  v && !(Q.sd < 0) && ne && (Y.matrix = mi(Z, !1, !1, !0)),
                  te.isVisible && Y.isVisible
                    ? (Q.sd < 0
                        ? ((de = new Dn(Z, $, e.simple)),
                          vr(de, Y, w, 0, 0, de),
                          (de.matrix = mi(Z, !1, !1, !0)),
                          (de.css = Q.b.css),
                          (Q.a = Y = de),
                          x && (Z.style.opacity = B ? te.opacity : Y.opacity),
                          E && A.push(Z))
                        : Q.sd > 0 &&
                          x &&
                          (Z.style.opacity = B ? Y.opacity - te.opacity : "0"),
                      vr(Y, te, w, $))
                    : te.isVisible !== Y.isVisible &&
                      (te.isVisible
                        ? Y.isVisible ||
                          ((te.css = Y.css),
                          O.push(te),
                          L.splice(ne--, 1),
                          c && v && vr(Y, te, w, $))
                        : (Y.isVisible && S.push(Y), L.splice(ne--, 1))),
                  w ||
                    ((Z.style.maxWidth = Math.max(Y.width, te.width) + "px"),
                    (Z.style.maxHeight = Math.max(Y.height, te.height) + "px"),
                    (Z.style.minWidth = Math.min(Y.width, te.width) + "px"),
                    (Z.style.minHeight = Math.min(Y.height, te.height) + "px")),
                  v && y && Z.classList.add(y)),
              Te.push(Y);
          var ze;
          if (
            (y &&
              ((ze = Te.map(function (V) {
                return V.element;
              })),
              v &&
                ze.forEach(function (V) {
                  return V.classList.remove(y);
                })),
            lf(!1),
            w
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
                (T.autoRound = n.autoRound || !1)),
            (T.x = function (V) {
              return L[V].a.x + "px";
            }),
            (T.y = function (V) {
              return L[V].a.y + "px";
            }),
            (T.rotation = function (V) {
              return L[V].a.rotation + (C ? D(V, he[V], he) * 360 : 0);
            }),
            (T.skewX = function (V) {
              return L[V].a.skewX;
            }),
            (he = L.map(function (V) {
              return V.t;
            })),
            (b || b === 0) &&
              ((T.modifiers = {
                zIndex: function () {
                  return b;
                },
              }),
              (T.zIndex = b),
              (T.immediateRender = n.immediateRender !== !1)),
            x &&
              (T.opacity = function (V) {
                return L[V].sd < 0 ? 0 : L[V].sd > 0 ? L[V].a.opacity : "+=0";
              }),
            A.length)
          ) {
            E = ot.utils.distribute(E);
            var Jt = he.slice(A.length);
            T.stagger = function (V, jt) {
              return E(~A.indexOf(jt) ? he.indexOf(L[V].swap.t) : V, jt, Jt);
            };
          }
          if (
            (Z0.forEach(function (V) {
              return n[V] && M.eventCallback(V, n[V], n[V + "Params"]);
            }),
            d && he.length)
          ) {
            (_ = gr(T, Zd)),
              "scale" in d && ((d.scaleX = d.scaleY = d.scale), delete d.scale);
            for (X in d)
              (q = gr(d[X], Qd)),
                (q[X] = T[X]),
                !("duration" in q) &&
                  "duration" in T &&
                  (q.duration = T.duration),
                (q.stagger = T.stagger),
                P.call(M, he, q, 0),
                delete _[X];
          }
          (he.length || O.length || S.length) &&
            (y &&
              M.add(function () {
                return kl(ze, y, M._zTime < 0 ? "remove" : "add");
              }, 0) &&
              !h &&
              kl(ze, y, "add"),
            he.length && P.call(M, he, _, 0)),
            af(o, S, M),
            af(l, O, M);
          var Xt = be && be.timeline;
          Xt &&
            (Xt.add(M, 0),
            be._final.push(function () {
              return ef(L, !a);
            })),
            (oe = M.duration()),
            M.call(function () {
              var V = M.time() >= oe;
              V && !Xt && ef(L, !a), y && kl(ze, y, V ? "remove" : "add");
            });
        }),
        u &&
          (c = L.filter(function (I) {
            return !I.sd && !I.a.isVisible && I.b.isVisible;
          }).map(function (I) {
            return I.a.element;
          })),
        be)
      ) {
        var Oe;
        c && (Oe = be._abs).push.apply(Oe, tf(L, c)), be._run.push(Ee);
      } else c && nf(tf(L, c)), Ee();
      var Le = be ? be.timeline : M;
      return (
        (Le.revert = function () {
          return Il(Le, 1, 1);
        }),
        Le
      );
    },
    iv = function t(e) {
      e.vars.onInterrupt &&
        e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []),
        e.getChildren(!0, !1, !0).forEach(t);
    },
    Il = function (e, i, n) {
      if (e && e.progress() < 1 && (!e.paused() || n))
        return i && (iv(e), i < 2 && e.progress(1), e.kill()), !0;
    },
    Ea = function (e) {
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
          (this.targets = sf(i)), (this.elementStates = i), Ea(this);
        else {
          this.targets = pr(i);
          var s = n && (n.kill === !1 || (n.batch && !n.kill));
          be && !s && be._kill.push(this), this.update(s || !!be);
        }
      }
      var e = t.prototype;
      return (
        (e.update = function (n) {
          var r = this;
          return (
            (this.elementStates = this.targets.map(function (s) {
              return new Dn(s, r.props, r.simple);
            })),
            Ea(this),
            this.interrupt(n),
            this.recordInlineStyles(),
            this
          );
        }),
        (e.clear = function () {
          return (
            (this.targets.length = this.elementStates.length = 0),
            Ea(this),
            this
          );
        }),
        (e.fit = function (n, r, s) {
          for (
            var a = xa(this.elementStates.slice(0), !1, !0),
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
          var s = this.getElementState(n) || ba;
          return (r in s ? s : s.props || ba)[r];
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
            Ea(this),
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
            h = function (k, $, T) {
              return (
                (k.isVisible !== $.isVisible
                  ? k.isVisible
                    ? l
                    : c
                  : k.isVisible
                  ? o
                  : a
                ).push(T) && u.push(T)
              );
            },
            m = function (k, $, T) {
              return u.indexOf(T) < 0 && h(k, $, T);
            },
            p,
            g,
            y,
            v,
            b,
            w,
            x,
            E;
          for (y in r)
            (b = d[y]),
              (w = f[y]),
              (p = b ? of(n, this, y) : r[y]),
              (v = p.element),
              (g = s[y]),
              w
                ? ((E =
                    g.isVisible || (!w.isVisible && v === g.element) ? g : w),
                  (x =
                    b && !p.isVisible && !b.isVisible && E.element === b.element
                      ? b
                      : p),
                  x.isVisible && E.isVisible && x.element !== E.element
                    ? ((x.isDifferent(E) ? o : a).push(x.element, E.element),
                      u.push(x.element, E.element))
                    : h(x, E, x.element),
                  b && x.element === b.element && (b = r[y]),
                  m(x.element !== g.element && b ? b : x, g, g.element),
                  m(b && b.element === w.element ? b : x, w, w.element),
                  b && m(b, w.element === b.element ? w : g, b.element))
                : (g ? (g.isDifferent(p) ? h(p, g, v) : a.push(v)) : l.push(v),
                  b && m(b, g, b.element));
          for (y in s)
            r[y] || (c.push(s[y].element), f[y] && c.push(f[y].element));
          return { changed: o, unchanged: a, enter: l, leave: c };
        }),
        (e.recordInlineStyles = function () {
          for (
            var n = _a[this.props] || wa, r = this.elementStates.length;
            r--;

          )
            fs(this.elementStates[r], n);
        }),
        (e.interrupt = function (n) {
          var r = this,
            s = [];
          this.targets.forEach(function (a) {
            var o = a._flip,
              l = Il(o, n ? 0 : 1);
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
          return this.elementStates[this.targets.indexOf(ds(n))];
        }),
        (e.makeAbsolute = function () {
          return xa(this.elementStates.slice(0), !0, !0).map(Ml);
        }),
        t
      );
    })(),
    Dn = (function () {
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
              ? new zn(1, 0, 0, 1, c.left + _l(), c.top + bl())
              : mi(a, !1, !1, !0);
          (l.uncache = 1),
            (s.getProp = o),
            (s.element = a),
            (s.id = tv(a)),
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
            n && ev(s, Al[n] || Jd(n)),
            (s.ctm =
              a.getCTM &&
              a.nodeName.toLowerCase() === "svg" &&
              Gd(a).inverse()),
            (s.simple =
              r || (mr(d.a) === 1 && !mr(d.b) && !mr(d.c) && mr(d.d) === 1)),
            (s.uncache = 0);
        }),
        t
      );
    })(),
    nv = (function () {
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
    rv = (function () {
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
            : ((r = new nv(typeof n == "function" ? { animate: n } : n, this)),
              this.actions.push(r),
              r);
        }),
        (e.remove = function (n) {
          var r = this.actions.indexOf(n);
          return r >= 0 && this.actions.splice(r, 1), this;
        }),
        (e.getState = function (n) {
          var r = this,
            s = be,
            a = us;
          return (
            (be = this),
            this.state.clear(),
            (this._kill.length = 0),
            this.actions.forEach(function (o) {
              o.vars.getState &&
                ((o.states.length = 0),
                (us = o),
                (o.state = o.vars.getState(o))),
                n &&
                  o.states.forEach(function (l) {
                    return r.state.add(l);
                  });
            }),
            (us = a),
            (be = s),
            this.killConflicts(),
            this
          );
        }),
        (e.animate = function () {
          var n = this,
            r = be,
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
              nf(this._abs),
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
                  Xd(n, "onComplete"));
              }),
              be = r;
            a--;

          )
            this.actions[a].vars.once && this.actions[a].kill();
          return Xd(this, "onStart"), s.restart(), this;
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
            this !== be &&
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
          (this._killed = 1), this.clear(), delete El[this.id];
        }),
        t
      );
    })(),
    yr = (function () {
      function t() {}
      return (
        (t.getState = function (i, n) {
          var r = Ol(i, n);
          return (
            us && us.states.push(r),
            n && n.batch && t.batch(n.batch).state.add(r),
            r
          );
        }),
        (t.from = function (i, n) {
          return (
            (n = n || {}),
            "clearProps" in n || (n.clearProps = !0),
            Dl(
              i,
              Ol(n.targets || i.targets, {
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
          return Dl(
            i,
            Ol(n.targets || i.targets, {
              props: n.props || i.props,
              simple: n.simple,
              kill: !!n.kill,
            }),
            n,
            1
          );
        }),
        (t.fromTo = function (i, n, r) {
          return Dl(i, n, r);
        }),
        (t.fit = function (i, n, r) {
          var s = r ? gr(r, Qd) : {},
            a = r || s,
            o = a.absolute,
            l = a.scale,
            c = a.getVars,
            u = a.props,
            d = a.runBackwards,
            f = a.onComplete,
            h = a.simple,
            m = r && r.fitChild && ds(r.fitChild),
            p = $l(n, u, h, i),
            g = $l(i, 0, h, p),
            y = u ? _a[u] : wa,
            v = ot.context();
          return (
            u && rf(s, p.props),
            fs(g, y),
            d &&
              ("immediateRender" in s || (s.immediateRender = !0),
              (s.onComplete = function () {
                Sa(g), f && f.apply(this, arguments);
              })),
            o && Ml(g, p),
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
                  return Sa(g);
                };
              }),
            c ? s : s.duration ? ot.to(g.element, s) : null
          );
        }),
        (t.makeAbsolute = function (i, n) {
          return (i instanceof Kt ? i : new Kt(i, n)).makeAbsolute();
        }),
        (t.batch = function (i) {
          return i || (i = "default"), El[i] || (El[i] = new rv(i));
        }),
        (t.killFlipsOf = function (i, n) {
          (i instanceof Kt ? i.targets : pr(i)).forEach(function (r) {
            return r && Il(r._flip, n !== !1 ? 1 : 2);
          });
        }),
        (t.isFlipping = function (i) {
          var n = t.getByTarget(i);
          return !!n && n.isActive();
        }),
        (t.getByTarget = function (i) {
          return (ds(i) || ba)._flip;
        }),
        (t.getElementState = function (i, n) {
          return new Dn(ds(i), n);
        }),
        (t.convertCoordinates = function (i, n, r) {
          var s = mi(n, !0, !0).multiply(mi(i));
          return r ? s.apply(r) : s;
        }),
        (t.register = function (i) {
          if (((en = typeof document < "u" && document.body), en)) {
            (ot = i),
              yl(en),
              (pr = ot.utils.toArray),
              (Tl = ot.core.getStyleSaver);
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
  const sv = () => {
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
      a.addEventListener("click", c), a.addEventListener("click", () => {});
    },
    av = () => {
      sv();
    },
    ov = () => {
      V0(), Zi(), dl(), Qi(), av(), cc(), Mn().add(() => Ki(), "-=1");
    };
  R.registerPlugin(ye);
  const lv = async (t) => {
      await document.fonts.ready;
      const e = document.querySelector("[work-cms-hero='text']"),
        i = document.querySelector("[work-cms-hero='back-btn']"),
        n = document.querySelector("[work-cms-hero='line']"),
        r = document.querySelector("[work-cms-hero='info']"),
        s = document.querySelector("[work-cms-hero='info-title']"),
        a = document.querySelector("[work-cms-hero='info-text']"),
        o = document.querySelector("[work-cms-hero='info-meta']"),
        l = document.querySelectorAll("[work-cms-hero='tag']"),
        c = document.querySelectorAll("[work-cms-hero='visual']"),
        u = document.querySelector("[work-cms-hero='bg'] img");
      e &&
        ye.create(e, {
          type: "chars, lines, words",
          autoSplit: !0,
          mask: "lines",
          linesClass: "work-cms-hero-text-line",
          tag: "div",
          onSplit(d) {
            ye.create(s, {
              type: "lines",
              autoSplit: !0,
              mask: "lines",
              linesClass: "work-cms-info-title-line",
              tag: "div",
              onSplit(f) {
                ye.create(a, {
                  type: "lines",
                  autoSplit: !0,
                  mask: "lines",
                  linesClass: "work-cms-info-text-line",
                  tag: "div",
                  onSplit(h) {
                    ye.create(o, {
                      type: "lines",
                      autoSplit: !0,
                      mask: "lines",
                      linesClass: "work-cms-info-meta-line",
                      tag: "div",
                      onSplit(m) {
                        d.lines.forEach((y) => {
                          const v = document.createElement("div");
                          v.classList.add("move-text-main"),
                            (v.style.overflow = "clip"),
                            (v.style.position = "relative"),
                            y.parentNode.insertBefore(v, y),
                            v.appendChild(y);
                        }),
                          f.lines.forEach((y) => {
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
                          const b = y.querySelectorAll("span");
                          b.length &&
                            b.forEach((w) => {
                              const x = document.createElement("div");
                              (x.style.overflow = "clip"),
                                (x.style.position = "relative"),
                                (x.style.paddingBottom = "3px"),
                                w.parentNode.insertBefore(x, w),
                                x.appendChild(w);
                            });
                        };
                        p(e), p(s), p(a), p(o);
                        const g = R.timeline();
                        return (
                          R.set(d.chars, { opacity: 0, yPercent: 100 }),
                          R.set(i, { opacity: 0, yPercent: 100 }),
                          R.set(l, {
                            opacity: 0,
                            y: 50,
                            scale: 0.4,
                            transformOrigin: "center right",
                          }),
                          R.set(n, {
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
                            d.chars,
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
                          g.to(n, { opacity: 1, duration: 0 }, "<"),
                          g.to(
                            n,
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
    },
    cv = {
      home: Td,
      about: h0,
      work: O0,
      contact: A0,
      career: M0,
      "extra-page": Td,
      service: H0,
      work_cms: () => {
        Zi(), Qi();
        const t = Mn();
        t.add(() => Ki(), "-=1.4"), t.add(() => lv(), "-=1.4");
      },
      seo: ov,
    },
    uv = () => {
      const t = document.querySelector("[page-route]");
      if (!t) return;
      const e = t.getAttribute("page-route"),
        i = cv[e];
      i && i();
    },
    dv = () => {
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
    fv = () => {
      dv();
    };
  class hv {
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
  const pv = (t) => {
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
                    });
              },
            },
            "<"
          ),
        o
      );
    },
    mv = () => {
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
              await pv(),
              (window.location.href = a);
          });
      });
    };
  R.registerPlugin(ye, G);
  const gv = {
    lines: { duration: 1.8, stagger: 0.08 },
    words: { duration: 0.6, stagger: 0.06 },
    chars: { duration: 0.4, stagger: 0.01 },
  };
  let Ca = [];
  const cf = () => {
      document.querySelectorAll("[split-text]").forEach((t) => {
        R.set(t, { autoAlpha: 1 });
        const e = t.getAttribute("split-text") || "lines",
          i =
            e === "lines"
              ? ["lines"]
              : e === "words"
              ? ["lines", "words"]
              : ["lines", "words", "chars"],
          n = ye.create(t, {
            type: i.join(", "),
            mask: "lines",
            autoSplit: !0,
            linesClass: "line",
            wordsClass: "word",
            charsClass: "letter",
            onSplit: function (r) {
              const s = r[e],
                a = gv[e];
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
        Ca.push(n);
      });
    },
    uf = () => {
      document.querySelectorAll("[split-text]").forEach((t) => {
        R.set(t, { autoAlpha: 1 });
        const e = ye.create(t, {
          type: "lines",
          autoSplit: !0,
          mask: "lines",
          onSplit(i) {
            return R.from(i.lines, {
              duration: 1.8,
              yPercent: 110,
              stagger: 0.1,
              ease: "expo.out",
              scrollTrigger: { trigger: t, start: "top 80%", once: !0 },
            });
          },
        });
        Ca.push(e);
      });
    },
    vv = () => {
      Ca.forEach((t) => {
        t && typeof t.revert == "function" && t.revert();
      }),
        (Ca = []),
        G.getAll().forEach((t) => t.kill());
    };
  let df;
  const yv = (t) => {
      clearTimeout(df),
        (df = setTimeout(() => {
          vv(),
            setTimeout(() => {
              t ? cf() : uf(), G.refresh();
            }, 100);
        }, 250));
    },
    bv = (t = !0) => {
      document.fonts.ready.then(() => {
        t ? cf() : uf(), window.addEventListener("resize", () => yv(t));
      });
    },
    _v = () => {
      R.set(".cursor", { xPercent: -50, yPercent: -50 });
      let t = R.quickTo(".cursor", "x", { duration: 0.6, ease: "power3" }),
        e = R.quickTo(".cursor", "y", { duration: 0.6, ease: "power3" });
      window.addEventListener("mousemove", (i) => {
        t(i.clientX), e(i.clientY);
      });
    },
    wv = () => {
      _v();
    },
    xv = () => {
      fv(), new hv(), Pd(), mv(), bv(), wv();
    };
  function Sv(t, e) {
    (t.prototype = Object.create(e.prototype)),
      (t.prototype.constructor = t),
      Rl(t, e);
  }
  function Rl(t, e) {
    return (
      (Rl = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (i, n) {
            return (i.__proto__ = n), i;
          }),
      Rl(t, e)
    );
  }
  var tn,
    Tv = function () {
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
  var ff = tn.off,
    Ev = (function () {
      function t(i) {
        (this.t = void 0), (this.t = i);
      }
      (t.getLevel = function () {
        return ff;
      }),
        (t.setLevel = function (i) {
          return (ff = tn[i]);
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
  function Cv(t) {
    return (
      !!t &&
      (typeof t == "object" || typeof t == "function") &&
      typeof t.then == "function"
    );
  }
  function kv(t, e) {
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
            n || (Cv(o) ? o.then(s, a) : s(o));
          });
        return r;
      }
    );
  }
  new ((function (t) {
    function e() {
      var n;
      return (
        ((n = t.call(this) || this).logger = new Ev("@barba/core")),
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
    Sv(e, t);
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
                return kv(o.fn, o.ctx).apply(void 0, [].slice.call(r, 1));
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
  })(Tv))(),
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
    R.registerPlugin(G);
  const hf = (t, e) => {
      let i;
      return function (...r) {
        const s = () => {
          clearTimeout(i), t(...r);
        };
        clearTimeout(i), (i = setTimeout(s, e));
      };
    },
    Av = hf(() => {
      if (ll()) return;
      const t = window.innerHeight;
      if (al(t)) return;
      ol(t);
      const e = $n();
      e && e.resize(), G.refresh();
    }, 250),
    Pv = () => {
      setTimeout(() => {
        const t = $n();
        t && t.resize(), G.refresh();
      }, 500);
    },
    Mv = () => {
      i0(),
        window.addEventListener("resize", Av),
        window.addEventListener("orientationchange", Pv);
      let t = window.innerHeight,
        e = window.innerWidth;
      const i = hf(() => {
        if (ll()) return;
        const n = window.innerHeight,
          r = Math.abs(n - t) > 100,
          s = Math.abs(window.innerWidth - e) > 100;
        if (r || s) {
          if (al(n)) {
            t = n;
            return;
          }
          ol(n);
          const a = $n();
          a && a.resize(), G.refresh(), (t = n), (e = window.innerWidth);
        }
      }, 100);
      window.addEventListener("resize", i);
    };
  document.addEventListener("DOMContentLoaded", () => {
    Mv(), xv(), uv(), Pd();
  });
})();
