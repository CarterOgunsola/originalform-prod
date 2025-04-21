var ju = Object.defineProperty;
var Wu = (Se, Ce, Ue) =>
  Ce in Se
    ? ju(Se, Ce, { enumerable: !0, configurable: !0, writable: !0, value: Ue })
    : (Se[Ce] = Ue);
var xi = (Se, Ce, Ue) => Wu(Se, typeof Ce != "symbol" ? Ce + "" : Ce, Ue);
(function (Se) {
  typeof define == "function" && define.amd ? define(Se) : Se();
})(function () {
  "use strict";
  var Se = document.createElement("style");
  (Se.textContent = `@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA);font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-pointer-events{touch-action:pan-y}.swiper-pointer-events.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper:after{content:"";position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper:after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper:after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:"next"}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:50%;background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:#00000040;position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:#0000001a}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:#00000080;border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-next+.swiper-slide,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-right,.swiper-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:"";background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-right,.swiper-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-creative .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}
/*$vite$:1*/`),
    document.head.appendChild(Se);
  /*! @vimeo/player v2.26.0 | (c) 2025 Vimeo | MIT License | https://github.com/vimeo/player.js */ function Ce(
    e,
    t
  ) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t &&
        (i = i.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function Ue(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Ce(Object(n), !0).forEach(function (i) {
            Wt(e, i, n[i]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ce(Object(n)).forEach(function (i) {
            Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
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
      i =
        Object.defineProperty ||
        function (_, x, $) {
          _[x] = $.value;
        },
      r = typeof Symbol == "function" ? Symbol : {},
      a = r.iterator || "@@iterator",
      s = r.asyncIterator || "@@asyncIterator",
      o = r.toStringTag || "@@toStringTag";
    function l(_, x, $) {
      return (
        Object.defineProperty(_, x, {
          value: $,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        _[x]
      );
    }
    try {
      l({}, "");
    } catch {
      l = function (x, $, I) {
        return (x[$] = I);
      };
    }
    function u(_, x, $, I) {
      var w = x && x.prototype instanceof f ? x : f,
        O = Object.create(w.prototype),
        z = new k(I || []);
      return i(O, "_invoke", { value: T(_, $, z) }), O;
    }
    function c(_, x, $) {
      try {
        return { type: "normal", arg: _.call(x, $) };
      } catch (I) {
        return { type: "throw", arg: I };
      }
    }
    e.wrap = u;
    var d = {};
    function f() {}
    function p() {}
    function g() {}
    var h = {};
    l(h, a, function () {
      return this;
    });
    var m = Object.getPrototypeOf,
      b = m && m(m(P([])));
    b && b !== t && n.call(b, a) && (h = b);
    var v = (g.prototype = f.prototype = Object.create(h));
    function y(_) {
      ["next", "throw", "return"].forEach(function (x) {
        l(_, x, function ($) {
          return this._invoke(x, $);
        });
      });
    }
    function E(_, x) {
      function $(w, O, z, L) {
        var R = c(_[w], _, O);
        if (R.type !== "throw") {
          var Y = R.arg,
            j = Y.value;
          return j && typeof j == "object" && n.call(j, "__await")
            ? x.resolve(j.__await).then(
                function (ae) {
                  $("next", ae, z, L);
                },
                function (ae) {
                  $("throw", ae, z, L);
                }
              )
            : x.resolve(j).then(
                function (ae) {
                  (Y.value = ae), z(Y);
                },
                function (ae) {
                  return $("throw", ae, z, L);
                }
              );
        }
        L(R.arg);
      }
      var I;
      i(this, "_invoke", {
        value: function (w, O) {
          function z() {
            return new x(function (L, R) {
              $(w, O, L, R);
            });
          }
          return (I = I ? I.then(z, z) : z());
        },
      });
    }
    function T(_, x, $) {
      var I = "suspendedStart";
      return function (w, O) {
        if (I === "executing") throw new Error("Generator is already running");
        if (I === "completed") {
          if (w === "throw") throw O;
          return M();
        }
        for ($.method = w, $.arg = O; ; ) {
          var z = $.delegate;
          if (z) {
            var L = S(z, $);
            if (L) {
              if (L === d) continue;
              return L;
            }
          }
          if ($.method === "next") $.sent = $._sent = $.arg;
          else if ($.method === "throw") {
            if (I === "suspendedStart") throw ((I = "completed"), $.arg);
            $.dispatchException($.arg);
          } else $.method === "return" && $.abrupt("return", $.arg);
          I = "executing";
          var R = c(_, x, $);
          if (R.type === "normal") {
            if (((I = $.done ? "completed" : "suspendedYield"), R.arg === d))
              continue;
            return { value: R.arg, done: $.done };
          }
          R.type === "throw" &&
            ((I = "completed"), ($.method = "throw"), ($.arg = R.arg));
        }
      };
    }
    function S(_, x) {
      var $ = x.method,
        I = _.iterator[$];
      if (I === void 0)
        return (
          (x.delegate = null),
          ($ === "throw" &&
            _.iterator.return &&
            ((x.method = "return"),
            (x.arg = void 0),
            S(_, x),
            x.method === "throw")) ||
            ($ !== "return" &&
              ((x.method = "throw"),
              (x.arg = new TypeError(
                "The iterator does not provide a '" + $ + "' method"
              )))),
          d
        );
      var w = c(I, _.iterator, x.arg);
      if (w.type === "throw")
        return (x.method = "throw"), (x.arg = w.arg), (x.delegate = null), d;
      var O = w.arg;
      return O
        ? O.done
          ? ((x[_.resultName] = O.value),
            (x.next = _.nextLoc),
            x.method !== "return" && ((x.method = "next"), (x.arg = void 0)),
            (x.delegate = null),
            d)
          : O
        : ((x.method = "throw"),
          (x.arg = new TypeError("iterator result is not an object")),
          (x.delegate = null),
          d);
    }
    function C(_) {
      var x = { tryLoc: _[0] };
      1 in _ && (x.catchLoc = _[1]),
        2 in _ && ((x.finallyLoc = _[2]), (x.afterLoc = _[3])),
        this.tryEntries.push(x);
    }
    function A(_) {
      var x = _.completion || {};
      (x.type = "normal"), delete x.arg, (_.completion = x);
    }
    function k(_) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        _.forEach(C, this),
        this.reset(!0);
    }
    function P(_) {
      if (_) {
        var x = _[a];
        if (x) return x.call(_);
        if (typeof _.next == "function") return _;
        if (!isNaN(_.length)) {
          var $ = -1,
            I = function w() {
              for (; ++$ < _.length; )
                if (n.call(_, $)) return (w.value = _[$]), (w.done = !1), w;
              return (w.value = void 0), (w.done = !0), w;
            };
          return (I.next = I);
        }
      }
      return { next: M };
    }
    function M() {
      return { value: void 0, done: !0 };
    }
    return (
      (p.prototype = g),
      i(v, "constructor", { value: g, configurable: !0 }),
      i(g, "constructor", { value: p, configurable: !0 }),
      (p.displayName = l(g, o, "GeneratorFunction")),
      (e.isGeneratorFunction = function (_) {
        var x = typeof _ == "function" && _.constructor;
        return (
          !!x && (x === p || (x.displayName || x.name) === "GeneratorFunction")
        );
      }),
      (e.mark = function (_) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(_, g)
            : ((_.__proto__ = g), l(_, o, "GeneratorFunction")),
          (_.prototype = Object.create(v)),
          _
        );
      }),
      (e.awrap = function (_) {
        return { __await: _ };
      }),
      y(E.prototype),
      l(E.prototype, s, function () {
        return this;
      }),
      (e.AsyncIterator = E),
      (e.async = function (_, x, $, I, w) {
        w === void 0 && (w = Promise);
        var O = new E(u(_, x, $, I), w);
        return e.isGeneratorFunction(x)
          ? O
          : O.next().then(function (z) {
              return z.done ? z.value : O.next();
            });
      }),
      y(v),
      l(v, o, "Generator"),
      l(v, a, function () {
        return this;
      }),
      l(v, "toString", function () {
        return "[object Generator]";
      }),
      (e.keys = function (_) {
        var x = Object(_),
          $ = [];
        for (var I in x) $.push(I);
        return (
          $.reverse(),
          function w() {
            for (; $.length; ) {
              var O = $.pop();
              if (O in x) return (w.value = O), (w.done = !1), w;
            }
            return (w.done = !0), w;
          }
        );
      }),
      (e.values = P),
      (k.prototype = {
        constructor: k,
        reset: function (_) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = void 0),
            this.tryEntries.forEach(A),
            !_)
          )
            for (var x in this)
              x.charAt(0) === "t" &&
                n.call(this, x) &&
                !isNaN(+x.slice(1)) &&
                (this[x] = void 0);
        },
        stop: function () {
          this.done = !0;
          var _ = this.tryEntries[0].completion;
          if (_.type === "throw") throw _.arg;
          return this.rval;
        },
        dispatchException: function (_) {
          if (this.done) throw _;
          var x = this;
          function $(R, Y) {
            return (
              (O.type = "throw"),
              (O.arg = _),
              (x.next = R),
              Y && ((x.method = "next"), (x.arg = void 0)),
              !!Y
            );
          }
          for (var I = this.tryEntries.length - 1; I >= 0; --I) {
            var w = this.tryEntries[I],
              O = w.completion;
            if (w.tryLoc === "root") return $("end");
            if (w.tryLoc <= this.prev) {
              var z = n.call(w, "catchLoc"),
                L = n.call(w, "finallyLoc");
              if (z && L) {
                if (this.prev < w.catchLoc) return $(w.catchLoc, !0);
                if (this.prev < w.finallyLoc) return $(w.finallyLoc);
              } else if (z) {
                if (this.prev < w.catchLoc) return $(w.catchLoc, !0);
              } else {
                if (!L)
                  throw new Error("try statement without catch or finally");
                if (this.prev < w.finallyLoc) return $(w.finallyLoc);
              }
            }
          }
        },
        abrupt: function (_, x) {
          for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
            var I = this.tryEntries[$];
            if (
              I.tryLoc <= this.prev &&
              n.call(I, "finallyLoc") &&
              this.prev < I.finallyLoc
            ) {
              var w = I;
              break;
            }
          }
          w &&
            (_ === "break" || _ === "continue") &&
            w.tryLoc <= x &&
            x <= w.finallyLoc &&
            (w = null);
          var O = w ? w.completion : {};
          return (
            (O.type = _),
            (O.arg = x),
            w
              ? ((this.method = "next"), (this.next = w.finallyLoc), d)
              : this.complete(O)
          );
        },
        complete: function (_, x) {
          if (_.type === "throw") throw _.arg;
          return (
            _.type === "break" || _.type === "continue"
              ? (this.next = _.arg)
              : _.type === "return"
              ? ((this.rval = this.arg = _.arg),
                (this.method = "return"),
                (this.next = "end"))
              : _.type === "normal" && x && (this.next = x),
            d
          );
        },
        finish: function (_) {
          for (var x = this.tryEntries.length - 1; x >= 0; --x) {
            var $ = this.tryEntries[x];
            if ($.finallyLoc === _)
              return this.complete($.completion, $.afterLoc), A($), d;
          }
        },
        catch: function (_) {
          for (var x = this.tryEntries.length - 1; x >= 0; --x) {
            var $ = this.tryEntries[x];
            if ($.tryLoc === _) {
              var I = $.completion;
              if (I.type === "throw") {
                var w = I.arg;
                A($);
              }
              return w;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (_, x, $) {
          return (
            (this.delegate = { iterator: P(_), resultName: x, nextLoc: $ }),
            this.method === "next" && (this.arg = void 0),
            d
          );
        },
      }),
      e
    );
  }
  function Ti(e, t, n, i, r, a, s) {
    try {
      var o = e[a](s),
        l = o.value;
    } catch (u) {
      n(u);
      return;
    }
    o.done ? t(l) : Promise.resolve(l).then(i, r);
  }
  function Qe(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (i, r) {
        var a = e.apply(t, n);
        function s(l) {
          Ti(a, i, r, s, o, "next", l);
        }
        function o(l) {
          Ti(a, i, r, s, o, "throw", l);
        }
        s(void 0);
      });
    };
  }
  function Ei(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function ma(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, Ci(i.key), i);
    }
  }
  function wi(e, t, n) {
    return (
      t && ma(e.prototype, t),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function Wt(e, t, n) {
    return (
      (t = Ci(t)),
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
  function ga(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      t && Mt(e, t);
  }
  function At(e) {
    return (
      (At = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (n) {
            return n.__proto__ || Object.getPrototypeOf(n);
          }),
      At(e)
    );
  }
  function Mt(e, t) {
    return (
      (Mt = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (i, r) {
            return (i.__proto__ = r), i;
          }),
      Mt(e, t)
    );
  }
  function Si() {
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
  function Ut(e, t, n) {
    return (
      Si()
        ? (Ut = Reflect.construct.bind())
        : (Ut = function (r, a, s) {
            var o = [null];
            o.push.apply(o, a);
            var l = Function.bind.apply(r, o),
              u = new l();
            return s && Mt(u, s.prototype), u;
          }),
      Ut.apply(null, arguments)
    );
  }
  function va(e) {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  }
  function _n(e) {
    var t = typeof Map == "function" ? new Map() : void 0;
    return (
      (_n = function (i) {
        if (i === null || !va(i)) return i;
        if (typeof i != "function")
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (typeof t < "u") {
          if (t.has(i)) return t.get(i);
          t.set(i, r);
        }
        function r() {
          return Ut(i, arguments, At(this).constructor);
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
          Mt(r, i)
        );
      }),
      _n(e)
    );
  }
  function Qt(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function ya(e, t) {
    if (t && (typeof t == "object" || typeof t == "function")) return t;
    if (t !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return Qt(e);
  }
  function ba(e) {
    var t = Si();
    return function () {
      var i = At(e),
        r;
      if (t) {
        var a = At(this).constructor;
        r = Reflect.construct(i, arguments, a);
      } else r = i.apply(this, arguments);
      return ya(this, r);
    };
  }
  function _a(e, t) {
    if (typeof e != "object" || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var i = n.call(e, t);
      if (typeof i != "object") return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e);
  }
  function Ci(e) {
    var t = _a(e, "string");
    return typeof t == "symbol" ? t : String(t);
  }
  var Ai =
    typeof global < "u" && {}.toString.call(global) === "[object global]";
  function Mi(e, t) {
    return e.indexOf(t.toLowerCase()) === 0
      ? e
      : ""
          .concat(t.toLowerCase())
          .concat(e.substr(0, 1).toUpperCase())
          .concat(e.substr(1));
  }
  function xa(e) {
    return !!(
      e &&
      e.nodeType === 1 &&
      "nodeName" in e &&
      e.ownerDocument &&
      e.ownerDocument.defaultView
    );
  }
  function Ta(e) {
    return !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e;
  }
  function Ze(e) {
    return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(
      e
    );
  }
  function Pi(e) {
    var t =
      /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
    return t.test(e);
  }
  function Ea(e) {
    for (
      var t = (e || "").match(/^(?:https?:)?(?:\/\/)?([^/?]+)/),
        n = ((t && t[1]) || "").replace("player.", ""),
        i = [".videoji.hk", ".vimeo.work", ".videoji.cn"],
        r = 0,
        a = i;
      r < a.length;
      r++
    ) {
      var s = a[r];
      if (n.endsWith(s)) return n;
    }
    return "vimeo.com";
  }
  function ki() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.id,
      n = e.url,
      i = t || n;
    if (!i)
      throw new Error(
        "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
      );
    if (Ta(i)) return "https://vimeo.com/".concat(i);
    if (Ze(i)) return i.replace("http:", "https:");
    throw t
      ? new TypeError("“".concat(t, "” is not a valid video id."))
      : new TypeError("“".concat(i, "” is not a vimeo.com url."));
  }
  var $i = function (t, n, i) {
      var r =
          arguments.length > 3 && arguments[3] !== void 0
            ? arguments[3]
            : "addEventListener",
        a =
          arguments.length > 4 && arguments[4] !== void 0
            ? arguments[4]
            : "removeEventListener",
        s = typeof n == "string" ? [n] : n;
      return (
        s.forEach(function (o) {
          t[r](o, i);
        }),
        {
          cancel: function () {
            return s.forEach(function (l) {
              return t[a](l, i);
            });
          },
        }
      );
    },
    wa = typeof Array.prototype.indexOf < "u",
    Sa = typeof window < "u" && typeof window.postMessage < "u";
  if (!Ai && (!wa || !Sa))
    throw new Error(
      "Sorry, the Vimeo Player API is not available in this browser."
    );
  var ct =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
  function Ca(e, t) {
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
          } catch {}
        })(),
      i = function (a, s, o) {
        n
          ? Object.defineProperty(a, s, {
              configurable: !0,
              writable: !0,
              value: o,
            })
          : (a[s] = o);
      };
    e.WeakMap = (function () {
      function a() {
        if (this === void 0)
          throw new TypeError("Constructor WeakMap requires 'new'");
        if ((i(this, "_id", o("_WeakMap")), arguments.length > 0))
          throw new TypeError("WeakMap iterable is not supported");
      }
      i(a.prototype, "delete", function (u) {
        if ((s(this, "delete"), !r(u))) return !1;
        var c = u[this._id];
        return c && c[0] === u ? (delete u[this._id], !0) : !1;
      }),
        i(a.prototype, "get", function (u) {
          if ((s(this, "get"), !!r(u))) {
            var c = u[this._id];
            if (c && c[0] === u) return c[1];
          }
        }),
        i(a.prototype, "has", function (u) {
          if ((s(this, "has"), !r(u))) return !1;
          var c = u[this._id];
          return !!(c && c[0] === u);
        }),
        i(a.prototype, "set", function (u, c) {
          if ((s(this, "set"), !r(u)))
            throw new TypeError("Invalid value used as weak map key");
          var d = u[this._id];
          return d && d[0] === u
            ? ((d[1] = c), this)
            : (i(u, this._id, [u, c]), this);
        });
      function s(u, c) {
        if (!r(u) || !t.call(u, "_id"))
          throw new TypeError(
            c + " method called on incompatible receiver " + typeof u
          );
      }
      function o(u) {
        return u + "_" + l() + "." + l();
      }
      function l() {
        return Math.random().toString().substring(2);
      }
      return i(a, "_polyfill", !0), a;
    })();
    function r(a) {
      return Object(a) === a;
    }
  })(
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : ct
  );
  var Te = Ca(function (e) {
      /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/ (function (n, i, r) {
        (i[n] = i[n] || r()), e.exports && (e.exports = i[n]);
      })("Promise", ct, function () {
        var n,
          i,
          r,
          a = Object.prototype.toString,
          s =
            typeof setImmediate < "u"
              ? function (y) {
                  return setImmediate(y);
                }
              : setTimeout;
        try {
          Object.defineProperty({}, "x", {}),
            (n = function (y, E, T, S) {
              return Object.defineProperty(y, E, {
                value: T,
                writable: !0,
                configurable: S !== !1,
              });
            });
        } catch {
          n = function (E, T, S) {
            return (E[T] = S), E;
          };
        }
        r = (function () {
          var y, E, T;
          function S(C, A) {
            (this.fn = C), (this.self = A), (this.next = void 0);
          }
          return {
            add: function (A, k) {
              (T = new S(A, k)),
                E ? (E.next = T) : (y = T),
                (E = T),
                (T = void 0);
            },
            drain: function () {
              var A = y;
              for (y = E = i = void 0; A; ) A.fn.call(A.self), (A = A.next);
            },
          };
        })();
        function o(v, y) {
          r.add(v, y), i || (i = s(r.drain));
        }
        function l(v) {
          var y,
            E = typeof v;
          return (
            v != null && (E == "object" || E == "function") && (y = v.then),
            typeof y == "function" ? y : !1
          );
        }
        function u() {
          for (var v = 0; v < this.chain.length; v++)
            c(
              this,
              this.state === 1 ? this.chain[v].success : this.chain[v].failure,
              this.chain[v]
            );
          this.chain.length = 0;
        }
        function c(v, y, E) {
          var T, S;
          try {
            y === !1
              ? E.reject(v.msg)
              : (y === !0 ? (T = v.msg) : (T = y.call(void 0, v.msg)),
                T === E.promise
                  ? E.reject(TypeError("Promise-chain cycle"))
                  : (S = l(T))
                  ? S.call(T, E.resolve, E.reject)
                  : E.resolve(T));
          } catch (C) {
            E.reject(C);
          }
        }
        function d(v) {
          var y,
            E = this;
          if (!E.triggered) {
            (E.triggered = !0), E.def && (E = E.def);
            try {
              (y = l(v))
                ? o(function () {
                    var T = new g(E);
                    try {
                      y.call(
                        v,
                        function () {
                          d.apply(T, arguments);
                        },
                        function () {
                          f.apply(T, arguments);
                        }
                      );
                    } catch (S) {
                      f.call(T, S);
                    }
                  })
                : ((E.msg = v), (E.state = 1), E.chain.length > 0 && o(u, E));
            } catch (T) {
              f.call(new g(E), T);
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
            y.chain.length > 0 && o(u, y));
        }
        function p(v, y, E, T) {
          for (var S = 0; S < y.length; S++)
            (function (A) {
              v.resolve(y[A]).then(function (P) {
                E(A, P);
              }, T);
            })(S);
        }
        function g(v) {
          (this.def = v), (this.triggered = !1);
        }
        function h(v) {
          (this.promise = v),
            (this.state = 0),
            (this.triggered = !1),
            (this.chain = []),
            (this.msg = void 0);
        }
        function m(v) {
          if (typeof v != "function") throw TypeError("Not a function");
          if (this.__NPO__ !== 0) throw TypeError("Not a promise");
          this.__NPO__ = 1;
          var y = new h(this);
          (this.then = function (T, S) {
            var C = {
              success: typeof T == "function" ? T : !0,
              failure: typeof S == "function" ? S : !1,
            };
            return (
              (C.promise = new this.constructor(function (k, P) {
                if (typeof k != "function" || typeof P != "function")
                  throw TypeError("Not a function");
                (C.resolve = k), (C.reject = P);
              })),
              y.chain.push(C),
              y.state !== 0 && o(u, y),
              C.promise
            );
          }),
            (this.catch = function (T) {
              return this.then(void 0, T);
            });
          try {
            v.call(
              void 0,
              function (T) {
                d.call(y, T);
              },
              function (T) {
                f.call(y, T);
              }
            );
          } catch (E) {
            f.call(y, E);
          }
        }
        var b = n({}, "constructor", m, !1);
        return (
          (m.prototype = b),
          n(b, "__NPO__", 0, !1),
          n(m, "resolve", function (y) {
            var E = this;
            return y && typeof y == "object" && y.__NPO__ === 1
              ? y
              : new E(function (S, C) {
                  if (typeof S != "function" || typeof C != "function")
                    throw TypeError("Not a function");
                  S(y);
                });
          }),
          n(m, "reject", function (y) {
            return new this(function (T, S) {
              if (typeof T != "function" || typeof S != "function")
                throw TypeError("Not a function");
              S(y);
            });
          }),
          n(m, "all", function (y) {
            var E = this;
            return a.call(y) != "[object Array]"
              ? E.reject(TypeError("Not an array"))
              : y.length === 0
              ? E.resolve([])
              : new E(function (S, C) {
                  if (typeof S != "function" || typeof C != "function")
                    throw TypeError("Not a function");
                  var A = y.length,
                    k = Array(A),
                    P = 0;
                  p(
                    E,
                    y,
                    function (_, x) {
                      (k[_] = x), ++P === A && S(k);
                    },
                    C
                  );
                });
          }),
          n(m, "race", function (y) {
            var E = this;
            return a.call(y) != "[object Array]"
              ? E.reject(TypeError("Not an array"))
              : new E(function (S, C) {
                  if (typeof S != "function" || typeof C != "function")
                    throw TypeError("Not a function");
                  p(
                    E,
                    y,
                    function (k, P) {
                      S(P);
                    },
                    C
                  );
                });
          }),
          m
        );
      });
    }),
    ze = new WeakMap();
  function Pt(e, t, n) {
    var i = ze.get(e.element) || {};
    t in i || (i[t] = []), i[t].push(n), ze.set(e.element, i);
  }
  function Zt(e, t) {
    var n = ze.get(e.element) || {};
    return n[t] || [];
  }
  function Kt(e, t, n) {
    var i = ze.get(e.element) || {};
    if (!i[t]) return !0;
    if (!n) return (i[t] = []), ze.set(e.element, i), !0;
    var r = i[t].indexOf(n);
    return (
      r !== -1 && i[t].splice(r, 1),
      ze.set(e.element, i),
      i[t] && i[t].length === 0
    );
  }
  function Aa(e, t) {
    var n = Zt(e, t);
    if (n.length < 1) return !1;
    var i = n.shift();
    return Kt(e, t, i), i;
  }
  function Ma(e, t) {
    var n = ze.get(e);
    ze.set(t, n), ze.delete(e);
  }
  function Jt(e) {
    if (typeof e == "string")
      try {
        e = JSON.parse(e);
      } catch (t) {
        return console.warn(t), {};
      }
    return e;
  }
  function Ke(e, t, n) {
    if (!(!e.element.contentWindow || !e.element.contentWindow.postMessage)) {
      var i = { method: t };
      n !== void 0 && (i.value = n);
      var r = parseFloat(
        navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1")
      );
      r >= 8 && r < 10 && (i = JSON.stringify(i)),
        e.element.contentWindow.postMessage(i, e.origin);
    }
  }
  function Pa(e, t) {
    t = Jt(t);
    var n = [],
      i;
    if (t.event) {
      if (t.event === "error") {
        var r = Zt(e, t.data.method);
        r.forEach(function (s) {
          var o = new Error(t.data.message);
          (o.name = t.data.name), s.reject(o), Kt(e, t.data.method, s);
        });
      }
      (n = Zt(e, "event:".concat(t.event))), (i = t.data);
    } else if (t.method) {
      var a = Aa(e, t.method);
      a && (n.push(a), (i = t.value));
    }
    n.forEach(function (s) {
      try {
        if (typeof s == "function") {
          s.call(e, i);
          return;
        }
        s.resolve(i);
      } catch {}
    });
  }
  var ka = [
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
  function Oi(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return ka.reduce(function (n, i) {
      var r = e.getAttribute("data-vimeo-".concat(i));
      return (r || r === "") && (n[i] = r === "" ? 1 : r), n;
    }, t);
  }
  function xn(e, t) {
    var n = e.html;
    if (!t) throw new TypeError("An element must be provided");
    if (t.getAttribute("data-vimeo-initialized") !== null)
      return t.querySelector("iframe");
    var i = document.createElement("div");
    return (
      (i.innerHTML = n),
      t.appendChild(i.firstChild),
      t.setAttribute("data-vimeo-initialized", "true"),
      t.querySelector("iframe")
    );
  }
  function zi(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = arguments.length > 2 ? arguments[2] : void 0;
    return new Promise(function (i, r) {
      if (!Ze(e))
        throw new TypeError("“".concat(e, "” is not a vimeo.com url."));
      var a = Ea(e),
        s = "https://"
          .concat(a, "/api/oembed.json?url=")
          .concat(encodeURIComponent(e));
      for (var o in t)
        t.hasOwnProperty(o) &&
          (s += "&".concat(o, "=").concat(encodeURIComponent(t[o])));
      var l =
        "XDomainRequest" in window
          ? new XDomainRequest()
          : new XMLHttpRequest();
      l.open("GET", s, !0),
        (l.onload = function () {
          if (l.status === 404) {
            r(new Error("“".concat(e, "” was not found.")));
            return;
          }
          if (l.status === 403) {
            r(new Error("“".concat(e, "” is not embeddable.")));
            return;
          }
          try {
            var u = JSON.parse(l.responseText);
            if (u.domain_status_code === 403) {
              xn(u, n), r(new Error("“".concat(e, "” is not embeddable.")));
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
  function $a() {
    var e =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : document,
      t = [].slice.call(
        e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")
      ),
      n = function (r) {
        "console" in window &&
          console.error &&
          console.error("There was an error creating an embed: ".concat(r));
      };
    t.forEach(function (i) {
      try {
        if (i.getAttribute("data-vimeo-defer") !== null) return;
        var r = Oi(i),
          a = ki(r);
        zi(a, r, i)
          .then(function (s) {
            return xn(s, i);
          })
          .catch(n);
      } catch (s) {
        n(s);
      }
    });
  }
  function Oa() {
    var e =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoPlayerResizeEmbeds_) {
      window.VimeoPlayerResizeEmbeds_ = !0;
      var t = function (i) {
        if (Ze(i.origin) && !(!i.data || i.data.event !== "spacechange")) {
          for (var r = e.querySelectorAll("iframe"), a = 0; a < r.length; a++)
            if (r[a].contentWindow === i.source) {
              var s = r[a].parentElement;
              s.style.paddingBottom = "".concat(i.data.data[0].bottom, "px");
              break;
            }
        }
      };
      window.addEventListener("message", t);
    }
  }
  function za() {
    var e =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoSeoMetadataAppended) {
      window.VimeoSeoMetadataAppended = !0;
      var t = function (i) {
        if (Ze(i.origin)) {
          var r = Jt(i.data);
          if (!(!r || r.event !== "ready"))
            for (
              var a = e.querySelectorAll("iframe"), s = 0;
              s < a.length;
              s++
            ) {
              var o = a[s],
                l = o.contentWindow === i.source;
              if (Pi(o.src) && l) {
                var u = new en(o);
                u.callMethod("appendVideoMetadata", window.location.href);
              }
            }
        }
      };
      window.addEventListener("message", t);
    }
  }
  function Ia() {
    var e =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoCheckedUrlTimeParam) {
      window.VimeoCheckedUrlTimeParam = !0;
      var t = function (r) {
          "console" in window &&
            console.error &&
            console.error("There was an error getting video Id: ".concat(r));
        },
        n = function (r) {
          if (Ze(r.origin)) {
            var a = Jt(r.data);
            if (!(!a || a.event !== "ready"))
              for (
                var s = e.querySelectorAll("iframe"),
                  o = function () {
                    var c = s[l],
                      d = c.contentWindow === r.source;
                    if (Pi(c.src) && d) {
                      var f = new en(c);
                      f.getVideoId()
                        .then(function (p) {
                          var g = new RegExp(
                            "[?&]vimeo_t_".concat(p, "=([^&#]*)")
                          ).exec(window.location.href);
                          if (g && g[1]) {
                            var h = decodeURI(g[1]);
                            f.setCurrentTime(h);
                          }
                        })
                        .catch(t);
                    }
                  },
                  l = 0;
                l < s.length;
                l++
              )
                o();
          }
        };
      window.addEventListener("message", n);
    }
  }
  function Da() {
    var e = (function () {
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
            a = 0,
            s = r.length,
            o = {};
          a < s;
          a++
        )
          if (((i = r[a]), i && i[1] in document)) {
            for (a = 0; a < i.length; a++) o[r[0][a]] = i[a];
            return o;
          }
        return !1;
      })(),
      t = {
        fullscreenchange: e.fullscreenchange,
        fullscreenerror: e.fullscreenerror,
      },
      n = {
        request: function (r) {
          return new Promise(function (a, s) {
            var o = function u() {
              n.off("fullscreenchange", u), a();
            };
            n.on("fullscreenchange", o), (r = r || document.documentElement);
            var l = r[e.requestFullscreen]();
            l instanceof Promise && l.then(o).catch(s);
          });
        },
        exit: function () {
          return new Promise(function (r, a) {
            if (!n.isFullscreen) {
              r();
              return;
            }
            var s = function l() {
              n.off("fullscreenchange", l), r();
            };
            n.on("fullscreenchange", s);
            var o = document[e.exitFullscreen]();
            o instanceof Promise && o.then(s).catch(a);
          });
        },
        on: function (r, a) {
          var s = t[r];
          s && document.addEventListener(s, a);
        },
        off: function (r, a) {
          var s = t[r];
          s && document.removeEventListener(s, a);
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
  var La = {
      role: "viewer",
      autoPlayMuted: !0,
      allowedDrift: 0.3,
      maxAllowedDrift: 1,
      minCheckInterval: 0.1,
      maxRateAdjustment: 0.2,
      maxTimeToCatchUp: 1,
    },
    Ra = (function (e) {
      ga(n, e);
      var t = ba(n);
      function n(i, r) {
        var a,
          s =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          o = arguments.length > 3 ? arguments[3] : void 0;
        return (
          Ei(this, n),
          (a = t.call(this)),
          Wt(Qt(a), "logger", void 0),
          Wt(Qt(a), "speedAdjustment", 0),
          Wt(
            Qt(a),
            "adjustSpeed",
            (function () {
              var l = Qe(
                ie().mark(function u(c, d) {
                  var f;
                  return ie().wrap(function (g) {
                    for (;;)
                      switch ((g.prev = g.next)) {
                        case 0:
                          if (a.speedAdjustment !== d) {
                            g.next = 2;
                            break;
                          }
                          return g.abrupt("return");
                        case 2:
                          return (g.next = 4), c.getPlaybackRate();
                        case 4:
                          return (
                            (g.t0 = g.sent),
                            (g.t1 = a.speedAdjustment),
                            (g.t2 = g.t0 - g.t1),
                            (g.t3 = d),
                            (f = g.t2 + g.t3),
                            a.log("New playbackRate:  ".concat(f)),
                            (g.next = 12),
                            c.setPlaybackRate(f)
                          );
                        case 12:
                          a.speedAdjustment = d;
                        case 13:
                        case "end":
                          return g.stop();
                      }
                  }, u);
                })
              );
              return function (u, c) {
                return l.apply(this, arguments);
              };
            })()
          ),
          (a.logger = o),
          a.init(r, i, Ue(Ue({}, La), s)),
          a
        );
      }
      return (
        wi(n, [
          {
            key: "disconnect",
            value: function () {
              this.dispatchEvent(new Event("disconnect"));
            },
          },
          {
            key: "init",
            value: (function () {
              var i = Qe(
                ie().mark(function a(s, o, l) {
                  var u = this,
                    c,
                    d,
                    f;
                  return ie().wrap(
                    function (g) {
                      for (;;)
                        switch ((g.prev = g.next)) {
                          case 0:
                            return (
                              (g.next = 2), this.waitForTOReadyState(s, "open")
                            );
                          case 2:
                            if (l.role !== "viewer") {
                              g.next = 10;
                              break;
                            }
                            return (g.next = 5), this.updatePlayer(s, o, l);
                          case 5:
                            (c = $i(s, "change", function () {
                              return u.updatePlayer(s, o, l);
                            })),
                              (d = this.maintainPlaybackPosition(s, o, l)),
                              this.addEventListener("disconnect", function () {
                                d.cancel(), c.cancel();
                              }),
                              (g.next = 14);
                            break;
                          case 10:
                            return (g.next = 12), this.updateTimingObject(s, o);
                          case 12:
                            (f = $i(
                              o,
                              ["seeked", "play", "pause", "ratechange"],
                              function () {
                                return u.updateTimingObject(s, o);
                              },
                              "on",
                              "off"
                            )),
                              this.addEventListener("disconnect", function () {
                                return f.cancel();
                              });
                          case 14:
                          case "end":
                            return g.stop();
                        }
                    },
                    a,
                    this
                  );
                })
              );
              function r(a, s, o) {
                return i.apply(this, arguments);
              }
              return r;
            })(),
          },
          {
            key: "updateTimingObject",
            value: (function () {
              var i = Qe(
                ie().mark(function a(s, o) {
                  return ie().wrap(function (u) {
                    for (;;)
                      switch ((u.prev = u.next)) {
                        case 0:
                          return (u.t0 = s), (u.next = 3), o.getCurrentTime();
                        case 3:
                          return (u.t1 = u.sent), (u.next = 6), o.getPaused();
                        case 6:
                          if (!u.sent) {
                            u.next = 10;
                            break;
                          }
                          (u.t2 = 0), (u.next = 13);
                          break;
                        case 10:
                          return (u.next = 12), o.getPlaybackRate();
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
                  }, a);
                })
              );
              function r(a, s) {
                return i.apply(this, arguments);
              }
              return r;
            })(),
          },
          {
            key: "updatePlayer",
            value: (function () {
              var i = Qe(
                ie().mark(function a(s, o, l) {
                  var u, c, d;
                  return ie().wrap(
                    function (p) {
                      for (;;)
                        switch ((p.prev = p.next)) {
                          case 0:
                            if (
                              ((u = s.query()),
                              (c = u.position),
                              (d = u.velocity),
                              typeof c == "number" && o.setCurrentTime(c),
                              typeof d != "number")
                            ) {
                              p.next = 25;
                              break;
                            }
                            if (d !== 0) {
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
                            if (!(d > 0)) {
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
                                  var g = Qe(
                                    ie().mark(function h(m) {
                                      return ie().wrap(function (v) {
                                        for (;;)
                                          switch ((v.prev = v.next)) {
                                            case 0:
                                              if (
                                                !(
                                                  m.name ===
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
                                      }, h);
                                    })
                                  );
                                  return function (h) {
                                    return g.apply(this, arguments);
                                  };
                                })()
                              )
                            );
                          case 18:
                            this.updatePlayer(s, o, l);
                          case 19:
                            return (p.next = 21), o.getPlaybackRate();
                          case 21:
                            if (((p.t2 = p.sent), (p.t3 = d), p.t2 === p.t3)) {
                              p.next = 25;
                              break;
                            }
                            o.setPlaybackRate(d);
                          case 25:
                          case "end":
                            return p.stop();
                        }
                    },
                    a,
                    this
                  );
                })
              );
              function r(a, s, o) {
                return i.apply(this, arguments);
              }
              return r;
            })(),
          },
          {
            key: "maintainPlaybackPosition",
            value: function (r, a, s) {
              var o = this,
                l = s.allowedDrift,
                u = s.maxAllowedDrift,
                c = s.minCheckInterval,
                d = s.maxRateAdjustment,
                f = s.maxTimeToCatchUp,
                p = Math.min(f, Math.max(c, u)) * 1e3,
                g = (function () {
                  var m = Qe(
                    ie().mark(function b() {
                      var v, y, E, T, S;
                      return ie().wrap(function (A) {
                        for (;;)
                          switch ((A.prev = A.next)) {
                            case 0:
                              if (((A.t0 = r.query().velocity === 0), A.t0)) {
                                A.next = 6;
                                break;
                              }
                              return (A.next = 4), a.getPaused();
                            case 4:
                              (A.t1 = A.sent), (A.t0 = A.t1 === !0);
                            case 6:
                              if (!A.t0) {
                                A.next = 8;
                                break;
                              }
                              return A.abrupt("return");
                            case 8:
                              return (
                                (A.t2 = r.query().position),
                                (A.next = 11),
                                a.getCurrentTime()
                              );
                            case 11:
                              if (
                                ((A.t3 = A.sent),
                                (v = A.t2 - A.t3),
                                (y = Math.abs(v)),
                                o.log("Drift: ".concat(v)),
                                !(y > u))
                              ) {
                                A.next = 22;
                                break;
                              }
                              return (A.next = 18), o.adjustSpeed(a, 0);
                            case 18:
                              a.setCurrentTime(r.query().position),
                                o.log("Resync by currentTime"),
                                (A.next = 29);
                              break;
                            case 22:
                              if (!(y > l)) {
                                A.next = 29;
                                break;
                              }
                              return (
                                (E = y / f),
                                (T = d),
                                (S = E < T ? (T - E) / 2 : T),
                                (A.next = 28),
                                o.adjustSpeed(a, S * Math.sign(v))
                              );
                            case 28:
                              o.log("Resync by playbackRate");
                            case 29:
                            case "end":
                              return A.stop();
                          }
                      }, b);
                    })
                  );
                  return function () {
                    return m.apply(this, arguments);
                  };
                })(),
                h = setInterval(function () {
                  return g();
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
            value: function (r) {
              var a;
              (a = this.logger) === null ||
                a === void 0 ||
                a.call(this, "TimingSrcConnector: ".concat(r));
            },
          },
          {
            key: "waitForTOReadyState",
            value: function (r, a) {
              return new Promise(function (s) {
                var o = function l() {
                  r.readyState === a
                    ? s()
                    : r.addEventListener("readystatechange", l, { once: !0 });
                };
                o();
              });
            },
          },
        ]),
        n
      );
    })(_n(EventTarget)),
    dt = new WeakMap(),
    Tn = new WeakMap(),
    se = {},
    en = (function () {
      function e(t) {
        var n = this,
          i =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (
          (Ei(this, e),
          window.jQuery &&
            t instanceof jQuery &&
            (t.length > 1 &&
              window.console &&
              console.warn &&
              console.warn(
                "A jQuery object with multiple elements was passed, using the first element."
              ),
            (t = t[0])),
          typeof document < "u" &&
            typeof t == "string" &&
            (t = document.getElementById(t)),
          !xa(t))
        )
          throw new TypeError(
            "You must pass either a valid element or a valid id."
          );
        if (t.nodeName !== "IFRAME") {
          var r = t.querySelector("iframe");
          r && (t = r);
        }
        if (t.nodeName === "IFRAME" && !Ze(t.getAttribute("src") || ""))
          throw new Error("The player element passed isn’t a Vimeo embed.");
        if (dt.has(t)) return dt.get(t);
        (this._window = t.ownerDocument.defaultView),
          (this.element = t),
          (this.origin = "*");
        var a = new Te(function (o, l) {
          if (
            ((n._onMessage = function (d) {
              if (!(!Ze(d.origin) || n.element.contentWindow !== d.source)) {
                n.origin === "*" && (n.origin = d.origin);
                var f = Jt(d.data),
                  p = f && f.event === "error",
                  g = p && f.data && f.data.method === "ready";
                if (g) {
                  var h = new Error(f.data.message);
                  (h.name = f.data.name), l(h);
                  return;
                }
                var m = f && f.event === "ready",
                  b = f && f.method === "ping";
                if (m || b) {
                  n.element.setAttribute("data-ready", "true"), o();
                  return;
                }
                Pa(n, f);
              }
            }),
            n._window.addEventListener("message", n._onMessage),
            n.element.nodeName !== "IFRAME")
          ) {
            var u = Oi(t, i),
              c = ki(u);
            zi(c, u, t)
              .then(function (d) {
                var f = xn(d, t);
                return (
                  (n.element = f),
                  (n._originalElement = t),
                  Ma(t, f),
                  dt.set(n.element, n),
                  d
                );
              })
              .catch(l);
          }
        });
        if (
          (Tn.set(this, a),
          dt.set(this.element, this),
          this.element.nodeName === "IFRAME" && Ke(this, "ping"),
          se.isEnabled)
        ) {
          var s = function () {
            return se.exit();
          };
          (this.fullscreenchangeHandler = function () {
            se.isFullscreen
              ? Pt(n, "event:exitFullscreen", s)
              : Kt(n, "event:exitFullscreen", s),
              n.ready().then(function () {
                Ke(n, "fullscreenchange", se.isFullscreen);
              });
          }),
            se.on("fullscreenchange", this.fullscreenchangeHandler);
        }
        return this;
      }
      return (
        wi(e, [
          {
            key: "callMethod",
            value: function (n) {
              var i = this,
                r =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
              return new Te(function (a, s) {
                return i
                  .ready()
                  .then(function () {
                    Pt(i, n, { resolve: a, reject: s }), Ke(i, n, r);
                  })
                  .catch(s);
              });
            },
          },
          {
            key: "get",
            value: function (n) {
              var i = this;
              return new Te(function (r, a) {
                return (
                  (n = Mi(n, "get")),
                  i
                    .ready()
                    .then(function () {
                      Pt(i, n, { resolve: r, reject: a }), Ke(i, n);
                    })
                    .catch(a)
                );
              });
            },
          },
          {
            key: "set",
            value: function (n, i) {
              var r = this;
              return new Te(function (a, s) {
                if (((n = Mi(n, "set")), i == null))
                  throw new TypeError("There must be a value to set.");
                return r
                  .ready()
                  .then(function () {
                    Pt(r, n, { resolve: a, reject: s }), Ke(r, n, i);
                  })
                  .catch(s);
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
              var r = Zt(this, "event:".concat(n));
              r.length === 0 &&
                this.callMethod("addEventListener", n).catch(function () {}),
                Pt(this, "event:".concat(n), i);
            },
          },
          {
            key: "off",
            value: function (n, i) {
              if (!n) throw new TypeError("You must pass an event name.");
              if (i && typeof i != "function")
                throw new TypeError("The callback must be a function.");
              var r = Kt(this, "event:".concat(n), i);
              r &&
                this.callMethod("removeEventListener", n).catch(function (
                  a
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
                Tn.get(this) ||
                new Te(function (i, r) {
                  r(new Error("Unknown player. Probably unloaded."));
                });
              return Te.resolve(n);
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
              return se.isEnabled
                ? se.request(this.element)
                : this.callMethod("requestFullscreen");
            },
          },
          {
            key: "exitFullscreen",
            value: function () {
              return se.isEnabled
                ? se.exit()
                : this.callMethod("exitFullscreen");
            },
          },
          {
            key: "getFullscreen",
            value: function () {
              return se.isEnabled
                ? Te.resolve(se.isFullscreen)
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
              return new Te(function (i) {
                if (
                  (Tn.delete(n),
                  dt.delete(n.element),
                  n._originalElement &&
                    (dt.delete(n._originalElement),
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
                  se.isEnabled &&
                    se.off("fullscreenchange", n.fullscreenchangeHandler),
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
              return Te.all([
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
                return new Te(function (a, s) {
                  return s(new TypeError("Argument must be an array."));
                });
              var i = new Te(function (a) {
                  return a(null);
                }),
                r = [
                  n[0] ? this.set("colorOne", n[0]) : i,
                  n[1] ? this.set("colorTwo", n[1]) : i,
                  n[2] ? this.set("colorThree", n[2]) : i,
                  n[3] ? this.set("colorFour", n[3]) : i,
                ];
              return Te.all(r);
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
              var t = Qe(
                ie().mark(function i(r, a) {
                  var s = this,
                    o;
                  return ie().wrap(
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
                              (o = new Ra(this, r, a)),
                              Ke(this, "notifyTimingObjectConnect"),
                              o.addEventListener("disconnect", function () {
                                return Ke(s, "notifyTimingObjectDisconnect");
                              }),
                              u.abrupt("return", o)
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
              function n(i, r) {
                return t.apply(this, arguments);
              }
              return n;
            })(),
          },
        ]),
        e
      );
    })();
  Ai || ((se = Da()), $a(), Oa(), za(), Ia());
  class Na {
    constructor() {
      typeof en < "u"
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
          let v = function (P) {
              let M = Math.floor(P / 3600);
              P -= M * 3600;
              let _ = Math.floor(P / 60);
              return (P -= _ * 60), _ + ":" + (P < 10 ? "0" + P : P);
            },
            S = function () {
              u.getDuration().then(function () {
                const P = E.value;
                u.setCurrentTime(P), T && (T.value = P);
              });
            },
            A = function () {
              n.setAttribute("data-vimeo-hover", "false");
            },
            k = function () {
              n.setAttribute("data-vimeo-activated", "false"),
                n.setAttribute("data-vimeo-playing", "false"),
                u.unload();
            };
          const r = n.getAttribute("data-vimeo-video-id");
          if (!r) return;
          const a = n.querySelector("iframe");
          if (!a) {
            console.error("No iframe found in vimeo player element", n);
            return;
          }
          const s = `https://player.vimeo.com/video/${r}?api=1&background=1&autoplay=0&loop=0&muted=1`;
          a.setAttribute("src", s);
          const o = "vimeo-player-index-" + i;
          n.setAttribute("id", o);
          const l = n.id,
            u = new en(a);
          if (
            (n.getAttribute("data-vimeo-update-size") === "true" &&
              u.getVideoWidth().then(function (P) {
                u.getVideoHeight().then(function (M) {
                  const _ = n.querySelector(".vimeo-player__before");
                  _ && (_.style.paddingTop = (M / P) * 100 + "%");
                });
              }),
            u.on("play", function () {
              n.setAttribute("data-vimeo-loaded", "true");
            }),
            n.getAttribute("data-vimeo-autoplay") === "false")
          )
            u.setVolume(1), u.pause();
          else if (
            (u.setVolume(0),
            n.setAttribute("data-vimeo-muted", "true"),
            n.getAttribute("data-vimeo-paused-by-user") === "false")
          ) {
            const P = () => {
              const M = n.getBoundingClientRect();
              M.top < window.innerHeight && M.bottom > 0 ? c() : d();
            };
            P(), window.addEventListener("scroll", P);
          }
          const c = () => {
              n.setAttribute("data-vimeo-activated", "true"),
                n.setAttribute("data-vimeo-playing", "true"),
                u.play();
            },
            d = () => {
              n.setAttribute("data-vimeo-playing", "false"), u.pause();
            },
            f = n.querySelector('[data-vimeo-control="play"]');
          f &&
            f.addEventListener("click", function () {
              u.setVolume(0),
                c(),
                n.getAttribute("data-vimeo-muted") === "true"
                  ? u.setVolume(0)
                  : u.setVolume(1);
            });
          const p = n.querySelector('[data-vimeo-control="pause"]');
          p &&
            p.addEventListener("click", function () {
              d(),
                n.getAttribute("data-vimeo-autoplay") === "true" &&
                  (n.setAttribute("data-vimeo-paused-by-user", "true"),
                  window.removeEventListener("scroll", checkVisibility));
            });
          const g = n.querySelector('[data-vimeo-control="mute"]');
          g &&
            g.addEventListener("click", function () {
              n.getAttribute("data-vimeo-muted") === "false"
                ? (u.setVolume(0), n.setAttribute("data-vimeo-muted", "true"))
                : (u.setVolume(1), n.setAttribute("data-vimeo-muted", "false"));
            });
          const h = !!(
              document.fullscreenEnabled ||
              document.webkitFullscreenEnabled ||
              document.mozFullScreenEnabled ||
              document.msFullscreenEnabled
            ),
            m = n.querySelector('[data-vimeo-control="fullscreen"]');
          !h && m && (m.style.display = "none"),
            m &&
              m.addEventListener("click", () => {
                const P = document.getElementById(l);
                if (!P) return;
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
                      P.requestFullscreen ||
                      P.webkitRequestFullscreen ||
                      P.mozRequestFullScreen ||
                      P.msRequestFullscreen
                    ).call(P));
              });
          const b = () => {
            const P =
              document.fullscreenElement ||
              document.webkitFullscreenElement ||
              document.mozFullScreenElement ||
              document.msFullscreenElement;
            n.setAttribute("data-vimeo-fullscreen", P ? "true" : "false");
          };
          [
            "fullscreenchange",
            "webkitfullscreenchange",
            "mozfullscreenchange",
            "msfullscreenchange",
          ].forEach((P) => {
            document.addEventListener(P, b);
          });
          const y = n.querySelector("[data-vimeo-duration]");
          u.getDuration().then(function (P) {
            y && (y.textContent = v(P)),
              n
                .querySelectorAll('[data-vimeo-control="timeline"], progress')
                .forEach((_) => {
                  _.setAttribute("max", P);
                });
          });
          const E = n.querySelector('[data-vimeo-control="timeline"]'),
            T = n.querySelector("progress");
          E &&
            ["input", "change"].forEach((P) => {
              E.addEventListener(P, S);
            }),
            u.on("timeupdate", function (P) {
              E && (E.value = P.seconds),
                T && (T.value = P.seconds),
                y && (y.textContent = v(Math.trunc(P.seconds)));
            });
          let C;
          n.addEventListener("mousemove", function () {
            n.getAttribute("data-vimeo-hover") === "false" &&
              n.setAttribute("data-vimeo-hover", "true"),
              clearTimeout(C),
              (C = setTimeout(A, 3e3));
          }),
            u.on("ended", k);
        } catch (r) {
          console.error("Error initializing Vimeo player:", r);
        }
      });
    }
  }
  const Fa = () => {
    new Na();
  };
  function Ii(e) {
    return (
      e !== null &&
      typeof e == "object" &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function En(e = {}, t = {}) {
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : Ii(t[n]) &&
          Ii(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          En(e[n], t[n]);
    });
  }
  const Di = {
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
  function W() {
    const e = typeof document < "u" ? document : {};
    return En(e, Di), e;
  }
  const Ba = {
    document: Di,
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
      return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame(e) {
      typeof setTimeout > "u" || clearTimeout(e);
    },
  };
  function F() {
    const e = typeof window < "u" ? window : {};
    return En(e, Ba), e;
  }
  function Ya(e) {
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
  class Fe extends Array {
    constructor(t) {
      typeof t == "number" ? super(t) : (super(...(t || [])), Ya(this));
    }
  }
  function kt(e = []) {
    const t = [];
    return (
      e.forEach((n) => {
        Array.isArray(n) ? t.push(...kt(n)) : t.push(n);
      }),
      t
    );
  }
  function Li(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function Va(e) {
    const t = [];
    for (let n = 0; n < e.length; n += 1)
      t.indexOf(e[n]) === -1 && t.push(e[n]);
    return t;
  }
  function Ga(e, t) {
    if (typeof e != "string") return [e];
    const n = [],
      i = t.querySelectorAll(e);
    for (let r = 0; r < i.length; r += 1) n.push(i[r]);
    return n;
  }
  function D(e, t) {
    const n = F(),
      i = W();
    let r = [];
    if (!t && e instanceof Fe) return e;
    if (!e) return new Fe(r);
    if (typeof e == "string") {
      const a = e.trim();
      if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
        let s = "div";
        a.indexOf("<li") === 0 && (s = "ul"),
          a.indexOf("<tr") === 0 && (s = "tbody"),
          (a.indexOf("<td") === 0 || a.indexOf("<th") === 0) && (s = "tr"),
          a.indexOf("<tbody") === 0 && (s = "table"),
          a.indexOf("<option") === 0 && (s = "select");
        const o = i.createElement(s);
        o.innerHTML = a;
        for (let l = 0; l < o.childNodes.length; l += 1)
          r.push(o.childNodes[l]);
      } else r = Ga(e.trim(), t || i);
    } else if (e.nodeType || e === n || e === i) r.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof Fe) return e;
      r = e;
    }
    return new Fe(Va(r));
  }
  D.fn = Fe.prototype;
  function qa(...e) {
    const t = kt(e.map((n) => n.split(" ")));
    return (
      this.forEach((n) => {
        n.classList.add(...t);
      }),
      this
    );
  }
  function Ha(...e) {
    const t = kt(e.map((n) => n.split(" ")));
    return (
      this.forEach((n) => {
        n.classList.remove(...t);
      }),
      this
    );
  }
  function Xa(...e) {
    const t = kt(e.map((n) => n.split(" ")));
    this.forEach((n) => {
      t.forEach((i) => {
        n.classList.toggle(i);
      });
    });
  }
  function ja(...e) {
    const t = kt(e.map((n) => n.split(" ")));
    return (
      Li(this, (n) => t.filter((i) => n.classList.contains(i)).length > 0)
        .length > 0
    );
  }
  function Wa(e, t) {
    if (arguments.length === 1 && typeof e == "string")
      return this[0] ? this[0].getAttribute(e) : void 0;
    for (let n = 0; n < this.length; n += 1)
      if (arguments.length === 2) this[n].setAttribute(e, t);
      else
        for (const i in e) (this[n][i] = e[i]), this[n].setAttribute(i, e[i]);
    return this;
  }
  function Ua(e) {
    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
    return this;
  }
  function Qa(e) {
    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
    return this;
  }
  function Za(e) {
    for (let t = 0; t < this.length; t += 1)
      this[t].style.transitionDuration = typeof e != "string" ? `${e}ms` : e;
    return this;
  }
  function Ka(...e) {
    let [t, n, i, r] = e;
    typeof e[1] == "function" && (([t, i, r] = e), (n = void 0)), r || (r = !1);
    function a(u) {
      const c = u.target;
      if (!c) return;
      const d = u.target.dom7EventData || [];
      if ((d.indexOf(u) < 0 && d.unshift(u), D(c).is(n))) i.apply(c, d);
      else {
        const f = D(c).parents();
        for (let p = 0; p < f.length; p += 1) D(f[p]).is(n) && i.apply(f[p], d);
      }
    }
    function s(u) {
      const c = u && u.target ? u.target.dom7EventData || [] : [];
      c.indexOf(u) < 0 && c.unshift(u), i.apply(this, c);
    }
    const o = t.split(" ");
    let l;
    for (let u = 0; u < this.length; u += 1) {
      const c = this[u];
      if (n)
        for (l = 0; l < o.length; l += 1) {
          const d = o[l];
          c.dom7LiveListeners || (c.dom7LiveListeners = {}),
            c.dom7LiveListeners[d] || (c.dom7LiveListeners[d] = []),
            c.dom7LiveListeners[d].push({ listener: i, proxyListener: a }),
            c.addEventListener(d, a, r);
        }
      else
        for (l = 0; l < o.length; l += 1) {
          const d = o[l];
          c.dom7Listeners || (c.dom7Listeners = {}),
            c.dom7Listeners[d] || (c.dom7Listeners[d] = []),
            c.dom7Listeners[d].push({ listener: i, proxyListener: s }),
            c.addEventListener(d, s, r);
        }
    }
    return this;
  }
  function Ja(...e) {
    let [t, n, i, r] = e;
    typeof e[1] == "function" && (([t, i, r] = e), (n = void 0)), r || (r = !1);
    const a = t.split(" ");
    for (let s = 0; s < a.length; s += 1) {
      const o = a[s];
      for (let l = 0; l < this.length; l += 1) {
        const u = this[l];
        let c;
        if (
          (!n && u.dom7Listeners
            ? (c = u.dom7Listeners[o])
            : n && u.dom7LiveListeners && (c = u.dom7LiveListeners[o]),
          c && c.length)
        )
          for (let d = c.length - 1; d >= 0; d -= 1) {
            const f = c[d];
            (i && f.listener === i) ||
            (i &&
              f.listener &&
              f.listener.dom7proxy &&
              f.listener.dom7proxy === i)
              ? (u.removeEventListener(o, f.proxyListener, r), c.splice(d, 1))
              : i ||
                (u.removeEventListener(o, f.proxyListener, r), c.splice(d, 1));
          }
      }
    }
    return this;
  }
  function es(...e) {
    const t = F(),
      n = e[0].split(" "),
      i = e[1];
    for (let r = 0; r < n.length; r += 1) {
      const a = n[r];
      for (let s = 0; s < this.length; s += 1) {
        const o = this[s];
        if (t.CustomEvent) {
          const l = new t.CustomEvent(a, {
            detail: i,
            bubbles: !0,
            cancelable: !0,
          });
          (o.dom7EventData = e.filter((u, c) => c > 0)),
            o.dispatchEvent(l),
            (o.dom7EventData = []),
            delete o.dom7EventData;
        }
      }
    }
    return this;
  }
  function ts(e) {
    const t = this;
    function n(i) {
      i.target === this && (e.call(this, i), t.off("transitionend", n));
    }
    return e && t.on("transitionend", n), this;
  }
  function ns(e) {
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
  function is(e) {
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
  function rs() {
    if (this.length > 0) {
      const e = F(),
        t = W(),
        n = this[0],
        i = n.getBoundingClientRect(),
        r = t.body,
        a = n.clientTop || r.clientTop || 0,
        s = n.clientLeft || r.clientLeft || 0,
        o = n === e ? e.scrollY : n.scrollTop,
        l = n === e ? e.scrollX : n.scrollLeft;
      return { top: i.top + o - a, left: i.left + l - s };
    }
    return null;
  }
  function as() {
    const e = F();
    return this[0] ? e.getComputedStyle(this[0], null) : {};
  }
  function ss(e, t) {
    const n = F();
    let i;
    if (arguments.length === 1)
      if (typeof e == "string") {
        if (this[0])
          return n.getComputedStyle(this[0], null).getPropertyValue(e);
      } else {
        for (i = 0; i < this.length; i += 1)
          for (const r in e) this[i].style[r] = e[r];
        return this;
      }
    if (arguments.length === 2 && typeof e == "string") {
      for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
      return this;
    }
    return this;
  }
  function os(e) {
    return e
      ? (this.forEach((t, n) => {
          e.apply(t, [t, n]);
        }),
        this)
      : this;
  }
  function ls(e) {
    const t = Li(this, e);
    return D(t);
  }
  function us(e) {
    if (typeof e > "u") return this[0] ? this[0].innerHTML : null;
    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
    return this;
  }
  function cs(e) {
    if (typeof e > "u") return this[0] ? this[0].textContent.trim() : null;
    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
    return this;
  }
  function ds(e) {
    const t = F(),
      n = W(),
      i = this[0];
    let r, a;
    if (!i || typeof e > "u") return !1;
    if (typeof e == "string") {
      if (i.matches) return i.matches(e);
      if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
      if (i.msMatchesSelector) return i.msMatchesSelector(e);
      for (r = D(e), a = 0; a < r.length; a += 1) if (r[a] === i) return !0;
      return !1;
    }
    if (e === n) return i === n;
    if (e === t) return i === t;
    if (e.nodeType || e instanceof Fe) {
      for (r = e.nodeType ? [e] : e, a = 0; a < r.length; a += 1)
        if (r[a] === i) return !0;
      return !1;
    }
    return !1;
  }
  function fs() {
    let e = this[0],
      t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function hs(e) {
    if (typeof e > "u") return this;
    const t = this.length;
    if (e > t - 1) return D([]);
    if (e < 0) {
      const n = t + e;
      return n < 0 ? D([]) : D([this[n]]);
    }
    return D([this[e]]);
  }
  function ps(...e) {
    let t;
    const n = W();
    for (let i = 0; i < e.length; i += 1) {
      t = e[i];
      for (let r = 0; r < this.length; r += 1)
        if (typeof t == "string") {
          const a = n.createElement("div");
          for (a.innerHTML = t; a.firstChild; )
            this[r].appendChild(a.firstChild);
        } else if (t instanceof Fe)
          for (let a = 0; a < t.length; a += 1) this[r].appendChild(t[a]);
        else this[r].appendChild(t);
    }
    return this;
  }
  function ms(e) {
    const t = W();
    let n, i;
    for (n = 0; n < this.length; n += 1)
      if (typeof e == "string") {
        const r = t.createElement("div");
        for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1)
          this[n].insertBefore(r.childNodes[i], this[n].childNodes[0]);
      } else if (e instanceof Fe)
        for (i = 0; i < e.length; i += 1)
          this[n].insertBefore(e[i], this[n].childNodes[0]);
      else this[n].insertBefore(e, this[n].childNodes[0]);
    return this;
  }
  function gs(e) {
    return this.length > 0
      ? e
        ? this[0].nextElementSibling && D(this[0].nextElementSibling).is(e)
          ? D([this[0].nextElementSibling])
          : D([])
        : this[0].nextElementSibling
        ? D([this[0].nextElementSibling])
        : D([])
      : D([]);
  }
  function vs(e) {
    const t = [];
    let n = this[0];
    if (!n) return D([]);
    for (; n.nextElementSibling; ) {
      const i = n.nextElementSibling;
      e ? D(i).is(e) && t.push(i) : t.push(i), (n = i);
    }
    return D(t);
  }
  function ys(e) {
    if (this.length > 0) {
      const t = this[0];
      return e
        ? t.previousElementSibling && D(t.previousElementSibling).is(e)
          ? D([t.previousElementSibling])
          : D([])
        : t.previousElementSibling
        ? D([t.previousElementSibling])
        : D([]);
    }
    return D([]);
  }
  function bs(e) {
    const t = [];
    let n = this[0];
    if (!n) return D([]);
    for (; n.previousElementSibling; ) {
      const i = n.previousElementSibling;
      e ? D(i).is(e) && t.push(i) : t.push(i), (n = i);
    }
    return D(t);
  }
  function _s(e) {
    const t = [];
    for (let n = 0; n < this.length; n += 1)
      this[n].parentNode !== null &&
        (e
          ? D(this[n].parentNode).is(e) && t.push(this[n].parentNode)
          : t.push(this[n].parentNode));
    return D(t);
  }
  function xs(e) {
    const t = [];
    for (let n = 0; n < this.length; n += 1) {
      let i = this[n].parentNode;
      for (; i; ) e ? D(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
    }
    return D(t);
  }
  function Ts(e) {
    let t = this;
    return typeof e > "u" ? D([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
  }
  function Es(e) {
    const t = [];
    for (let n = 0; n < this.length; n += 1) {
      const i = this[n].querySelectorAll(e);
      for (let r = 0; r < i.length; r += 1) t.push(i[r]);
    }
    return D(t);
  }
  function ws(e) {
    const t = [];
    for (let n = 0; n < this.length; n += 1) {
      const i = this[n].children;
      for (let r = 0; r < i.length; r += 1)
        (!e || D(i[r]).is(e)) && t.push(i[r]);
    }
    return D(t);
  }
  function Ss() {
    for (let e = 0; e < this.length; e += 1)
      this[e].parentNode && this[e].parentNode.removeChild(this[e]);
    return this;
  }
  const Ri = {
    addClass: qa,
    removeClass: Ha,
    hasClass: ja,
    toggleClass: Xa,
    attr: Wa,
    removeAttr: Ua,
    transform: Qa,
    transition: Za,
    on: Ka,
    off: Ja,
    trigger: es,
    transitionEnd: ts,
    outerWidth: ns,
    outerHeight: is,
    styles: as,
    offset: rs,
    css: ss,
    each: os,
    html: us,
    text: cs,
    is: ds,
    index: fs,
    eq: hs,
    append: ps,
    prepend: ms,
    next: gs,
    nextAll: vs,
    prev: ys,
    prevAll: bs,
    parent: _s,
    parents: xs,
    closest: Ts,
    find: Es,
    children: ws,
    filter: ls,
    remove: Ss,
  };
  Object.keys(Ri).forEach((e) => {
    Object.defineProperty(D.fn, e, { value: Ri[e], writable: !0 });
  });
  function Cs(e) {
    const t = e;
    Object.keys(t).forEach((n) => {
      try {
        t[n] = null;
      } catch {}
      try {
        delete t[n];
      } catch {}
    });
  }
  function Be(e, t = 0) {
    return setTimeout(e, t);
  }
  function he() {
    return Date.now();
  }
  function As(e) {
    const t = F();
    let n;
    return (
      t.getComputedStyle && (n = t.getComputedStyle(e, null)),
      !n && e.currentStyle && (n = e.currentStyle),
      n || (n = e.style),
      n
    );
  }
  function wn(e, t = "x") {
    const n = F();
    let i, r, a;
    const s = As(e);
    return (
      n.WebKitCSSMatrix
        ? ((r = s.transform || s.webkitTransform),
          r.split(",").length > 6 &&
            (r = r
              .split(", ")
              .map((o) => o.replace(",", "."))
              .join(", ")),
          (a = new n.WebKitCSSMatrix(r === "none" ? "" : r)))
        : ((a =
            s.MozTransform ||
            s.OTransform ||
            s.MsTransform ||
            s.msTransform ||
            s.transform ||
            s
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = a.toString().split(","))),
      t === "x" &&
        (n.WebKitCSSMatrix
          ? (r = a.m41)
          : i.length === 16
          ? (r = parseFloat(i[12]))
          : (r = parseFloat(i[4]))),
      t === "y" &&
        (n.WebKitCSSMatrix
          ? (r = a.m42)
          : i.length === 16
          ? (r = parseFloat(i[13]))
          : (r = parseFloat(i[5]))),
      r || 0
    );
  }
  function $t(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      e.constructor &&
      Object.prototype.toString.call(e).slice(8, -1) === "Object"
    );
  }
  function Ms(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? e instanceof HTMLElement
      : e && (e.nodeType === 1 || e.nodeType === 11);
  }
  function pe(...e) {
    const t = Object(e[0]),
      n = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < e.length; i += 1) {
      const r = e[i];
      if (r != null && !Ms(r)) {
        const a = Object.keys(Object(r)).filter((s) => n.indexOf(s) < 0);
        for (let s = 0, o = a.length; s < o; s += 1) {
          const l = a[s],
            u = Object.getOwnPropertyDescriptor(r, l);
          u !== void 0 &&
            u.enumerable &&
            ($t(t[l]) && $t(r[l])
              ? r[l].__swiper__
                ? (t[l] = r[l])
                : pe(t[l], r[l])
              : !$t(t[l]) && $t(r[l])
              ? ((t[l] = {}), r[l].__swiper__ ? (t[l] = r[l]) : pe(t[l], r[l]))
              : (t[l] = r[l]));
        }
      }
    }
    return t;
  }
  function Ot(e, t, n) {
    e.style.setProperty(t, n);
  }
  function Ni({ swiper: e, targetPosition: t, side: n }) {
    const i = F(),
      r = -e.translate;
    let a = null,
      s;
    const o = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(e.cssModeFrameID);
    const l = t > r ? "next" : "prev",
      u = (d, f) => (l === "next" && d >= f) || (l === "prev" && d <= f),
      c = () => {
        (s = new Date().getTime()), a === null && (a = s);
        const d = Math.max(Math.min((s - a) / o, 1), 0),
          f = 0.5 - Math.cos(d * Math.PI) / 2;
        let p = r + f * (t - r);
        if ((u(p, t) && (p = t), e.wrapperEl.scrollTo({ [n]: p }), u(p, t))) {
          (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [n]: p });
            }),
            i.cancelAnimationFrame(e.cssModeFrameID);
          return;
        }
        e.cssModeFrameID = i.requestAnimationFrame(c);
      };
    c();
  }
  let Sn;
  function Ps() {
    const e = F(),
      t = W();
    return {
      smoothScroll:
        t.documentElement && "scrollBehavior" in t.documentElement.style,
      touch: !!(
        "ontouchstart" in e ||
        (e.DocumentTouch && t instanceof e.DocumentTouch)
      ),
      passiveListener: (function () {
        let i = !1;
        try {
          const r = Object.defineProperty({}, "passive", {
            get() {
              i = !0;
            },
          });
          e.addEventListener("testPassiveListener", null, r);
        } catch {}
        return i;
      })(),
      gestures: (function () {
        return "ongesturestart" in e;
      })(),
    };
  }
  function Fi() {
    return Sn || (Sn = Ps()), Sn;
  }
  let Cn;
  function ks({ userAgent: e } = {}) {
    const t = Fi(),
      n = F(),
      i = n.navigator.platform,
      r = e || n.navigator.userAgent,
      a = { ios: !1, android: !1 },
      s = n.screen.width,
      o = n.screen.height,
      l = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let u = r.match(/(iPad).*OS\s([\d_]+)/);
    const c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
      d = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      f = i === "Win32";
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
        t.touch &&
        g.indexOf(`${s}x${o}`) >= 0 &&
        ((u = r.match(/(Version)\/([\d.]+)/)),
        u || (u = [0, 1, "13_0_0"]),
        (p = !1)),
      l && !f && ((a.os = "android"), (a.android = !0)),
      (u || d || c) && ((a.os = "ios"), (a.ios = !0)),
      a
    );
  }
  function $s(e = {}) {
    return Cn || (Cn = ks(e)), Cn;
  }
  let An;
  function Os() {
    const e = F();
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
  function zs() {
    return An || (An = Os()), An;
  }
  function Is({ swiper: e, on: t, emit: n }) {
    const i = F();
    let r = null,
      a = null;
    const s = () => {
        !e || e.destroyed || !e.initialized || (n("beforeResize"), n("resize"));
      },
      o = () => {
        !e ||
          e.destroyed ||
          !e.initialized ||
          ((r = new ResizeObserver((c) => {
            a = i.requestAnimationFrame(() => {
              const { width: d, height: f } = e;
              let p = d,
                g = f;
              c.forEach(({ contentBoxSize: h, contentRect: m, target: b }) => {
                (b && b !== e.el) ||
                  ((p = m ? m.width : (h[0] || h).inlineSize),
                  (g = m ? m.height : (h[0] || h).blockSize));
              }),
                (p !== d || g !== f) && s();
            });
          })),
          r.observe(e.el));
      },
      l = () => {
        a && i.cancelAnimationFrame(a),
          r && r.unobserve && e.el && (r.unobserve(e.el), (r = null));
      },
      u = () => {
        !e || e.destroyed || !e.initialized || n("orientationchange");
      };
    t("init", () => {
      if (e.params.resizeObserver && typeof i.ResizeObserver < "u") {
        o();
        return;
      }
      i.addEventListener("resize", s),
        i.addEventListener("orientationchange", u);
    }),
      t("destroy", () => {
        l(),
          i.removeEventListener("resize", s),
          i.removeEventListener("orientationchange", u);
      });
  }
  function Ds({ swiper: e, extendParams: t, on: n, emit: i }) {
    const r = [],
      a = F(),
      s = (u, c = {}) => {
        const d = a.MutationObserver || a.WebkitMutationObserver,
          f = new d((p) => {
            if (p.length === 1) {
              i("observerUpdate", p[0]);
              return;
            }
            const g = function () {
              i("observerUpdate", p[0]);
            };
            a.requestAnimationFrame
              ? a.requestAnimationFrame(g)
              : a.setTimeout(g, 0);
          });
        f.observe(u, {
          attributes: typeof c.attributes > "u" ? !0 : c.attributes,
          childList: typeof c.childList > "u" ? !0 : c.childList,
          characterData: typeof c.characterData > "u" ? !0 : c.characterData,
        }),
          r.push(f);
      },
      o = () => {
        if (e.params.observer) {
          if (e.params.observeParents) {
            const u = e.$el.parents();
            for (let c = 0; c < u.length; c += 1) s(u[c]);
          }
          s(e.$el[0], { childList: e.params.observeSlideChildren }),
            s(e.$wrapperEl[0], { attributes: !1 });
        }
      },
      l = () => {
        r.forEach((u) => {
          u.disconnect();
        }),
          r.splice(0, r.length);
      };
    t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      n("init", o),
      n("destroy", l);
  }
  const Ls = {
    on(e, t, n) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
      const r = n ? "unshift" : "push";
      return (
        e.split(" ").forEach((a) => {
          i.eventsListeners[a] || (i.eventsListeners[a] = []),
            i.eventsListeners[a][r](t);
        }),
        i
      );
    },
    once(e, t, n) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
      function r(...a) {
        i.off(e, r), r.__emitterProxy && delete r.__emitterProxy, t.apply(i, a);
      }
      return (r.__emitterProxy = t), i.on(e, r, n);
    },
    onAny(e, t) {
      const n = this;
      if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
      const i = t ? "unshift" : "push";
      return (
        n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
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
          e.split(" ").forEach((i) => {
            typeof t > "u"
              ? (n.eventsListeners[i] = [])
              : n.eventsListeners[i] &&
                n.eventsListeners[i].forEach((r, a) => {
                  (r === t || (r.__emitterProxy && r.__emitterProxy === t)) &&
                    n.eventsListeners[i].splice(a, 1);
                });
          }),
        n
      );
    },
    emit(...e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
      let n, i, r;
      return (
        typeof e[0] == "string" || Array.isArray(e[0])
          ? ((n = e[0]), (i = e.slice(1, e.length)), (r = t))
          : ((n = e[0].events), (i = e[0].data), (r = e[0].context || t)),
        i.unshift(r),
        (Array.isArray(n) ? n : n.split(" ")).forEach((s) => {
          t.eventsAnyListeners &&
            t.eventsAnyListeners.length &&
            t.eventsAnyListeners.forEach((o) => {
              o.apply(r, [s, ...i]);
            }),
            t.eventsListeners &&
              t.eventsListeners[s] &&
              t.eventsListeners[s].forEach((o) => {
                o.apply(r, i);
              });
        }),
        t
      );
    },
  };
  function Rs() {
    const e = this;
    let t, n;
    const i = e.$el;
    typeof e.params.width < "u" && e.params.width !== null
      ? (t = e.params.width)
      : (t = i[0].clientWidth),
      typeof e.params.height < "u" && e.params.height !== null
        ? (n = e.params.height)
        : (n = i[0].clientHeight),
      !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
        ((t =
          t -
          parseInt(i.css("padding-left") || 0, 10) -
          parseInt(i.css("padding-right") || 0, 10)),
        (n =
          n -
          parseInt(i.css("padding-top") || 0, 10) -
          parseInt(i.css("padding-bottom") || 0, 10)),
        Number.isNaN(t) && (t = 0),
        Number.isNaN(n) && (n = 0),
        Object.assign(e, {
          width: t,
          height: n,
          size: e.isHorizontal() ? t : n,
        }));
  }
  function Ns() {
    const e = this;
    function t(P) {
      return e.isHorizontal()
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
    function n(P, M) {
      return parseFloat(P.getPropertyValue(t(M)) || 0);
    }
    const i = e.params,
      { $wrapperEl: r, size: a, rtlTranslate: s, wrongRTL: o } = e,
      l = e.virtual && i.virtual.enabled,
      u = l ? e.virtual.slides.length : e.slides.length,
      c = r.children(`.${e.params.slideClass}`),
      d = l ? e.virtual.slides.length : c.length;
    let f = [];
    const p = [],
      g = [];
    let h = i.slidesOffsetBefore;
    typeof h == "function" && (h = i.slidesOffsetBefore.call(e));
    let m = i.slidesOffsetAfter;
    typeof m == "function" && (m = i.slidesOffsetAfter.call(e));
    const b = e.snapGrid.length,
      v = e.slidesGrid.length;
    let y = i.spaceBetween,
      E = -h,
      T = 0,
      S = 0;
    if (typeof a > "u") return;
    typeof y == "string" &&
      y.indexOf("%") >= 0 &&
      (y = (parseFloat(y.replace("%", "")) / 100) * a),
      (e.virtualSize = -y),
      s
        ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
        : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
      i.centeredSlides &&
        i.cssMode &&
        (Ot(e.wrapperEl, "--swiper-centered-offset-before", ""),
        Ot(e.wrapperEl, "--swiper-centered-offset-after", ""));
    const C = i.grid && i.grid.rows > 1 && e.grid;
    C && e.grid.initSlides(d);
    let A;
    const k =
      i.slidesPerView === "auto" &&
      i.breakpoints &&
      Object.keys(i.breakpoints).filter(
        (P) => typeof i.breakpoints[P].slidesPerView < "u"
      ).length > 0;
    for (let P = 0; P < d; P += 1) {
      A = 0;
      const M = c.eq(P);
      if ((C && e.grid.updateSlide(P, M, d, t), M.css("display") !== "none")) {
        if (i.slidesPerView === "auto") {
          k && (c[P].style[t("width")] = "");
          const _ = getComputedStyle(M[0]),
            x = M[0].style.transform,
            $ = M[0].style.webkitTransform;
          if (
            (x && (M[0].style.transform = "none"),
            $ && (M[0].style.webkitTransform = "none"),
            i.roundLengths)
          )
            A = e.isHorizontal() ? M.outerWidth(!0) : M.outerHeight(!0);
          else {
            const I = n(_, "width"),
              w = n(_, "padding-left"),
              O = n(_, "padding-right"),
              z = n(_, "margin-left"),
              L = n(_, "margin-right"),
              R = _.getPropertyValue("box-sizing");
            if (R && R === "border-box") A = I + z + L;
            else {
              const { clientWidth: Y, offsetWidth: j } = M[0];
              A = I + w + O + z + L + (j - Y);
            }
          }
          x && (M[0].style.transform = x),
            $ && (M[0].style.webkitTransform = $),
            i.roundLengths && (A = Math.floor(A));
        } else
          (A = (a - (i.slidesPerView - 1) * y) / i.slidesPerView),
            i.roundLengths && (A = Math.floor(A)),
            c[P] && (c[P].style[t("width")] = `${A}px`);
        c[P] && (c[P].swiperSlideSize = A),
          g.push(A),
          i.centeredSlides
            ? ((E = E + A / 2 + T / 2 + y),
              T === 0 && P !== 0 && (E = E - a / 2 - y),
              P === 0 && (E = E - a / 2 - y),
              Math.abs(E) < 1 / 1e3 && (E = 0),
              i.roundLengths && (E = Math.floor(E)),
              S % i.slidesPerGroup === 0 && f.push(E),
              p.push(E))
            : (i.roundLengths && (E = Math.floor(E)),
              (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                e.params.slidesPerGroup ===
                0 && f.push(E),
              p.push(E),
              (E = E + A + y)),
          (e.virtualSize += A + y),
          (T = A),
          (S += 1);
      }
    }
    if (
      ((e.virtualSize = Math.max(e.virtualSize, a) + m),
      s &&
        o &&
        (i.effect === "slide" || i.effect === "coverflow") &&
        r.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
      i.setWrapperSize &&
        r.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
      C && e.grid.updateWrapperSize(A, f, t),
      !i.centeredSlides)
    ) {
      const P = [];
      for (let M = 0; M < f.length; M += 1) {
        let _ = f[M];
        i.roundLengths && (_ = Math.floor(_)),
          f[M] <= e.virtualSize - a && P.push(_);
      }
      (f = P),
        Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) > 1 &&
          f.push(e.virtualSize - a);
    }
    if ((f.length === 0 && (f = [0]), i.spaceBetween !== 0)) {
      const P = e.isHorizontal() && s ? "marginLeft" : t("marginRight");
      c.filter((M, _) => (i.cssMode ? _ !== c.length - 1 : !0)).css({
        [P]: `${y}px`,
      });
    }
    if (i.centeredSlides && i.centeredSlidesBounds) {
      let P = 0;
      g.forEach((_) => {
        P += _ + (i.spaceBetween ? i.spaceBetween : 0);
      }),
        (P -= i.spaceBetween);
      const M = P - a;
      f = f.map((_) => (_ < 0 ? -h : _ > M ? M + m : _));
    }
    if (i.centerInsufficientSlides) {
      let P = 0;
      if (
        (g.forEach((M) => {
          P += M + (i.spaceBetween ? i.spaceBetween : 0);
        }),
        (P -= i.spaceBetween),
        P < a)
      ) {
        const M = (a - P) / 2;
        f.forEach((_, x) => {
          f[x] = _ - M;
        }),
          p.forEach((_, x) => {
            p[x] = _ + M;
          });
      }
    }
    if (
      (Object.assign(e, {
        slides: c,
        snapGrid: f,
        slidesGrid: p,
        slidesSizesGrid: g,
      }),
      i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
    ) {
      Ot(e.wrapperEl, "--swiper-centered-offset-before", `${-f[0]}px`),
        Ot(
          e.wrapperEl,
          "--swiper-centered-offset-after",
          `${e.size / 2 - g[g.length - 1] / 2}px`
        );
      const P = -e.snapGrid[0],
        M = -e.slidesGrid[0];
      (e.snapGrid = e.snapGrid.map((_) => _ + P)),
        (e.slidesGrid = e.slidesGrid.map((_) => _ + M));
    }
    if (
      (d !== u && e.emit("slidesLengthChange"),
      f.length !== b &&
        (e.params.watchOverflow && e.checkOverflow(),
        e.emit("snapGridLengthChange")),
      p.length !== v && e.emit("slidesGridLengthChange"),
      i.watchSlidesProgress && e.updateSlidesOffset(),
      !l && !i.cssMode && (i.effect === "slide" || i.effect === "fade"))
    ) {
      const P = `${i.containerModifierClass}backface-hidden`,
        M = e.$el.hasClass(P);
      d <= i.maxBackfaceHiddenSlides
        ? M || e.$el.addClass(P)
        : M && e.$el.removeClass(P);
    }
  }
  function Fs(e) {
    const t = this,
      n = [],
      i = t.virtual && t.params.virtual.enabled;
    let r = 0,
      a;
    typeof e == "number"
      ? t.setTransition(e)
      : e === !0 && t.setTransition(t.params.speed);
    const s = (o) =>
      i
        ? t.slides.filter(
            (l) => parseInt(l.getAttribute("data-swiper-slide-index"), 10) === o
          )[0]
        : t.slides.eq(o)[0];
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
      if (t.params.centeredSlides)
        (t.visibleSlides || D([])).each((o) => {
          n.push(o);
        });
      else
        for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
          const o = t.activeIndex + a;
          if (o > t.slides.length && !i) break;
          n.push(s(o));
        }
    else n.push(s(t.activeIndex));
    for (a = 0; a < n.length; a += 1)
      if (typeof n[a] < "u") {
        const o = n[a].offsetHeight;
        r = o > r ? o : r;
      }
    (r || r === 0) && t.$wrapperEl.css("height", `${r}px`);
  }
  function Bs() {
    const e = this,
      t = e.slides;
    for (let n = 0; n < t.length; n += 1)
      t[n].swiperSlideOffset = e.isHorizontal()
        ? t[n].offsetLeft
        : t[n].offsetTop;
  }
  function Ys(e = (this && this.translate) || 0) {
    const t = this,
      n = t.params,
      { slides: i, rtlTranslate: r, snapGrid: a } = t;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let s = -e;
    r && (s = e),
      i.removeClass(n.slideVisibleClass),
      (t.visibleSlidesIndexes = []),
      (t.visibleSlides = []);
    for (let o = 0; o < i.length; o += 1) {
      const l = i[o];
      let u = l.swiperSlideOffset;
      n.cssMode && n.centeredSlides && (u -= i[0].swiperSlideOffset);
      const c =
          (s + (n.centeredSlides ? t.minTranslate() : 0) - u) /
          (l.swiperSlideSize + n.spaceBetween),
        d =
          (s - a[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
          (l.swiperSlideSize + n.spaceBetween),
        f = -(s - u),
        p = f + t.slidesSizesGrid[o];
      ((f >= 0 && f < t.size - 1) ||
        (p > 1 && p <= t.size) ||
        (f <= 0 && p >= t.size)) &&
        (t.visibleSlides.push(l),
        t.visibleSlidesIndexes.push(o),
        i.eq(o).addClass(n.slideVisibleClass)),
        (l.progress = r ? -c : c),
        (l.originalProgress = r ? -d : d);
    }
    t.visibleSlides = D(t.visibleSlides);
  }
  function Vs(e) {
    const t = this;
    if (typeof e > "u") {
      const u = t.rtlTranslate ? -1 : 1;
      e = (t && t.translate && t.translate * u) || 0;
    }
    const n = t.params,
      i = t.maxTranslate() - t.minTranslate();
    let { progress: r, isBeginning: a, isEnd: s } = t;
    const o = a,
      l = s;
    i === 0
      ? ((r = 0), (a = !0), (s = !0))
      : ((r = (e - t.minTranslate()) / i), (a = r <= 0), (s = r >= 1)),
      Object.assign(t, { progress: r, isBeginning: a, isEnd: s }),
      (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
        t.updateSlidesProgress(e),
      a && !o && t.emit("reachBeginning toEdge"),
      s && !l && t.emit("reachEnd toEdge"),
      ((o && !a) || (l && !s)) && t.emit("fromEdge"),
      t.emit("progress", r);
  }
  function Gs() {
    const e = this,
      { slides: t, params: n, $wrapperEl: i, activeIndex: r, realIndex: a } = e,
      s = e.virtual && n.virtual.enabled;
    t.removeClass(
      `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
    );
    let o;
    s
      ? (o = e.$wrapperEl.find(
          `.${n.slideClass}[data-swiper-slide-index="${r}"]`
        ))
      : (o = t.eq(r)),
      o.addClass(n.slideActiveClass),
      n.loop &&
        (o.hasClass(n.slideDuplicateClass)
          ? i
              .children(
                `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${a}"]`
              )
              .addClass(n.slideDuplicateActiveClass)
          : i
              .children(
                `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${a}"]`
              )
              .addClass(n.slideDuplicateActiveClass));
    let l = o.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
    n.loop && l.length === 0 && ((l = t.eq(0)), l.addClass(n.slideNextClass));
    let u = o.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
    n.loop && u.length === 0 && ((u = t.eq(-1)), u.addClass(n.slidePrevClass)),
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
        u.hasClass(n.slideDuplicateClass)
          ? i
              .children(
                `.${n.slideClass}:not(.${
                  n.slideDuplicateClass
                })[data-swiper-slide-index="${u.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(n.slideDuplicatePrevClass)
          : i
              .children(
                `.${n.slideClass}.${
                  n.slideDuplicateClass
                }[data-swiper-slide-index="${u.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(n.slideDuplicatePrevClass)),
      e.emitSlidesClasses();
  }
  function qs(e) {
    const t = this,
      n = t.rtlTranslate ? t.translate : -t.translate,
      {
        slidesGrid: i,
        snapGrid: r,
        params: a,
        activeIndex: s,
        realIndex: o,
        snapIndex: l,
      } = t;
    let u = e,
      c;
    if (typeof u > "u") {
      for (let f = 0; f < i.length; f += 1)
        typeof i[f + 1] < "u"
          ? n >= i[f] && n < i[f + 1] - (i[f + 1] - i[f]) / 2
            ? (u = f)
            : n >= i[f] && n < i[f + 1] && (u = f + 1)
          : n >= i[f] && (u = f);
      a.normalizeSlideIndex && (u < 0 || typeof u > "u") && (u = 0);
    }
    if (r.indexOf(n) >= 0) c = r.indexOf(n);
    else {
      const f = Math.min(a.slidesPerGroupSkip, u);
      c = f + Math.floor((u - f) / a.slidesPerGroup);
    }
    if ((c >= r.length && (c = r.length - 1), u === s)) {
      c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"));
      return;
    }
    const d = parseInt(t.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
    Object.assign(t, {
      snapIndex: c,
      realIndex: d,
      previousIndex: s,
      activeIndex: u,
    }),
      t.emit("activeIndexChange"),
      t.emit("snapIndexChange"),
      o !== d && t.emit("realIndexChange"),
      (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
  }
  function Hs(e) {
    const t = this,
      n = t.params,
      i = D(e).closest(`.${n.slideClass}`)[0];
    let r = !1,
      a;
    if (i) {
      for (let s = 0; s < t.slides.length; s += 1)
        if (t.slides[s] === i) {
          (r = !0), (a = s);
          break;
        }
    }
    if (i && r)
      (t.clickedSlide = i),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              D(i).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = a);
    else {
      (t.clickedSlide = void 0), (t.clickedIndex = void 0);
      return;
    }
    n.slideToClickedSlide &&
      t.clickedIndex !== void 0 &&
      t.clickedIndex !== t.activeIndex &&
      t.slideToClickedSlide();
  }
  const Xs = {
    updateSize: Rs,
    updateSlides: Ns,
    updateAutoHeight: Fs,
    updateSlidesOffset: Bs,
    updateSlidesProgress: Ys,
    updateProgress: Vs,
    updateSlidesClasses: Gs,
    updateActiveIndex: qs,
    updateClickedSlide: Hs,
  };
  function js(e = this.isHorizontal() ? "x" : "y") {
    const t = this,
      { params: n, rtlTranslate: i, translate: r, $wrapperEl: a } = t;
    if (n.virtualTranslate) return i ? -r : r;
    if (n.cssMode) return r;
    let s = wn(a[0], e);
    return i && (s = -s), s || 0;
  }
  function Ws(e, t) {
    const n = this,
      {
        rtlTranslate: i,
        params: r,
        $wrapperEl: a,
        wrapperEl: s,
        progress: o,
      } = n;
    let l = 0,
      u = 0;
    const c = 0;
    n.isHorizontal() ? (l = i ? -e : e) : (u = e),
      r.roundLengths && ((l = Math.floor(l)), (u = Math.floor(u))),
      r.cssMode
        ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
            ? -l
            : -u)
        : r.virtualTranslate ||
          a.transform(`translate3d(${l}px, ${u}px, ${c}px)`),
      (n.previousTranslate = n.translate),
      (n.translate = n.isHorizontal() ? l : u);
    let d;
    const f = n.maxTranslate() - n.minTranslate();
    f === 0 ? (d = 0) : (d = (e - n.minTranslate()) / f),
      d !== o && n.updateProgress(e),
      n.emit("setTranslate", n.translate, t);
  }
  function Us() {
    return -this.snapGrid[0];
  }
  function Qs() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function Zs(e = 0, t = this.params.speed, n = !0, i = !0, r) {
    const a = this,
      { params: s, wrapperEl: o } = a;
    if (a.animating && s.preventInteractionOnTransition) return !1;
    const l = a.minTranslate(),
      u = a.maxTranslate();
    let c;
    if (
      (i && e > l ? (c = l) : i && e < u ? (c = u) : (c = e),
      a.updateProgress(c),
      s.cssMode)
    ) {
      const d = a.isHorizontal();
      if (t === 0) o[d ? "scrollLeft" : "scrollTop"] = -c;
      else {
        if (!a.support.smoothScroll)
          return (
            Ni({ swiper: a, targetPosition: -c, side: d ? "left" : "top" }), !0
          );
        o.scrollTo({ [d ? "left" : "top"]: -c, behavior: "smooth" });
      }
      return !0;
    }
    return (
      t === 0
        ? (a.setTransition(0),
          a.setTranslate(c),
          n && (a.emit("beforeTransitionStart", t, r), a.emit("transitionEnd")))
        : (a.setTransition(t),
          a.setTranslate(c),
          n &&
            (a.emit("beforeTransitionStart", t, r), a.emit("transitionStart")),
          a.animating ||
            ((a.animating = !0),
            a.onTranslateToWrapperTransitionEnd ||
              (a.onTranslateToWrapperTransitionEnd = function (f) {
                !a ||
                  a.destroyed ||
                  (f.target === this &&
                    (a.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      a.onTranslateToWrapperTransitionEnd
                    ),
                    a.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      a.onTranslateToWrapperTransitionEnd
                    ),
                    (a.onTranslateToWrapperTransitionEnd = null),
                    delete a.onTranslateToWrapperTransitionEnd,
                    n && a.emit("transitionEnd")));
              }),
            a.$wrapperEl[0].addEventListener(
              "transitionend",
              a.onTranslateToWrapperTransitionEnd
            ),
            a.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              a.onTranslateToWrapperTransitionEnd
            ))),
      !0
    );
  }
  const Ks = {
    getTranslate: js,
    setTranslate: Ws,
    minTranslate: Us,
    maxTranslate: Qs,
    translateTo: Zs,
  };
  function Js(e, t) {
    const n = this;
    n.params.cssMode || n.$wrapperEl.transition(e),
      n.emit("setTransition", e, t);
  }
  function Bi({ swiper: e, runCallbacks: t, direction: n, step: i }) {
    const { activeIndex: r, previousIndex: a } = e;
    let s = n;
    if (
      (s || (r > a ? (s = "next") : r < a ? (s = "prev") : (s = "reset")),
      e.emit(`transition${i}`),
      t && r !== a)
    ) {
      if (s === "reset") {
        e.emit(`slideResetTransition${i}`);
        return;
      }
      e.emit(`slideChangeTransition${i}`),
        s === "next"
          ? e.emit(`slideNextTransition${i}`)
          : e.emit(`slidePrevTransition${i}`);
    }
  }
  function eo(e = !0, t) {
    const n = this,
      { params: i } = n;
    i.cssMode ||
      (i.autoHeight && n.updateAutoHeight(),
      Bi({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
  }
  function to(e = !0, t) {
    const n = this,
      { params: i } = n;
    (n.animating = !1),
      !i.cssMode &&
        (n.setTransition(0),
        Bi({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
  }
  const no = { setTransition: Js, transitionStart: eo, transitionEnd: to };
  function io(e = 0, t = this.params.speed, n = !0, i, r) {
    if (typeof e != "number" && typeof e != "string")
      throw new Error(
        `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
      );
    if (typeof e == "string") {
      const y = parseInt(e, 10);
      if (!isFinite(y))
        throw new Error(
          `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
        );
      e = y;
    }
    const a = this;
    let s = e;
    s < 0 && (s = 0);
    const {
      params: o,
      snapGrid: l,
      slidesGrid: u,
      previousIndex: c,
      activeIndex: d,
      rtlTranslate: f,
      wrapperEl: p,
      enabled: g,
    } = a;
    if ((a.animating && o.preventInteractionOnTransition) || (!g && !i && !r))
      return !1;
    const h = Math.min(a.params.slidesPerGroupSkip, s);
    let m = h + Math.floor((s - h) / a.params.slidesPerGroup);
    m >= l.length && (m = l.length - 1);
    const b = -l[m];
    if (o.normalizeSlideIndex)
      for (let y = 0; y < u.length; y += 1) {
        const E = -Math.floor(b * 100),
          T = Math.floor(u[y] * 100),
          S = Math.floor(u[y + 1] * 100);
        typeof u[y + 1] < "u"
          ? E >= T && E < S - (S - T) / 2
            ? (s = y)
            : E >= T && E < S && (s = y + 1)
          : E >= T && (s = y);
      }
    if (
      a.initialized &&
      s !== d &&
      ((!a.allowSlideNext && b < a.translate && b < a.minTranslate()) ||
        (!a.allowSlidePrev &&
          b > a.translate &&
          b > a.maxTranslate() &&
          (d || 0) !== s))
    )
      return !1;
    s !== (c || 0) && n && a.emit("beforeSlideChangeStart"),
      a.updateProgress(b);
    let v;
    if (
      (s > d ? (v = "next") : s < d ? (v = "prev") : (v = "reset"),
      (f && -b === a.translate) || (!f && b === a.translate))
    )
      return (
        a.updateActiveIndex(s),
        o.autoHeight && a.updateAutoHeight(),
        a.updateSlidesClasses(),
        o.effect !== "slide" && a.setTranslate(b),
        v !== "reset" && (a.transitionStart(n, v), a.transitionEnd(n, v)),
        !1
      );
    if (o.cssMode) {
      const y = a.isHorizontal(),
        E = f ? b : -b;
      if (t === 0) {
        const T = a.virtual && a.params.virtual.enabled;
        T &&
          ((a.wrapperEl.style.scrollSnapType = "none"),
          (a._immediateVirtual = !0)),
          (p[y ? "scrollLeft" : "scrollTop"] = E),
          T &&
            requestAnimationFrame(() => {
              (a.wrapperEl.style.scrollSnapType = ""),
                (a._swiperImmediateVirtual = !1);
            });
      } else {
        if (!a.support.smoothScroll)
          return (
            Ni({ swiper: a, targetPosition: E, side: y ? "left" : "top" }), !0
          );
        p.scrollTo({ [y ? "left" : "top"]: E, behavior: "smooth" });
      }
      return !0;
    }
    return (
      a.setTransition(t),
      a.setTranslate(b),
      a.updateActiveIndex(s),
      a.updateSlidesClasses(),
      a.emit("beforeTransitionStart", t, i),
      a.transitionStart(n, v),
      t === 0
        ? a.transitionEnd(n, v)
        : a.animating ||
          ((a.animating = !0),
          a.onSlideToWrapperTransitionEnd ||
            (a.onSlideToWrapperTransitionEnd = function (E) {
              !a ||
                a.destroyed ||
                (E.target === this &&
                  (a.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    a.onSlideToWrapperTransitionEnd
                  ),
                  a.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    a.onSlideToWrapperTransitionEnd
                  ),
                  (a.onSlideToWrapperTransitionEnd = null),
                  delete a.onSlideToWrapperTransitionEnd,
                  a.transitionEnd(n, v)));
            }),
          a.$wrapperEl[0].addEventListener(
            "transitionend",
            a.onSlideToWrapperTransitionEnd
          ),
          a.$wrapperEl[0].addEventListener(
            "webkitTransitionEnd",
            a.onSlideToWrapperTransitionEnd
          )),
      !0
    );
  }
  function ro(e = 0, t = this.params.speed, n = !0, i) {
    if (typeof e == "string") {
      const s = parseInt(e, 10);
      if (!isFinite(s))
        throw new Error(
          `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
        );
      e = s;
    }
    const r = this;
    let a = e;
    return r.params.loop && (a += r.loopedSlides), r.slideTo(a, t, n, i);
  }
  function ao(e = this.params.speed, t = !0, n) {
    const i = this,
      { animating: r, enabled: a, params: s } = i;
    if (!a) return i;
    let o = s.slidesPerGroup;
    s.slidesPerView === "auto" &&
      s.slidesPerGroup === 1 &&
      s.slidesPerGroupAuto &&
      (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const l = i.activeIndex < s.slidesPerGroupSkip ? 1 : o;
    if (s.loop) {
      if (r && s.loopPreventsSlide) return !1;
      i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
    }
    return s.rewind && i.isEnd
      ? i.slideTo(0, e, t, n)
      : i.slideTo(i.activeIndex + l, e, t, n);
  }
  function so(e = this.params.speed, t = !0, n) {
    const i = this,
      {
        params: r,
        animating: a,
        snapGrid: s,
        slidesGrid: o,
        rtlTranslate: l,
        enabled: u,
      } = i;
    if (!u) return i;
    if (r.loop) {
      if (a && r.loopPreventsSlide) return !1;
      i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
    }
    const c = l ? i.translate : -i.translate;
    function d(m) {
      return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m);
    }
    const f = d(c),
      p = s.map((m) => d(m));
    let g = s[p.indexOf(f) - 1];
    if (typeof g > "u" && r.cssMode) {
      let m;
      s.forEach((b, v) => {
        f >= b && (m = v);
      }),
        typeof m < "u" && (g = s[m > 0 ? m - 1 : m]);
    }
    let h = 0;
    if (
      (typeof g < "u" &&
        ((h = o.indexOf(g)),
        h < 0 && (h = i.activeIndex - 1),
        r.slidesPerView === "auto" &&
          r.slidesPerGroup === 1 &&
          r.slidesPerGroupAuto &&
          ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
          (h = Math.max(h, 0)))),
      r.rewind && i.isBeginning)
    ) {
      const m =
        i.params.virtual && i.params.virtual.enabled && i.virtual
          ? i.virtual.slides.length - 1
          : i.slides.length - 1;
      return i.slideTo(m, e, t, n);
    }
    return i.slideTo(h, e, t, n);
  }
  function oo(e = this.params.speed, t = !0, n) {
    const i = this;
    return i.slideTo(i.activeIndex, e, t, n);
  }
  function lo(e = this.params.speed, t = !0, n, i = 0.5) {
    const r = this;
    let a = r.activeIndex;
    const s = Math.min(r.params.slidesPerGroupSkip, a),
      o = s + Math.floor((a - s) / r.params.slidesPerGroup),
      l = r.rtlTranslate ? r.translate : -r.translate;
    if (l >= r.snapGrid[o]) {
      const u = r.snapGrid[o],
        c = r.snapGrid[o + 1];
      l - u > (c - u) * i && (a += r.params.slidesPerGroup);
    } else {
      const u = r.snapGrid[o - 1],
        c = r.snapGrid[o];
      l - u <= (c - u) * i && (a -= r.params.slidesPerGroup);
    }
    return (
      (a = Math.max(a, 0)),
      (a = Math.min(a, r.slidesGrid.length - 1)),
      r.slideTo(a, e, t, n)
    );
  }
  function uo() {
    const e = this,
      { params: t, $wrapperEl: n } = e,
      i =
        t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let r = e.clickedIndex,
      a;
    if (t.loop) {
      if (e.animating) return;
      (a = parseInt(D(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
        t.centeredSlides
          ? r < e.loopedSlides - i / 2 ||
            r > e.slides.length - e.loopedSlides + i / 2
            ? (e.loopFix(),
              (r = n
                .children(
                  `.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              Be(() => {
                e.slideTo(r);
              }))
            : e.slideTo(r)
          : r > e.slides.length - i
          ? (e.loopFix(),
            (r = n
              .children(
                `.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            Be(() => {
              e.slideTo(r);
            }))
          : e.slideTo(r);
    } else e.slideTo(r);
  }
  const co = {
    slideTo: io,
    slideToLoop: ro,
    slideNext: ao,
    slidePrev: so,
    slideReset: oo,
    slideToClosest: lo,
    slideToClickedSlide: uo,
  };
  function fo() {
    const e = this,
      t = W(),
      { params: n, $wrapperEl: i } = e,
      r = i.children().length > 0 ? D(i.children()[0].parentNode) : i;
    r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
    let a = r.children(`.${n.slideClass}`);
    if (n.loopFillGroupWithBlank) {
      const l = n.slidesPerGroup - (a.length % n.slidesPerGroup);
      if (l !== n.slidesPerGroup) {
        for (let u = 0; u < l; u += 1) {
          const c = D(t.createElement("div")).addClass(
            `${n.slideClass} ${n.slideBlankClass}`
          );
          r.append(c);
        }
        a = r.children(`.${n.slideClass}`);
      }
    }
    n.slidesPerView === "auto" &&
      !n.loopedSlides &&
      (n.loopedSlides = a.length),
      (e.loopedSlides = Math.ceil(
        parseFloat(n.loopedSlides || n.slidesPerView, 10)
      )),
      (e.loopedSlides += n.loopAdditionalSlides),
      e.loopedSlides > a.length &&
        e.params.loopedSlidesLimit &&
        (e.loopedSlides = a.length);
    const s = [],
      o = [];
    a.each((l, u) => {
      D(l).attr("data-swiper-slide-index", u);
    });
    for (let l = 0; l < e.loopedSlides; l += 1) {
      const u = l - Math.floor(l / a.length) * a.length;
      o.push(a.eq(u)[0]), s.unshift(a.eq(a.length - u - 1)[0]);
    }
    for (let l = 0; l < o.length; l += 1)
      r.append(D(o[l].cloneNode(!0)).addClass(n.slideDuplicateClass));
    for (let l = s.length - 1; l >= 0; l -= 1)
      r.prepend(D(s[l].cloneNode(!0)).addClass(n.slideDuplicateClass));
  }
  function ho() {
    const e = this;
    e.emit("beforeLoopFix");
    const {
      activeIndex: t,
      slides: n,
      loopedSlides: i,
      allowSlidePrev: r,
      allowSlideNext: a,
      snapGrid: s,
      rtlTranslate: o,
    } = e;
    let l;
    (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
    const c = -s[t] - e.getTranslate();
    t < i
      ? ((l = n.length - i * 3 + t),
        (l += i),
        e.slideTo(l, 0, !1, !0) &&
          c !== 0 &&
          e.setTranslate((o ? -e.translate : e.translate) - c))
      : t >= n.length - i &&
        ((l = -n.length + t + i),
        (l += i),
        e.slideTo(l, 0, !1, !0) &&
          c !== 0 &&
          e.setTranslate((o ? -e.translate : e.translate) - c)),
      (e.allowSlidePrev = r),
      (e.allowSlideNext = a),
      e.emit("loopFix");
  }
  function po() {
    const e = this,
      { $wrapperEl: t, params: n, slides: i } = e;
    t
      .children(
        `.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`
      )
      .remove(),
      i.removeAttr("data-swiper-slide-index");
  }
  const mo = { loopCreate: fo, loopFix: ho, loopDestroy: po };
  function go(e) {
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
  function vo() {
    const e = this;
    e.support.touch ||
      (e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode ||
      (e[
        e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = "");
  }
  const yo = { setGrabCursor: go, unsetGrabCursor: vo };
  function bo(e, t = this) {
    function n(i) {
      if (!i || i === W() || i === F()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const r = i.closest(e);
      return !r && !i.getRootNode ? null : r || n(i.getRootNode().host);
    }
    return n(t);
  }
  function _o(e) {
    const t = this,
      n = W(),
      i = F(),
      r = t.touchEventsData,
      { params: a, touches: s, enabled: o } = t;
    if (!o || (t.animating && a.preventInteractionOnTransition)) return;
    !t.animating && a.cssMode && a.loop && t.loopFix();
    let l = e;
    l.originalEvent && (l = l.originalEvent);
    let u = D(l.target);
    if (
      (a.touchEventsTarget === "wrapper" && !u.closest(t.wrapperEl).length) ||
      ((r.isTouchEvent = l.type === "touchstart"),
      !r.isTouchEvent && "which" in l && l.which === 3) ||
      (!r.isTouchEvent && "button" in l && l.button > 0) ||
      (r.isTouched && r.isMoved)
    )
      return;
    const c = !!a.noSwipingClass && a.noSwipingClass !== "",
      d = e.composedPath ? e.composedPath() : e.path;
    c && l.target && l.target.shadowRoot && d && (u = D(d[0]));
    const f = a.noSwipingSelector
        ? a.noSwipingSelector
        : `.${a.noSwipingClass}`,
      p = !!(l.target && l.target.shadowRoot);
    if (a.noSwiping && (p ? bo(f, u[0]) : u.closest(f)[0])) {
      t.allowClick = !0;
      return;
    }
    if (a.swipeHandler && !u.closest(a.swipeHandler)[0]) return;
    (s.currentX = l.type === "touchstart" ? l.targetTouches[0].pageX : l.pageX),
      (s.currentY =
        l.type === "touchstart" ? l.targetTouches[0].pageY : l.pageY);
    const g = s.currentX,
      h = s.currentY,
      m = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
      b = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
    if (m && (g <= b || g >= i.innerWidth - b))
      if (m === "prevent") e.preventDefault();
      else return;
    if (
      (Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (s.startX = g),
      (s.startY = h),
      (r.touchStartTime = he()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      a.threshold > 0 && (r.allowThresholdMove = !1),
      l.type !== "touchstart")
    ) {
      let v = !0;
      u.is(r.focusableElements) &&
        ((v = !1), u[0].nodeName === "SELECT" && (r.isTouched = !1)),
        n.activeElement &&
          D(n.activeElement).is(r.focusableElements) &&
          n.activeElement !== u[0] &&
          n.activeElement.blur();
      const y = v && t.allowTouchMove && a.touchStartPreventDefault;
      (a.touchStartForcePreventDefault || y) &&
        !u[0].isContentEditable &&
        l.preventDefault();
    }
    t.params.freeMode &&
      t.params.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !a.cssMode &&
      t.freeMode.onTouchStart(),
      t.emit("touchStart", l);
  }
  function xo(e) {
    const t = W(),
      n = this,
      i = n.touchEventsData,
      { params: r, touches: a, rtlTranslate: s, enabled: o } = n;
    if (!o) return;
    let l = e;
    if ((l.originalEvent && (l = l.originalEvent), !i.isTouched)) {
      i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", l);
      return;
    }
    if (i.isTouchEvent && l.type !== "touchmove") return;
    const u =
        l.type === "touchmove" &&
        l.targetTouches &&
        (l.targetTouches[0] || l.changedTouches[0]),
      c = l.type === "touchmove" ? u.pageX : l.pageX,
      d = l.type === "touchmove" ? u.pageY : l.pageY;
    if (l.preventedByNestedSwiper) {
      (a.startX = c), (a.startY = d);
      return;
    }
    if (!n.allowTouchMove) {
      D(l.target).is(i.focusableElements) || (n.allowClick = !1),
        i.isTouched &&
          (Object.assign(a, { startX: c, startY: d, currentX: c, currentY: d }),
          (i.touchStartTime = he()));
      return;
    }
    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
      if (n.isVertical()) {
        if (
          (d < a.startY && n.translate <= n.maxTranslate()) ||
          (d > a.startY && n.translate >= n.minTranslate())
        ) {
          (i.isTouched = !1), (i.isMoved = !1);
          return;
        }
      } else if (
        (c < a.startX && n.translate <= n.maxTranslate()) ||
        (c > a.startX && n.translate >= n.minTranslate())
      )
        return;
    }
    if (
      i.isTouchEvent &&
      t.activeElement &&
      l.target === t.activeElement &&
      D(l.target).is(i.focusableElements)
    ) {
      (i.isMoved = !0), (n.allowClick = !1);
      return;
    }
    if (
      (i.allowTouchCallbacks && n.emit("touchMove", l),
      l.targetTouches && l.targetTouches.length > 1)
    )
      return;
    (a.currentX = c), (a.currentY = d);
    const f = a.currentX - a.startX,
      p = a.currentY - a.startY;
    if (n.params.threshold && Math.sqrt(f ** 2 + p ** 2) < n.params.threshold)
      return;
    if (typeof i.isScrolling > "u") {
      let b;
      (n.isHorizontal() && a.currentY === a.startY) ||
      (n.isVertical() && a.currentX === a.startX)
        ? (i.isScrolling = !1)
        : f * f + p * p >= 25 &&
          ((b = (Math.atan2(Math.abs(p), Math.abs(f)) * 180) / Math.PI),
          (i.isScrolling = n.isHorizontal()
            ? b > r.touchAngle
            : 90 - b > r.touchAngle));
    }
    if (
      (i.isScrolling && n.emit("touchMoveOpposite", l),
      typeof i.startMoving > "u" &&
        (a.currentX !== a.startX || a.currentY !== a.startY) &&
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
    let g = n.isHorizontal() ? f : p;
    (a.diff = g),
      (g *= r.touchRatio),
      s && (g = -g),
      (n.swipeDirection = g > 0 ? "prev" : "next"),
      (i.currentTranslate = g + i.startTranslate);
    let h = !0,
      m = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (m = 0),
      g > 0 && i.currentTranslate > n.minTranslate()
        ? ((h = !1),
          r.resistance &&
            (i.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + i.startTranslate + g) ** m))
        : g < 0 &&
          i.currentTranslate < n.maxTranslate() &&
          ((h = !1),
          r.resistance &&
            (i.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - i.startTranslate - g) ** m)),
      h && (l.preventedByNestedSwiper = !0),
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
      if (Math.abs(g) > r.threshold || i.allowThresholdMove) {
        if (!i.allowThresholdMove) {
          (i.allowThresholdMove = !0),
            (a.startX = a.currentX),
            (a.startY = a.currentY),
            (i.currentTranslate = i.startTranslate),
            (a.diff = n.isHorizontal()
              ? a.currentX - a.startX
              : a.currentY - a.startY);
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
  function To(e) {
    const t = this,
      n = t.touchEventsData,
      { params: i, touches: r, rtlTranslate: a, slidesGrid: s, enabled: o } = t;
    if (!o) return;
    let l = e;
    if (
      (l.originalEvent && (l = l.originalEvent),
      n.allowTouchCallbacks && t.emit("touchEnd", l),
      (n.allowTouchCallbacks = !1),
      !n.isTouched)
    ) {
      n.isMoved && i.grabCursor && t.setGrabCursor(!1),
        (n.isMoved = !1),
        (n.startMoving = !1);
      return;
    }
    i.grabCursor &&
      n.isMoved &&
      n.isTouched &&
      (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
      t.setGrabCursor(!1);
    const u = he(),
      c = u - n.touchStartTime;
    if (t.allowClick) {
      const v = l.path || (l.composedPath && l.composedPath());
      t.updateClickedSlide((v && v[0]) || l.target),
        t.emit("tap click", l),
        c < 300 &&
          u - n.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", l);
    }
    if (
      ((n.lastClickTime = he()),
      Be(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !n.isTouched ||
        !n.isMoved ||
        !t.swipeDirection ||
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
        ? (d = a ? t.translate : -t.translate)
        : (d = -n.currentTranslate),
      i.cssMode)
    )
      return;
    if (t.params.freeMode && i.freeMode.enabled) {
      t.freeMode.onTouchEnd({ currentPos: d });
      return;
    }
    let f = 0,
      p = t.slidesSizesGrid[0];
    for (
      let v = 0;
      v < s.length;
      v += v < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
    ) {
      const y = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      typeof s[v + y] < "u"
        ? d >= s[v] && d < s[v + y] && ((f = v), (p = s[v + y] - s[v]))
        : d >= s[v] && ((f = v), (p = s[s.length - 1] - s[s.length - 2]));
    }
    let g = null,
      h = null;
    i.rewind &&
      (t.isBeginning
        ? (h =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (g = 0));
    const m = (d - s[f]) / p,
      b = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (c > i.longSwipesMs) {
      if (!i.longSwipes) {
        t.slideTo(t.activeIndex);
        return;
      }
      t.swipeDirection === "next" &&
        (m >= i.longSwipesRatio
          ? t.slideTo(i.rewind && t.isEnd ? g : f + b)
          : t.slideTo(f)),
        t.swipeDirection === "prev" &&
          (m > 1 - i.longSwipesRatio
            ? t.slideTo(f + b)
            : h !== null && m < 0 && Math.abs(m) > i.longSwipesRatio
            ? t.slideTo(h)
            : t.slideTo(f));
    } else {
      if (!i.shortSwipes) {
        t.slideTo(t.activeIndex);
        return;
      }
      t.navigation &&
      (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
        ? l.target === t.navigation.nextEl
          ? t.slideTo(f + b)
          : t.slideTo(f)
        : (t.swipeDirection === "next" && t.slideTo(g !== null ? g : f + b),
          t.swipeDirection === "prev" && t.slideTo(h !== null ? h : f));
    }
  }
  function Yi() {
    const e = this,
      { params: t, el: n } = e;
    if (n && n.offsetWidth === 0) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: r, snapGrid: a } = e;
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
      (e.allowSlidePrev = r),
      (e.allowSlideNext = i),
      e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
  }
  function Eo(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function wo() {
    const e = this,
      { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
    if (!i) return;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      e.translate === 0 && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    let r;
    const a = e.maxTranslate() - e.minTranslate();
    a === 0 ? (r = 0) : (r = (e.translate - e.minTranslate()) / a),
      r !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  let Vi = !1;
  function So() {}
  const Gi = (e, t) => {
    const n = W(),
      {
        params: i,
        touchEvents: r,
        el: a,
        wrapperEl: s,
        device: o,
        support: l,
      } = e,
      u = !!i.nested,
      c = t === "on" ? "addEventListener" : "removeEventListener",
      d = t;
    if (!l.touch)
      a[c](r.start, e.onTouchStart, !1),
        n[c](r.move, e.onTouchMove, u),
        n[c](r.end, e.onTouchEnd, !1);
    else {
      const f =
        r.start === "touchstart" && l.passiveListener && i.passiveListeners
          ? { passive: !0, capture: !1 }
          : !1;
      a[c](r.start, e.onTouchStart, f),
        a[c](
          r.move,
          e.onTouchMove,
          l.passiveListener ? { passive: !1, capture: u } : u
        ),
        a[c](r.end, e.onTouchEnd, f),
        r.cancel && a[c](r.cancel, e.onTouchEnd, f);
    }
    (i.preventClicks || i.preventClicksPropagation) &&
      a[c]("click", e.onClick, !0),
      i.cssMode && s[c]("scroll", e.onScroll),
      i.updateOnWindowResize
        ? e[d](
            o.ios || o.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            Yi,
            !0
          )
        : e[d]("observerUpdate", Yi, !0);
  };
  function Co() {
    const e = this,
      t = W(),
      { params: n, support: i } = e;
    (e.onTouchStart = _o.bind(e)),
      (e.onTouchMove = xo.bind(e)),
      (e.onTouchEnd = To.bind(e)),
      n.cssMode && (e.onScroll = wo.bind(e)),
      (e.onClick = Eo.bind(e)),
      i.touch && !Vi && (t.addEventListener("touchstart", So), (Vi = !0)),
      Gi(e, "on");
  }
  function Ao() {
    Gi(this, "off");
  }
  const Mo = { attachEvents: Co, detachEvents: Ao },
    qi = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  function Po() {
    const e = this,
      {
        activeIndex: t,
        initialized: n,
        loopedSlides: i = 0,
        params: r,
        $el: a,
      } = e,
      s = r.breakpoints;
    if (!s || (s && Object.keys(s).length === 0)) return;
    const o = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
    if (!o || e.currentBreakpoint === o) return;
    const u = (o in s ? s[o] : void 0) || e.originalParams,
      c = qi(e, r),
      d = qi(e, u),
      f = r.enabled;
    c && !d
      ? (a.removeClass(
          `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
        ),
        e.emitContainerClasses())
      : !c &&
        d &&
        (a.addClass(`${r.containerModifierClass}grid`),
        ((u.grid.fill && u.grid.fill === "column") ||
          (!u.grid.fill && r.grid.fill === "column")) &&
          a.addClass(`${r.containerModifierClass}grid-column`),
        e.emitContainerClasses()),
      ["navigation", "pagination", "scrollbar"].forEach((m) => {
        const b = r[m] && r[m].enabled,
          v = u[m] && u[m].enabled;
        b && !v && e[m].disable(), !b && v && e[m].enable();
      });
    const p = u.direction && u.direction !== r.direction,
      g = r.loop && (u.slidesPerView !== r.slidesPerView || p);
    p && n && e.changeDirection(), pe(e.params, u);
    const h = e.params.enabled;
    Object.assign(e, {
      allowTouchMove: e.params.allowTouchMove,
      allowSlideNext: e.params.allowSlideNext,
      allowSlidePrev: e.params.allowSlidePrev,
    }),
      f && !h ? e.disable() : !f && h && e.enable(),
      (e.currentBreakpoint = o),
      e.emit("_beforeBreakpoint", u),
      g &&
        n &&
        (e.loopDestroy(),
        e.loopCreate(),
        e.updateSlides(),
        e.slideTo(t - i + e.loopedSlides, 0, !1)),
      e.emit("breakpoint", u);
  }
  function ko(e, t = "window", n) {
    if (!e || (t === "container" && !n)) return;
    let i = !1;
    const r = F(),
      a = t === "window" ? r.innerHeight : n.clientHeight,
      s = Object.keys(e).map((o) => {
        if (typeof o == "string" && o.indexOf("@") === 0) {
          const l = parseFloat(o.substr(1));
          return { value: a * l, point: o };
        }
        return { value: o, point: o };
      });
    s.sort((o, l) => parseInt(o.value, 10) - parseInt(l.value, 10));
    for (let o = 0; o < s.length; o += 1) {
      const { point: l, value: u } = s[o];
      t === "window"
        ? r.matchMedia(`(min-width: ${u}px)`).matches && (i = l)
        : u <= n.clientWidth && (i = l);
    }
    return i || "max";
  }
  const $o = { setBreakpoint: Po, getBreakpoint: ko };
  function Oo(e, t) {
    const n = [];
    return (
      e.forEach((i) => {
        typeof i == "object"
          ? Object.keys(i).forEach((r) => {
              i[r] && n.push(t + r);
            })
          : typeof i == "string" && n.push(t + i);
      }),
      n
    );
  }
  function zo() {
    const e = this,
      { classNames: t, params: n, rtl: i, $el: r, device: a, support: s } = e,
      o = Oo(
        [
          "initialized",
          n.direction,
          { "pointer-events": !s.touch },
          { "free-mode": e.params.freeMode && n.freeMode.enabled },
          { autoheight: n.autoHeight },
          { rtl: i },
          { grid: n.grid && n.grid.rows > 1 },
          {
            "grid-column":
              n.grid && n.grid.rows > 1 && n.grid.fill === "column",
          },
          { android: a.android },
          { ios: a.ios },
          { "css-mode": n.cssMode },
          { centered: n.cssMode && n.centeredSlides },
          { "watch-progress": n.watchSlidesProgress },
        ],
        n.containerModifierClass
      );
    t.push(...o), r.addClass([...t].join(" ")), e.emitContainerClasses();
  }
  function Io() {
    const e = this,
      { $el: t, classNames: n } = e;
    t.removeClass(n.join(" ")), e.emitContainerClasses();
  }
  const Do = { addClasses: zo, removeClasses: Io };
  function Lo(e, t, n, i, r, a) {
    const s = F();
    let o;
    function l() {
      a && a();
    }
    !D(e).parent("picture")[0] && (!e.complete || !r) && t
      ? ((o = new s.Image()),
        (o.onload = l),
        (o.onerror = l),
        i && (o.sizes = i),
        n && (o.srcset = n),
        t && (o.src = t))
      : l();
  }
  function Ro() {
    const e = this;
    e.imagesToLoad = e.$el.find("img");
    function t() {
      typeof e > "u" ||
        e === null ||
        !e ||
        e.destroyed ||
        (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1),
        e.imagesLoaded === e.imagesToLoad.length &&
          (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
    }
    for (let n = 0; n < e.imagesToLoad.length; n += 1) {
      const i = e.imagesToLoad[n];
      e.loadImage(
        i,
        i.currentSrc || i.getAttribute("src"),
        i.srcset || i.getAttribute("srcset"),
        i.sizes || i.getAttribute("sizes"),
        !0,
        t
      );
    }
  }
  const No = { loadImage: Lo, preloadImages: Ro };
  function Fo() {
    const e = this,
      { isLocked: t, params: n } = e,
      { slidesOffsetBefore: i } = n;
    if (i) {
      const r = e.slides.length - 1,
        a = e.slidesGrid[r] + e.slidesSizesGrid[r] + i * 2;
      e.isLocked = e.size > a;
    } else e.isLocked = e.snapGrid.length === 1;
    n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
      n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
      t && t !== e.isLocked && (e.isEnd = !1),
      t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
  }
  const Bo = { checkOverflow: Fo },
    Hi = {
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
  function Yo(e, t) {
    return function (i = {}) {
      const r = Object.keys(i)[0],
        a = i[r];
      if (typeof a != "object" || a === null) {
        pe(t, i);
        return;
      }
      if (
        (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
          e[r] === !0 &&
          (e[r] = { auto: !0 }),
        !(r in e && "enabled" in a))
      ) {
        pe(t, i);
        return;
      }
      e[r] === !0 && (e[r] = { enabled: !0 }),
        typeof e[r] == "object" && !("enabled" in e[r]) && (e[r].enabled = !0),
        e[r] || (e[r] = { enabled: !1 }),
        pe(t, i);
    };
  }
  const Mn = {
      eventsEmitter: Ls,
      update: Xs,
      translate: Ks,
      transition: no,
      slide: co,
      loop: mo,
      grabCursor: yo,
      events: Mo,
      breakpoints: $o,
      checkOverflow: Bo,
      classes: Do,
      images: No,
    },
    Pn = {};
  class me {
    constructor(...t) {
      let n, i;
      if (
        (t.length === 1 &&
        t[0].constructor &&
        Object.prototype.toString.call(t[0]).slice(8, -1) === "Object"
          ? (i = t[0])
          : ([n, i] = t),
        i || (i = {}),
        (i = pe({}, i)),
        n && !i.el && (i.el = n),
        i.el && D(i.el).length > 1)
      ) {
        const o = [];
        return (
          D(i.el).each((l) => {
            const u = pe({}, i, { el: l });
            o.push(new me(u));
          }),
          o
        );
      }
      const r = this;
      (r.__swiper__ = !0),
        (r.support = Fi()),
        (r.device = $s({ userAgent: i.userAgent })),
        (r.browser = zs()),
        (r.eventsListeners = {}),
        (r.eventsAnyListeners = []),
        (r.modules = [...r.__modules__]),
        i.modules && Array.isArray(i.modules) && r.modules.push(...i.modules);
      const a = {};
      r.modules.forEach((o) => {
        o({
          swiper: r,
          extendParams: Yo(i, a),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r),
        });
      });
      const s = pe({}, Hi, a);
      return (
        (r.params = pe({}, s, Pn, i)),
        (r.originalParams = pe({}, r.params)),
        (r.passedParams = pe({}, i)),
        r.params &&
          r.params.on &&
          Object.keys(r.params.on).forEach((o) => {
            r.on(o, r.params.on[o]);
          }),
        r.params && r.params.onAny && r.onAny(r.params.onAny),
        (r.$ = D),
        Object.assign(r, {
          enabled: r.params.enabled,
          el: n,
          classNames: [],
          slides: D(),
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
            lastClickTime: he(),
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
      const i = this;
      t = Math.min(Math.max(t, 0), 1);
      const r = i.minTranslate(),
        s = (i.maxTranslate() - r) * t + r;
      i.translateTo(s, typeof n > "u" ? 0 : n),
        i.updateActiveIndex(),
        i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const t = this;
      if (!t.params._emitClasses || !t.el) return;
      const n = t.el.className
        .split(" ")
        .filter(
          (i) =>
            i.indexOf("swiper") === 0 ||
            i.indexOf(t.params.containerModifierClass) === 0
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
              (i) =>
                i.indexOf("swiper-slide") === 0 ||
                i.indexOf(n.params.slideClass) === 0
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const t = this;
      if (!t.params._emitClasses || !t.el) return;
      const n = [];
      t.slides.each((i) => {
        const r = t.getSlideClasses(i);
        n.push({ slideEl: i, classNames: r }), t.emit("_slideClass", i, r);
      }),
        t.emit("_slideClasses", n);
    }
    slidesPerViewDynamic(t = "current", n = !1) {
      const i = this,
        {
          params: r,
          slides: a,
          slidesGrid: s,
          slidesSizesGrid: o,
          size: l,
          activeIndex: u,
        } = i;
      let c = 1;
      if (r.centeredSlides) {
        let d = a[u].swiperSlideSize,
          f;
        for (let p = u + 1; p < a.length; p += 1)
          a[p] &&
            !f &&
            ((d += a[p].swiperSlideSize), (c += 1), d > l && (f = !0));
        for (let p = u - 1; p >= 0; p -= 1)
          a[p] &&
            !f &&
            ((d += a[p].swiperSlideSize), (c += 1), d > l && (f = !0));
      } else if (t === "current")
        for (let d = u + 1; d < a.length; d += 1)
          (n ? s[d] + o[d] - s[u] < l : s[d] - s[u] < l) && (c += 1);
      else for (let d = u - 1; d >= 0; d -= 1) s[u] - s[d] < l && (c += 1);
      return c;
    }
    update() {
      const t = this;
      if (!t || t.destroyed) return;
      const { snapGrid: n, params: i } = t;
      i.breakpoints && t.setBreakpoint(),
        t.updateSize(),
        t.updateSlides(),
        t.updateProgress(),
        t.updateSlidesClasses();
      function r() {
        const s = t.rtlTranslate ? t.translate * -1 : t.translate,
          o = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
        t.setTranslate(o), t.updateActiveIndex(), t.updateSlidesClasses();
      }
      let a;
      t.params.freeMode && t.params.freeMode.enabled
        ? (r(), t.params.autoHeight && t.updateAutoHeight())
        : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) &&
          t.isEnd &&
          !t.params.centeredSlides
            ? (a = t.slideTo(t.slides.length - 1, 0, !1, !0))
            : (a = t.slideTo(t.activeIndex, 0, !1, !0)),
          a || r()),
        i.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
        t.emit("update");
    }
    changeDirection(t, n = !0) {
      const i = this,
        r = i.params.direction;
      return (
        t || (t = r === "horizontal" ? "vertical" : "horizontal"),
        t === r ||
          (t !== "horizontal" && t !== "vertical") ||
          (i.$el
            .removeClass(`${i.params.containerModifierClass}${r}`)
            .addClass(`${i.params.containerModifierClass}${t}`),
          i.emitContainerClasses(),
          (i.params.direction = t),
          i.slides.each((a) => {
            t === "vertical" ? (a.style.width = "") : (a.style.height = "");
          }),
          i.emit("changeDirection"),
          n && i.update()),
        i
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
      const i = D(t || n.params.el);
      if (((t = i[0]), !t)) return !1;
      t.swiper = n;
      const r = () =>
        `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let s = (() => {
        if (t && t.shadowRoot && t.shadowRoot.querySelector) {
          const o = D(t.shadowRoot.querySelector(r()));
          return (o.children = (l) => i.children(l)), o;
        }
        return i.children ? i.children(r()) : D(i).children(r());
      })();
      if (s.length === 0 && n.params.createElements) {
        const l = W().createElement("div");
        (s = D(l)),
          (l.className = n.params.wrapperClass),
          i.append(l),
          i.children(`.${n.params.slideClass}`).each((u) => {
            s.append(u);
          });
      }
      return (
        Object.assign(n, {
          $el: i,
          el: t,
          $wrapperEl: s,
          wrapperEl: s[0],
          mounted: !0,
          rtl: t.dir.toLowerCase() === "rtl" || i.css("direction") === "rtl",
          rtlTranslate:
            n.params.direction === "horizontal" &&
            (t.dir.toLowerCase() === "rtl" || i.css("direction") === "rtl"),
          wrongRTL: s.css("display") === "-webkit-box",
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
      const i = this,
        { params: r, $el: a, $wrapperEl: s, slides: o } = i;
      return (
        typeof i.params > "u" ||
          i.destroyed ||
          (i.emit("beforeDestroy"),
          (i.initialized = !1),
          i.detachEvents(),
          r.loop && i.loopDestroy(),
          n &&
            (i.removeClasses(),
            a.removeAttr("style"),
            s.removeAttr("style"),
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
          t !== !1 && ((i.$el[0].swiper = null), Cs(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(t) {
      pe(Pn, t);
    }
    static get extendedDefaults() {
      return Pn;
    }
    static get defaults() {
      return Hi;
    }
    static installModule(t) {
      me.prototype.__modules__ || (me.prototype.__modules__ = []);
      const n = me.prototype.__modules__;
      typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
    }
    static use(t) {
      return Array.isArray(t)
        ? (t.forEach((n) => me.installModule(n)), me)
        : (me.installModule(t), me);
    }
  }
  Object.keys(Mn).forEach((e) => {
    Object.keys(Mn[e]).forEach((t) => {
      me.prototype[t] = Mn[e][t];
    });
  }),
    me.use([Is, Ds]);
  function Vo({ swiper: e, extendParams: t, on: n, emit: i }) {
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
    let r;
    e.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: [],
    };
    function a(d, f) {
      const p = e.params.virtual;
      if (p.cache && e.virtual.cache[f]) return e.virtual.cache[f];
      const g = p.renderSlide
        ? D(p.renderSlide.call(e, d, f))
        : D(
            `<div class="${e.params.slideClass}" data-swiper-slide-index="${f}">${d}</div>`
          );
      return (
        g.attr("data-swiper-slide-index") ||
          g.attr("data-swiper-slide-index", f),
        p.cache && (e.virtual.cache[f] = g),
        g
      );
    }
    function s(d) {
      const {
          slidesPerView: f,
          slidesPerGroup: p,
          centeredSlides: g,
        } = e.params,
        { addSlidesBefore: h, addSlidesAfter: m } = e.params.virtual,
        { from: b, to: v, slides: y, slidesGrid: E, offset: T } = e.virtual;
      e.params.cssMode || e.updateActiveIndex();
      const S = e.activeIndex || 0;
      let C;
      e.rtlTranslate ? (C = "right") : (C = e.isHorizontal() ? "left" : "top");
      let A, k;
      g
        ? ((A = Math.floor(f / 2) + p + m), (k = Math.floor(f / 2) + p + h))
        : ((A = f + (p - 1) + m), (k = p + h));
      const P = Math.max((S || 0) - k, 0),
        M = Math.min((S || 0) + A, y.length - 1),
        _ = (e.slidesGrid[P] || 0) - (e.slidesGrid[0] || 0);
      Object.assign(e.virtual, {
        from: P,
        to: M,
        offset: _,
        slidesGrid: e.slidesGrid,
      });
      function x() {
        e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.lazy && e.params.lazy.enabled && e.lazy.load(),
          i("virtualUpdate");
      }
      if (b === P && v === M && !d) {
        e.slidesGrid !== E && _ !== T && e.slides.css(C, `${_}px`),
          e.updateProgress(),
          i("virtualUpdate");
        return;
      }
      if (e.params.virtual.renderExternal) {
        e.params.virtual.renderExternal.call(e, {
          offset: _,
          from: P,
          to: M,
          slides: (function () {
            const O = [];
            for (let z = P; z <= M; z += 1) O.push(y[z]);
            return O;
          })(),
        }),
          e.params.virtual.renderExternalUpdate ? x() : i("virtualUpdate");
        return;
      }
      const $ = [],
        I = [];
      if (d) e.$wrapperEl.find(`.${e.params.slideClass}`).remove();
      else
        for (let w = b; w <= v; w += 1)
          (w < P || w > M) &&
            e.$wrapperEl
              .find(`.${e.params.slideClass}[data-swiper-slide-index="${w}"]`)
              .remove();
      for (let w = 0; w < y.length; w += 1)
        w >= P &&
          w <= M &&
          (typeof v > "u" || d
            ? I.push(w)
            : (w > v && I.push(w), w < b && $.push(w)));
      I.forEach((w) => {
        e.$wrapperEl.append(a(y[w], w));
      }),
        $.sort((w, O) => O - w).forEach((w) => {
          e.$wrapperEl.prepend(a(y[w], w));
        }),
        e.$wrapperEl.children(".swiper-slide").css(C, `${_}px`),
        x();
    }
    function o(d) {
      if (typeof d == "object" && "length" in d)
        for (let f = 0; f < d.length; f += 1)
          d[f] && e.virtual.slides.push(d[f]);
      else e.virtual.slides.push(d);
      s(!0);
    }
    function l(d) {
      const f = e.activeIndex;
      let p = f + 1,
        g = 1;
      if (Array.isArray(d)) {
        for (let h = 0; h < d.length; h += 1)
          d[h] && e.virtual.slides.unshift(d[h]);
        (p = f + d.length), (g = d.length);
      } else e.virtual.slides.unshift(d);
      if (e.params.virtual.cache) {
        const h = e.virtual.cache,
          m = {};
        Object.keys(h).forEach((b) => {
          const v = h[b],
            y = v.attr("data-swiper-slide-index");
          y && v.attr("data-swiper-slide-index", parseInt(y, 10) + g),
            (m[parseInt(b, 10) + g] = v);
        }),
          (e.virtual.cache = m);
      }
      s(!0), e.slideTo(p, 0);
    }
    function u(d) {
      if (typeof d > "u" || d === null) return;
      let f = e.activeIndex;
      if (Array.isArray(d))
        for (let p = d.length - 1; p >= 0; p -= 1)
          e.virtual.slides.splice(d[p], 1),
            e.params.virtual.cache && delete e.virtual.cache[d[p]],
            d[p] < f && (f -= 1),
            (f = Math.max(f, 0));
      else
        e.virtual.slides.splice(d, 1),
          e.params.virtual.cache && delete e.virtual.cache[d],
          d < f && (f -= 1),
          (f = Math.max(f, 0));
      s(!0), e.slideTo(f, 0);
    }
    function c() {
      (e.virtual.slides = []),
        e.params.virtual.cache && (e.virtual.cache = {}),
        s(!0),
        e.slideTo(0, 0);
    }
    n("beforeInit", () => {
      e.params.virtual.enabled &&
        ((e.virtual.slides = e.params.virtual.slides),
        e.classNames.push(`${e.params.containerModifierClass}virtual`),
        (e.params.watchSlidesProgress = !0),
        (e.originalParams.watchSlidesProgress = !0),
        e.params.initialSlide || s());
    }),
      n("setTranslate", () => {
        e.params.virtual.enabled &&
          (e.params.cssMode && !e._immediateVirtual
            ? (clearTimeout(r),
              (r = setTimeout(() => {
                s();
              }, 100)))
            : s());
      }),
      n("init update resize", () => {
        e.params.virtual.enabled &&
          e.params.cssMode &&
          Ot(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
      }),
      Object.assign(e.virtual, {
        appendSlide: o,
        prependSlide: l,
        removeSlide: u,
        removeAllSlides: c,
        update: s,
      });
  }
  function Go({ swiper: e, extendParams: t, on: n, emit: i }) {
    const r = W(),
      a = F();
    (e.keyboard = { enabled: !1 }),
      t({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } });
    function s(u) {
      if (!e.enabled) return;
      const { rtlTranslate: c } = e;
      let d = u;
      d.originalEvent && (d = d.originalEvent);
      const f = d.keyCode || d.charCode,
        p = e.params.keyboard.pageUpDown,
        g = p && f === 33,
        h = p && f === 34,
        m = f === 37,
        b = f === 39,
        v = f === 38,
        y = f === 40;
      if (
        (!e.allowSlideNext &&
          ((e.isHorizontal() && b) || (e.isVertical() && y) || h)) ||
        (!e.allowSlidePrev &&
          ((e.isHorizontal() && m) || (e.isVertical() && v) || g))
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
        if (e.params.keyboard.onlyInViewport && (g || h || m || b || v || y)) {
          let E = !1;
          if (
            e.$el.parents(`.${e.params.slideClass}`).length > 0 &&
            e.$el.parents(`.${e.params.slideActiveClass}`).length === 0
          )
            return;
          const T = e.$el,
            S = T[0].clientWidth,
            C = T[0].clientHeight,
            A = a.innerWidth,
            k = a.innerHeight,
            P = e.$el.offset();
          c && (P.left -= e.$el[0].scrollLeft);
          const M = [
            [P.left, P.top],
            [P.left + S, P.top],
            [P.left, P.top + C],
            [P.left + S, P.top + C],
          ];
          for (let _ = 0; _ < M.length; _ += 1) {
            const x = M[_];
            if (x[0] >= 0 && x[0] <= A && x[1] >= 0 && x[1] <= k) {
              if (x[0] === 0 && x[1] === 0) continue;
              E = !0;
            }
          }
          if (!E) return;
        }
        e.isHorizontal()
          ? ((g || h || m || b) &&
              (d.preventDefault ? d.preventDefault() : (d.returnValue = !1)),
            (((h || b) && !c) || ((g || m) && c)) && e.slideNext(),
            (((g || m) && !c) || ((h || b) && c)) && e.slidePrev())
          : ((g || h || v || y) &&
              (d.preventDefault ? d.preventDefault() : (d.returnValue = !1)),
            (h || y) && e.slideNext(),
            (g || v) && e.slidePrev()),
          i("keyPress", f);
      }
    }
    function o() {
      e.keyboard.enabled || (D(r).on("keydown", s), (e.keyboard.enabled = !0));
    }
    function l() {
      e.keyboard.enabled && (D(r).off("keydown", s), (e.keyboard.enabled = !1));
    }
    n("init", () => {
      e.params.keyboard.enabled && o();
    }),
      n("destroy", () => {
        e.keyboard.enabled && l();
      }),
      Object.assign(e.keyboard, { enable: o, disable: l });
  }
  function qo({ swiper: e, extendParams: t, on: n, emit: i }) {
    const r = F();
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
    let a,
      s = he(),
      o;
    const l = [];
    function u(v) {
      let S = 0,
        C = 0,
        A = 0,
        k = 0;
      return (
        "detail" in v && (C = v.detail),
        "wheelDelta" in v && (C = -v.wheelDelta / 120),
        "wheelDeltaY" in v && (C = -v.wheelDeltaY / 120),
        "wheelDeltaX" in v && (S = -v.wheelDeltaX / 120),
        "axis" in v && v.axis === v.HORIZONTAL_AXIS && ((S = C), (C = 0)),
        (A = S * 10),
        (k = C * 10),
        "deltaY" in v && (k = v.deltaY),
        "deltaX" in v && (A = v.deltaX),
        v.shiftKey && !A && ((A = k), (k = 0)),
        (A || k) &&
          v.deltaMode &&
          (v.deltaMode === 1
            ? ((A *= 40), (k *= 40))
            : ((A *= 800), (k *= 800))),
        A && !S && (S = A < 1 ? -1 : 1),
        k && !C && (C = k < 1 ? -1 : 1),
        { spinX: S, spinY: C, pixelX: A, pixelY: k }
      );
    }
    function c() {
      e.enabled && (e.mouseEntered = !0);
    }
    function d() {
      e.enabled && (e.mouseEntered = !1);
    }
    function f(v) {
      return (e.params.mousewheel.thresholdDelta &&
        v.delta < e.params.mousewheel.thresholdDelta) ||
        (e.params.mousewheel.thresholdTime &&
          he() - s < e.params.mousewheel.thresholdTime)
        ? !1
        : v.delta >= 6 && he() - s < 60
        ? !0
        : (v.direction < 0
            ? (!e.isEnd || e.params.loop) &&
              !e.animating &&
              (e.slideNext(), i("scroll", v.raw))
            : (!e.isBeginning || e.params.loop) &&
              !e.animating &&
              (e.slidePrev(), i("scroll", v.raw)),
          (s = new r.Date().getTime()),
          !1);
    }
    function p(v) {
      const y = e.params.mousewheel;
      if (v.direction < 0) {
        if (e.isEnd && !e.params.loop && y.releaseOnEdges) return !0;
      } else if (e.isBeginning && !e.params.loop && y.releaseOnEdges) return !0;
      return !1;
    }
    function g(v) {
      let y = v,
        E = !0;
      if (!e.enabled) return;
      const T = e.params.mousewheel;
      e.params.cssMode && y.preventDefault();
      let S = e.$el;
      if (
        (e.params.mousewheel.eventsTarget !== "container" &&
          (S = D(e.params.mousewheel.eventsTarget)),
        !e.mouseEntered && !S[0].contains(y.target) && !T.releaseOnEdges)
      )
        return !0;
      y.originalEvent && (y = y.originalEvent);
      let C = 0;
      const A = e.rtlTranslate ? -1 : 1,
        k = u(y);
      if (T.forceToAxis)
        if (e.isHorizontal())
          if (Math.abs(k.pixelX) > Math.abs(k.pixelY)) C = -k.pixelX * A;
          else return !0;
        else if (Math.abs(k.pixelY) > Math.abs(k.pixelX)) C = -k.pixelY;
        else return !0;
      else
        C = Math.abs(k.pixelX) > Math.abs(k.pixelY) ? -k.pixelX * A : -k.pixelY;
      if (C === 0) return !0;
      T.invert && (C = -C);
      let P = e.getTranslate() + C * T.sensitivity;
      if (
        (P >= e.minTranslate() && (P = e.minTranslate()),
        P <= e.maxTranslate() && (P = e.maxTranslate()),
        (E = e.params.loop
          ? !0
          : !(P === e.minTranslate() || P === e.maxTranslate())),
        E && e.params.nested && y.stopPropagation(),
        !e.params.freeMode || !e.params.freeMode.enabled)
      ) {
        const M = {
          time: he(),
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
          p(M))
        )
          return !0;
      } else {
        const M = { time: he(), delta: Math.abs(C), direction: Math.sign(C) },
          _ =
            o &&
            M.time < o.time + 500 &&
            M.delta <= o.delta &&
            M.direction === o.direction;
        if (!_) {
          (o = void 0), e.params.loop && e.loopFix();
          let x = e.getTranslate() + C * T.sensitivity;
          const $ = e.isBeginning,
            I = e.isEnd;
          if (
            (x >= e.minTranslate() && (x = e.minTranslate()),
            x <= e.maxTranslate() && (x = e.maxTranslate()),
            e.setTransition(0),
            e.setTranslate(x),
            e.updateProgress(),
            e.updateActiveIndex(),
            e.updateSlidesClasses(),
            ((!$ && e.isBeginning) || (!I && e.isEnd)) &&
              e.updateSlidesClasses(),
            e.params.freeMode.sticky)
          ) {
            clearTimeout(a), (a = void 0), l.length >= 15 && l.shift();
            const w = l.length ? l[l.length - 1] : void 0,
              O = l[0];
            if (
              (l.push(M),
              w && (M.delta > w.delta || M.direction !== w.direction))
            )
              l.splice(0);
            else if (
              l.length >= 15 &&
              M.time - O.time < 500 &&
              O.delta - M.delta >= 1 &&
              M.delta <= 6
            ) {
              const z = C > 0 ? 0.8 : 0.2;
              (o = M),
                l.splice(0),
                (a = Be(() => {
                  e.slideToClosest(e.params.speed, !0, void 0, z);
                }, 0));
            }
            a ||
              (a = Be(() => {
                (o = M),
                  l.splice(0),
                  e.slideToClosest(e.params.speed, !0, void 0, 0.5);
              }, 500));
          }
          if (
            (_ || i("scroll", y),
            e.params.autoplay &&
              e.params.autoplayDisableOnInteraction &&
              e.autoplay.stop(),
            x === e.minTranslate() || x === e.maxTranslate())
          )
            return !0;
        }
      }
      return y.preventDefault ? y.preventDefault() : (y.returnValue = !1), !1;
    }
    function h(v) {
      let y = e.$el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (y = D(e.params.mousewheel.eventsTarget)),
        y[v]("mouseenter", c),
        y[v]("mouseleave", d),
        y[v]("wheel", g);
    }
    function m() {
      return e.params.cssMode
        ? (e.wrapperEl.removeEventListener("wheel", g), !0)
        : e.mousewheel.enabled
        ? !1
        : (h("on"), (e.mousewheel.enabled = !0), !0);
    }
    function b() {
      return e.params.cssMode
        ? (e.wrapperEl.addEventListener(event, g), !0)
        : e.mousewheel.enabled
        ? (h("off"), (e.mousewheel.enabled = !1), !0)
        : !1;
    }
    n("init", () => {
      !e.params.mousewheel.enabled && e.params.cssMode && b(),
        e.params.mousewheel.enabled && m();
    }),
      n("destroy", () => {
        e.params.cssMode && m(), e.mousewheel.enabled && b();
      }),
      Object.assign(e.mousewheel, { enable: m, disable: b });
  }
  function kn(e, t, n, i) {
    const r = W();
    return (
      e.params.createElements &&
        Object.keys(i).forEach((a) => {
          if (!n[a] && n.auto === !0) {
            let s = e.$el.children(`.${i[a]}`)[0];
            s ||
              ((s = r.createElement("div")),
              (s.className = i[a]),
              e.$el.append(s)),
              (n[a] = s),
              (t[a] = s);
          }
        }),
      n
    );
  }
  function Ho({ swiper: e, extendParams: t, on: n, emit: i }) {
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
    function r(p) {
      let g;
      return (
        p &&
          ((g = D(p)),
          e.params.uniqueNavElements &&
            typeof p == "string" &&
            g.length > 1 &&
            e.$el.find(p).length === 1 &&
            (g = e.$el.find(p))),
        g
      );
    }
    function a(p, g) {
      const h = e.params.navigation;
      p &&
        p.length > 0 &&
        (p[g ? "addClass" : "removeClass"](h.disabledClass),
        p[0] && p[0].tagName === "BUTTON" && (p[0].disabled = g),
        e.params.watchOverflow &&
          e.enabled &&
          p[e.isLocked ? "addClass" : "removeClass"](h.lockClass));
    }
    function s() {
      if (e.params.loop) return;
      const { $nextEl: p, $prevEl: g } = e.navigation;
      a(g, e.isBeginning && !e.params.rewind),
        a(p, e.isEnd && !e.params.rewind);
    }
    function o(p) {
      p.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
          (e.slidePrev(), i("navigationPrev"));
    }
    function l(p) {
      p.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) &&
          (e.slideNext(), i("navigationNext"));
    }
    function u() {
      const p = e.params.navigation;
      if (
        ((e.params.navigation = kn(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !(p.nextEl || p.prevEl))
      )
        return;
      const g = r(p.nextEl),
        h = r(p.prevEl);
      g && g.length > 0 && g.on("click", l),
        h && h.length > 0 && h.on("click", o),
        Object.assign(e.navigation, {
          $nextEl: g,
          nextEl: g && g[0],
          $prevEl: h,
          prevEl: h && h[0],
        }),
        e.enabled ||
          (g && g.addClass(p.lockClass), h && h.addClass(p.lockClass));
    }
    function c() {
      const { $nextEl: p, $prevEl: g } = e.navigation;
      p &&
        p.length &&
        (p.off("click", l), p.removeClass(e.params.navigation.disabledClass)),
        g &&
          g.length &&
          (g.off("click", o), g.removeClass(e.params.navigation.disabledClass));
    }
    n("init", () => {
      e.params.navigation.enabled === !1 ? f() : (u(), s());
    }),
      n("toEdge fromEdge lock unlock", () => {
        s();
      }),
      n("destroy", () => {
        c();
      }),
      n("enable disable", () => {
        const { $nextEl: p, $prevEl: g } = e.navigation;
        p &&
          p[e.enabled ? "removeClass" : "addClass"](
            e.params.navigation.lockClass
          ),
          g &&
            g[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            );
      }),
      n("click", (p, g) => {
        const { $nextEl: h, $prevEl: m } = e.navigation,
          b = g.target;
        if (e.params.navigation.hideOnClick && !D(b).is(m) && !D(b).is(h)) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === b || e.pagination.el.contains(b))
          )
            return;
          let v;
          h
            ? (v = h.hasClass(e.params.navigation.hiddenClass))
            : m && (v = m.hasClass(e.params.navigation.hiddenClass)),
            i(v === !0 ? "navigationShow" : "navigationHide"),
            h && h.toggleClass(e.params.navigation.hiddenClass),
            m && m.toggleClass(e.params.navigation.hiddenClass);
        }
      });
    const d = () => {
        e.$el.removeClass(e.params.navigation.navigationDisabledClass),
          u(),
          s();
      },
      f = () => {
        e.$el.addClass(e.params.navigation.navigationDisabledClass), c();
      };
    Object.assign(e.navigation, {
      enable: d,
      disable: f,
      update: s,
      init: u,
      destroy: c,
    });
  }
  function Ie(e = "") {
    return `.${e
      .trim()
      .replace(/([\.:!\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }
  function Xo({ swiper: e, extendParams: t, on: n, emit: i }) {
    const r = "swiper-pagination";
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
      (e.pagination = { el: null, $el: null, bullets: [] });
    let a,
      s = 0;
    function o() {
      return (
        !e.params.pagination.el ||
        !e.pagination.el ||
        !e.pagination.$el ||
        e.pagination.$el.length === 0
      );
    }
    function l(h, m) {
      const { bulletActiveClass: b } = e.params.pagination;
      h[m]().addClass(`${b}-${m}`)[m]().addClass(`${b}-${m}-${m}`);
    }
    function u() {
      const h = e.rtl,
        m = e.params.pagination;
      if (o()) return;
      const b =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        v = e.pagination.$el;
      let y;
      const E = e.params.loop
        ? Math.ceil((b - e.loopedSlides * 2) / e.params.slidesPerGroup)
        : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((y = Math.ceil(
              (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
            )),
            y > b - 1 - e.loopedSlides * 2 && (y -= b - e.loopedSlides * 2),
            y > E - 1 && (y -= E),
            y < 0 && e.params.paginationType !== "bullets" && (y = E + y))
          : typeof e.snapIndex < "u"
          ? (y = e.snapIndex)
          : (y = e.activeIndex || 0),
        m.type === "bullets" &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const T = e.pagination.bullets;
        let S, C, A;
        if (
          (m.dynamicBullets &&
            ((a = T.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
            v.css(
              e.isHorizontal() ? "width" : "height",
              `${a * (m.dynamicMainBullets + 4)}px`
            ),
            m.dynamicMainBullets > 1 &&
              e.previousIndex !== void 0 &&
              ((s += y - (e.previousIndex - e.loopedSlides || 0)),
              s > m.dynamicMainBullets - 1
                ? (s = m.dynamicMainBullets - 1)
                : s < 0 && (s = 0)),
            (S = Math.max(y - s, 0)),
            (C = S + (Math.min(T.length, m.dynamicMainBullets) - 1)),
            (A = (C + S) / 2)),
          T.removeClass(
            ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
              .map((k) => `${m.bulletActiveClass}${k}`)
              .join(" ")
          ),
          v.length > 1)
        )
          T.each((k) => {
            const P = D(k),
              M = P.index();
            M === y && P.addClass(m.bulletActiveClass),
              m.dynamicBullets &&
                (M >= S && M <= C && P.addClass(`${m.bulletActiveClass}-main`),
                M === S && l(P, "prev"),
                M === C && l(P, "next"));
          });
        else {
          const k = T.eq(y),
            P = k.index();
          if ((k.addClass(m.bulletActiveClass), m.dynamicBullets)) {
            const M = T.eq(S),
              _ = T.eq(C);
            for (let x = S; x <= C; x += 1)
              T.eq(x).addClass(`${m.bulletActiveClass}-main`);
            if (e.params.loop)
              if (P >= T.length) {
                for (let x = m.dynamicMainBullets; x >= 0; x -= 1)
                  T.eq(T.length - x).addClass(`${m.bulletActiveClass}-main`);
                T.eq(T.length - m.dynamicMainBullets - 1).addClass(
                  `${m.bulletActiveClass}-prev`
                );
              } else l(M, "prev"), l(_, "next");
            else l(M, "prev"), l(_, "next");
          }
        }
        if (m.dynamicBullets) {
          const k = Math.min(T.length, m.dynamicMainBullets + 4),
            P = (a * k - a) / 2 - A * a,
            M = h ? "right" : "left";
          T.css(e.isHorizontal() ? M : "top", `${P}px`);
        }
      }
      if (
        (m.type === "fraction" &&
          (v.find(Ie(m.currentClass)).text(m.formatFractionCurrent(y + 1)),
          v.find(Ie(m.totalClass)).text(m.formatFractionTotal(E))),
        m.type === "progressbar")
      ) {
        let T;
        m.progressbarOpposite
          ? (T = e.isHorizontal() ? "vertical" : "horizontal")
          : (T = e.isHorizontal() ? "horizontal" : "vertical");
        const S = (y + 1) / E;
        let C = 1,
          A = 1;
        T === "horizontal" ? (C = S) : (A = S),
          v
            .find(Ie(m.progressbarFillClass))
            .transform(`translate3d(0,0,0) scaleX(${C}) scaleY(${A})`)
            .transition(e.params.speed);
      }
      m.type === "custom" && m.renderCustom
        ? (v.html(m.renderCustom(e, y + 1, E)), i("paginationRender", v[0]))
        : i("paginationUpdate", v[0]),
        e.params.watchOverflow &&
          e.enabled &&
          v[e.isLocked ? "addClass" : "removeClass"](m.lockClass);
    }
    function c() {
      const h = e.params.pagination;
      if (o()) return;
      const m =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        b = e.pagination.$el;
      let v = "";
      if (h.type === "bullets") {
        let y = e.params.loop
          ? Math.ceil((m - e.loopedSlides * 2) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode &&
          e.params.freeMode.enabled &&
          !e.params.loop &&
          y > m &&
          (y = m);
        for (let E = 0; E < y; E += 1)
          h.renderBullet
            ? (v += h.renderBullet.call(e, E, h.bulletClass))
            : (v += `<${h.bulletElement} class="${h.bulletClass}"></${h.bulletElement}>`);
        b.html(v), (e.pagination.bullets = b.find(Ie(h.bulletClass)));
      }
      h.type === "fraction" &&
        (h.renderFraction
          ? (v = h.renderFraction.call(e, h.currentClass, h.totalClass))
          : (v = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),
        b.html(v)),
        h.type === "progressbar" &&
          (h.renderProgressbar
            ? (v = h.renderProgressbar.call(e, h.progressbarFillClass))
            : (v = `<span class="${h.progressbarFillClass}"></span>`),
          b.html(v)),
        h.type !== "custom" && i("paginationRender", e.pagination.$el[0]);
    }
    function d() {
      e.params.pagination = kn(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        { el: "swiper-pagination" }
      );
      const h = e.params.pagination;
      if (!h.el) return;
      let m = D(h.el);
      m.length !== 0 &&
        (e.params.uniqueNavElements &&
          typeof h.el == "string" &&
          m.length > 1 &&
          ((m = e.$el.find(h.el)),
          m.length > 1 &&
            (m = m.filter((b) => D(b).parents(".swiper")[0] === e.el))),
        h.type === "bullets" && h.clickable && m.addClass(h.clickableClass),
        m.addClass(h.modifierClass + h.type),
        m.addClass(e.isHorizontal() ? h.horizontalClass : h.verticalClass),
        h.type === "bullets" &&
          h.dynamicBullets &&
          (m.addClass(`${h.modifierClass}${h.type}-dynamic`),
          (s = 0),
          h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)),
        h.type === "progressbar" &&
          h.progressbarOpposite &&
          m.addClass(h.progressbarOppositeClass),
        h.clickable &&
          m.on("click", Ie(h.bulletClass), function (v) {
            v.preventDefault();
            let y = D(this).index() * e.params.slidesPerGroup;
            e.params.loop && (y += e.loopedSlides), e.slideTo(y);
          }),
        Object.assign(e.pagination, { $el: m, el: m[0] }),
        e.enabled || m.addClass(h.lockClass));
    }
    function f() {
      const h = e.params.pagination;
      if (o()) return;
      const m = e.pagination.$el;
      m.removeClass(h.hiddenClass),
        m.removeClass(h.modifierClass + h.type),
        m.removeClass(e.isHorizontal() ? h.horizontalClass : h.verticalClass),
        e.pagination.bullets &&
          e.pagination.bullets.removeClass &&
          e.pagination.bullets.removeClass(h.bulletActiveClass),
        h.clickable && m.off("click", Ie(h.bulletClass));
    }
    n("init", () => {
      e.params.pagination.enabled === !1 ? g() : (d(), c(), u());
    }),
      n("activeIndexChange", () => {
        (e.params.loop || typeof e.snapIndex > "u") && u();
      }),
      n("snapIndexChange", () => {
        e.params.loop || u();
      }),
      n("slidesLengthChange", () => {
        e.params.loop && (c(), u());
      }),
      n("snapGridLengthChange", () => {
        e.params.loop || (c(), u());
      }),
      n("destroy", () => {
        f();
      }),
      n("enable disable", () => {
        const { $el: h } = e.pagination;
        h &&
          h[e.enabled ? "removeClass" : "addClass"](
            e.params.pagination.lockClass
          );
      }),
      n("lock unlock", () => {
        u();
      }),
      n("click", (h, m) => {
        const b = m.target,
          { $el: v } = e.pagination;
        if (
          e.params.pagination.el &&
          e.params.pagination.hideOnClick &&
          v &&
          v.length > 0 &&
          !D(b).hasClass(e.params.pagination.bulletClass)
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && b === e.navigation.nextEl) ||
              (e.navigation.prevEl && b === e.navigation.prevEl))
          )
            return;
          const y = v.hasClass(e.params.pagination.hiddenClass);
          i(y === !0 ? "paginationShow" : "paginationHide"),
            v.toggleClass(e.params.pagination.hiddenClass);
        }
      });
    const p = () => {
        e.$el.removeClass(e.params.pagination.paginationDisabledClass),
          e.pagination.$el &&
            e.pagination.$el.removeClass(
              e.params.pagination.paginationDisabledClass
            ),
          d(),
          c(),
          u();
      },
      g = () => {
        e.$el.addClass(e.params.pagination.paginationDisabledClass),
          e.pagination.$el &&
            e.pagination.$el.addClass(
              e.params.pagination.paginationDisabledClass
            ),
          f();
      };
    Object.assign(e.pagination, {
      enable: p,
      disable: g,
      render: c,
      update: u,
      init: d,
      destroy: f,
    });
  }
  function jo({ swiper: e, extendParams: t, on: n, emit: i }) {
    const r = W();
    let a = !1,
      s = null,
      o = null,
      l,
      u,
      c,
      d;
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
    function f() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const { scrollbar: M, rtlTranslate: _, progress: x } = e,
        { $dragEl: $, $el: I } = M,
        w = e.params.scrollbar;
      let O = u,
        z = (c - u) * x;
      _
        ? ((z = -z), z > 0 ? ((O = u - z), (z = 0)) : -z + u > c && (O = c + z))
        : z < 0
        ? ((O = u + z), (z = 0))
        : z + u > c && (O = c - z),
        e.isHorizontal()
          ? ($.transform(`translate3d(${z}px, 0, 0)`),
            ($[0].style.width = `${O}px`))
          : ($.transform(`translate3d(0px, ${z}px, 0)`),
            ($[0].style.height = `${O}px`)),
        w.hide &&
          (clearTimeout(s),
          (I[0].style.opacity = 1),
          (s = setTimeout(() => {
            (I[0].style.opacity = 0), I.transition(400);
          }, 1e3)));
    }
    function p(M) {
      !e.params.scrollbar.el ||
        !e.scrollbar.el ||
        e.scrollbar.$dragEl.transition(M);
    }
    function g() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const { scrollbar: M } = e,
        { $dragEl: _, $el: x } = M;
      (_[0].style.width = ""),
        (_[0].style.height = ""),
        (c = e.isHorizontal() ? x[0].offsetWidth : x[0].offsetHeight),
        (d =
          e.size /
          (e.virtualSize +
            e.params.slidesOffsetBefore -
            (e.params.centeredSlides ? e.snapGrid[0] : 0))),
        e.params.scrollbar.dragSize === "auto"
          ? (u = c * d)
          : (u = parseInt(e.params.scrollbar.dragSize, 10)),
        e.isHorizontal()
          ? (_[0].style.width = `${u}px`)
          : (_[0].style.height = `${u}px`),
        d >= 1 ? (x[0].style.display = "none") : (x[0].style.display = ""),
        e.params.scrollbar.hide && (x[0].style.opacity = 0),
        e.params.watchOverflow &&
          e.enabled &&
          M.$el[e.isLocked ? "addClass" : "removeClass"](
            e.params.scrollbar.lockClass
          );
    }
    function h(M) {
      return e.isHorizontal()
        ? M.type === "touchstart" || M.type === "touchmove"
          ? M.targetTouches[0].clientX
          : M.clientX
        : M.type === "touchstart" || M.type === "touchmove"
        ? M.targetTouches[0].clientY
        : M.clientY;
    }
    function m(M) {
      const { scrollbar: _, rtlTranslate: x } = e,
        { $el: $ } = _;
      let I;
      (I =
        (h(M) -
          $.offset()[e.isHorizontal() ? "left" : "top"] -
          (l !== null ? l : u / 2)) /
        (c - u)),
        (I = Math.max(Math.min(I, 1), 0)),
        x && (I = 1 - I);
      const w = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * I;
      e.updateProgress(w),
        e.setTranslate(w),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    }
    function b(M) {
      const _ = e.params.scrollbar,
        { scrollbar: x, $wrapperEl: $ } = e,
        { $el: I, $dragEl: w } = x;
      (a = !0),
        (l =
          M.target === w[0] || M.target === w
            ? h(M) -
              M.target.getBoundingClientRect()[
                e.isHorizontal() ? "left" : "top"
              ]
            : null),
        M.preventDefault(),
        M.stopPropagation(),
        $.transition(100),
        w.transition(100),
        m(M),
        clearTimeout(o),
        I.transition(0),
        _.hide && I.css("opacity", 1),
        e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
        i("scrollbarDragStart", M);
    }
    function v(M) {
      const { scrollbar: _, $wrapperEl: x } = e,
        { $el: $, $dragEl: I } = _;
      a &&
        (M.preventDefault ? M.preventDefault() : (M.returnValue = !1),
        m(M),
        x.transition(0),
        $.transition(0),
        I.transition(0),
        i("scrollbarDragMove", M));
    }
    function y(M) {
      const _ = e.params.scrollbar,
        { scrollbar: x, $wrapperEl: $ } = e,
        { $el: I } = x;
      a &&
        ((a = !1),
        e.params.cssMode &&
          (e.$wrapperEl.css("scroll-snap-type", ""), $.transition("")),
        _.hide &&
          (clearTimeout(o),
          (o = Be(() => {
            I.css("opacity", 0), I.transition(400);
          }, 1e3))),
        i("scrollbarDragEnd", M),
        _.snapOnRelease && e.slideToClosest());
    }
    function E(M) {
      const {
          scrollbar: _,
          touchEventsTouch: x,
          touchEventsDesktop: $,
          params: I,
          support: w,
        } = e,
        O = _.$el;
      if (!O) return;
      const z = O[0],
        L =
          w.passiveListener && I.passiveListeners
            ? { passive: !1, capture: !1 }
            : !1,
        R =
          w.passiveListener && I.passiveListeners
            ? { passive: !0, capture: !1 }
            : !1;
      if (!z) return;
      const Y = M === "on" ? "addEventListener" : "removeEventListener";
      w.touch
        ? (z[Y](x.start, b, L), z[Y](x.move, v, L), z[Y](x.end, y, R))
        : (z[Y]($.start, b, L), r[Y]($.move, v, L), r[Y]($.end, y, R));
    }
    function T() {
      !e.params.scrollbar.el || !e.scrollbar.el || E("on");
    }
    function S() {
      !e.params.scrollbar.el || !e.scrollbar.el || E("off");
    }
    function C() {
      const { scrollbar: M, $el: _ } = e;
      e.params.scrollbar = kn(
        e,
        e.originalParams.scrollbar,
        e.params.scrollbar,
        { el: "swiper-scrollbar" }
      );
      const x = e.params.scrollbar;
      if (!x.el) return;
      let $ = D(x.el);
      e.params.uniqueNavElements &&
        typeof x.el == "string" &&
        $.length > 1 &&
        _.find(x.el).length === 1 &&
        ($ = _.find(x.el)),
        $.addClass(e.isHorizontal() ? x.horizontalClass : x.verticalClass);
      let I = $.find(`.${e.params.scrollbar.dragClass}`);
      I.length === 0 &&
        ((I = D(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
        $.append(I)),
        Object.assign(M, { $el: $, el: $[0], $dragEl: I, dragEl: I[0] }),
        x.draggable && T(),
        $ &&
          $[e.enabled ? "removeClass" : "addClass"](
            e.params.scrollbar.lockClass
          );
    }
    function A() {
      const M = e.params.scrollbar,
        _ = e.scrollbar.$el;
      _ &&
        _.removeClass(e.isHorizontal() ? M.horizontalClass : M.verticalClass),
        S();
    }
    n("init", () => {
      e.params.scrollbar.enabled === !1 ? P() : (C(), g(), f());
    }),
      n("update resize observerUpdate lock unlock", () => {
        g();
      }),
      n("setTranslate", () => {
        f();
      }),
      n("setTransition", (M, _) => {
        p(_);
      }),
      n("enable disable", () => {
        const { $el: M } = e.scrollbar;
        M &&
          M[e.enabled ? "removeClass" : "addClass"](
            e.params.scrollbar.lockClass
          );
      }),
      n("destroy", () => {
        A();
      });
    const k = () => {
        e.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass),
          e.scrollbar.$el &&
            e.scrollbar.$el.removeClass(
              e.params.scrollbar.scrollbarDisabledClass
            ),
          C(),
          g(),
          f();
      },
      P = () => {
        e.$el.addClass(e.params.scrollbar.scrollbarDisabledClass),
          e.scrollbar.$el &&
            e.scrollbar.$el.addClass(e.params.scrollbar.scrollbarDisabledClass),
          A();
      };
    Object.assign(e.scrollbar, {
      enable: k,
      disable: P,
      updateSize: g,
      setTranslate: f,
      init: C,
      destroy: A,
    });
  }
  function Wo({ swiper: e, extendParams: t, on: n }) {
    t({ parallax: { enabled: !1 } });
    const i = (s, o) => {
        const { rtl: l } = e,
          u = D(s),
          c = l ? -1 : 1,
          d = u.attr("data-swiper-parallax") || "0";
        let f = u.attr("data-swiper-parallax-x"),
          p = u.attr("data-swiper-parallax-y");
        const g = u.attr("data-swiper-parallax-scale"),
          h = u.attr("data-swiper-parallax-opacity");
        if (
          (f || p
            ? ((f = f || "0"), (p = p || "0"))
            : e.isHorizontal()
            ? ((f = d), (p = "0"))
            : ((p = d), (f = "0")),
          f.indexOf("%") >= 0
            ? (f = `${parseInt(f, 10) * o * c}%`)
            : (f = `${f * o * c}px`),
          p.indexOf("%") >= 0
            ? (p = `${parseInt(p, 10) * o}%`)
            : (p = `${p * o}px`),
          typeof h < "u" && h !== null)
        ) {
          const m = h - (h - 1) * (1 - Math.abs(o));
          u[0].style.opacity = m;
        }
        if (typeof g > "u" || g === null)
          u.transform(`translate3d(${f}, ${p}, 0px)`);
        else {
          const m = g - (g - 1) * (1 - Math.abs(o));
          u.transform(`translate3d(${f}, ${p}, 0px) scale(${m})`);
        }
      },
      r = () => {
        const { $el: s, slides: o, progress: l, snapGrid: u } = e;
        s
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each((c) => {
            i(c, l);
          }),
          o.each((c, d) => {
            let f = c.progress;
            e.params.slidesPerGroup > 1 &&
              e.params.slidesPerView !== "auto" &&
              (f += Math.ceil(d / 2) - l * (u.length - 1)),
              (f = Math.min(Math.max(f, -1), 1)),
              D(c)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                )
                .each((p) => {
                  i(p, f);
                });
          });
      },
      a = (s = e.params.speed) => {
        const { $el: o } = e;
        o.find(
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
        ).each((l) => {
          const u = D(l);
          let c = parseInt(u.attr("data-swiper-parallax-duration"), 10) || s;
          s === 0 && (c = 0), u.transition(c);
        });
      };
    n("beforeInit", () => {
      e.params.parallax.enabled &&
        ((e.params.watchSlidesProgress = !0),
        (e.originalParams.watchSlidesProgress = !0));
    }),
      n("init", () => {
        e.params.parallax.enabled && r();
      }),
      n("setTranslate", () => {
        e.params.parallax.enabled && r();
      }),
      n("setTransition", (s, o) => {
        e.params.parallax.enabled && a(o);
      });
  }
  function Uo({ swiper: e, extendParams: t, on: n, emit: i }) {
    const r = F();
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
    let a = 1,
      s = !1,
      o,
      l,
      u;
    const c = {
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
    let p = 1;
    Object.defineProperty(e.zoom, "scale", {
      get() {
        return p;
      },
      set(w) {
        if (p !== w) {
          const O = c.$imageEl ? c.$imageEl[0] : void 0,
            z = c.$slideEl ? c.$slideEl[0] : void 0;
          i("zoomChange", w, O, z);
        }
        p = w;
      },
    });
    function g(w) {
      if (w.targetTouches.length < 2) return 1;
      const O = w.targetTouches[0].pageX,
        z = w.targetTouches[0].pageY,
        L = w.targetTouches[1].pageX,
        R = w.targetTouches[1].pageY;
      return Math.sqrt((L - O) ** 2 + (R - z) ** 2);
    }
    function h(w) {
      const O = e.support,
        z = e.params.zoom;
      if (((l = !1), (u = !1), !O.gestures)) {
        if (
          w.type !== "touchstart" ||
          (w.type === "touchstart" && w.targetTouches.length < 2)
        )
          return;
        (l = !0), (c.scaleStart = g(w));
      }
      if (
        (!c.$slideEl || !c.$slideEl.length) &&
        ((c.$slideEl = D(w.target).closest(`.${e.params.slideClass}`)),
        c.$slideEl.length === 0 && (c.$slideEl = e.slides.eq(e.activeIndex)),
        (c.$imageEl = c.$slideEl
          .find(`.${z.containerClass}`)
          .eq(0)
          .find("picture, img, svg, canvas, .swiper-zoom-target")
          .eq(0)),
        (c.$imageWrapEl = c.$imageEl.parent(`.${z.containerClass}`)),
        (c.maxRatio = c.$imageWrapEl.attr("data-swiper-zoom") || z.maxRatio),
        c.$imageWrapEl.length === 0)
      ) {
        c.$imageEl = void 0;
        return;
      }
      c.$imageEl && c.$imageEl.transition(0), (s = !0);
    }
    function m(w) {
      const O = e.support,
        z = e.params.zoom,
        L = e.zoom;
      if (!O.gestures) {
        if (
          w.type !== "touchmove" ||
          (w.type === "touchmove" && w.targetTouches.length < 2)
        )
          return;
        (u = !0), (c.scaleMove = g(w));
      }
      if (!c.$imageEl || c.$imageEl.length === 0) {
        w.type === "gesturechange" && h(w);
        return;
      }
      O.gestures
        ? (L.scale = w.scale * a)
        : (L.scale = (c.scaleMove / c.scaleStart) * a),
        L.scale > c.maxRatio &&
          (L.scale = c.maxRatio - 1 + (L.scale - c.maxRatio + 1) ** 0.5),
        L.scale < z.minRatio &&
          (L.scale = z.minRatio + 1 - (z.minRatio - L.scale + 1) ** 0.5),
        c.$imageEl.transform(`translate3d(0,0,0) scale(${L.scale})`);
    }
    function b(w) {
      const O = e.device,
        z = e.support,
        L = e.params.zoom,
        R = e.zoom;
      if (!z.gestures) {
        if (
          !l ||
          !u ||
          w.type !== "touchend" ||
          (w.type === "touchend" && w.changedTouches.length < 2 && !O.android)
        )
          return;
        (l = !1), (u = !1);
      }
      !c.$imageEl ||
        c.$imageEl.length === 0 ||
        ((R.scale = Math.max(Math.min(R.scale, c.maxRatio), L.minRatio)),
        c.$imageEl
          .transition(e.params.speed)
          .transform(`translate3d(0,0,0) scale(${R.scale})`),
        (a = R.scale),
        (s = !1),
        R.scale === 1 && (c.$slideEl = void 0));
    }
    function v(w) {
      const O = e.device;
      !c.$imageEl ||
        c.$imageEl.length === 0 ||
        d.isTouched ||
        (O.android && w.cancelable && w.preventDefault(),
        (d.isTouched = !0),
        (d.touchesStart.x =
          w.type === "touchstart" ? w.targetTouches[0].pageX : w.pageX),
        (d.touchesStart.y =
          w.type === "touchstart" ? w.targetTouches[0].pageY : w.pageY));
    }
    function y(w) {
      const O = e.zoom;
      if (
        !c.$imageEl ||
        c.$imageEl.length === 0 ||
        ((e.allowClick = !1), !d.isTouched || !c.$slideEl)
      )
        return;
      d.isMoved ||
        ((d.width = c.$imageEl[0].offsetWidth),
        (d.height = c.$imageEl[0].offsetHeight),
        (d.startX = wn(c.$imageWrapEl[0], "x") || 0),
        (d.startY = wn(c.$imageWrapEl[0], "y") || 0),
        (c.slideWidth = c.$slideEl[0].offsetWidth),
        (c.slideHeight = c.$slideEl[0].offsetHeight),
        c.$imageWrapEl.transition(0));
      const z = d.width * O.scale,
        L = d.height * O.scale;
      if (!(z < c.slideWidth && L < c.slideHeight)) {
        if (
          ((d.minX = Math.min(c.slideWidth / 2 - z / 2, 0)),
          (d.maxX = -d.minX),
          (d.minY = Math.min(c.slideHeight / 2 - L / 2, 0)),
          (d.maxY = -d.minY),
          (d.touchesCurrent.x =
            w.type === "touchmove" ? w.targetTouches[0].pageX : w.pageX),
          (d.touchesCurrent.y =
            w.type === "touchmove" ? w.targetTouches[0].pageY : w.pageY),
          !d.isMoved && !s)
        ) {
          if (
            e.isHorizontal() &&
            ((Math.floor(d.minX) === Math.floor(d.startX) &&
              d.touchesCurrent.x < d.touchesStart.x) ||
              (Math.floor(d.maxX) === Math.floor(d.startX) &&
                d.touchesCurrent.x > d.touchesStart.x))
          ) {
            d.isTouched = !1;
            return;
          }
          if (
            !e.isHorizontal() &&
            ((Math.floor(d.minY) === Math.floor(d.startY) &&
              d.touchesCurrent.y < d.touchesStart.y) ||
              (Math.floor(d.maxY) === Math.floor(d.startY) &&
                d.touchesCurrent.y > d.touchesStart.y))
          ) {
            d.isTouched = !1;
            return;
          }
        }
        w.cancelable && w.preventDefault(),
          w.stopPropagation(),
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
          c.$imageWrapEl.transform(
            `translate3d(${d.currentX}px, ${d.currentY}px,0)`
          );
      }
    }
    function E() {
      const w = e.zoom;
      if (!c.$imageEl || c.$imageEl.length === 0) return;
      if (!d.isTouched || !d.isMoved) {
        (d.isTouched = !1), (d.isMoved = !1);
        return;
      }
      (d.isTouched = !1), (d.isMoved = !1);
      let O = 300,
        z = 300;
      const L = f.x * O,
        R = d.currentX + L,
        Y = f.y * z,
        j = d.currentY + Y;
      f.x !== 0 && (O = Math.abs((R - d.currentX) / f.x)),
        f.y !== 0 && (z = Math.abs((j - d.currentY) / f.y));
      const ae = Math.max(O, z);
      (d.currentX = R), (d.currentY = j);
      const fe = d.width * w.scale,
        J = d.height * w.scale;
      (d.minX = Math.min(c.slideWidth / 2 - fe / 2, 0)),
        (d.maxX = -d.minX),
        (d.minY = Math.min(c.slideHeight / 2 - J / 2, 0)),
        (d.maxY = -d.minY),
        (d.currentX = Math.max(Math.min(d.currentX, d.maxX), d.minX)),
        (d.currentY = Math.max(Math.min(d.currentY, d.maxY), d.minY)),
        c.$imageWrapEl
          .transition(ae)
          .transform(`translate3d(${d.currentX}px, ${d.currentY}px,0)`);
    }
    function T() {
      const w = e.zoom;
      c.$slideEl &&
        e.previousIndex !== e.activeIndex &&
        (c.$imageEl && c.$imageEl.transform("translate3d(0,0,0) scale(1)"),
        c.$imageWrapEl && c.$imageWrapEl.transform("translate3d(0,0,0)"),
        (w.scale = 1),
        (a = 1),
        (c.$slideEl = void 0),
        (c.$imageEl = void 0),
        (c.$imageWrapEl = void 0));
    }
    function S(w) {
      const O = e.zoom,
        z = e.params.zoom;
      if (
        (c.$slideEl ||
          (w &&
            w.target &&
            (c.$slideEl = D(w.target).closest(`.${e.params.slideClass}`)),
          c.$slideEl ||
            (e.params.virtual && e.params.virtual.enabled && e.virtual
              ? (c.$slideEl = e.$wrapperEl.children(
                  `.${e.params.slideActiveClass}`
                ))
              : (c.$slideEl = e.slides.eq(e.activeIndex))),
          (c.$imageEl = c.$slideEl
            .find(`.${z.containerClass}`)
            .eq(0)
            .find("picture, img, svg, canvas, .swiper-zoom-target")
            .eq(0)),
          (c.$imageWrapEl = c.$imageEl.parent(`.${z.containerClass}`))),
        !c.$imageEl ||
          c.$imageEl.length === 0 ||
          !c.$imageWrapEl ||
          c.$imageWrapEl.length === 0)
      )
        return;
      e.params.cssMode &&
        ((e.wrapperEl.style.overflow = "hidden"),
        (e.wrapperEl.style.touchAction = "none")),
        c.$slideEl.addClass(`${z.zoomedSlideClass}`);
      let L, R, Y, j, ae, fe, J, ut, da, fa, ha, pa, yn, bn, vi, yi, bi, _i;
      typeof d.touchesStart.x > "u" && w
        ? ((L = w.type === "touchend" ? w.changedTouches[0].pageX : w.pageX),
          (R = w.type === "touchend" ? w.changedTouches[0].pageY : w.pageY))
        : ((L = d.touchesStart.x), (R = d.touchesStart.y)),
        (O.scale = c.$imageWrapEl.attr("data-swiper-zoom") || z.maxRatio),
        (a = c.$imageWrapEl.attr("data-swiper-zoom") || z.maxRatio),
        w
          ? ((bi = c.$slideEl[0].offsetWidth),
            (_i = c.$slideEl[0].offsetHeight),
            (Y = c.$slideEl.offset().left + r.scrollX),
            (j = c.$slideEl.offset().top + r.scrollY),
            (ae = Y + bi / 2 - L),
            (fe = j + _i / 2 - R),
            (da = c.$imageEl[0].offsetWidth),
            (fa = c.$imageEl[0].offsetHeight),
            (ha = da * O.scale),
            (pa = fa * O.scale),
            (yn = Math.min(bi / 2 - ha / 2, 0)),
            (bn = Math.min(_i / 2 - pa / 2, 0)),
            (vi = -yn),
            (yi = -bn),
            (J = ae * O.scale),
            (ut = fe * O.scale),
            J < yn && (J = yn),
            J > vi && (J = vi),
            ut < bn && (ut = bn),
            ut > yi && (ut = yi))
          : ((J = 0), (ut = 0)),
        c.$imageWrapEl
          .transition(300)
          .transform(`translate3d(${J}px, ${ut}px,0)`),
        c.$imageEl
          .transition(300)
          .transform(`translate3d(0,0,0) scale(${O.scale})`);
    }
    function C() {
      const w = e.zoom,
        O = e.params.zoom;
      c.$slideEl ||
        (e.params.virtual && e.params.virtual.enabled && e.virtual
          ? (c.$slideEl = e.$wrapperEl.children(
              `.${e.params.slideActiveClass}`
            ))
          : (c.$slideEl = e.slides.eq(e.activeIndex)),
        (c.$imageEl = c.$slideEl
          .find(`.${O.containerClass}`)
          .eq(0)
          .find("picture, img, svg, canvas, .swiper-zoom-target")
          .eq(0)),
        (c.$imageWrapEl = c.$imageEl.parent(`.${O.containerClass}`))),
        !(
          !c.$imageEl ||
          c.$imageEl.length === 0 ||
          !c.$imageWrapEl ||
          c.$imageWrapEl.length === 0
        ) &&
          (e.params.cssMode &&
            ((e.wrapperEl.style.overflow = ""),
            (e.wrapperEl.style.touchAction = "")),
          (w.scale = 1),
          (a = 1),
          c.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
          c.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
          c.$slideEl.removeClass(`${O.zoomedSlideClass}`),
          (c.$slideEl = void 0));
    }
    function A(w) {
      const O = e.zoom;
      O.scale && O.scale !== 1 ? C() : S(w);
    }
    function k() {
      const w = e.support,
        O =
          e.touchEvents.start === "touchstart" &&
          w.passiveListener &&
          e.params.passiveListeners
            ? { passive: !0, capture: !1 }
            : !1,
        z = w.passiveListener ? { passive: !1, capture: !0 } : !0;
      return { passiveListener: O, activeListenerWithCapture: z };
    }
    function P() {
      return `.${e.params.slideClass}`;
    }
    function M(w) {
      const { passiveListener: O } = k(),
        z = P();
      e.$wrapperEl[w]("gesturestart", z, h, O),
        e.$wrapperEl[w]("gesturechange", z, m, O),
        e.$wrapperEl[w]("gestureend", z, b, O);
    }
    function _() {
      o || ((o = !0), M("on"));
    }
    function x() {
      o && ((o = !1), M("off"));
    }
    function $() {
      const w = e.zoom;
      if (w.enabled) return;
      w.enabled = !0;
      const O = e.support,
        { passiveListener: z, activeListenerWithCapture: L } = k(),
        R = P();
      O.gestures
        ? (e.$wrapperEl.on(e.touchEvents.start, _, z),
          e.$wrapperEl.on(e.touchEvents.end, x, z))
        : e.touchEvents.start === "touchstart" &&
          (e.$wrapperEl.on(e.touchEvents.start, R, h, z),
          e.$wrapperEl.on(e.touchEvents.move, R, m, L),
          e.$wrapperEl.on(e.touchEvents.end, R, b, z),
          e.touchEvents.cancel &&
            e.$wrapperEl.on(e.touchEvents.cancel, R, b, z)),
        e.$wrapperEl.on(
          e.touchEvents.move,
          `.${e.params.zoom.containerClass}`,
          y,
          L
        );
    }
    function I() {
      const w = e.zoom;
      if (!w.enabled) return;
      const O = e.support;
      w.enabled = !1;
      const { passiveListener: z, activeListenerWithCapture: L } = k(),
        R = P();
      O.gestures
        ? (e.$wrapperEl.off(e.touchEvents.start, _, z),
          e.$wrapperEl.off(e.touchEvents.end, x, z))
        : e.touchEvents.start === "touchstart" &&
          (e.$wrapperEl.off(e.touchEvents.start, R, h, z),
          e.$wrapperEl.off(e.touchEvents.move, R, m, L),
          e.$wrapperEl.off(e.touchEvents.end, R, b, z),
          e.touchEvents.cancel &&
            e.$wrapperEl.off(e.touchEvents.cancel, R, b, z)),
        e.$wrapperEl.off(
          e.touchEvents.move,
          `.${e.params.zoom.containerClass}`,
          y,
          L
        );
    }
    n("init", () => {
      e.params.zoom.enabled && $();
    }),
      n("destroy", () => {
        I();
      }),
      n("touchStart", (w, O) => {
        e.zoom.enabled && v(O);
      }),
      n("touchEnd", (w, O) => {
        e.zoom.enabled && E();
      }),
      n("doubleTap", (w, O) => {
        !e.animating &&
          e.params.zoom.enabled &&
          e.zoom.enabled &&
          e.params.zoom.toggle &&
          A(O);
      }),
      n("transitionEnd", () => {
        e.zoom.enabled && e.params.zoom.enabled && T();
      }),
      n("slideChange", () => {
        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && T();
      }),
      Object.assign(e.zoom, {
        enable: $,
        disable: I,
        in: S,
        out: C,
        toggle: A,
      });
  }
  function Qo({ swiper: e, extendParams: t, on: n, emit: i }) {
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
    let r = !1,
      a = !1;
    function s(u, c = !0) {
      const d = e.params.lazy;
      if (typeof u > "u" || e.slides.length === 0) return;
      const p =
          e.virtual && e.params.virtual.enabled
            ? e.$wrapperEl.children(
                `.${e.params.slideClass}[data-swiper-slide-index="${u}"]`
              )
            : e.slides.eq(u),
        g = p.find(
          `.${d.elementClass}:not(.${d.loadedClass}):not(.${d.loadingClass})`
        );
      p.hasClass(d.elementClass) &&
        !p.hasClass(d.loadedClass) &&
        !p.hasClass(d.loadingClass) &&
        g.push(p[0]),
        g.length !== 0 &&
          g.each((h) => {
            const m = D(h);
            m.addClass(d.loadingClass);
            const b = m.attr("data-background"),
              v = m.attr("data-src"),
              y = m.attr("data-srcset"),
              E = m.attr("data-sizes"),
              T = m.parent("picture");
            e.loadImage(m[0], v || b, y, E, !1, () => {
              if (
                !(
                  typeof e > "u" ||
                  e === null ||
                  !e ||
                  (e && !e.params) ||
                  e.destroyed
                )
              ) {
                if (
                  (b
                    ? (m.css("background-image", `url("${b}")`),
                      m.removeAttr("data-background"))
                    : (y && (m.attr("srcset", y), m.removeAttr("data-srcset")),
                      E && (m.attr("sizes", E), m.removeAttr("data-sizes")),
                      T.length &&
                        T.children("source").each((S) => {
                          const C = D(S);
                          C.attr("data-srcset") &&
                            (C.attr("srcset", C.attr("data-srcset")),
                            C.removeAttr("data-srcset"));
                        }),
                      v && (m.attr("src", v), m.removeAttr("data-src"))),
                  m.addClass(d.loadedClass).removeClass(d.loadingClass),
                  p.find(`.${d.preloaderClass}`).remove(),
                  e.params.loop && c)
                ) {
                  const S = p.attr("data-swiper-slide-index");
                  if (p.hasClass(e.params.slideDuplicateClass)) {
                    const C = e.$wrapperEl.children(
                      `[data-swiper-slide-index="${S}"]:not(.${e.params.slideDuplicateClass})`
                    );
                    s(C.index(), !1);
                  } else {
                    const C = e.$wrapperEl.children(
                      `.${e.params.slideDuplicateClass}[data-swiper-slide-index="${S}"]`
                    );
                    s(C.index(), !1);
                  }
                }
                i("lazyImageReady", p[0], m[0]),
                  e.params.autoHeight && e.updateAutoHeight();
              }
            }),
              i("lazyImageLoad", p[0], m[0]);
          });
    }
    function o() {
      const { $wrapperEl: u, params: c, slides: d, activeIndex: f } = e,
        p = e.virtual && c.virtual.enabled,
        g = c.lazy;
      let h = c.slidesPerView;
      h === "auto" && (h = 0);
      function m(v) {
        if (p) {
          if (
            u.children(`.${c.slideClass}[data-swiper-slide-index="${v}"]`)
              .length
          )
            return !0;
        } else if (d[v]) return !0;
        return !1;
      }
      function b(v) {
        return p ? D(v).attr("data-swiper-slide-index") : D(v).index();
      }
      if ((a || (a = !0), e.params.watchSlidesProgress))
        u.children(`.${c.slideVisibleClass}`).each((v) => {
          const y = p ? D(v).attr("data-swiper-slide-index") : D(v).index();
          s(y);
        });
      else if (h > 1) for (let v = f; v < f + h; v += 1) m(v) && s(v);
      else s(f);
      if (g.loadPrevNext)
        if (h > 1 || (g.loadPrevNextAmount && g.loadPrevNextAmount > 1)) {
          const v = g.loadPrevNextAmount,
            y = Math.ceil(h),
            E = Math.min(f + y + Math.max(v, y), d.length),
            T = Math.max(f - Math.max(y, v), 0);
          for (let S = f + y; S < E; S += 1) m(S) && s(S);
          for (let S = T; S < f; S += 1) m(S) && s(S);
        } else {
          const v = u.children(`.${c.slideNextClass}`);
          v.length > 0 && s(b(v));
          const y = u.children(`.${c.slidePrevClass}`);
          y.length > 0 && s(b(y));
        }
    }
    function l() {
      const u = F();
      if (!e || e.destroyed) return;
      const c = e.params.lazy.scrollingElement
          ? D(e.params.lazy.scrollingElement)
          : D(u),
        d = c[0] === u,
        f = d ? u.innerWidth : c[0].offsetWidth,
        p = d ? u.innerHeight : c[0].offsetHeight,
        g = e.$el.offset(),
        { rtlTranslate: h } = e;
      let m = !1;
      h && (g.left -= e.$el[0].scrollLeft);
      const b = [
        [g.left, g.top],
        [g.left + e.width, g.top],
        [g.left, g.top + e.height],
        [g.left + e.width, g.top + e.height],
      ];
      for (let y = 0; y < b.length; y += 1) {
        const E = b[y];
        if (E[0] >= 0 && E[0] <= f && E[1] >= 0 && E[1] <= p) {
          if (E[0] === 0 && E[1] === 0) continue;
          m = !0;
        }
      }
      const v =
        e.touchEvents.start === "touchstart" &&
        e.support.passiveListener &&
        e.params.passiveListeners
          ? { passive: !0, capture: !1 }
          : !1;
      m ? (o(), c.off("scroll", l, v)) : r || ((r = !0), c.on("scroll", l, v));
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
            (!e.params.lazy.loadOnTransitionStart && !a)) &&
          (e.params.lazy.checkInView ? l() : o());
      }),
      n("transitionEnd", () => {
        e.params.lazy.enabled &&
          !e.params.lazy.loadOnTransitionStart &&
          (e.params.lazy.checkInView ? l() : o());
      }),
      n("slideChange", () => {
        const {
          lazy: u,
          cssMode: c,
          watchSlidesProgress: d,
          touchReleaseOnEdges: f,
          resistanceRatio: p,
        } = e.params;
        u.enabled && (c || (d && (f || p === 0))) && o();
      }),
      n("destroy", () => {
        e.$el &&
          e.$el
            .find(`.${e.params.lazy.loadingClass}`)
            .removeClass(e.params.lazy.loadingClass);
      }),
      Object.assign(e.lazy, { load: o, loadInSlide: s });
  }
  function Zo({ swiper: e, extendParams: t, on: n }) {
    t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
      (e.controller = { control: void 0 });
    function i(l, u) {
      const c = (function () {
        let g, h, m;
        return (b, v) => {
          for (h = -1, g = b.length; g - h > 1; )
            (m = (g + h) >> 1), b[m] <= v ? (h = m) : (g = m);
          return g;
        };
      })();
      (this.x = l), (this.y = u), (this.lastIndex = l.length - 1);
      let d, f;
      return (
        (this.interpolate = function (g) {
          return g
            ? ((f = c(this.x, g)),
              (d = f - 1),
              ((g - this.x[d]) * (this.y[f] - this.y[d])) /
                (this.x[f] - this.x[d]) +
                this.y[d])
            : 0;
        }),
        this
      );
    }
    function r(l) {
      e.controller.spline ||
        (e.controller.spline = e.params.loop
          ? new i(e.slidesGrid, l.slidesGrid)
          : new i(e.snapGrid, l.snapGrid));
    }
    function a(l, u) {
      const c = e.controller.control;
      let d, f;
      const p = e.constructor;
      function g(h) {
        const m = e.rtlTranslate ? -e.translate : e.translate;
        e.params.controller.by === "slide" &&
          (r(h), (f = -e.controller.spline.interpolate(-m))),
          (!f || e.params.controller.by === "container") &&
            ((d =
              (h.maxTranslate() - h.minTranslate()) /
              (e.maxTranslate() - e.minTranslate())),
            (f = (m - e.minTranslate()) * d + h.minTranslate())),
          e.params.controller.inverse && (f = h.maxTranslate() - f),
          h.updateProgress(f),
          h.setTranslate(f, e),
          h.updateActiveIndex(),
          h.updateSlidesClasses();
      }
      if (Array.isArray(c))
        for (let h = 0; h < c.length; h += 1)
          c[h] !== u && c[h] instanceof p && g(c[h]);
      else c instanceof p && u !== c && g(c);
    }
    function s(l, u) {
      const c = e.constructor,
        d = e.controller.control;
      let f;
      function p(g) {
        g.setTransition(l, e),
          l !== 0 &&
            (g.transitionStart(),
            g.params.autoHeight &&
              Be(() => {
                g.updateAutoHeight();
              }),
            g.$wrapperEl.transitionEnd(() => {
              d &&
                (g.params.loop &&
                  e.params.controller.by === "slide" &&
                  g.loopFix(),
                g.transitionEnd());
            }));
      }
      if (Array.isArray(d))
        for (f = 0; f < d.length; f += 1)
          d[f] !== u && d[f] instanceof c && p(d[f]);
      else d instanceof c && u !== d && p(d);
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
      n("setTranslate", (l, u, c) => {
        e.controller.control && e.controller.setTranslate(u, c);
      }),
      n("setTransition", (l, u, c) => {
        e.controller.control && e.controller.setTransition(u, c);
      }),
      Object.assign(e.controller, { setTranslate: a, setTransition: s });
  }
  function Ko({ swiper: e, extendParams: t, on: n }) {
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
    let i = null;
    function r(_) {
      const x = i;
      x.length !== 0 && (x.html(""), x.html(_));
    }
    function a(_ = 16) {
      const x = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(_).replace(/x/g, x);
    }
    function s(_) {
      _.attr("tabIndex", "0");
    }
    function o(_) {
      _.attr("tabIndex", "-1");
    }
    function l(_, x) {
      _.attr("role", x);
    }
    function u(_, x) {
      _.attr("aria-roledescription", x);
    }
    function c(_, x) {
      _.attr("aria-controls", x);
    }
    function d(_, x) {
      _.attr("aria-label", x);
    }
    function f(_, x) {
      _.attr("id", x);
    }
    function p(_, x) {
      _.attr("aria-live", x);
    }
    function g(_) {
      _.attr("aria-disabled", !0);
    }
    function h(_) {
      _.attr("aria-disabled", !1);
    }
    function m(_) {
      if (_.keyCode !== 13 && _.keyCode !== 32) return;
      const x = e.params.a11y,
        $ = D(_.target);
      e.navigation &&
        e.navigation.$nextEl &&
        $.is(e.navigation.$nextEl) &&
        ((e.isEnd && !e.params.loop) || e.slideNext(),
        e.isEnd ? r(x.lastSlideMessage) : r(x.nextSlideMessage)),
        e.navigation &&
          e.navigation.$prevEl &&
          $.is(e.navigation.$prevEl) &&
          ((e.isBeginning && !e.params.loop) || e.slidePrev(),
          e.isBeginning ? r(x.firstSlideMessage) : r(x.prevSlideMessage)),
        e.pagination &&
          $.is(Ie(e.params.pagination.bulletClass)) &&
          $[0].click();
    }
    function b() {
      if (e.params.loop || e.params.rewind || !e.navigation) return;
      const { $nextEl: _, $prevEl: x } = e.navigation;
      x && x.length > 0 && (e.isBeginning ? (g(x), o(x)) : (h(x), s(x))),
        _ && _.length > 0 && (e.isEnd ? (g(_), o(_)) : (h(_), s(_)));
    }
    function v() {
      return (
        e.pagination && e.pagination.bullets && e.pagination.bullets.length
      );
    }
    function y() {
      return v() && e.params.pagination.clickable;
    }
    function E() {
      const _ = e.params.a11y;
      v() &&
        e.pagination.bullets.each((x) => {
          const $ = D(x);
          e.params.pagination.clickable &&
            (s($),
            e.params.pagination.renderBullet ||
              (l($, "button"),
              d(
                $,
                _.paginationBulletMessage.replace(
                  /\{\{index\}\}/,
                  $.index() + 1
                )
              ))),
            $.is(`.${e.params.pagination.bulletActiveClass}`)
              ? $.attr("aria-current", "true")
              : $.removeAttr("aria-current");
        });
    }
    const T = (_, x, $) => {
        s(_),
          _[0].tagName !== "BUTTON" && (l(_, "button"), _.on("keydown", m)),
          d(_, $),
          c(_, x);
      },
      S = () => {
        e.a11y.clicked = !0;
      },
      C = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            e.destroyed || (e.a11y.clicked = !1);
          });
        });
      },
      A = (_) => {
        if (e.a11y.clicked) return;
        const x = _.target.closest(`.${e.params.slideClass}`);
        if (!x || !e.slides.includes(x)) return;
        const $ = e.slides.indexOf(x) === e.activeIndex,
          I =
            e.params.watchSlidesProgress &&
            e.visibleSlides &&
            e.visibleSlides.includes(x);
        $ ||
          I ||
          (_.sourceCapabilities && _.sourceCapabilities.firesTouchEvents) ||
          (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
          e.slideTo(e.slides.indexOf(x), 0));
      },
      k = () => {
        const _ = e.params.a11y;
        _.itemRoleDescriptionMessage &&
          u(D(e.slides), _.itemRoleDescriptionMessage),
          _.slideRole && l(D(e.slides), _.slideRole);
        const x = e.params.loop
          ? e.slides.filter(
              ($) => !$.classList.contains(e.params.slideDuplicateClass)
            ).length
          : e.slides.length;
        _.slideLabelMessage &&
          e.slides.each(($, I) => {
            const w = D($),
              O = e.params.loop
                ? parseInt(w.attr("data-swiper-slide-index"), 10)
                : I,
              z = _.slideLabelMessage
                .replace(/\{\{index\}\}/, O + 1)
                .replace(/\{\{slidesLength\}\}/, x);
            d(w, z);
          });
      },
      P = () => {
        const _ = e.params.a11y;
        e.$el.append(i);
        const x = e.$el;
        _.containerRoleDescriptionMessage &&
          u(x, _.containerRoleDescriptionMessage),
          _.containerMessage && d(x, _.containerMessage);
        const $ = e.$wrapperEl,
          I = _.id || $.attr("id") || `swiper-wrapper-${a(16)}`,
          w = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        f($, I), p($, w), k();
        let O, z;
        e.navigation && e.navigation.$nextEl && (O = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (z = e.navigation.$prevEl),
          O && O.length && T(O, I, _.nextSlideMessage),
          z && z.length && T(z, I, _.prevSlideMessage),
          y() &&
            e.pagination.$el.on(
              "keydown",
              Ie(e.params.pagination.bulletClass),
              m
            ),
          e.$el.on("focus", A, !0),
          e.$el.on("pointerdown", S, !0),
          e.$el.on("pointerup", C, !0);
      };
    function M() {
      i && i.length > 0 && i.remove();
      let _, x;
      e.navigation && e.navigation.$nextEl && (_ = e.navigation.$nextEl),
        e.navigation && e.navigation.$prevEl && (x = e.navigation.$prevEl),
        _ && _.off("keydown", m),
        x && x.off("keydown", m),
        y() &&
          e.pagination.$el.off(
            "keydown",
            Ie(e.params.pagination.bulletClass),
            m
          ),
        e.$el.off("focus", A, !0),
        e.$el.off("pointerdown", S, !0),
        e.$el.off("pointerup", C, !0);
    }
    n("beforeInit", () => {
      i = D(
        `<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
      );
    }),
      n("afterInit", () => {
        e.params.a11y.enabled && P();
      }),
      n(
        "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
        () => {
          e.params.a11y.enabled && k();
        }
      ),
      n("fromEdge toEdge afterInit lock unlock", () => {
        e.params.a11y.enabled && b();
      }),
      n("paginationUpdate", () => {
        e.params.a11y.enabled && E();
      }),
      n("destroy", () => {
        e.params.a11y.enabled && M();
      });
  }
  function Jo({ swiper: e, extendParams: t, on: n }) {
    t({
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
    const a = (f) =>
        f
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, ""),
      s = (f) => {
        const p = F();
        let g;
        f ? (g = new URL(f)) : (g = p.location);
        const h = g.pathname
            .slice(1)
            .split("/")
            .filter((y) => y !== ""),
          m = h.length,
          b = h[m - 2],
          v = h[m - 1];
        return { key: b, value: v };
      },
      o = (f, p) => {
        const g = F();
        if (!i || !e.params.history.enabled) return;
        let h;
        e.params.url ? (h = new URL(e.params.url)) : (h = g.location);
        const m = e.slides.eq(p);
        let b = a(m.attr("data-history"));
        if (e.params.history.root.length > 0) {
          let y = e.params.history.root;
          y[y.length - 1] === "/" && (y = y.slice(0, y.length - 1)),
            (b = `${y}/${f}/${b}`);
        } else h.pathname.includes(f) || (b = `${f}/${b}`);
        e.params.history.keepQuery && (b += h.search);
        const v = g.history.state;
        (v && v.value === b) ||
          (e.params.history.replaceState
            ? g.history.replaceState({ value: b }, null, b)
            : g.history.pushState({ value: b }, null, b));
      },
      l = (f, p, g) => {
        if (p)
          for (let h = 0, m = e.slides.length; h < m; h += 1) {
            const b = e.slides.eq(h);
            if (
              a(b.attr("data-history")) === p &&
              !b.hasClass(e.params.slideDuplicateClass)
            ) {
              const y = b.index();
              e.slideTo(y, f, g);
            }
          }
        else e.slideTo(0, f, g);
      },
      u = () => {
        (r = s(e.params.url)), l(e.params.speed, r.value, !1);
      },
      c = () => {
        const f = F();
        if (e.params.history) {
          if (!f.history || !f.history.pushState) {
            (e.params.history.enabled = !1),
              (e.params.hashNavigation.enabled = !0);
            return;
          }
          (i = !0),
            (r = s(e.params.url)),
            !(!r.key && !r.value) &&
              (l(0, r.value, e.params.runCallbacksOnInit),
              e.params.history.replaceState ||
                f.addEventListener("popstate", u));
        }
      },
      d = () => {
        const f = F();
        e.params.history.replaceState || f.removeEventListener("popstate", u);
      };
    n("init", () => {
      e.params.history.enabled && c();
    }),
      n("destroy", () => {
        e.params.history.enabled && d();
      }),
      n("transitionEnd _freeModeNoMomentumRelease", () => {
        i && o(e.params.history.key, e.activeIndex);
      }),
      n("slideChange", () => {
        i && e.params.cssMode && o(e.params.history.key, e.activeIndex);
      });
  }
  function el({ swiper: e, extendParams: t, emit: n, on: i }) {
    let r = !1;
    const a = W(),
      s = F();
    t({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
    const o = () => {
        n("hashChange");
        const d = a.location.hash.replace("#", ""),
          f = e.slides.eq(e.activeIndex).attr("data-hash");
        if (d !== f) {
          const p = e.$wrapperEl
            .children(`.${e.params.slideClass}[data-hash="${d}"]`)
            .index();
          if (typeof p > "u") return;
          e.slideTo(p);
        }
      },
      l = () => {
        if (!(!r || !e.params.hashNavigation.enabled))
          if (
            e.params.hashNavigation.replaceState &&
            s.history &&
            s.history.replaceState
          )
            s.history.replaceState(
              null,
              null,
              `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""
            ),
              n("hashSet");
          else {
            const d = e.slides.eq(e.activeIndex),
              f = d.attr("data-hash") || d.attr("data-history");
            (a.location.hash = f || ""), n("hashSet");
          }
      },
      u = () => {
        if (
          !e.params.hashNavigation.enabled ||
          (e.params.history && e.params.history.enabled)
        )
          return;
        r = !0;
        const d = a.location.hash.replace("#", "");
        if (d)
          for (let p = 0, g = e.slides.length; p < g; p += 1) {
            const h = e.slides.eq(p);
            if (
              (h.attr("data-hash") || h.attr("data-history")) === d &&
              !h.hasClass(e.params.slideDuplicateClass)
            ) {
              const b = h.index();
              e.slideTo(b, 0, e.params.runCallbacksOnInit, !0);
            }
          }
        e.params.hashNavigation.watchState && D(s).on("hashchange", o);
      },
      c = () => {
        e.params.hashNavigation.watchState && D(s).off("hashchange", o);
      };
    i("init", () => {
      e.params.hashNavigation.enabled && u();
    }),
      i("destroy", () => {
        e.params.hashNavigation.enabled && c();
      }),
      i("transitionEnd _freeModeNoMomentumRelease", () => {
        r && l();
      }),
      i("slideChange", () => {
        r && e.params.cssMode && l();
      });
  }
  function tl({ swiper: e, extendParams: t, on: n, emit: i }) {
    let r;
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
    function a() {
      if (!e.size) {
        (e.autoplay.running = !1), (e.autoplay.paused = !1);
        return;
      }
      const h = e.slides.eq(e.activeIndex);
      let m = e.params.autoplay.delay;
      h.attr("data-swiper-autoplay") &&
        (m = h.attr("data-swiper-autoplay") || e.params.autoplay.delay),
        clearTimeout(r),
        (r = Be(() => {
          let b;
          e.params.autoplay.reverseDirection
            ? e.params.loop
              ? (e.loopFix(),
                (b = e.slidePrev(e.params.speed, !0, !0)),
                i("autoplay"))
              : e.isBeginning
              ? e.params.autoplay.stopOnLastSlide
                ? o()
                : ((b = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0)),
                  i("autoplay"))
              : ((b = e.slidePrev(e.params.speed, !0, !0)), i("autoplay"))
            : e.params.loop
            ? (e.loopFix(),
              (b = e.slideNext(e.params.speed, !0, !0)),
              i("autoplay"))
            : e.isEnd
            ? e.params.autoplay.stopOnLastSlide
              ? o()
              : ((b = e.slideTo(0, e.params.speed, !0, !0)), i("autoplay"))
            : ((b = e.slideNext(e.params.speed, !0, !0)), i("autoplay")),
            ((e.params.cssMode && e.autoplay.running) || b === !1) && a();
        }, m));
    }
    function s() {
      return typeof r < "u" || e.autoplay.running
        ? !1
        : ((e.autoplay.running = !0), i("autoplayStart"), a(), !0);
    }
    function o() {
      return !e.autoplay.running || typeof r > "u"
        ? !1
        : (r && (clearTimeout(r), (r = void 0)),
          (e.autoplay.running = !1),
          i("autoplayStop"),
          !0);
    }
    function l(h) {
      e.autoplay.running &&
        (e.autoplay.paused ||
          (r && clearTimeout(r),
          (e.autoplay.paused = !0),
          h === 0 || !e.params.autoplay.waitForTransition
            ? ((e.autoplay.paused = !1), a())
            : ["transitionend", "webkitTransitionEnd"].forEach((m) => {
                e.$wrapperEl[0].addEventListener(m, c);
              })));
    }
    function u() {
      const h = W();
      h.visibilityState === "hidden" && e.autoplay.running && l(),
        h.visibilityState === "visible" &&
          e.autoplay.paused &&
          (a(), (e.autoplay.paused = !1));
    }
    function c(h) {
      !e ||
        e.destroyed ||
        !e.$wrapperEl ||
        (h.target === e.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((m) => {
            e.$wrapperEl[0].removeEventListener(m, c);
          }),
          (e.autoplay.paused = !1),
          e.autoplay.running ? a() : o()));
    }
    function d() {
      e.params.autoplay.disableOnInteraction ? o() : (i("autoplayPause"), l()),
        ["transitionend", "webkitTransitionEnd"].forEach((h) => {
          e.$wrapperEl[0].removeEventListener(h, c);
        });
    }
    function f() {
      e.params.autoplay.disableOnInteraction ||
        ((e.autoplay.paused = !1), i("autoplayResume"), a());
    }
    function p() {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.$el.on("mouseenter", d), e.$el.on("mouseleave", f));
    }
    function g() {
      e.$el.off("mouseenter", d), e.$el.off("mouseleave", f);
    }
    n("init", () => {
      e.params.autoplay.enabled &&
        (s(), W().addEventListener("visibilitychange", u), p());
    }),
      n("beforeTransitionStart", (h, m, b) => {
        e.autoplay.running &&
          (b || !e.params.autoplay.disableOnInteraction
            ? e.autoplay.pause(m)
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
          a();
      }),
      n("destroy", () => {
        g(),
          e.autoplay.running && o(),
          W().removeEventListener("visibilitychange", u);
      }),
      Object.assign(e.autoplay, { pause: l, run: a, start: s, stop: o });
  }
  function nl({ swiper: e, extendParams: t, on: n }) {
    t({
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
    e.thumbs = { swiper: null };
    function a() {
      const l = e.thumbs.swiper;
      if (!l || l.destroyed) return;
      const u = l.clickedIndex,
        c = l.clickedSlide;
      if (
        (c && D(c).hasClass(e.params.thumbs.slideThumbActiveClass)) ||
        typeof u > "u" ||
        u === null
      )
        return;
      let d;
      if (
        (l.params.loop
          ? (d = parseInt(
              D(l.clickedSlide).attr("data-swiper-slide-index"),
              10
            ))
          : (d = u),
        e.params.loop)
      ) {
        let f = e.activeIndex;
        e.slides.eq(f).hasClass(e.params.slideDuplicateClass) &&
          (e.loopFix(),
          (e._clientLeft = e.$wrapperEl[0].clientLeft),
          (f = e.activeIndex));
        const p = e.slides
            .eq(f)
            .prevAll(`[data-swiper-slide-index="${d}"]`)
            .eq(0)
            .index(),
          g = e.slides
            .eq(f)
            .nextAll(`[data-swiper-slide-index="${d}"]`)
            .eq(0)
            .index();
        typeof p > "u"
          ? (d = g)
          : typeof g > "u"
          ? (d = p)
          : g - f < f - p
          ? (d = g)
          : (d = p);
      }
      e.slideTo(d);
    }
    function s() {
      const { thumbs: l } = e.params;
      if (i) return !1;
      i = !0;
      const u = e.constructor;
      if (l.swiper instanceof u)
        (e.thumbs.swiper = l.swiper),
          Object.assign(e.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
          Object.assign(e.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          });
      else if ($t(l.swiper)) {
        const c = Object.assign({}, l.swiper);
        Object.assign(c, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
          (e.thumbs.swiper = new u(c)),
          (r = !0);
      }
      return (
        e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
        e.thumbs.swiper.on("tap", a),
        !0
      );
    }
    function o(l) {
      const u = e.thumbs.swiper;
      if (!u || u.destroyed) return;
      const c =
        u.params.slidesPerView === "auto"
          ? u.slidesPerViewDynamic()
          : u.params.slidesPerView;
      let d = 1;
      const f = e.params.thumbs.slideThumbActiveClass;
      if (
        (e.params.slidesPerView > 1 &&
          !e.params.centeredSlides &&
          (d = e.params.slidesPerView),
        e.params.thumbs.multipleActiveThumbs || (d = 1),
        (d = Math.floor(d)),
        u.slides.removeClass(f),
        u.params.loop || (u.params.virtual && u.params.virtual.enabled))
      )
        for (let h = 0; h < d; h += 1)
          u.$wrapperEl
            .children(`[data-swiper-slide-index="${e.realIndex + h}"]`)
            .addClass(f);
      else
        for (let h = 0; h < d; h += 1) u.slides.eq(e.realIndex + h).addClass(f);
      const p = e.params.thumbs.autoScrollOffset,
        g = p && !u.params.loop;
      if (e.realIndex !== u.realIndex || g) {
        let h = u.activeIndex,
          m,
          b;
        if (u.params.loop) {
          u.slides.eq(h).hasClass(u.params.slideDuplicateClass) &&
            (u.loopFix(),
            (u._clientLeft = u.$wrapperEl[0].clientLeft),
            (h = u.activeIndex));
          const v = u.slides
              .eq(h)
              .prevAll(`[data-swiper-slide-index="${e.realIndex}"]`)
              .eq(0)
              .index(),
            y = u.slides
              .eq(h)
              .nextAll(`[data-swiper-slide-index="${e.realIndex}"]`)
              .eq(0)
              .index();
          typeof v > "u"
            ? (m = y)
            : typeof y > "u"
            ? (m = v)
            : y - h === h - v
            ? (m = u.params.slidesPerGroup > 1 ? y : h)
            : y - h < h - v
            ? (m = y)
            : (m = v),
            (b = e.activeIndex > e.previousIndex ? "next" : "prev");
        } else (m = e.realIndex), (b = m > e.previousIndex ? "next" : "prev");
        g && (m += b === "next" ? p : -1 * p),
          u.visibleSlidesIndexes &&
            u.visibleSlidesIndexes.indexOf(m) < 0 &&
            (u.params.centeredSlides
              ? m > h
                ? (m = m - Math.floor(c / 2) + 1)
                : (m = m + Math.floor(c / 2) - 1)
              : m > h && u.params.slidesPerGroup,
            u.slideTo(m, l ? 0 : void 0));
      }
    }
    n("beforeInit", () => {
      const { thumbs: l } = e.params;
      !l || !l.swiper || (s(), o(!0));
    }),
      n("slideChange update resize observerUpdate", () => {
        o();
      }),
      n("setTransition", (l, u) => {
        const c = e.thumbs.swiper;
        !c || c.destroyed || c.setTransition(u);
      }),
      n("beforeDestroy", () => {
        const l = e.thumbs.swiper;
        !l || l.destroyed || (r && l.destroy());
      }),
      Object.assign(e.thumbs, { init: s, update: o });
  }
  function il({ swiper: e, extendParams: t, emit: n, once: i }) {
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
    function r() {
      const o = e.getTranslate();
      e.setTranslate(o),
        e.setTransition(0),
        (e.touchEventsData.velocities.length = 0),
        e.freeMode.onTouchEnd({
          currentPos: e.rtl ? e.translate : -e.translate,
        });
    }
    function a() {
      const { touchEventsData: o, touches: l } = e;
      o.velocities.length === 0 &&
        o.velocities.push({
          position: l[e.isHorizontal() ? "startX" : "startY"],
          time: o.touchStartTime,
        }),
        o.velocities.push({
          position: l[e.isHorizontal() ? "currentX" : "currentY"],
          time: he(),
        });
    }
    function s({ currentPos: o }) {
      const {
          params: l,
          $wrapperEl: u,
          rtlTranslate: c,
          snapGrid: d,
          touchEventsData: f,
        } = e,
        g = he() - f.touchStartTime;
      if (o < -e.minTranslate()) {
        e.slideTo(e.activeIndex);
        return;
      }
      if (o > -e.maxTranslate()) {
        e.slides.length < d.length
          ? e.slideTo(d.length - 1)
          : e.slideTo(e.slides.length - 1);
        return;
      }
      if (l.freeMode.momentum) {
        if (f.velocities.length > 1) {
          const S = f.velocities.pop(),
            C = f.velocities.pop(),
            A = S.position - C.position,
            k = S.time - C.time;
          (e.velocity = A / k),
            (e.velocity /= 2),
            Math.abs(e.velocity) < l.freeMode.minimumVelocity &&
              (e.velocity = 0),
            (k > 150 || he() - S.time > 300) && (e.velocity = 0);
        } else e.velocity = 0;
        (e.velocity *= l.freeMode.momentumVelocityRatio),
          (f.velocities.length = 0);
        let h = 1e3 * l.freeMode.momentumRatio;
        const m = e.velocity * h;
        let b = e.translate + m;
        c && (b = -b);
        let v = !1,
          y;
        const E = Math.abs(e.velocity) * 20 * l.freeMode.momentumBounceRatio;
        let T;
        if (b < e.maxTranslate())
          l.freeMode.momentumBounce
            ? (b + e.maxTranslate() < -E && (b = e.maxTranslate() - E),
              (y = e.maxTranslate()),
              (v = !0),
              (f.allowMomentumBounce = !0))
            : (b = e.maxTranslate()),
            l.loop && l.centeredSlides && (T = !0);
        else if (b > e.minTranslate())
          l.freeMode.momentumBounce
            ? (b - e.minTranslate() > E && (b = e.minTranslate() + E),
              (y = e.minTranslate()),
              (v = !0),
              (f.allowMomentumBounce = !0))
            : (b = e.minTranslate()),
            l.loop && l.centeredSlides && (T = !0);
        else if (l.freeMode.sticky) {
          let S;
          for (let C = 0; C < d.length; C += 1)
            if (d[C] > -b) {
              S = C;
              break;
            }
          Math.abs(d[S] - b) < Math.abs(d[S - 1] - b) ||
          e.swipeDirection === "next"
            ? (b = d[S])
            : (b = d[S - 1]),
            (b = -b);
        }
        if (
          (T &&
            i("transitionEnd", () => {
              e.loopFix();
            }),
          e.velocity !== 0)
        ) {
          if (
            (c
              ? (h = Math.abs((-b - e.translate) / e.velocity))
              : (h = Math.abs((b - e.translate) / e.velocity)),
            l.freeMode.sticky)
          ) {
            const S = Math.abs((c ? -b : b) - e.translate),
              C = e.slidesSizesGrid[e.activeIndex];
            S < C
              ? (h = l.speed)
              : S < 2 * C
              ? (h = l.speed * 1.5)
              : (h = l.speed * 2.5);
          }
        } else if (l.freeMode.sticky) {
          e.slideToClosest();
          return;
        }
        l.freeMode.momentumBounce && v
          ? (e.updateProgress(y),
            e.setTransition(h),
            e.setTranslate(b),
            e.transitionStart(!0, e.swipeDirection),
            (e.animating = !0),
            u.transitionEnd(() => {
              !e ||
                e.destroyed ||
                !f.allowMomentumBounce ||
                (n("momentumBounce"),
                e.setTransition(l.speed),
                setTimeout(() => {
                  e.setTranslate(y),
                    u.transitionEnd(() => {
                      !e || e.destroyed || e.transitionEnd();
                    });
                }, 0));
            }))
          : e.velocity
          ? (n("_freeModeNoMomentumRelease"),
            e.updateProgress(b),
            e.setTransition(h),
            e.setTranslate(b),
            e.transitionStart(!0, e.swipeDirection),
            e.animating ||
              ((e.animating = !0),
              u.transitionEnd(() => {
                !e || e.destroyed || e.transitionEnd();
              })))
          : e.updateProgress(b),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
      } else if (l.freeMode.sticky) {
        e.slideToClosest();
        return;
      } else l.freeMode && n("_freeModeNoMomentumRelease");
      (!l.freeMode.momentum || g >= l.longSwipesMs) &&
        (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
    }
    Object.assign(e, {
      freeMode: { onTouchStart: r, onTouchMove: a, onTouchEnd: s },
    });
  }
  function rl({ swiper: e, extendParams: t }) {
    t({ grid: { rows: 1, fill: "column" } });
    let n, i, r;
    const a = (l) => {
        const { slidesPerView: u } = e.params,
          { rows: c, fill: d } = e.params.grid;
        (i = n / c),
          (r = Math.floor(l / c)),
          Math.floor(l / c) === l / c ? (n = l) : (n = Math.ceil(l / c) * c),
          u !== "auto" && d === "row" && (n = Math.max(n, u * c));
      },
      s = (l, u, c, d) => {
        const { slidesPerGroup: f, spaceBetween: p } = e.params,
          { rows: g, fill: h } = e.params.grid;
        let m, b, v;
        if (h === "row" && f > 1) {
          const y = Math.floor(l / (f * g)),
            E = l - g * f * y,
            T = y === 0 ? f : Math.min(Math.ceil((c - y * g * f) / g), f);
          (v = Math.floor(E / T)),
            (b = E - v * T + y * f),
            (m = b + (v * n) / g),
            u.css({ "-webkit-order": m, order: m });
        } else
          h === "column"
            ? ((b = Math.floor(l / g)),
              (v = l - b * g),
              (b > r || (b === r && v === g - 1)) &&
                ((v += 1), v >= g && ((v = 0), (b += 1))))
            : ((v = Math.floor(l / i)), (b = l - v * i));
        u.css(d("margin-top"), v !== 0 ? p && `${p}px` : "");
      },
      o = (l, u, c) => {
        const {
            spaceBetween: d,
            centeredSlides: f,
            roundLengths: p,
          } = e.params,
          { rows: g } = e.params.grid;
        if (
          ((e.virtualSize = (l + d) * n),
          (e.virtualSize = Math.ceil(e.virtualSize / g) - d),
          e.$wrapperEl.css({ [c("width")]: `${e.virtualSize + d}px` }),
          f)
        ) {
          u.splice(0, u.length);
          const h = [];
          for (let m = 0; m < u.length; m += 1) {
            let b = u[m];
            p && (b = Math.floor(b)), u[m] < e.virtualSize + u[0] && h.push(b);
          }
          u.push(...h);
        }
      };
    e.grid = { initSlides: a, updateSlide: s, updateWrapperSize: o };
  }
  function al(e) {
    const t = this,
      { $wrapperEl: n, params: i } = t;
    if ((i.loop && t.loopDestroy(), typeof e == "object" && "length" in e))
      for (let r = 0; r < e.length; r += 1) e[r] && n.append(e[r]);
    else n.append(e);
    i.loop && t.loopCreate(), i.observer || t.update();
  }
  function sl(e) {
    const t = this,
      { params: n, $wrapperEl: i, activeIndex: r } = t;
    n.loop && t.loopDestroy();
    let a = r + 1;
    if (typeof e == "object" && "length" in e) {
      for (let s = 0; s < e.length; s += 1) e[s] && i.prepend(e[s]);
      a = r + e.length;
    } else i.prepend(e);
    n.loop && t.loopCreate(), n.observer || t.update(), t.slideTo(a, 0, !1);
  }
  function ol(e, t) {
    const n = this,
      { $wrapperEl: i, params: r, activeIndex: a } = n;
    let s = a;
    r.loop &&
      ((s -= n.loopedSlides),
      n.loopDestroy(),
      (n.slides = i.children(`.${r.slideClass}`)));
    const o = n.slides.length;
    if (e <= 0) {
      n.prependSlide(t);
      return;
    }
    if (e >= o) {
      n.appendSlide(t);
      return;
    }
    let l = s > e ? s + 1 : s;
    const u = [];
    for (let c = o - 1; c >= e; c -= 1) {
      const d = n.slides.eq(c);
      d.remove(), u.unshift(d);
    }
    if (typeof t == "object" && "length" in t) {
      for (let c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
      l = s > e ? s + t.length : s;
    } else i.append(t);
    for (let c = 0; c < u.length; c += 1) i.append(u[c]);
    r.loop && n.loopCreate(),
      r.observer || n.update(),
      r.loop ? n.slideTo(l + n.loopedSlides, 0, !1) : n.slideTo(l, 0, !1);
  }
  function ll(e) {
    const t = this,
      { params: n, $wrapperEl: i, activeIndex: r } = t;
    let a = r;
    n.loop &&
      ((a -= t.loopedSlides),
      t.loopDestroy(),
      (t.slides = i.children(`.${n.slideClass}`)));
    let s = a,
      o;
    if (typeof e == "object" && "length" in e) {
      for (let l = 0; l < e.length; l += 1)
        (o = e[l]), t.slides[o] && t.slides.eq(o).remove(), o < s && (s -= 1);
      s = Math.max(s, 0);
    } else (o = e), t.slides[o] && t.slides.eq(o).remove(), o < s && (s -= 1), (s = Math.max(s, 0));
    n.loop && t.loopCreate(),
      n.observer || t.update(),
      n.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1);
  }
  function ul() {
    const e = this,
      t = [];
    for (let n = 0; n < e.slides.length; n += 1) t.push(n);
    e.removeSlide(t);
  }
  function cl({ swiper: e }) {
    Object.assign(e, {
      appendSlide: al.bind(e),
      prependSlide: sl.bind(e),
      addSlide: ol.bind(e),
      removeSlide: ll.bind(e),
      removeAllSlides: ul.bind(e),
    });
  }
  function ft(e) {
    const {
      effect: t,
      swiper: n,
      on: i,
      setTranslate: r,
      setTransition: a,
      overwriteParams: s,
      perspective: o,
      recreateShadows: l,
      getEffectParams: u,
    } = e;
    i("beforeInit", () => {
      if (n.params.effect !== t) return;
      n.classNames.push(`${n.params.containerModifierClass}${t}`),
        o && o() && n.classNames.push(`${n.params.containerModifierClass}3d`);
      const d = s ? s() : {};
      Object.assign(n.params, d), Object.assign(n.originalParams, d);
    }),
      i("setTranslate", () => {
        n.params.effect === t && r();
      }),
      i("setTransition", (d, f) => {
        n.params.effect === t && a(f);
      }),
      i("transitionEnd", () => {
        if (n.params.effect === t && l) {
          if (!u || !u().slideShadows) return;
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
    let c;
    i("virtualUpdate", () => {
      n.params.effect === t &&
        (n.slides.length || (c = !0),
        requestAnimationFrame(() => {
          c && n.slides && n.slides.length && (r(), (c = !1));
        }));
    });
  }
  function zt(e, t) {
    return e.transformEl
      ? t
          .find(e.transformEl)
          .css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden",
          })
      : t;
  }
  function tn({ swiper: e, duration: t, transformEl: n, allSlides: i }) {
    const { slides: r, activeIndex: a, $wrapperEl: s } = e;
    if (e.params.virtualTranslate && t !== 0) {
      let o = !1,
        l;
      i ? (l = n ? r.find(n) : r) : (l = n ? r.eq(a).find(n) : r.eq(a)),
        l.transitionEnd(() => {
          if (o || !e || e.destroyed) return;
          (o = !0), (e.animating = !1);
          const u = ["webkitTransitionEnd", "transitionend"];
          for (let c = 0; c < u.length; c += 1) s.trigger(u[c]);
        });
    }
  }
  function dl({ swiper: e, extendParams: t, on: n }) {
    t({ fadeEffect: { crossFade: !1, transformEl: null } }),
      ft({
        effect: "fade",
        swiper: e,
        on: n,
        setTranslate: () => {
          const { slides: a } = e,
            s = e.params.fadeEffect;
          for (let o = 0; o < a.length; o += 1) {
            const l = e.slides.eq(o);
            let c = -l[0].swiperSlideOffset;
            e.params.virtualTranslate || (c -= e.translate);
            let d = 0;
            e.isHorizontal() || ((d = c), (c = 0));
            const f = e.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(l[0].progress), 0)
              : 1 + Math.min(Math.max(l[0].progress, -1), 0);
            zt(s, l)
              .css({ opacity: f })
              .transform(`translate3d(${c}px, ${d}px, 0px)`);
          }
        },
        setTransition: (a) => {
          const { transformEl: s } = e.params.fadeEffect;
          (s ? e.slides.find(s) : e.slides).transition(a),
            tn({ swiper: e, duration: a, transformEl: s, allSlides: !0 });
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
  function fl({ swiper: e, extendParams: t, on: n }) {
    t({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    });
    const i = (o, l, u) => {
      let c = u
          ? o.find(".swiper-slide-shadow-left")
          : o.find(".swiper-slide-shadow-top"),
        d = u
          ? o.find(".swiper-slide-shadow-right")
          : o.find(".swiper-slide-shadow-bottom");
      c.length === 0 &&
        ((c = D(
          `<div class="swiper-slide-shadow-${u ? "left" : "top"}"></div>`
        )),
        o.append(c)),
        d.length === 0 &&
          ((d = D(
            `<div class="swiper-slide-shadow-${u ? "right" : "bottom"}"></div>`
          )),
          o.append(d)),
        c.length && (c[0].style.opacity = Math.max(-l, 0)),
        d.length && (d[0].style.opacity = Math.max(l, 0));
    };
    ft({
      effect: "cube",
      swiper: e,
      on: n,
      setTranslate: () => {
        const {
            $el: o,
            $wrapperEl: l,
            slides: u,
            width: c,
            height: d,
            rtlTranslate: f,
            size: p,
            browser: g,
          } = e,
          h = e.params.cubeEffect,
          m = e.isHorizontal(),
          b = e.virtual && e.params.virtual.enabled;
        let v = 0,
          y;
        h.shadow &&
          (m
            ? ((y = l.find(".swiper-cube-shadow")),
              y.length === 0 &&
                ((y = D('<div class="swiper-cube-shadow"></div>')),
                l.append(y)),
              y.css({ height: `${c}px` }))
            : ((y = o.find(".swiper-cube-shadow")),
              y.length === 0 &&
                ((y = D('<div class="swiper-cube-shadow"></div>')),
                o.append(y))));
        for (let T = 0; T < u.length; T += 1) {
          const S = u.eq(T);
          let C = T;
          b && (C = parseInt(S.attr("data-swiper-slide-index"), 10));
          let A = C * 90,
            k = Math.floor(A / 360);
          f && ((A = -A), (k = Math.floor(-A / 360)));
          const P = Math.max(Math.min(S[0].progress, 1), -1);
          let M = 0,
            _ = 0,
            x = 0;
          C % 4 === 0
            ? ((M = -k * 4 * p), (x = 0))
            : (C - 1) % 4 === 0
            ? ((M = 0), (x = -k * 4 * p))
            : (C - 2) % 4 === 0
            ? ((M = p + k * 4 * p), (x = p))
            : (C - 3) % 4 === 0 && ((M = -p), (x = 3 * p + p * 4 * k)),
            f && (M = -M),
            m || ((_ = M), (M = 0));
          const $ = `rotateX(${m ? 0 : -A}deg) rotateY(${
            m ? A : 0
          }deg) translate3d(${M}px, ${_}px, ${x}px)`;
          P <= 1 &&
            P > -1 &&
            ((v = C * 90 + P * 90), f && (v = -C * 90 - P * 90)),
            S.transform($),
            h.slideShadows && i(S, P, m);
        }
        if (
          (l.css({
            "-webkit-transform-origin": `50% 50% -${p / 2}px`,
            "transform-origin": `50% 50% -${p / 2}px`,
          }),
          h.shadow)
        )
          if (m)
            y.transform(
              `translate3d(0px, ${c / 2 + h.shadowOffset}px, ${
                -c / 2
              }px) rotateX(90deg) rotateZ(0deg) scale(${h.shadowScale})`
            );
          else {
            const T = Math.abs(v) - Math.floor(Math.abs(v) / 90) * 90,
              S =
                1.5 -
                (Math.sin((T * 2 * Math.PI) / 360) / 2 +
                  Math.cos((T * 2 * Math.PI) / 360) / 2),
              C = h.shadowScale,
              A = h.shadowScale / S,
              k = h.shadowOffset;
            y.transform(
              `scale3d(${C}, 1, ${A}) translate3d(0px, ${d / 2 + k}px, ${
                -d / 2 / A
              }px) rotateX(-90deg)`
            );
          }
        const E = g.isSafari || g.isWebView ? -p / 2 : 0;
        l.transform(
          `translate3d(0px,0,${E}px) rotateX(${
            e.isHorizontal() ? 0 : v
          }deg) rotateY(${e.isHorizontal() ? -v : 0}deg)`
        ),
          l[0].style.setProperty("--swiper-cube-translate-z", `${E}px`);
      },
      setTransition: (o) => {
        const { $el: l, slides: u } = e;
        u
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
          const u = Math.max(Math.min(l.progress, 1), -1);
          i(D(l), u, o);
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
  function ht(e, t, n) {
    const i = `swiper-slide-shadow${n ? `-${n}` : ""}`,
      r = e.transformEl ? t.find(e.transformEl) : t;
    let a = r.children(`.${i}`);
    return (
      a.length ||
        ((a = D(`<div class="swiper-slide-shadow${n ? `-${n}` : ""}"></div>`)),
        r.append(a)),
      a
    );
  }
  function hl({ swiper: e, extendParams: t, on: n }) {
    t({
      flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null },
    });
    const i = (o, l, u) => {
      let c = e.isHorizontal()
          ? o.find(".swiper-slide-shadow-left")
          : o.find(".swiper-slide-shadow-top"),
        d = e.isHorizontal()
          ? o.find(".swiper-slide-shadow-right")
          : o.find(".swiper-slide-shadow-bottom");
      c.length === 0 && (c = ht(u, o, e.isHorizontal() ? "left" : "top")),
        d.length === 0 && (d = ht(u, o, e.isHorizontal() ? "right" : "bottom")),
        c.length && (c[0].style.opacity = Math.max(-l, 0)),
        d.length && (d[0].style.opacity = Math.max(l, 0));
    };
    ft({
      effect: "flip",
      swiper: e,
      on: n,
      setTranslate: () => {
        const { slides: o, rtlTranslate: l } = e,
          u = e.params.flipEffect;
        for (let c = 0; c < o.length; c += 1) {
          const d = o.eq(c);
          let f = d[0].progress;
          e.params.flipEffect.limitRotation &&
            (f = Math.max(Math.min(d[0].progress, 1), -1));
          const p = d[0].swiperSlideOffset;
          let h = -180 * f,
            m = 0,
            b = e.params.cssMode ? -p - e.translate : -p,
            v = 0;
          e.isHorizontal()
            ? l && (h = -h)
            : ((v = b), (b = 0), (m = -h), (h = 0)),
            (d[0].style.zIndex = -Math.abs(Math.round(f)) + o.length),
            u.slideShadows && i(d, f, u);
          const y = `translate3d(${b}px, ${v}px, 0px) rotateX(${m}deg) rotateY(${h}deg)`;
          zt(u, d).transform(y);
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
          tn({ swiper: e, duration: o, transformEl: l });
      },
      recreateShadows: () => {
        const o = e.params.flipEffect;
        e.slides.each((l) => {
          const u = D(l);
          let c = u[0].progress;
          e.params.flipEffect.limitRotation &&
            (c = Math.max(Math.min(l.progress, 1), -1)),
            i(u, c, o);
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
  function pl({ swiper: e, extendParams: t, on: n }) {
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
      ft({
        effect: "coverflow",
        swiper: e,
        on: n,
        setTranslate: () => {
          const { width: a, height: s, slides: o, slidesSizesGrid: l } = e,
            u = e.params.coverflowEffect,
            c = e.isHorizontal(),
            d = e.translate,
            f = c ? -d + a / 2 : -d + s / 2,
            p = c ? u.rotate : -u.rotate,
            g = u.depth;
          for (let h = 0, m = o.length; h < m; h += 1) {
            const b = o.eq(h),
              v = l[h],
              y = b[0].swiperSlideOffset,
              E = (f - y - v / 2) / v,
              T =
                typeof u.modifier == "function"
                  ? u.modifier(E)
                  : E * u.modifier;
            let S = c ? p * T : 0,
              C = c ? 0 : p * T,
              A = -g * Math.abs(T),
              k = u.stretch;
            typeof k == "string" &&
              k.indexOf("%") !== -1 &&
              (k = (parseFloat(u.stretch) / 100) * v);
            let P = c ? 0 : k * T,
              M = c ? k * T : 0,
              _ = 1 - (1 - u.scale) * Math.abs(T);
            Math.abs(M) < 0.001 && (M = 0),
              Math.abs(P) < 0.001 && (P = 0),
              Math.abs(A) < 0.001 && (A = 0),
              Math.abs(S) < 0.001 && (S = 0),
              Math.abs(C) < 0.001 && (C = 0),
              Math.abs(_) < 0.001 && (_ = 0);
            const x = `translate3d(${M}px,${P}px,${A}px)  rotateX(${C}deg) rotateY(${S}deg) scale(${_})`;
            if (
              (zt(u, b).transform(x),
              (b[0].style.zIndex = -Math.abs(Math.round(T)) + 1),
              u.slideShadows)
            ) {
              let I = c
                  ? b.find(".swiper-slide-shadow-left")
                  : b.find(".swiper-slide-shadow-top"),
                w = c
                  ? b.find(".swiper-slide-shadow-right")
                  : b.find(".swiper-slide-shadow-bottom");
              I.length === 0 && (I = ht(u, b, c ? "left" : "top")),
                w.length === 0 && (w = ht(u, b, c ? "right" : "bottom")),
                I.length && (I[0].style.opacity = T > 0 ? T : 0),
                w.length && (w[0].style.opacity = -T > 0 ? -T : 0);
            }
          }
        },
        setTransition: (a) => {
          const { transformEl: s } = e.params.coverflowEffect;
          (s ? e.slides.find(s) : e.slides)
            .transition(a)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(a);
        },
        perspective: () => !0,
        overwriteParams: () => ({ watchSlidesProgress: !0 }),
      });
  }
  function ml({ swiper: e, extendParams: t, on: n }) {
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
    const i = (s) => (typeof s == "string" ? s : `${s}px`);
    ft({
      effect: "creative",
      swiper: e,
      on: n,
      setTranslate: () => {
        const { slides: s, $wrapperEl: o, slidesSizesGrid: l } = e,
          u = e.params.creativeEffect,
          { progressMultiplier: c } = u,
          d = e.params.centeredSlides;
        if (d) {
          const f = l[0] / 2 - e.params.slidesOffsetBefore || 0;
          o.transform(`translateX(calc(50% - ${f}px))`);
        }
        for (let f = 0; f < s.length; f += 1) {
          const p = s.eq(f),
            g = p[0].progress,
            h = Math.min(
              Math.max(p[0].progress, -u.limitProgress),
              u.limitProgress
            );
          let m = h;
          d ||
            (m = Math.min(
              Math.max(p[0].originalProgress, -u.limitProgress),
              u.limitProgress
            ));
          const b = p[0].swiperSlideOffset,
            v = [e.params.cssMode ? -b - e.translate : -b, 0, 0],
            y = [0, 0, 0];
          let E = !1;
          e.isHorizontal() || ((v[1] = v[0]), (v[0] = 0));
          let T = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1,
          };
          h < 0 ? ((T = u.next), (E = !0)) : h > 0 && ((T = u.prev), (E = !0)),
            v.forEach((_, x) => {
              v[x] = `calc(${_}px + (${i(T.translate[x])} * ${Math.abs(
                h * c
              )}))`;
            }),
            y.forEach((_, x) => {
              y[x] = T.rotate[x] * Math.abs(h * c);
            }),
            (p[0].style.zIndex = -Math.abs(Math.round(g)) + s.length);
          const S = v.join(", "),
            C = `rotateX(${y[0]}deg) rotateY(${y[1]}deg) rotateZ(${y[2]}deg)`,
            A =
              m < 0
                ? `scale(${1 + (1 - T.scale) * m * c})`
                : `scale(${1 - (1 - T.scale) * m * c})`,
            k =
              m < 0 ? 1 + (1 - T.opacity) * m * c : 1 - (1 - T.opacity) * m * c,
            P = `translate3d(${S}) ${C} ${A}`;
          if ((E && T.shadow) || !E) {
            let _ = p.children(".swiper-slide-shadow");
            if ((_.length === 0 && T.shadow && (_ = ht(u, p)), _.length)) {
              const x = u.shadowPerProgress ? h * (1 / u.limitProgress) : h;
              _[0].style.opacity = Math.min(Math.max(Math.abs(x), 0), 1);
            }
          }
          const M = zt(u, p);
          M.transform(P).css({ opacity: k }),
            T.origin && M.css("transform-origin", T.origin);
        }
      },
      setTransition: (s) => {
        const { transformEl: o } = e.params.creativeEffect;
        (o ? e.slides.find(o) : e.slides)
          .transition(s)
          .find(".swiper-slide-shadow")
          .transition(s),
          tn({ swiper: e, duration: s, transformEl: o, allSlides: !0 });
      },
      perspective: () => e.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
  }
  function gl({ swiper: e, extendParams: t, on: n }) {
    t({
      cardsEffect: {
        slideShadows: !0,
        transformEl: null,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8,
      },
    }),
      ft({
        effect: "cards",
        swiper: e,
        on: n,
        setTranslate: () => {
          const { slides: a, activeIndex: s } = e,
            o = e.params.cardsEffect,
            { startTranslate: l, isTouched: u } = e.touchEventsData,
            c = e.translate;
          for (let d = 0; d < a.length; d += 1) {
            const f = a.eq(d),
              p = f[0].progress,
              g = Math.min(Math.max(p, -4), 4);
            let h = f[0].swiperSlideOffset;
            e.params.centeredSlides &&
              !e.params.cssMode &&
              e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`),
              e.params.centeredSlides &&
                e.params.cssMode &&
                (h -= a[0].swiperSlideOffset);
            let m = e.params.cssMode ? -h - e.translate : -h,
              b = 0;
            const v = -100 * Math.abs(g);
            let y = 1,
              E = -o.perSlideRotate * g,
              T = o.perSlideOffset - Math.abs(g) * 0.75;
            const S =
                e.virtual && e.params.virtual.enabled ? e.virtual.from + d : d,
              C =
                (S === s || S === s - 1) &&
                g > 0 &&
                g < 1 &&
                (u || e.params.cssMode) &&
                c < l,
              A =
                (S === s || S === s + 1) &&
                g < 0 &&
                g > -1 &&
                (u || e.params.cssMode) &&
                c > l;
            if (C || A) {
              const _ = (1 - Math.abs((Math.abs(g) - 0.5) / 0.5)) ** 0.5;
              (E += -28 * g * _),
                (y += -0.5 * _),
                (T += 96 * _),
                (b = `${-25 * _ * Math.abs(g)}%`);
            }
            if (
              (g < 0
                ? (m = `calc(${m}px + (${T * Math.abs(g)}%))`)
                : g > 0
                ? (m = `calc(${m}px + (-${T * Math.abs(g)}%))`)
                : (m = `${m}px`),
              !e.isHorizontal())
            ) {
              const _ = b;
              (b = m), (m = _);
            }
            const k = g < 0 ? `${1 + (1 - y) * g}` : `${1 - (1 - y) * g}`,
              P = `
        translate3d(${m}, ${b}, ${v}px)
        rotateZ(${o.rotate ? E : 0}deg)
        scale(${k})
      `;
            if (o.slideShadows) {
              let _ = f.find(".swiper-slide-shadow");
              _.length === 0 && (_ = ht(o, f)),
                _.length &&
                  (_[0].style.opacity = Math.min(
                    Math.max((Math.abs(g) - 0.5) / 0.5, 0),
                    1
                  ));
            }
            (f[0].style.zIndex = -Math.abs(Math.round(p)) + a.length),
              zt(o, f).transform(P);
          }
        },
        setTransition: (a) => {
          const { transformEl: s } = e.params.cardsEffect;
          (s ? e.slides.find(s) : e.slides)
            .transition(a)
            .find(".swiper-slide-shadow")
            .transition(a),
            tn({ swiper: e, duration: a, transformEl: s });
        },
        perspective: () => !0,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
  }
  const vl = [
    Vo,
    Go,
    qo,
    Ho,
    Xo,
    jo,
    Wo,
    Uo,
    Qo,
    Zo,
    Ko,
    Jo,
    el,
    tl,
    nl,
    il,
    rl,
    cl,
    dl,
    fl,
    hl,
    pl,
    ml,
    gl,
  ];
  me.use(vl);
  const yl = () => {
      const e = document.querySelector(".swiper[work-slider='component']");
      e &&
        new me(e, {
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
          navigation: {},
          slideActiveClass: "is-active",
          slideDuplicateActiveClass: "is-active",
        });
    },
    Xi = () => {
      console.log("homeInit"), Fa(), yl();
    },
    nn = (e) => document.querySelector(e),
    ji = (e) => document.querySelectorAll(e),
    bl = (e, t) => e.classList.add(t),
    Wi = (e, t) => e.classList.toggle(t),
    _l = {
      home: Xi,
      about: () => {
        ji(".team-member").forEach((t) => {
          t.addEventListener("mouseenter", () => {
            var n;
            (n = t.querySelector(".member-bio")) == null ||
              n.classList.add("is-visible");
          }),
            t.addEventListener("mouseleave", () => {
              var n;
              (n = t.querySelector(".member-bio")) == null ||
                n.classList.remove("is-visible");
            });
        });
      },
      contact: () => {
        const e = nn(".contact-form");
        e &&
          e.addEventListener("submit", (t) => {
            t.preventDefault(), console.log("Form submitted!");
          });
      },
      "extra-page": Xi,
    },
    xl = () => {
      const e = document.querySelector("[data-route]");
      if (!e) {
        console.log("No element with data-route attribute found");
        return;
      }
      const t = e.dataset.route,
        n = _l[t];
      n ? n() : console.log(`No specific script for route: ${t}`);
    },
    Tl = () => {
      const e = nn(".menu-button"),
        t = nn(".navigation");
      !e ||
        !t ||
        e.addEventListener("click", () => {
          Wi(t, "is-open"), Wi(e, "is-active");
        });
    },
    El = () => {
      ji(".footer-accordion").forEach((t) => {
        const n = t.querySelector(".accordion-trigger"),
          i = t.querySelector(".accordion-content");
        !n ||
          !i ||
          n.addEventListener("click", () => {
            i.style.height = i.style.height ? "" : `${i.scrollHeight}px`;
          });
      });
    };
  class wl {
    constructor() {
      xi(this, "move", () => {
        (this.curX += (this.tgX - this.curX) / 20),
          (this.curY += (this.tgY - this.curY) / 20),
          (this.interBubble.style.transform = `translate(${Math.round(
            this.curX
          )}px, ${Math.round(this.curY)}px)`),
          requestAnimationFrame(this.move);
      });
      xi(this, "handleMouseMove", (t) => {
        (this.tgX = t.clientX), (this.tgY = t.clientY);
      });
      (this.interBubble = document.querySelector(".interactive")),
        (this.curX = 0),
        (this.curY = 0),
        (this.tgX = 0),
        (this.tgY = 0),
        this.init();
    }
    init() {
      window.addEventListener("mousemove", this.handleMouseMove), this.move();
    }
  }
  const Sl = () => {
    new wl();
  };
  function De(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function Ui(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      (e.__proto__ = t);
  }
  /*!
   * GSAP 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var ge = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    pt = { duration: 0.5, overwrite: !1, delay: 0 },
    $n,
    K,
    V,
    Ae = 1e8,
    ee = 1 / Ae,
    On = Math.PI * 2,
    Cl = On / 4,
    Al = 0,
    Qi = Math.sqrt,
    Ml = Math.cos,
    Pl = Math.sin,
    Z = function (t) {
      return typeof t == "string";
    },
    H = function (t) {
      return typeof t == "function";
    },
    Le = function (t) {
      return typeof t == "number";
    },
    zn = function (t) {
      return typeof t > "u";
    },
    Me = function (t) {
      return typeof t == "object";
    },
    oe = function (t) {
      return t !== !1;
    },
    In = function () {
      return typeof window < "u";
    },
    rn = function (t) {
      return H(t) || Z(t);
    },
    Zi =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    te = Array.isArray,
    Dn = /(?:-?\.?\d|\.)+/gi,
    Ki = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    mt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Ln = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Ji = /[+-]=-?[.\d]+/,
    er = /[^,'"\[\]\s]+/gi,
    kl = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    G,
    Pe,
    Rn,
    Nn,
    ve = {},
    an = {},
    tr,
    nr = function (t) {
      return (an = vt(t, ve)) && ce;
    },
    Fn = function (t, n) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        n,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    It = function (t, n) {
      return !n && console.warn(t);
    },
    ir = function (t, n) {
      return (t && (ve[t] = n) && an && (an[t] = n)) || ve;
    },
    Dt = function () {
      return 0;
    },
    $l = { suppressEvents: !0, isStart: !0, kill: !1 },
    sn = { suppressEvents: !0, kill: !1 },
    Ol = { suppressEvents: !0 },
    Bn = {},
    Ye = [],
    Yn = {},
    rr,
    ye = {},
    Vn = {},
    ar = 30,
    on = [],
    Gn = "",
    qn = function (t) {
      var n = t[0],
        i,
        r;
      if ((Me(n) || H(n) || (t = [t]), !(i = (n._gsap || {}).harness))) {
        for (r = on.length; r-- && !on[r].targetTest(n); );
        i = on[r];
      }
      for (r = t.length; r--; )
        (t[r] && (t[r]._gsap || (t[r]._gsap = new Ir(t[r], i)))) ||
          t.splice(r, 1);
      return t;
    },
    Je = function (t) {
      return t._gsap || qn(we(t))[0]._gsap;
    },
    sr = function (t, n, i) {
      return (i = t[n]) && H(i)
        ? t[n]()
        : (zn(i) && t.getAttribute && t.getAttribute(n)) || i;
    },
    le = function (t, n) {
      return (t = t.split(",")).forEach(n) || t;
    },
    X = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    U = function (t) {
      return Math.round(t * 1e7) / 1e7 || 0;
    },
    gt = function (t, n) {
      var i = n.charAt(0),
        r = parseFloat(n.substr(2));
      return (
        (t = parseFloat(t)),
        i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r
      );
    },
    zl = function (t, n) {
      for (var i = n.length, r = 0; t.indexOf(n[r]) < 0 && ++r < i; );
      return r < i;
    },
    ln = function () {
      var t = Ye.length,
        n = Ye.slice(0),
        i,
        r;
      for (Yn = {}, Ye.length = 0, i = 0; i < t; i++)
        (r = n[i]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    or = function (t, n, i, r) {
      Ye.length && !K && ln(),
        t.render(n, i, K && n < 0 && (t._initted || t._startAt)),
        Ye.length && !K && ln();
    },
    lr = function (t) {
      var n = parseFloat(t);
      return (n || n === 0) && (t + "").match(er).length < 2
        ? n
        : Z(t)
        ? t.trim()
        : t;
    },
    ur = function (t) {
      return t;
    },
    be = function (t, n) {
      for (var i in n) i in t || (t[i] = n[i]);
      return t;
    },
    Il = function (t) {
      return function (n, i) {
        for (var r in i)
          r in n || (r === "duration" && t) || r === "ease" || (n[r] = i[r]);
      };
    },
    vt = function (t, n) {
      for (var i in n) t[i] = n[i];
      return t;
    },
    cr = function e(t, n) {
      for (var i in n)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (t[i] = Me(n[i]) ? e(t[i] || (t[i] = {}), n[i]) : n[i]);
      return t;
    },
    un = function (t, n) {
      var i = {},
        r;
      for (r in t) r in n || (i[r] = t[r]);
      return i;
    },
    Lt = function (t) {
      var n = t.parent || G,
        i = t.keyframes ? Il(te(t.keyframes)) : be;
      if (oe(t.inherit))
        for (; n; ) i(t, n.vars.defaults), (n = n.parent || n._dp);
      return t;
    },
    Dl = function (t, n) {
      for (var i = t.length, r = i === n.length; r && i-- && t[i] === n[i]; );
      return i < 0;
    },
    dr = function (t, n, i, r, a) {
      var s = t[r],
        o;
      if (a) for (o = n[a]; s && s[a] > o; ) s = s._prev;
      return (
        s
          ? ((n._next = s._next), (s._next = n))
          : ((n._next = t[i]), (t[i] = n)),
        n._next ? (n._next._prev = n) : (t[r] = n),
        (n._prev = s),
        (n.parent = n._dp = t),
        n
      );
    },
    cn = function (t, n, i, r) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var a = n._prev,
        s = n._next;
      a ? (a._next = s) : t[i] === n && (t[i] = s),
        s ? (s._prev = a) : t[r] === n && (t[r] = a),
        (n._next = n._prev = n.parent = null);
    },
    Ve = function (t, n) {
      t.parent &&
        (!n || t.parent.autoRemoveChildren) &&
        t.parent.remove &&
        t.parent.remove(t),
        (t._act = 0);
    },
    et = function (t, n) {
      if (t && (!n || n._end > t._dur || n._start < 0))
        for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
      return t;
    },
    Ll = function (t) {
      for (var n = t.parent; n && n.parent; )
        (n._dirty = 1), n.totalDuration(), (n = n.parent);
      return t;
    },
    Hn = function (t, n, i, r) {
      return (
        t._startAt &&
        (K
          ? t._startAt.revert(sn)
          : (t.vars.immediateRender && !t.vars.autoRevert) ||
            t._startAt.render(n, !0, r))
      );
    },
    Rl = function e(t) {
      return !t || (t._ts && e(t.parent));
    },
    fr = function (t) {
      return t._repeat ? yt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    yt = function (t, n) {
      var i = Math.floor((t = U(t / n)));
      return t && i === t ? i - 1 : i;
    },
    dn = function (t, n) {
      return (
        (t - n._start) * n._ts +
        (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
      );
    },
    fn = function (t) {
      return (t._end = U(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || ee) || 0)
      ));
    },
    hn = function (t, n) {
      var i = t._dp;
      return (
        i &&
          i.smoothChildTiming &&
          t._ts &&
          ((t._start = U(
            i._time -
              (t._ts > 0
                ? n / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - n) / -t._ts)
          )),
          fn(t),
          i._dirty || et(i, t)),
        t
      );
    },
    hr = function (t, n) {
      var i;
      if (
        ((n._time ||
          (!n._dur && n._initted) ||
          (n._start < t._time && (n._dur || !n.add))) &&
          ((i = dn(t.rawTime(), n)),
          (!n._dur || Nt(0, n.totalDuration(), i) - n._tTime > ee) &&
            n.render(i, !0)),
        et(t, n)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (i = t; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        t._zTime = -1e-8;
      }
    },
    ke = function (t, n, i, r) {
      return (
        n.parent && Ve(n),
        (n._start = U(
          (Le(i) ? i : i || t !== G ? Ee(t, i, n) : t._time) + n._delay
        )),
        (n._end = U(
          n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)
        )),
        dr(t, n, "_first", "_last", t._sort ? "_start" : 0),
        Xn(n) || (t._recent = n),
        r || hr(t, n),
        t._ts < 0 && hn(t, t._tTime),
        t
      );
    },
    pr = function (t, n) {
      return (
        (ve.ScrollTrigger || Fn("scrollTrigger", n)) &&
        ve.ScrollTrigger.create(n, t)
      );
    },
    mr = function (t, n, i, r, a) {
      if ((ti(t, n, a), !t._initted)) return 1;
      if (
        !i &&
        t._pt &&
        !K &&
        ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
        rr !== xe.frame
      )
        return Ye.push(t), (t._lazy = [a, r]), 1;
    },
    Nl = function e(t) {
      var n = t.parent;
      return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
    },
    Xn = function (t) {
      var n = t.data;
      return n === "isFromStart" || n === "isStart";
    },
    Fl = function (t, n, i, r) {
      var a = t.ratio,
        s =
          n < 0 ||
          (!n &&
            ((!t._start && Nl(t) && !(!t._initted && Xn(t))) ||
              ((t._ts < 0 || t._dp._ts < 0) && !Xn(t))))
            ? 0
            : 1,
        o = t._rDelay,
        l = 0,
        u,
        c,
        d;
      if (
        (o &&
          t._repeat &&
          ((l = Nt(0, t._tDur, n)),
          (c = yt(l, o)),
          t._yoyo && c & 1 && (s = 1 - s),
          c !== yt(t._tTime, o) &&
            ((a = 1 - s),
            t.vars.repeatRefresh && t._initted && t.invalidate())),
        s !== a || K || r || t._zTime === ee || (!n && t._zTime))
      ) {
        if (!t._initted && mr(t, n, r, i, l)) return;
        for (
          d = t._zTime,
            t._zTime = n || (i ? ee : 0),
            i || (i = n && !d),
            t.ratio = s,
            t._from && (s = 1 - s),
            t._time = 0,
            t._tTime = l,
            u = t._pt;
          u;

        )
          u.r(s, u.d), (u = u._next);
        n < 0 && Hn(t, n, i, !0),
          t._onUpdate && !i && _e(t, "onUpdate"),
          l && t._repeat && !i && t.parent && _e(t, "onRepeat"),
          (n >= t._tDur || n < 0) &&
            t.ratio === s &&
            (s && Ve(t, 1),
            !i &&
              !K &&
              (_e(t, s ? "onComplete" : "onReverseComplete", !0),
              t._prom && t._prom()));
      } else t._zTime || (t._zTime = n);
    },
    Bl = function (t, n, i) {
      var r;
      if (i > n)
        for (r = t._first; r && r._start <= i; ) {
          if (r.data === "isPause" && r._start > n) return r;
          r = r._next;
        }
      else
        for (r = t._last; r && r._start >= i; ) {
          if (r.data === "isPause" && r._start < n) return r;
          r = r._prev;
        }
    },
    bt = function (t, n, i, r) {
      var a = t._repeat,
        s = U(n) || 0,
        o = t._tTime / t._tDur;
      return (
        o && !r && (t._time *= s / t._dur),
        (t._dur = s),
        (t._tDur = a ? (a < 0 ? 1e10 : U(s * (a + 1) + t._rDelay * a)) : s),
        o > 0 && !r && hn(t, (t._tTime = t._tDur * o)),
        t.parent && fn(t),
        i || et(t.parent, t),
        t
      );
    },
    gr = function (t) {
      return t instanceof re ? et(t) : bt(t, t._dur);
    },
    Yl = { _start: 0, endTime: Dt, totalDuration: Dt },
    Ee = function e(t, n, i) {
      var r = t.labels,
        a = t._recent || Yl,
        s = t.duration() >= Ae ? a.endTime(!1) : t._dur,
        o,
        l,
        u;
      return Z(n) && (isNaN(n) || n in r)
        ? ((l = n.charAt(0)),
          (u = n.substr(-1) === "%"),
          (o = n.indexOf("=")),
          l === "<" || l === ">"
            ? (o >= 0 && (n = n.replace(/=/, "")),
              (l === "<" ? a._start : a.endTime(a._repeat >= 0)) +
                (parseFloat(n.substr(1)) || 0) *
                  (u ? (o < 0 ? a : i).totalDuration() / 100 : 1))
            : o < 0
            ? (n in r || (r[n] = s), r[n])
            : ((l = parseFloat(n.charAt(o - 1) + n.substr(o + 1))),
              u && i && (l = (l / 100) * (te(i) ? i[0] : i).totalDuration()),
              o > 1 ? e(t, n.substr(0, o - 1), i) + l : s + l))
        : n == null
        ? s
        : +n;
    },
    Rt = function (t, n, i) {
      var r = Le(n[1]),
        a = (r ? 2 : 1) + (t < 2 ? 0 : 1),
        s = n[a],
        o,
        l;
      if ((r && (s.duration = n[1]), (s.parent = i), t)) {
        for (o = s, l = i; l && !("immediateRender" in o); )
          (o = l.vars.defaults || {}), (l = oe(l.vars.inherit) && l.parent);
        (s.immediateRender = oe(o.immediateRender)),
          t < 2 ? (s.runBackwards = 1) : (s.startAt = n[a - 1]);
      }
      return new Q(n[0], s, n[a + 1]);
    },
    Ge = function (t, n) {
      return t || t === 0 ? n(t) : n;
    },
    Nt = function (t, n, i) {
      return i < t ? t : i > n ? n : i;
    },
    ne = function (t, n) {
      return !Z(t) || !(n = kl.exec(t)) ? "" : n[1];
    },
    Vl = function (t, n, i) {
      return Ge(i, function (r) {
        return Nt(t, n, r);
      });
    },
    jn = [].slice,
    vr = function (t, n) {
      return (
        t &&
        Me(t) &&
        "length" in t &&
        ((!n && !t.length) || (t.length - 1 in t && Me(t[0]))) &&
        !t.nodeType &&
        t !== Pe
      );
    },
    Gl = function (t, n, i) {
      return (
        i === void 0 && (i = []),
        t.forEach(function (r) {
          var a;
          return (Z(r) && !n) || vr(r, 1)
            ? (a = i).push.apply(a, we(r))
            : i.push(r);
        }) || i
      );
    },
    we = function (t, n, i) {
      return V && !n && V.selector
        ? V.selector(t)
        : Z(t) && !i && (Rn || !xt())
        ? jn.call((n || Nn).querySelectorAll(t), 0)
        : te(t)
        ? Gl(t, i)
        : vr(t)
        ? jn.call(t, 0)
        : t
        ? [t]
        : [];
    },
    Wn = function (t) {
      return (
        (t = we(t)[0] || It("Invalid scope") || {}),
        function (n) {
          var i = t.current || t.nativeElement || t;
          return we(
            n,
            i.querySelectorAll
              ? i
              : i === t
              ? It("Invalid scope") || Nn.createElement("div")
              : t
          );
        }
      );
    },
    yr = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    br = function (t) {
      if (H(t)) return t;
      var n = Me(t) ? t : { each: t },
        i = tt(n.ease),
        r = n.from || 0,
        a = parseFloat(n.base) || 0,
        s = {},
        o = r > 0 && r < 1,
        l = isNaN(r) || o,
        u = n.axis,
        c = r,
        d = r;
      return (
        Z(r)
          ? (c = d = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !o && l && ((c = r[0]), (d = r[1])),
        function (f, p, g) {
          var h = (g || n).length,
            m = s[h],
            b,
            v,
            y,
            E,
            T,
            S,
            C,
            A,
            k;
          if (!m) {
            if (((k = n.grid === "auto" ? 0 : (n.grid || [1, Ae])[1]), !k)) {
              for (
                C = -1e8;
                C < (C = g[k++].getBoundingClientRect().left) && k < h;

              );
              k < h && k--;
            }
            for (
              m = s[h] = [],
                b = l ? Math.min(k, h) * c - 0.5 : r % k,
                v = k === Ae ? 0 : l ? (h * d) / k - 0.5 : (r / k) | 0,
                C = 0,
                A = Ae,
                S = 0;
              S < h;
              S++
            )
              (y = (S % k) - b),
                (E = v - ((S / k) | 0)),
                (m[S] = T =
                  u ? Math.abs(u === "y" ? E : y) : Qi(y * y + E * E)),
                T > C && (C = T),
                T < A && (A = T);
            r === "random" && yr(m),
              (m.max = C - A),
              (m.min = A),
              (m.v = h =
                (parseFloat(n.amount) ||
                  parseFloat(n.each) *
                    (k > h
                      ? h - 1
                      : u
                      ? u === "y"
                        ? h / k
                        : k
                      : Math.max(k, h / k)) ||
                  0) * (r === "edges" ? -1 : 1)),
              (m.b = h < 0 ? a - h : a),
              (m.u = ne(n.amount || n.each) || 0),
              (i = i && h < 0 ? $r(i) : i);
          }
          return (
            (h = (m[f] - m.min) / m.max || 0),
            U(m.b + (i ? i(h) : h) * m.v) + m.u
          );
        }
      );
    },
    Un = function (t) {
      var n = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (i) {
        var r = U(Math.round(parseFloat(i) / t) * t * n);
        return (r - (r % 1)) / n + (Le(i) ? 0 : ne(i));
      };
    },
    _r = function (t, n) {
      var i = te(t),
        r,
        a;
      return (
        !i &&
          Me(t) &&
          ((r = i = t.radius || Ae),
          t.values
            ? ((t = we(t.values)), (a = !Le(t[0])) && (r *= r))
            : (t = Un(t.increment))),
        Ge(
          n,
          i
            ? H(t)
              ? function (s) {
                  return (a = t(s)), Math.abs(a - s) <= r ? a : s;
                }
              : function (s) {
                  for (
                    var o = parseFloat(a ? s.x : s),
                      l = parseFloat(a ? s.y : 0),
                      u = Ae,
                      c = 0,
                      d = t.length,
                      f,
                      p;
                    d--;

                  )
                    a
                      ? ((f = t[d].x - o),
                        (p = t[d].y - l),
                        (f = f * f + p * p))
                      : (f = Math.abs(t[d] - o)),
                      f < u && ((u = f), (c = d));
                  return (
                    (c = !r || u <= r ? t[c] : s),
                    a || c === s || Le(s) ? c : c + ne(s)
                  );
                }
            : Un(t)
        )
      );
    },
    xr = function (t, n, i, r) {
      return Ge(te(t) ? !n : i === !0 ? !!(i = 0) : !r, function () {
        return te(t)
          ? t[~~(Math.random() * t.length)]
          : (i = i || 1e-5) &&
              (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (t - i / 2 + Math.random() * (n - t + i * 0.99)) / i
                ) *
                  i *
                  r
              ) / r;
      });
    },
    ql = function () {
      for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
        n[i] = arguments[i];
      return function (r) {
        return n.reduce(function (a, s) {
          return s(a);
        }, r);
      };
    },
    Hl = function (t, n) {
      return function (i) {
        return t(parseFloat(i)) + (n || ne(i));
      };
    },
    Xl = function (t, n, i) {
      return Er(t, n, 0, 1, i);
    },
    Tr = function (t, n, i) {
      return Ge(i, function (r) {
        return t[~~n(r)];
      });
    },
    jl = function e(t, n, i) {
      var r = n - t;
      return te(t)
        ? Tr(t, e(0, t.length), n)
        : Ge(i, function (a) {
            return ((r + ((a - t) % r)) % r) + t;
          });
    },
    Wl = function e(t, n, i) {
      var r = n - t,
        a = r * 2;
      return te(t)
        ? Tr(t, e(0, t.length - 1), n)
        : Ge(i, function (s) {
            return (s = (a + ((s - t) % a)) % a || 0), t + (s > r ? a - s : s);
          });
    },
    Ft = function (t) {
      for (var n = 0, i = "", r, a, s, o; ~(r = t.indexOf("random(", n)); )
        (s = t.indexOf(")", r)),
          (o = t.charAt(r + 7) === "["),
          (a = t.substr(r + 7, s - r - 7).match(o ? er : Dn)),
          (i +=
            t.substr(n, r - n) +
            xr(o ? a : +a[0], o ? 0 : +a[1], +a[2] || 1e-5)),
          (n = s + 1);
      return i + t.substr(n, t.length - n);
    },
    Er = function (t, n, i, r, a) {
      var s = n - t,
        o = r - i;
      return Ge(a, function (l) {
        return i + (((l - t) / s) * o || 0);
      });
    },
    Ul = function e(t, n, i, r) {
      var a = isNaN(t + n)
        ? 0
        : function (p) {
            return (1 - p) * t + p * n;
          };
      if (!a) {
        var s = Z(t),
          o = {},
          l,
          u,
          c,
          d,
          f;
        if ((i === !0 && (r = 1) && (i = null), s))
          (t = { p: t }), (n = { p: n });
        else if (te(t) && !te(n)) {
          for (c = [], d = t.length, f = d - 2, u = 1; u < d; u++)
            c.push(e(t[u - 1], t[u]));
          d--,
            (a = function (g) {
              g *= d;
              var h = Math.min(f, ~~g);
              return c[h](g - h);
            }),
            (i = n);
        } else r || (t = vt(te(t) ? [] : {}, t));
        if (!c) {
          for (l in n) Jn.call(o, t, l, "get", n[l]);
          a = function (g) {
            return ri(g, o) || (s ? t.p : t);
          };
        }
      }
      return Ge(i, a);
    },
    wr = function (t, n, i) {
      var r = t.labels,
        a = Ae,
        s,
        o,
        l;
      for (s in r)
        (o = r[s] - n),
          o < 0 == !!i && o && a > (o = Math.abs(o)) && ((l = s), (a = o));
      return l;
    },
    _e = function (t, n, i) {
      var r = t.vars,
        a = r[n],
        s = V,
        o = t._ctx,
        l,
        u,
        c;
      if (a)
        return (
          (l = r[n + "Params"]),
          (u = r.callbackScope || t),
          i && Ye.length && ln(),
          o && (V = o),
          (c = l ? a.apply(u, l) : a.call(u)),
          (V = s),
          c
        );
    },
    Bt = function (t) {
      return (
        Ve(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!K),
        t.progress() < 1 && _e(t, "onInterrupt"),
        t
      );
    },
    _t,
    Sr = [],
    Cr = function (t) {
      if (t)
        if (((t = (!t.name && t.default) || t), In() || t.headless)) {
          var n = t.name,
            i = H(t),
            r =
              n && !i && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            a = {
              init: Dt,
              render: ri,
              add: Jn,
              kill: du,
              modifier: cu,
              rawVars: 0,
            },
            s = {
              targetTest: 0,
              get: 0,
              getSetter: ii,
              aliases: {},
              register: 0,
            };
          if ((xt(), t !== r)) {
            if (ye[n]) return;
            be(r, be(un(t, a), s)),
              vt(r.prototype, vt(a, un(t, s))),
              (ye[(r.prop = n)] = r),
              t.targetTest && (on.push(r), (Bn[n] = 1)),
              (n =
                (n === "css"
                  ? "CSS"
                  : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin");
          }
          ir(n, r), t.register && t.register(ce, r, ue);
        } else Sr.push(t);
    },
    B = 255,
    Yt = {
      aqua: [0, B, B],
      lime: [0, B, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, B],
      navy: [0, 0, 128],
      white: [B, B, B],
      olive: [128, 128, 0],
      yellow: [B, B, 0],
      orange: [B, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [B, 0, 0],
      pink: [B, 192, 203],
      cyan: [0, B, B],
      transparent: [B, B, B, 0],
    },
    Qn = function (t, n, i) {
      return (
        (t += t < 0 ? 1 : t > 1 ? -1 : 0),
        ((t * 6 < 1
          ? n + (i - n) * t * 6
          : t < 0.5
          ? i
          : t * 3 < 2
          ? n + (i - n) * (2 / 3 - t) * 6
          : n) *
          B +
          0.5) |
          0
      );
    },
    Ar = function (t, n, i) {
      var r = t ? (Le(t) ? [t >> 16, (t >> 8) & B, t & B] : 0) : Yt.black,
        a,
        s,
        o,
        l,
        u,
        c,
        d,
        f,
        p,
        g;
      if (!r) {
        if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Yt[t]))
          r = Yt[t];
        else if (t.charAt(0) === "#") {
          if (
            (t.length < 6 &&
              ((a = t.charAt(1)),
              (s = t.charAt(2)),
              (o = t.charAt(3)),
              (t =
                "#" +
                a +
                a +
                s +
                s +
                o +
                o +
                (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
            t.length === 9)
          )
            return (
              (r = parseInt(t.substr(1, 6), 16)),
              [r >> 16, (r >> 8) & B, r & B, parseInt(t.substr(7), 16) / 255]
            );
          (t = parseInt(t.substr(1), 16)), (r = [t >> 16, (t >> 8) & B, t & B]);
        } else if (t.substr(0, 3) === "hsl") {
          if (((r = g = t.match(Dn)), !n))
            (l = (+r[0] % 360) / 360),
              (u = +r[1] / 100),
              (c = +r[2] / 100),
              (s = c <= 0.5 ? c * (u + 1) : c + u - c * u),
              (a = c * 2 - s),
              r.length > 3 && (r[3] *= 1),
              (r[0] = Qn(l + 1 / 3, a, s)),
              (r[1] = Qn(l, a, s)),
              (r[2] = Qn(l - 1 / 3, a, s));
          else if (~t.indexOf("="))
            return (r = t.match(Ki)), i && r.length < 4 && (r[3] = 1), r;
        } else r = t.match(Dn) || Yt.transparent;
        r = r.map(Number);
      }
      return (
        n &&
          !g &&
          ((a = r[0] / B),
          (s = r[1] / B),
          (o = r[2] / B),
          (d = Math.max(a, s, o)),
          (f = Math.min(a, s, o)),
          (c = (d + f) / 2),
          d === f
            ? (l = u = 0)
            : ((p = d - f),
              (u = c > 0.5 ? p / (2 - d - f) : p / (d + f)),
              (l =
                d === a
                  ? (s - o) / p + (s < o ? 6 : 0)
                  : d === s
                  ? (o - a) / p + 2
                  : (a - s) / p + 4),
              (l *= 60)),
          (r[0] = ~~(l + 0.5)),
          (r[1] = ~~(u * 100 + 0.5)),
          (r[2] = ~~(c * 100 + 0.5))),
        i && r.length < 4 && (r[3] = 1),
        r
      );
    },
    Mr = function (t) {
      var n = [],
        i = [],
        r = -1;
      return (
        t.split(qe).forEach(function (a) {
          var s = a.match(mt) || [];
          n.push.apply(n, s), i.push((r += s.length + 1));
        }),
        (n.c = i),
        n
      );
    },
    Pr = function (t, n, i) {
      var r = "",
        a = (t + r).match(qe),
        s = n ? "hsla(" : "rgba(",
        o = 0,
        l,
        u,
        c,
        d;
      if (!a) return t;
      if (
        ((a = a.map(function (f) {
          return (
            (f = Ar(f, n, 1)) &&
            s +
              (n
                ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3]
                : f.join(",")) +
              ")"
          );
        })),
        i && ((c = Mr(t)), (l = i.c), l.join(r) !== c.c.join(r)))
      )
        for (u = t.replace(qe, "1").split(mt), d = u.length - 1; o < d; o++)
          r +=
            u[o] +
            (~l.indexOf(o)
              ? a.shift() || s + "0,0,0,0)"
              : (c.length ? c : a.length ? a : i).shift());
      if (!u)
        for (u = t.split(qe), d = u.length - 1; o < d; o++) r += u[o] + a[o];
      return r + u[d];
    },
    qe = (function () {
      var e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        t;
      for (t in Yt) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Ql = /hsl[a]?\(/,
    kr = function (t) {
      var n = t.join(" "),
        i;
      if (((qe.lastIndex = 0), qe.test(n)))
        return (
          (i = Ql.test(n)),
          (t[1] = Pr(t[1], i)),
          (t[0] = Pr(t[0], i, Mr(t[1]))),
          !0
        );
    },
    Vt,
    xe = (function () {
      var e = Date.now,
        t = 500,
        n = 33,
        i = e(),
        r = i,
        a = 1e3 / 240,
        s = a,
        o = [],
        l,
        u,
        c,
        d,
        f,
        p,
        g = function h(m) {
          var b = e() - r,
            v = m === !0,
            y,
            E,
            T,
            S;
          if (
            ((b > t || b < 0) && (i += b - n),
            (r += b),
            (T = r - i),
            (y = T - s),
            (y > 0 || v) &&
              ((S = ++d.frame),
              (f = T - d.time * 1e3),
              (d.time = T = T / 1e3),
              (s += y + (y >= a ? 4 : a - y)),
              (E = 1)),
            v || (l = u(h)),
            E)
          )
            for (p = 0; p < o.length; p++) o[p](T, f, S, m);
        };
      return (
        (d = {
          time: 0,
          frame: 0,
          tick: function () {
            g(!0);
          },
          deltaRatio: function (m) {
            return f / (1e3 / (m || 60));
          },
          wake: function () {
            tr &&
              (!Rn &&
                In() &&
                ((Pe = Rn = window),
                (Nn = Pe.document || {}),
                (ve.gsap = ce),
                (Pe.gsapVersions || (Pe.gsapVersions = [])).push(ce.version),
                nr(an || Pe.GreenSockGlobals || (!Pe.gsap && Pe) || {}),
                Sr.forEach(Cr)),
              (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
              l && d.sleep(),
              (u =
                c ||
                function (m) {
                  return setTimeout(m, (s - d.time * 1e3 + 1) | 0);
                }),
              (Vt = 1),
              g(2));
          },
          sleep: function () {
            (c ? cancelAnimationFrame : clearTimeout)(l), (Vt = 0), (u = Dt);
          },
          lagSmoothing: function (m, b) {
            (t = m || 1 / 0), (n = Math.min(b || 33, t));
          },
          fps: function (m) {
            (a = 1e3 / (m || 240)), (s = d.time * 1e3 + a);
          },
          add: function (m, b, v) {
            var y = b
              ? function (E, T, S, C) {
                  m(E, T, S, C), d.remove(y);
                }
              : m;
            return d.remove(m), o[v ? "unshift" : "push"](y), xt(), y;
          },
          remove: function (m, b) {
            ~(b = o.indexOf(m)) && o.splice(b, 1) && p >= b && p--;
          },
          _listeners: o,
        }),
        d
      );
    })(),
    xt = function () {
      return !Vt && xe.wake();
    },
    N = {},
    Zl = /^[\d.\-M][\d.\-,\s]/,
    Kl = /["']/g,
    Jl = function (t) {
      for (
        var n = {},
          i = t.substr(1, t.length - 3).split(":"),
          r = i[0],
          a = 1,
          s = i.length,
          o,
          l,
          u;
        a < s;
        a++
      )
        (l = i[a]),
          (o = a !== s - 1 ? l.lastIndexOf(",") : l.length),
          (u = l.substr(0, o)),
          (n[r] = isNaN(u) ? u.replace(Kl, "").trim() : +u),
          (r = l.substr(o + 1).trim());
      return n;
    },
    eu = function (t) {
      var n = t.indexOf("(") + 1,
        i = t.indexOf(")"),
        r = t.indexOf("(", n);
      return t.substring(n, ~r && r < i ? t.indexOf(")", i + 1) : i);
    },
    tu = function (t) {
      var n = (t + "").split("("),
        i = N[n[0]];
      return i && n.length > 1 && i.config
        ? i.config.apply(
            null,
            ~t.indexOf("{") ? [Jl(n[1])] : eu(t).split(",").map(lr)
          )
        : N._CE && Zl.test(t)
        ? N._CE("", t)
        : i;
    },
    $r = function (t) {
      return function (n) {
        return 1 - t(1 - n);
      };
    },
    Or = function e(t, n) {
      for (var i = t._first, r; i; )
        i instanceof re
          ? e(i, n)
          : i.vars.yoyoEase &&
            (!i._yoyo || !i._repeat) &&
            i._yoyo !== n &&
            (i.timeline
              ? e(i.timeline, n)
              : ((r = i._ease),
                (i._ease = i._yEase),
                (i._yEase = r),
                (i._yoyo = n))),
          (i = i._next);
    },
    tt = function (t, n) {
      return (t && (H(t) ? t : N[t] || tu(t))) || n;
    },
    nt = function (t, n, i, r) {
      i === void 0 &&
        (i = function (l) {
          return 1 - n(1 - l);
        }),
        r === void 0 &&
          (r = function (l) {
            return l < 0.5 ? n(l * 2) / 2 : 1 - n((1 - l) * 2) / 2;
          });
      var a = { easeIn: n, easeOut: i, easeInOut: r },
        s;
      return (
        le(t, function (o) {
          (N[o] = ve[o] = a), (N[(s = o.toLowerCase())] = i);
          for (var l in a)
            N[
              s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = N[o + "." + l] = a[l];
        }),
        a
      );
    },
    zr = function (t) {
      return function (n) {
        return n < 0.5 ? (1 - t(1 - n * 2)) / 2 : 0.5 + t((n - 0.5) * 2) / 2;
      };
    },
    Zn = function e(t, n, i) {
      var r = n >= 1 ? n : 1,
        a = (i || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
        s = (a / On) * (Math.asin(1 / r) || 0),
        o = function (c) {
          return c === 1 ? 1 : r * Math.pow(2, -10 * c) * Pl((c - s) * a) + 1;
        },
        l =
          t === "out"
            ? o
            : t === "in"
            ? function (u) {
                return 1 - o(1 - u);
              }
            : zr(o);
      return (
        (a = On / a),
        (l.config = function (u, c) {
          return e(t, u, c);
        }),
        l
      );
    },
    Kn = function e(t, n) {
      n === void 0 && (n = 1.70158);
      var i = function (s) {
          return s ? --s * s * ((n + 1) * s + n) + 1 : 0;
        },
        r =
          t === "out"
            ? i
            : t === "in"
            ? function (a) {
                return 1 - i(1 - a);
              }
            : zr(i);
      return (
        (r.config = function (a) {
          return e(t, a);
        }),
        r
      );
    };
  le("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
    var n = t < 5 ? t + 1 : t;
    nt(
      e + ",Power" + (n - 1),
      t
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
    (N.Linear.easeNone = N.none = N.Linear.easeIn),
    nt("Elastic", Zn("in"), Zn("out"), Zn()),
    (function (e, t) {
      var n = 1 / t,
        i = 2 * n,
        r = 2.5 * n,
        a = function (o) {
          return o < n
            ? e * o * o
            : o < i
            ? e * Math.pow(o - 1.5 / t, 2) + 0.75
            : o < r
            ? e * (o -= 2.25 / t) * o + 0.9375
            : e * Math.pow(o - 2.625 / t, 2) + 0.984375;
        };
      nt(
        "Bounce",
        function (s) {
          return 1 - a(1 - s);
        },
        a
      );
    })(7.5625, 2.75),
    nt("Expo", function (e) {
      return Math.pow(2, 10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
    }),
    nt("Circ", function (e) {
      return -(Qi(1 - e * e) - 1);
    }),
    nt("Sine", function (e) {
      return e === 1 ? 1 : -Ml(e * Cl) + 1;
    }),
    nt("Back", Kn("in"), Kn("out"), Kn()),
    (N.SteppedEase =
      N.steps =
      ve.SteppedEase =
        {
          config: function (t, n) {
            t === void 0 && (t = 1);
            var i = 1 / t,
              r = t + (n ? 0 : 1),
              a = n ? 1 : 0,
              s = 1 - ee;
            return function (o) {
              return (((r * Nt(0, s, o)) | 0) + a) * i;
            };
          },
        }),
    (pt.ease = N["quad.out"]),
    le(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (e) {
        return (Gn += e + "," + e + "Params,");
      }
    );
  var Ir = function (t, n) {
      (this.id = Al++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = n),
        (this.get = n ? n.get : sr),
        (this.set = n ? n.getSetter : ii);
    },
    Gt = (function () {
      function e(n) {
        (this.vars = n),
          (this._delay = +n.delay || 0),
          (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
            ((this._rDelay = n.repeatDelay || 0),
            (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
          (this._ts = 1),
          bt(this, +n.duration, 1, 1),
          (this.data = n.data),
          V && ((this._ctx = V), V.data.push(this)),
          Vt || xe.wake();
      }
      var t = e.prototype;
      return (
        (t.delay = function (i) {
          return i || i === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + i - this._delay),
              (this._delay = i),
              this)
            : this._delay;
        }),
        (t.duration = function (i) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
              )
            : this.totalDuration() && this._dur;
        }),
        (t.totalDuration = function (i) {
          return arguments.length
            ? ((this._dirty = 0),
              bt(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (t.totalTime = function (i, r) {
          if ((xt(), !arguments.length)) return this._tTime;
          var a = this._dp;
          if (a && a.smoothChildTiming && this._ts) {
            for (
              hn(this, i), !a._dp || a.parent || hr(a, this);
              a && a.parent;

            )
              a.parent._time !==
                a._start +
                  (a._ts >= 0
                    ? a._tTime / a._ts
                    : (a.totalDuration() - a._tTime) / -a._ts) &&
                a.totalTime(a._tTime, !0),
                (a = a.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && i < this._tDur) ||
                (this._ts < 0 && i > 0) ||
                (!this._tDur && !i)) &&
              ke(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== i ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === ee) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), or(this, i, r)),
            this
          );
        }),
        (t.time = function (i, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + fr(this)) %
                  (this._dur + this._rDelay) || (i ? this._dur : 0),
                r
              )
            : this._time;
        }),
        (t.totalProgress = function (i, r) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * i, r)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
            ? 1
            : 0;
        }),
        (t.progress = function (i, r) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                  fr(this),
                r
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (t.iteration = function (i, r) {
          var a = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (i - 1) * a, r)
            : this._repeat
            ? yt(this._tTime, a) + 1
            : 1;
        }),
        (t.timeScale = function (i, r) {
          if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
          if (this._rts === i) return this;
          var a =
            this.parent && this._ts ? dn(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -1e-8 ? 0 : this._rts),
            this.totalTime(Nt(-Math.abs(this._delay), this._tDur, a), r !== !1),
            fn(this),
            Ll(this)
          );
        }),
        (t.paused = function (i) {
          return arguments.length
            ? (this._ps !== i &&
                ((this._ps = i),
                i
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (xt(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== ee &&
                        (this._tTime -= ee)
                    ))),
              this)
            : this._ps;
        }),
        (t.startTime = function (i) {
          if (arguments.length) {
            this._start = i;
            var r = this.parent || this._dp;
            return (
              r && (r._sort || !this.parent) && ke(r, this, i - this._delay),
              this
            );
          }
          return this._start;
        }),
        (t.endTime = function (i) {
          return (
            this._start +
            (oe(i) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (t.rawTime = function (i) {
          var r = this.parent || this._dp;
          return r
            ? i &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? dn(r.rawTime(i), this)
              : this._tTime
            : this._tTime;
        }),
        (t.revert = function (i) {
          i === void 0 && (i = Ol);
          var r = K;
          return (
            (K = i),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(i),
              this.totalTime(-0.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
            (K = r),
            this
          );
        }),
        (t.globalTime = function (i) {
          for (var r = this, a = arguments.length ? i : r.rawTime(); r; )
            (a = r._start + a / (Math.abs(r._ts) || 1)), (r = r._dp);
          return !this.parent && this._sat ? this._sat.globalTime(i) : a;
        }),
        (t.repeat = function (i) {
          return arguments.length
            ? ((this._repeat = i === 1 / 0 ? -2 : i), gr(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (t.repeatDelay = function (i) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = i), gr(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (t.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (t.seek = function (i, r) {
          return this.totalTime(Ee(this, i), oe(r));
        }),
        (t.restart = function (i, r) {
          return (
            this.play().totalTime(i ? -this._delay : 0, oe(r)),
            this._dur || (this._zTime = -1e-8),
            this
          );
        }),
        (t.play = function (i, r) {
          return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
        }),
        (t.reverse = function (i, r) {
          return (
            i != null && this.seek(i || this.totalDuration(), r),
            this.reversed(!0).paused(!1)
          );
        }),
        (t.pause = function (i, r) {
          return i != null && this.seek(i, r), this.paused(!0);
        }),
        (t.resume = function () {
          return this.paused(!1);
        }),
        (t.reversed = function (i) {
          return arguments.length
            ? (!!i !== this.reversed() &&
                this.timeScale(-this._rts || (i ? -1e-8 : 0)),
              this)
            : this._rts < 0;
        }),
        (t.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
        }),
        (t.isActive = function () {
          var i = this.parent || this._dp,
            r = this._start,
            a;
          return !!(
            !i ||
            (this._ts &&
              this._initted &&
              i.isActive() &&
              (a = i.rawTime(!0)) >= r &&
              a < this.endTime(!0) - ee)
          );
        }),
        (t.eventCallback = function (i, r, a) {
          var s = this.vars;
          return arguments.length > 1
            ? (r
                ? ((s[i] = r),
                  a && (s[i + "Params"] = a),
                  i === "onUpdate" && (this._onUpdate = r))
                : delete s[i],
              this)
            : s[i];
        }),
        (t.then = function (i) {
          var r = this;
          return new Promise(function (a) {
            var s = H(i) ? i : ur,
              o = function () {
                var u = r.then;
                (r.then = null),
                  H(s) && (s = s(r)) && (s.then || s === r) && (r.then = u),
                  a(s),
                  (r.then = u);
              };
            (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
            (!r._tTime && r._ts < 0)
              ? o()
              : (r._prom = o);
          });
        }),
        (t.kill = function () {
          Bt(this);
        }),
        e
      );
    })();
  be(Gt.prototype, {
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
  var re = (function (e) {
    Ui(t, e);
    function t(i, r) {
      var a;
      return (
        i === void 0 && (i = {}),
        (a = e.call(this, i) || this),
        (a.labels = {}),
        (a.smoothChildTiming = !!i.smoothChildTiming),
        (a.autoRemoveChildren = !!i.autoRemoveChildren),
        (a._sort = oe(i.sortChildren)),
        G && ke(i.parent || G, De(a), r),
        i.reversed && a.reverse(),
        i.paused && a.paused(!0),
        i.scrollTrigger && pr(De(a), i.scrollTrigger),
        a
      );
    }
    var n = t.prototype;
    return (
      (n.to = function (r, a, s) {
        return Rt(0, arguments, this), this;
      }),
      (n.from = function (r, a, s) {
        return Rt(1, arguments, this), this;
      }),
      (n.fromTo = function (r, a, s, o) {
        return Rt(2, arguments, this), this;
      }),
      (n.set = function (r, a, s) {
        return (
          (a.duration = 0),
          (a.parent = this),
          Lt(a).repeatDelay || (a.repeat = 0),
          (a.immediateRender = !!a.immediateRender),
          new Q(r, a, Ee(this, s), 1),
          this
        );
      }),
      (n.call = function (r, a, s) {
        return ke(this, Q.delayedCall(0, r, a), s);
      }),
      (n.staggerTo = function (r, a, s, o, l, u, c) {
        return (
          (s.duration = a),
          (s.stagger = s.stagger || o),
          (s.onComplete = u),
          (s.onCompleteParams = c),
          (s.parent = this),
          new Q(r, s, Ee(this, l)),
          this
        );
      }),
      (n.staggerFrom = function (r, a, s, o, l, u, c) {
        return (
          (s.runBackwards = 1),
          (Lt(s).immediateRender = oe(s.immediateRender)),
          this.staggerTo(r, a, s, o, l, u, c)
        );
      }),
      (n.staggerFromTo = function (r, a, s, o, l, u, c, d) {
        return (
          (o.startAt = s),
          (Lt(o).immediateRender = oe(o.immediateRender)),
          this.staggerTo(r, a, o, l, u, c, d)
        );
      }),
      (n.render = function (r, a, s) {
        var o = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          u = this._dur,
          c = r <= 0 ? 0 : U(r),
          d = this._zTime < 0 != r < 0 && (this._initted || !u),
          f,
          p,
          g,
          h,
          m,
          b,
          v,
          y,
          E,
          T,
          S,
          C;
        if (
          (this !== G && c > l && r >= 0 && (c = l),
          c !== this._tTime || s || d)
        ) {
          if (
            (o !== this._time &&
              u &&
              ((c += this._time - o), (r += this._time - o)),
            (f = c),
            (E = this._start),
            (y = this._ts),
            (b = !y),
            d && (u || (o = this._zTime), (r || !a) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((S = this._yoyo),
              (m = u + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(m * 100 + r, a, s);
            if (
              ((f = U(c % m)),
              c === l
                ? ((h = this._repeat), (f = u))
                : ((T = U(c / m)),
                  (h = ~~T),
                  h && h === T && ((f = u), h--),
                  f > u && (f = u)),
              (T = yt(this._tTime, m)),
              !o &&
                this._tTime &&
                T !== h &&
                this._tTime - T * m - this._dur <= 0 &&
                (T = h),
              S && h & 1 && ((f = u - f), (C = 1)),
              h !== T && !this._lock)
            ) {
              var A = S && T & 1,
                k = A === (S && h & 1);
              if (
                (h < T && (A = !A),
                (o = A ? 0 : c % u ? u : c),
                (this._lock = 1),
                (this.render(o || (C ? 0 : U(h * m)), a, !u)._lock = 0),
                (this._tTime = c),
                !a && this.parent && _e(this, "onRepeat"),
                this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1),
                (o && o !== this._time) ||
                  b !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((u = this._dur),
                (l = this._tDur),
                k &&
                  ((this._lock = 2),
                  (o = A ? u : -1e-4),
                  this.render(o, !0),
                  this.vars.repeatRefresh && !C && this.invalidate()),
                (this._lock = 0),
                !this._ts && !b)
              )
                return this;
              Or(this, C);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((v = Bl(this, U(o), U(f))), v && (c -= f - (f = v._start))),
            (this._tTime = c),
            (this._time = f),
            (this._act = !y),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (o = 0)),
            !o && f && !a && !h && (_e(this, "onStart"), this._tTime !== c))
          )
            return this;
          if (f >= o && r >= 0)
            for (p = this._first; p; ) {
              if (
                ((g = p._next), (p._act || f >= p._start) && p._ts && v !== p)
              ) {
                if (p.parent !== this) return this.render(r, a, s);
                if (
                  (p.render(
                    p._ts > 0
                      ? (f - p._start) * p._ts
                      : (p._dirty ? p.totalDuration() : p._tDur) +
                          (f - p._start) * p._ts,
                    a,
                    s
                  ),
                  f !== this._time || (!this._ts && !b))
                ) {
                  (v = 0), g && (c += this._zTime = -1e-8);
                  break;
                }
              }
              p = g;
            }
          else {
            p = this._last;
            for (var P = r < 0 ? r : f; p; ) {
              if (
                ((g = p._prev), (p._act || P <= p._end) && p._ts && v !== p)
              ) {
                if (p.parent !== this) return this.render(r, a, s);
                if (
                  (p.render(
                    p._ts > 0
                      ? (P - p._start) * p._ts
                      : (p._dirty ? p.totalDuration() : p._tDur) +
                          (P - p._start) * p._ts,
                    a,
                    s || (K && (p._initted || p._startAt))
                  ),
                  f !== this._time || (!this._ts && !b))
                ) {
                  (v = 0), g && (c += this._zTime = P ? -1e-8 : ee);
                  break;
                }
              }
              p = g;
            }
          }
          if (
            v &&
            !a &&
            (this.pause(),
            (v.render(f >= o ? 0 : -1e-8)._zTime = f >= o ? 1 : -1),
            this._ts)
          )
            return (this._start = E), fn(this), this.render(r, a, s);
          this._onUpdate && !a && _e(this, "onUpdate", !0),
            ((c === l && this._tTime >= this.totalDuration()) || (!c && o)) &&
              (E === this._start || Math.abs(y) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !u) &&
                  ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                  Ve(this, 1),
                !a &&
                  !(r < 0 && !o) &&
                  (c || o || !l) &&
                  (_e(
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
      (n.add = function (r, a) {
        var s = this;
        if ((Le(a) || (a = Ee(this, a, r)), !(r instanceof Gt))) {
          if (te(r))
            return (
              r.forEach(function (o) {
                return s.add(o, a);
              }),
              this
            );
          if (Z(r)) return this.addLabel(r, a);
          if (H(r)) r = Q.delayedCall(0, r);
          else return this;
        }
        return this !== r ? ke(this, r, a) : this;
      }),
      (n.getChildren = function (r, a, s, o) {
        r === void 0 && (r = !0),
          a === void 0 && (a = !0),
          s === void 0 && (s = !0),
          o === void 0 && (o = -1e8);
        for (var l = [], u = this._first; u; )
          u._start >= o &&
            (u instanceof Q
              ? a && l.push(u)
              : (s && l.push(u),
                r && l.push.apply(l, u.getChildren(!0, a, s)))),
            (u = u._next);
        return l;
      }),
      (n.getById = function (r) {
        for (var a = this.getChildren(1, 1, 1), s = a.length; s--; )
          if (a[s].vars.id === r) return a[s];
      }),
      (n.remove = function (r) {
        return Z(r)
          ? this.removeLabel(r)
          : H(r)
          ? this.killTweensOf(r)
          : (r.parent === this && cn(this, r),
            r === this._recent && (this._recent = this._last),
            et(this));
      }),
      (n.totalTime = function (r, a) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = U(
                xe.time -
                  (this._ts > 0
                    ? r / this._ts
                    : (this.totalDuration() - r) / -this._ts)
              )),
            e.prototype.totalTime.call(this, r, a),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (n.addLabel = function (r, a) {
        return (this.labels[r] = Ee(this, a)), this;
      }),
      (n.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (n.addPause = function (r, a, s) {
        var o = Q.delayedCall(0, a || Dt, s);
        return (
          (o.data = "isPause"), (this._hasPause = 1), ke(this, o, Ee(this, r))
        );
      }),
      (n.removePause = function (r) {
        var a = this._first;
        for (r = Ee(this, r); a; )
          a._start === r && a.data === "isPause" && Ve(a), (a = a._next);
      }),
      (n.killTweensOf = function (r, a, s) {
        for (var o = this.getTweensOf(r, s), l = o.length; l--; )
          He !== o[l] && o[l].kill(r, a);
        return this;
      }),
      (n.getTweensOf = function (r, a) {
        for (var s = [], o = we(r), l = this._first, u = Le(a), c; l; )
          l instanceof Q
            ? zl(l._targets, o) &&
              (u
                ? (!He || (l._initted && l._ts)) &&
                  l.globalTime(0) <= a &&
                  l.globalTime(l.totalDuration()) > a
                : !a || l.isActive()) &&
              s.push(l)
            : (c = l.getTweensOf(o, a)).length && s.push.apply(s, c),
            (l = l._next);
        return s;
      }),
      (n.tweenTo = function (r, a) {
        a = a || {};
        var s = this,
          o = Ee(s, r),
          l = a,
          u = l.startAt,
          c = l.onStart,
          d = l.onStartParams,
          f = l.immediateRender,
          p,
          g = Q.to(
            s,
            be(
              {
                ease: a.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration:
                  a.duration ||
                  Math.abs(
                    (o - (u && "time" in u ? u.time : s._time)) / s.timeScale()
                  ) ||
                  ee,
                onStart: function () {
                  if ((s.pause(), !p)) {
                    var m =
                      a.duration ||
                      Math.abs(
                        (o - (u && "time" in u ? u.time : s._time)) /
                          s.timeScale()
                      );
                    g._dur !== m && bt(g, m, 0, 1).render(g._time, !0, !0),
                      (p = 1);
                  }
                  c && c.apply(g, d || []);
                },
              },
              a
            )
          );
        return f ? g.render(0) : g;
      }),
      (n.tweenFromTo = function (r, a, s) {
        return this.tweenTo(a, be({ startAt: { time: Ee(this, r) } }, s));
      }),
      (n.recent = function () {
        return this._recent;
      }),
      (n.nextLabel = function (r) {
        return r === void 0 && (r = this._time), wr(this, Ee(this, r));
      }),
      (n.previousLabel = function (r) {
        return r === void 0 && (r = this._time), wr(this, Ee(this, r), 1);
      }),
      (n.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + ee);
      }),
      (n.shiftChildren = function (r, a, s) {
        s === void 0 && (s = 0);
        for (var o = this._first, l = this.labels, u; o; )
          o._start >= s && ((o._start += r), (o._end += r)), (o = o._next);
        if (a) for (u in l) l[u] >= s && (l[u] += r);
        return et(this);
      }),
      (n.invalidate = function (r) {
        var a = this._first;
        for (this._lock = 0; a; ) a.invalidate(r), (a = a._next);
        return e.prototype.invalidate.call(this, r);
      }),
      (n.clear = function (r) {
        r === void 0 && (r = !0);
        for (var a = this._first, s; a; )
          (s = a._next), this.remove(a), (a = s);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          r && (this.labels = {}),
          et(this)
        );
      }),
      (n.totalDuration = function (r) {
        var a = 0,
          s = this,
          o = s._last,
          l = Ae,
          u,
          c,
          d;
        if (arguments.length)
          return s.timeScale(
            (s._repeat < 0 ? s.duration() : s.totalDuration()) /
              (s.reversed() ? -r : r)
          );
        if (s._dirty) {
          for (d = s.parent; o; )
            (u = o._prev),
              o._dirty && o.totalDuration(),
              (c = o._start),
              c > l && s._sort && o._ts && !s._lock
                ? ((s._lock = 1), (ke(s, o, c - o._delay, 1)._lock = 0))
                : (l = c),
              c < 0 &&
                o._ts &&
                ((a -= c),
                ((!d && !s._dp) || (d && d.smoothChildTiming)) &&
                  ((s._start += c / s._ts), (s._time -= c), (s._tTime -= c)),
                s.shiftChildren(-c, !1, -1 / 0),
                (l = 0)),
              o._end > a && o._ts && (a = o._end),
              (o = u);
          bt(s, s === G && s._time > a ? s._time : a, 1, 1), (s._dirty = 0);
        }
        return s._tDur;
      }),
      (t.updateRoot = function (r) {
        if ((G._ts && (or(G, dn(r, G)), (rr = xe.frame)), xe.frame >= ar)) {
          ar += ge.autoSleep || 120;
          var a = G._first;
          if ((!a || !a._ts) && ge.autoSleep && xe._listeners.length < 2) {
            for (; a && !a._ts; ) a = a._next;
            a || xe.sleep();
          }
        }
      }),
      t
    );
  })(Gt);
  be(re.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var nu = function (t, n, i, r, a, s, o) {
      var l = new ue(this._pt, t, n, 0, 1, Br, null, a),
        u = 0,
        c = 0,
        d,
        f,
        p,
        g,
        h,
        m,
        b,
        v;
      for (
        l.b = i,
          l.e = r,
          i += "",
          r += "",
          (b = ~r.indexOf("random(")) && (r = Ft(r)),
          s && ((v = [i, r]), s(v, t, n), (i = v[0]), (r = v[1])),
          f = i.match(Ln) || [];
        (d = Ln.exec(r));

      )
        (g = d[0]),
          (h = r.substring(u, d.index)),
          p ? (p = (p + 1) % 5) : h.substr(-5) === "rgba(" && (p = 1),
          g !== f[c++] &&
            ((m = parseFloat(f[c - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: h || c === 1 ? h : ",",
              s: m,
              c: g.charAt(1) === "=" ? gt(m, g) - m : parseFloat(g) - m,
              m: p && p < 4 ? Math.round : 0,
            }),
            (u = Ln.lastIndex));
      return (
        (l.c = u < r.length ? r.substring(u, r.length) : ""),
        (l.fp = o),
        (Ji.test(r) || b) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    Jn = function (t, n, i, r, a, s, o, l, u, c) {
      H(r) && (r = r(a || 0, t, s));
      var d = t[n],
        f =
          i !== "get"
            ? i
            : H(d)
            ? u
              ? t[
                  n.indexOf("set") || !H(t["get" + n.substr(3)])
                    ? n
                    : "get" + n.substr(3)
                ](u)
              : t[n]()
            : d,
        p = H(d) ? (u ? ou : Nr) : ni,
        g;
      if (
        (Z(r) &&
          (~r.indexOf("random(") && (r = Ft(r)),
          r.charAt(1) === "=" &&
            ((g = gt(f, r) + (ne(f) || 0)), (g || g === 0) && (r = g))),
        !c || f !== r || ei)
      )
        return !isNaN(f * r) && r !== ""
          ? ((g = new ue(
              this._pt,
              t,
              n,
              +f || 0,
              r - (f || 0),
              typeof d == "boolean" ? uu : Fr,
              0,
              p
            )),
            u && (g.fp = u),
            o && g.modifier(o, this, t),
            (this._pt = g))
          : (!d && !(n in t) && Fn(n, r),
            nu.call(this, t, n, f, r, p, l || ge.stringFilter, u));
    },
    iu = function (t, n, i, r, a) {
      if (
        (H(t) && (t = qt(t, a, n, i, r)),
        !Me(t) || (t.style && t.nodeType) || te(t) || Zi(t))
      )
        return Z(t) ? qt(t, a, n, i, r) : t;
      var s = {},
        o;
      for (o in t) s[o] = qt(t[o], a, n, i, r);
      return s;
    },
    Dr = function (t, n, i, r, a, s) {
      var o, l, u, c;
      if (
        ye[t] &&
        (o = new ye[t]()).init(
          a,
          o.rawVars ? n[t] : iu(n[t], r, a, s, i),
          i,
          r,
          s
        ) !== !1 &&
        ((i._pt = l = new ue(i._pt, a, t, 0, 1, o.render, o, 0, o.priority)),
        i !== _t)
      )
        for (u = i._ptLookup[i._targets.indexOf(a)], c = o._props.length; c--; )
          u[o._props[c]] = l;
      return o;
    },
    He,
    ei,
    ti = function e(t, n, i) {
      var r = t.vars,
        a = r.ease,
        s = r.startAt,
        o = r.immediateRender,
        l = r.lazy,
        u = r.onUpdate,
        c = r.runBackwards,
        d = r.yoyoEase,
        f = r.keyframes,
        p = r.autoRevert,
        g = t._dur,
        h = t._startAt,
        m = t._targets,
        b = t.parent,
        v = b && b.data === "nested" ? b.vars.targets : m,
        y = t._overwrite === "auto" && !$n,
        E = t.timeline,
        T,
        S,
        C,
        A,
        k,
        P,
        M,
        _,
        x,
        $,
        I,
        w,
        O;
      if (
        (E && (!f || !a) && (a = "none"),
        (t._ease = tt(a, pt.ease)),
        (t._yEase = d ? $r(tt(d === !0 ? a : d, pt.ease)) : 0),
        d &&
          t._yoyo &&
          !t._repeat &&
          ((d = t._yEase), (t._yEase = t._ease), (t._ease = d)),
        (t._from = !E && !!r.runBackwards),
        !E || (f && !r.stagger))
      ) {
        if (
          ((_ = m[0] ? Je(m[0]).harness : 0),
          (w = _ && r[_.prop]),
          (T = un(r, Bn)),
          h &&
            (h._zTime < 0 && h.progress(1),
            n < 0 && c && o && !p
              ? h.render(-1, !0)
              : h.revert(c && g ? sn : $l),
            (h._lazy = 0)),
          s)
        ) {
          if (
            (Ve(
              (t._startAt = Q.set(
                m,
                be(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: b,
                    immediateRender: !0,
                    lazy: !h && oe(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      u &&
                      function () {
                        return _e(t, "onUpdate");
                      },
                    stagger: 0,
                  },
                  s
                )
              ))
            ),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            n < 0 && (K || (!o && !p)) && t._startAt.revert(sn),
            o && g && n <= 0 && i <= 0)
          ) {
            n && (t._zTime = n);
            return;
          }
        } else if (c && g && !h) {
          if (
            (n && (o = !1),
            (C = be(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !h && oe(l),
                immediateRender: o,
                stagger: 0,
                parent: b,
              },
              T
            )),
            w && (C[_.prop] = w),
            Ve((t._startAt = Q.set(m, C))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            n < 0 && (K ? t._startAt.revert(sn) : t._startAt.render(-1, !0)),
            (t._zTime = n),
            !o)
          )
            e(t._startAt, ee, ee);
          else if (!n) return;
        }
        for (
          t._pt = t._ptCache = 0, l = (g && oe(l)) || (l && !g), S = 0;
          S < m.length;
          S++
        ) {
          if (
            ((k = m[S]),
            (M = k._gsap || qn(m)[S]._gsap),
            (t._ptLookup[S] = $ = {}),
            Yn[M.id] && Ye.length && ln(),
            (I = v === m ? S : v.indexOf(k)),
            _ &&
              (x = new _()).init(k, w || T, t, I, v) !== !1 &&
              ((t._pt = A =
                new ue(t._pt, k, x.name, 0, 1, x.render, x, 0, x.priority)),
              x._props.forEach(function (z) {
                $[z] = A;
              }),
              x.priority && (P = 1)),
            !_ || w)
          )
            for (C in T)
              ye[C] && (x = Dr(C, T, t, I, k, v))
                ? x.priority && (P = 1)
                : ($[C] = A =
                    Jn.call(t, k, C, "get", T[C], I, v, 0, r.stringFilter));
          t._op && t._op[S] && t.kill(k, t._op[S]),
            y &&
              t._pt &&
              ((He = t),
              G.killTweensOf(k, $, t.globalTime(n)),
              (O = !t.parent),
              (He = 0)),
            t._pt && l && (Yn[M.id] = 1);
        }
        P && Yr(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = u),
        (t._initted = (!t._op || t._pt) && !O),
        f && n <= 0 && E.render(Ae, !0, !0);
    },
    ru = function (t, n, i, r, a, s, o, l) {
      var u = ((t._pt && t._ptCache) || (t._ptCache = {}))[n],
        c,
        d,
        f,
        p;
      if (!u)
        for (
          u = t._ptCache[n] = [], f = t._ptLookup, p = t._targets.length;
          p--;

        ) {
          if (((c = f[p][n]), c && c.d && c.d._pt))
            for (c = c.d._pt; c && c.p !== n && c.fp !== n; ) c = c._next;
          if (!c)
            return (
              (ei = 1),
              (t.vars[n] = "+=0"),
              ti(t, o),
              (ei = 0),
              l ? It(n + " not eligible for reset") : 1
            );
          u.push(c);
        }
      for (p = u.length; p--; )
        (d = u[p]),
          (c = d._pt || d),
          (c.s = (r || r === 0) && !a ? r : c.s + (r || 0) + s * c.c),
          (c.c = i - c.s),
          d.e && (d.e = X(i) + ne(d.e)),
          d.b && (d.b = c.s + ne(d.b));
    },
    au = function (t, n) {
      var i = t[0] ? Je(t[0]).harness : 0,
        r = i && i.aliases,
        a,
        s,
        o,
        l;
      if (!r) return n;
      a = vt({}, n);
      for (s in r)
        if (s in a)
          for (l = r[s].split(","), o = l.length; o--; ) a[l[o]] = a[s];
      return a;
    },
    su = function (t, n, i, r) {
      var a = n.ease || r || "power1.inOut",
        s,
        o;
      if (te(n))
        (o = i[t] || (i[t] = [])),
          n.forEach(function (l, u) {
            return o.push({ t: (u / (n.length - 1)) * 100, v: l, e: a });
          });
      else
        for (s in n)
          (o = i[s] || (i[s] = [])),
            s === "ease" || o.push({ t: parseFloat(t), v: n[s], e: a });
    },
    qt = function (t, n, i, r, a) {
      return H(t)
        ? t.call(n, i, r, a)
        : Z(t) && ~t.indexOf("random(")
        ? Ft(t)
        : t;
    },
    Lr = Gn + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Rr = {};
  le(Lr + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
    return (Rr[e] = 1);
  });
  var Q = (function (e) {
    Ui(t, e);
    function t(i, r, a, s) {
      var o;
      typeof r == "number" && ((a.duration = r), (r = a), (a = null)),
        (o = e.call(this, s ? r : Lt(r)) || this);
      var l = o.vars,
        u = l.duration,
        c = l.delay,
        d = l.immediateRender,
        f = l.stagger,
        p = l.overwrite,
        g = l.keyframes,
        h = l.defaults,
        m = l.scrollTrigger,
        b = l.yoyoEase,
        v = r.parent || G,
        y = (te(i) || Zi(i) ? Le(i[0]) : "length" in r) ? [i] : we(i),
        E,
        T,
        S,
        C,
        A,
        k,
        P,
        M;
      if (
        ((o._targets = y.length
          ? qn(y)
          : It(
              "GSAP target " + i + " not found. https://gsap.com",
              !ge.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = p),
        g || f || rn(u) || rn(c))
      ) {
        if (
          ((r = o.vars),
          (E = o.timeline =
            new re({
              data: "nested",
              defaults: h || {},
              targets: v && v.data === "nested" ? v.vars.targets : y,
            })),
          E.kill(),
          (E.parent = E._dp = De(o)),
          (E._start = 0),
          f || rn(u) || rn(c))
        ) {
          if (((C = y.length), (P = f && br(f)), Me(f)))
            for (A in f) ~Lr.indexOf(A) && (M || (M = {}), (M[A] = f[A]));
          for (T = 0; T < C; T++)
            (S = un(r, Rr)),
              (S.stagger = 0),
              b && (S.yoyoEase = b),
              M && vt(S, M),
              (k = y[T]),
              (S.duration = +qt(u, De(o), T, k, y)),
              (S.delay = (+qt(c, De(o), T, k, y) || 0) - o._delay),
              !f &&
                C === 1 &&
                S.delay &&
                ((o._delay = c = S.delay), (o._start += c), (S.delay = 0)),
              E.to(k, S, P ? P(T, k, y) : 0),
              (E._ease = N.none);
          E.duration() ? (u = c = 0) : (o.timeline = 0);
        } else if (g) {
          Lt(be(E.vars.defaults, { ease: "none" })),
            (E._ease = tt(g.ease || r.ease || "none"));
          var _ = 0,
            x,
            $,
            I;
          if (te(g))
            g.forEach(function (w) {
              return E.to(y, w, ">");
            }),
              E.duration();
          else {
            S = {};
            for (A in g)
              A === "ease" || A === "easeEach" || su(A, g[A], S, g.easeEach);
            for (A in S)
              for (
                x = S[A].sort(function (w, O) {
                  return w.t - O.t;
                }),
                  _ = 0,
                  T = 0;
                T < x.length;
                T++
              )
                ($ = x[T]),
                  (I = {
                    ease: $.e,
                    duration: (($.t - (T ? x[T - 1].t : 0)) / 100) * u,
                  }),
                  (I[A] = $.v),
                  E.to(y, I, _),
                  (_ += I.duration);
            E.duration() < u && E.to({}, { duration: u - E.duration() });
          }
        }
        u || o.duration((u = E.duration()));
      } else o.timeline = 0;
      return (
        p === !0 && !$n && ((He = De(o)), G.killTweensOf(y), (He = 0)),
        ke(v, De(o), a),
        r.reversed && o.reverse(),
        r.paused && o.paused(!0),
        (d ||
          (!u &&
            !g &&
            o._start === U(v._time) &&
            oe(d) &&
            Rl(De(o)) &&
            v.data !== "nested")) &&
          ((o._tTime = -1e-8), o.render(Math.max(0, -c) || 0)),
        m && pr(De(o), m),
        o
      );
    }
    var n = t.prototype;
    return (
      (n.render = function (r, a, s) {
        var o = this._time,
          l = this._tDur,
          u = this._dur,
          c = r < 0,
          d = r > l - ee && !c ? l : r < ee ? 0 : r,
          f,
          p,
          g,
          h,
          m,
          b,
          v,
          y,
          E;
        if (!u) Fl(this, r, a, s);
        else if (
          d !== this._tTime ||
          !r ||
          s ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== c) ||
          this._lazy
        ) {
          if (((f = d), (y = this.timeline), this._repeat)) {
            if (((h = u + this._rDelay), this._repeat < -1 && c))
              return this.totalTime(h * 100 + r, a, s);
            if (
              ((f = U(d % h)),
              d === l
                ? ((g = this._repeat), (f = u))
                : ((m = U(d / h)),
                  (g = ~~m),
                  g && g === m ? ((f = u), g--) : f > u && (f = u)),
              (b = this._yoyo && g & 1),
              b && ((E = this._yEase), (f = u - f)),
              (m = yt(this._tTime, h)),
              f === o && !s && this._initted && g === m)
            )
              return (this._tTime = d), this;
            g !== m &&
              (y && this._yEase && Or(y, b),
              this.vars.repeatRefresh &&
                !b &&
                !this._lock &&
                f !== h &&
                this._initted &&
                ((this._lock = s = 1),
                (this.render(U(h * g), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (mr(this, c ? r : f, s, a, d)) return (this._tTime = 0), this;
            if (o !== this._time && !(s && this.vars.repeatRefresh && g !== m))
              return this;
            if (u !== this._dur) return this.render(r, a, s);
          }
          if (
            ((this._tTime = d),
            (this._time = f),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = v = (E || this._ease)(f / u)),
            this._from && (this.ratio = v = 1 - v),
            f && !o && !a && !g && (_e(this, "onStart"), this._tTime !== d))
          )
            return this;
          for (p = this._pt; p; ) p.r(v, p.d), (p = p._next);
          (y && y.render(r < 0 ? r : y._dur * y._ease(f / this._dur), a, s)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !a &&
              (c && Hn(this, r, a, s), _e(this, "onUpdate")),
            this._repeat &&
              g !== m &&
              this.vars.onRepeat &&
              !a &&
              this.parent &&
              _e(this, "onRepeat"),
            (d === this._tDur || !d) &&
              this._tTime === d &&
              (c && !this._onUpdate && Hn(this, r, !0, !0),
              (r || !u) &&
                ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
                Ve(this, 1),
              !a &&
                !(c && !o) &&
                (d || o || b) &&
                (_e(this, d === l ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(d < l && this.timeScale() > 0) &&
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
          e.prototype.invalidate.call(this, r)
        );
      }),
      (n.resetTo = function (r, a, s, o, l) {
        Vt || xe.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          c;
        return (
          this._initted || ti(this, u),
          (c = this._ease(u / this._dur)),
          ru(this, r, a, s, o, c, u, l)
            ? this.resetTo(r, a, s, o, 1)
            : (hn(this, 0),
              this.parent ||
                dr(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (n.kill = function (r, a) {
        if ((a === void 0 && (a = "all"), !r && (!a || a === "all")))
          return (
            (this._lazy = this._pt = 0),
            this.parent
              ? Bt(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!K),
            this
          );
        if (this.timeline) {
          var s = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, a, He && He.vars.overwrite !== !0)
              ._first || Bt(this),
            this.parent &&
              s !== this.timeline.totalDuration() &&
              bt(this, (this._dur * this.timeline._tDur) / s, 0, 1),
            this
          );
        }
        var o = this._targets,
          l = r ? we(r) : o,
          u = this._ptLookup,
          c = this._pt,
          d,
          f,
          p,
          g,
          h,
          m,
          b;
        if ((!a || a === "all") && Dl(o, l))
          return a === "all" && (this._pt = 0), Bt(this);
        for (
          d = this._op = this._op || [],
            a !== "all" &&
              (Z(a) &&
                ((h = {}),
                le(a, function (v) {
                  return (h[v] = 1);
                }),
                (a = h)),
              (a = au(o, a))),
            b = o.length;
          b--;

        )
          if (~l.indexOf(o[b])) {
            (f = u[b]),
              a === "all"
                ? ((d[b] = a), (g = f), (p = {}))
                : ((p = d[b] = d[b] || {}), (g = a));
            for (h in g)
              (m = f && f[h]),
                m &&
                  ((!("kill" in m.d) || m.d.kill(h) === !0) &&
                    cn(this, m, "_pt"),
                  delete f[h]),
                p !== "all" && (p[h] = 1);
          }
        return this._initted && !this._pt && c && Bt(this), this;
      }),
      (t.to = function (r, a) {
        return new t(r, a, arguments[2]);
      }),
      (t.from = function (r, a) {
        return Rt(1, arguments);
      }),
      (t.delayedCall = function (r, a, s, o) {
        return new t(a, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: r,
          onComplete: a,
          onReverseComplete: a,
          onCompleteParams: s,
          onReverseCompleteParams: s,
          callbackScope: o,
        });
      }),
      (t.fromTo = function (r, a, s) {
        return Rt(2, arguments);
      }),
      (t.set = function (r, a) {
        return (a.duration = 0), a.repeatDelay || (a.repeat = 0), new t(r, a);
      }),
      (t.killTweensOf = function (r, a, s) {
        return G.killTweensOf(r, a, s);
      }),
      t
    );
  })(Gt);
  be(Q.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    le("staggerTo,staggerFrom,staggerFromTo", function (e) {
      Q[e] = function () {
        var t = new re(),
          n = jn.call(arguments, 0);
        return n.splice(e === "staggerFromTo" ? 5 : 4, 0, 0), t[e].apply(t, n);
      };
    });
  var ni = function (t, n, i) {
      return (t[n] = i);
    },
    Nr = function (t, n, i) {
      return t[n](i);
    },
    ou = function (t, n, i, r) {
      return t[n](r.fp, i);
    },
    lu = function (t, n, i) {
      return t.setAttribute(n, i);
    },
    ii = function (t, n) {
      return H(t[n]) ? Nr : zn(t[n]) && t.setAttribute ? lu : ni;
    },
    Fr = function (t, n) {
      return n.set(n.t, n.p, Math.round((n.s + n.c * t) * 1e6) / 1e6, n);
    },
    uu = function (t, n) {
      return n.set(n.t, n.p, !!(n.s + n.c * t), n);
    },
    Br = function (t, n) {
      var i = n._pt,
        r = "";
      if (!t && n.b) r = n.b;
      else if (t === 1 && n.e) r = n.e;
      else {
        for (; i; )
          (r =
            i.p +
            (i.m
              ? i.m(i.s + i.c * t)
              : Math.round((i.s + i.c * t) * 1e4) / 1e4) +
            r),
            (i = i._next);
        r += n.c;
      }
      n.set(n.t, n.p, r, n);
    },
    ri = function (t, n) {
      for (var i = n._pt; i; ) i.r(t, i.d), (i = i._next);
    },
    cu = function (t, n, i, r) {
      for (var a = this._pt, s; a; )
        (s = a._next), a.p === r && a.modifier(t, n, i), (a = s);
    },
    du = function (t) {
      for (var n = this._pt, i, r; n; )
        (r = n._next),
          (n.p === t && !n.op) || n.op === t
            ? cn(this, n, "_pt")
            : n.dep || (i = 1),
          (n = r);
      return !i;
    },
    fu = function (t, n, i, r) {
      r.mSet(t, n, r.m.call(r.tween, i, r.mt), r);
    },
    Yr = function (t) {
      for (var n = t._pt, i, r, a, s; n; ) {
        for (i = n._next, r = a; r && r.pr > n.pr; ) r = r._next;
        (n._prev = r ? r._prev : s) ? (n._prev._next = n) : (a = n),
          (n._next = r) ? (r._prev = n) : (s = n),
          (n = i);
      }
      t._pt = a;
    },
    ue = (function () {
      function e(n, i, r, a, s, o, l, u, c) {
        (this.t = i),
          (this.s = a),
          (this.c = s),
          (this.p = r),
          (this.r = o || Fr),
          (this.d = l || this),
          (this.set = u || ni),
          (this.pr = c || 0),
          (this._next = n),
          n && (n._prev = this);
      }
      var t = e.prototype;
      return (
        (t.modifier = function (i, r, a) {
          (this.mSet = this.mSet || this.set),
            (this.set = fu),
            (this.m = i),
            (this.mt = a),
            (this.tween = r);
        }),
        e
      );
    })();
  le(
    Gn +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (e) {
      return (Bn[e] = 1);
    }
  ),
    (ve.TweenMax = ve.TweenLite = Q),
    (ve.TimelineLite = ve.TimelineMax = re),
    (G = new re({
      sortChildren: !1,
      defaults: pt,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (ge.stringFilter = kr);
  var it = [],
    pn = {},
    hu = [],
    Vr = 0,
    pu = 0,
    ai = function (t) {
      return (pn[t] || hu).map(function (n) {
        return n();
      });
    },
    si = function () {
      var t = Date.now(),
        n = [];
      t - Vr > 2 &&
        (ai("matchMediaInit"),
        it.forEach(function (i) {
          var r = i.queries,
            a = i.conditions,
            s,
            o,
            l,
            u;
          for (o in r)
            (s = Pe.matchMedia(r[o]).matches),
              s && (l = 1),
              s !== a[o] && ((a[o] = s), (u = 1));
          u && (i.revert(), l && n.push(i));
        }),
        ai("matchMediaRevert"),
        n.forEach(function (i) {
          return i.onMatch(i, function (r) {
            return i.add(null, r);
          });
        }),
        (Vr = t),
        ai("matchMedia"));
    },
    Gr = (function () {
      function e(n, i) {
        (this.selector = i && Wn(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = pu++),
          n && this.add(n);
      }
      var t = e.prototype;
      return (
        (t.add = function (i, r, a) {
          H(i) && ((a = r), (r = i), (i = H));
          var s = this,
            o = function () {
              var u = V,
                c = s.selector,
                d;
              return (
                u && u !== s && u.data.push(s),
                a && (s.selector = Wn(a)),
                (V = s),
                (d = r.apply(s, arguments)),
                H(d) && s._r.push(d),
                (V = u),
                (s.selector = c),
                (s.isReverted = !1),
                d
              );
            };
          return (
            (s.last = o),
            i === H
              ? o(s, function (l) {
                  return s.add(null, l);
                })
              : i
              ? (s[i] = o)
              : o
          );
        }),
        (t.ignore = function (i) {
          var r = V;
          (V = null), i(this), (V = r);
        }),
        (t.getTweens = function () {
          var i = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof e
                ? i.push.apply(i, r.getTweens())
                : r instanceof Q &&
                    !(r.parent && r.parent.data === "nested") &&
                    i.push(r);
            }),
            i
          );
        }),
        (t.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (t.kill = function (i, r) {
          var a = this;
          if (
            (i
              ? (function () {
                  for (var o = a.getTweens(), l = a.data.length, u; l--; )
                    (u = a.data[l]),
                      u.data === "isFlip" &&
                        (u.revert(),
                        u.getChildren(!0, !0, !1).forEach(function (c) {
                          return o.splice(o.indexOf(c), 1);
                        }));
                  for (
                    o
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
                      .sort(function (c, d) {
                        return d.g - c.g || -1 / 0;
                      })
                      .forEach(function (c) {
                        return c.t.revert(i);
                      }),
                      l = a.data.length;
                    l--;

                  )
                    (u = a.data[l]),
                      u instanceof re
                        ? u.data !== "nested" &&
                          (u.scrollTrigger && u.scrollTrigger.revert(),
                          u.kill())
                        : !(u instanceof Q) && u.revert && u.revert(i);
                  a._r.forEach(function (c) {
                    return c(i, a);
                  }),
                    (a.isReverted = !0);
                })()
              : this.data.forEach(function (o) {
                  return o.kill && o.kill();
                }),
            this.clear(),
            r)
          )
            for (var s = it.length; s--; )
              it[s].id === this.id && it.splice(s, 1);
        }),
        (t.revert = function (i) {
          this.kill(i || {});
        }),
        e
      );
    })(),
    mu = (function () {
      function e(n) {
        (this.contexts = []), (this.scope = n), V && V.data.push(this);
      }
      var t = e.prototype;
      return (
        (t.add = function (i, r, a) {
          Me(i) || (i = { matches: i });
          var s = new Gr(0, a || this.scope),
            o = (s.conditions = {}),
            l,
            u,
            c;
          V && !s.selector && (s.selector = V.selector),
            this.contexts.push(s),
            (r = s.add("onMatch", r)),
            (s.queries = i);
          for (u in i)
            u === "all"
              ? (c = 1)
              : ((l = Pe.matchMedia(i[u])),
                l &&
                  (it.indexOf(s) < 0 && it.push(s),
                  (o[u] = l.matches) && (c = 1),
                  l.addListener
                    ? l.addListener(si)
                    : l.addEventListener("change", si)));
          return (
            c &&
              r(s, function (d) {
                return s.add(null, d);
              }),
            this
          );
        }),
        (t.revert = function (i) {
          this.kill(i || {});
        }),
        (t.kill = function (i) {
          this.contexts.forEach(function (r) {
            return r.kill(i, !0);
          });
        }),
        e
      );
    })(),
    mn = {
      registerPlugin: function () {
        for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
          n[i] = arguments[i];
        n.forEach(function (r) {
          return Cr(r);
        });
      },
      timeline: function (t) {
        return new re(t);
      },
      getTweensOf: function (t, n) {
        return G.getTweensOf(t, n);
      },
      getProperty: function (t, n, i, r) {
        Z(t) && (t = we(t)[0]);
        var a = Je(t || {}).get,
          s = i ? ur : lr;
        return (
          i === "native" && (i = ""),
          t &&
            (n
              ? s(((ye[n] && ye[n].get) || a)(t, n, i, r))
              : function (o, l, u) {
                  return s(((ye[o] && ye[o].get) || a)(t, o, l, u));
                })
        );
      },
      quickSetter: function (t, n, i) {
        if (((t = we(t)), t.length > 1)) {
          var r = t.map(function (c) {
              return ce.quickSetter(c, n, i);
            }),
            a = r.length;
          return function (c) {
            for (var d = a; d--; ) r[d](c);
          };
        }
        t = t[0] || {};
        var s = ye[n],
          o = Je(t),
          l = (o.harness && (o.harness.aliases || {})[n]) || n,
          u = s
            ? function (c) {
                var d = new s();
                (_t._pt = 0),
                  d.init(t, i ? c + i : c, _t, 0, [t]),
                  d.render(1, d),
                  _t._pt && ri(1, _t);
              }
            : o.set(t, l);
        return s
          ? u
          : function (c) {
              return u(t, l, i ? c + i : c, o, 1);
            };
      },
      quickTo: function (t, n, i) {
        var r,
          a = ce.to(
            t,
            be(
              ((r = {}), (r[n] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
              i || {}
            )
          ),
          s = function (l, u, c) {
            return a.resetTo(n, l, u, c);
          };
        return (s.tween = a), s;
      },
      isTweening: function (t) {
        return G.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = tt(t.ease, pt.ease)), cr(pt, t || {});
      },
      config: function (t) {
        return cr(ge, t || {});
      },
      registerEffect: function (t) {
        var n = t.name,
          i = t.effect,
          r = t.plugins,
          a = t.defaults,
          s = t.extendTimeline;
        (r || "").split(",").forEach(function (o) {
          return (
            o &&
            !ye[o] &&
            !ve[o] &&
            It(n + " effect requires " + o + " plugin.")
          );
        }),
          (Vn[n] = function (o, l, u) {
            return i(we(o), be(l || {}, a), u);
          }),
          s &&
            (re.prototype[n] = function (o, l, u) {
              return this.add(Vn[n](o, Me(l) ? l : (u = l) && {}, this), u);
            });
      },
      registerEase: function (t, n) {
        N[t] = tt(n);
      },
      parseEase: function (t, n) {
        return arguments.length ? tt(t, n) : N;
      },
      getById: function (t) {
        return G.getById(t);
      },
      exportRoot: function (t, n) {
        t === void 0 && (t = {});
        var i = new re(t),
          r,
          a;
        for (
          i.smoothChildTiming = oe(t.smoothChildTiming),
            G.remove(i),
            i._dp = 0,
            i._time = i._tTime = G._time,
            r = G._first;
          r;

        )
          (a = r._next),
            (n ||
              !(
                !r._dur &&
                r instanceof Q &&
                r.vars.onComplete === r._targets[0]
              )) &&
              ke(i, r, r._start - r._delay),
            (r = a);
        return ke(G, i, 0), i;
      },
      context: function (t, n) {
        return t ? new Gr(t, n) : V;
      },
      matchMedia: function (t) {
        return new mu(t);
      },
      matchMediaRefresh: function () {
        return (
          it.forEach(function (t) {
            var n = t.conditions,
              i,
              r;
            for (r in n) n[r] && ((n[r] = !1), (i = 1));
            i && t.revert();
          }) || si()
        );
      },
      addEventListener: function (t, n) {
        var i = pn[t] || (pn[t] = []);
        ~i.indexOf(n) || i.push(n);
      },
      removeEventListener: function (t, n) {
        var i = pn[t],
          r = i && i.indexOf(n);
        r >= 0 && i.splice(r, 1);
      },
      utils: {
        wrap: jl,
        wrapYoyo: Wl,
        distribute: br,
        random: xr,
        snap: _r,
        normalize: Xl,
        getUnit: ne,
        clamp: Vl,
        splitColor: Ar,
        toArray: we,
        selector: Wn,
        mapRange: Er,
        pipe: ql,
        unitize: Hl,
        interpolate: Ul,
        shuffle: yr,
      },
      install: nr,
      effects: Vn,
      ticker: xe,
      updateRoot: re.updateRoot,
      plugins: ye,
      globalTimeline: G,
      core: {
        PropTween: ue,
        globals: ir,
        Tween: Q,
        Timeline: re,
        Animation: Gt,
        getCache: Je,
        _removeLinkedListItem: cn,
        reverting: function () {
          return K;
        },
        context: function (t) {
          return t && V && (V.data.push(t), (t._ctx = V)), V;
        },
        suppressOverwrites: function (t) {
          return ($n = t);
        },
      },
    };
  le("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
    return (mn[e] = Q[e]);
  }),
    xe.add(re.updateRoot),
    (_t = mn.to({}, { duration: 0 }));
  var gu = function (t, n) {
      for (var i = t._pt; i && i.p !== n && i.op !== n && i.fp !== n; )
        i = i._next;
      return i;
    },
    vu = function (t, n) {
      var i = t._targets,
        r,
        a,
        s;
      for (r in n)
        for (a = i.length; a--; )
          (s = t._ptLookup[a][r]),
            s &&
              (s = s.d) &&
              (s._pt && (s = gu(s, r)),
              s && s.modifier && s.modifier(n[r], t, i[a], r));
    },
    oi = function (t, n) {
      return {
        name: t,
        rawVars: 1,
        init: function (r, a, s) {
          s._onInit = function (o) {
            var l, u;
            if (
              (Z(a) &&
                ((l = {}),
                le(a, function (c) {
                  return (l[c] = 1);
                }),
                (a = l)),
              n)
            ) {
              l = {};
              for (u in a) l[u] = n(a[u]);
              a = l;
            }
            vu(o, a);
          };
        },
      };
    },
    ce =
      mn.registerPlugin(
        {
          name: "attr",
          init: function (t, n, i, r, a) {
            var s, o, l;
            this.tween = i;
            for (s in n)
              (l = t.getAttribute(s) || ""),
                (o = this.add(
                  t,
                  "setAttribute",
                  (l || 0) + "",
                  n[s],
                  r,
                  a,
                  0,
                  0,
                  s
                )),
                (o.op = s),
                (o.b = l),
                this._props.push(s);
          },
          render: function (t, n) {
            for (var i = n._pt; i; )
              K ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
          },
        },
        {
          name: "endArray",
          init: function (t, n) {
            for (var i = n.length; i--; )
              this.add(t, i, t[i] || 0, n[i], 0, 0, 0, 0, 0, 1);
          },
        },
        oi("roundProps", Un),
        oi("modifiers"),
        oi("snap", _r)
      ) || mn;
  (Q.version = re.version = ce.version = "3.12.7"),
    (tr = 1),
    In() && xt(),
    N.Power0,
    N.Power1,
    N.Power2,
    N.Power3,
    N.Power4,
    N.Linear,
    N.Quad,
    N.Cubic,
    N.Quart,
    N.Quint,
    N.Strong,
    N.Elastic,
    N.Back,
    N.SteppedEase,
    N.Bounce,
    N.Sine,
    N.Expo,
    N.Circ;
  /*!
   * CSSPlugin 3.12.7
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var qr,
    Xe,
    Tt,
    li,
    rt,
    Hr,
    ui,
    yu = function () {
      return typeof window < "u";
    },
    Re = {},
    at = 180 / Math.PI,
    Et = Math.PI / 180,
    wt = Math.atan2,
    Xr = 1e8,
    ci = /([A-Z])/g,
    bu = /(left|right|width|margin|padding|x)/i,
    _u = /[\s,\(]\S/,
    $e = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    di = function (t, n) {
      return n.set(n.t, n.p, Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u, n);
    },
    xu = function (t, n) {
      return n.set(
        n.t,
        n.p,
        t === 1 ? n.e : Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u,
        n
      );
    },
    Tu = function (t, n) {
      return n.set(
        n.t,
        n.p,
        t ? Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u : n.b,
        n
      );
    },
    Eu = function (t, n) {
      var i = n.s + n.c * t;
      n.set(n.t, n.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + n.u, n);
    },
    jr = function (t, n) {
      return n.set(n.t, n.p, t ? n.e : n.b, n);
    },
    Wr = function (t, n) {
      return n.set(n.t, n.p, t !== 1 ? n.b : n.e, n);
    },
    wu = function (t, n, i) {
      return (t.style[n] = i);
    },
    Su = function (t, n, i) {
      return t.style.setProperty(n, i);
    },
    Cu = function (t, n, i) {
      return (t._gsap[n] = i);
    },
    Au = function (t, n, i) {
      return (t._gsap.scaleX = t._gsap.scaleY = i);
    },
    Mu = function (t, n, i, r, a) {
      var s = t._gsap;
      (s.scaleX = s.scaleY = i), s.renderTransform(a, s);
    },
    Pu = function (t, n, i, r, a) {
      var s = t._gsap;
      (s[n] = i), s.renderTransform(a, s);
    },
    q = "transform",
    de = q + "Origin",
    ku = function e(t, n) {
      var i = this,
        r = this.target,
        a = r.style,
        s = r._gsap;
      if (t in Re && a) {
        if (((this.tfm = this.tfm || {}), t !== "transform"))
          (t = $e[t] || t),
            ~t.indexOf(",")
              ? t.split(",").forEach(function (o) {
                  return (i.tfm[o] = Ne(r, o));
                })
              : (this.tfm[t] = s.x ? s[t] : Ne(r, t)),
            t === de && (this.tfm.zOrigin = s.zOrigin);
        else
          return $e.transform.split(",").forEach(function (o) {
            return e.call(i, o, n);
          });
        if (this.props.indexOf(q) >= 0) return;
        s.svg &&
          ((this.svgo = r.getAttribute("data-svg-origin")),
          this.props.push(de, n, "")),
          (t = q);
      }
      (a || n) && this.props.push(t, n, a[t]);
    },
    Ur = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    },
    $u = function () {
      var t = this.props,
        n = this.target,
        i = n.style,
        r = n._gsap,
        a,
        s;
      for (a = 0; a < t.length; a += 3)
        t[a + 1]
          ? t[a + 1] === 2
            ? n[t[a]](t[a + 2])
            : (n[t[a]] = t[a + 2])
          : t[a + 2]
          ? (i[t[a]] = t[a + 2])
          : i.removeProperty(
              t[a].substr(0, 2) === "--"
                ? t[a]
                : t[a].replace(ci, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (s in this.tfm) r[s] = this.tfm[s];
        r.svg &&
          (r.renderTransform(),
          n.setAttribute("data-svg-origin", this.svgo || "")),
          (a = ui()),
          (!a || !a.isStart) &&
            !i[q] &&
            (Ur(i),
            r.zOrigin &&
              i[de] &&
              ((i[de] += " " + r.zOrigin + "px"),
              (r.zOrigin = 0),
              r.renderTransform()),
            (r.uncache = 1));
      }
    },
    Qr = function (t, n) {
      var i = { target: t, props: [], revert: $u, save: ku };
      return (
        t._gsap || ce.core.getCache(t),
        n &&
          t.style &&
          t.nodeType &&
          n.split(",").forEach(function (r) {
            return i.save(r);
          }),
        i
      );
    },
    Zr,
    fi = function (t, n) {
      var i = Xe.createElementNS
        ? Xe.createElementNS(
            (n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : Xe.createElement(t);
      return i && i.style ? i : Xe.createElement(t);
    },
    Oe = function e(t, n, i) {
      var r = getComputedStyle(t);
      return (
        r[n] ||
        r.getPropertyValue(n.replace(ci, "-$1").toLowerCase()) ||
        r.getPropertyValue(n) ||
        (!i && e(t, St(n) || n, 1)) ||
        ""
      );
    },
    Kr = "O,Moz,ms,Ms,Webkit".split(","),
    St = function (t, n, i) {
      var r = n || rt,
        a = r.style,
        s = 5;
      if (t in a && !i) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        s-- && !(Kr[s] + t in a);

      );
      return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Kr[s] : "") + t;
    },
    hi = function () {
      yu() &&
        window.document &&
        ((qr = window),
        (Xe = qr.document),
        (Tt = Xe.documentElement),
        (rt = fi("div") || { style: {} }),
        fi("div"),
        (q = St(q)),
        (de = q + "Origin"),
        (rt.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Zr = !!St("perspective")),
        (ui = ce.core.reverting),
        (li = 1));
    },
    Jr = function (t) {
      var n = t.ownerSVGElement,
        i = fi(
          "svg",
          (n && n.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        r = t.cloneNode(!0),
        a;
      (r.style.display = "block"), i.appendChild(r), Tt.appendChild(i);
      try {
        a = r.getBBox();
      } catch {}
      return i.removeChild(r), Tt.removeChild(i), a;
    },
    ea = function (t, n) {
      for (var i = n.length; i--; )
        if (t.hasAttribute(n[i])) return t.getAttribute(n[i]);
    },
    ta = function (t) {
      var n, i;
      try {
        n = t.getBBox();
      } catch {
        (n = Jr(t)), (i = 1);
      }
      return (
        (n && (n.width || n.height)) || i || (n = Jr(t)),
        n && !n.width && !n.x && !n.y
          ? {
              x: +ea(t, ["x", "cx", "x1"]) || 0,
              y: +ea(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : n
      );
    },
    na = function (t) {
      return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && ta(t));
    },
    st = function (t, n) {
      if (n) {
        var i = t.style,
          r;
        n in Re && n !== de && (n = q),
          i.removeProperty
            ? ((r = n.substr(0, 2)),
              (r === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
              i.removeProperty(
                r === "--" ? n : n.replace(ci, "-$1").toLowerCase()
              ))
            : i.removeAttribute(n);
      }
    },
    je = function (t, n, i, r, a, s) {
      var o = new ue(t._pt, n, i, 0, 1, s ? Wr : jr);
      return (t._pt = o), (o.b = r), (o.e = a), t._props.push(i), o;
    },
    ia = { deg: 1, rad: 1, turn: 1 },
    Ou = { grid: 1, flex: 1 },
    We = function e(t, n, i, r) {
      var a = parseFloat(i) || 0,
        s = (i + "").trim().substr((a + "").length) || "px",
        o = rt.style,
        l = bu.test(n),
        u = t.tagName.toLowerCase() === "svg",
        c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
        d = 100,
        f = r === "px",
        p = r === "%",
        g,
        h,
        m,
        b;
      if (r === s || !a || ia[r] || ia[s]) return a;
      if (
        (s !== "px" && !f && (a = e(t, n, i, "px")),
        (b = t.getCTM && na(t)),
        (p || s === "%") && (Re[n] || ~n.indexOf("adius")))
      )
        return (
          (g = b ? t.getBBox()[l ? "width" : "height"] : t[c]),
          X(p ? (a / g) * d : (a / 100) * g)
        );
      if (
        ((o[l ? "width" : "height"] = d + (f ? s : r)),
        (h =
          (r !== "rem" && ~n.indexOf("adius")) ||
          (r === "em" && t.appendChild && !u)
            ? t
            : t.parentNode),
        b && (h = (t.ownerSVGElement || {}).parentNode),
        (!h || h === Xe || !h.appendChild) && (h = Xe.body),
        (m = h._gsap),
        m && p && m.width && l && m.time === xe.time && !m.uncache)
      )
        return X((a / m.width) * d);
      if (p && (n === "height" || n === "width")) {
        var v = t.style[n];
        (t.style[n] = d + r), (g = t[c]), v ? (t.style[n] = v) : st(t, n);
      } else
        (p || s === "%") &&
          !Ou[Oe(h, "display")] &&
          (o.position = Oe(t, "position")),
          h === t && (o.position = "static"),
          h.appendChild(rt),
          (g = rt[c]),
          h.removeChild(rt),
          (o.position = "absolute");
      return (
        l && p && ((m = Je(h)), (m.time = xe.time), (m.width = h[c])),
        X(f ? (g * a) / d : g && a ? (d / g) * a : 0)
      );
    },
    Ne = function (t, n, i, r) {
      var a;
      return (
        li || hi(),
        n in $e &&
          n !== "transform" &&
          ((n = $e[n]), ~n.indexOf(",") && (n = n.split(",")[0])),
        Re[n] && n !== "transform"
          ? ((a = Xt(t, r)),
            (a =
              n !== "transformOrigin"
                ? a[n]
                : a.svg
                ? a.origin
                : vn(Oe(t, de)) + " " + a.zOrigin + "px"))
          : ((a = t.style[n]),
            (!a || a === "auto" || r || ~(a + "").indexOf("calc(")) &&
              (a =
                (gn[n] && gn[n](t, n, i)) ||
                Oe(t, n) ||
                sr(t, n) ||
                (n === "opacity" ? 1 : 0))),
        i && !~(a + "").trim().indexOf(" ") ? We(t, n, a, i) + i : a
      );
    },
    zu = function (t, n, i, r) {
      if (!i || i === "none") {
        var a = St(n, t, 1),
          s = a && Oe(t, a, 1);
        s && s !== i
          ? ((n = a), (i = s))
          : n === "borderColor" && (i = Oe(t, "borderTopColor"));
      }
      var o = new ue(this._pt, t.style, n, 0, 1, Br),
        l = 0,
        u = 0,
        c,
        d,
        f,
        p,
        g,
        h,
        m,
        b,
        v,
        y,
        E,
        T;
      if (
        ((o.b = i),
        (o.e = r),
        (i += ""),
        (r += ""),
        r === "auto" &&
          ((h = t.style[n]),
          (t.style[n] = r),
          (r = Oe(t, n) || r),
          h ? (t.style[n] = h) : st(t, n)),
        (c = [i, r]),
        kr(c),
        (i = c[0]),
        (r = c[1]),
        (f = i.match(mt) || []),
        (T = r.match(mt) || []),
        T.length)
      ) {
        for (; (d = mt.exec(r)); )
          (m = d[0]),
            (v = r.substring(l, d.index)),
            g
              ? (g = (g + 1) % 5)
              : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") &&
                (g = 1),
            m !== (h = f[u++] || "") &&
              ((p = parseFloat(h) || 0),
              (E = h.substr((p + "").length)),
              m.charAt(1) === "=" && (m = gt(p, m) + E),
              (b = parseFloat(m)),
              (y = m.substr((b + "").length)),
              (l = mt.lastIndex - y.length),
              y ||
                ((y = y || ge.units[n] || E),
                l === r.length && ((r += y), (o.e += y))),
              E !== y && (p = We(t, n, h, y) || 0),
              (o._pt = {
                _next: o._pt,
                p: v || u === 1 ? v : ",",
                s: p,
                c: b - p,
                m: (g && g < 4) || n === "zIndex" ? Math.round : 0,
              }));
        o.c = l < r.length ? r.substring(l, r.length) : "";
      } else o.r = n === "display" && r === "none" ? Wr : jr;
      return Ji.test(r) && (o.e = 0), (this._pt = o), o;
    },
    ra = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Iu = function (t) {
      var n = t.split(" "),
        i = n[0],
        r = n[1] || "50%";
      return (
        (i === "top" || i === "bottom" || r === "left" || r === "right") &&
          ((t = i), (i = r), (r = t)),
        (n[0] = ra[i] || i),
        (n[1] = ra[r] || r),
        n.join(" ")
      );
    },
    Du = function (t, n) {
      if (n.tween && n.tween._time === n.tween._dur) {
        var i = n.t,
          r = i.style,
          a = n.u,
          s = i._gsap,
          o,
          l,
          u;
        if (a === "all" || a === !0) (r.cssText = ""), (l = 1);
        else
          for (a = a.split(","), u = a.length; --u > -1; )
            (o = a[u]),
              Re[o] && ((l = 1), (o = o === "transformOrigin" ? de : q)),
              st(i, o);
        l &&
          (st(i, q),
          s &&
            (s.svg && i.removeAttribute("transform"),
            (r.scale = r.rotate = r.translate = "none"),
            Xt(i, 1),
            (s.uncache = 1),
            Ur(r)));
      }
    },
    gn = {
      clearProps: function (t, n, i, r, a) {
        if (a.data !== "isFromStart") {
          var s = (t._pt = new ue(t._pt, n, i, 0, 0, Du));
          return (s.u = r), (s.pr = -10), (s.tween = a), t._props.push(i), 1;
        }
      },
    },
    Ht = [1, 0, 0, 1, 0, 0],
    aa = {},
    sa = function (t) {
      return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
    },
    oa = function (t) {
      var n = Oe(t, q);
      return sa(n) ? Ht : n.substr(7).match(Ki).map(X);
    },
    pi = function (t, n) {
      var i = t._gsap || Je(t),
        r = t.style,
        a = oa(t),
        s,
        o,
        l,
        u;
      return i.svg && t.getAttribute("transform")
        ? ((l = t.transform.baseVal.consolidate().matrix),
          (a = [l.a, l.b, l.c, l.d, l.e, l.f]),
          a.join(",") === "1,0,0,1,0,0" ? Ht : a)
        : (a === Ht &&
            !t.offsetParent &&
            t !== Tt &&
            !i.svg &&
            ((l = r.display),
            (r.display = "block"),
            (s = t.parentNode),
            (!s || (!t.offsetParent && !t.getBoundingClientRect().width)) &&
              ((u = 1), (o = t.nextElementSibling), Tt.appendChild(t)),
            (a = oa(t)),
            l ? (r.display = l) : st(t, "display"),
            u &&
              (o
                ? s.insertBefore(t, o)
                : s
                ? s.appendChild(t)
                : Tt.removeChild(t))),
          n && a.length > 6 ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a);
    },
    mi = function (t, n, i, r, a, s) {
      var o = t._gsap,
        l = a || pi(t, !0),
        u = o.xOrigin || 0,
        c = o.yOrigin || 0,
        d = o.xOffset || 0,
        f = o.yOffset || 0,
        p = l[0],
        g = l[1],
        h = l[2],
        m = l[3],
        b = l[4],
        v = l[5],
        y = n.split(" "),
        E = parseFloat(y[0]) || 0,
        T = parseFloat(y[1]) || 0,
        S,
        C,
        A,
        k;
      i
        ? l !== Ht &&
          (C = p * m - g * h) &&
          ((A = E * (m / C) + T * (-h / C) + (h * v - m * b) / C),
          (k = E * (-g / C) + T * (p / C) - (p * v - g * b) / C),
          (E = A),
          (T = k))
        : ((S = ta(t)),
          (E = S.x + (~y[0].indexOf("%") ? (E / 100) * S.width : E)),
          (T =
            S.y + (~(y[1] || y[0]).indexOf("%") ? (T / 100) * S.height : T))),
        r || (r !== !1 && o.smooth)
          ? ((b = E - u),
            (v = T - c),
            (o.xOffset = d + (b * p + v * h) - b),
            (o.yOffset = f + (b * g + v * m) - v))
          : (o.xOffset = o.yOffset = 0),
        (o.xOrigin = E),
        (o.yOrigin = T),
        (o.smooth = !!r),
        (o.origin = n),
        (o.originIsAbsolute = !!i),
        (t.style[de] = "0px 0px"),
        s &&
          (je(s, o, "xOrigin", u, E),
          je(s, o, "yOrigin", c, T),
          je(s, o, "xOffset", d, o.xOffset),
          je(s, o, "yOffset", f, o.yOffset)),
        t.setAttribute("data-svg-origin", E + " " + T);
    },
    Xt = function (t, n) {
      var i = t._gsap || new Ir(t);
      if ("x" in i && !n && !i.uncache) return i;
      var r = t.style,
        a = i.scaleX < 0,
        s = "px",
        o = "deg",
        l = getComputedStyle(t),
        u = Oe(t, de) || "0",
        c,
        d,
        f,
        p,
        g,
        h,
        m,
        b,
        v,
        y,
        E,
        T,
        S,
        C,
        A,
        k,
        P,
        M,
        _,
        x,
        $,
        I,
        w,
        O,
        z,
        L,
        R,
        Y,
        j,
        ae,
        fe,
        J;
      return (
        (c = d = f = h = m = b = v = y = E = 0),
        (p = g = 1),
        (i.svg = !!(t.getCTM && na(t))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (r[q] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[q] !== "none" ? l[q] : "")),
          (r.scale = r.rotate = r.translate = "none")),
        (C = pi(t, i.svg)),
        i.svg &&
          (i.uncache
            ? ((z = t.getBBox()),
              (u = i.xOrigin - z.x + "px " + (i.yOrigin - z.y) + "px"),
              (O = ""))
            : (O = !n && t.getAttribute("data-svg-origin")),
          mi(t, O || u, !!O || i.originIsAbsolute, i.smooth !== !1, C)),
        (T = i.xOrigin || 0),
        (S = i.yOrigin || 0),
        C !== Ht &&
          ((M = C[0]),
          (_ = C[1]),
          (x = C[2]),
          ($ = C[3]),
          (c = I = C[4]),
          (d = w = C[5]),
          C.length === 6
            ? ((p = Math.sqrt(M * M + _ * _)),
              (g = Math.sqrt($ * $ + x * x)),
              (h = M || _ ? wt(_, M) * at : 0),
              (v = x || $ ? wt(x, $) * at + h : 0),
              v && (g *= Math.abs(Math.cos(v * Et))),
              i.svg && ((c -= T - (T * M + S * x)), (d -= S - (T * _ + S * $))))
            : ((J = C[6]),
              (ae = C[7]),
              (R = C[8]),
              (Y = C[9]),
              (j = C[10]),
              (fe = C[11]),
              (c = C[12]),
              (d = C[13]),
              (f = C[14]),
              (A = wt(J, j)),
              (m = A * at),
              A &&
                ((k = Math.cos(-A)),
                (P = Math.sin(-A)),
                (O = I * k + R * P),
                (z = w * k + Y * P),
                (L = J * k + j * P),
                (R = I * -P + R * k),
                (Y = w * -P + Y * k),
                (j = J * -P + j * k),
                (fe = ae * -P + fe * k),
                (I = O),
                (w = z),
                (J = L)),
              (A = wt(-x, j)),
              (b = A * at),
              A &&
                ((k = Math.cos(-A)),
                (P = Math.sin(-A)),
                (O = M * k - R * P),
                (z = _ * k - Y * P),
                (L = x * k - j * P),
                (fe = $ * P + fe * k),
                (M = O),
                (_ = z),
                (x = L)),
              (A = wt(_, M)),
              (h = A * at),
              A &&
                ((k = Math.cos(A)),
                (P = Math.sin(A)),
                (O = M * k + _ * P),
                (z = I * k + w * P),
                (_ = _ * k - M * P),
                (w = w * k - I * P),
                (M = O),
                (I = z)),
              m &&
                Math.abs(m) + Math.abs(h) > 359.9 &&
                ((m = h = 0), (b = 180 - b)),
              (p = X(Math.sqrt(M * M + _ * _ + x * x))),
              (g = X(Math.sqrt(w * w + J * J))),
              (A = wt(I, w)),
              (v = Math.abs(A) > 2e-4 ? A * at : 0),
              (E = fe ? 1 / (fe < 0 ? -fe : fe) : 0)),
          i.svg &&
            ((O = t.getAttribute("transform")),
            (i.forceCSS = t.setAttribute("transform", "") || !sa(Oe(t, q))),
            O && t.setAttribute("transform", O))),
        Math.abs(v) > 90 &&
          Math.abs(v) < 270 &&
          (a
            ? ((p *= -1),
              (v += h <= 0 ? 180 : -180),
              (h += h <= 0 ? 180 : -180))
            : ((g *= -1), (v += v <= 0 ? 180 : -180))),
        (n = n || i.uncache),
        (i.x =
          c -
          ((i.xPercent =
            c &&
            ((!n && i.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
            ? (t.offsetWidth * i.xPercent) / 100
            : 0) +
          s),
        (i.y =
          d -
          ((i.yPercent =
            d &&
            ((!n && i.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
            ? (t.offsetHeight * i.yPercent) / 100
            : 0) +
          s),
        (i.z = f + s),
        (i.scaleX = X(p)),
        (i.scaleY = X(g)),
        (i.rotation = X(h) + o),
        (i.rotationX = X(m) + o),
        (i.rotationY = X(b) + o),
        (i.skewX = v + o),
        (i.skewY = y + o),
        (i.transformPerspective = E + s),
        (i.zOrigin = parseFloat(u.split(" ")[2]) || (!n && i.zOrigin) || 0) &&
          (r[de] = vn(u)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = ge.force3D),
        (i.renderTransform = i.svg ? Ru : Zr ? la : Lu),
        (i.uncache = 0),
        i
      );
    },
    vn = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    gi = function (t, n, i) {
      var r = ne(n);
      return X(parseFloat(n) + parseFloat(We(t, "x", i + "px", r))) + r;
    },
    Lu = function (t, n) {
      (n.z = "0px"),
        (n.rotationY = n.rotationX = "0deg"),
        (n.force3D = 0),
        la(t, n);
    },
    ot = "0deg",
    jt = "0px",
    lt = ") ",
    la = function (t, n) {
      var i = n || this,
        r = i.xPercent,
        a = i.yPercent,
        s = i.x,
        o = i.y,
        l = i.z,
        u = i.rotation,
        c = i.rotationY,
        d = i.rotationX,
        f = i.skewX,
        p = i.skewY,
        g = i.scaleX,
        h = i.scaleY,
        m = i.transformPerspective,
        b = i.force3D,
        v = i.target,
        y = i.zOrigin,
        E = "",
        T = (b === "auto" && t && t !== 1) || b === !0;
      if (y && (d !== ot || c !== ot)) {
        var S = parseFloat(c) * Et,
          C = Math.sin(S),
          A = Math.cos(S),
          k;
        (S = parseFloat(d) * Et),
          (k = Math.cos(S)),
          (s = gi(v, s, C * k * -y)),
          (o = gi(v, o, -Math.sin(S) * -y)),
          (l = gi(v, l, A * k * -y + y));
      }
      m !== jt && (E += "perspective(" + m + lt),
        (r || a) && (E += "translate(" + r + "%, " + a + "%) "),
        (T || s !== jt || o !== jt || l !== jt) &&
          (E +=
            l !== jt || T
              ? "translate3d(" + s + ", " + o + ", " + l + ") "
              : "translate(" + s + ", " + o + lt),
        u !== ot && (E += "rotate(" + u + lt),
        c !== ot && (E += "rotateY(" + c + lt),
        d !== ot && (E += "rotateX(" + d + lt),
        (f !== ot || p !== ot) && (E += "skew(" + f + ", " + p + lt),
        (g !== 1 || h !== 1) && (E += "scale(" + g + ", " + h + lt),
        (v.style[q] = E || "translate(0, 0)");
    },
    Ru = function (t, n) {
      var i = n || this,
        r = i.xPercent,
        a = i.yPercent,
        s = i.x,
        o = i.y,
        l = i.rotation,
        u = i.skewX,
        c = i.skewY,
        d = i.scaleX,
        f = i.scaleY,
        p = i.target,
        g = i.xOrigin,
        h = i.yOrigin,
        m = i.xOffset,
        b = i.yOffset,
        v = i.forceCSS,
        y = parseFloat(s),
        E = parseFloat(o),
        T,
        S,
        C,
        A,
        k;
      (l = parseFloat(l)),
        (u = parseFloat(u)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (u += c), (l += c)),
        l || u
          ? ((l *= Et),
            (u *= Et),
            (T = Math.cos(l) * d),
            (S = Math.sin(l) * d),
            (C = Math.sin(l - u) * -f),
            (A = Math.cos(l - u) * f),
            u &&
              ((c *= Et),
              (k = Math.tan(u - c)),
              (k = Math.sqrt(1 + k * k)),
              (C *= k),
              (A *= k),
              c &&
                ((k = Math.tan(c)),
                (k = Math.sqrt(1 + k * k)),
                (T *= k),
                (S *= k))),
            (T = X(T)),
            (S = X(S)),
            (C = X(C)),
            (A = X(A)))
          : ((T = d), (A = f), (S = C = 0)),
        ((y && !~(s + "").indexOf("px")) || (E && !~(o + "").indexOf("px"))) &&
          ((y = We(p, "x", s, "px")), (E = We(p, "y", o, "px"))),
        (g || h || m || b) &&
          ((y = X(y + g - (g * T + h * C) + m)),
          (E = X(E + h - (g * S + h * A) + b))),
        (r || a) &&
          ((k = p.getBBox()),
          (y = X(y + (r / 100) * k.width)),
          (E = X(E + (a / 100) * k.height))),
        (k =
          "matrix(" +
          T +
          "," +
          S +
          "," +
          C +
          "," +
          A +
          "," +
          y +
          "," +
          E +
          ")"),
        p.setAttribute("transform", k),
        v && (p.style[q] = k);
    },
    Nu = function (t, n, i, r, a) {
      var s = 360,
        o = Z(a),
        l = parseFloat(a) * (o && ~a.indexOf("rad") ? at : 1),
        u = l - r,
        c = r + u + "deg",
        d,
        f;
      return (
        o &&
          ((d = a.split("_")[1]),
          d === "short" &&
            ((u %= s), u !== u % (s / 2) && (u += u < 0 ? s : -360)),
          d === "cw" && u < 0
            ? (u = ((u + s * Xr) % s) - ~~(u / s) * s)
            : d === "ccw" && u > 0 && (u = ((u - s * Xr) % s) - ~~(u / s) * s)),
        (t._pt = f = new ue(t._pt, n, i, r, u, xu)),
        (f.e = c),
        (f.u = "deg"),
        t._props.push(i),
        f
      );
    },
    ua = function (t, n) {
      for (var i in n) t[i] = n[i];
      return t;
    },
    Fu = function (t, n, i) {
      var r = ua({}, i._gsap),
        a = "perspective,force3D,transformOrigin,svgOrigin",
        s = i.style,
        o,
        l,
        u,
        c,
        d,
        f,
        p,
        g;
      r.svg
        ? ((u = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (s[q] = n),
          (o = Xt(i, 1)),
          st(i, q),
          i.setAttribute("transform", u))
        : ((u = getComputedStyle(i)[q]),
          (s[q] = n),
          (o = Xt(i, 1)),
          (s[q] = u));
      for (l in Re)
        (u = r[l]),
          (c = o[l]),
          u !== c &&
            a.indexOf(l) < 0 &&
            ((p = ne(u)),
            (g = ne(c)),
            (d = p !== g ? We(i, l, u, g) : parseFloat(u)),
            (f = parseFloat(c)),
            (t._pt = new ue(t._pt, o, l, d, f - d, di)),
            (t._pt.u = g || 0),
            t._props.push(l));
      ua(o, r);
    };
  le("padding,margin,Width,Radius", function (e, t) {
    var n = "Top",
      i = "Right",
      r = "Bottom",
      a = "Left",
      s = (t < 3 ? [n, i, r, a] : [n + a, n + i, r + i, r + a]).map(function (
        o
      ) {
        return t < 2 ? e + o : "border" + o + e;
      });
    gn[t > 1 ? "border" + e : e] = function (o, l, u, c, d) {
      var f, p;
      if (arguments.length < 4)
        return (
          (f = s.map(function (g) {
            return Ne(o, g, u);
          })),
          (p = f.join(" ")),
          p.split(f[0]).length === 5 ? f[0] : p
        );
      (f = (c + "").split(" ")),
        (p = {}),
        s.forEach(function (g, h) {
          return (p[g] = f[h] = f[h] || f[((h - 1) / 2) | 0]);
        }),
        o.init(l, p, d);
    };
  });
  var ca = {
    name: "css",
    register: hi,
    targetTest: function (t) {
      return t.style && t.nodeType;
    },
    init: function (t, n, i, r, a) {
      var s = this._props,
        o = t.style,
        l = i.vars.startAt,
        u,
        c,
        d,
        f,
        p,
        g,
        h,
        m,
        b,
        v,
        y,
        E,
        T,
        S,
        C,
        A;
      li || hi(),
        (this.styles = this.styles || Qr(t)),
        (A = this.styles.props),
        (this.tween = i);
      for (h in n)
        if (
          h !== "autoRound" &&
          ((c = n[h]), !(ye[h] && Dr(h, n, i, r, t, a)))
        ) {
          if (
            ((p = typeof c),
            (g = gn[h]),
            p === "function" && ((c = c.call(i, r, t, a)), (p = typeof c)),
            p === "string" && ~c.indexOf("random(") && (c = Ft(c)),
            g)
          )
            g(this, t, h, c, i) && (C = 1);
          else if (h.substr(0, 2) === "--")
            (u = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
              (c += ""),
              (qe.lastIndex = 0),
              qe.test(u) || ((m = ne(u)), (b = ne(c))),
              b ? m !== b && (u = We(t, h, u, b) + b) : m && (c += m),
              this.add(o, "setProperty", u, c, r, a, 0, 0, h),
              s.push(h),
              A.push(h, 0, o[h]);
          else if (p !== "undefined") {
            if (
              (l && h in l
                ? ((u =
                    typeof l[h] == "function" ? l[h].call(i, r, t, a) : l[h]),
                  Z(u) && ~u.indexOf("random(") && (u = Ft(u)),
                  ne(u + "") ||
                    u === "auto" ||
                    (u += ge.units[h] || ne(Ne(t, h)) || ""),
                  (u + "").charAt(1) === "=" && (u = Ne(t, h)))
                : (u = Ne(t, h)),
              (f = parseFloat(u)),
              (v = p === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              v && (c = c.substr(2)),
              (d = parseFloat(c)),
              h in $e &&
                (h === "autoAlpha" &&
                  (f === 1 && Ne(t, "visibility") === "hidden" && d && (f = 0),
                  A.push("visibility", 0, o.visibility),
                  je(
                    this,
                    o,
                    "visibility",
                    f ? "inherit" : "hidden",
                    d ? "inherit" : "hidden",
                    !d
                  )),
                h !== "scale" &&
                  h !== "transform" &&
                  ((h = $e[h]), ~h.indexOf(",") && (h = h.split(",")[0]))),
              (y = h in Re),
              y)
            ) {
              if (
                (this.styles.save(h),
                E ||
                  ((T = t._gsap),
                  (T.renderTransform && !n.parseTransform) ||
                    Xt(t, n.parseTransform),
                  (S = n.smoothOrigin !== !1 && T.smooth),
                  (E = this._pt =
                    new ue(this._pt, o, q, 0, 1, T.renderTransform, T, 0, -1)),
                  (E.dep = 1)),
                h === "scale")
              )
                (this._pt = new ue(
                  this._pt,
                  T,
                  "scaleY",
                  T.scaleY,
                  (v ? gt(T.scaleY, v + d) : d) - T.scaleY || 0,
                  di
                )),
                  (this._pt.u = 0),
                  s.push("scaleY", h),
                  (h += "X");
              else if (h === "transformOrigin") {
                A.push(de, 0, o[de]),
                  (c = Iu(c)),
                  T.svg
                    ? mi(t, c, 0, S, 0, this)
                    : ((b = parseFloat(c.split(" ")[2]) || 0),
                      b !== T.zOrigin && je(this, T, "zOrigin", T.zOrigin, b),
                      je(this, o, h, vn(u), vn(c)));
                continue;
              } else if (h === "svgOrigin") {
                mi(t, c, 1, S, 0, this);
                continue;
              } else if (h in aa) {
                Nu(this, T, h, f, v ? gt(f, v + c) : c);
                continue;
              } else if (h === "smoothOrigin") {
                je(this, T, "smooth", T.smooth, c);
                continue;
              } else if (h === "force3D") {
                T[h] = c;
                continue;
              } else if (h === "transform") {
                Fu(this, c, t);
                continue;
              }
            } else h in o || (h = St(h) || h);
            if (
              y ||
              ((d || d === 0) && (f || f === 0) && !_u.test(c) && h in o)
            )
              (m = (u + "").substr((f + "").length)),
                d || (d = 0),
                (b = ne(c) || (h in ge.units ? ge.units[h] : m)),
                m !== b && (f = We(t, h, u, b)),
                (this._pt = new ue(
                  this._pt,
                  y ? T : o,
                  h,
                  f,
                  (v ? gt(f, v + d) : d) - f,
                  !y && (b === "px" || h === "zIndex") && n.autoRound !== !1
                    ? Eu
                    : di
                )),
                (this._pt.u = b || 0),
                m !== b && b !== "%" && ((this._pt.b = u), (this._pt.r = Tu));
            else if (h in o) zu.call(this, t, h, u, v ? v + c : c);
            else if (h in t) this.add(t, h, u || t[h], v ? v + c : c, r, a);
            else if (h !== "parseTransform") {
              Fn(h, c);
              continue;
            }
            y ||
              (h in o
                ? A.push(h, 0, o[h])
                : typeof t[h] == "function"
                ? A.push(h, 2, t[h]())
                : A.push(h, 1, u || t[h])),
              s.push(h);
          }
        }
      C && Yr(this);
    },
    render: function (t, n) {
      if (n.tween._time || !ui())
        for (var i = n._pt; i; ) i.r(t, i.d), (i = i._next);
      else n.styles.revert();
    },
    get: Ne,
    aliases: $e,
    getSetter: function (t, n, i) {
      var r = $e[n];
      return (
        r && r.indexOf(",") < 0 && (n = r),
        n in Re && n !== de && (t._gsap.x || Ne(t, "x"))
          ? i && Hr === i
            ? n === "scale"
              ? Au
              : Cu
            : (Hr = i || {}) && (n === "scale" ? Mu : Pu)
          : t.style && !zn(t.style[n])
          ? wu
          : ~n.indexOf("-")
          ? Su
          : ii(t, n)
      );
    },
    core: { _removeProperty: st, _getMatrix: pi },
  };
  (ce.utils.checkPrefix = St),
    (ce.core.getStyleSaver = Qr),
    (function (e, t, n, i) {
      var r = le(e + "," + t + "," + n, function (a) {
        Re[a] = 1;
      });
      le(t, function (a) {
        (ge.units[a] = "deg"), (aa[a] = 1);
      }),
        ($e[r[13]] = e + "," + t),
        le(i, function (a) {
          var s = a.split(":");
          $e[s[1]] = r[s[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    le(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (e) {
        ge.units[e] = "px";
      }
    ),
    ce.registerPlugin(ca);
  var Ct = ce.registerPlugin(ca) || ce;
  Ct.core.Tween;
  const Bu = () => {
      const e = document.querySelector("[nav-menu='trigger']"),
        t = document.querySelector("[nav-menu='component']"),
        n = document.querySelector("[nav-menu='contain']"),
        i = document.querySelector("[main-nav='brand']"),
        r = document.querySelector("[nav-menu='brand']"),
        a = document.querySelectorAll("[nav-menu='link-item']"),
        s = document.querySelector("[nav-menu='info-text']"),
        o = document.querySelectorAll("[nav-menu='social-link']");
      if (!e || !t || !n || !r || !a || !s || !o) return;
      Ct.set(t, { clipPath: "inset(0% 0% 100% 0%)" }),
        Ct.set([r, a, o], { y: "100%", opacity: 0 }),
        Ct.set(s, { y: "20%", opacity: 0 });
      const l = Ct.timeline({ paused: !0 }),
        u = Ct.timeline({ paused: !0 });
      l
        .to(t, {
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
          a,
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
          s,
          { y: "0%", opacity: 1, duration: 1.2, ease: "expo.out" },
          "-=0.9"
        )
        .to(
          o,
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
          .to([r, a], {
            y: "100%",
            duration: 0.6,
            ease: "expo.in",
            opacity: 0,
            stagger: 0.05,
          })
          .to(
            [s, o],
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
            i,
            { x: "0%", duration: 0.8, opacity: 1, ease: "expo.out" },
            "-=0.2"
          ),
        e.addEventListener("click", () => {
          const d =
            e.getAttribute("hamburger-state") === "open" ? "closed" : "open";
          e.setAttribute("hamburger-state", d),
            d === "open" ? (u.pause(), l.play(0)) : (l.pause(), u.play(0));
        });
    },
    Yu = () => {
      Bu();
    },
    Vu = () => {
      let e,
        t,
        n,
        i,
        r = [],
        a = 0;
      const s = () => {
          const c = t.createImageData(n, i),
            d = new Uint32Array(c.data.buffer),
            f = d.length;
          for (let p = 0; p < f; p++)
            Math.random() < 0.5 && (d[p] = 4278190080);
          r.push(c);
        },
        o = () => {
          a === 9 ? (a = 0) : a++, t.putImageData(r[a], 0, 0);
        },
        l = () => {
          o(),
            window.setTimeout(() => {
              window.requestAnimationFrame(l);
            }, 1e3 / 25);
        },
        u = () => {
          (n = window.innerWidth),
            (i = window.innerHeight),
            (e.width = n),
            (e.height = i);
          for (let c = 0; c < 10; c++) s();
          l();
        };
      (e = document.getElementById("noise")), (t = e.getContext("2d")), u();
    },
    Gu = () => {
      Vu();
    },
    qu = () => {
      Tl(), El(), Sl(), Yu(), Gu();
    },
    Hu = () => {
      const e = nn(".example-component");
      e &&
        (bl(e, "is-initialized"),
        e.addEventListener("click", () => {
          console.log("Example component clicked!");
        }));
    },
    Xu = () => {
      Hu();
    };
  document.addEventListener("DOMContentLoaded", () => {
    qu(), Xu(), xl();
  });
});
